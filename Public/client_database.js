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
                            <p>Tahun Terbit : ${buku.publishedDate} </p>
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
    inputBuku()});
    
}


function selectValue() {
    let x = document.getElementById("genre").value;
    return x;
  }
function inputBuku() {
    const submit = document.getElementsByClassName('inputData');
    console.log(submit);
    for (const el of submit) {
        el.addEventListener('click', e => {
            console.log('hello');
        })
    }
}


getBuku()


