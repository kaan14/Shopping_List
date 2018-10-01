

console.log("connected"); 
$("#btnSubmit").on("click", function(event) {
    console.log("button worked")
    event.preventDefault();

    var newItem = $("#inputNewItem").val();

    console.log(newItem);

    $.ajax("/api/newitem", {
        type: "POST",
        data: newItem, 
      }).then(
        function() {
          console.log("created new item");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });



$("#done").on("click", function(event){
  var id = $(this).data("id"); 

  $.ajax("/api/list" + id, {
    type: "PUT",
    data: 1
  }).then(function(){
    console.log("Task Completed!");
    location.reload(); 
  });
});


$("#delete").on("click", function(event){

  var id = $(this).data("id"); 
  


})
