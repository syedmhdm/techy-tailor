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
            location.pathname === "/addcustomer" ? styles.active : ""
          }`}
          to='/addcustomer'
        >
          add customer
        </Link>
        <Link
          className={`${styles.navItem} ${
            location.pathname === "/customers" ? styles.active : ""
          }`}
          to='/customers'
        >
          customers
        </Link>
        <Link
          className={`${styles.navItem} ${
            location.pathname === "/inactivecustomers" ||
            location.pathname === "/"
              ? styles.active
              : ""
          }`}
          to='/inactivecustomers'
        >
          inactive customers
        </Link>
        <Link
          className={`${styles.navItem} ${
            location.pathname === "/myproflie" ? styles.active : ""
          }`}
          to='/myproflie'
        >
          my profile
        </Link>
        <Link
          className={`${styles.navItem} ${
            location.pathname === "/about" ? styles.active : ""
          }`}
          to='/about'
        >
          about
        </Link>
        {/* <Link
          className={`${styles.navItem} ${
            location.pathname === "/manufacturers" ? styles.active : ""
          }`}
          to='/manufacturers'
        >
          manufacturers
        </Link>
        <Link
          className={`${styles.navItem} ${
            location.pathname === "/deliveries" ? styles.active : ""
          }`}
          to='/deliveries'
        >
          deliveries
        </Link>
        <Link
          className={`${styles.navItem} ${
            location.pathname === "/inactivedeliveries" ? styles.active : ""
          }`}
          to='/inactivedeliveries'
        >
          inactive deliveries
        </Link> */}
      </nav>
    </div>
  );
};

export default Sidebar;
