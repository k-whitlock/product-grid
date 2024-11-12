async function getData() {

    const container = document.querySelector('.grid');
    try {
        const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/products');
        const result = await response.json();
        console.log(result);
        const products = result.data;
        console.log(products);
        products.forEach(product => {
            let cardHtml = 
            `
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img class="w-full h-48 onject-cover" src="${product.images[0].image_url}" alt="" >
                    <div class="p-4">
                        <p class="text-xs text-neutral-500">black</p>
                        <h2 class="text-2xl pt-2 pb-4">${product.name}</h2>
                        <p class="text-sm text-neutral-500">$${product.priceRange.highest}</p>
                    </div>
                </div>
            
            `;
            container.innerHTML += cardHtml;
        });
    } catch (error) {
        console.error('Error:', error);
    }

    
    

}

getData();