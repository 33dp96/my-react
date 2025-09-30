import { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Mediumlist() {
    const [lists, setLists] = useState([
        {
                id: 1,
                title: 'تماشای فیلم',
                description: 'فیلم ارباب حلقه ها'
        },
    
        {
                id: 2,
                title: 'تمرین ری اکت',
                description: 'مرور جلسات گذشته'
        }
        ])
    // const [lists, setLists] = useState([
    //     {
    //         عنوان: "1.jpg",
    //         قیمت: "توضیحات مربوط به اسلاید اول",
    //         توزیع: "1404/07/05",
    //     },
    //     {
    //         عنوان: "2.jpg",
    //         قیمت: "توضیحات مربوط به اسلاید دوم",
    //         توزیع: "1404/07/06",
    //     },
    //     {
    //         عنوان: "3.jpg",
    //         قیمت: "توضیحات مربوط به اسلاید سوم",
    //         توزیع: "1404/07/07",
    //     },
    // ]);

    const delItem = (index) => {
        setLists(lists.filter((_, i) => i !== index));
    };
    // const editItem = (index) => {
    //     setLists(lists.filter((_, i) => i !== index));
    // };
    const seeItem = (index) => {
        setLists(lists.filter((_, i) => i !== index));
    };
    // const addSlide = () => {
    //     const newSlide = {
    //         title: `اسلاید ${items.length + 1}`,
    //         description: `توضیحات مربوط به اسلاید ${items.length + 1}`,
    //         publish_date: "1404/07/09",
    //         img: `slide${items.length + 1}.jpg`
    //     };
    //     setItems([...items, newSlide]);
    // };
    const editItem = () => {
        const editItem = {
            title: `اسلاید ${items.length + 1}`,
            description: `توضیحات مربوط به اسلاید ${items.length + 1}`,
            publish_date: "1404/07/09",
            img: `slide${items.length + 1}.jpg`
        };
        se([...items, newSlide]);
    };

    const seeItems = () => {
        const seeItems = {
            title: `اسلاید ${items.length + 1}`,
            description: `توضیحات مربوط به اسلاید ${items.length + 1}`,
            publish_date: "1404/07/09",
            img: `slide${items.length + 1}.jpg`
        };
        seeItems([...items, newSlide]);
    };

    return (
        <div className="container mb-5">
            <button className="btn btn-primary mb-3" onClick={addSlide}>+</button>
            <button className="btn btn-primary mb-3" onClick={delSlide}>-</button>
            <button className="btn btn-primary mb-3" onClick={editSlide}>/</button>
            {lists.length === 0 ? (
                <p>هیچ اسلایدی وجود ندارد!</p>
            ) : (
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    autoplay={{ delay: 3000 }}
                    itemsPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5>{item.title}</h5>
                                    <h6>{item.description}</h6>
                                    <p>{item.publish_date}</p>
                                </div>
                                <img src={"/assets/img/elements/" + item.img} alt={item.title} />
                                <button onClick={() => removeItems(index)}>-</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}