import type { NextPage } from "next";
import Head from "next/head";
import Header from "../blocks/Header";
import Menu from "../blocks/Menu";

import Providers from "../blocks/Providers";
import Traffic from "../blocks/Traffic";

const Home: NextPage = ({ providersTabs }) => {
  return (
    <>
      {" "}
      <div>
        <Head>
          <title>Lugacom</title>
        </Head>

        <Menu />
        <Header />

        <Providers tabs={providersTabs} />
        <Traffic />
      </div>
    </>
  );
};

export default Home;
export async function getServerSideProps() {
  const res = await fetch("http://10.200.52.9:1337/api/providers?populate=*");
  const rest = await fetch("http://10.200.52.9:1337/api/traffics?populate=*");

  const { data: providersTabs } = await res.json();
  // const { dataTrafic: traffic } = await rest.json();

  return {
    props: {
      providersTabs,
      // traffic,
    },
  };
}
