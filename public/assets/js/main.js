

console.log("connected"); 
$("#btnSubmit").on("click", function(event) {
    event.preventDefault();

    var newItem = $("#sth").val();

    console.log(newItem);
}); 