var feld = "zahl1"; var operation = ""; var decimal = false; var negative = false;
function Seven() { 
    let i = document.getElementById(feld).value;
    if (decimal || negative) {
        document.getElementById(feld).value = i + "7";
        negative = false;
    }
    else document.getElementById(feld).value = 10*i + 7;
    UpdateDisplay(feld);
}
function Eight() { 
    let i = document.getElementById(feld).value;
    if (decimal || negative) {
        document.getElementById(feld).value = i + "8";
        negative = false;
    }
    else document.getElementById(feld).value = 10*i + 8;
    UpdateDisplay(feld);
}
function Nine() { 
    let i = document.getElementById(feld).value;
    if (decimal || negative) {
        document.getElementById(feld).value = i + "9";
        negative = false;
    }
    else document.getElementById(feld).value = 10*i + 9;
    UpdateDisplay(feld);
}
function Four() { 
    let i = document.getElementById(feld).value;
    if (decimal || negative) {
        document.getElementById(feld).value = i + "4";
        negative = false;
    }
    else document.getElementById(feld).value = 10*i + 4;
    UpdateDisplay(feld);
}
function Five() { 
    let i = document.getElementById(feld).value;
    if (decimal || negative) {
        document.getElementById(feld).value = i + "5";
        negative = false;
    }
    else document.getElementById(feld).value = 10*i + 5;
    UpdateDisplay(feld);
}
function Six() { 
    let i = document.getElementById(feld).value;
    if (decimal || negative) {
        document.getElementById(feld).value = i + "6";
        negative = false;
    }
    else document.getElementById(feld).value = 10*i + 6;
    UpdateDisplay(feld);
}
 function One() { 
    let i = document.getElementById(feld).value;
    if (decimal || negative) {
        document.getElementById(feld).value = i + "1";
    }
    else document.getElementById(feld).value = 10*i + 1;
    UpdateDisplay(feld);
}
function Two() { 
    let i = document.getElementById(feld).value;
    if (decimal || negative) {
        document.getElementById(feld).value = i + "2";
    }
    else document.getElementById(feld).value = 10*i + 2;
    UpdateDisplay(feld);
}
function Three() { 
    let i = document.getElementById(feld).value;
    if (decimal || negative) {
        document.getElementById(feld).value = i + "3";
    }
    else document.getElementById(feld).value = 10*i + 3;
    UpdateDisplay(feld);
}
function Zero() { 
    let i = document.getElementById(feld).value;
    if (decimal || negative) {
        document.getElementById(feld).value = i + "0";
    }
    else document.getElementById(feld).value = 10*i + 0;
    UpdateDisplay(feld);
}
function Point() {
    let i = document.getElementById(feld).value;
    decimal = true;
    if (i == "")
        document.getElementById(feld).value = "0.";
    else if (i == "-")
    document.getElementById(feld).value = "-0.";
    else document.getElementById(feld).value = i + ".";
    UpdateDisplay(feld);
}
function Add() { 
    if (feld == "zahl2")
        GetNewElement();
    else feld = "zahl2";
    operation = "+";
    decimal = false;
}
function Divide() { 
    if (feld == "zahl2")
        GetNewElement();
    else feld = "zahl2";
    operation = "/";
    decimal = false;
}
function Multiply() { 
    if (feld == "zahl2")
        GetNewElement();
    else feld = "zahl2";
    operation = "*";
    decimal = false; negative = false;
}
function Subtract() { 
    let i = document.getElementById(feld).value;
    if (i == "") {
        document.getElementById(feld).value = "-";
        negative = true;
        UpdateDisplay(feld);
    }
    else if (i == "-") {
        document.getElementById(feld).value = "";
        negative = false;
        UpdateDisplay(feld);
    }
    else {

        if (feld == "zahl2")
            GetNewElement();
        else feld = "zahl2";
        operation = "m";
        decimal = false;
    }
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
        if (element != "+" && element != "m" && element != "*" && element != "/")
            temp += element;
        else {
            objectList.push(temp);
            if (element == "m")
                objectList.push("-");
            else objectList.push(element);
            temp = "";
        }
    };
    objectList.push(temp);
    
    let ergebnis = 0; let switched = false;
    do {
        switched = false;
        for (let index = 0; index < objectList.length; ++index) {
            if (objectList[index] == "*") {
                ergebnis = parseFloat(objectList[index-1]) * parseFloat(objectList[index+1]);
                objectList.splice(index - 1, 3, ergebnis.toString());
                switched = true;
            }
            else if (objectList[index] == "/") {
                ergebnis = parseFloat(objectList[index-1]) / parseFloat(objectList[index+1]);
                objectList.splice(index - 1, 3, ergebnis.toString());
                switched = true;
            }
        }
    } while (switched);
    do { 
        switched = false;
        for (let index = 0; index < objectList.length; ++index) {
            if (objectList[index] == "+") {
                ergebnis = parseFloat(objectList[index-1]) + parseFloat(objectList[index+1]);
                objectList.splice(index - 1, 3, ergebnis.toString());
                switched = true;
            }
            else if (objectList[index] == "-") {
                ergebnis = parseFloat(objectList[index-1]) - parseFloat(objectList[index+1]);
                objectList.splice(index - 1, 3, ergebnis.toString());  
                switched = true;
            }
        }
    } while (switched);
    return objectList[0];
}