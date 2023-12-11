import { defineComponent as te, useSlots as le, ref as m, computed as o, watch as _, openBlock as i, createElementBlock as s, normalizeClass as $, unref as y, renderSlot as ae, createCommentVNode as u, withDirectives as A, vModelDynamic as H, createElementVNode as R, nextTick as ie } from "vue";
import { generateRandomString as U } from "lkt-string-tools";
import { createLktEvent as c } from "lkt-events";
const se = ["data-show-ui", "data-labeled"], oe = ["for", "innerHTML"], ue = {
  key: 2,
  class: "lkt-field-text__main"
}, ne = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], re = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], de = {
  key: 2,
  class: "lkt-field__state"
}, fe = ["title"], ce = ["title"], ve = ["title"], me = ["title"], ye = ["title"], pe = ["title"], ke = {
  key: 3,
  class: "lkt-field-text__read"
}, he = ["innerHTML", "title"], we = {
  key: 0,
  class: "lkt-field__state"
}, be = ["title"], ge = { name: "LktFieldText", inheritAttrs: !1 }, Me = /* @__PURE__ */ te({
  ...ge,
  props: {
    modelValue: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: U(16) },
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
    enableAutoNumberFix: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error"],
  setup(a, { expose: D, emit: j }) {
    const f = j, g = le(), e = a, n = U(16), h = m(null), S = m(e.modelValue), l = m(e.modelValue), w = m(!1), M = m(!1), v = m(!e.readMode), z = o(() => typeof e.valid == "function" ? e.valid() : e.valid), O = o(() => l.value !== S.value), B = o(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), V = o(() => {
      let t = 0;
      return e.reset && ++t, e.infoMessage && ++t, e.isPassword && e.showPassword && ++t, t;
    }), q = o(() => e.resetMessage !== "" ? e.resetMessage : ""), G = o(() => w.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), N = o(() => e.autocomplete === !0 ? "on" : "off"), C = o(() => l.value !== ""), b = o(() => e.isPassword && w.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), J = o(() => {
      const t = ["lkt-field", "lkt-field-text"];
      return e.palette && t.push(`lkt-field--${e.palette}`), b && t.push(`is-${b.value}`), O.value && t.push("is-changed"), e.disabled && t.push("is-disabled"), M.value && t.push("has-focus"), V.value > 0 && t.push("has-icons", `has-icons-${V.value}`), t.push(z.value ? "is-valid" : "is-error"), t.push(e.modelValue ? "is-filled" : "is-empty"), t.join(" ");
    }), Q = o(() => typeof l.value == "number" ? l.value.toString() : l.value), p = o(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), k = o(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), P = () => {
      ie(() => {
        h.value && h.value.focus();
      });
    };
    _(() => e.readMode, (t) => v.value = !t), _(() => e.modelValue, (t) => {
      if (e.isNumber)
        return ee(t);
      l.value = t;
    }), _(l, (t) => f("update:modelValue", t));
    const x = () => l.value = S.value, W = () => l.value, T = (t) => f("keyup", t, c(n, { value: l.value })), E = (t) => f("keydown", t, c(n, { value: l.value })), F = (t) => (M.value = !0) && f("focus", t, c(n, { value: l.value })), L = (t) => (M.value = !1) && f("blur", t, c(n, { value: l.value })), I = (t) => f("click", t, c(n, { value: l.value })), X = (t) => f("click-info", t, c(n, { value: l.value })), Y = (t) => f("click-error", t, c(n, { value: l.value })), Z = (t) => w.value = !w.value, K = (t) => {
      v.value = !v.value, v.value && P();
    }, ee = (t) => {
      if (!e.enableAutoNumberFix)
        return !1;
      let d = Number(t), r = !1;
      return p.value !== !1 && d < p.value && (d = p.value, r = !0), k.value !== !1 && d > k.value && (d = k.value, r = !0), r === !0 ? (l.value = d, !0) : !1;
    };
    return D({
      Identifier: n,
      reset: x,
      focus: P,
      value: W,
      isMandatory: () => e.mandatory
    }), x(), (t, d) => (i(), s("div", {
      class: $(J.value),
      "data-show-ui": B.value,
      "data-labeled": !y(g).label
    }, [
      y(g).label ? ae(t.$slots, "label", { key: 0 }) : u("", !0),
      y(g).label ? u("", !0) : (i(), s("label", {
        key: 1,
        for: y(n),
        innerHTML: a.label
      }, null, 8, oe)),
      v.value ? (i(), s("div", ue, [
        a.placeholder ? A((i(), s("input", {
          key: 0,
          "onUpdate:modelValue": d[0] || (d[0] = (r) => l.value = r),
          ref: (r) => h.value = r,
          value: l.value,
          type: b.value,
          name: a.name,
          id: y(n),
          disabled: a.disabled,
          readonly: a.readonly,
          placeholder: a.placeholder,
          tabindex: a.tabindex,
          autocomplete: N.value,
          min: p.value,
          max: k.value,
          step: a.step,
          onKeyup: T,
          onKeydown: E,
          onFocus: F,
          onBlur: L,
          onClick: I
        }, null, 40, ne)), [
          [H, l.value]
        ]) : A((i(), s("input", {
          key: 1,
          "onUpdate:modelValue": d[1] || (d[1] = (r) => l.value = r),
          ref: (r) => h.value = r,
          value: l.value,
          type: b.value,
          name: a.name,
          id: y(n),
          disabled: a.disabled,
          readonly: a.readonly,
          tabindex: a.tabindex,
          autocomplete: N.value,
          min: p.value,
          max: k.value,
          step: a.step,
          onKeyup: T,
          onKeydown: E,
          onFocus: F,
          onBlur: L,
          onClick: I
        }, null, 40, re)), [
          [H, l.value]
        ]),
        B.value ? (i(), s("div", de, [
          e.errorMessage ? (i(), s("i", {
            key: 0,
            class: "lkt-field__error-icon",
            title: e.errorMessage,
            onClick: Y
          }, null, 8, fe)) : u("", !0),
          e.infoMessage ? (i(), s("i", {
            key: 1,
            class: "lkt-field__info-icon",
            title: e.infoMessage,
            onClick: X
          }, null, 8, ce)) : u("", !0),
          e.isPassword && e.showPassword && C.value ? (i(), s("i", {
            key: 2,
            class: $(G.value),
            title: e.showPasswordMessage,
            onClick: Z
          }, null, 10, ve)) : u("", !0),
          e.reset && C.value ? (i(), s("i", {
            key: 3,
            class: "lkt-field__reset-icon",
            title: q.value,
            onClick: x
          }, null, 8, me)) : u("", !0),
          e.mandatory ? (i(), s("i", {
            key: 4,
            class: "lkt-field__mandatory-icon",
            title: e.mandatoryMessage
          }, null, 8, ye)) : u("", !0),
          a.allowReadModeSwitch ? (i(), s("i", {
            key: 5,
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: K
          }, null, 8, pe)) : u("", !0)
        ])) : u("", !0)
      ])) : u("", !0),
      v.value ? u("", !0) : (i(), s("div", ke, [
        R("div", {
          class: "lkt-field-text__read-value",
          innerHTML: l.value,
          title: Q.value
        }, null, 8, he),
        a.allowReadModeSwitch ? (i(), s("div", we, [
          R("i", {
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: K
          }, null, 8, be)
        ])) : u("", !0)
      ]))
    ], 10, se));
  }
}), Be = {
  install: (a) => {
    a.component("lkt-field-text", Me);
  }
};
export {
  Be as default
};
