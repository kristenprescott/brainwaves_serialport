const express = require("express");
const app = express();
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

// Create a port
const port = new SerialPort({
  path: "/dev/cu.usbserial-1440",
  baudRate: 57600,
});

// Read port data
port.on("open", () => {
  console.log("serial port open");
});

// // Read data that is available but keep the stream in "paused mode"
// port.on("readable", function () {
//   console.log("Data1:", port.read());
// });

// // Switches the port into "flowing mode"
// port.on("data", function (data) {
//   console.log("Data2:", data);
// });

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));
// parser.on("data", console.log);
parser.on("data", (data) => {
  const dataArray = data.split(",");
  if (dataArray) {
    // console.log("dataArray: ", dataArray);
    const attention = dataArray[1];
    const meditation = dataArray[2];
    if (attention > 0 && meditation > 0) {
      console.log("attention: ", attention);
      console.log("meditation: ", meditation);
      console.log("");
      if (attention >= 75 && meditation < 50) {
        console.log("HI SCORE!!! \n");
        console.log("att: ", attention, " med: ", meditation);
      }
      //   else if (attention < 75 && meditation >= 50) {
      //     console.log("LO SCORE!! \n");
      //     console.log("att: ", attention, " med: ", meditation);
      //   }
    }
  }
});

// // Pipe the data into another stream (like a parser or standard out)
// const lineStream = port.pipe(new Readline());

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.listen(3000, () => {
  console.log("Listening on the port 3000 B^D");
});
