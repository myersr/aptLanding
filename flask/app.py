# encoding: utf-8

from datetime import timedelta
from flask import Flask, jsonify, make_response, current_app, request
from flask_socketio import SocketIO, emit, send
from functools import update_wrapper
import requests
from random import randint

#sensors
import json
import re
import subprocess
import time

app = Flask(__name__)
socketio = SocketIO(app)

#checks and reformats output of lm-sensors and smartctl
def get_temperatures(disks):
    sensors = subprocess.check_output("sensors")
    temperatures = {match[0]: float(match[1]) for match in re.findall("^(.*?)\:\s+\+?(.*?)°C", sensors, re.MULTILINE)}
    for disk in disks:
        output = subprocess.check_output(["smartctl", "-A", disk])
        temperatures[disk] = int(re.search("Temperature.*\s(\d+)\s*(?:\([\d\s]*\)|)$", output, re.MULTILINE).group(1))
    return temperatures

def runMonitor():
    while True:
        print json.dumps(get_temperatures(("/dev/sda", "/dev/sdc")))
        time.sleep(5)

def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    if headers is not None and not isinstance(headers, basestring):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, basestring):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers

            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator


@app.route("/4oh4", methods=['GET', 'OPTIONS'])
@crossdomain(origin='*')
def hello():
    randNum = randint(1,1792)
    r = requests.get('http://xkcd.com/'+ str(randNum) +'/info.0.json')
    print r.json()
    r.status_code
    r.headers['content-type']
    r.encoding
    r.text
    return jsonify(comicUrl=r.json()["img"])

@socketio.on('connect')
def test_connect():
    print "connected"

@socketio.on('get python')
def test_connect():
    linesD = []
    for json_data in open('logOutput.json'):
       #print json_data
       linesD.append(json.loads(json_data))#, sort_keys=False)
       #d = json.loads(line)
    #print linesD
    t = json.dumps(linesD)
    print 'sending data'
    socketio.emit('from python', t)
    # socketio.emit('from python', {'data': 'Connected'})

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

@socketio.on('jsonEv')
def handle_json(jsonIn):
    print('received json: ' + str(json))

@socketio.on('my event')
def handle_my_custom_event(jsonIn):
    # linesD = []
    # for json_data in open('logOutput.json'):
    #    #print json_data
    #    linesD.append(json.loads(json_data))#, sort_keys=False)
    #    #d = json.loads(line)
    # #print linesD
    # t = json.dumps(linesD)
    socketio.emit('my response', "Fuck this")

if __name__ == "__main__":
    socketio.run(app)

    # with open('logOutput.json') as json_data:
    #     d = json.load(json_data)
    #     print(d)



