#!/usr/bin/env node
console.log("Let's Begin");
var tempArray = [];
var objectAray = {};
var fs = require("fs");
var csv = require("fast-csv");
var stream = fs.createReadStream("./Encoder_API.csv");
var csvStream = csv()
.on("data", function(data){
  tempArray.push(data);
  //console.log("++++" + data);
})
.on("end", function() {
  console.log("done");
  afterDone();
});
stream.pipe(csvStream);


var twiceFlag = false;
var i = 0;
var uriIndex = 0;
var credentials =JSON.stringify({json: {authentication: {user: {value:"user"},pwd: {value:"User1234"}}}});
methodObject = {};
var isEmpty = function(data){
  return (data == "");
};

var isValue = function(data){
  console.log("in value ------------------" + data);
  return (data == "value");
};

opcodeObject = {};
urlObject = [];
tableName = "";
columnName = "";
getCode = 0;
postCode = 0;

var handleValues = function(data, j, i, object) {
  console.log("in handle value " + j + uriIndex);
  console.log("==================================================================================");
  console.log(urlObject[uriIndex][0]  + urlObject[uriIndex][1] + urlObject[uriIndex][2]+ urlObject[uriIndex][3] +":");
  console.log("==================================================================================");
  columnName = (data[j-1]); 
  (function(){
  for(k = j+2; k < data.length; ++k) {
    switch(data[k]) {
      case "tableName" :  
	tableName = (data[k+1]);  object[(data[k])] =  (data[++k]);
	break;
      case "method" : 
	if(data[k+3] == "POST") {
	  twiceFlag = true;
	  object[(data[k])] = ["GET", "POST"];
	  k+=2;
	  if(parseInt(data[k])) {
	      getCode = (data[k]);
              opcodeObject[(data[k])] = {"columnName" : columnName, "tableName" : tableName};
              opcodeObject[(data[k])].method = "GET";
	      urlObject[uriIndex][4] = getCode;
	      urlObject[uriIndex][5] = (data[k+2]);
          }
          
          else {
	      urlObject[uriIndex][4] = getCode;
	      urlObject[uriIndex][5] = (data[k+2]);
	      //urlObject[(uriIndex + 1)] = tempArrayURL;
	  }
	  
          if(parseInt(data[k+2])) {
              postCode = (data[k+2]);
              opcodeObject[(data[k+2])] = {"columnName" : columnName, "tableName" : tableName}; 
	      ++uriIndex;
              opcodeObject[(data[k+2])].method = "POST";
          }
         
          else {
	      ++uriIndex; 
	  }
	  object["socket"] = {"GET":(data[k]), "POST":(data[k+2])};
	  k+=2;
        } else {

	  twiceFlag = false;
	  var methodName = (data[k+1]);
	  object[(data[k])] = [(data[++k])];
	  object["socket"] = {};
          if(parseInt(data[k+1])) {
              getCode = (methodName == "GET") ? (data[k+1]) : 0;
	      postCode = (methodName == "POST") ? (data[k+1]) : 0;
              opcodeObject[(data[k+1])] = {"columnName" : columnName, "tableName" : tableName};
              opcodeObject[(data[k+1])].method = methodName;
	      //urlObject[uriIndex][1] = urlObject[uriIndex][1] + ":" + methodName + ":0";
	      //urlObject[uriIndex][3] = methodName;
	      if(methodName == "GET")
	        urlObject[uriIndex][4] = (data[k+1]);
	      else {
	        urlObject[uriIndex][5] = (data[k+1]);
	      }
	      uriIndex++;
          }
          
          else {
	      if(methodName == "GET") {
	        urlObject[uriIndex][4] = (data[k+1]);
	      }
	      else {
	        urlObject[uriIndex][5] = (data[k+1]);
	      }
	      uriIndex++;
	  }
	  object.socket[(methodName)] = (data[++k]);
        }
console.log("in method  +++++++++++++" + urlObject[uriIndex-1]);
        break;
      case "access": 
        console.log((data[k]));
        object[(data[k])] =  (data[++k]) 
        break;
      case "socketFilter": 
        object[(data[k])] =  parseInt(data[++k]) 
        break;
      case "filter":
	tag = (data[k]);
        object[tag] = [];
        for(l=1;data[k+l]!= "NONE"; ++l)
	{
		(object[tag]).push(data[k+l]);
	}
	k += l;
        console.log("l=======================" + l);
	break;
      case "MIN": 
        object[(data[k])] =  parseInt(data[++k]) 
        break;
      case "MAX": 
        object[(data[k])] =  parseInt(data[++k]) 
        break;
      case "array": 
	var tempChildArray = [];
	tag = (data[k]);
        object[tag] = [];
        for(l=1;data[k+l].trim()!= "END"; ++l) {
	  tempChildArray.push(data[k+l]);
	  (object[tag]).push(data[k+l]);
	}
	
	k += l;
	break;
      case "LIST":
	tag = (data[k]);
        object[tag] = [];
        for(l=1;data[k+l]!= "END"; ++l) {
	  (object[tag]).push(data[k+l]);
	}
	k += l;
	return;
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
	childPostOpcodeArray = []
        for(l=1;data[k+l]!= "END"; ++l) {
	  (opcodeObject[postCode][tag]).push(data[k+l]);
	  childPostOpcodeArray.push(data[k+l]);
	} 
	childArrayOpodeCombination = [];
	k += l;
        break;
      case "action": 
        object[(data[k])] =  data[++k];
        break;     
      case "uriAction": 
        object[(data[k])] =  data[++k];
        break; 
      case "verificationAction": 
	//urlObject[uriIndex-1][9] = 1;   
    }
  }
  }());
  return;
};

