import React from "react";
import Lugacom from "../../icons/Lugacom.svg";
import Image from "next/image";

const Footer: React.FC<{}> = () => {
  return (
    <div style={{ width: "1920px", height: "200px" }}>
      <div style={{ textAlign: "center" }}>
        <Image
          src={Lugacom}
          alt="Picture of the author"
          width={300}
          height={100}
        />
        <div
          style={{
            position: "absolute",
            left: "0%",
            right: "0%",
            top: "97.69%",
            bottom: "1.31%",
            border: "1px solid rgba(117, 117, 117, 0.15)",
            width: "1920px",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "15px",
              letterSpacing: "0.03em",
              color: "#333333",
              marginLeft: "70px",
            }}
          >
            © ГУП ЛНР «Луганские коммуникации»
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
