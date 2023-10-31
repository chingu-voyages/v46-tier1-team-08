
//import "./flip-transition.css";
import data from './data.json';
import styles from  "./FlipCard.module.css";
function FlipCard() {
  

  return (
    <div className={styles.card}>
  <div className={styles.content}>
    <div className={styles.front}>
      {data.results}
    </div>
    <div className={styles.back}>
      Support Local Businesses by Eating Out Instead!
    </div>
  </div>
</div>
 
  );
}

export default FlipCard;