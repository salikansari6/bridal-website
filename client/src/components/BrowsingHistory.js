import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/BrowsingHistory.scss";
import { Link } from "react-router-dom";
import Product from "./Product";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import Aos from "aos";
import "aos/dist/aos.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const BrowsingHistory = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const history = useSelector((state) => state.historyItems);

  const renderHistoryItems = history.map((product) => {
    return (
      <SwiperSlide>
        <Link to={`/product/${product.id}`}>
          <Product
            productDescription={product}
            imageURL={product.imageURL[0]}
          />
        </Link>
      </SwiperSlide>
    );
  });

  return (
    <div className="browsing-history" data-aos="fade-down">
      <h1 className="browsing-history__title">Your browsing history</h1>
      <Swiper
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
        }}
        spaceBetween={80}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {renderHistoryItems}
      </Swiper>
    </div>
  );
};

export default BrowsingHistory;
