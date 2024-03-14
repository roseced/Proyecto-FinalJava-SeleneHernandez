import Dato from "./Dato.js";

class Egreso extends Dato{
    static contadorEgresos=0;
    constructor(descripcion,valor){
        super(descripcion,valor);
        this.id = ++Egreso.contadorEgresos;    
    }
    get id(){
        return this._descripcion;
    }
}
export default Egreso;
