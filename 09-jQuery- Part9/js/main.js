$(document).ready(function(){
    $('.shihab').click(function(){
        $('.lorem').slideDown(2000);
    });
    $('button').click(function(){
        $('.lorem').stop();
    });
});