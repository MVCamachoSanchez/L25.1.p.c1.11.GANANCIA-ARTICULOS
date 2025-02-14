export default class Cl_tienda{
    constructor(codigo, costoVenta, precioVenta){
        this.codigo = codigo;
        this.costo = costoVenta;
        this.precioVenta = precioVenta;
    }

    set codigo(codigo){
        this._codigo= codigo;
    }
    get codigo(){
        return this._codigo;
    }

    set costoVenta(costoVenta){
        this._costoVenta = +costoVenta;
    }
    get costoVenta(){
        return this._costoVenta
    }

    set precioVenta(precioVenta){
        this._precioVenta = +precioVenta;
    }
    get precioVenta(){
        return this._precioVenta;
    }
}