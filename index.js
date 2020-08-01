const express = require("express");
const app = express();

app.use(express.static(__dirname + "Public/landingpage.html")); // BUAT AKSES FRONT END

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});