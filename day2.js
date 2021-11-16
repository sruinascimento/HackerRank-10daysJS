/*

function grade(score) {
	if (score < 0 || score > 30) return false;
	if (score <= 5) return 'A';
	else if (score <= 10) return 'B';
	else if (score <= 15) return 'C';
	else if (score <= 20) return 'D';
	else if (score <= 25) return 'E';
	else if (score <= 30) return 'F';
}


console.log(grade(-1));
console.log(grade(4));
console.log(grade(7));
console.log(grade(13));
console.log(grade(23));
console.log(grade(27));
console.log(grade(100));
console.log(grade(17));

// ===========================

function getLetter(s) {
	if (s.length < 1 || s.length > 100) return false;
	switch (s.charAt(0).toLowerCase()) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
			return 'A';

		case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            return 'B';
			
		case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            return 'C';
           
		case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            return 'D';
        
        default:
        	return "you didn't enter a valid character";
	}
}

console.log(getLetter("adfgt"))
*/
// =======
/*
function isVowel(s) {
	return 'aeiou'.indexOf(s) != -1;
}
*/

const isVowel = s => 'aeiou'.indexOf(s) != -1;

function vowelsAndConsonants(s) {
	let vowels = [];
	let consonants = [];

	for (let l of s) {
		isVowel(l) ? vowels.push(l) : consonants.push(l);
	}

	vowels.push(...consonants);

	for (let l of vowels) {
		console.log(l);
	}
}

vowelsAndConsonants('javascriptloops');