/*******************************************************************************
 -- This file contains confidential and proprietary information.
 -- (C)Copyright - KARL STORZ
 *******************************************************************************
 -- Project            : KS_1G_CODEC
 -- File               : crypto_object.js
 -- Author             : Gilson Varghese
 -- Version            : 0.4
 -- Date               : 07-08-2015
 -- Status             : Applied new ESLint rules.
 -- Abstract           : Encryption / Decryption of the postdata and query string with aes-128-cbc
 --
 -- Modification History
 -------------------------------------------------------------------------------
 Date         | By              | Version | Change Description
 -------------------------------------------------------------------------------
 26-05-2015   | Gilson Varghese | 0.1     | Initial version
 05-07-2015   | Gilson Varghese | 0.2     | Applied ESLint rules.
 13-07-2015   | Gilson Varghese | 0.3     | console.log is replaced by debug.
 07-08-2015   | Gilson Varghese | 0.4     | Applied new ESLint rules.
 ******************************************************************************/

/**
 * Module dependencies.
 */

var crypto = require("crypto");
//var debug = require("debug")("crypto_object");

/*
 * The Javascript object for handling tasks related to encryption, decryption and Hashing
 */

var cryptoObject = {
	algorithm: 'aes-128-ctr',
	passphrase: 'd6F3Efeq',

	/*
	 * @param textToEncrypt {String} The input to be hashed
	 * @param cipher {Object} The object of crypto module
	 * @return {String} the encrypted value of the text
	 */

	encrypt: function(textToEncrypt) {
		var cipher = crypto.createCipher(this.algorithm, this.passphrase);
		var crypted = cipher.update(textToEncrypt, 'utf-8', 'hex');
		crypted += cipher.final('hex');
		return crypted;
	},

	/*
	 * @param textToDecrypt {String} The input to be hashed
	 * @param decipher {Object} The object of crypto module
	 * @return {String} the decrypted value of the text
	 */

	decrypt: function(textToDecrypt) {
		var decipher = crypto.createDecipher(this.algorithm, this.passphrase);
		var decrypted = decipher.update(textToDecrypt, 'hex', 'utf-8'); 
		decrypted += decipher.final('utf-8');
		return decrypted;
	},

	/*
	 * @param textToHash {String} The input to be hashed
	 * @param hash {Object} The object of crypto module
	 * @return {String} the hashed value of the text
	 */

	createHash: function(textToHash) {
		var hash = crypto.createHash('sha256');
		hash.update(textToHash);
		return hash.digest('hex');
	}
};

module.exports = cryptoObject;
