import styles from "./style.module.css";
import { Avatar } from "@mui/material";

function OverheardCard() {
  return (
    <header className={styles.appHeader}>
      <div className={styles.nameHotel}>Hotel Equatorial Melaka</div>
      <div className={styles.comment}>
        "Great hotel. Everything is clean, cozy, tastefully done. Nice design,
        new furniture, snow-white fluffy towels. The staff is polite and
        friendly. There were no complaints about the cleaning. I was pleasantly
        surprised by the free Wi-Fi with good speed and the availability of
        parking. I will definitely come back to Ekipazh again."
      </div>
      <div>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <div>
          <div className={styles.name}>Annette Black</div>
          <div className={styles.jobTitle}>UX / UI Designer</div>
        </div>
      </div>
    </header>
  );
}

export default OverheardCard;
