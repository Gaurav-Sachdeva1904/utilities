import * as l from "react";
import P, { forwardRef as gn, useState as Pe, createElement as wt, useLayoutEffect as nr, useMemo as yt, useRef as Ce, useEffect as _e, useCallback as ve, createContext as $d, useContext as Vd } from "react";
import * as Bt from "react-dom";
import { createPortal as Bd } from "react-dom";
function Yd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nn = { exports: {} }, Jt = {};
var Aa;
function Hd() {
  if (Aa) return Jt;
  Aa = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, o, a) {
    var s = null;
    if (a !== void 0 && (s = "" + a), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      a = {};
      for (var i in o)
        i !== "key" && (a[i] = o[i]);
    } else a = o;
    return o = a.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return Jt.Fragment = t, Jt.jsx = n, Jt.jsxs = n, Jt;
}
var en = {};
var Ia;
function Gd() {
  return Ia || (Ia = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(k) {
      if (k == null) return null;
      if (typeof k == "function")
        return k.$$typeof === N ? null : k.displayName || k.name || null;
      if (typeof k == "string") return k;
      switch (k) {
        case y:
          return "Fragment";
        case w:
          return "Profiler";
        case x:
          return "StrictMode";
        case E:
          return "Suspense";
        case M:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof k == "object")
        switch (typeof k.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), k.$$typeof) {
          case v:
            return "Portal";
          case C:
            return k.displayName || "Context";
          case b:
            return (k._context.displayName || "Context") + ".Consumer";
          case S:
            var $ = k.render;
            return k = k.displayName, k || (k = $.displayName || $.name || "", k = k !== "" ? "ForwardRef(" + k + ")" : "ForwardRef"), k;
          case O:
            return $ = k.displayName || null, $ !== null ? $ : e(k.type) || "Memo";
          case _:
            $ = k._payload, k = k._init;
            try {
              return e(k($));
            } catch {
            }
        }
      return null;
    }
    function t(k) {
      return "" + k;
    }
    function n(k) {
      try {
        t(k);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var U = $.error, X = typeof Symbol == "function" && Symbol.toStringTag && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return U.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(k);
      }
    }
    function r(k) {
      if (k === y) return "<>";
      if (typeof k == "object" && k !== null && k.$$typeof === _)
        return "<...>";
      try {
        var $ = e(k);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var k = j.A;
      return k === null ? null : k.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(k) {
      if (F.call(k, "key")) {
        var $ = Object.getOwnPropertyDescriptor(k, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return k.key !== void 0;
    }
    function i(k, $) {
      function U() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(k, "key", {
        get: U,
        configurable: !0
      });
    }
    function c() {
      var k = e(this.type);
      return z[k] || (z[k] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), k = this.props.ref, k !== void 0 ? k : null;
    }
    function u(k, $, U, X, he, fe) {
      var I = U.ref;
      return k = {
        $$typeof: g,
        type: k,
        key: $,
        props: U,
        _owner: X
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(k, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(k, "ref", { enumerable: !1, value: null }), k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(k, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(k, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: he
      }), Object.defineProperty(k, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: fe
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    }
    function d(k, $, U, X, he, fe) {
      var I = $.children;
      if (I !== void 0)
        if (X)
          if (R(I)) {
            for (X = 0; X < I.length; X++)
              f(I[X]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(I);
      if (F.call($, "key")) {
        I = e(k);
        var Q = Object.keys($).filter(function(ee) {
          return ee !== "key";
        });
        X = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", K[I + X] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          I,
          Q,
          I
        ), K[I + X] = !0);
      }
      if (I = null, U !== void 0 && (n(U), I = "" + U), s($) && (n($.key), I = "" + $.key), "key" in $) {
        U = {};
        for (var se in $)
          se !== "key" && (U[se] = $[se]);
      } else U = $;
      return I && i(
        U,
        typeof k == "function" ? k.displayName || k.name || "Unknown" : k
      ), u(
        k,
        I,
        U,
        o(),
        he,
        fe
      );
    }
    function f(k) {
      h(k) ? k._store && (k._store.validated = 1) : typeof k == "object" && k !== null && k.$$typeof === _ && (k._payload.status === "fulfilled" ? h(k._payload.value) && k._payload.value._store && (k._payload.value._store.validated = 1) : k._store && (k._store.validated = 1));
    }
    function h(k) {
      return typeof k == "object" && k !== null && k.$$typeof === g;
    }
    var m = P, g = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), x = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), b = /* @__PURE__ */ Symbol.for("react.consumer"), C = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), O = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), N = /* @__PURE__ */ Symbol.for("react.client.reference"), j = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, R = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(k) {
        return k();
      }
    };
    var V, z = {}, L = m.react_stack_bottom_frame.bind(
      m,
      a
    )(), T = Y(r(a)), K = {};
    en.Fragment = y, en.jsx = function(k, $, U) {
      var X = 1e4 > j.recentlyCreatedOwnerStacks++;
      return d(
        k,
        $,
        U,
        !1,
        X ? Error("react-stack-top-frame") : L,
        X ? Y(r(k)) : T
      );
    }, en.jsxs = function(k, $, U) {
      var X = 1e4 > j.recentlyCreatedOwnerStacks++;
      return d(
        k,
        $,
        U,
        !0,
        X ? Error("react-stack-top-frame") : L,
        X ? Y(r(k)) : T
      );
    };
  })()), en;
}
var ja;
function Ud() {
  return ja || (ja = 1, process.env.NODE_ENV === "production" ? Nn.exports = Hd() : Nn.exports = Gd()), Nn.exports;
}
var p = Ud();
function D(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function Fa(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function zd(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Fa(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Fa(e[o], null);
        }
      };
  };
}
function G(...e) {
  return l.useCallback(zd(...e), e);
}
function be(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = l.createContext(s);
    i.displayName = a + "Context";
    const c = n.length;
    n = [...n, s];
    const u = (f) => {
      const { scope: h, children: m, ...g } = f, v = h?.[e]?.[c] || i, y = l.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ p.jsx(v.Provider, { value: y, children: m });
    };
    u.displayName = a + "Provider";
    function d(f, h) {
      const m = h?.[e]?.[c] || i, g = l.useContext(m);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [u, d];
  }
  const o = () => {
    const a = n.map((s) => l.createContext(s));
    return function(i) {
      const c = i?.[e] || a;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, Kd(o, ...t)];
}
function Kd(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: u }) => {
        const f = c(a)[`__scope${u}`];
        return { ...i, ...f };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  const t = l.forwardRef((n, r) => {
    let { children: o, ...a } = n, s = null, i = !1;
    const c = [];
    Wa(o) && typeof On == "function" && (o = On(o._payload)), l.Children.forEach(o, (h) => {
      if (Jd(h)) {
        i = !0;
        const m = h;
        let g = "child" in m.props ? m.props.child : m.props.children;
        Wa(g) && typeof On == "function" && (g = On(g._payload)), s = Xd(m, g), c.push(s?.props?.children);
      } else
        c.push(h);
    }), s ? s = l.cloneElement(s, void 0, c) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !i && l.Children.count(o) === 1 && l.isValidElement(o) && (s = o)
    );
    const u = s ? Qd(s) : void 0, d = G(r, u);
    if (!s) {
      if (o || o === 0)
        throw new Error(
          i ? rf(e) : nf(e)
        );
      return o;
    }
    const f = Zd(a, s.props ?? {});
    return s.type !== l.Fragment && (f.ref = r ? d : u), l.cloneElement(s, f);
  });
  return t.displayName = `${e}.Slot`, t;
}
var Vs = /* @__PURE__ */ st("Slot"), qd = /* @__PURE__ */ Symbol.for("radix.slottable"), Xd = (e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return l.isValidElement(n) ? l.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return l.isValidElement(t) ? t : null;
};
function Zd(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const c = a(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Qd(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Jd(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qd;
}
var ef = /* @__PURE__ */ Symbol.for("react.lazy");
function Wa(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === ef && "_payload" in e && tf(e._payload);
}
function tf(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
var nf = (e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, rf = (e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, On = l[" use ".trim().toString()];
function rr(e) {
  const t = e + "CollectionProvider", [n, r] = be(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: y, children: x } = v, w = l.useRef(null), b = l.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: y, itemMap: b, collectionRef: w, children: x });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ st(i), u = l.forwardRef(
    (v, y) => {
      const { scope: x, children: w } = v, b = a(i, x), C = G(y, b.collectionRef);
      return /* @__PURE__ */ p.jsx(c, { ref: C, children: w });
    }
  );
  u.displayName = i;
  const d = e + "CollectionItemSlot", f = "data-radix-collection-item", h = /* @__PURE__ */ st(d), m = l.forwardRef(
    (v, y) => {
      const { scope: x, children: w, ...b } = v, C = l.useRef(null), S = G(y, C), E = a(d, x);
      return l.useEffect(() => (E.itemMap.set(C, { ref: C, ...b }), () => {
        E.itemMap.delete(C);
      })), /* @__PURE__ */ p.jsx(h, { [f]: "", ref: S, children: w });
    }
  );
  m.displayName = d;
  function g(v) {
    const y = a(e + "CollectionConsumer", v);
    return l.useCallback(() => {
      const w = y.collectionRef.current;
      if (!w) return [];
      const b = Array.from(w.querySelectorAll(`[${f}]`));
      return Array.from(y.itemMap.values()).sort(
        (E, M) => b.indexOf(E.ref.current) - b.indexOf(M.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: s, Slot: u, ItemSlot: m },
    g,
    r
  ];
}
var of = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], W = of.reduce((e, t) => {
  const n = /* @__PURE__ */ st(`Primitive.${t}`), r = l.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, c = s ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(c, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function No(e, t) {
  e && Bt.flushSync(() => e.dispatchEvent(t));
}
function ce(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => ((...n) => t.current?.(...n)), []);
}
var ue = globalThis?.document ? l.useLayoutEffect : () => {
}, La = l[" useEffectEvent ".trim().toString()], $a = l[" useInsertionEffect ".trim().toString()];
function af(e) {
  if (typeof La == "function")
    return La(e);
  const t = l.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof $a == "function" ? $a(() => {
    t.current = e;
  }) : ue(() => {
    t.current = e;
  }), l.useMemo(() => ((...n) => t.current?.(...n)), []);
}
var sf = "DismissableLayer", lo = "dismissableLayer.update", cf = "dismissableLayer.pointerDownOutside", lf = "dismissableLayer.focusOutside", Va, Oo = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), Yt = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      deferPointerDownOutside: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: a,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: c,
      ...u
    } = e, d = l.useContext(Oo), [f, h] = l.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, g] = l.useState({}), v = G(t, h), y = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = y.indexOf(x), b = f ? y.indexOf(f) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= w, E = l.useRef(!1), M = ff(
      (N) => {
        const j = N.target;
        if (!(j instanceof Node))
          return;
        const F = [...d.branches].some(
          (R) => R.contains(j)
        );
        !S || F || (a?.(N), i?.(N), N.defaultPrevented || c?.());
      },
      {
        ownerDocument: m,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: E,
        dismissableSurfaces: d.dismissableSurfaces
      }
    ), O = pf((N) => {
      if (r && E.current)
        return;
      const j = N.target;
      [...d.branches].some((R) => R.contains(j)) || (s?.(N), i?.(N), N.defaultPrevented || c?.());
    }, m), _ = f ? b === y.length - 1 : !1, A = af((N) => {
      N.key === "Escape" && (o?.(N), !N.defaultPrevented && c && (N.preventDefault(), c()));
    });
    return l.useEffect(() => {
      if (_)
        return m.addEventListener("keydown", A, { capture: !0 }), () => m.removeEventListener("keydown", A, { capture: !0 });
    }, [m, _]), l.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Va = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Ba(), () => {
          n && (d.layersWithOutsidePointerEventsDisabled.delete(f), d.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = Va));
        };
    }, [f, m, n, d]), l.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Ba());
    }, [f, d]), l.useEffect(() => {
      const N = () => g({});
      return document.addEventListener(lo, N), () => document.removeEventListener(lo, N);
    }, []), /* @__PURE__ */ p.jsx(
      W.div,
      {
        ...u,
        ref: v,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: D(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: D(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: D(
          e.onPointerDownCapture,
          M.onPointerDownCapture
        )
      }
    );
  }
);
Yt.displayName = sf;
var uf = "DismissableLayerBranch", Bs = l.forwardRef((e, t) => {
  const n = l.useContext(Oo), r = l.useRef(null), o = G(t, r);
  return l.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(W.div, { ...e, ref: o });
});
Bs.displayName = uf;
function df() {
  const e = l.useContext(Oo), [t, n] = l.useState(null);
  return l.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
function ff(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: a
  } = t, s = ce(e), i = l.useRef(!1), c = l.useRef(!1), u = l.useRef(/* @__PURE__ */ new Map()), d = l.useRef(() => {
  });
  return l.useEffect(() => {
    function f() {
      c.current = !1, o.current = !1, u.current.clear();
    }
    function h() {
      return Array.from(u.current.values()).some(Boolean);
    }
    function m(w) {
      if (!c.current)
        return;
      const b = w.target;
      b instanceof Node && [...a].some((S) => S.contains(b)) || u.current.set(w.type, !0), w.type === "click" && window.setTimeout(() => {
        c.current && d.current();
      }, 0);
    }
    function g(w) {
      c.current && u.current.set(w.type, !1);
    }
    const v = (w) => {
      if (w.target && !i.current) {
        let b = function() {
          n.removeEventListener("click", d.current);
          const S = h();
          f(), S || Ys(
            cf,
            s,
            C,
            { discrete: !0 }
          );
        };
        const C = { originalEvent: w };
        c.current = !0, o.current = r && w.button === 0, u.current.clear(), !r || w.button !== 0 ? b() : (n.removeEventListener("click", d.current), d.current = b, n.addEventListener("click", d.current, { once: !0 }));
      } else
        n.removeEventListener("click", d.current), f();
      i.current = !1;
    }, y = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const w of y)
      n.addEventListener(w, m, !0), n.addEventListener(w, g);
    const x = window.setTimeout(() => {
      n.addEventListener("pointerdown", v);
    }, 0);
    return () => {
      window.clearTimeout(x), n.removeEventListener("pointerdown", v), n.removeEventListener("click", d.current);
      for (const w of y)
        n.removeEventListener(w, m, !0), n.removeEventListener(w, g);
    };
  }, [
    n,
    s,
    r,
    o,
    a
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => i.current = !0
  };
}
function pf(e, t = globalThis?.document) {
  const n = ce(e), r = l.useRef(!1);
  return l.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Ys(lf, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ba() {
  const e = new CustomEvent(lo);
  document.dispatchEvent(e);
}
function Ys(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? No(o, a) : o.dispatchEvent(a);
}
var hf = Yt, mf = Bs, vf = "Portal", Ht = l.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, a] = l.useState(!1);
  ue(() => a(!0), []);
  const s = n || o && globalThis?.document?.body;
  return s ? Bt.createPortal(/* @__PURE__ */ p.jsx(W.div, { ...r, ref: t }), s) : null;
});
Ht.displayName = vf;
function gf(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var me = (e) => {
  const { present: t, children: n } = e, r = yf(t), o = typeof n == "function" ? n({ present: r.isPresent }) : l.Children.only(n), a = bf(r.ref, wf(o));
  return typeof n == "function" || r.isPresent ? l.cloneElement(o, { ref: a }) : null;
};
me.displayName = "Presence";
function yf(e) {
  const [t, n] = l.useState(), r = l.useRef(null), o = l.useRef(e), a = l.useRef("none"), s = e ? "mounted" : "unmounted", [i, c] = gf(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return l.useEffect(() => {
    const u = _n(r.current);
    a.current = i === "mounted" ? u : "none";
  }, [i]), ue(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const h = a.current, m = _n(u);
      e ? c("MOUNT") : m === "none" || u?.display === "none" ? c("UNMOUNT") : c(d && h !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ue(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (m) => {
        const v = _n(r.current).includes(CSS.escape(m.animationName));
        if (m.target === t && v && (c("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, h = (m) => {
        m.target === t && (a.current = _n(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: l.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function Ya(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function bf(...e) {
  const t = l.useRef(e);
  return t.current = e, l.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const a = r.map((s) => {
      const i = Ya(s, n);
      return !o && typeof i == "function" && (o = !0), i;
    });
    if (o)
      return () => {
        for (let s = 0; s < a.length; s++) {
          const i = a[s];
          typeof i == "function" ? i() : Ya(r[s], null);
        }
      };
  }, []);
}
function _n(e) {
  return e?.animationName || "none";
}
function wf(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var xf = l[" useInsertionEffect ".trim().toString()] || ue;
function We({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = Cf({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : o;
  {
    const d = l.useRef(e !== void 0);
    l.useEffect(() => {
      const f = d.current;
      f !== i && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = i;
    }, [i, r]);
  }
  const u = l.useCallback(
    (d) => {
      if (i) {
        const f = Sf(d) ? d(e) : d;
        f !== e && s.current?.(f);
      } else
        a(d);
    },
    [i, e, a, s]
  );
  return [c, u];
}
function Cf({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = l.useState(e), o = l.useRef(n), a = l.useRef(t);
  return xf(() => {
    a.current = t;
  }, [t]), l.useEffect(() => {
    o.current !== n && (a.current?.(n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Sf(e) {
  return typeof e == "function";
}
var Hs = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Ef = "VisuallyHidden", or = l.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    W.span,
    {
      ...e,
      ref: t,
      style: { ...Hs, ...e.style }
    }
  )
);
or.displayName = Ef;
var kf = or, _o = "ToastProvider", [To, Pf, Mf] = rr("Toast"), [Gs] = be("Toast", [Mf]), [Rf, ar] = Gs(_o), Us = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    announcerContainer: s,
    children: i
  } = e, [c, u] = l.useState(null), [d, f] = l.useState(0), h = l.useRef(!1), m = l.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${_o}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ p.jsx(To.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
    Rf,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: d,
      viewport: c,
      onViewportChange: u,
      onToastAdd: l.useCallback(() => f((g) => g + 1), []),
      onToastRemove: l.useCallback(() => f((g) => g - 1), []),
      isFocusedToastEscapeKeyDownRef: h,
      isClosePausedRef: m,
      announcerContainer: s,
      children: i
    }
  ) });
};
Us.displayName = _o;
var zs = "ToastViewport", Nf = ["F8"], uo = "toast.viewportPause", fo = "toast.viewportResume", Of = l.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = Nf,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = ar(zs, n), i = Pf(n), c = l.useRef(null), u = l.useRef(null), d = l.useRef(null), f = l.useRef(null), h = G(t, f, s.onViewportChange), m = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = s.toastCount > 0;
    l.useEffect(() => {
      const y = (x) => {
        r.length !== 0 && r.every((b) => x[b] || x.code === b) && f.current?.focus();
      };
      return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
    }, [r]), l.useEffect(() => {
      const y = c.current, x = f.current;
      if (g && y && x) {
        const w = () => {
          if (!s.isClosePausedRef.current) {
            const E = new CustomEvent(uo);
            x.dispatchEvent(E), s.isClosePausedRef.current = !0;
          }
        }, b = () => {
          if (s.isClosePausedRef.current) {
            const E = new CustomEvent(fo);
            x.dispatchEvent(E), s.isClosePausedRef.current = !1;
          }
        }, C = (E) => {
          !y.contains(E.relatedTarget) && b();
        }, S = () => {
          y.contains(document.activeElement) || b();
        };
        return y.addEventListener("focusin", w), y.addEventListener("focusout", C), y.addEventListener("pointermove", w), y.addEventListener("pointerleave", S), window.addEventListener("blur", w), window.addEventListener("focus", b), () => {
          y.removeEventListener("focusin", w), y.removeEventListener("focusout", C), y.removeEventListener("pointermove", w), y.removeEventListener("pointerleave", S), window.removeEventListener("blur", w), window.removeEventListener("focus", b);
        };
      }
    }, [g, s.isClosePausedRef]);
    const v = l.useCallback(
      ({ tabbingDirection: y }) => {
        const w = i().map((b) => {
          const C = b.ref.current, S = [C, ...zf(C)];
          return y === "forwards" ? S : S.reverse();
        });
        return (y === "forwards" ? w.reverse() : w).flat();
      },
      [i]
    );
    return l.useEffect(() => {
      const y = f.current;
      if (y) {
        const x = (w) => {
          const b = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !b) {
            const S = document.activeElement, E = w.shiftKey;
            if (w.target === y && E) {
              u.current?.focus();
              return;
            }
            const _ = v({ tabbingDirection: E ? "backwards" : "forwards" }), A = _.findIndex((N) => N === S);
            Yr(_.slice(A + 1)) ? w.preventDefault() : E ? u.current?.focus() : d.current?.focus();
          }
        };
        return y.addEventListener("keydown", x), () => y.removeEventListener("keydown", x);
      }
    }, [i, v]), /* @__PURE__ */ p.jsxs(
      mf,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", m),
        tabIndex: -1,
        style: { pointerEvents: g ? void 0 : "none" },
        children: [
          g && /* @__PURE__ */ p.jsx(
            po,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const y = v({
                  tabbingDirection: "forwards"
                });
                Yr(y);
              }
            }
          ),
          /* @__PURE__ */ p.jsx(To.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(W.ol, { tabIndex: -1, ...a, ref: h }) }),
          g && /* @__PURE__ */ p.jsx(
            po,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const y = v({
                  tabbingDirection: "backwards"
                });
                Yr(y);
              }
            }
          )
        ]
      }
    );
  }
);
Of.displayName = zs;
var Ks = "ToastFocusProxy", po = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = ar(Ks, n);
    return /* @__PURE__ */ p.jsx(
      or,
      {
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (s) => {
          const i = s.relatedTarget;
          !a.viewport?.contains(i) && r();
        }
      }
    );
  }
);
po.displayName = Ks;
var yn = "Toast", _f = "toast.swipeStart", Tf = "toast.swipeMove", Df = "toast.swipeCancel", Af = "toast.swipeEnd", If = l.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [i, c] = We({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: yn
    });
    return /* @__PURE__ */ p.jsx(me, { present: n || i, children: /* @__PURE__ */ p.jsx(
      Wf,
      {
        open: i,
        ...s,
        ref: t,
        onClose: () => c(!1),
        onPause: ce(e.onPause),
        onResume: ce(e.onResume),
        onSwipeStart: D(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: D(e.onSwipeMove, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: D(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: D(e.onSwipeEnd, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), c(!1);
        })
      }
    ) });
  }
);
If.displayName = yn;
var [jf, Ff] = Gs(yn, {
  onClose() {
  }
}), Wf = l.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: a,
      onClose: s,
      onEscapeKeyDown: i,
      onPause: c,
      onResume: u,
      onSwipeStart: d,
      onSwipeMove: f,
      onSwipeCancel: h,
      onSwipeEnd: m,
      ...g
    } = e, v = ar(yn, n), [y, x] = l.useState(null), w = G(t, x), b = l.useRef(null), C = l.useRef(null), S = o || v.duration, E = l.useRef(0), M = l.useRef(S), O = l.useRef(0), { onToastAdd: _, onToastRemove: A } = v, N = ce(() => {
      y?.contains(document.activeElement) && v.viewport?.focus(), s();
    }), j = l.useCallback(
      (R) => {
        !R || R === 1 / 0 || (window.clearTimeout(O.current), E.current = (/* @__PURE__ */ new Date()).getTime(), O.current = window.setTimeout(N, R));
      },
      [N]
    );
    l.useEffect(() => {
      const R = v.viewport;
      if (R) {
        const Y = () => {
          j(M.current), u?.();
        }, V = () => {
          const z = (/* @__PURE__ */ new Date()).getTime() - E.current;
          M.current = M.current - z, window.clearTimeout(O.current), c?.();
        };
        return R.addEventListener(uo, V), R.addEventListener(fo, Y), () => {
          R.removeEventListener(uo, V), R.removeEventListener(fo, Y);
        };
      }
    }, [v.viewport, S, c, u, j]), l.useEffect(() => {
      a && !v.isClosePausedRef.current && j(S);
    }, [a, S, v.isClosePausedRef, j]), l.useEffect(() => () => {
      window.clearTimeout(O.current);
    }, []), l.useEffect(() => (_(), () => A()), [_, A]);
    const F = l.useMemo(() => y ? Js(y) : null, [y]);
    return v.viewport ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      F && /* @__PURE__ */ p.jsx(
        Lf,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: F
        }
      ),
      /* @__PURE__ */ p.jsx(jf, { scope: n, onClose: N, children: Bt.createPortal(
        /* @__PURE__ */ p.jsx(To.ItemSlot, { scope: n, children: /* @__PURE__ */ p.jsx(
          hf,
          {
            asChild: !0,
            onEscapeKeyDown: D(i, () => {
              v.isFocusedToastEscapeKeyDownRef.current || N(), v.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ p.jsx(
              W.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...g,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: D(e.onKeyDown, (R) => {
                  R.key === "Escape" && (i?.(R.nativeEvent), R.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, N()));
                }),
                onPointerDown: D(e.onPointerDown, (R) => {
                  R.button === 0 && (b.current = { x: R.clientX, y: R.clientY });
                }),
                onPointerMove: D(e.onPointerMove, (R) => {
                  if (!b.current) return;
                  const Y = R.clientX - b.current.x, V = R.clientY - b.current.y, z = !!C.current, L = ["left", "right"].includes(v.swipeDirection), T = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, K = L ? T(0, Y) : 0, k = L ? 0 : T(0, V), $ = R.pointerType === "touch" ? 10 : 2, U = { x: K, y: k }, X = { originalEvent: R, delta: U };
                  z ? (C.current = U, Tn(Tf, f, X, {
                    discrete: !1
                  })) : Ha(U, v.swipeDirection, $) ? (C.current = U, Tn(_f, d, X, {
                    discrete: !1
                  }), R.target.setPointerCapture(R.pointerId)) : (Math.abs(Y) > $ || Math.abs(V) > $) && (b.current = null);
                }),
                onPointerUp: D(e.onPointerUp, (R) => {
                  const Y = C.current, V = R.target;
                  if (V.hasPointerCapture(R.pointerId) && V.releasePointerCapture(R.pointerId), C.current = null, b.current = null, Y) {
                    const z = R.currentTarget, L = { originalEvent: R, delta: Y };
                    Ha(Y, v.swipeDirection, v.swipeThreshold) ? Tn(Af, m, L, {
                      discrete: !0
                    }) : Tn(
                      Df,
                      h,
                      L,
                      {
                        discrete: !0
                      }
                    ), z.addEventListener("click", (T) => T.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        v.viewport
      ) })
    ] }) : null;
  }
), Lf = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = ar(yn, t), [a, s] = l.useState(!1), [i, c] = l.useState(!1);
  return Gf(() => s(!0)), l.useEffect(() => {
    const u = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), i ? null : /* @__PURE__ */ p.jsx(Ht, { asChild: !0, container: o.announcerContainer || void 0, children: /* @__PURE__ */ p.jsx(or, { ...r, children: a && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, $f = "ToastTitle", Vf = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(W.div, { ...r, ref: t });
  }
);
Vf.displayName = $f;
var Bf = "ToastDescription", Yf = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(W.div, { ...r, ref: t });
  }
);
Yf.displayName = Bf;
var qs = "ToastAction", Hf = l.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ p.jsx(Qs, { altText: n, asChild: !0, children: /* @__PURE__ */ p.jsx(Zs, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${qs}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Hf.displayName = qs;
var Xs = "ToastClose", Zs = l.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = Ff(Xs, n);
    return /* @__PURE__ */ p.jsx(Qs, { asChild: !0, children: /* @__PURE__ */ p.jsx(
      W.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: D(e.onClick, o.onClose)
      }
    ) });
  }
);
Zs.displayName = Xs;
var Qs = l.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ p.jsx(
    W.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Js(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Uf(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Js(r));
    }
  }), t;
}
function Tn(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? No(o, a) : o.dispatchEvent(a);
}
var Ha = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function Gf(e = () => {
}) {
  const t = ce(e);
  ue(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function Uf(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function zf(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Yr(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var Kf = Us, Hr = { exports: {} };
var Ga;
function qf() {
  return Ga || (Ga = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var a = "", s = 0; s < arguments.length; s++) {
          var i = arguments[s];
          i && (a = o(a, r(i)));
        }
        return a;
      }
      function r(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return n.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var s = "";
        for (var i in a)
          t.call(a, i) && a[i] && (s = o(s, i));
        return s;
      }
      function o(a, s) {
        return s ? a ? a + " " + s : a + s : a;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(Hr)), Hr.exports;
}
var Xf = qf();
const Z = /* @__PURE__ */ Yd(Xf), ei = gn(
  ({ theme: e = "light", classname: t = "", children: n, root: r = !1 }, o) => {
    const a = /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: o,
        className: Z(
          "ui-provider",
          {
            "ui-light": e === "light",
            "ui-dark": e === "dark"
          },
          t
        ),
        children: n
      }
    );
    return r && typeof document < "u" ? Bd(a, document.body) : a;
  }
);
ei.displayName = "StyleProvider";
var Zf = l[" useId ".trim().toString()] || (() => {
}), Qf = 0;
function Fe(e) {
  const [t, n] = l.useState(Zf());
  return ue(() => {
    n((r) => r ?? String(Qf++));
  }, [e]), t ? `radix-${t}` : "";
}
var Gr = "focusScope.autoFocusOnMount", Ur = "focusScope.autoFocusOnUnmount", Ua = { bubbles: !1, cancelable: !0 }, Jf = "FocusScope", bn = l.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, c] = l.useState(null), u = ce(o), d = ce(a), f = l.useRef(null), h = G(t, c), m = l.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  l.useEffect(() => {
    if (r) {
      let v = function(b) {
        if (m.paused || !i) return;
        const C = b.target;
        i.contains(C) ? f.current = C : rt(f.current, { select: !0 });
      }, y = function(b) {
        if (m.paused || !i) return;
        const C = b.relatedTarget;
        C !== null && (i.contains(C) || rt(f.current, { select: !0 }));
      }, x = function(b) {
        if (document.activeElement === document.body)
          for (const S of b)
            S.removedNodes.length > 0 && rt(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", y);
      const w = new MutationObserver(x);
      return i && w.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", y), w.disconnect();
      };
    }
  }, [r, i, m.paused]), l.useEffect(() => {
    if (i) {
      Ka.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const x = new CustomEvent(Gr, Ua);
        i.addEventListener(Gr, u), i.dispatchEvent(x), x.defaultPrevented || (ep(ap(ti(i)), { select: !0 }), document.activeElement === v && rt(i));
      }
      return () => {
        i.removeEventListener(Gr, u), setTimeout(() => {
          const x = new CustomEvent(Ur, Ua);
          i.addEventListener(Ur, d), i.dispatchEvent(x), x.defaultPrevented || rt(v ?? document.body, { select: !0 }), i.removeEventListener(Ur, d), Ka.remove(m);
        }, 0);
      };
    }
  }, [i, u, d, m]);
  const g = l.useCallback(
    (v) => {
      if (!n && !r || m.paused) return;
      const y = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
      if (y && x) {
        const w = v.currentTarget, [b, C] = tp(w);
        b && C ? !v.shiftKey && x === C ? (v.preventDefault(), n && rt(b, { select: !0 })) : v.shiftKey && x === b && (v.preventDefault(), n && rt(C, { select: !0 })) : x === w && v.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ p.jsx(W.div, { tabIndex: -1, ...s, ref: h, onKeyDown: g });
});
bn.displayName = Jf;
function ep(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (rt(r, { select: t }), document.activeElement !== n) return;
}
function tp(e) {
  const t = ti(e), n = za(t, e), r = za(t.reverse(), e);
  return [n, r];
}
function ti(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function za(e, t) {
  for (const n of e)
    if (!np(n, { upTo: t })) return n;
}
function np(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function rp(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function rt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && rp(e) && t && e.select();
  }
}
var Ka = op();
function op() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = qa(e, t), e.unshift(t);
    },
    remove(t) {
      e = qa(e, t), e[0]?.resume();
    }
  };
}
function qa(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ap(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Dn = 0, Mt = null;
function sr() {
  l.useEffect(() => {
    Mt || (Mt = { start: Xa(), end: Xa() });
    const { start: e, end: t } = Mt;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Dn++, () => {
      Dn === 1 && (Mt?.start.remove(), Mt?.end.remove(), Mt = null), Dn = Math.max(0, Dn - 1);
    };
  }, []);
}
function Xa() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ye = function() {
  return Ye = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ye.apply(this, arguments);
};
function ni(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function sp(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var $n = "right-scroll-bar-position", Vn = "width-before-scroll-bar", ip = "with-scroll-bars-hidden", cp = "--removed-body-scroll-bar-size";
function zr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function lp(e, t) {
  var n = Pe(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var up = typeof window < "u" ? l.useLayoutEffect : l.useEffect, Za = /* @__PURE__ */ new WeakMap();
function dp(e, t) {
  var n = lp(null, function(r) {
    return e.forEach(function(o) {
      return zr(o, r);
    });
  });
  return up(function() {
    var r = Za.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || zr(i, null);
      }), a.forEach(function(i) {
        o.has(i) || zr(i, s);
      });
    }
    Za.set(n, e);
  }, [e]), n;
}
function fp(e) {
  return e;
}
function pp(e, t) {
  t === void 0 && (t = fp);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var c = function() {
        var d = s;
        s = [], d.forEach(a);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), n = {
        push: function(d) {
          s.push(d), u();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function hp(e) {
  e === void 0 && (e = {});
  var t = pp(null);
  return t.options = Ye({ async: !0, ssr: !1 }, e), t;
}
var ri = function(e) {
  var t = e.sideCar, n = ni(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return l.createElement(r, Ye({}, n));
};
ri.isSideCarExport = !0;
function mp(e, t) {
  return e.useMedium(t), ri;
}
var oi = hp(), Kr = function() {
}, ir = l.forwardRef(function(e, t) {
  var n = l.useRef(null), r = l.useState({
    onScrollCapture: Kr,
    onWheelCapture: Kr,
    onTouchMoveCapture: Kr
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, h = e.sideCar, m = e.noRelative, g = e.noIsolation, v = e.inert, y = e.allowPinchZoom, x = e.as, w = x === void 0 ? "div" : x, b = e.gapMode, C = ni(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = h, E = dp([n, t]), M = Ye(Ye({}, C), o);
  return l.createElement(
    l.Fragment,
    null,
    d && l.createElement(S, { sideCar: oi, removeScrollBar: u, shards: f, noRelative: m, noIsolation: g, inert: v, setCallbacks: a, allowPinchZoom: !!y, lockRef: n, gapMode: b }),
    s ? l.cloneElement(l.Children.only(i), Ye(Ye({}, M), { ref: E })) : l.createElement(w, Ye({}, M, { className: c, ref: E }), i)
  );
});
ir.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ir.classNames = {
  fullWidth: Vn,
  zeroRight: $n
};
var vp = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function gp() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = vp();
  return t && e.setAttribute("nonce", t), e;
}
function yp(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function bp(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var wp = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = gp()) && (yp(t, n), bp(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, xp = function() {
  var e = wp();
  return function(t, n) {
    l.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ai = function() {
  var e = xp(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Cp = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, qr = function(e) {
  return parseInt(e || "", 10) || 0;
}, Sp = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [qr(n), qr(r), qr(o)];
}, Ep = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Cp;
  var t = Sp(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, kp = ai(), At = "data-scroll-locked", Pp = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ip, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(At, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat($n, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Vn, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat($n, " .").concat($n, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Vn, " .").concat(Vn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(At, `] {
    `).concat(cp, ": ").concat(i, `px;
  }
`);
}, Qa = function() {
  var e = parseInt(document.body.getAttribute(At) || "0", 10);
  return isFinite(e) ? e : 0;
}, Mp = function() {
  l.useEffect(function() {
    return document.body.setAttribute(At, (Qa() + 1).toString()), function() {
      var e = Qa() - 1;
      e <= 0 ? document.body.removeAttribute(At) : document.body.setAttribute(At, e.toString());
    };
  }, []);
}, Rp = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Mp();
  var a = l.useMemo(function() {
    return Ep(o);
  }, [o]);
  return l.createElement(kp, { styles: Pp(a, !t, o, n ? "" : "!important") });
}, ho = !1;
if (typeof window < "u")
  try {
    var An = Object.defineProperty({}, "passive", {
      get: function() {
        return ho = !0, !0;
      }
    });
    window.addEventListener("test", An, An), window.removeEventListener("test", An, An);
  } catch {
    ho = !1;
  }
var Rt = ho ? { passive: !1 } : !1, Np = function(e) {
  return e.tagName === "TEXTAREA";
}, si = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Np(e) && n[t] === "visible")
  );
}, Op = function(e) {
  return si(e, "overflowY");
}, _p = function(e) {
  return si(e, "overflowX");
}, Ja = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ii(e, r);
    if (o) {
      var a = ci(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Tp = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Dp = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ii = function(e, t) {
  return e === "v" ? Op(t) : _p(t);
}, ci = function(e, t) {
  return e === "v" ? Tp(t) : Dp(t);
}, Ap = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ip = function(e, t, n, r, o) {
  var a = Ap(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), u = !1, d = s > 0, f = 0, h = 0;
  do {
    if (!i)
      break;
    var m = ci(e, i), g = m[0], v = m[1], y = m[2], x = v - y - a * g;
    (g || x) && ii(e, i) && (f += x, h += g);
    var w = i.parentNode;
    i = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(h) < 1) && (u = !0), u;
}, In = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, es = function(e) {
  return [e.deltaX, e.deltaY];
}, ts = function(e) {
  return e && "current" in e ? e.current : e;
}, jp = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Fp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Wp = 0, Nt = [];
function Lp(e) {
  var t = l.useRef([]), n = l.useRef([0, 0]), r = l.useRef(), o = l.useState(Wp++)[0], a = l.useState(ai)[0], s = l.useRef(e);
  l.useEffect(function() {
    s.current = e;
  }, [e]), l.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = sp([e.lockRef.current], (e.shards || []).map(ts), !0).filter(Boolean);
      return v.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = l.useCallback(function(v, y) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var x = In(v), w = n.current, b = "deltaX" in v ? v.deltaX : w[0] - x[0], C = "deltaY" in v ? v.deltaY : w[1] - x[1], S, E = v.target, M = Math.abs(b) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && M === "h" && E.type === "range")
      return !1;
    var O = window.getSelection(), _ = O && O.anchorNode, A = _ ? _ === E || _.contains(E) : !1;
    if (A)
      return !1;
    var N = Ja(M, E);
    if (!N)
      return !0;
    if (N ? S = M : (S = M === "v" ? "h" : "v", N = Ja(M, E)), !N)
      return !1;
    if (!r.current && "changedTouches" in v && (b || C) && (r.current = S), !S)
      return !0;
    var j = r.current || S;
    return Ip(j, y, v, j === "h" ? b : C);
  }, []), c = l.useCallback(function(v) {
    var y = v;
    if (!(!Nt.length || Nt[Nt.length - 1] !== a)) {
      var x = "deltaY" in y ? es(y) : In(y), w = t.current.filter(function(S) {
        return S.name === y.type && (S.target === y.target || y.target === S.shadowParent) && jp(S.delta, x);
      })[0];
      if (w && w.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!w) {
        var b = (s.current.shards || []).map(ts).filter(Boolean).filter(function(S) {
          return S.contains(y.target);
        }), C = b.length > 0 ? i(y, b[0]) : !s.current.noIsolation;
        C && y.cancelable && y.preventDefault();
      }
    }
  }, []), u = l.useCallback(function(v, y, x, w) {
    var b = { name: v, delta: y, target: x, should: w, shadowParent: $p(x) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== b;
      });
    }, 1);
  }, []), d = l.useCallback(function(v) {
    n.current = In(v), r.current = void 0;
  }, []), f = l.useCallback(function(v) {
    u(v.type, es(v), v.target, i(v, e.lockRef.current));
  }, []), h = l.useCallback(function(v) {
    u(v.type, In(v), v.target, i(v, e.lockRef.current));
  }, []);
  l.useEffect(function() {
    return Nt.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Rt), document.addEventListener("touchmove", c, Rt), document.addEventListener("touchstart", d, Rt), function() {
      Nt = Nt.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, Rt), document.removeEventListener("touchmove", c, Rt), document.removeEventListener("touchstart", d, Rt);
    };
  }, []);
  var m = e.removeScrollBar, g = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    g ? l.createElement(a, { styles: Fp(o) }) : null,
    m ? l.createElement(Rp, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function $p(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Vp = mp(oi, Lp);
var wn = l.forwardRef(function(e, t) {
  return l.createElement(ir, Ye({}, e, { ref: t, sideCar: Vp }));
});
wn.classNames = ir.classNames;
var Bp = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ot = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), Fn = {}, Xr = 0, li = function(e) {
  return e && (e.host || li(e.parentNode));
}, Yp = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = li(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Hp = function(e, t, n, r) {
  var o = Yp(t, Array.isArray(e) ? e : [e]);
  Fn[n] || (Fn[n] = /* @__PURE__ */ new WeakMap());
  var a = Fn[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), u = function(f) {
    !f || i.has(f) || (i.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (i.has(h))
        d(h);
      else
        try {
          var m = h.getAttribute(r), g = m !== null && m !== "false", v = (Ot.get(h) || 0) + 1, y = (a.get(h) || 0) + 1;
          Ot.set(h, v), a.set(h, y), s.push(h), v === 1 && g && jn.set(h, !0), y === 1 && h.setAttribute(n, "true"), g || h.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", h, x);
        }
    });
  };
  return d(t), i.clear(), Xr++, function() {
    s.forEach(function(f) {
      var h = Ot.get(f) - 1, m = a.get(f) - 1;
      Ot.set(f, h), a.set(f, m), h || (jn.has(f) || f.removeAttribute(r), jn.delete(f)), m || f.removeAttribute(n);
    }), Xr--, Xr || (Ot = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), Fn = {});
  };
}, cr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Bp(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Hp(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, lr = "Dialog", [ui] = be(lr), [Gp, Ve] = ui(lr), di = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = l.useRef(null), c = l.useRef(null), [u, d] = We({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: lr
  });
  return /* @__PURE__ */ p.jsx(
    Gp,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: Fe(),
      titleId: Fe(),
      descriptionId: Fe(),
      open: u,
      onOpenChange: d,
      onOpenToggle: l.useCallback(() => d((f) => !f), [d]),
      modal: s,
      children: n
    }
  );
};
di.displayName = lr;
var fi = "DialogTrigger", Up = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(fi, n), a = G(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": Ao(o.open),
        ...r,
        ref: a,
        onClick: D(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Up.displayName = fi;
var Do = "DialogPortal", [zp, pi] = ui(Do, {
  forceMount: void 0
}), hi = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Ve(Do, t);
  return /* @__PURE__ */ p.jsx(zp, { scope: t, forceMount: n, children: l.Children.map(r, (s) => /* @__PURE__ */ p.jsx(me, { present: n || a.open, children: /* @__PURE__ */ p.jsx(Ht, { asChild: !0, container: o, children: s }) })) });
};
hi.displayName = Do;
var Hn = "DialogOverlay", mi = l.forwardRef(
  (e, t) => {
    const n = pi(Hn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Ve(Hn, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ p.jsx(me, { present: r || a.open, children: /* @__PURE__ */ p.jsx(qp, { ...o, ref: t }) }) : null;
  }
);
mi.displayName = Hn;
var Kp = /* @__PURE__ */ st("DialogOverlay.RemoveScroll"), qp = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(Hn, n), a = df(), s = G(t, a);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(wn, { as: Kp, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        W.div,
        {
          "data-state": Ao(o.open),
          ...r,
          ref: s,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), jt = "DialogContent", vi = l.forwardRef(
  (e, t) => {
    const n = pi(jt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Ve(jt, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(me, { present: r || a.open, children: a.modal ? /* @__PURE__ */ p.jsx(Xp, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(Zp, { ...o, ref: t }) });
  }
);
vi.displayName = jt;
var Xp = l.forwardRef(
  (e, t) => {
    const n = Ve(jt, e.__scopeDialog), r = l.useRef(null), o = G(t, n.contentRef, r);
    return l.useEffect(() => {
      const a = r.current;
      if (a) return cr(a);
    }, []), /* @__PURE__ */ p.jsx(
      gi,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        onCloseAutoFocus: D(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: D(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: D(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Zp = l.forwardRef(
  (e, t) => {
    const n = Ve(jt, e.__scopeDialog), r = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      gi,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || n.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          n.triggerRef.current?.contains(s) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), gi = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Ve(jt, n);
    return sr(), /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(
      bn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ p.jsx(
          Yt,
          {
            role: "dialog",
            id: i.contentId,
            "aria-describedby": i.descriptionId,
            "aria-labelledby": i.titleId,
            "data-state": Ao(i.open),
            ...s,
            ref: t,
            deferPointerDownOutside: !0,
            onDismiss: () => i.onOpenChange(!1)
          }
        )
      }
    ) });
  }
), yi = "DialogTitle", bi = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(yi, n);
    return /* @__PURE__ */ p.jsx(W.h2, { id: o.titleId, ...r, ref: t });
  }
);
bi.displayName = yi;
var wi = "DialogDescription", xi = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(wi, n);
    return /* @__PURE__ */ p.jsx(W.p, { id: o.descriptionId, ...r, ref: t });
  }
);
xi.displayName = wi;
var Ci = "DialogClose", Si = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(Ci, n);
    return /* @__PURE__ */ p.jsx(
      W.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: D(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Si.displayName = Ci;
function Ao(e) {
  return e ? "open" : "closed";
}
function Ei(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Qp = ["color"], Jp = /* @__PURE__ */ gn(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = Ei(e, Qp);
  return wt("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), wt("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), eh = ["color"], th = /* @__PURE__ */ gn(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = Ei(e, eh);
  return wt("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), wt("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), nh = l.createContext(void 0);
function Gt(e) {
  const t = l.useContext(nh);
  return e || t || "ltr";
}
var Io = "Avatar", [rh] = be(Io), oh = [
  0,
  () => {
  }
], [ah, ki] = rh(Io), Pi = l.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = l.useState("idle"), [s, i] = ih();
    return /* @__PURE__ */ p.jsx(
      ah,
      {
        scope: n,
        imageLoadingStatus: o,
        setImageLoadingStatus: a,
        imageCount: s,
        setImageCount: i,
        children: /* @__PURE__ */ p.jsx(W.span, { ...r, ref: t })
      }
    );
  }
);
Pi.displayName = Io;
var Mi = "AvatarImage", Ri = l.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o, ...a } = e, s = ki(Mi, n);
    ch(s.setImageCount);
    const i = sh(r, {
      referrerPolicy: a.referrerPolicy,
      crossOrigin: a.crossOrigin,
      loadingStatus: s.imageLoadingStatus,
      setLoadingStatus: s.setImageLoadingStatus
    }), c = ce((d) => {
      o?.(d);
    }), u = l.useRef(i);
    return ue(() => {
      const d = u.current;
      u.current = i, i !== d && c(i);
    }, [i, c]), i === "loaded" ? /* @__PURE__ */ p.jsx(W.img, { ...a, ref: t, src: r }) : null;
  }
);
Ri.displayName = Mi;
var Ni = "AvatarFallback", Oi = l.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = ki(Ni, n), [s, i] = l.useState(r === void 0);
    return l.useEffect(() => {
      if (r !== void 0) {
        const c = window.setTimeout(() => i(!0), r);
        return () => window.clearTimeout(c);
      }
    }, [r]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ p.jsx(W.span, { ...o, ref: t }) : null;
  }
);
Oi.displayName = Ni;
function sh(e, {
  loadingStatus: t,
  setLoadingStatus: n,
  referrerPolicy: r,
  crossOrigin: o
}) {
  return ue(() => {
    if (!e) {
      n("error");
      return;
    }
    const a = new window.Image(), s = (c) => {
      const u = c.currentTarget;
      n(ns(u));
    }, i = () => n("error");
    return a.addEventListener("load", s), a.addEventListener("error", i), r && (a.referrerPolicy = r), a.crossOrigin = o ?? null, a.src = e, n(ns(a)), () => {
      a.removeEventListener("load", s), a.removeEventListener("error", i), n("idle");
    };
  }, [e, o, r, n]), t;
}
function ns(e) {
  return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading";
}
function ih() {
  let e = oh;
  {
    e = l.useState(0);
    const [t] = e, n = l.useRef(!1);
    l.useEffect(() => {
      t > 1 && !n.current && (n.current = !0, console.warn(
        "Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."
      ));
    }, [t]);
  }
  return e;
}
function ch(e) {
  l.useEffect(() => (e((t) => t + 1), () => {
    e((t) => t - 1);
  }), [e]);
}
function ur(e) {
  const t = l.useRef({ value: e, previous: e });
  return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function dr(e) {
  const [t, n] = l.useState(void 0);
  return ue(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          s = u.inlineSize, i = u.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({ width: s, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var fr = "Checkbox", [lh] = be(fr), [uh, jo] = lh(fr);
function dh(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: s,
    name: i,
    onCheckedChange: c,
    required: u,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [h, m] = We({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: fr
  }), [g, v] = l.useState(null), [y, x] = l.useState(null), w = l.useRef(!1), b = g ? !!s || !!g.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), C = {
    checked: h,
    disabled: a,
    setChecked: m,
    control: g,
    setControl: v,
    name: i,
    form: s,
    value: d,
    hasConsumerStoppedPropagationRef: w,
    required: u,
    defaultChecked: at(o) ? !1 : o,
    isFormControl: b,
    bubbleInput: y,
    setBubbleInput: x
  };
  return /* @__PURE__ */ p.jsx(
    uh,
    {
      scope: t,
      ...C,
      children: fh(f) ? f(C) : r
    }
  );
}
var _i = "CheckboxTrigger", Ti = l.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: s,
      disabled: i,
      checked: c,
      required: u,
      setControl: d,
      setChecked: f,
      hasConsumerStoppedPropagationRef: h,
      isFormControl: m,
      bubbleInput: g
    } = jo(_i, e), v = G(o, d), y = l.useRef(c);
    return l.useEffect(() => {
      const x = a?.form;
      if (x) {
        const w = () => f(y.current);
        return x.addEventListener("reset", w), () => x.removeEventListener("reset", w);
      }
    }, [a, f]), /* @__PURE__ */ p.jsx(
      W.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": at(c) ? "mixed" : c,
        "aria-required": u,
        "data-state": Wi(c),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: v,
        onKeyDown: D(t, (x) => {
          x.key === "Enter" && x.preventDefault();
        }),
        onClick: D(n, (x) => {
          f((w) => at(w) ? !0 : !w), g && m && (h.current = x.isPropagationStopped(), h.current || x.stopPropagation());
        })
      }
    );
  }
);
Ti.displayName = _i;
var Di = l.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: s,
      disabled: i,
      value: c,
      onCheckedChange: u,
      form: d,
      ...f
    } = e;
    return /* @__PURE__ */ p.jsx(
      dh,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: i,
        required: s,
        onCheckedChange: u,
        name: r,
        form: d,
        value: c,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx(
            Ti,
            {
              ...f,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          h && /* @__PURE__ */ p.jsx(
            Fi,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Di.displayName = fr;
var Ai = "CheckboxIndicator", Ii = l.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = jo(Ai, n);
    return /* @__PURE__ */ p.jsx(
      me,
      {
        present: r || at(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p.jsx(
          W.span,
          {
            "data-state": Wi(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Ii.displayName = Ai;
var ji = "CheckboxBubbleInput", Fi = l.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: s,
      required: i,
      disabled: c,
      name: u,
      value: d,
      form: f,
      bubbleInput: h,
      setBubbleInput: m
    } = jo(ji, e), g = G(n, m), v = ur(a), y = dr(r);
    l.useEffect(() => {
      const w = h;
      if (!w) return;
      const b = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, E = !o.current;
      if (v !== a && S) {
        const M = new Event("click", { bubbles: E });
        w.indeterminate = at(a), S.call(w, at(a) ? !1 : a), w.dispatchEvent(M);
      }
    }, [h, v, a, o]);
    const x = l.useRef(at(a) ? !1 : a);
    return /* @__PURE__ */ p.jsx(
      W.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: s ?? x.current,
        required: i,
        disabled: c,
        name: u,
        value: d,
        form: f,
        ...t,
        tabIndex: -1,
        ref: g,
        style: {
          ...t.style,
          ...y,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
Fi.displayName = ji;
function fh(e) {
  return typeof e == "function";
}
function at(e) {
  return e === "indeterminate";
}
function Wi(e) {
  return at(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const ph = ["top", "right", "bottom", "left"], it = Math.min, ke = Math.max, Gn = Math.round, Wn = Math.floor, Ue = (e) => ({
  x: e,
  y: e
}), hh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function mo(e, t, n) {
  return ke(e, it(t, n));
}
function Je(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function et(e) {
  return e.split("-")[0];
}
function Ut(e) {
  return e.split("-")[1];
}
function Fo(e) {
  return e === "x" ? "y" : "x";
}
function Wo(e) {
  return e === "y" ? "height" : "width";
}
function He(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Lo(e) {
  return Fo(He(e));
}
function mh(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ut(e), o = Lo(e), a = Wo(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Un(s)), [s, Un(s)];
}
function vh(e) {
  const t = Un(e);
  return [vo(e), t, vo(t)];
}
function vo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const rs = ["left", "right"], os = ["right", "left"], gh = ["top", "bottom"], yh = ["bottom", "top"];
function bh(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? os : rs : t ? rs : os;
    case "left":
    case "right":
      return t ? gh : yh;
    default:
      return [];
  }
}
function wh(e, t, n, r) {
  const o = Ut(e);
  let a = bh(et(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(vo)))), a;
}
function Un(e) {
  const t = et(e);
  return hh[t] + e.slice(t.length);
}
function xh(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Li(e) {
  return typeof e != "number" ? xh(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function zn(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function as(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = He(t), s = Lo(t), i = Wo(s), c = et(t), u = a === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ut(t)) {
    case "start":
      m[s] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      m[s] += h * (n && u ? -1 : 1);
      break;
  }
  return m;
}
async function Ch(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: m = 0
  } = Je(t, e), g = Li(m), y = i[h ? f === "floating" ? "reference" : "floating" : f], x = zn(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(y))) == null || n ? y : y.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), w = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), C = await (a.isElement == null ? void 0 : a.isElement(b)) ? await (a.getScale == null ? void 0 : a.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = zn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: b,
    strategy: c
  }) : w);
  return {
    top: (x.top - S.top + g.top) / C.y,
    bottom: (S.bottom - x.bottom + g.bottom) / C.y,
    left: (x.left - S.left + g.left) / C.x,
    right: (S.right - x.right + g.right) / C.x
  };
}
const Sh = 50, Eh = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Ch
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = as(u, r, c), h = r, m = 0;
  const g = {};
  for (let v = 0; v < a.length; v++) {
    const y = a[v];
    if (!y)
      continue;
    const {
      name: x,
      fn: w
    } = y, {
      x: b,
      y: C,
      data: S,
      reset: E
    } = await w({
      x: d,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = b ?? d, f = C ?? f, g[x] = {
      ...g[x],
      ...S
    }, E && m < Sh && (m++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: f
    } = as(u, h, c)), v = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: g
  };
}, kh = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: c
    } = t, {
      element: u,
      padding: d = 0
    } = Je(e, t) || {};
    if (u == null)
      return {};
    const f = Li(d), h = {
      x: n,
      y: r
    }, m = Lo(o), g = Wo(m), v = await s.getDimensions(u), y = m === "y", x = y ? "top" : "left", w = y ? "bottom" : "right", b = y ? "clientHeight" : "clientWidth", C = a.reference[g] + a.reference[m] - h[m] - a.floating[g], S = h[m] - a.reference[m], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let M = E ? E[b] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(E))) && (M = i.floating[b] || a.floating[g]);
    const O = C / 2 - S / 2, _ = M / 2 - v[g] / 2 - 1, A = it(f[x], _), N = it(f[w], _), j = A, F = M - v[g] - N, R = M / 2 - v[g] / 2 + O, Y = mo(j, R, F), V = !c.arrow && Ut(o) != null && R !== Y && a.reference[g] / 2 - (R < j ? A : N) - v[g] / 2 < 0, z = V ? R < j ? R - j : R - F : 0;
    return {
      [m]: h[m] + z,
      data: {
        [m]: Y,
        centerOffset: R - Y - z,
        ...V && {
          alignmentOffset: z
        }
      },
      reset: V
    };
  }
}), Ph = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: c,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...y
      } = Je(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const x = et(o), w = He(i), b = et(i) === i, C = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), S = h || (b || !v ? [Un(i)] : vh(i)), E = g !== "none";
      !h && E && S.push(...wh(i, v, g, C));
      const M = [i, ...S], O = await c.detectOverflow(t, y), _ = [];
      let A = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && _.push(O[x]), f) {
        const R = mh(o, s, C);
        _.push(O[R[0]], O[R[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: _
      }], !_.every((R) => R <= 0)) {
        var N, j;
        const R = (((N = a.flip) == null ? void 0 : N.index) || 0) + 1, Y = M[R];
        if (Y && (!(f === "alignment" ? w !== He(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((L) => He(L.placement) === w ? L.overflows[0] > 0 : !0)))
          return {
            data: {
              index: R,
              overflows: A
            },
            reset: {
              placement: Y
            }
          };
        let V = (j = A.filter((z) => z.overflows[0] <= 0).sort((z, L) => z.overflows[1] - L.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!V)
          switch (m) {
            case "bestFit": {
              var F;
              const z = (F = A.filter((L) => {
                if (E) {
                  const T = He(L.placement);
                  return T === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((T) => T > 0).reduce((T, K) => T + K, 0)]).sort((L, T) => L[1] - T[1])[0]) == null ? void 0 : F[0];
              z && (V = z);
              break;
            }
            case "initialPlacement":
              V = i;
              break;
          }
        if (o !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function ss(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function is(e) {
  return ph.some((t) => e[t] >= 0);
}
const Mh = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = Je(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...a,
            elementContext: "reference"
          }), i = ss(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: is(i)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...a,
            altBoundary: !0
          }), i = ss(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: is(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, $i = /* @__PURE__ */ new Set(["left", "top"]);
async function Rh(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = et(n), i = Ut(n), c = He(n) === "y", u = $i.has(s) ? -1 : 1, d = a && c ? -1 : 1, f = Je(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof g == "number" && (m = i === "end" ? g * -1 : g), c ? {
    x: m * d,
    y: h * u
  } : {
    x: h * u,
    y: m * d
  };
}
const Nh = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: i
      } = t, c = await Rh(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Oh = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: a
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (x) => {
            let {
              x: w,
              y: b
            } = x;
            return {
              x: w,
              y: b
            };
          }
        },
        ...u
      } = Je(e, t), d = {
        x: n,
        y: r
      }, f = await a.detectOverflow(t, u), h = He(et(o)), m = Fo(h);
      let g = d[m], v = d[h];
      if (s) {
        const x = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = g + f[x], C = g - f[w];
        g = mo(b, g, C);
      }
      if (i) {
        const x = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", b = v + f[x], C = v - f[w];
        v = mo(b, v, C);
      }
      const y = c.fn({
        ...t,
        [m]: g,
        [h]: v
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [m]: s,
            [h]: i
          }
        }
      };
    }
  };
}, _h = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: u = !0
      } = Je(e, t), d = {
        x: n,
        y: r
      }, f = He(o), h = Fo(f);
      let m = d[h], g = d[f];
      const v = Je(i, t), y = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const b = h === "y" ? "height" : "width", C = a.reference[h] - a.floating[b] + y.mainAxis, S = a.reference[h] + a.reference[b] - y.mainAxis;
        m < C ? m = C : m > S && (m = S);
      }
      if (u) {
        var x, w;
        const b = h === "y" ? "width" : "height", C = $i.has(et(o)), S = a.reference[f] - a.floating[b] + (C && ((x = s.offset) == null ? void 0 : x[f]) || 0) + (C ? 0 : y.crossAxis), E = a.reference[f] + a.reference[b] + (C ? 0 : ((w = s.offset) == null ? void 0 : w[f]) || 0) - (C ? y.crossAxis : 0);
        g < S ? g = S : g > E && (g = E);
      }
      return {
        [h]: m,
        [f]: g
      };
    }
  };
}, Th = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: s,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...u
      } = Je(e, t), d = await s.detectOverflow(t, u), f = et(o), h = Ut(o), m = He(o) === "y", {
        width: g,
        height: v
      } = a.floating;
      let y, x;
      f === "top" || f === "bottom" ? (y = f, x = h === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = f, y = h === "end" ? "top" : "bottom");
      const w = v - d.top - d.bottom, b = g - d.left - d.right, C = it(v - d[y], w), S = it(g - d[x], b), E = !t.middlewareData.shift;
      let M = C, O = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = b), (r = t.middlewareData.shift) != null && r.enabled.y && (M = w), E && !h) {
        const A = ke(d.left, 0), N = ke(d.right, 0), j = ke(d.top, 0), F = ke(d.bottom, 0);
        m ? O = g - 2 * (A !== 0 || N !== 0 ? A + N : ke(d.left, d.right)) : M = v - 2 * (j !== 0 || F !== 0 ? j + F : ke(d.top, d.bottom));
      }
      await c({
        ...t,
        availableWidth: O,
        availableHeight: M
      });
      const _ = await s.getDimensions(i.floating);
      return g !== _.width || v !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pr() {
  return typeof window < "u";
}
function zt(e) {
  return Vi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Me(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ze(e) {
  var t;
  return (t = (Vi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vi(e) {
  return pr() ? e instanceof Node || e instanceof Me(e).Node : !1;
}
function Le(e) {
  return pr() ? e instanceof Element || e instanceof Me(e).Element : !1;
}
function tt(e) {
  return pr() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}
function cs(e) {
  return !pr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot;
}
function xn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = $e(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function Dh(e) {
  return /^(table|td|th)$/.test(zt(e));
}
function hr(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const Ah = /transform|translate|scale|rotate|perspective|filter/, Ih = /paint|layout|strict|content/, ht = (e) => !!e && e !== "none";
let Zr;
function $o(e) {
  const t = Le(e) ? $e(e) : e;
  return ht(t.transform) || ht(t.translate) || ht(t.scale) || ht(t.rotate) || ht(t.perspective) || !Vo() && (ht(t.backdropFilter) || ht(t.filter)) || Ah.test(t.willChange || "") || Ih.test(t.contain || "");
}
function jh(e) {
  let t = ct(e);
  for (; tt(t) && !Ft(t); ) {
    if ($o(t))
      return t;
    if (hr(t))
      return null;
    t = ct(t);
  }
  return null;
}
function Vo() {
  return Zr == null && (Zr = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Zr;
}
function Ft(e) {
  return /^(html|body|#document)$/.test(zt(e));
}
function $e(e) {
  return Me(e).getComputedStyle(e);
}
function mr(e) {
  return Le(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ct(e) {
  if (zt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    cs(e) && e.host || // Fallback.
    ze(e)
  );
  return cs(t) ? t.host : t;
}
function Bi(e) {
  const t = ct(e);
  return Ft(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : tt(t) && xn(t) ? t : Bi(t);
}
function fn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Bi(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Me(o);
  if (a) {
    const i = go(s);
    return t.concat(s, s.visualViewport || [], xn(o) ? o : [], i && n ? fn(i) : []);
  } else
    return t.concat(o, fn(o, [], n));
}
function go(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Yi(e) {
  const t = $e(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = tt(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Gn(n) !== a || Gn(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Bo(e) {
  return Le(e) ? e : e.contextElement;
}
function It(e) {
  const t = Bo(e);
  if (!tt(t))
    return Ue(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Yi(t);
  let s = (a ? Gn(n.width) : n.width) / r, i = (a ? Gn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Fh = /* @__PURE__ */ Ue(0);
function Hi(e) {
  const t = Me(e);
  return !Vo() || !t.visualViewport ? Fh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wh(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Me(e) ? !1 : t;
}
function xt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Bo(e);
  let s = Ue(1);
  t && (r ? Le(r) && (s = It(r)) : s = It(e));
  const i = Wh(a, n, r) ? Hi(a) : Ue(0);
  let c = (o.left + i.x) / s.x, u = (o.top + i.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (a) {
    const h = Me(a), m = r && Le(r) ? Me(r) : r;
    let g = h, v = go(g);
    for (; v && r && m !== g; ) {
      const y = It(v), x = v.getBoundingClientRect(), w = $e(v), b = x.left + (v.clientLeft + parseFloat(w.paddingLeft)) * y.x, C = x.top + (v.clientTop + parseFloat(w.paddingTop)) * y.y;
      c *= y.x, u *= y.y, d *= y.x, f *= y.y, c += b, u += C, g = Me(v), v = go(g);
    }
  }
  return zn({
    width: d,
    height: f,
    x: c,
    y: u
  });
}
function vr(e, t) {
  const n = mr(e).scrollLeft;
  return t ? t.left + n : xt(ze(e)).left + n;
}
function Gi(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - vr(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Lh(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = ze(r), i = t ? hr(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ue(1);
  const d = Ue(0), f = tt(r);
  if ((f || !f && !a) && ((zt(r) !== "body" || xn(s)) && (c = mr(r)), f)) {
    const m = xt(r);
    u = It(r), d.x = m.x + r.clientLeft, d.y = m.y + r.clientTop;
  }
  const h = s && !f && !a ? Gi(s, c) : Ue(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + d.x + h.x,
    y: n.y * u.y - c.scrollTop * u.y + d.y + h.y
  };
}
function $h(e) {
  return Array.from(e.getClientRects());
}
function Vh(e) {
  const t = ze(e), n = mr(e), r = e.ownerDocument.body, o = ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + vr(e);
  const i = -n.scrollTop;
  return $e(r).direction === "rtl" && (s += ke(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const ls = 25;
function Bh(e, t) {
  const n = Me(e), r = ze(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const d = Vo();
    (!d || d && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const u = vr(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, h = getComputedStyle(f), m = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - m);
    g <= ls && (a -= g);
  } else u <= ls && (a += u);
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function Yh(e, t) {
  const n = xt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = tt(e) ? It(e) : Ue(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, u = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: u
  };
}
function us(e, t, n) {
  let r;
  if (t === "viewport")
    r = Bh(e, n);
  else if (t === "document")
    r = Vh(ze(e));
  else if (Le(t))
    r = Yh(t, n);
  else {
    const o = Hi(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return zn(r);
}
function Ui(e, t) {
  const n = ct(e);
  return n === t || !Le(n) || Ft(n) ? !1 : $e(n).position === "fixed" || Ui(n, t);
}
function Hh(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = fn(e, [], !1).filter((i) => Le(i) && zt(i) !== "body"), o = null;
  const a = $e(e).position === "fixed";
  let s = a ? ct(e) : e;
  for (; Le(s) && !Ft(s); ) {
    const i = $e(s), c = $o(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || xn(s) && !c && Ui(e, s)) ? r = r.filter((d) => d !== s) : o = i, s = ct(s);
  }
  return t.set(e, r), r;
}
function Gh(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? hr(t) ? [] : Hh(t, this._c) : [].concat(n), r], i = us(t, s[0], o);
  let c = i.top, u = i.right, d = i.bottom, f = i.left;
  for (let h = 1; h < s.length; h++) {
    const m = us(t, s[h], o);
    c = ke(m.top, c), u = it(m.right, u), d = it(m.bottom, d), f = ke(m.left, f);
  }
  return {
    width: u - f,
    height: d - c,
    x: f,
    y: c
  };
}
function Uh(e) {
  const {
    width: t,
    height: n
  } = Yi(e);
  return {
    width: t,
    height: n
  };
}
function zh(e, t, n) {
  const r = tt(t), o = ze(t), a = n === "fixed", s = xt(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ue(0);
  function u() {
    c.x = vr(o);
  }
  if (r || !r && !a)
    if ((zt(t) !== "body" || xn(o)) && (i = mr(t)), r) {
      const m = xt(t, !0, a, t);
      c.x = m.x + t.clientLeft, c.y = m.y + t.clientTop;
    } else o && u();
  a && !r && o && u();
  const d = o && !r && !a ? Gi(o, i) : Ue(0), f = s.left + i.scrollLeft - c.x - d.x, h = s.top + i.scrollTop - c.y - d.y;
  return {
    x: f,
    y: h,
    width: s.width,
    height: s.height
  };
}
function Qr(e) {
  return $e(e).position === "static";
}
function ds(e, t) {
  if (!tt(e) || $e(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ze(e) === n && (n = n.ownerDocument.body), n;
}
function zi(e, t) {
  const n = Me(e);
  if (hr(e))
    return n;
  if (!tt(e)) {
    let o = ct(e);
    for (; o && !Ft(o); ) {
      if (Le(o) && !Qr(o))
        return o;
      o = ct(o);
    }
    return n;
  }
  let r = ds(e, t);
  for (; r && Dh(r) && Qr(r); )
    r = ds(r, t);
  return r && Ft(r) && Qr(r) && !$o(r) ? n : r || jh(e) || n;
}
const Kh = async function(e) {
  const t = this.getOffsetParent || zi, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: zh(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function qh(e) {
  return $e(e).direction === "rtl";
}
const Xh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Lh,
  getDocumentElement: ze,
  getClippingRect: Gh,
  getOffsetParent: zi,
  getElementRects: Kh,
  getClientRects: $h,
  getDimensions: Uh,
  getScale: It,
  isElement: Le,
  isRTL: qh
};
function Ki(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Zh(e, t) {
  let n = null, r;
  const o = ze(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: h,
      height: m
    } = u;
    if (i || t(), !h || !m)
      return;
    const g = Wn(f), v = Wn(o.clientWidth - (d + h)), y = Wn(o.clientHeight - (f + m)), x = Wn(d), b = {
      rootMargin: -g + "px " + -v + "px " + -y + "px " + -x + "px",
      threshold: ke(0, it(1, c)) || 1
    };
    let C = !0;
    function S(E) {
      const M = E[0].intersectionRatio;
      if (M !== c) {
        if (!C)
          return s();
        M ? s(!1, M) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !Ki(u, e.getBoundingClientRect()) && s(), C = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, b);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function Qh(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = Bo(e), d = o || a ? [...u ? fn(u) : [], ...t ? fn(t) : []] : [];
  d.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), a && x.addEventListener("resize", n);
  });
  const f = u && i ? Zh(u, n) : null;
  let h = -1, m = null;
  s && (m = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === u && m && t && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var b;
      (b = m) == null || b.observe(t);
    })), n();
  }), u && !c && m.observe(u), t && m.observe(t));
  let g, v = c ? xt(e) : null;
  c && y();
  function y() {
    const x = xt(e);
    v && !Ki(v, x) && n(), v = x, g = requestAnimationFrame(y);
  }
  return n(), () => {
    var x;
    d.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), f?.(), (x = m) == null || x.disconnect(), m = null, c && cancelAnimationFrame(g);
  };
}
const Jh = Nh, em = Oh, tm = Ph, nm = Th, rm = Mh, fs = kh, om = _h, am = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Xh,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Eh(e, t, {
    ...o,
    platform: a
  });
};
var sm = typeof document < "u", im = function() {
}, Bn = sm ? nr : im;
function Kn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Kn(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Kn(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function qi(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ps(e, t) {
  const n = qi(e);
  return Math.round(t * n) / n;
}
function Jr(e) {
  const t = l.useRef(e);
  return Bn(() => {
    t.current = e;
  }), t;
}
function cm(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: u
  } = e, [d, f] = l.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, m] = l.useState(r);
  Kn(h, r) || m(r);
  const [g, v] = l.useState(null), [y, x] = l.useState(null), w = l.useCallback((L) => {
    L !== E.current && (E.current = L, v(L));
  }, []), b = l.useCallback((L) => {
    L !== M.current && (M.current = L, x(L));
  }, []), C = a || g, S = s || y, E = l.useRef(null), M = l.useRef(null), O = l.useRef(d), _ = c != null, A = Jr(c), N = Jr(o), j = Jr(u), F = l.useCallback(() => {
    if (!E.current || !M.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: h
    };
    N.current && (L.platform = N.current), am(E.current, M.current, L).then((T) => {
      const K = {
        ...T,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: j.current !== !1
      };
      R.current && !Kn(O.current, K) && (O.current = K, Bt.flushSync(() => {
        f(K);
      }));
    });
  }, [h, t, n, N, j]);
  Bn(() => {
    u === !1 && O.current.isPositioned && (O.current.isPositioned = !1, f((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [u]);
  const R = l.useRef(!1);
  Bn(() => (R.current = !0, () => {
    R.current = !1;
  }), []), Bn(() => {
    if (C && (E.current = C), S && (M.current = S), C && S) {
      if (A.current)
        return A.current(C, S, F);
      F();
    }
  }, [C, S, F, A, _]);
  const Y = l.useMemo(() => ({
    reference: E,
    floating: M,
    setReference: w,
    setFloating: b
  }), [w, b]), V = l.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), z = l.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return L;
    const T = ps(V.floating, d.x), K = ps(V.floating, d.y);
    return i ? {
      ...L,
      transform: "translate(" + T + "px, " + K + "px)",
      ...qi(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: T,
      top: K
    };
  }, [n, i, V.floating, d.x, d.y]);
  return l.useMemo(() => ({
    ...d,
    update: F,
    refs: Y,
    elements: V,
    floatingStyles: z
  }), [d, F, Y, V, z]);
}
const lm = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? fs({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? fs({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, um = (e, t) => {
  const n = Jh(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, dm = (e, t) => {
  const n = em(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, fm = (e, t) => ({
  fn: om(e).fn,
  options: [e, t]
}), pm = (e, t) => {
  const n = tm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, hm = (e, t) => {
  const n = nm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, mm = (e, t) => {
  const n = rm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, vm = (e, t) => {
  const n = lm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var gm = "Arrow", Xi = l.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ p.jsx(
    W.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ p.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Xi.displayName = gm;
var ym = Xi, Yo = "Popper", [Zi, Kt] = be(Yo), [bm, Qi] = Zi(Yo), Ji = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = l.useState(null), [a, s] = l.useState(void 0);
  return /* @__PURE__ */ p.jsx(
    bm,
    {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      placementState: a,
      setPlacementState: s,
      children: n
    }
  );
};
Ji.displayName = Yo;
var ec = "PopperAnchor", tc = l.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Qi(ec, n), s = l.useRef(null), i = a.onAnchorChange, c = l.useCallback(
      (g) => {
        s.current = g, g && i(g);
      },
      [i]
    ), u = G(t, c), d = l.useRef(null);
    l.useEffect(() => {
      if (!r)
        return;
      const g = d.current;
      d.current = r.current, g !== d.current && i(d.current);
    });
    const f = a.placementState && Go(a.placementState), h = f?.[0], m = f?.[1];
    return r ? null : /* @__PURE__ */ p.jsx(
      W.div,
      {
        "data-radix-popper-side": h,
        "data-radix-popper-align": m,
        ...o,
        ref: u
      }
    );
  }
);
tc.displayName = ec;
var Ho = "PopperContent", [wm, xm] = Zi(Ho), nc = l.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: i = 0,
      avoidCollisions: c = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: g,
      ...v
    } = e, y = Qi(Ho, n), [x, w] = l.useState(null), b = G(t, w), [C, S] = l.useState(null), E = dr(C), M = E?.width ?? 0, O = E?.height ?? 0, _ = r + (a !== "center" ? "-" + a : ""), A = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, N = Array.isArray(u) ? u : [u], j = N.length > 0, F = {
      padding: A,
      boundary: N.filter(Sm),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: j
    }, { refs: R, floatingStyles: Y, placement: V, isPositioned: z, middlewareData: L } = cm({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...Q) => Qh(...Q, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        um({ mainAxis: o + O, alignmentAxis: s }),
        c && dm({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? fm() : void 0,
          ...F
        }),
        c && pm({ ...F }),
        hm({
          ...F,
          apply: ({ elements: Q, rects: se, availableWidth: ee, availableHeight: ae }) => {
            const { width: le, height: De } = se.reference, xe = Q.floating.style;
            xe.setProperty("--radix-popper-available-width", `${ee}px`), xe.setProperty("--radix-popper-available-height", `${ae}px`), xe.setProperty("--radix-popper-anchor-width", `${le}px`), xe.setProperty("--radix-popper-anchor-height", `${De}px`);
          }
        }),
        C && vm({ element: C, padding: i }),
        Em({ arrowWidth: M, arrowHeight: O }),
        h && mm({
          strategy: "referenceHidden",
          ...F,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: j ? F.boundary : void 0
        })
      ]
    }), T = y.setPlacementState;
    ue(() => (T(V), () => {
      T(void 0);
    }), [V, T]);
    const [K, k] = Go(V), $ = ce(g);
    ue(() => {
      z && $?.();
    }, [z, $]);
    const U = L.arrow?.x, X = L.arrow?.y, he = L.arrow?.centerOffset !== 0, [fe, I] = l.useState();
    return ue(() => {
      x && I(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: R.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: z ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: fe,
          "--radix-popper-transform-origin": [
            L.transformOrigin?.x,
            L.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...L.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          wm,
          {
            scope: n,
            placedSide: K,
            placedAlign: k,
            onArrowChange: S,
            arrowX: U,
            arrowY: X,
            shouldHideArrow: he,
            children: /* @__PURE__ */ p.jsx(
              W.div,
              {
                "data-side": K,
                "data-align": k,
                ...v,
                ref: b,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: z ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
nc.displayName = Ho;
var rc = "PopperArrow", Cm = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, oc = l.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = xm(rc, r), s = Cm[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ p.jsx(
          ym,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
oc.displayName = rc;
function Sm(e) {
  return e !== null;
}
var Em = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, s = o.arrow?.centerOffset !== 0, i = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [u, d] = Go(n), f = { start: "0%", center: "50%", end: "100%" }[d], h = (o.arrow?.x ?? 0) + i / 2, m = (o.arrow?.y ?? 0) + c / 2;
    let g = "", v = "";
    return u === "bottom" ? (g = s ? f : `${h}px`, v = `${-c}px`) : u === "top" ? (g = s ? f : `${h}px`, v = `${r.floating.height + c}px`) : u === "right" ? (g = `${-c}px`, v = s ? f : `${m}px`) : u === "left" && (g = `${r.floating.width + c}px`, v = s ? f : `${m}px`), { data: { x: g, y: v } };
  }
});
function Go(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Uo = Ji, gr = tc, zo = nc, Ko = oc, eo = "rovingFocusGroup.onEntryFocus", km = { bubbles: !1, cancelable: !0 }, Cn = "RovingFocusGroup", [yo, ac, Pm] = rr(Cn), [Mm, qt] = be(
  Cn,
  [Pm]
), [Rm, Nm] = Mm(Cn), sc = l.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(yo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(yo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(Om, { ...e, ref: t }) }) })
);
sc.displayName = Cn;
var Om = l.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: c,
    onEntryFocus: u,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, h = l.useRef(null), m = G(t, h), g = Gt(a), [v, y] = We({
    prop: s,
    defaultProp: i ?? null,
    onChange: c,
    caller: Cn
  }), [x, w] = l.useState(!1), b = ce(u), C = ac(n), S = l.useRef(!1), [E, M] = l.useState(0);
  return l.useEffect(() => {
    const O = h.current;
    if (O)
      return O.addEventListener(eo, b), () => O.removeEventListener(eo, b);
  }, [b]), /* @__PURE__ */ p.jsx(
    Rm,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: v,
      onItemFocus: l.useCallback(
        (O) => y(O),
        [y]
      ),
      onItemShiftTab: l.useCallback(() => w(!0), []),
      onFocusableItemAdd: l.useCallback(
        () => M((O) => O + 1),
        []
      ),
      onFocusableItemRemove: l.useCallback(
        () => M((O) => O - 1),
        []
      ),
      children: /* @__PURE__ */ p.jsx(
        W.div,
        {
          tabIndex: x || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: D(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: D(e.onFocus, (O) => {
            const _ = !S.current;
            if (O.target === O.currentTarget && _ && !x) {
              const A = new CustomEvent(eo, km);
              if (O.currentTarget.dispatchEvent(A), !A.defaultPrevented) {
                const N = C().filter((V) => V.focusable), j = N.find((V) => V.active), F = N.find((V) => V.id === v), Y = [j, F, ...N].filter(
                  Boolean
                ).map((V) => V.ref.current);
                lc(Y, d);
              }
            }
            S.current = !1;
          }),
          onBlur: D(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), ic = "RovingFocusGroupItem", cc = l.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, c = Fe(), u = a || c, d = Nm(ic, n), f = d.currentTabStopId === u, h = ac(n), { onFocusableItemAdd: m, onFocusableItemRemove: g, currentTabStopId: v } = d;
    return l.useEffect(() => {
      if (r)
        return m(), () => g();
    }, [r, m, g]), /* @__PURE__ */ p.jsx(
      yo.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p.jsx(
          W.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": d.orientation,
            ...i,
            ref: t,
            onMouseDown: D(e.onMouseDown, (y) => {
              r ? d.onItemFocus(u) : y.preventDefault();
            }),
            onFocus: D(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: D(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const x = Dm(y, d.orientation, d.dir);
              if (x !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let b = h().filter((C) => C.focusable).map((C) => C.ref.current);
                if (x === "last") b.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && b.reverse();
                  const C = b.indexOf(y.currentTarget);
                  b = d.loop ? Am(b, C + 1) : b.slice(C + 1);
                }
                setTimeout(() => lc(b));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: f, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
cc.displayName = ic;
var _m = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Tm(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Dm(e, t, n) {
  const r = Tm(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return _m[r];
}
function lc(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Am(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var qo = sc, Xo = cc, bo = ["Enter", " "], Im = ["ArrowDown", "PageUp", "Home"], uc = ["ArrowUp", "PageDown", "End"], jm = [...Im, ...uc], Fm = {
  ltr: [...bo, "ArrowRight"],
  rtl: [...bo, "ArrowLeft"]
}, Wm = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Sn = "Menu", [pn, Lm, $m] = rr(Sn), [St, dc] = be(Sn, [
  $m,
  Kt,
  qt
]), yr = Kt(), fc = qt(), [Vm, Et] = St(Sn), [Bm, En] = St(Sn), pc = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = yr(t), [c, u] = l.useState(null), d = l.useRef(!1), f = ce(a), h = Gt(o);
  return l.useEffect(() => {
    const m = () => {
      d.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => d.current = !1;
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), l.useEffect(() => {
    if (!n)
      return;
    const m = () => f(!1);
    return window.addEventListener("blur", m), () => window.removeEventListener("blur", m);
  }, [n, f]), /* @__PURE__ */ p.jsx(Uo, { ...i, children: /* @__PURE__ */ p.jsx(
    Vm,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ p.jsx(
        Bm,
        {
          scope: t,
          onClose: l.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: h,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
pc.displayName = Sn;
var Ym = "MenuAnchor", Zo = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = yr(n);
    return /* @__PURE__ */ p.jsx(gr, { ...o, ...r, ref: t });
  }
);
Zo.displayName = Ym;
var Qo = "MenuPortal", [Hm, hc] = St(Qo, {
  forceMount: void 0
}), mc = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Et(Qo, t);
  return /* @__PURE__ */ p.jsx(Hm, { scope: t, forceMount: n, children: /* @__PURE__ */ p.jsx(me, { present: n || a.open, children: /* @__PURE__ */ p.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
mc.displayName = Qo;
var Oe = "MenuContent", [Gm, Jo] = St(Oe), vc = l.forwardRef(
  (e, t) => {
    const n = hc(Oe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Et(Oe, e.__scopeMenu), s = En(Oe, e.__scopeMenu);
    return /* @__PURE__ */ p.jsx(pn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(me, { present: r || a.open, children: /* @__PURE__ */ p.jsx(pn.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ p.jsx(Um, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(zm, { ...o, ref: t }) }) }) });
  }
), Um = l.forwardRef(
  (e, t) => {
    const n = Et(Oe, e.__scopeMenu), r = l.useRef(null), o = G(t, r);
    return l.useEffect(() => {
      const a = r.current;
      if (a) return cr(a);
    }, []), /* @__PURE__ */ p.jsx(
      ea,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: D(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), zm = l.forwardRef((e, t) => {
  const n = Et(Oe, e.__scopeMenu);
  return /* @__PURE__ */ p.jsx(
    ea,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Km = /* @__PURE__ */ st("MenuContent.ScrollLock"), ea = l.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: i,
      onEntryFocus: c,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: h,
      onDismiss: m,
      disableOutsideScroll: g,
      ...v
    } = e, y = Et(Oe, n), x = En(Oe, n), w = yr(n), b = fc(n), C = Lm(n), [S, E] = l.useState(null), M = l.useRef(null), O = G(t, M, y.onContentChange), _ = l.useRef(0), A = l.useRef(""), N = l.useRef(0), j = l.useRef(null), F = l.useRef("right"), R = l.useRef(0), Y = g ? wn : l.Fragment, V = g ? { as: Km, allowPinchZoom: !0 } : void 0, z = (T) => {
      const K = A.current + T, k = C().filter((I) => !I.disabled), $ = document.activeElement, U = k.find((I) => I.ref.current === $)?.textValue, X = k.map((I) => I.textValue), he = sv(X, K, U), fe = k.find((I) => I.textValue === he)?.ref.current;
      (function I(Q) {
        A.current = Q, window.clearTimeout(_.current), Q !== "" && (_.current = window.setTimeout(() => I(""), 1e3));
      })(K), fe && setTimeout(() => fe.focus());
    };
    l.useEffect(() => () => window.clearTimeout(_.current), []), sr();
    const L = l.useCallback((T) => F.current === j.current?.side && cv(T, j.current?.area), []);
    return /* @__PURE__ */ p.jsx(
      Gm,
      {
        scope: n,
        searchRef: A,
        onItemEnter: l.useCallback(
          (T) => {
            L(T) && T.preventDefault();
          },
          [L]
        ),
        onItemLeave: l.useCallback(
          (T) => {
            L(T) || (M.current?.focus(), E(null));
          },
          [L]
        ),
        onTriggerLeave: l.useCallback(
          (T) => {
            L(T) && T.preventDefault();
          },
          [L]
        ),
        pointerGraceTimerRef: N,
        onPointerGraceIntentChange: l.useCallback((T) => {
          j.current = T;
        }, []),
        children: /* @__PURE__ */ p.jsx(Y, { ...V, children: /* @__PURE__ */ p.jsx(
          bn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: D(a, (T) => {
              T.preventDefault(), M.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ p.jsx(
              Yt,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: m,
                children: /* @__PURE__ */ p.jsx(
                  qo,
                  {
                    asChild: !0,
                    ...b,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: D(c, (T) => {
                      x.isUsingKeyboardRef.current || T.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ p.jsx(
                      zo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Tc(y.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...w,
                        ...v,
                        ref: O,
                        style: { outline: "none", ...v.style },
                        onKeyDown: D(v.onKeyDown, (T) => {
                          const k = T.target.closest("[data-radix-menu-content]") === T.currentTarget, $ = T.ctrlKey || T.altKey || T.metaKey, U = T.key.length === 1;
                          k && (T.key === "Tab" && T.preventDefault(), !$ && U && z(T.key));
                          const X = M.current;
                          if (T.target !== X || !jm.includes(T.key)) return;
                          T.preventDefault();
                          const fe = C().filter((I) => !I.disabled).map((I) => I.ref.current);
                          uc.includes(T.key) && fe.reverse(), ov(fe);
                        }),
                        onBlur: D(e.onBlur, (T) => {
                          T.currentTarget.contains(T.target) || (window.clearTimeout(_.current), A.current = "");
                        }),
                        onPointerMove: D(
                          e.onPointerMove,
                          hn((T) => {
                            const K = T.target, k = R.current !== T.clientX;
                            if (T.currentTarget.contains(K) && k) {
                              const $ = T.clientX > R.current ? "right" : "left";
                              F.current = $, R.current = T.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
vc.displayName = Oe;
var qm = "MenuGroup", ta = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(W.div, { role: "group", ...r, ref: t });
  }
);
ta.displayName = qm;
var Xm = "MenuLabel", gc = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(W.div, { ...r, ref: t });
  }
);
gc.displayName = Xm;
var qn = "MenuItem", hs = "menu.itemSelect", br = l.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = l.useRef(null), s = En(qn, e.__scopeMenu), i = Jo(qn, e.__scopeMenu), c = G(t, a), u = l.useRef(!1), d = () => {
      const f = a.current;
      if (!n && f) {
        const h = new CustomEvent(hs, { bubbles: !0, cancelable: !0 });
        f.addEventListener(hs, (m) => r?.(m), { once: !0 }), No(f, h), h.defaultPrevented ? u.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ p.jsx(
      yc,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: D(e.onClick, d),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), u.current = !0;
        },
        onPointerUp: D(e.onPointerUp, (f) => {
          u.current || f.currentTarget?.click();
        }),
        onKeyDown: D(e.onKeyDown, (f) => {
          const h = i.searchRef.current !== "";
          n || h && f.key === " " || bo.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
br.displayName = qn;
var yc = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Jo(qn, n), i = fc(n), c = l.useRef(null), u = G(t, c), [d, f] = l.useState(!1), [h, m] = l.useState("");
    return l.useEffect(() => {
      const g = c.current;
      g && m((g.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ p.jsx(
      pn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ p.jsx(Xo, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ p.jsx(
          W.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: u,
            onPointerMove: D(
              e.onPointerMove,
              hn((g) => {
                r ? s.onItemLeave(g) : (s.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: D(
              e.onPointerLeave,
              hn((g) => s.onItemLeave(g))
            ),
            onFocus: D(e.onFocus, () => f(!0)),
            onBlur: D(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), Zm = "MenuCheckboxItem", bc = l.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(Ec, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ p.jsx(
      br,
      {
        role: "menuitemcheckbox",
        "aria-checked": Xn(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": ra(n),
        onSelect: D(
          o.onSelect,
          () => r?.(Xn(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
bc.displayName = Zm;
var wc = "MenuRadioGroup", [Qm, Jm] = St(
  wc,
  { value: void 0, onValueChange: () => {
  } }
), xc = l.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = ce(r);
    return /* @__PURE__ */ p.jsx(Qm, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ p.jsx(ta, { ...o, ref: t }) });
  }
);
xc.displayName = wc;
var Cc = "MenuRadioItem", Sc = l.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Jm(Cc, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ p.jsx(Ec, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ p.jsx(
      br,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": ra(a),
        onSelect: D(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Sc.displayName = Cc;
var na = "MenuItemIndicator", [Ec, ev] = St(
  na,
  { checked: !1 }
), kc = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = ev(na, n);
    return /* @__PURE__ */ p.jsx(
      me,
      {
        present: r || Xn(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p.jsx(
          W.span,
          {
            ...o,
            ref: t,
            "data-state": ra(a.checked)
          }
        )
      }
    );
  }
);
kc.displayName = na;
var tv = "MenuSeparator", Pc = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(
      W.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Pc.displayName = tv;
var nv = "MenuArrow", Mc = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = yr(n);
    return /* @__PURE__ */ p.jsx(Ko, { ...o, ...r, ref: t });
  }
);
Mc.displayName = nv;
var rv = "MenuSub", [DC, Rc] = St(rv), on = "MenuSubTrigger", Nc = l.forwardRef(
  (e, t) => {
    const n = Et(on, e.__scopeMenu), r = En(on, e.__scopeMenu), o = Rc(on, e.__scopeMenu), a = Jo(on, e.__scopeMenu), s = l.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, u = { __scopeMenu: e.__scopeMenu }, d = l.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    l.useEffect(() => d, [d]), l.useEffect(() => {
      const h = i.current;
      return () => {
        window.clearTimeout(h), c(null);
      };
    }, [i, c]);
    const f = G(t, o.onTriggerChange);
    return /* @__PURE__ */ p.jsx(Zo, { asChild: !0, ...u, children: /* @__PURE__ */ p.jsx(
      yc,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": n.open ? o.contentId : void 0,
        "data-state": Tc(n.open),
        ...e,
        ref: f,
        onClick: (h) => {
          e.onClick?.(h), !(e.disabled || h.defaultPrevented) && (h.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: D(
          e.onPointerMove,
          hn((h) => {
            a.onItemEnter(h), !h.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: D(
          e.onPointerLeave,
          hn((h) => {
            d();
            const m = n.content?.getBoundingClientRect();
            if (m) {
              const g = n.content?.dataset.side, v = g === "right", y = v ? -5 : 5, x = m[v ? "left" : "right"], w = m[v ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: h.clientX + y, y: h.clientY },
                  { x, y: m.top },
                  { x: w, y: m.top },
                  { x: w, y: m.bottom },
                  { x, y: m.bottom }
                ],
                side: g
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(h), h.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: D(e.onKeyDown, (h) => {
          const m = a.searchRef.current !== "";
          e.disabled || m && h.key === " " || Fm[r.dir].includes(h.key) && (n.onOpenChange(!0), n.content?.focus(), h.preventDefault());
        })
      }
    ) });
  }
);
Nc.displayName = on;
var Oc = "MenuSubContent", _c = l.forwardRef(
  (e, t) => {
    const n = hc(Oe, e.__scopeMenu), { forceMount: r = n.forceMount, align: o = "start", ...a } = e, s = Et(Oe, e.__scopeMenu), i = En(Oe, e.__scopeMenu), c = Rc(Oc, e.__scopeMenu), u = l.useRef(null), d = G(t, u);
    return /* @__PURE__ */ p.jsx(pn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(me, { present: r || s.open, children: /* @__PURE__ */ p.jsx(pn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(
      ea,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        ...a,
        ref: d,
        align: o,
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          i.isUsingKeyboardRef.current && u.current?.focus(), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: D(e.onFocusOutside, (f) => {
          f.target !== c.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: D(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: D(e.onKeyDown, (f) => {
          const h = f.currentTarget.contains(f.target), m = Wm[i.dir].includes(f.key);
          h && m && (s.onOpenChange(!1), c.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
_c.displayName = Oc;
function Tc(e) {
  return e ? "open" : "closed";
}
function Xn(e) {
  return e === "indeterminate";
}
function ra(e) {
  return Xn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ov(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function av(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function sv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = av(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const c = s.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function iv(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], c = t[s], u = i.x, d = i.y, f = c.x, h = c.y;
    d > r != h > r && n < (f - u) * (r - d) / (h - d) + u && (o = !o);
  }
  return o;
}
function cv(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return iv(n, t);
}
function hn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var lv = pc, uv = Zo, dv = mc, fv = vc, pv = ta, hv = gc, mv = br, vv = bc, gv = xc, yv = Sc, bv = kc, wv = Pc, xv = Mc, Cv = Nc, Sv = _c, wr = "DropdownMenu", [Ev] = be(
  wr,
  [dc]
), we = dc(), [kv, Dc] = Ev(wr), Ac = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, c = we(t), u = l.useRef(null), [d, f] = We({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: wr
  });
  return /* @__PURE__ */ p.jsx(
    kv,
    {
      scope: t,
      triggerId: Fe(),
      triggerRef: u,
      contentId: Fe(),
      open: d,
      onOpenChange: f,
      onOpenToggle: l.useCallback(() => f((h) => !h), [f]),
      modal: i,
      children: /* @__PURE__ */ p.jsx(lv, { ...c, open: d, onOpenChange: f, dir: r, modal: i, children: n })
    }
  );
};
Ac.displayName = wr;
var Ic = "DropdownMenuTrigger", jc = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Dc(Ic, n), s = we(n), i = G(t, a.triggerRef);
    return /* @__PURE__ */ p.jsx(uv, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
      W.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: i,
        onPointerDown: D(e.onPointerDown, (c) => {
          !r && c.button === 0 && c.ctrlKey === !1 && (a.onOpenToggle(), a.open || c.preventDefault());
        }),
        onKeyDown: D(e.onKeyDown, (c) => {
          r || (["Enter", " "].includes(c.key) && a.onOpenToggle(), c.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }
);
jc.displayName = Ic;
var Pv = "DropdownMenuPortal", Fc = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = we(t);
  return /* @__PURE__ */ p.jsx(dv, { ...r, ...n });
};
Fc.displayName = Pv;
var Wc = "DropdownMenuContent", Lc = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Dc(Wc, n), a = we(n), s = l.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      fv,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: D(e.onCloseAutoFocus, (i) => {
          s.current || o.triggerRef.current?.focus(), s.current = !1, i.preventDefault();
        }),
        onInteractOutside: D(e.onInteractOutside, (i) => {
          const c = i.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || u;
          (!o.modal || d) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Lc.displayName = Wc;
var Mv = "DropdownMenuGroup", Rv = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
    return /* @__PURE__ */ p.jsx(pv, { ...o, ...r, ref: t });
  }
);
Rv.displayName = Mv;
var Nv = "DropdownMenuLabel", Ov = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
    return /* @__PURE__ */ p.jsx(hv, { ...o, ...r, ref: t });
  }
);
Ov.displayName = Nv;
var _v = "DropdownMenuItem", $c = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
    return /* @__PURE__ */ p.jsx(mv, { ...o, ...r, ref: t });
  }
);
$c.displayName = _v;
var Tv = "DropdownMenuCheckboxItem", Dv = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(vv, { ...o, ...r, ref: t });
});
Dv.displayName = Tv;
var Av = "DropdownMenuRadioGroup", Iv = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(gv, { ...o, ...r, ref: t });
});
Iv.displayName = Av;
var jv = "DropdownMenuRadioItem", Fv = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(yv, { ...o, ...r, ref: t });
});
Fv.displayName = jv;
var Wv = "DropdownMenuItemIndicator", Lv = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(bv, { ...o, ...r, ref: t });
});
Lv.displayName = Wv;
var $v = "DropdownMenuSeparator", Vc = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(wv, { ...o, ...r, ref: t });
});
Vc.displayName = $v;
var Vv = "DropdownMenuArrow", Bv = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
    return /* @__PURE__ */ p.jsx(xv, { ...o, ...r, ref: t });
  }
);
Bv.displayName = Vv;
var Yv = "DropdownMenuSubTrigger", Hv = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(Cv, { ...o, ...r, ref: t });
});
Hv.displayName = Yv;
var Gv = "DropdownMenuSubContent", Uv = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(
    Sv,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Uv.displayName = Gv;
var zv = Ac, Kv = jc, qv = Fc, Xv = Lc, Zv = $c, Qv = Vc, Jv = "Label", Bc = l.forwardRef((e, t) => /* @__PURE__ */ p.jsx(
  W.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Bc.displayName = Jv;
var Yc = Bc;
function wo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var xr = "Popover", [Hc] = be(xr, [
  Kt
]), kn = Kt(), [eg, dt] = Hc(xr), Gc = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = kn(t), c = l.useRef(null), [u, d] = l.useState(!1), [f, h] = We({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: xr
  });
  return /* @__PURE__ */ p.jsx(Uo, { ...i, children: /* @__PURE__ */ p.jsx(
    eg,
    {
      scope: t,
      contentId: Fe(),
      triggerRef: c,
      open: f,
      onOpenChange: h,
      onOpenToggle: l.useCallback(() => h((m) => !m), [h]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: l.useCallback(() => d(!0), []),
      onCustomAnchorRemove: l.useCallback(() => d(!1), []),
      modal: s,
      children: n
    }
  ) });
};
Gc.displayName = xr;
var Uc = "PopoverAnchor", tg = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = dt(Uc, n), a = kn(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return l.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ p.jsx(gr, { ...a, ...r, ref: t });
  }
);
tg.displayName = Uc;
var zc = "PopoverTrigger", Kc = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = dt(zc, n), a = kn(n), s = G(t, o.triggerRef), i = /* @__PURE__ */ p.jsx(
      W.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": Jc(o.open),
        ...r,
        ref: s,
        onClick: D(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ p.jsx(gr, { asChild: !0, ...a, children: i });
  }
);
Kc.displayName = zc;
var oa = "PopoverPortal", [ng, rg] = Hc(oa, {
  forceMount: void 0
}), qc = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = dt(oa, t);
  return /* @__PURE__ */ p.jsx(ng, { scope: t, forceMount: n, children: /* @__PURE__ */ p.jsx(me, { present: n || a.open, children: /* @__PURE__ */ p.jsx(Ht, { asChild: !0, container: o, children: r }) }) });
};
qc.displayName = oa;
var Wt = "PopoverContent", Xc = l.forwardRef(
  (e, t) => {
    const n = rg(Wt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = dt(Wt, e.__scopePopover);
    return /* @__PURE__ */ p.jsx(me, { present: r || a.open, children: a.modal ? /* @__PURE__ */ p.jsx(ag, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(sg, { ...o, ref: t }) });
  }
);
Xc.displayName = Wt;
var og = /* @__PURE__ */ st("PopoverContent.RemoveScroll"), ag = l.forwardRef(
  (e, t) => {
    const n = dt(Wt, e.__scopePopover), r = l.useRef(null), o = G(t, r), a = l.useRef(!1);
    return l.useEffect(() => {
      const s = r.current;
      if (s) return cr(s);
    }, []), /* @__PURE__ */ p.jsx(wn, { as: og, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
      Zc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: D(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), a.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: D(
          e.onPointerDownOutside,
          (s) => {
            const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, u = i.button === 2 || c;
            a.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: D(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), sg = l.forwardRef(
  (e, t) => {
    const n = dt(Wt, e.__scopePopover), r = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      Zc,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || n.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          n.triggerRef.current?.contains(s) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Zc = l.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      onFocusOutside: u,
      onInteractOutside: d,
      ...f
    } = e, h = dt(Wt, n), m = kn(n);
    return sr(), /* @__PURE__ */ p.jsx(
      bn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ p.jsx(
          Yt,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: d,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: u,
            onDismiss: () => h.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: /* @__PURE__ */ p.jsx(
              zo,
              {
                "data-state": Jc(h.open),
                role: "dialog",
                id: h.contentId,
                ...m,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Qc = "PopoverClose", ig = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = dt(Qc, n);
    return /* @__PURE__ */ p.jsx(
      W.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: D(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ig.displayName = Qc;
var cg = "PopoverArrow", lg = l.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = kn(n);
    return /* @__PURE__ */ p.jsx(Ko, { ...o, ...r, ref: t });
  }
);
lg.displayName = cg;
function Jc(e) {
  return e ? "open" : "closed";
}
var ug = Gc, dg = Kc, fg = qc, pg = Xc, aa = "Radio", [hg, el] = be(aa), [mg, Cr] = hg(aa);
function tl(e) {
  const {
    __scopeRadio: t,
    checked: n = !1,
    children: r,
    disabled: o,
    form: a,
    name: s,
    onCheck: i,
    required: c,
    value: u = "on",
    // @ts-expect-error
    internal_do_not_use_render: d
  } = e, [f, h] = l.useState(null), [m, g] = l.useState(null), v = l.useRef(!1), y = f ? !!a || !!f.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), x = {
    checked: n,
    disabled: o,
    required: c,
    name: s,
    form: a,
    value: u,
    control: f,
    setControl: h,
    hasConsumerStoppedPropagationRef: v,
    isFormControl: y,
    bubbleInput: m,
    setBubbleInput: g,
    onCheck: () => i?.()
  };
  return /* @__PURE__ */ p.jsx(mg, { scope: t, ...x, children: gg(d) ? d(x) : r });
}
var nl = "RadioTrigger", sa = l.forwardRef(
  ({ __scopeRadio: e, onClick: t, ...n }, r) => {
    const {
      checked: o,
      disabled: a,
      value: s,
      setControl: i,
      onCheck: c,
      hasConsumerStoppedPropagationRef: u,
      isFormControl: d,
      bubbleInput: f
    } = Cr(nl, e), h = G(r, i);
    return /* @__PURE__ */ p.jsx(
      W.button,
      {
        type: "button",
        role: "radio",
        "aria-checked": o,
        "data-state": sl(o),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: s,
        ...n,
        ref: h,
        onClick: D(t, (m) => {
          o || c(), f && d && (u.current = m.isPropagationStopped(), u.current || m.stopPropagation());
        })
      }
    );
  }
);
sa.displayName = nl;
var vg = l.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, name: r, checked: o, required: a, disabled: s, value: i, onCheck: c, form: u, ...d } = e;
    return /* @__PURE__ */ p.jsx(
      tl,
      {
        __scopeRadio: n,
        checked: o,
        disabled: s,
        required: a,
        onCheck: c,
        name: r,
        form: u,
        value: i,
        internal_do_not_use_render: ({ isFormControl: f }) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx(
            sa,
            {
              ...d,
              ref: t,
              __scopeRadio: n
            }
          ),
          f && /* @__PURE__ */ p.jsx(
            ia,
            {
              __scopeRadio: n
            }
          )
        ] })
      }
    );
  }
);
vg.displayName = aa;
var rl = "RadioIndicator", ol = l.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = Cr(rl, n);
    return /* @__PURE__ */ p.jsx(me, { present: r || a.checked, children: /* @__PURE__ */ p.jsx(
      W.span,
      {
        "data-state": sl(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
ol.displayName = rl;
var al = "RadioBubbleInput", ia = l.forwardRef(
  ({ __scopeRadio: e, ...t }, n) => {
    const {
      control: r,
      checked: o,
      required: a,
      disabled: s,
      name: i,
      value: c,
      form: u,
      bubbleInput: d,
      setBubbleInput: f,
      hasConsumerStoppedPropagationRef: h
    } = Cr(al, e), m = G(n, f), g = ur(o), v = dr(r);
    l.useEffect(() => {
      const x = d;
      if (!x) return;
      const w = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, S = !h.current;
      if (g !== o && C) {
        const E = new Event("click", { bubbles: S });
        C.call(x, o), x.dispatchEvent(E);
      }
    }, [d, g, o, h]);
    const y = l.useRef(o);
    return /* @__PURE__ */ p.jsx(
      W.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: y.current,
        required: a,
        disabled: s,
        name: i,
        value: c,
        form: u,
        ...t,
        tabIndex: -1,
        ref: m,
        style: {
          ...t.style,
          ...v,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
ia.displayName = al;
function gg(e) {
  return typeof e == "function";
}
function sl(e) {
  return e ? "checked" : "unchecked";
}
var yg = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Sr = "RadioGroup", [bg] = be(Sr, [
  qt,
  el
]), il = qt(), Er = el(), [wg, xg] = bg(Sr), ca = l.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: s = !1,
      disabled: i = !1,
      orientation: c,
      dir: u,
      loop: d = !0,
      onValueChange: f,
      ...h
    } = e, m = il(n), g = Gt(u), [v, y] = We({
      prop: a,
      defaultProp: o ?? null,
      onChange: f,
      caller: Sr
    });
    return /* @__PURE__ */ p.jsx(
      wg,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: v,
        onValueChange: y,
        children: /* @__PURE__ */ p.jsx(
          qo,
          {
            asChild: !0,
            ...m,
            orientation: c,
            dir: g,
            loop: d,
            children: /* @__PURE__ */ p.jsx(
              W.div,
              {
                role: "radiogroup",
                "aria-required": s,
                "aria-orientation": c,
                "data-disabled": i ? "" : void 0,
                dir: g,
                ...h,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
ca.displayName = Sr;
var Cg = "RadioGroupItem", Sg = "RadioGroupItemProvider", cl = "RadioGroupItemTrigger", Eg = "RadioGroupItemBubbleInput";
function kg(e) {
  const {
    __scopeRadioGroup: t,
    value: n,
    disabled: r,
    children: o,
    // @ts-expect-error
    internal_do_not_use_render: a
  } = e, s = xg(Sg, t), i = Er(t), c = s.disabled || r;
  return /* @__PURE__ */ p.jsx(
    tl,
    {
      ...i,
      checked: s.value === n,
      disabled: c,
      required: s.required,
      name: s.name,
      value: n,
      onCheck: () => s.onValueChange(n),
      internal_do_not_use_render: a,
      children: o
    }
  );
}
var ll = l.forwardRef((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = il(n), a = Er(n), { checked: s, disabled: i } = Cr(cl, a.__scopeRadio), c = l.useRef(null), u = G(t, c), d = l.useRef(!1);
  return l.useEffect(() => {
    const f = (m) => {
      yg.includes(m.key) && (d.current = !0);
    }, h = () => d.current = !1;
    return document.addEventListener("keydown", f), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", f), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ p.jsx(
    Xo,
    {
      asChild: !0,
      ...o,
      focusable: !i,
      active: s,
      children: /* @__PURE__ */ p.jsx(
        sa,
        {
          ...a,
          ...r,
          ref: u,
          onKeyDown: D(r.onKeyDown, (f) => {
            f.key === "Enter" && f.preventDefault();
          }),
          onFocus: D(r.onFocus, () => {
            d.current && c.current?.click();
          })
        }
      )
    }
  );
});
ll.displayName = cl;
var ul = l.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, value: r, disabled: o, ...a } = e;
    return /* @__PURE__ */ p.jsx(
      kg,
      {
        __scopeRadioGroup: n,
        value: r,
        disabled: o,
        internal_do_not_use_render: ({ isFormControl: s }) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx(
            ll,
            {
              ...a,
              ref: t,
              __scopeRadioGroup: n
            }
          ),
          s && /* @__PURE__ */ p.jsx(
            dl,
            {
              __scopeRadioGroup: n
            }
          )
        ] })
      }
    );
  }
);
ul.displayName = Cg;
var dl = l.forwardRef((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Er(n);
  return /* @__PURE__ */ p.jsx(ia, { ...o, ...r, ref: t });
});
dl.displayName = Eg;
var Pg = "RadioGroupIndicator", fl = l.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Er(n);
    return /* @__PURE__ */ p.jsx(ol, { ...o, ...r, ref: t });
  }
);
fl.displayName = Pg;
function Mg(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var la = "ScrollArea", [pl] = be(la), [Rg, Te] = pl(la), hl = l.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...s
    } = e, [i, c] = l.useState(null), [u, d] = l.useState(null), [f, h] = l.useState(null), [m, g] = l.useState(null), [v, y] = l.useState(null), [x, w] = l.useState(0), [b, C] = l.useState(0), [S, E] = l.useState(!1), [M, O] = l.useState(!1), _ = G(t, c), A = Gt(o);
    return /* @__PURE__ */ p.jsx(
      Rg,
      {
        scope: n,
        type: r,
        dir: A,
        scrollHideDelay: a,
        scrollArea: i,
        viewport: u,
        onViewportChange: d,
        content: f,
        onContentChange: h,
        scrollbarX: m,
        onScrollbarXChange: g,
        scrollbarXEnabled: S,
        onScrollbarXEnabledChange: E,
        scrollbarY: v,
        onScrollbarYChange: y,
        scrollbarYEnabled: M,
        onScrollbarYEnabledChange: O,
        onCornerWidthChange: w,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ p.jsx(
          W.div,
          {
            dir: A,
            ...s,
            ref: _,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": x + "px",
              "--radix-scroll-area-corner-height": b + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
hl.displayName = la;
var ml = "ScrollAreaViewport", vl = l.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, s = Te(ml, n), i = l.useRef(null), c = G(t, i, s.onViewportChange);
    return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(Ng, { nonce: o }),
      /* @__PURE__ */ p.jsx(
        W.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: c,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ p.jsx("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
vl.displayName = ml;
var Ng = l.memo(
  ({ nonce: e }) => /* @__PURE__ */ p.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
      },
      nonce: e
    }
  ),
  (e, t) => e.nonce === t.nonce
), Ke = "ScrollAreaScrollbar", gl = l.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Te(Ke, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
    return l.useEffect(() => (i ? a(!0) : s(!0), () => {
      i ? a(!1) : s(!1);
    }), [i, a, s]), o.type === "hover" ? /* @__PURE__ */ p.jsx(Og, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ p.jsx(_g, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ p.jsx(yl, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ p.jsx(ua, { ...r, ref: t, "data-state": "visible" }) : null;
  }
);
gl.displayName = Ke;
var Og = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Te(Ke, e.__scopeScrollArea), [a, s] = l.useState(!1);
  return l.useEffect(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const u = () => {
        window.clearTimeout(c), s(!0);
      }, d = () => {
        c = window.setTimeout(() => s(!1), o.scrollHideDelay);
      };
      return i.addEventListener("pointerenter", u), i.addEventListener("pointerleave", d), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", u), i.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ p.jsx(me, { present: n || a, children: /* @__PURE__ */ p.jsx(
    yl,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), _g = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Te(Ke, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Pr(() => c("SCROLL_END"), 100), [i, c] = Mg("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return l.useEffect(() => {
    if (i === "idle") {
      const u = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [i, o.scrollHideDelay, c]), l.useEffect(() => {
    const u = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (u) {
      let f = u[d];
      const h = () => {
        const m = u[d];
        f !== m && (c("SCROLL"), s()), f = m;
      };
      return u.addEventListener("scroll", h), () => u.removeEventListener("scroll", h);
    }
  }, [o.viewport, a, c, s]), /* @__PURE__ */ p.jsx(me, { present: n || i !== "hidden", children: /* @__PURE__ */ p.jsx(
    ua,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: D(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: D(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), yl = l.forwardRef((e, t) => {
  const n = Te(Ke, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = l.useState(!1), i = e.orientation === "horizontal", c = Pr(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? u : d);
    }
  }, 10);
  return Lt(n.viewport, c), Lt(n.content, c), /* @__PURE__ */ p.jsx(me, { present: r || a, children: /* @__PURE__ */ p.jsx(
    ua,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), ua = l.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Te(Ke, e.__scopeScrollArea), a = l.useRef(null), s = l.useRef(0), [i, c] = l.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = Cl(i.viewport, i.content), d = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (h) => a.current = h,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (h) => s.current = h
  };
  function f(h, m) {
    return Wg(h, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ p.jsx(
    Tg,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const h = o.viewport.scrollLeft, m = ms(h, i, o.dir);
          a.current.style.transform = `translate3d(${m}px, 0, 0)`;
        }
      },
      onWheelScroll: (h) => {
        o.viewport && (o.viewport.scrollLeft = h);
      },
      onDragScroll: (h) => {
        o.viewport && (o.viewport.scrollLeft = f(h, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ p.jsx(
    Dg,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const h = o.viewport.scrollTop, m = ms(h, i);
          a.current.style.transform = `translate3d(0, ${m}px, 0)`;
        }
      },
      onWheelScroll: (h) => {
        o.viewport && (o.viewport.scrollTop = h);
      },
      onDragScroll: (h) => {
        o.viewport && (o.viewport.scrollTop = f(h));
      }
    }
  ) : null;
}), Tg = l.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Te(Ke, e.__scopeScrollArea), [s, i] = l.useState(), c = l.useRef(null), u = G(t, c, a.onScrollbarXChange);
  return l.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ p.jsx(
    wl,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": kr(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, f) => {
        if (a.viewport) {
          const h = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(h), El(h, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && s && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Qn(s.paddingLeft),
            paddingEnd: Qn(s.paddingRight)
          }
        });
      }
    }
  );
}), Dg = l.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Te(Ke, e.__scopeScrollArea), [s, i] = l.useState(), c = l.useRef(null), u = G(t, c, a.onScrollbarYChange);
  return l.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ p.jsx(
    wl,
    {
      "data-orientation": "vertical",
      ...o,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": kr(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, f) => {
        if (a.viewport) {
          const h = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(h), El(h, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && s && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Qn(s.paddingTop),
            paddingEnd: Qn(s.paddingBottom)
          }
        });
      }
    }
  );
}), [Ag, bl] = pl(Ke), wl = l.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: s,
    onThumbPointerDown: i,
    onThumbPositionChange: c,
    onDragScroll: u,
    onWheelScroll: d,
    onResize: f,
    ...h
  } = e, m = Te(Ke, n), [g, v] = l.useState(null), y = G(t, v), x = l.useRef(null), w = l.useRef(""), b = m.viewport, C = r.content - r.viewport, S = ce(d), E = ce(c), M = Pr(f, 10);
  function O(_) {
    if (x.current) {
      const A = _.clientX - x.current.left, N = _.clientY - x.current.top;
      u({ x: A, y: N });
    }
  }
  return l.useEffect(() => {
    const _ = (A) => {
      const N = A.target;
      g?.contains(N) && S(A, C);
    };
    return document.addEventListener("wheel", _, { passive: !1 }), () => document.removeEventListener("wheel", _, { passive: !1 });
  }, [b, g, C, S]), l.useEffect(E, [r, E]), Lt(g, M), Lt(m.content, M), /* @__PURE__ */ p.jsx(
    Ag,
    {
      scope: n,
      scrollbar: g,
      hasThumb: o,
      onThumbChange: ce(a),
      onThumbPointerUp: ce(s),
      onThumbPositionChange: E,
      onThumbPointerDown: ce(i),
      children: /* @__PURE__ */ p.jsx(
        W.div,
        {
          ...h,
          ref: y,
          style: { position: "absolute", ...h.style },
          onPointerDown: D(e.onPointerDown, (_) => {
            _.button === 0 && (_.target.setPointerCapture(_.pointerId), x.current = g.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), O(_));
          }),
          onPointerMove: D(e.onPointerMove, O),
          onPointerUp: D(e.onPointerUp, (_) => {
            const A = _.target;
            A.hasPointerCapture(_.pointerId) && A.releasePointerCapture(_.pointerId), document.body.style.webkitUserSelect = w.current, m.viewport && (m.viewport.style.scrollBehavior = ""), x.current = null;
          })
        }
      )
    }
  );
}), Zn = "ScrollAreaThumb", xl = l.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = bl(Zn, e.__scopeScrollArea);
    return /* @__PURE__ */ p.jsx(me, { present: n || o.hasThumb, children: /* @__PURE__ */ p.jsx(Ig, { ref: t, ...r }) });
  }
), Ig = l.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = Te(Zn, n), s = bl(Zn, n), { onThumbPositionChange: i } = s, c = G(t, s.onThumbChange), u = l.useRef(void 0), d = Pr(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return l.useEffect(() => {
      const f = a.viewport;
      if (f) {
        const h = () => {
          if (d(), !u.current) {
            const m = Lg(f, i);
            u.current = m, i();
          }
        };
        return i(), f.addEventListener("scroll", h), () => f.removeEventListener("scroll", h);
      }
    }, [a.viewport, d, i]), /* @__PURE__ */ p.jsx(
      W.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: D(e.onPointerDownCapture, (f) => {
          const m = f.target.getBoundingClientRect(), g = f.clientX - m.left, v = f.clientY - m.top;
          s.onThumbPointerDown({ x: g, y: v });
        }),
        onPointerUp: D(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
xl.displayName = Zn;
var da = "ScrollAreaCorner", jg = l.forwardRef(
  (e, t) => {
    const n = Te(da, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ p.jsx(Fg, { ...e, ref: t }) : null;
  }
);
jg.displayName = da;
var Fg = l.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Te(da, n), [a, s] = l.useState(0), [i, c] = l.useState(0), u = !!(a && i);
  return Lt(o.scrollbarX, () => {
    const d = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(d), c(d);
  }), Lt(o.scrollbarY, () => {
    const d = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(d), s(d);
  }), u ? /* @__PURE__ */ p.jsx(
    W.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
        height: i,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Qn(e) {
  return e ? parseInt(e, 10) : 0;
}
function Cl(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function kr(e) {
  const t = Cl(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Wg(e, t, n, r = "ltr") {
  const o = kr(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, u = n.scrollbar.size - n.scrollbar.paddingEnd - i, d = n.content - n.viewport, f = r === "ltr" ? [0, d] : [d * -1, 0];
  return Sl([c, u], f)(e);
}
function ms(e, t, n = "ltr") {
  const r = kr(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [0, s] : [s * -1, 0], u = wo(e, c);
  return Sl([0, s], [0, i])(u);
}
function Sl(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function El(e, t) {
  return e > 0 && e < t;
}
var Lg = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== a.left, i = n.top !== a.top;
    (s || i) && t(), n = a, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function Pr(e, t) {
  const n = ce(e), r = l.useRef(0);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), l.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Lt(e, t) {
  const n = ce(t);
  ue(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var $g = hl, Vg = vl, Bg = gl, Yg = xl, Hg = [" ", "Enter", "ArrowUp", "ArrowDown"], Gg = [" ", "Enter"], Ct = "Select", [Mr, Rr, Ug] = rr(Ct), [kt] = be(Ct, [
  Ug,
  Kt
]), Nr = Kt(), [zg, ft] = kt(Ct), [Kg, qg] = kt(Ct), Xg = "SelectProvider";
function kl(e) {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: s,
    defaultValue: i,
    onValueChange: c,
    dir: u,
    name: d,
    autoComplete: f,
    disabled: h,
    required: m,
    form: g,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: v
  } = e, y = Nr(t), [x, w] = l.useState(null), [b, C] = l.useState(null), [S, E] = l.useState(!1), M = Gt(u), [O, _] = We({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ct
  }), [A, N] = We({
    prop: s,
    defaultProp: i,
    onChange: c,
    caller: Ct
  }), j = l.useRef(null), F = x ? !!g || !!x.closest("form") : !0, [R, Y] = l.useState(/* @__PURE__ */ new Set()), V = Fe(), z = Array.from(R).map((k) => k.props.value).join(";"), L = l.useCallback((k) => {
    Y(($) => new Set($).add(k));
  }, []), T = l.useCallback((k) => {
    Y(($) => {
      const U = new Set($);
      return U.delete(k), U;
    });
  }, []), K = {
    required: m,
    trigger: x,
    onTriggerChange: w,
    valueNode: b,
    onValueNodeChange: C,
    valueNodeHasChildren: S,
    onValueNodeHasChildrenChange: E,
    contentId: V,
    value: A,
    onValueChange: N,
    open: O,
    onOpenChange: _,
    dir: M,
    triggerPointerDownPosRef: j,
    disabled: h,
    name: d,
    autoComplete: f,
    form: g,
    nativeOptions: R,
    nativeSelectKey: z,
    isFormControl: F
  };
  return /* @__PURE__ */ p.jsx(Uo, { ...y, children: /* @__PURE__ */ p.jsx(zg, { scope: t, ...K, children: /* @__PURE__ */ p.jsx(Mr.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
    Kg,
    {
      scope: t,
      onNativeOptionAdd: L,
      onNativeOptionRemove: T,
      children: fy(v) ? v(K) : n
    }
  ) }) }) });
}
kl.displayName = Xg;
var Pl = (e) => {
  const { __scopeSelect: t, children: n, ...r } = e;
  return /* @__PURE__ */ p.jsx(
    kl,
    {
      __scopeSelect: t,
      ...r,
      internal_do_not_use_render: ({ isFormControl: o }) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        n,
        o ? /* @__PURE__ */ p.jsx(
          Ql,
          {
            __scopeSelect: t
          }
        ) : null
      ] })
    }
  );
};
Pl.displayName = Ct;
var Ml = "SelectTrigger", Rl = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Nr(n), s = ft(Ml, n), i = s.disabled || r, c = G(t, s.onTriggerChange), u = Rr(n), d = l.useRef("touch"), [f, h, m] = Jl((v) => {
      const y = u().filter((b) => !b.disabled), x = y.find((b) => b.value === s.value), w = eu(y, v, x);
      w !== void 0 && s.onValueChange(w.value);
    }), g = (v) => {
      i || (s.onOpenChange(!0), m()), v && (s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(gr, { asChild: !0, ...a, children: /* @__PURE__ */ p.jsx(
      W.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.open ? s.contentId : void 0,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Or(s.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: D(o.onClick, (v) => {
          v.currentTarget.focus(), d.current !== "mouse" && g(v);
        }),
        onPointerDown: D(o.onPointerDown, (v) => {
          d.current = v.pointerType;
          const y = v.target;
          y.hasPointerCapture(v.pointerId) && y.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (g(v), v.preventDefault());
        }),
        onKeyDown: D(o.onKeyDown, (v) => {
          const y = f.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && h(v.key), !(y && v.key === " ") && Hg.includes(v.key) && (g(), v.preventDefault());
        })
      }
    ) });
  }
);
Rl.displayName = Ml;
var Nl = "SelectValue", Ol = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = ft(Nl, n), { onValueNodeHasChildrenChange: u } = c, d = a !== void 0, f = G(t, c.onValueNodeChange);
    ue(() => {
      u(d);
    }, [u, d]);
    const h = Or(c.value);
    return /* @__PURE__ */ p.jsx(
      W.span,
      {
        ...i,
        asChild: h ? !1 : i.asChild,
        ref: f,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ p.jsx(l.Fragment, { children: h ? s : a }, h ? "placeholder" : "value")
      }
    );
  }
);
Ol.displayName = Nl;
var Zg = "SelectIcon", _l = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(W.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
_l.displayName = Zg;
var Tl = "SelectPortal", [Qg, Jg] = kt(Tl, {
  forceMount: void 0
}), Dl = (e) => {
  const { __scopeSelect: t, forceMount: n, ...r } = e;
  return /* @__PURE__ */ p.jsx(Qg, { scope: e.__scopeSelect, forceMount: n, children: /* @__PURE__ */ p.jsx(Ht, { asChild: !0, ...r }) });
};
Dl.displayName = Tl;
var lt = "SelectContent", Al = l.forwardRef(
  (e, t) => {
    const n = Jg(lt, e.__scopeSelect), { forceMount: r = n.forceMount, ...o } = e, a = ft(lt, e.__scopeSelect), [s, i] = l.useState();
    return ue(() => {
      i(new DocumentFragment());
    }, []), /* @__PURE__ */ p.jsx(me, { present: r || a.open, children: ({ present: c }) => c ? /* @__PURE__ */ p.jsx(Fl, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(Il, { ...o, fragment: s }) });
  }
);
Al.displayName = lt;
var Il = l.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, fragment: o } = e;
  return o ? Bt.createPortal(
    /* @__PURE__ */ p.jsx(jl, { scope: n, children: /* @__PURE__ */ p.jsx(Mr.Slot, { scope: n, children: /* @__PURE__ */ p.jsx("div", { ref: t, children: r }) }) }),
    o
  ) : null;
});
Il.displayName = "SelectContentFragment";
var Ie = 10, [jl, pt] = kt(lt), ey = "SelectContentImpl", ty = /* @__PURE__ */ st("SelectContent.RemoveScroll"), Fl = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n } = e, {
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: i,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: m,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: y,
      //
      ...x
    } = e, w = ft(lt, n), [b, C] = l.useState(null), [S, E] = l.useState(null), M = G(t, C), [O, _] = l.useState(null), [A, N] = l.useState(
      null
    ), j = Rr(n), [F, R] = l.useState(!1), Y = l.useRef(!1);
    l.useEffect(() => {
      if (b) return cr(b);
    }, [b]), sr();
    const V = l.useCallback(
      (I) => {
        const [Q, ...se] = j().map((le) => le.ref.current), [ee] = se.slice(-1), ae = document.activeElement;
        for (const le of I)
          if (le === ae || (le?.scrollIntoView({ block: "nearest" }), le === Q && S && (S.scrollTop = 0), le === ee && S && (S.scrollTop = S.scrollHeight), le?.focus(), document.activeElement !== ae)) return;
      },
      [j, S]
    ), z = l.useCallback(
      () => V([O, b]),
      [V, O, b]
    );
    l.useEffect(() => {
      F && z();
    }, [F, z]);
    const { onOpenChange: L, triggerPointerDownPosRef: T } = w;
    l.useEffect(() => {
      if (b) {
        let I = { x: 0, y: 0 };
        const Q = (ee) => {
          I = {
            x: Math.abs(Math.round(ee.pageX) - (T.current?.x ?? 0)),
            y: Math.abs(Math.round(ee.pageY) - (T.current?.y ?? 0))
          };
        }, se = (ee) => {
          I.x <= 10 && I.y <= 10 ? ee.preventDefault() : ee.composedPath().includes(b) || L(!1), document.removeEventListener("pointermove", Q), T.current = null;
        };
        return T.current !== null && (document.addEventListener("pointermove", Q), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Q), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [b, L, T]), l.useEffect(() => {
      const I = () => L(!1);
      return window.addEventListener("blur", I), window.addEventListener("resize", I), () => {
        window.removeEventListener("blur", I), window.removeEventListener("resize", I);
      };
    }, [L]);
    const [K, k] = Jl((I) => {
      const Q = j().filter((ae) => !ae.disabled), se = Q.find((ae) => ae.ref.current === document.activeElement), ee = eu(Q, I, se);
      ee && setTimeout(() => ee.ref.current?.focus());
    }), $ = l.useCallback(
      (I, Q, se) => {
        const ee = !Y.current && !se;
        (w.value !== void 0 && w.value === Q || ee) && (_(I), ee && (Y.current = !0));
      },
      [w.value]
    ), U = l.useCallback(() => b?.focus(), [b]), X = l.useCallback(
      (I, Q, se) => {
        const ee = !Y.current && !se;
        (w.value !== void 0 && w.value === Q || ee) && N(I);
      },
      [w.value]
    ), he = r === "popper" ? xo : Wl, fe = he === xo ? {
      side: i,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: m,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ p.jsx(
      jl,
      {
        scope: n,
        content: b,
        viewport: S,
        onViewportChange: E,
        itemRefCallback: $,
        selectedItem: O,
        onItemLeave: U,
        itemTextRefCallback: X,
        focusSelectedItem: z,
        selectedItemText: A,
        position: r,
        isPositioned: F,
        searchRef: K,
        children: /* @__PURE__ */ p.jsx(wn, { as: ty, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          bn,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (I) => {
              I.preventDefault();
            },
            onUnmountAutoFocus: D(o, (I) => {
              w.trigger?.focus({ preventScroll: !0 }), I.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              Yt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (I) => I.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  he,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (I) => I.preventDefault(),
                    ...x,
                    ...fe,
                    onPlaced: () => R(!0),
                    ref: M,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: D(x.onKeyDown, (I) => {
                      const Q = I.ctrlKey || I.altKey || I.metaKey;
                      if (I.key === "Tab" && I.preventDefault(), !Q && I.key.length === 1 && k(I.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key)) {
                        let ee = j().filter((ae) => !ae.disabled).map((ae) => ae.ref.current);
                        if (["ArrowUp", "End"].includes(I.key) && (ee = ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(I.key)) {
                          const ae = I.target, le = ee.indexOf(ae);
                          ee = ee.slice(le + 1);
                        }
                        setTimeout(() => V(ee)), I.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Fl.displayName = ey;
var ny = "SelectItemAlignedPosition", Wl = l.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = ft(lt, n), s = pt(lt, n), [i, c] = l.useState(null), [u, d] = l.useState(null), f = G(t, d), h = Rr(n), m = l.useRef(!1), g = l.useRef(!0), { viewport: v, selectedItem: y, selectedItemText: x, focusSelectedItem: w } = s, b = l.useCallback(() => {
    if (a.trigger && a.valueNode && i && u && v && y && x) {
      const M = a.trigger.getBoundingClientRect(), O = u.getBoundingClientRect(), _ = a.valueNode.getBoundingClientRect(), A = x.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ae = A.left - O.left, le = _.left - ae, De = M.left - le, xe = M.width + De, Pt = Math.max(xe, O.width), Zt = window.innerWidth - Ie, Qt = wo(le, [
          Ie,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ie, Zt - Pt)
        ]);
        i.style.minWidth = xe + "px", i.style.left = Qt + "px";
      } else {
        const ae = O.right - A.right, le = window.innerWidth - _.right - ae, De = window.innerWidth - M.right - le, xe = M.width + De, Pt = Math.max(xe, O.width), Zt = window.innerWidth - Ie, Qt = wo(le, [
          Ie,
          Math.max(Ie, Zt - Pt)
        ]);
        i.style.minWidth = xe + "px", i.style.right = Qt + "px";
      }
      const N = h(), j = window.innerHeight - Ie * 2, F = v.scrollHeight, R = window.getComputedStyle(u), Y = parseInt(R.borderTopWidth, 10), V = parseInt(R.paddingTop, 10), z = parseInt(R.borderBottomWidth, 10), L = parseInt(R.paddingBottom, 10), T = Y + V + F + L + z, K = Math.min(y.offsetHeight * 5, T), k = window.getComputedStyle(v), $ = parseInt(k.paddingTop, 10), U = parseInt(k.paddingBottom, 10), X = M.top + M.height / 2 - Ie, he = j - X, fe = y.offsetHeight / 2, I = y.offsetTop + fe, Q = Y + V + I, se = T - Q;
      if (Q <= X) {
        const ae = N.length > 0 && y === N[N.length - 1].ref.current;
        i.style.bottom = "0px";
        const le = u.clientHeight - v.offsetTop - v.offsetHeight, De = Math.max(
          he,
          fe + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ae ? U : 0) + le + z
        ), xe = Q + De;
        i.style.height = xe + "px";
      } else {
        const ae = N.length > 0 && y === N[0].ref.current;
        i.style.top = "0px";
        const De = Math.max(
          X,
          Y + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ae ? $ : 0) + fe
        ) + se;
        i.style.height = De + "px", v.scrollTop = Q - X + v.offsetTop;
      }
      i.style.margin = `${Ie}px 0`, i.style.minHeight = K + "px", i.style.maxHeight = j + "px", r?.(), requestAnimationFrame(() => m.current = !0);
    }
  }, [
    h,
    a.trigger,
    a.valueNode,
    i,
    u,
    v,
    y,
    x,
    a.dir,
    r
  ]);
  ue(() => b(), [b]);
  const [C, S] = l.useState();
  ue(() => {
    u && S(window.getComputedStyle(u).zIndex);
  }, [u]);
  const E = l.useCallback(
    (M) => {
      M && g.current === !0 && (b(), w?.(), g.current = !1);
    },
    [b, w]
  );
  return /* @__PURE__ */ p.jsx(
    oy,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: E,
      children: /* @__PURE__ */ p.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ p.jsx(
            W.div,
            {
              ...o,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
Wl.displayName = ny;
var ry = "SelectPopperPosition", xo = l.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Ie,
    ...a
  } = e, s = Nr(n);
  return /* @__PURE__ */ p.jsx(
    zo,
    {
      ...s,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
xo.displayName = ry;
var [oy, fa] = kt(lt, {}), Co = "SelectViewport", Ll = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = pt(Co, n), s = fa(Co, n), i = G(t, a.onViewportChange), c = l.useRef(0);
    return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ p.jsx(Mr.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
        W.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: D(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: h } = s;
            if (h?.current && f) {
              const m = Math.abs(c.current - d.scrollTop);
              if (m > 0) {
                const g = window.innerHeight - Ie * 2, v = parseFloat(f.style.minHeight), y = parseFloat(f.style.height), x = Math.max(v, y);
                if (x < g) {
                  const w = x + m, b = Math.min(g, w), C = w - b;
                  f.style.height = b + "px", f.style.bottom === "0px" && (d.scrollTop = C > 0 ? C : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Ll.displayName = Co;
var $l = "SelectGroup", [ay, sy] = kt($l), Vl = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Fe();
    return /* @__PURE__ */ p.jsx(ay, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(W.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Vl.displayName = $l;
var Bl = "SelectLabel", Yl = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = sy(Bl, n);
    return /* @__PURE__ */ p.jsx(W.div, { id: o.id, ...r, ref: t });
  }
);
Yl.displayName = Bl;
var Jn = "SelectItem", [iy, Hl] = kt(Jn), Gl = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = ft(Jn, n), c = pt(Jn, n), u = i.value === r, [d, f] = l.useState(a ?? ""), [h, m] = l.useState(!1), g = ce(
      (b) => c.itemRefCallback?.(b, r, o)
    ), v = G(t, g), y = Fe(), x = l.useRef("touch"), w = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    return /* @__PURE__ */ p.jsx(
      iy,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: y,
        isSelected: u,
        onItemTextChange: l.useCallback((b) => {
          f((C) => C || (b?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          Mr.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ p.jsx(
              W.div,
              {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": u && h,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: v,
                onFocus: D(s.onFocus, () => m(!0)),
                onBlur: D(s.onBlur, () => m(!1)),
                onClick: D(s.onClick, () => {
                  x.current !== "mouse" && w();
                }),
                onPointerUp: D(s.onPointerUp, () => {
                  x.current === "mouse" && w();
                }),
                onPointerDown: D(s.onPointerDown, (b) => {
                  x.current = b.pointerType;
                }),
                onPointerMove: D(s.onPointerMove, (b) => {
                  x.current = b.pointerType, o ? c.onItemLeave?.() : x.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: D(s.onPointerLeave, (b) => {
                  b.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: D(s.onKeyDown, (b) => {
                  c.searchRef?.current !== "" && b.key === " " || (Gg.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Gl.displayName = Jn;
var an = "SelectItemText", Ul = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = ft(an, n), i = pt(an, n), c = Hl(an, n), u = qg(an, n), [d, f] = l.useState(null), h = ce(
      (w) => i.itemTextRefCallback?.(w, c.value, c.disabled)
    ), m = G(
      t,
      f,
      c.onItemTextChange,
      h
    ), g = d?.textContent, v = l.useMemo(
      () => /* @__PURE__ */ p.jsx("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: x } = u;
    return ue(() => (y(v), () => x(v)), [y, x, v]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(W.span, { id: c.textId, ...a, ref: m }),
      c.isSelected && s.valueNode && !s.valueNodeHasChildren && !Or(s.value) ? Bt.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
Ul.displayName = an;
var zl = "SelectItemIndicator", Kl = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Hl(zl, n).isSelected ? /* @__PURE__ */ p.jsx(W.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Kl.displayName = zl;
var So = "SelectScrollUpButton", cy = l.forwardRef((e, t) => {
  const n = pt(So, e.__scopeSelect), r = fa(So, e.__scopeSelect), [o, a] = l.useState(!1), s = G(t, r.onScrollButtonChange);
  return ue(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const u = c.scrollTop > 0;
        a(u);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    ql,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
cy.displayName = So;
var Eo = "SelectScrollDownButton", ly = l.forwardRef((e, t) => {
  const n = pt(Eo, e.__scopeSelect), r = fa(Eo, e.__scopeSelect), [o, a] = l.useState(!1), s = G(t, r.onScrollButtonChange);
  return ue(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const u = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < u;
        a(d);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    ql,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
ly.displayName = Eo;
var ql = l.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = pt("SelectScrollButton", n), s = l.useRef(null), i = Rr(n), c = l.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return l.useEffect(() => () => c(), [c]), ue(() => {
    i().find((d) => d.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ p.jsx(
    W.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: D(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: D(o.onPointerMove, () => {
        a.onItemLeave?.(), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: D(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), uy = "SelectSeparator", ko = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(W.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
ko.displayName = uy;
var Xl = "SelectArrow", dy = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Nr(n);
    return pt(Xl, n).position === "popper" ? /* @__PURE__ */ p.jsx(Ko, { ...o, ...r, ref: t }) : null;
  }
);
dy.displayName = Xl;
var Zl = "SelectBubbleInput", Ql = l.forwardRef(
  ({ __scopeSelect: e, ...t }, n) => {
    const r = ft(Zl, e), { value: o, onValueChange: a, required: s, disabled: i, name: c, autoComplete: u, form: d } = r, { nativeOptions: f, nativeSelectKey: h } = r, m = l.useRef(null), g = G(n, m), v = o ?? "", y = ur(v), x = Array.from(f).some(
      (w) => (w.props.value ?? "") === ""
    );
    return l.useEffect(() => {
      const w = m.current;
      if (!w) return;
      const b = window.HTMLSelectElement.prototype, S = Object.getOwnPropertyDescriptor(
        b,
        "value"
      ).set;
      if (y !== v && S) {
        const E = new Event("change", { bubbles: !0 });
        S.call(w, v), w.dispatchEvent(E);
      }
    }, [y, v]), /* @__PURE__ */ p.jsxs(
      W.select,
      {
        "aria-hidden": !0,
        required: s,
        tabIndex: -1,
        name: c,
        autoComplete: u,
        disabled: i,
        form: d,
        onChange: (w) => a(w.target.value),
        ...t,
        style: { ...Hs, ...t.style },
        ref: g,
        defaultValue: v,
        children: [
          Or(o) && !x ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
          Array.from(f)
        ]
      },
      h
    );
  }
);
Ql.displayName = Zl;
function fy(e) {
  return typeof e == "function";
}
function Or(e) {
  return e === "" || e === void 0;
}
function Jl(e) {
  const t = ce(e), n = l.useRef(""), r = l.useRef(0), o = l.useCallback(
    (s) => {
      const i = n.current + s;
      t(i), (function c(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(i);
    },
    [t]
  ), a = l.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function eu(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = py(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const c = s.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function py(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var _r = "Switch", [hy] = be(_r), [my, pa] = hy(_r);
function vy(e) {
  const {
    __scopeSwitch: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: s,
    name: i,
    onCheckedChange: c,
    required: u,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [h, m] = We({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: _r
  }), [g, v] = l.useState(null), [y, x] = l.useState(null), w = l.useRef(!1), b = g ? !!s || !!g.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), C = {
    checked: h,
    setChecked: m,
    disabled: a,
    control: g,
    setControl: v,
    name: i,
    form: s,
    value: d,
    hasConsumerStoppedPropagationRef: w,
    required: u,
    defaultChecked: o,
    isFormControl: b,
    bubbleInput: y,
    setBubbleInput: x
  };
  return /* @__PURE__ */ p.jsx(my, { scope: t, ...C, children: gy(f) ? f(C) : r });
}
var tu = "SwitchTrigger", nu = l.forwardRef(
  ({ __scopeSwitch: e, onClick: t, ...n }, r) => {
    const {
      value: o,
      disabled: a,
      checked: s,
      required: i,
      setControl: c,
      setChecked: u,
      hasConsumerStoppedPropagationRef: d,
      isFormControl: f,
      bubbleInput: h
    } = pa(tu, e), m = G(r, c);
    return /* @__PURE__ */ p.jsx(
      W.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": s,
        "aria-required": i,
        "data-state": cu(s),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: o,
        ...n,
        ref: m,
        onClick: D(t, (g) => {
          u((v) => !v), h && f && (d.current = g.isPropagationStopped(), d.current || g.stopPropagation());
        })
      }
    );
  }
);
nu.displayName = tu;
var ru = l.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: s,
      disabled: i,
      value: c,
      onCheckedChange: u,
      form: d,
      ...f
    } = e;
    return /* @__PURE__ */ p.jsx(
      vy,
      {
        __scopeSwitch: n,
        checked: o,
        defaultChecked: a,
        disabled: i,
        required: s,
        onCheckedChange: u,
        name: r,
        form: d,
        value: c,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx(
            nu,
            {
              ...f,
              ref: t,
              __scopeSwitch: n
            }
          ),
          h && /* @__PURE__ */ p.jsx(
            iu,
            {
              __scopeSwitch: n
            }
          )
        ] })
      }
    );
  }
);
ru.displayName = _r;
var ou = "SwitchThumb", au = l.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = pa(ou, n);
    return /* @__PURE__ */ p.jsx(
      W.span,
      {
        "data-state": cu(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
au.displayName = ou;
var su = "SwitchBubbleInput", iu = l.forwardRef(
  ({ __scopeSwitch: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: s,
      required: i,
      disabled: c,
      name: u,
      value: d,
      form: f,
      bubbleInput: h,
      setBubbleInput: m
    } = pa(su, e), g = G(n, m), v = ur(a), y = dr(r);
    l.useEffect(() => {
      const w = h;
      if (!w) return;
      const b = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, E = !o.current;
      if (v !== a && S) {
        const M = new Event("click", { bubbles: E });
        S.call(w, a), w.dispatchEvent(M);
      }
    }, [h, v, a, o]);
    const x = l.useRef(a);
    return /* @__PURE__ */ p.jsx(
      W.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: s ?? x.current,
        required: i,
        disabled: c,
        name: u,
        value: d,
        form: f,
        ...t,
        tabIndex: -1,
        ref: g,
        style: {
          ...t.style,
          ...y,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
iu.displayName = su;
function gy(e) {
  return typeof e == "function";
}
function cu(e) {
  return e ? "checked" : "unchecked";
}
var Tr = "Tabs", [yy] = be(Tr, [
  qt
]), lu = qt(), [by, ha] = yy(Tr), uu = l.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: s = "horizontal",
      dir: i,
      activationMode: c = "automatic",
      ...u
    } = e, d = Gt(i), [f, h] = We({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Tr
    });
    return /* @__PURE__ */ p.jsx(
      by,
      {
        scope: n,
        baseId: Fe(),
        value: f,
        onValueChange: h,
        orientation: s,
        dir: d,
        activationMode: c,
        children: /* @__PURE__ */ p.jsx(
          W.div,
          {
            dir: d,
            "data-orientation": s,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
uu.displayName = Tr;
var du = "TabsList", fu = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = ha(du, n), s = lu(n);
    return /* @__PURE__ */ p.jsx(
      qo,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ p.jsx(
          W.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
fu.displayName = du;
var pu = "TabsTrigger", hu = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = ha(pu, n), i = lu(n), c = vu(s.baseId, r), u = gu(s.baseId, r), d = r === s.value;
    return /* @__PURE__ */ p.jsx(
      Xo,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: d,
        children: /* @__PURE__ */ p.jsx(
          W.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": u,
            "data-state": d ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...a,
            ref: t,
            onMouseDown: D(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? s.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: D(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && s.onValueChange(r);
            }),
            onFocus: D(e.onFocus, () => {
              const f = s.activationMode !== "manual";
              !d && !o && f && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
hu.displayName = pu;
var mu = "TabsContent", wy = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = ha(mu, n), c = vu(i.baseId, r), u = gu(i.baseId, r), d = r === i.value, f = l.useRef(d);
    return l.useEffect(() => {
      const h = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ p.jsx(me, { present: o || d, children: ({ present: h }) => /* @__PURE__ */ p.jsx(
      W.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": i.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !h,
        id: u,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: h && a
      }
    ) });
  }
);
wy.displayName = mu;
function vu(e, t) {
  return `${e}-trigger-${t}`;
}
function gu(e, t) {
  return `${e}-content-${t}`;
}
var xy = uu, Cy = fu, Sy = hu;
const yu = { asChild: { type: "boolean" } }, Ey = { width: { type: "string", className: "rt-r-w", customProperties: ["--width"], responsive: !0 }, minWidth: { type: "string", className: "rt-r-min-w", customProperties: ["--min-width"], responsive: !0 }, maxWidth: { type: "string", className: "rt-r-max-w", customProperties: ["--max-width"], responsive: !0 } }, ky = { height: { type: "string", className: "rt-r-h", customProperties: ["--height"], responsive: !0 }, minHeight: { type: "string", className: "rt-r-min-h", customProperties: ["--min-height"], responsive: !0 }, maxHeight: { type: "string", className: "rt-r-max-h", customProperties: ["--max-height"], responsive: !0 } }, Py = ["gray", "gold", "bronze", "brown", "yellow", "amber", "orange", "tomato", "red", "ruby", "crimson", "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan", "teal", "jade", "green", "grass", "lime", "mint", "sky"], My = { color: { type: "enum", values: Py, default: "" } }, Ry = { highContrast: { type: "boolean", className: "rt-high-contrast", default: void 0 } }, Ny = ["initial", "xs", "sm", "md", "lg", "xl"], ma = new Set(Ny);
function bu(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function cn(e) {
  return typeof e == "object" && e !== null && Object.keys(e).some((t) => ma.has(t));
}
function Oy({ className: e, customProperties: t, ...n }) {
  const r = wu({ allowArbitraryValues: !0, className: e, ...n }), o = _y({ customProperties: t, ...n });
  return [r, o];
}
function wu({ allowArbitraryValues: e, value: t, className: n, propValues: r, parseValue: o = (a) => a }) {
  const a = [];
  if (t) {
    if (typeof t == "string" && r.includes(t)) return vs(n, t, o);
    if (cn(t)) {
      const s = t;
      for (const i in s) {
        if (!bu(s, i) || !ma.has(i)) continue;
        const c = s[i];
        if (c !== void 0) {
          if (r.includes(c)) {
            const u = vs(n, c, o), d = i === "initial" ? u : `${i}:${u}`;
            a.push(d);
          } else if (e) {
            const u = i === "initial" ? n : `${i}:${n}`;
            a.push(u);
          }
        }
      }
      return a.join(" ");
    }
    if (e) return n;
  }
}
function vs(e, t, n) {
  const r = e ? "-" : "", o = n(t), a = o?.startsWith("-"), s = a ? "-" : "", i = a ? o?.substring(1) : o;
  return `${s}${e}${r}${i}`;
}
function _y({ customProperties: e, value: t, propValues: n, parseValue: r = (o) => o }) {
  let o = {};
  if (!(!t || typeof t == "string" && n.includes(t))) {
    if (typeof t == "string" && (o = Object.fromEntries(e.map((a) => [a, t]))), cn(t)) {
      const a = t;
      for (const s in a) {
        if (!bu(a, s) || !ma.has(s)) continue;
        const i = a[s];
        if (!n.includes(i)) for (const c of e) o = { [s === "initial" ? c : `${c}-${s}`]: i, ...o };
      }
    }
    for (const a in o) {
      const s = o[a];
      s !== void 0 && (o[a] = r(s));
    }
    return o;
  }
}
function gs(...e) {
  let t = {};
  for (const n of e) n && (t = { ...t, ...n });
  return Object.keys(t).length ? t : void 0;
}
function Ty(...e) {
  return Object.assign({}, ...e);
}
function va(e, ...t) {
  let n, r;
  const o = { ...e }, a = Ty(...t);
  for (const s in a) {
    let i = o[s];
    const c = a[s];
    if (c.default !== void 0 && i === void 0 && (i = c.default), c.type === "enum" && ![c.default, ...c.values].includes(i) && !cn(i) && (i = c.default), o[s] = i, "className" in c && c.className) {
      delete o[s];
      const u = "responsive" in c;
      if (!i || cn(i) && !u) continue;
      if (cn(i) && (c.default !== void 0 && i.initial === void 0 && (i.initial = c.default), c.type === "enum" && ([c.default, ...c.values].includes(i.initial) || (i.initial = c.default))), c.type === "enum") {
        const d = wu({ allowArbitraryValues: !1, value: i, className: c.className, propValues: c.values, parseValue: c.parseValue });
        n = Z(n, d);
        continue;
      }
      if (c.type === "string" || c.type === "enum | string") {
        const d = c.type === "string" ? [] : c.values, [f, h] = Oy({ className: c.className, customProperties: c.customProperties, propValues: d, parseValue: c.parseValue, value: i });
        r = gs(r, h), n = Z(n, f);
        continue;
      }
      if (c.type === "boolean" && i) {
        n = Z(n, c.className);
        continue;
      }
    }
  }
  return o.className = Z(n, e.className), o.style = gs(r, e.style), o;
}
const mt = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], ga = { m: { type: "enum | string", values: mt, responsive: !0, className: "rt-r-m", customProperties: ["--m"] }, mx: { type: "enum | string", values: mt, responsive: !0, className: "rt-r-mx", customProperties: ["--ml", "--mr"] }, my: { type: "enum | string", values: mt, responsive: !0, className: "rt-r-my", customProperties: ["--mt", "--mb"] }, mt: { type: "enum | string", values: mt, responsive: !0, className: "rt-r-mt", customProperties: ["--mt"] }, mr: { type: "enum | string", values: mt, responsive: !0, className: "rt-r-mr", customProperties: ["--mr"] }, mb: { type: "enum | string", values: mt, responsive: !0, className: "rt-r-mb", customProperties: ["--mb"] }, ml: { type: "enum | string", values: mt, responsive: !0, className: "rt-r-ml", customProperties: ["--ml"] } }, Dy = ["none", "small", "medium", "large", "full"], Ay = { radius: { type: "enum", values: Dy, default: void 0 } }, Iy = Vs, vt = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], jy = { p: { type: "enum | string", className: "rt-r-p", customProperties: ["--p"], values: vt, responsive: !0 }, px: { type: "enum | string", className: "rt-r-px", customProperties: ["--pl", "--pr"], values: vt, responsive: !0 }, py: { type: "enum | string", className: "rt-r-py", customProperties: ["--pt", "--pb"], values: vt, responsive: !0 }, pt: { type: "enum | string", className: "rt-r-pt", customProperties: ["--pt"], values: vt, responsive: !0 }, pr: { type: "enum | string", className: "rt-r-pr", customProperties: ["--pr"], values: vt, responsive: !0 }, pb: { type: "enum | string", className: "rt-r-pb", customProperties: ["--pb"], values: vt, responsive: !0 }, pl: { type: "enum | string", className: "rt-r-pl", customProperties: ["--pl"], values: vt, responsive: !0 } }, to = ["visible", "hidden", "clip", "scroll", "auto"], Fy = ["static", "relative", "absolute", "fixed", "sticky"], tn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], Wy = ["0", "1"], Ly = ["0", "1"], $y = ["start", "center", "end", "baseline", "stretch"], Vy = ["start", "center", "end", "baseline", "stretch"], By = { ...jy, ...Ey, ...ky, position: { type: "enum", className: "rt-r-position", values: Fy, responsive: !0 }, inset: { type: "enum | string", className: "rt-r-inset", customProperties: ["--inset"], values: tn, responsive: !0 }, top: { type: "enum | string", className: "rt-r-top", customProperties: ["--top"], values: tn, responsive: !0 }, right: { type: "enum | string", className: "rt-r-right", customProperties: ["--right"], values: tn, responsive: !0 }, bottom: { type: "enum | string", className: "rt-r-bottom", customProperties: ["--bottom"], values: tn, responsive: !0 }, left: { type: "enum | string", className: "rt-r-left", customProperties: ["--left"], values: tn, responsive: !0 }, overflow: { type: "enum", className: "rt-r-overflow", values: to, responsive: !0 }, overflowX: { type: "enum", className: "rt-r-ox", values: to, responsive: !0 }, overflowY: { type: "enum", className: "rt-r-oy", values: to, responsive: !0 }, flexBasis: { type: "string", className: "rt-r-fb", customProperties: ["--flex-basis"], responsive: !0 }, flexShrink: { type: "enum | string", className: "rt-r-fs", customProperties: ["--flex-shrink"], values: Wy, responsive: !0 }, flexGrow: { type: "enum | string", className: "rt-r-fg", customProperties: ["--flex-grow"], values: Ly, responsive: !0 }, gridArea: { type: "string", className: "rt-r-ga", customProperties: ["--grid-area"], responsive: !0 }, gridColumn: { type: "string", className: "rt-r-gc", customProperties: ["--grid-column"], responsive: !0 }, gridColumnStart: { type: "string", className: "rt-r-gcs", customProperties: ["--grid-column-start"], responsive: !0 }, gridColumnEnd: { type: "string", className: "rt-r-gce", customProperties: ["--grid-column-end"], responsive: !0 }, gridRow: { type: "string", className: "rt-r-gr", customProperties: ["--grid-row"], responsive: !0 }, gridRowStart: { type: "string", className: "rt-r-grs", customProperties: ["--grid-row-start"], responsive: !0 }, gridRowEnd: { type: "string", className: "rt-r-gre", customProperties: ["--grid-row-end"], responsive: !0 }, alignSelf: { type: "enum", className: "rt-r-as", values: $y, responsive: !0 }, justifySelf: { type: "enum", className: "rt-r-js", values: Vy, responsive: !0 } }, Yy = ["1", "2", "3", "4"], Hy = ["classic", "solid", "soft", "surface", "outline", "ghost"], ys = { ...yu, size: { type: "enum", className: "rt-r-size", values: Yy, default: "2", responsive: !0 }, variant: { type: "enum", className: "rt-variant", values: Hy, default: "solid" }, ...My, ...Ry, ...Ay, loading: { type: "boolean", className: "rt-loading", default: !1 } }, no = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], Gy = { gap: { type: "enum | string", className: "rt-r-gap", customProperties: ["--gap"], values: no, responsive: !0 }, gapX: { type: "enum | string", className: "rt-r-cg", customProperties: ["--column-gap"], values: no, responsive: !0 }, gapY: { type: "enum | string", className: "rt-r-rg", customProperties: ["--row-gap"], values: no, responsive: !0 } }, Uy = ["div", "span"], zy = ["none", "inline-flex", "flex"], Ky = ["row", "column", "row-reverse", "column-reverse"], qy = ["start", "center", "end", "baseline", "stretch"], Xy = ["start", "center", "end", "between"], Zy = ["nowrap", "wrap", "wrap-reverse"], Qy = { as: { type: "enum", values: Uy, default: "div" }, ...yu, display: { type: "enum", className: "rt-r-display", values: zy, responsive: !0 }, direction: { type: "enum", className: "rt-r-fd", values: Ky, responsive: !0 }, align: { type: "enum", className: "rt-r-ai", values: qy, responsive: !0 }, justify: { type: "enum", className: "rt-r-jc", values: Xy, parseValue: Jy, responsive: !0 }, wrap: { type: "enum", className: "rt-r-fw", values: Zy, responsive: !0 }, ...Gy };
function Jy(e) {
  return e === "between" ? "space-between" : e;
}
const er = l.forwardRef((e, t) => {
  const { className: n, asChild: r, as: o = "div", ...a } = va(e, Qy, By, ga);
  return l.createElement(r ? Iy : o, { ...a, ref: t, className: Z("rt-Flex", n) });
});
er.displayName = "Flex";
const eb = ["1", "2", "3"], tb = { size: { type: "enum", className: "rt-r-size", values: eb, default: "2", responsive: !0 }, loading: { type: "boolean", default: !0 } }, xu = l.forwardRef((e, t) => {
  const { className: n, children: r, loading: o, ...a } = va(e, tb, ga);
  if (!o) return r;
  const s = l.createElement("span", { ...a, ref: t, className: Z("rt-Spinner", n) }, l.createElement("span", { className: "rt-SpinnerLeaf" }), l.createElement("span", { className: "rt-SpinnerLeaf" }), l.createElement("span", { className: "rt-SpinnerLeaf" }), l.createElement("span", { className: "rt-SpinnerLeaf" }), l.createElement("span", { className: "rt-SpinnerLeaf" }), l.createElement("span", { className: "rt-SpinnerLeaf" }), l.createElement("span", { className: "rt-SpinnerLeaf" }), l.createElement("span", { className: "rt-SpinnerLeaf" }));
  return r === void 0 ? s : l.createElement(er, { asChild: !0, position: "relative", align: "center", justify: "center" }, l.createElement("span", null, l.createElement("span", { "aria-hidden": !0, style: { display: "contents", visibility: "hidden" }, inert: void 0 }, r), l.createElement(er, { asChild: !0, align: "center", justify: "center", position: "absolute", inset: "0" }, l.createElement("span", null, s))));
});
xu.displayName = "Spinner";
const nb = kf;
function rb(e, t) {
  if (e !== void 0) return typeof e == "string" ? t(e) : Object.fromEntries(Object.entries(e).map(([n, r]) => [n, t(r)]));
}
function ob(e) {
  switch (e) {
    case "1":
      return "1";
    case "2":
    case "3":
      return "2";
    case "4":
      return "3";
  }
}
const Cu = l.forwardRef((e, t) => {
  const { size: n = ys.size.default } = e, { className: r, children: o, asChild: a, color: s, radius: i, disabled: c = e.loading, ...u } = va(e, ys, ga), d = a ? Vs : "button";
  return l.createElement(d, { "data-disabled": c || void 0, "data-accent-color": s, "data-radius": i, ...u, ref: t, className: Z("rt-reset", "rt-BaseButton", r), disabled: c }, e.loading ? l.createElement(l.Fragment, null, l.createElement("span", { style: { display: "contents", visibility: "hidden" }, "aria-hidden": !0 }, o), l.createElement(nb, null, o), l.createElement(er, { asChild: !0, align: "center", justify: "center", position: "absolute", inset: "0" }, l.createElement("span", null, l.createElement(xu, { size: rb(n, ob) })))) : o);
});
Cu.displayName = "BaseButton";
const Su = l.forwardRef(({ className: e, ...t }, n) => l.createElement(Cu, { ...t, ref: n, className: Z("rt-Button", e) }));
Su.displayName = "Button";
const ab = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), sb = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), bs = (e) => {
  const t = sb(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Eu = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), ib = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var cb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const lb = gn(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, c) => wt(
    "svg",
    {
      ref: c,
      ...cb,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Eu("lucide", o),
      ...!a && !ib(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([u, d]) => wt(u, d)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
const de = (e, t) => {
  const n = gn(
    ({ className: r, ...o }, a) => wt(lb, {
      ref: a,
      iconNode: t,
      className: Eu(
        `lucide-${ab(bs(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = bs(e), n;
};
const ub = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M8 8h8", key: "1bis0t" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8", key: "nu2bwa" }]
], db = de("badge-indian-rupee", ub);
const fb = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
], pb = de("calendar-days", fb);
const hb = [
  ["path", { d: "M12 16v5", key: "zza2cw" }],
  ["path", { d: "M16 14v7", key: "1g90b9" }],
  ["path", { d: "M20 10v11", key: "1iqoj0" }],
  [
    "path",
    { d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15", key: "1fw8x9" }
  ],
  ["path", { d: "M4 18v3", key: "1yp0dc" }],
  ["path", { d: "M8 14v7", key: "n3cwzv" }]
], mb = de("chart-no-axes-combined", hb);
const vb = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], gb = de("check", vb);
const yb = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], bb = de("chevron-left", yb);
const wb = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], xb = de("chevron-right", wb);
const Cb = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], Sb = de("chevrons-left", Cb);
const Eb = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], kb = de("chevrons-right", Eb);
const Pb = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
], Mb = de("house", Pb);
const Rb = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }],
  [
    "path",
    {
      d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
      key: "1ywtjm"
    }
  ]
], Nb = de("import", Rb);
const Ob = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], _b = de("log-out", Ob);
const Tb = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], Db = de("moon", Tb);
const Ab = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], Ib = de("navigation", Ab);
const jb = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Fb = de("plus", jb);
const Wb = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Lb = de("settings", Wb);
const $b = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], Vb = de("square-pen", $b);
const Bb = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
], Yb = de("tag", Bb);
const Hb = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], Gb = de("trash-2", Hb);
const Ub = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], zb = de("user", Ub);
const Kb = [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
], qb = de("users-round", Kb);
const Xb = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Zb = de("x", Xb), Qb = {
  badgeIndianRupee: db,
  calendar: pb,
  check: gb,
  chevronLeft: bb,
  chevronRight: xb,
  chevronsLeft: Sb,
  chevronsRight: kb,
  edit: Vb,
  home: Mb,
  import: Nb,
  logOut: _b,
  moon: Db,
  navigation: Ib,
  plus: Fb,
  profiles: qb,
  report: mb,
  settings: Lb,
  tag: Yb,
  trash: Gb,
  user: zb,
  x: Zb
}, Jb = {
  XS: 12,
  S: 16,
  M: 20,
  L: 24,
  XL: 32,
  "2XL": 40
}, ut = l.forwardRef(
  ({ name: e, size: t = "S", color: n = "var(--text-primary)", className: r, strokeWidth: o = 1.75 }, a) => {
    const s = Qb[e];
    if (!s)
      return process.env.NODE_ENV !== "production" && console.warn(`[Icon]: Unknown icon name "${e}"`), null;
    const i = typeof t == "number" ? t : Jb[t];
    return /* @__PURE__ */ p.jsx(
      s,
      {
        className: Z("ui-icon", r),
        ref: a,
        size: i,
        color: n,
        strokeWidth: o,
        "aria-hidden": !0
      }
    );
  }
);
ut.displayName = "Icon";
const ku = {
  XS: 12,
  S: 18,
  M: 24,
  L: 32,
  XL: 48
};
function ew({ size: e = "M", className: t }) {
  const n = ku[e];
  return /* @__PURE__ */ p.jsx(
    "span",
    {
      role: "status",
      "aria-live": "polite",
      "aria-label": "Loading",
      className: Z("ui-spinner", t),
      style: {
        width: n,
        height: n
      }
    }
  );
}
const ws = Object.keys(ku);
function tw(e) {
  const t = ws.indexOf(e);
  return t > 0 ? ws[t - 1] : e;
}
const nw = {
  primary: "var(--gray-50)",
  secondary: "var(--gray-200)",
  negative: "#fff",
  accent: "#fff",
  link: "var(--blue-700)",
  quite: "var(--gray-800)"
}, bt = (e) => {
  const {
    size: t = "S",
    variant: n = "primary",
    className: r = "",
    label: o,
    ariaLabel: a,
    quite: s,
    outline: i,
    icon: c,
    iconOnly: u,
    loading: d,
    children: f,
    ...h
  } = e;
  let { iconColor: m } = e;
  const g = yt(() => tw(t), [t]);
  !m && c && (m = nw[s ? "quite" : n]);
  let v = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    c && /* @__PURE__ */ p.jsx(
      ut,
      {
        className: Z("btn-icon"),
        name: c,
        strokeWidth: 1.5,
        size: t,
        color: m
      }
    ),
    !u && f || o
  ] });
  return d && (v = /* @__PURE__ */ p.jsx(ew, { size: g })), /* @__PURE__ */ p.jsx(
    Su,
    {
      "aria-label": a,
      className: Z("btn-container", {
        quite: s,
        outline: i,
        "icon-only": u,
        [r]: r,
        [`btn-container-size--${t}`]: t,
        [n]: n
      }),
      ...h,
      children: v
    }
  );
}, Pu = P.createContext(null);
function ya() {
  const e = P.useContext(Pu);
  if (!e)
    throw new Error("Dialog components must be used inside <DialogContainer>");
  return e;
}
function rw({
  title: e,
  description: t,
  content: n,
  ctaList: r,
  onAction: o,
  showDismiss: a,
  stopDimissOnCta: s
}) {
  const { closeDialog: i } = ya();
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(bi, { asChild: !0, children: /* @__PURE__ */ p.jsx("h2", { className: "dialog-heading", children: e }) }),
    /* @__PURE__ */ p.jsx(xi, { asChild: !0, children: /* @__PURE__ */ p.jsx("p", { className: "dialog-description", children: t }) }),
    n,
    /* @__PURE__ */ p.jsxs("div", { className: "dialog-footer", children: [
      r?.length > 0 && /* @__PURE__ */ p.jsx(
        bt,
        {
          onClick: () => {
            o && o(r[0].actionId), s || i();
          },
          ...r[0]
        }
      ),
      r?.length > 1 && /* @__PURE__ */ p.jsx(
        bt,
        {
          variant: "primary",
          label: r[1].label,
          outline: !0,
          onClick: () => {
            o && o(r[1].actionId), s || i();
          }
        }
      )
    ] }),
    a && /* @__PURE__ */ p.jsx(Si, { asChild: !0, children: /* @__PURE__ */ p.jsx(
      bt,
      {
        variant: "primary",
        className: "close-btn",
        onClick: () => i(),
        quite: !0,
        children: /* @__PURE__ */ p.jsx(th, { color: "var(--text-primary)" })
      }
    ) })
  ] });
}
const Mu = P.createContext(void 0);
function ow() {
  return P.useContext(Mu);
}
function Dr(e) {
  const t = ow(), [n, r] = Pe(void 0);
  return nr(() => {
    if (typeof document > "u") return;
    if (t) {
      r(t);
      return;
    }
    const o = document.querySelector(".ui-provider");
    if (o) {
      r(o);
      return;
    }
    r(document.body);
  }, [e, t]), n;
}
function aw({ dialog: e }) {
  const t = Dr(), [n, r] = P.useState(
    void 0
  ), { closeDialog: o, isOpen: a } = ya(), { dialog: s, onOpenChange: i, closeOnBackdropClick: c } = e;
  return /* @__PURE__ */ p.jsx(Mu.Provider, { value: n, children: /* @__PURE__ */ p.jsx(di, { open: a, onOpenChange: i, children: /* @__PURE__ */ p.jsxs(hi, { container: t, children: [
    /* @__PURE__ */ p.jsx(
      mi,
      {
        className: "overlay",
        onPointerDown: (u) => {
          c && o();
        }
      }
    ),
    /* @__PURE__ */ p.jsx(
      vi,
      {
        ref: (u) => r(u ?? void 0),
        className: "dialog-container",
        children: s
      }
    )
  ] }) }) });
}
function Ru({ children: e }) {
  const [t, n] = P.useState(null), r = P.useMemo(
    () => ({
      addDialog: (o) => n(o),
      closeDialog: () => n(null),
      isOpen: !!t
    }),
    [t]
  );
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs(Pu.Provider, { value: r, children: [
    t !== null && /* @__PURE__ */ p.jsx(aw, { dialog: t }),
    e
  ] }) });
}
const AC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dialog: rw,
  DialogContainer: Ru,
  useDialogContext: ya
}, Symbol.toStringTag, { value: "Module" }));
function IC({ theme: e, children: t, classname: n, root: r }) {
  const o = Ce(null);
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(ei, { classname: n, ref: o, theme: e, root: r, children: /* @__PURE__ */ p.jsx(Ru, { children: /* @__PURE__ */ p.jsx(Kf, { children: t }) }) }) });
}
const jC = ({ src: e, alt: t, fallback: { color: n, bgColor: r, text: o } = {}, size: a = "M" }) => /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs(
  Pi,
  {
    className: Z("avatar", { [`avatar-size--${a}`]: a }),
    style: { color: n, backgroundColor: r },
    children: [
      /* @__PURE__ */ p.jsx(Ri, { className: "avatar-image", src: e, alt: t }),
      /* @__PURE__ */ p.jsx(Oi, { className: "avatar-fallback", children: o })
    ]
  }
) }), sw = {
  XS: 12,
  S: 14,
  M: 16,
  L: 20,
  XL: 24
}, FC = ({ label: e, value: t, onChange: n, size: r = "M" }) => {
  const [o, a] = P.useState(t || !1);
  _e(() => {
    a(t || !1);
  }, [t]);
  const s = (i) => {
    t || a(i), n?.(i);
  };
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: Z("ui-checkbox", { [`ui-checkbox-size--${r}`]: r }),
      style: { display: "flex", alignItems: "center" },
      children: [
        /* @__PURE__ */ p.jsx(
          Di,
          {
            className: "ui-checkbox-root",
            checked: o,
            id: "c1",
            onCheckedChange: s,
            children: /* @__PURE__ */ p.jsx(Ii, { className: "ui-checkbox-indicator", children: /* @__PURE__ */ p.jsx(
              ut,
              {
                size: sw[r],
                strokeWidth: 4,
                name: "check",
                color: "var(--gray-0)"
              }
            ) })
          }
        ),
        /* @__PURE__ */ p.jsx("label", { className: "ui-checkbox-label", htmlFor: "c1", children: e })
      ]
    }
  );
};
function Ar() {
  return (Ar = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function Nu(e, t) {
  if (e == null) return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function ln(e) {
  var t = Ce(e), n = Ce(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var $t = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, un = function(e) {
  return "touches" in e;
}, Po = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, xs = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = un(t) ? (function(a, s) {
    for (var i = 0; i < a.length; i++) if (a[i].identifier === s) return a[i];
    return a[0];
  })(t.touches, n) : t;
  return { left: $t((o.pageX - (r.left + Po(e).pageXOffset)) / r.width), top: $t((o.pageY - (r.top + Po(e).pageYOffset)) / r.height) };
}, Cs = function(e) {
  !un(e) && e.preventDefault();
}, ba = P.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = e.onEnd, o = Nu(e, ["onMove", "onKey", "onEnd"]), a = Ce(null), s = ln(t), i = ln(n), c = ln(r), u = Ce(null), d = Ce(!1), f = yt(function() {
    var y = function(b) {
      Cs(b), (un(b) ? b.touches.length > 0 : b.buttons > 0) && a.current ? s(xs(a.current, b, u.current)) : (w(!1), c());
    }, x = function() {
      w(!1), c();
    };
    function w(b) {
      var C = d.current, S = Po(a.current), E = b ? S.addEventListener : S.removeEventListener;
      E(C ? "touchmove" : "mousemove", y), E(C ? "touchend" : "mouseup", x);
    }
    return [function(b) {
      var C = b.nativeEvent, S = a.current;
      if (S && (Cs(C), !(function(M, O) {
        return O && !un(M);
      })(C, d.current) && S)) {
        if (un(C)) {
          d.current = !0;
          var E = C.changedTouches || [];
          E.length && (u.current = E[0].identifier);
        }
        S.focus(), s(xs(S, C, u.current)), w(!0);
      }
    }, function(b) {
      var C = b.which || b.keyCode;
      C < 37 || C > 40 || (b.preventDefault(), i({ left: C === 39 ? 0.05 : C === 37 ? -0.05 : 0, top: C === 40 ? 0.05 : C === 38 ? -0.05 : 0 }));
    }, function(b) {
      var C = b.which || b.keyCode;
      C >= 37 && C <= 40 && c();
    }, w];
  }, [i, s, c]), h = f[0], m = f[1], g = f[2], v = f[3];
  return _e(function() {
    return v;
  }, [v]), P.createElement("div", Ar({}, o, { onTouchStart: h, onMouseDown: h, className: "react-colorful__interactive", ref: a, onKeyDown: m, onKeyUp: g, tabIndex: 0, role: "slider" }));
}), Ir = function(e) {
  return e.filter(Boolean).join(" ");
}, wa = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Ir(["react-colorful__pointer", e.className]);
  return P.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, P.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, ge = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, iw = function(e) {
  return dw(Mo(e));
}, Mo = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? ge(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? ge(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, cw = function(e) {
  return uw(lw(e));
}, Ou = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: ge(e.h), s: ge(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: ge(o / 2), a: ge(r, 2) };
}, Ro = function(e) {
  var t = Ou(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, ro = function(e) {
  var t = Ou(e);
  return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
}, lw = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), u = a % 6;
  return { r: ge(255 * [r, i, s, s, c, r][u]), g: ge(255 * [c, r, r, i, s, s][u]), b: ge(255 * [s, s, c, r, r, i][u]), a: ge(o, 2) };
}, Ln = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, uw = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? Ln(ge(255 * o)) : "";
  return "#" + Ln(t) + Ln(n) + Ln(r) + a;
}, dw = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: ge(60 * (i < 0 ? i + 6 : i)), s: ge(a ? s / a * 100 : 0), v: ge(a / 255 * 100), a: o };
}, fw = P.memo(function(e) {
  var t = e.hue, n = e.onChange, r = e.onChangeEnd, o = Ir(["react-colorful__hue", e.className]);
  return P.createElement("div", { className: o }, P.createElement(ba, { onMove: function(a) {
    n({ h: 360 * a.left });
  }, onKey: function(a) {
    n({ h: $t(t + 360 * a.left, 0, 360) });
  }, onEnd: r, "aria-label": "Hue", "aria-valuenow": ge(t), "aria-valuemax": "360", "aria-valuemin": "0" }, P.createElement(wa, { className: "react-colorful__hue-pointer", left: t / 360, color: Ro({ h: t, s: 100, v: 100, a: 1 }) })));
}), pw = P.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = e.onChangeEnd, o = { backgroundColor: Ro({ h: t.h, s: 100, v: 100, a: 1 }) };
  return P.createElement("div", { className: "react-colorful__saturation", style: o }, P.createElement(ba, { onMove: function(a) {
    n({ s: 100 * a.left, v: 100 - 100 * a.top });
  }, onKey: function(a) {
    n({ s: $t(t.s + 100 * a.left, 0, 100), v: $t(t.v - 100 * a.top, 0, 100) });
  }, onEnd: r, "aria-label": "Color", "aria-valuetext": "Saturation " + ge(t.s) + "%, Brightness " + ge(t.v) + "%" }, P.createElement(wa, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: Ro(t) })));
}), _u = function(e, t) {
  if (e === t) return !0;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}, hw = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || _u(Mo(e), Mo(t));
};
function mw(e, t, n, r) {
  var o = ln(n), a = ln(r), s = Pe(function() {
    return e.toHsva(t);
  }), i = s[0], c = s[1], u = Ce({ color: t, hsva: i }), d = Ce(!1);
  _e(function() {
    if (!e.equal(t, u.current.color)) {
      var m = e.toHsva(t);
      u.current = { hsva: m, color: t }, c(m), d.current = !1;
    }
  }, [t, e]), _e(function() {
    var m;
    _u(i, u.current.hsva) || e.equal(m = e.fromHsva(i), u.current.color) || (u.current = { hsva: i, color: m }, o(m), d.current = !0);
  }, [i, e, o]);
  var f = ve(function(m) {
    c(function(g) {
      return Object.assign({}, g, m);
    });
  }, []), h = ve(function() {
    d.current && (d.current = !1, a(u.current.color));
  }, [a]);
  return [i, f, h];
}
var vw = typeof window < "u" ? nr : _e, gw = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Ss = /* @__PURE__ */ new Map(), yw = function(e) {
  vw(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Ss.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Ss.set(t, n);
      var r = gw();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, bw = function(e) {
  var t = e.className, n = e.hsva, r = e.onChange, o = e.onChangeEnd, a = { backgroundImage: "linear-gradient(90deg, " + ro(Object.assign({}, n, { a: 0 })) + ", " + ro(Object.assign({}, n, { a: 1 })) + ")" }, s = Ir(["react-colorful__alpha", t]), i = ge(100 * n.a);
  return P.createElement("div", { className: s }, P.createElement("div", { className: "react-colorful__alpha-gradient", style: a }), P.createElement(ba, { onMove: function(c) {
    r({ a: c.left });
  }, onKey: function(c) {
    r({ a: $t(n.a + c.left) });
  }, onEnd: o, "aria-label": "Alpha", "aria-valuetext": i + "%", "aria-valuenow": i, "aria-valuemin": "0", "aria-valuemax": "100" }, P.createElement(wa, { className: "react-colorful__alpha-pointer", left: n.a, color: ro(n) })));
}, ww = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = e.onChangeEnd, i = Nu(e, ["className", "colorModel", "color", "onChange", "onChangeEnd"]), c = Ce(null);
  yw(c);
  var u = mw(n, o, a, s), d = u[0], f = u[1], h = u[2], m = Ir(["react-colorful", t]);
  return P.createElement("div", Ar({}, i, { ref: c, className: m }), P.createElement(pw, { hsva: d, onChange: f, onChangeEnd: h }), P.createElement(fw, { hue: d.h, onChange: f, onChangeEnd: h }), P.createElement(bw, { hsva: d, onChange: f, onChangeEnd: h, className: "react-colorful__last-control" }));
}, xw = { defaultColor: "0001", toHsva: iw, fromHsva: cw, equal: hw }, Cw = function(e) {
  return P.createElement(ww, Ar({}, e, { colorModel: xw }));
};
const Tu = P.createContext(null);
function Du() {
  const e = P.useContext(Tu);
  if (!e)
    throw new Error("Popover components must be used inside <Popover>");
  return e;
}
function xa({ children: e, onClose: t, open: n, onOpenChange: r }) {
  const o = Dr(), [a, s] = P.useState(null), [i, c] = P.useState(null), u = P.useMemo(
    () => ({
      registerTrigger: s,
      registerContent: c
    }),
    []
  );
  return /* @__PURE__ */ p.jsx(Tu.Provider, { value: u, children: /* @__PURE__ */ p.jsxs(
    ug,
    {
      open: n,
      onOpenChange: (d) => {
        r && r(d), !d && t && t("");
      },
      children: [
        a,
        i && /* @__PURE__ */ p.jsx(fg, { container: o, children: i }),
        e
      ]
    }
  ) });
}
const jr = l.forwardRef(
  ({ children: e }, t) => {
    const { registerTrigger: n } = Du(), r = e;
    return l.useEffect(() => {
      const o = /* @__PURE__ */ p.jsx(dg, { asChild: !0, children: l.cloneElement(r, {
        ...r.props,
        className: [r.props.className, "popover-trigger"].filter(Boolean).join(" ")
      }) });
      n(o);
    }, [e, t, n]), null;
  }
);
jr.displayName = "PopoverTrigger";
function Ca({ children: e, ...t }) {
  const { registerContent: n } = Du(), r = e, o = r?.props?.className || "";
  return l.useEffect(() => {
    n(
      /* @__PURE__ */ p.jsx(
        pg,
        {
          className: Z("popover-content", {
            [o]: r.props.className
          }),
          align: "start",
          side: "bottom",
          alignOffset: 4,
          sideOffset: 4,
          collisionPadding: { top: 12, bottom: 12, left: 12, right: 12 },
          ...t,
          children: e
        }
      )
    );
  }, [e, n]), null;
}
const WC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Content: Ca,
  Popover: xa,
  Trigger: jr
}, Symbol.toStringTag, { value: "Module" }));
function Au({
  className: e = "",
  label: t,
  size: n = "M",
  value: r,
  disabled: o,
  accentColor: a
}) {
  return /* @__PURE__ */ p.jsxs(
    "label",
    {
      className: Z("ui-radio", `ui-radio-size--${n}`, e, {
        "ui-radio-disabled": o
      }),
      style: a ? {
        "--ui-radio-accent-color": a
      } : void 0,
      children: [
        /* @__PURE__ */ p.jsx(ul, { className: "ui-radio-root", value: r, disabled: o, children: /* @__PURE__ */ p.jsx(fl, { className: "ui-radio-indicator" }) }),
        t ? /* @__PURE__ */ p.jsx("span", { className: "ui-radio-label", children: t }) : null
      ]
    }
  );
}
function LC({
  className: e = "",
  label: t,
  size: n = "M",
  value: r,
  checked: o = !1,
  disabled: a,
  name: s,
  accentColor: i,
  onChange: c
}) {
  const u = o ? r : "";
  return /* @__PURE__ */ p.jsx(
    ca,
    {
      className: "ui-radio-group",
      name: s,
      value: u,
      onValueChange: (d) => c?.(d === r, d),
      children: /* @__PURE__ */ p.jsx(
        Au,
        {
          className: e,
          label: t,
          value: r,
          disabled: a,
          accentColor: i,
          size: n
        }
      )
    }
  );
}
function Sw(e) {
  const { className: t = "", name: n, size: r = "M", value: o, defaultValue: a, items: s, onChange: i } = e, [c, u] = P.useState(a), d = Object.prototype.hasOwnProperty.call(e, "value");
  _e(() => {
    d && u(o);
  }, [d, o]);
  const f = d ? o : c, h = (m) => {
    d || u(m), i?.(m);
  };
  return /* @__PURE__ */ p.jsx(
    ca,
    {
      className: Z("ui-radio-group", t),
      name: n,
      value: f,
      defaultValue: a,
      onValueChange: h,
      children: s.map((m) => /* @__PURE__ */ p.jsx(
        Au,
        {
          label: m.label,
          value: m.value,
          disabled: m.disabled,
          accentColor: m.accentColor,
          size: r
        },
        m.value
      ))
    }
  );
}
function Ew(e) {
  const { tabs: t, value: n, defaultValue: r, size: o = "M", className: a, onSelect: s } = e, i = Object.prototype.hasOwnProperty.call(e, "value"), c = t.find((g) => !g.disabled), u = r ?? c?.value ?? "", [d, f] = P.useState(n ?? u), h = i ? n ?? u : d;
  _e(() => {
    if (i)
      return;
    t.some((v) => v.value === d && !v.disabled) || f(u);
  }, [u, d, i, t]);
  const m = (g) => {
    i || f(g), s?.(g);
  };
  return /* @__PURE__ */ p.jsx(
    xy,
    {
      className: Z("ui-tabs", {
        [`ui-tabs-size--${o}`]: o,
        [a]: a
      }),
      value: h,
      onValueChange: m,
      children: /* @__PURE__ */ p.jsx(Cy, { className: "ui-tabs-list", "aria-label": "Tabs", children: t.map((g) => /* @__PURE__ */ p.jsx(
        Sy,
        {
          className: "ui-tabs-trigger",
          value: g.value,
          disabled: g.disabled,
          children: g.key
        },
        g.value
      )) })
    }
  );
}
let kw = 0;
function Pw({
  label: e,
  type: t = "text",
  className: n = "",
  value: r,
  defaultValue: o,
  isRequired: a,
  disabled: s,
  onChange: i,
  onBlur: c
}) {
  const u = `textfield-${kw++}`, d = P.useRef(null), [f, h] = Pe(!0), m = (g) => {
    const v = g.target.value;
    a && (!v || v === "") && h(!1), c && c(v);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: Z("textfield-container", { [n]: n, disabled: s }), children: [
    e && /* @__PURE__ */ p.jsx(Yc, { htmlFor: u, asChild: !0, children: /* @__PURE__ */ p.jsxs("div", { className: "textfield-label", children: [
      e,
      a && /* @__PURE__ */ p.jsx("span", { className: "required-astrik", children: "*" })
    ] }) }),
    /* @__PURE__ */ p.jsx(
      "input",
      {
        ref: d,
        className: "input",
        type: t,
        id: u,
        defaultValue: o,
        value: r,
        onBlur: m,
        onChange: (g) => {
          const v = g.target.value;
          g.preventDefault(), g.stopPropagation(), v != "" && h(!0), i && i(g.target.value);
        }
      }
    ),
    !f && /* @__PURE__ */ p.jsx("span", { className: "error", children: "Required field is empty" })
  ] });
}
const Iu = {
  "gray-0": {
    key: "gray-0",
    label: "Gray 0",
    cssVar: "--gray-0",
    value: {
      light: "#ffffff",
      dark: "#0b0f19"
    }
  },
  "gray-50": {
    key: "gray-50",
    label: "Gray 50",
    cssVar: "--gray-50",
    value: {
      light: "#f9fafb",
      dark: "#111827"
    }
  },
  "gray-100": {
    key: "gray-100",
    label: "Gray 100",
    cssVar: "--gray-100",
    value: {
      light: "#f3f4f6",
      dark: "#1f2937"
    }
  },
  "gray-200": {
    key: "gray-200",
    label: "Gray 200",
    cssVar: "--gray-200",
    value: {
      light: "#e5e7eb",
      dark: "#273244"
    }
  },
  "gray-300": {
    key: "gray-300",
    label: "Gray 300",
    cssVar: "--gray-300",
    value: {
      light: "#d1d5db",
      dark: "#334155"
    }
  },
  "gray-400": {
    key: "gray-400",
    label: "Gray 400",
    cssVar: "--gray-400",
    value: {
      light: "#9ca3af",
      dark: "#475569"
    }
  },
  "gray-500": {
    key: "gray-500",
    label: "Gray 500",
    cssVar: "--gray-500",
    value: {
      light: "#6b7280",
      dark: "#94a3b8"
    }
  },
  "gray-600": {
    key: "gray-600",
    label: "Gray 600",
    cssVar: "--gray-600",
    value: {
      light: "#4b5563",
      dark: "#cbd5e1"
    }
  },
  "gray-700": {
    key: "gray-700",
    label: "Gray 700",
    cssVar: "--gray-700",
    value: {
      light: "#374151",
      dark: "#e2e8f0"
    }
  },
  "gray-800": {
    key: "gray-800",
    label: "Gray 800",
    cssVar: "--gray-800",
    value: {
      light: "#1f2933",
      dark: "#f1f5f9"
    }
  },
  "gray-900": {
    key: "gray-900",
    label: "Gray 900",
    cssVar: "--gray-900",
    value: {
      light: "#111827",
      dark: "#f8fafc"
    }
  },
  "gray-950": {
    key: "gray-950",
    label: "Gray 950",
    cssVar: "--gray-950",
    value: {
      light: "#0b0f19",
      dark: "#ffffff"
    }
  },
  "blue-50": {
    key: "blue-50",
    label: "Blue 50",
    cssVar: "--blue-50",
    value: {
      light: "#eff6ff",
      dark: "#0b1e3a"
    }
  },
  "blue-100": {
    key: "blue-100",
    label: "Blue 100",
    cssVar: "--blue-100",
    value: {
      light: "#dbeafe",
      dark: "#133a6f"
    }
  },
  "blue-300": {
    key: "blue-300",
    label: "Blue 300",
    cssVar: "--blue-300",
    value: {
      light: "#93c5fd",
      dark: "#60a5fa"
    }
  },
  "blue-500": {
    key: "blue-500",
    label: "Blue 500",
    cssVar: "--blue-500",
    value: {
      light: "#2563eb",
      dark: "#93c5fd"
    }
  },
  "blue-700": {
    key: "blue-700",
    label: "Blue 700",
    cssVar: "--blue-700",
    value: {
      light: "#1e40af",
      dark: "#bfdbfe"
    }
  },
  "purple-50": {
    key: "purple-50",
    label: "Purple 50",
    cssVar: "--purple-50",
    value: {
      light: "#f5f3ff",
      dark: "#1e1033"
    }
  },
  "purple-100": {
    key: "purple-100",
    label: "Purple 100",
    cssVar: "--purple-100",
    value: {
      light: "#ede9fe",
      dark: "#3b1d6a"
    }
  },
  "purple-300": {
    key: "purple-300",
    label: "Purple 300",
    cssVar: "--purple-300",
    value: {
      light: "#c4b5fd",
      dark: "#a78bfa"
    }
  },
  "purple-500": {
    key: "purple-500",
    label: "Purple 500",
    cssVar: "--purple-500",
    value: {
      light: "#7c3aed",
      dark: "#c4b5fd"
    }
  },
  "purple-700": {
    key: "purple-700",
    label: "Purple 700",
    cssVar: "--purple-700",
    value: {
      light: "#5b21b6",
      dark: "#e9d5ff"
    }
  },
  "red-50": {
    key: "red-50",
    label: "Red 50",
    cssVar: "--red-50",
    value: {
      light: "#fef2f2",
      dark: "#2a0c0c"
    }
  },
  "red-100": {
    key: "red-100",
    label: "Red 100",
    cssVar: "--red-100",
    value: {
      light: "#fee2e2",
      dark: "#3f1212"
    }
  },
  "red-300": {
    key: "red-300",
    label: "Red 300",
    cssVar: "--red-300",
    value: {
      light: "#fca5a5",
      dark: "#f87171"
    }
  },
  "red-500": {
    key: "red-500",
    label: "Red 500",
    cssVar: "--red-500",
    value: {
      light: "#dc2626",
      dark: "#fca5a5"
    }
  },
  "red-700": {
    key: "red-700",
    label: "Red 700",
    cssVar: "--red-700",
    value: {
      light: "#7f1d1d",
      dark: "#fecaca"
    }
  },
  "green-50": {
    key: "green-50",
    label: "Green 50",
    cssVar: "--green-50",
    value: {
      light: "#ecfdf5",
      dark: "#022c22"
    }
  },
  "green-100": {
    key: "green-100",
    label: "Green 100",
    cssVar: "--green-100",
    value: {
      light: "#d1fae5",
      dark: "#064e3b"
    }
  },
  "green-300": {
    key: "green-300",
    label: "Green 300",
    cssVar: "--green-300",
    value: {
      light: "#6ee7b7",
      dark: "#34d399"
    }
  },
  "green-500": {
    key: "green-500",
    label: "Green 500",
    cssVar: "--green-500",
    value: {
      light: "#16a34a",
      dark: "#6ee7b7"
    }
  },
  "green-700": {
    key: "green-700",
    label: "Green 700",
    cssVar: "--green-700",
    value: {
      light: "#14532d",
      dark: "#a7f3d0"
    }
  },
  "yellow-50": {
    key: "yellow-50",
    label: "Yellow 50",
    cssVar: "--yellow-50",
    value: {
      light: "#fffbeb",
      dark: "#2e1a00"
    }
  },
  "yellow-100": {
    key: "yellow-100",
    label: "Yellow 100",
    cssVar: "--yellow-100",
    value: {
      light: "#fef3c7",
      dark: "#422006"
    }
  },
  "yellow-300": {
    key: "yellow-300",
    label: "Yellow 300",
    cssVar: "--yellow-300",
    value: {
      light: "#fcd34d",
      dark: "#fbbf24"
    }
  },
  "yellow-500": {
    key: "yellow-500",
    label: "Yellow 500",
    cssVar: "--yellow-500",
    value: {
      light: "#d97706",
      dark: "#fde68a"
    }
  },
  "yellow-700": {
    key: "yellow-700",
    label: "Yellow 700",
    cssVar: "--yellow-700",
    value: {
      light: "#92400e",
      dark: "#fef3c7"
    }
  },
  "orange-50": {
    key: "orange-50",
    label: "Orange 50",
    cssVar: "--orange-50",
    value: {
      light: "#fff7ed",
      dark: "#2a1405"
    }
  },
  "orange-100": {
    key: "orange-100",
    label: "Orange 100",
    cssVar: "--orange-100",
    value: {
      light: "#ffedd5",
      dark: "#3f1d0a"
    }
  },
  "orange-300": {
    key: "orange-300",
    label: "Orange 300",
    cssVar: "--orange-300",
    value: {
      light: "#fdba74",
      dark: "#fb923c"
    }
  },
  "orange-500": {
    key: "orange-500",
    label: "Orange 500",
    cssVar: "--orange-500",
    value: {
      light: "#ea580c",
      dark: "#fdba74"
    }
  },
  "orange-700": {
    key: "orange-700",
    label: "Orange 700",
    cssVar: "--orange-700",
    value: {
      light: "#9a3412",
      dark: "#ffedd5"
    }
  },
  "teal-50": {
    key: "teal-50",
    label: "Teal 50",
    cssVar: "--teal-50",
    value: {
      light: "#f0fdfa",
      dark: "#042f2e"
    }
  },
  "teal-100": {
    key: "teal-100",
    label: "Teal 100",
    cssVar: "--teal-100",
    value: {
      light: "#ccfbf1",
      dark: "#064e4b"
    }
  },
  "teal-300": {
    key: "teal-300",
    label: "Teal 300",
    cssVar: "--teal-300",
    value: {
      light: "#5eead4",
      dark: "#2dd4bf"
    }
  },
  "teal-500": {
    key: "teal-500",
    label: "Teal 500",
    cssVar: "--teal-500",
    value: {
      light: "#0d9488",
      dark: "#5eead4"
    }
  },
  "teal-700": {
    key: "teal-700",
    label: "Teal 700",
    cssVar: "--teal-700",
    value: {
      light: "#115e59",
      dark: "#ccfbf1"
    }
  },
  "cyan-50": {
    key: "cyan-50",
    label: "Cyan 50",
    cssVar: "--cyan-50",
    value: {
      light: "#ecfeff",
      dark: "#042f2e"
    }
  },
  "cyan-100": {
    key: "cyan-100",
    label: "Cyan 100",
    cssVar: "--cyan-100",
    value: {
      light: "#cffafe",
      dark: "#064e4b"
    }
  },
  "cyan-300": {
    key: "cyan-300",
    label: "Cyan 300",
    cssVar: "--cyan-300",
    value: {
      light: "#67e8f9",
      dark: "#22d3ee"
    }
  },
  "cyan-500": {
    key: "cyan-500",
    label: "Cyan 500",
    cssVar: "--cyan-500",
    value: {
      light: "#0891b2",
      dark: "#67e8f9"
    }
  },
  "cyan-700": {
    key: "cyan-700",
    label: "Cyan 700",
    cssVar: "--cyan-700",
    value: {
      light: "#164e63",
      dark: "#cffafe"
    }
  },
  "bg-primary": {
    key: "bg-primary",
    label: "Bg Primary",
    cssVar: "--bg-primary",
    value: {
      light: "var(--gray-50)",
      dark: "var(--gray-0)"
    }
  },
  "bg-secondary": {
    key: "bg-secondary",
    label: "Bg Secondary",
    cssVar: "--bg-secondary",
    value: {
      light: "var(--gray-200)",
      dark: "var(--gray-50)"
    }
  },
  "bg-elevated": {
    key: "bg-elevated",
    label: "Bg Elevated",
    cssVar: "--bg-elevated",
    value: {
      light: "var(--gray-0)",
      dark: "var(--gray-100)"
    }
  },
  "text-primary": {
    key: "text-primary",
    label: "Text Primary",
    cssVar: "--text-primary",
    value: {
      light: "var(--gray-800)",
      dark: "var(--gray-900)"
    }
  },
  "text-secondary": {
    key: "text-secondary",
    label: "Text Secondary",
    cssVar: "--text-secondary",
    value: {
      light: "var(--gray-600)",
      dark: "var(--gray-600)"
    }
  },
  "text-muted": {
    key: "text-muted",
    label: "Text Muted",
    cssVar: "--text-muted",
    value: {
      light: "var(--gray-500)",
      dark: "var(--gray-500)"
    }
  },
  "border-default": {
    key: "border-default",
    label: "Border Default",
    cssVar: "--border-default",
    value: {
      light: "var(--gray-200)",
      dark: "var(--gray-200)"
    }
  },
  "border-subtle": {
    key: "border-subtle",
    label: "Border Subtle",
    cssVar: "--border-subtle",
    value: {
      light: "var(--gray-100)",
      dark: "var(--gray-100)"
    }
  },
  "semantic-success-bg": {
    key: "semantic-success-bg",
    label: "Semantic Success Bg",
    cssVar: "--semantic-success-bg",
    value: {
      light: "var(--green-50)",
      dark: "var(--green-50)"
    }
  },
  "semantic-success-fg": {
    key: "semantic-success-fg",
    label: "Semantic Success Fg",
    cssVar: "--semantic-success-fg",
    value: {
      light: "var(--green-700)",
      dark: "var(--green-700)"
    }
  },
  "semantic-success-border": {
    key: "semantic-success-border",
    label: "Semantic Success Border",
    cssVar: "--semantic-success-border",
    value: {
      light: "var(--green-300)",
      dark: "var(--green-300)"
    }
  },
  "semantic-warning-bg": {
    key: "semantic-warning-bg",
    label: "Semantic Warning Bg",
    cssVar: "--semantic-warning-bg",
    value: {
      light: "var(--yellow-50)",
      dark: "var(--yellow-50)"
    }
  },
  "semantic-warning-fg": {
    key: "semantic-warning-fg",
    label: "Semantic Warning Fg",
    cssVar: "--semantic-warning-fg",
    value: {
      light: "var(--yellow-700)",
      dark: "var(--yellow-700)"
    }
  },
  "semantic-warning-border": {
    key: "semantic-warning-border",
    label: "Semantic Warning Border",
    cssVar: "--semantic-warning-border",
    value: {
      light: "var(--yellow-300)",
      dark: "var(--yellow-300)"
    }
  },
  "semantic-error-bg": {
    key: "semantic-error-bg",
    label: "Semantic Error Bg",
    cssVar: "--semantic-error-bg",
    value: {
      light: "var(--red-50)",
      dark: "var(--red-50)"
    }
  },
  "semantic-error-fg": {
    key: "semantic-error-fg",
    label: "Semantic Error Fg",
    cssVar: "--semantic-error-fg",
    value: {
      light: "var(--red-700)",
      dark: "var(--red-700)"
    }
  },
  "semantic-error-border": {
    key: "semantic-error-border",
    label: "Semantic Error Border",
    cssVar: "--semantic-error-border",
    value: {
      light: "var(--red-300)",
      dark: "var(--red-300)"
    }
  },
  "semantic-info-bg": {
    key: "semantic-info-bg",
    label: "Semantic Info Bg",
    cssVar: "--semantic-info-bg",
    value: {
      light: "var(--blue-50)",
      dark: "var(--blue-50)"
    }
  },
  "semantic-info-fg": {
    key: "semantic-info-fg",
    label: "Semantic Info Fg",
    cssVar: "--semantic-info-fg",
    value: {
      light: "var(--blue-700)",
      dark: "var(--blue-700)"
    }
  },
  "semantic-info-border": {
    key: "semantic-info-border",
    label: "Semantic Info Border",
    cssVar: "--semantic-info-border",
    value: {
      light: "var(--blue-300)",
      dark: "var(--blue-300)"
    }
  },
  "accent-primary": {
    key: "accent-primary",
    label: "Accent Primary",
    cssVar: "--accent-primary",
    value: {
      light: "var(--blue-500)",
      dark: "var(--blue-500)"
    }
  },
  "accent-primary-hover": {
    key: "accent-primary-hover",
    label: "Accent Primary Hover",
    cssVar: "--accent-primary-hover",
    value: {
      light: "var(--blue-700)",
      dark: "var(--blue-700)"
    }
  },
  "accent-secondary": {
    key: "accent-secondary",
    label: "Accent Secondary",
    cssVar: "--accent-secondary",
    value: {
      light: "var(--purple-500)",
      dark: "var(--purple-500)"
    }
  },
  "accent-secondary-hover": {
    key: "accent-secondary-hover",
    label: "Accent Secondary Hover",
    cssVar: "--accent-secondary-hover",
    value: {
      light: "var(--purple-700)",
      dark: "var(--purple-700)"
    }
  },
  "accent-teal": {
    key: "accent-teal",
    label: "Accent Teal",
    cssVar: "--accent-teal",
    value: {
      light: "var(--teal-500)",
      dark: "var(--teal-500)"
    }
  },
  "accent-teal-hover": {
    key: "accent-teal-hover",
    label: "Accent Teal Hover",
    cssVar: "--accent-teal-hover",
    value: {
      light: "var(--teal-700)",
      dark: "var(--teal-700)"
    }
  },
  "accent-success": {
    key: "accent-success",
    label: "Accent Success",
    cssVar: "--accent-success",
    value: {
      light: "var(--green-500)",
      dark: "var(--green-500)"
    }
  },
  "accent-warning": {
    key: "accent-warning",
    label: "Accent Warning",
    cssVar: "--accent-warning",
    value: {
      light: "var(--yellow-500)",
      dark: "var(--yellow-500)"
    }
  },
  "accent-danger": {
    key: "accent-danger",
    label: "Accent Danger",
    cssVar: "--accent-danger",
    value: {
      light: "var(--red-500)",
      dark: "var(--red-500)"
    }
  },
  "accent-info": {
    key: "accent-info",
    label: "Accent Info",
    cssVar: "--accent-info",
    value: {
      light: "var(--cyan-500)",
      dark: "var(--cyan-500)"
    }
  },
  "on-accent-primary": {
    key: "on-accent-primary",
    label: "On Accent Primary",
    cssVar: "--on-accent-primary",
    value: {
      light: "#ffffff",
      dark: "#0b0f19"
    }
  },
  "on-accent-secondary": {
    key: "on-accent-secondary",
    label: "On Accent Secondary",
    cssVar: "--on-accent-secondary",
    value: {
      light: "#ffffff",
      dark: "#0b0f19"
    }
  },
  "on-accent-teal": {
    key: "on-accent-teal",
    label: "On Accent Teal",
    cssVar: "--on-accent-teal",
    value: {
      light: "#ffffff",
      dark: "#0b0f19"
    }
  },
  "on-accent-success": {
    key: "on-accent-success",
    label: "On Accent Success",
    cssVar: "--on-accent-success",
    value: {
      light: "#ffffff",
      dark: "#0b0f19"
    }
  },
  "on-accent-warning": {
    key: "on-accent-warning",
    label: "On Accent Warning",
    cssVar: "--on-accent-warning",
    value: {
      light: "#1f2933",
      dark: "#0b0f19"
    }
  },
  "on-accent-danger": {
    key: "on-accent-danger",
    label: "On Accent Danger",
    cssVar: "--on-accent-danger",
    value: {
      light: "#ffffff",
      dark: "#0b0f19"
    }
  },
  "on-accent-info": {
    key: "on-accent-info",
    label: "On Accent Info",
    cssVar: "--on-accent-info",
    value: {
      light: "#ffffff",
      dark: "#0b0f19"
    }
  }
}, Yn = "#ffffff";
function Es(e) {
  return e?.trim().toLowerCase() || "";
}
function dn(e) {
  return e?.trim().toLowerCase().replace(/^var\(--/, "").replace(/^--/, "").replace(/\)$/, "");
}
function Mw(e, t) {
  const n = dn(e), r = t.find((o) => o.key === n);
  return r ? `var(${r.cssVar})` : e || Yn;
}
function Rw(e, t) {
  const n = dn(e), r = t.find((o) => o.key === n);
  return r ? r.label : e || "Custom Hex Color";
}
function Nw({
  value: e,
  displayValue: t,
  setValue: n
}) {
  const [r, o] = Pe(!1);
  return r ? /* @__PURE__ */ p.jsx(
    Pw,
    {
      className: "color-textfield",
      value: e,
      onChange: n,
      onBlur: () => o(!1)
    }
  ) : /* @__PURE__ */ p.jsx("div", { className: "custom-color-input", onClick: () => o(!0), children: t || e || "Custom Hex Color" });
}
function $C({ value: e, onColorSelect: t }) {
  const [n, r] = Pe(e || Yn), [o, a] = Pe(!1), s = Ce(!0), [i, c] = Pe(
    () => dn(e) || e === void 0 ? "theme" : "custom"
  );
  _e(() => {
    r(e || Yn), e !== void 0 && c(dn(e) ? "theme" : "custom");
  }, [e]), _e(() => {
    o && (s.current = !0);
  }, [o]);
  const u = typeof document > "u" ? [] : (() => {
    const v = document.querySelector(
      ".ui-provider.ui-light, .ui-provider.ui-dark"
    ) ?? document.body, y = window.getComputedStyle(v);
    return Object.values(Iu).map((x) => ({
      ...x,
      resolvedValue: y.getPropertyValue(x.cssVar).trim() || Yn
    }));
  })(), d = Es(n), f = dn(n), h = u.find(
    (v) => v.key === f || Es(v.resolvedValue) === d
  ), m = Mw(n, u), g = Rw(n, u);
  return /* @__PURE__ */ p.jsx("div", { className: "color-picker", children: /* @__PURE__ */ p.jsxs(
    xa,
    {
      open: o,
      onOpenChange: a,
      onClose: () => {
        s.current && t(n);
      },
      children: [
        /* @__PURE__ */ p.jsx(jr, { children: /* @__PURE__ */ p.jsx("div", { className: Z("color-picker-trigger"), children: /* @__PURE__ */ p.jsxs("div", { className: "color-swatch", children: [
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: "color-tile",
              style: { backgroundColor: m }
            }
          ),
          /* @__PURE__ */ p.jsx("span", { children: g })
        ] }) }) }),
        /* @__PURE__ */ p.jsx(Ca, { align: "start", alignOffset: 4, children: /* @__PURE__ */ p.jsxs("div", { className: "color-picker-content", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "selected-color", children: [
            /* @__PURE__ */ p.jsx(
              "div",
              {
                className: "color-preview",
                style: { backgroundColor: m }
              }
            ),
            /* @__PURE__ */ p.jsx(
              Nw,
              {
                value: n,
                displayValue: g,
                setValue: r
              }
            )
          ] }),
          /* @__PURE__ */ p.jsx(
            Ew,
            {
              className: "color-picker-tabs",
              size: "S",
              value: i,
              onSelect: c,
              tabs: [
                { key: "Theme", value: "theme" },
                { key: "Custom", value: "custom" }
              ]
            }
          ),
          i === "theme" ? /* @__PURE__ */ p.jsx(
            Sw,
            {
              className: "theme-color-grid",
              size: "S",
              value: h?.key,
              onChange: (v) => {
                const y = u.find(
                  (x) => x.key === v
                );
                if (y) {
                  const x = y.key;
                  s.current = !1, c("theme"), r(x), t(x), a(!1);
                }
              },
              items: u.map((v) => ({
                value: v.key,
                label: /* @__PURE__ */ p.jsxs("span", { className: "theme-color-option-label", children: [
                  /* @__PURE__ */ p.jsx("span", { className: "theme-color-option-name", children: v.label }),
                  /* @__PURE__ */ p.jsx("span", { className: "theme-color-option-swatch-wrap", children: /* @__PURE__ */ p.jsx(
                    "span",
                    {
                      className: "theme-color-option-swatch",
                      style: {
                        backgroundColor: `var(${v.cssVar})`
                      }
                    }
                  ) })
                ] })
              }))
            }
          ) : /* @__PURE__ */ p.jsx(
            Cw,
            {
              className: "custom-color-picker",
              color: m,
              onChange: (v) => {
                c("custom"), r(v);
              }
            }
          )
        ] }) })
      ]
    }
  ) });
}
const VC = P.forwardRef(
  ({ children: e, className: t = "", ...n }, r) => /* @__PURE__ */ p.jsx(
    "div",
    {
      className: Z("ui-container", {
        [t]: t
      }),
      ref: r,
      ...n,
      children: e
    }
  )
);
function Ow(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const _w = {}, sn = {};
function Xe(e, t) {
  try {
    const r = (_w[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in sn ? sn[r] : ks(r, r.split(":"));
  } catch {
    if (e in sn) return sn[e];
    const n = e?.match(Tw);
    return n ? ks(e, n.slice(1)) : NaN;
  }
}
const Tw = /([+-]\d\d):?(\d\d)?/;
function ks(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return sn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class Ge extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Xe(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), ju(this, t)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new Ge(...n, t) : new Ge(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new Ge(+this, t);
  }
  getTimezoneOffset() {
    const t = -Xe(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), tr(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new Ge(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Ps = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Ps.test(e)) return;
  const t = e.replace(Ps, "$1UTC");
  Ge.prototype[t] && (e.startsWith("get") ? Ge.prototype[e] = function() {
    return this.internal[t]();
  } : (Ge.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Dw(this), +this;
  }, Ge.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), tr(this), +this;
  }));
});
function tr(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - // Round after converting minutes to seconds to avoid fractional offset
  // precision errors from historical offsets.
  Math.round(-Xe(e.timeZone, e) * 60));
}
function Dw(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), ju(e);
}
function ju(e, t) {
  const n = Array.isArray(t) ? Aw(t) : +e.internal, r = Xe(e.timeZone, e), o = r > 0 ? Math.floor(r) : Math.ceil(r), a = /* @__PURE__ */ new Date(+e);
  a.setUTCHours(a.getUTCHours() - 1);
  const s = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), i = -(/* @__PURE__ */ new Date(+a)).getTimezoneOffset(), c = s - i;
  let u = s;
  if (c && s !== o) {
    const _ = Date.prototype.getHours.apply(e), A = Array.isArray(t) ? t[3] || 0 : e.internal.getUTCHours();
    if (_ !== A) {
      const N = /* @__PURE__ */ new Date(+e), j = s - o;
      j && N.setUTCMinutes(N.getUTCMinutes() + j);
      const F = Xe(e.timeZone, N);
      (F > 0 ? Math.floor(F) : Math.ceil(F)) === o && (u = i);
    }
  }
  const d = u - o;
  d && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + d);
  const f = /* @__PURE__ */ new Date(+e);
  f.setUTCSeconds(0);
  const h = s > 0 ? f.getSeconds() : (f.getSeconds() - 60) % 60, m = Math.round(-(Xe(e.timeZone, e) * 60)) % 60;
  (m || h) && Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + m + h);
  const g = Xe(e.timeZone, e), v = g > 0 ? Math.floor(g) : Math.ceil(g), x = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - v, w = v !== o, b = x - d, C = v - o, S = n - v * 60 * 1e3, E = C > 0 && Ms(e) - n === C * 60 * 1e3 && Ms(e, S) !== n;
  if (w && b && !E) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + b);
    const _ = Xe(e.timeZone, e), A = _ > 0 ? Math.floor(_) : Math.ceil(_), N = v - A;
    N && b < 0 && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + N);
  }
  tr(e);
  const O = (t ? n : n + m * 1e3) - +e.internal;
  O && Math.abs(O) < 1800 * 1e3 && (Date.prototype.setTime.call(e, +e + O), tr(e));
}
function Aw(e) {
  return Date.UTC(e[0], e.length > 1 ? e[1] : 0, e.length > 2 ? e[2] : 1, ...e.slice(3));
}
function Ms(e, t) {
  const n = new Date(t ?? +e);
  return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-Xe(e.timeZone, n) * 60)), +n;
}
class ye extends Ge {
  //#region static
  static tz(t, ...n) {
    return n.length ? new ye(...n, t) : new ye(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), o = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, o] = this.internal.toUTCString().split(" ");
    return `${t?.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${Ow(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(t) {
    return new ye(+this, t);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new ye(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Fu = 6048e5, Iw = 864e5, Rs = /* @__PURE__ */ Symbol.for("constructDateFrom");
function pe(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Rs in e ? e[Rs](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function oe(e, t) {
  return pe(t || e, e);
}
function Wu(e, t, n) {
  const r = oe(e, n?.in);
  return isNaN(t) ? pe(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Lu(e, t, n) {
  const r = oe(e, n?.in);
  if (isNaN(t)) return pe(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = pe(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let jw = {};
function Pn() {
  return jw;
}
function Vt(e, t) {
  const n = Pn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = oe(e, t?.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function mn(e, t) {
  return Vt(e, { ...t, weekStartsOn: 1 });
}
function $u(e, t) {
  const n = oe(e, t?.in), r = n.getFullYear(), o = pe(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = mn(o), s = pe(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = mn(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Ns(e) {
  const t = oe(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Xt(e, ...t) {
  const n = pe.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function vn(e, t) {
  const n = oe(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Sa(e, t, n) {
  const [r, o] = Xt(
    n?.in,
    e,
    t
  ), a = vn(r), s = vn(o), i = +a - Ns(a), c = +s - Ns(s);
  return Math.round((i - c) / Iw);
}
function Fw(e, t) {
  const n = $u(e, t), r = pe(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), mn(r);
}
function Ww(e, t, n) {
  return Wu(e, t * 7, n);
}
function Lw(e, t, n) {
  return Lu(e, t * 12, n);
}
function $w(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = pe.bind(null, o));
    const a = oe(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), pe(r, n || NaN);
}
function Vw(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = pe.bind(null, o));
    const a = oe(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), pe(r, n || NaN);
}
function Bw(e, t, n) {
  const [r, o] = Xt(
    n?.in,
    e,
    t
  );
  return +vn(r) == +vn(o);
}
function Vu(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Yw(e) {
  return !(!Vu(e) && typeof e != "number" || isNaN(+oe(e)));
}
function Bu(e, t, n) {
  const [r, o] = Xt(
    n?.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function Hw(e, t) {
  const n = oe(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Yu(e, t) {
  const [n, r] = Xt(e, t.start, t.end);
  return { start: n, end: r };
}
function Gw(e, t) {
  const { start: n, end: r } = Yu(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(pe(n, s)), s.setMonth(s.getMonth() + i);
  return o ? c.reverse() : c;
}
function Uw(e, t) {
  const n = oe(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function zw(e, t) {
  const n = oe(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Hu(e, t) {
  const n = oe(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Kw(e, t) {
  const { start: n, end: r } = Yu(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(pe(n, s)), s.setFullYear(s.getFullYear() + i);
  return o ? c.reverse() : c;
}
function Gu(e, t) {
  const n = Pn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = oe(e, t?.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function qw(e, t) {
  return Gu(e, { ...t, weekStartsOn: 1 });
}
const Xw = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Zw = (e, t, n) => {
  let r;
  const o = Xw[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function oo(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Qw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Jw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, e0 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, t0 = {
  date: oo({
    formats: Qw,
    defaultWidth: "full"
  }),
  time: oo({
    formats: Jw,
    defaultWidth: "full"
  }),
  dateTime: oo({
    formats: e0,
    defaultWidth: "full"
  })
}, n0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, r0 = (e, t, n, r) => n0[e];
function nn(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n?.width ? String(n.width) : s;
      o = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n?.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const o0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, a0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, s0 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, i0 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, c0 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, l0 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, u0 = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, d0 = {
  ordinalNumber: u0,
  era: nn({
    values: o0,
    defaultWidth: "wide"
  }),
  quarter: nn({
    values: a0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: nn({
    values: s0,
    defaultWidth: "wide"
  }),
  day: nn({
    values: i0,
    defaultWidth: "wide"
  }),
  dayPeriod: nn({
    values: c0,
    defaultWidth: "wide",
    formattingValues: l0,
    defaultFormattingWidth: "wide"
  })
};
function rn(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? p0(i, (f) => f.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      f0(i, (f) => f.test(s))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(u)
    ) : u;
    const d = t.slice(s.length);
    return { value: u, rest: d };
  };
}
function f0(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function p0(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function h0(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(o.length);
    return { value: s, rest: i };
  };
}
const m0 = /^(\d+)(th|st|nd|rd)?/i, v0 = /\d+/i, g0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, y0 = {
  any: [/^b/i, /^(a|c)/i]
}, b0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, w0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, x0 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, C0 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, S0 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, E0 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, k0 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, P0 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, M0 = {
  ordinalNumber: h0({
    matchPattern: m0,
    parsePattern: v0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: rn({
    matchPatterns: g0,
    defaultMatchWidth: "wide",
    parsePatterns: y0,
    defaultParseWidth: "any"
  }),
  quarter: rn({
    matchPatterns: b0,
    defaultMatchWidth: "wide",
    parsePatterns: w0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: rn({
    matchPatterns: x0,
    defaultMatchWidth: "wide",
    parsePatterns: C0,
    defaultParseWidth: "any"
  }),
  day: rn({
    matchPatterns: S0,
    defaultMatchWidth: "wide",
    parsePatterns: E0,
    defaultParseWidth: "any"
  }),
  dayPeriod: rn({
    matchPatterns: k0,
    defaultMatchWidth: "any",
    parsePatterns: P0,
    defaultParseWidth: "any"
  })
}, Dt = {
  code: "en-US",
  formatDistance: Zw,
  formatLong: t0,
  formatRelative: r0,
  localize: d0,
  match: M0,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function R0(e, t) {
  const n = oe(e, t?.in);
  return Sa(n, Hu(n)) + 1;
}
function Ea(e, t) {
  const n = oe(e, t?.in), r = +mn(n) - +Fw(n);
  return Math.round(r / Fu) + 1;
}
function Uu(e, t) {
  const n = oe(e, t?.in), r = n.getFullYear(), o = Pn(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, s = pe(t?.in || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = Vt(s, t), c = pe(t?.in || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const u = Vt(c, t);
  return +n >= +i ? r + 1 : +n >= +u ? r : r - 1;
}
function N0(e, t) {
  const n = Pn(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = Uu(e, t), a = pe(t?.in || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Vt(a, t);
}
function ka(e, t) {
  const n = oe(e, t?.in), r = +Vt(n, t) - +N0(n, t);
  return Math.round(r / Fu) + 1;
}
function re(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const nt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return re(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : re(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return re(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return re(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return re(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return re(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return re(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return re(o, t.length);
  }
}, _t = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Os = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return nt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Uu(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return re(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : re(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = $u(e);
    return re(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return re(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return re(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return re(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return nt.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return re(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = ka(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : re(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ea(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : re(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : nt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = R0(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : re(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return re(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return re(a, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return re(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = _t.noon : r === 0 ? o = _t.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = _t.evening : r >= 12 ? o = _t.afternoon : r >= 4 ? o = _t.morning : o = _t.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return nt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : nt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : re(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : re(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : nt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : nt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return nt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Ts(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return gt(r);
      // Hours and minutes with `:` delimiter
      default:
        return gt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Ts(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return gt(r);
      // Hours and minutes with `:` delimiter
      default:
        return gt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + _s(r, ":");
      default:
        return "GMT" + gt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + _s(r, ":");
      default:
        return "GMT" + gt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return re(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return re(+e, t.length);
  }
};
function _s(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + re(a, 2);
}
function Ts(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + re(Math.abs(e) / 60, 2) : gt(e, t);
}
function gt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = re(Math.trunc(r / 60), 2), a = re(r % 60, 2);
  return n + o + t + a;
}
const Ds = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}, zu = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}, O0 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Ds(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Ds(r, t)).replace("{{time}}", zu(o, t));
}, _0 = {
  p: zu,
  P: O0
}, T0 = /^D+$/, D0 = /^Y+$/, A0 = ["D", "DD", "YY", "YYYY"];
function I0(e) {
  return T0.test(e);
}
function j0(e) {
  return D0.test(e);
}
function F0(e, t, n) {
  const r = W0(e, t, n);
  if (console.warn(r), A0.includes(e)) throw new RangeError(r);
}
function W0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const L0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, $0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, V0 = /^'([^]*?)'?$/, B0 = /''/g, Y0 = /[a-zA-Z]/;
function ot(e, t, n) {
  const r = Pn(), o = n?.locale ?? r.locale ?? Dt, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, s = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = oe(e, n?.in);
  if (!Yw(i))
    throw new RangeError("Invalid time value");
  let c = t.match($0).map((d) => {
    const f = d[0];
    if (f === "p" || f === "P") {
      const h = _0[f];
      return h(d, o.formatLong);
    }
    return d;
  }).join("").match(L0).map((d) => {
    if (d === "''")
      return { isToken: !1, value: "'" };
    const f = d[0];
    if (f === "'")
      return { isToken: !1, value: H0(d) };
    if (Os[f])
      return { isToken: !0, value: d };
    if (f.match(Y0))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: d };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return c.map((d) => {
    if (!d.isToken) return d.value;
    const f = d.value;
    (!n?.useAdditionalWeekYearTokens && j0(f) || !n?.useAdditionalDayOfYearTokens && I0(f)) && F0(f, t, String(e));
    const h = Os[f[0]];
    return h(i, f, o.localize, u);
  }).join("");
}
function H0(e) {
  const t = e.match(V0);
  return t ? t[1].replace(B0, "'") : e;
}
function G0(e, t) {
  const n = oe(e, t?.in), r = n.getFullYear(), o = n.getMonth(), a = pe(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function U0(e, t) {
  return oe(e, t?.in).getMonth();
}
function z0(e, t) {
  return oe(e, t?.in).getFullYear();
}
function K0(e, t) {
  return +oe(e) > +oe(t);
}
function q0(e, t) {
  return +oe(e) < +oe(t);
}
function X0(e, t, n) {
  const [r, o] = Xt(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Z0(e, t, n) {
  const [r, o] = Xt(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function Q0(e, t, n) {
  const r = oe(e, n?.in), o = r.getFullYear(), a = r.getDate(), s = pe(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = G0(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function J0(e, t, n) {
  const r = oe(e, n?.in);
  return isNaN(+r) ? pe(e, NaN) : (r.setFullYear(t), r);
}
const As = 5, ex = 4;
function tx(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, As * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? As : ex;
}
function Ku(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function nx(e, t) {
  const n = Ku(e, t), r = tx(e, t);
  return t.addDays(n, r * 7 - 1);
}
const qu = {
  ...Dt,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (s, i) => ot(s, i, { locale: Dt, ...n });
      let a = o(e, "PPPP");
      return t.today && (a = `Today, ${a}`), t.selected && (a = `${a}, selected`), a;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (e) => `Week ${e}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => ot(o, a, { locale: Dt, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (s, i) => ot(s, i, { locale: Dt, ...n });
      let a = o(e, "PPPP");
      return t?.today && (a = `Today, ${a}`), a;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => ot(o, a, { locale: Dt, ...t }), r(e, "cccc");
    }
  }
};
class Re {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? ye.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, a) => this.overrides?.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new ye(r, o, a, this.options.timeZone) : new Date(r, o, a), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : Wu(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : Lu(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : Ww(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : Lw(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Sa(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Bu(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Gw(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Kw(r), a = new Set(o.map((i) => this.getYear(i)));
      if (a.size === o.length)
        return o;
      const s = [];
      return a.forEach((i) => {
        s.push(new Date(i, 0, 1));
      }), s;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : nx(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : qw(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : Hw(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : Gu(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : zw(r), this.format = (r, o, a) => {
      const s = this.overrides?.format ? this.overrides.format(r, o, this.options) : ot(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : Ea(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : U0(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : z0(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : ka(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : K0(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : q0(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : Vu(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : Bw(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : X0(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : Z0(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : $w(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : Vw(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : Q0(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : J0(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Ku(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : vn(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : mn(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : Uw(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : Vt(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : Hu(r), this.options = { locale: qu, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = n.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const t = this.options.locale?.code;
    return t && Re.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n?.code;
    if (a && Re.yearFirstLocales.has(a))
      try {
        return new Intl.DateTimeFormat(a, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const s = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, s);
  }
}
Re.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const qe = new Re();
class Xu {
  constructor(t, n, r = qe) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r, this.isoDate = r.format(t, "yyyy-MM-dd"), this.displayMonthId = r.format(n, "yyyy-MM"), this.dateMonthId = r.format(t, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class rx {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class ox {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function ax(e) {
  return P.createElement("button", { ...e });
}
function sx(e) {
  return P.createElement("span", { ...e });
}
function ix(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    P.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && P.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && P.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && P.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && P.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function cx(e) {
  const { day: t, modifiers: n, ...r } = e;
  return P.createElement("td", { ...r });
}
function lx(e) {
  const { day: t, modifiers: n, ...r } = e, o = P.useRef(null);
  return P.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), P.createElement("button", { ref: o, ...r });
}
var B;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(B || (B = {}));
var ie;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(ie || (ie = {}));
var je;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(je || (je = {}));
var Ee;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ee || (Ee = {}));
function ux(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[B.Dropdown], n].join(" "), i = t?.find(({ value: c }) => c === a.value);
  return P.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[B.DropdownRoot] },
    P.createElement(r.Select, { className: s, ...a }, t?.map(({ value: c, label: u, disabled: d }) => P.createElement(r.Option, { key: c, value: c, disabled: d }, u))),
    P.createElement(
      "span",
      { className: o[B.CaptionLabel], "aria-hidden": !0 },
      i?.label,
      P.createElement(r.Chevron, { orientation: "down", size: 18, className: o[B.Chevron] })
    )
  );
}
function dx(e) {
  return P.createElement("div", { ...e });
}
function fx(e) {
  return P.createElement("div", { ...e });
}
function px(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return P.createElement("div", { ...r }, e.children);
}
function hx(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return P.createElement("div", { ...r });
}
function mx(e) {
  return P.createElement("table", { ...e });
}
function vx(e) {
  return P.createElement("div", { ...e });
}
const Zu = $d(void 0);
function Mn() {
  const e = Vd(Zu);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function gx(e) {
  const { components: t } = Mn();
  return P.createElement(t.Dropdown, { ...e });
}
function yx(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: c, labelNext: u } } = Mn(), d = ve((h) => {
    o && n?.(h);
  }, [o, n]), f = ve((h) => {
    r && t?.(h);
  }, [r, t]);
  return P.createElement(
    "nav",
    { ...a },
    P.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[B.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: f },
      P.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[B.Chevron], orientation: "left" })
    ),
    P.createElement(
      s.NextMonthButton,
      { type: "button", className: i[B.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": u(o), onClick: d },
      P.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[B.Chevron] })
    )
  );
}
function bx(e) {
  const { components: t } = Mn();
  return P.createElement(t.Button, { ...e });
}
function wx(e) {
  return P.createElement("option", { ...e });
}
function xx(e) {
  const { components: t } = Mn();
  return P.createElement(t.Button, { ...e });
}
function Cx(e) {
  const { rootRef: t, ...n } = e;
  return P.createElement("div", { ...n, ref: t });
}
function Sx(e) {
  return P.createElement("select", { ...e });
}
function Ex(e) {
  const { week: t, ...n } = e;
  return P.createElement("tr", { ...n });
}
function kx(e) {
  return P.createElement("th", { ...e });
}
function Px(e) {
  return P.createElement(
    "thead",
    { "aria-hidden": !0 },
    P.createElement("tr", { ...e })
  );
}
function Mx(e) {
  const { week: t, ...n } = e;
  return P.createElement("th", { ...n });
}
function Rx(e) {
  return P.createElement("th", { ...e });
}
function Nx(e) {
  return P.createElement("tbody", { ...e });
}
function Ox(e) {
  const { components: t } = Mn();
  return P.createElement(t.Dropdown, { ...e });
}
const _x = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: ax,
  CaptionLabel: sx,
  Chevron: ix,
  Day: cx,
  DayButton: lx,
  Dropdown: ux,
  DropdownNav: dx,
  Footer: fx,
  Month: px,
  MonthCaption: hx,
  MonthGrid: mx,
  Months: vx,
  MonthsDropdown: gx,
  Nav: yx,
  NextMonthButton: bx,
  Option: wx,
  PreviousMonthButton: xx,
  Root: Cx,
  Select: Sx,
  Week: Ex,
  WeekNumber: Mx,
  WeekNumberHeader: Rx,
  Weekday: kx,
  Weekdays: Px,
  Weeks: Nx,
  YearsDropdown: Ox
}, Symbol.toStringTag, { value: "Module" }));
function Ze(e, t, n = !1, r = qe) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function Pa(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Fr(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Ma(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Ra(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Qu(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Ju(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Qe(e, t, n = qe) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Ju(i, n))
      return i.some((c) => o(e, c));
    if (Fr(i))
      return Ze(i, e, !1, n);
    if (Qu(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Pa(i)) {
      const c = a(i.before, e), u = a(i.after, e), d = c > 0, f = u < 0;
      return s(i.before, i.after) ? f && d : d || f;
    }
    return Ma(i) ? a(e, i.after) > 0 : Ra(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function Tx(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: c, broadcastCalendar: u, today: d = o.today() } = t, { isSameDay: f, isSameMonth: h, startOfMonth: m, isBefore: g, endOfMonth: v, isAfter: y } = o, x = n && m(n), w = r && v(r), b = {
    [ie.focused]: [],
    [ie.outside]: [],
    [ie.disabled]: [],
    [ie.hidden]: [],
    [ie.today]: []
  }, C = {};
  for (const S of e) {
    const { date: E, displayMonth: M } = S, O = !!(M && !h(E, M)), _ = !!(x && g(E, x)), A = !!(w && y(E, w)), N = !!(a && Qe(E, a, o)), j = !!(s && Qe(E, s, o)) || _ || A || // Broadcast calendar will show outside days as default
    !u && !c && O || u && c === !1 && O, F = f(E, d);
    O && b.outside.push(S), N && b.disabled.push(S), j && b.hidden.push(S), F && b.today.push(S), i && Object.keys(i).forEach((R) => {
      const Y = i?.[R];
      Y && Qe(E, Y, o) && (C[R] ? C[R].push(S) : C[R] = [S]);
    });
  }
  return (S) => {
    const E = {
      [ie.focused]: !1,
      [ie.disabled]: !1,
      [ie.hidden]: !1,
      [ie.outside]: !1,
      [ie.today]: !1
    }, M = {};
    for (const O in b) {
      const _ = b[O];
      E[O] = _.some((A) => A === S);
    }
    for (const O in C)
      M[O] = C[O].some((_) => _ === S);
    return {
      ...E,
      // custom modifiers should override all the previous ones
      ...M
    };
  };
}
function Dx(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[ie[a]] ? o.push(t[ie[a]]) : t[je[a]] && o.push(t[je[a]]), o), [t[B.Day]]);
}
function Ax(e) {
  return {
    ..._x,
    ...e
  };
}
function Ix(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function jx() {
  const e = {};
  for (const t in B)
    e[B[t]] = `rdp-${B[t]}`;
  for (const t in ie)
    e[ie[t]] = `rdp-${ie[t]}`;
  for (const t in je)
    e[je[t]] = `rdp-${je[t]}`;
  for (const t in Ee)
    e[Ee[t]] = `rdp-${Ee[t]}`;
  return e;
}
function ed(e, t, n) {
  return (n ?? new Re(t)).formatMonthYear(e);
}
const Fx = ed;
function Wx(e, t, n) {
  return (n ?? new Re(t)).format(e, "d");
}
function Lx(e, t = qe) {
  return t.format(e, "LLLL");
}
function $x(e, t, n) {
  return (n ?? new Re(t)).format(e, "cccccc");
}
function Vx(e, t = qe) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function Bx() {
  return "";
}
function td(e, t = qe) {
  return t.format(e, "yyyy");
}
const Yx = td, Hx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: ed,
  formatDay: Wx,
  formatMonthCaption: Fx,
  formatMonthDropdown: Lx,
  formatWeekNumber: Vx,
  formatWeekNumberHeader: Bx,
  formatWeekdayName: $x,
  formatYearCaption: Yx,
  formatYearDropdown: td
}, Symbol.toStringTag, { value: "Module" }));
function Gx(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...Hx,
    ...e
  };
}
function Na(e, t, n, r) {
  let o = (r ?? new Re(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const Ux = Na;
function Oa(e, t, n) {
  return (n ?? new Re(t)).formatMonthYear(e);
}
const zx = Oa;
function nd(e, t, n, r) {
  let o = (r ?? new Re(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function rd(e) {
  return "Choose the Month";
}
function od() {
  return "";
}
const Kx = "Go to the Next Month";
function ad(e, t) {
  return Kx;
}
function sd(e) {
  return "Go to the Previous Month";
}
function id(e, t, n) {
  return (n ?? new Re(t)).format(e, "cccc");
}
function cd(e, t) {
  return `Week ${e}`;
}
function ld(e) {
  return "Week Number";
}
function ud(e) {
  return "Choose the Year";
}
const qx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: zx,
  labelDay: Ux,
  labelDayButton: Na,
  labelGrid: Oa,
  labelGridcell: nd,
  labelMonthDropdown: rd,
  labelNav: od,
  labelNext: ad,
  labelPrevious: sd,
  labelWeekNumber: cd,
  labelWeekNumberHeader: ld,
  labelWeekday: id,
  labelYearDropdown: ud
}, Symbol.toStringTag, { value: "Module" })), Ae = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function Xx(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...qx,
    ...e ?? {},
    labelDayButton: Ae(Na, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: Ae(rd, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: Ae(ad, e?.labelNext, n.labelNext),
    labelPrevious: Ae(sd, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: Ae(cd, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: Ae(ud, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: Ae(Oa, e?.labelGrid, n.labelGrid),
    labelGridcell: Ae(nd, e?.labelGridcell, n.labelGridcell),
    labelNav: Ae(od, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: Ae(ld, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: Ae(id, e?.labelWeekday, n.labelWeekday)
  };
}
function Zx(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: c, getMonth: u } = o;
  return c({
    start: s(e),
    end: i(e)
  }).map((h) => {
    const m = r.formatMonthDropdown(h, o), g = u(h), v = t && h < a(t) || n && h > a(n) || !1;
    return { value: g, label: m, disabled: v };
  });
}
function Qx(e, t = {}, n = {}) {
  let r = { ...t?.[B.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function Jx(e, t, n, r) {
  const o = r ?? e.today(), a = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), s = [];
  for (let i = 0; i < 7; i++) {
    const c = e.addDays(a, i);
    s.push(c);
  }
  return s;
}
function eC(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: s, eachYearOfInterval: i, getYear: c } = r, u = a(e), d = s(t), f = i({ start: u, end: d });
  return o && f.reverse(), f.map((h) => {
    const m = n.formatYearDropdown(h, r);
    return {
      value: c(h),
      label: m,
      disabled: !1
    };
  });
}
function tC(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, o = n ?? r?.options?.weekStartsOn ?? 0, a = (i) => {
    const c = typeof i == "number" || typeof i == "string" ? new Date(i) : i;
    return new ye(c.getFullYear(), c.getMonth(), c.getDate(), 12, 0, 0, e);
  }, s = (i) => {
    const c = a(i);
    return new Date(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => a(ye.tz(e)),
    newDate: (i, c, u) => new ye(i, c, u, 12, 0, 0, e),
    startOfDay: (i) => a(i),
    startOfWeek: (i, c) => {
      const u = a(i), d = c?.weekStartsOn ?? o, f = (u.getDay() - d + 7) % 7;
      return u.setDate(u.getDate() - f), u;
    },
    startOfISOWeek: (i) => {
      const c = a(i), u = (c.getDay() - 1 + 7) % 7;
      return c.setDate(c.getDate() - u), c;
    },
    startOfMonth: (i) => {
      const c = a(i);
      return c.setDate(1), c;
    },
    startOfYear: (i) => {
      const c = a(i);
      return c.setMonth(0, 1), c;
    },
    endOfWeek: (i, c) => {
      const u = a(i), h = (((c?.weekStartsOn ?? o) + 6) % 7 - u.getDay() + 7) % 7;
      return u.setDate(u.getDate() + h), u;
    },
    endOfISOWeek: (i) => {
      const c = a(i), u = (7 - c.getDay()) % 7;
      return c.setDate(c.getDate() + u), c;
    },
    endOfMonth: (i) => {
      const c = a(i);
      return c.setMonth(c.getMonth() + 1, 0), c;
    },
    endOfYear: (i) => {
      const c = a(i);
      return c.setMonth(11, 31), c;
    },
    eachMonthOfInterval: (i) => {
      const c = a(i.start), u = a(i.end), d = [], f = new ye(c.getFullYear(), c.getMonth(), 1, 12, 0, 0, e), h = u.getFullYear() * 12 + u.getMonth();
      for (; f.getFullYear() * 12 + f.getMonth() <= h; )
        d.push(new ye(f, e)), f.setMonth(f.getMonth() + 1, 1);
      return d;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (i, c) => {
      const u = a(i);
      return u.setDate(u.getDate() + c), u;
    },
    addWeeks: (i, c) => {
      const u = a(i);
      return u.setDate(u.getDate() + c * 7), u;
    },
    addMonths: (i, c) => {
      const u = a(i);
      return u.setMonth(u.getMonth() + c), u;
    },
    addYears: (i, c) => {
      const u = a(i);
      return u.setFullYear(u.getFullYear() + c), u;
    },
    eachYearOfInterval: (i) => {
      const c = a(i.start), u = a(i.end), d = [], f = new ye(c.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; f.getFullYear() <= u.getFullYear(); )
        d.push(new ye(f, e)), f.setFullYear(f.getFullYear() + 1, 0, 1);
      return d;
    },
    getWeek: (i, c) => {
      const u = s(i);
      return ka(u, {
        weekStartsOn: c?.weekStartsOn ?? o,
        firstWeekContainsDate: c?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (i) => {
      const c = s(i);
      return Ea(c);
    },
    differenceInCalendarDays: (i, c) => {
      const u = s(i), d = s(c);
      return Sa(u, d);
    },
    differenceInCalendarMonths: (i, c) => {
      const u = s(i), d = s(c);
      return Bu(u, d);
    }
  };
}
const Rn = (e) => e instanceof HTMLElement ? e : null, ao = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], nC = (e) => Rn(e.querySelector("[data-animated-month]")), so = (e) => Rn(e.querySelector("[data-animated-caption]")), io = (e) => Rn(e.querySelector("[data-animated-weeks]")), rC = (e) => Rn(e.querySelector("[data-animated-nav]")), oC = (e) => Rn(e.querySelector("[data-animated-weekdays]"));
function aC(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Ce(null), i = Ce(r), c = Ce(!1);
  nr(() => {
    const u = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || u.length === 0 || r.length !== u.length)
      return;
    const d = a.isSameMonth(r[0].date, u[0].date), f = a.isAfter(r[0].date, u[0].date), h = f ? n[Ee.caption_after_enter] : n[Ee.caption_before_enter], m = f ? n[Ee.weeks_after_enter] : n[Ee.weeks_before_enter], g = s.current, v = e.current.cloneNode(!0);
    if (v instanceof HTMLElement ? (ao(v).forEach((b) => {
      if (!(b instanceof HTMLElement))
        return;
      const C = nC(b);
      C && b.contains(C) && b.removeChild(C);
      const S = so(b);
      S && S.classList.remove(h);
      const E = io(b);
      E && E.classList.remove(m);
    }), s.current = v) : s.current = null, c.current || d || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const y = g instanceof HTMLElement ? ao(g) : [], x = ao(e.current);
    if (x?.every((w) => w instanceof HTMLElement) && y && y.every((w) => w instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const w = rC(e.current);
      w && (w.style.zIndex = "1"), x.forEach((b, C) => {
        const S = y[C];
        if (!S)
          return;
        b.style.position = "relative", b.style.overflow = "hidden";
        const E = so(b);
        E && E.classList.add(h);
        const M = io(b);
        M && M.classList.add(m);
        const O = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), w && (w.style.zIndex = ""), E && E.classList.remove(h), M && M.classList.remove(m), b.style.position = "", b.style.overflow = "", b.contains(S) && b.removeChild(S);
        };
        S.style.pointerEvents = "none", S.style.position = "absolute", S.style.overflow = "hidden", S.setAttribute("aria-hidden", "true");
        const _ = oC(S);
        _ && (_.style.opacity = "0");
        const A = so(S);
        A && (A.classList.add(f ? n[Ee.caption_before_exit] : n[Ee.caption_after_exit]), A.addEventListener("animationend", O));
        const N = io(S);
        N && N.classList.add(f ? n[Ee.weeks_before_exit] : n[Ee.weeks_after_exit]), b.insertBefore(S, b.firstChild);
      });
    }
  });
}
function sC(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: u, differenceInCalendarDays: d, differenceInCalendarMonths: f, endOfBroadcastWeek: h, endOfISOWeek: m, endOfMonth: g, endOfWeek: v, isAfter: y, startOfBroadcastWeek: x, startOfISOWeek: w, startOfWeek: b } = r, C = c ? x(o, r) : s ? w(o) : b(o), S = c ? h(a) : s ? m(g(a)) : v(g(a)), E = t && (c ? h(t) : s ? m(t) : v(t)), M = E && y(S, E) ? E : S, O = d(M, C), _ = f(a, o) + 1, A = [];
  for (let F = 0; F <= O; F++) {
    const R = u(C, F);
    A.push(R);
  }
  const j = (c ? 35 : 42) * _;
  if (i && A.length < j) {
    const F = j - A.length;
    for (let R = 0; R < F; R++) {
      const Y = u(A[A.length - 1], 1);
      A.push(Y);
    }
  }
  return A;
}
function iC(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function cC(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function Is(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || a || s;
  const { differenceInCalendarMonths: u, addMonths: d, startOfMonth: f } = r;
  if (n && u(n, c) < i - 1) {
    const h = -1 * (i - 1);
    c = d(n, h);
  }
  return t && u(c, t) < 0 && (c = t), f(c);
}
function lC(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: c, getISOWeek: u, getWeek: d, startOfBroadcastWeek: f, startOfISOWeek: h, startOfWeek: m } = r, g = e.reduce((v, y) => {
    const x = n.broadcastCalendar ? f(y, r) : n.ISOWeek ? h(y) : m(y), w = n.broadcastCalendar ? a(y) : n.ISOWeek ? s(i(y)) : c(i(y)), b = t.filter((M) => M >= x && M <= w), C = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && b.length < C) {
      const M = t.filter((O) => {
        const _ = C - b.length;
        return O > w && O <= o(w, _);
      });
      b.push(...M);
    }
    const S = b.reduce((M, O) => {
      const _ = n.ISOWeek ? u(O) : d(O), A = M.find((j) => j.weekNumber === _), N = new Xu(O, y, r);
      return A ? A.days.push(N) : M.push(new ox(_, [N])), M;
    }, []), E = new rx(y, S);
    return v.push(E), v;
  }, []);
  return n.reverseMonths ? g.reverse() : g;
}
function uC(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: c, endOfYear: u, newDate: d, today: f } = t, { fromYear: h, toYear: m, fromMonth: g, toMonth: v } = e;
  !n && g && (n = g), !n && h && (n = t.newDate(h, 0, 1)), !r && v && (r = v), !r && m && (r = d(m, 11, 31));
  const y = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : h ? n = d(h, 0, 1) : !n && y && (n = o(c(e.today ?? f(), -100))), r ? r = i(r) : m ? r = d(m, 11, 31) : !r && y && (r = u(e.today ?? f())), [
    n && a(n),
    r && a(r)
  ];
}
function dC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, u = o ? a : 1, d = s(e);
  if (!t)
    return i(d, u);
  if (!(c(t, e) < a))
    return i(d, u);
}
function fC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, u = o ? a ?? 1 : 1, d = s(e);
  if (!t)
    return i(d, -u);
  if (!(c(d, t) <= 0))
    return i(d, -u);
}
function pC(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Wr(e, t) {
  const [n, r] = Pe(e);
  return [t === void 0 ? n : t, r];
}
function hC(e, t) {
  const [n, r] = uC(e, t), { startOfMonth: o, endOfMonth: a } = t, s = Is(e, n, r, t), [i, c] = Wr(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  _e(() => {
    const C = Is(e, n, r, t);
    c(C);
  }, [e.timeZone]);
  const { months: u, weeks: d, days: f, previousMonth: h, nextMonth: m } = yt(() => {
    const C = cC(i, r, { numberOfMonths: e.numberOfMonths }, t), S = sC(C, e.endMonth ? a(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), E = lC(C, S, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), M = pC(E), O = iC(E), _ = fC(i, n, e, t), A = dC(i, r, e, t);
    return {
      months: E,
      weeks: M,
      days: O,
      previousMonth: _,
      nextMonth: A
    };
  }, [
    t,
    i.getTime(),
    r?.getTime(),
    n?.getTime(),
    e.disableNavigation,
    e.broadcastCalendar,
    e.endMonth?.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: g, onMonthChange: v } = e, y = (C) => d.some((S) => S.days.some((E) => E.isEqualTo(C))), x = (C) => {
    if (g)
      return;
    let S = o(C);
    n && S < o(n) && (S = o(n)), r && S > o(r) && (S = o(r)), c(S), v?.(S);
  };
  return {
    months: u,
    weeks: d,
    days: f,
    navStart: n,
    navEnd: r,
    previousMonth: h,
    nextMonth: m,
    goToMonth: x,
    goToDay: (C) => {
      y(C) || x(C.date);
    }
  };
}
var Be;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Be || (Be = {}));
function js(e) {
  return !e[ie.disabled] && !e[ie.hidden] && !e[ie.outside];
}
function mC(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    js(i) && (i[ie.focused] && a < Be.FocusedModifier ? (o = s, a = Be.FocusedModifier) : r?.isEqualTo(s) && a < Be.LastFocused ? (o = s, a = Be.LastFocused) : n(s.date) && a < Be.Selected ? (o = s, a = Be.Selected) : i[ie.today] && a < Be.Today && (o = s, a = Be.Today));
  }
  return o || (o = e.find((s) => js(t(s)))), o;
}
function vC(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: c } = a, { addDays: u, addMonths: d, addWeeks: f, addYears: h, endOfBroadcastWeek: m, endOfISOWeek: g, endOfWeek: v, max: y, min: x, startOfBroadcastWeek: w, startOfISOWeek: b, startOfWeek: C } = s;
  let E = {
    day: u,
    week: f,
    month: d,
    year: h,
    startOfWeek: (M) => c ? w(M, s) : i ? b(M) : C(M),
    endOfWeek: (M) => c ? m(M) : i ? g(M) : v(M)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? E = y([r, E]) : t === "after" && o && (E = x([o, E])), E;
}
function dd(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const c = vC(e, t, n.date, r, o, a, s), u = !!(a.disabled && Qe(c, a.disabled, s)), d = !!(a.hidden && Qe(c, a.hidden, s)), f = c, h = new Xu(c, f, s);
  return !u && !d ? h : dd(e, t, h, r, o, a, s, i + 1);
}
function gC(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = Pe(), c = mC(t.days, n, r || (() => !1), s), [u, d] = Pe(a ? c : void 0);
  return {
    isFocusTarget: (v) => !!c?.isEqualTo(v),
    setFocused: d,
    focused: u,
    blur: () => {
      i(u), d(void 0);
    },
    moveFocus: (v, y) => {
      if (!u)
        return;
      const x = dd(v, y, u, t.navStart, t.navEnd, e, o);
      x && (e.disableNavigation && !t.days.some((b) => b.isEqualTo(x)) || (t.goToDay(x), d(x)));
    }
  };
}
function yC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Wr(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t, u = (m) => i?.some((g) => c(g, m)) ?? !1, { min: d, max: f } = e;
  return {
    selected: i,
    select: (m, g, v) => {
      let y = [...i ?? []];
      if (u(m)) {
        if (i?.length === d || r && i?.length === 1)
          return;
        y = i?.filter((x) => !c(x, m));
      } else
        i?.length === f ? y = [m] : y = [...y, m];
      return o || s(y), o?.(y, m, g, v), y;
    },
    isSelected: u
  };
}
function bC(e, t, n = 0, r = 0, o = !1, a = qe) {
  const { from: s, to: i } = t || {}, { isSameDay: c, isAfter: u, isBefore: d } = a;
  let f;
  if (!s && !i)
    f = { from: e, to: n > 0 ? void 0 : e };
  else if (s && !i)
    c(s, e) ? n === 0 ? f = { from: s, to: e } : o ? f = { from: s, to: void 0 } : f = void 0 : d(e, s) ? f = { from: e, to: s } : f = { from: s, to: e };
  else if (s && i)
    if (c(s, e) && c(i, e))
      o ? f = { from: s, to: i } : f = void 0;
    else if (c(s, e))
      f = { from: s, to: n > 0 ? void 0 : e };
    else if (c(i, e))
      f = { from: e, to: n > 0 ? void 0 : e };
    else if (d(e, s))
      f = { from: e, to: i };
    else if (u(e, s))
      f = { from: s, to: e };
    else if (u(e, i))
      f = { from: s, to: e };
    else
      throw new Error("Invalid range");
  if (f?.from && f?.to) {
    const h = a.differenceInCalendarDays(f.to, f.from);
    r > 0 && h > r ? f = { from: e, to: void 0 } : n > 1 && h < n && (f = { from: e, to: void 0 });
  }
  return f;
}
function wC(e, t, n = qe) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const a = n.differenceInCalendarDays(e.to, e.from), s = Math.min(a, 6);
  for (let i = 0; i <= s; i++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function Fs(e, t, n = qe) {
  return Ze(e, t.from, !1, n) || Ze(e, t.to, !1, n) || Ze(t, e.from, !1, n) || Ze(t, e.to, !1, n);
}
function xC(e, t, n = qe) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? Ze(e, i, !1, n) : Ju(i, n) ? i.some((c) => Ze(e, c, !1, n)) : Fr(i) ? i.from && i.to ? Fs(e, { from: i.from, to: i.to }, n) : !1 : Qu(i) ? wC(e, i.dayOfWeek, n) : Pa(i) ? n.isAfter(i.before, i.after) ? Fs(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Qe(e.from, i, n) || Qe(e.to, i, n) : Ma(i) || Ra(i) ? Qe(e.from, i, n) || Qe(e.to, i, n) : !1))
    return !0;
  const s = r.filter((i) => typeof i == "function");
  if (s.length) {
    let i = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let u = 0; u <= c; u++) {
      if (s.some((d) => d(i)))
        return !0;
      i = n.addDays(i, 1);
    }
  }
  return !1;
}
function CC(e, t) {
  const { disabled: n, excludeDisabled: r, resetOnSelect: o, selected: a, required: s, onSelect: i } = e, [c, u] = Wr(a, i ? a : void 0), d = i ? a : c;
  return {
    selected: d,
    select: (m, g, v) => {
      const { min: y, max: x } = e;
      let w;
      if (m) {
        const b = d?.from, C = d?.to, S = !!b && !!C, E = !!b && !!C && t.isSameDay(b, C) && t.isSameDay(m, b);
        o && (S || !d?.from) ? !s && E ? w = void 0 : w = { from: m, to: void 0 } : w = bC(m, d, y, x, s, t);
      }
      return r && n && w?.from && w.to && xC({ from: w.from, to: w.to }, n, t) && (w.from = m, w.to = void 0), i || u(w), i?.(w, m, g, v), w;
    },
    isSelected: (m) => d && Ze(d, m, !1, t)
  };
}
function SC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Wr(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t;
  return {
    selected: i,
    select: (f, h, m) => {
      let g = f;
      return !r && i && i && c(f, i) && (g = void 0), o || s(g), o?.(g, f, h, m), g;
    },
    isSelected: (f) => i ? c(i, f) : !1
  };
}
function EC(e, t) {
  const n = SC(e, t), r = yC(e, t), o = CC(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function Ne(e, t) {
  return e instanceof ye && e.timeZone === t ? e : new ye(e, t);
}
function Tt(e, t, n) {
  return Ne(e, t);
}
function Ws(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? Tt(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? Tt(r, t) : r) : Fr(e) ? {
    ...e,
    from: e.from ? Ne(e.from, t) : e.from,
    to: e.to ? Ne(e.to, t) : e.to
  } : Pa(e) ? {
    before: Tt(e.before, t),
    after: Tt(e.after, t)
  } : Ma(e) ? {
    after: Tt(e.after, t)
  } : Ra(e) ? {
    before: Tt(e.before, t)
  } : e;
}
function co(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Ws(r, t)) : Ws(e, t));
}
function fd(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = Ne(t.today, n)), t.month && (t.month = Ne(t.month, n)), t.defaultMonth && (t.defaultMonth = Ne(t.defaultMonth, n)), t.startMonth && (t.startMonth = Ne(t.startMonth, n)), t.endMonth && (t.endMonth = Ne(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = Ne(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((q) => Ne(q, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? Ne(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? Ne(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = co(t.disabled, n)), t.hidden !== void 0 && (t.hidden = co(t.hidden, n)), t.modifiers)) {
    const q = {};
    Object.keys(t.modifiers).forEach((ne) => {
      q[ne] = co(t.modifiers?.[ne], n);
    }), t.modifiers = q;
  }
  const { components: r, formatters: o, labels: a, dateLib: s, locale: i, classNames: c } = yt(() => {
    const q = { ...qu, ...t.locale }, ne = t.broadcastCalendar ? 1 : t.weekStartsOn, H = t.noonSafe && t.timeZone ? tC(t.timeZone, {
      weekStartsOn: ne,
      locale: q
    }) : void 0, te = t.dateLib && H ? { ...H, ...t.dateLib } : t.dateLib ?? H, Se = new Re({
      locale: q,
      weekStartsOn: ne,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, te);
    return {
      dateLib: Se,
      components: Ax(t.components),
      formatters: Gx(t.formatters),
      labels: Xx(t.labels, Se.options),
      locale: q,
      classNames: { ...jx(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.noonSafe,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]);
  t.today || (t = { ...t, today: s.today() });
  const { captionLayout: u, mode: d, navLayout: f, numberOfMonths: h = 1, onDayBlur: m, onDayClick: g, onDayFocus: v, onDayKeyDown: y, onDayMouseEnter: x, onDayMouseLeave: w, onNextClick: b, onPrevClick: C, showWeekNumber: S, styles: E } = t, { formatCaption: M, formatDay: O, formatMonthDropdown: _, formatWeekNumber: A, formatWeekNumberHeader: N, formatWeekdayName: j, formatYearDropdown: F } = o, R = hC(t, s), { days: Y, months: V, navStart: z, navEnd: L, previousMonth: T, nextMonth: K, goToMonth: k } = R, $ = Tx(Y, t, z, L, s), { isSelected: U, select: X, selected: he } = EC(t, s) ?? {}, { blur: fe, focused: I, isFocusTarget: Q, moveFocus: se, setFocused: ee } = gC(t, R, $, U ?? (() => !1), s), { labelDayButton: ae, labelGridcell: le, labelGrid: De, labelMonthDropdown: xe, labelNav: Pt, labelPrevious: Zt, labelNext: Qt, labelWeekday: wd, labelWeekNumber: xd, labelWeekNumberHeader: Cd, labelYearDropdown: Sd } = a, Ed = yt(() => Jx(s, t.ISOWeek, t.broadcastCalendar, t.today), [s, t.ISOWeek, t.broadcastCalendar, t.today]), Ta = d !== void 0 || g !== void 0, Lr = ve(() => {
    T && (k(T), C?.(T));
  }, [T, k, C]), $r = ve(() => {
    K && (k(K), b?.(K));
  }, [k, K, b]), kd = ve((q, ne) => (H) => {
    H.preventDefault(), H.stopPropagation(), ee(q), !ne.disabled && (X?.(q.date, ne, H), g?.(q.date, ne, H));
  }, [X, g, ee]), Pd = ve((q, ne) => (H) => {
    ee(q), v?.(q.date, ne, H);
  }, [v, ee]), Md = ve((q, ne) => (H) => {
    fe(), m?.(q.date, ne, H);
  }, [fe, m]), Rd = ve((q, ne) => (H) => {
    const te = {
      ArrowLeft: [
        H.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        H.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [H.shiftKey ? "year" : "week", "after"],
      ArrowUp: [H.shiftKey ? "year" : "week", "before"],
      PageUp: [H.shiftKey ? "year" : "month", "before"],
      PageDown: [H.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (te[H.key]) {
      H.preventDefault(), H.stopPropagation();
      const [Se, J] = te[H.key];
      se(Se, J);
    }
    y?.(q.date, ne, H);
  }, [se, y, t.dir]), Nd = ve((q, ne) => (H) => {
    x?.(q.date, ne, H);
  }, [x]), Od = ve((q, ne) => (H) => {
    w?.(q.date, ne, H);
  }, [w]), _d = ve((q) => (ne) => {
    const H = Number(ne.target.value), te = s.setMonth(s.startOfMonth(q), H);
    k(te);
  }, [s, k]), Td = ve((q) => (ne) => {
    const H = Number(ne.target.value), te = s.setYear(s.startOfMonth(q), H);
    k(te);
  }, [s, k]), { className: Dd, style: Ad } = yt(() => ({
    className: [c[B.Root], t.className].filter(Boolean).join(" "),
    style: { ...E?.[B.Root], ...t.style }
  }), [c, t.className, t.style, E]), Id = Ix(t), Da = Ce(null);
  aC(Da, !!t.animate, {
    classNames: c,
    months: V,
    focused: I,
    dateLib: s
  });
  const jd = {
    dayPickerProps: t,
    selected: he,
    select: X,
    isSelected: U,
    months: V,
    nextMonth: K,
    previousMonth: T,
    goToMonth: k,
    getModifiers: $,
    components: r,
    classNames: c,
    styles: E,
    labels: a,
    formatters: o
  };
  return P.createElement(
    Zu.Provider,
    { value: jd },
    P.createElement(
      r.Root,
      { rootRef: t.animate ? Da : void 0, className: Dd, style: Ad, dir: t.dir, id: t.id, lang: t.lang ?? i.code, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Id },
      P.createElement(
        r.Months,
        { className: c[B.Months], style: E?.[B.Months] },
        !t.hideNavigation && !f && P.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[B.Nav], style: E?.[B.Nav], "aria-label": Pt(), onPreviousClick: Lr, onNextClick: $r, previousMonth: T, nextMonth: K }),
        V.map((q, ne) => P.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: c[B.Month],
            style: E?.[B.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ne,
            displayIndex: ne,
            calendarMonth: q
          },
          f === "around" && !t.hideNavigation && ne === 0 && P.createElement(
            r.PreviousMonthButton,
            { type: "button", className: c[B.PreviousMonthButton], tabIndex: T ? void 0 : -1, "aria-disabled": T ? void 0 : !0, "aria-label": Zt(T), onClick: Lr, "data-animated-button": t.animate ? "true" : void 0 },
            P.createElement(r.Chevron, { disabled: T ? void 0 : !0, className: c[B.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          P.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: c[B.MonthCaption], style: E?.[B.MonthCaption], calendarMonth: q, displayIndex: ne }, u?.startsWith("dropdown") ? P.createElement(
            r.DropdownNav,
            { className: c[B.Dropdowns], style: E?.[B.Dropdowns] },
            (() => {
              const H = u === "dropdown" || u === "dropdown-months" ? P.createElement(r.MonthsDropdown, { key: "month", className: c[B.MonthsDropdown], "aria-label": xe(), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: _d(q.date), options: Zx(q.date, z, L, o, s), style: E?.[B.Dropdown], value: s.getMonth(q.date) }) : P.createElement("span", { key: "month" }, _(q.date, s)), te = u === "dropdown" || u === "dropdown-years" ? P.createElement(r.YearsDropdown, { key: "year", className: c[B.YearsDropdown], "aria-label": Sd(s.options), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: Td(q.date), options: eC(z, L, o, s, !!t.reverseYears), style: E?.[B.Dropdown], value: s.getYear(q.date) }) : P.createElement("span", { key: "year" }, F(q.date, s));
              return s.getMonthYearOrder() === "year-first" ? [te, H] : [H, te];
            })(),
            P.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, M(q.date, s.options, s))
          ) : P.createElement(r.CaptionLabel, { className: c[B.CaptionLabel], role: "status", "aria-live": "polite" }, M(q.date, s.options, s))),
          f === "around" && !t.hideNavigation && ne === h - 1 && P.createElement(
            r.NextMonthButton,
            { type: "button", className: c[B.NextMonthButton], tabIndex: K ? void 0 : -1, "aria-disabled": K ? void 0 : !0, "aria-label": Qt(K), onClick: $r, "data-animated-button": t.animate ? "true" : void 0 },
            P.createElement(r.Chevron, { disabled: K ? void 0 : !0, className: c[B.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ne === h - 1 && f === "after" && !t.hideNavigation && P.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[B.Nav], style: E?.[B.Nav], "aria-label": Pt(), onPreviousClick: Lr, onNextClick: $r, previousMonth: T, nextMonth: K }),
          P.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": De(q.date, s.options, s) || void 0, className: c[B.MonthGrid], style: E?.[B.MonthGrid] },
            !t.hideWeekdays && P.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: c[B.Weekdays], style: E?.[B.Weekdays] },
              S && P.createElement(r.WeekNumberHeader, { "aria-label": Cd(s.options), className: c[B.WeekNumberHeader], style: E?.[B.WeekNumberHeader], scope: "col" }, N()),
              Ed.map((H) => P.createElement(r.Weekday, { "aria-label": wd(H, s.options, s), className: c[B.Weekday], key: String(H), style: E?.[B.Weekday], scope: "col" }, j(H, s.options, s)))
            ),
            P.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: c[B.Weeks], style: E?.[B.Weeks] }, q.weeks.map((H) => P.createElement(
              r.Week,
              { className: c[B.Week], key: H.weekNumber, style: E?.[B.Week], week: H },
              S && P.createElement(r.WeekNumber, { week: H, style: E?.[B.WeekNumber], "aria-label": xd(H.weekNumber, {
                locale: i
              }), className: c[B.WeekNumber], scope: "row", role: "rowheader" }, A(H.weekNumber, s)),
              H.days.map((te) => {
                const { date: Se } = te, J = $(te);
                if (J[ie.focused] = !J.hidden && !!I?.isEqualTo(te), J[je.selected] = U?.(Se) || J.selected, Fr(he)) {
                  const { from: Vr, to: Br } = he;
                  J[je.range_start] = !!(Vr && Br && s.isSameDay(Se, Vr)), J[je.range_end] = !!(Vr && Br && s.isSameDay(Se, Br)), J[je.range_middle] = Ze(he, Se, !0, s);
                }
                const Fd = Qx(J, E, t.modifiersStyles), Wd = Dx(J, c, t.modifiersClassNames), Ld = !Ta && !J.hidden ? le(Se, J, s.options, s) : void 0;
                return P.createElement(r.Day, { key: `${te.isoDate}_${te.displayMonthId}`, day: te, modifiers: J, className: Wd.join(" "), style: Fd, role: "gridcell", "aria-selected": J.selected || void 0, "aria-label": Ld, "data-day": te.isoDate, "data-month": te.outside ? te.dateMonthId : void 0, "data-selected": J.selected || void 0, "data-disabled": J.disabled || void 0, "data-hidden": J.hidden || void 0, "data-outside": te.outside || void 0, "data-focused": J.focused || void 0, "data-today": J.today || void 0 }, !J.hidden && Ta ? P.createElement(r.DayButton, { className: c[B.DayButton], style: E?.[B.DayButton], type: "button", day: te, modifiers: J, disabled: !J.focused && J.disabled || void 0, "aria-disabled": J.focused && J.disabled || void 0, tabIndex: Q(te) ? 0 : -1, "aria-label": ae(Se, J, s.options, s), onClick: kd(te, J), onBlur: Md(te, J), onFocus: Pd(te, J), onKeyDown: Rd(te, J), onMouseEnter: Nd(te, J), onMouseLeave: Od(te, J) }, O(Se, s.options, s)) : !J.hidden && O(te.date, s.options, s));
              })
            )))
          )
        ))
      ),
      t.footer && P.createElement(r.Footer, { className: c[B.Footer], style: E?.[B.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function Ls(e, t, n, r = e !== void 0) {
  const [o, a] = Pe(t), s = r ? e : o, i = ve(
    (c) => {
      r || a(c), n?.(c);
    },
    [r, n]
  );
  return [s, i];
}
function kC({
  value: e,
  setSelected: t,
  setOpen: n,
  required: r,
  ...o
}) {
  return /* @__PURE__ */ p.jsx(
    fd,
    {
      mode: "single",
      className: "rdp",
      selected: e,
      onSelect: (a) => {
        t(a), n(!1);
      },
      required: r,
      ...o
    }
  );
}
function PC({
  draftRange: e,
  setDraftRange: t,
  setSelected: n,
  setOpen: r,
  required: o,
  disabled: a,
  ...s
}) {
  return /* @__PURE__ */ p.jsx(
    fd,
    {
      mode: "range",
      className: "rdp",
      selected: e,
      onSelect: (i, c) => {
        const u = c, d = e?.from;
        if (e?.to || !d) {
          t({ from: u, to: void 0 });
          return;
        }
        if (u.getTime() < d.getTime()) {
          t({ from: u, to: void 0 });
          return;
        }
        const h = { from: d, to: u };
        t(h), n(h), r(!1);
      },
      required: o,
      excludeDisabled: !!a,
      ...s
    }
  );
}
function BC(e) {
  const {
    mode: t = "single",
    captionLayout: n = "label",
    placeholder: r,
    disabled: o,
    required: a,
    disabledPicker: s,
    clearable: i = !1,
    clearLabel: c = "Clear date"
  } = e, [u, d] = P.useState(!1), f = t === "range", h = Object.prototype.hasOwnProperty.call(e, "value"), m = e, g = e, [v, y] = f ? Ls(
    m.value,
    m.defaultValue,
    m.onChange,
    h
  ) : Ls(
    g.value,
    g.defaultValue,
    g.onChange,
    h
  );
  let x = r;
  x || (t === "single" ? x = "dd/mm/yyyy" : x = "dd/mm/yyyy - dd/mm/yyyy");
  const w = f ? v : void 0, b = f ? void 0 : v, [C, S] = P.useState(w);
  P.useEffect(() => {
    f && !u && S(w);
  }, [f, u, w]);
  const E = f ? w?.from && w?.to ? `${ot(w.from, "dd/MM/yyyy")} – ${ot(w.to, "dd/MM/yyyy")}` : x : b ? ot(b, "dd/MM/yyyy") : x;
  let M;
  if (f) {
    const _ = {
      navLayout: "around",
      disabled: o,
      setOpen: d,
      setSelected: y,
      required: a,
      captionLayout: n,
      defaultMonth: w?.from ? new Date(w.from) : Date.now()
    };
    M = /* @__PURE__ */ p.jsx(
      PC,
      {
        value: w,
        draftRange: C,
        setDraftRange: S,
        ..._
      }
    );
  } else {
    const _ = {
      navLayout: "around",
      disabled: o,
      setOpen: d,
      setSelected: y,
      required: a,
      captionLayout: n,
      defaultMonth: b ? new Date(b) : Date.now()
    };
    M = /* @__PURE__ */ p.jsx(kC, { value: b, ..._ });
  }
  const O = f ? !!(w?.from || w?.to) : !!b;
  return /* @__PURE__ */ p.jsxs(xa, { open: u, onOpenChange: d, children: [
    /* @__PURE__ */ p.jsx(jr, { children: /* @__PURE__ */ p.jsxs("div", { className: "ui-date-control", children: [
      /* @__PURE__ */ p.jsxs("div", { className: Z("ui-date-trigger", { disabled: s }), children: [
        /* @__PURE__ */ p.jsx("input", { name: "date-input", readOnly: !0, className: "ui-date-input", value: E }),
        /* @__PURE__ */ p.jsx("div", { className: "icon", children: /* @__PURE__ */ p.jsx(ut, { name: "calendar", strokeWidth: 1.25, size: 17 }) })
      ] }),
      i && O ? /* @__PURE__ */ p.jsx(
        bt,
        {
          className: "date-clear-button",
          ariaLabel: c,
          quite: !0,
          icon: "x",
          iconOnly: !0,
          size: "S",
          onClick: (_) => {
            _?.preventDefault(), _?.stopPropagation(), f && S(void 0), y(void 0), d(!1);
          },
          children: c
        }
      ) : null
    ] }) }),
    /* @__PURE__ */ p.jsx(Ca, { className: "ui-date-popover", align: "start", children: M })
  ] });
}
function YC({ className: e, currentPage: t, totalPages: n, onPageChange: r }) {
  const o = (a) => {
    a >= 1 && a <= n && r(a);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: `pagination ${e || ""}`, children: [
    t === 1 ? null : /* @__PURE__ */ p.jsx(
      bt,
      {
        icon: "chevronLeft",
        quite: !0,
        onClick: () => o(t - 1)
      }
    ),
    /* @__PURE__ */ p.jsxs("span", { children: [
      "Page ",
      t,
      " of ",
      n
    ] }),
    t === n ? null : /* @__PURE__ */ p.jsx(
      bt,
      {
        icon: "chevronRight",
        quite: !0,
        onClick: () => o(t + 1)
      }
    )
  ] });
}
function pd() {
  const [e, t] = Pe(!1), n = ve((o) => {
    t(o);
  }, []), r = ve(() => {
    t((o) => o && !1);
  }, []);
  return {
    suppressInitialHighlight: e,
    handleOpenChange: n,
    releaseInitialHighlight: r
  };
}
const $s = P.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ p.jsxs(Gl, { className: Z("select-item", t), ...n, ref: r, children: [
  /* @__PURE__ */ p.jsx(Ul, { children: e }),
  /* @__PURE__ */ p.jsx(Kl, { className: "select-item-indicator", children: /* @__PURE__ */ p.jsx(ut, { name: "check", size: "S" }) })
] }));
function HC(e) {
  const {
    items: t,
    label: n,
    placeholder: r = "Select...",
    className: o = "",
    value: a,
    defaultValue: s,
    position: i,
    disabled: c,
    clearable: u = !1,
    clearLabel: d = "Clear selection",
    onOpenChange: f,
    onSelect: h
  } = e, m = "", g = P.useId(), [v, y] = P.useState(s), x = Dr(), { suppressInitialHighlight: w, handleOpenChange: b, releaseInitialHighlight: C } = pd(), S = Object.prototype.hasOwnProperty.call(e, "value"), E = S ? a ?? m : v ?? m, M = yt(() => {
    const N = [];
    let j = [];
    return Array.isArray(t) ? Array.isArray(t[0]) ? j = t : j = [t] : Object.entries(t).forEach(([F, R]) => {
      N.push(F), j.push(R);
    }), { menuItems: j, groups: N };
  }, [t]), O = (N) => {
    S || y(N), h?.(N === m ? void 0 : N);
  }, _ = (N) => {
    N.preventDefault(), N.stopPropagation(), S || y(m), h?.(void 0);
  }, A = () => {
    const N = M.menuItems.map((j, F) => M.groups[F] ? /* @__PURE__ */ p.jsxs(P.Fragment, { children: [
      /* @__PURE__ */ p.jsxs(Vl, { children: [
        /* @__PURE__ */ p.jsx(Yl, { className: "select-label", children: M.groups[F] }),
        j.map((R) => /* @__PURE__ */ p.jsx(
          $s,
          {
            value: R.value,
            disabled: R.disabled,
            children: /* @__PURE__ */ p.jsxs("div", { className: "item-content", children: [
              R.icon && /* @__PURE__ */ p.jsx(ut, { name: R.icon, size: "XS" }),
              /* @__PURE__ */ p.jsx("span", { children: R.key })
            ] })
          },
          R.value
        ))
      ] }),
      F < M.groups.length - 1 && /* @__PURE__ */ p.jsx(ko, { className: "select-separator" })
    ] }, `group-${M.groups[F]}`) : /* @__PURE__ */ p.jsxs(P.Fragment, { children: [
      j.map((R) => /* @__PURE__ */ p.jsx($s, { value: R.value, disabled: R.disabled, children: /* @__PURE__ */ p.jsxs("div", { className: "item-content", children: [
        R.icon && /* @__PURE__ */ p.jsx(ut, { name: R.icon, size: "XS" }),
        /* @__PURE__ */ p.jsx("span", { children: R.key })
      ] }) }, R.value)),
      F < M.menuItems.length - 1 && /* @__PURE__ */ p.jsx(ko, { className: "select-separator" })
    ] }, `group-${F}`));
    return /* @__PURE__ */ p.jsx(p.Fragment, { children: N });
  };
  return /* @__PURE__ */ p.jsxs("div", { className: Z("ui-select", { [o]: o }), children: [
    n && /* @__PURE__ */ p.jsx(Yc, { htmlFor: g, asChild: !0, children: /* @__PURE__ */ p.jsx("div", { className: "select-field-label", children: n }) }),
    /* @__PURE__ */ p.jsxs(
      Pl,
      {
        value: E,
        disabled: c,
        onOpenChange: (N) => {
          b(N), f?.(N);
        },
        onValueChange: O,
        children: [
          /* @__PURE__ */ p.jsxs("div", { className: "select-control", children: [
            /* @__PURE__ */ p.jsxs(Rl, { id: g, className: "select-trigger", children: [
              /* @__PURE__ */ p.jsx(Ol, { placeholder: r }),
              /* @__PURE__ */ p.jsx(_l, { className: "select-icon", children: /* @__PURE__ */ p.jsx(Jp, {}) })
            ] }),
            u && E ? /* @__PURE__ */ p.jsx(
              bt,
              {
                className: "select-clear-button",
                ariaLabel: d,
                quite: !0,
                icon: "x",
                iconOnly: !0,
                size: "S",
                onClick: _
              }
            ) : null
          ] }),
          /* @__PURE__ */ p.jsx(Dl, { container: x, children: /* @__PURE__ */ p.jsx(
            Al,
            {
              side: i,
              className: Z("select-content", {
                "suppress-initial-highlight": w
              }),
              position: "popper",
              sideOffset: 4,
              onPointerMove: C,
              onKeyDown: C,
              children: /* @__PURE__ */ p.jsxs($g, { className: "ScrollAreaRoot", type: "auto", children: [
                /* @__PURE__ */ p.jsx(Ll, { asChild: !0, children: /* @__PURE__ */ p.jsx(Vg, { className: "select-viewport", children: M.menuItems.length > 0 ? A() : null }) }),
                /* @__PURE__ */ p.jsx(
                  Bg,
                  {
                    className: "ScrollAreaScrollbar",
                    orientation: "vertical",
                    children: /* @__PURE__ */ p.jsx(Yg, { className: "ScrollAreaThumb" })
                  }
                )
              ] })
            }
          ) })
        ]
      }
    )
  ] });
}
function GC({ className: e = "", width: t = "100%" }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: Z("ui-separator", { [e]: e }),
      style: { width: t }
    }
  );
}
function UC({ label: e, className: t = "", size: n = "M", onChange: r, value: o }) {
  const [a, s] = P.useState(o ?? !1);
  _e(() => {
    s(o ?? !1);
  }, [o]);
  const i = (c) => {
    o === void 0 && s(c), r?.(c);
  };
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: Z("ui-switch", {
        [`ui-switch-size--${n}`]: n,
        [t]: t
      }),
      style: { display: "flex", alignItems: "center" },
      children: [
        /* @__PURE__ */ p.jsx(
          ru,
          {
            className: "ui-switch-root",
            id: "ui-switch-html",
            checked: a,
            onCheckedChange: i,
            children: /* @__PURE__ */ p.jsx(au, { className: "ui-switch-thumb" })
          }
        ),
        /* @__PURE__ */ p.jsx("label", { className: "ui-switch-label", htmlFor: "ui-switch-html", children: e })
      ]
    }
  );
}
function zC({
  data: e,
  columns: t,
  className: n,
  multiSelect: r,
  allowSelection: o = !1,
  render: a,
  onSelect: s
}) {
  const [i, c] = P.useState(/* @__PURE__ */ new Set());
  _e(() => {
    c(/* @__PURE__ */ new Set());
  }, [e.length]);
  const u = (d, f) => {
    if (f || !o) return;
    const h = i;
    let m = new Set(h);
    r ? m.has(d) ? m.delete(d) : m.add(d) : m = h.has(d) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([d]), c(m), s && s(Array.from(m).map((g) => e[g]));
  };
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: Z("ui-table-wrapper", n, {
        " disable-select": !o
      }),
      children: /* @__PURE__ */ p.jsxs("table", { className: "ui-table", children: [
        /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsx("tr", { children: t.map((d, f) => /* @__PURE__ */ p.jsx("th", { style: { width: d.width || "100%" }, children: /* @__PURE__ */ p.jsx("div", { children: d.header }) }, f)) }) }),
        /* @__PURE__ */ p.jsx("tbody", { children: e.map((d, f) => /* @__PURE__ */ p.jsx(
          "tr",
          {
            className: Z({
              disabled: d.disabled,
              selected: i.has(f)
            }),
            onClick: () => u(f, d.disabled),
            children: t.map((h, m) => /* @__PURE__ */ p.jsx("td", { children: /* @__PURE__ */ p.jsx("div", { children: a ? a(h.key, d) : String(d[h.key]) }) }, m))
          },
          f
        )) })
      ] })
    }
  );
}
function KC({ icon: e, label: t, color: n, size: r = "M", className: o }) {
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: Z("ui-tag", {
        [`ui-tag-size--${r}`]: r,
        [o]: o
      }),
      style: {
        backgroundColor: n || "var(--gray-600)"
      },
      children: [
        e && /* @__PURE__ */ p.jsx(
          ut,
          {
            className: Z("btn-icon"),
            name: e,
            strokeWidth: 1.5,
            size: r,
            color: "#fff"
          }
        ),
        t
      ]
    }
  );
}
function qC({ text: e, size: t = "M", children: n, className: r = "" }) {
  return /* @__PURE__ */ p.jsx(
    "span",
    {
      className: Z("ui-text", {
        [r]: r,
        [`ui-text-size--${t}`]: t
      }),
      children: n || e
    }
  );
}
const MC = P.forwardRef(
  ({ children: e, className: t = "", ...n }, r) => {
    if (!e)
      return console.warn("Card component should have children"), null;
    Array.isArray(e) || (console.warn("Card component should have multiple children"), e = [e]);
    const o = e.find(
      (s) => P.isValidElement(s) && s.type.displayName === "CardHeader"
    ), a = e.find(
      (s) => P.isValidElement(s) && s.type.displayName === "CardContent"
    );
    return o || console.warn("Card component should have a CardHeader component as its child"), /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: Z("ui-card", {
          [t]: t
        }),
        ref: r,
        ...n,
        children: [
          o,
          a
        ]
      }
    );
  }
);
function hd({ children: e }) {
  return /* @__PURE__ */ p.jsx("div", { className: "ui-card-header", children: e });
}
hd.displayName = "CardHeader";
function md({ children: e }) {
  return /* @__PURE__ */ p.jsx("div", { className: "ui-card-content", children: e });
}
md.displayName = "CardContent";
const XC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Card: MC,
  Content: md,
  Header: hd
}, Symbol.toStringTag, { value: "Module" })), vd = P.createContext(null);
function _a() {
  const e = P.useContext(vd);
  if (!e)
    throw new Error("Dropdown components must be used inside <Dropdown>");
  return e;
}
function RC({ onSelect: e, children: t }) {
  const n = Dr(), [r, o] = P.useState(null), [a, s] = P.useState(null), { suppressInitialHighlight: i, handleOpenChange: c, releaseInitialHighlight: u } = pd(), d = P.useMemo(
    () => ({
      registerTrigger: o,
      registerContent: s,
      onSelect: e,
      suppressInitialHighlight: i,
      releaseInitialHighlight: u
    }),
    [e, u, i]
  );
  return /* @__PURE__ */ p.jsx(vd.Provider, { value: d, children: /* @__PURE__ */ p.jsxs(zv, { onOpenChange: c, children: [
    r,
    a && /* @__PURE__ */ p.jsx(qv, { container: n, children: a }),
    t
  ] }) });
}
const gd = l.forwardRef(({ children: e }, t) => {
  const { registerTrigger: n } = _a(), r = e;
  return l.useEffect(() => {
    const o = /* @__PURE__ */ p.jsx(Kv, { asChild: !0, children: l.cloneElement(r, {
      ...r.props,
      className: [r.props.className, "dropdown-trigger"].filter(Boolean).join(" ")
    }) });
    n(o);
  }, [e, t, n]), null;
});
gd.displayName = "DropdownTrigger";
function NC({ onSelect: e, children: t }) {
  const { registerContent: n, suppressInitialHighlight: r, releaseInitialHighlight: o } = _a();
  return l.useEffect(() => {
    n(
      /* @__PURE__ */ p.jsx(
        Xv,
        {
          className: Z("dropdown-content", {
            "suppress-initial-highlight": r
          }),
          sideOffset: 4,
          side: "bottom",
          alignOffset: 32,
          collisionPadding: { top: 12, bottom: 12, left: 12, right: 12 },
          onPointerMove: o,
          onKeyDown: o,
          children: t
        }
      )
    );
  }, [t, n, o, r]), null;
}
const yd = P.forwardRef(
  ({ value: e, onSelect: t, ...n }, r) => {
    const { onSelect: o } = _a();
    if (!o)
      throw new Error("DropdownItem must be used within a Dropdown with onSelect prop");
    const a = ve(
      (s) => {
        t?.(s), o?.(e);
      },
      [t, o, e]
    );
    return /* @__PURE__ */ p.jsx(
      Zv,
      {
        ref: r,
        className: ["dropdown-item", n.className].filter(Boolean).join(" "),
        onSelect: a,
        ...n
      }
    );
  }
);
yd.displayName = "DropdownItem";
const bd = P.forwardRef((e, t) => /* @__PURE__ */ p.jsx(
  Qv,
  {
    ref: t,
    className: ["dropdown-separator", e.className].filter(Boolean).join(" "),
    ...e
  }
));
bd.displayName = "DropdownSeparator";
const ZC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Content: NC,
  Dropdown: RC,
  Item: yd,
  Separator: bd,
  Trigger: gd
}, Symbol.toStringTag, { value: "Module" })), QC = P.forwardRef(
  ({ children: e, className: t, rowSpan: n, colSpan: r, style: o }, a) => /* @__PURE__ */ p.jsx(
    "div",
    {
      ref: a,
      className: Z("ui-grid-item", t || ""),
      style: {
        ...o,
        gridColumn: r ? `span ${r}` : void 0,
        gridRow: n ? `span ${n}` : void 0
      },
      children: e
    }
  )
), JC = ({
  children: e,
  className: t = "",
  type: n = "default",
  rGap: r,
  cGap: o
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: Z("ui-grid", { [t]: !!t }),
    style: { gridRowGap: r, gridColumnGap: o },
    children: e
  }
);
function OC(e, t) {
  return Iu[e]?.value?.[t] || e;
}
const eS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getColorFromUITheme: OC
}, Symbol.toStringTag, { value: "Module" }));
export {
  jC as Avatar,
  bt as Button,
  XC as Card,
  md as CardContent,
  hd as CardHeader,
  MC as CardRoot,
  FC as Checkbox,
  $C as ColorPicker,
  eS as ColorUtils,
  VC as Container,
  BC as DatePicker,
  AC as Dialog,
  Ru as DialogContainer,
  rw as DialogRoot,
  ZC as Dropdown,
  NC as DropdownContent,
  yd as DropdownItem,
  RC as DropdownRoot,
  bd as DropdownSeparator,
  gd as DropdownTrigger,
  JC as Grid,
  QC as GridItem,
  ut as Icon,
  ew as Loader,
  YC as Pagination,
  WC as Popover,
  Ca as PopoverContent,
  xa as PopoverRoot,
  jr as PopoverTrigger,
  LC as Radio,
  Sw as RadioGroup,
  HC as Select,
  GC as Separator,
  UC as Switch,
  zC as Table,
  Ew as Tabs,
  KC as Tag,
  qC as Text,
  Pw as TextField,
  IC as UIProvider,
  ya as useDialogContext
};
