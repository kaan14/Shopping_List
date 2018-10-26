

console.log("connected"); 
var comp = {
  complteted: 1
};
$("#btnSubmit").on("click", function(event) {
    console.log("button worked")
    event.preventDefault();

    var newItem = $("#inputNewItem").val();

    console.log(newItem);

    $.ajax("/api/newTask", {
        type: "POST",
        data: {item: newItem}, 
      }).then((response)=> {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });



$(".do").on("click", function(event){
  var id = $(this).data("id"); 

  $.ajax("/api/list/" + id, {
    type: "PUT",
    data: comp
  }).then(function(){
    console.log("Task Completed!");
    location.reload(); 

    $("")
  });
});


$("#listDone").on("click", function(event) {
  
  var id = event.target.getAttribute('data-id');

  console.log(id); 
  // Send the DELETE request.
  $.ajax("/api/list/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted item", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
