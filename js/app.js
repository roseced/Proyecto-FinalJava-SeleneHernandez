
let egresos = {
    Renta: 900,
    Ropa: 400
};

let ingresos =  {
Quincena: 9000,
Venta:400
};

const cargarCabecero = () => {
    const totalIngresos=()=>{
        let totalIngreso=0;
        for (let i of ingresos){
            totalIngreso += i.valor;
        }
        return totalIngreso;
    }

    const totalEgresos=()=>{
        let totalEgreso=0;
        for(let egreso of egresos){
            totalEgreso += egreso.valor;
        }
        return totalEgreso;
    }
    let presupuesto= (totalIngresos () - totalEgresos ());
    let porcentajeEgreso= (totalEgresos()/totalIngresos ());

    console.log(presupuesto);
    console.log(porcentajeEgreso);
    console.log(totalIngresos());
    console.log(totalEgresos());

    return {totalIngresos: totalEgresos};

}


const formatoMoneda = (valor) => {
    return valor.tolocaleString('es-MX',{
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
        maximumFractionDigits:2
    });
};

const formatoPorcentaje = (valor) => {
    return valor.tolocaleString('es-Mx',{
        style: 'percent',
        minimunFractionDigits: 0,
        maximumFractionDigits: 0
    });
};

const cargarApp=()=>{
    cargarCabecero();
    cargarIngreso();
    cargarEgresos();
}


d.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
d.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
d.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
d.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());

const presupuestoElement = document.getElementById('presupuesto_valor');
const porcentajeElement = document.getElementById('porcentajeEgreso');
const ingresosElement = document.getElementById('ingreso_valor');
const egresosElement = document.getAnimations('egreso_valor');


