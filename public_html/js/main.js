function handleClickEvents() {
    $("#aboutNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 'slow');
    });
    $("#educationNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#education").offset().top
        }, 'slow');
    });
    $("#workNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 'slow');
    });
    $("#projectsNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 'slow');
    });
    $("#volunteerNav").click(function() {
        $('html, body').animate({
            scrollTop: $(".volunteer").offset().top
        }, 'slow');
    });
    $("#awardsNav").click(function() {
        $('html, body').animate({
            scrollTop: $(".awards").offset().top
        }, 'slow');
    });

    $("#scrollToTop").click(function() {
        $('html, body').animate({
            scrollTop: $("nav").offset().top
        }, 'slow');
    });
}

function playAudio(url) {
    new Audio(url).play();
}

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('scrollToTop').style.display = "block";
    } else {
        document.getElementById('scrollToTop').style.display = "none";
    }
};  

handleClickEvents();