import express from "express";


const fos = [
  { id: 1, title: "FO 1", description: "Description of FO1" },
  { id: 2, title: "FO 2", description: "Description of FO2" },
  { id: 3, title: "FO 3", description: "Description of FO3" },
  { id: 4, title: "FO 4", description: "Description of FO4" },
  { id: 5, title: "FO 5", description: "Description of FO5" },
];

const expressApp = express();

expressApp.get("/ping", (req, res) => {
  res.send("pong");
});

expressApp.get("/fos", (req, res) => {
  res.send(fos);
});


expressApp.listen(3000, () => {
  console.info("Listening at http://localhost:3000");
});