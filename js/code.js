var days = 1;
var money = 0;
var pots = 5;
var boats = 1;
var last = "good";
var potOut = 0;
var potIn = 0;

function nextday() {
	days = days + 1;
	document.getElementById("days").innerHTML = days;

	if (BadOrGood === "good") {
		 money = money + potIn * 2;
		 money = money + potOut * 5;

		document.getElementById("potIn").innerHTML = potIn;
		document.getElementById("potOut").innerHTML = potOut;
		document.getElementById("money").innerHTML = money;
	   } else {
		   money = money + potIn * 5;
		 pots = pots - potOut;
		potOut = 0;

		document.getElementById("pots").innerHTML = pots;
		document.getElementById("money").innerHTML = money;
		document.getElementById("potIn").innerHTML = potIn;
		document.getElementById("potOut").innerHTML = potOut;
	}

}

function BadOrGood() {
	var w =(Math.round(Math.random()*5))+1 ;
	if (w === 1 || w === 2 || w === 3) {
		last = "good";
		return "good";
	} else if (w === 5 || w === 6) {
		last = "bad";
		return "bad";

	} else {
		return last;
	}

}


function buypot() {
	if (money >= 5 & pots < boats * 10) {
		money = money - 5;
		pots = pots + 1;
		document.getElementById("money").innerHTML = money;
		document.getElementById("pots").innerHTML = pots;

	}
}

function buyboat() {
	if (money >= 100) {
		money = money - 100;
		boats = boats + 1;
		document.getElementById("money").innerHTML = money;
		document.getElementById("boats").innerHTML = boats;

	}
}

function sellpot() {
	if (pots > 0) {
		money = money + 2;
		pots = pots - 1;
		document.getElementById("money").innerHTML = money;
		document.getElementById("pots").innerHTML = pots;

	}
}

function sellboat() {
	if (boats > 0) {
		money = money + 50;
		boats = boats - 1;
		document.getElementById("money").innerHTML = money;
		document.getElementById("boats").innerHTML = boats;

	}
}

function putpotin() {
	if (potIn + potOut !== pots) {
		potIn = potIn + 1;
		document.getElementById("potIn").innerHTML = potIn;

	}
}

function putpotout() {
	if (potIn + potOut !== pots) {
		potOut = potOut + 1;
		document.getElementById("potOut").innerHTML = potOut;

	}
}


function takepotin() {
	if (potIn + potOut !== 0) {
		potIn = potIn - 1;
		document.getElementById("potIn").innerHTML = potIn;

	}
}

function takepotout() {
	if (potIn + potOut !== 0) {
		potOut = potOut - 1;
		document.getElementById("potOut").innerHTML = potOut;

	}
}

// Inctement by 10


function buypotten() {
	if (money >= 50 & pots < boats * 10 - 9) {
		money = money - 50;
		pots = pots + 10;
		document.getElementById("money").innerHTML = money;
		document.getElementById("pots").innerHTML = pots;

	}
}

function buyboatten() {
	if (money >= 1000) {
		money = money - 1000;
		boats = boats + 10;
		document.getElementById("money").innerHTML = money;
		document.getElementById("boats").innerHTML = boats;

	}
}

function sellpotten() {
	if (pots > 9) {
		money = money + 20;
		pots = pots - 10;
		document.getElementById("money").innerHTML = money;
		document.getElementById("pots").innerHTML = pots;

	}
}

function sellboatten() {
	if (boats > 9) {
		money = money + 500;
		boats = boats - 10;
		document.getElementById("money").innerHTML = money;
		document.getElementById("boats").innerHTML = boats;

	}
}

function putpotinten() {
	if (potIn + potOut <= pots - 10) {
		potIn = potIn + 10;
		document.getElementById("potIn").innerHTML = potIn;

	}
}

function putpotoutten() {
	if (potIn + potOut <= pots - 10) {
		potOut = potOut + 10;
		document.getElementById("potOut").innerHTML = potOut;

	}
}


function takepotinten() {
	if (potIn + potOut >= 10) {
		potIn = potIn - 10;
		document.getElementById("potIn").innerHTML = potIn;

	}
}

function takepotoutten() {
	if (potIn + potOut >= 10) {
		potOut = potOut - 10;
		document.getElementById("potOut").innerHTML = potOut;

	}
}
