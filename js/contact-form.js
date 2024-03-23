$(document).ready(function() {
    $("#submit").click(function(event) {
      event.preventDefault(); // Prevent default form submission
      
      // message variables
      var name = $("#f-name").val();
      var company = $("#c-name").val();
      var email = $("#email").val();
      var contact = $("#contact").val();
      var message = $("#message-text").val();
      
      function clearMessage() {
        setTimeout(() => {
          $("#form-message").css("display", "none")
        }, 5000);
      }
      // Basic validation (more can be added)
      if (!name || !company || !email || !contact || !message) {
        $("#form-message").text("Please fill in all required fields").css({"display": "block", "color": "red"});

        clearMessage();      
        return;
      }
  
      $.ajax({
        url: "sendemail.php", // Replace with your PHP script URL
        method: "POST",
        data: {
          name: name,
          company: company,
          email: email,
          contact: contact,
          message: message
        },
        success: function(response) {
          $("#contactForm").trigger("reset"); // Clear form after successful submission
          $("#form-message").text(response).css("color", "green");

          //clear message after 5s
          clearMessage();
        },
        error: function(jqXHR, textStatus, errorThrown) {
          $("#form-message").text("Error sending message: " + textStatus).css("color", "red");

          //clear message after 5s
          clearMessage();
        }
      });
    });
  });