import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Healthy Food, Delivered To You</h2>
      <p>
        Nutritionist built meals, designed to help you reach your goals. Choose
        from available delicious meals.
      </p>
      <p>
      Pick a co-operating gym or get your meals delivered straight to your door!
      </p>
    </section>
  );
};

export default MealsSummary;
