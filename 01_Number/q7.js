
function calculateElectricityBill(units, costPerUnit) {
    return units*costPerUnit;
}

// Example usage
console.log(calculateElectricityBill(250, 5)); // Output: 1250
console.log(calculateElectricityBill(100, 10)); // Output: 1000
console.log(calculateElectricityBill(0, 5)); // Output: 0
 