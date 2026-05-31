
   // Carousel Logic 

        const track = document.getElementById('track');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentIndex = 0;
        
        function updateCarousel() {
            const width = document.querySelector('.character-card').clientWidth;
            track.style.transform = `translateX(-${currentIndex * width}px)`;
        }

        nextBtn.addEventListener('click', () => {
            const cards = document.querySelectorAll('.character-card');
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                updateCarousel();
            } else {
                currentIndex = 0; // loop back
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            const cards = document.querySelectorAll('.character-card');
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            } else {
                currentIndex = cards.length - 1; // loop to end
                updateCarousel();
            }
        });

        // Recalculate on resize
        window.addEventListener('resize', updateCarousel);
    