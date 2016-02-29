console.log("dsd");
var tempArray = [];
var objectAray = {};
var fs = require("fs");
var csv = require("fast-csv");
var stream = fs.createReadStream("./Decoder_API.csv");
var csvStream = csv()
.on("data", function(data){
  tempArray.push(data);
  //console.log("++++" + data);
})
.on("end", function(){
  console.log("done");
  afterDone();
});
stream.pipe(csvStream);



var i = 0;
methodObject = {};
var isEmpty = function(data){
  return (data == "");
};

var isValue = function(data){
  console.log("in value ------------------" + data);
  return (data == "value");
};

var handleValues = function(data, j, i, object) {
  console.log("in handle value " + j);
  (function(){
  for(k = j+2; k < data.length; ++k) {
    switch(data[k]){
      case "tableName" : object[(data[k])] =  (data[++k]); break;
      case "method" : 
	if(data[k+3] == "POST") {
	  object[(data[k])] = ["GET", "POST"];
	  k+=2;
	  object["socket"] = {"GET":(data[k]), "POST":(data[k+2])};
	  k+=2;
        } else {
	  var methodName = (data[k+1]);
	  object[(data[k])] = [(data[++k])];
	  object["socket"] = {};
	  object.socket[(methodName)] = (data[++k]);
        }
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
	    tag = (data[k]);
        object[tag] = [];
        for(l=1;data[k+l]!= ""; ++l) {
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
        for(l=1;(data[k+l]!= ""); ++l) {
	  (object[tag]).push(data[k+l]);
	}
	k += l;
        break;
        return; 
    }
  }
  }());
  return;
};


afterDone = function(){
tempArray.forEach(function(data){
  console.log(i++);
  console.log(data.length);
  (function(){
    for(var j = 0; j< data.length; ++j)
    {
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
        if(!isEmpty((data[j]))) {
	  stag = data[j];
          methodObject[ptag][stag] = {};
	  console.log("in case "+ j + data[j]);
	}
        continue;
      case 2:
        if(!isEmpty((data[j]))) {
	  if(!isValue((data[j]))) {
	    ttag = data[j];
            methodObject[ptag][stag][ttag] = {};
	    console.log("in case "+ j + data[j]);
	  } else {
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
	    handleValues(data, j, i, methodObject[ptag][stag][ttag]);
	    return;
	  }
	}
        continue;
      case 4:
        if(!isEmpty((data[j]))) {
	  if(!isValue(data[j])) {
	    ptag = data[j];
            methodObject[ptag][stag][ttag][qtag][ptag] = {};
	    console.log("in case "+ j + data[j]);
	  } else {
	    handleValues(data, j, i, methodObject[ptag][stag][ttag][qtag]);
	    return;
	  }
	}
        continue;
      case 5:
        if(!isEmpty((data[j]))) {
	  if(!isValue(data[j])) {
	    ftag = data[j];
            methodObject[ptag][stag][ttag][qtag][ptag][ftag] = {};
	    console.log("in case "+ j + data[j]);
	  } else {
	    handleValues(data, j, i, methodObject[ptag][stag][ttag][qtag][ptag]);
	    return;
	  }
	}
        continue;
      default:
    }
  }
  }());
  //console.log(data);
if(i==tempArray.length)
{
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

	fileData += "var JSONObject = {v1:\n";
	fileData += JSON.stringify(methodObject, null, 2);
	fileData += "};\n\n";
	fileData +=  "module.exports = JSONObject;"

		fs = require('fs');
		fs.writeFile('uri_levels.js', fileData, function (err) {
			if (err) return console.log(err);
			console.log('JSON > uri_levels.js');
		});
		console.log(JSON.stringify(methodObject));
		console.log(methodObject);
}
});
};
