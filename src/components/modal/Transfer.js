import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { FaWallet } from "react-icons/fa";
import { client } from "../../lib/sanity";

const Transfer = ({ selectedToken, thirdWebTokens, address, setAction }) => {
  const [amount, setAmount] = useState();
  const [recipient, setRecipient] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [activeThirdWebToken, setActiveThirdWebToken] = useState(null);
  const [balance, setBalance] = useState("Fetching...");

  useEffect(() => {
    if (selectedToken) {
      const activeToken = thirdWebTokens.find(
        ({ address }) => address === selectedToken.contractAddress
      );
      setActiveThirdWebToken(activeToken);
    }
  }, [selectedToken, thirdWebTokens]);

  useEffect(() => {
    if (selectedToken) {
      const url = imageUrlBuilder(client).image(selectedToken.logo).url();
      setImageUrl(url);
    }
  }, [selectedToken]);

  useEffect(() => {
    const getBalance = async () => await activeThirdWebToken.balanceOf(address);

    if (activeThirdWebToken) {
      getBalance().then((balance) => setBalance(balance.displayValue));
    }
  }, [activeThirdWebToken]);

  const sendCrypto = async () => {
    if (activeThirdWebToken && amount && recipient) {
      setAction("transferring");
      const tx = await activeThirdWebToken.transfer(
        recipient,
        amount.toString().concat("000000000000000")
      );
      console.log("tx :>> ", tx);
      setAction("transferred");
    } else {
      console.log("missing data");
    }
  };

  return (
    <Wrapper>
      <Amount>
        <FlexInputContainer>
          <FlexInput
            placeholder="0"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span>{selectedToken?.symbol}</span>
        </FlexInputContainer>
        <Warning style={{ color: amount && "#0a0b0d" }}>
          Amount is required field
        </Warning>
      </Amount>
      {selectedToken && (
        <>
          <TransferForm>
            <Row>
              <FieldName>To</FieldName>
              <Icon>
                <FaWallet />
              </Icon>
              <Recipient
                placeholder="Address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </Row>
            <Divider />

            <Row>
              <FieldName>Pay with</FieldName>
              <CoinSelectList onClick={() => setAction("select")}>
                <Icon>
                  <img src={imageUrl} alt={selectedToken.name} />
                </Icon>
                <CoinName>{selectedToken.name}</CoinName>
              </CoinSelectList>
            </Row>
          </TransferForm>
          <Row>
            <ContinueButton onClick={() => sendCrypto()} disabled={!amount}>
              Continue
            </ContinueButton>
          </Row>
          <Row>
            <BalanceTitle>{selectedToken.symbol} Balance</BalanceTitle>
            <Balance>
              {balance} {selectedToken.symbol}
            </Balance>
          </Row>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const Amount = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FlexInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  & > span {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: #3773f5;
  }
`;

const FlexInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: #fff;
  font-size: 1.2rem;

  text-align: right;
  max-width: 45%;
  margin-right: 1rem;
  font-size: 4.5rem;
  color: #3773f5;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Warning = styled.div`
  padding: 2rem 0;
  text-align: center;
  color: #8a919e;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const TransferForm = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.4rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8a919e;
  padding: 1rem 0;
  font-size: 1.2rem;
`;

const FieldName = styled.div`
  flex: 0.5;
  padding-left: 2rem;
`;

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;

  & > img {
    height: 120%;
    width: 120%;
    object-fit: cover;
  }
`;

const Recipient = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: #fff;
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

const CoinSelectList = styled.div`
  display: flex;
  flex: 1.3;
  height: 100%;
  cursor: pointer;
`;

const CoinName = styled.div`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: #fff;
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

const ContinueButton = styled.button`
  color: #fff;
  width: 100%;
  border: none;
  background-color: #3773f5;
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  cursor: pointer;

  &:disabled {
    background-color: #282b2f;

    &:hover {
      background-color: #282b2f;
    }
  }

  &:hover {
    background-color: #4a80f6;
  }
`;

const BalanceTitle = styled.div``;

const Balance = styled.div``;

export default Transfer;
