let cart = [];

function addToCart(item){
  cart.push(item);
  alert(item + " added to cart!\nTotal items in cart: " + cart.length);
}

function searchProduct(){
  let input = document.getElementById('searchBar').value.toLowerCase();
  let products = document.getElementsByClassName('product');
  for(let i=0;i<products.length;i++){
    let name = products[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
    products[i].style.display = name.includes(input) ? "inline-block" : "none";
  }
}

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
  .then(() => console.log('Service Worker Registered'))
  .catch(() => console.log('Service Worker Failed'));
}
