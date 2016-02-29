{
    "system": {
        "firmware": {
            "fpga-version": {
                "tableName": "SYSTEM_FIRMWARE",
                "method": [
                    "GET"
                ],
                "socket": [
                    "1"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "processor-version": {
                "tableName": "SYSTEM_FIRMWARE",
                "method": [
                    "GET"
                ],
                "socket": [
                    "2"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "processor-field-upgrade": {
                "tableName": "SYSTEM_FIRMWARE",
                "method": [
                    "POST"
                ],
                "socket": [
                    "3"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "fpga-field-upgrade": {
                "tableName": "SYSTEM_FIRMWARE",
                "method": [
                    "POST"
                ],
                "socket": [
                    "4"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "fpga-upgrade-status": {
                "tableName": "SYSTEM_FIRMWARE",
                "method": [
                    "GET"
                ],
                "socket": [
                    "5"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "processor-upgrade-status": {
                "tableName": "SYSTEM_FIRMWARE",
                "method": [
                    "GET"
                ],
                "socket": [
                    "6"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "switch": {
                "tableName": "SYSTEM_FIRMWARE",
                "method": [
                    "POST"
                ],
                "socket": [
                    "7"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "serial-no": {
                "tableName": "SYSTEM_FIRMWARE",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "8",
                    "9"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "TYPE"
                ],
                "NONE": null
            }
        },
        "network": {
            "ip-settings": {
                "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "10",
                    "11"
                ],
                "access": "user",
                "socketFilter": 0,
                "ip-addr": {
                    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
                    "method": [
                        "GET",
                        "POST"
                    ],
                    "socket": [
                        "10",
                        "11"
                    ],
                    "access": "user",
                    "socketFilter": 0,
                    "filter": [
                        "TYPE"
                    ],
                    "NONE": null
                },
                "subnet-mask": {
                    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
                    "method": [
                        "GET",
                        "POST"
                    ],
                    "socket": [
                        "12",
                        "13"
                    ],
                    "access": "user",
                    "socketFilter": 0,
                    "filter": [
                        "TYPE"
                    ],
                    "NONE": null
                },
                "gateway": {
                    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
                    "method": [
                        "GET",
                        "POST"
                    ],
                    "socket": [
                        "14",
                        "15"
                    ],
                    "access": "user",
                    "socketFilter": 0,
                    "filter": [
                        "TYPE"
                    ],
                    "NONE": null
                }
            },
            "tos": {
                "tableName": "SYSTEM_NETWORK",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "16",
                    "17"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 7
            },
            "mtu-size": {
                "tableName": "SYSTEM_NETWORK",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "18",
                    "19"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 1500
            },
            "mode": {
                "tableName": "SYSTEM_NETWORK",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "20",
                    "21"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [
                    "LIST"
                ],
                "NONE": null
            },
            "notify-ip-addr": {
                "tableName": "SYSTEM_NETWORK",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "22",
                    "23"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [
                    "TYPE"
                ],
                "NONE": null
            },
            "port": {
                "tableName": "SYSTEM_NETWORK",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "24",
                    "25"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [
                    "TYPE"
                ],
                "NONE": null
            }
        },
        "diagnostics": {
            "hw-status": {
                "tableName": "SYSTEM_DIAGNOSTICS",
                "method": [
                    "GET"
                ],
                "socket": [
                    "26"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "temperature": {
                "tableName": "SYSTEM_DIAGNOSTICS",
                "method": [
                    "GET"
                ],
                "socket": [
                    "27"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "device-log": {
                "tableName": "SYSTEM_DIAGNOSTICS",
                "method": [
                    "GET"
                ],
                "socket": [
                    "28"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "device-log-level": {
                "tableName": "SYSTEM_DIAGNOSTICS",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "29",
                    "30"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 7
            },
            "device-log-facility": {
                "tableName": "SYSTEM_DIAGNOSTICS",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "31",
                    "32"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 3
            },
            "dev-log-ip-addr": {
                "tableName": "SYSTEM_DIAGNOSTICS",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "33",
                    "34"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "TYPE"
                ],
                "NONE": null
            }
        },
        "splash-scrn": {
            "enable": {
                "tableName": "SYSTEM_SPLASH-SCRN",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "35",
                    "36"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 1
            },
            "upload": {
                "tableName": "SYSTEM_SPLASH-SCRN",
                "method": [
                    "POST"
                ],
                "socket": [
                    "37"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "get-name": {
                "tableName": "SYSTEM_SPLASH-SCRN",
                "method": [
                    "GET"
                ],
                "socket": [
                    "38"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            }
        },
        "reset": {
            "soft-reset ": {
                "tableName": "SYSTEM_RESET",
                "method": [
                    "POST"
                ],
                "socket": [
                    "39"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [
                    "LIST"
                ],
                "NONE": null
            },
            "configuration-reset": {
                "tableName": "SYSTEM_RESET",
                "method": [
                    "POST"
                ],
                "socket": [
                    "40"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [
                    "LIST"
                ],
                "NONE": null
            },
            "factory-reset": {
                "tableName": "SYSTEM_RESET",
                "method": [
                    "POST"
                ],
                "socket": [
                    "41"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [
                    "LIST"
                ],
                "NONE": null
            }
        },
        "reboot": {
            "tableName": "SYSTEM",
            "method": [
                "POST"
            ],
            "socket": [
                "42"
            ],
            "access": "user",
            "socketFilter": 0,
            "filter": [
                "LIST"
            ],
            "NONE": null
        },
        "authentication": {
            "user": {
                "tableName": "SYSTEM_AUTHENTICATION",
                "method": [
                    "POST"
                ],
                "socket": [
                    "0"
                ],
                "access": "user",
                "socketFilter": 1,
                "filter": [],
                "NONE": null
            },
            "user-pwd": {
                "tableName": "SYSTEM_AUTHENTICATION",
                "method": [
                    "POST"
                ],
                "socket": [
                    "0"
                ],
                "access": "user",
                "socketFilter": 1,
                "filter": [],
                "NONE": null
            },
            "admin": {
                "tableName": "SYSTEM_AUTHENTICATION",
                "method": [
                    "POST"
                ],
                "socket": [
                    "0"
                ],
                "access": "user",
                "socketFilter": 1,
                "filter": [],
                "NONE": null
            },
            "admin-pwd": {
                "tableName": "SYSTEM_AUTHENTICATION",
                "method": [
                    "POST"
                ],
                "socket": [
                    "0"
                ],
                "access": "user",
                "socketFilter": 1,
                "filter": [],
                "NONE": null
            }
        },
        "identification": {
            "id": {
                "tableName": "SYSTEM_IDENTIFICATION",
                "method": [
                    "GET"
                ],
                "socket": [
                    "43"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            }
        },
        "video-mode": {
            "enable-3d": {
                "tableName": "SYSTEM_VIDEO-MODE",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "44",
                    "45"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 1
            }
        },
        "config-file ": {
            "upload": {
                "tableName": "SYSTEM_CONFIG-FILE",
                "method": [
                    "GET"
                ],
                "socket": [
                    "46"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "download": {
                "tableName": "SYSTEM_CONFIG-FILE",
                "method": [
                    "POST"
                ],
                "socket": [
                    "47"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "delete": {
                "tableName": "SYSTEM_CONFIG-FILE",
                "method": [
                    "POST"
                ],
                "socket": [
                    "48"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "update": {
                "tableName": "SYSTEM_CONFIG-FILE",
                "method": [
                    "POST"
                ],
                "socket": [
                    "49"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            }
        },
        "misc": {
            "board-type": {
                "tableName": "SYSTEM_MISC",
                "method": [
                    "GET"
                ],
                "socket": [
                    "50"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [
                    "LIST "
                ],
                "NONE": null
            },
            "led-on-time": {
                "tableName": "SYSTEM_MISC",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "51",
                    "52"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 1
            },
            "led-off-time": {
                "tableName": "SYSTEM_MISC",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "53",
                    "54"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 1
            },
            "http-mode": {
                "tableName": "SYSTEM_MISC",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "55",
                    "56"
                ],
                "access": "admin",
                "socketFilter": 1,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 1
            },
            "enable-encryption": {
                "tableName": "SYSTEM_MISC",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "57",
                    "58"
                ],
                "access": "admin",
                "socketFilter": 1,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 1
            }
        }
    },
    "video": {
        "input": {
            "streams ": {
                "tableName": "VIDEO_INPUT",
                "method": [
                    "GET"
                ],
                "socket": [
                    "101"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "resolution": {
                "tableName": "VIDEO_INPUT",
                "method": [
                    "GET"
                ],
                "socket": [
                    "102"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "frame-rate": {
                "tableName": "VIDEO_INPUT",
                "method": [
                    "GET"
                ],
                "socket": [
                    "103"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "valid-input": {
                "tableName": "VIDEO_INPUT",
                "method": [
                    "GET"
                ],
                "socket": [
                    "104"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "cable-presence": {
                "tableName": "VIDEO_INPUT",
                "method": [
                    "GET"
                ],
                "socket": [
                    "105"
                ],
                "access": "user",
                "socketFilter": 0,
                "filter": [],
                "NONE": null
            },
            "buffer-type": {
                "tableName": "VIDEO_INPUT",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "106",
                    "107"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 1
            },
            "buffer-delay": {
                "tableName": "VIDEO_INPUT",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "108",
                    "109"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 500
            },
            "hqll-mult-ip-addr": {
                "tableName": "VIDEO_INPUT",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "110",
                    "111"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "TYPE"
                ],
                "NONE": null
            },
            "es-mult-ip-addr": {
                "tableName": "VIDEO_INPUT",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "112",
                    "113"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "TYPE"
                ],
                "NONE": null
            },
            "mute": {
                "tableName": "VIDEO_INPUT",
                "method": [
                    "GET",
                    "POST"
                ],
                "socket": [
                    "114",
                    "58"
                ],
                "access": "admin",
                "socketFilter": 0,
                "filter": [
                    "MIN",
                    "MAX"
                ],
                "NONE": null,
                "MAX": 1
            }
        }
    }
}