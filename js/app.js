// Assignment 1 | COMP1073 Client-Side JavaScript
// Group Members - Vikramaaditya Mathur (200563277), Zayan Khan(200580933), Nicolas Smith (200530206)

/* Variables
-------------------------------------------------- */
//My initialButtons Increment Buttons.
const incrementButtonOne = document.querySelector(".button_1");
const incrementButtonTwo = document.querySelector(".button_2");
const incrementButtonThree = document.querySelector(".button_3");
const incrementButtonFour = document.querySelector(".button_4");
const incrementButtonFive = document.querySelector(".button_5");

//The first row images Variables.
const rowOneImg1 = document.querySelector(".row1col1");
const rowOneImg2 = document.querySelector(".row2col1");
const rowOneImg3 = document.querySelector(".row3col1");
const rowOneImg4 = document.querySelector(".row4col1");
const rowOneImg5 = document.querySelector(".row5col1");

//The Second row images Variables.
const rowTwoImg1 = document.querySelector(".row1col2");
const rowTwoImg2 = document.querySelector(".row2col2");
const rowTwoImg3 = document.querySelector(".row3col2");
const rowTwoImg4 = document.querySelector(".row4col2");
const rowTwoImg5 = document.querySelector(".row5col2");

//The Third row images Variables.
const rowThreeImg1 = document.querySelector(".row1col3");
const rowThreeImg2 = document.querySelector(".row2col3");
const rowThreeImg3 = document.querySelector(".row3col3");
const rowThreeImg4 = document.querySelector(".row4col3");
const rowThreeImg5 = document.querySelector(".row5col3");

//The Fourth row images Variables.
const rowFourImg1 = document.querySelector(".row1col4");
const rowFourImg2 = document.querySelector(".row2col4");
const rowFourImg3 = document.querySelector(".row3col4");
const rowFourImg4 = document.querySelector(".row4col4");
const rowFourImg5 = document.querySelector(".row5col4");

//The Fifth row images Variables.
const rowFifthImg1 = document.querySelector(".row1col5");
const rowFifthImg2 = document.querySelector(".row2col5");
const rowFifthImg3 = document.querySelector(".row3col5");
const rowFifthImg4 = document.querySelector(".row4col5");
const rowFifthImg5 = document.querySelector(".row5col5");

//All the arrays containing different images on each column of each row.
const rowOneArray = [rowOneImg1, rowOneImg2, rowOneImg3, rowOneImg4, rowOneImg5];
const rowTwoArray = [rowTwoImg1, rowTwoImg2, rowTwoImg3, rowTwoImg4, rowTwoImg5];
const rowThreeArray = [rowThreeImg1, rowThreeImg2, rowThreeImg3, rowThreeImg4, rowThreeImg5];
const rowFourArray = [rowFourImg1, rowFourImg2, rowFourImg3, rowFourImg4, rowFourImg5];
const rowFifthArray = [rowFifthImg1, rowFifthImg2, rowFifthImg3, rowFifthImg4, rowFifthImg5];

//My sentence playback button
const chosenPlaybackButton  = document.querySelector(".chosenPlaybackButton");
//My Reset Button.
const resetButton = document.querySelector(".resetButton");
//My Word playback button
const randomPlaybackButton  = document.querySelector(".randomPlaybackButton");

let buttonOnePressed = false;
let buttonTwoPressed = false;
let buttonThreePressed = false;
let buttonFourPressed = false;
let buttonFivePressed = false;


const allIncrements = [incrementOne, incrementTwo, incrementThree, incrementFour, incrementFive];
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let f = 0;

//this array will house all the text from the subText class associated with each rowArray element.
let sentenceArray = [];

/* Functions
-------------------------------------------------- */
//creating increment functions that take an array, and the button associated with that array, and a col var that decides which
//index place it will be in the sentence array.
function incrementOne(array, button, col){	
	array[4].style.backgroundColor = "#4c4343";
	array[0].style.backgroundColor = "grey";
	wordGenerator(array, 0);
	if(col == 1){
		const className = array[0].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[0] = word.textContent;
	}
	else if(col == 2){
		const className = array[0].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[1] = word.textContent;
	}
	else if(col == 3){
		const className = array[0].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[2] = word.textContent;
	}
	else if(col == 4){
		const className = array[0].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[3] = word.textContent;
	}
	else if(col == 5){
		const className = array[0].className;
		word1 = document.querySelector(`.${className} .subText`)
		word2 = document.querySelector(`.${className} .subText-2`)
		totalWord = `${word1.textContent} ${word2.textContent}`;
		sentenceArray[4] = totalWord;
	}
	console.log(sentenceArray);

}

