/*
* 	You have to find a word in the string.
* 	The string includes a lot of different letters. 
*	----------------------------------------------
*	Input : 
*		searchWord
*		stringOfLetters
*	Outpur :
*		"YES" or "NO"
*	-----------------------------------------------
*	Input : 
*		lol
*		xxxxLxxOxxxxL
*	Output :
*		"YES"
*	-----------------------------------------------
*	Input : 
*		Hello
*		ollHexxxxx
*	Output :
*		"NO"
*	------------------------------------------------
*	Input : 
*		Spring
*		SphRsIdfvvvNooaxG
*	Output :
*		"YES"
*	------------------------------------------------
*	Input :
*		LIKE
*		KEIL
*	Output :
*		"NO"
*	------------------------------------------------
*	Note : 
*	The letters in the "stringOfLetters"
*	which create the "searchWord" must go in order. 
*/

function findWord (searchWord, stringOfLetters, i, j, counter) {
	if (searchWord.length == counter) {
		alert ( "YES" );
		return 0;
	}
	if (searchWord.length == i || stringOfLetters.length == j) {
		alert ( "NO" );
		return 0; 
	}
	let buff = 0;
	if ( searchWord.charAt(i) == stringOfLetters.charAt(j) ) {
		counter++;
		buff = j;
		findWord (searchWord, stringOfLetters, ++i, buff, counter);
	}
	else {
		findWord (searchWord, stringOfLetters, i, ++j, counter);
	}
}
let searchWord = prompt ("Enter your word : ");
let stringOfLetters = prompt ("Enter string of the letters : ");
findWord (searchWord, stringOfLetters, 0, 0, 0);