
function formatLargeNumber(number) {
    if(number >= 1_000_000){
        return (number/1_000_000).toFixed(1) + "M";
    }
    else if(number >= 1_000){
        return (number/1_000).toFixed(1) + "K";
    }
    else{
        return number.toString();
    }
}

// Example usage
console.log(formatLargeNumber(1500));  // Output: "1.5K"
console.log(formatLargeNumber(3500000)); // Output: "3.5M"
console.log(formatLargeNumber(950)); // Output: "950"
