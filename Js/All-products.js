 // Product data
        const products = [
            {
                id: 1,
                name: "Wireless Bluetooth Headphones",
                category: "electronics",
                price: "₦15,000",
                originalPrice: "₦18,750",
                rating: 4.5,
                seller: "AudioTech",
                image: "/Products/Wirless bluetooth earbuds.webp",
                description: "High-quality wireless headphones with noise cancellation and 20-hour battery life."
            },
            {
                id: 2,
                name: "Ladies Flat Slide Slippers",
                category: "fashion",
                price: "₦8,500",
                originalPrice: "₦10,625",
                rating: 4.2,
                seller: "FashionHub",
                image: "/Products/Ladies flat slide slippers.jpg",
                description: "Lightweight and comfortable summer dress made from breathable cotton material."
            },
            {
                id: 3,
                name: "Colorful Stainless Steel Pots",
                category: "home",
                price: "₦25,000",
                originalPrice: "₦31,250",
                rating: 4.7,
                seller: "HomeEssentials",
                image: "/Products/Colorful Stainless Steel Pot.jpg",
                description: "10-piece non-stick cookware set perfect for your kitchen needs."
            },
            {
                id: 4,
                name: "Panasonic Microwave",
                category: "electronics",
                price: "₦5,500",
                originalPrice: "₦6,875",
                rating: 4.4,
                seller: "BeautyGlow",
                image: "/Products/panasonic-microwave.webp",
                description: "Anti-aging vitamin C serum for brighter and more youthful skin."
            },
            {
                id: 5,
                name: "Teddy Bear",
                category: "toys",
                price: "₦12,000",
                originalPrice: "₦15,000",
                rating: 4.8,
                seller: "ToyWorld",
                image: "/Products/teddy bear.jpg",
                description: "Colorful educational building blocks for children's creative development."
            },
            {
                id: 6,
                name: "Tecno Smart Watch",
                category: "home",
                price: "₦65,000",
                originalPrice: "₦81,250",
                rating: 4.6,
                seller: "OwenOfItaly",
                image: "/Products/Tecno-watch.jpg",
                description: "Latest smartphone with dual camera setup and long-lasting battery."
            },
            {
                id: 7,
                name: "GOD OF WAR RAGNAROK PS5",
                category: "electronics",
                price: "₦22,000",
                originalPrice: "₦27,500",
                rating: 4.3,
                seller: "Gamers of the Dark",
                image: "/Products/god-of-war-ps5.jpg",
                description: "Premium quality leather shoes for formal and casual occasions."
            },
            {
                id: 8,
                name: "Iphone16",
                category: "electronics",
                price: "₦35,000",
                originalPrice: "₦43,750",
                rating: 4.5,
                seller: "HomeComfort",
                image: "/Products/iphone16.webp",
                description: "HEPA air purifier for cleaner and healthier indoor air quality."
            },
            {
                id: 9,
                name: "Chromium Drugs",
                category: "beauty",
                price: "₦7,500",
                originalPrice: "₦9,375",
                rating: 4.1,
                seller: "SkinCarePro",
                image: "/Products/Chromium drugs.jpg",
                description: "Electric facial cleansing brush for deep pore cleaning and exfoliation."
            },
            {
                id: 10,
                name: "Cross body bag",
                category: "fashion",
                price: "₦9,000",
                originalPrice: "₦11,250",
                rating: 4.7,
                seller: "ToyExpress",
                image: "/Products/crossbodybag.webp",
                description: "High-speed remote control car with realistic features and long battery life."
            },
            {
                id: 11,
                name: "Playstation Portal",
                category: "electronics",
                price: "₦12,500",
                originalPrice: "₦15,625",
                rating: 4.4,
                seller: "GearUp",
                image: "/Products/playstation-portal-ps5-31.webp",
                description: "Durable laptop backpack with multiple compartments and USB charging port."
            },
            {
                id: 12,
                name: "Mac book",
                category: "electronic",
                price: "₦18,000",
                originalPrice: "₦22,500",
                rating: 4.6,
                seller: "BagBoutique",
                image: "/Products/Mac book.jpg",
                description: "Elegant women's handbag made from genuine leather with ample storage space."
            }
        ];

        // DOM elements
        const productSection = document.getElementById('productSection');
        const filterButtons = document.querySelectorAll('.filter-btn li');
        const searchInput = document.getElementById('searchInput');
        const modal = document.getElementById('productModal');
        const closeModal = document.querySelector('.close-modal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalRating = document.getElementById('modalRating');
        const modalPrice = document.getElementById('modalPrice');
        const modalOriginalPrice = document.getElementById('modalOriginalPrice');
        const modalDescription = document.getElementById('modalDescription');

        // Initialize the page with all products
        displayProducts(products);

        // Filter products by category
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const category = button.getAttribute('data-category');
                
                if (category === 'all') {
                    displayProducts(products);
                } else {
                    const filteredProducts = products.filter(product => product.category === category);
                    displayProducts(filteredProducts);
                }
            });
        });

        // Search functionality
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.seller.toLowerCase().includes(searchTerm)
            );
            displayProducts(filteredProducts);
        });

        // Display products function
        function displayProducts(productsToDisplay) {
            productSection.innerHTML = '';
            
            if (productsToDisplay.length === 0) {
                productSection.innerHTML = '<p style="text-align: center; width: 100%; padding: 20px;">No products found matching your criteria.</p>';
                return;
            }
            
            productsToDisplay.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="discount-badge">20% OFF</div>
                    <i class="fas fa-heart"></i>
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.name}</p>
                    <p><span class="rating"><i class="fas fa-star"></i> ${product.rating}</span> sold by ${product.seller}</p>
                    <ul>
                        <li class="price">${product.price} <span class="original-price">${product.originalPrice}</span></li>
                        <li><i class="fas fa-shopping-cart" id="carts"></i></li>
                    </ul>
                `;
                
                // Add click event to open modal
                productCard.addEventListener('click', () => {
                    openProductModal(product);
                });
                
                // Add to cart animation
                const cartIcon = productCard.querySelector('#carts');
                cartIcon.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent opening modal when clicking cart
                    cartIcon.classList.add('pulse');
                    setTimeout(() => {
                        cartIcon.classList.remove('pulse');
                    }, 500);
                    
                    // Update cart counter
                    const cartCounter = document.querySelector('.fa-shopping-cart').nextElementSibling;
                    let count = parseInt(cartCounter.textContent);
                    cartCounter.textContent = count + 1;
                });
                
                // Wishlist functionality
                const heartIcon = productCard.querySelector('.fa-heart');
                heartIcon.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent opening modal when clicking heart
                    heartIcon.classList.toggle('active');
                });
                
                productSection.appendChild(productCard);
            });
        }

        // Open product modal
        function openProductModal(product) {
            modalImage.src = product.image;
            modalImage.alt = product.name;
            modalTitle.textContent = product.name;
            modalRating.textContent = product.rating;
            modalPrice.textContent = product.price;
            modalOriginalPrice.textContent = product.originalPrice;
            modalDescription.textContent = product.description;
            
            modal.style.display = 'flex';
        }

        // Close modal
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Add to cart from modal
        document.querySelector('.add-to-cart').addEventListener('click', () => {
            const cartCounter = document.querySelector('.fa-shopping-cart').nextElementSibling;
            let count = parseInt(cartCounter.textContent);
            cartCounter.textContent = count + 1;
            
            // Add animation to cart icon in header
            const headerCart = document.querySelector('.fa-shopping-cart');
            headerCart.classList.add('pulse');
            setTimeout(() => {
                headerCart.classList.remove('pulse');
            }, 500);
        });