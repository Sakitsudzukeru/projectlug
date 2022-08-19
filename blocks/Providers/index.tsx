import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Tabs from "../Tabs/index";

const Providers: React.FC<{ tabs: any[] }> = ({ tabs }) => {
  return (
    <div id="providers" className={styles.Providers}>
      <div className={`${styles.Header} container`}>
        <h1 className={styles.Frame}>Провайдерам</h1>{" "}
      </div>
      <div className={styles.Paragraph}>
        <p className={`${styles.Subtitle} container`}>
          Перечень документов для заключения договора
        </p>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Providers;
