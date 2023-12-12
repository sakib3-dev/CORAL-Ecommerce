import React from "react";
import Flex from "../../components/Flex";
import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "../../../public/images/banner.png"

const Banner = () => {
  return (
    <div className="max-w-screen-2xl xl:mx-auto bg-primaryBG py-12 xl:px-28 px-4">
      <Flex className="py-28 flex-col md:flex-row-reverse justify-between items-center gap-14">
      <div className="md:w-1/2">
        <img src={bannerImg} alt="bannerImg" />
      </div>

        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            You can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className="bg-Black hover:bg-slate-400 px-6 py-2 text-white font-semibold rounded-sm">
            <Flex className="items-center gap-2">
            <FaShoppingBag />
            Shop Now
            </Flex>
          </button>
        </div>
      </Flex>
    </div>
  );
};

export default Banner;
