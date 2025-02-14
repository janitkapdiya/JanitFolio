document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  !(function (e, t) {
    "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t("undefined" != typeof exports ? exports : (e.dragscroll = {}));
  })(this, function (e) {
    var r,
      c,
      t = window,
      n = document,
      l = "mousemove",
      d = "mouseup",
      u = "mousedown",
      h = "EventListener",
      o = "add" + h,
      i = "remove" + h,
      s = [],
      a = function (e, a) {
        for (e = 0; e < s.length; )
          (a = (a = s[e++]).container || a)[i](u, a.md, 0),
            t[i](d, a.mu, 0),
            t[i](l, a.mm, 0);
        for (
          s = [].slice.call(n.getElementsByClassName("dragscroll")), e = 0;
          e < s.length;

        )
          !(function (e, s, i, a, h, m) {
            (m = e.container || e)[o](
              u,
              (m.md = function (t) {
                (e.hasAttribute("nochilddrag") &&
                  n.elementFromPoint(t.pageX, t.pageY) != m) ||
                  ((a = 1),
                  (s = t.clientX),
                  (i = t.clientY),
                  t.preventDefault());
              }),
              0
            ),
              t[o](
                d,
                (m.mu = function () {
                  a = 0;
                }),
                0
              ),
              t[o](
                l,
                (m.mm = function (t) {
                  a &&
                    (((h = e.scroller || e).scrollLeft -= r =
                      -s + (s = t.clientX)),
                    (h.scrollTop -= c = -i + (i = t.clientY)),
                    e == n.body &&
                      (((h = n.documentElement).scrollLeft -= r),
                      (h.scrollTop -= c)));
                }),
                0
              );
          })(s[e++]);
      };
    "complete" == n.readyState ? a() : t[o]("load", a, 0), (e.reset = a);
  }),
    window.addEventListener("scroll", function () {
      var t =
          window.scrollTop ||
          document.documentElement.scrollTop ||
          document.body.scrollTop,
        e = document.querySelector(".global-cover img");
      e && (e.style.transform = "translate3d(0, " + t / 3 + "px, 0)");
    }),
    reframe(
      ".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)"
    );
  var e,
    n,
    o = new LazyLoad({ elements_selector: ".lazy" });
  const s = document.querySelector(".page__content img, .post__content img"),
    t = document.querySelectorAll(".page__content a img, .post__content a img");
  if (t) {
    for (e = 0; e < t.length; e++) t[e].parentNode.classList.add("image-link");
    for (e = 0; e < t.length; e++) t[e].classList.add("no-lightense");
  }
  s &&
    Lightense(
      ".page__content img:not(.no-lightense), .post__content img:not(.no-lightense)",
      { padding: 60, offset: 30 }
    ),
    (n = document.querySelector(".load-more-posts")),
    n &&
      n.addEventListener("click", function (e) {
        e.preventDefault();
        var t = document.querySelector(".pagination"),
          e =
            pagination_next_url.split("/page")[0] +
            "/page/" +
            pagination_next_page_number +
            "/";
        fetch(e)
          .then(function (e) {
            if (e.ok) return e.text();
          })
          .then(function (e) {
            (n = document.createElement("div")), (n.innerHTML = e);
            for (
              var n,
                i = document.querySelector(".grid"),
                o = n.querySelectorAll(".grid__post"),
                s = 0;
              s < o.length;
              s++
            )
              i.appendChild(o.item(s));
            new LazyLoad({ elements_selector: ".lazy" }),
              pagination_next_page_number++,
              pagination_next_page_number > pagination_available_pages_number &&
                (t.style.display = "none");
          });
      });
});
