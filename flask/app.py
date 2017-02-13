# encoding: utf-8

from datetime import timedelta
from flask import Flask, jsonify, make_response, current_app, request
import socketio
import eventlet.wsgi
from functools import update_wrapper
import requests
from random import randint
import ast
import os

#sensors
import json, re, subprocess, time, datetime, threading

app = Flask(__name__)
sio = socketio.Server()


exitFlag = 0

class liveThread (threading.Thread):
    def __init__(self, threadID, name, sid, tCounter):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.name = name
        self.sid = sid
        self.tCounter = tCounter
    def run(self):
        #print "Starting " + self.name
        while True:
            dataR = get_temperatures(self.name, self.tCounter)
            #print dataR
            sio.send(dataR, room=self.sid)
            self.tCounter+=1
            #print "Killing self %d" % self.threadID




def get_temperatures():
    sensors = subprocess.check_output("sensors")
    now = datetime.datetime.now()
    match = re.search("(Physical id 0)\:\s+\+?(.*?)\.0°C", sensors, re.MULTILINE)
    temperatures = [[now.hour, now.minute, now.second],int(match.group(2))]
    return json.dumps(temperatures)



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
    if randNum is 404:
        randNum = randint(1,1792)
    r = requests.get('http://xkcd.com/'+ str(randNum) +'/info.0.json')
    #print r.json()
    r.status_code
    r.headers['content-type']
    r.encoding
    r.text
    return jsonify(comicUrl=r.json()["img"])



@app.route("/chartson", methods=['GET', 'OPTIONS'])
@crossdomain(origin='*')
def chartData():
    linesD = []
    for json_data in open('logOutput.json'):
        # print jsnoton_data
        linesD.append(ast.literal_eval(json_data))  # , sort_keys=False)
        # d = json.loads(line)
    t = json.dumps(linesD)
    return jsonify(data=t)



# @sio.on('jsonEv')
# def handle_json(jsonIn):
#     print('received json: ' + str(json))
loop = True

@app.route("/killT/<chart>")
@crossdomain(origin='*')
def handleLiveKill(sid, chartName):
    print "killed"
    loop = False


def spawnIt(sid, intId):
    #print "Live feed from %s" % sid
    dataRow = get_temperatures()
    #print dataRow
    sio.send(dataRow, room=sid)
    #time.sleep(2)

@app.route("/feed/<string:chart>")
@crossdomain(origin='*')
def handleLiveTrigger(chart):
    print "Starting thread for %s" % sid
    # while True:
    #     eventlet.greenthread.spawn_n(spawnIt ,sid, 1)
    #     eventlet.greenthread.sleep(1)
        # evenT.sleep(3)
        # evenT.kill()
        #evenT.sleep(seconds=2)

    # thread1 = liveThread(420, "bitch", sid, 1)
    # thread1.start()
    # loop = True
    #print "Live feed"
    #dataRow = get_temperatures()
    #print dataRow
    # sio.emit('transmit stream',room=sid,data=dataRow)
    #sio.send(dataRow,room=sid)
    # time.sleep(3)



if __name__ == "__main__":
    #app = socketio.Middleware(sio, app)
    eventlet.wsgi.server(eventlet.listen(('', 5000)), app)


    # with open('logOutput.json') as json_data:
    #     d = json.load(json_data)
    #     print(d)



