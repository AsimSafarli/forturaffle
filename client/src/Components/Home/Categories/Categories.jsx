import React from "react";
import categories from "../../../Data/categories.json";
import {AiOutlineArrowRight} from 'react-icons/ai'
function Categories() {
  return (
    <div className="container mx-auto">
    <div className="text-left font-semibold text-4xl mb-10">Kateqoriyalar</div>
      <div className="flex flex-row justify-between">
        {categories.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center shadow-md p-5 gap-y-4"
          >
            <div>
              <img src={item.image} />
            </div>
            <div className="text-3xl font-semibold ">{item.title}</div>
            <div className="flex flex-row items-center justify-center  gap-x-2  w-80 text-[#ed5c01] border border-solid border-[#ed5c01] p-3 rounded-lg bg-transparent hover:text-white hover:bg-[#ed5c01]">
              <div>Mehsullara Bax</div>
              <div>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10"> 

      <button className="p-2 rounded-lg w-48 bg-[#ED5C01] text-center  text-white hover:text-[#ed5c01] hover:border hover:border-solid hover:border-[#ed5c01] hover:bg-transparent flex flex-row items-center gap-x-3 justify-center ">
      <div>Bütün məhsullar</div>
              <div>
                <AiOutlineArrowRight />
              </div> 
          </button>
          </div>
    </div>
  );
}

export default Categories;
