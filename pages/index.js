import React from "react";
import dynamic from "next/dynamic";
import CandyMachine from "../components/CandyMachine";
import { useWallet } from "@solana/wallet-adapter-react";

// This is to disable SSR when using WalletMultiButton
const WalletMultiButtonDynamic = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

// Constants
const TWITTER_HANDLE = "Naswillow";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
    const wallet = useWallet();
    // Actions
    const renderNotConnectedContainer = () => (
        <div>
            <img src="https://media1.giphy.com/media/h5NLPVn3rg0Rq/giphy.gif" alt="emoji" />

            <div className="button-container">
                <WalletMultiButtonDynamic className="cta-button connect-wallet-button" />
            </div>
        </div>
    );

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🍭 Scary Drop 🍭</p>
                    <p className="sub-text">A Spooky Chipoko NFT Airdrop With Fair Mint</p>
                    {wallet.publicKey ? <CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}
                </div>
                <div className="footer-container">
                    <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
                    <a className="footer-text" href={TWITTER_LINK} target="_blank" rel="noreferrer">{`Designed & Developed By @${TWITTER_HANDLE}`}</a>
                </div>
            </div>
        </div>
    );
};

export default Home;