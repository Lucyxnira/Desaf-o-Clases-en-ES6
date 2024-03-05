// Variable Cliente
class Cliente {
    constructor(nombre, impuestos) {
        this._nombre = nombre;
        this._impuesto = impuestos;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    get impuesto(){
        return this._impuesto;
    }

    set impuesto(nuevoImpuesto){
        this._impuesto = nuevoImpuesto;
    }

    //Calculo de impuesto y deducciones
    calcularImpuesto() {
        return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
    }

}
