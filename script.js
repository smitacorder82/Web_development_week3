 // Cart functionality
 let cart = [];

 function addToCart(productName, price) {
     cart.push({ name: productName, price: price });
     updateCart();
 }

 function updateCart() {
     const cartItemsElement = document.getElementById('cart-items');
     const totalElement = document.getElementById('total');
     cartItemsElement.innerHTML = '';

     let totalPrice = 0;

     cart.forEach(item => {
         const listItem = document.createElement('li');
         listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
         cartItemsElement.appendChild(listItem);

         totalPrice += item.price;
     });

     totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
 }

 function toggleCart() {
     const cartModal = document.getElementById('cart-modal');
     cartModal.style.display = (cartModal.style.display === 'none' || cartModal.style.display === '') ? 'flex' : 'none';
 }

