export default class Vehicule {
    constructor(id, startDate = new Date()) {
        this._id = id;
        this._startDate = startDate;
        this._endDate = '';
        this._out = false;
    }

    get id() { return this._id; }
    set id(value) { this._id = value; }

    get startDate() { return this._startDate; }
    set startDate(value) { this._startDate = value; }

    get endDate() { return this._endDate; }
    set endDate(value) { this._endDate = value; }

    get out() { return this._out; }
    set out(value) { this._out = value; }

    getDuration() {
        return this._endDate - this._startDate;
    }
}