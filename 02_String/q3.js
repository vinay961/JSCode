
function isProductMatch(query, description) {
    if(description.toLowerCase().includes(query.toLowerCase())){
        console.log("Product with that query is found.")
    }
    else{
        console.log("No such product is found.")
    }
}

let query = "red shoes";
let productDescription = "These are red shoes with comfortable padding.";

isProductMatch(query, productDescription);





  