import { defineComponent as Y, useSlots as Z, ref as v, computed as u, watch as M, openBlock as o, createElementBlock as s, normalizeClass as $, unref as y, renderSlot as ee, createCommentVNode as i, withDirectives as F, vModelDynamic as H, createElementVNode as N, nextTick as le } from "vue";
import { generateRandomString as R } from "lkt-string-tools";
import { createLktEvent as c } from "lkt-events";
const te = ["data-show-ui", "data-labeled"], ae = ["for", "innerHTML"], oe = {
  key: 2,
  class: "lkt-field-text__main"
}, se = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], ie = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete"], ne = {
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
    const d = D, w = Z(), e = a, n = R(16), m = v(null), b = v(e.modelValue), t = v(e.modelValue), p = v(!1), g = v(!1), f = v(!e.readMode), j = u(() => typeof e.valid == "function" ? e.valid() : e.valid), z = u(() => t.value !== b.value), S = u(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), x = u(() => {
      let l = 0;
      return e.reset && ++l, e.infoMessage && ++l, e.isPassword && e.showPassword && ++l, l;
    }), A = u(() => e.resetMessage !== "" ? e.resetMessage : ""), O = u(() => p.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), B = u(() => e.autocomplete === !0 ? "on" : "off"), C = u(() => t.value !== ""), k = u(() => e.isPassword && p.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), q = u(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), k && l.push(`is-${k.value}`), z.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), g.value && l.push("has-focus"), x.value > 0 && l.push("has-icons", `has-icons-${x.value}`), l.push(j.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty"), l.join(" ");
    }), G = u(() => typeof t.value == "number" ? t.value.toString() : t.value), P = () => {
      le(() => {
        m.value && m.value.focus();
      });
    };
    M(() => e.readMode, (l) => f.value = !l), M(() => e.modelValue, (l) => t.value = l), M(t, (l) => d("update:modelValue", l));
    const _ = () => t.value = b.value, J = () => t.value, V = (l) => d("keyup", l, c(n, { value: t.value })), T = (l) => d("keydown", l, c(n, { value: t.value })), E = (l) => (g.value = !0) && d("focus", l, c(n, { value: t.value })), L = (l) => (g.value = !1) && d("blur", l, c(n, { value: t.value })), I = (l) => d("click", l, c(n, { value: t.value })), Q = (l) => d("click-info", l, c(n, { value: t.value })), W = (l) => d("click-error", l, c(n, { value: t.value })), X = (l) => p.value = !p.value, K = (l) => {
      f.value = !f.value, f.value && P();
    };
    return U({
      Identifier: n,
      reset: _,
      focus: P,
      value: J,
      isMandatory: () => e.mandatory
    }), _(), (l, h) => (o(), s("div", {
      class: $(q.value),
      "data-show-ui": S.value,
      "data-labeled": !y(w).label
    }, [
      y(w).label ? ee(l.$slots, "label", { key: 0 }) : i("", !0),
      y(w).label ? i("", !0) : (o(), s("label", {
        key: 1,
        for: y(n),
        innerHTML: a.label
      }, null, 8, ae)),
      f.value ? (o(), s("div", oe, [
        a.placeholder ? F((o(), s("input", {
          key: 0,
          "onUpdate:modelValue": h[0] || (h[0] = (r) => t.value = r),
          ref: (r) => m.value = r,
          value: t.value,
          type: k.value,
          name: a.name,
          id: y(n),
          disabled: a.disabled,
          readonly: a.readonly,
          placeholder: a.placeholder,
          tabindex: a.tabindex,
          autocomplete: B.value,
          onKeyup: V,
          onKeydown: T,
          onFocus: E,
          onBlur: L,
          onClick: I
        }, null, 40, se)), [
          [H, t.value]
        ]) : F((o(), s("input", {
          key: 1,
          "onUpdate:modelValue": h[1] || (h[1] = (r) => t.value = r),
          ref: (r) => m.value = r,
          value: t.value,
          type: k.value,
          name: a.name,
          id: y(n),
          disabled: a.disabled,
          readonly: a.readonly,
          tabindex: a.tabindex,
          autocomplete: B.value,
          onKeyup: V,
          onKeydown: T,
          onFocus: E,
          onBlur: L,
          onClick: I
        }, null, 40, ie)), [
          [H, t.value]
        ]),
        S.value ? (o(), s("div", ne, [
          e.errorMessage ? (o(), s("i", {
            key: 0,
            class: "lkt-field__error-icon",
            title: e.errorMessage,
            onClick: W
          }, null, 8, ue)) : i("", !0),
          e.infoMessage ? (o(), s("i", {
            key: 1,
            class: "lkt-field__info-icon",
            title: e.infoMessage,
            onClick: Q
          }, null, 8, de)) : i("", !0),
          e.isPassword && e.showPassword && C.value ? (o(), s("i", {
            key: 2,
            class: $(O.value),
            title: e.showPasswordMessage,
            onClick: X
          }, null, 10, re)) : i("", !0),
          e.reset && C.value ? (o(), s("i", {
            key: 3,
            class: "lkt-field__reset-icon",
            title: A.value,
            onClick: _
          }, null, 8, ce)) : i("", !0),
          e.mandatory ? (o(), s("i", {
            key: 4,
            class: "lkt-field__mandatory-icon",
            title: e.mandatoryMessage
          }, null, 8, fe)) : i("", !0),
          a.allowReadModeSwitch ? (o(), s("i", {
            key: 5,
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: K
          }, null, 8, ve)) : i("", !0)
        ])) : i("", !0)
      ])) : i("", !0),
      f.value ? i("", !0) : (o(), s("div", ye, [
        N("div", {
          class: "lkt-field-text__read-value",
          innerHTML: t.value,
          title: G.value
        }, null, 8, me),
        a.allowReadModeSwitch ? (o(), s("div", pe, [
          N("i", {
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: K
          }, null, 8, ke)
        ])) : i("", !0)
      ]))
    ], 10, te));
  }
}), be = {
  install: (a) => {
    a.component("lkt-field-text", we);
  }
};
export {
  be as default
};
