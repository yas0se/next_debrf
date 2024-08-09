'use client'

import React, { useEffect, useState } from 'react'
import { getProduct, deleteProduct } from '../add_product/action';

const Productpage = () => {
  const [products,setProducts]=useState([]);

    useEffect(() => {
      getProduct().then((data: any) => {
        setProducts(data)
    })
    }, []);
  return (
    <div>
      <div className="font-sans overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-100 whitespace-nowrap">
      <tr>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
          description
        </th>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
prix        </th>
        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
action        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
      {products.map((product: any) => {
        return (
      <tr key={product.id}>
        <td className="px-4 py-4 text-sm text-gray-800">{product.name}</td>
        <td className="px-4 py-4 text-sm text-gray-800">{product.description}</td>
        <td className="px-4 py-4 text-sm text-gray-800">{product.price}</td>
        <td className="px-4 py-4 text-sm text-gray-800">
          <button className="text-red-600" onClick={() => deleteProduct(product.id)}>Delete</button>
        </td>
      </tr> )
      } )}

    </tbody>
  </table>
</div>

    </div>
  )
}

export default Productpage
