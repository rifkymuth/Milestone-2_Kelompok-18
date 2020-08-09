var welcomeBook = document.getElementById("welcome-book");

async function getData() {
  const response = await fetch("/api", { method: "GET" });
  const data = await response.json();
}

getData();

const a = jQuery.noConflict();

jQuery(document).ready(function() {
	a(document).ajaxStart(function() {
  a("#status").fadeIn();
  a("#status").html("<p class='loading-gan'>Please wait<span></span><p>");
  a("input").attr("disabled", "disabled");
  a("select").attr("disabled", "disabled");
  a("button").attr("disabled", "disabled");
  a("textarea").attr("disabled", "disabled");
});

a(document).ajaxStop(function() {
  a("input").removeAttr("disabled");
  a("select").removeAttr("disabled");
  a("button").removeAttr("disabled");
  a("textarea").removeAttr("disabled");
});
  if (Cookies.get("loggedin")) {
    if (window.location.pathname == "/hompage.html") {
      a("#logstat").html(
        "<h3 style='color:#ffffff'>Welcome, " +
          Cookies.get("loggedin") +
          '</h3><button class="btn btn-secondary" type="button" onclick="Cookies.remove(\'loggedin\');Cookies.remove(\'loggedin_user\');location.reload();">LOGOUT</button>'
      );
    }
  }
  a("#logstat").fadeIn();
});
