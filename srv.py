#!/usr/bin/env python
# -*- coding: utf-8 -*-

from bottle import route, get, post, run, static_file, template, request
import json
import random

from output import array

@get('/')
@get('/<first_id:int>/<second_id:int>/<third_id:int>')
def home(first_id=None, second_id=None, third_id=None):
    return template("home")

@get('/api/words')
def api_words():
    word1 = random.choice(array);
    word2 = random.choice(array);
    word3 = random.choice(array);

    return json.dumps([word1, word2, word3])

@post('/api/save')
def api_save():
    # TODO: This is a stub

    # also, is this necessary?
    image_url = None
    err = None

    try:
        image_url = request.forms.image_url
    except KeyError:
        err = "No image_url provided"

    if err:
        print err
        return err

    print image_url
    return "Saved!"

@get('/manifest.webapp')
def manifest():
    return static_file('manifest.webapp', root='.')

@get('/static/<path:path>')
def serve_static(path):
    return static_file(path, root='./static/')

run(host='0.0.0.0', port=5000, reloader=True)
