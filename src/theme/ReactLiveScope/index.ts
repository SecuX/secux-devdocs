/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (typeof TextEncoder !== 'function') {
    const TextEncodingPolyfill = require('text-encoding');
    Object.assign(global, { TextEncoder: TextEncodingPolyfill.TextEncoder });
    Object.assign(global, { TextDecoder: TextEncodingPolyfill.TextDecoder });
}

import React from 'react';
import * as components from './components';
import { Buffer } from "buffer";
import randomBytes from "randombytes";
import { ITransport } from "@secux/transport";
import { SecuxWebUSB } from "@secux/transport-webusb";
import { SecuxWebBLE } from "@secux/transport-webble";
import { SecuxTransactionTool } from "@secux/protocol-transaction";
import * as protocolInterface from "@secux/protocol-transaction/lib/interface";
import * as btcLib from "@secux/app-btc";
import mempoolJS from "@mempool/mempool.js";
import * as ethLib from "@secux/app-eth";
import { ethers } from "ethers";
import * as bnbLib from "@secux/app-bnb";
import * as adaLib from "@secux/app-ada";
import { Cardano } from "@cardano-sdk/core";
import { blockfrostWalletProvider } from "@cardano-sdk/blockfrost";
import * as xrpLib from "@secux/app-xrp";
import * as xrpl from "xrpl";
import * as trxLib from "@secux/app-trx";
const TronWeb = require("tronweb");
import * as xlmLib from "@secux/app-xlm";
import axios from "axios";


// Add react-live imports you need here
const ReactLiveScope = {
    React,
    ...React,
    ...components,
    Buffer,
    randomBytes,
    ITransport,
    SecuxWebUSB,
    SecuxWebBLE,
    SecuxTransactionTool,
    ...protocolInterface,
    ...btcLib,
    mempoolJS,
    ...ethLib,
    ethers,
    ...bnbLib,
    ...adaLib,
    Cardano,
    blockfrostWalletProvider,
    ...xrpLib,
    xrpl,
    ...trxLib,
    TronWeb,
    ...xlmLib,
    axios
};

export default ReactLiveScope;