# -*- coding: utf-8 -*-

from b import count_words_at_url
from redis import Redis
from rq import Queue

def test():
    q = Queue(connection=Redis())
    result = q.enqueue(count_words_at_url, 'http://nvie.com')

if __name__ == "__main__":
    test()
