import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";
import WalletProvider from "../wallet/WalletProvider/WalletProvider";

const Providers = ({ children }) => (
  <BrowserRouter>
    <HelmetProvider>
      <RecoilRoot>
        <WalletProvider>{children}</WalletProvider>
      </RecoilRoot>
    </HelmetProvider>
  </BrowserRouter>
);

export default Providers;
