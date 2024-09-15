import logging
from aiogram import Bot, Dispatcher, executor, types
import user_methods

logging.basicConfig(level=logging.INFO)

bot = Bot(token='5283640535:AAFHqwespLS0xLi-9NicZuhvaqAj6jmpMNE')

dp = Dispatcher(bot)


def auth(func):
    async def wrapper(message):
        if not user_methods.getStatusUser(message['from']['id']):
            keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
            item1 = types.KeyboardButton('Sign-in')
            item2 = types.KeyboardButton('Create account')
            keyboard.add(item1, item2)
            return await message.answer('You are not authorized. Sign in or create a new account',
                                        reply_markup=keyboard)
        return await func(message)

    return wrapper


def authAdmin(func):
    async def wrapper(message):
        if not user_methods.getAdminStatus(message['from']['id']):
            return await message.answer('Not enough rights')
        return await func(message)

    return wrapper


@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
    item1 = types.KeyboardButton('Sign-in')
    item2 = types.KeyboardButton('Create account')
    keyboard.add(item1, item2)
    await message.answer("Hello, I'm HBot!", reply_markup=keyboard)


@dp.message_handler(lambda c: c.text and c.text.startswith('Sign-in'))
async def answer_SignIn(message: types.Message):
    if message.text == 'Sign-in':
        user_methods.loglist[message['from']['id']] = 1
        await message.answer(
            'Enter your email and password(separated by a space, without extra characters) to sign-in:')


@dp.message_handler(lambda c: c.text and c.text.startswith('Create account'))
async def answer_CreateAccount(message: types.Message):
    if message.text == 'Create account':
        user_methods.loglist[message['from']['id']] = 2
        await message.answer(
            'Enter your name, surname, password, sex(M for men, W for women), department id, email(separated by a space, without extra characters) to craete account:')


@dp.message_handler(lambda c: c.text and c['from']['id'] in user_methods.loglist.keys())
async def creatAccount_or_signIn(message: types.Message):
    if message['from']['id'] in user_methods.loglist.keys():
        if user_methods.loglist[message['from']['id']] == 1:
            info = list(message.text.split())
            if True:  # len(info) == 2:
                if user_methods.okInfoForSignIn(info[0], info[1]):
                    if await user_methods.signIn(info[0], info[1], message['from']['id']) == 200:
                        del user_methods.loglist[message['from']['id']]
                        keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
                        item1 = types.KeyboardButton('Store')
                        item2 = types.KeyboardButton('Wish list')
                        item3 = types.KeyboardButton('Information')
                        item4 = types.KeyboardButton('Cart')
                        keyboard.add(item1, item2, item3, item4)
                        await message.answer('You have successfully logged in. Enjoy using.', reply_markup=keyboard)
                    else:
                        await message.answer('Failed to sign in. Try again.')
                else:
                    await message.answer('Incorrect data entered. Try again.')
            else:
                await message.answer('Incorrect data entered. Try again.')
        elif user_methods.loglist[message['from']['id']] == 2:
            info = list(message.text.split())
            if info[3] == 'M':
                info[3] = True
            else:
                info[3] = False
            if info[4].isdigit():
                info[4] = int(info[4])
            if True:  # len(info) == 6:
                if user_methods.okInfoForCreateAccount(info[0], info[1], info[2], info[3], info[4], info[5]):
                    if await user_methods.createAccount(info[0], info[1], info[2], info[3], info[4], info[5],
                                                        message['from']['id']) == 200:
                        del user_methods.loglist[message['from']['id']]
                        keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
                        item1 = types.KeyboardButton('Store')
                        item2 = types.KeyboardButton('Wish list')
                        item3 = types.KeyboardButton('Information')
                        item4 = types.KeyboardButton('Cart')
                        keyboard.add(item1, item2, item3, item4)
                        await message.answer('You have successfully created an account. Enjoy using.',
                                             reply_markup=keyboard)
                    else:
                        await message.answer('Failed to create account. Try again.')
                else:
                    await message.answer('Failed to sign in. Try again.')
            else:
                await message.answer('Incorrect data entered. Try again.')


@dp.message_handler(lambda c: c.text and c.text.startswith('Back to main menu'))
@auth
async def buttonBack(message: types.Message):
    if message.text == 'Back to main menu':
        keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
        item1 = types.KeyboardButton('Store')
        item2 = types.KeyboardButton('Wish list')
        item3 = types.KeyboardButton('Information')
        item4 = types.KeyboardButton('Cart')
        keyboard.add(item1, item2, item3, item4)
        await message.answer('You have returned to the main menu.', reply_markup=keyboard)


