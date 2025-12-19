function scrollCarousel(direction) {
            const carousel = document.querySelector('.reviews-carousel');
            const cardWidth = 280 + 20; // width + gap
            carousel.scrollLeft += direction * cardWidth;
        }