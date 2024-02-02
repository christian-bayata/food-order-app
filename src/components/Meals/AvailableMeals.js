import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Suya",
    description: "Spicy smoked grilled barbecue",
    price: 850.5,
  },
  {
    id: "m2",
    name: "Jollof Rice With Fried Chicken",
    description: "A popular spiced rice and tomato-based West African dish",
    price: 2500.0,
  },
  {
    id: "m3",
    name: "Egusi Soup with Goat Meat",
    description: "Nigerian soup delicacy",
    price: 3450.5,
  },
  {
    id: "m4",
    name: "Fried Rice With Turkey",
    description: "A popular spiced rice flavour",
    price: 2500.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
