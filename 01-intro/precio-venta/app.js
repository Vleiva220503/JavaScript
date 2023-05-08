//variables 

let vv = 0, igv = 0.19, pv = 0;

//entrada de datos

vv = Number(prompt('Ingrese el valor de la venta'));

//proceso 

igv *= vv;
pv = vv + igv;

//salida de datos

document.write(`Valor de venta:  ${vv} <br> IGV: ${igv} <br> Precio de venta: ${pv}`);