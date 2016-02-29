/**
 * @author
 * @fileoverview routing get and post requests with URI levels.
 * @date 17 April 2015
 **/

  /*
   * @param filter values :
   *    <dl>
   *    <dt>LIST   <dd> List Alone
   *    <dt>MIN    <dd> Minimum Value
   *    <dt>MAX    <dd> Maximaum Value
   *    <dt>FORMAT <dd> Any extra format check is used
   *    </dl>
   * @param format values :
   *    <dl>
   *    <dt>MULTIPLE2 <dd> Multiple of two
   *    <dt>MULTIPLE5 <dd> Multiple of three
   *    </dl>
   * @param method values :
   *    <ul>
   *    <li>GET
   *    <li>POST
   *    <li>PUT
   *    <li>DELETE
   *    </ul>
   */

var JSONObject = {
	"v1": {
		"api": {
			"system": {
				"firmware": {
					"fpga-version": {
						"tableName": "SYSTEM_FIRMWARE",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "1"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"processor-version": {
						"tableName": "SYSTEM_FIRMWARE",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "2"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"system-version": {
						"tableName": "SYSTEM_FIRMWARE",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "3"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"hw-version": {
						"tableName": "SYSTEM_FIRMWARE",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "4"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"processor-field-upgrade": {
						"tableName": "SYSTEM_FIRMWARE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "5"
						},
						"access": {
							"POST": "admin"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "3"
						},
						"array": [
							"file_name",
							"location"
						],
						"file_name": {
							"tableName": "SYSTEM_FIRMWARE_PROCESSOR-FIELD-UPGRADE",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "5"
							},
							"access": {
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"POST": "1"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR"
						},
						"location": {
							"tableName": "SYSTEM_FIRMWARE_PROCESSOR-FIELD-UPGRADE",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "5"
							},
							"access": {
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"POST": "2"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR"
						}
					},
					"fpga-field-upgrade": {
						"tableName": "SYSTEM_FIRMWARE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "6"
						},
						"access": {
							"POST": "admin"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "3"
						},
						"array": [
							"file_name",
							"location"
						],
						"file_name": {
							"tableName": "SYSTEM_FIRMWARE_FPGA-FIELD-UPGRADE",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "6"
							},
							"access": {
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"POST": "1"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR"
						},
						"location": {
							"tableName": "SYSTEM_FIRMWARE_FPGA-FIELD-UPGRADE",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "6"
							},
							"access": {
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"POST": "2"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR"
						}
					},
					"fpga-upgrade-status": {
						"tableName": "SYSTEM_FIRMWARE",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "7"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "INTEGER"
					},
					"processor-upgrade-status": {
						"tableName": "SYSTEM_FIRMWARE",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "8"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "INTEGER"
					},
					"switch": {
						"tableName": "SYSTEM_FIRMWARE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "9"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"0",
							"1"
						],
						"dataType": "INTEGER",
						"action": "SWITCH"
					},
					"serial-no": {
						"tableName": "SYSTEM_FIRMWARE",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "10",
							"POST": "11"
						},
						"access": {
							"GET": "user",
							"POST": "admin"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"TYPE",
							"dataType"
						],
						"TYPE": [
							"LENGTH16"
						],
						"dataType": "STR"
					}
				},
				"network": {
					"ip-settings": {
						"tableName": "SYSTEM_NETWORK",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "12",
							"POST": "13"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "7",
							"POST": "7"
						},
						"array": [
							"ip-addr",
							"subnet-mask",
							"gateway"
						],
						"action": "IP_SETTINGS",
						"ip-addr": {
							"tableName": "SYSTEM_NETWORK_IP-SETTINGS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "12",
								"POST": "13"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"TYPE",
								"dataType"
							],
							"TYPE": [
								"IPAddress"
							],
							"dataType": "STR",
							"action": "IP_SETTINGS"
						},
						"subnet-mask": {
							"tableName": "SYSTEM_NETWORK_IP-SETTINGS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "12",
								"POST": "13"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"TYPE",
								"dataType"
							],
							"TYPE": [
								"IPAddress"
							],
							"dataType": "STR",
							"action": "IP_SETTINGS"
						},
						"gateway": {
							"tableName": "SYSTEM_NETWORK_IP-SETTINGS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "12",
								"POST": "13"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"TYPE",
								"dataType"
							],
							"TYPE": [
								"IPAddress"
							],
							"dataType": "STR",
							"action": "IP_SETTINGS"
						}
					},
					"tos": {
						"tableName": "SYSTEM_NETWORK",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "14",
							"POST": "15"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 63,
						"dataType": "INTEGER"
					},
					"mtu-size": {
						"tableName": "SYSTEM_NETWORK",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "16",
							"POST": "17"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 64,
						"MAX": 1500,
						"dataType": "INTEGER"
					},
					"mode": {
						"tableName": "SYSTEM_NETWORK",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "18",
							"POST": "19"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"1",
							"2",
							"3"
						],
						"dataType": "INTEGER",
						"action": "IP_MODE"
					},
					"notify-ip-addr": {
						"tableName": "SYSTEM_NETWORK",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "20",
							"POST": "21"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"TYPE",
							"dataType"
						],
						"TYPE": [
							"IPAddress"
						],
						"dataType": "STR",
						"action": "NOTIFY_IP"
					},
					"notify-port": {
						"tableName": "SYSTEM_NETWORK",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "22",
							"POST": "23"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "1",
							"POST": "1"
						},
						"array": [
							"port"
						],
						"action": "NOTIFY_PORT",
						"port": {
							"tableName": "SYSTEM_NETWORK_NOTIFY-PORT",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "22",
								"POST": "23"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"dataType"
							],
							"dataType": "INTEGER",
							"action": "NOTIFY_PORT"
						}
					},
					"image-server-ip-addr": {
						"tableName": "SYSTEM_NETWORK",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "24",
							"POST": "25"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"TYPE",
							"dataType"
						],
						"TYPE": [
							"IPAddress"
						],
						"dataType": "STR"
					},
					"eth-interfaces": {
						"tableName": "SYSTEM_NETWORK",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "26"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "INTEGER"
					}
				},
				"diagnostics": {
					"hw-status": {
						"tableName": "SYSTEM_DIAGNOSTICS",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "27"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"0",
							"1"
						],
						"dataType": "INTEGER"
					},
					"temperature-threshold": {
						"tableName": "SYSTEM_DIAGNOSTICS",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "74",
							"POST": "75"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "INTEGER"
					},
					"temperature": {
						"tableName": "SYSTEM_DIAGNOSTICS",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "28"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "DOUBLE"
					},
					"device-log": {
						"tableName": "SYSTEM_DIAGNOSTICS",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "29"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"device-log-level": {
						"tableName": "SYSTEM_DIAGNOSTICS",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "30",
							"POST": "31"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 7,
						"dataType": "INTEGER",
						"action": "LOG_LEVEL"
					},
					"device-log-facility": {
						"tableName": "SYSTEM_DIAGNOSTICS",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "32",
							"POST": "33"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 3,
						"dataType": "INTEGER",
						"action": "LOG_FACILITY"
					},
					"dev-log-ip-addr": {
						"tableName": "SYSTEM_DIAGNOSTICS",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "34",
							"POST": "35"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"TYPE",
							"dataType"
						],
						"TYPE": [
							"IPAddress"
						],
						"dataType": "STR",
						"action": "LOG_IP_ADDRESS"
					}
				},
				"splash-scrn": {
					"enable": {
						"tableName": "SYSTEM_SPLASH-SCRN",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "36",
							"POST": "37"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					},
					"upload": {
						"tableName": "SYSTEM_SPLASH-SCRN",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "38"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "3"
						},
						"array": [
							"file_name",
							"location"
						],
						"action": "SPLASH_SCREEN_UPLOAD",
						"file_name": {
							"tableName": "SYSTEM_SPLASH-SCRN_UPLOAD",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "38"
							},
							"access": {
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"POST": "1"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "SPLASH_SCREEN_UPLOAD"
						},
						"location": {
							"tableName": "SYSTEM_SPLASH-SCRN_UPLOAD",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "38"
							},
							"access": {
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"POST": "2"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "SPLASH_SCREEN_UPLOAD"
						}
					},
					"get-name": {
						"tableName": "SYSTEM_SPLASH-SCRN",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "39"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					}
				},
				"reset": {
					"soft-reset": {
						"tableName": "SYSTEM_RESET",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "40"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"1"
						],
						"dataType": "INTEGER"
					},
					"configuration-reset": {
						"tableName": "SYSTEM_RESET",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "41"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"1"
						],
						"dataType": "INTEGER",
						"action": "CONFIG_RESET"
					},
					"factory-reset": {
						"tableName": "SYSTEM_RESET",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "42"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"1"
						],
						"dataType": "INTEGER",
						"action": "FACTORY_RESET"
					}
				},
				"reboot": {
					"tableName": "SYSTEM",
					"method": [
						"POST"
					],
					"socket": {
						"POST": "43"
					},
					"access": {
						"POST": "user"
					},
					"socketFilter": 1,
					"flags": {
						"POST": "0"
					},
					"filter": [
						"LIST",
						"dataType"
					],
					"LIST": [
						"1"
					],
					"dataType": "INTEGER",
					"action": "REBOOT"
				},
				"authentication": {
					"admin": {
						"tableName": "SYSTEM_AUTHENTICATION",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "44",
							"POST": "45"
						},
						"access": {
							"GET": "admin",
							"POST": "admin"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "ADMIN_NAME"
					},
					"admin-pwd": {
						"tableName": "SYSTEM_AUTHENTICATION",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "46"
						},
						"access": {
							"POST": "admin"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "ADMIN_PWD"
					},
					"user": {
						"tableName": "SYSTEM_AUTHENTICATION",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "47",
							"POST": "48"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "USER_NAME"
					},
					"user-pwd": {
						"tableName": "SYSTEM_AUTHENTICATION",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "49"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "USER_PWD"
					}
				},
				"identification": {
					"id": {
						"tableName": "SYSTEM_IDENTIFICATION",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "50",
							"POST": "86"
						},
						"access": {
							"GET": "user",
							"POST": "admin"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "ID"
					}
				},
				"video-mode": {
					"enable-3d": {
						"tableName": "SYSTEM_VIDEO-MODE",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "51",
							"POST": "52"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					}
				},
				"config-file": {
					"upload": {
						"tableName": "SYSTEM_CONFIG-FILE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "53"
						},
						"access": {
							"POST": "admin"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "3"
						},
						"array": [
							"file-name",
							"location"
						],
						"file-name": {
							"tableName": "SYSTEM_CONFIG-FILE_UPLOAD",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "53"
							},
							"access": {
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"POST": "1"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR"
						},
						"location": {
							"tableName": "SYSTEM_CONFIG-FILE_UPLOAD",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "53"
							},
							"access": {
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"POST": "2"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR"
						}
					},
					"download": {
						"tableName": "SYSTEM_CONFIG-FILE",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "54"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"delete": {
						"tableName": "SYSTEM_CONFIG-FILE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "55"
						},
						"access": {
							"POST": "admin"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "1"
						},
						"array": [
							"file-name"
						],
						"file-name": {
							"tableName": "SYSTEM_CONFIG-FILE_DELETE",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "55"
							},
							"access": {
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"POST": "1"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR"
						}
					},
					"update": {
						"tableName": "SYSTEM_CONFIG-FILE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "56"
						},
						"access": {
							"POST": "admin"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "CONFIG_UPDATE"
					}
				},
				"mdns": {
					"add-key": {
						"tableName": "SYSTEM_MDNS",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "57"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "0"
						},
						"array": [
							"key",
							"data-value"
						],
						"action": "ADD_RECORD",
						"key": {
							"tableName": "SYSTEM_MDNS_ADD-KEY",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "57"
							},
							"access": {
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"POST": "0"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "ADD_RECORD"
						},
						"data-value": {
							"tableName": "SYSTEM_MDNS_ADD-KEY",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "57"
							},
							"access": {
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"POST": "0"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "ADD_RECORD"
						}
					},
					"delete-key": {
						"tableName": "SYSTEM_MDNS",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "58"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "DELETE_RECORD"
					},
					"read-key": {
						"tableName": "SYSTEM_MDNS",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "59"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "READ_RECORD"
					},
					"edit-key": {
						"tableName": "SYSTEM_MDNS",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "60"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "0"
						},
						"array": [
							"key",
							"data-value"
						],
						"action": "EDIT_RECORD",
						"key": {
							"tableName": "SYSTEM_MDNS_EDIT-KEY",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "60"
							},
							"access": {
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"POST": "0"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "EDIT_RECORD"
						},
						"data-value": {
							"tableName": "SYSTEM_MDNS_EDIT-KEY",
							"method": [
								"POST"
							],
							"socket": {
								"POST": "60"
							},
							"access": {
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"POST": "0"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "EDIT_RECORD"
						}
					}
				},
				"misc": {
					"board-type": {
						"tableName": "SYSTEM_MISC",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "61"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"0",
							"1",
							"2",
							"3"
						],
						"dataType": "INTEGER"
					},
					"led-on-time": {
						"tableName": "SYSTEM_MISC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "62",
							"POST": "63"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 1,
						"MAX": 60,
						"dataType": "INTEGER"
					},
					"led-off-time": {
						"tableName": "SYSTEM_MISC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "64",
							"POST": "65"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 1,
						"MAX": 60,
						"dataType": "INTEGER"
					},
					"http-mode": {
						"tableName": "SYSTEM_MISC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "66",
							"POST": "67"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 1,
						"MAX": 2,
						"dataType": "INTEGER",
						"action": "HTTP_SWITCH"
					},
					"enable-encryption": {
						"tableName": "SYSTEM_MISC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "68",
							"POST": "69"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER",
						"action": "ENCRYPT_DECRYPT"
					},
					"rtc": {
						"tableName": "SYSTEM_MISC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "70",
							"POST": "71"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "63",
							"POST": "63"
						},
						"array": [
							"year",
							"month",
							"day",
							"hour",
							"min",
							"sec"
						],
						"year": {
							"tableName": "SYSTEM_MISC_RTC",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "70",
								"POST": "71"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 1970,
							"MAX": 2050,
							"dataType": "INTEGER"
						},
						"month": {
							"tableName": "SYSTEM_MISC_RTC",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "70",
								"POST": "71"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 1,
							"MAX": 12,
							"dataType": "INTEGER"
						},
						"day": {
							"tableName": "SYSTEM_MISC_RTC",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "70",
								"POST": "71"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 1,
							"MAX": 31,
							"dataType": "INTEGER"
						},
						"hour": {
							"tableName": "SYSTEM_MISC_RTC",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "70",
								"POST": "71"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "8",
								"POST": "8"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 0,
							"MAX": 23,
							"dataType": "INTEGER"
						},
						"min": {
							"tableName": "SYSTEM_MISC_RTC",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "70",
								"POST": "71"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "16",
								"POST": "16"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 0,
							"MAX": 59,
							"dataType": "INTEGER"
						},
						"sec": {
							"tableName": "SYSTEM_MISC_RTC",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "70",
								"POST": "71"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "32",
								"POST": "32"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 0,
							"MAX": 59,
							"dataType": "INTEGER"
						}
					},
					"ftp-mode": {
						"tableName": "SYSTEM_MISC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "72",
							"POST": "73"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 1,
						"MAX": 2,
						"dataType": "INTEGER"
					},
					"ftp-auth": {
						"tableName": "SYSTEM_MISC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "87",
							"POST": "88"
						},
						"access": {
							"GET": "admin",
							"POST": "admin"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "3",
							"POST": "3"
						},
						"array": [
							"username",
							"password"
						],
						"username": {
							"tableName": "SYSTEM_MISC_FTP-AUTH",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "87",
								"POST": "88"
							},
							"access": {
								"GET": "admin",
								"POST": "admin"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR"
						},
						"password": {
							"tableName": "SYSTEM_MISC_FTP-AUTH",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "87",
								"POST": "88"
							},
							"access": {
								"GET": "admin",
								"POST": "admin"
							},
							"socketFilter": 2,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR"
						}
					}
				}
			},
			"video": {
				"input": {
					"streams": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "101"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "INTEGER"
					},
					"resolution": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "102"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"frame-rate": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "103",
							"POST": "124"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"50",
							"59.94"
						],
						"dataType": "DOUBLE"
					},
					"valid-input": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "104"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					},
					"buffer-type": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "105",
							"POST": "106"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					},
					"buffer-delay": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "107",
							"POST": "108"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 1,
						"MAX": 200,
						"dataType": "INTEGER"
					},
					"es-rtp-mode": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "120",
							"POST": "121"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					},
					"enable-es-msg-auth": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "122",
							"POST": "123"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					},
					"hqll-mult-ip-addr": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "109",
							"POST": "110"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "3",
							"POST": "3"
						},
						"array": [
							"ip-addr",
							"port"
						],
						"ip-addr": {
							"tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "109",
								"POST": "110"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"TYPE",
								"dataType"
							],
							"TYPE": [
								"IPAddress"
							],
							"dataType": "STR"
						},
						"port": {
							"tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "109",
								"POST": "110"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"dataType"
							],
							"dataType": "INTEGER"
						}
					},
					"es-mult-ip-addr": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "111",
							"POST": "112"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "3",
							"POST": "3"
						},
						"array": [
							"ip-addr",
							"port"
						],
						"ip-addr": {
							"tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "111",
								"POST": "112"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"TYPE",
								"dataType"
							],
							"TYPE": [
								"IPAddress"
							],
							"dataType": "STR"
						},
						"port": {
							"tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "111",
								"POST": "112"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"dataType"
							],
							"dataType": "INTEGER"
						}
					},
					"mute": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "113",
							"POST": "114"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					}
				},
				"output": {
					"videos": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "115"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"0",
							"1"
						],
						"dataType": "INTEGER"
					},
					"resolution": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "116"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"cable-presence": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "117"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"0",
							"1"
						],
						"dataType": "INTEGER"
					},
					"frame-rate": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "118"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"edid": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "119"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					}
				}
			},
			"comp-layout": {
				"feature-enable": {
					"tableName": "COMP-LAYOUT",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "201",
						"POST": "202"
					},
					"access": {
						"GET": "admin",
						"POST": "admin"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"MIN",
						"MAX",
						"dataType"
					],
					"MIN": 0,
					"MAX": 1,
					"dataType": "INTEGER"
				},
				"available-layout": {
					"tableName": "COMP-LAYOUT",
					"method": [
						"GET"
					],
					"socket": {
						"GET": "203"
					},
					"access": {
						"GET": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0"
					},
					"filter": [
						"MIN",
						"MAX",
						"dataType"
					],
					"MIN": 1,
					"MAX": 2,
					"dataType": "INTEGER"
				},
				"enable-pip": {
					"tableName": "COMP-LAYOUT",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "204",
						"POST": "205"
					},
					"access": {
						"GET": "user",
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"MIN",
						"MAX",
						"dataType"
					],
					"MIN": 0,
					"MAX": 1,
					"dataType": "INTEGER"
				},
				"pip-loc": {
					"tableName": "COMP-LAYOUT",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "206",
						"POST": "207"
					},
					"access": {
						"GET": "user",
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "3",
						"POST": "3"
					},
					"array": [
						"x-location",
						"y-location"
					],
					"x-location": {
						"tableName": "COMP-LAYOUT_PIP-LOC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "206",
							"POST": "207"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "1",
							"POST": "1"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1280,
						"dataType": "INTEGER"
					},
					"y-location": {
						"tableName": "COMP-LAYOUT_PIP-LOC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "206",
							"POST": "207"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "2",
							"POST": "2"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 720,
						"dataType": "INTEGER"
					}
				},
				"enable-pap": {
					"tableName": "COMP-LAYOUT",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "208",
						"POST": "209"
					},
					"access": {
						"GET": "user",
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"MIN",
						"MAX",
						"dataType"
					],
					"MIN": 0,
					"MAX": 1,
					"dataType": "INTEGER"
				},
				"swap-pap": {
					"tableName": "COMP-LAYOUT",
					"method": [
						"POST"
					],
					"socket": {
						"POST": "210"
					},
					"access": {
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"POST": "0"
					},
					"filter": [
						"LIST",
						"dataType"
					],
					"LIST": [
						"0",
						"1"
					],
					"dataType": "INTEGER"
				}
			},
			"overlay": {
				"1": {
					"image-params": {
						"tableName": "OVERLAY_1",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "312",
							"POST": "313"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "63",
							"POST": "7"
						},
						"array": [
							"x-location",
							"y-location",
							"enable"
						],
						"action": "OVERLAY_EDIT",
						"x-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "312",
								"POST": "313"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1918,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"y-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "312",
								"POST": "313"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1078,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"enable": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "312",
								"POST": "313"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"height": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "312"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "8"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1080,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"width": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "312"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1920,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"file-name": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "312"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "OVERLAY_EDIT"
						}
					}
				},
				"2": {
					"image-params": {
						"tableName": "OVERLAY_2",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "314",
							"POST": "315"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "63",
							"POST": "7"
						},
						"array": [
							"x-location",
							"y-location",
							"enable"
						],
						"action": "OVERLAY_EDIT",
						"x-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "314",
								"POST": "315"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1918,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"y-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "314",
								"POST": "315"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1078,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"enable": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "314",
								"POST": "315"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"height": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "314"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "8"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1080,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"width": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "314"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1920,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"file-name": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "314"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "OVERLAY_EDIT"
						}
					}
				},
				"3": {
					"image-params": {
						"tableName": "OVERLAY_3",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "316",
							"POST": "317"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "63",
							"POST": "7"
						},
						"array": [
							"x-location",
							"y-location",
							"enable"
						],
						"action": "OVERLAY_EDIT",
						"x-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "316",
								"POST": "317"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1918,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"y-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "316",
								"POST": "317"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1078,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"enable": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "316",
								"POST": "317"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"height": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "316"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "8"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1080,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"width": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "316"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1920,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"file-name": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "316"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "OVERLAY_EDIT"
						}
					}
				},
				"4": {
					"image-params": {
						"tableName": "OVERLAY_4",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "318",
							"POST": "319"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "63",
							"POST": "7"
						},
						"array": [
							"x-location",
							"y-location",
							"enable"
						],
						"action": "OVERLAY_EDIT",
						"x-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "318",
								"POST": "319"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1918,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"y-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "318",
								"POST": "319"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1078,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"enable": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "318",
								"POST": "319"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"height": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "318"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "8"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1080,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"width": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "318"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1920,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"file-name": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "318"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "OVERLAY_EDIT"
						}
					}
				},
				"5": {
					"image-params": {
						"tableName": "OVERLAY_5",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "320",
							"POST": "321"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "63",
							"POST": "7"
						},
						"array": [
							"x-location",
							"y-location",
							"enable"
						],
						"action": "OVERLAY_EDIT",
						"x-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "320",
								"POST": "321"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1918,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"y-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "320",
								"POST": "321"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1078,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"enable": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "320",
								"POST": "321"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"height": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "320"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "8"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1080,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"width": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "320"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1920,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"file-name": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "320"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "OVERLAY_EDIT"
						}
					}
				},
				"6": {
					"image-params": {
						"tableName": "OVERLAY_6",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "322",
							"POST": "323"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "63",
							"POST": "7"
						},
						"array": [
							"x-location",
							"y-location",
							"enable"
						],
						"action": "OVERLAY_EDIT",
						"x-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "322",
								"POST": "323"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1918,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"y-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "322",
								"POST": "323"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1078,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"enable": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "322",
								"POST": "323"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"height": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "322"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "8"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1080,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"width": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "322"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1920,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"file-name": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "322"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "OVERLAY_EDIT"
						}
					}
				},
				"7": {
					"image-params": {
						"tableName": "OVERLAY_7",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "324",
							"POST": "325"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "63",
							"POST": "7"
						},
						"array": [
							"x-location",
							"y-location",
							"enable"
						],
						"action": "OVERLAY_EDIT",
						"x-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "324",
								"POST": "325"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1918,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"y-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "324",
								"POST": "325"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1078,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"enable": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "324",
								"POST": "325"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"height": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "324"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "8"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1080,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"width": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "324"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1920,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"file-name": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "324"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "OVERLAY_EDIT"
						}
					}
				},
				"8": {
					"image-params": {
						"tableName": "OVERLAY_8",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "326",
							"POST": "327"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "63",
							"POST": "7"
						},
						"array": [
							"x-location",
							"y-location",
							"enable"
						],
						"action": "OVERLAY_EDIT",
						"x-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "326",
								"POST": "327"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1918,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"y-location": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "326",
								"POST": "327"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX",
								"TYPE",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1078,
							"TYPE": [
								"MULTIPLE2"
							],
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"enable": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "326",
								"POST": "327"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 0,
							"MAX": 1,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"height": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "326"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "8"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1080,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"width": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "326"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 2,
							"MAX": 1920,
							"dataType": "INTEGER",
							"action": "OVERLAY_EDIT"
						},
						"file-name": {
							"tableName": "OVERLAY_IMAGE",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "326"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 1,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"dataType"
							],
							"dataType": "STR",
							"action": "OVERLAY_EDIT"
						}
					}
				},
				"feature-enable": {
					"tableName": "OVERLAY",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "301",
						"POST": "302"
					},
					"access": {
						"GET": "admin",
						"POST": "admin"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"MIN",
						"MAX",
						"dataType"
					],
					"MIN": 0,
					"MAX": 1,
					"dataType": "INTEGER"
				},
				"max-images": {
					"tableName": "OVERLAY",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "303",
						"POST": "304"
					},
					"access": {
						"GET": "user",
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"MIN",
						"MAX",
						"dataType"
					],
					"MIN": 1,
					"MAX": 5,
					"dataType": "INTEGER"
				},
				"max-upload-images": {
					"tableName": "OVERLAY",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "305",
						"POST": "306"
					},
					"access": {
						"GET": "user",
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"MIN",
						"MAX",
						"dataType"
					],
					"MIN": 1,
					"MAX": 8,
					"dataType": "INTEGER"
				},
				"enable": {
					"tableName": "OVERLAY",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "307",
						"POST": "308"
					},
					"access": {
						"GET": "user",
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"MIN",
						"MAX",
						"dataType"
					],
					"MIN": 0,
					"MAX": 1,
					"dataType": "INTEGER"
				},
				"upload-image": {
					"tableName": "OVERLAY",
					"method": [
						"POST"
					],
					"socket": {
						"POST": "309"
					},
					"access": {
						"POST": "user"
					},
					"socketFilter": 1,
					"flags": {
						"POST": "31"
					},
					"array": [
						"file-name",
						"location",
						"id",
						"height",
						"width"
					],
					"action": "OVERLAY_UPLOAD",
					"file-name": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "309"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "1"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "OVERLAY_UPLOAD"
					},
					"location": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "309"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "2"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "OVERLAY_UPLOAD"
					},
					"id": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "309"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "4"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 1,
						"MAX": 8,
						"dataType": "INTEGER",
						"action": "OVERLAY_UPLOAD"
					},
					"height": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "309"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "8"
						},
						"filter": [
							"MIN",
							"MAX",
							"TYPE",
							"dataType"
						],
						"MIN": 2,
						"MAX": 1080,
						"TYPE": [
							"MULTIPLE2"
						],
						"dataType": "INTEGER",
						"action": "OVERLAY_UPLOAD"
					},
					"width": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "309"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "16"
						},
						"filter": [
							"MIN",
							"MAX",
							"TYPE",
							"dataType"
						],
						"MIN": 2,
						"MAX": 1920,
						"TYPE": [
							"MULTIPLE2"
						],
						"dataType": "INTEGER",
						"action": "OVERLAY_UPLOAD"
					}
				},
				"upload-mute-image": {
					"tableName": "OVERLAY",
					"method": [
						"POST"
					],
					"socket": {
						"POST": "310"
					},
					"access": {
						"POST": "user"
					},
					"socketFilter": 1,
					"flags": {
						"POST": "15"
					},
					"array": [
						"file-name",
						"location",
						"height",
						"width"
					],
					"action": "OVERLAY_MUTE_UPLOAD",
					"file-name": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "310"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "1"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "OVERLAY_MUTE_UPLOAD"
					},
					"location": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "310"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "2"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "OVERLAY_MUTE_UPLOAD"
					},
					"height": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "310"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "4"
						},
						"filter": [
							"MIN",
							"MAX",
							"TYPE",
							"dataType"
						],
						"MIN": 2,
						"MAX": 1080,
						"TYPE": [
							"MULTIPLE2"
						],
						"dataType": "INTEGER",
						"action": "OVERLAY_MUTE_UPLOAD"
					},
					"width": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "310"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "8"
						},
						"filter": [
							"MIN",
							"MAX",
							"TYPE",
							"dataType"
						],
						"MIN": 2,
						"MAX": 1920,
						"TYPE": [
							"MULTIPLE2"
						],
						"dataType": "INTEGER",
						"action": "OVERLAY_MUTE_UPLOAD"
					}
				},
				"del-image": {
					"tableName": "OVERLAY",
					"method": [
						"POST"
					],
					"socket": {
						"POST": "311"
					},
					"access": {
						"POST": "user"
					},
					"socketFilter": 1,
					"flags": {
						"POST": "1"
					},
					"array": [
						"id"
					],
					"action": "OVERLAY_DELETE",
					"id": {
						"tableName": "OVERLAY_DEL-IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "311"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "1"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR",
						"action": "OVERLAY_DELETE"
					}
				},
				"video-mute-image-params": {
					"tableName": "OVERLAY",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "328",
						"POST": "329"
					},
					"access": {
						"GET": "user",
						"POST": "user"
					},
					"socketFilter": 1,
					"flags": {
						"GET": "15",
						"POST": "3"
					},
					"array": [
						"x-location",
						"y-location"
					],
					"action": "OVERLAY_MUTE_EDIT",
					"x-location": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "328",
							"POST": "329"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "1",
							"POST": "1"
						},
						"filter": [
							"MIN",
							"MAX",
							"TYPE",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1918,
						"TYPE": [
							"MULTIPLE2"
						],
						"dataType": "INTEGER",
						"action": "OVERLAY_MUTE_EDIT"
					},
					"y-location": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "328",
							"POST": "329"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "2",
							"POST": "2"
						},
						"filter": [
							"MIN",
							"MAX",
							"TYPE",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1078,
						"TYPE": [
							"MULTIPLE2"
						],
						"dataType": "INTEGER",
						"action": "OVERLAY_MUTE_EDIT"
					},
					"height": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "328"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "4"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 2,
						"MAX": 1080,
						"dataType": "INTEGER",
						"action": "OVERLAY_MUTE_EDIT"
					},
					"width": {
						"tableName": "OVERLAY_IMAGE",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "328"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "8"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 2,
						"MAX": 1920,
						"dataType": "INTEGER",
						"action": "OVERLAY_MUTE_EDIT"
					}
				}
			},
			"audio": {
				"input": {
					"valid-input": {
						"tableName": "AUDIO_INPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "401"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					},
					"enable-rx": {
						"tableName": "AUDIO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "402",
							"POST": "403"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					},
					"coarse-gain": {
						"tableName": "AUDIO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "406",
							"POST": "407"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 8,
						"dataType": "INTEGER"
					},
					"mute": {
						"tableName": "AUDIO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "408",
							"POST": "409"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					},
					"loopback": {
						"tableName": "AUDIO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "410",
							"POST": "411"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					},
					"rx-mult-ip-addr": {
						"tableName": "AUDIO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "412",
							"POST": "413"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "3",
							"POST": "3"
						},
						"array": [
							"ip-addr",
							"port"
						],
						"ip-addr": {
							"tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "412",
								"POST": "413"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"TYPE",
								"dataType"
							],
							"TYPE": [
								"IPAddress"
							],
							"dataType": "STR"
						},
						"port": {
							"tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "412",
								"POST": "413"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"dataType"
							],
							"dataType": "INTEGER"
						}
					}
				},
				"output": {
					"enable-tx": {
						"tableName": "AUDIO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "414",
							"POST": "415"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					},
					"tx-mult-ip-addr": {
						"tableName": "AUDIO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "416",
							"POST": "417"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "3",
							"POST": "3"
						},
						"array": [
							"ip-addr",
							"port"
						],
						"ip-addr": {
							"tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "416",
								"POST": "417"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"TYPE",
								"dataType"
							],
							"TYPE": [
								"IPAddress"
							],
							"dataType": "STR"
						},
						"port": {
							"tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "416",
								"POST": "417"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"dataType"
							],
							"dataType": "INTEGER"
						}
					},
					"fine-gain": {
						"tableName": "AUDIO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "418",
							"POST": "419"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 7,
						"dataType": "INTEGER"
					},
					"coarse-gain": {
						"tableName": "AUDIO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "420",
							"POST": "421"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 31,
						"dataType": "INTEGER"
					},
					"mute": {
						"tableName": "AUDIO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "422",
							"POST": "423"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					},
					"fade": {
						"tableName": "AUDIO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "424",
							"POST": "425"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX",
							"dataType"
						],
						"MIN": 0,
						"MAX": 1,
						"dataType": "INTEGER"
					}
				}
			},
			"kvm": {
				"feature-enable": {
					"tableName": "KVM",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "501",
						"POST": "502"
					},
					"access": {
						"GET": "admin",
						"POST": "admin"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"MIN",
						"MAX",
						"dataType"
					],
					"MIN": 0,
					"MAX": 1,
					"dataType": "INTEGER"
				},
				"usb-link-status": {
					"tableName": "KVM",
					"method": [
						"GET"
					],
					"socket": {
						"GET": "503"
					},
					"access": {
						"GET": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0"
					},
					"filter": [
						"LIST",
						"dataType"
					],
					"LIST": [
						"0",
						"1"
					],
					"dataType": "INTEGER"
				},
				"enable": {
					"tableName": "KVM",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "504",
						"POST": "505"
					},
					"access": {
						"GET": "user",
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"MIN",
						"MAX",
						"dataType"
					],
					"MIN": 0,
					"MAX": 1,
					"dataType": "INTEGER"
				},
				"encoder": {
					"tableName": "KVM",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "506",
						"POST": "507"
					},
					"access": {
						"GET": "user",
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"TYPE",
						"dataType"
					],
					"TYPE": [
						"IPAddress"
					],
					"dataType": "STR"
				},
				"ssh-auth": {
					"tableName": "KVM",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "512",
						"POST": "513"
					},
					"access": {
						"GET": "admin",
						"POST": "admin"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "3",
						"POST": "3"
					},
					"array": [
						"username",
						"password"
					],
					"username": {
						"tableName": "KVM_SSH-AUTH",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "512",
							"POST": "513"
						},
						"access": {
							"GET": "admin",
							"POST": "admin"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "1",
							"POST": "1"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"password": {
						"tableName": "KVM_SSH-AUTH",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "512",
							"POST": "513"
						},
						"access": {
							"GET": "admin",
							"POST": "admin"
						},
						"socketFilter": 2,
						"flags": {
							"GET": "2",
							"POST": "2"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					}
				},
				"default-ssh-auth": {
					"tableName": "KVM",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "514",
						"POST": "515"
					},
					"access": {
						"GET": "admin",
						"POST": "admin"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "3",
						"POST": "3"
					},
					"array": [
						"username",
						"password"
					],
					"username": {
						"tableName": "KVM_DEFAULT-SSH-AUTH",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "514",
							"POST": "515"
						},
						"access": {
							"GET": "admin",
							"POST": "admin"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "1",
							"POST": "1"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"password": {
						"tableName": "KVM_DEFAULT-SSH-AUTH",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "514",
							"POST": "515"
						},
						"access": {
							"GET": "admin",
							"POST": "admin"
						},
						"socketFilter": 2,
						"flags": {
							"GET": "2",
							"POST": "2"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					}
				},
				"default-encoder": {
					"tableName": "KVM",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "508",
						"POST": "509"
					},
					"access": {
						"GET": "user",
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"TYPE",
						"dataType"
					],
					"TYPE": [
						"IPAddress"
					],
					"dataType": "STR"
				},
				"key-code": {
					"tableName": "KVM",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "510",
						"POST": "511"
					},
					"access": {
						"GET": "user",
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"dataType"
					],
					"dataType": "STR"
				}
			},
			"rs232": {
				"0": {
					"open-connection": {
						"tableName": "RS232_0",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "604"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"0",
							"1"
						],
						"dataType": "INTEGER"
					},
					"close-connection": {
						"tableName": "RS232_0",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "605"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"0",
							"1"
						],
						"dataType": "INTEGER"
					},
					"flush": {
						"tableName": "RS232_0",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "606"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"0",
							"1"
						],
						"dataType": "INTEGER"
					},
					"params": {
						"tableName": "RS232_0",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "607",
							"POST": "608"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "31",
							"POST": "31"
						},
						"array": [
							"baud-rate",
							"data-bits",
							"parity",
							"stop-bit",
							"flow-control"
						],
						"baud-rate": {
							"tableName": "RS232_0_PARAMS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "607",
								"POST": "608"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"LIST",
								"dataType"
							],
							"LIST": [
								"300",
								"600",
								"1200",
								"1800",
								"2400",
								"4800",
								"9600",
								"19200",
								"38400",
								"57600",
								"115200",
								"230400"
							],
							"dataType": "INTEGER"
						},
						"data-bits": {
							"tableName": "RS232_0_PARAMS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "607",
								"POST": "608"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX",
								"dataType"
							],
							"MIN": 5,
							"MAX": 8,
							"dataType": "INTEGER"
						},
						"parity": {
							"tableName": "RS232_0_PARAMS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "607",
								"POST": "608"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"LIST",
								"dataType"
							],
							"LIST": [
								"Even",
								"Odd",
								"None",
								"Mark",
								"Space"
							],
							"dataType": "STR"
						},
						"stop-bit": {
							"tableName": "RS232_0_PARAMS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "607",
								"POST": "608"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "8",
								"POST": "8"
							},
							"filter": [
								"LIST",
								"dataType"
							],
							"LIST": [
								"1",
								"1.5",
								"2"
							],
							"dataType": "DOUBLE"
						},
						"flow-control": {
							"tableName": "RS232_0_PARAMS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "607",
								"POST": "608"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "16",
								"POST": "16"
							},
							"filter": [
								"LIST",
								"dataType"
							],
							"LIST": [
								"Xon",
								"Xoff",
								"Hardware",
								"None"
							],
							"dataType": "STR"
						}
					},
					"send": {
						"tableName": "RS232_0",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "609"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"data-in-notification": {
						"tableName": "RS232_0",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "610",
							"POST": "611"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"LIST",
							"dataType"
						],
						"LIST": [
							"0",
							"1"
						],
						"dataType": "INTEGER"
					},
					"read-existing": {
						"tableName": "RS232_0",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "612"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					},
					"read-line": {
						"tableName": "RS232_0",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "613"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": [
							"dataType"
						],
						"dataType": "STR"
					}
				},
				"feature-enable": {
					"tableName": "RS232",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "601",
						"POST": "602"
					},
					"access": {
						"GET": "admin",
						"POST": "admin"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"LIST",
						"dataType"
					],
					"LIST": [
						"0",
						"1"
					],
					"dataType": "INTEGER"
				},
				"get-devices": {
					"tableName": "RS232",
					"method": [
						"GET"
					],
					"socket": {
						"GET": "603"
					},
					"access": {
						"GET": "user"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0"
					},
					"filter": [
						"dataType"
					],
					"dataType": "STR"
				}
			},
			"fpga-registers": {
				"tableName": "FPGA-REGISTERS",
				"method": [
					"GET",
					"POST"
				],
				"socket": {
					"GET": "701",
					"POST": "702"
				},
				"access": {
					"GET": "user",
					"POST": "user"
				},
				"socketFilter": 1,
				"flags": {
					"GET": "0",
					"POST": "0"
				},
				"filter": [
					"dataType"
				],
				"action": "FPGA_REGISTER",
				"dataType": "STR"
			},
			"i2c-registers": {
				"tableName": "I2C-REGISTERS",
				"method": [
					"GET",
					"POST"
				],
				"socket": {
					"GET": "801",
					"POST": "802"
				},
				"access": {
					"GET": "user",
					"POST": "user"
				},
				"socketFilter": 1,
				"flags": {
					"GET": "0",
					"POST": "0"
				},
				"filter": [
					"dataType"
				],
				"action": "I2C_REGISTER",
				"dataType": "STR"
			}
		}
	}
};

module.exports = JSONObject;
