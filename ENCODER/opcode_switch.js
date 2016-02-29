/**
 * @author
 * @fileoverview routing get and post requests with URI levels.
 * @date 1 May 2015
 **/


var opcodeObject = require('./opcode_object');
var databaseModel = require('./database/sql_process');

var opcodeSwitch = {};

var getResultJSON =  {"json": {"result": {"value": "Not Found"}, "response_code": {"value": 0}}};

var postResultJSON =  {"json": {"response_code": {"value": 0}}};

opcodeSwitch.getMethodName = function(index) {
  return opcodeObject[(index.toString())].method;};

opcodeSwitch.getSocketAction = function(index) {
  if(opcodeObject[(index.toString())].socketAction) {
    return opcodeObject[(index.toString())].socketAction;
  } else {
    return false;
  }
};

opcodeSwitch.processRequest = function(index, postData, callback) {
  switch(index) {
    case 1:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 2:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 3:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 4:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 5:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 6:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 7:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 8:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 9:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 10:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 11:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 12:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 13:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 14:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 15:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 16:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 17:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 18:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 19:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 20:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 21:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 22:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 23:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 24:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 25:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 26:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 27:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 28:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 29:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 30:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 31:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 32:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 33:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 34:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 35:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 36:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 37:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 38:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 39:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 40:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 41:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 42:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 43:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 44:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 45:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 46:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 47:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 48:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 49:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 50:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 51:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 52:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 53:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 54:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 55:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 56:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 57:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 58:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 59:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 60:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 61:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 62:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 63:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 64:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 65:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 66:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 67:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 68:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 69:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 70:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 71:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 72:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 73:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 74:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 75:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 76:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 77:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 78:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 79:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 80:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 81:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 82:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 83:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 84:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 85:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 86:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 87:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 88:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 101:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 102:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 103:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 104:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 105:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 106:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 107:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 108:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 109:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 110:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 111:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 112:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 113:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 114:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 115:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 116:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 117:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 118:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 119:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 120:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 121:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 122:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 123:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 124:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 125:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 126:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 127:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 128:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 129:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 130:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 131:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 132:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 133:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 134:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 135:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 136:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 137:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 138:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 141:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 142:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 143:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 144:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 147:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 148:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 149:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 150:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 201:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 202:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 203:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 204:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 205:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 206:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 207:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 208:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 209:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 210:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 211:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 212:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 213:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 214:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 215:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 216:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 217:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 218:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 301:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 302:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 303:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 304:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 305:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 306:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 307:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 308:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 309:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 310:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 311:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 312:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 313:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 314:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 315:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 316:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 317:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 318:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 319:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 320:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 321:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 322:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 323:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 324:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 325:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 326:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 327:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 328:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 329:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 401:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 402:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 403:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 406:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 407:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 408:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 409:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 410:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 411:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 412:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 413:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 414:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 415:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 416:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 417:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 418:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 419:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 420:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 421:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 422:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 423:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 424:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 425:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 501:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 502:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 503:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 601:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 602:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 603:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 604:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 605:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 606:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 607:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 608:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 609:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 610:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 611:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 612:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 613:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 701:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var postJSON = JSON.parse(postData);
      var columnName = postJSON.value;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        getResultJSON.json.result.value = returnedValue.value;
        callback(JSON.stringify(getResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.getParam(columnName, "value", returnJSON);
      break;
    case 702:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    case 801:
    case 802:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(postResultJSON));
      };
      databaseModel.process.tableName = tableName;
      databaseModel.process.setParam(columnName, "value", (JSON.parse(postData)).value , returnJSON);
      break;
    default:console.log('Error: Wrong Opcode');
  }}

module.exports = opcodeSwitch;