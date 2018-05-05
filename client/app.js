const add = require('./adder.js');

class ViewManager {

	conectEventHandlers() {
		//wire up event handler for form submit
		//console.log(this); 
		document.getElementById('form-numbers')
			.addEventListener('submit', this.onSubmit.bind(this));
	}

	onSubmit(event) {

		// block form from actually submitting
		event.preventDefault();

		//grad the number values as strings
		let num1 = document.getElementById('input-num1').value;
		let num2 = document.getElementById('input-num2').value;

		//cast the strings to ints
		num1 = parseInt(num1, 10);
		num2 = parseInt(num2, 10);

		// add the numbers
		const sum = add(num1, num2);

		//output
		//alert(sum); sssssscccccxxxxsss
		this.renderSum(sum);
		//console.log(this);
	}
	
	renderSum(sum) {
		document.getElementById('sum').textContent = sum;
	}

}

const viewManager = new ViewManager();
viewManager.conectEventHandlers();
