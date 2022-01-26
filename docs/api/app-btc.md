---
title: '@secux/app-btc'
---


> Bitcoin is a decentralized digital currency that you can buy, sell and exchange directly, without an intermediary like a bank. Bitcoin’s creator, Satoshi Nakamoto, originally described the need for “an electronic payment system based on cryptographic proof instead of trust.”

## SecuxBTC

BTC package for SecuX device

**Kind**: global class  
<h2>Properties</h2>

### prepareAddress
***
SecuxBTC.prepareAddress ⇒ <code>communicationData</code>
***

*Prepare data for address generation.*

**Returns**: <code>communicationData</code> - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path, ex: m/44'/0'/0'/0/0 |
| [option] | [<code>AddressOption</code>](#AddressOption) | for path validation |

<br/>

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

### resolveAddress
***
SecuxBTC.resolveAddress(response, path) ⇒ <code>string</code>
***

*Generate address from response data.*

**Returns**: <code>string</code> - address  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |
| path | <code>string</code> \| [<code>PathObject</code>](#PathObject) | BIP32 path, ex: m/44'/0'/0'/0/0 |

<br/>

### preparePublickey
***
SecuxBTC.preparePublickey(path, [option]) ⇒ <code>communicationData</code>
***

*Prepare data for secp256k1 publickey.*

**Returns**: <code>communicationData</code> - data for sending to device  

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
| response | <code>communicationData</code> | data from device |

<br/>

### prepareXPublickey
***
SecuxBTC.prepareXPublickey(path) ⇒ <code>communicationData</code>
***

*Prepare data for extended publickey generation.*

**Returns**: <code>communicationData</code> - data for sending to device  

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
| response | <code>communicationData</code> | data from device |
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
| response | <code>communicationData</code> | data from device |

<br/>

### resolveTransaction
***
SecuxBTC.resolveTransaction(response, unsigned, publickeys, [coin]) ⇒ <code>string</code>
***

*Serialize transaction wtih signature for broadcasting.*

**Returns**: <code>string</code> - signed raw transaction  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |
| unsigned | <code>string</code> | unsigned raw transaction |
| publickeys | <code>Array&lt;communicationData&gt;</code> | secp256k1 publickey correspond to each input |
| [coin] | <code>CoinType</code> | default: CoinType.BITCOIN |

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


## Types


<a name="SecuxBTC"></a>





<a name="txInput"></a>

### txInput

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path refer to utxo |
| publickey | <code>string</code> \| <code>Buffer</code> | scep256k1 publickey from `path` |
| hash | <code>string</code> | referenced transaction hash |
| vout | <code>number</code> | referenced transaction output index |
| satoshis | <code>number</code> | referenced transaction output amount |
| [script] | <code>ScriptType</code> | script type related to `path` |
| [txHex] | <code>string</code> | referenced raw transaction for validation |


<a name="txOutput"></a>

### txOutput

| Name | Type | Description |
| --- | --- | --- |
| to | [<code>txOutputAddress</code>](#txOutputAddress) \| [<code>txOutputScriptExtened</code>](#txOutputScriptExtened) | receiving address information |
| [utxo] | [<code>txOutputScriptExtened</code>](#txOutputScriptExtened) | changes |


<a name="SignOption"></a>

### SignOption

| Name | Type | Description |
| --- | --- | --- |
| [coin] | <code>CoinType</code> | enum |
| [feeRate] | <code>number</code> | base fee per vbyte |


<a name="txOutputAddress"></a>

### txOutputAddress

| Name | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | receiving address |
| satoshis | <code>number</code> | receiving amount |


<a name="txOutputScriptExtened"></a>

### txOutputScriptExtened

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path |
| publickey | <code>string</code> \| <code>Buffer</code> | scep256k1 publickey from `path` |
| satoshis | <code>number</code> | amount |
| [script] | <code>ScriptType</code> | script type related to `path` |


<a name="prepared"></a>

### prepared

| Name | Type | Description |
| --- | --- | --- |
| commandData | <code>communicationData</code> | data for sending to device |
| rawTx | <code>string</code> | unsigned raw transaction |


<a name="PathObject"></a>

### PathObject

| Name | Type | Description |
| --- | --- | --- |
| coin | <code>CoinType</code> | enum |
| script | <code>ScriptType</code> | enum |


<a name="AddressOption"></a>

### AddressOption

| Name | Type | Description |
| --- | --- | --- |
| [coin] | <code>CoinType</code> | enum |
| [script] | <code>ScriptType</code> | enum |

