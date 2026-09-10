// Prototype and classes

const obj_ = {
    name:"ombir",
    age:38,
    greet: function(){
        console.log("Hello Ji")
    }
};


console.log(obj_.greet());
obj_.greet()

console.log(obj_.hasOwnProperty("names"));
console.log(obj_.toString());

const arr = [10,20,30];

console.log(arr.length)

const obj2 = {
    account:30
}


obj2.__proto__ = obj_;

console.log(obj_.hasOwnProperty("name"))


const obj1 = {
    name:"ombir",
    age:30,
    greet:function(){
        console.log(`Hello ${this.name}`);
    }
}

const obj2 = {
    name:"Mohit",
    age:20,
    greet:function(){
        console.log(`Hello ${this.name}`);
    }
}


const obj3 = {
    name:"Mohan",
    age:10,
    greet:function(){
        console.log(`Hello ${this.name}`);
    }
}


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hi ${this.name}`);
    }
}


const person1 = new Person("Rohit",20);
const person2 = new Person("Mohit",10);

console.log(person1);

const ob1 = {
    name:"Mohan",
    age:20,
    greet: function(){

    }
};

console.log(ob1);


class Customer extends Person{
  constructor(name,age,account,balance){
    super(name,age);
    this.account = account;
    this.balance = balance;
  }

  checkBalance(){
    return this.balance;
  }
}

const c1 = new Customer("Mohan",20,12,540);

console.log(c1.checkBalance());

const obj = {
    name:"ombir",
    age:20
}


const obj2 = Object.create(obj);
obj2.account = 10;

console.log(obj2.account);

