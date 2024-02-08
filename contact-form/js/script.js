
// map code

const hide__show = () => {
    let mapElement = document.getElementById('map__hidden');
    if (mapElement.style.display === "none") {
        mapElement.style.display = "flex";
    } else {
        mapElement.style.display = "none";
    }
  }


// form validation

const validateForm = () => {

    const nameErr = document.getElementById('nameError');
    const emailErr = document.getElementById('emailError');
    const messageErr = document.getElementById('messageError');

    nameErr.textContent = '';
    emailErr.textContent = '';
    messageErr.textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();

    // name val

    if (name === '') {
        nameErr.style.color = 'red';
        nameErr.style.fontSize = '16px';
        nameErr.textContent = 'Value cannot be empty';
        event.preventDefault();
    }

    // email val

    if (email === '') {
        emailErr.style.color = 'red';
        emailErr.style.fontSize = '16px';
        emailErr.textContent = 'Value cannot be empty';
        event.preventDefault();
    }

    // msg val

    if (msg === '') {
        messageErr.style.color = 'red';
        messageErr.style.fontSize = '16px';
        messageErr.textContent = 'Value cannot be empty';
        event.preventDefault();
    }

}

// nav code

