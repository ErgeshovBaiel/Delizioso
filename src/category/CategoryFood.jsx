import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";
import CategoryButton from "../components/CategoryButton/CategoryButton";

export default function CategoryFood() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [categories, setCategories] = useState([]);
    const [foods, setFoods] = useState([]);
    const [selected, setSelected] = useState(null);

    const getFoods = async (category) => {
        try {
            let data = [];
            if (category === "Dinner") {
                const { data: pasta } = await supabase.from("pasta").select("*");
                const { data: pizza } = await supabase.from("pizza").select("*");
                data = [...pasta, ...pizza];
            } else if (category === "Dessert") {
                const { data: desserts } = await supabase.from("desserts").select("*");
                data = [...desserts];
            } else if (category === "Lunch") {
                const { data: lunch } = await supabase.from("lunch").select("*");
                data = [...lunch];
            } else if (category === "Drink") {
                const { data: drink } = await supabase.from("drink").select("*");
                data = [...drink];
            } else {
                const { data: pasta } = await supabase.from("pasta").select("*");
                const { data: pizza } = await supabase.from("pizza").select("*");
                const { data: desserts } = await supabase.from("desserts").select("*");
                const { data: lunch } = await supabase.from("lunch").select("*");
                data = [...pasta, ...pizza, ...desserts, ...lunch];
            }
            setFoods(data);
        } catch (error) {
            console.error("Ошибка при получении еды:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: categoryData } = await supabase.from("category").select("*");
                console.log("Категории загружены:", categoryData);
                setCategories(categoryData || []);
            } catch (error) {
                console.error("Ошибка при получении категорий:", error);
            }
        };
        fetchData();
        getFoods("All"); 
    }, []);

  
    const handleCategoryChange = (category) => {
        console.log(`Категория изменена на: ${category}`); 
        setSelectedCategory(category);
        getFoods(category);
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-4">
            <h1 className="text-3xl font-extrabold mb-4 text-[#311F09]">Menu</h1>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {["All", ...categories.map((cat) => cat.name)].map((category) => (
                    <CategoryButton
                        key={category}
                        onClick={() => handleCategoryChange(category)} 
                        selectedCategory={selectedCategory}
                        category={category}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
                {foods.length > 0 ? (
                    foods.map((food) => (
                        <div
                            key={food.id}
                            onClick={() => setSelected(food.id)}
                            className={`w-[240px] rounded-[20px] shadow-lg p-4 flex flex-col items-center transition-all cursor-pointer hover:scale-105 ${selected === food.id ? "bg-[#FF8A00] text-white" : "bg-white text-gray-900"}`}
                        >
                            <img src={food.img || "default.jpg"} alt={food.name} className="w-[200px] h-[200px] object-cover  mb-3" />
                            <h4 className="text-md font-bold text-center">{food.name}</h4>
                            <p className="text-center text-xs opacity-80 line-clamp-2">{food.description}</p>
                            <p className="text-sm font-semibold mt-1 text-black">${food.price}</p>
                            <button
                                className={`w-[100px] h-[35px] mt-auto px-2 py-1 rounded-full font-semibold transition-all ${selected === food.id ? "bg-white text-orange-500 hover:bg-gray-200" : "bg-orange-500 text-white hover:bg-orange-600"}`}
                            >
                                Order now
                            </button>
                        </div>
                    ))
                ) : (
                    <p>NULL</p>
                )}
            </div>
        </div>
    );
}
