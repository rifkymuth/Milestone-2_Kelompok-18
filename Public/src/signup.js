const tombol = document.getElementById("cariData");
tombol.addEventListener("click", async (e) => {
  const user = document.getElementById("user").value;
  const pass = document.querySelector("pass").value;
  const nama = document.getElementById("nama").value;
  const data = { username: user, password: pass, nama: nama };
  window.alert("Account created!");
  //Opsi data
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch("/api/signup", options);
  const json = await response.json();
  console.log(json);
  window.alert("Account created!");
});
