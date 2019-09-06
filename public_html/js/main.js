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
    $("#myBtn").click(function() {
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'slow');
    });
}

function playAudio(url) {
    const audio = new Audio(url);
    audio.play();
}

window.onscroll = function() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('myBtn').style.display = "block";
    } else {
        document.getElementById('myBtn').style.display = "none";
    }
};  

handleClickEvents();