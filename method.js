const student = {
    id:10,
    money:5000,
    name:"RJ Kibria",
    subjects:["english","economics","math 101","calculas"],
    bestFriend:{
        name:"kundu",
        major:"mathematics"
    },
    isRich:false,
    takeExam:function(){
        console.log(this.name,"is taking exam")
    },
    treatDey: function(expense,baksis){
       this.money = this.money- expense-baksis;
       return this.money;
    }
}
student.takeExam();
const remaining1 = student.treatDey(900,100);
const remaining2 = student.treatDey(500,50);
console.log(remaining2);