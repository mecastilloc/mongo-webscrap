// Grab the articles as a json
// $.getJSON("/articles", function(data) {
//   // For each one
//   for (var i = 0; i < data.length; i++) {
//     // Display the apropos information on the page
//     $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
//   }
// });


// Whenever someone clicks view/add notes button
$(document).on("click", ".getNotes", function() {
  var thisId = $(this).attr("data-id");
  getNotes(thisId);
  
  });

// When you click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the article from the submit button
  let thisId = $(this).attr("data-id");

//   if($("#bodyinput").val("")){
// alert("You should type something")
//   }
// let thisBody= $("#bodyinput").val()
// let noteId;
  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      //title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .then(function(data, thisId) {
      // Log the response
     
      noteId = data.note._id
      thisId=thisId;
      // Empty the notes section
      //$("#notes").empty();
      
    })
    // Also, remove the values entered in the input and textarea for note entry and append new note
  .then(getNotes(thisId));
    //  $("#savednotes").append("<p>" + thisBody+"</p>");
//  $("#savednotes").append("<button type='button' data-artId='" + thisId +"' data-id='" + noteId + "' class='delNote'>Del</button>");
//   $("#bodyinput").val("");
});

// When you click the delNote button
$(document).on("click", ".delNote", function() {
   // Grab the id associated with the note from the del button
  var noteId = $(this).attr("data-id");
  const artId = $(this).attr("data-artId");

//   console.log(noteId)
//   console.log(artId)
// console.log("/articles/" + noteId + "/"+ artId)
  // Run a DELETE request to delete the note, using note id
  $.ajax({
    method: "DELETE",
    url: "/articles/" + noteId + "/"+ artId,
    // data:{
    //   articleId: artId
    // }
    

    })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      
      
    })
    .then(getNotes(artId))
//borrar de la lista
// getNotes(artId);
//  $("#savednotes").append("<p>" + thisBody+"</p>");
//  $("#savednotes").append("<button data-id='" + noteId + "' class='delNote'>Del</button>");
       
  // $("#bodyinput").val("");
});

function getNotes(thisId){
  // Empty the notes from the note section
  
  $("#notes").empty();
  console.log("get notes clicked");
  // Save the id from the button tag
  

  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // With that done, add the note information to the page
    .then(function(data) {
      console.log(data);

      // The title of the article
      $("#exampleModalScrollableTitle").text(data.title);
      // An input to enter a new title
     // $("#notes").append("<input id='titleinput' name='title' >");
     $("#notes").append("<p id='savednotes'> </p>");

      // A textarea to add a new note body
      $("#notes").append("<textarea id='bodyinput' name='body' required></textarea>");
      // A button to submit a new note, with the id of the article saved to it
      //$(".modal-footer").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
       $("#savenote").attr("data-id",data._id);
      // If there's a note in the article
      if (data.note) {
        // Place the title of the note in the title input
       // $("#titleinput").val(data.note.title);
        // Place the body of the note in the body textarea
       //$("#bodyinput").val(data.note[0].body);
       for (var i = 0; i < data.note.length; i++) {
        //     // Display the apropos information on the page
            $("#savednotes").append("<p data-id='" + data.note[i]._id + "'>" + data.note[i].body+"</p>");
            $("#savednotes").append("<button data-artId='"+data._id+ "' data-id='" + data.note[i]._id + "' class='btn btn-outline-danger btn-sm delNote'>Delete</button>");
      }
    }
    });
    
  }