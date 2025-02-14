!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.Lightense = t())
    : (e.Lightense = t());
})(window, function () {
  return (
    (t = {}),
    (e.m = n =
      [
        function (e) {
          function s(e, t) {
            var n,
              s = Object.keys(e);
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(e)),
                t &&
                  (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                s.push.apply(s, n)),
              s
            );
          }
          function n(e) {
            for (var t, n = 1; n < arguments.length; n++)
              (t = null != arguments[n] ? arguments[n] : {}),
                n % 2
                  ? s(Object(t), !0).forEach(function (n) {
                      var s,
                        o = e,
                        i = t[(s = n)];
                      s in o
                        ? Object.defineProperty(o, s, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (o[s] = i);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(t)
                    )
                  : s(Object(t)).forEach(function (n) {
                      Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(t, n)
                      );
                    });
            return e;
          }
          function o(e) {
            return (o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          var i = (function () {
            "use strict";
            var c,
              s = window,
              t = document,
              r = {
                time: 300,
                padding: 40,
                offset: 40,
                keyboard: !0,
                cubicBezier: "cubic-bezier(.2, 0, .1, 1)",
                background: "var(--bg-color-80, rgba(255, 255, 255, .98))",
                zIndex: 1e6,
                beforeShow: void 0,
                afterShow: void 0,
                beforeHide: void 0,
                afterHide: void 0,
              },
              e = {};
            function a(t) {
              var n = e[t];
              if (n) {
                if ("function" != typeof n)
                  throw "config.".concat(t, " must be a function!");
                Reflect.apply(n, e, [e]);
              }
            }
            function l(o) {
              o.src &&
                !o.classList.contains("lightense-target") &&
                (o.classList.add("lightense-target"),
                o.addEventListener(
                  "click",
                  function (c) {
                    return e.keyboard && (c.metaKey || c.ctrlKey)
                      ? s.open(o.src, "_blank")
                      : void (function (o) {
                          if (
                            ((e.target = o),
                            e.target.classList.contains("lightense-open"))
                          )
                            return i();
                          a("beforeShow"),
                            (e.scrollY = s.scrollY),
                            (function (e, t, n) {
                              e.addEventListener(t, function s(o) {
                                Reflect.apply(n, this, o),
                                  e.removeEventListener(t, s);
                              });
                            })(e.target, "transitionend", function () {
                              a("afterShow");
                            });
                          var c = new Image();
                          (c.onload = function () {
                            !(function (n) {
                              var a = n.width,
                                u = n.height,
                                f =
                                  s.pageYOffset ||
                                  t.documentElement.scrollTop ||
                                  0,
                                p =
                                  s.pageXOffset ||
                                  t.documentElement.scrollLeft ||
                                  0,
                                o = e.target.getBoundingClientRect(),
                                h = a / o.width,
                                l =
                                  s.innerWidth ||
                                  t.documentElement.clientWidth ||
                                  0,
                                c =
                                  s.innerHeight ||
                                  t.documentElement.clientHeight ||
                                  0,
                                i =
                                  e.target.getAttribute(
                                    "data-lightense-padding"
                                  ) ||
                                  e.target.getAttribute("data-padding") ||
                                  e.padding,
                                d = i < l ? l - i : l - r.padding,
                                m = i < c ? c - i : c - r.padding,
                                g = a / u,
                                v = d / m;
                              e.scaleFactor =
                                a < d && u < m
                                  ? h
                                  : g < v
                                  ? (m / u) * h
                                  : (d / a) * h;
                              var b = l / 2,
                                j = f + c / 2,
                                y = o.left + p + o.width / 2,
                                _ = o.top + f + o.height / 2;
                              (e.translateX = Math.round(b - y)),
                                (e.translateY = Math.round(j - _));
                            })(this),
                              (function () {
                                e.target.classList.add("lightense-open"),
                                  (e.wrap = t.createElement("div")),
                                  (e.wrap.className = "lightense-wrap"),
                                  setTimeout(function () {
                                    e.target.style.transform =
                                      "scale(" + e.scaleFactor + ")";
                                  }, 20),
                                  e.target.parentNode.insertBefore(
                                    e.wrap,
                                    e.target
                                  ),
                                  e.wrap.appendChild(e.target),
                                  setTimeout(function () {
                                    e.wrap.style.transform =
                                      "translate3d(" +
                                      e.translateX +
                                      "px, " +
                                      e.translateY +
                                      "px, 0)";
                                  }, 20);
                                var o = {
                                    cubicBezier:
                                      e.target.getAttribute(
                                        "data-lightense-cubic-bezier"
                                      ) || e.cubicBezier,
                                    background:
                                      e.target.getAttribute(
                                        "data-lightense-background"
                                      ) ||
                                      e.target.getAttribute(
                                        "data-background"
                                      ) ||
                                      e.background,
                                    zIndex:
                                      e.target.getAttribute(
                                        "data-lightense-z-index"
                                      ) || e.zIndex,
                                  },
                                  s = n(n({}, e), o);
                                d(
                                  "lightense-images-css-computed",
                                  `
    :root {
      --lightense-z-index: `
                                    .concat(
                                      s.zIndex - 1,
                                      `;
      --lightense-backdrop: `
                                    )
                                    .concat(
                                      s.background,
                                      `;
      --lightense-duration: `
                                    )
                                    .concat(
                                      s.time,
                                      `ms;
      --lightense-timing-func: `
                                    )
                                    .concat(
                                      s.cubicBezier,
                                      `;
    }`
                                    )
                                ),
                                  (e.container.style.visibility = "visible"),
                                  setTimeout(function () {
                                    e.container.style.opacity = "1";
                                  }, 20);
                              })(),
                              s.addEventListener("keyup", h, !1),
                              s.addEventListener("scroll", u, !1),
                              e.container.addEventListener("click", i, !1);
                          }),
                            (c.src = e.target.src);
                        })(this);
                  },
                  !1
                ));
            }
            function d(e, n) {
              var s,
                o = t.head || t.getElementsByTagName("head")[0];
              t.getElementById(e) && t.getElementById(e).remove(),
                (s = t.createElement("style")),
                (s.id = e),
                s.styleSheet
                  ? (s.styleSheet.cssText = n)
                  : s.appendChild(t.createTextNode(n)),
                o.appendChild(s);
            }
            function i() {
              a("beforeHide"),
                s.removeEventListener("keyup", h, !1),
                s.removeEventListener("scroll", u, !1),
                e.container.removeEventListener("click", i, !1),
                e.target.classList.remove("lightense-open"),
                (e.wrap.style.transform = ""),
                (e.target.style.transform = ""),
                e.target.classList.add("lightense-transitioning"),
                (e.container.style.opacity = ""),
                setTimeout(function () {
                  a("afterHide"),
                    (e.container.style.visibility = ""),
                    (e.container.style.backgroundColor = ""),
                    e.wrap.parentNode.replaceChild(e.target, e.wrap),
                    e.target.classList.remove("lightense-transitioning");
                }, e.time);
            }
            function u() {
              Math.abs(e.scrollY - s.scrollY) >= e.offset && i();
            }
            function h(e) {
              e.preventDefault(), 27 === e.keyCode && i();
            }
            return function (s) {
              var i =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (c = (function (e) {
                switch (o(e)) {
                  case "undefined":
                    throw "You need to pass an element!";
                  case "string":
                    return t.querySelectorAll(e);
                  case "object":
                    return e;
                }
              })(s)),
                (e = n(n({}, r), i)),
                d(
                  "lightense-images-css",
                  `
:root {
  --lightense-z-index: `
                    .concat(
                      e.zIndex - 1,
                      `;
  --lightense-backdrop: `
                    )
                    .concat(
                      e.background,
                      `;
  --lightense-duration: `
                    )
                    .concat(
                      e.time,
                      `ms;
  --lightense-timing-func: `
                    )
                    .concat(
                      e.cubicBezier,
                      `;
}

.lightense-backdrop {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: calc(var(--lightense-z-index) - 1);
  padding: 0;
  margin: 0;
  transition: opacity var(--lightense-duration) ease;
  cursor: zoom-out;
  opacity: 0;
  background-color: var(--lightense-backdrop);
  visibility: hidden;
}

@supports (-webkit-backdrop-filter: blur(30px)) {
  .lightense-backdrop {
    background-color: var(--lightense-backdrop);
    -webkit-backdrop-filter: blur(30px);
  }
}

@supports (backdrop-filter: blur(30px)) {
  .lightense-backdrop {
    background-color: var(--lightense-backdrop);
    backdrop-filter: blur(30px);
  }
}

.lightense-wrap {
  position: relative;
  transition: transform var(--lightense-duration) var(--lightense-timing-func);
  z-index: var(--lightense-z-index);
  pointer-events: none;
}

.lightense-target {
  cursor: zoom-in;
  transition: transform var(--lightense-duration) var(--lightense-timing-func);
  pointer-events: auto;
}

.lightense-open {
  cursor: zoom-out;
}

.lightense-transitioning {
  pointer-events: none;
}`
                    )
                ),
                t.querySelector(".lightense-backdrop") ||
                  ((e.container = t.createElement("div")),
                  (e.container.className = "lightense-backdrop"),
                  t.body.appendChild(e.container)),
                (function (e) {
                  var t,
                    n = e.length;
                  if (n) for (t = 0; t < n; t++) l(e[t]);
                  else l(e);
                })(c);
            };
          })();
          e.exports = i;
        },
      ]),
    (e.c = t),
    (e.d = function (t, n, s) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: s });
    }),
    (e.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (e.t = function (t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var o,
        s = Object.create(null);
      if (
        (e.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (o in t)
          e.d(
            s,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return s;
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (e.p = ""),
    e((e.s = 0))
  );
  function e(s) {
    if (t[s]) return t[s].exports;
    var o = (t[s] = { i: s, l: !1, exports: {} });
    return n[s].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var t, n;
}),
  !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).reframe =
          t());
  })(this, function () {
    "use strict";
    function e() {
      for (var n = 0, e = 0, s = arguments.length; e < s; e++)
        n += arguments[e].length;
      for (var o = Array(n), i = 0, e = 0; e < s; e++)
        for (var a = arguments[e], t = 0, r = a.length; t < r; t++, i++)
          o[i] = a[t];
      return o;
    }
    return function (t, n) {
      return (
        void 0 === n && (n = "js-reframe"),
        ("string" == typeof t
          ? e(document.querySelectorAll(t))
          : "length" in t
          ? e(t)
          : [t]
        ).forEach(function (e) {
          var t, s, o, i, a, r, c, l;
          -1 !== e.className.split(" ").indexOf(n) ||
            -1 < e.style.width.indexOf("%") ||
            ((s = e.getAttribute("height") || e.offsetHeight),
            (o = e.getAttribute("width") || e.offsetWidth),
            (l =
              (("string" == typeof s ? parseInt(s) : s) /
                ("string" == typeof o ? parseInt(o) : o)) *
              100),
            ((i = document.createElement("div")).className = n),
            ((c = i.style).position = "relative"),
            (c.width = "100%"),
            (c.paddingTop = l + "%"),
            ((t = e.style).position = "absolute"),
            (t.width = "100%"),
            (t.height = "100%"),
            (t.left = "0"),
            (t.top = "0"),
            null !== (a = e.parentNode) && void 0 !== a && a.insertBefore(i, e),
            null !== (r = e.parentNode) && void 0 !== r && r.removeChild(e),
            i.appendChild(e));
        })
      );
    };
  }),
  !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = e || self).LazyLoad = t());
  })(this, function () {
    "use strict";
    function w() {
      return (w =
        Object.assign ||
        function (e) {
          for (var t, s, n = 1; n < arguments.length; n++) {
            t = arguments[n];
            for (s in t)
              Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          }
          return e;
        }).apply(this, arguments);
    }
    var o = "undefined" != typeof window,
      D =
        (o && !("onscroll" in window)) ||
        ("undefined" != typeof navigator &&
          /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
      I = o && "IntersectionObserver" in window,
      $ = o && "classList" in document.createElement("p"),
      U = o && window.devicePixelRatio > 1,
      ne = {
        elements_selector: ".lazy",
        container: D || o ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !0,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1,
      },
      W = function (e) {
        return w({}, ne, e);
      },
      T = function (e, t) {
        var n,
          s = new e(t);
        try {
          n = new CustomEvent("LazyLoad::Initialized", {
            detail: { instance: s },
          });
        } catch {
          (n = document.createEvent("CustomEvent")).initCustomEvent(
            "LazyLoad::Initialized",
            !1,
            !1,
            { instance: s }
          );
        }
        window.dispatchEvent(n);
      },
      t = function (e, t) {
        return e.getAttribute("data-" + t);
      },
      e = function (e, t, n) {
        var s = "data-" + t;
        null !== n ? e.setAttribute(s, n) : e.removeAttribute(s);
      },
      a = function (e) {
        return t(e, "ll-status");
      },
      i = function (t, n) {
        return e(t, "ll-status", n);
      },
      p = function (e) {
        return i(e, null);
      },
      A = function (e) {
        return null === a(e);
      },
      E = function (e) {
        return "native" === a(e);
      },
      se = ["loading", "loaded", "applied", "error"],
      s = function (e, t, n, s) {
        e && (void 0 === s ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, s));
      },
      d = function (e, t) {
        $ ? e.classList.add(t) : (e.className += (e.className ? " " : "") + t);
      },
      j = function (e, t) {
        $
          ? e.classList.remove(t)
          : (e.className = e.className
              .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
              .replace(/^\s+/, "")
              .replace(/\s+$/, ""));
      },
      H = function (e) {
        return e.llTempImage;
      },
      l = function (e, t) {
        if (t) {
          var n = t._observer;
          n && n.unobserve(e);
        }
      },
      g = function (e, t) {
        e && (e.loadingCount += t);
      },
      O = function (e, t) {
        e && (e.toLoadCount = t);
      },
      x = function (e) {
        for (var t, n = [], s = 0; (t = e.children[s]); s += 1)
          "SOURCE" === t.tagName && n.push(t);
        return n;
      },
      n = function (e, t, n) {
        n && e.setAttribute(t, n);
      },
      f = function (e, t) {
        e.removeAttribute(t);
      },
      k = function (e) {
        return !!e.llOriginalAttrs;
      },
      y = function (e) {
        if (!k(e)) {
          var t = {};
          (t.src = e.getAttribute("src")),
            (t.srcset = e.getAttribute("srcset")),
            (t.sizes = e.getAttribute("sizes")),
            (e.llOriginalAttrs = t);
        }
      },
      S = function (e) {
        if (k(e)) {
          var t = e.llOriginalAttrs;
          n(e, "src", t.src), n(e, "srcset", t.srcset), n(e, "sizes", t.sizes);
        }
      },
      M = function (e, s) {
        n(e, "sizes", t(e, s.data_sizes)),
          n(e, "srcset", t(e, s.data_srcset)),
          n(e, "src", t(e, s.data_src));
      },
      F = function (e) {
        f(e, "src"), f(e, "srcset"), f(e, "sizes");
      },
      c = function (e, t) {
        var n = e.parentNode;
        n && "PICTURE" === n.tagName && x(n).forEach(t);
      },
      z = function (e, t) {
        x(e).forEach(t);
      },
      ee = {
        IMG: function (e, t) {
          c(e, function (e) {
            y(e), M(e, t);
          }),
            y(e),
            M(e, t);
        },
        IFRAME: function (e, s) {
          n(e, "src", t(e, s.data_src));
        },
        VIDEO: function (e, s) {
          z(e, function (e) {
            n(e, "src", t(e, s.data_src));
          }),
            n(e, "poster", t(e, s.data_poster)),
            n(e, "src", t(e, s.data_src)),
            e.load();
        },
      },
      N = function (e, t) {
        var n = ee[e.tagName];
        n && n(e, t);
      },
      L = function (e, t, n) {
        g(n, 1),
          d(e, t.class_loading),
          i(e, "loading"),
          s(t.callback_loading, e, n);
      },
      J = {
        IMG: function (t, n) {
          e(t, n.data_src, null),
            e(t, n.data_srcset, null),
            e(t, n.data_sizes, null),
            c(t, function (t) {
              e(t, n.data_srcset, null), e(t, n.data_sizes, null);
            });
        },
        IFRAME: function (t, n) {
          e(t, n.data_src, null);
        },
        VIDEO: function (t, n) {
          e(t, n.data_src, null),
            e(t, n.data_poster, null),
            z(t, function (t) {
              e(t, n.data_src, null);
            });
        },
      },
      Q = function (t, n) {
        e(t, n.data_bg_multi, null), e(t, n.data_bg_multi_hidpi, null);
      },
      _ = function (t, n) {
        var s = J[t.tagName];
        s
          ? s(t, n)
          : (function (t, n) {
              e(t, n.data_bg, null), e(t, n.data_bg_hidpi, null);
            })(t, n);
      },
      G = ["IMG", "IFRAME", "VIDEO"],
      B = function (e, t) {
        !t ||
          (function (e) {
            return e.loadingCount > 0;
          })(t) ||
          (function (e) {
            return e.toLoadCount > 0;
          })(t) ||
          s(e.callback_finish, t);
      },
      V = function (e, t, n) {
        e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
      },
      q = function (e, t, n) {
        e.removeEventListener(t, n);
      },
      h = function (e) {
        return !!e.llEvLisnrs;
      },
      m = function (e) {
        if (h(e)) {
          var n,
            s,
            t = e.llEvLisnrs;
          for (n in t) (s = t[n]), q(e, n, s);
          delete e.llEvLisnrs;
        }
      },
      K = function (e, t, n) {
        !(function (e) {
          delete e.llTempImage;
        })(e),
          g(n, -1),
          (function (e) {
            e && (e.toLoadCount -= 1);
          })(n),
          j(e, t.class_loading),
          t.unobserve_completed && l(e, n);
      },
      v = function (e, t, n) {
        var o = H(e) || e;
        h(o) ||
          (function (e, t, n) {
            h(e) || (e.llEvLisnrs = {});
            var s = "VIDEO" === e.tagName ? "loadeddata" : "load";
            V(e, s, t), V(e, "error", n);
          })(
            o,
            function () {
              !(function (e, t, n, o) {
                var a = E(t);
                K(t, n, o),
                  d(t, n.class_loaded),
                  i(t, "loaded"),
                  _(t, n),
                  s(n.callback_loaded, t, o),
                  a || B(n, o);
              })(0, e, t, n),
                m(o);
            },
            function () {
              !(function (e, t, n, o) {
                var a = E(t);
                K(t, n, o),
                  d(t, n.class_error),
                  i(t, "error"),
                  s(n.callback_error, t, o),
                  a || B(n, o);
              })(0, e, t, n),
                m(o);
            }
          );
      },
      Y = function (e, n, o) {
        !(function (e) {
          e.llTempImage = document.createElement("IMG");
        })(e),
          v(e, n, o),
          (function (e, n, s) {
            var a = t(e, n.data_bg),
              i = t(e, n.data_bg_hidpi),
              o = U && i ? i : a;
            o &&
              ((e.style.backgroundImage = 'url("'.concat(o, '")')),
              H(e).setAttribute("src", o),
              L(e, n, s));
          })(e, n, o),
          (function (e, n, o) {
            var c = t(e, n.data_bg_multi),
              a = t(e, n.data_bg_multi_hidpi),
              r = U && a ? a : c;
            r &&
              ((e.style.backgroundImage = r),
              (function (e, t, n) {
                d(e, t.class_applied),
                  i(e, "applied"),
                  Q(e, t),
                  t.unobserve_completed && l(e, t),
                  s(t.callback_applied, e, n);
              })(e, n, o));
          })(e, n, o);
      },
      b = function (e, t, n) {
        (function (e) {
          return G.indexOf(e.tagName) > -1;
        })(e)
          ? (function (e, t, n) {
              v(e, t, n), N(e, t), L(e, t, n);
            })(e, t, n)
          : Y(e, t, n);
      },
      X = ["IMG", "IFRAME"],
      P = function (e) {
        return e.use_native && "loading" in HTMLImageElement.prototype;
      },
      Z = function (e, t, n) {
        e.forEach(function (e) {
          return (function (e) {
            return e.isIntersecting || e.intersectionRatio > 0;
          })(e)
            ? (function (e, t, n, o) {
                i(e, "entered"),
                  (function (e, t, n) {
                    t.unobserve_entered && l(e, n);
                  })(e, n, o),
                  s(n.callback_enter, e, t, o),
                  (function (e) {
                    return se.indexOf(a(e)) >= 0;
                  })(e) || b(e, n, o);
              })(e.target, e, t, n)
            : (function (e, t, n, o) {
                A(e) ||
                  ((function (e, t, n, o) {
                    n.cancel_on_exit &&
                      (function (e) {
                        return "loading" === a(e);
                      })(e) &&
                      "IMG" === e.tagName &&
                      (m(e),
                      (function (e) {
                        c(e, function (e) {
                          F(e);
                        }),
                          F(e);
                      })(e),
                      (function (e) {
                        c(e, function (e) {
                          S(e);
                        }),
                          S(e);
                      })(e),
                      j(e, n.class_loading),
                      g(o, -1),
                      p(e),
                      s(n.callback_cancel, e, t, o));
                  })(e, t, n, o),
                  s(n.callback_exit, e, t, o));
              })(e.target, e, t, n);
        });
      },
      R = function (e) {
        return Array.prototype.slice.call(e);
      },
      u = function (e) {
        return e.container.querySelectorAll(e.elements_selector);
      },
      te = function (e) {
        return (function (e) {
          return "error" === a(e);
        })(e);
      },
      C = function (e, t) {
        return (function (e) {
          return R(e).filter(A);
        })(e || u(t));
      },
      r = function (e, t) {
        var n = W(e);
        (this._settings = n),
          (this.loadingCount = 0),
          (function (e, t) {
            I &&
              !P(e) &&
              (t._observer = new IntersectionObserver(
                function (n) {
                  Z(n, e, t);
                },
                (function (e) {
                  return {
                    root: e.container === document ? null : e.container,
                    rootMargin: e.thresholds || e.threshold + "px",
                  };
                })(e)
              ));
          })(n, this),
          (function (e, t) {
            o &&
              window.addEventListener("online", function () {
                !(function (e, t) {
                  var n;
                  ((n = u(e)), R(n).filter(te)).forEach(function (t) {
                    j(t, e.class_error), p(t);
                  }),
                    t.update();
                })(e, t);
              });
          })(n, this),
          this.update(t);
      };
    return (
      (r.prototype = {
        update: function (e) {
          var s,
            o,
            n = this._settings,
            t = C(e, n);
          O(this, t.length),
            !D && I
              ? P(n)
                ? (function (e, t, n) {
                    e.forEach(function (e) {
                      -1 !== X.indexOf(e.tagName) &&
                        (e.setAttribute("loading", "lazy"),
                        (function (e, t, n) {
                          v(e, t, n), N(e, t), _(e, t), i(e, "native");
                        })(e, t, n));
                    }),
                      O(n, 0);
                  })(t, n, this)
                : ((o = t),
                  (function (e) {
                    e.disconnect();
                  })((s = this._observer)),
                  (function (e, t) {
                    t.forEach(function (t) {
                      e.observe(t);
                    });
                  })(s, o))
              : this.loadAll(t);
        },
        destroy: function () {
          this._observer && this._observer.disconnect(),
            u(this._settings).forEach(function (e) {
              delete e.llOriginalAttrs;
            }),
            delete this._observer,
            delete this._settings,
            delete this.loadingCount,
            delete this.toLoadCount;
        },
        loadAll: function (e) {
          var t = this,
            n = this._settings;
          C(e, n).forEach(function (e) {
            l(e, t), b(e, n, t);
          });
        },
      }),
      (r.load = function (e, t) {
        var n = W(t);
        b(e, n);
      }),
      (r.resetStatus = function (e) {
        p(e);
      }),
      o &&
        (function (e, t) {
          if (t)
            if (t.length) for (var n, s = 0; (n = t[s]); s += 1) T(e, n);
            else T(e, t);
        })(r, window.lazyLoadOptions),
      r
    );
  });
