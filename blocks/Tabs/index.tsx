import React from "react";
import styles from "./index.module.scss";
import { InferGetStaticPropsType } from "next";

function Tabs({ tabs }) {
  const [tab, setTab] = React.useState(tabs[0]);

  return (
    <div className={`container`}>
      <div className="Tabs-items">
        {tabs.map((item: any) => (
          <button onClick={() => setTab(item)}>{item.attributes.title}</button>
        ))}
      </div>

      <div className={styles.TabsContent}>
        <div
          dangerouslySetInnerHTML={{
            __html: tab.attributes.description,
          }}
        ></div>
      </div>

      <a
        href={`http://10.200.52.9:1337${tab.attributes.file.data.attributes.url}`}
      >
        Скачать файл
      </a>
    </div>
  );
}

export default Tabs;
