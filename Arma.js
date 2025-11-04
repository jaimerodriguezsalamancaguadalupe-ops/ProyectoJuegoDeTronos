
export class Arma{
    #nombre;
    #dano;
    #tipo;


constructor(nombre='', dano='', tipo=''){
    this.#nombre= nombre;
    this.#dano= dano;
    this.#tipo= tipo;
}

set nombre(nombre){
    this.#nombre= nombre;
}
get nombre(){
    return this.#nombre;
}
set dano(dano){
    this.#dano=dano;
}
get dano(){
    return this.#dano;
}
set tipo(tipo){
    this.#tipo= tipo;
}
get tipo(){
    return this.#tipo;
}

descripcion(){
    return this.#nombre + ' (' +this.#tipo + ') - daño: ' +this.dano;
}
    

}













