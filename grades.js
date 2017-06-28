// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

console.log("Hello");
// An array of grades 50-100
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// A variable that is the lenght of the scores, makes maintainability better
var scoresLength = scores.length;
//A series of variable that will hold the number of test grade in that range
var F = 0; //should be 2
var D = 0; //should be 2
var C = 0; //should be 3
var B = 0; //should be 3
var A = 0; //should be 2

//A variable that uses the math min method and applies it to the scores array
var min = Math.min.apply(null, scores);
//A variable that uses the math max method and applies it to the scores array
var max = Math.max.apply(null, scores);
//A for loop that itterates through the scores length and itterates
for (var i =0; i < scoresLength; i++) {
	//An IF statment that singles out scores less than 60
	if (scores[i] < 61) {
		//Adds one to the variable
		F += 1;	
	//An IF statment that singles out scores less than 70 and greater than 60
	} if (scores[i] < 71 && scores[i] > 60) {
		//Adds one to the variable
		D += 1;
	//An IF statment that singles out scores less than 80 and greater than 70
	} if (scores[i] < 81 && scores[i] > 70) {
		//Adds one to the variable
		C += 1;
	//An IF statment that singles out scores less than 90 and greater than 80
	} if (scores[i] < 91 && scores[i] > 80) {
		//Adds one to the variable
		B += 1;
	//An IF statment that singles out scores less than 100 and greater than 90
	} if (scores[i] < 101 && scores[i] > 90) {
		//Adds one to the variable
		A += 1;
	}
}
// console logs the number of grades in the test score array
console.log("This amount of A's", A,"This amount of B's",B,"This amount of C's",C,"This amount of D's",D,"This amount of F's",F);
//console logs both the highest and lowest grades
console.log("The lowest score is", min);
console.log("The highest score is", max);