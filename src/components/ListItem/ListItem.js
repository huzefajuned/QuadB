import { Link } from "react-router-dom";
import styles from "../ListItem/ListItem.module.css";

const ListItem = ({ image, name, rating, id }) => {
  return (
    <div className={styles.container}>
      <Link to={`/singleshow/${id}`} className={styles.main}>
        <img src={image} alt={name} />
        <div className={styles.inner}>
          <h4 className={styles.name}>{name}</h4>
          <h4 className={styles.rating}>{rating}</h4>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
