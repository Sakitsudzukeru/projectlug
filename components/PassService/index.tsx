import React from "react";

function PassService({ passServices, passService }) {
  return (
    <div>
      <div>
        <p className="pass-services container">
          Услуга пропуска трафика по сети передачи данных в соответствии с
          публичной глобальной Интернет - адресацией
        </p>
        <div className="group">
          {passServices.map((item: any) => (
            <div className=" container">
              <p className="pass-attribTitle">{item.attributes.title}</p>
              <p className="pass-attribDescription">
                {item.attributes.description}
              </p>

              <div
                className="pass-AttribPrice "
                dangerouslySetInnerHTML={{
                  __html: item.attributes.price,
                }}
              ></div>
            </div>
          ))}
        </div>
        {passService.map((item: any) => (
          <div className="pass-attribTitle">
            {item.attributes.range}
            <div
              className="pass-AttribPrice"
              dangerouslySetInnerHTML={{
                __html: item.attributes.price,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PassService;
