import { defineComponent as q, useSlots as G, ref as m, computed as r, watch as B, openBlock as o, createElementBlock as i, normalizeClass as C, unref as c, renderSlot as T, withDirectives as E, vModelDynamic as I, createCommentVNode as d, nextTick as J } from "vue";
import { generateRandomString as K } from "lkt-string-tools";
import { createLktEvent as f } from "lkt-events";
const Q = ["data-show-ui", "data-labeled"], W = ["type", "name", "id", "disabled", "readonly", "placeholder", "tabindex"], X = ["type", "name", "id", "disabled", "readonly", "tabindex"], Y = ["for", "innerHTML"], Z = {
  key: 4,
  class: "lkt-field__state"
}, ee = ["title"], le = ["title"], te = ["title"], ae = ["title"], se = ["title"], oe = { name: "LktFieldText", inheritAttrs: !1 }, ie = /* @__PURE__ */ q({
  ...oe,
  props: {
    modelValue: { type: [String, Number, Array], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: K(16) },
    valid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    tabindex: { type: Number, default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { type: String, default: "" },
    mandatoryMessage: { type: String, default: "" },
    infoMessage: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
    resetPasswordMessage: { type: String, default: "" },
    isTel: { type: Boolean, default: !1 },
    isEmail: { type: Boolean, default: !1 },
    isPassword: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error"],
  setup(a, { expose: $, emit: L }) {
    const n = L, k = G(), l = a, s = K(16), y = m(null), h = m(l.modelValue), t = m(l.modelValue), g = m(!1), U = r(() => typeof l.valid == "function" ? l.valid() : l.valid), D = r(() => t.value !== h.value), b = r(() => l.reset || l.infoMessage !== "" || l.errorMessage !== "" || l.isPassword && l.resetPasswordMessage !== ""), w = r(() => {
      let e = 0;
      return l.reset && ++e, l.infoMessage && ++e, l.isPassword && l.resetPasswordMessage && ++e, e;
    }), F = r(() => l.resetMessage !== "" ? l.resetMessage : ""), N = r(() => g.value ? "lkt-field__password-icon" : "lkt-field__show-password-icon"), v = r(() => l.isEmail ? "email" : l.isPassword ? "password" : l.isTel ? "tel" : "text"), A = r(() => {
      const e = ["lkt-field", "lkt-field-text"];
      return l.palette && e.push(`lkt-field--${l.palette}`), v && e.push(`is-${v.value}`), D.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), w.value > 0 && (e.push("has-icons"), e.push(`has-icons-${w.value}`)), e.push(U.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), H = () => {
      J(() => {
        y.value && y.value.focus();
      });
    };
    B(() => l.modelValue, (e) => t.value = e), B(t, (e) => n("update:modelValue", e));
    const M = () => t.value = h.value, j = () => t.value, x = (e) => n("keyup", e, f(s, { value: t.value })), S = (e) => n("keydown", e, f(s, { value: t.value })), _ = (e) => n("focus", e, f(s, { value: t.value })), V = (e) => n("blur", e, f(s, { value: t.value })), P = (e) => n("click", e, f(s, { value: t.value })), z = (e) => n("click-info", e, f(s, { value: t.value })), O = (e) => n("click-error", e, f(s, { value: t.value })), R = (e) => g.value = !g.value;
    return $({
      Identifier: s,
      reset: M,
      focus: H,
      value: j,
      isMandatory: () => l.mandatory
    }), (e, p) => (o(), i("div", {
      class: C(A.value),
      "data-show-ui": b.value,
      "data-labeled": !c(k).label
    }, [
      T(e.$slots, "prefix"),
      a.placeholder ? E((o(), i("input", {
        key: 0,
        "onUpdate:modelValue": p[0] || (p[0] = (u) => t.value = u),
        ref: (u) => y.value = u,
        type: v.value,
        name: a.name,
        id: c(s),
        disabled: a.disabled,
        readonly: a.readonly,
        placeholder: a.placeholder,
        tabindex: a.tabindex,
        onKeyup: x,
        onKeydown: S,
        onFocus: _,
        onBlur: V,
        onClick: P
      }, null, 40, W)), [
        [I, t.value]
      ]) : E((o(), i("input", {
        key: 1,
        "onUpdate:modelValue": p[1] || (p[1] = (u) => t.value = u),
        ref: (u) => y.value = u,
        type: v.value,
        name: a.name,
        id: c(s),
        disabled: a.disabled,
        readonly: a.readonly,
        tabindex: a.tabindex,
        onKeyup: x,
        onKeydown: S,
        onFocus: _,
        onBlur: V,
        onClick: P
      }, null, 40, X)), [
        [I, t.value]
      ]),
      c(k).label ? T(e.$slots, "label", { key: 2 }) : d("", !0),
      c(k).label ? d("", !0) : (o(), i("label", {
        key: 3,
        for: c(s),
        innerHTML: a.label
      }, null, 8, Y)),
      b.value ? (o(), i("div", Z, [
        l.errorMessage ? (o(), i("i", {
          key: 0,
          class: "lkt-field__error-icon",
          title: l.errorMessage,
          onClick: O
        }, null, 8, ee)) : d("", !0),
        l.infoMessage ? (o(), i("i", {
          key: 1,
          class: "lkt-field__info-icon",
          title: l.infoMessage,
          onClick: z
        }, null, 8, le)) : d("", !0),
        l.isPassword && l.resetPasswordMessage ? (o(), i("i", {
          key: 2,
          class: C(N.value),
          title: l.resetPasswordMessage,
          onClick: R
        }, null, 10, te)) : d("", !0),
        l.reset ? (o(), i("i", {
          key: 3,
          class: "lkt-field__reset-icon",
          title: F.value,
          onClick: M
        }, null, 8, ae)) : d("", !0),
        l.mandatory ? (o(), i("i", {
          key: 4,
          class: "lkt-field__mandatory-icon",
          title: l.mandatoryMessage
        }, null, 8, se)) : d("", !0)
      ])) : d("", !0)
    ], 10, Q));
  }
}), ue = {
  install: (a) => {
    a.component("lkt-field-text", ie);
  }
};
export {
  ue as default
};
