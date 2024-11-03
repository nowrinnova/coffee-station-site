import React from 'react'
import {  Link } from 'react-router-dom'

export default function Card({coffee}) {
  const{name,image,category,origin,type,rating}=coffee
  return (
    <Link to={`/coffee/${coffee.id}`} className='transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden'>
      <div className="card bg-base-100 w-80  mx-auto">
    <figure>
      <img className='h-[200px] p-4 w-full'
        src={image}
        alt="Shoes" />
    </figure>
    {/* <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div> */}
    <div className='md:px-5'>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className='py-2'>{category}</p>
      <div className='divider'></div>
      <tr>
        <td className=''>name</td>
        <td className='pl-12 py-2 font-bold'>{name}</td>
      </tr>
      <tr>
        <td className=''>category</td>
        <td className='pl-12 py-2 font-bold'>{category}</td>
      </tr>
      <tr>
        <td className=''>origin</td>
        <td className='pl-12 py-2 font-bold'>{origin}</td>
      </tr>
      <tr>
        <td className=''>Rating</td>
        <td className='pl-12 py-2 font-bold'>{rating}★</td>
      </tr>
    </div>
  </div></Link>
  )
}
