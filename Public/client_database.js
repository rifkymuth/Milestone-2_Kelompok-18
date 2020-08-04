function getBuku() {
    const cari = document.getElementById("cariData");
    cari.addEventListener('click', async event => {
        const judul = document.getElementById("judul");
        const pengarang = document.getElementById("pengarang");
        const found = document.getElementById('found');
        let listBuku = document.getElementById('listBuku');
        if (judul.value === "" && pengarang.value !== "") {
            params = {q:`inauthor:${pengarang.value}`,maxResults:40,orderBy:'relevance'};
        }
        else if (pengarang.value === "" && judul.value !== "") {
            params = {q:`intitle:${judul.value}`,maxResults:40,orderBy:'relevance'};
        }
        else if (judul.value === "" && pengarang.value === "") {
            params = {maxResults:0}
        }
        else {
            params = {q:`intitle:${judul.value}+inauthor:${pengarang.value}`,maxResults:40,orderBy:'relevance'};
        }
        // URL dan Penambahan Parameter
        let url = new URL('https://www.googleapis.com/books/v1/volumes');
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        // Panggil data buku
        const response = await fetch(url.href);
        const data = await response.json();
        const daftarBuku = data.items
        
        // Menampilkan buku
        let output = '<h3>Menampilkan Pencarian</h3>'
        for (let i = 0; i < daftarBuku.length; i++) {
            buku = daftarBuku[i].volumeInfo
            try {
                var imgsrc = buku.imageLinks.thumbnail;
                var isbn = buku.industryIdentifiers[0].identifier
                tampil();
            }
            catch (error) {
                var imgsrc = 'none.jpg';
                var isbn = 'not found'
                tampil();
            }   
            function tampil() {
                //console.log(imgsrc);
                found.innerHTML = `
                <p>Terdapat ${daftarBuku.length} hasil`;
                output += `
                    <div class='buku'>
                        <img class='cover' src=${imgsrc} width='256px' height='394px'>
                        <div class='keterangan'>
                            <p>Judul : <span id='judul'>${buku.title}</span></p>
                            <p>Pengarang : <span id='pengarang'>${buku.authors}</span></p>
                            <p>Tahun Terbit : <span id='tahun'>${buku.publishedDate.substring(0,4)}</span></p>
                            <p>ISBN : <span id='isbn'>${isbn}</span></p>
                            <p>Jumlah halaman : <span id='halaman'>${buku.pageCount}</span></p>
                            <p>Bahasa : <span id='bahasa'>${buku.language}</span></p>
                            <label for="deskripsi">Deskripsi Buku :</label>
                            <div>
                                <textarea id="deskripsi"></textarea>
                            </div>
                            <label for="genre">Genre Buku :</label>
                            <select name="genre" id="genre" onchange="selectValue()">
                                <option value="Horror">Horror</option>
                                <option value="Fantasi">Fantasi</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Romance">Romance</option>
                                <option value="Humor">Humor</option>
                                <option value="Misteri">Misteri</option>
                                <option value="Petualangan">Petualangan</option>
                                <option value="Biografi">Biografi</option>
                                <option value="Ensiklopedia">Ensiklopedia</option>
                                <option value="Pengetahuan">Pengetahaun</option>
                            </select><br>
                            <input type="button" value="Input Data" class="inputData">
                        </div>
                    </div>`;
                
                listBuku.innerHTML = output
                }      
            }
    inputBuku(daftarBuku)});   
}

function selectValue() {
    let x = document.getElementById("genre").value;
    return x;
  }

function inputBuku(daftarBuku) {
    const submit = document.getElementsByClassName('inputData');
    //console.log(daftarBuku);
    for (const el of submit) {
        el.addEventListener('click', async e => {
            //Ambil data
            const parent = e.target.parentNode
            const judul = parent.querySelector('#judul').innerText
            const pengarang = parent.querySelector('#pengarang').innerText
            const tahun = parent.querySelector('#tahun').innerText
            const isbn = parent.querySelector('#isbn').innerText
            const halaman = parent.querySelector('#halaman').innerText
            const bahasa = parent.querySelector('#bahasa').innerText
            const genre = parent.querySelector('#genre').value
            const deskripsi = parent.querySelector('#deskripsi').value
            //Menyimpan ke data
            const data = {judul, pengarang, tahun, isbn, halaman, bahasa, genre, deskripsi};
            //Opsi data
            const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            const response = await fetch('/tambahBuku', options);
            const json = await response.json();
            console.log(json.text);
        })
    }
}


getBuku()