var  tempUrl = "/v1/api/";

afterDone = function() {
tempArray.forEach(function(data){
  console.log(i++);
  console.log("urlObject " + uriIndex);
  console.log(data.length);
  (function(){
    for(var j = 0; j< data.length; ++j)
    {tempUrl = "/v1/api/";

    switch(j)
    {
      case 0:
	if(!isEmpty((data[j]))) {
	  ptag = data[j];
          methodObject[ptag] = {};
	  console.log("in case "+ j + data[j]);
	  pEmpty = false; 
        } else {
	  pEmpty = true; 
	}
        continue;
      case 1:
    if(!isEmpty((data[j]))) {
	  if(!isValue((data[j]))) {
	    stag = data[j];
            methodObject[ptag][stag] = {};
	    console.log("in case "+ j + data[j]);
	  } else {
	    urlObject[uriIndex] = []; 
	    urlObject[uriIndex][0] = ptag;
	    urlObject[uriIndex][1] = '';
	    urlObject[uriIndex][2] = '';
	    handleValues(data, j, i, methodObject[ptag]);
	    return;
	  }
	  sEmpty = false;
	} else {
	  sEmpty = true;
	}
        continue;
      case 2:
        if(!isEmpty((data[j]))) {
	  if(!isValue((data[j]))) {
	    ttag = data[j];
            methodObject[ptag][stag][ttag] = {};
	    console.log("in case "+ j + data[j]);
	  } else {
	    urlObject[uriIndex] = []; 
	    urlObject[uriIndex][0] = pEmpty ? '': ptag;
	    urlObject[uriIndex][1] = stag;
	    urlObject[uriIndex][2] = '';
	    urlObject[uriIndex][3] = '';
	    tempUrl += (ptag + "/" + stag);
	    handleValues(data, j, i, methodObject[ptag][stag]);
	    return;
	  }tEmpty = false;
	} else {
	  tEmpty = true;
	}
        continue;
      case 3:
        if(!isEmpty((data[j]))) {
	  if(!isValue((data[j]))) {
	    qtag = data[j];
            methodObject[ptag][stag][ttag][qtag] = {};
	    console.log("in case "+ j + data[j]);
	  } else {
	    urlObject[uriIndex] = []; 
	    urlObject[uriIndex][0] = pEmpty ? '': ptag;
	    urlObject[uriIndex][1] = sEmpty ? '': stag;
	    urlObject[uriIndex][2] = ttag;
	    urlObject[uriIndex][3] = '';
	    tempUrl += (ptag + "/" + stag + "/" + ttag);
	    handleValues(data, j, i, methodObject[ptag][stag][ttag]);
	    return;
	  }qEmpty = false;
	} else {
	  qEmpty = true;
	}
        continue;
      case 4:
        if(!isEmpty((data[j]))) {
	  if(!isValue(data[j])) {
	    ftag = data[j];
            methodObject[ptag][stag][ttag][qtag][ftag] = {};
	    console.log("in case "+ j + data[j]);
	  } else {
	    urlObject[uriIndex] = []; 
	    urlObject[uriIndex][0] = pEmpty ? '': ptag;
	    urlObject[uriIndex][1] = sEmpty ? '': stag;
	    urlObject[uriIndex][2] = tEmpty ? '': ttag;
	    urlObject[uriIndex][3] = qtag;
	    handleValues(data, j, i, methodObject[ptag][stag][ttag][qtag]);
	    return;
	  }pEmpty = false;
	} else {
	  pEmpty = true;
	}
        continue;
      case 5:
        if(!isEmpty((data[j]))) {
	  if(!isValue(data[j])) {
	    xtag = data[j];
            methodObject[ptag][stag][ttag][qtag][ftag][xtag] = {};
	    console.log("in case "+ j + data[j]);
	  } else {
	    handleValues(data, j, i, methodObject[ptag][stag][ttag][qtag][ftag]);
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
	fileData += "}\n";
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
	        fileData += getParam;
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
	fileData += "  /*\n";
	fileData += "   * @param filter values :\n" ;
	fileData += "   *    <dl>\n";
	fileData += "   *    <dt>LIST   <dd> List Alone\n";
	fileData += "   *    <dt>MIN    <dd> Minimum Value\n";
	fileData += "   *    <dt>MAX    <dd> Maximaum Value\n";
	fileData += "   *    <dt>FORMAT <dd> Any extra format check is used\n";
	fileData += "   *    </dl>\n";
	fileData += "   * @param format values :\n";
	fileData += "   *    <dl>\n";
	fileData += "   *    <dt>MULTIPLE2 <dd> Multiple of two\n";
	fileData += "   *    <dt>MULTIPLE5 <dd> Multiple of three\n";
	fileData += "   *    </dl>\n";
	fileData += "   * @param method values :\n";
	fileData += "   *    <ul>\n";
	fileData += "   *    <li>GET\n";
	fileData += "   *    <li>POST\n";
	fileData += "   *    <li>PUT\n";
	fileData += "   *    <li>DELETE\n";
	fileData += "   *    </ul>\n";
	fileData += "   */\n\n";

	fileData += "var JSONObject = {api: {v1:\n";
	fileData += JSON.stringify(methodObject, null, 2);
	fileData += "}};\n\n";
	fileData +=  "module.exports = JSONObject;"

		fs = require('fs');
		fs.writeFile('uri_levels.js', fileData, function (err) {
	  		if (err) return console.log(err);
	 		console.log('JSON > uri_levels.js');
		});
		console.log(JSON.stringify(methodObject));
		console.log(methodObject);
		console.log(urlObject);
    };
    
    var generateURLCSV = function() {
      var urlIDObject = {};
      var tempURL;
       csv.writeToStream(fs.createWriteStream("id_uri_map.csv"),urlObject , {headers: true});
       console.log(urlObject);
      var callbackOnDict = function () {
	   
	    fs = require('fs');
	    var  URLFileData = "\"\"\"\n";
	    URLFileData += " * @author\n" ;
	    URLFileData += " * @fileoverview routing get and post requests with URI levels.\n";
	    URLFileData += " * @date 17 April 2015\n";
	    URLFileData += " \"\"\"\n\n";
	    tempJSONURL = {"url" : urlIDObject};
	    URLFileData += "urlObject = ";
	    URLFileData += JSON.stringify(tempJSONURL,null, 2);
	    URLFileData += ";\n";	
	    URLFileData += "";	
            fs.writeFile('url_map.py', URLFileData, function (err) {
		if (err) return console.log(err);
		console.log('URL Array > url_map.py');
	    });
      }
     
      var createDictFromArray = function () {
	console.log("createDictFromArray");
        var urlIDObjectIndex = 0;
	var increaseIndex = function(){
	
	for(urlIDObjectIndex=0;urlIDObjectIndex<urlObject.length;++urlIDObjectIndex){
	  console.log(urlObject[urlIDObjectIndex]);
	  tempURL = urlObject[urlIDObjectIndex][1];
	  urlIDObject[(tempURL)] = {};
	  actualURL = tempURL.split(':');
	  console.log("\n ------------      " + actualURL[0] + "      ------------- \n");
	  urlIDObject[(tempURL)].opcode = urlObject[urlIDObjectIndex][4];
	  urlIDObject[(tempURL)].uri = actualURL[0]; 
	  urlIDObject[(tempURL)].method = urlObject[urlIDObjectIndex][3];
	  urlIDObject[(tempURL)].req_type = urlObject[urlIDObjectIndex][7];
	  urlIDObject[(tempURL)].child_api = urlObject[urlIDObjectIndex][8];
	  urlIDObject[(tempURL)].tableName = urlObject[urlIDObjectIndex][5];
	  urlIDObject[(tempURL)].row_name = urlObject[urlIDObjectIndex][6];
	  urlIDObject[(tempURL)].action = urlObject[urlIDObjectIndex][9];
	  urlIDObject[(tempURL)].child_opcode = urlObject[urlIDObjectIndex][10];
	}
	  
	  if(urlIDObjectIndex >= urlObject.length) {
	setTimeout(callbackOnDict,3000)  
        }
	}
	
	
	increaseIndex();
        //callbackOnDict();
      }
      
      
      
     
     //createDictFromArray();
    };
	
	//generateOpcodeSwitch();
	//generateURIObject();
	//generateOpcodeObject();
	generateURLCSV();
}
});
};
