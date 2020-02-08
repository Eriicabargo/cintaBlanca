var m1 = "Pedrito";
var m2 = "Rufo";
var m3 = "Chancla";

console.log("Mis mascotas son" + " " + m1 + " " + m2 + " " + m3 + " " + "les quiero mucho");

function saludo() {
    var mascotas = prompt("Por favor ingrese el nombre de la mascota #1");
    if (mascotas !=null) {
        var mascota2 = prompt("Por favor ingrese el nombre de la mascota #2","su nombre");
        if (mascota2 !==null && mascotas != null){
            document.getElementById("demo").innerHTML =
                "Quiero mucho a mis mascotas " + mascotas + " " + mascota2 + "!Muy lindas tus mascotas";
    }
    }
    }