function incrementTwo(array, button, col){
	array[0].style.backgroundColor = "#4c4343";
	array[1].style.backgroundColor = "grey";
	wordGenerator(array, 1);

	if(col == 1){
		const className = array[1].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[0] = word.textContent;
	}
	else if(col == 2){
		const className = array[1].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[1] = word.textContent;
	}
	else if(col == 3){
		const className = array[1].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[2] = word.textContent;
	}
	else if(col == 4){
		const className = array[1].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[3] = word.textContent;
	}
	else if(col == 5){
		const className = array[1].className;
		word1 = document.querySelector(`.${className} .subText`)
		word2 = document.querySelector(`.${className} .subText-2`)
		totalWord = `${word1.textContent} ${word2.textContent}`;
		sentenceArray[4] = totalWord;
	}
	console.log(sentenceArray);

}

function incrementThree(array, button, col){
	array[1].style.backgroundColor = "#4c4343";
	array[2].style.backgroundColor = "grey";
	wordGenerator(array, 2);

	if(col == 1){
		const className = array[2].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[0] = word.textContent;
	}
	else if(col == 2){
		const className = array[2].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[1] = word.textContent;
	}
	else if(col == 3){
		const className = array[2].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[2] = word.textContent;
	}
	else if(col == 4){
		const className = array[2].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[3] = word.textContent;
	}
	else if(col == 5){
		const className = array[2].className;
		word1 = document.querySelector(`.${className} .subText`)
		word2 = document.querySelector(`.${className} .subText-2`)
		totalWord = `${word1.textContent} ${word2.textContent}`;
		sentenceArray[4] = totalWord;
	}
	console.log(sentenceArray);
}

function incrementFour(array, button, col){
	array[2].style.backgroundColor = "#4c4343";
	array[3].style.backgroundColor = "grey";
	wordGenerator(array, 3);

	if(col == 1){
		const className = array[3].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[0] = word.textContent;
	}
	else if(col == 2){
		const className = array[3].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[1] = word.textContent;
	}
	else if(col == 3){
		const className = array[3].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[2] = word.textContent;
	}
	else if(col == 4){
		const className = array[3].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[3] = word.textContent;
	}
	else if(col == 5){
		const className = array[3].className;
		word1 = document.querySelector(`.${className} .subText`)
		word2 = document.querySelector(`.${className} .subText-2`)
		totalWord = `${word1.textContent} ${word2.textContent}`;
		sentenceArray[4] = totalWord;
	}
	console.log(sentenceArray);
}

function incrementFive(array, button, col){
	array[3].style.backgroundColor = "#4c4343";
	array[4].style.backgroundColor = "grey";
	wordGenerator(array, 4);
	
	if(col == 1){
		const className = array[4].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[0] = word.textContent;
	}
	else if(col == 2){
		const className = array[4].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[1] = word.textContent;
	}
	else if(col == 3){
		const className = array[4].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[2] = word.textContent;
	}
	else if(col == 4){
		const className = array[4].className;
		word = document.querySelector(`.${className} .subText`)
		sentenceArray[3] = word.textContent;
	}
	else if(col == 5){
		const className = array[4].className;
		word1 = document.querySelector(`.${className} .subText`)
		word2 = document.querySelector(`.${className} .subText-2`)
		totalWord = `${word1.textContent} ${word2.textContent}`;
		sentenceArray[4] = totalWord;
	}
	console.log(sentenceArray);
}

function wordGenerator(array, index) {
    const className = array[index].className;
	word = document.querySelector(`.${className} .subText`);
	word2 = document.querySelector(`.${className} .subText-2`);
	if(word&&word2){
		totalWord = `${word.textContent} ${word2.textContent}`;
		speakNow(totalWord);
	}
	else{    
		speakNow(word.textContent);
	}
}

