import sys
import socket
import threading
from time import sleep
import serial
from firebase import firebase

firebase = firebase.FirebaseApplication('https://iot-e11b3-default-rtdb.firebaseio.com', None) #xxx
#/ROOM01
    #humi:  "60"
    #led01: "1"
    #led02: "1"
        #led03: "1"
    #temp:  "30"

ROOM = "/ROOM01" #xxx
COMPORT = "COM3" #xxx


class clientClass(threading.Thread):
    def __init__(self,comport,room):
        threading.Thread.__init__(self)     #call parent init()        
        self.comport = comport
        self.room = room

        self.s = serial.Serial(self.comport,9600,timeout=None) #xxx
        
        self.getDataFromHW = threading.Thread(target=self.send2Server_c02)
        self.getDataFromHW.start()
        
    def run(self): #xxx: read firebase - send to arduino
        while(True):
            sleep(5) #5S
            result = firebase.get(ROOM, None)    
            print(result)
            if result != None:
                ledcontrol = result['led01'] + result['led02'] + result['led03']
                self.s.write(str.encode(ledcontrol + '\n')) #"111\n"           
            else:
                print("FB is Clear")
                                    

    def send2Server_c02(self): #xxx: read arduino - send to firebase
        while(True):
            #readline(): code will be waiting here!!! not consume CPU. :) D*23*89*\n
            data = self.s.readline() #readline() is read until '\n'    #or read_until(), https://pyserial.readthedocs.io/en/latest/pyserial_api.html
            data = data.decode('utf-8')               #read_until(),read until char, but need to read enough number of byte or timeout!
            print(data)
            data = data.split('*')
            temp = data[1]
            humi  = data[2]
            result = firebase.put(self.room,'temp',temp)
            result = firebase.put(self.room,'humi',humi)

# Listen for incoming datagrams
clientDev = clientClass(COMPORT,ROOM)
clientDev.start()
clientDev.join()
