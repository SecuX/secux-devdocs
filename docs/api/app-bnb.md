---
title: '@secux/app-bnb'
---


> [Binance Chain](https://www.binance.org/) is a blockchain software system developed by Binance and its community.

## SecuxBNB

BNB package for SecuX device

**Kind**: global class  
<h2>Properties</h2>

### prepareAddress
***
SecuxBNB.prepareAddress ⇒ <code>communicationData</code>
***

*Prepare data for address generation.*

**Returns**: <code>communicationData</code> - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/714'/... |

<br/>

### addressConvert
***
SecuxBNB.addressConvert(publickey) ⇒ <code>string</code>
***

*Convert secp256k1 publickey to BNB address.*

**Returns**: <code>string</code> - BNB address  

| Param | Type | Description |
| --- | --- | --- |
| publickey | <code>string</code> \| <code>Buffer</code> | secp256k1 publickey |

<br/>

### resolveAddress
***
SecuxBNB.resolveAddress(response) ⇒ <code>string</code>
***

*Generate address from response data.*

**Returns**: <code>string</code> - BNB address  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |

<br/>

### preparePublickey
***
SecuxBNB.preparePublickey(path) ⇒ <code>communicationData</code>
***

*Prepare data for secp256k1 publickey.*

**Returns**: <code>communicationData</code> - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/714'/... |

<br/>

### resolvePublickey
***
SecuxBNB.resolvePublickey(response) ⇒ <code>string</code>
***

*Resolve secp256k1 publickey from response data.*

**Returns**: <code>string</code> - secp256k1 publickey (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |

<br/>

### prepareXPublickey
***
SecuxBNB.prepareXPublickey(path) ⇒ <code>communicationData</code>
***

*Prepare data for xpub.*

**Returns**: <code>communicationData</code> - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/714'/... |

<br/>

### resolveXPublickey
***
SecuxBNB.resolveXPublickey(response, path) ⇒ <code>string</code>
***

*Resolve xpub from response data.*

**Returns**: <code>string</code> - xpub  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |
| path | <code>string</code> | m/44'/714'/... |

<br/>

### prepareSign
***
SecuxBNB.prepareSign(path, content) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing.*

**Returns**: [<code>prepared</code>](#prepared) - return object  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/714'/... |
| content | [<code>txDetail</code>](#txDetail) | transaction object |

<br/>

### resolveSignature
***
SecuxBNB.resolveSignature(response) ⇒ <code>string</code>
***

*Resolve signature from response data*

**Returns**: <code>string</code> - signature (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |

<br/>

### resolveTransaction
***
SecuxBNB.resolveTransaction(response, serialized) ⇒ <code>string</code>
***

*Resolve raw transaction for broadcasting*

**Returns**: <code>string</code> - signed raw transaction  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>communicationData</code> | data from device |
| serialized | <code>communicationData</code> |  |

<br/>


## Types


<a name="SecuxBNB"></a>





<a name="txDetail"></a>

### txDetail

| Name | Type | Description |
| --- | --- | --- |
| publickey | <code>string</code> \| <code>Buffer</code> | sender's publickey |
| to | <code>string</code> | receiving address |
| amount | <code>number</code> | BNB has 8 decimals |
| [chainId] | <code>string</code> | use specific BNB network |
| [accountNumber] | <code>number</code> | for replay protection |
| [sequence] | <code>number</code> | for replay protection |
| [memo] | <code>string</code> |  |


<a name="prepared"></a>

### prepared

| Name | Type | Description |
| --- | --- | --- |
| commandData | <code>communicationData</code> | data for sending to device |
| serialized | <code>communicationData</code> |  |

