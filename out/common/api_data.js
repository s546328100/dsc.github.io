define({ "api": [
  {
    "type": "get",
    "url": "/baidu/speech",
    "title": "语音合成",
    "name": "speech",
    "group": "baidu",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>文字 {query}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "spd",
            "description": "<p>语速，取值0-9，默认为5中语速 {query}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pit",
            "description": "<p>音调，取值0-9，默认为5中语调 {query}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "vol",
            "description": "<p>音量，取值0-15，默认为5中音量 {query}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "per",
            "description": "<p>发音人选择, 0为女声，1为男声，3为情感合成-度逍遥，4为情感合成-度丫丫，默认为普通女 {query}</p>"
          }
        ]
      }
    },
    "filename": "app/controller/common/baidu.js",
    "groupTitle": "baidu",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/common/v1/baidu/speech"
      }
    ]
  },
  {
    "type": "post",
    "url": "/captcha/email",
    "title": "发送邮箱，找回密码",
    "name": "email",
    "group": "captcha",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号 {form}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": {\n     \"isImageVerify\": true, // 是否开启图形验证码\n  },\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/common/captcha.js",
    "groupTitle": "captcha",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/common/v1/captcha/email"
      }
    ]
  },
  {
    "type": "post",
    "url": "/captcha/email/verify",
    "title": "校验邮箱验证码",
    "name": "emailVerify",
    "group": "captcha",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证码 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imageCode",
            "description": "<p>图像验证码 {form}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": true,\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/common/captcha.js",
    "groupTitle": "captcha",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/common/v1/captcha/email/verify"
      }
    ]
  },
  {
    "type": "get",
    "url": "/captcha/graph",
    "title": "获取图形验证码图片",
    "name": "graph",
    "group": "captcha",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n<svg>验证码图片</svg>",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/common/captcha.js",
    "groupTitle": "captcha",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/common/v1/captcha/graph"
      }
    ]
  },
  {
    "type": "post",
    "url": "/captcha/phone",
    "title": "发送手机验证码",
    "name": "phone",
    "group": "captcha",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号 {form}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": {\n     \"isImageVerify\": true, // 是否开启图形验证码\n  },\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/common/captcha.js",
    "groupTitle": "captcha",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/common/v1/captcha/phone"
      }
    ]
  },
  {
    "type": "post",
    "url": "/captcha/verify",
    "title": "校验验证码",
    "name": "verify",
    "group": "captcha",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型 0 图形验证 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证码 {form}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": true,\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/common/captcha.js",
    "groupTitle": "captcha",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/common/v1/captcha/verify"
      }
    ]
  },
  {
    "type": "post",
    "url": "/google/speech",
    "title": "语音合成",
    "name": "speech",
    "group": "google",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>令牌 {header}</p>"
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
            "field": "text",
            "description": "<p>文字 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "description": "<p>语言，默认英文en。中文zh {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "speed",
            "description": "<p>语速，默认1 {form}</p>"
          }
        ]
      }
    },
    "filename": "app/controller/common/google.js",
    "groupTitle": "google",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/common/v1/google/speech"
      }
    ]
  }
] });
