// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

console.log("Hello");

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var scoresLength = scores.length;

var F = 0;
var D = 0;
var C = 0;
var B = 0;
var A = 0;

for (var i =0; i < scoresLength; i++) {
	if (scores[i] < 61) {
		F += 1;	
	} if (scores[i] < 71 && scores[i] > 60) {
		D += 1;
	} if (scores[i] < 81 && scores[i] > 70) {
		C += 1;
	} if (scores[i] < 91 && scores[i] > 80) {
		B += 1;
	} if (scores[i] < 101 && scores[i] > 90) {
		A += 1;
	}
}

console.log(A,B,C,D,F);