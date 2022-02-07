---
title: '@secux/app-xrp'
---


> XRP is a digital asset built for payments. It is the native digital asset on the XRP Ledger—an open-source, permissionless and decentralized blockchain technology that can settle transactions in 3-5 seconds.

## SecuxXRP

XRP package for SecuX device

**Kind**: global class  
<h2>Properties</h2>

### prepareAddress
***
SecuxXRP.prepareAddress ⇒ <code>communicationData</code>
***

*Prepare data for XRP address.*

**Returns**: <code>communicationData</code> - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/144'/... |

<br/>

### addressConvert
***
SecuxXRP.addressConvert(publickey) ⇒ <code>string</code>
***

*Convert secp256k1 publickey to XRP address.*

**Returns**: <code>string</code> - XRP address  

| Param | Type | Description |
| --- | --- | --- |
| publickey | <code>string</code> \| <code>Buffer</code> | secp256k1 publickey |

<br/>

### resolveAddress
***
SecuxXRP.resolveAddress(response) ⇒ <code>string</code>
***

*Generate XRP address from response data.*

**Returns**: <code>string</code> - XRP address  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |

<br/>

### preparePublickey
***
SecuxXRP.preparePublickey(path) ⇒ <code>communicationData</code>
***

*Prepare data for secp256k1 publickey.*

**Returns**: <code>communicationData</code> - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/144'/... |

<br/>

### resolvePublickey
***
SecuxXRP.resolvePublickey(response) ⇒ <code>string</code>
***

*Resolve secp256k1 publickey from response data.*

**Returns**: <code>string</code> - secp256k1 publickey (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |

<br/>

### prepareXPublickey
***
SecuxXRP.prepareXPublickey(path) ⇒ <code>communicationData</code>
***

*Prepare data for xpub.*

**Returns**: <code>communicationData</code> - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/144'/... |

<br/>

### resolveXPublickey
***
SecuxXRP.resolveXPublickey(response, path) ⇒ <code>string</code>
***

*Generate xpub from response data.*

**Returns**: <code>string</code> - xpub  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |
| path | <code>string</code> | m/44'/144'/... |

<br/>

### prepareSign
***
SecuxXRP.prepareSign(path, json) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing.*

**Returns**: [<code>prepared</code>](#prepared) - prepared object  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/144'/... |
| json | [<code>baseObject</code>](#baseObject) | transaction object (same as XRP api) |

<br/>

### resolveSignature
***
SecuxXRP.resolveSignature(response) ⇒ <code>string</code>
***

*Resolve signature from response data.*

**Returns**: <code>string</code> - signature (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |

<br/>

### resolveTransaction
***
SecuxXRP.resolveTransaction(response, serialized) ⇒ <code>string</code>
***

*Generate raw transaction for broadcasting.*

**Returns**: <code>string</code> - signed raw transaction  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |
| serialized | <code>communicationData</code> |  |

<br/>


## Types


<a name="SecuxXRP"></a>





<a name="baseObject"></a>

### baseObject

| Name | Type | Description |
| --- | --- | --- |
| TransactionType | <code>string</code> |  |
| SigningPubKey | <code>string</code> \| <code>Buffer</code> | ed25519 publickey |
| Sequence | <code>number</code> |  |
| Fee | <code>string</code> \| <code>number</code> |  |
| LastLedgerSequence | <code>number</code> |  |
| [Account] | <code>string</code> | sending address |
| [Destination] | <code>string</code> | receiving address |
| [Amount] | <code>string</code> \| <code>number</code> |  |
| [SourceTag] | <code>number</code> |  |
| [DestinationTag] | <code>number</code> |  |


<a name="prepared"></a>

### prepared

| Name | Type | Description |
| --- | --- | --- |
| commandData | <code>commandData</code> | data for sending to device |
| serialized | <code>commandData</code> |  |

