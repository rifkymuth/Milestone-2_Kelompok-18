const express = require("express");
const app = express();

app.use(express.static(__dirname + "/Public/")); // BUAT AKSES FRONT END
app.use(express.json({ limit: '10mb' }));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/Public/landingpage.html"); // INDEKS FRONT END
});

const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

app.get("/tambahBuku", (request, response) => {
  response.sendFile(__dirname + "/Public/tambahBuku.html");
  console.log("Membuka tambah buku");//response.json("lancar")
});

app.post("/tambahBuku", (request, response) => {
  const data = request.body;
  
  response.json({text : "Data diterima"});
})