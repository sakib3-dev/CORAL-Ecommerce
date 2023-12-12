import React from "react";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex";
import insta1 from "../../../public/images/instagram/img1.png";
import insta2 from "../../../public/images/instagram/img2.png";
import insta3 from "../../../public/images/instagram/img3.png";
import insta4 from "../../../public/images/instagram/img4.png";
import insta5 from "../../../public/images/instagram/img5.png";
import insta6 from "../../../public/images/instagram/img6.png";

const NewsLetter = () => {
  return (
    <div className="bg-Black bg-opacity-5 xl:px-28 px-4  py-16">
      {/* heading  */}
      <h3 className="text-3xl font-semibold capitalize text-center my-8">
        Follow products and discounts on Instagram
      </h3>
      {/* heading  */}

      {/* insta grid  */}
      <Flex className="flex-wrap gap-4 items-center justify-center mb-20">
        <Link to="/">
          <img src={insta1} alt="insta1" />
        </Link>
        <Link to="/">
          <img src={insta2} alt="insta2" />
        </Link>
        <Link to="/">
          <img src={insta3} alt="insta3" />
        </Link>
        <Link to="/">
          <img src={insta4} alt="insta4" />
        </Link>
        <Link to="/">
          <img src={insta5} alt="insta5" />
        </Link>
        <Link to="/">
          <img src={insta6} alt="insta6" />
        </Link>
      </Flex>
      {/* insta grid  */}

      {/* news letter  */}
      <div className="">
        {/* From part  */}
        <h3 className="text-3xl font-semibold capitalize text-center my-8">
          Or subscribe to the newsletter
        </h3>
        <form className="md:w-1/2 mx-auto text-center">
          <input type="email" name="email" id="email" placeholder="Email Address" className="h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4" />
          <input type="submit" value={"submit"} className="bg-black text-white px-6 py-1 rounded-sm" />
        </form>
        {/* From part */}
      </div>
      {/* news letter  */}
    </div>
  );
};

export default NewsLetter;
