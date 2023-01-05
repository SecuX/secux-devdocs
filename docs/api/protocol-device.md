---
title: '@secux/protocol-device'
sidebar_position: 2
---

<a name="SecuxDevice"></a>

## SecuxDevice
SecuX protocol for device management

**Kind**: global class  
<h2>Properties</h2>


### prepareGetVersion
***
SecuxDevice.prepareGetVersion() ⇒ [<code>communicationData</code>](#communicationData)
***

*Get version information command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  
<br/>


### resolveVersion
***
SecuxDevice.resolveVersion(response) ⇒ [<code>VersionInfo</code>](#VersionInfo)
***

*Resolve version information from device.*

**Returns**: [<code>VersionInfo</code>](#VersionInfo) - object  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>


### prepareGetWalletInfo
***
SecuxDevice.prepareGetWalletInfo() ⇒ [<code>communicationData</code>](#communicationData)
***

*Get wallet information command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  
<br/>


### resolveWalletInfo
***
SecuxDevice.resolveWalletInfo(response) ⇒ [<code>WalletInfo</code>](#WalletInfo)
***

*Resolve wallet information from device.*

**Returns**: [<code>WalletInfo</code>](#WalletInfo) - object  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>


### prepareShowAddress
***
SecuxDevice.prepareShowAddress(path, [option]) ⇒ [<code>communicationData</code>](#communicationData)
***

*Show address command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | BIP32 |
| [option] | [<code>AddressOption</code>](#AddressOption) |  |

<br/>


### resolveResponse
***
SecuxDevice.resolveResponse(response)
***

*Resolve response from device.*


| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>

<a name="SecuxDeviceNifty"></a>

## SecuxDeviceNifty
SecuX protocol for device management (Nifty)

**Kind**: global class  
<h2>Properties</h2>


### prepareGetWalletInfo
***
SecuxDeviceNifty.prepareGetWalletInfo() ⇒ [<code>communicationData</code>](#communicationData)
***

*Get wallet information command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  
<br/>


### resolveWalletInfo
***
SecuxDeviceNifty.resolveWalletInfo(response) ⇒ [<code>NiftyWalletInfo</code>](#NiftyWalletInfo)
***

*Resolve wallet information from device.*

**Returns**: [<code>NiftyWalletInfo</code>](#NiftyWalletInfo) - object  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>


### prepareSetWalletName
***
SecuxDeviceNifty.prepareSetWalletName(name) ⇒ [<code>communicationData</code>](#communicationData)
***

*Set device name.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | custom device name |

<br/>


### prepareReboot
***
SecuxDeviceNifty.prepareReboot() ⇒ [<code>communicationData</code>](#communicationData)
***

*Reboot device.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  
<br/>


### prepareFileOperation
***
SecuxDeviceNifty.prepareFileOperation(mode, info) ⇒ [<code>communicationData</code>](#communicationData)
***

*Execution file command.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| mode | [<code>FileMode</code>](#FileMode) | read/write/delete |
| info | [<code>FileInfo</code>](#FileInfo) | object for file |

<br/>


### prepareSendImage
***
SecuxDeviceNifty.prepareSendImage(filename, file, [attachment], destination) ⇒ [<code>Array&lt;communicationData&gt;</code>](#communicationData)
***

*Store image file on device.*

**Returns**: [<code>Array&lt;communicationData&gt;</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | file name |
| file | [<code>communicationData</code>](#communicationData) | file data |
| [attachment] | [<code>FileAttachment</code>](#FileAttachment) | file metadata |
| destination | [<code>FileDestination</code>](#FileDestination) | default: GALLERY |

<br/>


### prepareFinishSync
***
SecuxDeviceNifty.prepareFinishSync() ⇒ [<code>communicationData</code>](#communicationData)
***

*Finish file transmission to unlock touch screen.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  
<br/>


### prepareUpdateProfileImage
***
SecuxDeviceNifty.prepareUpdateProfileImage(file) ⇒ [<code>Array&lt;communicationData&gt;</code>](#communicationData)
***

*Set profile picture on device.*

**Returns**: [<code>Array&lt;communicationData&gt;</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| file | [<code>communicationData</code>](#communicationData) | file data |

<br/>


### prepareRemoveFromGallery
***
SecuxDeviceNifty.prepareRemoveFromGallery(filename) ⇒ [<code>communicationData</code>](#communicationData)
***

*Remove files on deivce.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | filename or wildcard |

<br/>


### resolveFileRemoved
***
SecuxDeviceNifty.resolveFileRemoved(response) ⇒ <code>number</code>
***

*Number of files deleted.*


| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>


### prepareListGalleryFiles
***
SecuxDeviceNifty.prepareListGalleryFiles() ⇒ [<code>communicationData</code>](#communicationData)
***

*List files stored on device.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  
<br/>


### resolveFilesInFolder
***
SecuxDeviceNifty.resolveFilesInFolder(response) ⇒ [<code>ListFilesObject</code>](#ListFilesObject)
***

*Resolve file list.*

**Returns**: [<code>ListFilesObject</code>](#ListFilesObject) - object  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>communicationData</code>](#communicationData) | data from device |

<br/>


### prepareUpdateGalleryTable
***
SecuxDeviceNifty.prepareUpdateGalleryTable(fileList, destination) ⇒ [<code>Array&lt;communicationData&gt;</code>](#communicationData)
***

*Arrange gallery on device.*

**Returns**: [<code>Array&lt;communicationData&gt;</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| fileList | <code>Array&lt;string&gt;</code> | file arranged list |
| destination | [<code>FileDestination</code>](#FileDestination) | default: GALLERY |

<br/>


### prepareResetGalleryTable
***
SecuxDeviceNifty.prepareResetGalleryTable(destination) ⇒ [<code>communicationData</code>](#communicationData)
***

*Reset arrangement on device.*

**Returns**: [<code>communicationData</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| destination | [<code>FileDestination</code>](#FileDestination) | default: GALLERY |

<br/>


### prepareSendFile
***
SecuxDeviceNifty.prepareSendFile(file) ⇒ [<code>Array&lt;communicationData&gt;</code>](#communicationData)
***

*Send file to device.*

**Returns**: [<code>Array&lt;communicationData&gt;</code>](#communicationData) - data for sending to device  

| Param | Type | Description |
| --- | --- | --- |
| file | [<code>communicationData</code>](#communicationData) | file data |

<br/>

## Types

<a name="communicationData"></a>

### communicationData : <code>string</code> \| <code>Buffer</code>
*Data type for transmission.*

<br/>

<a name="WalletStatus"></a>

### WalletStatus : <code>enum</code>
*Wallet status.*

| Name | Type | Description |
| --- | --- | --- |
| NotActivated | <code>number</code> | 0 |
| Normal | <code>number</code> | 34 |
| Hidden | <code>number</code> | 98 |
<br/>

<a name="FileMode"></a>

### FileMode : <code>enum</code>
*File operations.*

| Name | Type | Description |
| --- | --- | --- |
| ADD | <code>number</code> | 0 |
| REMOVE | <code>number</code> | 1 |
| READ | <code>number</code> | 2 |
<br/>

<a name="FileDestination"></a>

### FileDestination : <code>enum</code>
*File destination.*

| Name | Type | Description |
| --- | --- | --- |
| SDCARD | <code>number</code> | 0 |
| LOGO | <code>number</code> | 1 |
| CONFIRM | <code>number</code> | 2 |
| GALLERY | <code>number</code> | 3 |
<br/>

<a name="FileType"></a>

### FileType : <code>enum</code>
*File type.*

| Name | Type | Description |
| --- | --- | --- |
| png | <code>number</code> | 0 |
| bpp1 | <code>number</code> | 1 |
| bpp2 | <code>number</code> | 2 |
| bpp4 | <code>number</code> | 3 |
| wav | <code>number</code> | 4 |
| jpg | <code>number</code> | 5 |
| hlt | <code>number</code> | 6 |
<br/>

<a name="AttachmentType"></a>

### AttachmentType : <code>enum</code>
*Attachment type for specific chain.*

| Name | Type | Description |
| --- | --- | --- |
| Ethereum | <code>number</code> | 1 |
| Polygon | <code>number</code> | 2 |
| Solana | <code>number</code> | 3 |
| BSC | <code>numnber</code> | 4 |
<br/>

<a name="VersionInfo"></a>

### VersionInfo : <code>object</code>
*Version information from device.*

| Name | Type | Description |
| --- | --- | --- |
| transportVersion | <code>number</code> | communication protocol version |
| seFwVersion | <code>string</code> | security chip firmware version |
| mcuFwVersion | <code>string</code> | firmware version |
| bootloaderVersion | <code>string</code> | bootloader version |
<br/>

<a name="WalletInfo"></a>

### WalletInfo : <code>object</code>
*Wallet information from device.*

| Name | Type | Description |
| --- | --- | --- |
| walletIndex | <code>number</code> |  |
| walletName | <code>string</code> | custom name on deivce |
| walletStatus | <code>number</code> | wallet status |
<br/>

<a name="AddressOption"></a>

### AddressOption
*Options for showing address on device.*

| Name | Type | Description |
| --- | --- | --- |
| [needToConfirm] | <code>boolean</code> | need user interaction or not |
| [chainId] | <code>number</code> | chainId for evm-compatible chain |
<br/>

<a name="NiftyWalletInfo"></a>

### NiftyWalletInfo : <code>object</code>
*Wallet information from device.*

| Name | Type | Description |
| --- | --- | --- |
| PartNumber | <code>string</code> | part number on device |
| SerialNumber | <code>string</code> | serial number on device |
| DeviceName | <code>string</code> | custom name on deivce |
<br/>

<a name="FileInfo"></a>

### FileInfo : <code>object</code>
*Object for file attribute.*

| Name | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | file size |
| destination | [<code>FileDestination</code>](#FileDestination) | file destination |
| type | [<code>FileType</code>](#FileType) | file type |
| name | <code>string</code> | file name |
| [attachment] | [<code>FileAttachment</code>](#FileAttachment) | file metadata |
<br/>

<a name="FileAttachment"></a>

### FileAttachment : <code>object</code>
*Asset's metadata.*

| Name | Type | Description |
| --- | --- | --- |
| type | [<code>AttachmentType</code>](#AttachmentType) | metadata for specific chain |
| contractAddress | <code>string</code> | collection address |
| tokenId | <code>string</code> | asset id |
| assetName | <code>string</code> | asset name |
| collectionName | <code>string</code> | collection name |
| tokenStandard | <code>string</code> | asset based on which standard |
| [uri] | <code>string</code> | asset link |
<br/>

<a name="ListFilesObject"></a>

### ListFilesObject : <code>object</code>
*Object for get files stored on device.*

| Name | Type | Description |
| --- | --- | --- |
| files | <code>Array&lt;string&gt;</code> | file list |
| [resume] | [<code>communicationData</code>](#communicationData) | exist when sending next command to device needed |
<br/>

