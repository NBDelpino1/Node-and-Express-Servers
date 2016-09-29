// Possible Friends (DATA)
// =============================================================
var characters = [{
	name: 'Kelly Price',
	photo: "http://blogs-images.forbes.com/files/2014/07/kateashford_avatar_1405024965-400x400.jpg", //
    scores:[
			 1,
			 1,
			 4,
			 1,
			 1,
			 1,
			 2,
			 5,
			 4,
			 1
			]
	
}, {
	name: 'Brooke Smith',
	photo: "http://blogs-images.forbes.com/files/2015/08/Chloe-Sorvino_avatar_1440432122-400x400.jpg",
    scores:[
			 3,
			 3,
			 4,
			 4,
			 2,
			 2,
			 2,
			 4,
			 5,
			 1
			]
}, {
	name: 'Jessica Vasquez',
	photo: "https://pbs.twimg.com/profile_images/731598801387982848/G_4kKBLH_400x400.jpg",
    scores:[
			 5,
			 4,
			 5,
			 4,
			 5,
			 5,
			 5,
			 5,
			 4,
			 5
			]
}];

// find total score of each potential match so they can compare to user score to determine compatability
// =======================================================================================================

var kellyPrice = characters[0].scores;
var brookeSmith = characters[1].scores;
var jessicaVasquez = characters[2].scores;



function getSum(total, num) {
    return total + num;
}

function myFunction() {

    var kellyPriceScore = kellyPrice.reduce(getSum);
    console.log(kellyPriceScore);
    var brookeSmithScore = brookeSmith.reduce(getSum);
    console.log(brookeSmithScore);
    var jessicaVasquezScore = jessicaVasquez.reduce(getSum);
    console.log(jessicaVasquezScore);

}

myFunction();









