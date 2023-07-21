import React from 'react'
import product from '../../../Data/product.json'
import { Progress } from 'antd';
import {IoTicketOutline} from 'react-icons/io5'
import {MdFavorite} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'

function BestProduct() {
  return (
    <div className='container mx-auto flex flex-col gap-y-8'>
    <div className='text-left text-2xl font-semibold'>
    Top məhsullar
    </div>
    <div className='flex flex-row flex-wrap justify-between'>
    {
      product.map((item)=>(
        <div key={item.id} className='bg-white shadow-lg rounded-lg w-[288px] flex flex-col '>
          <div className='flex  items-center justify-center'><img src={item.image} className='w-52 m-3 '/></div>
          <div className='p-3 flex flex-col gap-y-1'>
          <div className='font-medium text-lg'>{item.title}</div>
          <div className='flex flex-row items-center gap-x-3'><IoTicketOutline className='w-6 h-6'/><div className='text-base font-semibold'>{item.price}</div></div>
          <div className=' flex flex-row items-center '><Progress percent={item.percent} strokeColor="#224453"/></div>
          <div className=' flex flex-row items-center gap-x-3'><div className='w-12 h-12 border border-solid border-[#ABABAB] flex items-center justify-center rounded-xl'><MdFavorite className='text-[#ababab] w-6 h-6 hover:text-[#ED5C01] '/></div><div className='h-12 w-[211px] bg-[#ED5C01] flex items-center justify-center rounded-lg text-white hover:text-[#ed5c01] hover:border hover:border-solid hover:border-[#ed5c01] hover:bg-transparent'>Sebete elave et</div></div>
        
          </div>
         </div>
      ))
    }
    </div>
    <div className='flex  items-center justify-center mt-2'>

      <button className='flex flex-row items-center justify-center gap-x-2 text-[#ed5c01] border border-solid border-[#ed5c01] p-3 rounded-lg bg-transparent hover:text-white hover:bg-[#ed5c01]'>Daha çox məhsul<AiOutlineArrowRight/></button>
    </div>
   
    </div>
  )
}

export default BestProduct