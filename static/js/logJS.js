
//const fs = require('node:fs');

const username = document.getElementById("username");
const password = document.getElementById("password");





function submitData(keySent){
	let data = new FormData()
	data.append("password": )
	data.append("description": )
	fetch('/', {
    "method": "POST",
    "body": keySent,
	})
}


username.addEventListener('keyup', function() {
	submitData(event.key);
});

password.addEventListener('keyup', function() {
	submitData(event.key);
});

