document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.querySelector('.total-price');

    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    cartItems.forEach(item => {
        const likeButton = item.querySelector('.like-button');
        const decreaseQtyButton = item.querySelector('.decrease-qty');
        const increaseQtyButton = item.querySelector('.increase-qty');
        const deleteButton = item.querySelector('.delete-button');
        const quantityElement = item.querySelector('.quantity');

        likeButton.addEventListener('click', function () {
            likeButton.classList.toggle('liked');
        });

        decreaseQtyButton.addEventListener('click', function () {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });

        increaseQtyButton.addEventListener('click', function () {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });

        deleteButton.addEventListener('click', function () {
            item.remove();
            updateTotalPrice();
        });
    });

    updateTotalPrice();
});
