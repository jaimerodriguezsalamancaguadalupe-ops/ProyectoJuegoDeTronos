import { Arma } from "./Arma.js";
import { Personaje } from "./personaje.js";
import { Casa } from "./Casa.js";
import { Reino } from "./Reino.js";

const casa1= new Casa ('Casa Stark')
const casa2= new Casa ('Casa Lannister')

const reino1= new Reino ('Poniente');
const pers1= new Personaje ('Jaime Lannister');
const pers2= new Personaje ('Jon Snow');
const pers3= new Personaje ('Arya Stark');
const arma1= new Arma ('Garra', 'espada', 25);
const arma2= new Arma ('Aguja', 'espada', 15);



// Clase Reino
reino1.agregarCasa(casa1);
reino1.agregarCasa(casa2);
reino1.agregarRey(pers1);

// Clase Personaje

pers2.equiparArma(arma1);
pers3.equiparArma(arma2);   

// Clase Casa

casa1.agregarMiembros(pers2);
casa1.agregarMiembros(pers3);
casa2.agregarMiembros(pers1);


// Clase Reino 
reino1.agregarRey(pers1);
reino1.listarCasas();

console.log('El rey actual es');
reino1.mostrarInformRey(pers1,casa2);

// Clase Casa
casa1.listarMiembros();

console.log('Presentaciones:')

pers2.mensajePresentacion(casa1);
pers3.mensajePresentacion(casa1);
pers1.mensajePresentacion(casa2);
console.log('Armas:')

arma1.descripcion();
arma2.descripcion();
