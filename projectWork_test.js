Feature('My project work');
Before(({I}) => { // or Background
    I.amOnPage('/');
});
Scenario('Авторизоция в системе', ({I, authPage}) => {
    authPage.login('VladKruhlov', '01021994');
    I.see('Welcome back Vladyslav');
});
Scenario('Изменения данных в аккаунте пользователя', ({I, authPage}) => {
    authPage.changeAddress( 'VladKruhlov', '01021994', 'Chapaeva 50', 'Yasynovataya', '04111');
    I.see('Your address has been successfully updated');
});
Scenario('Логаут', ({I, authPage}) => {
    authPage.logout('VladKruhlov', '01021994');
    I.see('You have been logged off your account. It is now safe to leave the computer.');
});
Scenario('Подтвердить заказ', ({I, authPage}) => {
    authPage.confirmOrder('VladKruhlov', '01021994');
    I.seeElement('.container-fluid > .col-md-12 > div > .heading1 > .maintext');
});
Scenario('Books добавляет в корзину', ({I, cardPage}) => {
    cardPage.addToCard();
    I.seeElement('#cart #cart_checkout1');
});
Scenario('Товар можно удалить из корзины', ({I, cardPage}) => {
    cardPage.removeItems();
    I.see('Your shopping cart is empty!');
});
Scenario('Добавить футболку в корзину', ({I, cardPage}) => {
    cardPage.addShirt();
    I.seeElement('#cart #cart_checkout1');
});
Scenario('Добавить крем в корзину', ({I, cardPage}) => {
    cardPage.addCream();
    I.seeElement('#cart #cart_checkout1');
});
Scenario('Добавить крем в корзину', ({I, cardPage}) => {
    cardPage.addEyes();
    I.seeElement('#cart #cart_checkout1');
});
Scenario('Добавить парфюм в корзину', ({I, cardPage}) => {
    cardPage.addFragrance();
    I.seeElement('#cart #cart_checkout1');
});
Scenario('Добавить гель для душа в корзину', ({I, cardPage}) => {
    cardPage.addMenWash();
    I.seeElement('#cart #cart_checkout1');
});

