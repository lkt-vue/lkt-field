import we from "lkt-field-validation";
import { defineComponent as ge, useSlots as Me, ref as m, computed as o, watch as D, nextTick as X, resolveComponent as Ee, openBlock as t, createElementBlock as u, normalizeClass as Y, unref as p, renderSlot as F, createCommentVNode as r, Fragment as Z, createBlock as L, resolveDynamicComponent as ee, withDirectives as le, createElementVNode as R, vModelDynamic as ae, toDisplayString as te } from "vue";
import { generateRandomString as oe, isEmail as Be } from "lkt-string-tools";
import { createLktEvent as S } from "lkt-events";
import { httpCall as xe } from "lkt-http-client";
import { __ as ue } from "lkt-i18n";
let Ce = {}, Te = {};
const i = {
  defaultEmptyValueSlot: "",
  customValueSlots: Ce,
  customEditSlots: Te
}, Ne = ["data-show-ui", "data-labeled"], Pe = ["for", "innerHTML"], De = {
  key: 2,
  class: "lkt-field-main"
}, Fe = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Le = {
  key: 3,
  class: "lkt-field-main"
}, Re = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], $e = {
  key: 4,
  class: "lkt-field__state"
}, Ie = ["title"], Ke = ["title"], Ae = ["title"], He = ["title"], Ue = ["title"], We = ["title", "href"], je = ["title", "href"], ze = ["innerHTML", "title"], Oe = {
  key: 3,
  class: "lkt-field__state"
}, qe = ["title"], Ge = /* @__PURE__ */ ge({
  __name: "LktFieldText",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: oe(16) },
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
    validationStack: { default: "default" }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error", "validation", "validating"],
  setup(n, { expose: c, emit: ie }) {
    const v = ie, b = Me(), e = n, f = oe(16), M = m(null);
    let se = [];
    const $ = m(e.modelValue), a = m(e.modelValue), E = m(!1), C = m(!1), T = m(!1), N = m(!1), d = m(se), y = m(!e.readMode), ne = o(() => typeof e.valid == "function" ? e.valid() : e.valid), de = o(() => a.value !== $.value), I = o(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), K = o(() => {
      let l = 0;
      return e.reset && ++l, e.infoMessage && ++l, e.isPassword && e.showPassword && ++l, l;
    }), re = o(() => e.resetMessage !== "" ? e.resetMessage : ""), fe = o(() => E.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), A = o(() => e.autocomplete === !0 ? "on" : "off"), H = o(() => a.value !== ""), B = o(() => e.isPassword && E.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), ve = o(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), B && l.push(`is-${B.value}`), de.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), e.mandatory && y.value && l.push("is-mandatory-field"), C.value && l.push("has-focus"), e.autoValidation && N.value && T.value && (d.value.length > 0 ? l.push("is-invalid") : l.push("is-valid")), K.value > 0 && l.push("has-icons", `has-icons-${K.value}`), l.push(ne.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty"), l.join(" ");
    }), k = o(() => typeof a.value == "number" ? a.value.toString() : a.value), _ = o(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), V = o(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), U = o(() => e.label.startsWith("__:") ? ue(e.label.substring(3)) : e.label), W = o(() => e.placeholder.startsWith("__:") ? ue(e.placeholder.substring(3)) : e.placeholder), j = () => {
      X(() => {
        M.value && M.value.focus();
      });
    }, me = async () => {
      if (e.validationResource) {
        v("validating");
        const l = await xe(e.validationResource, { ...e.validationResourceData, value: a.value });
        v("validation", l);
      }
    };
    D(() => e.readMode, (l) => y.value = !l), D(() => e.modelValue, (l) => {
      if (e.isNumber)
        return he(l);
      a.value = l;
    }), D(a, (l) => {
      v("update:modelValue", l), me(), x();
    });
    const x = () => {
      !T.value || !N.value || (d.value = [], X(() => {
        if (!e.isNumber && !e.isEmail && e.mandatory && a.value === "")
          d.value.push("ko-empty");
        else if (!e.isEmail) {
          let s = Number(e.min);
          s > 0 && (!e.isNumber && a.value.length < s ? d.value.push("ko-min-str") : a.value < s && d.value.push("ko-min-num"));
        }
        let l = Number(e.max);
        l > 0 && (!e.isNumber && a.value.length > l ? d.value.push("ko-max-str") : a.value > l && d.value.push("ko-max-num")), e.isEmail && e.mandatory && a.value === "" ? d.value.push("ko-empty") : e.isEmail && !Be(a.value) && d.value.push("ko-email"), console.log("doLocalValidation", d.value);
      }));
    }, P = () => a.value = $.value, ce = () => a.value, z = (l) => {
      x(), v("keyup", l, S(f, { value: a.value }));
    }, O = (l) => v("keydown", l, S(f, { value: a.value })), q = (l) => {
      N.value = !0, x(), (C.value = !0) && v("focus", l, S(f, { value: a.value }));
    }, G = (l) => {
    }, J = (l) => {
      T.value = !0, x(), (C.value = !1) && v("blur", l, S(f, { value: a.value }));
    }, w = (l) => {
      v("click", l, S(f, { value: a.value }));
    }, pe = (l) => v("click-info", l, S(f, { value: a.value })), ye = (l) => v("click-error", l, S(f, { value: a.value })), ke = (l) => E.value = !E.value, Q = (l) => {
      y.value = !y.value, y.value && j();
    }, he = (l) => {
      if (!e.enableAutoNumberFix)
        return !1;
      let s = Number(l), g = !1;
      return _.value !== !1 && s < _.value && (s = _.value, g = !0), V.value !== !1 && s > V.value && (s = V.value, g = !0), g === !0 ? (a.value = s, !0) : !1;
    };
    c({
      Identifier: f,
      reset: P,
      focus: j,
      value: ce,
      isMandatory: () => e.mandatory
    }), P();
    const Se = o(() => a.value === "" ? e.emptyValueSlot !== "" && typeof i.customValueSlots[e.emptyValueSlot] < "u" || i.defaultEmptyValueSlot && typeof i.customValueSlots[i.defaultEmptyValueSlot] < "u" : e.valueSlot !== "" && typeof i.customValueSlots[e.valueSlot] < "u"), be = o(() => a.value === "" ? i.customValueSlots[e.emptyValueSlot] ?? i.customValueSlots[i.defaultEmptyValueSlot] : i.customValueSlots[e.valueSlot]), _e = o(() => e.editSlot !== "" && typeof i.customEditSlots[e.editSlot] < "u"), Ve = o(() => i.customEditSlots[e.editSlot]);
    return (l, s) => {
      const g = Ee("lkt-field-validations");
      return t(), u("div", {
        class: Y(ve.value),
        "data-show-ui": I.value,
        "data-labeled": !p(b).label
      }, [
        p(b).label ? F(l.$slots, "label", { key: 0 }) : r("", !0),
        !p(b).label && U.value !== "" ? (t(), u("label", {
          key: 1,
          for: p(f),
          innerHTML: U.value
        }, null, 8, Pe)) : r("", !0),
        y.value ? (t(), u(Z, { key: 2 }, [
          p(b).edit ? (t(), u("div", {
            key: 0,
            onClick: w
          }, [
            F(l.$slots, "edit", {
              value: a.value,
              title: k.value,
              data: l.slotData
            })
          ])) : _e.value ? (t(), u("div", {
            key: 1,
            onClick: w
          }, [
            (t(), L(ee(Ve.value), {
              value: a.value,
              title: k.value,
              data: l.slotData
            }, null, 8, ["value", "title", "data"]))
          ])) : W.value ? (t(), u("div", De, [
            le(R("input", {
              "onUpdate:modelValue": s[0] || (s[0] = (h) => a.value = h),
              ref: (h) => M.value = h,
              value: a.value,
              type: B.value,
              name: l.name,
              id: p(f),
              disabled: l.disabled,
              readonly: l.readonly,
              placeholder: W.value,
              tabindex: l.tabindex,
              autocomplete: A.value,
              min: _.value,
              max: V.value,
              step: l.step,
              onKeyup: z,
              onKeydown: O,
              onFocus: q,
              onBlur: J,
              onClick: w,
              onChange: G
            }, null, 40, Fe), [
              [ae, a.value]
            ])
          ])) : (t(), u("div", Le, [
            le(R("input", {
              "onUpdate:modelValue": s[1] || (s[1] = (h) => a.value = h),
              ref: (h) => M.value = h,
              value: a.value,
              type: B.value,
              name: l.name,
              id: p(f),
              disabled: l.disabled,
              readonly: l.readonly,
              tabindex: l.tabindex,
              autocomplete: A.value,
              min: _.value,
              max: V.value,
              step: l.step,
              onKeyup: z,
              onKeydown: O,
              onFocus: q,
              onBlur: J,
              onClick: w,
              onChange: G
            }, null, 40, Re), [
              [ae, a.value]
            ])
          ])),
          I.value ? (t(), u("div", $e, [
            e.errorMessage ? (t(), u("i", {
              key: 0,
              class: "lkt-field__error-icon",
              title: e.errorMessage,
              onClick: ye
            }, null, 8, Ie)) : r("", !0),
            e.infoMessage ? (t(), u("i", {
              key: 1,
              class: "lkt-field__info-icon",
              title: e.infoMessage,
              onClick: pe
            }, null, 8, Ke)) : r("", !0),
            e.isPassword && e.showPassword && H.value ? (t(), u("i", {
              key: 2,
              class: Y(fe.value),
              title: e.showPasswordMessage,
              onClick: ke
            }, null, 10, Ae)) : r("", !0),
            e.reset && H.value ? (t(), u("i", {
              key: 3,
              class: "lkt-field__reset-icon",
              title: re.value,
              onClick: P
            }, null, 8, He)) : r("", !0),
            l.allowReadModeSwitch ? (t(), u("i", {
              key: 4,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: Q
            }, null, 8, Ue)) : r("", !0)
          ])) : r("", !0)
        ], 64)) : r("", !0),
        y.value ? r("", !0) : (t(), u("div", {
          key: 3,
          class: "lkt-field-text__read",
          onClick: w
        }, [
          p(b).value ? F(l.$slots, "value", {
            key: 0,
            value: a.value,
            title: k.value,
            data: l.slotData
          }) : Se.value ? (t(), L(ee(be.value), {
            key: 1,
            value: a.value,
            title: k.value,
            data: l.slotData
          }, null, 8, ["value", "title", "data"])) : (t(), u(Z, { key: 2 }, [
            l.isEmail ? (t(), u("a", {
              key: 0,
              class: "lkt-field-text__read-value",
              title: k.value,
              href: "mail:" + a.value
            }, te(a.value), 9, We)) : l.isTel ? (t(), u("a", {
              key: 1,
              class: "lkt-field-text__read-value",
              title: k.value,
              href: "tel:" + a.value
            }, te(a.value), 9, je)) : (t(), u("div", {
              key: 2,
              class: "lkt-field-text__read-value",
              innerHTML: a.value,
              title: k.value
            }, null, 8, ze))
          ], 64)),
          l.allowReadModeSwitch ? (t(), u("div", Oe, [
            R("i", {
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: Q
            }, null, 8, qe)
          ])) : r("", !0)
        ])),
        l.autoValidation && d.value.length > 0 ? (t(), L(g, {
          key: 4,
          items: d.value,
          stack: l.validationStack
        }, null, 8, ["items", "stack"])) : r("", !0)
      ], 10, Ne);
    };
  }
}), ll = (n, c) => (i.customValueSlots[n] = c, !0), al = (n, c) => (i.customEditSlots[n] = c, !0), tl = {
  install: (n) => {
    n.component("lkt-field-text") === void 0 && n.component("lkt-field-text", Ge), n.component("lkt-field-validations") === void 0 && n.use(we);
  }
}, ol = (n, c) => {
  i.defaultEmptyValueSlot = n, c && (i.customValueSlots[n] = c);
};
export {
  tl as default,
  ol as setDefaultTextEmptyValueSlot,
  al as setTextEditSlot,
  ll as setTextValueSlot
};
