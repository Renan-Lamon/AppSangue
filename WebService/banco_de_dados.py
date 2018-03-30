#!/usr/bin/python
#-*- coding: utf-8 -*-

from peewee import *

db = SqliteDatabase('app-sangue.db')

class BaseModel(Model):
    class Meta:
        database = db


def connect_db():
	if db.is_closed():
		db.connect()

def close_db(exc):
	if not db.is_closed():
		db.close()

def configura(app):
   app.before_request(connect_db)
   app.teardown_request(close_db)

# vim: set ts=4 sw=4 sts=4 expandtab:
