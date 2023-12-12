import React from "react";
import zaraLogo from "../../../public/images/zara-logo.png";
import Flex from "../../components/Flex";

const Collection = () => {
  return (
    <div className="bg-collection bg-no-repeat bg-center bg-cover xl:px-28 px-4 my-20">
      <Flex className="h-[580px] justify-between md:flex-row items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src={zaraLogo} alt="zaraLogo" />
          <p className="text-lg text-white capitalize my-8 md:w-1/2 leading-[32px]">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="px-6 py-2 bg-white text-black rounded-sm font-semibold">See Collection</button>
        </div>
      </Flex>
    </div>
  );
};

export default Collection;
