function num1(){
    var element = document.getElementById("output");
    var value = element.innerHTML;
    value= value+1;
    document.getElementById("output").innerHTML = value;
}
function num2(){
    var element = document.getElementById("output");
    var value = element.innerHTML;
    value= value+2;
    document.getElementById("output").innerHTML = value;
}
function num3(){
    var element = document.getElementById("output");
    var value = element.innerHTML;
    value= value+3;
    document.getElementById("output").innerHTML = value;
}
function num4(){
    var element = document.getElementById("output");
    var value = element.innerHTML;
    value= value+4;
    document.getElementById("output").innerHTML = value;
}
function num5(){
    var element = document.getElementById("output");
    var value = element.innerHTML;
    value= value+5;
    document.getElementById("output").innerHTML = value;
}
function num6(){
    var element = document.getElementById("output");
    var value = element.innerHTML;
    value= value+6;
    document.getElementById("output").innerHTML = value;
}
function num7(){
    var element = document.getElementById("output");
    var value = element.innerHTML;
    value= value+7;
    document.getElementById("output").innerHTML = value;
}
function num8(){
    var element = document.getElementById("output");
    var value = element.innerHTML;
    value= value+8;
    document.getElementById("output").innerHTML = value;
}
function num9(){
    var element = document.getElementById("output");
    var value = element.innerHTML;
    value= value+9;
    document.getElementById("output").innerHTML = value;
}
function num0(){
    var element = document.getElementById("output");
    var value = element.innerHTML;
    value= value+0;
    document.getElementById("output").innerHTML = value;
}
function cClear(){
    document.getElementById("output").innerHTML = "";
}

var myArray;

document.getElementById("plus").onclick=function(){
    var oldNum = parseInt(document.getElementById("output").innerHTML);
    document.getElementById("output").innerHTML = "";
    myArray = [oldNum,"+"];
}

document.getElementById("minus").onclick=function(){
    var oldNum = parseInt(document.getElementById("output").innerHTML);
    document.getElementById("output").innerHTML = "";
    myArray = [oldNum,"-"];
}

document.getElementById("multiply").onclick=function(){
    var oldNum = parseInt(document.getElementById("output").innerHTML);
    document.getElementById("output").innerHTML = "";
    myArray = [oldNum,"x"];
}

document.getElementById("divide").onclick=function(){
    var oldNum = parseInt(document.getElementById("output").innerHTML);
    document.getElementById("output").innerHTML = "";
    myArray = [oldNum,"/"];
}



function answer(){
    var newNum = parseInt(document.getElementById("output").innerHTML);
    var oldNum = myArray[0];
    console.log(myArray)
    if(myArray[1]=="+"){
        document.getElementById("output").innerHTML = oldNum + newNum;
    } else if(myArray[1] =="-"){
        document.getElementById("output").innerHTML = oldNum - newNum;
    } else if(myArray[1] =="x"){
        document.getElementById("output").innerHTML = oldNum * newNum;
    } else{
        document.getElementById("output").innerHTML = oldNum / newNum;
    }
}