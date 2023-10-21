const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//Creating a route using GET
app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "This has CORS enabled" });
});

//Starting server
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
