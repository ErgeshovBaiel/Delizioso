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
    <div className='text-center text-5xl mt-25 text-green-600 font-medium'>
      Hello World
    </div>
  )
}

export default App
