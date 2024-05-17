import { defineComponent as ve, useSlots as ce, ref as h, computed as u, watch as x, openBlock as a, createElementBlock as o, normalizeClass as U, unref as m, renderSlot as C, createCommentVNode as r, Fragment as j, createBlock as z, resolveDynamicComponent as O, withDirectives as q, createElementVNode as T, vModelDynamic as G, toDisplayString as J, nextTick as me } from "vue";
import { generateRandomString as Q } from "lkt-string-tools";
import { createLktEvent as k } from "lkt-events";
import { httpCall as pe } from "lkt-http-client";
let ye = {}, ke = {};
const s = {
  defaultEmptyValueSlot: "",
  customValueSlots: ye,
  customEditSlots: ke
}, he = ["data-show-ui", "data-labeled"], Se = ["for", "innerHTML"], we = {
  key: 2,
  class: "lkt-field-text__main"
}, _e = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], be = {
  key: 3,
  class: "lkt-field-text__main"
}, Ve = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], ge = {
  key: 4,
  class: "lkt-field__state"
}, Me = ["title"], Ee = ["title"], Be = ["title"], xe = ["title"], Ce = ["title"], Te = ["title", "href"], Pe = ["title", "href"], De = ["innerHTML", "title"], Ne = {
  key: 3,
  class: "lkt-field__state"
}, Re = ["title"], Fe = /* @__PURE__ */ ve({
  __name: "LktFieldText",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: Q(16) },
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
    emptyValueSlot: { default: "" },
    valueSlot: { default: "" },
    editSlot: { default: "" },
    slotData: { default: () => ({}) },
    validationResource: { default: "" },
    validationResourceData: { default: () => ({}) }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error", "validation", "validating"],
  setup(i, { expose: c, emit: W }) {
    const f = W, S = ce(), l = i, n = Q(16), V = h(null), P = h(l.modelValue), t = h(l.modelValue), g = h(!1), E = h(!1), p = h(!l.readMode), X = u(() => typeof l.valid == "function" ? l.valid() : l.valid), Y = u(() => t.value !== P.value), D = u(() => l.reset || l.infoMessage !== "" || l.errorMessage !== "" || l.isPassword && l.showPassword), N = u(() => {
      let e = 0;
      return l.reset && ++e, l.infoMessage && ++e, l.isPassword && l.showPassword && ++e, e;
    }), Z = u(() => l.resetMessage !== "" ? l.resetMessage : ""), ee = u(() => g.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), R = u(() => l.autocomplete === !0 ? "on" : "off"), F = u(() => t.value !== ""), M = u(() => l.isPassword && g.value === !0 ? "text" : l.isEmail ? "email" : l.isPassword ? "password" : l.isNumber ? "number" : l.isTel ? "tel" : l.isSearch ? "search" : "text"), le = u(() => {
      const e = ["lkt-field", "lkt-field-text"];
      return l.palette && e.push(`lkt-field--${l.palette}`), M && e.push(`is-${M.value}`), Y.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), l.mandatory && p.value && e.push("is-mandatory-field"), E.value && e.push("has-focus"), N.value > 0 && e.push("has-icons", `has-icons-${N.value}`), e.push(X.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), y = u(() => typeof t.value == "number" ? t.value.toString() : t.value), w = u(() => typeof l.min == "string" ? parseFloat(l.min) : typeof l.min == "number" ? l.min : !1), _ = u(() => typeof l.max == "string" ? parseFloat(l.max) : typeof l.max == "number" ? l.max : !1), $ = () => {
      me(() => {
        V.value && V.value.focus();
      });
    }, te = async () => {
      if (l.validationResource) {
        f("validating");
        const e = await pe(l.validationResource, { ...l.validationResourceData, value: t.value });
        f("validation", e);
      }
    };
    x(() => l.readMode, (e) => p.value = !e), x(() => l.modelValue, (e) => {
      if (l.isNumber)
        return ie(e);
      t.value = e;
    }), x(t, (e) => {
      f("update:modelValue", e), te();
    });
    const B = () => t.value = P.value, ae = () => t.value, L = (e) => f("keyup", e, k(n, { value: t.value })), I = (e) => f("keydown", e, k(n, { value: t.value })), K = (e) => (E.value = !0) && f("focus", e, k(n, { value: t.value })), A = (e) => (E.value = !1) && f("blur", e, k(n, { value: t.value })), b = (e) => f("click", e, k(n, { value: t.value })), oe = (e) => f("click-info", e, k(n, { value: t.value })), ue = (e) => f("click-error", e, k(n, { value: t.value })), se = (e) => g.value = !g.value, H = (e) => {
      p.value = !p.value, p.value && $();
    }, ie = (e) => {
      if (!l.enableAutoNumberFix)
        return !1;
      let v = Number(e), d = !1;
      return w.value !== !1 && v < w.value && (v = w.value, d = !0), _.value !== !1 && v > _.value && (v = _.value, d = !0), d === !0 ? (t.value = v, !0) : !1;
    };
    c({
      Identifier: n,
      reset: B,
      focus: $,
      value: ae,
      isMandatory: () => l.mandatory
    }), B();
    const ne = u(() => t.value === "" ? l.emptyValueSlot !== "" && typeof s.customValueSlots[l.emptyValueSlot] < "u" || s.defaultEmptyValueSlot && typeof s.customValueSlots[s.defaultEmptyValueSlot] < "u" : l.valueSlot !== "" && typeof s.customValueSlots[l.valueSlot] < "u"), de = u(() => t.value === "" ? s.customValueSlots[l.emptyValueSlot] ?? s.customValueSlots[s.defaultEmptyValueSlot] : s.customValueSlots[l.valueSlot]), re = u(() => l.editSlot !== "" && typeof s.customEditSlots[l.editSlot] < "u"), fe = u(() => s.customEditSlots[l.editSlot]);
    return (e, v) => (a(), o("div", {
      class: U(le.value),
      "data-show-ui": D.value,
      "data-labeled": !m(S).label
    }, [
      m(S).label ? C(e.$slots, "label", { key: 0 }) : r("", !0),
      m(S).label ? r("", !0) : (a(), o("label", {
        key: 1,
        for: m(n),
        innerHTML: e.label
      }, null, 8, Se)),
      p.value ? (a(), o(j, { key: 2 }, [
        m(S).edit ? (a(), o("div", {
          key: 0,
          onClick: b
        }, [
          C(e.$slots, "edit", {
            value: t.value,
            title: y.value,
            data: e.slotData
          })
        ])) : re.value ? (a(), o("div", {
          key: 1,
          onClick: b
        }, [
          (a(), z(O(fe.value), {
            value: t.value,
            title: y.value,
            data: e.slotData
          }, null, 8, ["value", "title", "data"]))
        ])) : e.placeholder ? (a(), o("div", we, [
          q(T("input", {
            "onUpdate:modelValue": v[0] || (v[0] = (d) => t.value = d),
            ref: (d) => V.value = d,
            value: t.value,
            type: M.value,
            name: e.name,
            id: m(n),
            disabled: e.disabled,
            readonly: e.readonly,
            placeholder: e.placeholder,
            tabindex: e.tabindex,
            autocomplete: R.value,
            min: w.value,
            max: _.value,
            step: e.step,
            onKeyup: L,
            onKeydown: I,
            onFocus: K,
            onBlur: A,
            onClick: b
          }, null, 40, _e), [
            [G, t.value]
          ])
        ])) : (a(), o("div", be, [
          q(T("input", {
            "onUpdate:modelValue": v[1] || (v[1] = (d) => t.value = d),
            ref: (d) => V.value = d,
            value: t.value,
            type: M.value,
            name: e.name,
            id: m(n),
            disabled: e.disabled,
            readonly: e.readonly,
            tabindex: e.tabindex,
            autocomplete: R.value,
            min: w.value,
            max: _.value,
            step: e.step,
            onKeyup: L,
            onKeydown: I,
            onFocus: K,
            onBlur: A,
            onClick: b
          }, null, 40, Ve), [
            [G, t.value]
          ])
        ])),
        D.value ? (a(), o("div", ge, [
          l.errorMessage ? (a(), o("i", {
            key: 0,
            class: "lkt-field__error-icon",
            title: l.errorMessage,
            onClick: ue
          }, null, 8, Me)) : r("", !0),
          l.infoMessage ? (a(), o("i", {
            key: 1,
            class: "lkt-field__info-icon",
            title: l.infoMessage,
            onClick: oe
          }, null, 8, Ee)) : r("", !0),
          l.isPassword && l.showPassword && F.value ? (a(), o("i", {
            key: 2,
            class: U(ee.value),
            title: l.showPasswordMessage,
            onClick: se
          }, null, 10, Be)) : r("", !0),
          l.reset && F.value ? (a(), o("i", {
            key: 3,
            class: "lkt-field__reset-icon",
            title: Z.value,
            onClick: B
          }, null, 8, xe)) : r("", !0),
          e.allowReadModeSwitch ? (a(), o("i", {
            key: 4,
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: H
          }, null, 8, Ce)) : r("", !0)
        ])) : r("", !0)
      ], 64)) : r("", !0),
      p.value ? r("", !0) : (a(), o("div", {
        key: 3,
        class: "lkt-field-text__read",
        onClick: b
      }, [
        m(S).value ? C(e.$slots, "value", {
          key: 0,
          value: t.value,
          title: y.value,
          data: e.slotData
        }) : ne.value ? (a(), z(O(de.value), {
          key: 1,
          value: t.value,
          title: y.value
        }, null, 8, ["value", "title"])) : (a(), o(j, { key: 2 }, [
          e.isEmail ? (a(), o("a", {
            key: 0,
            class: "lkt-field-text__read-value",
            title: y.value,
            href: "mail:" + t.value
          }, J(t.value), 9, Te)) : e.isTel ? (a(), o("a", {
            key: 1,
            class: "lkt-field-text__read-value",
            title: y.value,
            href: "tel:" + t.value
          }, J(t.value), 9, Pe)) : (a(), o("div", {
            key: 2,
            class: "lkt-field-text__read-value",
            innerHTML: t.value,
            title: y.value
          }, null, 8, De))
        ], 64)),
        e.allowReadModeSwitch ? (a(), o("div", Ne, [
          T("i", {
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: H
          }, null, 8, Re)
        ])) : r("", !0)
      ]))
    ], 10, he));
  }
}), Ae = (i, c) => (s.customValueSlots[i] = c, !0), He = (i, c) => (s.customEditSlots[i] = c, !0), Ue = {
  install: (i) => {
    i.component("lkt-field-text") === void 0 && i.component("lkt-field-text", Fe);
  }
}, je = (i, c) => {
  s.defaultEmptyValueSlot = i, c && (s.customValueSlots[i] = c);
};
export {
  Ue as default,
  je as setDefaultTextEmptyValueSlot,
  He as setTextEditSlot,
  Ae as setTextValueSlot
};
