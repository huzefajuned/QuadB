import { useNavigate } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <h2>
          Quad_B <span>Movies</span>
        </h2>
      </div>
      <div className={styles.navLinks}>
        <h4 onClick={() => navigate("/")}>Home</h4>
        <h4 onClick={() => navigate("/about")}>About</h4>
        <h4>Login</h4>
      </div>
    </div>
  );
};

export default Navbar;
