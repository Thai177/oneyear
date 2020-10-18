var number1 = true;
var number2 = false;
var number3 = false;
var number4 = false;




function openMiniGame5(){
    var M9 = document.getElementById("M9");
    var M10 = document.getElementById("M10");
    M9.style.display = "initial";
    M10.style.display = "initial";
}

function counter1() {
    number2 = true
}

function counter2() {
    if(number2 == true){
        number3 = true;
    }else{
        number2 = false;
    }
}

function counter3() {
    if(number3 == true){
        number4 = true;
    }else{
        number2 = false;
        number3 = false;
    }
}

function counter4() {
    if(number4 == true){
        openMiniGame5();
    }else{
        number2 = false;
        number3 = false;
        number4 = false;
    }
    
}
