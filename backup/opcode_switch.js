/**
 * @author
 * @fileoverview routing get and post requests with URI levels.
 * @date 1 May 2015
 **/


var opcodeObject = require('./opcode_object');
var dbObject = require('./database/sql_process');
var HandleMethod = require('./method_handle');

var opcodeSwitch = {};

opcodeSwitch.getMethodName = function(index) {
  return opcodeObject[(index.toString())].method;}

opcodeSwitch.processRequest = function(index, postData, callback) {
  switch(index) {
    case 1:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 2:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 3:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 4:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 5:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 6:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 7:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 8:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 9:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 10:
      var opcodeArray =  opcodeObject[index].getArray;
      var resultIndex = 0;
      var resultJSON = {json: {}};
      var accumulateJSON = function(resultSet, error) {
     	    console.log(resultSet);  										  
	         resultJSON.json[(resultSet.name)] = {};                            
            resultJSON.json[(resultSet.name)].value = resultSet.value;         
            console.log( resultJSON);                                          
            if((Object.keys(resultJSON.json)).length == opcodeArray.length) {  
        		resultJSON.json["response_code"] = {"value" : "00"};        
       		callback(JSON.stringify(resultJSON));                             
       	}                                                                     
         };                                                                   
          opcodeArray.forEach(function(subHierarchyOpcode) {                   
            console.log(subHierarchyOpcode);                                   
            console.log(opcodeObject[subHierarchyOpcode]);	                  
           var tableName = opcodeObject[subHierarchyOpcode].tableName;        
            var columnName = opcodeObject[subHierarchyOpcode].columnName;      
            databaseModel.process.tableName = tableName;                       
            databaseModel.process.getParam(columnName, "*", accumulateJSON); 
	       });                                                                   
        break;
    case 11:
  var opcodeArray =  opcodeObject[index].postArray;											
	  var resultIndex = 0;                                                                         
      var postDataArray = JSON.parse(postData);                                                    
      console.log(postDataArray);                                                                  
      var accumulateJSON = function(data) {                                                        
    	var resultJSON =  {"json": {"response_code": {"value": "00"}}};                     
                if(++resultIndex == opcodeArray.length) {                                                  
    	  console.log("both are same");	                                                        
        	  callback(JSON.stringify(resultJSON));                                                     
    	}                                                                                           
      };                                                                                           
      opcodeArray.forEach(function(subHierarchyOpcode) {                                           
        console.log(subHierarchyOpcode);                                                           
        console.log(opcodeObject[subHierarchyOpcode]);	                                            
        var tableName = opcodeObject[subHierarchyOpcode].tableName;                                
        var columnName = opcodeObject[subHierarchyOpcode].columnName;                              
        databaseModel.process.tableName = tableName;                                               
        console.log("postDataArrayColumnName" + JSON.stringify(postDataArray[(columnName)]));    
          databaseModel.process.setParam(columnName, "value", postDataArray.value, accumulateJSON);
 	      }); 
  break;
    case 12:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 13:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 14:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 15:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 16:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 17:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 18:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 19:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 20:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 21:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 22:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 23:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 28:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 29:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 30:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 31:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 32:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 33:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 34:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 35:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 36:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 37:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 38:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 39:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 40:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 41:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 42:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 43:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 44:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 45:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 46:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 47:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 48:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 49:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 50:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 51:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 52:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 53:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 54:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 55:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 56:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 101:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 102:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 103:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 104:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 105:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 106:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 107:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 108:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 109:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 110:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 111:
  var opcodeArray =  opcodeObject[index].postArray;											
	  var resultIndex = 0;                                                                         
      var postDataArray = JSON.parse(postData);                                                    
      console.log(postDataArray);                                                                  
      var accumulateJSON = function(data) {                                                        
    	var resultJSON =  {"json": {"response_code": {"value": "00"}}};                     
                if(++resultIndex == opcodeArray.length) {                                                  
    	  console.log("both are same");	                                                        
        	  callback(JSON.stringify(resultJSON));                                                     
    	}                                                                                           
      };                                                                                           
      opcodeArray.forEach(function(subHierarchyOpcode) {                                           
        console.log(subHierarchyOpcode);                                                           
        console.log(opcodeObject[subHierarchyOpcode]);	                                            
        var tableName = opcodeObject[subHierarchyOpcode].tableName;                                
        var columnName = opcodeObject[subHierarchyOpcode].columnName;                              
        databaseModel.process.tableName = tableName;                                               
        console.log("postDataArrayColumnName" + JSON.stringify(postDataArray[(columnName)]));    
          databaseModel.process.setParam(columnName, "value", postDataArray.value, accumulateJSON);
 	      }); 
  break;
    case 112:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 113:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 114:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 115:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 116:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 117:
  var opcodeArray =  opcodeObject[index].postArray;											
	  var resultIndex = 0;                                                                         
      var postDataArray = JSON.parse(postData);                                                    
      console.log(postDataArray);                                                                  
      var accumulateJSON = function(data) {                                                        
    	var resultJSON =  {"json": {"response_code": {"value": "00"}}};                     
                if(++resultIndex == opcodeArray.length) {                                                  
    	  console.log("both are same");	                                                        
        	  callback(JSON.stringify(resultJSON));                                                     
    	}                                                                                           
      };                                                                                           
      opcodeArray.forEach(function(subHierarchyOpcode) {                                           
        console.log(subHierarchyOpcode);                                                           
        console.log(opcodeObject[subHierarchyOpcode]);	                                            
        var tableName = opcodeObject[subHierarchyOpcode].tableName;                                
        var columnName = opcodeObject[subHierarchyOpcode].columnName;                              
        databaseModel.process.tableName = tableName;                                               
        console.log("postDataArrayColumnName" + JSON.stringify(postDataArray[(columnName)]));    
          databaseModel.process.setParam(columnName, "value", postDataArray.value, accumulateJSON);
 	      }); 
  break;
    case 118:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 119:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 120:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 121:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 122:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 123:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 124:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 125:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 126:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 127:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 151:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 152:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 153:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 154:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 155:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 156:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 157:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 158:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 159:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 160:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 161:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 162:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 163:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 164:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 201:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 202:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 203:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 204:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 205:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 206:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 207:
  var opcodeArray =  opcodeObject[index].postArray;											
	  var resultIndex = 0;                                                                         
      var postDataArray = JSON.parse(postData);                                                    
      console.log(postDataArray);                                                                  
      var accumulateJSON = function(data) {                                                        
    	var resultJSON =  {"json": {"response_code": {"value": "00"}}};                     
                if(++resultIndex == opcodeArray.length) {                                                  
    	  console.log("both are same");	                                                        
        	  callback(JSON.stringify(resultJSON));                                                     
    	}                                                                                           
      };                                                                                           
      opcodeArray.forEach(function(subHierarchyOpcode) {                                           
        console.log(subHierarchyOpcode);                                                           
        console.log(opcodeObject[subHierarchyOpcode]);	                                            
        var tableName = opcodeObject[subHierarchyOpcode].tableName;                                
        var columnName = opcodeObject[subHierarchyOpcode].columnName;                              
        databaseModel.process.tableName = tableName;                                               
        console.log("postDataArrayColumnName" + JSON.stringify(postDataArray[(columnName)]));    
          databaseModel.process.setParam(columnName, "value", postDataArray.value, accumulateJSON);
 	      }); 
  break;
    case 208:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 209:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 210:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 211:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 212:
  var opcodeArray =  opcodeObject[index].postArray;											
	  var resultIndex = 0;                                                                         
      var postDataArray = JSON.parse(postData);                                                    
      console.log(postDataArray);                                                                  
      var accumulateJSON = function(data) {                                                        
    	var resultJSON =  {"json": {"response_code": {"value": "00"}}};                     
                if(++resultIndex == opcodeArray.length) {                                                  
    	  console.log("both are same");	                                                        
        	  callback(JSON.stringify(resultJSON));                                                     
    	}                                                                                           
      };                                                                                           
      opcodeArray.forEach(function(subHierarchyOpcode) {                                           
        console.log(subHierarchyOpcode);                                                           
        console.log(opcodeObject[subHierarchyOpcode]);	                                            
        var tableName = opcodeObject[subHierarchyOpcode].tableName;                                
        var columnName = opcodeObject[subHierarchyOpcode].columnName;                              
        databaseModel.process.tableName = tableName;                                               
        console.log("postDataArrayColumnName" + JSON.stringify(postDataArray[(columnName)]));    
          databaseModel.process.setParam(columnName, "value", postDataArray.value, accumulateJSON);
 	      }); 
  break;
    case 213:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 214:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 215:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 216:
  var opcodeArray =  opcodeObject[index].postArray;											
	  var resultIndex = 0;                                                                         
      var postDataArray = JSON.parse(postData);                                                    
      console.log(postDataArray);                                                                  
      var accumulateJSON = function(data) {                                                        
    	var resultJSON =  {"json": {"response_code": {"value": "00"}}};                     
                if(++resultIndex == opcodeArray.length) {                                                  
    	  console.log("both are same");	                                                        
        	  callback(JSON.stringify(resultJSON));                                                     
    	}                                                                                           
      };                                                                                           
      opcodeArray.forEach(function(subHierarchyOpcode) {                                           
        console.log(subHierarchyOpcode);                                                           
        console.log(opcodeObject[subHierarchyOpcode]);	                                            
        var tableName = opcodeObject[subHierarchyOpcode].tableName;                                
        var columnName = opcodeObject[subHierarchyOpcode].columnName;                              
        databaseModel.process.tableName = tableName;                                               
        console.log("postDataArrayColumnName" + JSON.stringify(postDataArray[(columnName)]));    
          databaseModel.process.setParam(columnName, "value", postDataArray.value, accumulateJSON);
 	      }); 
  break;
    case 217:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 218:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 219:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 220:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 221:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 222:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 223:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 224:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 225:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 226:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 227:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 228:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 229:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 230:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 231:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 232:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 233:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 234:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 235:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 236:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 237:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 238:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 239:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 240:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 241:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 242:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 243:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 244:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 245:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 246:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 247:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 248:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 249:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 250:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 251:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 252:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 253:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 254:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 255:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 256:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 257:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 258:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 259:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 260:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 261:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 262:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 263:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 264:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 265:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 266:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 267:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 268:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 269:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 270:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 271:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 272:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 273:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 274:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 275:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 276:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 277:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 278:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 279:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 280:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 281:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 282:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 283:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 284:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 285:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 286:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 287:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 288:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 289:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 290:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 291:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 292:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 293:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 294:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 295:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 296:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 297:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 298:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 299:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 300:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 301:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 302:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 303:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 304:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 305:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 306:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 307:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 308:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 309:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 310:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 311:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 312:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 313:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 314:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 315:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 316:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 317:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 318:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 319:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 320:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 322:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 323:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 324:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 325:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 326:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 327:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 328:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 329:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 330:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 351:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 352:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 353:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 354:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 355:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 356:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 357:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 358:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 359:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 360:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 361:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 362:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 363:
  var opcodeArray =  opcodeObject[index].postArray;											
	  var resultIndex = 0;                                                                         
      var postDataArray = JSON.parse(postData);                                                    
      console.log(postDataArray);                                                                  
      var accumulateJSON = function(data) {                                                        
    	var resultJSON =  {"json": {"response_code": {"value": "00"}}};                     
                if(++resultIndex == opcodeArray.length) {                                                  
    	  console.log("both are same");	                                                        
        	  callback(JSON.stringify(resultJSON));                                                     
    	}                                                                                           
      };                                                                                           
      opcodeArray.forEach(function(subHierarchyOpcode) {                                           
        console.log(subHierarchyOpcode);                                                           
        console.log(opcodeObject[subHierarchyOpcode]);	                                            
        var tableName = opcodeObject[subHierarchyOpcode].tableName;                                
        var columnName = opcodeObject[subHierarchyOpcode].columnName;                              
        databaseModel.process.tableName = tableName;                                               
        console.log("postDataArrayColumnName" + JSON.stringify(postDataArray[(columnName)]));    
          databaseModel.process.setParam(columnName, "value", postDataArray.value, accumulateJSON);
 	      }); 
  break;
    case 364:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 365:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 366:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 367:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 368:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 369:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 370:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 371:
  var opcodeArray =  opcodeObject[index].postArray;											
	  var resultIndex = 0;                                                                         
      var postDataArray = JSON.parse(postData);                                                    
      console.log(postDataArray);                                                                  
      var accumulateJSON = function(data) {                                                        
    	var resultJSON =  {"json": {"response_code": {"value": "00"}}};                     
                if(++resultIndex == opcodeArray.length) {                                                  
    	  console.log("both are same");	                                                        
        	  callback(JSON.stringify(resultJSON));                                                     
    	}                                                                                           
      };                                                                                           
      opcodeArray.forEach(function(subHierarchyOpcode) {                                           
        console.log(subHierarchyOpcode);                                                           
        console.log(opcodeObject[subHierarchyOpcode]);	                                            
        var tableName = opcodeObject[subHierarchyOpcode].tableName;                                
        var columnName = opcodeObject[subHierarchyOpcode].columnName;                              
        databaseModel.process.tableName = tableName;                                               
        console.log("postDataArrayColumnName" + JSON.stringify(postDataArray[(columnName)]));    
          databaseModel.process.setParam(columnName, "value", postDataArray.value, accumulateJSON);
 	      }); 
  break;
    case 372:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 373:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 374:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 375:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 376:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 377:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 378:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 379:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 380:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 381:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 382:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 383:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 401:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 402:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 403:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 404:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 405:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 406:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 407:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 408:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 409:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 410:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 411:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 412:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 451:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 452:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 453:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 454:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 455:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 456:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 457:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 458:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 459:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 460:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 461:
      var opcodeArray =  opcodeObject[index].getArray;
      var resultIndex = 0;
      var resultJSON = {json: {}};
      var accumulateJSON = function(resultSet, error) {
     	    console.log(resultSet);  										  
	         resultJSON.json[(resultSet.name)] = {};                            
            resultJSON.json[(resultSet.name)].value = resultSet.value;         
            console.log( resultJSON);                                          
            if((Object.keys(resultJSON.json)).length == opcodeArray.length) {  
        		resultJSON.json["response_code"] = {"value" : "00"};        
       		callback(JSON.stringify(resultJSON));                             
       	}                                                                     
         };                                                                   
          opcodeArray.forEach(function(subHierarchyOpcode) {                   
            console.log(subHierarchyOpcode);                                   
            console.log(opcodeObject[subHierarchyOpcode]);	                  
           var tableName = opcodeObject[subHierarchyOpcode].tableName;        
            var columnName = opcodeObject[subHierarchyOpcode].columnName;      
            databaseModel.process.tableName = tableName;                       
            databaseModel.process.getParam(columnName, "*", accumulateJSON); 
	       });                                                                   
        break;
    case 462:
  var opcodeArray =  opcodeObject[index].postArray;											
	  var resultIndex = 0;                                                                         
      var postDataArray = JSON.parse(postData);                                                    
      console.log(postDataArray);                                                                  
      var accumulateJSON = function(data) {                                                        
    	var resultJSON =  {"json": {"response_code": {"value": "00"}}};                     
                if(++resultIndex == opcodeArray.length) {                                                  
    	  console.log("both are same");	                                                        
        	  callback(JSON.stringify(resultJSON));                                                     
    	}                                                                                           
      };                                                                                           
      opcodeArray.forEach(function(subHierarchyOpcode) {                                           
        console.log(subHierarchyOpcode);                                                           
        console.log(opcodeObject[subHierarchyOpcode]);	                                            
        var tableName = opcodeObject[subHierarchyOpcode].tableName;                                
        var columnName = opcodeObject[subHierarchyOpcode].columnName;                              
        databaseModel.process.tableName = tableName;                                               
        console.log("postDataArrayColumnName" + JSON.stringify(postDataArray[(columnName)]));    
          databaseModel.process.setParam(columnName, "value", postDataArray.value, accumulateJSON);
 	      }); 
  break;
    case 463:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 464:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 465:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 466:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 467:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 468:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 469:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 470:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 471:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 472:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 473:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 474:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 475:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 476:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 477:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 478:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 479:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 480:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 481:
      var opcodeArray =  opcodeObject[index].getArray;
      var resultIndex = 0;
      var resultJSON = {json: {}};
      var accumulateJSON = function(resultSet, error) {
     	    console.log(resultSet);  										  
	         resultJSON.json[(resultSet.name)] = {};                            
            resultJSON.json[(resultSet.name)].value = resultSet.value;         
            console.log( resultJSON);                                          
            if((Object.keys(resultJSON.json)).length == opcodeArray.length) {  
        		resultJSON.json["response_code"] = {"value" : "00"};        
       		callback(JSON.stringify(resultJSON));                             
       	}                                                                     
         };                                                                   
          opcodeArray.forEach(function(subHierarchyOpcode) {                   
            console.log(subHierarchyOpcode);                                   
            console.log(opcodeObject[subHierarchyOpcode]);	                  
           var tableName = opcodeObject[subHierarchyOpcode].tableName;        
            var columnName = opcodeObject[subHierarchyOpcode].columnName;      
            databaseModel.process.tableName = tableName;                       
            databaseModel.process.getParam(columnName, "*", accumulateJSON); 
	       });                                                                   
        break;
    case 482:
  var opcodeArray =  opcodeObject[index].postArray;											
	  var resultIndex = 0;                                                                         
      var postDataArray = JSON.parse(postData);                                                    
      console.log(postDataArray);                                                                  
      var accumulateJSON = function(data) {                                                        
    	var resultJSON =  {"json": {"response_code": {"value": "00"}}};                     
                if(++resultIndex == opcodeArray.length) {                                                  
    	  console.log("both are same");	                                                        
        	  callback(JSON.stringify(resultJSON));                                                     
    	}                                                                                           
      };                                                                                           
      opcodeArray.forEach(function(subHierarchyOpcode) {                                           
        console.log(subHierarchyOpcode);                                                           
        console.log(opcodeObject[subHierarchyOpcode]);	                                            
        var tableName = opcodeObject[subHierarchyOpcode].tableName;                                
        var columnName = opcodeObject[subHierarchyOpcode].columnName;                              
        databaseModel.process.tableName = tableName;                                               
        console.log("postDataArrayColumnName" + JSON.stringify(postDataArray[(columnName)]));    
          databaseModel.process.setParam(columnName, "value", postDataArray.value, accumulateJSON);
 	      }); 
  break;
    case 483:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 484:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 485:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 486:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 487:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 488:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 489:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 490:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 491:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 492:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 493:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 494:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 495:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 496:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 497:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 498:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 499:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 500:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 501:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 502:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    case 503:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 504:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 701:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var returnJSON = function(returnedValue) {
        console.log(returnedValue.value);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].fetchData(tableName, columnName, returnJSON);
      break;
    case 702:
      var methodName = this.getMethodName(index);
      var tableName = opcodeObject[index].tableName;
      var columnName = opcodeObject[index].columnName;
      var postJSON = JSON.parse(postData);
      var returnJSON = function(returnedValue) {
        console.log(returnedValue);
        callback(JSON.stringify(returnedValue));
      };
      HandleMethod[methodName].processData(tableName, columnName, postJSON.value, returnJSON);
      break;
    default:console.log('Error: Wrong Opcode');
  }}

module.exports = opcodeSwitch;