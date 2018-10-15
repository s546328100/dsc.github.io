define({ "api": [
  {
    "type": "patch",
    "url": "/table/status/:id",
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
            "description": "<p>桌号ID {path}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currentStatus",
            "description": "<p>当前状态 0 无状态 1 下单 2 加菜 3 呼叫服务 4 已确认 5 已修改 {form}</p>"
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
    "filename": "app/controller/cs/table.js",
    "groupTitle": "table",
    "sampleRequest": [
      {
        "url": "http://kyun.dusuchao.xin:7001/cs/v1/table/status/:id"
      }
    ]
  }
] });
