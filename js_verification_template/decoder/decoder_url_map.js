/**
 * @author
 * @fileoverview routing get and post requests with URI levels.
 * @date 17 April 2015
 */

decoderURLObject = {
  "url": {
    "/v1/api/system/firmware/fpga-version:GET:0": {
      "opcode": "1",
      "uri": "/v1/api/system/firmware/fpga-version",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_FIRMWARE",
      "row_name": "fpga-version",
      "action": 0
    },
    "/v1/api/system/firmware/processor-version:GET:0": {
      "opcode": "2",
      "uri": "/v1/api/system/firmware/processor-version",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_FIRMWARE",
      "row_name": "processor-version",
      "action": 0
    },
    "/v1/api/system/firmware/processor-field-upgrade:POST:0": {
      "opcode": "3",
      "uri": "/v1/api/system/firmware/processor-field-upgrade",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_FIRMWARE",
      "row_name": "processor-field-upgrade",
      "action": 0
    },
    "/v1/api/system/firmware/fpga-field-upgrade:POST:0": {
      "opcode": "4",
      "uri": "/v1/api/system/firmware/fpga-field-upgrade",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_FIRMWARE",
      "row_name": "fpga-field-upgrade",
      "action": 0
    },
    "/v1/api/system/firmware/fpga-upgrade-status:GET:0": {
      "opcode": "5",
      "uri": "/v1/api/system/firmware/fpga-upgrade-status",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_FIRMWARE",
      "row_name": "fpga-upgrade-status",
      "action": 0
    },
    "/v1/api/system/firmware/processor-upgrade-status:GET:0": {
      "opcode": "6",
      "uri": "/v1/api/system/firmware/processor-upgrade-status",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_FIRMWARE",
      "row_name": "processor-upgrade-status",
      "action": 0
    },
    "/v1/api/system/firmware/switch:POST:0": {
      "opcode": "7",
      "uri": "/v1/api/system/firmware/switch",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_FIRMWARE",
      "row_name": "switch",
      "action": 0
    },
    "/v1/api/system/firmware/serial-no:GET:0": {
      "opcode": "8",
      "uri": "/v1/api/system/firmware/serial-no",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_FIRMWARE",
      "row_name": "serial-no",
      "action": 0
    },
    "/v1/api/system/firmware/serial-no:POST:0": {
      "opcode": "9",
      "uri": "/v1/api/system/firmware/serial-no",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_FIRMWARE",
      "row_name": "serial-no",
      "action": 0
    },
    "/v1/api/system/network/ip-settings:GET:0": {
      "opcode": "10",
      "uri": "/v1/api/system/network/ip-settings",
      "method": "GET",
      "req_type": 1,
      "child_api": "ip-addr,subnet-mask,gateway",
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "ip-settings",
      "action": 0
    },
    "/v1/api/system/network/ip-settings:POST:1:ip-addr,subnet-mask,gateway": {
      "opcode": "11",
      "uri": "/v1/api/system/network/ip-settings",
      "method": "POST",
      "req_type": 1,
      "child_api": "ip-addr,subnet-mask,gateway",
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "ip-settings",
      "action": 0
    },
    "/v1/api/system/network/ip-settings:POST:1:ip-addr": {
      "opcode": "13",
      "uri": "/v1/api/system/network/ip-settings",
      "method": "POST",
      "req_type": 1,
      "child_api": "ip-addr",
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "ip-settings",
      "action": 0
    },
    "/v1/api/system/network/ip-settings:POST:1:ip-addr,subnet-mask": {
      "opcode": "13,15",
      "uri": "/v1/api/system/network/ip-settings",
      "method": "POST",
      "req_type": 1,
      "child_api": "ip-addr,subnet-mask",
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "ip-settings",
      "action": 0
    },
    "/v1/api/system/network/ip-settings:POST:1:ip-addr,gateway": {
      "opcode": "13,17",
      "uri": "/v1/api/system/network/ip-settings",
      "method": "POST",
      "req_type": 1,
      "child_api": "ip-addr,gateway",
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "ip-settings",
      "action": 0
    },
    "/v1/api/system/network/ip-settings:POST:1:subnet-mask": {
      "opcode": "15",
      "uri": "/v1/api/system/network/ip-settings",
      "method": "POST",
      "req_type": 1,
      "child_api": "subnet-mask",
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "ip-settings",
      "action": 0
    },
    "/v1/api/system/network/ip-settings:POST:1:subnet-mask,gateway": {
      "opcode": "15,17",
      "uri": "/v1/api/system/network/ip-settings",
      "method": "POST",
      "req_type": 1,
      "child_api": "subnet-mask,gateway",
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "ip-settings",
      "action": 0
    },
    "/v1/api/system/network/ip-settings:POST:1:gateway": {
      "opcode": "17",
      "uri": "/v1/api/system/network/ip-settings",
      "method": "POST",
      "req_type": 1,
      "child_api": "gateway",
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "ip-settings",
      "action": 0
    },
    "/v1/api/system/network/ip-settings/ip-addr:GET:0": {
      "opcode": "12",
      "uri": "/v1/api/system/network/ip-settings/ip-addr",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "ip-addr",
      "action": 0
    },
    "/v1/api/system/network/ip-settings/ip-addr:POST:0": {
      "opcode": "13",
      "uri": "/v1/api/system/network/ip-settings/ip-addr",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "ip-addr",
      "action": 0
    },
    "/v1/api/system/network/ip-settings/subnet-mask:GET:0": {
      "opcode": "14",
      "uri": "/v1/api/system/network/ip-settings/subnet-mask",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "subnet-mask",
      "action": 0
    },
    "/v1/api/system/network/ip-settings/subnet-mask:POST:0": {
      "opcode": "15",
      "uri": "/v1/api/system/network/ip-settings/subnet-mask",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "subnet-mask",
      "action": 0
    },
    "/v1/api/system/network/ip-settings/gateway:GET:0": {
      "opcode": "16",
      "uri": "/v1/api/system/network/ip-settings/gateway",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "gateway",
      "action": 0
    },
    "/v1/api/system/network/ip-settings/gateway:POST:0": {
      "opcode": "17",
      "uri": "/v1/api/system/network/ip-settings/gateway",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK_IP-SETTINGS",
      "row_name": "gateway",
      "action": 0
    },
    "/v1/api/system/network/tos:GET:0": {
      "opcode": "18",
      "uri": "/v1/api/system/network/tos",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "tos",
      "action": 0
    },
    "/v1/api/system/network/tos:POST:0": {
      "opcode": "19",
      "uri": "/v1/api/system/network/tos",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "tos",
      "action": 0
    },
    "/v1/api/system/network/mtu-size:GET:0": {
      "opcode": "20",
      "uri": "/v1/api/system/network/mtu-size",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "mtu-size",
      "action": 0
    },
    "/v1/api/system/network/mtu-size:POST:0": {
      "opcode": "21",
      "uri": "/v1/api/system/network/mtu-size",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "mtu-size",
      "action": 0
    },
    "/v1/api/system/network/mode:GET:0": {
      "opcode": "22",
      "uri": "/v1/api/system/network/mode",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "mode",
      "action": 0
    },
    "/v1/api/system/network/mode:POST:0": {
      "opcode": "23",
      "uri": "/v1/api/system/network/mode",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "mode",
      "action": 0
    },
    "/v1/api/system/network/notify-ip-addr:GET:0": {
      "opcode": "22",
      "uri": "/v1/api/system/network/notify-ip-addr",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "notify-ip-addr",
      "action": 0
    },
    "/v1/api/system/network/notify-ip-addr:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/network/notify-ip-addr",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "notify-ip-addr",
      "action": 0
    },
    "/v1/api/system/network/notify-port:GET:0": {
      "opcode": "22",
      "uri": "/v1/api/system/network/notify-port",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "notify-port",
      "action": 0
    },
    "/v1/api/system/network/notify-port:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/network/notify-port",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "notify-port",
      "action": 0
    },
    "/v1/api/system/network/image-server-ip-addr:GET:0": {
      "opcode": "24",
      "uri": "/v1/api/system/network/image-server-ip-addr",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "image-server-ip-addr",
      "action": 0
    },
    "/v1/api/system/network/image-server-ip-addr:POST:0": {
      "opcode": "25",
      "uri": "/v1/api/system/network/image-server-ip-addr",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "image-server-ip-addr",
      "action": 0
    },
    "/v1/api/system/network/eth-interfaces:GET:0": {
      "opcode": "26",
      "uri": "/v1/api/system/network/eth-interfaces",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_NETWORK",
      "row_name": "eth-interfaces",
      "action": 0
    },
    "/v1/api/system/diagnostics/hw-status:GET:0": {
      "opcode": "28",
      "uri": "/v1/api/system/diagnostics/hw-status",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_DIAGNOSTICS",
      "row_name": "hw-status",
      "action": 0
    },
    "/v1/api/system/diagnostics/temperature:GET:0": {
      "opcode": "29",
      "uri": "/v1/api/system/diagnostics/temperature",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_DIAGNOSTICS",
      "row_name": "temperature",
      "action": 0
    },
    "/v1/api/system/diagnostics/device-log:GET:0": {
      "opcode": "30",
      "uri": "/v1/api/system/diagnostics/device-log",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_DIAGNOSTICS",
      "row_name": "device-log",
      "action": 0
    },
    "/v1/api/system/diagnostics/device-log-level:GET:0": {
      "opcode": "31",
      "uri": "/v1/api/system/diagnostics/device-log-level",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_DIAGNOSTICS",
      "row_name": "device-log-level",
      "action": 0
    },
    "/v1/api/system/diagnostics/device-log-level:POST:0": {
      "opcode": "32",
      "uri": "/v1/api/system/diagnostics/device-log-level",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_DIAGNOSTICS",
      "row_name": "device-log-level",
      "action": 0
    },
    "/v1/api/system/diagnostics/device-log-facility:GET:0": {
      "opcode": "33",
      "uri": "/v1/api/system/diagnostics/device-log-facility",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_DIAGNOSTICS",
      "row_name": "device-log-facility",
      "action": 0
    },
    "/v1/api/system/diagnostics/device-log-facility:POST:0": {
      "opcode": "34",
      "uri": "/v1/api/system/diagnostics/device-log-facility",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_DIAGNOSTICS",
      "row_name": "device-log-facility",
      "action": 0
    },
    "/v1/api/system/diagnostics/dev-log-ip-addr:GET:0": {
      "opcode": "35",
      "uri": "/v1/api/system/diagnostics/dev-log-ip-addr",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_DIAGNOSTICS",
      "row_name": "dev-log-ip-addr",
      "action": 0
    },
    "/v1/api/system/diagnostics/dev-log-ip-addr:POST:0": {
      "opcode": "36",
      "uri": "/v1/api/system/diagnostics/dev-log-ip-addr",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_DIAGNOSTICS",
      "row_name": "dev-log-ip-addr",
      "action": 0
    },
    "/v1/api/system/splash-scrn/enable:GET:0": {
      "opcode": "37",
      "uri": "/v1/api/system/splash-scrn/enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_SPLASH-SCRN",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/system/splash-scrn/enable:POST:0": {
      "opcode": "38",
      "uri": "/v1/api/system/splash-scrn/enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_SPLASH-SCRN",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/system/splash-scrn/upload:POST:0": {
      "opcode": "39",
      "uri": "/v1/api/system/splash-scrn/upload",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_SPLASH-SCRN",
      "row_name": "upload",
      "action": 0
    },
    "/v1/api/system/splash-scrn/get-name:GET:0": {
      "opcode": "40",
      "uri": "/v1/api/system/splash-scrn/get-name",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_SPLASH-SCRN",
      "row_name": "get-name",
      "action": 0
    },
    "/v1/api/system/reset/soft-reset:POST:0": {
      "opcode": "41",
      "uri": "/v1/api/system/reset/soft-reset",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_RESET",
      "row_name": "soft-reset",
      "action": 0
    },
    "/v1/api/system/reset/configuration-reset:POST:0": {
      "opcode": "42",
      "uri": "/v1/api/system/reset/configuration-reset",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_RESET",
      "row_name": "configuration-reset",
      "action": 0
    },
    "/v1/api/system/reset/factory-reset:POST:0": {
      "opcode": "43",
      "uri": "/v1/api/system/reset/factory-reset",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_RESET",
      "row_name": "factory-reset",
      "action": 0
    },
    "/v1/api/system/reboot:POST:0": {
      "opcode": "44",
      "uri": "/v1/api/system/reboot",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM",
      "row_name": "reboot",
      "action": 0
    },
    "/v1/api/system/authentication/admin:GET:0": {
      "opcode": 0,
      "uri": "/v1/api/system/authentication/admin",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_AUTHENTICATION",
      "row_name": "admin",
      "action": 0
    },
    "/v1/api/system/authentication/admin:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/authentication/admin",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_AUTHENTICATION",
      "row_name": "admin",
      "action": 0
    },
    "/v1/api/system/authentication/admin-pwd:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/authentication/admin-pwd",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_AUTHENTICATION",
      "row_name": "admin-pwd",
      "action": 0
    },
    "/v1/api/system/authentication/user:GET:0": {
      "opcode": 0,
      "uri": "/v1/api/system/authentication/user",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_AUTHENTICATION",
      "row_name": "user",
      "action": 0
    },
    "/v1/api/system/authentication/user:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/authentication/user",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_AUTHENTICATION",
      "row_name": "user",
      "action": 0
    },
    "/v1/api/system/authentication/user-pwd:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/authentication/user-pwd",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_AUTHENTICATION",
      "row_name": "user-pwd",
      "action": 0
    },
    "/v1/api/system/identification/id:GET:0": {
      "opcode": "45",
      "uri": "/v1/api/system/identification/id",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_IDENTIFICATION",
      "row_name": "id",
      "action": 0
    },
    "/v1/api/system/video-mode/enable-3d:GET:0": {
      "opcode": "46",
      "uri": "/v1/api/system/video-mode/enable-3d",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_VIDEO-MODE",
      "row_name": "enable-3d",
      "action": 0
    },
    "/v1/api/system/video-mode/enable-3d:POST:0": {
      "opcode": "47",
      "uri": "/v1/api/system/video-mode/enable-3d",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_VIDEO-MODE",
      "row_name": "enable-3d",
      "action": 0
    },
    "/v1/api/system/config-file/upload:POST:0": {
      "opcode": "48",
      "uri": "/v1/api/system/config-file/upload",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_CONFIG-FILE",
      "row_name": "upload",
      "action": 0
    },
    "/v1/api/system/config-file/download:POST:0": {
      "opcode": "49",
      "uri": "/v1/api/system/config-file/download",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_CONFIG-FILE",
      "row_name": "download",
      "action": 0
    },
    "/v1/api/system/config-file/delete:POST:0": {
      "opcode": "50",
      "uri": "/v1/api/system/config-file/delete",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_CONFIG-FILE",
      "row_name": "delete",
      "action": 0
    },
    "/v1/api/system/config-file/update:POST:0": {
      "opcode": "51",
      "uri": "/v1/api/system/config-file/update",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_CONFIG-FILE",
      "row_name": "update",
      "action": 0
    },
    "/v1/api/system/misc/board-type:GET:0": {
      "opcode": "52",
      "uri": "/v1/api/system/misc/board-type",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_MISC",
      "row_name": "board-type",
      "action": 0
    },
    "/v1/api/system/misc/led-on-time:GET:0": {
      "opcode": "53",
      "uri": "/v1/api/system/misc/led-on-time",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_MISC",
      "row_name": "led-on-time",
      "action": 0
    },
    "/v1/api/system/misc/led-on-time:POST:0": {
      "opcode": "54",
      "uri": "/v1/api/system/misc/led-on-time",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_MISC",
      "row_name": "led-on-time",
      "action": 0
    },
    "/v1/api/system/misc/led-off-time:GET:0": {
      "opcode": "55",
      "uri": "/v1/api/system/misc/led-off-time",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_MISC",
      "row_name": "led-off-time",
      "action": 0
    },
    "/v1/api/system/misc/led-off-time:POST:0": {
      "opcode": "56",
      "uri": "/v1/api/system/misc/led-off-time",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_MISC",
      "row_name": "led-off-time",
      "action": 0
    },
    "/v1/api/system/misc/http-mode:GET:0": {
      "opcode": "55",
      "uri": "/v1/api/system/misc/http-mode",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_MISC",
      "row_name": "http-mode",
      "action": 0
    },
    "/v1/api/system/misc/http-mode:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/misc/http-mode",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_MISC",
      "row_name": "http-mode",
      "action": 1
    },
    "/v1/api/system/misc/enable-encryption:GET:0": {
      "opcode": "55",
      "uri": "/v1/api/system/misc/enable-encryption",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_MISC",
      "row_name": "enable-encryption",
      "action": 0
    },
    "/v1/api/system/misc/enable-encryption:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/misc/enable-encryption",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_MISC",
      "row_name": "enable-encryption",
      "action": 1
    },
    "/v1/api/system/mdns/add-key:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/mdns/add-key",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_MDNS_ADD-KEY",
      "row_name": "add-key",
      "action": 0
    },
    "/v1/api/system/mdns/add-key/key:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/mdns/add-key/key",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_MDNS_ADD-KEY",
      "row_name": "key",
      "action": 0
    },
    "/v1/api/system/mdns/add-key/data-value:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/mdns/add-key/data-value",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_MDNS_ADD-KEY",
      "row_name": "data-value",
      "action": 0
    },
    "/v1/api/system/mdns/delete-key:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/mdns/delete-key",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_MDNS",
      "row_name": "delete-key",
      "action": 0
    },
    "/v1/api/system/mdns/read-keys:GET:0": {
      "opcode": "0",
      "uri": "/v1/api/system/mdns/read-keys",
      "method": "GET",
      "req_type": 0,
      "tableName": "SYSTEM_MDNS",
      "row_name": "read-keys",
      "action": 0
    },
    "/v1/api/system/mdns/edit-key:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/mdns/edit-key",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_MDNS_EDIT-KEY",
      "row_name": "edit-key",
      "action": 0
    },
    "/v1/api/system/mdns/edit-key/key:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/mdns/edit-key/key",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_MDNS_EDIT-KEY",
      "row_name": "key",
      "action": 0
    },
    "/v1/api/system/mdns/edit-key/data-value:POST:0": {
      "opcode": "0",
      "uri": "/v1/api/system/mdns/edit-key/data-value",
      "method": "POST",
      "req_type": 0,
      "tableName": "SYSTEM_MDNS_EDIT-KEY",
      "row_name": "data-value",
      "action": 0
    },
    "/v1/api/video/input/streams:GET:0": {
      "opcode": "101",
      "uri": "/v1/api/video/input/streams",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_INPUT",
      "row_name": "streams",
      "action": 0
    },
    "/v1/api/video/input/resolution:GET:0": {
      "opcode": "102",
      "uri": "/v1/api/video/input/resolution",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_INPUT",
      "row_name": "resolution",
      "action": 0
    },
    "/v1/api/video/input/frame-rate:GET:0": {
      "opcode": "103",
      "uri": "/v1/api/video/input/frame-rate",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_INPUT",
      "row_name": "frame-rate",
      "action": 0
    },
    "/v1/api/video/input/valid-input:GET:0": {
      "opcode": "104",
      "uri": "/v1/api/video/input/valid-input",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_INPUT",
      "row_name": "valid-input",
      "action": 0
    },
    "/v1/api/video/input/cable-presence:GET:0": {
      "opcode": "105",
      "uri": "/v1/api/video/input/cable-presence",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_INPUT",
      "row_name": "cable-presence",
      "action": 0
    },
    "/v1/api/video/input/buffer-type:GET:0": {
      "opcode": "106",
      "uri": "/v1/api/video/input/buffer-type",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_INPUT",
      "row_name": "buffer-type",
      "action": 0
    },
    "/v1/api/video/input/buffer-type:POST:0": {
      "opcode": "107",
      "uri": "/v1/api/video/input/buffer-type",
      "method": "POST",
      "req_type": 0,
      "tableName": "VIDEO_INPUT",
      "row_name": "buffer-type",
      "action": 0
    },
    "/v1/api/video/input/buffer-delay:GET:0": {
      "opcode": "108",
      "uri": "/v1/api/video/input/buffer-delay",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_INPUT",
      "row_name": "buffer-delay",
      "action": 0
    },
    "/v1/api/video/input/buffer-delay:POST:0": {
      "opcode": "109",
      "uri": "/v1/api/video/input/buffer-delay",
      "method": "POST",
      "req_type": 0,
      "tableName": "VIDEO_INPUT",
      "row_name": "buffer-delay",
      "action": 0
    },
    "/v1/api/video/input/hqll-mult-ip-addr:GET:0": {
      "opcode": "110",
      "uri": "/v1/api/video/input/hqll-mult-ip-addr",
      "method": "GET",
      "req_type": 1,
      "child_api": "ip-addr,port",
      "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
      "row_name": "hqll-mult-ip-addr",
      "action": 0
    },
    "/v1/api/video/input/hqll-mult-ip-addr:POST:1:ip-addr,port": {
      "opcode": "111",
      "uri": "/v1/api/video/input/hqll-mult-ip-addr",
      "method": "POST",
      "req_type": 1,
      "child_api": "ip-addr,port",
      "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
      "row_name": "hqll-mult-ip-addr",
      "action": 0
    },
    "/v1/api/video/input/hqll-mult-ip-addr:POST:1:ip-addr": {
      "opcode": "113",
      "uri": "/v1/api/video/input/hqll-mult-ip-addr",
      "method": "POST",
      "req_type": 1,
      "child_api": "ip-addr",
      "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
      "row_name": "hqll-mult-ip-addr",
      "action": 0
    },
    "/v1/api/video/input/hqll-mult-ip-addr:POST:1:port": {
      "opcode": "115",
      "uri": "/v1/api/video/input/hqll-mult-ip-addr",
      "method": "POST",
      "req_type": 1,
      "child_api": "port",
      "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
      "row_name": "hqll-mult-ip-addr",
      "action": 0
    },
    "/v1/api/video/input/hqll-mult-ip-addr/ip-addr:GET:0": {
      "opcode": "112",
      "uri": "/v1/api/video/input/hqll-mult-ip-addr/ip-addr",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
      "row_name": "ip-addr",
      "action": 0
    },
    "/v1/api/video/input/hqll-mult-ip-addr/ip-addr:POST:0": {
      "opcode": "113",
      "uri": "/v1/api/video/input/hqll-mult-ip-addr/ip-addr",
      "method": "POST",
      "req_type": 0,
      "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
      "row_name": "ip-addr",
      "action": 0
    },
    "/v1/api/video/input/hqll-mult-ip-addr/port:GET:0": {
      "opcode": "114",
      "uri": "/v1/api/video/input/hqll-mult-ip-addr/port",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
      "row_name": "port",
      "action": 0
    },
    "/v1/api/video/input/hqll-mult-ip-addr/port:POST:0": {
      "opcode": "115",
      "uri": "/v1/api/video/input/hqll-mult-ip-addr/port",
      "method": "POST",
      "req_type": 0,
      "tableName": "VIDEO_INPUT_HQLL-MULTI-IP-ADDR",
      "row_name": "port",
      "action": 0
    },
    "/v1/api/video/input/es-mult-ip-addr:GET:0": {
      "opcode": "116",
      "uri": "/v1/api/video/input/es-mult-ip-addr",
      "method": "GET",
      "req_type": 1,
      "child_api": "ip-addr,port",
      "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
      "row_name": "es-mult-ip-addr",
      "action": 0
    },
    "/v1/api/video/input/es-mult-ip-addr:POST:1:ip-addr,port": {
      "opcode": "117",
      "uri": "/v1/api/video/input/es-mult-ip-addr",
      "method": "POST",
      "req_type": 1,
      "child_api": "ip-addr,port",
      "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
      "row_name": "es-mult-ip-addr",
      "action": 0
    },
    "/v1/api/video/input/es-mult-ip-addr:POST:1:ip-addr": {
      "opcode": "119",
      "uri": "/v1/api/video/input/es-mult-ip-addr",
      "method": "POST",
      "req_type": 1,
      "child_api": "ip-addr",
      "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
      "row_name": "es-mult-ip-addr",
      "action": 0
    },
    "/v1/api/video/input/es-mult-ip-addr:POST:1:port": {
      "opcode": "121",
      "uri": "/v1/api/video/input/es-mult-ip-addr",
      "method": "POST",
      "req_type": 1,
      "child_api": "port",
      "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
      "row_name": "es-mult-ip-addr",
      "action": 0
    },
    "/v1/api/video/input/es-mult-ip-addr/ip-addr:GET:0": {
      "opcode": "118",
      "uri": "/v1/api/video/input/es-mult-ip-addr/ip-addr",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
      "row_name": "ip-addr",
      "action": 0
    },
    "/v1/api/video/input/es-mult-ip-addr/ip-addr:POST:0": {
      "opcode": "119",
      "uri": "/v1/api/video/input/es-mult-ip-addr/ip-addr",
      "method": "POST",
      "req_type": 0,
      "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
      "row_name": "ip-addr",
      "action": 0
    },
    "/v1/api/video/input/es-mult-ip-addr/port:GET:0": {
      "opcode": "120",
      "uri": "/v1/api/video/input/es-mult-ip-addr/port",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
      "row_name": "port",
      "action": 0
    },
    "/v1/api/video/input/es-mult-ip-addr/port:POST:0": {
      "opcode": "121",
      "uri": "/v1/api/video/input/es-mult-ip-addr/port",
      "method": "POST",
      "req_type": 0,
      "tableName": "VIDEO_INPUT_ES-MULTI-IP-ADDR",
      "row_name": "port",
      "action": 0
    },
    "/v1/api/video/input/mute:GET:0": {
      "opcode": "122",
      "uri": "/v1/api/video/input/mute",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_INPUT",
      "row_name": "mute",
      "action": 0
    },
    "/v1/api/video/input/mute:POST:0": {
      "opcode": "123",
      "uri": "/v1/api/video/input/mute",
      "method": "POST",
      "req_type": 0,
      "tableName": "VIDEO_INPUT",
      "row_name": "mute",
      "action": 0
    },
    "/v1/api/video/output/videos:GET:0": {
      "opcode": "124",
      "uri": "/v1/api/video/output/videos",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_OUTPUT",
      "row_name": "videos",
      "action": 0
    },
    "/v1/api/video/output/resolution:GET:0": {
      "opcode": "125",
      "uri": "/v1/api/video/output/resolution",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_OUTPUT",
      "row_name": "resolution",
      "action": 0
    },
    "/v1/api/video/output/frame-rate:GET:0": {
      "opcode": "126",
      "uri": "/v1/api/video/output/frame-rate",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_OUTPUT",
      "row_name": "frame-rate",
      "action": 0
    },
    "/v1/api/video/output/edid:GET:0": {
      "opcode": "127",
      "uri": "/v1/api/video/output/edid",
      "method": "GET",
      "req_type": 0,
      "tableName": "VIDEO_OUTPUT",
      "row_name": "edid",
      "action": 0
    },
    "/v1/api/comp-layout/feature-enable:GET:0": {
      "opcode": "151",
      "uri": "/v1/api/comp-layout/feature-enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "COMP-LAYOUT",
      "row_name": "feature-enable",
      "action": 0
    },
    "/v1/api/comp-layout/feature-enable:POST:0": {
      "opcode": "152",
      "uri": "/v1/api/comp-layout/feature-enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "COMP-LAYOUT",
      "row_name": "feature-enable",
      "action": 0
    },
    "/v1/api/comp-layout/available-layout:GET:0": {
      "opcode": "153",
      "uri": "/v1/api/comp-layout/available-layout",
      "method": "GET",
      "req_type": 0,
      "tableName": "COMP-LAYOUT",
      "row_name": "available-layout",
      "action": 0
    },
    "/v1/api/comp-layout/enable-pip:GET:0": {
      "opcode": "154",
      "uri": "/v1/api/comp-layout/enable-pip",
      "method": "GET",
      "req_type": 0,
      "tableName": "COMP-LAYOUT",
      "row_name": "enable-pip",
      "action": 0
    },
    "/v1/api/comp-layout/enable-pip:POST:0": {
      "opcode": "155",
      "uri": "/v1/api/comp-layout/enable-pip",
      "method": "POST",
      "req_type": 0,
      "tableName": "COMP-LAYOUT",
      "row_name": "enable-pip",
      "action": 0
    },
    "/v1/api/comp-layout/pip-loc:GET:0": {
      "opcode": "156",
      "uri": "/v1/api/comp-layout/pip-loc",
      "method": "GET",
      "req_type": 1,
      "child_api": "x-location,y-location",
      "tableName": "COMP-LAYOUT_PIP-LOC",
      "row_name": "pip-loc",
      "action": 0
    },
    "/v1/api/comp-layout/pip-loc:POST:1:x-location,y-location": {
      "opcode": "157",
      "uri": "/v1/api/comp-layout/pip-loc",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location",
      "tableName": "COMP-LAYOUT_PIP-LOC",
      "row_name": "pip-loc",
      "action": 0
    },
    "/v1/api/comp-layout/pip-loc:POST:1:x-location": {
      "opcode": "159",
      "uri": "/v1/api/comp-layout/pip-loc",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location",
      "tableName": "COMP-LAYOUT_PIP-LOC",
      "row_name": "pip-loc",
      "action": 0
    },
    "/v1/api/comp-layout/pip-loc:POST:1:y-location": {
      "opcode": "161",
      "uri": "/v1/api/comp-layout/pip-loc",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location",
      "tableName": "COMP-LAYOUT_PIP-LOC",
      "row_name": "pip-loc",
      "action": 0
    },
    "/v1/api/comp-layout/pip-loc/x-location:GET:0": {
      "opcode": "158",
      "uri": "/v1/api/comp-layout/pip-loc/x-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "COMP-LAYOUT_PIP-LOC",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/comp-layout/pip-loc/x-location:POST:0": {
      "opcode": "159",
      "uri": "/v1/api/comp-layout/pip-loc/x-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "COMP-LAYOUT_PIP-LOC",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/comp-layout/pip-loc/y-location:GET:0": {
      "opcode": "160",
      "uri": "/v1/api/comp-layout/pip-loc/y-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "COMP-LAYOUT_PIP-LOC",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/comp-layout/pip-loc/y-location:POST:0": {
      "opcode": "161",
      "uri": "/v1/api/comp-layout/pip-loc/y-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "COMP-LAYOUT_PIP-LOC",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/comp-layout/enable-pap:GET:0": {
      "opcode": "162",
      "uri": "/v1/api/comp-layout/enable-pap",
      "method": "GET",
      "req_type": 0,
      "tableName": "COMP-LAYOUT",
      "row_name": "enable-pap",
      "action": 0
    },
    "/v1/api/comp-layout/enable-pap:POST:0": {
      "opcode": "163",
      "uri": "/v1/api/comp-layout/enable-pap",
      "method": "POST",
      "req_type": 0,
      "tableName": "COMP-LAYOUT",
      "row_name": "enable-pap",
      "action": 0
    },
    "/v1/api/comp-layout/swap-pap:POST:0": {
      "opcode": "164",
      "uri": "/v1/api/comp-layout/swap-pap",
      "method": "POST",
      "req_type": 0,
      "tableName": "COMP-LAYOUT",
      "row_name": "swap-pap",
      "action": 0
    },
    "/v1/api/overlay/feature-enable:GET:0": {
      "opcode": "201",
      "uri": "/v1/api/overlay/feature-enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY",
      "row_name": "feature-enable",
      "action": 0
    },
    "/v1/api/overlay/feature-enable:POST:0": {
      "opcode": "202",
      "uri": "/v1/api/overlay/feature-enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY",
      "row_name": "feature-enable",
      "action": 0
    },
    "/v1/api/overlay/max-images:GET:0": {
      "opcode": "203",
      "uri": "/v1/api/overlay/max-images",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY",
      "row_name": "max-images",
      "action": 0
    },
    "/v1/api/overlay/max-images:POST:0": {
      "opcode": "204",
      "uri": "/v1/api/overlay/max-images",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY",
      "row_name": "max-images",
      "action": 0
    },
    "/v1/api/overlay/enable:GET:0": {
      "opcode": "205",
      "uri": "/v1/api/overlay/enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/enable:POST:0": {
      "opcode": "206",
      "uri": "/v1/api/overlay/enable",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name,id,height,width",
      "tableName": "OVERLAY",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:file_name,id,height,width": {
      "opcode": "207",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name,id,height,width",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:file_name": {
      "opcode": "208",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:file_name,id": {
      "opcode": "208,209",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name,id",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:file_name,id,height": {
      "opcode": "208,209,210",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name,id,height",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:file_name,height": {
      "opcode": "208,210",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name,height",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:file_name,height,width": {
      "opcode": "208,210,211",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name,height,width",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:file_name,width": {
      "opcode": "208,211",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name,width",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:id": {
      "opcode": "209",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "id",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:id,height": {
      "opcode": "209,210",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "id,height",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:id,height,width": {
      "opcode": "209,210,211",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "id,height,width",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:id,width": {
      "opcode": "209,211",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "id,width",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:height": {
      "opcode": "210",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "height",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:height,width": {
      "opcode": "210,211",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "height,width",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image:POST:1:width": {
      "opcode": "211",
      "uri": "/v1/api/overlay/upload-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "width",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "upload-image",
      "action": 0
    },
    "/v1/api/overlay/upload-image/file-name:POST:0": {
      "opcode": "208",
      "uri": "/v1/api/overlay/upload-image/file-name",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "file-name",
      "action": 0
    },
    "/v1/api/overlay/upload-image/id:POST:0": {
      "opcode": "209",
      "uri": "/v1/api/overlay/upload-image/id",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "id",
      "action": 0
    },
    "/v1/api/overlay/upload-image/height:POST:0": {
      "opcode": "210",
      "uri": "/v1/api/overlay/upload-image/height",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "height",
      "action": 0
    },
    "/v1/api/overlay/upload-image/width:POST:0": {
      "opcode": "211",
      "uri": "/v1/api/overlay/upload-image/width",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name,height,width",
      "tableName": "OVERLAY_UPLOAD-IMAGE",
      "row_name": "width",
      "action": 0
    },
    "/v1/api/overlay/upload-mute-image:POST:1:file_name,height,width": {
      "opcode": "212",
      "uri": "/v1/api/overlay/upload-mute-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name,height,width",
      "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
      "row_name": "upload-mute-image",
      "action": 0
    },
    "/v1/api/overlay/upload-mute-image:POST:1:file_name": {
      "opcode": "213",
      "uri": "/v1/api/overlay/upload-mute-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name",
      "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
      "row_name": "upload-mute-image",
      "action": 0
    },
    "/v1/api/overlay/upload-mute-image:POST:1:file_name,height": {
      "opcode": "213,214",
      "uri": "/v1/api/overlay/upload-mute-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name,height",
      "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
      "row_name": "upload-mute-image",
      "action": 0
    },
    "/v1/api/overlay/upload-mute-image:POST:1:file_name,width": {
      "opcode": "213,215",
      "uri": "/v1/api/overlay/upload-mute-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "file_name,width",
      "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
      "row_name": "upload-mute-image",
      "action": 0
    },
    "/v1/api/overlay/upload-mute-image:POST:1:height": {
      "opcode": "214",
      "uri": "/v1/api/overlay/upload-mute-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "height",
      "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
      "row_name": "upload-mute-image",
      "action": 0
    },
    "/v1/api/overlay/upload-mute-image:POST:1:height,width": {
      "opcode": "214,215",
      "uri": "/v1/api/overlay/upload-mute-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "height,width",
      "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
      "row_name": "upload-mute-image",
      "action": 0
    },
    "/v1/api/overlay/upload-mute-image:POST:1:width": {
      "opcode": "215",
      "uri": "/v1/api/overlay/upload-mute-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "width",
      "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
      "row_name": "upload-mute-image",
      "action": 0
    },
    "/v1/api/overlay/upload-mute-image/file-name:POST:0": {
      "opcode": "213",
      "uri": "/v1/api/overlay/upload-mute-image/file-name",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
      "row_name": "file-name",
      "action": 0
    },
    "/v1/api/overlay/upload-mute-image/height:POST:0": {
      "opcode": "214",
      "uri": "/v1/api/overlay/upload-mute-image/height",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
      "row_name": "height",
      "action": 0
    },
    "/v1/api/overlay/upload-mute-image/width:POST:0": {
      "opcode": "215",
      "uri": "/v1/api/overlay/upload-mute-image/width",
      "method": "POST",
      "req_type": 1,
      "child_api": "id",
      "tableName": "OVERLAY_UPLOAD-MUTE-IMAGE",
      "row_name": "width",
      "action": 0
    },
    "/v1/api/overlay/del-image:POST:1:id": {
      "opcode": "217",
      "uri": "/v1/api/overlay/del-image",
      "method": "POST",
      "req_type": 1,
      "child_api": "id",
      "tableName": "OVERLAY_DEL-IMAGE",
      "row_name": "del-image",
      "action": 0
    },
    "/v1/api/overlay/del-image/id:POST:0": {
      "opcode": "217",
      "uri": "/v1/api/overlay/del-image/id",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_DEL-IMAGE",
      "row_name": "id",
      "action": 0
    },
    "/v1/api/overlay/0/image-params:GET:0": {
      "opcode": "218",
      "uri": "/v1/api/overlay/0/image-params",
      "method": "GET",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_0",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/0/image-params:POST:1:x-location,y-location,enable": {
      "opcode": "219",
      "uri": "/v1/api/overlay/0/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_0",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/0/image-params:POST:1:x-location": {
      "opcode": "223",
      "uri": "/v1/api/overlay/0/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location",
      "tableName": "OVERLAY_0",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/0/image-params:POST:1:x-location,y-location": {
      "opcode": "223,225",
      "uri": "/v1/api/overlay/0/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location",
      "tableName": "OVERLAY_0",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/0/image-params:POST:1:x-location,enable": {
      "opcode": "223,227",
      "uri": "/v1/api/overlay/0/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,enable",
      "tableName": "OVERLAY_0",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/0/image-params:POST:1:y-location": {
      "opcode": "225",
      "uri": "/v1/api/overlay/0/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location",
      "tableName": "OVERLAY_0",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/0/image-params:POST:1:y-location,enable": {
      "opcode": "225,227",
      "uri": "/v1/api/overlay/0/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location,enable",
      "tableName": "OVERLAY_0",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/0/image-params:POST:1:enable": {
      "opcode": "227",
      "uri": "/v1/api/overlay/0/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "enable",
      "tableName": "OVERLAY_0",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/0/image-params/x-location:GET:0": {
      "opcode": "222",
      "uri": "/v1/api/overlay/0/image-params/x-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_0",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/0/image-params/x-location:POST:0": {
      "opcode": "223",
      "uri": "/v1/api/overlay/0/image-params/x-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_0",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/0/image-params/y-location:GET:0": {
      "opcode": "224",
      "uri": "/v1/api/overlay/0/image-params/y-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_0",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/0/image-params/y-location:POST:0": {
      "opcode": "225",
      "uri": "/v1/api/overlay/0/image-params/y-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_0",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/0/image-params/enable:GET:0": {
      "opcode": "226",
      "uri": "/v1/api/overlay/0/image-params/enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_0",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/0/image-params/enable:POST:0": {
      "opcode": "227",
      "uri": "/v1/api/overlay/0/image-params/enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_0",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/0/image-params/height:GET:0": {
      "opcode": "228",
      "uri": "/v1/api/overlay/0/image-params/height",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_0",
      "row_name": "height",
      "action": 0
    },
    "/v1/api/overlay/0/image-params/width:GET:0": {
      "opcode": "230",
      "uri": "/v1/api/overlay/0/image-params/width",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_0",
      "row_name": "width",
      "action": 0
    },
    "/v1/api/overlay/1/image-params:GET:0": {
      "opcode": "232",
      "uri": "/v1/api/overlay/1/image-params",
      "method": "GET",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_1",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/1/image-params:POST:1:x-location,y-location,enable": {
      "opcode": "233",
      "uri": "/v1/api/overlay/1/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_1",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/1/image-params:POST:1:x-location": {
      "opcode": "237",
      "uri": "/v1/api/overlay/1/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location",
      "tableName": "OVERLAY_1",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/1/image-params:POST:1:x-location,y-location": {
      "opcode": "237,239",
      "uri": "/v1/api/overlay/1/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location",
      "tableName": "OVERLAY_1",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/1/image-params:POST:1:x-location,enable": {
      "opcode": "237,241",
      "uri": "/v1/api/overlay/1/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,enable",
      "tableName": "OVERLAY_1",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/1/image-params:POST:1:y-location": {
      "opcode": "239",
      "uri": "/v1/api/overlay/1/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location",
      "tableName": "OVERLAY_1",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/1/image-params:POST:1:y-location,enable": {
      "opcode": "239,241",
      "uri": "/v1/api/overlay/1/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location,enable",
      "tableName": "OVERLAY_1",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/1/image-params:POST:1:enable": {
      "opcode": "241",
      "uri": "/v1/api/overlay/1/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "enable",
      "tableName": "OVERLAY_1",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/1/image-params/x-location:GET:0": {
      "opcode": "236",
      "uri": "/v1/api/overlay/1/image-params/x-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_1",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/1/image-params/x-location:POST:0": {
      "opcode": "237",
      "uri": "/v1/api/overlay/1/image-params/x-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_1",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/1/image-params/y-location:GET:0": {
      "opcode": "238",
      "uri": "/v1/api/overlay/1/image-params/y-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_1",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/1/image-params/y-location:POST:0": {
      "opcode": "239",
      "uri": "/v1/api/overlay/1/image-params/y-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_1",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/1/image-params/enable:GET:0": {
      "opcode": "240",
      "uri": "/v1/api/overlay/1/image-params/enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_1",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/1/image-params/enable:POST:0": {
      "opcode": "241",
      "uri": "/v1/api/overlay/1/image-params/enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_1",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/1/image-params/height:GET:0": {
      "opcode": "242",
      "uri": "/v1/api/overlay/1/image-params/height",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_1",
      "row_name": "height",
      "action": 0
    },
    "/v1/api/overlay/1/image-params/width:GET:0": {
      "opcode": "244",
      "uri": "/v1/api/overlay/1/image-params/width",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_1",
      "row_name": "width",
      "action": 0
    },
    "/v1/api/overlay/2/image-params:GET:0": {
      "opcode": "246",
      "uri": "/v1/api/overlay/2/image-params",
      "method": "GET",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_2",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/2/image-params:POST:1:x-location,y-location,enable": {
      "opcode": "247",
      "uri": "/v1/api/overlay/2/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_2",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/2/image-params:POST:1:x-location": {
      "opcode": "251",
      "uri": "/v1/api/overlay/2/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location",
      "tableName": "OVERLAY_2",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/2/image-params:POST:1:x-location,y-location": {
      "opcode": "251,253",
      "uri": "/v1/api/overlay/2/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location",
      "tableName": "OVERLAY_2",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/2/image-params:POST:1:x-location,enable": {
      "opcode": "251,255",
      "uri": "/v1/api/overlay/2/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,enable",
      "tableName": "OVERLAY_2",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/2/image-params:POST:1:y-location": {
      "opcode": "253",
      "uri": "/v1/api/overlay/2/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location",
      "tableName": "OVERLAY_2",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/2/image-params:POST:1:y-location,enable": {
      "opcode": "253,255",
      "uri": "/v1/api/overlay/2/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location,enable",
      "tableName": "OVERLAY_2",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/2/image-params:POST:1:enable": {
      "opcode": "255",
      "uri": "/v1/api/overlay/2/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "enable",
      "tableName": "OVERLAY_2",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/2/image-params/x-location:GET:0": {
      "opcode": "250",
      "uri": "/v1/api/overlay/2/image-params/x-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_2",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/2/image-params/x-location:POST:0": {
      "opcode": "251",
      "uri": "/v1/api/overlay/2/image-params/x-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_2",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/2/image-params/y-location:GET:0": {
      "opcode": "252",
      "uri": "/v1/api/overlay/2/image-params/y-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_2",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/2/image-params/y-location:POST:0": {
      "opcode": "253",
      "uri": "/v1/api/overlay/2/image-params/y-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_2",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/2/image-params/enable:GET:0": {
      "opcode": "254",
      "uri": "/v1/api/overlay/2/image-params/enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_2",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/2/image-params/enable:POST:0": {
      "opcode": "255",
      "uri": "/v1/api/overlay/2/image-params/enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_2",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/2/image-params/height:GET:0": {
      "opcode": "256",
      "uri": "/v1/api/overlay/2/image-params/height",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_2",
      "row_name": "height",
      "action": 0
    },
    "/v1/api/overlay/2/image-params/width:GET:0": {
      "opcode": "258",
      "uri": "/v1/api/overlay/2/image-params/width",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_2",
      "row_name": "width",
      "action": 0
    },
    "/v1/api/overlay/3/image-params:GET:0": {
      "opcode": "260",
      "uri": "/v1/api/overlay/3/image-params",
      "method": "GET",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_3",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/3/image-params:POST:1:x-location,y-location,enable": {
      "opcode": "261",
      "uri": "/v1/api/overlay/3/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_3",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/3/image-params:POST:1:x-location": {
      "opcode": "265",
      "uri": "/v1/api/overlay/3/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location",
      "tableName": "OVERLAY_3",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/3/image-params:POST:1:x-location,y-location": {
      "opcode": "265,267",
      "uri": "/v1/api/overlay/3/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location",
      "tableName": "OVERLAY_3",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/3/image-params:POST:1:x-location,enable": {
      "opcode": "265,269",
      "uri": "/v1/api/overlay/3/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,enable",
      "tableName": "OVERLAY_3",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/3/image-params:POST:1:y-location": {
      "opcode": "267",
      "uri": "/v1/api/overlay/3/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location",
      "tableName": "OVERLAY_3",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/3/image-params:POST:1:y-location,enable": {
      "opcode": "267,269",
      "uri": "/v1/api/overlay/3/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location,enable",
      "tableName": "OVERLAY_3",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/3/image-params:POST:1:enable": {
      "opcode": "269",
      "uri": "/v1/api/overlay/3/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "enable",
      "tableName": "OVERLAY_3",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/3/image-params/x-location:GET:0": {
      "opcode": "264",
      "uri": "/v1/api/overlay/3/image-params/x-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_3",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/3/image-params/x-location:POST:0": {
      "opcode": "265",
      "uri": "/v1/api/overlay/3/image-params/x-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_3",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/3/image-params/y-location:GET:0": {
      "opcode": "266",
      "uri": "/v1/api/overlay/3/image-params/y-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_3",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/3/image-params/y-location:POST:0": {
      "opcode": "267",
      "uri": "/v1/api/overlay/3/image-params/y-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_3",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/3/image-params/enable:GET:0": {
      "opcode": "268",
      "uri": "/v1/api/overlay/3/image-params/enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_3",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/3/image-params/enable:POST:0": {
      "opcode": "269",
      "uri": "/v1/api/overlay/3/image-params/enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_3",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/3/image-params/height:GET:0": {
      "opcode": "270",
      "uri": "/v1/api/overlay/3/image-params/height",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_3",
      "row_name": "height",
      "action": 0
    },
    "/v1/api/overlay/3/image-params/width:GET:0": {
      "opcode": "272",
      "uri": "/v1/api/overlay/3/image-params/width",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_3",
      "row_name": "width",
      "action": 0
    },
    "/v1/api/overlay/4/image-params:GET:0": {
      "opcode": "274",
      "uri": "/v1/api/overlay/4/image-params",
      "method": "GET",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_4",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/4/image-params:POST:1:x-location,y-location,enable": {
      "opcode": "275",
      "uri": "/v1/api/overlay/4/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_4",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/4/image-params:POST:1:x-location": {
      "opcode": "279",
      "uri": "/v1/api/overlay/4/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location",
      "tableName": "OVERLAY_4",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/4/image-params:POST:1:x-location,y-location": {
      "opcode": "279,281",
      "uri": "/v1/api/overlay/4/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location",
      "tableName": "OVERLAY_4",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/4/image-params:POST:1:x-location,enable": {
      "opcode": "279,283",
      "uri": "/v1/api/overlay/4/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,enable",
      "tableName": "OVERLAY_4",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/4/image-params:POST:1:y-location": {
      "opcode": "281",
      "uri": "/v1/api/overlay/4/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location",
      "tableName": "OVERLAY_4",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/4/image-params:POST:1:y-location,enable": {
      "opcode": "281,283",
      "uri": "/v1/api/overlay/4/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location,enable",
      "tableName": "OVERLAY_4",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/4/image-params:POST:1:enable": {
      "opcode": "283",
      "uri": "/v1/api/overlay/4/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "enable",
      "tableName": "OVERLAY_4",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/4/image-params/x-location:GET:0": {
      "opcode": "278",
      "uri": "/v1/api/overlay/4/image-params/x-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_4",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/4/image-params/x-location:POST:0": {
      "opcode": "279",
      "uri": "/v1/api/overlay/4/image-params/x-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_4",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/4/image-params/y-location:GET:0": {
      "opcode": "280",
      "uri": "/v1/api/overlay/4/image-params/y-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_4",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/4/image-params/y-location:POST:0": {
      "opcode": "281",
      "uri": "/v1/api/overlay/4/image-params/y-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_4",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/4/image-params/enable:GET:0": {
      "opcode": "282",
      "uri": "/v1/api/overlay/4/image-params/enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_4",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/4/image-params/enable:POST:0": {
      "opcode": "283",
      "uri": "/v1/api/overlay/4/image-params/enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_4",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/4/image-params/height:GET:0": {
      "opcode": "284",
      "uri": "/v1/api/overlay/4/image-params/height",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_4",
      "row_name": "height",
      "action": 0
    },
    "/v1/api/overlay/4/image-params/width:GET:0": {
      "opcode": "286",
      "uri": "/v1/api/overlay/4/image-params/width",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_4",
      "row_name": "width",
      "action": 0
    },
    "/v1/api/overlay/5/image-params:GET:0": {
      "opcode": "288",
      "uri": "/v1/api/overlay/5/image-params",
      "method": "GET",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_5",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/5/image-params:POST:1:x-location,y-location,enable": {
      "opcode": "289",
      "uri": "/v1/api/overlay/5/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_5",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/5/image-params:POST:1:x-location": {
      "opcode": "293",
      "uri": "/v1/api/overlay/5/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location",
      "tableName": "OVERLAY_5",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/5/image-params:POST:1:x-location,y-location": {
      "opcode": "293,295",
      "uri": "/v1/api/overlay/5/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location",
      "tableName": "OVERLAY_5",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/5/image-params:POST:1:x-location,enable": {
      "opcode": "293,297",
      "uri": "/v1/api/overlay/5/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,enable",
      "tableName": "OVERLAY_5",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/5/image-params:POST:1:y-location": {
      "opcode": "295",
      "uri": "/v1/api/overlay/5/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location",
      "tableName": "OVERLAY_5",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/5/image-params:POST:1:y-location,enable": {
      "opcode": "295,297",
      "uri": "/v1/api/overlay/5/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location,enable",
      "tableName": "OVERLAY_5",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/5/image-params:POST:1:enable": {
      "opcode": "297",
      "uri": "/v1/api/overlay/5/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "enable",
      "tableName": "OVERLAY_5",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/5/image-params/x-location:GET:0": {
      "opcode": "292",
      "uri": "/v1/api/overlay/5/image-params/x-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_5",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/5/image-params/x-location:POST:0": {
      "opcode": "293",
      "uri": "/v1/api/overlay/5/image-params/x-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_5",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/5/image-params/y-location:GET:0": {
      "opcode": "294",
      "uri": "/v1/api/overlay/5/image-params/y-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_5",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/5/image-params/y-location:POST:0": {
      "opcode": "295",
      "uri": "/v1/api/overlay/5/image-params/y-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_5",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/5/image-params/enable:GET:0": {
      "opcode": "296",
      "uri": "/v1/api/overlay/5/image-params/enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_5",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/5/image-params/enable:POST:0": {
      "opcode": "297",
      "uri": "/v1/api/overlay/5/image-params/enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_5",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/5/image-params/height:GET:0": {
      "opcode": "298",
      "uri": "/v1/api/overlay/5/image-params/height",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_5",
      "row_name": "height",
      "action": 0
    },
    "/v1/api/overlay/5/image-params/width:GET:0": {
      "opcode": "300",
      "uri": "/v1/api/overlay/5/image-params/width",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_5",
      "row_name": "width",
      "action": 0
    },
    "/v1/api/overlay/6/image-params:GET:0": {
      "opcode": "302",
      "uri": "/v1/api/overlay/6/image-params",
      "method": "GET",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_6",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/6/image-params:POST:1:x-location,y-location,enable": {
      "opcode": "303",
      "uri": "/v1/api/overlay/6/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_6",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/6/image-params:POST:1:x-location": {
      "opcode": "307",
      "uri": "/v1/api/overlay/6/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location",
      "tableName": "OVERLAY_6",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/6/image-params:POST:1:x-location,y-location": {
      "opcode": "307,309",
      "uri": "/v1/api/overlay/6/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location",
      "tableName": "OVERLAY_6",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/6/image-params:POST:1:x-location,enable": {
      "opcode": "307,311",
      "uri": "/v1/api/overlay/6/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,enable",
      "tableName": "OVERLAY_6",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/6/image-params:POST:1:y-location": {
      "opcode": "309",
      "uri": "/v1/api/overlay/6/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location",
      "tableName": "OVERLAY_6",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/6/image-params:POST:1:y-location,enable": {
      "opcode": "309,311",
      "uri": "/v1/api/overlay/6/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location,enable",
      "tableName": "OVERLAY_6",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/6/image-params:POST:1:enable": {
      "opcode": "311",
      "uri": "/v1/api/overlay/6/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "enable",
      "tableName": "OVERLAY_6",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/6/image-params/x-location:GET:0": {
      "opcode": "306",
      "uri": "/v1/api/overlay/6/image-params/x-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_6",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/6/image-params/x-location:POST:0": {
      "opcode": "307",
      "uri": "/v1/api/overlay/6/image-params/x-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_6",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/6/image-params/y-location:GET:0": {
      "opcode": "308",
      "uri": "/v1/api/overlay/6/image-params/y-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_6",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/6/image-params/y-location:POST:0": {
      "opcode": "309",
      "uri": "/v1/api/overlay/6/image-params/y-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_6",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/6/image-params/enable:GET:0": {
      "opcode": "310",
      "uri": "/v1/api/overlay/6/image-params/enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_6",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/6/image-params/enable:POST:0": {
      "opcode": "311",
      "uri": "/v1/api/overlay/6/image-params/enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_6",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/6/image-params/height:GET:0": {
      "opcode": "312",
      "uri": "/v1/api/overlay/6/image-params/height",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_6",
      "row_name": "height",
      "action": 0
    },
    "/v1/api/overlay/6/image-params/width:GET:0": {
      "opcode": "314",
      "uri": "/v1/api/overlay/6/image-params/width",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_6",
      "row_name": "width",
      "action": 0
    },
    "/v1/api/overlay/7/image-params:GET:0": {
      "opcode": "316",
      "uri": "/v1/api/overlay/7/image-params",
      "method": "GET",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_7",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/7/image-params:POST:1:x-location,y-location,enable": {
      "opcode": "317",
      "uri": "/v1/api/overlay/7/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location,enable",
      "tableName": "OVERLAY_7",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/7/image-params:POST:1:x-location": {
      "opcode": "321",
      "uri": "/v1/api/overlay/7/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location",
      "tableName": "OVERLAY_7",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/7/image-params:POST:1:x-location,y-location": {
      "opcode": "321,323",
      "uri": "/v1/api/overlay/7/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,y-location",
      "tableName": "OVERLAY_7",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/7/image-params:POST:1:x-location,enable": {
      "opcode": "321,325",
      "uri": "/v1/api/overlay/7/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "x-location,enable",
      "tableName": "OVERLAY_7",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/7/image-params:POST:1:y-location": {
      "opcode": "323",
      "uri": "/v1/api/overlay/7/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location",
      "tableName": "OVERLAY_7",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/7/image-params:POST:1:y-location,enable": {
      "opcode": "323,325",
      "uri": "/v1/api/overlay/7/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "y-location,enable",
      "tableName": "OVERLAY_7",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/7/image-params:POST:1:enable": {
      "opcode": "325",
      "uri": "/v1/api/overlay/7/image-params",
      "method": "POST",
      "req_type": 1,
      "child_api": "enable",
      "tableName": "OVERLAY_7",
      "row_name": "image-params",
      "action": 0
    },
    "/v1/api/overlay/7/image-params/x-location:GET:0": {
      "opcode": "320",
      "uri": "/v1/api/overlay/7/image-params/x-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_7",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/7/image-params/x-location:POST:0": {
      "opcode": "321",
      "uri": "/v1/api/overlay/7/image-params/x-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_7",
      "row_name": "x-location",
      "action": 0
    },
    "/v1/api/overlay/7/image-params/y-location:GET:0": {
      "opcode": "322",
      "uri": "/v1/api/overlay/7/image-params/y-location",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_7",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/7/image-params/y-location:POST:0": {
      "opcode": "323",
      "uri": "/v1/api/overlay/7/image-params/y-location",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_7",
      "row_name": "y-location",
      "action": 0
    },
    "/v1/api/overlay/7/image-params/enable:GET:0": {
      "opcode": "324",
      "uri": "/v1/api/overlay/7/image-params/enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_7",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/7/image-params/enable:POST:0": {
      "opcode": "325",
      "uri": "/v1/api/overlay/7/image-params/enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "OVERLAY_7",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/overlay/7/image-params/height:GET:0": {
      "opcode": "326",
      "uri": "/v1/api/overlay/7/image-params/height",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_7",
      "row_name": "height",
      "action": 0
    },
    "/v1/api/overlay/7/image-params/width:GET:0": {
      "opcode": "328",
      "uri": "/v1/api/overlay/7/image-params/width",
      "method": "GET",
      "req_type": 0,
      "tableName": "OVERLAY_7",
      "row_name": "width",
      "action": 0
    },
    "/v1/api/audio/input/valid-input:GET:0": {
      "opcode": "351",
      "uri": "/v1/api/audio/input/valid-input",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_INPUT",
      "row_name": "valid-input",
      "action": 0
    },
    "/v1/api/audio/input/enable-rx:GET:0": {
      "opcode": "352",
      "uri": "/v1/api/audio/input/enable-rx",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_INPUT",
      "row_name": "enable-rx",
      "action": 0
    },
    "/v1/api/audio/input/enable-rx:POST:0": {
      "opcode": "353",
      "uri": "/v1/api/audio/input/enable-rx",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_INPUT",
      "row_name": "enable-rx",
      "action": 0
    },
    "/v1/api/audio/input/fine-gain:GET:0": {
      "opcode": "354",
      "uri": "/v1/api/audio/input/fine-gain",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_INPUT",
      "row_name": "fine-gain",
      "action": 0
    },
    "/v1/api/audio/input/fine-gain:POST:0": {
      "opcode": "355",
      "uri": "/v1/api/audio/input/fine-gain",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_INPUT",
      "row_name": "fine-gain",
      "action": 0
    },
    "/v1/api/audio/input/coarse-gain:GET:0": {
      "opcode": "356",
      "uri": "/v1/api/audio/input/coarse-gain",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_INPUT",
      "row_name": "coarse-gain",
      "action": 0
    },
    "/v1/api/audio/input/coarse-gain:POST:0": {
      "opcode": "357",
      "uri": "/v1/api/audio/input/coarse-gain",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_INPUT",
      "row_name": "coarse-gain",
      "action": 0
    },
    "/v1/api/audio/input/mute:GET:0": {
      "opcode": "358",
      "uri": "/v1/api/audio/input/mute",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_INPUT",
      "row_name": "mute",
      "action": 0
    },
    "/v1/api/audio/input/mute:POST:0": {
      "opcode": "359",
      "uri": "/v1/api/audio/input/mute",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_INPUT",
      "row_name": "mute",
      "action": 0
    },
    "/v1/api/audio/input/loop-back:GET:0": {
      "opcode": "360",
      "uri": "/v1/api/audio/input/loop-back",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_INPUT",
      "row_name": "loop-back",
      "action": 0
    },
    "/v1/api/audio/input/loop-back:POST:0": {
      "opcode": "361",
      "uri": "/v1/api/audio/input/loop-back",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_INPUT",
      "row_name": "loop-back",
      "action": 0
    },
    "/v1/api/audio/input/rx-mult-ip-addr:GET:0": {
      "opcode": "362",
      "uri": "/v1/api/audio/input/rx-mult-ip-addr",
      "method": "GET",
      "req_type": 1,
      "child_api": "ip-addr,port",
      "tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
      "row_name": "rx-mult-ip-addr",
      "action": 0
    },
    "/v1/api/audio/input/rx-mult-ip-addr:POST:1:ip-addr,port": {
      "opcode": "363",
      "uri": "/v1/api/audio/input/rx-mult-ip-addr",
      "method": "POST",
      "req_type": 1,
      "child_api": "ip-addr,port",
      "tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
      "row_name": "rx-mult-ip-addr",
      "action": 0
    },
    "/v1/api/audio/input/rx-mult-ip-addr:POST:1:ip-addr": {
      "opcode": "365",
      "uri": "/v1/api/audio/input/rx-mult-ip-addr",
      "method": "POST",
      "req_type": 1,
      "child_api": "ip-addr",
      "tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
      "row_name": "rx-mult-ip-addr",
      "action": 0
    },
    "/v1/api/audio/input/rx-mult-ip-addr:POST:1:port": {
      "opcode": "367",
      "uri": "/v1/api/audio/input/rx-mult-ip-addr",
      "method": "POST",
      "req_type": 1,
      "child_api": "port",
      "tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
      "row_name": "rx-mult-ip-addr",
      "action": 0
    },
    "/v1/api/audio/input/rx-mult-ip-addr/ip-addr:GET:0": {
      "opcode": "364",
      "uri": "/v1/api/audio/input/rx-mult-ip-addr/ip-addr",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
      "row_name": "ip-addr",
      "action": 0
    },
    "/v1/api/audio/input/rx-mult-ip-addr/ip-addr:POST:0": {
      "opcode": "365",
      "uri": "/v1/api/audio/input/rx-mult-ip-addr/ip-addr",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
      "row_name": "ip-addr",
      "action": 0
    },
    "/v1/api/audio/input/rx-mult-ip-addr/port:GET:0": {
      "opcode": "366",
      "uri": "/v1/api/audio/input/rx-mult-ip-addr/port",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
      "row_name": "port",
      "action": 0
    },
    "/v1/api/audio/input/rx-mult-ip-addr/port:POST:0": {
      "opcode": "367",
      "uri": "/v1/api/audio/input/rx-mult-ip-addr/port",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_INPUT_RX-MULT-IP-ADDR",
      "row_name": "port",
      "action": 0
    },
    "/v1/api/audio/output/enable-tx:GET:0": {
      "opcode": "368",
      "uri": "/v1/api/audio/output/enable-tx",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT",
      "row_name": "enable-tx",
      "action": 0
    },
    "/v1/api/audio/output/enable-tx:POST:0": {
      "opcode": "369",
      "uri": "/v1/api/audio/output/enable-tx",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT",
      "row_name": "enable-tx",
      "action": 0
    },
    "/v1/api/audio/output/tx-mult-ip-addr:GET:0": {
      "opcode": "370",
      "uri": "/v1/api/audio/output/tx-mult-ip-addr",
      "method": "GET",
      "req_type": 1,
      "child_api": "ip-addr,port",
      "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
      "row_name": "tx-mult-ip-addr",
      "action": 0
    },
    "/v1/api/audio/output/tx-mult-ip-addr:POST:1:ip-addr,port": {
      "opcode": "371",
      "uri": "/v1/api/audio/output/tx-mult-ip-addr",
      "method": "POST",
      "req_type": 1,
      "child_api": "ip-addr,port",
      "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
      "row_name": "tx-mult-ip-addr",
      "action": 0
    },
    "/v1/api/audio/output/tx-mult-ip-addr:POST:1:ip-addr": {
      "opcode": "369",
      "uri": "/v1/api/audio/output/tx-mult-ip-addr",
      "method": "POST",
      "req_type": 1,
      "child_api": "ip-addr",
      "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
      "row_name": "tx-mult-ip-addr",
      "action": 0
    },
    "/v1/api/audio/output/tx-mult-ip-addr:POST:1:port": {
      "opcode": "371",
      "uri": "/v1/api/audio/output/tx-mult-ip-addr",
      "method": "POST",
      "req_type": 1,
      "child_api": "port",
      "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
      "row_name": "tx-mult-ip-addr",
      "action": 0
    },
    "/v1/api/audio/output/tx-mult-ip-addr/ip-addr:GET:0": {
      "opcode": "372",
      "uri": "/v1/api/audio/output/tx-mult-ip-addr/ip-addr",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
      "row_name": "ip-addr",
      "action": 0
    },
    "/v1/api/audio/output/tx-mult-ip-addr/ip-addr:POST:0": {
      "opcode": "373",
      "uri": "/v1/api/audio/output/tx-mult-ip-addr/ip-addr",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
      "row_name": "ip-addr",
      "action": 0
    },
    "/v1/api/audio/output/tx-mult-ip-addr/port:GET:0": {
      "opcode": "374",
      "uri": "/v1/api/audio/output/tx-mult-ip-addr/port",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
      "row_name": "port",
      "action": 0
    },
    "/v1/api/audio/output/tx-mult-ip-addr/port:POST:0": {
      "opcode": "375",
      "uri": "/v1/api/audio/output/tx-mult-ip-addr/port",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT_TX-MULT-IP-ADDR",
      "row_name": "port",
      "action": 0
    },
    "/v1/api/audio/output/fine-gain:GET:0": {
      "opcode": "376",
      "uri": "/v1/api/audio/output/fine-gain",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT",
      "row_name": "fine-gain",
      "action": 0
    },
    "/v1/api/audio/output/fine-gain:POST:0": {
      "opcode": "377",
      "uri": "/v1/api/audio/output/fine-gain",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT",
      "row_name": "fine-gain",
      "action": 0
    },
    "/v1/api/audio/output/coarse-gain:GET:0": {
      "opcode": "378",
      "uri": "/v1/api/audio/output/coarse-gain",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT",
      "row_name": "coarse-gain",
      "action": 0
    },
    "/v1/api/audio/output/coarse-gain:POST:0": {
      "opcode": "379",
      "uri": "/v1/api/audio/output/coarse-gain",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT",
      "row_name": "coarse-gain",
      "action": 0
    },
    "/v1/api/audio/output/mute:GET:0": {
      "opcode": "380",
      "uri": "/v1/api/audio/output/mute",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT",
      "row_name": "mute",
      "action": 0
    },
    "/v1/api/audio/output/mute:POST:0": {
      "opcode": "381",
      "uri": "/v1/api/audio/output/mute",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT",
      "row_name": "mute",
      "action": 0
    },
    "/v1/api/audio/output/fade:GET:0": {
      "opcode": "382",
      "uri": "/v1/api/audio/output/fade",
      "method": "GET",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT",
      "row_name": "fade",
      "action": 0
    },
    "/v1/api/audio/output/fade:POST:0": {
      "opcode": "383",
      "uri": "/v1/api/audio/output/fade",
      "method": "POST",
      "req_type": 0,
      "tableName": "AUDIO_OUTPUT",
      "row_name": "fade",
      "action": 0
    },
    "/v1/api/kvm/feature-enable:GET:0": {
      "opcode": "401",
      "uri": "/v1/api/kvm/feature-enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "KVM",
      "row_name": "feature-enable",
      "action": 0
    },
    "/v1/api/kvm/feature-enable:POST:0": {
      "opcode": "402",
      "uri": "/v1/api/kvm/feature-enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "KVM",
      "row_name": "feature-enable",
      "action": 0
    },
    "/v1/api/kvm/usb-link-status:GET:0": {
      "opcode": "403",
      "uri": "/v1/api/kvm/usb-link-status",
      "method": "GET",
      "req_type": 0,
      "tableName": "KVM",
      "row_name": "usb-link-status",
      "action": 0
    },
    "/v1/api/kvm/enable:GET:0": {
      "opcode": "405",
      "uri": "/v1/api/kvm/enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "KVM",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/kvm/enable:POST:0": {
      "opcode": "406",
      "uri": "/v1/api/kvm/enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "KVM",
      "row_name": "enable",
      "action": 0
    },
    "/v1/api/kvm/encoder:GET:0": {
      "opcode": "407",
      "uri": "/v1/api/kvm/encoder",
      "method": "GET",
      "req_type": 0,
      "tableName": "KVM",
      "row_name": "encoder",
      "action": 0
    },
    "/v1/api/kvm/encoder:POST:0": {
      "opcode": "408",
      "uri": "/v1/api/kvm/encoder",
      "method": "POST",
      "req_type": 0,
      "tableName": "KVM",
      "row_name": "encoder",
      "action": 0
    },
    "/v1/api/kvm/default-encoder:GET:0": {
      "opcode": "409",
      "uri": "/v1/api/kvm/default-encoder",
      "method": "GET",
      "req_type": 0,
      "tableName": "KVM",
      "row_name": "default-encoder",
      "action": 0
    },
    "/v1/api/kvm/default-encoder:POST:0": {
      "opcode": "410",
      "uri": "/v1/api/kvm/default-encoder",
      "method": "POST",
      "req_type": 0,
      "tableName": "KVM",
      "row_name": "default-encoder",
      "action": 0
    },
    "/v1/api/kvm/key-code:GET:0": {
      "opcode": "411",
      "uri": "/v1/api/kvm/key-code",
      "method": "GET",
      "req_type": 0,
      "tableName": "KVM",
      "row_name": "key-code",
      "action": 0
    },
    "/v1/api/kvm/key-code:POST:0": {
      "opcode": "412",
      "uri": "/v1/api/kvm/key-code",
      "method": "POST",
      "req_type": 0,
      "tableName": "KVM",
      "row_name": "key-code",
      "action": 0
    },
    "/v1/api/rs232/feature-enable:GET:0": {
      "opcode": "451",
      "uri": "/v1/api/rs232/feature-enable",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232",
      "row_name": "feature-enable",
      "action": 0
    },
    "/v1/api/rs232/feature-enable:POST:0": {
      "opcode": "452",
      "uri": "/v1/api/rs232/feature-enable",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232",
      "row_name": "feature-enable",
      "action": 0
    },
    "/v1/api/rs232/get-devices:GET:0": {
      "opcode": "453",
      "uri": "/v1/api/rs232/get-devices",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232",
      "row_name": "get-devices",
      "action": 0
    },
    "/v1/api/rs232/open-connection:POST:0": {
      "opcode": "456",
      "uri": "/v1/api/rs232/open-connection",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232",
      "row_name": "open-connection",
      "action": 0
    },
    "/v1/api/rs232/close-connection:POST:0": {
      "opcode": "458",
      "uri": "/v1/api/rs232/close-connection",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232",
      "row_name": "close-connection",
      "action": 0
    },
    "/v1/api/rs232/flush:POST:0": {
      "opcode": "460",
      "uri": "/v1/api/rs232/flush",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232",
      "row_name": "flush",
      "action": 0
    },
    "/v1/api/rs232/0/params:GET:0": {
      "opcode": "461",
      "uri": "/v1/api/rs232/0/params",
      "method": "GET",
      "req_type": 1,
      "child_api": "baud-rate,data-bits,parity,stop-bit,flow-control",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:baud-rate,data-bits,parity,stop-bit,flow-control": {
      "opcode": "462",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,data-bits,parity,stop-bit,flow-control",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:baud-rate": {
      "opcode": "464",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:baud-rate,data-bits": {
      "opcode": "464,466",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,data-bits",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:baud-rate,data-bits,parity": {
      "opcode": "464,466,468",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,data-bits,parity",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:baud-rate,data-bits,parity,stop-bit": {
      "opcode": "464,466,468,470",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,data-bits,parity,stop-bit",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:baud-rate,parity": {
      "opcode": "464,468",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,parity",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:baud-rate,parity,stop-bit": {
      "opcode": "464,468,470",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,parity,stop-bit",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:baud-rate,parity,stop-bit,flow-control": {
      "opcode": "464,468,470,472",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,parity,stop-bit,flow-control",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:baud-rate,stop-bit": {
      "opcode": "464,470",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,stop-bit",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:baud-rate,stop-bit,flow-control": {
      "opcode": "464,470,472",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,stop-bit,flow-control",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:baud-rate,flow-control": {
      "opcode": "464,472",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,flow-control",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:data-bits": {
      "opcode": "466",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:data-bits,parity": {
      "opcode": "466,468",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits,parity",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:data-bits,parity,stop-bit": {
      "opcode": "466,468,470",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits,parity,stop-bit",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:data-bits,parity,stop-bit,flow-control": {
      "opcode": "466,468,470,472",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits,parity,stop-bit,flow-control",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:data-bits,stop-bit": {
      "opcode": "466,470",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits,stop-bit",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:data-bits,stop-bit,flow-control": {
      "opcode": "466,470,472",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits,stop-bit,flow-control",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:data-bits,flow-control": {
      "opcode": "466,472",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits,flow-control",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:parity": {
      "opcode": "468",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "parity",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:parity,stop-bit": {
      "opcode": "468,470",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "parity,stop-bit",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:parity,stop-bit,flow-control": {
      "opcode": "468,470,472",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "parity,stop-bit,flow-control",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:parity,flow-control": {
      "opcode": "468,472",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "parity,flow-control",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:stop-bit": {
      "opcode": "470",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "stop-bit",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:stop-bit,flow-control": {
      "opcode": "470,472",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "stop-bit,flow-control",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params:POST:1:flow-control": {
      "opcode": "472",
      "uri": "/v1/api/rs232/0/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "flow-control",
      "tableName": "RS232_0_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/0/params/baud-rate:GET:0": {
      "opcode": "463",
      "uri": "/v1/api/rs232/0/params/baud-rate",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_0_PARAMS",
      "row_name": "baud-rate",
      "action": 0
    },
    "/v1/api/rs232/0/params/baud-rate:POST:0": {
      "opcode": "464",
      "uri": "/v1/api/rs232/0/params/baud-rate",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_0_PARAMS",
      "row_name": "baud-rate",
      "action": 0
    },
    "/v1/api/rs232/0/params/data-bits:GET:0": {
      "opcode": "465",
      "uri": "/v1/api/rs232/0/params/data-bits",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_0_PARAMS",
      "row_name": "data-bits",
      "action": 0
    },
    "/v1/api/rs232/0/params/data-bits:POST:0": {
      "opcode": "466",
      "uri": "/v1/api/rs232/0/params/data-bits",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_0_PARAMS",
      "row_name": "data-bits",
      "action": 0
    },
    "/v1/api/rs232/0/params/parity:GET:0": {
      "opcode": "467",
      "uri": "/v1/api/rs232/0/params/parity",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_0_PARAMS",
      "row_name": "parity",
      "action": 0
    },
    "/v1/api/rs232/0/params/parity:POST:0": {
      "opcode": "468",
      "uri": "/v1/api/rs232/0/params/parity",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_0_PARAMS",
      "row_name": "parity",
      "action": 0
    },
    "/v1/api/rs232/0/params/stop-bit:GET:0": {
      "opcode": "469",
      "uri": "/v1/api/rs232/0/params/stop-bit",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_0_PARAMS",
      "row_name": "stop-bit",
      "action": 0
    },
    "/v1/api/rs232/0/params/stop-bit:POST:0": {
      "opcode": "470",
      "uri": "/v1/api/rs232/0/params/stop-bit",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_0_PARAMS",
      "row_name": "stop-bit",
      "action": 0
    },
    "/v1/api/rs232/0/params/flow-control:GET:0": {
      "opcode": "471",
      "uri": "/v1/api/rs232/0/params/flow-control",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_0_PARAMS",
      "row_name": "flow-control",
      "action": 0
    },
    "/v1/api/rs232/0/params/flow-control:POST:0": {
      "opcode": "472",
      "uri": "/v1/api/rs232/0/params/flow-control",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_0_PARAMS",
      "row_name": "flow-control",
      "action": 0
    },
    "/v1/api/rs232/0/send:POST:0": {
      "opcode": "480",
      "uri": "/v1/api/rs232/0/send",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_0",
      "row_name": "send",
      "action": 0
    },
    "/v1/api/rs232/0/data-in-notification:GET:0": {
      "opcode": "501",
      "uri": "/v1/api/rs232/0/data-in-notification",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_0",
      "row_name": "data-in-notification",
      "action": 0
    },
    "/v1/api/rs232/0/data-in-notification:POST:0": {
      "opcode": "502",
      "uri": "/v1/api/rs232/0/data-in-notification",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_0",
      "row_name": "data-in-notification",
      "action": 0
    },
    "/v1/api/rs232/0/read-existing:GET:0": {
      "opcode": "503",
      "uri": "/v1/api/rs232/0/read-existing",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_0",
      "row_name": "read-existing",
      "action": 0
    },
    "/v1/api/rs232/0/read-line:GET:0": {
      "opcode": "504",
      "uri": "/v1/api/rs232/0/read-line",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_0",
      "row_name": "read-line",
      "action": 0
    },
    "/v1/api/rs232/1/params:GET:0": {
      "opcode": "481",
      "uri": "/v1/api/rs232/1/params",
      "method": "GET",
      "req_type": 1,
      "child_api": "baud-rate,data-bits,parity,stop-bit,flow-control",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:baud-rate,data-bits,parity,stop-bit,flow-control": {
      "opcode": "482",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,data-bits,parity,stop-bit,flow-control",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:baud-rate": {
      "opcode": "464",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:baud-rate,data-bits": {
      "opcode": "464,466",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,data-bits",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:baud-rate,data-bits,parity": {
      "opcode": "464,466,468",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,data-bits,parity",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:baud-rate,data-bits,parity,stop-bit": {
      "opcode": "464,466,468,470",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,data-bits,parity,stop-bit",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:baud-rate,parity": {
      "opcode": "464,468",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,parity",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:baud-rate,parity,stop-bit": {
      "opcode": "464,468,470",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,parity,stop-bit",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:baud-rate,parity,stop-bit,flow-control": {
      "opcode": "464,468,470,472",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,parity,stop-bit,flow-control",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:baud-rate,stop-bit": {
      "opcode": "464,470",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,stop-bit",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:baud-rate,stop-bit,flow-control": {
      "opcode": "464,470,472",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,stop-bit,flow-control",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:baud-rate,flow-control": {
      "opcode": "464,472",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "baud-rate,flow-control",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:data-bits": {
      "opcode": "466",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:data-bits,parity": {
      "opcode": "466,468",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits,parity",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:data-bits,parity,stop-bit": {
      "opcode": "466,468,470",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits,parity,stop-bit",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:data-bits,parity,stop-bit,flow-control": {
      "opcode": "466,468,470,472",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits,parity,stop-bit,flow-control",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:data-bits,stop-bit": {
      "opcode": "466,470",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits,stop-bit",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:data-bits,stop-bit,flow-control": {
      "opcode": "466,470,472",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits,stop-bit,flow-control",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:data-bits,flow-control": {
      "opcode": "466,472",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "data-bits,flow-control",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:parity": {
      "opcode": "468",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "parity",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:parity,stop-bit": {
      "opcode": "468,470",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "parity,stop-bit",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:parity,stop-bit,flow-control": {
      "opcode": "468,470,472",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "parity,stop-bit,flow-control",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:parity,flow-control": {
      "opcode": "468,472",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "parity,flow-control",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:stop-bit": {
      "opcode": "470",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "stop-bit",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:stop-bit,flow-control": {
      "opcode": "470,472",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "stop-bit,flow-control",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params:POST:1:flow-control": {
      "opcode": "472",
      "uri": "/v1/api/rs232/1/params",
      "method": "POST",
      "req_type": 1,
      "child_api": "flow-control",
      "tableName": "RS232_1_PARAMS",
      "row_name": "params",
      "action": 0
    },
    "/v1/api/rs232/1/params/baud-rate:GET:0": {
      "opcode": "483",
      "uri": "/v1/api/rs232/1/params/baud-rate",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_1_PARAMS",
      "row_name": "baud-rate",
      "action": 0
    },
    "/v1/api/rs232/1/params/baud-rate:POST:0": {
      "opcode": "484",
      "uri": "/v1/api/rs232/1/params/baud-rate",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_1_PARAMS",
      "row_name": "baud-rate",
      "action": 0
    },
    "/v1/api/rs232/1/params/data-bits:GET:0": {
      "opcode": "485",
      "uri": "/v1/api/rs232/1/params/data-bits",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_1_PARAMS",
      "row_name": "data-bits",
      "action": 0
    },
    "/v1/api/rs232/1/params/data-bits:POST:0": {
      "opcode": "486",
      "uri": "/v1/api/rs232/1/params/data-bits",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_1_PARAMS",
      "row_name": "data-bits",
      "action": 0
    },
    "/v1/api/rs232/1/params/parity:GET:0": {
      "opcode": "487",
      "uri": "/v1/api/rs232/1/params/parity",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_1_PARAMS",
      "row_name": "parity",
      "action": 0
    },
    "/v1/api/rs232/1/params/parity:POST:0": {
      "opcode": "488",
      "uri": "/v1/api/rs232/1/params/parity",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_1_PARAMS",
      "row_name": "parity",
      "action": 0
    },
    "/v1/api/rs232/1/params/stop-bit:GET:0": {
      "opcode": "489",
      "uri": "/v1/api/rs232/1/params/stop-bit",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_1_PARAMS",
      "row_name": "stop-bit",
      "action": 0
    },
    "/v1/api/rs232/1/params/stop-bit:POST:0": {
      "opcode": "490",
      "uri": "/v1/api/rs232/1/params/stop-bit",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_1_PARAMS",
      "row_name": "stop-bit",
      "action": 0
    },
    "/v1/api/rs232/1/params/flow-control:GET:0": {
      "opcode": "491",
      "uri": "/v1/api/rs232/1/params/flow-control",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_1_PARAMS",
      "row_name": "flow-control",
      "action": 0
    },
    "/v1/api/rs232/1/params/flow-control:POST:0": {
      "opcode": "492",
      "uri": "/v1/api/rs232/1/params/flow-control",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_1_PARAMS",
      "row_name": "flow-control",
      "action": 0
    },
    "/v1/api/rs232/1/send:POST:0": {
      "opcode": "500",
      "uri": "/v1/api/rs232/1/send",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_1",
      "row_name": "send",
      "action": 0
    },
    "/v1/api/rs232/1/data-in-notification:GET:0": {
      "opcode": "505",
      "uri": "/v1/api/rs232/1/data-in-notification",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_1",
      "row_name": "data-in-notification",
      "action": 0
    },
    "/v1/api/rs232/1/data-in-notification:POST:0": {
      "opcode": "506",
      "uri": "/v1/api/rs232/1/data-in-notification",
      "method": "POST",
      "req_type": 0,
      "tableName": "RS232_1",
      "row_name": "data-in-notification",
      "action": 0
    },
    "/v1/api/rs232/1/read-existing:GET:0": {
      "opcode": "507",
      "uri": "/v1/api/rs232/1/read-existing",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_1",
      "row_name": "read-existing",
      "action": 0
    },
    "/v1/api/rs232/1/read-line:GET:0": {
      "opcode": "508",
      "uri": "/v1/api/rs232/1/read-line",
      "method": "GET",
      "req_type": 0,
      "tableName": "RS232_1",
      "row_name": "read-line",
      "action": 0
    },
    "/v1/api/fpga-registers/0:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/0",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "0",
      "action": 0
    },
    "/v1/api/fpga-registers/0:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/0",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "0",
      "action": 0
    },
    "/v1/api/fpga-registers/1:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/1",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "1",
      "action": 0
    },
    "/v1/api/fpga-registers/1:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/1",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "1",
      "action": 0
    },
    "/v1/api/fpga-registers/2:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/2",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "2",
      "action": 0
    },
    "/v1/api/fpga-registers/2:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/2",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "2",
      "action": 0
    },
    "/v1/api/fpga-registers/3:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/3",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "3",
      "action": 0
    },
    "/v1/api/fpga-registers/3:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/3",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "3",
      "action": 0
    },
    "/v1/api/fpga-registers/4:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/4",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "4",
      "action": 0
    },
    "/v1/api/fpga-registers/4:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/4",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "4",
      "action": 0
    },
    "/v1/api/fpga-registers/5:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/5",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "5",
      "action": 0
    },
    "/v1/api/fpga-registers/5:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/5",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "5",
      "action": 0
    },
    "/v1/api/fpga-registers/6:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/6",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "6",
      "action": 0
    },
    "/v1/api/fpga-registers/6:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/6",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "6",
      "action": 0
    },
    "/v1/api/fpga-registers/7:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/7",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "7",
      "action": 0
    },
    "/v1/api/fpga-registers/7:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/7",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "7",
      "action": 0
    },
    "/v1/api/fpga-registers/8:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/8",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "8",
      "action": 0
    },
    "/v1/api/fpga-registers/8:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/8",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "8",
      "action": 0
    },
    "/v1/api/fpga-registers/9:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/9",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "9",
      "action": 0
    },
    "/v1/api/fpga-registers/9:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/9",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "9",
      "action": 0
    },
    "/v1/api/fpga-registers/10:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/10",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "10",
      "action": 0
    },
    "/v1/api/fpga-registers/10:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/10",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "10",
      "action": 0
    },
    "/v1/api/fpga-registers/11:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/11",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "11",
      "action": 0
    },
    "/v1/api/fpga-registers/11:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/11",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "11",
      "action": 0
    },
    "/v1/api/fpga-registers/12:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/12",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "12",
      "action": 0
    },
    "/v1/api/fpga-registers/12:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/12",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "12",
      "action": 0
    },
    "/v1/api/fpga-registers/13:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/13",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "13",
      "action": 0
    },
    "/v1/api/fpga-registers/13:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/13",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "13",
      "action": 0
    },
    "/v1/api/fpga-registers/14:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/14",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "14",
      "action": 0
    },
    "/v1/api/fpga-registers/14:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/14",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "14",
      "action": 0
    },
    "/v1/api/fpga-registers/15:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/15",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "15",
      "action": 0
    },
    "/v1/api/fpga-registers/15:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/15",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "15",
      "action": 0
    },
    "/v1/api/fpga-registers/16:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/16",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "16",
      "action": 0
    },
    "/v1/api/fpga-registers/16:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/16",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "16",
      "action": 0
    },
    "/v1/api/fpga-registers/17:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/17",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "17",
      "action": 0
    },
    "/v1/api/fpga-registers/17:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/17",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "17",
      "action": 0
    },
    "/v1/api/fpga-registers/18:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/18",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "18",
      "action": 0
    },
    "/v1/api/fpga-registers/18:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/18",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "18",
      "action": 0
    },
    "/v1/api/fpga-registers/19:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/19",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "19",
      "action": 0
    },
    "/v1/api/fpga-registers/19:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/19",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "19",
      "action": 0
    },
    "/v1/api/fpga-registers/20:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/20",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "20",
      "action": 0
    },
    "/v1/api/fpga-registers/20:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/20",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "20",
      "action": 0
    },
    "/v1/api/fpga-registers/21:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/21",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "21",
      "action": 0
    },
    "/v1/api/fpga-registers/21:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/21",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "21",
      "action": 0
    },
    "/v1/api/fpga-registers/22:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/22",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "22",
      "action": 0
    },
    "/v1/api/fpga-registers/22:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/22",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "22",
      "action": 0
    },
    "/v1/api/fpga-registers/23:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/23",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "23",
      "action": 0
    },
    "/v1/api/fpga-registers/23:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/23",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "23",
      "action": 0
    },
    "/v1/api/fpga-registers/24:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/24",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "24",
      "action": 0
    },
    "/v1/api/fpga-registers/24:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/24",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "24",
      "action": 0
    },
    "/v1/api/fpga-registers/25:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/25",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "25",
      "action": 0
    },
    "/v1/api/fpga-registers/25:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/25",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "25",
      "action": 0
    },
    "/v1/api/fpga-registers/26:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/26",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "26",
      "action": 0
    },
    "/v1/api/fpga-registers/26:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/26",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "26",
      "action": 0
    },
    "/v1/api/fpga-registers/27:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/27",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "27",
      "action": 0
    },
    "/v1/api/fpga-registers/27:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/27",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "27",
      "action": 0
    },
    "/v1/api/fpga-registers/28:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/28",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "28",
      "action": 0
    },
    "/v1/api/fpga-registers/28:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/28",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "28",
      "action": 0
    },
    "/v1/api/fpga-registers/29:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/29",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "29",
      "action": 0
    },
    "/v1/api/fpga-registers/29:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/29",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "29",
      "action": 0
    },
    "/v1/api/fpga-registers/30:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/30",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "30",
      "action": 0
    },
    "/v1/api/fpga-registers/30:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/30",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "30",
      "action": 0
    },
    "/v1/api/fpga-registers/31:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/31",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "31",
      "action": 0
    },
    "/v1/api/fpga-registers/31:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/31",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "31",
      "action": 0
    },
    "/v1/api/fpga-registers/32:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/32",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "32",
      "action": 0
    },
    "/v1/api/fpga-registers/32:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/32",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "32",
      "action": 0
    },
    "/v1/api/fpga-registers/33:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/33",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "33",
      "action": 0
    },
    "/v1/api/fpga-registers/33:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/33",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "33",
      "action": 0
    },
    "/v1/api/fpga-registers/34:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/34",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "34",
      "action": 0
    },
    "/v1/api/fpga-registers/34:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/34",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "34",
      "action": 0
    },
    "/v1/api/fpga-registers/35:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/35",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "35",
      "action": 0
    },
    "/v1/api/fpga-registers/35:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/35",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "35",
      "action": 0
    },
    "/v1/api/fpga-registers/36:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/36",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "36",
      "action": 0
    },
    "/v1/api/fpga-registers/36:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/36",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "36",
      "action": 0
    },
    "/v1/api/fpga-registers/37:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/37",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "37",
      "action": 0
    },
    "/v1/api/fpga-registers/37:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/37",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "37",
      "action": 0
    },
    "/v1/api/fpga-registers/38:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/38",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "38",
      "action": 0
    },
    "/v1/api/fpga-registers/38:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/38",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "38",
      "action": 0
    },
    "/v1/api/fpga-registers/39:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/39",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "39",
      "action": 0
    },
    "/v1/api/fpga-registers/39:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/39",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "39",
      "action": 0
    },
    "/v1/api/fpga-registers/40:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/40",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "40",
      "action": 0
    },
    "/v1/api/fpga-registers/40:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/40",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "40",
      "action": 0
    },
    "/v1/api/fpga-registers/41:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/41",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "41",
      "action": 0
    },
    "/v1/api/fpga-registers/41:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/41",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "41",
      "action": 0
    },
    "/v1/api/fpga-registers/42:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/42",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "42",
      "action": 0
    },
    "/v1/api/fpga-registers/42:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/42",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "42",
      "action": 0
    },
    "/v1/api/fpga-registers/43:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/43",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "43",
      "action": 0
    },
    "/v1/api/fpga-registers/43:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/43",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "43",
      "action": 0
    },
    "/v1/api/fpga-registers/44:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/44",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "44",
      "action": 0
    },
    "/v1/api/fpga-registers/44:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/44",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "44",
      "action": 0
    },
    "/v1/api/fpga-registers/45:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/45",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "45",
      "action": 0
    },
    "/v1/api/fpga-registers/45:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/45",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "45",
      "action": 0
    },
    "/v1/api/fpga-registers/46:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/46",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "46",
      "action": 0
    },
    "/v1/api/fpga-registers/46:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/46",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "46",
      "action": 0
    },
    "/v1/api/fpga-registers/47:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/47",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "47",
      "action": 0
    },
    "/v1/api/fpga-registers/47:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/47",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "47",
      "action": 0
    },
    "/v1/api/fpga-registers/48:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/48",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "48",
      "action": 0
    },
    "/v1/api/fpga-registers/48:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/48",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "48",
      "action": 0
    },
    "/v1/api/fpga-registers/49:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/49",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "49",
      "action": 0
    },
    "/v1/api/fpga-registers/49:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/49",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "49",
      "action": 0
    },
    "/v1/api/fpga-registers/50:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/50",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "50",
      "action": 0
    },
    "/v1/api/fpga-registers/50:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/50",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "50",
      "action": 0
    },
    "/v1/api/fpga-registers/51:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/51",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "51",
      "action": 0
    },
    "/v1/api/fpga-registers/51:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/51",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "51",
      "action": 0
    },
    "/v1/api/fpga-registers/52:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/52",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "52",
      "action": 0
    },
    "/v1/api/fpga-registers/52:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/52",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "52",
      "action": 0
    },
    "/v1/api/fpga-registers/53:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/53",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "53",
      "action": 0
    },
    "/v1/api/fpga-registers/53:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/53",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "53",
      "action": 0
    },
    "/v1/api/fpga-registers/54:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/54",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "54",
      "action": 0
    },
    "/v1/api/fpga-registers/54:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/54",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "54",
      "action": 0
    },
    "/v1/api/fpga-registers/55:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/55",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "55",
      "action": 0
    },
    "/v1/api/fpga-registers/55:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/55",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "55",
      "action": 0
    },
    "/v1/api/fpga-registers/56:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/56",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "56",
      "action": 0
    },
    "/v1/api/fpga-registers/56:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/56",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "56",
      "action": 0
    },
    "/v1/api/fpga-registers/57:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/57",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "57",
      "action": 0
    },
    "/v1/api/fpga-registers/57:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/57",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "57",
      "action": 0
    },
    "/v1/api/fpga-registers/58:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/58",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "58",
      "action": 0
    },
    "/v1/api/fpga-registers/58:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/58",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "58",
      "action": 0
    },
    "/v1/api/fpga-registers/59:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/59",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "59",
      "action": 0
    },
    "/v1/api/fpga-registers/59:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/59",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "59",
      "action": 0
    },
    "/v1/api/fpga-registers/60:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/60",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "60",
      "action": 0
    },
    "/v1/api/fpga-registers/60:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/60",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "60",
      "action": 0
    },
    "/v1/api/fpga-registers/61:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/61",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "61",
      "action": 0
    },
    "/v1/api/fpga-registers/61:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/61",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "61",
      "action": 0
    },
    "/v1/api/fpga-registers/62:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/62",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "62",
      "action": 0
    },
    "/v1/api/fpga-registers/62:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/62",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "62",
      "action": 0
    },
    "/v1/api/fpga-registers/63:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/63",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "63",
      "action": 0
    },
    "/v1/api/fpga-registers/63:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/63",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "63",
      "action": 0
    },
    "/v1/api/fpga-registers/64:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/64",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "64",
      "action": 0
    },
    "/v1/api/fpga-registers/64:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/64",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "64",
      "action": 0
    },
    "/v1/api/fpga-registers/65:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/65",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "65",
      "action": 0
    },
    "/v1/api/fpga-registers/65:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/65",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "65",
      "action": 0
    },
    "/v1/api/fpga-registers/66:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/66",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "66",
      "action": 0
    },
    "/v1/api/fpga-registers/66:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/66",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "66",
      "action": 0
    },
    "/v1/api/fpga-registers/67:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/67",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "67",
      "action": 0
    },
    "/v1/api/fpga-registers/67:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/67",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "67",
      "action": 0
    },
    "/v1/api/fpga-registers/68:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/68",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "68",
      "action": 0
    },
    "/v1/api/fpga-registers/68:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/68",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "68",
      "action": 0
    },
    "/v1/api/fpga-registers/69:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/69",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "69",
      "action": 0
    },
    "/v1/api/fpga-registers/69:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/69",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "69",
      "action": 0
    },
    "/v1/api/fpga-registers/70:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/70",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "70",
      "action": 0
    },
    "/v1/api/fpga-registers/70:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/70",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "70",
      "action": 0
    },
    "/v1/api/fpga-registers/71:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/71",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "71",
      "action": 0
    },
    "/v1/api/fpga-registers/71:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/71",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "71",
      "action": 0
    },
    "/v1/api/fpga-registers/72:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/72",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "72",
      "action": 0
    },
    "/v1/api/fpga-registers/72:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/72",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "72",
      "action": 0
    },
    "/v1/api/fpga-registers/73:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/73",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "73",
      "action": 0
    },
    "/v1/api/fpga-registers/73:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/73",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "73",
      "action": 0
    },
    "/v1/api/fpga-registers/74:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/74",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "74",
      "action": 0
    },
    "/v1/api/fpga-registers/74:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/74",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "74",
      "action": 0
    },
    "/v1/api/fpga-registers/75:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/75",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "75",
      "action": 0
    },
    "/v1/api/fpga-registers/75:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/75",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "75",
      "action": 0
    },
    "/v1/api/fpga-registers/76:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/76",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "76",
      "action": 0
    },
    "/v1/api/fpga-registers/76:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/76",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "76",
      "action": 0
    },
    "/v1/api/fpga-registers/77:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/77",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "77",
      "action": 0
    },
    "/v1/api/fpga-registers/77:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/77",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "77",
      "action": 0
    },
    "/v1/api/fpga-registers/78:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/78",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "78",
      "action": 0
    },
    "/v1/api/fpga-registers/78:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/78",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "78",
      "action": 0
    },
    "/v1/api/fpga-registers/79:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/79",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "79",
      "action": 0
    },
    "/v1/api/fpga-registers/79:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/79",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "79",
      "action": 0
    },
    "/v1/api/fpga-registers/80:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/80",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "80",
      "action": 0
    },
    "/v1/api/fpga-registers/80:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/80",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "80",
      "action": 0
    },
    "/v1/api/fpga-registers/81:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/81",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "81",
      "action": 0
    },
    "/v1/api/fpga-registers/81:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/81",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "81",
      "action": 0
    },
    "/v1/api/fpga-registers/82:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/82",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "82",
      "action": 0
    },
    "/v1/api/fpga-registers/82:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/82",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "82",
      "action": 0
    },
    "/v1/api/fpga-registers/83:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/83",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "83",
      "action": 0
    },
    "/v1/api/fpga-registers/83:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/83",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "83",
      "action": 0
    },
    "/v1/api/fpga-registers/84:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/84",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "84",
      "action": 0
    },
    "/v1/api/fpga-registers/84:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/84",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "84",
      "action": 0
    },
    "/v1/api/fpga-registers/85:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/85",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "85",
      "action": 0
    },
    "/v1/api/fpga-registers/85:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/85",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "85",
      "action": 0
    },
    "/v1/api/fpga-registers/86:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/86",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "86",
      "action": 0
    },
    "/v1/api/fpga-registers/86:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/86",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "86",
      "action": 0
    },
    "/v1/api/fpga-registers/87:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/87",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "87",
      "action": 0
    },
    "/v1/api/fpga-registers/87:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/87",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "87",
      "action": 0
    },
    "/v1/api/fpga-registers/88:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/88",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "88",
      "action": 0
    },
    "/v1/api/fpga-registers/88:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/88",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "88",
      "action": 0
    },
    "/v1/api/fpga-registers/89:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/89",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "89",
      "action": 0
    },
    "/v1/api/fpga-registers/89:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/89",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "89",
      "action": 0
    },
    "/v1/api/fpga-registers/90:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/90",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "90",
      "action": 0
    },
    "/v1/api/fpga-registers/90:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/90",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "90",
      "action": 0
    },
    "/v1/api/fpga-registers/91:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/91",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "91",
      "action": 0
    },
    "/v1/api/fpga-registers/91:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/91",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "91",
      "action": 0
    },
    "/v1/api/fpga-registers/92:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/92",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "92",
      "action": 0
    },
    "/v1/api/fpga-registers/92:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/92",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "92",
      "action": 0
    },
    "/v1/api/fpga-registers/93:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/93",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "93",
      "action": 0
    },
    "/v1/api/fpga-registers/93:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/93",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "93",
      "action": 0
    },
    "/v1/api/fpga-registers/94:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/94",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "94",
      "action": 0
    },
    "/v1/api/fpga-registers/94:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/94",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "94",
      "action": 0
    },
    "/v1/api/fpga-registers/95:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/95",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "95",
      "action": 0
    },
    "/v1/api/fpga-registers/95:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/95",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "95",
      "action": 0
    },
    "/v1/api/fpga-registers/96:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/96",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "96",
      "action": 0
    },
    "/v1/api/fpga-registers/96:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/96",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "96",
      "action": 0
    },
    "/v1/api/fpga-registers/97:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/97",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "97",
      "action": 0
    },
    "/v1/api/fpga-registers/97:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/97",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "97",
      "action": 0
    },
    "/v1/api/fpga-registers/98:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/98",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "98",
      "action": 0
    },
    "/v1/api/fpga-registers/98:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/98",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "98",
      "action": 0
    },
    "/v1/api/fpga-registers/99:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/99",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "99",
      "action": 0
    },
    "/v1/api/fpga-registers/99:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/99",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "99",
      "action": 0
    },
    "/v1/api/fpga-registers/100:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/fpga-registers/100",
      "method": "GET",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "100",
      "action": 0
    },
    "/v1/api/fpga-registers/100:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/fpga-registers/100",
      "method": "POST",
      "req_type": 0,
      "tableName": "FPGA-REGISTERS",
      "row_name": "100",
      "action": 0
    },
    "/v1/api/i2c-registers/0:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/i2c-registers/0",
      "method": "GET",
      "req_type": 0,
      "tableName": "I2C-REGISTERS",
      "row_name": "0",
      "action": 0
    },
    "/v1/api/i2c-registers/0:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/i2c-registers/0",
      "method": "POST",
      "req_type": 0,
      "tableName": "I2C-REGISTERS",
      "row_name": "0",
      "action": 0
    },
    "/v1/api/i2c-registers/1:GET:0": {
      "opcode": "701",
      "uri": "/v1/api/i2c-registers/1",
      "method": "GET",
      "req_type": 0,
      "tableName": "I2C-REGISTERS",
      "row_name": "1",
      "action": 0
    },
    "/v1/api/i2c-registers/1:POST:0": {
      "opcode": "702",
      "uri": "/v1/api/i2c-registers/1",
      "method": "POST",
      "req_type": 0,
      "tableName": "I2C-REGISTERS",
      "row_name": "1",
      "action": 0
    }
  }
};
module.exports = decoderURLObject