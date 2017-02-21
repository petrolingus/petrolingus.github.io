function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var katakana = ["あ",　"い", "う", "え", "お",
				"か", "き", "く", "け", "こ",
				"さ", "し", "す", "せ", "そ",
				"た", "ち", "つ", "て", "と",
				"な", "に", "ぬ", "ね", "の",
				"は", "ひ", "ふ", "へ", "ほ",
				"ま", "み", "む", "め", "も",
				"ら", "り", "る", "れ", "ろ",
				"わ", "を", "ん", "や", "ゆ", "よ"];		

var rndSym = getRandomInt(0, 45);
symbol.innerHTML = katakana[rndSym];

function checkAnswer(KatakanaChar, id) {
	//alert(0);
	if(KatakanaChar　== symbol.innerHTML) {
		while(id == rndSym) {
			rndSym = getRandomInt(0, 45);
		}
		symbol.innerHTML = katakana[rndSym];
		enter.value = "";
	} 
}


var inputValue;
enter.oninput = function() {
	inputValue = enter.value;
			
	switch (inputValue) {
		case "a": case "а": checkAnswer("あ", 0); break;
		case "i": case "и": checkAnswer("い", 1); break;
		case "u": case "у": checkAnswer("う", 2); break;
		case "e": case "э": checkAnswer("え", 3); break;
		case "o": case "о": checkAnswer("お", 4); break;
		
		case "ka": case "ка": checkAnswer("か", 5); break;
		case "ki": case "ки": checkAnswer("き", 6); break;
		case "ku": case "ку": checkAnswer("く", 7); break;
		case "ke": case "кэ": checkAnswer("け", 8); break;
		case "ko": case "ко": checkAnswer("こ", 9); break;
		
		
		case "sa": case "са": checkAnswer("さ", 10); break;
		case "si": case "си": checkAnswer("し", 11); break;
		case "su": case "су": checkAnswer("す", 12); break;
		case "se": case "сэ": checkAnswer("せ", 13); break;
		case "so": case "со": checkAnswer("そ", 14); break;
		
		case "ta": case "та": checkAnswer("た", 15); break;
		case "ti": case "ти": checkAnswer("ち", 16); break;
		case "tu": case "ту": case "цу": checkAnswer("つ", 17); break;
		case "te": case "тэ": checkAnswer("て", 18); break;
		case "to": case "то": checkAnswer("と", 19); break;
		
		case "na": case "на": checkAnswer("な", 20); break;
		case "ni": case "ни": checkAnswer("に", 21); break;
		case "nu": case "ну": checkAnswer("ぬ", 22); break;
		case "ne": case "нэ": checkAnswer("ね", 23); break;
		case "no": case "но": checkAnswer("の", 24); break;
		
		case "ha": case "ха": checkAnswer("は", 25); break;
		case "hi": case "хи": checkAnswer("ひ", 26); break;
		case "hu": case "ху": case "фу": checkAnswer("ふ", 27); break;
		case "he": case "хэ": checkAnswer("へ", 28); break;
		case "ho": case "хо": checkAnswer("ほ", 29); break;
		
		case "ma": case "ма": checkAnswer("ま", 30); break;
		case "mi": case "ми": checkAnswer("み", 31); break;
		case "mu": case "му": checkAnswer("む", 32); break;
		case "me": case "мэ": checkAnswer("め", 33); break;
		case "mo": case "мо": checkAnswer("も", 34); break;
		
		case "ra": case "ра": checkAnswer("ら", 35); break;
		case "ri": case "ри": checkAnswer("り", 36); break;
		case "ru": case "ру": checkAnswer("る", 37); break;
		case "re": case "рэ": checkAnswer("れ", 38); break;
		case "ro": case "ро": checkAnswer("ろ", 39); break;
		
		case "wa": case "ва": checkAnswer("わ", 40); break;
		case "wo": case "во": checkAnswer("を", 41); break;
		case "n": case "н": checkAnswer("ん", 42); break;
		case "ya": case "я": checkAnswer("や", 43); break;
		case "yu": case "ю": checkAnswer("ゆ", 44); break;
		case "yo": case "ё": checkAnswer("よ", 45); break;
	}
};

/*
		TODO:
		-Error checking is need fix
		-Checking answer is need fix
		-Create data base
	*/