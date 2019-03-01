define({ "api": [
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
        "url": "http://192.168.31.219:5762/shop/v1/common/wx/qrcode"
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
        "url": "http://192.168.31.219:5762/shop/v1/common/qrcode"
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
        "url": "http://192.168.31.219:5762/shop/v1/file/upload"
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
        "url": "http://192.168.31.219:5762/shop/v1/form/count"
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
        "url": "http://192.168.31.219:5762/shop/v1/form"
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
        "url": "http://192.168.31.219:5762/shop/v1/form/activities"
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
        "url": "http://192.168.31.219:5762/shop/v1/form/send"
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
        "url": "http://192.168.31.219:5762/shop/v1/test"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/test1",
    "title": "测试",
    "name": "test",
    "group": "test",
    "version": "1.0.0",
    "filename": "src/controller/v1/test.ts",
    "groupTitle": "test",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/test1"
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
        "url": "http://192.168.31.219:5762/shop/v1/user"
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
        "url": "http://192.168.31.219:5762/shop/v1/user/login"
      }
    ]
  }
] });