@dp.message_handler(lambda c: c.text and c.text.startswith('Information'))
@auth
async def getUserInformation(message: types.Message):
    if message.text == 'Information':
        info = await user_methods.getUserInformation(message['from']['id'])
        if True:  # len(info) != 0:
            if info['sex']:
                info['sex'] = 'Men'
            else:
                info['sex'] = 'Women'
            keyboard = types.InlineKeyboardMarkup(row_weidth=3)
            item = types.InlineKeyboardButton(text='Exit', callback_data='exit')
            keyboard.add(item)
            await message.answer(
                'Name: ' + info['name'] + '\n' + 'Suraname: ' + info['surname'] + '\n' + 'Sex: ' + info[
                    'sex'] + '\n' + 'Email: ' + info['email'] + '\n' + 'Department ID: ' + str(
                    info['department']['id']) + '\n' + 'Balance: ' + str(
                    info['balance']) + '\n' + 'For more information go to the website (link).', reply_markup=keyboard)
        else:
            await message.answer('Error. Try again.')


@dp.message_handler(lambda c: c.text and c.text.startswith('Cart'))
@auth
async def getUserCart(message: types.Message):
    if message.text == 'Cart':
        info = await user_methods.getUserCart(message['from']['id'])
        if True:  # True: #len(info) != 0:  # TODO: почему каждый раз когда ты пытаешься вызвать True: #len(info) и for item in info у тебя предупреждение
            keyboard = types.InlineKeyboardMarkup(row_width=3)
            for item in info:
                button = types.InlineKeyboardButton(text=item['name'], callback_data='item ' + str(item['id']))
                keyboard.insert(button)
            keyboardReply = types.ReplyKeyboardMarkup(resize_keyboard=True, row_width=2)
            item1 = types.KeyboardButton('Buy all')  # TODO: почему каждый раз на этой залупе предупреждение
            item2 = types.KeyboardButton('Clear cart')
            item3 = types.KeyboardButton('Back to main menu')
            keyboardReply.add(item1, item2, item3)
            await message.answer('Your cart:', reply_markup=keyboard)
            await message.answer('Upon purchase, the order can be picked up at your office.',
                                 reply_markup=keyboardReply)
        else:
            await message.answer('Error. Try again.')


@dp.message_handler(lambda c: c.text and c.text.startswith('Wish list'))
@auth
async def getUserWithList(message: types.Message):
    if message.text == 'Wish list':
        info = await user_methods.getUserWishList(message['from']['id'])
        if True:  # True: #len(info) != 0: TODO: допилитб
            keyboard = types.InlineKeyboardMarkup(row_width=3)
            for item in info:
                button = types.InlineKeyboardButton(text=item['name'], callback_data='item ' + str(item['id']))
                keyboard.insert(button)
            keyboardReply = types.ReplyKeyboardMarkup(resize_keyboard=True)
            item1 = types.KeyboardButton('Clear wish list')
            item2 = types.KeyboardButton('Back to main menu')
            keyboardReply.add(item1, item2)
            await message.answer('Your wish list:', reply_markup=keyboard)
            await message.answer(')', reply_markup=keyboardReply)
        else:
            await message.answer('Error. Try again.')


user_methods.usersCategoryLists = {}


@dp.message_handler(lambda c: c.text and c.text.startswith('Clear cart'))
@auth
async def clearCart(message: types.Message):
    if message.text == 'Clear cart':
        if await user_methods.clearUserCart(message['from']['id']):
            await message.answer('Good')
        else:
            await message.answer('Error. Try again.')


@dp.message_handler(lambda c: c.text and c.text.startswith('Clear wish list'))
@auth
async def clearWishList(message: types.Message):
    if message.text == 'Clear wish list':
        if await user_methods.clearUserWishList(message['from']['id']):
            await message.answer('Good')
        else:
            await message.answer('Error. Try again.')


@dp.message_handler(lambda c: c.text and c.text.startswith('Store'))
@auth
async def getUserStore(message: types.Message):
    if message.text == 'Store':
        info = await user_methods.getUserCategoryList()
        if True:  # len(info) != 0:
            keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
            categoryList = {}
            for item in info:
                button = types.KeyboardButton(item['name'])
                keyboard.insert(button)
                categoryList[item['name']] = item['id']
            backButton = types.KeyboardButton('Back to main menu')
            keyboard.insert(backButton)
            user_methods.usersCategoryLists[message['from']['id']] = categoryList
            await message.answer('Select a category', reply_markup=keyboard)
        else:
            await message.answer('Error. Try again.')


