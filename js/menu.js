(function () {
  var bannerNavUl = document.getElementById("banner-nav-ul");
  var bannerNav = document.getElementById("banner-nav");
  var menus = document.querySelectorAll(".menus-box .menu");
  var bannerLis = document.querySelectorAll("#banner-nav-ul li");

  bannerNavUl.onmouseover = function (e) {
    if (e.target.tagName.toLowerCase() == "li") {
      var t = e.target.getAttribute("data-t");
      for (var i = 0; i < bannerLis.length; i++) {
        bannerLis[i].className = bannerLis[i].getAttribute("data-t");
      }
      e.target.className += " current";
      var themenu = document.querySelector(
        ".menus-box .menu[data-t=" + t + "]"
      );
      for (var i = 0; i < menus.length; i++) {
        menus[i].className = "menu";
      }
      themenu.className = "menu current";
    }
  };

  bannerNav.onmouseleave = function () {
    for (var i = 0; i < bannerLis.length; i++) {
      bannerLis[i].className = bannerLis[i].getAttribute("data-t");
      menus[i].className = "menu";
    }
  };
})();
