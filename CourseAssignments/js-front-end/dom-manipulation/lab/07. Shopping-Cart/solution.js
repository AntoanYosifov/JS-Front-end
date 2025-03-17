function solve() {
    const allProductsElement = document.querySelector('.shopping-cart');
    const textAreaElement = document.querySelector('textarea[disabled]');

    let products = {}
    allProductsElement.addEventListener('click', (e) => {

        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        if (e.target.classList.contains('add-product')) {
            const currentProductElement = e.target.parentElement.closest('.product');
            const productName = currentProductElement.querySelector('.product-details .product-title').textContent;
            const productPrice = Number(currentProductElement.querySelector('.product-line-price').textContent);

            if (!products.hasOwnProperty(productName)) {
                products[productName] = 0;
            }

            products[productName] = products[productName] + productPrice;
            textAreaElement.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
        } else {
            const productKeys = Object.keys(products);
            let totalPrice = productKeys.reduce((currentPrice, key) => {
                return currentPrice + products[key];
            }, 0);

            let productNames = productKeys.join(', ');
            textAreaElement.value += `You bought ${productNames} for ${totalPrice.toFixed(2)}.`

            document.querySelectorAll('button').forEach(el => el.setAttribute('disabled', 'disabled'))
        }

    });
}