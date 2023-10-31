
//import "./flip-transition.css";
import styles from  "./FlipCard.module.css";
function FlipCard() {
  

  return (
    <div className={styles.card}>
  <div className={styles.content}>
    <div className={styles.front}>
      Front!
    </div>
    <div className={styles.back}>
      Back!
    </div>
  </div>
</div>
 
  );
}

export default FlipCard;