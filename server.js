const express = require("express");
const Datastore = require('nedb');

const app = express();
const dataBuku = new Datastore('Database/data_buku.db');
dataBuku.loadDatabase();

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
  console.log("opening tambahBuku.html");//response.json("lancar")
});

app.post("/tambahBuku", (request, response) => {
  const data = request.body;
  const isbn = data.isbn
  const desc = data.deskripsi
  dataBuku.count({isbn : isbn}, (err,count)=>{
    if (count == 0) {
      if (desc !='') {
        dataBuku.insert(data);
        response.json({text : "Buku berhasil didaftarkan"});
        console.log('Buku bertambah');
      }
      else {
        response.json({text : "Gagal: Isi deskripsi!"});
      }
    }
    else {
      response.json({text : "Gagal: Buku sudah ada!"});
    }
  })
  
 
  //dataBuku.find({judul : /Lord/i}, (err, docs)=> {})
  
})