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
            "type": "Array",
            "optional": false,
            "field": "prizes",
            "description": "<p>奖品 <code>{type: Number, name: String, number: Number, level: String, desc: String, images: [{sort: Number,url: String,width: Number,height: Number}], default: Array}</code></p>"
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
