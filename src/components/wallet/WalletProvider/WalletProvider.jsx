import { WalletProvider as Provider } from "@terra-money/wallet-provider";

import { TESTNET, MAINNET, walletConnectChainIds } from "../../../utils/const";

const WalletProvider = ({ children, ...props }) => (
  <Provider
    defaultNetwork={process.env.NODE_ENV === "development" ? TESTNET : MAINNET}
    walletConnectChainIds={walletConnectChainIds}
    {...props}
  >
    {children}
  </Provider>
);

export default WalletProvider;
