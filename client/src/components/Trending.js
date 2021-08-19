import React, { useEffect } from "react";
import "../styles/Trending.scss";
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

const trendingProducts = [
  {
    id: 1,
    name: "Bridal lehengas",
    imageURL:
      "https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/9/1979lg18-n225-a.jpg",
  },
  {
    id: 2,
    name: "Bridal Sarees",
    imageURL:
      "https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/5/2546sr07-135131.jpg",
  },
  {
    id: 3,
    name: "Bridal salwar suits",
    imageURL:
      "https://5.imimg.com/data5/LY/GA/QG/SELLER-69648276/wedding-salwar-suits-500x500.jpg",
  },
  {
    id: 4,
    name: "Bridal anarkali suits",
    imageURL:
      "https://i.pinimg.com/236x/d2/4d/cf/d24dcfd11dc2591eedeb7ef586f1ce7a.jpg",
  },
];

const renderTrendingCategory = trendingProducts.map((product) => {
  return (
    <SwiperSlide>
      <Product
        productDescription={product}
        imageURL={product.imageURL}
      ></Product>
    </SwiperSlide>
  );
});

const Trending = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="trending" data-aos="fade-up">
      <p className="trending__title">Go with the Trend</p>
      {/* <div className="trending__product-list">    */}
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
        {renderTrendingCategory}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default Trending;
