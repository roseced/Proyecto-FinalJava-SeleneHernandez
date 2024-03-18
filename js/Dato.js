export default class Dato { 
    constructor (descripcion,valor) {
       this._descripcion=descripcion;
        this._valor=valor;
    }
   
    get descripcion() {
        return this._descripcion;
    }
    set descripcion(nuevaDescripcion ) {
        if (typeof nuevaDescripcion ===string) {
            this._descripcion=nuevaDescripcion;
        } else { 
            console.error("Error: La descripcion debe ser un valor de tipo String");
        }
    }
    
    get valor() {
        return this._valor;
    }
    set valor(nuevoValor) {
        if (typeof nuevoValor === number&&  nuevoValor >=0 ) {
            return this._valor=nuevoValor;
        } else {
            console.error("Error: El valor debe ser un número positivo.");
        } 
    }
}