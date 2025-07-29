import flask
from flask import Flask, url_for, redirect, render_template
import sqlite3

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


# ERROR HANDLING

# Not Found
@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

# Internal server error
@app.errorhandler(500)
def internal_server_error(e):
    return render_template("500.html"), 500

if __name__ == "__main__":
    app.run()