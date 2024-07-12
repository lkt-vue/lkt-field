import we from "lkt-field-validation";
import { defineComponent as ge, useSlots as Me, ref as m, computed as u, watch as D, nextTick as X, resolveComponent as Ee, openBlock as a, createElementBlock as o, normalizeClass as Y, unref as p, renderSlot as F, createCommentVNode as d, Fragment as Z, createBlock as L, resolveDynamicComponent as ee, withDirectives as le, createElementVNode as R, vModelDynamic as te, toDisplayString as ae } from "vue";
import { generateRandomString as ue, isEmail as Be } from "lkt-string-tools";
import { createLktEvent as S } from "lkt-events";
import { httpCall as xe } from "lkt-http-client";
import { __ as oe } from "lkt-i18n";
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
    name: { default: ue(16) },
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
    const v = ie, b = Me(), e = n, r = ue(16), M = m(null);
    let se = [];
    const $ = m(e.modelValue), t = m(e.modelValue), E = m(!1), C = m(!1), T = m(!1), N = m(!1), f = m(se), y = m(!e.readMode), ne = u(() => typeof e.valid == "function" ? e.valid() : e.valid), de = u(() => t.value !== $.value), I = u(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), K = u(() => {
      let l = 0;
      return e.reset && ++l, e.infoMessage && ++l, e.isPassword && e.showPassword && ++l, l;
    }), re = u(() => e.resetMessage !== "" ? e.resetMessage : ""), fe = u(() => E.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), A = u(() => e.autocomplete === !0 ? "on" : "off"), H = u(() => t.value !== ""), B = u(() => e.isPassword && E.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), ve = u(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), B && l.push(`is-${B.value}`), de.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), e.mandatory && y.value && l.push("is-mandatory-field"), C.value && l.push("has-focus"), e.autoValidation && N.value && T.value && (f.value.length > 0 ? l.push("is-invalid") : l.push("is-valid")), K.value > 0 && l.push("has-icons", `has-icons-${K.value}`), l.push(ne.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty"), l.join(" ");
    }), k = u(() => typeof t.value == "number" ? t.value.toString() : t.value), _ = u(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), V = u(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), U = u(() => e.label.startsWith("__:") ? oe(e.label.substring(3)) : e.label), W = u(() => e.placeholder.startsWith("__:") ? oe(e.placeholder.substring(3)) : e.placeholder), j = () => {
      X(() => {
        M.value && M.value.focus();
      });
    }, me = async () => {
      if (e.validationResource) {
        v("validating");
        const l = await xe(e.validationResource, { ...e.validationResourceData, value: t.value });
        v("validation", l);
      }
    };
    D(() => e.readMode, (l) => y.value = !l), D(() => e.modelValue, (l) => {
      if (e.isNumber)
        return he(l);
      t.value = l;
    }), D(t, (l) => {
      v("update:modelValue", l), me(), x();
    });
    const x = () => {
      !T.value || !N.value || (f.value = [], X(() => {
        if (!e.isNumber && !e.isEmail && e.mandatory && t.value === "")
          f.value.push("ko-empty");
        else if (!e.isEmail) {
          let s = Number(e.min);
          s > 0 && (!e.isNumber && t.value.length < s ? f.value.push("ko-min-str") : t.value < s && f.value.push("ko-min-num"));
        }
        let l = Number(e.max);
        l > 0 && (!e.isNumber && t.value.length > l ? f.value.push("ko-max-str") : t.value > l && f.value.push("ko-max-num")), e.isEmail && e.mandatory && t.value === "" ? f.value.push("ko-empty") : e.isEmail && !Be(t.value) && f.value.push("ko-email");
      }));
    }, P = () => t.value = $.value, ce = () => t.value, z = (l) => {
      x(), v("keyup", l, S(r, { value: t.value }));
    }, O = (l) => v("keydown", l, S(r, { value: t.value })), q = (l) => {
      N.value = !0, x(), (C.value = !0) && v("focus", l, S(r, { value: t.value }));
    }, G = (l) => {
    }, J = (l) => {
      T.value = !0, x(), (C.value = !1) && v("blur", l, S(r, { value: t.value }));
    }, w = (l) => {
      v("click", l, S(r, { value: t.value }));
    }, pe = (l) => v("click-info", l, S(r, { value: t.value })), ye = (l) => v("click-error", l, S(r, { value: t.value })), ke = (l) => E.value = !E.value, Q = (l) => {
      y.value = !y.value, y.value && j();
    }, he = (l) => {
      if (!e.enableAutoNumberFix)
        return !1;
      let s = Number(l), g = !1;
      return _.value !== !1 && s < _.value && (s = _.value, g = !0), V.value !== !1 && s > V.value && (s = V.value, g = !0), g === !0 ? (t.value = s, !0) : !1;
    };
    c({
      Identifier: r,
      reset: P,
      focus: j,
      value: ce,
      isMandatory: () => e.mandatory
    }), P();
    const Se = u(() => t.value === "" ? e.emptyValueSlot !== "" && typeof i.customValueSlots[e.emptyValueSlot] < "u" || i.defaultEmptyValueSlot && typeof i.customValueSlots[i.defaultEmptyValueSlot] < "u" : e.valueSlot !== "" && typeof i.customValueSlots[e.valueSlot] < "u"), be = u(() => t.value === "" ? i.customValueSlots[e.emptyValueSlot] ?? i.customValueSlots[i.defaultEmptyValueSlot] : i.customValueSlots[e.valueSlot]), _e = u(() => e.editSlot !== "" && typeof i.customEditSlots[e.editSlot] < "u"), Ve = u(() => i.customEditSlots[e.editSlot]);
    return (l, s) => {
      const g = Ee("lkt-field-validations");
      return a(), o("div", {
        class: Y(ve.value),
        "data-show-ui": I.value,
        "data-labeled": !p(b).label
      }, [
        p(b).label ? F(l.$slots, "label", { key: 0 }) : d("", !0),
        !p(b).label && U.value !== "" ? (a(), o("label", {
          key: 1,
          for: p(r),
          innerHTML: U.value
        }, null, 8, Pe)) : d("", !0),
        y.value ? (a(), o(Z, { key: 2 }, [
          p(b).edit ? (a(), o("div", {
            key: 0,
            onClick: w
          }, [
            F(l.$slots, "edit", {
              value: t.value,
              title: k.value,
              data: l.slotData
            })
          ])) : _e.value ? (a(), o("div", {
            key: 1,
            onClick: w
          }, [
            (a(), L(ee(Ve.value), {
              value: t.value,
              title: k.value,
              data: l.slotData
            }, null, 8, ["value", "title", "data"]))
          ])) : W.value ? (a(), o("div", De, [
            le(R("input", {
              "onUpdate:modelValue": s[0] || (s[0] = (h) => t.value = h),
              ref: (h) => M.value = h,
              value: t.value,
              type: B.value,
              name: l.name,
              id: p(r),
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
              [te, t.value]
            ])
          ])) : (a(), o("div", Le, [
            le(R("input", {
              "onUpdate:modelValue": s[1] || (s[1] = (h) => t.value = h),
              ref: (h) => M.value = h,
              value: t.value,
              type: B.value,
              name: l.name,
              id: p(r),
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
              [te, t.value]
            ])
          ])),
          I.value ? (a(), o("div", $e, [
            e.errorMessage ? (a(), o("i", {
              key: 0,
              class: "lkt-field__error-icon",
              title: e.errorMessage,
              onClick: ye
            }, null, 8, Ie)) : d("", !0),
            e.infoMessage ? (a(), o("i", {
              key: 1,
              class: "lkt-field__info-icon",
              title: e.infoMessage,
              onClick: pe
            }, null, 8, Ke)) : d("", !0),
            e.isPassword && e.showPassword && H.value ? (a(), o("i", {
              key: 2,
              class: Y(fe.value),
              title: e.showPasswordMessage,
              onClick: ke
            }, null, 10, Ae)) : d("", !0),
            e.reset && H.value ? (a(), o("i", {
              key: 3,
              class: "lkt-field__reset-icon",
              title: re.value,
              onClick: P
            }, null, 8, He)) : d("", !0),
            l.allowReadModeSwitch ? (a(), o("i", {
              key: 4,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: Q
            }, null, 8, Ue)) : d("", !0)
          ])) : d("", !0)
        ], 64)) : d("", !0),
        y.value ? d("", !0) : (a(), o("div", {
          key: 3,
          class: "lkt-field-text__read",
          onClick: w
        }, [
          p(b).value ? F(l.$slots, "value", {
            key: 0,
            value: t.value,
            title: k.value,
            data: l.slotData
          }) : Se.value ? (a(), L(ee(be.value), {
            key: 1,
            value: t.value,
            title: k.value,
            data: l.slotData
          }, null, 8, ["value", "title", "data"])) : (a(), o(Z, { key: 2 }, [
            l.isEmail ? (a(), o("a", {
              key: 0,
              class: "lkt-field-text__read-value",
              title: k.value,
              href: "mail:" + t.value
            }, ae(t.value), 9, We)) : l.isTel ? (a(), o("a", {
              key: 1,
              class: "lkt-field-text__read-value",
              title: k.value,
              href: "tel:" + t.value
            }, ae(t.value), 9, je)) : (a(), o("div", {
              key: 2,
              class: "lkt-field-text__read-value",
              innerHTML: t.value,
              title: k.value
            }, null, 8, ze))
          ], 64)),
          l.allowReadModeSwitch ? (a(), o("div", Oe, [
            R("i", {
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: Q
            }, null, 8, qe)
          ])) : d("", !0)
        ])),
        l.autoValidation && f.value.length > 0 ? (a(), L(g, {
          key: 4,
          items: f.value,
          stack: l.validationStack
        }, null, 8, ["items", "stack"])) : d("", !0)
      ], 10, Ne);
    };
  }
}), ll = (n, c) => (i.customValueSlots[n] = c, !0), tl = (n, c) => (i.customEditSlots[n] = c, !0), al = {
  install: (n) => {
    n.component("lkt-field-text") === void 0 && n.component("lkt-field-text", Ge), n.component("lkt-field-validations") === void 0 && n.use(we);
  }
}, ul = (n, c) => {
  i.defaultEmptyValueSlot = n, c && (i.customValueSlots[n] = c);
};
export {
  al as default,
  ul as setDefaultTextEmptyValueSlot,
  tl as setTextEditSlot,
  ll as setTextValueSlot
};
