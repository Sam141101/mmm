
#include <SimpleDHT.h>
#define pinDHT11 12
SimpleDHT11 dht11;

byte temp=0;
byte hum=0;

#define led01 7
#define led02 6
#define led03 5

int count=0;
String income="";

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  pinMode(led01, OUTPUT);
  pinMode(led02, OUTPUT);
  pinMode(led03, OUTPUT);
  digitalWrite(led01, LOW);
  digitalWrite(led02, LOW);
  digitalWrite(led03, LOW);
}

void loop() {
  // put your main code here, to run repeatedly:

  if(count==10) {
    dht11.read(pinDHT11, &temp, &hum, NULL);    
    Serial.print("D*"+String(temp)+'*'+String(hum)+'*'+'\n'); //send temperature to clientPython    
    count=0;
  }
  count++;

  if (Serial.available() > 0) {
    income = Serial.readStringUntil('\n');
    if(income[0] == '0')
      digitalWrite(led01, LOW);
    else
      digitalWrite(led01, HIGH);
    
    if(income[1] == '0')
      digitalWrite(led02, LOW);
    else
      digitalWrite(led02, HIGH);

    if(income[2] == '0')
      digitalWrite(led03, LOW);
    else
      digitalWrite(led03, HIGH);
  }
  delay(500);
}
