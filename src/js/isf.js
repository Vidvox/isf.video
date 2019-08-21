$('.hamburger').click(function(){
  $(this).add('#nav nav').toggleClass('open');
  $('html').toggleClass('noscroll')
});

const title = document.querySelector('.parallax-container img');
const speed = 0.2;

if(title) {

  title.style.transform = 'translateY( calc( var(--scrollparallax) * 1px ) )';

  window.addEventListener('scroll', function() {
    title.style.setProperty('--scrollparallax', ((document.body.scrollTop || document.documentElement.scrollTop)-$(title).offset().top+(0.5*$(title).height())) * speed);
  });
}

mediumZoom('.tutorial-steps img', {
  background: 'rgba(50,57,51, 0.9)'
})