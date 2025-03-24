import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabase'
import { useTranslation } from 'react-i18next'
import './Chef.css'

const Chef = () => {
  const { t } = useTranslation()
  const [povar, setPovar] = useState([])

  const getPovar = async () => {
    const { data } = await supabase.from('chef').select('*')
    setPovar(data)
  }

  useEffect(() => {
    getPovar()
  }, [])

  if (povar.length === 0) {
    return <h3>Loading...</h3>
  }

  const colors = ['bg-[#d1d0d2]', 'bg-[#ffe8cc]', 'bg-[#eae0d9]']

  return (
    <div className='chef-container'>
      <div className='flex justify-center'>
        <h2 className='chef-title'>{t('chef')}</h2>
      </div>
      <div className='chef-list'>
        {povar.map((chef, index) => (
          <div key={chef.id} className='chef-item'>
            <div className={`chef-image ${colors[index % 3]}`}>
              <img src={chef.img} alt={chef.name} className='chef-img' />
            </div>
            <div className='chef-info'>
              <h3 className='chef-name'>{chef.name}</h3>
              <p className='chef-description'>{chef.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chef
