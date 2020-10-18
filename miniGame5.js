var numberReverse4 = true;
var numberReverse3 = false;
var numberReverse2 = false;
var numberReverse1 = false;




function openMiniGame6(){
    var M11 = document.getElementById("M11");
    var M12 = document.getElementById("M12");
    M11.style.display = "initial";
    M12.style.display = "initial";
}

function counterReverse4() {
    numberReverse3 = true
}

function counterReverse3() {
    if(numberReverse3 == true){
        numberReverse2 = true;
    }else{
        numberReverse3 = false;
    }
}

function counterReverse2() {
    if(numberReverse2 == true){
        numberReverse1 = true;
    }else{
        numberReverse2 = false;
        numberReverse3 = false;
    }
}

function counterReverse1() {
    if(numberReverse1 == true){
        console.log("open");
        openMiniGame6();
    }else{
        numberReverse2 = false;
        numberReverse3 = false;
        numberReverse1 = false;
    }
    
}
