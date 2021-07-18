import faker from 'faker';

const PersonBuilder = function PersonBuilder() {
    this.addStreet = function () {
        this.street = faker.address.streetAddress();
        return this;
    };
    this.addCity = function () {
        this.city = faker.address.city();
        return this;
    };
    this.addCode = function () {
        this.zip = faker.address.zipCodeByState;
        return data;
    };
    // this.generate = function () {
    //     const fields = Object.getOwnPropertyNames(this);
    //     const data = {};
    //     fields.forEach((fieldName) => {
    //         if (this[fieldName] && typeof this[fieldName] !== 'function') {
    //             data[fieldName] = this[fieldName];
    //         }
    //     });
    //     return data;
    // };
};
export { PersonBuilder };
