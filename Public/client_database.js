
const cari = document.getElementById("cariData");
cari.addEventListener('click', async event => {
    const judul = document.getElementById("judul");
    console.log('klik');
    let url = new URL('https://www.googleapis.com/books/v1/volumes');
    params = {q:`${judul.value}`,maxResults:40,orderBy:'relevance'};
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    // Panggil data buku
    const response = await fetch(url.href);
    console.log(response);
    const data = await response.json();
    const daftarBuku = data.items
    const found = document.getElementById('found')
    // Menampilkan buku
    let listBuku = document.getElementById('listBuku')
    console.log(listBuku);
    let output = '<h3>Menampilkan Pencarian</h3>'
    for (let i = 0; i < daftarBuku.length; i++) {
        buku = daftarBuku[i].volumeInfo
        try {
            const imgsrc = buku.imageLinks.thumbnail;
            tampil(imgsrc);
        }
        catch (error) {
            const imgsrc = '../Database/img/404.jpg';
            tampil(imgsrc);
        }
        function tampil(imgsrc) {
            //console.log(imgsrc);
            found.innerHTML = `
            <p>Menampilkan ${daftarBuku.length} hasil`;
            output += `
            <div id='buku'>
                <img src=${imgsrc} width='256px' height='394px'>
            </div>`;
            listBuku.innerHTML = output
        }
        
        
        
        
    }
    

});