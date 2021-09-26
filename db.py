from mysql.connector import connect, Error
from information import HOST_DB, USER_DB, PASSWORD_DB, DBNAME_DB
import json
class connection:
    def create_connection(self, HOST_DB, USER_DB_BOT_NRTC, PASSWORD_DB_BOT_NRTC, DBNAME_DB_BOT_NRTC):
        '''
        возвращает подключение, которое потом принимается в качестве одного из аргументов для основного класса bot
        :return:
        '''
        try:
            connection = connect(
                host=HOST_DB,
                user=USER_DB_BOT_NRTC,
                password=PASSWORD_DB_BOT_NRTC,
                database=DBNAME_DB_BOT_NRTC,
                buffered=True)
            if connection.is_connected():
                print('Connected to MySQL database')
            return connection
        except Error as e:
            print(e)
    def __init__(self, HOST_DB, USER_DB_BOT_NRTC, PASSWORD_DB_BOT_NRTC, DBNAME_DB_BOT_NRTC):
        self.connection = self.create_connection(HOST_DB, USER_DB_BOT_NRTC, PASSWORD_DB_BOT_NRTC, DBNAME_DB_BOT_NRTC)

    def info_status(self, user_id):
        '''
        получаем информацию о заданном пользователе
        :param user_id:
        :return:
        '''
        with self.connection.cursor() as cursor:
            cursor.execute('SELECT * FROM persons WHERE idperson = {0}'.format( user_id))
            result = cursor.fetchall()
            try:
                return result[0]
            except:
                return False

    def new_person(self, user_id):
        '''
        Добавляем новенького
        :param user_id:
        :return:
        '''
        with self.connection.cursor() as cursor:
            cursor.execute(f'INSERT INTO persons (idperson) VALUES ({user_id})')
            self.connection.commit()

    def update_info(self, user_id, **att_val):
        '''
        сюда обращаемся, чтобы обновить информацию о пользователе
        :param user_id:
        :param att_val:
        :return:
        '''
        change_set = ''
        for att, val in att_val.items():
            change_set += ' {} = \'{}\','.format(att, val)
        change_set = change_set[:-1]
        with self.connection.cursor() as cursor:
            cursor.execute('UPDATE persons SET{} WHERE idperson="{}"'.format(change_set, user_id))
            self.connection.commit()

    def get_category(self, user_id):
        '''
        получаем текст для следующей категории
        :param user_id:
        :return:
        '''
        # получаем статус пользователя
        status = self.info_status(user_id)[4].split('_')
        # вытаскиваем категории и условия для их отображения пользователю
        with self.connection.cursor() as cursor:
            cursor.execute('SELECT idcategory, conditions FROM category')
            result = cursor.fetchall()

        par = json.loads(self.info_status(user_id)[3]) #параметры пользователя
        id_category_mute = [] #категории в муте. Они не будут отправляться в следующем запросе категории
        for row in result:
            if row[1]:
                priv_con = json.loads(row[1])
                need_count = len(priv_con)
                for key, value in priv_con.items():
                    #если есть несовпадение или же отсутствует данный параметр на данный момент, то отправляем категорию в мут
                    if not(key in par) or priv_con[key] != par[key]:
                        id_category_mute.append(row[0])
                        break

        with self.connection.cursor() as cursor:
            #берём вакансии почти без разбора
            if len(status) == 2:
                cursor.execute('SELECT * FROM category WHERE idcategory > {}'.format(status[1]))
            elif len(status) == 1:
                cursor.execute('SELECT * FROM category')
            try:
                all_id = []
                result = cursor.fetchall()
                for el in result:
                    all_id.append(el[0])
                #в результирующем наборе берём разность почти всех или всех вакансий и вакансий в муте
                result = sorted(list(set(all_id) - set(id_category_mute)))[0]
                cursor.execute('SELECT * FROM category WHERE idcategory = "{}"'.format(result))
                result = cursor.fetchall()[0]
            except:
                self.update_info(user_id, status='конец')
                return 'Анкетирование закончилось', 'off_keyboard'

            self.update_info(user_id, status=status[0] + '_' + str(result[0]))
            js_cat = json.loads(result[3])
            if js_cat[0] == 'bool':
                msg_kb = 'yon'
            else:
                msg_kb = js_cat
                # print(msg_kb)

            return result[2], msg_kb

    def get_info_category(self, category_id):
        with self.connection.cursor() as cursor:
            cursor.execute('SELECT * FROM category WHERE idcategory = {}'.format(category_id))
            try:
                 return cursor.fetchall()[0]
            except:
                return


    def check_new_privilegies(self, user_id):
        par = json.loads(self.info_status(user_id)[3])
        with self.connection.cursor() as cursor:
            cursor.execute(f'SELECT idprivilege, conditions FROM privileges WHERE idprivilege NOT IN (SELECT idprivilege FROM persons_has_privileges WHERE idperson = {user_id})')
            result = cursor.fetchall()
        fl = 0
        count_new_privilegies = 0
        for row in result:
            priv_con = json.loads(row[1])
            need_count = len(priv_con)
            k = 0
            for key, value in priv_con.items():
                if key in par and priv_con[key] == par[key]:
                    k += 1
                else:
                    break
            if k == need_count:
                with self.connection.cursor() as cursor:
                    cursor.execute('INSERT INTO persons_has_privileges VALUES ({}, {})'.format(user_id, row[0]))
                    self.connection.commit()
                count_new_privilegies += 1
        return count_new_privilegies
    def list_privilegies(self, user_id):
        with self.connection.cursor() as cursor:
            cursor.execute(f'SELECT name FROM privileges WHERE idprivilege IN (SELECT idprivilege FROM persons_has_privileges WHERE idperson = {user_id})')
            result = cursor.fetchall()
        if result:
            message = 'Список доступных льгот:'
            for el in result:
                message += '\n'+el[0]
        else:
            message = 'Не можем найти льготы для вас'
        return message


db_connection = connection(HOST_DB, USER_DB, PASSWORD_DB, DBNAME_DB)

