const express = require("express");
const app = express();

app.use(express.static(__dirname + "/Public/")); // BUAT AKSES FRONT END

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/Public/landingpage.html"); // INDEKS FRONT END
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});