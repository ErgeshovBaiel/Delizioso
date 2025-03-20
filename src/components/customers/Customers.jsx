// import React, { useEffect, useState } from 'react'
// import { supabase } from '../../supabase'

// const Customers = () => {
//   const [worker, setWorker] = useState([])
//   const getWorker = async () => {
//     const { data } = await supabase.from('worker').select('*')
//     setWorker(data)
//   }

//   useEffect(() => {
//     getWorker()
//   }, [])

//   if (worker.length === 0) {
//     return <h3>Loading...</h3>
//   }

//   return (
//     <div className='w-full h-[1000px] bg-[#fbfafa]'>
//     <div className='w-[1400px] m-auto relative top-25'>
//       <div className='flex justify-center'>
//         <h2 className='w-[650px] h-[160px] font-[Tinos] font-bold text-[80px] leading-[200%] text-[#311F09] text-center'>
//           Our customers say
//         </h2>
//       </div>
//       <div className='flex justify-between mt-25'>
//         {worker.map(item => (
//           <div key={item.id} className='worker-card text-center'>
//             <img
//               className='rounded-full mx-auto z-50'
//               src={item.img}
//               alt={item.name}
//               width='150'
//             />
//             <h3 className='text-[30px] font-semibold font-[Poppins] mt-[35px]'>
//               {item.name}
//             </h3>
//             <p className='text-[20px] font-semibold font-[Poppins] mt-[15px]'>
//               {item.information}
//             </p>
//             <p className='w-[400px] text-[20px] font-normal font-[Poppins] mt-[20px]'>
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//       <div className='flex gap-5 justify-center mt-10'>
//         <p className='w-25 h-25 bg-[#e7f5fb] rounded-full relative bottom-150 right-70'></p>
//         <p className='w-25 h-25 bg-[#fbeceb] rounded-full  relative bottom-10 left-50'></p>
//         <p className='w-25 h-25 bg-[#faf2fa] rounded-full relative bottom-100 left-80'></p>
//         <p className='w-25 h-25 bg-[#fbe4c8] rounded-full relative bottom-150 left-150 z-40'></p>
//         <p className='w-25 h-25 bg-[#ceefc9] rounded-full relative bottm-100 right-200'></p>
//         <p className='w-25 h-25 bg-[#fdc07b] rounded-full relative bottom-5 left-90'></p>
//         <p className='w-25 h-25 bg-[#fbeceb] rounded-full relative bottom-100 right-150'></p>
//       </div>
//     </div>
//   </div>

//   )
// }

// export default Customers

import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabase'
import './Customers.css'

const Customers = () => {
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
          <h2 className='customers-title'>Our customers say</h2>
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
