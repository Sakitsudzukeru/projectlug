import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const SkippingTraffic: React.FC<{}> = () => {
  return (
    <div>
      {" "}
      <div className={styles.Rectangle}>
        {" "}
        <p>
          1 - 999 1000 - 3999 4000 - 6999 7000 - 9999 71,94₽ - 1 Мбит/с 43,82₽ -
          1 Мбит/с 41,77₽ - 1 Мбит/с 41,09₽ - 1 Мбит/с 10000+ 40,95₽ - 1 Мбит/с
        </p>
      </div>
      <div className={styles.Propusk}>
        <p className={styles.Title}>Пропуск трафика</p>
      </div>
    </div>
  );
};

export default SkippingTraffic;
