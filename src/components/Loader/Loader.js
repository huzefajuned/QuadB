import spinner from "../spinner.gif";
import styles from "../Loader/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default Loader;
