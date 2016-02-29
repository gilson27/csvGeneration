/**
 * @author
 * @fileoverview routing get and post requests with URI levels.
 * @date 1 May 2015
 **/

var opcodeObject = 
{
  "1": {
    "columnName": "fpga-version",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "GET"
  },
  "2": {
    "columnName": "processor-version",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "GET"
  },
  "3": {
    "columnName": "processor-field-upgrade",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "POST"
  },
  "4": {
    "columnName": "fpga-field-upgrade",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "POST"
  },
  "5": {
    "columnName": "fpga-upgrade-status",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "GET"
  },
  "6": {
    "columnName": "processor-upgrade-status",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "GET"
  },
  "7": {
    "columnName": "switch",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "POST"
  },
  "8": {
    "columnName": "serial-no",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "GET"
  },
  "9": {
    "columnName": "serial-no",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "POST"
  },
  "10": {
    "columnName": "ip-settings",
    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
    "method": "GET",
    "getArray": [
      "10",
      "12",
      "14"
    ]
  },
  "11": {
    "columnName": "ip-settings",
    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
    "method": "POST",
    "postArray": [
      "11",
      "13",
      "15"
    ]
  },
  "12": {
    "columnName": "ip-addr",
    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
    "method": "GET"
  },
  "13": {
    "columnName": "ip-addr",
    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
    "method": "POST"
  },
  "14": {
    "columnName": "subnet-mask",
    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
    "method": "GET"
  },
  "15": {
    "columnName": "subnet-mask",
    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
    "method": "POST"
  },
  "16": {
    "columnName": "gateway",
    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
    "method": "GET"
  },
  "17": {
    "columnName": "gateway",
    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
    "method": "POST"
  },
  "18": {
    "columnName": "tos",
    "tableName": "SYSTEM_NETWORK",
    "method": "GET"
  },
  "19": {
    "columnName": "tos",
    "tableName": "SYSTEM_NETWORK",
    "method": "POST"
  },
  "20": {
    "columnName": "mtu-size",
    "tableName": "SYSTEM_NETWORK",
    "method": "GET"
  },
  "21": {
    "columnName": "mtu-size",
    "tableName": "SYSTEM_NETWORK",
    "method": "POST"
  },
  "22": {
    "columnName": "mode",
    "tableName": "SYSTEM_NETWORK",
    "method": "GET"
  },
  "23": {
    "columnName": "mode",
    "tableName": "SYSTEM_NETWORK",
    "method": "POST"
  },
  "28": {
    "columnName": "hw-status",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "29": {
    "columnName": "temperature",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "30": {
    "columnName": "device-log",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "31": {
    "columnName": "device-log-level",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "32": {
    "columnName": "device-log-level",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "POST"
  },
  "33": {
    "columnName": "device-log-facility",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "34": {
    "columnName": "device-log-facility",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "POST"
  },
  "35": {
    "columnName": "dev-log-ip-addr",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "36": {
    "columnName": "dev-log-ip-addr",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "POST"
  },
  "37": {
    "columnName": "enable",
    "tableName": "SYSTEM_SPLASH-SCRN",
    "method": "GET"
  },
  "38": {
    "columnName": "enable",
    "tableName": "SYSTEM_SPLASH-SCRN",
    "method": "POST"
  },
  "39": {
    "columnName": "upload",
    "tableName": "SYSTEM_SPLASH-SCRN",
    "method": "POST"
  },
  "40": {
    "columnName": "get-name",
    "tableName": "SYSTEM_SPLASH-SCRN",
    "method": "GET"
  },
  "41": {
    "columnName": "soft-reset",
    "tableName": "SYSTEM_RESET",
    "method": "POST"
  },
  "42": {
    "columnName": "configuration-reset",
    "tableName": "SYSTEM_RESET",
    "method": "POST"
  },
  "43": {
    "columnName": "factory-reset",
    "tableName": "SYSTEM_RESET",
    "method": "POST"
  },
  "44": {
    "columnName": "reboot",
    "tableName": "SYSTEM",
    "method": "POST"
  },
  "45": {
    "columnName": "id",
    "tableName": "SYSTEM_IDENTIFICATION",
    "method": "GET"
  },
  "46": {
    "columnName": "enable-3d",
    "tableName": "SYSTEM_VIDEO-MODE",
    "method": "GET"
  },
  "47": {
    "columnName": "enable-3d",
    "tableName": "SYSTEM_VIDEO-MODE",
    "method": "POST"
  },
  "48": {
    "columnName": "upload",
    "tableName": "SYSTEM_CONFIG-FILE",
    "method": "GET"
  },
  "49": {
    "columnName": "download",
    "tableName": "SYSTEM_CONFIG-FILE",
    "method": "POST"
  },
  "50": {
    "columnName": "delete",
    "tableName": "SYSTEM_CONFIG-FILE",
    "method": "POST"
  },
  "51": {
    "columnName": "update",
    "tableName": "SYSTEM_CONFIG-FILE",
    "method": "POST"
  },
  "52": {
    "columnName": "board-type",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "53": {
    "columnName": "led-on-time",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "54": {
    "columnName": "led-on-time",
    "tableName": "SYSTEM_MISC",
    "method": "POST"
  },
  "55": {
    "columnName": "led-off-time",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "56": {
    "columnName": "led-off-time",
    "tableName": "SYSTEM_MISC",
    "method": "POST"
  },
  "101": {
    "columnName": "streams",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "102": {
    "columnName": "resolution",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "103": {
    "columnName": "frame-rate",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "104": {
    "columnName": "valid-input",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "105": {
    "columnName": "cable-presence",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "106": {
    "columnName": "buffer-type",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "107": {
    "columnName": "buffer-type",
    "tableName": "VIDEO_INPUT",
    "method": "POST"
  },
  "108": {
    "columnName": "buffer-delay",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "109": {
    "columnName": "buffer-delay",
    "tableName": "VIDEO_INPUT",
    "method": "POST"
  },
  "110": {
    "columnName": "hqll-mult-ip-addr",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "111": {
    "columnName": "hqll-mult-ip-addr",
    "tableName": "VIDEO_INPUT",
    "method": "POST",
    "postArray": [
      "113",
      "115"
    ]
  },
  "112": {
    "columnName": "ip-addr",
    "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
    "method": "GET"
  },
  "113": {
    "columnName": "ip-addr",
    "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
    "method": "POST"
  },
  "114": {
    "columnName": "port",
    "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
    "method": "GET"
  },
  "115": {
    "columnName": "port",
    "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
    "method": "POST"
  },
  "116": {
    "columnName": "es-mult-ip-addr",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "117": {
    "columnName": "es-mult-ip-addr",
    "tableName": "VIDEO_INPUT",
    "method": "POST",
    "postArray": [
      "119",
      "121"
    ]
  },
  "118": {
    "columnName": "ip-addr",
    "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
    "method": "GET"
  },
  "119": {
    "columnName": "ip-addr",
    "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
    "method": "POST"
  },
  "120": {
    "columnName": "port",
    "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
    "method": "GET"
  },
  "121": {
    "columnName": "port",
    "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
    "method": "POST"
  },
  "122": {
    "columnName": "mute",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "123": {
    "columnName": "mute",
    "tableName": "VIDEO_INPUT",
    "method": "POST"
  },
  "124": {
    "columnName": "videos",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "125": {
    "columnName": "resolution",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "126": {
    "columnName": "frame-rate",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "127": {
    "columnName": "edid",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "151": {
    "columnName": "feature-enable",
    "tableName": "COMP-LAYOUT",
    "method": "GET"
  },
  "152": {
    "columnName": "feature-enable",
    "tableName": "COMP-LAYOUT",
    "method": "POST"
  },
  "153": {
    "columnName": "available-layout",
    "tableName": "COMP-LAYOUT",
    "method": "GET"
  },
  "154": {
    "columnName": "enable-pip",
    "tableName": "COMP-LAYOUT",
    "method": "GET"
  },
  "155": {
    "columnName": "enable-pip",
    "tableName": "COMP-LAYOUT",
    "method": "POST"
  },
  "156": {
    "columnName": "pip-loc",
    "tableName": "COMP-LAYOUT",
    "method": "GET"
  },
  "157": {
    "columnName": "pip-loc",
    "tableName": "COMP-LAYOUT",
    "method": "POST"
  },
  "158": {
    "columnName": "x_location",
    "tableName": "COMP-LAYOUT",
    "method": "GET"
  },
  "159": {
    "columnName": "x_location",
    "tableName": "COMP-LAYOUT",
    "method": "POST"
  },
  "160": {
    "columnName": "y_location",
    "tableName": "COMP-LAYOUT",
    "method": "GET"
  },
  "161": {
    "columnName": "y_location",
    "tableName": "COMP-LAYOUT",
    "method": "POST"
  },
  "162": {
    "columnName": "enable-pap",
    "tableName": "COMP-LAYOUT",
    "method": "GET"
  },
  "163": {
    "columnName": "enable-pap",
    "tableName": "COMP-LAYOUT",
    "method": "POST"
  },
  "164": {
    "columnName": "swap-pap",
    "tableName": "COMP-LAYOUT",
    "method": "POST"
  },
  "201": {
    "columnName": "feature-enable",
    "tableName": "OVERLAY",
    "method": "GET"
  },
  "202": {
    "columnName": "feature-enable",
    "tableName": "OVERLAY",
    "method": "POST"
  },
  "203": {
    "columnName": "max-images",
    "tableName": "OVERLAY",
    "method": "GET"
  },
  "204": {
    "columnName": "max-images",
    "tableName": "OVERLAY",
    "method": "POST"
  },
  "205": {
    "columnName": "enable",
    "tableName": "OVERLAY",
    "method": "GET"
  },
  "206": {
    "columnName": "enable",
    "tableName": "OVERLAY",
    "method": "POST"
  },
  "207": {
    "columnName": "upload-image",
    "tableName": "OVERLAY",
    "method": "POST",
    "postArray": [
      "208",
      "209",
      "210",
      "211"
    ]
  },
  "208": {
    "columnName": "file_name",
    "tableName": "OVERLAY_UPLOAD-IMAGE",
    "method": "POST"
  },
  "209": {
    "columnName": "id",
    "tableName": "OVERLAY_UPLOAD-IMAGE",
    "method": "POST"
  },
  "210": {
    "columnName": "height",
    "tableName": "OVERLAY_UPLOAD-IMAGE",
    "method": "POST"
  },
  "211": {
    "columnName": "width",
    "tableName": "OVERLAY_UPLOAD-IMAGE",
    "method": "POST"
  },
  "212": {
    "columnName": "upload-mute-image",
    "tableName": "OVERLAY",
    "method": "POST",
    "postArray": [
      "213",
      "214",
      "215"
    ]
  },
  "213": {
    "columnName": "file_name",
    "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
    "method": "POST"
  },
  "214": {
    "columnName": "height",
    "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
    "method": "POST"
  },
  "215": {
    "columnName": "width",
    "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
    "method": "POST"
  },
  "216": {
    "columnName": "del-image",
    "tableName": "OVERLAY",
    "method": "POST",
    "postArray": [
      "217"
    ]
  },
  "217": {
    "columnName": "id",
    "tableName": "OVERLAY",
    "method": "POST"
  },
  "218": {
    "columnName": "image-params",
    "tableName": "OVERLAY_0",
    "method": "GET"
  },
  "219": {
    "columnName": "image-params",
    "tableName": "OVERLAY_0",
    "method": "POST"
  },
  "220": {
    "columnName": "id",
    "tableName": "OVERLAY_0",
    "method": "GET"
  },
  "221": {
    "columnName": "id",
    "tableName": "OVERLAY_0",
    "method": "POST"
  },
  "222": {
    "columnName": "x_location",
    "tableName": "OVERLAY_0",
    "method": "GET"
  },
  "223": {
    "columnName": "x_location",
    "tableName": "OVERLAY_0",
    "method": "POST"
  },
  "224": {
    "columnName": "y_location",
    "tableName": "OVERLAY_0",
    "method": "GET"
  },
  "225": {
    "columnName": "y_location",
    "tableName": "OVERLAY_0",
    "method": "POST"
  },
  "226": {
    "columnName": "enable",
    "tableName": "OVERLAY_0",
    "method": "GET"
  },
  "227": {
    "columnName": "enable",
    "tableName": "OVERLAY_0",
    "method": "POST"
  },
  "228": {
    "columnName": "height",
    "tableName": "OVERLAY_0",
    "method": "GET"
  },
  "229": {
    "columnName": "height",
    "tableName": "OVERLAY_0",
    "method": "POST"
  },
  "230": {
    "columnName": "width",
    "tableName": "OVERLAY_0",
    "method": "GET"
  },
  "231": {
    "columnName": "width",
    "tableName": "OVERLAY_0",
    "method": "POST"
  },
  "232": {
    "columnName": "image-params",
    "tableName": "OVERLAY_1",
    "method": "GET"
  },
  "233": {
    "columnName": "image-params",
    "tableName": "OVERLAY_1",
    "method": "POST"
  },
  "234": {
    "columnName": "id",
    "tableName": "OVERLAY_1",
    "method": "GET"
  },
  "235": {
    "columnName": "id",
    "tableName": "OVERLAY_1",
    "method": "POST"
  },
  "236": {
    "columnName": "x_location",
    "tableName": "OVERLAY_1",
    "method": "GET"
  },
  "237": {
    "columnName": "x_location",
    "tableName": "OVERLAY_1",
    "method": "POST"
  },
  "238": {
    "columnName": "y_location",
    "tableName": "OVERLAY_1",
    "method": "GET"
  },
  "239": {
    "columnName": "y_location",
    "tableName": "OVERLAY_1",
    "method": "POST"
  },
  "240": {
    "columnName": "enable",
    "tableName": "OVERLAY_1",
    "method": "GET"
  },
  "241": {
    "columnName": "enable",
    "tableName": "OVERLAY_1",
    "method": "POST"
  },
  "242": {
    "columnName": "height",
    "tableName": "OVERLAY_1",
    "method": "GET"
  },
  "243": {
    "columnName": "height",
    "tableName": "OVERLAY_1",
    "method": "POST"
  },
  "244": {
    "columnName": "width",
    "tableName": "OVERLAY_1",
    "method": "GET"
  },
  "245": {
    "columnName": "width",
    "tableName": "OVERLAY_1",
    "method": "POST"
  },
  "246": {
    "columnName": "image-params",
    "tableName": "OVERLAY_2",
    "method": "GET"
  },
  "247": {
    "columnName": "image-params",
    "tableName": "OVERLAY_2",
    "method": "POST"
  },
  "248": {
    "columnName": "id",
    "tableName": "OVERLAY_2",
    "method": "GET"
  },
  "249": {
    "columnName": "id",
    "tableName": "OVERLAY_2",
    "method": "POST"
  },
  "250": {
    "columnName": "x_location",
    "tableName": "OVERLAY_2",
    "method": "GET"
  },
  "251": {
    "columnName": "x_location",
    "tableName": "OVERLAY_2",
    "method": "POST"
  },
  "252": {
    "columnName": "y_location",
    "tableName": "OVERLAY_2",
    "method": "GET"
  },
  "253": {
    "columnName": "y_location",
    "tableName": "OVERLAY_2",
    "method": "POST"
  },
  "254": {
    "columnName": "enable",
    "tableName": "OVERLAY_2",
    "method": "GET"
  },
  "255": {
    "columnName": "enable",
    "tableName": "OVERLAY_2",
    "method": "POST"
  },
  "256": {
    "columnName": "height",
    "tableName": "OVERLAY_2",
    "method": "GET"
  },
  "257": {
    "columnName": "height",
    "tableName": "OVERLAY_2",
    "method": "POST"
  },
  "258": {
    "columnName": "width",
    "tableName": "OVERLAY_2",
    "method": "GET"
  },
  "259": {
    "columnName": "width",
    "tableName": "OVERLAY_2",
    "method": "POST"
  },
  "260": {
    "columnName": "image-params",
    "tableName": "OVERLAY_3",
    "method": "GET"
  },
  "261": {
    "columnName": "image-params",
    "tableName": "OVERLAY_3",
    "method": "POST"
  },
  "262": {
    "columnName": "id",
    "tableName": "OVERLAY_3",
    "method": "GET"
  },
  "263": {
    "columnName": "id",
    "tableName": "OVERLAY_3",
    "method": "POST"
  },
  "264": {
    "columnName": "x_location",
    "tableName": "OVERLAY_3",
    "method": "GET"
  },
  "265": {
    "columnName": "x_location",
    "tableName": "OVERLAY_3",
    "method": "POST"
  },
  "266": {
    "columnName": "y_location",
    "tableName": "OVERLAY_3",
    "method": "GET"
  },
  "267": {
    "columnName": "y_location",
    "tableName": "OVERLAY_3",
    "method": "POST"
  },
  "268": {
    "columnName": "enable",
    "tableName": "OVERLAY_3",
    "method": "GET"
  },
  "269": {
    "columnName": "enable",
    "tableName": "OVERLAY_3",
    "method": "POST"
  },
  "270": {
    "columnName": "height",
    "tableName": "OVERLAY_3",
    "method": "GET"
  },
  "271": {
    "columnName": "height",
    "tableName": "OVERLAY_3",
    "method": "POST"
  },
  "272": {
    "columnName": "width",
    "tableName": "OVERLAY_3",
    "method": "GET"
  },
  "273": {
    "columnName": "width",
    "tableName": "OVERLAY_3",
    "method": "POST"
  },
  "274": {
    "columnName": "image-params",
    "tableName": "OVERLAY_4",
    "method": "GET"
  },
  "275": {
    "columnName": "image-params",
    "tableName": "OVERLAY_4",
    "method": "POST"
  },
  "276": {
    "columnName": "id",
    "tableName": "OVERLAY_4",
    "method": "GET"
  },
  "277": {
    "columnName": "id",
    "tableName": "OVERLAY_4",
    "method": "POST"
  },
  "278": {
    "columnName": "x_location",
    "tableName": "OVERLAY_4",
    "method": "GET"
  },
  "279": {
    "columnName": "x_location",
    "tableName": "OVERLAY_4",
    "method": "POST"
  },
  "280": {
    "columnName": "y_location",
    "tableName": "OVERLAY_4",
    "method": "GET"
  },
  "281": {
    "columnName": "y_location",
    "tableName": "OVERLAY_4",
    "method": "POST"
  },
  "282": {
    "columnName": "enable",
    "tableName": "OVERLAY_4",
    "method": "GET"
  },
  "283": {
    "columnName": "enable",
    "tableName": "OVERLAY_4",
    "method": "POST"
  },
  "284": {
    "columnName": "height",
    "tableName": "OVERLAY_4",
    "method": "GET"
  },
  "285": {
    "columnName": "height",
    "tableName": "OVERLAY_4",
    "method": "POST"
  },
  "286": {
    "columnName": "width",
    "tableName": "OVERLAY_4",
    "method": "GET"
  },
  "287": {
    "columnName": "width",
    "tableName": "OVERLAY_4",
    "method": "POST"
  },
  "288": {
    "columnName": "image-params",
    "tableName": "OVERLAY_5",
    "method": "GET"
  },
  "289": {
    "columnName": "image-params",
    "tableName": "OVERLAY_5",
    "method": "POST"
  },
  "290": {
    "columnName": "id",
    "tableName": "OVERLAY_5",
    "method": "GET"
  },
  "291": {
    "columnName": "id",
    "tableName": "OVERLAY_5",
    "method": "POST"
  },
  "292": {
    "columnName": "x_location",
    "tableName": "OVERLAY_5",
    "method": "GET"
  },
  "293": {
    "columnName": "x_location",
    "tableName": "OVERLAY_5",
    "method": "POST"
  },
  "294": {
    "columnName": "y_location",
    "tableName": "OVERLAY_5",
    "method": "GET"
  },
  "295": {
    "columnName": "y_location",
    "tableName": "OVERLAY_5",
    "method": "POST"
  },
  "296": {
    "columnName": "enable",
    "tableName": "OVERLAY_5",
    "method": "GET"
  },
  "297": {
    "columnName": "enable",
    "tableName": "OVERLAY_5",
    "method": "POST"
  },
  "298": {
    "columnName": "height",
    "tableName": "OVERLAY_5",
    "method": "GET"
  },
  "299": {
    "columnName": "height",
    "tableName": "OVERLAY_5",
    "method": "POST"
  },
  "300": {
    "columnName": "width",
    "tableName": "OVERLAY_5",
    "method": "GET"
  },
  "301": {
    "columnName": "width",
    "tableName": "OVERLAY_5",
    "method": "POST"
  },
  "302": {
    "columnName": "image-params",
    "tableName": "OVERLAY_6",
    "method": "GET"
  },
  "303": {
    "columnName": "image-params",
    "tableName": "OVERLAY_6",
    "method": "POST"
  },
  "304": {
    "columnName": "id",
    "tableName": "OVERLAY_6",
    "method": "GET"
  },
  "305": {
    "columnName": "id",
    "tableName": "OVERLAY_6",
    "method": "POST"
  },
  "306": {
    "columnName": "x_location",
    "tableName": "OVERLAY_6",
    "method": "GET"
  },
  "307": {
    "columnName": "x_location",
    "tableName": "OVERLAY_6",
    "method": "POST"
  },
  "308": {
    "columnName": "y_location",
    "tableName": "OVERLAY_6",
    "method": "GET"
  },
  "309": {
    "columnName": "y_location",
    "tableName": "OVERLAY_6",
    "method": "POST"
  },
  "310": {
    "columnName": "enable",
    "tableName": "OVERLAY_6",
    "method": "GET"
  },
  "311": {
    "columnName": "enable",
    "tableName": "OVERLAY_6",
    "method": "POST"
  },
  "312": {
    "columnName": "height",
    "tableName": "OVERLAY_6",
    "method": "GET"
  },
  "313": {
    "columnName": "height",
    "tableName": "OVERLAY_6",
    "method": "POST"
  },
  "314": {
    "columnName": "width",
    "tableName": "OVERLAY_6",
    "method": "GET"
  },
  "315": {
    "columnName": "width",
    "tableName": "OVERLAY_6",
    "method": "POST"
  },
  "316": {
    "columnName": "image-params",
    "tableName": "OVERLAY_7",
    "method": "GET"
  },
  "317": {
    "columnName": "image-params",
    "tableName": "OVERLAY_7",
    "method": "POST"
  },
  "318": {
    "columnName": "id",
    "tableName": "OVERLAY_7",
    "method": "GET"
  },
  "319": {
    "columnName": "id",
    "tableName": "OVERLAY_7",
    "method": "POST"
  },
  "320": {
    "columnName": "x_location",
    "tableName": "OVERLAY_7",
    "method": "GET"
  },
  "322": {
    "columnName": "x_location",
    "tableName": "OVERLAY_7",
    "method": "POST"
  },
  "323": {
    "columnName": "y_location",
    "tableName": "OVERLAY_7",
    "method": "GET"
  },
  "324": {
    "columnName": "y_location",
    "tableName": "OVERLAY_7",
    "method": "POST"
  },
  "325": {
    "columnName": "enable",
    "tableName": "OVERLAY_7",
    "method": "GET"
  },
  "326": {
    "columnName": "enable",
    "tableName": "OVERLAY_7",
    "method": "POST"
  },
  "327": {
    "columnName": "height",
    "tableName": "OVERLAY_7",
    "method": "GET"
  },
  "328": {
    "columnName": "height",
    "tableName": "OVERLAY_7",
    "method": "POST"
  },
  "329": {
    "columnName": "width",
    "tableName": "OVERLAY_7",
    "method": "GET"
  },
  "330": {
    "columnName": "width",
    "tableName": "OVERLAY_7",
    "method": "POST"
  },
  "351": {
    "columnName": "valid-input",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "352": {
    "columnName": "enable-rx",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "353": {
    "columnName": "enable-rx",
    "tableName": "AUDIO_INPUT",
    "method": "POST"
  },
  "354": {
    "columnName": "fine-gain",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "355": {
    "columnName": "fine-gain",
    "tableName": "AUDIO_INPUT",
    "method": "POST"
  },
  "356": {
    "columnName": "coarse-gain",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "357": {
    "columnName": "coarse-gain",
    "tableName": "AUDIO_INPUT",
    "method": "POST"
  },
  "358": {
    "columnName": "mute",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "359": {
    "columnName": "mute",
    "tableName": "AUDIO_INPUT",
    "method": "POST"
  },
  "360": {
    "columnName": "loop-back",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "361": {
    "columnName": "loop-back",
    "tableName": "AUDIO_INPUT",
    "method": "POST"
  },
  "362": {
    "columnName": "rx-mult-ip-addr",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "363": {
    "columnName": "rx-mult-ip-addr",
    "tableName": "AUDIO_INPUT",
    "method": "POST",
    "postArray": [
      "365",
      "367"
    ]
  },
  "364": {
    "columnName": "ip-addr",
    "tableName": "AUDIO_OUTPUT_RX-MULT-IP-ADDR",
    "method": "GET"
  },
  "365": {
    "columnName": "ip-addr",
    "tableName": "AUDIO_OUTPUT_RX-MULT-IP-ADDR",
    "method": "POST"
  },
  "366": {
    "columnName": "port",
    "tableName": "AUDIO_OUTPUT_RX-MULT-IP-ADDR",
    "method": "GET"
  },
  "367": {
    "columnName": "port",
    "tableName": "AUDIO_OUTPUT_RX-MULT-IP-ADDR",
    "method": "POST"
  },
  "368": {
    "columnName": "enable-tx",
    "tableName": "AUDIO_OUTPUT",
    "method": "GET"
  },
  "369": {
    "columnName": "enable-tx",
    "tableName": "AUDIO_OUTPUT",
    "method": "POST"
  },
  "370": {
    "columnName": "tx-mult-ip-addr",
    "tableName": "AUDIO_OUTPUT",
    "method": "GET"
  },
  "371": {
    "columnName": "tx-mult-ip-addr",
    "tableName": "AUDIO_OUTPUT",
    "method": "POST",
    "postArray": [
      "369",
      "371"
    ]
  },
  "372": {
    "columnName": "ip-addr",
    "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
    "method": "GET"
  },
  "373": {
    "columnName": "ip-addr",
    "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
    "method": "POST"
  },
  "374": {
    "columnName": "port",
    "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
    "method": "GET"
  },
  "375": {
    "columnName": "port",
    "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
    "method": "POST"
  },
  "376": {
    "columnName": "fine-gain",
    "tableName": "AUDIO_OUTPUT",
    "method": "GET"
  },
  "377": {
    "columnName": "fine-gain",
    "tableName": "AUDIO_OUTPUT",
    "method": "POST"
  },
  "378": {
    "columnName": "coarse-gain",
    "tableName": "AUDIO_OUTPUT",
    "method": "GET"
  },
  "379": {
    "columnName": "coarse-gain",
    "tableName": "AUDIO_OUTPUT",
    "method": "POST"
  },
  "380": {
    "columnName": "mute",
    "tableName": "AUDIO_OUTPUT",
    "method": "GET"
  },
  "381": {
    "columnName": "mute",
    "tableName": "AUDIO_OUTPUT",
    "method": "POST"
  },
  "382": {
    "columnName": "fade",
    "tableName": "AUDIO_OUTPUT",
    "method": "GET"
  },
  "383": {
    "columnName": "fade",
    "tableName": "AUDIO_OUTPUT",
    "method": "POST"
  },
  "401": {
    "columnName": "feature-enable",
    "tableName": "KVM",
    "method": "GET"
  },
  "402": {
    "columnName": "feature-enable",
    "tableName": "KVM",
    "method": "POST"
  },
  "403": {
    "columnName": "usb-link-status",
    "tableName": "KVM",
    "method": "GET"
  },
  "404": {
    "columnName": "usb-link-status",
    "tableName": "KVM",
    "method": "POST"
  },
  "405": {
    "columnName": "enable",
    "tableName": "KVM",
    "method": "GET"
  },
  "406": {
    "columnName": "enable",
    "tableName": "KVM",
    "method": "POST"
  },
  "407": {
    "columnName": "encoder",
    "tableName": "KVM",
    "method": "GET"
  },
  "408": {
    "columnName": "encoder",
    "tableName": "KVM",
    "method": "POST"
  },
  "409": {
    "columnName": "default-encoder",
    "tableName": "KVM",
    "method": "GET"
  },
  "410": {
    "columnName": "default-encoder",
    "tableName": "KVM",
    "method": "POST"
  },
  "411": {
    "columnName": "key-code",
    "tableName": "KVM",
    "method": "GET"
  },
  "412": {
    "columnName": "key-code",
    "tableName": "KVM",
    "method": "POST"
  },
  "451": {
    "columnName": "feature-enable",
    "tableName": "RS232",
    "method": "GET"
  },
  "452": {
    "columnName": "feature-enable",
    "tableName": "RS232",
    "method": "POST"
  },
  "453": {
    "columnName": "get-devices",
    "tableName": "RS232",
    "method": "GET"
  },
  "454": {
    "columnName": "get-devices",
    "tableName": "RS232",
    "method": "POST"
  },
  "455": {
    "columnName": "open-connection",
    "tableName": "RS232",
    "method": "GET"
  },
  "456": {
    "columnName": "open-connection",
    "tableName": "RS232",
    "method": "POST"
  },
  "457": {
    "columnName": "close-connection",
    "tableName": "RS232",
    "method": "GET"
  },
  "458": {
    "columnName": "close-connection",
    "tableName": "RS232",
    "method": "POST"
  },
  "459": {
    "columnName": "flush",
    "tableName": "RS232",
    "method": "GET"
  },
  "460": {
    "columnName": "flush",
    "tableName": "RS232",
    "method": "POST"
  },
  "461": {
    "columnName": "params",
    "tableName": "RS232_0_PARAMS",
    "method": "GET",
    "getArray": [
      "463",
      "465",
      "467",
      "469",
      "471",
      "473"
    ]
  },
  "462": {
    "columnName": "params",
    "tableName": "RS232_0_PARAMS",
    "method": "POST",
    "postArray": [
      "464",
      "466",
      "468",
      "470",
      "472",
      "474"
    ]
  },
  "463": {
    "columnName": "baud_rate",
    "tableName": "RS232_0_PARAMS",
    "method": "GET"
  },
  "464": {
    "columnName": "baud_rate",
    "tableName": "RS232_0_PARAMS",
    "method": "POST"
  },
  "465": {
    "columnName": "data_bits",
    "tableName": "RS232_0_PARAMS",
    "method": "GET"
  },
  "466": {
    "columnName": "data_bits",
    "tableName": "RS232_0_PARAMS",
    "method": "POST"
  },
  "467": {
    "columnName": "parity",
    "tableName": "RS232_0_PARAMS",
    "method": "GET"
  },
  "468": {
    "columnName": "parity",
    "tableName": "RS232_0_PARAMS",
    "method": "POST"
  },
  "469": {
    "columnName": "stop_bit",
    "tableName": "RS232_0_PARAMS",
    "method": "GET"
  },
  "470": {
    "columnName": "stop_bit",
    "tableName": "RS232_0_PARAMS",
    "method": "POST"
  },
  "471": {
    "columnName": "flow_control",
    "tableName": "RS232_0_PARAMS",
    "method": "GET"
  },
  "472": {
    "columnName": "flow_control",
    "tableName": "RS232_0_PARAMS",
    "method": "POST"
  },
  "473": {
    "columnName": "port",
    "tableName": "RS232_0_PARAMS",
    "method": "GET"
  },
  "474": {
    "columnName": "port",
    "tableName": "RS232_0_PARAMS",
    "method": "POST"
  },
  "475": {
    "columnName": "send",
    "tableName": "RS232_0_SEND",
    "method": "GET"
  },
  "476": {
    "columnName": "send",
    "tableName": "RS232_0_SEND",
    "method": "POST"
  },
  "477": {
    "columnName": "data",
    "tableName": "RS232_0_SEND",
    "method": "GET"
  },
  "478": {
    "columnName": "data",
    "tableName": "RS232_0_SEND",
    "method": "POST"
  },
  "479": {
    "columnName": "port",
    "tableName": "RS232_0_SEND",
    "method": "GET"
  },
  "480": {
    "columnName": "port",
    "tableName": "RS232_0_SEND",
    "method": "POST"
  },
  "481": {
    "columnName": "params",
    "tableName": "RS232_1_PARAMS",
    "method": "GET",
    "getArray": [
      "463",
      "465",
      "467",
      "469",
      "471",
      "473"
    ]
  },
  "482": {
    "columnName": "params",
    "tableName": "RS232_1_PARAMS",
    "method": "POST",
    "postArray": [
      "464",
      "466",
      "468",
      "470",
      "472",
      "474"
    ]
  },
  "483": {
    "columnName": "baud_rate",
    "tableName": "RS232_1_PARAMS",
    "method": "GET"
  },
  "484": {
    "columnName": "baud_rate",
    "tableName": "RS232_1_PARAMS",
    "method": "POST"
  },
  "485": {
    "columnName": "data_bits",
    "tableName": "RS232_1_PARAMS",
    "method": "GET"
  },
  "486": {
    "columnName": "data_bits",
    "tableName": "RS232_1_PARAMS",
    "method": "POST"
  },
  "487": {
    "columnName": "parity",
    "tableName": "RS232_1_PARAMS",
    "method": "GET"
  },
  "488": {
    "columnName": "parity",
    "tableName": "RS232_1_PARAMS",
    "method": "POST"
  },
  "489": {
    "columnName": "stop_bit",
    "tableName": "RS232_1_PARAMS",
    "method": "GET"
  },
  "490": {
    "columnName": "stop_bit",
    "tableName": "RS232_1_PARAMS",
    "method": "POST"
  },
  "491": {
    "columnName": "flow_control",
    "tableName": "RS232_1_PARAMS",
    "method": "GET"
  },
  "492": {
    "columnName": "flow_control",
    "tableName": "RS232_1_PARAMS",
    "method": "POST"
  },
  "493": {
    "columnName": "port",
    "tableName": "RS232_1_PARAMS",
    "method": "GET"
  },
  "494": {
    "columnName": "port",
    "tableName": "RS232_1_PARAMS",
    "method": "POST"
  },
  "495": {
    "columnName": "send",
    "tableName": "RS232_1_SEND",
    "method": "GET"
  },
  "496": {
    "columnName": "send",
    "tableName": "RS232_1_SEND",
    "method": "POST"
  },
  "497": {
    "columnName": "data",
    "tableName": "RS232_1_SEND",
    "method": "GET"
  },
  "498": {
    "columnName": "data",
    "tableName": "RS232_1_SEND",
    "method": "POST"
  },
  "499": {
    "columnName": "port",
    "tableName": "RS232_1_SEND",
    "method": "GET"
  },
  "500": {
    "columnName": "port",
    "tableName": "RS232_1_SEND",
    "method": "POST"
  },
  "501": {
    "columnName": "data-in-notification",
    "tableName": "RS232",
    "method": "GET"
  },
  "502": {
    "columnName": "data-in-notification",
    "tableName": "RS232",
    "method": "POST"
  },
  "503": {
    "columnName": "read-existing",
    "tableName": "RS232",
    "method": "GET"
  },
  "504": {
    "columnName": "read-line",
    "tableName": "RS232",
    "method": "GET"
  },
  "701": {
    "columnName": "100",
    "tableName": "FPGA-REGISTER",
    "method": "GET"
  },
  "702": {
    "columnName": "100",
    "tableName": "FPGA-REGISTER",
    "method": "POST"
  }
};

module.exports = opcodeObject;