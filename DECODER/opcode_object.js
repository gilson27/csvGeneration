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
    "columnName": "system-version",
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
    "columnName": "port",
    "tableName": "SYSTEM_NETWORK_NOTIFY-PORT",
    "method": "GET"
  },
  "23": {
    "columnName": "port",
    "tableName": "SYSTEM_NETWORK_NOTIFY-PORT",
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
    "columnName": "admin",
    "tableName": "SYSTEM_AUTHENTICATION",
    "method": "GET"
  },
  "45": {
    "columnName": "admin",
    "tableName": "SYSTEM_AUTHENTICATION",
    "method": "POST"
  },
  "46": {
    "columnName": "admin-pwd",
    "tableName": "SYSTEM_AUTHENTICATION",
    "method": "POST"
  },
  "47": {
    "columnName": "user",
    "tableName": "SYSTEM_AUTHENTICATION",
    "method": "GET"
  },
  "48": {
    "columnName": "user",
    "tableName": "SYSTEM_AUTHENTICATION",
    "method": "POST"
  },
  "49": {
    "columnName": "user-pwd",
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
    "columnName": "location",
    "tableName": "SYSTEM_CONFIG-FILE_UPLOAD",
    "method": "POST"
  },
  "54": {
    "columnName": "download",
    "tableName": "SYSTEM_CONFIG-FILE",
    "method": "GET"
  },
  "55": {
    "columnName": "file-name",
    "tableName": "SYSTEM_CONFIG-FILE_DELETE",
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
    "columnName": "temperature-threshold",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "GET"
  },
  "75": {
    "columnName": "temperature-threshold",
    "tableName": "SYSTEM_DIAGNOSTICS",
    "method": "POST"
  },
  "86": {
    "columnName": "id",
    "tableName": "SYSTEM_IDENTIFICATION",
    "method": "POST"
  },
  "87": {
    "columnName": "password",
    "tableName": "SYSTEM_MISC_FTP-AUTH",
    "method": "GET"
  },
  "88": {
    "columnName": "password",
    "tableName": "SYSTEM_MISC_FTP-AUTH",
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
    "columnName": "buffer-type",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "106": {
    "columnName": "buffer-type",
    "tableName": "VIDEO_INPUT",
    "method": "POST"
  },
  "107": {
    "columnName": "buffer-delay",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "108": {
    "columnName": "buffer-delay",
    "tableName": "VIDEO_INPUT",
    "method": "POST"
  },
  "109": {
    "columnName": "port",
    "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
    "method": "GET"
  },
  "110": {
    "columnName": "port",
    "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
    "method": "POST"
  },
  "111": {
    "columnName": "port",
    "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
    "method": "GET"
  },
  "112": {
    "columnName": "port",
    "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
    "method": "POST"
  },
  "113": {
    "columnName": "mute",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "114": {
    "columnName": "mute",
    "tableName": "VIDEO_INPUT",
    "method": "POST"
  },
  "115": {
    "columnName": "videos",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "116": {
    "columnName": "resolution",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "117": {
    "columnName": "cable-presence",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "118": {
    "columnName": "frame-rate",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "119": {
    "columnName": "edid",
    "tableName": "VIDEO_OUTPUT",
    "method": "GET"
  },
  "120": {
    "columnName": "es-rtp-mode",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "121": {
    "columnName": "es-rtp-mode",
    "tableName": "VIDEO_INPUT",
    "method": "POST"
  },
  "122": {
    "columnName": "enable-es-msg-auth",
    "tableName": "VIDEO_INPUT",
    "method": "GET"
  },
  "123": {
    "columnName": "enable-es-msg-auth",
    "tableName": "VIDEO_INPUT",
    "method": "POST"
  },
  "124": {
    "columnName": "frame-rate",
    "tableName": "VIDEO_INPUT",
    "method": "POST"
  },
  "201": {
    "columnName": "feature-enable",
    "tableName": "COMP-LAYOUT",
    "method": "GET"
  },
  "202": {
    "columnName": "feature-enable",
    "tableName": "COMP-LAYOUT",
    "method": "POST"
  },
  "203": {
    "columnName": "available-layout",
    "tableName": "COMP-LAYOUT",
    "method": "GET"
  },
  "204": {
    "columnName": "enable-pip",
    "tableName": "COMP-LAYOUT",
    "method": "GET"
  },
  "205": {
    "columnName": "enable-pip",
    "tableName": "COMP-LAYOUT",
    "method": "POST"
  },
  "206": {
    "columnName": "y-location",
    "tableName": "COMP-LAYOUT_PIP-LOC",
    "method": "GET"
  },
  "207": {
    "columnName": "y-location",
    "tableName": "COMP-LAYOUT_PIP-LOC",
    "method": "POST"
  },
  "208": {
    "columnName": "enable-pap",
    "tableName": "COMP-LAYOUT",
    "method": "GET"
  },
  "209": {
    "columnName": "enable-pap",
    "tableName": "COMP-LAYOUT",
    "method": "POST"
  },
  "210": {
    "columnName": "swap-pap",
    "tableName": "COMP-LAYOUT",
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
    "tableName": "OVERLAY_IMAGE",
    "method": "POST"
  },
  "310": {
    "columnName": "width",
    "tableName": "OVERLAY_IMAGE",
    "method": "POST"
  },
  "311": {
    "columnName": "id",
    "tableName": "OVERLAY_DEL-IMAGE",
    "method": "POST"
  },
  "312": {
    "columnName": "file-name",
    "tableName": "OVERLAY_IMAGE",
    "method": "GET"
  },
  "313": {
    "columnName": "enable",
    "tableName": "OVERLAY_IMAGE",
    "method": "POST"
  },
  "314": {
    "columnName": "file-name",
    "tableName": "OVERLAY_IMAGE",
    "method": "GET"
  },
  "315": {
    "columnName": "enable",
    "tableName": "OVERLAY_IMAGE",
    "method": "POST"
  },
  "316": {
    "columnName": "file-name",
    "tableName": "OVERLAY_IMAGE",
    "method": "GET"
  },
  "317": {
    "columnName": "enable",
    "tableName": "OVERLAY_IMAGE",
    "method": "POST"
  },
  "318": {
    "columnName": "file-name",
    "tableName": "OVERLAY_IMAGE",
    "method": "GET"
  },
  "319": {
    "columnName": "enable",
    "tableName": "OVERLAY_IMAGE",
    "method": "POST"
  },
  "320": {
    "columnName": "file-name",
    "tableName": "OVERLAY_IMAGE",
    "method": "GET"
  },
  "321": {
    "columnName": "enable",
    "tableName": "OVERLAY_IMAGE",
    "method": "POST"
  },
  "322": {
    "columnName": "file-name",
    "tableName": "OVERLAY_IMAGE",
    "method": "GET"
  },
  "323": {
    "columnName": "enable",
    "tableName": "OVERLAY_IMAGE",
    "method": "POST"
  },
  "324": {
    "columnName": "file-name",
    "tableName": "OVERLAY_IMAGE",
    "method": "GET"
  },
  "325": {
    "columnName": "enable",
    "tableName": "OVERLAY_IMAGE",
    "method": "POST"
  },
  "326": {
    "columnName": "file-name",
    "tableName": "OVERLAY_IMAGE",
    "method": "GET"
  },
  "327": {
    "columnName": "enable",
    "tableName": "OVERLAY_IMAGE",
    "method": "POST"
  },
  "328": {
    "columnName": "width",
    "tableName": "OVERLAY_IMAGE",
    "method": "GET"
  },
  "329": {
    "columnName": "y-location",
    "tableName": "OVERLAY_IMAGE",
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
    "columnName": "loopback",
    "tableName": "AUDIO_INPUT",
    "method": "GET"
  },
  "411": {
    "columnName": "loopback",
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
  "504": {
    "columnName": "enable",
    "tableName": "KVM",
    "method": "GET"
  },
  "505": {
    "columnName": "enable",
    "tableName": "KVM",
    "method": "POST"
  },
  "506": {
    "columnName": "encoder",
    "tableName": "KVM",
    "method": "GET"
  },
  "507": {
    "columnName": "encoder",
    "tableName": "KVM",
    "method": "POST"
  },
  "508": {
    "columnName": "default-encoder",
    "tableName": "KVM",
    "method": "GET"
  },
  "509": {
    "columnName": "default-encoder",
    "tableName": "KVM",
    "method": "POST"
  },
  "510": {
    "columnName": "key-code",
    "tableName": "KVM",
    "method": "GET"
  },
  "511": {
    "columnName": "key-code",
    "tableName": "KVM",
    "method": "POST"
  },
  "512": {
    "columnName": "password",
    "tableName": "KVM_SSH-AUTH",
    "method": "GET"
  },
  "513": {
    "columnName": "password",
    "tableName": "KVM_SSH-AUTH",
    "method": "POST"
  },
  "514": {
    "columnName": "password",
    "tableName": "KVM_DEFAULT-SSH-AUTH",
    "method": "GET"
  },
  "515": {
    "columnName": "password",
    "tableName": "KVM_DEFAULT-SSH-AUTH",
    "method": "POST"
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
    "columnName": "fpga-registers",
    "tableName": "FPGA-REGISTERS",
    "method": "GET",
    "socketAction": "FPGA_REGISTER"
  },
  "702": {
    "columnName": "fpga-registers",
    "tableName": "FPGA-REGISTERS",
    "method": "POST",
    "socketAction": "FPGA_REGISTER"
  },
  "801": {
    "columnName": "i2c-registers",
    "tableName": "I2C-REGISTERS",
    "method": "GET",
    "socketAction": "I2C_REGISTER"
  },
  "802": {
    "columnName": "i2c-registers",
    "tableName": "I2C-REGISTERS",
    "method": "POST",
    "socketAction": "I2C_REGISTER"
  }
};

module.exports = opcodeObject;