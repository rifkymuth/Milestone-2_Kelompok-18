const cariJudul = document.getElementById("cariJudul");
const cariGenre = document.getElementById("cariGenre");
const resultJudul = document.getElementById("result-items-judul");
const resultGenre = document.getElementById("result-items-genre");

cariJudul.addEventListener("click", async (e) => {
  const query = document.getElementById("cari").value;
  // Cari Data Buku
  const response = await fetch(`/api/cariBuku/${query}`);
  const data = await response.json();
  console.log(data);

  printResultsJudul(data);
});

cariGenre.addEventListener("click", async (e) => {
  const genre = document.getElementById("genre").value;
  // Cari Genre
  const response = await fetch(`/api/cariGenre/${genre}`);
  const dataGenre = await response.json();
  console.log(dataGenre);

  printResultsGenre(dataGenre);
});

function printResultsJudul(data) {
  let blockResult = data.map((dat) => {
    return `<div class="col-xs-6 col-md-4 col-lg-3">
        <img
          src="${dat.img}"
          alt="${dat.judul}"
          class="img-thumbnail"
          width="200"
          height="100"
        />
        <h4>${dat.judul}</h4>
        <p class="font-italic">${dat.pengarang}</p>
      </div>`;
  });

  resultJudul.innerHTML =
    `<h3 class="col-md-12 text-left">By Title/Author:</h3>` +
    blockResult.join("\n");
}

function printResultsGenre(dataGenre) {
  let blockResult = dataGenre.map((dat) => {
    return `<div class="col-xs-6 col-md-4 col-lg-3">
        <img
            src="${dat.img}"
            alt="${dat.judul}"
            class="img-thumbnail"
            width="200"
            height="100"
        />
        <h4>${dat.judul}</h4>
        <p class="font-italic">${dat.pengarang}</p>
        </div>`;
  });
  if (!dataGenre) {
    resultJudul.innerHTML = `<h3 class="col-md-12 text-left">By Genre:</h3><p> No results </p>`;
  } else {
    resultJudul.innerHTML =
      `<h3 class="col-md-12 text-left">By Genre:</h3>` + blockResult.join("\n");
  }
}
