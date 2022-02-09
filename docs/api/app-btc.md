---
title: '@secux/app-btc'
---


> Bitcoin is a decentralized digital currency that you can buy, sell and exchange directly, without an intermediary like a bank. Bitcoin’s creator, Satoshi Nakamoto, originally described the need for “an electronic payment system based on cryptographic proof instead of trust.”

<a name="SecuxBTC"></a>

## SecuxBTC
BTC package for SecuX device

**Kind**: global class  
<h2>Properties</h2>

### addressConvert
***
SecuxBTC.addressConvert(publickey, path) ⇒ <code>string</code>
***

*Convert publickey to BTC address.*

**Returns**: <code>string</code> - address  

| Param | Type | Description |
| --- | --- | --- |
| publickey | <code>string</code> \| <code>Buffer</code> | secp256k1 publickey (hex string or buffer) |
| path | <code>string</code> \| [<code>PathObject</code>](#PathObject) | BIP32 path, ex: m/44'/0'/0'/0/0 |

<br/>

### prepareAddress
***
SecuxBTC.prepareAddress(path, [option]) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for address generation.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path, ex: m/44'/0'/0'/0/0 |
| [option] | [<code>AddressOption</code>](#AddressOption) | for path validation |

<br/>

### resolveAddress
***
SecuxBTC.resolveAddress(response, path) ⇒ <code>string</code>
***

*Generate address from response data.*

**Returns**: <code>string</code> - address  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| path | <code>string</code> \| [<code>PathObject</code>](#PathObject) | BIP32 path, ex: m/44'/0'/0'/0/0 |

<br/>

### preparePublickey
***
SecuxBTC.preparePublickey(path, [option]) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for secp256k1 publickey.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path, ex: m/44'/0'/0'/0/0 |
| [option] | [<code>AddressOption</code>](#AddressOption) | for path validation |

<br/>

### resolvePublickey
***
SecuxBTC.resolvePublickey(response) ⇒ <code>string</code>
***

*Resolve secp256k1 publickey from response data.*

**Returns**: <code>string</code> - secp256k1 publickey (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### prepareXPublickey
***
SecuxBTC.prepareXPublickey(path) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for extended publickey generation.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path, ex: m/44'/0'/0'/0/0 |

<br/>

### resolveXPublickey
***
SecuxBTC.resolveXPublickey(response, path) ⇒ <code>string</code>
***

*Generate extended publickey from response data.*

**Returns**: <code>string</code> - extended publickey (xpub, ypub or zpub)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| path | <code>string</code> | BIP32 path, ex: m/44'/0'/0'/0/0 |

<br/>

### prepareSign
***
SecuxBTC.prepareSign(inputs, outputs, [option]) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing.*


| Param | Type | Description |
| --- | --- | --- |
| inputs | [<code>txInput</code>](#txInput) | array of utxo object |
| outputs | [<code>txOutput</code>](#txOutput) | output object |
| [option] | [<code>SignOption</code>](#SignOption) |  |

<br/>

### resolveSignatureList
***
SecuxBTC.resolveSignatureList(response) ⇒ <code>Array&lt;string&gt;</code>
***

*Reslove signature from response data.*

**Returns**: <code>Array&lt;string&gt;</code> - signature array of hex string  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### resolveTransaction
***
SecuxBTC.resolveTransaction(response, unsigned, publickeys, [coin]) ⇒ <code>string</code>
***

*Serialize transaction wtih signature for broadcasting.*

**Returns**: <code>string</code> - signed raw transaction  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| unsigned | <code>string</code> | unsigned raw transaction |
| publickeys | [<code>Array&lt;communicationData&gt;</code>](#communicationData) | secp256k1 publickey correspond to each input |
| [coin] | [<code>CoinType</code>](#CoinType) | default: CoinType.BITCOIN |

<br/>

### deriveAddress
***
SecuxBTC.deriveAddress(xpub, change, addressIndex, [option]) ⇒ <code>string</code>
***

*Derive xpub and generate BTC address.*

**Returns**: <code>string</code> - address  

| Param | Type | Description |
| --- | --- | --- |
| xpub | <code>string</code> | extended publickey (base58 encoded), depth must be 3 |
| change | <code>number</code> | BIP44 change field |
| addressIndex | <code>number</code> | BIP44 address_index field |
| [option] | [<code>AddressOption</code>](#AddressOption) | for address generation |

<br/>

### getVirtualSize
***
SecuxBTC.getVirtualSize(inputs, outputs) ⇒ <code>number</code>
***

*Estimate virtual size of transaction.*

**Returns**: <code>number</code> - virtual size  

| Param | Type |
| --- | --- |
| inputs | [<code>Array&lt;ScriptType&gt;</code>](#ScriptType) | 
| outputs | [<code>Array&lt;ScriptType&gt;</code>](#ScriptType) | 

<br/>

## Types

<a name="communicationData"></a>

### communicationData : <code>string</code> \| <code>Buffer</code>
*Data type for transmission.*

<br/>

<a name="ScriptType"></a>

### ScriptType : <code>enum</code>
*Script type for input/output.*

| Name | Type | Description |
| --- | --- | --- |
| P2PKH | <code>number</code> | 0 |
| P2WPKH | <code>number</code> | 1 |
| P2SH_P2PKH | <code>number</code> | 2 |
| P2SH_P2WPKH | <code>number</code> | 3 |
| P2TR | <code>number</code> | 4 |
<br/>

<a name="CoinType"></a>

### CoinType : <code>enum</code>
*Coins that are nearly identical to Bitcoin.*

| Name | Type | Description |
| --- | --- | --- |
| BITCOIN | <code>number</code> | 0 |
| TESTNET | <code>number</code> | 1 |
| REGTEST | <code>number</code> | 2 |
| LITECOIN | <code>number</code> | 3 |
| BITCOINCASH | <code>number</code> | 4 |
| GROESTL | <code>number</code> | 5 |
| DIGIBYTE | <code>number</code> | 6 |
| DASH | <code>number</code> | 7 |
| DOGECOIN | <code>number</code> | 8 |
<br/>

<a name="PathObject"></a>

### PathObject : <code>object</code>
*Parameters for address generation.*

| Name | Type | Description |
| --- | --- | --- |
| coin | [<code>CoinType</code>](#CoinType) | enum |
| script | [<code>ScriptType</code>](#ScriptType) | enum |
<br/>

<a name="AddressOption"></a>

### AddressOption : <code>object</code>
*Options for path validation.*

| Name | Type | Description |
| --- | --- | --- |
| [coin] | [<code>CoinType</code>](#CoinType) | enum |
| [script] | [<code>ScriptType</code>](#ScriptType) | enum |
<br/>

<a name="txInput"></a>

### txInput : <code>object</code>
*UTXO.*

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path refer to utxo |
| publickey | <code>string</code> \| <code>Buffer</code> | scep256k1 publickey from `path` |
| hash | <code>string</code> | referenced transaction hash |
| vout | <code>number</code> | referenced transaction output index |
| satoshis | <code>number</code> | referenced transaction output amount |
| [script] | [<code>ScriptType</code>](#ScriptType) | script type related to `path` |
| [txHex] | <code>string</code> | referenced raw transaction for validation |
<br/>

<a name="txOutput"></a>

### txOutput : <code>object</code>
*Outputs consist of one payment and one or no return.*

| Name | Type | Description |
| --- | --- | --- |
| to | [<code>txOutputAddress</code>](#txOutputAddress) \| [<code>txOutputScriptExtened</code>](#txOutputScriptExtened) | receiving address information |
| [utxo] | [<code>txOutputScriptExtened</code>](#txOutputScriptExtened) | changes |
<br/>

<a name="txOutputAddress"></a>

### txOutputAddress : <code>object</code>
*Receiving address and payment.*

| Name | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | receiving address |
| satoshis | <code>number</code> | receiving amount |
<br/>

<a name="txOutputScriptExtened"></a>

### txOutputScriptExtened : <code>object</code>
*Payment for another held account.*

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path |
| publickey | <code>string</code> \| <code>Buffer</code> | scep256k1 publickey from `path` |
| satoshis | <code>number</code> | amount |
| [script] | [<code>ScriptType</code>](#ScriptType) | script type related to `path` |
<br/>

<a name="SignOption"></a>

### SignOption : <code>object</code>
*Options used during the signing.*

| Name | Type | Description |
| --- | --- | --- |
| [coin] | [<code>CoinType</code>](#CoinType) | check cointype for each input |
| [feeRate] | <code>number</code> | calculate optimal transaction fee and replace it |
<br/>

<a name="prepared"></a>

### prepared : <code>object</code>
*Object for the signing and validation.*

| Name | Type | Description |
| --- | --- | --- |
| commandData | [<code>communicationData</code>](#communicationData) | data for sending to device |
| rawTx | <code>string</code> | unsigned raw transaction |
<br/>

