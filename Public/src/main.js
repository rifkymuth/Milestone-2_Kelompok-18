var welcomeBook = document.getElementById("welcome-book");

async function getData() {
  const response = await fetch("/api", { method: "GET" });
  const data = await response.json();
}

getData();
