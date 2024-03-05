// Darle valores a Impuestos y deducciones
const impuestosCliente = new Impuestos(80000, 20000);
const clienteObj = new Cliente("Pedro", impuestosCliente);

//Mostrar en consola los resultados
console.log("Nombre del cliente: " + clienteObj.nombre);
console.log("Impuesto total a pagar: " + clienteObj.calculoImpuesto());

//Modificar nombre de cliente
clienteObj.nombre = "Pedro";

console.log("Nuevo nombre del Cliente: ", clienteObj.nombre);