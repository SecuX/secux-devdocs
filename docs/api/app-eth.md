---
title: '@secux/app-eth'
---


> Ethereum is open access to digital money and data-friendly services for everyone. It's a community-built technology behind the cryptocurrency ether (ETH) and thousands of applications you can use today.

<a name="SecuxETH"></a>

## SecuxETH
ETH package for SecuX device

**Kind**: global class  
<h2>Properties</h2>

### addressConvert
***
SecuxETH.addressConvert(publickey) ⇒ <code>string</code>
***

*Convert publickey to ETH address.*

**Returns**: <code>string</code> - EIP55 address  

| Param | Type | Description |
| --- | --- | --- |
| publickey | <code>string</code> \| <code>Buffer</code> | secp256k1 publickey |

<br/>

### prepareAddress
***
SecuxETH.prepareAddress(path) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for address generation.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/60'/... |

<br/>

### resolveAddress
***
SecuxETH.resolveAddress(response) ⇒ <code>string</code>
***

*Resolve address from response data.*

**Returns**: <code>string</code> - EIP55 address  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### preparePublickey
***
SecuxETH.preparePublickey(path) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for secp256k1 publickey.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/60'/... |

<br/>

### resolvePublickey
***
SecuxETH.resolvePublickey(response) ⇒ <code>string</code>
***

*Resolve secp256k1 publickey from response data.*

**Returns**: <code>string</code> - secp256k1 publickey (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### prepareXPublickey
***
SecuxETH.prepareXPublickey(path) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for xpub generation.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/60'/... |

<br/>

### resolveXPublickey
***
SecuxETH.resolveXPublickey(response, path) ⇒ <code>string</code>
***

*Generate xpub with response data.*

**Returns**: <code>string</code> - xpub  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| path | <code>string</code> | m/44'/60'/... |

<br/>

### prepareSignSerialized
***
SecuxETH.prepareSignSerialized(path, serialized) ⇒ [<code>communicationData</code>](#communicationData)
***

*Convert unsigned transaction to command data.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/60'/... |
| serialized | [<code>communicationData</code>](#communicationData) | unsigned transaction |

<br/>

### resolveSignature
***
SecuxETH.resolveSignature(response) ⇒ <code>string</code>
***

*Reslove signature from response data.*

**Returns**: <code>string</code> - signature (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### resolveTransaction
***
SecuxETH.resolveTransaction(response, serialized) ⇒ <code>string</code>
***

*Serialize transaction wtih signature for broadcasting.*

**Returns**: <code>string</code> - signed raw transaction  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| serialized | [<code>communicationData</code>](#communicationData) | unsigned transaction |

<br/>

### prepareSignEIP155
***
SecuxETH.prepareSignEIP155(path, content) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing.*

**Returns**: [<code>prepared</code>](#prepared) - prepared object  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/60'/... |
| content | [<code>tx155</code>](#tx155) | EIP-155 transaction object |

<br/>

### resolveSignatureEIP155
***
SecuxETH.resolveSignatureEIP155(response, [chainId]) ⇒ <code>string</code>
***

*Reslove signature and follow ethereum signature standard.*

**Returns**: <code>string</code> - signature (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| [chainId] | <code>number</code> | if give a chainId, the signature will be EIP-155 applied |

<br/>

### prepareSignEIP1559
***
SecuxETH.prepareSignEIP1559(path, content) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing (London Hard Fork).*

**Returns**: [<code>prepared</code>](#prepared) - prepared object  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/60'/... |
| content | [<code>tx1559</code>](#tx1559) | EIP-1559 transaction object |

<br/>

### prepareSignMessage
***
SecuxETH.prepareSignMessage(path, message) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for signing.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/60'/... |
| message | <code>string</code> \| <code>Buffer</code> |  |

<br/>

### prepareSignTypedData
***
SecuxETH.prepareSignTypedData(path, data) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for signing.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/60'/... |
| data | <code>JsonString</code> | EIP712 |

<br/>

### prepareSignWalletConnectTransaction
***
SecuxETH.prepareSignWalletConnectTransaction(path, content) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing using WalletConnect protocol.*

**Returns**: [<code>prepared</code>](#prepared) - prepared object  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | m/44'/60'/... |
| content | [<code>tx155</code>](#tx155) \| [<code>tx1559</code>](#tx1559) | transaction object |

<br/>

## Types

<a name="communicationData"></a>

### communicationData : <code>string</code> \| <code>Buffer</code>
*Data type for transmission.*

<br/>

<a name="tx155"></a>

### tx155 : <code>object</code>
*The payment object for EIP-155.*

| Name | Type | Description |
| --- | --- | --- |
| chainId | <code>number</code> | network for ethereum ecosystem |
| to | <code>string</code> | receiving address |
| value | <code>number</code> \| <code>string</code> | sending amount |
| nonce | <code>number</code> \| <code>string</code> | the number of transactions sent from this address |
| gasPrice | <code>number</code> \| <code>string</code> | the price of gas (unit: wei) |
| gasLimit | <code>number</code> \| <code>string</code> | the maximum amount of gas you are willing to consume |
| [data] | <code>string</code> | abi-encoded data payload |
<br/>

<a name="tx1559"></a>

### tx1559 : <code>object</code>
*The payment object for EIP-1559.*

| Name | Type | Description |
| --- | --- | --- |
| chainId | <code>number</code> | network for ethereum ecosystem |
| to | <code>string</code> | receiving address |
| value | <code>number</code> \| <code>string</code> | sending amount |
| nonce | <code>number</code> \| <code>string</code> | the number of transactions sent from this address |
| maxPriorityFeePerGas | <code>number</code> \| <code>string</code> | the maximum priority fee of gas (unit: wei) |
| maxFeePerGas | <code>number</code> \| <code>string</code> | the maximum price of gas (unit: wei) |
| gasLimit | <code>number</code> \| <code>string</code> | the maximum amount of gas you are willing to consume |
| [content.accessList] | <code>Array&lt;any&gt;</code> |  |
| [data] | <code>string</code> | abi-encoded data payload |
<br/>

<a name="prepared"></a>

### prepared : <code>object</code>
*Object for the signing and validation.*

| Name | Type | Description |
| --- | --- | --- |
| commandData | [<code>communicationData</code>](#communicationData) | data for sending to device |
| serialized | [<code>communicationData</code>](#communicationData) | unsigned transaction |
<br/>

