var _html = document.documentElement,
				    isTouch = (('ontouchstart' in _html) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));

            _html.className = _html.className.replace("no-js","js");
            _html.classList.add( isTouch ? "touch" : "no-touch");