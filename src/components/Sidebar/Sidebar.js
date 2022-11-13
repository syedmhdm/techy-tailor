import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const location = useLocation();
  return (
    <div className={styles.sidebar}>
      <div className={styles.btnDiv}>X</div>
      <nav className={styles.nav}>
        <Link
          className={`${styles.navItem} ${
            location.pathname === "/addtailor" ? styles.active : ""
          }`}
          to='/addtailor'
        >
          add tailor
        </Link>
        <Link
          className={`${styles.navItem} ${
            location.pathname === "/addOrder" ? styles.active : ""
          }`}
          to='/addOrder'
        >
          add order
        </Link>
        <Link
          className={`${styles.navItem} ${
            location.pathname === "/tailors" || location.pathname === "/"
              ? styles.active
              : ""
          }`}
          to='/tailors'
        >
          tailors list
        </Link>
        <Link
          className={`${styles.navItem} ${
            location.pathname === "/myorders" ? styles.active : ""
          }`}
          to='/myorders'
        >
          my orders
        </Link>
        <Link
          className={`${styles.navItem} ${
            location.pathname === "/myproflie" ? styles.active : ""
          }`}
          to='/myproflie'
        >
          my profile
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
