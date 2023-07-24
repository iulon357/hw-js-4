// დავალება-1:

function kvaDab (num) {
    var kvadrati = num * num;
    return kvadrati;
    
}

var ricxvi = kvaDab(5);
console.log("კვადრატში აყვანის შემდეგ მიღებული რიცხვი არის " + ricxvi);

//----------------------------------------------

// დავალება-2:

function discount (a, b) {
    var c = (b/100) * a;
    var d = a - c;
    return d;
}

var sul = discount(1000, 10);
console.log("ფასდაკლების შემდეგ გადასახდელი თანხა არის " + sul); 

//----------------------------------------------

// დავალება-3:

let x = Math.floor(Math.random ()* 100) +1;
console.log("100-დან შემთხვევითი რიცხვი არის " + x);

//----------------------------------------------

// დავალება-4:

function symbolCounter(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
    count++;
    }
    return count;
}

var sym = symbolCounter("matarebeli");
console.log(sym);

//----------------------------------------------

