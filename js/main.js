var opts = {delay: 125,duration: 1500,};
ScrollReveal({reset: true}).reveal("p,h1,h2,h3,h4,h5,span,button,.btn,input,.inline-item,.flipdown",opts);
document.addEventListener('DOMContentLoaded', () => {
    var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
    var flipdown = new FlipDown(twoDaysFromNow, "countdown",{
        headings: ["Días", "Hora", "Minutos", "Segundos"],
        theme: "light"
    }).start().ifEnded(() => {
        console.log('The countdown has ended!');
    });
    // Toggle theme
    /*var interval = setInterval(() => {
        let body = document.body;
        body.classList.toggle('light-theme');
        body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
        body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
    }, 5000);*/
});
var cards = $('#card-slider .slider-item').toArray();
startAnim(cards);
function startAnim(array){
    if(array.length >= 4 ) {
        TweenMax.fromTo(array[0], 0.5, {x:0, y: 0, opacity:0.75}, {x:0, y: -120, opacity:0, zIndex: 0, delay:0.03, ease: Cubic.easeInOut, onComplete: sortArray(array)});

        TweenMax.fromTo(array[1], 0.5, {x:79, y: 125, opacity:1, zIndex: 1}, {x:0, y: 0, opacity:0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut});

        TweenMax.to(array[2], 0.5, {bezier:[{x:0, y:250}, {x:65, y:200}, {x:79, y:125}], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut});

        TweenMax.fromTo(array[3], 0.5, {x:0, y:400, opacity: 0, zIndex: 0}, {x:0, y:250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut}, );
    } else {
        $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>')
    }
}

function sortArray(array) {
    clearTimeout(delay);
    var delay = setTimeout(function(){
        var firstElem = array.shift();
        array.push(firstElem);
        return startAnim(array); 
    },3000)
}