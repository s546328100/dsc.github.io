define({ "api": [
  {
    "type": "get",
    "url": "/v1/cart/num",
    "title": "购物车数",
    "name": "cartNum",
    "group": "cart",
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
    "filename": "src/controller/v1/cart.ts",
    "groupTitle": "cart",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/cart/num"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/carts",
    "title": "购物车列表",
    "name": "carts",
    "group": "cart",
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
    "filename": "src/controller/v1/cart.ts",
    "groupTitle": "cart",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/carts"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/cart",
    "title": "删除购物车",
    "name": "delCart",
    "group": "cart",
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
            "field": "ids",
            "description": "<p>多个用,隔开</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/cart.ts",
    "groupTitle": "cart",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/cart"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/cart",
    "title": "加入购物车",
    "name": "postCart",
    "group": "cart",
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
            "field": "good",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spec",
            "description": "<p>规格id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "num",
            "description": "<p>数量</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/cart.ts",
    "groupTitle": "cart",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/cart"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/cart",
    "title": "修改购物车",
    "name": "putCart",
    "group": "cart",
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
            "description": "<p>购物车id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "spec",
            "description": "<p>规格id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "num",
            "description": "<p>数量 所有的量</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/cart.ts",
    "groupTitle": "cart",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/cart"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/categories",
    "title": "类别列表",
    "name": "categories",
    "group": "category",
    "version": "1.0.0",
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
    "filename": "src/controller/v1/category.ts",
    "groupTitle": "category",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/categories"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/categories/child",
    "title": "子类别列表",
    "name": "childCategories",
    "group": "category",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>类别ID 查子类别</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/category.ts",
    "groupTitle": "category",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/categories/child"
      }
    ]
  },
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
    "type": "get",
    "url": "/v1/coupons",
    "title": "我的优惠劵",
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
            "type": "Number",
            "optional": true,
            "field": "money",
            "description": "<p>金额 判断是否可以使用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "integral",
            "description": "<p>积分 判断是否可以使用</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/coupon.ts",
    "groupTitle": "coupon",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/coupons"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/coupon",
    "title": "领取优惠劵",
    "name": "postCoupon",
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
            "field": "id",
            "description": "<p>id领取</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>优惠代码兑换</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/coupon.ts",
    "groupTitle": "coupon",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/coupon"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/coupons/sys",
    "title": "获取系统优惠劵",
    "name": "sysCoupons",
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
    "filename": "src/controller/v1/coupon.ts",
    "groupTitle": "coupon",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/coupons/sys"
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
    "url": "/v1/goods",
    "title": "商品列表",
    "name": "goods",
    "group": "good",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>类别id</p>"
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
    "filename": "src/controller/v1/good.ts",
    "groupTitle": "good",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/goods"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/order/cancel",
    "title": "取消订单",
    "name": "orderCancel",
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
    "filename": "src/controller/v1/order.ts",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/order/cancel"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/order/refund",
    "title": "订单申请退款",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refund",
            "description": "<p>退款原因</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/order.ts",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/order/refund"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/order/succ",
    "title": "完成订单",
    "name": "orderSucc",
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
    "filename": "src/controller/v1/order.ts",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/order/succ"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/orders",
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
            "description": "<p>状态 全部不传 0待付款 1待发货 2待收货 3已完成 4已取消 5退款中 6已退款</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/order.ts",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/orders"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/order/pay",
    "title": "订单支付",
    "name": "pay",
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
    "filename": "src/controller/v1/order.ts",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/order/pay"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/order",
    "title": "创建订单-立即购买",
    "name": "postOrder",
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
            "field": "good",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "spec",
            "description": "<p>规格id</p>"
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
            "type": "Object",
            "optional": false,
            "field": "delivery",
            "description": "<p>收货地址 <code>name phone location</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "couponId",
            "description": "<p>优惠券id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/order.ts",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/order"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/order/cart",
    "title": "创建订单-购物车",
    "name": "postOrderCart",
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
            "type": "Array",
            "optional": false,
            "field": "cartIds",
            "description": "<p>购物车id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "delivery",
            "description": "<p>收货地址 <code>name phone location</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "couponId",
            "description": "<p>优惠券id</p>"
          }
        ]
      }
    },
    "filename": "src/controller/v1/order.ts",
    "groupTitle": "order",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5762/shop/v1/order/cart"
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
