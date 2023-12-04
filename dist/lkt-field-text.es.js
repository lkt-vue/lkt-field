import { defineComponent as Y, useSlots as Z, ref as f, computed as u, watch as K, openBlock as s, createElementBlock as o, normalizeClass as $, unref as v, renderSlot as ee, createCommentVNode as i, withDirectives as F, vModelDynamic as H, createElementVNode as N, nextTick as le } from "vue";
import { generateRandomString as R } from "lkt-string-tools";
import { createLktEvent as c } from "lkt-events";
const te = ["data-show-ui", "data-labeled"], ae = ["for", "innerHTML"], se = {
  key: 2,
  class: "lkt-field-text__main"
}, oe = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], ie = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete"], ne = {
  key: 2,
  class: "lkt-field__state"
}, ue = ["title"], de = ["title"], re = ["title"], ce = ["title"], fe = ["title"], ve = ["title"], ye = {
  key: 3,
  class: "lkt-field-text__read"
}, me = ["innerHTML", "title"], pe = {
  key: 0,
  class: "lkt-field__state"
}, ke = ["title"], he = { name: "LktFieldText", inheritAttrs: !1 }, we = /* @__PURE__ */ Y({
  ...he,
  props: {
    modelValue: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: R(16) },
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
    isTel: { type: Boolean, default: !1 },
    isEmail: { type: Boolean, default: !1 },
    isPassword: { type: Boolean, default: !1 },
    isSearch: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error"],
  setup(a, { expose: U, emit: D }) {
    const d = D, w = Z(), e = a, n = R(16), m = f(null), b = f(e.modelValue), t = f(e.modelValue), p = f(!1), g = f(!1), y = f(!e.readMode), j = u(() => typeof e.valid == "function" ? e.valid() : e.valid), z = u(() => t.value !== b.value), M = u(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), S = u(() => {
      let l = 0;
      return e.reset && ++l, e.infoMessage && ++l, e.isPassword && e.showPassword && ++l, l;
    }), A = u(() => e.resetMessage !== "" ? e.resetMessage : ""), O = u(() => p.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), x = u(() => e.autocomplete === !0 ? "on" : "off"), B = u(() => t.value !== ""), k = u(() => e.isPassword && p.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), q = u(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), k && l.push(`is-${k.value}`), z.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), g.value && l.push("has-focus"), S.value > 0 && l.push("has-icons", `has-icons-${S.value}`), l.push(j.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty"), l.join(" ");
    }), G = u(() => typeof t.value == "number" ? t.value.toString() : t.value), C = () => {
      le(() => {
        m.value && m.value.focus();
      });
    };
    K(() => e.modelValue, (l) => t.value = l), K(t, (l) => d("update:modelValue", l));
    const _ = () => t.value = b.value, J = () => t.value, P = (l) => d("keyup", l, c(n, { value: t.value })), V = (l) => d("keydown", l, c(n, { value: t.value })), T = (l) => (g.value = !0) && d("focus", l, c(n, { value: t.value })), E = (l) => (g.value = !1) && d("blur", l, c(n, { value: t.value })), L = (l) => d("click", l, c(n, { value: t.value })), Q = (l) => d("click-info", l, c(n, { value: t.value })), W = (l) => d("click-error", l, c(n, { value: t.value })), X = (l) => p.value = !p.value, I = (l) => {
      y.value = !y.value, y.value && C();
    };
    return U({
      Identifier: n,
      reset: _,
      focus: C,
      value: J,
      isMandatory: () => e.mandatory
    }), _(), (l, h) => (s(), o("div", {
      class: $(q.value),
      "data-show-ui": M.value,
      "data-labeled": !v(w).label
    }, [
      v(w).label ? ee(l.$slots, "label", { key: 0 }) : i("", !0),
      v(w).label ? i("", !0) : (s(), o("label", {
        key: 1,
        for: v(n),
        innerHTML: a.label
      }, null, 8, ae)),
      y.value ? (s(), o("div", se, [
        a.placeholder ? F((s(), o("input", {
          key: 0,
          "onUpdate:modelValue": h[0] || (h[0] = (r) => t.value = r),
          ref: (r) => m.value = r,
          value: t.value,
          type: k.value,
          name: a.name,
          id: v(n),
          disabled: a.disabled,
          readonly: a.readonly,
          placeholder: a.placeholder,
          tabindex: a.tabindex,
          autocomplete: x.value,
          onKeyup: P,
          onKeydown: V,
          onFocus: T,
          onBlur: E,
          onClick: L
        }, null, 40, oe)), [
          [H, t.value]
        ]) : F((s(), o("input", {
          key: 1,
          "onUpdate:modelValue": h[1] || (h[1] = (r) => t.value = r),
          ref: (r) => m.value = r,
          value: t.value,
          type: k.value,
          name: a.name,
          id: v(n),
          disabled: a.disabled,
          readonly: a.readonly,
          tabindex: a.tabindex,
          autocomplete: x.value,
          onKeyup: P,
          onKeydown: V,
          onFocus: T,
          onBlur: E,
          onClick: L
        }, null, 40, ie)), [
          [H, t.value]
        ]),
        M.value ? (s(), o("div", ne, [
          e.errorMessage ? (s(), o("i", {
            key: 0,
            class: "lkt-field__error-icon",
            title: e.errorMessage,
            onClick: W
          }, null, 8, ue)) : i("", !0),
          e.infoMessage ? (s(), o("i", {
            key: 1,
            class: "lkt-field__info-icon",
            title: e.infoMessage,
            onClick: Q
          }, null, 8, de)) : i("", !0),
          e.isPassword && e.showPassword && B.value ? (s(), o("i", {
            key: 2,
            class: $(O.value),
            title: e.showPasswordMessage,
            onClick: X
          }, null, 10, re)) : i("", !0),
          e.reset && B.value ? (s(), o("i", {
            key: 3,
            class: "lkt-field__reset-icon",
            title: A.value,
            onClick: _
          }, null, 8, ce)) : i("", !0),
          e.mandatory ? (s(), o("i", {
            key: 4,
            class: "lkt-field__mandatory-icon",
            title: e.mandatoryMessage
          }, null, 8, fe)) : i("", !0),
          a.allowReadModeSwitch ? (s(), o("i", {
            key: 5,
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: I
          }, null, 8, ve)) : i("", !0)
        ])) : i("", !0)
      ])) : i("", !0),
      y.value ? i("", !0) : (s(), o("div", ye, [
        N("div", {
          class: "lkt-field-text__read-value",
          innerHTML: t.value,
          title: G.value
        }, null, 8, me),
        a.allowReadModeSwitch ? (s(), o("div", pe, [
          N("i", {
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: I
          }, null, 8, ke)
        ])) : i("", !0)
      ]))
    ], 10, te));
  }
}), Me = {
  install: (a) => {
    a.component("lkt-field-text", we);
  }
};
export {
  Me as default
};
