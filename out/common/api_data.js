define({ "api": [
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
  }
] });