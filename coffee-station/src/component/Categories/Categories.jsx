import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories({categories}) {
  return (
    <div  role="tablist" className="tabs tabs-lifted tabs-xs py-5">
      {
        categories.map(category=><NavLink to={`/category/${category.category}`} role="tab" className={({ isActive, isPending }) =>
          isActive
            ? "tab tab-active font-bold"
            : isPending
            ? "pending"
            : "tab "
        } key={category.category}>{category.category}</NavLink>)
      }
    </div>
  )
}
