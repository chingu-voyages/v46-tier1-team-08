import { useState } from "react";
import data from "./data.json";
import styles from "./FlipCard.module.css";

function FlipCard() {
  const recipes = data[0].results;
  const [isFlipped, setIsFlipped] = useState(Array(recipes.length).fill(false));

  const handleClick = (index) => {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[index] = !newIsFlipped[index];
    setIsFlipped(newIsFlipped);
  };

  return (
    <div className={styles.main}>
      {recipes.map((recipe, index) => {
        if (!recipe.name) {
          console.warn(`Recipe is missing name or description:`, recipe);
          return null;
        }
        const ingredientNames = recipe.sections.flatMap((section) =>
          section.components.map((component) =>
            component.ingredient ? component.ingredient.name : null
          )
        );

        const filteredIngredientNames = ingredientNames.filter(Boolean);

        return (
          <div
            className={`${styles.card} ${
              isFlipped[index] ? styles.flipCard : ""
            }`}
            onClick={() => handleClick(index)}
            key={index}
          >
            <div className={styles.content}>
              <div
                className={styles.front}
                style={{
                  backgroundImage: `url(${recipe.thumbnail_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h2 className={styles.cardName}>{recipe.name}</h2>
              </div>
              <div className={styles.back}>
                <ul>
                  {filteredIngredientNames.map((ingredientName, i) => (
                    <li key={i}>{ingredientName}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FlipCard;
