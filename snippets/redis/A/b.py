# -*- coding: utf-8 -*-

import requests

def count_words_at_url(url):
    resp = request.get(url)
    return len(resp.text.split())
