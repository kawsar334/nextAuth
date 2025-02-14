
import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  weight: ["400",  "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "All Meals",

  description: "Meals loaded form MealDB API",
};


export default async function MealsPage({searchParams}) {
   
    const query = await searchParams;

    const fetchMeals = async () => {
        try {
            const res = await fetch(
              `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
            );

            const data = await res.json();
            // setMeals(data?.meals || [])
            return data.meals;
        } catch (error) {
            console.log(error);
            return [];
    }
}

    const meals = await fetchMeals();

    
  return (
    <div className="">
 
      <MealSearchInput/>
      
      <div className="grid md:grid-cols-3  gap-4 p-5 w-[85%] mx-auto ">
        {meals?.map((singleMeal) => {
          return (
            <Link href={`/meals/${singleMeal.idMeal}`} key={singleMeal.idMeal} className={`${roboto.className}`}>
              <Image
                src={singleMeal.strMealThumb}
                width={350}
                height={300}
                alt=""
                className="rounded-t"
              />
              <p className="text-2xl font-semibold  my-2 text-teal">{singleMeal?.strMeal}</p>
              <p className="text-[14px]  my-2">{singleMeal?.strInstructions.slice(0,200)}...</p>
              <Link href={`/meals/${singleMeal.idMeal}`} className="w-full text-center text-white font-semibold bg-teal block">
                <button className="bg-blue-300 p-2 ">Details</button>
              </Link>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
