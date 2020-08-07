var welcomeBook = document.getElementById("welcome-book");

async function getData() {
  const response = await fetch("/api", { method: "GET" });
  const data = await response.json();
  //welcomeBook.innerHTML = `<div class='col-md-4 col-xs-12 padding text-center'><img src=${data[0].img}><h3 class="text-center">${data[0].judul}</h3><p class="text-center">${data[0].deskripsi}</p></div>`;
}

getData();
