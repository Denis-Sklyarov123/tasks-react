import styles from "./style.module.css";
import image from "./imageHotel.jpg";
import imageHeart from "./imageHeart.svg";

function CardHotel() {
  return (
    <header className={styles.appHeader}>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.image} alt="" />
        <button class={styles.btn}>
          <img src={imageHeart} className={styles.imageBtn} alt="" />
        </button>
      </div>
      <div className={styles.information}>
        <div className={styles.name}>
          <span className={styles.text}>
            The Montcalm At Brewery London City
          </span>
        </div>
        <div className={styles.city}>Westminster Borough, London</div>
        <div className={styles.grade}>
          <div className={styles.assessment}>4.7</div>
          <div className={styles.quality}>Exceptional</div>
          <div className={styles.quantityReviews}>3014 reviews</div>
        </div>
        <div className={styles.startingPrice}>
          Starting from <span className={styles.price}>US$68</span>
        </div>
      </div>
    </header>
  );
}

export default CardHotel;
