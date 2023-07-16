import React from "react";
import "./Home.css";
import Fortune from "../../Components/HomePage/Fortune/Fortune";
import TopProductsCards from "../../Components/HomePage/TopProducts/TopProducts";
import Categories from "../../Components/HomePage/Categories/Categories";
import LatestWinners from "../../Components/HomePage/LatestWinners/LatestWinners";
import InformationChat from "../../Components/HomePage/InformationChat/InformationChat";

function Home() {
  return (
    <>
      <Fortune />
      <TopProductsCards />
      <Categories />
      <LatestWinners />
      <InformationChat/>
    </>
  );
}

export default Home;
