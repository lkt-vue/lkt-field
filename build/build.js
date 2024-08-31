import Ee from "lkt-field-validation";
import { defineComponent as Me, useSlots as Ie, ref as c, computed as s, watch as E, nextTick as Y, resolveComponent as ee, openBlock as u, createElementBlock as n, normalizeClass as ae, unref as y, renderSlot as A, createCommentVNode as f, Fragment as le, createBlock as M, resolveDynamicComponent as te, withDirectives as ie, createElementVNode as R, vModelDynamic as ue, withCtx as oe, createTextVNode as se, toDisplayString as ne } from "vue";
import { generateRandomString as re, isEmail as Be } from "lkt-string-tools";
import { createLktEvent as S } from "lkt-events";
import { httpCall as Ne } from "lkt-http-client";
import { __ as de } from "lkt-i18n";
let Te = {}, Le = {};
const r = {
  defaultEmptyValueSlot: "",
  customValueSlots: Te,
  customEditSlots: Le
}, De = ["data-show-ui", "data-labeled"], Pe = ["for", "innerHTML"], Fe = {
  key: 2,
  class: "lkt-field-main"
}, Ae = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Re = {
  key: 3,
  class: "lkt-field-main"
}, Ue = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], $e = {
  key: 4,
  class: "lkt-field__state"
}, Ke = ["title"], Ze = ["title"], He = ["title"], ze = ["title"], We = ["title"], je = ["innerHTML", "title"], Oe = {
  key: 3,
  class: "lkt-field__state"
}, qe = ["title"], Ge = /* @__PURE__ */ Me({
  __name: "LktFieldText",
  props: {
    modelValue: { default: "" },
    valid: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    label: { default: "" },
    labelIcon: {},
    labelIconAtEnd: { type: Boolean },
    palette: { default: "" },
    name: { default: re(16) },
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
    maxSpecialChars: { default: void 0 }
  },
  emits: ["update:modelValue", "update:valid", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error", "validation", "validating"],
  setup(d, { expose: h, emit: fe }) {
    const v = fe, w = Ie(), e = d, m = re(16), I = c(null);
    let ve = [];
    const U = c(e.modelValue), l = c(e.modelValue), V = c(e.valid), B = c(!1), L = c(!1), D = c(!1), P = c(!1), i = c(ve), k = c(!e.readMode), me = s(() => l.value !== U.value), $ = s(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), K = s(() => {
      let a = 0;
      return e.reset && ++a, e.infoMessage && ++a, e.isPassword && e.showPassword && ++a, a;
    }), pe = s(() => e.resetMessage !== "" ? e.resetMessage : ""), ce = s(() => B.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), Z = s(() => e.autocomplete === !0 ? "on" : "off"), H = s(() => l.value !== ""), N = s(() => e.isPassword && B.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), he = s(() => {
      const a = ["lkt-field", "lkt-field-text"];
      return e.palette && a.push(`lkt-field--${e.palette}`), N && a.push(`is-${N.value}`), me.value && a.push("is-changed"), e.disabled && a.push("is-disabled"), e.mandatory && k.value && a.push("is-mandatory-field"), L.value && a.push("has-focus"), e.autoValidation && P.value && D.value && (i.value.length > 0 ? a.push("is-invalid") : a.push("is-valid")), K.value > 0 && a.push("has-icons", `has-icons-${K.value}`), a.push(V.value ? "is-valid" : "is-error"), a.push(e.modelValue ? "is-filled" : "is-empty"), a.join(" ");
    }), b = s(() => typeof l.value == "number" ? l.value.toString() : l.value), _ = s(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), x = s(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), z = s(() => {
      let a = "";
      if (e.label.startsWith("__:") ? a = de(e.label.substring(3)) : a = e.label, e.labelIcon) {
        let o = '<i class="' + e.labelIcon + '"></i>';
        e.labelIconAtEnd ? a += o : a = o + a;
      }
      return a;
    }), W = s(() => e.placeholder.startsWith("__:") ? de(e.placeholder.substring(3)) : e.placeholder), j = () => {
      Y(() => {
        I.value && I.value.focus();
      });
    }, ye = async () => {
      if (e.validationResource) {
        v("validating");
        const a = await Ne(e.validationResource, { ...e.validationResourceData, value: l.value });
        v("validation", a);
      }
    };
    E(() => e.readMode, (a) => k.value = !a), E(() => e.valid, (a) => V.value = a), E(() => e.modelValue, (a) => {
      if (e.isNumber)
        return we(a);
      l.value = a;
    }), E(l, (a) => {
      v("update:modelValue", a), ye(), T();
    }), E(V, (a) => {
      v("update:valid", a);
    });
    const T = () => {
      e.autoValidationType === "blur" && (!D.value || !P.value) || (i.value = [], Y(() => {
        let a = typeof e.min > "u" ? 0 : parseInt(e.min), o = typeof e.max > "u" ? 0 : parseInt(e.max);
        if (e.isNumber && typeof e.min < "u" && typeof e.max < "u" && (l.value < a || l.value > o)) {
          i.value.push("ko-num-between"), V.value = !1;
          return;
        }
        if (!e.isNumber && !e.isEmail && e.mandatory && l.value === "" ? i.value.push("ko-empty") : e.isEmail || a > 0 && (!e.isNumber && l.value.length < a ? i.value.push("ko-min-str") : l.value < a && i.value.push("ko-min-num")), o > 0 && (!e.isNumber && l.value.length > o ? i.value.push("ko-max-str") : l.value > o && i.value.push("ko-max-num")), e.isEmail && e.mandatory && l.value === "" ? i.value.push("ko-empty") : e.isEmail && !Be(l.value) && i.value.push("ko-email"), !e.isNumber) {
          if (typeof e.minNumbers < "u") {
            let t = parseInt(e.minNumbers);
            l.value.replace(/\D+/g, "").length < t && i.value.push("ko-min-numbers");
          }
          if (typeof e.maxNumbers < "u") {
            let t = parseInt(e.maxNumbers);
            l.value.replace(/\D+/g, "").length > t && i.value.push("ko-max-numbers");
          }
          if (typeof e.minUpperChars < "u") {
            let t = parseInt(e.minUpperChars);
            l.value.replace(/[^A-Z]+/g, "").length < t && i.value.push("ko-min-upper-chars");
          }
          if (typeof e.maxUpperChars < "u") {
            let t = parseInt(e.maxUpperChars);
            l.value.replace(/[^A-Z]+/g, "").length > t && i.value.push("ko-max-upper-chars");
          }
          if (typeof e.minLowerChars < "u") {
            let t = parseInt(e.minLowerChars);
            l.value.replace(/[A-Z]+/g, "").length < t && i.value.push("ko-min-lower-chars");
          }
          if (typeof e.maxLowerChars < "u") {
            let t = parseInt(e.maxLowerChars);
            l.value.replace(/[A-Z]+/g, "").length > t && i.value.push("ko-max-lower-chars");
          }
          if (typeof e.minChars < "u") {
            let t = parseInt(e.minChars);
            l.value.replace(/\d+/g, "").length < t && i.value.push("ko-min-chars");
          }
          if (typeof e.maxChars < "u") {
            let t = parseInt(e.maxChars);
            l.value.replace(/\d+/g, "").length > t && i.value.push("ko-max-chars");
          }
          if (typeof e.minSpecialChars < "u") {
            let t = parseInt(e.minSpecialChars);
            l.value.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < t && i.value.push("ko-min-special-chars");
          }
          if (typeof e.maxSpecialChars < "u") {
            let t = parseInt(e.maxSpecialChars);
            l.value.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > t && i.value.push("ko-max-special-chars");
          }
        }
        V.value = i.value.length === 0;
      }));
    }, F = () => l.value = U.value, ke = () => l.value, O = (a) => {
      T(), v("keyup", a, S(m, { value: l.value }));
    }, q = (a) => v("keydown", a, S(m, { value: l.value })), G = (a) => {
      P.value = !0, T(), (L.value = !0) && v("focus", a, S(m, { value: l.value }));
    }, J = (a) => {
    }, Q = (a) => {
      D.value = !0, T(), (L.value = !1) && v("blur", a, S(m, { value: l.value }));
    }, C = (a) => {
      v("click", a, S(m, { value: l.value }));
    }, be = (a) => v("click-info", a, S(m, { value: l.value })), ge = (a) => v("click-error", a, S(m, { value: l.value })), Se = (a) => B.value = !B.value, X = (a) => {
      k.value = !k.value, k.value && j();
    }, we = (a) => {
      if (!e.enableAutoNumberFix)
        return !1;
      let o = Number(a), t = !1;
      return _.value !== !1 && o < _.value && (o = _.value, t = !0), x.value !== !1 && o > x.value && (o = x.value, t = !0), t === !0 ? (l.value = o, !0) : !1;
    };
    h({
      Identifier: m,
      reset: F,
      focus: j,
      value: ke,
      isMandatory: () => e.mandatory
    }), F();
    const Ve = s(() => l.value === "" ? e.emptyValueSlot !== "" && typeof r.customValueSlots[e.emptyValueSlot] < "u" || r.defaultEmptyValueSlot && typeof r.customValueSlots[r.defaultEmptyValueSlot] < "u" : e.valueSlot !== "" && typeof r.customValueSlots[e.valueSlot] < "u"), _e = s(() => l.value === "" ? r.customValueSlots[e.emptyValueSlot] ?? r.customValueSlots[r.defaultEmptyValueSlot] : r.customValueSlots[e.valueSlot]), xe = s(() => e.editSlot !== "" && typeof r.customEditSlots[e.editSlot] < "u"), Ce = s(() => r.customEditSlots[e.editSlot]);
    return (a, o) => {
      const t = ee("lkt-anchor"), p = ee("lkt-field-validations");
      return u(), n("div", {
        class: ae(he.value),
        "data-show-ui": $.value,
        "data-labeled": !y(w).label
      }, [
        y(w).label ? A(a.$slots, "label", { key: 0 }) : f("", !0),
        !y(w).label && z.value !== "" ? (u(), n("label", {
          key: 1,
          for: y(m),
          innerHTML: z.value
        }, null, 8, Pe)) : f("", !0),
        k.value ? (u(), n(le, { key: 2 }, [
          y(w).edit ? (u(), n("div", {
            key: 0,
            onClick: C
          }, [
            A(a.$slots, "edit", {
              value: l.value,
              title: b.value,
              data: a.slotData
            })
          ])) : xe.value ? (u(), n("div", {
            key: 1,
            onClick: C
          }, [
            (u(), M(te(Ce.value), {
              value: l.value,
              title: b.value,
              data: a.slotData
            }, null, 8, ["value", "title", "data"]))
          ])) : W.value ? (u(), n("div", Fe, [
            ie(R("input", {
              "onUpdate:modelValue": o[0] || (o[0] = (g) => l.value = g),
              ref: (g) => I.value = g,
              value: l.value,
              type: N.value,
              name: a.name,
              id: y(m),
              disabled: a.disabled,
              readonly: a.readonly,
              placeholder: W.value,
              tabindex: a.tabindex,
              autocomplete: Z.value,
              min: _.value,
              max: x.value,
              step: a.step,
              onKeyup: O,
              onKeydown: q,
              onFocus: G,
              onBlur: Q,
              onClick: C,
              onChange: J
            }, null, 40, Ae), [
              [ue, l.value]
            ])
          ])) : (u(), n("div", Re, [
            ie(R("input", {
              "onUpdate:modelValue": o[1] || (o[1] = (g) => l.value = g),
              ref: (g) => I.value = g,
              value: l.value,
              type: N.value,
              name: a.name,
              id: y(m),
              disabled: a.disabled,
              readonly: a.readonly,
              tabindex: a.tabindex,
              autocomplete: Z.value,
              min: _.value,
              max: x.value,
              step: a.step,
              onKeyup: O,
              onKeydown: q,
              onFocus: G,
              onBlur: Q,
              onClick: C,
              onChange: J
            }, null, 40, Ue), [
              [ue, l.value]
            ])
          ])),
          $.value ? (u(), n("div", $e, [
            e.errorMessage ? (u(), n("i", {
              key: 0,
              class: "lkt-field__error-icon",
              title: e.errorMessage,
              onClick: ge
            }, null, 8, Ke)) : f("", !0),
            e.infoMessage ? (u(), n("i", {
              key: 1,
              class: "lkt-field__info-icon",
              title: e.infoMessage,
              onClick: be
            }, null, 8, Ze)) : f("", !0),
            e.isPassword && e.showPassword && H.value ? (u(), n("i", {
              key: 2,
              class: ae(ce.value),
              title: e.showPasswordMessage,
              onClick: Se
            }, null, 10, He)) : f("", !0),
            e.reset && H.value ? (u(), n("i", {
              key: 3,
              class: "lkt-field__reset-icon",
              title: pe.value,
              onClick: F
            }, null, 8, ze)) : f("", !0),
            a.allowReadModeSwitch ? (u(), n("i", {
              key: 4,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: X
            }, null, 8, We)) : f("", !0)
          ])) : f("", !0)
        ], 64)) : f("", !0),
        k.value ? f("", !0) : (u(), n("div", {
          key: 3,
          class: "lkt-field-text__read",
          onClick: C
        }, [
          y(w).value ? A(a.$slots, "value", {
            key: 0,
            value: l.value,
            title: b.value,
            data: a.slotData
          }) : Ve.value ? (u(), M(te(_e.value), {
            key: 1,
            value: l.value,
            title: b.value,
            data: a.slotData
          }, null, 8, ["value", "title", "data"])) : (u(), n(le, { key: 2 }, [
            a.isEmail ? (u(), M(t, {
              key: 0,
              class: "lkt-field-text__read-value",
              title: b.value,
              to: "mail:" + l.value
            }, {
              default: oe(() => [
                se(ne(l.value), 1)
              ]),
              _: 1
            }, 8, ["title", "to"])) : a.isTel ? (u(), M(t, {
              key: 1,
              class: "lkt-field-text__read-value",
              title: b.value,
              to: "tel:" + l.value
            }, {
              default: oe(() => [
                se(ne(l.value), 1)
              ]),
              _: 1
            }, 8, ["title", "to"])) : (u(), n("div", {
              key: 2,
              class: "lkt-field-text__read-value",
              innerHTML: l.value,
              title: b.value
            }, null, 8, je))
          ], 64)),
          a.allowReadModeSwitch ? (u(), n("div", Oe, [
            R("i", {
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: X
            }, null, 8, qe)
          ])) : f("", !0)
        ])),
        a.autoValidation && i.value.length > 0 ? (u(), M(p, {
          key: 4,
          items: i.value,
          stack: a.validationStack,
          min: a.min,
          max: a.max
        }, null, 8, ["items", "stack", "min", "max"])) : f("", !0)
      ], 10, De);
    };
  }
}), la = (d, h) => (r.customValueSlots[d] = h, !0), ta = (d, h) => (r.customEditSlots[d] = h, !0), ia = {
  install: (d) => {
    d.component("lkt-field-text") === void 0 && d.component("lkt-field-text", Ge), d.component("lkt-field-validations") === void 0 && d.use(Ee);
  }
}, ua = (d, h) => {
  r.defaultEmptyValueSlot = d, h && (r.customValueSlots[d] = h);
};
export {
  ia as default,
  ua as setDefaultTextEmptyValueSlot,
  ta as setTextEditSlot,
  la as setTextValueSlot
};
