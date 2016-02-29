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
						"filter": []
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
						"filter": []
					},
					"system-firmware": {
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
						"filter": []
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
						"filter": []
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
							"file-name",
							"location"
						],
						"file-name": {
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
							"filter": []
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
							"filter": []
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
							"file-name",
							"location"
						],
						"file-name": {
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
							"filter": []
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
							"filter": []
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
						"filter": []
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
						"filter": []
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
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": []
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
							"TYPE"
						],
						"TYPE": [
							"Digits16",
							"AlphaNum"
						]
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
								"TYPE"
							],
							"TYPE": [
								"IPAddress"
							]
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
								"TYPE"
							],
							"TYPE": [
								"IPAddress"
							]
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
								"TYPE"
							],
							"TYPE": [
								"IPAddress"
							]
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 7
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
							"MAX"
						],
						"MIN": 64,
						"MAX": 1500
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
							"LIST"
						],
						"LIST": [
							"1",
							"2",
							"3"
						]
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
							"TYPE"
						],
						"TYPE": [
							"IPAddress"
						],
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
							"GET": "0",
							"POST": "0"
						},
						"filter": [],
						"action": "NOTIFY_PORT"
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
							"TYPE"
						],
						"TYPE": [
							"IPAddress"
						]
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
						"filter": []
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
						"filter": []
					},
					"temperature-threshold": {
						"tableName": "SYSTEM_DIAGNOSTICS",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "84",
							"POST": "85"
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
						"filter": []
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
						"filter": []
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
						"filter": []
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
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 7
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
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 3
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
						"socketFilter": 0,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [
							"TYPE"
						],
						"TYPE": [
							"IPAddress"
						]
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
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
						"socketFilter": 0,
						"flags": {
							"POST": "3"
						},
						"array": [
							"file-name",
							"location"
						],
						"file-name": {
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
							"socketFilter": 0,
							"flags": {
								"POST": "1"
							},
							"filter": []
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
							"socketFilter": 0,
							"flags": {
								"POST": "2"
							},
							"filter": []
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
						"filter": []
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
							"LIST"
						],
						"LIST": [
							"1"
						]
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
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"LIST"
						],
						"LIST": [
							"1"
						]
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
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"LIST"
						],
						"LIST": [
							"1"
						]
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
					"socketFilter": 0,
					"flags": {
						"POST": "0"
					},
					"filter": [
						"LIST"
					],
					"LIST": [
						"1"
					]
				},
				"authentication": {
					"user": {
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
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [],
						"action": "USER_NAME"
					},
					"user-pwd": {
						"tableName": "SYSTEM_AUTHENTICATION",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "46"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "0"
						},
						"filter": [],
						"action": "USER_PWD"
					},
					"admin": {
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
							"GET": "admin",
							"POST": "admin"
						},
						"socketFilter": 1,
						"flags": {
							"GET": "0",
							"POST": "0"
						},
						"filter": [],
						"action": "ADMIN_NAME"
					},
					"admin-pwd": {
						"tableName": "SYSTEM_AUTHENTICATION",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "49"
						},
						"access": {
							"POST": "admin"
						},
						"socketFilter": 1,
						"flags": {
							"POST": "0"
						},
						"filter": [],
						"action": "ADMIN_PWD"
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
						"filter": []
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
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
							"POST": "0"
						},
						"filter": []
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
						"filter": []
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
							"POST": "0"
						},
						"filter": []
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
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": []
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
							"filter": [],
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
							"filter": [],
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
						"filter": [],
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
						"filter": [],
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
							"filter": [],
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
							"filter": [],
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
							"LIST"
						],
						"LIST": [
							"0",
							"1",
							"10",
							"11"
						]
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1,
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1,
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
							"GET": "admin",
							"POST": "admin"
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
								"GET": "admin",
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 1970,
							"MAX": 2050
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
								"GET": "admin",
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 1,
							"MAX": 12
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
								"GET": "admin",
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 1,
							"MAX": 31
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
								"GET": "admin",
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "8",
								"POST": "8"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 23
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
								"GET": "admin",
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "16",
								"POST": "16"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 59
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
								"GET": "admin",
								"POST": "admin"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "32",
								"POST": "32"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 59
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
							"MAX"
						],
						"MIN": 1,
						"MAX": 2
					},
					"acc-debounce-time": {
						"tableName": "SYSTEM_MISC",
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
						"filter": []
					},
					"acc1-reaction": {
						"tableName": "SYSTEM_MISC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "76",
							"POST": "77"
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
							"LIST"
						],
						"LIST": [
							"1",
							"2",
							"3"
						]
					},
					"acc2-reaction": {
						"tableName": "SYSTEM_MISC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "78",
							"POST": "79"
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
							"LIST"
						],
						"LIST": [
							"1",
							"2",
							"3"
						]
					},
					"acc1-notify": {
						"tableName": "SYSTEM_MISC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "80",
							"POST": "81"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"acc2-notify": {
						"tableName": "SYSTEM_MISC",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "82",
							"POST": "83"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					}
				}
			},
			"video": {
				"input": {
					"videos": {
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
						"filter": []
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
						"filter": []
					},
					"frame-rate": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "103"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": []
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
						"filter": []
					},
					"cable-presence": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "105"
						},
						"access": {
							"GET": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "0"
						},
						"filter": []
					},
					"analog-video": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "106"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"video-interface": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "107"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"enable-color-bar": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "108",
							"POST": "109"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"rx-phy-parameters": {
						"tableName": "VIDEO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "110",
							"POST": "111"
						},
						"access": {
							"GET": "user",
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"GET": "2047",
							"POST": "2047"
						},
						"array": [
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
						"y-dc-bias": {
							"tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "110",
								"POST": "111"
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
								"MAX"
							],
							"MIN": 0,
							"MAX": 4096
						},
						"cr-dc-bias": {
							"tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "110",
								"POST": "111"
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
								"MAX"
							],
							"MIN": 0,
							"MAX": 4096
						},
						"cb-dc-bias": {
							"tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "110",
								"POST": "111"
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
								"MAX"
							],
							"MIN": 0,
							"MAX": 4096
						},
						"video-gain": {
							"tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "110",
								"POST": "111"
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
								"MAX"
							],
							"MIN": 0,
							"MAX": 4
						},
						"chroma-gain": {
							"tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "110",
								"POST": "111"
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
								"MAX"
							],
							"MIN": 0,
							"MAX": 8
						},
						"hue": {
							"tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "110",
								"POST": "111"
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
								"MAX"
							],
							"MIN": -180,
							"MAX": 180
						},
						"pedestal-enable": {
							"tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "110",
								"POST": "111"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "64",
								"POST": "64"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 1,
							"MAX": 0
						},
						"y-gain": {
							"tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "110",
								"POST": "111"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "128",
								"POST": "128"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1
						},
						"cr-gain": {
							"tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "110",
								"POST": "111"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "256",
								"POST": "256"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1
						},
						"cb-gain": {
							"tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "110",
								"POST": "111"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "512",
								"POST": "512"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1
						},
						"internal-video-generator-enable": {
							"tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "110",
								"POST": "111"
							},
							"access": {
								"GET": "user",
								"POST": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "1024",
								"POST": "1024"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1
						}
					}
				},
				"output": {
					"streams": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET"
						],
						"socket": {
							"GET": "112"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 3
					},
					"frame-rate": {
						"tableName": "VIDEO_OUTPUT",
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"hqll-tx-status": {
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
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"pes-tx-status": {
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
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"ses-tx-status": {
						"tableName": "VIDEO_OUTPUT",
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
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"enable-hqll-tx": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "118"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"enable-pes-tx": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "119"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"enable-ses-tx": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "120"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "0"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"pes-resolution": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "121",
							"POST": "122"
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
							"LIST"
						],
						"LIST": [
							"720p",
							"1080p"
						]
					},
					"ses-resolution": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "123",
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
							"LIST"
						],
						"LIST": [
							"360p"
						]
					},
					"pes-bit-rate": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "125",
							"POST": "126"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 3000000
					},
					"ses-bit-rate": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "127",
							"POST": "128"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 256000
					},
					"hqll-mult-ip-addr": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "129",
							"POST": "130"
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
							"tableName": "VIDEO_OUTPUT_HQLL-MULT-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "129",
								"POST": "130"
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
								"TYPE"
							],
							"TYPE": [
								"IPAddress"
							]
						},
						"port": {
							"tableName": "VIDEO_OUTPUT_HQLL-MULT-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "129",
								"POST": "130"
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
							"filter": []
						}
					},
					"pes-mult-ip-addr": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "131",
							"POST": "132"
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
							"tableName": "VIDEO_OUTPUT_PES-MULT-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "131",
								"POST": "132"
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
								"TYPE"
							],
							"TYPE": [
								"IPAddress"
							]
						},
						"port": {
							"tableName": "VIDEO_OUTPUT_PES-MULT-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "131",
								"POST": "132"
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
							"filter": []
						}
					},
					"ses-mult-ip-addr": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "133",
							"POST": "134"
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
							"tableName": "VIDEO_OUTPUT_SES-MULT-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "133",
								"POST": "134"
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
								"TYPE"
							],
							"TYPE": [
								"IPAddress"
							]
						},
						"port": {
							"tableName": "VIDEO_OUTPUT_SES-MULT-IP-ADDR",
							"method": [
								"GET",
								"POST"
							],
							"socket": {
								"GET": "133",
								"POST": "134"
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
							"filter": []
						}
					},
					"pes-rtp-mode": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "135",
							"POST": "136"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"enable-pes-msg-auth": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "137",
							"POST": "138"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"enable-pes-replay-protection": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "139",
							"POST": "140"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"ses-rtp-mode": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "141",
							"POST": "142"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"enable-ses-msg-auth": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "143",
							"POST": "144"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"enable-ses-replay-protection": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "145",
							"POST": "146"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"mute": {
						"tableName": "VIDEO_OUTPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "147",
							"POST": "148"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					}
				}
			},
			"still-capture": {
				"feature-enable": {
					"tableName": "STILL-CAPTURE",
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
						"MAX"
					],
					"MIN": 1
				},
				"capture-image": {
					"tableName": "STILL-CAPTURE",
					"method": [
						"POST"
					],
					"socket": {
						"POST": "203"
					},
					"access": {
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"POST": "0"
					},
					"filter": [
						"MIN",
						"MAX"
					],
					"MIN": 1,
					"MAX": 2
				},
				"enable-pip": {
					"tableName": "STILL-CAPTURE",
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
						"MAX"
					],
					"MIN": 1,
					"MAX": 2
				},
				"ip-addr": {
					"tableName": "STILL-CAPTURE",
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
						"ip-addr",
						"location"
					],
					"ip-addr": {
						"tableName": "STILL-CAPTURE_IP-ADDR",
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
						"filter": []
					},
					"location": {
						"tableName": "STILL-CAPTURE_IP-ADDR",
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
						"filter": []
					}
				},
				"pip-loc": {
					"tableName": "STILL-CAPTURE",
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
						"GET": "3",
						"POST": "3"
					},
					"array": [
						"x-location",
						"y-location"
					],
					"x-location": {
						"tableName": "STILL-CAPTURE_PIP-LOC",
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
							"GET": "1",
							"POST": "1"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"y-location": {
						"tableName": "STILL-CAPTURE_PIP-LOC",
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
							"GET": "2",
							"POST": "2"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					}
				},
				"pip-time": {
					"tableName": "STILL-CAPTURE",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "210",
						"POST": "211"
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
						"MAX"
					],
					"MIN": 0,
					"MAX": 1
				},
				"enable-transfer": {
					"tableName": "STILL-CAPTURE",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "212",
						"POST": "213"
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
						"MAX"
					],
					"MIN": 0,
					"MAX": 1
				},
				"auto-transfer": {
					"tableName": "STILL-CAPTURE",
					"method": [
						"GET",
						"POST"
					],
					"socket": {
						"GET": "214",
						"POST": "215"
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
						"MAX"
					],
					"MIN": 0,
					"MAX": 1
				},
				"transfer": {
					"tableName": "STILL-CAPTURE",
					"method": [
						"POST"
					],
					"socket": {
						"POST": "216"
					},
					"access": {
						"POST": "user"
					},
					"socketFilter": 0,
					"flags": {
						"POST": "0"
					},
					"filter": []
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
						"socketFilter": 0,
						"flags": {
							"GET": "127",
							"POST": "15"
						},
						"array": [
							"transparency",
							"x-location",
							"y-location",
							"enable"
						],
						"transparency": {
							"tableName": "OVERLAY_1_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 7
						},
						"x-location": {
							"tableName": "OVERLAY_1_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"y-location": {
							"tableName": "OVERLAY_1_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"enable": {
							"tableName": "OVERLAY_1_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "8",
								"POST": "8"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1
						},
						"height": {
							"tableName": "OVERLAY_1_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "312"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"width": {
							"tableName": "OVERLAY_1_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "312"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"file-name": {
							"tableName": "OVERLAY_1_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "312"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "64"
							},
							"filter": []
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
						"socketFilter": 0,
						"flags": {
							"GET": "127",
							"POST": "15"
						},
						"array": [
							"transparency",
							"x-location",
							"y-location",
							"enable"
						],
						"transparency": {
							"tableName": "OVERLAY_2_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 7
						},
						"x-location": {
							"tableName": "OVERLAY_2_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"y-location": {
							"tableName": "OVERLAY_2_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"enable": {
							"tableName": "OVERLAY_2_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "8",
								"POST": "8"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1
						},
						"height": {
							"tableName": "OVERLAY_2_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "314"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"width": {
							"tableName": "OVERLAY_2_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "314"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"file-name": {
							"tableName": "OVERLAY_2_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "314"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "64"
							},
							"filter": []
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
						"socketFilter": 0,
						"flags": {
							"GET": "127",
							"POST": "15"
						},
						"array": [
							"transparency",
							"x-location",
							"y-location",
							"enable"
						],
						"transparency": {
							"tableName": "OVERLAY_3_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 7
						},
						"x-location": {
							"tableName": "OVERLAY_3_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"y-location": {
							"tableName": "OVERLAY_3_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"enable": {
							"tableName": "OVERLAY_3_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "8",
								"POST": "8"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1
						},
						"height": {
							"tableName": "OVERLAY_3_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "316"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"width": {
							"tableName": "OVERLAY_3_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "316"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"file-name": {
							"tableName": "OVERLAY_3_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "316"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "64"
							},
							"filter": []
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
						"socketFilter": 0,
						"flags": {
							"GET": "127",
							"POST": "15"
						},
						"array": [
							"transparency",
							"x-location",
							"y-location",
							"enable"
						],
						"transparency": {
							"tableName": "OVERLAY_4_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 7
						},
						"x-location": {
							"tableName": "OVERLAY_4_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"y-location": {
							"tableName": "OVERLAY_4_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"enable": {
							"tableName": "OVERLAY_4_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "8",
								"POST": "8"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1
						},
						"height": {
							"tableName": "OVERLAY_4_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "318"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"width": {
							"tableName": "OVERLAY_4_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "318"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"file-name": {
							"tableName": "OVERLAY_4_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "318"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "64"
							},
							"filter": []
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
						"socketFilter": 0,
						"flags": {
							"GET": "127",
							"POST": "15"
						},
						"array": [
							"transparency",
							"x-location",
							"y-location",
							"enable"
						],
						"transparency": {
							"tableName": "OVERLAY_5_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 7
						},
						"x-location": {
							"tableName": "OVERLAY_5_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"y-location": {
							"tableName": "OVERLAY_5_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"enable": {
							"tableName": "OVERLAY_5_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "8",
								"POST": "8"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1
						},
						"height": {
							"tableName": "OVERLAY_5_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "320"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"width": {
							"tableName": "OVERLAY_5_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "320"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"file-name": {
							"tableName": "OVERLAY_5_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "320"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "64"
							},
							"filter": []
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
						"socketFilter": 0,
						"flags": {
							"GET": "127",
							"POST": "15"
						},
						"array": [
							"transparency",
							"x-location",
							"y-location",
							"enable"
						],
						"transparency": {
							"tableName": "OVERLAY_6_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 7
						},
						"x-location": {
							"tableName": "OVERLAY_6_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"y-location": {
							"tableName": "OVERLAY_6_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"enable": {
							"tableName": "OVERLAY_6_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "8",
								"POST": "8"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1
						},
						"height": {
							"tableName": "OVERLAY_6_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "322"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"width": {
							"tableName": "OVERLAY_6_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "322"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"file-name": {
							"tableName": "OVERLAY_6_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "322"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "64"
							},
							"filter": []
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
						"socketFilter": 0,
						"flags": {
							"GET": "127",
							"POST": "15"
						},
						"array": [
							"transparency",
							"x-location",
							"y-location",
							"enable"
						],
						"transparency": {
							"tableName": "OVERLAY_7_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 7
						},
						"x-location": {
							"tableName": "OVERLAY_7_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"y-location": {
							"tableName": "OVERLAY_7_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"enable": {
							"tableName": "OVERLAY_7_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "8",
								"POST": "8"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1
						},
						"height": {
							"tableName": "OVERLAY_7_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "324"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"width": {
							"tableName": "OVERLAY_7_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "324"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"file-name": {
							"tableName": "OVERLAY_7_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "324"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "64"
							},
							"filter": []
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
						"socketFilter": 0,
						"flags": {
							"GET": "127",
							"POST": "15"
						},
						"array": [
							"transparency",
							"x-location",
							"y-location",
							"enable"
						],
						"transparency": {
							"tableName": "OVERLAY_8_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "1",
								"POST": "1"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 7
						},
						"x-location": {
							"tableName": "OVERLAY_8_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "2",
								"POST": "2"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"y-location": {
							"tableName": "OVERLAY_8_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "4",
								"POST": "4"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"enable": {
							"tableName": "OVERLAY_8_IMAGE-PARAMS",
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
							"socketFilter": 0,
							"flags": {
								"GET": "8",
								"POST": "8"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1
						},
						"height": {
							"tableName": "OVERLAY_8_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "326"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "16"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1079
						},
						"width": {
							"tableName": "OVERLAY_8_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "326"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "32"
							},
							"filter": [
								"MIN",
								"MAX"
							],
							"MIN": 0,
							"MAX": 1919
						},
						"file-name": {
							"tableName": "OVERLAY_8_IMAGE-PARAMS",
							"method": [
								"GET"
							],
							"socket": {
								"GET": "326"
							},
							"access": {
								"GET": "user"
							},
							"socketFilter": 0,
							"flags": {
								"GET": "64"
							},
							"filter": []
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
						"MAX"
					],
					"MIN": 0,
					"MAX": 1
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
						"POST": "admin"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"MIN",
						"MAX"
					],
					"MIN": 1,
					"MAX": 5
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
						"POST": "admin"
					},
					"socketFilter": 0,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [
						"MIN",
						"MAX"
					],
					"MIN": 1,
					"MAX": 8
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
						"MAX"
					],
					"MIN": 0,
					"MAX": 1
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
					"socketFilter": 0,
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
					"file-name": {
						"tableName": "OVERLAY_UPLOAD-IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "309"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "1"
						},
						"filter": []
					},
					"location": {
						"tableName": "OVERLAY_UPLOAD-IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "309"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "2"
						},
						"filter": []
					},
					"id": {
						"tableName": "OVERLAY_UPLOAD-IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "309"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "4"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 1,
						"MAX": 8
					},
					"height": {
						"tableName": "OVERLAY_UPLOAD-IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "309"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "8"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 1,
						"MAX": 1079
					},
					"width": {
						"tableName": "OVERLAY_UPLOAD-IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "309"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "16"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 1,
						"MAX": 1919
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
					"socketFilter": 0,
					"flags": {
						"POST": "15"
					},
					"array": [
						"file-name",
						"location",
						"height",
						"width"
					],
					"file-name": {
						"tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "310"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "1"
						},
						"filter": []
					},
					"location": {
						"tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "310"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "2"
						},
						"filter": []
					},
					"height": {
						"tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "310"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "4"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 1,
						"MAX": 1079
					},
					"width": {
						"tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
						"method": [
							"POST"
						],
						"socket": {
							"POST": "310"
						},
						"access": {
							"POST": "user"
						},
						"socketFilter": 0,
						"flags": {
							"POST": "8"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 1,
						"MAX": 1919
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
					"socketFilter": 0,
					"flags": {
						"POST": "0"
					},
					"filter": []
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
						"tableName": "OVERLAY_VIDEO-MUTE-IMAGE-PARAMS",
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
						"socketFilter": 0,
						"flags": {
							"GET": "1",
							"POST": "1"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 1919
					},
					"y-location": {
						"tableName": "OVERLAY_VIDEO-MUTE-IMAGE-PARAMS",
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
						"socketFilter": 0,
						"flags": {
							"GET": "2",
							"POST": "2"
						},
						"filter": [
							"MIN",
							"MAX"
						],
						"MIN": 0,
						"MAX": 1079
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"fine-gain": {
						"tableName": "AUDIO_INPUT",
						"method": [
							"GET",
							"POST"
						],
						"socket": {
							"GET": "404",
							"POST": "405"
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 25
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
					},
					"loop-back": {
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
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
								"TYPE"
							],
							"TYPE": [
								"IPAddress"
							]
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
							"filter": []
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
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
								"TYPE"
							],
							"TYPE": [
								"IPAddress"
							]
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
							"filter": []
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
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
							"MAX"
						],
						"MIN": 0,
						"MAX": 1
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
						"MAX"
					],
					"MIN": 0,
					"MAX": 1
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
					"filter": []
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
						"filter": []
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
						"filter": []
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
						"filter": []
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
							"filter": []
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
							"filter": []
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
							"filter": []
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
							"filter": []
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
							"filter": []
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
						"filter": []
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
						"filter": []
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
						"filter": []
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
						"filter": []
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
					"filter": []
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
					"filter": []
				}
			},
			"fpga-registers": {
				"0": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"1": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"2": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"3": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"4": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"5": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"6": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"7": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"8": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"9": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"10": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"11": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"12": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"13": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"14": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"15": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"16": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"17": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"18": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"19": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"20": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"21": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"22": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"23": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"24": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"25": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"26": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"27": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"28": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"29": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"30": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"31": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"32": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"33": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"34": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"35": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"36": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"37": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"38": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"39": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"40": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"41": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"42": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"43": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"44": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"45": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"46": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"47": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"48": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"49": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"50": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"51": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"52": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"53": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"54": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"55": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"56": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"57": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"58": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"59": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"60": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"61": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"62": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"63": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"64": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"65": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"66": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"67": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"68": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"69": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"70": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"71": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"72": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"73": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"74": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"75": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"76": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"77": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"78": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"79": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"80": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"81": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"82": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"83": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"84": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"85": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"86": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"87": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"88": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"89": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"90": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"91": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"92": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"93": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"94": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"95": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"96": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"97": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"98": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"99": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				},
				"100": {
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
					"filter": [],
					"action": "FPGA_REGISTER"
				}
			},
			"i2c-registers": {
				"66H": {
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
					"filter": [],
					"action": "I2C_REGISTER"
				},
				"99H": {
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
					"filter": [],
					"action": "I2C_REGISTER"
				},
				"20H": {
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
					"socketFilter": 2,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [],
					"action": "I2C_REGISTER"
				},
				"50H": {
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
					"socketFilter": 3,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [],
					"action": "I2C_REGISTER"
				},
				"44H": {
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
					"socketFilter": 4,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [],
					"action": "I2C_REGISTER"
				},
				"2DH": {
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
					"socketFilter": 5,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [],
					"action": "I2C_REGISTER"
				},
				"4AH": {
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
					"socketFilter": 6,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [],
					"action": "I2C_REGISTER"
				},
				"48H": {
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
					"socketFilter": 7,
					"flags": {
						"GET": "0",
						"POST": "0"
					},
					"filter": [],
					"action": "I2C_REGISTER"
				}
			}
		}
	}
};

module.exports = JSONObject;
