import Link from "next/link";
import Links from "./Links/Links";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        Logo
      </Link>
      <Links />
    </div>
  );
};

export default Navbar;
