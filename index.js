  //prime numbers
function prime(value) {
    var primes = [];
    var amount = 0
    for(var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < value; i++) {
        if(primes[i] === true) {
            console.log(i + " " + primes[i]);
            amount++
        }
    }
    console.log(amount + " primes")
}

// lowest common multiple
function lcm(x, y){
	var a = x
	var b = y
	var e = 1
	if(x > y){
		var x = b
		var y = a
	}
	var c = y * e
	while(c % x !== 0){
		e++
		var c = y * e
	}
	if(c % x == 0){
		console.log(c)
		return;
	}
}

// greatest common factors
function gcf(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
	console.log(x)
  return x;
}

// narcissist numbers
function narnum( value ) {
  var valStr = '' + value;
  var valLength = valStr.length;
  var result = 0;  
  for (var i in valStr) {
    result += Math.pow((+valStr[i]), valLength);
  }
	if(result === value){
		console.log(value + " is a narcissistic number")
	}
	else{
		console.log(value + " isn't a narcissistic number")
	}
    //return result === value;

}

//composite
function comp(value){
  var primes = [];
    for(var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
        if(primes[i] === false) {
            console.log(value + " composite")
      }
      else{
        console.log(value + " prime")
      }
}

//fibinacci numbers
function fibinum(max){
  x = 1
  m = 2
  xm = x + m
	xmdigits = ["12"]
  console.log(1)
  console.log(2)
  while(xm < max){
    xm = x+m
		if(xm > max){
			return xmdigits
		}
    console.log(xm)
    if(x<m){
      var x = xm
    }
    else{
      var m = xm
    }
		xmdigits = xmdigits + xm
  }
}

//find the sum of all the digits in a number
function digitsfunc(num, func){
	numnum = parseInt(num)
	numlength = Math.floor(Math.log10(numnum))+1;

	var digits = num.toString().split('');
	var realDigits = digits.map(Number)

	for(var i=1; i < numlength; i++){
		if(func == `+`)
		digits[0] = parseInt(digits[0]) + parseInt(digits[i])
		if(func == `-`)
		digits[0] = parseInt(digits[0]) - parseInt(digits[i])
		if(func == `*`)
		digits[0] = parseInt(digits[0]) * parseInt(digits[i])
		if(func == `/`)
		digits[0] = parseInt(digits[0]) / parseInt(digits[i])	
	}
	console.log("Sum of digits: " + digits[0])
}

//perfect squares
  //is a certain number a perfect square
function isperfsq(max){
  if (max % Math.sqrt(max) === 0) {
  console.log(max + " is a perfect square");
}
}
//how many perfect sqaures
function perfsq(max){
c = 1
  while(c < max+1){
  if(c % Math.sqrt(c) == 0){
    console.log(c)
    c++
  }
  else{
    c++
  }
  }
  return;
}

//factors
function factors(x){
m = 1
amount = 0
while(m < x+1){
  if(x % m == 0){
    console.log(m)
    amount++
  }
  m++
  }
  console.log(amount + " factors")
  return;
}

//odd or even
function oddorevennum(num){
  if(num % 2 !== 0){
    console.log(num + " is an odd number")
  }
  else{
    console.log(num + " is an even number")
  }
}

//whole numbers
function wholenum(num){
if(num % 1 == 0){
  console.log(num + " is a whole number")
}
else{
  console.log(num + " is not a whole number")
}
}

//natural numbers
function natnum(num){
  if(num > -1){
    console.log(num + " is a natural number")
  }
  else{
    console.log(num + " isn't a natural number")
  }
}

//roman numeral translator
function rnt(number){
    I = "I";
		V = "V"
		X = "X"
		L = "L"
		C = "C"
		D = "D"
		M = "M" 
		
		var Mval = Math.floor(number / 1000)
		m = M.repeat(Mval)
		number = number - m.length * 1000

		var Dval = Math.floor(number / 500)
		d = D.repeat(Dval)
		number = number - d.length * 500

		var Cval = Math.floor(number / 100)
		c = C.repeat(Cval)
		number = number - c.length * 100

		var Lval = Math.floor(number / 50)
		l = L.repeat(Lval)
		number = number - l.length * 50

		var Xval = Math.floor(number / 10)
		x = X.repeat(Xval)
		number = number - x.length * 10

		var Vval = Math.floor(number / 5)
		v = V.repeat(Vval)
		number = number - v.length * 5

		var Ival = Math.floor(number / 1)
		i = I.repeat(Ival)
		number = number - i.length

		allrnt = m + d + c + l + x + v + i
		console.log(allrnt)
/*
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000
*/
}

//exponents
function exponents(num, exponent){
console.log(Math.pow(num, exponent))
}

//prime factorization
function primefac(num){
	var primeFactors = [];
    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }
    
    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
						console.log(num)
        }
    }

    if (num > 2) {
        primeFactors.push(num);
    }
    return primeFactors;
}

