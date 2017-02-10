import multiprocessing
from multiprocessing import Process, Pipe
import time, threading

yes = True
kill_event = multiprocessing.Event()

class liveThread (threading.Thread):
    def __init__(self, threadID, name, tCounter):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.name = name
        self.tCounter = tCounter
    def run(self):
        #print "Starting " + self.name
        while self.tCounter < 9:
            print "Thread running\n"
            self.tCounter+=1
            time.sleep(1)
        kill_event.set()
        print "Thread exited"

def f(conn):
    child_conn = conn
    i = 0;
    while not kill_event.is_set():
         conn.send(i)
         i = i+1
         time.sleep(1)
    conn.close()

if __name__ == '__main__':
    parent_conn, child_conn = Pipe()
    p = Process(target=f, args=(child_conn,))
    p.start()
    thread1 = liveThread(1,"Timmy",1)
    thread1.start()
    child_conn.close()
    while True:
         try:
            print parent_conn.recv()   # prints "[42, None, 'hello']"
         except EOFError:
            break
    
    p.join()
    thread1.join()
    parent_conn.close()


"""
multi_pipe.py
"""
"""
from multiprocessing import Process, Pipe
import time

def reader(pipe):
    output_p, input_p = pipe
    input_p.close()    # We are only reading
    while True:
        try:
            msg = output_p.recv()    # Read from the output pipe and do nothing
        except EOFError:
            break

def writer(count, input_p):
    for ii in xrange(0, count):
        input_p.send(ii)             # Write 'count' numbers into the input pipe

if __name__=='__main__':
    for count in [10**4, 10**5, 10**6]:
        output_p, input_p = Pipe()
        reader_p = Process(target=reader, args=((output_p, input_p),))
        reader_p.start()     # Launch the reader process

        output_p.close()       # We no longer need this part of the Pipe()
        _start = time.time()
        writer(count, input_p) # Send a lot of stuff to reader()
        input_p.close()        # Ask the reader to stop when it reads EOF
        reader_p.join()
        print "Sending %s numbers to Pipe() took %s seconds" % (count, 
            (time.time() - _start))
"""
