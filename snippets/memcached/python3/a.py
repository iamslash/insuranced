# -*- coding: utf-8 -*-

from pymemcache.client import base
client = base.Client(('localhost', 11211))
client.set('some_key', 'some value')
client.get('some_key')
