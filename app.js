// დავალება-1:

console.log("დავალება 1:")

function kvaDab (num) {
    var kvadrati = num * num;
    return kvadrati;
    
}

var ricxvi = kvaDab(5);
console.log("კვადრატში აყვანის შემდეგ მიღებული რიცხვი არის " + ricxvi);

//----------------------------------------------

// დავალება-2:

console.log("დავალება 2:")

function discount (a, b) {
    var c = (b/100) * a;
    var d = a - c;
    return d;
}

var sul = discount(1000, 10);
console.log("ფასდაკლების შემდეგ გადასახდელი თანხა არის " + sul); 

//----------------------------------------------

// დავალება-3:

console.log("დავალება 3:")

let x = Math.floor(Math.random ()* 100) +1;
console.log("100-დან შემთხვევითი რიცხვი არის " + x);

//----------------------------------------------

// დავალება-4:

console.log("დავალება 4:")

function symbolCounter(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
    count++;
    }
    return count;
}

var sym = symbolCounter("matarebeli");
console.log("მითითებული სტრინგი შედგება " + sym + " სიმბოლოსგან");

//----------------------------------------------

// დავალება-5:

console.log("დავალება 5:")

function smallestRate (a, b, c, d, e){
    var arr = [a, b, c, d, e];
    var min = Math.min(...arr);
   
	var object = min;
	switch (object) {
	case 6.6742:
		console.log(currencies[0]);
		break;
    case 2.8673:
        console.log(currencies[1]);
        break;
    case 3.3111:
        console.log(currencies[2]);
        break;
    case 0.0957:
        console.log(currencies[3]);
        break;
    case 2.5771:
        console.log(currencies[4]);
        break;
}
	
	return min;
}

const currencies = [
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.6742",
		diffFormated: "0.0202",
		rate: 6.6742,
		name: "სომხური დრამი",
		diff: 0.0202,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.8673",
		diffFormated: "0.0131",
		rate: 2.8673,
		name: "ევრო",
		diff: -0.0131,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "GBP",
		quantity: 1,
		rateFormated: "3.3111",
		diffFormated: "0.0046",
		rate: 3.3111,
		name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
		diff: -0.0046,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "TRY",
		quantity: 1,
		rateFormated: "0.0957",
		diffFormated: "0.0003",
		rate: 0.0957,
		name: "თურქული ლირა",
		diff: 0.0003,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},

	{
		code: "USD",
		quantity: 1,
		rateFormated: "2.5771",
		diffFormated: "0.0078",
		rate: 2.5771,
		name: "აშშ დოლარი",
		diff: 0.0078,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
];

var sR = smallestRate (currencies[0].rate, currencies[1].rate, currencies[2].rate, currencies[3].rate, currencies[4].rate);

console.log(sR);

//----------------------------------------------