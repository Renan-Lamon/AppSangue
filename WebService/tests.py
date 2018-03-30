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
        rv = self.login('wan@gmail', '123')
        assert b'nome": "Wancharle' in rv.data
        rv = self.login('wagmail', '123')
        assert b'Senha incorreta' in rv.data


if __name__ == '__main__':
    unittest.main()



# vim: set ts=4 sw=4 sts=4 expandtab:

