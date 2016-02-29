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
	"/system/network/mode": {
		"columnName": "mode",
		"tableName": "SYSTEM_NETWORK",
		"opcode": "19",
		"socketFilter": 1,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/system/network/ip-settings": {
		"columnName": "ip-settings",
		"tableName": "SYSTEM_NETWORK_IP-SETTINGS",
		"opcode": "13",
		"socketFilter": 0,
		"flags": "7",
		"childs": [
			"ip-addr",
			"subnet-mask",
			"gateway"
		],
		"dataTypeArray": [
			"STR",
			"STR",
			"STR"
		]
	},
	"/system/network/tos": {
		"columnName": "tos",
		"tableName": "SYSTEM_NETWORK",
		"opcode": "15",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/system/network/mtu-size": {
		"columnName": "mtu-size",
		"tableName": "SYSTEM_NETWORK",
		"opcode": "17",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/system/network/notify-ip-addr": {
		"columnName": "notify-ip-addr",
		"tableName": "SYSTEM_NETWORK",
		"opcode": "21",
		"socketFilter": 1,
		"flags": "0",
		"dataType": "STR",
		"notifyOpcode": 651
	},
	"/system/network/notify-port": {
		"columnName": "notify-port",
		"tableName": "SYSTEM_NETWORK_NOTIFY-PORT",
		"opcode": "23",
		"socketFilter": 1,
		"flags": "1",
		"childs": [
			"port"
		]
	},
	"/system/network/image-server-ip-addr": {
		"columnName": "image-server-ip-addr",
		"tableName": "SYSTEM_NETWORK",
		"opcode": "25",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "STR"
	},
	"/system/diagnostics/temperature-threshold": {
		"columnName": "temperature-threshold",
		"tableName": "SYSTEM_DIAGNOSTICS",
		"opcode": "75",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/system/diagnostics/device-log-level": {
		"columnName": "device-log-level",
		"tableName": "SYSTEM_DIAGNOSTICS",
		"opcode": "31",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER",
		"notifyOpcode": 656,
		"socketTask": 1
	},
	"/system/diagnostics/device-log-facility": {
		"columnName": "device-log-facility",
		"tableName": "SYSTEM_DIAGNOSTICS",
		"opcode": "33",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER",
		"notifyOpcode": 657,
		"socketTask": 1
	},
	"/system/diagnostics/dev-log-ip-addr": {
		"columnName": "dev-log-ip-addr",
		"tableName": "SYSTEM_DIAGNOSTICS",
		"opcode": "35",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "STR"
	},
	"/system/misc/http-mode": {
		"columnName": "http-mode",
		"tableName": "SYSTEM_MISC",
		"opcode": "67",
		"socketFilter": 1,
		"flags": "0",
		"dataType": "INTEGER",
		"notifyOpcode": 653
	},
	"/system/misc/enable-encryption": {
		"columnName": "enable-encryption",
		"tableName": "SYSTEM_MISC",
		"opcode": "69",
		"socketFilter": 1,
		"flags": "0",
		"dataType": "INTEGER",
		"notifyOpcode": 654
	},
	"/system/misc/ftp-auth": {
		"columnName": "ftp-auth",
		"tableName": "SYSTEM_MISC_FTP-AUTH",
		"opcode": "88",
		"socketFilter": 0,
		"flags": "3",
		"childs": [
			"username",
			"password"
		],
		"dataTypeArray": [
			"STR",
			"STR"
		]
	},
	"/kvm/feature-enable": {
		"columnName": "feature-enable",
		"tableName": "KVM",
		"opcode": "502",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/kvm/enable": {
		"columnName": "enable",
		"tableName": "KVM",
		"opcode": "505",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/kvm/encoder": {
		"columnName": "encoder",
		"tableName": "KVM",
		"opcode": "507",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "STR"
	},
	"/kvm/default-encoder": {
		"columnName": "default-encoder",
		"tableName": "KVM",
		"opcode": "509",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "STR"
	},
	"/kvm/key-code": {
		"columnName": "key-code",
		"tableName": "KVM",
		"opcode": "511",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "STR"
	},
	"/kvm/ssh-auth": {
		"columnName": "ssh-auth",
		"tableName": "KVM_SSH-AUTH",
		"opcode": "513",
		"socketFilter": 0,
		"flags": "3",
		"childs": [
			"username",
			"password"
		],
		"dataTypeArray": [
			"STR",
			"STR"
		]
	},
	"/kvm/default-ssh-auth": {
		"columnName": "default-ssh-auth",
		"tableName": "KVM_DEFAULT-SSH-AUTH",
		"opcode": "515",
		"socketFilter": 0,
		"flags": "3",
		"childs": [
			"username",
			"password"
		],
		"dataTypeArray": [
			"STR",
			"STR"
		]
	},
	"/rs232/feature-enable": {
		"columnName": "feature-enable",
		"tableName": "RS232",
		"opcode": "602",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/rs232/0/params": {
		"columnName": "params",
		"tableName": "RS232_0_PARAMS",
		"opcode": "608",
		"socketFilter": 0,
		"flags": "31",
		"childs": [
			"baud-rate",
			"data-bits",
			"parity",
			"stop-bit",
			"flow-control"
		],
		"dataTypeArray": [
			"INTEGER",
			"INTEGER",
			"STR",
			"INTEGER",
			"STR"
		]
	},
	"/rs232/0/data-in-notification": {
		"columnName": "data-in-notification",
		"tableName": "RS232_0",
		"opcode": "611",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/input/buffer-type": {
		"columnName": "buffer-type",
		"tableName": "VIDEO_INPUT",
		"opcode": "106",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/input/buffer-delay": {
		"columnName": "buffer-delay",
		"tableName": "VIDEO_INPUT",
		"opcode": "108",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/input/es-rtp-mode": {
		"columnName": "es-rtp-mode",
		"tableName": "VIDEO_INPUT",
		"opcode": "121",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/input/enable-es-msg-auth": {
		"columnName": "enable-es-msg-auth",
		"tableName": "VIDEO_INPUT",
		"opcode": "123",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/input/es-mult-ip-addr": {
		"columnName": "es-mult-ip-addr",
		"tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
		"opcode": "112",
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
	"/overlay/feature-enable": {
		"columnName": "feature-enable",
		"tableName": "OVERLAY",
		"opcode": "302",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/comp-layout/feature-enable": {
		"columnName": "feature-enable",
		"tableName": "COMP-LAYOUT",
		"opcode": "202",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/comp-layout/enable-pip": {
		"columnName": "enable-pip",
		"tableName": "COMP-LAYOUT",
		"opcode": "205",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/comp-layout/pip-loc": {
		"columnName": "pip-loc",
		"tableName": "COMP-LAYOUT_PIP-LOC",
		"opcode": "207",
		"socketFilter": 0,
		"flags": "3",
		"childs": [
			"x-location",
			"y-location"
		],
		"dataTypeArray": [
			"INTEGER",
			"INTEGER"
		]
	},
	"/comp-layout/enable-pap": {
		"columnName": "enable-pap",
		"tableName": "COMP-LAYOUT",
		"opcode": "209",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/system/splash-scrn/enable": {
		"columnName": "enable",
		"tableName": "SYSTEM_SPLASH-SCRN",
		"opcode": "37",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/system/splash-scrn/upload": {
		"columnName": "upload",
		"tableName": "SYSTEM_SPLASH-SCRN_UPLOAD",
		"opcode": "38",
		"socketFilter": 0,
		"flags": "3",
		"childs": [
			"file_name",
			"location"
		],
		"dataTypeArray": [
			"STR",
			"STR"
		]
	}
};

module.exports = JSONObject;
