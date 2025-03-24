import React, { useState, useEffect, useContext } from 'react'
import { supabase } from '../../supabase'
import CategoryBtn from '../categorybtn/CategoryBtn'
import { CartContext } from '../../context/CartContext'
import '../category/Category.css'
import { useTranslation } from 'react-i18next'
import { HiOutlineTrash } from 'react-icons/hi2'
import { FaPlus } from 'react-icons/fa6'
import { FaCheck } from 'react-icons/fa6'

export default function Category () {
  const { t } = useTranslation()
  const storedCategory =
    localStorage.getItem('selectedCategory') || 'All catagory'
  const [selectedCategory, setSelectedCategory] = useState(storedCategory)
  const [categories, setCategories] = useState([])
  const [foods, setFoods] = useState([])
  const [orderStatus, setOrderStatus] = useState({})

  const { addToCart } = useContext(CartContext)

  const categoryTableMap = {
    Dinner: 'dinner',
    Desserts: 'desserts',
    Lunch: 'lunch',
    Drinks: 'juice',
    Pizzas: 'pizza'
  }

  const getFoods = async categoryId => {
    try {
      let data = []

      if (categoryId === 'All catagory') {
        const { data: dinner } = await supabase.from('dinner').select('*')
        const { data: lunch } = await supabase.from('lunch').select('*')
        const { data: pizza } = await supabase.from('pizza').select('*')
        const { data: desserts } = await supabase.from('desserts').select('*')
        const { data: juice } = await supabase.from('juice').select('*')

        data = [
          ...(dinner || []).map(item => ({
            ...item,
            uniqueId: `dinner-${item.id}`
          })),
          ...(lunch || []).map(item => ({
            ...item,
            uniqueId: `lunch-${item.id}`
          })),
          ...(pizza || []).map(item => ({
            ...item,
            uniqueId: `pizza-${item.id}`
          })),
          ...(desserts || []).map(item => ({
            ...item,
            uniqueId: `desserts-${item.id}`
          })),
          ...(juice || []).map(item => ({
            ...item,
            uniqueId: `juice-${item.id}`
          }))
        ]
      } else {
        const table = categoryTableMap[selectedCategory]
        if (table) {
          const { data: categoryData, error } = await supabase
            .from(table)
            .select('*')
          if (error) throw error
          data = categoryData || []
        }
      }

      setFoods(data)
    } catch (error) {
      console.error('Ошибка при получении еды:', error.message)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: categoryData, error } = await supabase
          .from('category')
          .select('*')
        if (error) throw error
        setCategories(categoryData || [])
      } catch (error) {
        console.error('Ошибка при получении категорий:', error.message)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const savedOrderStatus = JSON.parse(localStorage.getItem('orderStatus')) || {}
    setOrderStatus(savedOrderStatus[selectedCategory] || {})

    getFoods(selectedCategory)
  }, [selectedCategory])

  const handleCategoryChange = category => {
    setSelectedCategory(category)
    localStorage.setItem('selectedCategory', category)
  }

  const handleOrderClick = food => {
    const updatedOrderStatus = { ...orderStatus, [food.uniqueId]: !orderStatus[food.uniqueId] }

    const allOrderStatus = JSON.parse(localStorage.getItem('orderStatus')) || {}
    allOrderStatus[selectedCategory] = updatedOrderStatus
    localStorage.setItem('orderStatus', JSON.stringify(allOrderStatus))

    setOrderStatus(updatedOrderStatus)
    addToCart(food)
  }

  const handleCartClick = () => {
    setOrderStatus({})
    const allOrderStatus = JSON.parse(localStorage.getItem('orderStatus')) || {}
    delete allOrderStatus[selectedCategory] 
    localStorage.setItem('orderStatus', JSON.stringify(allOrderStatus))
  }

  return (
    <div className='category-container'>
      <div className='flex justify-center'>
        <h1 className='title'>{t('menu3')}</h1>
      </div>

      <div className='category-buttons'>
        {['All catagory', ...categories.map(cat => cat.name)].map(category => (
          <CategoryBtn
            key={category}
            onClick={() => handleCategoryChange(category)}
            selectedCategory={selectedCategory}
            category={category}
          />
        ))}
      </div>

      <div className='food-list'>
        {foods.length > 0 ? (
          foods.map(food => (
            <div
              key={food.uniqueId}
              className={`food-item ${orderStatus[food.uniqueId] ? 'ordered' : ''}`}
            >
              <div className='food-content'>
                <img
                  src={food.img || 'default.jpg'}
                  alt={food.name}
                  className='food-image'
                />
                <h4 className='food-name'>{food.name}</h4>
                <p className='food-description'>{food.description}</p>
                <div className='food-price'>
                  <p className='font-[Poppins] font-semibold text-[25px] leading-[100%] text-[#311F09] pt-2'>
                    ${food.price}
                  </p>
                  <button
                    className={`order-button ${orderStatus[food.uniqueId] ? 'bg-[#FF8A00] text-white' : ''}`}
                    onClick={() => handleOrderClick(food)}
                    disabled={orderStatus[food.uniqueId]}
                  >
                    {orderStatus[food.uniqueId] ? (
                      <span className='hidden md:block'>Added</span>
                    ) : (
                      <span className='hidden md:block'>Order now</span>
                    )}
                    <span className='block md:hidden text-xl'>
                      {orderStatus[food.uniqueId] ? (
                        <FaCheck className='cursor-pointer text-[30px]' />
                      ) : (
                        <FaPlus className='cursor-pointer text-[30px]' />
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>NULL</p>
        )}
      </div>

      <button className='cart-button' onClick={handleCartClick}>
        {t('trash')}
        <HiOutlineTrash className='text-xl cursor-pointer' />
      </button>
    </div>
  )
}
