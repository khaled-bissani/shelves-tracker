#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include "HX711.h"

const int LOADCELL_DOUT_PIN = 12;
const int LOADCELL_SCK_PIN = 13;

HX711 scale;

const char* ssid = "ssid";
const char* password = "password";

const char* serverName = "http://172.20.10.2:3000/product/single_product";

unsigned long lastTime = 0;
unsigned long timerDelay = 36000000;

const char* id = "";
const char* category_id = "";
const char* product_id = "";
int quantity=0

void setup() {
  Serial.begin(9600);

  // Connecting to the Wifi
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
 
  Serial.println("Timer set to 1 hour (timerDelay variable), it will take an hour before publishing the first reading.");

  //HX711 Weight sensor 
  Serial.println("Initializing the scale");

  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);

  Serial.println("Before setting up the scale:");
  Serial.print("read: \t\t");
  Serial.println(scale.read());

  Serial.print("read average: \t\t");
  Serial.println(scale.read_average(20));

  Serial.print("get value: \t\t");
  Serial.println(scale.get_value(5));   

  Serial.print("get units: \t\t");
  Serial.println(scale.get_units(5), 1);
            
  scale.set_scale(1.6);
  scale.tare();          

  Serial.println("After setting up the scale:");

  Serial.print("read: \t\t");
  Serial.println(scale.read()); 

  Serial.print("read average: \t\t");
  Serial.println(scale.read_average(20));

  Serial.print("get value: \t\t");
  Serial.println(scale.get_value(5));   

  Serial.print("get units: \t\t");
  Serial.println(scale.get_units(5), 1);
  
  Serial.println("Readings:");
}

void loop() {

  if ((millis() - lastTime) > timerDelay) {

    Serial.print("one reading:\t");
    Serial.print(scale.get_units(), 1);
    Serial.print("\t| average:\t");
    Serial.println(scale.get_units(10), 5);
    quantity=scale.get_units(10)

    scale.power_down(); 
    delay(5000);
    scale.power_up();

    if(WiFi.status()== WL_CONNECTED){
      WiFiClient client;
      HTTPClient http;
      
      http.begin(client, serverName);
  
      http.addHeader("Content-Type", "application/json");
      int httpResponseCode = http.POST("{\"id\":\"" + id + "\",\"category_id\":\"" + category_id + "\",\"product_id\":\"" + product_id + "\",\"quantity_shelf\":\"" + quantity + "\"}");
     
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);

      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }

}