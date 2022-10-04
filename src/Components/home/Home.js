import React from "react";

import { useSelector } from "react-redux";

// Slider
import SliderImage from "./sliderTopImges/SliderImage";

// Components
import ScrollDown from "../ScrollDown/ScrollDown";
import Categorys from "./categorys/Categorys";
import ProductsSlider from "./ProductsSlider/ProductsSlider";

// Redux
import { fetchLaptops } from "../../Redux/laptops/laptopsActions";
import { fetchShirts } from "../../Redux/shirts/shirtsAction";
import { fetchJewellery } from "../../Redux/jewellery/jewelleryActions";

const Home = () => {
  const laptopsData = useSelector((state) => state.laptopsState);
  const shirtsData = useSelector((state) => state.shirtsState);
  const jewelleryData = useSelector((state) => state.jewelleryState);

  return (
    <div>
      <SliderImage />
      <ScrollDown />
      <Categorys />
      <ProductsSlider
        FetchFunction={fetchLaptops}
        productsData={laptopsData}
        href="/laptops"
        title="Laptops"
        background="#1f2833"
      />
      <ProductsSlider
        FetchFunction={fetchShirts}
        productsData={shirtsData}
        href="/shirts"
        title="Shirts"
        background="#1f2833"
      />
      <ProductsSlider
        FetchFunction={fetchJewellery}
        productsData={jewelleryData}
        href="/jewellery"
        title="Jewellery"
        background="#1f2833"
      />
    </div>
  );
};

export default Home;
