import vk_api
from vk_api.longpoll import VkLongPoll, VkEventType
from vk_api.keyboard import VkKeyboard, VkKeyboardColor
import random
from information import TOKEN_BOT
import traceback
from db import db_connection
import json


def create_keyboard(msg='off_keyboard', one_time=False):  # функция для создания клавиатуры
    # параметр one_time отвечает за то, чтобы клавиатура пропадала после отправления сообщения
    keyboard = VkKeyboard(one_time=one_time)  # код ищет нужный шаблон
    if msg == 'off_keyboard':  # чтобы убрать клавиатуру
        return keyboard.get_empty_keyboard()
    elif msg == 'нач':
        keyboard.add_button('Да, конечно', color=VkKeyboardColor.POSITIVE)
        keyboard.add_line()
        keyboard.add_button('Нет', color=VkKeyboardColor.NEGATIVE)
    elif msg == 'yon':
        keyboard.add_button('Да', color=VkKeyboardColor.POSITIVE)
        keyboard.add_line()
        keyboard.add_button('Нет', color=VkKeyboardColor.NEGATIVE)
    elif msg == 'возраст_диапазон':
        keyboard.add_button('0-17', color=VkKeyboardColor.PRIMARY)
        keyboard.add_line()
        keyboard.add_button('18-64', color=VkKeyboardColor.PRIMARY)
        keyboard.add_line()
        keyboard.add_button('65-...', color=VkKeyboardColor.PRIMARY)
    elif msg == 'конец':
        keyboard.add_button('Посмотреть на мои льготы', color=VkKeyboardColor.POSITIVE)
    elif type(msg) == list:
        for i in range(len(msg) - 1):
            keyboard.add_button(msg[i], color=VkKeyboardColor.PRIMARY)
            keyboard.add_line()
        keyboard.add_button(msg[-1], color=VkKeyboardColor.PRIMARY)
    else:
        keyboard.add_button(msg, color=VkKeyboardColor.PRIMARY)
    if msg not in ('возраст_диапазон', 'нач', 'конец'):
        keyboard.add_line()
        keyboard.add_button('Посмотреть на мои льготы', color=VkKeyboardColor.PRIMARY)
    keyboard = keyboard.get_keyboard()
    return keyboard

class bot:  # класс с основными атрибутами и методами для работы с ботом
    def __init__(self, token, connection):  # инициализируем нужные переменные для работы
        self.vk_session = vk_api.VkApi(token=token)
        self.longpoll = VkLongPoll(self.vk_session)  # longpoll сессия
        self.vk = self.vk_session.get_api()  # сюда обращаемся для каких-либо действий
        self.connection = connection
        print('Инициализация бота выполнена')

    def send(self, user_id, text, msg_kb=None, one_time=False):  # через эту функцию отправляем сообщения
        if msg_kb: #проверяем есть ли что-то для клавиатуры
            self.vk.messages.send(user_id=user_id,
                                  message=text,
                                  random_id=random.randint(0, 100000000),
                                  keyboard=create_keyboard(msg_kb, one_time=one_time)
                                  )
        else:
            self.vk.messages.send(user_id=user_id,
                                  message=text,
                                  random_id=random.randint(0, 100000000)
                                  )

    def start_of_work(self):  # метод для запуска лонгпулл сессии
        while True:
            events = self.longpoll.check() #список событий
            for event in events:
                if event.type == VkEventType.MESSAGE_NEW and event.to_me and event.text:
                    try:
                        if event.text.lower() == 'начать': #для первого знакомства
                                self.send(event.user_id, 'Добро пожаловать в бота! Отвечая на вопросы, вы сможете узнать какие льготы вам положены.\nПриступим?', 'нач')
                                if not self.connection.info_status(event.user_id):
                                    self.connection.new_person(event.user_id) #добавление нового человека
                                self.connection.update_info(event.user_id, status='приступим?')
                        else:
                            self.main_logic(event.user_id, event.text)#основная обработка сообщений находится здесь
                    except Exception as e:
                        print(traceback.format_exc()) #выводим ошибку
                        self.send(event.user_id, 'Упс! Что-то не так')
    def main_logic(self, user_id, message):
        try:
            status = self.connection.info_status(user_id)[4] #в базе данных здесь находится статус пользователя
        except:
            self.send(user_id, 'Похоже, что ты новенький. Нажми начать', 'Начать')
            return #на случай если чёт пишут и без поля в бд
        if message == 'Посмотреть на мои льготы':
            self.send(user_id, self.connection.list_privilegies(user_id))
        elif status == 'приступим?':
            if message == 'Да, конечно':
                self.send(user_id, 'Каков ваш возраст?', 'возраст_диапазон')
                self.connection.update_info(user_id, status='выб_возраст')
            elif message == 'Нет':
                self.send(user_id, 'Так неинтересно ведь :(')
        elif status == 'выб_возраст':
            self.connection.update_info(user_id, par=json.dumps({'age': f'{message}'}), status='опрос')
            text, msg_kb = self.connection.get_category(user_id)
            self.send(user_id, text, msg_kb)
            count_new_privilegies = self.connection.check_new_privilegies(user_id)
            if count_new_privilegies:
                self.send(user_id, 'Вы можете претендовать на {} льгот(у) больше'.format(count_new_privilegies))
        elif len(status.split('_')) == 2:
            status = status.split('_')#разделяем, чтобы проще было обращаться к данным в статусе
            if message == 'Да':
                message = True
            elif message == 'Нет':
                message = False
            part_js = json.loads(self.connection.info_status(user_id)[3])#обновляем JSON новыми данными
            part_js[self.connection.get_info_category(status[1])[1]] = message
            part_js = json.dumps(part_js, ensure_ascii=False,)
            self.connection.update_info(user_id, par=part_js)
            text, msg_kb = self.connection.get_category(user_id) #получаем новый вопрос
            self.send(user_id, text, msg_kb)
            count_new_privilegies = self.connection.check_new_privilegies(user_id)#обновляем кол-во льгот
            if count_new_privilegies:
                self.send(user_id, 'Вы можете претендовать на {} льгот(у) больше'.format(count_new_privilegies))
        try: #в конце статистику показываем
            if text == 'Анкетирование закончилось':
                self.send(user_id, self.connection.list_privilegies(user_id), 'конец')
        except:
            pass
bot_obj = bot(TOKEN_BOT, db_connection)
bot_obj.start_of_work()








