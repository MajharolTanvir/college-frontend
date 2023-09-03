import React from "react";
import styles from "./ScrollingText.module.css";

const ScrollingText = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="flex">
        <h1 className="p-2 px-4 mx-2 bg-green-700 text-white font-bold">
          নোটিশবোর্ড
        </h1>
        <div className={styles.scrollContainer}>
          <div className={styles.scrollText}>
            This is your scrolling text. You can replace it with your content.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
