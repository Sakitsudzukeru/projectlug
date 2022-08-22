import React from "react";
import DataTransmissionChannels from "../../components/DataTransmissionChannels";
import PassService from "../../components/PassService";
import SkippingTraffic from "../../components/SkippingTraffic";

function Traffic({ traffics, passServices, passService }) {
  return (
    <div className="header">
      <div>
        <SkippingTraffic traffic={traffics} />
      </div>{" "}
      <PassService passServices={passServices} passService={passService} />
      <DataTransmissionChannels />
    </div>
  );
}

export default Traffic;
