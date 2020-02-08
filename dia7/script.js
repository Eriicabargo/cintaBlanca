// for (i = 1; i <= 100; i++) {
//     console.log(i);
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuuz");
//     }
//     if (i % 3 == 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 == 0) {
//         console.log("Buuz");
//     } else {
//         console.log(i);
//     }
// }

var edad= 24;//numerico
var nombre="Gerardo"; //String
var llueve= false;//Booleanos
var habilidades=["JS","HTML","CSS"];//Arreglos

var objeto = {
    nombre:"Cuchara",
    material: "plastico",
    color: "blanco",
    ciclo: 3,
    reciclable:false,
    usos: ["Comer","Revolver","Medir","Morder","Arma"],
usar: function() {
    return "Utilizaste la cuchara";
}

}

console.log(habilidades);

console.log(objeto);
console.log(objeto.nombre);// los objetos se traen con un (.)
console.log(objeto.usos[2]);

console.log (objeto.usar());

function cambia(){
    var h1= document.getElementById("nombre");
h1.innerHTML="cambió por medio de la variable"
}