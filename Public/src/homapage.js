const palingBanyakDibaca = document.getElementById("paling-banyak-dibaca");

async function getData() {
  const response = await fetch("/api", { method: "GET" });
  const data = await response.json();

  console.log(data);
  palingBanyakDibaca.innerHTML = `<div class="col-xs-6 col-md-4 col-lg-3">
          <img
            src="${data[4].img}"
            alt="${data[4].judul}"
            class="img-thumbnail"
            width="200"
            height="100"
          />
          <h4>${data[4].judul}</h4>
          <p class="font-italic">${data[4].pengarang}</p>
          <p>1000 Sedang Membaca</p>
        </div>
        <div class="col-xs-6 col-md-4 col-lg-3">
          <img
            src="${data[1].img}"
            alt="${data[1].judul}"
            class="img-thumbnail"
            width="200"
            height="100"
          />
          <h4>${data[1].judul}</h4>
          <p class="font-italic">${data[1].pengarang}</p>
          <p>1000 Sedang Membaca</p>
        </div>
        <div class="col-xs-6 col-md-4 col-lg-3">
          <img
            src="${data[3].img}"
            alt="${data[3].judul}"
            class="img-thumbnail"
            width="200"
            height="100"
          />
          <h4>${data[3].judul}</h4>
          <p class="font-italic">${data[3].pengarang}</p>
          <p>1000 Sedang Membaca</p>
        </div>
        <div class="col-xs-6 col-md-4 col-lg-3">
          <img
            src="${data[0].img}"
            alt="${data[0].judul}"
            class="img-thumbnail"
            width="200"
            height="100"
          />
          <h4>${data[0].judul}</h4>
          <p class="font-italic">${data[0].pengarang}</p>
          <p>1000 Sedang Membaca</p>
        </div>
        `;
}

getData();
