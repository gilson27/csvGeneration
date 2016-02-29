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
    "columnName": "system-firmware",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "GET"
  },
  "4": {
    "columnName": "hw-version",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "GET"
  },
  "5": {
    "columnName": "location",
    "tableName": "SYSTEM_FIRMWARE_PROCESSOR-FIELD-UPGRADE",
    "method": "POST"
  },
  "6": {
    "columnName": "location",
    "tableName": "SYSTEM_FIRMWARE_FPGA-FIELD-UPGRADE",
    "method": "POST"
  },
  "7": {
    "columnName": "fpga-upgrade-status",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "GET"
  },
  "8": {
    "columnName": "processor-upgrade-status",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "GET"
  },
  "9": {
    "columnName": "switch",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "POST"
  },
  "10": {
    "columnName": "serial-no",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "GET"
  },
  "11": {
    "columnName": "serial-no",
    "tableName": "SYSTEM_FIRMWARE",
    "method": "POST"
  },
  "12": {
    "columnName": "gateway",
    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
    "method": "GET"
  },
  "13": {
    "columnName": "gateway",
    "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
    "method": "POST"
  },
  "14": {
    "columnName": "tos",
    "tableName": "SYSTEM_NETWORK",
    "method": "GET"
  },
  "15": {
    "columnName": "tos",
    "tableName": "SYSTEM_NETWORK",
    "method": "POST"
  },
  "16": {
    "columnName": "mtu-size",
    "tableName": "SYSTEM_NETWORK",
    "method": "GET"
  },
  "17": {
    "columnName": "mtu-size",
    "tableName": "SYSTEM_NETWORK",
    "method": "POST"
  },
  "18": {
    "columnName": "mode",
    "tableName": "SYSTEM_NETWORK",
    "method": "GET"
  },
  "19": {
    "columnName": "mode",
    "tableName": "SYSTEM_NETWORK",
    "method": "POST"
  },
  "20": {
    "columnName": "notify-ip-addr",
    "tableName": "SYSTEM_NETWORK",
    "method": "GET"
  },
  "21": {
    "columnName": "notify-ip-addr",
    "tableName": "SYSTEM_NETWORK",
    "method": "POST"
  },
  "22": {
    "columnName": "notify-port",
    "tableName": "SYSTEM_NETWORK",
    "method": "GET"
  },
  "23": {
    "columnName": "notify-port",
    "tableName": "SYSTEM_NETWORK",
    "method": "POST"
  },
  "24": {
    "columnName": "image-server-ip-addr",
    "tableName": "SYSTEM_NETWORK",
    "method": "GET"
  },
  "25": {
    "columnName": "image-server-ip-addr",
    "tableName": "SYSTEM_NETWORK",
    "method": "POST"
  },
  "26": {
    "columnName": "eth-interfaces",
    "tableName": "SYSTEM_NETWORK",
    "method": "GET"
  },
  "27": {
    "columnName": "hw-status",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "28": {
    "columnName": "temperature",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "29": {
    "columnName": "device-log",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "30": {
    "columnName": "device-log-level",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "31": {
    "columnName": "device-log-level",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "POST"
  },
  "32": {
    "columnName": "device-log-facility",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "33": {
    "columnName": "device-log-facility",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "POST"
  },
  "34": {
    "columnName": "dev-log-ip-addr",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "35": {
    "columnName": "dev-log-ip-addr",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "POST"
  },
  "36": {
    "columnName": "enable",
    "tableName": "SYSTEM_SPLASH-SCRN",
    "method": "GET"
  },
  "37": {
    "columnName": "enable",
    "tableName": "SYSTEM_SPLASH-SCRN",
    "method": "POST"
  },
  "38": {
    "columnName": "location",
    "tableName": "SYSTEM_SPLASH-SCRN_UPLOAD",
    "method": "POST"
  },
  "39": {
    "columnName": "get-name",
    "tableName": "SYSTEM_SPLASH-SCRN",
    "method": "GET"
  },
  "40": {
    "columnName": "soft-reset",
    "tableName": "SYSTEM_RESET",
    "method": "POST"
  },
  "41": {
    "columnName": "configuration-reset",
    "tableName": "SYSTEM_RESET",
    "method": "POST"
  },
  "42": {
    "columnName": "factory-reset",
    "tableName": "SYSTEM_RESET",
    "method": "POST"
  },
  "43": {
    "columnName": "reboot",
    "tableName": "SYSTEM",
    "method": "POST"
  },
  "44": {
    "columnName": "user",
    "tableName": "SYSTEM_AUTHENTICATION",
    "method": "GET"
  },
  "45": {
    "columnName": "user",
    "tableName": "SYSTEM_AUTHENTICATION",
    "method": "POST"
  },
  "46": {
    "columnName": "user-pwd",
    "tableName": "SYSTEM_AUTHENTICATION",
    "method": "POST"
  },
  "47": {
    "columnName": "admin",
    "tableName": "SYSTEM_AUTHENTICATION",
    "method": "GET"
  },
  "48": {
    "columnName": "admin",
    "tableName": "SYSTEM_AUTHENTICATION",
    "method": "POST"
  },
  "49": {
    "columnName": "admin-pwd",
    "tableName": "SYSTEM_AUTHENTICATION",
    "method": "POST"
  },
  "50": {
    "columnName": "id",
    "tableName": "SYSTEM_IDENTIFICATION",
    "method": "GET"
  },
  "51": {
    "columnName": "enable-3d",
    "tableName": "SYSTEM_VIDEO-MODE",
    "method": "GET"
  },
  "52": {
    "columnName": "enable-3d",
    "tableName": "SYSTEM_VIDEO-MODE",
    "method": "POST"
  },
  "53": {
    "columnName": "upload",
    "tableName": "SYSTEM_CONFIG-FILE",
    "method": "POST"
  },
  "54": {
    "columnName": "download",
    "tableName": "SYSTEM_CONFIG-FILE",
    "method": "GET"
  },
  "55": {
    "columnName": "delete",
    "tableName": "SYSTEM_CONFIG-FILE",
    "method": "POST"
  },
  "56": {
    "columnName": "update",
    "tableName": "SYSTEM_CONFIG-FILE",
    "method": "POST"
  },
  "57": {
    "columnName": "data-value",
    "tableName": "SYSTEM_MDNS_ADD-KEY",
    "method": "POST"
  },
  "58": {
    "columnName": "delete-key",
    "tableName": "SYSTEM_MDNS",
    "method": "POST"
  },
  "59": {
    "columnName": "read-key",
    "tableName": "SYSTEM_MDNS",
    "method": "GET"
  },
  "60": {
    "columnName": "data-value",
    "tableName": "SYSTEM_MDNS_EDIT-KEY",
    "method": "POST"
  },
  "61": {
    "columnName": "board-type",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "62": {
    "columnName": "led-on-time",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "63": {
    "columnName": "led-on-time",
    "tableName": "SYSTEM_MISC",
    "method": "POST"
  },
  "64": {
    "columnName": "led-off-time",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "65": {
    "columnName": "led-off-time",
    "tableName": "SYSTEM_MISC",
    "method": "POST"
  },
  "66": {
    "columnName": "http-mode",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "67": {
    "columnName": "http-mode",
    "tableName": "SYSTEM_MISC",
    "method": "POST"
  },
  "68": {
    "columnName": "enable-encryption",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "69": {
    "columnName": "enable-encryption",
    "tableName": "SYSTEM_MISC",
    "method": "POST"
  },
  "70": {
    "columnName": "sec",
    "tableName": "SYSTEM_MISC_RTC",
    "method": "GET"
  },
  "71": {
    "columnName": "sec",
    "tableName": "SYSTEM_MISC_RTC",
    "method": "POST"
  },
  "72": {
    "columnName": "ftp-mode",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "73": {
    "columnName": "ftp-mode",
    "tableName": "SYSTEM_MISC",
    "method": "POST"
  },
  "74": {
    "columnName": "acc-debounce-time",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "75": {
    "columnName": "acc-debounce-time",
    "tableName": "SYSTEM_MISC",
    "method": "POST"
  },
  "76": {
    "columnName": "acc1-reaction",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "77": {
    "columnName": "acc1-reaction",
    "tableName": "SYSTEM_MISC",
    "method": "POST"
  },
  "78": {
    "columnName": "acc2-reaction",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "79": {
    "columnName": "acc2-reaction",
    "tableName": "SYSTEM_MISC",
    "method": "POST"
  },
  "80": {
    "columnName": "acc1-notify",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "81": {
    "columnName": "acc1-notify",
    "tableName": "SYSTEM_MISC",
    "method": "POST"
  },
  "82": {
    "columnName": "acc2-notify",
    "tableName": "SYSTEM_MISC",
    "method": "GET"
  },
  "83": {
    "columnName": "acc2-notify",
    "tableName": "SYSTEM_MISC",
    "method": "POST"
  },
  "84": {
    "columnName": "temperature-threshold",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "85": {
    "columnName": "temperature-threshold",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "POST"
  },
  "86": {
    "columnName": "id",
    "tableName": "SYSTEM_IDENTIFICATION",
    "method": "POST"
  },
  "101": {
    "columnName": "videos",
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
    "columnName": "analog-video",
    "tableName": "VIDEO_INPUT",
    "method": "POST"
  },
  "107": {
    "columnName": "video-interface",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "108": {
    "columnName": "enable-color-bar",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "109": {
    "columnName": "enable-color-bar",
    "tableName": "VIDEO_INPUT",
    "method": "POST"
  },
  "110": {
    "columnName": "internal-video-generator-enable",
    "tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
    "method": "GET"
  },
  "111": {
    "columnName": "internal-video-generator-enable",
    "tableName": "VIDEO_INPUT_RX-PHY-PARAMETERS",
    "method": "POST"
  },
  "112": {
    "columnName": "streams",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "113": {
    "columnName": "frame-rate",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "114": {
    "columnName": "frame-rate",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "115": {
    "columnName": "hqll-tx-status",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "116": {
    "columnName": "pes-tx-status",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "117": {
    "columnName": "ses-tx-status",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "118": {
    "columnName": "enable-hqll-tx",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "119": {
    "columnName": "enable-pes-tx",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "120": {
    "columnName": "enable-ses-tx",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "121": {
    "columnName": "pes-resolution",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "122": {
    "columnName": "pes-resolution",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "123": {
    "columnName": "ses-resolution",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "124": {
    "columnName": "ses-resolution",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "125": {
    "columnName": "pes-bit-rate",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "126": {
    "columnName": "pes-bit-rate",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "127": {
    "columnName": "ses-bit-rate",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "128": {
    "columnName": "ses-bit-rate",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "129": {
    "columnName": "port",
    "tableName": "VIDEO_OUTPUT_HQLL-MULT-IP-ADDR",
    "method": "GET"
  },
  "130": {
    "columnName": "port",
    "tableName": "VIDEO_OUTPUT_HQLL-MULT-IP-ADDR",
    "method": "POST"
  },
  "131": {
    "columnName": "port",
    "tableName": "VIDEO_OUTPUT_PES-MULT-IP-ADDR",
    "method": "GET"
  },
  "132": {
    "columnName": "port",
    "tableName": "VIDEO_OUTPUT_PES-MULT-IP-ADDR",
    "method": "POST"
  },
  "133": {
    "columnName": "port",
    "tableName": "VIDEO_OUTPUT_SES-MULT-IP-ADDR",
    "method": "GET"
  },
  "134": {
    "columnName": "port",
    "tableName": "VIDEO_OUTPUT_SES-MULT-IP-ADDR",
    "method": "POST"
  },
  "135": {
    "columnName": "pes-rtp-mode",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "136": {
    "columnName": "pes-rtp-mode",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "137": {
    "columnName": "enable-pes-msg-auth",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "138": {
    "columnName": "enable-pes-msg-auth",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "139": {
    "columnName": "enable-pes-replay-protection",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "140": {
    "columnName": "enable-pes-replay-protection",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "141": {
    "columnName": "ses-rtp-mode",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "142": {
    "columnName": "ses-rtp-mode",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "143": {
    "columnName": "enable-ses-msg-auth",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "144": {
    "columnName": "enable-ses-msg-auth",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "145": {
    "columnName": "enable-ses-replay-protection",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "146": {
    "columnName": "enable-ses-replay-protection",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "147": {
    "columnName": "mute",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "148": {
    "columnName": "mute",
    "tableName": "VIDEO_OUTPUT",
    "method": "POST"
  },
  "201": {
    "columnName": "feature-enable",
    "tableName": "STILL-CAPTURE",
    "method": "GET"
  },
  "202": {
    "columnName": "feature-enable",
    "tableName": "STILL-CAPTURE",
    "method": "POST"
  },
  "203": {
    "columnName": "capture-image",
    "tableName": "STILL-CAPTURE",
    "method": "POST"
  },
  "204": {
    "columnName": "enable-pip",
    "tableName": "STILL-CAPTURE",
    "method": "GET"
  },
  "205": {
    "columnName": "enable-pip",
    "tableName": "STILL-CAPTURE",
    "method": "POST"
  },
  "206": {
    "columnName": "location",
    "tableName": "STILL-CAPTURE_IP-ADDR",
    "method": "GET"
  },
  "207": {
    "columnName": "location",
    "tableName": "STILL-CAPTURE_IP-ADDR",
    "method": "POST"
  },
  "208": {
    "columnName": "y-location",
    "tableName": "STILL-CAPTURE_PIP-LOC",
    "method": "GET"
  },
  "209": {
    "columnName": "y-location",
    "tableName": "STILL-CAPTURE_PIP-LOC",
    "method": "POST"
  },
  "210": {
    "columnName": "pip-time",
    "tableName": "STILL-CAPTURE",
    "method": "GET"
  },
  "211": {
    "columnName": "pip-time",
    "tableName": "STILL-CAPTURE",
    "method": "POST"
  },
  "212": {
    "columnName": "enable-transfer",
    "tableName": "STILL-CAPTURE",
    "method": "GET"
  },
  "213": {
    "columnName": "enable-transfer",
    "tableName": "STILL-CAPTURE",
    "method": "POST"
  },
  "214": {
    "columnName": "auto-transfer",
    "tableName": "STILL-CAPTURE",
    "method": "GET"
  },
  "215": {
    "columnName": "auto-transfer",
    "tableName": "STILL-CAPTURE",
    "method": "POST"
  },
  "216": {
    "columnName": "transfer",
    "tableName": "STILL-CAPTURE",
    "method": "POST"
  },
  "301": {
    "columnName": "feature-enable",
    "tableName": "OVERLAY",
    "method": "GET"
  },
  "302": {
    "columnName": "feature-enable",
    "tableName": "OVERLAY",
    "method": "POST"
  },
  "303": {
    "columnName": "max-images",
    "tableName": "OVERLAY",
    "method": "GET"
  },
  "304": {
    "columnName": "max-images",
    "tableName": "OVERLAY",
    "method": "POST"
  },
  "305": {
    "columnName": "max-upload-images",
    "tableName": "OVERLAY",
    "method": "GET"
  },
  "306": {
    "columnName": "max-upload-images",
    "tableName": "OVERLAY",
    "method": "POST"
  },
  "307": {
    "columnName": "enable",
    "tableName": "OVERLAY",
    "method": "GET"
  },
  "308": {
    "columnName": "enable",
    "tableName": "OVERLAY",
    "method": "POST"
  },
  "309": {
    "columnName": "width",
    "tableName": "OVERLAY_UPLOAD-IMAGE",
    "method": "POST"
  },
  "310": {
    "columnName": "width",
    "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
    "method": "POST"
  },
  "311": {
    "columnName": "del-image",
    "tableName": "OVERLAY",
    "method": "POST"
  },
  "312": {
    "columnName": "file-name",
    "tableName": "OVERLAY_1_IMAGE-PARAMS",
    "method": "GET"
  },
  "313": {
    "columnName": "enable",
    "tableName": "OVERLAY_1_IMAGE-PARAMS",
    "method": "POST"
  },
  "314": {
    "columnName": "file-name",
    "tableName": "OVERLAY_2_IMAGE-PARAMS",
    "method": "GET"
  },
  "315": {
    "columnName": "enable",
    "tableName": "OVERLAY_2_IMAGE-PARAMS",
    "method": "POST"
  },
  "316": {
    "columnName": "file-name",
    "tableName": "OVERLAY_3_IMAGE-PARAMS",
    "method": "GET"
  },
  "317": {
    "columnName": "enable",
    "tableName": "OVERLAY_3_IMAGE-PARAMS",
    "method": "POST"
  },
  "318": {
    "columnName": "file-name",
    "tableName": "OVERLAY_4_IMAGE-PARAMS",
    "method": "GET"
  },
  "319": {
    "columnName": "enable",
    "tableName": "OVERLAY_4_IMAGE-PARAMS",
    "method": "POST"
  },
  "320": {
    "columnName": "file-name",
    "tableName": "OVERLAY_5_IMAGE-PARAMS",
    "method": "GET"
  },
  "321": {
    "columnName": "enable",
    "tableName": "OVERLAY_5_IMAGE-PARAMS",
    "method": "POST"
  },
  "322": {
    "columnName": "file-name",
    "tableName": "OVERLAY_6_IMAGE-PARAMS",
    "method": "GET"
  },
  "323": {
    "columnName": "enable",
    "tableName": "OVERLAY_6_IMAGE-PARAMS",
    "method": "POST"
  },
  "324": {
    "columnName": "file-name",
    "tableName": "OVERLAY_7_IMAGE-PARAMS",
    "method": "GET"
  },
  "325": {
    "columnName": "enable",
    "tableName": "OVERLAY_7_IMAGE-PARAMS",
    "method": "POST"
  },
  "326": {
    "columnName": "file-name",
    "tableName": "OVERLAY_8_IMAGE-PARAMS",
    "method": "GET"
  },
  "327": {
    "columnName": "enable",
    "tableName": "OVERLAY_8_IMAGE-PARAMS",
    "method": "POST"
  },
  "328": {
    "columnName": "y-location",
    "tableName": "OVERLAY_VIDEO-MUTE-IMAGE-PARAMS",
    "method": "GET"
  },
  "329": {
    "columnName": "y-location",
    "tableName": "OVERLAY_VIDEO-MUTE-IMAGE-PARAMS",
    "method": "POST"
  },
  "401": {
    "columnName": "valid-input",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "402": {
    "columnName": "enable-rx",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "403": {
    "columnName": "enable-rx",
    "tableName": "AUDIO_INPUT",
    "method": "POST"
  },
  "404": {
    "columnName": "fine-gain",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "405": {
    "columnName": "fine-gain",
    "tableName": "AUDIO_INPUT",
    "method": "POST"
  },
  "406": {
    "columnName": "coarse-gain",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "407": {
    "columnName": "coarse-gain",
    "tableName": "AUDIO_INPUT",
    "method": "POST"
  },
  "408": {
    "columnName": "mute",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "409": {
    "columnName": "mute",
    "tableName": "AUDIO_INPUT",
    "method": "POST"
  },
  "410": {
    "columnName": "loop-back",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "411": {
    "columnName": "loop-back",
    "tableName": "AUDIO_INPUT",
    "method": "POST"
  },
  "412": {
    "columnName": "port",
    "tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
    "method": "GET"
  },
  "413": {
    "columnName": "port",
    "tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
    "method": "POST"
  },
  "414": {
    "columnName": "enable-tx",
    "tableName": "AUDIO_OUTPUT",
    "method": "GET"
  },
  "415": {
    "columnName": "enable-tx",
    "tableName": "AUDIO_OUTPUT",
    "method": "POST"
  },
  "416": {
    "columnName": "port",
    "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
    "method": "GET"
  },
  "417": {
    "columnName": "port",
    "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
    "method": "POST"
  },
  "418": {
    "columnName": "fine-gain",
    "tableName": "AUDIO_OUTPUT",
    "method": "GET"
  },
  "419": {
    "columnName": "fine-gain",
    "tableName": "AUDIO_OUTPUT",
    "method": "POST"
  },
  "420": {
    "columnName": "coarse-gain",
    "tableName": "AUDIO_OUTPUT",
    "method": "GET"
  },
  "421": {
    "columnName": "coarse-gain",
    "tableName": "AUDIO_OUTPUT",
    "method": "POST"
  },
  "422": {
    "columnName": "mute",
    "tableName": "AUDIO_OUTPUT",
    "method": "GET"
  },
  "423": {
    "columnName": "mute",
    "tableName": "AUDIO_OUTPUT",
    "method": "POST"
  },
  "424": {
    "columnName": "fade",
    "tableName": "AUDIO_OUTPUT",
    "method": "GET"
  },
  "425": {
    "columnName": "fade",
    "tableName": "AUDIO_OUTPUT",
    "method": "POST"
  },
  "501": {
    "columnName": "feature-enable",
    "tableName": "KVM",
    "method": "GET"
  },
  "502": {
    "columnName": "feature-enable",
    "tableName": "KVM",
    "method": "POST"
  },
  "503": {
    "columnName": "usb-link-status",
    "tableName": "KVM",
    "method": "GET"
  },
  "601": {
    "columnName": "feature-enable",
    "tableName": "RS232",
    "method": "GET"
  },
  "602": {
    "columnName": "feature-enable",
    "tableName": "RS232",
    "method": "POST"
  },
  "603": {
    "columnName": "get-devices",
    "tableName": "RS232",
    "method": "GET"
  },
  "604": {
    "columnName": "open-connection",
    "tableName": "RS232_0",
    "method": "POST"
  },
  "605": {
    "columnName": "close-connection",
    "tableName": "RS232_0",
    "method": "POST"
  },
  "606": {
    "columnName": "flush",
    "tableName": "RS232_0",
    "method": "POST"
  },
  "607": {
    "columnName": "flow-control",
    "tableName": "RS232_0_PARAMS",
    "method": "GET"
  },
  "608": {
    "columnName": "flow-control",
    "tableName": "RS232_0_PARAMS",
    "method": "POST"
  },
  "609": {
    "columnName": "send",
    "tableName": "RS232_0",
    "method": "POST"
  },
  "610": {
    "columnName": "data-in-notification",
    "tableName": "RS232_0",
    "method": "GET"
  },
  "611": {
    "columnName": "data-in-notification",
    "tableName": "RS232_0",
    "method": "POST"
  },
  "612": {
    "columnName": "read-existing",
    "tableName": "RS232_0",
    "method": "GET"
  },
  "613": {
    "columnName": "read-line",
    "tableName": "RS232_0",
    "method": "GET"
  },
  "701": {
    "columnName": "100",
    "tableName": "FPGA-REGISTERS",
    "method": "GET",
    "socketAction": "FPGA_REGISTER"
  },
  "702": {
    "columnName": "100",
    "tableName": "FPGA-REGISTERS",
    "method": "POST",
    "socketAction": "FPGA_REGISTER"
  },
  "801": {
    "columnName": "48H",
    "tableName": "I2C-REGISTERS",
    "method": "GET",
    "socketAction": "I2C_REGISTER"
  },
  "802": {
    "columnName": "48H",
    "tableName": "I2C-REGISTERS",
    "method": "POST",
    "socketAction": "I2C_REGISTER"
  }
};

module.exports = opcodeObject;