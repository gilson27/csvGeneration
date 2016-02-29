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
		"opcode": "85",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/system/diagnostics/device-log-level": {
		"columnName": "device-log-level",
		"tableName": "SYSTEM_DIAGNOSTICS",
		"opcode": "31",
		"socketFilter": 1,
		"flags": "0",
		"dataType": "INTEGER",
		"notifyOpcode": 656,
		"socketTask": 1
	},
	"/system/diagnostics/device-log-facility": {
		"columnName": "device-log-facility",
		"tableName": "SYSTEM_DIAGNOSTICS",
		"opcode": "33",
		"socketFilter": 1,
		"flags": "0",
		"dataType": "INTEGER",
		"notifyOpcode": 657,
		"socketTask": 1
	},
	"/system/diagnostics/dev-log-ip-addr": {
		"columnName": "dev-log-ip-addr",
		"tableName": "SYSTEM_DIAGNOSTICS",
		"opcode": "35",
		"socketFilter": 1,
		"flags": "0",
		"dataType": "STR"
	},
	"/system/video-mode/enable-3d": {
		"columnName": "enable-3d",
		"tableName": "SYSTEM_VIDEO-MODE",
		"opcode": "52",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/system/misc/ftp-mode": {
		"columnName": "ftp-mode",
		"tableName": "SYSTEM_MISC",
		"opcode": "73",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
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
	"/system/misc/acc1-reaction": {
		"columnName": "acc1-reaction",
		"tableName": "SYSTEM_MISC",
		"opcode": "77",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/system/misc/acc2-reaction": {
		"columnName": "acc2-reaction",
		"tableName": "SYSTEM_MISC",
		"opcode": "79",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/system/misc/acc1-notify": {
		"columnName": "acc1-notify",
		"tableName": "SYSTEM_MISC",
		"opcode": "81",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/system/misc/acc2-notify": {
		"columnName": "acc2-notify",
		"tableName": "SYSTEM_MISC",
		"opcode": "83",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/kvm/feature-enable": {
		"columnName": "feature-enable",
		"tableName": "KVM",
		"opcode": "502",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
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
	"/video/input/analog-video": {
		"columnName": "analog-video",
		"tableName": "VIDEO_INPUT",
		"opcode": "106",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/input/enable-color-bar": {
		"columnName": "enable-color-bar",
		"tableName": "VIDEO_INPUT",
		"opcode": "109",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/input/enable-manual-rx-phy-settings": {
		"columnName": "enable-manual-rx-phy-settings",
		"tableName": "VIDEO_INPUT",
		"opcode": "150",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/input/rx-phy-parameters": {
		"columnName": "rx-phy-parameters",
		"tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
		"opcode": "111",
		"socketFilter": 0,
		"flags": "2047",
		"childs": [
			"y-dc-bias",
			"cr-dc-bias",
			"cb-dc-bias",
			"video-gain",
			"chroma-gain",
			"hue",
			"pedestal-enable",
			"y-gain",
			"cr-gain",
			"cb-gain",
			"internal-video-generator-enable"
		],
		"dataTypeArray": [
			"INTEGER",
			"INTEGER",
			"INTEGER",
			"DOUBLE",
			"DOUBLE",
			"INTEGER",
			"INTEGER",
			"DOUBLE",
			"DOUBLE",
			"DOUBLE",
			"INTEGER"
		]
	},
	"/video/output/frame-rate": {
		"columnName": "frame-rate",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "114",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/output/enable-pes-tx": {
		"columnName": "enable-pes-tx",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "119",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/output/enable-ses-tx": {
		"columnName": "enable-ses-tx",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "120",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/output/pes-resolution": {
		"columnName": "pes-resolution",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "122",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "STR"
	},
	"/video/output/ses-resolution": {
		"columnName": "ses-resolution",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "124",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "STR"
	},
	"/video/output/pes-bit-rate": {
		"columnName": "pes-bit-rate",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "126",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/output/ses-bit-rate": {
		"columnName": "ses-bit-rate",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "128",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/output/pes-mult-ip-addr": {
		"columnName": "pes-mult-ip-addr",
		"tableName": "VIDEO_OUTPUT_PES-MULT-IP-ADDR",
		"opcode": "132",
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
	"/video/output/ses-mult-ip-addr": {
		"columnName": "ses-mult-ip-addr",
		"tableName": "VIDEO_OUTPUT_SES-MULT-IP-ADDR",
		"opcode": "134",
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
	"/video/output/pes-rtp-mode": {
		"columnName": "pes-rtp-mode",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "136",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/output/enable-pes-msg-auth": {
		"columnName": "enable-pes-msg-auth",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "138",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/output/enable-pes-replay-protection": {
		"columnName": "enable-pes-replay-protection",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "140",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/output/ses-rtp-mode": {
		"columnName": "ses-rtp-mode",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "142",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/output/enable-ses-msg-auth": {
		"columnName": "enable-ses-msg-auth",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "144",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/video/output/enable-ses-replay-protection": {
		"columnName": "enable-ses-replay-protection",
		"tableName": "VIDEO_OUTPUT",
		"opcode": "146",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/overlay/feature-enable": {
		"columnName": "feature-enable",
		"tableName": "OVERLAY",
		"opcode": "302",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
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
		"flags": "15",
		"childs": [
			"transparency",
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
		"flags": "15",
		"childs": [
			"transparency",
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
		"flags": "15",
		"childs": [
			"transparency",
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
		"flags": "15",
		"childs": [
			"transparency",
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
		"flags": "15",
		"childs": [
			"transparency",
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
		"flags": "15",
		"childs": [
			"transparency",
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
		"flags": "15",
		"childs": [
			"transparency",
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
		"flags": "15",
		"childs": [
			"transparency",
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
	"/still-capture/feature-enable": {
		"columnName": "feature-enable",
		"tableName": "STILL-CAPTURE",
		"opcode": "202",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/still-capture/enable-pip": {
		"columnName": "enable-pip",
		"tableName": "STILL-CAPTURE",
		"opcode": "205",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/still-capture/ip-addr": {
		"columnName": "ip-addr",
		"tableName": "STILL-CAPTURE_IP-ADDR",
		"opcode": "207",
		"socketFilter": 0,
		"flags": "3",
		"childs": [
			"ip_addr",
			"location"
		],
		"dataTypeArray": [
			"STR",
			"STR"
		]
	},
	"/still-capture/pip-loc": {
		"columnName": "pip-loc",
		"tableName": "STILL-CAPTURE_PIP-LOC",
		"opcode": "209",
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
	"/still-capture/pip-time": {
		"columnName": "pip-time",
		"tableName": "STILL-CAPTURE_PIP-TIME",
		"opcode": "211",
		"socketFilter": 0,
		"flags": "1",
		"childs": [
			"time"
		],
		"dataTypeArray": [
			"INTEGER"
		]
	},
	"/still-capture/enable-transfer": {
		"columnName": "enable-transfer",
		"tableName": "STILL-CAPTURE",
		"opcode": "213",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/still-capture/auto-transfer": {
		"columnName": "auto-transfer",
		"tableName": "STILL-CAPTURE",
		"opcode": "215",
		"socketFilter": 0,
		"flags": "0",
		"dataType": "INTEGER"
	},
	"/still-capture/jpeg-quality": {
		"columnName": "jpeg-quality",
		"tableName": "STILL-CAPTURE",
		"opcode": "218",
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
