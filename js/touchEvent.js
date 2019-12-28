var tsFlag = true;
$('html').bind('click', function () {
    if (tsFlag) {              
        $('.front').css('transform', 'translateZ(200px)');
        $('.back').css('transform', 'translateZ(-200px) rotateY(180deg)');
        $('.right').css('transform', 'rotateY(-270deg) translateZ(100px) translateX(100px)');
        $('.left').css('transform', 'rotateY(270deg) translateZ(100px) translateX(-100px)');
        $('.top').css('transform', 'rotateX(-270deg) translateZ(100px) translateY(-100px)');
        $('.bottom').css('transform', 'rotateX(270deg) translateZ(100px) translateY(100px)');               
        tsFlag = false;
    } else {                   
        $('.front,.back,.right,.left,.top,.bottom').removeAttr('style');        
        tsFlag = true;
    }
})