import aiohttp
from validate_email import validate_email

from db_code import db

db = db(datebase_file='db_hbot.db')
start = "http://localhost:8080"

loglist = {}
usersCategoryLists = {}


async def signIn(email, password, id_telegram):
    async with aiohttp.ClientSession() as session:
        info = {'email': email, 'password': password}
        async with session.post(start + '/api/auth/login', data=info) as response:
            if response.status == 200:
                json_body = await response.json()
                await db.addNewUser(json_body['id'], id_telegram, email, password)
            return response.status


async def createAccount(name, surname, password, sex, department_id, email, id_telegram):
    async with aiohttp.ClientSession() as session:
        info = {'name': name, 'surname': surname, 'password': password, 'sex': sex, 'department_id': department_id,
                'email': email}
        async with session.post(start + '/api/auth/register', data=info) as response:  # TODO: зачем тут as response
            pass  # TODO: если ты просто пропускаешь, то зачем это действие?
        info = {'email': email, 'password': password}
        async with session.post(start + '/api/auth/login', data=info) as response:
            json_body = await response.json()
            if response.status == 200:
                await db.addNewUser(json_body['id'], id_telegram, email, password)
            return response.status


async def getUserInformation(id_telegram):
    async with aiohttp.ClientSession() as session:
        userID = str(db.getUserID(id_telegram)[0][0])
        async with session.get(start + '/api/get/user/' + userID) as response:
            if response.status == 200:
                json_body = await response.json()
                return json_body
            return {}


async def getUserCart(id_telegram):
    async with aiohttp.ClientSession() as session:
        userID = str(db.getUserID(id_telegram)[0][0])
        async with session.get(start + '/api/get/user/basket/' + userID) as response:
            if response.status == 200:
                json_body = await response.json()
                return json_body
            return []


async def getUserWishList(id_telegram):
    async with aiohttp.ClientSession() as session:
        userID = str(db.getUserID(id_telegram)[0][0])
        async with session.get(start + '/api/get/user/wish/' + userID) as response:
            if response.status == 200:
                json_body = await response.json()
                return json_body
            return []


async def getUserCategoryList():
    async with aiohttp.ClientSession() as session:
        async with session.get(start + '/api/get/category/all') as response:
            if response.status == 200:
                json_body = await response.json()
                return json_body
            return []


async def getItemListByCategory(id_category):
    async with aiohttp.ClientSession() as session:
        async with session.get(start + '/api/get/category/' + str(id_category)) as response:
            if response.status == 200:
                json_body = await response.json()
                return json_body
            return []


async def getItemInfo(id_item):
    async with aiohttp.ClientSession() as session:
        async with session.get(start + '/api/get/item/' + id_item) as response:
            if response.status == 200:
                json_body = await response.json()
                return json_body
            return {}


async def addItemToUserCart(id_item, id_telegram):
    async with aiohttp.ClientSession() as session:
        email = (db.getUserEmail(id_telegram))[0][0]
        password = (db.getUserPassword(id_telegram))[0][0]
        info = {'item_id': int(id_item), 'email': email, 'password': password}
        async with session.post(start + '/api/user/basket/add/' + id_item, data=info) as response:
            return response.status == 200


async def delItemToUserCart(id_item, id_telegram):
    async with aiohttp.ClientSession() as session:
        email = (db.getUserEmail(id_telegram))[0][0]
        password = (db.getUserPassword(id_telegram))[0][0]
        info = {'item_id': int(id_item), 'email': email, 'password': password}
        async with session.delete(start + '/api/user/basket/delete/' + id_item, data=info) as response:
            return response.status == 200


async def addItemToUserWishList(id_item, id_telegram):
    async with aiohttp.ClientSession() as session:
        email = (db.getUserEmail(id_telegram))[0][0]
        password = (db.getUserPassword(id_telegram))[0][0]
        info = {'item_id': int(id_item), 'email': email, 'password': password}
        async with session.post(start + '/api/user/wish/add/' + id_item, data=info) as response:
            return response.status == 200


async def delItemToUserWishList(id_item, id_telegram):
    async with aiohttp.ClientSession() as session:
        email = (db.getUserEmail(id_telegram))[0][0]
        password = (db.getUserPassword(id_telegram))[0][0]
        info = {'item_id': int(id_item), 'email': email, 'password': password}
        async with session.delete(start + '/api/user/wish/delete/' + id_item, data=info) as response:
            return response.status == 200


async def buyItemNow(id_item, id_telegram):
    async with aiohttp.ClientSession() as session:
        email = (db.getUserEmail(id_telegram))[0][0]
        password = (db.getUserPassword(id_telegram))[0][0]
        info = {'item_id': int(id_item), 'email': email, 'password': password}
        async with session.post(start + '/api/user/basket/buy/' + id_item, data=info) as response:
            return response.status == 200


async def buyAllItems(id_telegram):
    async with aiohttp.ClientSession() as session:
        email = (db.getUserEmail(id_telegram))[0][0]
        password = (db.getUserPassword(id_telegram))[0][0]
        info = {'email': email, 'password': password}
        async with session.post(start + '/api/user/basket/buy', data=info) as response:
            return response.status == 200


async def clearUserCart(id_telegram):
    async with aiohttp.ClientSession() as session:
        email = (db.getUserEmail(id_telegram))[0][0]
        password = (db.getUserPassword(id_telegram))[0][0]
        info = {'email': email, 'password': password}
        async with session.delete(start + '/api/user/basket', data=info) as response:
            return response.status == 200


async def clearUserWishList(id_telegram):
    async with aiohttp.ClientSession() as session:
        email = (db.getUserEmail(id_telegram))[0][0]
        password = (db.getUserPassword(id_telegram))[0][0]
        info = {'email': email, 'password': password}
        async with session.delete(start + '/api/user/wish', data=info) as response:
            return response.status == 200


async def getStatusItemCart(id_item, id_telegram):
    async with aiohttp.ClientSession() as session:
        email = (db.getUserEmail(id_telegram))[0][0]
        password = (db.getUserPassword(id_telegram))[0][0]
        info = {'email': email, 'password': password}
        async with session.get(start + '/api/user/basket/contains/' + id_item, data=info) as response:
            if True:
                json_body = await response.json()
                return json_body['contains'] == 'true'
            return False


async def getStatusItemWishList(id_item, id_telegram):
    async with aiohttp.ClientSession() as session:
        email = (db.getUserEmail(id_telegram))[0][0]
        password = (db.getUserPassword(id_telegram))[0][0]
        info = {'email': email, 'password': password}
        async with session.get(start + '/api/user/wish/contains/' + id_item, data=info) as response:
            if True:
                json_body = await response.json()
                return json_body['contains'] == 'true'
            return False


async def delUser(id_telegram):
    await db.deleteUser(id_telegram)
    return True


async def getAdminStatus(id_telegram):
    return bool(db.getStatusAdmin(id_telegram)[0][0])


def getStatusUser(id_telegram):
    return db.getStatus(id_telegram)


def okInfoForSignIn(email, password):
    if validate_email(email) and 6 <= len(password) <= 20:
        return True
    return False


def okInfoForCreateAccount(name, surname, password, sex, department_id, email):  # TODO: зачем тут name и surname
    if validate_email(email) and 6 <= len(password) <= 20 and type(sex) is bool and type(department_id) is int:
        return True
    return False
