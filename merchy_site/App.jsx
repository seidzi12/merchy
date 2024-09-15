import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./components/Auth";
import UserPanel from "./components/UserPanel";
import AdminPanel from "./components/AdminPanel";
import GadgetsMenu from "./components/GadgetsMenu";
import Cart from "./components/Cart";
import GoodieCard from "./components/GoodieCard";
import Favourites from "./components/Favourites";
import UserProfile from "./components/UserProfile";
import Settings from "./components/Settings";
import Contest from "./components/Contest";
import ToysMenu from "./components/ToysMenu";
import Auth2 from "./components/Auth2";
import MerchMenu from "./components/MerchMenu";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|auth-1)">
          <Auth {...authData} />
        </Route>
        <Route path="/user-panel">
          <UserPanel {...userPanelData} />
        </Route>
        <Route path="/admin-panel">
          <AdminPanel {...adminPanelData} />
        </Route>
        <Route path="/gadgets-menu">
          <GadgetsMenu {...gadgetsMenuData} />
        </Route>
        <Route path="/cart">
          <Cart {...cartData} />
        </Route>
        <Route path="/goodie-card">
          <GoodieCard {...goodieCardData} />
        </Route>
        <Route path="/favourites">
          <Favourites {...favouritesData} />
        </Route>
        <Route path="/user-profile">
          <UserProfile {...userProfileData} />
        </Route>
        <Route path="/settings">
          <Settings {...settingsData} />
        </Route>
        <Route path="/contest">
          <Contest {...contestData} />
        </Route>
        <Route path="/toys-menu">
          <ToysMenu {...toysMenuData} />
        </Route>
        <Route path="/auth">
          <Auth2 {...auth2Data} />
        </Route>
        <Route path="/merch-menu">
          <MerchMenu {...merchMenuData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group551Data = {
    children: "E-mail",
};

const group552Data = {
    children: "Пароль",
    className: "group-56",
};

const authData = {
    overlapGroup2: "/img/image-34@1x.png",
    rectangle22: "/img/rectangle-22-1@1x.png",
    image33: "/img/image-33@2x.png",
    overlapGroup: "/img/rectangle-16-2@2x.png",
    text1: "Войти",
    text2: "Войти",
    me: <>Добро пожаловать!<br />Merchy - эксклюзивный магазин, в котором вы можете приобретать мерч и технику за успешное прохождение испытаний и победу в различных конкурсах, проводимых вашей компанией.<br /><br />Для входа введите данные, отправленные менеджером на вашу почту:</>,
    spanText1: <>Не пришло письмо?<br /></>,
    spanText2: "Выслать данные еще раз",
    group551Props: group551Data,
    group552Props: group552Data,
};

const group92Data = {
    className: "group-9-1",
};

const userPanelData = {
    image1: "/img/image-1@1x.png",
    text12: "Магазин",
    image18: "/img/image-18@2x.png",
    image6: "/img/image-6@2x.png",
    number: "1228",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    text13: "Конкурсы и соревнования",
    elw7Yyohxn42: "/img/elw7yyohxn4-2@1x.png",
    uovpruyekdkRemovebgPreview2: "/img/uovpruyekdk-removebg-preview-2@2x.png",
    text18: "Игрушки",
    text17: "Билеты",
    x1581325382150189389RemovebgPreview: "/img/1581325382150189389-removebg-preview-1@2x.png",
    i6NhB598YgRemovebgPreview1: "/img/i6nh-b598yg-removebg-preview-1@2x.png",
    merch: "Мерч",
    xgal3Kkcwl0RemovebgPreview1: "/img/xgal3kkcwl0-removebg-preview-1@2x.png",
    text16: "Зима 2022",
    x81RebiyaamoRemovebgPreview1: "/img/81rebiyaamo-removebg-preview-1@2x.png",
    text15: "Гаджеты",
    orig1: "/img/orig-1@2x.png",
    text14: "Другое",
    read1: "/img/read-1@2x.png",
    background1: "/img/background-4@1x.png",
    background2: "/img/background-5@1x.png",
    address1: "57 дней осталось",
    text10: <>Только этой зимой - Премия “Лучший Дизайнер”<br /><br />Конкурс среди всех подразделений<br /><br />11 дней с начала</>,
    read2: "/img/read-3@2x.png",
    text11: "Соревнование Зима-Весна",
    background3: "/img/background-2@1x.png",
    background4: "/img/background-3@1x.png",
    address2: "35 дней осталось",
    text8: <>Февраль - Март<br />ТЗ: Улучшенное меню настроек корпоративного приложения с сохранением особенностей дизайна и функционала<br /><br />19 дней с начала</>,
    read3: "/img/read-2@2x.png",
    text9: "Для разработчиков",
    text6: "Ещё  >",
    frame9: "/img/image-35@2x.png",
    settings: "/img/settings@2x.png",
    group9Props: group92Data,
};

const adminPanelData = {
    image1: "/img/image-1@1x.png",
    text20: "СУББОТА, 19 ФЕВРАЛЯ",
    text21: "Добрый день, Егор",
    image33: "/img/image-33@2x.png",
    text22: "Управление магазином",
    uovpruyekdkRemovebgPreview2: "/img/uovpruyekdk-removebg-preview-2@2x.png",
    text28: "Игрушки",
    text27: "Билеты",
    x1581325382150189389RemovebgPreview: "/img/1581325382150189389-removebg-preview-1@2x.png",
    i6NhB598YgRemovebgPreview1: "/img/i6nh-b598yg-removebg-preview-1@2x.png",
    merch: "Мерч",
    xgal3Kkcwl0RemovebgPreview1: "/img/xgal3kkcwl0-removebg-preview-1@2x.png",
    text26: "Зима 2022",
    x81RebiyaamoRemovebgPreview1: "/img/81rebiyaamo-removebg-preview-1@2x.png",
    text25: "Гаджеты",
    orig1: "/img/orig-1@2x.png",
    text24: "Другое",
    read: "/img/read-1@2x.png",
    text23: "Администрирование конкурсов",
    elw7Yyohxn42: "/img/elw7yyohxn4-2@1x.png",
    background1: "/img/background-4@1x.png",
    background2: "/img/background-5@1x.png",
    address1: "57 дней осталось",
    text29: <>Только этой зимой - Премия “Лучший Дизайнер”<br /><br />Конкурс среди всех подразделений<br /><br />11 дней с начала</>,
    text30: "Соревнование Зима-Весна",
    image31: "/img/image-31@2x.png",
    background3: "/img/background-4@1x.png",
    background4: "/img/background-5@1x.png",
    address2: "35 дней осталось",
    text31: <>Февраль - Март<br />ТЗ: Улучшенное меню настроек корпоративного приложения с сохранением особенностей дизайна и функционала<br /><br />19 дней с начала</>,
    text32: "Для разработчиков",
    image32: "/img/image-32@2x.png",
    text19: "Ещё  >",
    frame9: "/img/image-35@2x.png",
};

const group93Data = {
    className: "group-9-2",
};

const group331Data = {
    uovpruyekdkRemovebgPreview2: "/img/uovpruyekdk-removebg-preview-2-1@2x.png",
    text20: "Игрушки",
    text19: "Билеты",
    i6NhB598YgRemovebgPreview1: "/img/i6nh-b598yg-removebg-preview-1-1@2x.png",
    merch: "Merch",
    text18: "Winter 2022",
    x81RebiyaamoRemovebgPreview1: "/img/81rebiyaamo-removebg-preview-1-1@2x.png",
    text17: "Gadgets",
    text16: "Other",
};

const gadgetsMenuData = {
    text33: "Ещё  >",
    settings: "/img/settings@2x.png",
    iphone133800Midn: <>iPhone 13<br /><br />3,800<br /><br />Midnight Blue<br />256 GB<br />+ Чехол от     компании</>,
    group1: "/img/group-3@2x.png",
    image61: "/img/image-6-7@2x.png",
    scrudmira7KRemovebgPreview1: "/img/scrudmira7k-removebg-preview-1@2x.png",
    image19: "/img/image-19@2x.png",
    macbookPro13500: <>MacBook Pro 13&quot;<br /><br />5,000<br /><br />M1 2020, 16 GB, <br />512 GB SSD<br />+ Набор стикеров</>,
    group2: "/img/group-4@2x.png",
    image62: "/img/image-6-8@2x.png",
    image181: "/img/image-18-3@2x.png",
    x81RebiyaamoRemovebgPreview11: "/img/81rebiyaamo-removebg-preview--1--1-1@2x.png",
    x1: <>Чехол для ноутбука<br /><br />100<br /><br />Размеры:<br />M 24x33<br />L 25x36</>,
    group3: "/img/group-5@2x.png",
    image63: "/img/image-6-9@2x.png",
    image182: "/img/image-18-4@2x.png",
    ubay9IuafwoRemovebgPreview1: "/img/ubay9iuafwo-removebg-preview-1-1@2x.png",
    x200TypeC: <>Повербанк<br /><br />200<br /><br />Type-C, Lightning <br />10000 mAh<br />Защитный кейс</>,
    group4: "/img/group-6@2x.png",
    image64: "/img/image-6-10@2x.png",
    image183: "/img/image-18-5@2x.png",
    jw4Bvieod5QRemovebgPreview1: "/img/jw4bvieod5q-removebg-preview-1@2x.png",
    background1: "/img/background-4@1x.png",
    background2: "/img/background-5@1x.png",
    address: "57 дней осталось",
    text37: <>Только этой зимой - Премия “Лучший Дизайнер”<br /><br />Конкурс среди всех подразделений<br /><br />11 дней с начала</>,
    read: "/img/read-3@2x.png",
    text38: "Соревнование Зима-Весна",
    image1: "/img/image-1@1x.png",
    elw7Yyohxn42: "/img/elw7yyohxn4-2@1x.png",
    text39: "Доступные соревнования",
    text40: "Магазин мерча",
    number: "1228",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    image65: "/img/image-6@2x.png",
    rectangle23: "/img/rectangle-23@1x.png",
    exit: "/img/exit@2x.png",
    text43: "Гаджеты",
    group9Props: group93Data,
    group33Props: group331Data,
};

const group94Data = {
    className: "group-9-3",
};

const group312Data = {
    className: "group-31-3",
};

const group332Data = {
    uovpruyekdkRemovebgPreview2: "/img/uovpruyekdk-removebg-preview-2-1@2x.png",
    text20: "Игрушки",
    text19: "Билеы",
    i6NhB598YgRemovebgPreview1: "/img/i6nh-b598yg-removebg-preview-1-1@2x.png",
    merch: "Merch",
    text18: "Winter 2022",
    x81RebiyaamoRemovebgPreview1: "/img/81rebiyaamo-removebg-preview-1-1@2x.png",
    text17: "Gadgets",
    text16: "Other",
    className: "group-33-3",
};

const cartData = {
    text44: "Ещё  >",
    read1: "/img/read-6@2x.png",
    background1: "/img/background-4@1x.png",
    background2: "/img/background-5@1x.png",
    address: "57 дней осталось",
    text48: <>Только этой зимой - Премия “Лучший Дизайнер”<br /><br />Конкурс среди всех подразделений<br /><br />11 дней с начала</>,
    read2: "/img/read-3@2x.png",
    text49: "Соревнование Зима-Весна",
    image1: "/img/image-1@1x.png",
    elw7Yyohxn42: "/img/elw7yyohxn4-2@1x.png",
    text50: "Доступные соревнования",
    text51: "Магазин мерча",
    number1: "1228",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    image6: "/img/image-6@2x.png",
    rectangle22: "/img/rectangle-23@1x.png",
    exit: "/img/exit@2x.png",
    overlapGroup6: "/img/rectangle-16@2x.png",
    text54: "Заказать",
    text55: "Корзина",
    text56: <>Стикеры<br /><br />50                        <br /><br /><br />                              - 2 +</>,
    group1: "/img/group-7@2x.png",
    image191: "/img/image-19-1@2x.png",
    image18: "/img/image-18-6@2x.png",
    text57: <>Худи<br /><br />250                        <br /><br /><br />                              - 1 +</>,
    group2: "/img/group-8@2x.png",
    image192: "/img/image-19-2@2x.png",
    image21: "/img/image-21@2x.png",
    image23: "/img/image-23@2x.png",
    image22: "/img/image-22@1x.png",
    text58: "Офис выдачи на карте",
    text59: "Итого:",
    number2: "350",
    vector4: "/img/vector-15@2x.png",
    vector5: "/img/vector-16@2x.png",
    vector6: "/img/vector-17@2x.png",
    settings: "/img/settings@2x.png",
    group9Props: group94Data,
    group31Props: group312Data,
    group33Props: group332Data,
};

const group95Data = {
    className: "group-9-4",
};

const group313Data = {
    className: "group-31-4",
};

const group333Data = {
    uovpruyekdkRemovebgPreview2: "/img/uovpruyekdk-removebg-preview-2@2x.png",
    text20: "Toys",
    text19: "Tickets",
    i6NhB598YgRemovebgPreview1: "/img/i6nh-b598yg-removebg-preview-1@2x.png",
    merch: "Merch",
    text18: "Winter 2022",
    x81RebiyaamoRemovebgPreview1: "/img/81rebiyaamo-removebg-preview-1@2x.png",
    text17: "Gadgets",
    text16: "Other",
    className: "group-33-4",
};

const goodieCardData = {
    text60: "Ещё  >",
    read1: "/img/read-1@2x.png",
    settings: "/img/settings@2x.png",
    background1: "/img/background-4@1x.png",
    background2: "/img/background-5@1x.png",
    address: "57 дней осталось",
    text64: <>Только этой зимой - Премия “Лучший Дизайнер”<br /><br />Конкурс среди всех подразделений<br /><br />11 дней с начала</>,
    read2: "/img/read-3@2x.png",
    text65: "Соревнование Зима-Весна",
    image1: "/img/image-1@1x.png",
    elw7Yyohxn42: "/img/elw7yyohxn4-2@1x.png",
    text66: "Доступные соревнования",
    text67: "Магазин мерча",
    number: "1228",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    image6: "/img/image-6@2x.png",
    rectangle22: "/img/rectangle-23@1x.png",
    overlapGroup: "/img/rectangle-16-1@2x.png",
    text68: "Купить за 250",
    group: "/img/group-9@2x.png",
    text69: "Подушка Лис",
    text70: "Яркий, рыжий, пушистый Лис не оставит вас одиноким!",
    group15: "/img/group-15@2x.png",
    image3: "/img/image-3@2x.png",
    image5: "/img/image-5@2x.png",
    group16: "/img/group-16@2x.png",
    text71: "Смотрите также",
    image12: "/img/image-12@2x.png",
    image13: "/img/image-13@2x.png",
    image10: "/img/image-10@2x.png",
    image2: "/img/image-2-1@1x.png",
    exit: "/img/exit@2x.png",
    image24: "/img/image-24@2x.png",
    text72: "Игрушки и сувениры",
    group9Props: group95Data,
    group31Props: group313Data,
    group33Props: group333Data,
};

const group96Data = {
    className: "group-9-5",
};

const group334Data = {
    uovpruyekdkRemovebgPreview2: "/img/uovpruyekdk-removebg-preview-2-1@2x.png",
    text20: "Игрушки",
    text19: "Билеы",
    i6NhB598YgRemovebgPreview1: "/img/i6nh-b598yg-removebg-preview-1@2x.png",
    merch: "Merch",
    text18: "Winter 2022",
    x81RebiyaamoRemovebgPreview1: "/img/81rebiyaamo-removebg-preview-1@2x.png",
    text17: "Gadgets",
    text16: "Other",
    className: "group-33-5",
};

const group314Data = {
    className: "group-31-5",
};

const settingsData = {
    image1: "/img/image-1@1x.png",
    text99: "Магазин мерча",
    image6: "/img/image-6@2x.png",
    number: "1228",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    text98: "Доступные соревнования",
    elw7Yyohxn42: "/img/elw7yyohxn4-2@1x.png",
    read1: "/img/read-1@2x.png",
    text92: "Ещё  >",
    background1: "/img/background-4@1x.png",
    background2: "/img/background-5@1x.png",
    address: "57 дней осталось",
    text96: <>Только этой зимой - Премия “Лучший Дизайнер”<br /><br />Конкурс среди всех подразделений<br /><br />11 дней с начала</>,
    read2: "/img/read-3@2x.png",
    text97: "Соревнование Зима-Весна",
    text102: <>Тема                  Светлая |<br /><br /><br />Язык                  Русский |</>,
    english: <>Тёмная<br /><br /><br />English</>,
    text103: "Настройки",
    exit: "/img/exit-3@2x.png",
    settings: "/img/settings@2x.png",
    group9Props: group96Data,
    group33Props: group334Data,
    group31Props: group314Data,
};

const group97Data = {
    className: "group-9-6",
};

const contestData = {
    image1: "/img/image-1@1x.png",
    text107: "Конкурсы и соревнования",
    image18: "/img/image-18@2x.png",
    image6: "/img/image-6@2x.png",
    number: "1228",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    elw7Yyohxn42: "/img/elw7yyohxn4-2@1x.png",
    background1: "/img/background@1x.png",
    background2: "/img/background-1@1x.png",
    address: "57 дней осталось",
    text105: <>Только этой зимой - Премия “Лучший Дизайнер”<br /><br />Конкурс среди всех подразделений<br /><br />11 дней с начала</>,
    read: "/img/read@2x.png",
    text106: "Соревнование Зима-Весна",
    image30: "/img/image-30@2x.png",
    overlapGroup2: "/img/rectangle@1x.png",
    text109: <>Конкурс лучших работников нашей компании. Оценивается вся ваша обычная и сверхурочная работа, а также специальные достижения и выполнение заданий. <br />Подробнее об условиях в прикрепленном документе. <br />Для участия вам также необходимо предоставить краткое письмо о себе и работе в компании, где вы сможете в том числе предложить изменения и написать свое мнение. Покажите себя! Удачи!</>,
    text108: "Прикрепить файл",
    pdf: "Условия и правила.pdf",
    image28: "/img/image-28@2x.png",
    image29: "/img/image-29@2x.png",
    text110: "< Вернуться в магазин",
    settings: "/img/settings@2x.png",
    group9Props: group97Data,
};

const group98Data = {
    className: "group-9-7",
};

const group315Data = {
    className: "group-31-6",
};

const group335Data = {
    uovpruyekdkRemovebgPreview2: "/img/uovpruyekdk-removebg-preview-2-1@2x.png",
    text20: "Игрушки",
    text19: "Билеты",
    i6NhB598YgRemovebgPreview1: "/img/i6nh-b598yg-removebg-preview-1-1@2x.png",
    merch: "Merch",
    text18: "Winter 2022",
    x81RebiyaamoRemovebgPreview1: "/img/81rebiyaamo-removebg-preview-1-1@2x.png",
    text17: "Gadgets",
    text16: "Other",
    className: "group-33-6",
};

const toysMenuData = {
    text111: "Ещё  >",
    settings: "/img/settings@2x.png",
    background1: "/img/background-4@1x.png",
    background2: "/img/background-5@1x.png",
    address: "57 дней осталось",
    text115: <>Только этой зимой - Премия “Лучший Дизайнер”<br /><br />Конкурс среди всех подразделений<br /><br />11 дней с начала</>,
    read: "/img/read-3@2x.png",
    text116: "Соревнование Зима-Весна",
    image1: "/img/image-1@1x.png",
    elw7Yyohxn42: "/img/elw7yyohxn4-2@1x.png",
    text117: "Доступные соревнования",
    text118: "Магазин мерча",
    number: "1228",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    image61: "/img/image-6@2x.png",
    rectangle23: "/img/rectangle-23@1x.png",
    exit: "/img/exit@2x.png",
    text121: <>Лис<br /><br />200<br /><br />Яркая и пушистая подушка-подружка</>,
    group1: "/img/group-3@2x.png",
    image62: "/img/image-6-15@2x.png",
    image19: "/img/image-19@2x.png",
    text122: <>Сеня<br /><br />250<br /><br />Просто очаровательный плюшевый   зверь</>,
    group2: "/img/group-14@2x.png",
    image181: "/img/image-18-3@2x.png",
    image63: "/img/image-6-8@2x.png",
    text123: <>Пинг<br /><br />250<br /><br />Орущий Пинг создан радовать вас каждую <br />минуту))</>,
    group3: "/img/group-5@2x.png",
    image64: "/img/image-6-9@2x.png",
    image182: "/img/image-18-4@2x.png",
    image40: "/img/image-40@2x.png",
    text124: <>Спаркс<br /><br />250<br /><br />Мягкий, плюшевый, экзотика из мира магии</>,
    group4: "/img/group-6@2x.png",
    image65: "/img/image-6-10@2x.png",
    image183: "/img/image-18-5@2x.png",
    text125: "Игрушки и сувениры",
    image39: "/img/image-39@2x.png",
    uovpruyekdkRemovebgPreview3: "/img/uovpruyekdk-removebg-preview-3@2x.png",
    image41: "/img/image-41@2x.png",
    group9Props: group98Data,
    group31Props: group315Data,
    group33Props: group335Data,
};

