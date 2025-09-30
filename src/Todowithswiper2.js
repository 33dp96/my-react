import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TodoSlider() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todoes, setTodoes] = useState([
        { id: 1, title: "تماشای فیلم", description: "فیلم ارباب حلقه‌ها" },
        { id: 2, title: "تمرین ری‌اکت", description: "مرور جلسات گذشته" },
    ]);

    const save = (event) => {
        event.preventDefault();
        if (!title || !description) return;
        setTodoes([...todoes, { id: Date.now(), title, description }]);
        setTitle("");
        setDescription("");
    };

    const removeTodo = (id) => {
        setTodoes(todoes.filter((item) => item.id !== id));
    };

    return (
        <div className="container" style={{ padding: "20px" }}>
            <h2>لیست کارها در اسلایدر</h2>
            {todoes.length === 0 ? (
                <p>هیچ کاری وجود ندارد!</p>
            ) : (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                >
                    {todoes.map((item, index) => (
                        <SwiperSlide key={item.id || index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <button onClick={() => removeTodo(item.id)}>حذف</button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            <div style={{ marginTop: "20px" }}>
                <h3>ایجاد تسک جدید</h3>
                <form onSubmit={save}>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="عنوان"
                    />
                    <br />
                    <textarea
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder="توضیحات"
                    />
                    <br />
                    <button type="submit">ثبت</button>
                </form>
            </div>
        </div>
    );
}