var nameInput = document.getElementById('fname');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log('The first name is:' + ' ' + nameInput.value);
});

var nameInput2 = document.getElementById('lname');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log('The last name is:' + ' ' + nameInput2.value);
});

var nameInput3 = document.getElementById('email');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log('The email is:' + ' ' + nameInput3.value);
});

var nameInput4 = document.getElementById('msg');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log('The message is:' + ' ' + nameInput4.value);
});
