import Te from "react";
var Oe = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function ir() {
  if (Re)
    return k;
  Re = 1;
  var R = Te, S = Symbol.for("react.element"), U = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, F = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(E, l, T) {
    var d, g = {}, _ = null, I = null;
    T !== void 0 && (_ = "" + T), l.key !== void 0 && (_ = "" + l.key), l.ref !== void 0 && (I = l.ref);
    for (d in l)
      m.call(l, d) && !A.hasOwnProperty(d) && (g[d] = l[d]);
    if (E && E.defaultProps)
      for (d in l = E.defaultProps, l)
        g[d] === void 0 && (g[d] = l[d]);
    return { $$typeof: S, type: E, key: _, ref: I, props: g, _owner: F.current };
  }
  return k.Fragment = U, k.jsx = w, k.jsxs = w, k;
}
var D = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function ur() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && function() {
    var R = Te, S = Symbol.for("react.element"), U = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), E = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), H = Symbol.iterator, Ce = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = H && e[H] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var O = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Se("error", e, t);
      }
    }
    function Se(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var we = !1, xe = !1, je = !1, ke = !1, De = !1, X;
    X = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === A || De || e === F || e === T || e === d || ke || e === I || we || xe || je || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === g || e.$$typeof === w || e.$$typeof === E || e.$$typeof === l || e.$$typeof === X || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function Z(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case U:
          return "Portal";
        case A:
          return "Profiler";
        case F:
          return "StrictMode";
        case T:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return Z(r) + ".Consumer";
          case w:
            var t = e;
            return Z(t._context) + ".Provider";
          case l:
            return Ae(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case _: {
            var i = e, u = i._payload, o = i._init;
            try {
              return b(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var y = Object.assign, x = 0, Q, ee, re, te, ne, ae, oe;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function Ie() {
      {
        if (x === 0) {
          Q = console.log, ee = console.info, re = console.warn, te = console.error, ne = console.group, ae = console.groupCollapsed, oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        x++;
      }
    }
    function $e() {
      {
        if (x--, x === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: y({}, e, {
              value: Q
            }),
            info: y({}, e, {
              value: ee
            }),
            warn: y({}, e, {
              value: re
            }),
            error: y({}, e, {
              value: te
            }),
            group: y({}, e, {
              value: ne
            }),
            groupCollapsed: y({}, e, {
              value: ae
            }),
            groupEnd: y({}, e, {
              value: oe
            })
          });
        }
        x < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = O.ReactCurrentDispatcher, M;
    function $(e, r, t) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            M = n && n[1] || "";
          }
        return `
` + M + e;
      }
    }
    var B = !1, W;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      W = new We();
    }
    function ue(e, r) {
      if (!e || B)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = V.current, V.current = null, Ie();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (h) {
              n = h;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, f = v.length - 1; s >= 1 && f >= 0 && a[s] !== v[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== v[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== v[f]) {
                    var p = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, p), p;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        B = !1, V.current = u, $e(), Error.prepareStackTrace = i;
      }
      var P = e ? e.displayName || e.name : "", ye = P ? $(P) : "";
      return typeof e == "function" && W.set(e, ye), ye;
    }
    function Ye(e, r, t) {
      return ue(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ue(e, Ne(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case T:
          return $("Suspense");
        case d:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ye(e.render);
          case g:
            return Y(e.type, r, t);
          case _: {
            var n = e, i = n._payload, u = n._init;
            try {
              return Y(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, se = {}, fe = O.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Le(e, r, t, n, i) {
      {
        var u = Function.call.bind(N);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (L(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), L(null)), a instanceof Error && !(a.message in se) && (se[a.message] = !0, L(i), c("Failed %s type: %s", t, a.message), L(null));
          }
      }
    }
    var Ue = Array.isArray;
    function q(e) {
      return Ue(e);
    }
    function Ve(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Me(e) {
      try {
        return le(e), !1;
      } catch {
        return !0;
      }
    }
    function le(e) {
      return "" + e;
    }
    function ce(e) {
      if (Me(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(e)), le(e);
    }
    var j = O.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ve, de, J;
    J = {};
    function qe(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      if (typeof e.ref == "string" && j.current && r && j.current.stateNode !== r) {
        var t = b(j.current.type);
        J[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(j.current.type), e.ref), J[t] = !0);
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          ve || (ve = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          de || (de = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var He = function(e, r, t, n, i, u, o) {
      var a = {
        $$typeof: S,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Xe(e, r, t, n, i) {
      {
        var u, o = {}, a = null, v = null;
        t !== void 0 && (ce(t), a = "" + t), Je(r) && (ce(r.key), a = "" + r.key), qe(r) && (v = r.ref, Ge(r, i));
        for (u in r)
          N.call(r, u) && !Be.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || v) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ze(o, f), v && Ke(o, f);
        }
        return He(e, a, v, i, n, j.current, o);
      }
    }
    var G = O.ReactCurrentOwner, pe = O.ReactDebugCurrentFrame;
    function C(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === S;
    }
    function ge() {
      {
        if (G.current) {
          var e = b(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ze(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function Qe(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function he(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = Qe(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + b(e._owner.type) + "."), C(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), C(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && he(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Pe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              K(o.value) && he(o.value, r);
        }
      }
    }
    function er(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          Le(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var i = b(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            C(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), C(null);
            break;
          }
        }
        e.ref !== null && (C(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), C(null));
      }
    }
    function _e(e, r, t, n, i, u) {
      {
        var o = Fe(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = Ze(i);
          v ? a += v : a += ge();
          var s;
          e === null ? s = "null" : q(e) ? s = "array" : e !== void 0 && e.$$typeof === S ? (s = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = Xe(e, r, t, i, u);
        if (f == null)
          return f;
        if (o) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (q(p)) {
                for (var P = 0; P < p.length; P++)
                  Ee(p[P], e);
                Object.freeze && Object.freeze(p);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(p, e);
        }
        return e === m ? rr(f) : er(f), f;
      }
    }
    function tr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function nr(e, r, t) {
      return _e(e, r, t, !1);
    }
    var ar = nr, or = tr;
    D.Fragment = m, D.jsx = ar, D.jsxs = or;
  }()), D;
}
(function(R) {
  process.env.NODE_ENV === "production" ? R.exports = ir() : R.exports = ur();
})(Oe);
const sr = Oe.exports.jsx, lr = () => /* @__PURE__ */ sr("button", {
  children: "BUTTON :D"
}), cr = () => {
};
export {
  lr as Button,
  cr as Fun
};
//# sourceMappingURL=index.js.map
