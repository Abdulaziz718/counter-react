import React from 'react'

const SecondSection = () => {
  return (
    <>
        <div className="flex flex-col lg:flex-row justify-between items-center px-8 md:px-10 lg:px-[110px] mt-[100px] mb-10">
            <div className='flex flex-col gap-4'>
                <h1 className='text-4xl font-bold'>Domen nomingizni qidiring</h1>
                <p className='text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
            <div className='radius bg-purple-600 px-5 py-5 lg:px-20 lg:py-10 lg:mt-0 mt-10'>
                <div className='flex'>
                    <input type="text" className='py-3 outline-none left-radius lg:w-[400px] px-3 text-black placeholder:text-black' placeholder='Domenni kiriting'/>
                    <select name=".com" id="" className='outline-none'>
                        <option >.com</option>
                        <option value=".uz">.uz</option>
                        <option value=".biz">.biz</option>
                    </select>
                    <button className='px-14 bg-red-400 text-white radius-right'>Button</button>
                </div>
                <div className='mt-5 flex justify-center items-center gap-9'>
                    <h1 className='border border-white text-white rounded-3xl px-2 py-1'>.com 9.75$</h1>
                    <h1 className='border border-white text-white rounded-3xl px-2 py-1'>.net 9.50$</h1>
                    <h1 className='border border-white text-white rounded-3xl px-2 py-1'>.biz 8.95$</h1>
                    <h1 className='border border-white text-white rounded-3xl px-2 py-1'>.uz 7.80$</h1>
                    <h1 className='border border-white text-white rounded-3xl px-2 py-1'>.org 7.95$</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default SecondSection