import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Information() {
  return (
    <div className='container mx-auto mb-16'>
    <div className="text-left  font-semibold md:text-5xl text-2xl">Bizdən xəbərdar olun</div>
    <div className='flex md:flex-row items-center justify-between flex-col-reverse'>
    <div className='flex flex-col gap-y-8'>
      <div className='md:text-[32px] text-[#424242] font-thin text-lg text-center'>
      E-mail vasitəsilə abunə olaraq ən<br/> son yeniliklərdən ilk siz xəbərdar <br/>ola bilərsiniz!
      </div>
      <div>
       <input type='email' placeholder='E-mailinizi daxil edin' className='placeholder:p-2 placeholder:text-[#BCBCBC] placeholder:text-base border border-solid border-[#BCBCBC] rounded-md md:w-[393px w-[226px] h-12'/> <button disabled className='h-12 md:w-28 disabled:bg-[#FFDAC3] w-20 text-white rounded-lg'> Gonder</button>
      </div>
    </div>
    <div>
      <img src='Assets/Home/Information.png' className='w-[600px]'/>
    </div>
    </div>
    
    </div>
  )
}

export default Information