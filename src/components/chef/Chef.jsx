// import React, { useEffect, useState } from 'react'
// import { supabase } from '../../supabase'

// const Chef = () => {
//   const [povar, setPovar] = useState([])

//   const getPovar = async () => {
//     const { data } = await supabase.from('chef').select('*')
//     setPovar(data)
//   }

//   useEffect(() => {
//     getPovar()
//   }, [])

//   if (povar.length === 0) {
//     return <h3>Loading...</h3>
//   }

//   const colors = ['bg-[#d1d0d2]', 'bg-[#ffe8cc]', 'bg-[#eae0d9]']

//   return (
//     <div className='w-[1400px] m-auto px-6 mt-43.75'>
//       <div className='flex justify-center'>
//         <h2
//           className='md:w-[593px] md:h-[160px] w-[560px]h-[47px] font-[Tinos]
//           font-bold md:text-[80px] text-[50px] leading-[200%] text-[#311F09]'
//         >
//           Our greatest chef
//         </h2>
//       </div>
// <div className='w-350 flex flex-wrap gap-25 mt-[135px] justify-center'>

//         {povar.map((chef, index) => (
//           <div
//             key={chef.id}
//             className='w-[350px] h-[720px] flex flex-col ites-center'
//           >
//             <div
//               className={`w-[350px] h-[550px] rounded-[50px] relative ${
//                 colors[index % 3]
//               }`}
//             >
//               <img
//                 src={chef.img}
//                 alt={chef.name}
//                 className='w-full h-full object-cover rounded-[50px] absolute top-0 left-0'
//               />
//             </div>
//             <div className='text-center'>
//             <h3 className="font-[Poppins] font-semibold text-[25px]
//              leading-[200%] text-[#311F09] mt-[30px]">{chef.name}</h3>
//             <p className="font-[Poppins] font-normal text-[25px]
//              leading-[200%] text-[#a08d76]">{chef.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
// export default Chef

import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase';
import './Chef.css';

const Chef = () => {
  const [povar, setPovar] = useState([]);

  const getPovar = async () => {
    const { data } = await supabase.from('chef').select('*');
    setPovar(data);
  };

  useEffect(() => {
    getPovar();
  }, []);

  if (povar.length === 0) {
    return <h3>Loading...</h3>;
  }

  const colors = ['bg-[#d1d0d2]', 'bg-[#ffe8cc]', 'bg-[#eae0d9]'];

  return (
    <div className="chef-container">
      <div className="flex justify-center">
        <h2 className="chef-title">Our greatest chefs</h2>
      </div>
      <div className="chef-list">
        {povar.map((chef, index) => (
          <div key={chef.id} className="chef-item">
            <div className={`chef-image ${colors[index % 3]}`}>
              <img src={chef.img} alt={chef.name} className="chef-img" />
            </div>
            <div className="chef-info">
              <h3 className="chef-name">{chef.name}</h3>
              <p className="chef-description">{chef.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
