$(document).ready(function(){
    $('button').click(function(){
       var shihab = $('div');
       shihab.animate({height: '300px',opacity:'0.5'}, "slow");
        shihab.animate({width: '300px',opacity:'0.5'}, "slow");
        shihab.animate({height: '100px',opacity:'0.4'}, "slow");
        shihab.animate({width: '100px',opacity:'1'}, "slow");
    });
});