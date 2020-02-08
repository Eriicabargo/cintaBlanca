alert("Funciona");
//String
//piedra
var j1 = "piedra";
var j2 = "piedra";

//empates ✅
if (j1 == "piedra" && j2 == "piedra") {
    console.log("Empate");
} else if (j1 == "tijera" && j2 == "tijera") {
    console.log("empate")
} else if (j1 == "papel" && j2 == "papel") {
    console.log("empate")
}

//Cuando gana J1
if (j1 == "piedra" && j2 == "papel") {
    console.log("Gana J1");
} else if (j1 == "tijera" && j2 == "papel") {
    console.log("Gana J1")
} else if (j1 == "papel" && j2 == "piedra") {
    console.log("Gana J1")
}

//Cuando gana J2
if (j2 == "piedra" && j1 == "papel") {
    console.log("Gana J2");
} else if (j2 == "tijera" && j1 == "papel") {
    console.log("Gana J2")
} else if (j2 == "papel" && j1 == "piedra") {
    console.log("Gana J2")
}

//no recibe parámetros
function myFunction() {
    console.log("Mi función");
}
myFunction();

function suma(a, b) {
    console.log(a + b);
}
suma(5, 4);
suma(5, 1);
suma(9, 1);

function sum(a, b) {
    var resultado = a + b;
    return resultado
}

var res = sum(2, 2);
console.log(res)

function juego(j1, j2) {    
    //empates ✅
    if (j1 == "piedra" && j2 == "piedra") {
        return ("Empate");
    } else if (j1 == "tijera" && j2 == "tijera") {
        return ("empate");
    } else if (j1 == "papel" && j2 == "papel") {
        return ("empate");
    }

    //Cuando gana J1
    if (j1 == "piedra" && j2 == "papel") {
        return ("Gana J1");
    } else if (j1 == "tijera" && j2 == "papel") {
        return ("Gana J1");
    } else if (j1 == "papel" && j2 == "piedra") {
        return ("Gana J1");
    }

    //Cuando gana J2
    if (j2 == "piedra" && j1 == "papel") {
        return ("Gana J2");
    } else if (j2 == "tijera" && j1 == "papel") {
        return ("Gana J2");
    } else if (j2 == "papel" && j1 == "piedra") {
        return ("Gana J2");
    }
}


var fin = juego ("papel","piedra");
console.log (fin);












