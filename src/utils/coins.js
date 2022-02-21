const btcLogo = "/img/btc.png";
const maticLogo = "/img/matic.png";
const dogeLogo = "/img/doge.png";
const ethLogo = "/img/eth.png";
const lunaLogo = "/img/luna.png";
const solLogo = "/img/sol.png";

const coins = [
  {
    name: "Bitcoin",
    sign: "BTC",
    logo: btcLogo,
    balanceUsd: 230.32,
    balanceCoin: 6.35667736,
    priceUsd: 5.32,
    change: -4.74,
    allocation: 41.89,
  },
  {
    name: "Solana",
    sign: "CRV",
    logo: solLogo,
    balanceUsd: 120.2,
    balanceCoin: 6.35667736,
    priceUsd: 5.32,
    change: 4.74,
    allocation: 41.89,
  },
  {
    name: "Polygon",
    sign: "MATIC",
    logo: maticLogo,
    balanceUsd: 1.2,
    balanceCoin: 3.35664236,
    priceUsd: 5.22,
    change: -5.24,
    allocation: 17.89,
  },
  {
    name: "Ethereum",
    sign: "ETH",
    logo: ethLogo,
    balanceUsd: 1.2,
    balanceCoin: 3.35664236,
    priceUsd: 5.22,
    change: 6.24,
    allocation: 17.89,
  },
  {
    name: "Terra",
    sign: "LUNA",
    logo: lunaLogo,
    balanceUsd: 1.2,
    balanceCoin: 3.35664236,
    priceUsd: 5.22,
    change: -5.24,
    allocation: 17.89,
  },
  {
    name: "Dogecoin 🌙",
    sign: "DOGE",
    logo: dogeLogo,
    balanceUsd: 1.2,
    balanceCoin: 3.35664236,
    priceUsd: 5.22,
    change: 200.24,
    allocation: 17.89,
  },
];

export default coins;
