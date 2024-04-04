const fs = require('fs')
//const fs = require('node:fs');

const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const customPage = document.getElementById("customPage");

usernamef.addEventListener("click", function() {
    
});

password.addEventListener("click", function() {
    
});

submit.addEventListener("click", submitData);

customPage.addEventListener("click", submitData);


function submitData(){
	//alert("TEST");
	const data = "AAAA<br></p>"; 
	fs.appendFileSync('C:\\Users\\18607\\Desktop\\Fraud\\templates\\log.html', data);
}






//let data = "<p>AAA";
//fs.writeFile('C:\\Users\\18607\\Desktop\\Fraud\\templates\\log.html', "a", data);