import { useEffect, useState } from "react";
import { fetchAvailableMeals } from "../../http";
import MealItem from "./MealItem";

const Menu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);
      try {
        const meals = await fetchAvailableMeals();
        setMenuItems(meals);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch user meals." });
      }
      setIsLoading(false);
    }

    fetchPlaces();
  }, []);

  return (
    <div id="meals">
      {menuItems.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </div>
  );
};

export default Menu;
