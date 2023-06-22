console.log("Hello World")

//arrow function to return product of two nos
let num1=2;
let num2=3;

const product=(n1,n2)=>n1*n2;

console.log(product(num1,num2));

//create a student object
const studenet={
    name:"Mohan",
    age:25,
    getDetails: function(){
      console.log(`My name is ${this.name} and age is ${this.age}`)
    }
};

studenet.getDetails();