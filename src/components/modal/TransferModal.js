import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";
import CoinSelector from "./CoinSelector";
import Receive from "./Receive";

import Transfer from "./Transfer";

const TransferModal = ({ sanityTokens, thirdWebTokens, address }) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);

  const selectedStyle = {
    color: "#3773f5",
  };

  const unSelectedStyle = {
    border: "1px solid #282b2f",
  };

  const handleChangeAction = (name) => () => setAction(name);

  const options = {
    send: "Send",
    receive: "Receive",
  };

  const selectedModal = () => {
    switch (action) {
      case "send":
        return (
          <Transfer
            selectedToken={selectedToken}
            thirdWebTokens={thirdWebTokens}
            address={address}
            setAction={setAction}
          />
        );
      case "receive":
        return (
          <Receive
            setAction={setAction}
            selectedToken={selectedToken}
            address={address}
          />
        );
      case "select":
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            address={address}
          >
            {options.receive}
          </CoinSelector>
        );
      case "transferring":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            Transfer in progress...
            <TailSpin
              height="100"
              width="100"
              color="#3773f5"
              ariaLabel="Transferring"
            />
          </div>
        );
      case "transferred":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              color: "#27ad75",
            }}
          >
            Transfer complete
          </div>
        );

      default:
        return <h2>{options.send}</h2>;
    }
  };

  return (
    <Wrapper>
      <Selector>
        {Object.entries(options).map(([name, title]) => {
          const isActiveAction = action === name;
          const style = isActiveAction ? selectedStyle : unSelectedStyle;

          return (
            <Option style={style} onClick={handleChangeAction(name)} key={name}>
              <p>{title}</p>
            </Option>
          );
        })}
      </Selector>
      <ModalMain>{selectedModal(action)}</ModalMain>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: #fff;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;

export default TransferModal;
