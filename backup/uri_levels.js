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

var JSONObject = {api: {v1:
{
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
        "access": "user",
        "socketFilter": 0,
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
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "processor-field-upgrade": {
        "tableName": "SYSTEM_FIRMWARE",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "3"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "fpga-field-upgrade": {
        "tableName": "SYSTEM_FIRMWARE",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "4"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "fpga-upgrade-status": {
        "tableName": "SYSTEM_FIRMWARE",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "5"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "processor-upgrade-status": {
        "tableName": "SYSTEM_FIRMWARE",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "6"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "switch": {
        "tableName": "SYSTEM_FIRMWARE",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "7"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "serial-no": {
        "tableName": "SYSTEM_FIRMWARE",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "8",
          "POST": "9"
        },
        "access": "admin",
        "socketFilter": 0,
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
        "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "10",
          "POST": "11"
        },
        "access": "user",
        "socketFilter": 0,
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
          "access": "user",
          "socketFilter": 0,
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
            "GET": "14",
            "POST": "15"
          },
          "access": "user",
          "socketFilter": 0,
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
            "GET": "16",
            "POST": "17"
          },
          "access": "user",
          "socketFilter": 0,
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
          "GET": "18",
          "POST": "19"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "20",
          "POST": "21"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "22",
          "POST": "23"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": [
          "LIST"
        ],
        "LIST": [
          "1",
          "2",
          "3",
          "4"
        ]
      },
      "notify-ip-addr": {
        "tableName": "SYSTEM_NETWORK",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "0",
          "POST": "0"
        },
        "access": "user",
        "socketFilter": 1,
        "filter": [
          "TYPE"
        ],
        "TYPE": [
          "IPAddress"
        ],
        "action": "NOTIFY_IP"
      },
      "port": {
        "tableName": "SYSTEM_NETWORK",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "0",
          "POST": "0"
        },
        "access": "user",
        "socketFilter": 1,
        "filter": [],
        "action": "NOTIFY_PORT"
      }
    },
    "diagnostics": {
      "hw-status": {
        "tableName": "SYSTEM_DIAGNOSTICS",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "28"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "temperature": {
        "tableName": "SYSTEM_DIAGNOSTICS",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "29"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "device-log": {
        "tableName": "SYSTEM_DIAGNOSTICS",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "30"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "device-log-level": {
        "tableName": "SYSTEM_DIAGNOSTICS",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "31",
          "POST": "32"
        },
        "access": "admin",
        "socketFilter": 0,
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
          "GET": "33",
          "POST": "34"
        },
        "access": "admin",
        "socketFilter": 0,
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
          "GET": "35",
          "POST": "36"
        },
        "access": "admin",
        "socketFilter": 0,
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
          "GET": "37",
          "POST": "38"
        },
        "access": "admin",
        "socketFilter": 0,
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
          "POST": "39"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "get-name": {
        "tableName": "SYSTEM_SPLASH-SCRN",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "40"
        },
        "access": "user",
        "socketFilter": 0,
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
          "POST": "41"
        },
        "access": "user",
        "socketFilter": 0,
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
          "POST": "42"
        },
        "access": "user",
        "socketFilter": 0,
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
          "POST": "43"
        },
        "access": "user",
        "socketFilter": 0,
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
        "POST": "44"
      },
      "access": "admin",
      "socketFilter": 0,
      "filter": [
        "LIST"
      ],
      "LIST": [
        "1"
      ]
    },
    "authentication": {
      "admin": {
        "tableName": "SYSTEM_AUTHENTICATION",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "0"
        },
        "access": "admin",
        "socketFilter": 1,
        "filter": [],
        "action": "ADMIN_NAME"
      },
      "admin-pwd": {
        "tableName": "SYSTEM_AUTHENTICATION",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "0"
        },
        "access": "user",
        "socketFilter": 1,
        "filter": [],
        "action": "ADMIN_PWD"
      },
      "user": {
        "tableName": "SYSTEM_AUTHENTICATION",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "0"
        },
        "access": "user",
        "socketFilter": 1,
        "filter": [],
        "action": "USER_NAME"
      },
      "user-pwd": {
        "tableName": "SYSTEM_AUTHENTICATION",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "0"
        },
        "access": "user",
        "socketFilter": 1,
        "filter": [],
        "action": "USER_PWD"
      }
    },
    "identification": {
      "id": {
        "tableName": "SYSTEM_IDENTIFICATION",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "45"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "46",
          "POST": "47"
        },
        "access": "admin",
        "socketFilter": 0,
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
          "GET"
        ],
        "socket": {
          "GET": "48"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "download": {
        "tableName": "SYSTEM_CONFIG-FILE",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "49"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "delete": {
        "tableName": "SYSTEM_CONFIG-FILE",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "50"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "update": {
        "tableName": "SYSTEM_CONFIG-FILE",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "51"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      }
    },
    "misc": {
      "board-type": {
        "tableName": "SYSTEM_MISC",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "52"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "53",
          "POST": "54"
        },
        "access": "admin",
        "socketFilter": 0,
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
          "GET": "55",
          "POST": "56"
        },
        "access": "admin",
        "socketFilter": 0,
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
          "GET": "0",
          "POST": "0"
        },
        "access": "admin",
        "socketFilter": 1,
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
          "GET": "0",
          "POST": "0"
        },
        "access": "admin",
        "socketFilter": 1,
        "filter": [
          "MIN",
          "MAX"
        ],
        "MIN": 0,
        "MAX": 1,
        "action": "ENCRYPT_DECRYPT"
      }
    },
    "mdns": {
      "add-key": {
        "tableName": "SYSTEM_MDNS",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "0"
        },
        "access": "user",
        "socketFilter": 1,
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
            "POST": "0"
          },
          "access": "user",
          "socketFilter": 1,
          "filter": [],
          "action": "ADD_RECORD"
        },
        "data-value": {
          "tableName": "SYSTEM_MDNS_ADD-KEY",
          "method": [
            "POST"
          ],
          "socket": {
            "POST": "0"
          },
          "access": "user",
          "socketFilter": 1,
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
          "POST": "0"
        },
        "access": "user",
        "socketFilter": 1,
        "filter": [],
        "action": "DELETE_RECORD"
      },
      "read-key": {
        "tableName": "SYSTEM_MDNS",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "0"
        },
        "access": "user",
        "socketFilter": 1,
        "filter": [],
        "action": "READ_RECORD"
      },
      "edit-key": {
        "tableName": "SYSTEM_MDNS",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "0"
        },
        "access": "user",
        "socketFilter": 1,
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
            "POST": "0"
          },
          "access": "user",
          "socketFilter": 1,
          "filter": [],
          "action": "EDIT_RECORD"
        },
        "data-value": {
          "tableName": "SYSTEM_MDNS_EDIT-KEY",
          "method": [
            "POST"
          ],
          "socket": {
            "POST": "0"
          },
          "access": "user",
          "socketFilter": 1,
          "filter": [],
          "action": "EDIT_RECORD"
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
        "access": "user",
        "socketFilter": 0,
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
        "access": "user",
        "socketFilter": 0,
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
        "access": "user",
        "socketFilter": 0,
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
        "access": "user",
        "socketFilter": 0,
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
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "buffer-type": {
        "tableName": "VIDEO_INPUT",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "106",
          "POST": "107"
        },
        "access": "admin",
        "socketFilter": 0,
        "filter": [
          "MIN",
          "MAX"
        ],
        "MIN": 0,
        "MAX": 1
      },
      "buffer-delay": {
        "tableName": "VIDEO_INPUT",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "108",
          "POST": "109"
        },
        "access": "admin",
        "socketFilter": 0,
        "filter": [
          "MIN",
          "MAX"
        ],
        "MIN": 0,
        "MAX": 500
      },
      "hqll-mult-ip-addr": {
        "tableName": "VIDEO_INPUT",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "110",
          "POST": "111"
        },
        "access": "admin",
        "socketFilter": 0,
        "array": [
          "ip-addr",
          "port",
          "END ",
          "getArray",
          "112",
          "114"
        ],
        "ip-addr": {
          "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "112",
            "POST": "113"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "TYPE"
          ],
          "TYPE": [
            "IPAddress"
          ]
        },
        "port": {
          "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "114",
            "POST": "115"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": []
        }
      },
      "es-mult-ip-addr": {
        "tableName": "VIDEO_INPUT",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "116",
          "POST": "117"
        },
        "access": "admin",
        "socketFilter": 0,
        "array": [
          "ip-addr",
          "port",
          "END ",
          "getArray",
          "118",
          "120"
        ],
        "ip-addr": {
          "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "118",
            "POST": "119"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "TYPE"
          ],
          "TYPE": [
            "IPAddress"
          ]
        },
        "port": {
          "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "120",
            "POST": "121"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": []
        }
      },
      "mute": {
        "tableName": "VIDEO_INPUT",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "122",
          "POST": "123"
        },
        "access": "admin",
        "socketFilter": 0,
        "filter": [
          "MIN",
          "MAX"
        ],
        "MIN": 0,
        "MAX": 1
      }
    },
    "output": {
      "videos": {
        "tableName": "VIDEO_OUTPUT",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "124"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "resolution": {
        "tableName": "VIDEO_OUTPUT",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "125"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "frame-rate": {
        "tableName": "VIDEO_OUTPUT",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "126"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
      },
      "edid": {
        "tableName": "VIDEO_OUTPUT",
        "method": [
          "GET"
        ],
        "socket": {
          "GET": "127"
        },
        "access": "user",
        "socketFilter": 0,
        "filter": []
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
        "GET": "151",
        "POST": "152"
      },
      "access": "admin",
      "socketFilter": 0,
      "filter": [
        "MIN",
        "MAX"
      ],
      "MIN": 0,
      "MAX": 1
    },
    "available-layout": {
      "tableName": "COMP-LAYOUT",
      "method": [
        "GET"
      ],
      "socket": {
        "GET": "153"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": [
        "MIN",
        "MAX"
      ],
      "MIN": 1,
      "MAX": 2
    },
    "enable-pip": {
      "tableName": "COMP-LAYOUT",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "154",
        "POST": "155"
      },
      "access": "admin",
      "socketFilter": 0,
      "filter": [
        "MIN",
        "MAX"
      ],
      "MIN": 0,
      "MAX": 1
    },
    "pip-loc": {
      "tableName": "COMP-LAYOUT",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "156",
        "POST": "157"
      },
      "access": "admin",
      "x_location": {
        "tableName": "COMP-LAYOUT",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "158",
          "POST": "159"
        },
        "access": "admin",
        "socketFilter": 0,
        "filter": [
          "MIN",
          "MAX"
        ],
        "MIN": 0,
        "MAX": 1
      },
      "y_location": {
        "tableName": "COMP-LAYOUT",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "160",
          "POST": "161"
        },
        "access": "admin",
        "socketFilter": 0,
        "filter": [
          "MIN",
          "MAX"
        ],
        "MIN": 0,
        "MAX": 1
      }
    },
    "enable-pap": {
      "tableName": "COMP-LAYOUT",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "162",
        "POST": "163"
      },
      "access": "admin",
      "socketFilter": 0,
      "filter": [
        "MIN",
        "MAX"
      ],
      "MIN": 0,
      "MAX": 1
    },
    "swap-pap": {
      "tableName": "COMP-LAYOUT",
      "method": [
        "POST"
      ],
      "socket": {
        "POST": "164"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": [
        "LIST"
      ],
      "LIST": [
        "1"
      ]
    }
  },
  "overlay": {
    "0": {
      "image-params": {
        "tableName": "OVERLAY_0",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "218",
          "POST": "219"
        },
        "access": "admin",
        "socketFilter": 0,
        "array": [
          "id",
          "x_location",
          "y_location",
          "enable",
          "height",
          "width"
        ],
        "id": {
          "tableName": "OVERLAY_0",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "220",
            "POST": "221"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 7
        },
        "x_location": {
          "tableName": "OVERLAY_0",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "222",
            "POST": "223"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
        },
        "y_location": {
          "tableName": "OVERLAY_0",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "224",
            "POST": "225"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "enable": {
          "tableName": "OVERLAY_0",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "226",
            "POST": "227"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1
        },
        "height": {
          "tableName": "OVERLAY_0",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "228",
            "POST": "229"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "width": {
          "tableName": "OVERLAY_0",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "230",
            "POST": "231"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
        }
      }
    },
    "1": {
      "image-params": {
        "tableName": "OVERLAY_1",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "232",
          "POST": "233"
        },
        "access": "admin",
        "socketFilter": 0,
        "array": [
          "id",
          "x_location",
          "y_location",
          "enable",
          "height",
          "width"
        ],
        "id": {
          "tableName": "OVERLAY_1",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "234",
            "POST": "235"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 7
        },
        "x_location": {
          "tableName": "OVERLAY_1",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "236",
            "POST": "237"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
        },
        "y_location": {
          "tableName": "OVERLAY_1",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "238",
            "POST": "239"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "enable": {
          "tableName": "OVERLAY_1",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "240",
            "POST": "241"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1
        },
        "height": {
          "tableName": "OVERLAY_1",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "242",
            "POST": "243"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "width": {
          "tableName": "OVERLAY_1",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "244",
            "POST": "245"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
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
          "GET": "246",
          "POST": "247"
        },
        "access": "admin",
        "socketFilter": 0,
        "array": [
          "id",
          "x_location",
          "y_location",
          "enable",
          "height",
          "width"
        ],
        "id": {
          "tableName": "OVERLAY_2",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "248",
            "POST": "249"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 7
        },
        "x_location": {
          "tableName": "OVERLAY_2",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "250",
            "POST": "251"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
        },
        "y_location": {
          "tableName": "OVERLAY_2",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "252",
            "POST": "253"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "enable": {
          "tableName": "OVERLAY_2",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "254",
            "POST": "255"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1
        },
        "height": {
          "tableName": "OVERLAY_2",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "256",
            "POST": "257"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "width": {
          "tableName": "OVERLAY_2",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "258",
            "POST": "259"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
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
          "GET": "260",
          "POST": "261"
        },
        "access": "admin",
        "socketFilter": 0,
        "array": [
          "id",
          "x_location",
          "y_location",
          "enable",
          "height",
          "width"
        ],
        "id": {
          "tableName": "OVERLAY_3",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "262",
            "POST": "263"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 7
        },
        "x_location": {
          "tableName": "OVERLAY_3",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "264",
            "POST": "265"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
        },
        "y_location": {
          "tableName": "OVERLAY_3",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "266",
            "POST": "267"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "enable": {
          "tableName": "OVERLAY_3",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "268",
            "POST": "269"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1
        },
        "height": {
          "tableName": "OVERLAY_3",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "270",
            "POST": "271"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "width": {
          "tableName": "OVERLAY_3",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "272",
            "POST": "273"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
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
          "GET": "274",
          "POST": "275"
        },
        "access": "admin",
        "socketFilter": 0,
        "array": [
          "id",
          "x_location",
          "y_location",
          "enable",
          "height",
          "width"
        ],
        "id": {
          "tableName": "OVERLAY_4",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "276",
            "POST": "277"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 7
        },
        "x_location": {
          "tableName": "OVERLAY_4",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "278",
            "POST": "279"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
        },
        "y_location": {
          "tableName": "OVERLAY_4",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "280",
            "POST": "281"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "enable": {
          "tableName": "OVERLAY_4",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "282",
            "POST": "283"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1
        },
        "height": {
          "tableName": "OVERLAY_4",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "284",
            "POST": "285"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "width": {
          "tableName": "OVERLAY_4",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "286",
            "POST": "287"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
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
          "GET": "288",
          "POST": "289"
        },
        "access": "admin",
        "socketFilter": 0,
        "array": [
          "id",
          "x_location",
          "y_location",
          "enable",
          "height",
          "width"
        ],
        "id": {
          "tableName": "OVERLAY_5",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "290",
            "POST": "291"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 7
        },
        "x_location": {
          "tableName": "OVERLAY_5",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "292",
            "POST": "293"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
        },
        "y_location": {
          "tableName": "OVERLAY_5",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "294",
            "POST": "295"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "enable": {
          "tableName": "OVERLAY_5",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "296",
            "POST": "297"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1
        },
        "height": {
          "tableName": "OVERLAY_5",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "298",
            "POST": "299"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "width": {
          "tableName": "OVERLAY_5",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "300",
            "POST": "301"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
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
          "GET": "302",
          "POST": "303"
        },
        "access": "admin",
        "socketFilter": 0,
        "array": [
          "id",
          "x_location",
          "y_location",
          "enable",
          "height",
          "width"
        ],
        "id": {
          "tableName": "OVERLAY_6",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "304",
            "POST": "305"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 7
        },
        "x_location": {
          "tableName": "OVERLAY_6",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "306",
            "POST": "307"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
        },
        "y_location": {
          "tableName": "OVERLAY_6",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "308",
            "POST": "309"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "enable": {
          "tableName": "OVERLAY_6",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "310",
            "POST": "311"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1
        },
        "height": {
          "tableName": "OVERLAY_6",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "312",
            "POST": "313"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "width": {
          "tableName": "OVERLAY_6",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "314",
            "POST": "315"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
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
          "GET": "316",
          "POST": "317"
        },
        "access": "admin",
        "socketFilter": 0,
        "array": [
          "id",
          "x_location",
          "y_location",
          "enable",
          "height",
          "width"
        ],
        "id": {
          "tableName": "OVERLAY_7",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "318",
            "POST": "319"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 7
        },
        "x_location": {
          "tableName": "OVERLAY_7",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "320",
            "POST": "322"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
        },
        "y_location": {
          "tableName": "OVERLAY_7",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "323",
            "POST": "324"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "enable": {
          "tableName": "OVERLAY_7",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "325",
            "POST": "326"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1
        },
        "height": {
          "tableName": "OVERLAY_7",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "327",
            "POST": "328"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1079
        },
        "width": {
          "tableName": "OVERLAY_7",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "329",
            "POST": "330"
          },
          "access": "admin",
          "socketFilter": 0,
          "filter": [
            "MIN",
            "MAX"
          ],
          "MIN": 0,
          "MAX": 1919
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
        "GET": "201",
        "POST": "202"
      },
      "access": "admin",
      "socketFilter": 0,
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
        "GET": "203",
        "POST": "204"
      },
      "access": "admin",
      "socketFilter": 0,
      "filter": [
        "MIN",
        "MAX"
      ],
      "MIN": 1,
      "MAX": 5
    },
    "enable": {
      "tableName": "OVERLAY",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "205",
        "POST": "206"
      },
      "access": "admin",
      "socketFilter": 0,
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
        "POST": "207"
      },
      "access": "admin",
      "socketFilter": 0,
      "array": [
        "file_name",
        "id",
        "height",
        "width"
      ],
      "file_name": {
        "tableName": "OVERLAY_UPLOAD-IMAGE",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "208"
        },
        "access": "admin",
        "socketFilter": 0,
        "filter": []
      },
      "id": {
        "tableName": "OVERLAY_UPLOAD-IMAGE",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "209"
        },
        "access": "admin",
        "socketFilter": 0,
        "filter": [
          "MIN",
          "MAX"
        ],
        "MIN": 0,
        "MAX": 7
      },
      "height": {
        "tableName": "OVERLAY_UPLOAD-IMAGE",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "210"
        },
        "access": "admin",
        "socketFilter": 0,
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
          "POST": "211"
        },
        "access": "admin",
        "socketFilter": 0,
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
        "POST": "212"
      },
      "access": "admin",
      "socketFilter": 0,
      "array": [
        "file_name",
        "id",
        "height",
        "width"
      ],
      "file_name": {
        "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "213"
        },
        "access": "admin",
        "socketFilter": 0,
        "filter": []
      },
      "height": {
        "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "214"
        },
        "access": "admin",
        "socketFilter": 0,
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
          "POST": "215"
        },
        "access": "admin",
        "socketFilter": 0,
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
        "POST": "216"
      },
      "access": "admin",
      "socketFilter": 0,
      "array": [
        "id"
      ],
      "id": {
        "tableName": "OVERLAY",
        "method": [
          "POST"
        ],
        "socket": {
          "POST": "217"
        },
        "access": "admin",
        "socketFilter": 0,
        "filter": [
          "MIN",
          "MAX"
        ],
        "MIN": 0,
        "MAX": 7
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
          "GET": "351"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "352",
          "POST": "353"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "354",
          "POST": "355"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "356",
          "POST": "357"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "358",
          "POST": "359"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "360",
          "POST": "361"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "362",
          "POST": "363"
        },
        "access": "user",
        "socketFilter": 0,
        "array": [
          "ip-addr",
          "port",
          "END ",
          "getArray",
          "364",
          "366"
        ],
        "ip-addr": {
          "tableName": "AUDIO_OUTPUT_RX-MULT-IP-ADDR",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "364",
            "POST": "365"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": [
            "TYPE"
          ],
          "TYPE": [
            "IPAddress"
          ]
        },
        "port": {
          "tableName": "AUDIO_OUTPUT_RX-MULT-IP-ADDR",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "366",
            "POST": "367"
          },
          "access": "user",
          "socketFilter": 0,
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
          "GET": "368",
          "POST": "369"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "370",
          "POST": "371"
        },
        "access": "user",
        "socketFilter": 0,
        "array": [
          "ip-addr",
          "port",
          "END ",
          "getArray",
          "368",
          "370"
        ],
        "ip-addr": {
          "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "372",
            "POST": "373"
          },
          "access": "user",
          "socketFilter": 0,
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
            "GET": "374",
            "POST": "375"
          },
          "access": "user",
          "socketFilter": 0,
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
          "GET": "376",
          "POST": "377"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "378",
          "POST": "379"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "380",
          "POST": "381"
        },
        "access": "user",
        "socketFilter": 0,
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
          "GET": "382",
          "POST": "383"
        },
        "access": "user",
        "socketFilter": 0,
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
        "GET": "401",
        "POST": "402"
      },
      "access": "user",
      "socketFilter": 0,
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
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "403",
        "POST": "404"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    },
    "enable": {
      "tableName": "KVM",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "405",
        "POST": "406"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    },
    "encoder": {
      "tableName": "KVM",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "407",
        "POST": "408"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    },
    "default-encoder": {
      "tableName": "KVM",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "409",
        "POST": "410"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    },
    "key-code": {
      "tableName": "KVM",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "411",
        "POST": "412"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    }
  },
  "rs232": {
    "0": {
      "params": {
        "tableName": "RS232_0_PARAMS",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "461",
          "POST": "462"
        },
        "access": "user",
        "socketFilter": 0,
        "array": [
          "baud_rate",
          "data_bits",
          "parity",
          "stop_bit",
          "flow_control",
          "port"
        ],
        "baud_rate": {
          "tableName": "RS232_0_PARAMS",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "463",
            "POST": "464"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        },
        "data_bits": {
          "tableName": "RS232_0_PARAMS",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "465",
            "POST": "466"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        },
        "parity": {
          "tableName": "RS232_0_PARAMS",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "467",
            "POST": "468"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        },
        "stop_bit": {
          "tableName": "RS232_0_PARAMS",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "469",
            "POST": "470"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        },
        "flow_control": {
          "tableName": "RS232_0_PARAMS",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "471",
            "POST": "472"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        },
        "port": {
          "tableName": "RS232_0_PARAMS",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "473",
            "POST": "474"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        }
      },
      "send": {
        "tableName": "RS232_0_SEND",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "475",
          "POST": "476"
        },
        "access": "user",
        "socketFilter": 0,
        "array": [
          "data",
          "port"
        ],
        "data": {
          "tableName": "RS232_0_SEND",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "477",
            "POST": "478"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        },
        "port": {
          "tableName": "RS232_0_SEND",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "479",
            "POST": "480"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        }
      }
    },
    "1": {
      "params": {
        "tableName": "RS232_1_PARAMS",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "481",
          "POST": "482"
        },
        "access": "user",
        "socketFilter": 0,
        "array": [
          "baud_rate",
          "data_bits",
          "parity",
          "stop_bit",
          "flow_control",
          "port"
        ],
        "baud_rate": {
          "tableName": "RS232_1_PARAMS",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "483",
            "POST": "484"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        },
        "data_bits": {
          "tableName": "RS232_1_PARAMS",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "485",
            "POST": "486"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        },
        "parity": {
          "tableName": "RS232_1_PARAMS",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "487",
            "POST": "488"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        },
        "stop_bit": {
          "tableName": "RS232_1_PARAMS",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "489",
            "POST": "490"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        },
        "flow_control": {
          "tableName": "RS232_1_PARAMS",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "491",
            "POST": "492"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        },
        "port": {
          "tableName": "RS232_1_PARAMS",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "493",
            "POST": "494"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        }
      },
      "send": {
        "tableName": "RS232_1_SEND",
        "method": [
          "GET",
          "POST"
        ],
        "socket": {
          "GET": "495",
          "POST": "496"
        },
        "access": "user",
        "socketFilter": 0,
        "array": [
          "data",
          "port"
        ],
        "data": {
          "tableName": "RS232_1_SEND",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "497",
            "POST": "498"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        },
        "port": {
          "tableName": "RS232_1_SEND",
          "method": [
            "GET",
            "POST"
          ],
          "socket": {
            "GET": "499",
            "POST": "500"
          },
          "access": "user",
          "socketFilter": 0,
          "filter": []
        }
      }
    },
    "feature-enable": {
      "tableName": "RS232",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "451",
        "POST": "452"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    },
    "get-devices": {
      "tableName": "RS232",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "453",
        "POST": "454"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    },
    "open-connection": {
      "tableName": "RS232",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "455",
        "POST": "456"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    },
    "close-connection": {
      "tableName": "RS232",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "457",
        "POST": "458"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    },
    "flush": {
      "tableName": "RS232",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "459",
        "POST": "460"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    },
    "data-in-notification": {
      "tableName": "RS232",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "501",
        "POST": "502"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    },
    "read-existing": {
      "tableName": "RS232",
      "method": [
        "GET"
      ],
      "socket": {
        "GET": "503"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    },
    "read-line": {
      "tableName": "RS232",
      "method": [
        "GET"
      ],
      "socket": {
        "GET": "504"
      },
      "access": "user",
      "socketFilter": 0,
      "filter": []
    }
  },
  "fpga-register": {
    "0": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "1": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "2": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "3": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "4": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "5": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "6": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "7": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "8": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "9": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "10": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "11": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "12": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "13": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "14": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "15": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "16": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "17": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "18": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "19": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "20": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "21": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "22": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "23": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "24": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "25": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "26": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "27": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "28": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "29": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "30": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "31": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "32": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "33": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "34": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "35": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "36": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "37": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "38": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "39": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "40": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "41": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "42": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "43": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "44": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "45": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "46": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "47": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "48": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "49": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "50": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "51": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "52": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "53": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "54": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "55": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "56": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "57": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "58": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "59": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "60": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "61": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "62": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "63": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "64": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "65": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "66": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "67": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "68": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "69": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "70": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "71": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "72": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "73": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "74": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "75": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "76": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "77": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "78": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "79": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "80": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "81": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "82": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "83": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "84": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "85": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "86": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "87": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "88": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "89": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "90": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "91": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "92": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "93": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "94": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "95": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "96": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "97": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "98": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "99": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    },
    "100": {
      "tableName": "FPGA-REGISTER",
      "method": [
        "GET",
        "POST"
      ],
      "socket": {
        "GET": "701",
        "POST": "702"
      },
      "access": "user",
      "socketFilter": 1,
      "filter": [],
      "action": "FPGA_REGISTER"
    }
  }
}}};

module.exports = JSONObject;