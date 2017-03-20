/*!
 * string-manuplation <https://github.com/IAMROYDEV/string-manuplation.git>
 *
 * Copyright (c) 2017, Santosh Gali.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function manuplateLetter(str, noOfLet) {
	var splitStr = str.toLowerCase().split(' ');
	var totalLen = splitStr.length + 1;
	if ((splitStr.length > 0) && (noOfLet < totalLen)) {
	   for (var i = 0; i < splitStr.length; i++) {
	       // You do not need to check if i is larger than splitStr length, as your for does that for you
	       // Assign it back to the array
	       splitStr[i] = splitStr[i].charAt(0).toUpperCase();   
	   }
	return splitStr.splice(0, noOfLet).join('');
	} else {
	 	throw new TypeError('invalid requiest');
	}
};
