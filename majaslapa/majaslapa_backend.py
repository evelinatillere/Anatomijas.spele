# from flask import Flask, request, jsonify
# from flask import render_template
# import mysql.connector
# import psycopg2

# app = Flask(__name__)

# @app.route("/data", methods=["POST"])
# def receive_text():
#     data = request.get_json()
#     if not data:
#         return jsonify({"error": "No JSON received"}), 400

#     # 1. Connect to database
#     db = mysql.connector.connect(
#         host="localhost",
#         user="root",
#         password="Gramatalaba01020304.",
#         database="majaslapa_1"
#     )
#     cursor = db.cursor()

#     # 2. Prepare SQL
#     sql = """
#         INSERT INTO lietotaji (vards, lietotajvards, parole, e_pasts)
#         VALUES (%s, %s, %s, %s)
#     """

#     # 3. Extract values from JSON
#     values = (
#         data["vards"],
#         data["lietotajvards"],
#         data["parole"],  # hash password
#         data["e_pasts"]
#     )

#     # 4. Execute & commit
#     cursor.execute(sql, values)
#     db.commit()

#     cursor.close()
#     db.close()

#     return jsonify({"status": "ok", "inserted": data}), 201

# @app.route("/", methods=["GET"])
# def receive():
#     return render_template("majaslapa_1.html")

# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, request, jsonify, render_template
from werkzeug.security import generate_password_hash
import mysql.connector
import os
from werkzeug.security import check_password_hash

app = Flask(__name__)

# ---- DATABASE CONFIG ----
DB_CONFIG = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "Gramatalaba01020304.",
    "database": "majaslapa_1"
}

# ---- ROUTES ----

@app.route("/", methods=["GET"])
def home():
    return render_template("majaslapa_1.html")
@app.route( "/register", methods=["POST"])
def register():

    data = request.get_json()
    
    if not data:
        return jsonify({"error": "Invalid JSON"}), 400

    required = ["vards", "lietotajvards", "parole", "e_pasts"]
    if not all(field in data for field in required):
        return jsonify({"error": "Missing fields"}), 400
    
    db = None
    cursor = None

    try:
        db = mysql.connector.connect(**DB_CONFIG)
        cursor = db.cursor()

        sql = """
            INSERT INTO lietotaji (vards, lietotajvards, parole, e_pasts)
            VALUES (%s, %s, %s, %s)
        """

        values = (
            data["vards"],
            data["lietotajvards"],
            generate_password_hash(data["parole"]),
            data["e_pasts"]
        )

        cursor.execute(sql, values)
        db.commit()

    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500
    
    except mysql.connector.IntegrityError:
        return jsonify({"error": "User already exists"}), 409

    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()

    return jsonify({"status": "ok"}), 201

@app.route( "/log_in", methods=["POST"])
def log_in():

    data_log = request.get_json()
    
    if not data_log:
        return jsonify({"error": "Invalid JSON"}), 400

    required = ["lietotajvards_log", "parole_log"]
    if not all(field in data_log for field in required):
        return jsonify({"error": "Missing fields"}), 400
    
    db = None
    cursor = None

    try:
        db = mysql.connector.connect(**DB_CONFIG)
        cursor = db.cursor()

        values_log = (
            data_log["lietotajvards_log"],
            generate_password_hash(data_log["parole_log"]),
        )

        cursor.execute(
            "SELECT parole FROM lietotaji WHERE lietotajvards = %s",
            (data_log["lietotajvards_log"],)
        )
        myresult = cursor.fetchone()

        if not myresult or not check_password_hash(myresult[0], data_log["parole_log"]):
            return jsonify({"error": "Invalid credentials"}), 401
        

        for x in myresult:
            print(x)
        print(myresult)

    except mysql.connector.IntegrityError:
        return jsonify({"error": "User already exists"}), 409
    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()

    return jsonify({"status": "ok"}), 201

# ---- ENTRY POINT ----
if __name__ == "__main__":
    app.run(
        host="0.0.0.0",  
        port=5000,
        debug=False      
    )

    app.run(host="0.0.0.0", port=5000, debug=True)