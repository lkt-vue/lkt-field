import Ee, { FieldValidation as s } from "lkt-field-validation";
import { defineComponent as Ne, useSlots as Te, ref as h, computed as n, watch as C, nextTick as ee, resolveComponent as ae, openBlock as u, createElementBlock as r, normalizeClass as le, unref as k, renderSlot as U, createCommentVNode as v, Fragment as te, createBlock as T, resolveDynamicComponent as ie, withDirectives as ue, createElementVNode as R, vModelDynamic as oe, withCtx as se, createTextVNode as ne, toDisplayString as re } from "vue";
import { generateRandomString as de, isEmail as Be } from "lkt-string-tools";
import { createLktEvent as w } from "lkt-events";
import { httpCall as Ie } from "lkt-http-client";
import { __ as fe } from "lkt-i18n";
let Le = {}, De = {};
const d = {
  defaultEmptyValueSlot: "",
  customValueSlots: Le,
  customEditSlots: De
}, Fe = ["data-show-ui", "data-labeled"], Pe = ["for", "innerHTML"], Ae = {
  key: 2,
  class: "lkt-field-main"
}, Ue = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Re = {
  key: 3,
  class: "lkt-field-main"
}, $e = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], qe = {
  key: 4,
  class: "lkt-field__state"
}, Ke = ["title"], Ze = ["title"], He = ["title"], ze = ["title"], We = ["title"], je = ["innerHTML", "title"], Oe = {
  key: 3,
  class: "lkt-field__state"
}, Ge = ["title"], Je = /* @__PURE__ */ Ne({
  __name: "LktFieldText",
  props: {
    modelValue: { default: "" },
    valid: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    label: { default: "" },
    labelIcon: {},
    labelIconAtEnd: { type: Boolean },
    palette: { default: "" },
    name: { default: de(16) },
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
    validationStack: { default: "default" },
    minNumbers: { default: void 0 },
    maxNumbers: { default: void 0 },
    minChars: { default: void 0 },
    maxChars: { default: void 0 },
    minUpperChars: { default: void 0 },
    maxUpperChars: { default: void 0 },
    minLowerChars: { default: void 0 },
    maxLowerChars: { default: void 0 },
    minSpecialChars: { default: void 0 },
    maxSpecialChars: { default: void 0 },
    checkEqualTo: { default: void 0 }
  },
  emits: ["update:modelValue", "update:valid", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error", "validation", "validating"],
  setup(f, { expose: y, emit: ve }) {
    const c = ve, V = Te(), e = f, m = de(16), B = h(null);
    let ce = [];
    const $ = h(e.modelValue), l = h(e.modelValue), _ = h(e.valid), I = h(!1), D = h(!1), F = h(!1), P = h(!1), i = h(ce), b = h(!e.readMode), me = n(() => l.value !== $.value), q = n(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), K = n(() => {
      let a = 0;
      return e.reset && ++a, e.infoMessage && ++a, e.isPassword && e.showPassword && ++a, a;
    }), pe = n(() => e.resetMessage !== "" ? e.resetMessage : ""), he = n(() => I.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), Z = n(() => e.autocomplete === !0 ? "on" : "off"), H = n(() => l.value !== ""), L = n(() => e.isPassword && I.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), ye = n(() => {
      const a = ["lkt-field", "lkt-field-text"];
      return e.palette && a.push(`lkt-field--${e.palette}`), L && a.push(`is-${L.value}`), me.value && a.push("is-changed"), e.disabled && a.push("is-disabled"), e.mandatory && b.value && a.push("is-mandatory-field"), D.value && a.push("has-focus"), e.autoValidation && P.value && F.value && (i.value.length > 0 ? a.push("is-invalid") : a.push("is-valid")), K.value > 0 && a.push("has-icons", `has-icons-${K.value}`), a.push(_.value ? "is-valid" : "is-error"), a.push(e.modelValue ? "is-filled" : "is-empty"), a.join(" ");
    }), g = n(() => typeof l.value == "number" ? l.value.toString() : l.value), M = n(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), x = n(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), z = n(() => {
      let a = "";
      if (e.label.startsWith("__:") ? a = fe(e.label.substring(3)) : a = e.label, e.labelIcon) {
        let o = '<i class="' + e.labelIcon + '"></i>';
        e.labelIconAtEnd ? a += o : a = o + a;
      }
      return a;
    }), W = n(() => e.placeholder.startsWith("__:") ? fe(e.placeholder.substring(3)) : e.placeholder), j = () => {
      ee(() => {
        B.value && B.value.focus();
      });
    }, ke = async () => {
      if (e.validationResource) {
        c("validating");
        const a = await Ie(e.validationResource, { ...e.validationResourceData, value: l.value });
        c("validation", a);
      }
    };
    C(() => e.checkEqualTo, (a) => E()), C(() => e.readMode, (a) => b.value = !a), C(() => e.valid, (a) => _.value = a), C(() => e.modelValue, (a) => {
      if (e.isNumber) return Ce(a);
      l.value = a;
    }), C(l, (a) => {
      c("update:modelValue", a), ke(), E();
    }), C(_, (a) => {
      c("update:valid", a);
    });
    const E = () => {
      e.autoValidationType === "blur" && (!F.value || !P.value) || (i.value = [], ee(() => {
        let a = typeof e.min > "u" ? 0 : parseInt(e.min), o = typeof e.max > "u" ? 0 : parseInt(e.max);
        if (e.isNumber && typeof e.min < "u" && typeof e.max < "u" && (l.value < a || l.value > o)) {
          i.value.push(s.createNumBetween(a, o, "ko")), _.value = !1;
          return;
        }
        if (!e.isNumber && !e.isEmail && e.mandatory && l.value === "" ? i.value.push(s.createEmpty("ko")) : e.isEmail || a > 0 && (!e.isNumber && l.value.length < a ? i.value.push(s.createMinStr(a, "ko")) : l.value < a && i.value.push(s.createMinNum(a, "ko"))), o > 0 && (!e.isNumber && l.value.length > o ? i.value.push(s.createMaxStr(o, "ko")) : l.value > o && i.value.push(s.createMaxNum(o, "ko"))), e.isEmail && e.mandatory && l.value === "" ? i.value.push(s.createEmpty("ko")) : e.isEmail && !Be(l.value) && i.value.push(s.createEmail("ko")), !e.isNumber) {
          if (typeof e.minNumbers < "u") {
            let t = parseInt(e.minNumbers);
            l.value.replace(/\D+/g, "").length < t && i.value.push(s.createMinNumbers(t, "ko"));
          }
          if (typeof e.maxNumbers < "u") {
            let t = parseInt(e.maxNumbers);
            l.value.replace(/\D+/g, "").length > t && i.value.push(s.createMaxNumbers(t, "ko"));
          }
          if (typeof e.minUpperChars < "u") {
            let t = parseInt(e.minUpperChars);
            l.value.replace(/[^A-Z]+/g, "").length < t && i.value.push(s.createMinUpperChars(t, "ko"));
          }
          if (typeof e.maxUpperChars < "u") {
            let t = parseInt(e.maxUpperChars);
            l.value.replace(/[^A-Z]+/g, "").length > t && i.value.push(s.createMaxUpperChars(t, "ko"));
          }
          if (typeof e.minLowerChars < "u") {
            let t = parseInt(e.minLowerChars);
            l.value.replace(/[A-Z]+/g, "").length < t && i.value.push(s.createMinLowerChars(t, "ko"));
          }
          if (typeof e.maxLowerChars < "u") {
            let t = parseInt(e.maxLowerChars);
            l.value.replace(/[A-Z]+/g, "").length > t && i.value.push(s.createMaxLowerChars(t, "ko"));
          }
          if (typeof e.minChars < "u") {
            let t = parseInt(e.minChars);
            l.value.replace(/\d+/g, "").length < t && i.value.push(s.createMinChars(t, "ko"));
          }
          if (typeof e.maxChars < "u") {
            let t = parseInt(e.maxChars);
            l.value.replace(/\d+/g, "").length > t && i.value.push(s.createMaxChars(t, "ko"));
          }
          if (typeof e.minSpecialChars < "u") {
            let t = parseInt(e.minSpecialChars);
            l.value.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < t && i.value.push(s.createMinSpecialChars(t, "ko"));
          }
          if (typeof e.maxSpecialChars < "u") {
            let t = parseInt(e.maxSpecialChars);
            l.value.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > t && i.value.push(s.createMaxSpecialChars(t, "ko"));
          }
        }
        e.checkEqualTo && l.value !== e.checkEqualTo && i.value.push(s.createEqualTo(e.checkEqualTo, "ko")), _.value = i.value.length === 0;
      }));
    }, A = () => l.value = $.value, be = () => l.value, O = (a) => {
      E(), c("keyup", a, w(m, { value: l.value }));
    }, G = (a) => c("keydown", a, w(m, { value: l.value })), J = (a) => {
      P.value = !0, E(), (D.value = !0) && c("focus", a, w(m, { value: l.value }));
    }, Q = (a) => {
    }, X = (a) => {
      F.value = !0, E(), (D.value = !1) && c("blur", a, w(m, { value: l.value }));
    }, N = (a) => {
      c("click", a, w(m, { value: l.value }));
    }, ge = (a) => c("click-info", a, w(m, { value: l.value })), Se = (a) => c("click-error", a, w(m, { value: l.value })), we = (a) => I.value = !I.value, Y = (a) => {
      b.value = !b.value, b.value && j();
    }, Ce = (a) => {
      if (!e.enableAutoNumberFix) return !1;
      let o = Number(a), t = !1;
      return M.value !== !1 && o < M.value && (o = M.value, t = !0), x.value !== !1 && o > x.value && (o = x.value, t = !0), t === !0 ? (l.value = o, !0) : !1;
    };
    y({
      Identifier: m,
      reset: A,
      focus: j,
      value: be,
      isMandatory: () => e.mandatory
    }), A();
    const Ve = n(() => l.value === "" ? e.emptyValueSlot !== "" && typeof d.customValueSlots[e.emptyValueSlot] < "u" || d.defaultEmptyValueSlot && typeof d.customValueSlots[d.defaultEmptyValueSlot] < "u" : e.valueSlot !== "" && typeof d.customValueSlots[e.valueSlot] < "u"), _e = n(() => l.value === "" ? d.customValueSlots[e.emptyValueSlot] ?? d.customValueSlots[d.defaultEmptyValueSlot] : d.customValueSlots[e.valueSlot]), Me = n(() => e.editSlot !== "" && typeof d.customEditSlots[e.editSlot] < "u"), xe = n(() => d.customEditSlots[e.editSlot]);
    return (a, o) => {
      const t = ae("lkt-anchor"), p = ae("lkt-field-validations");
      return u(), r("div", {
        class: le(ye.value),
        "data-show-ui": q.value,
        "data-labeled": !k(V).label
      }, [
        k(V).label ? U(a.$slots, "label", { key: 0 }) : v("", !0),
        !k(V).label && z.value !== "" ? (u(), r("label", {
          key: 1,
          for: k(m),
          innerHTML: z.value
        }, null, 8, Pe)) : v("", !0),
        b.value ? (u(), r(te, { key: 2 }, [
          k(V).edit ? (u(), r("div", {
            key: 0,
            onClick: N
          }, [
            U(a.$slots, "edit", {
              value: l.value,
              title: g.value,
              data: a.slotData
            })
          ])) : Me.value ? (u(), r("div", {
            key: 1,
            onClick: N
          }, [
            (u(), T(ie(xe.value), {
              value: l.value,
              title: g.value,
              data: a.slotData
            }, null, 8, ["value", "title", "data"]))
          ])) : W.value ? (u(), r("div", Ae, [
            ue(R("input", {
              "onUpdate:modelValue": o[0] || (o[0] = (S) => l.value = S),
              ref: (S) => B.value = S,
              value: l.value,
              type: L.value,
              name: a.name,
              id: k(m),
              disabled: a.disabled,
              readonly: a.readonly,
              placeholder: W.value,
              tabindex: a.tabindex,
              autocomplete: Z.value,
              min: M.value,
              max: x.value,
              step: a.step,
              onKeyup: O,
              onKeydown: G,
              onFocus: J,
              onBlur: X,
              onClick: N,
              onChange: Q
            }, null, 40, Ue), [
              [oe, l.value]
            ])
          ])) : (u(), r("div", Re, [
            ue(R("input", {
              "onUpdate:modelValue": o[1] || (o[1] = (S) => l.value = S),
              ref: (S) => B.value = S,
              value: l.value,
              type: L.value,
              name: a.name,
              id: k(m),
              disabled: a.disabled,
              readonly: a.readonly,
              tabindex: a.tabindex,
              autocomplete: Z.value,
              min: M.value,
              max: x.value,
              step: a.step,
              onKeyup: O,
              onKeydown: G,
              onFocus: J,
              onBlur: X,
              onClick: N,
              onChange: Q
            }, null, 40, $e), [
              [oe, l.value]
            ])
          ])),
          q.value ? (u(), r("div", qe, [
            e.errorMessage ? (u(), r("i", {
              key: 0,
              class: "lkt-field__error-icon",
              title: e.errorMessage,
              onClick: Se
            }, null, 8, Ke)) : v("", !0),
            e.infoMessage ? (u(), r("i", {
              key: 1,
              class: "lkt-field__info-icon",
              title: e.infoMessage,
              onClick: ge
            }, null, 8, Ze)) : v("", !0),
            e.isPassword && e.showPassword && H.value ? (u(), r("i", {
              key: 2,
              class: le(he.value),
              title: e.showPasswordMessage,
              onClick: we
            }, null, 10, He)) : v("", !0),
            e.reset && H.value ? (u(), r("i", {
              key: 3,
              class: "lkt-field__reset-icon",
              title: pe.value,
              onClick: A
            }, null, 8, ze)) : v("", !0),
            a.allowReadModeSwitch ? (u(), r("i", {
              key: 4,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: Y
            }, null, 8, We)) : v("", !0)
          ])) : v("", !0)
        ], 64)) : v("", !0),
        b.value ? v("", !0) : (u(), r("div", {
          key: 3,
          class: "lkt-field-text__read",
          onClick: N
        }, [
          k(V).value ? U(a.$slots, "value", {
            key: 0,
            value: l.value,
            title: g.value,
            data: a.slotData
          }) : Ve.value ? (u(), T(ie(_e.value), {
            key: 1,
            value: l.value,
            title: g.value,
            data: a.slotData
          }, null, 8, ["value", "title", "data"])) : (u(), r(te, { key: 2 }, [
            a.isEmail ? (u(), T(t, {
              key: 0,
              class: "lkt-field-text__read-value",
              title: g.value,
              to: "mail:" + l.value
            }, {
              default: se(() => [
                ne(re(l.value), 1)
              ]),
              _: 1
            }, 8, ["title", "to"])) : a.isTel ? (u(), T(t, {
              key: 1,
              class: "lkt-field-text__read-value",
              title: g.value,
              to: "tel:" + l.value
            }, {
              default: se(() => [
                ne(re(l.value), 1)
              ]),
              _: 1
            }, 8, ["title", "to"])) : (u(), r("div", {
              key: 2,
              class: "lkt-field-text__read-value",
              innerHTML: l.value,
              title: g.value
            }, null, 8, je))
          ], 64)),
          a.allowReadModeSwitch ? (u(), r("div", Oe, [
            R("i", {
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: Y
            }, null, 8, Ge)
          ])) : v("", !0)
        ])),
        a.autoValidation && i.value.length > 0 ? (u(), T(p, {
          key: 4,
          items: i.value,
          stack: a.validationStack,
          min: a.min,
          max: a.max
        }, null, 8, ["items", "stack", "min", "max"])) : v("", !0)
      ], 10, Fe);
    };
  }
}), ta = (f, y) => (d.customValueSlots[f] = y, !0), ia = (f, y) => (d.customEditSlots[f] = y, !0), ua = {
  install: (f) => {
    f.component("lkt-field-text") === void 0 && f.component("lkt-field-text", Je), f.component("lkt-field-validations") === void 0 && f.use(Ee);
  }
}, oa = (f, y) => {
  d.defaultEmptyValueSlot = f, y && (d.customValueSlots[f] = y);
};
export {
  ua as default,
  oa as setDefaultTextEmptyValueSlot,
  ia as setTextEditSlot,
  ta as setTextValueSlot
};
