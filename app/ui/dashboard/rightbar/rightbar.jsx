import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            fill
            alt="astronaut"
            className={styles.bg}
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Availble </span>
          <h3 className={styles.title}>Explore the space with us</h3>
          <span className={styles.subtitle}>takes 4 min to learn</span>
          <p className={styles.description}>
            We are here to help you to explore the space with our latest
            technology
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled size={20} />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            fill
            alt="astronaut"
            className={styles.bg}
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Availble </span>
          <h3 className={styles.title}>Explore the space with us</h3>
          <span className={styles.subtitle}>takes 4 min to learn</span>
          <p className={styles.description}>
            We are here to help you to explore the space with our latest
            technology
          </p>
          <button className={styles.button}>
            <MdReadMore size={20} />
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
