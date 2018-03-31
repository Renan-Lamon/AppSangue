#!/usr/bin/python
#-*- coding: utf-8 -*-

import app 
import unittest

class UsuarioTestCase(unittest.TestCase):

    def setUp(self):
        app.app.testing = True
        self.app = app.app.test_client()

    def login(self, username, password):
        return self.app.post('/usuario/login', data=dict(
        email=username,
        senha=password
        ), follow_redirects=True)

    def test_login(self):
        resp = self.login('renan@hotmail', '123')
        assert b'"nome": "Renan' in resp.data
        resp = self.login('renan@hotmail', 'a123')
        assert b'Senha incorreta' in resp.data
 
        resp = self.login('wan@gmail', '123')
        assert b'"nome": "Wancharle' in resp.data
        resp = self.login('wagmail', '123')
        assert b'Senha incorreta' in resp.data

    def dados(self, cod):
        return self.app.get("/usuario/dados?cod="+cod, follow_redirects=True)

    def test_dados(self):
        resp = self.dados("1")
        assert b'"nome": "Renan ' in resp.data
        resp = self.dados("2")

        assert b'"nome": "Wancharle' in resp.data
        resp = self.dados("-1")

        assert " cod=-1" in resp.data
 
    

if __name__ == '__main__':
    unittest.main()



# vim: set ts=4 sw=4 sts=4 expandtab:

