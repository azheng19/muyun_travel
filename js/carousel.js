(function () {
  var carousel_list = document.getElementById("carousel_list");
  var left_btn = document.getElementById("left_btn");
  var right_btn = document.getElementById("right_btn");
  var circle_ol = document.getElementById("circle_ol");
  var circle_lis = circle_ol.getElementsByTagName("li");

  var clone_li = carousel_list.firstElementChild.cloneNode(true);
  carousel_list.appendChild(clone_li);

  var idx = 0;

  right_btn.onclick = function () {
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
  };

  left_btn.onclick = function () {
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
})();
