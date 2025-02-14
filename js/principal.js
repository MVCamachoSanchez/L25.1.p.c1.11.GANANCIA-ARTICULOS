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