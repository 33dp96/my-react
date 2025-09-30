{/*
سؤال: ترکیب کد Swiperslider با TodoLists: آرایه slides را با useState مدیریت کنید. از map برای رندر استفاده کنید. قابلیت حذف کارت اضافه کنید. ماژول‌های Navigation، Pagination، Scrollbar، A11y، و Autoplay را فعال کنید. اگر slides خالی شد، پیام نمایش دهید.
*/}
import { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function MediumSlider() {
    const [slides, setSlides] = useState([
        // آرایه اولیه
    ]);

    const removeSlide = (index) => {
        setSlides(slides.filter((_, i) => i !== index));
    };

    return (
        <div className="container mb-5">
            {slides.length === 0 ? (
                <p>هیچ اسلایدی وجود ندارد!</p>
            ) : (
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    autoplay={{ delay: 3000 }}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {slides.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5>{item.title}</h5>
                                    <h6>{item.description}</h6>
                                    <p>{item.publish_date}</p>
                                </div>
                                <img src={`/assets/img/elements/${item.img}`} alt={item.title} />
                                <button onClick={() => removeSlide(index)}>حذف</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}