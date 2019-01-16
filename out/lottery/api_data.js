define({ "api": [
  {
    "type": "post",
    "url": "/lottery/user/login",
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
    "filename": "src/controller/lottery/user.ts",
    "groupTitle": "user",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/weapp/lottery/user/login"
      }
    ]
  }
] });
