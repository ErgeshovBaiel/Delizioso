import React, { useEffect } from 'react'
import { supabase } from './supabase'
import  Header  from './components/header/Header'
import Hero from './components/hero/Hero'

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
      <Header />
      <Hero />
    </div>
  )
}

export default App