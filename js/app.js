import Ingreso from './Ingreso.js';
import Egreso from './Egreso.js';

// Ingresos
let ingresos = [
    // clase de Ingresos
    new Ingreso("Salario", 15000),
    new Ingreso("Diseno", 3000),
    new Ingreso("Tejido", 2000)
];

// Egresos
let egresos = [
    // Clase de Egresos
    new Egreso("Renta", 4000),
    new Egreso("Comida", 2000),
    new Egreso("Prepa Rod", 2000)
];

// Eliminar ingreso
function eliminarIngreso(id) {
    ingresos = ingresos.filter(ingreso => ingreso.getId() !== id);
    cargarApp(); 
};

function cargarIngresos() {
    const listaIngresosElement = document.getElementById('lista_ingresos'); 
    listaIngresosElement.innerHTML = '';  

    for (const ingreso of ingresos) { 
        const ingresoHTML = crearIngresoHTML(ingreso); 
        listaIngresosElement.appendChild(ingresoHTML); 
    }
};


// Eliminar un egreso
const eliminarEgreso = (id) => {
    const indiceEliminar = egresos.findIndex(egreso => egreso.getId() === id);  

    if (indiceEliminar !== -1) { 
        egresos.splice(indiceEliminar, 1);   
        cargarCabecero(); 
        cargarEgresos(); 
        console.log("Egreso eliminado:", id);
    } else {
        console.log("Egreso no encontrado:", id);
    }
};



function cargarEgresos() {
    const listaEgresosElement = document.getElementById('lista_egresos'); 
    listaEgresosElement.innerHTML = '';  

    for (const egreso of egresos) { 
        const egresoHTML = crearEgresoHTML(egreso); 
        listaEgresosElement.appendChild(egresoHTML); 
    }
};

// Total de ingresos
const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) { 
        totalIngreso += ingreso.valor; 
    }
    return totalIngreso; 
};


// Total de egresos
const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) { 
        totalEgreso += egreso.valor; 
    }
    return totalEgreso; 
};


// Crear un cabecero
const cargarCabecero = () => {
    //let egresos = [900, 400];
    //let ingresos = [9000, 400];

    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos()

    const presupuestoElement = document.getElementById('presupuesto_valor');
    const porcentajeElement = document.getElementById('porcentaje');
    const ingresosElement = document.getElementById('ingresos_valor');
    const egresosElement = document.getElementById('egresos_valor');
 
    presupuestoElement.innerHTML = formatoMoneda(presupuesto);
    porcentajeElement.innerHTML = formatoPorcentaje(porcentajeEgreso);
    ingresosElement.innerHTML = formatoMoneda(totalIngresos());
    egresosElement.innerHTML = formatoMoneda(totalEgresos());

    console.log(`Presupuesto: ${formatoMoneda(presupuesto)}`);
    console.log(`Porcentaje de Egreso: ${formatoPorcentaje(porcentajeEgreso)}`);
    console.log(`El Total de los INGRESOS: ${formatoMoneda(totalIngresos())}`);
    console.log(`El Total de EGRESOS: ${formatoMoneda(totalEgresos())}`);   
}


// HTML de un ingreso
const crearIngresoHTML = (ingreso) => { 

    const ingresoHTML = document.createElement('div');
    ingresoHTML.classList.add('elemento', 'limpiarEstilos');

    const descripcionElement = document.createElement('div');
    descripcionElement.classList.add('elemento_descripcion');
    descripcionElement.textContent = ingreso.descripcion;
    
    const valorElement = document.createElement('div');
    valorElement.classList.add('derecha', 'limpiarEstilos');
    valorElement.innerHTML = `<div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>`;

    const eliminarButton = document.createElement('button');
    eliminarButton.classList.add('elemento_eliminar--btn');

    eliminarButton.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
    eliminarButton.onclick = () => eliminarIngreso(ingreso.getId());
    
    const eliminarDiv = document.createElement('div');
    eliminarDiv.classList.add('elemento_eliminar');
    eliminarDiv.appendChild(eliminarButton);
    valorElement.appendChild(eliminarDiv);

    ingresoHTML.appendChild(descripcionElement);
    ingresoHTML.appendChild(valorElement);
    return ingresoHTML;
};



const crearEgresoHTML = (egreso) => {
    const egresoHTML = document.createElement('div');
    egresoHTML.classList.add('elemento', 'limpiarEstilos');
    egresoHTML.dataset.id = egreso.getId();

    const descripcionElement = document.createElement('div');
    descripcionElement.classList.add('elemento_descripcion');
    descripcionElement.textContent = egreso.descripcion;

    const valorElement = document.createElement('div');
    valorElement.classList.add('derecha', 'limpiarEstilos');
    valorElement.innerHTML = `<div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>`;

    const porcentajeHTML = document.createElement('div');
    porcentajeHTML.classList.add('elemento_porcentaje');
    
    const porcentajeEgreso = (egreso.valor / totalIngresos());
    porcentajeHTML.textContent = formatoPorcentaje(porcentajeEgreso);
 
    const eliminarButton = document.createElement('button');
    eliminarButton.classList.add('elemento_eliminar--btn');
    eliminarButton.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
    eliminarButton.onclick = () => eliminarEgreso(egreso.getId());

    const eliminarDiv = document.createElement('div');
    eliminarDiv.classList.add('elemento_eliminar');
    
    eliminarDiv.appendChild(porcentajeHTML);
    eliminarDiv.appendChild(eliminarButton);
    valorElement.appendChild(eliminarDiv);

    egresoHTML.appendChild(descripcionElement);
    egresoHTML.appendChild(valorElement);

    return egresoHTML;
};

const formatoMoneda = valor => {
    return valor.toLocaleString('es-MX', { 
        style: 'currency',  
        currency: 'MXN',
        minimumFractionDigits: 2 
    });
};

    const formatoPorcentaje = valor => {
        return valor.toLocaleString('es-MX', { 
            style: 'percent',
            minimumFractionDigits: 2 
        });
    };

const agregarDato = () => {
    const forma = document.getElementById('forma');
    const tipo = document.getElementById('tipo').value;
    const descripcion = document.getElementById('descripcion').value;
    const valor = document.getElementById('valor').value;  

    if (descripcion.trim() === '' || valor.trim() === '') {
        alert('Por favor, ingresa una descripción y un valor.');
        return;
    }

    if (tipo === 'ingreso') {
        ingresos.push(new Ingreso(descripcion, parseFloat(valor)));
        cargarIngresos(); 

    } else if (tipo === 'egreso') {
        egresos.push(new Egreso(descripcion, parseFloat(valor)));
        cargarEgresos(); 
    }

    cargarCabecero(); 
    forma.reset(); 
};

const cargarApp = () => {
    cargarCabecero(); 
    cargarIngresos(); 
    cargarEgresos(); 
};

window.onload = () => {
    const botonAgregar = document.getElementById('agregar-btn');
    if (botonAgregar) {
        botonAgregar.addEventListener('click', agregarDato);
    }
    cargarApp();
};

window.agregarDato = agregarDato;






