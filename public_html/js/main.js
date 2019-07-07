// function loadNav() {
//     var request = new XMLHttpRequest();
//     request.open('GET', 'nav.html', true);
//     request.onload = function() {
//         if (request.status >= 200 && request.status < 400) {
//             document.querySelector('#nav_wrapper').innerHTML = request.responseText;
//         }
//     };
//     request.send();
// }

$('#footer_wrapper').load('footer.html');

// function loadFooter() {
//     var request = new XMLHttpRequest();
//     request.open('GET', 'footer.html', true);
//     request.onload = function() {
//         if (request.status >= 200 && request.status < 400) {
//             document.querySelector('#footer_wrapper').innerHTML = request.responseText;
//         }
//     };
//     request.send();
// }

function handleClickEvents() {
    $(".aboutnav").click(function() {
        $('html,body').animate({
            scrollTop: $(".about").offset().top},
            'slow');
    });
    $(".edunav").click(function() {
        $('html,body').animate({
            scrollTop: $(".education").offset().top},
            'slow');
    });
    $(".worknav").click(function() {
        $('html,body').animate({
            scrollTop: $(".work").offset().top},
            'slow');
    });
    $(".projectsnav").click(function() {
        $('html,body').animate({
            scrollTop: $(".projects").offset().top},
            'slow');
    });
    $(".volunteernav").click(function() {
        $('html,body').animate({
            scrollTop: $(".volunteer").offset().top},
            'slow');
    });
    $(".awardsnav").click(function() {
        $('html,body').animate({
            scrollTop: $(".awards").offset().top},
            'slow');
    });
}

// loadNav();
// loadFooter();
handleClickEvents();