//object creat.
const user={
    name :"ombir kumar",
    age: 22,
    emailid:"ombirkumar320@gmail.com",
    amount:3000,
}

//opration on object.creat,read,update,delet.

//update
user.adharno=32456578867876;
user.amount=5000;
console.log(user);

//delet
delete user.adharno;
console.log(user);

//read
console.log(user["age"]);

//read by using loop.
for (const key in user){
    console.log(key,user[key]);
}
// OUTPUT
// name ombir kumar
// age 22
// emailid ombirkumar320@gmail.com
// amount 3000


//propety
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
//OUTPUT
// [ 'name', 'age', 'emailid', 'amount' ]
// [ 'ombir kumar', 22, 'ombirkumar320@gmail.com', 3000 ]
// [
//   [ 'name', 'ombir kumar' ],
//   [ 'age', 22 ],
//   [ 'emailid', 'ombirkumar320@gmail.com' ],
//   [ 'amount', 3000 ]
// ]


//destructing of object.
const name=user.name;
const age=user.age;
console.log(name,age);  // ombir kumar 22
//destructing of object.
const {name,age,amount}=user;
console.log(name,age,amount);  // ombir kumar 22 3000


const temp=Object.keys(user);
for (let keys of temp){
    console.log(keys);
}
/* 
OUTPUT
   name
   age
   emailid
   amount
*/ 

const temp=Object.values(user);
for (let values of temp){
    console.log(values);
}
/*
OUTPUT
   ombir kumar
   22
   ombirkumar320@gmail.com
   3000
 */

const temp=Object.entries(user);
for (let entries of temp){
    console.log(entries);
}
/*
OUTPUT
  [ 'name', 'ombir kumar' ]
  [ 'age', 22 ]
  [ 'emailid', 'ombirkumar320@gmail.com' ]
  [ 'amount', 3000 ]
 */

const temp=Object.entries(user);
for (let [keys,values] of temp){
    console.log(keys, values);
}
/*
OUTPUT
   name ombir kumar
   age 22
   emailid ombirkumar320@gmail.com
   amount 3000
 */

const user={
    name :"ombir kumar",
    age: 22,
    emailid:"ombirkumar320@gmail.com",
    amount:3000,
    address:{
        state:"bihar",
        city:"motihari"
    }
}
console.log(user);
console.log(user.address.state);
/*
OUTPUT
{
  name: 'ombir kumar',
  age: 22,
  emailid: 'ombirkumar320@gmail.com',
  amount: 3000,
  address: { state: 'bihar', city: 'motihari' }
  }
bihar
 */

const user={
    name :"ombir kumar",
    age: 22,
    emailid:"ombirkumar320@gmail.com",
    amount:3000,
    address:{
        state:"bihar",
        city:"motihari"
    }
}
//saprator oprator (...): to saprate the object which creat another object inside the object. so , now we are apply apration saprately without effect on another object.
//note:=user2 is independent copy of user.
// this is called sallow copy. work on only parent object.
const user2=user;
user2.name="dharambir";
console.log(user2);
/*OUTPUT
{
  name: 'ombir kumar',
  age: 22,
  emailid: 'ombirkumar320@gmail.com',
  amount: 3000,
  address: { state: 'bihar', city: 'muzafferpur' }
}
{
  name: 'ombir kumar',
  age: 22,
  emailid: 'ombirkumar320@gmail.com',
  amount: 3000,
  address: { state: 'bihar', city: 'motihari' }
}
   */

//deep copy: it work on each object do't effect prev(user) object if you change(user2) on copy. 
//structuredClone():-1. Original object change nahi hota  2. Nested objects aur arrays bhi copy ho jate hain.
const user2=structuredClone(user);
user2.address.city="muzafferpur";
console.log(user2);
console.log(user);
/*OUTPUT
{
  name: 'ombir kumar',
  age: 22,
  emailid: 'ombirkumar320@gmail.com',
  amount: 3000,
  address: { state: 'bihar', city: 'muzafferpur' }
}
{
  name: 'ombir kumar',
  age: 22,
  emailid: 'ombirkumar320@gmail.com',
  amount: 3000,
  address: { state: 'bihar', city: 'motihari' }
}
 */
