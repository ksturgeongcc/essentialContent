
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
        return false;
    }

    const namePattern = /^[a-zA-Z ]+$/;
    if (!namePattern.test(name)) {
        nameErr.style.color = 'red';
        nameErr.style.fontSize = '16px';
        nameErr.textContent = 'Please only include letters';
        event.preventDefault();
        return false;
    };

// email val

    if (email === '') {
        emailErr.style.color = 'red';
        emailErr.style.fontSize = '16px';
        emailErr.textContent = 'Value cannot be empty';
        event.preventDefault();
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailErr.style.color = 'red';
        emailErr.style.fontSize = '16px';
        emailErr.textContent = 'Please only include letters';
        event.preventDefault();
        return false;
    };

    // msg val

    if (msg === '') {
        messageErr.style.color = 'red';
        messageErr.style.fontSize = '16px';
        messageErr.textContent = 'Value cannot be empty';
        event.preventDefault();
        return false;
    }

// Form is valid, save data to local storage
    saveDataLocally(name, email, message);

// Redirect to confirmation.html
    window.location.href = 'confirmation.html';

    return false; // Prevent the form from submitting traditionally
}

function saveDataLocally(name, email, message) {
    // Create an object to represent the form data
    var formData = {
        name: name,
        email: email,
        message: message,
    };

    // Convert the object to a JSON string and save to local storage
    localStorage.setItem('formData', JSON.stringify(formData));

}
///////////////////////////////////// returning data from local storage to confirmation page ////////////////////////////////////////

// Retrieve data from local storage
var storedData = localStorage.getItem('formData');
// Display the stored data
if (storedData) {
    var parsedData = JSON.parse(storedData);
    document.getElementById('storedName').textContent = parsedData.name;
    document.getElementById('storedEmail').textContent = parsedData.email;
    document.getElementById('storedMessage').textContent = parsedData.message;
                                                     
} else {
    document.getElementById('storedData').textContent = "No data stored.";
}



// retrieve the date and put it into a container with the ID storedData - no real formatting here
// if (storedData) {
//     var parsedData = JSON.parse(storedData);
//     document.getElementById('storedData').textContent = "Name: " + parsedData.name + 
//                                                       ", Email: " + parsedData.email + 
//                                                       ", Message: " + parsedData.message;
// } else {
//     document.getElementById('storedData').textContent = "No data stored.";
// }




////////////////////////////////////    MODAL   ////////////////////////////////////////

document.getElementById('map-marker').addEventListener('click', function() {
    var popup = document.querySelector('.modal');
    popup.style.display = "flex";

    document.getElementById('close').addEventListener('click', function() {
        var close = document.querySelector('.modal');
        popup.style.display = "none";
    });
});

// navigation
document.getElementById('menu-icon').addEventListener('click', function() {
    var nav = document.querySelector('.main-nav');
    nav.classList.toggle('show');

});

// hammenu

const hide__showMenu = () => {
    let navElement = document.getElementById('navi');
    if (navElement.style.display === "none") {
        navElement.style.display = "flex";
    } else {
        navElement.style.display = "none";
    }
}