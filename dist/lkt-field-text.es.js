import { defineComponent as q, useSlots as G, ref as p, computed as u, watch as B, openBlock as o, createElementBlock as i, normalizeClass as C, unref as c, renderSlot as P, withDirectives as T, vModelDynamic as E, createCommentVNode as d, nextTick as J } from "vue";
import { generateRandomString as K } from "lkt-string-tools";
import { createLktEvent as f } from "lkt-events";
const O = ["data-show-ui", "data-labeled"], Q = ["type", "name", "id", "disabled", "readonly", "placeholder", "tabindex"], W = ["type", "name", "id", "disabled", "readonly", "tabindex"], X = ["for", "innerHTML"], Y = {
  key: 4,
  class: "lkt-field__state"
}, Z = ["title"], ee = ["title"], le = ["title"], te = ["title"], ae = ["title"], se = { name: "LktFieldText", inheritAttrs: !1 }, oe = /* @__PURE__ */ q({
  ...se,
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
  setup(a, { expose: I, emit: L }) {
    const n = L, k = G(), e = a, s = K(16), y = p(null), b = p(e.modelValue), t = p(e.modelValue), g = p(!1), $ = u(() => typeof e.valid == "function" ? e.valid() : e.valid), U = u(() => t.value !== b.value), h = u(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.resetPasswordMessage !== ""), D = u(() => e.resetMessage !== "" ? e.resetMessage : ""), F = u(() => g.value ? "lkt-field__password-icon" : "lkt-field__show-password-icon"), v = u(() => e.isEmail ? "email" : e.isPassword ? "password" : e.isTel ? "tel" : "text"), N = u(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), v && l.push(`is-${v.value}`), U.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), l.push($.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty"), l.join(" ");
    }), A = () => {
      J(() => {
        y.value && y.value.focus();
      });
    };
    B(() => e.modelValue, (l) => t.value = l), B(t, (l) => n("update:modelValue", l));
    const w = () => t.value = b.value, H = () => t.value, M = (l) => n("keyup", l, f(s, { value: t.value })), x = (l) => n("keydown", l, f(s, { value: t.value })), S = (l) => n("focus", l, f(s, { value: t.value })), _ = (l) => n("blur", l, f(s, { value: t.value })), V = (l) => n("click", l, f(s, { value: t.value })), j = (l) => n("click-info", l, f(s, { value: t.value })), z = (l) => n("click-error", l, f(s, { value: t.value })), R = (l) => g.value = !g.value;
    return I({
      Identifier: s,
      reset: w,
      focus: A,
      value: H,
      isMandatory: () => e.mandatory
    }), (l, m) => (o(), i("div", {
      class: C(N.value),
      "data-show-ui": h.value,
      "data-labeled": !c(k).label
    }, [
      P(l.$slots, "prefix"),
      a.placeholder ? T((o(), i("input", {
        key: 0,
        "onUpdate:modelValue": m[0] || (m[0] = (r) => t.value = r),
        ref: (r) => y.value = r,
        type: v.value,
        name: a.name,
        id: c(s),
        disabled: a.disabled,
        readonly: a.readonly,
        placeholder: a.placeholder,
        tabindex: a.tabindex,
        onKeyup: M,
        onKeydown: x,
        onFocus: S,
        onBlur: _,
        onClick: V
      }, null, 40, Q)), [
        [E, t.value]
      ]) : T((o(), i("input", {
        key: 1,
        "onUpdate:modelValue": m[1] || (m[1] = (r) => t.value = r),
        ref: (r) => y.value = r,
        type: v.value,
        name: a.name,
        id: c(s),
        disabled: a.disabled,
        readonly: a.readonly,
        tabindex: a.tabindex,
        onKeyup: M,
        onKeydown: x,
        onFocus: S,
        onBlur: _,
        onClick: V
      }, null, 40, W)), [
        [E, t.value]
      ]),
      c(k).label ? P(l.$slots, "label", { key: 2 }) : d("", !0),
      c(k).label ? d("", !0) : (o(), i("label", {
        key: 3,
        for: c(s),
        innerHTML: a.label
      }, null, 8, X)),
      h.value ? (o(), i("div", Y, [
        e.errorMessage ? (o(), i("i", {
          key: 0,
          class: "lkt-field__error-icon",
          title: e.errorMessage,
          onClick: z
        }, null, 8, Z)) : d("", !0),
        e.infoMessage ? (o(), i("i", {
          key: 1,
          class: "lkt-field__info-icon",
          title: e.infoMessage,
          onClick: j
        }, null, 8, ee)) : d("", !0),
        e.isPassword && e.resetPasswordMessage ? (o(), i("i", {
          key: 2,
          class: C(F.value),
          title: e.resetPasswordMessage,
          onClick: R
        }, null, 10, le)) : d("", !0),
        e.reset ? (o(), i("i", {
          key: 3,
          class: "lkt-field__reset-icon",
          title: D.value,
          onClick: w
        }, null, 8, te)) : d("", !0),
        e.mandatory ? (o(), i("i", {
          key: 4,
          class: "lkt-field__mandatory-icon",
          title: e.mandatoryMessage
        }, null, 8, ae)) : d("", !0)
      ])) : d("", !0)
    ], 10, O));
  }
}), re = {
  install: (a) => {
    a.component("lkt-field-text", oe);
  }
};
export {
  re as default
};
