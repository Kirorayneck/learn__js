let num = 266219;
    num = num.toString();
    num = num.split('');
    
	var result = num.reduce (function (a, b) {
	  return a * b;
	});

console.log(result);


let power = result ** 3;
    power = power.toString();

console.log(power.substr(0, 2));