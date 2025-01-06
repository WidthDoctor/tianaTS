import React, { useEffect, useRef } from 'react';
import './Slider.css';

function shuffleArray<T>(array: T[]): T[] {
    return array
        .map((item) => ({ item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ item }) => item);
}

const Slider: React.FC = () => {
    const images = useRef<string[]>([]);
    const sliderRef = useRef<HTMLDivElement>(null);
    const slidesToShow = useRef(4); // Количество видимых слайдов
    const totalSlides = 5; // Всегда отображаем на 1 больше видимого
    const currentIndex = useRef(0);

    // Импорт изображений
    useEffect(() => {
        const importImages = async () => {
            const imageModules = import.meta.glob('../../assets/sliderImages/*.{png,jpg,jpeg,svg}');
            const imagePaths = await Promise.all(
                Object.keys(imageModules).map(async (key) => {
                    const module = await imageModules[key]();
                    return (module as { default: string }).default;
                })
            );
            images.current = shuffleArray(imagePaths);
            initializeSlider();
        };

        importImages();
    }, []);

    // Инициализация слайдера
    const initializeSlider = () => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            slider.innerHTML = ''; // Очищаем контейнер

            const initialSlides = [];
            for (let i = 0; i < totalSlides; i++) {
                const imgIndex = (currentIndex.current + i) % images.current.length;
                initialSlides.push(createSlide(images.current[imgIndex]));
            }

            initialSlides.forEach((slide) => slider.appendChild(slide));
        }
    };

    // Создание нового слайда
    const createSlide = (src: string): HTMLDivElement => {
        const slide = document.createElement('div');
        slide.className = 'slider-item';
        slide.style.flex = `0 0 ${101 / slidesToShow.current}%`;

        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Slide';

        slide.appendChild(img);
        return slide;
    };

    // Прокрутка
    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                const slider = sliderRef.current;

                // Сдвиг к следующему слайду
                slider.style.transition = 'transform 0.5s ease';
                slider.style.transform = `translateX(-${101 / slidesToShow.current}%)`;

                // После завершения анимации
                setTimeout(() => {
                    slider.style.transition = 'none'; // Убираем анимацию
                    slider.style.transform = `translateX(0)`; // Сбрасываем положение

                    // Удаляем первый слайд и добавляем новый в конец
                    const firstSlide = slider.firstChild as HTMLElement;
                    if (firstSlide) slider.removeChild(firstSlide);

                    const nextIndex = (currentIndex.current + totalSlides) % images.current.length;
                    const newSlide = createSlide(images.current[nextIndex]);
                    slider.appendChild(newSlide);

                    // Обновляем текущий индекс
                    currentIndex.current = (currentIndex.current + 1) % images.current.length;
                }, 500);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Обновление количества видимых слайдов
    useEffect(() => {
        const updateSlidesToShow = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                slidesToShow.current = 4;
            } else if (width >= 768) {
                slidesToShow.current = 3;
            } else {
                slidesToShow.current = 2;
            }
            initializeSlider();
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);

        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    return (
        <section className="individual">
            <h3>Индивидуальный пошив</h3>
            <span>
                Только реальные невесты в <a href="#">галерее</a>
            </span>
            <div className="slider-wrapper">
                <div ref={sliderRef} className="slider-container"></div>
            </div>
        </section>
    );
};

export default Slider;
