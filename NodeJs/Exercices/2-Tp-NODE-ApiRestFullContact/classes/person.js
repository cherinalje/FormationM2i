export default class Person {
    constructor(id, title, firstname, lastname, dateOfBirth, created = new Date(), updated = " ") {
        this.id = id;
        this.title = title;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateOfBirth = dateOfBirth;
        this.created = created;
        this.updated = updated;
    }

    toString(){
        return `${this.id} ${this.title} ${this.lastname} ${this.firstname} - ${this.dateOfBirth}`;
    }
}
