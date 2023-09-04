import React from "react";
import styles from "./ScrollingText.module.css";
import { BsCircleFill } from "react-icons/bs";

const ScrollingText = () => {
  // scrollingText-------------
  return (
    <div className="container mx-auto my-4">
      <div className="flex">
        <h1 className="p-2 px-4 mx-2 bg-green-700 text-white font-bold">
          নোটিশ
        </h1>
        <div className={styles.scrollContainer}>
          <div className={styles.scrollText}>
            <BsCircleFill className="text-[#262582]" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
              officia!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
