function borderAnimation (section){
  let timer = 1500;
  let container = '.container';
  if (section) {
    container = section
  }
  let boxTop = $(container).find('.box-top');
  $(container).children('.box-container').children('.animated').each(function(){
    $(this).animate({
      top: 0,
      left: 0
    }, timer)
    timer = timer+200;
  })
  boxTop.promise().done(function() {
    $('.active-button').css('z-index', '2');
    console.log('done');
  })
}

function killButtons (parent){
  parent.find('button').removeClass('active-button').text('');
}


$('.animate-button').on('click', function(){
  $('.active-button').css('z-index', '-1');
  let section = "#" + $(this).data('animate');
  let parent = $(this).parent().parent();
  borderAnimation(section);
  killButtons(parent);
})

$('#master-button').on('click', function(){
  $('.active-button').css('z-index', '-1');
  let parent = $('body');
  borderAnimation();
  killButtons(parent);
  $(this).css('display', 'none')  
})