//your code here
let touristSpots = ['The Virupaksha Temple','Victoria Memorial','Tajmahal'];

const orderedSpots = touristSpots.sort((a,b) =>{
	const regex = /^(?:The|A|An)\s+/i;

	const spotA = a.replace(regex, "");
	const spotB = b.replace(regex, "");

	return spotA.localCompare(spotB);
});

console.log(orderedSpots)
