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
      <img
        src='https://drive.google.com/file/d/103iL6RPrqReDP6KoIn8iTxBKtwXXiEgu/view?usp=drive_link'
        alt='lll'
      />
      Hello World
    </div>
  )
}

export default App
