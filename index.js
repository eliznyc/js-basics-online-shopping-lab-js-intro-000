var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random(1) * Math.floor(99))+1 //generate random number
  let product = {itemName: `${item}`, itemPrice: price } //generate object pair
  cart.push(product); //add item object to cart
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  if (!cart.length) {return `Your shopping cart is empty.`};//syntax for 0 items
  if (cart.length===1) {return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`};//syntax for 1 item
  let list=[]; //create array of all but last item
  var x = cart.length-1;
  for (var i = 0; i < x; i++) {
  list.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)};
  return `In your cart, you have${list}, and ${cart[x].itemName} at $${cart[x].itemPrice}.`
}// write your code here

function total() {
  var allPrices = [];
  for (var i = 0; i < cart.length; i++) {
  allPrices.push(cart[i].itemPrice)};
  return allPrices.reduce(function(a,b){return a+b}, 0);
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {if (cart[i].itemName === itemName) {var d = i}};
  if (d===null) {return `That item is not in your cart.`};
  return cart.splice(d, 1);
}

function placeOrder(cardNumber) {
  // write your code here
}
