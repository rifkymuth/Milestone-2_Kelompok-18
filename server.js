// Inisialisasi
const express = require("express");
const Datastore = require("nedb");
const app = express();
const { request, response, query } = require("express");

// Buka database
const dataBuku = new Datastore("Database/data_buku.db");
dataBuku.loadDatabase();
// Inisialisasi server
app.use(express.static(__dirname + "/Public/")); // BUAT AKSES FRONT END
app.use(express.json({ limit: "10mb" }));
const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

// Buka landpage
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/Public/landingpage.html"); // INDEKS FRONT END
});

// Buka page tambah buku
app.get("/tambahBuku", (request, response) => {
  response.sendFile(__dirname + "/Public/tambahBuku.html");
  console.log("opening tambahBuku.html"); //response.json("lancar")
});

// API nambah buku
app.post("/tambahBuku", (request, response) => {
  const data = request.body;
  const isbn = data.isbn;
  const desc = data.deskripsi;
  dataBuku.count({ isbn: isbn }, (err, count) => {
    if (count == 0) {
      if (desc != "") {
        dataBuku.insert(data);
        response.json({ text: "Buku berhasil didaftarkan" });
        console.log("Buku bertambah");
      } else {
        response.json({ text: "Gagal: Isi deskripsi!" });
      }
    } else {
      response.json({ text: "Gagal: Buku sudah ada!" });
    }
  });
});

// Dummy page cari buku
app.get("/cariBuku", (request, response) => {
  response.sendFile(__dirname + "/Public/dummy_caribuku.html"); // INDEKS FRONT END
});
// Dummy cari genre
app.get("/cariGenre", (request, response) => {
  response.sendFile(__dirname + "/Public/dummy_genre.html"); // INDEKS FRONT END
});

// API buka semua database
app.get("/api", (request, response) => {
  dataBuku.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

// API query data buku
app.get("/api/cariBuku/:query", (request, response) => {
  console.log(`Request data masuk: ${request.params.query}`);
  // Ubah parameter query jadi regex
  const query = new RegExp(request.params.query, "i");
  // Cari buku di database berdasarkan judul dan pengarang
  dataBuku.find(
    { $or: [{ judul: query }, { pengarang: query }] },
    (err, data) => {
      if (err) {
        // Error Handling
        console.log("there is an error in database query");
        console.log(err);
        response.end();
      } else {
        // Kembalikan hasil
        response.json(data);
      }
    }
  );
});

// API genre
app.get("/api/cariGenre/:genre", (request, response) => {
  console.log(`Request genre masuk: ${request.params.genre}`);
  genre = request.params.genre;
  // Cari buku di database berdasarkan genre
  dataBuku.find({ genre: genre }, (err, data) => {
    if (err) {
      // Error Handling
      console.log("there is an error in database query");
      console.log(err);
      response.end();
    } else {
      // Kembalikan hasil
      response.json(data);
    }
  });
});
