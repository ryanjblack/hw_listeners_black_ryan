var nameInput = document.getElementById('fname');
var nameInput2 = document.getElementById('lname');
var nameInput3 = document.getElementById('email');
var nameInput4 = document.getElementById('msg');

document.querySelector('form.form').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log('The first name is:' + ' ' + nameInput.value);
    console.log('The last name is:' + ' ' + nameInput2.value);
    console.log('The email is:' + ' ' + nameInput3.value);
    console.log('The message is:' + ' ' + nameInput4.value);
});
