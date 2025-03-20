import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import CategoryBtn from '../categorybtn/CategoryBtn';
import '../category/Category.css';

export default function Category() {
  const storedCategory = localStorage.getItem('selectedCategory') || 'All catagory';
  const [selectedCategory, setSelectedCategory] = useState(storedCategory);
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const [orderedItemId, setOrderedItemId] = useState(null); 

  const categoryTableMap = {
    Dinner: 'dinner',
    Desserts: 'desserts',
    Lunch: 'lunch',
    Drinks: 'juice',
    Pizzas: 'pizza',
  };

  const getFoods = async (category) => {
    try {
      let data = [];

      if (category === 'All catagory') {
        const { data: dinner } = await supabase.from('dinner').select('*');
        const { data: pizza } = await supabase.from('pizza').select('*');
        data = [...(dinner || []), ...(pizza || [])];
      } else {
        const table = categoryTableMap[category];
        if (table) {
          const { data: categoryData, error } = await supabase.from(table).select('*');
          if (error) throw error;
          data = categoryData || [];
        }
      }
      setFoods(data);
    } catch (error) {
      console.error('Ошибка при получении еды:', error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: categoryData, error } = await supabase.from('category').select('*');
        if (error) throw error;
        setCategories(categoryData || []);
      } catch (error) {
        console.error('Ошибка при получении категорий:', error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    getFoods(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    localStorage.setItem('selectedCategory', category);
  };

  const handleOrderClick = (id) => {
    setOrderedItemId(id);
  };

  return (
    <div className='category-container'>
      <div className='flex justify-center'>
        <h1 className='title'>Menu</h1>
      </div>

      <div className='category-buttons'>
        {['All catagory', ...categories.map((cat) => cat.name)].map((category) => (
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
          foods.map((food, i) => (
            <div
              key={food.id + '-' + i}
              className={`food-item ${orderedItemId === food.id ? 'ordered' : ''}`}
            >
              <div className='food-content'>
                <img src={food.img || 'default.jpg'} alt={food.name} className='food-image' />
                <h4 className='food-name'>{food.name}</h4>
                <p className='food-description'>{food.description}</p>
                <div className='food-price'>
                  <p className='font-[Poppins] font-semibold text-[25px] leading-[100%] text-[#311F09] pt-2'>
                    ${food.price}
                  </p>
                  <button className='order-button' onClick={() => handleOrderClick(food.id)}>
                    Order now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>NULL</p>
        )}
      </div>
    </div>
  );
}
