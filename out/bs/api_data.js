define({ "api": [
  {
    "type": "get",
    "url": "/tables",
    "title": "获取餐厅桌号列表",
    "name": "list",
    "group": "table",
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
            "field": "bId",
            "description": "<p>餐厅ID {query}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": \"5b9a2dd5199d300f70377bd1\", // userId\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/bs/table.js",
    "groupTitle": "table"
  },
  {
    "type": "patch",
    "url": "/table/status",
    "title": "修改桌号状态",
    "name": "status",
    "group": "table",
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
            "field": "bId",
            "description": "<p>餐厅ID {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态 {form}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": \"5b9a2dd5199d300f70377bd1\", // userId\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/bs/table.js",
    "groupTitle": "table"
  },
  {
    "type": "get",
    "url": "/test",
    "title": "用户登录",
    "name": "get",
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
            "description": "<p>令牌 {header}</p>"
          }
        ]
      }
    },
    "filename": "app/controller/bs/test.js",
    "groupTitle": "test"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "name": "login",
    "group": "user",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>图形验证码 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "remember",
            "description": "<p>1为7天缓存 {form}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": {\n    \"token\": \"$2a$10$YxNMyB46WqvJ215d1JdWy.b6Nv3dVm1E14DEmk9pf4jzkLvDC5uJy\",  // 令牌\n    \"status\": 0 // 0为未激活 1为激活\n  }\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/bs/user.js",
    "groupTitle": "user"
  },
  {
    "type": "patch",
    "url": "/user/password",
    "title": "修改密码",
    "name": "password",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型 1 手机 2 邮箱 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>当type为 1 短信验证码 2 邮件key {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>type为2时，必传 {form}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": \"5b9a2dd5199d300f70377bd1\", // userId\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/bs/user.js",
    "groupTitle": "user"
  },
  {
    "type": "patch",
    "url": "/user",
    "title": "修改用户信息",
    "name": "patch",
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
            "optional": true,
            "field": "password",
            "description": "<p>密码 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "oldPassword",
            "description": "<p>原密码（修改密码时原密码必传） {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "status",
            "description": "<p>1 激活（第一次修改密码需传1） {form}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": \"5b9a2dd5199d300f70377bd1\", // userId\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/bs/user.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/phone/login",
    "title": "用户手机登录",
    "name": "phoneLogin",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>账号 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>图形验证码 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "remember",
            "description": "<p>1为7天缓存 {form}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": {\n    \"token\": \"$2a$10$YxNMyB46WqvJ215d1JdWy.b6Nv3dVm1E14DEmk9pf4jzkLvDC5uJy\",  // 令牌\n    \"status\": 0 // 0为未激活 1为激活\n  }\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/bs/user.js",
    "groupTitle": "user"
  }
] });
