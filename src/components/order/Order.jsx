import React, { useState, useEffect, useContext } from 'react'
import { supabase } from '../../supabase'
import CategoryBtn from '../categorybtn/CategoryBtn'
import { CartContext } from '../../context/CartContext'
import '../category/Category.css'
import { useTranslation } from 'react-i18next'
import { FaPlus, FaCheck } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom' // Import useNavigate

export default function Order () {
  const { t } = useTranslation()
  const storedCategory =
    localStorage.getItem('selectedCategory') || 'All category'
  const [selectedCategory, setSelectedCategory] = useState(storedCategory)
  const [categories, setCategories] = useState([])
  const [foods, setFoods] = useState([])
  const [orderStatus, setOrderStatus] = useState({})

  const { addToCart, cartItems } = useContext(CartContext)

  const navigate = useNavigate() // Initialize useNavigate

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

      if (categoryId === 'All category') {
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
        const table = categoryTableMap[categoryId]
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
    const savedOrderStatus =
      JSON.parse(localStorage.getItem('orderStatus')) || {}
    setOrderStatus(savedOrderStatus[selectedCategory] || {})

    getFoods(selectedCategory)
  }, [selectedCategory])

  const handleCategoryChange = category => {
    setSelectedCategory(category)
    localStorage.setItem('selectedCategory', category)
  }

  const handleOrderClick = food => {
    addToCart(food) // Add item to the cart
    navigate('/cart') // Navigate to the cart page
  }

  const isItemInCart = food => cartItems.some(item => item.id === food.id)

  const handleCartClick = () => {
    setOrderStatus({})
    const allOrderStatus = JSON.parse(localStorage.getItem('orderStatus')) || {}
    delete allOrderStatus[selectedCategory]
    localStorage.setItem('orderStatus', JSON.stringify(allOrderStatus))
  }

  return (
    <div className='category-container'>
      <div className='flex justify-center'>
        <h1 className='title'>{t('menu2')}</h1>
      </div>

      <div className='category-buttons'>
        {['All category', ...categories.map(cat => cat.name)].map(category => (
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
              key={food.id}
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
                    className={`order-button ${isItemInCart(food) ? 'bg-[#FF8A00] text-white' : ''}`}
                    onClick={() => handleOrderClick(food)}
                    disabled={orderStatus[food.uniqueId]}
                  >
                    <span className='hidden md:block'>
                      {isItemInCart(food) ? 'Added' : 'Order now'}
                    </span>
                    <span className='block md:hidden text-xl'>
                      {isItemInCart(food) ? (
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
          <p>{t('noFood')}</p>
        )}
      </div>
      <button onClick={handleCartClick}></button>
    </div>
  )
}
