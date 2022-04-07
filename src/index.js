import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Providers from "./components/providers/Providers";

import { WalletProvider } from "@terra-money/wallet-provider";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

serviceWorkerRegistration.register();

reportWebVitals();
