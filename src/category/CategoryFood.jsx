import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function CategoryFood() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [categories, setCategories] = useState([]);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data: categoryData } = await supabase.from("category").select("*");
            const { data: foodData } = await supabase.from("foods").select("*");
            setCategories(categoryData || []);
            setFoods(foodData || []);
        };
        fetchData();
    }, []);

    const filteredFoods =
        selectedCategory === "All"
            ? foods
            : foods.filter((food) => food.category === selectedCategory);

    return (
        <div className="min-h-screen flex flex-col items-center p-6">
            <h1 className="text-4xl font-extrabold mb-6 text-[#311F09]">Menu</h1>
            <div className="flex gap-4 mb-8">
                {["All", ...categories.map((cat) => cat.name)].map((category) => (
                    <button
                        key={category}
                        className={`w-[232px] h-[54px] rounded-full text-lg font-semibold transition-all duration-300 shadow-md flex items-center justify-center ${
                            selectedCategory === category
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
                {filteredFoods.map((food) => (
                    <div key={food.id} className="border rounded-lg p-4 shadow-lg bg-white">
                        <img
                            src={food.img || "default.jpg"}
                            alt={food.name}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h4 className="text-xl font-bold text-[#311F09]">{food.name}</h4>
                        <p className="text-gray-600">{food.description}</p>
                        <p className="font-semibold text-lg text-[#A67C52]">${food.price}</p>
                        <button className="mt-2 bg-[#311F09] text-white px-4 py-2 rounded-full hover:bg-[#A67C52] transition">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
