
function calculateDistance(x1, y1, x2, y2) {
    let diffX = (x2-x1)*(x2-x1);
    let diffY = (y2-y1)*(y2-y1);

    const dist = Math.sqrt((diffX+diffY));
    return dist;
}

// Example usage:
console.log(calculateDistance(3, 4, 7, 1)); // Output: 5.00
console.log(calculateDistance(0, 0, 5, 12)); // Output: 13.00
