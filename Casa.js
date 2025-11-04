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


agregarMiembro(personaje) {
        if (personaje instanceof Personaje) {
            this.miembros.push(personaje);
        } else {
             console.warn("Solo se pueden agregar objetos Personaje.");
        }
}

listarMiembros(){
    console.log('Miembros de la casa ' +this.#nombre);
    this.#miembros.forEach((miembro)=>{
        console.log('- ' +miembro.nombre)
    });

    }
}










