import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
function Footer() {
  return (
    <div className="container mx-auto flex flex-col gap-y-14">
      <div className="flex md:flex-row md:justify-between flex-col gap-y-10 justify-center md:text-left text-center">
        <div className="flex flex-col gap-y-1 ">
          <div>Əlaqə</div>
          <div>+994 55 444 44 44</div>
          <div>forturaffle@gmail.com</div>
          <div className="flex flex-row gap-x-2 justify-center md:justify-start items-center">
            <div className="w-max h-max rounded-full p-2 border border-solid border-[#BCBCBC] hover:border-sky-500">
              <BsLinkedin className="text-[#bcbcbc] hover:text-sky-500"/>
            </div>
            <div className="w-max h-max rounded-full p-2 border border-solid border-[#BCBCBC]  hover:border-pink-500">
              <BsInstagram className="text-[#bcbcbc]  hover:text-pink-500"/>
            </div>
            <div className="w-max h-max rounded-full p-2 border border-solid border-[#BCBCBC]  hover:border-green-500">
              <BsWhatsapp className="text-[#bcbcbc] hover:text-green-500"/>
            </div>
            <div className="w-max h-max rounded-full p-2 border border-solid border-[#BCBCBC]  hover:border-blue-500">
              <BsTwitter className="text-[#bcbcbc] hover:text-blue-500"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
        <div>Haqqımızda</div>
        <div>Məhsullar</div>
        <div>Son qazananlar</div>
        <div>FAQ</div>
        </div> <div className="flex flex-col gap-y-1 justify-center items-center ">
        <div className='flex flex-row items-center'><img src='Assets/Home/Logo.png' className='w-12 h-11'/><div className='text-[#ED5C01] text-[40px] font-bold'>Forturaffle</div></div>
        <div className="text-xl font-medium">Biz sizin şansınıza güvənirik!</div>
        </div>
      </div>
      <div className="text-center  flex flex-col md:flex-row gap-x-4 items-center justify-center m-10 gap-y-8">
      <div className="flex flex-row gap-x-4">
      <div>İstifadə qaydaları</div>
        <div className="h-4 w-[1px] bg-black"></div>
        <div>Gizlilik Siyasəti</div>
        <div className="h-4 w-[1px] bg-black hidden md:inline"></div>
      </div>
       
        <div>2023 Forturaffle. Bütün hüquqlar qorunur.</div>
      </div>
    </div>
  );
}

export default Footer;
