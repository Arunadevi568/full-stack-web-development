//class
class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    showCar() {
        console.log(`${this.brand} ${this.model}`);
        console.log("Price:", this.price);
    }
}
//object
const car1 = new Car("Toyota", "Innova", 2500000);

car1.showCar();
// abstraction
 class BankAccount {

    #balance = 10000;

    withdraw(amount) {

        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log("Withdrawal Successful");
        } else {
            console.log("Insufficient Balance");
        }
    }

    showBalance() {
        console.log("Balance:", this.#balance);
    }
}

const account = new BankAccount();

account.withdraw(3000);
account.showBalance();
//single inheritance
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

const dog = new Dog();

dog.eat();
dog.bark();
