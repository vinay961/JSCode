
function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {
    if(discountThreshold < quantity){
        const discount = discountRate*quantity;
        return ((price*quantity)-discount);
    }
    else{
        return price*quantity;
    }
}

// Example usage
console.log(calculateBulkDiscount(50, 15, 10, 10)); // Output: 600
console.log(calculateBulkDiscount(50, 5, 10, 10));  // Output: 250
console.log(calculateBulkDiscount(100, 20, 15, 20)); // Output: 1600
 