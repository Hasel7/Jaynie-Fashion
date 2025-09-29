// Responsive Navbar Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");

if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("hidden");
    });

    // Hide mobile nav when a link is clicked
    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
            mobileNav.classList.add("hidden");
        });
    });
}

// Smooth scroll for desktop nav
document.querySelectorAll("header nav.nav.md\\:flex a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});



// Hoodie Products
const hoodieProducts = document.getElementById("hoodie-products");

const hoodies = [
    {
        img: "https://i.ibb.co/zT035r4J/image.png",
        title: "Classic Red Set",
        description: "Premium, soft-touch tracksuit with gold-tipped details. Effortlessly stylish and ready for anything."
    },

    {
        img: "https://i.ibb.co/606MgHhQ/image.png",
        title: "Charcoal Black Set",
        description: "The essential black hoodie and jogger set. Versatile comfort with a premium, embroidered finish."
    },

    {
        img: "https://i.ibb.co/DHm4dJT2/image.png",
        title: "Olive Green Set",
        description: "Rich Olive Green loungewear. Cozy fit and an elevated look for all-day style."
    },

    {
        img: "https://i.ibb.co/ns007z9L/image.png",
        title: "Ash White Set",
        description: "Lightweight comfort with a modern, clean look. Perfect for warmer days and easy layering."
    },

    {
        img: "https://i.ibb.co/rfvMgh1f/image.png",
        title: "Pristine White Set",
        description: "The essential monochrome set. Effortlessly stylish and soft for a relaxed, trendy look."
    },

    {
        img: "https://i.ibb.co/5h7QKHwC/image.png",
        title: "Vibrant Orange Set",
        description: "A bold pop of color in our signature soft-touch set. Classic design, perfect for making a statement."
    },

    {
        img: "https://i.ibb.co/Gr6PhHQ/image.png",
        title: "Two-Tone Lavender Set",
        description: "Vibrant two-tone loungewear. Soft, unique, and perfect for making a stylish statement."
    },

    {
        img: "https://i.ibb.co/chTYG3bW/image.png",
        title: "Sky Blue & Black Set",
        description: "Sleek color-block design. Comfortable fabric and a polished, modern athletic look."
    }
]

hoodies.forEach(item => {
    hoodieProducts.innerHTML += `
        <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col" >
                    <img src="${item.img}" alt="${item.title}" class="w-full h-56 object-cover">
                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="font-bold text-xl mb-2">${item.title}</h3>
                            <p class="text-gray-600 mb-4">${item.description}</p>
                        </div>
                    </div>
                </div>`
});

// Shirt Products
const shirtProducts = document.getElementById("shirt-products");

const shirts = [
    {
        // Carousel card: Long Sleeve & Short Sleeve
        img: [
            "https://i.ibb.co/WdBm2xZ/image.png", // Short sleeve 
            "https://i.ibb.co/9kCgsKTQ/image.png" // Long sleeve
        ],
        title: "Abstract Orange Shirt",
        description: "Bold, versatile long-sleeve and short-sleeve options for a modern, artistic look. Perfect for any occasion.",
        isCarousel: true 
    },

    {
        img: "https://i.ibb.co/fV4MsdCL/image.png",
        title: "Geometric Gold Shirt",
        description: "A stylish, short-sleeve print for an easy, confident everyday look."
    },
    {
        img: "https://i.ibb.co/6R0BYmb4/image.png",
        title: "Abstract Block Shirt",
        description: "Sophisticated print shirt perfect for an eye-catching, smart casual style."
    },
    {
        img: "https://i.ibb.co/N2FcqfvL/image.png",
        title: "Modern Splash Shirt",
        description: "Short-sleeve style with vibrant contrast and comfort. Perfect for a casual, trendy look."
    }
]

// Carousel logic for the first shirt card
document.addEventListener("DOMContentLoaded", () => {
    // After rendering, add carousel functionality
    const carouselCard = document.querySelector("#shirt-products > div:first-child");
    const shirt = shirts[0];
    if (carouselCard && shirt.isCarousel && Array.isArray(shirt.img)) {
        // Replace static img with carousel structure
        carouselCard.innerHTML = `
            <div class="relative w-full h-56">
                <img src="${shirt.img[0]}" alt="${shirt.title}" class="w-full h-56 object-cover carousel-img" style="transition: opacity 0.3s;">
                <button class="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-2 py-1 text-xl font-bold carousel-prev" style="z-index:2;">&#8592;</button>
                <button class="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-2 py-1 text-xl font-bold carousel-next" style="z-index:2;">&#8594;</button>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="font-bold text-xl mb-2">${shirt.title}</h3>
                    <p class="text-gray-600 mb-4">${shirt.description}</p>
                </div>
            </div>
        `;

        // Carousel 
        let current = 0;
        const imgEl = carouselCard.querySelector(".carousel-img");
        const prevBtn = carouselCard.querySelector(".carousel-prev");
        const nextBtn = carouselCard.querySelector(".carousel-next");

        function showImage(idx) {
            imgEl.style.opacity = 0;
            setTimeout(() => {
                imgEl.src = shirt.img[idx];
                imgEl.style.opacity = 1;
            }, 200);

            // Auto-move carousel every 3 seconds
            if (!carouselCard.autoMoveInterval) {
                carouselCard.autoMoveInterval = setInterval(() => {
                    current = (current + 1) % shirt.img.length;
                    showImage(current);
                }, 3000);
            }
        }
        // Start carousel movement immediately
        showImage(current);

        prevBtn.addEventListener("click", () => {
            current = (current - 1 + shirt.img.length) % shirt.img.length;
            showImage(current);
        });

        nextBtn.addEventListener("click", () => {
            current = (current + 1) % shirt.img.length;
            showImage(current);
        });
    }
});

// Render the first shirt (carousel) separately
if (shirts.length > 0 && shirts[0].isCarousel && Array.isArray(shirts[0].img)) {
    shirtProducts.innerHTML += `
        <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col" >
            <img src="${shirts[0].img[0]}" alt="${shirts[0].title}" class="w-full h-56 object-cover">
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="font-bold text-xl mb-2">${shirts[0].title}</h3>
                    <p class="text-gray-600 mb-4">${shirts[0].description}</p>
                </div>
            </div>
        </div>`;
}

// Render the rest of the shirts (skip the first one)
shirts.slice(1).forEach(item => {
    shirtProducts.innerHTML += `
        <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col" >
            <img src="${item.img}" alt="${item.title}" class="w-full h-56 object-cover">
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="font-bold text-xl mb-2">${item.title}</h3>
                    <p class="text-gray-600 mb-4">${item.description}</p>
                </div>
            </div>
        </div>`;
});

 document.addEventListener('DOMContentLoaded', function () {
            // Helper to activate nav link
            function activateNavLinkByHash(hash) {
                const allNavLinks = document.querySelectorAll('.nav a');
                let found = false;
                allNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === hash) {
                    link.classList.add('active');
                    found = true;
                }
                });
                // If not found, activate first nav link
                if (!found && allNavLinks.length > 0) {
                allNavLinks[0].classList.add('active');
                }
            }

            // Smooth scroll and highlight for all anchor links/buttons
            function setupSmoothScrollAndHighlight() {
                // Select all anchor links and buttons that scroll to sections
                const selector = 'a[href^="#"], button[data-scrollto]';
                document.querySelectorAll(selector).forEach(el => {
                el.addEventListener('click', function (e) {
                    let targetId = null;
                    if (this.tagName.toLowerCase() === 'a') {
                    const href = this.getAttribute('href');
                    if (href && href.startsWith('#') && href.length > 1) {
                        targetId = href.substring(1);
                    }
                    } else if (this.dataset.scrollto) {
                    targetId = this.dataset.scrollto;
                    }
                    if (targetId) {
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        e.preventDefault();
                        const headerHeight = document.querySelector('header').offsetHeight || 80;
                        window.scrollTo({
                        top: targetSection.offsetTop - headerHeight,
                        behavior: 'smooth'
                        });
                        history.pushState(null, '', '#' + targetId);
                        activateNavLinkByHash('#' + targetId);
                    }
                    }
                });
                });
            }

            // Highlight nav link on scroll
            function highlightOnScroll() {
                const sections = document.querySelectorAll('section[id]');
                const allNavLinks = document.querySelectorAll('.nav a');
                const headerHeight = document.querySelector('header').offsetHeight || 80;
                let scrollPos = window.scrollY + headerHeight + 10;
                let currentSection = sections[0];
                sections.forEach(section => {
                if (scrollPos >= section.offsetTop) {
                    currentSection = section;
                }
                });
                allNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentSection.id) {
                    link.classList.add('active');
                }
                });
            }

            // On page load, highlight based on hash or default
            function highlightOnLoad() {
                activateNavLinkByHash(window.location.hash || '#home-section');
            }

            // Listen for hashchange (e.g., browser back/forward)
            window.addEventListener('hashchange', function () {
                activateNavLinkByHash(window.location.hash);
            });

            // Listen for scroll
            window.addEventListener('scroll', highlightOnScroll);

            // Setup everything
            setupSmoothScrollAndHighlight();
            highlightOnLoad();
            });


// Footer Year Update
document.getElementById('current-year').textContent = new Date().getFullYear();