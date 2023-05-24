# Musical Keyboard

## Introduction

In this project, you will learn how to build a musical keyboard with a keypad, Arduino UNO, and buzzer.

<div style="text-align:center">
    <img src="../media/musical-keyboard-no-breadboard.png" width="600">
</div>

## Materials
- [ ] Arduino UNO
- [ ] Keypad
- [ ] Buzzer
- [ ] Wires
- [ ] Breadboard (optional)

## Assembly 

First, assemble your circuit according to one of the following diagrams. If you decide to use a breadboard, using the diagram below. In either case, you will want to connect the keypad the same way, with the 8 wires connected to digital pins 2 through 9 on the Arduino. The positive terminal of the buzzer should be connected to digital pin 11 on the Arduino, and the negative terminal should be connected to GND on the Arduino.

<div style="text-align:center">
    <img src="../media/musical-keyboard-with-breadboard.png" width="600">
</div>

If you decide not to use a breadboard, use the diagram below.

<div style="text-align:center">
    <img src="../media/musical-keyboard-no-breadboard.png" width="600">
</div>

## Program

Now it's time to write the code for the Arduino. Click on the link below, and select "add to my sketchbook". It may prompt you to log in. This should open it in your Arduino editor in Google Chrome if you have it set up. In case the link doesn't work, the code is also shown below so that you can copy it into your editor.

[Arduino Code](https://create.arduino.cc/editor/girish_krishnan/47697fc1-6ce5-49dc-981f-0cb804dab432/preview)

<br>

```c
/*
Arduino Musical Keyboard Project using Keypad and Active Buzzer
Author: Girish Krishnan

Credit for Keypad tutorial: https://www.circuitbasics.com/how-to-set-up-a-keypad-on-an-arduino/
*/

// IMPORTS
#include <Keypad.h>

// CONSTANTS
// dimensions of the keypad
const byte ROWS = 4; 
const byte COLS = 4;
const int buzzerPin = 11; // the pin on the Arduino to which the buzzer is connected

// KEYS on the keypad and corresponding frequencies
char hexaKeys[ROWS][COLS] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

int soundFrequencies[ROWS][COLS] = {
  {100 , 200 , 300 , 400 },
  {500 , 600 , 700 , 800 },
  {900 , 1000, 1100, 1200},
  {1300, 1400, 1500, 1600}
};

// Row and column pins
byte rowPins[ROWS] = {9, 8, 7, 6}; 
byte colPins[COLS] = {5, 4, 3, 2};

// Initialize keypad
Keypad customKeypad = Keypad(makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS); 

// A helper function to find the index of a value in a 2D array
int* find_index(char arr[][COLS], int rows, int cols, char target) {
    static int result[2]; // static array to store the result
    for(int i = 0; i < rows; i++) {
        for(int j = 0; j < cols; j++) {
            if(arr[i][j] == target) {
                result[0] = i; // store the row index in the first element
                result[1] = j; // store the column index in the second element
                return result; // return the array
            }
        }
    }
    return NULL; // target element not found
}

// SETUP
void setup(){
  Serial.begin(9600);
  pinMode(buzzerPin, OUTPUT); // set the buzzer pin as an output

}

// LOOP - this runs continuously until you reset or disconnect the Arduino
void loop(){
  char customKey = customKeypad.getKey(); // retrives what key you pressed
  
  if (customKey)  { // if you press a key...
    Serial.println(customKey); // prints key to console
    
    // the remaining code just plays a different musical note depending on what key you pressed
    int keyX = (find_index(hexaKeys, ROWS, COLS, customKey))[0];
    int keyY = (find_index(hexaKeys, ROWS, COLS, customKey))[1];
    tone(buzzerPin, soundFrequencies[keyX][keyY] ,200);
  }
  
}
```

## Resources

- [Lesson Slides](https://docs.google.com/presentation/d/1TzDSC_RqCrGYaZHp_YH6jb5m93wf2xdj994rfSMm1r4/edit?usp=sharing)
- [Arduino Code](https://create.arduino.cc/editor/girish_krishnan/47697fc1-6ce5-49dc-981f-0cb804dab432/preview)
