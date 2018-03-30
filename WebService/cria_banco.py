#!/usr/bin/python
#-*- coding: utf-8 -*-

from banco_de_dados import db
from usuario.models import Usuario
from datetime import datetime


if __name__ == "__main__":
    db.connect()

    # cria tabelas
    db.create_tables([Usuario])

    # cria dados iniciais
    renan, criado = Usuario.get_or_create(
        email="renan@hotmail",
        data_nascimento= datetime(1998,1,1), 
        nome="Renan Lamon",
        hemocentroFavorito = u"Hospital Evangélico",
        tipoSanguineo = "A+",
        cod = 1,
        senha = "123"
    )
    renan.save()
	
    wan, criado = Usuario.get_or_create(
        email="wan@gmail",
        data_nascimento = datetime(1986,1,20),
        nome="Wancharle",
        hemocentroFavorito = "Santa Casa",
        tipoSanguineo = "A+",
        cod = 2,
        senha = "123"
    )
    wan.save()
	



# vim: set ts=4 sw=4 sts=4 expandtab:

