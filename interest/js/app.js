const terms = document.getElementById('years');
const bubble = document.querySelector('.bubble');

const loanform = document.getElementById('loan-form');
const loader = document.getElementById('loading');
const resultel = document.getElementById('result');

//Event listener
terms.addEventListener('input',function(){
	const val = terms.value;
	bubble.textContent = val > 1 ? `${val} Months` : `${val} Month`;
});


loanform.addEventListener('submit',function(e){
	//console.log('hay');

	//hide result
	resultel.style.display = "none";

	//show loader
	loader.style.display = "block";
	setTimeout(calculaterresult,1000);
	e.preventDefault();
});

//Calculater Result
function calculaterresult(){
	//console.log('calculating...');

	//UI
	const amount = document.getElementById('amount');
	const interest = document.getElementById('interest');

	const monthlypayment = document.getElementById('monthly-payment');
	const totalinterest = document.getElementById('total-interest');
	const totalpayment = document.getElementById('total-payment');

	const getprincipal = parseFloat(amount.value);
	const getinterest = parseFloat(interest.value)/12;
	const getterm = parseFloat(terms.value);
	//console.log(getterm);

	const monthly = Math.round((getprincipal * (getterm * getinterest))/100);
	//console.log(monthly);

	if(monthly){
		monthlypayment.value=((getprincipal+monthly)/getterm).toFixed(2);
		totalinterest.value=monthly.toFixed(2);
		totalpayment.value=(monthlypayment.value*getterm).toFixed(2);


		// hide loader
		loading.style.display="none";

		// show result
		resultel.style.display="block";
	}else{
		 //console.log("please check your number");
		 showerror("Please check your number");
	}
}
//show error
function showerror(message){

//hide loader
loader.style.display ="none";

//create element
const errordiv = document.createElement('div');

//add class
errordiv.className ='alert alert-danger';

//add text node
errordiv.appendChild(document.createTextNode(message));
//console.log(errordiv);

//getelements
const card = document.querySelector('.card');
const heading = document.getElementById('heading');

//insert error above heading(up,down)
card.insertBefore(errordiv,heading);

//clear errordiv after display
setTimeout(clearerror,2000);
}

//clear error
function clearerror(){
	document.querySelector('.alert').remove();
}
