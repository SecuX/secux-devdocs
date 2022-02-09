---
title: '@secux/protocol-transaction'
sidebar_position: 1
---

<a name="SecuxTransactionTool"></a>

## SecuxTransactionTool
Protocol layer of transaction related method

**Kind**: global class  
<h2>Properties</h2>

### resolveResponse
***
SecuxTransactionTool.resolveResponse(response) ⇒ [<code>IAPDUResponse</code>](#IAPDUResponse)
***

*Resolve response from device.*

**Returns**: [<code>IAPDUResponse</code>](#IAPDUResponse) - response object  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### getPublickey
***
SecuxTransactionTool.getPublickey(path, curve) ⇒ [<code>communicationData</code>](#communicationData)
***

*Query publickey (uncompressed) command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 |
| curve | [<code>EllipticCurve</code>](#EllipticCurve) | 0: SECP256K1, 1: ED25519 |

<br/>

### resolvePublickey
***
SecuxTransactionTool.resolvePublickey(response, curve, compressed) ⇒ <code>string</code>
***

*Reslove publickey from SecuX device.*

**Returns**: <code>string</code> - publickey (base64 encoded)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) |  | data from device |
| curve | [<code>EllipticCurve</code>](#EllipticCurve) |  | 0: SECP256K1, 1: ED25519 |
| compressed | <code>boolean</code> | <code>true</code> | setting for secp256k1 |

<br/>

### getXPublickey
***
SecuxTransactionTool.getXPublickey(path, curve) ⇒ [<code>communicationData</code>](#communicationData)
***

*Query extended publickey command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 |
| curve | [<code>EllipticCurve</code>](#EllipticCurve) | 0: SECP256K1, 2: ED25519_ADA |

<br/>

### resolveXPublickey
***
SecuxTransactionTool.resolveXPublickey(response, path, curve) ⇒ <code>string</code>
***

*Reslove extended publickey from SecuX device.*

**Returns**: <code>string</code> - xpub  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| path | <code>string</code> | BIP32 |
| curve | [<code>EllipticCurve</code>](#EllipticCurve) | 0: SECP256K1, 2: ED25519_ADA |

<br/>

### signTransaction
***
SecuxTransactionTool.signTransaction(path, tx, [option]) ⇒ [<code>communicationData</code>](#communicationData)
***

*Sign a hashed transcation command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 |
| tx | [<code>communicationData</code>](#communicationData) | prepared transaction data |
| [option] | [<code>TransactionOption</code>](#TransactionOption) |  |

<br/>

### resolveSignature
***
SecuxTransactionTool.resolveSignature(response) ⇒ <code>string</code>
***

*Reslove signature from SecuX device.*

**Returns**: <code>string</code> - signature (base64 encoded)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### signTransactionList
***
SecuxTransactionTool.signTransactionList(paths, txs, [otpion]) ⇒ [<code>communicationData</code>](#communicationData)
***

*Sign hashed transactions command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| paths | <code>Array&lt;string&gt;</code> | BIP32 |
| txs | <code>Array&lt;Buffer&gt;</code> | prepared transaction data corresponding to above path |
| [otpion] | [<code>TransactionOption</code>](#TransactionOption) |  |

<br/>

### resolveSignatureList
***
SecuxTransactionTool.resolveSignatureList(response) ⇒ <code>Array&lt;string&gt;</code>
***

*Reslove signature from SecuX device.*

**Returns**: <code>Array&lt;string&gt;</code> - signature array of base64 string  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### signRawTransaction
***
SecuxTransactionTool.signRawTransaction(path, tx, [option]) ⇒ [<code>communicationData</code>](#communicationData)
***

*Sign a transcation command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 |
| tx | [<code>communicationData</code>](#communicationData) | prepared transaction data |
| [option] | [<code>TransactionOption</code>](#TransactionOption) |  |

<br/>

### signRawTransactionList
***
SecuxTransactionTool.signRawTransactionList(paths, txs, [confirm], [otpion]) ⇒ [<code>communicationData</code>](#communicationData)
***

*Sign transactions command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| paths | <code>Array&lt;string&gt;</code> | BIP32 |
| txs | <code>Array&lt;Buffer&gt;</code> | prepared transaction data corresponding to above path |
| [confirm] | [<code>communicationData</code>](#communicationData) |  |
| [otpion] | [<code>TransactionOption</code>](#TransactionOption) |  |

<br/>

### signMessage
***
SecuxTransactionTool.signMessage(path, msg, [option]) ⇒ [<code>communicationData</code>](#communicationData)
***

*Sign message command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 |
| msg | [<code>communicationData</code>](#communicationData) |  |
| [option] | [<code>TransactionOption</code>](#TransactionOption) |  |

<br/>

### signTypedMessage
***
SecuxTransactionTool.signTypedMessage(path, typedMessageHash, [option]) ⇒ [<code>communicationData</code>](#communicationData)
***

*Sign typed message command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 |
| typedMessageHash | [<code>communicationData</code>](#communicationData) |  |
| [option] | [<code>TransactionOption</code>](#TransactionOption) |  |

<br/>

### txPrepare
***
~~SecuxTransactionTool.txPrepare(path, inputId, tx, confirm, [isToken]) ⇒ [<code>communicationData</code>](#communicationData)~~
***
***Deprecated***


*Send utxo command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>string</code> |  | BIP32 |
| inputId | <code>number</code> |  | uint8 |
| tx | [<code>communicationData</code>](#communicationData) |  |  |
| confirm | [<code>communicationData</code>](#communicationData) |  |  |
| [isToken] | <code>boolean</code> | <code>false</code> |  |

<br/>

### txBegin
***
~~SecuxTransactionTool.txBegin(amount, toAddress, [showConfirm]) ⇒ [<code>communicationData</code>](#communicationData)~~
***
***Deprecated***


*Begin signing command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Default |
| --- | --- | --- |
| amount | <code>string</code> |  | 
| toAddress | <code>string</code> |  | 
| [showConfirm] | <code>boolean</code> | <code>false</code> | 

<br/>

### txEnd
***
~~SecuxTransactionTool.txEnd() ⇒ [<code>communicationData</code>](#communicationData)~~
***
***Deprecated***


*End signing command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  
<br/>

### txSign
***
~~SecuxTransactionTool.txSign(inputId) ⇒ [<code>communicationData</code>](#communicationData)~~
***
***Deprecated***


*Sign command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| inputId | <code>number</code> | uint8 |

<br/>

## Types

<a name="communicationData"></a>

### communicationData : <code>string</code> \| <code>Buffer</code>
*Data type for transmission.*

<br/>

<a name="IAPDUResponse"></a>

### IAPDUResponse : <code>object</code>
*Response object from device.*

| Name | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | StatusCode |
| data | <code>string</code> | base64 encoded buffer |
| dataLength | <code>number</code> | length of the data |
<br/>

<a name="TransactionOption"></a>

### TransactionOption : <code>object</code>
*Options for the signing*

| Name | Type | Description |
| --- | --- | --- |
| [tp] | [<code>TransactionType</code>](#TransactionType) | the type of payment |
| [curve] | [<code>EllipticCurve</code>](#EllipticCurve) |  |
| [chainId] | <code>number</code> | for ethereum networks |
<br/>

<a name="StatusCode"></a>

### StatusCode : <code>enum</code>
*Status code of response.*

| Name | Type | Description |
| --- | --- | --- |
| DATA_ERROR | <code>number</code> | 0x5001 |
| CLA_ERROR | <code>number</code> | 0x5002 |
| INS_ERROR | <code>number</code> | 0x5003 |
| SUCCESS | <code>number</code> | 0x9000 |
<br/>

<a name="EllipticCurve"></a>

### EllipticCurve : <code>enum</code>
*Supported curve.*

| Name | Type | Description |
| --- | --- | --- |
| SECP256K1 | <code>number</code> | 0 |
| ED25519 | <code>number</code> | 1 |
| ED25519_ADA | <code>number</code> | 2 |
<br/>

<a name="TransactionType"></a>

### TransactionType : <code>enum</code>
*The type of payment.*

| Name | Type | Description |
| --- | --- | --- |
| NORMAL | <code>number</code> | 0 |
| TOKEN | <code>number</code> | 1 |
| NFT | <code>number</code> | 2 |
<br/>

