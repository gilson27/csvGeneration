console.log("Let's Begin");
var tempArray = [];
var objectAray = {};
var fs = require("fs");
var csv = require("fast-csv");
var stream = fs.createReadStream("./Encoder_API.csv");
var csvStream = csv()
.on("data", function(data) {
  tempArray.push(data);
})
.on("end", function() {
  console.log("done");
  afterDone();
});
stream.pipe(csvStream);

var tempURL = "";
var tempValue = "";

var i = 0;
methodObject = {};
var isEmpty = function(data) {
  return (data == "");
};

var isValue = function(data) {
  console.log("in value ------------------" + data);
  return (data == "value");
};

opcodeObject = {};
var statupObject = {};
tableName = "";
columnName = "";
getCode = 0;
postCode = 0;

var handleValues = function(data, j, i, object) {
  console.log("in handle value " + j);
  columnName = (data[j-1]);
  statupObject[(tempURL)] = {};
  refStartupObject = statupObject[(tempURL)];
  refStartupObject.columnName = columnName;
  tempValue = (data[j+1]);
  (function() {
    for(k = j+2; k < data.length; ++k) {
        switch(data[k]){
          case "tableName" :   
            tableName = (data[k+1]);  object[(data[k])] =  (data[++k]); 
            refStartupObject[(data[k-1])] = (data[k]);
            break;
          case "method" : 
                if(data[k+3] == "POST") {
                      object[(data[k])] = ["GET", "POST"];
                      k+=2;
                        if(parseInt(data[k])) {
                            getCode = (data[k]);
                            opcodeObject[(data[k])] = {"columnName" : columnName, "tableName" : tableName};
                            opcodeObject[(data[k])].method = "GET";
                        }
                        if(parseInt(data[k+2])) {
                            postCode = (data[k+2]);
                            refStartupObject.opcode = postCode;
                            opcodeObject[(data[k+2])] = {"columnName" : columnName, "tableName" : tableName}; 
                            opcodeObject[(data[k+2])].method = "POST";
                        }
                      object["socket"] = {"GET":(data[k]), "POST":(data[k+2])};
                      k+=2;
                } else {
                      var methodName = (data[k+1]);
                      object[(data[k])] = [(data[++k])];
                      object["socket"] = {};
                          if(parseInt(data[k+1])) {
                              getCode = (methodName == "GET") ? (data[k+1]) : 0;
                              postCode = (methodName == "POST") ? (data[k+1]) : 0;
                                if(methodName == "POST") {
                                    refStartupObject.opcode = postCode;
                                }
                              opcodeObject[(data[k+1])] = {"columnName" : columnName, "tableName" : tableName};
                              opcodeObject[(data[k+1])].method = methodName;
                          }
                      object.socket[(methodName)] = (data[++k]);
                }
                console.log("in method");
                    break;
            case "access":
                console.log((data[k]));
                object[(data[k])] =  {};
                if(data[k+3] == "POST") {
                  object[(data[k])].GET = data[k+2];
                  object[(data[k])].POST = data[k+4];
                  k+=4;
                } else {
                  object[(data[k])][(data[k+1])] = data[k+2];
                  k+=2;
                }
                    break;
            
            case "startup": 
                startup = parseInt(data[++k]);
                if(startup === 2) {
                    console.log("startup for FPGA");
                } else {
                    delete statupObject[(tempURL)];
                }
                break;
          case "socketFilter":
            object[(data[k])] =  parseInt(data[++k].trim());
            refStartupObject.socketFilter = object[(data[k-1])];
            console.log("in socket filter "  +  object[(data[k-1])]  + " flags");
            break;
          case "notifyOpcode":
            refStartupObject.notifyOpcode = parseInt(data[++k]);
            break;
          case "socketTask":
            refStartupObject.socketTask = parseInt(data[++k]);
            break;
          case "dbTask":
            refStartupObject.databaseTask = data[++k];
            break;
          case "flags":
            console.log(data[k]);
            object[(data[k])] =  {};
            if(data[k+3] == "POST") {
                object[(data[k])].GET = data[k+2];
                object[(data[k])].POST = data[k+4];
                refStartupObject.flags = object[(data[k])].POST;
                k+=4;
            } else {
                object[(data[k])][(data[k+1])] = data[k+2];
                if([(data[k+1])] == "POST") {
                    refStartupObject.flags = object[(data[k])][(data[k+1])];
                }
              k+=2;
            }
            console.log("in flags");
            break;
          case "filter":
        console.log("in filter" + (data[k]));
        tag = (data[k]);
            object[tag] = [];
            
            for(l=1; data[k+l]!= "NONE"; ++l)
        {
           (object[tag]).push(data[k+l]);
           console.log(data[k+l]);
        }
        k += l;
            console.log("l=======================" + l);
        break;
          case "dataType": 
            object[(data[k])] =  data[++k]; 
            refStartupObject.dataType = object[(data[k-1])];
            break;
          case "dataTypeArray": 
            tag = (data[k]);
            refStartupObject[tag] = [];
            for(l=1; data[k+l]!= "END"; ++l) {
               (refStartupObject[tag]).push(data[k+l]);
               console.log(data[k+l]);
            }
            k += l; 
            break;
          case "MIN": 
            object[(data[k])] =  parseInt(data[++k]);
            break;
          case "MAX": 
            object[(data[k])] =  parseInt(data[++k]);
            break;

          case "array": 
            tag = (data[k]);
            object[tag] = [];
            
            for(l=1;data[k+l]!= "END"; ++l) {
            (object[tag]).push(data[k+l]);
        }
                refStartupObject.childs = (object[tag]);
                refStartupObject.tableName = tempValue;
        k += l;
        break;
          case "LIST":
        tag = (data[k]);
            object[tag] = [];
            for(l=1;data[k+l]!= "END"; ++l) {
          (object[tag]).push(data[k+l]);
        }
        k += l;
            break;
          case "TYPE":
        tag = (data[k]);
            object[tag] = [];
            for(l=1;(data[k+l]!= "END"); ++l) {
          (object[tag]).push(data[k+l]);
        }
        k += l;
            break;
            return; 
            
            
            
          case "getArray":
            console.log("in getArray");
        tag = (data[k]);
            opcodeObject[getCode][tag] = [];
            for(l=1;data[k+l]!= "END"; ++l) {
          (opcodeObject[getCode][tag]).push(data[k+l]);
        }
        k += l;
            break;
          case "postArray":
        tag = (data[k]);
            opcodeObject[postCode][tag] = [];
            for(l=1;data[k+l]!= "END"; ++l) {
          (opcodeObject[postCode][tag]).push(data[k+l]);
        }  
        k += l;
            break;
          case "action": 
            object[(data[k])] =  data[++k]
            break;     
          case "uriAction": 
            object[(data[k])] =  data[++k]
            break;   
          case "socketAction": 
        if(opcodeObject[getCode])
              opcodeObject[(getCode)][(data[k])] =  data[(k+1)];
        if(opcodeObject[postCode])
              opcodeObject[(postCode)][(data[k])] =  data[++k];
            break; 
        }
      }
  }());
  return;
};


