//using object literal;
const student ={name:"imran", age:20};
//object constructor
const person = new Object();
//3.
// const human =Object.create(null)
const human = Object.create(student);
// console.log(human.job);
//4.class
class People{
    constructor(name,age){
        this.name= name;
        this.age= age;
    }
}
const peop = new People("Manus",10)
console.log(peop);
//5.functio

function manus(name){

    this.name=name;
}
const hmm =new manus("imran")
console.log(hmm)