function speakNow(string) {
// Create a new speechSynthesis object
	const synth = window.speechSynthesis;
// 	Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
// 	Actually speak the text
	synth.speak(utterThis);
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
// let textToSpeak = 'This is the text string that you will generate with your script';
}

// Function to set background color
function setBackgroundColor(elements, color) {
    elements.forEach(element => {
        element.style.backgroundColor = color;
    });
}


/* Event Listeners
-------------------------------------------------- */

incrementButtonOne.addEventListener("click", e => {
    allIncrements[a](rowOneArray, incrementButtonOne, 1);  // Call the function at index a from the funcs array
    a++;  // Increment the index a
    if (a >= allIncrements.length){a = 0;}   // Reset a to 0 if it exceeds the array length
});

incrementButtonTwo.addEventListener("click", e => {
    allIncrements[b](rowTwoArray, incrementButtonTwo, 2);  // Call the function at index b from the funcs array
    b++;  // Increment the index b
    if (b >= allIncrements.length){b = 0;}  // Reset b to 0 if it exceeds the array length
});

incrementButtonThree.addEventListener("click", e => {
    allIncrements[c](rowThreeArray, incrementButtonThree, 3);  // Call the function at index c from the funcs array
    c++;  // Increment the index c
    if (c >= allIncrements.length){c = 0;}  // Reset c to 0 if it exceeds the array length
});

incrementButtonFour.addEventListener("click", e => {
    allIncrements[d](rowFourArray, incrementButtonFour, 4);  // Call the function at index d from the funcs array
    d++;  // Increment the index d
    if (d >= allIncrements.length){d = 0;}  // Reset d to 0 if it exceeds the array length
});

incrementButtonFive.addEventListener("click", e => {
    allIncrements[f](rowFifthArray, incrementButtonFive, 5);  // Call the function at index e from the funcs array
    f++;  // Increment the index e
    if (f >= allIncrements.length){f = 0;}  // Reset e to 0 if it exceeds the array length
});

chosenPlaybackButton.addEventListener("click",function(){
	const fullSentence = sentenceArray.join(" ");
	if(fullSentence.length > 0){
		speakNow(fullSentence);
	}
	else{
		alert("No word selected.")
	}
	console.log(fullSentence);
});

resetButton.addEventListener("click", function(){
	sentenceArray.splice(0,5)
	// Setting the background color for all image elements
	setBackgroundColor(rowOneArray, "#4c4343");
	setBackgroundColor(rowTwoArray, "#4c4343");
	setBackgroundColor(rowThreeArray, "#4c4343");
	setBackgroundColor(rowFourArray, "#4c4343");
	setBackgroundColor(rowFifthArray, "#4c4343");
	//setting the iteration vars (a,b,c,d,f) to 0 so that the position resets as well
	a = 0;
	b = 0;
	c = 0;
	d = 0;
	f = 0;
});

//event listener for random button
randomPlaybackButton.addEventListener("click", function(){
	let randomNum = Math.floor(Math.random() * 5) + 1;
	let rowClass1 = rowOneArray[randomNum];
	let rowClass2 = rowTwoArray[randomNum];
	let rowClass3 = rowThreeArray[randomNum];
	let rowClass4 = rowFourArray[randomNum];
	let rowClass5 = rowFifthArray[randomNum];

	const classOne = rowClass1.className;
	const classTwo = rowClass2.className;
	const classThree = rowClass3.className;
	const classFour = rowClass4.className;
	const classFive = rowClass5.className;
	subText = document.querySelector(`.${classFive} .subText`);
	subTextTwo = document.querySelector(`.${classFive} .subText-2`);
	totalSubText = `${subText.textContent} ${subTextTwo.textContent}`;


	wordOne = document.querySelector(`.${classOne} .subText`)
	sentenceArray[0] = wordOne.textContent;
	
	wordTwo = document.querySelector(`.${classTwo} .subText`)
	sentenceArray[1] = wordTwo.textContent;
	
	wordThree = document.querySelector(`.${classThree} .subText`)
	sentenceArray[2] = wordThree.textContent;

	wordFour = document.querySelector(`.${classFour} .subText`)
	sentenceArray[3] = wordFour.textContent;

	sentenceArray[4] = totalSubText;

	const fullSentence = sentenceArray.join(" ");
	speakNow(fullSentence);
	sentenceArray.splice(0,5)

});
