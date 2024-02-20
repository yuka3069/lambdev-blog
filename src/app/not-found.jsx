import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>sorry this page is not found</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
