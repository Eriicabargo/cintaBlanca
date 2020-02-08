//para
// i = indice ; condición; aumento
// for (i=0; i<5; i=i+1){
// console.log("Interación número"+ i);
// }

for (i = 1; i <= 100; i = i + 1)
    if (i % 2 == 0) {
        console.log(i);
    }
// [] arreglo == arrays  de manera ordenada
//              0           1         2 

var paises= ["Colombia", "Mexico","Costa Rica","Perú","Ecuador","Brasil"];
//             0, 1, 2, 3,  4,  5,  6,   7,         8,      9 
var numeros = [5 ,6 ,8 ,9 ,13 ,14 ,19, "siete", "veinte", true];

console.log(paises[0]);
console.log(paises[1]);
console.log(paises[2]);

for (i= 0; i<5; i++){
    console.log(paises[i]);
}

//largo (agregar o actualizar) .length
for (i= 0; i<paises.length; i++){
    console.log(paises[i]);
}

for (i=100; i>=1;i--){
    console.log(i);
}



var  calificaciones=[5,4,3,5,4,3,2,1];

// Acumuladora
var suma = 0;
//sumar calificaciones
for (i = 0; i < calificaciones.length; i++) {
    suma=suma + calificaciones[i];
}
var promedio = suma / calificaciones.length;
console.log(promedio.toFixed(2));
