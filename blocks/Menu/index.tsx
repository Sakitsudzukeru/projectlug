import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Logo from "../../icons/Logo.svg";
import Image from "next/image";
import styles from "./index.module.scss";

const Menu: React.FC<{}> = () => {
  return (
    <div className={`${styles.Menu} container-lg`}>
      <Image src={Logo} width={67} height={50} />

      <a className={`${styles.a} nav-item  nav-link`} href="#providers">
        Провайдерам
      </a>

      <a className={`${styles.a} nav-item nav-link`} href="#contacts">
        {" "}
        Контакты
      </a>

      <a
        className={`${styles.a} nav-item nav-link`}
        href="https://mcs.ooo"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Мобильная связь
      </a>
    </div>
  );
};

export default Menu;
