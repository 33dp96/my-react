{/*
  ترکیب با کد App و TodoLists: یک اپ با React Router بسازید که صفحه Swiperslider داشته باشد. آرایه slides را با useState مدیریت کنید (مشترک بین صفحات). قابلیت افزودن، حذف، و ویرایش کارت اضافه کنید. از تمام ماژول‌های Swiper (Navigation, Pagination, Scrollbar, A11y, Autoplay) استفاده کنید. از map برای رندر استفاده کنید. در صفحه دیگر، فرم ویرایش نمایش دهید.  
*/}
import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// ... import استایل‌ها

function SliderPage({ slides, setSlides }) {
    const removeSlide = (index) => setSlides(slides.filter((_, i) => i !== index));

    return (
        <div className="container mb-5">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={10}
                autoplay={{ delay: 3000 }}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                allowTouchMove={false}
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="card h-100">
                            <h5>{item.title}</h5>
                            <h6>{item.description}</h6>
                            <p>{item.publish_date}</p>
                            <img src={`/assets/img/elements/${item.img}`} alt={item.title} />
                            <button onClick={() => removeSlide(index)}>حذف</button>
                            <Link to={`/edit/${index}`}>ویرایش</Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

function EditPage({ slides, setSlides }) {
    // منطق ویرایش با useState محلی برای فرم
    // ...
}

export default function App() {
    const [slides, setSlides] = useState([
        // آرایه اولیه
    ]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SliderPage slides={slides} setSlides={setSlides} />} />
                <Route path="/edit/:index" element={<EditPage slides={slides} setSlides={setSlides} />} />
            </Routes>
        </BrowserRouter>
    );
}