/**
 * Wallet Connect Button - Combined Build
 * Generated from src/ files
 * Build date: 2026-06-23T14:00:15.524Z
 */

/* ===== nl-wallet-web.js ===== */
var Li = Object.defineProperty;
var Bi = (e, t, s) => t in e ? Li(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var se = (e, t, s) => Bi(e, typeof t != "symbol" ? t + "" : t, s);
/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const ee = {}, Pt = [], qe = () => {
}, ro = () => !1, Ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xn = (e) => e.startsWith("onUpdate:"), le = Object.assign, Tn = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Fi = Object.prototype.hasOwnProperty, K = (e, t) => Fi.call(e, t), H = Array.isArray, Ot = (e) => Ds(e) === "[object Map]", oo = (e) => Ds(e) === "[object Set]", W = (e) => typeof e == "function", ae = (e) => typeof e == "string", pt = (e) => typeof e == "symbol", oe = (e) => e !== null && typeof e == "object", io = (e) => (oe(e) || W(e)) && W(e.then) && W(e.catch), lo = Object.prototype.toString, Ds = (e) => lo.call(e), Hi = (e) => Ds(e).slice(8, -1), js = (e) => Ds(e) === "[object Object]", In = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xt = /* @__PURE__ */ Mn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Us = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, Vi = /-\w/g, je = Us(
  (e) => e.replace(Vi, (t) => t.slice(1).toUpperCase())
), Wi = /\B([A-Z])/g, ke = Us(
  (e) => e.replace(Wi, "-$1").toLowerCase()
), ao = Us((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zs = Us(
  (e) => e ? `on${ao(e)}` : ""
), dt = (e, t) => !Object.is(e, t), Js = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, co = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Yi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ar = (e) => {
  const t = ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let cr;
const Ls = () => cr || (cr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Pn(e) {
  if (H(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = ae(n) ? zi(n) : Pn(n);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (ae(e) || oe(e))
    return e;
}
const Gi = /;(?![^(]*\))/g, Ki = /:([^]+)/, Xi = /\/\*[^]*?\*\//g;
function zi(e) {
  const t = {};
  return e.replace(Xi, "").split(Gi).forEach((s) => {
    if (s) {
      const n = s.split(Ki);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function rt(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (H(e))
    for (let s = 0; s < e.length; s++) {
      const n = rt(e[s]);
      n && (t += n + " ");
    }
  else if (oe(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Zi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ji = /* @__PURE__ */ Mn(Zi);
function uo(e) {
  return !!e || e === "";
}
const fo = (e) => !!(e && e.__v_isRef === !0), X = (e) => ae(e) ? e : e == null ? "" : H(e) || oe(e) && (e.toString === lo || !W(e.toString)) ? fo(e) ? X(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => fo(t) ? ho(e, t.value) : Ot(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], o) => (s[Qs(n, o) + " =>"] = r, s),
    {}
  )
} : oo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Qs(s))
} : pt(t) ? Qs(t) : oe(t) && !H(t) && !js(t) ? String(t) : t, Qs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    pt(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ve;
class Qi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ve, !t && ve && (this.index = (ve.scopes || (ve.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = ve;
      try {
        return ve = this, t();
      } finally {
        ve = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ve, ve = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ve = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function qi() {
  return ve;
}
let $;
const qs = /* @__PURE__ */ new WeakSet();
class po {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ve && ve.active && ve.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qs.has(this) && (qs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || go(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ur(this), yo(this);
    const t = $, s = Ue;
    $ = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      bo(this), $ = t, Ue = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Nn(t);
      this.deps = this.depsTail = void 0, ur(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    un(this) && this.run();
  }
  get dirty() {
    return un(this);
  }
}
let mo = 0, zt, Zt;
function go(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Zt, Zt = e;
    return;
  }
  e.next = zt, zt = e;
}
function On() {
  mo++;
}
function kn() {
  if (--mo > 0)
    return;
  if (Zt) {
    let t = Zt;
    for (Zt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; zt; ) {
    let t = zt;
    for (zt = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function yo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function bo(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Nn(n), _i(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function un(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (wo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function wo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ts) || (e.globalVersion = ts, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !un(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = $, n = Ue;
  $ = e, Ue = !0;
  try {
    yo(e);
    const r = e.fn(e._value);
    (t.version === 0 || dt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    $ = s, Ue = n, bo(e), e.flags &= -3;
  }
}
function Nn(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let o = s.computed.deps; o; o = o.nextDep)
      Nn(o, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function _i(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Ue = !0;
const Ao = [];
function ot() {
  Ao.push(Ue), Ue = !1;
}
function it() {
  const e = Ao.pop();
  Ue = e === void 0 ? !0 : e;
}
function ur(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = $;
    $ = void 0;
    try {
      t();
    } finally {
      $ = s;
    }
  }
}
let ts = 0;
class $i {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dn {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!$ || !Ue || $ === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== $)
      s = this.activeLink = new $i($, this), $.deps ? (s.prevDep = $.depsTail, $.depsTail.nextDep = s, $.depsTail = s) : $.deps = $.depsTail = s, Co(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = $.depsTail, s.nextDep = void 0, $.depsTail.nextDep = s, $.depsTail = s, $.deps === s && ($.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, ts++, this.notify(t);
  }
  notify(t) {
    On();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      kn();
    }
  }
}
function Co(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Co(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const fn = /* @__PURE__ */ new WeakMap(), wt = Symbol(
  ""
), dn = Symbol(
  ""
), ss = Symbol(
  ""
);
function pe(e, t, s) {
  if (Ue && $) {
    let n = fn.get(e);
    n || fn.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Dn()), r.map = n, r.key = s), r.track();
  }
}
function nt(e, t, s, n, r, o) {
  const i = fn.get(e);
  if (!i) {
    ts++;
    return;
  }
  const l = (u) => {
    u && u.trigger();
  };
  if (On(), t === "clear")
    i.forEach(l);
  else {
    const u = H(e), c = u && In(s);
    if (u && s === "length") {
      const a = Number(n);
      i.forEach((f, h) => {
        (h === "length" || h === ss || !pt(h) && h >= a) && l(f);
      });
    } else
      switch ((s !== void 0 || i.has(void 0)) && l(i.get(s)), c && l(i.get(ss)), t) {
        case "add":
          u ? c && l(i.get("length")) : (l(i.get(wt)), Ot(e) && l(i.get(dn)));
          break;
        case "delete":
          u || (l(i.get(wt)), Ot(e) && l(i.get(dn)));
          break;
        case "set":
          Ot(e) && l(i.get(wt));
          break;
      }
  }
  kn();
}
function Tt(e) {
  const t = Z(e);
  return t === e ? t : (pe(t, "iterate", ss), Le(e) ? t : t.map(be));
}
function jn(e) {
  return pe(e = Z(e), "iterate", ss), e;
}
const el = {
  __proto__: null,
  [Symbol.iterator]() {
    return _s(this, Symbol.iterator, be);
  },
  concat(...e) {
    return Tt(this).concat(
      ...e.map((t) => H(t) ? Tt(t) : t)
    );
  },
  entries() {
    return _s(this, "entries", (e) => (e[1] = be(e[1]), e));
  },
  every(e, t) {
    return tt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return tt(this, "filter", e, t, (s) => s.map(be), arguments);
  },
  find(e, t) {
    return tt(this, "find", e, t, be, arguments);
  },
  findIndex(e, t) {
    return tt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return tt(this, "findLast", e, t, be, arguments);
  },
  findLastIndex(e, t) {
    return tt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return tt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return $s(this, "includes", e);
  },
  indexOf(...e) {
    return $s(this, "indexOf", e);
  },
  join(e) {
    return Tt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return $s(this, "lastIndexOf", e);
  },
  map(e, t) {
    return tt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Vt(this, "pop");
  },
  push(...e) {
    return Vt(this, "push", e);
  },
  reduce(e, ...t) {
    return fr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fr(this, "reduceRight", e, t);
  },
  shift() {
    return Vt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return tt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Vt(this, "splice", e);
  },
  toReversed() {
    return Tt(this).toReversed();
  },
  toSorted(e) {
    return Tt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Tt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Vt(this, "unshift", e);
  },
  values() {
    return _s(this, "values", be);
  }
};
function _s(e, t, s) {
  const n = jn(e), r = n[t]();
  return n !== e && !Le(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.done || (o.value = s(o.value)), o;
  }), r;
}
const tl = Array.prototype;
function tt(e, t, s, n, r, o) {
  const i = jn(e), l = i !== e && !Le(e), u = i[t];
  if (u !== tl[t]) {
    const f = u.apply(e, o);
    return l ? be(f) : f;
  }
  let c = s;
  i !== e && (l ? c = function(f, h) {
    return s.call(this, be(f), h, e);
  } : s.length > 2 && (c = function(f, h) {
    return s.call(this, f, h, e);
  }));
  const a = u.call(i, c, n);
  return l && r ? r(a) : a;
}
function fr(e, t, s, n) {
  const r = jn(e);
  let o = s;
  return r !== e && (Le(e) ? s.length > 3 && (o = function(i, l, u) {
    return s.call(this, i, l, u, e);
  }) : o = function(i, l, u) {
    return s.call(this, i, be(l), u, e);
  }), r[t](o, ...n);
}
function $s(e, t, s) {
  const n = Z(e);
  pe(n, "iterate", ss);
  const r = n[t](...s);
  return (r === -1 || r === !1) && Fn(s[0]) ? (s[0] = Z(s[0]), n[t](...s)) : r;
}
function Vt(e, t, s = []) {
  ot(), On();
  const n = Z(e)[t].apply(e, s);
  return kn(), it(), n;
}
const sl = /* @__PURE__ */ Mn("__proto__,__v_isRef,__isVue"), Ro = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pt)
);
function nl(e) {
  pt(e) || (e = String(e));
  const t = Z(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
class vo {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, o = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return o;
    if (s === "__v_raw")
      return n === (r ? o ? hl : xo : o ? Mo : So).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const i = H(t);
    if (!r) {
      let u;
      if (i && (u = el[s]))
        return u;
      if (s === "hasOwnProperty")
        return nl;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ge(t) ? t : n
    );
    if ((pt(s) ? Ro.has(s) : sl(s)) || (r || pe(t, "get", s), o))
      return l;
    if (ge(l)) {
      const u = i && In(s) ? l : l.value;
      return r && oe(u) ? pn(u) : u;
    }
    return oe(l) ? r ? pn(l) : Ln(l) : l;
  }
}
class Eo extends vo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let o = t[s];
    if (!this._isShallow) {
      const u = Ct(o);
      if (!Le(n) && !Ct(n) && (o = Z(o), n = Z(n)), !H(t) && ge(o) && !ge(n))
        return u || (o.value = n), !0;
    }
    const i = H(t) && In(s) ? Number(s) < t.length : K(t, s), l = Reflect.set(
      t,
      s,
      n,
      ge(t) ? t : r
    );
    return t === Z(r) && (i ? dt(n, o) && nt(t, "set", s, n) : nt(t, "add", s, n)), l;
  }
  deleteProperty(t, s) {
    const n = K(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && nt(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!pt(s) || !Ro.has(s)) && pe(t, "has", s), n;
  }
  ownKeys(t) {
    return pe(
      t,
      "iterate",
      H(t) ? "length" : wt
    ), Reflect.ownKeys(t);
  }
}
class rl extends vo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const ol = /* @__PURE__ */ new Eo(), il = /* @__PURE__ */ new rl(), ll = /* @__PURE__ */ new Eo(!0);
const hn = (e) => e, gs = (e) => Reflect.getPrototypeOf(e);
function al(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, o = Z(r), i = Ot(o), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, c = r[e](...n), a = s ? hn : t ? mn : be;
    return !t && pe(
      o,
      "iterate",
      u ? dn : wt
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = c.next();
        return h ? { value: f, done: h } : {
          value: l ? [a(f[0]), a(f[1])] : a(f),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ys(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function cl(e, t) {
  const s = {
    get(r) {
      const o = this.__v_raw, i = Z(o), l = Z(r);
      e || (dt(r, l) && pe(i, "get", r), pe(i, "get", l));
      const { has: u } = gs(i), c = t ? hn : e ? mn : be;
      if (u.call(i, r))
        return c(o.get(r));
      if (u.call(i, l))
        return c(o.get(l));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && pe(Z(r), "iterate", wt), r.size;
    },
    has(r) {
      const o = this.__v_raw, i = Z(o), l = Z(r);
      return e || (dt(r, l) && pe(i, "has", r), pe(i, "has", l)), r === l ? o.has(r) : o.has(r) || o.has(l);
    },
    forEach(r, o) {
      const i = this, l = i.__v_raw, u = Z(l), c = t ? hn : e ? mn : be;
      return !e && pe(u, "iterate", wt), l.forEach((a, f) => r.call(o, c(a), c(f), i));
    }
  };
  return le(
    s,
    e ? {
      add: ys("add"),
      set: ys("set"),
      delete: ys("delete"),
      clear: ys("clear")
    } : {
      add(r) {
        !t && !Le(r) && !Ct(r) && (r = Z(r));
        const o = Z(this);
        return gs(o).has.call(o, r) || (o.add(r), nt(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !Le(o) && !Ct(o) && (o = Z(o));
        const i = Z(this), { has: l, get: u } = gs(i);
        let c = l.call(i, r);
        c || (r = Z(r), c = l.call(i, r));
        const a = u.call(i, r);
        return i.set(r, o), c ? dt(o, a) && nt(i, "set", r, o) : nt(i, "add", r, o), this;
      },
      delete(r) {
        const o = Z(this), { has: i, get: l } = gs(o);
        let u = i.call(o, r);
        u || (r = Z(r), u = i.call(o, r)), l && l.call(o, r);
        const c = o.delete(r);
        return u && nt(o, "delete", r, void 0), c;
      },
      clear() {
        const r = Z(this), o = r.size !== 0, i = r.clear();
        return o && nt(
          r,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    s[r] = al(r, e, t);
  }), s;
}
function Un(e, t) {
  const s = cl(e, t);
  return (n, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    K(s, r) && r in n ? s : n,
    r,
    o
  );
}
const ul = {
  get: /* @__PURE__ */ Un(!1, !1)
}, fl = {
  get: /* @__PURE__ */ Un(!1, !0)
}, dl = {
  get: /* @__PURE__ */ Un(!0, !1)
};
const So = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap(), hl = /* @__PURE__ */ new WeakMap();
function pl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ml(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pl(Hi(e));
}
function Ln(e) {
  return Ct(e) ? e : Bn(
    e,
    !1,
    ol,
    ul,
    So
  );
}
function gl(e) {
  return Bn(
    e,
    !1,
    ll,
    fl,
    Mo
  );
}
function pn(e) {
  return Bn(
    e,
    !0,
    il,
    dl,
    xo
  );
}
function Bn(e, t, s, n, r) {
  if (!oe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = ml(e);
  if (o === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    o === 2 ? n : s
  );
  return r.set(e, l), l;
}
function Jt(e) {
  return Ct(e) ? Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ct(e) {
  return !!(e && e.__v_isReadonly);
}
function Le(e) {
  return !!(e && e.__v_isShallow);
}
function Fn(e) {
  return e ? !!e.__v_raw : !1;
}
function Z(e) {
  const t = e && e.__v_raw;
  return t ? Z(t) : e;
}
function yl(e) {
  return !K(e, "__v_skip") && Object.isExtensible(e) && co(e, "__v_skip", !0), e;
}
const be = (e) => oe(e) ? Ln(e) : e, mn = (e) => oe(e) ? pn(e) : e;
function ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Rt(e) {
  return bl(e, !1);
}
function bl(e, t) {
  return ge(e) ? e : new wl(e, t);
}
class wl {
  constructor(t, s) {
    this.dep = new Dn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : Z(t), this._value = s ? t : be(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || Le(t) || Ct(t);
    t = n ? t : Z(t), dt(t, s) && (this._rawValue = t, this._value = n ? t : be(t), this.dep.trigger());
  }
}
function F(e) {
  return ge(e) ? e.value : e;
}
const Al = {
  get: (e, t, s) => t === "__v_raw" ? e : F(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return ge(r) && !ge(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function To(e) {
  return Jt(e) ? e : new Proxy(e, Al);
}
class Cl {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Dn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ts - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    $ !== this)
      return go(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return wo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Rl(e, t, s = !1) {
  let n, r;
  return W(e) ? n = e : (n = e.get, r = e.set), new Cl(n, r, s);
}
const bs = {}, Ms = /* @__PURE__ */ new WeakMap();
let yt;
function vl(e, t = !1, s = yt) {
  if (s) {
    let n = Ms.get(s);
    n || Ms.set(s, n = []), n.push(e);
  }
}
function El(e, t, s = ee) {
  const { immediate: n, deep: r, once: o, scheduler: i, augmentJob: l, call: u } = s, c = (C) => r ? C : Le(C) || r === !1 || r === 0 ? ft(C, 1) : ft(C);
  let a, f, h, g, m = !1, b = !1;
  if (ge(e) ? (f = () => e.value, m = Le(e)) : Jt(e) ? (f = () => c(e), m = !0) : H(e) ? (b = !0, m = e.some((C) => Jt(C) || Le(C)), f = () => e.map((C) => {
    if (ge(C))
      return C.value;
    if (Jt(C))
      return c(C);
    if (W(C))
      return u ? u(C, 2) : C();
  })) : W(e) ? t ? f = u ? () => u(e, 2) : e : f = () => {
    if (h) {
      ot();
      try {
        h();
      } finally {
        it();
      }
    }
    const C = yt;
    yt = a;
    try {
      return u ? u(e, 3, [g]) : e(g);
    } finally {
      yt = C;
    }
  } : f = qe, t && r) {
    const C = f, L = r === !0 ? 1 / 0 : r;
    f = () => ft(C(), L);
  }
  const A = qi(), S = () => {
    a.stop(), A && A.active && Tn(A.effects, a);
  };
  if (o && t) {
    const C = t;
    t = (...L) => {
      C(...L), S();
    };
  }
  let U = b ? new Array(e.length).fill(bs) : bs;
  const T = (C) => {
    if (!(!(a.flags & 1) || !a.dirty && !C))
      if (t) {
        const L = a.run();
        if (r || m || (b ? L.some((re, te) => dt(re, U[te])) : dt(L, U))) {
          h && h();
          const re = yt;
          yt = a;
          try {
            const te = [
              L,
              // pass undefined as the old value when it's changed for the first time
              U === bs ? void 0 : b && U[0] === bs ? [] : U,
              g
            ];
            U = L, u ? u(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            yt = re;
          }
        }
      } else
        a.run();
  };
  return l && l(T), a = new po(f), a.scheduler = i ? () => i(T, !1) : T, g = (C) => vl(C, !1, a), h = a.onStop = () => {
    const C = Ms.get(a);
    if (C) {
      if (u)
        u(C, 4);
      else
        for (const L of C) L();
      Ms.delete(a);
    }
  }, t ? n ? T(!0) : U = a.run() : i ? i(T.bind(null, !0), !0) : a.run(), S.pause = a.pause.bind(a), S.resume = a.resume.bind(a), S.stop = S, S;
}
function ft(e, t = 1 / 0, s) {
  if (t <= 0 || !oe(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, ge(e))
    ft(e.value, t, s);
  else if (H(e))
    for (let n = 0; n < e.length; n++)
      ft(e[n], t, s);
  else if (oo(e) || Ot(e))
    e.forEach((n) => {
      ft(n, t, s);
    });
  else if (js(e)) {
    for (const n in e)
      ft(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && ft(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ls(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    Bs(r, t, s);
  }
}
function _e(e, t, s, n) {
  if (W(e)) {
    const r = ls(e, t, s, n);
    return r && io(r) && r.catch((o) => {
      Bs(o, t, s);
    }), r;
  }
  if (H(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(_e(e[o], t, s, n));
    return r;
  }
}
function Bs(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ee;
  if (t) {
    let l = t.parent;
    const u = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let f = 0; f < a.length; f++)
          if (a[f](e, u, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      ot(), ls(o, null, 10, [
        e,
        u,
        c
      ]), it();
      return;
    }
  }
  Sl(e, s, r, n, i);
}
function Sl(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const we = [];
let Ze = -1;
const kt = [];
let ct = null, It = 0;
const Io = /* @__PURE__ */ Promise.resolve();
let xs = null;
function Po(e) {
  const t = xs || Io;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ml(e) {
  let t = Ze + 1, s = we.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = we[n], o = ns(r);
    o < e || o === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Hn(e) {
  if (!(e.flags & 1)) {
    const t = ns(e), s = we[we.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ns(s) ? we.push(e) : we.splice(Ml(t), 0, e), e.flags |= 1, Oo();
  }
}
function Oo() {
  xs || (xs = Io.then(No));
}
function xl(e) {
  H(e) ? kt.push(...e) : ct && e.id === -1 ? ct.splice(It + 1, 0, e) : e.flags & 1 || (kt.push(e), e.flags |= 1), Oo();
}
function dr(e, t, s = Ze + 1) {
  for (; s < we.length; s++) {
    const n = we[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      we.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ko(e) {
  if (kt.length) {
    const t = [...new Set(kt)].sort(
      (s, n) => ns(s) - ns(n)
    );
    if (kt.length = 0, ct) {
      ct.push(...t);
      return;
    }
    for (ct = t, It = 0; It < ct.length; It++) {
      const s = ct[It];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    ct = null, It = 0;
  }
}
const ns = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function No(e) {
  try {
    for (Ze = 0; Ze < we.length; Ze++) {
      const t = we[Ze];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ls(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ze < we.length; Ze++) {
      const t = we[Ze];
      t && (t.flags &= -2);
    }
    Ze = -1, we.length = 0, ko(), xs = null, (we.length || kt.length) && No();
  }
}
let Qe = null, Do = null;
function Ts(e) {
  const t = Qe;
  return Qe = e, Do = e && e.type.__scopeId || null, t;
}
function Tl(e, t = Qe, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && Rr(-1);
    const o = Ts(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Ts(o), n._d && Rr(1);
    }
    return i;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function mt(e, t, s, n) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let u = l.dir[n];
    u && (ot(), _e(u, s, 8, [
      e.el,
      l,
      e,
      t
    ]), it());
  }
}
const Il = Symbol("_vte"), Pl = (e) => e.__isTeleport, Ol = Symbol("_leaveCb");
function Vn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Vn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function fe(e, t) {
  return W(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function jo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Is = /* @__PURE__ */ new WeakMap();
function Qt(e, t, s, n, r = !1) {
  if (H(e)) {
    e.forEach(
      (m, b) => Qt(
        m,
        t && (H(t) ? t[b] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (qt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Qt(e, t, s, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? zn(n.component) : n.el, i = r ? null : o, { i: l, r: u } = e, c = t && t.r, a = l.refs === ee ? l.refs = {} : l.refs, f = l.setupState, h = Z(f), g = f === ee ? ro : (m) => K(h, m);
  if (c != null && c !== u) {
    if (hr(t), ae(c))
      a[c] = null, g(c) && (f[c] = null);
    else if (ge(c)) {
      c.value = null;
      const m = t;
      m.k && (a[m.k] = null);
    }
  }
  if (W(u))
    ls(u, l, 12, [i, a]);
  else {
    const m = ae(u), b = ge(u);
    if (m || b) {
      const A = () => {
        if (e.f) {
          const S = m ? g(u) ? f[u] : a[u] : u.value;
          if (r)
            H(S) && Tn(S, o);
          else if (H(S))
            S.includes(o) || S.push(o);
          else if (m)
            a[u] = [o], g(u) && (f[u] = a[u]);
          else {
            const U = [o];
            u.value = U, e.k && (a[e.k] = U);
          }
        } else m ? (a[u] = i, g(u) && (f[u] = i)) : b && (u.value = i, e.k && (a[e.k] = i));
      };
      if (i) {
        const S = () => {
          A(), Is.delete(e);
        };
        S.id = -1, Is.set(e, S), xe(S, s);
      } else
        hr(e), A();
    }
  }
}
function hr(e) {
  const t = Is.get(e);
  t && (t.flags |= 8, Is.delete(e));
}
Ls().requestIdleCallback;
Ls().cancelIdleCallback;
const qt = (e) => !!e.type.__asyncLoader, Uo = (e) => e.type.__isKeepAlive;
function kl(e, t) {
  Lo(e, "a", t);
}
function Nl(e, t) {
  Lo(e, "da", t);
}
function Lo(e, t, s = Ae) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Fs(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      Uo(r.parent.vnode) && Dl(n, t, s, r), r = r.parent;
  }
}
function Dl(e, t, s, n) {
  const r = Fs(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Yn(() => {
    Tn(n[t], r);
  }, s);
}
function Fs(e, t, s = Ae, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...i) => {
      ot();
      const l = as(s), u = _e(t, s, e, i);
      return l(), it(), u;
    });
    return n ? r.unshift(o) : r.push(o), o;
  }
}
const lt = (e) => (t, s = Ae) => {
  (!os || e === "sp") && Fs(e, (...n) => t(...n), s);
}, jl = lt("bm"), Wn = lt("m"), Ul = lt(
  "bu"
), Ll = lt("u"), Bl = lt(
  "bum"
), Yn = lt("um"), Fl = lt(
  "sp"
), Hl = lt("rtg"), Vl = lt("rtc");
function Wl(e, t = Ae) {
  Fs("ec", e, t);
}
const Yl = Symbol.for("v-ndc"), gn = (e) => e ? ri(e) ? zn(e) : gn(e.parent) : null, _t = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ le(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => gn(e.parent),
    $root: (e) => gn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Hn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Po.bind(e.proxy)),
    $watch: (e) => ua.bind(e)
  })
), en = (e, t) => e !== ee && !e.__isScriptSetup && K(e, t), Gl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: o, accessCache: i, type: l, appContext: u } = e;
    let c;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return o[t];
        }
      else {
        if (en(n, t))
          return i[t] = 1, n[t];
        if (r !== ee && K(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && K(c, t)
        )
          return i[t] = 3, o[t];
        if (s !== ee && K(s, t))
          return i[t] = 4, s[t];
        yn && (i[t] = 0);
      }
    }
    const a = _t[t];
    let f, h;
    if (a)
      return t === "$attrs" && pe(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (s !== ee && K(s, t))
      return i[t] = 4, s[t];
    if (
      // global properties
      h = u.config.globalProperties, K(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: o } = e;
    return en(r, t) ? (r[t] = s, !0) : n !== ee && K(n, t) ? (n[t] = s, !0) : K(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: o, type: i }
  }, l) {
    let u, c;
    return !!(s[l] || e !== ee && l[0] !== "$" && K(e, l) || en(t, l) || (u = o[0]) && K(u, l) || K(n, l) || K(_t, l) || K(r.config.globalProperties, l) || (c = i.__cssModules) && c[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : K(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function pr(e) {
  return H(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let yn = !0;
function Kl(e) {
  const t = Fo(e), s = e.proxy, n = e.ctx;
  yn = !1, t.beforeCreate && mr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: u,
    inject: c,
    // lifecycle
    created: a,
    beforeMount: f,
    mounted: h,
    beforeUpdate: g,
    updated: m,
    activated: b,
    deactivated: A,
    beforeDestroy: S,
    beforeUnmount: U,
    destroyed: T,
    unmounted: C,
    render: L,
    renderTracked: re,
    renderTriggered: te,
    errorCaptured: Pe,
    serverPrefetch: $e,
    // public API
    expose: Ve,
    inheritAttrs: at,
    // assets
    components: et,
    directives: We,
    filters: De
  } = t;
  if (c && Xl(c, n, null), i)
    for (const q in i) {
      const Y = i[q];
      W(Y) && (n[q] = Y.bind(s));
    }
  if (r) {
    const q = r.call(s, s);
    oe(q) && (e.data = Ln(q));
  }
  if (yn = !0, o)
    for (const q in o) {
      const Y = o[q], Ye = W(Y) ? Y.bind(s, s) : W(Y.get) ? Y.get.bind(s, s) : qe, St = !W(Y) && W(Y.set) ? Y.set.bind(s) : qe, he = Cs({
        get: Ye,
        set: St
      });
      Object.defineProperty(n, q, {
        enumerable: !0,
        configurable: !0,
        get: () => he.value,
        set: (de) => he.value = de
      });
    }
  if (l)
    for (const q in l)
      Bo(l[q], n, s, q);
  if (u) {
    const q = W(u) ? u.call(s) : u;
    Reflect.ownKeys(q).forEach((Y) => {
      Kt(Y, q[Y]);
    });
  }
  a && mr(a, e, "c");
  function z(q, Y) {
    H(Y) ? Y.forEach((Ye) => q(Ye.bind(s))) : Y && q(Y.bind(s));
  }
  if (z(jl, f), z(Wn, h), z(Ul, g), z(Ll, m), z(kl, b), z(Nl, A), z(Wl, Pe), z(Vl, re), z(Hl, te), z(Bl, U), z(Yn, C), z(Fl, $e), H(Ve))
    if (Ve.length) {
      const q = e.exposed || (e.exposed = {});
      Ve.forEach((Y) => {
        Object.defineProperty(q, Y, {
          get: () => s[Y],
          set: (Ye) => s[Y] = Ye,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === qe && (e.render = L), at != null && (e.inheritAttrs = at), et && (e.components = et), We && (e.directives = We), $e && jo(e);
}
function Xl(e, t, s = qe) {
  H(e) && (e = bn(e));
  for (const n in e) {
    const r = e[n];
    let o;
    oe(r) ? "default" in r ? o = Be(
      r.from || n,
      r.default,
      !0
    ) : o = Be(r.from || n) : o = Be(r), ge(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[n] = o;
  }
}
function mr(e, t, s) {
  _e(
    H(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Bo(e, t, s, n) {
  let r = n.includes(".") ? _o(s, n) : () => s[n];
  if (ae(e)) {
    const o = t[e];
    W(o) && $t(r, o);
  } else if (W(e))
    $t(r, e.bind(s));
  else if (oe(e))
    if (H(e))
      e.forEach((o) => Bo(o, t, s, n));
    else {
      const o = W(e.handler) ? e.handler.bind(s) : t[e.handler];
      W(o) && $t(r, o, e);
    }
}
function Fo(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let u;
  return l ? u = l : !r.length && !s && !n ? u = t : (u = {}, r.length && r.forEach(
    (c) => Ps(u, c, i, !0)
  ), Ps(u, t, i)), oe(t) && o.set(t, u), u;
}
function Ps(e, t, s, n = !1) {
  const { mixins: r, extends: o } = t;
  o && Ps(e, o, s, !0), r && r.forEach(
    (i) => Ps(e, i, s, !0)
  );
  for (const i in t)
    if (!(n && i === "expose")) {
      const l = zl[i] || s && s[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const zl = {
  data: gr,
  props: yr,
  emits: yr,
  // objects
  methods: Gt,
  computed: Gt,
  // lifecycle
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  // assets
  components: Gt,
  directives: Gt,
  // watch
  watch: Jl,
  // provide / inject
  provide: gr,
  inject: Zl
};
function gr(e, t) {
  return t ? e ? function() {
    return le(
      W(e) ? e.call(this, this) : e,
      W(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Zl(e, t) {
  return Gt(bn(e), bn(t));
}
function bn(e) {
  if (H(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gt(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yr(e, t) {
  return e ? H(e) && H(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    pr(e),
    pr(t ?? {})
  ) : t;
}
function Jl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = le(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ye(e[n], t[n]);
  return s;
}
function Ho() {
  return {
    app: null,
    config: {
      isNativeTag: ro,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ql = 0;
function ql(e, t) {
  return function(n, r = null) {
    W(n) || (n = le({}, n)), r != null && !oe(r) && (r = null);
    const o = Ho(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const c = o.app = {
      _uid: Ql++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Na,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...f) {
        return i.has(a) || (a && W(a.install) ? (i.add(a), a.install(c, ...f)) : W(a) && (i.add(a), a(c, ...f))), c;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), c;
      },
      component(a, f) {
        return f ? (o.components[a] = f, c) : o.components[a];
      },
      directive(a, f) {
        return f ? (o.directives[a] = f, c) : o.directives[a];
      },
      mount(a, f, h) {
        if (!u) {
          const g = c._ceVNode || ce(n, r);
          return g.appContext = o, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(g, a, h), u = !0, c._container = a, a.__vue_app__ = c, zn(g.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        u && (_e(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, f) {
        return o.provides[a] = f, c;
      },
      runWithContext(a) {
        const f = Nt;
        Nt = c;
        try {
          return a();
        } finally {
          Nt = f;
        }
      }
    };
    return c;
  };
}
let Nt = null;
function Kt(e, t) {
  if (Ae) {
    let s = Ae.provides;
    const n = Ae.parent && Ae.parent.provides;
    n === s && (s = Ae.provides = Object.create(n)), s[e] = t;
  }
}
function Be(e, t, s = !1) {
  const n = xa();
  if (n || Nt) {
    let r = Nt ? Nt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && W(t) ? t.call(n && n.proxy) : t;
  }
}
const Vo = {}, Wo = () => Object.create(Vo), Yo = (e) => Object.getPrototypeOf(e) === Vo;
function _l(e, t, s, n = !1) {
  const r = {}, o = Wo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Go(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  s ? e.props = n ? r : gl(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function $l(e, t, s, n) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, l = Z(r), [u] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const a = e.vnode.dynamicProps;
      for (let f = 0; f < a.length; f++) {
        let h = a[f];
        if (Hs(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (u)
          if (K(o, h))
            g !== o[h] && (o[h] = g, c = !0);
          else {
            const m = je(h);
            r[m] = wn(
              u,
              l,
              m,
              g,
              e,
              !1
            );
          }
        else
          g !== o[h] && (o[h] = g, c = !0);
      }
    }
  } else {
    Go(e, t, r, o) && (c = !0);
    let a;
    for (const f in l)
      (!t || // for camelCase
      !K(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = ke(f)) === f || !K(t, a))) && (u ? s && // for camelCase
      (s[f] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[f] = wn(
        u,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete r[f]);
    if (o !== l)
      for (const f in o)
        (!t || !K(t, f)) && (delete o[f], c = !0);
  }
  c && nt(e.attrs, "set", "");
}
function Go(e, t, s, n) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (Xt(u))
        continue;
      const c = t[u];
      let a;
      r && K(r, a = je(u)) ? !o || !o.includes(a) ? s[a] = c : (l || (l = {}))[a] = c : Hs(e.emitsOptions, u) || (!(u in n) || c !== n[u]) && (n[u] = c, i = !0);
    }
  if (o) {
    const u = Z(s), c = l || ee;
    for (let a = 0; a < o.length; a++) {
      const f = o[a];
      s[f] = wn(
        r,
        u,
        f,
        c[f],
        e,
        !K(c, f)
      );
    }
  }
  return i;
}
function wn(e, t, s, n, r, o) {
  const i = e[s];
  if (i != null) {
    const l = K(i, "default");
    if (l && n === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && W(u)) {
        const { propsDefaults: c } = r;
        if (s in c)
          n = c[s];
        else {
          const a = as(r);
          n = c[s] = u.call(
            null,
            t
          ), a();
        }
      } else
        n = u;
      r.ce && r.ce._setProp(s, n);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !l ? n = !1 : i[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ke(s)) && (n = !0));
  }
  return n;
}
const ea = /* @__PURE__ */ new WeakMap();
function Ko(e, t, s = !1) {
  const n = s ? ea : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, l = [];
  let u = !1;
  if (!W(e)) {
    const a = (f) => {
      u = !0;
      const [h, g] = Ko(f, t, !0);
      le(i, h), g && l.push(...g);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!o && !u)
    return oe(e) && n.set(e, Pt), Pt;
  if (H(o))
    for (let a = 0; a < o.length; a++) {
      const f = je(o[a]);
      br(f) && (i[f] = ee);
    }
  else if (o)
    for (const a in o) {
      const f = je(a);
      if (br(f)) {
        const h = o[a], g = i[f] = H(h) || W(h) ? { type: h } : le({}, h), m = g.type;
        let b = !1, A = !0;
        if (H(m))
          for (let S = 0; S < m.length; ++S) {
            const U = m[S], T = W(U) && U.name;
            if (T === "Boolean") {
              b = !0;
              break;
            } else T === "String" && (A = !1);
          }
        else
          b = W(m) && m.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = b, g[
          1
          /* shouldCastTrue */
        ] = A, (b || K(g, "default")) && l.push(f);
      }
    }
  const c = [i, l];
  return oe(e) && n.set(e, c), c;
}
function br(e) {
  return e[0] !== "$" && !Xt(e);
}
const Gn = (e) => e === "_" || e === "_ctx" || e === "$stable", Kn = (e) => H(e) ? e.map(Je) : [Je(e)], ta = (e, t, s) => {
  if (t._n)
    return t;
  const n = Tl((...r) => Kn(t(...r)), s);
  return n._c = !1, n;
}, Xo = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (Gn(r)) continue;
    const o = e[r];
    if (W(o))
      t[r] = ta(r, o, n);
    else if (o != null) {
      const i = Kn(o);
      t[r] = () => i;
    }
  }
}, zo = (e, t) => {
  const s = Kn(t);
  e.slots.default = () => s;
}, Zo = (e, t, s) => {
  for (const n in t)
    (s || !Gn(n)) && (e[n] = t[n]);
}, sa = (e, t, s) => {
  const n = e.slots = Wo();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Zo(n, t, s), s && co(n, "_", r, !0)) : Xo(t, n);
  } else t && zo(e, t);
}, na = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let o = !0, i = ee;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? o = !1 : Zo(r, t, s) : (o = !t.$stable, Xo(t, r)), i = t;
  } else t && (zo(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !Gn(l) && i[l] == null && delete r[l];
}, xe = ba;
function ra(e) {
  return oa(e);
}
function oa(e, t) {
  const s = Ls();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: l,
    createComment: u,
    setText: c,
    setElementText: a,
    parentNode: f,
    nextSibling: h,
    setScopeId: g = qe,
    insertStaticContent: m
  } = e, b = (d, p, w, M = null, R = null, v = null, O = void 0, I = null, x = !!p.dynamicChildren) => {
    if (d === p)
      return;
    d && !Wt(d, p) && (M = ms(d), de(d, R, v, !0), d = null), p.patchFlag === -2 && (x = !1, p.dynamicChildren = null);
    const { type: E, ref: D, shapeFlag: k } = p;
    switch (E) {
      case Vs:
        A(d, p, w, M);
        break;
      case ht:
        S(d, p, w, M);
        break;
      case sn:
        d == null && U(p, w, M, O);
        break;
      case ne:
        et(
          d,
          p,
          w,
          M,
          R,
          v,
          O,
          I,
          x
        );
        break;
      default:
        k & 1 ? L(
          d,
          p,
          w,
          M,
          R,
          v,
          O,
          I,
          x
        ) : k & 6 ? We(
          d,
          p,
          w,
          M,
          R,
          v,
          O,
          I,
          x
        ) : (k & 64 || k & 128) && E.process(
          d,
          p,
          w,
          M,
          R,
          v,
          O,
          I,
          x,
          Ft
        );
    }
    D != null && R ? Qt(D, d && d.ref, v, p || d, !p) : D == null && d && d.ref != null && Qt(d.ref, null, v, d, !0);
  }, A = (d, p, w, M) => {
    if (d == null)
      n(
        p.el = l(p.children),
        w,
        M
      );
    else {
      const R = p.el = d.el;
      p.children !== d.children && c(R, p.children);
    }
  }, S = (d, p, w, M) => {
    d == null ? n(
      p.el = u(p.children || ""),
      w,
      M
    ) : p.el = d.el;
  }, U = (d, p, w, M) => {
    [d.el, d.anchor] = m(
      d.children,
      p,
      w,
      M,
      d.el,
      d.anchor
    );
  }, T = ({ el: d, anchor: p }, w, M) => {
    let R;
    for (; d && d !== p; )
      R = h(d), n(d, w, M), d = R;
    n(p, w, M);
  }, C = ({ el: d, anchor: p }) => {
    let w;
    for (; d && d !== p; )
      w = h(d), r(d), d = w;
    r(p);
  }, L = (d, p, w, M, R, v, O, I, x) => {
    if (p.type === "svg" ? O = "svg" : p.type === "math" && (O = "mathml"), d == null)
      re(
        p,
        w,
        M,
        R,
        v,
        O,
        I,
        x
      );
    else {
      const E = d.el && d.el._isVueCE ? d.el : null;
      try {
        E && E._beginPatch(), $e(
          d,
          p,
          R,
          v,
          O,
          I,
          x
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, re = (d, p, w, M, R, v, O, I) => {
    let x, E;
    const { props: D, shapeFlag: k, transition: N, dirs: B } = d;
    if (x = d.el = i(
      d.type,
      v,
      D && D.is,
      D
    ), k & 8 ? a(x, d.children) : k & 16 && Pe(
      d.children,
      x,
      null,
      M,
      R,
      tn(d, v),
      O,
      I
    ), B && mt(d, null, M, "created"), te(x, d, d.scopeId, O, M), D) {
      for (const _ in D)
        _ !== "value" && !Xt(_) && o(x, _, null, D[_], v, M);
      "value" in D && o(x, "value", null, D.value, v), (E = D.onVnodeBeforeMount) && ze(E, M, d);
    }
    B && mt(d, null, M, "beforeMount");
    const G = ia(R, N);
    G && N.beforeEnter(x), n(x, p, w), ((E = D && D.onVnodeMounted) || G || B) && xe(() => {
      E && ze(E, M, d), G && N.enter(x), B && mt(d, null, M, "mounted");
    }, R);
  }, te = (d, p, w, M, R) => {
    if (w && g(d, w), M)
      for (let v = 0; v < M.length; v++)
        g(d, M[v]);
    if (R) {
      let v = R.subTree;
      if (p === v || ei(v.type) && (v.ssContent === p || v.ssFallback === p)) {
        const O = R.vnode;
        te(
          d,
          O,
          O.scopeId,
          O.slotScopeIds,
          R.parent
        );
      }
    }
  }, Pe = (d, p, w, M, R, v, O, I, x = 0) => {
    for (let E = x; E < d.length; E++) {
      const D = d[E] = I ? ut(d[E]) : Je(d[E]);
      b(
        null,
        D,
        p,
        w,
        M,
        R,
        v,
        O,
        I
      );
    }
  }, $e = (d, p, w, M, R, v, O) => {
    const I = p.el = d.el;
    let { patchFlag: x, dynamicChildren: E, dirs: D } = p;
    x |= d.patchFlag & 16;
    const k = d.props || ee, N = p.props || ee;
    let B;
    if (w && gt(w, !1), (B = N.onVnodeBeforeUpdate) && ze(B, w, p, d), D && mt(p, d, w, "beforeUpdate"), w && gt(w, !0), (k.innerHTML && N.innerHTML == null || k.textContent && N.textContent == null) && a(I, ""), E ? Ve(
      d.dynamicChildren,
      E,
      I,
      w,
      M,
      tn(p, R),
      v
    ) : O || Y(
      d,
      p,
      I,
      null,
      w,
      M,
      tn(p, R),
      v,
      !1
    ), x > 0) {
      if (x & 16)
        at(I, k, N, w, R);
      else if (x & 2 && k.class !== N.class && o(I, "class", null, N.class, R), x & 4 && o(I, "style", k.style, N.style, R), x & 8) {
        const G = p.dynamicProps;
        for (let _ = 0; _ < G.length; _++) {
          const J = G[_], Ce = k[J], Re = N[J];
          (Re !== Ce || J === "value") && o(I, J, Ce, Re, R, w);
        }
      }
      x & 1 && d.children !== p.children && a(I, p.children);
    } else !O && E == null && at(I, k, N, w, R);
    ((B = N.onVnodeUpdated) || D) && xe(() => {
      B && ze(B, w, p, d), D && mt(p, d, w, "updated");
    }, M);
  }, Ve = (d, p, w, M, R, v, O) => {
    for (let I = 0; I < p.length; I++) {
      const x = d[I], E = p[I], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === ne || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Wt(x, E) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? f(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      b(
        x,
        E,
        D,
        null,
        M,
        R,
        v,
        O,
        !0
      );
    }
  }, at = (d, p, w, M, R) => {
    if (p !== w) {
      if (p !== ee)
        for (const v in p)
          !Xt(v) && !(v in w) && o(
            d,
            v,
            p[v],
            null,
            R,
            M
          );
      for (const v in w) {
        if (Xt(v)) continue;
        const O = w[v], I = p[v];
        O !== I && v !== "value" && o(d, v, I, O, R, M);
      }
      "value" in w && o(d, "value", p.value, w.value, R);
    }
  }, et = (d, p, w, M, R, v, O, I, x) => {
    const E = p.el = d ? d.el : l(""), D = p.anchor = d ? d.anchor : l("");
    let { patchFlag: k, dynamicChildren: N, slotScopeIds: B } = p;
    B && (I = I ? I.concat(B) : B), d == null ? (n(E, w, M), n(D, w, M), Pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      w,
      D,
      R,
      v,
      O,
      I,
      x
    )) : k > 0 && k & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren ? (Ve(
      d.dynamicChildren,
      N,
      w,
      R,
      v,
      O,
      I
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || R && p === R.subTree) && Jo(
      d,
      p,
      !0
      /* shallow */
    )) : Y(
      d,
      p,
      w,
      D,
      R,
      v,
      O,
      I,
      x
    );
  }, We = (d, p, w, M, R, v, O, I, x) => {
    p.slotScopeIds = I, d == null ? p.shapeFlag & 512 ? R.ctx.activate(
      p,
      w,
      M,
      O,
      x
    ) : De(
      p,
      w,
      M,
      R,
      v,
      O,
      x
    ) : Lt(d, p, x);
  }, De = (d, p, w, M, R, v, O) => {
    const I = d.component = Ma(
      d,
      M,
      R
    );
    if (Uo(d) && (I.ctx.renderer = Ft), Ta(I, !1, O), I.asyncDep) {
      if (R && R.registerDep(I, z, O), !d.el) {
        const x = I.subTree = ce(ht);
        S(null, x, p, w), d.placeholder = x.el;
      }
    } else
      z(
        I,
        d,
        p,
        w,
        R,
        v,
        O
      );
  }, Lt = (d, p, w) => {
    const M = p.component = d.component;
    if (ga(d, p, w))
      if (M.asyncDep && !M.asyncResolved) {
        q(M, p, w);
        return;
      } else
        M.next = p, M.update();
    else
      p.el = d.el, M.vnode = p;
  }, z = (d, p, w, M, R, v, O) => {
    const I = () => {
      if (d.isMounted) {
        let { next: k, bu: N, u: B, parent: G, vnode: _ } = d;
        {
          const Ke = Qo(d);
          if (Ke) {
            k && (k.el = _.el, q(d, k, O)), Ke.asyncDep.then(() => {
              d.isUnmounted || I();
            });
            return;
          }
        }
        let J = k, Ce;
        gt(d, !1), k ? (k.el = _.el, q(d, k, O)) : k = _, N && Js(N), (Ce = k.props && k.props.onVnodeBeforeUpdate) && ze(Ce, G, k, _), gt(d, !0);
        const Re = Ar(d), Ge = d.subTree;
        d.subTree = Re, b(
          Ge,
          Re,
          // parent may have changed if it's in a teleport
          f(Ge.el),
          // anchor may have changed if it's in a fragment
          ms(Ge),
          d,
          R,
          v
        ), k.el = Re.el, J === null && ya(d, Re.el), B && xe(B, R), (Ce = k.props && k.props.onVnodeUpdated) && xe(
          () => ze(Ce, G, k, _),
          R
        );
      } else {
        let k;
        const { el: N, props: B } = p, { bm: G, m: _, parent: J, root: Ce, type: Re } = d, Ge = qt(p);
        gt(d, !1), G && Js(G), !Ge && (k = B && B.onVnodeBeforeMount) && ze(k, J, p), gt(d, !0);
        {
          Ce.ce && // @ts-expect-error _def is private
          Ce.ce._def.shadowRoot !== !1 && Ce.ce._injectChildStyle(Re);
          const Ke = d.subTree = Ar(d);
          b(
            null,
            Ke,
            w,
            M,
            d,
            R,
            v
          ), p.el = Ke.el;
        }
        if (_ && xe(_, R), !Ge && (k = B && B.onVnodeMounted)) {
          const Ke = p;
          xe(
            () => ze(k, J, Ke),
            R
          );
        }
        (p.shapeFlag & 256 || J && qt(J.vnode) && J.vnode.shapeFlag & 256) && d.a && xe(d.a, R), d.isMounted = !0, p = w = M = null;
      }
    };
    d.scope.on();
    const x = d.effect = new po(I);
    d.scope.off();
    const E = d.update = x.run.bind(x), D = d.job = x.runIfDirty.bind(x);
    D.i = d, D.id = d.uid, x.scheduler = () => Hn(D), gt(d, !0), E();
  }, q = (d, p, w) => {
    p.component = d;
    const M = d.vnode.props;
    d.vnode = p, d.next = null, $l(d, p.props, M, w), na(d, p.children, w), ot(), dr(d), it();
  }, Y = (d, p, w, M, R, v, O, I, x = !1) => {
    const E = d && d.children, D = d ? d.shapeFlag : 0, k = p.children, { patchFlag: N, shapeFlag: B } = p;
    if (N > 0) {
      if (N & 128) {
        St(
          E,
          k,
          w,
          M,
          R,
          v,
          O,
          I,
          x
        );
        return;
      } else if (N & 256) {
        Ye(
          E,
          k,
          w,
          M,
          R,
          v,
          O,
          I,
          x
        );
        return;
      }
    }
    B & 8 ? (D & 16 && Bt(E, R, v), k !== E && a(w, k)) : D & 16 ? B & 16 ? St(
      E,
      k,
      w,
      M,
      R,
      v,
      O,
      I,
      x
    ) : Bt(E, R, v, !0) : (D & 8 && a(w, ""), B & 16 && Pe(
      k,
      w,
      M,
      R,
      v,
      O,
      I,
      x
    ));
  }, Ye = (d, p, w, M, R, v, O, I, x) => {
    d = d || Pt, p = p || Pt;
    const E = d.length, D = p.length, k = Math.min(E, D);
    let N;
    for (N = 0; N < k; N++) {
      const B = p[N] = x ? ut(p[N]) : Je(p[N]);
      b(
        d[N],
        B,
        w,
        null,
        R,
        v,
        O,
        I,
        x
      );
    }
    E > D ? Bt(
      d,
      R,
      v,
      !0,
      !1,
      k
    ) : Pe(
      p,
      w,
      M,
      R,
      v,
      O,
      I,
      x,
      k
    );
  }, St = (d, p, w, M, R, v, O, I, x) => {
    let E = 0;
    const D = p.length;
    let k = d.length - 1, N = D - 1;
    for (; E <= k && E <= N; ) {
      const B = d[E], G = p[E] = x ? ut(p[E]) : Je(p[E]);
      if (Wt(B, G))
        b(
          B,
          G,
          w,
          null,
          R,
          v,
          O,
          I,
          x
        );
      else
        break;
      E++;
    }
    for (; E <= k && E <= N; ) {
      const B = d[k], G = p[N] = x ? ut(p[N]) : Je(p[N]);
      if (Wt(B, G))
        b(
          B,
          G,
          w,
          null,
          R,
          v,
          O,
          I,
          x
        );
      else
        break;
      k--, N--;
    }
    if (E > k) {
      if (E <= N) {
        const B = N + 1, G = B < D ? p[B].el : M;
        for (; E <= N; )
          b(
            null,
            p[E] = x ? ut(p[E]) : Je(p[E]),
            w,
            G,
            R,
            v,
            O,
            I,
            x
          ), E++;
      }
    } else if (E > N)
      for (; E <= k; )
        de(d[E], R, v, !0), E++;
    else {
      const B = E, G = E, _ = /* @__PURE__ */ new Map();
      for (E = G; E <= N; E++) {
        const Me = p[E] = x ? ut(p[E]) : Je(p[E]);
        Me.key != null && _.set(Me.key, E);
      }
      let J, Ce = 0;
      const Re = N - G + 1;
      let Ge = !1, Ke = 0;
      const Ht = new Array(Re);
      for (E = 0; E < Re; E++) Ht[E] = 0;
      for (E = B; E <= k; E++) {
        const Me = d[E];
        if (Ce >= Re) {
          de(Me, R, v, !0);
          continue;
        }
        let Xe;
        if (Me.key != null)
          Xe = _.get(Me.key);
        else
          for (J = G; J <= N; J++)
            if (Ht[J - G] === 0 && Wt(Me, p[J])) {
              Xe = J;
              break;
            }
        Xe === void 0 ? de(Me, R, v, !0) : (Ht[Xe - G] = E + 1, Xe >= Ke ? Ke = Xe : Ge = !0, b(
          Me,
          p[Xe],
          w,
          null,
          R,
          v,
          O,
          I,
          x
        ), Ce++);
      }
      const or = Ge ? la(Ht) : Pt;
      for (J = or.length - 1, E = Re - 1; E >= 0; E--) {
        const Me = G + E, Xe = p[Me], ir = p[Me + 1], lr = Me + 1 < D ? (
          // #13559, fallback to el placeholder for unresolved async component
          ir.el || ir.placeholder
        ) : M;
        Ht[E] === 0 ? b(
          null,
          Xe,
          w,
          lr,
          R,
          v,
          O,
          I,
          x
        ) : Ge && (J < 0 || E !== or[J] ? he(Xe, w, lr, 2) : J--);
      }
    }
  }, he = (d, p, w, M, R = null) => {
    const { el: v, type: O, transition: I, children: x, shapeFlag: E } = d;
    if (E & 6) {
      he(d.component.subTree, p, w, M);
      return;
    }
    if (E & 128) {
      d.suspense.move(p, w, M);
      return;
    }
    if (E & 64) {
      O.move(d, p, w, Ft);
      return;
    }
    if (O === ne) {
      n(v, p, w);
      for (let k = 0; k < x.length; k++)
        he(x[k], p, w, M);
      n(d.anchor, p, w);
      return;
    }
    if (O === sn) {
      T(d, p, w);
      return;
    }
    if (M !== 2 && E & 1 && I)
      if (M === 0)
        I.beforeEnter(v), n(v, p, w), xe(() => I.enter(v), R);
      else {
        const { leave: k, delayLeave: N, afterLeave: B } = I, G = () => {
          d.ctx.isUnmounted ? r(v) : n(v, p, w);
        }, _ = () => {
          v._isLeaving && v[Ol](
            !0
            /* cancelled */
          ), k(v, () => {
            G(), B && B();
          });
        };
        N ? N(v, G, _) : _();
      }
    else
      n(v, p, w);
  }, de = (d, p, w, M = !1, R = !1) => {
    const {
      type: v,
      props: O,
      ref: I,
      children: x,
      dynamicChildren: E,
      shapeFlag: D,
      patchFlag: k,
      dirs: N,
      cacheIndex: B
    } = d;
    if (k === -2 && (R = !1), I != null && (ot(), Qt(I, null, w, d, !0), it()), B != null && (p.renderCache[B] = void 0), D & 256) {
      p.ctx.deactivate(d);
      return;
    }
    const G = D & 1 && N, _ = !qt(d);
    let J;
    if (_ && (J = O && O.onVnodeBeforeUnmount) && ze(J, p, d), D & 6)
      ps(d.component, w, M);
    else {
      if (D & 128) {
        d.suspense.unmount(w, M);
        return;
      }
      G && mt(d, null, p, "beforeUnmount"), D & 64 ? d.type.remove(
        d,
        p,
        w,
        Ft,
        M
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== ne || k > 0 && k & 64) ? Bt(
        E,
        p,
        w,
        !1,
        !0
      ) : (v === ne && k & 384 || !R && D & 16) && Bt(x, p, w), M && Mt(d);
    }
    (_ && (J = O && O.onVnodeUnmounted) || G) && xe(() => {
      J && ze(J, p, d), G && mt(d, null, p, "unmounted");
    }, w);
  }, Mt = (d) => {
    const { type: p, el: w, anchor: M, transition: R } = d;
    if (p === ne) {
      xt(w, M);
      return;
    }
    if (p === sn) {
      C(d);
      return;
    }
    const v = () => {
      r(w), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (d.shapeFlag & 1 && R && !R.persisted) {
      const { leave: O, delayLeave: I } = R, x = () => O(w, v);
      I ? I(d.el, v, x) : x();
    } else
      v();
  }, xt = (d, p) => {
    let w;
    for (; d !== p; )
      w = h(d), r(d), d = w;
    r(p);
  }, ps = (d, p, w) => {
    const { bum: M, scope: R, job: v, subTree: O, um: I, m: x, a: E } = d;
    wr(x), wr(E), M && Js(M), R.stop(), v && (v.flags |= 8, de(O, d, p, w)), I && xe(I, p), xe(() => {
      d.isUnmounted = !0;
    }, p);
  }, Bt = (d, p, w, M = !1, R = !1, v = 0) => {
    for (let O = v; O < d.length; O++)
      de(d[O], p, w, M, R);
  }, ms = (d) => {
    if (d.shapeFlag & 6)
      return ms(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const p = h(d.anchor || d.el), w = p && p[Il];
    return w ? h(w) : p;
  };
  let zs = !1;
  const rr = (d, p, w) => {
    d == null ? p._vnode && de(p._vnode, null, null, !0) : b(
      p._vnode || null,
      d,
      p,
      null,
      null,
      null,
      w
    ), p._vnode = d, zs || (zs = !0, dr(), ko(), zs = !1);
  }, Ft = {
    p: b,
    um: de,
    m: he,
    r: Mt,
    mt: De,
    mc: Pe,
    pc: Y,
    pbc: Ve,
    n: ms,
    o: e
  };
  return {
    render: rr,
    hydrate: void 0,
    createApp: ql(rr)
  };
}
function tn({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function gt({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ia(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Jo(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (H(n) && H(r))
    for (let o = 0; o < n.length; o++) {
      const i = n[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = ut(r[o]), l.el = i.el), !s && l.patchFlag !== -2 && Jo(i, l)), l.type === Vs && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = i.el), l.type === ht && !l.el && (l.el = i.el);
    }
}
function la(e) {
  const t = e.slice(), s = [0];
  let n, r, o, i, l;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const c = e[n];
    if (c !== 0) {
      if (r = s[s.length - 1], e[r] < c) {
        t[n] = r, s.push(n);
        continue;
      }
      for (o = 0, i = s.length - 1; o < i; )
        l = o + i >> 1, e[s[l]] < c ? o = l + 1 : i = l;
      c < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), s[o] = n);
    }
  }
  for (o = s.length, i = s[o - 1]; o-- > 0; )
    s[o] = i, i = t[i];
  return s;
}
function Qo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Qo(t);
}
function wr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const aa = Symbol.for("v-scx"), ca = () => Be(aa);
function $t(e, t, s) {
  return qo(e, t, s);
}
function qo(e, t, s = ee) {
  const { immediate: n, deep: r, flush: o, once: i } = s, l = le({}, s), u = t && n || !t && o !== "post";
  let c;
  if (os) {
    if (o === "sync") {
      const g = ca();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!u) {
      const g = () => {
      };
      return g.stop = qe, g.resume = qe, g.pause = qe, g;
    }
  }
  const a = Ae;
  l.call = (g, m, b) => _e(g, a, m, b);
  let f = !1;
  o === "post" ? l.scheduler = (g) => {
    xe(g, a && a.suspense);
  } : o !== "sync" && (f = !0, l.scheduler = (g, m) => {
    m ? g() : Hn(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), f && (g.flags |= 2, a && (g.id = a.uid, g.i = a));
  };
  const h = El(e, t, l);
  return os && (c ? c.push(h) : u && h()), h;
}
function ua(e, t, s) {
  const n = this.proxy, r = ae(e) ? e.includes(".") ? _o(n, e) : () => n[e] : e.bind(n, n);
  let o;
  W(t) ? o = t : (o = t.handler, s = t);
  const i = as(this), l = qo(r, o.bind(n), s);
  return i(), l;
}
function _o(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const fa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${je(t)}Modifiers`] || e[`${ke(t)}Modifiers`];
function da(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ee;
  let r = s;
  const o = t.startsWith("update:"), i = o && fa(n, t.slice(7));
  i && (i.trim && (r = s.map((a) => ae(a) ? a.trim() : a)), i.number && (r = s.map(Yi)));
  let l, u = n[l = Zs(t)] || // also try camelCase event handler (#2249)
  n[l = Zs(je(t))];
  !u && o && (u = n[l = Zs(ke(t))]), u && _e(
    u,
    e,
    6,
    r
  );
  const c = n[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, _e(
      c,
      e,
      6,
      r
    );
  }
}
const ha = /* @__PURE__ */ new WeakMap();
function $o(e, t, s = !1) {
  const n = s ? ha : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!W(e)) {
    const u = (c) => {
      const a = $o(c, t, !0);
      a && (l = !0, le(i, a));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !l ? (oe(e) && n.set(e, null), null) : (H(o) ? o.forEach((u) => i[u] = null) : le(i, o), oe(e) && n.set(e, i), i);
}
function Hs(e, t) {
  return !e || !Ns(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, ke(t)) || K(e, t));
}
function Ar(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: l,
    emit: u,
    render: c,
    renderCache: a,
    props: f,
    data: h,
    setupState: g,
    ctx: m,
    inheritAttrs: b
  } = e, A = Ts(e);
  let S, U;
  try {
    if (s.shapeFlag & 4) {
      const C = r || n, L = C;
      S = Je(
        c.call(
          L,
          C,
          a,
          f,
          g,
          h,
          m
        )
      ), U = l;
    } else {
      const C = t;
      S = Je(
        C.length > 1 ? C(
          f,
          { attrs: l, slots: i, emit: u }
        ) : C(
          f,
          null
        )
      ), U = t.props ? l : pa(l);
    }
  } catch (C) {
    es.length = 0, Bs(C, e, 1), S = ce(ht);
  }
  let T = S;
  if (U && b !== !1) {
    const C = Object.keys(U), { shapeFlag: L } = T;
    C.length && L & 7 && (o && C.some(xn) && (U = ma(
      U,
      o
    )), T = Dt(T, U, !1, !0));
  }
  return s.dirs && (T = Dt(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(s.dirs) : s.dirs), s.transition && Vn(T, s.transition), S = T, Ts(A), S;
}
const pa = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ns(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, ma = (e, t) => {
  const s = {};
  for (const n in e)
    (!xn(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function ga(e, t, s) {
  const { props: n, children: r, component: o } = e, { props: i, children: l, patchFlag: u } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? Cr(n, i, c) : !!i;
    if (u & 8) {
      const a = t.dynamicProps;
      for (let f = 0; f < a.length; f++) {
        const h = a[f];
        if (i[h] !== n[h] && !Hs(c, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === i ? !1 : n ? i ? Cr(n, i, c) : !0 : !!i;
  return !1;
}
function Cr(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (t[o] !== e[o] && !Hs(s, o))
      return !0;
  }
  return !1;
}
function ya({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const ei = (e) => e.__isSuspense;
function ba(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : xl(e);
}
const ne = Symbol.for("v-fgt"), Vs = Symbol.for("v-txt"), ht = Symbol.for("v-cmt"), sn = Symbol.for("v-stc"), es = [];
let Ie = null;
function V(e = !1) {
  es.push(Ie = e ? null : []);
}
function wa() {
  es.pop(), Ie = es[es.length - 1] || null;
}
let rs = 1;
function Rr(e, t = !1) {
  rs += e, e < 0 && Ie && t && (Ie.hasOnce = !0);
}
function ti(e) {
  return e.dynamicChildren = rs > 0 ? Ie || Pt : null, wa(), rs > 0 && Ie && Ie.push(e), e;
}
function Q(e, t, s, n, r, o) {
  return ti(
    P(
      e,
      t,
      s,
      n,
      r,
      o,
      !0
    )
  );
}
function Te(e, t, s, n, r) {
  return ti(
    ce(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function si(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Wt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ni = ({ key: e }) => e ?? null, As = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || ge(e) || W(e) ? { i: Qe, r: e, k: t, f: !!s } : e : null);
function P(e, t = null, s = null, n = 0, r = null, o = e === ne ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ni(t),
    ref: t && As(t),
    scopeId: Do,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Qe
  };
  return l ? (Xn(u, s), o & 128 && e.normalize(u)) : s && (u.shapeFlag |= ae(s) ? 8 : 16), rs > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Ie.push(u), u;
}
const ce = Aa;
function Aa(e, t = null, s = null, n = 0, r = null, o = !1) {
  if ((!e || e === Yl) && (e = ht), si(e)) {
    const l = Dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Xn(l, s), rs > 0 && !o && Ie && (l.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = l : Ie.push(l)), l.patchFlag = -2, l;
  }
  if (ka(e) && (e = e.__vccOpts), t) {
    t = Ca(t);
    let { class: l, style: u } = t;
    l && !ae(l) && (t.class = rt(l)), oe(u) && (Fn(u) && !H(u) && (u = le({}, u)), t.style = Pn(u));
  }
  const i = ae(e) ? 1 : ei(e) ? 128 : Pl(e) ? 64 : oe(e) ? 4 : W(e) ? 2 : 0;
  return P(
    e,
    t,
    s,
    n,
    r,
    i,
    o,
    !0
  );
}
function Ca(e) {
  return e ? Fn(e) || Yo(e) ? le({}, e) : e : null;
}
function Dt(e, t, s = !1, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: l, transition: u } = e, c = t ? va(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ni(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && o ? H(o) ? o.concat(As(t)) : [o, As(t)] : As(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ne ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Dt(e.ssContent),
    ssFallback: e.ssFallback && Dt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && Vn(
    a,
    u.clone(a)
  ), a;
}
function Ra(e = " ", t = 0) {
  return ce(Vs, null, e, t);
}
function ue(e = "", t = !1) {
  return t ? (V(), Te(ht, null, e)) : ce(ht, null, e);
}
function Je(e) {
  return e == null || typeof e == "boolean" ? ce(ht) : H(e) ? ce(
    ne,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : si(e) ? ut(e) : ce(Vs, null, String(e));
}
function ut(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Dt(e);
}
function Xn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (H(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Xn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Yo(t) ? t._ctx = Qe : r === 3 && Qe && (Qe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else W(t) ? (t = { default: t, _ctx: Qe }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Ra(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function va(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = rt([t.class, n.class]));
      else if (r === "style")
        t.style = Pn([t.style, n.style]);
      else if (Ns(r)) {
        const o = t[r], i = n[r];
        i && o !== i && !(H(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function ze(e, t, s, n = null) {
  _e(e, t, 7, [
    s,
    n
  ]);
}
const Ea = Ho();
let Sa = 0;
function Ma(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Ea, o = {
    uid: Sa++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Qi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ko(n, r),
    emitsOptions: $o(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ee,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ee,
    data: ee,
    props: ee,
    attrs: ee,
    slots: ee,
    refs: ee,
    setupState: ee,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = da.bind(null, o), e.ce && e.ce(o), o;
}
let Ae = null;
const xa = () => Ae || Qe;
let Os, An;
{
  const e = Ls(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  Os = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Ae = s
  ), An = t(
    "__VUE_SSR_SETTERS__",
    (s) => os = s
  );
}
const as = (e) => {
  const t = Ae;
  return Os(e), e.scope.on(), () => {
    e.scope.off(), Os(t);
  };
}, vr = () => {
  Ae && Ae.scope.off(), Os(null);
};
function ri(e) {
  return e.vnode.shapeFlag & 4;
}
let os = !1;
function Ta(e, t = !1, s = !1) {
  t && An(t);
  const { props: n, children: r } = e.vnode, o = ri(e);
  _l(e, n, o, t), sa(e, r, s || t);
  const i = o ? Ia(e, t) : void 0;
  return t && An(!1), i;
}
function Ia(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gl);
  const { setup: n } = s;
  if (n) {
    ot();
    const r = e.setupContext = n.length > 1 ? Oa(e) : null, o = as(e), i = ls(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = io(i);
    if (it(), o(), (l || e.sp) && !qt(e) && jo(e), l) {
      if (i.then(vr, vr), t)
        return i.then((u) => {
          Er(e, u);
        }).catch((u) => {
          Bs(u, e, 0);
        });
      e.asyncDep = i;
    } else
      Er(e, i);
  } else
    oi(e);
}
function Er(e, t, s) {
  W(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : oe(t) && (e.setupState = To(t)), oi(e);
}
function oi(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || qe);
  {
    const r = as(e);
    ot();
    try {
      Kl(e);
    } finally {
      it(), r();
    }
  }
}
const Pa = {
  get(e, t) {
    return pe(e, "get", ""), e[t];
  }
};
function Oa(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Pa),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function zn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(To(yl(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in _t)
        return _t[s](e);
    },
    has(t, s) {
      return s in t || s in _t;
    }
  })) : e.proxy;
}
function ka(e) {
  return W(e) && "__vccOpts" in e;
}
const Cs = (e, t) => Rl(e, t, os), Na = "3.5.24";
/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Cn;
const Sr = typeof window < "u" && window.trustedTypes;
if (Sr)
  try {
    Cn = /* @__PURE__ */ Sr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ii = Cn ? (e) => Cn.createHTML(e) : (e) => e, Da = "http://www.w3.org/2000/svg", ja = "http://www.w3.org/1998/Math/MathML", st = typeof document < "u" ? document : null, Mr = st && /* @__PURE__ */ st.createElement("template"), Ua = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? st.createElementNS(Da, e) : t === "mathml" ? st.createElementNS(ja, e) : s ? st.createElement(e, { is: s }) : st.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => st.createTextNode(e),
  createComment: (e) => st.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => st.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, o) {
    const i = s ? s.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      Mr.innerHTML = ii(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Mr.content;
      if (n === "svg" || n === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, La = Symbol("_vtc");
function Ba(e, t, s) {
  const n = e[La];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const xr = Symbol("_vod"), Fa = Symbol("_vsh"), Ha = Symbol(""), Va = /(?:^|;)\s*display\s*:/;
function Wa(e, t, s) {
  const n = e.style, r = ae(s);
  let o = !1;
  if (s && !r) {
    if (t)
      if (ae(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          s[l] == null && Rs(n, l, "");
        }
      else
        for (const i in t)
          s[i] == null && Rs(n, i, "");
    for (const i in s)
      i === "display" && (o = !0), Rs(n, i, s[i]);
  } else if (r) {
    if (t !== s) {
      const i = n[Ha];
      i && (s += ";" + i), n.cssText = s, o = Va.test(s);
    }
  } else t && e.removeAttribute("style");
  xr in e && (e[xr] = o ? n.display : "", e[Fa] && (n.display = "none"));
}
const Tr = /\s*!important$/;
function Rs(e, t, s) {
  if (H(s))
    s.forEach((n) => Rs(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Ya(e, t);
    Tr.test(s) ? e.setProperty(
      ke(n),
      s.replace(Tr, ""),
      "important"
    ) : e[n] = s;
  }
}
const Ir = ["Webkit", "Moz", "ms"], nn = {};
function Ya(e, t) {
  const s = nn[t];
  if (s)
    return s;
  let n = je(t);
  if (n !== "filter" && n in e)
    return nn[t] = n;
  n = ao(n);
  for (let r = 0; r < Ir.length; r++) {
    const o = Ir[r] + n;
    if (o in e)
      return nn[t] = o;
  }
  return t;
}
const Pr = "http://www.w3.org/1999/xlink";
function Or(e, t, s, n, r, o = Ji(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Pr, t.slice(6, t.length)) : e.setAttributeNS(Pr, t, s) : s == null || o && !uo(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : pt(s) ? String(s) : s
  );
}
function kr(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? ii(s) : s);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, u = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== u || !("_value" in e)) && (e.value = u), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let i = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = uo(s) : s == null && l === "string" ? (s = "", i = !0) : l === "number" && (s = 0, i = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  i && e.removeAttribute(r || t);
}
function Ga(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Ka(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Nr = Symbol("_vei");
function Xa(e, t, s, n, r = null) {
  const o = e[Nr] || (e[Nr] = {}), i = o[t];
  if (n && i)
    i.value = n;
  else {
    const [l, u] = za(t);
    if (n) {
      const c = o[t] = Qa(
        n,
        r
      );
      Ga(e, l, c, u);
    } else i && (Ka(e, l, i, u), o[t] = void 0);
  }
}
const Dr = /(?:Once|Passive|Capture)$/;
function za(e) {
  let t;
  if (Dr.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Dr); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ke(e.slice(2)), t];
}
let rn = 0;
const Za = /* @__PURE__ */ Promise.resolve(), Ja = () => rn || (Za.then(() => rn = 0), rn = Date.now());
function Qa(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    _e(
      qa(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = Ja(), s;
}
function qa(e, t) {
  if (H(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const jr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _a = (e, t, s, n, r, o) => {
  const i = r === "svg";
  t === "class" ? Ba(e, n, i) : t === "style" ? Wa(e, s, n) : Ns(t) ? xn(t) || Xa(e, t, s, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : $a(e, t, n, i)) ? (kr(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Or(e, t, n, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ae(n)) ? kr(e, je(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Or(e, t, n, i));
};
function $a(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && jr(t) && W(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return jr(t) && ae(s) ? !1 : t in e;
}
const Ur = {};
// @__NO_SIDE_EFFECTS__
function ec(e, t, s) {
  let n = /* @__PURE__ */ fe(e, t);
  js(n) && (n = le({}, n, t));
  class r extends Zn {
    constructor(i) {
      super(n, i, s);
    }
  }
  return r.def = n, r;
}
const tc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Zn extends tc {
  constructor(t, s = {}, n = Br) {
    super(), this._def = t, this._props = s, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && n !== Br ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      le({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Zn) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, Po(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const s of t)
      this._setAttr(s.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (n, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: o, styles: i } = n;
      let l;
      if (o && !H(o))
        for (const u in o) {
          const c = o[u];
          (c === Number || c && c.type === Number) && (u in this._props && (this._props[u] = ar(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[je(u)] = !0);
        }
      this._numberProps = l, this._resolveProps(n), this.shadowRoot && this._applyStyles(i), this._mount(n);
    }, s = this._def.__asyncLoader;
    s ? this._pendingResolve = s().then((n) => {
      n.configureApp = this._def.configureApp, t(this._def = n, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const s = this._instance && this._instance.exposed;
    if (s)
      for (const n in s)
        K(this, n) || Object.defineProperty(this, n, {
          // unwrap ref to be consistent with public instance behavior
          get: () => F(s[n])
        });
  }
  _resolveProps(t) {
    const { props: s } = t, n = H(s) ? s : Object.keys(s || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && n.includes(r) && this._setProp(r, this[r]);
    for (const r of n.map(je))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(o) {
          this._setProp(r, o, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const s = this.hasAttribute(t);
    let n = s ? this.getAttribute(t) : Ur;
    const r = je(t);
    s && this._numberProps && this._numberProps[r] && (n = ar(n)), this._setProp(r, n, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, s, n = !0, r = !1) {
    if (s !== this._props[t] && (this._dirty = !0, s === Ur ? delete this._props[t] : (this._props[t] = s, t === "key" && this._app && (this._app._ceVNode.key = s)), r && this._instance && this._update(), n)) {
      const o = this._ob;
      o && (this._processMutations(o.takeRecords()), o.disconnect()), s === !0 ? this.setAttribute(ke(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(ke(t), s + "") : s || this.removeAttribute(ke(t)), o && o.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), nc(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const s = ce(this._def, le(t, this._props));
    return this._instance || (s.ce = (n) => {
      this._instance = n, n.ce = this, n.isCE = !0;
      const r = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(
            o,
            js(i[0]) ? le({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      n.emit = (o, ...i) => {
        r(o, i), ke(o) !== o && r(ke(o), i);
      }, this._setParent();
    }), s;
  }
  _applyStyles(t, s) {
    if (!t) return;
    if (s) {
      if (s === this._def || this._styleChildren.has(s))
        return;
      this._styleChildren.add(s);
    }
    const n = this._nonce;
    for (let r = t.length - 1; r >= 0; r--) {
      const o = document.createElement("style");
      n && o.setAttribute("nonce", n), o.textContent = t[r], this.shadowRoot.prepend(o);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let s;
    for (; s = this.firstChild; ) {
      const n = s.nodeType === 1 && s.getAttribute("slot") || "default";
      (t[n] || (t[n] = [])).push(s), this.removeChild(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), s = this._instance.type.__scopeId;
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = r.getAttribute("name") || "default", i = this._slots[o], l = r.parentNode;
      if (i)
        for (const u of i) {
          if (s && u.nodeType === 1) {
            const c = s + "-s", a = document.createTreeWalker(u, 1);
            u.setAttribute(c, "");
            let f;
            for (; f = a.nextNode(); )
              f.setAttribute(c, "");
          }
          l.insertBefore(u, r);
        }
      else
        for (; r.firstChild; ) l.insertBefore(r.firstChild, r);
      l.removeChild(r);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const s = /* @__PURE__ */ new Set();
    for (const n of t) {
      const r = n.querySelectorAll("slot");
      for (let o = 0; o < r.length; o++)
        s.add(r[o]);
    }
    return Array.from(s);
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const sc = /* @__PURE__ */ le({ patchProp: _a }, Ua);
let Lr;
function li() {
  return Lr || (Lr = ra(sc));
}
const nc = ((...e) => {
  li().render(...e);
}), Br = ((...e) => {
  const t = li().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = oc(n);
    if (!r) return;
    const o = t._component;
    !W(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = s(r, !1, rc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
});
function rc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function oc(e) {
  return ae(e) ? document.querySelector(e) : e;
}
function ai(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ic } = Object.prototype, { getPrototypeOf: Jn } = Object, { iterator: Ws, toStringTag: ci } = Symbol, Ys = /* @__PURE__ */ ((e) => (t) => {
  const s = ic.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Fe = (e) => (e = e.toLowerCase(), (t) => Ys(t) === e), Gs = (e) => (t) => typeof t === e, { isArray: Ut } = Array, jt = Gs("undefined");
function cs(e) {
  return e !== null && !jt(e) && e.constructor !== null && !jt(e.constructor) && Ee(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ui = Fe("ArrayBuffer");
function lc(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ui(e.buffer), t;
}
const ac = Gs("string"), Ee = Gs("function"), fi = Gs("number"), us = (e) => e !== null && typeof e == "object", cc = (e) => e === !0 || e === !1, vs = (e) => {
  if (Ys(e) !== "object")
    return !1;
  const t = Jn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ci in e) && !(Ws in e);
}, uc = (e) => {
  if (!us(e) || cs(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, fc = Fe("Date"), dc = Fe("File"), hc = (e) => !!(e && typeof e.uri < "u"), pc = (e) => e && typeof e.getParts < "u", mc = Fe("Blob"), gc = Fe("FileList"), yc = (e) => us(e) && Ee(e.pipe);
function bc() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Fr = bc(), Hr = typeof Fr.FormData < "u" ? Fr.FormData : void 0, wc = (e) => {
  let t;
  return e && (Hr && e instanceof Hr || Ee(e.append) && ((t = Ys(e)) === "formdata" || // detect form-data instance
  t === "object" && Ee(e.toString) && e.toString() === "[object FormData]"));
}, Ac = Fe("URLSearchParams"), [Cc, Rc, vc, Ec] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Fe), Sc = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fs(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), Ut(e))
    for (n = 0, r = e.length; n < r; n++)
      t.call(null, e[n], n, e);
  else {
    if (cs(e))
      return;
    const o = s ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (n = 0; n < i; n++)
      l = o[n], t.call(null, e[l], l, e);
  }
}
function di(e, t) {
  if (cs(e))
    return null;
  t = t.toLowerCase();
  const s = Object.keys(e);
  let n = s.length, r;
  for (; n-- > 0; )
    if (r = s[n], t === r.toLowerCase())
      return r;
  return null;
}
const bt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, hi = (e) => !jt(e) && e !== bt;
function Rn() {
  const { caseless: e, skipUndefined: t } = hi(this) && this || {}, s = {}, n = (r, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const i = e && di(s, o) || o;
    vs(s[i]) && vs(r) ? s[i] = Rn(s[i], r) : vs(r) ? s[i] = Rn({}, r) : Ut(r) ? s[i] = r.slice() : (!t || !jt(r)) && (s[i] = r);
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && fs(arguments[r], n);
  return s;
}
const Mc = (e, t, s, { allOwnKeys: n } = {}) => (fs(
  t,
  (r, o) => {
    s && Ee(r) ? Object.defineProperty(e, o, {
      value: ai(r, s),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, o, {
      value: r,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: n }
), e), xc = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Tc = (e, t, s, n) => {
  e.prototype = Object.create(t.prototype, n), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, Ic = (e, t, s, n) => {
  let r, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      i = r[o], (!n || n(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = s !== !1 && Jn(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, Pc = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const n = e.indexOf(t, s);
  return n !== -1 && n === s;
}, Oc = (e) => {
  if (!e) return null;
  if (Ut(e)) return e;
  let t = e.length;
  if (!fi(t)) return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, kc = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Jn(Uint8Array)), Nc = (e, t) => {
  const n = (e && e[Ws]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, Dc = (e, t) => {
  let s;
  const n = [];
  for (; (s = e.exec(t)) !== null; )
    n.push(s);
  return n;
}, jc = Fe("HTMLFormElement"), Uc = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, n, r) {
  return n.toUpperCase() + r;
}), Vr = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), Lc = Fe("RegExp"), pi = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), n = {};
  fs(s, (r, o) => {
    let i;
    (i = t(r, o, e)) !== !1 && (n[o] = i || r);
  }), Object.defineProperties(e, n);
}, Bc = (e) => {
  pi(e, (t, s) => {
    if (Ee(e) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const n = e[s];
    if (Ee(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, Fc = (e, t) => {
  const s = {}, n = (r) => {
    r.forEach((o) => {
      s[o] = !0;
    });
  };
  return Ut(e) ? n(e) : n(String(e).split(t)), s;
}, Hc = () => {
}, Vc = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Wc(e) {
  return !!(e && Ee(e.append) && e[ci] === "FormData" && e[Ws]);
}
const Yc = (e) => {
  const t = new Array(10), s = (n, r) => {
    if (us(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (cs(n))
        return n;
      if (!("toJSON" in n)) {
        t[r] = n;
        const o = Ut(n) ? [] : {};
        return fs(n, (i, l) => {
          const u = s(i, r + 1);
          !jt(u) && (o[l] = u);
        }), t[r] = void 0, o;
      }
    }
    return n;
  };
  return s(e, 0);
}, Gc = Fe("AsyncFunction"), Kc = (e) => e && (us(e) || Ee(e)) && Ee(e.then) && Ee(e.catch), mi = ((e, t) => e ? setImmediate : t ? ((s, n) => (bt.addEventListener(
  "message",
  ({ source: r, data: o }) => {
    r === bt && o === s && n.length && n.shift()();
  },
  !1
), (r) => {
  n.push(r), bt.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(typeof setImmediate == "function", Ee(bt.postMessage)), Xc = typeof queueMicrotask < "u" ? queueMicrotask.bind(bt) : typeof process < "u" && process.nextTick || mi, zc = (e) => e != null && Ee(e[Ws]), y = {
  isArray: Ut,
  isArrayBuffer: ui,
  isBuffer: cs,
  isFormData: wc,
  isArrayBufferView: lc,
  isString: ac,
  isNumber: fi,
  isBoolean: cc,
  isObject: us,
  isPlainObject: vs,
  isEmptyObject: uc,
  isReadableStream: Cc,
  isRequest: Rc,
  isResponse: vc,
  isHeaders: Ec,
  isUndefined: jt,
  isDate: fc,
  isFile: dc,
  isReactNativeBlob: hc,
  isReactNative: pc,
  isBlob: mc,
  isRegExp: Lc,
  isFunction: Ee,
  isStream: yc,
  isURLSearchParams: Ac,
  isTypedArray: kc,
  isFileList: gc,
  forEach: fs,
  merge: Rn,
  extend: Mc,
  trim: Sc,
  stripBOM: xc,
  inherits: Tc,
  toFlatObject: Ic,
  kindOf: Ys,
  kindOfTest: Fe,
  endsWith: Pc,
  toArray: Oc,
  forEachEntry: Nc,
  matchAll: Dc,
  isHTMLForm: jc,
  hasOwnProperty: Vr,
  hasOwnProp: Vr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: pi,
  freezeMethods: Bc,
  toObjectSet: Fc,
  toCamelCase: Uc,
  noop: Hc,
  toFiniteNumber: Vc,
  findKey: di,
  global: bt,
  isContextDefined: hi,
  isSpecCompliantForm: Wc,
  toJSONObject: Yc,
  isAsyncFn: Gc,
  isThenable: Kc,
  setImmediate: mi,
  asap: Xc,
  isIterable: zc
};
let j = class gi extends Error {
  static from(t, s, n, r, o, i) {
    const l = new gi(t.message, s || t.code, n, r, o);
    return l.cause = t, l.name = t.name, t.status != null && l.status == null && (l.status = t.status), i && Object.assign(l, i), l;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, s, n, r, o) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, s && (this.code = s), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
j.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
j.ERR_BAD_OPTION = "ERR_BAD_OPTION";
j.ECONNABORTED = "ECONNABORTED";
j.ETIMEDOUT = "ETIMEDOUT";
j.ERR_NETWORK = "ERR_NETWORK";
j.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
j.ERR_DEPRECATED = "ERR_DEPRECATED";
j.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
j.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
j.ERR_CANCELED = "ERR_CANCELED";
j.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
j.ERR_INVALID_URL = "ERR_INVALID_URL";
const Zc = null;
function vn(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function yi(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function on(e, t, s) {
  return e ? e.concat(t).map(function(r, o) {
    return r = yi(r), !s && o ? "[" + r + "]" : r;
  }).join(s ? "." : "") : t;
}
function Jc(e) {
  return y.isArray(e) && !e.some(vn);
}
const Qc = y.toFlatObject(y, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ks(e, t, s) {
  if (!y.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), s = y.toFlatObject(
    s,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(b, A) {
      return !y.isUndefined(A[b]);
    }
  );
  const n = s.metaTokens, r = s.visitor || a, o = s.dots, i = s.indexes, u = (s.Blob || typeof Blob < "u" && Blob) && y.isSpecCompliantForm(t);
  if (!y.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null) return "";
    if (y.isDate(m))
      return m.toISOString();
    if (y.isBoolean(m))
      return m.toString();
    if (!u && y.isBlob(m))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(m) || y.isTypedArray(m) ? u && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function a(m, b, A) {
    let S = m;
    if (y.isReactNative(t) && y.isReactNativeBlob(m))
      return t.append(on(A, b, o), c(m)), !1;
    if (m && !A && typeof m == "object") {
      if (y.endsWith(b, "{}"))
        b = n ? b : b.slice(0, -2), m = JSON.stringify(m);
      else if (y.isArray(m) && Jc(m) || (y.isFileList(m) || y.endsWith(b, "[]")) && (S = y.toArray(m)))
        return b = yi(b), S.forEach(function(T, C) {
          !(y.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? on([b], C, o) : i === null ? b : b + "[]",
            c(T)
          );
        }), !1;
    }
    return vn(m) ? !0 : (t.append(on(A, b, o), c(m)), !1);
  }
  const f = [], h = Object.assign(Qc, {
    defaultVisitor: a,
    convertValue: c,
    isVisitable: vn
  });
  function g(m, b) {
    if (!y.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      f.push(m), y.forEach(m, function(S, U) {
        (!(y.isUndefined(S) || S === null) && r.call(t, S, y.isString(U) ? U.trim() : U, b, h)) === !0 && g(S, b ? b.concat(U) : [U]);
      }), f.pop();
    }
  }
  if (!y.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function Wr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Qn(e, t) {
  this._pairs = [], e && Ks(e, this, t);
}
const bi = Qn.prototype;
bi.append = function(t, s) {
  this._pairs.push([t, s]);
};
bi.toString = function(t) {
  const s = t ? function(n) {
    return t.call(this, n, Wr);
  } : Wr;
  return this._pairs.map(function(r) {
    return s(r[0]) + "=" + s(r[1]);
  }, "").join("&");
};
function qc(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function wi(e, t, s) {
  if (!t)
    return e;
  const n = s && s.encode || qc, r = y.isFunction(s) ? {
    serialize: s
  } : s, o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = y.isURLSearchParams(t) ? t.toString() : new Qn(t, r).toString(n), i) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Yr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, s, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: s,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    y.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const qn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, _c = typeof URLSearchParams < "u" ? URLSearchParams : Qn, $c = typeof FormData < "u" ? FormData : null, eu = typeof Blob < "u" ? Blob : null, tu = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _c,
    FormData: $c,
    Blob: eu
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, _n = typeof window < "u" && typeof document < "u", En = typeof navigator == "object" && navigator || void 0, su = _n && (!En || ["ReactNative", "NativeScript", "NS"].indexOf(En.product) < 0), nu = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ru = _n && window.location.href || "http://localhost", ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: _n,
  hasStandardBrowserEnv: su,
  hasStandardBrowserWebWorkerEnv: nu,
  navigator: En,
  origin: ru
}, Symbol.toStringTag, { value: "Module" })), me = {
  ...ou,
  ...tu
};
function iu(e, t) {
  return Ks(e, new me.classes.URLSearchParams(), {
    visitor: function(s, n, r, o) {
      return me.isNode && y.isBuffer(s) ? (this.append(n, s.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function lu(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function au(e) {
  const t = {}, s = Object.keys(e);
  let n;
  const r = s.length;
  let o;
  for (n = 0; n < r; n++)
    o = s[n], t[o] = e[o];
  return t;
}
function Ai(e) {
  function t(s, n, r, o) {
    let i = s[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), u = o >= s.length;
    return i = !i && y.isArray(r) ? r.length : i, u ? (y.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !l) : ((!r[i] || !y.isObject(r[i])) && (r[i] = []), t(s, n, r[i], o) && y.isArray(r[i]) && (r[i] = au(r[i])), !l);
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const s = {};
    return y.forEachEntry(e, (n, r) => {
      t(lu(n), r, s, 0);
    }), s;
  }
  return null;
}
function cu(e, t, s) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (s || JSON.stringify)(e);
}
const ds = {
  transitional: qn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, s) {
      const n = s.getContentType() || "", r = n.indexOf("application/json") > -1, o = y.isObject(t);
      if (o && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t))
        return r ? JSON.stringify(Ai(t)) : t;
      if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t) || y.isReadableStream(t))
        return t;
      if (y.isArrayBufferView(t))
        return t.buffer;
      if (y.isURLSearchParams(t))
        return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (o) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return iu(t, this.formSerializer).toString();
        if ((l = y.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Ks(
            l ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || r ? (s.setContentType("application/json", !1), cu(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const s = this.transitional || ds.transitional, n = s && s.forcedJSONParsing, r = this.responseType === "json";
      if (y.isResponse(t) || y.isReadableStream(t))
        return t;
      if (t && y.isString(t) && (n && !this.responseType || r)) {
        const i = !(s && s.silentJSONParsing) && r;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError" ? j.from(l, j.ERR_BAD_RESPONSE, this, null, this.response) : l;
        }
      }
      return t;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: me.classes.FormData,
    Blob: me.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ds.headers[e] = {};
});
const uu = y.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), fu = (e) => {
  const t = {};
  let s, n, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), s = i.substring(0, r).trim().toLowerCase(), n = i.substring(r + 1).trim(), !(!s || t[s] && uu[s]) && (s === "set-cookie" ? t[s] ? t[s].push(n) : t[s] = [n] : t[s] = t[s] ? t[s] + ", " + n : n);
  }), t;
}, Gr = Symbol("internals"), du = (e) => !/[\r\n]/.test(e);
function Ci(e, t) {
  if (!(e === !1 || e == null)) {
    if (y.isArray(e)) {
      e.forEach((s) => Ci(s, t));
      return;
    }
    if (!du(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function Yt(e) {
  return e && String(e).trim().toLowerCase();
}
function hu(e) {
  let t = e.length;
  for (; t > 0; ) {
    const s = e.charCodeAt(t - 1);
    if (s !== 10 && s !== 13)
      break;
    t -= 1;
  }
  return t === e.length ? e : e.slice(0, t);
}
function Es(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(Es) : hu(String(e));
}
function pu(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = s.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const mu = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ln(e, t, s, n, r) {
  if (y.isFunction(n))
    return n.call(this, t, s);
  if (r && (t = s), !!y.isString(t)) {
    if (y.isString(n))
      return t.indexOf(n) !== -1;
    if (y.isRegExp(n))
      return n.test(t);
  }
}
function gu(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, n) => s.toUpperCase() + n);
}
function yu(e, t) {
  const s = y.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + s, {
      value: function(r, o, i) {
        return this[n].call(this, t, r, o, i);
      },
      configurable: !0
    });
  });
}
let Se = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, s, n) {
    const r = this;
    function o(l, u, c) {
      const a = Yt(u);
      if (!a)
        throw new Error("header name must be a non-empty string");
      const f = y.findKey(r, a);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (Ci(l, u), r[f || u] = Es(l));
    }
    const i = (l, u) => y.forEach(l, (c, a) => o(c, a, u));
    if (y.isPlainObject(t) || t instanceof this.constructor)
      i(t, s);
    else if (y.isString(t) && (t = t.trim()) && !mu(t))
      i(fu(t), s);
    else if (y.isObject(t) && y.isIterable(t)) {
      let l = {}, u, c;
      for (const a of t) {
        if (!y.isArray(a))
          throw TypeError("Object iterator must return a key-value pair");
        l[c = a[0]] = (u = l[c]) ? y.isArray(u) ? [...u, a[1]] : [u, a[1]] : a[1];
      }
      i(l, s);
    } else
      t != null && o(s, t, n);
    return this;
  }
  get(t, s) {
    if (t = Yt(t), t) {
      const n = y.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!s)
          return r;
        if (s === !0)
          return pu(r);
        if (y.isFunction(s))
          return s.call(this, r, n);
        if (y.isRegExp(s))
          return s.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, s) {
    if (t = Yt(t), t) {
      const n = y.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!s || ln(this, this[n], n, s)));
    }
    return !1;
  }
  delete(t, s) {
    const n = this;
    let r = !1;
    function o(i) {
      if (i = Yt(i), i) {
        const l = y.findKey(n, i);
        l && (!s || ln(n, n[l], l, s)) && (delete n[l], r = !0);
      }
    }
    return y.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const s = Object.keys(this);
    let n = s.length, r = !1;
    for (; n--; ) {
      const o = s[n];
      (!t || ln(this, this[o], o, t, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(t) {
    const s = this, n = {};
    return y.forEach(this, (r, o) => {
      const i = y.findKey(n, o);
      if (i) {
        s[i] = Es(r), delete s[o];
        return;
      }
      const l = t ? gu(o) : String(o).trim();
      l !== o && delete s[o], s[l] = Es(r), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const s = /* @__PURE__ */ Object.create(null);
    return y.forEach(this, (n, r) => {
      n != null && n !== !1 && (s[r] = t && y.isArray(n) ? n.join(", ") : n);
    }), s;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, s]) => t + ": " + s).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...s) {
    const n = new this(t);
    return s.forEach((r) => n.set(r)), n;
  }
  static accessor(t) {
    const n = (this[Gr] = this[Gr] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(i) {
      const l = Yt(i);
      n[l] || (yu(r, i), n[l] = !0);
    }
    return y.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Se.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
y.reduceDescriptors(Se.prototype, ({ value: e }, t) => {
  let s = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[s] = n;
    }
  };
});
y.freezeMethods(Se);
function an(e, t) {
  const s = this || ds, n = t || s, r = Se.from(n.headers);
  let o = n.data;
  return y.forEach(e, function(l) {
    o = l.call(s, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function Ri(e) {
  return !!(e && e.__CANCEL__);
}
let hs = class extends j {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, s, n) {
    super(t ?? "canceled", j.ERR_CANCELED, s, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function vi(e, t, s) {
  const n = s.config.validateStatus;
  !s.status || !n || n(s.status) ? e(s) : t(
    new j(
      "Request failed with status code " + s.status,
      [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    )
  );
}
function bu(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function wu(e, t) {
  e = e || 10;
  const s = new Array(e), n = new Array(e);
  let r = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), a = n[o];
    i || (i = c), s[r] = u, n[r] = c;
    let f = o, h = 0;
    for (; f !== r; )
      h += s[f++], f = f % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), c - i < t)
      return;
    const g = a && c - a;
    return g ? Math.round(h * 1e3 / g) : void 0;
  };
}
function Au(e, t) {
  let s = 0, n = 1e3 / t, r, o;
  const i = (c, a = Date.now()) => {
    s = a, r = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const a = Date.now(), f = a - s;
    f >= n ? i(c, a) : (r = c, o || (o = setTimeout(() => {
      o = null, i(r);
    }, n - f)));
  }, () => r && i(r)];
}
const ks = (e, t, s = 3) => {
  let n = 0;
  const r = wu(50, 250);
  return Au((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, u = i - n, c = r(u), a = i <= l;
    n = i;
    const f = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && l && a ? (l - i) / c : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, s);
}, Kr = (e, t) => {
  const s = e != null;
  return [
    (n) => t[0]({
      lengthComputable: s,
      total: e,
      loaded: n
    }),
    t[1]
  ];
}, Xr = (e) => (...t) => y.asap(() => e(...t)), Cu = me.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (s) => (s = new URL(s, me.origin), e.protocol === s.protocol && e.host === s.host && (t || e.port === s.port)))(
  new URL(me.origin),
  me.navigator && /(msie|trident)/i.test(me.navigator.userAgent)
) : () => !0, Ru = me.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, s, n, r, o, i) {
      if (typeof document > "u") return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      y.isNumber(s) && l.push(`expires=${new Date(s).toUTCString()}`), y.isString(n) && l.push(`path=${n}`), y.isString(r) && l.push(`domain=${r}`), o === !0 && l.push("secure"), y.isString(i) && l.push(`SameSite=${i}`), document.cookie = l.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function vu(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Eu(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ei(e, t, s) {
  let n = !vu(t);
  return e && (n || s == !1) ? Eu(e, t) : t;
}
const zr = (e) => e instanceof Se ? { ...e } : e;
function vt(e, t) {
  t = t || {};
  const s = {};
  function n(c, a, f, h) {
    return y.isPlainObject(c) && y.isPlainObject(a) ? y.merge.call({ caseless: h }, c, a) : y.isPlainObject(a) ? y.merge({}, a) : y.isArray(a) ? a.slice() : a;
  }
  function r(c, a, f, h) {
    if (y.isUndefined(a)) {
      if (!y.isUndefined(c))
        return n(void 0, c, f, h);
    } else return n(c, a, f, h);
  }
  function o(c, a) {
    if (!y.isUndefined(a))
      return n(void 0, a);
  }
  function i(c, a) {
    if (y.isUndefined(a)) {
      if (!y.isUndefined(c))
        return n(void 0, c);
    } else return n(void 0, a);
  }
  function l(c, a, f) {
    if (f in t)
      return n(c, a);
    if (f in e)
      return n(void 0, c);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, a, f) => r(zr(c), zr(a), f, !0)
  };
  return y.forEach(Object.keys({ ...e, ...t }), function(a) {
    if (a === "__proto__" || a === "constructor" || a === "prototype") return;
    const f = y.hasOwnProp(u, a) ? u[a] : r, h = f(e[a], t[a], a);
    y.isUndefined(h) && f !== l || (s[a] = h);
  }), s;
}
const Si = (e) => {
  const t = vt({}, e);
  let { data: s, withXSRFToken: n, xsrfHeaderName: r, xsrfCookieName: o, headers: i, auth: l } = t;
  if (t.headers = i = Se.from(i), t.url = wi(
    Ei(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), l && i.set(
    "Authorization",
    "Basic " + btoa(
      (l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")
    )
  ), y.isFormData(s)) {
    if (me.hasStandardBrowserEnv || me.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (y.isFunction(s.getHeaders)) {
      const u = s.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(u).forEach(([a, f]) => {
        c.includes(a.toLowerCase()) && i.set(a, f);
      });
    }
  }
  if (me.hasStandardBrowserEnv && (n && y.isFunction(n) && (n = n(t)), n || n !== !1 && Cu(t.url))) {
    const u = r && o && Ru.read(o);
    u && i.set(r, u);
  }
  return t;
}, Su = typeof XMLHttpRequest < "u", Mu = Su && function(e) {
  return new Promise(function(s, n) {
    const r = Si(e);
    let o = r.data;
    const i = Se.from(r.headers).normalize();
    let { responseType: l, onUploadProgress: u, onDownloadProgress: c } = r, a, f, h, g, m;
    function b() {
      g && g(), m && m(), r.cancelToken && r.cancelToken.unsubscribe(a), r.signal && r.signal.removeEventListener("abort", a);
    }
    let A = new XMLHttpRequest();
    A.open(r.method.toUpperCase(), r.url, !0), A.timeout = r.timeout;
    function S() {
      if (!A)
        return;
      const T = Se.from(
        "getAllResponseHeaders" in A && A.getAllResponseHeaders()
      ), L = {
        data: !l || l === "text" || l === "json" ? A.responseText : A.response,
        status: A.status,
        statusText: A.statusText,
        headers: T,
        config: e,
        request: A
      };
      vi(
        function(te) {
          s(te), b();
        },
        function(te) {
          n(te), b();
        },
        L
      ), A = null;
    }
    "onloadend" in A ? A.onloadend = S : A.onreadystatechange = function() {
      !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, A.onabort = function() {
      A && (n(new j("Request aborted", j.ECONNABORTED, e, A)), A = null);
    }, A.onerror = function(C) {
      const L = C && C.message ? C.message : "Network Error", re = new j(L, j.ERR_NETWORK, e, A);
      re.event = C || null, n(re), A = null;
    }, A.ontimeout = function() {
      let C = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const L = r.transitional || qn;
      r.timeoutErrorMessage && (C = r.timeoutErrorMessage), n(
        new j(
          C,
          L.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
          e,
          A
        )
      ), A = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in A && y.forEach(i.toJSON(), function(C, L) {
      A.setRequestHeader(L, C);
    }), y.isUndefined(r.withCredentials) || (A.withCredentials = !!r.withCredentials), l && l !== "json" && (A.responseType = r.responseType), c && ([h, m] = ks(c, !0), A.addEventListener("progress", h)), u && A.upload && ([f, g] = ks(u), A.upload.addEventListener("progress", f), A.upload.addEventListener("loadend", g)), (r.cancelToken || r.signal) && (a = (T) => {
      A && (n(!T || T.type ? new hs(null, e, A) : T), A.abort(), A = null);
    }, r.cancelToken && r.cancelToken.subscribe(a), r.signal && (r.signal.aborted ? a() : r.signal.addEventListener("abort", a)));
    const U = bu(r.url);
    if (U && me.protocols.indexOf(U) === -1) {
      n(
        new j(
          "Unsupported protocol " + U + ":",
          j.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    A.send(o || null);
  });
}, xu = (e, t) => {
  const { length: s } = e = e ? e.filter(Boolean) : [];
  if (t || s) {
    let n = new AbortController(), r;
    const o = function(c) {
      if (!r) {
        r = !0, l();
        const a = c instanceof Error ? c : this.reason;
        n.abort(
          a instanceof j ? a : new hs(a instanceof Error ? a.message : a)
        );
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new j(`timeout of ${t}ms exceeded`, j.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: u } = n;
    return u.unsubscribe = () => y.asap(l), u;
  }
}, Tu = function* (e, t) {
  let s = e.byteLength;
  if (s < t) {
    yield e;
    return;
  }
  let n = 0, r;
  for (; n < s; )
    r = n + t, yield e.slice(n, r), n = r;
}, Iu = async function* (e, t) {
  for await (const s of Pu(e))
    yield* Tu(s, t);
}, Pu = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: s, value: n } = await t.read();
      if (s)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Zr = (e, t, s, n) => {
  const r = Iu(e, t);
  let o = 0, i, l = (u) => {
    i || (i = !0, n && n(u));
  };
  return new ReadableStream(
    {
      async pull(u) {
        try {
          const { done: c, value: a } = await r.next();
          if (c) {
            l(), u.close();
            return;
          }
          let f = a.byteLength;
          if (s) {
            let h = o += f;
            s(h);
          }
          u.enqueue(new Uint8Array(a));
        } catch (c) {
          throw l(c), c;
        }
      },
      cancel(u) {
        return l(u), r.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Jr = 64 * 1024, { isFunction: ws } = y, Ou = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(y.global), { ReadableStream: Qr, TextEncoder: qr } = y.global, _r = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ku = (e) => {
  e = y.merge.call(
    {
      skipUndefined: !0
    },
    Ou,
    e
  );
  const { fetch: t, Request: s, Response: n } = e, r = t ? ws(t) : typeof fetch == "function", o = ws(s), i = ws(n);
  if (!r)
    return !1;
  const l = r && ws(Qr), u = r && (typeof qr == "function" ? /* @__PURE__ */ ((m) => (b) => m.encode(b))(new qr()) : async (m) => new Uint8Array(await new s(m).arrayBuffer())), c = o && l && _r(() => {
    let m = !1;
    const b = new Qr(), A = new s(me.origin, {
      body: b,
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }).headers.has("Content-Type");
    return b.cancel(), m && !A;
  }), a = i && l && _r(() => y.isReadableStream(new n("").body)), f = {
    stream: a && ((m) => m.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((m) => {
    !f[m] && (f[m] = (b, A) => {
      let S = b && b[m];
      if (S)
        return S.call(b);
      throw new j(
        `Response type '${m}' is not supported`,
        j.ERR_NOT_SUPPORT,
        A
      );
    });
  });
  const h = async (m) => {
    if (m == null)
      return 0;
    if (y.isBlob(m))
      return m.size;
    if (y.isSpecCompliantForm(m))
      return (await new s(me.origin, {
        method: "POST",
        body: m
      }).arrayBuffer()).byteLength;
    if (y.isArrayBufferView(m) || y.isArrayBuffer(m))
      return m.byteLength;
    if (y.isURLSearchParams(m) && (m = m + ""), y.isString(m))
      return (await u(m)).byteLength;
  }, g = async (m, b) => {
    const A = y.toFiniteNumber(m.getContentLength());
    return A ?? h(b);
  };
  return async (m) => {
    let {
      url: b,
      method: A,
      data: S,
      signal: U,
      cancelToken: T,
      timeout: C,
      onDownloadProgress: L,
      onUploadProgress: re,
      responseType: te,
      headers: Pe,
      withCredentials: $e = "same-origin",
      fetchOptions: Ve
    } = Si(m), at = t || fetch;
    te = te ? (te + "").toLowerCase() : "text";
    let et = xu(
      [U, T && T.toAbortSignal()],
      C
    ), We = null;
    const De = et && et.unsubscribe && (() => {
      et.unsubscribe();
    });
    let Lt;
    try {
      if (re && c && A !== "get" && A !== "head" && (Lt = await g(Pe, S)) !== 0) {
        let he = new s(b, {
          method: "POST",
          body: S,
          duplex: "half"
        }), de;
        if (y.isFormData(S) && (de = he.headers.get("content-type")) && Pe.setContentType(de), he.body) {
          const [Mt, xt] = Kr(
            Lt,
            ks(Xr(re))
          );
          S = Zr(he.body, Jr, Mt, xt);
        }
      }
      y.isString($e) || ($e = $e ? "include" : "omit");
      const z = o && "credentials" in s.prototype, q = {
        ...Ve,
        signal: et,
        method: A.toUpperCase(),
        headers: Pe.normalize().toJSON(),
        body: S,
        duplex: "half",
        credentials: z ? $e : void 0
      };
      We = o && new s(b, q);
      let Y = await (o ? at(We, Ve) : at(b, q));
      const Ye = a && (te === "stream" || te === "response");
      if (a && (L || Ye && De)) {
        const he = {};
        ["status", "statusText", "headers"].forEach((ps) => {
          he[ps] = Y[ps];
        });
        const de = y.toFiniteNumber(Y.headers.get("content-length")), [Mt, xt] = L && Kr(
          de,
          ks(Xr(L), !0)
        ) || [];
        Y = new n(
          Zr(Y.body, Jr, Mt, () => {
            xt && xt(), De && De();
          }),
          he
        );
      }
      te = te || "text";
      let St = await f[y.findKey(f, te) || "text"](
        Y,
        m
      );
      return !Ye && De && De(), await new Promise((he, de) => {
        vi(he, de, {
          data: St,
          headers: Se.from(Y.headers),
          status: Y.status,
          statusText: Y.statusText,
          config: m,
          request: We
        });
      });
    } catch (z) {
      throw De && De(), z && z.name === "TypeError" && /Load failed|fetch/i.test(z.message) ? Object.assign(
        new j(
          "Network Error",
          j.ERR_NETWORK,
          m,
          We,
          z && z.response
        ),
        {
          cause: z.cause || z
        }
      ) : j.from(z, z && z.code, m, We, z && z.response);
    }
  };
}, Nu = /* @__PURE__ */ new Map(), Mi = (e) => {
  let t = e && e.env || {};
  const { fetch: s, Request: n, Response: r } = t, o = [n, r, s];
  let i = o.length, l = i, u, c, a = Nu;
  for (; l--; )
    u = o[l], c = a.get(u), c === void 0 && a.set(u, c = l ? /* @__PURE__ */ new Map() : ku(t)), a = c;
  return c;
};
Mi();
const $n = {
  http: Zc,
  xhr: Mu,
  fetch: {
    get: Mi
  }
};
y.forEach($n, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const $r = (e) => `- ${e}`, Du = (e) => y.isFunction(e) || e === null || e === !1;
function ju(e, t) {
  e = y.isArray(e) ? e : [e];
  const { length: s } = e;
  let n, r;
  const o = {};
  for (let i = 0; i < s; i++) {
    n = e[i];
    let l;
    if (r = n, !Du(n) && (r = $n[(l = String(n)).toLowerCase()], r === void 0))
      throw new j(`Unknown adapter '${l}'`);
    if (r && (y.isFunction(r) || (r = r.get(t))))
      break;
    o[l || "#" + i] = r;
  }
  if (!r) {
    const i = Object.entries(o).map(
      ([u, c]) => `adapter ${u} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = s ? i.length > 1 ? `since :
` + i.map($r).join(`
`) : " " + $r(i[0]) : "as no adapter specified";
    throw new j(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const xi = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ju,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: $n
};
function cn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new hs(null, e);
}
function eo(e) {
  return cn(e), e.headers = Se.from(e.headers), e.data = an.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), xi.getAdapter(e.adapter || ds.adapter, e)(e).then(
    function(n) {
      return cn(e), n.data = an.call(e, e.transformResponse, n), n.headers = Se.from(n.headers), n;
    },
    function(n) {
      return Ri(n) || (cn(e), n && n.response && (n.response.data = an.call(
        e,
        e.transformResponse,
        n.response
      ), n.response.headers = Se.from(n.response.headers))), Promise.reject(n);
    }
  );
}
const Ti = "1.15.0", Xs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Xs[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const to = {};
Xs.transitional = function(t, s, n) {
  function r(o, i) {
    return "[Axios v" + Ti + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new j(
        r(i, " has been removed" + (s ? " in " + s : "")),
        j.ERR_DEPRECATED
      );
    return s && !to[i] && (to[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
Xs.spelling = function(t) {
  return (s, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Uu(e, t, s) {
  if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const o = n[r], i = t[o];
    if (i) {
      const l = e[o], u = l === void 0 || i(l, o, e);
      if (u !== !0)
        throw new j(
          "option " + o + " must be " + u,
          j.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (s !== !0)
      throw new j("Unknown option " + o, j.ERR_BAD_OPTION);
  }
}
const Ss = {
  assertOptions: Uu,
  validators: Xs
}, Oe = Ss.validators;
let At = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Yr(),
      response: new Yr()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, s) {
    try {
      return await this._request(t, s);
    } catch (n) {
      if (n instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const o = (() => {
          if (!r.stack)
            return "";
          const i = r.stack.indexOf(`
`);
          return i === -1 ? "" : r.stack.slice(i + 1);
        })();
        try {
          if (!n.stack)
            n.stack = o;
          else if (o) {
            const i = o.indexOf(`
`), l = i === -1 ? -1 : o.indexOf(`
`, i + 1), u = l === -1 ? "" : o.slice(l + 1);
            String(n.stack).endsWith(u) || (n.stack += `
` + o);
          }
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, s) {
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = vt(this.defaults, s);
    const { transitional: n, paramsSerializer: r, headers: o } = s;
    n !== void 0 && Ss.assertOptions(
      n,
      {
        silentJSONParsing: Oe.transitional(Oe.boolean),
        forcedJSONParsing: Oe.transitional(Oe.boolean),
        clarifyTimeoutError: Oe.transitional(Oe.boolean),
        legacyInterceptorReqResOrdering: Oe.transitional(Oe.boolean)
      },
      !1
    ), r != null && (y.isFunction(r) ? s.paramsSerializer = {
      serialize: r
    } : Ss.assertOptions(
      r,
      {
        encode: Oe.function,
        serialize: Oe.function
      },
      !0
    )), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Ss.assertOptions(
      s,
      {
        baseUrl: Oe.spelling("baseURL"),
        withXsrfToken: Oe.spelling("withXSRFToken")
      },
      !0
    ), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let i = o && y.merge(o.common, o[s.method]);
    o && y.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (m) => {
      delete o[m];
    }), s.headers = Se.concat(i, o);
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function(b) {
      if (typeof b.runWhen == "function" && b.runWhen(s) === !1)
        return;
      u = u && b.synchronous;
      const A = s.transitional || qn;
      A && A.legacyInterceptorReqResOrdering ? l.unshift(b.fulfilled, b.rejected) : l.push(b.fulfilled, b.rejected);
    });
    const c = [];
    this.interceptors.response.forEach(function(b) {
      c.push(b.fulfilled, b.rejected);
    });
    let a, f = 0, h;
    if (!u) {
      const m = [eo.bind(this), void 0];
      for (m.unshift(...l), m.push(...c), h = m.length, a = Promise.resolve(s); f < h; )
        a = a.then(m[f++], m[f++]);
      return a;
    }
    h = l.length;
    let g = s;
    for (; f < h; ) {
      const m = l[f++], b = l[f++];
      try {
        g = m(g);
      } catch (A) {
        b.call(this, A);
        break;
      }
    }
    try {
      a = eo.call(this, g);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, h = c.length; f < h; )
      a = a.then(c[f++], c[f++]);
    return a;
  }
  getUri(t) {
    t = vt(this.defaults, t);
    const s = Ei(t.baseURL, t.url, t.allowAbsoluteUrls);
    return wi(s, t.params, t.paramsSerializer);
  }
};
y.forEach(["delete", "get", "head", "options"], function(t) {
  At.prototype[t] = function(s, n) {
    return this.request(
      vt(n || {}, {
        method: t,
        url: s,
        data: (n || {}).data
      })
    );
  };
});
y.forEach(["post", "put", "patch"], function(t) {
  function s(n) {
    return function(o, i, l) {
      return this.request(
        vt(l || {}, {
          method: t,
          headers: n ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: i
        })
      );
    };
  }
  At.prototype[t] = s(), At.prototype[t + "Form"] = s(!0);
});
let Lu = class Ii {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(o) {
      s = o;
    });
    const n = this;
    this.promise.then((r) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](r);
      n._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const i = new Promise((l) => {
        n.subscribe(l), o = l;
      }).then(r);
      return i.cancel = function() {
        n.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      n.reason || (n.reason = new hs(o, i, l), s(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const s = this._listeners.indexOf(t);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), s = (n) => {
      t.abort(n);
    };
    return this.subscribe(s), t.signal.unsubscribe = () => this.unsubscribe(s), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ii(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function Bu(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function Fu(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const Sn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Sn).forEach(([e, t]) => {
  Sn[t] = e;
});
function Pi(e) {
  const t = new At(e), s = ai(At.prototype.request, t);
  return y.extend(s, At.prototype, t, { allOwnKeys: !0 }), y.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(r) {
    return Pi(vt(e, r));
  }, s;
}
const ie = Pi(ds);
ie.Axios = At;
ie.CanceledError = hs;
ie.CancelToken = Lu;
ie.isCancel = Ri;
ie.VERSION = Ti;
ie.toFormData = Ks;
ie.AxiosError = j;
ie.Cancel = ie.CanceledError;
ie.all = function(t) {
  return Promise.all(t);
};
ie.spread = Bu;
ie.isAxiosError = Fu;
ie.mergeConfig = vt;
ie.AxiosHeaders = Se;
ie.formToJSON = (e) => Ai(y.isHTMLForm(e) ? new FormData(e) : e);
ie.getAdapter = xi.getAdapter;
ie.HttpStatusCode = Sn;
ie.default = ie;
const {
  Axios: th,
  AxiosError: sh,
  CanceledError: nh,
  isCancel: rh,
  CancelToken: oh,
  VERSION: ih,
  all: lh,
  Cancel: ah,
  isAxiosError: ch,
  spread: uh,
  toFormData: fh,
  AxiosHeaders: dh,
  HttpStatusCode: hh,
  formToJSON: ph,
  getAdapter: mh,
  mergeConfig: gh
} = ie, er = 5e3, Oi = (e) => {
  throw console.error(e), e.code === "ECONNABORTED" || e.code === "ERR_NETWORK" ? "network" : "failed";
}, Hu = async (e) => await ie.delete(e.toString(), { timeout: er }), Vu = async (e, t) => {
  try {
    return await (await ie.post(e.toString(), t, {
      timeout: er
    })).data;
  } catch (s) {
    return Oi(s);
  }
}, Wu = async (e, t) => {
  try {
    return await (await ie.get(e.toString(), {
      params: { session_type: t },
      timeout: er
    })).data;
  } catch (s) {
    return Oi(s);
  }
}, Yu = ["failed", "cancelled", "expired", "network"], Gu = (e) => Yu.includes(e), Ku = "Because you have stopped, no data has been shared.", Xu = "Stopped", zu = "Close", Zu = "If you stop now, no data will be shared.", Ju = "Are you sure you want to stop?", Qu = "On another device", qu = "On this device", _u = "On which device is your NL Wallet app installed?", $u = "This action has been stopped because too much time has passed. This happens to keep your data safe. Please try again.", ef = "Sorry, time is over", tf = "This action was unsuccessful. This may have several reasons. Please try again.", sf = "Sorry, something went wrong", nf = "No NL Wallet App yet? Or need help?", rf = "To NL Wallet website", of = "Follow the steps in your NL Wallet app", lf = "Your request is being retrieved", af = "Please wait", cf = "NL Wallet", uf = "Need help?", ff = "Your internet connection seems to be down or too slow. Check your connection and try again.", df = "Sorry, no internet connection", hf = "No", pf = "QR code", mf = "Scan the QR code with your NL Wallet app", gf = "Try again", yf = "Stop", bf = "Close this page and continue in the new opened tab.", wf = "Success!", Af = "Login with NL Wallet", Cf = "Yes, stop", Rf = {
  cancelled_body: Ku,
  cancelled_title: Xu,
  close: zu,
  confirm_stop_body: Zu,
  confirm_stop_title: Ju,
  device_choice_cross_device: Qu,
  device_choice_same_device: qu,
  device_choice_title: _u,
  expired_body: $u,
  expired_title: ef,
  failed_body: tf,
  failed_title: sf,
  help_title: nf,
  help_to_website: rf,
  in_progress_title: of,
  loading_body: lf,
  loading_title: af,
  modal_header: cf,
  need_help: uf,
  network_body: ff,
  network_title: df,
  no: hf,
  qr_code_label: pf,
  qr_code_title: mf,
  retry: gf,
  stop: yf,
  success_body: bf,
  success_title: wf,
  wallet_button_text: Af,
  yes_stop: Cf
}, vf = "Omdat je bent gestopt zijn er geen gegevens gedeeld.", Ef = "Gestopt", Sf = "Sluiten", Mf = "Als je stopt worden er geen gegevens gedeeld.", xf = "Weet je zeker dat je wilt stoppen?", Tf = "Op een ander apparaat", If = "Op dit apparaat", Pf = "Op welk apparaat staat je NL Wallet app?", Of = "Deze actie is gestopt omdat er teveel tijd voorbij is gegaan. Dit is bedoeld om je gegevens veilig te houden. Probeer het opnieuw.", kf = "Sorry, de tijd is voorbij", Nf = "Deze actie is niet gelukt. Dit kan verschillende redenen hebben. Probeer het opnieuw.", Df = "Sorry, er gaat iets mis", jf = "Nog geen NL Wallet app? Of hulp nodig?", Uf = "Naar NL Wallet website", Lf = "Volg de stappen in de NL Wallet app", Bf = "De gegevens worden opgehaald", Ff = "Even geduld", Hf = "NL Wallet", Vf = "Hulp nodig?", Wf = "Je verbinding met het internet lijkt niet te werken of is te traag. Controleer je verbinding en probeer het opnieuw.", Yf = "Sorry, geen internet", Gf = "Nee", Kf = "QR code", Xf = "Scan de QR-code met je NL Wallet app", zf = "Probeer opnieuw", Zf = "Stoppen", Jf = "Sluit deze pagina en ga verder in het nieuw geopende tabblad.", Qf = "Gelukt!", qf = "Inloggen met NL Wallet", _f = "Ja, stop", $f = {
  cancelled_body: vf,
  cancelled_title: Ef,
  close: Sf,
  confirm_stop_body: Mf,
  confirm_stop_title: xf,
  device_choice_cross_device: Tf,
  device_choice_same_device: If,
  device_choice_title: Pf,
  expired_body: Of,
  expired_title: kf,
  failed_body: Nf,
  failed_title: Df,
  help_title: jf,
  help_to_website: Uf,
  in_progress_title: Lf,
  loading_body: Bf,
  loading_title: Ff,
  modal_header: Hf,
  need_help: Vf,
  network_body: Wf,
  network_title: Yf,
  no: Gf,
  qr_code_label: Kf,
  qr_code_title: Xf,
  retry: zf,
  stop: Zf,
  success_body: Jf,
  success_title: Qf,
  wallet_button_text: qf,
  yes_stop: _f
}, Ne = Symbol("TRANSLATIONS"), tr = Symbol("IS_BUSINESS"), sr = Symbol("IS_OVER18"), He = (e, t) => {
  const s = Be(e, t);
  if (!s)
    throw new Error(`Could not resolve ${e.description}`);
  return s;
}, so = (e, t, s) => {
  const n = s ? td[e] : t ? ed[e] : is[e];
  return (r) => n[r];
}, is = {
  en: Rf,
  nl: $f
}, ed = {
  en: {
    ...is.en,
    wallet_button_text: "Login with Business Wallet",
    modal_header: "Business Wallet",
    device_choice_title: "On which device is your Business Wallet app installed?",
    help_title: "No Business Wallet App yet? Or need help?",
    help_to_website: "To Business Wallet website",
    in_progress_title: "Follow the steps in your Business Wallet app",
    qr_code_title: "Scan the QR code with your Business Wallet app"
  },
  nl: {
    ...is.nl,
    wallet_button_text: "Inloggen met Business Wallet",
    modal_header: "Business Wallet",
    device_choice_title: "Op welk apparaat staat je Business Wallet app?",
    help_title: "Nog geen Business Wallet app? Of hulp nodig?",
    help_to_website: "Naar Business Wallet website",
    in_progress_title: "Volg de stappen in de Business Wallet app",
    qr_code_title: "Scan de QR-code met je Business Wallet app"
  }
}, td = {
  en: {
    ...is.en,
    wallet_button_text: "Login with 18up",
    modal_header: "18up",
    device_choice_title: "On which device is your 18up app installed?",
    help_title: "No 18up App yet? Or need help?",
    help_to_website: "To 18up website",
    in_progress_title: "Follow the steps in your 18up app",
    qr_code_title: "Scan the QR code with your 18up app"
  },
  nl: {
    ...is.nl,
    wallet_button_text: "Inloggen met 18up",
    modal_header: "18up",
    device_choice_title: "Op welk apparaat staat je 18up app?",
    help_title: "Nog geen 18up app? Of hulp nodig?",
    help_to_website: "Naar 18up website",
    in_progress_title: "Volg de stappen in de 18up app",
    qr_code_title: "Scan de QR-code met je 18up app"
  }
}, sd = {
  key: 0,
  href: "/help",
  class: "button link",
  "data-testid": "help"
}, ki = /* @__PURE__ */ fe({
  __name: "ModalFooter",
  props: {
    modalState: {}
  },
  emits: ["close", "stop", "confirm", "retry", "back"],
  setup(e, { emit: t }) {
    const s = He(Ne), n = t;
    return (r, o) => (V(), Q("footer", null, [
      ["creating", "loading", "in-progress"].includes(e.modalState.kind) ? (V(), Q("a", sd, [
        o[4] || (o[4] = P("svg", {
          width: "16",
          height: "16",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          P("path", { d: "M6.4 18.5 5 17.1l9.6-9.6H6v-2h12v12h-2V8.9z" })
        ], -1)),
        P("span", null, X(F(s)("need_help")), 1)
      ])) : ue("", !0),
      ["creating", "loading", "in-progress", "confirm-stop"].includes(e.modalState.kind) ? (V(), Q("button", {
        key: 1,
        type: "button",
        class: rt(["button", {
          secondary: ["creating", "loading", "in-progress"].includes(e.modalState.kind),
          error: e.modalState.kind === "confirm-stop"
        }]),
        "data-testid": "cancel_button",
        onClick: o[0] || (o[0] = (i) => e.modalState.kind === "confirm-stop" ? n("stop") : n("confirm"))
      }, [
        o[5] || (o[5] = P("svg", {
          width: "16",
          height: "16",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          P("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.9 7.9 0 0 1 12 20m6.31-3.1L7.1 5.69A7.9 7.9 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9" })
        ], -1)),
        P("span", null, X(e.modalState.kind === "confirm-stop" ? F(s)("yes_stop") : F(s)("stop")), 1)
      ], 2)) : ue("", !0),
      e.modalState.kind === "error" ? (V(), Q("button", {
        key: 2,
        type: "button",
        class: "button primary",
        "data-testid": "retry_button",
        onClick: o[1] || (o[1] = (i) => n("retry"))
      }, [
        o[6] || (o[6] = P("svg", {
          width: "16",
          height: "16",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          P("path", { d: "M12 22.5q-1.874 0-3.512-.712a9.1 9.1 0 0 1-2.85-1.926 9.1 9.1 0 0 1-1.926-2.85A8.7 8.7 0 0 1 3 13.5h2q0 2.925 2.038 4.962T12 20.5q2.925 0 4.962-2.038T19 13.5q0-2.925-2.038-4.963Q14.925 6.5 12 6.5h-.15l1.55 1.55L12 9.5l-4-4 4-4 1.4 1.45-1.55 1.55H12q1.875 0 3.513.713a9.2 9.2 0 0 1 2.85 1.924 9.2 9.2 0 0 1 1.925 2.85A8.7 8.7 0 0 1 21 13.5q0 1.874-.712 3.512a9.2 9.2 0 0 1-1.925 2.85 9.2 9.2 0 0 1-2.85 1.926A8.7 8.7 0 0 1 12 22.5" })
        ], -1)),
        P("span", null, X(F(s)("retry")), 1)
      ])) : ue("", !0),
      ["created", "error", "success"].includes(e.modalState.kind) ? (V(), Q("button", {
        key: 3,
        type: "button",
        class: rt(["button", {
          link: ["created", "error"].includes(e.modalState.kind) || e.modalState.kind === "success" && e.modalState.session.sessionType === "cross_device",
          primary: e.modalState.kind === "success" && e.modalState.session.sessionType === "same_device"
        }]),
        "data-testid": "close_button",
        onClick: o[2] || (o[2] = (i) => e.modalState.kind === "created" ? n("stop") : n("close"))
      }, [
        o[7] || (o[7] = P("svg", {
          width: "16",
          height: "16",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          P("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
        ], -1)),
        P("span", null, X(F(s)("close")), 1)
      ], 2)) : ue("", !0),
      e.modalState.kind === "confirm-stop" ? (V(), Q("button", {
        key: 4,
        type: "button",
        class: "button link",
        "data-testid": "back_button",
        onClick: o[3] || (o[3] = (i) => n("back"))
      }, [
        o[8] || (o[8] = P("svg", {
          width: "16",
          height: "16",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          P("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" })
        ], -1)),
        P("span", null, X(F(s)("no")), 1)
      ])) : ue("", !0)
    ]));
  }
}), Ni = /* @__PURE__ */ fe({
  __name: "ModalHeader",
  setup(e) {
    const t = He(Ne);
    return (s, n) => (V(), Q("header", null, [
      P("h1", null, X(F(t)("modal_header")), 1)
    ]));
  }
}), nd = ["href"], Di = /* @__PURE__ */ fe({
  __name: "HelpLink",
  props: {
    helpBaseUrl: {}
  },
  setup(e) {
    const t = e, s = new URL("/help", t.helpBaseUrl).toString(), n = He(Ne);
    return (r, o) => (V(), Q("a", {
      href: F(s),
      class: "link",
      "data-testid": "help"
    }, [
      P("span", null, X(F(n)("need_help")), 1),
      o[0] || (o[0] = P("svg", {
        width: "16",
        height: "16",
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, [
        P("path", { d: "M6.4 18.5 5 17.1l9.6-9.6H6v-2h12v12h-2V8.9z" })
      ], -1))
    ], 8, nd));
  }
}), rd = { class: "text" }, od = { "data-testid": "confirm_stop" }, id = /* @__PURE__ */ fe({
  __name: "ConfirmStopSection",
  props: {
    helpBaseUrl: {}
  },
  setup(e) {
    const t = He(Ne);
    return (s, n) => (V(), Q(ne, null, [
      P("section", rd, [
        P("h2", od, X(F(t)("confirm_stop_title")), 1),
        P("p", null, X(F(t)("confirm_stop_body")), 1)
      ]),
      ce(Di, { helpBaseUrl: e.helpBaseUrl }, null, 8, ["helpBaseUrl"])
    ], 64));
  }
}), ld = {
  class: "buttons",
  "data-testid": "device_choice"
}, ad = ["href"], cd = /* @__PURE__ */ fe({
  __name: "DeviceChoice",
  props: {
    ul: {}
  },
  emits: ["choice"],
  setup(e, { emit: t }) {
    const s = He(Ne), n = t;
    return (r, o) => (V(), Q(ne, null, [
      P("h2", null, X(F(s)("device_choice_title")), 1),
      P("section", ld, [
        P("a", {
          role: "button",
          href: e.ul.toString(),
          target: "_blank",
          class: "button primary",
          "data-testid": "same_device_button",
          onClick: o[0] || (o[0] = (i) => n("choice", "same_device"))
        }, [
          o[2] || (o[2] = P("svg", {
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            P("path", { d: "M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H4z" })
          ], -1)),
          P("span", null, X(F(s)("device_choice_same_device")), 1)
        ], 8, ad),
        P("button", {
          type: "button",
          class: "button secondary",
          "data-testid": "cross_device_button",
          onClick: o[1] || (o[1] = (i) => n("choice", "cross_device"))
        }, [
          o[3] || (o[3] = P("svg", {
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            P("path", { d: "M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H4z" })
          ], -1)),
          P("span", null, X(F(s)("device_choice_cross_device")), 1)
        ])
      ])
    ], 64));
  }
});
var Et;
((e) => {
  const i = class i {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(c, a, f, h) {
      /*-- Fields --*/
      // The width and height of this QR Code, measured in modules, between
      // 21 and 177 (inclusive). This is equal to version * 4 + 17.
      se(this, "size");
      // The index of the mask pattern used in this QR Code, which is between 0 and 7 (inclusive).
      // Even if a QR Code is created with automatic masking requested (mask = -1),
      // the resulting object still has a mask value between 0 and 7.
      se(this, "mask");
      // The modules of this QR Code (false = light, true = dark).
      // Immutable after constructor finishes. Accessed through getModule().
      se(this, "modules", []);
      // Indicates function modules that are not subjected to masking. Discarded when constructor finishes.
      se(this, "isFunction", []);
      if (this.version = c, this.errorCorrectionLevel = a, c < i.MIN_VERSION || c > i.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (h < -1 || h > 7)
        throw new RangeError("Mask value out of range");
      this.size = c * 4 + 17;
      const g = [];
      for (let b = 0; b < this.size; b++)
        g.push(!1);
      for (let b = 0; b < this.size; b++)
        this.modules.push(g.slice()), this.isFunction.push(g.slice());
      this.drawFunctionPatterns();
      const m = this.addEccAndInterleave(f);
      if (this.drawCodewords(m), h == -1) {
        let b = 1e9;
        for (let A = 0; A < 8; A++) {
          this.applyMask(A), this.drawFormatBits(A);
          const S = this.getPenaltyScore();
          S < b && (h = A, b = S), this.applyMask(A);
        }
      }
      r(0 <= h && h <= 7), this.mask = h, this.applyMask(h), this.drawFormatBits(h), this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(c, a) {
      const f = e.QrSegment.makeSegments(c);
      return i.encodeSegments(f, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(c, a) {
      const f = e.QrSegment.makeBytes(c);
      return i.encodeSegments([f], a);
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(c, a, f = 1, h = 40, g = -1, m = !0) {
      if (!(i.MIN_VERSION <= f && f <= h && h <= i.MAX_VERSION) || g < -1 || g > 7)
        throw new RangeError("Invalid value");
      let b, A;
      for (b = f; ; b++) {
        const C = i.getNumDataCodewords(b, a) * 8, L = o.getTotalBits(c, b);
        if (L <= C) {
          A = L;
          break;
        }
        if (b >= h)
          throw new RangeError("Data too long");
      }
      for (const C of [i.Ecc.MEDIUM, i.Ecc.QUARTILE, i.Ecc.HIGH])
        m && A <= i.getNumDataCodewords(b, C) * 8 && (a = C);
      const S = [];
      for (const C of c) {
        s(C.mode.modeBits, 4, S), s(C.numChars, C.mode.numCharCountBits(b), S);
        for (const L of C.getData())
          S.push(L);
      }
      r(S.length == A);
      const U = i.getNumDataCodewords(b, a) * 8;
      r(S.length <= U), s(0, Math.min(4, U - S.length), S), s(0, (8 - S.length % 8) % 8, S), r(S.length % 8 == 0);
      for (let C = 236; S.length < U; C ^= 253)
        s(C, 8, S);
      const T = [];
      for (; T.length * 8 < S.length; )
        T.push(0);
      return S.forEach((C, L) => T[L >>> 3] |= C << 7 - (L & 7)), new i(b, a, T, g);
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(c, a) {
      return 0 <= c && c < this.size && 0 <= a && a < this.size && this.modules[a][c];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let f = 0; f < this.size; f++)
        this.setFunctionModule(6, f, f % 2 == 0), this.setFunctionModule(f, 6, f % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const c = this.getAlignmentPatternPositions(), a = c.length;
      for (let f = 0; f < a; f++)
        for (let h = 0; h < a; h++)
          f == 0 && h == 0 || f == 0 && h == a - 1 || f == a - 1 && h == 0 || this.drawAlignmentPattern(c[f], c[h]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(c) {
      const a = this.errorCorrectionLevel.formatBits << 3 | c;
      let f = a;
      for (let g = 0; g < 10; g++)
        f = f << 1 ^ (f >>> 9) * 1335;
      const h = (a << 10 | f) ^ 21522;
      r(h >>> 15 == 0);
      for (let g = 0; g <= 5; g++)
        this.setFunctionModule(8, g, n(h, g));
      this.setFunctionModule(8, 7, n(h, 6)), this.setFunctionModule(8, 8, n(h, 7)), this.setFunctionModule(7, 8, n(h, 8));
      for (let g = 9; g < 15; g++)
        this.setFunctionModule(14 - g, 8, n(h, g));
      for (let g = 0; g < 8; g++)
        this.setFunctionModule(this.size - 1 - g, 8, n(h, g));
      for (let g = 8; g < 15; g++)
        this.setFunctionModule(8, this.size - 15 + g, n(h, g));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let c = this.version;
      for (let f = 0; f < 12; f++)
        c = c << 1 ^ (c >>> 11) * 7973;
      const a = this.version << 12 | c;
      r(a >>> 18 == 0);
      for (let f = 0; f < 18; f++) {
        const h = n(a, f), g = this.size - 11 + f % 3, m = Math.floor(f / 3);
        this.setFunctionModule(g, m, h), this.setFunctionModule(m, g, h);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(c, a) {
      for (let f = -4; f <= 4; f++)
        for (let h = -4; h <= 4; h++) {
          const g = Math.max(Math.abs(h), Math.abs(f)), m = c + h, b = a + f;
          0 <= m && m < this.size && 0 <= b && b < this.size && this.setFunctionModule(m, b, g != 2 && g != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(c, a) {
      for (let f = -2; f <= 2; f++)
        for (let h = -2; h <= 2; h++)
          this.setFunctionModule(c + h, a + f, Math.max(Math.abs(h), Math.abs(f)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(c, a, f) {
      this.modules[a][c] = f, this.isFunction[a][c] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(c) {
      const a = this.version, f = this.errorCorrectionLevel;
      if (c.length != i.getNumDataCodewords(a, f))
        throw new RangeError("Invalid argument");
      const h = i.NUM_ERROR_CORRECTION_BLOCKS[f.ordinal][a], g = i.ECC_CODEWORDS_PER_BLOCK[f.ordinal][a], m = Math.floor(i.getNumRawDataModules(a) / 8), b = h - m % h, A = Math.floor(m / h), S = [], U = i.reedSolomonComputeDivisor(g);
      for (let C = 0, L = 0; C < h; C++) {
        const re = c.slice(L, L + A - g + (C < b ? 0 : 1));
        L += re.length;
        const te = i.reedSolomonComputeRemainder(re, U);
        C < b && re.push(0), S.push(re.concat(te));
      }
      const T = [];
      for (let C = 0; C < S[0].length; C++)
        S.forEach((L, re) => {
          (C != A - g || re >= b) && T.push(L[C]);
        });
      return r(T.length == m), T;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(c) {
      if (c.length != Math.floor(i.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let f = this.size - 1; f >= 1; f -= 2) {
        f == 6 && (f = 5);
        for (let h = 0; h < this.size; h++)
          for (let g = 0; g < 2; g++) {
            const m = f - g, A = (f + 1 & 2) == 0 ? this.size - 1 - h : h;
            !this.isFunction[A][m] && a < c.length * 8 && (this.modules[A][m] = n(c[a >>> 3], 7 - (a & 7)), a++);
          }
      }
      r(a == c.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(c) {
      if (c < 0 || c > 7)
        throw new RangeError("Mask value out of range");
      for (let a = 0; a < this.size; a++)
        for (let f = 0; f < this.size; f++) {
          let h;
          switch (c) {
            case 0:
              h = (f + a) % 2 == 0;
              break;
            case 1:
              h = a % 2 == 0;
              break;
            case 2:
              h = f % 3 == 0;
              break;
            case 3:
              h = (f + a) % 3 == 0;
              break;
            case 4:
              h = (Math.floor(f / 3) + Math.floor(a / 2)) % 2 == 0;
              break;
            case 5:
              h = f * a % 2 + f * a % 3 == 0;
              break;
            case 6:
              h = (f * a % 2 + f * a % 3) % 2 == 0;
              break;
            case 7:
              h = ((f + a) % 2 + f * a % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[a][f] && h && (this.modules[a][f] = !this.modules[a][f]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let c = 0;
      for (let g = 0; g < this.size; g++) {
        let m = !1, b = 0;
        const A = [0, 0, 0, 0, 0, 0, 0];
        for (let S = 0; S < this.size; S++)
          this.modules[g][S] == m ? (b++, b == 5 ? c += i.PENALTY_N1 : b > 5 && c++) : (this.finderPenaltyAddHistory(b, A), m || (c += this.finderPenaltyCountPatterns(A) * i.PENALTY_N3), m = this.modules[g][S], b = 1);
        c += this.finderPenaltyTerminateAndCount(m, b, A) * i.PENALTY_N3;
      }
      for (let g = 0; g < this.size; g++) {
        let m = !1, b = 0;
        const A = [0, 0, 0, 0, 0, 0, 0];
        for (let S = 0; S < this.size; S++)
          this.modules[S][g] == m ? (b++, b == 5 ? c += i.PENALTY_N1 : b > 5 && c++) : (this.finderPenaltyAddHistory(b, A), m || (c += this.finderPenaltyCountPatterns(A) * i.PENALTY_N3), m = this.modules[S][g], b = 1);
        c += this.finderPenaltyTerminateAndCount(m, b, A) * i.PENALTY_N3;
      }
      for (let g = 0; g < this.size - 1; g++)
        for (let m = 0; m < this.size - 1; m++) {
          const b = this.modules[g][m];
          b == this.modules[g][m + 1] && b == this.modules[g + 1][m] && b == this.modules[g + 1][m + 1] && (c += i.PENALTY_N2);
        }
      let a = 0;
      for (const g of this.modules)
        a = g.reduce((m, b) => m + (b ? 1 : 0), a);
      const f = this.size * this.size, h = Math.ceil(Math.abs(a * 20 - f * 10) / f) - 1;
      return r(0 <= h && h <= 9), c += h * i.PENALTY_N4, r(0 <= c && c <= 2568888), c;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const c = Math.floor(this.version / 7) + 2, a = Math.floor((this.version * 8 + c * 3 + 5) / (c * 4 - 4)) * 2, f = [6];
        for (let h = this.size - 7; f.length < c; h -= a)
          f.splice(1, 0, h);
        return f;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(c) {
      if (c < i.MIN_VERSION || c > i.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let a = (16 * c + 128) * c + 64;
      if (c >= 2) {
        const f = Math.floor(c / 7) + 2;
        a -= (25 * f - 10) * f - 55, c >= 7 && (a -= 36);
      }
      return r(208 <= a && a <= 29648), a;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(c, a) {
      return Math.floor(i.getNumRawDataModules(c) / 8) - i.ECC_CODEWORDS_PER_BLOCK[a.ordinal][c] * i.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][c];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(c) {
      if (c < 1 || c > 255)
        throw new RangeError("Degree out of range");
      const a = [];
      for (let h = 0; h < c - 1; h++)
        a.push(0);
      a.push(1);
      let f = 1;
      for (let h = 0; h < c; h++) {
        for (let g = 0; g < a.length; g++)
          a[g] = i.reedSolomonMultiply(a[g], f), g + 1 < a.length && (a[g] ^= a[g + 1]);
        f = i.reedSolomonMultiply(f, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(c, a) {
      const f = a.map((h) => 0);
      for (const h of c) {
        const g = h ^ f.shift();
        f.push(0), a.forEach((m, b) => f[b] ^= i.reedSolomonMultiply(m, g));
      }
      return f;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(c, a) {
      if (c >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let f = 0;
      for (let h = 7; h >= 0; h--)
        f = f << 1 ^ (f >>> 7) * 285, f ^= (a >>> h & 1) * c;
      return r(f >>> 8 == 0), f;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(c) {
      const a = c[1];
      r(a <= this.size * 3);
      const f = a > 0 && c[2] == a && c[3] == a * 3 && c[4] == a && c[5] == a;
      return (f && c[0] >= a * 4 && c[6] >= a ? 1 : 0) + (f && c[6] >= a * 4 && c[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(c, a, f) {
      return c && (this.finderPenaltyAddHistory(a, f), a = 0), a += this.size, this.finderPenaltyAddHistory(a, f), this.finderPenaltyCountPatterns(f);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(c, a) {
      a[0] == 0 && (c += this.size), a.pop(), a.unshift(c);
    }
  };
  /*-- Constants and tables --*/
  // The minimum version number supported in the QR Code Model 2 standard.
  se(i, "MIN_VERSION", 1), // The maximum version number supported in the QR Code Model 2 standard.
  se(i, "MAX_VERSION", 40), // For use in getPenaltyScore(), when evaluating which mask is best.
  se(i, "PENALTY_N1", 3), se(i, "PENALTY_N2", 3), se(i, "PENALTY_N3", 40), se(i, "PENALTY_N4", 10), se(i, "ECC_CODEWORDS_PER_BLOCK", [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [
      -1,
      7,
      10,
      15,
      20,
      26,
      18,
      20,
      24,
      30,
      18,
      20,
      24,
      26,
      30,
      22,
      24,
      28,
      30,
      28,
      28,
      28,
      28,
      30,
      30,
      26,
      28,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30
    ],
    // Low
    [
      -1,
      10,
      16,
      26,
      18,
      24,
      16,
      18,
      22,
      22,
      26,
      30,
      22,
      22,
      24,
      24,
      28,
      28,
      26,
      26,
      26,
      26,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28
    ],
    // Medium
    [
      -1,
      13,
      22,
      18,
      26,
      18,
      24,
      18,
      22,
      20,
      24,
      28,
      26,
      24,
      20,
      30,
      24,
      28,
      28,
      26,
      30,
      28,
      30,
      30,
      30,
      30,
      28,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30
    ],
    // Quartile
    [
      -1,
      17,
      28,
      22,
      16,
      22,
      28,
      26,
      26,
      24,
      28,
      24,
      28,
      22,
      24,
      24,
      30,
      28,
      28,
      26,
      28,
      30,
      24,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      30
    ]
    // High
  ]), se(i, "NUM_ERROR_CORRECTION_BLOCKS", [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [
      -1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      4,
      4,
      4,
      4,
      4,
      6,
      6,
      6,
      6,
      7,
      8,
      8,
      9,
      9,
      10,
      12,
      12,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      19,
      20,
      21,
      22,
      24,
      25
    ],
    // Low
    [
      -1,
      1,
      1,
      1,
      2,
      2,
      4,
      4,
      4,
      5,
      5,
      5,
      8,
      9,
      9,
      10,
      10,
      11,
      13,
      14,
      16,
      17,
      17,
      18,
      20,
      21,
      23,
      25,
      26,
      28,
      29,
      31,
      33,
      35,
      37,
      38,
      40,
      43,
      45,
      47,
      49
    ],
    // Medium
    [
      -1,
      1,
      1,
      2,
      2,
      4,
      4,
      6,
      6,
      8,
      8,
      8,
      10,
      12,
      16,
      12,
      17,
      16,
      18,
      21,
      20,
      23,
      23,
      25,
      27,
      29,
      34,
      34,
      35,
      38,
      40,
      43,
      45,
      48,
      51,
      53,
      56,
      59,
      62,
      65,
      68
    ],
    // Quartile
    [
      -1,
      1,
      1,
      2,
      4,
      4,
      4,
      5,
      6,
      8,
      8,
      11,
      11,
      16,
      16,
      18,
      16,
      19,
      21,
      25,
      25,
      25,
      34,
      30,
      32,
      35,
      37,
      40,
      42,
      45,
      48,
      51,
      54,
      57,
      60,
      63,
      66,
      70,
      74,
      77,
      81
    ]
    // High
  ]);
  let t = i;
  e.QrCode = t;
  function s(u, c, a) {
    if (c < 0 || c > 31 || u >>> c)
      throw new RangeError("Value out of range");
    for (let f = c - 1; f >= 0; f--)
      a.push(u >>> f & 1);
  }
  function n(u, c) {
    return (u >>> c & 1) != 0;
  }
  function r(u) {
    if (!u)
      throw new Error("Assertion error");
  }
  const l = class l {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(c, a, f) {
      if (this.mode = c, this.numChars = a, this.bitData = f, a < 0)
        throw new RangeError("Invalid argument");
      this.bitData = f.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(c) {
      const a = [];
      for (const f of c)
        s(f, 8, a);
      return new l(l.Mode.BYTE, c.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(c) {
      if (!l.isNumeric(c))
        throw new RangeError("String contains non-numeric characters");
      const a = [];
      for (let f = 0; f < c.length; ) {
        const h = Math.min(c.length - f, 3);
        s(parseInt(c.substring(f, f + h), 10), h * 3 + 1, a), f += h;
      }
      return new l(l.Mode.NUMERIC, c.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(c) {
      if (!l.isAlphanumeric(c))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      const a = [];
      let f;
      for (f = 0; f + 2 <= c.length; f += 2) {
        let h = l.ALPHANUMERIC_CHARSET.indexOf(c.charAt(f)) * 45;
        h += l.ALPHANUMERIC_CHARSET.indexOf(c.charAt(f + 1)), s(h, 11, a);
      }
      return f < c.length && s(l.ALPHANUMERIC_CHARSET.indexOf(c.charAt(f)), 6, a), new l(l.Mode.ALPHANUMERIC, c.length, a);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(c) {
      return c == "" ? [] : l.isNumeric(c) ? [l.makeNumeric(c)] : l.isAlphanumeric(c) ? [l.makeAlphanumeric(c)] : [l.makeBytes(l.toUtf8ByteArray(c))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(c) {
      const a = [];
      if (c < 0)
        throw new RangeError("ECI assignment value out of range");
      if (c < 128)
        s(c, 8, a);
      else if (c < 16384)
        s(2, 2, a), s(c, 14, a);
      else if (c < 1e6)
        s(6, 3, a), s(c, 21, a);
      else
        throw new RangeError("ECI assignment value out of range");
      return new l(l.Mode.ECI, 0, a);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(c) {
      return l.NUMERIC_REGEX.test(c);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(c) {
      return l.ALPHANUMERIC_REGEX.test(c);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(c, a) {
      let f = 0;
      for (const h of c) {
        const g = h.mode.numCharCountBits(a);
        if (h.numChars >= 1 << g)
          return 1 / 0;
        f += 4 + g + h.bitData.length;
      }
      return f;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(c) {
      c = encodeURI(c);
      const a = [];
      for (let f = 0; f < c.length; f++)
        c.charAt(f) != "%" ? a.push(c.charCodeAt(f)) : (a.push(parseInt(c.substring(f + 1, f + 3), 16)), f += 2);
      return a;
    }
  };
  /*-- Constants --*/
  // Describes precisely all strings that are encodable in numeric mode.
  se(l, "NUMERIC_REGEX", /^[0-9]*$/), // Describes precisely all strings that are encodable in alphanumeric mode.
  se(l, "ALPHANUMERIC_REGEX", /^[A-Z0-9 $%*+./:-]*$/), // The set of all legal characters in alphanumeric mode,
  // where each character value maps to the index in the string.
  se(l, "ALPHANUMERIC_CHARSET", "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
  let o = l;
  e.QrSegment = o;
})(Et || (Et = {}));
((e) => {
  ((t) => {
    const n = class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(o, i) {
        this.ordinal = o, this.formatBits = i;
      }
    };
    /*-- Constants --*/
    se(n, "LOW", new n(0, 1)), // The QR Code can tolerate about  7% erroneous codewords
    se(n, "MEDIUM", new n(1, 0)), // The QR Code can tolerate about 15% erroneous codewords
    se(n, "QUARTILE", new n(2, 3)), // The QR Code can tolerate about 25% erroneous codewords
    se(n, "HIGH", new n(3, 2));
    let s = n;
    t.Ecc = s;
  })(e.QrCode || (e.QrCode = {}));
})(Et || (Et = {}));
((e) => {
  ((t) => {
    const n = class n {
      /*-- Constructor and fields --*/
      constructor(o, i) {
        this.modeBits = o, this.numBitsCharCount = i;
      }
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(o) {
        return this.numBitsCharCount[Math.floor((o + 7) / 17)];
      }
    };
    /*-- Constants --*/
    se(n, "NUMERIC", new n(1, [10, 12, 14])), se(n, "ALPHANUMERIC", new n(2, [9, 11, 13])), se(n, "BYTE", new n(4, [8, 16, 16])), se(n, "KANJI", new n(8, [8, 10, 12])), se(n, "ECI", new n(7, [0, 0, 0]));
    let s = n;
    t.Mode = s;
  })(e.QrSegment || (e.QrSegment = {}));
})(Et || (Et = {}));
const ud = (e, t) => {
  t.width = e.size, t.height = e.size;
  const s = t.getContext("2d");
  for (let n = 0; n < e.size; n++)
    for (let r = 0; r < e.size; r++)
      s.fillStyle = e.getModule(r, n) ? "#000" : "#fff", s.fillRect(r, n, 1, 1);
}, fd = {
  class: "qr",
  "data-testid": "qr"
}, dd = /* @__PURE__ */ fe({
  __name: "QrCode",
  props: {
    ul: {}
  },
  setup(e) {
    const t = e, s = He(Ne), n = Rt();
    return $t(
      [() => t.ul.toString(), n],
      ([r, o]) => {
        if (o) {
          const i = Et.QrCode, l = i.encodeText(r, i.Ecc.LOW);
          ud(l, o);
        }
      },
      { immediate: !0 }
    ), (r, o) => (V(), Q(ne, null, [
      P("h2", null, X(F(s)("qr_code_title")), 1),
      P("div", fd, [
        P("canvas", {
          ref_key: "canvas",
          ref: n
        }, null, 512),
        o[0] || (o[0] = P("div", {
          role: "img",
          class: "logo",
          "aria-label": '{{ t("qr_code_label") }}'
        }, null, -1))
      ])
    ], 64));
  }
}), hd = /* @__PURE__ */ fe({
  __name: "CreatedSection",
  props: {
    sameDeviceUl: {},
    crossDeviceUl: {},
    sessionType: {}
  },
  emits: ["choice"],
  setup(e, { emit: t }) {
    const s = t, n = (r) => s("choice", r);
    return (r, o) => (V(), Q(ne, null, [
      e.sessionType === "same_device" ? (V(), Te(cd, {
        key: 0,
        ul: e.sameDeviceUl,
        onChoice: n
      }, null, 8, ["ul"])) : ue("", !0),
      e.sessionType === "cross_device" ? (V(), Te(dd, {
        key: 1,
        ul: e.crossDeviceUl
      }, null, 8, ["ul"])) : ue("", !0)
    ], 64));
  }
}), pd = { class: "text" }, md = { "data-testid": "expired_header" }, gd = { "data-testid": "failed_header" }, yd = { "data-testid": "cancelled_header" }, bd = { "data-testid": "network_header" }, wd = /* @__PURE__ */ fe({
  __name: "ErrorSection",
  props: {
    errorType: {},
    helpBaseUrl: {}
  },
  setup(e) {
    const t = He(Ne);
    return (s, n) => (V(), Q(ne, null, [
      n[0] || (n[0] = P("svg", {
        class: "status",
        width: "24",
        height: "24",
        fill: "currentColor"
      }, [
        P("path", { d: "m13 8.2-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2" })
      ], -1)),
      P("section", pd, [
        e.errorType === "expired" ? (V(), Q(ne, { key: 0 }, [
          P("h2", md, X(F(t)("expired_title")), 1),
          P("p", null, X(F(t)("expired_body")), 1)
        ], 64)) : e.errorType === "failed" ? (V(), Q(ne, { key: 1 }, [
          P("h2", gd, X(F(t)("failed_title")), 1),
          P("p", null, X(F(t)("failed_body")), 1)
        ], 64)) : e.errorType === "cancelled" ? (V(), Q(ne, { key: 2 }, [
          P("h2", yd, X(F(t)("cancelled_title")), 1),
          P("p", null, X(F(t)("cancelled_body")), 1)
        ], 64)) : e.errorType === "network" ? (V(), Q(ne, { key: 3 }, [
          P("h2", bd, X(F(t)("network_title")), 1),
          P("p", null, X(F(t)("network_body")), 1)
        ], 64)) : ue("", !0)
      ]),
      ce(Di, { helpBaseUrl: e.helpBaseUrl }, null, 8, ["helpBaseUrl"])
    ], 64));
  }
}), Ad = {
  class: "website",
  "data-testid": "website_link"
}, Cd = ["href"], Rd = /* @__PURE__ */ fe({
  __name: "HelpSection",
  props: {
    helpBaseUrl: {}
  },
  setup(e) {
    const t = e, s = new URL("/deeplink", t.helpBaseUrl).toString(), n = He(Ne);
    return (r, o) => (V(), Q("section", Ad, [
      P("p", null, X(F(n)("help_title")), 1),
      P("p", null, [
        P("a", {
          href: F(s),
          class: "link"
        }, [
          o[0] || (o[0] = P("svg", {
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            P("path", { d: "M6.4 18.5 5 17.1l9.6-9.6H6v-2h12v12h-2V8.9z" })
          ], -1)),
          P("span", null, X(F(n)("help_to_website")), 1)
        ], 8, Cd)
      ])
    ]));
  }
}), vd = { "data-testid": "in_progress" }, Ed = /* @__PURE__ */ fe({
  __name: "InProgressSection",
  setup(e) {
    const t = He(Ne);
    return (s, n) => (V(), Q(ne, null, [
      n[0] || (n[0] = P("svg", {
        class: "status",
        width: "24",
        height: "24",
        fill: "currentColor"
      }, [
        P("path", { d: "M9.657 11.543v4.628h1.414V9.1H4v1.414h4.686L3 16.2l1 1z" }),
        P("path", { d: "M9 1h10c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-3h2v2h10V4H9v2H7V3c0-1.1.9-2 2-2" })
      ], -1)),
      P("h2", vd, X(F(t)("in_progress_title")), 1)
    ], 64));
  }
}), ji = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, Sd = {}, Md = {
  class: "loading-indicator",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
};
function xd(e, t) {
  return V(), Q("svg", Md, [...t[0] || (t[0] = [
    P("circle", {
      cx: "50",
      cy: "50",
      r: "45"
    }, null, -1)
  ])]);
}
const Td = /* @__PURE__ */ ji(Sd, [["render", xd]]), Id = {
  "data-testid": "loading",
  class: "text"
}, Pd = /* @__PURE__ */ fe({
  __name: "LoadingSection",
  setup(e) {
    const t = He(Ne);
    return (s, n) => (V(), Q(ne, null, [
      P("section", Id, [
        P("h2", null, X(F(t)("loading_title")), 1),
        P("p", null, X(F(t)("loading_body")), 1)
      ]),
      ce(Td)
    ], 64));
  }
}), Od = {
  class: "text",
  "data-testid": "success_same_device"
}, kd = {
  class: "text",
  "data-testid": "success_cross_device"
}, Nd = /* @__PURE__ */ fe({
  __name: "SuccessSection",
  props: {
    sessionType: {}
  },
  setup(e) {
    const t = He(Ne);
    return (s, n) => e.sessionType === "same_device" ? (V(), Q(ne, { key: 0 }, [
      n[0] || (n[0] = P("svg", {
        class: "status",
        width: "24",
        height: "24",
        fill: "currentColor"
      }, [
        P("path", { d: "m14 8.5-1-1-6 6-2-2-1 1 2 2 1 1 1-1zM18 1H8c-1.1 0-2 .9-2 2v3h2V4h10v16H8v-2H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2" })
      ], -1)),
      P("section", Od, [
        P("h2", null, X(F(t)("success_title")), 1),
        P("p", null, X(F(t)("success_body")), 1)
      ])
    ], 64)) : (V(), Q(ne, { key: 1 }, [
      n[1] || (n[1] = P("svg", {
        class: "status",
        width: "72",
        height: "72",
        fill: "currentColor"
      }, [
        P("path", { d: "M36 0C16.118 0 0 16.118 0 36s16.118 36 36 36 36-16.118 36-36S55.882 0 36 0m7.598 29.6 1.4 1.4-12 12-5.6-5.6 1.4-1.4 4.2 4.2z" })
      ], -1)),
      P("section", kd, [
        P("h2", null, X(F(t)("success_title")), 1)
      ])
    ], 64));
  }
}), Ui = /* @__PURE__ */ fe({
  __name: "ModalMain",
  props: {
    modalState: {},
    helpBaseUrl: {}
  },
  emits: ["choice"],
  setup(e, { emit: t }) {
    const s = t, n = Rt(null), r = (o) => s("choice", o);
    return Wn(async () => setTimeout(() => n.value && n.value.focus(), 0)), (o, i) => (V(), Q(ne, null, [
      P("main", {
        ref_key: "main",
        ref: n,
        tabindex: "0"
      }, [
        ["creating", "loading"].includes(e.modalState.kind) ? (V(), Te(Pd, { key: 0 })) : ue("", !0),
        e.modalState.kind === "created" ? (V(), Te(hd, {
          key: 1,
          "same-device-ul": e.modalState.sameDeviceUl,
          "cross-device-ul": e.modalState.crossDeviceUl,
          sessionType: e.modalState.session.sessionType,
          onChoice: r
        }, null, 8, ["same-device-ul", "cross-device-ul", "sessionType"])) : ue("", !0),
        e.modalState.kind === "in-progress" ? (V(), Te(Ed, { key: 2 })) : ue("", !0),
        e.modalState.kind === "confirm-stop" ? (V(), Te(id, {
          key: 3,
          helpBaseUrl: e.helpBaseUrl
        }, null, 8, ["helpBaseUrl"])) : ue("", !0),
        e.modalState.kind === "success" ? (V(), Te(Nd, {
          key: 4,
          sessionType: e.modalState.session.sessionType
        }, null, 8, ["sessionType"])) : ue("", !0),
        e.modalState.kind === "error" ? (V(), Te(wd, {
          key: 5,
          errorType: e.modalState.errorType,
          helpBaseUrl: e.helpBaseUrl
        }, null, 8, ["errorType", "helpBaseUrl"])) : ue("", !0)
      ], 512),
      e.modalState.kind === "created" ? (V(), Te(Rd, {
        key: 0,
        helpBaseUrl: e.helpBaseUrl
      }, null, 8, ["helpBaseUrl"])) : ue("", !0)
    ], 64));
  }
}), no = (e) => Gu(e) ? e : "failed", nr = Symbol(), Dd = (e) => {
  const t = /Mobi/.test(e), s = /Android/i.test(e), n = /iPhone/.test(e), r = /iPad/.test(e) || e.includes("Macintosh") && navigator.maxTouchPoints > 1;
  return !(t || s || n || r);
}, jd = ["aria-label"], Ud = 2e3, Ld = /* @__PURE__ */ fe({
  __name: "DynamicWalletModal",
  props: {
    usecase: {},
    startUrl: {},
    helpBaseUrl: {},
    pollIntervalInMs: { default: () => Ud }
  },
  emits: ["close", "success", "failed"],
  setup(e, { emit: t }) {
    const s = e, n = t, r = Be(nr), o = Be(tr, !1), i = Be(sr, !1), l = Rt(), u = Rt({ kind: "creating" });
    $t(u, (T) => {
      switch (T.kind) {
        case "created":
        case "in-progress": {
          c(T.session);
          break;
        }
        case "creating":
        case "loading":
        case "success":
        case "confirm-stop":
        case "error": {
          a();
          break;
        }
      }
    });
    const c = (T) => {
      l.value && a(), l.value = setTimeout(async () => await h(T), s.pollIntervalInMs);
    }, a = () => {
      l.value && clearTimeout(l.value);
    }, f = async () => {
      try {
        u.value = { kind: "creating" };
        const T = await Vu(s.startUrl, {
          usecase: s.usecase
        });
        await h({
          statusUrl: T.status_url,
          sessionType: r ? "same_device" : "cross_device",
          sessionToken: T.session_token
        });
      } catch (T) {
        u.value = {
          kind: "error",
          errorType: no(T)
          // session is undefined
        };
      }
    }, h = async (T) => {
      try {
        const C = await Wu(T.statusUrl, T.sessionType);
        switch (C.status) {
          case "CREATED":
            C.ul !== void 0 ? u.value = {
              kind: "created",
              sameDeviceUl: C.ul,
              crossDeviceUl: C.ul,
              session: T
            } : u.value = {
              kind: "error",
              errorType: "failed"
            };
            break;
          case "WAITING_FOR_RESPONSE":
            u.value = {
              kind: "in-progress",
              session: T
            };
            break;
          case "DONE":
            u.value = {
              kind: "success",
              session: T
            };
            break;
          case "EXPIRED":
            u.value = {
              kind: "error",
              errorType: "expired",
              session: T
            };
            break;
          case "CANCELLED":
            u.value = {
              kind: "error",
              errorType: "cancelled",
              session: T
            };
            break;
          case "FAILED":
            u.value = {
              kind: "error",
              errorType: "failed",
              session: T
            };
            break;
        }
      } catch (C) {
        u.value = {
          kind: "error",
          errorType: no(C),
          session: T
        };
      }
    }, g = async (T) => {
      if (u.value.kind === "created") {
        a();
        const C = {
          statusUrl: u.value.session.statusUrl,
          sessionType: T,
          sessionToken: u.value.session.sessionToken
        };
        T === "cross_device" && (u.value = {
          kind: "loading",
          session: C
        }), await h(C);
      } else
        u.value = {
          kind: "error",
          errorType: "failed",
          session: u.value.kind !== "creating" ? u.value.session : void 0
        };
    }, m = async () => {
      var T, C;
      switch (u.value.kind) {
        case "success":
          n("success", u.value.session.sessionToken, u.value.session.sessionType);
          break;
        case "error":
          n("failed", (T = u.value.session) == null ? void 0 : T.sessionToken, (C = u.value.session) == null ? void 0 : C.sessionType);
          break;
        case "creating":
        case "loading":
          n("close");
          break;
        default:
          u.value = {
            kind: "error",
            errorType: "failed",
            session: u.value.session
          };
      }
    }, b = async () => {
      if (u.value.kind === "created" || u.value.kind === "confirm-stop") {
        const T = u.value.kind;
        u.value = {
          kind: "loading",
          session: u.value.session
        }, await Hu(u.value.session.statusUrl), T === "created" ? n("close") : await h(u.value.session);
      } else
        u.value = {
          kind: "error",
          errorType: "failed",
          session: u.value.kind !== "creating" ? u.value.session : void 0
        };
    }, A = async () => {
      u.value.kind === "error" ? await f() : u.value = {
        kind: "error",
        errorType: "failed",
        session: u.value.kind !== "creating" ? u.value.session : void 0
      };
    }, S = async () => {
      u.value.kind === "loading" || u.value.kind === "in-progress" ? u.value = {
        kind: "confirm-stop",
        prev: u.value,
        session: u.value.session
      } : u.value = {
        kind: "error",
        errorType: "failed",
        session: u.value.kind !== "creating" ? u.value.session : void 0
      };
    }, U = async () => {
      u.value.kind === "confirm-stop" ? (u.value = u.value.prev, u.value.kind !== "creating" && u.value.session !== void 0 ? await h(u.value.session) : u.value = {
        kind: "error",
        errorType: "failed"
        // session is undefined
      }) : u.value = {
        kind: "error",
        errorType: "failed",
        session: u.value.kind !== "creating" ? u.value.session : void 0
      };
    };
    return Wn(async () => {
      await f();
    }), Yn(a), (T, C) => (V(), Q("div", {
      class: rt(["modal-anchor", { business: F(o), over18: F(i) }])
    }, [
      P("aside", {
        "aria-modal": "true",
        role: "dialog",
        "aria-label": F(i) ? "18up" : F(o) ? "Business Wallet" : "NL Wallet",
        class: rt(["modal", [u.value.kind, u.value.kind === "success" && u.value.session.sessionType]]),
        "data-testid": "wallet_modal"
      }, [
        ce(Ni),
        ce(Ui, {
          modalState: u.value,
          helpBaseUrl: e.helpBaseUrl,
          onChoice: g
        }, null, 8, ["modalState", "helpBaseUrl"]),
        ce(ki, {
          modalState: u.value,
          onClose: m,
          onStop: b,
          onConfirm: S,
          onRetry: A,
          onBack: U
        }, null, 8, ["modalState"])
      ], 10, jd)
    ], 2));
  }
}), Bd = ["aria-label"], Fd = /* @__PURE__ */ fe({
  __name: "StaticWalletModal",
  props: {
    sameDeviceUl: {},
    crossDeviceUl: {},
    helpBaseUrl: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const s = e, n = t, r = Be(nr), o = Be(tr, !1), i = Be(sr, !1), l = Rt({
      kind: "created",
      sameDeviceUl: s.sameDeviceUl,
      crossDeviceUl: s.crossDeviceUl,
      session: {
        // TODO this statusUrl is currently unused (PVW-4365)
        statusUrl: new URL("http://status.example.com/status"),
        sessionType: r ? "same_device" : "cross_device",
        sessionToken: ""
      }
    }), u = async (c) => {
      l.value.kind === "created" ? l.value.session = {
        statusUrl: l.value.session.statusUrl,
        sessionType: c,
        sessionToken: ""
      } : l.value = {
        kind: "error",
        errorType: "failed",
        session: l.value.kind !== "creating" ? l.value.session : void 0
      };
    };
    return (c, a) => (V(), Q("div", {
      class: rt(["modal-anchor", { business: F(o), over18: F(i) }])
    }, [
      P("aside", {
        "aria-modal": "true",
        role: "dialog",
        "aria-label": F(i) ? "18up" : F(o) ? "Business Wallet" : "NL Wallet",
        class: rt(["modal", [l.value.kind, l.value.kind === "success" && l.value.session.sessionType]]),
        "data-testid": "wallet_modal"
      }, [
        ce(Ni),
        ce(Ui, {
          modalState: l.value,
          helpBaseUrl: e.helpBaseUrl,
          onChoice: u
        }, null, 8, ["modalState", "helpBaseUrl"]),
        ce(ki, {
          modalState: l.value,
          onStop: a[0] || (a[0] = (f) => n("close"))
        }, null, 8, ["modalState"])
      ], 10, Bd)
    ], 2));
  }
}), Hd = /* @__PURE__ */ fe({
  __name: "WalletModal",
  props: {
    modalType: {},
    helpBaseUrl: {}
  },
  emits: ["close", "success", "failed"],
  setup(e, { emit: t }) {
    const s = t;
    return (n, r) => (V(), Q(ne, null, [
      e.modalType.strategy === "dynamic" ? (V(), Te(Ld, {
        key: 0,
        startUrl: e.modalType.startUrl,
        usecase: e.modalType.usecase,
        helpBaseUrl: e.helpBaseUrl,
        onClose: r[0] || (r[0] = (o) => s("close")),
        onSuccess: r[1] || (r[1] = (...o) => s("success", ...o)),
        onFailed: r[2] || (r[2] = (...o) => s("failed", ...o))
      }, null, 8, ["startUrl", "usecase", "helpBaseUrl"])) : ue("", !0),
      e.modalType.strategy === "static" ? (V(), Te(Fd, {
        key: 1,
        sameDeviceUl: e.modalType.sameDeviceUl,
        crossDeviceUl: e.modalType.crossDeviceUl,
        helpBaseUrl: e.helpBaseUrl,
        onClose: r[3] || (r[3] = (o) => s("close"))
      }, null, 8, ["sameDeviceUl", "crossDeviceUl", "helpBaseUrl"])) : ue("", !0)
    ], 64));
  }
}), Vd = "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", Wd = "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", Yd = ["content"], Gd = ["aria-hidden"], Kd = { part: "button-span" }, Xd = /* @__PURE__ */ fe({
  __name: "WalletButton.ce",
  props: {
    usecase: { type: String },
    startUrl: { default: () => new URL(document.location.href), type: null },
    sameDeviceUl: { type: null },
    crossDeviceUl: { type: null },
    text: { type: String },
    lang: { default: () => "nl", type: String },
    helpBaseUrl: { default: () => new URL("http://example.com/"), type: null },
    business: { type: [Boolean, String] },
    over18: { type: [Boolean, String] },
    id: { type: String },
    class: { type: String }
  },
  emits: ["success", "failed"],
  setup(e, { emit: t }) {
    const s = e, n = Cs(() => s.business !== void 0 && s.business !== !1), r = Cs(() => s.over18 !== void 0 && s.over18 !== !1), o = Cs(
      () => s.text ?? so(s.lang, n.value, r.value)("wallet_button_text")
    ), i = t, l = s.usecase ? { strategy: "dynamic", usecase: s.usecase, startUrl: s.startUrl } : { strategy: "static", sameDeviceUl: s.sameDeviceUl, crossDeviceUl: s.crossDeviceUl }, u = Rt(!1), c = Rt(null), a = !Dd(window.navigator.userAgent), f = (A, S) => {
      g(), i("success", A, S);
    }, h = (A, S) => {
      g(), i("failed", A, S);
    }, g = () => {
      u.value = !1, c.value && c.value.focus();
    };
    Kt(nr, a), Kt(Ne, so(s.lang, n.value, r.value)), Kt(tr, n.value), Kt(sr, r.value);
    const m = "0.6.0-dev", b = new CSSStyleSheet();
    return b.replaceSync(`@font-face {
  font-family: "RO Sans";
  font-weight: normal;
  font-style: normal;
  src: url(data:application/font-woff2;charset=utf-8;base64,${Vd}) format('woff2');
}

@font-face {
  font-family: "RO Sans";
  font-weight: bold;
  font-style: normal;
  src: url(data:application/font-woff2;charset=utf-8;base64,${Wd}) format('woff2');
}`), document.adoptedStyleSheets = [...document.adoptedStyleSheets, b], (A, S) => (V(), Q(ne, null, [
      P("meta", {
        itemprop: "version",
        content: F(m)
      }, null, 8, Yd),
      P("button", {
        part: "button",
        type: "button",
        class: "nl-wallet-button",
        ref_key: "button",
        ref: c,
        "aria-hidden": u.value,
        onClick: S[0] || (S[0] = (U) => u.value = !0),
        "data-testid": "wallet_button"
      }, [
        P("span", Kd, X(o.value), 1)
      ], 8, Gd),
      u.value ? (V(), Te(Hd, {
        key: 0,
        modalType: F(l),
        helpBaseUrl: e.helpBaseUrl,
        onClose: g,
        onSuccess: f,
        onFailed: h
      }, null, 8, ["modalType", "helpBaseUrl"])) : ue("", !0)
    ], 64));
  }
}), zd = '*:not(style,svg,path,circle){all:revert;box-sizing:border-box;margin:0}.modal-anchor *:before,.modal-anchor *:after{box-sizing:border-box}.modal-anchor input,.modal-anchor button{font:inherit}.modal-anchor p,.modal-anchor h1,.modal-anchor h2,.modal-anchor h3,.modal-anchor h4,.modal-anchor h5,.modal-anchor h6{overflow-wrap:break-word}.modal-anchor{--primary-color: #383ede;--primary-hover: #0c1195;--secondary-hover: #f3f3f3;--text-color: #152a62;--success-color: #3d8540;--error-color: #ab0065;--error-hover: #750045;--spacer-color: #e8eaef;--overlay-color: rgba(0, 0, 0, .6);font-style:normal;position:fixed;top:0;left:0;display:block;align-content:center;overflow:auto;width:100%;height:100%;background-color:var(--overlay-color);padding:2rem 1rem;z-index:1045;overscroll-behavior:contain}.modal h1{font-size:1rem;font-weight:700;line-height:1.5;letter-spacing:.15px}.modal h2{font-size:1.25rem;font-weight:700;line-height:1.5;letter-spacing:.15px}.modal p{line-height:1.5rem;letter-spacing:.5px}.modal a{color:var(--primary-color);font-weight:700;text-decoration:none}.modal .button{display:flex;align-items:center;justify-content:center;gap:.75rem;border:none;color:#fff;font-weight:700;line-height:1.25rem;letter-spacing:.0625rem;border-radius:.75rem;padding:1rem 1.5rem;width:100%;cursor:pointer}.modal .button.primary{background-color:var(--primary-color);border:1px solid var(--primary-color);color:#fff}.modal .button.primary:hover{background-color:var(--primary-hover);border:1px solid var(--primary-hover)}.modal .button.secondary{background-color:#fff;color:var(--primary-color);border:1px solid var(--primary-color)}.modal .button.secondary:hover{background-color:var(--secondary-hover);color:var(--primary-hover);border:1px solid var(--primary-hover)}.modal .button.error{background-color:var(--error-color);border:1px solid var(--error-color);color:#fff}.modal .button.error:hover{background-color:var(--error-hover);border:1px solid var(--error-hover)}.modal .button:disabled,.modal .button.disabled{color:var(--secondary-hover);border-color:var(--secondary-hover);cursor:not-allowed;pointer-events:none;text-decoration:none}.modal .link{display:flex;width:-moz-fit-content;width:fit-content;gap:.75rem;margin:.25rem 0;color:var(--primary-color);letter-spacing:.0625rem;cursor:pointer}.modal .button.link{width:100%;background-color:#fff;border:1px solid white;margin:0}.modal .link:hover{text-decoration:underline;color:var(--primary-hover)}.modal .button.link:hover{background-color:var(--secondary-hover);border:1px solid var(--secondary-hover);color:var(--primary-hover);text-decoration:none}.modal{display:flex;flex-direction:column;margin:auto;width:100%;max-width:31.25rem;z-index:1050;text-align:center;color:var(--text-color);background-color:#fff;border-radius:.5rem;font-family:RO Sans,sans-serif;font-feature-settings:"clig" off,"liga" off;font-style:normal;font-weight:400;overflow:hidden}.modal header{display:flex;justify-content:center;align-items:center;border-bottom:1px solid var(--spacer-color);height:4rem;padding:.75rem 1.5rem}.modal main{display:flex;flex-grow:1;flex-direction:column;justify-content:center;gap:1.5rem;padding:2rem 1.5rem}.modal main:focus{outline:none}.modal.creating main,.modal.created main,.modal.loading main,.modal.in-progress main{justify-content:normal}.modal.created .buttons{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.75rem;width:100%}.modal.in-progress main{gap:1rem}.modal.creating main,.modal.created main,.modal.loading main,.modal.in-progress main,.modal.success.cross_device main{align-items:center;text-align:center}.modal.confirm-stop main,.modal.error main,.modal.success.same_device main{text-align:left;gap:1.5rem}.modal.in-progress svg.status,.modal.success.same_device svg.status{color:var(--primary-color)}.modal.error svg.status{color:var(--error-color)}.modal.success svg.status{color:var(--success-color)}.modal footer{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:1rem;border-top:1px solid var(--spacer-color)}.modal.created footer .button,.modal.success.cross_device footer .button{border-radius:0;padding:1.5rem}.modal.creating footer,.modal.loading footer,.modal.in-progress footer,.modal.confirm-stop footer,.modal.error footer,.modal.success.same_device footer{padding:1.5rem;gap:.75rem}.modal div.qr{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;justify-items:center;align-items:center;width:100%}.modal div.qr canvas{grid-area:1 / 1;max-width:17.5rem;width:100%;image-rendering:crisp-edges;image-rendering:pixelated}.modal div.qr div.logo{grid-area:1 / 1;height:100%;width:100%;content:" ";background:url(data:image/png;base64,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) transparent no-repeat center center / auto 4rem;z-index:1055}.modal section.website{display:flex;flex-direction:column;align-items:center;gap:.75rem;padding:1.5rem 1rem}.modal section.text{display:flex;flex-direction:column;gap:.5rem}svg.loading-indicator{animation:2s linear infinite svg-animation;padding:1rem;width:44px;max-width:6.25rem}@keyframes svg-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}svg.loading-indicator circle{animation:1.4s ease-in-out infinite both circle-animation;display:block;fill:transparent;stroke:var(--primary-color);stroke-dasharray:283;stroke-dashoffset:280;stroke-width:10px;transform-origin:50% 50%}@keyframes circle-animation{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}to{stroke-dashoffset:280;transform:rotate(360deg)}}.modal-anchor.business{--primary-color: #aa418c;--primary-hover: #7a2e65}.modal-anchor.business .modal div.qr div.logo{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjYwLjIzNSIgaGVpZ2h0PSI2MC4yMzUiIHg9IjUuODgyIiB5PSI1Ljg4MiIgZmlsbD0ibm9uZSIgcng9IjExLjQ3MSIgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2ZpbGw6I2ZmZjtmaWxsLW9wYWNpdHk6MDtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6MTEuNzY0NztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpiZXZlbDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIiBzdHlsZT0iZGlzcGxheTppbmxpbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiPjxwYXRoIGZpbGw9IiNmYWYwZjciIGQ9Ik0wIDE1LjM2QzAgNi44NzcgNi44NzcgMCAxNS4zNiAwaDMzLjI4QzU3LjEyMyAwIDY0IDYuODc3IDY0IDE1LjM2djMzLjI4QzY0IDU3LjEyMyA1Ny4xMjMgNjQgNDguNjQgNjRIMTUuMzZDNi44NzcgNjQgMCA1Ny4xMjMgMCA0OC42NFoiLz48ZyBmaWx0ZXI9InVybCgjYikiPjxwYXRoIGZpbGw9InVybCgjYykiIGQ9Ik0xMi44IDI2Ljg1OWMwLTIuODY4IDAtNC4zMDIuNTU4LTUuMzk3YTUuMTIgNS4xMiAwIDAgMSAyLjIzNy0yLjIzOGMxLjA5Ni0uNTU4IDIuNTMtLjU1OCA1LjM5Ny0uNTU4aDIyLjAxNmMyLjg2NyAwIDQuMyAwIDUuMzk2LjU1OGE1LjEyIDUuMTIgMCAwIDEgMi4yMzggMi4yMzhjLjU1OCAxLjA5NS41NTggMi41MjkuNTU4IDUuMzk3djEwLjQ5NWMwIDIuODY4IDAgNC4zMDItLjU1OCA1LjM5N2E1LjEyIDUuMTIgMCAwIDEtMi4yMzggMi4yMzdjLTEuMDk1LjU1OC0yLjUyOS41NTgtNS4zOTYuNTU4SDIwLjk5MmMtMi44NjggMC00LjMwMSAwLTUuMzk3LS41NThhNS4xMiA1LjEyIDAgMCAxLTIuMjM3LTIuMjM3Yy0uNTU4LTEuMDk1LS41NTgtMi41My0uNTU4LTUuMzk3WiIgc3R5bGU9ImZpbGw6dXJsKCNjKSIvPjxwYXRoIGZpbGw9IiNhYTQxOGMiIGZpbGwtb3BhY2l0eT0iLjUiIGQ9Ik0xMi44IDI2Ljg1OWMwLTIuODY4IDAtNC4zMDIuNTU4LTUuMzk3YTUuMTIgNS4xMiAwIDAgMSAyLjIzNy0yLjIzOGMxLjA5Ni0uNTU4IDIuNTMtLjU1OCA1LjM5Ny0uNTU4aDIyLjAxNmMyLjg2NyAwIDQuMyAwIDUuMzk2LjU1OGE1LjEyIDUuMTIgMCAwIDEgMi4yMzggMi4yMzhjLjU1OCAxLjA5NS41NTggMi41MjkuNTU4IDUuMzk3djEwLjQ5NWMwIDIuODY4IDAgNC4zMDItLjU1OCA1LjM5N2E1LjEyIDUuMTIgMCAwIDEtMi4yMzggMi4yMzdjLTEuMDk1LjU1OC0yLjUyOS41NTgtNS4zOTYuNTU4SDIwLjk5MmMtMi44NjggMC00LjMwMSAwLTUuMzk3LS41NThhNS4xMiA1LjEyIDAgMCAxLTIuMjM3LTIuMjM3Yy0uNTU4LTEuMDk1LS41NTgtMi41My0uNTU4LTUuMzk3WiIvPjwvZz48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS4yMiAxOC42NjdoOC45NjRsMi41MzcgNi45NzJjLjYyIDEuNy45MjkgMi41NTEuNTkzIDMuMjcycy0xLjE4NyAxLjAzLTIuODg4IDEuNjVsLS42OTguMjU0Yy0xLjcwMS42MTktMi41NTIuOTI4LTMuMjczLjU5Mi0uNzItLjMzNi0xLjAzLTEuMTg2LTEuNjUtMi44ODd6bTcuODk3IDkuNDIzYTEuNDA0IDEuNDA0IDAgMSAwLS45Ni0yLjYzOCAxLjQwNCAxLjQwNCAwIDAgMCAuOTYgMi42MzgiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIxMy45NyIgeDI9IjU1LjU0MyIgeTE9IjE4LjY2NiIgeTI9IjMxLjgyMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNhYTQxOGMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjMDYwYTAiLz48L2xpbmVhckdyYWRpZW50PjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGg2NHY2NEgwWiIvPjwvY2xpcFBhdGg+PGZpbHRlciBpZD0iYiIgd2lkdGg9IjUzLjQiIGhlaWdodD0iNDEuODgiIHg9IjYuNTUiIHk9IjE0LjY2NiIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImhhcmRBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPjxmZU9mZnNldCBkeD0iMS4yNSIgZHk9IjMuNSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMuNzUiLz48ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC42NjcgMCAwIDAgMCAwLjI1NSAwIDAgMCAwIDAuNTQ5IDAgMCAwIDEgMCIvPjxmZUJsZW5kIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18yMTcwM18yNjIyIi8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzIxNzAzXzI2MjIiIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48L2RlZnM+PC9zdmc+)}.modal-anchor.over18{--primary-color: #5352e9;--primary-hover: #3a39c4}.modal-anchor.over18 .modal div.qr div.logo{background-image:url(data:image/png;base64,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)}', Zd = /* @__PURE__ */ ji(Xd, [["styles", [zd]]]), Jd = /* @__PURE__ */ ec(Zd);
customElements.define("nl-wallet-button", Jd);


/* ===== WalletConnectButton.js ===== */
// Credentials cache for storing fetched credentials
const credentialsCache = new Map();

class WalletConnectButton {
  constructor(options = {}) {
    this.clientId = options.clientId;
    this.onSuccess = options.onSuccess || (() => {});
    this.apiKey = options.apiKey;
    this.issuance = options.issuance || false;
    this.business = options.business || false;
    this.over18 = options.over18 || false;
    this.useLocalWcServer = options.useLocalWcServer || false;
    this.walletConnectHost = this.getDefaultHost();
    this.buttonText = options.buttonText || "Connect Wallet";
    this.lang = options.lang || "nl";
    this.helpBaseUrl = options.helpBaseUrl;
    
    this.loading = false;
    this.error = null;
    this.searchParams = new URLSearchParams(window.location.search);
    
    this.buttonElement = null;
    this.container = null;
    
    // Bind methods
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleFailed = this.handleFailed.bind(this);
    this.handlePopState = this.handlePopState.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    
    // Listen for URL changes
    window.addEventListener('popstate', this.handlePopState);
  }

  getDefaultHost() {
    // If useLocalWcServer is set, use local server
    if (this.useLocalWcServer) {
      if (this.business) {
        return this.issuance ? 'http://localhost:5017' : 'http://bw.localhost:5021';
      }

      return this.issuance ? 'http://localhost:5007' : 'http://localhost:5021';
    }

    // Otherwise use remote servers
    if (this.business) {
      return this.issuance ? 'https://bw.issuance.wallet-connect.eu' : 'https://bw.wallet-connect.eu';
    }

    return this.issuance ? 'https://issuance.wallet-connect.eu' : 'https://wallet-connect.eu';
  }

  // URL search params management
  setSearchParams(params) {
    const url = new URL(window.location.href);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    window.history.replaceState({}, '', url.toString());
    this.searchParams = new URLSearchParams(url.search);
  }

  removeSearchParam(paramName) {
    const url = new URL(window.location.href);
    url.searchParams.delete(paramName);
    window.history.replaceState({}, '', url.toString());
    this.searchParams = new URLSearchParams(url.search);
  }

  handlePopState() {
    this.searchParams = new URLSearchParams(window.location.search);
    this.checkForSessionToken();
  }

  async loadWebComponent() {
    try {
      // nl-wallet-web.js is already included above
      if (this.buttonElement) {
        this.buttonElement.addEventListener("success", this.handleSuccess);
        this.buttonElement.addEventListener("failed", this.handleFailed);
        this.buttonElement.addEventListener("click", this.handleButtonClick);
      }
    } catch (error) {
      console.warn('Could not load nl-wallet-web.js:', error);
    }
  }

  handleSuccess(e) {
    if (e.detail && e.detail.length > 1) {
      const session_token = e.detail[0];
      const session_type = e.detail[1];

      // this only works for cross_device without a configured return URL
      if (session_type === "cross_device") {
        this.setSearchParams({ session_token });
        // Trigger the check for session token after setting it
        this.checkForSessionToken();
      }
    }
    console.log("Success event received:", e.detail);
  }

  handleFailed(e) {
    console.log("Failed event received:", e.detail);
  }

  async fetchRequestedCredentials() {
    if (!this.apiKey || !this.clientId) return [];
    
    const cacheKey = `${this.clientId}-${this.walletConnectHost || "default"}`;
    
    // Check if we already have data in cache
    const cached = credentialsCache.get(cacheKey);
    if (cached?.data) {
      return cached.data;
    }
    
    // Check if there's already a request in progress
    if (cached?.promise) {
      return await cached.promise;
    }
    
    const fetchPromise = (async () => {
      try {
        const baseUrl = this.walletConnectHost || "https://wallet-connect.eu";
        const url = `${baseUrl}/api/client/${this.clientId}/requested-credentials`;
        const headers = { 'Authorization': `Bearer ${this.apiKey}` };
        
        const response = await fetch(url, { method: 'GET', headers });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const responseData = await response.json();
        
        // Extract credentials from the response
        const credentials = responseData?.data?.requestedCredentials || [];
        
        // Cache the result
        credentialsCache.set(cacheKey, { data: credentials });
        return credentials;
      } catch (error) {
        // Remove failed request from cache
        credentialsCache.delete(cacheKey);
        throw error;
      }
    })();
    
    // Cache the promise to prevent duplicate requests
    credentialsCache.set(cacheKey, { promise: fetchPromise });
    
    return await fetchPromise;
  }

  injectCredentialsIntoShadowDOM(credentials, retryCount = 0) {
    const maxRetries = 10;
    const walletButton = this.buttonElement;
    
    if (!walletButton || !walletButton.shadowRoot) {
      return;
    }

    // Remove any existing credential info
    const existingCredentials = walletButton.shadowRoot.querySelector('.required-credentials');
    if (existingCredentials) {
      existingCredentials.remove();
    }

    if (credentials.length === 0) return;

    // Look for the modal and website section
    const modal = walletButton.shadowRoot.querySelector('.modal');
    if (!modal) {
      // Retry if modal not found yet
      if (retryCount < maxRetries) {
        setTimeout(() => {
          this.injectCredentialsIntoShadowDOM(credentials, retryCount + 1);
        }, 400);
        return;
      }
      return;
    }

    const websiteSection = modal.querySelector('.website');

    // Determine language and translations
    const isNL = this.lang === 'nl';
    const headerText = isNL ? 'Benodigde Attestaties:' : 'Required Credentials:';
    const getLinkText = isNL ? '→ Verkrijg attestatie' : '→ Get credential';

    // Create credential info element
    const credentialsDiv = document.createElement('div');
    credentialsDiv.className = 'required-credentials';
    credentialsDiv.innerHTML = `
      <div style="
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 6px;
        padding: 12px;
        font-family: inherit;
        font-size: 13px;
        line-height: 1.4;
      ">
        <div style="margin: 0 0 8px 0; color: #212529; font-size: 14px; font-weight: 600;">${headerText}</div>
        ${credentials.map(credential => {
          const credentialName = isNL ? credential.credentialName.nl : credential.credentialName.en;
          return `
            <div style="margin-bottom: 6px; display: flex; align-items: center; flex-wrap: wrap; gap: 8px;">
              <span style="color: #495057; font-weight: 500;">${credentialName}</span>
              ${credential.websiteUrl ? `
                <a href="${credential.websiteUrl}" target="_blank" rel="noopener noreferrer" style="
                  color: #0066cc;
                  text-decoration: none;
                  font-size: 12px;
                  white-space: nowrap;
                ">${getLinkText}</a>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Insert the credentials div after the website section
    if (websiteSection) {
      websiteSection.insertAdjacentElement('afterend', credentialsDiv);
    } else {
      // Fallback: insert at the beginning of modal
      modal.insertBefore(credentialsDiv, modal.firstChild);
    }
  }

  async handleButtonClick(event) {
    try {
      const credentials = await this.fetchRequestedCredentials();
      
      if (credentials && credentials.length > 0) {
        // Inject credentials into the shadow DOM with multiple attempts
        setTimeout(() => {
          this.injectCredentialsIntoShadowDOM(credentials);
        }, 400);
      }
    } catch (error) {
      console.error('Failed to fetch credentials:', error);
    }
  }

  async fetchDisclosedAttributes(sessionToken, nonce = null) {
    this.setLoading(true);
    
    const host = this.apiKey ? this.walletConnectHost || "https://wallet-connect.eu" : "";
    let url = `${host}/api/disclosed-attributes?session_token=${sessionToken}&client_id=${this.clientId}`;
    if (nonce) url = `${url}&nonce=${nonce}`;

    const headers = this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {};

    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      console.log("Disclosed attributes:", data);
      this.onSuccess(data);
      this.removeSearchParam('session_token');
      this.removeSearchParam('nonce');
      // Small delay to allow the success handler to execute before clearing loading
      setTimeout(() => {
        this.setLoading(false);
      }, 100);
    } catch (error) {
      console.log(error.message);
      this.setError(error.message);
      // Remove query params even when request fails
      this.removeSearchParam('session_token');
      this.removeSearchParam('nonce');
      this.setLoading(false);
    }
  }

  checkForSessionToken() {
    const sessionToken = this.searchParams.get("session_token");
    const nonce = this.searchParams.get("nonce");

    if (sessionToken) {
      this.fetchDisclosedAttributes(sessionToken, nonce);
    }
  }

  setLoading(loading) {
    this.loading = loading;
    this.render();
  }

  setError(error) {
    this.error = error;
    this.render();
  }

  constructURI(session_type) {
    let request_uri = `${this.walletConnectHost}/disclosure/${this.clientId}/request_uri?session_type=${session_type}`;
    let request_uri_method = "post";
    let client_id_uri = `x509_san_dns:${new URL(this.walletConnectHost).hostname}`;

    const deepLinkScheme = this.business
      ? 'businesswalletdebuginteraction://wallet.kvk.rijksoverheid.nl'
      : 'walletdebuginteraction://wallet.edi.rijksoverheid.nl';

    return `${deepLinkScheme}/disclosure_based_issuance?request_uri=${encodeURIComponent(
      request_uri
    )}&request_uri_method=${request_uri_method}&client_id=${client_id_uri}`;
  }

  render() {
    if (!this.container) return;

    if (this.loading) {
      this.container.innerHTML = `
        <div class="attributes">
          <div class="verification-card">
            <h2>Checking attributes...</h2>
            <p>Please wait while we verify your attributes.</p>
          </div>
        </div>
      `;
      return;
    }

    if (this.error) {
      this.container.innerHTML = `
        <div class="attributes">
          <div class="verification-card">
            <h2>Error</h2>
            <p>An error occurred while verifying your attributes: ${this.error}</p>
          </div>
        </div>
      `;
      return;
    }

    const startHost = this.apiKey ? this.walletConnectHost : "";
    const startUrl = `${startHost}/api/create-session?lang=en&return_url=${encodeURIComponent(window.location.href)}`;
    
    const helpBaseUrlAttr = this.helpBaseUrl ? ` help-base-url="${this.helpBaseUrl}"` : '';
    const businessAttr = this.business ? ' business' : '';
    const over18Attr = this.over18 ? ' over18' : '';
    const usecaseAttr = this.issuance ? '' : ` usecase="${this.clientId}"`;
    const sameDeviceUl = this.constructURI("same_device");
    const crossDeviceUl = this.constructURI("cross_device");
    
    this.container.innerHTML = `
      <nl-wallet-button
        text="${this.buttonText}"${usecaseAttr}
        start-url="${startUrl}"
        lang="${this.lang}"${helpBaseUrlAttr}${businessAttr}${over18Attr}
        same-device-ul="${sameDeviceUl}"
        cross-device-ul="${crossDeviceUl}"
      ></nl-wallet-button>
    `;

    // Re-attach event listeners after re-rendering
    this.buttonElement = this.container.querySelector('nl-wallet-button');
    if (this.buttonElement) {
      this.buttonElement.addEventListener("success", this.handleSuccess);
      this.buttonElement.addEventListener("failed", this.handleFailed);
      this.buttonElement.addEventListener("click", this.handleButtonClick);
    }
  }

  mount(containerElement) {
    this.container = containerElement;
    this.loadWebComponent();
    this.render();
    this.checkForSessionToken();
  }

  unmount() {
    if (this.buttonElement) {
      this.buttonElement.removeEventListener("success", this.handleSuccess);
      this.buttonElement.removeEventListener("failed", this.handleFailed);
      this.buttonElement.removeEventListener("click", this.handleButtonClick);
    }
    window.removeEventListener('popstate', this.handlePopState);
    
    if (this.container) {
      this.container.innerHTML = '';
    }
  }
}

// Web Component Definition
class WalletConnectButtonElement extends HTMLElement {
  constructor() {
    super();
    this.walletButton = null;
  }

  static get observedAttributes() {
    return ['clientid', 'client-id', 'apikey', 'api-key', 'use-local-wc-server', 'label', 'lang', 'helpbaseurl', 'help-base-url', 'issuance', 'business', 'over18'];
  }

  connectedCallback() {
    const isIssuance = this.hasAttribute('issuance');
    const isBusiness = this.hasAttribute('business');
    const isOver18 = this.hasAttribute('over18');
    const useLocalWcServer = this.hasAttribute('use-local-wc-server');

    // Create the wallet button instance
    this.walletButton = new WalletConnectButton({
      clientId: this.getAttribute('clientId') || this.getAttribute('clientid') || this.getAttribute('client-id'),
      apiKey: this.getAttribute('apiKey') || this.getAttribute('apikey') || this.getAttribute('api-key'),
      buttonText: this.getAttribute('label') || 'Connect Wallet',
      lang: this.getAttribute('lang') || 'nl',
      helpBaseUrl: this.getAttribute('helpBaseUrl') || this.getAttribute('helpbaseurl') || this.getAttribute('help-base-url'),
      issuance: isIssuance,
      business: isBusiness,
      over18: isOver18,
      useLocalWcServer: useLocalWcServer,
      onSuccess: (attributes) => {
        // Dispatch custom event for success
        this.dispatchEvent(new CustomEvent('success', {
          detail: attributes,
          bubbles: true
        }));
      }
    });

    // Override the original handleFailed to dispatch events
    const originalHandleFailed = this.walletButton.handleFailed.bind(this.walletButton);
    this.walletButton.handleFailed = (e) => {
      originalHandleFailed(e);
      // Dispatch custom event for failure
      this.dispatchEvent(new CustomEvent('failed', {
        detail: e.detail,
        bubbles: true
      }));
    };

    // Mount the wallet button to this element
    this.walletButton.mount(this);
  }

  disconnectedCallback() {
    if (this.walletButton) {
      this.walletButton.unmount();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.walletButton && oldValue !== newValue) {
      // Update the wallet button properties when attributes change
      switch(name.toLowerCase()) {
        case 'clientid':
        case 'client-id':
          this.walletButton.clientId = newValue;
          break;
        case 'apikey':
        case 'api-key':
          this.walletButton.apiKey = newValue;
          break;
        case 'use-local-wc-server':
          this.walletButton.useLocalWcServer = this.hasAttribute('use-local-wc-server');
          this.walletButton.walletConnectHost = this.walletButton.getDefaultHost();
          break;
        case 'label':
          this.walletButton.buttonText = newValue;
          break;
        case 'lang':
          this.walletButton.lang = newValue;
          break;
        case 'helpbaseurl':
        case 'help-base-url':
          this.walletButton.helpBaseUrl = newValue;
          break;
        case 'issuance':
          this.walletButton.issuance = this.hasAttribute('issuance');
          this.walletButton.walletConnectHost = this.walletButton.getDefaultHost();
          break;
        case 'business':
          this.walletButton.business = this.hasAttribute('business');
          this.walletButton.walletConnectHost = this.walletButton.getDefaultHost();
          break;
        case 'over18':
          this.walletButton.over18 = this.hasAttribute('over18');
          break;
      }
      this.walletButton.render();
    }
  }
}

// Register the web component
customElements.define('wallet-connect-button', WalletConnectButtonElement);

