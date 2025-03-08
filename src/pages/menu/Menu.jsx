import React from 'react'
import CategoryFood from '../../components/category/CategoryFood'
import CategoryButton from '../../components/CategoryButton/CategoryButton'

const Menu = () => {
  return (
    <div className='app-container'>
      <CategoryFood />
      <CategoryButton />
    </div>
  )
}

export default Menu