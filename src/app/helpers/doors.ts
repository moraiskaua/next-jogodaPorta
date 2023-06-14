import DoorModel from "@/models/door";

export const createDoors = (quantity: number, haveGiftDoor: number): DoorModel[] => {
    return Array.from({length: quantity}, (_, i) => {
        const number = i + 1;
        const haveGift = number === haveGiftDoor;
        return new DoorModel(number, haveGift);
    })
}

export const updateDoors = (doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] => {
    return doors.map(actualDoor => {
        const equalModified = actualDoor.number === modifiedDoor.number;

        if (equalModified) {
            return modifiedDoor;
        } else {
            return modifiedDoor.opened ? actualDoor : actualDoor.unSelected();
        }
    })
}