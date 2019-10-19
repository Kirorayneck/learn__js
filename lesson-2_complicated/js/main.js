let num = 266219;
    num = num.toString();

let array = num.split(''),
  i = array.length,
  result = 1;
  while (i > 0)
  result *= array[--i];

console.log(result);

let power = result ** 3;
    power = power.toString();

console.log(power.substr(0, 2));