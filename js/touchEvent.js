// .wrap:hover .front {
//     transform: translateZ(200px);
// }

// .wrap:hover .back {
//     transform: translateZ(-200px) rotateY(180deg);
// }

// .wrap:hover .right {
//     transform: rotateY(-270deg) translateZ(100px) translateX(100px);
// }

// .wrap:hover .left {
//     transform: rotateY(270deg) translateZ(100px) translateX(-100px);
// }

// .wrap:hover .top {
//     transform: rotateX(-270deg) translateZ(100px) translateY(-100px);
// }

// .wrap:hover .bottom {
//     transform: rotateX(270deg) translateZ(100px) translateY(100px);
// }

$('.wrap').bind('touchstart',function(){
   $('.front').css('transform','translateZ(200px)');
   $('.back').css('transform','translateZ(-200px) rotateY(180deg)');
   $('.right').css('transform','rotateY(-270deg) translateZ(100px) translateX(100px)');
   $('.left').css('transform', 'rotateY(270deg) translateZ(100px) translateX(-100px)');
   $('.top').css('transform', 'rotateX(-270deg) translateZ(100px) translateY(-100px)');
   $('.bottom').css('transform','rotateX(270deg) translateZ(100px) translateY(100px)');
})