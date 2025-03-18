import React, { useState, useEffect } from 'react'
import { supabase } from '../../supabase'
import CategoryButton from '../CategoryButton/CategoryButton'
import { PiStarFill } from 'react-icons/pi'

export default function Popular () {
  const [selectedCategory, setSelectedCategory] = useState('All category')
  const [categories, setCategories] = useState([])
  const [foods, setFoods] = useState([])
  const [selected, setSelected] = useState(null)

  const getFoods = async category => {
    try {
      let data = []
      if (category === 'Dinner') {
        const { data: pasta } = await supabase.from('pasta').select('*')
        const { data: pizza } = await supabase.from('pizza').select('*')
        data = [...pasta, ...pizza]
      } else if (category === 'Dessert') {
        const { data: desserts } = await supabase.from('desserts').select('*')
        data = [...desserts]
      } else if (category === 'Lunch') {
        const { data: lunch } = await supabase.from('lunch').select('*')
        data = [...lunch]
      } else if (category === 'Drink') {
        const { data: drinks } = await supabase.from('juice').select('*')
        data = [...drinks]
      } else {
        const { data: pasta } = await supabase.from('pasta').select('*')
        const { data: pizza } = await supabase.from('pizza').select('*')
        const { data: desserts } = await supabase.from('dessers').select('*')
        data = [...pasta, ...pizza, ...desserts]
      }
      setFoods(data)
    } catch (error) {
      console.log('Desserts data:', desserts);

    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: categoryData } = await supabase
          .from('category')
          .select('*')
        setCategories(categoryData || [])
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    fetchData()
    getFoods(selectedCategory)
  }, [])

  const handleCategoryChange = category => {
    setSelectedCategory(category)
    getFoods(category)
  }

  return (
    <div className='min-h-screen flex flex-col items-center p-20'>
      <h1 className='text-5xl font-bold mb-10 text-[#311F09]'>
        Our Popular Menu
      </h1>
      <div className='flex flex-wrap justify-center gap-4 mb-8'>
        {['All category', ...categories.map(cat => cat.name)].map(category => (
          <CategoryButton
            key={category}
            onClick={() => handleCategoryChange(category)}
            selectedCategory={selectedCategory}
            category={category}
          />
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
        {foods.length > 0 ? (
          foods.map(food => (
            <div
              key={food.id}
              onClick={() => setSelected(food.id)}
              className={`w-[340px] rounded-lg shadow-lg p-5 flex flex-col items-center transition-all cursor-pointer hover:scale-105 ${
                selected === food.id
                  ? 'bg-[#FF8A00] text-white'
                  : 'bg-white text-gray-900'
              }`}
            >
              <img
                src={food.img || 'default.jpg'}
                alt={food.name}
                className='w-[250px] h-[250px] object-cover mb-3 rounded-full'
              />
              <h4 className='text-lg font-bold text-center'>{food.name}</h4>
              <div className='flex justify-center mt-2'>
                {[...Array(4)].map((_, index) => (
                  <span key={index} className='text-[#FF8A00] text-xl'>
                    <PiStarFill />
                  </span>
                ))}
              </div>
              <p className='text-center text-sm opacity-80 line-clamp-2'>
                {food.description}
              </p>
              <p className='text-md font-semibold mt-2 text-black'>
                ${food.price}
              </p>
              <button
                className={`w-[120px] h-[40px] mt-3 px-4 py-2 rounded-full font-semibold transition-all ${
                  selected === food.id
                    ? 'bg-white text-orange-500 hover:bg-gray-200'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                Order now
              </button>
            </div>
          ))
        ) : (
          <p>No food available</p>
        )}
      </div>
    </div>
  )
}
