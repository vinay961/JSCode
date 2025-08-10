
// Function to create a shopping cart object
function createShoppingCart() {
   const cart = [];

   return {
        addItem(item) {
            const existing = cart.find(el => el.name == item.name);
            if (existing) {
                existing.quantity += item.quantity;
                existing.price += item.price;
            } else {
                cart.push(item);
            }
        },
        calculateTotal(){
            return cart.reduce((sum, item) => sum+item.price, 0);
        },
        getItems(){
            return cart;
        }
   };
}

// Function to add a new item
function addNewItemToCart(cart, name, price, quantity) {
    const newItem = { name, price, quantity };
    cart.addItem(newItem);  // Add the new item to the cart
}

// Create a shopping cart instance
const myCart = createShoppingCart();

// Display initial total price of the cart
console.log(`Initial Total: $${myCart.calculateTotal()}`);

// Add a new item to the cart
addNewItemToCart(myCart, "Sneakers", 60, 1);
addNewItemToCart(myCart, "Sneakers", 60, 1);


// Display updated total price of the cart
console.log(`Updated Total: $${myCart.calculateTotal()}`);
myCart.addItem({ name: "Sneakers", price: 60, quantity: 1 });

// Updated total price after adding the new item
console.log(`Updated Total: $${myCart.calculateTotal()}`);
console.log(myCart.getItems())







  