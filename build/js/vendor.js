"use strict";

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!(function (e, n, A) {
  function o(e) {
    var n = u.className,
      A = Modernizr._config.classPrefix || "";
    if ((c && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)");
      n = n.replace(o, "$1" + A + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + A + e.join(" " + A)),
      c ? (u.className.baseVal = n) : (u.className = n));
  }
  function t(e, n) {
    return typeof e === n;
  }
  function a() {
    var e, n, A, o, a, i, l;
    for (var f in r)
      if (r.hasOwnProperty(f)) {
        if (
          ((e = []),
          (n = r[f]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (A = 0; A < n.options.aliases.length; A++)
            e.push(n.options.aliases[A].toLowerCase());
        for (o = t(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)
          (i = e[a]),
            (l = i.split(".")),
            1 === l.length
              ? (Modernizr[l[0]] = o)
              : (!Modernizr[l[0]] ||
                  Modernizr[l[0]] instanceof Boolean ||
                  (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
                (Modernizr[l[0]][l[1]] = o)),
            s.push((o ? "" : "no-") + l.join("-"));
      }
  }
  function i(e, n) {
    if ("object" == typeof e) for (var A in e) f(e, A) && i(A, e[A]);
    else {
      e = e.toLowerCase();
      var t = e.split("."),
        a = Modernizr[t[0]];
      if ((2 == t.length && (a = a[t[1]]), "undefined" != typeof a))
        return Modernizr;
      (n = "function" == typeof n ? n() : n),
        1 == t.length
          ? (Modernizr[t[0]] = n)
          : (!Modernizr[t[0]] ||
              Modernizr[t[0]] instanceof Boolean ||
              (Modernizr[t[0]] = new Boolean(Modernizr[t[0]])),
            (Modernizr[t[0]][t[1]] = n)),
        o([(n && 0 != n ? "" : "no-") + t.join("-")]),
        Modernizr._trigger(e, n);
    }
    return Modernizr;
  }
  var s = [],
    r = [],
    l = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var A = this;
        setTimeout(function () {
          n(A[e]);
        }, 0);
      },
      addTest: function (e, n, A) {
        r.push({ name: e, fn: n, options: A });
      },
      addAsyncTest: function (e) {
        r.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = l), (Modernizr = new Modernizr());
  var f,
    u = n.documentElement,
    c = "svg" === u.nodeName.toLowerCase();
  !(function () {
    var e = {}.hasOwnProperty;
    f =
      t(e, "undefined") || t(e.call, "undefined")
        ? function (e, n) {
            return n in e && t(e.constructor.prototype[n], "undefined");
          }
        : function (n, A) {
            return e.call(n, A);
          };
  })(),
    (l._l = {}),
    (l.on = function (e, n) {
      this._l[e] || (this._l[e] = []),
        this._l[e].push(n),
        Modernizr.hasOwnProperty(e) &&
          setTimeout(function () {
            Modernizr._trigger(e, Modernizr[e]);
          }, 0);
    }),
    (l._trigger = function (e, n) {
      if (this._l[e]) {
        var A = this._l[e];
        setTimeout(function () {
          var e, o;
          for (e = 0; e < A.length; e++) (o = A[e])(n);
        }, 0),
          delete this._l[e];
      }
    }),
    Modernizr._q.push(function () {
      l.addTest = i;
    }),
    Modernizr.addAsyncTest(function () {
      function e(e, n, A) {
        function o(n) {
          var o = n && "load" === n.type ? 1 == t.width : !1,
            a = "webp" === e;
          i(e, a && o ? new Boolean(o) : o), A && A(n);
        }
        var t = new Image();
        (t.onerror = o), (t.onload = o), (t.src = n);
      }
      var n = [
          {
            uri:
              "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
            name: "webp",
          },
          {
            uri:
              "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
            name: "webp.alpha",
          },
          {
            uri:
              "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
            name: "webp.animation",
          },
          {
            uri:
              "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
            name: "webp.lossless",
          },
        ],
        A = n.shift();
      e(A.name, A.uri, function (A) {
        if (A && "load" === A.type)
          for (var o = 0; o < n.length; o++) e(n[o].name, n[o].uri);
      });
    }),
    a(),
    o(s),
    delete l.addTest,
    delete l.addAsyncTest;
  for (var p = 0; p < Modernizr._q.length; p++) Modernizr._q[p]();
  e.Modernizr = Modernizr;
})(window, document);
(function () {
  var phoneInputs = document.querySelectorAll('input[type="tel"]');
  var COUNTRY_CODE = "+7";
  var onInputPhoneInput = ({ target }) => {
    var matrix = `${COUNTRY_CODE} (___) ___ __ __`;
    var def = matrix.replace(/\D/g, "");
    var i = 0;
    var val = target.value.replace(/\D/g, "");
    if (def.length >= val.length) {
      val = def;
    }
    target.value = matrix.replace(/./g, (a) => {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
  };
  var onFocusPhoneInput = ({ target }) => {
    if (!target.value) {
      target.value = COUNTRY_CODE;
      target.addEventListener("input", onInputPhoneInput);
      target.addEventListener("blur", onBlurPhoneInput);
    }
  };
  var onBlurPhoneInput = ({ target }) => {
    if (target.value === COUNTRY_CODE) {
      target.value = "";
      target.removeEventListener("input", onInputPhoneInput);
      target.removeEventListener("blur", onBlurPhoneInput);
    }
  };
  var initPhoneMask = () => {
    if (phoneInputs.length) {
      phoneInputs.forEach((input) => {
        input.addEventListener("focus", onFocusPhoneInput);
      });
    }
  };

  initPhoneMask();
})();
