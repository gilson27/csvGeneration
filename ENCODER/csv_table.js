/*******************************************************************************
 -- This file contains confidential and proprietary information.
 -- (C)Copyright - KARL STORZ
 *******************************************************************************
 -- Project            : KS_1G_CODEC
 -- File               : crypto_object.js
 -- Author             : Gilson Varghese
 -- Version            : 0.2
 -- Date               : 01-10-2015
 -- Status             : Added custom table structure for authentication
 -- Abstract           : Encryption / Decryption of the postdata and query string with aes-128-cbc
 --
 -- Modification History
 -------------------------------------------------------------------------------
 Date         | By              | Version | Change Description
 -------------------------------------------------------------------------------
 26-05-2015   | Gilson Varghese | 0.1     | Initial version
 01-10-2015   | Gilson Varghese | 0.2     | Added custom table structure for authentication
 ******************************************************************************/

var tempArray = [];
var objectAray = {};
var fs = require("fs");
var csv = require("fast-csv");
var cryptoObject = require("./cypher/crypto_object.js"); 
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
            switch(data[k]) {
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
    } ());
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
            handleValues(data, j, i, ptag);
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


    if(i==tempArray.length) {
        var sqlite3 = require('sqlite3').verbose();
        var db;

        /**
         * Function to create database 
         */
         
        function createDb() {
            console.log("createDb chain");
            db = new sqlite3.Database('encoder.db');
        }
	  createDb();
	
        /**
         * 
         */ 
        
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
            if(data[3] != "OVERLAY_IMAGE" && data[3] != "OVERLAY_MUTE_IMAGE")
                setTimeout(createTable, 100);
        });
           
        setTimeout(closeDb, 30000);
        
        /**
         * Function to close database 
         */
          
        function closeDb() {
            console.log("closeDb");
            db.close();
            createI2C();
          }

         /**
          * Function to create I2C table
          */

         function createI2C() {
           console.log("in createI2C");
           db = new sqlite3.Database('encoder.db');
           var valueArray = [];
           var deleteAndCreate = function() {
                db.run("CREATE TABLE IF NOT EXISTS 'I2C-REGISTERS' ('dev-addr' TEXT, 'reg-addr' TEXT, value TEXT)", function() {
                     console.log("creating I2C registers");
                     db.run("CREATE TABLE IF NOT EXISTS 'FPGA-REGISTERS' ('reg-addr' TEXT, 'value' TEXT)", function() {
                        console.log("creating FPGA registers");
                        closeI2CDatabase();
                    });
                });
           };
           
           var continueFn = function() {
                db.exec("DROP TABLE 'I2C-REGISTERS'", function() {
                        console.log("deleting I2C registers");
                        db.exec("DROP TABLE 'FPGA-REGISTERS'", function() {
                            console.log("deleting FPGA registers");
                            deleteAndCreate();
                        });
                });
           };
          
          continueFn();

         }
     
         /**
          * Function to read I2C table and store temporarily 
          */
         /**
         function readI2C(callbackFn) {
             var result = [];
           db.all("SELECT value from 'I2C-REGISTERS'", function(err, rows) {
             if(rows) {
               if(rows[0]) {
                   var tempArray = [];
                  for(var j=0; j<rows.length;++j) {
                   tempArray[j] = rows[j].value; 
                  }
                 console.log("I2C registers : "  +  tempArray.toString());
                 result = tempArray;
             setTimeout(function() {callbackFn(result);}, 5000)
               }
              }
            });
         } */
        
         
         /**
          * Function to wite values into I2C table 
          */
         
         /**  
         function writeI2C(valueArray) {
           console.log("in writeI2C");
           var i=0;
           console.log(valueArray.toString());
           for(i=0;i<valueArray.length;++i) {
             var stmt;
             stmt = db.prepare("INSERT INTO 'I2C-REGISTERS' VALUES (?,?,?)");
             stmt.run(valueArray[i], "1", "1");
             stmt.finalize();  
             console.log(valueArray[i]);
           }
           if(i>=valueArray.length) {
               setTimeout(closeI2CDatabase, 5000);
           }
         }*/
         
         /**
          * Close database after I2C
          */ 
         
         function closeI2CDatabase() {
            console.log("closeI2CDatabase");
            db.close();
            
            /**
             * Start creating overlay image 
             */
            
            setTimeout(createOverlay, 1000);
         }
         
         /**
          * create table for overlay
          */
         
         function createOverlay() {
           console.log("in createOverlay");
           db = new sqlite3.Database('encoder.db');
        console.log("create OVERLAY_IMAGE table ");
        db.run(("CREATE TABLE IF NOT EXISTS '" + "OVERLAY_IMAGE"  + "' (id TEXT PRIMARY KEY, \"file-name\" TEXT, location TEXT, enable TEXT, height TEXT, width TEXT, \"x-location\" TEXT, \"y-location\" TEXT, transparency TEXT, uploaded TEXT, deleted TEXT)"));
        setTimeout(insertOverlayRows, 1000);
         }
         
         function insertOverlayRows() {
           valueArray = ["1", "2", "3", "4", "5", "6", "7", "8", "MUTE"];
           for(i=0;i<valueArray.length;++i) {
             var stmt;
             stmt = db.prepare("INSERT INTO OVERLAY_IMAGE VALUES (?,?,?,?,?,?,?,?,?,?,?)");
             stmt.run(valueArray[i], "filename", "location", "0", "100", "100", "100", "100", "128", "0", "0");
             stmt.finalize();
             console.log(valueArray[i]);
           }
           if(i>=valueArray.length) {
               console.log("about to close overlay database");
               setTimeout(closeOverlayDatabase, 5000);
           }
         }
         
     
         /**
          * Close overlay database 
          */
          
        function closeOverlayDatabase() {
            console.log("overlay closed");
            db.close();        
            setTimeout(deleteAuthentication, 1000);
        }
            
        /**
         * Read authentication params and delete table
         */ 
            
        function deleteAuthentication() {
            var credentialsJSON = {};
            console.log("In delete Authentication");
            db = new sqlite3.Database('encoder.db');
            db.all("SELECT value from SYSTEM_AUTHENTICATION where name = \"user\"", function(err, rows) {
                if(err) {
                    console.err(err);
                }
                credentialsJSON.user = rows[0].value;
                db.all("SELECT value from SYSTEM_AUTHENTICATION where name = \"user-pwd\"", function(err, rows) {
                    if(err) {
                        console.err(err);
                    }
                    credentialsJSON.user_pwd = cryptoObject.createHash(rows[0].value);
                    db.all("SELECT value from SYSTEM_AUTHENTICATION where name = \"admin\"", function(err, rows) {
                        if(err) {
                            console.err(err);
                        }
                        credentialsJSON.admin = rows[0].value;
                        db.all("SELECT value from SYSTEM_AUTHENTICATION where name = \"admin-pwd\"", function(err, rows) {
                            if(err) {
                                console.err(err);
                            }
                            credentialsJSON.admin_pwd = cryptoObject.createHash(rows[0].value); 
                            db.exec("DROP TABLE SYSTEM_AUTHENTICATION", function() {createAuthentication(credentialsJSON);});
                        });
                    });
                });
            });
        }
        
        /**
         * Create authentication values and insert into table
         */ 
        
        function createAuthentication(credentialsJSON) {
            console.log("in create Authentication " + JSON.stringify(credentialsJSON));
            db.run("CREATE TABLE IF NOT EXISTS SYSTEM_AUTHENTICATION (username TEXT, password TEXT, privilege TEXT)", function() {
                writeAuthentication(credentialsJSON);
            });
            
        }
        
        /**
         * Function to write Authentication table
         */ 
         
        function writeAuthentication(credentialsJSON) {
            var stmt;
            stmt = db.prepare("INSERT INTO SYSTEM_AUTHENTICATION VALUES (?,?,?)");
            stmt.run(credentialsJSON.admin, credentialsJSON.admin_pwd, "admin");
            stmt.finalize();
            stmt = db.prepare("INSERT INTO SYSTEM_AUTHENTICATION VALUES (?,?,?)");
            stmt.run(credentialsJSON.user, credentialsJSON.user_pwd, "user");
            stmt.finalize();
            setTimeout(closeAuthenticationDatabase, 1000);
        }
        
        /**
         * Close SYSTEM_AUTHENTICATION database 
         */
          
        function closeAuthenticationDatabase() {
            console.log("closeAuthenticationDatabase");
            db.close();
        }
    };
});
}
