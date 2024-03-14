class Dato{
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }

    get descripcion(){
        return this._descripcion;
    }
    set descripcion(nuevaDescripcion){
        this._descripcion = nuevaDescripcion;
    }
    get valor(){
        return this.valor;
    }
    set valor(nuevoValor){

    }
}

export default Dato;