const group99Data = {
    className: "group-9-8",
};

const group316Data = {
    className: "group-31-7",
};

const group336Data = {
    uovpruyekdkRemovebgPreview2: "/img/uovpruyekdk-removebg-preview-2-1@2x.png",
    text20: "Игрушки",
    text19: "Билеты",
    i6NhB598YgRemovebgPreview1: "/img/i6nh-b598yg-removebg-preview-1-1@2x.png",
    merch: "Merch",
    text18: "Winter 2022",
    x81RebiyaamoRemovebgPreview1: "/img/81rebiyaamo-removebg-preview-1-1@2x.png",
    text17: "Gadgets",
    text16: "Other",
    className: "group-33-7",
};

const merchMenuData = {
    text141: "Ещё  >",
    settings: "/img/settings@2x.png",
    text151: <>Плед<br /><br />200<br /><br />90х160 см уюта для создания зимнего настроения</>,
    group1: "/img/group-3@2x.png",
    image61: "/img/image-6-7@2x.png",
    image19: "/img/image-19@2x.png",
    text152: <>Календарь 2022<br /><br />42<br /><br />+ Штампик с логотипом, чтобы отмечать важные дни.</>,
    group2: "/img/group-23@2x.png",
    image181: "/img/image-18-3@2x.png",
    image62: "/img/image-6-8@2x.png",
    x250: <>Свитшот<br /><br />250<br /><br />С эксклюзивным принтом из микросхем.<br />Размеры L-XL</>,
    group3: "/img/group-5@2x.png",
    image63: "/img/image-6-9@2x.png",
    image182: "/img/image-18-4@2x.png",
    text153: <>Обложка на паспорт<br /><br />100<br /><br />С удобными кармашками</>,
    group4: "/img/group-6@2x.png",
    image64: "/img/image-6-10@2x.png",
    image183: "/img/image-18-5@2x.png",
    background1: "/img/background-4@1x.png",
    background2: "/img/background-5@1x.png",
    address: "57 дней осталось",
    text145: <>Только этой зимой - Премия “Лучший Дизайнер”<br /><br />Конкурс среди всех подразделений<br /><br />11 дней с начала</>,
    read: "/img/read-3@2x.png",
    text146: "Соревнование Зима-Весна",
    image1: "/img/image-1@1x.png",
    elw7Yyohxn42: "/img/elw7yyohxn4-2@1x.png",
    text147: "Доступные соревнования",
    text148: "Магазин мерча",
    number: "1228",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    image65: "/img/image-6@2x.png",
    rectangle23: "/img/rectangle-23@1x.png",
    exit: "/img/exit@2x.png",
    text154: "Мерч",
    image36: "/img/image-36@2x.png",
    image37: "/img/image-37@2x.png",
    image38: "/img/image-38@2x.png",
    i6NhB598YgRemovebgPreview1: "/img/i6nh-b598yg-removebg-preview-1-7@2x.png",
    group9Props: group99Data,
    group31Props: group316Data,
    group33Props: group336Data,
};

