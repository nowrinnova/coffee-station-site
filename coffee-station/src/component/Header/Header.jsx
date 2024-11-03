import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Header.css'

export default function Header() {
  return (
    <div className="navbar  sticky top-0 z-10 backdrop-blur-xl bg-white/30">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Coffee-Station</a>
  </div>
  <div className="flex-none">
    <ul className="flex justify-center items-center gap-1 md:gap-3 font-semibold">
      <li ><NavLink to={'/'} className={({ isActive, isPending }) =>
                      isActive
                        ? "text-yellow-600"
                        : isPending
                        ? "pending"
                        : ""
                    }>Home</NavLink></li>
      <li>
        <NavLink to={'/coffee'} className={({ isActive, isPending }) =>
                      isActive
                        ? "text-yellow-600"
                        : isPending
                        ? "pending"
                        : ""
                    }>Coffee</NavLink>
      </li>
      <li>
        <NavLink to={'/dashBook'} className={({ isActive, isPending }) =>
                      isActive
                        ? "text-yellow-600"
                        : isPending
                        ? "pending"
                        : ""
                    }>DashBoard</NavLink>
      </li>
    </ul>
  </div>
</div>
  )
}
