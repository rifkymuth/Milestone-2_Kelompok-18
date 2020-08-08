const palingBanyakDibaca = document.getElementById("paling-banyak-dibaca");
const satuSeries = document.getElementById("satu-series");
const kategoriRek = document.getElementById("carouselExampleIndictors");

async function getData() {
  const response = await fetch("/api", { method: "GET" });
  const data = await response.json();

  console.log(data);
  printDataPalingBanyakDibaca(data);
  printDataSatuSeries(data);
  printDataKategoriRek(data);
}

getData();

function printDataSatuSeries(data) {
  satuSeries.innerHTML = `<div class="col-xs-6 col-md-4 col-lg-3">
    <img
      src="${data[2].img}"
      alt="${data[2].judul}"
      class="img-thumbnail "
      width="200"
      height="100"
    />
    <h4>${data[2].judul}</h4>
    <p class="font-italic">${data[2].pengarang}</p>
  </div>
  <div class="col-xs-6 col-md-4 col-lg-3">
    <img
      src="${data[4].img}"
      alt="${data[4].judul}"
      class="img-thumbnail"
      width="200"
      height="100"
    />
    <h4>${data[4].judul}</h4>
    <p class="font-italic">${data[4].pengarang}</p>
  </div>
  `;
}

function printDataPalingBanyakDibaca(data) {
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

function printDataKategoriRek(data) {
  kategoriRek.innerHTML = `<ol class="carousel-indicators">
    <li
      data-target="#carouselExampleIndictors"
      data-slide-to="0"
      class="active"
    ></li>
    <li
      data-target="#carouselExampleIndictors"
      data-slide-to="1"
      class="active"
    ></li>
    <li
      data-target="#carouselExampleIndictors"
      data-slide-to="2"
      class="active"
    ></li>
  </ol>
  <div class="carousel-inner" id="carousel-items">
            <div class="carousel-item active">
              <img class="d-block w-100" src="https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Kategori 1" />
              <div class="carousel-caption">
                <h3>${data[2].genre}</h3>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://images.unsplash.com/photo-1485199433301-8b7102e86995?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=780&q=80" alt="Kategori 2" />
              <div class="carousel-caption">
                <h3>${data[3].genre}</h3>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://images.unsplash.com/photo-1527452017873-7e77e905a04f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Kategori 3" />
              <div class="carousel-caption">
                <h3>${data[0].genre}</h3>
              </div>
            </div>
          </div>
          <a
          class="carousel-control-prev"
          href="#carouselExampleIndictors"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndictors"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>`;
}
