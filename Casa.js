import { Personaje } from "./personaje.js";

export class Casa{
    #nombre;
    #lema;
    #miembros;

constructor(nombre='', lema=''){
    this.#nombre=nombre;
    this.#lema=lema;
    this.#miembros=[];

}

set nombre(nombre){
    this.#nombre=nombre;
}
get nombre(){
    return this.#nombre;
}
set lema(lema){
    this.#lema=lema;
}
get lema(){
    return this.#lema;
}
get miembros(){
    return this.#miembros;
}


agregarMiembros(miembros){
    if (miembros instanceof Personaje){
        this.#miembros.push(miembros);
        console.log(miembros.getNombre + ' ha sido añadido a la casa ' +this.#nombre )
    } else{
        console.log('Esta casa no reside ningun miembro');
    }
}

listarMiembros(){
    console.log('Miembros de la' +this.#nombre);
    if (this.#miembros.length > 0){
        for (let mismMiembros of this.#miembros){
            console.log('- ' +mismMiembros.getNombre);
        }
    } else {
        console.log('No hay miembro en esta casa');
    }
}

}












