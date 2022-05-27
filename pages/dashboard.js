import styled from "styled-components";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";

import { Header, Main } from "@src/components";
import Sidebar from "../src/components/Sidebar";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch(
        "https://dmmnt14j.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%27coins%27%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
      );
      const sanityTokens = (await coins.json()).result;
      const webTOkens = sanityTokens.map(({ contractAddress }) =>
        sdk.getTokenModule(contractAddress)
      );

      setSanityTokens(sanityTokens);
      setThirdWebTokens(webTOkens);
    };

    return getSanityAndThirdWebTokens();
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          address={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
        <Main
          address={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;

export default Dashboard;
