/*!
 * jQuery JavaScript Library v1.11.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-17T15:27Z
 */
! function(t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
	function n(t) {
		var e = t.length,
			n = rt.type(t);
		return "function" === n || rt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
	}

	function i(t, e, n) {
		if (rt.isFunction(e)) return rt.grep(t, function(t, i) {
			return !!e.call(t, i, t) !== n
		});
		if (e.nodeType) return rt.grep(t, function(t) {
			return t === e !== n
		});
		if ("string" == typeof e) {
			if (ft.test(e)) return rt.filter(e, t, n);
			e = rt.filter(e, t)
		}
		return rt.grep(t, function(t) {
			return rt.inArray(t, e) >= 0 !== n
		})
	}

	function r(t, e) {
		do t = t[e]; while (t && 1 !== t.nodeType);
		return t
	}

	function o(t) {
		var e = xt[t] = {};
		return rt.each(t.match(yt) || [], function(t, n) {
			e[n] = !0
		}), e
	}

	function a() {
		pt.addEventListener ? (pt.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (pt.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
	}

	function s() {
		(pt.addEventListener || "load" === event.type || "complete" === pt.readyState) && (a(), rt.ready())
	}

	function l(t, e, n) {
		if (void 0 === n && 1 === t.nodeType) {
			var i = "data-" + e.replace(Ct, "-$1").toLowerCase();
			if (n = t.getAttribute(i), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? rt.parseJSON(n) : n
				} catch (r) {}
				rt.data(t, e, n)
			} else n = void 0
		}
		return n
	}

	function u(t) {
		var e;
		for (e in t)
			if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
		return !0
	}

	function c(t, e, n, i) {
		if (rt.acceptData(t)) {
			var r, o, a = rt.expando,
				s = t.nodeType,
				l = s ? rt.cache : t,
				u = s ? t[a] : t[a] && a;
			if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = s ? t[a] = V.pop() || rt.guid++ : a), l[u] || (l[u] = s ? {} : {
				toJSON: rt.noop
			}), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = rt.extend(l[u], e) : l[u].data = rt.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[rt.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[rt.camelCase(e)])) : r = o, r
		}
	}

	function h(t, e, n) {
		if (rt.acceptData(t)) {
			var i, r, o = t.nodeType,
				a = o ? rt.cache : t,
				s = o ? t[rt.expando] : rt.expando;
			if (a[s]) {
				if (e && (i = n ? a[s] : a[s].data)) {
					rt.isArray(e) ? e = e.concat(rt.map(e, rt.camelCase)) : e in i ? e = [e] : (e = rt.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
					for (; r--;) delete i[e[r]];
					if (n ? !u(i) : !rt.isEmptyObject(i)) return
				}(n || (delete a[s].data, u(a[s]))) && (o ? rt.cleanData([t], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}

	function f() {
		return !0
	}

	function d() {
		return !1
	}

	function p() {
		try {
			return pt.activeElement
		} catch (t) {}
	}

	function m(t) {
		var e = It.split("|"),
			n = t.createDocumentFragment();
		if (n.createElement)
			for (; e.length;) n.createElement(e.pop());
		return n
	}

	function g(t, e) {
		var n, i, r = 0,
			o = typeof t.getElementsByTagName !== Tt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Tt ? t.querySelectorAll(e || "*") : void 0;
		if (!o)
			for (o = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || rt.nodeName(i, e) ? o.push(i) : rt.merge(o, g(i, e));
		return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], o) : o
	}

	function v(t) {
		Ot.test(t.type) && (t.defaultChecked = t.checked)
	}

	function _(t, e) {
		return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}

	function y(t) {
		return t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type, t
	}

	function x(t) {
		var e = $t.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}

	function b(t, e) {
		for (var n, i = 0; null != (n = t[i]); i++) rt._data(n, "globalEval", !e || rt._data(e[i], "globalEval"))
	}

	function w(t, e) {
		if (1 === e.nodeType && rt.hasData(t)) {
			var n, i, r, o = rt._data(t),
				a = rt._data(e, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)
					for (i = 0, r = s[n].length; r > i; i++) rt.event.add(e, n, s[n][i])
			}
			a.data && (a.data = rt.extend({}, a.data))
		}
	}

	function T(t, e) {
		var n, i, r;
		if (1 === e.nodeType) {
			if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[rt.expando]) {
				r = rt._data(e);
				for (i in r.events) rt.removeEvent(e, i, r.handle);
				e.removeAttribute(rt.expando)
			}
			"script" === n && e.text !== t.text ? (y(e).text = t.text, x(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ot.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
		}
	}

	function S(e, n) {
		var i, r = rt(n.createElement(e)).appendTo(n.body),
			o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : rt.css(r[0], "display");
		return r.detach(), o
	}

	function C(t) {
		var e = pt,
			n = Kt[t];
		return n || (n = S(t, e), "none" !== n && n || (Jt = (Jt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Jt[0].contentWindow || Jt[0].contentDocument).document, e.write(), e.close(), n = S(t, e), Jt.detach()), Kt[t] = n), n
	}

	function k(t, e) {
		return {
			get: function() {
				var n = t();
				if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
			}
		}
	}

	function E(t, e) {
		if (e in t) return e;
		for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = fe.length; r--;)
			if (e = fe[r] + n, e in t) return e;
		return i
	}

	function P(t, e) {
		for (var n, i, r, o = [], a = 0, s = t.length; s > a; a++) i = t[a], i.style && (o[a] = rt._data(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pt(i) && (o[a] = rt._data(i, "olddisplay", C(i.nodeName)))) : (r = Pt(i), (n && "none" !== n || !r) && rt._data(i, "olddisplay", r ? n : rt.css(i, "display"))));
		for (a = 0; s > a; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
		return t
	}

	function A(t, e, n) {
		var i = le.exec(e);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
	}

	function O(t, e, n, i, r) {
		for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += rt.css(t, n + Et[o], !0, r)), i ? ("content" === n && (a -= rt.css(t, "padding" + Et[o], !0, r)), "margin" !== n && (a -= rt.css(t, "border" + Et[o] + "Width", !0, r))) : (a += rt.css(t, "padding" + Et[o], !0, r), "padding" !== n && (a += rt.css(t, "border" + Et[o] + "Width", !0, r)));
		return a
	}

	function M(t, e, n) {
		var i = !0,
			r = "width" === e ? t.offsetWidth : t.offsetHeight,
			o = te(t),
			a = nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, o);
		if (0 >= r || null == r) {
			if (r = ee(t, e, o), (0 > r || null == r) && (r = t.style[e]), ie.test(r)) return r;
			i = a && (nt.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
		}
		return r + O(t, e, n || (a ? "border" : "content"), i, o) + "px"
	}

	function D(t, e, n, i, r) {
		return new D.prototype.init(t, e, n, i, r)
	}

	function R() {
		return setTimeout(function() {
			de = void 0
		}), de = rt.now()
	}

	function N(t, e) {
		var n, i = {
				height: t
			},
			r = 0;
		for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Et[r], i["margin" + n] = i["padding" + n] = t;
		return e && (i.opacity = i.width = t), i
	}

	function j(t, e, n) {
		for (var i, r = (ye[e] || []).concat(ye["*"]), o = 0, a = r.length; a > o; o++)
			if (i = r[o].call(n, e, t)) return i
	}

	function I(t, e, n) {
		var i, r, o, a, s, l, u, c, h = this,
			f = {},
			d = t.style,
			p = t.nodeType && Pt(t),
			m = rt._data(t, "fxshow");
		n.queue || (s = rt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, h.always(function() {
			h.always(function() {
				s.unqueued--, rt.queue(t, "fx").length || s.empty.fire()
			})
		})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = rt.css(t, "display"), c = "none" === u ? rt._data(t, "olddisplay") || C(t.nodeName) : u, "inline" === c && "none" === rt.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== C(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", nt.shrinkWrapBlocks() || h.always(function() {
			d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
		}));
		for (i in e)
			if (r = e[i], me.exec(r)) {
				if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
					if ("show" !== r || !m || void 0 === m[i]) continue;
					p = !0
				}
				f[i] = m && m[i] || rt.style(t, i)
			} else u = void 0;
		if (rt.isEmptyObject(f)) "inline" === ("none" === u ? C(t.nodeName) : u) && (d.display = u);
		else {
			m ? "hidden" in m && (p = m.hidden) : m = rt._data(t, "fxshow", {}), o && (m.hidden = !p), p ? rt(t).show() : h.done(function() {
				rt(t).hide()
			}), h.done(function() {
				var e;
				rt._removeData(t, "fxshow");
				for (e in f) rt.style(t, e, f[e])
			});
			for (i in f) a = j(p ? m[i] : 0, i, h), i in m || (m[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function L(t, e) {
		var n, i, r, o, a;
		for (n in t)
			if (i = rt.camelCase(n), r = e[i], o = t[n], rt.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), a = rt.cssHooks[i], a && "expand" in a) {
				o = a.expand(o), delete t[i];
				for (n in o) n in t || (t[n] = o[n], e[n] = r)
			} else e[i] = r
	}

	function B(t, e, n) {
		var i, r, o = 0,
			a = _e.length,
			s = rt.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (r) return !1;
				for (var e = de || R(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
				return s.notifyWith(t, [u, o, n]), 1 > o && l ? n : (s.resolveWith(t, [u]), !1)
			},
			u = s.promise({
				elem: t,
				props: rt.extend({}, e),
				opts: rt.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: e,
				originalOptions: n,
				startTime: de || R(),
				duration: n.duration,
				tweens: [],
				createTween: function(e, n) {
					var i = rt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
					return u.tweens.push(i), i
				},
				stop: function(e) {
					var n = 0,
						i = e ? u.tweens.length : 0;
					if (r) return this;
					for (r = !0; i > n; n++) u.tweens[n].run(1);
					return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
				}
			}),
			c = u.props;
		for (L(c, u.opts.specialEasing); a > o; o++)
			if (i = _e[o].call(u, t, c, u.opts)) return i;
		return rt.map(c, j, u), rt.isFunction(u.opts.start) && u.opts.start.call(t, u), rt.fx.timer(rt.extend(l, {
			elem: t,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function z(t) {
		return function(e, n) {
			"string" != typeof e && (n = e, e = "*");
			var i, r = 0,
				o = e.toLowerCase().match(yt) || [];
			if (rt.isFunction(n))
				for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
		}
	}

	function F(t, e, n, i) {
		function r(s) {
			var l;
			return o[s] = !0, rt.each(t[s] || [], function(t, s) {
				var u = s(e, n, i);
				return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
			}), l
		}
		var o = {},
			a = t === We;
		return r(e.dataTypes[0]) || !o["*"] && r("*")
	}

	function q(t, e) {
		var n, i, r = rt.ajaxSettings.flatOptions || {};
		for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
		return n && rt.extend(!0, t, n), t
	}

	function H(t, e, n) {
		for (var i, r, o, a, s = t.contents, l = t.dataTypes;
			"*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
		if (r)
			for (a in s)
				if (s[a] && s[a].test(r)) {
					l.unshift(a);
					break
				}
		if (l[0] in n) o = l[0];
		else {
			for (a in n) {
				if (!l[0] || t.converters[a + " " + l[0]]) {
					o = a;
					break
				}
				i || (i = a)
			}
			o = o || i
		}
		return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
	}

	function W(t, e, n, i) {
		var r, o, a, s, l, u = {},
			c = t.dataTypes.slice();
		if (c[1])
			for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
		for (o = c.shift(); o;)
			if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
				if ("*" === o) o = l;
				else if ("*" !== l && l !== o) {
			if (a = u[l + " " + o] || u["* " + o], !a)
				for (r in u)
					if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
						a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && t["throws"]) e = a(e);
				else try {
					e = a(e)
				} catch (h) {
					return {
						state: "parsererror",
						error: a ? h : "No conversion from " + l + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: e
		}
	}

	function X(t, e, n, i) {
		var r;
		if (rt.isArray(e)) rt.each(e, function(e, r) {
			n || $e.test(t) ? i(t, r) : X(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
		});
		else if (n || "object" !== rt.type(e)) i(t, e);
		else
			for (r in e) X(t + "[" + r + "]", e[r], n, i)
	}

	function U() {
		try {
			return new t.XMLHttpRequest
		} catch (e) {}
	}

	function Y() {
		try {
			return new t.ActiveXObject("Microsoft.XMLHTTP")
		} catch (e) {}
	}

	function $(t) {
		return rt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
	}
	var V = [],
		Q = V.slice,
		G = V.concat,
		Z = V.push,
		J = V.indexOf,
		K = {},
		tt = K.toString,
		et = K.hasOwnProperty,
		nt = {},
		it = "1.11.2",
		rt = function(t, e) {
			return new rt.fn.init(t, e)
		},
		ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		at = /^-ms-/,
		st = /-([\da-z])/gi,
		lt = function(t, e) {
			return e.toUpperCase()
		};
	rt.fn = rt.prototype = {
		jquery: it,
		constructor: rt,
		selector: "",
		length: 0,
		toArray: function() {
			return Q.call(this)
		},
		get: function(t) {
			return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
		},
		pushStack: function(t) {
			var e = rt.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function(t, e) {
			return rt.each(this, t, e)
		},
		map: function(t) {
			return this.pushStack(rt.map(this, function(e, n) {
				return t.call(e, n, e)
			}))
		},
		slice: function() {
			return this.pushStack(Q.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(t) {
			var e = this.length,
				n = +t + (0 > t ? e : 0);
			return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: Z,
		sort: V.sort,
		splice: V.splice
	}, rt.extend = rt.fn.extend = function() {
		var t, e, n, i, r, o, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || rt.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
			if (null != (r = arguments[s]))
				for (i in r) t = a[i], n = r[i], a !== n && (u && n && (rt.isPlainObject(n) || (e = rt.isArray(n))) ? (e ? (e = !1, o = t && rt.isArray(t) ? t : []) : o = t && rt.isPlainObject(t) ? t : {}, a[i] = rt.extend(u, o, n)) : void 0 !== n && (a[i] = n));
		return a
	}, rt.extend({
		expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isFunction: function(t) {
			return "function" === rt.type(t)
		},
		isArray: Array.isArray || function(t) {
			return "array" === rt.type(t)
		},
		isWindow: function(t) {
			return null != t && t == t.window
		},
		isNumeric: function(t) {
			return !rt.isArray(t) && t - parseFloat(t) + 1 >= 0
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		isPlainObject: function(t) {
			var e;
			if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
			try {
				if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			if (nt.ownLast)
				for (e in t) return et.call(t, e);
			for (e in t);
			return void 0 === e || et.call(t, e)
		},
		type: function(t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? K[tt.call(t)] || "object" : typeof t
		},
		globalEval: function(e) {
			e && rt.trim(e) && (t.execScript || function(e) {
				t.eval.call(t, e)
			})(e)
		},
		camelCase: function(t) {
			return t.replace(at, "ms-").replace(st, lt)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e, i) {
			var r, o = 0,
				a = t.length,
				s = n(t);
			if (i) {
				if (s)
					for (; a > o && (r = e.apply(t[o], i), r !== !1); o++);
				else
					for (o in t)
						if (r = e.apply(t[o], i), r === !1) break
			} else if (s)
				for (; a > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
			else
				for (o in t)
					if (r = e.call(t[o], o, t[o]), r === !1) break; return t
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(ot, "")
		},
		makeArray: function(t, e) {
			var i = e || [];
			return null != t && (n(Object(t)) ? rt.merge(i, "string" == typeof t ? [t] : t) : Z.call(i, t)), i
		},
		inArray: function(t, e, n) {
			var i;
			if (e) {
				if (J) return J.call(e, t, n);
				for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
					if (n in e && e[n] === t) return n
			}
			return -1
		},
		merge: function(t, e) {
			for (var n = +e.length, i = 0, r = t.length; n > i;) t[r++] = e[i++];
			if (n !== n)
				for (; void 0 !== e[i];) t[r++] = e[i++];
			return t.length = r, t
		},
		grep: function(t, e, n) {
			for (var i, r = [], o = 0, a = t.length, s = !n; a > o; o++) i = !e(t[o], o), i !== s && r.push(t[o]);
			return r
		},
		map: function(t, e, i) {
			var r, o = 0,
				a = t.length,
				s = n(t),
				l = [];
			if (s)
				for (; a > o; o++) r = e(t[o], o, i), null != r && l.push(r);
			else
				for (o in t) r = e(t[o], o, i), null != r && l.push(r);
			return G.apply([], l)
		},
		guid: 1,
		proxy: function(t, e) {
			var n, i, r;
			return "string" == typeof e && (r = t[e], e = t, t = r), rt.isFunction(t) ? (n = Q.call(arguments, 2), i = function() {
				return t.apply(e || this, n.concat(Q.call(arguments)))
			}, i.guid = t.guid = t.guid || rt.guid++, i) : void 0
		},
		now: function() {
			return +new Date
		},
		support: nt
	}), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		K["[object " + e + "]"] = e.toLowerCase()
	});
	var ut =
		/*!
		 * Sizzle CSS Selector Engine v2.2.0-pre
		 * http://sizzlejs.com/
		 *
		 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
		 * Released under the MIT license
		 * http://jquery.org/license
		 *
		 * Date: 2014-12-16
		 */
		function(t) {
			function e(t, e, n, i) {
				var r, o, a, s, l, u, h, d, p, m;
				if ((e ? e.ownerDocument || e : F) !== D && M(e), e = e || D, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return n;
				if (!i && N) {
					if (11 !== s && (r = _t.exec(t)))
						if (a = r[1]) {
							if (9 === s) {
								if (o = e.getElementById(a), !o || !o.parentNode) return n;
								if (o.id === a) return n.push(o), n
							} else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && B(e, o) && o.id === a) return n.push(o), n
						} else {
							if (r[2]) return J.apply(n, e.getElementsByTagName(t)), n;
							if ((a = r[3]) && b.getElementsByClassName) return J.apply(n, e.getElementsByClassName(a)), n
						}
					if (b.qsa && (!j || !j.test(t))) {
						if (d = h = z, p = e, m = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
							for (u = C(t), (h = e.getAttribute("id")) ? d = h.replace(xt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + f(u[l]);
							p = yt.test(t) && c(e.parentNode) || e, m = u.join(",")
						}
						if (m) try {
							return J.apply(n, p.querySelectorAll(m)), n
						} catch (g) {} finally {
							h || e.removeAttribute("id")
						}
					}
				}
				return E(t.replace(lt, "$1"), e, n, i)
			}

			function n() {
				function t(n, i) {
					return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i
				}
				var e = [];
				return t
			}

			function i(t) {
				return t[z] = !0, t
			}

			function r(t) {
				var e = D.createElement("div");
				try {
					return !!t(e)
				} catch (n) {
					return !1
				} finally {
					e.parentNode && e.parentNode.removeChild(e), e = null
				}
			}

			function o(t, e) {
				for (var n = t.split("|"), i = t.length; i--;) w.attrHandle[n[i]] = e
			}

			function a(t, e) {
				var n = e && t,
					i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || $) - (~t.sourceIndex || $);
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === e) return -1;
				return t ? 1 : -1
			}

			function s(t) {
				return function(e) {
					var n = e.nodeName.toLowerCase();
					return "input" === n && e.type === t
				}
			}

			function l(t) {
				return function(e) {
					var n = e.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && e.type === t
				}
			}

			function u(t) {
				return i(function(e) {
					return e = +e, i(function(n, i) {
						for (var r, o = t([], n.length, e), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
					})
				})
			}

			function c(t) {
				return t && "undefined" != typeof t.getElementsByTagName && t
			}

			function h() {}

			function f(t) {
				for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
				return i
			}

			function d(t, e, n) {
				var i = e.dir,
					r = n && "parentNode" === i,
					o = H++;
				return e.first ? function(e, n, o) {
					for (; e = e[i];)
						if (1 === e.nodeType || r) return t(e, n, o)
				} : function(e, n, a) {
					var s, l, u = [q, o];
					if (a) {
						for (; e = e[i];)
							if ((1 === e.nodeType || r) && t(e, n, a)) return !0
					} else
						for (; e = e[i];)
							if (1 === e.nodeType || r) {
								if (l = e[z] || (e[z] = {}), (s = l[i]) && s[0] === q && s[1] === o) return u[2] = s[2];
								if (l[i] = u, u[2] = t(e, n, a)) return !0
							}
				}
			}

			function p(t) {
				return t.length > 1 ? function(e, n, i) {
					for (var r = t.length; r--;)
						if (!t[r](e, n, i)) return !1;
					return !0
				} : t[0]
			}

			function m(t, n, i) {
				for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
				return i
			}

			function g(t, e, n, i, r) {
				for (var o, a = [], s = 0, l = t.length, u = null != e; l > s; s++)(o = t[s]) && (!n || n(o, i, r)) && (a.push(o), u && e.push(s));
				return a
			}

			function v(t, e, n, r, o, a) {
				return r && !r[z] && (r = v(r)), o && !o[z] && (o = v(o, a)), i(function(i, a, s, l) {
					var u, c, h, f = [],
						d = [],
						p = a.length,
						v = i || m(e || "*", s.nodeType ? [s] : s, []),
						_ = !t || !i && e ? v : g(v, f, t, s, l),
						y = n ? o || (i ? t : p || r) ? [] : a : _;
					if (n && n(_, y, s, l), r)
						for (u = g(y, d), r(u, [], s, l), c = u.length; c--;)(h = u[c]) && (y[d[c]] = !(_[d[c]] = h));
					if (i) {
						if (o || t) {
							if (o) {
								for (u = [], c = y.length; c--;)(h = y[c]) && u.push(_[c] = h);
								o(null, y = [], u, l)
							}
							for (c = y.length; c--;)(h = y[c]) && (u = o ? tt(i, h) : f[c]) > -1 && (i[u] = !(a[u] = h))
						}
					} else y = g(y === a ? y.splice(p, y.length) : y), o ? o(null, a, y, l) : J.apply(a, y)
				})
			}

			function _(t) {
				for (var e, n, i, r = t.length, o = w.relative[t[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = d(function(t) {
						return t === e
					}, a, !0), u = d(function(t) {
						return tt(e, t) > -1
					}, a, !0), c = [function(t, n, i) {
						var r = !o && (i || n !== P) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
						return e = null, r
					}]; r > s; s++)
					if (n = w.relative[t[s].type]) c = [d(p(c), n)];
					else {
						if (n = w.filter[t[s].type].apply(null, t[s].matches), n[z]) {
							for (i = ++s; r > i && !w.relative[t[i].type]; i++);
							return v(s > 1 && p(c), s > 1 && f(t.slice(0, s - 1).concat({
								value: " " === t[s - 2].type ? "*" : ""
							})).replace(lt, "$1"), n, i > s && _(t.slice(s, i)), r > i && _(t = t.slice(i)), r > i && f(t))
						}
						c.push(n)
					}
				return p(c)
			}

			function y(t, n) {
				var r = n.length > 0,
					o = t.length > 0,
					a = function(i, a, s, l, u) {
						var c, h, f, d = 0,
							p = "0",
							m = i && [],
							v = [],
							_ = P,
							y = i || o && w.find.TAG("*", u),
							x = q += null == _ ? 1 : Math.random() || .1,
							b = y.length;
						for (u && (P = a !== D && a); p !== b && null != (c = y[p]); p++) {
							if (o && c) {
								for (h = 0; f = t[h++];)
									if (f(c, a, s)) {
										l.push(c);
										break
									}
								u && (q = x)
							}
							r && ((c = !f && c) && d--, i && m.push(c))
						}
						if (d += p, r && p !== d) {
							for (h = 0; f = n[h++];) f(m, v, a, s);
							if (i) {
								if (d > 0)
									for (; p--;) m[p] || v[p] || (v[p] = G.call(l));
								v = g(v)
							}
							J.apply(l, v), u && !i && v.length > 0 && d + n.length > 1 && e.uniqueSort(l)
						}
						return u && (q = x, P = _), m
					};
				return r ? i(a) : a
			}
			var x, b, w, T, S, C, k, E, P, A, O, M, D, R, N, j, I, L, B, z = "sizzle" + 1 * new Date,
				F = t.document,
				q = 0,
				H = 0,
				W = n(),
				X = n(),
				U = n(),
				Y = function(t, e) {
					return t === e && (O = !0), 0
				},
				$ = 1 << 31,
				V = {}.hasOwnProperty,
				Q = [],
				G = Q.pop,
				Z = Q.push,
				J = Q.push,
				K = Q.slice,
				tt = function(t, e) {
					for (var n = 0, i = t.length; i > n; n++)
						if (t[n] === e) return n;
					return -1
				},
				et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				nt = "[\\x20\\t\\r\\n\\f]",
				it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				rt = it.replace("w", "w#"),
				ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
				at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
				st = new RegExp(nt + "+", "g"),
				lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
				ut = new RegExp("^" + nt + "*," + nt + "*"),
				ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
				ht = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
				ft = new RegExp(at),
				dt = new RegExp("^" + rt + "$"),
				pt = {
					ID: new RegExp("^#(" + it + ")"),
					CLASS: new RegExp("^\\.(" + it + ")"),
					TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + ot),
					PSEUDO: new RegExp("^" + at),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + et + ")$", "i"),
					needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
				},
				mt = /^(?:input|select|textarea|button)$/i,
				gt = /^h\d$/i,
				vt = /^[^{]+\{\s*\[native \w/,
				_t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				yt = /[+~]/,
				xt = /'|\\/g,
				bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
				wt = function(t, e, n) {
					var i = "0x" + e - 65536;
					return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
				},
				Tt = function() {
					M()
				};
			try {
				J.apply(Q = K.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
			} catch (St) {
				J = {
					apply: Q.length ? function(t, e) {
						Z.apply(t, K.call(e))
					} : function(t, e) {
						for (var n = t.length, i = 0; t[n++] = e[i++];);
						t.length = n - 1
					}
				}
			}
			b = e.support = {}, S = e.isXML = function(t) {
				var e = t && (t.ownerDocument || t).documentElement;
				return e ? "HTML" !== e.nodeName : !1
			}, M = e.setDocument = function(t) {
				var e, n, i = t ? t.ownerDocument || t : F;
				return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, R = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), N = !S(i), b.attributes = r(function(t) {
					return t.className = "i", !t.getAttribute("className")
				}), b.getElementsByTagName = r(function(t) {
					return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
				}), b.getElementsByClassName = vt.test(i.getElementsByClassName), b.getById = r(function(t) {
					return R.appendChild(t).id = z, !i.getElementsByName || !i.getElementsByName(z).length
				}), b.getById ? (w.find.ID = function(t, e) {
					if ("undefined" != typeof e.getElementById && N) {
						var n = e.getElementById(t);
						return n && n.parentNode ? [n] : []
					}
				}, w.filter.ID = function(t) {
					var e = t.replace(bt, wt);
					return function(t) {
						return t.getAttribute("id") === e
					}
				}) : (delete w.find.ID, w.filter.ID = function(t) {
					var e = t.replace(bt, wt);
					return function(t) {
						var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
						return n && n.value === e
					}
				}), w.find.TAG = b.getElementsByTagName ? function(t, e) {
					return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
				} : function(t, e) {
					var n, i = [],
						r = 0,
						o = e.getElementsByTagName(t);
					if ("*" === t) {
						for (; n = o[r++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return o
				}, w.find.CLASS = b.getElementsByClassName && function(t, e) {
					return N ? e.getElementsByClassName(t) : void 0
				}, I = [], j = [], (b.qsa = vt.test(i.querySelectorAll)) && (r(function(t) {
					R.appendChild(t).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || j.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + z + "-]").length || j.push("~="), t.querySelectorAll(":checked").length || j.push(":checked"), t.querySelectorAll("a#" + z + "+*").length || j.push(".#.+[+~]")
				}), r(function(t) {
					var e = i.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), j.push(",.*:")
				})), (b.matchesSelector = vt.test(L = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && r(function(t) {
					b.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), I.push("!=", at)
				}), j = j.length && new RegExp(j.join("|")), I = I.length && new RegExp(I.join("|")), e = vt.test(R.compareDocumentPosition), B = e || vt.test(R.contains) ? function(t, e) {
					var n = 9 === t.nodeType ? t.documentElement : t,
						i = e && e.parentNode;
					return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
				} : function(t, e) {
					if (e)
						for (; e = e.parentNode;)
							if (e === t) return !0;
					return !1
				}, Y = e ? function(t, e) {
					if (t === e) return O = !0, 0;
					var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === F && B(F, t) ? -1 : e === i || e.ownerDocument === F && B(F, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
				} : function(t, e) {
					if (t === e) return O = !0, 0;
					var n, r = 0,
						o = t.parentNode,
						s = e.parentNode,
						l = [t],
						u = [e];
					if (!o || !s) return t === i ? -1 : e === i ? 1 : o ? -1 : s ? 1 : A ? tt(A, t) - tt(A, e) : 0;
					if (o === s) return a(t, e);
					for (n = t; n = n.parentNode;) l.unshift(n);
					for (n = e; n = n.parentNode;) u.unshift(n);
					for (; l[r] === u[r];) r++;
					return r ? a(l[r], u[r]) : l[r] === F ? -1 : u[r] === F ? 1 : 0
				}, i) : D
			}, e.matches = function(t, n) {
				return e(t, null, null, n)
			}, e.matchesSelector = function(t, n) {
				if ((t.ownerDocument || t) !== D && M(t), n = n.replace(ht, "='$1']"), !(!b.matchesSelector || !N || I && I.test(n) || j && j.test(n))) try {
					var i = L.call(t, n);
					if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
				} catch (r) {}
				return e(n, D, null, [t]).length > 0
			}, e.contains = function(t, e) {
				return (t.ownerDocument || t) !== D && M(t), B(t, e)
			}, e.attr = function(t, e) {
				(t.ownerDocument || t) !== D && M(t);
				var n = w.attrHandle[e.toLowerCase()],
					i = n && V.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
				return void 0 !== i ? i : b.attributes || !N ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}, e.error = function(t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, e.uniqueSort = function(t) {
				var e, n = [],
					i = 0,
					r = 0;
				if (O = !b.detectDuplicates, A = !b.sortStable && t.slice(0), t.sort(Y), O) {
					for (; e = t[r++];) e === t[r] && (i = n.push(r));
					for (; i--;) t.splice(n[i], 1)
				}
				return A = null, t
			}, T = e.getText = function(t) {
				var e, n = "",
					i = 0,
					r = t.nodeType;
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
					} else if (3 === r || 4 === r) return t.nodeValue
				} else
					for (; e = t[i++];) n += T(e);
				return n
			}, w = e.selectors = {
				cacheLength: 50,
				createPseudo: i,
				match: pt,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(t) {
						return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function(t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
					},
					PSEUDO: function(t) {
						var e, n = !t[6] && t[2];
						return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function(t) {
						var e = t.replace(bt, wt).toLowerCase();
						return "*" === t ? function() {
							return !0
						} : function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(t) {
						var e = W[t + " "];
						return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && W(t, function(t) {
							return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
						})
					},
					ATTR: function(t, n, i) {
						return function(r) {
							var o = e.attr(r, t);
							return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
						}
					},
					CHILD: function(t, e, n, i, r) {
						var o = "nth" !== t.slice(0, 3),
							a = "last" !== t.slice(-4),
							s = "of-type" === e;
						return 1 === i && 0 === r ? function(t) {
							return !!t.parentNode
						} : function(e, n, l) {
							var u, c, h, f, d, p, m = o !== a ? "nextSibling" : "previousSibling",
								g = e.parentNode,
								v = s && e.nodeName.toLowerCase(),
								_ = !l && !s;
							if (g) {
								if (o) {
									for (; m;) {
										for (h = e; h = h[m];)
											if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
										p = m = "only" === t && !p && "nextSibling"
									}
									return !0
								}
								if (p = [a ? g.firstChild : g.lastChild], a && _) {
									for (c = g[z] || (g[z] = {}), u = c[t] || [], d = u[0] === q && u[1], f = u[0] === q && u[2], h = d && g.childNodes[d]; h = ++d && h && h[m] || (f = d = 0) || p.pop();)
										if (1 === h.nodeType && ++f && h === e) {
											c[t] = [q, d, f];
											break
										}
								} else if (_ && (u = (e[z] || (e[z] = {}))[t]) && u[0] === q) f = u[1];
								else
									for (;
										(h = ++d && h && h[m] || (f = d = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++f || (_ && ((h[z] || (h[z] = {}))[t] = [q, f]), h !== e)););
								return f -= r, f === i || f % i === 0 && f / i >= 0
							}
						}
					},
					PSEUDO: function(t, n) {
						var r, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
						return o[z] ? o(n) : o.length > 1 ? (r = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
							for (var i, r = o(t, n), a = r.length; a--;) i = tt(t, r[a]), t[i] = !(e[i] = r[a])
						}) : function(t) {
							return o(t, 0, r)
						}) : o
					}
				},
				pseudos: {
					not: i(function(t) {
						var e = [],
							n = [],
							r = k(t.replace(lt, "$1"));
						return r[z] ? i(function(t, e, n, i) {
							for (var o, a = r(t, null, i, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
						}) : function(t, i, o) {
							return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
						}
					}),
					has: i(function(t) {
						return function(n) {
							return e(t, n).length > 0
						}
					}),
					contains: i(function(t) {
						return t = t.replace(bt, wt),
							function(e) {
								return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
							}
					}),
					lang: i(function(t) {
						return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(),
							function(e) {
								var n;
								do
									if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
								while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e) {
						var n = t.location && t.location.hash;
						return n && n.slice(1) === e.id
					},
					root: function(t) {
						return t === R
					},
					focus: function(t) {
						return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
					},
					enabled: function(t) {
						return t.disabled === !1
					},
					disabled: function(t) {
						return t.disabled === !0
					},
					checked: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && !!t.checked || "option" === e && !!t.selected
					},
					selected: function(t) {
						return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
					},
					empty: function(t) {
						for (t = t.firstChild; t; t = t.nextSibling)
							if (t.nodeType < 6) return !1;
						return !0
					},
					parent: function(t) {
						return !w.pseudos.empty(t)
					},
					header: function(t) {
						return gt.test(t.nodeName)
					},
					input: function(t) {
						return mt.test(t.nodeName)
					},
					button: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					},
					text: function(t) {
						var e;
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
					},
					first: u(function() {
						return [0]
					}),
					last: u(function(t, e) {
						return [e - 1]
					}),
					eq: u(function(t, e, n) {
						return [0 > n ? n + e : n]
					}),
					even: u(function(t, e) {
						for (var n = 0; e > n; n += 2) t.push(n);
						return t
					}),
					odd: u(function(t, e) {
						for (var n = 1; e > n; n += 2) t.push(n);
						return t
					}),
					lt: u(function(t, e, n) {
						for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
						return t
					}),
					gt: u(function(t, e, n) {
						for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
						return t
					})
				}
			}, w.pseudos.nth = w.pseudos.eq;
			for (x in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) w.pseudos[x] = s(x);
			for (x in {
					submit: !0,
					reset: !0
				}) w.pseudos[x] = l(x);
			return h.prototype = w.filters = w.pseudos, w.setFilters = new h, C = e.tokenize = function(t, n) {
				var i, r, o, a, s, l, u, c = X[t + " "];
				if (c) return n ? 0 : c.slice(0);
				for (s = t, l = [], u = w.preFilter; s;) {
					(!i || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ct.exec(s)) && (i = r.shift(), o.push({
						value: i,
						type: r[0].replace(lt, " ")
					}), s = s.slice(i.length));
					for (a in w.filter) !(r = pt[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
						value: i,
						type: a,
						matches: r
					}), s = s.slice(i.length));
					if (!i) break
				}
				return n ? s.length : s ? e.error(t) : X(t, l).slice(0)
			}, k = e.compile = function(t, e) {
				var n, i = [],
					r = [],
					o = U[t + " "];
				if (!o) {
					for (e || (e = C(t)), n = e.length; n--;) o = _(e[n]), o[z] ? i.push(o) : r.push(o);
					o = U(t, y(r, i)), o.selector = t
				}
				return o
			}, E = e.select = function(t, e, n, i) {
				var r, o, a, s, l, u = "function" == typeof t && t,
					h = !i && C(t = u.selector || t);
				if (n = n || [], 1 === h.length) {
					if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === e.nodeType && N && w.relative[o[1].type]) {
						if (e = (w.find.ID(a.matches[0].replace(bt, wt), e) || [])[0], !e) return n;
						u && (e = e.parentNode), t = t.slice(o.shift().value.length)
					}
					for (r = pt.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !w.relative[s = a.type]);)
						if ((l = w.find[s]) && (i = l(a.matches[0].replace(bt, wt), yt.test(o[0].type) && c(e.parentNode) || e))) {
							if (o.splice(r, 1), t = i.length && f(o), !t) return J.apply(n, i), n;
							break
						}
				}
				return (u || k(t, h))(i, e, !N, n, yt.test(t) && c(e.parentNode) || e), n
			}, b.sortStable = z.split("").sort(Y).join("") === z, b.detectDuplicates = !!O, M(), b.sortDetached = r(function(t) {
				return 1 & t.compareDocumentPosition(D.createElement("div"))
			}), r(function(t) {
				return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
			}) || o("type|href|height|width", function(t, e, n) {
				return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
			}), b.attributes && r(function(t) {
				return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
			}) || o("value", function(t, e, n) {
				return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
			}), r(function(t) {
				return null == t.getAttribute("disabled")
			}) || o(et, function(t, e, n) {
				var i;
				return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}), e
		}(t);
	rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;
	var ct = rt.expr.match.needsContext,
		ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ft = /^.[^:#\[\.,]*$/;
	rt.filter = function(t, e, n) {
		var i = e[0];
		return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? rt.find.matchesSelector(i, t) ? [i] : [] : rt.find.matches(t, rt.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, rt.fn.extend({
		find: function(t) {
			var e, n = [],
				i = this,
				r = i.length;
			if ("string" != typeof t) return this.pushStack(rt(t).filter(function() {
				for (e = 0; r > e; e++)
					if (rt.contains(i[e], this)) return !0
			}));
			for (e = 0; r > e; e++) rt.find(t, i[e], n);
			return n = this.pushStack(r > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
		},
		filter: function(t) {
			return this.pushStack(i(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(i(this, t || [], !0))
		},
		is: function(t) {
			return !!i(this, "string" == typeof t && ct.test(t) ? rt(t) : t || [], !1).length
		}
	});
	var dt, pt = t.document,
		mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		gt = rt.fn.init = function(t, e) {
			var n, i;
			if (!t) return this;
			if ("string" == typeof t) {
				if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || dt).find(t) : this.constructor(e).find(t);
				if (n[1]) {
					if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : pt, !0)), ht.test(n[1]) && rt.isPlainObject(e))
						for (n in e) rt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
					return this
				}
				if (i = pt.getElementById(n[2]), i && i.parentNode) {
					if (i.id !== n[2]) return dt.find(t);
					this.length = 1, this[0] = i
				}
				return this.context = pt, this.selector = t, this
			}
			return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? "undefined" != typeof dt.ready ? dt.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
		};
	gt.prototype = rt.fn, dt = rt(pt);
	var vt = /^(?:parents|prev(?:Until|All))/,
		_t = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	rt.extend({
		dir: function(t, e, n) {
			for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));) 1 === r.nodeType && i.push(r), r = r[e];
			return i
		},
		sibling: function(t, e) {
			for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
			return n
		}
	}), rt.fn.extend({
		has: function(t) {
			var e, n = rt(t, this),
				i = n.length;
			return this.filter(function() {
				for (e = 0; i > e; e++)
					if (rt.contains(this, n[e])) return !0
			})
		},
		closest: function(t, e) {
			for (var n, i = 0, r = this.length, o = [], a = ct.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; r > i; i++)
				for (n = this[i]; n && n !== e; n = n.parentNode)
					if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, t))) {
						o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? rt.unique(o) : o)
		},
		index: function(t) {
			return t ? "string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), rt.each({
		parent: function(t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t) {
			return rt.dir(t, "parentNode")
		},
		parentsUntil: function(t, e, n) {
			return rt.dir(t, "parentNode", n)
		},
		next: function(t) {
			return r(t, "nextSibling")
		},
		prev: function(t) {
			return r(t, "previousSibling")
		},
		nextAll: function(t) {
			return rt.dir(t, "nextSibling")
		},
		prevAll: function(t) {
			return rt.dir(t, "previousSibling")
		},
		nextUntil: function(t, e, n) {
			return rt.dir(t, "nextSibling", n)
		},
		prevUntil: function(t, e, n) {
			return rt.dir(t, "previousSibling", n)
		},
		siblings: function(t) {
			return rt.sibling((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return rt.sibling(t.firstChild)
		},
		contents: function(t) {
			return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : rt.merge([], t.childNodes)
		}
	}, function(t, e) {
		rt.fn[t] = function(n, i) {
			var r = rt.map(this, e, n);
			return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = rt.filter(i, r)), this.length > 1 && (_t[t] || (r = rt.unique(r)), vt.test(t) && (r = r.reverse())), this.pushStack(r)
		}
	});
	var yt = /\S+/g,
		xt = {};
	rt.Callbacks = function(t) {
		t = "string" == typeof t ? xt[t] || o(t) : rt.extend({}, t);
		var e, n, i, r, a, s, l = [],
			u = !t.once && [],
			c = function(o) {
				for (n = t.memory && o, i = !0, a = s || 0, s = 0, r = l.length, e = !0; l && r > a; a++)
					if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
						n = !1;
						break
					}
				e = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : h.disable())
			},
			h = {
				add: function() {
					if (l) {
						var i = l.length;
						! function o(e) {
							rt.each(e, function(e, n) {
								var i = rt.type(n);
								"function" === i ? t.unique && h.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
							})
						}(arguments), e ? r = l.length : n && (s = i, c(n))
					}
					return this
				},
				remove: function() {
					return l && rt.each(arguments, function(t, n) {
						for (var i;
							(i = rt.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (r >= i && r--, a >= i && a--)
					}), this
				},
				has: function(t) {
					return t ? rt.inArray(t, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], r = 0, this
				},
				disable: function() {
					return l = u = n = void 0, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return u = void 0, n || h.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(t, n) {
					return !l || i && !u || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? u.push(n) : c(n)), this
				},
				fire: function() {
					return h.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return h
	}, rt.extend({
		Deferred: function(t) {
			var e = [
					["resolve", "done", rt.Callbacks("once memory"), "resolved"],
					["reject", "fail", rt.Callbacks("once memory"), "rejected"],
					["notify", "progress", rt.Callbacks("memory")]
				],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					then: function() {
						var t = arguments;
						return rt.Deferred(function(n) {
							rt.each(e, function(e, o) {
								var a = rt.isFunction(t[e]) && t[e];
								r[o[1]](function() {
									var t = a && a.apply(this, arguments);
									t && rt.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
								})
							}), t = null
						}).promise()
					},
					promise: function(t) {
						return null != t ? rt.extend(t, i) : i
					}
				},
				r = {};
			return i.pipe = i.then, rt.each(e, function(t, o) {
				var a = o[2],
					s = o[3];
				i[o[1]] = a.add, s && a.add(function() {
					n = s
				}, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
					return r[o[0] + "With"](this === r ? i : this, arguments), this
				}, r[o[0] + "With"] = a.fireWith
			}), i.promise(r), t && t.call(r, r), r
		},
		when: function(t) {
			var e, n, i, r = 0,
				o = Q.call(arguments),
				a = o.length,
				s = 1 !== a || t && rt.isFunction(t.promise) ? a : 0,
				l = 1 === s ? t : rt.Deferred(),
				u = function(t, n, i) {
					return function(r) {
						n[t] = this, i[t] = arguments.length > 1 ? Q.call(arguments) : r, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
					}
				};
			if (a > 1)
				for (e = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, e)) : --s;
			return s || l.resolveWith(i, o), l.promise()
		}
	});
	var bt;
	rt.fn.ready = function(t) {
		return rt.ready.promise().done(t), this
	}, rt.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(t) {
			t ? rt.readyWait++ : rt.ready(!0)
		},
		ready: function(t) {
			if (t === !0 ? !--rt.readyWait : !rt.isReady) {
				if (!pt.body) return setTimeout(rt.ready);
				rt.isReady = !0, t !== !0 && --rt.readyWait > 0 || (bt.resolveWith(pt, [rt]), rt.fn.triggerHandler && (rt(pt).triggerHandler("ready"), rt(pt).off("ready")))
			}
		}
	}), rt.ready.promise = function(e) {
		if (!bt)
			if (bt = rt.Deferred(), "complete" === pt.readyState) setTimeout(rt.ready);
			else if (pt.addEventListener) pt.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1);
		else {
			pt.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
			var n = !1;
			try {
				n = null == t.frameElement && pt.documentElement
			} catch (i) {}
			n && n.doScroll && ! function r() {
				if (!rt.isReady) {
					try {
						n.doScroll("left")
					} catch (t) {
						return setTimeout(r, 50)
					}
					a(), rt.ready()
				}
			}()
		}
		return bt.promise(e)
	};
	var wt, Tt = "undefined";
	for (wt in rt(nt)) break;
	nt.ownLast = "0" !== wt, nt.inlineBlockNeedsLayout = !1, rt(function() {
			var t, e, n, i;
			n = pt.getElementsByTagName("body")[0], n && n.style && (e = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Tt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
		}),
		function() {
			var t = pt.createElement("div");
			if (null == nt.deleteExpando) {
				nt.deleteExpando = !0;
				try {
					delete t.test
				} catch (e) {
					nt.deleteExpando = !1
				}
			}
			t = null
		}(), rt.acceptData = function(t) {
			var e = rt.noData[(t.nodeName + " ").toLowerCase()],
				n = +t.nodeType || 1;
			return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
		};
	var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ct = /([A-Z])/g;
	rt.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(t) {
			return t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando], !!t && !u(t)
		},
		data: function(t, e, n) {
			return c(t, e, n)
		},
		removeData: function(t, e) {
			return h(t, e)
		},
		_data: function(t, e, n) {
			return c(t, e, n, !0)
		},
		_removeData: function(t, e) {
			return h(t, e, !0)
		}
	}), rt.fn.extend({
		data: function(t, e) {
			var n, i, r, o = this[0],
				a = o && o.attributes;
			if (void 0 === t) {
				if (this.length && (r = rt.data(o), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
					for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), l(o, i, r[i])));
					rt._data(o, "parsedAttrs", !0)
				}
				return r
			}
			return "object" == typeof t ? this.each(function() {
				rt.data(this, t)
			}) : arguments.length > 1 ? this.each(function() {
				rt.data(this, t, e)
			}) : o ? l(o, t, rt.data(o, t)) : void 0
		},
		removeData: function(t) {
			return this.each(function() {
				rt.removeData(this, t)
			})
		}
	}), rt.extend({
		queue: function(t, e, n) {
			var i;
			return t ? (e = (e || "fx") + "queue", i = rt._data(t, e), n && (!i || rt.isArray(n) ? i = rt._data(t, e, rt.makeArray(n)) : i.push(n)), i || []) : void 0
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var n = rt.queue(t, e),
				i = n.length,
				r = n.shift(),
				o = rt._queueHooks(t, e),
				a = function() {
					rt.dequeue(t, e)
				};
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, a, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(t, e) {
			var n = e + "queueHooks";
			return rt._data(t, n) || rt._data(t, n, {
				empty: rt.Callbacks("once memory").add(function() {
					rt._removeData(t, e + "queue"), rt._removeData(t, n)
				})
			})
		}
	}), rt.fn.extend({
		queue: function(t, e) {
			var n = 2;
			return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
				var n = rt.queue(this, t, e);
				rt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && rt.dequeue(this, t)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				rt.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			var n, i = 1,
				r = rt.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--i || r.resolveWith(o, [o])
				};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = rt._data(o[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
			return s(), r.promise(e)
		}
	});
	var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Et = ["Top", "Right", "Bottom", "Left"],
		Pt = function(t, e) {
			return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
		},
		At = rt.access = function(t, e, n, i, r, o, a) {
			var s = 0,
				l = t.length,
				u = null == n;
			if ("object" === rt.type(n)) {
				r = !0;
				for (s in n) rt.access(t, e, s, n[s], !0, o, a)
			} else if (void 0 !== i && (r = !0, rt.isFunction(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
					return u.call(rt(t), n)
				})), e))
				for (; l > s; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
			return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
		},
		Ot = /^(?:checkbox|radio)$/i;
	! function() {
		var t = pt.createElement("input"),
			e = pt.createElement("div"),
			n = pt.createDocumentFragment();
		if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
				nt.noCloneEvent = !1
			}), e.cloneNode(!0).click()), null == nt.deleteExpando) {
			nt.deleteExpando = !0;
			try {
				delete e.test
			} catch (i) {
				nt.deleteExpando = !1
			}
		}
	}(),
	function() {
		var e, n, i = pt.createElement("div");
		for (e in {
				submit: !0,
				change: !0,
				focusin: !0
			}) n = "on" + e, (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i.attributes[n].expando === !1);
		i = null
	}();
	var Mt = /^(?:input|select|textarea)$/i,
		Dt = /^key/,
		Rt = /^(?:mouse|pointer|contextmenu)|click/,
		Nt = /^(?:focusinfocus|focusoutblur)$/,
		jt = /^([^.]*)(?:\.(.+)|)$/;
	rt.event = {
		global: {},
		add: function(t, e, n, i, r) {
			var o, a, s, l, u, c, h, f, d, p, m, g = rt._data(t);
			if (g) {
				for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = rt.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
						return typeof rt === Tt || t && rt.event.triggered === t.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
					}, c.elem = t), e = (e || "").match(yt) || [""], s = e.length; s--;) o = jt.exec(e[s]) || [], d = m = o[1], p = (o[2] || "").split(".").sort(), d && (u = rt.event.special[d] || {}, d = (r ? u.delegateType : u.bindType) || d, u = rt.event.special[d] || {}, h = rt.extend({
					type: d,
					origType: m,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && rt.expr.match.needsContext.test(r),
					namespace: p.join(".")
				}, l), (f = a[d]) || (f = a[d] = [], f.delegateCount = 0, u.setup && u.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(d, c, !1) : t.attachEvent && t.attachEvent("on" + d, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, h) : f.push(h), rt.event.global[d] = !0);
				t = null
			}
		},
		remove: function(t, e, n, i, r) {
			var o, a, s, l, u, c, h, f, d, p, m, g = rt.hasData(t) && rt._data(t);
			if (g && (c = g.events)) {
				for (e = (e || "").match(yt) || [""], u = e.length; u--;)
					if (s = jt.exec(e[u]) || [], d = m = s[1], p = (s[2] || "").split(".").sort(), d) {
						for (h = rt.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, f = c[d] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
							l = o = f.length; o--;) a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, h.remove && h.remove.call(t, a));
						l && !f.length && (h.teardown && h.teardown.call(t, p, g.handle) !== !1 || rt.removeEvent(t, d, g.handle), delete c[d])
					} else
						for (d in c) rt.event.remove(t, d + e[u], n, i, !0);
				rt.isEmptyObject(c) && (delete g.handle, rt._removeData(t, "events"))
			}
		},
		trigger: function(e, n, i, r) {
			var o, a, s, l, u, c, h, f = [i || pt],
				d = et.call(e, "type") ? e.type : e,
				p = et.call(e, "namespace") ? e.namespace.split(".") : [];
			if (s = c = i = i || pt, 3 !== i.nodeType && 8 !== i.nodeType && !Nt.test(d + rt.event.triggered) && (d.indexOf(".") >= 0 && (p = d.split("."), d = p.shift(), p.sort()), a = d.indexOf(":") < 0 && "on" + d, e = e[rt.expando] ? e : new rt.Event(d, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : rt.makeArray(n, [e]), u = rt.event.special[d] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
				if (!r && !u.noBubble && !rt.isWindow(i)) {
					for (l = u.delegateType || d, Nt.test(l + d) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
					c === (i.ownerDocument || pt) && f.push(c.defaultView || c.parentWindow || t)
				}
				for (h = 0;
					(s = f[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : u.bindType || d, o = (rt._data(s, "events") || {})[e.type] && rt._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && rt.acceptData(s) && (e.result = o.apply(s, n), e.result === !1 && e.preventDefault());
				if (e.type = d, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && rt.acceptData(i) && a && i[d] && !rt.isWindow(i)) {
					c = i[a], c && (i[a] = null), rt.event.triggered = d;
					try {
						i[d]()
					} catch (m) {}
					rt.event.triggered = void 0, c && (i[a] = c)
				}
				return e.result
			}
		},
		dispatch: function(t) {
			t = rt.event.fix(t);
			var e, n, i, r, o, a = [],
				s = Q.call(arguments),
				l = (rt._data(this, "events") || {})[t.type] || [],
				u = rt.event.special[t.type] || {};
			if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
				for (a = rt.event.handlers.call(this, t, l), e = 0;
					(r = a[e++]) && !t.isPropagationStopped();)
					for (t.currentTarget = r.elem, o = 0;
						(i = r.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(t, e) {
			var n, i, r, o, a = [],
				s = e.delegateCount,
				l = t.target;
			if (s && l.nodeType && (!t.button || "click" !== t.type))
				for (; l != this; l = l.parentNode || this)
					if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
						for (r = [], o = 0; s > o; o++) i = e[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [l]).length), r[n] && r.push(i);
						r.length && a.push({
							elem: l,
							handlers: r
						})
					}
			return s < e.length && a.push({
				elem: this,
				handlers: e.slice(s)
			}), a
		},
		fix: function(t) {
			if (t[rt.expando]) return t;
			var e, n, i, r = t.type,
				o = t,
				a = this.fixHooks[r];
			for (a || (this.fixHooks[r] = a = Rt.test(r) ? this.mouseHooks : Dt.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new rt.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
			return t.target || (t.target = o.srcElement || pt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(t, e) {
				var n, i, r, o = e.button,
					a = e.fromElement;
				return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || pt, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== p() && this.focus) try {
						return this.focus(), !1
					} catch (t) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === p() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(t) {
					return rt.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function(t, e, n, i) {
			var r = rt.extend(new rt.Event, n, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? rt.event.trigger(r, null, e) : rt.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
		}
	}, rt.removeEvent = pt.removeEventListener ? function(t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n, !1)
	} : function(t, e, n) {
		var i = "on" + e;
		t.detachEvent && (typeof t[i] === Tt && (t[i] = null), t.detachEvent(i, n))
	}, rt.Event = function(t, e) {
		return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : d) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
	}, rt.Event.prototype = {
		isDefaultPrevented: d,
		isPropagationStopped: d,
		isImmediatePropagationStopped: d,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = f, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = f, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, rt.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(t, e) {
		rt.event.special[t] = {
			delegateType: e,
			bindType: e,
			handle: function(t) {
				var n, i = this,
					r = t.relatedTarget,
					o = t.handleObj;
				return (!r || r !== i && !rt.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
			}
		}
	}), nt.submitBubbles || (rt.event.special.submit = {
		setup: function() {
			return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit", function(t) {
				var e = t.target,
					n = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form : void 0;
				n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit", function(t) {
					t._submit_bubble = !0
				}), rt._data(n, "submitBubbles", !0))
			})
		},
		postDispatch: function(t) {
			t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0))
		},
		teardown: function() {
			return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
		}
	}), nt.changeBubbles || (rt.event.special.change = {
		setup: function() {
			return Mt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function(t) {
				"checked" === t.originalEvent.propertyName && (this._just_changed = !0)
			}), rt.event.add(this, "click._change", function(t) {
				this._just_changed && !t.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, t, !0)
			})), !1) : void rt.event.add(this, "beforeactivate._change", function(t) {
				var e = t.target;
				Mt.test(e.nodeName) && !rt._data(e, "changeBubbles") && (rt.event.add(e, "change._change", function(t) {
					!this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0)
				}), rt._data(e, "changeBubbles", !0))
			})
		},
		handle: function(t) {
			var e = t.target;
			return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return rt.event.remove(this, "._change"), !Mt.test(this.nodeName)
		}
	}), nt.focusinBubbles || rt.each({
		focus: "focusin",
		blur: "focusout"
	}, function(t, e) {
		var n = function(t) {
			rt.event.simulate(e, t.target, rt.event.fix(t), !0)
		};
		rt.event.special[e] = {
			setup: function() {
				var i = this.ownerDocument || this,
					r = rt._data(i, e);
				r || i.addEventListener(t, n, !0), rt._data(i, e, (r || 0) + 1)
			},
			teardown: function() {
				var i = this.ownerDocument || this,
					r = rt._data(i, e) - 1;
				r ? rt._data(i, e, r) : (i.removeEventListener(t, n, !0), rt._removeData(i, e))
			}
		}
	}), rt.fn.extend({
		on: function(t, e, n, i, r) {
			var o, a;
			if ("object" == typeof t) {
				"string" != typeof e && (n = n || e, e = void 0);
				for (o in t) this.on(o, e, n, t[o], r);
				return this
			}
			if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = d;
			else if (!i) return this;
			return 1 === r && (a = i, i = function(t) {
				return rt().off(t), a.apply(this, arguments)
			}, i.guid = a.guid || (a.guid = rt.guid++)), this.each(function() {
				rt.event.add(this, t, i, n, e)
			})
		},
		one: function(t, e, n, i) {
			return this.on(t, e, n, i, 1)
		},
		off: function(t, e, n) {
			var i, r;
			if (t && t.preventDefault && t.handleObj) return i = t.handleObj, rt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof t) {
				for (r in t) this.off(r, e, t[r]);
				return this
			}
			return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = d), this.each(function() {
				rt.event.remove(this, t, n, e)
			})
		},
		trigger: function(t, e) {
			return this.each(function() {
				rt.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			var n = this[0];
			return n ? rt.event.trigger(t, e, n, !0) : void 0
		}
	});
	var It = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Lt = / jQuery\d+="(?:null|\d+)"/g,
		Bt = new RegExp("<(?:" + It + ")[\\s/>]", "i"),
		zt = /^\s+/,
		Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		qt = /<([\w:]+)/,
		Ht = /<tbody/i,
		Wt = /<|&#?\w+;/,
		Xt = /<(?:script|style|link)/i,
		Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Yt = /^$|\/(?:java|ecma)script/i,
		$t = /^true\/(.*)/,
		Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Qt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		Gt = m(pt),
		Zt = Gt.appendChild(pt.createElement("div"));
	Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td, rt.extend({
		clone: function(t, e, n) {
			var i, r, o, a, s, l = rt.contains(t.ownerDocument, t);
			if (nt.html5Clone || rt.isXMLDoc(t) || !Bt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Zt.innerHTML = t.outerHTML, Zt.removeChild(o = Zt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))
				for (i = g(o), s = g(t), a = 0; null != (r = s[a]); ++a) i[a] && T(r, i[a]);
			if (e)
				if (n)
					for (s = s || g(t), i = i || g(o), a = 0; null != (r = s[a]); a++) w(r, i[a]);
				else w(t, o);
			return i = g(o, "script"), i.length > 0 && b(i, !l && g(t, "script")), i = s = r = null, o
		},
		buildFragment: function(t, e, n, i) {
			for (var r, o, a, s, l, u, c, h = t.length, f = m(e), d = [], p = 0; h > p; p++)
				if (o = t[p], o || 0 === o)
					if ("object" === rt.type(o)) rt.merge(d, o.nodeType ? [o] : o);
					else if (Wt.test(o)) {
				for (s = s || f.appendChild(e.createElement("div")), l = (qt.exec(o) || ["", ""])[1].toLowerCase(), c = Qt[l] || Qt._default, s.innerHTML = c[1] + o.replace(Ft, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
				if (!nt.leadingWhitespace && zt.test(o) && d.push(e.createTextNode(zt.exec(o)[0])), !nt.tbody)
					for (o = "table" !== l || Ht.test(o) ? "<table>" !== c[1] || Ht.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) rt.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
				for (rt.merge(d, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
				s = f.lastChild
			} else d.push(e.createTextNode(o));
			for (s && f.removeChild(s), nt.appendChecked || rt.grep(g(d, "input"), v), p = 0; o = d[p++];)
				if ((!i || -1 === rt.inArray(o, i)) && (a = rt.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && b(s), n))
					for (r = 0; o = s[r++];) Yt.test(o.type || "") && n.push(o);
			return s = null, f
		},
		cleanData: function(t, e) {
			for (var n, i, r, o, a = 0, s = rt.expando, l = rt.cache, u = nt.deleteExpando, c = rt.event.special; null != (n = t[a]); a++)
				if ((e || rt.acceptData(n)) && (r = n[s], o = r && l[r])) {
					if (o.events)
						for (i in o.events) c[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
					l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== Tt ? n.removeAttribute(s) : n[s] = null, V.push(r))
				}
		}
	}), rt.fn.extend({
		text: function(t) {
			return At(this, function(t) {
				return void 0 === t ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pt).createTextNode(t))
			}, null, t, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = _(this, t);
					e.appendChild(t)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = _(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		remove: function(t, e) {
			for (var n, i = t ? rt.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || rt.cleanData(g(n)), n.parentNode && (e && rt.contains(n.ownerDocument, n) && b(g(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++) {
				for (1 === t.nodeType && rt.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
				t.options && rt.nodeName(t, "select") && (t.options.length = 0)
			}
			return this
		},
		clone: function(t, e) {
			return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
				return rt.clone(this, t, e)
			})
		},
		html: function(t) {
			return At(this, function(t) {
				var e = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Lt, "") : void 0;
				if (!("string" != typeof t || Xt.test(t) || !nt.htmlSerialize && Bt.test(t) || !nt.leadingWhitespace && zt.test(t) || Qt[(qt.exec(t) || ["", ""])[1].toLowerCase()])) {
					t = t.replace(Ft, "<$1></$2>");
					try {
						for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (rt.cleanData(g(e, !1)), e.innerHTML = t);
						e = 0
					} catch (r) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function() {
			var t = arguments[0];
			return this.domManip(arguments, function(e) {
				t = this.parentNode, rt.cleanData(g(this)), t && t.replaceChild(e, this)
			}), t && (t.length || t.nodeType) ? this : this.remove()
		},
		detach: function(t) {
			return this.remove(t, !0)
		},
		domManip: function(t, e) {
			t = G.apply([], t);
			var n, i, r, o, a, s, l = 0,
				u = this.length,
				c = this,
				h = u - 1,
				f = t[0],
				d = rt.isFunction(f);
			if (d || u > 1 && "string" == typeof f && !nt.checkClone && Ut.test(f)) return this.each(function(n) {
				var i = c.eq(n);
				d && (t[0] = f.call(this, n, i.html())), i.domManip(t, e)
			});
			if (u && (s = rt.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
				for (o = rt.map(g(s, "script"), y), r = o.length; u > l; l++) i = s, l !== h && (i = rt.clone(i, !0, !0), r && rt.merge(o, g(i, "script"))), e.call(this[l], i, l);
				if (r)
					for (a = o[o.length - 1].ownerDocument, rt.map(o, x), l = 0; r > l; l++) i = o[l], Yt.test(i.type || "") && !rt._data(i, "globalEval") && rt.contains(a, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Vt, "")));
				s = n = null
			}
			return this
		}
	}), rt.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, e) {
		rt.fn[t] = function(t) {
			for (var n, i = 0, r = [], o = rt(t), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), rt(o[i])[e](n), Z.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var Jt, Kt = {};
	! function() {
		var t;
		nt.shrinkWrapBlocks = function() {
			if (null != t) return t;
			t = !1;
			var e, n, i;
			return n = pt.getElementsByTagName("body")[0], n && n.style ? (e = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Tt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
		}
	}();
	var te, ee, ne = /^margin/,
		ie = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"),
		re = /^(top|right|bottom|left)$/;
	t.getComputedStyle ? (te = function(e) {
			return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
		}, ee = function(t, e, n) {
			var i, r, o, a, s = t.style;
			return n = n || te(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || rt.contains(t.ownerDocument, t) || (a = rt.style(t, e)), ie.test(a) && ne.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
		}) : pt.documentElement.currentStyle && (te = function(t) {
			return t.currentStyle
		}, ee = function(t, e, n) {
			var i, r, o, a, s = t.style;
			return n = n || te(t), a = n ? n[e] : void 0, null == a && s && s[e] && (a = s[e]), ie.test(a) && !re.test(e) && (i = s.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
		}),
		function() {
			function e() {
				var e, n, i, r;
				n = pt.getElementsByTagName("body")[0], n && n.style && (e = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {
					width: "4px"
				}).width, r = e.appendChild(pt.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
			}
			var n, i, r, o, a, s, l;
			n = pt.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, rt.extend(nt, {
				reliableHiddenOffsets: function() {
					return null == s && e(), s
				},
				boxSizingReliable: function() {
					return null == a && e(), a
				},
				pixelPosition: function() {
					return null == o && e(), o
				},
				reliableMarginRight: function() {
					return null == l && e(), l
				}
			}))
		}(), rt.swap = function(t, e, n, i) {
			var r, o, a = {};
			for (o in e) a[o] = t.style[o], t.style[o] = e[o];
			r = n.apply(t, i || []);
			for (o in e) t.style[o] = a[o];
			return r
		};
	var oe = /alpha\([^)]*\)/i,
		ae = /opacity\s*=\s*([^)]*)/,
		se = /^(none|table(?!-c[ea]).+)/,
		le = new RegExp("^(" + kt + ")(.*)$", "i"),
		ue = new RegExp("^([+-])=(" + kt + ")", "i"),
		ce = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		he = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		fe = ["Webkit", "O", "Moz", "ms"];
	rt.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var n = ee(t, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": nt.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(t, e, n, i) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var r, o, a, s = rt.camelCase(e),
					l = t.style;
				if (e = rt.cssProps[s] || (rt.cssProps[s] = E(l, s)), a = rt.cssHooks[e] || rt.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : l[e];
				if (o = typeof n, "string" === o && (r = ue.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || rt.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i))))) try {
					l[e] = n
				} catch (u) {}
			}
		},
		css: function(t, e, n, i) {
			var r, o, a, s = rt.camelCase(e);
			return e = rt.cssProps[s] || (rt.cssProps[s] = E(t.style, s)), a = rt.cssHooks[e] || rt.cssHooks[s], a && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = ee(t, e, i)), "normal" === o && e in he && (o = he[e]), "" === n || n ? (r = parseFloat(o), n === !0 || rt.isNumeric(r) ? r || 0 : o) : o
		}
	}), rt.each(["height", "width"], function(t, e) {
		rt.cssHooks[e] = {
			get: function(t, n, i) {
				return n ? se.test(rt.css(t, "display")) && 0 === t.offsetWidth ? rt.swap(t, ce, function() {
					return M(t, e, i)
				}) : M(t, e, i) : void 0
			},
			set: function(t, n, i) {
				var r = i && te(t);
				return A(t, n, i ? O(t, e, i, nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, r), r) : 0)
			}
		}
	}), nt.opacity || (rt.cssHooks.opacity = {
		get: function(t, e) {
			return ae.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
		},
		set: function(t, e) {
			var n = t.style,
				i = t.currentStyle,
				r = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
				o = i && i.filter || n.filter || "";
			n.zoom = 1, (e >= 1 || "" === e) && "" === rt.trim(o.replace(oe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = oe.test(o) ? o.replace(oe, r) : o + " " + r)
		}
	}), rt.cssHooks.marginRight = k(nt.reliableMarginRight, function(t, e) {
		return e ? rt.swap(t, {
			display: "inline-block"
		}, ee, [t, "marginRight"]) : void 0
	}), rt.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(t, e) {
		rt.cssHooks[t + e] = {
			expand: function(n) {
				for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Et[i] + e] = o[i] || o[i - 2] || o[0];
				return r
			}
		}, ne.test(t) || (rt.cssHooks[t + e].set = A)
	}), rt.fn.extend({
		css: function(t, e) {
			return At(this, function(t, e, n) {
				var i, r, o = {},
					a = 0;
				if (rt.isArray(e)) {
					for (i = te(t), r = e.length; r > a; a++) o[e[a]] = rt.css(t, e[a], !1, i);
					return o
				}
				return void 0 !== n ? rt.style(t, e, n) : rt.css(t, e)
			}, t, e, arguments.length > 1)
		},
		show: function() {
			return P(this, !0)
		},
		hide: function() {
			return P(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				Pt(this) ? rt(this).show() : rt(this).hide()
			})
		}
	}), rt.Tween = D, D.prototype = {
		constructor: D,
		init: function(t, e, n, i, r, o) {
			this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (rt.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var t = D.propHooks[this.prop];
			return t && t.get ? t.get(this) : D.propHooks._default.get(this)
		},
		run: function(t) {
			var e, n = D.propHooks[this.prop];
			return this.pos = e = this.options.duration ? rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
		}
	}, D.prototype.init.prototype = D.prototype, D.propHooks = {
		_default: {
			get: function(t) {
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
			},
			set: function(t) {
				rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, rt.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		}
	}, rt.fx = D.prototype.init, rt.fx.step = {};
	var de, pe, me = /^(?:toggle|show|hide)$/,
		ge = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
		ve = /queueHooks$/,
		_e = [I],
		ye = {
			"*": [function(t, e) {
				var n = this.createTween(t, e),
					i = n.cur(),
					r = ge.exec(e),
					o = r && r[3] || (rt.cssNumber[t] ? "" : "px"),
					a = (rt.cssNumber[t] || "px" !== o && +i) && ge.exec(rt.css(n.elem, t)),
					s = 1,
					l = 20;
				if (a && a[3] !== o) {
					o = o || a[3], r = r || [], a = +i || 1;
					do s = s || ".5", a /= s, rt.style(n.elem, t, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
				}
				return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
			}]
		};
	rt.Animation = rt.extend(B, {
			tweener: function(t, e) {
				rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
				for (var n, i = 0, r = t.length; r > i; i++) n = t[i], ye[n] = ye[n] || [], ye[n].unshift(e)
			},
			prefilter: function(t, e) {
				e ? _e.unshift(t) : _e.push(t)
			}
		}), rt.speed = function(t, e, n) {
			var i = t && "object" == typeof t ? rt.extend({}, t) : {
				complete: n || !n && e || rt.isFunction(t) && t,
				duration: t,
				easing: n && e || e && !rt.isFunction(e) && e
			};
			return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
				rt.isFunction(i.old) && i.old.call(this), i.queue && rt.dequeue(this, i.queue)
			}, i
		}, rt.fn.extend({
			fadeTo: function(t, e, n, i) {
				return this.filter(Pt).css("opacity", 0).show().end().animate({
					opacity: e
				}, t, n, i)
			},
			animate: function(t, e, n, i) {
				var r = rt.isEmptyObject(t),
					o = rt.speed(e, n, i),
					a = function() {
						var e = B(this, rt.extend({}, t), o);
						(r || rt._data(this, "finish")) && e.stop(!0)
					};
				return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(t, e, n) {
				var i = function(t) {
					var e = t.stop;
					delete t.stop, e(n)
				};
				return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
					var e = !0,
						r = null != t && t + "queueHooks",
						o = rt.timers,
						a = rt._data(this);
					if (r) a[r] && a[r].stop && i(a[r]);
					else
						for (r in a) a[r] && a[r].stop && ve.test(r) && i(a[r]);
					for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
					(e || !n) && rt.dequeue(this, t)
				})
			},
			finish: function(t) {
				return t !== !1 && (t = t || "fx"), this.each(function() {
					var e, n = rt._data(this),
						i = n[t + "queue"],
						r = n[t + "queueHooks"],
						o = rt.timers,
						a = i ? i.length : 0;
					for (n.finish = !0, rt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
					for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
					delete n.finish
				})
			}
		}), rt.each(["toggle", "show", "hide"], function(t, e) {
			var n = rt.fn[e];
			rt.fn[e] = function(t, i, r) {
				return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(N(e, !0), t, i, r)
			}
		}), rt.each({
			slideDown: N("show"),
			slideUp: N("hide"),
			slideToggle: N("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(t, e) {
			rt.fn[t] = function(t, n, i) {
				return this.animate(e, t, n, i)
			}
		}), rt.timers = [], rt.fx.tick = function() {
			var t, e = rt.timers,
				n = 0;
			for (de = rt.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
			e.length || rt.fx.stop(), de = void 0
		}, rt.fx.timer = function(t) {
			rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop()
		}, rt.fx.interval = 13, rt.fx.start = function() {
			pe || (pe = setInterval(rt.fx.tick, rt.fx.interval))
		}, rt.fx.stop = function() {
			clearInterval(pe), pe = null
		}, rt.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, rt.fn.delay = function(t, e) {
			return t = rt.fx ? rt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
				var i = setTimeout(e, t);
				n.stop = function() {
					clearTimeout(i)
				}
			})
		},
		function() {
			var t, e, n, i, r;
			e = pt.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = pt.createElement("select"), r = n.appendChild(pt.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!t.value, nt.optSelected = r.selected, nt.enctype = !!pt.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !r.disabled, t = pt.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
		}();
	var xe = /\r/g;
	rt.fn.extend({
		val: function(t) {
			var e, n, i, r = this[0]; {
				if (arguments.length) return i = rt.isFunction(t), this.each(function(n) {
					var r;
					1 === this.nodeType && (r = i ? t.call(this, n, rt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function(t) {
						return null == t ? "" : t + ""
					})), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
				});
				if (r) return e = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xe, "") : null == n ? "" : n)
			}
		}
	}), rt.extend({
		valHooks: {
			option: {
				get: function(t) {
					var e = rt.find.attr(t, "value");
					return null != e ? e : rt.trim(rt.text(t))
				}
			},
			select: {
				get: function(t) {
					for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
						if (n = i[l], !(!n.selected && l !== r || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && rt.nodeName(n.parentNode, "optgroup"))) {
							if (e = rt(n).val(), o) return e;
							a.push(e)
						}
					return a
				},
				set: function(t, e) {
					for (var n, i, r = t.options, o = rt.makeArray(e), a = r.length; a--;)
						if (i = r[a], rt.inArray(rt.valHooks.option.get(i), o) >= 0) try {
							i.selected = n = !0
						} catch (s) {
							i.scrollHeight
						} else i.selected = !1;
					return n || (t.selectedIndex = -1), r
				}
			}
		}
	}), rt.each(["radio", "checkbox"], function() {
		rt.valHooks[this] = {
			set: function(t, e) {
				return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) >= 0 : void 0
			}
		}, nt.checkOn || (rt.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	});
	var be, we, Te = rt.expr.attrHandle,
		Se = /^(?:checked|selected)$/i,
		Ce = nt.getSetAttribute,
		ke = nt.input;
	rt.fn.extend({
		attr: function(t, e) {
			return At(this, rt.attr, t, e, arguments.length > 1)
		},
		removeAttr: function(t) {
			return this.each(function() {
				rt.removeAttr(this, t)
			})
		}
	}), rt.extend({
		attr: function(t, e, n) {
			var i, r, o = t.nodeType;
			if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Tt ? rt.prop(t, e, n) : (1 === o && rt.isXMLDoc(t) || (e = e.toLowerCase(), i = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? we : be)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = rt.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void rt.removeAttr(t, e))
		},
		removeAttr: function(t, e) {
			var n, i, r = 0,
				o = e && e.match(yt);
			if (o && 1 === t.nodeType)
				for (; n = o[r++];) i = rt.propFix[n] || n, rt.expr.match.bool.test(n) ? ke && Ce || !Se.test(n) ? t[i] = !1 : t[rt.camelCase("default-" + n)] = t[i] = !1 : rt.attr(t, n, ""), t.removeAttribute(Ce ? n : i)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!nt.radioValue && "radio" === e && rt.nodeName(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		}
	}), we = {
		set: function(t, e, n) {
			return e === !1 ? rt.removeAttr(t, n) : ke && Ce || !Se.test(n) ? t.setAttribute(!Ce && rt.propFix[n] || n, n) : t[rt.camelCase("default-" + n)] = t[n] = !0, n
		}
	}, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var n = Te[e] || rt.find.attr;
		Te[e] = ke && Ce || !Se.test(e) ? function(t, e, i) {
			var r, o;
			return i || (o = Te[e], Te[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Te[e] = o), r
		} : function(t, e, n) {
			return n ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null
		}
	}), ke && Ce || (rt.attrHooks.value = {
		set: function(t, e, n) {
			return rt.nodeName(t, "input") ? void(t.defaultValue = e) : be && be.set(t, e, n)
		}
	}), Ce || (be = {
		set: function(t, e, n) {
			var i = t.getAttributeNode(n);
			return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
		}
	}, Te.id = Te.name = Te.coords = function(t, e, n) {
		var i;
		return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
	}, rt.valHooks.button = {
		get: function(t, e) {
			var n = t.getAttributeNode(e);
			return n && n.specified ? n.value : void 0
		},
		set: be.set
	}, rt.attrHooks.contenteditable = {
		set: function(t, e, n) {
			be.set(t, "" === e ? !1 : e, n)
		}
	}, rt.each(["width", "height"], function(t, e) {
		rt.attrHooks[e] = {
			set: function(t, n) {
				return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
			}
		}
	})), nt.style || (rt.attrHooks.style = {
		get: function(t) {
			return t.style.cssText || void 0
		},
		set: function(t, e) {
			return t.style.cssText = e + ""
		}
	});
	var Ee = /^(?:input|select|textarea|button|object)$/i,
		Pe = /^(?:a|area)$/i;
	rt.fn.extend({
		prop: function(t, e) {
			return At(this, rt.prop, t, e, arguments.length > 1)
		},
		removeProp: function(t) {
			return t = rt.propFix[t] || t, this.each(function() {
				try {
					this[t] = void 0, delete this[t]
				} catch (e) {}
			})
		}
	}), rt.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(t, e, n) {
			var i, r, o, a = t.nodeType;
			if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !rt.isXMLDoc(t), o && (e = rt.propFix[e] || e, r = rt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e];

		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					var e = rt.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : Ee.test(t.nodeName) || Pe.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		}
	}), nt.hrefNormalized || rt.each(["href", "src"], function(t, e) {
		rt.propHooks[e] = {
			get: function(t) {
				return t.getAttribute(e, 4)
			}
		}
	}), nt.optSelected || (rt.propHooks.selected = {
		get: function(t) {
			var e = t.parentNode;
			return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
		}
	}), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		rt.propFix[this.toLowerCase()] = this
	}), nt.enctype || (rt.propFix.enctype = "encoding");
	var Ae = /[\t\r\n\f]/g;
	rt.fn.extend({
		addClass: function(t) {
			var e, n, i, r, o, a, s = 0,
				l = this.length,
				u = "string" == typeof t && t;
			if (rt.isFunction(t)) return this.each(function(e) {
				rt(this).addClass(t.call(this, e, this.className))
			});
			if (u)
				for (e = (t || "").match(yt) || []; l > s; s++)
					if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
						for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
						a = rt.trim(i), n.className !== a && (n.className = a)
					}
			return this
		},
		removeClass: function(t) {
			var e, n, i, r, o, a, s = 0,
				l = this.length,
				u = 0 === arguments.length || "string" == typeof t && t;
			if (rt.isFunction(t)) return this.each(function(e) {
				rt(this).removeClass(t.call(this, e, this.className))
			});
			if (u)
				for (e = (t || "").match(yt) || []; l > s; s++)
					if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
						for (o = 0; r = e[o++];)
							for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
						a = t ? rt.trim(i) : "", n.className !== a && (n.className = a)
					}
			return this
		},
		toggleClass: function(t, e) {
			var n = typeof t;
			return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(rt.isFunction(t) ? function(n) {
				rt(this).toggleClass(t.call(this, n, this.className, e), e)
			} : function() {
				if ("string" === n)
					for (var e, i = 0, r = rt(this), o = t.match(yt) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
				else(n === Tt || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : rt._data(this, "__className__") || "")
			})
		},
		hasClass: function(t) {
			for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(e) >= 0) return !0;
			return !1
		}
	}), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
		rt.fn[e] = function(t, n) {
			return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
		}
	}), rt.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function(t, e, n) {
			return this.on(t, null, e, n)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, n, i) {
			return this.on(e, t, n, i)
		},
		undelegate: function(t, e, n) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		}
	});
	var Oe = rt.now(),
		Me = /\?/,
		De = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	rt.parseJSON = function(e) {
		if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
		var n, i = null,
			r = rt.trim(e + "");
		return r && !rt.trim(r.replace(De, function(t, e, r, o) {
			return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
		})) ? Function("return " + r)() : rt.error("Invalid JSON: " + e)
	}, rt.parseXML = function(e) {
		var n, i;
		if (!e || "string" != typeof e) return null;
		try {
			t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
		} catch (r) {
			n = void 0
		}
		return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), n
	};
	var Re, Ne, je = /#.*$/,
		Ie = /([?&])_=[^&]*/,
		Le = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Be = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		ze = /^(?:GET|HEAD)$/,
		Fe = /^\/\//,
		qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		He = {},
		We = {},
		Xe = "*/".concat("*");
	try {
		Ne = location.href
	} catch (Ue) {
		Ne = pt.createElement("a"), Ne.href = "", Ne = Ne.href
	}
	Re = qe.exec(Ne.toLowerCase()) || [], rt.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Ne,
			type: "GET",
			isLocal: Be.test(Re[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Xe,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": rt.parseJSON,
				"text xml": rt.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? q(q(t, rt.ajaxSettings), e) : q(rt.ajaxSettings, t)
		},
		ajaxPrefilter: z(He),
		ajaxTransport: z(We),
		ajax: function(t, e) {
			function n(t, e, n, i) {
				var r, c, v, _, x, w = e;
				2 !== y && (y = 2, s && clearTimeout(s), u = void 0, a = i || "", b.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (_ = H(h, b, n)), _ = W(h, _, b, r), r ? (h.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (rt.lastModified[o] = x), x = b.getResponseHeader("etag"), x && (rt.etag[o] = x)), 204 === t || "HEAD" === h.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = _.state, c = _.data, v = _.error, r = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || w) + "", r ? p.resolveWith(f, [c, w, b]) : p.rejectWith(f, [b, w, v]), b.statusCode(g), g = void 0, l && d.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? c : v]), m.fireWith(f, [b, w]), l && (d.trigger("ajaxComplete", [b, h]), --rt.active || rt.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (e = t, t = void 0), e = e || {};
			var i, r, o, a, s, l, u, c, h = rt.ajaxSetup({}, e),
				f = h.context || h,
				d = h.context && (f.nodeType || f.jquery) ? rt(f) : rt.event,
				p = rt.Deferred(),
				m = rt.Callbacks("once memory"),
				g = h.statusCode || {},
				v = {},
				_ = {},
				y = 0,
				x = "canceled",
				b = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if (2 === y) {
							if (!c)
								for (c = {}; e = Le.exec(a);) c[e[1].toLowerCase()] = e[2];
							e = c[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 === y ? a : null
					},
					setRequestHeader: function(t, e) {
						var n = t.toLowerCase();
						return y || (t = _[n] = _[n] || t, v[t] = e), this
					},
					overrideMimeType: function(t) {
						return y || (h.mimeType = t), this
					},
					statusCode: function(t) {
						var e;
						if (t)
							if (2 > y)
								for (e in t) g[e] = [g[e], t[e]];
							else b.always(t[b.status]);
						return this
					},
					abort: function(t) {
						var e = t || x;
						return u && u.abort(e), n(0, e), this
					}
				};
			if (p.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, h.url = ((t || h.url || Ne) + "").replace(je, "").replace(Fe, Re[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = rt.trim(h.dataType || "*").toLowerCase().match(yt) || [""], null == h.crossDomain && (i = qe.exec(h.url.toLowerCase()), h.crossDomain = !(!i || i[1] === Re[1] && i[2] === Re[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Re[3] || ("http:" === Re[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = rt.param(h.data, h.traditional)), F(He, h, e, b), 2 === y) return b;
			l = rt.event && h.global, l && 0 === rt.active++ && rt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !ze.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (Me.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Ie.test(o) ? o.replace(Ie, "$1_=" + Oe++) : o + (Me.test(o) ? "&" : "?") + "_=" + Oe++)), h.ifModified && (rt.lastModified[o] && b.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && b.setRequestHeader("If-None-Match", rt.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Xe + "; q=0.01" : "") : h.accepts["*"]);
			for (r in h.headers) b.setRequestHeader(r, h.headers[r]);
			if (h.beforeSend && (h.beforeSend.call(f, b, h) === !1 || 2 === y)) return b.abort();
			x = "abort";
			for (r in {
					success: 1,
					error: 1,
					complete: 1
				}) b[r](h[r]);
			if (u = F(We, h, e, b)) {
				b.readyState = 1, l && d.trigger("ajaxSend", [b, h]), h.async && h.timeout > 0 && (s = setTimeout(function() {
					b.abort("timeout")
				}, h.timeout));
				try {
					y = 1, u.send(v, n)
				} catch (w) {
					if (!(2 > y)) throw w;
					n(-1, w)
				}
			} else n(-1, "No Transport");
			return b
		},
		getJSON: function(t, e, n) {
			return rt.get(t, e, n, "json")
		},
		getScript: function(t, e) {
			return rt.get(t, void 0, e, "script")
		}
	}), rt.each(["get", "post"], function(t, e) {
		rt[e] = function(t, n, i, r) {
			return rt.isFunction(n) && (r = r || i, i = n, n = void 0), rt.ajax({
				url: t,
				type: e,
				dataType: r,
				data: n,
				success: i
			})
		}
	}), rt._evalUrl = function(t) {
		return rt.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, rt.fn.extend({
		wrapAll: function(t) {
			if (rt.isFunction(t)) return this.each(function(e) {
				rt(this).wrapAll(t.call(this, e))
			});
			if (this[0]) {
				var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
					for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
					return t
				}).append(this)
			}
			return this
		},
		wrapInner: function(t) {
			return this.each(rt.isFunction(t) ? function(e) {
				rt(this).wrapInner(t.call(this, e))
			} : function() {
				var e = rt(this),
					n = e.contents();
				n.length ? n.wrapAll(t) : e.append(t)
			})
		},
		wrap: function(t) {
			var e = rt.isFunction(t);
			return this.each(function(n) {
				rt(this).wrapAll(e ? t.call(this, n) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
			}).end()
		}
	}), rt.expr.filters.hidden = function(t) {
		return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || rt.css(t, "display"))
	}, rt.expr.filters.visible = function(t) {
		return !rt.expr.filters.hidden(t)
	};
	var Ye = /%20/g,
		$e = /\[\]$/,
		Ve = /\r?\n/g,
		Qe = /^(?:submit|button|image|reset|file)$/i,
		Ge = /^(?:input|select|textarea|keygen)/i;
	rt.param = function(t, e) {
		var n, i = [],
			r = function(t, e) {
				e = rt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
			};
		if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function() {
			r(this.name, this.value)
		});
		else
			for (n in t) X(n, t[n], e, r);
		return i.join("&").replace(Ye, "+")
	}, rt.fn.extend({
		serialize: function() {
			return rt.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = rt.prop(this, "elements");
				return t ? rt.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !rt(this).is(":disabled") && Ge.test(this.nodeName) && !Qe.test(t) && (this.checked || !Ot.test(t))
			}).map(function(t, e) {
				var n = rt(this).val();
				return null == n ? null : rt.isArray(n) ? rt.map(n, function(t) {
					return {
						name: e.name,
						value: t.replace(Ve, "\r\n")
					}
				}) : {
					name: e.name,
					value: n.replace(Ve, "\r\n")
				}
			}).get()
		}
	}), rt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || Y()
	} : U;
	var Ze = 0,
		Je = {},
		Ke = rt.ajaxSettings.xhr();
	t.attachEvent && t.attachEvent("onunload", function() {
		for (var t in Je) Je[t](void 0, !0)
	}), nt.cors = !!Ke && "withCredentials" in Ke, Ke = nt.ajax = !!Ke, Ke && rt.ajaxTransport(function(t) {
		if (!t.crossDomain || nt.cors) {
			var e;
			return {
				send: function(n, i) {
					var r, o = t.xhr(),
						a = ++Ze;
					if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
						for (r in t.xhrFields) o[r] = t.xhrFields[r];
					t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
					o.send(t.hasContent && t.data || null), e = function(n, r) {
						var s, l, u;
						if (e && (r || 4 === o.readyState))
							if (delete Je[a], e = void 0, o.onreadystatechange = rt.noop, r) 4 !== o.readyState && o.abort();
							else {
								u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
								try {
									l = o.statusText
								} catch (c) {
									l = ""
								}
								s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
							}
						u && i(s, l, u, o.getAllResponseHeaders())
					}, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Je[a] = e : e()
				},
				abort: function() {
					e && e(void 0, !0)
				}
			}
		}
	}), rt.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(t) {
				return rt.globalEval(t), t
			}
		}
	}), rt.ajaxPrefilter("script", function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
	}), rt.ajaxTransport("script", function(t) {
		if (t.crossDomain) {
			var e, n = pt.head || rt("head")[0] || pt.documentElement;
			return {
				send: function(i, r) {
					e = pt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
						(n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
					}, n.insertBefore(e, n.firstChild)
				},
				abort: function() {
					e && e.onload(void 0, !0)
				}
			}
		}
	});
	var tn = [],
		en = /(=)\?(?=&|$)|\?\?/;
	rt.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = tn.pop() || rt.expando + "_" + Oe++;
			return this[t] = !0, t
		}
	}), rt.ajaxPrefilter("json jsonp", function(e, n, i) {
		var r, o, a, s = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
		return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(en, "$1" + r) : e.jsonp !== !1 && (e.url += (Me.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
			return a || rt.error(r + " was not called"), a[0]
		}, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
			a = arguments
		}, i.always(function() {
			t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, tn.push(r)), a && rt.isFunction(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), rt.parseHTML = function(t, e, n) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (n = e, e = !1), e = e || pt;
		var i = ht.exec(t),
			r = !n && [];
		return i ? [e.createElement(i[1])] : (i = rt.buildFragment([t], e, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes))
	};
	var nn = rt.fn.load;
	rt.fn.load = function(t, e, n) {
		if ("string" != typeof t && nn) return nn.apply(this, arguments);
		var i, r, o, a = this,
			s = t.indexOf(" ");
		return s >= 0 && (i = rt.trim(t.slice(s, t.length)), t = t.slice(0, s)), rt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && rt.ajax({
			url: t,
			type: o,
			dataType: "html",
			data: e
		}).done(function(t) {
			r = arguments, a.html(i ? rt("<div>").append(rt.parseHTML(t)).find(i) : t)
		}).complete(n && function(t, e) {
			a.each(n, r || [t.responseText, e, t])
		}), this
	}, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
		rt.fn[e] = function(t) {
			return this.on(e, t)
		}
	}), rt.expr.filters.animated = function(t) {
		return rt.grep(rt.timers, function(e) {
			return t === e.elem
		}).length
	};
	var rn = t.document.documentElement;
	rt.offset = {
		setOffset: function(t, e, n) {
			var i, r, o, a, s, l, u, c = rt.css(t, "position"),
				h = rt(t),
				f = {};
			"static" === c && (t.style.position = "relative"), s = h.offset(), o = rt.css(t, "top"), l = rt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [o, l]) > -1, u ? (i = h.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (f.top = e.top - s.top + a), null != e.left && (f.left = e.left - s.left + r), "using" in e ? e.using.call(t, f) : h.css(f)
		}
	}, rt.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				rt.offset.setOffset(this, t, e)
			});
			var e, n, i = {
					top: 0,
					left: 0
				},
				r = this[0],
				o = r && r.ownerDocument;
			if (o) return e = o.documentElement, rt.contains(e, r) ? (typeof r.getBoundingClientRect !== Tt && (i = r.getBoundingClientRect()), n = $(o), {
				top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
				left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
			}) : i
		},
		position: function() {
			if (this[0]) {
				var t, e, n = {
						top: 0,
						left: 0
					},
					i = this[0];
				return "fixed" === rt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (n = t.offset()), n.top += rt.css(t[0], "borderTopWidth", !0), n.left += rt.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - n.top - rt.css(i, "marginTop", !0),
					left: e.left - n.left - rt.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || rn; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position");) t = t.offsetParent;
				return t || rn
			})
		}
	}), rt.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, e) {
		var n = /Y/.test(e);
		rt.fn[t] = function(i) {
			return At(this, function(t, i, r) {
				var o = $(t);
				return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r : rt(o).scrollTop()) : t[i] = r)
			}, t, i, arguments.length, null)
		}
	}), rt.each(["top", "left"], function(t, e) {
		rt.cssHooks[e] = k(nt.pixelPosition, function(t, n) {
			return n ? (n = ee(t, e), ie.test(n) ? rt(t).position()[e] + "px" : n) : void 0
		})
	}), rt.each({
		Height: "height",
		Width: "width"
	}, function(t, e) {
		rt.each({
			padding: "inner" + t,
			content: e,
			"": "outer" + t
		}, function(n, i) {
			rt.fn[i] = function(i, r) {
				var o = arguments.length && (n || "boolean" != typeof i),
					a = n || (i === !0 || r === !0 ? "margin" : "border");
				return At(this, function(e, n, i) {
					var r;
					return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? rt.css(e, n, a) : rt.style(e, n, i, a)
				}, e, o ? i : void 0, o, null)
			}
		})
	}), rt.fn.size = function() {
		return this.length
	}, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return rt
	});
	var on = t.jQuery,
		an = t.$;
	return rt.noConflict = function(e) {
		return t.$ === rt && (t.$ = an), e && t.jQuery === rt && (t.jQuery = on), rt
	}, typeof e === Tt && (t.jQuery = t.$ = rt), rt
}),
function() {
	function t(t) {
		function e(e, n, i, r, o, a) {
			for (; o >= 0 && a > o; o += t) {
				var s = r ? r[o] : o;
				i = n(i, e[s], s, e)
			}
			return i
		}
		return function(n, i, r, o) {
			if (null == n) return r;
			i = _(i, o, 4);
			var a = !T(n) && v.keys(n),
				s = (a || n).length,
				l = t > 0 ? 0 : s - 1;
			return arguments.length < 3 && (r = n[a ? a[l] : l], l += t), e(n, i, r, a, l, s)
		}
	}

	function e(t) {
		return function(e, n, i) {
			n = y(n, i);
			for (var r = null != e && e.length, o = t > 0 ? 0 : r - 1; o >= 0 && r > o; o += t)
				if (n(e[o], o, e)) return o;
			return -1
		}
	}

	function n(t, e) {
		for (var n = P.length, i = "function" == typeof t.constructor ? s : a; n--;) {
			var r = P[n];
			("constructor" === r ? v.has(t, r) : r in t && t[r] !== i[r] && !v.contains(e, r)) && e.push(r)
		}
	}
	var i = this,
		r = i._,
		o = Array.prototype,
		a = Object.prototype,
		s = Function.prototype,
		l = o.push,
		u = o.slice,
		c = a.toString,
		h = a.hasOwnProperty,
		f = Array.isArray,
		d = Object.keys,
		p = s.bind,
		m = Object.create,
		g = function() {},
		v = function(t) {
			return t instanceof v ? t : this instanceof v ? void(this._wrapped = t) : new v(t)
		};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : i._ = v, v.VERSION = "1.7.0";
	var _ = function(t, e, n) {
			if (void 0 === e) return t;
			switch (null == n ? 3 : n) {
				case 1:
					return function(n) {
						return t.call(e, n)
					};
				case 2:
					return function(n, i) {
						return t.call(e, n, i)
					};
				case 3:
					return function(n, i, r) {
						return t.call(e, n, i, r)
					};
				case 4:
					return function(n, i, r, o) {
						return t.call(e, n, i, r, o)
					}
			}
			return function() {
				return t.apply(e, arguments)
			}
		},
		y = function(t, e, n) {
			return null == t ? v.identity : v.isFunction(t) ? _(t, e, n) : v.isObject(t) ? v.matches(t) : v.property(t)
		};
	v.iteratee = function(t, e) {
		return y(t, e, 1 / 0)
	};
	var x = function(t, e) {
			return function(n) {
				var i = arguments.length;
				if (2 > i || null == n) return n;
				for (var r = 1; i > r; r++)
					for (var o = arguments[r], a = t(o), s = a.length, l = 0; s > l; l++) {
						var u = a[l];
						e && void 0 !== n[u] || (n[u] = o[u])
					}
				return n
			}
		},
		b = function(t) {
			if (!v.isObject(t)) return {};
			if (m) return m(t);
			g.prototype = t;
			var e = new g;
			return g.prototype = null, e
		},
		w = Math.pow(2, 53) - 1,
		T = function(t) {
			var e = t && t.length;
			return "number" == typeof e && e >= 0 && w >= e
		};
	v.each = v.forEach = function(t, e, n) {
		if (null == t) return t;
		e = _(e, n);
		var i, r = t.length;
		if (T(t))
			for (i = 0; r > i; i++) e(t[i], i, t);
		else {
			var o = v.keys(t);
			for (i = 0, r = o.length; r > i; i++) e(t[o[i]], o[i], t)
		}
		return t
	}, v.map = v.collect = function(t, e, n) {
		if (null == t) return [];
		e = y(e, n);
		for (var i, r = !T(t) && v.keys(t), o = (r || t).length, a = Array(o), s = 0; o > s; s++) i = r ? r[s] : s, a[s] = e(t[i], i, t);
		return a
	}, v.reduce = v.foldl = v.inject = t(1), v.reduceRight = v.foldr = t(-1), v.transform = function(t, e, n, i) {
		if (null == n)
			if (v.isArray(t)) n = [];
			else if (v.isObject(t)) {
			var r = t.constructor;
			n = b("function" == typeof r && r.prototype)
		} else n = {};
		if (null == t) return n;
		e = _(e, i, 4);
		var o, a, s = t.length !== +t.length && v.keys(t),
			l = (s || t).length;
		for (o = 0; l > o && (a = s ? s[o] : o, e(n, t[a], a, t) !== !1); o++);
		return n
	}, v.find = v.detect = function(t, e, n) {
		var i;
		return i = T(t) ? v.findIndex(t, e, n) : v.findKey(t, e, n), void 0 !== i && -1 !== i ? t[i] : void 0
	}, v.filter = v.select = function(t, e, n) {
		var i = [];
		return null == t ? i : (e = y(e, n), v.each(t, function(t, n, r) {
			e(t, n, r) && i.push(t)
		}), i)
	}, v.reject = function(t, e, n) {
		return v.filter(t, v.negate(y(e)), n)
	}, v.every = v.all = function(t, e, n) {
		if (null == t) return !0;
		e = y(e, n);
		var i, r, o = !T(t) && v.keys(t),
			a = (o || t).length;
		for (i = 0; a > i; i++)
			if (r = o ? o[i] : i, !e(t[r], r, t)) return !1;
		return !0
	}, v.some = v.any = function(t, e, n) {
		if (null == t) return !1;
		e = y(e, n);
		var i, r, o = !T(t) && v.keys(t),
			a = (o || t).length;
		for (i = 0; a > i; i++)
			if (r = o ? o[i] : i, e(t[r], r, t)) return !0;
		return !1
	}, v.contains = v.includes = v.include = function(t, e, n) {
		return null == t ? !1 : (T(t) || (t = v.values(t)), v.indexOf(t, e, "number" == typeof n && n) >= 0)
	}, v.invoke = function(t, e) {
		var n = u.call(arguments, 2),
			i = v.isFunction(e);
		return v.map(t, function(t) {
			var r = i ? e : t[e];
			return null == r ? r : r.apply(t, n)
		})
	}, v.pluck = function(t, e) {
		return v.map(t, v.property(e))
	}, v.where = function(t, e) {
		return v.filter(t, v.matches(e))
	}, v.findWhere = function(t, e) {
		return v.find(t, v.matches(e))
	}, v.max = function(t, e, n) {
		var i, r, o = -(1 / 0),
			a = -(1 / 0);
		if (null == e && null != t) {
			t = T(t) ? t : v.values(t);
			for (var s = 0, l = t.length; l > s; s++) i = t[s], i > o && (o = i)
		} else e = y(e, n), v.each(t, function(t, n, i) {
			r = e(t, n, i), (r > a || r === -(1 / 0) && o === -(1 / 0)) && (o = t, a = r)
		});
		return o
	}, v.min = function(t, e, n) {
		var i, r, o = 1 / 0,
			a = 1 / 0;
		if (null == e && null != t) {
			t = T(t) ? t : v.values(t);
			for (var s = 0, l = t.length; l > s; s++) i = t[s], o > i && (o = i)
		} else e = y(e, n), v.each(t, function(t, n, i) {
			r = e(t, n, i), (a > r || r === 1 / 0 && o === 1 / 0) && (o = t, a = r)
		});
		return o
	}, v.shuffle = function(t) {
		for (var e, n = T(t) ? t : v.values(t), i = n.length, r = Array(i), o = 0; i > o; o++) e = v.random(0, o), e !== o && (r[o] = r[e]), r[e] = n[o];
		return r
	}, v.sample = function(t, e, n) {
		return null == e || n ? (T(t) || (t = v.values(t)), t[v.random(t.length - 1)]) : v.shuffle(t).slice(0, Math.max(0, e))
	}, v.sortBy = function(t, e, n) {
		return e = y(e, n), v.pluck(v.map(t, function(t, n, i) {
			return {
				value: t,
				index: n,
				criteria: e(t, n, i)
			}
		}).sort(function(t, e) {
			var n = t.criteria,
				i = e.criteria;
			if (n !== i) {
				if (n > i || void 0 === n) return 1;
				if (i > n || void 0 === i) return -1
			}
			return t.index - e.index
		}), "value")
	};
	var S = function(t) {
		return function(e, n, i) {
			var r = {};
			return n = y(n, i), v.each(e, function(i, o) {
				var a = n(i, o, e);
				t(r, i, a)
			}), r
		}
	};
	v.groupBy = S(function(t, e, n) {
		v.has(t, n) ? t[n].push(e) : t[n] = [e]
	}), v.indexBy = S(function(t, e, n) {
		t[n] = e
	}), v.countBy = S(function(t, e, n) {
		v.has(t, n) ? t[n]++ : t[n] = 1
	}), v.toArray = function(t) {
		return t ? v.isArray(t) ? u.call(t) : T(t) ? v.map(t, v.identity) : v.values(t) : []
	}, v.size = function(t) {
		return null == t ? 0 : T(t) ? t.length : v.keys(t).length
	}, v.partition = function(t, e, n) {
		e = y(e, n);
		var i = [],
			r = [];
		return v.each(t, function(t, n, o) {
			(e(t, n, o) ? i : r).push(t)
		}), [i, r]
	}, v.first = v.head = v.take = function(t, e, n) {
		return null == t ? void 0 : null == e || n ? t[0] : v.initial(t, t.length - e)
	}, v.initial = function(t, e, n) {
		return u.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
	}, v.last = function(t, e, n) {
		return null == t ? void 0 : null == e || n ? t[t.length - 1] : v.rest(t, Math.max(0, t.length - e))
	}, v.rest = v.tail = v.drop = function(t, e, n) {
		return u.call(t, null == e || n ? 1 : e)
	}, v.compact = function(t) {
		return v.filter(t, v.identity)
	};
	var C = function(t, e, n, i) {
		for (var r, o = [], a = 0, s = i || 0, l = t && t.length; l > s; s++)
			if (r = t[s], T(r) && (v.isArray(r) || v.isArguments(r))) {
				e || (r = C(r, e, n));
				var u = 0,
					c = r.length;
				for (o.length += c; c > u;) o[a++] = r[u++]
			} else n || (o[a++] = r);
		return o
	};
	v.flatten = function(t, e) {
		return C(t, e, !1)
	}, v.without = function(t) {
		return v.difference(t, u.call(arguments, 1))
	}, v.uniq = v.unique = function(t, e, n, i) {
		if (null == t) return [];
		v.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = y(n, i));
		for (var r = [], o = [], a = 0, s = t.length; s > a; a++) {
			var l = t[a],
				u = n ? n(l, a, t) : l;
			e ? (a && o === u || r.push(l), o = u) : n ? v.contains(o, u) || (o.push(u), r.push(l)) : v.contains(r, l) || r.push(l)
		}
		return r
	}, v.union = function() {
		return v.uniq(C(arguments, !0, !0))
	}, v.intersection = function(t) {
		if (null == t) return [];
		for (var e = [], n = arguments.length, i = 0, r = t.length; r > i; i++) {
			var o = t[i];
			if (!v.contains(e, o)) {
				for (var a = 1; n > a && v.contains(arguments[a], o); a++);
				a === n && e.push(o)
			}
		}
		return e
	}, v.difference = function(t) {
		var e = C(arguments, !0, !0, 1);
		return v.filter(t, function(t) {
			return !v.contains(e, t)
		})
	}, v.zip = function() {
		return v.unzip(arguments)
	}, v.unzip = function(t) {
		for (var e = t && v.max(t, "length").length || 0, n = Array(e), i = 0; e > i; i++) n[i] = v.pluck(t, i);
		return n
	}, v.object = function(t, e) {
		if (null == t) return {};
		for (var n = {}, i = 0, r = t.length; r > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
		return n
	}, v.indexOf = function(t, e, n) {
		var i = 0,
			r = t && t.length;
		if ("number" == typeof n) i = 0 > n ? Math.max(0, r + n) : n;
		else if (n && r) return i = v.sortedIndex(t, e), t[i] === e ? i : -1;
		if (e !== e) return v.findIndex(u.call(t, i), v.isNaN);
		for (; r > i; i++)
			if (t[i] === e) return i;
		return -1
	}, v.lastIndexOf = function(t, e, n) {
		var i = t ? t.length : 0;
		if ("number" == typeof n && (i = 0 > n ? i + n + 1 : Math.min(i, n + 1)), e !== e) return v.findLastIndex(u.call(t, 0, i), v.isNaN);
		for (; --i >= 0;)
			if (t[i] === e) return i;
		return -1
	}, v.findIndex = e(1), v.findLastIndex = e(-1), v.sortedIndex = function(t, e, n, i) {
		n = y(n, i, 1);
		for (var r = n(e), o = 0, a = t.length; a > o;) {
			var s = Math.floor((o + a) / 2);
			n(t[s]) < r ? o = s + 1 : a = s
		}
		return o
	}, v.range = function(t, e, n) {
		arguments.length <= 1 && (e = t || 0, t = 0), n = n || 1;
		for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; i > o; o++, t += n) r[o] = t;
		return r
	};
	var k = function(t, e, n, i, r) {
		if (!(i instanceof e)) return t.apply(n, r);
		var o = b(t.prototype),
			a = t.apply(o, r);
		return v.isObject(a) ? a : o
	};
	v.bind = function(t, e) {
		if (p && t.bind === p) return p.apply(t, u.call(arguments, 1));
		if (!v.isFunction(t)) throw new TypeError("Bind must be called on a function");
		var n = u.call(arguments, 2);
		return function i() {
			return k(t, i, e, this, n.concat(u.call(arguments)))
		}
	}, v.partial = function(t) {
		var e = u.call(arguments, 1);
		return function n() {
			for (var i = 0, r = e.length, o = Array(r), a = 0; r > a; a++) o[a] = e[a] === v ? arguments[i++] : e[a];
			for (; i < arguments.length;) o.push(arguments[i++]);
			return k(t, n, this, this, o)
		}
	}, v.bindAll = function(t) {
		var e, n, i = arguments.length;
		if (1 >= i) throw new Error("bindAll must be passed function names");
		for (e = 1; i > e; e++) n = arguments[e], t[n] = v.bind(t[n], t);
		return t
	}, v.memoize = function(t, e) {
		var n = function(i) {
			var r = n.cache,
				o = "" + (e ? e.apply(this, arguments) : i);
			return v.has(r, o) || (r[o] = t.apply(this, arguments)), r[o]
		};
		return n.cache = {}, n
	}, v.delay = function(t, e) {
		var n = u.call(arguments, 2);
		return setTimeout(function() {
			return t.apply(null, n)
		}, e)
	}, v.defer = v.partial(v.delay, v, 1), v.throttle = function(t, e, n) {
		var i, r, o, a = null,
			s = 0;
		n || (n = {});
		var l = function() {
			s = n.leading === !1 ? 0 : v.now(), a = null, o = t.apply(i, r), a || (i = r = null)
		};
		return function() {
			var u = v.now();
			s || n.leading !== !1 || (s = u);
			var c = e - (u - s);
			return i = this, r = arguments, 0 >= c || c > e ? (a && (clearTimeout(a), a = null), s = u, o = t.apply(i, r), a || (i = r = null)) : a || n.trailing === !1 || (a = setTimeout(l, c)), o
		}
	}, v.debounce = function(t, e, n) {
		var i, r, o, a, s, l = function() {
			var u = v.now() - a;
			e > u && u >= 0 ? i = setTimeout(l, e - u) : (i = null, n || (s = t.apply(o, r), i || (o = r = null)))
		};
		return function() {
			o = this, r = arguments, a = v.now();
			var u = n && !i;
			return i || (i = setTimeout(l, e)), u && (s = t.apply(o, r), o = r = null), s
		}
	}, v.wrap = function(t, e) {
		return v.partial(e, t)
	}, v.negate = function(t) {
		return function() {
			return !t.apply(this, arguments)
		}
	}, v.compose = function() {
		var t = arguments,
			e = t.length - 1;
		return function() {
			for (var n = e, i = t[e].apply(this, arguments); n--;) i = t[n].call(this, i);
			return i
		}
	}, v.after = function(t, e) {
		return function() {
			return --t < 1 ? e.apply(this, arguments) : void 0
		}
	}, v.before = function(t, e) {
		var n;
		return function() {
			return --t > 0 && (n = e.apply(this, arguments)), 1 >= t && (e = null), n
		}
	}, v.once = v.partial(v.before, 2);
	var E = !{
			toString: null
		}.propertyIsEnumerable("toString"),
		P = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
	v.keys = function(t) {
		if (!v.isObject(t)) return [];
		if (d) return d(t);
		var e = [];
		for (var i in t) v.has(t, i) && e.push(i);
		return E && n(t, e), e
	}, v.keysIn = function(t) {
		if (!v.isObject(t)) return [];
		var e = [];
		for (var i in t) e.push(i);
		return E && n(t, e), e
	}, v.values = function(t) {
		for (var e = v.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++) i[r] = t[e[r]];
		return i
	}, v.pairs = function(t) {
		for (var e = v.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++) i[r] = [e[r], t[e[r]]];
		return i
	}, v.invert = function(t) {
		for (var e = {}, n = v.keys(t), i = 0, r = n.length; r > i; i++) e[t[n[i]]] = n[i];
		return e
	}, v.functions = v.methods = function(t) {
		var e = [];
		for (var n in t) v.isFunction(t[n]) && e.push(n);
		return e.sort()
	}, v.extend = x(v.keysIn), v.assign = x(v.keys), v.findKey = function(t, e, n) {
		e = y(e, n);
		for (var i, r = v.keys(t), o = 0, a = r.length; a > o; o++)
			if (i = r[o], e(t[i], i, t)) return i
	}, v.pick = function(t, e, n) {
		var i, r = {};
		if (null == t) return r;
		if (v.isFunction(e)) {
			e = _(e, n);
			for (i in t) {
				var o = t[i];
				e(o, i, t) && (r[i] = o)
			}
		} else {
			var a = C(arguments, !1, !1, 1);
			t = new Object(t);
			for (var s = 0, l = a.length; l > s; s++) i = a[s], i in t && (r[i] = t[i])
		}
		return r
	}, v.omit = function(t, e, n) {
		if (v.isFunction(e)) e = v.negate(e);
		else {
			var i = v.map(C(arguments, !1, !1, 1), String);
			e = function(t, e) {
				return !v.contains(i, e)
			}
		}
		return v.pick(t, e, n)
	}, v.defaults = x(v.keysIn, !0), v.create = function(t, e) {
		var n = b(t);
		return e && v.assign(n, e), n
	}, v.clone = function(t) {
		return v.isObject(t) ? v.isArray(t) ? t.slice() : v.extend({}, t) : t
	}, v.tap = function(t, e) {
		return e(t), t
	};
	var A = function(t, e, n, i) {
		if (t === e) return 0 !== t || 1 / t === 1 / e;
		if (null == t || null == e) return t === e;
		t instanceof v && (t = t._wrapped), e instanceof v && (e = e._wrapped);
		var r = c.call(t);
		if (r !== c.call(e)) return !1;
		switch (r) {
			case "[object RegExp]":
			case "[object String]":
				return "" + t == "" + e;
			case "[object Number]":
				return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
			case "[object Date]":
			case "[object Boolean]":
				return +t === +e
		}
		var o = "[object Array]" === r;
		if (!o) {
			if ("object" != typeof t || "object" != typeof e) return !1;
			var a = t.constructor,
				s = e.constructor;
			if (a !== s && !(v.isFunction(a) && a instanceof a && v.isFunction(s) && s instanceof s) && "constructor" in t && "constructor" in e) return !1
		}
		n = n || [], i = i || [];
		for (var l = n.length; l--;)
			if (n[l] === t) return i[l] === e;
		if (n.push(t), i.push(e), o) {
			if (l = t.length, l !== e.length) return !1;
			for (; l--;)
				if (!A(t[l], e[l], n, i)) return !1
		} else {
			var u, h = v.keys(t);
			if (l = h.length, v.keys(e).length !== l) return !1;
			for (; l--;)
				if (u = h[l], !v.has(e, u) || !A(t[u], e[u], n, i)) return !1
		}
		return n.pop(), i.pop(), !0
	};
	v.isEqual = function(t, e) {
		return A(t, e)
	}, v.isEmpty = function(t) {
		return null == t ? !0 : T(t) && (v.isArray(t) || v.isString(t) || v.isArguments(t)) ? 0 === t.length : 0 === v.keys(t).length
	}, v.isElement = function(t) {
		return !(!t || 1 !== t.nodeType)
	}, v.isArray = f || function(t) {
		return "[object Array]" === c.call(t)
	}, v.isObject = function(t) {
		var e = typeof t;
		return "function" === e || "object" === e && !!t
	}, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
		v["is" + t] = function(e) {
			return c.call(e) === "[object " + t + "]"
		}
	}), v.isArguments(arguments) || (v.isArguments = function(t) {
		return v.has(t, "callee")
	}), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function(t) {
		return "function" == typeof t || !1
	}), v.isFinite = function(t) {
		return isFinite(t) && !isNaN(parseFloat(t))
	}, v.isNaN = function(t) {
		return v.isNumber(t) && t !== +t
	}, v.isBoolean = function(t) {
		return t === !0 || t === !1 || "[object Boolean]" === c.call(t)
	}, v.isNull = function(t) {
		return null === t
	}, v.isUndefined = function(t) {
		return void 0 === t
	}, v.has = function(t, e) {
		return null != t && h.call(t, e)
	}, v.noConflict = function() {
		return i._ = r, this
	}, v.identity = function(t) {
		return t
	}, v.constant = function(t) {
		return function() {
			return t
		}
	}, v.noop = function() {}, v.property = function(t) {
		return function(e) {
			return null == e ? void 0 : e[t]
		}
	}, v.propertyOf = function(t) {
		return null == t ? function() {} : function(e) {
			return t[e]
		}
	}, v.matches = function(t) {
		var e = v.pairs(t),
			n = e.length;
		return function(t) {
			if (null == t) return !n;
			t = new Object(t);
			for (var i = 0; n > i; i++) {
				var r = e[i],
					o = r[0];
				if (r[1] !== t[o] || !(o in t)) return !1
			}
			return !0
		}
	}, v.times = function(t, e, n) {
		var i = Array(Math.max(0, t));
		e = _(e, n, 1);
		for (var r = 0; t > r; r++) i[r] = e(r);
		return i
	}, v.random = function(t, e) {
		return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
	}, v.now = Date.now || function() {
		return (new Date).getTime()
	};
	var O = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;",
			"`": "&#x60;"
		},
		M = v.invert(O),
		D = function(t) {
			var e = function(e) {
					return t[e]
				},
				n = "(?:" + v.keys(t).join("|") + ")",
				i = RegExp(n),
				r = RegExp(n, "g");
			return function(t) {
				return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t
			}
		};
	v.escape = D(O), v.unescape = D(M), v.result = function(t, e, n) {
		var i = null == t ? void 0 : t[e];
		return void 0 === i && (i = n), v.isFunction(i) ? i.call(t) : i
	};
	var R = 0;
	v.uniqueId = function(t) {
		var e = ++R + "";
		return t ? t + e : e
	}, v.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var N = /(.)^/,
		j = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		I = /\\|'|\r|\n|\u2028|\u2029/g,
		L = function(t) {
			return "\\" + j[t]
		};
	v.template = function(t, e, n) {
		!e && n && (e = n), e = v.defaults({}, e, v.templateSettings);

		var i = RegExp([(e.escape || N).source, (e.interpolate || N).source, (e.evaluate || N).source].join("|") + "|$", "g"),
			r = 0,
			o = "__p+='";
		t.replace(i, function(e, n, i, a, s) {
			return o += t.slice(r, s).replace(I, L), r = s + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), e
		}), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
		try {
			var a = new Function(e.variable || "obj", "_", o)
		} catch (s) {
			throw s.source = o, s
		}
		var l = function(t) {
				return a.call(this, t, v)
			},
			u = e.variable || "obj";
		return l.source = "function(" + u + "){\n" + o + "}", l
	}, v.chain = function(t) {
		var e = v(t);
		return e._chain = !0, e
	};
	var B = function(t, e) {
		return t._chain ? v(e).chain() : e
	};
	v.mixin = function(t) {
		v.each(v.functions(t), function(e) {
			var n = v[e] = t[e];
			v.prototype[e] = function() {
				var t = [this._wrapped];
				return l.apply(t, arguments), B(this, n.apply(v, t))
			}
		})
	}, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
		var e = o[t];
		v.prototype[t] = function() {
			var n = this._wrapped;
			return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], B(this, n)
		}
	}), v.each(["concat", "join", "slice"], function(t) {
		var e = o[t];
		v.prototype[t] = function() {
			return B(this, e.apply(this._wrapped, arguments))
		}
	}), v.prototype.value = function() {
		return this._wrapped
	}, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() {
		return "" + this._wrapped
	}, "function" == typeof define && define.amd && define("underscore", [], function() {
		return v
	})
}.call(this);
/*!
 * VERSION: 1.16.1
 * DATE: 2015-03-13
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
		"use strict";
		_gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) {
				var i = function(t) {
						var e, n = [],
							i = t.length;
						for (e = 0; e !== i; n.push(t[e++]));
						return n
					},
					r = function(t, e, i) {
						n.call(this, t, e, i), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
					},
					o = 1e-10,
					a = n._internals,
					s = a.isSelector,
					l = a.isArray,
					u = r.prototype = n.to({}, .1, {}),
					c = [];
				r.version = "1.16.1", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = n.killTweensOf, r.getTweensOf = n.getTweensOf, r.lagSmoothing = n.lagSmoothing, r.ticker = n.ticker, r.render = n.render, u.invalidate = function() {
					return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
				}, u.updateTo = function(t, e) {
					var i, r = this.ratio,
						o = this.vars.immediateRender || t.immediateRender;
					e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
					for (i in t) this.vars[i] = t[i];
					if (this._initted || o)
						if (e) this._initted = !1, o && this.render(0, !0, !0);
						else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
						var a = this._time;
						this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
					} else if (this._time > 0 || o) {
						this._initted = !1, this._init();
						for (var s, l = 1 / (1 - r), u = this._firstPT; u;) s = u.s + u.c, u.c *= l, u.s = s - u.c, u = u._next
					}
					return this
				}, u.render = function(t, e, n) {
					this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
					var i, r, s, l, u, h, f, d, p = this._dirty ? this.totalDuration() : this._totalDuration,
						m = this._time,
						g = this._totalTime,
						v = this._cycle,
						_ = this._duration,
						y = this._rawPrevTime;
					if (t >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === _ && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === o) && y !== t && (n = !0, y > o && (r = "onReverseComplete")), this._rawPrevTime = d = !e || t || y === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === _ && y > 0) && (r = "onReverseComplete", i = this._reversed), 0 > t && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || n) && (y >= 0 && (n = !0), this._rawPrevTime = d = !e || t || y === t ? t : o)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = _ + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? this._time = _ : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / _, h = this._easeType, f = this._easePower, (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : this._time / _ < .5 ? u / 2 : 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / _)), m === this._time && !n && v === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)));
					if (!this._initted) {
						if (this._init(), !this._initted || this._gc) return;
						if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = y, this._cycle = v, a.lazyTweens.push(this), void(this._lazy = [t, e]);
						this._time && !i ? this.ratio = this._ease.getRatio(this._time / _) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
					this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, n), e || (this._totalTime !== g || i) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || c)), r && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || c), 0 === _ && this._rawPrevTime === o && d !== o && (this._rawPrevTime = 0))
				}, r.to = function(t, e, n) {
					return new r(t, e, n)
				}, r.from = function(t, e, n) {
					return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new r(t, e, n)
				}, r.fromTo = function(t, e, n, i) {
					return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new r(t, e, i)
				}, r.staggerTo = r.allTo = function(t, e, o, a, u, h, f) {
					a = a || 0;
					var d, p, m, g, v = o.delay || 0,
						_ = [],
						y = function() {
							o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), u.apply(f || this, h || c)
						};
					for (l(t) || ("string" == typeof t && (t = n.selector(t) || t), s(t) && (t = i(t))), t = t || [], 0 > a && (t = i(t), t.reverse(), a *= -1), d = t.length - 1, m = 0; d >= m; m++) {
						p = {};
						for (g in o) p[g] = o[g];
						p.delay = v, m === d && u && (p.onComplete = y), _[m] = new r(t[m], e, p), v += a
					}
					return _
				}, r.staggerFrom = r.allFrom = function(t, e, n, i, o, a, s) {
					return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, r.staggerTo(t, e, n, i, o, a, s)
				}, r.staggerFromTo = r.allFromTo = function(t, e, n, i, o, a, s, l) {
					return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, r.staggerTo(t, e, i, o, a, s, l)
				}, r.delayedCall = function(t, e, n, i, o) {
					return new r(e, 0, {
						delay: t,
						onComplete: e,
						onCompleteParams: n,
						onCompleteScope: i,
						onReverseComplete: e,
						onReverseCompleteParams: n,
						onReverseCompleteScope: i,
						immediateRender: !1,
						useFrames: o,
						overwrite: 0
					})
				}, r.set = function(t, e) {
					return new r(t, 0, e)
				}, r.isTweening = function(t) {
					return n.getTweensOf(t, !0).length > 0
				};
				var h = function(t, e) {
						for (var i = [], r = 0, o = t._first; o;) o instanceof n ? i[r++] = o : (e && (i[r++] = o), i = i.concat(h(o, e)), r = i.length), o = o._next;
						return i
					},
					f = r.getAllTweens = function(e) {
						return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
					};
				r.killAll = function(t, n, i, r) {
					null == n && (n = !0), null == i && (i = !0);
					var o, a, s, l = f(0 != r),
						u = l.length,
						c = n && i && r;
					for (s = 0; u > s; s++) a = l[s], (c || a instanceof e || (o = a.target === a.vars.onComplete) && i || n && !o) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
				}, r.killChildTweensOf = function(t, e) {
					if (null != t) {
						var o, u, c, h, f, d = a.tweenLookup;
						if ("string" == typeof t && (t = n.selector(t) || t), s(t) && (t = i(t)), l(t))
							for (h = t.length; --h > -1;) r.killChildTweensOf(t[h], e);
						else {
							o = [];
							for (c in d)
								for (u = d[c].target.parentNode; u;) u === t && (o = o.concat(d[c].tweens)), u = u.parentNode;
							for (f = o.length, h = 0; f > h; h++) e && o[h].totalTime(o[h].totalDuration()), o[h]._enabled(!1, !1)
						}
					}
				};
				var d = function(t, n, i, r) {
					n = n !== !1, i = i !== !1, r = r !== !1;
					for (var o, a, s = f(r), l = n && i && r, u = s.length; --u > -1;) a = s[u], (l || a instanceof e || (o = a.target === a.vars.onComplete) && i || n && !o) && a.paused(t)
				};
				return r.pauseAll = function(t, e, n) {
					d(!0, t, e, n)
				}, r.resumeAll = function(t, e, n) {
					d(!1, t, e, n)
				}, r.globalTimeScale = function(e) {
					var i = t._rootTimeline,
						r = n.ticker.TIME;
					return arguments.length ? (e = e || o, i._startTime = r - (r - i._startTime) * i._timeScale / e, i = t._rootFramesTimeline, r = n.ticker.frame, i._startTime = r - (r - i._startTime) * i._timeScale / e, i._timeScale = t._rootTimeline._timeScale = e, e) : i._timeScale
				}, u.progress = function(t) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
				}, u.totalProgress = function(t) {
					return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
				}, u.TIME = function(t, e) {
					return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
				}, u.duration = function(e) {
					return arguments.length ? t.prototype.duration.call(this, e) : this._duration
				}, u.totalDuration = function(t) {
					return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
				}, u.repeat = function(t) {
					return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
				}, u.repeatDelay = function(t) {
					return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
				}, u.yoyo = function(t) {
					return arguments.length ? (this._yoyo = t, this) : this._yoyo
				}, r
			}, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) {
				var i = function(t) {
						e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
						var n, i, r = this.vars;
						for (i in r) n = r[i], l(n) && -1 !== n.join("").indexOf("{self}") && (r[i] = this._swapSelfInParams(n));
						l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
					},
					r = 1e-10,
					o = n._internals,
					a = i._internals = {},
					s = o.isSelector,
					l = o.isArray,
					u = o.lazyTweens,
					c = o.lazyRender,
					h = [],
					f = _gsScope._gsDefine.globals,
					d = function(t) {
						var e, n = {};
						for (e in t) n[e] = t[e];
						return n
					},
					p = a.pauseCallback = function(t, e, n, i) {
						var o, a = t._timeline,
							s = a._totalTime,
							l = t._startTime,
							u = t._rawPrevTime < 0 || 0 === t._rawPrevTime && a._reversed,
							c = u ? 0 : r,
							f = u ? r : 0;
						if (e || !this._forcingPlayhead) {
							for (a.pause(l), o = t._prev; o && o._startTime === l;) o._rawPrevTime = f, o = o._prev;
							for (o = t._next; o && o._startTime === l;) o._rawPrevTime = c, o = o._next;
							e && e.apply(i || a, n || h), (this._forcingPlayhead || !a._paused) && a.seek(s)
						}
					},
					m = function(t) {
						var e, n = [],
							i = t.length;
						for (e = 0; e !== i; n.push(t[e++]));
						return n
					},
					g = i.prototype = new e;
				return i.version = "1.16.1", g.constructor = i, g.kill()._gc = g._forcingPlayhead = !1, g.to = function(t, e, i, r) {
					var o = i.repeat && f.TweenMax || n;
					return e ? this.add(new o(t, e, i), r) : this.set(t, i, r)
				}, g.from = function(t, e, i, r) {
					return this.add((i.repeat && f.TweenMax || n).from(t, e, i), r)
				}, g.fromTo = function(t, e, i, r, o) {
					var a = r.repeat && f.TweenMax || n;
					return e ? this.add(a.fromTo(t, e, i, r), o) : this.set(t, r, o)
				}, g.staggerTo = function(t, e, r, o, a, l, u, c) {
					var h, f = new i({
						onComplete: l,
						onCompleteParams: u,
						onCompleteScope: c,
						smoothChildTiming: this.smoothChildTiming
					});
					for ("string" == typeof t && (t = n.selector(t) || t), t = t || [], s(t) && (t = m(t)), o = o || 0, 0 > o && (t = m(t), t.reverse(), o *= -1), h = 0; h < t.length; h++) r.startAt && (r.startAt = d(r.startAt)), f.to(t[h], e, d(r), h * o);
					return this.add(f, a)
				}, g.staggerFrom = function(t, e, n, i, r, o, a, s) {
					return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(t, e, n, i, r, o, a, s)
				}, g.staggerFromTo = function(t, e, n, i, r, o, a, s, l) {
					return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, this.staggerTo(t, e, i, r, o, a, s, l)
				}, g.call = function(t, e, i, r) {
					return this.add(n.delayedCall(0, t, e, i), r)
				}, g.set = function(t, e, i) {
					return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new n(t, 0, e), i)
				}, i.exportRoot = function(t, e) {
					t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
					var r, o, a = new i(t),
						s = a._timeline;
					for (null == e && (e = !0), s._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = s._time, r = s._first; r;) o = r._next, e && r instanceof n && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = o;
					return s.add(a, 0), a
				}, g.add = function(r, o, a, s) {
					var u, c, h, f, d, p;
					if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
						if (r instanceof Array || r && r.push && l(r)) {
							for (a = a || "normal", s = s || 0, u = o, c = r.length, h = 0; c > h; h++) l(f = r[h]) && (f = new i({
								tweens: f
							})), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === a ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), u += s;
							return this._uncache(!0)
						}
						if ("string" == typeof r) return this.addLabel(r, o);
						if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
						r = n.delayedCall(0, r)
					}
					if (e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
						for (d = this, p = d.rawTime() > r._startTime; d._timeline;) p && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
					return this
				}, g.remove = function(e) {
					if (e instanceof t) return this._remove(e, !1);
					if (e instanceof Array || e && e.push && l(e)) {
						for (var n = e.length; --n > -1;) this.remove(e[n]);
						return this
					}
					return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
				}, g._remove = function(t, n) {
					e.prototype._remove.call(this, t, n);
					var i = this._last;
					return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
				}, g.append = function(t, e) {
					return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
				}, g.insert = g.insertMultiple = function(t, e, n, i) {
					return this.add(t, e || 0, n, i)
				}, g.appendMultiple = function(t, e, n, i) {
					return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i)
				}, g.addLabel = function(t, e) {
					return this._labels[t] = this._parseTimeOrLabel(e), this
				}, g.addPause = function(t, e, i, r) {
					var o = n.delayedCall(0, p, ["{self}", e, i, r], this);
					return o.data = "isPause", this.add(o, t)
				}, g.removeLabel = function(t) {
					return delete this._labels[t], this
				}, g.getLabelTime = function(t) {
					return null != this._labels[t] ? this._labels[t] : -1
				}, g._parseTimeOrLabel = function(e, n, i, r) {
					var o;
					if (r instanceof t && r.timeline === this) this.remove(r);
					else if (r && (r instanceof Array || r.push && l(r)))
						for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
					if ("string" == typeof n) return this._parseTimeOrLabel(n, i && "number" == typeof e && null == this._labels[n] ? e - this.duration() : 0, i);
					if (n = n || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
					else {
						if (o = e.indexOf("="), -1 === o) return null == this._labels[e] ? i ? this._labels[e] = this.duration() + n : n : this._labels[e] + n;
						n = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, i) : this.duration()
					}
					return Number(e) + n
				}, g.seek = function(t, e) {
					return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
				}, g.stop = function() {
					return this.paused(!0)
				}, g.gotoAndPlay = function(t, e) {
					return this.play(t, e)
				}, g.gotoAndStop = function(t, e) {
					return this.pause(t, e)
				}, g.render = function(t, e, n) {
					this._gc && this._enabled(!0, !1);
					var i, o, a, s, l, f = this._dirty ? this.totalDuration() : this._totalDuration,
						d = this._time,
						p = this._startTime,
						m = this._timeScale,
						g = this._paused;
					if (t >= f) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (o = !0, s = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = f + 1e-4;
					else if (1e-7 > t)
						if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (s = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
						else {
							if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)
								for (i = this._first; i && 0 === i._startTime;) i._duration || (o = !1), i = i._next;
							t = 0, this._initted || (l = !0)
						} else this._totalTime = this._time = this._rawPrevTime = t;
					if (this._time !== d && this._first || n || l) {
						if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h)), this._time >= d)
							for (i = this._first; i && (a = i._next, !this._paused || g);)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = a;
						else
							for (i = this._last; i && (a = i._prev, !this._paused || g);)(i._active || i._startTime <= d && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = a;
						this._onUpdate && (e || (u.length && c(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h))), s && (this._gc || (p === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (o && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || h)))
					}
				}, g._hasPausedChild = function() {
					for (var t = this._first; t;) {
						if (t._paused || t instanceof i && t._hasPausedChild()) return !0;
						t = t._next
					}
					return !1
				}, g.getChildren = function(t, e, i, r) {
					r = r || -9999999999;
					for (var o = [], a = this._first, s = 0; a;) a._startTime < r || (a instanceof n ? e !== !1 && (o[s++] = a) : (i !== !1 && (o[s++] = a), t !== !1 && (o = o.concat(a.getChildren(!0, e, i)), s = o.length))), a = a._next;
					return o
				}, g.getTweensOf = function(t, e) {
					var i, r, o = this._gc,
						a = [],
						s = 0;
					for (o && this._enabled(!0, !0), i = n.getTweensOf(t), r = i.length; --r > -1;)(i[r].timeline === this || e && this._contains(i[r])) && (a[s++] = i[r]);
					return o && this._enabled(!1, !0), a
				}, g.recent = function() {
					return this._recent
				}, g._contains = function(t) {
					for (var e = t.timeline; e;) {
						if (e === this) return !0;
						e = e.timeline
					}
					return !1
				}, g.shiftChildren = function(t, e, n) {
					n = n || 0;
					for (var i, r = this._first, o = this._labels; r;) r._startTime >= n && (r._startTime += t), r = r._next;
					if (e)
						for (i in o) o[i] >= n && (o[i] += t);
					return this._uncache(!0)
				}, g._kill = function(t, e) {
					if (!t && !e) return this._enabled(!1, !1);
					for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = n.length, r = !1; --i > -1;) n[i]._kill(t, e) && (r = !0);
					return r
				}, g.clear = function(t) {
					var e = this.getChildren(!1, !0, !0),
						n = e.length;
					for (this._time = this._totalTime = 0; --n > -1;) e[n]._enabled(!1, !1);
					return t !== !1 && (this._labels = {}), this._uncache(!0)
				}, g.invalidate = function() {
					for (var e = this._first; e;) e.invalidate(), e = e._next;
					return t.prototype.invalidate.call(this)
				}, g._enabled = function(t, n) {
					if (t === this._gc)
						for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
					return e.prototype._enabled.call(this, t, n)
				}, g.totalTime = function(e, n, i) {
					this._forcingPlayhead = !0;
					var r = t.prototype.totalTime.apply(this, arguments);
					return this._forcingPlayhead = !1, r
				}, g.duration = function(t) {
					return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
				}, g.totalDuration = function(t) {
					if (!arguments.length) {
						if (this._dirty) {
							for (var e, n, i = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, r._startTime < 0 && !r._paused && (i -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), n = r._startTime + r._totalDuration / r._timeScale, n > i && (i = n), r = e;
							this._duration = this._totalDuration = i, this._dirty = !1
						}
						return this._totalDuration
					}
					return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
				}, g.paused = function(e) {
					if (!e)
						for (var n = this._first, i = this._time; n;) n._startTime === i && "isPause" === n.data && (n._rawPrevTime = 0), n = n._next;
					return t.prototype.paused.apply(this, arguments)
				}, g.usesFrames = function() {
					for (var e = this._timeline; e._timeline;) e = e._timeline;
					return e === t._rootFramesTimeline
				}, g.rawTime = function() {
					return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
				}, i
			}, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, n) {
				var i = function(e) {
						t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
					},
					r = 1e-10,
					o = [],
					a = e._internals,
					s = a.lazyTweens,
					l = a.lazyRender,
					u = new n(null, null, 1, 0),
					c = i.prototype = new t;
				return c.constructor = i, c.kill()._gc = !1, i.version = "1.16.1", c.invalidate = function() {
					return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
				}, c.addCallback = function(t, n, i, r) {
					return this.add(e.delayedCall(0, t, i, r), n)
				}, c.removeCallback = function(t, e) {
					if (t)
						if (null == e) this._kill(null, t);
						else
							for (var n = this.getTweensOf(t, !1), i = n.length, r = this._parseTimeOrLabel(e); --i > -1;) n[i]._startTime === r && n[i]._enabled(!1, !1);
					return this
				}, c.removePause = function(e) {
					return this.removeCallback(t._internals.pauseCallback, e)
				}, c.tweenTo = function(t, n) {
					n = n || {};
					var i, r, a, s = {
						ease: u,
						useFrames: this.usesFrames(),
						immediateRender: !1
					};
					for (r in n) s[r] = n[r];
					return s.TIME = this._parseTimeOrLabel(t), i = Math.abs(Number(s.TIME) - this._time) / this._timeScale || .001, a = new e(this, i, s), s.onStart = function() {
						a.target.paused(!0), a.vars.TIME !== a.target.TIME() && i === a.duration() && a.duration(Math.abs(a.vars.TIME - a.target.TIME()) / a.target._timeScale), n.onStart && n.onStart.apply(n.onStartScope || a, n.onStartParams || o)
					}, a
				}, c.tweenFromTo = function(t, e, n) {
					n = n || {}, t = this._parseTimeOrLabel(t), n.startAt = {
						onComplete: this.seek,
						onCompleteParams: [t],
						onCompleteScope: this
					}, n.immediateRender = n.immediateRender !== !1;
					var i = this.tweenTo(e, n);
					return i.duration(Math.abs(i.vars.TIME - t) / this._timeScale || .001)
				}, c.render = function(t, e, n) {
					this._gc && this._enabled(!0, !1);
					var i, a, u, c, h, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
						p = this._duration,
						m = this._time,
						g = this._totalTime,
						v = this._startTime,
						_ = this._timeScale,
						y = this._rawPrevTime,
						x = this._paused,
						b = this._cycle;
					if (t >= d) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, c = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (h = !0, y > r && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4);
					else if (1e-7 > t)
						if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === p && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (c = "onReverseComplete", a = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = a = !0, c = "onReverseComplete") : y >= 0 && this._first && (h = !0), this._rawPrevTime = t;
						else {
							if (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : r, 0 === t && a)
								for (i = this._first; i && 0 === i._startTime;) i._duration || (a = !1), i = i._next;
							t = 0, this._initted || (h = !0)
						} else 0 === p && 0 > y && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (f = p + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time));
					if (this._cycle !== b && !this._locked) {
						var w = this._yoyo && 0 !== (1 & b),
							T = w === (this._yoyo && 0 !== (1 & this._cycle)),
							S = this._totalTime,
							C = this._cycle,
							k = this._rawPrevTime,
							E = this._time;
						if (this._totalTime = b * p, this._cycle < b ? w = !w : this._totalTime += p, this._time = m, this._rawPrevTime = 0 === p ? y - 1e-4 : y, this._cycle = b, this._locked = !0, m = w ? 0 : p, this.render(m, e, 0 === p), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o), T && (m = w ? p + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
						this._time = E, this._totalTime = S, this._cycle = C, this._rawPrevTime = k
					}
					if (!(this._time !== m && this._first || n || h)) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)));
					if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)), this._time >= m)
						for (i = this._first; i && (u = i._next, !this._paused || x);)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = u;
					else
						for (i = this._last; i && (u = i._prev, !this._paused || x);)(i._active || i._startTime <= m && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = u;
					this._onUpdate && (e || (s.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o))), c && (this._locked || this._gc || (v === this._startTime || _ !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (a && (s.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || o)))
				}, c.getActive = function(t, e, n) {
					null == t && (t = !0), null == e && (e = !0), null == n && (n = !1);
					var i, r, o = [],
						a = this.getChildren(t, e, n),
						s = 0,
						l = a.length;
					for (i = 0; l > i; i++) r = a[i], r.isActive() && (o[s++] = r);
					return o
				}, c.getLabelAfter = function(t) {
					t || 0 !== t && (t = this._time);
					var e, n = this.getLabelsArray(),
						i = n.length;
					for (e = 0; i > e; e++)
						if (n[e].TIME > t) return n[e].name;
					return null
				}, c.getLabelBefore = function(t) {
					null == t && (t = this._time);
					for (var e = this.getLabelsArray(), n = e.length; --n > -1;)
						if (e[n].TIME < t) return e[n].name;
					return null
				}, c.getLabelsArray = function() {
					var t, e = [],
						n = 0;
					for (t in this._labels) e[n++] = {
						TIME: this._labels[t],
						name: t
					};
					return e.sort(function(t, e) {
						return t.TIME - e.TIME
					}), e
				}, c.progress = function(t, e) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
				}, c.totalProgress = function(t, e) {
					return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
				}, c.totalDuration = function(e) {
					return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
				}, c.TIME = function(t, e) {
					return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
				}, c.repeat = function(t) {
					return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
				}, c.repeatDelay = function(t) {
					return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
				}, c.yoyo = function(t) {
					return arguments.length ? (this._yoyo = t, this) : this._yoyo
				}, c.currentLabel = function(t) {
					return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
				}, i
			}, !0),
			function() {
				var t = 180 / Math.PI,
					e = [],
					n = [],
					i = [],
					r = {},
					o = _gsScope._gsDefine.globals,
					a = function(t, e, n, i) {
						this.a = t, this.b = e, this.c = n, this.d = i, this.da = i - t, this.ca = n - t, this.ba = e - t
					},
					s = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
					l = function(t, e, n, i) {
						var r = {
								a: t
							},
							o = {},
							a = {},
							s = {
								c: i
							},
							l = (t + e) / 2,
							u = (e + n) / 2,
							c = (n + i) / 2,
							h = (l + u) / 2,
							f = (u + c) / 2,
							d = (f - h) / 8;
						return r.b = l + (t - l) / 4, o.b = h + d, r.c = o.a = (r.b + o.b) / 2, o.c = a.a = (h + f) / 2, a.b = f - d, s.b = c + (i - c) / 4, a.c = s.a = (a.b + s.b) / 2, [r, o, a, s]
					},
					u = function(t, r, o, a, s) {
						var u, c, h, f, d, p, m, g, v, _, y, x, b, w = t.length - 1,
							T = 0,
							S = t[0].a;
						for (u = 0; w > u; u++) d = t[T], c = d.a, h = d.d, f = t[T + 1].d, s ? (y = e[u], x = n[u], b = (x + y) * r * .25 / (a ? .5 : i[u] || .5), p = h - (h - c) * (a ? .5 * r : 0 !== y ? b / y : 0), m = h + (f - h) * (a ? .5 * r : 0 !== x ? b / x : 0), g = h - (p + ((m - p) * (3 * y / (y + x) + .5) / 4 || 0))) : (p = h - (h - c) * r * .5, m = h + (f - h) * r * .5, g = h - (p + m) / 2), p += g, m += g, d.c = v = p, d.b = 0 !== u ? S : S = d.a + .6 * (d.c - d.a), d.da = h - c, d.ca = v - c, d.ba = S - c, o ? (_ = l(c, S, v, h), t.splice(T, 1, _[0], _[1], _[2], _[3]), T += 4) : T++, S = m;
						d = t[T], d.b = S, d.c = S + .4 * (d.d - S), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = S - d.a, o && (_ = l(d.a, S, d.c, d.d), t.splice(T, 1, _[0], _[1], _[2], _[3]))
					},
					c = function(t, i, r, o) {
						var s, l, u, c, h, f, d = [];
						if (o)
							for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof(f = t[l][i]) && "=" === f.charAt(1) && (t[l][i] = o[i] + Number(f.charAt(0) + f.substr(2)));
						if (s = t.length - 2, 0 > s) return d[0] = new a(t[0][i], 0, 0, t[-1 > s ? 0 : 1][i]), d;
						for (l = 0; s > l; l++) u = t[l][i], c = t[l + 1][i], d[l] = new a(u, 0, 0, c), r && (h = t[l + 2][i], e[l] = (e[l] || 0) + (c - u) * (c - u), n[l] = (n[l] || 0) + (h - c) * (h - c));
						return d[l] = new a(t[l][i], 0, 0, t[l + 1][i]), d
					},
					h = function(t, o, a, l, h, f) {
						var d, p, m, g, v, _, y, x, b = {},
							w = [],
							T = f || t[0];
						h = "string" == typeof h ? "," + h + "," : s, null == o && (o = 1);
						for (p in t[0]) w.push(p);
						if (t.length > 1) {
							for (x = t[t.length - 1], y = !0, d = w.length; --d > -1;)
								if (p = w[d], Math.abs(T[p] - x[p]) > .05) {
									y = !1;
									break
								}
							y && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
						}
						for (e.length = n.length = i.length = 0, d = w.length; --d > -1;) p = w[d], r[p] = -1 !== h.indexOf("," + p + ","), b[p] = c(t, p, r[p], f);
						for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), n[d] = Math.sqrt(n[d]);
						if (!l) {
							for (d = w.length; --d > -1;)
								if (r[p])
									for (m = b[w[d]], _ = m.length - 1, g = 0; _ > g; g++) v = m[g + 1].da / n[g] + m[g].da / e[g], i[g] = (i[g] || 0) + v * v;
							for (d = i.length; --d > -1;) i[d] = Math.sqrt(i[d])
						}
						for (d = w.length, g = a ? 4 : 1; --d > -1;) p = w[d], m = b[p], u(m, o, a, l, r[p]), y && (m.splice(0, g), m.splice(m.length - g, g));
						return b
					},
					f = function(t, e, n) {
						e = e || "soft";
						var i, r, o, s, l, u, c, h, f, d, p, m = {},
							g = "cubic" === e ? 3 : 2,
							v = "soft" === e,
							_ = [];
						if (v && n && (t = [n].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
						for (f in t[0]) _.push(f);
						for (u = _.length; --u > -1;) {
							for (f = _[u], m[f] = l = [], d = 0, h = t.length, c = 0; h > c; c++) i = null == n ? t[c][f] : "string" == typeof(p = t[c][f]) && "=" === p.charAt(1) ? n[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), v && c > 1 && h - 1 > c && (l[d++] = (i + l[d - 2]) / 2), l[d++] = i;
							for (h = d - g + 1, d = 0, c = 0; h > c; c += g) i = l[c], r = l[c + 1], o = l[c + 2], s = 2 === g ? 0 : l[c + 3], l[d++] = p = 3 === g ? new a(i, r, o, s) : new a(i, (2 * r + i) / 3, (2 * r + o) / 3, o);
							l.length = d
						}
						return m
					},
					d = function(t, e, n) {
						for (var i, r, o, a, s, l, u, c, h, f, d, p = 1 / n, m = t.length; --m > -1;)
							for (f = t[m], o = f.a, a = f.d - o, s = f.c - o, l = f.b - o, i = r = 0, c = 1; n >= c; c++) u = p * c, h = 1 - u, i = r - (r = (u * u * a + 3 * h * (u * s + h * l)) * u), d = m * n + c - 1, e[d] = (e[d] || 0) + i * i
					},
					p = function(t, e) {
						e = e >> 0 || 6;
						var n, i, r, o, a = [],
							s = [],
							l = 0,
							u = 0,
							c = e - 1,
							h = [],
							f = [];
						for (n in t) d(t[n], a, e);
						for (r = a.length, i = 0; r > i; i++) l += Math.sqrt(a[i]), o = i % e, f[o] = l, o === c && (u += l, o = i / e >> 0, h[o] = f, s[o] = u, l = 0, f = []);
						return {
							length: u,
							lengths: s,
							segments: h
						}
					},
					m = _gsScope._gsDefine.plugin({
						propName: "bezier",
						priority: -1,
						version: "1.3.4",
						API: 2,
						global: !0,
						init: function(t, e, n) {
							this._target = t, e instanceof Array && (e = {
								values: e
							}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
							var i, r, o, a, s, l = e.values || [],
								u = {},
								c = l[0],
								d = e.autoRotate || n.vars.orientToBezier;
							this._autoRotate = d ? d instanceof Array ? d : [
								["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]
							] : null;
							for (i in c) this._props.push(i);
							for (o = this._props.length; --o > -1;) i = this._props[o], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof t[i], u[i] = r ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]), s || u[i] !== l[0][i] && (s = u);
							if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, s) : f(l, e.type, u), this._segCount = this._beziers[i].length, this._timeRes) {
								var m = p(this._beziers, this._timeRes);
								this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
							}
							if (d = this._autoRotate)
								for (this._initialRotations = [],
									d[0] instanceof Array || (this._autoRotate = d = [d]), o = d.length; --o > -1;) {
									for (a = 0; 3 > a; a++) i = d[o][a], this._func[i] = "function" == typeof t[i] ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)] : !1;
									i = d[o][2], this._initialRotations[o] = this._func[i] ? this._func[i].call(this._target) : this._target[i]
								}
							return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
						},
						set: function(e) {
							var n, i, r, o, a, s, l, u, c, h, f = this._segCount,
								d = this._func,
								p = this._target,
								m = e !== this._startRatio;
							if (this._timeRes) {
								if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
									for (u = f - 1; u > r && (this._l2 = c[++r]) <= e;);
									this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
								} else if (e < this._l1 && r > 0) {
									for (; r > 0 && (this._l1 = c[--r]) >= e;);
									0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
								}
								if (n = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) {
									for (u = h.length - 1; u > r && (this._s2 = h[++r]) <= e;);
									this._s1 = h[r - 1], this._si = r
								} else if (e < this._s1 && r > 0) {
									for (; r > 0 && (this._s1 = h[--r]) >= e;);
									0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
								}
								s = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
							} else n = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, s = (e - n * (1 / f)) * f;
							for (i = 1 - s, r = this._props.length; --r > -1;) o = this._props[r], a = this._beziers[o][n], l = (s * s * a.da + 3 * i * (s * a.ca + i * a.ba)) * s + a.a, this._round[o] && (l = Math.round(l)), d[o] ? p[o](l) : p[o] = l;
							if (this._autoRotate) {
								var g, v, _, y, x, b, w, T = this._autoRotate;
								for (r = T.length; --r > -1;) o = T[r][2], b = T[r][3] || 0, w = T[r][4] === !0 ? 1 : t, a = this._beziers[T[r][0]], g = this._beziers[T[r][1]], a && g && (a = a[n], g = g[n], v = a.a + (a.b - a.a) * s, y = a.b + (a.c - a.b) * s, v += (y - v) * s, y += (a.c + (a.d - a.c) * s - y) * s, _ = g.a + (g.b - g.a) * s, x = g.b + (g.c - g.b) * s, _ += (x - _) * s, x += (g.c + (g.d - g.c) * s - x) * s, l = m ? Math.atan2(x - _, y - v) * w + b : this._initialRotations[r], d[o] ? p[o](l) : p[o] = l)
							}
						}
					}),
					g = m.prototype;
				m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, n) {
					return new a(t, (2 * e + t) / 3, (2 * e + n) / 3, n)
				}, m._cssRegister = function() {
					var t = o.CSSPlugin;
					if (t) {
						var e = t._internals,
							n = e._parseToProxy,
							i = e._setPluginRatio,
							r = e.CSSPropTween;
						e._registerComplexSpecialProp("bezier", {
							parser: function(t, e, o, a, s, l) {
								e instanceof Array && (e = {
									values: e
								}), l = new m;
								var u, c, h, f = e.values,
									d = f.length - 1,
									p = [],
									g = {};
								if (0 > d) return s;
								for (u = 0; d >= u; u++) h = n(t, f[u], a, s, l, d !== u), p[u] = h.end;
								for (c in e) g[c] = e[c];
								return g.values = p, s = new r(t, "bezier", 0, 0, h.pt, 2), s.data = h, s.plugin = l, s.setRatio = i, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [
									["left", "top", "rotation", u, !1]
								] : null != h.end.x ? [
									["x", "y", "rotation", u, !1]
								] : !1), g.autoRotate && (a._transform || a._enableTransforms(!1), h.autoRotate = a._target._gsTransform), l._onInitTween(h.proxy, g, a._tween), s
							}
						})
					}
				}, g._roundProps = function(t, e) {
					for (var n = this._overwriteProps, i = n.length; --i > -1;)(t[n[i]] || t.bezier || t.bezierThrough) && (this._round[n[i]] = e)
				}, g._kill = function(t) {
					var e, n, i = this._props;
					for (e in this._beziers)
						if (e in t)
							for (delete this._beziers[e], delete this._func[e], n = i.length; --n > -1;) i[n] === e && i.splice(n, 1);
					return this._super._kill.call(this, t)
				}
			}(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
				var n, i, r, o, a = function() {
						t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
					},
					s = _gsScope._gsDefine.globals,
					l = {},
					u = a.prototype = new t("css");
				u.constructor = a, a.version = "1.16.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", u = "px", a.suffixMap = {
					top: u,
					right: u,
					bottom: u,
					left: u,
					width: u,
					height: u,
					fontSize: u,
					padding: u,
					margin: u,
					perspective: u,
					lineHeight: ""
				};
				var c, h, f, d, p, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
					v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
					_ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
					y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
					x = /(?:\d|\-|\+|=|#|\.)*/g,
					b = /opacity *= *([^)]*)/i,
					w = /opacity:([^;]*)/i,
					T = /alpha\(opacity *=.+?\)/i,
					S = /^(rgb|hsl)/,
					C = /([A-Z])/g,
					k = /-([a-z])/gi,
					E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
					P = function(t, e) {
						return e.toUpperCase()
					},
					A = /(?:Left|Right|Width)/i,
					O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
					M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
					D = /,(?=[^\)]*(?:\(|$))/gi,
					R = Math.PI / 180,
					N = 180 / Math.PI,
					j = {},
					I = document,
					L = function(t) {
						return I.createElementNS ? I.createElementNS("http://www.w3.org/1999/xhtml", t) : I.createElement(t)
					},
					B = L("div"),
					z = L("img"),
					F = a._internals = {
						_specialProps: l
					},
					q = navigator.userAgent,
					H = function() {
						var t = q.indexOf("Android"),
							e = L("a");
						return f = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || Number(q.substr(t + 8, 1)) > 3), p = f && Number(q.substr(q.indexOf("Version/") + 8, 1)) < 6, d = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
					}(),
					W = function(t) {
						return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
					},
					X = function(t) {
						window.console && console.log(t)
					},
					U = "",
					Y = "",
					$ = function(t, e) {
						e = e || B;
						var n, i, r = e.style;
						if (void 0 !== r[t]) return t;
						for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + t];);
						return i >= 0 ? (Y = 3 === i ? "ms" : n[i], U = "-" + Y.toLowerCase() + "-", Y + t) : null
					},
					V = I.defaultView ? I.defaultView.getComputedStyle : function() {},
					Q = a.getStyle = function(t, e, n, i, r) {
						var o;
						return H || "opacity" !== e ? (!i && t.style[e] ? o = t.style[e] : (n = n || V(t)) ? o = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : W(t)
					},
					G = F.convertToPixels = function(t, n, i, r, o) {
						if ("px" === r || !r) return i;
						if ("auto" === r || !i) return 0;
						var s, l, u, c = A.test(n),
							h = t,
							f = B.style,
							d = 0 > i;
						if (d && (i = -i), "%" === r && -1 !== n.indexOf("border")) s = i / 100 * (c ? t.clientWidth : t.clientHeight);
						else {
							if (f.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && h.appendChild) f[c ? "borderLeftWidth" : "borderTopWidth"] = i + r;
							else {
								if (h = t.parentNode || I.body, l = h._gsCache, u = e.ticker.frame, l && c && l.TIME === u) return l.width * i / 100;
								f[c ? "width" : "height"] = i + r
							}
							h.appendChild(B), s = parseFloat(B[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(B), c && "%" === r && a.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.TIME = u, l.width = s / i * 100), 0 !== s || o || (s = G(t, n, i, r, !0))
						}
						return d ? -s : s
					},
					Z = F.calculateOffset = function(t, e, n) {
						if ("absolute" !== Q(t, "position", n)) return 0;
						var i = "left" === e ? "Left" : "Top",
							r = Q(t, "margin" + i, n);
						return t["offset" + i] - (G(t, e, parseFloat(r), r.replace(x, "")) || 0)
					},
					J = function(t, e) {
						var n, i, r, o = {};
						if (e = e || V(t, null))
							if (n = e.length)
								for (; --n > -1;) r = e[n], (-1 === r.indexOf("-transform") || Tt === r) && (o[r.replace(k, P)] = e.getPropertyValue(r));
							else
								for (n in e)(-1 === n.indexOf("Transform") || wt === n) && (o[n] = e[n]);
						else if (e = t.currentStyle || t.style)
							for (n in e) "string" == typeof n && void 0 === o[n] && (o[n.replace(k, P)] = e[n]);
						return H || (o.opacity = W(t)), i = Dt(t, e, !1), o.rotation = i.rotation, o.skewX = i.skewX, o.scaleX = i.scaleX, o.scaleY = i.scaleY, o.x = i.x, o.y = i.y, Ct && (o.z = i.z, o.rotationX = i.rotationX, o.rotationY = i.rotationY, o.scaleZ = i.scaleZ), o.filters && delete o.filters, o
					},
					K = function(t, e, n, i, r) {
						var o, a, s, l = {},
							u = t.style;
						for (a in n) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (o = n[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[a] = "auto" !== o || "left" !== a && "top" !== a ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[a] || "" === e[a].replace(y, "") ? o : 0 : Z(t, a), void 0 !== u[a] && (s = new dt(u, a, u[a], s)));
						if (i)
							for (a in i) "className" !== a && (l[a] = i[a]);
						return {
							difs: l,
							firstMPT: s
						}
					},
					tt = {
						width: ["Left", "Right"],
						height: ["Top", "Bottom"]
					},
					et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
					nt = function(t, e, n) {
						var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
							r = tt[e],
							o = r.length;
						for (n = n || V(t, null); --o > -1;) i -= parseFloat(Q(t, "padding" + r[o], n, !0)) || 0, i -= parseFloat(Q(t, "border" + r[o] + "Width", n, !0)) || 0;
						return i
					},
					it = function(t, e) {
						(null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
						var n = t.split(" "),
							i = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
							r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
						return null == r ? r = "center" === i ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), t = i + " " + r + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== i.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === i.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(i.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
					},
					rt = function(t, e) {
						return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
					},
					ot = function(t, e) {
						return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
					},
					at = function(t, e, n, i) {
						var r, o, a, s, l, u = 1e-6;
						return null == t ? s = e : "number" == typeof t ? s = t : (r = 360, o = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e), o.length && (i && (i[n] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), s = e + a), u > s && s > -u && (s = 0), s
					},
					st = {
						aqua: [0, 255, 255],
						lime: [0, 255, 0],
						silver: [192, 192, 192],
						black: [0, 0, 0],
						maroon: [128, 0, 0],
						teal: [0, 128, 128],
						blue: [0, 0, 255],
						navy: [0, 0, 128],
						white: [255, 255, 255],
						fuchsia: [255, 0, 255],
						olive: [128, 128, 0],
						yellow: [255, 255, 0],
						orange: [255, 165, 0],
						gray: [128, 128, 128],
						purple: [128, 0, 128],
						green: [0, 128, 0],
						red: [255, 0, 0],
						pink: [255, 192, 203],
						cyan: [0, 255, 255],
						transparent: [255, 255, 255, 0]
					},
					lt = function(t, e, n) {
						return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (n - e) * t * 6 : .5 > t ? n : 2 > 3 * t ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
					},
					ut = a.parseColor = function(t) {
						var e, n, i, r, o, a;
						return t && "" !== t ? "number" == typeof t ? [t >> 16, t >> 8 & 255, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), st[t] ? st[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), n = t.charAt(2), i = t.charAt(3), t = "#" + e + e + n + n + i + i), t = parseInt(t.substr(1), 16), [t >> 16, t >> 8 & 255, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), r = Number(t[0]) % 360 / 360, o = Number(t[1]) / 100, a = Number(t[2]) / 100, n = .5 >= a ? a * (o + 1) : a + o - a * o, e = 2 * a - n, t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(r + 1 / 3, e, n), t[1] = lt(r, e, n), t[2] = lt(r - 1 / 3, e, n), t) : (t = t.match(g) || st.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : st.black
					},
					ct = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
				for (u in st) ct += "|" + u + "\\b";
				ct = new RegExp(ct + ")", "gi");
				var ht = function(t, e, n, i) {
						if (null == t) return function(t) {
							return t
						};
						var r, o = e ? (t.match(ct) || [""])[0] : "",
							a = t.split(o).join("").match(_) || [],
							s = t.substr(0, t.indexOf(a[0])),
							l = ")" === t.charAt(t.length - 1) ? ")" : "",
							u = -1 !== t.indexOf(" ") ? " " : ",",
							c = a.length,
							h = c > 0 ? a[0].replace(g, "") : "";
						return c ? r = e ? function(t) {
							var e, f, d, p;
							if ("number" == typeof t) t += h;
							else if (i && D.test(t)) {
								for (p = t.replace(D, "|").split("|"), d = 0; d < p.length; d++) p[d] = r(p[d]);
								return p.join(",")
							}
							if (e = (t.match(ct) || [o])[0], f = t.split(e).join("").match(_) || [], d = f.length, c > d--)
								for (; ++d < c;) f[d] = n ? f[(d - 1) / 2 | 0] : a[d];
							return s + f.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
						} : function(t) {
							var e, o, f;
							if ("number" == typeof t) t += h;
							else if (i && D.test(t)) {
								for (o = t.replace(D, "|").split("|"), f = 0; f < o.length; f++) o[f] = r(o[f]);
								return o.join(",")
							}
							if (e = t.match(_) || [], f = e.length, c > f--)
								for (; ++f < c;) e[f] = n ? e[(f - 1) / 2 | 0] : a[f];
							return s + e.join(u) + l
						} : function(t) {
							return t
						}
					},
					ft = function(t) {
						return t = t.split(","),
							function(e, n, i, r, o, a, s) {
								var l, u = (n + "").split(" ");
								for (s = {}, l = 0; 4 > l; l++) s[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
								return r.parse(e, s, o, a)
							}
					},
					dt = (F._setPluginRatio = function(t) {
						this.plugin.setRatio(t);
						for (var e, n, i, r, o = this.data, a = o.proxy, s = o.firstMPT, l = 1e-6; s;) e = a[s.v], s.r ? e = Math.round(e) : l > e && e > -l && (e = 0), s.t[s.p] = e, s = s._next;
						if (o.autoRotate && (o.autoRotate.rotation = a.rotation), 1 === t)
							for (s = o.firstMPT; s;) {
								if (n = s.t, n.type) {
									if (1 === n.type) {
										for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
										n.e = r
									}
								} else n.e = n.s + n.xs0;
								s = s._next
							}
					}, function(t, e, n, i, r) {
						this.t = t, this.p = e, this.v = n, this.r = r, i && (i._prev = this, this._next = i)
					}),
					pt = (F._parseToProxy = function(t, e, n, i, r, o) {
						var a, s, l, u, c, h = i,
							f = {},
							d = {},
							p = n._transform,
							m = j;
						for (n._transform = null, j = e, i = c = n.parse(t, e, i, r), j = m, o && (n._transform = p, h && (h._prev = null, h._prev && (h._prev._next = null))); i && i !== h;) {
							if (i.type <= 1 && (s = i.p, d[s] = i.s + i.c, f[s] = i.s, o || (u = new dt(i, "s", s, u, i.r), i.c = 0), 1 === i.type))
								for (a = i.l; --a > 0;) l = "xn" + a, s = i.p + "_" + l, d[s] = i.data[l], f[s] = i[l], o || (u = new dt(i, l, s, u, i.rxp[l]));
							i = i._next
						}
						return {
							proxy: f,
							end: d,
							firstMPT: u,
							pt: c
						}
					}, F.CSSPropTween = function(t, e, i, r, a, s, l, u, c, h, f) {
						this.t = t, this.p = e, this.s = i, this.c = r, this.n = l || e, t instanceof pt || o.push(this.n), this.r = u, this.type = s || 0, c && (this.pr = c, n = !0), this.b = void 0 === h ? i : h, this.e = void 0 === f ? i + r : f, a && (this._next = a, a._prev = this)
					}),
					mt = a.parseComplex = function(t, e, n, i, r, o, a, s, l, u) {
						n = n || o || "", a = new pt(t, e, 0, 0, a, u ? 2 : 1, null, !1, s, n, i), i += "";
						var h, f, d, p, m, _, y, x, b, w, T, C, k = n.split(", ").join(",").split(" "),
							E = i.split(", ").join(",").split(" "),
							P = k.length,
							A = c !== !1;
						for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (k = k.join(" ").replace(D, ", ").split(" "), E = E.join(" ").replace(D, ", ").split(" "), P = k.length), P !== E.length && (k = (o || "").split(" "), P = k.length), a.plugin = l, a.setRatio = u, h = 0; P > h; h++)
							if (p = k[h], m = E[h], x = parseFloat(p), x || 0 === x) a.appendXtra("", x, rt(m, x), m.replace(v, ""), A && -1 !== m.indexOf("px"), !0);
							else if (r && ("#" === p.charAt(0) || st[p] || S.test(p))) C = "," === m.charAt(m.length - 1) ? ")," : ")", p = ut(p), m = ut(m), b = p.length + m.length > 6, b && !H && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(E[h]).join("transparent")) : (H || (b = !1), a.appendXtra(b ? "rgba(" : "rgb(", p[0], m[0] - p[0], ",", !0, !0).appendXtra("", p[1], m[1] - p[1], ",", !0).appendXtra("", p[2], m[2] - p[2], b ? "," : C, !0), b && (p = p.length < 4 ? 1 : p[3], a.appendXtra("", p, (m.length < 4 ? 1 : m[3]) - p, C, !1)));
						else if (_ = p.match(g)) {
							if (y = m.match(v), !y || y.length !== _.length) return a;
							for (d = 0, f = 0; f < _.length; f++) T = _[f], w = p.indexOf(T, d), a.appendXtra(p.substr(d, w - d), Number(T), rt(y[f], T), "", A && "px" === p.substr(w + T.length, 2), 0 === f), d = w + T.length;
							a["xs" + a.l] += p.substr(d)
						} else a["xs" + a.l] += a.l ? " " + p : p;
						if (-1 !== i.indexOf("=") && a.data) {
							for (C = a.xs0 + a.data.s, h = 1; h < a.l; h++) C += a["xs" + h] + a.data["xn" + h];
							a.e = C + a["xs" + h]
						}
						return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
					},
					gt = 9;
				for (u = pt.prototype, u.l = u.pr = 0; --gt > 0;) u["xn" + gt] = 0, u["xs" + gt] = "";
				u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, n, i, r, o) {
					var a = this,
						s = a.l;
					return a["xs" + s] += o && s ? " " + t : t || "", n || 0 === s || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = i || "", s > 0 ? (a.data["xn" + s] = e + n, a.rxp["xn" + s] = r, a["xn" + s] = e, a.plugin || (a.xfirst = new pt(a, "xn" + s, e, n, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
						s: e + n
					}, a.rxp = {}, a.s = e, a.c = n, a.r = r, a)) : (a["xs" + s] += e + (i || ""), a)
				};
				var vt = function(t, e) {
						e = e || {}, this.p = e.prefix ? $(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ht(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
					},
					_t = F._registerComplexSpecialProp = function(t, e, n) {
						"object" != typeof e && (e = {
							parser: n
						});
						var i, r, o = t.split(","),
							a = e.defaultValue;
						for (n = n || [a], i = 0; i < o.length; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = n[i] || a, r = new vt(o[i], e)
					},
					yt = function(t) {
						if (!l[t]) {
							var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
							_t(t, {
								parser: function(t, n, i, r, o, a, u) {
									var c = s.com.greensock.plugins[e];
									return c ? (c._cssRegister(), l[i].parse(t, n, i, r, o, a, u)) : (X("Error: " + e + " js file not loaded."), o)
								}
							})
						}
					};
				u = vt.prototype, u.parseComplex = function(t, e, n, i, r, o) {
					var a, s, l, u, c, h, f = this.keyword;
					if (this.multi && (D.test(n) || D.test(e) ? (s = e.replace(D, "|").split("|"), l = n.replace(D, "|").split("|")) : f && (s = [e], l = [n])), l) {
						for (u = l.length > s.length ? l.length : s.length, a = 0; u > a; a++) e = s[a] = s[a] || this.dflt, n = l[a] = l[a] || this.dflt, f && (c = e.indexOf(f), h = n.indexOf(f), c !== h && (-1 === h ? s[a] = s[a].split(f).join("") : -1 === c && (s[a] += " " + f)));
						e = s.join(", "), n = l.join(", ")
					}
					return mt(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, o)
				}, u.parse = function(t, e, n, i, o, a, s) {
					return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), o, a)
				}, a.registerSpecialProp = function(t, e, n) {
					_t(t, {
						parser: function(t, i, r, o, a, s, l) {
							var u = new pt(t, r, 0, 0, a, 2, r, !1, n);
							return u.plugin = s, u.setRatio = e(t, i, o._tween, r), u
						},
						priority: n
					})
				}, a.useSVGTransformAttr = f;
				var xt, bt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
					wt = $("transform"),
					Tt = U + "transform",
					St = $("transformOrigin"),
					Ct = null !== $("perspective"),
					kt = F.Transform = function() {
						this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Ct ? a.defaultForce3D || "auto" : !1
					},
					Et = window.SVGElement,
					Pt = function(t, e, n) {
						var i, r = I.createElementNS("http://www.w3.org/2000/svg", t),
							o = /([a-z])([A-Z])/g;
						for (i in n) r.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), n[i]);
						return e.appendChild(r), r
					},
					At = I.documentElement,
					Ot = function() {
						var t, e, n, i = m || /Android/i.test(q) && !window.chrome;
						return I.createElementNS && !i && (t = Pt("svg", At), e = Pt("rect", t, {
							width: 100,
							height: 50,
							x: 100
						}), n = e.getBoundingClientRect().width, e.style[St] = "50% 50%", e.style[wt] = "scaleX(0.5)", i = n === e.getBoundingClientRect().width && !(d && Ct), At.removeChild(t)), i
					}(),
					Mt = function(t, e, n, i) {
						var r, o;
						i && (o = i.split(" ")).length || (r = t.getBBox(), e = it(e).split(" "), o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * r.width : parseFloat(e[0])) + r.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * r.height : parseFloat(e[1])) + r.y]), n.xOrigin = parseFloat(o[0]), n.yOrigin = parseFloat(o[1]), t.setAttribute("data-svg-origin", o.join(" "))
					},
					Dt = F.getTransform = function(t, e, n, i) {
						if (t._gsTransform && n && !i) return t._gsTransform;
						var o, s, l, u, c, h, f, d, p, m, g = n ? t._gsTransform || new kt : new kt,
							v = g.scaleX < 0,
							_ = 2e-5,
							y = 1e5,
							x = Ct ? parseFloat(Q(t, St, e, !1, "0 0 0").split(" ")[2]) || g.zOrigin || 0 : 0,
							b = parseFloat(a.defaultTransformPerspective) || 0;
						if (wt ? s = Q(t, Tt, e, !0) : t.currentStyle && (s = t.currentStyle.filter.match(O), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), g.x || 0, g.y || 0].join(",") : ""), o = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, g.svg = !!(Et && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), g.svg && (o && -1 !== (t.style[wt] + "").indexOf("matrix") && (s = t.style[wt], o = !1), Mt(t, Q(t, St, r, !1, "50% 50%") + "", g, t.getAttribute("data-svg-origin")), xt = a.useSVGTransformAttr || Ot, l = t.getAttribute("transform"), o && l && -1 !== l.indexOf("matrix") && (s = l, o = 0)), !o) {
							for (l = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], u = l.length; --u > -1;) c = Number(l[u]), l[u] = (h = c - (c |= 0)) ? (h * y + (0 > h ? -.5 : .5) | 0) / y + c : c;
							if (16 === l.length) {
								var w, T, S, C, k, E = l[0],
									P = l[1],
									A = l[2],
									M = l[3],
									D = l[4],
									R = l[5],
									j = l[6],
									I = l[7],
									L = l[8],
									B = l[9],
									z = l[10],
									F = l[12],
									q = l[13],
									H = l[14],
									W = l[11],
									X = Math.atan2(j, z);
								g.zOrigin && (H = -g.zOrigin, F = L * H - l[12], q = B * H - l[13], H = z * H + g.zOrigin - l[14]), g.rotationX = X * N, X && (C = Math.cos(-X), k = Math.sin(-X), w = D * C + L * k, T = R * C + B * k, S = j * C + z * k, L = D * -k + L * C, B = R * -k + B * C, z = j * -k + z * C, W = I * -k + W * C, D = w, R = T, j = S), X = Math.atan2(L, z), g.rotationY = X * N, X && (C = Math.cos(-X), k = Math.sin(-X), w = E * C - L * k, T = P * C - B * k, S = A * C - z * k, B = P * k + B * C, z = A * k + z * C, W = M * k + W * C, E = w, P = T, A = S), X = Math.atan2(P, E), g.rotation = X * N, X && (C = Math.cos(-X), k = Math.sin(-X), E = E * C + D * k, T = P * C + R * k, R = P * -k + R * C, j = A * -k + j * C, P = T), g.rotationX && Math.abs(g.rotationX) + Math.abs(g.rotation) > 359.9 && (g.rotationX = g.rotation = 0, g.rotationY += 180), g.scaleX = (Math.sqrt(E * E + P * P) * y + .5 | 0) / y, g.scaleY = (Math.sqrt(R * R + B * B) * y + .5 | 0) / y, g.scaleZ = (Math.sqrt(j * j + z * z) * y + .5 | 0) / y, g.skewX = 0, g.perspective = W ? 1 / (0 > W ? -W : W) : 0, g.x = F, g.y = q, g.z = H, g.svg && (g.x -= g.xOrigin - (g.xOrigin * E - g.yOrigin * D), g.y -= g.yOrigin - (g.yOrigin * P - g.xOrigin * R))
							} else if (!(Ct && !i && l.length && g.x === l[4] && g.y === l[5] && (g.rotationX || g.rotationY) || void 0 !== g.x && "none" === Q(t, "display", e))) {
								var U = l.length >= 6,
									Y = U ? l[0] : 1,
									$ = l[1] || 0,
									V = l[2] || 0,
									G = U ? l[3] : 1;
								g.x = l[4] || 0, g.y = l[5] || 0, f = Math.sqrt(Y * Y + $ * $), d = Math.sqrt(G * G + V * V), p = Y || $ ? Math.atan2($, Y) * N : g.rotation || 0, m = V || G ? Math.atan2(V, G) * N + p : g.skewX || 0, Math.abs(m) > 90 && Math.abs(m) < 270 && (v ? (f *= -1, m += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (d *= -1, m += 0 >= m ? 180 : -180)), g.scaleX = f, g.scaleY = d, g.rotation = p, g.skewX = m, Ct && (g.rotationX = g.rotationY = g.z = 0, g.perspective = b, g.scaleZ = 1), g.svg && (g.x -= g.xOrigin - (g.xOrigin * Y - g.yOrigin * $), g.y -= g.yOrigin - (g.yOrigin * G - g.xOrigin * V))
							}
							g.zOrigin = x;
							for (u in g) g[u] < _ && g[u] > -_ && (g[u] = 0)
						}
						return n && (t._gsTransform = g, g.svg && (xt && t.style[wt] ? It(t.style, wt) : !xt && t.getAttribute("transform") && t.removeAttribute("transform"))), g
					},
					Rt = function(t) {
						var e, n, i = this.data,
							r = -i.rotation * R,
							o = r + i.skewX * R,
							a = 1e5,
							s = (Math.cos(r) * i.scaleX * a | 0) / a,
							l = (Math.sin(r) * i.scaleX * a | 0) / a,
							u = (Math.sin(o) * -i.scaleY * a | 0) / a,
							c = (Math.cos(o) * i.scaleY * a | 0) / a,
							h = this.t.style,
							f = this.t.currentStyle;
						if (f) {
							n = l, l = -u, u = -n, e = f.filter, h.filter = "";
							var d, p, g = this.t.offsetWidth,
								v = this.t.offsetHeight,
								_ = "absolute" !== f.position,
								y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + l + ", M21=" + u + ", M22=" + c,
								w = i.x + g * i.xPercent / 100,
								T = i.y + v * i.yPercent / 100;
							if (null != i.ox && (d = (i.oxp ? g * i.ox * .01 : i.ox) - g / 2, p = (i.oyp ? v * i.oy * .01 : i.oy) - v / 2, w += d - (d * s + p * l), T += p - (d * u + p * c)), _ ? (d = g / 2, p = v / 2, y += ", Dx=" + (d - (d * s + p * l) + w) + ", Dy=" + (p - (d * u + p * c) + T) + ")") : y += ", sizingMethod='auto expand')", h.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(M, y) : y + " " + e, (0 === t || 1 === t) && 1 === s && 0 === l && 0 === u && 1 === c && (_ && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && h.removeAttribute("filter")), !_) {
								var S, C, k, E = 8 > m ? 1 : -1;
								for (d = i.ieOffsetX || 0, p = i.ieOffsetY || 0, i.ieOffsetX = Math.round((g - ((0 > s ? -s : s) * g + (0 > l ? -l : l) * v)) / 2 + w), i.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > u ? -u : u) * g)) / 2 + T), gt = 0; 4 > gt; gt++) C = et[gt], S = f[C], n = -1 !== S.indexOf("px") ? parseFloat(S) : G(this.t, C, parseFloat(S), S.replace(x, "")) || 0, k = n !== i[C] ? 2 > gt ? -i.ieOffsetX : -i.ieOffsetY : 2 > gt ? d - i.ieOffsetX : p - i.ieOffsetY, h[C] = (i[C] = Math.round(n - k * (0 === gt || 2 === gt ? 1 : E))) + "px"
							}
						}
					},
					Nt = F.set3DTransformRatio = F.setTransformRatio = function(t) {
						var e, n, i, r, o, a, s, l, u, c, h, f, p, m, g, v, _, y, x, b, w, T, S, C = this.data,
							k = this.t.style,
							E = C.rotation,
							P = C.rotationX,
							A = C.rotationY,
							O = C.scaleX,
							M = C.scaleY,
							D = C.scaleZ,
							N = C.x,
							j = C.y,
							I = C.z,
							L = C.svg,
							B = C.perspective,
							z = C.force3D;
						if (!(((1 !== t && 0 !== t || "auto" !== z || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && z || I || B || A || P) && (!xt || !L) && Ct)) return void(E || C.skewX || L ? (E *= R, T = C.skewX * R, S = 1e5, e = Math.cos(E) * O, r = Math.sin(E) * O, n = Math.sin(E - T) * -M, o = Math.cos(E - T) * M, T && "simple" === C.skewType && (_ = Math.tan(T), _ = Math.sqrt(1 + _ * _), n *= _, o *= _, C.skewY && (e *= _, r *= _)), L && (N += C.xOrigin - (C.xOrigin * e + C.yOrigin * n), j += C.yOrigin - (C.xOrigin * r + C.yOrigin * o), m = 1e-6, m > N && N > -m && (N = 0), m > j && j > -m && (j = 0)), x = (e * S | 0) / S + "," + (r * S | 0) / S + "," + (n * S | 0) / S + "," + (o * S | 0) / S + "," + N + "," + j + ")", L && xt ? this.t.setAttribute("transform", "matrix(" + x) : k[wt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + x) : k[wt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + M + "," + N + "," + j + ")");
						if (d && (m = 1e-4, m > O && O > -m && (O = D = 2e-5), m > M && M > -m && (M = D = 2e-5), !B || C.z || C.rotationX || C.rotationY || (B = 0)), E || C.skewX) E *= R, g = e = Math.cos(E), v = r = Math.sin(E), C.skewX && (E -= C.skewX * R, g = Math.cos(E), v = Math.sin(E), "simple" === C.skewType && (_ = Math.tan(C.skewX * R), _ = Math.sqrt(1 + _ * _), g *= _, v *= _, C.skewY && (e *= _, r *= _))), n = -v, o = g;
						else {
							if (!(A || P || 1 !== D || B || L)) return void(k[wt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + N + "px," + j + "px," + I + "px)" + (1 !== O || 1 !== M ? " scale(" + O + "," + M + ")" : ""));
							e = o = 1, n = r = 0
						}
						u = 1, i = a = s = l = c = h = 0, f = B ? -1 / B : 0, p = C.zOrigin, m = 1e-6, b = ",", w = "0", E = A * R, E && (g = Math.cos(E), v = Math.sin(E), s = -v, c = f * -v, i = e * v, a = r * v, u = g, f *= g, e *= g, r *= g), E = P * R, E && (g = Math.cos(E), v = Math.sin(E), _ = n * g + i * v, y = o * g + a * v, l = u * v, h = f * v, i = n * -v + i * g, a = o * -v + a * g, u *= g, f *= g, n = _, o = y), 1 !== D && (i *= D, a *= D, u *= D, f *= D), 1 !== M && (n *= M, o *= M, l *= M, h *= M), 1 !== O && (e *= O, r *= O, s *= O, c *= O), (p || L) && (p && (N += i * -p, j += a * -p, I += u * -p + p), L && (N += C.xOrigin - (C.xOrigin * e + C.yOrigin * n), j += C.yOrigin - (C.xOrigin * r + C.yOrigin * o)), m > N && N > -m && (N = w), m > j && j > -m && (j = w), m > I && I > -m && (I = 0)), x = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > e && e > -m ? w : e) + b + (m > r && r > -m ? w : r) + b + (m > s && s > -m ? w : s), x += b + (m > c && c > -m ? w : c) + b + (m > n && n > -m ? w : n) + b + (m > o && o > -m ? w : o), P || A ? (x += b + (m > l && l > -m ? w : l) + b + (m > h && h > -m ? w : h) + b + (m > i && i > -m ? w : i), x += b + (m > a && a > -m ? w : a) + b + (m > u && u > -m ? w : u) + b + (m > f && f > -m ? w : f) + b) : x += ",0,0,0,0,1,0,", x += N + b + j + b + I + b + (B ? 1 + -I / B : 1) + ")", k[wt] = x
					};
				u = kt.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = 0, u.scaleX = u.scaleY = u.scaleZ = 1, _t("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
					parser: function(t, e, n, i, o, s, l) {
						if (i._lastParsedTransform === l) return o;
						i._lastParsedTransform = l;
						var u, c, h, f, d, p, m, g = i._transform = Dt(t, r, !0, l.parseTransform),
							v = t.style,
							_ = 1e-6,
							y = bt.length,
							x = l,
							b = {};
						if ("string" == typeof x.transform && wt) h = B.style, h[wt] = x.transform, h.display = "block", h.position = "absolute", I.body.appendChild(B), u = Dt(B, null, !1), I.body.removeChild(B);
						else if ("object" == typeof x) {
							if (u = {
									scaleX: ot(null != x.scaleX ? x.scaleX : x.scale, g.scaleX),
									scaleY: ot(null != x.scaleY ? x.scaleY : x.scale, g.scaleY),
									scaleZ: ot(x.scaleZ, g.scaleZ),
									x: ot(x.x, g.x),
									y: ot(x.y, g.y),
									z: ot(x.z, g.z),
									xPercent: ot(x.xPercent, g.xPercent),
									yPercent: ot(x.yPercent, g.yPercent),
									perspective: ot(x.transformPerspective, g.perspective)
								}, m = x.directionalRotation, null != m)
								if ("object" == typeof m)
									for (h in m) x[h] = m[h];
								else x.rotation = m;
								"string" == typeof x.x && -1 !== x.x.indexOf("%") && (u.x = 0, u.xPercent = ot(x.x, g.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (u.y = 0, u.yPercent = ot(x.y, g.yPercent)), u.rotation = at("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : g.rotation, g.rotation, "rotation", b), Ct && (u.rotationX = at("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : g.rotationX || 0, g.rotationX, "rotationX", b), u.rotationY = at("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : g.rotationY || 0, g.rotationY, "rotationY", b)), u.skewX = null == x.skewX ? g.skewX : at(x.skewX, g.skewX), u.skewY = null == x.skewY ? g.skewY : at(x.skewY, g.skewY), (c = u.skewY - g.skewY) && (u.skewX += c, u.rotation += c)
						}
						for (Ct && null != x.force3D && (g.force3D = x.force3D, p = !0), g.skewType = x.skewType || g.skewType || a.defaultSkewType, d = g.force3D || g.z || g.rotationX || g.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, d || null == x.scale || (u.scaleZ = 1); --y > -1;) n = bt[y], f = u[n] - g[n], (f > _ || -_ > f || null != x[n] || null != j[n]) && (p = !0, o = new pt(g, n, g[n], f, o), n in b && (o.e = b[n]), o.xs0 = 0, o.plugin = s, i._overwriteProps.push(o.n));
						return f = x.transformOrigin, g.svg && (f || x.svgOrigin) && (Mt(t, it(f), u, x.svgOrigin), o = new pt(g, "xOrigin", g.xOrigin, u.xOrigin - g.xOrigin, o, -1, "transformOrigin"), o.b = g.xOrigin, o.e = o.xs0 = u.xOrigin, o = new pt(g, "yOrigin", g.yOrigin, u.yOrigin - g.yOrigin, o, -1, "transformOrigin"), o.b = g.yOrigin, o.e = o.xs0 = u.yOrigin, f = xt ? null : "0px 0px"), (f || Ct && d && g.zOrigin) && (wt ? (p = !0, n = St, f = (f || Q(t, n, r, !1, "50% 50%")) + "", o = new pt(v, n, 0, 0, o, -1, "transformOrigin"), o.b = v[n], o.plugin = s, Ct ? (h = g.zOrigin, f = f.split(" "), g.zOrigin = (f.length > 2 && (0 === h || "0px" !== f[2]) ? parseFloat(f[2]) : h) || 0, o.xs0 = o.e = f[0] + " " + (f[1] || "50%") + " 0px", o = new pt(g, "zOrigin", 0, 0, o, -1, o.n), o.b = h, o.xs0 = o.e = g.zOrigin) : o.xs0 = o.e = f) : it(f + "", g)), p && (i._transformType = g.svg && xt || !d && 3 !== this._transformType ? 2 : 3), o
					},
					prefix: !0
				}), _t("boxShadow", {
					defaultValue: "0px 0px 0px 0px #999",
					prefix: !0,
					color: !0,
					multi: !0,
					keyword: "inset"
				}), _t("borderRadius", {
					defaultValue: "0px",
					parser: function(t, e, n, o, a, s) {
						e = this.format(e);
						var l, u, c, h, f, d, p, m, g, v, _, y, x, b, w, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
							C = t.style;
						for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < S.length; u++) this.p.indexOf("border") && (S[u] = $(S[u])), f = h = Q(t, S[u], r, !1, "0px"), -1 !== f.indexOf(" ") && (h = f.split(" "), f = h[0], h = h[1]), d = c = l[u], p = parseFloat(f), y = f.substr((p + "").length), x = "=" === d.charAt(1), x ? (m = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), m *= parseFloat(d), _ = d.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(d), _ = d.substr((m + "").length)), "" === _ && (_ = i[n] || y), _ !== y && (b = G(t, "borderLeft", p, y), w = G(t, "borderTop", p, y), "%" === _ ? (f = b / g * 100 + "%", h = w / v * 100 + "%") : "em" === _ ? (T = G(t, "borderLeft", 1, "em"), f = b / T + "em", h = w / T + "em") : (f = b + "px", h = w + "px"), x && (d = parseFloat(f) + m + _, c = parseFloat(h) + m + _)), a = mt(C, S[u], f + " " + h, d + " " + c, !1, "0px", a);
						return a
					},
					prefix: !0,
					formatter: ht("0px 0px 0px 0px", !1, !0)
				}), _t("backgroundPosition", {
					defaultValue: "0 0",
					parser: function(t, e, n, i, o, a) {
						var s, l, u, c, h, f, d = "background-position",
							p = r || V(t, null),
							g = this.format((p ? m ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
							v = this.format(e);
						if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (f = Q(t, "backgroundImage").replace(E, ""), f && "none" !== f)) {
							for (s = g.split(" "), l = v.split(" "), z.setAttribute("src", f), u = 2; --u > -1;) g = s[u], c = -1 !== g.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? t.offsetWidth - z.width : t.offsetHeight - z.height, s[u] = c ? parseFloat(g) / 100 * h + "px" : parseFloat(g) / h * 100 + "%");
							g = s.join(" ")
						}
						return this.parseComplex(t.style, g, v, o, a)
					},
					formatter: it
				}), _t("backgroundSize", {
					defaultValue: "0 0",
					formatter: it
				}), _t("perspective", {
					defaultValue: "0px",
					prefix: !0
				}), _t("perspectiveOrigin", {
					defaultValue: "50% 50%",
					prefix: !0
				}), _t("transformStyle", {
					prefix: !0
				}), _t("backfaceVisibility", {
					prefix: !0
				}), _t("userSelect", {
					prefix: !0
				}), _t("margin", {
					parser: ft("marginTop,marginRight,marginBottom,marginLeft")
				}), _t("padding", {
					parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")
				}), _t("clip", {
					defaultValue: "rect(0px,0px,0px,0px)",
					parser: function(t, e, n, i, o, a) {
						var s, l, u;
						return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", s = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (s = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, s, e, o, a)
					}
				}), _t("textShadow", {
					defaultValue: "0px 0px 0px #999",
					color: !0,
					multi: !0
				}), _t("autoRound,strictUnits", {
					parser: function(t, e, n, i, r) {
						return r
					}
				}), _t("border", {
					defaultValue: "0px solid #000",
					parser: function(t, e, n, i, o, a) {
						return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), o, a)
					},
					color: !0,
					formatter: function(t) {
						var e = t.split(" ");
						return e[0] + " " + (e[1] || "solid") + " " + (t.match(ct) || ["#000"])[0]
					}
				}), _t("borderWidth", {
					parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
				}), _t("float,cssFloat,styleFloat", {
					parser: function(t, e, n, i, r, o) {
						var a = t.style,
							s = "cssFloat" in a ? "cssFloat" : "styleFloat";
						return new pt(a, s, 0, 0, r, -1, n, !1, 0, a[s], e)
					}
				});
				var jt = function(t) {
					var e, n = this.t,
						i = n.filter || Q(this.data, "filter") || "",
						r = this.s + this.c * t | 0;
					100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), e = !Q(this.data, "filter")) : (n.filter = i.replace(T, ""), e = !0)), e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(b, "opacity=" + r))
				};
				_t("opacity,alpha,autoAlpha", {
					defaultValue: "1",
					parser: function(t, e, n, i, o, a) {
						var s = parseFloat(Q(t, "opacity", r, !1, "1")),
							l = t.style,
							u = "autoAlpha" === n;
						return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), u && 1 === s && "hidden" === Q(t, "visibility", r) && 0 !== e && (s = 0), H ? o = new pt(l, "opacity", s, e - s, o) : (o = new pt(l, "opacity", 100 * s, 100 * (e - s), o), o.xn1 = u ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = a, o.setRatio = jt), u && (o = new pt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", i._overwriteProps.push(o.n), i._overwriteProps.push(n)), o
					}
				});
				var It = function(t, e) {
						e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
					},
					Lt = function(t) {
						if (this.t._gsClassPT = this, 1 === t || 0 === t) {
							this.t.setAttribute("class", 0 === t ? this.b : this.e);
							for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : It(n, e.p), e = e._next;
							1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
						} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
					};
				_t("className", {
					parser: function(t, e, i, o, a, s, l) {
						var u, c, h, f, d, p = t.getAttribute("class") || "",
							m = t.style.cssText;
						if (a = o._classNamePT = new pt(t, i, 0, 0, a, 2), a.setRatio = Lt, a.pr = -11, n = !0, a.b = p, c = J(t, r), h = t._gsClassPT) {
							for (f = {}, d = h.data; d;) f[d.p] = 1, d = d._next;
							h.setRatio(1)
						}
						return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), u = K(t, c, J(t), l, f), t.setAttribute("class", p), a.data = u.firstMPT, t.style.cssText = m, a = a.xfirst = o.parse(t, u.difs, a, s)
					}
				});
				var Bt = function(t) {
					if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
						var e, n, i, r, o, a = this.t.style,
							s = l.transform.parse;
						if ("all" === this.e) a.cssText = "", r = !0;
						else
							for (e = this.e.split(" ").join("").split(","), i = e.length; --i > -1;) n = e[i], l[n] && (l[n].parse === s ? r = !0 : n = "transformOrigin" === n ? St : l[n].p), It(a, n);
						r && (It(a, wt), o = this.t._gsTransform, o && (o.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
					}
				};
				for (_t("clearProps", {
						parser: function(t, e, i, r, o) {
							return o = new pt(t, i, 0, 0, o, 2), o.setRatio = Bt, o.e = e, o.pr = -10, o.data = r._tween, n = !0, o
						}
					}), u = "bezier,throwProps,physicsProps,physics2D".split(","), gt = u.length; gt--;) yt(u[gt]);
				u = a.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, s) {
					if (!t.nodeType) return !1;
					this._target = t, this._tween = s, this._vars = e, c = e.autoRound, n = !1, i = e.suffixMap || a.suffixMap, r = V(t, ""), o = this._overwriteProps;
					var u, d, m, g, v, _, y, x, b, T = t.style;
					if (h && "" === T.zIndex && (u = Q(t, "zIndex", r), ("auto" === u || "" === u) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (g = T.cssText, u = J(t, r), T.cssText = g + ";" + e, u = K(t, u, J(t)).difs, !H && w.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, T.cssText = g), this._firstPT = d = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
						for (b = 3 === this._transformType, wt ? f && (h = !0, "" === T.zIndex && (y = Q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(T, "zIndex", 0)), p && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : T.zoom = 1, m = d; m && m._next;) m = m._next;
						x = new pt(t, "transform", 0, 0, null, 2), this._linkCSSP(x, null, m), x.setRatio = wt ? Nt : Rt, x.data = this._transform || Dt(t, r, !0), x.tween = s, x.pr = -1, o.pop()
					}
					if (n) {
						for (; d;) {
							for (_ = d._next, m = g; m && m.pr > d.pr;) m = m._next;
							(d._prev = m ? m._prev : v) ? d._prev._next = d: g = d, (d._next = m) ? m._prev = d : v = d, d = _
						}
						this._firstPT = g
					}
					return !0
				}, u.parse = function(t, e, n, o) {
					var a, s, u, h, f, d, p, m, g, v, _ = t.style;
					for (a in e) d = e[a], s = l[a], s ? n = s.parse(t, d, a, this, n, o, e) : (f = Q(t, a, r) + "", g = "string" == typeof d, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || g && S.test(d) ? (g || (d = ut(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), n = mt(_, a, f, d, !0, "transparent", n, 0, o)) : !g || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (u = parseFloat(f), p = u || 0 === u ? f.substr((u + "").length) : "", ("" === f || "auto" === f) && ("width" === a || "height" === a ? (u = nt(t, a, r), p = "px") : "left" === a || "top" === a ? (u = Z(t, a, r), p = "px") : (u = "opacity" !== a ? 0 : 1, p = "")), v = g && "=" === d.charAt(1), v ? (h = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), h *= parseFloat(d), m = d.replace(x, "")) : (h = parseFloat(d), m = g ? d.replace(x, "") : ""), "" === m && (m = a in i ? i[a] : p), d = h || 0 === h ? (v ? h + u : h) + m : e[a], p !== m && "" !== m && (h || 0 === h) && u && (u = G(t, a, u, p), "%" === m ? (u /= G(t, a, 100, "%") / 100, e.strictUnits !== !0 && (f = u + "%")) : "em" === m ? u /= G(t, a, 1, "em") : "px" !== m && (h = G(t, a, h, m), m = "px"), v && (h || 0 === h) && (d = h + u + m)), v && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== _[a] && (d || d + "" != "NaN" && null != d) ? (n = new pt(_, a, h || u || 0, 0, n, -1, a, !1, 0, f, d), n.xs0 = "none" !== d || "display" !== a && -1 === a.indexOf("Style") ? d : f) : X("invalid " + a + " tween value: " + e[a]) : (n = new pt(_, a, u, h - u, n, 0, a, c !== !1 && ("px" === m || "zIndex" === a), 0, f, d), n.xs0 = m)) : n = mt(_, a, f, d, !0, null, n, 0, o)), o && n && !n.plugin && (n.plugin = o);
					return n
				}, u.setRatio = function(t) {
					var e, n, i, r = this._firstPT,
						o = 1e-6;
					if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
						if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
							for (; r;) {
								if (e = r.c * t + r.s, r.r ? e = Math.round(e) : o > e && e > -o && (e = 0), r.type)
									if (1 === r.type)
										if (i = r.l, 2 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
										else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
								else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
								else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
								else {
									for (n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
									r.t[r.p] = n
								} else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
								else r.t[r.p] = e + r.xs0;
								r = r._next
							} else
								for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
						else
							for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
				}, u._enableTransforms = function(t) {
					this._transform = this._transform || Dt(this._target, r, !0), this._transformType = this._transform.svg && xt || !t && 3 !== this._transformType ? 2 : 3
				};
				var zt = function(t) {
					this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
				};
				u._addLazySet = function(t, e, n) {
					var i = this._firstPT = new pt(t, e, 0, 0, this._firstPT, 2);
					i.e = n, i.setRatio = zt, i.data = this
				}, u._linkCSSP = function(t, e, n, i) {
					return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
				}, u._kill = function(e) {
					var n, i, r, o = e;
					if (e.autoAlpha || e.alpha) {
						o = {};
						for (i in e) o[i] = e[i];
						o.opacity = 1, o.autoAlpha && (o.visibility = 1)
					}
					return e.className && (n = this._classNamePT) && (r = n.xfirst, r && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
				};
				var Ft = function(t, e, n) {
					var i, r, o, a;
					if (t.slice)
						for (r = t.length; --r > -1;) Ft(t[r], e, n);
					else
						for (i = t.childNodes, r = i.length; --r > -1;) o = i[r], a = o.type, o.style && (e.push(J(o)), n && n.push(o)), 1 !== a && 9 !== a && 11 !== a || !o.childNodes.length || Ft(o, e, n)
				};
				return a.cascadeTo = function(t, n, i) {
					var r, o, a, s, l = e.to(t, n, i),
						u = [l],
						c = [],
						h = [],
						f = [],
						d = e._internals.reservedProps;
					for (t = l._targets || l.target, Ft(t, c, f), l.render(n, !0, !0), Ft(t, h), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
						if (o = K(f[r], c[r], h[r]), o.firstMPT) {
							o = o.difs;
							for (a in i) d[a] && (o[a] = i[a]);
							s = {};
							for (a in o) s[a] = c[r][a];
							u.push(e.fromTo(f[r], n, s, o))
						}
					return u
				}, t.activate([a]), a
			}, !0),
			function() {
				var t = _gsScope._gsDefine.plugin({
						propName: "roundProps",
						priority: -1,
						API: 2,
						init: function(t, e, n) {
							return this._tween = n, !0
						}
					}),
					e = t.prototype;
				e._onInitAllProps = function() {
					for (var t, e, n, i = this._tween, r = i.vars.roundProps instanceof Array ? i.vars.roundProps : i.vars.roundProps.split(","), o = r.length, a = {}, s = i._propLookup.roundProps; --o > -1;) a[r[o]] = 1;
					for (o = r.length; --o > -1;)
						for (t = r[o], e = i._firstPT; e;) n = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), n && (n._prev = e._prev), e._prev ? e._prev._next = n : i._firstPT === e && (i._firstPT = n), e._next = e._prev = null, i._propLookup[t] = s), e = n;
					return !1
				}, e._add = function(t, e, n, i) {
					this._addTween(t, e, n, n + i, e, !0), this._overwriteProps.push(e)
				}
			}(), _gsScope._gsDefine.plugin({
				propName: "attr",
				API: 2,
				version: "0.3.3",
				init: function(t, e, n) {
					var i, r, o;
					if ("function" != typeof t.setAttribute) return !1;
					this._target = t, this._proxy = {}, this._start = {}, this._end = {};
					for (i in e) this._start[i] = this._proxy[i] = r = t.getAttribute(i), o = this._addTween(this._proxy, i, parseFloat(r), e[i], i), this._end[i] = o ? o.s + o.c : e[i], this._overwriteProps.push(i);
					return !0
				},
				set: function(t) {
					this._super.setRatio.call(this, t);
					for (var e, n = this._overwriteProps, i = n.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --i > -1;) e = n[i], this._target.setAttribute(e, r[e] + "")
				}
			}), _gsScope._gsDefine.plugin({
				propName: "directionalRotation",
				version: "0.2.1",
				API: 2,
				init: function(t, e, n) {
					"object" != typeof e && (e = {
						rotation: e
					}), this.finals = {};
					var i, r, o, a, s, l, u = e.useRadians === !0 ? 2 * Math.PI : 360,
						c = 1e-6;
					for (i in e) "useRadians" !== i && (l = (e[i] + "").split("_"), r = l[0], o = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), a = this.finals[i] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, s = a - o, l.length && (r = l.join("_"), -1 !== r.indexOf("short") && (s %= u, s !== s % (u / 2) && (s = 0 > s ? s + u : s - u)), -1 !== r.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * u) % u - (s / u | 0) * u : -1 !== r.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * u) % u - (s / u | 0) * u)), (s > c || -c > s) && (this._addTween(t, i, o, o + s, i), this._overwriteProps.push(i)));
					return !0
				},
				set: function(t) {
					var e;
					if (1 !== t) this._super.setRatio.call(this, t);
					else
						for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
				}
			})._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
				var e, n, i, r = _gsScope.GreenSockGlobals || _gsScope,
					o = r.com.greensock,
					a = 2 * Math.PI,
					s = Math.PI / 2,
					l = o._class,
					u = function(e, n) {
						var i = l("easing." + e, function() {}, !0),
							r = i.prototype = new t;
						return r.constructor = i, r.getRatio = n, i
					},
					c = t.register || function() {},
					h = function(t, e, n, i, r) {
						var o = l("easing." + t, {
							easeOut: new e,
							easeIn: new n,
							easeInOut: new i
						}, !0);
						return c(o, t), o
					},
					f = function(t, e, n) {
						this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t)
					},
					d = function(e, n) {
						var i = l("easing." + e, function(t) {
								this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
							}, !0),
							r = i.prototype = new t;
						return r.constructor = i, r.getRatio = n, r.config = function(t) {
							return new i(t)
						}, i
					},
					p = h("Back", d("BackOut", function(t) {
						return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
					}), d("BackIn", function(t) {
						return t * t * ((this._p1 + 1) * t - this._p1)
					}), d("BackInOut", function(t) {
						return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
					})),
					m = l("easing.SlowMo", function(t, e, n) {
						e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
					}, !0),
					g = m.prototype = new t;
				return g.constructor = m, g.getRatio = function(t) {
					var e = t + (.5 - t) * this._p;
					return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
				}, m.ease = new m(.7, .7), g.config = m.config = function(t, e, n) {
					return new m(t, e, n)
				}, e = l("easing.SteppedEase", function(t) {
					t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
				}, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
					return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
				}, g.config = e.config = function(t) {
					return new e(t)
				}, n = l("easing.RoughEase", function(e) {
					e = e || {};
					for (var n, i, r, o, a, s, l = e.taper || "none", u = [], c = 0, h = 0 | (e.points || 20), d = h, p = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) n = p ? Math.random() : 1 / h * d, i = g ? g.getRatio(n) : n, "none" === l ? r = v : "out" === l ? (o = 1 - n, r = o * o * v) : "in" === l ? r = n * n * v : .5 > n ? (o = 2 * n, r = o * o * .5 * v) : (o = 2 * (1 - n), r = o * o * .5 * v), p ? i += Math.random() * r - .5 * r : d % 2 ? i += .5 * r : i -= .5 * r, m && (i > 1 ? i = 1 : 0 > i && (i = 0)), u[c++] = {
						x: n,
						y: i
					};
					for (u.sort(function(t, e) {
							return t.x - e.x
						}), s = new f(1, 1, null), d = h; --d > -1;) a = u[d], s = new f(a.x, a.y, s);
					this._prev = new f(0, 0, 0 !== s.t ? s : s.next)
				}, !0), g = n.prototype = new t, g.constructor = n, g.getRatio = function(t) {
					var e = this._prev;
					if (t > e.t) {
						for (; e.next && t >= e.t;) e = e.next;
						e = e.prev
					} else
						for (; e.prev && t <= e.t;) e = e.prev;
					return this._prev = e, e.v + (t - e.t) / e.gap * e.c
				}, g.config = function(t) {
					return new n(t)
				}, n.ease = new n, h("Bounce", u("BounceOut", function(t) {
					return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
				}), u("BounceIn", function(t) {
					return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
				}), u("BounceInOut", function(t) {
					var e = .5 > t;
					return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
				})), h("Circ", u("CircOut", function(t) {
					return Math.sqrt(1 - (t -= 1) * t)
				}), u("CircIn", function(t) {
					return -(Math.sqrt(1 - t * t) - 1)
				}), u("CircInOut", function(t) {
					return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
				})), i = function(e, n, i) {
					var r = l("easing." + e, function(t, e) {
							this._p1 = t >= 1 ? t : 1, this._p2 = (e || i) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
						}, !0),
						o = r.prototype = new t;
					return o.constructor = r, o.getRatio = n, o.config = function(t, e) {
						return new r(t, e)
					}, r
				}, h("Elastic", i("ElasticOut", function(t) {
					return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
				}, .3), i("ElasticIn", function(t) {
					return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
				}, .3), i("ElasticInOut", function(t) {
					return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
				}, .45)), h("Expo", u("ExpoOut", function(t) {
					return 1 - Math.pow(2, -10 * t)
				}), u("ExpoIn", function(t) {
					return Math.pow(2, 10 * (t - 1)) - .001
				}), u("ExpoInOut", function(t) {
					return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
				})), h("Sine", u("SineOut", function(t) {
					return Math.sin(t * s)
				}), u("SineIn", function(t) {
					return -Math.cos(t * s) + 1
				}), u("SineInOut", function(t) {
					return -.5 * (Math.cos(Math.PI * t) - 1)
				})), l("easing.EaseLookup", {
					find: function(e) {
						return t.map[e]
					}
				}, !0), c(r.SlowMo, "SlowMo", "ease,"), c(n, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), p
			}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function(t, e) {
		"use strict";
		var n = t.GreenSockGlobals = t.GreenSockGlobals || t;
		if (!n.TweenLite) {
			var i, r, o, a, s, l = function(t) {
					var e, i = t.split("."),
						r = n;
					for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
					return r
				},
				u = l("com.greensock"),
				c = 1e-10,
				h = function(t) {
					var e, n = [],
						i = t.length;
					for (e = 0; e !== i; n.push(t[e++]));
					return n
				},
				f = function() {},
				d = function() {
					var t = Object.prototype.toString,
						e = t.call([]);
					return function(n) {
						return null != n && (n instanceof Array || "object" == typeof n && !!n.push && t.call(n) === e)
					}
				}(),
				p = {},
				m = function(i, r, o, a) {
					this.sc = p[i] ? p[i].sc : [], p[i] = this, this.gsClass = null, this.func = o;
					var s = [];
					this.check = function(u) {
						for (var c, h, f, d, g = r.length, v = g; --g > -1;)(c = p[r[g]] || new m(r[g], [])).gsClass ? (s[g] = c.gsClass, v--) : u && c.sc.push(this);
						if (0 === v && o)
							for (h = ("com.greensock." + i).split("."), f = h.pop(), d = l(h.join("."))[f] = this.gsClass = o.apply(o, s), a && (n[f] = d, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function() {
									return d
								}) : i === e && "undefined" != typeof module && module.exports && (module.exports = d)), g = 0; g < this.sc.length; g++) this.sc[g].check()
					}, this.check(!0)
				},
				g = t._gsDefine = function(t, e, n, i) {
					return new m(t, e, n, i)
				},
				v = u._class = function(t, e, n) {
					return e = e || function() {}, g(t, [], function() {
						return e
					}, n), e
				};
			g.globals = n;
			var _ = [0, 0, 1, 1],
				y = [],
				x = v("easing.Ease", function(t, e, n, i) {
					this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? _.concat(e) : _
				}, !0),
				b = x.map = {},
				w = x.register = function(t, e, n, i) {
					for (var r, o, a, s, l = e.split(","), c = l.length, h = (n || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
						for (o = l[c], r = i ? v("easing." + o, null, !0) : u.easing[o] || {}, a = h.length; --a > -1;) s = h[a], b[o + "." + s] = b[s + o] = r[s] = t.getRatio ? t : t[s] || new t
				};
			for (o = x.prototype, o._calcEnd = !1, o.getRatio = function(t) {
					if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
					var e = this._type,
						n = this._power,
						i = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
					return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : .5 > t ? i / 2 : 1 - i / 2
				}, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = i.length; --r > -1;) o = i[r] + ",Power" + r, w(new x(null, null, 1, r), o, "easeOut", !0), w(new x(null, null, 2, r), o, "easeIn" + (0 === r ? ",easeNone" : "")), w(new x(null, null, 3, r), o, "easeInOut");
			b.linear = u.easing.Linear.easeIn, b.swing = u.easing.Quad.easeInOut;
			var T = v("events.EventDispatcher", function(t) {
				this._listeners = {}, this._eventTarget = t || this
			});
			o = T.prototype, o.addEventListener = function(t, e, n, i, r) {
				r = r || 0;
				var o, l, u = this._listeners[t],
					c = 0;
				for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1;) o = u[l], o.c === e && o.s === n ? u.splice(l, 1) : 0 === c && o.pr < r && (c = l + 1);
				u.splice(c, 0, {
					c: e,
					s: n,
					up: i,
					pr: r
				}), this !== a || s || a.wake()
			}, o.removeEventListener = function(t, e) {
				var n, i = this._listeners[t];
				if (i)
					for (n = i.length; --n > -1;)
						if (i[n].c === e) return void i.splice(n, 1)
			}, o.dispatchEvent = function(t) {
				var e, n, i, r = this._listeners[t];
				if (r)
					for (e = r.length, n = this._eventTarget; --e > -1;) i = r[e], i && (i.up ? i.c.call(i.s || n, {
						type: t,
						target: n
					}) : i.c.call(i.s || n))
			};
			var S = t.requestAnimationFrame,
				C = t.cancelAnimationFrame,
				k = Date.now || function() {
					return (new Date).getTime()
				},
				E = k();
			for (i = ["ms", "moz", "webkit", "o"], r = i.length; --r > -1 && !S;) S = t[i[r] + "RequestAnimationFrame"], C = t[i[r] + "CancelAnimationFrame"] || t[i[r] + "CancelRequestAnimationFrame"];
			v("Ticker", function(t, e) {
				var n, i, r, o, l, u = this,
					h = k(),
					d = e !== !1 && S,
					p = 500,
					m = 33,
					g = "tick",
					v = function(t) {
						var e, a, s = k() - E;
						s > p && (h += s - m), E += s, u.TIME = (E - h) / 1e3, e = u.TIME - l, (!n || e > 0 || t === !0) && (u.frame++, l += e + (e >= o ? .004 : o - e), a = !0), t !== !0 && (r = i(v)), a && u.dispatchEvent(g)
					};
				T.call(u), u.TIME = u.frame = 0, u.tick = function() {
					v(!0)
				}, u.lagSmoothing = function(t, e) {
					p = t || 1 / c, m = Math.min(e, p, 0)
				}, u.sleep = function() {
					null != r && (d && C ? C(r) : clearTimeout(r), i = f, r = null, u === a && (s = !1))
				}, u.wake = function() {
					null !== r ? u.sleep() : u.frame > 10 && (E = k() - p + 5), i = 0 === n ? f : d && S ? S : function(t) {
						return setTimeout(t, 1e3 * (l - u.TIME) + 1 | 0)
					}, u === a && (s = !0), v(2)
				}, u.fps = function(t) {
					return arguments.length ? (n = t, o = 1 / (n || 60), l = this.TIME + o, void u.wake()) : n
				}, u.useRAF = function(t) {
					return arguments.length ? (u.sleep(), d = t, void u.fps(n)) : d
				}, u.fps(t), setTimeout(function() {
					d && u.frame < 5 && u.useRAF(!1)
				}, 1500)
			}), o = u.Ticker.prototype = new u.events.EventDispatcher, o.constructor = u.Ticker;
			var P = v("core.Animation", function(t, e) {
				if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
					s || a.wake();
					var n = this.vars.useFrames ? H : W;
					n.add(this, n._time), this.vars.paused && this.paused(!0)
				}
			});
			a = P.ticker = new u.Ticker, o = P.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
			var A = function() {
				s && k() - E > 2e3 && a.wake(), setTimeout(A, 2e3)
			};
			A(), o.play = function(t, e) {
				return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
			}, o.pause = function(t, e) {
				return null != t && this.seek(t, e), this.paused(!0)
			}, o.resume = function(t, e) {
				return null != t && this.seek(t, e), this.paused(!1)
			}, o.seek = function(t, e) {
				return this.totalTime(Number(t), e !== !1)
			}, o.restart = function(t, e) {
				return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
			}, o.reverse = function(t, e) {
				return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
			}, o.render = function(t, e, n) {}, o.invalidate = function() {
				return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
			}, o.isActive = function() {
				var t, e = this._timeline,
					n = this._startTime;
				return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= n && t < n + this.totalDuration() / this._timeScale
			}, o._enabled = function(t, e) {
				return s || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
			}, o._kill = function(t, e) {
				return this._enabled(!1, !1)
			}, o.kill = function(t, e) {
				return this._kill(t, e), this
			}, o._uncache = function(t) {
				for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
				return this
			}, o._swapSelfInParams = function(t) {
				for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this);
				return n
			}, o.eventCallback = function(t, e, n, i) {
				if ("on" === (t || "").substr(0, 2)) {
					var r = this.vars;
					if (1 === arguments.length) return r[t];
					null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = d(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
				}
				return this
			}, o.delay = function(t) {
				return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
			}, o.duration = function(t) {
				return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
			}, o.totalDuration = function(t) {
				return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
			}, o.TIME = function(t, e) {
				return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
			}, o.totalTime = function(t, e, n) {
				if (s || a.wake(), !arguments.length) return this._totalTime;
				if (this._timeline) {
					if (0 > t && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
						this._dirty && this.totalDuration();
						var i = this._totalDuration,
							r = this._timeline;
						if (t > i && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
							for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
					}
					this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), N.length && U())
				}
				return this
			}, o.progress = o.totalProgress = function(t, e) {
				return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
			}, o.startTime = function(t) {
				return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
			}, o.endTime = function(t) {
				return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
			}, o.timeScale = function(t) {
				if (!arguments.length) return this._timeScale;
				if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
					var e = this._pauseTime,
						n = e || 0 === e ? e : this._timeline.totalTime();
					this._startTime = n - (n - this._startTime) * this._timeScale / t
				}
				return this._timeScale = t, this._uncache(!1)
			}, o.reversed = function(t) {
				return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
			}, o.paused = function(t) {
				if (!arguments.length) return this._paused;
				var e, n, i = this._timeline;
				return t != this._paused && i && (s || t || a.wake(), e = i.rawTime(), n = e - this._pauseTime, !t && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
			};
			var O = v("core.SimpleTimeline", function(t) {
				P.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
			});
			o = O.prototype = new P, o.constructor = O, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e, n, i) {
				var r, o;
				if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
					for (o = t._startTime; r && r._startTime > o;) r = r._prev;
				return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
			}, o._remove = function(t, e) {
				return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
			}, o.render = function(t, e, n) {
				var i, r = this._first;
				for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
			}, o.rawTime = function() {
				return s || a.wake(), this._totalTime
			};
			var M = v("TweenLite", function(e, n, i) {
					if (P.call(this, n, i), this.render = M.prototype.render, null == e) throw "Cannot tween a null target.";
					this.target = e = "string" != typeof e ? e : M.selector(e) || e;
					var r, o, a, s = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
						l = this.vars.overwrite;
					if (this._overwrite = l = null == l ? q[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (s || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
						for (this._targets = a = h(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++) o = a[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(h(o))) : (this._siblings[r] = Y(o, this, !1), 1 === l && this._siblings[r].length > 1 && V(o, this, null, 1, this._siblings[r])) : (o = a[r--] = M.selector(o), "string" == typeof o && a.splice(r + 1, 1)) : a.splice(r--, 1);
					else this._propLookup = {}, this._siblings = Y(e, this, !1), 1 === l && this._siblings.length > 1 && V(e, this, null, 1, this._siblings);
					(this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
				}, !0),
				D = function(e) {
					return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
				},
				R = function(t, e) {
					var n, i = {};
					for (n in t) F[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!L[n] || L[n] && L[n]._autoCSS) || (i[n] = t[n], delete t[n]);
					t.css = i
				};
			o = M.prototype = new P, o.constructor = M, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, M.version = "1.16.1", M.defaultEase = o._ease = new x(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = a, M.autoSleep = 120, M.lagSmoothing = function(t, e) {
				a.lagSmoothing(t, e)
			}, M.selector = t.$ || t.jQuery || function(e) {
				var n = t.$ || t.jQuery;
				return n ? (M.selector = n, n(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
			};
			var N = [],
				j = {},
				I = M._internals = {
					isArray: d,
					isSelector: D,
					lazyTweens: N
				},
				L = M._plugins = {},
				B = I.tweenLookup = {},
				z = 0,
				F = I.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1
				},
				q = {
					none: 0,
					all: 1,
					auto: 2,
					concurrent: 3,
					allOnStart: 4,
					preexisting: 5,
					"true": 1,
					"false": 0
				},
				H = P._rootFramesTimeline = new O,
				W = P._rootTimeline = new O,
				X = 30,
				U = I.lazyRender = function() {
					var t, e = N.length;
					for (j = {}; --e > -1;) t = N[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
					N.length = 0
				};
			W._startTime = a.TIME, H._startTime = a.frame, W._active = H._active = !0, setTimeout(U, 1), P._updateRoot = M.render = function() {
				var t, e, n;
				if (N.length && U(), W.render((a.TIME - W._startTime) * W._timeScale, !1, !1), H.render((a.frame - H._startTime) * H._timeScale, !1, !1), N.length && U(), a.frame >= X) {
					X = a.frame + (parseInt(M.autoSleep, 10) || 120);
					for (n in B) {
						for (e = B[n].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
						0 === e.length && delete B[n]
					}
					if (n = W._first, (!n || n._paused) && M.autoSleep && !H._first && 1 === a._listeners.tick.length) {
						for (; n && n._paused;) n = n._next;
						n || a.sleep()
					}
				}
			}, a.addEventListener("tick", P._updateRoot);
			var Y = function(t, e, n) {
					var i, r, o = t._gsTweenID;
					if (B[o || (t._gsTweenID = o = "t" + z++)] || (B[o] = {
							target: t,
							tweens: []
						}), e && (i = B[o].tweens, i[r = i.length] = e, n))
						for (; --r > -1;) i[r] === e && i.splice(r, 1);
					return B[o].tweens
				},
				$ = function(t, e, n, i) {
					var r, o, a = t.vars.onOverwrite;
					return a && (r = a(t, e, n, i)), a = M.onOverwrite, a && (o = a(t, e, n, i)), r !== !1 && o !== !1
				},
				V = function(t, e, n, i, r) {
					var o, a, s, l;
					if (1 === i || i >= 4) {
						for (l = r.length, o = 0; l > o; o++)
							if ((s = r[o]) !== e) s._gc || $(s, e) && s._enabled(!1, !1) && (a = !0);
							else if (5 === i) break;
						return a
					}
					var u, h = e._startTime + c,
						f = [],
						d = 0,
						p = 0 === e._duration;
					for (o = r.length; --o > -1;)(s = r[o]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (u = u || Q(e, 0, p), 0 === Q(s, u, p) && (f[d++] = s)) : s._startTime <= h && s._startTime + s.totalDuration() / s._timeScale > h && ((p || !s._initted) && h - s._startTime <= 2e-10 || (f[d++] = s)));
					for (o = d; --o > -1;)
						if (s = f[o], 2 === i && s._kill(n, t, e) && (a = !0), 2 !== i || !s._firstPT && s._initted) {
							if (2 !== i && !$(s, e)) continue;
							s._enabled(!1, !1) && (a = !0)
						}
					return a
				},
				Q = function(t, e, n) {
					for (var i = t._timeline, r = i._timeScale, o = t._startTime; i._timeline;) {
						if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
						i = i._timeline
					}
					return o /= r, o > e ? o - e : n && o === e || !t._initted && 2 * c > o - e ? c : (o += t.totalDuration() / t._timeScale / r) > e + c ? 0 : o - e - c
				};
			o._init = function() {
				var t, e, n, i, r, o = this.vars,
					a = this._overwrittenProps,
					s = this._duration,
					l = !!o.immediateRender,
					u = o.ease;
				if (o.startAt) {
					this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
					for (i in o.startAt) r[i] = o.startAt[i];
					if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = M.to(this.target, 0, r), l)
						if (this._time > 0) this._startAt = null;
						else if (0 !== s) return
				} else if (o.runBackwards && 0 !== s)
					if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
					else {
						0 !== this._time && (l = !1), n = {};
						for (i in o) F[i] && "autoCSS" !== i || (n[i] = o[i]);
						if (n.overwrite = 0, n.data = "isFromStart", n.lazy = l && o.lazy !== !1, n.immediateRender = l, this._startAt = M.to(this.target, 0, n), l) {
							if (0 === this._time) return
						} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
					}
				if (this._ease = u = u ? u instanceof x ? u : "function" == typeof u ? new x(u, o.easeParams) : b[u] || M.defaultEase : M.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
					for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
				else e = this._initProps(this.target, this._propLookup, this._siblings, a);
				if (e && M._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
					for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
				this._onUpdate = o.onUpdate, this._initted = !0
			}, o._initProps = function(e, n, i, r) {
				var o, a, s, l, u, c;
				if (null == e) return !1;
				j[e._gsTweenID] && U(), this.vars.css || e.style && e !== t && e.nodeType && L.css && this.vars.autoCSS !== !1 && R(this.vars, e);
				for (o in this.vars) {
					if (c = this.vars[o], F[o]) c && (c instanceof Array || c.push && d(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
					else if (L[o] && (l = new L[o])._onInitTween(e, this.vars[o], this)) {
						for (this._firstPT = u = {
								_next: this._firstPT,
								t: l,
								p: "setRatio",
								s: 0,
								c: 1,
								f: !0,
								n: o,
								pg: !0,
								pr: l._priority
							}, a = l._overwriteProps.length; --a > -1;) n[l._overwriteProps[a]] = this._firstPT;
						(l._priority || l._onInitAllProps) && (s = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
					} else this._firstPT = n[o] = u = {
						_next: this._firstPT,
						t: e,
						p: o,
						f: "function" == typeof e[o],
						n: o,
						pg: !1,
						pr: 0
					}, u.s = u.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), u.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - u.s || 0;
					u && u._next && (u._next._prev = u)
				}
				return r && this._kill(r, e) ? this._initProps(e, n, i, r) : this._overwrite > 1 && this._firstPT && i.length > 1 && V(e, this, n, this._overwrite, i) ? (this._kill(n, e), this._initProps(e, n, i, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (j[e._gsTweenID] = !0), s)
			}, o.render = function(t, e, n) {
				var i, r, o, a, s = this._time,
					l = this._duration,
					u = this._rawPrevTime;
				if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > u || u === c && "isPause" !== this.data) && u !== t && (n = !0, u > c && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || u === t ? t : c);
				else if (1e-7 > t) this._totalTime = this._time = 0,
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === l && u > 0) && (r = "onReverseComplete", i = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (u !== c || "isPause" !== this.data) && (n = !0), this._rawPrevTime = a = !e || t || u === t ? t : c)), this._initted || (n = !0);
				else if (this._totalTime = this._time = t, this._easeType) {
					var h = t / l,
						f = this._easeType,
						d = this._easePower;
					(1 === f || 3 === f && h >= .5) && (h = 1 - h), 3 === f && (h *= 2), 1 === d ? h *= h : 2 === d ? h *= h * h : 3 === d ? h *= h * h * h : 4 === d && (h *= h * h * h * h), this.ratio = 1 === f ? 1 - h : 2 === f ? h : .5 > t / l ? h / 2 : 1 - h / 2
				} else this.ratio = this._ease.getRatio(t / l);
				if (this._time !== s || n) {
					if (!this._initted) {
						if (this._init(), !this._initted || this._gc) return;
						if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = u, N.push(this), void(this._lazy = [t, e]);
						this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
					this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, n), e || (this._time !== s || i) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === l && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
				}
			}, o._kill = function(t, e, n) {
				if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
				e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
				var i, r, o, a, s, l, u, c, h;
				if ((d(e) || D(e)) && "number" != typeof e[0])
					for (i = e.length; --i > -1;) this._kill(t, e[i]) && (l = !0);
				else {
					if (this._targets) {
						for (i = this._targets.length; --i > -1;)
							if (e === this._targets[i]) {
								s = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
								break
							}
					} else {
						if (e !== this.target) return !1;
						s = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
					}
					if (s) {
						if (u = t || s, c = t !== r && "all" !== r && t !== s && ("object" != typeof t || !t._tempKill), n && (M.onOverwrite || this.vars.onOverwrite)) {
							for (o in u) s[o] && (h || (h = []), h.push(o));
							if (!$(this, n, e, h)) return !1
						}
						for (o in u)(a = s[o]) && (a.pg && a.t._kill(u) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete s[o]), c && (r[o] = 1);
						!this._firstPT && this._initted && this._enabled(!1, !1)
					}
				}
				return l
			}, o.invalidate = function() {
				return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], P.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
			}, o._enabled = function(t, e) {
				if (s || a.wake(), t && this._gc) {
					var n, i = this._targets;
					if (i)
						for (n = i.length; --n > -1;) this._siblings[n] = Y(i[n], this, !0);
					else this._siblings = Y(this.target, this, !0)
				}
				return P.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? M._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
			}, M.to = function(t, e, n) {
				return new M(t, e, n)
			}, M.from = function(t, e, n) {
				return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new M(t, e, n)
			}, M.fromTo = function(t, e, n, i) {
				return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new M(t, e, i)
			}, M.delayedCall = function(t, e, n, i, r) {
				return new M(e, 0, {
					delay: t,
					onComplete: e,
					onCompleteParams: n,
					onCompleteScope: i,
					onReverseComplete: e,
					onReverseCompleteParams: n,
					onReverseCompleteScope: i,
					immediateRender: !1,
					lazy: !1,
					useFrames: r,
					overwrite: 0
				})
			}, M.set = function(t, e) {
				return new M(t, 0, e)
			}, M.getTweensOf = function(t, e) {
				if (null == t) return [];
				t = "string" != typeof t ? t : M.selector(t) || t;
				var n, i, r, o;
				if ((d(t) || D(t)) && "number" != typeof t[0]) {
					for (n = t.length, i = []; --n > -1;) i = i.concat(M.getTweensOf(t[n], e));
					for (n = i.length; --n > -1;)
						for (o = i[n], r = n; --r > -1;) o === i[r] && i.splice(n, 1)
				} else
					for (i = Y(t).concat(), n = i.length; --n > -1;)(i[n]._gc || e && !i[n].isActive()) && i.splice(n, 1);
				return i
			}, M.killTweensOf = M.killDelayedCallsTo = function(t, e, n) {
				"object" == typeof e && (n = e, e = !1);
				for (var i = M.getTweensOf(t, e), r = i.length; --r > -1;) i[r]._kill(n, t)
			};
			var G = v("plugins.TweenPlugin", function(t, e) {
				this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = G.prototype
			}, !0);
			if (o = G.prototype, G.version = "1.10.1", G.API = 2, o._firstPT = null, o._addTween = function(t, e, n, i, r, o) {
					var a, s;
					return null != i && (a = "number" == typeof i || "=" !== i.charAt(1) ? Number(i) - n : parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2))) ? (this._firstPT = s = {
						_next: this._firstPT,
						t: t,
						p: e,
						s: n,
						c: a,
						f: "function" == typeof t[e],
						n: r || e,
						r: o
					}, s._next && (s._next._prev = s), s) : void 0
				}, o.setRatio = function(t) {
					for (var e, n = this._firstPT, i = 1e-6; n;) e = n.c * t + n.s, n.r ? e = Math.round(e) : i > e && e > -i && (e = 0), n.f ? n.t[n.p](e) : n.t[n.p] = e, n = n._next
				}, o._kill = function(t) {
					var e, n = this._overwriteProps,
						i = this._firstPT;
					if (null != t[this._propName]) this._overwriteProps = [];
					else
						for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1);
					for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
					return !1
				}, o._roundProps = function(t, e) {
					for (var n = this._firstPT; n;)(t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && (n.r = e), n = n._next
				}, M._onPluginEvent = function(t, e) {
					var n, i, r, o, a, s = e._firstPT;
					if ("_onInitAllProps" === t) {
						for (; s;) {
							for (a = s._next, i = r; i && i.pr > s.pr;) i = i._next;
							(s._prev = i ? i._prev : o) ? s._prev._next = s: r = s, (s._next = i) ? i._prev = s : o = s, s = a
						}
						s = e._firstPT = r
					}
					for (; s;) s.pg && "function" == typeof s.t[t] && s.t[t]() && (n = !0), s = s._next;
					return n
				}, G.activate = function(t) {
					for (var e = t.length; --e > -1;) t[e].API === G.API && (L[(new t[e])._propName] = t[e]);
					return !0
				}, g.plugin = function(t) {
					if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
					var e, n = t.propName,
						i = t.priority || 0,
						r = t.overwriteProps,
						o = {
							init: "_onInitTween",
							set: "setRatio",
							kill: "_kill",
							round: "_roundProps",
							initAll: "_onInitAllProps"
						},
						a = v("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
							G.call(this, n, i), this._overwriteProps = r || []
						}, t.global === !0),
						s = a.prototype = new G(n);
					s.constructor = a, a.API = t.API;
					for (e in o) "function" == typeof t[e] && (s[o[e]] = t[e]);
					return a.version = t.version, G.activate([a]), a
				}, i = t._gsQueue) {
				for (r = 0; r < i.length; r++) i[r]();
				for (o in p) p[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
			}
			s = !1
		}
	}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
	function(t, e) {
		"function" == typeof define && define.amd ? define(e) : t.BackgroundCheck = e(t)
	}(this, function() {
		"use strict";

		function t(t) {
			if (void 0 === t || void 0 === t.targets) throw "Missing attributes";
			R.debug = i(t.debug, !1), R.debugOverlay = i(t.debugOverlay, !1), R.targets = a(t.targets), R.images = a(t.images || "img", !0), R.changeParent = i(t.changeParent, !1), R.threshold = i(t.threshold, 50), R.minComplexity = i(t.minComplexity, 30), R.minOverlap = i(t.minOverlap, 50), R.windowEvents = i(t.windowEvents, !0), R.maxDuration = i(t.maxDuration, 500), R.mask = i(t.mask, {
				r: 0,
				g: 255,
				b: 0
			}), R.classes = i(t.classes, {
				dark: "background--dark",
				light: "background--light",
				complex: "background--complex"
			}), void 0 === E && (s(), E && (P.style.position = "fixed", P.style.top = "0px", P.style.left = "0px", P.style.width = "100%", P.style.height = "100%", window.addEventListener(D, T.bind(null, function() {
				c(), w()
			})), window.addEventListener("scroll", T.bind(null, w)), c(), w()))
		}

		function e() {
			E = null, P = null, A = null, R = {}, O && clearTimeout(O)
		}

		function n(t) {
			C("debug") && console.log(t)
		}

		function i(t, e) {
			return r(t, typeof e), void 0 === t ? e : t
		}

		function r(t, e) {
			if (void 0 !== t && typeof t !== e) throw "Incorrect attribute type"
		}

		function o(t) {
			for (var e, i, r = [], o = 0; o < t.length; o++)
				if (e = t[o], r.push(e), "IMG" !== e.tagName) {
					if (i = window.getComputedStyle(e).backgroundImage, i.split(/,url|, url/).length > 1) throw "Multiple backgrounds are not supported";
					if (!i || "none" === i) throw "Element is not an <img> but does not have a background-image";
					r[o] = {
						img: new Image,
						el: r[o]
					}, i = i.slice(4, -1), i = i.replace(/"/g, ""), r[o].img.src = i, n("CSS Image - " + i)
				}
			return r
		}

		function a(t, e) {
			var n = t;
			if ("string" == typeof t ? n = document.querySelectorAll(t) : t && 1 === t.nodeType && (n = [t]), !n || 0 === n.length || void 0 === n.length) throw "Elements not found";
			return e && (n = o(n)), n = Array.prototype.slice.call(n)
		}

		function s() {
			P = document.createElement("canvas"), P && P.getContext ? (A = P.getContext("2d"), E = !0) : E = !1, l()
		}

		function l() {
			C("debugOverlay") ? (P.style.opacity = .5, P.style.pointerEvents = "none", document.body.appendChild(P)) : P.parentNode && P.parentNode.removeChild(P)
		}

		function u(t) {
			var i = (new Date).getTime() - t;
			n("Duration: " + i + "ms"), i > C("maxDuration") && (console.log("BackgroundCheck - Killed"), g(), e())
		}

		function c() {
			M = {
				left: 0,
				top: 0,
				right: document.body.clientWidth,
				bottom: window.innerHeight
			}, P.width = document.body.clientWidth, P.height = window.innerHeight
		}

		function h(t, e, n) {
			var i, r;
			return -1 !== t.indexOf("px") ? i = parseFloat(t) : -1 !== t.indexOf("%") ? (i = parseFloat(t), r = i / 100, i = r * e, n && (i -= n * r)) : i = e, i
		}

		function f(t) {
			var e = window.getComputedStyle(t.el);
			t.el.style.backgroundRepeat = "no-repeat", t.el.style.backgroundOrigin = "padding-box";
			var n = e.backgroundSize.split(" "),
				i = n[0],
				r = void 0 === n[1] ? "auto" : n[1],
				o = t.el.clientWidth / t.el.clientHeight,
				a = t.img.naturalWidth / t.img.naturalHeight;
			"cover" === i ? o >= a ? (i = "100%", r = "auto") : (i = "auto", n[0] = "auto", r = "100%") : "contain" === i && (1 / a > 1 / o ? (i = "auto", n[0] = "auto", r = "100%") : (i = "100%", r = "auto")), i = "auto" === i ? t.img.naturalWidth : h(i, t.el.clientWidth), r = "auto" === r ? i / t.img.naturalWidth * t.img.naturalHeight : h(r, t.el.clientHeight), "auto" === n[0] && "auto" !== n[1] && (i = r / t.img.naturalHeight * t.img.naturalWidth);
			var s = e.backgroundPosition;
			"top" === s ? s = "50% 0%" : "left" === s ? s = "0% 50%" : "right" === s ? s = "100% 50%" : "bottom" === s ? s = "50% 100%" : "center" === s && (s = "50% 50%"), s = s.split(" ");
			var l, u;
			return 4 === s.length ? (l = s[1], u = s[3]) : (l = s[0], u = s[1]), u = u || "50%", l = h(l, t.el.clientWidth, i), u = h(u, t.el.clientHeight, r), 4 === s.length && ("right" === s[0] && (l = t.el.clientWidth - t.img.naturalWidth - l), "bottom" === s[2] && (u = t.el.clientHeight - t.img.naturalHeight - u)), l += t.el.getBoundingClientRect().left, u += t.el.getBoundingClientRect().top, {
				left: Math.floor(l),
				right: Math.floor(l + i),
				top: Math.floor(u),
				bottom: Math.floor(u + r),
				width: Math.floor(i),
				height: Math.floor(r)
			}
		}

		function d(t) {
			var e, n, i;
			if (t.nodeType) {
				var r = t.getBoundingClientRect();
				e = {
					left: r.left,
					right: r.right,
					top: r.top,
					bottom: r.bottom,
					width: r.width,
					height: r.height
				}, i = t.parentNode, n = t
			} else e = f(t), i = t.el, n = t.img;
			i = i.getBoundingClientRect(), e.imageTop = 0, e.imageLeft = 0, e.imageWidth = n.naturalWidth, e.imageHeight = n.naturalHeight;
			var o, a = e.imageHeight / e.height;
			return e.top < i.top && (o = i.top - e.top, e.imageTop = a * o, e.imageHeight -= a * o, e.top += o, e.height -= o), e.left < i.left && (o = i.left - e.left, e.imageLeft += a * o, e.imageWidth -= a * o, e.width -= o, e.left += o), e.bottom > i.bottom && (o = e.bottom - i.bottom, e.imageHeight -= a * o, e.height -= o), e.right > i.right && (o = e.right - i.right, e.imageWidth -= a * o, e.width -= o), e.imageTop = Math.floor(e.imageTop), e.imageLeft = Math.floor(e.imageLeft), e.imageHeight = Math.floor(e.imageHeight), e.imageWidth = Math.floor(e.imageWidth), e
		}

		function p(t) {
			var e = d(t);
			t = t.nodeType ? t : t.img, e.imageWidth > 0 && e.imageHeight > 0 && e.width > 0 && e.height > 0 ? A.drawImage(t, e.imageLeft, e.imageTop, e.imageWidth, e.imageHeight, e.left, e.top, e.width, e.height) : n("Skipping image - " + t.src + " - area too small")
		}

		function m(t, e, n) {
			var i = t.className;
			switch (n) {
				case "add":
					i += " " + e;
					break;
				case "remove":
					var r = new RegExp("(?:^|\\s)" + e + "(?!\\S)", "g");
					i = i.replace(r, "")
			}
			t.className = i.trim()
		}

		function g(t) {
			for (var e, n = t ? [t] : C("targets"), i = 0; i < n.length; i++) e = n[i], e = C("changeParent") ? e.parentNode : e, m(e, C("classes").light, "remove"), m(e, C("classes").dark, "remove"), m(e, C("classes").complex, "remove")
		}

		function v(t) {
			var e, i, r, o, a = t.getBoundingClientRect(),
				s = 0,
				l = 0,
				u = 0,
				c = 0,
				h = C("mask");
			if (a.width > 0 && a.height > 0) {
				g(t), t = C("changeParent") ? t.parentNode : t, i = A.getImageData(a.left, a.top, a.width, a.height).data;
				for (var f = 0; f < i.length; f += 4) i[f] === h.r && i[f + 1] === h.g && i[f + 2] === h.b ? c++ : (s++, e = .2126 * i[f] + .7152 * i[f + 1] + .0722 * i[f + 2], r = e - u, l += r * r, u += r / s);
				c <= i.length / 4 * (1 - C("minOverlap") / 100) && (o = Math.sqrt(l / s) / 255, u /= 255, n("Target: " + t.className + " lum: " + u + " var: " + o), m(t, u <= C("threshold") / 100 ? C("classes").dark : C("classes").light, "add"), o > C("minComplexity") / 100 && m(t, C("classes").complex, "add"))
			}
		}

		function _(t, e) {
			return t = (t.nodeType ? t : t.el).getBoundingClientRect(), e = e === M ? e : (e.nodeType ? e : e.el).getBoundingClientRect(), !(t.right < e.left || t.left > e.right || t.top > e.bottom || t.bottom < e.top)
		}

		function y(t) {
			for (var e, n = (new Date).getTime(), i = t && ("IMG" === t.tagName || t.img) ? "image" : "targets", r = t ? !1 : !0, o = C("targets").length, a = 0; o > a; a++) e = C("targets")[a], _(e, M) && ("targets" !== i || t && t !== e ? "image" === i && _(e, t) && v(e) : (r = !0, v(e)));
			if ("targets" === i && !r) throw t + " is not a target";
			u(n)
		}

		function x(t) {
			var e = function(t) {
					var e = 0;
					return "static" !== window.getComputedStyle(t).position && (e = parseInt(window.getComputedStyle(t).zIndex, 10) || 0, e >= 0 && e++), e
				},
				n = t.parentNode,
				i = n ? e(n) : 0,
				r = e(t);
			return 1e5 * i + r
		}

		function b(t) {
			var e = !1;
			return t.sort(function(t, n) {
				t = t.nodeType ? t : t.el, n = n.nodeType ? n : n.el;
				var i = t.compareDocumentPosition(n),
					r = 0;
				return t = x(t), n = x(n), t > n && (e = !0), t === n && 2 === i ? r = 1 : t === n && 4 === i && (r = -1), r || t - n
			}), n("Sorted: " + e), e && n(t), e
		}

		function w(t, e, i) {
			if (E) {
				var r = C("mask");
				n("--- BackgroundCheck ---"), n("onLoad event: " + (i && i.src)), e !== !0 && (A.clearRect(0, 0, P.width, P.height), A.fillStyle = "rgb(" + r.r + ", " + r.g + ", " + r.b + ")", A.fillRect(0, 0, P.width, P.height));
				for (var o, a, s = i ? [i] : C("images"), l = b(s), u = !1, c = 0; c < s.length; c++) o = s[c], _(o, M) && (a = o.nodeType ? o : o.img, 0 === a.naturalWidth ? (u = !0, n("Loading... " + o.src), a.removeEventListener("load", w), l ? a.addEventListener("load", w.bind(null, null, !1, null)) : a.addEventListener("load", w.bind(null, t, !0, o))) : (n("Drawing: " + o.src), p(o)));
				i || u ? i && y(i) : y(t)
			}
		}

		function T(t) {
			C("windowEvents") === !0 && (O && clearTimeout(O), O = setTimeout(t, 200))
		}

		function S(t, e) {
			if (void 0 === R[t]) throw "Unknown property - " + t;
			if (void 0 === e) throw "Missing value for " + t;
			if ("targets" === t || "images" === t) try {
				e = a("images" !== t || e ? e : "img", "images" === t ? !0 : !1)
			} catch (n) {
				throw e = [], n
			} else r(e, typeof R[t]);
			g(), R[t] = e, w(), "debugOverlay" === t && l()
		}

		function C(t) {
			if (void 0 === R[t]) throw "Unknown property - " + t;
			return R[t]
		}

		function k() {
			for (var t, e = C("images"), n = [], i = 0; i < e.length; i++) t = d(e[i]), n.push(t);
			return n
		}
		var E, P, A, O, M, D = void 0 !== window.orientation ? "orientationchange" : "resize",
			R = {};
		return {
			init: t,
			destroy: e,
			refresh: w,
			set: S,
			get: C,
			getImageData: k
		}
	}),
	/*!
	 * imagesLoaded PACKAGED v3.1.8
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
	/*!
	 * EventEmitter v4.2.6 - git.io/ee
	 * Oliver Caldwell
	 * MIT license
	 * @preserve
	 */
	function() {
		function t() {}

		function e(t, e) {
			for (var n = t.length; n--;)
				if (t[n].listener === e) return n;
			return -1
		}

		function n(t) {
			return function() {
				return this[t].apply(this, arguments)
			}
		}
		var i = t.prototype,
			r = this,
			o = r.EventEmitter;
		i.getListeners = function(t) {
			var e, n, i = this._getEvents();
			if ("object" == typeof t) {
				e = {};
				for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
			} else e = i[t] || (i[t] = []);
			return e
		}, i.flattenListeners = function(t) {
			var e, n = [];
			for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
			return n
		}, i.getListenersAsObject = function(t) {
			var e, n = this.getListeners(t);
			return n instanceof Array && (e = {}, e[t] = n), e || n
		}, i.addListener = function(t, n) {
			var i, r = this.getListenersAsObject(t),
				o = "object" == typeof n;
			for (i in r) r.hasOwnProperty(i) && -1 === e(r[i], n) && r[i].push(o ? n : {
				listener: n,
				once: !1
			});
			return this
		}, i.on = n("addListener"), i.addOnceListener = function(t, e) {
			return this.addListener(t, {
				listener: e,
				once: !0
			})
		}, i.once = n("addOnceListener"), i.defineEvent = function(t) {
			return this.getListeners(t), this
		}, i.defineEvents = function(t) {
			for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
			return this
		}, i.removeListener = function(t, n) {
			var i, r, o = this.getListenersAsObject(t);
			for (r in o) o.hasOwnProperty(r) && (i = e(o[r], n), -1 !== i && o[r].splice(i, 1));
			return this
		}, i.off = n("removeListener"), i.addListeners = function(t, e) {
			return this.manipulateListeners(!1, t, e)
		}, i.removeListeners = function(t, e) {
			return this.manipulateListeners(!0, t, e)
		}, i.manipulateListeners = function(t, e, n) {
			var i, r, o = t ? this.removeListener : this.addListener,
				a = t ? this.removeListeners : this.addListeners;
			if ("object" != typeof e || e instanceof RegExp)
				for (i = n.length; i--;) o.call(this, e, n[i]);
			else
				for (i in e) e.hasOwnProperty(i) && (r = e[i]) && ("function" == typeof r ? o.call(this, i, r) : a.call(this, i, r));
			return this
		}, i.removeEvent = function(t) {
			var e, n = typeof t,
				i = this._getEvents();
			if ("string" === n) delete i[t];
			else if ("object" === n)
				for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
			else delete this._events;
			return this
		}, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(t, e) {
			var n, i, r, o, a = this.getListenersAsObject(t);
			for (r in a)
				if (a.hasOwnProperty(r))
					for (i = a[r].length; i--;) n = a[r][i], n.once === !0 && this.removeListener(t, n.listener), o = n.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, n.listener);
			return this
		}, i.trigger = n("emitEvent"), i.emit = function(t) {
			var e = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(t, e)
		}, i.setOnceReturnValue = function(t) {
			return this._onceReturnValue = t, this
		}, i._getOnceReturnValue = function() {
			return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
		}, i._getEvents = function() {
			return this._events || (this._events = {})
		}, t.noConflict = function() {
			return r.EventEmitter = o, t
		}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
			return t
		}) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
	}.call(this),
	/*!
	 * eventie v1.0.4
	 * event binding helper
	 *   eventie.bind( elem, 'click', myFn )
	 *   eventie.unbind( elem, 'click', myFn )
	 */
	function(t) {
		function e(e) {
			var n = t.event;
			return n.target = n.target || n.srcElement || e, n
		}
		var n = document.documentElement,
			i = function() {};
		n.addEventListener ? i = function(t, e, n) {
			t.addEventListener(e, n, !1)
		} : n.attachEvent && (i = function(t, n, i) {
			t[n + i] = i.handleEvent ? function() {
				var n = e(t);
				i.handleEvent.call(i, n)
			} : function() {
				var n = e(t);
				i.call(t, n)
			}, t.attachEvent("on" + n, t[n + i])
		});
		var r = function() {};
		n.removeEventListener ? r = function(t, e, n) {
			t.removeEventListener(e, n, !1)
		} : n.detachEvent && (r = function(t, e, n) {
			t.detachEvent("on" + e, t[e + n]);
			try {
				delete t[e + n]
			} catch (i) {
				t[e + n] = void 0
			}
		});
		var o = {
			bind: i,
			unbind: r
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", o) : t.eventie = o
	}(this),
	/*!
	 * imagesLoaded v3.1.8
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
	function(t, e) {
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
			return e(t, n, i)
		}) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
	}(window, function(t, e, n) {
		function i(t, e) {
			for (var n in e) t[n] = e[n];
			return t
		}

		function r(t) {
			return "[object Array]" === f.call(t)
		}

		function o(t) {
			var e = [];
			if (r(t)) e = t;
			else if ("number" == typeof t.length)
				for (var n = 0, i = t.length; i > n; n++) e.push(t[n]);
			else e.push(t);
			return e
		}

		function a(t, e, n) {
			if (!(this instanceof a)) return new a(t, e);
			"string" == typeof t && (t = document.querySelectorAll(t)), this.elements = o(t), this.options = i({}, this.options), "function" == typeof e ? n = e : i(this.options, e), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred);
			var r = this;
			setTimeout(function() {
				r.check()
			})
		}

		function s(t) {
			this.img = t
		}

		function l(t) {
			this.src = t, d[t] = this
		}
		var u = t.jQuery,
			c = t.console,
			h = "undefined" != typeof c,
			f = Object.prototype.toString;
		a.prototype = new e, a.prototype.options = {}, a.prototype.getImages = function() {
			this.images = [];
			for (var t = 0, e = this.elements.length; e > t; t++) {
				var n = this.elements[t];
				"IMG" === n.nodeName && this.addImage(n);
				var i = n.nodeType;
				if (i && (1 === i || 9 === i || 11 === i))
					for (var r = n.querySelectorAll("img"), o = 0, a = r.length; a > o; o++) {
						var s = r[o];
						this.addImage(s)
					}
			}
		}, a.prototype.addImage = function(t) {
			var e = new s(t);
			this.images.push(e)
		}, a.prototype.check = function() {
			function t(t, r) {
				return e.options.debug && h && c.log("confirm", t, r), e.progress(t), n++, n === i && e.complete(), !0
			}
			var e = this,
				n = 0,
				i = this.images.length;
			if (this.hasAnyBroken = !1, !i) return void this.complete();
			for (var r = 0; i > r; r++) {
				var o = this.images[r];
				o.on("confirm", t), o.check()
			}
		}, a.prototype.progress = function(t) {
			this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
			var e = this;
			setTimeout(function() {
				e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
			})
		}, a.prototype.complete = function() {
			var t = this.hasAnyBroken ? "fail" : "done";
			this.isComplete = !0;
			var e = this;
			setTimeout(function() {
				if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
					var n = e.hasAnyBroken ? "reject" : "resolve";
					e.jqDeferred[n](e)
				}
			})
		}, u && (u.fn.imagesLoaded = function(t, e) {
			var n = new a(this, t, e);
			return n.jqDeferred.promise(u(this))
		}), s.prototype = new e, s.prototype.check = function() {
			var t = d[this.img.src] || new l(this.img.src);
			if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
			if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
			var e = this;
			t.on("confirm", function(t, n) {
				return e.confirm(t.isLoaded, n), !0
			}), t.check()
		}, s.prototype.confirm = function(t, e) {
			this.isLoaded = t, this.emit("confirm", this, e)
		};
		var d = {};
		return l.prototype = new e, l.prototype.check = function() {
			if (!this.isChecked) {
				var t = new Image;
				n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.src, this.isChecked = !0
			}
		}, l.prototype.handleEvent = function(t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, l.prototype.onload = function(t) {
			this.confirm(!0, "onload"), this.unbindProxyEvents(t)
		}, l.prototype.onerror = function(t) {
			this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
		}, l.prototype.confirm = function(t, e) {
			this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
		}, l.prototype.unbindProxyEvents = function(t) {
			n.unbind(t.target, "load", this), n.unbind(t.target, "error", this)
		}, a
	}),
	function(t) {
		t.fn.ahPlaceholder = function(e) {
			var n = {
					placeholderColor: "silver",
					placeholderAttr: "title",
					likeApple: !1
				},
				i = t.extend({}, n, e),
				r = [" ", "0", "9", "16", "17", "32", "27", "37", "38", "39", "40", "91", "92", "93", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", " "].join("@"),
				o = function() {
					return document.all ? function(t) {
						return t.keyCode
					} : document.getElementById ? function(t) {
						return t.keyCode ? t.keyCode : t.charCode
					} : document.layers ? function(t) {
						return t.which
					} : void 0
				}(),
				a = function() {
					if (!("placeholder" === i.placeholderAttr && "placeholder" in document.createElement("input"))) {
						t.data(this, "placeholder-string", t(this).attr(i.placeholderAttr)), t.data(this, "placeholder-color", t(this).css("color"));
						var e = t.data(this, "placeholder-string"),
							n = this,
							r = t(this);
						"" === n.value && (n.value = e, r.css("color", i.placeholderColor)), i.likeApple === !0 ? (r.bind("mousedown", c), r.bind("keydown", s), r.bind("keyup", u)) : (r.bind("focus", l), r.bind("blur", u)), r.closest("form").submit(function() {
							return n.value === t.data(n, "placeholder-string") && r.css("color") === t("<div/>").css("color", i.placeholderColor).css("color") && (n.value = ""), !0
						})
					}
				},
				s = function(e) {
					if (this.value === t.data(this, "placeholder-string")) {
						var n = o(e);
						if (-1 !== r.indexOf("@" + n + "@")) return 9 === n;
						f(this)
					}
				},
				l = function() {
					this.value === t.data(this, "placeholder-string") && f(this)
				},
				u = function(t) {
					"" === this.value && (h(this), "keyup" === t.type && c.apply(this))
				},
				c = function() {
					if (this.value === t.data(this, "placeholder-string")) {
						if (t(this).focus(), this.createTextRange) {
							var e = this.createTextRange();
							e.collapse(), e.moveEnd("character", 0), e.moveStart("character", 0), setTimeout(function() {
								e.select()
							}, 17)
						} else this.setSelectionRange && this.setSelectionRange(0, 0);
						return !1
					}
				},
				h = function(e) {
					e.value = t.data(e, "placeholder-string"), t(e).css("color", i.placeholderColor)
				},
				f = function(e) {
					e.value = "", t(e).css("color", t.data(e, "placeholder-color"))
				};
			return this.each(function() {
				a.apply(this)
			}), this
		}
	}(jQuery),
	/*!
	 * jQuery Cookie Plugin v1.4.1
	 * https://github.com/carhartl/jquery-cookie
	 *
	 * Copyright 2006, 2014 Klaus Hartl
	 * Released under the MIT license
	 */
	function(t) {
		"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function(t) {
		function e(t) {
			return s.raw ? t : encodeURIComponent(t)
		}

		function n(t) {
			return s.raw ? t : decodeURIComponent(t)
		}

		function i(t) {
			return e(s.json ? JSON.stringify(t) : String(t))
		}

		function r(t) {
			0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
			try {
				return t = decodeURIComponent(t.replace(a, " ")), s.json ? JSON.parse(t) : t
			} catch (e) {}
		}

		function o(e, n) {
			var i = s.raw ? e : r(e);
			return t.isFunction(n) ? n(i) : i
		}
		var a = /\+/g,
			s = t.cookie = function(r, a, l) {
				if (arguments.length > 1 && !t.isFunction(a)) {
					if (l = t.extend({}, s.defaults, l), "number" == typeof l.expires) {
						var u = l.expires,
							c = l.expires = new Date;
						c.setMilliseconds(c.getMilliseconds() + 864e5 * u)
					}
					return document.cookie = [e(r), "=", i(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
				}
				for (var h = r ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], d = 0, p = f.length; p > d; d++) {
					var m = f[d].split("="),
						g = n(m.shift()),
						v = m.join("=");
					if (r === g) {
						h = o(v, a);
						break
					}
					r || void 0 === (v = o(v)) || (h[g] = v)
				}
				return h
			};
		s.defaults = {}, t.removeCookie = function(e, n) {
			return t.cookie(e, "", t.extend({}, n, {
				expires: -1
			})), !t.cookie(e)
		}
	}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
		def: "easeOutQuad",
		swing: function(t, e, n, i, r) {
			return jQuery.easing[jQuery.easing.def](t, e, n, i, r)
		},
		easeInQuad: function(t, e, n, i, r) {
			return i * (e /= r) * e + n
		},
		easeOutQuad: function(t, e, n, i, r) {
			return -i * (e /= r) * (e - 2) + n
		},
		easeInOutQuad: function(t, e, n, i, r) {
			return (e /= r / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
		},
		easeInCubic: function(t, e, n, i, r) {
			return i * (e /= r) * e * e + n
		},
		easeOutCubic: function(t, e, n, i, r) {
			return i * ((e = e / r - 1) * e * e + 1) + n
		},
		easeInOutCubic: function(t, e, n, i, r) {
			return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
		},
		easeInQuart: function(t, e, n, i, r) {
			return i * (e /= r) * e * e * e + n
		},
		easeOutQuart: function(t, e, n, i, r) {
			return -i * ((e = e / r - 1) * e * e * e - 1) + n
		},
		easeInOutQuart: function(t, e, n, i, r) {
			return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
		},
		easeInQuint: function(t, e, n, i, r) {
			return i * (e /= r) * e * e * e * e + n
		},
		easeOutQuint: function(t, e, n, i, r) {
			return i * ((e = e / r - 1) * e * e * e * e + 1) + n
		},
		easeInOutQuint: function(t, e, n, i, r) {
			return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
		},
		easeInSine: function(t, e, n, i, r) {
			return -i * Math.cos(e / r * (Math.PI / 2)) + i + n
		},
		easeOutSine: function(t, e, n, i, r) {
			return i * Math.sin(e / r * (Math.PI / 2)) + n
		},
		easeInOutSine: function(t, e, n, i, r) {
			return -i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
		},
		easeInExpo: function(t, e, n, i, r) {
			return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
		},
		easeOutExpo: function(t, e, n, i, r) {
			return e == r ? n + i : i * (-Math.pow(2, -10 * e / r) + 1) + n
		},
		easeInOutExpo: function(t, e, n, i, r) {
			return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
		},
		easeInCirc: function(t, e, n, i, r) {
			return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + n
		},
		easeOutCirc: function(t, e, n, i, r) {
			return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
		},
		easeInOutCirc: function(t, e, n, i, r) {
			return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
		},
		easeInElastic: function(t, e, n, i, r) {
			var o = 1.70158,
				a = 0,
				s = i;
			if (0 == e) return n;
			if (1 == (e /= r)) return n + i;
			if (a || (a = .3 * r), s < Math.abs(i)) {
				s = i;
				var o = a / 4
			} else var o = a / (2 * Math.PI) * Math.asin(i / s);
			return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / a)) + n
		},
		easeOutElastic: function(t, e, n, i, r) {
			var o = 1.70158,
				a = 0,
				s = i;
			if (0 == e) return n;
			if (1 == (e /= r)) return n + i;
			if (a || (a = .3 * r), s < Math.abs(i)) {
				s = i;
				var o = a / 4
			} else var o = a / (2 * Math.PI) * Math.asin(i / s);
			return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * r - o) * Math.PI / a) + i + n
		},
		easeInOutElastic: function(t, e, n, i, r) {
			var o = 1.70158,
				a = 0,
				s = i;
			if (0 == e) return n;
			if (2 == (e /= r / 2)) return n + i;
			if (a || (a = .3 * r * 1.5), s < Math.abs(i)) {
				s = i;
				var o = a / 4
			} else var o = a / (2 * Math.PI) * Math.asin(i / s);
			return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / a) + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / a) * .5 + i + n
		},
		easeInBack: function(t, e, n, i, r, o) {
			return void 0 == o && (o = 1.70158), i * (e /= r) * e * ((o + 1) * e - o) + n
		},
		easeOutBack: function(t, e, n, i, r, o) {
			return void 0 == o && (o = 1.70158), i * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + n
		},
		easeInOutBack: function(t, e, n, i, r, o) {
			return void 0 == o && (o = 1.70158), (e /= r / 2) < 1 ? i / 2 * e * e * (((o *= 1.525) + 1) * e - o) + n : i / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + n
		},
		easeInBounce: function(t, e, n, i, r) {
			return i - jQuery.easing.easeOutBounce(t, r - e, 0, i, r) + n
		},
		easeOutBounce: function(t, e, n, i, r) {
			return (e /= r) < 1 / 2.75 ? 7.5625 * i * e * e + n : 2 / 2.75 > e ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : 2.5 / 2.75 > e ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
		},
		easeInOutBounce: function(t, e, n, i, r) {
			return r / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
		}
	}),
	function(t) {
		"use strict";
		t.fn.fitVids = function(e) {
			var n = {
				customSelector: null,
				ignore: null
			};
			if (!document.getElementById("fit-vids-style")) {
				var i = document.head || document.getElementsByTagName("head")[0],
					r = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
					o = document.createElement("div");
				o.innerHTML = '<p>x</p><style id="fit-vids-style">' + r + "</style>", i.appendChild(o.childNodes[1])
			}
			return e && t.extend(n, e), this.each(function() {
				var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
				n.customSelector && e.push(n.customSelector);
				var i = ".fitvidsignore";
				n.ignore && (i = i + ", " + n.ignore);
				var r = t(this).find(e.join(","));
				r = r.not("object object"), r = r.not(i), r.each(function(e) {
					var n = t(this);
					if (!(n.parents(i).length > 0 || "embed" === this.tagName.toLowerCase() && n.parent("object").length || n.parent(".fluid-width-video-wrapper").length)) {
						n.css("height") || n.css("width") || !isNaN(n.attr("height")) && !isNaN(n.attr("width")) || (n.attr("height", 9), n.attr("width", 16));
						var r = "object" === this.tagName.toLowerCase() || n.attr("height") && !isNaN(parseInt(n.attr("height"), 10)) ? parseInt(n.attr("height"), 10) : n.height(),
							o = isNaN(parseInt(n.attr("width"), 10)) ? n.width() : parseInt(n.attr("width"), 10),
							a = r / o;
						if (!n.attr("id")) {
							var s = "fitvid" + e;
							n.attr("id", s)
						}
						n.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * a + "%"), n.removeAttr("height").removeAttr("width")
					}
				})
			})
		}
	}(window.jQuery || window.Zepto),
	function(t) {
		"undefined" != typeof module && module.exports ? module.exports = t : t(jQuery, window, document)
	}(function(t) {
		! function(e) {
			var n = "function" == typeof define && define.amd,
				i = "undefined" != typeof module && module.exports,
				r = "https:" == document.location.protocol ? "https:" : "http:",
				o = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
			n || (i ? require("jquery-mousewheel")(t) : t.event.special.mousewheel || t("head").append(decodeURI("%3Cscript src=" + r + "//" + o + "%3E%3C/script%3E"))), e()
		}(function() {
			var e, n = "mCustomScrollbar",
				i = "mCS",
				r = ".mCustomScrollbar",
				o = {
					setTop: 0,
					setLeft: 0,
					axis: "y",
					scrollbarPosition: "inside",
					scrollInertia: 950,
					autoDraggerLength: !0,
					alwaysShowScrollbar: 0,
					snapOffset: 0,
					mouseWheel: {
						enable: !0,
						scrollAmount: "auto",
						axis: "y",
						deltaFactor: "auto",
						disableOver: ["select", "option", "keygen", "datalist", "textarea"]
					},
					scrollButtons: {
						scrollType: "stepless",
						scrollAmount: "auto"
					},
					keyboard: {
						enable: !0,
						scrollType: "stepless",
						scrollAmount: "auto"
					},
					contentTouchScroll: 25,
					advanced: {
						autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
						updateOnContentResize: !0,
						updateOnImageLoad: !0,
						autoUpdateTimeout: 60
					},
					theme: "light",
					callbacks: {
						onTotalScrollOffset: 0,
						onTotalScrollBackOffset: 0,
						alwaysTriggerOffsets: !0
					}
				},
				a = 0,
				s = {},
				l = window.attachEvent && !window.addEventListener ? 1 : 0,
				u = !1,
				c = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
				h = {
					init: function(e) {
						var e = t.extend(!0, {}, o, e),
							n = f.call(this);
						if (e.live) {
							var l = e.liveSelector || this.selector || r,
								u = t(l);
							if ("off" === e.live) return void p(l);
							s[l] = setTimeout(function() {
								u.mCustomScrollbar(e), "once" === e.live && u.length && p(l)
							}, 500)
						} else p(l);
						return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : m(e.axis), e.scrollInertia = e.scrollInertia > 0 && e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel && 1 == e.mouseWheel && (e.mouseWheel = {
							enable: !0,
							scrollAmount: "auto",
							axis: "y",
							preventDefault: !1,
							deltaFactor: "auto",
							normalizeDelta: !1,
							invert: !1
						}), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = g(e.scrollButtons.scrollType), d(e), t(n).each(function() {
							var n = t(this);
							if (!n.data(i)) {
								n.data(i, {
									idx: ++a,
									opt: e,
									scrollRatio: {
										y: null,
										x: null
									},
									overflowed: null,
									contentReset: {
										y: null,
										x: null
									},
									bindEvents: !1,
									tweenRunning: !1,
									sequential: {},
									langDir: n.css("direction"),
									cbOffsets: null,
									trigger: null
								});
								var r = n.data(i),
									o = r.opt,
									s = n.data("mcs-axis"),
									l = n.data("mcs-scrollbar-position"),
									u = n.data("mcs-theme");
								s && (o.axis = s), l && (o.scrollbarPosition = l), u && (o.theme = u, d(o)), v.call(this), t("#mCSB_" + r.idx + "_container img:not(." + c[2] + ")").addClass(c[2]), h.update.call(null, n)
							}
						})
					},
					update: function(e, n) {
						var r = e || f.call(this);
						return t(r).each(function() {
							var e = t(this);
							if (e.data(i)) {
								var r = e.data(i),
									o = r.opt,
									a = t("#mCSB_" + r.idx + "_container"),
									s = [t("#mCSB_" + r.idx + "_dragger_vertical"), t("#mCSB_" + r.idx + "_dragger_horizontal")];
								if (!a.length) return;
								r.tweenRunning && $(e), e.hasClass(c[3]) && e.removeClass(c[3]), e.hasClass(c[4]) && e.removeClass(c[4]), b.call(this), y.call(this), "y" === o.axis || o.advanced.autoExpandHorizontalScroll || a.css("width", _(a.children())), r.overflowed = C.call(this), A.call(this), o.autoDraggerLength && w.call(this), T.call(this), E.call(this);
								var l = [Math.abs(a[0].offsetTop), Math.abs(a[0].offsetLeft)];
								"x" !== o.axis && (r.overflowed[0] ? s[0].height() > s[0].parent().height() ? k.call(this) : (V(e, l[0].toString(), {
									dir: "y",
									dur: 0,
									overwrite: "none"
								}), r.contentReset.y = null) : (k.call(this), "y" === o.axis ? P.call(this) : "yx" === o.axis && r.overflowed[1] && V(e, l[1].toString(), {
									dir: "x",
									dur: 0,
									overwrite: "none"
								}))), "y" !== o.axis && (r.overflowed[1] ? s[1].width() > s[1].parent().width() ? k.call(this) : (V(e, l[1].toString(), {
									dir: "x",
									dur: 0,
									overwrite: "none"
								}), r.contentReset.x = null) : (k.call(this), "x" === o.axis ? P.call(this) : "yx" === o.axis && r.overflowed[0] && V(e, l[0].toString(), {
									dir: "y",
									dur: 0,
									overwrite: "none"
								}))), n && r && (2 === n && o.callbacks.onImageLoad && "function" == typeof o.callbacks.onImageLoad ? o.callbacks.onImageLoad.call(this) : 3 === n && o.callbacks.onSelectorChange && "function" == typeof o.callbacks.onSelectorChange ? o.callbacks.onSelectorChange.call(this) : o.callbacks.onUpdate && "function" == typeof o.callbacks.onUpdate && o.callbacks.onUpdate.call(this)), U.call(this)
							}
						})
					},
					scrollTo: function(e, n) {
						if ("undefined" != typeof e && null != e) {
							var r = f.call(this);
							return t(r).each(function() {
								var r = t(this);
								if (r.data(i)) {
									var o = r.data(i),
										a = o.opt,
										s = {
											trigger: "external",
											scrollInertia: a.scrollInertia,
											scrollEasing: "mcsEaseInOut",
											moveDragger: !1,
											timeout: 60,
											callbacks: !0,
											onStart: !0,
											onUpdate: !0,
											onComplete: !0
										},
										l = t.extend(!0, {}, s, n),
										u = W.call(this, e),
										c = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
									u[0] = X.call(this, u[0], "y"), u[1] = X.call(this, u[1], "x"), l.moveDragger && (u[0] *= o.scrollRatio.y, u[1] *= o.scrollRatio.x), l.dur = c, setTimeout(function() {
										null !== u[0] && "undefined" != typeof u[0] && "x" !== a.axis && o.overflowed[0] && (l.dir = "y", l.overwrite = "all", V(r, u[0].toString(), l)), null !== u[1] && "undefined" != typeof u[1] && "y" !== a.axis && o.overflowed[1] && (l.dir = "x", l.overwrite = "none", V(r, u[1].toString(), l))
									}, l.timeout)
								}
							})
						}
					},
					stop: function() {
						var e = f.call(this);
						return t(e).each(function() {
							var e = t(this);
							e.data(i) && $(e)
						})
					},
					disable: function(e) {
						var n = f.call(this);
						return t(n).each(function() {
							var n = t(this);
							if (n.data(i)) {
								{
									n.data(i)
								}
								U.call(this, "remove"), P.call(this), e && k.call(this), A.call(this, !0), n.addClass(c[3])
							}
						})
					},
					destroy: function() {
						var e = f.call(this);
						return t(e).each(function() {
							var r = t(this);
							if (r.data(i)) {
								var o = r.data(i),
									a = o.opt,
									s = t("#mCSB_" + o.idx),
									l = t("#mCSB_" + o.idx + "_container"),
									u = t(".mCSB_" + o.idx + "_scrollbar");
								a.live && p(a.liveSelector || t(e).selector), U.call(this, "remove"), P.call(this), k.call(this), r.removeData(i), J(this, "mcs"), u.remove(), l.find("img." + c[2]).removeClass(c[2]), s.replaceWith(l.contents()), r.removeClass(n + " _" + i + "_" + o.idx + " " + c[6] + " " + c[7] + " " + c[5] + " " + c[3]).addClass(c[4])
							}
						})
					}
				},
				f = function() {
					return "object" != typeof t(this) || t(this).length < 1 ? r : this
				},
				d = function(e) {
					var n = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
						i = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
						r = ["minimal", "minimal-dark"],
						o = ["minimal", "minimal-dark"],
						a = ["minimal", "minimal-dark"];
					e.autoDraggerLength = t.inArray(e.theme, n) > -1 ? !1 : e.autoDraggerLength, e.autoExpandScrollbar = t.inArray(e.theme, i) > -1 ? !1 : e.autoExpandScrollbar, e.scrollButtons.enable = t.inArray(e.theme, r) > -1 ? !1 : e.scrollButtons.enable, e.autoHideScrollbar = t.inArray(e.theme, o) > -1 ? !0 : e.autoHideScrollbar, e.scrollbarPosition = t.inArray(e.theme, a) > -1 ? "outside" : e.scrollbarPosition
				},
				p = function(t) {
					s[t] && (clearTimeout(s[t]), J(s, t))
				},
				m = function(t) {
					return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
				},
				g = function(t) {
					return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
				},
				v = function() {
					var e = t(this),
						r = e.data(i),
						o = r.opt,
						a = o.autoExpandScrollbar ? " " + c[1] + "_expand" : "",
						s = ["<div id='mCSB_" + r.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + r.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + a + "'><div class='" + c[12] + "'><div id='mCSB_" + r.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + r.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + r.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + a + "'><div class='" + c[12] + "'><div id='mCSB_" + r.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
						l = "yx" === o.axis ? "mCSB_vertical_horizontal" : "x" === o.axis ? "mCSB_horizontal" : "mCSB_vertical",
						u = "yx" === o.axis ? s[0] + s[1] : "x" === o.axis ? s[1] : s[0],
						h = "yx" === o.axis ? "<div id='mCSB_" + r.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
						f = o.autoHideScrollbar ? " " + c[6] : "",
						d = "x" !== o.axis && "rtl" === r.langDir ? " " + c[7] : "";
					o.setWidth && e.css("width", o.setWidth), o.setHeight && e.css("height", o.setHeight), o.setLeft = "y" !== o.axis && "rtl" === r.langDir ? "989999px" : o.setLeft, e.addClass(n + " _" + i + "_" + r.idx + f + d).wrapInner("<div id='mCSB_" + r.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + l + "'><div id='mCSB_" + r.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir=" + r.langDir + " /></div>");
					var p = t("#mCSB_" + r.idx),
						m = t("#mCSB_" + r.idx + "_container");
					"y" === o.axis || o.advanced.autoExpandHorizontalScroll || m.css("width", _(m.children())), "outside" === o.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), p.addClass("mCSB_outside").after(u)) : (p.addClass("mCSB_inside").append(u), m.wrap(h)), x.call(this);
					var g = [t("#mCSB_" + r.idx + "_dragger_vertical"), t("#mCSB_" + r.idx + "_dragger_horizontal")];
					g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
				},
				_ = function(e) {
					return Math.max.apply(Math, e.map(function() {
						return t(this).outerWidth(!0)
					}).get())
				},
				y = function() {
					var e = t(this),
						n = e.data(i),
						r = n.opt,
						o = t("#mCSB_" + n.idx + "_container");
					r.advanced.autoExpandHorizontalScroll && "y" !== r.axis && o.css({
						position: "absolute",
						width: "auto"
					}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
						width: Math.ceil(o[0].getBoundingClientRect().right + .4) - Math.floor(o[0].getBoundingClientRect().left),
						position: "relative"
					}).unwrap()
				},
				x = function() {
					var e = t(this),
						n = e.data(i),
						r = n.opt,
						o = t(".mCSB_" + n.idx + "_scrollbar:first"),
						a = et(r.scrollButtons.tabindex) ? "tabindex='" + r.scrollButtons.tabindex + "'" : "",
						s = ["<a href='#' class='" + c[13] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + c[14] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + c[15] + "' oncontextmenu='return false;' " + a + " />", "<a href='#' class='" + c[16] + "' oncontextmenu='return false;' " + a + " />"],
						l = ["x" === r.axis ? s[2] : s[0], "x" === r.axis ? s[3] : s[1], s[2], s[3]];
					r.scrollButtons.enable && o.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
				},
				b = function() {
					var e = t(this),
						n = e.data(i),
						r = t("#mCSB_" + n.idx),
						o = e.css("max-height") || "none",
						a = -1 !== o.indexOf("%"),
						s = e.css("box-sizing");
					if ("none" !== o) {
						var l = a ? e.parent().height() * parseInt(o) / 100 : parseInt(o);
						"border-box" === s && (l -= e.innerHeight() - e.height() + (e.outerHeight() - e.innerHeight())), r.css("max-height", Math.round(l))
					}
				},
				w = function() {
					var e = t(this),
						n = e.data(i),
						r = t("#mCSB_" + n.idx),
						o = t("#mCSB_" + n.idx + "_container"),
						a = [t("#mCSB_" + n.idx + "_dragger_vertical"), t("#mCSB_" + n.idx + "_dragger_horizontal")],
						s = [r.height() / o.outerHeight(!1), r.width() / o.outerWidth(!1)],
						u = [parseInt(a[0].css("min-height")), Math.round(s[0] * a[0].parent().height()), parseInt(a[1].css("min-width")), Math.round(s[1] * a[1].parent().width())],
						c = l && u[1] < u[0] ? u[0] : u[1],
						h = l && u[3] < u[2] ? u[2] : u[3];
					a[0].css({
						height: c,
						"max-height": a[0].parent().height() - 10
					}).find(".mCSB_dragger_bar").css({
						"line-height": u[0] + "px"
					}), a[1].css({
						width: h,
						"max-width": a[1].parent().width() - 10
					})
				},
				T = function() {
					var e = t(this),
						n = e.data(i),
						r = t("#mCSB_" + n.idx),
						o = t("#mCSB_" + n.idx + "_container"),
						a = [t("#mCSB_" + n.idx + "_dragger_vertical"), t("#mCSB_" + n.idx + "_dragger_horizontal")],
						s = [o.outerHeight(!1) - r.height(), o.outerWidth(!1) - r.width()],
						l = [s[0] / (a[0].parent().height() - a[0].height()), s[1] / (a[1].parent().width() - a[1].width())];
					n.scrollRatio = {
						y: l[0],
						x: l[1]
					}
				},
				S = function(t, e, n) {
					var i = n ? c[0] + "_expanded" : "",
						r = t.closest(".mCSB_scrollTools");
					"active" === e ? (t.toggleClass(c[0] + " " + i), r.toggleClass(c[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(c[0]), r.removeClass(c[1])) : (t.addClass(c[0]), r.addClass(c[1])))
				},
				C = function() {
					var e = t(this),
						n = e.data(i),
						r = t("#mCSB_" + n.idx),
						o = t("#mCSB_" + n.idx + "_container"),
						a = null == n.overflowed ? o.height() : o.outerHeight(!1),
						s = null == n.overflowed ? o.width() : o.outerWidth(!1);
					return [a > r.height(), s > r.width()]
				},
				k = function() {
					var e = t(this),
						n = e.data(i),
						r = n.opt,
						o = t("#mCSB_" + n.idx),
						a = t("#mCSB_" + n.idx + "_container"),
						s = [t("#mCSB_" + n.idx + "_dragger_vertical"), t("#mCSB_" + n.idx + "_dragger_horizontal")];
					if ($(e), ("x" !== r.axis && !n.overflowed[0] || "y" === r.axis && n.overflowed[0]) && (s[0].add(a).css("top", 0), V(e, "_resetY")), "y" !== r.axis && !n.overflowed[1] || "x" === r.axis && n.overflowed[1]) {
						var l = dx = 0;
						"rtl" === n.langDir && (l = o.width() - a.outerWidth(!1), dx = Math.abs(l / n.scrollRatio.x)), a.css("left", l), s[1].css("left", dx), V(e, "_resetX")
					}
				},
				E = function() {
					function e() {
						a = setTimeout(function() {
							t.event.special.mousewheel ? (clearTimeout(a), N.call(n[0])) : e()
						}, 100)
					}
					var n = t(this),
						r = n.data(i),
						o = r.opt;
					if (!r.bindEvents) {
						if (M.call(this), o.contentTouchScroll && D.call(this), R.call(this), o.mouseWheel.enable) {
							var a;
							e()
						}
						L.call(this), z.call(this), o.advanced.autoScrollOnFocus && B.call(this), o.scrollButtons.enable && F.call(this), o.keyboard.enable && q.call(this), r.bindEvents = !0
					}
				},
				P = function() {
					var e = t(this),
						n = e.data(i),
						r = n.opt,
						o = i + "_" + n.idx,
						a = ".mCSB_" + n.idx + "_scrollbar",
						s = t("#mCSB_" + n.idx + ",#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper," + a + " ." + c[12] + ",#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal," + a + ">a"),
						l = t("#mCSB_" + n.idx + "_container");
					r.advanced.releaseDraggableSelectors && s.add(t(r.advanced.releaseDraggableSelectors)), n.bindEvents && (t(document).unbind("." + o), s.each(function() {
						t(this).unbind("." + o)
					}), clearTimeout(e[0]._focusTimeout), J(e[0], "_focusTimeout"), clearTimeout(n.sequential.step), J(n.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), J(l[0], "onCompleteTimeout"), n.bindEvents = !1)
				},
				A = function(e) {
					var n = t(this),
						r = n.data(i),
						o = r.opt,
						a = t("#mCSB_" + r.idx + "_container_wrapper"),
						s = a.length ? a : t("#mCSB_" + r.idx + "_container"),
						l = [t("#mCSB_" + r.idx + "_scrollbar_vertical"), t("#mCSB_" + r.idx + "_scrollbar_horizontal")],
						u = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
					"x" !== o.axis && (r.overflowed[0] && !e ? (l[0].add(u[0]).add(l[0].children("a")).css("display", "block"), s.removeClass(c[8] + " " + c[10])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && u[0].css("display", "none"), s.removeClass(c[10])) : (l[0].css("display", "none"), s.addClass(c[10])), s.addClass(c[8]))), "y" !== o.axis && (r.overflowed[1] && !e ? (l[1].add(u[1]).add(l[1].children("a")).css("display", "block"), s.removeClass(c[9] + " " + c[11])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && u[1].css("display", "none"), s.removeClass(c[11])) : (l[1].css("display", "none"), s.addClass(c[11])), s.addClass(c[9]))), r.overflowed[0] || r.overflowed[1] ? n.removeClass(c[5]) : n.addClass(c[5])
				},
				O = function(t) {
					var e = t.type;
					switch (e) {
						case "pointerdown":
						case "MSPointerDown":
						case "pointermove":
						case "MSPointerMove":
						case "pointerup":
						case "MSPointerUp":
							return t.target.ownerDocument !== document ? [t.originalEvent.screenY, t.originalEvent.screenX, !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
						case "touchstart":
						case "touchmove":
						case "touchend":
							var n = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
								i = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
							return t.target.ownerDocument !== document ? [n.screenY, n.screenX, i > 1] : [n.pageY, n.pageX, i > 1];
						default:
							return [t.pageY, t.pageX, !1]
					}
				},
				M = function() {
					function e(t) {
						var e = p.find("iframe");
						if (e.length) {
							var n = t ? "auto" : "none";
							e.css("pointer-events", n)
						}
					}

					function n(t, e, n, i) {
						if (p[0].idleTimer = h.scrollInertia < 233 ? 250 : 0, r.attr("id") === d[1]) var o = "x",
							a = (r[0].offsetLeft - e + i) * c.scrollRatio.x;
						else var o = "y",
							a = (r[0].offsetTop - t + n) * c.scrollRatio.y;
						V(s, a.toString(), {
							dir: o,
							drag: !0
						})
					}
					var r, o, a, s = t(this),
						c = s.data(i),
						h = c.opt,
						f = i + "_" + c.idx,
						d = ["mCSB_" + c.idx + "_dragger_vertical", "mCSB_" + c.idx + "_dragger_horizontal"],
						p = t("#mCSB_" + c.idx + "_container"),
						m = t("#" + d[0] + ",#" + d[1]),
						g = h.advanced.releaseDraggableSelectors ? m.add(t(h.advanced.releaseDraggableSelectors)) : m;
					m.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function(n) {
						if (n.stopImmediatePropagation(), n.preventDefault(), K(n)) {
							u = !0, l && (document.onselectstart = function() {
								return !1
							}), e(!1), $(s), r = t(this);
							var i = r.offset(),
								c = O(n)[0] - i.top,
								f = O(n)[1] - i.left,
								d = r.height() + i.top,
								p = r.width() + i.left;
							d > c && c > 0 && p > f && f > 0 && (o = c, a = f), S(r, "active", h.autoExpandScrollbar)
						}
					}).bind("touchmove." + f, function(t) {
						t.stopImmediatePropagation(), t.preventDefault();
						var e = r.offset(),
							i = O(t)[0] - e.top,
							s = O(t)[1] - e.left;
						n(o, a, i, s)
					}), t(document).bind("mousemove." + f + " pointermove." + f + " MSPointerMove." + f, function(t) {
						if (r) {
							var e = r.offset(),
								i = O(t)[0] - e.top,
								s = O(t)[1] - e.left;
							if (o === i) return;
							n(o, a, i, s)
						}
					}).add(g).bind("mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f, function(t) {
						r && (S(r, "active", h.autoExpandScrollbar), r = null), u = !1, l && (document.onselectstart = null), e(!0)
					})
				},
				D = function() {
					function n(t) {
						if (!tt(t) || u || O(t)[2]) return void(e = 0);
						e = 1, b = 0, w = 0, T.removeClass("mCS_touch_action");
						var n = P.offset();
						c = O(t)[0] - n.top, h = O(t)[1] - n.left, I = [O(t)[0], O(t)[1]]
					}

					function r(t) {
						if (tt(t) && !u && !O(t)[2] && (t.stopImmediatePropagation(), !w || b)) {
							m = G();
							var e = E.offset(),
								n = O(t)[0] - e.top,
								i = O(t)[1] - e.left,
								r = "mcsLinearOut";
							if (M.push(n), D.push(i), I[2] = Math.abs(O(t)[0] - I[0]), I[3] = Math.abs(O(t)[1] - I[1]), S.overflowed[0]) var o = A[0].parent().height() - A[0].height(),
								a = c - n > 0 && n - c > -(o * S.scrollRatio.y) && (2 * I[3] < I[2] || "yx" === C.axis);
							if (S.overflowed[1]) var s = A[1].parent().width() - A[1].width(),
								f = h - i > 0 && i - h > -(s * S.scrollRatio.x) && (2 * I[2] < I[3] || "yx" === C.axis);
							a || f ? (t.preventDefault(), b = 1) : (w = 1, T.addClass("mCS_touch_action")), y = "yx" === C.axis ? [c - n, h - i] : "x" === C.axis ? [null, h - i] : [c - n, null], P[0].idleTimer = 250, S.overflowed[0] && l(y[0], R, r, "y", "all", !0), S.overflowed[1] && l(y[1], R, r, "x", N, !0)
						}
					}

					function o(t) {
						if (!tt(t) || u || O(t)[2]) return void(e = 0);
						e = 1, t.stopImmediatePropagation(), $(T), p = G();
						var n = E.offset();
						f = O(t)[0] - n.top, d = O(t)[1] - n.left, M = [], D = []
					}

					function a(t) {
						if (tt(t) && !u && !O(t)[2]) {
							t.stopImmediatePropagation(), b = 0, w = 0, g = G();
							var e = E.offset(),
								n = O(t)[0] - e.top,
								i = O(t)[1] - e.left;
							if (!(g - m > 30)) {
								_ = 1e3 / (g - p);
								var r = "mcsEaseOut",
									o = 2.5 > _,
									a = o ? [M[M.length - 2], D[D.length - 2]] : [0, 0];
								v = o ? [n - a[0], i - a[1]] : [n - f, i - d];
								var c = [Math.abs(v[0]), Math.abs(v[1])];
								_ = o ? [Math.abs(v[0] / 4), Math.abs(v[1] / 4)] : [_, _];
								var h = [Math.abs(P[0].offsetTop) - v[0] * s(c[0] / _[0], _[0]), Math.abs(P[0].offsetLeft) - v[1] * s(c[1] / _[1], _[1])];
								y = "yx" === C.axis ? [h[0], h[1]] : "x" === C.axis ? [null, h[1]] : [h[0], null], x = [4 * c[0] + C.scrollInertia, 4 * c[1] + C.scrollInertia];
								var T = parseInt(C.contentTouchScroll) || 0;
								y[0] = c[0] > T ? y[0] : 0, y[1] = c[1] > T ? y[1] : 0, S.overflowed[0] && l(y[0], x[0], r, "y", N, !1), S.overflowed[1] && l(y[1], x[1], r, "x", N, !1)
							}
						}
					}

					function s(t, e) {
						var n = [1.5 * e, 2 * e, e / 1.5, e / 2];
						return t > 90 ? e > 4 ? n[0] : n[3] : t > 60 ? e > 3 ? n[3] : n[2] : t > 30 ? e > 8 ? n[1] : e > 6 ? n[0] : e > 4 ? e : n[2] : e > 8 ? e : n[3]
					}

					function l(t, e, n, i, r, o) {
						t && V(T, t.toString(), {
							dur: e,
							scrollEasing: n,
							dir: i,
							overwrite: r,
							drag: o
						})
					}
					var c, h, f, d, p, m, g, v, _, y, x, b, w, T = t(this),
						S = T.data(i),
						C = S.opt,
						k = i + "_" + S.idx,
						E = t("#mCSB_" + S.idx),
						P = t("#mCSB_" + S.idx + "_container"),
						A = [t("#mCSB_" + S.idx + "_dragger_vertical"), t("#mCSB_" + S.idx + "_dragger_horizontal")],
						M = [],
						D = [],
						R = 0,
						N = "yx" === C.axis ? "none" : "all",
						I = [],
						L = P.find("iframe"),
						B = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k];
					P.bind(B[0], function(t) {
						n(t)
					}).bind(B[1], function(t) {
						r(t)
					}), E.bind(B[0], function(t) {
						o(t)
					}).bind(B[2], function(t) {
						a(t)
					}), L.length && L.each(function() {
						t(this).load(function() {
							j(this) && t(this.contentDocument || this.contentWindow.document).bind(B[0], function(t) {
								n(t), o(t)
							}).bind(B[1], function(t) {
								r(t)
							}).bind(B[2], function(t) {
								a(t)
							})
						})
					})
				},
				R = function() {
					function n() {
						return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
					}

					function r(t, e, n) {
						c.type = n && o ? "stepped" : "stepless", c.scrollAmount = 10, H(a, t, e, "mcsLinearOut", n ? 60 : null)
					}
					var o, a = t(this),
						s = a.data(i),
						l = s.opt,
						c = s.sequential,
						h = i + "_" + s.idx,
						f = t("#mCSB_" + s.idx + "_container"),
						d = f.parent();
					f.bind("mousedown." + h, function(t) {
						e || o || (o = 1, u = !0)
					}).add(document).bind("mousemove." + h, function(t) {
						if (!e && o && n()) {
							var i = f.offset(),
								a = O(t)[0] - i.top + f[0].offsetTop,
								u = O(t)[1] - i.left + f[0].offsetLeft;
							a > 0 && a < d.height() && u > 0 && u < d.width() ? c.step && r("off", null, "stepped") : ("x" !== l.axis && s.overflowed[0] && (0 > a ? r("on", 38) : a > d.height() && r("on", 40)), "y" !== l.axis && s.overflowed[1] && (0 > u ? r("on", 37) : u > d.width() && r("on", 39)))
						}
					}).bind("mouseup." + h, function(t) {
						e || (o && (o = 0, r("off", null)), u = !1)
					})
				},
				N = function() {
					function e(e, i) {
						if ($(n), !I(n, e.target)) {
							var a = "auto" !== o.mouseWheel.deltaFactor ? parseInt(o.mouseWheel.deltaFactor) : l && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100;
							if ("x" === o.axis || "x" === o.mouseWheel.axis) var c = "x",
								h = [Math.round(a * r.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
								f = "auto" !== o.mouseWheel.scrollAmount ? h[1] : h[0] >= s.width() ? .9 * s.width() : h[0],
								d = Math.abs(t("#mCSB_" + r.idx + "_container")[0].offsetLeft),
								p = u[1][0].offsetLeft,
								m = u[1].parent().width() - u[1].width(),
								g = e.deltaX || e.deltaY || i;
							else var c = "y",
								h = [Math.round(a * r.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)],
								f = "auto" !== o.mouseWheel.scrollAmount ? h[1] : h[0] >= s.height() ? .9 * s.height() : h[0],
								d = Math.abs(t("#mCSB_" + r.idx + "_container")[0].offsetTop),
								p = u[0][0].offsetTop,
								m = u[0].parent().height() - u[0].height(),
								g = e.deltaY || i;
							"y" === c && !r.overflowed[0] || "x" === c && !r.overflowed[1] || ((o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (g = -g), o.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== p || 0 > g && p !== m || o.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), V(n, (d - g * f).toString(), {
								dir: c
							}))
						}
					}
					if (t(this).data(i)) {
						var n = t(this),
							r = n.data(i),
							o = r.opt,
							a = i + "_" + r.idx,
							s = t("#mCSB_" + r.idx),
							u = [t("#mCSB_" + r.idx + "_dragger_vertical"), t("#mCSB_" + r.idx + "_dragger_horizontal")],
							c = t("#mCSB_" + r.idx + "_container").find("iframe");
						c.length && c.each(function() {
							t(this).load(function() {
								j(this) && t(this.contentDocument || this.contentWindow.document).bind("mousewheel." + a, function(t, n) {
									e(t, n)
								})
							})
						}), s.bind("mousewheel." + a, function(t, n) {
							e(t, n)
						})
					}
				},
				j = function(t) {
					var e = null;
					try {
						var n = t.contentDocument || t.contentWindow.document;
						e = n.body.innerHTML
					} catch (i) {}
					return null !== e
				},
				I = function(e, n) {
					var r = n.nodeName.toLowerCase(),
						o = e.data(i).opt.mouseWheel.disableOver,
						a = ["select", "textarea"];
					return t.inArray(r, o) > -1 && !(t.inArray(r, a) > -1 && !t(n).is(":focus"))
				},
				L = function() {
					var e = t(this),
						n = e.data(i),
						r = i + "_" + n.idx,
						o = t("#mCSB_" + n.idx + "_container"),
						a = o.parent(),
						s = t(".mCSB_" + n.idx + "_scrollbar ." + c[12]);
					s.bind("touchstart." + r + " pointerdown." + r + " MSPointerDown." + r, function(t) {
						u = !0
					}).bind("touchend." + r + " pointerup." + r + " MSPointerUp." + r, function(t) {
						u = !1
					}).bind("click." + r, function(i) {
						if (t(i.target).hasClass(c[12]) || t(i.target).hasClass("mCSB_draggerRail")) {
							$(e);
							var r = t(this),
								s = r.find(".mCSB_dragger");
							if (r.parent(".mCSB_scrollTools_horizontal").length > 0) {
								if (!n.overflowed[1]) return;
								var l = "x",
									u = i.pageX > s.offset().left ? -1 : 1,
									h = Math.abs(o[0].offsetLeft) - .9 * u * a.width()
							} else {
								if (!n.overflowed[0]) return;
								var l = "y",
									u = i.pageY > s.offset().top ? -1 : 1,
									h = Math.abs(o[0].offsetTop) - .9 * u * a.height()
							}
							V(e, h.toString(), {
								dir: l,
								scrollEasing: "mcsEaseInOut"
							})
						}
					})
				},
				B = function() {
					var e = t(this),
						n = e.data(i),
						r = n.opt,
						o = i + "_" + n.idx,
						a = t("#mCSB_" + n.idx + "_container"),
						s = a.parent();
					a.bind("focusin." + o, function(n) {
						var i = t(document.activeElement),
							o = a.find(".mCustomScrollBox").length,
							l = 0;
						i.is(r.advanced.autoScrollOnFocus) && ($(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = o ? (l + 17) * o : 0, e[0]._focusTimeout = setTimeout(function() {
							var t = [nt(i)[0], nt(i)[1]],
								n = [a[0].offsetTop, a[0].offsetLeft],
								o = [n[0] + t[0] >= 0 && n[0] + t[0] < s.height() - i.outerHeight(!1), n[1] + t[1] >= 0 && n[0] + t[1] < s.width() - i.outerWidth(!1)],
								u = "yx" !== r.axis || o[0] || o[1] ? "all" : "none";
							"x" === r.axis || o[0] || V(e, t[0].toString(), {
								dir: "y",
								scrollEasing: "mcsEaseInOut",
								overwrite: u,
								dur: l
							}), "y" === r.axis || o[1] || V(e, t[1].toString(), {
								dir: "x",
								scrollEasing: "mcsEaseInOut",
								overwrite: u,
								dur: l
							})
						}, e[0]._focusTimer))
					})
				},
				z = function() {
					var e = t(this),
						n = e.data(i),
						r = i + "_" + n.idx,
						o = t("#mCSB_" + n.idx + "_container").parent();
					o.bind("scroll." + r, function(e) {
						(0 !== o.scrollTop() || 0 !== o.scrollLeft()) && t(".mCSB_" + n.idx + "_scrollbar").css("visibility", "hidden")
					})
				},
				F = function() {
					var e = t(this),
						n = e.data(i),
						r = n.opt,
						o = n.sequential,
						a = i + "_" + n.idx,
						s = ".mCSB_" + n.idx + "_scrollbar",
						l = t(s + ">a");
					l.bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a + " mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a + " mouseout." + a + " pointerout." + a + " MSPointerOut." + a + " click." + a, function(i) {
						function a(t, n) {
							o.scrollAmount = r.snapAmount || r.scrollButtons.scrollAmount, H(e, t, n)
						}
						if (i.preventDefault(), K(i)) {
							var s = t(this).attr("class");
							switch (o.type = r.scrollButtons.scrollType, i.type) {
								case "mousedown":
								case "touchstart":
								case "pointerdown":
								case "MSPointerDown":
									if ("stepped" === o.type) return;
									u = !0, n.tweenRunning = !1, a("on", s);
									break;
								case "mouseup":
								case "touchend":
								case "pointerup":
								case "MSPointerUp":
								case "mouseout":
								case "pointerout":
								case "MSPointerOut":
									if ("stepped" === o.type) return;
									u = !1, o.dir && a("off", s);
									break;
								case "click":
									if ("stepped" !== o.type || n.tweenRunning) return;
									a("on", s)
							}
						}
					})
				},
				q = function() {
					function e(e) {
						function i(t, e) {
							a.type = o.keyboard.scrollType, a.scrollAmount = o.snapAmount || o.keyboard.scrollAmount, "stepped" === a.type && r.tweenRunning || H(n, t, e)
						}
						switch (e.type) {
							case "blur":
								r.tweenRunning && a.dir && i("off", null);
								break;
							case "keydown":
							case "keyup":
								var s = e.keyCode ? e.keyCode : e.which,
									l = "on";
								if ("x" !== o.axis && (38 === s || 40 === s) || "y" !== o.axis && (37 === s || 39 === s)) {
									if ((38 === s || 40 === s) && !r.overflowed[0] || (37 === s || 39 === s) && !r.overflowed[1]) return;
									"keyup" === e.type && (l = "off"), t(document.activeElement).is(h) || (e.preventDefault(), e.stopImmediatePropagation(), i(l, s))
								} else if (33 === s || 34 === s) {
									if ((r.overflowed[0] || r.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
										$(n);

										var f = 34 === s ? -1 : 1;
										if ("x" === o.axis || "yx" === o.axis && r.overflowed[1] && !r.overflowed[0]) var d = "x",
											p = Math.abs(u[0].offsetLeft) - .9 * f * c.width();
										else var d = "y",
											p = Math.abs(u[0].offsetTop) - .9 * f * c.height();
										V(n, p.toString(), {
											dir: d,
											scrollEasing: "mcsEaseInOut"
										})
									}
								} else if ((35 === s || 36 === s) && !t(document.activeElement).is(h) && ((r.overflowed[0] || r.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type)) {
									if ("x" === o.axis || "yx" === o.axis && r.overflowed[1] && !r.overflowed[0]) var d = "x",
										p = 35 === s ? Math.abs(c.width() - u.outerWidth(!1)) : 0;
									else var d = "y",
										p = 35 === s ? Math.abs(c.height() - u.outerHeight(!1)) : 0;
									V(n, p.toString(), {
										dir: d,
										scrollEasing: "mcsEaseInOut"
									})
								}
						}
					}
					var n = t(this),
						r = n.data(i),
						o = r.opt,
						a = r.sequential,
						s = i + "_" + r.idx,
						l = t("#mCSB_" + r.idx),
						u = t("#mCSB_" + r.idx + "_container"),
						c = u.parent(),
						h = "input,textarea,select,datalist,keygen,[contenteditable='true']",
						f = u.find("iframe"),
						d = ["blur." + s + " keydown." + s + " keyup." + s];
					f.length && f.each(function() {
						t(this).load(function() {
							j(this) && t(this.contentDocument || this.contentWindow.document).bind(d[0], function(t) {
								e(t)
							})
						})
					}), l.attr("tabindex", "0").bind(d[0], function(t) {
						e(t)
					})
				},
				H = function(e, n, r, o, a) {
					function s(t) {
						var n = "stepped" !== f.type,
							i = a ? a : t ? n ? m / 1.5 : g : 1e3 / 60,
							r = t ? n ? 7.5 : 40 : 2.5,
							l = [Math.abs(d[0].offsetTop), Math.abs(d[0].offsetLeft)],
							c = [u.scrollRatio.y > 10 ? 10 : u.scrollRatio.y, u.scrollRatio.x > 10 ? 10 : u.scrollRatio.x],
							h = "x" === f.dir[0] ? l[1] + f.dir[1] * c[1] * r : l[0] + f.dir[1] * c[0] * r,
							p = "x" === f.dir[0] ? l[1] + f.dir[1] * parseInt(f.scrollAmount) : l[0] + f.dir[1] * parseInt(f.scrollAmount),
							v = "auto" !== f.scrollAmount ? p : h,
							_ = o ? o : t ? n ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
							y = t ? !0 : !1;
						return t && 17 > i && (v = "x" === f.dir[0] ? l[1] : l[0]), V(e, v.toString(), {
							dir: f.dir[0],
							scrollEasing: _,
							dur: i,
							onComplete: y
						}), t ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function() {
							s()
						}, i)))
					}

					function l() {
						clearTimeout(f.step), J(f, "step"), $(e)
					}
					var u = e.data(i),
						h = u.opt,
						f = u.sequential,
						d = t("#mCSB_" + u.idx + "_container"),
						p = "stepped" === f.type ? !0 : !1,
						m = h.scrollInertia < 26 ? 26 : h.scrollInertia,
						g = h.scrollInertia < 1 ? 17 : h.scrollInertia;
					switch (n) {
						case "on":
							if (f.dir = [r === c[16] || r === c[15] || 39 === r || 37 === r ? "x" : "y", r === c[13] || r === c[15] || 38 === r || 37 === r ? -1 : 1], $(e), et(r) && "stepped" === f.type) return;
							s(p);
							break;
						case "off":
							l(), (p || u.tweenRunning && f.dir) && s(!0)
					}
				},
				W = function(e) {
					var n = t(this).data(i).opt,
						r = [];
					return "function" == typeof e && (e = e()), e instanceof Array ? r = e.length > 1 ? [e[0], e[1]] : "x" === n.axis ? [null, e[0]] : [e[0], null] : (r[0] = e.y ? e.y : e.x || "x" === n.axis ? null : e, r[1] = e.x ? e.x : e.y || "y" === n.axis ? null : e), "function" == typeof r[0] && (r[0] = r[0]()), "function" == typeof r[1] && (r[1] = r[1]()), r
				},
				X = function(e, n) {
					if (null != e && "undefined" != typeof e) {
						var r = t(this),
							o = r.data(i),
							a = o.opt,
							s = t("#mCSB_" + o.idx + "_container"),
							l = s.parent(),
							u = typeof e;
						n || (n = "x" === a.axis ? "x" : "y");
						var c = "x" === n ? s.outerWidth(!1) : s.outerHeight(!1),
							f = "x" === n ? s[0].offsetLeft : s[0].offsetTop,
							d = "x" === n ? "left" : "top";
						switch (u) {
							case "function":
								return e();
							case "object":
								var p = e.jquery ? e : t(e);
								if (!p.length) return;
								return "x" === n ? nt(p)[1] : nt(p)[0];
							case "string":
							case "number":
								if (et(e)) return Math.abs(e);
								if (-1 !== e.indexOf("%")) return Math.abs(c * parseInt(e) / 100);
								if (-1 !== e.indexOf("-=")) return Math.abs(f - parseInt(e.split("-=")[1]));
								if (-1 !== e.indexOf("+=")) {
									var m = f + parseInt(e.split("+=")[1]);
									return m >= 0 ? 0 : Math.abs(m)
								}
								if (-1 !== e.indexOf("px") && et(e.split("px")[0])) return Math.abs(e.split("px")[0]);
								if ("top" === e || "left" === e) return 0;
								if ("bottom" === e) return Math.abs(l.height() - s.outerHeight(!1));
								if ("right" === e) return Math.abs(l.width() - s.outerWidth(!1));
								if ("first" === e || "last" === e) {
									var p = s.find(":" + e);
									return "x" === n ? nt(p)[1] : nt(p)[0]
								}
								return t(e).length ? "x" === n ? nt(t(e))[1] : nt(t(e))[0] : (s.css(d, e), void h.update.call(null, r[0]))
						}
					}
				},
				U = function(e) {
					function n() {
						return clearTimeout(d[0].autoUpdate), 0 === l.parents("html").length ? void(l = null) : void(d[0].autoUpdate = setTimeout(function() {
							return f.advanced.updateOnSelectorChange && (p = a(), p !== x) ? (s(3), void(x = p)) : (f.advanced.updateOnContentResize && (m = [d.outerHeight(!1), d.outerWidth(!1), v.height(), v.width(), y()[0], y()[1]], (m[0] !== b[0] || m[1] !== b[1] || m[2] !== b[2] || m[3] !== b[3] || m[4] !== b[4] || m[5] !== b[5]) && (s(m[0] !== b[0] || m[1] !== b[1]), b = m)), f.advanced.updateOnImageLoad && (g = r(), g !== w && (d.find("img").each(function() {
								o(this)
							}), w = g)), void((f.advanced.updateOnSelectorChange || f.advanced.updateOnContentResize || f.advanced.updateOnImageLoad) && n()))
						}, f.advanced.autoUpdateTimeout))
					}

					function r() {
						var t = 0;
						return f.advanced.updateOnImageLoad && (t = d.find("img").length), t
					}

					function o(e) {
						function n(t, e) {
							return function() {
								return e.apply(t, arguments)
							}
						}

						function i() {
							this.onload = null, t(e).addClass(c[2]), s(2)
						}
						if (t(e).hasClass(c[2])) return void s();
						var r = new Image;
						r.onload = n(r, i), r.src = e.src
					}

					function a() {
						f.advanced.updateOnSelectorChange === !0 && (f.advanced.updateOnSelectorChange = "*");
						var e = 0,
							n = d.find(f.advanced.updateOnSelectorChange);
						return f.advanced.updateOnSelectorChange && n.length > 0 && n.each(function() {
							e += t(this).height() + t(this).width()
						}), e
					}

					function s(t) {
						clearTimeout(d[0].autoUpdate), h.update.call(null, l[0], t)
					}
					var l = t(this),
						u = l.data(i),
						f = u.opt,
						d = t("#mCSB_" + u.idx + "_container");
					if (e) return clearTimeout(d[0].autoUpdate), void J(d[0], "autoUpdate");
					var p, m, g, v = d.parent(),
						_ = [t("#mCSB_" + u.idx + "_scrollbar_vertical"), t("#mCSB_" + u.idx + "_scrollbar_horizontal")],
						y = function() {
							return [_[0].is(":visible") ? _[0].outerHeight(!0) : 0, _[1].is(":visible") ? _[1].outerWidth(!0) : 0]
						},
						x = a(),
						b = [d.outerHeight(!1), d.outerWidth(!1), v.height(), v.width(), y()[0], y()[1]],
						w = r();
					n()
				},
				Y = function(t, e, n) {
					return Math.round(t / e) * e - n
				},
				$ = function(e) {
					var n = e.data(i),
						r = t("#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper,#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal");
					r.each(function() {
						Z.call(this)
					})
				},
				V = function(e, n, r) {
					function o(t) {
						return l && u.callbacks[t] && "function" == typeof u.callbacks[t]
					}

					function a() {
						return [u.callbacks.alwaysTriggerOffsets || y >= x[0] + w, u.callbacks.alwaysTriggerOffsets || -T >= y]
					}

					function s() {
						var t = [d[0].offsetTop, d[0].offsetLeft],
							n = [v[0].offsetTop, v[0].offsetLeft],
							i = [d.outerHeight(!1), d.outerWidth(!1)],
							o = [f.height(), f.width()];
						e[0].mcs = {
							content: d,
							top: t[0],
							left: t[1],
							draggerTop: n[0],
							draggerLeft: n[1],
							topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(i[0]) - o[0])),
							leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(i[1]) - o[1])),
							direction: r.dir
						}
					}
					var l = e.data(i),
						u = l.opt,
						c = {
							trigger: "internal",
							dir: "y",
							scrollEasing: "mcsEaseOut",
							drag: !1,
							dur: u.scrollInertia,
							overwrite: "all",
							callbacks: !0,
							onStart: !0,
							onUpdate: !0,
							onComplete: !0
						},
						r = t.extend(c, r),
						h = [r.dur, r.drag ? 0 : r.dur],
						f = t("#mCSB_" + l.idx),
						d = t("#mCSB_" + l.idx + "_container"),
						p = d.parent(),
						m = u.callbacks.onTotalScrollOffset ? W.call(e, u.callbacks.onTotalScrollOffset) : [0, 0],
						g = u.callbacks.onTotalScrollBackOffset ? W.call(e, u.callbacks.onTotalScrollBackOffset) : [0, 0];
					if (l.trigger = r.trigger, (0 !== p.scrollTop() || 0 !== p.scrollLeft()) && (t(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), p.scrollTop(0).scrollLeft(0)), "_resetY" !== n || l.contentReset.y || (o("onOverflowYNone") && u.callbacks.onOverflowYNone.call(e[0]), l.contentReset.y = 1), "_resetX" !== n || l.contentReset.x || (o("onOverflowXNone") && u.callbacks.onOverflowXNone.call(e[0]), l.contentReset.x = 1), "_resetY" !== n && "_resetX" !== n) {
						switch (!l.contentReset.y && e[0].mcs || !l.overflowed[0] || (o("onOverflowY") && u.callbacks.onOverflowY.call(e[0]), l.contentReset.x = null), !l.contentReset.x && e[0].mcs || !l.overflowed[1] || (o("onOverflowX") && u.callbacks.onOverflowX.call(e[0]), l.contentReset.x = null), u.snapAmount && (n = Y(n, u.snapAmount, u.snapOffset)), r.dir) {
							case "x":
								var v = t("#mCSB_" + l.idx + "_dragger_horizontal"),
									_ = "left",
									y = d[0].offsetLeft,
									x = [f.width() - d.outerWidth(!1), v.parent().width() - v.width()],
									b = [n, 0 === n ? 0 : n / l.scrollRatio.x],
									w = m[1],
									T = g[1],
									C = w > 0 ? w / l.scrollRatio.x : 0,
									k = T > 0 ? T / l.scrollRatio.x : 0;
								break;
							case "y":
								var v = t("#mCSB_" + l.idx + "_dragger_vertical"),
									_ = "top",
									y = d[0].offsetTop,
									x = [f.height() - d.outerHeight(!1), v.parent().height() - v.height()],
									b = [n, 0 === n ? 0 : n / l.scrollRatio.y],
									w = m[0],
									T = g[0],
									C = w > 0 ? w / l.scrollRatio.y : 0,
									k = T > 0 ? T / l.scrollRatio.y : 0
						}
						b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= x[1] ? b = [x[0], x[1]] : b[0] = -b[0], e[0].mcs || (s(), o("onInit") && u.callbacks.onInit.call(e[0])), clearTimeout(d[0].onCompleteTimeout), (l.tweenRunning || !(0 === y && b[0] >= 0 || y === x[0] && b[0] <= x[0])) && (Q(v[0], _, Math.round(b[1]), h[1], r.scrollEasing), Q(d[0], _, Math.round(b[0]), h[0], r.scrollEasing, r.overwrite, {
							onStart: function() {
								r.callbacks && r.onStart && !l.tweenRunning && (o("onScrollStart") && (s(), u.callbacks.onScrollStart.call(e[0])), l.tweenRunning = !0, S(v), l.cbOffsets = a())
							},
							onUpdate: function() {
								r.callbacks && r.onUpdate && o("whileScrolling") && (s(), u.callbacks.whileScrolling.call(e[0]))
							},
							onComplete: function() {
								if (r.callbacks && r.onComplete) {
									"yx" === u.axis && clearTimeout(d[0].onCompleteTimeout);
									var t = d[0].idleTimer || 0;
									d[0].onCompleteTimeout = setTimeout(function() {
										o("onScroll") && (s(), u.callbacks.onScroll.call(e[0])), o("onTotalScroll") && b[1] >= x[1] - C && l.cbOffsets[0] && (s(), u.callbacks.onTotalScroll.call(e[0])), o("onTotalScrollBack") && b[1] <= k && l.cbOffsets[1] && (s(), u.callbacks.onTotalScrollBack.call(e[0])), l.tweenRunning = !1, d[0].idleTimer = 0, S(v, "hide")
									}, t)
								}
							}
						}))
					}
				},
				Q = function(t, e, n, i, r, o, a) {
					function s() {
						b.stop || (_ || p.call(), _ = G() - v, l(), _ >= b.TIME && (b.TIME = _ > b.TIME ? _ + f - (_ - b.TIME) : _ + f - 1, b.TIME < _ + 1 && (b.TIME = _ + 1)), b.TIME < i ? b.id = d(s) : g.call())
					}

					function l() {
						i > 0 ? (b.currVal = h(b.TIME, y, w, i, r), x[e] = Math.round(b.currVal) + "px") : x[e] = n + "px", m.call()
					}

					function u() {
						f = 1e3 / 60, b.TIME = _ + f, d = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
							return l(), setTimeout(t, .01)
						}, b.id = d(s)
					}

					function c() {
						null != b.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(b.id) : clearTimeout(b.id), b.id = null)
					}

					function h(t, e, n, i, r) {
						switch (r) {
							case "linear":
							case "mcsLinear":
								return n * t / i + e;
							case "mcsLinearOut":
								return t /= i, t--, n * Math.sqrt(1 - t * t) + e;
							case "easeInOutSmooth":
								return t /= i / 2, 1 > t ? n / 2 * t * t + e : (t--, -n / 2 * (t * (t - 2) - 1) + e);
							case "easeInOutStrong":
								return t /= i / 2, 1 > t ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, n / 2 * (-Math.pow(2, -10 * t) + 2) + e);
							case "easeInOut":
							case "mcsEaseInOut":
								return t /= i / 2, 1 > t ? n / 2 * t * t * t + e : (t -= 2, n / 2 * (t * t * t + 2) + e);
							case "easeOutSmooth":
								return t /= i, t--, -n * (t * t * t * t - 1) + e;
							case "easeOutStrong":
								return n * (-Math.pow(2, -10 * t / i) + 1) + e;
							case "easeOut":
							case "mcsEaseOut":
							default:
								var o = (t /= i) * t,
									a = o * t;
								return e + n * (.499999999999997 * a * o + -2.5 * o * o + 5.5 * a + -6.5 * o + 4 * t)
						}
					}
					t._mTween || (t._mTween = {
						top: {},
						left: {}
					});
					var f, d, a = a || {},
						p = a.onStart || function() {},
						m = a.onUpdate || function() {},
						g = a.onComplete || function() {},
						v = G(),
						_ = 0,
						y = t.offsetTop,
						x = t.style,
						b = t._mTween[e];
					"left" === e && (y = t.offsetLeft);
					var w = n - y;
					b.stop = 0, "none" !== o && c(), u()
				},
				G = function() {
					return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
				},
				Z = function() {
					var t = this;
					t._mTween || (t._mTween = {
						top: {},
						left: {}
					});
					for (var e = ["top", "left"], n = 0; n < e.length; n++) {
						var i = e[n];
						t._mTween[i].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[i].id) : clearTimeout(t._mTween[i].id), t._mTween[i].id = null, t._mTween[i].stop = 1)
					}
				},
				J = function(t, e) {
					try {
						delete t[e]
					} catch (n) {
						t[e] = null
					}
				},
				K = function(t) {
					return !(t.which && 1 !== t.which)
				},
				tt = function(t) {
					var e = t.originalEvent.pointerType;
					return !(e && "touch" !== e && 2 !== e)
				},
				et = function(t) {
					return !isNaN(parseFloat(t)) && isFinite(t)
				},
				nt = function(t) {
					var e = t.parents(".mCSB_container");
					return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
				};
			t.fn[n] = function(e) {
				return h[e] ? h[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : h.init.apply(this, arguments)
			}, t[n] = function(e) {
				return h[e] ? h[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : h.init.apply(this, arguments)
			}, t[n].defaults = o, window[n] = !0, t(window).load(function() {
				t(r)[n](), t.extend(t.expr[":"], {
					mcsInView: t.expr[":"].mcsInView || function(e) {
						var n, i, r = t(e),
							o = r.parents(".mCSB_container");
						if (o.length) return n = o.parent(), i = [o[0].offsetTop, o[0].offsetLeft], i[0] + nt(r)[0] >= 0 && i[0] + nt(r)[0] < n.height() - r.outerHeight(!1) && i[1] + nt(r)[1] >= 0 && i[1] + nt(r)[1] < n.width() - r.outerWidth(!1)
					},
					mcsOverflow: t.expr[":"].mcsOverflow || function(e) {
						var n = t(e).data(i);
						if (n) return n.overflowed[0] || n.overflowed[1]
					}
				})
			})
		})
	}),
	/*!
	 * Copyright 2012, Chris Wanstrath
	 * Released under the MIT License
	 * https://github.com/defunkt/jquery-pjax
	 */
	function(t) {
		function e(e, i, r) {
			var o = this;
			return this.on("click.pjax", e, function(e) {
				var a = t.extend({}, m(i, r));
				a.container || (a.container = t(this).attr("data-pjax") || o), n(e, a)
			})
		}

		function n(e, n, i) {
			i = m(n, i);
			var o = e.currentTarget;
			if ("A" !== o.tagName.toUpperCase()) throw "$.fn.pjax or $.pjax.click requires an anchor element";
			if (!(e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || location.protocol !== o.protocol || location.hostname !== o.hostname || o.href.indexOf("#") > -1 && p(o) == p(location) || e.isDefaultPrevented())) {
				var a = {
						url: o.href,
						container: t(o).attr("data-pjax"),
						target: o
					},
					s = t.extend({}, a, i),
					l = t.Event("pjax:click");
				t(o).trigger(l, [s]), l.isDefaultPrevented() || (r(s), e.preventDefault(), t(o).trigger("pjax:clicked", [s]))
			}
		}

		function i(e, n, i) {
			i = m(n, i);
			var o = e.currentTarget;
			if ("FORM" !== o.tagName.toUpperCase()) throw "$.pjax.submit requires a form element";
			var a = {
				type: o.method.toUpperCase(),
				url: o.action,
				container: t(o).attr("data-pjax"),
				target: o
			};
			if ("GET" !== a.type && void 0 !== window.FormData) a.data = new FormData(o), a.processData = !1, a.contentType = !1;
			else {
				if (t(o).find(":file").length) return;
				a.data = t(o).serializeArray()
			}
			r(t.extend({}, a, i)), e.preventDefault()
		}

		function r(e) {
			function n(e, n, r) {
				r || (r = {}), r.relatedTarget = i;
				var o = t.Event(e, r);
				return s.trigger(o, n), !o.isDefaultPrevented()
			}
			e = t.extend(!0, {}, t.ajaxSettings, r.defaults, e), t.isFunction(e.url) && (e.url = e.url());
			var i = e.target,
				o = d(e.url).hash,
				s = e.context = g(e.container);
			e.data || (e.data = {}), t.isArray(e.data) ? e.data.push({
				name: "_pjax",
				value: s.selector
			}) : e.data._pjax = s.selector;
			var l;
			e.beforeSend = function(t, i) {
				if ("GET" !== i.type && (i.timeout = 0), t.setRequestHeader("X-PJAX", "true"), t.setRequestHeader("X-PJAX-Container", s.selector), !n("pjax:beforeSend", [t, i])) return !1;
				i.timeout > 0 && (l = setTimeout(function() {
					n("pjax:timeout", [t, e]) && t.abort("timeout")
				}, i.timeout), i.timeout = 0);
				var r = d(i.url);
				o && (r.hash = o), e.requestUrl = f(r)
			}, e.complete = function(t, i) {
				l && clearTimeout(l), n("pjax:complete", [t, i, e]), n("pjax:end", [t, e])
			}, e.error = function(t, i, r) {
				var o = y("", t, e),
					s = n("pjax:error", [t, i, r, e]);
				"GET" == e.type && "abort" !== i && s && a(o.url)
			}, e.success = function(i, l, u) {
				var h = r.state,
					f = "function" == typeof t.pjax.defaults.version ? t.pjax.defaults.version() : t.pjax.defaults.version,
					p = u.getResponseHeader("X-PJAX-Version"),
					m = y(i, u, e),
					g = d(m.url);
				if (o && (g.hash = o, m.url = g.href), f && p && f !== p) return void a(m.url);
				if (!m.contents) return void a(m.url);
				r.state = {
					id: e.id || c(),
					url: m.url,
					title: m.title,
					container: s.selector,
					fragment: e.fragment,
					timeout: e.timeout
				}, (e.push || e.replace) && window.history.replaceState(r.state, m.title, m.url);
				try {
					document.activeElement.blur()
				} catch (v) {}
				m.title && (document.title = m.title), n("pjax:beforeReplace", [m.contents, e], {
					state: r.state,
					previousState: h
				}), s.html(m.contents);
				var _ = s.find("input[autofocus], textarea[autofocus]").last()[0];
				_ && document.activeElement !== _ && _.focus(), x(m.scripts);
				var b = e.scrollTo;
				if (o) {
					var w = decodeURIComponent(o.slice(1)),
						T = document.getElementById(w) || document.getElementsByName(w)[0];
					T && (b = t(T).offset().top)
				}
				"number" == typeof b && t(window).scrollTop(b), n("pjax:success", [i, l, u, e])
			}, r.state || (r.state = {
				id: c(),
				url: window.location.href,
				title: document.title,
				container: s.selector,
				fragment: e.fragment,
				timeout: e.timeout
			}, window.history.replaceState(r.state, document.title)), u(r.xhr), r.options = e;
			var p = r.xhr = t.ajax(e);
			return p.readyState > 0 && (e.push && !e.replace && (b(r.state.id, h(s)), window.history.pushState(null, "", e.requestUrl)), n("pjax:start", [p, e]), n("pjax:send", [p, e])), r.xhr
		}

		function o(e, n) {
			var i = {
				url: window.location.href,
				push: !1,
				replace: !0,
				scrollTo: !1
			};
			return r(t.extend(i, m(e, n)))
		}

		function a(t) {
			window.history.replaceState(null, "", r.state.url), window.location.replace(t)
		}

		function s(e) {
			E || u(r.xhr);
			var n, i = r.state,
				o = e.state;
			if (o && o.container) {
				if (E && P == o.url) return;
				if (i) {
					if (i.id === o.id) return;
					n = i.id < o.id ? "forward" : "back"
				}
				var s = O[o.id] || [],
					l = t(s[0] || o.container),
					c = s[1];
				if (l.length) {
					i && w(n, i.id, h(l));
					var f = t.Event("pjax:popstate", {
						state: o,
						direction: n
					});
					l.trigger(f);
					var d = {
						id: o.id,
						url: o.url,
						container: l,
						push: !1,
						fragment: o.fragment,
						timeout: o.timeout,
						scrollTo: !1
					};
					if (c) {
						l.trigger("pjax:start", [null, d]), r.state = o, o.title && (document.title = o.title);
						var p = t.Event("pjax:beforeReplace", {
							state: o,
							previousState: i
						});
						l.trigger(p, [c, d]), l.html(c), l.trigger("pjax:end", [null, d])
					} else r(d);
					l[0].offsetHeight
				} else a(location.href)
			}
			E = !1
		}

		function l(e) {
			var n = t.isFunction(e.url) ? e.url() : e.url,
				i = e.type ? e.type.toUpperCase() : "GET",
				r = t("<form>", {
					method: "GET" === i ? "GET" : "POST",
					action: n,
					style: "display:none"
				});
			"GET" !== i && "POST" !== i && r.append(t("<input>", {
				type: "hidden",
				name: "_method",
				value: i.toLowerCase()
			}));
			var o = e.data;
			if ("string" == typeof o) t.each(o.split("&"), function(e, n) {
				var i = n.split("=");
				r.append(t("<input>", {
					type: "hidden",
					name: i[0],
					value: i[1]
				}))
			});
			else if (t.isArray(o)) t.each(o, function(e, n) {
				r.append(t("<input>", {
					type: "hidden",
					name: n.name,
					value: n.value
				}))
			});
			else if ("object" == typeof o) {
				var a;
				for (a in o) r.append(t("<input>", {
					type: "hidden",
					name: a,
					value: o[a]
				}))
			}
			t(document.body).append(r), r.submit()
		}

		function u(e) {
			e && e.readyState < 4 && (e.onreadystatechange = t.noop, e.abort())
		}

		function c() {
			return (new Date).getTime()
		}

		function h(t) {
			var e = t.clone();
			return e.find("script").each(function() {
				this.src || jQuery._data(this, "globalEval", !1)
			}), [t.selector, e.contents()]
		}

		function f(t) {
			return t.search = t.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""), t.href.replace(/\?($|#)/, "$1")
		}

		function d(t) {
			var e = document.createElement("a");
			return e.href = t, e
		}

		function p(t) {
			return t.href.replace(/#.*/, "")
		}

		function m(e, n) {
			return e && n ? n.container = e : n = t.isPlainObject(e) ? e : {
				container: e
			}, n.container && (n.container = g(n.container)), n
		}

		function g(e) {
			if (e = t(e), e.length) {
				if ("" !== e.selector && e.context === document) return e;
				if (e.attr("id")) return t("#" + e.attr("id"));
				throw "cant get selector for pjax container!"
			}
			throw "no pjax container for " + e.selector
		}

		function v(t, e) {
			return t.filter(e).add(t.find(e))
		}

		function _(e) {
			return t.parseHTML(e, document, !0)
		}

		function y(e, n, i) {
			var r = {},
				o = /<html/i.test(e),
				a = n.getResponseHeader("X-PJAX-URL");
			if (r.url = a ? f(d(a)) : i.requestUrl, o) var s = t(_(e.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),
				l = t(_(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
			else var s = l = t(_(e));
			if (0 === l.length) return r;
			if (r.title = v(s, "title").last().text(), i.fragment) {
				if ("body" === i.fragment) var u = l;
				else var u = v(l, i.fragment).first();
				u.length && (r.contents = "body" === i.fragment ? u : u.contents(), r.title || (r.title = u.attr("title") || u.data("title")))
			} else o || (r.contents = l);
			return r.contents && (r.contents = r.contents.not(function() {
				return t(this).is("title")
			}), r.contents.find("title").remove(), r.scripts = v(r.contents, "script[src]").remove(), r.contents = r.contents.not(r.scripts)), r.title && (r.title = t.trim(r.title)), r
		}

		function x(e) {
			if (e) {
				var n = t("script[src]");
				e.each(function() {
					var e = this.src,
						i = n.filter(function() {
							return this.src === e
						});
					if (!i.length) {
						var r = document.createElement("script"),
							o = t(this).attr("type");
						o && (r.type = o), r.src = t(this).attr("src"), document.head.appendChild(r)
					}
				})
			}
		}

		function b(t, e) {
			O[t] = e, D.push(t), T(M, 0), T(D, r.defaults.maxCacheLength)
		}

		function w(t, e, n) {
			var i, o;
			O[e] = n, "forward" === t ? (i = D, o = M) : (i = M, o = D), i.push(e), (e = o.pop()) && delete O[e], T(i, r.defaults.maxCacheLength)
		}

		function T(t, e) {
			for (; t.length > e;) delete O[t.shift()]
		}

		function S() {
			return t("meta").filter(function() {
				var e = t(this).attr("http-equiv");
				return e && "X-PJAX-VERSION" === e.toUpperCase()
			}).attr("content")
		}

		function C() {
			t.fn.pjax = e, t.pjax = r, t.pjax.enable = t.noop, t.pjax.disable = k, t.pjax.click = n, t.pjax.submit = i, t.pjax.reload = o, t.pjax.defaults = {
				timeout: 650,
				push: !0,
				replace: !1,
				type: "GET",
				dataType: "html",
				scrollTo: 0,
				maxCacheLength: 20,
				version: S
			}, t(window).on("popstate.pjax", s)
		}

		function k() {
			t.fn.pjax = function() {
				return this
			}, t.pjax = l, t.pjax.enable = C, t.pjax.disable = t.noop, t.pjax.click = t.noop, t.pjax.submit = t.noop, t.pjax.reload = function() {
				window.location.reload()
			}, t(window).off("popstate.pjax", s)
		}
		var E = !0,
			P = window.location.href,
			A = window.history.state;
		A && A.container && (r.state = A), "state" in window.history && (E = !1);
		var O = {},
			M = [],
			D = [];
		t.inArray("state", t.event.props) < 0 && t.event.props.push("state"), t.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/), t.support.pjax ? C() : k()
	}(jQuery), window.Modernizr = function(t, e, n) {
		function i(t) {
			y.cssText = t
		}

		function r(t, e) {
			return i(b.join(t + ";") + (e || ""))
		}

		function o(t, e) {
			return typeof t === e
		}

		function a(t, e) {
			return !!~("" + t).indexOf(e)
		}

		function s(t, e) {
			for (var i in t) {
				var r = t[i];
				if (!a(r, "-") && y[r] !== n) return "pfx" == e ? r : !0
			}
			return !1
		}

		function l(t, e, i) {
			for (var r in t) {
				var a = e[t[r]];
				if (a !== n) return i === !1 ? t[r] : o(a, "function") ? a.bind(i || e) : a
			}
			return !1
		}

		function u(t, e, n) {
			var i = t.charAt(0).toUpperCase() + t.slice(1),
				r = (t + " " + T.join(i + " ") + i).split(" ");
			return o(e, "string") || o(e, "undefined") ? s(r, e) : (r = (t + " " + S.join(i + " ") + i).split(" "), l(r, e, n))
		}
		var c, h, f, d = "2.8.3",
			p = {},
			m = !0,
			g = e.documentElement,
			v = "modernizr",
			_ = e.createElement(v),
			y = _.style,
			x = ":)",
			b = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
			w = "Webkit Moz O ms",
			T = w.split(" "),
			S = w.toLowerCase().split(" "),
			C = {},
			k = [],
			E = k.slice,
			P = function(t, n, i, r) {
				var o, a, s, l, u = e.createElement("div"),
					c = e.body,
					h = c || e.createElement("body");
				if (parseInt(i, 10))
					for (; i--;) s = e.createElement("div"), s.id = r ? r[i] : v + (i + 1), u.appendChild(s);
				return o = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), u.id = v, (c ? u : h).innerHTML += o, h.appendChild(u), c || (h.style.background = "", h.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(h)), a = n(u, t), c ? u.parentNode.removeChild(u) : (h.parentNode.removeChild(h), g.style.overflow = l), !!a
			},
			A = function() {
				function t(t, r) {
					r = r || e.createElement(i[t] || "div"), t = "on" + t;
					var a = t in r;
					return a || (r.setAttribute || (r = e.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(t, ""), a = o(r[t], "function"), o(r[t], "undefined") || (r[t] = n), r.removeAttribute(t))), r = null, a
				}
				var i = {
					select: "input",
					change: "input",
					submit: "form",
					reset: "form",
					error: "img",
					load: "img",
					abort: "img"
				};
				return t
			}(),
			O = {}.hasOwnProperty;
		f = o(O, "undefined") || o(O.call, "undefined") ? function(t, e) {
			return e in t && o(t.constructor.prototype[e], "undefined")
		} : function(t, e) {
			return O.call(t, e)
		}, Function.prototype.bind || (Function.prototype.bind = function(t) {
			var e = this;
			if ("function" != typeof e) throw new TypeError;
			var n = E.call(arguments, 1),
				i = function() {
					if (this instanceof i) {
						var r = function() {};
						r.prototype = e.prototype;
						var o = new r,
							a = e.apply(o, n.concat(E.call(arguments)));
						return Object(a) === a ? a : o
					}
					return e.apply(t, n.concat(E.call(arguments)))
				};
			return i
		}), C.flexbox = function() {
			return u("flexWrap")
		}, C.flexboxlegacy = function() {
			return u("boxDirection")
		}, C.rgba = function() {
			return i("background-color:rgba(150,255,150,.5)"), a(y.backgroundColor, "rgba")
		}, C.hsla = function() {
			return i("background-color:hsla(120,40%,100%,.5)"), a(y.backgroundColor, "rgba") || a(y.backgroundColor, "hsla")
		}, C.multiplebgs = function() {
			return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(y.background)
		}, C.backgroundsize = function() {
			return u("backgroundSize")
		}, C.borderimage = function() {
			return u("borderImage")
		}, C.borderradius = function() {
			return u("borderRadius")
		}, C.boxshadow = function() {
			return u("boxShadow")
		}, C.textshadow = function() {
			return "" === e.createElement("div").style.textShadow
		}, C.opacity = function() {
			return r("opacity:.55"), /^0.55$/.test(y.opacity)
		}, C.cssanimations = function() {
			return u("animationName")
		}, C.csscolumns = function() {
			return u("columnCount")
		}, C.cssgradients = function() {
			var t = "background-image:",
				e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
				n = "linear-gradient(left top,#9f9, white);";
			return i((t + "-webkit- ".split(" ").join(e + t) + b.join(n + t)).slice(0, -t.length)), a(y.backgroundImage, "gradient")
		}, C.cssreflections = function() {
			return u("boxReflect")
		}, C.csstransforms = function() {
			return !!u("transform")
		}, C.csstransforms3d = function() {
			var t = !!u("perspective");
			return t && "webkitPerspective" in g.style && P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, n) {
				t = 9 === e.offsetLeft && 3 === e.offsetHeight
			}), t
		}, C.csstransitions = function() {
			return u("transition")
		}, C.fontface = function() {
			var t;
			return P('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
				var r = e.getElementById("smodernizr"),
					o = r.sheet || r.styleSheet,
					a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
				t = /src/i.test(a) && 0 === a.indexOf(i.split(" ")[0])
			}), t
		}, C.generatedcontent = function() {
			var t;
			return P(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
				t = e.offsetHeight >= 3
			}), t
		};
		for (var M in C) f(C, M) && (h = M.toLowerCase(), p[h] = C[M](), k.push((p[h] ? "" : "no-") + h));
		return p.addTest = function(t, e) {
				if ("object" == typeof t)
					for (var i in t) f(t, i) && p.addTest(i, t[i]);
				else {
					if (t = t.toLowerCase(), p[t] !== n) return p;
					e = "function" == typeof e ? e() : e, "undefined" != typeof m && m && (g.className += " " + (e ? "" : "no-") + t), p[t] = e
				}
				return p
			}, i(""), _ = c = null,
			function(t, e) {
				function n(t, e) {
					var n = t.createElement("p"),
						i = t.getElementsByTagName("head")[0] || t.documentElement;
					return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
				}

				function i() {
					var t = _.elements;
					return "string" == typeof t ? t.split(" ") : t
				}

				function r(t) {
					var e = v[t[m]];
					return e || (e = {}, g++, t[m] = g, v[g] = e), e
				}

				function o(t, n, i) {
					if (n || (n = e), c) return n.createElement(t);
					i || (i = r(n));
					var o;
					return o = i.cache[t] ? i.cache[t].cloneNode() : p.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), !o.canHaveChildren || d.test(t) || o.tagUrn ? o : i.frag.appendChild(o)
				}

				function a(t, n) {
					if (t || (t = e), c) return t.createDocumentFragment();
					n = n || r(t);
					for (var o = n.frag.cloneNode(), a = 0, s = i(), l = s.length; l > a; a++) o.createElement(s[a]);
					return o
				}

				function s(t, e) {
					e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(n) {
						return _.shivMethods ? o(n, t, e) : e.createElem(n)
					}, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(t) {
						return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
					}) + ");return n}")(_, e.frag)
				}

				function l(t) {
					t || (t = e);
					var i = r(t);
					return _.shivCSS && !u && !i.hasCSS && (i.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || s(t, i), t
				}
				var u, c, h = "3.7.0",
					f = t.html5 || {},
					d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					m = "_html5shiv",
					g = 0,
					v = {};
				! function() {
					try {
						var t = e.createElement("a");
						t.innerHTML = "<xyz></xyz>", u = "hidden" in t, c = 1 == t.childNodes.length || function() {
							e.createElement("a");
							var t = e.createDocumentFragment();
							return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
						}()
					} catch (n) {
						u = !0, c = !0
					}
				}();
				var _ = {
					elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
					version: h,
					shivCSS: f.shivCSS !== !1,
					supportsUnknownElements: c,
					shivMethods: f.shivMethods !== !1,
					type: "default",
					shivDocument: l,
					createElement: o,
					createDocumentFragment: a
				};
				t.html5 = _, l(e)
			}(this, e), p._version = d, p._prefixes = b, p._domPrefixes = S, p._cssomPrefixes = T, p.hasEvent = A, p.testProp = function(t) {
				return s([t])
			}, p.testAllProps = u, p.testStyles = P, p.prefixed = function(t, e, n) {
				return e ? u(t, e, n) : u(t, "pfx")
			}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + k.join(" ") : ""), p
	}(this, this.document),
	function(t, e, n) {
		function i(t) {
			return "[object Function]" == g.call(t)
		}

		function r(t) {
			return "string" == typeof t
		}

		function o() {}

		function a(t) {
			return !t || "loaded" == t || "complete" == t || "uninitialized" == t
		}

		function s() {
			var t = v.shift();
			_ = 1, t ? t.t ? p(function() {
				("c" == t.t ? f.injectCss : f.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
			}, 0) : (t(), s()) : _ = 0
		}

		function l(t, n, i, r, o, l, u) {
			function c(e) {
				if (!d && a(h.readyState) && (y.r = d = 1, !_ && s(), h.onload = h.onreadystatechange = null, e)) {
					"img" != t && p(function() {
						b.removeChild(h)
					}, 50);
					for (var i in k[n]) k[n].hasOwnProperty(i) && k[n][i].onload()
				}
			}
			var u = u || f.errorTimeout,
				h = e.createElement(t),
				d = 0,
				g = 0,
				y = {
					t: i,
					s: n,
					e: o,
					a: l,
					x: u
				};
			1 === k[n] && (g = 1, k[n] = []), "object" == t ? h.data = n : (h.src = n, h.type = t), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() {
				c.call(this, g)
			}, v.splice(r, 0, y), "img" != t && (g || 2 === k[n] ? (b.insertBefore(h, x ? null : m), p(c, u)) : k[n].push(h))
		}

		function u(t, e, n, i, o) {
			return _ = 0, e = e || "j", r(t) ? l("c" == e ? T : w, t, e, this.i++, n, i, o) : (v.splice(this.i++, 0, t), 1 == v.length && s()), this
		}

		function c() {
			var t = f;
			return t.loader = {
				load: u,
				i: 0
			}, t
		}
		var h, f, d = e.documentElement,
			p = t.setTimeout,
			m = e.getElementsByTagName("script")[0],
			g = {}.toString,
			v = [],
			_ = 0,
			y = "MozAppearance" in d.style,
			x = y && !!e.createRange().compareNode,
			b = x ? d : m.parentNode,
			d = t.opera && "[object Opera]" == g.call(t.opera),
			d = !!e.attachEvent && !d,
			w = y ? "object" : d ? "script" : "img",
			T = d ? "script" : w,
			S = Array.isArray || function(t) {
				return "[object Array]" == g.call(t)
			},
			C = [],
			k = {},
			E = {
				timeout: function(t, e) {
					return e.length && (t.timeout = e[0]), t
				}
			};
		f = function(t) {
			function e(t) {
				var e, n, i, t = t.split("!"),
					r = C.length,
					o = t.pop(),
					a = t.length,
					o = {
						url: o,
						origUrl: o,
						prefixes: t
					};
				for (n = 0; a > n; n++) i = t[n].split("="), (e = E[i.shift()]) && (o = e(o, i));
				for (n = 0; r > n; n++) o = C[n](o);
				return o
			}

			function a(t, r, o, a, s) {
				var l = e(t),
					u = l.autoCallback;
				l.url.split(".").pop().split("?").shift(), l.bypass || (r && (r = i(r) ? r : r[t] || r[a] || r[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, r, o, a, s) : (k[l.url] ? l.noexec = !0 : k[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (i(r) || i(u)) && o.load(function() {
					c(), r && r(l.origUrl, s, a), u && u(l.origUrl, s, a), k[l.url] = 2
				})))
			}

			function s(t, e) {
				function n(t, n) {
					if (t) {
						if (r(t)) n || (h = function() {
							var t = [].slice.call(arguments);
							f.apply(this, t), d()
						}), a(t, h, e, 0, u);
						else if (Object(t) === t)
							for (l in s = function() {
									var e, n = 0;
									for (e in t) t.hasOwnProperty(e) && n++;
									return n
								}(), t) t.hasOwnProperty(l) && (!n && !--s && (i(h) ? h = function() {
								var t = [].slice.call(arguments);
								f.apply(this, t), d()
							} : h[l] = function(t) {
								return function() {
									var e = [].slice.call(arguments);
									t && t.apply(this, e), d()
								}
							}(f[l])), a(t[l], h, e, l, u))
					} else !n && d()
				}
				var s, l, u = !!t.test,
					c = t.load || t.both,
					h = t.callback || o,
					f = h,
					d = t.complete || o;
				n(u ? t.yep : t.nope, !!c), c && n(c)
			}
			var l, u, h = this.yepnope.loader;
			if (r(t)) a(t, 0, h, 0);
			else if (S(t))
				for (l = 0; l < t.length; l++) u = t[l], r(u) ? a(u, 0, h, 0) : S(u) ? f(u) : Object(u) === u && s(u, h);
			else Object(t) === t && s(t, h)
		}, f.addPrefix = function(t, e) {
			E[t] = e
		}, f.addFilter = function(t) {
			C.push(t)
		}, f.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", h = function() {
			e.removeEventListener("DOMContentLoaded", h, 0), e.readyState = "complete"
		}, 0)), t.yepnope = c(), t.yepnope.executeStack = s, t.yepnope.injectJs = function(t, n, i, r, l, u) {
			var c, h, d = e.createElement("script"),
				r = r || f.errorTimeout;
			d.src = t;
			for (h in i) d.setAttribute(h, i[h]);
			n = u ? s : n || o, d.onreadystatechange = d.onload = function() {
				!c && a(d.readyState) && (c = 1, n(), d.onload = d.onreadystatechange = null)
			}, p(function() {
				c || (c = 1, n(1))
			}, r), l ? d.onload() : m.parentNode.insertBefore(d, m)
		}, t.yepnope.injectCss = function(t, n, i, r, a, l) {
			var u, r = e.createElement("link"),
				n = l ? s : n || o;
			r.href = t, r.rel = "stylesheet", r.type = "text/css";
			for (u in i) r.setAttribute(u, i[u]);
			a || (m.parentNode.insertBefore(r, m), p(n, 0))
		}
	}(this, document), Modernizr.load = function() {
		yepnope.apply(window, [].slice.call(arguments, 0))
	},
	function(t) {
		var e = t._ || require("underscore"),
			n = Array.prototype.slice,
			i = Array.prototype.concat,
			r = function(t) {
				return null != t
			};
		e.mixin({
			cat: function() {
				return e.reduce(arguments, function(t, r) {
					return e.isArguments(r) ? i.call(t, n.call(r)) : i.call(t, r)
				}, [])
			},
			cons: function(t, n) {
				return e.cat([t], n)
			},
			chunk: function(t, n, i) {
				var r = function(t) {
					if (null == t) return [];
					var o = e.take(t, n);
					return n === e.size(o) ? e.cons(o, r(e.drop(t, n))) : i ? [e.take(e.cat(o, i), n)] : []
				};
				return r(t)
			},
			chunkAll: function(t, n, i) {
				i = null != i ? i : n;
				var r = function(t, n, i) {
					return e.isEmpty(t) ? [] : e.cons(e.take(t, n), r(e.drop(t, i), n, i))
				};
				return r(t, n, i)
			},
			mapcat: function(t, n) {
				return e.cat.apply(null, e.map(t, n))
			},
			interpose: function(t, i) {
				if (!e.isArray(t)) throw new TypeError;
				var r = e.size(t);
				return 0 === r ? t : 1 === r ? t : n.call(e.mapcat(t, function(t) {
					return e.cons(t, [i])
				}), 0, -1)
			},
			weave: function() {
				return e.some(arguments) ? 1 == arguments.length ? arguments[0] : e.filter(e.flatten(e.zip.apply(null, arguments), !0), function(t) {
					return null != t
				}) : []
			},
			interleave: e.weave,
			repeat: function(t, n) {
				return e.times(t, function() {
					return n
				})
			},
			cycle: function(t, n) {
				return e.flatten(e.times(t, function() {
					return n
				}), !0)
			},
			splitAt: function(t, n) {
				return [e.take(t, n), e.drop(t, n)]
			},
			iterateUntil: function(t, e, n) {
				for (var i = [], r = t(n); e(r);) i.push(r), r = t(r);
				return i
			},
			takeSkipping: function(t, n) {
				var i = [],
					r = e.size(t);
				if (0 >= n) return [];
				if (1 === n) return t;
				for (var o = 0; r > o; o += n) i.push(t[o]);
				return i
			},
			reductions: function(t, n, i) {
				var r = [],
					o = i;
				return e.each(t, function(e, i) {
					o = n(o, t[i]), r.push(o)
				}), r
			},
			keepIndexed: function(t, n) {
				return e.filter(e.map(e.range(e.size(t)), function(e) {
					return n(e, t[e])
				}), r)
			},
			reverseOrder: function(t) {
				if ("string" == typeof t) throw new TypeError("Strings cannot be reversed by _.reverseOrder");
				return n.call(t).reverse()
			}
		})
	}(this),
	function(t) {
		var e = t._ || require("underscore"),
			n = Array.prototype.slice,
			i = Array.prototype.concat,
			r = function(t) {
				return null != t
			},
			o = function(t) {
				return t !== !1 && r(t)
			},
			a = function(t) {
				return e.isArray(t) || e.isArguments(t)
			};
		e.mixin({
			second: function(t, e, i) {
				return null == t ? void 0 : null == e || i ? t[1] : n.call(t, 1, e)
			},
			third: function(t, e, i) {
				return null == t ? void 0 : null == e || i ? t[2] : n.call(t, 2, e)
			},
			nth: function(t, e, n) {
				return null == e || n ? void 0 : t[e]
			},
			takeWhile: function(t, n) {
				if (!a(t)) throw new TypeError;
				for (var i = e.size(t), r = 0; i > r && o(n(t[r])); r++);
				return e.take(t, r)
			},
			dropWhile: function(t, n) {
				if (!a(t)) throw new TypeError;
				for (var i = e.size(t), r = 0; i > r && o(n(t[r])); r++);
				return e.drop(t, r)
			},
			splitWith: function(t, n) {
				return [e.takeWhile(t, n), e.dropWhile(t, n)]
			},
			partitionBy: function(t, n) {
				if (e.isEmpty(t) || !r(t)) return [];
				var o = e.first(t),
					a = n(o),
					s = i.call([o], e.takeWhile(e.rest(t), function(t) {
						return e.isEqual(a, n(t))
					}));
				return i.call([s], e.partitionBy(e.drop(t, e.size(s)), n))
			},
			best: function(t, n) {
				return e.reduce(t, function(t, e) {
					return n(t, e) ? t : e
				})
			},
			keep: function(t, n) {
				if (!a(t)) throw new TypeError("expected an array as the first argument");
				return e.filter(e.map(t, function(t) {
					return n(t)
				}), r)
			}
		})
	}(this),
	function(t) {
		function e(t) {
			return r.isElement(t) ? t.children : t
		}

		function n(t, e, n, i, l, u) {
			var c = [];
			return function h(t, f, d) {
				if (r.isObject(t)) {
					if (c.indexOf(t) >= 0) throw new TypeError(s);
					c.push(t)
				}
				if (n) {
					var p = n.call(l, t, f, d);
					if (p === a) return a;
					if (p === o) return
				}
				var m, g = e(t);
				if (r.isObject(g) && !r.isEmpty(g)) {
					u && (m = r.isArray(t) ? [] : {});
					var v = r.any(g, function(e, n) {
						var i = h(e, n, t);
						return i === a ? !0 : void(m && (m[n] = i))
					});
					if (v) return a
				}
				return i ? i.call(l, t, f, d, m) : void 0
			}(t)
		}

		function i(t, e, n) {
			var i = [];
			return this.preorder(t, function(t, a) {
				return n || a != e ? void(r.has(t, e) && (i[i.length] = t[e])) : o
			}), i
		}
		var r = t._ || require("underscore"),
			o = {},
			a = {},
			s = "Not a tree: same object found in two different branches",
			l = {
				find: function(t, e, n) {
					var i;
					return this.preorder(t, function(t, r, o) {
						return e.call(n, t, r, o) ? (i = t, a) : void 0
					}, n), i
				},
				filter: function(t, e, n, i) {
					var r = [];
					return null == t ? r : (e(t, function(t, e, o) {
						n.call(i, t, e, o) && r.push(t)
					}, null, this._traversalStrategy), r)
				},
				reject: function(t, e, n, i) {
					return this.filter(t, e, function(t, e, r) {
						return !n.call(i, t, e, r)
					})
				},
				map: function(t, e, n, i) {
					var r = [];
					return e(t, function(t, e, o) {
						r[r.length] = n.call(i, t, e, o)
					}, null, this._traversalStrategy), r
				},
				pluck: function(t, e) {
					return i.call(this, t, e, !1)
				},
				pluckRec: function(t, e) {
					return i.call(this, t, e, !0)
				},
				postorder: function(t, e, i, r) {
					r = r || this._traversalStrategy, n(t, r, null, e, i)
				},
				preorder: function(t, e, i, r) {
					r = r || this._traversalStrategy, n(t, r, e, null, i)
				},
				reduce: function(t, e, i, r) {
					var o = function(t, n, r, o) {
						return e(o || i, t, n, r)
					};
					return n(t, this._traversalStrategy, null, o, r, !0)
				}
			};
		l.collect = l.map, l.detect = l.find, l.select = l.filter, r.walk = function(t) {
			var n = r.clone(l);
			return r.bindAll.apply(null, [n].concat(r.keys(n))), n._traversalStrategy = t || e, n
		}, r.extend(r.walk, r.walk())
	}(this),
	function(t) {
		function e(t) {
			return function() {
				if (1 === arguments.length) return t.apply(this, arguments);
				throw new RangeError("Only a single argument may be accepted.")
			}
		}
		var n = t._ || require("underscore"),
			i = function() {
				function t(n, i, r, o, a, s) {
					return s === !0 ? o.unshift(a) : o.push(a), o.length == r ? n.apply(i, o) : e(function() {
						return t(n, i, r, o.slice(0), arguments[0], s)
					})
				}
				return function(n, i) {
					var r = this;
					return e(function() {
						return t(n, r, n.length, [], arguments[0], i)
					})
				}
			}(),
			r = function() {
				var t = [];
				return function(e) {
					if ("function" != typeof e) throw new Error("Argument 1 must be a function.");
					var n = e.length;
					return void 0 === t[n] && (t[n] = function(t) {
						return function() {
							if (arguments.length !== n) throw new RangeError(n + " arguments must be applied.");
							return t.apply(this, arguments)
						}
					}), t[n](e)
				}
			}();
		n.mixin({
			fix: function(t) {
				var e = n.rest(arguments),
					i = function() {
						for (var i = e.slice(), r = 0, o = 0; o < (i.length || r < arguments.length); o++) i[o] === n && (i[o] = arguments[r++]);
						return t.apply(null, i)
					};
				return i._original = t, i
			},
			unary: function(t) {
				return function(e) {
					return t.call(this, e)
				}
			},
			binary: function(t) {
				return function(e, n) {
					return t.call(this, e, n)
				}
			},
			ternary: function(t) {
				return function(e, n, i) {
					return t.call(this, e, n, i)
				}
			},
			quaternary: function(t) {
				return function(e, n, i, r) {
					return t.call(this, e, n, i, r)
				}
			},
			curry: i,
			rCurry: function(t) {
				return i.call(this, t, !0)
			},
			curry2: function(t) {
				return e(function(n) {
					return e(function(e) {
						return t.call(this, n, e)
					})
				})
			},
			curry3: function(t) {
				return e(function(n) {
					return e(function(i) {
						return e(function(e) {
							return t.call(this, n, i, e)
						})
					})
				})
			},
			rcurry2: function(t) {
				return e(function(n) {
					return e(function(e) {
						return t.call(this, e, n)
					})
				})
			},
			rcurry3: function(t) {
				return e(function(n) {
					return e(function(i) {
						return e(function(e) {
							return t.call(this, e, i, n)
						})
					})
				})
			},
			enforce: r
		}), n.arity = function() {
			var t = {};
			return function e(n, i) {
				if (null == t[n]) {
					for (var r = new Array(n), o = 0; n > o; ++o) r[o] = "__" + o;
					var a = r.join(),
						s = "return function (" + a + ") { return fun.apply(this, arguments); };";
					t[n] = new Function(["fun"], s)
				}
				return null == i ? function(t) {
					return e(n, t)
				} : t[n](i)
			}
		}()
	}(this),
	function(t) {
		function e(t, e) {
			return n.arity(t.length, function() {
				return t.apply(this, s.call(arguments, e))
			})
		}
		var n = t._ || require("underscore"),
			i = function(t) {
				return null != t
			},
			r = function(t) {
				return t !== !1 && i(t)
			},
			o = [].reverse,
			a = [].slice,
			s = [].map,
			l = function(t) {
				return function(e, n) {
					return 1 === arguments.length ? function(n) {
						return t(e, n)
					} : t(e, n)
				}
			};
		n.mixin({
			always: n.constant,
			pipeline: function() {
				var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
				return function(e) {
					return n.reduce(t, function(t, e) {
						return e(t)
					}, e)
				}
			},
			conjoin: function() {
				var t = arguments;
				return function(e) {
					return n.every(e, function(e) {
						return n.every(t, function(t) {
							return t(e)
						})
					})
				}
			},
			disjoin: function() {
				var t = arguments;
				return function(e) {
					return n.some(e, function(e) {
						return n.some(t, function(t) {
							return t(e)
						})
					})
				}
			},
			comparator: function(t) {
				return function(e, n) {
					return r(t(e, n)) ? -1 : r(t(n, e)) ? 1 : 0
				}
			},
			complement: function(t) {
				return function() {
					return !t.apply(this, arguments)
				}
			},
			splat: function(t) {
				return function(e) {
					return t.apply(this, e)
				}
			},
			unsplat: function(t) {
				var e = t.length;
				return 1 > e ? t : 1 === e ? function() {
					return t.call(this, a.call(arguments, 0))
				} : function() {
					var n = arguments.length,
						i = a.call(arguments, 0, e - 1),
						r = Math.max(e - n - 1, 0),
						o = new Array(r),
						s = a.call(arguments, t.length - 1);
					return t.apply(this, i.concat(o).concat([s]))
				}
			},
			unsplatl: function(t) {
				var e = t.length;
				return 1 > e ? t : 1 === e ? function() {
					return t.call(this, a.call(arguments, 0))
				} : function() {
					var n = arguments.length,
						i = a.call(arguments, Math.max(n - e + 1, 0)),
						r = a.call(arguments, 0, Math.max(n - e + 1, 0));
					return t.apply(this, [r].concat(i))
				}
			},
			mapArgs: l(e),
			juxt: function() {
				var t = arguments;
				return function() {
					var e = arguments;
					return n.map(t, function(t) {
						return t.apply(this, e)
					}, this)
				}
			},
			fnull: function(t) {
				var e = n.rest(arguments);
				return function() {
					for (var r = n.toArray(arguments), o = n.size(e), a = 0; o > a; a++) i(r[a]) || (r[a] = e[a]);
					return t.apply(this, r)
				}
			},
			flip2: function(t) {
				return function() {
					var e = a.call(arguments);
					return e[0] = arguments[1], e[1] = arguments[0], t.apply(this, e)
				}
			},
			flip: function(t) {
				return function() {
					var e = o.call(arguments);
					return t.apply(this, e)
				}
			},
			functionalize: function(t) {
				return function(e) {
					return t.apply(e, n.rest(arguments))
				}
			},
			methodize: function(t) {
				return function() {
					return t.apply(null, n.cons(this, arguments))
				}
			},
			k: n.always,
			t: n.pipeline
		}), n.unsplatr = n.unsplat, n.mapArgsWith = l(n.flip(e)), n.bound = function(t, e) {
			var i = t[e];
			if (!n.isFunction(i)) throw new TypeError("Expected property to be a function");
			return n.bind(i, t)
		}
	}(this),
	function(t) {
		var e = t._ || require("underscore"),
			n = Array.prototype.slice;
		e.mixin({
			attempt: function(t, i) {
				if (null == t) return void 0;
				var r = t[i],
					o = n.call(arguments, 2);
				return e.isFunction(r) ? r.apply(t, o) : void 0
			}
		})
	}(this),
	function(t, e) {
		function n(t) {
			return function(e) {
				return t.call(this, e)
			}
		}

		function i(t, e, n) {
			var i, r;
			for (i = void 0 !== n ? n : t(), r = t(); null != r;) i = e.call(r, i, r), r = t();
			return i
		}

		function r(t, e) {
			var n = T;
			return function() {
				return n === T ? n = t : null != n && (n = e.call(n, n)), n
			}
		}

		function o(t, e) {
			var n, i, r = t;
			return function() {
				return null != r ? (n = e.call(r, r), i = n[1], r = null != i ? n[0] : void 0, i) : void 0
			}
		}

		function a(t, e, n) {
			var i = n;
			return function() {
				var n = t();
				return null == n ? n : i = void 0 === i ? n : e.call(n, i, n)
			}
		}

		function s(t, e, n) {
			var i, r, o = n;
			return function() {
				return r = t(), null == r ? r : void 0 === o ? o = r : (i = e.call(r, o, r), o = i[0], i[1])
			}
		}

		function l(t, e) {
			return function() {
				var n;
				return n = t(), null != n ? e.call(n, n) : void 0
			}
		}

		function u(t, e) {
			var n = null;
			return function() {
				var i, r;
				if (null == n) {
					if (r = t(), null == r) return void(n = null);
					n = e.call(r, r)
				}
				for (; null == i;)
					if (i = n(), null == i) {
						if (r = t(), null == r) return void(n = null);
						n = e.call(r, r)
					}
				return i
			}
		}

		function c(t, e) {
			return function() {
				var n;
				for (n = t(); null != n;) {
					if (e.call(n, n)) return n;
					n = t()
				}
				return void 0
			}
		}

		function h(t, e) {
			return c(t, function(t) {
				return !e(t)
			})
		}

		function f(t, e) {
			return c(t, e)()
		}

		function d(t, e, n) {
			for (var i = 0; e-- > 0;) t();
			return null != n ? function() {
				return ++i <= n ? t() : void 0
			} : t
		}

		function p(t, e) {
			return d(t, null == e ? 1 : e)
		}

		function m(t, e) {
			return d(t, 0, null == e ? 1 : e)
		}

		function g(t) {
			var e = 0;
			return function() {
				return t[e++]
			}
		}

		function v(t) {
			var e, n, i;
			return e = 0, i = [], n = function() {
				var r, o;
				return r = t[e++], r instanceof Array ? (i.push({
					array: t,
					index: e
				}), t = r, e = 0, n()) : void 0 === r ? i.length > 0 ? (o = i.pop(), t = o.array, e = o.index, n()) : void 0 : r
			}
		}

		function _(t) {
			return function() {
				return t
			}
		}

		function y(t, e, n) {
			return function() {
				var i;
				return t > e ? void 0 : (i = t, t += n, i)
			}
		}

		function x(t, e, n) {
			return function() {
				var i;
				return e > t ? void 0 : (i = t, t -= n, i)
			}
		}

		function b(t, e, n) {
			return null == t ? y(1, 1 / 0, 1) : null == e ? y(t, 1 / 0, 1) : null == n ? e >= t ? y(t, e, 1) : x(t, e, 1) : n > 0 ? y(t, e, n) : 0 > n ? x(t, e, Math.abs(n)) : k(t)
		}
		var w = t._ || require("underscore"),
			T = {},
			S = n(b);
		w.iterators = {
			accumulate: a,
			accumulateWithReturn: s,
			foldl: i,
			reduce: i,
			unfold: r,
			unfoldWithReturn: o,
			map: l,
			mapcat: u,
			select: c,
			reject: h,
			filter: c,
			find: f,
			slice: d,
			drop: p,
			take: m,
			List: g,
			Tree: v,
			constant: _,
			K: _,
			numbers: S,
			range: b
		}
	}(this, void 0),
	function(t) {
		var e = t._ || require("underscore");
		e.mixin({
			isInstanceOf: function(t, e) {
				return t instanceof e
			},
			isAssociative: function(t) {
				return e.isArray(t) || e.isObject(t) || e.isArguments(t)
			},
			isIndexed: function(t) {
				return e.isArray(t) || e.isString(t) || e.isArguments(t)
			},
			isSequential: function(t) {
				return e.isArray(t) || e.isArguments(t)
			},
			isPlainObject: function(n) {
				return e.isObject(n) && n.constructor === t.Object
			},
			isZero: function(t) {
				return 0 === t
			},
			isEven: function(t) {
				return e.isFinite(t) && 0 === (1 & t)
			},
			isOdd: function(t) {
				return e.isFinite(t) && !e.isEven(t)
			},
			isPositive: function(t) {
				return t > 0
			},
			isNegative: function(t) {
				return 0 > t
			},
			isValidDate: function(t) {
				return e.isDate(t) && !e.isNaN(t.getTime())
			},
			isNumeric: function(t) {
				return !isNaN(parseFloat(t)) && isFinite(t)
			},
			isInteger: function(t) {
				return e.isNumeric(t) && t % 1 === 0
			},
			isFloat: function(t) {
				return e.isNumeric(t) && !e.isInteger(t)
			},
			isJSON: function(t) {
				try {
					JSON.parse(t)
				} catch (e) {
					return !1
				}
				return !0
			},
			isIncreasing: function() {
				var t = e.size(arguments);
				if (1 === t) return !0;
				if (2 === t) return arguments[0] < arguments[1];
				for (var n = 1; t > n; n++)
					if (arguments[n - 1] >= arguments[n]) return !1;
				return !0
			},
			isDecreasing: function() {
				var t = e.size(arguments);
				if (1 === t) return !0;
				if (2 === t) return arguments[0] > arguments[1];
				for (var n = 1; t > n; n++)
					if (arguments[n - 1] <= arguments[n]) return !1;
				return !0
			}
		})
	}(this),
	function(t) {
		var e = t._ || require("underscore"),
			n = (Array.prototype.slice,
				Array.prototype.concat),
			i = function(t) {
				return null != t
			},
			r = function(t) {
				return t !== !1 && i(t)
			},
			o = function(t) {
				return e.isArray(t) || e.isObject(t)
			},
			a = function(t) {
				return function(e) {
					return function(n) {
						return t(n, e)
					}
				}
			};
		e.mixin({
			merge: function() {
				var t = e.some(arguments) ? {} : null;
				return r(t) && e.extend.apply(null, n.call([t], e.toArray(arguments))), t
			},
			renameKeys: function(t, r) {
				return e.reduce(r, function(e, n, r) {
					return i(t[r]) ? (e[n] = t[r], e) : e
				}, e.omit.apply(null, n.call([t], e.keys(r))))
			},
			snapshot: function(t) {
				if (null == t || "object" != typeof t) return t;
				var n = new t.constructor;
				for (var i in t) t.hasOwnProperty(i) && (n[i] = e.snapshot(t[i]));
				return n
			},
			updatePath: function(t, n, r, a) {
				if (!o(t)) throw new TypeError("Attempted to update a non-associative object.");
				if (!i(r)) return n(t);
				var s = e.isArray(r),
					l = s ? r : [r],
					u = s ? e.snapshot(t) : e.clone(t),
					c = e.last(l),
					h = u;
				return e.each(e.initial(l), function(t) {
					a && !e.has(h, t) && (h[t] = e.clone(a)), h = h[t]
				}), h[c] = n(h[c]), u
			},
			setPath: function(t, n, r, o) {
				if (!i(r)) throw new TypeError("Attempted to set a property at a null path.");
				return e.updatePath(t, function() {
					return n
				}, r, o)
			},
			frequencies: a(e.countBy)(e.identity)
		})
	}(this),
	function(t) {
		{
			var e = t._ || require("underscore"),
				n = Array.prototype.concat,
				i = Array.prototype;
			i.slice
		}
		e.mixin({
			accessor: function(t) {
				return function(e) {
					return e && e[t]
				}
			},
			dictionary: function(t) {
				return function(e) {
					return t && e && t[e]
				}
			},
			selectKeys: function(t, i) {
				return e.pick.apply(null, n.call([t], i))
			},
			kv: function(t, n) {
				return e.has(t, n) ? [n, t[n]] : void 0
			},
			getPath: function r(t, n) {
				return "string" == typeof n && (n = n.split(".")), void 0 === t ? void 0 : 0 === n.length ? t : null === t ? void 0 : r(t[e.first(n)], e.rest(n))
			},
			hasPath: function o(t, n) {
				"string" == typeof n && (n = n.split("."));
				var i = n.length;
				return null == t && i > 0 ? !1 : n[0] in t ? 1 === i ? !0 : o(t[e.first(n)], e.rest(n)) : !1
			},
			pickWhen: function(t, n) {
				var i = {};
				return e.each(t, function(e, r) {
					n(t[r]) && (i[r] = t[r])
				}), i
			},
			omitWhen: function(t, n) {
				return e.pickWhen(t, function(t) {
					return !n(t)
				})
			}
		})
	}(this),
	function(t) {
		var e = t._ || require("underscore");
		e.mixin({
			exists: function(t) {
				return null != t
			},
			truthy: function(t) {
				return t !== !1 && e.exists(t)
			},
			falsey: function(t) {
				return !e.truthy(t)
			},
			not: function(t) {
				return !t
			},
			firstExisting: function() {
				for (var t = 0; t < arguments.length; t++)
					if (null != arguments[t]) return arguments[t]
			}
		})
	}(this),
	function(t) {
		function e(t) {
			return function() {
				return k.reduce(arguments, t)
			}
		}

		function n(t) {
			return function() {
				for (var e, n = 0; n < arguments.length - 1; n++)
					if (e = t(arguments[n], arguments[n + 1]), e === !1) return e;
				return e
			}
		}

		function i(t) {
			return function() {
				return !t.apply(this, arguments)
			}
		}

		function r(t, e) {
			return t + e
		}

		function o(t, e) {
			return t - e
		}

		function a(t, e) {
			return t * e
		}

		function s(t, e) {
			return t / e
		}

		function l(t, e) {
			return t % e
		}

		function u(t) {
			return ++t
		}

		function c(t) {
			return --t
		}

		function h(t) {
			return -t
		}

		function f(t, e) {
			return t & e
		}

		function d(t, e) {
			return t | e
		}

		function p(t, e) {
			return t ^ e
		}

		function m(t, e) {
			return t << e
		}

		function g(t, e) {
			return t >> e
		}

		function v(t, e) {
			return t >>> e
		}

		function _(t) {
			return ~t
		}

		function y(t, e) {
			return t == e
		}

		function x(t, e) {
			return t === e
		}

		function b(t) {
			return !t
		}

		function w(t, e) {
			return t > e
		}

		function T(t, e) {
			return e > t
		}

		function S(t, e) {
			return t >= e
		}

		function C(t, e) {
			return e >= t
		}
		var k = t._ || require("underscore");
		k.mixin({
			add: e(r),
			sub: e(o),
			mul: e(a),
			div: e(s),
			mod: l,
			inc: u,
			dec: c,
			neg: h,
			eq: n(y),
			seq: n(x),
			neq: i(n(y)),
			sneq: i(n(x)),
			not: b,
			gt: n(w),
			lt: n(T),
			gte: n(S),
			lte: n(C),
			bitwiseAnd: e(f),
			bitwiseOr: e(d),
			bitwiseXor: e(p),
			bitwiseNot: _,
			bitwiseLeft: e(m),
			bitwiseRight: e(g),
			bitwiseZ: e(v)
		})
	}(this),
	function(t) {
		var e = t._ || require("underscore"),
			n = /\+/g,
			i = /\%20/g,
			r = /(?:([^\[]+))|(?:\[(.*?)\])/g,
			o = function(t) {
				return decodeURIComponent(t.replace(n, "%20"))
			},
			a = function(t) {
				return encodeURIComponent(t).replace(i, "+")
			},
			s = function(t, n, i) {
				return e.isUndefined(i) && (i = !0), e.isArray(n) ? e.map(n, function(e, n) {
					return s(i ? n : t + "[]", e, !1)
				}).join("&") : e.isObject(n) ? e.map(n, function(e, n) {
					return s(i ? n : t + "[" + n + "]", e, !1)
				}).join("&") : a(t) + "=" + a(n)
			};
		e.mixin({
			explode: function(t) {
				return t.split("")
			},
			fromQuery: function(t) {
				var n, i, a, s, l, u = t.split("&"),
					c = {};
				return e.each(u, function(t) {
					for (t = t.split("="), n = o(t[0]), a = n, l = c, r.lastIndex = 0; null !== (i = r.exec(n));) e.isUndefined(i[1]) ? (s = i[2], l[a] = l[a] || (s ? {} : []), l = l[a]) : s = i[1], a = s || e.size(l);
					l[a] = o(t[1])
				}), c
			},
			implode: function(t) {
				return t.join("")
			},
			camelCase: function(t) {
				return t.replace(/-([a-z])/g, function(t) {
					return t[1].toUpperCase()
				})
			},
			toDash: function(t) {
				return t = t.replace(/([A-Z])/g, function(t) {
					return "-" + t.toLowerCase()
				}), "-" == t.charAt(0) ? t.substr(1) : t
			},
			toQuery: function(t) {
				return s("", t)
			},
			strContains: function(t, e) {
				if ("string" != typeof t) throw new TypeError;
				return -1 != t.indexOf(e)
			}
		})
	}(this),
	function(t) {
		var e = t._ || require("underscore");
		e.mixin({
			done: function(t) {
				var n = e(t);
				return n.stopTrampoline = !0, n
			},
			trampoline: function(t) {
				for (var n = t.apply(t, e.rest(arguments)); e.isFunction(n) && (n = n(), !(n instanceof e && n.stopTrampoline)););
				return n.value()
			}
		})
	}(this),
	function(t) {
		var e = {},
			n = {
				mode: "horizontal",
				slideSelector: "",
				infiniteLoop: !0,
				hideControlOnEnd: !1,
				speed: 500,
				easing: null,
				slideMargin: 0,
				startSlide: 0,
				randomStart: !1,
				captions: !1,
				ticker: !1,
				tickerHover: !1,
				adaptiveHeight: !1,
				adaptiveHeightSpeed: 500,
				video: !1,
				useCSS: !0,
				preloadImages: "visible",
				responsive: !0,
				slideZIndex: 50,
				wrapperClass: "bx-wrapper",
				touchEnabled: !0,
				swipeThreshold: 50,
				oneToOneTouch: !0,
				preventDefaultSwipeX: !0,
				preventDefaultSwipeY: !1,
				pager: !0,
				pagerType: "full",
				pagerShortSeparator: " / ",
				pagerSelector: null,
				buildPager: null,
				pagerCustom: null,
				controls: !0,
				nextText: "Next",
				prevText: "Prev",
				nextSelector: null,
				prevSelector: null,
				autoControls: !1,
				startText: "Start",
				stopText: "Stop",
				autoControlsCombine: !1,
				autoControlsSelector: null,
				auto: !1,
				pause: 4e3,
				autoStart: !0,
				autoDirection: "next",
				autoHover: !1,
				autoDelay: 0,
				autoSlideForOnePage: !1,
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 0,
				slideWidth: 0,
				onSliderLoad: function() {},
				onSlideBefore: function() {},
				onSlideAfter: function() {},
				onSlideNext: function() {},
				onSlidePrev: function() {},
				onSliderResize: function() {}
			};
		t.fn.bxSlider = function(r) {
			if (0 == this.length) return this;
			if (this.length > 1) return this.each(function() {
				t(this).bxSlider(r)
			}), this;
			var o = {},
				a = this;
			e.el = this;
			var s = t(window).width(),
				l = t(window).height(),
				u = function() {
					o.settings = t.extend({}, n, r), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = a.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
						index: o.settings.startSlide
					}, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
						var t = document.createElement("div"),
							e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
						for (var n in e)
							if (void 0 !== t.style[e[n]]) return o.cssPrefix = e[n].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
						return !1
					}(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), a.data("origStyle", a.attr("style")), a.children(o.settings.slideSelector).each(function() {
						t(this).data("origStyle", t(this).attr("style"))
					}), c()
				},
				c = function() {
					a.wrap('<div class="' + o.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), o.viewport = a.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), a.css({
						width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
						position: "relative"
					}), o.usingCSS && o.settings.easing ? a.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing");
					g();
					o.viewport.css({
						width: "100%",
						overflow: "hidden",
						position: "relative"
					}), o.viewport.parent().css({
						maxWidth: p()
					}), o.settings.pager || o.viewport.parent().css({
						margin: "0 auto 0px"
					}), o.children.css({
						"float": "horizontal" == o.settings.mode ? "left" : "none",
						listStyle: "none",
						position: "relative"
					}), o.children.css("width", m()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
						position: "absolute",
						zIndex: 0,
						display: "none"
					}), o.children.eq(o.settings.startSlide).css({
						zIndex: o.settings.slideZIndex,
						display: "block"
					})), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && C(), o.active.last = o.settings.startSlide == v() - 1, o.settings.video && a.fitVids();
					var e = o.children.eq(o.settings.startSlide);
					"all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && w(), o.settings.controls && T(), o.settings.auto && o.settings.autoControls && S(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), h(e, f)
				},
				h = function(e, n) {
					var i = e.find("img, iframe").length;
					if (0 == i) return void n();
					var r = 0;
					e.find("img, iframe").each(function() {
						t(this).one("load", function() {
							++r == i && n()
						}).each(function() {
							this.complete && t(this).load()
						})
					})
				},
				f = function() {
					if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
						var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
							n = o.children.slice(0, e).clone().addClass("bx-clone"),
							i = o.children.slice(-e).clone().addClass("bx-clone");
						a.append(n).prepend(i)
					}
					o.loader.remove(), y(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(d()), a.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", H), o.settings.auto && o.settings.autoStart && (v() > 1 || o.settings.autoSlideForOnePage) && j(), o.settings.ticker && I(), o.settings.pager && M(o.settings.startSlide), o.settings.controls && N(), o.settings.touchEnabled && !o.settings.ticker && B()
				},
				d = function() {
					var e = 0,
						n = t();
					if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
						if (o.carousel) {
							var r = 1 == o.settings.moveSlides ? o.active.index : o.active.index * _();
							for (n = o.children.eq(r), i = 1; i <= o.settings.maxSlides - 1; i++) n = n.add(r + i >= o.children.length ? o.children.eq(i - 1) : o.children.eq(r + i))
						} else n = o.children.eq(o.active.index);
					else n = o.children;
					return "vertical" == o.settings.mode ? (n.each(function(n) {
						e += t(this).outerHeight()
					}), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
						return t(this).outerHeight(!1)
					}).get()), "border-box" == o.viewport.css("box-sizing") ? e += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom")) + parseFloat(o.viewport.css("border-top-width")) + parseFloat(o.viewport.css("border-bottom-width")) : "padding-box" == o.viewport.css("box-sizing") && (e += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom"))), e
				},
				p = function() {
					var t = "100%";
					return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
				},
				m = function() {
					var t = o.settings.slideWidth,
						e = o.viewport.width();
					return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
				},
				g = function() {
					var t = 1;
					if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
						if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
						else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
					else {
						var e = o.children.first().width() + o.settings.slideMargin;
						t = Math.floor((o.viewport.width() + o.settings.slideMargin) / e)
					} else "vertical" == o.settings.mode && (t = o.settings.minSlides);
					return t
				},
				v = function() {
					var t = 0;
					if (o.settings.moveSlides > 0)
						if (o.settings.infiniteLoop) t = Math.ceil(o.children.length / _());
						else
							for (var e = 0, n = 0; e < o.children.length;) ++t, e = n + g(), n += o.settings.moveSlides <= g() ? o.settings.moveSlides : g();
					else t = Math.ceil(o.children.length / g());
					return t
				},
				_ = function() {
					return o.settings.moveSlides > 0 && o.settings.moveSlides <= g() ? o.settings.moveSlides : g()
				},
				y = function() {
					if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
						if ("horizontal" == o.settings.mode) {
							var t = o.children.last(),
								e = t.position();
							x(-(e.left - (o.viewport.width() - t.outerWidth())), "reset", 0)
						} else if ("vertical" == o.settings.mode) {
							var n = o.children.length - o.settings.minSlides,
								e = o.children.eq(n).position();
							x(-e.top, "reset", 0)
						}
					} else {
						var e = o.children.eq(o.active.index * _()).position();
						o.active.index == v() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? x(-e.left, "reset", 0) : "vertical" == o.settings.mode && x(-e.top, "reset", 0))
					}
				},
				x = function(t, e, n, i) {
					if (o.usingCSS) {
						var r = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
						a.css("-" + o.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" == e ? (a.css(o.animProp, r), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
							a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
						})) : "reset" == e ? a.css(o.animProp, r) : "ticker" == e && (a.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), a.css(o.animProp, r), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
							a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), x(i.resetValue, "reset", 0), L()
						}))
					} else {
						var s = {};
						s[o.animProp] = t, "slide" == e ? a.animate(s, n, o.settings.easing, function() {
							D()
						}) : "reset" == e ? a.css(o.animProp, t) : "ticker" == e && a.animate(s, speed, "linear", function() {
							x(i.resetValue, "reset", 0), L()
						})
					}
				},
				b = function() {
					for (var e = "", n = v(), i = 0; n > i; i++) {
						var r = "";
						o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (r = o.settings.buildPager(i), o.pagerEl.addClass("bx-custom-pager")) : (r = i + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + r + "</a></div>"
					}
					o.pagerEl.html(e)
				},
				w = function() {
					o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), b()), o.pagerEl.on("click", "a", O)
				},
				T = function() {
					o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", k), o.controls.prev.bind("click", E), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
				},
				S = function() {
					o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", P), o.controls.autoEl.on("click", ".bx-stop", A), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), R(o.settings.autoStart ? "stop" : "start")
				},
				C = function() {
					o.children.each(function(e) {
						var n = t(this).find("img:first").attr("title");
						void 0 != n && ("" + n).length && t(this).append('<div class="bx-caption"><span>' + n + "</span></div>")
					})
				},
				k = function(t) {
					o.settings.auto && a.stopAuto(), a.goToNextSlide(), t.preventDefault()
				},
				E = function(t) {
					o.settings.auto && a.stopAuto(), a.goToPrevSlide(), t.preventDefault()
				},
				P = function(t) {
					a.startAuto(), t.preventDefault()
				},
				A = function(t) {
					a.stopAuto(), t.preventDefault()
				},
				O = function(e) {
					o.settings.auto && a.stopAuto();
					var n = t(e.currentTarget);
					if (void 0 !== n.attr("data-slide-index")) {
						var i = parseInt(n.attr("data-slide-index"));
						i != o.active.index && a.goToSlide(i), e.preventDefault()
					}
				},
				M = function(e) {
					var n = o.children.length;
					return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (n = Math.ceil(o.children.length / o.settings.maxSlides)), void o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + n)) : (o.pagerEl.find("a").removeClass("active"), void o.pagerEl.each(function(n, i) {
						t(i).find("a").eq(e).addClass("active")
					}))
				},
				D = function() {
					if (o.settings.infiniteLoop) {
						var t = "";
						0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == v() - 1 && o.carousel ? t = o.children.eq((v() - 1) * _()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? x(-t.left, "reset", 0) : "vertical" == o.settings.mode && x(-t.top, "reset", 0))
					}
					o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
				},
				R = function(t) {
					o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
				},
				N = function() {
					1 == v() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == v() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
				},
				j = function() {
					if (o.settings.autoDelay > 0) {
						setTimeout(a.startAuto, o.settings.autoDelay)
					} else a.startAuto();
					o.settings.autoHover && a.hover(function() {
						o.interval && (a.stopAuto(!0), o.autoPaused = !0)
					}, function() {
						o.autoPaused && (a.startAuto(!0), o.autoPaused = null)
					})
				},
				I = function() {
					var e = 0;
					if ("next" == o.settings.autoDirection) a.append(o.children.clone().addClass("bx-clone"));
					else {
						a.prepend(o.children.clone().addClass("bx-clone"));
						var n = o.children.first().position();
						e = "horizontal" == o.settings.mode ? -n.left : -n.top
					}
					x(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
						a.stop()
					}, function() {
						var e = 0;
						o.children.each(function(n) {
							e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
						});
						var n = o.settings.speed / e,
							i = "horizontal" == o.settings.mode ? "left" : "top",
							r = n * (e - Math.abs(parseInt(a.css(i))));
						L(r)
					}), L()
				},
				L = function(t) {
					speed = t ? t : o.settings.speed;
					var e = {
							left: 0,
							top: 0
						},
						n = {
							left: 0,
							top: 0
						};
					"next" == o.settings.autoDirection ? e = a.find(".bx-clone").first().position() : n = o.children.first().position();
					var i = "horizontal" == o.settings.mode ? -e.left : -e.top,
						r = "horizontal" == o.settings.mode ? -n.left : -n.top,
						s = {
							resetValue: r
						};
					x(i, "ticker", speed, s)
				},
				B = function() {
					o.touch = {
						start: {
							x: 0,
							y: 0
						},
						end: {
							x: 0,
							y: 0
						}
					}, o.viewport.bind("touchstart", z)
				},
				z = function(t) {
					if (o.working) t.preventDefault();
					else {
						o.touch.originalPos = a.position();
						var e = t.originalEvent;
						o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", F), o.viewport.bind("touchend", q)
					}
				},
				F = function(t) {
					var e = t.originalEvent,
						n = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
						i = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
					if (3 * n > i && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * i > n && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
						var r = 0;
						if ("horizontal" == o.settings.mode) {
							var a = e.changedTouches[0].pageX - o.touch.start.x;
							r = o.touch.originalPos.left + a
						} else {
							var a = e.changedTouches[0].pageY - o.touch.start.y;
							r = o.touch.originalPos.top + a
						}
						x(r, "reset", 0)
					}
				},
				q = function(t) {
					o.viewport.unbind("touchmove", F);
					var e = t.originalEvent,
						n = 0;
					if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
						var i = Math.abs(o.touch.start.x - o.touch.end.x);
						i >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto())
					} else {
						var i = 0;
						"horizontal" == o.settings.mode ? (i = o.touch.end.x - o.touch.start.x, n = o.touch.originalPos.left) : (i = o.touch.end.y - o.touch.start.y, n = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && i > 0 || o.active.last && 0 > i) ? x(n, "reset", 200) : Math.abs(i) >= o.settings.swipeThreshold ? (0 > i ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto()) : x(n, "reset", 200)
					}
					o.viewport.unbind("touchend", q)
				},
				H = function(e) {
					if (o.initialized) {
						var n = t(window).width(),
							i = t(window).height();
						(s != n || l != i) && (s = n, l = i, a.redrawSlider(), o.settings.onSliderResize.call(a, o.active.index))
					}
				};
			return a.goToSlide = function(e, n) {
				if (!o.working && o.active.index != e)
					if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? v() - 1 : e >= v() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == n ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == n && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= v() - 1, o.settings.pager && M(o.active.index), o.settings.controls && N(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != d() && o.viewport.animate({
						height: d()
					}, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
						zIndex: 0
					}), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
						t(this).css("zIndex", o.settings.slideZIndex), D()
					});
					else {
						o.settings.adaptiveHeight && o.viewport.height() != d() && o.viewport.animate({
							height: d()
						}, o.settings.adaptiveHeightSpeed);
						var i = 0,
							r = {
								left: 0,
								top: 0
							};
						if (!o.settings.infiniteLoop && o.carousel && o.active.last)
							if ("horizontal" == o.settings.mode) {
								var s = o.children.eq(o.children.length - 1);
								r = s.position(), i = o.viewport.width() - s.outerWidth()
							} else {
								var l = o.children.length - o.settings.minSlides;
								r = o.children.eq(l).position()
							} else if (o.carousel && o.active.last && "prev" == n) {
							var u = 1 == o.settings.moveSlides ? o.settings.maxSlides - _() : (v() - 1) * _() - (o.children.length - o.settings.maxSlides),
								s = a.children(".bx-clone").eq(u);
							r = s.position()
						} else if ("next" == n && 0 == o.active.index) r = a.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
						else if (e >= 0) {
							var c = e * _();
							r = o.children.eq(c).position()
						}
						if ("undefined" != typeof r) {
							var h = "horizontal" == o.settings.mode ? -(r.left - i) : -r.top;
							x(h, "slide", o.settings.speed)
						}
					}
			}, a.goToNextSlide = function() {
				if (o.settings.infiniteLoop || !o.active.last) {
					var t = parseInt(o.active.index) + 1;
					a.goToSlide(t, "next")
				}
			}, a.goToPrevSlide = function() {
				if (o.settings.infiniteLoop || 0 != o.active.index) {
					var t = parseInt(o.active.index) - 1;
					a.goToSlide(t, "prev")
				}
			}, a.startAuto = function(t) {
				o.interval || (o.interval = setInterval(function() {
					"next" == o.settings.autoDirection ? a.goToNextSlide() : a.goToPrevSlide()
				}, o.settings.pause), o.settings.autoControls && 1 != t && R("stop"))
			}, a.stopAuto = function(t) {
				o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && R("start"))
			}, a.getCurrentSlide = function() {
				return o.active.index
			}, a.getCurrentSlideElement = function() {
				return o.children.eq(o.active.index)
			}, a.getSlideCount = function() {
				return o.children.length
			}, a.redrawSlider = function() {
				o.children.add(a.find(".bx-clone")).width(m()), o.viewport.css("height", d()), o.settings.ticker || y(), o.active.last && (o.active.index = v() - 1), o.active.index >= v() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (b(), M(o.active.index))
			}, a.destroySlider = function() {
				o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() {
					void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
				}), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", H))
			}, a.reloadSlider = function(t) {
				void 0 != t && (r = t), a.destroySlider(), u()
			}, u(), this
		}
	}(jQuery);
! function() {
	"use strict";
	var t = window.condesire || {};
	t.define = function(e, n, i) {
		for (var r = t, o = e.split("."), s = 0; s < o.length; s++) {
			var a = o[s];
			r[a] = r[a] || {}, r = r[a]
		}
		return r[i] = n.apply(r, [r, t]), r
	}, t.def = t.define, t.extend = function(t, e, n) {
		e.apply(t, n || []);
		var i = t.constructor.prototype;
		for (var r in e.prototype) i[r] || (i[r] = e.prototype[r])
	}, t.userAgent = window.navigator.userAgent.toLowerCase(), t.ua = {
		ltIE6: "undefined" == typeof window.addEventListener && "undefined" == typeof document.documentElement.style.maxHeight,
		ltIE7: "undefined" == typeof window.addEventListener && "undefined" == typeof document.querySelectorAll,
		ltIE8: "undefined" == typeof window.addEventListener && "undefined" == typeof document.getElementsByClassName,
		ltIE9: document.uniqueID && !window.matchMedia,
		IE: document.uniqueID,
		Firefox: window.sidebar,
		Opera: window.opera,
		Webkit: !document.uniqueID && !window.opera && !window.sidebar && window.localStorage && "undefined" == typeof window.orientation,
		Mobile: "undefined" != typeof window.orientation,
		Android: navigator.userAgent.indexOf("Android") > 0,
		Safari: -1 === t.userAgent.indexOf("chrome") && t.userAgent.indexOf("safari") > 0,
		iPad: -1 != navigator.userAgent.indexOf("iPad")
	}, window.condesire = t, window.cd = t
}(), condesire.define("event", function(t, e) {
		"use strict";
		var n = function() {
			this.listeners = {}
		};
		return n.prototype.dispatch = function(t, e) {
			if (_.isEmpty(t)) throw new Error("Dispatcher.dispatch: type is empty.");
			_.has(this.listeners, t) && (_.isArray(e) || (e = [e]), _.each(this.listeners[t], _.bind(function(t) {
				t.apply(this, e)
			}, this)))
		}, n.prototype.addListener = function(t, e) {
			if (!_.isString(t)) throw new Error("Dispatcher.addListener: type is not string.");
			var n = this.listeners[t] || [];
			if (_.isEmpty(n) && (this.listeners[t] = []), _.has(n, e)) throw new Error("Dispatcher.addListener: duplicate handler");
			this.listeners[t].push(e)
		}, n.prototype.removeListener = function(t) {
			var e = this;
			_.isFunction(t) ? _.each(this.listeners, function(n, i) {
				e.listeners[i] = _.filter(n, function(e) {
					return !_.isEqual(t, e)
				})
			}) : this.listeners[t] = []
		}, n.prototype.hasListener = function(t) {
			if (_.isFunction(t)) {
				var e = _.find(this.listeners, function(e) {
					return _.contains(e, t)
				});
				return !_.isEmpty(e)
			}
			return _.has(this.listeners, t)
		}, n
	}, "Dispatcher"), condesire.define("lib", function(t, e) {
		"use strict";
		var n = function() {
			this.queues = [], this.isRunning = !1, cd.extend(this, e.event.Dispatcher)
		};
		n.COMPLETE = "onSequencerComplete", n.prototype.addClass = function(t, e) {
			var n = new cd.transition.TransEndDispatcher(t),
				i = cd.transition.TransEndDispatcher.COMPLETE;
			return this.add(n, n.addClass, [e], i), this
		}, n.prototype.removeClass = function(t, e, n) {
			var i = new cd.transition.TransEndDispatcher(t),
				r = n ? cd.transition.Transitioner.COMPLETE : null;
			return this.add(i, "removeClass", [e], r), this
		}, n.prototype.add = function(t, e, n, r, o) {
			e = _.isFunction(e) ? e : t[e];
			var s = new i(t, e, n, r, o);
			return this.queues.push(s), this
		}, n.prototype.addTransition = function(t, n, i, r, o, s) {
			var a = new e.transition.Transitioner(t),
				c = s ? cd.transition.Transitioner.COMPLETE : null;
			return this.add(a, a.setGo, [n, i, r, o], c), this
		}, n.prototype.addAnimation = function(t, e, n, r) {
			function o() {
				a.dispatch(s, t)
			}
			var s = "Animate.complete",
				a = new cd.event.Dispatcher,
				c = new i(t, function(e) {
					var i = {};
					n && (i.duration = n), r && (i.easing = r), i.complete = o, t.animate(e, i)
				}, [e], s, a);
			return this.queues.push(c), this
		}, n.prototype.addWait = function(t, e) {
			t = Math.max(0, t);
			var n = new r,
				o = new i(n, n.set, [t], r.COMPLETE);
			return _.isFunction(e) && n.addListener(r.COMPLETE, function() {
				e.apply(this, [])
			}), this.queues.push(o), this
		}, n.prototype.addLog = function(t) {
			return this.add(console, "log", [t]), this
		}, n.prototype.start = function() {
			return this.isRunning = !0, this.exec(), this
		}, n.prototype.exec = function() {
			var t = this;
			if (_.isEmpty(this.queues)) this.isRunning = !1, t.dispatch(n.COMPLETE);
			else {
				var e = this.queues.shift();
				e.addListener(i.COMPLETE, function() {
					e.removeListener(i.COMPLETE), t.exec()
				}), e.exec()
			}
		}, n.prototype.stop = function() {
			return this.isRunning = !1, this.queues = [], this
		};
		var i = function(t, n, i, r, o) {
			this.context = t, this.method = n, this.args = i ? i : [], this.eventType = r, this.dispatcher = o, cd.extend(this, e.event.Dispatcher)
		};
		i.COMPLETE = "onTaskComplete", i.prototype.exec = function() {
			var t = this;
			if (t.eventType) {
				var e = t.dispatcher ? t.dispatcher : t.context;
				e.addListener(t.eventType, function() {
					e.removeListener(t.eventType), t.dispatch(i.COMPLETE)
				}), t._apply()
			} else t._apply(), t.dispatch(i.COMPLETE)
		}, i.prototype._apply = function() {
			if (!_.isFunction(this.method)) throw new Error("Task.execute: method is not function. value is " + this.method);
			this.method.apply(this.context, this.args)
		};
		var r = function() {
			cd.extend(this, cd.event.Dispatcher)
		};
		return r.COMPLETE = "Timer.complete", r.prototype.set = function(t) {
			var e = this;
			setTimeout(function() {
				e.dispatch(r.COMPLETE)
			}, t)
		}, n
	}, "Sequencer"), condesire.define("application", function(t, e) {
		"use strict";
		var n = function() {
			cd.extend(this, cd.event.Dispatcher), this.seq = new cd.lib.Sequencer
		};
		return n.prototype.wait = function(t) {
			this.seq.addWait(t)
		}, n.prototype.queue = function(t, e) {
			_.isFunction(t) || (e = t, t = function() {}), this.seq.add(this, t, [], e)
		}, n.prototype.enqueue = function(t) {
			this.dispatch(t, this)
		}, n.prototype.start = function() {
			this.seq.start()
		}, n
	}, "ApplicationSequence"),
	function() {
		"use strict";
		String.prototype.camelToUnderscore = function() {
			return this.fromCamel("_")
		}, String.prototype.camelToSnake = function() {
			return this.fromCamel("-")
		}, String.prototype.fromCamel = function(t) {
			return this.replace(/([A-Z])/g, function(e) {
				return t + e.toLowerCase()
			})
		}, String.prototype.toCamel = function() {
			return this.replace(/(\-[a-z])/g, function(t) {
				return t.toUpperCase().replace("-", "")
			})
		}, String.prototype.toInt = function() {
			return parseInt(this, 10)
		}
	}(),
	function() {
		"use strict";
		cd.applicationSequence = new cd.application.ApplicationSequence, cd.invoke = function(t, e) {
			var n = void 0,
				i = Array.prototype.slice.call(arguments, 2);
			if (_.isObject(t)) {
				var r = _.isFunction(e),
					o = r ? e : t[e];
				n = null == o ? o : o.apply(t, i)
			}
			return n
		}, cd.log = function() {
			if (cd.debugMode() > 0) {
				var t = Array.prototype.slice.call(arguments);
				window.console && window.console.log && _.isFunction(window.console.log) && (t.unshift("%c[DEBUG]", "font-weight: bold; font-size: 13px; color:#999;"), console.log.apply(console, t))
			}
		}, cd.time = function(t) {
			return t = t || "0", cd._time = cd._time || {}, cd._time[t] = (new Date).getTime(), cd._time[t]
		}, cd.timeEnd = function(t) {
			t = t || "0";
			var e = (new Date).getTime(),
				n = cd._time[t];
			return e - n
		}, cd.viewport = function(t, e) {
			function n() {
				-1 != navigator.userAgent.indexOf("iPad") && $("meta[name=viewport]").attr("content", "width=" + t + ", user-scalable=" + i)
			}
			var i = (window.document, "yes");
			$(function() {
				$(window).bind("resize load", function() {
					n()
				})
			}), n()
		}, cd.getParams = function(t) {
			t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var e = new RegExp("[\\?&]" + t + "=([^&#]*)"),
				n = e.exec(location.search);
			return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
		}, cd.transition = function(t) {
			return new cd.transition.Transitioner(t)
		}, cd.addEvent = function(t, e) {
			var n = new cd.transition.TransEndDispatcher(t);
			n.addEvent(e)
		}, cd.addClass = function(t, e, n, i) {
			var r = new cd.transition.TransEndDispatcher(t);
			r.addClass(e, n, i)
		}, cd.removeClass = function(t, e, n, i) {
			var r = new cd.transition.TransEndDispatcher(t);
			r.removeClass(e, n, i)
		}, cd.seq = function() {
			return new cd.lib.Sequencer
		}, cd.csstransitions = function() {
			return Modernizr.csstransitions
		}, cd.getAudio = function(t, e) {
			var n;
			return n = cd.ua.ltIE8 ? new cd.audio.AudioIE8(t[0]) : new cd.audio.Audio(t[0], e)
		}, cd.getVideo = function() {
			return new cd.video.Video
		}, cd.debugMode = function() {
			var t = cd.getParams("d");
			t && $.cookie("debug", t, {
				path: "/"
			});
			var e = $.cookie("debug") || t;
			return e || 0
		}, cd.get_relative_url = function() {
			var t = location.href,
				e = new RegExp("(.*)/$"),
				n = e.exec(t);
			return n ? n[1] : t
		}
	}(), condesire.define("lib", function(t, e) {
		"use strict";
		var n = function(t) {
			cd.extend(this, e.event.Dispatcher), this.get_screen_mode = t, this.screen_mode = "", $(window).onex("resize", _.bind(this.onResize, this), 2)
		};
		return n.prototype.init = function(t) {
			this.onResize()
		}, n.PC_SCREEN = "Breakpoint.pc_screen", n.TB_SCREEN = "Breakpoint.tb_screen", n.SP_SCREEN = "Breakpoint.sp_screen", n.CHANGE = "onBreakpoint.change", n.prototype.onResize = function(t) {
			var e;
			e = this.get_screen_mode(), e != this.screen_mode && this.changeScreenMode(e, this.screen_mode)
		}, n.prototype.changeScreenMode = function(t, e) {
			this.screen_mode = t, this.dispatch(n.CHANGE, this)
		}, n.prototype.isPCScreen = function() {
			return this.screen_mode == n.PC_SCREEN
		}, n.prototype.isSPScreen = function() {
			return this.screen_mode == n.SP_SCREEN
		}, n.prototype.isTBScreen = function() {
			return this.screen_mode == n.TB_SCREEN
		}, n
	}, "Breakpoint"),
	function() {
		"use strict";
		condesire.init_jquery = function() {
			$.w = $(window), $.invoke = function(t, e) {
				var n = Array.prototype.slice.call(arguments, 2),
					i = $.isFunction(e);
				return _.map(t, function(t) {
					var r = $(t),
						o = i ? e : r[e];
					return null == o ? o : o.apply(r, n)
				})
			}, $.preloadImages = function(t) {
				_.isArray(t) || (t = [t]), _.each(t, function(t) {
					$("img").attr("src", t)
				})
			}, $.fn.onex = function(t, e, n, i) {
				var r = $(this);
				n = n ? n : 1, i = i ? i : !0;
				var o = $.fx.interval * n;
				return r.each(function(n, r) {
					function s(t, n) {
						i && clearTimeout(a), a = setTimeout(function() {
							e.apply(t, n)
						}, o)
					}
					var a, c = $(r);
					c.on(t, function(t) {
						s($(this), [t])
					})
				}), this
			}, $.fn.getEventPrefix = function() {
				var t = _.uniqueId();
				return "." + t
			}, $.fn.offScrollPer = function() {
				var t = $(this).data("eventName");
				$(window).off(t)
			}, $.fn.onScrollPer = function(t, e) {
				var n = $(this);
				n.each(function(i, r) {
					var o = $(r),
						s = "scroll" + n.getEventPrefix();
					o.data("eventName", s), $(window).off(s).onex(s, function(n) {
						if (o.is(":visible")) {
							var i = o.offset().top,
								s = app.w.scrollTop(),
								a = s + app.w.height(),
								c = a - i;
							if (c > 0 && c < app.w.height()) {
								var u = c / app.w.height() * 100;
								u = Math.round(u), t.apply(r, [u])
							} else 0 >= i - s && e.apply(r, [])
						}
					}, 2).trigger("scroll")
				})
			}, $.fn.srcSuffix = function(t) {
				var e = $(this);
				e.each(function(e, n) {
					var i = $(n),
						r = /(.*)(?:\.([^.]+$))/,
						o = i.data("origin_src");
					void 0 == o && (o = i.attr("src"), i.data("origin_src", o));
					var s = o.match(r)[1],
						a = o.match(r)[2];
					i.attr("src", s + t + "." + a)
				})
			}, $.scrollTo = function(t, e) {
				t = t || 0, e = e || 600;
				var n = {
					EASING: "easeInOutQuart",
					SPEED: e
				};
				t != $(window).scrollTop() && $("html,body").stop(!1).animate({
					scrollTop: t
				}, n.SPEED, n.EASING, function() {})
			}, $.fn.scrollTo = function(t, e) {
				t = t ? t : 0;
				var n = {
						EASING: "easeInOutQuart",
						SPEED: 600
					},
					i = $(this),
					r = $(i.data("target"));
				r = $(r[0] || i[0]);
				var o = Math.round(r.offset().top);
				if (o != $(window).scrollTop()) {
					var s = $("body"),
						a = $("<div />");
					app.$scroll_to_overlay = a, a.css({
						zIndex: 99999,
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundColor: "transparent"
					}), s.append(a), $("html,body").stop(!1).animate({
						scrollTop: o + t
					}, n.SPEED, n.EASING, function() {
						cd.invoke(arguments, e), a.detach()
					})
				} else cd.invoke(arguments, e)
			}, $.fn.hoverBtn = function(t, e) {
				void 0 === t && (t = function() {
					return !0
				}), void 0 === e && (e = function() {
					return !0
				});
				var n = $(this);
				n.each(function(n, i) {
					var r = $(i),
						o = /(.*)(?:\.([^.]+$))/,
						s = r.data("origin_src");
					void 0 === s && (s = r.attr("src"), r.data("origin_src", s));
					var a = s.match(o)[1],
						c = s.match(o)[2];
					r.hover(function() {
						t && t(this) && r.attr("src", a + "_over." + c)
					}, function() {
						e && e(this) && r.attr("src", s)
					})
				})
			}, $.stop_scroll = function() {
				var t = "mousewheel.stop_scroll DOMMouseScroll.stop_scroll MozMousePixelScroll.stop_scroll";
				$(window).off("touchmove.stopScroll").on("touchmove.stopScroll", function(t) {
					t.preventDefault()
				}), $(document).off(t).on(t, function(t) {
					t.preventDefault()
				})
			}, $.start_scroll = function() {
				$(window).off("touchmove.stopScroll"), $(document).off("mousewheel.stop_scroll DOMMouseScroll.stop_scroll MozMousePixelScroll.stop_scroll")
			}, $.fn.topHalf = function() {
				var t = $(this);
				t.each(cd.ua.ltIE8 ? function(t, e) {
					var n = $(e);
					n.css({
						marginTop: -n.height() / 2
					})
				} : function(t, e) {
					var n = $(e);
					n.css({
						transform: "translateY(-50%)"
					})
				})
			}, $.fn.verticalMiddle = function(t) {
				var e = $(this);
				e.each(function(e, n) {
					var i = $(n),
						r = i.data("target") || window,
						o = $(r);
					if (o.attr("src") || o.find("img")[0]) o.imagesLoaded(function() {
						var t = (o.outerHeight() - i.outerHeight()) / 2;
						i.css({
							top: t
						})
					});
					else {
						var s = (o.outerHeight() - i.outerHeight()) / 2;
						i.css(void 0 != t ? {
							top: Math.max(s, t)
						} : {
							top: s
						})
					}
				})
			}, $.fn.targetHeight = function(t) {
				var e = t ? "minHeight" : "height",
					n = $(this);
				n.each(function(t, i) {
					var r = $(i),
						o = r.data("target") || window,
						s = n.find(o)[0] || n.parent().find(o)[0] || $(o)[0],
						a = $(s);
					if (a.attr("src") || a.find("img")[0]) a.imagesLoaded(function() {
						var t = {};
						t[e] = a.outerHeight(), r.css(t)
					});
					else {
						var c = {};
						c[e] = a.outerHeight(), r.css(c)
					}
				})
			}, $.fn.heightByMyWidth = function() {
				var t = $(this);
				t.each(function(t, e) {
					var n = $(e);
					n.attr("src") || n.find("img")[0] ? n.imagesLoaded(function() {
						n.css({
							height: n.outerWidth()
						})
					}) : n.css({
						height: n.outerWidth()
					})
				})
			}, $.fn.squareSize = function(t) {
				var e = $(this);
				e.each(function(e, n) {
					var i = $(n),
						r = i.find(t),
						o = new Image;
					o.src = r.attr("src"), $(o).imagesLoaded(function() {
						var t = o.width,
							e = o.height;
						r.css(t >= e ? {
							width: i.width(),
							height: "auto"
						} : {
							width: "auto",
							height: Math.min(i.height(), e)
						})
					})
				})
			}, $.fn.fitImage = function(t, e, n) {
				t = t || this.width(), e = e || this.height(), n = n || "img", this.each(function(i, r) {
					var o = $(r),
						s = o.find(n)[0] || o[0],
						a = $(s),
						c = a.attr("width"),
						u = a.attr("height"),
						d = c / u;
					if (d > t / e) a.css({
						width: "auto",
						height: "100%",
						top: 0,
						left: -(e * d - t) / 2
					});
					else {
						var h = (t / d - e) / 2;
						a.css({
							width: "100%",
							height: "auto",
							top: -h,
							left: 0
						})
					}
				})
			}, $.fn.fitIframe = function(t, e) {
				var n = $(this);
				n.each(function(n, i) {
					var r = $(i),
						o = r.attr("width") / r.attr("height");
					if (r.height(e), o > t / e) {
						var s = e * o,
							a = (s - t) / 2;
						r.css({
							width: s,
							height: e,
							top: 0,
							left: -a
						})
					} else {
						var c = t / o,
							u = (c - e) / 2;
						r.css({
							width: t,
							height: c,
							top: -u,
							left: 0
						})
					}
				})
			}, $.fn.fitImageKV = function(t, e) {
				var n = $(this);
				n.each(function(n, i) {
					var r = $(i),
						o = r.attr("width") / r.attr("height");
					if (r.height(e), o > t / e) {
						var s = e * o,
							a = (s - t) / 2;
						r.css({
							width: s,
							height: e,
							top: 0,
							left: -a
						})
					} else {
						var c = t / o,
							u = (c - e) / 2;
						r.css({
							width: t,
							height: c,
							top: -u,
							left: 0
						})
					}
				})
			}, $.fn.flatten = function() {
				var t = $(this);
				t.each(function(t, e) {
					var n = $(e),
						i = n.data("target"),
						r = 0,
						o = n;
					i && (o = n.find(i));
					var s = o.find("img");
					s.imagesLoaded(function() {
						o.each(function(t, e) {
							var n = $(e);
							n.css({
								height: "auto"
							});
							var i = n.height();
							i > r && (r = i)
						}), o.height(r)
					})
				})
			}, $.fn.flatten02 = function(t) {
				var e = $(this),
					n = 0;
				e.find("img").imagesLoaded(function() {
					e.each(function(t, e) {
						var i = $(e);
						i.css({
							height: "auto"
						});
						var r = i.height();
						r > n && (n = r)
					}), e.height(n), cd.invoke(arguments, t)
				})
			}, $.fn.size = function() {
				var t = $(this);
				t.each(function(t, e) {
					var n = $(e),
						i = n.data("target"),
						r = n;
					i && (r = n.find(i)), n.css({
						width: r.width(),
						height: r.height()
					})
				})
			}, $.fn.visibleWindow = function() {
				var t = $(window),
					e = t.scrollTop(),
					n = e + t.height(),
					i = !1,
					r = $(this);
				return r.each(function(t, r) {
					var o = $(r),
						s = o.height();
					s = s || o.find("img").height();
					var a = o.offset().top + s / 2,
						c = o.offset().top - s / 2 + s;
					e > c ? i = !1 : n > a && (i = !0)
				}), i
			}, $.fn.hoverAddClass = function(t) {
				t = t || "show";
				var e = $(this);
				e.each(function(e, n) {
					var i = $(n),
						r = i.data("target"),
						o = i.siblings(r);
					i.off("mouseenter").on("mouseenter", function() {
						o.parent().addClass(t)
					}), o.parent().off("mouseleave").on("mouseleave", function() {
						o.parent().removeClass(t)
					})
				})
			}, $.fn.open_gmap = function(t, e, n, i) {
				var r = $(this),
					o = parseFloat(r.data("lat")),
					s = parseFloat(r.data("lng")),
					a = new google.maps.LatLng(o, s),
					c = app.map_options;
				c.center = a; {
					var u = new google.maps.Map(r[0], c),
						d = n,
						h = i,
						p = n,
						f = i,
						l = new google.maps.MarkerImage(t, new google.maps.Size(d, h), new google.maps.Point(0, 0), new google.maps.Point(p / 2, f), new google.maps.Size(p, f));
					new google.maps.Marker({
						position: a,
						map: u,
						icon: l
					})
				}
			}
		}
	}(), condesire.define("lib", function(t, e) {
		"use strict";
		var n = function(t) {
			cd.extend(this, e.event.Dispatcher), this.$doc = t, this.lock = !1, this.deltaOfInterest = 0, this.lastAnimation = 0, this._init()
		};
		return n.MOVE_UP = "onepagescroll.move_up", n.MOVE_DOWN = "onepagescroll.move_down", n.prototype._init = function() {
			var t = this;
			this.$doc.bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(e) {
				t.lock && e.preventDefault();
				var n = e.originalEvent.wheelDelta || -e.originalEvent.detail;
				t._init_scroll(e, n)
			})
		}, n.prototype._init_scroll = function(t, e) {
			this.deltaOfInterest = e;
			var n = (new Date).getTime();
			n - this.lastAnimation < 500 || (this.deltaOfInterest < 0 ? this._moveDown() : this._moveUp(), this.lastAnimation = n)
		}, n.prototype._moveDown = function(t) {
			this.dispatch(n.MOVE_DOWN)
		}, n.prototype._moveUp = function(t) {
			this.dispatch(n.MOVE_UP)
		}, n
	}, "OnepageScroll"), condesire.define("lib", function(t, e) {
		"use strict";
		var n = function(t, n) {
			cd.extend(this, e.event.Dispatcher), this.attach(t), this.breakpoint = new e.lib.Breakpoint(n), this.first = !0, this.breakpoint.addListener(e.lib.Breakpoint.CHANGE, _.bind(this.changeScreenMode, this)), this.breakpoint.init()
		};
		return n.prototype.attach = function(t) {
			this.$target = t
		}, n.INIT = "ResponsiveImage.init", n.COMPLETE = "onResponsiveImageComplete", n.PROGRESS = "onResponsiveImageProgress", n.prototype.changeScreenMode = function(t) {
			var e = this;
			e.$target && e.$target.each(function(n, i) {
				var r = $(i),
					o = r.attr("src"),
					s = r.data("lg"),
					a = r.data("md"),
					c = r.data("sm");
				if (t.isPCScreen() && s && o != s) r.attr("src", s), e.progress(r);
				else if (t.isTBScreen() && a && o != a) r.attr("src", a), e.progress(r);
				else if (t.isSPScreen() && c && o != c) r.attr("src", c), e.progress(r);
				else {
					var u = c || a || s;
					r.attr("src", u), e.progress(r)
				}
			})
		}, n.prototype.progress = function(t) {
			var e = this;
			t.data(n.COMPLETE, !1), t.imagesLoaded(function() {
				var i = new Image;
				i.src = t.attr("src"), $(i).imagesLoaded(function() {
					var r = i.width,
						o = i.height;
					t.attr("width", r), t.attr("height", o), t.data(n.COMPLETE, !0), e.dispatch(n.PROGRESS, t), e.complete()
				})
			})
		}, n.prototype.complete = function() {
			var t = !0;
			this.$target.each(function(e, i) {
				var r = $(i);
				r.data(n.COMPLETE) || (t = !1)
			}), t && (this.dispatch(n.COMPLETE), this.first && (this.first = !1, this.dispatch(n.INIT, this.$target)))
		}, n
	}, "ResponsiveImage"), condesire.define("lib", function(t, e) {
		"use strict";
		var n = function(t) {
			cd.extend(this, e.event.Dispatcher), this.chunk = [], this.percent = 0, this.timeout = 5e3, this.interval = 100, this.interval_id = -1, this.index = 0, this._max = Math.floor(this.timeout / this.interval)
		};
		return n.COMPLETE = "loader.complete", n.PROGRESS = "loader.progress", n.prototype.init = function() {
			var t = this;
			this.index = 0, this.chunk = [], _.each(_.range(0, this._max), function(e) {
				t.add()
			}), this.interval_id = setInterval(function() {
				t._progress(t.index), t.index++, t.index >= t._max && clearInterval(t.interval_id)
			}, this.interval)
		}, n.prototype.set_image = function(t) {
			var e = this,
				n = _.last(this.chunk);
			n.src = t, $("<img />").attr({
				src: t
			}).imagesLoaded(function() {
				clearInterval(e.interval_id), _.each(e.chunk, function(t) {
					t.complete = !0
				}), setTimeout(function() {
					e._progress(e.index)
				}, 0)
			})
		}, n.prototype.add = function() {
			var t = {
				src: "",
				complete: !1
			};
			this.chunk.push(t)
		}, n.prototype._percent = function() {
			var t = _.countBy(this.chunk, function(t) {
					return t.complete ? "complete" : "progress"
				}),
				e = t.progress || 0;
			return t.complete / (t.complete + e) * 100
		}, n.prototype._progress = function(t) {
			if (!(0 > t || t >= this.chunk.length)) {
				var e = this.chunk[t];
				e.complete = !0, this.percent = this._percent(), this.dispatch(n.PROGRESS, this), this._complete(this.chunk)
			}
		}, n.prototype._complete = function(t) {
			var e = _.all(t, function(t, e, n) {
				return t.complete
			});
			e && this.dispatch(n.COMPLETE, this)
		}, n
	}, "Loader"), condesire.define("event", function(t, e) {
		"use strict";
		var n = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd",
				msTransition: "MSTransitionEnd",
				transition: "transitionend"
			},
			i = {
				COMPLETE: n[Modernizr.prefixed("transition")]
			};
		return i
	}, "TransitionEvent"), condesire.def("transition", function(t, e) {
		var n = {
			linear: "cubic-bezier(0.0, 0.0, 1.0, 1.0)",
			ease: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
			easeIn: "cubic-bezier(0.42, 0.0, 1.0, 1.0)",
			easeOut: "cubic-bezier(0.0, 0.0, 0.58, 1.0)",
			easeInOut: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
			easeInSine: "cubic-bezier(0.47, 0, 0.745, 0.715)",
			easeOutSine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
			easeInOutSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
			easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
			easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
			easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
			easeInCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
			easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
			easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
			easeInQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
			easeOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
			easeInOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
			easeInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
			easeOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
			easeInOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
			easeInExpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
			easeOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
			easeInOutExpo: "cubic-bezier(1, 0, 0, 1)",
			easeInCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
			easeOutCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
			easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
			easeInBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
			easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
			easeInOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
		};
		return n
	}, "TransitionEase"), condesire.define("transition", function(t, e) {
		var n = function(t) {
			t && t[0] && this.attach(t), cd.extend(this, e.event.Dispatcher)
		};
		return n.prefixed = function(t) {
			return Modernizr.prefixed(t)
		}, n.COMPLETE = "Transitioner.complete", n.NAME = n.prefixed("transition"), n.available = function() {
			return cd.csstransitions()
		}, n.prototype.attach = function(t) {
			return this.clear(), this.$target = t, this.transitionStr = "", this
		}, n.prototype.clear = function() {
			return this.$target && this.$target.off(e.event.TransitionEvent.COMPLETE, this.onComplete), this.transitions = {}, this.transitionStr = "", this
		}, n.prototype.set = function(e, n, i, r) {
			var o = this;
			return n = n ? n : "1000", i = i ? i : "linear", r = r ? r : 0, _.has(t.TransitionEase, i) && (i = t.TransitionEase[i]), _.each(e, function(t, e) {
				var s = Modernizr.prefixed(e) ? Modernizr.prefixed(e) : e,
					a = {
						name: s,
						val: t
					},
					c = {
						property: a.name,
						value: a.val,
						duration: n,
						ease: i,
						delay: r,
						complete: !1
					};
				o.transitions[a.name] = c
			}), this
		}, n.prototype.go = function(t) {
			var i = this,
				r = {};
			if (_.isEmpty(t) && (t = _.map(i.transitions, function(t, e) {
					return n.prefixed(e)
				})), _.each(t, function(t, e) {
					0 != t && (i.$target.css(t) || i.$target.css(t, ""), i.transitionStr += i.createTransitionStyle(t), r[t] = i.transitions[t].value)
				}), cd.csstransitions()) {
				this.$target.on(e.event.TransitionEvent.COMPLETE, _.bind(n.prototype.onComplete, i));
				var o = {};
				o[n.NAME] = this.transitionStr, this.$target.css(o)
			} else this.complete();
			return this.$target.css(r), this
		}, n.prototype.onComplete = function(t) {
			var e = this;
			t.stopPropagation();
			var n = t.originalEvent.propertyName.toCamel();
			_.has(e.transitions, n) && e.$target[0] == t.target && (e.transitions[n].complete = !0);
			var i = _.all(e.transitions, function(t) {
				return t.complete
			});
			i && e.complete()
		}, n.prototype.complete = function() {
			var t = this;
			t.transitionStr = "";
			var e = {};
			e[n.NAME] = t.transitionStr, t.$target.css(e), setTimeout(function() {
				t.dispatch(n.COMPLETE)
			}, 0)
		}, n.prototype.setGo = function(t, e, i, r) {
			this.set(t, e, i, r);
			var o = _.map(t, function(t, e) {
				return n.prefixed(e)
			});
			return this.go(o), this
		}, n.prototype.createTransitionStyle = function(t) {
			var e = _.isEmpty(this.transitionStr) ? "" : ",";
			return e += this.toSnake(this.transitions[t].property), e += " ", e += this.transitions[t].duration + "ms", e += " ", e += this.transitions[t].ease, e += " ", e += this.transitions[t].delay + "ms"
		}, n.prototype.toSnake = function(t) {
			return t.camelToSnake().replace(/^ms-/, "-ms-")
		}, n
	}, "Transitioner"), condesire.define("transition", function(t, e) {
		var n = function(t) {
			cd.extend(this, cd.event.Dispatcher), this.$target = t
		};
		return n.COMPLETE = cd.transition.Transitioner.COMPLETE, n.prototype.addEvent = function(t) {
			var e = this;
			t = t || function() {}, e.$target.off(cd.event.TransitionEvent.COMPLETE).on(cd.event.TransitionEvent.COMPLETE, function(n) {
				e._dispatch(n, t)
			}), cd.csstransitions() || e._dispatch(e.$target[0], t)
		}, n.prototype.addClass = function(t, e, n) {
			var i = this;
			e = e || function() {}, i.$target.off(cd.event.TransitionEvent.COMPLETE).on(cd.event.TransitionEvent.COMPLETE, function(t) {
				i._dispatch(t, e, n)
			}), i.$target.addClass(t), cd.csstransitions() || i._dispatch(i.$target[0], e)
		}, n.prototype.removeClass = function(t, e, n) {
			var i = this;
			e = e || function() {}, i.$target.off(cd.event.TransitionEvent.COMPLETE).on(cd.event.TransitionEvent.COMPLETE, function(t) {
				i._dispatch(t, e, n)
			}), i.$target.removeClass(t), cd.csstransitions() || i._dispatch(i.$target[0], e)
		}, n.prototype._dispatch = function(t, e, i) {
			function r(t, i) {
				o.dispatch(n.COMPLETE), e.apply(t), i && o.$target.off(cd.event.TransitionEvent.COMPLETE)
			}
			i = void 0 == i;
			var o = this;
			t && t.target == this.$target[0] ? r(t.target, i) : cd.csstransitions() || setTimeout(function() {
				r(t, i)
			}, 0)
		}, n
	}, "TransEndDispatcher"),
	function() {
		"use strict";
		_.eachStep = function(t, e, n) {
			var i = 0,
				r = [];
			return _.each(t, function(o, s, a) {
				var c = s % n;
				r.push(o), (c == n - 1 || t.length - 1 == s) && (e(r, i, a), r = [], i++)
			}), t
		}, _.checker = function() {
			var t = _.toArray(arguments);
			return function(e) {
				return _.reduce(t, function(t, n) {
					return n(e) ? t : _.chain(t).push(n.message).value()
				}, [])
			}
		}, _.validator = function(t, e) {
			var n = function() {
				return e.apply(e, arguments)
			};
			return n.message = t, n
		}, _.aMap = function(t) {
			return _.isObject(t)
		}, _.hasKey = function() {
			var t = _.toArray(arguments),
				e = function(e) {
					return _.every(t, function(t) {
						return _.has(e, t)
					})
				};
			return e.message = _.cat(["これらのキーが存在する必要があります:"], t).join(" "), e
		}, _.always = function(t) {
			return function() {
				return t
			}
		}, _.fnull = function(t) {
			_.rest(arguments);
			return function() {
				var t = _.map(arguments, function(t, e) {
					return existy(t) ? t : defalts[e]
				});
				return fun.apply(null, t)
			}
		}, _.cat = function() {
			var t = _.first(arguments);
			return _.existy(t) ? t.concat.apply(t, _.rest(arguments)) : []
		}, _.existy = function(t) {
			return null != t
		}, _.second = function(t, e, n) {
			return null == t ? void 0 : null == e || n ? t[1] : void 0
		}
	}();