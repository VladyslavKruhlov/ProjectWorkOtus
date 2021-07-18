const { I } = inject();
module.exports = {
    fields: {
        password: '#loginFrm #loginFrm_password',
        login: '#loginFrm #loginFrm_loginname',
        addressField: '.registerbox #AddressFrm_address_1',
        cityField: '.registerbox #AddressFrm_city',
        zipcodeField: '.registerbox #AddressFrm_postcode',
    },
    logButton: '.block_2 > #customernav > #customer_menu_top > li > a',
    loginButton: '.col-sm-6 > .loginbox > #loginFrm > fieldset > .btn',
    //Тест на авторизацию
    login(loginName, password) {
        I.click(this.logButton);
        I.fillField(this.fields.login, loginName);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
    },
    //Тест на изменение данных пользователя
    welcomeButton: '#topnav > #main_menu_top > .open > .top > .menu_text',
    dropdownButton: '.ct_padding_right > .nav-dash > li > a > .fa-book',
    editAccount: 'table > tbody > tr > .pull-right > .btn',
    okButton: '.registerbox > fieldset > .form-group > .col-md-12 > .btn-orange',
    changeAddress(loginName, password, street, city, postcode) {
        I.click(this.logButton);
        I.fillField(this.fields.login, loginName);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
        I.click(this.dropdownButton);
        I.click(this.editAccount);
        I.fillField(this.fields.addressField, street);
        I.fillField(this.fields.cityField, city);
        I.fillField(this.fields.zipcodeField, postcode);
        I.click(this.okButton);
    },
    // Тест на логаут
    logoutButton: '.ct_padding_right > .nav-dash > li > a > .fa-unlock',
    logout(loginName, password) {
        I.click(this.logButton);
        I.fillField(this.fields.login, loginName);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
        I.click(this.logoutButton);
    },
    //Тест подтверждение и оформление  заказа в корзине
    hairCareButton: '#categorymenu > .subnav > .nav-pills > li:nth-child(7) > a',
    shampooButton: '.contentpanel > .thumbnails > .col-md-2:nth-child(2) > .mt10 > a',
    shampooProductButton: '.thumbnails > .col-md-3:nth-child(2) > .fixed_wrapper > .fixed > .prdocutname',
    addShampooToCard: 'fieldset > .mt20 > .productpagecart > li > .cart',
    checkoutButton: '#cart #cart_checkout1',
    confirmOrderButton: '.col-md-7 > #payment #checkout_btn',
    confirmOrder(loginName, password) {
        I.click(this.logButton);
        I.fillField(this.fields.login, loginName);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
        I.click(this.hairCareButton);
        I.click(this.shampooButton);
        I.click(this.shampooProductButton);
        I.click(this.addShampooToCard);
        I.click(this.checkoutButton);
        I.click(this.confirmOrderButton);
    },














}
