define({ "api": [
  {
    "type": "post",
    "url": "/admin/coupon",
    "title": "创建优惠劵",
    "name": "adminPostCoupon",
    "group": "coupon",
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
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "money",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态 0下架 1上架</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "num",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "moneyOff",
            "defaultValue": "0",
            "description": "<p>满xx元使用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startTime",
            "description": "<p>能开始领取/使用时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endTime",
            "description": "<p>失效时间</p>"
          }
        ]
      }
    },
    "filename": "src/controller/admin/coupon.ts",
    "groupTitle": "coupon",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/admin/coupon"
      }
    ]
  },
  {
    "type": "post",
    "url": "/admin/order/deliver",
    "title": "订单发货",
    "name": "orderDeliver",
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
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logistics",
            "description": "<p>物流信息 <code>name no</code></p>"
          }
        ]
      }
    },
    "filename": "src/controller/admin/order.ts",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/admin/order/deliver"
      }
    ]
  }
] });
