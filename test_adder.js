const add = require('./adder.js').add;

class TestSuite {
	runTests(){
		this.testAddPositiveNumbers();
		this.testAddNegativeNumbers();
		this.testAddPositiveAndNegativeNumbers();
	}

	assertEquals(a, b) {
		return a === b;
	}

	testAddPositiveNumbers(){
		const result = this.assertEquals(add(5, 7), 12);
		console.log(result,"testAddPositiveNumbers")
	}

	testAddNegativeNumbers(){
		const result = this.assertEquals(add(-5, -7), -12);
		console.log(result,"testAddNegativeNumbers")
	}

	testAddPositiveAndNegativeNumbers() {
		console.log(add(5, -7) === -2, 'testAddPositiveAndNegativeNumbers')
	}
}

const testSuite = new TestSuite();
testSuite.runTests();

// console.log(add(5, 7) === 12, "add positive numbers");
// console.log(add(-5, -7) === -12, "add negative numbers");
// console.log(add(5, -7) === -2, "add positive and negative numbers");
