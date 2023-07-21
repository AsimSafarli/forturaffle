import React from "react";
import BestProduct from "../../Components/Home/BestProduct/BestProduct";
import Categories from "../../Components/Home/Categories/Categories";
import Information from "../../Components/Home/Information/Information";
import Win from "../../Components/Home/Win/Win";
import Banner from "../../Components/Home/Banner/Banner";

function Home() {
  return (
    <div className='flex flex-col gap-y-[100px]'>
      <Banner />
      <BestProduct />
      <Categories />
      <Information />
      <Win/>
      
    </div>
  );
}

export default Home;
