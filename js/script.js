
document.title = 'New Title - JAVASCRIPT';

let links = document.getElementsByClassName('link-japko');

links[0].style.fontSize = '40px';

for (let link of links) {
    link.style.fontSize = '25px';
}

function run() {
    updateHeader();
}

function updateHeader() {
    let header = document.getElementById('main-header');
    header.innerHTML = "CHANGED HEADER - JS!!"
}

$(document).ready(function () {

    $('#main-header').prop('innerHTML', 'jQuery123');

    $('.title-one').css('background-color', 'green');
});

//checking if jqueryy is working good
if (window.jQuery) {
    console.log('jQuery is loaded');
} else {
    console.log('jQuery is not loaded');
}