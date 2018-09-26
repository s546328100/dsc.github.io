define({ "api": [
  {
    "type": "get",
    "url": "/order",
    "title": "获取桌号订单信息",
    "name": "info",
    "group": "order",
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
            "field": "tableId",
            "description": "<p>桌号ID {query}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": {},\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/bs/order.js",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/order"
      }
    ]
  },
  {
    "type": "post",
    "url": "/table/types",
    "title": "创建餐桌类型",
    "name": "postType",
    "group": "tableType",
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
            "field": "name",
            "description": "<p>餐桌类型 {form}</p>"
          }
        ]
      }
    },
    "filename": "app/controller/bs/table.js",
    "groupTitle": "tableType",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/table/types"
      }
    ]
  },
  {
    "type": "get",
    "url": "/table/types",
    "title": "获取餐桌类型",
    "name": "typeList",
    "group": "tableType",
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
    "filename": "app/controller/bs/table.js",
    "groupTitle": "tableType",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/table/types"
      }
    ]
  },
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
    "groupTitle": "table",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/tables"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/table/:id",
    "title": "修改桌号信息",
    "name": "patch",
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
            "field": "id",
            "description": "<p>桌号ID {path}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>桌号状态 1 就餐 2 空闲 {form}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": \"5b9a2dd5199d300f70377bd1\", // 桌号ID\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/bs/table.js",
    "groupTitle": "table",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/table/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/table/pay/status",
    "title": "获取桌号支付状态",
    "name": "payStatus",
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
            "field": "id",
            "description": "<p>桌号ID {query}</p>"
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
    "filename": "app/controller/bs/table.js",
    "groupTitle": "table",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/table/pay/status"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/table/status",
    "title": "修改桌号当前状态",
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
            "field": "id",
            "description": "<p>桌号ID {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currentStatus",
            "description": "<p>当前状态 {form}</p>"
          }
        ]
      }
    },
    "description": "<p>成功后会进行消息推送 table_current_status</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 0,\n  \"result\": \"5b9a2dd5199d300f70377bd1\", // 桌号Id\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/controller/bs/table.js",
    "groupTitle": "table",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/table/status"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/template/:id",
    "title": "删除模板",
    "name": "delete",
    "group": "template",
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
            "field": "id",
            "description": "<p>模板id {path}</p>"
          }
        ]
      }
    },
    "filename": "app/controller/bs/template.js",
    "groupTitle": "template",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/template/:id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/templates",
    "title": "删除全部模板",
    "name": "deletes",
    "group": "template",
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
    "filename": "app/controller/bs/template.js",
    "groupTitle": "template",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/templates"
      }
    ]
  },
  {
    "type": "get",
    "url": "/templates",
    "title": "模板列表",
    "name": "list",
    "group": "template",
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
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型 1订单反馈 {query}</p>"
          }
        ]
      }
    },
    "filename": "app/controller/bs/template.js",
    "groupTitle": "template",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/templates"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/template/:id",
    "title": "修改模板",
    "name": "patch",
    "group": "template",
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
            "field": "id",
            "description": "<p>模板id {path}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>模板名称 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>模板内容 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "default",
            "description": "<p>1为默认 {form}</p>"
          }
        ]
      }
    },
    "filename": "app/controller/bs/template.js",
    "groupTitle": "template",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/template/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/template",
    "title": "创建模板",
    "name": "post",
    "group": "template",
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
            "field": "name",
            "description": "<p>模板名称 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>模板内容 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型 1订单反馈 {form}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "default",
            "description": "<p>1为默认 {form}</p>"
          }
        ]
      }
    },
    "filename": "app/controller/bs/template.js",
    "groupTitle": "template",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/template"
      }
    ]
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
    "groupTitle": "test",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/test"
      }
    ]
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
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/user/login"
      }
    ]
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
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/user/password"
      }
    ]
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
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/user"
      }
    ]
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
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/bs/v1/user/phone/login"
      }
    ]
  }
] });
