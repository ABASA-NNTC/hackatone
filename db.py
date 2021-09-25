from mysql.connector import connect, Error
from information import HOST_DB, USER_DB, PASSWORD_DB, DBNAME_DB
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
        with self.connection.cursor() as cursor:
            cursor.execute('SELECT * FROM persons WHERE idperson = {0}'.format( user_id))
            result = cursor.fetchall()
            try:
                return result[0]
            except:
                return False
    def new_person(self, user_id):
        with self.connection.cursor() as cursor:
            cursor.execute(f'INSERT INTO persons (idperson) VALUES ({user_id})')
            self.connection.commit()
    def update_info(self, user_id, **att_val):
        change_set = ''
        for att, val in att_val.items():
            change_set += ' {} = \'{}\','.format(att, val)
        change_set = change_set[:-1]
        with self.connection.cursor() as cursor:
            cursor.execute('UPDATE persons SET{} WHERE idperson="{}"'.format(change_set, user_id))
            self.connection.commit()
    def get_category(self, user_id):
        status = self.info_status(user_id)[4].split('_')
        with self.connection.cursor() as cursor:
            if len(status) == 2:
                cursor.execute('SELECT * FROM category WHERE idcategory > {}'.format(status[1]))
            elif len(status) == 1:
                cursor.execute('SELECT * FROM category')
            try:
                result = cursor.fetchall()[0]
            except:
                self.update_info(user_id, status='конец')
                return 'Анкетирование закончилось', None
            self.update_info(user_id, status=status[0] + '_' + str(result[0]))
            if result[3] == 'bool':
                msg_kb = 'yon'

            return (result[2], msg_kb)
    def get_info_category(self, category_id):
        with self.connection.cursor() as cursor:
            cursor.execute('SELECT * FROM category WHERE idcategory = {}'.format(category_id))
            try:
                 return cursor.fetchall()[0]
            except:
                return




db_connection = connection(HOST_DB, USER_DB, PASSWORD_DB, DBNAME_DB)

