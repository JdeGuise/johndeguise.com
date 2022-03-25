function handleSliding() {
    console.log('clicked');

    scrollTo(document.body, document.querySelector('#testing').offsetTop, 600);
}

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    
    const difference = to - element.scrollTop;
    const perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}