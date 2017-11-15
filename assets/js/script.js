function fadeIn(el) {
      el.style.display = 'block';

      var tick_in = function() {
        if (el.style.opacity < 1)
        {
          setTimeout(tick_in, 1);
          el.style.opacity = +el.style.opacity + 0.01;
        }
      };
      tick_in();
}

function fadeOut(el) {
      var tick_out = function() {
        if (el.style.opacity > 0)
        {
          setTimeout(tick_out, 3);
          el.style.opacity = el.style.opacity - 0.005;
        }
      };
      tick_out();
}

    var el_country = document.querySelectorAll("svg path");
    var el_svg = document.querySelector("svg");

    for (var i = 0; i < el_country.length; i++)
    {
      el_country[i].addEventListener('click', function () {
        var string = ".window ." + this.className.baseVal + "_div";
        console.log(string);

        var el = document.querySelector(string);

        fadeIn(el);
        el_svg.style.display = 'none';
        window.onclick = function(event) {
          if (!(event.target == el) && el.style.opacity == 1)
            {
              fadeOut(el);
              setTimeout(function() {
                el.style.display = 'none';
            }, 1200);
          el_svg.style.display = 'block';
          }
        };
      });
    }

/* fonction de transition pour le bouton section-down */
function scrollDown() {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
}

var btnDown = document.querySelector('.btn-section-down');

btnDown.addEventListener('click', function(){
    scrollDown();
});