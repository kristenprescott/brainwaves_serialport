# Arduino IDE

1. Plug in headset

2. Select board and port:

   - Tools > Board: "Arduino Uno"
   - Tools > Port: "/dev/cu.usbserial-1440" (or whichever port isn't bluetooth, port number varies)

3. Open the Serial Monitor, Tools > Serial Monitor (looks like a terminal, lives in the bottom of the IDE)

   - Should see a message if connected, `connect rx and turn headset on`

4. To upload new code:

   - Unplug Rx from Arduino (turn off headset if its on, you're wasting the battery)
   - Upload button is in the top left, its an arrow
     - Then verify, the check button to the left of upload

5. To run program:

   - Open Serial Monitor (Tools > Serial Monitor), if not already open
   - Check/select baud rate (upper right corner of Serial Monitor), make sure it matches whatever is being used in the current code (`Serial.begin(57600)` or `Serial.begin(9600)`, probably)
   - Follow the instructions printed in the Serial Monitor - now you can plug the Rx back into the Arduino and turn on the headset
   - Now we wait - expect a delay, have patience

Example output:

```sh
connect rx and turn headset on
50,53,50
50,53,50
50,53,50
50,53,50
50,53,50
50,53,50
50,53,50
50,53,50
50,53,50
50,53,50
50,53,50
50,53,50
50,53,50
50,53,50
50,53,50
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
49,55,48
```

Donning the headset: tips and tricks

- Wash your face, pull back your hair, and clean the headset contacts and the skin they will touch with rubbing alcohol; electroglide gel may help too, but remember - this _is_ a toy...

- Expect 15-30s (iirc) of random data output (TODO: check if I handled that actually...)
  
---

# Node Project (this one)

TODO: WTF is happening here and why didn't I document this part better

```sh
%kristen@brainstream
----------------------------------------
node main.js 
Listening on the port 3000 B^D
(node:65856) UnhandledPromiseRejectionWarning: Error: Error: Resource busy, cannot open /dev/cu.usbserial-1440
(Use `node --trace-warnings ...` to show where the warning was created)
(node:65856) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:65856) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.˝
```

---

```
Listening on the port 3000 B^D
serial port open

attention:  35
meditation:  24

(x513)

attention:  41
meditation:  35

(x15)

Listening on the port 3000 B^D
serial port open

attention:  97
meditation:  1

HI SCORE!!!

att:  97  med:  1

(x233)

attention:  91
meditation:  1

HI SCORE!!!

att:  91  med:  1

(x135)

attention:  87
meditation:  1

HI SCORE!!!

att:  87  med:  1

(x513)


```
