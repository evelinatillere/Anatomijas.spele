 #import json
#from flask import Flask, request, jsonify # type: ignore

#print("Hello World!")

## some JSON:
#x = '{ "name":"John", "age":30, "city":"New York"}'

## parse x:
#y = json.loads(x)
#print(y["age"])

#app = Flask(__name__)

#text = {}

#@app.route("/data", methods=["POST"])
#def receive_text():
    #text = request.get_json()
    #print(text)  # JSON as Python dict
    #return jsonify({"status": "ok", "received": text})

#if __name__ == "__main__":
    ## Test the route without running a real server
    #with app.test_client() as client:
        #data = {"vards": "Maija", "lietotajvards": "Maija_kruze", "parole": "vesma01234.", "e_pasts": "Maija_Kruze@gmail.com"}
        #response = client.post("/data", json=data)
        #print(response.json)  # prints: {'status': 'ok', 'received': {...}}

#import mysql.connector

#majaslapa_1 = mysql.connector.connect(
  #host="localhost",
  #user="root",
  #password="Gramatalaba01020304.",
  #database="majaslapa_1"
#)

#mycursor = majaslapa_1.cursor()

#sql = "INSERT INTO lietotaji (vards, lietotajvards, parole, e_pasts) VALUES (%s, %s, %s, %s)"
#val = ('liva', 'liva_bosa', 'majina123.', 'liva_bosa@inbox.lv')
#sql = "INSERT INTO lietotaji (vards, lietotajvards, parole, e_pasts) VALUES (%s, %s, %s, %s)"
#val = (
    #data["vards"],
    #data["lietotajvards"],
    #data["parole"],
    #data["e_pasts"]
#)

#mycursor.execute(sql, val)

#majaslapa_1.commit()

#print(mycursor.rowcount, "record inserted.")

from flask import Flask, request, jsonify
from flask import render_template
import mysql.connector
from werkzeug.security import generate_password_hash

app = Flask(__name__)

@app.route("/data", methods=["POST"])
def receive_text():
    data = request.get_json()

    # 1. Connect to database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Gramatalaba01020304.",
        database="majaslapa_1"
    )
    cursor = db.cursor()

    # 2. Prepare SQL
    sql = """
        INSERT INTO lietotaji (vards, lietotajvards, parole, e_pasts)
        VALUES (%s, %s, %s, %s)
    """

    # 3. Extract values from JSON
    values = (
        data["vards"],
        data["lietotajvards"],
        data["parole"],  # hash password
        data["e_pasts"]
    )

    # 4. Execute & commit
    cursor.execute(sql, values)
    db.commit()

    cursor.close()
    db.close()

    return jsonify({"status": "ok", "inserted": data}), 201

@app.route("/", methods=["GET"])
def receive():
    return render_template("majaslapa_1.html")

if __name__ == "__main__":
    app.run(debug=True)
    