
import React from 'react'
import CategoryFood from '../../components/category/CategoryFood'
import Cart from '../../components/Cart/Cart'

const Order = () => {
  return (
    <div className='flex relative app-container'>
       <CategoryFood/>
       <Cart/>
    </div>
  )
}

export default Order