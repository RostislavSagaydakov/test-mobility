document.getElementById("form-subscribe").addEventListener("submit", (event)=> {
    const emailInput = document.getElementById("email"),
          errorText = document.querySelector('#form-subscribe .alert');

    if (!validateEmail(emailInput.value)) {
      event.preventDefault();
      if(errorText == null) {
        emailInput.parentElement.innerHTML += '<div class="alert alert-danger">Please enter a valid email</div>';
      }
    } else {
      if(errorText !== null) {
        errorText.remove()
      }
    }
  });

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }