document.addEventListener('DOMContentLoaded', () => {

    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-list');
    const logo = document.querySelector('.logo-img');
    const closeMenu = document.querySelector('.close-menu');

    if (burgerMenu && navList) {
        burgerMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            burgerMenu.classList.toggle('active');


            if (navList.classList.contains('active')) {
                logo.style.display = 'none';
            } else {
                logo.style.display = 'block';
            }
        });


        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                navList.classList.remove('active');
                burgerMenu.classList.remove('active');
                logo.style.display = 'block';
            });
        }


        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                burgerMenu.classList.remove('active');
                logo.style.display = 'block';
            });
        });
    }


    const reviewsGrid = document.querySelector('.reviews-grid');
    const prevBtn = document.getElementById('left');
    const nextBtn = document.getElementById('right');

    const reviewSets = [
        [
            'img/otzivi/otziv1.webp',
            'img/otzivi/otziv2.webp',
            'img/otzivi/otziv3.webp'
        ],
        [
            'img/otzivi/otziv4.webp',
            'img/otzivi/otziv5.webp',
            'img/otzivi/otziv6.webp'
        ],
        [
            'img/otzivi/otziv7.webp',
            'img/otzivi/otziv8.webp',
            'img/otzivi/otziv9.webp'
        ],
        [
            'img/otzivi/otziv10.webp',
            'img/otzivi/otziv11.webp',
            'img/otzivi/otziv12.webp'
        ]
    ];

    let currentSet = 0;

    function updateReviews() {
        reviewsGrid.classList.add('fade');
        setTimeout(() => {
            reviewsGrid.innerHTML = '';
            reviewSets[currentSet].forEach(img => {
                const reviewItem = document.createElement('div');
                reviewItem.classList.add('review-item');
                reviewItem.innerHTML = `<img src="${img}" alt="Отзыв">`;
                reviewsGrid.appendChild(reviewItem);
            });
            reviewsGrid.classList.remove('fade');
        }, 500);
    }

    if (reviewsGrid) {
        updateReviews();
        nextBtn.addEventListener('click', () => {
            currentSet = (currentSet + 1) % reviewSets.length;
            updateReviews();
        });

        prevBtn.addEventListener('click', () => {
            currentSet = (currentSet - 1 + reviewSets.length) % reviewSets.length;
            updateReviews();
        });
    }


    const form = document.getElementById('whatsapp-form');
    if (form) {
        const consentCheckbox = form.querySelector('input[name="consent"]');
        const submitButton = form.querySelector('button[type="submit"]');

        consentCheckbox.addEventListener('change', () => {
            submitButton.disabled = !consentCheckbox.checked;
        });

        form.onsubmit = function (event) {
            event.preventDefault();
            if (!consentCheckbox.checked) return;
            const name = form.querySelector('input[name="name"]').value;
            const phone = form.querySelector('input[name="phone"]').value;
            const message = form.querySelector('textarea[name="message"]').value;
            const whatsappMessage = `Здравствуйте, пишу Вам с сайта fonmarket26%0AИмя: ${name}%0AТелефон: ${phone}%0AСообщение: ${message}`;
            const whatsappUrl = `https://wa.me/+79283217762?text=${whatsappMessage}`;
            window.open(whatsappUrl, '_blank');
        };
    }

    
    const serviceButtons = document.querySelectorAll('.service-btn');
    if (serviceButtons.length > 0) {
        serviceButtons.forEach(button => {
            button.addEventListener('click', () => {
                const service = button.getAttribute('data-service');
                const whatsappMessage = `Здравствуйте, пишу Вам с сайта fonmarket26%0AХочу заказать услугу: ${service}`;
                const whatsappUrl = `https://wa.me/+79283217762?text=${whatsappMessage}`;
                window.open(whatsappUrl, '_blank');
            });
        });
    }

    
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.onscroll = function () {
    
        if (window.innerWidth > 768) {
            let currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 600) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            lastScroll = currentScroll;
        }
    };

    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            header.classList.remove('hidden'); 
        }
    });

    
    const modal = document.getElementById('contact-modal');
    const openModalLinks = document.querySelectorAll('.open-modal');
    const closeModal = document.querySelector('.close-modal');

    if (!modal || !closeModal) {
        console.error('Modal or close button not found on the page!');
        return;
    }

    if (openModalLinks.length === 0) {
        console.error('No open-modal links found on the page!');
        return;
    }

    openModalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
