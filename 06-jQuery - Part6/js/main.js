$(document).ready(function(){
    $('button').click(function(){
        $('.level1').fadeToggle();
        $('.level2').fadeToggle('slow');
        $('.level3').fadeToggle(2000);
    });
});