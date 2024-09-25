import Pe, { FieldValidation as s } from "lkt-field-validation";
import { defineComponent as De, useSlots as Ae, ref as c, computed as n, watch as C, nextTick as W, resolveComponent as se, openBlock as o, createElementBlock as r, normalizeClass as ne, unref as k, renderSlot as j, createCommentVNode as h, Fragment as re, createBlock as D, resolveDynamicComponent as de, createElementVNode as _, normalizeStyle as Fe, toDisplayString as O, withDirectives as F, vModelDynamic as G, vModelText as Ue, withCtx as fe, createTextVNode as ve } from "vue";
import { generateRandomString as pe, isEmail as Re } from "lkt-string-tools";
import { createLktEvent as x } from "lkt-events";
import { httpCall as $e } from "lkt-http-client";
import { __ as me } from "lkt-i18n";
let qe = {}, Ke = {};
const f = {
  defaultEmptyValueSlot: "",
  customValueSlots: qe,
  customEditSlots: Ke
}, Ze = ["data-show-ui", "data-labeled"], ze = ["for", "innerHTML"], He = {
  key: 2,
  class: "lkt-field-main"
}, We = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete"], je = {
  key: 3,
  class: "lkt-field-main"
}, Oe = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Ge = {
  key: 4,
  class: "lkt-field-main"
}, Je = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], Qe = {
  key: 5,
  class: "lkt-field__state"
}, Xe = ["title"], Ye = ["title"], ea = ["title"], aa = ["title"], la = ["title"], ta = ["innerHTML", "title"], ia = {
  key: 3,
  class: "lkt-field__state"
}, ua = ["title"], oa = /* @__PURE__ */ De({
  __name: "LktFieldText",
  props: {
    modelValue: { default: "" },
    valid: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    label: { default: "" },
    labelIcon: {},
    labelIconAtEnd: { type: Boolean },
    palette: { default: "" },
    name: { default: pe(16) },
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
    isColor: { type: Boolean },
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
  setup(p, { expose: b, emit: ce }) {
    const y = ce, E = Ae(), e = p, m = pe(16), S = c(null);
    let he = [];
    const ye = (a) => (e.isColor && (a.length === 9 ? (g.value = a.substring(1, 7), M.value = parseInt(+("0x" + a.substring(7, 9)), 10)) : a.length === 7 && (g.value = a.substring(1, 7))), a), J = c(e.modelValue), l = c(ye(e.modelValue)), g = c(""), M = c(255), N = c(e.valid), A = c(!1), U = c(!1), R = c(!1), $ = c(!1), u = c(he), w = c(!e.readMode), ke = n(() => l.value !== J.value), Q = n(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), X = n(() => {
      let a = 0;
      return e.reset && ++a, e.infoMessage && ++a, e.isPassword && e.showPassword && ++a, a;
    }), be = n(() => e.resetMessage !== "" ? e.resetMessage : ""), ge = n(() => A.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), q = n(() => e.autocomplete === !0 ? "on" : "off"), Y = n(() => l.value !== ""), I = n(() => e.isPassword && A.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : e.isColor ? "color" : "text"), Ce = n(() => {
      const a = ["lkt-field", "lkt-field-text"];
      return e.palette && a.push(`lkt-field--${e.palette}`), I && a.push(`is-${I.value}`), ke.value && a.push("is-changed"), e.disabled && a.push("is-disabled"), e.mandatory && w.value && a.push("is-mandatory-field"), U.value && a.push("has-focus"), e.autoValidation && $.value && R.value && (u.value.length > 0 ? a.push("is-invalid") : a.push("is-valid")), X.value > 0 && a.push("has-icons", `has-icons-${X.value}`), a.push(N.value ? "is-valid" : "is-error"), a.push(e.modelValue ? "is-filled" : "is-empty"), a.join(" ");
    }), V = n(() => typeof l.value == "number" ? l.value.toString() : l.value), T = n(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), B = n(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), ee = n(() => {
      let a = "";
      if (e.label.startsWith("__:") ? a = me(e.label.substring(3)) : a = e.label, e.labelIcon) {
        let i = '<i class="' + e.labelIcon + '"></i>';
        e.labelIconAtEnd ? a += i : a = i + a;
      }
      return a;
    }), ae = n(() => e.placeholder.startsWith("__:") ? me(e.placeholder.substring(3)) : e.placeholder), le = () => {
      W(() => {
        S.value && S.value.focus();
      });
    }, Se = () => {
      W(() => {
        S.value && S.value.click();
      });
    }, we = async () => {
      if (e.validationResource) {
        y("validating");
        const a = await $e(e.validationResource, {
          ...e.validationResourceData,
          value: l.value
        });
        y("validation", a);
      }
    };
    C(() => e.checkEqualTo, (a) => L()), C(() => e.readMode, (a) => w.value = !a), C(() => e.valid, (a) => N.value = a), C(() => e.modelValue, (a) => {
      if (e.isNumber) return Ee(a);
      l.value = a;
    }), C(l, (a) => {
      y("update:modelValue", a), we(), L();
    }), C(N, (a) => {
      y("update:valid", a);
    });
    const L = () => {
      e.autoValidationType === "blur" && (!R.value || !$.value) || (u.value = [], W(() => {
        let a = typeof e.min > "u" ? 0 : parseInt(e.min), i = typeof e.max > "u" ? 0 : parseInt(e.max);
        if (e.isNumber && typeof e.min < "u" && typeof e.max < "u" && (l.value < a || l.value > i)) {
          u.value.push(s.createNumBetween(a, i, "ko")), N.value = !1;
          return;
        }
        if (!e.isNumber && !e.isEmail && e.mandatory && l.value === "" ? u.value.push(s.createEmpty("ko")) : e.isEmail || a > 0 && (!e.isNumber && l.value.length < a ? u.value.push(s.createMinStr(a, "ko")) : l.value < a && u.value.push(s.createMinNum(a, "ko"))), i > 0 && (!e.isNumber && l.value.length > i ? u.value.push(s.createMaxStr(i, "ko")) : l.value > i && u.value.push(s.createMaxNum(i, "ko"))), e.isEmail && e.mandatory && l.value === "" ? u.value.push(s.createEmpty("ko")) : e.isEmail && !Re(l.value) && u.value.push(s.createEmail("ko")), !e.isNumber) {
          if (typeof e.minNumbers < "u") {
            let t = parseInt(e.minNumbers);
            l.value.replace(/\D+/g, "").length < t && u.value.push(s.createMinNumbers(t, "ko"));
          }
          if (typeof e.maxNumbers < "u") {
            let t = parseInt(e.maxNumbers);
            l.value.replace(/\D+/g, "").length > t && u.value.push(s.createMaxNumbers(t, "ko"));
          }
          if (typeof e.minUpperChars < "u") {
            let t = parseInt(e.minUpperChars);
            l.value.replace(/[^A-Z]+/g, "").length < t && u.value.push(s.createMinUpperChars(t, "ko"));
          }
          if (typeof e.maxUpperChars < "u") {
            let t = parseInt(e.maxUpperChars);
            l.value.replace(/[^A-Z]+/g, "").length > t && u.value.push(s.createMaxUpperChars(t, "ko"));
          }
          if (typeof e.minLowerChars < "u") {
            let t = parseInt(e.minLowerChars);
            l.value.replace(/[A-Z]+/g, "").length < t && u.value.push(s.createMinLowerChars(t, "ko"));
          }
          if (typeof e.maxLowerChars < "u") {
            let t = parseInt(e.maxLowerChars);
            l.value.replace(/[A-Z]+/g, "").length > t && u.value.push(s.createMaxLowerChars(t, "ko"));
          }
          if (typeof e.minChars < "u") {
            let t = parseInt(e.minChars);
            l.value.replace(/\d+/g, "").length < t && u.value.push(s.createMinChars(t, "ko"));
          }
          if (typeof e.maxChars < "u") {
            let t = parseInt(e.maxChars);
            l.value.replace(/\d+/g, "").length > t && u.value.push(s.createMaxChars(t, "ko"));
          }
          if (typeof e.minSpecialChars < "u") {
            let t = parseInt(e.minSpecialChars);
            l.value.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < t && u.value.push(s.createMinSpecialChars(t, "ko"));
          }
          if (typeof e.maxSpecialChars < "u") {
            let t = parseInt(e.maxSpecialChars);
            l.value.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > t && u.value.push(s.createMaxSpecialChars(t, "ko"));
          }
        }
        e.checkEqualTo && l.value !== e.checkEqualTo && u.value.push(s.createEqualTo(e.checkEqualTo, "ko")), N.value = u.value.length === 0;
      }));
    }, K = () => l.value = J.value, Ve = () => l.value, te = (a) => {
      L(), y("keyup", a, x(m, { value: l.value }));
    }, ie = (a) => y("keydown", a, x(m, { value: l.value })), Z = (a) => {
      $.value = !0, L(), (U.value = !0) && y("focus", a, x(m, { value: l.value }));
    }, z = (a) => {
    }, H = (a) => {
      R.value = !0, L(), (U.value = !1) && y("blur", a, x(m, { value: l.value }));
    }, P = (a) => {
      y("click", a, x(m, { value: l.value }));
    }, xe = (a) => y("click-info", a, x(m, { value: l.value })), Me = (a) => y("click-error", a, x(m, { value: l.value })), _e = (a) => A.value = !A.value, ue = (a) => {
      w.value = !w.value, w.value && le();
    }, Ee = (a) => {
      if (!e.enableAutoNumberFix) return !1;
      let i = Number(a), t = !1;
      return T.value !== !1 && i < T.value && (i = T.value, t = !0), B.value !== !1 && i > B.value && (i = B.value, t = !0), t === !0 ? (l.value = i, !0) : !1;
    };
    b({
      Identifier: m,
      reset: K,
      focus: le,
      value: Ve,
      isMandatory: () => e.mandatory
    }), K();
    const Ne = n(() => l.value === "" ? e.emptyValueSlot !== "" && typeof f.customValueSlots[e.emptyValueSlot] < "u" || f.defaultEmptyValueSlot && typeof f.customValueSlots[f.defaultEmptyValueSlot] < "u" : e.valueSlot !== "" && typeof f.customValueSlots[e.valueSlot] < "u"), Ie = n(() => l.value === "" ? f.customValueSlots[e.emptyValueSlot] ?? f.customValueSlots[f.defaultEmptyValueSlot] : f.customValueSlots[e.valueSlot]), Te = n(() => e.editSlot !== "" && typeof f.customEditSlots[e.editSlot] < "u"), Be = n(() => f.customEditSlots[e.editSlot]), oe = (a, i) => {
      if (a === "") return "";
      if (i == 255)
        return a;
      let t = parseInt(i).toString(16).padStart(2, "0");
      return a + t;
    }, Le = n(() => {
      if (!e.isColor) return "";
      let a = g.value, i = a.substring(1, 3), t = a.substring(3, 5), d = a.substring(5, 7);
      return i = parseInt(+("0x" + i), 10), t = parseInt(+("0x" + t), 10), d = parseInt(+("0x" + d), 10), (0.299 * i + 0.587 * t + 0.114 * d) / M.value > 0.5 ? "#000000" : "#ffffff";
    });
    return C(g, (a) => {
      l.value = oe(a, M.value);
    }), C(M, (a) => {
      l.value = oe(g.value, a);
    }), (a, i) => {
      const t = se("lkt-anchor"), d = se("lkt-field-validations");
      return o(), r("div", {
        class: ne(Ce.value),
        "data-show-ui": Q.value,
        "data-labeled": !k(E).label
      }, [
        k(E).label ? j(a.$slots, "label", { key: 0 }) : h("", !0),
        !k(E).label && ee.value !== "" ? (o(), r("label", {
          key: 1,
          for: k(m),
          innerHTML: ee.value
        }, null, 8, ze)) : h("", !0),
        w.value ? (o(), r(re, { key: 2 }, [
          k(E).edit ? (o(), r("div", {
            key: 0,
            onClick: P
          }, [
            j(a.$slots, "edit", {
              value: l.value,
              title: V.value,
              data: a.slotData
            })
          ])) : Te.value ? (o(), r("div", {
            key: 1,
            onClick: P
          }, [
            (o(), D(de(Be.value), {
              value: l.value,
              title: V.value,
              data: a.slotData
            }, null, 8, ["value", "title", "data"]))
          ])) : a.isColor ? (o(), r("div", He, [
            _("div", {
              class: "lkt-field-color-view",
              style: Fe("background: " + l.value + "; color: " + Le.value),
              onClick: Se
            }, O(l.value), 5),
            F(_("input", {
              "onUpdate:modelValue": i[0] || (i[0] = (v) => g.value = v),
              ref: (v) => S.value = v,
              value: g.value,
              type: I.value,
              name: a.name,
              id: k(m),
              disabled: a.disabled,
              readonly: a.readonly,
              tabindex: a.tabindex,
              autocomplete: q.value,
              onFocus: Z,
              onBlur: H,
              onChange: z,
              style: { height: "100%", opacity: "0", width: "0", border: "none", overflow: "hidden", padding: "0", position: "absolute", left: "0", top: "0" }
            }, null, 40, We), [
              [G, g.value]
            ]),
            F(_("input", {
              "onUpdate:modelValue": i[1] || (i[1] = (v) => M.value = v),
              ref: "alphaColorPicker",
              type: "range",
              min: "0",
              max: "255",
              step: "1",
              value: "255"
            }, null, 512), [
              [Ue, M.value]
            ])
          ])) : ae.value ? (o(), r("div", je, [
            F(_("input", {
              "onUpdate:modelValue": i[2] || (i[2] = (v) => l.value = v),
              ref: (v) => S.value = v,
              value: l.value,
              type: I.value,
              name: a.name,
              id: k(m),
              disabled: a.disabled,
              readonly: a.readonly,
              placeholder: ae.value,
              tabindex: a.tabindex,
              autocomplete: q.value,
              min: T.value,
              max: B.value,
              step: a.step,
              onKeyup: te,
              onKeydown: ie,
              onFocus: Z,
              onBlur: H,
              onClick: P,
              onChange: z
            }, null, 40, Oe), [
              [G, l.value]
            ])
          ])) : (o(), r("div", Ge, [
            F(_("input", {
              "onUpdate:modelValue": i[3] || (i[3] = (v) => l.value = v),
              ref: (v) => S.value = v,
              value: l.value,
              type: I.value,
              name: a.name,
              id: k(m),
              disabled: a.disabled,
              readonly: a.readonly,
              tabindex: a.tabindex,
              autocomplete: q.value,
              min: T.value,
              max: B.value,
              step: a.step,
              onKeyup: te,
              onKeydown: ie,
              onFocus: Z,
              onBlur: H,
              onClick: P,
              onChange: z
            }, null, 40, Je), [
              [G, l.value]
            ])
          ])),
          Q.value ? (o(), r("div", Qe, [
            e.errorMessage ? (o(), r("i", {
              key: 0,
              class: "lkt-field__error-icon",
              title: e.errorMessage,
              onClick: Me
            }, null, 8, Xe)) : h("", !0),
            e.infoMessage ? (o(), r("i", {
              key: 1,
              class: "lkt-field__info-icon",
              title: e.infoMessage,
              onClick: xe
            }, null, 8, Ye)) : h("", !0),
            e.isPassword && e.showPassword && Y.value ? (o(), r("i", {
              key: 2,
              class: ne(ge.value),
              title: e.showPasswordMessage,
              onClick: _e
            }, null, 10, ea)) : h("", !0),
            e.reset && Y.value ? (o(), r("i", {
              key: 3,
              class: "lkt-field__reset-icon",
              title: be.value,
              onClick: K
            }, null, 8, aa)) : h("", !0),
            a.allowReadModeSwitch ? (o(), r("i", {
              key: 4,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: ue
            }, null, 8, la)) : h("", !0)
          ])) : h("", !0)
        ], 64)) : h("", !0),
        w.value ? h("", !0) : (o(), r("div", {
          key: 3,
          class: "lkt-field-text__read",
          onClick: P
        }, [
          k(E).value ? j(a.$slots, "value", {
            key: 0,
            value: l.value,
            title: V.value,
            data: a.slotData
          }) : Ne.value ? (o(), D(de(Ie.value), {
            key: 1,
            value: l.value,
            title: V.value,
            data: a.slotData
          }, null, 8, ["value", "title", "data"])) : (o(), r(re, { key: 2 }, [
            a.isEmail ? (o(), D(t, {
              key: 0,
              class: "lkt-field-text__read-value",
              title: V.value,
              to: "mail:" + l.value
            }, {
              default: fe(() => [
                ve(O(l.value), 1)
              ]),
              _: 1
            }, 8, ["title", "to"])) : a.isTel ? (o(), D(t, {
              key: 1,
              class: "lkt-field-text__read-value",
              title: V.value,
              to: "tel:" + l.value
            }, {
              default: fe(() => [
                ve(O(l.value), 1)
              ]),
              _: 1
            }, 8, ["title", "to"])) : (o(), r("div", {
              key: 2,
              class: "lkt-field-text__read-value",
              innerHTML: l.value,
              title: V.value
            }, null, 8, ta))
          ], 64)),
          a.allowReadModeSwitch ? (o(), r("div", ia, [
            _("i", {
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: ue
            }, null, 8, ua)
          ])) : h("", !0)
        ])),
        a.autoValidation && u.value.length > 0 ? (o(), D(d, {
          key: 4,
          items: u.value,
          stack: a.validationStack,
          min: a.min,
          max: a.max
        }, null, 8, ["items", "stack", "min", "max"])) : h("", !0)
      ], 10, Ze);
    };
  }
}), pa = (p, b) => (f.customValueSlots[p] = b, !0), ma = (p, b) => (f.customEditSlots[p] = b, !0), ca = {
  install: (p) => {
    p.component("lkt-field-text") === void 0 && p.component("lkt-field-text", oa), p.component("lkt-field-validations") === void 0 && p.use(Pe);
  }
}, ha = (p, b) => {
  f.defaultEmptyValueSlot = p, b && (f.customValueSlots[p] = b);
};
export {
  ca as default,
  ha as setDefaultTextEmptyValueSlot,
  ma as setTextEditSlot,
  pa as setTextValueSlot
};
