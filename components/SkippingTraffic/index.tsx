import React from "react";

function SkippingTraffic({ traffic }) {
  console.log(traffic);
  return (
    <div>
      <div className="container">
        <div>
          <p className="title">Пропуск трафика</p>
        </div>
        <div className="frame">
          {traffic.map((item: any) => (
            <div>
              {" "}
              <div>{item.attributes.range}</div>
              <div
                className="traffic"
                dangerouslySetInnerHTML={{
                  __html: item.attributes.price,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkippingTraffic;
