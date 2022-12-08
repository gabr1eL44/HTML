var feld = "zahl1";
var operation = "";
function Seven() { 
    var i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 7;
}
function Eight() { 
    var i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 8;
}
function Nine() { 
    var i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 9;
}
function Four() { 
    var i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 4;
}
function Five() { 
    var i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 5;
}
function Six() { 
    var i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 6;
}
 function One() { 
    var i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 1;
}
function Two() { 
    var i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 2;
}
function Three() { 
    var i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 3;
}
function Zero() { 
    var i = document.getElementById(feld).value;
    document.getElementById(feld).value = 10*i + 0;
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
    var i = parseFloat(document.getElementById("zahl1").value);
    var j = parseFloat(document.getElementById("zahl2").value);
    if (operation == "+")
        document.getElementById("result").value = i + j;
    else if (operation == "-")
        document.getElementById("result").value = i - j;
    else if (operation == "*")
        document.getElementById("result").value = i * j;
    else if (operation == "/")
        document.getElementById("result").value = i / j;
    document.getElementById("zahl1").value = document.getElementById("zahl1").value
        + operation + document.getElementById("zahl2").value
    document.getElementById("zahl2").value = "";
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
        + operation + document.getElementById("zahl2").value
        document.getElementById("zahl2").value = "";
}