for (let index = 1; index <= 100; index++) {
  $('#pageSelect').append($('<option>', {
    value: index,
    text: index
  }));
}
// populate the assignedToSelect dropdown in the add ticket modal
function populateAssignedToSelect () {
  for (let index = 1; index <= 100; index++) {
    $('#assignedToSelect').append($('<option>', {
      value: index,
      text: 'Louis Pogi'
    }));
  }
}

$('#addTicketBtn').on("click", function() {
  $('#loadingModal').modal({
    // backdrop: 'static',
    keyboard: false,
    show: true
  });
});


