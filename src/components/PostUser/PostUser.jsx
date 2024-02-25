import styles from "./PostUser.module.css";

const getData = async (userId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const data = await response.json();
  return data;
};

const PostUser = async ({ userId }) => {
  const post = await getData(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.author}>{post.name}</span>
    </div>
  );
};

export default PostUser;
