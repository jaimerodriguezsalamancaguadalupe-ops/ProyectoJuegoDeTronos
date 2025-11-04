import { Casa } from "./Casa.js";
import { Arma } from "./Arma.js";
import { Reino } from "./Reino.js";
import { Personaje } from "./personaje.js";

// Instanciar casas 
const Stark= new Casa ('Stark', '');
const Lannister= new Casa('Lannister', '');

// Instanciar armas
const garra= new Arma ('Garra', 25, 'Espada');
const aguja= new Arma ('Aguja', 15, 'Espada');

// Instanciar reinos
const poniente= new Reino ('Poniente');

// Instancia personajes
const Jon= new Personaje ('Jon Snow', 28, 'Stark');
const Arya= new Personaje ('Arya Stark', 38, 'Stark');
const Jaime= new Personaje ('Jaime Lannister', 40, 'Lannister');

// Agregar casas al reino

poniente.agregarCasa(Stark);
poniente.agregarCasa(Lannister);

// Equipar armas

Jon.equiparArma(garra);
Arya.equiparArma(aguja);

// Agregar miembros a la casa
Stark.agregarMiembro(Jon);
Stark.agregarMiembro(Arya);
Lannister.agregarMiembro(Jaime);

// El rey es

poniente.agregarRey(Jaime);

// Mostrar casas del reino
console.log('Casas del reino de ' +poniente.nombre);
poniente.listarCasas();

// Mostrar miembros
Stark.listarMiembros();
Lannister.listarMiembros();

// Presentaciones de la clase Personaje

console.log('Presentaciones:');
Jon.agregarCasa(Stark);
Jon.mensajePresent();
Arya.agregarCasa(Stark);
Arya.mensajePresent();
Jaime.agregarCasa(Lannister);
Jaime.mensajePresent();

// Clase Arma
console.log('Armas');
console.log(garra.descripcion());
console.log(aguja.descripcion());

