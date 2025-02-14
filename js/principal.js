/** Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al
venderlos todos, y también el código del artículo con mayor precio de venta.
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70),
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10) */

import Cl_Empresa from "./Cl_Empresa.js";
import Cl_tienda from "./Cl_tienda.js";

let articulo1 = new Cl_tienda(888, 10, 15);
let articulo2 = new Cl_tienda(777, 20, 25);
let articulo3 = new Cl_tienda(999, 15, 25);
let articulo4 = new Cl_tienda(666, 25, 35);
let articulo5 = new Cl_tienda(111, 50, 70);
let articulo6 = new Cl_tienda(333, 40, 50);
let articulo7 = new Cl_tienda(444, 80, 100);
let articulo8 = new Cl_tienda(222, 5, 10);


let empresa = new Cl_Empresa();

empresa.procesarTienda(articulo1);
empresa.procesarTienda(articulo2);
empresa.procesarTienda(articulo3);
empresa.procesarTienda(articulo4);
empresa.procesarTienda(articulo5);
empresa.procesarTienda(articulo6);
empresa.procesarTienda(articulo7);
empresa.procesarTienda(articulo8);

let salida = document.getElementById("salida");

salida.innerHTML = `
<br> Ganacia total: ${empresa.totalGanado()}$
<br> Codigo del articulo con mayor precio de venta: ${empresa.articuloMayorPrecio()}
`