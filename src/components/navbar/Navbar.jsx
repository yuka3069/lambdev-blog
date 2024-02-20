import Links from "./Links/Links";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <Links />
    </div>
  );
};

export default Navbar;
