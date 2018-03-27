var pageHeading = document.getElementById('pageHeading');

var n = 0;
function increment() {
    n++;
    return n;
}

pageHeading.addEventListener('click', function () {
    var myElement = document.createElement('p');
    myElement.innerHTML = 'This is click number:' + ' ' + increment();
    document.getElementById('pageHeading').appendChild(myElement);
});
