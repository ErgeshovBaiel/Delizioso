import React from 'react'
import Hero from '../../components/hero/Hero'
import Food from '../../components/food/Food'
import Table from '../../components/table/Table'
import Open from '../../components/open/Open'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Food />
      <Table />
      <Open />
    </div>
  )
}

export default HomePage