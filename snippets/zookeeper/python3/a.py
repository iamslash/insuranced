#!/usr/bin/python
from kazoo.client import KazooClient
from kazoo.exceptions import NoNodeError
from kazoo.exceptions import NodeExistsError

import logging
import json
import sys

logging.basicConfig()
zk_key = "/FirstZnode"
# zk = KazooClient(hosts='127.0.0.1:2181,b.google.com:2181,c.google.com:2181')
zk = KazooClient(hosts='127.0.0.1:2181')
zk.start()
try :
	data, stat = zk.get(zk_key)
	print("Version: %s, data: %s" % (stat.version, data.decode("utf-8")))
	decoded = json.loads(data)
	hostAndport = decoded['slaves'][0]
	print(hostAndport)
except (ValueError, KeyError, TypeError):
	print("JSON format error")
except (NoNodeError, NodeExistsError):
	print("zk error")
zk.stop()