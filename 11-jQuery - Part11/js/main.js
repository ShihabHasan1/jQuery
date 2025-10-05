$(document).ready(function(){
    $('button').click(function(){
        $('.min').css('background','green')
        .slideUp(1000)
        .slideDown(1000)
        .hide(1000);
    });
});