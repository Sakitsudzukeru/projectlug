import React from "react";

import { InferGetStaticPropsType } from "next";

function Tabs({ tabs }) {
  const [tab, setTab] = React.useState(tabs[0]);

  return (
    <div className="container">
      <div className="tabs-items">
        {tabs.map((item: any) => (
          <button
            onClick={() => setTab(item)}
            className={
              tab.id === item.id ? "tabs-btn tabs-btn--active" : "tabs-btn"
            }
          >
            {item.attributes.title}
          </button>
        ))}
      </div>

      <div
        className="tabs-content"
        style={
          tab === tabs[0]
            ? {
                borderRadius: "0 25px 25px 25px",
              }
            : { borderRadius: "25px 0 25px 25px" }
        }
      >
        <div
          dangerouslySetInnerHTML={{
            __html: tab.attributes.description,
          }}
        ></div>
      </div>

      <a
        href={`http://10.200.52.9:1337${tab.attributes.file.data.attributes.url}`}
        className="a"
      >
        <button className="Download"> Скачать файл</button>
      </a>
    </div>
  );
}

export default Tabs;
