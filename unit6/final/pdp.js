const productCatalog = {
    getPdpLink(id) {
        return `pdp.html?productId=${id}`;
    },
    products: [
        {
            id: "12267",
            name: "Black Sport-Tek Sport-Wick United Performance Pullover Hoodie",
            description: `Stay dry and comfortable during every workout with the Sport-Tek
                Sport-Wick United Performance Pullover Hoodie. This hoodie is crafted 
                with advanced moisture-wicking fabric to keep you sweat-free during intense 
                activities. The soft, lightweight material offers flexibility while maintaining 
                warmth. Perfect for layering or wearing on its own during cooler weather.`,
            imgPath: "images/mens_active_hoodie/hoodie_front.png",
            imgAlt: "a man faces forward wearing a black sport tek hoodie that has the store logo on it",
            categories: ["hoodie", "moisture-wicking", "activewear", "pullover"],
            availableSizes: ["S", "M", "L", "XL", "2X"],
            shortDescription: "Moisture-wicking pullover hoodie for active use.",
            priceWas: null,
            price: 42.00,
            tags: {
                newArrival: false,
                bestSeller: false,
                sale: false
            }
        },
        {
            id: "12268",
            name: "Black Hanes Women's Sport Cool Dri Performance Shirt",
            description: `Hanes Women's Sport Cool Dri Performance Shirt is designed with
                advanced moisture-wicking technology to keep you cool and comfortable. 
                Whether you're pushing through an intense workout or enjoying outdoor 
                activities, this shirt offers lightweight comfort and dries quickly, making 
                it a perfect fit for your active lifestyle.`,
            imgPath: "images/womens_active_shirt/tee_front.png",
            imgAlt: "a woman faces forward wearing a black cool dry shirt that has the store logo on it",
            categories: ["t-shirt", "moisture-wicking", "women's activewear", "cool-dri"],
            availableSizes: ["XS", "S", "M", "L", "XL"],
            shortDescription: "Quick-drying, lightweight active shirt for women.",
            priceWas: 24.99,
            price: 9.99,
            tags: {
                newArrival: true,
                bestSeller: false,
                sale: true
            }
        },
        {
            id: "12269",
            name: "Black Port & Company Core Crewneck Sweatshirt",
            description: `The Black Port & Company Core Crewneck Sweatshirt offers a classic 
                fit and feel with its soft fleece material, making it perfect for layering 
                or wearing casually. Whether you're lounging or staying active, this 
                sweatshirt is designed to provide warmth and comfort throughout the day.`,
            imgPath: "images/mens_casual_sweatshirt/sweatshirt_front.png",
            imgAlt: "a man faces forward wearing a black sweatshirt that has the store logo on it",
            categories: ["sweatshirt", "crewneck", "casual", "layering"],
            availableSizes: ["S", "M", "L", "XL", "2X"],
            shortDescription: "Casual fleece crewneck sweatshirt for layering.",
            priceWas: 30.00,
            price: 15.99,
            tags: {
                newArrival: false,
                bestSeller: true,
                sale: true
            }
        },
        {
            id: "12267",
            name: "Black Sport-Tek Sport-Wick United Performance Pullover Hoodie",
            description: `Stay dry and comfortable during every workout with the Sport-Tek
                Sport-Wick United Performance Pullover Hoodie. This hoodie is crafted 
                with advanced moisture-wicking fabric to keep you sweat-free during intense 
                activities. The soft, lightweight material offers flexibility while maintaining 
                warmth. Perfect for layering or wearing on its own during cooler weather.`,
            imgPath: "images/mens_active_hoodie/hoodie_front.png",
            imgAlt: "a man faces forward wearing a black sport tek hoodie that has the store logo on it",
            categories: ["hoodie", "moisture-wicking", "activewear", "pullover"],
            availableSizes: ["S", "M", "L", "XL", "2X"],
            shortDescription: "Moisture-wicking pullover hoodie for active use.",
            priceWas: null,
            price: 42.00,
            tags: {
                newArrival: false,
                bestSeller: false,
                sale: false
            }
        },
        {
            id: "12268",
            name: "Black Hanes Women's Sport Cool Dri Performance Shirt",
            description: `Hanes Women's Sport Cool Dri Performance Shirt is designed with
                advanced moisture-wicking technology to keep you cool and comfortable. 
                Whether you're pushing through an intense workout or enjoying outdoor 
                activities, this shirt offers lightweight comfort and dries quickly, making 
                it a perfect fit for your active lifestyle.`,
            imgPath: "images/womens_active_shirt/tee_front.png",
            imgAlt: "a woman faces forward wearing a black cool dry shirt that has the store logo on it",
            categories: ["t-shirt", "moisture-wicking", "women's activewear", "cool-dri"],
            availableSizes: ["XS", "S", "M", "L", "XL"],
            shortDescription: "Quick-drying, lightweight active shirt for women.",
            priceWas: 24.99,
            price: 9.99,
            tags: {
                newArrival: true,
                bestSeller: false,
                sale: true
            }
        },
        {
            id: "12269",
            name: "Black Port & Company Core Crewneck Sweatshirt",
            description: `The Black Port & Company Core Crewneck Sweatshirt offers a classic 
                fit and feel with its soft fleece material, making it perfect for layering 
                or wearing casually. Whether you're lounging or staying active, this 
                sweatshirt is designed to provide warmth and comfort throughout the day.`,
            imgPath: "images/mens_casual_sweatshirt/sweatshirt_front.png",
            imgAlt: "a man faces forward wearing a black sweatshirt that has the store logo on it",
            categories: ["sweatshirt", "crewneck", "casual", "layering"],
            availableSizes: ["S", "M", "L", "XL", "2X"],
            shortDescription: "Casual fleece crewneck sweatshirt for layering.",
            priceWas: 30.00,
            price: 15.99,
            tags: {
                newArrival: false,
                bestSeller: true,
                sale: true
            }
        }
    ]
};