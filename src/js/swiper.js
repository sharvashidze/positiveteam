var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Динамические буллеты
        dynamicBullets:true,
        // Автопрокрутка
        autoplay: {
            // Пауза между прокруткой
            delay: 3500,
            // Закончить на последнем слайде
            stopOnLastSlide: false,
            // Отключение после ручного переключения
            disableOnInteraction: false,
        },
        // Скорость прокрутки
        speed: 800,
        // Бесконечный слайдер
        loop: true
    });