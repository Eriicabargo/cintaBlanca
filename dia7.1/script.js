var nombre= "Erika Elizabeth";
var apellido= "Barrera Gomez";
var habilidades= ["Excel Basico","Ingles basico","Trabajo en equipo"];

var tarjeta = {
    nombre: "Erika Elizabeth",
    apellido: "Barrera Gomez",
    habilidades: ["Excel Basico","Ingles basico","Trabajo en equipo"],

usar:function(){
    return "Diligenciaste los datos en la tarjeta";
    }
}
console.log(tarjeta);
console.log(tarjeta.nombre);
console.log(tarjeta.habilidades[0]);

function cambia(){
    var h1= document.getElementById("nombre");
h1.innerHTML="Erika Elizabeth"
var h1= document.getElementById("apellido");
h1.innerHTML="Barrera Gomez";
var h2= document.getElementById("habilidades");
h1.innerHTML=tarjeta.habilidades[0];
}

