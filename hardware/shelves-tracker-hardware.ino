#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>

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
}

void loop() {

if ((millis() - lastTime) > timerDelay) {

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