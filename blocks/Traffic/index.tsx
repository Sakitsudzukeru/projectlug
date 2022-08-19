import React from "react";
import SkippingTraffic from "../../components/SkippingTraffic";

const Traffic: React.FC<{}> = () => {
  return (
    <div className="header">
      <div>
        <SkippingTraffic />
      </div>
    </div>
  );
};

export default Traffic;
