import { useState } from 'react';
//import "./flip-transition.css";
//import data from './data.json';
import styles from  "./FlipCard.module.css";
function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={styles.main}>
      <div className={styles.card}>
    <div className={`${styles.card} ${isFlipped ? styles.flipCard : ''}`} onClick={handleClick}>
  <div className={styles.content}>
    <div className={styles.front}>
      Front
    </div>
    <div className={styles.back}>
      Back
    </div>
  </div>
</div>
</div>
</div>
  );
}

export default FlipCard;

