export default class Cl_Empresa{
    constructor(){
        this.acmCosto = 0;
        this.acmPrecioV = 0;
        this.mayor = 0;
        this.codigoMayor = "";
    }

    procesarTienda(t){
        //Acumular el costo de venta 
        this.acmCosto += t.costo;

        //Acumular el precio de venta
        this.acmPrecioV += t.precioVenta;

        //Determinar el cogio del articulo con mayor precio de venta
        if(t.precioVenta > this.mayor){
            this.mayor = t.precioVenta;
            this.codigoMayor = t.codigo;
        }
    }


    totalGanado(){
        return this.acmPrecioV - this.acmCosto;
    }

    articuloMayorPrecio(){
        return this.codigoMayor
    }
}