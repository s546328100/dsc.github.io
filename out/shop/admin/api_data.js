define({ "api": [
  {
    "type": "post",
    "url": "/admin/category",
    "title": "创建类别",
    "name": "adminPostCategory",
    "group": "category",
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
          }
        ]
      }
    },
    "filename": "src/controller/admin/category.ts",
    "groupTitle": "category",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/admin/category"
      }
    ]
  },
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
    "url": "/admin/good",
    "title": "创建商品",
    "name": "adminPostGood",
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
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "specType",
            "description": "<p>规格类型 <code>title values</code> 需要生成values._id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "specInfo",
            "description": "<p>规格信息 <code>keys money integral stock</code> keys值为生成values._id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "groups",
            "description": "<p>分组 类别id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "desc",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "freight",
            "defaultValue": "0",
            "description": "<p>邮费</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "detailImages",
            "description": "<p>图片详情</p>"
          }
        ]
      }
    },
    "filename": "src/controller/admin/good.ts",
    "groupTitle": "good",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/admin/good"
      }
    ]
  },
  {
    "type": "put",
    "url": "/admin/good",
    "title": "修改商品",
    "name": "adminPutGood",
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
            "description": "<p>商品Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "specType",
            "description": "<p>规格类型 <code>title values</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "specInfo",
            "description": "<p>规格信息 <code>keys money integral stock</code> keys值为生成values._id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "desc",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "freight",
            "defaultValue": "0",
            "description": "<p>邮费</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "detailImages",
            "description": "<p>图片详情</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "groups",
            "description": "<p>分组 类别id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/admin/good.ts",
    "groupTitle": "good",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/admin/good"
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
