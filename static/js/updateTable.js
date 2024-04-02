function logSubmit(event) {
  log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);

function updateTables(signIn, username, password) {
	$.ajax({
  		url: "/api/getWeather",
  		data: {
    		zipcode: 97201
  		},
  		success: function( result ) {
    		$( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  		}
		});
	
}

updateTables(0, 0, 0);
