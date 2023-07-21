import React from 'react'
import win from '../../../Data/win.json'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Win() {
  return (
    <div className='container mx-auto'>
    <div className="text-left font-semibold text-4xl mb-10">Ən son qazananlar</div>
      <div className='flex md:flex-row items-center justify-between gap-x-10 flex-col gap-y-10'>
        {
          win.map((item)=>(
            <div key={item.id} className='flex md:flex-row flex-col p-3 items-center shadow-md justify-center md:w-1/2 w-11/12  '>
             <div> <img src={item.image}/></div>
             <div className='flex flex-col gap-y-3'>
              <div className='text-lg font-semibold'>{item.title}</div>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-neutral-400 font-medium text-base'>Məhsulun dəyəri:</div>
                <div className='text-black font-semibold text-base'>{item.price} AZN</div>
              </div>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-neutral-400'>Qazanan:</div>
                <div>{item.fullname}</div>
              </div> <div className='flex flex-row items-center gap-x-2'>
                <div className='text-neutral-400'>Tarix:</div>
                <div>{item.date}</div>
              </div>
             </div>
            </div>
          ))
        }
      </div>
      <div className="flex items-center justify-center mt-10"> 

      <button className="p-2 rounded-lg w-48 bg-[#ED5C01] text-center  text-white hover:text-[#ed5c01] hover:border hover:border-solid hover:border-[#ed5c01] hover:bg-transparent flex flex-row items-center gap-x-3 justify-center ">
      <div>Hamisina Bax</div>
              <div>
                <AiOutlineArrowRight />
              </div> 
          </button>
          </div>
    </div>
  )
}

export default Win