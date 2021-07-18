const { I } = inject();
module.exports = {
    //Тест на добавление книг в корзину
    booksButton: '#categorymenu > .subnav > .nav-pills > li:nth-child(8) > a',
    pepperBooks: '.contentpanel > .thumbnails > .col-md-2:nth-child(2) > .mt10 > a',
    currentBook: '.thumbnails > .col-md-3:nth-child(2) > .fixed_wrapper > .fixed > .prdocutname',
    addToCardButton: 'fieldset > .mt20 > .productpagecart > li > .cart',
    addToCard() {
        I.click(this.booksButton);
        I.click(this.pepperBooks);
        I.click(this.currentBook);
        I.click(this.addToCardButton);
    },
    //  Тест на добавление футболки в корзину
    accessoriesButton: '#categorymenu > .subnav > .nav-pills > li:nth-child(2) > a',
    tShirtsButton: '.contentpanel > .thumbnails > .col-md-2:nth-child(2) > .mt10 > a',
    tShirtButton: '.col-md-3:nth-child(4) > .thumbnail > .pricetag > .productcart > .fa',
    addShirtCard: 'fieldset > .mt20 > .productpagecart > li > .cart',
    addShirt() {
        I.click(this.accessoriesButton);
        I.click(this.tShirtsButton);
        I.click(this.tShirtButton);
        I.click(this.addShirtCard);
    },
    //Тест на добавление крема для лица в корзину
    makeupButton: '#categorymenu > .subnav > .nav-pills > li:nth-child(3) > a',
    faceButton: '.contentpanel > .thumbnails > .col-md-2:nth-child(3) > .mt10 > a',
    productButton: '.thumbnails > .col-md-3:nth-child(2) > .fixed_wrapper > .fixed > .prdocutname',
    addCreamToCard: 'fieldset > .mt20 > .productpagecart > li > .cart',
    addCream() {
        I.click(this.makeupButton);
        I.click(this.faceButton);
        I.click(this.productButton);
        I.click(this.addCreamToCard);
    },
    //Тест добавить тушь для глаз
    skinCareButton: '#categorymenu > .subnav > .nav-pills > li:nth-child(4) > a',
    eyesButton: '.contentpanel > .thumbnails > .col-md-2:nth-child(1) > .mt10 > a',
    addEyesProduct: '.thumbnails > .col-md-3:nth-child(1) > .fixed_wrapper > .fixed > .prdocutname',
    addEyesToCard: 'fieldset > .mt20 > .productpagecart > li > .cart',
    addEyes() {
        I.click(this.skinCareButton);
        I.click(this.eyesButton);
        I.click(this.addEyesProduct);
        I.click(this.addEyesToCard);
    },
    //Добавить парфюм в корзину
    fragranceButton: '#categorymenu > .subnav > .nav-pills > li:nth-child(5) > a',
    menButton: '.contentpanel > .thumbnails > .col-md-2:nth-child(1) > .mt10 > a',
    armaniButton: '.thumbnails > .col-md-3:nth-child(4) > .fixed_wrapper > .fixed > .prdocutname',
    addArmaniToCard: 'fieldset > .mt20 > .productpagecart > li > .cart',
    addFragrance() {
        I.click(this.fragranceButton);
        I.click(this.menButton);
        I.click(this.armaniButton);
        I.click(this.addArmaniToCard);
    },
    //Тест добавить гель для душа
    forMenButton: '#categorymenu > .subnav > .nav-pills > li:nth-child(6) > a',
    forBodyButton: '.contentpanel > .thumbnails > .col-md-2:nth-child(1) > .mt10 > a',
    bodyWashButton: '.thumbnails > .col-md-3:nth-child(3) > .fixed_wrapper > .fixed > .prdocutname',
    addWashToCard: 'fieldset > .mt20 > .productpagecart > li > .cart',
    addMenWash() {
        I.click(this.forMenButton);
        I.click(this.forBodyButton);
        I.click(this.bodyWashButton);
        I.click(this.addWashToCard);
    },
    //Тест на удаление товара
    removeButton: '.table > tbody > tr > .align_center > .btn',
    removeItems() {
        I.click(this.booksButton);
        I.click(this.pepperBooks);
        I.click(this.currentBook);
        I.click(this.addToCardButton);
        I.click(this.removeButton);
    },
}
