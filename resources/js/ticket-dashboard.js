/** variable declarations */
var editMode = false;


/*** functions ***/

// populate the assignedToSelect dropdown in the add ticket modal
function populateAssignedToSelect () {
  $.ajax({
    method: 'GET',
    data: {
      // page: page,
      // size: jqueryCtrl.size,
      // class: programClass
    },
    headers: {
      'Authorization': `Bearer hahahaha`
    },
    url: 'apis/get-source-codes.php',
    success: function(data) {
      var response = JSON.parse(data);
      if (response.status === 'success') {
          this.sourceCodes = response.sourceCodes;
          setTimeout(function(){ 
            launchLoadingModal(false);
          }, 1000);
          $('#sectionTitle').text('Jquery Projects/App Ideas');
          jqueryCtrl.createInterface(this.sourceCodes, response.totalPages, programClass, page);
      }
    },
    error: function (jqXHR, exception) {
      alert(jqXHR.statusText);
    }
  });

  for (let index = 1; index <= 100; index++) {
    $('#assignedToSelect').append($('<option>', {
      value: index,
      text: 'Louis Pogi'
    }));
  }
}

function interfaceController(editMode) {
  $('#ticketFormGroup').hide();
}

$('#addTicketBtn').on("click", function() {
  $('#loadingModal').modal({
    // backdrop: 'static',
    keyboard: false,
    show: true
  });
  populateAssignedToSelect();
});

/*** end of functions ****/

/*** initializations ***/
interfaceController(editMode);
for (let index = 1; index <= 100; index++) {
  $('#pageSelect').append($('<option>', {
    value: index,
    text: index
  }));
}
/***** end of initializations *********/

