import React from 'react'
import { createProduct } from './action'

const AddProductpage = () => {
  return (
    <div className='h-dvh bg-slate-50 content-center'>
      <form className="space-y-6 px-4 max-w-sm mx-auto font-[sans-serif]" action={createProduct} >
  <div className="flex items-center">
    <label className="text-black w-36 text-sm">Name</label>
    <input
      type="text"
      name='Name'
      placeholder="Enter your name"
      className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white"
    />
  </div>
  <div className="flex items-center">
    <label className="text-black w-36 text-sm">Description</label>
    <input
      type="text"
      name='Description'
      placeholder="Enter your Description"
      className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white"
    />
  </div>
  <div className="flex items-center">
    <label className="text-black w-36 text-sm">price</label>
    <input
      type="number"
      name='Price'
      placeholder="Enter your price"
      className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white"
    />
  </div>
  <button
    type="submit"
    className="!mt-8 px-6 py-2 w-full bg-[#333] hover:bg-[#444] text-sm text-white mx-auto block"
  >
    Submit
  </button>
</form>

    </div>
  )
}

export default AddProductpage
