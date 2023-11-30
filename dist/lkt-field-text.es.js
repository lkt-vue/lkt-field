import { defineComponent as X, useSlots as Y, ref as f, computed as d, watch as K, openBlock as s, createElementBlock as o, normalizeClass as $, unref as v, renderSlot as Z, createCommentVNode as i, withDirectives as F, vModelDynamic as H, createElementVNode as N, nextTick as ee } from "vue";
import { generateRandomString as R } from "lkt-string-tools";
import { createLktEvent as c } from "lkt-events";
const le = ["data-show-ui", "data-labeled"], te = ["for", "innerHTML"], ae = {
  key: 2,
  class: "lkt-field-text__main"
}, se = ["type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], oe = ["type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete"], ie = {
  key: 2,
  class: "lkt-field__state"
}, ne = ["title"], de = ["title"], ue = ["title"], re = ["title"], ce = ["title"], fe = ["title"], ve = {
  key: 3,
  class: "lkt-field-text__read"
}, ye = ["innerHTML", "title"], me = {
  key: 0,
  class: "lkt-field__state"
}, ke = ["title"], pe = { name: "LktFieldText", inheritAttrs: !1 }, he = /* @__PURE__ */ X({
  ...pe,
  props: {
    modelValue: { type: [String, Number, Array], default: "" },
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
    isPassword: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error"],
  setup(a, { expose: U, emit: D }) {
    const u = D, w = Y(), e = a, n = R(16), m = f(null), _ = f(e.modelValue), t = f(e.modelValue), k = f(!1), g = f(!1), y = f(!e.readMode), A = d(() => typeof e.valid == "function" ? e.valid() : e.valid), j = d(() => t.value !== _.value), b = d(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), M = d(() => {
      let l = 0;
      return e.reset && ++l, e.infoMessage && ++l, e.isPassword && e.showPassword && ++l, l;
    }), z = d(() => e.resetMessage !== "" ? e.resetMessage : ""), O = d(() => k.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), x = d(() => e.autocomplete === !0 ? "on" : "off"), S = d(() => t.value !== ""), p = d(() => e.isPassword && k.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isTel ? "tel" : "text"), q = d(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), p && l.push(`is-${p.value}`), j.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), g.value && l.push("has-focus"), M.value > 0 && l.push("has-icons", `has-icons-${M.value}`), l.push(A.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty"), l.join(" ");
    }), B = () => {
      ee(() => {
        m.value && m.value.focus();
      });
    };
    K(() => e.modelValue, (l) => t.value = l), K(t, (l) => u("update:modelValue", l));
    const C = () => t.value = _.value, G = () => t.value, P = (l) => u("keyup", l, c(n, { value: t.value })), V = (l) => u("keydown", l, c(n, { value: t.value })), E = (l) => (g.value = !0) && u("focus", l, c(n, { value: t.value })), T = (l) => (g.value = !1) && u("blur", l, c(n, { value: t.value })), L = (l) => u("click", l, c(n, { value: t.value })), J = (l) => u("click-info", l, c(n, { value: t.value })), Q = (l) => u("click-error", l, c(n, { value: t.value })), W = (l) => k.value = !k.value, I = (l) => {
      y.value = !y.value, y.value && B();
    };
    return U({
      Identifier: n,
      reset: C,
      focus: B,
      value: G,
      isMandatory: () => e.mandatory
    }), (l, h) => (s(), o("div", {
      class: $(q.value),
      "data-show-ui": b.value,
      "data-labeled": !v(w).label
    }, [
      v(w).label ? Z(l.$slots, "label", { key: 0 }) : i("", !0),
      v(w).label ? i("", !0) : (s(), o("label", {
        key: 1,
        for: v(n),
        innerHTML: a.label
      }, null, 8, te)),
      y.value ? (s(), o("div", ae, [
        a.placeholder ? F((s(), o("input", {
          key: 0,
          "onUpdate:modelValue": h[0] || (h[0] = (r) => t.value = r),
          ref: (r) => m.value = r,
          type: p.value,
          name: a.name,
          id: v(n),
          disabled: a.disabled,
          readonly: a.readonly,
          placeholder: a.placeholder,
          tabindex: a.tabindex,
          autocomplete: x.value,
          onKeyup: P,
          onKeydown: V,
          onFocus: E,
          onBlur: T,
          onClick: L
        }, null, 40, se)), [
          [H, t.value]
        ]) : F((s(), o("input", {
          key: 1,
          "onUpdate:modelValue": h[1] || (h[1] = (r) => t.value = r),
          ref: (r) => m.value = r,
          type: p.value,
          name: a.name,
          id: v(n),
          disabled: a.disabled,
          readonly: a.readonly,
          tabindex: a.tabindex,
          autocomplete: x.value,
          onKeyup: P,
          onKeydown: V,
          onFocus: E,
          onBlur: T,
          onClick: L
        }, null, 40, oe)), [
          [H, t.value]
        ]),
        b.value ? (s(), o("div", ie, [
          e.errorMessage ? (s(), o("i", {
            key: 0,
            class: "lkt-field__error-icon",
            title: e.errorMessage,
            onClick: Q
          }, null, 8, ne)) : i("", !0),
          e.infoMessage ? (s(), o("i", {
            key: 1,
            class: "lkt-field__info-icon",
            title: e.infoMessage,
            onClick: J
          }, null, 8, de)) : i("", !0),
          e.isPassword && e.showPassword && S.value ? (s(), o("i", {
            key: 2,
            class: $(O.value),
            title: e.showPasswordMessage,
            onClick: W
          }, null, 10, ue)) : i("", !0),
          e.reset && S.value ? (s(), o("i", {
            key: 3,
            class: "lkt-field__reset-icon",
            title: z.value,
            onClick: C
          }, null, 8, re)) : i("", !0),
          e.mandatory ? (s(), o("i", {
            key: 4,
            class: "lkt-field__mandatory-icon",
            title: e.mandatoryMessage
          }, null, 8, ce)) : i("", !0),
          a.allowReadModeSwitch ? (s(), o("i", {
            key: 5,
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: I
          }, null, 8, fe)) : i("", !0)
        ])) : i("", !0)
      ])) : i("", !0),
      y.value ? i("", !0) : (s(), o("div", ve, [
        N("div", {
          class: "lkt-field-text__read-value",
          innerHTML: t.value,
          title: t.value
        }, null, 8, ye),
        a.allowReadModeSwitch ? (s(), o("div", me, [
          N("i", {
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: I
          }, null, 8, ke)
        ])) : i("", !0)
      ]))
    ], 10, le));
  }
}), be = {
  install: (a) => {
    a.component("lkt-field-text", he);
  }
};
export {
  be as default
};
