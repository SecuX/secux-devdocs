/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as components from './components';
import { Buffer } from "buffer";
import { ITransport } from "@secux/transport";
import { SecuxWebUSB } from "@secux/transport-webusb";
import { SecuxWebBLE } from "@secux/transport-webble";
import * as btcLib from "@secux/app-btc";
import mempoolJS from "@mempool/mempool.js";
import * as ethLib from "@secux/app-eth";
import Web3 from "web3";
import * as bnbLib from "@secux/app-bnb";
import * as adaLib from "@secux/app-ada";
import { Cardano } from "@cardano-sdk/core";
import { blockfrostWalletProvider } from "@cardano-sdk/blockfrost";
import * as xrpLib from "@secux/app-xrp";
import * as xrpl from "xrpl";
import * as trxLib from "@secux/app-trx";
const TronWeb = require("tronweb");


// Add react-live imports you need here
const ReactLiveScope = {
    React,
    ...React,
    ...components,
    Buffer,
    ITransport,
    SecuxWebUSB,
    SecuxWebBLE,
    ...btcLib,
    mempoolJS,
    ...ethLib,
    Web3,
    ...bnbLib,
    ...adaLib,
    Cardano,
    blockfrostWalletProvider,
    ...xrpLib,
    xrpl,
    ...trxLib,
    TronWeb
};

export default ReactLiveScope;