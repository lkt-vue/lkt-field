import { defineComponent as q, useSlots as G, ref as k, computed as d, watch as B, openBlock as o, createElementBlock as i, normalizeClass as C, unref as c, renderSlot as T, withDirectives as E, vModelDynamic as I, createCommentVNode as r, nextTick as J } from "vue";
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
    showPassword: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { type: String, default: "" },
    mandatoryMessage: { type: String, default: "" },
    infoMessage: { type: String, default: "" },
    errorMessage: { type: String, default: "" },
    showPasswordMessage: { type: String, default: "" },
    isTel: { type: Boolean, default: !1 },
    isEmail: { type: Boolean, default: !1 },
    isPassword: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error"],
  setup(a, { expose: $, emit: L }) {
    const n = L, h = G(), e = a, s = K(16), y = k(null), w = k(e.modelValue), t = k(e.modelValue), v = k(!1), U = d(() => typeof e.valid == "function" ? e.valid() : e.valid), D = d(() => t.value !== w.value), g = d(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), b = d(() => {
      let l = 0;
      return e.reset && ++l, e.infoMessage && ++l, e.isPassword && e.showPassword && ++l, l;
    }), F = d(() => e.resetMessage !== "" ? e.resetMessage : ""), N = d(() => v.value ? "lkt-field__password-icon" : "lkt-field__show-password-icon"), p = d(() => e.isPassword && v.value ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isTel ? "tel" : "text"), A = d(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), p && l.push(`is-${p.value}`), D.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), b.value > 0 && (l.push("has-icons"), l.push(`has-icons-${b.value}`)), l.push(U.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty"), l.join(" ");
    }), H = () => {
      J(() => {
        y.value && y.value.focus();
      });
    };
    B(() => e.modelValue, (l) => t.value = l), B(t, (l) => n("update:modelValue", l));
    const M = () => t.value = w.value, j = () => t.value, x = (l) => n("keyup", l, f(s, { value: t.value })), P = (l) => n("keydown", l, f(s, { value: t.value })), S = (l) => n("focus", l, f(s, { value: t.value })), _ = (l) => n("blur", l, f(s, { value: t.value })), V = (l) => n("click", l, f(s, { value: t.value })), z = (l) => n("click-info", l, f(s, { value: t.value })), O = (l) => n("click-error", l, f(s, { value: t.value })), R = (l) => v.value = !v.value;
    return $({
      Identifier: s,
      reset: M,
      focus: H,
      value: j,
      isMandatory: () => e.mandatory
    }), (l, m) => (o(), i("div", {
      class: C(A.value),
      "data-show-ui": g.value,
      "data-labeled": !c(h).label
    }, [
      T(l.$slots, "prefix"),
      a.placeholder ? E((o(), i("input", {
        key: 0,
        "onUpdate:modelValue": m[0] || (m[0] = (u) => t.value = u),
        ref: (u) => y.value = u,
        type: p.value,
        name: a.name,
        id: c(s),
        disabled: a.disabled,
        readonly: a.readonly,
        placeholder: a.placeholder,
        tabindex: a.tabindex,
        onKeyup: x,
        onKeydown: P,
        onFocus: S,
        onBlur: _,
        onClick: V
      }, null, 40, W)), [
        [I, t.value]
      ]) : E((o(), i("input", {
        key: 1,
        "onUpdate:modelValue": m[1] || (m[1] = (u) => t.value = u),
        ref: (u) => y.value = u,
        type: p.value,
        name: a.name,
        id: c(s),
        disabled: a.disabled,
        readonly: a.readonly,
        tabindex: a.tabindex,
        onKeyup: x,
        onKeydown: P,
        onFocus: S,
        onBlur: _,
        onClick: V
      }, null, 40, X)), [
        [I, t.value]
      ]),
      c(h).label ? T(l.$slots, "label", { key: 2 }) : r("", !0),
      c(h).label ? r("", !0) : (o(), i("label", {
        key: 3,
        for: c(s),
        innerHTML: a.label
      }, null, 8, Y)),
      g.value ? (o(), i("div", Z, [
        e.errorMessage ? (o(), i("i", {
          key: 0,
          class: "lkt-field__error-icon",
          title: e.errorMessage,
          onClick: O
        }, null, 8, ee)) : r("", !0),
        e.infoMessage ? (o(), i("i", {
          key: 1,
          class: "lkt-field__info-icon",
          title: e.infoMessage,
          onClick: z
        }, null, 8, le)) : r("", !0),
        e.isPassword && e.showPassword ? (o(), i("i", {
          key: 2,
          class: C(N.value),
          title: e.showPasswordMessage,
          onClick: R
        }, null, 10, te)) : r("", !0),
        e.reset ? (o(), i("i", {
          key: 3,
          class: "lkt-field__reset-icon",
          title: F.value,
          onClick: M
        }, null, 8, ae)) : r("", !0),
        e.mandatory ? (o(), i("i", {
          key: 4,
          class: "lkt-field__mandatory-icon",
          title: e.mandatoryMessage
        }, null, 8, se)) : r("", !0)
      ])) : r("", !0)
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
