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
      <h1 class="text-3xl flex items-center text-[red] justify-center mt-15 font-bold">
        Uuljan
      </h1>
      <CategoryFood />
    </div>
  )
}

export default App
