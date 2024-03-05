class Cliente {
    constructor(nombre, impuestos) {
        this.nombre = nombre;
        this.impuesto = impuestos;
    }

    calculoImpuesto() {
        return (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21;
    }
}
