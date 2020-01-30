var linkNav = document.querySelectorAll('[href^="#"]'); //выбираем все ссылки к якорю на странице
var tagHtml = document.getElementsByTagName('html')[0];

V = 0.3; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
    e.preventDefault(); //отменяем стандартное поведение

    tagHtml.classList.remove('show-main-nav'); //

    var w = window.pageYOffset, // производим прокрутку
      hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
    t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
      start = null;
    requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash // URL с хэшем
      }
    }
  }, false);
};

document.querySelector('.nav-button').onclick = function () {
  document.querySelector('html').classList.toggle('show-main-nav');
}


/* Скрипт настроек слайдера OWL CAROUSEL 2 */
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2
    },
    800: {
      items: 3
    },
    800: {
      items: 3
    }
  }
});