afterDone = function() {
tempArray.forEach(function(data){
  console.log(i++);
  console.log(data.length);
  (function(){
    for(var j = 0; j< data.length; ++j)
    {
        tempURL = "";
        
        /** 
         * case statement for each column
         */
         
        switch(j)
        {
          case 0:
        if(!isEmpty((data[j]))) {
          ptag = data[j];
              methodObject[ptag] = {};
          console.log("in case "+ j + data[j]);
        }
            continue;
          case 1:
        /*if(!isEmpty((data[j]))) {
          stag = data[j];
              methodObject[ptag][stag] = {};
          console.log("in case "+ j + data[j]);
          }*/
        if(!isEmpty((data[j]))) {
          if(!isValue((data[j]))) {
            stag = data[j];
                methodObject[ptag][stag] = {};
            console.log("in case "+ j + data[j]);
          } else {
            tempURL = "/" + ptag;
            handleValues(data, j, i, methodObject[ptag]);
            return;
          }
        }
            continue;
          case 2:
            if(!isEmpty((data[j]))) {
          if(!isValue((data[j]))) {
            ttag = data[j];
                methodObject[ptag][stag][ttag] = {};
            console.log("in case "+ j + data[j]);
          } else {
            tempURL = "/" + ptag + "/" + stag;
            handleValues(data, j, i, methodObject[ptag][stag]);
            return;
          }
        }
            continue;
          case 3:
            if(!isEmpty((data[j]))) {
          if(!isValue((data[j]))) {
            qtag = data[j];
                methodObject[ptag][stag][ttag][qtag] = {};
            console.log("in case "+ j + data[j]);
          } else {
            tempURL = "/" + ptag + "/" + stag+ "/" + ttag;
            handleValues(data, j, i, methodObject[ptag][stag][ttag]);
            return;
          }
        }
            continue;
          case 4:
            if(!isEmpty((data[j]))) {
          if(!isValue(data[j])) {
            pitag = data[j];
                methodObject[ptag][stag][ttag][qtag][pitag] = {};
            console.log("in case "+ j + data[j]);
          } else {
            tempURL = "/" + ptag + "/" + stag + "/" + ttag + "/" + qtag;
            handleValues(data, j, i, methodObject[ptag][stag][ttag][qtag]);
            return;
          }
        }
            continue;
          case 5:
            if(!isEmpty((data[j]))) {
          if(!isValue(data[j])) {
            ftag = data[j];
                methodObject[ptag][stag][ttag][qtag][pitag][ftag] = {};
            console.log("in case "+ j + data[j]);
          } else {
            tempURL = "/" + ptag + "/" + stag + "/" + ttag + "/" + qtag + "/" + pitag;
            handleValues(data, j, i, methodObject[ptag][stag][ttag][qtag][pitag]);
            return;
          }
        }
            continue;
          default:
        }
    }
  }());

if(i == tempArray.length)
{
	console.log(opcodeObject);
}

    if(i == tempArray.length)
    {

        var generateOpcodeSwitch = function() {
          
                var FPGAGetParam = "";
            FPGAGetParam += "      var methodName = this.getMethodName(index);\n";
            FPGAGetParam += "      var tableName = opcodeObject[index].tableName;\n";
            FPGAGetParam += "      var postJSON = JSON.parse(postData);\n";	
            FPGAGetParam += "      var columnName = postJSON.value;\n";
            FPGAGetParam += "      var returnJSON = function(returnedValue) {\n";
            FPGAGetParam += "        console.log(returnedValue.value);\n";
            FPGAGetParam += "        getResultJSON.json.result.value = returnedValue.value;\n";	
            FPGAGetParam += "        callback(JSON.stringify(getResultJSON));\n";
            FPGAGetParam += "      };\n";
            FPGAGetParam += "      databaseModel.process.tableName = tableName;\n";
            FPGAGetParam += "      databaseModel.process.getParam(columnName, \"value\", returnJSON);\n";;
            FPGAGetParam += "      break;\n";  

            var getParam = "";
            getParam += "      var methodName = this.getMethodName(index);\n";
            getParam += "      var tableName = opcodeObject[index].tableName;\n";
            getParam += "      var columnName = opcodeObject[index].columnName;\n";
            getParam += "      var returnJSON = function(returnedValue) {\n";
            getParam += "        console.log(returnedValue.value);\n";
            getParam += "        getResultJSON.json.result.value = returnedValue.value;\n";	
            getParam += "        callback(JSON.stringify(getResultJSON));\n";
            getParam += "      };\n";
            getParam += "      databaseModel.process.tableName = tableName;\n";
            getParam += "      databaseModel.process.getParam(columnName, \"value\", returnJSON);\n";;
            getParam += "      break;\n";
            
            var getParams = "";
            getParams += "      var opcodeArray =  opcodeObject[index].getArray;\n";
            getParams += "      var resultIndex = 0;\n";
            getParams += "      var resultJSON = {json: {}};\n";
            getParams += "      var accumulateJSON = function(resultSet, error) {\n";
            getParams += "     	    console.log(resultSet);  										  \n	";
            getParams += "         resultJSON.json[(resultSet.name)] = {};                            \n   ";
            getParams += "         resultJSON.json[(resultSet.name)].value = resultSet.value;         \n   ";
            getParams += "         console.log( resultJSON);                                          \n   ";
            getParams += "         if((Object.keys(resultJSON.json)).length == opcodeArray.length) {  \n   ";
            getParams += "     		resultJSON.json[\"response_code\"] = {\"value\" : 0};        \n  ";
            getParams += "     		callback(JSON.stringify(resultJSON));                             \n  ";
            getParams += "     	}                                                                     \n  ";
            getParams += "       };                                                                   \n   ";
            getParams += "       opcodeArray.forEach(function(subHierarchyOpcode) {                   \n   ";
            getParams += "         console.log(subHierarchyOpcode);                                   \n   ";
            getParams += "         console.log(opcodeObject[subHierarchyOpcode]);	                  \n  ";
            getParams += "         var tableName = opcodeObject[subHierarchyOpcode].tableName;        \n   ";
            getParams += "         var columnName = opcodeObject[subHierarchyOpcode].columnName;      \n   ";
            getParams += "         databaseModel.process.tableName = tableName;                       \n   ";
            getParams += "         databaseModel.process.getParam(columnName, \"*\", accumulateJSON); \n	";
            getParams += "       });                                                                   \n  ";
            getParams += "      break;\n";
            
            
            var setParam = "";
            setParam += "      var methodName = this.getMethodName(index);\n";
            setParam += "      var tableName = opcodeObject[index].tableName;\n";
            setParam += "      var columnName = opcodeObject[index].columnName;\n";
            setParam += "      var postJSON = JSON.parse(postData);\n";
            setParam += "      var returnJSON = function(returnedValue) {\n";
            setParam += "        console.log(returnedValue);\n";
            setParam += "        callback(JSON.stringify(postResultJSON));\n";
            setParam += "      };\n";
            setParam += "      databaseModel.process.tableName = tableName;\n";
            setParam += "      databaseModel.process.setParam(columnName, \"value\", (JSON.parse(postData)).value , returnJSON);\n";
            setParam += "      break;\n";
            
            var setParams = "";	
            setParams += "  var opcodeArray =  opcodeObject[index].postArray;											\n	";
            setParams += "  var resultIndex = 0;                                                                         \n    ";
            setParams += "  var postDataArray = JSON.parse(postData);                                                    \n    ";
            setParams += "  console.log(postDataArray);                                                                  \n    ";
            setParams += "  var accumulateJSON = function(data) {                                                        \n    ";
            setParams += "	var resultJSON =  {\"json\": {\"response_code\": {\"value\": 0}}};                     \n            ";
            setParams += "    if(++resultIndex == opcodeArray.length) {                                                  \n    ";
            setParams += "	  console.log(\"both are same\");	                                                        \n        ";
            setParams += "	  callback(JSON.stringify(resultJSON));                                                     \n    ";
            setParams += "	}                                                                                           \n    ";
            setParams += "  };                                                                                           \n    ";
            setParams += "  opcodeArray.forEach(function(subHierarchyOpcode) {                                           \n    ";
            setParams += "    console.log(subHierarchyOpcode);                                                           \n    ";
            setParams += "    console.log(opcodeObject[subHierarchyOpcode]);	                                            \n    ";
            setParams += "    var tableName = opcodeObject[subHierarchyOpcode].tableName;                                \n    ";
            setParams += "    var columnName = opcodeObject[subHierarchyOpcode].columnName;                              \n    ";
            setParams += "    databaseModel.process.tableName = tableName;                                               \n    ";
            setParams += "    console.log(\"postDataArrayColumnName\" + JSON.stringify(postDataArray[(columnName)]));    \n      ";
            setParams += "    databaseModel.process.setParam(columnName, \"value\", postDataArray.value, accumulateJSON);\n 	    ";
            setParams += "  }); \n";
            setParams += "  break;\n";

            var  fileData = "/**\n";

            fileData += " * @author\n" ;
            fileData += " * @fileoverview routing get and post requests with URI levels.\n";
            fileData += " * @date 1 May 2015\n";
            fileData += " **/\n\n"  ;
            fileData += "\n";
            fileData += "var opcodeObject = require('./opcode_object');\n" ;
            fileData += "var databaseModel = require('./database/sql_process');\n";
            //fileData += "var HandleMethod = require('./method_handle');\n";
            fileData += "\n";
            fileData += "var opcodeSwitch = {};\n";
            fileData += "\n";
            fileData += "var getResultJSON =  {\"json\": {\"result\": {\"value\": \"Not Found\"}, \"response_code\": {\"value\": 0}}};\n";
            fileData += "\n";
            fileData += "var postResultJSON =  {\"json\": {\"response_code\": {\"value\": 0}}};\n";
            fileData += "\n";	
            fileData += "opcodeSwitch.getMethodName = function(index) {\n";
            fileData += "  return opcodeObject[(index.toString())].method;";
            fileData += "};\n";
            fileData += "\n";

            fileData += "opcodeSwitch.getSocketAction = function(index) {\n";
            fileData += "  if(opcodeObject[(index.toString())].socketAction) {\n";
            fileData += "    return opcodeObject[(index.toString())].socketAction;\n";
            fileData += "  } else {\n";
            fileData += "    return false;\n";
            fileData += "  }\n";
            fileData += "};\n";
            fileData += "\n";

            fileData += "opcodeSwitch.processRequest = function(index, postData, callback) {\n";
            fileData += "  switch(index) {\n";

            var array = Object.keys(opcodeObject);

            array.forEach(function(index){

                console.log(index); 		
                fileData += "    case "+ index +":\n";
                if(opcodeObject[(index)].getArray) {
                    fileData += getParams;
                } else if(opcodeObject[(index)].postArray) {
                    fileData += setParams;
                } else if(opcodeObject[(index)].method == "GET") {
                     if(opcodeObject[(index)]["socketAction"]) {
                   console.log("socket action");
                   if(opcodeObject[(index)]["socketAction"] == "FPGA_REGISTER") {
                     console.log("FPGA_REGISTER");
                         fileData += FPGAGetParam;
                       }
                 } else {
                          fileData += getParam;
                 }
                } else if(opcodeObject[(index)].method == "POST") {
                    fileData += setParam;
                }
            });

            fileData += "    default:console.log('Error: Wrong Opcode');\n";
            fileData += "  }}\n\n";

            fileData += "module.exports = opcodeSwitch;";

                fs = require('fs');
                fs.writeFile('opcode_switch.js', fileData, function (err) {
                    if (err) return console.log(err);
                    console.log('opcode_switch.js');
                });
        
        };

        var generateOpcodeObject = function() {

            var  fileData = "/**\n";
            fileData += " * @author\n" ;
            fileData += " * @fileoverview routing get and post requests with URI levels.\n";
            fileData += " * @date 1 May 2015\n";
            fileData += " **/\n\n";

            fileData += "var opcodeObject = \n";
            fileData += JSON.stringify(opcodeObject, null, 2);
            fileData += ";\n\n";
            fileData +=  "module.exports = opcodeObject;"

            fs = require('fs');
            fs.writeFile('opcode_object.js', fileData, function (err) {
                if (err) 
                    return console.log(err);
                console.log('opcode_object.js');
            });         
        };

        var generateURIObject = function() {
            var  fileData = "/**\n";
            fileData += " * @author\n" ;
            fileData += " * @fileoverview routing get and post requests with URI levels.\n";
            fileData += " * @date 17 April 2015\n";
            fileData += " **/\n\n"  ;
            tempJSONForTabs = {v1:{api:null}};
            tempJSONForTabs.v1.api = methodObject
            fileData += "var JSONObject = ";
            fileData += JSON.stringify(tempJSONForTabs, null, "\t");
            fileData += ";\n\n";
            fileData +=  "module.exports = JSONObject;\n";

                fs = require('fs');
                fs.writeFile('uri_levels.js', fileData, function (err) {
                    if (err) return console.log(err);
                    console.log('JSON > uri_levels.js');
                });
                console.log(JSON.stringify(methodObject));
                console.log(methodObject);
        };
        
        /**
         * script to generate startup CSV
         */ 
        
        var generateStartupObject = function() {
            var  fileData = "";
            fileData += "/******************************************************************************\n";
            fileData += "-- This file contains confidential and proprietary information.                \n";
            fileData += "-- (C)Copyright - KARL STORZ                                                   \n";
            fileData += "****************************************************************************** \n";
            fileData += "-- Project            : KS_1G_CODEC                                            \n";
            fileData += "-- File               : startup_json.js                                        \n";
            fileData += "-- Author             : Gilson Varghese                                        \n";
            fileData += "-- Version            : 0.1                                                    \n";
            fileData += "-- Date               : 27-09-2015                                             \n";
            fileData += "-- Status             : Initial version                                        \n";
            fileData += "-- Abstract           : Statrtup application to read db and update apps        \n";
            fileData += "--                                                                             \n";
            fileData += "-- Modification History                                                        \n";
            fileData += "------------------------------------------------------------------------------ \n";
            fileData += "Date         | By              | Version | Change Description                  \n";
            fileData += "------------------------------------------------------------------------------ \n";
            fileData += "17-09-2015   | Gilson Varghese | 0.1     | Initial version                     \n";
            fileData += "******************************************************************************/\n";
            fileData += "\n\n";
            fileData += "\n\n";
            tempJSONForTabs = {v1:{api:null}};
            tempJSONForTabs.v1.api = methodObject
            fileData += "var JSONObject = ";
            fileData += JSON.stringify(statupObject, null, "\t");
            fileData += ";\n\n";
            fileData +=  "module.exports = JSONObject;\n";

                fs = require('fs');
                fs.writeFile('fpga_startup_json.js', fileData, function (err) {
                    if (err) return console.log(err);
                    console.log('JSON > fpga_startup_json.js');
                });
                console.log(JSON.stringify(methodObject));
                console.log(methodObject);
        };
        
        //generateOpcodeSwitch();
        //generateURIObject();
        //generateOpcodeObject();
        generateStartupObject();
        console.log(JSON.stringify(statupObject));
    }
});
};
