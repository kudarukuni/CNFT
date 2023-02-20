import React from "react";
import dynamic from "next/dynamic";
import CandyMachine from "../components/CandyMachine";
import { useWallet } from "@solana/wallet-adapter-react";

const WalletMultiButtonDynamic = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

// Constants
const TWITTER_HANDLE = "Naswillow";
const TWITTER_LINK = `https://twitter.com/kudarukuni`;

const Home = () => {
  const wallet = useWallet();
  // Actions
  const renderNotConnectedContainer = () => (
    <div>
      <img src="https://media.giphy.com/media/h5NLPVn3rg0Rq/giphy.gif" alt="emoji" />

      <div className="button-container">
        <WalletMultiButtonDynamic className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">👻 Chipoko Chadonha 👻</p>
          <p className="sub-text">The Much Anticipated Chipoko NFT Candy Machine With Fair Mint</p>
          {/* Render your connect to wallet button right here */}
          {wallet.publicKey ? <CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`Designed & Developed By on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
