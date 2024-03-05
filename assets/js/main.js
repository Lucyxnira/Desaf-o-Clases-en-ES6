const impuestosCliente = new Impuestos(80000, 20000);
const clienteObj = new Cliente("Pedro", impuestosCliente);

console.log("Nombre del cliente: " + clienteObj.nombre);
console.log("Impuesto total a pagar: " + clienteObj.calculoImpuesto());
