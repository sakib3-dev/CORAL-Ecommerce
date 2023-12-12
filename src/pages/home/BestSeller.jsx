import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Flex from '../../components/Flex';

const BestSeller = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch("products.json").then(res => res.json()).then(data => setProducts(data))
    }, [])

    const bestSellers = products.filter((item) => item.status === "Best Selers")
    // console.log(bestSellers)
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      {/* heading part  */}
      <div className="text-center">
        <h3 className="text-3xl font-semibold capitalize text-center my-8">
          Best sellers
        </h3>
        <p className="text-black/75 capitalize md:w-2/3 mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
          nunc, fermentum quis sapien in, placerat scelerisque risus. Class
          aptent taciti sociosqu ad litora torquent per
        </p>
      </div>
      {/* heading part  */}

      {/* slider part  */}
      <div className="mb-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            bestSellers.map((product) => (
                <SwiperSlide key={product.id}>
                    <Link to={`/shop/${product.id}`}>
                        <img src={product.image} alt="image" className="mx-auto w-full hover:scale-105 transition-all duration-300" />
                    </Link>
                    <div className="mt-4 px-4">
                        <h3 className="text-base font-semibold mb-2">{product.title}</h3>

                        <Flex className="justify-between">
                            <p className="text-black/50">{product.category}</p>
                            <p className="font-semibold">${product.price}</p>
                        </Flex>
                    </div>
                </SwiperSlide>
            ))
          }
          
        </Swiper>
      </div>
      {/* slider part  */}
    </div>
  );
};

export default BestSeller;
