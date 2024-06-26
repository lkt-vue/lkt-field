import we from "lkt-field-validation";
import { defineComponent as Ve, useSlots as ge, ref as m, computed as u, watch as D, resolveComponent as Me, openBlock as a, createElementBlock as o, normalizeClass as Q, unref as c, renderSlot as F, createCommentVNode as d, Fragment as X, createBlock as L, resolveDynamicComponent as Y, withDirectives as Z, createElementVNode as R, vModelDynamic as ee, toDisplayString as le, nextTick as Ee } from "vue";
import { generateRandomString as te, isEmail as ae } from "lkt-string-tools";
import { createLktEvent as S } from "lkt-events";
import { httpCall as xe } from "lkt-http-client";
import { __ as ue } from "lkt-i18n";
let Be = {}, Ce = {};
const i = {
  defaultEmptyValueSlot: "",
  customValueSlots: Be,
  customEditSlots: Ce
}, Te = ["data-show-ui", "data-labeled"], Ne = ["for", "innerHTML"], Pe = {
  key: 2,
  class: "lkt-field-main"
}, De = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Fe = {
  key: 3,
  class: "lkt-field-main"
}, Le = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], Re = {
  key: 4,
  class: "lkt-field__state"
}, $e = ["title"], Ie = ["title"], Ke = ["title"], Ae = ["title"], He = ["title"], Ue = ["title", "href"], We = ["title", "href"], je = ["innerHTML", "title"], ze = {
  key: 3,
  class: "lkt-field__state"
}, Oe = ["title"], qe = /* @__PURE__ */ Ve({
  __name: "LktFieldText",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: te(16) },
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
  setup(n, { expose: p, emit: oe }) {
    const f = oe, _ = ge(), e = n, r = te(16), M = m(null), $ = m(e.modelValue), t = m(e.modelValue), E = m(!1), B = m(!1), C = m(!1), T = m(!1), v = m([]), y = m(!e.readMode), ie = u(() => typeof e.valid == "function" ? e.valid() : e.valid), se = u(() => t.value !== $.value), I = u(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), K = u(() => {
      let l = 0;
      return e.reset && ++l, e.infoMessage && ++l, e.isPassword && e.showPassword && ++l, l;
    }), ne = u(() => e.resetMessage !== "" ? e.resetMessage : ""), de = u(() => E.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), A = u(() => e.autocomplete === !0 ? "on" : "off"), H = u(() => t.value !== ""), x = u(() => e.isPassword && E.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), re = u(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), x && l.push(`is-${x.value}`), se.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), e.mandatory && y.value && l.push("is-mandatory-field"), B.value && l.push("has-focus"), e.autoValidation && T.value && C.value && (v.value.length > 0 ? l.push("is-invalid") : l.push("is-valid")), K.value > 0 && l.push("has-icons", `has-icons-${K.value}`), l.push(ie.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty"), l.join(" ");
    }), k = u(() => typeof t.value == "number" ? t.value.toString() : t.value), b = u(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), w = u(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), fe = u(() => e.label.startsWith("__:") ? ue(e.label.substring(3)) : e.label), U = u(() => e.placeholder.startsWith("__:") ? ue(e.placeholder.substring(3)) : e.placeholder), W = () => {
      Ee(() => {
        M.value && M.value.focus();
      });
    }, ve = async () => {
      if (e.validationResource) {
        f("validating");
        const l = await xe(e.validationResource, { ...e.validationResourceData, value: t.value });
        f("validation", l);
      }
    };
    D(() => e.readMode, (l) => y.value = !l), D(() => e.modelValue, (l) => {
      if (e.isNumber)
        return ke(l);
      t.value = l;
    }), D(t, (l) => {
      f("update:modelValue", l), ve(), N();
    });
    const N = () => {
      if (!C.value || !T.value)
        return;
      v.value = [];
      let l = Number(e.min);
      l > 0 && (!e.isNumber && t.value.length < l ? v.value.push("ko-min-str") : t.value < l && v.value.push("ko-min-num"));
      let s = Number(e.max);
      s > 0 && (!e.isNumber && t.value.length > s ? v.value.push("ko-max-str") : t.value > s && v.value.push("ko-max-num")), e.isEmail && !ae(t.value) && v.value.push("ko-email");
    }, P = () => t.value = $.value, me = () => t.value, j = (l) => {
      N(), f("keyup", l, S(r, { value: t.value }));
    }, z = (l) => f("keydown", l, S(r, { value: t.value })), O = (l) => {
      T.value = !0, (B.value = !0) && f("focus", l, S(r, { value: t.value }));
    }, q = (l) => {
    }, G = (l) => {
      C.value = !0, N(), (B.value = !1) && f("blur", l, S(r, { value: t.value }));
    }, V = (l) => {
      f("click", l, S(r, { value: t.value }));
    }, ce = (l) => f("click-info", l, S(r, { value: t.value })), pe = (l) => f("click-error", l, S(r, { value: t.value })), ye = (l) => E.value = !E.value, J = (l) => {
      y.value = !y.value, y.value && W();
    }, ke = (l) => {
      if (!e.enableAutoNumberFix)
        return !1;
      let s = Number(l), g = !1;
      return b.value !== !1 && s < b.value && (s = b.value, g = !0), w.value !== !1 && s > w.value && (s = w.value, g = !0), g === !0 ? (t.value = s, !0) : !1;
    };
    p({
      Identifier: r,
      reset: P,
      focus: W,
      value: me,
      isMandatory: () => e.mandatory
    }), P();
    const he = u(() => t.value === "" ? e.emptyValueSlot !== "" && typeof i.customValueSlots[e.emptyValueSlot] < "u" || i.defaultEmptyValueSlot && typeof i.customValueSlots[i.defaultEmptyValueSlot] < "u" : e.valueSlot !== "" && typeof i.customValueSlots[e.valueSlot] < "u"), Se = u(() => t.value === "" ? i.customValueSlots[e.emptyValueSlot] ?? i.customValueSlots[i.defaultEmptyValueSlot] : i.customValueSlots[e.valueSlot]), _e = u(() => e.editSlot !== "" && typeof i.customEditSlots[e.editSlot] < "u"), be = u(() => i.customEditSlots[e.editSlot]);
    return (l, s) => {
      const g = Me("lkt-field-validations");
      return a(), o("div", {
        class: Q(re.value),
        "data-show-ui": I.value,
        "data-labeled": !c(_).label
      }, [
        c(_).label ? F(l.$slots, "label", { key: 0 }) : d("", !0),
        c(_).label ? d("", !0) : (a(), o("label", {
          key: 1,
          for: c(r),
          innerHTML: fe.value
        }, null, 8, Ne)),
        y.value ? (a(), o(X, { key: 2 }, [
          c(_).edit ? (a(), o("div", {
            key: 0,
            onClick: V
          }, [
            F(l.$slots, "edit", {
              value: t.value,
              title: k.value,
              data: l.slotData
            })
          ])) : _e.value ? (a(), o("div", {
            key: 1,
            onClick: V
          }, [
            (a(), L(Y(be.value), {
              value: t.value,
              title: k.value,
              data: l.slotData
            }, null, 8, ["value", "title", "data"]))
          ])) : U.value ? (a(), o("div", Pe, [
            Z(R("input", {
              "onUpdate:modelValue": s[0] || (s[0] = (h) => t.value = h),
              ref: (h) => M.value = h,
              value: t.value,
              type: x.value,
              name: l.name,
              id: c(r),
              disabled: l.disabled,
              readonly: l.readonly,
              placeholder: U.value,
              tabindex: l.tabindex,
              autocomplete: A.value,
              min: b.value,
              max: w.value,
              step: l.step,
              onKeyup: j,
              onKeydown: z,
              onFocus: O,
              onBlur: G,
              onClick: V,
              onChange: q
            }, null, 40, De), [
              [ee, t.value]
            ])
          ])) : (a(), o("div", Fe, [
            Z(R("input", {
              "onUpdate:modelValue": s[1] || (s[1] = (h) => t.value = h),
              ref: (h) => M.value = h,
              value: t.value,
              type: x.value,
              name: l.name,
              id: c(r),
              disabled: l.disabled,
              readonly: l.readonly,
              tabindex: l.tabindex,
              autocomplete: A.value,
              min: b.value,
              max: w.value,
              step: l.step,
              onKeyup: j,
              onKeydown: z,
              onFocus: O,
              onBlur: G,
              onClick: V,
              onChange: q
            }, null, 40, Le), [
              [ee, t.value]
            ])
          ])),
          I.value ? (a(), o("div", Re, [
            e.errorMessage ? (a(), o("i", {
              key: 0,
              class: "lkt-field__error-icon",
              title: e.errorMessage,
              onClick: pe
            }, null, 8, $e)) : d("", !0),
            e.infoMessage ? (a(), o("i", {
              key: 1,
              class: "lkt-field__info-icon",
              title: e.infoMessage,
              onClick: ce
            }, null, 8, Ie)) : d("", !0),
            e.isPassword && e.showPassword && H.value ? (a(), o("i", {
              key: 2,
              class: Q(de.value),
              title: e.showPasswordMessage,
              onClick: ye
            }, null, 10, Ke)) : d("", !0),
            e.reset && H.value ? (a(), o("i", {
              key: 3,
              class: "lkt-field__reset-icon",
              title: ne.value,
              onClick: P
            }, null, 8, Ae)) : d("", !0),
            l.allowReadModeSwitch ? (a(), o("i", {
              key: 4,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: J
            }, null, 8, He)) : d("", !0)
          ])) : d("", !0)
        ], 64)) : d("", !0),
        y.value ? d("", !0) : (a(), o("div", {
          key: 3,
          class: "lkt-field-text__read",
          onClick: V
        }, [
          c(_).value ? F(l.$slots, "value", {
            key: 0,
            value: t.value,
            title: k.value,
            data: l.slotData
          }) : he.value ? (a(), L(Y(Se.value), {
            key: 1,
            value: t.value,
            title: k.value,
            data: l.slotData
          }, null, 8, ["value", "title", "data"])) : (a(), o(X, { key: 2 }, [
            c(ae) ? (a(), o("a", {
              key: 0,
              class: "lkt-field-text__read-value",
              title: k.value,
              href: "mail:" + t.value
            }, le(t.value), 9, Ue)) : l.isTel ? (a(), o("a", {
              key: 1,
              class: "lkt-field-text__read-value",
              title: k.value,
              href: "tel:" + t.value
            }, le(t.value), 9, We)) : (a(), o("div", {
              key: 2,
              class: "lkt-field-text__read-value",
              innerHTML: t.value,
              title: k.value
            }, null, 8, je))
          ], 64)),
          l.allowReadModeSwitch ? (a(), o("div", ze, [
            R("i", {
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: J
            }, null, 8, Oe)
          ])) : d("", !0)
        ])),
        l.autoValidation && v.value.length > 0 ? (a(), L(g, {
          key: 4,
          items: v.value,
          stack: l.validationStack
        }, null, 8, ["items", "stack"])) : d("", !0)
      ], 10, Te);
    };
  }
}), el = (n, p) => (i.customValueSlots[n] = p, !0), ll = (n, p) => (i.customEditSlots[n] = p, !0), tl = {
  install: (n) => {
    n.component("lkt-field-text") === void 0 && n.component("lkt-field-text", qe), n.component("lkt-field-validations") === void 0 && n.use(we);
  }
}, al = (n, p) => {
  i.defaultEmptyValueSlot = n, p && (i.customValueSlots[n] = p);
};
export {
  tl as default,
  al as setDefaultTextEmptyValueSlot,
  ll as setTextEditSlot,
  el as setTextValueSlot
};
