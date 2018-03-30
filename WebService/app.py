#!/usr/bin/python
#-*- coding: utf-8 -*-

from flask import Flask, render_template
from flask_cors import CORS
from views.usuario import usuario
from bd import banco_de_dados

app = Flask(__name__)

# configura cross-origin
CORS(app) 

# configura componente usuario
app.register_blueprint(usuario, url_prefix="/usuario")

# configura banco de dados
banco_de_dados.configura(app)

# configura url principal  "/"
@app.route('/')
def index():
    return render_template('index.html',nome="AppSangue") 


# vim: set ts=4 sw=4 sts=4 expandtab:
