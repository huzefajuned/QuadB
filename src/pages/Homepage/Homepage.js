import { useContext } from "react";
import styles from "../Homepage/Homepage.module.css";
// Context
import ShowsContext from "../../context/shows/showsContext";

// Components
import Searchbar from "../../components/Searchbar/Searchbar";
import ListItem from "../../components/ListItem/ListItem";
import Loader from "../../components/Loader/Loader";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div className={styles.container}>
      <Searchbar />
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.inner}>
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "No rating"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
