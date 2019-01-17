define({ "api": [
  {
    "type": "post",
    "url": "/v1/activity",
    "title": "用户授权登陆",
    "name": "create",
    "group": "activity",
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
    "filename": "src/controller/v1/activity.ts",
    "groupTitle": "activity",
    "sampleRequest": [
      {
        "url": "http://192.168.31.219:5761/lottery/v1/activity"
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
        "url": "http://192.168.31.219:5761/lottery/v1/user/login"
      }
    ]
  }
] });
