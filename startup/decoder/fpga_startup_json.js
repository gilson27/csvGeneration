/******************************************************************************
-- This file contains confidential and proprietary information.                
-- (C)Copyright - KARL STORZ                                                   
****************************************************************************** 
-- Project            : KS_1G_CODEC                                            
-- File               : startup_json.js                                        
-- Author             : Gilson Varghese                                        
-- Version            : 0.1                                                    
-- Date               : 27-09-2015                                             
-- Status             : Initial version                                        
-- Abstract           : Statrtup application to read db and update apps        
--                                                                             
-- Modification History                                                        
------------------------------------------------------------------------------ 
Date         | By              | Version | Change Description                  
------------------------------------------------------------------------------ 
17-09-2015   | Gilson Varghese | 0.1     | Initial version                     
******************************************************************************/




var JSONObject = {
	"/system/misc/led-on-time": {
		"columnName": "led-on-time",
		"tableName": "SYSTEM_MISC",
		"opcode": "63",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/system/misc/led-off-time": {
		"columnName": "led-off-time",
		"tableName": "SYSTEM_MISC",
		"opcode": "65",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/audio/input/enable-rx": {
		"columnName": "enable-rx",
		"tableName": "AUDIO_INPUT",
		"opcode": "403",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/audio/input/fine-gain": {
		"columnName": "fine-gain",
		"tableName": "AUDIO_INPUT",
		"opcode": "405",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/audio/input/coarse-gain": {
		"columnName": "coarse-gain",
		"tableName": "AUDIO_INPUT",
		"opcode": "407",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/audio/input/mute": {
		"columnName": "mute",
		"tableName": "AUDIO_INPUT",
		"opcode": "409",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/audio/input/loopback": {
		"columnName": "loopback",
		"tableName": "AUDIO_INPUT",
		"opcode": "411",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/audio/input/rx-mult-ip-addr": {
		"columnName": "rx-mult-ip-addr",
		"tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
		"opcode": "413",
		"socketFilter": 0,
		"flags": "3",
		"childs": [
			"ip-addr",
			"port"
		],
		"dataTypeArray": [
			"STR",
			"INTEGER"
		]
	},
	"/audio/output/enable-tx": {
		"columnName": "enable-tx",
		"tableName": "AUDIO_OUTPUT",
		"opcode": "415",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/audio/output/tx-mult-ip-addr": {
		"columnName": "tx-mult-ip-addr",
		"tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
		"opcode": "417",
		"socketFilter": 0,
		"flags": "3",
		"childs": [
			"ip-addr",
			"port"
		],
		"dataTypeArray": [
			"STR",
			"INTEGER"
		]
	},
	"/audio/output/fine-gain": {
		"columnName": "fine-gain",
		"tableName": "AUDIO_OUTPUT",
		"opcode": "419",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/audio/output/coarse-gain": {
		"columnName": "coarse-gain",
		"tableName": "AUDIO_OUTPUT",
		"opcode": "421",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/audio/output/mute": {
		"columnName": "mute",
		"tableName": "AUDIO_OUTPUT",
		"opcode": "423",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/audio/output/fade": {
		"columnName": "fade",
		"tableName": "AUDIO_OUTPUT",
		"opcode": "425",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/input/hqll-mult-ip-addr": {
		"columnName": "hqll-mult-ip-addr",
		"tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
		"opcode": "110",
		"socketFilter": 0,
		"flags": "3",
		"childs": [
			"ip-addr",
			"port"
		],
		"dataTypeArray": [
			"STR",
			"INTEGER"
		]
	},
	"/overlay/max-images": {
		"columnName": "max-images",
		"tableName": "OVERLAY",
		"opcode": "304",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/overlay/max-upload-images": {
		"columnName": "max-upload-images",
		"tableName": "OVERLAY",
		"opcode": "306",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/overlay/enable": {
		"columnName": "enable",
		"tableName": "OVERLAY",
		"opcode": "308",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/overlay/upload-image": {
		"columnName": "upload-image",
		"tableName": "OVERLAY_IMAGE",
		"opcode": "309",
		"socketFilter": 1,
		"flags": "31",
		"childs": [
			"file-name",
			"location",
			"id",
			"height",
			"width"
		],
		"databaseTask": "OVERLAY_UPLOAD",
		"dataTypeArray": [
			"STR",
			"STR",
			"INTEGER",
			"INTEGER",
			"INTEGER"
		]
	},
	"/overlay/upload-mute-image": {
		"columnName": "upload-mute-image",
		"tableName": "OVERLAY_IMAGE",
		"opcode": "310",
		"socketFilter": 1,
		"flags": "15",
		"childs": [
			"file-name",
			"location",
			"height",
			"width"
		],
		"databaseTask": "OVERLAY_MUTE_UPLOAD",
		"dataTypeArray": [
			"STR",
			"STR",
			"INTEGER",
			"INTEGER"
		]
	},
	"/overlay/1/image-params": {
		"columnName": "image-params",
		"tableName": "OVERLAY_IMAGE",
		"opcode": "313",
		"socketFilter": 1,
		"flags": "7",
		"childs": [
			"x-location",
			"y-location",
			"enable"
		],
		"databaseTask": "OVERLAY_EDIT",
		"dataTypeArray": [
			"INTEGER",
			"INTEGER",
			"INTEGER",
			"INTEGER"
		]
	},
	"/overlay/2/image-params": {
		"columnName": "image-params",
		"tableName": "OVERLAY_IMAGE",
		"opcode": "315",
		"socketFilter": 1,
		"flags": "7",
		"childs": [
			"x-location",
			"y-location",
			"enable"
		],
		"databaseTask": "OVERLAY_EDIT",
		"dataTypeArray": [
			"INTEGER",
			"INTEGER",
			"INTEGER",
			"INTEGER"
		]
	},
	"/overlay/3/image-params": {
		"columnName": "image-params",
		"tableName": "OVERLAY_IMAGE",
		"opcode": "317",
		"socketFilter": 1,
		"flags": "7",
		"childs": [
			"x-location",
			"y-location",
			"enable"
		],
		"databaseTask": "OVERLAY_EDIT",
		"dataTypeArray": [
			"INTEGER",
			"INTEGER",
			"INTEGER",
			"INTEGER"
		]
	},
	"/overlay/4/image-params": {
		"columnName": "image-params",
		"tableName": "OVERLAY_IMAGE",
		"opcode": "319",
		"socketFilter": 1,
		"flags": "7",
		"childs": [
			"x-location",
			"y-location",
			"enable"
		],
		"databaseTask": "OVERLAY_EDIT",
		"dataTypeArray": [
			"INTEGER",
			"INTEGER",
			"INTEGER",
			"INTEGER"
		]
	},
	"/overlay/5/image-params": {
		"columnName": "image-params",
		"tableName": "OVERLAY_IMAGE",
		"opcode": "321",
		"socketFilter": 1,
		"flags": "7",
		"childs": [
			"x-location",
			"y-location",
			"enable"
		],
		"databaseTask": "OVERLAY_EDIT",
		"dataTypeArray": [
			"INTEGER",
			"INTEGER",
			"INTEGER",
			"INTEGER"
		]
	},
	"/overlay/6/image-params": {
		"columnName": "image-params",
		"tableName": "OVERLAY_IMAGE",
		"opcode": "323",
		"socketFilter": 1,
		"flags": "7",
		"childs": [
			"x-location",
			"y-location",
			"enable"
		],
		"databaseTask": "OVERLAY_EDIT",
		"dataTypeArray": [
			"INTEGER",
			"INTEGER",
			"INTEGER",
			"INTEGER"
		]
	},
	"/overlay/7/image-params": {
		"columnName": "image-params",
		"tableName": "OVERLAY_IMAGE",
		"opcode": "325",
		"socketFilter": 1,
		"flags": "7",
		"childs": [
			"x-location",
			"y-location",
			"enable"
		],
		"databaseTask": "OVERLAY_EDIT",
		"dataTypeArray": [
			"INTEGER",
			"INTEGER",
			"INTEGER",
			"INTEGER"
		]
	},
	"/overlay/8/image-params": {
		"columnName": "image-params",
		"tableName": "OVERLAY_IMAGE",
		"opcode": "327",
		"socketFilter": 1,
		"flags": "7",
		"childs": [
			"x-location",
			"y-location",
			"enable"
		],
		"databaseTask": "OVERLAY_EDIT",
		"dataTypeArray": [
			"INTEGER",
			"INTEGER",
			"INTEGER",
			"INTEGER"
		]
	},
	"/overlay/video-mute-image-params": {
		"columnName": "video-mute-image-params",
		"tableName": "OVERLAY_IMAGE",
		"opcode": "329",
		"socketFilter": 1,
		"flags": "3",
		"childs": [
			"x-location",
			"y-location"
		],
		"databaseTask": "OVERLAY_MUTE_EDIT",
		"dataTypeArray": [
			"INTEGER",
			"INTEGER"
		]
	},
	"/system/config-file/update": {
		"columnName": "update",
		"tableName": "SYSTEM_CONFIG-FILE",
		"opcode": "56",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "STR"
	}
};

module.exports = JSONObject;
