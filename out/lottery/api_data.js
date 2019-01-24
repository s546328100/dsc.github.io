define({ "api": [
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
            "size": "1-2",
            "optional": false,
            "field": "type",
            "description": "<p>1.即时抽 2.定时抽</p>"
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
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isPrivate",
            "defaultValue": "true",
            "description": "<p>是否私有</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "prizes",
            "description": "<p>奖品 <code>{money: Number, type: Number, name: String, number: Number, level: String, desc: String, images: [{sort: Number,url: String,width: Number,height: Number}], default: Array}</code></p>"
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
    "type": "get",
    "url": "/v1/common/wx/qrcode",
    "title": "wx二维码",
    "name": "getWXACodeUnlimit",
    "group": "common",
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
    "type": "patch",
    "url": "/v1/prize",
    "title": "修改奖品",
    "name": "patch",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>文件名称</p>"
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
  }
] });
