 // form validation
function validateForm(){
    document.getElementById('nameError').textContent = ''; 
    document.getElementById('emailError').textContent = ''; 
    document.getElementById('messageError').textContent = ''; 

    let name = document.getElementById('name').value.trim(); 
    let email = document.getElementById('email').value.trim(); 
    let message = document.getElementById('message').value.trim(); 

    // name validation
    // checking if name is empty
    if(name === ''){
        document.getElementById('nameError').textContent = 'Value cannot be empty';
        return false;
    }

    // email validation

    // message validation
}










 ///////////////////////////////////////////////////////////////////////////////
 // modal - popup modal for the map
 document.getElementById('map-marker').addEventListener('click', function() {
    var popup = document.querySelector('.modal');
    popup.style.display = "flex";

    document.getElementById('close').addEventListener('click', function() {
        var close = document.querySelector('.modal');
        popup.style.display = "none";
    });
});

///////////////////////////////////////////////////////////////////////////////////
// navigation
document.getElementById('menu-icon').addEventListener('click', function() {
    var nav = document.querySelector('.main-nav');
    nav.classList.toggle('show');

});