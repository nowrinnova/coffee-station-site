import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='max-w-6xl mx-auto'>
      <Header></Header>
      <div className='min-h-screen'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}
