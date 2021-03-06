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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>二级标题</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "image",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "extend",
            "description": "<p>父id 二级</p>"
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
    "type": "put",
    "url": "/admin/category",
    "title": "修改类别",
    "name": "adminPutCategory",
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
            "field": "id",
            "description": "<p>类别ID</p>"
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
            "type": "Number",
            "optional": true,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>二级标题</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "image",
            "description": "<p>图片</p>"
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
    "type": "get",
    "url": "/admin/categories",
    "title": "类别列表",
    "name": "categories",
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
            "optional": true,
            "field": "id",
            "description": "<p>类别ID 查子类别</p>"
          }
        ]
      }
    },
    "filename": "src/controller/admin/category.ts",
    "groupTitle": "category",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/admin/categories"
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
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>1纯积分 2纯现金 3现金+积分</p>"
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
            "type": "Number",
            "optional": false,
            "field": "num",
            "description": "<p>数量</p>"
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
            "optional": true,
            "field": "isPrivate",
            "defaultValue": "1",
            "description": "<p>// 0公开领取 1优惠码兑换</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "integral",
            "description": "<p>积分</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "integralOff",
            "defaultValue": "0",
            "description": "<p>满xx积分使用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "money",
            "description": "<p>金额</p>"
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
    "type": "put",
    "url": "/admin/coupon",
    "title": "修改优惠劵",
    "name": "adminPutCoupon",
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
            "field": "id",
            "description": "<p>优惠券ID</p>"
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
            "type": "Number",
            "optional": true,
            "field": "num",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "status",
            "description": "<p>状态 0下架 1上架</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "type",
            "description": "<p>1纯积分 2纯现金 3现金+积分</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "isPrivate",
            "description": "<p>0公开领取 1优惠码兑换</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "integral",
            "description": "<p>积分</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "integralOff",
            "description": "<p>满xx积分使用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "money",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "moneyOff",
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
    "type": "get",
    "url": "/admin/coupons",
    "title": "优惠劵列表",
    "name": "coupons",
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>-1下架 0上架</p>"
          }
        ]
      }
    },
    "filename": "src/controller/admin/coupon.ts",
    "groupTitle": "coupon",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/admin/coupons"
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
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "status",
            "description": "<p>1上架 2下架 3售罄</p>"
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
    "type": "get",
    "url": "/admin/goods",
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
            "field": "status",
            "defaultValue": "1",
            "description": "<p>1上架 2下架</p>"
          },
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
    "filename": "src/controller/admin/good.ts",
    "groupTitle": "good",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/admin/goods"
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
  },
  {
    "type": "post",
    "url": "/admin/order/refund",
    "title": "订单退款",
    "name": "orderRefund",
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
          }
        ]
      }
    },
    "filename": "src/controller/admin/order.ts",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/admin/order/refund"
      }
    ]
  },
  {
    "type": "get",
    "url": "/admin/orders",
    "title": "订单列表",
    "name": "orders",
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
            "optional": true,
            "field": "status",
            "description": "<p>状态 全部不传 0待付款 1待发货 2待收货 3已完成 4已取消 5退款中</p>"
          }
        ]
      }
    },
    "filename": "src/controller/admin/order.ts",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/admin/orders"
      }
    ]
  },
  {
    "type": "get",
    "url": "/admin/user/goods",
    "title": "我的货架信息",
    "name": "userGoods",
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
    "filename": "src/controller/admin/user.ts",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/admin/user/goods"
      }
    ]
  }
] });
