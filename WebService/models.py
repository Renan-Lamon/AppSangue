#!/usr/bin/python
#-*- coding: utf-8 -*-
from bd.banco_de_dados import BaseModel 
from peewee import *
import datetime 



class Hemocentro(BaseModel):
    cod = AutoField()
    nome = CharField()
    atendimento = CharField(null=True)
    endereco = CharField(null=True)
    

class EstoqueSangue(BaseModel):
    hemocentro = ForeignKeyField(Hemocentro, backref='estoqueSangues')
    tipoSangue = CharField()
    situacao = CharField(default="Esgotado")
    situacaoPorcentagem = IntegerField(default=0)

class Usuario(BaseModel):
    email = CharField(unique=True)
    nome = CharField()
    tipoSanguineo = CharField(null=True)
    hemocentroFavorito = ForeignKeyField(Hemocentro, backref='usuariosQueFavoritaram',null=True)
    senha = CharField(null=True)
    cod = AutoField()
    data_nascimento = DateTimeField(default=datetime.datetime.now)

    def getIdade(self):
        hoje  = datetime.date.today()
        nascimento = self.data_nascimento
        return hoje.year - nascimento.year - ((hoje.month, hoje.day) < (nascimento.month, nascimento.day))


# vim: set ts=4 sw=4 sts=4 expandtab:
