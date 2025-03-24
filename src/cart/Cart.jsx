import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import '../cart/Cart.css'
import Header from '../components/layout/Header'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { HiOutlineTrash } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'


export default function Cart () {
  const { t } = useTranslation()
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext)

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  
  return (
    <div className='w-350 m-auto mt-20'>
      <Header />
      <div className='flex items-center justify-end relative bottom-10'>
        <button className='flex gap-5 font-[inter] font-medium text-xl' onClick={clearCart}>
          <HiOutlineTrash className='text-green-500 text-2xl cursor-pointer mr-2.5 mt-0.5' />
          {t('cart')}
        </button>
      </div>
      {cartItems.length > 0 ? (
        <div className='w-350  flex-wrap flex gap-25'>
          {cartItems.map((item, index) => (
            <div key={index} className='cart-item'>
              <img
                src={item.img || 'default.jpg'}
                alt={item.name}
                className='w-37.5 h-37.5 rounded-full relative left-6.25 mt-3.5'
              />
              <div className='cart-item-info'>
                <h4 className='text-xl font-medium '>{item.name}</h4>
                <div className='quantity-control'>
                  <button onClick={() => decreaseQuantity(item)}>
                    <FiMinus className='text-[#FF3838] cursor-pointer text-[20px]' />
                  </button>
                  <span className='m-5 text-[20px]'>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item)}>
                    <FiPlus className='text-[#3FC66E] cursor-pointer text-[20px]' />
                  </button>
                </div>
                <p className='text-[17px] font-medium mt-2.5'>${item.price * item.quantity}</p>
                <button
                  className='remove-button'
                  onClick={() => removeFromCart(item)}
                  title='Бардык товарды өчүрүү'
                >
                  <HiOutlineTrash className='text-red-500 text-xl cursor-pointer mt-2.5' />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='flex items-center justify-center text-5xl'>
          Ваша корзина пуста 🙂
        </p>
      )}
    </div>
  )
}
