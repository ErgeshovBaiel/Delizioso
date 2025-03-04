import React, { useEffect } from 'react'
import { supabase } from './supabase'
import  Header  from './components/header/Header'

const App = () => {
  const getData = async () => {
    let { data: category, error } = await supabase.from('category').select('*')
    console.log(category);
    
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='flex items-center justify-center'>
      <Header />
    </div>
  )
}

export default App