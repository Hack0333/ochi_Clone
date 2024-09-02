import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full  bg-[#004d43] py-20 font-["Founders_Grotesk"] font-medium rounded-t-2xl overflow-hidden '>
      <div className='border-t-[1px] border-b-[1px] border-zinc-300 w-full uppercase flex whitespace-nowrap gap-10 '>
        <h1 className='text-[26vw] leading-[17rem] -tracking-[1rem] -mt-6 mb-2'>We are ochi</h1>
        <h1 className='text-[26vw] leading-[17rem] -tracking-[1rem] -mt-6 mb-2'>We are ochi</h1>
      </div>
    </div>
  )
}

export default Marquee