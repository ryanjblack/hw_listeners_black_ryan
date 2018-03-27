//  Listening for a mouse click, adds an element

var pageHeading = document.getElementById('cus1');

pageHeading.addEventListener('click', function () {
    var myElement = document.createElement('p');
    myElement.innerHTML = 'Each time you click it adds some text.';
    document.getElementById('cus1').appendChild(myElement);
});

//  Listening for a mouse click, adds an element

var pageHeading2 = document.getElementById('cus2');

pageHeading2.addEventListener('wheel', function () {
    var myElement = document.createElement('p');
    myElement.innerHTML = 'Each time you scroll your mouse over this block it adds some text.';
    document.getElementById('cus2').appendChild(myElement);
});

//  Listening for a double mouse click, adds an element

var pageHeading3 = document.getElementById('cus3');

pageHeading3.addEventListener('dblclick', function () {
    var myElement = document.createElement('p');
    myElement.innerHTML = 'Each time you double click me it adds some text.';
    document.getElementById('cus3').appendChild(myElement);
});

//  Listening for the content to be copied to the user's clipboard, adds an element

var pageHeading4 = document.getElementById('cus4');

pageHeading4.addEventListener('copy', function () {
    var myElement = document.createElement('p');
    myElement.innerHTML = 'Each time you copy this section, it adds some text.';
    document.getElementById('cus4').appendChild(myElement);
});

//  Listening for the mouse to over over the text, adds an element

var pageHeading5 = document.getElementById('cus5');

pageHeading5.addEventListener('mouseenter', function () {
    var myElement = document.createElement('p');
    myElement.innerHTML = 'Each time you hover over me it adds some text.';
    document.getElementById('cus5').appendChild(myElement);
});
