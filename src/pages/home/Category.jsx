import React from "react";
import Flex from "../../components/Flex";
import { Link } from "react-router-dom";
import image1 from "../../../public/images/category/image1.png"
import image2 from "../../../public/images/category/image2.png"
import image3 from "../../../public/images/category/image3.png"
import image4 from "../../../public/images/category/image4.png"
import image5 from "../../../public/images/category/image5.png"
import brand1 from "../../../public/images/company/brand1.png"
import brand2 from "../../../public/images/company/brand2.png"
import brand3 from "../../../public/images/company/brand3.png"
import brand4 from "../../../public/images/company/brand4.png"
import brand5 from "../../../public/images/company/brand5.png"

const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 py-28">
      {/* brand logo */}
      <Flex className="items-center justify-around flex-wrap gap-4 py-5">
        
          <div>
            <img src={brand1} alt="brand" />
          </div>
          <div>
            <img src={brand2} alt="brand" />
          </div>
          <div>
            <img src={brand3} alt="brand" />
          </div>
          <div>
            <img src={brand4} alt="brand" />
          </div>
          <div>
            <img src={brand5} alt="brand" />
          </div>
        
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
            <img src={image1} alt="model" className="w-full hover:scale-105 transition-all duration-300" />
          </Link>
        </div>

        {/* main model */}

        {/* product  */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img src={image2} alt="model" className="w-full hover:scale-105 transition-all duration-300"/>
            </Link>
            <Link to="/">
              <img src={image3} alt="model" className="w-full hover:scale-105 transition-all duration-300"/>
            </Link>
            <Link to="/">
              <img src={image4} alt="model" className="w-full hover:scale-105 transition-all duration-300"/>
            </Link>
            <Link to="/">
              <img src={image5} alt="model" className="w-full hover:scale-105 transition-all duration-300"/>
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
