#!/usr/bin/env node
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

tableObject = [];
tableNames  = [];
tableName = "";
var nameIndex=0;



var isEmpty = function(data){
  return (data == "");
};

var isValue = function(data){
  console.log("in value ------------------" + data);
  return (data == "value");
};

var handleValues = function(data, j, i, object) {
  console.log("in handle value " + i);
  tableObject[i] = [];
  tableObject[i].push(i);
  tableObject[i].push(object);
  tableObject[i].push((data[j+1]));
  (function(){
  for(k = j+2; k < data.length; ++k) {
    switch(data[k]){
      case "tableName" : 
	if(data[++k] != tableName){
	  tableNames[nameIndex++] =  data[k];
	  tableName = data[k]; 
	}
	tableObject[i].push( (data[k]) );
	break;
      case "method" : 
	if(data[k+3] == "POST") {
          //object[(data[k])] = ["GET", "POST"];
          k+=2;
	  tableObject[i].push( parseInt(data[k]) );
	  tableObject[i].push( parseInt(data[k+2]) );
          k+=2;
        } else
	if(data[k+1] == "POST") {
	  ++k;
	  tableObject[i].push(0);
          tableObject[i].push( (parseInt(data[++k])) )
        } else {
	  ++k;
	  tableObject[i].push( (parseInt(data[++k])) );
	  tableObject[i].push(0);
        }
      break;
      case "access": 
        tableObject[i].push(data[++k]);
      break;
      case "socketFilter": 
        tableObject[i].push( (parseInt(data[++k]))); 
      break;
      case "":
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
	    handleValues(data, j, i, stag);
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
	    handleValues(data, j, i, ttag);
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
	    handleValues(data, j, i, qtag);
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
	    handleValues(data, j, i, ptag);
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
       
	/*
      for(p=0; p<tableNames.length; ++p)
      {
	  console.log(tableNames[p]);
	  data = tableNames[p];
	  
	  function createTable() {
	    console.log("createTable ");
	    db.run( ("CREATE TABLE IF NOT EXISTS '" + data  + "' (id INTEGER UNIQUE, name TEXT PRIMARY KEY,  GET INTEGER, POST INTEGER, access TEXT, socketFilter INTEGER)"), created);
	  }
	  
	  function created(){
	    console.log("created table " + data );
	  }
	  createTable();
      }
    if(p == tableNames.length)
    {
      insert();
    }
      
    function closeDb() {
      console.log("closeDb");
      db.close();
    }*/
    
   
      
      
      
      
	  var sqlite3 = require('sqlite3').verbose();
          var db;
	  function createDb() {
	  console.log("createDb chain");
	  db = new sqlite3.Database('chain.db');
	  }
	  createDb();
	
	tableObject.forEach(function(data){
	  
	  console.log(data);
	  

	  function createTable() {
	    console.log("createTable ");
	    db.run( ("CREATE TABLE IF NOT EXISTS '" + data[3]  + "' (id INTEGER UNIQUE, name PRIMARY KEY, value TEXT,  GET INTEGER, POST INTEGER, access TEXT, socketFilter INTEGER)"));
	    setTimeout(insertRows, 1000)
	  }

	  function insertRows() {
	    console.log("insertRows ");
	    var stmt;
	    stmt = db.prepare("INSERT INTO '" + data[3] +"' VALUES (?,?,?,?,?,?,?)");
	    stmt.run(data[0], data[1], data[2], data[4], data[5], data[6], data[7]);
	    stmt.finalize();
	  }
	  
	    setTimeout(createTable, 100)
         });
       
	   setTimeout(closeDb, 60000);

	 function closeDb() {
	    console.log("closeDb");
	    db.close();
	  }
    
}
});
};
