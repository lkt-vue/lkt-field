import xe from "lkt-field-validation";
import { defineComponent as Be, useSlots as Ce, ref as m, computed as u, watch as F, nextTick as X, resolveComponent as Y, openBlock as a, createElementBlock as o, normalizeClass as Z, unref as p, renderSlot as L, createCommentVNode as r, Fragment as ee, createBlock as M, resolveDynamicComponent as le, withDirectives as te, createElementVNode as R, vModelDynamic as ae, withCtx as ue, createTextVNode as oe, toDisplayString as ie } from "vue";
import { generateRandomString as se, isEmail as Te } from "lkt-string-tools";
import { createLktEvent as b } from "lkt-events";
import { httpCall as Ne } from "lkt-http-client";
import { __ as ne } from "lkt-i18n";
let Pe = {}, De = {};
const s = {
  defaultEmptyValueSlot: "",
  customValueSlots: Pe,
  customEditSlots: De
}, Fe = ["data-show-ui", "data-labeled"], Le = ["for", "innerHTML"], Re = {
  key: 2,
  class: "lkt-field-main"
}, $e = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Ie = {
  key: 3,
  class: "lkt-field-main"
}, Ke = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], Ae = {
  key: 4,
  class: "lkt-field__state"
}, He = ["title"], Ue = ["title"], We = ["title"], je = ["title"], ze = ["title"], Oe = ["innerHTML", "title"], qe = {
  key: 3,
  class: "lkt-field__state"
}, Ge = ["title"], Je = /* @__PURE__ */ Be({
  __name: "LktFieldText",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: se(16) },
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
    validationResourceData: { default: () => ({}) },
    autoValidation: { type: Boolean, default: !1 },
    autoValidationType: { default: "blur" },
    validationStack: { default: "default" }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error", "validation", "validating"],
  setup(n, { expose: c, emit: de }) {
    const v = de, V = Ce(), e = n, f = se(16), E = m(null);
    let re = [];
    const $ = m(e.modelValue), t = m(e.modelValue), x = m(!1), T = m(!1), N = m(!1), P = m(!1), d = m(re), y = m(!e.readMode), fe = u(() => typeof e.valid == "function" ? e.valid() : e.valid), ve = u(() => t.value !== $.value), I = u(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), K = u(() => {
      let l = 0;
      return e.reset && ++l, e.infoMessage && ++l, e.isPassword && e.showPassword && ++l, l;
    }), me = u(() => e.resetMessage !== "" ? e.resetMessage : ""), ce = u(() => x.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), A = u(() => e.autocomplete === !0 ? "on" : "off"), H = u(() => t.value !== ""), B = u(() => e.isPassword && x.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), pe = u(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), B && l.push(`is-${B.value}`), ve.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), e.mandatory && y.value && l.push("is-mandatory-field"), T.value && l.push("has-focus"), e.autoValidation && P.value && N.value && (d.value.length > 0 ? l.push("is-invalid") : l.push("is-valid")), K.value > 0 && l.push("has-icons", `has-icons-${K.value}`), l.push(fe.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty"), l.join(" ");
    }), k = u(() => typeof t.value == "number" ? t.value.toString() : t.value), w = u(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), _ = u(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), U = u(() => e.label.startsWith("__:") ? ne(e.label.substring(3)) : e.label), W = u(() => e.placeholder.startsWith("__:") ? ne(e.placeholder.substring(3)) : e.placeholder), j = () => {
      X(() => {
        E.value && E.value.focus();
      });
    }, ye = async () => {
      if (e.validationResource) {
        v("validating");
        const l = await Ne(e.validationResource, { ...e.validationResourceData, value: t.value });
        v("validation", l);
      }
    };
    F(() => e.readMode, (l) => y.value = !l), F(() => e.modelValue, (l) => {
      if (e.isNumber)
        return Ve(l);
      t.value = l;
    }), F(t, (l) => {
      v("update:modelValue", l), ye(), C();
    });
    const C = () => {
      e.autoValidationType === "blur" && (!N.value || !P.value) || (d.value = [], X(() => {
        let l = Number(e.min), i = Number(e.max);
        if (e.isNumber && typeof e.min < "u" && typeof e.max < "u" && (t.value < l || t.value > i)) {
          d.value.push("ko-num-between");
          return;
        }
        !e.isNumber && !e.isEmail && e.mandatory && t.value === "" ? d.value.push("ko-empty") : e.isEmail || l > 0 && (!e.isNumber && t.value.length < l ? d.value.push("ko-min-str") : t.value < l && d.value.push("ko-min-num")), i > 0 && (!e.isNumber && t.value.length > i ? d.value.push("ko-max-str") : t.value > i && d.value.push("ko-max-num")), e.isEmail && e.mandatory && t.value === "" ? d.value.push("ko-empty") : e.isEmail && !Te(t.value) && d.value.push("ko-email");
      }));
    }, D = () => t.value = $.value, ke = () => t.value, z = (l) => {
      C(), v("keyup", l, b(f, { value: t.value }));
    }, O = (l) => v("keydown", l, b(f, { value: t.value })), q = (l) => {
      P.value = !0, C(), (T.value = !0) && v("focus", l, b(f, { value: t.value }));
    }, G = (l) => {
    }, J = (l) => {
      N.value = !0, C(), (T.value = !1) && v("blur", l, b(f, { value: t.value }));
    }, g = (l) => {
      v("click", l, b(f, { value: t.value }));
    }, he = (l) => v("click-info", l, b(f, { value: t.value })), be = (l) => v("click-error", l, b(f, { value: t.value })), Se = (l) => x.value = !x.value, Q = (l) => {
      y.value = !y.value, y.value && j();
    }, Ve = (l) => {
      if (!e.enableAutoNumberFix)
        return !1;
      let i = Number(l), S = !1;
      return w.value !== !1 && i < w.value && (i = w.value, S = !0), _.value !== !1 && i > _.value && (i = _.value, S = !0), S === !0 ? (t.value = i, !0) : !1;
    };
    c({
      Identifier: f,
      reset: D,
      focus: j,
      value: ke,
      isMandatory: () => e.mandatory
    }), D();
    const we = u(() => t.value === "" ? e.emptyValueSlot !== "" && typeof s.customValueSlots[e.emptyValueSlot] < "u" || s.defaultEmptyValueSlot && typeof s.customValueSlots[s.defaultEmptyValueSlot] < "u" : e.valueSlot !== "" && typeof s.customValueSlots[e.valueSlot] < "u"), _e = u(() => t.value === "" ? s.customValueSlots[e.emptyValueSlot] ?? s.customValueSlots[s.defaultEmptyValueSlot] : s.customValueSlots[e.valueSlot]), ge = u(() => e.editSlot !== "" && typeof s.customEditSlots[e.editSlot] < "u"), Me = u(() => s.customEditSlots[e.editSlot]);
    return (l, i) => {
      const S = Y("lkt-anchor"), Ee = Y("lkt-field-validations");
      return a(), o("div", {
        class: Z(pe.value),
        "data-show-ui": I.value,
        "data-labeled": !p(V).label
      }, [
        p(V).label ? L(l.$slots, "label", { key: 0 }) : r("", !0),
        !p(V).label && U.value !== "" ? (a(), o("label", {
          key: 1,
          for: p(f),
          innerHTML: U.value
        }, null, 8, Le)) : r("", !0),
        y.value ? (a(), o(ee, { key: 2 }, [
          p(V).edit ? (a(), o("div", {
            key: 0,
            onClick: g
          }, [
            L(l.$slots, "edit", {
              value: t.value,
              title: k.value,
              data: l.slotData
            })
          ])) : ge.value ? (a(), o("div", {
            key: 1,
            onClick: g
          }, [
            (a(), M(le(Me.value), {
              value: t.value,
              title: k.value,
              data: l.slotData
            }, null, 8, ["value", "title", "data"]))
          ])) : W.value ? (a(), o("div", Re, [
            te(R("input", {
              "onUpdate:modelValue": i[0] || (i[0] = (h) => t.value = h),
              ref: (h) => E.value = h,
              value: t.value,
              type: B.value,
              name: l.name,
              id: p(f),
              disabled: l.disabled,
              readonly: l.readonly,
              placeholder: W.value,
              tabindex: l.tabindex,
              autocomplete: A.value,
              min: w.value,
              max: _.value,
              step: l.step,
              onKeyup: z,
              onKeydown: O,
              onFocus: q,
              onBlur: J,
              onClick: g,
              onChange: G
            }, null, 40, $e), [
              [ae, t.value]
            ])
          ])) : (a(), o("div", Ie, [
            te(R("input", {
              "onUpdate:modelValue": i[1] || (i[1] = (h) => t.value = h),
              ref: (h) => E.value = h,
              value: t.value,
              type: B.value,
              name: l.name,
              id: p(f),
              disabled: l.disabled,
              readonly: l.readonly,
              tabindex: l.tabindex,
              autocomplete: A.value,
              min: w.value,
              max: _.value,
              step: l.step,
              onKeyup: z,
              onKeydown: O,
              onFocus: q,
              onBlur: J,
              onClick: g,
              onChange: G
            }, null, 40, Ke), [
              [ae, t.value]
            ])
          ])),
          I.value ? (a(), o("div", Ae, [
            e.errorMessage ? (a(), o("i", {
              key: 0,
              class: "lkt-field__error-icon",
              title: e.errorMessage,
              onClick: be
            }, null, 8, He)) : r("", !0),
            e.infoMessage ? (a(), o("i", {
              key: 1,
              class: "lkt-field__info-icon",
              title: e.infoMessage,
              onClick: he
            }, null, 8, Ue)) : r("", !0),
            e.isPassword && e.showPassword && H.value ? (a(), o("i", {
              key: 2,
              class: Z(ce.value),
              title: e.showPasswordMessage,
              onClick: Se
            }, null, 10, We)) : r("", !0),
            e.reset && H.value ? (a(), o("i", {
              key: 3,
              class: "lkt-field__reset-icon",
              title: me.value,
              onClick: D
            }, null, 8, je)) : r("", !0),
            l.allowReadModeSwitch ? (a(), o("i", {
              key: 4,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: Q
            }, null, 8, ze)) : r("", !0)
          ])) : r("", !0)
        ], 64)) : r("", !0),
        y.value ? r("", !0) : (a(), o("div", {
          key: 3,
          class: "lkt-field-text__read",
          onClick: g
        }, [
          p(V).value ? L(l.$slots, "value", {
            key: 0,
            value: t.value,
            title: k.value,
            data: l.slotData
          }) : we.value ? (a(), M(le(_e.value), {
            key: 1,
            value: t.value,
            title: k.value,
            data: l.slotData
          }, null, 8, ["value", "title", "data"])) : (a(), o(ee, { key: 2 }, [
            l.isEmail ? (a(), M(S, {
              key: 0,
              class: "lkt-field-text__read-value",
              title: k.value,
              to: "mail:" + t.value
            }, {
              default: ue(() => [
                oe(ie(t.value), 1)
              ]),
              _: 1
            }, 8, ["title", "to"])) : l.isTel ? (a(), M(S, {
              key: 1,
              class: "lkt-field-text__read-value",
              title: k.value,
              to: "tel:" + t.value
            }, {
              default: ue(() => [
                oe(ie(t.value), 1)
              ]),
              _: 1
            }, 8, ["title", "to"])) : (a(), o("div", {
              key: 2,
              class: "lkt-field-text__read-value",
              innerHTML: t.value,
              title: k.value
            }, null, 8, Oe))
          ], 64)),
          l.allowReadModeSwitch ? (a(), o("div", qe, [
            R("i", {
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: Q
            }, null, 8, Ge)
          ])) : r("", !0)
        ])),
        l.autoValidation && d.value.length > 0 ? (a(), M(Ee, {
          key: 4,
          items: d.value,
          stack: l.validationStack,
          min: l.min,
          max: l.max
        }, null, 8, ["items", "stack", "min", "max"])) : r("", !0)
      ], 10, Fe);
    };
  }
}), tl = (n, c) => (s.customValueSlots[n] = c, !0), al = (n, c) => (s.customEditSlots[n] = c, !0), ul = {
  install: (n) => {
    n.component("lkt-field-text") === void 0 && n.component("lkt-field-text", Je), n.component("lkt-field-validations") === void 0 && n.use(xe);
  }
}, ol = (n, c) => {
  s.defaultEmptyValueSlot = n, c && (s.customValueSlots[n] = c);
};
export {
  ul as default,
  ol as setDefaultTextEmptyValueSlot,
  al as setTextEditSlot,
  tl as setTextValueSlot
};
