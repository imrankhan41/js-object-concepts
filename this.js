const kibria ={
    id:10,
    money:5000,
    name:"kibrai vai",
    treatDeyArrow:()=>{
        console.log(this);
    },
    treatDeyInside:function(){
        const myArrow =()=>console.log(this);
        myArrow();
    },
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
function add(){
    console.log(this)
}