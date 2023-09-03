import React from "react";
import styles from "./ScrollingText.module.css";
import { BsCircleFill } from "react-icons/bs";

const ScrollingText = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="flex">
        <h1 className="p-2 px-4 mx-2 bg-green-700 text-white font-bold">
          নোটিশবোর্ড
        </h1>
        <div className={styles.scrollContainer}>
          <div className={styles.scrollText}>
            <BsCircleFill className="text-[#262582]" />
            <p>তানভীর ভাই যেখানে আমরা আছি সেখানে। জয় বাংলা</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;