var Gr = Object.defineProperty;
var Vr = (e, t, n) => t in e ? Gr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var se = (e, t, n) => Vr(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ns(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ne = {}, Dt = [], _e = () => {
}, ci = () => !1, Dn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ps = (e) => e.startsWith("onUpdate:"), ce = Object.assign, js = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zr = Object.prototype.hasOwnProperty, J = (e, t) => Zr.call(e, t), H = Array.isArray, Ot = (e) => On(e) === "[object Map]", ui = (e) => On(e) === "[object Set]", Y = (e) => typeof e == "function", ae = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", fi = (e) => (re(e) || Y(e)) && Y(e.then) && Y(e.catch), di = Object.prototype.toString, On = (e) => di.call(e), Xr = (e) => On(e).slice(8, -1), Ln = (e) => On(e) === "[object Object]", ks = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Kt = /* @__PURE__ */ Ns(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Un = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Jr = /-\w/g, Ie = Un(
  (e) => e.replace(Jr, (t) => t.slice(1).toUpperCase())
), Kr = /\B([A-Z])/g, Le = Un(
  (e) => e.replace(Kr, "-$1").toLowerCase()
), Bn = Un((e) => e.charAt(0).toUpperCase() + e.slice(1)), _n = Un(
  (e) => e ? `on${Bn(e)}` : ""
), gt = (e, t) => !Object.is(e, t), $n = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, hi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Qr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, fo = (e) => {
  const t = ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ho;
const Fn = () => ho || (ho = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ds(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ae(s) ? el(s) : Ds(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (ae(e) || re(e))
    return e;
}
const qr = /;(?![^(]*\))/g, _r = /:([^]+)/, $r = /\/\*[^]*?\*\//g;
function el(e) {
  const t = {};
  return e.replace($r, "").split(qr).forEach((n) => {
    if (n) {
      const s = n.split(_r);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function $e(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const s = $e(e[n]);
      s && (t += s + " ");
    }
  else if (re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const tl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", nl = /* @__PURE__ */ Ns(tl);
function pi(e) {
  return !!e || e === "";
}
const gi = (e) => !!(e && e.__v_isRef === !0), G = (e) => ae(e) ? e : e == null ? "" : H(e) || re(e) && (e.toString === di || !Y(e.toString)) ? gi(e) ? G(e.value) : JSON.stringify(e, mi, 2) : String(e), mi = (e, t) => gi(t) ? mi(e, t.value) : Ot(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[es(s, i) + " =>"] = o, n),
    {}
  )
} : ui(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => es(n))
} : yt(t) ? es(t) : re(t) && !H(t) && !Ln(t) ? String(t) : t, es = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ee;
class sl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ee, !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return Ee = this, t();
      } finally {
        Ee = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ee, Ee = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ee = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ol() {
  return Ee;
}
let te;
const ts = /* @__PURE__ */ new WeakSet();
class yi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && Ee.active && Ee.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ts.has(this) && (ts.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, po(this), Ai(this);
    const t = te, n = ze;
    te = this, ze = !0;
    try {
      return this.fn();
    } finally {
      vi(this), te = t, ze = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Us(t);
      this.deps = this.depsTail = void 0, po(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ts.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ps(this) && this.run();
  }
  get dirty() {
    return ps(this);
  }
}
let bi = 0, Qt, qt;
function wi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qt, qt = e;
    return;
  }
  e.next = Qt, Qt = e;
}
function Os() {
  bi++;
}
function Ls() {
  if (--bi > 0)
    return;
  if (qt) {
    let t = qt;
    for (qt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Qt; ) {
    let t = Qt;
    for (Qt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ai(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function vi(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Us(s), il(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function ps(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Mi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Mi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === sn) || (e.globalVersion = sn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ps(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = te, s = ze;
  te = e, ze = !0;
  try {
    Ai(e);
    const o = e.fn(e._value);
    (t.version === 0 || gt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    te = n, ze = s, vi(e), e.flags &= -3;
  }
}
function Us(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Us(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function il(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ze = !0;
const Ii = [];
function lt() {
  Ii.push(ze), ze = !1;
}
function at() {
  const e = Ii.pop();
  ze = e === void 0 ? !0 : e;
}
function po(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = te;
    te = void 0;
    try {
      t();
    } finally {
      te = n;
    }
  }
}
let sn = 0;
class rl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Bs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!te || !ze || te === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== te)
      n = this.activeLink = new rl(te, this), te.deps ? (n.prevDep = te.depsTail, te.depsTail.nextDep = n, te.depsTail = n) : te.deps = te.depsTail = n, Ci(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = te.depsTail, n.nextDep = void 0, te.depsTail.nextDep = n, te.depsTail = n, te.deps === n && (te.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, sn++, this.notify(t);
  }
  notify(t) {
    Os();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ls();
    }
  }
}
function Ci(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ci(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const gs = /* @__PURE__ */ new WeakMap(), Mt = Symbol(
  ""
), ms = Symbol(
  ""
), on = Symbol(
  ""
);
function ge(e, t, n) {
  if (ze && te) {
    let s = gs.get(e);
    s || gs.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Bs()), o.map = s, o.key = n), o.track();
  }
}
function it(e, t, n, s, o, i) {
  const r = gs.get(e);
  if (!r) {
    sn++;
    return;
  }
  const a = (f) => {
    f && f.trigger();
  };
  if (Os(), t === "clear")
    r.forEach(a);
  else {
    const f = H(e), l = f && ks(n);
    if (f && n === "length") {
      const c = Number(s);
      r.forEach((u, h) => {
        (h === "length" || h === on || !yt(h) && h >= c) && a(u);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && a(r.get(n)), l && a(r.get(on)), t) {
        case "add":
          f ? l && a(r.get("length")) : (a(r.get(Mt)), Ot(e) && a(r.get(ms)));
          break;
        case "delete":
          f || (a(r.get(Mt)), Ot(e) && a(r.get(ms)));
          break;
        case "set":
          Ot(e) && a(r.get(Mt));
          break;
      }
  }
  Ls();
}
function jt(e) {
  const t = Q(e);
  return t === e ? t : (ge(t, "iterate", on), He(e) ? t : t.map(ve));
}
function Fs(e) {
  return ge(e = Q(e), "iterate", on), e;
}
const ll = {
  __proto__: null,
  [Symbol.iterator]() {
    return ns(this, Symbol.iterator, ve);
  },
  concat(...e) {
    return jt(this).concat(
      ...e.map((t) => H(t) ? jt(t) : t)
    );
  },
  entries() {
    return ns(this, "entries", (e) => (e[1] = ve(e[1]), e));
  },
  every(e, t) {
    return st(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return st(this, "filter", e, t, (n) => n.map(ve), arguments);
  },
  find(e, t) {
    return st(this, "find", e, t, ve, arguments);
  },
  findIndex(e, t) {
    return st(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return st(this, "findLast", e, t, ve, arguments);
  },
  findLastIndex(e, t) {
    return st(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return st(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ss(this, "includes", e);
  },
  indexOf(...e) {
    return ss(this, "indexOf", e);
  },
  join(e) {
    return jt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ss(this, "lastIndexOf", e);
  },
  map(e, t) {
    return st(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Vt(this, "pop");
  },
  push(...e) {
    return Vt(this, "push", e);
  },
  reduce(e, ...t) {
    return go(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return go(this, "reduceRight", e, t);
  },
  shift() {
    return Vt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return st(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Vt(this, "splice", e);
  },
  toReversed() {
    return jt(this).toReversed();
  },
  toSorted(e) {
    return jt(this).toSorted(e);
  },
  toSpliced(...e) {
    return jt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Vt(this, "unshift", e);
  },
  values() {
    return ns(this, "values", ve);
  }
};
function ns(e, t, n) {
  const s = Fs(e), o = s[t]();
  return s !== e && !He(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const al = Array.prototype;
function st(e, t, n, s, o, i) {
  const r = Fs(e), a = r !== e && !He(e), f = r[t];
  if (f !== al[t]) {
    const u = f.apply(e, i);
    return a ? ve(u) : u;
  }
  let l = n;
  r !== e && (a ? l = function(u, h) {
    return n.call(this, ve(u), h, e);
  } : n.length > 2 && (l = function(u, h) {
    return n.call(this, u, h, e);
  }));
  const c = f.call(r, l, s);
  return a && o ? o(c) : c;
}
function go(e, t, n, s) {
  const o = Fs(e);
  let i = n;
  return o !== e && (He(e) ? n.length > 3 && (i = function(r, a, f) {
    return n.call(this, r, a, f, e);
  }) : i = function(r, a, f) {
    return n.call(this, r, ve(a), f, e);
  }), o[t](i, ...s);
}
function ss(e, t, n) {
  const s = Q(e);
  ge(s, "iterate", on);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Ys(n[0]) ? (n[0] = Q(n[0]), s[t](...n)) : o;
}
function Vt(e, t, n = []) {
  lt(), Os();
  const s = Q(e)[t].apply(e, n);
  return Ls(), at(), s;
}
const cl = /* @__PURE__ */ Ns("__proto__,__v_isRef,__isVue"), Ri = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
);
function ul(e) {
  yt(e) || (e = String(e));
  const t = Q(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
class Ei {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (o ? i ? Al : Ni : i ? Ti : xi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = H(t);
    if (!o) {
      let f;
      if (r && (f = ll[n]))
        return f;
      if (n === "hasOwnProperty")
        return ul;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      be(t) ? t : s
    );
    if ((yt(n) ? Ri.has(n) : cl(n)) || (o || ge(t, "get", n), i))
      return a;
    if (be(a)) {
      const f = r && ks(n) ? a : a.value;
      return o && re(f) ? bs(f) : f;
    }
    return re(a) ? o ? bs(a) : Hs(a) : a;
  }
}
class Si extends Ei {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    if (!this._isShallow) {
      const f = Rt(i);
      if (!He(s) && !Rt(s) && (i = Q(i), s = Q(s)), !H(t) && be(i) && !be(s))
        return f || (i.value = s), !0;
    }
    const r = H(t) && ks(n) ? Number(n) < t.length : J(t, n), a = Reflect.set(
      t,
      n,
      s,
      be(t) ? t : o
    );
    return t === Q(o) && (r ? gt(s, i) && it(t, "set", n, s) : it(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = J(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && it(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!yt(n) || !Ri.has(n)) && ge(t, "has", n), s;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      H(t) ? "length" : Mt
    ), Reflect.ownKeys(t);
  }
}
class fl extends Ei {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const dl = /* @__PURE__ */ new Si(), hl = /* @__PURE__ */ new fl(), pl = /* @__PURE__ */ new Si(!0);
const ys = (e) => e, bn = (e) => Reflect.getPrototypeOf(e);
function gl(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = Q(o), r = Ot(i), a = e === "entries" || e === Symbol.iterator && r, f = e === "keys" && r, l = o[e](...s), c = n ? ys : t ? ws : ve;
    return !t && ge(
      i,
      "iterate",
      f ? ms : Mt
    ), {
      // iterator protocol
      next() {
        const { value: u, done: h } = l.next();
        return h ? { value: u, done: h } : {
          value: a ? [c(u[0]), c(u[1])] : c(u),
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
function wn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ml(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = Q(i), a = Q(o);
      e || (gt(o, a) && ge(r, "get", o), ge(r, "get", a));
      const { has: f } = bn(r), l = t ? ys : e ? ws : ve;
      if (f.call(r, o))
        return l(i.get(o));
      if (f.call(r, a))
        return l(i.get(a));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ge(Q(o), "iterate", Mt), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = Q(i), a = Q(o);
      return e || (gt(o, a) && ge(r, "has", o), ge(r, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a);
    },
    forEach(o, i) {
      const r = this, a = r.__v_raw, f = Q(a), l = t ? ys : e ? ws : ve;
      return !e && ge(f, "iterate", Mt), a.forEach((c, u) => o.call(i, l(c), l(u), r));
    }
  };
  return ce(
    n,
    e ? {
      add: wn("add"),
      set: wn("set"),
      delete: wn("delete"),
      clear: wn("clear")
    } : {
      add(o) {
        !t && !He(o) && !Rt(o) && (o = Q(o));
        const i = Q(this);
        return bn(i).has.call(i, o) || (i.add(o), it(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !He(i) && !Rt(i) && (i = Q(i));
        const r = Q(this), { has: a, get: f } = bn(r);
        let l = a.call(r, o);
        l || (o = Q(o), l = a.call(r, o));
        const c = f.call(r, o);
        return r.set(o, i), l ? gt(i, c) && it(r, "set", o, i) : it(r, "add", o, i), this;
      },
      delete(o) {
        const i = Q(this), { has: r, get: a } = bn(i);
        let f = r.call(i, o);
        f || (o = Q(o), f = r.call(i, o)), a && a.call(i, o);
        const l = i.delete(o);
        return f && it(i, "delete", o, void 0), l;
      },
      clear() {
        const o = Q(this), i = o.size !== 0, r = o.clear();
        return i && it(
          o,
          "clear",
          void 0,
          void 0
        ), r;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = gl(o, e, t);
  }), n;
}
function zs(e, t) {
  const n = ml(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    J(n, o) && o in s ? n : s,
    o,
    i
  );
}
const yl = {
  get: /* @__PURE__ */ zs(!1, !1)
}, bl = {
  get: /* @__PURE__ */ zs(!1, !0)
}, wl = {
  get: /* @__PURE__ */ zs(!0, !1)
};
const xi = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ new WeakMap(), Al = /* @__PURE__ */ new WeakMap();
function vl(e) {
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
function Ml(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vl(Xr(e));
}
function Hs(e) {
  return Rt(e) ? e : Ws(
    e,
    !1,
    dl,
    yl,
    xi
  );
}
function Il(e) {
  return Ws(
    e,
    !1,
    pl,
    bl,
    Ti
  );
}
function bs(e) {
  return Ws(
    e,
    !0,
    hl,
    wl,
    Ni
  );
}
function Ws(e, t, n, s, o) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Ml(e);
  if (i === 0)
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const a = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, a), a;
}
function _t(e) {
  return Rt(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Rt(e) {
  return !!(e && e.__v_isReadonly);
}
function He(e) {
  return !!(e && e.__v_isShallow);
}
function Ys(e) {
  return e ? !!e.__v_raw : !1;
}
function Q(e) {
  const t = e && e.__v_raw;
  return t ? Q(t) : e;
}
function Cl(e) {
  return !J(e, "__v_skip") && Object.isExtensible(e) && hi(e, "__v_skip", !0), e;
}
const ve = (e) => re(e) ? Hs(e) : e, ws = (e) => re(e) ? bs(e) : e;
function be(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function rt(e) {
  return Rl(e, !1);
}
function Rl(e, t) {
  return be(e) ? e : new El(e, t);
}
class El {
  constructor(t, n) {
    this.dep = new Bs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Q(t), this._value = n ? t : ve(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || He(t) || Rt(t);
    t = s ? t : Q(t), gt(t, n) && (this._rawValue = t, this._value = s ? t : ve(t), this.dep.trigger());
  }
}
function k(e) {
  return be(e) ? e.value : e;
}
const Sl = {
  get: (e, t, n) => t === "__v_raw" ? e : k(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return be(o) && !be(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Pi(e) {
  return _t(e) ? e : new Proxy(e, Sl);
}
class xl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Bs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = sn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    te !== this)
      return wi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Mi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Tl(e, t, n = !1) {
  let s, o;
  return Y(e) ? s = e : (s = e.get, o = e.set), new xl(s, o, n);
}
const An = {}, Sn = /* @__PURE__ */ new WeakMap();
let At;
function Nl(e, t = !1, n = At) {
  if (n) {
    let s = Sn.get(n);
    s || Sn.set(n, s = []), s.push(e);
  }
}
function Pl(e, t, n = ne) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: a, call: f } = n, l = (E) => o ? E : He(E) || o === !1 || o === 0 ? pt(E, 1) : pt(E);
  let c, u, h, m, g = !1, y = !1;
  if (be(e) ? (u = () => e.value, g = He(e)) : _t(e) ? (u = () => l(e), g = !0) : H(e) ? (y = !0, g = e.some((E) => _t(E) || He(E)), u = () => e.map((E) => {
    if (be(E))
      return E.value;
    if (_t(E))
      return l(E);
    if (Y(E))
      return f ? f(E, 2) : E();
  })) : Y(e) ? t ? u = f ? () => f(e, 2) : e : u = () => {
    if (h) {
      lt();
      try {
        h();
      } finally {
        at();
      }
    }
    const E = At;
    At = c;
    try {
      return f ? f(e, 3, [m]) : e(m);
    } finally {
      At = E;
    }
  } : u = _e, t && o) {
    const E = u, x = o === !0 ? 1 / 0 : o;
    u = () => pt(E(), x);
  }
  const A = ol(), R = () => {
    c.stop(), A && A.active && js(A.effects, c);
  };
  if (i && t) {
    const E = t;
    t = (...x) => {
      E(...x), R();
    };
  }
  let B = y ? new Array(e.length).fill(An) : An;
  const D = (E) => {
    if (!(!(c.flags & 1) || !c.dirty && !E))
      if (t) {
        const x = c.run();
        if (o || g || (y ? x.some((W, _) => gt(W, B[_])) : gt(x, B))) {
          h && h();
          const W = At;
          At = c;
          try {
            const _ = [
              x,
              // pass undefined as the old value when it's changed for the first time
              B === An ? void 0 : y && B[0] === An ? [] : B,
              m
            ];
            B = x, f ? f(t, 3, _) : (
              // @ts-expect-error
              t(..._)
            );
          } finally {
            At = W;
          }
        }
      } else
        c.run();
  };
  return a && a(D), c = new yi(u), c.scheduler = r ? () => r(D, !1) : D, m = (E) => Nl(E, !1, c), h = c.onStop = () => {
    const E = Sn.get(c);
    if (E) {
      if (f)
        f(E, 4);
      else
        for (const x of E) x();
      Sn.delete(c);
    }
  }, t ? s ? D(!0) : B = c.run() : r ? r(D.bind(null, !0), !0) : c.run(), R.pause = c.pause.bind(c), R.resume = c.resume.bind(c), R.stop = R, R;
}
function pt(e, t = 1 / 0, n) {
  if (t <= 0 || !re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, be(e))
    pt(e.value, t, n);
  else if (H(e))
    for (let s = 0; s < e.length; s++)
      pt(e[s], t, n);
  else if (ui(e) || Ot(e))
    e.forEach((s) => {
      pt(s, t, n);
    });
  else if (Ln(e)) {
    for (const s in e)
      pt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && pt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function cn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    zn(o, t, n);
  }
}
function et(e, t, n, s) {
  if (Y(e)) {
    const o = cn(e, t, n, s);
    return o && fi(o) && o.catch((i) => {
      zn(i, t, n);
    }), o;
  }
  if (H(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(et(e[i], t, n, s));
    return o;
  }
}
function zn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || ne;
  if (t) {
    let a = t.parent;
    const f = t.proxy, l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, f, l) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      lt(), cn(i, null, 10, [
        e,
        f,
        l
      ]), at();
      return;
    }
  }
  jl(e, n, o, s, r);
}
function jl(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Me = [];
let Qe = -1;
const Lt = [];
let dt = null, kt = 0;
const ji = /* @__PURE__ */ Promise.resolve();
let xn = null;
function ki(e) {
  const t = xn || ji;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kl(e) {
  let t = Qe + 1, n = Me.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = Me[s], i = rn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Gs(e) {
  if (!(e.flags & 1)) {
    const t = rn(e), n = Me[Me.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rn(n) ? Me.push(e) : Me.splice(kl(t), 0, e), e.flags |= 1, Di();
  }
}
function Di() {
  xn || (xn = ji.then(Li));
}
function Dl(e) {
  H(e) ? Lt.push(...e) : dt && e.id === -1 ? dt.splice(kt + 1, 0, e) : e.flags & 1 || (Lt.push(e), e.flags |= 1), Di();
}
function mo(e, t, n = Qe + 1) {
  for (; n < Me.length; n++) {
    const s = Me[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Me.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Oi(e) {
  if (Lt.length) {
    const t = [...new Set(Lt)].sort(
      (n, s) => rn(n) - rn(s)
    );
    if (Lt.length = 0, dt) {
      dt.push(...t);
      return;
    }
    for (dt = t, kt = 0; kt < dt.length; kt++) {
      const n = dt[kt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    dt = null, kt = 0;
  }
}
const rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Li(e) {
  try {
    for (Qe = 0; Qe < Me.length; Qe++) {
      const t = Me[Qe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), cn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Qe < Me.length; Qe++) {
      const t = Me[Qe];
      t && (t.flags &= -2);
    }
    Qe = -1, Me.length = 0, Oi(), xn = null, (Me.length || Lt.length) && Li();
  }
}
let Fe = null, Ui = null;
function Tn(e) {
  const t = Fe;
  return Fe = e, Ui = e && e.type.__scopeId || null, t;
}
function Bi(e, t = Fe, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && So(-1);
    const i = Tn(t);
    let r;
    try {
      r = e(...o);
    } finally {
      Tn(i), s._d && So(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function bt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const a = o[r];
    i && (a.oldValue = i[r].value);
    let f = a.dir[s];
    f && (lt(), et(f, n, 8, [
      e.el,
      a,
      e,
      t
    ]), at());
  }
}
const Ol = Symbol("_vte"), Ll = (e) => e.__isTeleport, Ul = Symbol("_leaveCb");
function Vs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Vs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function ue(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function Fi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Nn = /* @__PURE__ */ new WeakMap();
function $t(e, t, n, s, o = !1) {
  if (H(e)) {
    e.forEach(
      (g, y) => $t(
        g,
        t && (H(t) ? t[y] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (en(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && $t(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? qs(s.component) : s.el, r = o ? null : i, { i: a, r: f } = e, l = t && t.r, c = a.refs === ne ? a.refs = {} : a.refs, u = a.setupState, h = Q(u), m = u === ne ? ci : (g) => J(h, g);
  if (l != null && l !== f) {
    if (yo(t), ae(l))
      c[l] = null, m(l) && (u[l] = null);
    else if (be(l)) {
      l.value = null;
      const g = t;
      g.k && (c[g.k] = null);
    }
  }
  if (Y(f))
    cn(f, a, 12, [r, c]);
  else {
    const g = ae(f), y = be(f);
    if (g || y) {
      const A = () => {
        if (e.f) {
          const R = g ? m(f) ? u[f] : c[f] : f.value;
          if (o)
            H(R) && js(R, i);
          else if (H(R))
            R.includes(i) || R.push(i);
          else if (g)
            c[f] = [i], m(f) && (u[f] = c[f]);
          else {
            const B = [i];
            f.value = B, e.k && (c[e.k] = B);
          }
        } else g ? (c[f] = r, m(f) && (u[f] = r)) : y && (f.value = r, e.k && (c[e.k] = r));
      };
      if (r) {
        const R = () => {
          A(), Nn.delete(e);
        };
        R.id = -1, Nn.set(e, R), Pe(R, n);
      } else
        yo(e), A();
    }
  }
}
function yo(e) {
  const t = Nn.get(e);
  t && (t.flags |= 8, Nn.delete(e));
}
Fn().requestIdleCallback;
Fn().cancelIdleCallback;
const en = (e) => !!e.type.__asyncLoader, zi = (e) => e.type.__isKeepAlive;
function Bl(e, t) {
  Hi(e, "a", t);
}
function Fl(e, t) {
  Hi(e, "da", t);
}
function Hi(e, t, n = me) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Hn(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      zi(o.parent.vnode) && zl(s, t, n, o), o = o.parent;
  }
}
function zl(e, t, n, s) {
  const o = Hn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Xs(() => {
    js(s[t], o);
  }, n);
}
function Hn(e, t, n = me, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      lt();
      const a = un(n), f = et(t, n, e, r);
      return a(), at(), f;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const ct = (e) => (t, n = me) => {
  (!an || e === "sp") && Hn(e, (...s) => t(...s), n);
}, Hl = ct("bm"), Zs = ct("m"), Wl = ct(
  "bu"
), Yl = ct("u"), Gl = ct(
  "bum"
), Xs = ct("um"), Vl = ct(
  "sp"
), Zl = ct("rtg"), Xl = ct("rtc");
function Jl(e, t = me) {
  Hn("ec", e, t);
}
const Kl = "components", Ql = Symbol.for("v-ndc");
function ql(e) {
  return ae(e) && _l(Kl, e, !1) || e;
}
function _l(e, t, n = !0, s = !1) {
  const o = Fe || me;
  if (o) {
    const i = o.type;
    {
      const a = Ha(
        i,
        !1
      );
      if (a && (a === t || a === Ie(t) || a === Bn(Ie(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      bo(o[e] || i[e], t) || // global registration
      bo(o.appContext[e], t)
    );
    return !r && s ? i : r;
  }
}
function bo(e, t) {
  return e && (e[t] || e[Ie(t)] || e[Bn(Ie(t))]);
}
const As = (e) => e ? ar(e) ? qs(e) : As(e.parent) : null, tn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => As(e.parent),
    $root: (e) => As(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Gs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ki.bind(e.proxy)),
    $watch: (e) => wa.bind(e)
  })
), os = (e, t) => e !== ne && !e.__isScriptSetup && J(e, t), $l = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: a, appContext: f } = e;
    let l;
    if (t[0] !== "$") {
      const m = r[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (os(s, t))
          return r[t] = 1, s[t];
        if (o !== ne && J(o, t))
          return r[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (l = e.propsOptions[0]) && J(l, t)
        )
          return r[t] = 3, i[t];
        if (n !== ne && J(n, t))
          return r[t] = 4, n[t];
        vs && (r[t] = 0);
      }
    }
    const c = tn[t];
    let u, h;
    if (c)
      return t === "$attrs" && ge(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ne && J(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      h = f.config.globalProperties, J(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return os(o, t) ? (o[t] = n, !0) : s !== ne && J(s, t) ? (s[t] = n, !0) : J(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: i, type: r }
  }, a) {
    let f, l;
    return !!(n[a] || e !== ne && a[0] !== "$" && J(e, a) || os(t, a) || (f = i[0]) && J(f, a) || J(s, a) || J(tn, a) || J(o.config.globalProperties, a) || (l = r.__cssModules) && l[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function wo(e) {
  return H(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let vs = !0;
function ea(e) {
  const t = Yi(e), n = e.proxy, s = e.ctx;
  vs = !1, t.beforeCreate && Ao(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: a,
    provide: f,
    inject: l,
    // lifecycle
    created: c,
    beforeMount: u,
    mounted: h,
    beforeUpdate: m,
    updated: g,
    activated: y,
    deactivated: A,
    beforeDestroy: R,
    beforeUnmount: B,
    destroyed: D,
    unmounted: E,
    render: x,
    renderTracked: W,
    renderTriggered: _,
    errorCaptured: De,
    serverPrefetch: tt,
    // public API
    expose: Ye,
    inheritAttrs: ut,
    // assets
    components: nt,
    directives: Ge,
    filters: Ue
  } = t;
  if (l && ta(l, s, null), r)
    for (const $ in r) {
      const V = r[$];
      Y(V) && (s[$] = V.bind(n));
    }
  if (o) {
    const $ = o.call(n, n);
    re($) && (e.data = Hs($));
  }
  if (vs = !0, i)
    for (const $ in i) {
      const V = i[$], Ve = Y(V) ? V.bind(n, n) : Y(V.get) ? V.get.bind(n, n) : _e, Tt = !Y(V) && Y(V.set) ? V.set.bind(n) : _e, pe = Be({
        get: Ve,
        set: Tt
      });
      Object.defineProperty(s, $, {
        enumerable: !0,
        configurable: !0,
        get: () => pe.value,
        set: (de) => pe.value = de
      });
    }
  if (a)
    for (const $ in a)
      Wi(a[$], s, n, $);
  if (f) {
    const $ = Y(f) ? f.call(n) : f;
    Reflect.ownKeys($).forEach((V) => {
      ft(V, $[V]);
    });
  }
  c && Ao(c, e, "c");
  function K($, V) {
    H(V) ? V.forEach((Ve) => $(Ve.bind(n))) : V && $(V.bind(n));
  }
  if (K(Hl, u), K(Zs, h), K(Wl, m), K(Yl, g), K(Bl, y), K(Fl, A), K(Jl, De), K(Xl, W), K(Zl, _), K(Gl, B), K(Xs, E), K(Vl, tt), H(Ye))
    if (Ye.length) {
      const $ = e.exposed || (e.exposed = {});
      Ye.forEach((V) => {
        Object.defineProperty($, V, {
          get: () => n[V],
          set: (Ve) => n[V] = Ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === _e && (e.render = x), ut != null && (e.inheritAttrs = ut), nt && (e.components = nt), Ge && (e.directives = Ge), tt && Fi(e);
}
function ta(e, t, n = _e) {
  H(e) && (e = Ms(e));
  for (const s in e) {
    const o = e[s];
    let i;
    re(o) ? "default" in o ? i = he(
      o.from || s,
      o.default,
      !0
    ) : i = he(o.from || s) : i = he(o), be(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i;
  }
}
function Ao(e, t, n) {
  et(
    H(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Wi(e, t, n, s) {
  let o = s.includes(".") ? nr(n, s) : () => n[s];
  if (ae(e)) {
    const i = t[e];
    Y(i) && It(o, i);
  } else if (Y(e))
    It(o, e.bind(n));
  else if (re(e))
    if (H(e))
      e.forEach((i) => Wi(i, t, n, s));
    else {
      const i = Y(e.handler) ? e.handler.bind(n) : t[e.handler];
      Y(i) && It(o, i, e);
    }
}
function Yi(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, a = i.get(t);
  let f;
  return a ? f = a : !o.length && !n && !s ? f = t : (f = {}, o.length && o.forEach(
    (l) => Pn(f, l, r, !0)
  ), Pn(f, t, r)), re(t) && i.set(t, f), f;
}
function Pn(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Pn(e, i, n, !0), o && o.forEach(
    (r) => Pn(e, r, n, !0)
  );
  for (const r in t)
    if (!(s && r === "expose")) {
      const a = na[r] || n && n[r];
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const na = {
  data: vo,
  props: Mo,
  emits: Mo,
  // objects
  methods: Jt,
  computed: Jt,
  // lifecycle
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
  // assets
  components: Jt,
  directives: Jt,
  // watch
  watch: oa,
  // provide / inject
  provide: vo,
  inject: sa
};
function vo(e, t) {
  return t ? e ? function() {
    return ce(
      Y(e) ? e.call(this, this) : e,
      Y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function sa(e, t) {
  return Jt(Ms(e), Ms(t));
}
function Ms(e) {
  if (H(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function we(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Jt(e, t) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Mo(e, t) {
  return e ? H(e) && H(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    wo(e),
    wo(t ?? {})
  ) : t;
}
function oa(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ce(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = we(e[s], t[s]);
  return n;
}
function Gi() {
  return {
    app: null,
    config: {
      isNativeTag: ci,
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
let ia = 0;
function ra(e, t) {
  return function(s, o = null) {
    Y(s) || (s = ce({}, s)), o != null && !re(o) && (o = null);
    const i = Gi(), r = /* @__PURE__ */ new WeakSet(), a = [];
    let f = !1;
    const l = i.app = {
      _uid: ia++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Ya,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return r.has(c) || (c && Y(c.install) ? (r.add(c), c.install(l, ...u)) : Y(c) && (r.add(c), c(l, ...u))), l;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), l;
      },
      component(c, u) {
        return u ? (i.components[c] = u, l) : i.components[c];
      },
      directive(c, u) {
        return u ? (i.directives[c] = u, l) : i.directives[c];
      },
      mount(c, u, h) {
        if (!f) {
          const m = l._ceVNode || ie(s, o);
          return m.appContext = i, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(m, c, h), f = !0, l._container = c, c.__vue_app__ = l, qs(m.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        f && (et(
          a,
          l._instance,
          16
        ), e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return i.provides[c] = u, l;
      },
      runWithContext(c) {
        const u = Ut;
        Ut = l;
        try {
          return c();
        } finally {
          Ut = u;
        }
      }
    };
    return l;
  };
}
let Ut = null;
function ft(e, t) {
  if (me) {
    let n = me.provides;
    const s = me.parent && me.parent.provides;
    s === n && (n = me.provides = Object.create(s)), n[e] = t;
  }
}
function he(e, t, n = !1) {
  const s = La();
  if (s || Ut) {
    let o = Ut ? Ut._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(s && s.proxy) : t;
  }
}
const Vi = {}, Zi = () => Object.create(Vi), Xi = (e) => Object.getPrototypeOf(e) === Vi;
function la(e, t, n, s = !1) {
  const o = {}, i = Zi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ji(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  n ? e.props = s ? o : Il(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function aa(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, a = Q(o), [f] = e.propsOptions;
  let l = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let h = c[u];
        if (Wn(e.emitsOptions, h))
          continue;
        const m = t[h];
        if (f)
          if (J(i, h))
            m !== i[h] && (i[h] = m, l = !0);
          else {
            const g = Ie(h);
            o[g] = Is(
              f,
              a,
              g,
              m,
              e,
              !1
            );
          }
        else
          m !== i[h] && (i[h] = m, l = !0);
      }
    }
  } else {
    Ji(e, t, o, i) && (l = !0);
    let c;
    for (const u in a)
      (!t || // for camelCase
      !J(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Le(u)) === u || !J(t, c))) && (f ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[u] = Is(
        f,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (i !== a)
      for (const u in i)
        (!t || !J(t, u)) && (delete i[u], l = !0);
  }
  l && it(e.attrs, "set", "");
}
function Ji(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, a;
  if (t)
    for (let f in t) {
      if (Kt(f))
        continue;
      const l = t[f];
      let c;
      o && J(o, c = Ie(f)) ? !i || !i.includes(c) ? n[c] = l : (a || (a = {}))[c] = l : Wn(e.emitsOptions, f) || (!(f in s) || l !== s[f]) && (s[f] = l, r = !0);
    }
  if (i) {
    const f = Q(n), l = a || ne;
    for (let c = 0; c < i.length; c++) {
      const u = i[c];
      n[u] = Is(
        o,
        f,
        u,
        l[u],
        e,
        !J(l, u)
      );
    }
  }
  return r;
}
function Is(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const a = J(r, "default");
    if (a && s === void 0) {
      const f = r.default;
      if (r.type !== Function && !r.skipFactory && Y(f)) {
        const { propsDefaults: l } = o;
        if (n in l)
          s = l[n];
        else {
          const c = un(o);
          s = l[n] = f.call(
            null,
            t
          ), c();
        }
      } else
        s = f;
      o.ce && o.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !a ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Le(n)) && (s = !0));
  }
  return s;
}
const ca = /* @__PURE__ */ new WeakMap();
function Ki(e, t, n = !1) {
  const s = n ? ca : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, a = [];
  let f = !1;
  if (!Y(e)) {
    const c = (u) => {
      f = !0;
      const [h, m] = Ki(u, t, !0);
      ce(r, h), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !f)
    return re(e) && s.set(e, Dt), Dt;
  if (H(i))
    for (let c = 0; c < i.length; c++) {
      const u = Ie(i[c]);
      Io(u) && (r[u] = ne);
    }
  else if (i)
    for (const c in i) {
      const u = Ie(c);
      if (Io(u)) {
        const h = i[c], m = r[u] = H(h) || Y(h) ? { type: h } : ce({}, h), g = m.type;
        let y = !1, A = !0;
        if (H(g))
          for (let R = 0; R < g.length; ++R) {
            const B = g[R], D = Y(B) && B.name;
            if (D === "Boolean") {
              y = !0;
              break;
            } else D === "String" && (A = !1);
          }
        else
          y = Y(g) && g.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = y, m[
          1
          /* shouldCastTrue */
        ] = A, (y || J(m, "default")) && a.push(u);
      }
    }
  const l = [r, a];
  return re(e) && s.set(e, l), l;
}
function Io(e) {
  return e[0] !== "$" && !Kt(e);
}
const Js = (e) => e === "_" || e === "_ctx" || e === "$stable", Ks = (e) => H(e) ? e.map(qe) : [qe(e)], ua = (e, t, n) => {
  if (t._n)
    return t;
  const s = Bi((...o) => Ks(t(...o)), n);
  return s._c = !1, s;
}, Qi = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Js(o)) continue;
    const i = e[o];
    if (Y(i))
      t[o] = ua(o, i, s);
    else if (i != null) {
      const r = Ks(i);
      t[o] = () => r;
    }
  }
}, qi = (e, t) => {
  const n = Ks(t);
  e.slots.default = () => n;
}, _i = (e, t, n) => {
  for (const s in t)
    (n || !Js(s)) && (e[s] = t[s]);
}, fa = (e, t, n) => {
  const s = e.slots = Zi();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (_i(s, t, n), n && hi(s, "_", o, !0)) : Qi(t, s);
  } else t && qi(e, t);
}, da = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = ne;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? i = !1 : _i(o, t, n) : (i = !t.$stable, Qi(t, o)), r = t;
  } else t && (qi(e, t), r = { default: 1 });
  if (i)
    for (const a in o)
      !Js(a) && r[a] == null && delete o[a];
}, Pe = Sa;
function ha(e) {
  return pa(e);
}
function pa(e, t) {
  const n = Fn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: a,
    createComment: f,
    setText: l,
    setElementText: c,
    parentNode: u,
    nextSibling: h,
    setScopeId: m = _e,
    insertStaticContent: g
  } = e, y = (d, p, w, S = null, M = null, I = null, P = void 0, N = null, T = !!p.dynamicChildren) => {
    if (d === p)
      return;
    d && !Zt(d, p) && (S = yn(d), de(d, M, I, !0), d = null), p.patchFlag === -2 && (T = !1, p.dynamicChildren = null);
    const { type: C, ref: L, shapeFlag: j } = p;
    switch (C) {
      case Yn:
        A(d, p, w, S);
        break;
      case mt:
        R(d, p, w, S);
        break;
      case rs:
        d == null && B(p, w, S, P);
        break;
      case oe:
        nt(
          d,
          p,
          w,
          S,
          M,
          I,
          P,
          N,
          T
        );
        break;
      default:
        j & 1 ? x(
          d,
          p,
          w,
          S,
          M,
          I,
          P,
          N,
          T
        ) : j & 6 ? Ge(
          d,
          p,
          w,
          S,
          M,
          I,
          P,
          N,
          T
        ) : (j & 64 || j & 128) && C.process(
          d,
          p,
          w,
          S,
          M,
          I,
          P,
          N,
          T,
          Yt
        );
    }
    L != null && M ? $t(L, d && d.ref, I, p || d, !p) : L == null && d && d.ref != null && $t(d.ref, null, I, d, !0);
  }, A = (d, p, w, S) => {
    if (d == null)
      s(
        p.el = a(p.children),
        w,
        S
      );
    else {
      const M = p.el = d.el;
      p.children !== d.children && l(M, p.children);
    }
  }, R = (d, p, w, S) => {
    d == null ? s(
      p.el = f(p.children || ""),
      w,
      S
    ) : p.el = d.el;
  }, B = (d, p, w, S) => {
    [d.el, d.anchor] = g(
      d.children,
      p,
      w,
      S,
      d.el,
      d.anchor
    );
  }, D = ({ el: d, anchor: p }, w, S) => {
    let M;
    for (; d && d !== p; )
      M = h(d), s(d, w, S), d = M;
    s(p, w, S);
  }, E = ({ el: d, anchor: p }) => {
    let w;
    for (; d && d !== p; )
      w = h(d), o(d), d = w;
    o(p);
  }, x = (d, p, w, S, M, I, P, N, T) => {
    if (p.type === "svg" ? P = "svg" : p.type === "math" && (P = "mathml"), d == null)
      W(
        p,
        w,
        S,
        M,
        I,
        P,
        N,
        T
      );
    else {
      const C = d.el && d.el._isVueCE ? d.el : null;
      try {
        C && C._beginPatch(), tt(
          d,
          p,
          M,
          I,
          P,
          N,
          T
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, W = (d, p, w, S, M, I, P, N) => {
    let T, C;
    const { props: L, shapeFlag: j, transition: O, dirs: z } = d;
    if (T = d.el = r(
      d.type,
      I,
      L && L.is,
      L
    ), j & 8 ? c(T, d.children) : j & 16 && De(
      d.children,
      T,
      null,
      S,
      M,
      is(d, I),
      P,
      N
    ), z && bt(d, null, S, "created"), _(T, d, d.scopeId, P, S), L) {
      for (const ee in L)
        ee !== "value" && !Kt(ee) && i(T, ee, null, L[ee], I, S);
      "value" in L && i(T, "value", null, L.value, I), (C = L.onVnodeBeforeMount) && Ke(C, S, d);
    }
    z && bt(d, null, S, "beforeMount");
    const X = ga(M, O);
    X && O.beforeEnter(T), s(T, p, w), ((C = L && L.onVnodeMounted) || X || z) && Pe(() => {
      C && Ke(C, S, d), X && O.enter(T), z && bt(d, null, S, "mounted");
    }, M);
  }, _ = (d, p, w, S, M) => {
    if (w && m(d, w), S)
      for (let I = 0; I < S.length; I++)
        m(d, S[I]);
    if (M) {
      let I = M.subTree;
      if (p === I || or(I.type) && (I.ssContent === p || I.ssFallback === p)) {
        const P = M.vnode;
        _(
          d,
          P,
          P.scopeId,
          P.slotScopeIds,
          M.parent
        );
      }
    }
  }, De = (d, p, w, S, M, I, P, N, T = 0) => {
    for (let C = T; C < d.length; C++) {
      const L = d[C] = N ? ht(d[C]) : qe(d[C]);
      y(
        null,
        L,
        p,
        w,
        S,
        M,
        I,
        P,
        N
      );
    }
  }, tt = (d, p, w, S, M, I, P) => {
    const N = p.el = d.el;
    let { patchFlag: T, dynamicChildren: C, dirs: L } = p;
    T |= d.patchFlag & 16;
    const j = d.props || ne, O = p.props || ne;
    let z;
    if (w && wt(w, !1), (z = O.onVnodeBeforeUpdate) && Ke(z, w, p, d), L && bt(p, d, w, "beforeUpdate"), w && wt(w, !0), (j.innerHTML && O.innerHTML == null || j.textContent && O.textContent == null) && c(N, ""), C ? Ye(
      d.dynamicChildren,
      C,
      N,
      w,
      S,
      is(p, M),
      I
    ) : P || V(
      d,
      p,
      N,
      null,
      w,
      S,
      is(p, M),
      I,
      !1
    ), T > 0) {
      if (T & 16)
        ut(N, j, O, w, M);
      else if (T & 2 && j.class !== O.class && i(N, "class", null, O.class, M), T & 4 && i(N, "style", j.style, O.style, M), T & 8) {
        const X = p.dynamicProps;
        for (let ee = 0; ee < X.length; ee++) {
          const q = X[ee], Ce = j[q], Re = O[q];
          (Re !== Ce || q === "value") && i(N, q, Ce, Re, M, w);
        }
      }
      T & 1 && d.children !== p.children && c(N, p.children);
    } else !P && C == null && ut(N, j, O, w, M);
    ((z = O.onVnodeUpdated) || L) && Pe(() => {
      z && Ke(z, w, p, d), L && bt(p, d, w, "updated");
    }, S);
  }, Ye = (d, p, w, S, M, I, P) => {
    for (let N = 0; N < p.length; N++) {
      const T = d[N], C = p[N], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(T, C) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 198) ? u(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      y(
        T,
        C,
        L,
        null,
        S,
        M,
        I,
        P,
        !0
      );
    }
  }, ut = (d, p, w, S, M) => {
    if (p !== w) {
      if (p !== ne)
        for (const I in p)
          !Kt(I) && !(I in w) && i(
            d,
            I,
            p[I],
            null,
            M,
            S
          );
      for (const I in w) {
        if (Kt(I)) continue;
        const P = w[I], N = p[I];
        P !== N && I !== "value" && i(d, I, N, P, M, S);
      }
      "value" in w && i(d, "value", p.value, w.value, M);
    }
  }, nt = (d, p, w, S, M, I, P, N, T) => {
    const C = p.el = d ? d.el : a(""), L = p.anchor = d ? d.anchor : a("");
    let { patchFlag: j, dynamicChildren: O, slotScopeIds: z } = p;
    z && (N = N ? N.concat(z) : z), d == null ? (s(C, w, S), s(L, w, S), De(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      w,
      L,
      M,
      I,
      P,
      N,
      T
    )) : j > 0 && j & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren ? (Ye(
      d.dynamicChildren,
      O,
      w,
      M,
      I,
      P,
      N
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || M && p === M.subTree) && $i(
      d,
      p,
      !0
      /* shallow */
    )) : V(
      d,
      p,
      w,
      L,
      M,
      I,
      P,
      N,
      T
    );
  }, Ge = (d, p, w, S, M, I, P, N, T) => {
    p.slotScopeIds = N, d == null ? p.shapeFlag & 512 ? M.ctx.activate(
      p,
      w,
      S,
      P,
      T
    ) : Ue(
      p,
      w,
      S,
      M,
      I,
      P,
      T
    ) : Ht(d, p, T);
  }, Ue = (d, p, w, S, M, I, P) => {
    const N = d.component = Oa(
      d,
      S,
      M
    );
    if (zi(d) && (N.ctx.renderer = Yt), Ua(N, !1, P), N.asyncDep) {
      if (M && M.registerDep(N, K, P), !d.el) {
        const T = N.subTree = ie(mt);
        R(null, T, p, w), d.placeholder = T.el;
      }
    } else
      K(
        N,
        d,
        p,
        w,
        M,
        I,
        P
      );
  }, Ht = (d, p, w) => {
    const S = p.component = d.component;
    if (Ra(d, p, w))
      if (S.asyncDep && !S.asyncResolved) {
        $(S, p, w);
        return;
      } else
        S.next = p, S.update();
    else
      p.el = d.el, S.vnode = p;
  }, K = (d, p, w, S, M, I, P) => {
    const N = () => {
      if (d.isMounted) {
        let { next: j, bu: O, u: z, parent: X, vnode: ee } = d;
        {
          const Xe = er(d);
          if (Xe) {
            j && (j.el = ee.el, $(d, j, P)), Xe.asyncDep.then(() => {
              d.isUnmounted || N();
            });
            return;
          }
        }
        let q = j, Ce;
        wt(d, !1), j ? (j.el = ee.el, $(d, j, P)) : j = ee, O && $n(O), (Ce = j.props && j.props.onVnodeBeforeUpdate) && Ke(Ce, X, j, ee), wt(d, !0);
        const Re = Ro(d), Ze = d.subTree;
        d.subTree = Re, y(
          Ze,
          Re,
          // parent may have changed if it's in a teleport
          u(Ze.el),
          // anchor may have changed if it's in a fragment
          yn(Ze),
          d,
          M,
          I
        ), j.el = Re.el, q === null && Ea(d, Re.el), z && Pe(z, M), (Ce = j.props && j.props.onVnodeUpdated) && Pe(
          () => Ke(Ce, X, j, ee),
          M
        );
      } else {
        let j;
        const { el: O, props: z } = p, { bm: X, m: ee, parent: q, root: Ce, type: Re } = d, Ze = en(p);
        wt(d, !1), X && $n(X), !Ze && (j = z && z.onVnodeBeforeMount) && Ke(j, q, p), wt(d, !0);
        {
          Ce.ce && // @ts-expect-error _def is private
          Ce.ce._def.shadowRoot !== !1 && Ce.ce._injectChildStyle(Re);
          const Xe = d.subTree = Ro(d);
          y(
            null,
            Xe,
            w,
            S,
            d,
            M,
            I
          ), p.el = Xe.el;
        }
        if (ee && Pe(ee, M), !Ze && (j = z && z.onVnodeMounted)) {
          const Xe = p;
          Pe(
            () => Ke(j, q, Xe),
            M
          );
        }
        (p.shapeFlag & 256 || q && en(q.vnode) && q.vnode.shapeFlag & 256) && d.a && Pe(d.a, M), d.isMounted = !0, p = w = S = null;
      }
    };
    d.scope.on();
    const T = d.effect = new yi(N);
    d.scope.off();
    const C = d.update = T.run.bind(T), L = d.job = T.runIfDirty.bind(T);
    L.i = d, L.id = d.uid, T.scheduler = () => Gs(L), wt(d, !0), C();
  }, $ = (d, p, w) => {
    p.component = d;
    const S = d.vnode.props;
    d.vnode = p, d.next = null, aa(d, p.props, S, w), da(d, p.children, w), lt(), mo(d), at();
  }, V = (d, p, w, S, M, I, P, N, T = !1) => {
    const C = d && d.children, L = d ? d.shapeFlag : 0, j = p.children, { patchFlag: O, shapeFlag: z } = p;
    if (O > 0) {
      if (O & 128) {
        Tt(
          C,
          j,
          w,
          S,
          M,
          I,
          P,
          N,
          T
        );
        return;
      } else if (O & 256) {
        Ve(
          C,
          j,
          w,
          S,
          M,
          I,
          P,
          N,
          T
        );
        return;
      }
    }
    z & 8 ? (L & 16 && Wt(C, M, I), j !== C && c(w, j)) : L & 16 ? z & 16 ? Tt(
      C,
      j,
      w,
      S,
      M,
      I,
      P,
      N,
      T
    ) : Wt(C, M, I, !0) : (L & 8 && c(w, ""), z & 16 && De(
      j,
      w,
      S,
      M,
      I,
      P,
      N,
      T
    ));
  }, Ve = (d, p, w, S, M, I, P, N, T) => {
    d = d || Dt, p = p || Dt;
    const C = d.length, L = p.length, j = Math.min(C, L);
    let O;
    for (O = 0; O < j; O++) {
      const z = p[O] = T ? ht(p[O]) : qe(p[O]);
      y(
        d[O],
        z,
        w,
        null,
        M,
        I,
        P,
        N,
        T
      );
    }
    C > L ? Wt(
      d,
      M,
      I,
      !0,
      !1,
      j
    ) : De(
      p,
      w,
      S,
      M,
      I,
      P,
      N,
      T,
      j
    );
  }, Tt = (d, p, w, S, M, I, P, N, T) => {
    let C = 0;
    const L = p.length;
    let j = d.length - 1, O = L - 1;
    for (; C <= j && C <= O; ) {
      const z = d[C], X = p[C] = T ? ht(p[C]) : qe(p[C]);
      if (Zt(z, X))
        y(
          z,
          X,
          w,
          null,
          M,
          I,
          P,
          N,
          T
        );
      else
        break;
      C++;
    }
    for (; C <= j && C <= O; ) {
      const z = d[j], X = p[O] = T ? ht(p[O]) : qe(p[O]);
      if (Zt(z, X))
        y(
          z,
          X,
          w,
          null,
          M,
          I,
          P,
          N,
          T
        );
      else
        break;
      j--, O--;
    }
    if (C > j) {
      if (C <= O) {
        const z = O + 1, X = z < L ? p[z].el : S;
        for (; C <= O; )
          y(
            null,
            p[C] = T ? ht(p[C]) : qe(p[C]),
            w,
            X,
            M,
            I,
            P,
            N,
            T
          ), C++;
      }
    } else if (C > O)
      for (; C <= j; )
        de(d[C], M, I, !0), C++;
    else {
      const z = C, X = C, ee = /* @__PURE__ */ new Map();
      for (C = X; C <= O; C++) {
        const Ne = p[C] = T ? ht(p[C]) : qe(p[C]);
        Ne.key != null && ee.set(Ne.key, C);
      }
      let q, Ce = 0;
      const Re = O - X + 1;
      let Ze = !1, Xe = 0;
      const Gt = new Array(Re);
      for (C = 0; C < Re; C++) Gt[C] = 0;
      for (C = z; C <= j; C++) {
        const Ne = d[C];
        if (Ce >= Re) {
          de(Ne, M, I, !0);
          continue;
        }
        let Je;
        if (Ne.key != null)
          Je = ee.get(Ne.key);
        else
          for (q = X; q <= O; q++)
            if (Gt[q - X] === 0 && Zt(Ne, p[q])) {
              Je = q;
              break;
            }
        Je === void 0 ? de(Ne, M, I, !0) : (Gt[Je - X] = C + 1, Je >= Xe ? Xe = Je : Ze = !0, y(
          Ne,
          p[Je],
          w,
          null,
          M,
          I,
          P,
          N,
          T
        ), Ce++);
      }
      const ao = Ze ? ma(Gt) : Dt;
      for (q = ao.length - 1, C = Re - 1; C >= 0; C--) {
        const Ne = X + C, Je = p[Ne], co = p[Ne + 1], uo = Ne + 1 < L ? (
          // #13559, fallback to el placeholder for unresolved async component
          co.el || co.placeholder
        ) : S;
        Gt[C] === 0 ? y(
          null,
          Je,
          w,
          uo,
          M,
          I,
          P,
          N,
          T
        ) : Ze && (q < 0 || C !== ao[q] ? pe(Je, w, uo, 2) : q--);
      }
    }
  }, pe = (d, p, w, S, M = null) => {
    const { el: I, type: P, transition: N, children: T, shapeFlag: C } = d;
    if (C & 6) {
      pe(d.component.subTree, p, w, S);
      return;
    }
    if (C & 128) {
      d.suspense.move(p, w, S);
      return;
    }
    if (C & 64) {
      P.move(d, p, w, Yt);
      return;
    }
    if (P === oe) {
      s(I, p, w);
      for (let j = 0; j < T.length; j++)
        pe(T[j], p, w, S);
      s(d.anchor, p, w);
      return;
    }
    if (P === rs) {
      D(d, p, w);
      return;
    }
    if (S !== 2 && C & 1 && N)
      if (S === 0)
        N.beforeEnter(I), s(I, p, w), Pe(() => N.enter(I), M);
      else {
        const { leave: j, delayLeave: O, afterLeave: z } = N, X = () => {
          d.ctx.isUnmounted ? o(I) : s(I, p, w);
        }, ee = () => {
          I._isLeaving && I[Ul](
            !0
            /* cancelled */
          ), j(I, () => {
            X(), z && z();
          });
        };
        O ? O(I, X, ee) : ee();
      }
    else
      s(I, p, w);
  }, de = (d, p, w, S = !1, M = !1) => {
    const {
      type: I,
      props: P,
      ref: N,
      children: T,
      dynamicChildren: C,
      shapeFlag: L,
      patchFlag: j,
      dirs: O,
      cacheIndex: z
    } = d;
    if (j === -2 && (M = !1), N != null && (lt(), $t(N, null, w, d, !0), at()), z != null && (p.renderCache[z] = void 0), L & 256) {
      p.ctx.deactivate(d);
      return;
    }
    const X = L & 1 && O, ee = !en(d);
    let q;
    if (ee && (q = P && P.onVnodeBeforeUnmount) && Ke(q, p, d), L & 6)
      mn(d.component, w, S);
    else {
      if (L & 128) {
        d.suspense.unmount(w, S);
        return;
      }
      X && bt(d, null, p, "beforeUnmount"), L & 64 ? d.type.remove(
        d,
        p,
        w,
        Yt,
        S
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== oe || j > 0 && j & 64) ? Wt(
        C,
        p,
        w,
        !1,
        !0
      ) : (I === oe && j & 384 || !M && L & 16) && Wt(T, p, w), S && Nt(d);
    }
    (ee && (q = P && P.onVnodeUnmounted) || X) && Pe(() => {
      q && Ke(q, p, d), X && bt(d, null, p, "unmounted");
    }, w);
  }, Nt = (d) => {
    const { type: p, el: w, anchor: S, transition: M } = d;
    if (p === oe) {
      Pt(w, S);
      return;
    }
    if (p === rs) {
      E(d);
      return;
    }
    const I = () => {
      o(w), M && !M.persisted && M.afterLeave && M.afterLeave();
    };
    if (d.shapeFlag & 1 && M && !M.persisted) {
      const { leave: P, delayLeave: N } = M, T = () => P(w, I);
      N ? N(d.el, I, T) : T();
    } else
      I();
  }, Pt = (d, p) => {
    let w;
    for (; d !== p; )
      w = h(d), o(d), d = w;
    o(p);
  }, mn = (d, p, w) => {
    const { bum: S, scope: M, job: I, subTree: P, um: N, m: T, a: C } = d;
    Co(T), Co(C), S && $n(S), M.stop(), I && (I.flags |= 8, de(P, d, p, w)), N && Pe(N, p), Pe(() => {
      d.isUnmounted = !0;
    }, p);
  }, Wt = (d, p, w, S = !1, M = !1, I = 0) => {
    for (let P = I; P < d.length; P++)
      de(d[P], p, w, S, M);
  }, yn = (d) => {
    if (d.shapeFlag & 6)
      return yn(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const p = h(d.anchor || d.el), w = p && p[Ol];
    return w ? h(w) : p;
  };
  let qn = !1;
  const lo = (d, p, w) => {
    d == null ? p._vnode && de(p._vnode, null, null, !0) : y(
      p._vnode || null,
      d,
      p,
      null,
      null,
      null,
      w
    ), p._vnode = d, qn || (qn = !0, mo(), Oi(), qn = !1);
  }, Yt = {
    p: y,
    um: de,
    m: pe,
    r: Nt,
    mt: Ue,
    mc: De,
    pc: V,
    pbc: Ye,
    n: yn,
    o: e
  };
  return {
    render: lo,
    hydrate: void 0,
    createApp: ra(lo)
  };
}
function is({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function wt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ga(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $i(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (H(s) && H(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let a = o[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = ht(o[i]), a.el = r.el), !n && a.patchFlag !== -2 && $i(r, a)), a.type === Yn && // avoid cached text nodes retaining detached dom nodes
      a.patchFlag !== -1 && (a.el = r.el), a.type === mt && !a.el && (a.el = r.el);
    }
}
function ma(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, a;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const l = e[s];
    if (l !== 0) {
      if (o = n[n.length - 1], e[o] < l) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        a = i + r >> 1, e[n[a]] < l ? i = a + 1 : r = a;
      l < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function er(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : er(t);
}
function Co(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ya = Symbol.for("v-scx"), ba = () => he(ya);
function It(e, t, n) {
  return tr(e, t, n);
}
function tr(e, t, n = ne) {
  const { immediate: s, deep: o, flush: i, once: r } = n, a = ce({}, n), f = t && s || !t && i !== "post";
  let l;
  if (an) {
    if (i === "sync") {
      const m = ba();
      l = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!f) {
      const m = () => {
      };
      return m.stop = _e, m.resume = _e, m.pause = _e, m;
    }
  }
  const c = me;
  a.call = (m, g, y) => et(m, c, g, y);
  let u = !1;
  i === "post" ? a.scheduler = (m) => {
    Pe(m, c && c.suspense);
  } : i !== "sync" && (u = !0, a.scheduler = (m, g) => {
    g ? m() : Gs(m);
  }), a.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const h = Pl(e, t, a);
  return an && (l ? l.push(h) : f && h()), h;
}
function wa(e, t, n) {
  const s = this.proxy, o = ae(e) ? e.includes(".") ? nr(s, e) : () => s[e] : e.bind(s, s);
  let i;
  Y(t) ? i = t : (i = t.handler, n = t);
  const r = un(this), a = tr(o, i.bind(s), n);
  return r(), a;
}
function nr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Aa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ie(t)}Modifiers`] || e[`${Le(t)}Modifiers`];
function va(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ne;
  let o = n;
  const i = t.startsWith("update:"), r = i && Aa(s, t.slice(7));
  r && (r.trim && (o = n.map((c) => ae(c) ? c.trim() : c)), r.number && (o = n.map(Qr)));
  let a, f = s[a = _n(t)] || // also try camelCase event handler (#2249)
  s[a = _n(Ie(t))];
  !f && i && (f = s[a = _n(Le(t))]), f && et(
    f,
    e,
    6,
    o
  );
  const l = s[a + "Once"];
  if (l) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, et(
      l,
      e,
      6,
      o
    );
  }
}
const Ma = /* @__PURE__ */ new WeakMap();
function sr(e, t, n = !1) {
  const s = n ? Ma : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, a = !1;
  if (!Y(e)) {
    const f = (l) => {
      const c = sr(l, t, !0);
      c && (a = !0, ce(r, c));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !a ? (re(e) && s.set(e, null), null) : (H(i) ? i.forEach((f) => r[f] = null) : ce(r, i), re(e) && s.set(e, r), r);
}
function Wn(e, t) {
  return !e || !Dn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, Le(t)) || J(e, t));
}
function Ro(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: a,
    emit: f,
    render: l,
    renderCache: c,
    props: u,
    data: h,
    setupState: m,
    ctx: g,
    inheritAttrs: y
  } = e, A = Tn(e);
  let R, B;
  try {
    if (n.shapeFlag & 4) {
      const E = o || s, x = E;
      R = qe(
        l.call(
          x,
          E,
          c,
          u,
          m,
          h,
          g
        )
      ), B = a;
    } else {
      const E = t;
      R = qe(
        E.length > 1 ? E(
          u,
          { attrs: a, slots: r, emit: f }
        ) : E(
          u,
          null
        )
      ), B = t.props ? a : Ia(a);
    }
  } catch (E) {
    nn.length = 0, zn(E, e, 1), R = ie(mt);
  }
  let D = R;
  if (B && y !== !1) {
    const E = Object.keys(B), { shapeFlag: x } = D;
    E.length && x & 7 && (i && E.some(Ps) && (B = Ca(
      B,
      i
    )), D = Bt(D, B, !1, !0));
  }
  return n.dirs && (D = Bt(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && Vs(D, n.transition), R = D, Tn(A), R;
}
const Ia = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Dn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ca = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ps(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Ra(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: a, patchFlag: f } = t, l = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return s ? Eo(s, r, l) : !!r;
    if (f & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const h = c[u];
        if (r[h] !== s[h] && !Wn(l, h))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : s === r ? !1 : s ? r ? Eo(s, r, l) : !0 : !!r;
  return !1;
}
function Eo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (t[i] !== e[i] && !Wn(n, i))
      return !0;
  }
  return !1;
}
function Ea({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const or = (e) => e.__isSuspense;
function Sa(e, t) {
  t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : Dl(e);
}
const oe = Symbol.for("v-fgt"), Yn = Symbol.for("v-txt"), mt = Symbol.for("v-cmt"), rs = Symbol.for("v-stc"), nn = [];
let je = null;
function U(e = !1) {
  nn.push(je = e ? null : []);
}
function xa() {
  nn.pop(), je = nn[nn.length - 1] || null;
}
let ln = 1;
function So(e, t = !1) {
  ln += e, e < 0 && je && t && (je.hasOnce = !0);
}
function ir(e) {
  return e.dynamicChildren = ln > 0 ? je || Dt : null, xa(), ln > 0 && je && je.push(e), e;
}
function Z(e, t, n, s, o, i) {
  return ir(
    v(
      e,
      t,
      n,
      s,
      o,
      i,
      !0
    )
  );
}
function Ae(e, t, n, s, o) {
  return ir(
    ie(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function rr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const lr = ({ key: e }) => e ?? null, Mn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || be(e) || Y(e) ? { i: Fe, r: e, k: t, f: !!n } : e : null);
function v(e, t = null, n = null, s = 0, o = null, i = e === oe ? 0 : 1, r = !1, a = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && lr(t),
    ref: t && Mn(t),
    scopeId: Ui,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Fe
  };
  return a ? (Qs(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= ae(n) ? 8 : 16), ln > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && je.push(f), f;
}
const ie = Ta;
function Ta(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Ql) && (e = mt), rr(e)) {
    const a = Bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Qs(a, n), ln > 0 && !i && je && (a.shapeFlag & 6 ? je[je.indexOf(e)] = a : je.push(a)), a.patchFlag = -2, a;
  }
  if (Wa(e) && (e = e.__vccOpts), t) {
    t = Na(t);
    let { class: a, style: f } = t;
    a && !ae(a) && (t.class = $e(a)), re(f) && (Ys(f) && !H(f) && (f = ce({}, f)), t.style = Ds(f));
  }
  const r = ae(e) ? 1 : or(e) ? 128 : Ll(e) ? 64 : re(e) ? 4 : Y(e) ? 2 : 0;
  return v(
    e,
    t,
    n,
    s,
    o,
    r,
    i,
    !0
  );
}
function Na(e) {
  return e ? Ys(e) || Xi(e) ? ce({}, e) : e : null;
}
function Bt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: a, transition: f } = e, l = t ? ja(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && lr(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? H(i) ? i.concat(Mn(t)) : [i, Mn(t)] : Mn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== oe ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Bt(e.ssContent),
    ssFallback: e.ssFallback && Bt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && s && Vs(
    c,
    f.clone(c)
  ), c;
}
function Pa(e = " ", t = 0) {
  return ie(Yn, null, e, t);
}
function fe(e = "", t = !1) {
  return t ? (U(), Ae(mt, null, e)) : ie(mt, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean" ? ie(mt) : H(e) ? ie(
    oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : rr(e) ? ht(e) : ie(Yn, null, String(e));
}
function ht(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bt(e);
}
function Qs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (H(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Qs(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Xi(t) ? t._ctx = Fe : o === 3 && Fe && (Fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Y(t) ? (t = { default: t, _ctx: Fe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Pa(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ja(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = $e([t.class, s.class]));
      else if (o === "style")
        t.style = Ds([t.style, s.style]);
      else if (Dn(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(H(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Ke(e, t, n, s = null) {
  et(e, t, 7, [
    n,
    s
  ]);
}
const ka = Gi();
let Da = 0;
function Oa(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || ka, i = {
    uid: Da++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new sl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ki(s, o),
    emitsOptions: sr(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ne,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ne,
    data: ne,
    props: ne,
    attrs: ne,
    slots: ne,
    refs: ne,
    setupState: ne,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = va.bind(null, i), e.ce && e.ce(i), i;
}
let me = null;
const La = () => me || Fe;
let jn, Cs;
{
  const e = Fn(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  jn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => me = n
  ), Cs = t(
    "__VUE_SSR_SETTERS__",
    (n) => an = n
  );
}
const un = (e) => {
  const t = me;
  return jn(e), e.scope.on(), () => {
    e.scope.off(), jn(t);
  };
}, xo = () => {
  me && me.scope.off(), jn(null);
};
function ar(e) {
  return e.vnode.shapeFlag & 4;
}
let an = !1;
function Ua(e, t = !1, n = !1) {
  t && Cs(t);
  const { props: s, children: o } = e.vnode, i = ar(e);
  la(e, s, i, t), fa(e, o, n || t);
  const r = i ? Ba(e, t) : void 0;
  return t && Cs(!1), r;
}
function Ba(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $l);
  const { setup: s } = n;
  if (s) {
    lt();
    const o = e.setupContext = s.length > 1 ? za(e) : null, i = un(e), r = cn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), a = fi(r);
    if (at(), i(), (a || e.sp) && !en(e) && Fi(e), a) {
      if (r.then(xo, xo), t)
        return r.then((f) => {
          To(e, f);
        }).catch((f) => {
          zn(f, e, 0);
        });
      e.asyncDep = r;
    } else
      To(e, r);
  } else
    cr(e);
}
function To(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = Pi(t)), cr(e);
}
function cr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || _e);
  {
    const o = un(e);
    lt();
    try {
      ea(e);
    } finally {
      at(), o();
    }
  }
}
const Fa = {
  get(e, t) {
    return ge(e, "get", ""), e[t];
  }
};
function za(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Fa),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function qs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Pi(Cl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in tn)
        return tn[n](e);
    },
    has(t, n) {
      return n in t || n in tn;
    }
  })) : e.proxy;
}
function Ha(e, t = !0) {
  return Y(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Wa(e) {
  return Y(e) && "__vccOpts" in e;
}
const Be = (e, t) => Tl(e, t, an), Ya = "3.5.24";
/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Rs;
const No = typeof window < "u" && window.trustedTypes;
if (No)
  try {
    Rs = /* @__PURE__ */ No.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ur = Rs ? (e) => Rs.createHTML(e) : (e) => e, Ga = "http://www.w3.org/2000/svg", Va = "http://www.w3.org/1998/Math/MathML", ot = typeof document < "u" ? document : null, Po = ot && /* @__PURE__ */ ot.createElement("template"), Za = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? ot.createElementNS(Ga, e) : t === "mathml" ? ot.createElementNS(Va, e) : n ? ot.createElement(e, { is: n }) : ot.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => ot.createTextNode(e),
  createComment: (e) => ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ot.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      Po.innerHTML = ur(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Po.content;
      if (s === "svg" || s === "mathml") {
        const f = a.firstChild;
        for (; f.firstChild; )
          a.appendChild(f.firstChild);
        a.removeChild(f);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Xa = Symbol("_vtc");
function Ja(e, t, n) {
  const s = e[Xa];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const jo = Symbol("_vod"), Ka = Symbol("_vsh"), Qa = Symbol(""), qa = /(?:^|;)\s*display\s*:/;
function _a(e, t, n) {
  const s = e.style, o = ae(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (ae(t))
        for (const r of t.split(";")) {
          const a = r.slice(0, r.indexOf(":")).trim();
          n[a] == null && In(s, a, "");
        }
      else
        for (const r in t)
          n[r] == null && In(s, r, "");
    for (const r in n)
      r === "display" && (i = !0), In(s, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = s[Qa];
      r && (n += ";" + r), s.cssText = n, i = qa.test(n);
    }
  } else t && e.removeAttribute("style");
  jo in e && (e[jo] = i ? s.display : "", e[Ka] && (s.display = "none"));
}
const ko = /\s*!important$/;
function In(e, t, n) {
  if (H(n))
    n.forEach((s) => In(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = $a(e, t);
    ko.test(n) ? e.setProperty(
      Le(s),
      n.replace(ko, ""),
      "important"
    ) : e[s] = n;
  }
}
const Do = ["Webkit", "Moz", "ms"], ls = {};
function $a(e, t) {
  const n = ls[t];
  if (n)
    return n;
  let s = Ie(t);
  if (s !== "filter" && s in e)
    return ls[t] = s;
  s = Bn(s);
  for (let o = 0; o < Do.length; o++) {
    const i = Do[o] + s;
    if (i in e)
      return ls[t] = i;
  }
  return t;
}
const Oo = "http://www.w3.org/1999/xlink";
function Lo(e, t, n, s, o, i = nl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Oo, t.slice(6, t.length)) : e.setAttributeNS(Oo, t, n) : n == null || i && !pi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : yt(n) ? String(n) : n
  );
}
function Uo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ur(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = pi(n) : n == null && a === "string" ? (n = "", r = !0) : a === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(o || t);
}
function ec(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function tc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Bo = Symbol("_vei");
function nc(e, t, n, s, o = null) {
  const i = e[Bo] || (e[Bo] = {}), r = i[t];
  if (s && r)
    r.value = s;
  else {
    const [a, f] = sc(t);
    if (s) {
      const l = i[t] = rc(
        s,
        o
      );
      ec(e, a, l, f);
    } else r && (tc(e, a, r, f), i[t] = void 0);
  }
}
const Fo = /(?:Once|Passive|Capture)$/;
function sc(e) {
  let t;
  if (Fo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Fo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Le(e.slice(2)), t];
}
let as = 0;
const oc = /* @__PURE__ */ Promise.resolve(), ic = () => as || (oc.then(() => as = 0), as = Date.now());
function rc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    et(
      lc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = ic(), n;
}
function lc(e, t) {
  if (H(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const zo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ac = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? Ja(e, s, r) : t === "style" ? _a(e, n, s) : Dn(t) ? Ps(t) || nc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : cc(e, t, s, r)) ? (Uo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Lo(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ae(s)) ? Uo(e, Ie(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Lo(e, t, s, r));
};
function cc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && zo(t) && Y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return zo(t) && ae(n) ? !1 : t in e;
}
const Ho = {};
// @__NO_SIDE_EFFECTS__
function uc(e, t, n) {
  let s = /* @__PURE__ */ ue(e, t);
  Ln(s) && (s = ce({}, s, t));
  class o extends _s {
    constructor(r) {
      super(s, r, n);
    }
  }
  return o.def = s, o;
}
const fc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class _s extends fc {
  constructor(t, n = {}, s = Yo) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Yo ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      ce({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof _s) {
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
    this._connected = !1, ki(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const n of t)
      this._setAttr(n.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (s, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: r } = s;
      let a;
      if (i && !H(i))
        for (const f in i) {
          const l = i[f];
          (l === Number || l && l.type === Number) && (f in this._props && (this._props[f] = fo(this._props[f])), (a || (a = /* @__PURE__ */ Object.create(null)))[Ie(f)] = !0);
        }
      this._numberProps = a, this._resolveProps(s), this.shadowRoot && this._applyStyles(r), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((s) => {
      s.configureApp = this._def.configureApp, t(this._def = s, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        J(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => k(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = H(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o]);
    for (const o of s.map(Ie))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(i) {
          this._setProp(o, i, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : Ho;
    const o = Ie(t);
    n && this._numberProps && this._numberProps[o] && (s = fo(s)), this._setProp(o, s, !1, !0);
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
  _setProp(t, n, s = !0, o = !1) {
    if (n !== this._props[t] && (this._dirty = !0, n === Ho ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const i = this._ob;
      i && (this._processMutations(i.takeRecords()), i.disconnect()), n === !0 ? this.setAttribute(Le(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Le(t), n + "") : n || this.removeAttribute(Le(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), hc(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ie(this._def, ce(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const o = (i, r) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            Ln(r[0]) ? ce({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (i, ...r) => {
        o(i, r), Le(i) !== i && o(Le(i), r);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let o = t.length - 1; o >= 0; o--) {
      const i = document.createElement("style");
      s && i.setAttribute("nonce", s), i.textContent = t[o], this.shadowRoot.prepend(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const o = t[s], i = o.getAttribute("name") || "default", r = this._slots[i], a = o.parentNode;
      if (r)
        for (const f of r) {
          if (n && f.nodeType === 1) {
            const l = n + "-s", c = document.createTreeWalker(f, 1);
            f.setAttribute(l, "");
            let u;
            for (; u = c.nextNode(); )
              u.setAttribute(l, "");
          }
          a.insertBefore(f, o);
        }
      else
        for (; o.firstChild; ) a.insertBefore(o.firstChild, o);
      a.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const n = /* @__PURE__ */ new Set();
    for (const s of t) {
      const o = s.querySelectorAll("slot");
      for (let i = 0; i < o.length; i++)
        n.add(o[i]);
    }
    return Array.from(n);
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
const dc = /* @__PURE__ */ ce({ patchProp: ac }, Za);
let Wo;
function fr() {
  return Wo || (Wo = ha(dc));
}
const hc = ((...e) => {
  fr().render(...e);
}), Yo = ((...e) => {
  const t = fr().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = gc(s);
    if (!o) return;
    const i = t._component;
    !Y(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, pc(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
});
function pc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function gc(e) {
  return ae(e) ? document.querySelector(e) : e;
}
function dr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: mc } = Object.prototype, { getPrototypeOf: $s } = Object, { iterator: Gn, toStringTag: hr } = Symbol, Vn = /* @__PURE__ */ ((e) => (t) => {
  const n = mc.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), We = (e) => (e = e.toLowerCase(), (t) => Vn(t) === e), Zn = (e) => (t) => typeof t === e, { isArray: zt } = Array, Ft = Zn("undefined");
function fn(e) {
  return e !== null && !Ft(e) && e.constructor !== null && !Ft(e.constructor) && Se(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const pr = We("ArrayBuffer");
function yc(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && pr(e.buffer), t;
}
const bc = Zn("string"), Se = Zn("function"), gr = Zn("number"), dn = (e) => e !== null && typeof e == "object", wc = (e) => e === !0 || e === !1, Cn = (e) => {
  if (Vn(e) !== "object")
    return !1;
  const t = $s(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(hr in e) && !(Gn in e);
}, Ac = (e) => {
  if (!dn(e) || fn(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, vc = We("Date"), Mc = We("File"), Ic = (e) => !!(e && typeof e.uri < "u"), Cc = (e) => e && typeof e.getParts < "u", Rc = We("Blob"), Ec = We("FileList"), Sc = (e) => dn(e) && Se(e.pipe);
function xc() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Go = xc(), Vo = typeof Go.FormData < "u" ? Go.FormData : void 0, Tc = (e) => {
  let t;
  return e && (Vo && e instanceof Vo || Se(e.append) && ((t = Vn(e)) === "formdata" || // detect form-data instance
  t === "object" && Se(e.toString) && e.toString() === "[object FormData]"));
}, Nc = We("URLSearchParams"), [Pc, jc, kc, Dc] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(We), Oc = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function hn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, o;
  if (typeof e != "object" && (e = [e]), zt(e))
    for (s = 0, o = e.length; s < o; s++)
      t.call(null, e[s], s, e);
  else {
    if (fn(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), r = i.length;
    let a;
    for (s = 0; s < r; s++)
      a = i[s], t.call(null, e[a], a, e);
  }
}
function mr(e, t) {
  if (fn(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, o;
  for (; s-- > 0; )
    if (o = n[s], t === o.toLowerCase())
      return o;
  return null;
}
const vt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, yr = (e) => !Ft(e) && e !== vt;
function Es() {
  const { caseless: e, skipUndefined: t } = yr(this) && this || {}, n = {}, s = (o, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const r = e && mr(n, i) || i;
    Cn(n[r]) && Cn(o) ? n[r] = Es(n[r], o) : Cn(o) ? n[r] = Es({}, o) : zt(o) ? n[r] = o.slice() : (!t || !Ft(o)) && (n[r] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && hn(arguments[o], s);
  return n;
}
const Lc = (e, t, n, { allOwnKeys: s } = {}) => (hn(
  t,
  (o, i) => {
    n && Se(o) ? Object.defineProperty(e, i, {
      value: dr(o, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, i, {
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: s }
), e), Uc = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Bc = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Fc = (e, t, n, s) => {
  let o, i, r;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      r = o[i], (!s || s(r, e, t)) && !a[r] && (t[r] = e[r], a[r] = !0);
    e = n !== !1 && $s(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, zc = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, Hc = (e) => {
  if (!e) return null;
  if (zt(e)) return e;
  let t = e.length;
  if (!gr(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Wc = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && $s(Uint8Array)), Yc = (e, t) => {
  const s = (e && e[Gn]).call(e);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, Gc = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, Vc = We("HTMLFormElement"), Zc = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, s, o) {
  return s.toUpperCase() + o;
}), Zo = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Xc = We("RegExp"), br = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  hn(n, (o, i) => {
    let r;
    (r = t(o, i, e)) !== !1 && (s[i] = r || o);
  }), Object.defineProperties(e, s);
}, Jc = (e) => {
  br(e, (t, n) => {
    if (Se(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (Se(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Kc = (e, t) => {
  const n = {}, s = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return zt(e) ? s(e) : s(String(e).split(t)), n;
}, Qc = () => {
}, qc = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function _c(e) {
  return !!(e && Se(e.append) && e[hr] === "FormData" && e[Gn]);
}
const $c = (e) => {
  const t = new Array(10), n = (s, o) => {
    if (dn(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (fn(s))
        return s;
      if (!("toJSON" in s)) {
        t[o] = s;
        const i = zt(s) ? [] : {};
        return hn(s, (r, a) => {
          const f = n(r, o + 1);
          !Ft(f) && (i[a] = f);
        }), t[o] = void 0, i;
      }
    }
    return s;
  };
  return n(e, 0);
}, eu = We("AsyncFunction"), tu = (e) => e && (dn(e) || Se(e)) && Se(e.then) && Se(e.catch), wr = ((e, t) => e ? setImmediate : t ? ((n, s) => (vt.addEventListener(
  "message",
  ({ source: o, data: i }) => {
    o === vt && i === n && s.length && s.shift()();
  },
  !1
), (o) => {
  s.push(o), vt.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Se(vt.postMessage)), nu = typeof queueMicrotask < "u" ? queueMicrotask.bind(vt) : typeof process < "u" && process.nextTick || wr, su = (e) => e != null && Se(e[Gn]), b = {
  isArray: zt,
  isArrayBuffer: pr,
  isBuffer: fn,
  isFormData: Tc,
  isArrayBufferView: yc,
  isString: bc,
  isNumber: gr,
  isBoolean: wc,
  isObject: dn,
  isPlainObject: Cn,
  isEmptyObject: Ac,
  isReadableStream: Pc,
  isRequest: jc,
  isResponse: kc,
  isHeaders: Dc,
  isUndefined: Ft,
  isDate: vc,
  isFile: Mc,
  isReactNativeBlob: Ic,
  isReactNative: Cc,
  isBlob: Rc,
  isRegExp: Xc,
  isFunction: Se,
  isStream: Sc,
  isURLSearchParams: Nc,
  isTypedArray: Wc,
  isFileList: Ec,
  forEach: hn,
  merge: Es,
  extend: Lc,
  trim: Oc,
  stripBOM: Uc,
  inherits: Bc,
  toFlatObject: Fc,
  kindOf: Vn,
  kindOfTest: We,
  endsWith: zc,
  toArray: Hc,
  forEachEntry: Yc,
  matchAll: Gc,
  isHTMLForm: Vc,
  hasOwnProperty: Zo,
  hasOwnProp: Zo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: br,
  freezeMethods: Jc,
  toObjectSet: Kc,
  toCamelCase: Zc,
  noop: Qc,
  toFiniteNumber: qc,
  findKey: mr,
  global: vt,
  isContextDefined: yr,
  isSpecCompliantForm: _c,
  toJSONObject: $c,
  isAsyncFn: eu,
  isThenable: tu,
  setImmediate: wr,
  asap: nu,
  isIterable: su
};
let F = class Ar extends Error {
  static from(t, n, s, o, i, r) {
    const a = new Ar(t.message, n || t.code, s, o, i);
    return a.cause = t, a.name = t.name, t.status != null && a.status == null && (a.status = t.status), r && Object.assign(a, r), a;
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
  constructor(t, n, s, o, i) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), s && (this.config = s), o && (this.request = o), i && (this.response = i, this.status = i.status);
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
      config: b.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
F.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
F.ERR_BAD_OPTION = "ERR_BAD_OPTION";
F.ECONNABORTED = "ECONNABORTED";
F.ETIMEDOUT = "ETIMEDOUT";
F.ERR_NETWORK = "ERR_NETWORK";
F.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
F.ERR_DEPRECATED = "ERR_DEPRECATED";
F.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
F.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
F.ERR_CANCELED = "ERR_CANCELED";
F.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
F.ERR_INVALID_URL = "ERR_INVALID_URL";
const ou = null;
function Ss(e) {
  return b.isPlainObject(e) || b.isArray(e);
}
function vr(e) {
  return b.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function cs(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = vr(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function iu(e) {
  return b.isArray(e) && !e.some(Ss);
}
const ru = b.toFlatObject(b, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Xn(e, t, n) {
  if (!b.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = b.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(y, A) {
      return !b.isUndefined(A[y]);
    }
  );
  const s = n.metaTokens, o = n.visitor || c, i = n.dots, r = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(t);
  if (!b.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (b.isDate(g))
      return g.toISOString();
    if (b.isBoolean(g))
      return g.toString();
    if (!f && b.isBlob(g))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(g) || b.isTypedArray(g) ? f && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function c(g, y, A) {
    let R = g;
    if (b.isReactNative(t) && b.isReactNativeBlob(g))
      return t.append(cs(A, y, i), l(g)), !1;
    if (g && !A && typeof g == "object") {
      if (b.endsWith(y, "{}"))
        y = s ? y : y.slice(0, -2), g = JSON.stringify(g);
      else if (b.isArray(g) && iu(g) || (b.isFileList(g) || b.endsWith(y, "[]")) && (R = b.toArray(g)))
        return y = vr(y), R.forEach(function(D, E) {
          !(b.isUndefined(D) || D === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            r === !0 ? cs([y], E, i) : r === null ? y : y + "[]",
            l(D)
          );
        }), !1;
    }
    return Ss(g) ? !0 : (t.append(cs(A, y, i), l(g)), !1);
  }
  const u = [], h = Object.assign(ru, {
    defaultVisitor: c,
    convertValue: l,
    isVisitable: Ss
  });
  function m(g, y) {
    if (!b.isUndefined(g)) {
      if (u.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      u.push(g), b.forEach(g, function(R, B) {
        (!(b.isUndefined(R) || R === null) && o.call(t, R, b.isString(B) ? B.trim() : B, y, h)) === !0 && m(R, y ? y.concat(B) : [B]);
      }), u.pop();
    }
  }
  if (!b.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function Xo(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
    return t[s];
  });
}
function eo(e, t) {
  this._pairs = [], e && Xn(e, this, t);
}
const Mr = eo.prototype;
Mr.append = function(t, n) {
  this._pairs.push([t, n]);
};
Mr.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, Xo);
  } : Xo;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function lu(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ir(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || lu, o = b.isFunction(n) ? {
    serialize: n
  } : n, i = o && o.serialize;
  let r;
  if (i ? r = i(t, o) : r = b.isURLSearchParams(t) ? t.toString() : new eo(t, o).toString(s), r) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return e;
}
class Jo {
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
  use(t, n, s) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
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
    b.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const to = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, au = typeof URLSearchParams < "u" ? URLSearchParams : eo, cu = typeof FormData < "u" ? FormData : null, uu = typeof Blob < "u" ? Blob : null, fu = {
  isBrowser: !0,
  classes: {
    URLSearchParams: au,
    FormData: cu,
    Blob: uu
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, no = typeof window < "u" && typeof document < "u", xs = typeof navigator == "object" && navigator || void 0, du = no && (!xs || ["ReactNative", "NativeScript", "NS"].indexOf(xs.product) < 0), hu = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", pu = no && window.location.href || "http://localhost", gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: no,
  hasStandardBrowserEnv: du,
  hasStandardBrowserWebWorkerEnv: hu,
  navigator: xs,
  origin: pu
}, Symbol.toStringTag, { value: "Module" })), ye = {
  ...gu,
  ...fu
};
function mu(e, t) {
  return Xn(e, new ye.classes.URLSearchParams(), {
    visitor: function(n, s, o, i) {
      return ye.isNode && b.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function yu(e) {
  return b.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function bu(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const o = n.length;
  let i;
  for (s = 0; s < o; s++)
    i = n[s], t[i] = e[i];
  return t;
}
function Cr(e) {
  function t(n, s, o, i) {
    let r = n[i++];
    if (r === "__proto__") return !0;
    const a = Number.isFinite(+r), f = i >= n.length;
    return r = !r && b.isArray(o) ? o.length : r, f ? (b.hasOwnProp(o, r) ? o[r] = [o[r], s] : o[r] = s, !a) : ((!o[r] || !b.isObject(o[r])) && (o[r] = []), t(n, s, o[r], i) && b.isArray(o[r]) && (o[r] = bu(o[r])), !a);
  }
  if (b.isFormData(e) && b.isFunction(e.entries)) {
    const n = {};
    return b.forEachEntry(e, (s, o) => {
      t(yu(s), o, n, 0);
    }), n;
  }
  return null;
}
function wu(e, t, n) {
  if (b.isString(e))
    try {
      return (t || JSON.parse)(e), b.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const pn = {
  transitional: to,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const s = n.getContentType() || "", o = s.indexOf("application/json") > -1, i = b.isObject(t);
      if (i && b.isHTMLForm(t) && (t = new FormData(t)), b.isFormData(t))
        return o ? JSON.stringify(Cr(t)) : t;
      if (b.isArrayBuffer(t) || b.isBuffer(t) || b.isStream(t) || b.isFile(t) || b.isBlob(t) || b.isReadableStream(t))
        return t;
      if (b.isArrayBufferView(t))
        return t.buffer;
      if (b.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let a;
      if (i) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return mu(t, this.formSerializer).toString();
        if ((a = b.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const f = this.env && this.env.FormData;
          return Xn(
            a ? { "files[]": t } : t,
            f && new f(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), wu(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || pn.transitional, s = n && n.forcedJSONParsing, o = this.responseType === "json";
      if (b.isResponse(t) || b.isReadableStream(t))
        return t;
      if (t && b.isString(t) && (s && !this.responseType || o)) {
        const r = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (a) {
          if (r)
            throw a.name === "SyntaxError" ? F.from(a, F.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: ye.classes.FormData,
    Blob: ye.classes.Blob
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
b.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  pn.headers[e] = {};
});
const Au = b.toObjectSet([
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
]), vu = (e) => {
  const t = {};
  let n, s, o;
  return e && e.split(`
`).forEach(function(r) {
    o = r.indexOf(":"), n = r.substring(0, o).trim().toLowerCase(), s = r.substring(o + 1).trim(), !(!n || t[n] && Au[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Ko = Symbol("internals"), Mu = (e) => !/[\r\n]/.test(e);
function Rr(e, t) {
  if (!(e === !1 || e == null)) {
    if (b.isArray(e)) {
      e.forEach((n) => Rr(n, t));
      return;
    }
    if (!Mu(String(e)))
      throw new Error(`Invalid character in header content ["${t}"]`);
  }
}
function Xt(e) {
  return e && String(e).trim().toLowerCase();
}
function Iu(e) {
  let t = e.length;
  for (; t > 0; ) {
    const n = e.charCodeAt(t - 1);
    if (n !== 10 && n !== 13)
      break;
    t -= 1;
  }
  return t === e.length ? e : e.slice(0, t);
}
function Rn(e) {
  return e === !1 || e == null ? e : b.isArray(e) ? e.map(Rn) : Iu(String(e));
}
function Cu(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const Ru = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function us(e, t, n, s, o) {
  if (b.isFunction(s))
    return s.call(this, t, n);
  if (o && (t = n), !!b.isString(t)) {
    if (b.isString(s))
      return t.indexOf(s) !== -1;
    if (b.isRegExp(s))
      return s.test(t);
  }
}
function Eu(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Su(e, t) {
  const n = b.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function(o, i, r) {
        return this[s].call(this, t, o, i, r);
      },
      configurable: !0
    });
  });
}
let xe = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const o = this;
    function i(a, f, l) {
      const c = Xt(f);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const u = b.findKey(o, c);
      (!u || o[u] === void 0 || l === !0 || l === void 0 && o[u] !== !1) && (Rr(a, f), o[u || f] = Rn(a));
    }
    const r = (a, f) => b.forEach(a, (l, c) => i(l, c, f));
    if (b.isPlainObject(t) || t instanceof this.constructor)
      r(t, n);
    else if (b.isString(t) && (t = t.trim()) && !Ru(t))
      r(vu(t), n);
    else if (b.isObject(t) && b.isIterable(t)) {
      let a = {}, f, l;
      for (const c of t) {
        if (!b.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = c[0]] = (f = a[l]) ? b.isArray(f) ? [...f, c[1]] : [f, c[1]] : c[1];
      }
      r(a, n);
    } else
      t != null && i(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = Xt(t), t) {
      const s = b.findKey(this, t);
      if (s) {
        const o = this[s];
        if (!n)
          return o;
        if (n === !0)
          return Cu(o);
        if (b.isFunction(n))
          return n.call(this, o, s);
        if (b.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Xt(t), t) {
      const s = b.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || us(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let o = !1;
    function i(r) {
      if (r = Xt(r), r) {
        const a = b.findKey(s, r);
        a && (!n || us(s, s[a], a, n)) && (delete s[a], o = !0);
      }
    }
    return b.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, o = !1;
    for (; s--; ) {
      const i = n[s];
      (!t || us(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, s = {};
    return b.forEach(this, (o, i) => {
      const r = b.findKey(s, i);
      if (r) {
        n[r] = Rn(o), delete n[i];
        return;
      }
      const a = t ? Eu(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Rn(o), s[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return b.forEach(this, (s, o) => {
      s != null && s !== !1 && (n[o] = t && b.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
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
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((o) => s.set(o)), s;
  }
  static accessor(t) {
    const s = (this[Ko] = this[Ko] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(r) {
      const a = Xt(r);
      s[a] || (Su(o, r), s[a] = !0);
    }
    return b.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
xe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
b.reduceDescriptors(xe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
b.freezeMethods(xe);
function fs(e, t) {
  const n = this || pn, s = t || n, o = xe.from(s.headers);
  let i = s.data;
  return b.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Er(e) {
  return !!(e && e.__CANCEL__);
}
let gn = class extends F {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, s) {
    super(t ?? "canceled", F.ERR_CANCELED, n, s), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Sr(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(
    new F(
      "Request failed with status code " + n.status,
      [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    )
  );
}
function xu(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Tu(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let o = 0, i = 0, r;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const l = Date.now(), c = s[i];
    r || (r = l), n[o] = f, s[o] = l;
    let u = i, h = 0;
    for (; u !== o; )
      h += n[u++], u = u % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - r < t)
      return;
    const m = c && l - c;
    return m ? Math.round(h * 1e3 / m) : void 0;
  };
}
function Nu(e, t) {
  let n = 0, s = 1e3 / t, o, i;
  const r = (l, c = Date.now()) => {
    n = c, o = null, i && (clearTimeout(i), i = null), e(...l);
  };
  return [(...l) => {
    const c = Date.now(), u = c - n;
    u >= s ? r(l, c) : (o = l, i || (i = setTimeout(() => {
      i = null, r(o);
    }, s - u)));
  }, () => o && r(o)];
}
const kn = (e, t, n = 3) => {
  let s = 0;
  const o = Tu(50, 250);
  return Nu((i) => {
    const r = i.loaded, a = i.lengthComputable ? i.total : void 0, f = r - s, l = o(f), c = r <= a;
    s = r;
    const u = {
      loaded: r,
      total: a,
      progress: a ? r / a : void 0,
      bytes: f,
      rate: l || void 0,
      estimated: l && a && c ? (a - r) / l : void 0,
      event: i,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(u);
  }, n);
}, Qo = (e, t) => {
  const n = e != null;
  return [
    (s) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: s
    }),
    t[1]
  ];
}, qo = (e) => (...t) => b.asap(() => e(...t)), Pu = ye.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ye.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ye.origin),
  ye.navigator && /(msie|trident)/i.test(ye.navigator.userAgent)
) : () => !0, ju = ye.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, s, o, i, r) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      b.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), b.isString(s) && a.push(`path=${s}`), b.isString(o) && a.push(`domain=${o}`), i === !0 && a.push("secure"), b.isString(r) && a.push(`SameSite=${r}`), document.cookie = a.join("; ");
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
function ku(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Du(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function xr(e, t, n) {
  let s = !ku(t);
  return e && (s || n == !1) ? Du(e, t) : t;
}
const _o = (e) => e instanceof xe ? { ...e } : e;
function Et(e, t) {
  t = t || {};
  const n = {};
  function s(l, c, u, h) {
    return b.isPlainObject(l) && b.isPlainObject(c) ? b.merge.call({ caseless: h }, l, c) : b.isPlainObject(c) ? b.merge({}, c) : b.isArray(c) ? c.slice() : c;
  }
  function o(l, c, u, h) {
    if (b.isUndefined(c)) {
      if (!b.isUndefined(l))
        return s(void 0, l, u, h);
    } else return s(l, c, u, h);
  }
  function i(l, c) {
    if (!b.isUndefined(c))
      return s(void 0, c);
  }
  function r(l, c) {
    if (b.isUndefined(c)) {
      if (!b.isUndefined(l))
        return s(void 0, l);
    } else return s(void 0, c);
  }
  function a(l, c, u) {
    if (u in t)
      return s(l, c);
    if (u in e)
      return s(void 0, l);
  }
  const f = {
    url: i,
    method: i,
    data: i,
    baseURL: r,
    transformRequest: r,
    transformResponse: r,
    paramsSerializer: r,
    timeout: r,
    timeoutMessage: r,
    withCredentials: r,
    withXSRFToken: r,
    adapter: r,
    responseType: r,
    xsrfCookieName: r,
    xsrfHeaderName: r,
    onUploadProgress: r,
    onDownloadProgress: r,
    decompress: r,
    maxContentLength: r,
    maxBodyLength: r,
    beforeRedirect: r,
    transport: r,
    httpAgent: r,
    httpsAgent: r,
    cancelToken: r,
    socketPath: r,
    responseEncoding: r,
    validateStatus: a,
    headers: (l, c, u) => o(_o(l), _o(c), u, !0)
  };
  return b.forEach(Object.keys({ ...e, ...t }), function(c) {
    if (c === "__proto__" || c === "constructor" || c === "prototype") return;
    const u = b.hasOwnProp(f, c) ? f[c] : o, h = u(e[c], t[c], c);
    b.isUndefined(h) && u !== a || (n[c] = h);
  }), n;
}
const Tr = (e) => {
  const t = Et({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: i, headers: r, auth: a } = t;
  if (t.headers = r = xe.from(r), t.url = Ir(
    xr(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), a && r.set(
    "Authorization",
    "Basic " + btoa(
      (a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")
    )
  ), b.isFormData(n)) {
    if (ye.hasStandardBrowserEnv || ye.hasStandardBrowserWebWorkerEnv)
      r.setContentType(void 0);
    else if (b.isFunction(n.getHeaders)) {
      const f = n.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(f).forEach(([c, u]) => {
        l.includes(c.toLowerCase()) && r.set(c, u);
      });
    }
  }
  if (ye.hasStandardBrowserEnv && (s && b.isFunction(s) && (s = s(t)), s || s !== !1 && Pu(t.url))) {
    const f = o && i && ju.read(i);
    f && r.set(o, f);
  }
  return t;
}, Ou = typeof XMLHttpRequest < "u", Lu = Ou && function(e) {
  return new Promise(function(n, s) {
    const o = Tr(e);
    let i = o.data;
    const r = xe.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: f, onDownloadProgress: l } = o, c, u, h, m, g;
    function y() {
      m && m(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let A = new XMLHttpRequest();
    A.open(o.method.toUpperCase(), o.url, !0), A.timeout = o.timeout;
    function R() {
      if (!A)
        return;
      const D = xe.from(
        "getAllResponseHeaders" in A && A.getAllResponseHeaders()
      ), x = {
        data: !a || a === "text" || a === "json" ? A.responseText : A.response,
        status: A.status,
        statusText: A.statusText,
        headers: D,
        config: e,
        request: A
      };
      Sr(
        function(_) {
          n(_), y();
        },
        function(_) {
          s(_), y();
        },
        x
      ), A = null;
    }
    "onloadend" in A ? A.onloadend = R : A.onreadystatechange = function() {
      !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, A.onabort = function() {
      A && (s(new F("Request aborted", F.ECONNABORTED, e, A)), A = null);
    }, A.onerror = function(E) {
      const x = E && E.message ? E.message : "Network Error", W = new F(x, F.ERR_NETWORK, e, A);
      W.event = E || null, s(W), A = null;
    }, A.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const x = o.transitional || to;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), s(
        new F(
          E,
          x.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
          e,
          A
        )
      ), A = null;
    }, i === void 0 && r.setContentType(null), "setRequestHeader" in A && b.forEach(r.toJSON(), function(E, x) {
      A.setRequestHeader(x, E);
    }), b.isUndefined(o.withCredentials) || (A.withCredentials = !!o.withCredentials), a && a !== "json" && (A.responseType = o.responseType), l && ([h, g] = kn(l, !0), A.addEventListener("progress", h)), f && A.upload && ([u, m] = kn(f), A.upload.addEventListener("progress", u), A.upload.addEventListener("loadend", m)), (o.cancelToken || o.signal) && (c = (D) => {
      A && (s(!D || D.type ? new gn(null, e, A) : D), A.abort(), A = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const B = xu(o.url);
    if (B && ye.protocols.indexOf(B) === -1) {
      s(
        new F(
          "Unsupported protocol " + B + ":",
          F.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    A.send(i || null);
  });
}, Uu = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let s = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const c = l instanceof Error ? l : this.reason;
        s.abort(
          c instanceof F ? c : new gn(c instanceof Error ? c.message : c)
        );
      }
    };
    let r = t && setTimeout(() => {
      r = null, i(new F(`timeout of ${t}ms exceeded`, F.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (r && clearTimeout(r), r = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: f } = s;
    return f.unsubscribe = () => b.asap(a), f;
  }
}, Bu = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, o;
  for (; s < n; )
    o = s + t, yield e.slice(s, o), s = o;
}, Fu = async function* (e, t) {
  for await (const n of zu(e))
    yield* Bu(n, t);
}, zu = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: s } = await t.read();
      if (n)
        break;
      yield s;
    }
  } finally {
    await t.cancel();
  }
}, $o = (e, t, n, s) => {
  const o = Fu(e, t);
  let i = 0, r, a = (f) => {
    r || (r = !0, s && s(f));
  };
  return new ReadableStream(
    {
      async pull(f) {
        try {
          const { done: l, value: c } = await o.next();
          if (l) {
            a(), f.close();
            return;
          }
          let u = c.byteLength;
          if (n) {
            let h = i += u;
            n(h);
          }
          f.enqueue(new Uint8Array(c));
        } catch (l) {
          throw a(l), l;
        }
      },
      cancel(f) {
        return a(f), o.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, ei = 64 * 1024, { isFunction: vn } = b, Hu = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(b.global), { ReadableStream: ti, TextEncoder: ni } = b.global, si = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Wu = (e) => {
  e = b.merge.call(
    {
      skipUndefined: !0
    },
    Hu,
    e
  );
  const { fetch: t, Request: n, Response: s } = e, o = t ? vn(t) : typeof fetch == "function", i = vn(n), r = vn(s);
  if (!o)
    return !1;
  const a = o && vn(ti), f = o && (typeof ni == "function" ? /* @__PURE__ */ ((g) => (y) => g.encode(y))(new ni()) : async (g) => new Uint8Array(await new n(g).arrayBuffer())), l = i && a && si(() => {
    let g = !1;
    const y = new ti(), A = new n(ye.origin, {
      body: y,
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }).headers.has("Content-Type");
    return y.cancel(), g && !A;
  }), c = r && a && si(() => b.isReadableStream(new s("").body)), u = {
    stream: c && ((g) => g.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !u[g] && (u[g] = (y, A) => {
      let R = y && y[g];
      if (R)
        return R.call(y);
      throw new F(
        `Response type '${g}' is not supported`,
        F.ERR_NOT_SUPPORT,
        A
      );
    });
  });
  const h = async (g) => {
    if (g == null)
      return 0;
    if (b.isBlob(g))
      return g.size;
    if (b.isSpecCompliantForm(g))
      return (await new n(ye.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (b.isArrayBufferView(g) || b.isArrayBuffer(g))
      return g.byteLength;
    if (b.isURLSearchParams(g) && (g = g + ""), b.isString(g))
      return (await f(g)).byteLength;
  }, m = async (g, y) => {
    const A = b.toFiniteNumber(g.getContentLength());
    return A ?? h(y);
  };
  return async (g) => {
    let {
      url: y,
      method: A,
      data: R,
      signal: B,
      cancelToken: D,
      timeout: E,
      onDownloadProgress: x,
      onUploadProgress: W,
      responseType: _,
      headers: De,
      withCredentials: tt = "same-origin",
      fetchOptions: Ye
    } = Tr(g), ut = t || fetch;
    _ = _ ? (_ + "").toLowerCase() : "text";
    let nt = Uu(
      [B, D && D.toAbortSignal()],
      E
    ), Ge = null;
    const Ue = nt && nt.unsubscribe && (() => {
      nt.unsubscribe();
    });
    let Ht;
    try {
      if (W && l && A !== "get" && A !== "head" && (Ht = await m(De, R)) !== 0) {
        let pe = new n(y, {
          method: "POST",
          body: R,
          duplex: "half"
        }), de;
        if (b.isFormData(R) && (de = pe.headers.get("content-type")) && De.setContentType(de), pe.body) {
          const [Nt, Pt] = Qo(
            Ht,
            kn(qo(W))
          );
          R = $o(pe.body, ei, Nt, Pt);
        }
      }
      b.isString(tt) || (tt = tt ? "include" : "omit");
      const K = i && "credentials" in n.prototype, $ = {
        ...Ye,
        signal: nt,
        method: A.toUpperCase(),
        headers: De.normalize().toJSON(),
        body: R,
        duplex: "half",
        credentials: K ? tt : void 0
      };
      Ge = i && new n(y, $);
      let V = await (i ? ut(Ge, Ye) : ut(y, $));
      const Ve = c && (_ === "stream" || _ === "response");
      if (c && (x || Ve && Ue)) {
        const pe = {};
        ["status", "statusText", "headers"].forEach((mn) => {
          pe[mn] = V[mn];
        });
        const de = b.toFiniteNumber(V.headers.get("content-length")), [Nt, Pt] = x && Qo(
          de,
          kn(qo(x), !0)
        ) || [];
        V = new s(
          $o(V.body, ei, Nt, () => {
            Pt && Pt(), Ue && Ue();
          }),
          pe
        );
      }
      _ = _ || "text";
      let Tt = await u[b.findKey(u, _) || "text"](
        V,
        g
      );
      return !Ve && Ue && Ue(), await new Promise((pe, de) => {
        Sr(pe, de, {
          data: Tt,
          headers: xe.from(V.headers),
          status: V.status,
          statusText: V.statusText,
          config: g,
          request: Ge
        });
      });
    } catch (K) {
      throw Ue && Ue(), K && K.name === "TypeError" && /Load failed|fetch/i.test(K.message) ? Object.assign(
        new F(
          "Network Error",
          F.ERR_NETWORK,
          g,
          Ge,
          K && K.response
        ),
        {
          cause: K.cause || K
        }
      ) : F.from(K, K && K.code, g, Ge, K && K.response);
    }
  };
}, Yu = /* @__PURE__ */ new Map(), Nr = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: s, Response: o } = t, i = [s, o, n];
  let r = i.length, a = r, f, l, c = Yu;
  for (; a--; )
    f = i[a], l = c.get(f), l === void 0 && c.set(f, l = a ? /* @__PURE__ */ new Map() : Wu(t)), c = l;
  return l;
};
Nr();
const so = {
  http: ou,
  xhr: Lu,
  fetch: {
    get: Nr
  }
};
b.forEach(so, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const oi = (e) => `- ${e}`, Gu = (e) => b.isFunction(e) || e === null || e === !1;
function Vu(e, t) {
  e = b.isArray(e) ? e : [e];
  const { length: n } = e;
  let s, o;
  const i = {};
  for (let r = 0; r < n; r++) {
    s = e[r];
    let a;
    if (o = s, !Gu(s) && (o = so[(a = String(s)).toLowerCase()], o === void 0))
      throw new F(`Unknown adapter '${a}'`);
    if (o && (b.isFunction(o) || (o = o.get(t))))
      break;
    i[a || "#" + r] = o;
  }
  if (!o) {
    const r = Object.entries(i).map(
      ([f, l]) => `adapter ${f} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? r.length > 1 ? `since :
` + r.map(oi).join(`
`) : " " + oi(r[0]) : "as no adapter specified";
    throw new F(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Pr = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Vu,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: so
};
function ds(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new gn(null, e);
}
function ii(e) {
  return ds(e), e.headers = xe.from(e.headers), e.data = fs.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Pr.getAdapter(e.adapter || pn.adapter, e)(e).then(
    function(s) {
      return ds(e), s.data = fs.call(e, e.transformResponse, s), s.headers = xe.from(s.headers), s;
    },
    function(s) {
      return Er(s) || (ds(e), s && s.response && (s.response.data = fs.call(
        e,
        e.transformResponse,
        s.response
      ), s.response.headers = xe.from(s.response.headers))), Promise.reject(s);
    }
  );
}
const jr = "1.15.0", Jn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Jn[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ri = {};
Jn.transitional = function(t, n, s) {
  function o(i, r) {
    return "[Axios v" + jr + "] Transitional option '" + i + "'" + r + (s ? ". " + s : "");
  }
  return (i, r, a) => {
    if (t === !1)
      throw new F(
        o(r, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED
      );
    return n && !ri[r] && (ri[r] = !0, console.warn(
      o(
        r,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, r, a) : !0;
  };
};
Jn.spelling = function(t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function Zu(e, t, n) {
  if (typeof e != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let o = s.length;
  for (; o-- > 0; ) {
    const i = s[o], r = t[i];
    if (r) {
      const a = e[i], f = a === void 0 || r(a, i, e);
      if (f !== !0)
        throw new F(
          "option " + i + " must be " + f,
          F.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new F("Unknown option " + i, F.ERR_BAD_OPTION);
  }
}
const En = {
  assertOptions: Zu,
  validators: Jn
}, Oe = En.validators;
let Ct = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Jo(),
      response: new Jo()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (s) {
      if (s instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const i = (() => {
          if (!o.stack)
            return "";
          const r = o.stack.indexOf(`
`);
          return r === -1 ? "" : o.stack.slice(r + 1);
        })();
        try {
          if (!s.stack)
            s.stack = i;
          else if (i) {
            const r = i.indexOf(`
`), a = r === -1 ? -1 : i.indexOf(`
`, r + 1), f = a === -1 ? "" : i.slice(a + 1);
            String(s.stack).endsWith(f) || (s.stack += `
` + i);
          }
        } catch {
        }
      }
      throw s;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Et(this.defaults, n);
    const { transitional: s, paramsSerializer: o, headers: i } = n;
    s !== void 0 && En.assertOptions(
      s,
      {
        silentJSONParsing: Oe.transitional(Oe.boolean),
        forcedJSONParsing: Oe.transitional(Oe.boolean),
        clarifyTimeoutError: Oe.transitional(Oe.boolean),
        legacyInterceptorReqResOrdering: Oe.transitional(Oe.boolean)
      },
      !1
    ), o != null && (b.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : En.assertOptions(
      o,
      {
        encode: Oe.function,
        serialize: Oe.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), En.assertOptions(
      n,
      {
        baseUrl: Oe.spelling("baseURL"),
        withXsrfToken: Oe.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let r = i && b.merge(i.common, i[n.method]);
    i && b.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (g) => {
      delete i[g];
    }), n.headers = xe.concat(r, i);
    const a = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      if (typeof y.runWhen == "function" && y.runWhen(n) === !1)
        return;
      f = f && y.synchronous;
      const A = n.transitional || to;
      A && A.legacyInterceptorReqResOrdering ? a.unshift(y.fulfilled, y.rejected) : a.push(y.fulfilled, y.rejected);
    });
    const l = [];
    this.interceptors.response.forEach(function(y) {
      l.push(y.fulfilled, y.rejected);
    });
    let c, u = 0, h;
    if (!f) {
      const g = [ii.bind(this), void 0];
      for (g.unshift(...a), g.push(...l), h = g.length, c = Promise.resolve(n); u < h; )
        c = c.then(g[u++], g[u++]);
      return c;
    }
    h = a.length;
    let m = n;
    for (; u < h; ) {
      const g = a[u++], y = a[u++];
      try {
        m = g(m);
      } catch (A) {
        y.call(this, A);
        break;
      }
    }
    try {
      c = ii.call(this, m);
    } catch (g) {
      return Promise.reject(g);
    }
    for (u = 0, h = l.length; u < h; )
      c = c.then(l[u++], l[u++]);
    return c;
  }
  getUri(t) {
    t = Et(this.defaults, t);
    const n = xr(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ir(n, t.params, t.paramsSerializer);
  }
};
b.forEach(["delete", "get", "head", "options"], function(t) {
  Ct.prototype[t] = function(n, s) {
    return this.request(
      Et(s || {}, {
        method: t,
        url: n,
        data: (s || {}).data
      })
    );
  };
});
b.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(i, r, a) {
      return this.request(
        Et(a || {}, {
          method: t,
          headers: s ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: i,
          data: r
        })
      );
    };
  }
  Ct.prototype[t] = n(), Ct.prototype[t + "Form"] = n(!0);
});
let Xu = class kr {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const s = this;
    this.promise.then((o) => {
      if (!s._listeners) return;
      let i = s._listeners.length;
      for (; i-- > 0; )
        s._listeners[i](o);
      s._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const r = new Promise((a) => {
        s.subscribe(a), i = a;
      }).then(o);
      return r.cancel = function() {
        s.unsubscribe(i);
      }, r;
    }, t(function(i, r, a) {
      s.reason || (s.reason = new gn(i, r, a), n(s.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (s) => {
      t.abort(s);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new kr(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function Ju(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ku(e) {
  return b.isObject(e) && e.isAxiosError === !0;
}
const Ts = {
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
Object.entries(Ts).forEach(([e, t]) => {
  Ts[t] = e;
});
function Dr(e) {
  const t = new Ct(e), n = dr(Ct.prototype.request, t);
  return b.extend(n, Ct.prototype, t, { allOwnKeys: !0 }), b.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Dr(Et(e, o));
  }, n;
}
const le = Dr(pn);
le.Axios = Ct;
le.CanceledError = gn;
le.CancelToken = Xu;
le.isCancel = Er;
le.VERSION = jr;
le.toFormData = Xn;
le.AxiosError = F;
le.Cancel = le.CanceledError;
le.all = function(t) {
  return Promise.all(t);
};
le.spread = Ju;
le.isAxiosError = Ku;
le.mergeConfig = Et;
le.AxiosHeaders = xe;
le.formToJSON = (e) => Cr(b.isHTMLForm(e) ? new FormData(e) : e);
le.getAdapter = Pr.getAdapter;
le.HttpStatusCode = Ts;
le.default = le;
const {
  Axios: mp,
  AxiosError: yp,
  CanceledError: bp,
  isCancel: wp,
  CancelToken: Ap,
  VERSION: vp,
  all: Mp,
  Cancel: Ip,
  isAxiosError: Cp,
  spread: Rp,
  toFormData: Ep,
  AxiosHeaders: Sp,
  HttpStatusCode: xp,
  formToJSON: Tp,
  getAdapter: Np,
  mergeConfig: Pp
} = le, oo = 5e3, Or = (e) => {
  throw console.error(e), e.code === "ECONNABORTED" || e.code === "ERR_NETWORK" ? "network" : "failed";
}, Qu = async (e) => await le.delete(e.toString(), { timeout: oo }), qu = async (e, t) => {
  try {
    return await (await le.post(e.toString(), t, {
      timeout: oo
    })).data;
  } catch (n) {
    return Or(n);
  }
}, _u = async (e, t) => {
  try {
    return await (await le.get(e.toString(), {
      params: { session_type: t },
      timeout: oo
    })).data;
  } catch (n) {
    return Or(n);
  }
}, $u = ["failed", "cancelled", "expired", "network"], ef = (e) => $u.includes(e), tf = "Download the app", nf = "on your phone", sf = "Download on the", of = "App Store", rf = "Because you have stopped, no data has been shared.", lf = "Stopped", af = "Close", cf = "If you stop now, no data will be shared.", uf = "Are you sure you want to stop?", ff = "On another device", df = "On this device", hf = "On which device is your NP Wallet app installed?", pf = "This action has been stopped because too much time has passed. This happens to keep your data safe. Please try again.", gf = "Sorry, time is over", mf = "This action was unsuccessful. This may have several reasons. Please try again.", yf = "Sorry, something went wrong", bf = "Get it on", wf = "Google Play", Af = "And don't have the app yet?", vf = "Download the app as director", Mf = "Are you the owner or a director of your organisation?", If = "With the app you can request an authorisation for this service from the owner or a director of your organisation.", Cf = "Download the app as employee", Rf = "Are you an employee?", Ef = "Download the app and set up your wallet. After that you can add this data to your wallet.", Sf = "Download the app", xf = "No NP Wallet app yet?", Tf = "No NP Wallet App yet? Or need help?", Nf = "To NP Wallet website", Pf = "Follow the steps in your NP Wallet app", jf = "Scan the QR code with your phone's camera. It takes you to the app store, where you can install the app.", kf = "I have installed the app", Df = "Install the app on your phone", Of = "Your request is being retrieved", Lf = "Please wait", Uf = "NP Wallet", Bf = "Need help?", Ff = "Your internet connection seems to be down or too slow. Check your connection and try again.", zf = "Sorry, no internet connection", Hf = "No", Wf = "QR code", Yf = "Scan the QR code with your NP Wallet app", Gf = "Try again", Vf = "Stop", Zf = "Close this page and continue in the new opened tab.", Xf = "Success!", Jf = "Login with NP Wallet", Kf = "Yes, stop", Qf = {
  any_store_line1: tf,
  any_store_line2: nf,
  apple_store_line1: sf,
  apple_store_line2: of,
  cancelled_body: rf,
  cancelled_title: lf,
  close: af,
  confirm_stop_body: cf,
  confirm_stop_title: uf,
  device_choice_cross_device: ff,
  device_choice_same_device: df,
  device_choice_title: hf,
  expired_body: pf,
  expired_title: gf,
  failed_body: mf,
  failed_title: yf,
  google_store_line1: bf,
  google_store_line2: wf,
  help_director_description: Af,
  help_director_link: vf,
  help_director_title: Mf,
  help_employee_description: If,
  help_employee_link: Cf,
  help_employee_title: Rf,
  help_issuance_description: Ef,
  help_issuance_link: Sf,
  help_issuance_title: xf,
  help_title: Tf,
  help_to_website: Nf,
  in_progress_title: Pf,
  install_body: jf,
  install_done: kf,
  install_title: Df,
  loading_body: Of,
  loading_title: Lf,
  modal_header: Uf,
  need_help: Bf,
  network_body: Ff,
  network_title: zf,
  no: Hf,
  qr_code_label: Wf,
  qr_code_title: Yf,
  retry: Gf,
  stop: Vf,
  success_body: Zf,
  success_title: Xf,
  wallet_button_text: Jf,
  yes_stop: Kf
}, qf = "Download de app", _f = "op je telefoon", $f = "Download in de", ed = "App Store", td = "Omdat je bent gestopt zijn er geen gegevens gedeeld.", nd = "Gestopt", sd = "Sluiten", od = "Als je stopt worden er geen gegevens gedeeld.", id = "Weet je zeker dat je wilt stoppen?", rd = "Op een ander apparaat", ld = "Op dit apparaat", ad = "Op welk apparaat staat je NP Wallet app?", cd = "Deze actie is gestopt omdat er teveel tijd voorbij is gegaan. Dit is bedoeld om je gegevens veilig te houden. Probeer het opnieuw.", ud = "Sorry, de tijd is voorbij", fd = "Deze actie is niet gelukt. Dit kan verschillende redenen hebben. Probeer het opnieuw.", dd = "Sorry, er gaat iets mis", hd = "Ontdek op", pd = "Google Play", gd = "En heb je de app nog niet?", md = "Download de app als bestuurder", yd = "Ben je eigenaar of bestuurder van je organisatie?", bd = "Je kunt via de app een machtiging aanvragen voor deze service bij de eigenaar of bestuurder van je organisatie.", wd = "Download de app als medewerker", Ad = "Ben je medewerker?", vd = "Download de app en zet je wallet op. Daarna kun je deze gegevens toevoegen aan je wallet.", Md = "Download de app", Id = "Nog geen NP Wallet app?", Cd = "Nog geen NP Wallet app? Of hulp nodig?", Rd = "Naar NP Wallet website", Ed = "Volg de stappen in de NP Wallet app", Sd = "Scan de QR-code met de camera van je telefoon. Je komt dan in de app store, waar je de app kunt installeren.", xd = "Ik heb de app geïnstalleerd", Td = "Installeer de app op je telefoon", Nd = "De gegevens worden opgehaald", Pd = "Even geduld", jd = "NP Wallet", kd = "Hulp nodig?", Dd = "Je verbinding met het internet lijkt niet te werken of is te traag. Controleer je verbinding en probeer het opnieuw.", Od = "Sorry, geen internet", Ld = "Nee", Ud = "QR code", Bd = "Scan de QR-code met je NP Wallet app", Fd = "Probeer opnieuw", zd = "Stoppen", Hd = "Sluit deze pagina en ga verder in het nieuw geopende tabblad.", Wd = "Gelukt!", Yd = "Inloggen met NP Wallet", Gd = "Ja, stop", Vd = {
  any_store_line1: qf,
  any_store_line2: _f,
  apple_store_line1: $f,
  apple_store_line2: ed,
  cancelled_body: td,
  cancelled_title: nd,
  close: sd,
  confirm_stop_body: od,
  confirm_stop_title: id,
  device_choice_cross_device: rd,
  device_choice_same_device: ld,
  device_choice_title: ad,
  expired_body: cd,
  expired_title: ud,
  failed_body: fd,
  failed_title: dd,
  google_store_line1: hd,
  google_store_line2: pd,
  help_director_description: gd,
  help_director_link: md,
  help_director_title: yd,
  help_employee_description: bd,
  help_employee_link: wd,
  help_employee_title: Ad,
  help_issuance_description: vd,
  help_issuance_link: Md,
  help_issuance_title: Id,
  help_title: Cd,
  help_to_website: Rd,
  in_progress_title: Ed,
  install_body: Sd,
  install_done: xd,
  install_title: Td,
  loading_body: Nd,
  loading_title: Pd,
  modal_header: jd,
  need_help: kd,
  network_body: Dd,
  network_title: Od,
  no: Ld,
  qr_code_label: Ud,
  qr_code_title: Bd,
  retry: Fd,
  stop: zd,
  success_body: Hd,
  success_title: Wd,
  wallet_button_text: Yd,
  yes_stop: Gd
}, Te = Symbol("TRANSLATIONS"), io = Symbol("IS_BUSINESS"), ro = Symbol("IS_OVER18"), Kn = Symbol("IS_NBWALLET"), Lr = Symbol("IS_ISSUANCE"), ke = (e, t) => {
  const n = he(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}, li = (e, t, n, s) => {
  const o = s ? Xd[e] : n ? Jd[e] : t ? Zd[e] : St[e];
  return (i) => o[i];
}, St = {
  en: Qf,
  nl: Vd
}, Zd = {
  en: {
    ...St.en,
    wallet_button_text: "Login with Business Wallet",
    modal_header: "Business Wallet",
    device_choice_title: "On which device is your Business Wallet app installed?",
    help_title: "No Business Wallet App yet? Or need help?",
    help_to_website: "To Business Wallet website",
    help_issuance_title: "No Business Wallet app yet?",
    in_progress_title: "Follow the steps in your Business Wallet app",
    qr_code_title: "Scan the QR code with your Business Wallet app"
  },
  nl: {
    ...St.nl,
    wallet_button_text: "Inloggen met Business Wallet",
    modal_header: "Business Wallet",
    device_choice_title: "Op welk apparaat staat je Business Wallet app?",
    help_title: "Nog geen Business Wallet app? Of hulp nodig?",
    help_to_website: "Naar Business Wallet website",
    help_issuance_title: "Nog geen Business Wallet app?",
    in_progress_title: "Volg de stappen in de Business Wallet app",
    qr_code_title: "Scan de QR-code met je Business Wallet app"
  }
}, Xd = {
  en: {
    ...St.en,
    wallet_button_text: "Login with NB Wallet",
    modal_header: "NB Wallet",
    device_choice_title: "On which device is your NB Wallet app installed?",
    help_title: "No NB Wallet App yet? Or need help?",
    help_to_website: "To NB Wallet website",
    help_director_description: "And don't have the NB Wallet app yet?",
    help_employee_description: "With the NB Wallet app you can request an authorisation for this service from the owner or a director of your organisation.",
    help_issuance_title: "No NB Wallet app yet?",
    help_issuance_description: "Download the NB Wallet app and set up your wallet. After that you can add this data to your wallet.",
    in_progress_title: "Follow the steps in your NB Wallet app",
    qr_code_title: "Scan the QR code with your NB Wallet app"
  },
  nl: {
    ...St.nl,
    wallet_button_text: "Inloggen met NB Wallet",
    modal_header: "NB Wallet",
    device_choice_title: "Op welk apparaat staat je NB Wallet app?",
    help_title: "Nog geen NB Wallet app? Of hulp nodig?",
    help_to_website: "Naar NB Wallet website",
    help_director_description: "En heb je de NB Wallet app nog niet?",
    help_employee_description: "Je kunt via de NB Wallet app een machtiging aanvragen voor deze service bij de eigenaar of bestuurder van je organisatie.",
    help_issuance_title: "Nog geen NB Wallet app?",
    help_issuance_description: "Download de NB Wallet app en zet je wallet op. Daarna kun je deze gegevens toevoegen aan je wallet.",
    in_progress_title: "Volg de stappen in de NB Wallet app",
    qr_code_title: "Scan de QR-code met je NB Wallet app"
  }
}, Jd = {
  en: {
    ...St.en,
    wallet_button_text: "Login with 18up",
    modal_header: "18up",
    device_choice_title: "On which device is your 18up app installed?",
    help_title: "No 18up App yet? Or need help?",
    help_to_website: "To 18up website",
    help_issuance_title: "No 18up app yet?",
    in_progress_title: "Follow the steps in your 18up app",
    qr_code_title: "Scan the QR code with your 18up app"
  },
  nl: {
    ...St.nl,
    wallet_button_text: "Inloggen met 18up",
    modal_header: "18up",
    device_choice_title: "Op welk apparaat staat je 18up app?",
    help_title: "Nog geen 18up app? Of hulp nodig?",
    help_to_website: "Naar 18up website",
    help_issuance_title: "Nog geen 18up app?",
    in_progress_title: "Volg de stappen in de 18up app",
    qr_code_title: "Scan de QR-code met je 18up app"
  }
}, Kd = {
  key: 0,
  href: "/help",
  class: "button link",
  "data-testid": "help"
}, Ur = /* @__PURE__ */ ue({
  __name: "ModalFooter",
  props: {
    modalState: {},
    installRole: {}
  },
  emits: ["close", "stop", "confirm", "retry", "back", "installed"],
  setup(e, { emit: t }) {
    const n = ke(Te), s = t;
    return (o, i) => (U(), Z("footer", null, [
      ["creating", "loading", "in-progress"].includes(e.modalState.kind) ? (U(), Z("a", Kd, [
        i[5] || (i[5] = v("svg", {
          width: "16",
          height: "16",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          v("path", { d: "M6.4 18.5 5 17.1l9.6-9.6H6v-2h12v12h-2V8.9z" })
        ], -1)),
        v("span", null, G(k(n)("need_help")), 1)
      ])) : fe("", !0),
      ["creating", "loading", "in-progress", "confirm-stop"].includes(e.modalState.kind) ? (U(), Z("button", {
        key: 1,
        type: "button",
        class: $e(["button", {
          secondary: ["creating", "loading", "in-progress"].includes(e.modalState.kind),
          error: e.modalState.kind === "confirm-stop"
        }]),
        "data-testid": "cancel_button",
        onClick: i[0] || (i[0] = (r) => e.modalState.kind === "confirm-stop" ? s("stop") : s("confirm"))
      }, [
        i[6] || (i[6] = v("svg", {
          width: "16",
          height: "16",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          v("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.9 7.9 0 0 1 12 20m6.31-3.1L7.1 5.69A7.9 7.9 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9" })
        ], -1)),
        v("span", null, G(e.modalState.kind === "confirm-stop" ? k(n)("yes_stop") : k(n)("stop")), 1)
      ], 2)) : fe("", !0),
      e.modalState.kind === "error" ? (U(), Z("button", {
        key: 2,
        type: "button",
        class: "button primary",
        "data-testid": "retry_button",
        onClick: i[1] || (i[1] = (r) => s("retry"))
      }, [
        i[7] || (i[7] = v("svg", {
          width: "16",
          height: "16",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          v("path", { d: "M12 22.5q-1.874 0-3.512-.712a9.1 9.1 0 0 1-2.85-1.926 9.1 9.1 0 0 1-1.926-2.85A8.7 8.7 0 0 1 3 13.5h2q0 2.925 2.038 4.962T12 20.5q2.925 0 4.962-2.038T19 13.5q0-2.925-2.038-4.963Q14.925 6.5 12 6.5h-.15l1.55 1.55L12 9.5l-4-4 4-4 1.4 1.45-1.55 1.55H12q1.875 0 3.513.713a9.2 9.2 0 0 1 2.85 1.924 9.2 9.2 0 0 1 1.925 2.85A8.7 8.7 0 0 1 21 13.5q0 1.874-.712 3.512a9.2 9.2 0 0 1-1.925 2.85 9.2 9.2 0 0 1-2.85 1.926A8.7 8.7 0 0 1 12 22.5" })
        ], -1)),
        v("span", null, G(k(n)("retry")), 1)
      ])) : fe("", !0),
      e.modalState.kind === "created" && e.installRole ? (U(), Z("button", {
        key: 3,
        type: "button",
        class: "button primary",
        "data-testid": "installed_button",
        onClick: i[2] || (i[2] = (r) => s("installed"))
      }, [
        i[8] || (i[8] = v("svg", {
          width: "16",
          height: "16",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          v("path", { d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" })
        ], -1)),
        v("span", null, G(k(n)("install_done")), 1)
      ])) : fe("", !0),
      ["created", "error", "success"].includes(e.modalState.kind) && !(e.modalState.kind === "created" && e.installRole) ? (U(), Z("button", {
        key: 4,
        type: "button",
        class: $e(["button", {
          link: ["created", "error"].includes(e.modalState.kind) || e.modalState.kind === "success" && e.modalState.session.sessionType === "cross_device",
          primary: e.modalState.kind === "success" && e.modalState.session.sessionType === "same_device"
        }]),
        "data-testid": "close_button",
        onClick: i[3] || (i[3] = (r) => e.modalState.kind === "created" ? s("stop") : s("close"))
      }, [
        i[9] || (i[9] = v("svg", {
          width: "16",
          height: "16",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          v("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
        ], -1)),
        v("span", null, G(k(n)("close")), 1)
      ], 2)) : fe("", !0),
      e.modalState.kind === "confirm-stop" ? (U(), Z("button", {
        key: 5,
        type: "button",
        class: "button link",
        "data-testid": "back_button",
        onClick: i[4] || (i[4] = (r) => s("back"))
      }, [
        i[10] || (i[10] = v("svg", {
          width: "16",
          height: "16",
          fill: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          v("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" })
        ], -1)),
        v("span", null, G(k(n)("no")), 1)
      ])) : fe("", !0)
    ]));
  }
}), Br = /* @__PURE__ */ ue({
  __name: "ModalHeader",
  setup(e) {
    const t = ke(Te);
    return (n, s) => (U(), Z("header", null, [
      v("h1", null, G(k(t)("modal_header")), 1)
    ]));
  }
}), Qd = ["href"], Fr = /* @__PURE__ */ ue({
  __name: "HelpLink",
  props: {
    helpBaseUrl: {}
  },
  setup(e) {
    const t = e, n = new URL("/help", t.helpBaseUrl).toString(), s = ke(Te);
    return (o, i) => (U(), Z("a", {
      href: k(n),
      class: "link",
      "data-testid": "help"
    }, [
      v("span", null, G(k(s)("need_help")), 1),
      i[0] || (i[0] = v("svg", {
        width: "16",
        height: "16",
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, [
        v("path", { d: "M6.4 18.5 5 17.1l9.6-9.6H6v-2h12v12h-2V8.9z" })
      ], -1))
    ], 8, Qd));
  }
}), qd = { class: "text" }, _d = { "data-testid": "confirm_stop" }, $d = /* @__PURE__ */ ue({
  __name: "ConfirmStopSection",
  props: {
    helpBaseUrl: {}
  },
  setup(e) {
    const t = ke(Te);
    return (n, s) => (U(), Z(oe, null, [
      v("section", qd, [
        v("h2", _d, G(k(t)("confirm_stop_title")), 1),
        v("p", null, G(k(t)("confirm_stop_body")), 1)
      ]),
      ie(Fr, { helpBaseUrl: e.helpBaseUrl }, null, 8, ["helpBaseUrl"])
    ], 64));
  }
}), eh = {
  class: "buttons",
  "data-testid": "device_choice"
}, th = ["href"], nh = /* @__PURE__ */ ue({
  __name: "DeviceChoice",
  props: {
    ul: {}
  },
  emits: ["choice"],
  setup(e, { emit: t }) {
    const n = ke(Te), s = t;
    return (o, i) => (U(), Z(oe, null, [
      v("h2", null, G(k(n)("device_choice_title")), 1),
      v("section", eh, [
        v("a", {
          role: "button",
          href: e.ul.toString(),
          target: "_blank",
          class: "button primary",
          "data-testid": "same_device_button",
          onClick: i[0] || (i[0] = (r) => s("choice", "same_device"))
        }, [
          i[2] || (i[2] = v("svg", {
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            v("path", { d: "M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H4z" })
          ], -1)),
          v("span", null, G(k(n)("device_choice_same_device")), 1)
        ], 8, th),
        v("button", {
          type: "button",
          class: "button secondary",
          "data-testid": "cross_device_button",
          onClick: i[1] || (i[1] = (r) => s("choice", "cross_device"))
        }, [
          i[3] || (i[3] = v("svg", {
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            v("path", { d: "M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H4z" })
          ], -1)),
          v("span", null, G(k(n)("device_choice_cross_device")), 1)
        ])
      ])
    ], 64));
  }
});
var xt;
((e) => {
  const r = class r {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(l, c, u, h) {
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
      if (this.version = l, this.errorCorrectionLevel = c, l < r.MIN_VERSION || l > r.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (h < -1 || h > 7)
        throw new RangeError("Mask value out of range");
      this.size = l * 4 + 17;
      const m = [];
      for (let y = 0; y < this.size; y++)
        m.push(!1);
      for (let y = 0; y < this.size; y++)
        this.modules.push(m.slice()), this.isFunction.push(m.slice());
      this.drawFunctionPatterns();
      const g = this.addEccAndInterleave(u);
      if (this.drawCodewords(g), h == -1) {
        let y = 1e9;
        for (let A = 0; A < 8; A++) {
          this.applyMask(A), this.drawFormatBits(A);
          const R = this.getPenaltyScore();
          R < y && (h = A, y = R), this.applyMask(A);
        }
      }
      o(0 <= h && h <= 7), this.mask = h, this.applyMask(h), this.drawFormatBits(h), this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(l, c) {
      const u = e.QrSegment.makeSegments(l);
      return r.encodeSegments(u, c);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(l, c) {
      const u = e.QrSegment.makeBytes(l);
      return r.encodeSegments([u], c);
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
    static encodeSegments(l, c, u = 1, h = 40, m = -1, g = !0) {
      if (!(r.MIN_VERSION <= u && u <= h && h <= r.MAX_VERSION) || m < -1 || m > 7)
        throw new RangeError("Invalid value");
      let y, A;
      for (y = u; ; y++) {
        const E = r.getNumDataCodewords(y, c) * 8, x = i.getTotalBits(l, y);
        if (x <= E) {
          A = x;
          break;
        }
        if (y >= h)
          throw new RangeError("Data too long");
      }
      for (const E of [r.Ecc.MEDIUM, r.Ecc.QUARTILE, r.Ecc.HIGH])
        g && A <= r.getNumDataCodewords(y, E) * 8 && (c = E);
      const R = [];
      for (const E of l) {
        n(E.mode.modeBits, 4, R), n(E.numChars, E.mode.numCharCountBits(y), R);
        for (const x of E.getData())
          R.push(x);
      }
      o(R.length == A);
      const B = r.getNumDataCodewords(y, c) * 8;
      o(R.length <= B), n(0, Math.min(4, B - R.length), R), n(0, (8 - R.length % 8) % 8, R), o(R.length % 8 == 0);
      for (let E = 236; R.length < B; E ^= 253)
        n(E, 8, R);
      const D = [];
      for (; D.length * 8 < R.length; )
        D.push(0);
      return R.forEach((E, x) => D[x >>> 3] |= E << 7 - (x & 7)), new r(y, c, D, m);
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(l, c) {
      return 0 <= l && l < this.size && 0 <= c && c < this.size && this.modules[c][l];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let u = 0; u < this.size; u++)
        this.setFunctionModule(6, u, u % 2 == 0), this.setFunctionModule(u, 6, u % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const l = this.getAlignmentPatternPositions(), c = l.length;
      for (let u = 0; u < c; u++)
        for (let h = 0; h < c; h++)
          u == 0 && h == 0 || u == 0 && h == c - 1 || u == c - 1 && h == 0 || this.drawAlignmentPattern(l[u], l[h]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(l) {
      const c = this.errorCorrectionLevel.formatBits << 3 | l;
      let u = c;
      for (let m = 0; m < 10; m++)
        u = u << 1 ^ (u >>> 9) * 1335;
      const h = (c << 10 | u) ^ 21522;
      o(h >>> 15 == 0);
      for (let m = 0; m <= 5; m++)
        this.setFunctionModule(8, m, s(h, m));
      this.setFunctionModule(8, 7, s(h, 6)), this.setFunctionModule(8, 8, s(h, 7)), this.setFunctionModule(7, 8, s(h, 8));
      for (let m = 9; m < 15; m++)
        this.setFunctionModule(14 - m, 8, s(h, m));
      for (let m = 0; m < 8; m++)
        this.setFunctionModule(this.size - 1 - m, 8, s(h, m));
      for (let m = 8; m < 15; m++)
        this.setFunctionModule(8, this.size - 15 + m, s(h, m));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let l = this.version;
      for (let u = 0; u < 12; u++)
        l = l << 1 ^ (l >>> 11) * 7973;
      const c = this.version << 12 | l;
      o(c >>> 18 == 0);
      for (let u = 0; u < 18; u++) {
        const h = s(c, u), m = this.size - 11 + u % 3, g = Math.floor(u / 3);
        this.setFunctionModule(m, g, h), this.setFunctionModule(g, m, h);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(l, c) {
      for (let u = -4; u <= 4; u++)
        for (let h = -4; h <= 4; h++) {
          const m = Math.max(Math.abs(h), Math.abs(u)), g = l + h, y = c + u;
          0 <= g && g < this.size && 0 <= y && y < this.size && this.setFunctionModule(g, y, m != 2 && m != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(l, c) {
      for (let u = -2; u <= 2; u++)
        for (let h = -2; h <= 2; h++)
          this.setFunctionModule(l + h, c + u, Math.max(Math.abs(h), Math.abs(u)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(l, c, u) {
      this.modules[c][l] = u, this.isFunction[c][l] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(l) {
      const c = this.version, u = this.errorCorrectionLevel;
      if (l.length != r.getNumDataCodewords(c, u))
        throw new RangeError("Invalid argument");
      const h = r.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][c], m = r.ECC_CODEWORDS_PER_BLOCK[u.ordinal][c], g = Math.floor(r.getNumRawDataModules(c) / 8), y = h - g % h, A = Math.floor(g / h), R = [], B = r.reedSolomonComputeDivisor(m);
      for (let E = 0, x = 0; E < h; E++) {
        const W = l.slice(x, x + A - m + (E < y ? 0 : 1));
        x += W.length;
        const _ = r.reedSolomonComputeRemainder(W, B);
        E < y && W.push(0), R.push(W.concat(_));
      }
      const D = [];
      for (let E = 0; E < R[0].length; E++)
        R.forEach((x, W) => {
          (E != A - m || W >= y) && D.push(x[E]);
        });
      return o(D.length == g), D;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(l) {
      if (l.length != Math.floor(r.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let c = 0;
      for (let u = this.size - 1; u >= 1; u -= 2) {
        u == 6 && (u = 5);
        for (let h = 0; h < this.size; h++)
          for (let m = 0; m < 2; m++) {
            const g = u - m, A = (u + 1 & 2) == 0 ? this.size - 1 - h : h;
            !this.isFunction[A][g] && c < l.length * 8 && (this.modules[A][g] = s(l[c >>> 3], 7 - (c & 7)), c++);
          }
      }
      o(c == l.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(l) {
      if (l < 0 || l > 7)
        throw new RangeError("Mask value out of range");
      for (let c = 0; c < this.size; c++)
        for (let u = 0; u < this.size; u++) {
          let h;
          switch (l) {
            case 0:
              h = (u + c) % 2 == 0;
              break;
            case 1:
              h = c % 2 == 0;
              break;
            case 2:
              h = u % 3 == 0;
              break;
            case 3:
              h = (u + c) % 3 == 0;
              break;
            case 4:
              h = (Math.floor(u / 3) + Math.floor(c / 2)) % 2 == 0;
              break;
            case 5:
              h = u * c % 2 + u * c % 3 == 0;
              break;
            case 6:
              h = (u * c % 2 + u * c % 3) % 2 == 0;
              break;
            case 7:
              h = ((u + c) % 2 + u * c % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[c][u] && h && (this.modules[c][u] = !this.modules[c][u]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let l = 0;
      for (let m = 0; m < this.size; m++) {
        let g = !1, y = 0;
        const A = [0, 0, 0, 0, 0, 0, 0];
        for (let R = 0; R < this.size; R++)
          this.modules[m][R] == g ? (y++, y == 5 ? l += r.PENALTY_N1 : y > 5 && l++) : (this.finderPenaltyAddHistory(y, A), g || (l += this.finderPenaltyCountPatterns(A) * r.PENALTY_N3), g = this.modules[m][R], y = 1);
        l += this.finderPenaltyTerminateAndCount(g, y, A) * r.PENALTY_N3;
      }
      for (let m = 0; m < this.size; m++) {
        let g = !1, y = 0;
        const A = [0, 0, 0, 0, 0, 0, 0];
        for (let R = 0; R < this.size; R++)
          this.modules[R][m] == g ? (y++, y == 5 ? l += r.PENALTY_N1 : y > 5 && l++) : (this.finderPenaltyAddHistory(y, A), g || (l += this.finderPenaltyCountPatterns(A) * r.PENALTY_N3), g = this.modules[R][m], y = 1);
        l += this.finderPenaltyTerminateAndCount(g, y, A) * r.PENALTY_N3;
      }
      for (let m = 0; m < this.size - 1; m++)
        for (let g = 0; g < this.size - 1; g++) {
          const y = this.modules[m][g];
          y == this.modules[m][g + 1] && y == this.modules[m + 1][g] && y == this.modules[m + 1][g + 1] && (l += r.PENALTY_N2);
        }
      let c = 0;
      for (const m of this.modules)
        c = m.reduce((g, y) => g + (y ? 1 : 0), c);
      const u = this.size * this.size, h = Math.ceil(Math.abs(c * 20 - u * 10) / u) - 1;
      return o(0 <= h && h <= 9), l += h * r.PENALTY_N4, o(0 <= l && l <= 2568888), l;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const l = Math.floor(this.version / 7) + 2, c = Math.floor((this.version * 8 + l * 3 + 5) / (l * 4 - 4)) * 2, u = [6];
        for (let h = this.size - 7; u.length < l; h -= c)
          u.splice(1, 0, h);
        return u;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(l) {
      if (l < r.MIN_VERSION || l > r.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let c = (16 * l + 128) * l + 64;
      if (l >= 2) {
        const u = Math.floor(l / 7) + 2;
        c -= (25 * u - 10) * u - 55, l >= 7 && (c -= 36);
      }
      return o(208 <= c && c <= 29648), c;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(l, c) {
      return Math.floor(r.getNumRawDataModules(l) / 8) - r.ECC_CODEWORDS_PER_BLOCK[c.ordinal][l] * r.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][l];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(l) {
      if (l < 1 || l > 255)
        throw new RangeError("Degree out of range");
      const c = [];
      for (let h = 0; h < l - 1; h++)
        c.push(0);
      c.push(1);
      let u = 1;
      for (let h = 0; h < l; h++) {
        for (let m = 0; m < c.length; m++)
          c[m] = r.reedSolomonMultiply(c[m], u), m + 1 < c.length && (c[m] ^= c[m + 1]);
        u = r.reedSolomonMultiply(u, 2);
      }
      return c;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(l, c) {
      const u = c.map((h) => 0);
      for (const h of l) {
        const m = h ^ u.shift();
        u.push(0), c.forEach((g, y) => u[y] ^= r.reedSolomonMultiply(g, m));
      }
      return u;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(l, c) {
      if (l >>> 8 || c >>> 8)
        throw new RangeError("Byte out of range");
      let u = 0;
      for (let h = 7; h >= 0; h--)
        u = u << 1 ^ (u >>> 7) * 285, u ^= (c >>> h & 1) * l;
      return o(u >>> 8 == 0), u;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(l) {
      const c = l[1];
      o(c <= this.size * 3);
      const u = c > 0 && l[2] == c && l[3] == c * 3 && l[4] == c && l[5] == c;
      return (u && l[0] >= c * 4 && l[6] >= c ? 1 : 0) + (u && l[6] >= c * 4 && l[0] >= c ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(l, c, u) {
      return l && (this.finderPenaltyAddHistory(c, u), c = 0), c += this.size, this.finderPenaltyAddHistory(c, u), this.finderPenaltyCountPatterns(u);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(l, c) {
      c[0] == 0 && (l += this.size), c.pop(), c.unshift(l);
    }
  };
  /*-- Constants and tables --*/
  // The minimum version number supported in the QR Code Model 2 standard.
  se(r, "MIN_VERSION", 1), // The maximum version number supported in the QR Code Model 2 standard.
  se(r, "MAX_VERSION", 40), // For use in getPenaltyScore(), when evaluating which mask is best.
  se(r, "PENALTY_N1", 3), se(r, "PENALTY_N2", 3), se(r, "PENALTY_N3", 40), se(r, "PENALTY_N4", 10), se(r, "ECC_CODEWORDS_PER_BLOCK", [
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
  ]), se(r, "NUM_ERROR_CORRECTION_BLOCKS", [
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
  let t = r;
  e.QrCode = t;
  function n(f, l, c) {
    if (l < 0 || l > 31 || f >>> l)
      throw new RangeError("Value out of range");
    for (let u = l - 1; u >= 0; u--)
      c.push(f >>> u & 1);
  }
  function s(f, l) {
    return (f >>> l & 1) != 0;
  }
  function o(f) {
    if (!f)
      throw new Error("Assertion error");
  }
  const a = class a {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(l, c, u) {
      if (this.mode = l, this.numChars = c, this.bitData = u, c < 0)
        throw new RangeError("Invalid argument");
      this.bitData = u.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(l) {
      const c = [];
      for (const u of l)
        n(u, 8, c);
      return new a(a.Mode.BYTE, l.length, c);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(l) {
      if (!a.isNumeric(l))
        throw new RangeError("String contains non-numeric characters");
      const c = [];
      for (let u = 0; u < l.length; ) {
        const h = Math.min(l.length - u, 3);
        n(parseInt(l.substring(u, u + h), 10), h * 3 + 1, c), u += h;
      }
      return new a(a.Mode.NUMERIC, l.length, c);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(l) {
      if (!a.isAlphanumeric(l))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      const c = [];
      let u;
      for (u = 0; u + 2 <= l.length; u += 2) {
        let h = a.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u)) * 45;
        h += a.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u + 1)), n(h, 11, c);
      }
      return u < l.length && n(a.ALPHANUMERIC_CHARSET.indexOf(l.charAt(u)), 6, c), new a(a.Mode.ALPHANUMERIC, l.length, c);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(l) {
      return l == "" ? [] : a.isNumeric(l) ? [a.makeNumeric(l)] : a.isAlphanumeric(l) ? [a.makeAlphanumeric(l)] : [a.makeBytes(a.toUtf8ByteArray(l))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(l) {
      const c = [];
      if (l < 0)
        throw new RangeError("ECI assignment value out of range");
      if (l < 128)
        n(l, 8, c);
      else if (l < 16384)
        n(2, 2, c), n(l, 14, c);
      else if (l < 1e6)
        n(6, 3, c), n(l, 21, c);
      else
        throw new RangeError("ECI assignment value out of range");
      return new a(a.Mode.ECI, 0, c);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(l) {
      return a.NUMERIC_REGEX.test(l);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(l) {
      return a.ALPHANUMERIC_REGEX.test(l);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(l, c) {
      let u = 0;
      for (const h of l) {
        const m = h.mode.numCharCountBits(c);
        if (h.numChars >= 1 << m)
          return 1 / 0;
        u += 4 + m + h.bitData.length;
      }
      return u;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(l) {
      l = encodeURI(l);
      const c = [];
      for (let u = 0; u < l.length; u++)
        l.charAt(u) != "%" ? c.push(l.charCodeAt(u)) : (c.push(parseInt(l.substring(u + 1, u + 3), 16)), u += 2);
      return c;
    }
  };
  /*-- Constants --*/
  // Describes precisely all strings that are encodable in numeric mode.
  se(a, "NUMERIC_REGEX", /^[0-9]*$/), // Describes precisely all strings that are encodable in alphanumeric mode.
  se(a, "ALPHANUMERIC_REGEX", /^[A-Z0-9 $%*+./:-]*$/), // The set of all legal characters in alphanumeric mode,
  // where each character value maps to the index in the string.
  se(a, "ALPHANUMERIC_CHARSET", "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
  let i = a;
  e.QrSegment = i;
})(xt || (xt = {}));
((e) => {
  ((t) => {
    const s = class s {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(i, r) {
        this.ordinal = i, this.formatBits = r;
      }
    };
    /*-- Constants --*/
    se(s, "LOW", new s(0, 1)), // The QR Code can tolerate about  7% erroneous codewords
    se(s, "MEDIUM", new s(1, 0)), // The QR Code can tolerate about 15% erroneous codewords
    se(s, "QUARTILE", new s(2, 3)), // The QR Code can tolerate about 25% erroneous codewords
    se(s, "HIGH", new s(3, 2));
    let n = s;
    t.Ecc = n;
  })(e.QrCode || (e.QrCode = {}));
})(xt || (xt = {}));
((e) => {
  ((t) => {
    const s = class s {
      /*-- Constructor and fields --*/
      constructor(i, r) {
        this.modeBits = i, this.numBitsCharCount = r;
      }
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    };
    /*-- Constants --*/
    se(s, "NUMERIC", new s(1, [10, 12, 14])), se(s, "ALPHANUMERIC", new s(2, [9, 11, 13])), se(s, "BYTE", new s(4, [8, 16, 16])), se(s, "KANJI", new s(8, [8, 10, 12])), se(s, "ECI", new s(7, [0, 0, 0]));
    let n = s;
    t.Mode = n;
  })(e.QrSegment || (e.QrSegment = {}));
})(xt || (xt = {}));
const sh = (e, t) => {
  t.width = e.size, t.height = e.size;
  const n = t.getContext("2d");
  for (let s = 0; s < e.size; s++)
    for (let o = 0; o < e.size; o++)
      n.fillStyle = e.getModule(o, s) ? "#000" : "#fff", n.fillRect(o, s, 1, 1);
}, oh = {
  class: "qr",
  "data-testid": "qr"
}, zr = /* @__PURE__ */ ue({
  __name: "QrCode",
  props: {
    ul: {},
    title: {}
  },
  setup(e) {
    const t = e, n = ke(Te), s = rt();
    return It(
      [() => t.ul.toString(), s],
      ([o, i]) => {
        if (i) {
          const r = xt.QrCode, a = r.encodeText(o, r.Ecc.LOW);
          sh(a, i);
        }
      },
      { immediate: !0 }
    ), (o, i) => (U(), Z(oe, null, [
      v("h2", null, G(e.title ?? k(n)("qr_code_title")), 1),
      v("div", oh, [
        v("canvas", {
          ref_key: "canvas",
          ref: s
        }, null, 512),
        i[0] || (i[0] = v("div", {
          role: "img",
          class: "logo",
          "aria-label": '{{ t("qr_code_label") }}'
        }, null, -1))
      ])
    ], 64));
  }
}), ih = /* @__PURE__ */ ue({
  __name: "CreatedSection",
  props: {
    sameDeviceUl: {},
    crossDeviceUl: {},
    sessionType: {}
  },
  emits: ["choice"],
  setup(e, { emit: t }) {
    const n = t, s = (o) => n("choice", o);
    return (o, i) => (U(), Z(oe, null, [
      e.sessionType === "same_device" ? (U(), Ae(nh, {
        key: 0,
        ul: e.sameDeviceUl,
        onChoice: s
      }, null, 8, ["ul"])) : fe("", !0),
      e.sessionType === "cross_device" ? (U(), Ae(zr, {
        key: 1,
        ul: e.crossDeviceUl
      }, null, 8, ["ul"])) : fe("", !0)
    ], 64));
  }
}), rh = { class: "text" }, lh = { "data-testid": "expired_header" }, ah = { "data-testid": "failed_header" }, ch = { "data-testid": "cancelled_header" }, uh = { "data-testid": "network_header" }, fh = /* @__PURE__ */ ue({
  __name: "ErrorSection",
  props: {
    errorType: {},
    helpBaseUrl: {}
  },
  setup(e) {
    const t = ke(Te);
    return (n, s) => (U(), Z(oe, null, [
      s[0] || (s[0] = v("svg", {
        class: "status",
        width: "24",
        height: "24",
        fill: "currentColor"
      }, [
        v("path", { d: "m13 8.2-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2" })
      ], -1)),
      v("section", rh, [
        e.errorType === "expired" ? (U(), Z(oe, { key: 0 }, [
          v("h2", lh, G(k(t)("expired_title")), 1),
          v("p", null, G(k(t)("expired_body")), 1)
        ], 64)) : e.errorType === "failed" ? (U(), Z(oe, { key: 1 }, [
          v("h2", ah, G(k(t)("failed_title")), 1),
          v("p", null, G(k(t)("failed_body")), 1)
        ], 64)) : e.errorType === "cancelled" ? (U(), Z(oe, { key: 2 }, [
          v("h2", ch, G(k(t)("cancelled_title")), 1),
          v("p", null, G(k(t)("cancelled_body")), 1)
        ], 64)) : e.errorType === "network" ? (U(), Z(oe, { key: 3 }, [
          v("h2", uh, G(k(t)("network_title")), 1),
          v("p", null, G(k(t)("network_body")), 1)
        ], 64)) : fe("", !0)
      ]),
      ie(Fr, { helpBaseUrl: e.helpBaseUrl }, null, 8, ["helpBaseUrl"])
    ], 64));
  }
}), dh = "https://apps.apple.com/nl/app/nb-wallet/id6802341522", hh = "https://play.google.com/store/apps/details?id=org.nbwallet.wallet", ph = (e, t) => ({
  service_id: e,
  role: t
}), gh = (e) => {
  const t = Object.entries(e).map(([n, s]) => `${n}=${s}`).join("&");
  return `${hh}&referrer=${encodeURIComponent(t)}`;
}, mh = (e, t) => e === "google" ? gh(t) : dh, yh = (e, t, n, s = !1) => {
  const o = new URL("/deeplink/onboarding", e);
  return o.searchParams.set("service_id", t), o.searchParams.set("role", n), s && o.searchParams.set("store", "1"), o;
}, bh = {
  key: 0,
  class: "store-badge-icon",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, wh = {
  key: 1,
  class: "store-badge-icon",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, Ah = {
  key: 2,
  class: "store-badge-icon",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, vh = { class: "store-badge-text" }, hs = /* @__PURE__ */ ue({
  __name: "StoreBadge",
  props: {
    store: {},
    href: {},
    label: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t, s = ke(Te);
    return (o, i) => (U(), Ae(ql(e.href ? "a" : "button"), {
      class: $e(["store-badge", e.store]),
      href: e.href,
      target: e.href ? "_blank" : void 0,
      rel: e.href ? "noopener noreferrer" : void 0,
      type: e.href ? void 0 : "button",
      "aria-label": e.label,
      onClick: i[0] || (i[0] = (r) => n("click"))
    }, {
      default: Bi(() => [
        e.store === "apple" ? (U(), Z("svg", bh, [...i[1] || (i[1] = [
          v("path", {
            fill: "currentColor",
            d: "M16.365 12.86c-.026-2.63 2.146-3.892 2.244-3.953-1.223-1.788-3.124-2.033-3.799-2.06-1.617-.164-3.155.953-3.974.953-.82 0-2.084-.929-3.43-.903-1.765.026-3.394 1.026-4.302 2.606-1.834 3.18-.469 7.885 1.316 10.465.873 1.263 1.914 2.683 3.279 2.632 1.316-.052 1.813-.851 3.403-.851 1.59 0 2.038.851 3.43.825 1.416-.026 2.313-1.289 3.18-2.556 1.001-1.466 1.413-2.885 1.438-2.958-.031-.014-2.757-1.058-2.783-4.195l-.001-.001zM13.83 4.86c.725-.88 1.214-2.105 1.08-3.324-1.044.043-2.31.696-3.06 1.575-.672.779-1.261 2.024-1.103 3.219 1.166.09 2.357-.592 3.083-1.47z"
          }, null, -1)
        ])])) : e.store === "google" ? (U(), Z("svg", wh, [...i[2] || (i[2] = [
          v("path", {
            fill: "#00E676",
            d: "M3.55 2.2 13 11.65v.22L3.55 21.3a1.6 1.6 0 0 1-.45-1.1V3.3c0-.45.17-.83.45-1.1z"
          }, null, -1),
          v("path", {
            fill: "#FFD600",
            d: "m16.5 15.15-3.5-3.28v-.22l3.5-3.28 3.98 2.26c1.14.64 1.14 1.68 0 2.33l-3.98 2.19z"
          }, null, -1),
          v("path", {
            fill: "#FF3D00",
            d: "m16.5 15.15-3.5-3.5-9.45 9.65c.38.4.99.45 1.69.05l11.26-6.2z"
          }, null, -1),
          v("path", {
            fill: "#0091EA",
            d: "M16.5 8.37 5.24 2.16c-.7-.4-1.31-.35-1.69.05l9.45 9.44 3.5-3.28z"
          }, null, -1)
        ])])) : (U(), Z("svg", Ah, [...i[3] || (i[3] = [
          v("path", {
            fill: "currentColor",
            d: "M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10zm-1-6h-3V8h-2v5H8l4 4z"
          }, null, -1)
        ])])),
        v("span", vh, [
          v("small", null, G(k(s)(`${e.store}_store_line1`)), 1),
          v("strong", null, G(k(s)(`${e.store}_store_line2`)), 1)
        ])
      ]),
      _: 1
    }, 8, ["class", "href", "target", "rel", "type", "aria-label"]));
  }
}), Qn = Symbol(), Hr = Symbol(), Mh = (e) => {
  const t = /Mobi/.test(e), n = /Android/i.test(e), s = /iPhone/.test(e), o = /iPad/.test(e) || e.includes("Macintosh") && navigator.maxTouchPoints > 1;
  return !(t || n || s || o);
}, Ih = (e) => /Android/i.test(e), Ch = {
  key: 0,
  class: "download",
  "data-testid": "download_section"
}, Rh = { class: "options" }, Eh = {
  class: "option",
  "data-testid": "download_director"
}, Sh = { class: "option-title" }, xh = {
  class: "option",
  "data-testid": "download_employee"
}, Th = { class: "option-title" }, Nh = {
  key: 1,
  class: "download",
  "data-testid": "download_section"
}, Ph = { class: "options" }, jh = {
  class: "option",
  "data-testid": "download_holder"
}, kh = { class: "option-title" }, Dh = {
  key: 2,
  class: "website",
  "data-testid": "website_link"
}, Oh = ["href"], Lh = /* @__PURE__ */ ue({
  __name: "HelpSection",
  props: {
    helpBaseUrl: {},
    clientId: {}
  },
  emits: ["install"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = he(Kn, !1), i = he(Lr, !1), r = he(Qn, !1), a = he(Hr, !1), f = Be(() => o && !!n.clientId && !i), l = Be(() => o && !!n.clientId && i), c = Be(() => r ? a ? "google" : "apple" : "any"), u = (y) => r ? mh(c.value, ph(n.clientId, y)) : void 0, h = (y) => {
      r || s("install", y);
    }, m = Be(() => n.helpBaseUrl.toString()), g = ke(Te);
    return (y, A) => f.value ? (U(), Z("section", Ch, [
      v("div", Rh, [
        v("div", Eh, [
          v("p", Sh, G(k(g)("help_director_title")), 1),
          v("p", null, G(k(g)("help_director_description")), 1),
          ie(hs, {
            store: c.value,
            href: u("director"),
            label: k(g)("help_director_link"),
            "data-testid": "download_director_badge",
            onClick: A[0] || (A[0] = (R) => h("director"))
          }, null, 8, ["store", "href", "label"])
        ]),
        v("div", xh, [
          v("p", Th, G(k(g)("help_employee_title")), 1),
          v("p", null, G(k(g)("help_employee_description")), 1),
          ie(hs, {
            store: c.value,
            href: u("employee"),
            label: k(g)("help_employee_link"),
            "data-testid": "download_employee_badge",
            onClick: A[1] || (A[1] = (R) => h("employee"))
          }, null, 8, ["store", "href", "label"])
        ])
      ])
    ])) : l.value ? (U(), Z("section", Nh, [
      v("div", Ph, [
        v("div", jh, [
          v("p", kh, G(k(g)("help_issuance_title")), 1),
          v("p", null, G(k(g)("help_issuance_description")), 1),
          ie(hs, {
            store: c.value,
            href: u("holder"),
            label: k(g)("help_issuance_link"),
            "data-testid": "download_holder_badge",
            onClick: A[2] || (A[2] = (R) => h("holder"))
          }, null, 8, ["store", "href", "label"])
        ])
      ])
    ])) : (U(), Z("section", Dh, [
      v("p", null, G(k(g)("help_title")), 1),
      v("p", null, [
        v("a", {
          href: m.value,
          class: "link"
        }, [
          A[3] || (A[3] = v("svg", {
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            v("path", { d: "M6.4 18.5 5 17.1l9.6-9.6H6v-2h12v12h-2V8.9z" })
          ], -1)),
          v("span", null, G(k(g)("help_to_website")), 1)
        ], 8, Oh)
      ])
    ]));
  }
}), Uh = { "data-testid": "in_progress" }, Bh = /* @__PURE__ */ ue({
  __name: "InProgressSection",
  setup(e) {
    const t = ke(Te);
    return (n, s) => (U(), Z(oe, null, [
      s[0] || (s[0] = v("svg", {
        class: "status",
        width: "24",
        height: "24",
        fill: "currentColor"
      }, [
        v("path", { d: "M9.657 11.543v4.628h1.414V9.1H4v1.414h4.686L3 16.2l1 1z" }),
        v("path", { d: "M9 1h10c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-3h2v2h10V4H9v2H7V3c0-1.1.9-2 2-2" })
      ], -1)),
      v("h2", Uh, G(k(t)("in_progress_title")), 1)
    ], 64));
  }
}), Fh = ["data-role"], zh = /* @__PURE__ */ ue({
  __name: "InstallSection",
  props: {
    role: {},
    helpBaseUrl: {},
    clientId: {}
  },
  setup(e) {
    const t = e, n = ke(Te), s = Be(() => yh(t.helpBaseUrl, t.clientId, t.role, !0));
    return (o, i) => (U(), Z("section", {
      class: "install",
      "data-testid": "install_section",
      "data-role": e.role
    }, [
      ie(zr, {
        ul: s.value,
        title: k(n)("install_title")
      }, null, 8, ["ul", "title"]),
      v("p", null, G(k(n)("install_body")), 1)
    ], 8, Fh));
  }
}), Wr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Hh = {}, Wh = {
  class: "loading-indicator",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
};
function Yh(e, t) {
  return U(), Z("svg", Wh, [...t[0] || (t[0] = [
    v("circle", {
      cx: "50",
      cy: "50",
      r: "45"
    }, null, -1)
  ])]);
}
const Gh = /* @__PURE__ */ Wr(Hh, [["render", Yh]]), Vh = {
  "data-testid": "loading",
  class: "text"
}, Zh = /* @__PURE__ */ ue({
  __name: "LoadingSection",
  setup(e) {
    const t = ke(Te);
    return (n, s) => (U(), Z(oe, null, [
      v("section", Vh, [
        v("h2", null, G(k(t)("loading_title")), 1),
        v("p", null, G(k(t)("loading_body")), 1)
      ]),
      ie(Gh)
    ], 64));
  }
}), Xh = {
  class: "text",
  "data-testid": "success_same_device"
}, Jh = {
  class: "text",
  "data-testid": "success_cross_device"
}, Kh = /* @__PURE__ */ ue({
  __name: "SuccessSection",
  props: {
    sessionType: {}
  },
  setup(e) {
    const t = ke(Te);
    return (n, s) => e.sessionType === "same_device" ? (U(), Z(oe, { key: 0 }, [
      s[0] || (s[0] = v("svg", {
        class: "status",
        width: "24",
        height: "24",
        fill: "currentColor"
      }, [
        v("path", { d: "m14 8.5-1-1-6 6-2-2-1 1 2 2 1 1 1-1zM18 1H8c-1.1 0-2 .9-2 2v3h2V4h10v16H8v-2H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2" })
      ], -1)),
      v("section", Xh, [
        v("h2", null, G(k(t)("success_title")), 1),
        v("p", null, G(k(t)("success_body")), 1)
      ])
    ], 64)) : (U(), Z(oe, { key: 1 }, [
      s[1] || (s[1] = v("svg", {
        class: "status",
        width: "72",
        height: "72",
        fill: "currentColor"
      }, [
        v("path", { d: "M36 0C16.118 0 0 16.118 0 36s16.118 36 36 36 36-16.118 36-36S55.882 0 36 0m7.598 29.6 1.4 1.4-12 12-5.6-5.6 1.4-1.4 4.2 4.2z" })
      ], -1)),
      v("section", Jh, [
        v("h2", null, G(k(t)("success_title")), 1)
      ])
    ], 64));
  }
}), Yr = /* @__PURE__ */ ue({
  __name: "ModalMain",
  props: {
    modalState: {},
    helpBaseUrl: {},
    clientId: {},
    installRole: {}
  },
  emits: ["choice", "install"],
  setup(e, { emit: t }) {
    const n = t, s = rt(null), o = (i) => n("choice", i);
    return Zs(async () => setTimeout(() => s.value && s.value.focus(), 0)), (i, r) => (U(), Z(oe, null, [
      v("main", {
        ref_key: "main",
        ref: s,
        tabindex: "0"
      }, [
        ["creating", "loading"].includes(e.modalState.kind) ? (U(), Ae(Zh, { key: 0 })) : fe("", !0),
        e.modalState.kind === "created" && e.installRole && e.clientId ? (U(), Ae(zh, {
          key: 1,
          role: e.installRole,
          helpBaseUrl: e.helpBaseUrl,
          clientId: e.clientId
        }, null, 8, ["role", "helpBaseUrl", "clientId"])) : e.modalState.kind === "created" ? (U(), Ae(ih, {
          key: 2,
          "same-device-ul": e.modalState.sameDeviceUl,
          "cross-device-ul": e.modalState.crossDeviceUl,
          sessionType: e.modalState.session.sessionType,
          onChoice: o
        }, null, 8, ["same-device-ul", "cross-device-ul", "sessionType"])) : fe("", !0),
        e.modalState.kind === "in-progress" ? (U(), Ae(Bh, { key: 3 })) : fe("", !0),
        e.modalState.kind === "confirm-stop" ? (U(), Ae($d, {
          key: 4,
          helpBaseUrl: e.helpBaseUrl
        }, null, 8, ["helpBaseUrl"])) : fe("", !0),
        e.modalState.kind === "success" ? (U(), Ae(Kh, {
          key: 5,
          sessionType: e.modalState.session.sessionType
        }, null, 8, ["sessionType"])) : fe("", !0),
        e.modalState.kind === "error" ? (U(), Ae(fh, {
          key: 6,
          errorType: e.modalState.errorType,
          helpBaseUrl: e.helpBaseUrl
        }, null, 8, ["errorType", "helpBaseUrl"])) : fe("", !0)
      ], 512),
      e.modalState.kind === "created" && !e.installRole ? (U(), Ae(Lh, {
        key: 0,
        helpBaseUrl: e.helpBaseUrl,
        clientId: e.clientId,
        onInstall: r[0] || (r[0] = (a) => n("install", a))
      }, null, 8, ["helpBaseUrl", "clientId"])) : fe("", !0)
    ], 64));
  }
}), ai = (e) => ef(e) ? e : "failed", Qh = ["aria-label"], qh = 2e3, _h = /* @__PURE__ */ ue({
  __name: "DynamicWalletModal",
  props: {
    usecase: {},
    startUrl: {},
    helpBaseUrl: {},
    clientId: {},
    pollIntervalInMs: { default: () => qh }
  },
  emits: ["close", "success", "failed"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = he(Qn), i = he(io, !1), r = he(ro, !1), a = he(Kn, !1), f = rt(), l = rt({ kind: "creating" }), c = rt(null);
    It(
      () => l.value.kind,
      (x) => {
        x !== "created" && (c.value = null);
      }
    ), It(l, (x) => {
      switch (x.kind) {
        case "created":
        case "in-progress": {
          u(x.session);
          break;
        }
        case "creating":
        case "loading":
        case "success":
        case "confirm-stop":
        case "error": {
          h();
          break;
        }
      }
    });
    const u = (x) => {
      f.value && h(), f.value = setTimeout(async () => await g(x), n.pollIntervalInMs);
    }, h = () => {
      f.value && clearTimeout(f.value);
    }, m = async () => {
      try {
        l.value = { kind: "creating" };
        const x = await qu(n.startUrl, {
          usecase: n.usecase
        });
        await g({
          statusUrl: x.status_url,
          sessionType: o ? "same_device" : "cross_device",
          sessionToken: x.session_token
        });
      } catch (x) {
        l.value = {
          kind: "error",
          errorType: ai(x)
          // session is undefined
        };
      }
    }, g = async (x) => {
      try {
        const W = await _u(x.statusUrl, x.sessionType);
        switch (W.status) {
          case "CREATED":
            W.ul !== void 0 ? l.value = {
              kind: "created",
              sameDeviceUl: W.ul,
              crossDeviceUl: W.ul,
              session: x
            } : l.value = {
              kind: "error",
              errorType: "failed"
            };
            break;
          case "WAITING_FOR_RESPONSE":
            l.value = {
              kind: "in-progress",
              session: x
            };
            break;
          case "DONE":
            l.value = {
              kind: "success",
              session: x
            };
            break;
          case "EXPIRED":
            l.value = {
              kind: "error",
              errorType: "expired",
              session: x
            };
            break;
          case "CANCELLED":
            l.value = {
              kind: "error",
              errorType: "cancelled",
              session: x
            };
            break;
          case "FAILED":
            l.value = {
              kind: "error",
              errorType: "failed",
              session: x
            };
            break;
        }
      } catch (W) {
        l.value = {
          kind: "error",
          errorType: ai(W),
          session: x
        };
      }
    }, y = async (x) => {
      if (l.value.kind === "created") {
        h();
        const W = {
          statusUrl: l.value.session.statusUrl,
          sessionType: x,
          sessionToken: l.value.session.sessionToken
        };
        x === "cross_device" && (l.value = {
          kind: "loading",
          session: W
        }), await g(W);
      } else
        l.value = {
          kind: "error",
          errorType: "failed",
          session: l.value.kind !== "creating" ? l.value.session : void 0
        };
    }, A = async () => {
      var x, W;
      switch (l.value.kind) {
        case "success":
          s("success", l.value.session.sessionToken, l.value.session.sessionType);
          break;
        case "error":
          s("failed", (x = l.value.session) == null ? void 0 : x.sessionToken, (W = l.value.session) == null ? void 0 : W.sessionType);
          break;
        case "creating":
        case "loading":
          s("close");
          break;
        default:
          l.value = {
            kind: "error",
            errorType: "failed",
            session: l.value.session
          };
      }
    }, R = async () => {
      if (l.value.kind === "created" || l.value.kind === "confirm-stop") {
        const x = l.value.kind;
        l.value = {
          kind: "loading",
          session: l.value.session
        }, await Qu(l.value.session.statusUrl), x === "created" ? s("close") : await g(l.value.session);
      } else
        l.value = {
          kind: "error",
          errorType: "failed",
          session: l.value.kind !== "creating" ? l.value.session : void 0
        };
    }, B = async () => {
      l.value.kind === "error" ? await m() : l.value = {
        kind: "error",
        errorType: "failed",
        session: l.value.kind !== "creating" ? l.value.session : void 0
      };
    }, D = async () => {
      l.value.kind === "loading" || l.value.kind === "in-progress" ? l.value = {
        kind: "confirm-stop",
        prev: l.value,
        session: l.value.session
      } : l.value = {
        kind: "error",
        errorType: "failed",
        session: l.value.kind !== "creating" ? l.value.session : void 0
      };
    }, E = async () => {
      l.value.kind === "confirm-stop" ? (l.value = l.value.prev, l.value.kind !== "creating" && l.value.session !== void 0 ? await g(l.value.session) : l.value = {
        kind: "error",
        errorType: "failed"
        // session is undefined
      }) : l.value = {
        kind: "error",
        errorType: "failed",
        session: l.value.kind !== "creating" ? l.value.session : void 0
      };
    };
    return Zs(async () => {
      await m();
    }), Xs(h), (x, W) => (U(), Z("div", {
      class: $e(["modal-anchor", { business: k(i), over18: k(r), nbwallet: k(a) }])
    }, [
      v("aside", {
        "aria-modal": "true",
        role: "dialog",
        "aria-label": k(a) ? "NB Wallet" : k(r) ? "18up" : k(i) ? "Business Wallet" : "NP Wallet",
        class: $e(["modal", [
          l.value.kind,
          l.value.kind === "success" && l.value.session.sessionType,
          l.value.kind === "created" && c.value && "install"
        ]]),
        "data-testid": "wallet_modal"
      }, [
        ie(Br),
        ie(Yr, {
          modalState: l.value,
          helpBaseUrl: e.helpBaseUrl,
          clientId: e.clientId,
          installRole: c.value,
          onChoice: y,
          onInstall: W[0] || (W[0] = (_) => c.value = _)
        }, null, 8, ["modalState", "helpBaseUrl", "clientId", "installRole"]),
        ie(Ur, {
          modalState: l.value,
          installRole: c.value,
          onInstalled: W[1] || (W[1] = (_) => c.value = null),
          onClose: A,
          onStop: R,
          onConfirm: D,
          onRetry: B,
          onBack: E
        }, null, 8, ["modalState", "installRole"])
      ], 10, Qh)
    ], 2));
  }
}), $h = ["aria-label"], ep = /* @__PURE__ */ ue({
  __name: "StaticWalletModal",
  props: {
    sameDeviceUl: {},
    crossDeviceUl: {},
    helpBaseUrl: {},
    clientId: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = he(Qn), i = he(io, !1), r = he(ro, !1), a = he(Kn, !1), f = rt({
      kind: "created",
      sameDeviceUl: n.sameDeviceUl,
      crossDeviceUl: n.crossDeviceUl,
      session: {
        // TODO this statusUrl is currently unused (PVW-4365)
        statusUrl: new URL("http://status.example.com/status"),
        sessionType: o ? "same_device" : "cross_device",
        sessionToken: ""
      }
    }), l = rt(null);
    It(
      () => f.value.kind,
      (u) => {
        u !== "created" && (l.value = null);
      }
    );
    const c = async (u) => {
      f.value.kind === "created" ? f.value.session = {
        statusUrl: f.value.session.statusUrl,
        sessionType: u,
        sessionToken: ""
      } : f.value = {
        kind: "error",
        errorType: "failed",
        session: f.value.kind !== "creating" ? f.value.session : void 0
      };
    };
    return (u, h) => (U(), Z("div", {
      class: $e(["modal-anchor", { business: k(i), over18: k(r), nbwallet: k(a) }])
    }, [
      v("aside", {
        "aria-modal": "true",
        role: "dialog",
        "aria-label": k(a) ? "NB Wallet" : k(r) ? "18up" : k(i) ? "Business Wallet" : "NP Wallet",
        class: $e(["modal", [
          f.value.kind,
          f.value.kind === "success" && f.value.session.sessionType,
          f.value.kind === "created" && l.value && "install"
        ]]),
        "data-testid": "wallet_modal"
      }, [
        ie(Br),
        ie(Yr, {
          modalState: f.value,
          helpBaseUrl: e.helpBaseUrl,
          clientId: e.clientId,
          installRole: l.value,
          onChoice: c,
          onInstall: h[0] || (h[0] = (m) => l.value = m)
        }, null, 8, ["modalState", "helpBaseUrl", "clientId", "installRole"]),
        ie(Ur, {
          modalState: f.value,
          installRole: l.value,
          onInstalled: h[1] || (h[1] = (m) => l.value = null),
          onStop: h[2] || (h[2] = (m) => s("close"))
        }, null, 8, ["modalState", "installRole"])
      ], 10, $h)
    ], 2));
  }
}), tp = /* @__PURE__ */ ue({
  __name: "WalletModal",
  props: {
    modalType: {},
    helpBaseUrl: {},
    clientId: {}
  },
  emits: ["close", "success", "failed"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, o) => (U(), Z(oe, null, [
      e.modalType.strategy === "dynamic" ? (U(), Ae(_h, {
        key: 0,
        startUrl: e.modalType.startUrl,
        usecase: e.modalType.usecase,
        helpBaseUrl: e.helpBaseUrl,
        clientId: e.clientId,
        onClose: o[0] || (o[0] = (i) => n("close")),
        onSuccess: o[1] || (o[1] = (...i) => n("success", ...i)),
        onFailed: o[2] || (o[2] = (...i) => n("failed", ...i))
      }, null, 8, ["startUrl", "usecase", "helpBaseUrl", "clientId"])) : fe("", !0),
      e.modalType.strategy === "static" ? (U(), Ae(ep, {
        key: 1,
        sameDeviceUl: e.modalType.sameDeviceUl,
        crossDeviceUl: e.modalType.crossDeviceUl,
        helpBaseUrl: e.helpBaseUrl,
        clientId: e.clientId,
        onClose: o[3] || (o[3] = (i) => n("close"))
      }, null, 8, ["sameDeviceUl", "crossDeviceUl", "helpBaseUrl", "clientId"])) : fe("", !0)
    ], 64));
  }
}), np = "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", sp = "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", op = ["content"], ip = ["aria-hidden"], rp = { part: "button-span" }, lp = /* @__PURE__ */ ue({
  __name: "WalletButton.ce",
  props: {
    usecase: { type: String },
    startUrl: { default: () => new URL(document.location.href), type: null },
    sameDeviceUl: { type: null },
    crossDeviceUl: { type: null },
    text: { type: String },
    lang: { default: () => "nl", type: String },
    helpBaseUrl: { default: () => new URL("http://example.com/"), type: null },
    serviceId: { type: String },
    clientId: { type: String },
    business: { type: [Boolean, String] },
    over18: { type: [Boolean, String] },
    nbwallet: { type: [Boolean, String] },
    issuance: { type: [Boolean, String] },
    id: { type: String },
    class: { type: String }
  },
  emits: ["success", "failed"],
  setup(e, { emit: t }) {
    const n = e, s = Be(() => n.business !== void 0 && n.business !== !1), o = Be(() => n.over18 !== void 0 && n.over18 !== !1), i = Be(() => n.nbwallet !== void 0 && n.nbwallet !== !1), r = Be(() => n.issuance !== void 0 && n.issuance !== !1), a = Be(
      () => n.text ?? li(n.lang, s.value, o.value, i.value)("wallet_button_text")
    ), f = t, l = n.usecase ? { strategy: "dynamic", usecase: n.usecase, startUrl: n.startUrl } : { strategy: "static", sameDeviceUl: n.sameDeviceUl, crossDeviceUl: n.crossDeviceUl }, c = n.serviceId ?? n.clientId, u = (c === void 0 ? n.usecase : c) || void 0, h = rt(!1), m = rt(null), g = !Mh(window.navigator.userAgent), y = (E, x) => {
      R(), f("success", E, x);
    }, A = (E, x) => {
      R(), f("failed", E, x);
    }, R = () => {
      h.value = !1, m.value && m.value.focus();
    };
    ft(Qn, g), ft(Hr, Ih(window.navigator.userAgent)), ft(Te, li(n.lang, s.value, o.value, i.value)), ft(io, s.value), ft(ro, o.value), ft(Kn, i.value), ft(Lr, r.value);
    const B = "0.6.0-dev", D = new CSSStyleSheet();
    return D.replaceSync(`@font-face {
  font-family: "RO Sans";
  font-weight: normal;
  font-style: normal;
  src: url(data:application/font-woff2;charset=utf-8;base64,${np}) format('woff2');
}

@font-face {
  font-family: "RO Sans";
  font-weight: bold;
  font-style: normal;
  src: url(data:application/font-woff2;charset=utf-8;base64,${sp}) format('woff2');
}`), document.adoptedStyleSheets = [...document.adoptedStyleSheets, D], (E, x) => (U(), Z(oe, null, [
      v("meta", {
        itemprop: "version",
        content: k(B)
      }, null, 8, op),
      v("button", {
        part: "button",
        type: "button",
        class: "nl-wallet-button",
        ref_key: "button",
        ref: m,
        "aria-hidden": h.value,
        onClick: x[0] || (x[0] = (W) => h.value = !0),
        "data-testid": "wallet_button"
      }, [
        v("span", rp, G(a.value), 1)
      ], 8, ip),
      h.value ? (U(), Ae(tp, {
        key: 0,
        modalType: k(l),
        helpBaseUrl: e.helpBaseUrl,
        clientId: k(u),
        onClose: R,
        onSuccess: y,
        onFailed: A
      }, null, 8, ["modalType", "helpBaseUrl", "clientId"])) : fe("", !0)
    ], 64));
  }
}), ap = '*:not(style,svg,path,circle){all:revert;box-sizing:border-box;margin:0}.modal-anchor *:before,.modal-anchor *:after{box-sizing:border-box}.modal-anchor input,.modal-anchor button{font:inherit}.modal-anchor p,.modal-anchor h1,.modal-anchor h2,.modal-anchor h3,.modal-anchor h4,.modal-anchor h5,.modal-anchor h6{overflow-wrap:break-word}.modal-anchor{--primary-color: #1e7a34;--primary-hover: #0e5a22;--secondary-hover: #f3f3f3;--text-color: #152a62;--success-color: #3d8540;--error-color: #ab0065;--error-hover: #750045;--spacer-color: #e8eaef;--overlay-color: rgba(0, 0, 0, .6);font-style:normal;position:fixed;top:0;left:0;display:block;align-content:center;overflow:auto;width:100%;height:100%;background-color:var(--overlay-color);padding:2rem 1rem;z-index:1045;overscroll-behavior:contain}.modal h1{font-size:1rem;font-weight:700;line-height:1.5;letter-spacing:.15px}.modal h2{font-size:1.25rem;font-weight:700;line-height:1.5;letter-spacing:.15px}.modal p{line-height:1.5rem;letter-spacing:.5px}.modal a{color:var(--primary-color);font-weight:700;text-decoration:none}.modal .button{display:flex;align-items:center;justify-content:center;gap:.75rem;border:none;color:#fff;font-weight:700;line-height:1.25rem;letter-spacing:.0625rem;border-radius:.75rem;padding:1rem 1.5rem;width:100%;cursor:pointer}.modal .button.primary{background-color:var(--primary-color);border:1px solid var(--primary-color);color:#fff}.modal .button.primary:hover{background-color:var(--primary-hover);border:1px solid var(--primary-hover)}.modal .button.secondary{background-color:#fff;color:var(--primary-color);border:1px solid var(--primary-color)}.modal .button.secondary:hover{background-color:var(--secondary-hover);color:var(--primary-hover);border:1px solid var(--primary-hover)}.modal .button.error{background-color:var(--error-color);border:1px solid var(--error-color);color:#fff}.modal .button.error:hover{background-color:var(--error-hover);border:1px solid var(--error-hover)}.modal .button:disabled,.modal .button.disabled{color:var(--secondary-hover);border-color:var(--secondary-hover);cursor:not-allowed;pointer-events:none;text-decoration:none}.modal .link{display:flex;width:-moz-fit-content;width:fit-content;gap:.75rem;margin:.25rem 0;color:var(--primary-color);letter-spacing:.0625rem;cursor:pointer}.modal .button.link{width:100%;background-color:#fff;border:1px solid white;margin:0}.modal .link:hover{text-decoration:underline;color:var(--primary-hover)}.modal .button.link:hover{background-color:var(--secondary-hover);border:1px solid var(--secondary-hover);color:var(--primary-hover);text-decoration:none}.modal{display:flex;flex-direction:column;margin:auto;width:100%;max-width:31.25rem;z-index:1050;text-align:center;color:var(--text-color);background-color:#fff;border-radius:.5rem;font-family:RO Sans,sans-serif;font-feature-settings:"clig" off,"liga" off;font-style:normal;font-weight:400;overflow:hidden}.modal header{display:flex;justify-content:center;align-items:center;border-bottom:1px solid var(--spacer-color);height:4rem;padding:.75rem 1.5rem}.modal main{display:flex;flex-grow:1;flex-direction:column;justify-content:center;gap:1.5rem;padding:2rem 1.5rem}.modal main:focus{outline:none}.modal.creating main,.modal.created main,.modal.loading main,.modal.in-progress main{justify-content:normal}.modal.created main{gap:1rem;padding:1.5rem 1.5rem 1rem}.modal.created .buttons{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.75rem;width:100%}.modal.in-progress main{gap:1rem}.modal.creating main,.modal.created main,.modal.loading main,.modal.in-progress main,.modal.success.cross_device main{align-items:center;text-align:center}.modal.confirm-stop main,.modal.error main,.modal.success.same_device main{text-align:left;gap:1.5rem}.modal.in-progress svg.status,.modal.success.same_device svg.status{color:var(--primary-color)}.modal.error svg.status{color:var(--error-color)}.modal.success svg.status{color:var(--success-color)}.modal footer{display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:1rem;border-top:1px solid var(--spacer-color)}.modal.created footer .button,.modal.success.cross_device footer .button{border-radius:0;padding:1.5rem}.modal.creating footer,.modal.loading footer,.modal.in-progress footer,.modal.confirm-stop footer,.modal.error footer,.modal.success.same_device footer{padding:1.5rem;gap:.75rem}.modal div.qr{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;justify-items:center;align-items:center;width:100%}.modal div.qr canvas{grid-area:1 / 1;max-width:14rem;width:100%;image-rendering:crisp-edges;image-rendering:pixelated}.modal div.qr div.logo{grid-area:1 / 1;height:100%;width:100%;content:" ";background:url(data:image/png;base64,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) transparent no-repeat center center / auto 4rem;z-index:1055}.modal section.website{display:flex;flex-direction:column;align-items:center;gap:.75rem;padding:1.5rem 1rem}.modal section.download{display:flex;flex-direction:column;gap:1rem;padding:0 1rem 1rem}.modal section.download h3{font-size:1rem;font-weight:700;line-height:1.5;letter-spacing:.15px;text-align:center}.modal section.download .options{display:grid;grid-template-columns:1fr;gap:.75rem}@media(min-width:32rem){.modal section.download .options{grid-template-columns:1fr 1fr}}.modal section.download .option{display:flex;flex-direction:column;justify-content:space-between;gap:.5rem;border:1px solid var(--secondary-hover);border-radius:.75rem;padding:.75rem .75rem 1rem;background-color:var(--secondary-hover)}.modal section.download .option p{font-size:.875rem;line-height:1.25rem;letter-spacing:.25px}.modal section.download .option-title{font-weight:700}.modal section.download .option .store-badge{align-self:center;margin-top:.25rem}.modal .store-badge{display:inline-flex;align-items:center;gap:.6rem;min-width:10.5rem;padding:.5rem 1rem;border-radius:.75rem;border:1px solid #000000;background-color:#000;color:#fff;font:inherit;text-decoration:none;cursor:pointer;transition:opacity .15s ease}.modal .store-badge:hover{opacity:.85;text-decoration:none;color:#fff}.modal .store-badge-icon{width:1.5rem;height:1.5rem;flex-shrink:0}.modal .store-badge-text{display:flex;flex-direction:column;line-height:1.15;text-align:left}.modal .store-badge-text small{font-size:.625rem;font-weight:400;letter-spacing:.02em}.modal .store-badge-text strong{font-size:1rem;font-weight:700}.modal section.install{display:flex;flex-direction:column;align-items:center;gap:1rem;width:100%}.modal.created.install footer{padding:1.5rem}.modal.created.install footer .button{border-radius:.75rem;padding:1rem 1.5rem}.modal section.text{display:flex;flex-direction:column;gap:.5rem}svg.loading-indicator{animation:2s linear infinite svg-animation;padding:1rem;width:44px;max-width:6.25rem}@keyframes svg-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}svg.loading-indicator circle{animation:1.4s ease-in-out infinite both circle-animation;display:block;fill:transparent;stroke:var(--primary-color);stroke-dasharray:283;stroke-dashoffset:280;stroke-width:10px;transform-origin:50% 50%}@keyframes circle-animation{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}to{stroke-dashoffset:280;transform:rotate(360deg)}}.modal-anchor.business{--primary-color: #aa418c;--primary-hover: #7a2e65}.modal-anchor.business .modal div.qr div.logo{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjYwLjIzNSIgaGVpZ2h0PSI2MC4yMzUiIHg9IjUuODgyIiB5PSI1Ljg4MiIgZmlsbD0ibm9uZSIgcng9IjExLjQ3MSIgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2ZpbGw6I2ZmZjtmaWxsLW9wYWNpdHk6MDtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6MTEuNzY0NztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpiZXZlbDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIiBzdHlsZT0iZGlzcGxheTppbmxpbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiPjxwYXRoIGZpbGw9IiNmYWYwZjciIGQ9Ik0wIDE1LjM2QzAgNi44NzcgNi44NzcgMCAxNS4zNiAwaDMzLjI4QzU3LjEyMyAwIDY0IDYuODc3IDY0IDE1LjM2djMzLjI4QzY0IDU3LjEyMyA1Ny4xMjMgNjQgNDguNjQgNjRIMTUuMzZDNi44NzcgNjQgMCA1Ny4xMjMgMCA0OC42NFoiLz48ZyBmaWx0ZXI9InVybCgjYikiPjxwYXRoIGZpbGw9InVybCgjYykiIGQ9Ik0xMi44IDI2Ljg1OWMwLTIuODY4IDAtNC4zMDIuNTU4LTUuMzk3YTUuMTIgNS4xMiAwIDAgMSAyLjIzNy0yLjIzOGMxLjA5Ni0uNTU4IDIuNTMtLjU1OCA1LjM5Ny0uNTU4aDIyLjAxNmMyLjg2NyAwIDQuMyAwIDUuMzk2LjU1OGE1LjEyIDUuMTIgMCAwIDEgMi4yMzggMi4yMzhjLjU1OCAxLjA5NS41NTggMi41MjkuNTU4IDUuMzk3djEwLjQ5NWMwIDIuODY4IDAgNC4zMDItLjU1OCA1LjM5N2E1LjEyIDUuMTIgMCAwIDEtMi4yMzggMi4yMzdjLTEuMDk1LjU1OC0yLjUyOS41NTgtNS4zOTYuNTU4SDIwLjk5MmMtMi44NjggMC00LjMwMSAwLTUuMzk3LS41NThhNS4xMiA1LjEyIDAgMCAxLTIuMjM3LTIuMjM3Yy0uNTU4LTEuMDk1LS41NTgtMi41My0uNTU4LTUuMzk3WiIgc3R5bGU9ImZpbGw6dXJsKCNjKSIvPjxwYXRoIGZpbGw9IiNhYTQxOGMiIGZpbGwtb3BhY2l0eT0iLjUiIGQ9Ik0xMi44IDI2Ljg1OWMwLTIuODY4IDAtNC4zMDIuNTU4LTUuMzk3YTUuMTIgNS4xMiAwIDAgMSAyLjIzNy0yLjIzOGMxLjA5Ni0uNTU4IDIuNTMtLjU1OCA1LjM5Ny0uNTU4aDIyLjAxNmMyLjg2NyAwIDQuMyAwIDUuMzk2LjU1OGE1LjEyIDUuMTIgMCAwIDEgMi4yMzggMi4yMzhjLjU1OCAxLjA5NS41NTggMi41MjkuNTU4IDUuMzk3djEwLjQ5NWMwIDIuODY4IDAgNC4zMDItLjU1OCA1LjM5N2E1LjEyIDUuMTIgMCAwIDEtMi4yMzggMi4yMzdjLTEuMDk1LjU1OC0yLjUyOS41NTgtNS4zOTYuNTU4SDIwLjk5MmMtMi44NjggMC00LjMwMSAwLTUuMzk3LS41NThhNS4xMiA1LjEyIDAgMCAxLTIuMjM3LTIuMjM3Yy0uNTU4LTEuMDk1LS41NTgtMi41My0uNTU4LTUuMzk3WiIvPjwvZz48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS4yMiAxOC42NjdoOC45NjRsMi41MzcgNi45NzJjLjYyIDEuNy45MjkgMi41NTEuNTkzIDMuMjcycy0xLjE4NyAxLjAzLTIuODg4IDEuNjVsLS42OTguMjU0Yy0xLjcwMS42MTktMi41NTIuOTI4LTMuMjczLjU5Mi0uNzItLjMzNi0xLjAzLTEuMTg2LTEuNjUtMi44ODd6bTcuODk3IDkuNDIzYTEuNDA0IDEuNDA0IDAgMSAwLS45Ni0yLjYzOCAxLjQwNCAxLjQwNCAwIDAgMCAuOTYgMi42MzgiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIxMy45NyIgeDI9IjU1LjU0MyIgeTE9IjE4LjY2NiIgeTI9IjMxLjgyMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNhYTQxOGMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjMDYwYTAiLz48L2xpbmVhckdyYWRpZW50PjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGg2NHY2NEgwWiIvPjwvY2xpcFBhdGg+PGZpbHRlciBpZD0iYiIgd2lkdGg9IjUzLjQiIGhlaWdodD0iNDEuODgiIHg9IjYuNTUiIHk9IjE0LjY2NiIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImhhcmRBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPjxmZU9mZnNldCBkeD0iMS4yNSIgZHk9IjMuNSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMuNzUiLz48ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC42NjcgMCAwIDAgMCAwLjI1NSAwIDAgMCAwIDAuNTQ5IDAgMCAwIDEgMCIvPjxmZUJsZW5kIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18yMTcwM18yNjIyIi8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzIxNzAzXzI2MjIiIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48L2RlZnM+PC9zdmc+)}.modal-anchor.nbwallet{--primary-color: #a17a00;--primary-hover: #7d5e00}.modal-anchor.nbwallet .modal div.qr div.logo{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjYwLjIzNSIgaGVpZ2h0PSI2MC4yMzUiIHg9IjUuODgyIiB5PSI1Ljg4MiIgZmlsbD0ibm9uZSIgcng9IjExLjQ3MSIgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2ZpbGw6I2ZmZjtmaWxsLW9wYWNpdHk6MDtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6MTEuNzY0NztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpiZXZlbDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIiBzdHlsZT0iZGlzcGxheTppbmxpbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiPjxwYXRoIGZpbGw9IiNmYWY4ZjAiIGQ9Ik0wIDE1LjM2QzAgNi44NzcgNi44NzcgMCAxNS4zNiAwaDMzLjI4QzU3LjEyMyAwIDY0IDYuODc3IDY0IDE1LjM2djMzLjI4QzY0IDU3LjEyMyA1Ny4xMjMgNjQgNDguNjQgNjRIMTUuMzZDNi44NzcgNjQgMCA1Ny4xMjMgMCA0OC42NFoiLz48ZyBmaWx0ZXI9InVybCgjYikiPjxwYXRoIGZpbGw9InVybCgjYykiIGQ9Ik0xMi44IDI2Ljg1OWMwLTIuODY4IDAtNC4zMDIuNTU4LTUuMzk3YTUuMTIgNS4xMiAwIDAgMSAyLjIzNy0yLjIzOGMxLjA5Ni0uNTU4IDIuNTMtLjU1OCA1LjM5Ny0uNTU4aDIyLjAxNmMyLjg2NyAwIDQuMyAwIDUuMzk2LjU1OGE1LjEyIDUuMTIgMCAwIDEgMi4yMzggMi4yMzhjLjU1OCAxLjA5NS41NTggMi41MjkuNTU4IDUuMzk3djEwLjQ5NWMwIDIuODY4IDAgNC4zMDItLjU1OCA1LjM5N2E1LjEyIDUuMTIgMCAwIDEtMi4yMzggMi4yMzdjLTEuMDk1LjU1OC0yLjUyOS41NTgtNS4zOTYuNTU4SDIwLjk5MmMtMi44NjggMC00LjMwMSAwLTUuMzk3LS41NThhNS4xMiA1LjEyIDAgMCAxLTIuMjM3LTIuMjM3Yy0uNTU4LTEuMDk1LS41NTgtMi41My0uNTU4LTUuMzk3WiIgc3R5bGU9ImZpbGw6dXJsKCNjKSIvPjxwYXRoIGZpbGw9IiNhMTdhMDAiIGZpbGwtb3BhY2l0eT0iLjUiIGQ9Ik0xMi44IDI2Ljg1OWMwLTIuODY4IDAtNC4zMDIuNTU4LTUuMzk3YTUuMTIgNS4xMiAwIDAgMSAyLjIzNy0yLjIzOGMxLjA5Ni0uNTU4IDIuNTMtLjU1OCA1LjM5Ny0uNTU4aDIyLjAxNmMyLjg2NyAwIDQuMyAwIDUuMzk2LjU1OGE1LjEyIDUuMTIgMCAwIDEgMi4yMzggMi4yMzhjLjU1OCAxLjA5NS41NTggMi41MjkuNTU4IDUuMzk3djEwLjQ5NWMwIDIuODY4IDAgNC4zMDItLjU1OCA1LjM5N2E1LjEyIDUuMTIgMCAwIDEtMi4yMzggMi4yMzdjLTEuMDk1LjU1OC0yLjUyOS41NTgtNS4zOTYuNTU4SDIwLjk5MmMtMi44NjggMC00LjMwMSAwLTUuMzk3LS41NThhNS4xMiA1LjEyIDAgMCAxLTIuMjM3LTIuMjM3Yy0uNTU4LTEuMDk1LS41NTgtMi41My0uNTU4LTUuMzk3WiIvPjwvZz48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS4yMiAxOC42NjdoOC45NjRsMi41MzcgNi45NzJjLjYyIDEuNy45MjkgMi41NTEuNTkzIDMuMjcycy0xLjE4NyAxLjAzLTIuODg4IDEuNjVsLS42OTguMjU0Yy0xLjcwMS42MTktMi41NTIuOTI4LTMuMjczLjU5Mi0uNzItLjMzNi0xLjAzLTEuMTg2LTEuNjUtMi44ODd6bTcuODk3IDkuNDIzYTEuNDA0IDEuNDA0IDAgMSAwLS45Ni0yLjYzOCAxLjQwNCAxLjQwNCAwIDAgMCAuOTYgMi42MzgiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIxMy45NyIgeDI9IjU1LjU0MyIgeTE9IjE4LjY2NiIgeTI9IjMxLjgyMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNhMTdhMDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjMzkxMTQiLz48L2xpbmVhckdyYWRpZW50PjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGg2NHY2NEgwWiIvPjwvY2xpcFBhdGg+PGZpbHRlciBpZD0iYiIgd2lkdGg9IjUzLjQiIGhlaWdodD0iNDEuODgiIHg9IjYuNTUiIHk9IjE0LjY2NiIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImhhcmRBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPjxmZU9mZnNldCBkeD0iMS4yNSIgZHk9IjMuNSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMuNzUiLz48ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC42MzEgMCAwIDAgMCAwLjQ3OCAwIDAgMCAwIDAgMCAwIDAgMSAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzIxNzAzXzI2MjIiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMjE3MDNfMjYyMiIgcmVzdWx0PSJzaGFwZSIvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4=)}.modal-anchor.over18{--primary-color: #5352e9;--primary-hover: #3a39c4}.modal-anchor.over18 .modal div.qr div.logo{background-image:url(data:image/png;base64,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)}', cp = /* @__PURE__ */ Wr(lp, [["styles", [ap]]]), up = /* @__PURE__ */ uc(cp);
customElements.define("nl-wallet-button", up);
