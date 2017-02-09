# encoding: utf-8
import re, subprocess, time, datetime
import thread
from datetime import time as dtt
import json

#(Physical id 0)\:\s+\+?(.*?)C
#"^(.*?)\:\s+\+?(.*?)°C"
def get_temperatures():
    sensors = subprocess.check_output("sensors")
    #print datetime.datetime.now().time().second
    #.time().minute)+":"+str(datetime.datetime.now().time().second
    now = datetime.datetime.now()
    match = re.search("(Physical id 0)\:\s+\+?(.*?)\.0°C", sensors, re.MULTILINE)
    temperatures = [[now.hour, now.minute, now.second],int(match.group(2))]
                    #float(re.search("(Physical id 0)\:\s+\+?(.*?)°C", sensors, re.MULTILINE))]
    #output = subprocess.check_output(["smartctl", "-A", disk])
    #temperatures[disk] = int(re.search("Temperature.*\s(\d+)\s*(?:\([\d\s]*\)|)$", output, re.MULTILINE).group(1))
    return temperatures


def main():
    while True:
        print json.dumps(get_temperatures())
        time.sleep(3)


if __name__ == "__main__":
    main()


#
# #(Physical id 0)\:\s+\+?(.*?)C
# #"^(.*?)\:\s+\+?(.*?)°C"
# def get_temperatures():
#     sensors = subprocess.check_output("sensors")
#     #print datetime.datetime.now().time().second
#     #.time().minute)+":"+str(datetime.datetime.now().time().second
#     # temperatures = {"datetime":str(datetime.datetime.now())},{'temp': float(match[1]) for match in re.findall("(Physical id 0)\:\s+\+?(.*?)°C", sensors, re.MULTILINE)}
#     temperatures = {'temp': float(match[1]) for match in re.findall("(Physical id 0)\:\s+\+?(.*?)°C", sensors, re.MULTILINE)}
#     #output = subprocess.check_output(["smartctl", "-A", disk])
#     #temperatures[disk] = int(re.search("Temperature.*\s(\d+)\s*(?:\([\d\s]*\)|)$", output, re.MULTILINE).group(1))
#     return temperatures
#
# def getTime():
#     times = {"datetime":str(datetime.datetime.now())}
#     return times
#
#
# def main():
#     try:
#         f = open("tempLog.json", 'w')
#         f.truncate()
#         k = open("timeLog.json", 'w')
#         k.truncate()
#         for i in range(1,30):
#             f.write( json.dumps(get_temperatures()) )
#             k.write( json.dumps(getTime()))
#     except:
#         print "Error: unable to start thread"
#
#
# # def main():
# #     while True:
# #         try:
# #             thread.start_new_thread(thrdProcess(), ("Thread-1", 1, ))
# #             thread.start_new_thread(thrdProcess(), ("Thread-2", 2, ))
# #         except:
# #             print "Error: unable to start thread"
# #
# #         print json.dumps(get_temperatures((1)))
# #         time.sleep(1)
#
#
# if __name__ == "__main__":
#     main()

