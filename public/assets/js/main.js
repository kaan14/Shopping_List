
$.fn.onEnterKey =
function( closure ) {
    $(this).keypress(
        function( event ) {
            var code = event.keyCode ? event.keyCode : event.which;

            if (code == 13) {
                closure();
                return false;
            }
        } );
}

$("#inputNewItem").onEnterKey(function (e) {
    if (e.which == 13) {
      var newInput = $(this).val();

      console.log(newInput); 
      return false;    //<---- Add this line
    }
  });

console.log("connected"); 
$("#btnSubmit").on("click", function (event) {
    event.preventDefault();

    var newItem = $("#sth").val();

    console.log(newItem);
}); 