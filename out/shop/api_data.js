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
    "url": "/v1/good",
    "title": "商品详情",
    "name": "good",
    "group": "good",
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
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/good.ts",
    "groupTitle": "good",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/good"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/good/spec",
    "title": "商品规格",
    "name": "goodSpec",
    "group": "good",
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
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/good.ts",
    "groupTitle": "good",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/good/spec"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/goods",
    "title": "商品列表",
    "name": "goods",
    "group": "good",
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
    "filename": "src/controller/v1/good.ts",
    "groupTitle": "good",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/goods"
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