//factorials
function factorial(num){
  var i = num
  var num = num - 1
  while(num > 0){    
      var i = i * num
      num = num - 1
  }
  console.log(i)
}


//factorials but instead of multipling it adds
function addorial(num){ 
  var i = num
  var num = num - 1
  while(num > 0){    
      var i = i + num
      num = num - 1
  }
  console.log(i)
}

//factorials but instead of multipling it subtracts
function subtorial(num){
  var i = num
  var num = num - 1
  while(num > 0){    
      var i = i - num
      num = num - 1
  }
  console.log(i)
}

//factorials but instead of multipling it divides
function divorial(num){
  var i = num
  var num = num - 1
  while(num > 0){    
      var i = i / num
      num = num - 1
  }
  console.log(i)
}

//mean
function mean() {
	var args = arguments;
	var numbers = [];

    for(var i=0; i<args.length; i++){
				numbers.push(args[i])
    }
		function sortNumber(a, b) {
  	return a - b;
		}
	
	numbers.sort(sortNumber);
		for(var i=0; i<args.length; i++){
				numbers[0] = numbers[0] + numbers[i]
    }
		console.log(`Mean: ${numbers[0] / numbers.length}`)
}

//median
function median() {
	var args = arguments;
	var numbers = [];

    for(var i=0; i<args.length; i++){
				numbers.push(args[i])
    }
		function sortNumber(a, b) {
  	return a - b;
		}
	
		numbers.sort(sortNumber);
		let median = []
		median[0] = numbers[Math.floor(numbers.length / 2)]
		if(numbers.length % 2 === 0){
			median[0] = numbers[numbers.length / 2 - 1]
			median[1] = numbers[numbers.length / 2]
		}
		console.log("Median: " + median)
}

//mode
function mode() {
	var args = arguments;
	var numbers = [];

    for(var i=0; i<args.length; i++){
				numbers.push(args[i])
    }
		
		var modeMap = {};
    var maxEl = numbers[0], maxCount = 1;
    for(var i = 0; i < numbers.length; i++)
    {
        var el = numbers[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
}

//range
function range() {
	var args = arguments;
	var numbers = [];

    for(var i=0; i<args.length; i++){
				numbers.push(args[i])
    }
		
	function sortNumber(a, b) {
  	return a - b;
	}
	
	numbers.sort(sortNumber);
	console.log(numbers);
	console.log("Range: " + numbers[0] + " to " + numbers[numbers.length - 1])
	console.log(`Difference: ${numbers[numbers.length - 1] - numbers[0]}`)
};

//sort numbers
function sort() {
	var args = arguments;
	var numbers = [];

    for(var i=0; i<args.length; i++){
				numbers.push(args[i])
    }
		
	function sortNumber(a, b) {
  	return a - b;
	}
	
	numbers.sort(sortNumber);
	console.log(numbers);
}

function circle_circumference(radius) {
	console.log("Radius: " + radius)
	circ = 2 * Math.PI * radius
	console.log("Circumference: " + circ)
}

function circle_area(radius){
	console.log("Radius: " + radius)
	area = Math.pow(radius, 2) * Math.PI
	console.log("Area: " + area)
}

function help(){
	console.log(`
prime(value)
lcm(x, y)
gcf(x, y)
narnum(value)
comp(value) // check if a number is composite
fibinum(max)
digitsfunc(num, func) // find the + - * / of all the digits in a number
isperfsq(value) // check if a number is a perfect square
perfsq(max) // how many perfect squares from 0 to max
factors(value)
oddorevennum(num)
wholenum(num)
natnum(num) // check if a number is natural
rnt(number) // translate from decimal to roman numeral
exponents(num, exponent)
primefac(num)
factorial(num)
addorial(num)
subtorial(num)
divorial(num)
mean(values, values)
median(values, values)
mode(values, values)
range(values, values)
sort(values, values)
circle_circumference(radius)
circle_area(radius)
	`)
}

help()