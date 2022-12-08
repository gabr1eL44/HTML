var feld = "zahl1";
var operation = "";

function Seven() { 
    let i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 7;
    UpdateDisplay(feld);
}
function Eight() { 
    let i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 8;
    UpdateDisplay(feld);
}
function Nine() { 
    let i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 9;
    UpdateDisplay(feld);
}
function Four() { 
    let i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 4;
    UpdateDisplay(feld);
}
function Five() { 
    let i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 5;
    UpdateDisplay(feld);
}
function Six() { 
    let i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 6;
    UpdateDisplay(feld);
}
 function One() { 
    let i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 1;
    UpdateDisplay(feld);
}
function Two() { 
    let i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 2;
    UpdateDisplay(feld);
}
function Three() { 
    let i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 3;
    UpdateDisplay(feld);
}
function Zero() { 
    let i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 0;
    UpdateDisplay(feld);
}
function Add() { 
    if (feld == "zahl2")
        GetNewElement();
    else feld = "zahl2";
    operation = "+";
}
function Divide() { 
    if (feld == "zahl2")
        GetNewElement();
    else feld = "zahl2";
    operation = "/";
}
function Multiply() { 
    if (feld == "zahl2")
        GetNewElement();
    else feld = "zahl2";
    operation = "*";
}
function Subtract() { 
    if (feld == "zahl2")
        GetNewElement();
    else feld = "zahl2";
    operation = "-";
}
function Calculate() {
    document.getElementById("result").value = CalculateTerm(document.getElementById("zahl1").value + operation + document.getElementById("zahl2").value);
    document.getElementById("zahl2").value = "";
    document.getElementById("zahl1").value = document.getElementById("result").value;
    operation = "";
}
function Clear() {
    document.getElementById("zahl1").value = "";
    document.getElementById("zahl2").value = "";
    document.getElementById("result").value = "";
    feld = "zahl1";
    operation = "";
}
function GetNewElement() {
    document.getElementById("zahl1").value = document.getElementById("zahl1").value
        + operation + document.getElementById("zahl2").value;
    document.getElementById("zahl2").value = "";
}
function UpdateDisplay(_feld) {
    document.getElementById("result").value = document.getElementById(_feld).value;
}
function CalculateTerm(_str) {
    let objectList = []; let temp = "";
    for (const element of _str) {
        if (element != "+" && element != "-" && element != "*" && element != "/")
            temp += element;
        else {
            objectList.push(temp);
            objectList.push(element);
            temp = "";
        }
    };
    objectList.push(temp);
    
    let ergebnis = 0;
    for (let index = 0; index < objectList.length; ++index) {
        if (objectList[index] == "*") {
            ergebnis = parseInt(objectList[index-1]) * parseInt(objectList[index+1]);
            objectList.splice(index - 1, 3, ergebnis.toString());
        }
        else if (objectList[index] == "/") {
            ergebnis = parseInt(objectList[index-1]) / parseInt(objectList[index+1]);
            objectList.splice(index - 1, 3, ergebnis.toString());
        }
    }
    for (let index = 0; index < objectList.length; ++index) {
        if (objectList[index] == "+") {
            ergebnis = parseInt(objectList[index-1]) + parseInt(objectList[index+1]);
            objectList.splice(index - 1, 3, ergebnis.toString());
        }
        else if (objectList[index] == "-") {
            ergebnis = parseInt(objectList[index-1]) - parseInt(objectList[index+1]);
            objectList.splice(index - 1, 3, ergebnis.toString());  
        }
    }
    return objectList[0];
}