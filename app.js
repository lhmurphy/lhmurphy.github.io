$(document).ready(() => {
  console.log('this is working')

  $('#navbar li').addClass('navbar-animate')

  // $('.switch').click(function(){
  //   if (!$('#profile-pic').hasClass('formal')) {
  //     $('#profile-pic').attr('src', 'images/code.jpeg')
  //     $('#profile-pic').addClass('formal')
  //     $('#profile-pic').removeClass('casual')
  //   } else  {
  //     $('#profile-pic').attr('src', 'images/laura.png')
  //     $('#profile-pic').addClass('casual')
  //     $('#profile-pic').removeClass('formal')
  //   }
  // })

  $('#checkbox').click(function () {
    $('#profile-pic').toggleClass('casual')
  })

  $('.about').click(function(event) {
    event.preventDefault()
    $('html, body').animate({scrollTop: $('#about').offset().top-75}, 500)
  })

  $('.experience').click(function(event) {
    event.preventDefault()
    $('html, body').animate({scrollTop: $('#experience').offset().top-75}, 500)
  })

  $('.projects').click(function(event) {
    event.preventDefault()
    $('html, body').animate({scrollTop: $('#projects').offset().top-75}, 500)
  })

  $('.contact').click(function(event) {
    event.preventDefault()
    $('html, body').animate({scrollTop: $('#contact').offset().top-0}, 500)
  })

})
