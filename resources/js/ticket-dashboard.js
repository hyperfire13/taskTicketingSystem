for (let index = 1; index <= 100; index++) {
  $('#pageSelect').append($('<option>', {
    value: index,
    text: index
  }));
}

$('#addTicketBtn').on("click", function() {
  $('#loadingModal').modal({
    // backdrop: 'static',
    keyboard: false,
    show: true
  });
});


