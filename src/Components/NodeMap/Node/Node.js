import React, { useState } from "react";
import styles from "./Node.module.css";

const Node = ({ isStart, isFinish, isWall, rowNumber, columnNumber }) => {
  const [isHovered, setHover] = useState(false);

  return (
    <div
      className={`${styles.node} ${
        isHovered ? styles.node__hovered : styles.node__notHovered
      }
      ${isStart && styles.node__start}
      ${isFinish && styles.node__finish}
      ${isWall && styles.node__wall}
      `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    ></div>
  );
};

export default Node;
