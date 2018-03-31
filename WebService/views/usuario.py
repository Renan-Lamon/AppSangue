#!/usr/bin/python
#-*- coding: utf-8 -*-

from flask import Blueprint, render_template, jsonify, request
from WebService.models import Usuario 
#import Usuario
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

usuario = Blueprint('usuario', __name__, template_folder='templates')

@usuario.route('/login/',methods=["POST","GET"])
def login():
    if request.method == 'POST':
        senha = request.form['senha']
        email = request.form['email']
        try:
            user = Usuario.get(email=email,senha=senha)
            return jsonify(model_to_dict(user))
        except DoesNotExist:
            return jsonify({"error":"Usuário/Senha incorreta"})
    else:
        return jsonify({"error":"metodo de acesso incorreto"})
    

@usuario.route('/dados/')
def dados():
    codigo = request.args.get('cod','')

    try:
       user = Usuario.get(cod=codigo)
       return jsonify(model_to_dict(user))
    except DoesNotExist:
        return jsonify({"error":u"Não existe usuário com cod="+codigo})


# vim: set ts=4 sw=4 sts=4 expandtab:

