const add = require('./adder.js');

class ViewManager {

	conectEventHandlers() {
		//wire up event handler for form submit
		//console.log(this); 
		var button1 = document.getElementsByName('button1')
		for (var i=0;i<button1.length;i++){
			button1[i].addEventListener("click", this.onSubmit.bind(this));
		}
		var button2 = document.getElementsByName('button2')
		for (var i=0;i<button2.length;i++){
			button2[i].addEventListener("click", this.onSubmit2.bind(this));
		}
//		aTags[1].addEventListener('click', this.onSubmit.bind(this));
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
		//alert(sum); testtesttest
		this.renderSum(sum);
		//console.log(this);
	}
		

		onSubmit2(event) {

		// block form from actually submitting
		event.preventDefault();

		var i1 = document.createElement('input');
		i1.setAttribute("type","text"); 
		var br = document.createElement('br');
		var list = document.getElementById('list');
		list.appendChild(i1);
		list.appendChild(br);
	}


	renderSum(sum) {
		document.querySelector('.sum').textContent = sum;
	}

}

const viewManager = new ViewManager();
viewManager.conectEventHandlers();
