#!/usr/bin/python
#-*- coding: utf-8 -*-

from flask import Blueprint, render_template, jsonify, request
from WebService.models import Hemocentro,EstoqueSangue
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

hemocentro = Blueprint('hemocentro', __name__, template_folder='templates')

@hemocentro.route('/')
def hemocentros():
    hemocentros = [ h for h in Hemocentro.select().dicts()]
    return jsonify(hemocentros)
    

@hemocentro.route('/estoque/<cod>/')
def login(cod):
    try:
        estoques = EstoqueSangue.select().where(EstoqueSangue.hemocentro==cod).order_by(EstoqueSangue.id)
        estoques = [ e for e in estoques.dicts()]
        return jsonify(estoques)
    except DoesNotExist:
        return jsonify({"error":"Usuário/Senha incorreta"})
    


# vim: set ts=4 sw=4 sts=4 expandtab:

