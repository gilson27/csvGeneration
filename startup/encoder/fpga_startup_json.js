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
	"/system/misc/acc-debounce-time": {
		"columnName": "acc-debounce-time",
		"tableName": "SYSTEM_MISC",
		"opcode": "75",
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
	"/video/output/enable-hqll-tx": {
		"columnName": "enable-hqll-tx",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "118",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/output/hqll-mult-ip-addr": {
		"columnName": "hqll-mult-ip-addr",
		"tableName": "VIDEO_OUTPUT_HQLL-MULT-IP-ADDR",
		"opcode": "130",
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
