let monto, impuesto, importe, descuento, tt;

monto = Number(prompt("Ingrese la cantidad del monto a pagaar!!!"));

if (monto <= 100) {
  descuento = monto * 0.1;
  importe = monto - descuento;
  impuesto = importe * 0.19;
  tt = importe + impuesto;
} else if (monto > 100 && monto <= 200) {
  descuento = monto * 0.2;
  importe = monto - descuento;
  impuesto = importe * 0.19;
  tt = importe + impuesto;
} else if (monto > 200) {
  descuento = monto * 0.30;
}

document.write(`El impuesto a pagar es: ${impuesto} <br> El descuento es: ${descuento} 
<br> El importe a pagar es: ${importe} <br> Total a pagar: ${tt}`);
