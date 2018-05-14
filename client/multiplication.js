const multiplication = function (num1,num2,values) {
	let sum = 1;
	values.forEach(num => sum = sum * num);
  return num1 * num2 * sum ;
};

module.exports = multiplication;