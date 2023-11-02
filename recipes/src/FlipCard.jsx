import { useState } from "react";
import data from "./data.json";
import styles from "./FlipCard.module.css";

function FlipCard() {
  const recipes = data[0].results;
  const [isFlipped, setIsFlipped] = useState(Array(recipes.length).fill(false));
  const [activeSection, setActiveSection] = useState("ingredients");

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
                {activeSection === "ingredients" && (
                  <div id={styles.ingredients}>
                    <ul>
                      <a
                        href="#ingredients"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSection("ingredients");
                        }}
                      >
                        Ingredients
                      </a>
                      <a
                        href="#howTo"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSection("howTo");
                        }}
                      >
                        Instructions
                      </a>
                      {filteredIngredientNames.map((display_text, i) => (
                        <li key={i}>{display_text}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeSection === "howTo" && (
                  <div id={styles.howTo}>
                    <ol>
                      <a
                        href="#ingredients"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSection("ingredients");
                        }}
                      >
                        Ingredients
                      </a>
                      <a
                        href="#howTo"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSection("howTo");
                        }}
                      >
                        Instructions
                      </a>
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