const favouritesData = {
    image1: "/img/image-1@1x.png",
    text73: "СУББОТА, 19 ФЕВРАЛЯ",
    text74: "Добрый день, Егор",
    text76: "Ваше Избранное",
    text77: <>Подушка Лис<br /><br />250<br /><br />Приятная <br />Удобно брать <br />с собой</>,
    group1: "/img/group@2x.png",
    image61: "/img/image-6-3@2x.png",
    image2: "/img/image-2@2x.png",
    macbookPro13500: <>MacBook Pro 13&quot;<br /><br />5,000<br /><br />M1 2020, 16 GB, <br />512 GB SSD<br />+ Набор стикеров</>,
    group2: "/img/group-1@2x.png",
    image62: "/img/image-6-4@2x.png",
    x81RebiyaamoRemovebgPreview11: "/img/81rebiyaamo-removebg-preview--1--1@2x.png",
    x1: <>Чехол для ноутбука<br /><br />100<br /><br />Размеры:<br />M 24x33<br />L 25x36</>,
    group3: "/img/group-2@2x.png",
    image63: "/img/image-6-5@2x.png",
    image18: "/img/image-18-2@2x.png",
    ubay9IuafwoRemovebgPreview1: "/img/ubay9iuafwo-removebg-preview-1@2x.png",
    image25: "/img/image-25@2x.png",
    image26: "/img/image-26@2x.png",
    image27: "/img/image-26@2x.png",
    text75: "< Вернуться в магазин",
    image64: "/img/image-6@2x.png",
    number: "1228",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    elw7Yyohxn42: "/img/elw7yyohxn4-2@1x.png",
    settings: "/img/settings@2x.png",
};

