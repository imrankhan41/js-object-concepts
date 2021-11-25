const kibria ={
    id:10,
    money:5000,
    name:"kibrai vai",
    treatDey :function(expense,baksis,tax){
         this.money = this.money - expense-baksis-tax;
         console.log(this);
         return this.money
    }
}
const heroBalam ={
    id:11,
    money:6000,
    name:"Balam vai"
}
const heroSalam ={
    id:12,
    money:8000,
    name:"Salam vai"
}
//call ,
kibria.treatDey.call(heroBalam,500,100,50)
kibria.treatDey.call(heroBalam,300,50,30)
kibria.treatDey.apply(heroBalam,[500,100,50])
kibria.treatDey.apply(heroBalam,[300,50,30])
kibria.treatDey.apply(heroSalam,[500,100,50])
kibria.treatDey.apply(heroSalam,[300,50,30])