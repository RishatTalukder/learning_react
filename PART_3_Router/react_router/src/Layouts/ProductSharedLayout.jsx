import React from 'react'
import { Outlet } from 'react-router'

const ProductSharedLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ProductSharedLayout
