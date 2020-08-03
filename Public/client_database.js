
const cari = document.getElementById("cariData");
cari.addEventListener('click', async event => {
    const judul = document.getElementById("judul");
    const found = document.getElementById('found');
    let listBuku = document.getElementById('listBuku');

    // URL dan Penambahan Parameter
    let url = new URL('https://www.googleapis.com/books/v1/volumes');
    params = {q:`${judul.value}`,maxResults:40,orderBy:'relevance'};
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    // Panggil data buku
    const response = await fetch(url.href);
    console.log(response);
    const data = await response.json();
    const daftarBuku = data.items
    
    // Menampilkan buku
    console.log(listBuku);
    let output = '<h3>Menampilkan Pencarian</h3>'
    for (let i = 0; i < daftarBuku.length; i++) {
        buku = daftarBuku[i].volumeInfo
        try {
            const imgsrc = buku.imageLinks.thumbnail;
            tampil(imgsrc);
        }
        catch (error) {
            const imgsrc = 'none.jpg';
            tampil(imgsrc);
        }   
        function tampil(imgsrc) {
            //console.log(imgsrc);
            found.innerHTML = `
            <p>Terdapat ${daftarBuku.length} hasil`;
            output += `
                <div class='buku'>
                    <img class='cover' src=${imgsrc} width='256px' height='394px'>
                <div class='keterangan'>
                    <p>Judul : ${buku.title}</p>
                    <p>Pengarang : ${buku.authors} </p>
                </div>
            </div>`;
            listBuku.innerHTML = output
        }
        
        
        
        
    }
    

});