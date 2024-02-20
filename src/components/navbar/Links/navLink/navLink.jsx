import Link from "next/link";
import styles from "./NavLink.module.css";

const NavLink = ({ item }) => {
  return (
    <Link href={item.path} className={styles.link}>
      {item.title}
    </Link>
  );
};

export default NavLink;
