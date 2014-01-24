"use strict";

routie('/messages/:id', function (id) {
    
    var messageData = [
        "",
        "Hey Sam, Is that report ready?<br/>",
        "Yo Sam,<br/><br/>Let's get crunked tomorrow night!<br/><br/>- Curly",
        "Are you interested in losing weight???"
    ];

    $('#msgContent').html(messageData[id]);
})

routie('*', function (path) {

    // Load the html from template
    var tmplContent = $('template[data-href="' + path + '"]').html();
    $('#pvContent').html(tmplContent);

    // If any tab is selected as active, remove active class
    $('#paging > li.active').removeClass('active');

    // Find the li with an anchor with the path in it
    $('#paging > li > a[href="#' + path + '"]')
        .parent()
        .addClass('active');
});

if (location.hash === '') {
    location.hash = '/home';
}