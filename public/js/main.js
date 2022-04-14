let i = 0;
let partOneDone = false;
let partTwoDone = false;
let partThreeDone = false;

function main() {
    typeWriter(null, null);
}

function showElements(selector) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), function (entry) {
        entry.classList.add('jumbotron-buttons-fade');
    });
}

function typeWriter(selector, txt) {
    const selectorOne = '.jumbotron-header';
    const txtOne = 'Hello!';

    const selectorTwo = '.jumbotron-description-one';
    const txtTwo = 'Welcome to my website!';

    const selectorThree = '.jumbotron-description-two';
    const txtThree = 'This site serves as a project portfolio, as well as the host of our family blog about our travels!';
    
    const selectorFour = '.jumbotron-buttons';
    const speedMS = 50;

    if(!partOneDone) {
        if(i < txtOne.length) {
            document.querySelector(selectorOne).textContent += txtOne.charAt(i);
            i++;
        } else {
            i = 0;
            partOneDone = true;
        }
        setTimeout(function() {
            typeWriter();
        }, speedMS);
    } else if(!partTwoDone) {
        if(i < txtTwo.length) {
            document.querySelector(selectorTwo).textContent += txtTwo.charAt(i);
            i++;
        } else {
            i = 0;
            partTwoDone = true;
        }
        setTimeout(function() {
            typeWriter();
        }, speedMS);
    } else if(!partThreeDone) {
        if(i < txtThree.length) {
            document.querySelector(selectorThree).textContent += txtThree.charAt(i);
            i++;
        } else {
            i = 0;
            partThreeDone = true;
        }
        setTimeout(function() {
            typeWriter();
        }, speedMS);
    } else {
        showElements(selectorFour);
    }
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