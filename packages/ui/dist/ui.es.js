import * as u from "react";
import M, { forwardRef as pn, useState as Me, createElement as yt, useLayoutEffect as Zn, useMemo as vt, useRef as Ce, useEffect as _e, useCallback as me, createContext as vd, useContext as gd } from "react";
import * as $t from "react-dom";
import { createPortal as yd } from "react-dom";
function bd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mn = { exports: {} }, qt = {};
var Sa;
function wd() {
  if (Sa) return qt;
  Sa = 1;
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
  return qt.Fragment = t, qt.jsx = n, qt.jsxs = n, qt;
}
var Xt = {};
var ka;
function xd() {
  return ka || (ka = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === O ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case y:
          return "Fragment";
        case w:
          return "Profiler";
        case x:
          return "StrictMode";
        case k:
          return "Suspense";
        case P:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case v:
            return "Portal";
          case C:
            return E.displayName || "Context";
          case b:
            return (E._context.displayName || "Context") + ".Consumer";
          case S:
            var $ = E.render;
            return E = E.displayName, E || (E = $.displayName || $.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case R:
            return $ = E.displayName || null, $ !== null ? $ : e(E.type) || "Memo";
          case D:
            $ = E._payload, E = E._init;
            try {
              return e(E($));
            } catch {
            }
        }
      return null;
    }
    function t(E) {
      return "" + E;
    }
    function n(E) {
      try {
        t(E);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var G = $.error, X = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return G.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(E);
      }
    }
    function r(E) {
      if (E === y) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === D)
        return "<...>";
      try {
        var $ = e(E);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var E = j.A;
      return E === null ? null : E.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(E) {
      if (F.call(E, "key")) {
        var $ = Object.getOwnPropertyDescriptor(E, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function i(E, $) {
      function G() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      G.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: G,
        configurable: !0
      });
    }
    function c() {
      var E = e(this.type);
      return U[E] || (U[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function l(E, $, G, X, pe, de) {
      var I = G.ref;
      return E = {
        $$typeof: g,
        type: E,
        key: $,
        props: G,
        _owner: X
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(E, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: pe
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function d(E, $, G, X, pe, de) {
      var I = $.children;
      if (I !== void 0)
        if (X)
          if (N(I)) {
            for (X = 0; X < I.length; X++)
              f(I[X]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(I);
      if (F.call($, "key")) {
        I = e(E);
        var Q = Object.keys($).filter(function(ee) {
          return ee !== "key";
        });
        X = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", z[I + X] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), z[I + X] = !0);
      }
      if (I = null, G !== void 0 && (n(G), I = "" + G), s($) && (n($.key), I = "" + $.key), "key" in $) {
        G = {};
        for (var se in $)
          se !== "key" && (G[se] = $[se]);
      } else G = $;
      return I && i(
        G,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), l(
        E,
        I,
        G,
        o(),
        pe,
        de
      );
    }
    function f(E) {
      m(E) ? E._store && (E._store.validated = 1) : typeof E == "object" && E !== null && E.$$typeof === D && (E._payload.status === "fulfilled" ? m(E._payload.value) && E._payload.value._store && (E._payload.value._store.validated = 1) : E._store && (E._store.validated = 1));
    }
    function m(E) {
      return typeof E == "object" && E !== null && E.$$typeof === g;
    }
    var h = M, g = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), x = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), b = /* @__PURE__ */ Symbol.for("react.consumer"), C = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), P = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), D = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), O = /* @__PURE__ */ Symbol.for("react.client.reference"), j = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, N = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(E) {
        return E();
      }
    };
    var V, U = {}, W = h.react_stack_bottom_frame.bind(
      h,
      a
    )(), _ = Y(r(a)), z = {};
    Xt.Fragment = y, Xt.jsx = function(E, $, G) {
      var X = 1e4 > j.recentlyCreatedOwnerStacks++;
      return d(
        E,
        $,
        G,
        !1,
        X ? Error("react-stack-top-frame") : W,
        X ? Y(r(E)) : _
      );
    }, Xt.jsxs = function(E, $, G) {
      var X = 1e4 > j.recentlyCreatedOwnerStacks++;
      return d(
        E,
        $,
        G,
        !0,
        X ? Error("react-stack-top-frame") : W,
        X ? Y(r(E)) : _
      );
    };
  })()), Xt;
}
var Ea;
function Cd() {
  return Ea || (Ea = 1, process.env.NODE_ENV === "production" ? Mn.exports = wd() : Mn.exports = xd()), Mn.exports;
}
var p = Cd();
function T(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function Ma(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Sd(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Ma(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Ma(e[o], null);
        }
      };
  };
}
function q(...e) {
  return u.useCallback(Sd(...e), e);
}
function ye(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = u.createContext(s);
    i.displayName = a + "Context";
    const c = n.length;
    n = [...n, s];
    const l = (f) => {
      const { scope: m, children: h, ...g } = f, v = m?.[e]?.[c] || i, y = u.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ p.jsx(v.Provider, { value: y, children: h });
    };
    l.displayName = a + "Provider";
    function d(f, m) {
      const h = m?.[e]?.[c] || i, g = u.useContext(h);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [l, d];
  }
  const o = () => {
    const a = n.map((s) => u.createContext(s));
    return function(i) {
      const c = i?.[e] || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, kd(o, ...t)];
}
function kd(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const f = c(a)[`__scope${l}`];
        return { ...i, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  const t = u.forwardRef((n, r) => {
    let { children: o, ...a } = n, s = null, i = !1;
    const c = [];
    Pa(o) && typeof Pn == "function" && (o = Pn(o._payload)), u.Children.forEach(o, (m) => {
      if (Od(m)) {
        i = !0;
        const h = m;
        let g = "child" in h.props ? h.props.child : h.props.children;
        Pa(g) && typeof Pn == "function" && (g = Pn(g._payload)), s = Md(h, g), c.push(s?.props?.children);
      } else
        c.push(m);
    }), s ? s = u.cloneElement(s, void 0, c) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !i && u.Children.count(o) === 1 && u.isValidElement(o) && (s = o)
    );
    const l = s ? Nd(s) : void 0, d = q(r, l);
    if (!s) {
      if (o || o === 0)
        throw new Error(
          i ? Td(e) : Dd(e)
        );
      return o;
    }
    const f = Pd(a, s.props ?? {});
    return s.type !== u.Fragment && (f.ref = r ? d : l), u.cloneElement(s, f);
  });
  return t.displayName = `${e}.Slot`, t;
}
var Rs = /* @__PURE__ */ ot("Slot"), Ed = /* @__PURE__ */ Symbol.for("radix.slottable"), Md = (e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return u.isValidElement(n) ? u.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return u.isValidElement(t) ? t : null;
};
function Pd(e, t) {
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
function Nd(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Od(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ed;
}
var Rd = /* @__PURE__ */ Symbol.for("react.lazy");
function Pa(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Rd && "_payload" in e && _d(e._payload);
}
function _d(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
var Dd = (e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, Td = (e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, Pn = u[" use ".trim().toString()];
function Qn(e) {
  const t = e + "CollectionProvider", [n, r] = ye(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: y, children: x } = v, w = u.useRef(null), b = u.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: y, itemMap: b, collectionRef: w, children: x });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ ot(i), l = u.forwardRef(
    (v, y) => {
      const { scope: x, children: w } = v, b = a(i, x), C = q(y, b.collectionRef);
      return /* @__PURE__ */ p.jsx(c, { ref: C, children: w });
    }
  );
  l.displayName = i;
  const d = e + "CollectionItemSlot", f = "data-radix-collection-item", m = /* @__PURE__ */ ot(d), h = u.forwardRef(
    (v, y) => {
      const { scope: x, children: w, ...b } = v, C = u.useRef(null), S = q(y, C), k = a(d, x);
      return u.useEffect(() => (k.itemMap.set(C, { ref: C, ...b }), () => {
        k.itemMap.delete(C);
      })), /* @__PURE__ */ p.jsx(m, { [f]: "", ref: S, children: w });
    }
  );
  h.displayName = d;
  function g(v) {
    const y = a(e + "CollectionConsumer", v);
    return u.useCallback(() => {
      const w = y.collectionRef.current;
      if (!w) return [];
      const b = Array.from(w.querySelectorAll(`[${f}]`));
      return Array.from(y.itemMap.values()).sort(
        (k, P) => b.indexOf(k.ref.current) - b.indexOf(P.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: s, Slot: l, ItemSlot: h },
    g,
    r
  ];
}
var Id = [
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
], L = Id.reduce((e, t) => {
  const n = /* @__PURE__ */ ot(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, c = s ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(c, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function xo(e, t) {
  e && $t.flushSync(() => e.dispatchEvent(t));
}
function ge(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => ((...n) => t.current?.(...n)), []);
}
var le = globalThis?.document ? u.useLayoutEffect : () => {
}, Na = u[" useEffectEvent ".trim().toString()], Oa = u[" useInsertionEffect ".trim().toString()];
function Ad(e) {
  if (typeof Na == "function")
    return Na(e);
  const t = u.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Oa == "function" ? Oa(() => {
    t.current = e;
  }) : le(() => {
    t.current = e;
  }), u.useMemo(() => ((...n) => t.current?.(...n)), []);
}
var jd = "DismissableLayer", no = "dismissableLayer.update", Fd = "dismissableLayer.pointerDownOutside", Wd = "dismissableLayer.focusOutside", Ra, Co = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), Lt = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      deferPointerDownOutside: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: a,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: c,
      ...l
    } = e, d = u.useContext(Co), [f, m] = u.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, g] = u.useState({}), v = q(t, m), y = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = y.indexOf(x), b = f ? y.indexOf(f) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= w, k = u.useRef(!1), P = Vd(
      (O) => {
        const j = O.target;
        if (!(j instanceof Node))
          return;
        const F = [...d.branches].some(
          (N) => N.contains(j)
        );
        !S || F || (a?.(O), i?.(O), O.defaultPrevented || c?.());
      },
      {
        ownerDocument: h,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: k,
        dismissableSurfaces: d.dismissableSurfaces
      }
    ), R = Bd((O) => {
      if (r && k.current)
        return;
      const j = O.target;
      [...d.branches].some((N) => N.contains(j)) || (s?.(O), i?.(O), O.defaultPrevented || c?.());
    }, h), D = f ? b === y.length - 1 : !1, A = Ad((O) => {
      O.key === "Escape" && (o?.(O), !O.defaultPrevented && c && (O.preventDefault(), c()));
    });
    return u.useEffect(() => {
      if (D)
        return h.addEventListener("keydown", A, { capture: !0 }), () => h.removeEventListener("keydown", A, { capture: !0 });
    }, [h, D]), u.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Ra = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), _a(), () => {
          n && (d.layersWithOutsidePointerEventsDisabled.delete(f), d.layersWithOutsidePointerEventsDisabled.size === 0 && (h.body.style.pointerEvents = Ra));
        };
    }, [f, h, n, d]), u.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), _a());
    }, [f, d]), u.useEffect(() => {
      const O = () => g({});
      return document.addEventListener(no, O), () => document.removeEventListener(no, O);
    }, []), /* @__PURE__ */ p.jsx(
      L.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: T(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: T(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: T(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
Lt.displayName = jd;
var $d = "DismissableLayerBranch", _s = u.forwardRef((e, t) => {
  const n = u.useContext(Co), r = u.useRef(null), o = q(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(L.div, { ...e, ref: o });
});
_s.displayName = $d;
function Ld() {
  const e = u.useContext(Co), [t, n] = u.useState(null);
  return u.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
function Vd(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: a
  } = t, s = ge(e), i = u.useRef(!1), c = u.useRef(!1), l = u.useRef(/* @__PURE__ */ new Map()), d = u.useRef(() => {
  });
  return u.useEffect(() => {
    function f() {
      c.current = !1, o.current = !1, l.current.clear();
    }
    function m() {
      return Array.from(l.current.values()).some(Boolean);
    }
    function h(w) {
      if (!c.current)
        return;
      const b = w.target;
      b instanceof Node && [...a].some((S) => S.contains(b)) || l.current.set(w.type, !0), w.type === "click" && window.setTimeout(() => {
        c.current && d.current();
      }, 0);
    }
    function g(w) {
      c.current && l.current.set(w.type, !1);
    }
    const v = (w) => {
      if (w.target && !i.current) {
        let b = function() {
          n.removeEventListener("click", d.current);
          const S = m();
          f(), S || Ds(
            Fd,
            s,
            C,
            { discrete: !0 }
          );
        };
        const C = { originalEvent: w };
        c.current = !0, o.current = r && w.button === 0, l.current.clear(), !r || w.button !== 0 ? b() : (n.removeEventListener("click", d.current), d.current = b, n.addEventListener("click", d.current, { once: !0 }));
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
      n.addEventListener(w, h, !0), n.addEventListener(w, g);
    const x = window.setTimeout(() => {
      n.addEventListener("pointerdown", v);
    }, 0);
    return () => {
      window.clearTimeout(x), n.removeEventListener("pointerdown", v), n.removeEventListener("click", d.current);
      for (const w of y)
        n.removeEventListener(w, h, !0), n.removeEventListener(w, g);
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
function Bd(e, t = globalThis?.document) {
  const n = ge(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Ds(Wd, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function _a() {
  const e = new CustomEvent(no);
  document.dispatchEvent(e);
}
function Ds(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? xo(o, a) : o.dispatchEvent(a);
}
var Yd = Lt, Hd = _s, Gd = "Portal", Vt = u.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  le(() => a(!0), []);
  const s = n || o && globalThis?.document?.body;
  return s ? $t.createPortal(/* @__PURE__ */ p.jsx(L.div, { ...r, ref: t }), s) : null;
});
Vt.displayName = Gd;
function Ud(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var be = (e) => {
  const { present: t, children: n } = e, r = zd(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = Kd(r.ref, qd(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
be.displayName = "Presence";
function zd(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), s = e ? "mounted" : "unmounted", [i, c] = Ud(s, {
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
  return u.useEffect(() => {
    const l = Nn(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [i]), le(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const m = a.current, h = Nn(l);
      e ? c("MOUNT") : h === "none" || l?.display === "none" ? c("UNMOUNT") : c(d && m !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), le(() => {
    if (t) {
      let l;
      const d = t.ownerDocument.defaultView ?? window, f = (h) => {
        const v = Nn(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (c("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, m = (h) => {
        h.target === t && (a.current = Nn(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(l), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: u.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function Da(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Kd(...e) {
  const t = u.useRef(e);
  return t.current = e, u.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const a = r.map((s) => {
      const i = Da(s, n);
      return !o && typeof i == "function" && (o = !0), i;
    });
    if (o)
      return () => {
        for (let s = 0; s < a.length; s++) {
          const i = a[s];
          typeof i == "function" ? i() : Da(r[s], null);
        }
      };
  }, []);
}
function Nn(e) {
  return e?.animationName || "none";
}
function qd(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Xd = u[" useInsertionEffect ".trim().toString()] || le;
function Fe({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = Zd({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : o;
  {
    const d = u.useRef(e !== void 0);
    u.useEffect(() => {
      const f = d.current;
      f !== i && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = i;
    }, [i, r]);
  }
  const l = u.useCallback(
    (d) => {
      if (i) {
        const f = Qd(d) ? d(e) : d;
        f !== e && s.current?.(f);
      } else
        a(d);
    },
    [i, e, a, s]
  );
  return [c, l];
}
function Zd({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return Xd(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    o.current !== n && (a.current?.(n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Qd(e) {
  return typeof e == "function";
}
var Ts = Object.freeze({
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
}), Jd = "VisuallyHidden", Jn = u.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    L.span,
    {
      ...e,
      ref: t,
      style: { ...Ts, ...e.style }
    }
  )
);
Jn.displayName = Jd;
var ef = Jn, So = "ToastProvider", [ko, tf, nf] = Qn("Toast"), [Is] = ye("Toast", [nf]), [rf, er] = Is(So), As = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    announcerContainer: s,
    children: i
  } = e, [c, l] = u.useState(null), [d, f] = u.useState(0), m = u.useRef(!1), h = u.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${So}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ p.jsx(ko.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
    rf,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: d,
      viewport: c,
      onViewportChange: l,
      onToastAdd: u.useCallback(() => f((g) => g + 1), []),
      onToastRemove: u.useCallback(() => f((g) => g - 1), []),
      isFocusedToastEscapeKeyDownRef: m,
      isClosePausedRef: h,
      announcerContainer: s,
      children: i
    }
  ) });
};
As.displayName = So;
var js = "ToastViewport", of = ["F8"], ro = "toast.viewportPause", oo = "toast.viewportResume", af = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = of,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = er(js, n), i = tf(n), c = u.useRef(null), l = u.useRef(null), d = u.useRef(null), f = u.useRef(null), m = q(t, f, s.onViewportChange), h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = s.toastCount > 0;
    u.useEffect(() => {
      const y = (x) => {
        r.length !== 0 && r.every((b) => x[b] || x.code === b) && f.current?.focus();
      };
      return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
    }, [r]), u.useEffect(() => {
      const y = c.current, x = f.current;
      if (g && y && x) {
        const w = () => {
          if (!s.isClosePausedRef.current) {
            const k = new CustomEvent(ro);
            x.dispatchEvent(k), s.isClosePausedRef.current = !0;
          }
        }, b = () => {
          if (s.isClosePausedRef.current) {
            const k = new CustomEvent(oo);
            x.dispatchEvent(k), s.isClosePausedRef.current = !1;
          }
        }, C = (k) => {
          !y.contains(k.relatedTarget) && b();
        }, S = () => {
          y.contains(document.activeElement) || b();
        };
        return y.addEventListener("focusin", w), y.addEventListener("focusout", C), y.addEventListener("pointermove", w), y.addEventListener("pointerleave", S), window.addEventListener("blur", w), window.addEventListener("focus", b), () => {
          y.removeEventListener("focusin", w), y.removeEventListener("focusout", C), y.removeEventListener("pointermove", w), y.removeEventListener("pointerleave", S), window.removeEventListener("blur", w), window.removeEventListener("focus", b);
        };
      }
    }, [g, s.isClosePausedRef]);
    const v = u.useCallback(
      ({ tabbingDirection: y }) => {
        const w = i().map((b) => {
          const C = b.ref.current, S = [C, ...Sf(C)];
          return y === "forwards" ? S : S.reverse();
        });
        return (y === "forwards" ? w.reverse() : w).flat();
      },
      [i]
    );
    return u.useEffect(() => {
      const y = f.current;
      if (y) {
        const x = (w) => {
          const b = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !b) {
            const S = document.activeElement, k = w.shiftKey;
            if (w.target === y && k) {
              l.current?.focus();
              return;
            }
            const D = v({ tabbingDirection: k ? "backwards" : "forwards" }), A = D.findIndex((O) => O === S);
            jr(D.slice(A + 1)) ? w.preventDefault() : k ? l.current?.focus() : d.current?.focus();
          }
        };
        return y.addEventListener("keydown", x), () => y.removeEventListener("keydown", x);
      }
    }, [i, v]), /* @__PURE__ */ p.jsxs(
      Hd,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: g ? void 0 : "none" },
        children: [
          g && /* @__PURE__ */ p.jsx(
            ao,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const y = v({
                  tabbingDirection: "forwards"
                });
                jr(y);
              }
            }
          ),
          /* @__PURE__ */ p.jsx(ko.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(L.ol, { tabIndex: -1, ...a, ref: m }) }),
          g && /* @__PURE__ */ p.jsx(
            ao,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const y = v({
                  tabbingDirection: "backwards"
                });
                jr(y);
              }
            }
          )
        ]
      }
    );
  }
);
af.displayName = js;
var Fs = "ToastFocusProxy", ao = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = er(Fs, n);
    return /* @__PURE__ */ p.jsx(
      Jn,
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
ao.displayName = Fs;
var mn = "Toast", sf = "toast.swipeStart", cf = "toast.swipeMove", lf = "toast.swipeCancel", uf = "toast.swipeEnd", df = u.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [i, c] = Fe({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: mn
    });
    return /* @__PURE__ */ p.jsx(be, { present: n || i, children: /* @__PURE__ */ p.jsx(
      mf,
      {
        open: i,
        ...s,
        ref: t,
        onClose: () => c(!1),
        onPause: ge(e.onPause),
        onResume: ge(e.onResume),
        onSwipeStart: T(e.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: T(e.onSwipeMove, (l) => {
          const { x: d, y: f } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: T(e.onSwipeCancel, (l) => {
          l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: T(e.onSwipeEnd, (l) => {
          const { x: d, y: f } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), c(!1);
        })
      }
    ) });
  }
);
df.displayName = mn;
var [ff, pf] = Is(mn, {
  onClose() {
  }
}), mf = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: a,
      onClose: s,
      onEscapeKeyDown: i,
      onPause: c,
      onResume: l,
      onSwipeStart: d,
      onSwipeMove: f,
      onSwipeCancel: m,
      onSwipeEnd: h,
      ...g
    } = e, v = er(mn, n), [y, x] = u.useState(null), w = q(t, x), b = u.useRef(null), C = u.useRef(null), S = o || v.duration, k = u.useRef(0), P = u.useRef(S), R = u.useRef(0), { onToastAdd: D, onToastRemove: A } = v, O = ge(() => {
      y?.contains(document.activeElement) && v.viewport?.focus(), s();
    }), j = u.useCallback(
      (N) => {
        !N || N === 1 / 0 || (window.clearTimeout(R.current), k.current = (/* @__PURE__ */ new Date()).getTime(), R.current = window.setTimeout(O, N));
      },
      [O]
    );
    u.useEffect(() => {
      const N = v.viewport;
      if (N) {
        const Y = () => {
          j(P.current), l?.();
        }, V = () => {
          const U = (/* @__PURE__ */ new Date()).getTime() - k.current;
          P.current = P.current - U, window.clearTimeout(R.current), c?.();
        };
        return N.addEventListener(ro, V), N.addEventListener(oo, Y), () => {
          N.removeEventListener(ro, V), N.removeEventListener(oo, Y);
        };
      }
    }, [v.viewport, S, c, l, j]), u.useEffect(() => {
      a && !v.isClosePausedRef.current && j(S);
    }, [a, S, v.isClosePausedRef, j]), u.useEffect(() => () => {
      window.clearTimeout(R.current);
    }, []), u.useEffect(() => (D(), () => A()), [D, A]);
    const F = u.useMemo(() => y ? Bs(y) : null, [y]);
    return v.viewport ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      F && /* @__PURE__ */ p.jsx(
        hf,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: F
        }
      ),
      /* @__PURE__ */ p.jsx(ff, { scope: n, onClose: O, children: $t.createPortal(
        /* @__PURE__ */ p.jsx(ko.ItemSlot, { scope: n, children: /* @__PURE__ */ p.jsx(
          Yd,
          {
            asChild: !0,
            onEscapeKeyDown: T(i, () => {
              v.isFocusedToastEscapeKeyDownRef.current || O(), v.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ p.jsx(
              L.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...g,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: T(e.onKeyDown, (N) => {
                  N.key === "Escape" && (i?.(N.nativeEvent), N.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, O()));
                }),
                onPointerDown: T(e.onPointerDown, (N) => {
                  N.button === 0 && (b.current = { x: N.clientX, y: N.clientY });
                }),
                onPointerMove: T(e.onPointerMove, (N) => {
                  if (!b.current) return;
                  const Y = N.clientX - b.current.x, V = N.clientY - b.current.y, U = !!C.current, W = ["left", "right"].includes(v.swipeDirection), _ = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, z = W ? _(0, Y) : 0, E = W ? 0 : _(0, V), $ = N.pointerType === "touch" ? 10 : 2, G = { x: z, y: E }, X = { originalEvent: N, delta: G };
                  U ? (C.current = G, On(cf, f, X, {
                    discrete: !1
                  })) : Ta(G, v.swipeDirection, $) ? (C.current = G, On(sf, d, X, {
                    discrete: !1
                  }), N.target.setPointerCapture(N.pointerId)) : (Math.abs(Y) > $ || Math.abs(V) > $) && (b.current = null);
                }),
                onPointerUp: T(e.onPointerUp, (N) => {
                  const Y = C.current, V = N.target;
                  if (V.hasPointerCapture(N.pointerId) && V.releasePointerCapture(N.pointerId), C.current = null, b.current = null, Y) {
                    const U = N.currentTarget, W = { originalEvent: N, delta: Y };
                    Ta(Y, v.swipeDirection, v.swipeThreshold) ? On(uf, h, W, {
                      discrete: !0
                    }) : On(
                      lf,
                      m,
                      W,
                      {
                        discrete: !0
                      }
                    ), U.addEventListener("click", (_) => _.preventDefault(), {
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
), hf = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = er(mn, t), [a, s] = u.useState(!1), [i, c] = u.useState(!1);
  return xf(() => s(!0)), u.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), i ? null : /* @__PURE__ */ p.jsx(Vt, { asChild: !0, container: o.announcerContainer || void 0, children: /* @__PURE__ */ p.jsx(Jn, { ...r, children: a && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, vf = "ToastTitle", gf = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(L.div, { ...r, ref: t });
  }
);
gf.displayName = vf;
var yf = "ToastDescription", bf = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(L.div, { ...r, ref: t });
  }
);
bf.displayName = yf;
var Ws = "ToastAction", wf = u.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ p.jsx(Vs, { altText: n, asChild: !0, children: /* @__PURE__ */ p.jsx(Ls, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Ws}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
wf.displayName = Ws;
var $s = "ToastClose", Ls = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = pf($s, n);
    return /* @__PURE__ */ p.jsx(Vs, { asChild: !0, children: /* @__PURE__ */ p.jsx(
      L.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: T(e.onClick, o.onClose)
      }
    ) });
  }
);
Ls.displayName = $s;
var Vs = u.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ p.jsx(
    L.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Bs(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Cf(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Bs(r));
    }
  }), t;
}
function On(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? xo(o, a) : o.dispatchEvent(a);
}
var Ta = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function xf(e = () => {
}) {
  const t = ge(e);
  le(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function Cf(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Sf(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function jr(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var kf = As, Fr = { exports: {} };
var Ia;
function Ef() {
  return Ia || (Ia = 1, (function(e) {
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
  })(Fr)), Fr.exports;
}
var Mf = Ef();
const Z = /* @__PURE__ */ bd(Mf), Ys = pn(
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
    return r && typeof document < "u" ? yd(a, document.body) : a;
  }
);
Ys.displayName = "StyleProvider";
var Pf = u[" useId ".trim().toString()] || (() => {
}), Nf = 0;
function je(e) {
  const [t, n] = u.useState(Pf());
  return le(() => {
    n((r) => r ?? String(Nf++));
  }, [e]), t ? `radix-${t}` : "";
}
var Wr = "focusScope.autoFocusOnMount", $r = "focusScope.autoFocusOnUnmount", Aa = { bubbles: !1, cancelable: !0 }, Of = "FocusScope", hn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, c] = u.useState(null), l = ge(o), d = ge(a), f = u.useRef(null), m = q(t, c), h = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let v = function(b) {
        if (h.paused || !i) return;
        const C = b.target;
        i.contains(C) ? f.current = C : tt(f.current, { select: !0 });
      }, y = function(b) {
        if (h.paused || !i) return;
        const C = b.relatedTarget;
        C !== null && (i.contains(C) || tt(f.current, { select: !0 }));
      }, x = function(b) {
        if (document.activeElement === document.body)
          for (const S of b)
            S.removedNodes.length > 0 && tt(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", y);
      const w = new MutationObserver(x);
      return i && w.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", y), w.disconnect();
      };
    }
  }, [r, i, h.paused]), u.useEffect(() => {
    if (i) {
      Fa.add(h);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const x = new CustomEvent(Wr, Aa);
        i.addEventListener(Wr, l), i.dispatchEvent(x), x.defaultPrevented || (Rf(Af(Hs(i)), { select: !0 }), document.activeElement === v && tt(i));
      }
      return () => {
        i.removeEventListener(Wr, l), setTimeout(() => {
          const x = new CustomEvent($r, Aa);
          i.addEventListener($r, d), i.dispatchEvent(x), x.defaultPrevented || tt(v ?? document.body, { select: !0 }), i.removeEventListener($r, d), Fa.remove(h);
        }, 0);
      };
    }
  }, [i, l, d, h]);
  const g = u.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const y = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
      if (y && x) {
        const w = v.currentTarget, [b, C] = _f(w);
        b && C ? !v.shiftKey && x === C ? (v.preventDefault(), n && tt(b, { select: !0 })) : v.shiftKey && x === b && (v.preventDefault(), n && tt(C, { select: !0 })) : x === w && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ p.jsx(L.div, { tabIndex: -1, ...s, ref: m, onKeyDown: g });
});
hn.displayName = Of;
function Rf(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (tt(r, { select: t }), document.activeElement !== n) return;
}
function _f(e) {
  const t = Hs(e), n = ja(t, e), r = ja(t.reverse(), e);
  return [n, r];
}
function Hs(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ja(e, t) {
  for (const n of e)
    if (!Df(n, { upTo: t })) return n;
}
function Df(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Tf(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function tt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Tf(e) && t && e.select();
  }
}
var Fa = If();
function If() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Wa(e, t), e.unshift(t);
    },
    remove(t) {
      e = Wa(e, t), e[0]?.resume();
    }
  };
}
function Wa(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Af(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Rn = 0, Et = null;
function tr() {
  u.useEffect(() => {
    Et || (Et = { start: $a(), end: $a() });
    const { start: e, end: t } = Et;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Rn++, () => {
      Rn === 1 && (Et?.start.remove(), Et?.end.remove(), Et = null), Rn = Math.max(0, Rn - 1);
    };
  }, []);
}
function $a() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Be = function() {
  return Be = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Be.apply(this, arguments);
};
function Gs(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function jf(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Fn = "right-scroll-bar-position", Wn = "width-before-scroll-bar", Ff = "with-scroll-bars-hidden", Wf = "--removed-body-scroll-bar-size";
function Lr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function $f(e, t) {
  var n = Me(function() {
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
var Lf = typeof window < "u" ? u.useLayoutEffect : u.useEffect, La = /* @__PURE__ */ new WeakMap();
function Vf(e, t) {
  var n = $f(null, function(r) {
    return e.forEach(function(o) {
      return Lr(o, r);
    });
  });
  return Lf(function() {
    var r = La.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || Lr(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Lr(i, s);
      });
    }
    La.set(n, e);
  }, [e]), n;
}
function Bf(e) {
  return e;
}
function Yf(e, t) {
  t === void 0 && (t = Bf);
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
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(d) {
          s.push(d), l();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function Hf(e) {
  e === void 0 && (e = {});
  var t = Yf(null);
  return t.options = Be({ async: !0, ssr: !1 }, e), t;
}
var Us = function(e) {
  var t = e.sideCar, n = Gs(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, Be({}, n));
};
Us.isSideCarExport = !0;
function Gf(e, t) {
  return e.useMedium(t), Us;
}
var zs = Hf(), Vr = function() {
}, nr = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Vr,
    onWheelCapture: Vr,
    onTouchMoveCapture: Vr
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, f = e.shards, m = e.sideCar, h = e.noRelative, g = e.noIsolation, v = e.inert, y = e.allowPinchZoom, x = e.as, w = x === void 0 ? "div" : x, b = e.gapMode, C = Gs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = m, k = Vf([n, t]), P = Be(Be({}, C), o);
  return u.createElement(
    u.Fragment,
    null,
    d && u.createElement(S, { sideCar: zs, removeScrollBar: l, shards: f, noRelative: h, noIsolation: g, inert: v, setCallbacks: a, allowPinchZoom: !!y, lockRef: n, gapMode: b }),
    s ? u.cloneElement(u.Children.only(i), Be(Be({}, P), { ref: k })) : u.createElement(w, Be({}, P, { className: c, ref: k }), i)
  );
});
nr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
nr.classNames = {
  fullWidth: Wn,
  zeroRight: Fn
};
var Uf = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function zf() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Uf();
  return t && e.setAttribute("nonce", t), e;
}
function Kf(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function qf(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Xf = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = zf()) && (Kf(t, n), qf(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Zf = function() {
  var e = Xf();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ks = function() {
  var e = Zf(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Qf = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Br = function(e) {
  return parseInt(e || "", 10) || 0;
}, Jf = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Br(n), Br(r), Br(o)];
}, ep = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Qf;
  var t = Jf(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, tp = Ks(), Dt = "data-scroll-locked", np = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ff, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Dt, `] {
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
  
  .`).concat(Fn, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Wn, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Fn, " .").concat(Fn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Wn, " .").concat(Wn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Dt, `] {
    `).concat(Wf, ": ").concat(i, `px;
  }
`);
}, Va = function() {
  var e = parseInt(document.body.getAttribute(Dt) || "0", 10);
  return isFinite(e) ? e : 0;
}, rp = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Dt, (Va() + 1).toString()), function() {
      var e = Va() - 1;
      e <= 0 ? document.body.removeAttribute(Dt) : document.body.setAttribute(Dt, e.toString());
    };
  }, []);
}, op = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  rp();
  var a = u.useMemo(function() {
    return ep(o);
  }, [o]);
  return u.createElement(tp, { styles: np(a, !t, o, n ? "" : "!important") });
}, so = !1;
if (typeof window < "u")
  try {
    var _n = Object.defineProperty({}, "passive", {
      get: function() {
        return so = !0, !0;
      }
    });
    window.addEventListener("test", _n, _n), window.removeEventListener("test", _n, _n);
  } catch {
    so = !1;
  }
var Mt = so ? { passive: !1 } : !1, ap = function(e) {
  return e.tagName === "TEXTAREA";
}, qs = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ap(e) && n[t] === "visible")
  );
}, sp = function(e) {
  return qs(e, "overflowY");
}, ip = function(e) {
  return qs(e, "overflowX");
}, Ba = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Xs(e, r);
    if (o) {
      var a = Zs(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, cp = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, lp = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Xs = function(e, t) {
  return e === "v" ? sp(t) : ip(t);
}, Zs = function(e, t) {
  return e === "v" ? cp(t) : lp(t);
}, up = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, dp = function(e, t, n, r, o) {
  var a = up(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, d = s > 0, f = 0, m = 0;
  do {
    if (!i)
      break;
    var h = Zs(e, i), g = h[0], v = h[1], y = h[2], x = v - y - a * g;
    (g || x) && Xs(e, i) && (f += x, m += g);
    var w = i.parentNode;
    i = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(m) < 1) && (l = !0), l;
}, Dn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ya = function(e) {
  return [e.deltaX, e.deltaY];
}, Ha = function(e) {
  return e && "current" in e ? e.current : e;
}, fp = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, pp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, mp = 0, Pt = [];
function hp(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(mp++)[0], a = u.useState(Ks)[0], s = u.useRef(e);
  u.useEffect(function() {
    s.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = jf([e.lockRef.current], (e.shards || []).map(Ha), !0).filter(Boolean);
      return v.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = u.useCallback(function(v, y) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var x = Dn(v), w = n.current, b = "deltaX" in v ? v.deltaX : w[0] - x[0], C = "deltaY" in v ? v.deltaY : w[1] - x[1], S, k = v.target, P = Math.abs(b) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && P === "h" && k.type === "range")
      return !1;
    var R = window.getSelection(), D = R && R.anchorNode, A = D ? D === k || D.contains(k) : !1;
    if (A)
      return !1;
    var O = Ba(P, k);
    if (!O)
      return !0;
    if (O ? S = P : (S = P === "v" ? "h" : "v", O = Ba(P, k)), !O)
      return !1;
    if (!r.current && "changedTouches" in v && (b || C) && (r.current = S), !S)
      return !0;
    var j = r.current || S;
    return dp(j, y, v, j === "h" ? b : C);
  }, []), c = u.useCallback(function(v) {
    var y = v;
    if (!(!Pt.length || Pt[Pt.length - 1] !== a)) {
      var x = "deltaY" in y ? Ya(y) : Dn(y), w = t.current.filter(function(S) {
        return S.name === y.type && (S.target === y.target || y.target === S.shadowParent) && fp(S.delta, x);
      })[0];
      if (w && w.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!w) {
        var b = (s.current.shards || []).map(Ha).filter(Boolean).filter(function(S) {
          return S.contains(y.target);
        }), C = b.length > 0 ? i(y, b[0]) : !s.current.noIsolation;
        C && y.cancelable && y.preventDefault();
      }
    }
  }, []), l = u.useCallback(function(v, y, x, w) {
    var b = { name: v, delta: y, target: x, should: w, shadowParent: vp(x) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== b;
      });
    }, 1);
  }, []), d = u.useCallback(function(v) {
    n.current = Dn(v), r.current = void 0;
  }, []), f = u.useCallback(function(v) {
    l(v.type, Ya(v), v.target, i(v, e.lockRef.current));
  }, []), m = u.useCallback(function(v) {
    l(v.type, Dn(v), v.target, i(v, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Pt.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, Mt), document.addEventListener("touchmove", c, Mt), document.addEventListener("touchstart", d, Mt), function() {
      Pt = Pt.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, Mt), document.removeEventListener("touchmove", c, Mt), document.removeEventListener("touchstart", d, Mt);
    };
  }, []);
  var h = e.removeScrollBar, g = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    g ? u.createElement(a, { styles: pp(o) }) : null,
    h ? u.createElement(op, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function vp(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const gp = Gf(zs, hp);
var vn = u.forwardRef(function(e, t) {
  return u.createElement(nr, Be({}, e, { ref: t, sideCar: gp }));
});
vn.classNames = nr.classNames;
var yp = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Nt = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), In = {}, Yr = 0, Qs = function(e) {
  return e && (e.host || Qs(e.parentNode));
}, bp = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Qs(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, wp = function(e, t, n, r) {
  var o = bp(t, Array.isArray(e) ? e : [e]);
  In[n] || (In[n] = /* @__PURE__ */ new WeakMap());
  var a = In[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || i.has(f) || (i.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var d = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (i.has(m))
        d(m);
      else
        try {
          var h = m.getAttribute(r), g = h !== null && h !== "false", v = (Nt.get(m) || 0) + 1, y = (a.get(m) || 0) + 1;
          Nt.set(m, v), a.set(m, y), s.push(m), v === 1 && g && Tn.set(m, !0), y === 1 && m.setAttribute(n, "true"), g || m.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", m, x);
        }
    });
  };
  return d(t), i.clear(), Yr++, function() {
    s.forEach(function(f) {
      var m = Nt.get(f) - 1, h = a.get(f) - 1;
      Nt.set(f, m), a.set(f, h), m || (Tn.has(f) || f.removeAttribute(r), Tn.delete(f)), h || f.removeAttribute(n);
    }), Yr--, Yr || (Nt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), In = {});
  };
}, rr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = yp(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), wp(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, or = "Dialog", [Js] = ye(or), [xp, Le] = Js(or), ei = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = u.useRef(null), c = u.useRef(null), [l, d] = Fe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: or
  });
  return /* @__PURE__ */ p.jsx(
    xp,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: je(),
      titleId: je(),
      descriptionId: je(),
      open: l,
      onOpenChange: d,
      onOpenToggle: u.useCallback(() => d((f) => !f), [d]),
      modal: s,
      children: n
    }
  );
};
ei.displayName = or;
var ti = "DialogTrigger", Cp = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Le(ti, n), a = q(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      L.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": Mo(o.open),
        ...r,
        ref: a,
        onClick: T(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Cp.displayName = ti;
var Eo = "DialogPortal", [Sp, ni] = Js(Eo, {
  forceMount: void 0
}), ri = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Le(Eo, t);
  return /* @__PURE__ */ p.jsx(Sp, { scope: t, forceMount: n, children: u.Children.map(r, (s) => /* @__PURE__ */ p.jsx(be, { present: n || a.open, children: /* @__PURE__ */ p.jsx(Vt, { asChild: !0, container: o, children: s }) })) });
};
ri.displayName = Eo;
var Vn = "DialogOverlay", oi = u.forwardRef(
  (e, t) => {
    const n = ni(Vn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Le(Vn, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ p.jsx(be, { present: r || a.open, children: /* @__PURE__ */ p.jsx(Ep, { ...o, ref: t }) }) : null;
  }
);
oi.displayName = Vn;
var kp = /* @__PURE__ */ ot("DialogOverlay.RemoveScroll"), Ep = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Le(Vn, n), a = Ld(), s = q(t, a);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(vn, { as: kp, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        L.div,
        {
          "data-state": Mo(o.open),
          ...r,
          ref: s,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), It = "DialogContent", ai = u.forwardRef(
  (e, t) => {
    const n = ni(It, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Le(It, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(be, { present: r || a.open, children: a.modal ? /* @__PURE__ */ p.jsx(Mp, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(Pp, { ...o, ref: t }) });
  }
);
ai.displayName = It;
var Mp = u.forwardRef(
  (e, t) => {
    const n = Le(It, e.__scopeDialog), r = u.useRef(null), o = q(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return rr(a);
    }, []), /* @__PURE__ */ p.jsx(
      si,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        onCloseAutoFocus: T(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: T(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: T(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Pp = u.forwardRef(
  (e, t) => {
    const n = Le(It, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      si,
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
), si = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Le(It, n);
    return tr(), /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(
      hn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ p.jsx(
          Lt,
          {
            role: "dialog",
            id: i.contentId,
            "aria-describedby": i.descriptionId,
            "aria-labelledby": i.titleId,
            "data-state": Mo(i.open),
            ...s,
            ref: t,
            deferPointerDownOutside: !0,
            onDismiss: () => i.onOpenChange(!1)
          }
        )
      }
    ) });
  }
), ii = "DialogTitle", ci = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Le(ii, n);
    return /* @__PURE__ */ p.jsx(L.h2, { id: o.titleId, ...r, ref: t });
  }
);
ci.displayName = ii;
var li = "DialogDescription", ui = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Le(li, n);
    return /* @__PURE__ */ p.jsx(L.p, { id: o.descriptionId, ...r, ref: t });
  }
);
ui.displayName = li;
var di = "DialogClose", fi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Le(di, n);
    return /* @__PURE__ */ p.jsx(
      L.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: T(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
fi.displayName = di;
function Mo(e) {
  return e ? "open" : "closed";
}
function pi(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Np = ["color"], Op = /* @__PURE__ */ pn(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = pi(e, Np);
  return yt("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), yt("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Rp = ["color"], _p = /* @__PURE__ */ pn(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = pi(e, Rp);
  return yt("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), yt("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Dp = u.createContext(void 0);
function gn(e) {
  const t = u.useContext(Dp);
  return e || t || "ltr";
}
var Po = "Avatar", [Tp] = ye(Po), Ip = [
  0,
  () => {
  }
], [Ap, mi] = Tp(Po), hi = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = u.useState("idle"), [s, i] = Fp();
    return /* @__PURE__ */ p.jsx(
      Ap,
      {
        scope: n,
        imageLoadingStatus: o,
        setImageLoadingStatus: a,
        imageCount: s,
        setImageCount: i,
        children: /* @__PURE__ */ p.jsx(L.span, { ...r, ref: t })
      }
    );
  }
);
hi.displayName = Po;
var vi = "AvatarImage", gi = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o, ...a } = e, s = mi(vi, n);
    Wp(s.setImageCount);
    const i = jp(r, {
      referrerPolicy: a.referrerPolicy,
      crossOrigin: a.crossOrigin,
      loadingStatus: s.imageLoadingStatus,
      setLoadingStatus: s.setImageLoadingStatus
    }), c = ge((d) => {
      o?.(d);
    }), l = u.useRef(i);
    return le(() => {
      const d = l.current;
      l.current = i, i !== d && c(i);
    }, [i, c]), i === "loaded" ? /* @__PURE__ */ p.jsx(L.img, { ...a, ref: t, src: r }) : null;
  }
);
gi.displayName = vi;
var yi = "AvatarFallback", bi = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = mi(yi, n), [s, i] = u.useState(r === void 0);
    return u.useEffect(() => {
      if (r !== void 0) {
        const c = window.setTimeout(() => i(!0), r);
        return () => window.clearTimeout(c);
      }
    }, [r]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ p.jsx(L.span, { ...o, ref: t }) : null;
  }
);
bi.displayName = yi;
function jp(e, {
  loadingStatus: t,
  setLoadingStatus: n,
  referrerPolicy: r,
  crossOrigin: o
}) {
  return le(() => {
    if (!e) {
      n("error");
      return;
    }
    const a = new window.Image(), s = (c) => {
      const l = c.currentTarget;
      n(Ga(l));
    }, i = () => n("error");
    return a.addEventListener("load", s), a.addEventListener("error", i), r && (a.referrerPolicy = r), a.crossOrigin = o ?? null, a.src = e, n(Ga(a)), () => {
      a.removeEventListener("load", s), a.removeEventListener("error", i), n("idle");
    };
  }, [e, o, r, n]), t;
}
function Ga(e) {
  return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading";
}
function Fp() {
  let e = Ip;
  {
    e = u.useState(0);
    const [t] = e, n = u.useRef(!1);
    u.useEffect(() => {
      t > 1 && !n.current && (n.current = !0, console.warn(
        "Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."
      ));
    }, [t]);
  }
  return e;
}
function Wp(e) {
  u.useEffect(() => (e((t) => t + 1), () => {
    e((t) => t - 1);
  }), [e]);
}
function ar(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function sr(e) {
  const [t, n] = u.useState(void 0);
  return le(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, i = l.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({ width: s, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var ir = "Checkbox", [$p] = ye(ir), [Lp, No] = $p(ir);
function Vp(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: s,
    name: i,
    onCheckedChange: c,
    required: l,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [m, h] = Fe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: ir
  }), [g, v] = u.useState(null), [y, x] = u.useState(null), w = u.useRef(!1), b = g ? !!s || !!g.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), C = {
    checked: m,
    disabled: a,
    setChecked: h,
    control: g,
    setControl: v,
    name: i,
    form: s,
    value: d,
    hasConsumerStoppedPropagationRef: w,
    required: l,
    defaultChecked: rt(o) ? !1 : o,
    isFormControl: b,
    bubbleInput: y,
    setBubbleInput: x
  };
  return /* @__PURE__ */ p.jsx(
    Lp,
    {
      scope: t,
      ...C,
      children: Bp(f) ? f(C) : r
    }
  );
}
var wi = "CheckboxTrigger", xi = u.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: s,
      disabled: i,
      checked: c,
      required: l,
      setControl: d,
      setChecked: f,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: h,
      bubbleInput: g
    } = No(wi, e), v = q(o, d), y = u.useRef(c);
    return u.useEffect(() => {
      const x = a?.form;
      if (x) {
        const w = () => f(y.current);
        return x.addEventListener("reset", w), () => x.removeEventListener("reset", w);
      }
    }, [a, f]), /* @__PURE__ */ p.jsx(
      L.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": rt(c) ? "mixed" : c,
        "aria-required": l,
        "data-state": Pi(c),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: v,
        onKeyDown: T(t, (x) => {
          x.key === "Enter" && x.preventDefault();
        }),
        onClick: T(n, (x) => {
          f((w) => rt(w) ? !0 : !w), g && h && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation());
        })
      }
    );
  }
);
xi.displayName = wi;
var Ci = u.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: s,
      disabled: i,
      value: c,
      onCheckedChange: l,
      form: d,
      ...f
    } = e;
    return /* @__PURE__ */ p.jsx(
      Vp,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: i,
        required: s,
        onCheckedChange: l,
        name: r,
        form: d,
        value: c,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx(
            xi,
            {
              ...f,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          m && /* @__PURE__ */ p.jsx(
            Mi,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Ci.displayName = ir;
var Si = "CheckboxIndicator", ki = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = No(Si, n);
    return /* @__PURE__ */ p.jsx(
      be,
      {
        present: r || rt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p.jsx(
          L.span,
          {
            "data-state": Pi(a.checked),
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
ki.displayName = Si;
var Ei = "CheckboxBubbleInput", Mi = u.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: s,
      required: i,
      disabled: c,
      name: l,
      value: d,
      form: f,
      bubbleInput: m,
      setBubbleInput: h
    } = No(Ei, e), g = q(n, h), v = ar(a), y = sr(r);
    u.useEffect(() => {
      const w = m;
      if (!w) return;
      const b = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, k = !o.current;
      if (v !== a && S) {
        const P = new Event("click", { bubbles: k });
        w.indeterminate = rt(a), S.call(w, rt(a) ? !1 : a), w.dispatchEvent(P);
      }
    }, [m, v, a, o]);
    const x = u.useRef(rt(a) ? !1 : a);
    return /* @__PURE__ */ p.jsx(
      L.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: s ?? x.current,
        required: i,
        disabled: c,
        name: l,
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
Mi.displayName = Ei;
function Bp(e) {
  return typeof e == "function";
}
function rt(e) {
  return e === "indeterminate";
}
function Pi(e) {
  return rt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Yp = ["top", "right", "bottom", "left"], at = Math.min, Ee = Math.max, Bn = Math.round, An = Math.floor, Ge = (e) => ({
  x: e,
  y: e
}), Hp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function io(e, t, n) {
  return Ee(e, at(t, n));
}
function Ze(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qe(e) {
  return e.split("-")[0];
}
function Bt(e) {
  return e.split("-")[1];
}
function Oo(e) {
  return e === "x" ? "y" : "x";
}
function Ro(e) {
  return e === "y" ? "height" : "width";
}
function Ye(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function _o(e) {
  return Oo(Ye(e));
}
function Gp(e, t, n) {
  n === void 0 && (n = !1);
  const r = Bt(e), o = _o(e), a = Ro(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Yn(s)), [s, Yn(s)];
}
function Up(e) {
  const t = Yn(e);
  return [co(e), t, co(t)];
}
function co(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Ua = ["left", "right"], za = ["right", "left"], zp = ["top", "bottom"], Kp = ["bottom", "top"];
function qp(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? za : Ua : t ? Ua : za;
    case "left":
    case "right":
      return t ? zp : Kp;
    default:
      return [];
  }
}
function Xp(e, t, n, r) {
  const o = Bt(e);
  let a = qp(Qe(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(co)))), a;
}
function Yn(e) {
  const t = Qe(e);
  return Hp[t] + e.slice(t.length);
}
function Zp(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ni(e) {
  return typeof e != "number" ? Zp(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Hn(e) {
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
function Ka(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Ye(t), s = _o(t), i = Ro(s), c = Qe(t), l = a === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[i] / 2 - o[i] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Bt(t)) {
    case "start":
      h[s] -= m * (n && l ? -1 : 1);
      break;
    case "end":
      h[s] += m * (n && l ? -1 : 1);
      break;
  }
  return h;
}
async function Qp(e, t) {
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
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = Ze(t, e), g = Ni(h), y = i[m ? f === "floating" ? "reference" : "floating" : f], x = Hn(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(y))) == null || n ? y : y.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
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
  }, S = Hn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Jp = 50, em = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Qp
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = Ka(l, r, c), m = r, h = 0;
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
      reset: k
    } = await w({
      x: d,
      y: f,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: g,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = b ?? d, f = C ?? f, g[x] = {
      ...g[x],
      ...S
    }, k && h < Jp && (h++, typeof k == "object" && (k.placement && (m = k.placement), k.rects && (l = k.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: d,
      y: f
    } = Ka(l, m, c)), v = -1);
  }
  return {
    x: d,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: g
  };
}, tm = (e) => ({
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
      element: l,
      padding: d = 0
    } = Ze(e, t) || {};
    if (l == null)
      return {};
    const f = Ni(d), m = {
      x: n,
      y: r
    }, h = _o(o), g = Ro(h), v = await s.getDimensions(l), y = h === "y", x = y ? "top" : "left", w = y ? "bottom" : "right", b = y ? "clientHeight" : "clientWidth", C = a.reference[g] + a.reference[h] - m[h] - a.floating[g], S = m[h] - a.reference[h], k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let P = k ? k[b] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(k))) && (P = i.floating[b] || a.floating[g]);
    const R = C / 2 - S / 2, D = P / 2 - v[g] / 2 - 1, A = at(f[x], D), O = at(f[w], D), j = A, F = P - v[g] - O, N = P / 2 - v[g] / 2 + R, Y = io(j, N, F), V = !c.arrow && Bt(o) != null && N !== Y && a.reference[g] / 2 - (N < j ? A : O) - v[g] / 2 < 0, U = V ? N < j ? N - j : N - F : 0;
    return {
      [h]: m[h] + U,
      data: {
        [h]: Y,
        centerOffset: N - Y - U,
        ...V && {
          alignmentOffset: U
        }
      },
      reset: V
    };
  }
}), nm = function(e) {
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
        elements: l
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...y
      } = Ze(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const x = Qe(o), w = Ye(i), b = Qe(i) === i, C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), S = m || (b || !v ? [Yn(i)] : Up(i)), k = g !== "none";
      !m && k && S.push(...Xp(i, v, g, C));
      const P = [i, ...S], R = await c.detectOverflow(t, y), D = [];
      let A = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && D.push(R[x]), f) {
        const N = Gp(o, s, C);
        D.push(R[N[0]], R[N[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: D
      }], !D.every((N) => N <= 0)) {
        var O, j;
        const N = (((O = a.flip) == null ? void 0 : O.index) || 0) + 1, Y = P[N];
        if (Y && (!(f === "alignment" ? w !== Ye(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((W) => Ye(W.placement) === w ? W.overflows[0] > 0 : !0)))
          return {
            data: {
              index: N,
              overflows: A
            },
            reset: {
              placement: Y
            }
          };
        let V = (j = A.filter((U) => U.overflows[0] <= 0).sort((U, W) => U.overflows[1] - W.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!V)
          switch (h) {
            case "bestFit": {
              var F;
              const U = (F = A.filter((W) => {
                if (k) {
                  const _ = Ye(W.placement);
                  return _ === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  _ === "y";
                }
                return !0;
              }).map((W) => [W.placement, W.overflows.filter((_) => _ > 0).reduce((_, z) => _ + z, 0)]).sort((W, _) => W[1] - _[1])[0]) == null ? void 0 : F[0];
              U && (V = U);
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
function qa(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Xa(e) {
  return Yp.some((t) => e[t] >= 0);
}
const rm = function(e) {
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
      } = Ze(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...a,
            elementContext: "reference"
          }), i = qa(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Xa(i)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...a,
            altBoundary: !0
          }), i = qa(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Xa(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Oi = /* @__PURE__ */ new Set(["left", "top"]);
async function om(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Qe(n), i = Bt(n), c = Ye(n) === "y", l = Oi.has(s) ? -1 : 1, d = a && c ? -1 : 1, f = Ze(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
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
  return i && typeof g == "number" && (h = i === "end" ? g * -1 : g), c ? {
    x: h * d,
    y: m * l
  } : {
    x: m * l,
    y: h * d
  };
}
const am = function(e) {
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
      } = t, c = await om(t, e);
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
}, sm = function(e) {
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
        ...l
      } = Ze(e, t), d = {
        x: n,
        y: r
      }, f = await a.detectOverflow(t, l), m = Ye(Qe(o)), h = Oo(m);
      let g = d[h], v = d[m];
      if (s) {
        const x = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", b = g + f[x], C = g - f[w];
        g = io(b, g, C);
      }
      if (i) {
        const x = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = v + f[x], C = v - f[w];
        v = io(b, v, C);
      }
      const y = c.fn({
        ...t,
        [h]: g,
        [m]: v
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [h]: s,
            [m]: i
          }
        }
      };
    }
  };
}, im = function(e) {
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
        crossAxis: l = !0
      } = Ze(e, t), d = {
        x: n,
        y: r
      }, f = Ye(o), m = Oo(f);
      let h = d[m], g = d[f];
      const v = Ze(i, t), y = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const b = m === "y" ? "height" : "width", C = a.reference[m] - a.floating[b] + y.mainAxis, S = a.reference[m] + a.reference[b] - y.mainAxis;
        h < C ? h = C : h > S && (h = S);
      }
      if (l) {
        var x, w;
        const b = m === "y" ? "width" : "height", C = Oi.has(Qe(o)), S = a.reference[f] - a.floating[b] + (C && ((x = s.offset) == null ? void 0 : x[f]) || 0) + (C ? 0 : y.crossAxis), k = a.reference[f] + a.reference[b] + (C ? 0 : ((w = s.offset) == null ? void 0 : w[f]) || 0) - (C ? y.crossAxis : 0);
        g < S ? g = S : g > k && (g = k);
      }
      return {
        [m]: h,
        [f]: g
      };
    }
  };
}, cm = function(e) {
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
        ...l
      } = Ze(e, t), d = await s.detectOverflow(t, l), f = Qe(o), m = Bt(o), h = Ye(o) === "y", {
        width: g,
        height: v
      } = a.floating;
      let y, x;
      f === "top" || f === "bottom" ? (y = f, x = m === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = f, y = m === "end" ? "top" : "bottom");
      const w = v - d.top - d.bottom, b = g - d.left - d.right, C = at(v - d[y], w), S = at(g - d[x], b), k = !t.middlewareData.shift;
      let P = C, R = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = b), (r = t.middlewareData.shift) != null && r.enabled.y && (P = w), k && !m) {
        const A = Ee(d.left, 0), O = Ee(d.right, 0), j = Ee(d.top, 0), F = Ee(d.bottom, 0);
        h ? R = g - 2 * (A !== 0 || O !== 0 ? A + O : Ee(d.left, d.right)) : P = v - 2 * (j !== 0 || F !== 0 ? j + F : Ee(d.top, d.bottom));
      }
      await c({
        ...t,
        availableWidth: R,
        availableHeight: P
      });
      const D = await s.getDimensions(i.floating);
      return g !== D.width || v !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function cr() {
  return typeof window < "u";
}
function Yt(e) {
  return Ri(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ue(e) {
  var t;
  return (t = (Ri(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ri(e) {
  return cr() ? e instanceof Node || e instanceof Pe(e).Node : !1;
}
function We(e) {
  return cr() ? e instanceof Element || e instanceof Pe(e).Element : !1;
}
function Je(e) {
  return cr() ? e instanceof HTMLElement || e instanceof Pe(e).HTMLElement : !1;
}
function Za(e) {
  return !cr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Pe(e).ShadowRoot;
}
function yn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = $e(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function lm(e) {
  return /^(table|td|th)$/.test(Yt(e));
}
function lr(e) {
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
const um = /transform|translate|scale|rotate|perspective|filter/, dm = /paint|layout|strict|content/, ft = (e) => !!e && e !== "none";
let Hr;
function Do(e) {
  const t = We(e) ? $e(e) : e;
  return ft(t.transform) || ft(t.translate) || ft(t.scale) || ft(t.rotate) || ft(t.perspective) || !To() && (ft(t.backdropFilter) || ft(t.filter)) || um.test(t.willChange || "") || dm.test(t.contain || "");
}
function fm(e) {
  let t = st(e);
  for (; Je(t) && !At(t); ) {
    if (Do(t))
      return t;
    if (lr(t))
      return null;
    t = st(t);
  }
  return null;
}
function To() {
  return Hr == null && (Hr = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Hr;
}
function At(e) {
  return /^(html|body|#document)$/.test(Yt(e));
}
function $e(e) {
  return Pe(e).getComputedStyle(e);
}
function ur(e) {
  return We(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function st(e) {
  if (Yt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Za(e) && e.host || // Fallback.
    Ue(e)
  );
  return Za(t) ? t.host : t;
}
function _i(e) {
  const t = st(e);
  return At(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Je(t) && yn(t) ? t : _i(t);
}
function cn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = _i(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Pe(o);
  if (a) {
    const i = lo(s);
    return t.concat(s, s.visualViewport || [], yn(o) ? o : [], i && n ? cn(i) : []);
  } else
    return t.concat(o, cn(o, [], n));
}
function lo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Di(e) {
  const t = $e(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Je(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Bn(n) !== a || Bn(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Io(e) {
  return We(e) ? e : e.contextElement;
}
function Tt(e) {
  const t = Io(e);
  if (!Je(t))
    return Ge(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Di(t);
  let s = (a ? Bn(n.width) : n.width) / r, i = (a ? Bn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const pm = /* @__PURE__ */ Ge(0);
function Ti(e) {
  const t = Pe(e);
  return !To() || !t.visualViewport ? pm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function mm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Pe(e) ? !1 : t;
}
function bt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Io(e);
  let s = Ge(1);
  t && (r ? We(r) && (s = Tt(r)) : s = Tt(e));
  const i = mm(a, n, r) ? Ti(a) : Ge(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (a) {
    const m = Pe(a), h = r && We(r) ? Pe(r) : r;
    let g = m, v = lo(g);
    for (; v && r && h !== g; ) {
      const y = Tt(v), x = v.getBoundingClientRect(), w = $e(v), b = x.left + (v.clientLeft + parseFloat(w.paddingLeft)) * y.x, C = x.top + (v.clientTop + parseFloat(w.paddingTop)) * y.y;
      c *= y.x, l *= y.y, d *= y.x, f *= y.y, c += b, l += C, g = Pe(v), v = lo(g);
    }
  }
  return Hn({
    width: d,
    height: f,
    x: c,
    y: l
  });
}
function dr(e, t) {
  const n = ur(e).scrollLeft;
  return t ? t.left + n : bt(Ue(e)).left + n;
}
function Ii(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - dr(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function hm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = Ue(r), i = t ? lr(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Ge(1);
  const d = Ge(0), f = Je(r);
  if ((f || !f && !a) && ((Yt(r) !== "body" || yn(s)) && (c = ur(r)), f)) {
    const h = bt(r);
    l = Tt(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const m = s && !f && !a ? Ii(s, c) : Ge(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + d.x + m.x,
    y: n.y * l.y - c.scrollTop * l.y + d.y + m.y
  };
}
function vm(e) {
  return Array.from(e.getClientRects());
}
function gm(e) {
  const t = Ue(e), n = ur(e), r = e.ownerDocument.body, o = Ee(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ee(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + dr(e);
  const i = -n.scrollTop;
  return $e(r).direction === "rtl" && (s += Ee(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const Qa = 25;
function ym(e, t) {
  const n = Pe(e), r = Ue(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const d = To();
    (!d || d && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const l = dr(r);
  if (l <= 0) {
    const d = r.ownerDocument, f = d.body, m = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - h);
    g <= Qa && (a -= g);
  } else l <= Qa && (a += l);
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function bm(e, t) {
  const n = bt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Je(e) ? Tt(e) : Ge(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function Ja(e, t, n) {
  let r;
  if (t === "viewport")
    r = ym(e, n);
  else if (t === "document")
    r = gm(Ue(e));
  else if (We(t))
    r = bm(t, n);
  else {
    const o = Ti(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Hn(r);
}
function Ai(e, t) {
  const n = st(e);
  return n === t || !We(n) || At(n) ? !1 : $e(n).position === "fixed" || Ai(n, t);
}
function wm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = cn(e, [], !1).filter((i) => We(i) && Yt(i) !== "body"), o = null;
  const a = $e(e).position === "fixed";
  let s = a ? st(e) : e;
  for (; We(s) && !At(s); ) {
    const i = $e(s), c = Do(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || yn(s) && !c && Ai(e, s)) ? r = r.filter((d) => d !== s) : o = i, s = st(s);
  }
  return t.set(e, r), r;
}
function xm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? lr(t) ? [] : wm(t, this._c) : [].concat(n), r], i = Ja(t, s[0], o);
  let c = i.top, l = i.right, d = i.bottom, f = i.left;
  for (let m = 1; m < s.length; m++) {
    const h = Ja(t, s[m], o);
    c = Ee(h.top, c), l = at(h.right, l), d = at(h.bottom, d), f = Ee(h.left, f);
  }
  return {
    width: l - f,
    height: d - c,
    x: f,
    y: c
  };
}
function Cm(e) {
  const {
    width: t,
    height: n
  } = Di(e);
  return {
    width: t,
    height: n
  };
}
function Sm(e, t, n) {
  const r = Je(t), o = Ue(t), a = n === "fixed", s = bt(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ge(0);
  function l() {
    c.x = dr(o);
  }
  if (r || !r && !a)
    if ((Yt(t) !== "body" || yn(o)) && (i = ur(t)), r) {
      const h = bt(t, !0, a, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const d = o && !r && !a ? Ii(o, i) : Ge(0), f = s.left + i.scrollLeft - c.x - d.x, m = s.top + i.scrollTop - c.y - d.y;
  return {
    x: f,
    y: m,
    width: s.width,
    height: s.height
  };
}
function Gr(e) {
  return $e(e).position === "static";
}
function es(e, t) {
  if (!Je(e) || $e(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ue(e) === n && (n = n.ownerDocument.body), n;
}
function ji(e, t) {
  const n = Pe(e);
  if (lr(e))
    return n;
  if (!Je(e)) {
    let o = st(e);
    for (; o && !At(o); ) {
      if (We(o) && !Gr(o))
        return o;
      o = st(o);
    }
    return n;
  }
  let r = es(e, t);
  for (; r && lm(r) && Gr(r); )
    r = es(r, t);
  return r && At(r) && Gr(r) && !Do(r) ? n : r || fm(e) || n;
}
const km = async function(e) {
  const t = this.getOffsetParent || ji, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Sm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Em(e) {
  return $e(e).direction === "rtl";
}
const Mm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: hm,
  getDocumentElement: Ue,
  getClippingRect: xm,
  getOffsetParent: ji,
  getElementRects: km,
  getClientRects: vm,
  getDimensions: Cm,
  getScale: Tt,
  isElement: We,
  isRTL: Em
};
function Fi(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Pm(e, t) {
  let n = null, r;
  const o = Ue(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: m,
      height: h
    } = l;
    if (i || t(), !m || !h)
      return;
    const g = An(f), v = An(o.clientWidth - (d + m)), y = An(o.clientHeight - (f + h)), x = An(d), b = {
      rootMargin: -g + "px " + -v + "px " + -y + "px " + -x + "px",
      threshold: Ee(0, at(1, c)) || 1
    };
    let C = !0;
    function S(k) {
      const P = k[0].intersectionRatio;
      if (P !== c) {
        if (!C)
          return s();
        P ? s(!1, P) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Fi(l, e.getBoundingClientRect()) && s(), C = !1;
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
function Nm(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Io(e), d = o || a ? [...l ? cn(l) : [], ...t ? cn(t) : []] : [];
  d.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), a && x.addEventListener("resize", n);
  });
  const f = l && i ? Pm(l, n) : null;
  let m = -1, h = null;
  s && (h = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === l && h && t && (h.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var b;
      (b = h) == null || b.observe(t);
    })), n();
  }), l && !c && h.observe(l), t && h.observe(t));
  let g, v = c ? bt(e) : null;
  c && y();
  function y() {
    const x = bt(e);
    v && !Fi(v, x) && n(), v = x, g = requestAnimationFrame(y);
  }
  return n(), () => {
    var x;
    d.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), f?.(), (x = h) == null || x.disconnect(), h = null, c && cancelAnimationFrame(g);
  };
}
const Om = am, Rm = sm, _m = nm, Dm = cm, Tm = rm, ts = tm, Im = im, Am = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Mm,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return em(e, t, {
    ...o,
    platform: a
  });
};
var jm = typeof document < "u", Fm = function() {
}, $n = jm ? Zn : Fm;
function Gn(e, t) {
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
        if (!Gn(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Gn(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Wi(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ns(e, t) {
  const n = Wi(e);
  return Math.round(t * n) / n;
}
function Ur(e) {
  const t = u.useRef(e);
  return $n(() => {
    t.current = e;
  }), t;
}
function Wm(e) {
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
    open: l
  } = e, [d, f] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, h] = u.useState(r);
  Gn(m, r) || h(r);
  const [g, v] = u.useState(null), [y, x] = u.useState(null), w = u.useCallback((W) => {
    W !== k.current && (k.current = W, v(W));
  }, []), b = u.useCallback((W) => {
    W !== P.current && (P.current = W, x(W));
  }, []), C = a || g, S = s || y, k = u.useRef(null), P = u.useRef(null), R = u.useRef(d), D = c != null, A = Ur(c), O = Ur(o), j = Ur(l), F = u.useCallback(() => {
    if (!k.current || !P.current)
      return;
    const W = {
      placement: t,
      strategy: n,
      middleware: m
    };
    O.current && (W.platform = O.current), Am(k.current, P.current, W).then((_) => {
      const z = {
        ..._,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: j.current !== !1
      };
      N.current && !Gn(R.current, z) && (R.current = z, $t.flushSync(() => {
        f(z);
      }));
    });
  }, [m, t, n, O, j]);
  $n(() => {
    l === !1 && R.current.isPositioned && (R.current.isPositioned = !1, f((W) => ({
      ...W,
      isPositioned: !1
    })));
  }, [l]);
  const N = u.useRef(!1);
  $n(() => (N.current = !0, () => {
    N.current = !1;
  }), []), $n(() => {
    if (C && (k.current = C), S && (P.current = S), C && S) {
      if (A.current)
        return A.current(C, S, F);
      F();
    }
  }, [C, S, F, A, D]);
  const Y = u.useMemo(() => ({
    reference: k,
    floating: P,
    setReference: w,
    setFloating: b
  }), [w, b]), V = u.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), U = u.useMemo(() => {
    const W = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return W;
    const _ = ns(V.floating, d.x), z = ns(V.floating, d.y);
    return i ? {
      ...W,
      transform: "translate(" + _ + "px, " + z + "px)",
      ...Wi(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _,
      top: z
    };
  }, [n, i, V.floating, d.x, d.y]);
  return u.useMemo(() => ({
    ...d,
    update: F,
    refs: Y,
    elements: V,
    floatingStyles: U
  }), [d, F, Y, V, U]);
}
const $m = (e) => {
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
      return r && t(r) ? r.current != null ? ts({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ts({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Lm = (e, t) => {
  const n = Om(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Vm = (e, t) => {
  const n = Rm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Bm = (e, t) => ({
  fn: Im(e).fn,
  options: [e, t]
}), Ym = (e, t) => {
  const n = _m(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Hm = (e, t) => {
  const n = Dm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Gm = (e, t) => {
  const n = Tm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Um = (e, t) => {
  const n = $m(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var zm = "Arrow", $i = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ p.jsx(
    L.svg,
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
$i.displayName = zm;
var Km = $i, Ao = "Popper", [Li, Ht] = ye(Ao), [qm, Vi] = Li(Ao), Bi = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null), [a, s] = u.useState(void 0);
  return /* @__PURE__ */ p.jsx(
    qm,
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
Bi.displayName = Ao;
var Yi = "PopperAnchor", Hi = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Vi(Yi, n), s = u.useRef(null), i = a.onAnchorChange, c = u.useCallback(
      (g) => {
        s.current = g, g && i(g);
      },
      [i]
    ), l = q(t, c), d = u.useRef(null);
    u.useEffect(() => {
      if (!r)
        return;
      const g = d.current;
      d.current = r.current, g !== d.current && i(d.current);
    });
    const f = a.placementState && Fo(a.placementState), m = f?.[0], h = f?.[1];
    return r ? null : /* @__PURE__ */ p.jsx(
      L.div,
      {
        "data-radix-popper-side": m,
        "data-radix-popper-align": h,
        ...o,
        ref: l
      }
    );
  }
);
Hi.displayName = Yi;
var jo = "PopperContent", [Xm, Zm] = Li(jo), Gi = u.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: i = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: g,
      ...v
    } = e, y = Vi(jo, n), [x, w] = u.useState(null), b = q(t, w), [C, S] = u.useState(null), k = sr(C), P = k?.width ?? 0, R = k?.height ?? 0, D = r + (a !== "center" ? "-" + a : ""), A = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, O = Array.isArray(l) ? l : [l], j = O.length > 0, F = {
      padding: A,
      boundary: O.filter(Jm),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: j
    }, { refs: N, floatingStyles: Y, placement: V, isPositioned: U, middlewareData: W } = Wm({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...Q) => Nm(...Q, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        Lm({ mainAxis: o + R, alignmentAxis: s }),
        c && Vm({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Bm() : void 0,
          ...F
        }),
        c && Ym({ ...F }),
        Hm({
          ...F,
          apply: ({ elements: Q, rects: se, availableWidth: ee, availableHeight: ae }) => {
            const { width: ce, height: De } = se.reference, xe = Q.floating.style;
            xe.setProperty("--radix-popper-available-width", `${ee}px`), xe.setProperty("--radix-popper-available-height", `${ae}px`), xe.setProperty("--radix-popper-anchor-width", `${ce}px`), xe.setProperty("--radix-popper-anchor-height", `${De}px`);
          }
        }),
        C && Um({ element: C, padding: i }),
        eh({ arrowWidth: P, arrowHeight: R }),
        m && Gm({
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
    }), _ = y.setPlacementState;
    le(() => (_(V), () => {
      _(void 0);
    }), [V, _]);
    const [z, E] = Fo(V), $ = ge(g);
    le(() => {
      U && $?.();
    }, [U, $]);
    const G = W.arrow?.x, X = W.arrow?.y, pe = W.arrow?.centerOffset !== 0, [de, I] = u.useState();
    return le(() => {
      x && I(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: U ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: de,
          "--radix-popper-transform-origin": [
            W.transformOrigin?.x,
            W.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...W.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          Xm,
          {
            scope: n,
            placedSide: z,
            placedAlign: E,
            onArrowChange: S,
            arrowX: G,
            arrowY: X,
            shouldHideArrow: pe,
            children: /* @__PURE__ */ p.jsx(
              L.div,
              {
                "data-side": z,
                "data-align": E,
                ...v,
                ref: b,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: U ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Gi.displayName = jo;
var Ui = "PopperArrow", Qm = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, zi = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Zm(Ui, r), s = Qm[a.placedSide];
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
          Km,
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
zi.displayName = Ui;
function Jm(e) {
  return e !== null;
}
var eh = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, s = o.arrow?.centerOffset !== 0, i = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, d] = Fo(n), f = { start: "0%", center: "50%", end: "100%" }[d], m = (o.arrow?.x ?? 0) + i / 2, h = (o.arrow?.y ?? 0) + c / 2;
    let g = "", v = "";
    return l === "bottom" ? (g = s ? f : `${m}px`, v = `${-c}px`) : l === "top" ? (g = s ? f : `${m}px`, v = `${r.floating.height + c}px`) : l === "right" ? (g = `${-c}px`, v = s ? f : `${h}px`) : l === "left" && (g = `${r.floating.width + c}px`, v = s ? f : `${h}px`), { data: { x: g, y: v } };
  }
});
function Fo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Wo = Bi, fr = Hi, $o = Gi, Lo = zi, zr = "rovingFocusGroup.onEntryFocus", th = { bubbles: !1, cancelable: !0 }, bn = "RovingFocusGroup", [uo, Ki, nh] = Qn(bn), [rh, Gt] = ye(
  bn,
  [nh]
), [oh, ah] = rh(bn), qi = u.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(uo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(uo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(sh, { ...e, ref: t }) }) })
);
qi.displayName = bn;
var sh = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, m = u.useRef(null), h = q(t, m), g = gn(a), [v, y] = Fe({
    prop: s,
    defaultProp: i ?? null,
    onChange: c,
    caller: bn
  }), [x, w] = u.useState(!1), b = ge(l), C = Ki(n), S = u.useRef(!1), [k, P] = u.useState(0);
  return u.useEffect(() => {
    const R = m.current;
    if (R)
      return R.addEventListener(zr, b), () => R.removeEventListener(zr, b);
  }, [b]), /* @__PURE__ */ p.jsx(
    oh,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: v,
      onItemFocus: u.useCallback(
        (R) => y(R),
        [y]
      ),
      onItemShiftTab: u.useCallback(() => w(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => P((R) => R + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => P((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ p.jsx(
        L.div,
        {
          tabIndex: x || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: T(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: T(e.onFocus, (R) => {
            const D = !S.current;
            if (R.target === R.currentTarget && D && !x) {
              const A = new CustomEvent(zr, th);
              if (R.currentTarget.dispatchEvent(A), !A.defaultPrevented) {
                const O = C().filter((V) => V.focusable), j = O.find((V) => V.active), F = O.find((V) => V.id === v), Y = [j, F, ...O].filter(
                  Boolean
                ).map((V) => V.ref.current);
                Qi(Y, d);
              }
            }
            S.current = !1;
          }),
          onBlur: T(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), Xi = "RovingFocusGroupItem", Zi = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, c = je(), l = a || c, d = ah(Xi, n), f = d.currentTabStopId === l, m = Ki(n), { onFocusableItemAdd: h, onFocusableItemRemove: g, currentTabStopId: v } = d;
    return u.useEffect(() => {
      if (r)
        return h(), () => g();
    }, [r, h, g]), /* @__PURE__ */ p.jsx(
      uo.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p.jsx(
          L.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": d.orientation,
            ...i,
            ref: t,
            onMouseDown: T(e.onMouseDown, (y) => {
              r ? d.onItemFocus(l) : y.preventDefault();
            }),
            onFocus: T(e.onFocus, () => d.onItemFocus(l)),
            onKeyDown: T(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const x = lh(y, d.orientation, d.dir);
              if (x !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let b = m().filter((C) => C.focusable).map((C) => C.ref.current);
                if (x === "last") b.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && b.reverse();
                  const C = b.indexOf(y.currentTarget);
                  b = d.loop ? uh(b, C + 1) : b.slice(C + 1);
                }
                setTimeout(() => Qi(b));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: f, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
Zi.displayName = Xi;
var ih = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ch(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function lh(e, t, n) {
  const r = ch(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return ih[r];
}
function Qi(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function uh(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Vo = qi, Bo = Zi, fo = ["Enter", " "], dh = ["ArrowDown", "PageUp", "Home"], Ji = ["ArrowUp", "PageDown", "End"], fh = [...dh, ...Ji], ph = {
  ltr: [...fo, "ArrowRight"],
  rtl: [...fo, "ArrowLeft"]
}, mh = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, wn = "Menu", [ln, hh, vh] = Qn(wn), [xt, ec] = ye(wn, [
  vh,
  Ht,
  Gt
]), pr = Ht(), tc = Gt(), [gh, Ct] = xt(wn), [yh, xn] = xt(wn), nc = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = pr(t), [c, l] = u.useState(null), d = u.useRef(!1), f = ge(a), m = gn(o);
  return u.useEffect(() => {
    const h = () => {
      d.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => d.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), u.useEffect(() => {
    if (!n)
      return;
    const h = () => f(!1);
    return window.addEventListener("blur", h), () => window.removeEventListener("blur", h);
  }, [n, f]), /* @__PURE__ */ p.jsx(Wo, { ...i, children: /* @__PURE__ */ p.jsx(
    gh,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ p.jsx(
        yh,
        {
          scope: t,
          onClose: u.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: m,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
nc.displayName = wn;
var bh = "MenuAnchor", Yo = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = pr(n);
    return /* @__PURE__ */ p.jsx(fr, { ...o, ...r, ref: t });
  }
);
Yo.displayName = bh;
var Ho = "MenuPortal", [wh, rc] = xt(Ho, {
  forceMount: void 0
}), oc = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Ct(Ho, t);
  return /* @__PURE__ */ p.jsx(wh, { scope: t, forceMount: n, children: /* @__PURE__ */ p.jsx(be, { present: n || a.open, children: /* @__PURE__ */ p.jsx(Vt, { asChild: !0, container: o, children: r }) }) });
};
oc.displayName = Ho;
var Re = "MenuContent", [xh, Go] = xt(Re), ac = u.forwardRef(
  (e, t) => {
    const n = rc(Re, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Ct(Re, e.__scopeMenu), s = xn(Re, e.__scopeMenu);
    return /* @__PURE__ */ p.jsx(ln.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(be, { present: r || a.open, children: /* @__PURE__ */ p.jsx(ln.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ p.jsx(Ch, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(Sh, { ...o, ref: t }) }) }) });
  }
), Ch = u.forwardRef(
  (e, t) => {
    const n = Ct(Re, e.__scopeMenu), r = u.useRef(null), o = q(t, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return rr(a);
    }, []), /* @__PURE__ */ p.jsx(
      Uo,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: T(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Sh = u.forwardRef((e, t) => {
  const n = Ct(Re, e.__scopeMenu);
  return /* @__PURE__ */ p.jsx(
    Uo,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), kh = /* @__PURE__ */ ot("MenuContent.ScrollLock"), Uo = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: i,
      onEntryFocus: c,
      onEscapeKeyDown: l,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: m,
      onDismiss: h,
      disableOutsideScroll: g,
      ...v
    } = e, y = Ct(Re, n), x = xn(Re, n), w = pr(n), b = tc(n), C = hh(n), [S, k] = u.useState(null), P = u.useRef(null), R = q(t, P, y.onContentChange), D = u.useRef(0), A = u.useRef(""), O = u.useRef(0), j = u.useRef(null), F = u.useRef("right"), N = u.useRef(0), Y = g ? vn : u.Fragment, V = g ? { as: kh, allowPinchZoom: !0 } : void 0, U = (_) => {
      const z = A.current + _, E = C().filter((I) => !I.disabled), $ = document.activeElement, G = E.find((I) => I.ref.current === $)?.textValue, X = E.map((I) => I.textValue), pe = jh(X, z, G), de = E.find((I) => I.textValue === pe)?.ref.current;
      (function I(Q) {
        A.current = Q, window.clearTimeout(D.current), Q !== "" && (D.current = window.setTimeout(() => I(""), 1e3));
      })(z), de && setTimeout(() => de.focus());
    };
    u.useEffect(() => () => window.clearTimeout(D.current), []), tr();
    const W = u.useCallback((_) => F.current === j.current?.side && Wh(_, j.current?.area), []);
    return /* @__PURE__ */ p.jsx(
      xh,
      {
        scope: n,
        searchRef: A,
        onItemEnter: u.useCallback(
          (_) => {
            W(_) && _.preventDefault();
          },
          [W]
        ),
        onItemLeave: u.useCallback(
          (_) => {
            W(_) || (P.current?.focus(), k(null));
          },
          [W]
        ),
        onTriggerLeave: u.useCallback(
          (_) => {
            W(_) && _.preventDefault();
          },
          [W]
        ),
        pointerGraceTimerRef: O,
        onPointerGraceIntentChange: u.useCallback((_) => {
          j.current = _;
        }, []),
        children: /* @__PURE__ */ p.jsx(Y, { ...V, children: /* @__PURE__ */ p.jsx(
          hn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: T(a, (_) => {
              _.preventDefault(), P.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ p.jsx(
              Lt,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: l,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: m,
                onDismiss: h,
                children: /* @__PURE__ */ p.jsx(
                  Vo,
                  {
                    asChild: !0,
                    ...b,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: k,
                    onEntryFocus: T(c, (_) => {
                      x.isUsingKeyboardRef.current || _.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ p.jsx(
                      $o,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": xc(y.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...w,
                        ...v,
                        ref: R,
                        style: { outline: "none", ...v.style },
                        onKeyDown: T(v.onKeyDown, (_) => {
                          const E = _.target.closest("[data-radix-menu-content]") === _.currentTarget, $ = _.ctrlKey || _.altKey || _.metaKey, G = _.key.length === 1;
                          E && (_.key === "Tab" && _.preventDefault(), !$ && G && U(_.key));
                          const X = P.current;
                          if (_.target !== X || !fh.includes(_.key)) return;
                          _.preventDefault();
                          const de = C().filter((I) => !I.disabled).map((I) => I.ref.current);
                          Ji.includes(_.key) && de.reverse(), Ih(de);
                        }),
                        onBlur: T(e.onBlur, (_) => {
                          _.currentTarget.contains(_.target) || (window.clearTimeout(D.current), A.current = "");
                        }),
                        onPointerMove: T(
                          e.onPointerMove,
                          un((_) => {
                            const z = _.target, E = N.current !== _.clientX;
                            if (_.currentTarget.contains(z) && E) {
                              const $ = _.clientX > N.current ? "right" : "left";
                              F.current = $, N.current = _.clientX;
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
ac.displayName = Re;
var Eh = "MenuGroup", zo = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(L.div, { role: "group", ...r, ref: t });
  }
);
zo.displayName = Eh;
var Mh = "MenuLabel", sc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(L.div, { ...r, ref: t });
  }
);
sc.displayName = Mh;
var Un = "MenuItem", rs = "menu.itemSelect", mr = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = u.useRef(null), s = xn(Un, e.__scopeMenu), i = Go(Un, e.__scopeMenu), c = q(t, a), l = u.useRef(!1), d = () => {
      const f = a.current;
      if (!n && f) {
        const m = new CustomEvent(rs, { bubbles: !0, cancelable: !0 });
        f.addEventListener(rs, (h) => r?.(h), { once: !0 }), xo(f, m), m.defaultPrevented ? l.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ p.jsx(
      ic,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: T(e.onClick, d),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), l.current = !0;
        },
        onPointerUp: T(e.onPointerUp, (f) => {
          l.current || f.currentTarget?.click();
        }),
        onKeyDown: T(e.onKeyDown, (f) => {
          const m = i.searchRef.current !== "";
          n || m && f.key === " " || fo.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
mr.displayName = Un;
var ic = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Go(Un, n), i = tc(n), c = u.useRef(null), l = q(t, c), [d, f] = u.useState(!1), [m, h] = u.useState("");
    return u.useEffect(() => {
      const g = c.current;
      g && h((g.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ p.jsx(
      ln.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ p.jsx(Bo, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ p.jsx(
          L.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: l,
            onPointerMove: T(
              e.onPointerMove,
              un((g) => {
                r ? s.onItemLeave(g) : (s.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: T(
              e.onPointerLeave,
              un((g) => s.onItemLeave(g))
            ),
            onFocus: T(e.onFocus, () => f(!0)),
            onBlur: T(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), Ph = "MenuCheckboxItem", cc = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(pc, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ p.jsx(
      mr,
      {
        role: "menuitemcheckbox",
        "aria-checked": zn(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": qo(n),
        onSelect: T(
          o.onSelect,
          () => r?.(zn(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
cc.displayName = Ph;
var lc = "MenuRadioGroup", [Nh, Oh] = xt(
  lc,
  { value: void 0, onValueChange: () => {
  } }
), uc = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = ge(r);
    return /* @__PURE__ */ p.jsx(Nh, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ p.jsx(zo, { ...o, ref: t }) });
  }
);
uc.displayName = lc;
var dc = "MenuRadioItem", fc = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Oh(dc, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ p.jsx(pc, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ p.jsx(
      mr,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": qo(a),
        onSelect: T(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
fc.displayName = dc;
var Ko = "MenuItemIndicator", [pc, Rh] = xt(
  Ko,
  { checked: !1 }
), mc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = Rh(Ko, n);
    return /* @__PURE__ */ p.jsx(
      be,
      {
        present: r || zn(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p.jsx(
          L.span,
          {
            ...o,
            ref: t,
            "data-state": qo(a.checked)
          }
        )
      }
    );
  }
);
mc.displayName = Ko;
var _h = "MenuSeparator", hc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(
      L.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
hc.displayName = _h;
var Dh = "MenuArrow", vc = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = pr(n);
    return /* @__PURE__ */ p.jsx(Lo, { ...o, ...r, ref: t });
  }
);
vc.displayName = Dh;
var Th = "MenuSub", [zx, gc] = xt(Th), en = "MenuSubTrigger", yc = u.forwardRef(
  (e, t) => {
    const n = Ct(en, e.__scopeMenu), r = xn(en, e.__scopeMenu), o = gc(en, e.__scopeMenu), a = Go(en, e.__scopeMenu), s = u.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, d = u.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    u.useEffect(() => d, [d]), u.useEffect(() => {
      const m = i.current;
      return () => {
        window.clearTimeout(m), c(null);
      };
    }, [i, c]);
    const f = q(t, o.onTriggerChange);
    return /* @__PURE__ */ p.jsx(Yo, { asChild: !0, ...l, children: /* @__PURE__ */ p.jsx(
      ic,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": n.open ? o.contentId : void 0,
        "data-state": xc(n.open),
        ...e,
        ref: f,
        onClick: (m) => {
          e.onClick?.(m), !(e.disabled || m.defaultPrevented) && (m.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: T(
          e.onPointerMove,
          un((m) => {
            a.onItemEnter(m), !m.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: T(
          e.onPointerLeave,
          un((m) => {
            d();
            const h = n.content?.getBoundingClientRect();
            if (h) {
              const g = n.content?.dataset.side, v = g === "right", y = v ? -5 : 5, x = h[v ? "left" : "right"], w = h[v ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: m.clientX + y, y: m.clientY },
                  { x, y: h.top },
                  { x: w, y: h.top },
                  { x: w, y: h.bottom },
                  { x, y: h.bottom }
                ],
                side: g
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(m), m.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: T(e.onKeyDown, (m) => {
          const h = a.searchRef.current !== "";
          e.disabled || h && m.key === " " || ph[r.dir].includes(m.key) && (n.onOpenChange(!0), n.content?.focus(), m.preventDefault());
        })
      }
    ) });
  }
);
yc.displayName = en;
var bc = "MenuSubContent", wc = u.forwardRef(
  (e, t) => {
    const n = rc(Re, e.__scopeMenu), { forceMount: r = n.forceMount, align: o = "start", ...a } = e, s = Ct(Re, e.__scopeMenu), i = xn(Re, e.__scopeMenu), c = gc(bc, e.__scopeMenu), l = u.useRef(null), d = q(t, l);
    return /* @__PURE__ */ p.jsx(ln.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(be, { present: r || s.open, children: /* @__PURE__ */ p.jsx(ln.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ p.jsx(
      Uo,
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
          i.isUsingKeyboardRef.current && l.current?.focus(), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: T(e.onFocusOutside, (f) => {
          f.target !== c.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: T(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: T(e.onKeyDown, (f) => {
          const m = f.currentTarget.contains(f.target), h = mh[i.dir].includes(f.key);
          m && h && (s.onOpenChange(!1), c.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
wc.displayName = bc;
function xc(e) {
  return e ? "open" : "closed";
}
function zn(e) {
  return e === "indeterminate";
}
function qo(e) {
  return zn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ih(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ah(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function jh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = Ah(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Fh(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], c = t[s], l = i.x, d = i.y, f = c.x, m = c.y;
    d > r != m > r && n < (f - l) * (r - d) / (m - d) + l && (o = !o);
  }
  return o;
}
function Wh(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Fh(n, t);
}
function un(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var $h = nc, Lh = Yo, Vh = oc, Bh = ac, Yh = zo, Hh = sc, Gh = mr, Uh = cc, zh = uc, Kh = fc, qh = mc, Xh = hc, Zh = vc, Qh = yc, Jh = wc, hr = "DropdownMenu", [ev] = ye(
  hr,
  [ec]
), we = ec(), [tv, Cc] = ev(hr), Sc = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, c = we(t), l = u.useRef(null), [d, f] = Fe({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: hr
  });
  return /* @__PURE__ */ p.jsx(
    tv,
    {
      scope: t,
      triggerId: je(),
      triggerRef: l,
      contentId: je(),
      open: d,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: i,
      children: /* @__PURE__ */ p.jsx($h, { ...c, open: d, onOpenChange: f, dir: r, modal: i, children: n })
    }
  );
};
Sc.displayName = hr;
var kc = "DropdownMenuTrigger", Ec = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Cc(kc, n), s = we(n), i = q(t, a.triggerRef);
    return /* @__PURE__ */ p.jsx(Lh, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
      L.button,
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
        onPointerDown: T(e.onPointerDown, (c) => {
          !r && c.button === 0 && c.ctrlKey === !1 && (a.onOpenToggle(), a.open || c.preventDefault());
        }),
        onKeyDown: T(e.onKeyDown, (c) => {
          r || (["Enter", " "].includes(c.key) && a.onOpenToggle(), c.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }
);
Ec.displayName = kc;
var nv = "DropdownMenuPortal", Mc = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = we(t);
  return /* @__PURE__ */ p.jsx(Vh, { ...r, ...n });
};
Mc.displayName = nv;
var Pc = "DropdownMenuContent", Nc = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Cc(Pc, n), a = we(n), s = u.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      Bh,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: T(e.onCloseAutoFocus, (i) => {
          s.current || o.triggerRef.current?.focus(), s.current = !1, i.preventDefault();
        }),
        onInteractOutside: T(e.onInteractOutside, (i) => {
          const c = i.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || l;
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
Nc.displayName = Pc;
var rv = "DropdownMenuGroup", ov = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
    return /* @__PURE__ */ p.jsx(Yh, { ...o, ...r, ref: t });
  }
);
ov.displayName = rv;
var av = "DropdownMenuLabel", sv = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
    return /* @__PURE__ */ p.jsx(Hh, { ...o, ...r, ref: t });
  }
);
sv.displayName = av;
var iv = "DropdownMenuItem", Oc = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
    return /* @__PURE__ */ p.jsx(Gh, { ...o, ...r, ref: t });
  }
);
Oc.displayName = iv;
var cv = "DropdownMenuCheckboxItem", lv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(Uh, { ...o, ...r, ref: t });
});
lv.displayName = cv;
var uv = "DropdownMenuRadioGroup", dv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(zh, { ...o, ...r, ref: t });
});
dv.displayName = uv;
var fv = "DropdownMenuRadioItem", pv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(Kh, { ...o, ...r, ref: t });
});
pv.displayName = fv;
var mv = "DropdownMenuItemIndicator", hv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(qh, { ...o, ...r, ref: t });
});
hv.displayName = mv;
var vv = "DropdownMenuSeparator", Rc = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(Xh, { ...o, ...r, ref: t });
});
Rc.displayName = vv;
var gv = "DropdownMenuArrow", yv = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
    return /* @__PURE__ */ p.jsx(Zh, { ...o, ...r, ref: t });
  }
);
yv.displayName = gv;
var bv = "DropdownMenuSubTrigger", wv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(Qh, { ...o, ...r, ref: t });
});
wv.displayName = bv;
var xv = "DropdownMenuSubContent", Cv = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ p.jsx(
    Jh,
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
Cv.displayName = xv;
var Sv = Sc, kv = Ec, Ev = Mc, Mv = Nc, Pv = Oc, Nv = Rc, Ov = "Label", _c = u.forwardRef((e, t) => /* @__PURE__ */ p.jsx(
  L.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
_c.displayName = Ov;
var Dc = _c;
function os(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var vr = "Popover", [Tc] = ye(vr, [
  Ht
]), Cn = Ht(), [Rv, lt] = Tc(vr), Ic = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = Cn(t), c = u.useRef(null), [l, d] = u.useState(!1), [f, m] = Fe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: vr
  });
  return /* @__PURE__ */ p.jsx(Wo, { ...i, children: /* @__PURE__ */ p.jsx(
    Rv,
    {
      scope: t,
      contentId: je(),
      triggerRef: c,
      open: f,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((h) => !h), [m]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: u.useCallback(() => d(!0), []),
      onCustomAnchorRemove: u.useCallback(() => d(!1), []),
      modal: s,
      children: n
    }
  ) });
};
Ic.displayName = vr;
var Ac = "PopoverAnchor", _v = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = lt(Ac, n), a = Cn(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ p.jsx(fr, { ...a, ...r, ref: t });
  }
);
_v.displayName = Ac;
var jc = "PopoverTrigger", Fc = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = lt(jc, n), a = Cn(n), s = q(t, o.triggerRef), i = /* @__PURE__ */ p.jsx(
      L.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": Bc(o.open),
        ...r,
        ref: s,
        onClick: T(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ p.jsx(fr, { asChild: !0, ...a, children: i });
  }
);
Fc.displayName = jc;
var Xo = "PopoverPortal", [Dv, Tv] = Tc(Xo, {
  forceMount: void 0
}), Wc = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = lt(Xo, t);
  return /* @__PURE__ */ p.jsx(Dv, { scope: t, forceMount: n, children: /* @__PURE__ */ p.jsx(be, { present: n || a.open, children: /* @__PURE__ */ p.jsx(Vt, { asChild: !0, container: o, children: r }) }) });
};
Wc.displayName = Xo;
var jt = "PopoverContent", $c = u.forwardRef(
  (e, t) => {
    const n = Tv(jt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = lt(jt, e.__scopePopover);
    return /* @__PURE__ */ p.jsx(be, { present: r || a.open, children: a.modal ? /* @__PURE__ */ p.jsx(Av, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(jv, { ...o, ref: t }) });
  }
);
$c.displayName = jt;
var Iv = /* @__PURE__ */ ot("PopoverContent.RemoveScroll"), Av = u.forwardRef(
  (e, t) => {
    const n = lt(jt, e.__scopePopover), r = u.useRef(null), o = q(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return rr(s);
    }, []), /* @__PURE__ */ p.jsx(vn, { as: Iv, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
      Lc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: T(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), a.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: T(
          e.onPointerDownOutside,
          (s) => {
            const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
            a.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: T(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), jv = u.forwardRef(
  (e, t) => {
    const n = lt(jt, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      Lc,
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
), Lc = u.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      onFocusOutside: l,
      onInteractOutside: d,
      ...f
    } = e, m = lt(jt, n), h = Cn(n);
    return tr(), /* @__PURE__ */ p.jsx(
      hn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ p.jsx(
          Lt,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: d,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => m.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: /* @__PURE__ */ p.jsx(
              $o,
              {
                "data-state": Bc(m.open),
                role: "dialog",
                id: m.contentId,
                ...h,
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
), Vc = "PopoverClose", Fv = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = lt(Vc, n);
    return /* @__PURE__ */ p.jsx(
      L.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: T(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Fv.displayName = Vc;
var Wv = "PopoverArrow", $v = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Cn(n);
    return /* @__PURE__ */ p.jsx(Lo, { ...o, ...r, ref: t });
  }
);
$v.displayName = Wv;
function Bc(e) {
  return e ? "open" : "closed";
}
var Lv = Ic, Vv = Fc, Bv = Wc, Yv = $c, Zo = "Radio", [Hv, Yc] = ye(Zo), [Gv, gr] = Hv(Zo);
function Hc(e) {
  const {
    __scopeRadio: t,
    checked: n = !1,
    children: r,
    disabled: o,
    form: a,
    name: s,
    onCheck: i,
    required: c,
    value: l = "on",
    // @ts-expect-error
    internal_do_not_use_render: d
  } = e, [f, m] = u.useState(null), [h, g] = u.useState(null), v = u.useRef(!1), y = f ? !!a || !!f.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), x = {
    checked: n,
    disabled: o,
    required: c,
    name: s,
    form: a,
    value: l,
    control: f,
    setControl: m,
    hasConsumerStoppedPropagationRef: v,
    isFormControl: y,
    bubbleInput: h,
    setBubbleInput: g,
    onCheck: () => i?.()
  };
  return /* @__PURE__ */ p.jsx(Gv, { scope: t, ...x, children: zv(d) ? d(x) : r });
}
var Gc = "RadioTrigger", Qo = u.forwardRef(
  ({ __scopeRadio: e, onClick: t, ...n }, r) => {
    const {
      checked: o,
      disabled: a,
      value: s,
      setControl: i,
      onCheck: c,
      hasConsumerStoppedPropagationRef: l,
      isFormControl: d,
      bubbleInput: f
    } = gr(Gc, e), m = q(r, i);
    return /* @__PURE__ */ p.jsx(
      L.button,
      {
        type: "button",
        role: "radio",
        "aria-checked": o,
        "data-state": qc(o),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: s,
        ...n,
        ref: m,
        onClick: T(t, (h) => {
          o || c(), f && d && (l.current = h.isPropagationStopped(), l.current || h.stopPropagation());
        })
      }
    );
  }
);
Qo.displayName = Gc;
var Uv = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, name: r, checked: o, required: a, disabled: s, value: i, onCheck: c, form: l, ...d } = e;
    return /* @__PURE__ */ p.jsx(
      Hc,
      {
        __scopeRadio: n,
        checked: o,
        disabled: s,
        required: a,
        onCheck: c,
        name: r,
        form: l,
        value: i,
        internal_do_not_use_render: ({ isFormControl: f }) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx(
            Qo,
            {
              ...d,
              ref: t,
              __scopeRadio: n
            }
          ),
          f && /* @__PURE__ */ p.jsx(
            Jo,
            {
              __scopeRadio: n
            }
          )
        ] })
      }
    );
  }
);
Uv.displayName = Zo;
var Uc = "RadioIndicator", zc = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = gr(Uc, n);
    return /* @__PURE__ */ p.jsx(be, { present: r || a.checked, children: /* @__PURE__ */ p.jsx(
      L.span,
      {
        "data-state": qc(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
zc.displayName = Uc;
var Kc = "RadioBubbleInput", Jo = u.forwardRef(
  ({ __scopeRadio: e, ...t }, n) => {
    const {
      control: r,
      checked: o,
      required: a,
      disabled: s,
      name: i,
      value: c,
      form: l,
      bubbleInput: d,
      setBubbleInput: f,
      hasConsumerStoppedPropagationRef: m
    } = gr(Kc, e), h = q(n, f), g = ar(o), v = sr(r);
    u.useEffect(() => {
      const x = d;
      if (!x) return;
      const w = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, S = !m.current;
      if (g !== o && C) {
        const k = new Event("click", { bubbles: S });
        C.call(x, o), x.dispatchEvent(k);
      }
    }, [d, g, o, m]);
    const y = u.useRef(o);
    return /* @__PURE__ */ p.jsx(
      L.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: y.current,
        required: a,
        disabled: s,
        name: i,
        value: c,
        form: l,
        ...t,
        tabIndex: -1,
        ref: h,
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
Jo.displayName = Kc;
function zv(e) {
  return typeof e == "function";
}
function qc(e) {
  return e ? "checked" : "unchecked";
}
var Kv = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], yr = "RadioGroup", [qv] = ye(yr, [
  Gt,
  Yc
]), Xc = Gt(), br = Yc(), [Xv, Zv] = qv(yr), ea = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: s = !1,
      disabled: i = !1,
      orientation: c,
      dir: l,
      loop: d = !0,
      onValueChange: f,
      ...m
    } = e, h = Xc(n), g = gn(l), [v, y] = Fe({
      prop: a,
      defaultProp: o ?? null,
      onChange: f,
      caller: yr
    });
    return /* @__PURE__ */ p.jsx(
      Xv,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: v,
        onValueChange: y,
        children: /* @__PURE__ */ p.jsx(
          Vo,
          {
            asChild: !0,
            ...h,
            orientation: c,
            dir: g,
            loop: d,
            children: /* @__PURE__ */ p.jsx(
              L.div,
              {
                role: "radiogroup",
                "aria-required": s,
                "aria-orientation": c,
                "data-disabled": i ? "" : void 0,
                dir: g,
                ...m,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
ea.displayName = yr;
var Qv = "RadioGroupItem", Jv = "RadioGroupItemProvider", Zc = "RadioGroupItemTrigger", eg = "RadioGroupItemBubbleInput";
function tg(e) {
  const {
    __scopeRadioGroup: t,
    value: n,
    disabled: r,
    children: o,
    // @ts-expect-error
    internal_do_not_use_render: a
  } = e, s = Zv(Jv, t), i = br(t), c = s.disabled || r;
  return /* @__PURE__ */ p.jsx(
    Hc,
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
var Qc = u.forwardRef((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Xc(n), a = br(n), { checked: s, disabled: i } = gr(Zc, a.__scopeRadio), c = u.useRef(null), l = q(t, c), d = u.useRef(!1);
  return u.useEffect(() => {
    const f = (h) => {
      Kv.includes(h.key) && (d.current = !0);
    }, m = () => d.current = !1;
    return document.addEventListener("keydown", f), document.addEventListener("keyup", m), () => {
      document.removeEventListener("keydown", f), document.removeEventListener("keyup", m);
    };
  }, []), /* @__PURE__ */ p.jsx(
    Bo,
    {
      asChild: !0,
      ...o,
      focusable: !i,
      active: s,
      children: /* @__PURE__ */ p.jsx(
        Qo,
        {
          ...a,
          ...r,
          ref: l,
          onKeyDown: T(r.onKeyDown, (f) => {
            f.key === "Enter" && f.preventDefault();
          }),
          onFocus: T(r.onFocus, () => {
            d.current && c.current?.click();
          })
        }
      )
    }
  );
});
Qc.displayName = Zc;
var Jc = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, value: r, disabled: o, ...a } = e;
    return /* @__PURE__ */ p.jsx(
      tg,
      {
        __scopeRadioGroup: n,
        value: r,
        disabled: o,
        internal_do_not_use_render: ({ isFormControl: s }) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx(
            Qc,
            {
              ...a,
              ref: t,
              __scopeRadioGroup: n
            }
          ),
          s && /* @__PURE__ */ p.jsx(
            el,
            {
              __scopeRadioGroup: n
            }
          )
        ] })
      }
    );
  }
);
Jc.displayName = Qv;
var el = u.forwardRef((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = br(n);
  return /* @__PURE__ */ p.jsx(Jo, { ...o, ...r, ref: t });
});
el.displayName = eg;
var ng = "RadioGroupIndicator", tl = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = br(n);
    return /* @__PURE__ */ p.jsx(zc, { ...o, ...r, ref: t });
  }
);
tl.displayName = ng;
var rg = [" ", "Enter", "ArrowUp", "ArrowDown"], og = [" ", "Enter"], wt = "Select", [wr, xr, ag] = Qn(wt), [St] = ye(wt, [
  ag,
  Ht
]), Cr = Ht(), [sg, ut] = St(wt), [ig, cg] = St(wt), lg = "SelectProvider";
function nl(e) {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: s,
    defaultValue: i,
    onValueChange: c,
    dir: l,
    name: d,
    autoComplete: f,
    disabled: m,
    required: h,
    form: g,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: v
  } = e, y = Cr(t), [x, w] = u.useState(null), [b, C] = u.useState(null), [S, k] = u.useState(!1), P = gn(l), [R, D] = Fe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: wt
  }), [A, O] = Fe({
    prop: s,
    defaultProp: i,
    onChange: c,
    caller: wt
  }), j = u.useRef(null), F = x ? !!g || !!x.closest("form") : !0, [N, Y] = u.useState(/* @__PURE__ */ new Set()), V = je(), U = Array.from(N).map((E) => E.props.value).join(";"), W = u.useCallback((E) => {
    Y(($) => new Set($).add(E));
  }, []), _ = u.useCallback((E) => {
    Y(($) => {
      const G = new Set($);
      return G.delete(E), G;
    });
  }, []), z = {
    required: h,
    trigger: x,
    onTriggerChange: w,
    valueNode: b,
    onValueNodeChange: C,
    valueNodeHasChildren: S,
    onValueNodeHasChildrenChange: k,
    contentId: V,
    value: A,
    onValueChange: O,
    open: R,
    onOpenChange: D,
    dir: P,
    triggerPointerDownPosRef: j,
    disabled: m,
    name: d,
    autoComplete: f,
    form: g,
    nativeOptions: N,
    nativeSelectKey: U,
    isFormControl: F
  };
  return /* @__PURE__ */ p.jsx(Wo, { ...y, children: /* @__PURE__ */ p.jsx(sg, { scope: t, ...z, children: /* @__PURE__ */ p.jsx(wr.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
    ig,
    {
      scope: t,
      onNativeOptionAdd: W,
      onNativeOptionRemove: _,
      children: Mg(v) ? v(z) : n
    }
  ) }) }) });
}
nl.displayName = lg;
var rl = (e) => {
  const { __scopeSelect: t, children: n, ...r } = e;
  return /* @__PURE__ */ p.jsx(
    nl,
    {
      __scopeSelect: t,
      ...r,
      internal_do_not_use_render: ({ isFormControl: o }) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        n,
        o ? /* @__PURE__ */ p.jsx(
          Nl,
          {
            __scopeSelect: t
          }
        ) : null
      ] })
    }
  );
};
rl.displayName = wt;
var ol = "SelectTrigger", al = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Cr(n), s = ut(ol, n), i = s.disabled || r, c = q(t, s.onTriggerChange), l = xr(n), d = u.useRef("touch"), [f, m, h] = Ol((v) => {
      const y = l().filter((b) => !b.disabled), x = y.find((b) => b.value === s.value), w = Rl(y, v, x);
      w !== void 0 && s.onValueChange(w.value);
    }), g = (v) => {
      i || (s.onOpenChange(!0), h()), v && (s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(fr, { asChild: !0, ...a, children: /* @__PURE__ */ p.jsx(
      L.button,
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
        "data-placeholder": Sr(s.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: T(o.onClick, (v) => {
          v.currentTarget.focus(), d.current !== "mouse" && g(v);
        }),
        onPointerDown: T(o.onPointerDown, (v) => {
          d.current = v.pointerType;
          const y = v.target;
          y.hasPointerCapture(v.pointerId) && y.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (g(v), v.preventDefault());
        }),
        onKeyDown: T(o.onKeyDown, (v) => {
          const y = f.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && m(v.key), !(y && v.key === " ") && rg.includes(v.key) && (g(), v.preventDefault());
        })
      }
    ) });
  }
);
al.displayName = ol;
var sl = "SelectValue", il = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = ut(sl, n), { onValueNodeHasChildrenChange: l } = c, d = a !== void 0, f = q(t, c.onValueNodeChange);
    le(() => {
      l(d);
    }, [l, d]);
    const m = Sr(c.value);
    return /* @__PURE__ */ p.jsx(
      L.span,
      {
        ...i,
        asChild: m ? !1 : i.asChild,
        ref: f,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ p.jsx(u.Fragment, { children: m ? s : a }, m ? "placeholder" : "value")
      }
    );
  }
);
il.displayName = sl;
var ug = "SelectIcon", cl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(L.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
cl.displayName = ug;
var ll = "SelectPortal", [dg, fg] = St(ll, {
  forceMount: void 0
}), ul = (e) => {
  const { __scopeSelect: t, forceMount: n, ...r } = e;
  return /* @__PURE__ */ p.jsx(dg, { scope: e.__scopeSelect, forceMount: n, children: /* @__PURE__ */ p.jsx(Vt, { asChild: !0, ...r }) });
};
ul.displayName = ll;
var it = "SelectContent", dl = u.forwardRef(
  (e, t) => {
    const n = fg(it, e.__scopeSelect), { forceMount: r = n.forceMount, ...o } = e, a = ut(it, e.__scopeSelect), [s, i] = u.useState();
    return le(() => {
      i(new DocumentFragment());
    }, []), /* @__PURE__ */ p.jsx(be, { present: r || a.open, children: ({ present: c }) => c ? /* @__PURE__ */ p.jsx(ml, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(fl, { ...o, fragment: s }) });
  }
);
dl.displayName = it;
var fl = u.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, fragment: o } = e;
  return o ? $t.createPortal(
    /* @__PURE__ */ p.jsx(pl, { scope: n, children: /* @__PURE__ */ p.jsx(wr.Slot, { scope: n, children: /* @__PURE__ */ p.jsx("div", { ref: t, children: r }) }) }),
    o
  ) : null;
});
fl.displayName = "SelectContentFragment";
var Ie = 10, [pl, dt] = St(it), pg = "SelectContentImpl", mg = /* @__PURE__ */ ot("SelectContent.RemoveScroll"), ml = u.forwardRef(
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
      align: l,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: y,
      //
      ...x
    } = e, w = ut(it, n), [b, C] = u.useState(null), [S, k] = u.useState(null), P = q(t, C), [R, D] = u.useState(null), [A, O] = u.useState(
      null
    ), j = xr(n), [F, N] = u.useState(!1), Y = u.useRef(!1);
    u.useEffect(() => {
      if (b) return rr(b);
    }, [b]), tr();
    const V = u.useCallback(
      (I) => {
        const [Q, ...se] = j().map((ce) => ce.ref.current), [ee] = se.slice(-1), ae = document.activeElement;
        for (const ce of I)
          if (ce === ae || (ce?.scrollIntoView({ block: "nearest" }), ce === Q && S && (S.scrollTop = 0), ce === ee && S && (S.scrollTop = S.scrollHeight), ce?.focus(), document.activeElement !== ae)) return;
      },
      [j, S]
    ), U = u.useCallback(
      () => V([R, b]),
      [V, R, b]
    );
    u.useEffect(() => {
      F && U();
    }, [F, U]);
    const { onOpenChange: W, triggerPointerDownPosRef: _ } = w;
    u.useEffect(() => {
      if (b) {
        let I = { x: 0, y: 0 };
        const Q = (ee) => {
          I = {
            x: Math.abs(Math.round(ee.pageX) - (_.current?.x ?? 0)),
            y: Math.abs(Math.round(ee.pageY) - (_.current?.y ?? 0))
          };
        }, se = (ee) => {
          I.x <= 10 && I.y <= 10 ? ee.preventDefault() : ee.composedPath().includes(b) || W(!1), document.removeEventListener("pointermove", Q), _.current = null;
        };
        return _.current !== null && (document.addEventListener("pointermove", Q), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Q), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [b, W, _]), u.useEffect(() => {
      const I = () => W(!1);
      return window.addEventListener("blur", I), window.addEventListener("resize", I), () => {
        window.removeEventListener("blur", I), window.removeEventListener("resize", I);
      };
    }, [W]);
    const [z, E] = Ol((I) => {
      const Q = j().filter((ae) => !ae.disabled), se = Q.find((ae) => ae.ref.current === document.activeElement), ee = Rl(Q, I, se);
      ee && setTimeout(() => ee.ref.current?.focus());
    }), $ = u.useCallback(
      (I, Q, se) => {
        const ee = !Y.current && !se;
        (w.value !== void 0 && w.value === Q || ee) && (D(I), ee && (Y.current = !0));
      },
      [w.value]
    ), G = u.useCallback(() => b?.focus(), [b]), X = u.useCallback(
      (I, Q, se) => {
        const ee = !Y.current && !se;
        (w.value !== void 0 && w.value === Q || ee) && O(I);
      },
      [w.value]
    ), pe = r === "popper" ? po : hl, de = pe === po ? {
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ p.jsx(
      pl,
      {
        scope: n,
        content: b,
        viewport: S,
        onViewportChange: k,
        itemRefCallback: $,
        selectedItem: R,
        onItemLeave: G,
        itemTextRefCallback: X,
        focusSelectedItem: U,
        selectedItemText: A,
        position: r,
        isPositioned: F,
        searchRef: z,
        children: /* @__PURE__ */ p.jsx(vn, { as: mg, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          hn,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (I) => {
              I.preventDefault();
            },
            onUnmountAutoFocus: T(o, (I) => {
              w.trigger?.focus({ preventScroll: !0 }), I.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              Lt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (I) => I.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  pe,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (I) => I.preventDefault(),
                    ...x,
                    ...de,
                    onPlaced: () => N(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: T(x.onKeyDown, (I) => {
                      const Q = I.ctrlKey || I.altKey || I.metaKey;
                      if (I.key === "Tab" && I.preventDefault(), !Q && I.key.length === 1 && E(I.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key)) {
                        let ee = j().filter((ae) => !ae.disabled).map((ae) => ae.ref.current);
                        if (["ArrowUp", "End"].includes(I.key) && (ee = ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(I.key)) {
                          const ae = I.target, ce = ee.indexOf(ae);
                          ee = ee.slice(ce + 1);
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
ml.displayName = pg;
var hg = "SelectItemAlignedPosition", hl = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = ut(it, n), s = dt(it, n), [i, c] = u.useState(null), [l, d] = u.useState(null), f = q(t, d), m = xr(n), h = u.useRef(!1), g = u.useRef(!0), { viewport: v, selectedItem: y, selectedItemText: x, focusSelectedItem: w } = s, b = u.useCallback(() => {
    if (a.trigger && a.valueNode && i && l && v && y && x) {
      const P = a.trigger.getBoundingClientRect(), R = l.getBoundingClientRect(), D = a.valueNode.getBoundingClientRect(), A = x.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ae = A.left - R.left, ce = D.left - ae, De = P.left - ce, xe = P.width + De, kt = Math.max(xe, R.width), zt = window.innerWidth - Ie, Kt = os(ce, [
          Ie,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ie, zt - kt)
        ]);
        i.style.minWidth = xe + "px", i.style.left = Kt + "px";
      } else {
        const ae = R.right - A.right, ce = window.innerWidth - D.right - ae, De = window.innerWidth - P.right - ce, xe = P.width + De, kt = Math.max(xe, R.width), zt = window.innerWidth - Ie, Kt = os(ce, [
          Ie,
          Math.max(Ie, zt - kt)
        ]);
        i.style.minWidth = xe + "px", i.style.right = Kt + "px";
      }
      const O = m(), j = window.innerHeight - Ie * 2, F = v.scrollHeight, N = window.getComputedStyle(l), Y = parseInt(N.borderTopWidth, 10), V = parseInt(N.paddingTop, 10), U = parseInt(N.borderBottomWidth, 10), W = parseInt(N.paddingBottom, 10), _ = Y + V + F + W + U, z = Math.min(y.offsetHeight * 5, _), E = window.getComputedStyle(v), $ = parseInt(E.paddingTop, 10), G = parseInt(E.paddingBottom, 10), X = P.top + P.height / 2 - Ie, pe = j - X, de = y.offsetHeight / 2, I = y.offsetTop + de, Q = Y + V + I, se = _ - Q;
      if (Q <= X) {
        const ae = O.length > 0 && y === O[O.length - 1].ref.current;
        i.style.bottom = "0px";
        const ce = l.clientHeight - v.offsetTop - v.offsetHeight, De = Math.max(
          pe,
          de + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ae ? G : 0) + ce + U
        ), xe = Q + De;
        i.style.height = xe + "px";
      } else {
        const ae = O.length > 0 && y === O[0].ref.current;
        i.style.top = "0px";
        const De = Math.max(
          X,
          Y + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ae ? $ : 0) + de
        ) + se;
        i.style.height = De + "px", v.scrollTop = Q - X + v.offsetTop;
      }
      i.style.margin = `${Ie}px 0`, i.style.minHeight = z + "px", i.style.maxHeight = j + "px", r?.(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    i,
    l,
    v,
    y,
    x,
    a.dir,
    r
  ]);
  le(() => b(), [b]);
  const [C, S] = u.useState();
  le(() => {
    l && S(window.getComputedStyle(l).zIndex);
  }, [l]);
  const k = u.useCallback(
    (P) => {
      P && g.current === !0 && (b(), w?.(), g.current = !1);
    },
    [b, w]
  );
  return /* @__PURE__ */ p.jsx(
    gg,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: k,
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
            L.div,
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
hl.displayName = hg;
var vg = "SelectPopperPosition", po = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Ie,
    ...a
  } = e, s = Cr(n);
  return /* @__PURE__ */ p.jsx(
    $o,
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
po.displayName = vg;
var [gg, ta] = St(it, {}), mo = "SelectViewport", yg = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = dt(mo, n), s = ta(mo, n), i = q(t, a.onViewportChange), c = u.useRef(0);
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
      /* @__PURE__ */ p.jsx(wr.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
        L.div,
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
          onScroll: T(o.onScroll, (l) => {
            const d = l.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: m } = s;
            if (m?.current && f) {
              const h = Math.abs(c.current - d.scrollTop);
              if (h > 0) {
                const g = window.innerHeight - Ie * 2, v = parseFloat(f.style.minHeight), y = parseFloat(f.style.height), x = Math.max(v, y);
                if (x < g) {
                  const w = x + h, b = Math.min(g, w), C = w - b;
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
yg.displayName = mo;
var vl = "SelectGroup", [bg, wg] = St(vl), gl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = je();
    return /* @__PURE__ */ p.jsx(bg, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(L.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
gl.displayName = vl;
var yl = "SelectLabel", bl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = wg(yl, n);
    return /* @__PURE__ */ p.jsx(L.div, { id: o.id, ...r, ref: t });
  }
);
bl.displayName = yl;
var Kn = "SelectItem", [xg, wl] = St(Kn), xl = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = ut(Kn, n), c = dt(Kn, n), l = i.value === r, [d, f] = u.useState(a ?? ""), [m, h] = u.useState(!1), g = ge(
      (b) => c.itemRefCallback?.(b, r, o)
    ), v = q(t, g), y = je(), x = u.useRef("touch"), w = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    return /* @__PURE__ */ p.jsx(
      xg,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: y,
        isSelected: l,
        onItemTextChange: u.useCallback((b) => {
          f((C) => C || (b?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ p.jsx(
          wr.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ p.jsx(
              L.div,
              {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": l && m,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: v,
                onFocus: T(s.onFocus, () => h(!0)),
                onBlur: T(s.onBlur, () => h(!1)),
                onClick: T(s.onClick, () => {
                  x.current !== "mouse" && w();
                }),
                onPointerUp: T(s.onPointerUp, () => {
                  x.current === "mouse" && w();
                }),
                onPointerDown: T(s.onPointerDown, (b) => {
                  x.current = b.pointerType;
                }),
                onPointerMove: T(s.onPointerMove, (b) => {
                  x.current = b.pointerType, o ? c.onItemLeave?.() : x.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: T(s.onPointerLeave, (b) => {
                  b.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: T(s.onKeyDown, (b) => {
                  c.searchRef?.current !== "" && b.key === " " || (og.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
xl.displayName = Kn;
var tn = "SelectItemText", Cl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = ut(tn, n), i = dt(tn, n), c = wl(tn, n), l = cg(tn, n), [d, f] = u.useState(null), m = ge(
      (w) => i.itemTextRefCallback?.(w, c.value, c.disabled)
    ), h = q(
      t,
      f,
      c.onItemTextChange,
      m
    ), g = d?.textContent, v = u.useMemo(
      () => /* @__PURE__ */ p.jsx("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: x } = l;
    return le(() => (y(v), () => x(v)), [y, x, v]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(L.span, { id: c.textId, ...a, ref: h }),
      c.isSelected && s.valueNode && !s.valueNodeHasChildren && !Sr(s.value) ? $t.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
Cl.displayName = tn;
var Sl = "SelectItemIndicator", kl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return wl(Sl, n).isSelected ? /* @__PURE__ */ p.jsx(L.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
kl.displayName = Sl;
var ho = "SelectScrollUpButton", Cg = u.forwardRef((e, t) => {
  const n = dt(ho, e.__scopeSelect), r = ta(ho, e.__scopeSelect), [o, a] = u.useState(!1), s = q(t, r.onScrollButtonChange);
  return le(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    El,
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
Cg.displayName = ho;
var vo = "SelectScrollDownButton", Sg = u.forwardRef((e, t) => {
  const n = dt(vo, e.__scopeSelect), r = ta(vo, e.__scopeSelect), [o, a] = u.useState(!1), s = q(t, r.onScrollButtonChange);
  return le(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < l;
        a(d);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    El,
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
Sg.displayName = vo;
var El = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = dt("SelectScrollButton", n), s = u.useRef(null), i = xr(n), c = u.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return u.useEffect(() => () => c(), [c]), le(() => {
    i().find((d) => d.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ p.jsx(
    L.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: T(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: T(o.onPointerMove, () => {
        a.onItemLeave?.(), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: T(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), kg = "SelectSeparator", go = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(L.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
go.displayName = kg;
var Ml = "SelectArrow", Eg = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Cr(n);
    return dt(Ml, n).position === "popper" ? /* @__PURE__ */ p.jsx(Lo, { ...o, ...r, ref: t }) : null;
  }
);
Eg.displayName = Ml;
var Pl = "SelectBubbleInput", Nl = u.forwardRef(
  ({ __scopeSelect: e, ...t }, n) => {
    const r = ut(Pl, e), { value: o, onValueChange: a, required: s, disabled: i, name: c, autoComplete: l, form: d } = r, { nativeOptions: f, nativeSelectKey: m } = r, h = u.useRef(null), g = q(n, h), v = o ?? "", y = ar(v), x = Array.from(f).some(
      (w) => (w.props.value ?? "") === ""
    );
    return u.useEffect(() => {
      const w = h.current;
      if (!w) return;
      const b = window.HTMLSelectElement.prototype, S = Object.getOwnPropertyDescriptor(
        b,
        "value"
      ).set;
      if (y !== v && S) {
        const k = new Event("change", { bubbles: !0 });
        S.call(w, v), w.dispatchEvent(k);
      }
    }, [y, v]), /* @__PURE__ */ p.jsxs(
      L.select,
      {
        "aria-hidden": !0,
        required: s,
        tabIndex: -1,
        name: c,
        autoComplete: l,
        disabled: i,
        form: d,
        onChange: (w) => a(w.target.value),
        ...t,
        style: { ...Ts, ...t.style },
        ref: g,
        defaultValue: v,
        children: [
          Sr(o) && !x ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
          Array.from(f)
        ]
      },
      m
    );
  }
);
Nl.displayName = Pl;
function Mg(e) {
  return typeof e == "function";
}
function Sr(e) {
  return e === "" || e === void 0;
}
function Ol(e) {
  const t = ge(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (s) => {
      const i = n.current + s;
      t(i), (function c(l) {
        n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(i);
    },
    [t]
  ), a = u.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function Rl(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = Pg(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Pg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var kr = "Switch", [Ng] = ye(kr), [Og, na] = Ng(kr);
function Rg(e) {
  const {
    __scopeSwitch: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: s,
    name: i,
    onCheckedChange: c,
    required: l,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [m, h] = Fe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: kr
  }), [g, v] = u.useState(null), [y, x] = u.useState(null), w = u.useRef(!1), b = g ? !!s || !!g.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), C = {
    checked: m,
    setChecked: h,
    disabled: a,
    control: g,
    setControl: v,
    name: i,
    form: s,
    value: d,
    hasConsumerStoppedPropagationRef: w,
    required: l,
    defaultChecked: o,
    isFormControl: b,
    bubbleInput: y,
    setBubbleInput: x
  };
  return /* @__PURE__ */ p.jsx(Og, { scope: t, ...C, children: _g(f) ? f(C) : r });
}
var _l = "SwitchTrigger", Dl = u.forwardRef(
  ({ __scopeSwitch: e, onClick: t, ...n }, r) => {
    const {
      value: o,
      disabled: a,
      checked: s,
      required: i,
      setControl: c,
      setChecked: l,
      hasConsumerStoppedPropagationRef: d,
      isFormControl: f,
      bubbleInput: m
    } = na(_l, e), h = q(r, c);
    return /* @__PURE__ */ p.jsx(
      L.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": s,
        "aria-required": i,
        "data-state": Wl(s),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: o,
        ...n,
        ref: h,
        onClick: T(t, (g) => {
          l((v) => !v), m && f && (d.current = g.isPropagationStopped(), d.current || g.stopPropagation());
        })
      }
    );
  }
);
Dl.displayName = _l;
var Tl = u.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: s,
      disabled: i,
      value: c,
      onCheckedChange: l,
      form: d,
      ...f
    } = e;
    return /* @__PURE__ */ p.jsx(
      Rg,
      {
        __scopeSwitch: n,
        checked: o,
        defaultChecked: a,
        disabled: i,
        required: s,
        onCheckedChange: l,
        name: r,
        form: d,
        value: c,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx(
            Dl,
            {
              ...f,
              ref: t,
              __scopeSwitch: n
            }
          ),
          m && /* @__PURE__ */ p.jsx(
            Fl,
            {
              __scopeSwitch: n
            }
          )
        ] })
      }
    );
  }
);
Tl.displayName = kr;
var Il = "SwitchThumb", Al = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = na(Il, n);
    return /* @__PURE__ */ p.jsx(
      L.span,
      {
        "data-state": Wl(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Al.displayName = Il;
var jl = "SwitchBubbleInput", Fl = u.forwardRef(
  ({ __scopeSwitch: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: s,
      required: i,
      disabled: c,
      name: l,
      value: d,
      form: f,
      bubbleInput: m,
      setBubbleInput: h
    } = na(jl, e), g = q(n, h), v = ar(a), y = sr(r);
    u.useEffect(() => {
      const w = m;
      if (!w) return;
      const b = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, k = !o.current;
      if (v !== a && S) {
        const P = new Event("click", { bubbles: k });
        S.call(w, a), w.dispatchEvent(P);
      }
    }, [m, v, a, o]);
    const x = u.useRef(a);
    return /* @__PURE__ */ p.jsx(
      L.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: s ?? x.current,
        required: i,
        disabled: c,
        name: l,
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
Fl.displayName = jl;
function _g(e) {
  return typeof e == "function";
}
function Wl(e) {
  return e ? "checked" : "unchecked";
}
var Er = "Tabs", [Dg] = ye(Er, [
  Gt
]), $l = Gt(), [Tg, ra] = Dg(Er), Ll = u.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: s = "horizontal",
      dir: i,
      activationMode: c = "automatic",
      ...l
    } = e, d = gn(i), [f, m] = Fe({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Er
    });
    return /* @__PURE__ */ p.jsx(
      Tg,
      {
        scope: n,
        baseId: je(),
        value: f,
        onValueChange: m,
        orientation: s,
        dir: d,
        activationMode: c,
        children: /* @__PURE__ */ p.jsx(
          L.div,
          {
            dir: d,
            "data-orientation": s,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
Ll.displayName = Er;
var Vl = "TabsList", Bl = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = ra(Vl, n), s = $l(n);
    return /* @__PURE__ */ p.jsx(
      Vo,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ p.jsx(
          L.div,
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
Bl.displayName = Vl;
var Yl = "TabsTrigger", Hl = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = ra(Yl, n), i = $l(n), c = Ul(s.baseId, r), l = zl(s.baseId, r), d = r === s.value;
    return /* @__PURE__ */ p.jsx(
      Bo,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: d,
        children: /* @__PURE__ */ p.jsx(
          L.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": l,
            "data-state": d ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...a,
            ref: t,
            onMouseDown: T(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? s.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: T(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && s.onValueChange(r);
            }),
            onFocus: T(e.onFocus, () => {
              const f = s.activationMode !== "manual";
              !d && !o && f && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Hl.displayName = Yl;
var Gl = "TabsContent", Ig = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = ra(Gl, n), c = Ul(i.baseId, r), l = zl(i.baseId, r), d = r === i.value, f = u.useRef(d);
    return u.useEffect(() => {
      const m = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ p.jsx(be, { present: o || d, children: ({ present: m }) => /* @__PURE__ */ p.jsx(
      L.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": i.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !m,
        id: l,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: m && a
      }
    ) });
  }
);
Ig.displayName = Gl;
function Ul(e, t) {
  return `${e}-trigger-${t}`;
}
function zl(e, t) {
  return `${e}-content-${t}`;
}
var Ag = Ll, jg = Bl, Fg = Hl;
const Kl = { asChild: { type: "boolean" } }, Wg = { width: { type: "string", className: "rt-r-w", customProperties: ["--width"], responsive: !0 }, minWidth: { type: "string", className: "rt-r-min-w", customProperties: ["--min-width"], responsive: !0 }, maxWidth: { type: "string", className: "rt-r-max-w", customProperties: ["--max-width"], responsive: !0 } }, $g = { height: { type: "string", className: "rt-r-h", customProperties: ["--height"], responsive: !0 }, minHeight: { type: "string", className: "rt-r-min-h", customProperties: ["--min-height"], responsive: !0 }, maxHeight: { type: "string", className: "rt-r-max-h", customProperties: ["--max-height"], responsive: !0 } }, Lg = ["gray", "gold", "bronze", "brown", "yellow", "amber", "orange", "tomato", "red", "ruby", "crimson", "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan", "teal", "jade", "green", "grass", "lime", "mint", "sky"], Vg = { color: { type: "enum", values: Lg, default: "" } }, Bg = { highContrast: { type: "boolean", className: "rt-high-contrast", default: void 0 } }, Yg = ["initial", "xs", "sm", "md", "lg", "xl"], oa = new Set(Yg);
function ql(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function rn(e) {
  return typeof e == "object" && e !== null && Object.keys(e).some((t) => oa.has(t));
}
function Hg({ className: e, customProperties: t, ...n }) {
  const r = Xl({ allowArbitraryValues: !0, className: e, ...n }), o = Gg({ customProperties: t, ...n });
  return [r, o];
}
function Xl({ allowArbitraryValues: e, value: t, className: n, propValues: r, parseValue: o = (a) => a }) {
  const a = [];
  if (t) {
    if (typeof t == "string" && r.includes(t)) return as(n, t, o);
    if (rn(t)) {
      const s = t;
      for (const i in s) {
        if (!ql(s, i) || !oa.has(i)) continue;
        const c = s[i];
        if (c !== void 0) {
          if (r.includes(c)) {
            const l = as(n, c, o), d = i === "initial" ? l : `${i}:${l}`;
            a.push(d);
          } else if (e) {
            const l = i === "initial" ? n : `${i}:${n}`;
            a.push(l);
          }
        }
      }
      return a.join(" ");
    }
    if (e) return n;
  }
}
function as(e, t, n) {
  const r = e ? "-" : "", o = n(t), a = o?.startsWith("-"), s = a ? "-" : "", i = a ? o?.substring(1) : o;
  return `${s}${e}${r}${i}`;
}
function Gg({ customProperties: e, value: t, propValues: n, parseValue: r = (o) => o }) {
  let o = {};
  if (!(!t || typeof t == "string" && n.includes(t))) {
    if (typeof t == "string" && (o = Object.fromEntries(e.map((a) => [a, t]))), rn(t)) {
      const a = t;
      for (const s in a) {
        if (!ql(a, s) || !oa.has(s)) continue;
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
function ss(...e) {
  let t = {};
  for (const n of e) n && (t = { ...t, ...n });
  return Object.keys(t).length ? t : void 0;
}
function Ug(...e) {
  return Object.assign({}, ...e);
}
function aa(e, ...t) {
  let n, r;
  const o = { ...e }, a = Ug(...t);
  for (const s in a) {
    let i = o[s];
    const c = a[s];
    if (c.default !== void 0 && i === void 0 && (i = c.default), c.type === "enum" && ![c.default, ...c.values].includes(i) && !rn(i) && (i = c.default), o[s] = i, "className" in c && c.className) {
      delete o[s];
      const l = "responsive" in c;
      if (!i || rn(i) && !l) continue;
      if (rn(i) && (c.default !== void 0 && i.initial === void 0 && (i.initial = c.default), c.type === "enum" && ([c.default, ...c.values].includes(i.initial) || (i.initial = c.default))), c.type === "enum") {
        const d = Xl({ allowArbitraryValues: !1, value: i, className: c.className, propValues: c.values, parseValue: c.parseValue });
        n = Z(n, d);
        continue;
      }
      if (c.type === "string" || c.type === "enum | string") {
        const d = c.type === "string" ? [] : c.values, [f, m] = Hg({ className: c.className, customProperties: c.customProperties, propValues: d, parseValue: c.parseValue, value: i });
        r = ss(r, m), n = Z(n, f);
        continue;
      }
      if (c.type === "boolean" && i) {
        n = Z(n, c.className);
        continue;
      }
    }
  }
  return o.className = Z(n, e.className), o.style = ss(r, e.style), o;
}
const pt = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], sa = { m: { type: "enum | string", values: pt, responsive: !0, className: "rt-r-m", customProperties: ["--m"] }, mx: { type: "enum | string", values: pt, responsive: !0, className: "rt-r-mx", customProperties: ["--ml", "--mr"] }, my: { type: "enum | string", values: pt, responsive: !0, className: "rt-r-my", customProperties: ["--mt", "--mb"] }, mt: { type: "enum | string", values: pt, responsive: !0, className: "rt-r-mt", customProperties: ["--mt"] }, mr: { type: "enum | string", values: pt, responsive: !0, className: "rt-r-mr", customProperties: ["--mr"] }, mb: { type: "enum | string", values: pt, responsive: !0, className: "rt-r-mb", customProperties: ["--mb"] }, ml: { type: "enum | string", values: pt, responsive: !0, className: "rt-r-ml", customProperties: ["--ml"] } }, zg = ["none", "small", "medium", "large", "full"], Kg = { radius: { type: "enum", values: zg, default: void 0 } }, qg = Rs, mt = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], Xg = { p: { type: "enum | string", className: "rt-r-p", customProperties: ["--p"], values: mt, responsive: !0 }, px: { type: "enum | string", className: "rt-r-px", customProperties: ["--pl", "--pr"], values: mt, responsive: !0 }, py: { type: "enum | string", className: "rt-r-py", customProperties: ["--pt", "--pb"], values: mt, responsive: !0 }, pt: { type: "enum | string", className: "rt-r-pt", customProperties: ["--pt"], values: mt, responsive: !0 }, pr: { type: "enum | string", className: "rt-r-pr", customProperties: ["--pr"], values: mt, responsive: !0 }, pb: { type: "enum | string", className: "rt-r-pb", customProperties: ["--pb"], values: mt, responsive: !0 }, pl: { type: "enum | string", className: "rt-r-pl", customProperties: ["--pl"], values: mt, responsive: !0 } }, Kr = ["visible", "hidden", "clip", "scroll", "auto"], Zg = ["static", "relative", "absolute", "fixed", "sticky"], Zt = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"], Qg = ["0", "1"], Jg = ["0", "1"], ey = ["start", "center", "end", "baseline", "stretch"], ty = ["start", "center", "end", "baseline", "stretch"], ny = { ...Xg, ...Wg, ...$g, position: { type: "enum", className: "rt-r-position", values: Zg, responsive: !0 }, inset: { type: "enum | string", className: "rt-r-inset", customProperties: ["--inset"], values: Zt, responsive: !0 }, top: { type: "enum | string", className: "rt-r-top", customProperties: ["--top"], values: Zt, responsive: !0 }, right: { type: "enum | string", className: "rt-r-right", customProperties: ["--right"], values: Zt, responsive: !0 }, bottom: { type: "enum | string", className: "rt-r-bottom", customProperties: ["--bottom"], values: Zt, responsive: !0 }, left: { type: "enum | string", className: "rt-r-left", customProperties: ["--left"], values: Zt, responsive: !0 }, overflow: { type: "enum", className: "rt-r-overflow", values: Kr, responsive: !0 }, overflowX: { type: "enum", className: "rt-r-ox", values: Kr, responsive: !0 }, overflowY: { type: "enum", className: "rt-r-oy", values: Kr, responsive: !0 }, flexBasis: { type: "string", className: "rt-r-fb", customProperties: ["--flex-basis"], responsive: !0 }, flexShrink: { type: "enum | string", className: "rt-r-fs", customProperties: ["--flex-shrink"], values: Qg, responsive: !0 }, flexGrow: { type: "enum | string", className: "rt-r-fg", customProperties: ["--flex-grow"], values: Jg, responsive: !0 }, gridArea: { type: "string", className: "rt-r-ga", customProperties: ["--grid-area"], responsive: !0 }, gridColumn: { type: "string", className: "rt-r-gc", customProperties: ["--grid-column"], responsive: !0 }, gridColumnStart: { type: "string", className: "rt-r-gcs", customProperties: ["--grid-column-start"], responsive: !0 }, gridColumnEnd: { type: "string", className: "rt-r-gce", customProperties: ["--grid-column-end"], responsive: !0 }, gridRow: { type: "string", className: "rt-r-gr", customProperties: ["--grid-row"], responsive: !0 }, gridRowStart: { type: "string", className: "rt-r-grs", customProperties: ["--grid-row-start"], responsive: !0 }, gridRowEnd: { type: "string", className: "rt-r-gre", customProperties: ["--grid-row-end"], responsive: !0 }, alignSelf: { type: "enum", className: "rt-r-as", values: ey, responsive: !0 }, justifySelf: { type: "enum", className: "rt-r-js", values: ty, responsive: !0 } }, ry = ["1", "2", "3", "4"], oy = ["classic", "solid", "soft", "surface", "outline", "ghost"], is = { ...Kl, size: { type: "enum", className: "rt-r-size", values: ry, default: "2", responsive: !0 }, variant: { type: "enum", className: "rt-variant", values: oy, default: "solid" }, ...Vg, ...Bg, ...Kg, loading: { type: "boolean", className: "rt-loading", default: !1 } }, qr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], ay = { gap: { type: "enum | string", className: "rt-r-gap", customProperties: ["--gap"], values: qr, responsive: !0 }, gapX: { type: "enum | string", className: "rt-r-cg", customProperties: ["--column-gap"], values: qr, responsive: !0 }, gapY: { type: "enum | string", className: "rt-r-rg", customProperties: ["--row-gap"], values: qr, responsive: !0 } }, sy = ["div", "span"], iy = ["none", "inline-flex", "flex"], cy = ["row", "column", "row-reverse", "column-reverse"], ly = ["start", "center", "end", "baseline", "stretch"], uy = ["start", "center", "end", "between"], dy = ["nowrap", "wrap", "wrap-reverse"], fy = { as: { type: "enum", values: sy, default: "div" }, ...Kl, display: { type: "enum", className: "rt-r-display", values: iy, responsive: !0 }, direction: { type: "enum", className: "rt-r-fd", values: cy, responsive: !0 }, align: { type: "enum", className: "rt-r-ai", values: ly, responsive: !0 }, justify: { type: "enum", className: "rt-r-jc", values: uy, parseValue: py, responsive: !0 }, wrap: { type: "enum", className: "rt-r-fw", values: dy, responsive: !0 }, ...ay };
function py(e) {
  return e === "between" ? "space-between" : e;
}
const qn = u.forwardRef((e, t) => {
  const { className: n, asChild: r, as: o = "div", ...a } = aa(e, fy, ny, sa);
  return u.createElement(r ? qg : o, { ...a, ref: t, className: Z("rt-Flex", n) });
});
qn.displayName = "Flex";
const my = ["1", "2", "3"], hy = { size: { type: "enum", className: "rt-r-size", values: my, default: "2", responsive: !0 }, loading: { type: "boolean", default: !0 } }, Zl = u.forwardRef((e, t) => {
  const { className: n, children: r, loading: o, ...a } = aa(e, hy, sa);
  if (!o) return r;
  const s = u.createElement("span", { ...a, ref: t, className: Z("rt-Spinner", n) }, u.createElement("span", { className: "rt-SpinnerLeaf" }), u.createElement("span", { className: "rt-SpinnerLeaf" }), u.createElement("span", { className: "rt-SpinnerLeaf" }), u.createElement("span", { className: "rt-SpinnerLeaf" }), u.createElement("span", { className: "rt-SpinnerLeaf" }), u.createElement("span", { className: "rt-SpinnerLeaf" }), u.createElement("span", { className: "rt-SpinnerLeaf" }), u.createElement("span", { className: "rt-SpinnerLeaf" }));
  return r === void 0 ? s : u.createElement(qn, { asChild: !0, position: "relative", align: "center", justify: "center" }, u.createElement("span", null, u.createElement("span", { "aria-hidden": !0, style: { display: "contents", visibility: "hidden" }, inert: void 0 }, r), u.createElement(qn, { asChild: !0, align: "center", justify: "center", position: "absolute", inset: "0" }, u.createElement("span", null, s))));
});
Zl.displayName = "Spinner";
const vy = ef;
function gy(e, t) {
  if (e !== void 0) return typeof e == "string" ? t(e) : Object.fromEntries(Object.entries(e).map(([n, r]) => [n, t(r)]));
}
function yy(e) {
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
const Ql = u.forwardRef((e, t) => {
  const { size: n = is.size.default } = e, { className: r, children: o, asChild: a, color: s, radius: i, disabled: c = e.loading, ...l } = aa(e, is, sa), d = a ? Rs : "button";
  return u.createElement(d, { "data-disabled": c || void 0, "data-accent-color": s, "data-radius": i, ...l, ref: t, className: Z("rt-reset", "rt-BaseButton", r), disabled: c }, e.loading ? u.createElement(u.Fragment, null, u.createElement("span", { style: { display: "contents", visibility: "hidden" }, "aria-hidden": !0 }, o), u.createElement(vy, null, o), u.createElement(qn, { asChild: !0, align: "center", justify: "center", position: "absolute", inset: "0" }, u.createElement("span", null, u.createElement(Zl, { size: gy(n, yy) })))) : o);
});
Ql.displayName = "BaseButton";
const Jl = u.forwardRef(({ className: e, ...t }, n) => u.createElement(Ql, { ...t, ref: n, className: Z("rt-Button", e) }));
Jl.displayName = "Button";
const by = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), wy = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), cs = (e) => {
  const t = wy(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, eu = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), xy = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var Cy = {
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
const Sy = pn(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, c) => yt(
    "svg",
    {
      ref: c,
      ...Cy,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: eu("lucide", o),
      ...!a && !xy(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([l, d]) => yt(l, d)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
const ue = (e, t) => {
  const n = pn(
    ({ className: r, ...o }, a) => yt(Sy, {
      ref: a,
      iconNode: t,
      className: eu(
        `lucide-${by(cs(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = cs(e), n;
};
const ky = [
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
], Ey = ue("badge-indian-rupee", ky);
const My = [
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
], Py = ue("calendar-days", My);
const Ny = [
  ["path", { d: "M12 16v5", key: "zza2cw" }],
  ["path", { d: "M16 14v7", key: "1g90b9" }],
  ["path", { d: "M20 10v11", key: "1iqoj0" }],
  [
    "path",
    { d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15", key: "1fw8x9" }
  ],
  ["path", { d: "M4 18v3", key: "1yp0dc" }],
  ["path", { d: "M8 14v7", key: "n3cwzv" }]
], Oy = ue("chart-no-axes-combined", Ny);
const Ry = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], _y = ue("check", Ry);
const Dy = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ty = ue("chevron-left", Dy);
const Iy = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ay = ue("chevron-right", Iy);
const jy = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], Fy = ue("chevrons-left", jy);
const Wy = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], $y = ue("chevrons-right", Wy);
const Ly = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
], Vy = ue("house", Ly);
const By = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }],
  [
    "path",
    {
      d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
      key: "1ywtjm"
    }
  ]
], Yy = ue("import", By);
const Hy = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], Gy = ue("log-out", Hy);
const Uy = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], zy = ue("moon", Uy);
const Ky = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], qy = ue("navigation", Ky);
const Xy = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Zy = ue("plus", Xy);
const Qy = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Jy = ue("settings", Qy);
const eb = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], tb = ue("square-pen", eb);
const nb = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
], rb = ue("tag", nb);
const ob = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], ab = ue("trash-2", ob);
const sb = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], ib = ue("user", sb);
const cb = [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
], lb = ue("users-round", cb);
const ub = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], db = ue("x", ub), fb = {
  badgeIndianRupee: Ey,
  calendar: Py,
  check: _y,
  chevronLeft: Ty,
  chevronRight: Ay,
  chevronsLeft: Fy,
  chevronsRight: $y,
  edit: tb,
  home: Vy,
  import: Yy,
  logOut: Gy,
  moon: zy,
  navigation: qy,
  plus: Zy,
  profiles: lb,
  report: Oy,
  settings: Jy,
  tag: rb,
  trash: ab,
  user: ib,
  x: db
}, pb = {
  XS: 12,
  S: 16,
  M: 20,
  L: 24,
  XL: 32,
  "2XL": 40
}, ct = u.forwardRef(
  ({ name: e, size: t = "S", color: n = "var(--text-primary)", className: r, strokeWidth: o = 1.75 }, a) => {
    const s = fb[e];
    if (!s)
      return process.env.NODE_ENV !== "production" && console.warn(`[Icon]: Unknown icon name "${e}"`), null;
    const i = typeof t == "number" ? t : pb[t];
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
ct.displayName = "Icon";
const tu = {
  XS: 12,
  S: 18,
  M: 24,
  L: 32,
  XL: 48
};
function mb({ size: e = "M", className: t }) {
  const n = tu[e];
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
const ls = Object.keys(tu);
function hb(e) {
  const t = ls.indexOf(e);
  return t > 0 ? ls[t - 1] : e;
}
const vb = {
  primary: "var(--gray-50)",
  secondary: "var(--gray-200)",
  negative: "#fff",
  accent: "#fff",
  link: "var(--blue-700)",
  quite: "var(--gray-800)"
}, gt = (e) => {
  const {
    size: t = "S",
    variant: n = "primary",
    className: r = "",
    label: o,
    ariaLabel: a,
    quite: s,
    outline: i,
    icon: c,
    iconOnly: l,
    loading: d,
    children: f,
    ...m
  } = e;
  let { iconColor: h } = e;
  const g = vt(() => hb(t), [t]);
  !h && c && (h = vb[s ? "quite" : n]);
  let v = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    c && /* @__PURE__ */ p.jsx(
      ct,
      {
        className: Z("btn-icon"),
        name: c,
        strokeWidth: 1.5,
        size: t,
        color: h
      }
    ),
    !l && f || o
  ] });
  return d && (v = /* @__PURE__ */ p.jsx(mb, { size: g })), /* @__PURE__ */ p.jsx(
    Jl,
    {
      "aria-label": a,
      className: Z("btn-container", {
        quite: s,
        outline: i,
        "icon-only": l,
        [r]: r,
        [`btn-container-size--${t}`]: t,
        [n]: n
      }),
      ...m,
      children: v
    }
  );
}, nu = M.createContext(null);
function ia() {
  const e = M.useContext(nu);
  if (!e)
    throw new Error("Dialog components must be used inside <DialogContainer>");
  return e;
}
function gb({
  title: e,
  description: t,
  content: n,
  ctaList: r,
  onAction: o,
  showDismiss: a,
  stopDimissOnCta: s
}) {
  const { closeDialog: i } = ia();
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(ci, { asChild: !0, children: /* @__PURE__ */ p.jsx("h2", { className: "dialog-heading", children: e }) }),
    /* @__PURE__ */ p.jsx(ui, { asChild: !0, children: /* @__PURE__ */ p.jsx("p", { className: "dialog-description", children: t }) }),
    n,
    /* @__PURE__ */ p.jsxs("div", { className: "dialog-footer", children: [
      r?.length > 0 && /* @__PURE__ */ p.jsx(
        gt,
        {
          onClick: () => {
            o && o(r[0].actionId), s || i();
          },
          ...r[0]
        }
      ),
      r?.length > 1 && /* @__PURE__ */ p.jsx(
        gt,
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
    a && /* @__PURE__ */ p.jsx(fi, { asChild: !0, children: /* @__PURE__ */ p.jsx(
      gt,
      {
        variant: "primary",
        className: "close-btn",
        onClick: () => i(),
        quite: !0,
        children: /* @__PURE__ */ p.jsx(_p, { color: "var(--text-primary)" })
      }
    ) })
  ] });
}
const ru = M.createContext(void 0);
function yb() {
  return M.useContext(ru);
}
function Mr(e) {
  const t = yb(), [n, r] = Me(void 0);
  return Zn(() => {
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
function bb({ dialog: e }) {
  const t = Mr(), [n, r] = M.useState(
    void 0
  ), { closeDialog: o, isOpen: a } = ia(), { dialog: s, onOpenChange: i, closeOnBackdropClick: c } = e;
  return /* @__PURE__ */ p.jsx(ru.Provider, { value: n, children: /* @__PURE__ */ p.jsx(ei, { open: a, onOpenChange: i, children: /* @__PURE__ */ p.jsxs(ri, { container: t, children: [
    /* @__PURE__ */ p.jsx(
      oi,
      {
        className: "overlay",
        onPointerDown: (l) => {
          c && o();
        }
      }
    ),
    /* @__PURE__ */ p.jsx(
      ai,
      {
        ref: (l) => r(l ?? void 0),
        className: "dialog-container",
        children: s
      }
    )
  ] }) }) });
}
function ou({ children: e }) {
  const [t, n] = M.useState(null), r = M.useMemo(
    () => ({
      addDialog: (o) => n(o),
      closeDialog: () => n(null),
      isOpen: !!t
    }),
    [t]
  );
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs(nu.Provider, { value: r, children: [
    t !== null && /* @__PURE__ */ p.jsx(bb, { dialog: t }),
    e
  ] }) });
}
const Kx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dialog: gb,
  DialogContainer: ou,
  useDialogContext: ia
}, Symbol.toStringTag, { value: "Module" }));
function qx({ theme: e, children: t, classname: n, root: r }) {
  const o = Ce(null);
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(Ys, { classname: n, ref: o, theme: e, root: r, children: /* @__PURE__ */ p.jsx(ou, { children: /* @__PURE__ */ p.jsx(kf, { children: t }) }) }) });
}
const Xx = ({ src: e, alt: t, fallback: { color: n, bgColor: r, text: o } = {}, size: a = "M" }) => /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsxs(
  hi,
  {
    className: Z("avatar", { [`avatar-size--${a}`]: a }),
    style: { color: n, backgroundColor: r },
    children: [
      /* @__PURE__ */ p.jsx(gi, { className: "avatar-image", src: e, alt: t }),
      /* @__PURE__ */ p.jsx(bi, { className: "avatar-fallback", children: o })
    ]
  }
) }), wb = {
  XS: 12,
  S: 14,
  M: 16,
  L: 20,
  XL: 24
}, Zx = ({ label: e, value: t, onChange: n, size: r = "M" }) => {
  const [o, a] = M.useState(t || !1);
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
          Ci,
          {
            className: "ui-checkbox-root",
            checked: o,
            id: "c1",
            onCheckedChange: s,
            children: /* @__PURE__ */ p.jsx(ki, { className: "ui-checkbox-indicator", children: /* @__PURE__ */ p.jsx(
              ct,
              {
                size: wb[r],
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
function Pr() {
  return (Pr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function au(e, t) {
  if (e == null) return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function on(e) {
  var t = Ce(e), n = Ce(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var Ft = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, an = function(e) {
  return "touches" in e;
}, yo = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, us = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = an(t) ? (function(a, s) {
    for (var i = 0; i < a.length; i++) if (a[i].identifier === s) return a[i];
    return a[0];
  })(t.touches, n) : t;
  return { left: Ft((o.pageX - (r.left + yo(e).pageXOffset)) / r.width), top: Ft((o.pageY - (r.top + yo(e).pageYOffset)) / r.height) };
}, ds = function(e) {
  !an(e) && e.preventDefault();
}, ca = M.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = e.onEnd, o = au(e, ["onMove", "onKey", "onEnd"]), a = Ce(null), s = on(t), i = on(n), c = on(r), l = Ce(null), d = Ce(!1), f = vt(function() {
    var y = function(b) {
      ds(b), (an(b) ? b.touches.length > 0 : b.buttons > 0) && a.current ? s(us(a.current, b, l.current)) : (w(!1), c());
    }, x = function() {
      w(!1), c();
    };
    function w(b) {
      var C = d.current, S = yo(a.current), k = b ? S.addEventListener : S.removeEventListener;
      k(C ? "touchmove" : "mousemove", y), k(C ? "touchend" : "mouseup", x);
    }
    return [function(b) {
      var C = b.nativeEvent, S = a.current;
      if (S && (ds(C), !(function(P, R) {
        return R && !an(P);
      })(C, d.current) && S)) {
        if (an(C)) {
          d.current = !0;
          var k = C.changedTouches || [];
          k.length && (l.current = k[0].identifier);
        }
        S.focus(), s(us(S, C, l.current)), w(!0);
      }
    }, function(b) {
      var C = b.which || b.keyCode;
      C < 37 || C > 40 || (b.preventDefault(), i({ left: C === 39 ? 0.05 : C === 37 ? -0.05 : 0, top: C === 40 ? 0.05 : C === 38 ? -0.05 : 0 }));
    }, function(b) {
      var C = b.which || b.keyCode;
      C >= 37 && C <= 40 && c();
    }, w];
  }, [i, s, c]), m = f[0], h = f[1], g = f[2], v = f[3];
  return _e(function() {
    return v;
  }, [v]), M.createElement("div", Pr({}, o, { onTouchStart: m, onMouseDown: m, className: "react-colorful__interactive", ref: a, onKeyDown: h, onKeyUp: g, tabIndex: 0, role: "slider" }));
}), Nr = function(e) {
  return e.filter(Boolean).join(" ");
}, la = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Nr(["react-colorful__pointer", e.className]);
  return M.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, M.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, he = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, xb = function(e) {
  return Eb(bo(e));
}, bo = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? he(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? he(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, Cb = function(e) {
  return kb(Sb(e));
}, su = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: he(e.h), s: he(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: he(o / 2), a: he(r, 2) };
}, wo = function(e) {
  var t = su(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Xr = function(e) {
  var t = su(e);
  return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
}, Sb = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: he(255 * [r, i, s, s, c, r][l]), g: he(255 * [c, r, r, i, s, s][l]), b: he(255 * [s, s, c, r, r, i][l]), a: he(o, 2) };
}, jn = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, kb = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? jn(he(255 * o)) : "";
  return "#" + jn(t) + jn(n) + jn(r) + a;
}, Eb = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: he(60 * (i < 0 ? i + 6 : i)), s: he(a ? s / a * 100 : 0), v: he(a / 255 * 100), a: o };
}, Mb = M.memo(function(e) {
  var t = e.hue, n = e.onChange, r = e.onChangeEnd, o = Nr(["react-colorful__hue", e.className]);
  return M.createElement("div", { className: o }, M.createElement(ca, { onMove: function(a) {
    n({ h: 360 * a.left });
  }, onKey: function(a) {
    n({ h: Ft(t + 360 * a.left, 0, 360) });
  }, onEnd: r, "aria-label": "Hue", "aria-valuenow": he(t), "aria-valuemax": "360", "aria-valuemin": "0" }, M.createElement(la, { className: "react-colorful__hue-pointer", left: t / 360, color: wo({ h: t, s: 100, v: 100, a: 1 }) })));
}), Pb = M.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = e.onChangeEnd, o = { backgroundColor: wo({ h: t.h, s: 100, v: 100, a: 1 }) };
  return M.createElement("div", { className: "react-colorful__saturation", style: o }, M.createElement(ca, { onMove: function(a) {
    n({ s: 100 * a.left, v: 100 - 100 * a.top });
  }, onKey: function(a) {
    n({ s: Ft(t.s + 100 * a.left, 0, 100), v: Ft(t.v - 100 * a.top, 0, 100) });
  }, onEnd: r, "aria-label": "Color", "aria-valuetext": "Saturation " + he(t.s) + "%, Brightness " + he(t.v) + "%" }, M.createElement(la, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: wo(t) })));
}), iu = function(e, t) {
  if (e === t) return !0;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}, Nb = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || iu(bo(e), bo(t));
};
function Ob(e, t, n, r) {
  var o = on(n), a = on(r), s = Me(function() {
    return e.toHsva(t);
  }), i = s[0], c = s[1], l = Ce({ color: t, hsva: i }), d = Ce(!1);
  _e(function() {
    if (!e.equal(t, l.current.color)) {
      var h = e.toHsva(t);
      l.current = { hsva: h, color: t }, c(h), d.current = !1;
    }
  }, [t, e]), _e(function() {
    var h;
    iu(i, l.current.hsva) || e.equal(h = e.fromHsva(i), l.current.color) || (l.current = { hsva: i, color: h }, o(h), d.current = !0);
  }, [i, e, o]);
  var f = me(function(h) {
    c(function(g) {
      return Object.assign({}, g, h);
    });
  }, []), m = me(function() {
    d.current && (d.current = !1, a(l.current.color));
  }, [a]);
  return [i, f, m];
}
var Rb = typeof window < "u" ? Zn : _e, _b = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, fs = /* @__PURE__ */ new Map(), Db = function(e) {
  Rb(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !fs.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, fs.set(t, n);
      var r = _b();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, Tb = function(e) {
  var t = e.className, n = e.hsva, r = e.onChange, o = e.onChangeEnd, a = { backgroundImage: "linear-gradient(90deg, " + Xr(Object.assign({}, n, { a: 0 })) + ", " + Xr(Object.assign({}, n, { a: 1 })) + ")" }, s = Nr(["react-colorful__alpha", t]), i = he(100 * n.a);
  return M.createElement("div", { className: s }, M.createElement("div", { className: "react-colorful__alpha-gradient", style: a }), M.createElement(ca, { onMove: function(c) {
    r({ a: c.left });
  }, onKey: function(c) {
    r({ a: Ft(n.a + c.left) });
  }, onEnd: o, "aria-label": "Alpha", "aria-valuetext": i + "%", "aria-valuenow": i, "aria-valuemin": "0", "aria-valuemax": "100" }, M.createElement(la, { className: "react-colorful__alpha-pointer", left: n.a, color: Xr(n) })));
}, Ib = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = e.onChangeEnd, i = au(e, ["className", "colorModel", "color", "onChange", "onChangeEnd"]), c = Ce(null);
  Db(c);
  var l = Ob(n, o, a, s), d = l[0], f = l[1], m = l[2], h = Nr(["react-colorful", t]);
  return M.createElement("div", Pr({}, i, { ref: c, className: h }), M.createElement(Pb, { hsva: d, onChange: f, onChangeEnd: m }), M.createElement(Mb, { hue: d.h, onChange: f, onChangeEnd: m }), M.createElement(Tb, { hsva: d, onChange: f, onChangeEnd: m, className: "react-colorful__last-control" }));
}, Ab = { defaultColor: "0001", toHsva: xb, fromHsva: Cb, equal: Nb }, jb = function(e) {
  return M.createElement(Ib, Pr({}, e, { colorModel: Ab }));
};
const cu = M.createContext(null);
function lu() {
  const e = M.useContext(cu);
  if (!e)
    throw new Error("Popover components must be used inside <Popover>");
  return e;
}
function ua({ children: e, onClose: t, open: n, onOpenChange: r }) {
  const o = Mr(), [a, s] = M.useState(null), [i, c] = M.useState(null), l = M.useMemo(
    () => ({
      registerTrigger: s,
      registerContent: c
    }),
    []
  );
  return /* @__PURE__ */ p.jsx(cu.Provider, { value: l, children: /* @__PURE__ */ p.jsxs(
    Lv,
    {
      open: n,
      onOpenChange: (d) => {
        r && r(d), !d && t && t("");
      },
      children: [
        a,
        i && /* @__PURE__ */ p.jsx(Bv, { container: o, children: i }),
        e
      ]
    }
  ) });
}
const Or = u.forwardRef(
  ({ children: e }, t) => {
    const { registerTrigger: n } = lu(), r = e;
    return u.useEffect(() => {
      const o = /* @__PURE__ */ p.jsx(Vv, { asChild: !0, children: u.cloneElement(r, {
        ...r.props,
        className: [r.props.className, "popover-trigger"].filter(Boolean).join(" ")
      }) });
      n(o);
    }, [e, t, n]), null;
  }
);
Or.displayName = "PopoverTrigger";
function da({ children: e, ...t }) {
  const { registerContent: n } = lu(), r = e, o = r?.props?.className || "";
  return u.useEffect(() => {
    n(
      /* @__PURE__ */ p.jsx(
        Yv,
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
const Qx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Content: da,
  Popover: ua,
  Trigger: Or
}, Symbol.toStringTag, { value: "Module" }));
function uu({
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
        /* @__PURE__ */ p.jsx(Jc, { className: "ui-radio-root", value: r, disabled: o, children: /* @__PURE__ */ p.jsx(tl, { className: "ui-radio-indicator" }) }),
        t ? /* @__PURE__ */ p.jsx("span", { className: "ui-radio-label", children: t }) : null
      ]
    }
  );
}
function Jx({
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
  const l = o ? r : "";
  return /* @__PURE__ */ p.jsx(
    ea,
    {
      className: "ui-radio-group",
      name: s,
      value: l,
      onValueChange: (d) => c?.(d === r, d),
      children: /* @__PURE__ */ p.jsx(
        uu,
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
function Fb(e) {
  const { className: t = "", name: n, size: r = "M", value: o, defaultValue: a, items: s, onChange: i } = e, [c, l] = M.useState(a), d = Object.prototype.hasOwnProperty.call(e, "value");
  _e(() => {
    d && l(o);
  }, [d, o]);
  const f = d ? o : c, m = (h) => {
    d || l(h), i?.(h);
  };
  return /* @__PURE__ */ p.jsx(
    ea,
    {
      className: Z("ui-radio-group", t),
      name: n,
      value: f,
      defaultValue: a,
      onValueChange: m,
      children: s.map((h) => /* @__PURE__ */ p.jsx(
        uu,
        {
          label: h.label,
          value: h.value,
          disabled: h.disabled,
          accentColor: h.accentColor,
          size: r
        },
        h.value
      ))
    }
  );
}
function Wb(e) {
  const { tabs: t, value: n, defaultValue: r, size: o = "M", className: a, onSelect: s } = e, i = Object.prototype.hasOwnProperty.call(e, "value"), c = t.find((g) => !g.disabled), l = r ?? c?.value ?? "", [d, f] = M.useState(n ?? l), m = i ? n ?? l : d;
  _e(() => {
    if (i)
      return;
    t.some((v) => v.value === d && !v.disabled) || f(l);
  }, [l, d, i, t]);
  const h = (g) => {
    i || f(g), s?.(g);
  };
  return /* @__PURE__ */ p.jsx(
    Ag,
    {
      className: Z("ui-tabs", {
        [`ui-tabs-size--${o}`]: o,
        [a]: a
      }),
      value: m,
      onValueChange: h,
      children: /* @__PURE__ */ p.jsx(jg, { className: "ui-tabs-list", "aria-label": "Tabs", children: t.map((g) => /* @__PURE__ */ p.jsx(
        Fg,
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
let $b = 0;
function Lb({
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
  const l = `textfield-${$b++}`, d = M.useRef(null), [f, m] = Me(!0), h = (g) => {
    const v = g.target.value;
    a && (!v || v === "") && m(!1), c && c(v);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: Z("textfield-container", { [n]: n, disabled: s }), children: [
    e && /* @__PURE__ */ p.jsx(Dc, { htmlFor: l, asChild: !0, children: /* @__PURE__ */ p.jsxs("div", { className: "textfield-label", children: [
      e,
      a && /* @__PURE__ */ p.jsx("span", { className: "required-astrik", children: "*" })
    ] }) }),
    /* @__PURE__ */ p.jsx(
      "input",
      {
        ref: d,
        className: "input",
        type: t,
        id: l,
        defaultValue: o,
        value: r,
        onBlur: h,
        onChange: (g) => {
          const v = g.target.value;
          g.preventDefault(), g.stopPropagation(), v != "" && m(!0), i && i(g.target.value);
        }
      }
    ),
    !f && /* @__PURE__ */ p.jsx("span", { className: "error", children: "Required field is empty" })
  ] });
}
const du = {
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
}, Ln = "#ffffff";
function ps(e) {
  return e?.trim().toLowerCase() || "";
}
function sn(e) {
  return e?.trim().toLowerCase().replace(/^var\(--/, "").replace(/^--/, "").replace(/\)$/, "");
}
function Vb(e, t) {
  const n = sn(e), r = t.find((o) => o.key === n);
  return r ? `var(${r.cssVar})` : e || Ln;
}
function Bb(e, t) {
  const n = sn(e), r = t.find((o) => o.key === n);
  return r ? r.label : e || "Custom Hex Color";
}
function Yb({
  value: e,
  displayValue: t,
  setValue: n
}) {
  const [r, o] = Me(!1);
  return r ? /* @__PURE__ */ p.jsx(
    Lb,
    {
      className: "color-textfield",
      value: e,
      onChange: n,
      onBlur: () => o(!1)
    }
  ) : /* @__PURE__ */ p.jsx("div", { className: "custom-color-input", onClick: () => o(!0), children: t || e || "Custom Hex Color" });
}
function eC({ value: e, onColorSelect: t }) {
  const [n, r] = Me(e || Ln), [o, a] = Me(!1), s = Ce(!0), [i, c] = Me(
    () => sn(e) || e === void 0 ? "theme" : "custom"
  );
  _e(() => {
    r(e || Ln), e !== void 0 && c(sn(e) ? "theme" : "custom");
  }, [e]), _e(() => {
    o && (s.current = !0);
  }, [o]);
  const l = typeof document > "u" ? [] : (() => {
    const v = document.querySelector(
      ".ui-provider.ui-light, .ui-provider.ui-dark"
    ) ?? document.body, y = window.getComputedStyle(v);
    return Object.values(du).map((x) => ({
      ...x,
      resolvedValue: y.getPropertyValue(x.cssVar).trim() || Ln
    }));
  })(), d = ps(n), f = sn(n), m = l.find(
    (v) => v.key === f || ps(v.resolvedValue) === d
  ), h = Vb(n, l), g = Bb(n, l);
  return /* @__PURE__ */ p.jsx("div", { className: "color-picker", children: /* @__PURE__ */ p.jsxs(
    ua,
    {
      open: o,
      onOpenChange: a,
      onClose: () => {
        s.current && t(n);
      },
      children: [
        /* @__PURE__ */ p.jsx(Or, { children: /* @__PURE__ */ p.jsx("div", { className: Z("color-picker-trigger"), children: /* @__PURE__ */ p.jsxs("div", { className: "color-swatch", children: [
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: "color-tile",
              style: { backgroundColor: h }
            }
          ),
          /* @__PURE__ */ p.jsx("span", { children: g })
        ] }) }) }),
        /* @__PURE__ */ p.jsx(da, { align: "start", alignOffset: 4, children: /* @__PURE__ */ p.jsxs("div", { className: "color-picker-content", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "selected-color", children: [
            /* @__PURE__ */ p.jsx(
              "div",
              {
                className: "color-preview",
                style: { backgroundColor: h }
              }
            ),
            /* @__PURE__ */ p.jsx(
              Yb,
              {
                value: n,
                displayValue: g,
                setValue: r
              }
            )
          ] }),
          /* @__PURE__ */ p.jsx(
            Wb,
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
            Fb,
            {
              className: "theme-color-grid",
              size: "S",
              value: m?.key,
              onChange: (v) => {
                const y = l.find(
                  (x) => x.key === v
                );
                if (y) {
                  const x = y.key;
                  s.current = !1, c("theme"), r(x), t(x), a(!1);
                }
              },
              items: l.map((v) => ({
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
            jb,
            {
              className: "custom-color-picker",
              color: h,
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
const tC = M.forwardRef(
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
function Hb(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Gb = {}, nn = {};
function Ke(e, t) {
  try {
    const r = (Gb[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in nn ? nn[r] : ms(r, r.split(":"));
  } catch {
    if (e in nn) return nn[e];
    const n = e?.match(Ub);
    return n ? ms(e, n.slice(1)) : NaN;
  }
}
const Ub = /([+-]\d\d):?(\d\d)?/;
function ms(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return nn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class He extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Ke(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), fu(this, t)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new He(...n, t) : new He(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new He(+this, t);
  }
  getTimezoneOffset() {
    const t = -Ke(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Xn(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new He(+new Date(t), this.timeZone);
  }
  //#endregion
}
const hs = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!hs.test(e)) return;
  const t = e.replace(hs, "$1UTC");
  He.prototype[t] && (e.startsWith("get") ? He.prototype[e] = function() {
    return this.internal[t]();
  } : (He.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), zb(this), +this;
  }, He.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Xn(this), +this;
  }));
});
function Xn(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - // Round after converting minutes to seconds to avoid fractional offset
  // precision errors from historical offsets.
  Math.round(-Ke(e.timeZone, e) * 60));
}
function zb(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), fu(e);
}
function fu(e, t) {
  const n = Array.isArray(t) ? Kb(t) : +e.internal, r = Ke(e.timeZone, e), o = r > 0 ? Math.floor(r) : Math.ceil(r), a = /* @__PURE__ */ new Date(+e);
  a.setUTCHours(a.getUTCHours() - 1);
  const s = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), i = -(/* @__PURE__ */ new Date(+a)).getTimezoneOffset(), c = s - i;
  let l = s;
  if (c && s !== o) {
    const D = Date.prototype.getHours.apply(e), A = Array.isArray(t) ? t[3] || 0 : e.internal.getUTCHours();
    if (D !== A) {
      const O = /* @__PURE__ */ new Date(+e), j = s - o;
      j && O.setUTCMinutes(O.getUTCMinutes() + j);
      const F = Ke(e.timeZone, O);
      (F > 0 ? Math.floor(F) : Math.ceil(F)) === o && (l = i);
    }
  }
  const d = l - o;
  d && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + d);
  const f = /* @__PURE__ */ new Date(+e);
  f.setUTCSeconds(0);
  const m = s > 0 ? f.getSeconds() : (f.getSeconds() - 60) % 60, h = Math.round(-(Ke(e.timeZone, e) * 60)) % 60;
  (h || m) && Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + h + m);
  const g = Ke(e.timeZone, e), v = g > 0 ? Math.floor(g) : Math.ceil(g), x = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - v, w = v !== o, b = x - d, C = v - o, S = n - v * 60 * 1e3, k = C > 0 && vs(e) - n === C * 60 * 1e3 && vs(e, S) !== n;
  if (w && b && !k) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + b);
    const D = Ke(e.timeZone, e), A = D > 0 ? Math.floor(D) : Math.ceil(D), O = v - A;
    O && b < 0 && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + O);
  }
  Xn(e);
  const R = (t ? n : n + h * 1e3) - +e.internal;
  R && Math.abs(R) < 1800 * 1e3 && (Date.prototype.setTime.call(e, +e + R), Xn(e));
}
function Kb(e) {
  return Date.UTC(e[0], e.length > 1 ? e[1] : 0, e.length > 2 ? e[2] : 1, ...e.slice(3));
}
function vs(e, t) {
  const n = new Date(t ?? +e);
  return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-Ke(e.timeZone, n) * 60)), +n;
}
class ve extends He {
  //#region static
  static tz(t, ...n) {
    return n.length ? new ve(...n, t) : new ve(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${Hb(this.timeZone, this)})`;
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
    return new ve(+this, t);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new ve(+new Date(t), this.timeZone);
  }
  //#endregion
}
const pu = 6048e5, qb = 864e5, gs = /* @__PURE__ */ Symbol.for("constructDateFrom");
function fe(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && gs in e ? e[gs](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function oe(e, t) {
  return fe(t || e, e);
}
function mu(e, t, n) {
  const r = oe(e, n?.in);
  return isNaN(t) ? fe(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function hu(e, t, n) {
  const r = oe(e, n?.in);
  if (isNaN(t)) return fe(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = fe(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let Xb = {};
function Sn() {
  return Xb;
}
function Wt(e, t) {
  const n = Sn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = oe(e, t?.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function dn(e, t) {
  return Wt(e, { ...t, weekStartsOn: 1 });
}
function vu(e, t) {
  const n = oe(e, t?.in), r = n.getFullYear(), o = fe(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = dn(o), s = fe(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = dn(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function ys(e) {
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
function Ut(e, ...t) {
  const n = fe.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function fn(e, t) {
  const n = oe(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function fa(e, t, n) {
  const [r, o] = Ut(
    n?.in,
    e,
    t
  ), a = fn(r), s = fn(o), i = +a - ys(a), c = +s - ys(s);
  return Math.round((i - c) / qb);
}
function Zb(e, t) {
  const n = vu(e, t), r = fe(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), dn(r);
}
function Qb(e, t, n) {
  return mu(e, t * 7, n);
}
function Jb(e, t, n) {
  return hu(e, t * 12, n);
}
function e0(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = fe.bind(null, o));
    const a = oe(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), fe(r, n || NaN);
}
function t0(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = fe.bind(null, o));
    const a = oe(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), fe(r, n || NaN);
}
function n0(e, t, n) {
  const [r, o] = Ut(
    n?.in,
    e,
    t
  );
  return +fn(r) == +fn(o);
}
function gu(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function r0(e) {
  return !(!gu(e) && typeof e != "number" || isNaN(+oe(e)));
}
function yu(e, t, n) {
  const [r, o] = Ut(
    n?.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function o0(e, t) {
  const n = oe(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function bu(e, t) {
  const [n, r] = Ut(e, t.start, t.end);
  return { start: n, end: r };
}
function a0(e, t) {
  const { start: n, end: r } = bu(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(fe(n, s)), s.setMonth(s.getMonth() + i);
  return o ? c.reverse() : c;
}
function s0(e, t) {
  const n = oe(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function i0(e, t) {
  const n = oe(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function wu(e, t) {
  const n = oe(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function c0(e, t) {
  const { start: n, end: r } = bu(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(fe(n, s)), s.setFullYear(s.getFullYear() + i);
  return o ? c.reverse() : c;
}
function xu(e, t) {
  const n = Sn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = oe(e, t?.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function l0(e, t) {
  return xu(e, { ...t, weekStartsOn: 1 });
}
const u0 = {
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
}, d0 = (e, t, n) => {
  let r;
  const o = u0[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Zr(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const f0 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, p0 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, m0 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, h0 = {
  date: Zr({
    formats: f0,
    defaultWidth: "full"
  }),
  time: Zr({
    formats: p0,
    defaultWidth: "full"
  }),
  dateTime: Zr({
    formats: m0,
    defaultWidth: "full"
  })
}, v0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, g0 = (e, t, n, r) => v0[e];
function Qt(e) {
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
const y0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, b0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, w0 = {
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
}, x0 = {
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
}, C0 = {
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
}, S0 = {
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
}, k0 = (e, t) => {
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
}, E0 = {
  ordinalNumber: k0,
  era: Qt({
    values: y0,
    defaultWidth: "wide"
  }),
  quarter: Qt({
    values: b0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Qt({
    values: w0,
    defaultWidth: "wide"
  }),
  day: Qt({
    values: x0,
    defaultWidth: "wide"
  }),
  dayPeriod: Qt({
    values: C0,
    defaultWidth: "wide",
    formattingValues: S0,
    defaultFormattingWidth: "wide"
  })
};
function Jt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? P0(i, (f) => f.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      M0(i, (f) => f.test(s))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const d = t.slice(s.length);
    return { value: l, rest: d };
  };
}
function M0(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function P0(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function N0(e) {
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
const O0 = /^(\d+)(th|st|nd|rd)?/i, R0 = /\d+/i, _0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, D0 = {
  any: [/^b/i, /^(a|c)/i]
}, T0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, I0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, A0 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, j0 = {
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
}, F0 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, W0 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, $0 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, L0 = {
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
}, V0 = {
  ordinalNumber: N0({
    matchPattern: O0,
    parsePattern: R0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Jt({
    matchPatterns: _0,
    defaultMatchWidth: "wide",
    parsePatterns: D0,
    defaultParseWidth: "any"
  }),
  quarter: Jt({
    matchPatterns: T0,
    defaultMatchWidth: "wide",
    parsePatterns: I0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Jt({
    matchPatterns: A0,
    defaultMatchWidth: "wide",
    parsePatterns: j0,
    defaultParseWidth: "any"
  }),
  day: Jt({
    matchPatterns: F0,
    defaultMatchWidth: "wide",
    parsePatterns: W0,
    defaultParseWidth: "any"
  }),
  dayPeriod: Jt({
    matchPatterns: $0,
    defaultMatchWidth: "any",
    parsePatterns: L0,
    defaultParseWidth: "any"
  })
}, _t = {
  code: "en-US",
  formatDistance: d0,
  formatLong: h0,
  formatRelative: g0,
  localize: E0,
  match: V0,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function B0(e, t) {
  const n = oe(e, t?.in);
  return fa(n, wu(n)) + 1;
}
function pa(e, t) {
  const n = oe(e, t?.in), r = +dn(n) - +Zb(n);
  return Math.round(r / pu) + 1;
}
function Cu(e, t) {
  const n = oe(e, t?.in), r = n.getFullYear(), o = Sn(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, s = fe(t?.in || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = Wt(s, t), c = fe(t?.in || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = Wt(c, t);
  return +n >= +i ? r + 1 : +n >= +l ? r : r - 1;
}
function Y0(e, t) {
  const n = Sn(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = Cu(e, t), a = fe(t?.in || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Wt(a, t);
}
function ma(e, t) {
  const n = oe(e, t?.in), r = +Wt(n, t) - +Y0(n, t);
  return Math.round(r / pu) + 1;
}
function re(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const et = {
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
}, Ot = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, bs = {
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
    return et.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Cu(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return re(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : re(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = vu(e);
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
        return et.M(e, t);
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
    const o = ma(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : re(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = pa(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : re(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : et.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = B0(e);
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
    switch (r === 12 ? o = Ot.noon : r === 0 ? o = Ot.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Ot.evening : r >= 12 ? o = Ot.afternoon : r >= 4 ? o = Ot.morning : o = Ot.night, t) {
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
    return et.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : et.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : et.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : et.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return et.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return xs(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return ht(r);
      // Hours and minutes with `:` delimiter
      default:
        return ht(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return xs(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return ht(r);
      // Hours and minutes with `:` delimiter
      default:
        return ht(r, ":");
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
        return "GMT" + ws(r, ":");
      default:
        return "GMT" + ht(r, ":");
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
        return "GMT" + ws(r, ":");
      default:
        return "GMT" + ht(r, ":");
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
function ws(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + re(a, 2);
}
function xs(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + re(Math.abs(e) / 60, 2) : ht(e, t);
}
function ht(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = re(Math.trunc(r / 60), 2), a = re(r % 60, 2);
  return n + o + t + a;
}
const Cs = (e, t) => {
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
}, Su = (e, t) => {
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
}, H0 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Cs(e, t);
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
  return a.replace("{{date}}", Cs(r, t)).replace("{{time}}", Su(o, t));
}, G0 = {
  p: Su,
  P: H0
}, U0 = /^D+$/, z0 = /^Y+$/, K0 = ["D", "DD", "YY", "YYYY"];
function q0(e) {
  return U0.test(e);
}
function X0(e) {
  return z0.test(e);
}
function Z0(e, t, n) {
  const r = Q0(e, t, n);
  if (console.warn(r), K0.includes(e)) throw new RangeError(r);
}
function Q0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const J0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ew = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, tw = /^'([^]*?)'?$/, nw = /''/g, rw = /[a-zA-Z]/;
function nt(e, t, n) {
  const r = Sn(), o = n?.locale ?? r.locale ?? _t, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, s = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = oe(e, n?.in);
  if (!r0(i))
    throw new RangeError("Invalid time value");
  let c = t.match(ew).map((d) => {
    const f = d[0];
    if (f === "p" || f === "P") {
      const m = G0[f];
      return m(d, o.formatLong);
    }
    return d;
  }).join("").match(J0).map((d) => {
    if (d === "''")
      return { isToken: !1, value: "'" };
    const f = d[0];
    if (f === "'")
      return { isToken: !1, value: ow(d) };
    if (bs[f])
      return { isToken: !0, value: d };
    if (f.match(rw))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: d };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return c.map((d) => {
    if (!d.isToken) return d.value;
    const f = d.value;
    (!n?.useAdditionalWeekYearTokens && X0(f) || !n?.useAdditionalDayOfYearTokens && q0(f)) && Z0(f, t, String(e));
    const m = bs[f[0]];
    return m(i, f, o.localize, l);
  }).join("");
}
function ow(e) {
  const t = e.match(tw);
  return t ? t[1].replace(nw, "'") : e;
}
function aw(e, t) {
  const n = oe(e, t?.in), r = n.getFullYear(), o = n.getMonth(), a = fe(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function sw(e, t) {
  return oe(e, t?.in).getMonth();
}
function iw(e, t) {
  return oe(e, t?.in).getFullYear();
}
function cw(e, t) {
  return +oe(e) > +oe(t);
}
function lw(e, t) {
  return +oe(e) < +oe(t);
}
function uw(e, t, n) {
  const [r, o] = Ut(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function dw(e, t, n) {
  const [r, o] = Ut(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function fw(e, t, n) {
  const r = oe(e, n?.in), o = r.getFullYear(), a = r.getDate(), s = fe(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = aw(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function pw(e, t, n) {
  const r = oe(e, n?.in);
  return isNaN(+r) ? fe(e, NaN) : (r.setFullYear(t), r);
}
const Ss = 5, mw = 4;
function hw(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, Ss * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? Ss : mw;
}
function ku(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function vw(e, t) {
  const n = ku(e, t), r = hw(e, t);
  return t.addDays(n, r * 7 - 1);
}
const Eu = {
  ..._t,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (s, i) => nt(s, i, { locale: _t, ...n });
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
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => nt(o, a, { locale: _t, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (s, i) => nt(s, i, { locale: _t, ...n });
      let a = o(e, "PPPP");
      return t?.today && (a = `Today, ${a}`), a;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => nt(o, a, { locale: _t, ...t }), r(e, "cccc");
    }
  }
};
class Ne {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? ve.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, a) => this.overrides?.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new ve(r, o, a, this.options.timeZone) : new Date(r, o, a), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : mu(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : hu(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : Qb(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : Jb(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : fa(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : yu(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : a0(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : c0(r), a = new Set(o.map((i) => this.getYear(i)));
      if (a.size === o.length)
        return o;
      const s = [];
      return a.forEach((i) => {
        s.push(new Date(i, 0, 1));
      }), s;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : vw(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : l0(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : o0(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : xu(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : i0(r), this.format = (r, o, a) => {
      const s = this.overrides?.format ? this.overrides.format(r, o, this.options) : nt(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : pa(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : sw(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : iw(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : ma(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : cw(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : lw(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : gu(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : n0(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : uw(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : dw(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : e0(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : t0(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : fw(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : pw(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : ku(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : fn(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : dn(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : s0(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : Wt(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : wu(r), this.options = { locale: Eu, ...t }, this.overrides = n;
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
    return t && Ne.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n?.code;
    if (a && Ne.yearFirstLocales.has(a))
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
Ne.yearFirstLocales = /* @__PURE__ */ new Set([
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
const ze = new Ne();
class Mu {
  constructor(t, n, r = ze) {
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
class gw {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class yw {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function bw(e) {
  return M.createElement("button", { ...e });
}
function ww(e) {
  return M.createElement("span", { ...e });
}
function xw(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    M.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && M.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && M.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && M.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && M.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function Cw(e) {
  const { day: t, modifiers: n, ...r } = e;
  return M.createElement("td", { ...r });
}
function Sw(e) {
  const { day: t, modifiers: n, ...r } = e, o = M.useRef(null);
  return M.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), M.createElement("button", { ref: o, ...r });
}
var B;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(B || (B = {}));
var ie;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(ie || (ie = {}));
var Ae;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Ae || (Ae = {}));
var ke;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(ke || (ke = {}));
function kw(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[B.Dropdown], n].join(" "), i = t?.find(({ value: c }) => c === a.value);
  return M.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[B.DropdownRoot] },
    M.createElement(r.Select, { className: s, ...a }, t?.map(({ value: c, label: l, disabled: d }) => M.createElement(r.Option, { key: c, value: c, disabled: d }, l))),
    M.createElement(
      "span",
      { className: o[B.CaptionLabel], "aria-hidden": !0 },
      i?.label,
      M.createElement(r.Chevron, { orientation: "down", size: 18, className: o[B.Chevron] })
    )
  );
}
function Ew(e) {
  return M.createElement("div", { ...e });
}
function Mw(e) {
  return M.createElement("div", { ...e });
}
function Pw(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return M.createElement("div", { ...r }, e.children);
}
function Nw(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return M.createElement("div", { ...r });
}
function Ow(e) {
  return M.createElement("table", { ...e });
}
function Rw(e) {
  return M.createElement("div", { ...e });
}
const Pu = vd(void 0);
function kn() {
  const e = gd(Pu);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function _w(e) {
  const { components: t } = kn();
  return M.createElement(t.Dropdown, { ...e });
}
function Dw(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: c, labelNext: l } } = kn(), d = me((m) => {
    o && n?.(m);
  }, [o, n]), f = me((m) => {
    r && t?.(m);
  }, [r, t]);
  return M.createElement(
    "nav",
    { ...a },
    M.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[B.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: f },
      M.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[B.Chevron], orientation: "left" })
    ),
    M.createElement(
      s.NextMonthButton,
      { type: "button", className: i[B.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: d },
      M.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[B.Chevron] })
    )
  );
}
function Tw(e) {
  const { components: t } = kn();
  return M.createElement(t.Button, { ...e });
}
function Iw(e) {
  return M.createElement("option", { ...e });
}
function Aw(e) {
  const { components: t } = kn();
  return M.createElement(t.Button, { ...e });
}
function jw(e) {
  const { rootRef: t, ...n } = e;
  return M.createElement("div", { ...n, ref: t });
}
function Fw(e) {
  return M.createElement("select", { ...e });
}
function Ww(e) {
  const { week: t, ...n } = e;
  return M.createElement("tr", { ...n });
}
function $w(e) {
  return M.createElement("th", { ...e });
}
function Lw(e) {
  return M.createElement(
    "thead",
    { "aria-hidden": !0 },
    M.createElement("tr", { ...e })
  );
}
function Vw(e) {
  const { week: t, ...n } = e;
  return M.createElement("th", { ...n });
}
function Bw(e) {
  return M.createElement("th", { ...e });
}
function Yw(e) {
  return M.createElement("tbody", { ...e });
}
function Hw(e) {
  const { components: t } = kn();
  return M.createElement(t.Dropdown, { ...e });
}
const Gw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: bw,
  CaptionLabel: ww,
  Chevron: xw,
  Day: Cw,
  DayButton: Sw,
  Dropdown: kw,
  DropdownNav: Ew,
  Footer: Mw,
  Month: Pw,
  MonthCaption: Nw,
  MonthGrid: Ow,
  Months: Rw,
  MonthsDropdown: _w,
  Nav: Dw,
  NextMonthButton: Tw,
  Option: Iw,
  PreviousMonthButton: Aw,
  Root: jw,
  Select: Fw,
  Week: Ww,
  WeekNumber: Vw,
  WeekNumberHeader: Bw,
  Weekday: $w,
  Weekdays: Lw,
  Weeks: Yw,
  YearsDropdown: Hw
}, Symbol.toStringTag, { value: "Module" }));
function qe(e, t, n = !1, r = ze) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function ha(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Rr(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function va(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function ga(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Nu(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Ou(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Xe(e, t, n = ze) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Ou(i, n))
      return i.some((c) => o(e, c));
    if (Rr(i))
      return qe(i, e, !1, n);
    if (Nu(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (ha(i)) {
      const c = a(i.before, e), l = a(i.after, e), d = c > 0, f = l < 0;
      return s(i.before, i.after) ? f && d : d || f;
    }
    return va(i) ? a(e, i.after) > 0 : ga(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function Uw(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: d = o.today() } = t, { isSameDay: f, isSameMonth: m, startOfMonth: h, isBefore: g, endOfMonth: v, isAfter: y } = o, x = n && h(n), w = r && v(r), b = {
    [ie.focused]: [],
    [ie.outside]: [],
    [ie.disabled]: [],
    [ie.hidden]: [],
    [ie.today]: []
  }, C = {};
  for (const S of e) {
    const { date: k, displayMonth: P } = S, R = !!(P && !m(k, P)), D = !!(x && g(k, x)), A = !!(w && y(k, w)), O = !!(a && Xe(k, a, o)), j = !!(s && Xe(k, s, o)) || D || A || // Broadcast calendar will show outside days as default
    !l && !c && R || l && c === !1 && R, F = f(k, d);
    R && b.outside.push(S), O && b.disabled.push(S), j && b.hidden.push(S), F && b.today.push(S), i && Object.keys(i).forEach((N) => {
      const Y = i?.[N];
      Y && Xe(k, Y, o) && (C[N] ? C[N].push(S) : C[N] = [S]);
    });
  }
  return (S) => {
    const k = {
      [ie.focused]: !1,
      [ie.disabled]: !1,
      [ie.hidden]: !1,
      [ie.outside]: !1,
      [ie.today]: !1
    }, P = {};
    for (const R in b) {
      const D = b[R];
      k[R] = D.some((A) => A === S);
    }
    for (const R in C)
      P[R] = C[R].some((D) => D === S);
    return {
      ...k,
      // custom modifiers should override all the previous ones
      ...P
    };
  };
}
function zw(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[ie[a]] ? o.push(t[ie[a]]) : t[Ae[a]] && o.push(t[Ae[a]]), o), [t[B.Day]]);
}
function Kw(e) {
  return {
    ...Gw,
    ...e
  };
}
function qw(e) {
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
function Xw() {
  const e = {};
  for (const t in B)
    e[B[t]] = `rdp-${B[t]}`;
  for (const t in ie)
    e[ie[t]] = `rdp-${ie[t]}`;
  for (const t in Ae)
    e[Ae[t]] = `rdp-${Ae[t]}`;
  for (const t in ke)
    e[ke[t]] = `rdp-${ke[t]}`;
  return e;
}
function Ru(e, t, n) {
  return (n ?? new Ne(t)).formatMonthYear(e);
}
const Zw = Ru;
function Qw(e, t, n) {
  return (n ?? new Ne(t)).format(e, "d");
}
function Jw(e, t = ze) {
  return t.format(e, "LLLL");
}
function ex(e, t, n) {
  return (n ?? new Ne(t)).format(e, "cccccc");
}
function tx(e, t = ze) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function nx() {
  return "";
}
function _u(e, t = ze) {
  return t.format(e, "yyyy");
}
const rx = _u, ox = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Ru,
  formatDay: Qw,
  formatMonthCaption: Zw,
  formatMonthDropdown: Jw,
  formatWeekNumber: tx,
  formatWeekNumberHeader: nx,
  formatWeekdayName: ex,
  formatYearCaption: rx,
  formatYearDropdown: _u
}, Symbol.toStringTag, { value: "Module" }));
function ax(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...ox,
    ...e
  };
}
function ya(e, t, n, r) {
  let o = (r ?? new Ne(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const sx = ya;
function ba(e, t, n) {
  return (n ?? new Ne(t)).formatMonthYear(e);
}
const ix = ba;
function Du(e, t, n, r) {
  let o = (r ?? new Ne(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function Tu(e) {
  return "Choose the Month";
}
function Iu() {
  return "";
}
const cx = "Go to the Next Month";
function Au(e, t) {
  return cx;
}
function ju(e) {
  return "Go to the Previous Month";
}
function Fu(e, t, n) {
  return (n ?? new Ne(t)).format(e, "cccc");
}
function Wu(e, t) {
  return `Week ${e}`;
}
function $u(e) {
  return "Week Number";
}
function Lu(e) {
  return "Choose the Year";
}
const lx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: ix,
  labelDay: sx,
  labelDayButton: ya,
  labelGrid: ba,
  labelGridcell: Du,
  labelMonthDropdown: Tu,
  labelNav: Iu,
  labelNext: Au,
  labelPrevious: ju,
  labelWeekNumber: Wu,
  labelWeekNumberHeader: $u,
  labelWeekday: Fu,
  labelYearDropdown: Lu
}, Symbol.toStringTag, { value: "Module" })), Te = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function ux(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...lx,
    ...e ?? {},
    labelDayButton: Te(ya, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: Te(Tu, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: Te(Au, e?.labelNext, n.labelNext),
    labelPrevious: Te(ju, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: Te(Wu, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: Te(Lu, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: Te(ba, e?.labelGrid, n.labelGrid),
    labelGridcell: Te(Du, e?.labelGridcell, n.labelGridcell),
    labelNav: Te(Iu, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: Te($u, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: Te(Fu, e?.labelWeekday, n.labelWeekday)
  };
}
function dx(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: s(e),
    end: i(e)
  }).map((m) => {
    const h = r.formatMonthDropdown(m, o), g = l(m), v = t && m < a(t) || n && m > a(n) || !1;
    return { value: g, label: h, disabled: v };
  });
}
function fx(e, t = {}, n = {}) {
  let r = { ...t?.[B.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function px(e, t, n, r) {
  const o = r ?? e.today(), a = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), s = [];
  for (let i = 0; i < 7; i++) {
    const c = e.addDays(a, i);
    s.push(c);
  }
  return s;
}
function mx(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: s, eachYearOfInterval: i, getYear: c } = r, l = a(e), d = s(t), f = i({ start: l, end: d });
  return o && f.reverse(), f.map((m) => {
    const h = n.formatYearDropdown(m, r);
    return {
      value: c(m),
      label: h,
      disabled: !1
    };
  });
}
function hx(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, o = n ?? r?.options?.weekStartsOn ?? 0, a = (i) => {
    const c = typeof i == "number" || typeof i == "string" ? new Date(i) : i;
    return new ve(c.getFullYear(), c.getMonth(), c.getDate(), 12, 0, 0, e);
  }, s = (i) => {
    const c = a(i);
    return new Date(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => a(ve.tz(e)),
    newDate: (i, c, l) => new ve(i, c, l, 12, 0, 0, e),
    startOfDay: (i) => a(i),
    startOfWeek: (i, c) => {
      const l = a(i), d = c?.weekStartsOn ?? o, f = (l.getDay() - d + 7) % 7;
      return l.setDate(l.getDate() - f), l;
    },
    startOfISOWeek: (i) => {
      const c = a(i), l = (c.getDay() - 1 + 7) % 7;
      return c.setDate(c.getDate() - l), c;
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
      const l = a(i), m = (((c?.weekStartsOn ?? o) + 6) % 7 - l.getDay() + 7) % 7;
      return l.setDate(l.getDate() + m), l;
    },
    endOfISOWeek: (i) => {
      const c = a(i), l = (7 - c.getDay()) % 7;
      return c.setDate(c.getDate() + l), c;
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
      const c = a(i.start), l = a(i.end), d = [], f = new ve(c.getFullYear(), c.getMonth(), 1, 12, 0, 0, e), m = l.getFullYear() * 12 + l.getMonth();
      for (; f.getFullYear() * 12 + f.getMonth() <= m; )
        d.push(new ve(f, e)), f.setMonth(f.getMonth() + 1, 1);
      return d;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (i, c) => {
      const l = a(i);
      return l.setDate(l.getDate() + c), l;
    },
    addWeeks: (i, c) => {
      const l = a(i);
      return l.setDate(l.getDate() + c * 7), l;
    },
    addMonths: (i, c) => {
      const l = a(i);
      return l.setMonth(l.getMonth() + c), l;
    },
    addYears: (i, c) => {
      const l = a(i);
      return l.setFullYear(l.getFullYear() + c), l;
    },
    eachYearOfInterval: (i) => {
      const c = a(i.start), l = a(i.end), d = [], f = new ve(c.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; f.getFullYear() <= l.getFullYear(); )
        d.push(new ve(f, e)), f.setFullYear(f.getFullYear() + 1, 0, 1);
      return d;
    },
    getWeek: (i, c) => {
      const l = s(i);
      return ma(l, {
        weekStartsOn: c?.weekStartsOn ?? o,
        firstWeekContainsDate: c?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (i) => {
      const c = s(i);
      return pa(c);
    },
    differenceInCalendarDays: (i, c) => {
      const l = s(i), d = s(c);
      return fa(l, d);
    },
    differenceInCalendarMonths: (i, c) => {
      const l = s(i), d = s(c);
      return yu(l, d);
    }
  };
}
const En = (e) => e instanceof HTMLElement ? e : null, Qr = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], vx = (e) => En(e.querySelector("[data-animated-month]")), Jr = (e) => En(e.querySelector("[data-animated-caption]")), eo = (e) => En(e.querySelector("[data-animated-weeks]")), gx = (e) => En(e.querySelector("[data-animated-nav]")), yx = (e) => En(e.querySelector("[data-animated-weekdays]"));
function bx(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Ce(null), i = Ce(r), c = Ce(!1);
  Zn(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const d = a.isSameMonth(r[0].date, l[0].date), f = a.isAfter(r[0].date, l[0].date), m = f ? n[ke.caption_after_enter] : n[ke.caption_before_enter], h = f ? n[ke.weeks_after_enter] : n[ke.weeks_before_enter], g = s.current, v = e.current.cloneNode(!0);
    if (v instanceof HTMLElement ? (Qr(v).forEach((b) => {
      if (!(b instanceof HTMLElement))
        return;
      const C = vx(b);
      C && b.contains(C) && b.removeChild(C);
      const S = Jr(b);
      S && S.classList.remove(m);
      const k = eo(b);
      k && k.classList.remove(h);
    }), s.current = v) : s.current = null, c.current || d || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const y = g instanceof HTMLElement ? Qr(g) : [], x = Qr(e.current);
    if (x?.every((w) => w instanceof HTMLElement) && y && y.every((w) => w instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const w = gx(e.current);
      w && (w.style.zIndex = "1"), x.forEach((b, C) => {
        const S = y[C];
        if (!S)
          return;
        b.style.position = "relative", b.style.overflow = "hidden";
        const k = Jr(b);
        k && k.classList.add(m);
        const P = eo(b);
        P && P.classList.add(h);
        const R = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), w && (w.style.zIndex = ""), k && k.classList.remove(m), P && P.classList.remove(h), b.style.position = "", b.style.overflow = "", b.contains(S) && b.removeChild(S);
        };
        S.style.pointerEvents = "none", S.style.position = "absolute", S.style.overflow = "hidden", S.setAttribute("aria-hidden", "true");
        const D = yx(S);
        D && (D.style.opacity = "0");
        const A = Jr(S);
        A && (A.classList.add(f ? n[ke.caption_before_exit] : n[ke.caption_after_exit]), A.addEventListener("animationend", R));
        const O = eo(S);
        O && O.classList.add(f ? n[ke.weeks_before_exit] : n[ke.weeks_after_exit]), b.insertBefore(S, b.firstChild);
      });
    }
  });
}
function wx(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: d, differenceInCalendarMonths: f, endOfBroadcastWeek: m, endOfISOWeek: h, endOfMonth: g, endOfWeek: v, isAfter: y, startOfBroadcastWeek: x, startOfISOWeek: w, startOfWeek: b } = r, C = c ? x(o, r) : s ? w(o) : b(o), S = c ? m(a) : s ? h(g(a)) : v(g(a)), k = t && (c ? m(t) : s ? h(t) : v(t)), P = k && y(S, k) ? k : S, R = d(P, C), D = f(a, o) + 1, A = [];
  for (let F = 0; F <= R; F++) {
    const N = l(C, F);
    A.push(N);
  }
  const j = (c ? 35 : 42) * D;
  if (i && A.length < j) {
    const F = j - A.length;
    for (let N = 0; N < F; N++) {
      const Y = l(A[A.length - 1], 1);
      A.push(Y);
    }
  }
  return A;
}
function xx(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function Cx(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function ks(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || a || s;
  const { differenceInCalendarMonths: l, addMonths: d, startOfMonth: f } = r;
  if (n && l(n, c) < i - 1) {
    const m = -1 * (i - 1);
    c = d(n, m);
  }
  return t && l(c, t) < 0 && (c = t), f(c);
}
function Sx(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: d, startOfBroadcastWeek: f, startOfISOWeek: m, startOfWeek: h } = r, g = e.reduce((v, y) => {
    const x = n.broadcastCalendar ? f(y, r) : n.ISOWeek ? m(y) : h(y), w = n.broadcastCalendar ? a(y) : n.ISOWeek ? s(i(y)) : c(i(y)), b = t.filter((P) => P >= x && P <= w), C = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && b.length < C) {
      const P = t.filter((R) => {
        const D = C - b.length;
        return R > w && R <= o(w, D);
      });
      b.push(...P);
    }
    const S = b.reduce((P, R) => {
      const D = n.ISOWeek ? l(R) : d(R), A = P.find((j) => j.weekNumber === D), O = new Mu(R, y, r);
      return A ? A.days.push(O) : P.push(new yw(D, [O])), P;
    }, []), k = new gw(y, S);
    return v.push(k), v;
  }, []);
  return n.reverseMonths ? g.reverse() : g;
}
function kx(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: c, endOfYear: l, newDate: d, today: f } = t, { fromYear: m, toYear: h, fromMonth: g, toMonth: v } = e;
  !n && g && (n = g), !n && m && (n = t.newDate(m, 0, 1)), !r && v && (r = v), !r && h && (r = d(h, 11, 31));
  const y = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : m ? n = d(m, 0, 1) : !n && y && (n = o(c(e.today ?? f(), -100))), r ? r = i(r) : h ? r = d(h, 11, 31) : !r && y && (r = l(e.today ?? f())), [
    n && a(n),
    r && a(r)
  ];
}
function Ex(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? a : 1, d = s(e);
  if (!t)
    return i(d, l);
  if (!(c(t, e) < a))
    return i(d, l);
}
function Mx(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? a ?? 1 : 1, d = s(e);
  if (!t)
    return i(d, -l);
  if (!(c(d, t) <= 0))
    return i(d, -l);
}
function Px(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function _r(e, t) {
  const [n, r] = Me(e);
  return [t === void 0 ? n : t, r];
}
function Nx(e, t) {
  const [n, r] = kx(e, t), { startOfMonth: o, endOfMonth: a } = t, s = ks(e, n, r, t), [i, c] = _r(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  _e(() => {
    const C = ks(e, n, r, t);
    c(C);
  }, [e.timeZone]);
  const { months: l, weeks: d, days: f, previousMonth: m, nextMonth: h } = vt(() => {
    const C = Cx(i, r, { numberOfMonths: e.numberOfMonths }, t), S = wx(C, e.endMonth ? a(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), k = Sx(C, S, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), P = Px(k), R = xx(k), D = Mx(i, n, e, t), A = Ex(i, r, e, t);
    return {
      months: k,
      weeks: P,
      days: R,
      previousMonth: D,
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
  ]), { disableNavigation: g, onMonthChange: v } = e, y = (C) => d.some((S) => S.days.some((k) => k.isEqualTo(C))), x = (C) => {
    if (g)
      return;
    let S = o(C);
    n && S < o(n) && (S = o(n)), r && S > o(r) && (S = o(r)), c(S), v?.(S);
  };
  return {
    months: l,
    weeks: d,
    days: f,
    navStart: n,
    navEnd: r,
    previousMonth: m,
    nextMonth: h,
    goToMonth: x,
    goToDay: (C) => {
      y(C) || x(C.date);
    }
  };
}
var Ve;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Ve || (Ve = {}));
function Es(e) {
  return !e[ie.disabled] && !e[ie.hidden] && !e[ie.outside];
}
function Ox(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    Es(i) && (i[ie.focused] && a < Ve.FocusedModifier ? (o = s, a = Ve.FocusedModifier) : r?.isEqualTo(s) && a < Ve.LastFocused ? (o = s, a = Ve.LastFocused) : n(s.date) && a < Ve.Selected ? (o = s, a = Ve.Selected) : i[ie.today] && a < Ve.Today && (o = s, a = Ve.Today));
  }
  return o || (o = e.find((s) => Es(t(s)))), o;
}
function Rx(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: c } = a, { addDays: l, addMonths: d, addWeeks: f, addYears: m, endOfBroadcastWeek: h, endOfISOWeek: g, endOfWeek: v, max: y, min: x, startOfBroadcastWeek: w, startOfISOWeek: b, startOfWeek: C } = s;
  let k = {
    day: l,
    week: f,
    month: d,
    year: m,
    startOfWeek: (P) => c ? w(P, s) : i ? b(P) : C(P),
    endOfWeek: (P) => c ? h(P) : i ? g(P) : v(P)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? k = y([r, k]) : t === "after" && o && (k = x([o, k])), k;
}
function Vu(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const c = Rx(e, t, n.date, r, o, a, s), l = !!(a.disabled && Xe(c, a.disabled, s)), d = !!(a.hidden && Xe(c, a.hidden, s)), f = c, m = new Mu(c, f, s);
  return !l && !d ? m : Vu(e, t, m, r, o, a, s, i + 1);
}
function _x(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = Me(), c = Ox(t.days, n, r || (() => !1), s), [l, d] = Me(a ? c : void 0);
  return {
    isFocusTarget: (v) => !!c?.isEqualTo(v),
    setFocused: d,
    focused: l,
    blur: () => {
      i(l), d(void 0);
    },
    moveFocus: (v, y) => {
      if (!l)
        return;
      const x = Vu(v, y, l, t.navStart, t.navEnd, e, o);
      x && (e.disableNavigation && !t.days.some((b) => b.isEqualTo(x)) || (t.goToDay(x), d(x)));
    }
  };
}
function Dx(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = _r(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t, l = (h) => i?.some((g) => c(g, h)) ?? !1, { min: d, max: f } = e;
  return {
    selected: i,
    select: (h, g, v) => {
      let y = [...i ?? []];
      if (l(h)) {
        if (i?.length === d || r && i?.length === 1)
          return;
        y = i?.filter((x) => !c(x, h));
      } else
        i?.length === f ? y = [h] : y = [...y, h];
      return o || s(y), o?.(y, h, g, v), y;
    },
    isSelected: l
  };
}
function Tx(e, t, n = 0, r = 0, o = !1, a = ze) {
  const { from: s, to: i } = t || {}, { isSameDay: c, isAfter: l, isBefore: d } = a;
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
    else if (l(e, s))
      f = { from: s, to: e };
    else if (l(e, i))
      f = { from: s, to: e };
    else
      throw new Error("Invalid range");
  if (f?.from && f?.to) {
    const m = a.differenceInCalendarDays(f.to, f.from);
    r > 0 && m > r ? f = { from: e, to: void 0 } : n > 1 && m < n && (f = { from: e, to: void 0 });
  }
  return f;
}
function Ix(e, t, n = ze) {
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
function Ms(e, t, n = ze) {
  return qe(e, t.from, !1, n) || qe(e, t.to, !1, n) || qe(t, e.from, !1, n) || qe(t, e.to, !1, n);
}
function Ax(e, t, n = ze) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? qe(e, i, !1, n) : Ou(i, n) ? i.some((c) => qe(e, c, !1, n)) : Rr(i) ? i.from && i.to ? Ms(e, { from: i.from, to: i.to }, n) : !1 : Nu(i) ? Ix(e, i.dayOfWeek, n) : ha(i) ? n.isAfter(i.before, i.after) ? Ms(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Xe(e.from, i, n) || Xe(e.to, i, n) : va(i) || ga(i) ? Xe(e.from, i, n) || Xe(e.to, i, n) : !1))
    return !0;
  const s = r.filter((i) => typeof i == "function");
  if (s.length) {
    let i = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let l = 0; l <= c; l++) {
      if (s.some((d) => d(i)))
        return !0;
      i = n.addDays(i, 1);
    }
  }
  return !1;
}
function jx(e, t) {
  const { disabled: n, excludeDisabled: r, resetOnSelect: o, selected: a, required: s, onSelect: i } = e, [c, l] = _r(a, i ? a : void 0), d = i ? a : c;
  return {
    selected: d,
    select: (h, g, v) => {
      const { min: y, max: x } = e;
      let w;
      if (h) {
        const b = d?.from, C = d?.to, S = !!b && !!C, k = !!b && !!C && t.isSameDay(b, C) && t.isSameDay(h, b);
        o && (S || !d?.from) ? !s && k ? w = void 0 : w = { from: h, to: void 0 } : w = Tx(h, d, y, x, s, t);
      }
      return r && n && w?.from && w.to && Ax({ from: w.from, to: w.to }, n, t) && (w.from = h, w.to = void 0), i || l(w), i?.(w, h, g, v), w;
    },
    isSelected: (h) => d && qe(d, h, !1, t)
  };
}
function Fx(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = _r(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t;
  return {
    selected: i,
    select: (f, m, h) => {
      let g = f;
      return !r && i && i && c(f, i) && (g = void 0), o || s(g), o?.(g, f, m, h), g;
    },
    isSelected: (f) => i ? c(i, f) : !1
  };
}
function Wx(e, t) {
  const n = Fx(e, t), r = Dx(e, t), o = jx(e, t);
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
function Oe(e, t) {
  return e instanceof ve && e.timeZone === t ? e : new ve(e, t);
}
function Rt(e, t, n) {
  return Oe(e, t);
}
function Ps(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? Rt(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? Rt(r, t) : r) : Rr(e) ? {
    ...e,
    from: e.from ? Oe(e.from, t) : e.from,
    to: e.to ? Oe(e.to, t) : e.to
  } : ha(e) ? {
    before: Rt(e.before, t),
    after: Rt(e.after, t)
  } : va(e) ? {
    after: Rt(e.after, t)
  } : ga(e) ? {
    before: Rt(e.before, t)
  } : e;
}
function to(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Ps(r, t)) : Ps(e, t));
}
function Bu(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = Oe(t.today, n)), t.month && (t.month = Oe(t.month, n)), t.defaultMonth && (t.defaultMonth = Oe(t.defaultMonth, n)), t.startMonth && (t.startMonth = Oe(t.startMonth, n)), t.endMonth && (t.endMonth = Oe(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = Oe(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((K) => Oe(K, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? Oe(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? Oe(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = to(t.disabled, n)), t.hidden !== void 0 && (t.hidden = to(t.hidden, n)), t.modifiers)) {
    const K = {};
    Object.keys(t.modifiers).forEach((ne) => {
      K[ne] = to(t.modifiers?.[ne], n);
    }), t.modifiers = K;
  }
  const { components: r, formatters: o, labels: a, dateLib: s, locale: i, classNames: c } = vt(() => {
    const K = { ...Eu, ...t.locale }, ne = t.broadcastCalendar ? 1 : t.weekStartsOn, H = t.noonSafe && t.timeZone ? hx(t.timeZone, {
      weekStartsOn: ne,
      locale: K
    }) : void 0, te = t.dateLib && H ? { ...H, ...t.dateLib } : t.dateLib ?? H, Se = new Ne({
      locale: K,
      weekStartsOn: ne,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, te);
    return {
      dateLib: Se,
      components: Kw(t.components),
      formatters: ax(t.formatters),
      labels: ux(t.labels, Se.options),
      locale: K,
      classNames: { ...Xw(), ...t.classNames }
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
  const { captionLayout: l, mode: d, navLayout: f, numberOfMonths: m = 1, onDayBlur: h, onDayClick: g, onDayFocus: v, onDayKeyDown: y, onDayMouseEnter: x, onDayMouseLeave: w, onNextClick: b, onPrevClick: C, showWeekNumber: S, styles: k } = t, { formatCaption: P, formatDay: R, formatMonthDropdown: D, formatWeekNumber: A, formatWeekNumberHeader: O, formatWeekdayName: j, formatYearDropdown: F } = o, N = Nx(t, s), { days: Y, months: V, navStart: U, navEnd: W, previousMonth: _, nextMonth: z, goToMonth: E } = N, $ = Uw(Y, t, U, W, s), { isSelected: G, select: X, selected: pe } = Wx(t, s) ?? {}, { blur: de, focused: I, isFocusTarget: Q, moveFocus: se, setFocused: ee } = _x(t, N, $, G ?? (() => !1), s), { labelDayButton: ae, labelGridcell: ce, labelGrid: De, labelMonthDropdown: xe, labelNav: kt, labelPrevious: zt, labelNext: Kt, labelWeekday: Xu, labelWeekNumber: Zu, labelWeekNumberHeader: Qu, labelYearDropdown: Ju } = a, ed = vt(() => px(s, t.ISOWeek, t.broadcastCalendar, t.today), [s, t.ISOWeek, t.broadcastCalendar, t.today]), xa = d !== void 0 || g !== void 0, Dr = me(() => {
    _ && (E(_), C?.(_));
  }, [_, E, C]), Tr = me(() => {
    z && (E(z), b?.(z));
  }, [E, z, b]), td = me((K, ne) => (H) => {
    H.preventDefault(), H.stopPropagation(), ee(K), !ne.disabled && (X?.(K.date, ne, H), g?.(K.date, ne, H));
  }, [X, g, ee]), nd = me((K, ne) => (H) => {
    ee(K), v?.(K.date, ne, H);
  }, [v, ee]), rd = me((K, ne) => (H) => {
    de(), h?.(K.date, ne, H);
  }, [de, h]), od = me((K, ne) => (H) => {
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
    y?.(K.date, ne, H);
  }, [se, y, t.dir]), ad = me((K, ne) => (H) => {
    x?.(K.date, ne, H);
  }, [x]), sd = me((K, ne) => (H) => {
    w?.(K.date, ne, H);
  }, [w]), id = me((K) => (ne) => {
    const H = Number(ne.target.value), te = s.setMonth(s.startOfMonth(K), H);
    E(te);
  }, [s, E]), cd = me((K) => (ne) => {
    const H = Number(ne.target.value), te = s.setYear(s.startOfMonth(K), H);
    E(te);
  }, [s, E]), { className: ld, style: ud } = vt(() => ({
    className: [c[B.Root], t.className].filter(Boolean).join(" "),
    style: { ...k?.[B.Root], ...t.style }
  }), [c, t.className, t.style, k]), dd = qw(t), Ca = Ce(null);
  bx(Ca, !!t.animate, {
    classNames: c,
    months: V,
    focused: I,
    dateLib: s
  });
  const fd = {
    dayPickerProps: t,
    selected: pe,
    select: X,
    isSelected: G,
    months: V,
    nextMonth: z,
    previousMonth: _,
    goToMonth: E,
    getModifiers: $,
    components: r,
    classNames: c,
    styles: k,
    labels: a,
    formatters: o
  };
  return M.createElement(
    Pu.Provider,
    { value: fd },
    M.createElement(
      r.Root,
      { rootRef: t.animate ? Ca : void 0, className: ld, style: ud, dir: t.dir, id: t.id, lang: t.lang ?? i.code, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...dd },
      M.createElement(
        r.Months,
        { className: c[B.Months], style: k?.[B.Months] },
        !t.hideNavigation && !f && M.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[B.Nav], style: k?.[B.Nav], "aria-label": kt(), onPreviousClick: Dr, onNextClick: Tr, previousMonth: _, nextMonth: z }),
        V.map((K, ne) => M.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: c[B.Month],
            style: k?.[B.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ne,
            displayIndex: ne,
            calendarMonth: K
          },
          f === "around" && !t.hideNavigation && ne === 0 && M.createElement(
            r.PreviousMonthButton,
            { type: "button", className: c[B.PreviousMonthButton], tabIndex: _ ? void 0 : -1, "aria-disabled": _ ? void 0 : !0, "aria-label": zt(_), onClick: Dr, "data-animated-button": t.animate ? "true" : void 0 },
            M.createElement(r.Chevron, { disabled: _ ? void 0 : !0, className: c[B.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          M.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: c[B.MonthCaption], style: k?.[B.MonthCaption], calendarMonth: K, displayIndex: ne }, l?.startsWith("dropdown") ? M.createElement(
            r.DropdownNav,
            { className: c[B.Dropdowns], style: k?.[B.Dropdowns] },
            (() => {
              const H = l === "dropdown" || l === "dropdown-months" ? M.createElement(r.MonthsDropdown, { key: "month", className: c[B.MonthsDropdown], "aria-label": xe(), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: id(K.date), options: dx(K.date, U, W, o, s), style: k?.[B.Dropdown], value: s.getMonth(K.date) }) : M.createElement("span", { key: "month" }, D(K.date, s)), te = l === "dropdown" || l === "dropdown-years" ? M.createElement(r.YearsDropdown, { key: "year", className: c[B.YearsDropdown], "aria-label": Ju(s.options), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: cd(K.date), options: mx(U, W, o, s, !!t.reverseYears), style: k?.[B.Dropdown], value: s.getYear(K.date) }) : M.createElement("span", { key: "year" }, F(K.date, s));
              return s.getMonthYearOrder() === "year-first" ? [te, H] : [H, te];
            })(),
            M.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            } }, P(K.date, s.options, s))
          ) : M.createElement(r.CaptionLabel, { className: c[B.CaptionLabel], role: "status", "aria-live": "polite" }, P(K.date, s.options, s))),
          f === "around" && !t.hideNavigation && ne === m - 1 && M.createElement(
            r.NextMonthButton,
            { type: "button", className: c[B.NextMonthButton], tabIndex: z ? void 0 : -1, "aria-disabled": z ? void 0 : !0, "aria-label": Kt(z), onClick: Tr, "data-animated-button": t.animate ? "true" : void 0 },
            M.createElement(r.Chevron, { disabled: z ? void 0 : !0, className: c[B.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ne === m - 1 && f === "after" && !t.hideNavigation && M.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[B.Nav], style: k?.[B.Nav], "aria-label": kt(), onPreviousClick: Dr, onNextClick: Tr, previousMonth: _, nextMonth: z }),
          M.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": De(K.date, s.options, s) || void 0, className: c[B.MonthGrid], style: k?.[B.MonthGrid] },
            !t.hideWeekdays && M.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: c[B.Weekdays], style: k?.[B.Weekdays] },
              S && M.createElement(r.WeekNumberHeader, { "aria-label": Qu(s.options), className: c[B.WeekNumberHeader], style: k?.[B.WeekNumberHeader], scope: "col" }, O()),
              ed.map((H) => M.createElement(r.Weekday, { "aria-label": Xu(H, s.options, s), className: c[B.Weekday], key: String(H), style: k?.[B.Weekday], scope: "col" }, j(H, s.options, s)))
            ),
            M.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: c[B.Weeks], style: k?.[B.Weeks] }, K.weeks.map((H) => M.createElement(
              r.Week,
              { className: c[B.Week], key: H.weekNumber, style: k?.[B.Week], week: H },
              S && M.createElement(r.WeekNumber, { week: H, style: k?.[B.WeekNumber], "aria-label": Zu(H.weekNumber, {
                locale: i
              }), className: c[B.WeekNumber], scope: "row", role: "rowheader" }, A(H.weekNumber, s)),
              H.days.map((te) => {
                const { date: Se } = te, J = $(te);
                if (J[ie.focused] = !J.hidden && !!I?.isEqualTo(te), J[Ae.selected] = G?.(Se) || J.selected, Rr(pe)) {
                  const { from: Ir, to: Ar } = pe;
                  J[Ae.range_start] = !!(Ir && Ar && s.isSameDay(Se, Ir)), J[Ae.range_end] = !!(Ir && Ar && s.isSameDay(Se, Ar)), J[Ae.range_middle] = qe(pe, Se, !0, s);
                }
                const pd = fx(J, k, t.modifiersStyles), md = zw(J, c, t.modifiersClassNames), hd = !xa && !J.hidden ? ce(Se, J, s.options, s) : void 0;
                return M.createElement(r.Day, { key: `${te.isoDate}_${te.displayMonthId}`, day: te, modifiers: J, className: md.join(" "), style: pd, role: "gridcell", "aria-selected": J.selected || void 0, "aria-label": hd, "data-day": te.isoDate, "data-month": te.outside ? te.dateMonthId : void 0, "data-selected": J.selected || void 0, "data-disabled": J.disabled || void 0, "data-hidden": J.hidden || void 0, "data-outside": te.outside || void 0, "data-focused": J.focused || void 0, "data-today": J.today || void 0 }, !J.hidden && xa ? M.createElement(r.DayButton, { className: c[B.DayButton], style: k?.[B.DayButton], type: "button", day: te, modifiers: J, disabled: !J.focused && J.disabled || void 0, "aria-disabled": J.focused && J.disabled || void 0, tabIndex: Q(te) ? 0 : -1, "aria-label": ae(Se, J, s.options, s), onClick: td(te, J), onBlur: rd(te, J), onFocus: nd(te, J), onKeyDown: od(te, J), onMouseEnter: ad(te, J), onMouseLeave: sd(te, J) }, R(Se, s.options, s)) : !J.hidden && R(te.date, s.options, s));
              })
            )))
          )
        ))
      ),
      t.footer && M.createElement(r.Footer, { className: c[B.Footer], style: k?.[B.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function Ns(e, t, n, r = e !== void 0) {
  const [o, a] = Me(t), s = r ? e : o, i = me(
    (c) => {
      r || a(c), n?.(c);
    },
    [r, n]
  );
  return [s, i];
}
function $x({
  value: e,
  setSelected: t,
  setOpen: n,
  required: r,
  ...o
}) {
  return /* @__PURE__ */ p.jsx(
    Bu,
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
function Lx({
  draftRange: e,
  setDraftRange: t,
  setSelected: n,
  setOpen: r,
  required: o,
  disabled: a,
  ...s
}) {
  return /* @__PURE__ */ p.jsx(
    Bu,
    {
      mode: "range",
      className: "rdp",
      selected: e,
      onSelect: (i, c) => {
        const l = c, d = e?.from;
        if (e?.to || !d) {
          t({ from: l, to: void 0 });
          return;
        }
        if (l.getTime() < d.getTime()) {
          t({ from: l, to: void 0 });
          return;
        }
        const m = { from: d, to: l };
        t(m), n(m), r(!1);
      },
      required: o,
      excludeDisabled: !!a,
      ...s
    }
  );
}
function nC(e) {
  const {
    mode: t = "single",
    captionLayout: n = "label",
    placeholder: r,
    disabled: o,
    required: a,
    disabledPicker: s,
    clearable: i = !1,
    clearLabel: c = "Clear date"
  } = e, [l, d] = M.useState(!1), f = t === "range", m = Object.prototype.hasOwnProperty.call(e, "value"), h = e, g = e, [v, y] = f ? Ns(
    h.value,
    h.defaultValue,
    h.onChange,
    m
  ) : Ns(
    g.value,
    g.defaultValue,
    g.onChange,
    m
  );
  let x = r;
  x || (t === "single" ? x = "dd/mm/yyyy" : x = "dd/mm/yyyy - dd/mm/yyyy");
  const w = f ? v : void 0, b = f ? void 0 : v, [C, S] = M.useState(w);
  M.useEffect(() => {
    f && !l && S(w);
  }, [f, l, w]);
  const k = f ? w?.from && w?.to ? `${nt(w.from, "dd/MM/yyyy")} – ${nt(w.to, "dd/MM/yyyy")}` : x : b ? nt(b, "dd/MM/yyyy") : x;
  let P;
  if (f) {
    const D = {
      navLayout: "around",
      disabled: o,
      setOpen: d,
      setSelected: y,
      required: a,
      captionLayout: n,
      defaultMonth: w?.from ? new Date(w.from) : Date.now()
    };
    P = /* @__PURE__ */ p.jsx(
      Lx,
      {
        value: w,
        draftRange: C,
        setDraftRange: S,
        ...D
      }
    );
  } else {
    const D = {
      navLayout: "around",
      disabled: o,
      setOpen: d,
      setSelected: y,
      required: a,
      captionLayout: n,
      defaultMonth: b ? new Date(b) : Date.now()
    };
    P = /* @__PURE__ */ p.jsx($x, { value: b, ...D });
  }
  const R = f ? !!(w?.from || w?.to) : !!b;
  return /* @__PURE__ */ p.jsxs(ua, { open: l, onOpenChange: d, children: [
    /* @__PURE__ */ p.jsx(Or, { children: /* @__PURE__ */ p.jsxs("div", { className: "ui-date-control", children: [
      /* @__PURE__ */ p.jsxs("div", { className: Z("ui-date-trigger", { disabled: s }), children: [
        /* @__PURE__ */ p.jsx("input", { name: "date-input", readOnly: !0, className: "ui-date-input", value: k }),
        /* @__PURE__ */ p.jsx("div", { className: "icon", children: /* @__PURE__ */ p.jsx(ct, { name: "calendar", strokeWidth: 1.25, size: 17 }) })
      ] }),
      i && R ? /* @__PURE__ */ p.jsx(
        gt,
        {
          className: "date-clear-button",
          ariaLabel: c,
          quite: !0,
          icon: "x",
          iconOnly: !0,
          size: "S",
          onClick: (D) => {
            D?.preventDefault(), D?.stopPropagation(), f && S(void 0), y(void 0), d(!1);
          },
          children: c
        }
      ) : null
    ] }) }),
    /* @__PURE__ */ p.jsx(da, { className: "ui-date-popover", align: "start", children: P })
  ] });
}
function rC({ className: e, currentPage: t, totalPages: n, onPageChange: r }) {
  const o = (a) => {
    a >= 1 && a <= n && r(a);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: `pagination ${e || ""}`, children: [
    t === 1 ? null : /* @__PURE__ */ p.jsx(
      gt,
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
      gt,
      {
        icon: "chevronRight",
        quite: !0,
        onClick: () => o(t + 1)
      }
    )
  ] });
}
function Yu() {
  const [e, t] = Me(!1), n = me((o) => {
    t(o);
  }, []), r = me(() => {
    t((o) => o && !1);
  }, []);
  return {
    suppressInitialHighlight: e,
    handleOpenChange: n,
    releaseInitialHighlight: r
  };
}
const Os = M.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ p.jsxs(xl, { className: Z("select-item", t), ...n, ref: r, children: [
  /* @__PURE__ */ p.jsx(Cl, { children: e }),
  /* @__PURE__ */ p.jsx(kl, { className: "select-item-indicator", children: /* @__PURE__ */ p.jsx(ct, { name: "check", size: "S" }) })
] }));
function oC(e) {
  const {
    items: t,
    label: n,
    placeholder: r = "Select...",
    className: o = "",
    value: a,
    defaultValue: s,
    position: i,
    disabled: c,
    clearable: l = !1,
    clearLabel: d = "Clear selection",
    onOpenChange: f,
    onSelect: m
  } = e, h = "", g = M.useId(), [v, y] = M.useState(s), x = Mr(), { suppressInitialHighlight: w, handleOpenChange: b, releaseInitialHighlight: C } = Yu(), S = Object.prototype.hasOwnProperty.call(e, "value"), k = S ? a ?? h : v ?? h, P = vt(() => {
    const O = [];
    let j = [];
    return Array.isArray(t) ? Array.isArray(t[0]) ? j = t : j = [t] : Object.entries(t).forEach(([F, N]) => {
      O.push(F), j.push(N);
    }), { menuItems: j, groups: O };
  }, [t]), R = (O) => {
    S || y(O), m?.(O === h ? void 0 : O);
  }, D = (O) => {
    O.preventDefault(), O.stopPropagation(), S || y(h), m?.(void 0);
  }, A = () => {
    const O = P.menuItems.map((j, F) => P.groups[F] ? /* @__PURE__ */ p.jsxs(M.Fragment, { children: [
      /* @__PURE__ */ p.jsxs(gl, { children: [
        /* @__PURE__ */ p.jsx(bl, { className: "select-label", children: P.groups[F] }),
        j.map((N) => /* @__PURE__ */ p.jsx(
          Os,
          {
            value: N.value,
            disabled: N.disabled,
            children: /* @__PURE__ */ p.jsxs("div", { className: "item-content", children: [
              N.icon && /* @__PURE__ */ p.jsx(ct, { name: N.icon, size: "XS" }),
              /* @__PURE__ */ p.jsx("span", { children: N.key })
            ] })
          },
          N.value
        ))
      ] }),
      F < P.groups.length - 1 && /* @__PURE__ */ p.jsx(go, { className: "select-separator" })
    ] }, `group-${P.groups[F]}`) : /* @__PURE__ */ p.jsxs(M.Fragment, { children: [
      j.map((N) => /* @__PURE__ */ p.jsx(Os, { value: N.value, disabled: N.disabled, children: /* @__PURE__ */ p.jsxs("div", { className: "item-content", children: [
        N.icon && /* @__PURE__ */ p.jsx(ct, { name: N.icon, size: "XS" }),
        /* @__PURE__ */ p.jsx("span", { children: N.key })
      ] }) }, N.value)),
      F < P.menuItems.length - 1 && /* @__PURE__ */ p.jsx(go, { className: "select-separator" })
    ] }, `group-${F}`));
    return /* @__PURE__ */ p.jsx(p.Fragment, { children: O });
  };
  return /* @__PURE__ */ p.jsxs("div", { className: Z("ui-select", { [o]: o }), children: [
    n && /* @__PURE__ */ p.jsx(Dc, { htmlFor: g, asChild: !0, children: /* @__PURE__ */ p.jsx("div", { className: "select-field-label", children: n }) }),
    /* @__PURE__ */ p.jsxs(
      rl,
      {
        value: k,
        disabled: c,
        onOpenChange: (O) => {
          b(O), f?.(O);
        },
        onValueChange: R,
        children: [
          /* @__PURE__ */ p.jsxs("div", { className: "select-control", children: [
            /* @__PURE__ */ p.jsxs(al, { id: g, className: "select-trigger", children: [
              /* @__PURE__ */ p.jsx(il, { placeholder: r }),
              /* @__PURE__ */ p.jsx(cl, { className: "select-icon", children: /* @__PURE__ */ p.jsx(Op, {}) })
            ] }),
            l && k ? /* @__PURE__ */ p.jsx(
              gt,
              {
                className: "select-clear-button",
                ariaLabel: d,
                quite: !0,
                icon: "x",
                iconOnly: !0,
                size: "S",
                onClick: D
              }
            ) : null
          ] }),
          /* @__PURE__ */ p.jsx(ul, { container: x, children: /* @__PURE__ */ p.jsx(
            dl,
            {
              side: i,
              className: Z("select-content", {
                "suppress-initial-highlight": w
              }),
              position: "popper",
              sideOffset: 4,
              onPointerMove: C,
              onKeyDown: C,
              children: P.menuItems.length > 0 ? A() : null
            }
          ) })
        ]
      }
    )
  ] });
}
function aC({ className: e = "", width: t = "100%" }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: Z("ui-separator", { [e]: e }),
      style: { width: t }
    }
  );
}
function sC({ label: e, className: t = "", size: n = "M", onChange: r, value: o }) {
  const [a, s] = M.useState(o ?? !1);
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
          Tl,
          {
            className: "ui-switch-root",
            id: "ui-switch-html",
            checked: a,
            onCheckedChange: i,
            children: /* @__PURE__ */ p.jsx(Al, { className: "ui-switch-thumb" })
          }
        ),
        /* @__PURE__ */ p.jsx("label", { className: "ui-switch-label", htmlFor: "ui-switch-html", children: e })
      ]
    }
  );
}
function iC({
  data: e,
  columns: t,
  className: n,
  multiSelect: r,
  allowSelection: o = !1,
  render: a,
  onSelect: s
}) {
  const [i, c] = M.useState(/* @__PURE__ */ new Set());
  _e(() => {
    c(/* @__PURE__ */ new Set());
  }, [e.length]);
  const l = (d, f) => {
    if (f || !o) return;
    const m = i;
    let h = new Set(m);
    r ? h.has(d) ? h.delete(d) : h.add(d) : h = m.has(d) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([d]), c(h), s && s(Array.from(h).map((g) => e[g]));
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
            onClick: () => l(f, d.disabled),
            children: t.map((m, h) => /* @__PURE__ */ p.jsx("td", { children: /* @__PURE__ */ p.jsx("div", { children: a ? a(m.key, d) : String(d[m.key]) }) }, h))
          },
          f
        )) })
      ] })
    }
  );
}
function cC({ icon: e, label: t, color: n, size: r = "M", className: o }) {
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
          ct,
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
function lC({ text: e, size: t = "M", children: n, className: r = "" }) {
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
const Vx = M.forwardRef(
  ({ children: e, className: t = "", ...n }, r) => {
    if (!e)
      return console.warn("Card component should have children"), null;
    Array.isArray(e) || (console.warn("Card component should have multiple children"), e = [e]);
    const o = e.find(
      (s) => M.isValidElement(s) && s.type.displayName === "CardHeader"
    ), a = e.find(
      (s) => M.isValidElement(s) && s.type.displayName === "CardContent"
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
function Hu({ children: e }) {
  return /* @__PURE__ */ p.jsx("div", { className: "ui-card-header", children: e });
}
Hu.displayName = "CardHeader";
function Gu({ children: e }) {
  return /* @__PURE__ */ p.jsx("div", { className: "ui-card-content", children: e });
}
Gu.displayName = "CardContent";
const uC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Card: Vx,
  Content: Gu,
  Header: Hu
}, Symbol.toStringTag, { value: "Module" })), Uu = M.createContext(null);
function wa() {
  const e = M.useContext(Uu);
  if (!e)
    throw new Error("Dropdown components must be used inside <Dropdown>");
  return e;
}
function Bx({ onSelect: e, children: t }) {
  const n = Mr(), [r, o] = M.useState(null), [a, s] = M.useState(null), { suppressInitialHighlight: i, handleOpenChange: c, releaseInitialHighlight: l } = Yu(), d = M.useMemo(
    () => ({
      registerTrigger: o,
      registerContent: s,
      onSelect: e,
      suppressInitialHighlight: i,
      releaseInitialHighlight: l
    }),
    [e, l, i]
  );
  return /* @__PURE__ */ p.jsx(Uu.Provider, { value: d, children: /* @__PURE__ */ p.jsxs(Sv, { onOpenChange: c, children: [
    r,
    a && /* @__PURE__ */ p.jsx(Ev, { container: n, children: a }),
    t
  ] }) });
}
const zu = u.forwardRef(({ children: e }, t) => {
  const { registerTrigger: n } = wa(), r = e;
  return u.useEffect(() => {
    const o = /* @__PURE__ */ p.jsx(kv, { asChild: !0, children: u.cloneElement(r, {
      ...r.props,
      className: [r.props.className, "dropdown-trigger"].filter(Boolean).join(" ")
    }) });
    n(o);
  }, [e, t, n]), null;
});
zu.displayName = "DropdownTrigger";
function Yx({ onSelect: e, children: t }) {
  const { registerContent: n, suppressInitialHighlight: r, releaseInitialHighlight: o } = wa();
  return u.useEffect(() => {
    n(
      /* @__PURE__ */ p.jsx(
        Mv,
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
const Ku = M.forwardRef(
  ({ value: e, onSelect: t, ...n }, r) => {
    const { onSelect: o } = wa();
    if (!o)
      throw new Error("DropdownItem must be used within a Dropdown with onSelect prop");
    const a = me(
      (s) => {
        t?.(s), o?.(e);
      },
      [t, o, e]
    );
    return /* @__PURE__ */ p.jsx(
      Pv,
      {
        ref: r,
        className: ["dropdown-item", n.className].filter(Boolean).join(" "),
        onSelect: a,
        ...n
      }
    );
  }
);
Ku.displayName = "DropdownItem";
const qu = M.forwardRef((e, t) => /* @__PURE__ */ p.jsx(
  Nv,
  {
    ref: t,
    className: ["dropdown-separator", e.className].filter(Boolean).join(" "),
    ...e
  }
));
qu.displayName = "DropdownSeparator";
const dC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Content: Yx,
  Dropdown: Bx,
  Item: Ku,
  Separator: qu,
  Trigger: zu
}, Symbol.toStringTag, { value: "Module" })), fC = M.forwardRef(
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
), pC = ({
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
function Hx(e, t) {
  return du[e]?.value?.[t] || e;
}
const mC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getColorFromUITheme: Hx
}, Symbol.toStringTag, { value: "Module" }));
export {
  Xx as Avatar,
  gt as Button,
  uC as Card,
  Gu as CardContent,
  Hu as CardHeader,
  Vx as CardRoot,
  Zx as Checkbox,
  eC as ColorPicker,
  mC as ColorUtils,
  tC as Container,
  nC as DatePicker,
  Kx as Dialog,
  ou as DialogContainer,
  gb as DialogRoot,
  dC as Dropdown,
  Yx as DropdownContent,
  Ku as DropdownItem,
  Bx as DropdownRoot,
  qu as DropdownSeparator,
  zu as DropdownTrigger,
  pC as Grid,
  fC as GridItem,
  ct as Icon,
  mb as Loader,
  rC as Pagination,
  Qx as Popover,
  da as PopoverContent,
  ua as PopoverRoot,
  Or as PopoverTrigger,
  Jx as Radio,
  Fb as RadioGroup,
  oC as Select,
  aC as Separator,
  sC as Switch,
  iC as Table,
  Wb as Tabs,
  cC as Tag,
  lC as Text,
  Lb as TextField,
  qx as UIProvider,
  ia as useDialogContext
};