const userProfileData = {
    image1: "/img/image-1@1x.png",
    text78: "СУББОТА, 19 ФЕВРАЛЯ",
    text79: "Добрый день, Егор",
    text81: "Ваша статистика",
    overlapGroup6: "/img/rectangle-15@1x.png",
    text88: "Общий прогресс и достижения",
    text89: "См. все",
    address1: "12 ачивок",
    address2: "185 осталось",
    overlapGroup2: "/img/group-1-1@1x.png",
    text82: "Очки",
    group1: "/img/group-10@2x.png",
    number1: "1228",
    group2: "/img/group-11@2x.png",
    number2: "240",
    text83: <>прошлый<br />месяц</>,
    vector2: "/img/vector-22@2x.png",
    group3: "/img/group-12@2x.png",
    number3: "105",
    text84: "за консультацию",
    text80: "< Вернуться в магазин",
    text85: "Ваш профиль",
    text86: "Егор Ледяев",
    ellipse1: "/img/ellipse-1@2x.png",
    eMailEgorledyaev1GmailCom: "E-mail: egorledyaev1@gmail.com",
    ellipse2: "/img/ellipse-2@2x.png",
    fintech: "Подразделение : FinTech",
    ellipse4: "/img/ellipse-2@2x.png",
    seniorDataScientist: "Должность: Senior Data Scientist",
    elw7Yyohxn42: "/img/elw7yyohxn4-2-6@1x.png",
    ellipse3: "/img/ellipse-3@2x.png",
    text87: "Адрес офиса: Самара, Ульяновская ул., д. 52, Бизнес-центр “Галактика”, 4 эт.",
    overlapGroup7: "/img/rectangle-16-3@1x.png",
    text91: "Заработанные достижения",
    ellipse5: "/img/ellipse-5@2x.png",
    ellipse6: "/img/ellipse-6@2x.png",
    ellipse8: "/img/ellipse-8@2x.png",
    ellipse10: "/img/ellipse-10@2x.png",
    ellipse9: "/img/ellipse-9@2x.png",
    ellipse7: "/img/ellipse-7@2x.png",
    text90: "См. все",
    settings: "/img/settings@2x.png",
};

