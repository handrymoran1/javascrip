function calcularPropina(total, porcentaje) {
    let calcularPropina = (total * porcentaje) / 100;
    let totalCuenta = total + calcularPropina;
    return totalCuenta;
};

console.log("El total a pagar es: $" + calcularPropina(350000, 10));