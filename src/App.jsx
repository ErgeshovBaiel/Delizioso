import CategoryFood from './category/CategoryFood'
import React, { useEffect } from 'react'
import { supabase } from './supabase'

const App = () => {
  const getData = async () => {
    let { data: category, error } = await supabase.from('category').select('*')
    console.log(category);

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <CategoryFood />
    </div>
  )
}

export default App