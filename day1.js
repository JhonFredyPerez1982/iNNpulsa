function exerciseFirts(){
    a=prompt("appends a phrase");
    document.write(numberExercise(1)+a);
    console.log(numberExercise(1)+a);
    line();
    }


function exerciseSecond(){
let c=prompt("what you name ?");
let d=b.substring(0,6)+c+b.substring(6,7);
document.write(numberExercise(2)+d);
console.log(numberExercise(2)+d);
line();
}


function exerciseThird(){
    let e=parseInt(prompt("appends number"));
    let f=parseInt(prompt("appends other number"));  
     let result=(e+f);
document.write(numberExercise(3)+"result  is..."+result);
console.log(numberExercise(3)+"result  is..."+result);
line();
}

function exercisefourth(){
    let yearBorn =prompt("appends your year of born");
    let age=new Date().getFullYear()-yearBorn;
    document.write(numberExercise(4)+"result  is..."+age);
    console.log(numberExercise(4)+"result  is..."+age);
    line();
}

function exerciseFifth(){
    let weigth=prompt("enter how weigth you");
let heigth=prompt("enter how heigth you");
let bmi= weigth/Math.pow(heigth,2);
document.write(numberExercise(5)+"you \"BMI\" is..."+bmi);
console.log(numberExercise(5)+"you \"BMI\" is..."+bmi);
line();
}
function line() {
    document.write("<br><br>");
    }
    function numberExercise(leccion){
        this.leccion=leccion;
        return "exercise "+leccion+" = ";
        line();
    }
    