//UI
const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password= document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');

//Event Listener [Method 1]
// form.addEventListener('submit', function(e){
// 	e.preventDefault();

// 	if(username.value === ''){
// 		showerror(username,'Username is required');
// 	}
// 	else{
// 		showsuccess(username);
// 	}

// 	if(email.value === ''){
// 		showerror(email,'Email is required');
// 	}else if(!validateEmail(email.value)){
// 		showerror(email,'Email in not valid');
// 	}else{
// 		showsuccess(email);
// 	}

// 	if(password.value ===''){
// 		showerror(password,'Password is required');
// 	}else{
// 		showsuccess(password);
// 	}

// 	if(cfmpassword.value ===''){
// 		showerror(cfmpassword,'Password is required');
// 	}else if(password.value !== cfmpassword.value){
// 		showerror(cfmpassword,'Password must be same');
// 	}else{
// 		showsuccess(cfmpassword);
// 	}

// });


//Checking Email Format [Regular Expression]
// function validateEmail(email){
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


//Error Function
// function showerror(input,message){
// 	const formcontrol=input.parentElement;
// 	formcontrol.className="form-control error";

// 	const small = formcontrol.querySelector('small');
// 	small.innerText = message;
// }


//Success Function
// function showsuccess(input){
// 	const formcontrol=input.parentElement;
// 	//formcontrol.className="form-control success";
// 	formcontrol.classList.remove('error');
// 	formcontrol.classList.add('success');
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Method 2//

//Error Function
function showerror(input,message){
	const formcontrol=input.parentElement;
	formcontrol.className="form-control error";

	const small = formcontrol.querySelector('small');
	small.innerText = message;
}


//Success Function
function showsuccess(input){
	const formcontrol=input.parentElement;
	//formcontrol.className="form-control success";
	formcontrol.classList.remove('error');
	formcontrol.classList.add('success');
}


//Check Require Function
function checkrequired(inputarrs){
	//console.log(inputarrs);

	inputarrs.forEach(function(inputarr){
		//console.log(inputarr);
		//console.log(inputarr.value);
		//console.log(inputarr.id);

		if(inputarr.value ===''){
			showerror(inputarr,`${getfieldname(inputarr)} is required!`);
		}else{
			showsuccess(inputarr);
		}
	})
}


//Check Input Length
function checklength(input,min,max){
	if(input.value.length < min){
		showerror(input,`${getfieldname(input)} must be at least ${min} characters!`);
	}else if(input.value.length > max){
		showerror(input,`${getfieldname(input)} must be less than ${max} characters!`);
	}else{
		showsuccess(input);
	}
}


//Check Email Valid
function checkemail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
    	showsuccess(input);
    }else{
    	showerror(input,'Email is not valid!');
    }
}


//Check Password Match
function checkpasswordmatch(input1,input2){
	if(input1.value !== input2.value){
		showerror(input2,"Password do not match");
	}
}


//Get Field Name
function getfieldname(inputarr){
	return inputarr.id.charAt(0).toUpperCase() + inputarr.id.slice(1);
}


//Event Listener(Method 2)
form.addEventListener('submit',function(e){
	e.preventDefault();
	//console.log("hay");

checkrequired([username,email,password,confirmpassword]);

checklength(username,3,15);
checklength(password,6,25);

checkemail(email);

checkpasswordmatch(password,confirmpassword);
});