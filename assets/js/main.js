/* Info Slider */
    let currentSlide = 0;
    const slides = document.querySelectorAll('.info-slide');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
    
        currentSlide = (index + slides.length) % slides.length;
    
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Manual Controls
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        resetTimer();
    });

    let slideTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 7000); // Auto change slide after 7 seconds

    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 7000);
    }

    // Dot Actions
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetTimer();
        });
    });

/* Contact Form */
    const contactForm = document.getElementById('tch-contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            alert("Cảm ơn bạn! Thông tin đã được gửi tới Nhà.");
        });

        contactForm.addEventListener('reset', function(e) {
            if (!confirm("Bạn có chắc chắn muốn xóa hết thông tin đã nhập?")) {
                e.preventDefault();
            }
        });
    }