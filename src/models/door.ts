export default class DoorModel {
    #number: number
    #haveGift: boolean
    #selected: boolean
    #opened: boolean

    constructor(number: number, haveGift = false, selected = false, opened = false) {
        this.#number = number
        this.#haveGift = haveGift
        this.#selected = selected
        this.#opened = opened
    }

    get number() {
        return this.#number
    }

    get haveGift() {
        return this.#haveGift
    }

    get selected() {
        return this.#selected
    }

    get opened() {
        return this.#opened
    }

    get closed() {
        return !this.#opened
    }

    unSelected() {
        const selected = false;
        return new DoorModel(this.number, this.haveGift, selected, this.opened);
    }

    toggleSelection() {
        const selected = !this.selected;
        return new DoorModel(this.number, this.haveGift, selected, this.opened);
    }

    OpenDoor() {
        const opened = true;
        return new DoorModel(this.number, this.haveGift, this.selected, opened);
    }
}