import React from 'react'
import Hero from '../../components/hero/Hero'
import Food from '../../components/food/Food'
import Table from '../../components/table/Table'
import Open from '../../components/open/Open'
import Popular from '../../components/popular/Popular'

const HomePage = () => {
  return (
    <div className='app-container'>
      <Hero />
      <Food />
      <Popular />
      <Table />
      <Open />
      <img src="" alt="" />
    </div>
  )
}

export default HomePage