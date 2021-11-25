const kibria ={
    id:10,
    money:5000,
    name:"kibrai vai",
    treatDey :function(expense){
         this.money = this.money - expense;
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

kibria.treatDey(500);
const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);

const heroSalamTreatDey = kibria.treatDey.bind(heroSalam);
heroSalamTreatDey(2000)