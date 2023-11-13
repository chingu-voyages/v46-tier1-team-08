import { useState } from "react";
import data from "./data.json";
import styles from "./FlipCard.module.css";

function FlipCard() {
  const recipes = data[0].results;
  const [isFlipped, setIsFlipped] = useState(Array(recipes.length).fill(false));
  const [activeSection, setActiveSection] = useState(Array(recipes.length).fill("ingredients"));

  const handleClick = (index) => {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[index] = !newIsFlipped[index];
    setIsFlipped(newIsFlipped);
  };
  const handleSectionClick = (section, index) => {
    const newActiveSection = [...activeSection];
    newActiveSection[index] = section;
    setActiveSection(newActiveSection);
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
            component.ingredient
              ? `${component.measurements[0].quantity} ${component.measurements[0].unit.abbreviation} ${component.ingredient.name}`
              : null
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
                {activeSection[index] === "ingredients" && (
                  <div id={styles.ingredients}>
                    <a
                      href="#ingredients"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSectionClick("ingredients", index);
                      }}
                    >
                      Ingredients
                    </a>
                    <a
                      href="#howTo"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSectionClick("howTo", index);
                      }}
                    >
                      Instructions
                    </a>
                    <ul className={styles.ingredientsList}>
                      {filteredIngredientNames.map((raw_text, i) => (
                        <li key={i}>
                          <input
                            type="checkbox"
                            id={`ingredient-${i}`}
                            onClick={(e) => e.stopPropagation()}
                          />
                          <label htmlFor={`ingredient-${i}`}>{raw_text}</label>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeSection[index] === "howTo" && (
                  <div id={styles.howTo}>
                    <a
                      href="#ingredients"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSectionClick("ingredients", index);
                      }}
                    >
                      Ingredients
                    </a>
                    <a
                      href="#howTo"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSectionClick("howTo", index);
                      }}
                    >
                      Instructions
                    </a>
                    <ol>
                      {recipe.instructions.map((instruction, i) => (
                        <li key={i}>{instruction.display_text}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FlipCard;