let howMuchOranges = prompt ("How much oranges?");
let maxOrangeSize = prompt ("Max orange size :");
let maxSizeWasteContainer = prompt ("How is the max size of container for waste?");
let orangesArray = [];
for (let i = 0; i < howMuchOranges; i++) {
        let bufferArr = [ prompt ("Enter your orange, please.") ];
          orangesArray[i] = +bufferArr;
    }
alert ("You have : " + howMuchOranges + " oranges and this oranges have size :" + orangesArray);
function juicer (howMuchOranges, maxOrangeSize, maxSizeWasteContainer, orangesArray) {
	let wasteOutCounter = 0;
	let workingWasteContainer = maxSizeWasteContainer;
	for (let i = 0; i < howMuchOranges; i++) {
		if (orangesArray[i] > maxOrangeSize) {
			continue;
		}
		if (orangesArray[i] <= maxOrangeSize) {
			workingWasteContainer -= orangesArray[i];
		}
		if (workingWasteContainer <= 0) {
			wasteOutCounter++;
			workingWasteContainer = maxSizeWasteContainer;
		}
	}
	alert ("You turn out waste : " + wasteOutCounter + " times");
}
juicer (howMuchOranges, maxOrangeSize, maxSizeWasteContainer, orangesArray);



