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

agregarRey(nombreRey){

    if (nombreRey instanceof Personaje){
        console.log(nombreRey.getNombre + ' ha sido proclamado rey de ' +this.#nombre);
    } else{
        console.log('No hay rey');
    }

}


agregarCasa(casa){
    if (casa instanceof Casa){
        this.#casas.push(casa); 
        console.log('La Casa ' +casa.getNombre + ' ha sido añadido al Reino ' +this.#nombre);
    } else{
        console.log('Esta casa no pertenece a ningun reino');
    }
}

listarCasas(){   
    
    console.log('Casas del Reino ' + this.#nombre); 
    
    if (this.#casas.length > 0) {
        for (let misCasas of this.#casas) { 
            console.log('- ' +misCasas.getNombre);
        }
    } else {
        console.log('Error, no se ha añadido ninguna casa'); 
    }
}
mostrarInformRey(rey,casa){
   this.#rey=rey;
    if (casa instanceof Casa && this.#rey instanceof Personaje){
        this.#casas.push(casa);
        console.log('El rey actual es ' + this.#rey.getNombre + ' de la ' +casa.getNombre);
    }
    else{
        console.log('No hay rey actualmente');
    }
}

}












