
import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";

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
 
      <MealSearchInput></MealSearchInput>
      
      <div className="grid grid-cols-4 gap-4">
        {meals?.map((singleMeal) => {
          return (
            <div key={singleMeal.id}>
              <p>{singleMeal?.strMeal}</p>
              <p>{singleMeal?.strInstructions}</p>
              <Link href={`/meals/${singleMeal.idMeal}`}>
                <button className="bg-blue-300 p-2">Details</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
