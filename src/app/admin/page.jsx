"use client";

import { useState, useEffect } from "react";
const AdminPage = () => {
  let [num, setNum] = useState(0);
  useEffect(() => {
    console.log(num);
  }, [num]);
  return (
    <div>
      <h1>this is an admin page</h1>
      <p>{num}</p>
      <button
        onClick={() => {
          setNum(++num);
        }}
      >
        increment
      </button>
    </div>
  );
};

export default AdminPage;
