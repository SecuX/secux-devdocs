---
title: '@secux/app-sol'
---


> Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world.

<a name="SecuxSOL"></a>

## SecuxSOL
SOL package for SecuX device

**Kind**: global class  
<h2>Properties</h2>

### addressConvert
***
SecuxSOL.addressConvert(publickey, [option]) ⇒ <code>string</code>
***

*Convert ed25519 publickey to SOL address.*

**Returns**: <code>string</code> - address  

| Param | Type | Description |
| --- | --- | --- |
| publickey | <code>string</code> \| <code>Buffer</code> | ed25519 publickey |
| [option] | [<code>ATAOption</code>](#ATAOption) \| [<code>SeedOption</code>](#SeedOption) |  |

<br/>

### prepareAddress
***
SecuxSOL.prepareAddress(path) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for SOL address.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path (hardened child key), ex: m/44'/501'/0'/0' |

<br/>

### resolveAddress
***
SecuxSOL.resolveAddress(response, [option]) ⇒ <code>string</code>
***

*Generate SOL address from response data.*

**Returns**: <code>string</code> - SOL address  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| [option] | [<code>ATAOption</code>](#ATAOption) \| [<code>SeedOption</code>](#SeedOption) |  |

<br/>

### preparePublickey
***
SecuxSOL.preparePublickey(path) ⇒ [<code>communicationData</code>](#communicationData)
***

*Prepare data for ed25519 publickey.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 path (hardened child key), ex: m/44'/501'/0'/0' |

<br/>

### resolvePublickey
***
SecuxSOL.resolvePublickey(response) ⇒ <code>string</code>
***

*Resove ed25519 publickey from response data.*

**Returns**: <code>string</code> - ed25519 publickey (hex string)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### prepareSign
***
SecuxSOL.prepareSign(feePayer, content) ⇒ [<code>prepared</code>](#prepared)
***

*Prepare data for signing.*

**Returns**: [<code>prepared</code>](#prepared) - prepared object  

| Param | Type | Description |
| --- | --- | --- |
| feePayer | <code>string</code> | solana account |
| content | [<code>txDetail</code>](#txDetail) | transaction object |

<br/>

### resolveSignatureList
***
SecuxSOL.resolveSignatureList(response) ⇒ <code>Array&lt;string&gt;</code>
***

*Reslove signatures from response data.*

**Returns**: <code>Array&lt;string&gt;</code> - signature array (base58 encoded)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

### resolveTransaction
***
SecuxSOL.resolveTransaction(response, serialized) ⇒ <code>string</code>
***

*Resolve transaction for broadcasting.*

**Returns**: <code>string</code> - signed transaction (hex)  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |
| serialized | [<code>communicationData</code>](#communicationData) |  |

<br/>

## Types

<a name="communicationData"></a>

### communicationData : <code>string</code> \| <code>Buffer</code>
*Data type for transmission.*

<br/>

<a name="ATAOption"></a>

### ATAOption : <code>object</code>
*Parameters for associated token address.*

| Name | Type | Description |
| --- | --- | --- |
| mintAccount | <code>string</code> | token mint address |
<br/>

<a name="SeedOption"></a>

### SeedOption : <code>object</code>
*Parameters for account with seed.*

| Name | Type | Description |
| --- | --- | --- |
| seed | <code>string</code> | arbitary string (UTF-8) |
| programId | <code>string</code> | program address |
<br/>

<a name="accounts"></a>

### accounts : <code>object</code>
*The accounts required by program.*

| Name | Type | Description |
| --- | --- | --- |
| publickey | <code>string</code> \| <code>Buffer</code> | Ed25519 publickey |
| isSigner | <code>boolean</code> |  |
| isWritable | <code>boolean</code> |  |
<br/>

<a name="Instruction"></a>

### Instruction : <code>object</code>
*The raw instruction object.*

| Name | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | program address |
| accounts | [<code>accounts</code>](#accounts) |  |
| data | <code>string</code> \| <code>Buffer</code> | hex string or buffer |
<br/>

<a name="BuiltinInstruction"></a>

### BuiltinInstruction : <code>object</code>
*The bultin instruction object.*

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | instruction type |
| params | <code>any</code> | parameters |
<br/>

<a name="ownership"></a>

### ownership : <code>object</code>
*Account that needs to sign transaction.*

| Name | Type |
| --- | --- |
| path | <code>string</code> | 
| account | <code>string</code> | 
<br/>

<a name="txDetail"></a>

### txDetail : <code>object</code>
*The transaction object.*

| Name | Type | Description |
| --- | --- | --- |
| recentBlockhash | <code>string</code> | a recent blockhash |
| instructions | <code>Array&lt;([<code>Instruction</code>](#Instruction)\|[<code>BuiltinInstruction</code>](#BuiltinInstruction))&gt;</code> | a least one instruction in a transaction |
| ownerships | <code>Array&lt;[<code>ownership</code>](#ownership)&gt;</code> | for signing via SecuX wallet |
<br/>

<a name="prepared"></a>

### prepared : <code>object</code>
*Object for the signing and validation.*

| Name | Type | Description |
| --- | --- | --- |
| commandData | [<code>communicationData</code>](#communicationData) | data for sending to device |
| serialized | [<code>communicationData</code>](#communicationData) |  |
<br/>

