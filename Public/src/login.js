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
    a.get("/api/login?username=" + user + "&password=" + pass, function(
      res,
      status
    ) {
      if (!res.result) {
        a("#status").html(
          '<label style="color:#F44336;"><b>' + res.reason + "</b></label>"
        );
      } else {
        a("#status").html("");
        Cookies.set("loggedin", res.reason);
        Cookies.set("loggedin_user", user);
        window.location.href = "/hompage.html";
      }
    }).fail(function(err) {
      a("#status").html(
        '<label style="color:#F44336;"><b>gagal mengirim data</b></label>'
      );
    });
    return false;
  });
});
