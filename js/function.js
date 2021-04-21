$(function(){
    $('ala').click(function(){
        $('ala2').css('background-color','green');
    }).blur(function(){
        $('ala2').css('background-color','gray');
    });
});