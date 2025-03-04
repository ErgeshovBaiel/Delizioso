import React, { useState } from "react";

const categories = [
    "All Categories",
    "Dinner",
    "Lunch",
    "Dessert",
    "Drink",
];

const foods = [
    {
        img: "",
        name: "",
        rating: "",
        decription: "",
        price: ""
    }
]

export default function CategoryFood() {
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    return (
        <div className="min-h-screen  flex flex-col items-center p-6">
            <h1 className="text-4xl font-extrabold mb-6 text-[#311F09]">Menu</h1>
            <div className="flex gap-4 mb-8">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`w-[232.42px] h-[54.44px] rounded-[50.94px] text-lg font-semibold transition-all duration-300 shadow-md flex items-center justify-center ${selectedCategory === category
                                ? "bg-[#311F09] text-white scale-105"
                                : "bg-white text-[#311F09] hover:bg-[#A67C52] hover:text-white"
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-6 w-full">
                <img src="" alt="" />
                <h4></h4>
                <img src="" alt="" />
                <p></p>
                <h4></h4>
                <button></button>
            </div>
        </div>
    );
}