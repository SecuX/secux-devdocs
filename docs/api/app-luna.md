---
title: '@secux/app-luna'
---


> Terra is a public blockchain protocol deploying a suite of algorithmic decentralized stablecoins which underpin a thriving ecosystem that brings DeFi to the masses.

<a name="SecuxLUNA"></a>

## SecuxLUNA
LUNA package for SecuX device

**Kind**: global class  
<h2>Properties</h2>

### addressConvert
***
SecuxLUNA.addressConvert(publickey, type) ⇒ <code>string</code>
***

*Convert secp256k1 publickey to LUNA address.*

**Returns**: <code>string</code> - LUNA address  

| Param | Type | Description |
| --- | --- | --- |
| publickey | <code>string</code> \| <code>Buffer</code> | secp256k1 publickey |
| type | [<code>AddressType</code>](#AddressType) | account/validator/pubkey address |

<br/>

### prepareAddress
***
SecuxLUNA.prepareAddress(path) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for address generation.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path, ex: m/44'/330'/0'/0/0 |

<br/>

### resolveAddress
***
SecuxLUNA.resolveAddress(response, type) ⇒ <code>string</code>
***

*Generate address from response data.*

**Returns**: <code>string</code> - LUNA address  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| type | [<code>AddressType</code>](#AddressType) | account/validator/pubkey address |

<br/>

### preparePublickey
***
SecuxLUNA.preparePublickey(path) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for secp256k1 publickey.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path, ex: m/44'/330'/0'/0/0 |

<br/>

### resolvePublickey
***
SecuxLUNA.resolvePublickey(response) ⇒ <code>string</code>
***

*Resolve secp256k1 publickey from response data.*

**Returns**: <code>string</code> - secp256k1 publickey (base64-encoded string)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### prepareXPublickey
***
SecuxLUNA.prepareXPublickey(path) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for xpub.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path, ex: m/44'/330'/0'/0/0 |

<br/>

### resolveXPublickey
***
SecuxLUNA.resolveXPublickey(response, path) ⇒ <code>string</code>
***

*Resolve xpub from response data.*

**Returns**: <code>string</code> - xpub  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| path | <code>string</code> | BIP32 path, ex: m/44'/330'/0'/0/0 |

<br/>

### prepareSign
***
SecuxLUNA.prepareSign(signers, messages, params) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing.*


| Param | Type | Description |
| --- | --- | --- |
| signers | [<code>Signer</code>](#Signer) | array of signer |
| messages | [<code>Array&lt;IMessage&gt;</code>](#IMessage) | each message represents a instruction |
| params | [<code>TxOption</code>](#TxOption) |  |

<br/>

### resolveSignatureList
***
SecuxLUNA.resolveSignatureList(response) ⇒ <code>Array&lt;string&gt;</code>
***

*Reslove signature from response data.*

**Returns**: <code>Array&lt;string&gt;</code> - signature array of base64-encoded string  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### resolveTransaction
***
SecuxLUNA.resolveTransaction(response, serialized) ⇒ <code>string</code>
***

*Serialize transaction wtih signature for broadcasting.*

**Returns**: <code>string</code> - signed raw transaction  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) \| [<code>Array&lt;communicationData&gt;</code>](#communicationData) | data from device |
| serialized | [<code>communicationData</code>](#communicationData) |  |

<br/>

### simulate
***
SecuxLUNA.simulate(signers, messages, [params]) ⇒ <code>string</code>
***

*Simulate a transaction for estimating gas.*

**Returns**: <code>string</code> - simulated transaction  

| Param | Type | Description |
| --- | --- | --- |
| signers | [<code>Array&lt;Signer&gt;</code>](#Signer) | array of signer |
| messages | [<code>Array&lt;IMessage&gt;</code>](#IMessage) | each message represents a instruction |
| [params] | [<code>TxOption</code>](#TxOption) |  |

<br/>

## Types

<a name="communicationData"></a>

### communicationData : <code>string</code> \| <code>Buffer</code>
*Data type for transmission.*

<br/>

<a name="AddressType"></a>

### AddressType : <code>enum</code>
*Address Type.*

| Name | Type | Description |
| --- | --- | --- |
| account | <code>string</code> | account |
| validator | <code>string</code> | validator |
| pubkey | <code>string</code> | pubkey |
<br/>

<a name="Signer"></a>

### Signer : <code>object</code>
*The account to sign a transaction.*

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path, ex: m/44'/330'/0'/0/0 |
| publickey | <code>string</code> \| <code>Buffer</code> | secp256k1 publickey from `path` |
| sequence | <code>number</code> | the number of transactions sent from this address |
| accountNumber | <code>number</code> | the account number from blockchain |
<br/>

<a name="IMessage"></a>

### IMessage : <code>interface</code>
*Message interface definition.*

| Name | Type |
| --- | --- |
| toAmino | <code>function</code> | 
| toData | <code>function</code> | 
| toProto | <code>function</code> | 
| packAny | <code>function</code> | 
<br/>

<a name="TxOption"></a>

### TxOption : <code>object</code>
*Transaction configuration.*

| Name | Type | Description |
| --- | --- | --- |
| fee | <code>string</code> \| <code>Coins</code> | the amount of coins to be paid as a fee |
| gasLimit | <code>number</code> | the maximum gas that can be used in transaction processing |
| [chainId] | <code>string</code> | blockchain network identifier |
| [memo] | <code>string</code> |  |
| [timeoutHeight] | <code>string</code> | timeout height relative to the current block height |
| [payer] | <code>string</code> | payer’s account address |
| [granter] | <code>string</code> | granter’s account address |
<br/>

<a name="prepared"></a>

### prepared : <code>object</code>
*Object for the signing and validation.*

| Name | Type | Description |
| --- | --- | --- |
| commands | [<code>Array&lt;communicationData&gt;</code>](#communicationData) | data for sending to device |
| serialized | [<code>communicationData</code>](#communicationData) | unsigned raw transaction |
<br/>

