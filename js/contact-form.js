$(document).ready(function() {
    $("#submit").click(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      var name = $("#f-name").val();
      var email = $("#email").val();
      var message = $("#message-text").val();
        console.log(name, email, message);
      // Basic validation (more can be added)
      if (!name || !email || !message) {
        $("#form-message").text("Please fill in all required fields").css("color", "red");
        return;
      }
  
      $.ajax({
        url: "sendemail.php", // Replace with your PHP script URL
        method: "POST",
        data: {
          name: name,
          email: email,
          message: message
        },
        success: function(response) {
          $("#contactForm").trigger("reset"); // Clear form after successful submission
          $("#form-message").text(response).css("color", "green");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          $("#form-message").text("Error sending message: " + textStatus).css("color", "red");
        }
      });
    });
  });