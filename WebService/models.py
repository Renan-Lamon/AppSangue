#!/usr/bin/python3
#-*- coding: utf-8 -*-
from bd import banco_de_dados 
from peewee import *
import datetime 


class Usuario(banco_de_dados.BaseModel):
    nome = CharField()
    email = CharField(unique=True)
    tipoSanguineo = CharField()
    hemocentroFavorito = CharField()
    senha = CharField()
    cod = AutoField()
    data_nascimento = DateTimeField(default=datetime.datetime.now)

    def getIdade(self):
        hoje  = datetime.date.today()
        nascimento = self.data_nascimento
        return hoje.year - nascimento.year - ((hoje.month, hoje.day) < (nascimento.month, nascimento.day))



# vim: set ts=4 sw=4 sts=4 expandtab:

