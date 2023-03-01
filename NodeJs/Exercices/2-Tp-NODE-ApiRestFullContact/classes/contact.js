import Person from './person.js'

export default class Contact extends Person {
    constructor(id, title, firstname, lastname, dateOfBirth, phone, email, created, updated = " ") {
        super(id, title, firstname, lastname, dateOfBirth, created, updated);
        this.phone = phone;
        this.email = email;
    }

    toString() {
        return `${super.toString()} - ${this.phone} - ${this.email}`;
    }
}
