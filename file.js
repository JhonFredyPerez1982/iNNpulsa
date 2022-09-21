let b="hello !";


function numberExercise(leccion){
    this.leccion=leccion;
    return "exercise "+leccion+" = ";
    line();
}
anyphrase();
names();
sum();
born();
imc();
function anyphrase(){
    a=prompt("appends a phrase");
    document.write(numberExercise(1)+a);
    console.log(numberExercise(1)+a);
    line();
}
function names(){
let c=prompt("what you name ?");
let d=b.substring(0,6)+c+b.substring(6,7);
document.write(numberExercise(2)+d);
console.log(numberExercise(2)+d);
line();
}
function sum(){
    let e=parseInt(prompt("appends number"));
    let f=parseInt(prompt("appends other number"));  
     let result=(e+f);
document.write(numberExercise(3)+"result  is..."+result);
console.log(numberExercise(3)+"result  is..."+result);
line();
}
function born(){
    let yearBorn =prompt("appends your year of born");
    let age=new Date().getFullYear()-yearBorn;
    document.write(numberExercise(4)+"result  is..."+age);
    console.log(numberExercise(4)+"result  is..."+age);
    line();
}
function imc(){
let weigth=prompt("enter how weigth you");
let heigth=prompt("enter how heigth you");
let bmi= weigth/Math.pow(heigth,2);
document.write("you \"BMI\" is..."+bmi);
console.log("you \"BMI\" is..."+bmi);
line();
}
function line() {
    document.write("<br><br>");
    }
