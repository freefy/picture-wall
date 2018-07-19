var $wrapper = $('.wrapper');
var timer = setTimeout(function(){
    $wrapper.removeClass('init');
},200) 
var $li = $('li');
$li.on('click',function(){
    $wrapper.addClass('wrapper-active');
    $(this).addClass('active');
})
var $close = $('.close');
$close.on('click',function(e){
    e.stopPropagation();
    $('.active').removeClass('active');
    $wrapper.removeClass('wrapper-active');
})