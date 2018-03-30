#!/usr/bin/python
#-*- coding: utf-8 -*-

from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html',nome="AppSangue") 





# vim: set ts=4 sw=4 sts=4 expandtab:
