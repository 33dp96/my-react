import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
          <SwiperSlide>
            <div className="card mb-4">
              <img className="card-img-top" src="/assets/img/elements/5.jpg" alt="Card image cap"/>
                  <div className="card-body">
                      <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                      <p className="card-text">
                          Cookie topping caramels jujubes gingerbread. Lollipop apple pie cupcake candy canes cookie ice
                          cream. Wafer chocolate bar carrot cake jelly-o.
                      </p>
                  </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mb-4">
              <img className="card-img-top" src="/assets/img/elements/5.jpg" alt="Card image cap"/>
                  <div className="card-body">
                      <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                      <p className="card-text">
                          Cookie topping caramels jujubes gingerbread. Lollipop apple pie cupcake candy canes cookie ice
                          cream. Wafer chocolate bar carrot cake jelly-o.
                      </p>
                  </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mb-4">
              <img className="card-img-top" src="/assets/img/elements/5.jpg" alt="Card image cap"/>
                  <div className="card-body">
                      <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                      <p className="card-text">
                          Cookie topping caramels jujubes gingerbread. Lollipop apple pie cupcake candy canes cookie ice
                          cream. Wafer chocolate bar carrot cake jelly-o.
                      </p>
                  </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mb-4">
              <img className="card-img-top" src="/assets/img/elements/5.jpg" alt="Card image cap"/>
                  <div className="card-body">
                      <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                      <p className="card-text">
                          Cookie topping caramels jujubes gingerbread. Lollipop apple pie cupcake candy canes cookie ice
                          cream. Wafer chocolate bar carrot cake jelly-o.
                      </p>
                  </div>
          </div>
          </SwiperSlide>
      ...
    </Swiper>
  );
};