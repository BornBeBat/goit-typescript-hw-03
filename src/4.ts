class Key {
    private signature: number
    constructor() {
        this.signature = Math.floor(Math.random() * 3);
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {
    }
    getKey(): Key {
        return this.key
    }
}

abstract class Home {
    door: boolean = false;
    key: Key;

    tenants: Person[] = [];
    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person)
        }
    };
    public abstract openDoor(key: Key): void
}

class MyHouse extends Home {
       constructor(key: Key) {
        super()
        this.key = key
    }
    public openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) { this.door = true }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);

export { };