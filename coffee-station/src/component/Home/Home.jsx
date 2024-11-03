import React from 'react'
import Banner from '../Banner/Banner'
import { Outlet, useLoaderData } from 'react-router-dom'
import Categories from '../Categories/Categories'

export default function Home() {
  const data=useLoaderData()
  return (
    <div>
      {/* Banner section */}
      <Banner></Banner>

      {/* Coffee heading */}
      <div className='container mx-auto py-10 text-center'>
        <h1 className='text-4xl font-thin py-5'>Browse Coffees by Category</h1>
        <p className='text-sm text-gray-500'>Choose your desired coffee category to Browse through specific coffees that fit in your taste</p>
      </div>

      {/* Category Tab section */}
      <Categories categories={data}></Categories>
      {/* Dynamic nested route */}

      <Outlet></Outlet>
    </div>
  )
}
