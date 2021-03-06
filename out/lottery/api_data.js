define({ "api": [
  {
    "type": "get",
    "url": "/v1/activities",
    "title": "活动列表",
    "name": "activities",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "all",
            "description": "<p>0公开的 1未通过 2 所有-进行中 3 所有-已结束</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pageSize",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activities"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/activity/scratchcard",
    "title": "刮刮卡",
    "name": "activityScratchcard",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity/scratchcard"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/activity",
    "title": "添加活动",
    "name": "create",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-4",
            "optional": false,
            "field": "type",
            "description": "<p>1.即时抽 2.定时抽 3.人数抽 4.手动抽</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "desc",
            "description": "<p>简介</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>图片 <code>{sort: Number, url: String, width: Number, height: Number}</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "isPrivate",
            "defaultValue": "0",
            "description": "<p>0不公开 1首页 2自助</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "prizes",
            "description": "<p>奖品 <code>{money: Number, type: Number, name: String, number: Number, level: String, desc: String, images: [{sort: Number,url: String,width: Number,height: Number}], default: Array}</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pass",
            "description": "<p>我要上首页 需传0</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "account",
            "description": "<p>公众号信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "isHelp",
            "defaultValue": "0",
            "description": "<p>是否助力</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "isExpiry",
            "defaultValue": "0",
            "description": "<p>是否兑奖码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "num",
            "description": "<p>3.人数抽 人数</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "location",
            "description": "<p>定位</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "detailImages",
            "description": "<p>多图</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payResult",
            "description": "<p>支付结果</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/activity",
    "title": "活动信息",
    "name": "info",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>1进行中 2已结束</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "joinUserNum",
            "description": "<p>参加人数</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isJoin",
            "description": "<p>是否已参加</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/activity/join",
    "title": "参加定时开奖",
    "name": "join",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity/join"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/activity/join",
    "title": "活动参加人",
    "name": "joinList",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pageSize",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity/join"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/activity/lottery",
    "title": "活动抽奖",
    "name": "lottery",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity/lottery"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/activity/pay",
    "title": "活动支付",
    "name": "pay",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity/pay"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/activity/scratchcard",
    "title": "刮卡",
    "name": "postActivityScratchcard",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prizeId",
            "description": "<p>奖品id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity/scratchcard"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/activity",
    "title": "修改活动",
    "name": "put",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pass",
            "description": "<p>0不通过 1通过</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/activity/user",
    "title": "修改活动参加（助力）",
    "name": "putActivityUser",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>userId</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity/user"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/activity/stop",
    "title": "结束活动",
    "name": "stop",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity/stop"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/activity/win/user",
    "title": "活动中奖用户",
    "name": "winUser",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pageSize",
            "description": "<p>页数</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity/win/user"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/activity/win/users",
    "title": "更多活动中奖用户",
    "name": "winUsers",
    "group": "activity",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prizeId",
            "description": "<p>奖品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pageSize",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity/win/users"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/admin/activity",
    "title": "管理员删除活动 (真删除，慎用)",
    "name": "activityDelete",
    "group": "admin",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/admin.ts",
    "groupTitle": "admin",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/admin/activity"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/admin/activity",
    "title": "管理员修改活动",
    "name": "activityPut",
    "group": "admin",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "hasDefault",
            "description": "<p>0不 1内</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "prizeId",
            "description": "<p>奖品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "type",
            "defaultValue": "0",
            "description": "<p>0添加 1删除</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/admin.ts",
    "groupTitle": "admin",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/admin/activity"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/admin/activity/user",
    "title": "活动设置假用户",
    "name": "activityUserPost",
    "group": "admin",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prizeId",
            "description": "<p>奖品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatarUrl",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickName",
            "description": "<p>名称</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/admin.ts",
    "groupTitle": "admin",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/admin/activity/user"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/common/wx/qrcode",
    "title": "wx二维码",
    "name": "getWXACodeUnlimit",
    "group": "common",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param",
            "description": "<p>参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "width",
            "defaultValue": "280",
            "description": "<p>大小</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "path",
            "defaultValue": "pages/index/index",
            "description": "<p>页面</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isHyaline",
            "defaultValue": "false",
            "description": "<p>是否透明</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/common.ts",
    "groupTitle": "common",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/common/wx/qrcode"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/common/qrcode",
    "title": "二维码",
    "name": "qrcode",
    "group": "common",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>文本</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "size",
            "defaultValue": "5",
            "description": "<p>大小</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/common.ts",
    "groupTitle": "common",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/common/qrcode"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/file/upload",
    "title": "文件上传",
    "name": "upload",
    "group": "file",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>文件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>文件名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "prefix",
            "description": "<p>文件前缀</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "imageInfo",
            "description": "<p>1，返回图片宽高</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "resize",
            "description": "<p>1，开启图片缩放</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "width",
            "description": "<p>如高度不传，根据宽度按比例缩放</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "height",
            "description": "<p>如宽度不传，根据高度按比例缩放</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/file.ts",
    "groupTitle": "file",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/file/upload"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/form/count",
    "title": "可发formid数",
    "name": "count",
    "group": "form",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/form.ts",
    "groupTitle": "form",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/form/count"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/form",
    "title": "添加FromId",
    "name": "create",
    "group": "form",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "formIds",
            "description": "<p>formIds</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/form.ts",
    "groupTitle": "form",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/form"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/form/activities",
    "title": "获取发送from数据",
    "name": "formActivities",
    "group": "form",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/form.ts",
    "groupTitle": "form",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/form/activities"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/form/send",
    "title": "新活动推送",
    "name": "send",
    "group": "form",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>活动id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tips",
            "description": "<p>温馨提示</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/form.ts",
    "groupTitle": "form",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/form/send"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/prize/expiry",
    "title": "奖品兑奖",
    "name": "expiry",
    "group": "prize",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>中奖id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/prize.ts",
    "groupTitle": "prize",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/prize/expiry"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/prize",
    "title": "中奖信息",
    "name": "info",
    "group": "prize",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>中奖id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/prize.ts",
    "groupTitle": "prize",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/prize"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/prizes",
    "title": "中奖列表",
    "name": "list",
    "group": "prize",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "activity",
            "description": "<p>活动id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pageSize",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/prize.ts",
    "groupTitle": "prize",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/prizes"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/prize",
    "title": "修改奖品",
    "name": "put",
    "group": "prize",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>奖品id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "delivery",
            "description": "<p>配送信息 <code>name phone location</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "logistics",
            "description": "<p>物流信息 <code>name no</code></p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/prize.ts",
    "groupTitle": "prize",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/prize"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/prize/withdraw",
    "title": "奖品金钱提现",
    "name": "withdraw",
    "group": "prize",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>奖品id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/prize.ts",
    "groupTitle": "prize",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/prize/withdraw"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/test",
    "title": "测试",
    "name": "create",
    "group": "test",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "num",
            "description": "<p>num</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "activity",
            "description": "<p>activity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>user</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/test.ts",
    "groupTitle": "test",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/test"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/user/activity/join",
    "title": "我参加的活动",
    "name": "activityJoin",
    "group": "user",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pageSize",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/user/activity/join"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/user/activity/publish",
    "title": "我发布的活动",
    "name": "activityPublish",
    "group": "user",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pageSize",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/user/activity/publish"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/user/address",
    "title": "新增地址",
    "name": "addUserAddress",
    "group": "user",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>地址 <code>name phone province city region location default</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_phone",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_province",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_city",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_region",
            "description": "<p>区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_location",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_default",
            "defaultValue": "0",
            "description": "<p>1 默认</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/user/address"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/user/address",
    "title": "删除地址",
    "name": "delUserAddress",
    "group": "user",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressId",
            "description": "<p>地址id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/user/address"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/user",
    "title": "我的信息",
    "name": "info",
    "group": "user",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/controller/v1/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/user"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/user/prize",
    "title": "我的奖品",
    "name": "prize",
    "group": "user",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p><code>1待领取 2已领取 3已过期</code> (暂不用)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pageSize",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/user/prize"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/user",
    "title": "修改用户",
    "name": "putUser",
    "group": "user",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "type",
            "description": "<p>分享 <code>1即时 2定时 99刮刮卡</code></p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/user"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/user/address",
    "title": "修改地址",
    "name": "putUserAddress",
    "group": "user",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "addressId",
            "description": "<p>地址id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>地址 <code>name phone province city region location default</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_phone",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_province",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_city",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_region",
            "description": "<p>区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_location",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address_default",
            "defaultValue": "0",
            "description": "<p>1 默认</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/user/address"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/user/addresses",
    "title": "地址列表",
    "name": "userAddresses",
    "group": "user",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/controller/v1/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/user/addresses"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/user/integral",
    "title": "我的积分列表",
    "name": "userIntegral",
    "group": "user",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pageSize",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/user/integral"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/user/login",
    "title": "用户授权登陆",
    "name": "userLogin",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "encryptedData",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iv",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/controller/v1/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/user/login"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/user/use/integral",
    "title": "我使用的积分列表",
    "name": "userUseIntegral",
    "group": "user",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pageSize",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/user/use/integral"
      }
    ]
  }
] });
