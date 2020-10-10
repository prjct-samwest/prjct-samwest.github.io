(function(){

    const durationTime = 500;
    const shift = 0;
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not(.noscroll)');
    const easing = function (t, b, c, d) { return c*((t=t/d-1)*t*t + 1) + b; };   // easeOutCubic

    const scrollMove = function(href){

        if(href === '') return;

        const startTime = Date.now();
        const scrollFrom = window.pageYOffset;
        const targetElementPosition = document.getElementById(href.replace('#','')).offsetTop - scrollFrom - shift;

        (function scrolling(){
            let currentTime = Date.now() - startTime;
            if (currentTime < durationTime) {
                window.scrollTo(window.pageXOffset,easing(currentTime,scrollFrom,targetElementPosition,durationTime));
                requestAnimationFrame(scrolling);
            }else {
                scrollTo(window.pageXOffset, targetElementPosition + scrollFrom);
            }
        }());

    };

    Array.prototype.slice.call(anchorLinks,0).forEach(function (anchorLink) {
        if(anchorLink.getAttribute('href') === '#') return;
        anchorLink.addEventListener('click',function (e) {
            e.preventDefault();
            scrollMove(this.getAttribute('href'));
        },{passive:false});
    });

    window.addEventListener('load',function () {
        if(location.hash) scrollMove(location.hash);
    });

}());

(function (){

    let scrollTicker = false;
    let scrollEvent;
    let scrollFunction = function scroll(){

        if (!scrollTicker) {
            requestAnimationFrame(function() {
                scrollTicker = false;
                window.dispatchEvent(scrollEvent);
            });
            scrollTicker = true;
        }

    };

    try {
        scrollEvent = new CustomEvent('scrolled');
    }
    catch (e) {
        scrollEvent = document.createEvent('CustomEvent');
        scrollEvent.initCustomEvent('scrolled', false, false, null);
    }

    let hash = document.querySelectorAll('body [id]');
    let toc  = document.querySelectorAll('.Toc a');
    let focusToc = function (){

        for(let i=1; i<hash.length; i++){

            let offsetTop = hash[i].getBoundingClientRect().top;

            if(!(window.innerHeight * 0.25 > offsetTop)){

                highlightToc(i-1);
                break;

            }

            if(i === hash.length-1)
                highlightToc(i);

        }

    };
    let highlightToc = function (index){

        for(let i=0; i<toc.length; i++){
            toc[i].classList.remove('active');
        }

        toc[index].classList.add('active');

    };

    focusToc();
    window.addEventListener('scroll',scrollFunction);
    window.addEventListener('scrolled',focusToc);

})();