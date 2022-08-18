import React from "react";
import styles from "./index.module.scss";
import Code from "../../icons/Code.svg";
import Image from "next/image";
import Site from "../../icons/Site.svg";

// import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";

const Header: React.FC<{}> = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("https://mcs.ooo/");
  };

  return (
    <div className={`${styles.Header} container-fluid`}>
      <div className="container-lg">
        <p className={styles.Title}>
          <b>ГУП ЛНР «Луганские коммуникации»</b> является единственным{" "}
          <span className={styles.Highlighting}>интернет</span> <br />
          <span className={styles.Highlighting}> провайдером,</span>{" "}
          предоставляющим внешний интернет-канал на территорию Луганской
          Народной Республики.
        </p>{" "}
        <a
          href="https://mcs.ooo/"
          target="_blank"
          rel="noreferrer"
          className={styles.a}
        >
          <button className={styles.Button}>Мобильная связь </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
