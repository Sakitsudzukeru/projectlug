import "../styles/globals.scss";
import "../blocks/Tabs/index.scss";
import "../blocks/Traffic/index.scss";
import "../components/SkippingTraffic/index.scss";
import "../components/PassService/index.scss";
import "../components/DataTransmissionChannels/index.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
