function addnumber(num1,num2,num3=0, num4=0){
    let sum=num1+num2+num3+num4;
    console.log(sum);
}

addnumber(23,34);  //57
addnumber(23,34,37);  //94
addnumber(23,34,37,23);  //117


//rest oprator.
function addnumrest(...num){
    let sum=0;
    for (let n of num){
      sum=sum+n;
    }
    console.log(sum);
}

addnumrest(35,46); //81
addnumrest(35,46,65);  //146
addnumrest(35,46,84,76,68,67,76,5,64); //521

//Diffrence b/w rest(Collects multiple values into one array or object(many-one)) vs spread (object
// Expands an array or object into individual elements or properties(one-many)).

// rest oprator
function addnumrest(...num){
    console.log(num);
}
addnumrest(23,343,546,45);
addnumrest(23,343,546,45,34,34);
const arr=[24,54,57,78,97];
const [first,secound,...num]=arr;
console.log(first,secound,num);
/*
OUTPUT
[ 23, 343, 546, 45 ]
[ 23, 343, 546, 45, 34, 34 ]

24 54 [ 57, 78, 97 ]
*/

//spread oprator.
let arr1=[24,54,57,78,97];
let arr2=[43,45,56,668,56];
const ans=[...arr1,...arr2];
console.log(ans);
/*
OUTPUT
[
  24, 54, 57,  78, 97,
  43, 45, 56, 668, 56
]
   */


//function expration. //must call function name after the block code.
const addnumber=function(num,num1){
    return num+num1;
}
console.log(addnumber(34,65));  //99

/*arrow function.
()=>{

    }
*/
const addnumber1=(num,num1) => {
   return num+num1;
}
console.log(addnumber1(3,4));  //7
            //or
const addnumber2=(num,num1)=>num+num1;
const squrenumber=(num)=>num*num;   //if you have single paramiter so need to use this.
console.log(addnumber2(34,54));  //88
console.log(squrenumber(6));  //36
const arr=[23,45,47,77,86,54];
arr.sort ((a,b) => (a-b));
console.log(arr); // [ 23, 45, 47, 54, 77, 86 ]

//IIFE (immidiate invoke function).
(function gretting(){
    console.log("ombir kumar");
})(); //ombir kumar

(()=>{
    console.log("hii");
})(); //hii


//callback function.
function greet(callback){
    console.log("hello, i am ombir");
    callback();
    console.log("thank you!");
}
function coder(){
    console.log("field of software devloper");
}
function meet(){
     console.log("i am in 4rth year student loockin for job opertunity");
     
}

greet(meet);  
greet(coder);  
/*
OUTPUT
hello, i am ombir
i am in 4rth year student loockin for job opertunity
thank you!

hello, i am ombir
field of software devloper
thank you!
 */