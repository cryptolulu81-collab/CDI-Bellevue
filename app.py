from flask import Flask, render_template, request, redirect, url_for, session
import os

app = Flask(__name__)


@app.route('/')
def accueil():
    return render_template('index.html')

@app.route('/catalogue')
def catalogue():
    return render_template('catalogue.html')

@app.route('/about')
def about():
    return render_template('about.html')


if __name__ == '__main__':
    app.run(debug=True)