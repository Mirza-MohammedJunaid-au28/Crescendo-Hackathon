from flask import Flask, render_template,request, redirect, url_for,jsonify, session
from flask_cors import CORS

app = Flask(__name__, static_folder="public", static_url_path="/public")
CORS(app) 

@app.route('/data',methods=['GET','POST'])
def data():
    if request.method == 'GET':
        return jsonify({'msg' : "Hello How are you?"})
    elif request.method == 'POST':
        data = request.get_json()
        print(data['title'])
        print(data['body'])

        return jsonify({'msg' : "Hello How are you?"})

if __name__ == "__main__":
    app.run(debug=True)