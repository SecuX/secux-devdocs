---
title: '@secux/app-trx'
---


> TRON is an ambitious project dedicated to building the infrastructure for a truly decentralized Internet. The TRON Protocol, one of the largest blockchain based.

<a name="SecuxTRX"></a>

## SecuxTRX
TRX package for SecuX device

**Kind**: global class  
<h2>Properties</h2>

### addressConvert
***
SecuxTRX.addressConvert(publickey) ⇒ <code>string</code>
***

*Convert secp256k1 publickey to TRX address.*

**Returns**: <code>string</code> - TRX address  

| Param | Type |
| --- | --- |
| publickey | <code>string</code> \| <code>Buffer</code> | 

<br/>

### prepareAddress
***
SecuxTRX.prepareAddress(path) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for address generation.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/195'/... |

<br/>

### resolveAddress
***
SecuxTRX.resolveAddress(response) ⇒ <code>string</code>
***

*Generate address from response data.*

**Returns**: <code>string</code> - TRX address  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### preparePublickey
***
SecuxTRX.preparePublickey(path) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for secp256k1 publickey.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/195'/... |

<br/>

### resolvePublickey
***
SecuxTRX.resolvePublickey(response) ⇒ <code>string</code>
***

*Resolve secp256k1 publickey from response data.*

**Returns**: <code>string</code> - secp256k1 publickey  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### prepareXPublickey
***
SecuxTRX.prepareXPublickey(path) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for xpub.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/195'/... |

<br/>

### resolveXPublickey
***
SecuxTRX.resolveXPublickey(response, path) ⇒
***

*Resolve xpub from response data.*

**Returns**: xpub  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| path | <code>string</code> | m/44'/195'/... |

<br/>

### prepareSign
***
SecuxTRX.prepareSign(path, content) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing.*

**Returns**: [<code>prepared</code>](#prepared) - prepared object  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/195'/... |
| content | [<code>transferData</code>](#transferData) \| [<code>trc10\_Data</code>](#trc10_Data) \| [<code>trc20\_Data</code>](#trc20_Data) | transaction object |

<br/>

### resolveSignature
***
SecuxTRX.resolveSignature(response) ⇒ <code>string</code>
***

*Resolve signature from response data.*

**Returns**: <code>string</code> - signature (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### resolveTransaction
***
SecuxTRX.resolveTransaction(response, serialized) ⇒ <code>string</code>
***

*Resolve transaction for broadcasting.*

**Returns**: <code>string</code> - signed raw transaction  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| serialized | [<code>communicationData</code>](#communicationData) | raw transaction |

<br/>

## Types

<a name="communicationData"></a>

### communicationData : <code>string</code> \| <code>Buffer</code>
*Data type for transmission.*

<br/>

<a name="transferData"></a>

### transferData : <code>object</code>
*The payment object.*

| Name | Type | Description |
| --- | --- | --- |
| from | <code>string</code> | sending address |
| to | <code>string</code> | receiving address |
| amount | <code>number</code> | transfer amount |
| blockID | <code>string</code> |  |
| blockNumber | <code>number</code> |  |
| timestamp | <code>number</code> |  |
| [feeLimit] | <code>number</code> |  |
| [expiration] | <code>number</code> |  |
<br/>

<a name="trc10_Data"></a>

### trc10\_Data : <code>object</code>
*The payment object for TRC-10.*

| Name | Type | Description |
| --- | --- | --- |
| from | <code>string</code> | sending address |
| to | <code>string</code> | receiving address |
| token | <code>string</code> \| <code>number</code> | token id number |
| amount | <code>number</code> | transfer amount |
| blockID | <code>string</code> |  |
| blockNumber | <code>number</code> |  |
| timestamp | <code>number</code> |  |
| [feeLimit] | <code>number</code> |  |
| [expiration] | <code>number</code> |  |
<br/>

<a name="trc20_Data"></a>

### trc20\_Data : <code>object</code>
*The payment object for TRC-20.*

| Name | Type | Description |
| --- | --- | --- |
| from | <code>string</code> | sending address |
| to | <code>string</code> | receiving address |
| amount | <code>number</code> \| <code>string</code> | transfer amount |
| contract | <code>string</code> | contract address |
| [data] | <code>string</code> | abi encoded string |
| blockID | <code>string</code> |  |
| blockNumber | <code>number</code> |  |
| timestamp | <code>number</code> |  |
| [callValue] | <code>number</code> | amount of TRX to send to the contract when triggers. |
| [tokenId] | <code>number</code> | id of TRC-10 token to be sent to the contract. |
| [tokenValue] | <code>number</code> | amount of TRC-10 token to send to the contract when triggers. |
| [feeLimit] | <code>number</code> |  |
| [expiration] | <code>number</code> |  |
<br/>

<a name="prepared"></a>

### prepared : <code>object</code>
*Object for the signing and validation.*

| Name | Type | Description |
| --- | --- | --- |
| commandData | [<code>communicationData</code>](#communicationData) | data for sending to device |
| rawTx | [<code>communicationData</code>](#communicationData) | unsigned raw transaction |
<br/>

