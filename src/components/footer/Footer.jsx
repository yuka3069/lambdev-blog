import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.text}>
        Made with ❤️ by Nikhil © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