@dp.message_handler(lambda c: c.text and c.text in user_methods.usersCategoryLists[c['from']['id']].keys())
@auth
async def getItemlistByCategory(message: types.Message):
    if message.text in user_methods.usersCategoryLists[message['from']['id']].keys():
        categoryID = user_methods.usersCategoryLists[message['from']['id']][message.text]
        info = await user_methods.getItemListByCategory(categoryID)
        if True:  # len(info) != 0:
            keyboard = types.InlineKeyboardMarkup(row_width=3)
            for item in info:
                button = types.InlineKeyboardButton(text=item['name'], callback_data='item ' + str(item['id']))
                keyboard.insert(button)
            await message.answer('Items ' + message.text + ':', reply_markup=keyboard)
        else:
            await message.answer('Error. Try again.')


@dp.callback_query_handler(lambda c: c.data and c.data.startswith('item'))
@auth
async def getItemInfo(callback_query: types.CallbackQuery):
    item, itemID = callback_query.data.split()
    info = await user_methods.getItemInfo(itemID)
    if True:  # len(info) != 0:
        keyboard = types.InlineKeyboardMarkup(row_width=2)
        item1 = types.InlineKeyboardButton(text='Buy now', callback_data='buy ' + itemID)
        if await user_methods.getStatusItemCart(itemID, callback_query['from']['id']):
            item2 = types.InlineKeyboardButton(text='Remove from cart', callback_data='delcart ' + itemID)
        else:
            item2 = types.InlineKeyboardButton(text='Add to cart', callback_data='addcart ' + itemID)
        if await user_methods.getStatusItemWishList(itemID, callback_query['from']['id']):
            item3 = types.InlineKeyboardButton(text='Remove from wish list', callback_data='delwishlist ' + itemID)
        else:
            item3 = types.InlineKeyboardButton(text='Add to wish list', callback_data='addwishlist ' + itemID)
        keyboard.add(item3, item2, item1)
        await bot.send_message(callback_query['from']['id'],
                               'Name: ' + info['name'] + '\n' + 'Price: ' + str(
                                   info['price']) + '\n' + 'Description: ' + info[
                                   'description'], reply_markup=keyboard)  # TODO: допилить фотки
    else:
        await callback_query.answer('Error. Try again.')


@dp.callback_query_handler(lambda c: c.data and c.data.startswith('add'))
@auth
async def addItemCartOrWisList(callback_query: types.CallbackQuery):
    com, itemID = callback_query.data.split()
    if callback_query.data.startswith('addcart'):
        if await user_methods.addItemToUserCart(itemID, callback_query['from']['id']):
            await callback_query.answer('Good')
        else:
            await callback_query.answer('Error. Try again.')
    elif callback_query.data.startswith('addwishlist'):
        if await user_methods.addItemToUserWishList(itemID, callback_query['from']['id']):
            await callback_query.answer('Good')
        else:
            await callback_query.answer('Error. Try again.')
    else:
        await callback_query.answer('Error. Try again.')


@dp.callback_query_handler(lambda c: c.data and c.data.startswith('del'))
@auth
async def delItemCartOrWisList(callback_query: types.CallbackQuery):
    com, itemID = callback_query.data.split()
    if callback_query.data.startswith('delcart'):
        if await user_methods.delItemToUserCart(itemID, callback_query['from']['id']):
            await callback_query.answer('Good')
        else:
            await callback_query.answer('Error. Try again.')
    elif callback_query.data.startswith("delwishlist"):
        if await user_methods.delItemToUserWishList(itemID, callback_query['from']['id']):
            await callback_query.answer('Good')
        else:
            await callback_query.answer('Error. Try again.')
    else:
        await callback_query.answer('Error. Try again.')


@dp.callback_query_handler(lambda c: c.data and c.data.startswith('buy'))
@auth
async def buyItemByID(callback_query: types.CallbackQuery):
    com, itemID = callback_query.data.split()
    if await user_methods.buyItemNow(itemID, callback_query['from']['id']):
        await callback_query.answer('Good')
    else:
        await callback_query.answer('Error. Try again.')


@dp.callback_query_handler(lambda c: c.data and c.data.startswith('exit'))
@auth
async def exitUser(callback_query: types.CallbackQuery):
    if await user_methods.delUser(callback_query['from']['id']):
        await callback_query.answer('Goodbuy.')
    else:
        await callback_query.answer('Error. Try again.')


@dp.message_handler(lambda c: c.text and c.text.startswith('Buy all'))
@auth
async def buyAllFromCart(message: types.Message):
    if message.text == 'Buy all':
        if await user_methods.buyAllItems(message['from']['id']):
            await message.answer('Good. Upon purchase, the order can be picked up at your office.')
        else:
            await message.answer('Error. Try again.')


if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)
