function login() {
  $.ajax({
    method: 'POST',
    data: {
      username: $('#usernameTxt').val(),
      password: $('#passwordTxt').val()
    },
    url: 'apis/login.php',
    success: function(data) {
      var response = JSON.parse(data);
      if (response.status === 'success') {
         alert('success')
      }
    },
    error: function (jqXHR, exception) {
      alert(jqXHR.statusText);
    }
  });
}

/*** initializations ***/
$('#loginBtn').on("click", login);

/** end of initializations */