from flask import jsonify
import json

#d = json.dumps('{"Core 0": 53.0, "temp1": 52.0, "Physical id 0": 54.0, "Core 1": 54.0}', sort_keys=False)
linesD = []
for json_data in open('logOutput.json'):
       print json_data
       linesD.append(json.loads(json_data))#, sort_keys=False)
       #d = json.loads(line)
print linesD
t = json.dumps(linesD)
print t

