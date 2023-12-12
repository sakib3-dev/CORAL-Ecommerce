import React, { useEffect, useState } from "react";
import Flex from "../../components/Flex";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/layout/Cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(["all"]);
  const [sortOption, setSortOption] = useState(["default"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching Data:", error);
      }
    };
    fetchData();
  }, []);

  // console.log(products)

  // filtering function
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };
  // filtering function

  // show all products
  const showAll = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
  };
  // show all products

  // sorting functionality
  const handleSortChange = (option) => {
    setSortOption(option);

    // logic for sorting
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }
    // logic for sorting

    setFilteredItems(sortedItems);
  };

  // sorting functionality

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      {/* heading  */}
      <h3 className="text-3xl font-semibold capitalize text-center my-8">
        Or subscribe to the newsletter
      </h3>
      {/* heading  */}

      {/* products cards  */}
      <div className="">
        <Flex className="flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* all button  */}
          <Flex className="flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItems("Dress")}>Clothing</button>
            <button onClick={() => filterItems("Hoodies")}>Hoodies</button>
            <button onClick={() => filterItems("Bag")}>Bag</button>
          </Flex>
          {/* all button  */}

          {/* sorting option  */}
          <Flex className="justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>

            {/* short selecting */}
            <select 
            id="sort" onChange={(e) => handleSortChange(e.target.value)}
            value={sortOption}
            className="bg-black text-white px-2 py-1 rounded-sm">
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">low-to-high</option>
              <option value="high-to-low">high-to-low</option>
            </select>
            {/* short selecting */}
          </Flex>
          {/* sorting option  */}
        </Flex>

        <Cards filteredItems={filteredItems} />
      </div>
      {/* products cards  */}
    </div>
  );
};

export default Products;
