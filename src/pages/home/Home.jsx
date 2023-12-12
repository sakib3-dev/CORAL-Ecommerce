import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";
import Collection from "./Collection";
import BestSeller from "./BestSeller";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <Products/>
      <Collection/>
      <BestSeller/>
      <NewsLetter/>
    </>
  );
};

export default Home;
