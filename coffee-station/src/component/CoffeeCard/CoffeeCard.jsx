import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Card from './Card'

export default function CoffeeCard() {
  const coffees= useLoaderData()
  console.log(coffees)
  const {category}=useParams()
 
  console.log(category)
  const[coffee,setCoffee]=useState([])
  useEffect(()=>{
    if(category){
      const filterData=[...coffees].filter(coffee=>coffee.category===category)
    console.log(`filter data`,filterData)
    setCoffee(filterData)
    }
    else{
      setCoffee(coffees)
    }
  },[category,coffees])
  return (
    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
      {
        [...coffee].map(coffee=><Card coffee={coffee}></Card>)
      }
    </div>
  )
}
