import React from "react";
import Flex from "../../components/Flex";
import { Link } from "react-router-dom";

const Category = () => {
  const companyLogo = [
    { id: 1, img: "/public/images/company/brand1.png" },
    { id: 2, img: "/public/images/company/brand2.png" },
    { id: 3, img: "/public/images/company/brand3.png" },
    { id: 4, img: "/public/images/company/brand4.png" },
    { id: 5, img: "/public/images/company/brand5.png" },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 py-28">
      {/* brand logo */}
      <Flex className="items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="brand" />
          </div>
        ))}
      </Flex>
      {/* brand logo */}

      {/* Category grid  */}
      <Flex className="mt-8 flex-col md:flex-row items-center gap-4">
        {/* heading  */}
        <p className="font-semibold uppercase md:-rotate-90 text-center text-black md:p-1.5 p-2 inline-flex">
          Explore new and popular styles
        </p>
        {/* heading  */}

        {/* main model */}

        <div>
          <Link to="/">
            <img src="/public/images/category/image1.png" alt="model" className="w-full hover:scale-105 transition-all duration-300" />
          </Link>
        </div>

        {/* main model */}

        {/* product  */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img src="/public/images/category/image2.png" alt="model" className="w-full hover:scale-105 transition-all duration-300"/>
            </Link>
            <Link to="/">
              <img src="/public/images/category/image3.png" alt="model" className="w-full hover:scale-105 transition-all duration-300"/>
            </Link>
            <Link to="/">
              <img src="/public/images/category/image4.png" alt="model" className="w-full hover:scale-105 transition-all duration-300"/>
            </Link>
            <Link to="/">
              <img src="/public/images/category/image5.png" alt="model" className="w-full hover:scale-105 transition-all duration-300"/>
            </Link>
          </div>
        </div>
        {/* product  */}
      </Flex>
      {/* Category grid  */}
    </div>
  );
};

export default Category;
