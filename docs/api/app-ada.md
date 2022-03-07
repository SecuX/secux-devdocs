---
title: '@secux/app-ada'
---


> Cardano is a blockchain platform for changemakers, innovators, and visionaries, with the tools and technologies required to create possibility for the many, as well as the few, and bring about positive global change.

<a name="SecuxADA"></a>

## SecuxADA
ADA package for SecuX device

**Kind**: global class  
<h2>Properties</h2>

### addressConvert
***
SecuxADA.addressConvert(xpublickey, type, [option]) ⇒ <code>string</code>
***

*Convert bip32-publickey to ADA address.*

**Returns**: <code>string</code> - address  

| Param | Type | Description |
| --- | --- | --- |
| xpublickey | <code>string</code> \| <code>Buffer</code> | ada bip32-publickey |
| type | [<code>AddressType</code>](#AddressType) |  |
| [option] | [<code>AddressOption</code>](#AddressOption) |  |

<br/>

### prepareAddress
***
SecuxADA.prepareAddress(pathWith3Depth) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for address generation.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| pathWith3Depth | <code>string</code> | m/1852'/1815'/... |

<br/>

### resolveAddress
***
SecuxADA.resolveAddress(response, type, [option]) ⇒ <code>string</code>
***

*Resolve address from response data.*

**Returns**: <code>string</code> - address  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| type | [<code>AddressType</code>](#AddressType) |  |
| [option] | [<code>AddressOption</code>](#AddressOption) |  |

<br/>

### prepareXPublickey
***
SecuxADA.prepareXPublickey(pathWith3Depth) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for bip32-publickey.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| pathWith3Depth | <code>string</code> | m/1852'/1815'/... |

<br/>

### resolveXPublickey
***
SecuxADA.resolveXPublickey(response) ⇒ <code>string</code>
***

*Resolve bip32-publickey from response data.*

**Returns**: <code>string</code> - bip32-publickey (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### prepareSign
***
SecuxADA.prepareSign(inputs, output, [option]) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing.*


| Param | Type |
| --- | --- |
| inputs | [<code>Array&lt;txInput&gt;</code>](#txInput) | 
| output | [<code>txOutput</code>](#txOutput) | 
| [option] | [<code>signOption</code>](#signOption) | 

<br/>

### resolveSignatureList
***
SecuxADA.resolveSignatureList(response) ⇒ <code>Array&lt;string&gt;</code>
***

*Reslove signatures from response data.*

**Returns**: <code>Array&lt;string&gt;</code> - signature array of hex string  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### resolveTransaction
***
SecuxADA.resolveTransaction(response, serialized) ⇒ <code>string</code>
***

*Resolve transaction for broadcasting.*

**Returns**: <code>string</code> - signed transaction (base64 encoded)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| serialized | [<code>communicationData</code>](#communicationData) |  |

<br/>

### prepareStake
***
SecuxADA.prepareStake(input, pool, [option]) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing.*


| Param | Type | Description |
| --- | --- | --- |
| input | [<code>stakeInput</code>](#stakeInput) |  |
| pool | <code>string</code> | pool hash or id |
| [option] | [<code>stakeOption</code>](#stakeOption) |  |

<br/>

### prepareUnstake
***
SecuxADA.prepareUnstake(input, [option]) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing.*


| Param | Type |
| --- | --- |
| input | [<code>stakeInput</code>](#stakeInput) | 
| [option] | [<code>unstakeOption</code>](#unstakeOption) | 

<br/>

### prepareWithdraw
***
SecuxADA.prepareWithdraw(input, amount, [option]) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing.*


| Param | Type | Description |
| --- | --- | --- |
| input | [<code>stakeInput</code>](#stakeInput) |  |
| amount | <code>number</code> \| <code>string</code> | rewards |
| [option] | [<code>withdrawOption</code>](#withdrawOption) |  |

<br/>

## Types

<a name="communicationData"></a>

### communicationData : <code>string</code> \| <code>Buffer</code>
*Data type for transmission.*

<br/>

<a name="AddressType"></a>

### AddressType : <code>enum</code>
*Address type. (BASE ~ REWARD: Shelley-type)*

| Name | Type | Description |
| --- | --- | --- |
| BASE | <code>number</code> | 0 |
| ENTERPRISE | <code>number</code> | 1 |
| POINTER | <code>number</code> | 2 |
| REWARD | <code>number</code> | 3 |
| BOOTSTRAPv1 | <code>number</code> | 4 |
| BOOTSTRAPv2 | <code>number</code> | 5 |
<br/>

<a name="PointerOption"></a>

### PointerOption : <code>object</code>
*Parameters of Pointer address.*

| Name | Type |
| --- | --- |
| slot | <code>number</code> | 
| txIndex | <code>number</code> | 
| certIndex | <code>number</code> | 
<br/>

<a name="AddressOption"></a>

### AddressOption : <code>object</code>
*Options for generating address.*

| Name | Type | Description |
| --- | --- | --- |
| [addressIndex] | <code>number</code> | account index |
| [stakeIndex] | <code>number</code> | stake key index |
| [pointer] | [<code>PointerOption</code>](#PointerOption) | option for Pointer address |
<br/>

<a name="txInput"></a>

### txInput : <code>object</code>
*The UTXO object.*

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | 3-depth path of CIP-1852 |
| xpublickey | <code>string</code> \| <code>Buffer</code> | ED25519 publickey from `path` |
| txId | <code>string</code> | referenced transaction hash |
| index | <code>number</code> | referenced transaction output index |
| amount | <code>number</code> \| <code>string</code> | referenced transaction output amount |
| [addressIndex] | <code>number</code> | default: 0 |
| [stakeIndex] | <code>number</code> | default: 0 |
<br/>

<a name="txOutput"></a>

### txOutput : <code>object</code>
*The payment object.*

| Name | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | receiver's address |
| amount | <code>number</code> \| <code>string</code> | amount of payment |
<br/>

<a name="signOption"></a>

### signOption : <code>object</code>
*Option for payment.*

| Name | Type | Description |
| --- | --- | --- |
| [changeAddress] | <code>string</code> | default: sender's address |
| [fee] | <code>number</code> \| <code>string</code> |  |
| [TimeToLive] | <code>number</code> |  |
<br/>

<a name="stakeOption"></a>

### stakeOption : <code>object</code>
*Option for staking.*

| Name | Type | Description |
| --- | --- | --- |
| [stakeIndex] | <code>number</code> | default: 0 |
| [needRegistration] | <code>boolean</code> | include registration or not |
| [fee] | <code>number</code> \| <code>string</code> |  |
| [TimeToLive] | <code>number</code> |  |
<br/>

<a name="withdrawOption"></a>

### withdrawOption : <code>object</code>
*Option for withdraw rewards.*

| Name | Type | Description |
| --- | --- | --- |
| [stakeIndex] | <code>number</code> | default: 0 |
| [fee] | <code>number</code> \| <code>string</code> |  |
| [TimeToLive] | <code>number</code> |  |
<br/>

<a name="unstakeOption"></a>

### unstakeOption : <code>object</code>
*Option for unstaking. (de-registration)*

| Name | Type | Description |
| --- | --- | --- |
| [stakeIndex] | <code>number</code> | default: 0 |
| [withdrawAmount] | <code>boolean</code> | withdraw and de-registration |
| [fee] | <code>number</code> \| <code>string</code> |  |
| [TimeToLive] | <code>number</code> |  |
<br/>

<a name="utxo"></a>

### utxo : <code>object</code>


| Name | Type | Description |
| --- | --- | --- |
| txId | <code>string</code> | referenced transaction hash |
| index | <code>number</code> | referenced transaction output index |
| amount | <code>number</code> \| <code>string</code> | referenced transaction output amount |
| [addressIndex] | <code>number</code> | default: 0 |
<br/>

<a name="stakeInput"></a>

### stakeInput : <code>object</code>
*Parameters for staking operations.*

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | 3-depth path of CIP-1852 |
| utxo | [<code>Array&lt;utxo&gt;</code>](#utxo) |  |
| changeAddress | <code>string</code> | owner's account |
| xpublickey | <code>string</code> \| <code>Buffer</code> | cardano bip32-publickey |
| [stakeIndex] | <code>number</code> | default: 0 |
<br/>

<a name="prepared"></a>

### prepared : <code>object</code>
*Object for the signing and validation.*

| Name | Type | Description |
| --- | --- | --- |
| commandData | [<code>communicationData</code>](#communicationData) | data for sending to device |
| serialized | [<code>communicationData</code>](#communicationData) |  |
<br/>

