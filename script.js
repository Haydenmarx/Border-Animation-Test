function borderAnimation (section){
  let timer = 1500;
  let container = '.container';
  if (section) {
    container = section
  }
    $(container).children('.box-container').children('div').each(function(){
      $(this).animate({
        top: 0,
        left: 0
      }, timer)
      timer = timer+200;
    })
}

function killButtons (parent){
  console.log(parent);
  parent.find('button').removeClass('active-button').text('');
}


$('.animate-button').on('click', function(){
  let section = "#" + $(this).data('animate');
  let parent = $(this).parent().parent();
  borderAnimation(section);
  killButtons(parent);
})

$('#master-button').on('click', function(){
  let parent = $('body');
  borderAnimation();
  killButtons(parent);  
})