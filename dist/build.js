import { defineComponent as ve, useSlots as ce, ref as k, computed as o, watch as C, openBlock as a, createElementBlock as s, normalizeClass as j, unref as v, renderSlot as T, createCommentVNode as u, Fragment as z, createBlock as O, resolveDynamicComponent as q, withDirectives as G, createElementVNode as P, vModelDynamic as J, toDisplayString as Q, nextTick as me } from "vue";
import { generateRandomString as W } from "lkt-string-tools";
import { createLktEvent as p } from "lkt-events";
const B = class B {
};
B.customValueSlots = {}, B.customEditSlots = {};
let c = B;
const pe = ["data-show-ui", "data-labeled"], ye = ["for", "innerHTML"], ke = {
  key: 2,
  class: "lkt-field-text__main"
}, he = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], we = {
  key: 3,
  class: "lkt-field-text__main"
}, _e = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], be = {
  key: 4,
  class: "lkt-field__state"
}, Me = ["title"], Se = ["title"], ge = ["title"], Ve = ["title"], Be = ["title"], Ee = ["title"], xe = ["title", "href"], Ce = ["title", "href"], Te = ["innerHTML", "title"], Pe = {
  key: 3,
  class: "lkt-field__state"
}, Ne = ["title"], De = /* @__PURE__ */ ve({
  __name: "LktFieldText",
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
    editSlot: { default: "" },
    slotData: { default: () => ({}) }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error"],
  setup(r, { expose: h, emit: X }) {
    const f = X, w = ce(), l = r, i = W(16), S = k(null), N = k(l.modelValue), t = k(l.modelValue), g = k(!1), E = k(!1), y = k(!l.readMode), Y = o(() => typeof l.valid == "function" ? l.valid() : l.valid), Z = o(() => t.value !== N.value), D = o(() => l.reset || l.infoMessage !== "" || l.errorMessage !== "" || l.isPassword && l.showPassword), F = o(() => {
      let e = 0;
      return l.reset && ++e, l.infoMessage && ++e, l.isPassword && l.showPassword && ++e, e;
    }), ee = o(() => l.resetMessage !== "" ? l.resetMessage : ""), le = o(() => g.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), $ = o(() => l.autocomplete === !0 ? "on" : "off"), L = o(() => t.value !== ""), V = o(() => l.isPassword && g.value === !0 ? "text" : l.isEmail ? "email" : l.isPassword ? "password" : l.isNumber ? "number" : l.isTel ? "tel" : l.isSearch ? "search" : "text"), te = o(() => {
      const e = ["lkt-field", "lkt-field-text"];
      return l.palette && e.push(`lkt-field--${l.palette}`), V && e.push(`is-${V.value}`), Z.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), E.value && e.push("has-focus"), F.value > 0 && e.push("has-icons", `has-icons-${F.value}`), e.push(Y.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), m = o(() => typeof t.value == "number" ? t.value.toString() : t.value), _ = o(() => typeof l.min == "string" ? parseFloat(l.min) : typeof l.min == "number" ? l.min : !1), b = o(() => typeof l.max == "string" ? parseFloat(l.max) : typeof l.max == "number" ? l.max : !1), I = () => {
      me(() => {
        S.value && S.value.focus();
      });
    };
    C(() => l.readMode, (e) => y.value = !e), C(() => l.modelValue, (e) => {
      if (l.isNumber)
        return ie(e);
      t.value = e;
    }), C(t, (e) => f("update:modelValue", e));
    const x = () => t.value = N.value, ae = () => t.value, K = (e) => f("keyup", e, p(i, { value: t.value })), A = (e) => f("keydown", e, p(i, { value: t.value })), H = (e) => (E.value = !0) && f("focus", e, p(i, { value: t.value })), R = (e) => (E.value = !1) && f("blur", e, p(i, { value: t.value })), M = (e) => f("click", e, p(i, { value: t.value })), se = (e) => f("click-info", e, p(i, { value: t.value })), oe = (e) => f("click-error", e, p(i, { value: t.value })), ue = (e) => g.value = !g.value, U = (e) => {
      y.value = !y.value, y.value && I();
    }, ie = (e) => {
      if (!l.enableAutoNumberFix)
        return !1;
      let d = Number(e), n = !1;
      return _.value !== !1 && d < _.value && (d = _.value, n = !0), b.value !== !1 && d > b.value && (d = b.value, n = !0), n === !0 ? (t.value = d, !0) : !1;
    };
    h({
      Identifier: i,
      reset: x,
      focus: I,
      value: ae,
      isMandatory: () => l.mandatory
    }), x();
    const ne = o(() => l.valueSlot !== "" && typeof c.customValueSlots[l.valueSlot] < "u"), de = o(() => c.customValueSlots[l.valueSlot]), re = o(() => l.editSlot !== "" && typeof c.customEditSlots[l.editSlot] < "u"), fe = o(() => c.customEditSlots[l.editSlot]);
    return (e, d) => (a(), s("div", {
      class: j(te.value),
      "data-show-ui": D.value,
      "data-labeled": !v(w).label
    }, [
      v(w).label ? T(e.$slots, "label", { key: 0 }) : u("", !0),
      v(w).label ? u("", !0) : (a(), s("label", {
        key: 1,
        for: v(i),
        innerHTML: e.label
      }, null, 8, ye)),
      y.value ? (a(), s(z, { key: 2 }, [
        v(w).edit ? (a(), s("div", {
          key: 0,
          onClick: M
        }, [
          T(e.$slots, "edit", {
            value: t.value,
            title: m.value,
            data: e.slotData
          })
        ])) : re.value ? (a(), s("div", {
          key: 1,
          onClick: M
        }, [
          (a(), O(q(fe.value), {
            value: t.value,
            title: m.value,
            data: e.slotData
          }, null, 8, ["value", "title", "data"]))
        ])) : e.placeholder ? (a(), s("div", ke, [
          G(P("input", {
            "onUpdate:modelValue": d[0] || (d[0] = (n) => t.value = n),
            ref: (n) => S.value = n,
            value: t.value,
            type: V.value,
            name: e.name,
            id: v(i),
            disabled: e.disabled,
            readonly: e.readonly,
            placeholder: e.placeholder,
            tabindex: e.tabindex,
            autocomplete: $.value,
            min: _.value,
            max: b.value,
            step: e.step,
            onKeyup: K,
            onKeydown: A,
            onFocus: H,
            onBlur: R,
            onClick: M
          }, null, 40, he), [
            [J, t.value]
          ])
        ])) : (a(), s("div", we, [
          G(P("input", {
            "onUpdate:modelValue": d[1] || (d[1] = (n) => t.value = n),
            ref: (n) => S.value = n,
            value: t.value,
            type: V.value,
            name: e.name,
            id: v(i),
            disabled: e.disabled,
            readonly: e.readonly,
            tabindex: e.tabindex,
            autocomplete: $.value,
            min: _.value,
            max: b.value,
            step: e.step,
            onKeyup: K,
            onKeydown: A,
            onFocus: H,
            onBlur: R,
            onClick: M
          }, null, 40, _e), [
            [J, t.value]
          ])
        ])),
        D.value ? (a(), s("div", be, [
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
          l.isPassword && l.showPassword && L.value ? (a(), s("i", {
            key: 2,
            class: j(le.value),
            title: l.showPasswordMessage,
            onClick: ue
          }, null, 10, ge)) : u("", !0),
          l.reset && L.value ? (a(), s("i", {
            key: 3,
            class: "lkt-field__reset-icon",
            title: ee.value,
            onClick: x
          }, null, 8, Ve)) : u("", !0),
          l.mandatory ? (a(), s("i", {
            key: 4,
            class: "lkt-field__mandatory-icon",
            title: l.mandatoryMessage
          }, null, 8, Be)) : u("", !0),
          e.allowReadModeSwitch ? (a(), s("i", {
            key: 5,
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: U
          }, null, 8, Ee)) : u("", !0)
        ])) : u("", !0)
      ], 64)) : u("", !0),
      y.value ? u("", !0) : (a(), s("div", {
        key: 3,
        class: "lkt-field-text__read",
        onClick: M
      }, [
        v(w).value ? T(e.$slots, "value", {
          key: 0,
          value: t.value,
          title: m.value,
          data: e.slotData
        }) : ne.value ? (a(), O(q(de.value), {
          key: 1,
          value: t.value,
          title: m.value
        }, null, 8, ["value", "title"])) : (a(), s(z, { key: 2 }, [
          e.isEmail ? (a(), s("a", {
            key: 0,
            class: "lkt-field-text__read-value",
            title: m.value,
            href: "mail:" + t.value
          }, Q(t.value), 9, xe)) : e.isTel ? (a(), s("a", {
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
}), Ie = (r, h) => (c.customValueSlots[r] = h, !0), Ke = (r, h) => (c.customEditSlots[r] = h, !0), Ae = {
  install: (r) => {
    r.component("lkt-field-text") === void 0 && r.component("lkt-field-text", De);
  }
};
export {
  Ae as default,
  Ke as setTextEditSlot,
  Ie as setTextValueSlot
};
