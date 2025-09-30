{/*
سؤال: یک کامپوننت بسازید که آرایه slides (مشابه کد Swiperslider) را با useState مدیریت کند. از map برای رندر کارت‌ها در Swiper استفاده کنید. ماژول‌های Navigation، Pagination، و A11y را فعال کنید. امکان افزودن یک کارت جدید از طریق فرم ساده فراهم کنید.
*/}
import { useState } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SimpleSlider() {
    const [slides, setSlides] = useState([
        // آرایه اولیه مشابه کد شما
        { title: 'Card title', description: '...', img: '11.jpg', publish_date: 'Last updated 3 mins ago' },
        // ...
    ]);
    const [newTitle, setNewTitle] = useState('');

    const addSlide = () => {
        if (!newTitle) return;
        setSlides([...slides, { title: newTitle, description: 'New description', img: 'default.jpg', publish_date: 'Now' }]);
        setNewTitle('');
    };

    return (
        <div className="container mb-5">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h6 className="card-subtitle text-muted">{item.description}</h6>
                                <p>{item.publish_date}</p>
                            </div>
                            <img src={`/assets/img/elements/${item.img}`} alt={item.title} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="عنوان جدید" />
            <button onClick={addSlide}>افزودن</button>
        </div>
    );
}