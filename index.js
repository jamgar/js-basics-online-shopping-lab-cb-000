var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random() * 101)
 cart.push({ [item]: itemPrice })
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (getCart().length == 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var contentAndPrice = []
    getCart().map(function(obj) {
      contentAndPrice.push(`${Object.keys(obj)} at \$${obj[Object.keys(obj)]}`)
    })
    switch (contentAndPrice.length) {
      case 1:
        break;
      case 2:
        contentAndPrice = contentAndPrice.join(" and ")
        break
      default:
        contentAndPrice[cart.length - 1] = "and ".concat(contentAndPrice[cart.length - 1])
        contentAndPrice = contentAndPrice.join(", ")
    }
    console.log(`In your cart, you have ${contentAndPrice}.`)
  }
}

function total() {
  var cartTotal = 0
  getCart().map(function(obj) {
    cartTotal = cartTotal + obj[Object.keys(obj)]
  })
  return cartTotal
}

function removeFromCart(item) {
  var has_prop = false
  var new_cart = getCart().map(function(obj) {
    if (obj.hasOwnProperty(item)) {
      has_prop = true
      obj.delete
    } else {
      return obj
    }
  })
  if (!has_prop) {
    console.log("That item is not in your cart.");
  } else {
    new_cart = new_cart.filter(function( element ) {
       return element !== undefined;
    });
    setCart(new_cart)
  }
  return getCart()
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }
}
