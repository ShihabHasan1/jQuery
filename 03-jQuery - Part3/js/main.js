$(document).ready(function(){
    $('button').click(function(){
        $('p:last').hide();
        $('ul li:nth-child(2)').hide();
        $('').hide();
        $('a[target="_blank"]').hide();
    });
});