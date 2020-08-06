const welcomeBook = document.getElementById("welcome-book");

async function getData() {
  // Ini yang ngikutin syntax
  const response = await fetch('/api', { method: 'GET' });
  const jsonResponse = await response.json();
  console.log(jsonResponse);
}
  // Ini yang ditambah error handling
//   try {
//     const response = await fetch('/api');
//     if (response.ok) {
//       const jsonResponse = await response.json();
//       return jsonResponse;
//     }
//     throw new Error('Request failed!');
//   } catch (error) {
//     console.log(error);
//   };
// }

getData();
// console.log(data);
//welcomeBook.innerHTML = `<div class='col-md-4 col-xs-12 padding text-center'><img src=${data[0].img}><h3 class="text-center">${data[0].judul}</h3><p class="text-center">${data[0].deskripsi}</p></div>`;
