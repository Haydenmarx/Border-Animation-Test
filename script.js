function borderAnimation (section){
  let timer = 1500;
  let container = '.container';
  if (section) {
    container = section
  }
  let boxTop = $(container).find('.box-top');
  let boxRight = $(container).find('.box-right');
  $(container).children('.box-container').children('.animated').each(function(){
    $(this).animate({
      top: 0,
      left: 0
    }, timer)
    timer = timer+200;
  })
  // boxTop.promise().done(function() {
  //   boxRight.css('border-top', '3px solid black');
  // })
}

function killButtons (parent){
  parent.find('button').removeClass('active-button').text('');
}


$('.animate-button').on('click', function(){
  $('button').css('z-index', '-1');
  let section = "#" + $(this).data('animate');
  let parent = $(this).parent().parent();
  borderAnimation(section);
  killButtons(parent);
})

$('#master-button').on('click', function(){
  $('button').css('z-index', '-1');
  let parent = $('body');
  borderAnimation();
  killButtons(parent);
  $(this).css('display', 'none')  
})