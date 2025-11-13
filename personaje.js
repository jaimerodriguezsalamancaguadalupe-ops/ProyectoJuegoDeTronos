import { Casa } from "./Casa.js";
import { Arma } from "./Arma.js";

export class Personaje{
    #nombre;
    #age;
    #estado;
    #casaArray;
    #arma;

constructor(nombre='', age='', estado='', arma=null){
    this.#nombre=nombre;
    this.#age= age;
    this.#estado= estado;
    this.#casaArray=[];
    this.#arma=arma;
}
set nombre(nombre){
    this.#nombre=nombre;
}
get nombre(){
    return this.#nombre;
}
get age(){
    return this.#age;
}
set age(age){
    this.#age= age;
}
get estado(){
    return this.#estado;
}
set estado(estado){
    this.#estado= estado;
}
get casasArray(){
    return this.#casaArray;
}
get arma(){
    return this.#arma;
}
set arma(arma){
    this.#arma=arma;
}


agregarCasa(casa){
    if (casa instanceof Casa){
        this.#casaArray.push(casa);
        console.log(this.#nombre);
    }
}


mensajePresentacion(casa){
    if (casa instanceof Casa){
        console.log('Soy ' +this.#nombre + ' de la ' +casa.getNombre);
    }
    else{
        console.log('Error, no pertenece a ninguna casa');
    }
}
equiparArma(arma){
    if (arma instanceof Arma){
        console.log(this.#nombre + ' ha equipado el arma ' +arma.nombre);
    } else{
        console.log(this.#nombre + 'no tiene ningun arma');
    }
}
pershamuerto() {
  if (this.#estado === false) {
    console.log(`${this.#nombre} ha muerto`);
  } else {
    console.log(`${this.#nombre} sigue con vida`);
  }
}

}








