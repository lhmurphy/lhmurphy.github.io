$(document).ready(() => {
  console.log('this is working')

  $('.about').click(function(event) {
    event.preventDefault()
    $('html, body').animate({scrollTop: $('#about').offset().top-5}, 500)
  })

  $('.experience').click(function(event) {
    event.preventDefault()
    $('html, body').animate({scrollTop: $('#experience').offset().top-5}, 500)
  })

  $('.projects').click(function(event) {
    event.preventDefault()
    $('html, body').animate({scrollTop: $('#projects').offset().top-5}, 500)
  })

  $('.contact').click(function(event) {
    event.preventDefault()
    $('html, body').animate({scrollTop: $('#contact').offset().top-0}, 500)
  })

})
