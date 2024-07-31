import { useWeb3Modal } from '@web3modal/ethers5/react';
import { useWeb3ModalAccount } from '@web3modal/ethers5/react'

import './ConnectButton.css'


export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal()
  const { chainId, isConnected, address} = useWeb3ModalAccount()

  return (
    <>

      {isConnected ? <w3m-button/> : (
        <button className="ant-btn ant-btn-primary" onClick={() => open()}>Connect Wallet</button>
      )}


      {/* <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button> */}
    </>
  )
}