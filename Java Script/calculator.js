
var feld = "zahl1"; var operation = ""; var decimal = false; var negative = false; var opPressed = false;
{ // Process Number Inputs
    function Seven() {
        AddToInput(7);
    }
    function Eight() { 
        AddToInput(8);
    }
    function Nine() { 
        AddToInput(9);
    }
    function Four() { 
        AddToInput(4);
    }
    function Five() { 
        AddToInput(5);
    }
    function Six() { 
        AddToInput(6);
    }
     function One() { 
        AddToInput(1);
    }
    function Two() { 
        AddToInput(2);
    }
    function Three() { 
        AddToInput(3);
    }
    function Zero() { 
        AddToInput(0);
    }
}
function Point() {
    let i = document.getElementById(feld).value;
    decimal = true;
    if (i == "")
        document.getElementById(feld).value = "0.";
    else if (i == "-")
        document.getElementById(feld).value = "-0.";
    else if (i[i.length - 1] != ".")
        document.getElementById(feld).value = i + ".";
    UpdateDisplay(feld);
    opPressed = false;
}
{ // Process Operations
    function Add() { 
        ProcessOperation("+");
    }
    function Divide() { 
        ProcessOperation("/");
    }
    function Multiply() { 
        ProcessOperation("*");
    }
    function Subtract() { 
        let i = document.getElementById(feld).value;
        if (i == "" && (!opPressed || feld == "zahl2")) {
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
            if (negative) {
                ProcessOperation("m");
                negative = true;
            }
            else ProcessOperation("m");
        }
    }
}
function Calculate() {
    document.getElementById("result").value = CalculateTerm(document.getElementById("zahl1").value + operation + document.getElementById("zahl2").value);
    document.getElementById("zahl2").value = "";
    document.getElementById("zahl1").value = document.getElementById("result").value;
    operation = ""; feld = "zahl1";
}
function Clear() {
    document.getElementById("zahl1").value = "";
    document.getElementById("zahl2").value = "";
    document.getElementById("result").value = "";
    feld = "zahl1";
    operation = ""; 
    decimal = false; negative = false; opPressed = false;
}
function GetNewElement() {
    document.getElementById("zahl1").value = document.getElementById("zahl1").value
        + operation + document.getElementById("zahl2").value;
    document.getElementById("zahl2").value = "";
}
function UpdateDisplay() {
    document.getElementById("result").value = document.getElementById(feld).value;
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
function AddToInput(_number) {
    let i = document.getElementById(feld).value;
    if (decimal || negative) {
        document.getElementById(feld).value = i + _number;
        negative = false;
    }
    else document.getElementById(feld).value = i + _number.toString();
    opPressed = false;
    UpdateDisplay(feld);
}
function ProcessOperation(_operator) {
    if (!opPressed) {
        if (feld == "zahl2")
            GetNewElement();
        else feld = "zahl2";
    }
    operation = _operator;
    decimal = false; negative = false; opPressed = true;
}