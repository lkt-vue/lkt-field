var ce = Object.defineProperty;
var ve = (l, o, y) => o in l ? ce(l, o, { enumerable: !0, configurable: !0, writable: !0, value: y }) : l[o] = y;
var C = (l, o, y) => (ve(l, typeof o != "symbol" ? o + "" : o, y), y);
import { defineComponent as me, useSlots as ye, ref as S, computed as u, watch as T, openBlock as i, createElementBlock as s, normalizeClass as z, unref as v, renderSlot as N, createCommentVNode as n, Fragment as O, createBlock as q, resolveDynamicComponent as G, withDirectives as J, createElementVNode as P, vModelDynamic as Q, toDisplayString as W, nextTick as pe } from "vue";
import { generateRandomString as X } from "lkt-string-tools";
import { createLktEvent as k } from "lkt-events";
class m {
}
C(m, "customValueSlots", {}), C(m, "customEditSlots", {});
const ke = ["data-show-ui", "data-labeled"], he = ["for", "innerHTML"], Se = {
  key: 2,
  class: "lkt-field-text__main"
}, ge = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], we = {
  key: 3,
  class: "lkt-field-text__main"
}, be = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], xe = {
  key: 4,
  class: "lkt-field__state"
}, _e = ["title"], Me = ["title"], Ve = ["title"], Be = ["title"], Ee = ["title"], Ce = ["title"], Te = ["title", "href"], Ne = ["title", "href"], Pe = ["innerHTML", "title"], Fe = {
  key: 3,
  class: "lkt-field__state"
}, $e = ["title"], Le = { name: "LktFieldText", inheritAttrs: !1 }, Ie = /* @__PURE__ */ me({
  ...Le,
  props: {
    modelValue: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: X(16) },
    valid: { type: Boolean, default: !1 },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { type: Number, default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { type: String, default: "" },
    mandatoryMessage: { type: String, default: "" },
    infoMessage: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
    showPasswordMessage: { type: String, default: "" },
    switchEditionMessage: { type: String, default: "" },
    min: { type: [Number, String, void 0], default: void 0 },
    max: { type: [Number, String, void 0], default: void 0 },
    step: { type: [Number, String], default: 1 },
    isTel: { type: Boolean, default: !1 },
    isEmail: { type: Boolean, default: !1 },
    isPassword: { type: Boolean, default: !1 },
    isSearch: { type: Boolean, default: !1 },
    isNumber: { type: Boolean, default: !1 },
    enableAutoNumberFix: { type: Boolean, default: !0 },
    valueSlot: { type: String, default: "" },
    editSlot: { type: String, default: "" }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error"],
  setup(l, { expose: o, emit: y }) {
    const c = y, g = ye(), e = l, r = X(16), _ = S(null), F = S(e.modelValue), a = S(e.modelValue), M = S(!1), B = S(!1), h = S(!e.readMode), Y = u(() => typeof e.valid == "function" ? e.valid() : e.valid), Z = u(() => a.value !== F.value), $ = u(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), L = u(() => {
      let t = 0;
      return e.reset && ++t, e.infoMessage && ++t, e.isPassword && e.showPassword && ++t, t;
    }), ee = u(() => e.resetMessage !== "" ? e.resetMessage : ""), te = u(() => M.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), I = u(() => e.autocomplete === !0 ? "on" : "off"), K = u(() => a.value !== ""), V = u(() => e.isPassword && M.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), le = u(() => {
      const t = ["lkt-field", "lkt-field-text"];
      return e.palette && t.push(`lkt-field--${e.palette}`), V && t.push(`is-${V.value}`), Z.value && t.push("is-changed"), e.disabled && t.push("is-disabled"), B.value && t.push("has-focus"), L.value > 0 && t.push("has-icons", `has-icons-${L.value}`), t.push(Y.value ? "is-valid" : "is-error"), t.push(e.modelValue ? "is-filled" : "is-empty"), t.join(" ");
    }), p = u(() => typeof a.value == "number" ? a.value.toString() : a.value), w = u(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), b = u(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), A = () => {
      pe(() => {
        _.value && _.value.focus();
      });
    };
    T(() => e.readMode, (t) => h.value = !t), T(() => e.modelValue, (t) => {
      if (e.isNumber)
        return oe(t);
      a.value = t;
    }), T(a, (t) => c("update:modelValue", t));
    const E = () => a.value = F.value, ae = () => a.value, D = (t) => c("keyup", t, k(r, { value: a.value })), H = (t) => c("keydown", t, k(r, { value: a.value })), R = (t) => (B.value = !0) && c("focus", t, k(r, { value: a.value })), U = (t) => (B.value = !1) && c("blur", t, k(r, { value: a.value })), x = (t) => c("click", t, k(r, { value: a.value })), ie = (t) => c("click-info", t, k(r, { value: a.value })), se = (t) => c("click-error", t, k(r, { value: a.value })), ue = (t) => M.value = !M.value, j = (t) => {
      h.value = !h.value, h.value && A();
    }, oe = (t) => {
      if (!e.enableAutoNumberFix)
        return !1;
      let f = Number(t), d = !1;
      return w.value !== !1 && f < w.value && (f = w.value, d = !0), b.value !== !1 && f > b.value && (f = b.value, d = !0), d === !0 ? (a.value = f, !0) : !1;
    };
    o({
      Identifier: r,
      reset: E,
      focus: A,
      value: ae,
      isMandatory: () => e.mandatory
    }), E();
    const ne = u(() => e.valueSlot !== "" && typeof m.customValueSlots[e.valueSlot] < "u"), re = u(() => m.customValueSlots[e.valueSlot]), de = u(() => e.editSlot !== "" && typeof m.customEditSlots[e.editSlot] < "u"), fe = u(() => m.customEditSlots[e.editSlot]);
    return (t, f) => (i(), s("div", {
      class: z(le.value),
      "data-show-ui": $.value,
      "data-labeled": !v(g).label
    }, [
      v(g).label ? N(t.$slots, "label", { key: 0 }) : n("", !0),
      v(g).label ? n("", !0) : (i(), s("label", {
        key: 1,
        for: v(r),
        innerHTML: l.label
      }, null, 8, he)),
      h.value ? (i(), s(O, { key: 2 }, [
        v(g).edit ? (i(), s("div", {
          key: 0,
          onClick: x
        }, [
          N(t.$slots, "edit", {
            value: a.value,
            title: p.value
          })
        ])) : de.value ? (i(), s("div", {
          key: 1,
          onClick: x
        }, [
          (i(), q(G(fe.value), {
            value: a.value,
            title: p.value
          }, null, 8, ["value", "title"]))
        ])) : l.placeholder ? (i(), s("div", Se, [
          J(P("input", {
            "onUpdate:modelValue": f[0] || (f[0] = (d) => a.value = d),
            ref: (d) => _.value = d,
            value: a.value,
            type: V.value,
            name: l.name,
            id: v(r),
            disabled: l.disabled,
            readonly: l.readonly,
            placeholder: l.placeholder,
            tabindex: l.tabindex,
            autocomplete: I.value,
            min: w.value,
            max: b.value,
            step: l.step,
            onKeyup: D,
            onKeydown: H,
            onFocus: R,
            onBlur: U,
            onClick: x
          }, null, 40, ge), [
            [Q, a.value]
          ])
        ])) : (i(), s("div", we, [
          J(P("input", {
            "onUpdate:modelValue": f[1] || (f[1] = (d) => a.value = d),
            ref: (d) => _.value = d,
            value: a.value,
            type: V.value,
            name: l.name,
            id: v(r),
            disabled: l.disabled,
            readonly: l.readonly,
            tabindex: l.tabindex,
            autocomplete: I.value,
            min: w.value,
            max: b.value,
            step: l.step,
            onKeyup: D,
            onKeydown: H,
            onFocus: R,
            onBlur: U,
            onClick: x
          }, null, 40, be), [
            [Q, a.value]
          ])
        ])),
        $.value ? (i(), s("div", xe, [
          e.errorMessage ? (i(), s("i", {
            key: 0,
            class: "lkt-field__error-icon",
            title: e.errorMessage,
            onClick: se
          }, null, 8, _e)) : n("", !0),
          e.infoMessage ? (i(), s("i", {
            key: 1,
            class: "lkt-field__info-icon",
            title: e.infoMessage,
            onClick: ie
          }, null, 8, Me)) : n("", !0),
          e.isPassword && e.showPassword && K.value ? (i(), s("i", {
            key: 2,
            class: z(te.value),
            title: e.showPasswordMessage,
            onClick: ue
          }, null, 10, Ve)) : n("", !0),
          e.reset && K.value ? (i(), s("i", {
            key: 3,
            class: "lkt-field__reset-icon",
            title: ee.value,
            onClick: E
          }, null, 8, Be)) : n("", !0),
          e.mandatory ? (i(), s("i", {
            key: 4,
            class: "lkt-field__mandatory-icon",
            title: e.mandatoryMessage
          }, null, 8, Ee)) : n("", !0),
          l.allowReadModeSwitch ? (i(), s("i", {
            key: 5,
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: j
          }, null, 8, Ce)) : n("", !0)
        ])) : n("", !0)
      ], 64)) : n("", !0),
      h.value ? n("", !0) : (i(), s("div", {
        key: 3,
        class: "lkt-field-text__read",
        onClick: x
      }, [
        v(g).value ? N(t.$slots, "value", {
          key: 0,
          value: a.value,
          title: p.value
        }) : ne.value ? (i(), q(G(re.value), {
          key: 1,
          value: a.value,
          title: p.value
        }, null, 8, ["value", "title"])) : (i(), s(O, { key: 2 }, [
          l.isEmail ? (i(), s("a", {
            key: 0,
            class: "lkt-field-text__read-value",
            title: p.value,
            href: "mail:" + a.value
          }, W(a.value), 9, Te)) : l.isTel ? (i(), s("a", {
            key: 1,
            class: "lkt-field-text__read-value",
            title: p.value,
            href: "tel:" + a.value
          }, W(a.value), 9, Ne)) : (i(), s("div", {
            key: 2,
            class: "lkt-field-text__read-value",
            innerHTML: a.value,
            title: p.value
          }, null, 8, Pe))
        ], 64)),
        l.allowReadModeSwitch ? (i(), s("div", Fe, [
          P("i", {
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: j
          }, null, 8, $e)
        ])) : n("", !0)
      ]))
    ], 10, ke));
  }
}), Re = (l, o) => (m.customValueSlots[l] = o, !0), Ue = (l, o) => (m.customEditSlots[l] = o, !0);
const je = {
  install: (l) => {
    l.component("lkt-field-text") === void 0 && l.component("lkt-field-text", Ie);
  }
};
export {
  je as default,
  Ue as setTextEditSlot,
  Re as setTextValueSlot
};
