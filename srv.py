from flask import (Flask, request, redirect, render_template)
import flask
import json
import random

from output import array

app = Flask(__name__)

def jsonify(data):
	return flask.Markup(json.dumps(data))

app.jinja_env.filters['jsonify'] = jsonify

@app.route('/<int:first_id>/<int:second_id>/<int:third_id>')
@app.route('/')
def home(first_id=None, second_id=None, third_id=None):
    '''
	print len(array)
    while first_id == None:
        rand_int = randint(0, len(array)-1)
        value = array[rand_int]
        if len(value) > 0:
            first_id = rand_int
    while second_id == None:
        rand_int = randint(0, len(array)-1)
        value = array[rand_int]
        if len(value) > 0:
            second_id = rand_int
    '''
    def get_words(words):
        ret = []
        for word_id in words:
            word = array[word_id] if word_id != None and word_id < len(array) else random.choice(array)
            ret.append(word.decode('utf-8'))

        return ret

    words = get_words([first_id, second_id, third_id])
    return render_template('home.html', words=words)

@app.route('/manifest.webapp')
def manifest():
	return open('manifest.webapp').read()

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=6969, debug=True)
