/**
 * @author <gilson.v@coreel.com>
 * @fileoverview Example to generate JSDoc
 * @copyright 2015 Gilson Varghese
 */

/*
 * Includes 
 */

var fs = require('fs');
var csv = require('fast-csv');
var sqlite3 = require('sqlite3').verbose();

/**
 * Database related values
 * @namespace
 * @type {Object}
 */

var dbObject = {
	databaseName: "mdns.db",
	databasePath: "",
	tableName: "MDNS",
	columns: ["key", "value", "deletable", "editable"],
	columnTypes: ["TEXT", "TEXT", "INTEGER", "INTEGER"],
	databaseEntry: [],
	databaseObject: null
};

/**
 * CSV related values
 * @namespace
 * @type {Object}
 */

var csvObject = {
	csvName: "board_params.csv",
	csvPath: "",
	headers: ["key", "value", "deletable", "editable"],
	csvEntry: []
};


/**
 * Read the csv with default values
 * @param {string} csvName - The name of the CSV file
 * @param {string} csvPath - Path to the CSV file
 * @param {function} callback - The callback function
 */

var readCSV = function(csvName, csvPath, callback) {
	console.log("-- in readCSV");

	/*
		Absolute csv path
	*/

	var absoluteCSVName = csvPath + csvName;

	/*
	 	 Open read stream pointer of the file to be read
	*/

	var readStream = fs.createReadStream(absoluteCSVName)
		.on("error", function(error) {
			console.log("!!!Error in readCSV " + error);
	});

	/*
	 	Create CSV stream and read CSV line by line
	*/

	csv.fromStream(readStream, {headers: true})
		.on("data", function(data) {
			console.log("--data : " + JSON.stringify(data));
			csvObject.csvEntry.push(data);
		})
		.on("end", function() {
			console.log("--done reading CSV");
			/*
				 execute callback if defined
			 */

			if(callback) {
				callback(dbObject.databasePath, dbObject.databaseName, createTable);
			}
		});
};

/**
 * Open the database
 * @param {string} databaseName - The name of database to be closed
 * @param {function} callback - The callback function
 */

var openDB = function(databasePath, databaseName, callback) {
	console.log("-- in openDB");

	/*
	 	Absolute database path
	 */

	var absoluteDatabaseName = databasePath + databaseName;

	/*
		Open database
	*/

	dbObject.databasObject = new sqlite3.Database(absoluteDatabaseName);

	/*
	  	Execute callback if defined
	 */

	if(callback) {
		callback(dbObject.tableName, insertValues);
	}
};

/**
 * Create table if does not exist
 * @param {string} tableName - Table Name
 * @param {function} callback - The callback function
 */

var createTable = function(tableName, callback) {
	console.log("-- in createTable");

	/*
		Run statement to create table
	*/

	dbObject.databasObject.run("CREATE TABLE IF NOT EXISTS " + tableName + " ("+dbObject.columns[0]+" "+dbObject.columnTypes[0]+", "+dbObject.columns[1]+" "+dbObject.columnTypes[1]+", "+dbObject.columns[2]+" "+dbObject.columnTypes[2]+", "+dbObject.columns[3]+" "+dbObject.columnTypes[3]+")", function(err) {
		console.log("-- in Run ");	

		if(err == null) {
			/*
			 	Execute callback if defined
			 */

			if(callback) {
				return callback(csvObject.csvEntry, closeDB);
			}
		} else {
			console.log("-- err = " + err);
		}
	});
};

/**
 * Insert values read from the csv
 * @param {string} tableName - Table Name
 * @param {function} callback - The callback function
 */

var insertValues = function(dataStruct, callback) {
	console.log("-- in insertValues");
	
	/*
		Counter to monitor array index
	*/

	var arrayIndex = 0;

	/*
		ESLint declarations		
	*/

	var createStatement = null;
	var incrementAndLoop = null;
	var stmt = null;

	/**
		Copy csv entry to database entry
	*/

	dbObject.databaseEntry = dataStruct;

	/*
		Insert values into table	
	 */

	createStatement = function() {
		
		/*
			Prepare staement for the current row index
		*/

		stmt = dbObject.databasObject.prepare("INSERT INTO "+ dbObject.tableName +" VALUES (?,?,?,?)");

		/*
			Run the statement with values from csvEntry
		*/

		stmt.run(csvObject.csvEntry[arrayIndex][(csvObject.headers[0])], csvObject.csvEntry[arrayIndex][(csvObject.headers[1])], csvObject.csvEntry[arrayIndex][(csvObject.headers[2])], csvObject.csvEntry[arrayIndex][(csvObject.headers[3])]);

		/*
			Finalize the staement with callback to insert next row
		*/

		stmt.finalize(function(err) {
			console.log("-- row "+ arrayIndex + " finalize err = " + err);
			incrementAndLoop();
		});
	};

	/*
		Callback to increment rowIndex for next Insert
	*/

	incrementAndLoop= function() {
		if(++arrayIndex < dbObject.databaseEntry.length) {
			return createStatement();
		} else {

			/*
				execute callback if defined
			 */

			if(callback) {
				callback(dbObject.databasObject);
			}
		}
	};

	/*
		Start inserting rows one by one
	*/

	createStatement();
};

/**
 * Close the database
 * @param {string} databaseName - The name of database to be closed
 * @param {function} callback - The callback function
 */

var closeDB = function(databasObject, callback) {
	console.log("-- in closeDB");

	/*
		Close database
	*/

	databasObject.close(function(err) {

		if(err) {
			console.log("Error in closing database " + err);
		} else {

			/*
			 	Execute callback if defined
			 */

			if(callback) {
				callback();
			}	
		}
	});	
};

/*
 	Start reading csv 
 */

readCSV(csvObject.csvName, csvObject.csvPath, openDB);

