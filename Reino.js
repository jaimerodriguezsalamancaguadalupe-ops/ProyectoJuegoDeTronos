import { Casa } from "./Casa.js";
import { Personaje } from "./personaje.js";

export class Reino{
    #nombre;
    #casaArray;
    #rey;

constructor(nombre=''){
    this.#nombre= nombre;
    this.#casaArray=[];
    this.#rey='';
}
set nombre(nombre){
    this.#nombre= nombre;
}
get nombre(){
    return this.#nombre;
}
get casasArray(){
    return this.#casaArray;
}
get rey(){
    return this.#rey;
}

agregarCasa(casa){
    if (casa instanceof Casa){
        this.#casaArray.push(casa);
        console.log('La Casa ' + casa.nombre + ' ha sido añadida al Reino ' +this.#nombre);
    }
}
agregarRey(personaje){
    if (personaje instanceof Personaje){
        this.#rey = personaje;
        console.log(personaje.nombre + ' ha sido proclamado rey de ' + this.#nombre);
    }
}
listarCasas(){
    for (let misCasas of this.#casaArray) {
        console.log('- Casa ' +misCasas.nombre);
    }
}

/* this.#casaArray.forEach((casa)=>{
    console.log(casa.nombre)
}) */
mostrarInfoRey(){
    if (this.#rey){
        console.log('El rey actual es ' + this.#nombre + 'de la casa' +this.#rey.casa.nombre);
    }
    else{
        console.log('No hay rey actualmente');
    }
}


}











