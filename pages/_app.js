import React from "react";
import CandyMachine from "../components/CandyMachine";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";

import "../styles/App.css";
//import "../styles/index.css";
import "../styles/globals.css";
import "../styles/CandyMachine.css";
import "@solana/wallet-adapter-react-ui/styles.css";

const App = ({ Component, pageProps }) => {
    const TWITTER_HANDLE = "Naswillow";
    const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
    const renderNotConnectedContainer = () => (
    <div>
      <img src="https://media.giphy.com/media/h5NLPVn3rg0Rq/giphy.gif" alt="emoji" />
      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter(), new TorusWalletAdapter()], [network]);

    return (
    <div className="App">
        <div className="container">
            <div className="header-container">
                <p className="header">Goritoto Drop</p>
                <p className="sub-text">NFT drop machine with fair mint</p>
                {/* Render your connect to wallet button right here */}
                {wallets.publicKey ? <CandyMachine walletAddress={wallets} /> : renderNotConnectedContainer()}
            </div>
            <div className="footer-container">
                <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
                <a className="footer-text" href={TWITTER_LINK} target="_blank" rel="noreferrer">{`built on @${TWITTER_HANDLE}`}</a>
            </div>
        </div>
    </div>
);
};

export default App;
