import React, { useState } from "react";
import { Modal, Stack } from "react-bootstrap";
import { useConnectedWallet, useWallet } from "@terra-money/wallet-provider";

import { BsX } from "react-icons/bs";
// function ConnectWalletModal(props) {
//   const [show, setShow] = useState(false);
//   const walletConnectToggle = () => {
//     setShow(!show);
//   };

//   const { disconnect } = useWallet();
//   const { connect } = useWallet();
//   const connectedWallet = useConnectedWallet();
//   const connectWallet = (value) => {
//     connect(value);
//     setTimeout(() => !show, 500);
//   };
//   return (
//     <>
//       <button
//         className="nav-item btn ml-lg-auto btn-bordered-white"
//         onClick={connectedWallet ? () => disconnect() : () => connectWallet()}
//       >
//         {connectedWallet ? (
//           cropAddress(connectedWallet.walletAddress)
//         ) : (
//           <>
//             <i className="icon-wallet mr-md-2" />
//             <span> CONNECT WALLET</span>
//           </>
//         )}
//       </button>

//       {/* <Modal show={show} centered className="connect-wallet-modal">
//         <Modal.Body>
//           <h2 className="title">Connect your wallet</h2>
//           <div className="button-container">
//             <button
//               type="button"
//               className="btn btn-blue w-100"
//               onClick={() => connectWallet("EXTENSION")}
//             >
//               Connect with extension
//             </button>
//             <button
//               type="button"
//               className="btn btn-blue w-100"
//               onClick={() => connectWallet("WALLETCONNECT")}
//             >
//               Connect with mobile
//             </button>
//           </div>
//         </Modal.Body>
//       </Modal> */}

//       {/* <Modal
//         {...props}
//         centered
//         dialogClassName="connect-wallet-modal"
//         show={show}      >
//         <Modal.Body>
//           <h3 className="title">Connect your wallet</h3>
//           <Stack className="mt-5" direction="vertical" gap={3}>
//             <button
//               type="button"
//               className="btn btn-pink-outline w-100"
//               onClick={() => connectWallet("EXTENSION")}
//             >
//               Connect with extension
//             </button>
//             <button
//               type="button"
//               className="btn btn-pink-outline w-100"
//               onClick={() => connectWallet("WALLETCONNECT")}
//             >
//               Connect with mobile
//             </button>
//           </Stack>
//         </Modal.Body>
//       </Modal> */}
//     </>
//   );
// }

// export default ConnectWalletModal;
// import React, { useState } from "react";
// import { Modal } from "react-bootstrap";
// import { useConnectedWallet, useWallet } from "@terra-money/wallet-provider";

// import { cropAddress } from "../../utils/index";
// function ConnectWalletModal(props) {
//   const [show, setShow] = useState(false);
//   const walletConnectToggle = () => {
//     setShow(!show);
//   };

//   const { disconnect } = useWallet();
//   const { connect } = useWallet();
//   const connectedWallet = useConnectedWallet();
//   const connectWallet = (value) => {
//     connect(value);
//     setTimeout(() => !show, 500);
//   };
//   return (
//     <>
//       {/* <button type="button" className="btn buttonConnectWallet"  onClick={walletConnectToggle}>
//         CONNECT WALLET
//       </button> */}
//       {/* <button
//         type="button"
//         className="btn buttonConnectWallet"
//         onClick={connectedWallet ? () => disconnect() : () => connectWallet()}
//       >
//         {connectedWallet ? (
//           cropAddress(connectedWallet.walletAddress)
//         ) : (
//           <>
//             <span> CONNECT WALLET</span>
//           </>
//         )}
//       </button>
//       <Modal show={show} centered className="connect-wallet-modal">
//         <Modal.Body>
//           <h2 className="title">Connect your wallet</h2>
//           <div className="button-container">
//             <button
//               type="button"
//               className="btn btn-blue w-100"
//               onClick={() => connectWallet("EXTENSION")}
//             >
//               Connect with extension
//             </button>
//             <button
//               type="button"
//               className="btn btn-blue w-100"
//               onClick={() => connectWallet("WALLETCONNECT")}
//             >
//               Connect with mobile
//             </button>
//           </div>
//         </Modal.Body>
//       </Modal> */}

//       {/* <button
//         type="button"
//         className="btn buttonConnectWallet"
//         onClick={walletConnectToggle}
//       >
//         <span> CONNECT WALLET</span>
//       </button> */}

//       <Modal {...props} centered dialogClassName="connect-wallet-modal">
//         <Modal.Body>
//           <h3 className="title">Connect your wallet</h3>
//           <Stack className="mt-5" direction="vertical" gap={3}>
//             <button
//               type="button"
//               className="btn btn-pink-outline w-100"
//               onClick={() => connectWallet("EXTENSION")}
//             >
//               Connect with extension
//             </button>
//             <button
//               type="button"
//               className="btn btn-pink-outline w-100"
//               onClick={() => connectWallet("WALLETCONNECT")}
//             >
//               Connect with mobile
//             </button>
//           </Stack>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default ConnectWalletModal;

function ConnectWalletModal(props) {
  const { connect } = useWallet();

  const connectWallet = (value) => {
    connect(value);
    setTimeout(() => props.onHide(), 500);
  };

  return (
    <Modal {...props} centered dialogClassName="connect-wallet-modal">
      <Modal.Body>
        <div className="TitleWalletModel">Connect your wallet</div>
        <Stack className="mt-5" direction="vertical" gap={3}>
          <div className="button-container">
            <button
              type="button"
              className="nav-item btn ml-lg-auto btn-bordered-white"
              onClick={() => connectWallet("EXTENSION")}
            >
              Connect with extension
            </button>
            <button
              type="button"
              className="nav-item btn ml-lg-auto btn-bordered-white"
              onClick={() => connectWallet("WALLETCONNECT")}
            >
              Connect with mobile
            </button>
          </div>
        </Stack>
      </Modal.Body>
    </Modal>
  );
}

export default ConnectWalletModal;
