import "./FlipCard.css";
import data from "./data.json";
import "./flip-transition.css";
import styles from "./FlipCard.module.css";
function FlipCard({ onClick }) {
  return (
     <div className="card" onClick={onClick} >
      <div className={styles.cardBack}><p>{data.name}</p></div>
      <div className={styles.cardFront}><p>{data.name}</p></div>
       {/* <div className={styles.cardGrid}>
    <div className={styles.cardsContainer} >
    
      {recipes.map((recipe) => { 
        if (!recipe.name) {
          console.warn(`Recipe is missing name or description: ${recipe}`);
          return null;
        }
        // what gets displayed in browser
        return (
          <>
          <div
            className={`${styles.card} ${flip ? styles.flip : ''}`}
            style={{
              backgroundImage: `url(${recipe.thumbnail_url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} onClick={() => setFlip(!flip)}
            //each item in a list needs a unique key
            key={recipe.id}
          >
            <h2 className={styles.cardName}>{recipe.name}</h2> 
            <div className={`${styles.front}`}>
                <h2 className={styles.cardName}>{recipe.name}</h2>
              </div>
              <div className={`${styles.back}`}>
                <p>{recipe.name}</p>
              </div>
          </div>
          </>  );
      })} */}
    {/* </div>
  </div> */}
    </div>
  );
}

export default FlipCard;