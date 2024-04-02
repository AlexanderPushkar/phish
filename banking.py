from flask import Flask, render_template, request, redirect
import json
import requests

app = Flask(__name__)
	




@app.route("/")
def home():
	return render_template('index.html')

@app.route("/", methods=['POST'])
def home_post():
	name = request.form['username']
	password = request.form['password']

	name = name.encode('utf-8')
	password = password.encode('utf-8')
	url = 'http://127.0.0.1:2222'

	data = {
		"submit":"Sign in",
		"username":name,
		"password":password
	}
	response = requests.post(url, data=data, auth=(name,password))
	print(response.content)
	if ("You Logged In" in (response.content).decode('utf-8')):
		return redirect("http://127.0.0.1:2222", code=302)
	return render_template('indexFail.html')

@app.route("/managment")
def management():
	return render_template('management.html')

if __name__ == "__main__":
	app.run()
	#return "<p>TEAM 12: Alexander Pushkar & Anixon Soney<p>"

