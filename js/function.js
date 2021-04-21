$(function(){
    $('itim').click(function(){
        $('itim1').css('width','300px').css('height','200px').css('background-color','black');
    });
    $('itim').blur(function(){
        $('itim1').css('background-color','yellow');
    });
});