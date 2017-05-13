$('.animate-button').on('click', function() {
  $('.active-button').css('z-index', '-1').text('Please wait until animation finishes');
  $('.passive-button').text('Please wait until animation finishes');
  let section = "#" + $(this).data('animate');
  let parent = $(this).parent().parent();
  borderAnimation(section);
  killButtons(parent);
})

$('#master-button').on('click', function() {
  $('.active-button').css('z-index', '-1');
  let parent = $('.wrapper');
  borderAnimation();
  killButtons(parent);
  $(this).css('display', 'none')  
})

$('#reset-button').on('click', function() {
  if ($('#master-button').css('display') === 'none') {
    $('#master-button').css('display', 'inline-block');
  }
  if($('.passive-button')[0] !== undefined) {
    $('.animate-button').text('Reset in progress');      
    $('.wrapper').find('.animate-button').css('z-index', '-1');
    let parents = $('.passive-row')
    let boxTop = $('.container').find('.box-top');
    animate(parents, 1500, '-1000%', '-1000%')
    boxTop.promise().done(function() {
      $('.wrapper').find('.passive-button').each(function() {
        $(this).removeClass('passive-button').addClass('active-button').text('Press to animate this row');
        $('.wrapper').find('.animate-button').css('z-index', '2');
        $('.wrapper').children('.passive-row').removeClass('passive-row');
      })
    })
  }
})


function borderAnimation (section) {
  let timer = 1500;
  let container = '.container';
  let left = 0;
  let top = 0;
  if (section) {
    container = section
  }
  let boxTop = $(container).find('.box-top');
  animate (container, timer, top, left);
  boxTop.promise().done(function() {
    $('.active-button').css('z-index', '2').text('Press to animate this row');
    $('.passive-button').text('');
  })
}

function killButtons (parent) {
  parent.find('button').removeClass('active-button').text('').addClass('passive-button');
  if (parent.attr('class') === 'wrapper') {
    parent = '.container'
  }
  $(parent).addClass('passive-row')
}

function animate (container, timer, top, left) {
  $(container).children('.box-container').children('.animated').each(function() {
    if ($(container).hasClass('passive-row')) {
      let className = $(this).attr('class').replace('animated ','');
      let pop = className.indexOf(' ');
      className = className.substring(0, pop);
      switch (className) {
        case 'box-top':
            top = '-1000%';
            left = '0px';
          break;

        case 'box-right':
            top = '0px';
            left = '1000%';
          break;

        case 'box-bottom':
            top = '1000%';
            left = '0px';
          break;          

        case 'box-left':
            top = '0px';
            left = '-1000%';
          break;          
      }
    }    
    $(this).animate({
      top: top,
      left: left
    }, timer)
    timer = timer+200;
  })
}