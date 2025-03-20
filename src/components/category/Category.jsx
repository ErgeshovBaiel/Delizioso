// import React, { useState, useEffect } from 'react'
// import { supabase } from '../../supabase'
// import CategoryBtn from '../categorybtn/CategoryBtn'

// export default function Category () {
//   const storedCategory =
//     localStorage.getItem('selectedCategory') || 'All catagory'
//   const [selectedCategory, setSelectedCategory] = useState(storedCategory)
//   const [categories, setCategories] = useState([])
//   const [foods, setFoods] = useState([])

//   const getFoods = async category => {
//     try {
//       let data = []
//       if (category === 'Dinner') {
//         const { data: dinner } = await supabase.from('dinner').select('*')
//         data = [...dinner]
//       } else if (category === 'Desserts') {
//         const { data: desserts } = await supabase.from('desserts').select('*')
//         data = [...desserts]
//       } else if (category === 'Lunch') {
//         const { data: lunch } = await supabase.from('lunch').select('*')
//         data = [...lunch]
//       } else if (category === 'Drinks') {
//         const { data: drink } = await supabase.from('juice').select('*')
//         data = [...drink]
//       } else if (category === 'Pizzas') {
//         const { data: pizza } = await supabase.from('pizza').select('*')
//         data = [...pizza]
//       } else {
//         const { data: dinner } = await supabase.from('dinner').select('*')
//         const { data: pizza } = await supabase.from('pizza').select('*')
//         data = [...dinner, ...pizza]
//       }
//       setFoods(data)
//     } catch (error) {
//       console.error('Ошибка при получении еды:', error)
//     }
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data: categoryData } = await supabase
//           .from('category')
//           .select('*')
//         setCategories(categoryData || [])
//       } catch (error) {
//         console.error('Ошибка при получении категорий:', error)
//       }
//     }
//     fetchData()
//     getFoods(storedCategory)
//   }, [])

//   const handleCategoryChange = category => {
//     setSelectedCategory(category)
//     localStorage.setItem('selectedCategory', category)
//     getFoods(category)
//   }

//   return (
//     <div className='max-w-[1400px] mx-auto px-4 mt-10 md:mt-37.5 mb-10 md:mb-50'>
//       <div className='flex justify-center'>
//         <h1
//           className='w-full md:w-[670px] text-center md:text-left font-[Tinos]
//           font-bold text-[40px] md:text-[80px] leading-[120%] md:leading-[200%] text-[#311F09]'
//         >
//           Our Popular Menu
//         </h1>
//       </div>

//       <div className='flex flex-wrap gap-4 md:gap-5 mt-5 md:mt-15 mb-5 md:mb-15 justify-center'>
//         {['All catagory', ...categories.map(cat => cat.name)].map(category => (
//           <CategoryBtn
//             key={category}
//             onClick={() => handleCategoryChange(category)}
//             selectedCategory={selectedCategory}
//             category={category}
//           />
//         ))}
//       </div>

//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-20 place-items-center'>
//       {foods.length > 0 ? (
//           foods.map((food, i) => (
//             <div
//               key={food.id + '-' + i}
//               className='w-full sm:w-[300px] md:w-[350px] h-auto md:h-[640px] bg-[#f6f5f4] rounded-[30px] md:rounded-[50px] 
//               shadow-lg p-4 flex flex-col items-center transition-all 
//               cursor-pointer hover:scale-105 duration-800'
//             >
//               <div className='relative top-5 md:top-7.5 left-2.5'>
//                 <img
//                   src={food.img || 'default.jpg'}
//                   alt={food.name}
//                   className='w-full sm:w-[250px] md:w-[300px] h-[250px] md:h-[300px] object-cover rounded-[40px] md:rounded-[60px] mb-3'
//                 />
//                 <h4 className='text-xl md:text-3xl text-[#311F09] font-semibold text-center'>
//                   {food.name}
//                 </h4>
                // <p className='text-center text-[12px] md:text-[14px] font-normal font-[Poppins] mt-3 md:mt-5 line-clamp-4 text-[#59442B]'>
//                   {food.description}
//                 </p>
//                 <div className='flex mt-5 md:mt-10 justify-around w-full'>
                  // <p className='font-[Poppins] font-semibold text-[18px] md:text-[25px] leading-[100%] text-[#311F09] pt-2 md:pt-4'>
//                     ${food.price}
//                   </p>
//                   <button className='w-[120px] md:w-[156px] h-[45px] md:h-[55px] rounded-full font-semibold font-[Poppins] text-[14px] md:text-[16px] cursor-pointer bg-orange-500 text-white hover:bg-orange-600'>
//                     Order now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>NULL</p>
//         )}
//       </div>
//     </div>
//   )
// }












import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import CategoryBtn from '../categorybtn/CategoryBtn';
import './Category.css'; // Адаптивдик стилдер үчүн CSS файлы

export default function Category() {
  const storedCategory = localStorage.getItem('selectedCategory') || 'All catagory';
  const [selectedCategory, setSelectedCategory] = useState(storedCategory);
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);

  const getFoods = async (category) => {
    try {
      let data = [];
      if (category === 'Dinner') {
        const { data: dinner } = await supabase.from('dinner').select('*');
        data = [...dinner];
      } else if (category === 'Desserts') {
        const { data: desserts } = await supabase.from('desserts').select('*');
        data = [...desserts];
      } else if (category === 'Lunch') {
        const { data: lunch } = await supabase.from('lunch').select('*');
        data = [...lunch];
      } else if (category === 'Drinks') {
        const { data: drink } = await supabase.from('juice').select('*');
        data = [...drink];
      } else if (category === 'Pizzas') {
        const { data: pizza } = await supabase.from('pizza').select('*');
        data = [...pizza];
      } else {
        const { data: dinner } = await supabase.from('dinner').select('*');
        const { data: pizza } = await supabase.from('pizza').select('*');
        data = [...dinner, ...pizza];
      }
      setFoods(data);
    } catch (error) {
      console.error('Ошибка при получении еды:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: categoryData } = await supabase.from('category').select('*');
        setCategories(categoryData || []);
      } catch (error) {
        console.error('Ошибка при получении категорий:', error);
      }
    };
    fetchData();
    getFoods(storedCategory);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    localStorage.setItem('selectedCategory', category);
    getFoods(category);
  };

  return (
    <div className='category-container'>
      <div className='flex justify-center'>
        <h1 className='title'>Our Popular Menu</h1>
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
            <div key={food.id + '-' + i} className='food-item'>
              <div className='food-content'>
                <img src={food.img || 'default.jpg'} alt={food.name} className='food-image' />
                <h4 className='food-name'>{food.name}</h4>
                <p className='food-description'>{food.description}</p>
                <div className='food-price'>
                  <p className='font-[Poppins] font-semibold text-[25px] leading-[100%] text-[#311F09] pt-2'>${food.price}</p>
                  <button className='order-button'>Order now</button>
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