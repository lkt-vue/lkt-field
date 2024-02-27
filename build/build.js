import { defineComponent as ve, useSlots as ce, ref as k, computed as o, watch as C, openBlock as a, createElementBlock as s, normalizeClass as j, unref as v, renderSlot as T, createCommentVNode as u, Fragment as z, createBlock as O, resolveDynamicComponent as q, withDirectives as G, createElementVNode as P, vModelDynamic as J, toDisplayString as Q, nextTick as me } from "vue";
import { generateRandomString as W } from "lkt-string-tools";
import { createLktEvent as p } from "lkt-events";
const x = class x {
};
x.customValueSlots = {}, x.customEditSlots = {};
let c = x;
const pe = ["data-show-ui", "data-labeled"], ye = ["for", "innerHTML"], ke = {
  key: 2,
  class: "lkt-field-text__main"
}, he = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], _e = {
  key: 3,
  class: "lkt-field-text__main"
}, we = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], be = {
  key: 4,
  class: "lkt-field__state"
}, Me = ["title"], Se = ["title"], ge = ["title"], Ve = ["title"], xe = ["title"], Be = ["title"], Ee = ["title", "href"], Ce = ["title", "href"], Te = ["innerHTML", "title"], Pe = {
  key: 3,
  class: "lkt-field__state"
}, Ne = ["title"], Fe = { name: "LktFieldText", inheritAttrs: !1 }, $e = /* @__PURE__ */ ve({
  ...Fe,
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: W(16) },
    valid: { type: Boolean, default: !1 },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { default: "" },
    mandatoryMessage: { default: "" },
    infoMessage: { default: "" },
    errorMessage: { default: "" },
    switchEditionMessage: { default: "" },
    min: { default: void 0 },
    max: { default: void 0 },
    step: { default: 1 },
    isTel: { type: Boolean, default: !1 },
    isEmail: { type: Boolean, default: !1 },
    isPassword: { type: Boolean, default: !1 },
    isSearch: { type: Boolean, default: !1 },
    isNumber: { type: Boolean, default: !1 },
    enableAutoNumberFix: { type: Boolean, default: !0 },
    valueSlot: { default: "" },
    editSlot: { default: "" }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error"],
  setup(d, { expose: h, emit: X }) {
    const f = X, _ = ce(), l = d, i = W(16), S = k(null), N = k(l.modelValue), t = k(l.modelValue), g = k(!1), B = k(!1), y = k(!l.readMode), Y = o(() => typeof l.valid == "function" ? l.valid() : l.valid), Z = o(() => t.value !== N.value), F = o(() => l.reset || l.infoMessage !== "" || l.errorMessage !== "" || l.isPassword && l.showPassword), $ = o(() => {
      let e = 0;
      return l.reset && ++e, l.infoMessage && ++e, l.isPassword && l.showPassword && ++e, e;
    }), ee = o(() => l.resetMessage !== "" ? l.resetMessage : ""), le = o(() => g.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), L = o(() => l.autocomplete === !0 ? "on" : "off"), I = o(() => t.value !== ""), V = o(() => l.isPassword && g.value === !0 ? "text" : l.isEmail ? "email" : l.isPassword ? "password" : l.isNumber ? "number" : l.isTel ? "tel" : l.isSearch ? "search" : "text"), te = o(() => {
      const e = ["lkt-field", "lkt-field-text"];
      return l.palette && e.push(`lkt-field--${l.palette}`), V && e.push(`is-${V.value}`), Z.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), B.value && e.push("has-focus"), $.value > 0 && e.push("has-icons", `has-icons-${$.value}`), e.push(Y.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), m = o(() => typeof t.value == "number" ? t.value.toString() : t.value), w = o(() => typeof l.min == "string" ? parseFloat(l.min) : typeof l.min == "number" ? l.min : !1), b = o(() => typeof l.max == "string" ? parseFloat(l.max) : typeof l.max == "number" ? l.max : !1), K = () => {
      me(() => {
        S.value && S.value.focus();
      });
    };
    C(() => l.readMode, (e) => y.value = !e), C(() => l.modelValue, (e) => {
      if (l.isNumber)
        return ie(e);
      t.value = e;
    }), C(t, (e) => f("update:modelValue", e));
    const E = () => t.value = N.value, ae = () => t.value, A = (e) => f("keyup", e, p(i, { value: t.value })), D = (e) => f("keydown", e, p(i, { value: t.value })), H = (e) => (B.value = !0) && f("focus", e, p(i, { value: t.value })), R = (e) => (B.value = !1) && f("blur", e, p(i, { value: t.value })), M = (e) => f("click", e, p(i, { value: t.value })), se = (e) => f("click-info", e, p(i, { value: t.value })), oe = (e) => f("click-error", e, p(i, { value: t.value })), ue = (e) => g.value = !g.value, U = (e) => {
      y.value = !y.value, y.value && K();
    }, ie = (e) => {
      if (!l.enableAutoNumberFix)
        return !1;
      let r = Number(e), n = !1;
      return w.value !== !1 && r < w.value && (r = w.value, n = !0), b.value !== !1 && r > b.value && (r = b.value, n = !0), n === !0 ? (t.value = r, !0) : !1;
    };
    h({
      Identifier: i,
      reset: E,
      focus: K,
      value: ae,
      isMandatory: () => l.mandatory
    }), E();
    const ne = o(() => l.valueSlot !== "" && typeof c.customValueSlots[l.valueSlot] < "u"), re = o(() => c.customValueSlots[l.valueSlot]), de = o(() => l.editSlot !== "" && typeof c.customEditSlots[l.editSlot] < "u"), fe = o(() => c.customEditSlots[l.editSlot]);
    return (e, r) => (a(), s("div", {
      class: j(te.value),
      "data-show-ui": F.value,
      "data-labeled": !v(_).label
    }, [
      v(_).label ? T(e.$slots, "label", { key: 0 }) : u("", !0),
      v(_).label ? u("", !0) : (a(), s("label", {
        key: 1,
        for: v(i),
        innerHTML: e.label
      }, null, 8, ye)),
      y.value ? (a(), s(z, { key: 2 }, [
        v(_).edit ? (a(), s("div", {
          key: 0,
          onClick: M
        }, [
          T(e.$slots, "edit", {
            value: t.value,
            title: m.value
          })
        ])) : de.value ? (a(), s("div", {
          key: 1,
          onClick: M
        }, [
          (a(), O(q(fe.value), {
            value: t.value,
            title: m.value
          }, null, 8, ["value", "title"]))
        ])) : e.placeholder ? (a(), s("div", ke, [
          G(P("input", {
            "onUpdate:modelValue": r[0] || (r[0] = (n) => t.value = n),
            ref: (n) => S.value = n,
            value: t.value,
            type: V.value,
            name: e.name,
            id: v(i),
            disabled: e.disabled,
            readonly: e.readonly,
            placeholder: e.placeholder,
            tabindex: e.tabindex,
            autocomplete: L.value,
            min: w.value,
            max: b.value,
            step: e.step,
            onKeyup: A,
            onKeydown: D,
            onFocus: H,
            onBlur: R,
            onClick: M
          }, null, 40, he), [
            [J, t.value]
          ])
        ])) : (a(), s("div", _e, [
          G(P("input", {
            "onUpdate:modelValue": r[1] || (r[1] = (n) => t.value = n),
            ref: (n) => S.value = n,
            value: t.value,
            type: V.value,
            name: e.name,
            id: v(i),
            disabled: e.disabled,
            readonly: e.readonly,
            tabindex: e.tabindex,
            autocomplete: L.value,
            min: w.value,
            max: b.value,
            step: e.step,
            onKeyup: A,
            onKeydown: D,
            onFocus: H,
            onBlur: R,
            onClick: M
          }, null, 40, we), [
            [J, t.value]
          ])
        ])),
        F.value ? (a(), s("div", be, [
          l.errorMessage ? (a(), s("i", {
            key: 0,
            class: "lkt-field__error-icon",
            title: l.errorMessage,
            onClick: oe
          }, null, 8, Me)) : u("", !0),
          l.infoMessage ? (a(), s("i", {
            key: 1,
            class: "lkt-field__info-icon",
            title: l.infoMessage,
            onClick: se
          }, null, 8, Se)) : u("", !0),
          l.isPassword && l.showPassword && I.value ? (a(), s("i", {
            key: 2,
            class: j(le.value),
            title: l.showPasswordMessage,
            onClick: ue
          }, null, 10, ge)) : u("", !0),
          l.reset && I.value ? (a(), s("i", {
            key: 3,
            class: "lkt-field__reset-icon",
            title: ee.value,
            onClick: E
          }, null, 8, Ve)) : u("", !0),
          l.mandatory ? (a(), s("i", {
            key: 4,
            class: "lkt-field__mandatory-icon",
            title: l.mandatoryMessage
          }, null, 8, xe)) : u("", !0),
          e.allowReadModeSwitch ? (a(), s("i", {
            key: 5,
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: U
          }, null, 8, Be)) : u("", !0)
        ])) : u("", !0)
      ], 64)) : u("", !0),
      y.value ? u("", !0) : (a(), s("div", {
        key: 3,
        class: "lkt-field-text__read",
        onClick: M
      }, [
        v(_).value ? T(e.$slots, "value", {
          key: 0,
          value: t.value,
          title: m.value
        }) : ne.value ? (a(), O(q(re.value), {
          key: 1,
          value: t.value,
          title: m.value
        }, null, 8, ["value", "title"])) : (a(), s(z, { key: 2 }, [
          e.isEmail ? (a(), s("a", {
            key: 0,
            class: "lkt-field-text__read-value",
            title: m.value,
            href: "mail:" + t.value
          }, Q(t.value), 9, Ee)) : e.isTel ? (a(), s("a", {
            key: 1,
            class: "lkt-field-text__read-value",
            title: m.value,
            href: "tel:" + t.value
          }, Q(t.value), 9, Ce)) : (a(), s("div", {
            key: 2,
            class: "lkt-field-text__read-value",
            innerHTML: t.value,
            title: m.value
          }, null, 8, Te))
        ], 64)),
        e.allowReadModeSwitch ? (a(), s("div", Pe, [
          P("i", {
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: U
          }, null, 8, Ne)
        ])) : u("", !0)
      ]))
    ], 10, pe));
  }
}), Ae = (d, h) => (c.customValueSlots[d] = h, !0), De = (d, h) => (c.customEditSlots[d] = h, !0), He = {
  install: (d) => {
    d.component("lkt-field-text") === void 0 && d.component("lkt-field-text", $e);
  }
};
export {
  He as default,
  De as setTextEditSlot,
  Ae as setTextValueSlot
};
