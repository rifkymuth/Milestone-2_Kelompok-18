jQuery(document).ready(function() {
  if (Cookies.get("loggedin")) {
    window.location.href = "/hompage.html";
  }
  a("#cariData").click(function() {
    if (Cookies.get("loggedin")) {
      return false;
    }
    const user = a("#user").val();
    const pass = a("#pass").val();
    const nama = document.getElementById("nama").value;
    a.post(
      "/api/signup",
      { username: user, password: pass, nama: nama },
      function(res, status) {
        if (!res.result) {
          a("#status").html(
            '<label style="color:#F44336;"><b>' + res.reason + "</b></label>"
          );
        } else {
          window.location.href = "/login.html";
        }
      }
    ).fail(function(err) {
      a("#status").html(
        '<label style="color:#F44336;"><b>gagal mengirim data</b></label>'
      );
    });
    return false;
  });
});
