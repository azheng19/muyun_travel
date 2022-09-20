(function () {
  var carousel_list = document.getElementById("carousel_list");
  var left_btn = document.getElementById("left_btn");
  var right_btn = document.getElementById("right_btn");
  var circle_ol = document.getElementById("circle_ol");
  var circle_lis = circle_ol.getElementsByTagName("li");
  var banner = document.getElementById("banner");

  var clone_li = carousel_list.firstElementChild.cloneNode(true);
  carousel_list.appendChild(clone_li);

  var idx = 0;

  var lock = true;

  right_btn.onclick = right_btn_handler;
  function right_btn_handler() {
    if (!lock) return;

    lock = false;

    carousel_list.style.transition = "transform .5s ease 0s";
    idx++;
    carousel_list.style.transform = "translateX(" + -16.666 * idx + "%)";
    if (idx > 4) {
      setTimeout(function () {
        carousel_list.style.transition = "none";
        idx = 0;
        carousel_list.style.transform = "none";
      }, 500);
    }
    setCircles();

    setTimeout(function () {
      lock = true;
    }, 500);
  }

  left_btn.onclick = function () {
    if (!lock) return;

    lock = false;

    if (idx == 0) {
      carousel_list.style.transition = "none";
      carousel_list.style.transform = "translateX(" + -16.666 * 5 + "%)";
      idx = 4;
      setTimeout(function () {
        carousel_list.style.transition = "transform .5s ease 0s";
        carousel_list.style.transform = "translateX(" + -16.666 * idx + "%)";
      }, 0);
    } else {
      idx--;
      carousel_list.style.transform = "translateX(" + -16.666 * idx + "%)";
    }

    setCircles();

    setTimeout(function () {
      lock = true;
    }, 500);
  };

  function setCircles() {
    for (var i = 0; i < 5; i++) {
      if (i == idx % 5) {
        circle_lis[i].className = "current";
      } else {
        circle_lis[i].className = "";
      }
    }
  }

  circle_ol.onclick = function (e) {
    if (e.target.tagName.toLowerCase() == "li") {
      var n = Number(e.target.getAttribute("data-n"));

      idx = n;
      carousel_list.style.transform = "translateX(" + -16.666 * idx + "%)";
      setCircles();
    }
  };

  var timer = setInterval(right_btn_handler, 2000);

  banner.onmouseenter = function () {
    clearInterval(timer);
  };

  banner.onmouseleave = function () {
    clearInterval(timer);
    timer = setInterval(right_btn_handler, 2000);
  };
})();
