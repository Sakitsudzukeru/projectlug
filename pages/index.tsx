import type { NextPage } from "next";
import Head from "next/head";
import Header from "../blocks/Header";
import Menu from "../blocks/Menu";

import Providers from "../blocks/Providers";
import Traffic from "../blocks/Traffic";

const Home: NextPage = ({
  providersTabs,
  providersTraffics,
  providersTrafficsPublic,
  providersTrafficPublic,
}) => {
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
        <Traffic
          traffics={providersTraffics}
          passServices={providersTrafficsPublic}
          passService={providersTrafficPublic}
        />
      </div>
    </>
  );
};

export default Home;
export async function getServerSideProps() {
  const { data: providersTabs } = await (
    await fetch("http://10.200.52.9:1337/api/providers?populate=*")
  ).json();
  const { data: providersTraffics } = await (
    await fetch("http://10.200.52.9:1337/api/traffics")
  ).json();

  const { data: providersTrafficsPublic } = await (
    await fetch("http://10.200.52.9:1337/api/connection-points")
  ).json();

  const { data: providersTrafficPublic } = await (
    await fetch("http://10.200.52.9:1337/api/traffics-public")
  ).json();

  return {
    props: {
      providersTabs,
      providersTraffics,
      providersTrafficsPublic,
      providersTrafficPublic,
    },
  };
}
