const CategoryBtn = ({ selectedCategory, category, onClick }) => {
  return (
    <button
      className={`
                w-45
                h-17.5
                rounded-full 
                text-lg 
                font-semibold 
                shadow-md 
                flex 
                items-center 
                justify-center 
                cursor-pointer
                ${
                  selectedCategory === category
                    ? 'bg-[#311F09] text-white'
                    : 'bg-[#ecf0f1] text-[#311F09] hover:text-[#311F09]'
                }
            `}
      onClick={onClick}
    >
      {category}
    </button>
  )
}

export default CategoryBtn