#!/usr/bin/python
#-*- coding: utf-8 -*-

from banco_de_dados import db
from models import Usuario, Hemocentro, EstoqueSangue
from datetime import datetime


if __name__ == "__main__":
    db.connect()

    # cria tabelas
    db.create_tables([Usuario,Hemocentro, EstoqueSangue])


    # Criando  Hemocentros

    santa, criado = Hemocentro.get_or_create(cod=1, nome = u"Santa Casta")
    santa.atendimento = u"Segunda a Sexta das 07h às 17:30h / Sábado das 07h às 17h"
    santa.endereco = u"Rua Anacleto Ramos, 55 Ferroviários - cep 29308-020 Cachoeiro de Itapemirim/ES - Telefone:(28) 3526.6166"
    santa.save()

    heva, criado = Hemocentro.get_or_create(cod=2,nome = u"Hospital Evangélico")
    heva.atendimento = u"Segunda a Sexta das 07h às 17:30h / Sábado das 07h às 17h"
    heva.endereco = u"Rua Anacleto Ramos, 55 Ferroviários - cep 29308-020 Cachoeiro de Itapemirim/ES - Telefone:(28) 3526.6166"
    heva.save()


    # Criando usuarios 
    renan, criado = Usuario.get_or_create(email="renan@hotmail", cod=1, nome="Renan Lamon")
    renan.data_nascimento = datetime(1998,1,1)
    renan.hemocentroFavorito = heva
    renan.tipoSanguineo = "A+"
    renan.senha = "123"
    renan.save()
	
    wan, criado = Usuario.get_or_create(email="wan@gmail", cod=2, nome="Wancharle")
    wan.data_nascimento = datetime(1986,1,20)
    wan.hemocentroFavorito = santa
    wan.tipoSanguineo = "A+"
    wan.senha = "123"
    wan.save()

    # ESTOQEUS
    estoque_inicial = [
        ("A+", "satisfatorio", 50, heva),
        ("A-", "satisfatorio", 80, heva),
        ("B+", "critico", 3, heva),
        ("B-", "baixo", 30, heva),
        ("AB+", "critico", 31, heva),
        ("AB-", "satisfatorio", 90, heva),
        ("O+", "critico", 2, heva),
        ("O-", "critico", 10, heva),
        
        ("A+", "critico", 5, santa),
        ("A-", "baixo", 10, santa),
        ("B+", "critico", 3, santa),
        ("B-", "baixo", 30, santa),
        ("AB+", "critico", 31, santa),
        ("AB-", "satisfatorio", 90, santa),
        ("O+", "critico", 2, santa),
        ("O-", "critico", 10, santa)
    ]

    for e in estoque_inicial:
        es, criado = EstoqueSangue.get_or_create(tipoSangue=e[0],hemocentro=e[3])
        es.situacao = e[1]
        es.situacaoPorcentagem = e[2]
        es.save()





# vim: set ts=4 sw=4 sts=4 expandtab:
