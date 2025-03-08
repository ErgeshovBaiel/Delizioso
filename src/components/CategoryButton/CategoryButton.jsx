const CategoryButton = ({ selectedCategory, category, onClick }) => {
    return (
        <button
            className={`
                w-[232px] 
                h-[54px] 
                rounded-full 
                text-lg 
                font-semibold 
                transition-all 
                duration-300 
                shadow-md 
                flex 
                items-center 
                justify-center 
                ${selectedCategory === category
                    ? "bg-[#311F09] text-white scale-105"
                    : "bg-white text-[#311F09] hover:bg-[#311F09] hover:text-white"
                }
            `}
            onClick={onClick} 
        >
            {category} 
        </button>
    );
}

export default CategoryButton;
