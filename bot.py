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
    elif msg == 'yon':
        keyboard.add_button('Да', color=VkKeyboardColor.POSITIVE)
        keyboard.add_line()
        keyboard.add_button('Нет', color=VkKeyboardColor.NEGATIVE)
    elif msg == 'возраст_диапазон':
        keyboard.add_button('0-17', color=VkKeyboardColor.PRIMARY)
        keyboard.add_line()
        keyboard.add_button('18-64', color=VkKeyboardColor.PRIMARY)
        keyboard.add_line()
        keyboard.add_button('64-...', color=VkKeyboardColor.PRIMARY)

    else:
        keyboard.add_button(msg, color=VkKeyboardColor.PRIMARY)
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
        if msg_kb:
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
            events = self.longpoll.check()
            for event in events:
                if event.type == VkEventType.MESSAGE_NEW and event.to_me and event.text:
                    try:
                        if event.text.lower() == 'начать':
                                self.send(event.user_id, 'Добро пожаловать в бота! Отвечая на вопросы, вы сможете узнать какие льготы вам положены.\nПриступим?', 'yon')
                                if not self.connection.info_status(event.user_id):
                                    self.connection.new_person(event.user_id)
                                self.connection.update_info(event.user_id, status='приступим?')


                        else:
                            self.main_logic(event.user_id, event.text)
                    except Exception as e:
                        print(traceback.format_exc())
                        self.send(event.user_id, 'Упс! Что-то не так')
    def main_logic(self, user_id, message):
        try:
            status = self.connection.info_status(user_id)[4]
        except:
            self.send(user_id, 'Похоже, что ты новенький. Нажми начать', 'Начать')
            return
        if status == 'приступим?':
            if message == 'Да':
                self.send(user_id, 'Каков ваш возраст?', 'возраст_диапазон')
                self.connection.update_info(user_id, status='выб_возраст')
        elif status == 'выб_возраст':
            self.connection.update_info(user_id, par=json.dumps({'age': f'{message}'}), status='опрос')
            text, msg_kb = self.connection.get_category(user_id)
            self.send(user_id, text, msg_kb)
        elif len(status.split('_')) == 2:
            if message == 'Да':
                message = 'Yes'
            elif message == 'Нет':
                message = 'No'
            status = status.split('_')
            part1_js = json.dumps(self.connection.get_info_category(status[1]))
            part2_js = json.dumps(json.loads(self.connection.info_status(user_id)[3]))
            self.connection.update_info(user_id, par=part2_js + part1_js, status='опрос')
            text, type_of_category = self.connection.get_category(user_id)
            self.send(user_id, self.connection.get_category(user_id), )








bot_obj = bot(TOKEN_BOT, db_connection)
bot_obj.start_of_work()








