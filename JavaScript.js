function forclear(){
    document.getElementById("output").innerHTML = "0";
}

function removeZero() {
    var value = document.getElementById("output").innerHTML; // document.getElementById("output").innerHTML; == "0"
    if (value == "0") {
        value = ""
        document.getElementById("output").innerHTML = value;
    }
}

/*function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}*/

function Del() {
    removeZero()
    let Delete = document.getElementById("output").innerHTML;
    let Delete2 = Delete.slice(0, -1);
    document.getElementById("output").innerHTML = Delete2;
}

function fordisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value ;
}

function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById("output").innerHTML = solved;
}

