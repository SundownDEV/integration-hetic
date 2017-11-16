/* fonctions de la world map */
function  check_all_opacity() {
  var europe = document.querySelector('.Europe_div')
  var asie = document.querySelector('.Asie_div')
  var oceanie = document.querySelector('.Oceanie_div')
  var amerique_nord = document.querySelector('.Amerique_nord_div')
  var amerique_sud = document.querySelector('.Amerique_sud_div')
  var afrique = document.querySelector('.Afrique_div')

  if (europe.style.opacity == 0 && asie.style.opacity == 0
      && oceanie.style.opacity == 0 && amerique_nord.style.opacity == 0
      && amerique_sud.style.opacity == 0 && afrique.style.opacity == 0)
    return true;
  else
    return false;
}

function fadeIn(el, nb) {
      el.style.display = 'block';

      var tick_in = function() {
        if (el.style.opacity < nb)
        {
          setTimeout(tick_in, nb);
          el.style.opacity = +el.style.opacity + 0.01;
        }
      };
      tick_in();
}

function fadeOut(el) {
      var tick_out = function() {
        if (el.style.opacity > 0)
        {
          setTimeout(tick_out, 1);
          el.style.opacity = el.style.opacity - 0.01;
        }
      };
      tick_out();
}

    var body = document.querySelector('body');
    var el_country = document.querySelectorAll("svg path");
    var el_svg = document.querySelector("svg");

    for (var i = 0; i < el_country.length; i++)
    {
      el_country[i].addEventListener('click', function () {
        var name = this.className.baseVal;
        var string = ".window ." + name + "_div"; 

        var el = document.querySelector(string);

        if (check_all_opacity() == true)
        { 
          body.style.overflow = 'hidden';
          fadeIn(el, 1);
          scrollTo(document.body, document.getElementById('section2').offsetTop, 500);
          var close = document.querySelector(string + " .close");
          window.onclick = function(event) {
          if ( (!(event.target == el)) && event.target.className != (name + '_picture') && el.style.opacity == 1)
            {
              fadeOut(el);
              setTimeout(function() {
                el.style.display = 'none';
            }, 1200);
          el_svg.style.display = 'block';
          body.style.overflow = 'inherit';
          }
        }
        };
      });
    }

/* fonction de transition pour le bouton section-down */
function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

var btnDown = document.querySelectorAll('.btnGoTo').forEach(function(button){
    button.removeAttribute('href');
    button.style.cursor = 'pointer';
    button.addEventListener('click', function(){
        
        scrollTo(document.body, document.getElementById(button.getAttribute('data-target')).offsetTop, 500);
    });
});

function init(){
    var fadeElements = document.querySelectorAll('.FadeIn');
    
    fadeElements.forEach(function(els){
        els.style.display = 'none';
        
        sleep(800).then(() => {
            fadeIn(els, 10);
        });
    });
}