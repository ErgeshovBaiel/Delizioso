import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabase'
import { useTranslation } from 'react-i18next'
import './Customers.css'

const Customers = () => {
  const { t } = useTranslation()

  const [worker, setWorker] = useState([])

  const getWorker = async () => {
    const { data } = await supabase.from('worker').select('*')
    setWorker(data)
  }

  useEffect(() => {
    getWorker()
  }, [])

  if (worker.length === 0) {
    return <h3>Loading...</h3>
  }

  return (
    <div className='customers-container'>
      <div className='customers-content'>
        <div className='flex justify-center'>
          <h2 className='customers-title'>
          {t('customers')}
          </h2>
        </div>
        <div className='customers-list'>
          {worker.map(item => (
            <div key={item.id} className='worker-card text-center'>
              <img
                className='worker-image rounded-full mx-auto z-50'
                src={item.img}
                alt={item.name}
                width='150'
              />
              <h3 className='worker-name'>{item.name}</h3>
              <p className='worker-info'>{item.information}</p>
              <p className='worker-description'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Customers
