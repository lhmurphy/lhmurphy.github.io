$(document).ready(() => {
  console.log('this is working')

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

  // $('.laura-button').on({
  //   'click': function(){
  //     $('#change-image').attr('src','images/laura.png')
  //   }
  // })
  //
  // $('.code-button').on({
  //   'click': function(){
  //     $('#change-image').attr('src','images/code.jpeg')
  //   }
  // })

  var laura = 'images/laura.png'
  var code = 'images/code.jpeg'

  $('.switch').click(function() {
    if ($('#change-image').attr('src') === code) {
      $('#change-image').attr('src', laura)
    } else {
      $('#change-image').attr('src', code)
    }
  })


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