const auth2Data = {
    image1: "/img/image-1@1x.png",
    text126: "СУББОТА, 19 ФЕВРАЛЯ",
    text127: "Добрый день, Егор",
    text129: "Ваша статистика",
    overlapGroup7: "/img/rectangle-15@1x.png",
    text137: "Общий прогресс и достижения",
    text138: "См. все",
    address1: "12 ачивок",
    address2: "185 осталось",
    overlapGroup2: "/img/group-1-1@1x.png",
    text130: "Очки",
    group1: "/img/group-19@2x.png",
    number1: "1228",
    group2: "/img/group-20@2x.png",
    number2: "240",
    text131: <>прошлый<br />месяц</>,
    vector2: "/img/vector-22@2x.png",
    group3: "/img/group-21@2x.png",
    number3: "105",
    text132: "за консультацию",
    text128: "< Вернуться в магазин",
    text133: "Ваш профиль",
    overlapGroup: "/img/rectangle-16-2@2x.png",
    text136: "Редактировать",
    ellipse1: "/img/ellipse-1@2x.png",
    phone: "Дата рождения : 24.06.2004",
    ellipse2: "/img/ellipse-2@2x.png",
    dataScience: "Подразделение : Data Science",
    elw7Yyohxn42: "/img/elw7yyohxn4-2-10@1x.png",
    ellipse3: "/img/ellipse-3@2x.png",
    ellipse4: "/img/ellipse-4@2x.png",
    text134: "Адрес офиса: Самара, Ульяновская ул., д. 52, Бизнес-центр “Галактика”, 4 эт.",
    text135: "Домашний адрес: Самара, Черемшанская ул., д. 70",
    overlapGroup8: "/img/rectangle-16-3@1x.png",
    text140: "Заработанные достижения",
    ellipse5: "/img/ellipse-5-1@2x.png",
    ellipse6: "/img/ellipse-6@2x.png",
    ellipse8: "/img/ellipse-8-1@2x.png",
    ellipse10: "/img/ellipse-10-1@2x.png",
    ellipse9: "/img/ellipse-9-1@2x.png",
    ellipse7: "/img/ellipse-7@2x.png",
    text139: "См. все",
    settings: "/img/settings@2x.png",
};

