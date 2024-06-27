import we from "lkt-field-validation";
import { defineComponent as ge, useSlots as Me, ref as m, computed as o, watch as D, nextTick as X, resolveComponent as Ee, openBlock as a, createElementBlock as u, normalizeClass as Y, unref as c, renderSlot as F, createCommentVNode as r, Fragment as Z, createBlock as L, resolveDynamicComponent as ee, withDirectives as le, createElementVNode as R, vModelDynamic as te, toDisplayString as ae } from "vue";
import { generateRandomString as oe, isEmail as ue } from "lkt-string-tools";
import { createLktEvent as S } from "lkt-events";
import { httpCall as xe } from "lkt-http-client";
import { __ as ie } from "lkt-i18n";
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
}, Oe = ["title"], qe = /* @__PURE__ */ ge({
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
  setup(n, { expose: p, emit: se }) {
    const v = se, b = Me(), e = n, f = oe(16), M = m(null), $ = m(e.modelValue), t = m(e.modelValue), E = m(!1), C = m(!1), T = m(!1), N = m(!1), d = m([]), y = m(!e.readMode), ne = o(() => typeof e.valid == "function" ? e.valid() : e.valid), de = o(() => t.value !== $.value), I = o(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), K = o(() => {
      let l = 0;
      return e.reset && ++l, e.infoMessage && ++l, e.isPassword && e.showPassword && ++l, l;
    }), re = o(() => e.resetMessage !== "" ? e.resetMessage : ""), fe = o(() => E.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), A = o(() => e.autocomplete === !0 ? "on" : "off"), H = o(() => t.value !== ""), x = o(() => e.isPassword && E.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), ve = o(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), x && l.push(`is-${x.value}`), de.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), e.mandatory && y.value && l.push("is-mandatory-field"), C.value && l.push("has-focus"), e.autoValidation && N.value && T.value && (d.value.length > 0 ? l.push("is-invalid") : l.push("is-valid")), K.value > 0 && l.push("has-icons", `has-icons-${K.value}`), l.push(ne.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty"), l.join(" ");
    }), k = o(() => typeof t.value == "number" ? t.value.toString() : t.value), _ = o(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), V = o(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), U = o(() => e.label.startsWith("__:") ? ie(e.label.substring(3)) : e.label), W = o(() => e.placeholder.startsWith("__:") ? ie(e.placeholder.substring(3)) : e.placeholder), j = () => {
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
      v("update:modelValue", l), me(), B();
    });
    const B = () => {
      !T.value || !N.value || (d.value = [], X(() => {
        if (!e.isNumber && !e.isEmail && e.mandatory && t.value === "")
          d.value.push("ko-empty");
        else if (!e.isEmail) {
          let s = Number(e.min);
          s > 0 && (!e.isNumber && t.value.length < s ? d.value.push("ko-min-str") : t.value < s && d.value.push("ko-min-num"));
        }
        let l = Number(e.max);
        l > 0 && (!e.isNumber && t.value.length > l ? d.value.push("ko-max-str") : t.value > l && d.value.push("ko-max-num")), e.isEmail && e.mandatory && t.value === "" ? d.value.push("ko-empty") : e.isEmail && !ue(t.value) && d.value.push("ko-email"), console.log("doLocalValidation", d.value);
      }));
    }, P = () => t.value = $.value, ce = () => t.value, z = (l) => {
      B(), v("keyup", l, S(f, { value: t.value }));
    }, O = (l) => v("keydown", l, S(f, { value: t.value })), q = (l) => {
      N.value = !0, B(), (C.value = !0) && v("focus", l, S(f, { value: t.value }));
    }, G = (l) => {
    }, J = (l) => {
      T.value = !0, B(), (C.value = !1) && v("blur", l, S(f, { value: t.value }));
    }, w = (l) => {
      v("click", l, S(f, { value: t.value }));
    }, pe = (l) => v("click-info", l, S(f, { value: t.value })), ye = (l) => v("click-error", l, S(f, { value: t.value })), ke = (l) => E.value = !E.value, Q = (l) => {
      y.value = !y.value, y.value && j();
    }, he = (l) => {
      if (!e.enableAutoNumberFix)
        return !1;
      let s = Number(l), g = !1;
      return _.value !== !1 && s < _.value && (s = _.value, g = !0), V.value !== !1 && s > V.value && (s = V.value, g = !0), g === !0 ? (t.value = s, !0) : !1;
    };
    p({
      Identifier: f,
      reset: P,
      focus: j,
      value: ce,
      isMandatory: () => e.mandatory
    }), P();
    const Se = o(() => t.value === "" ? e.emptyValueSlot !== "" && typeof i.customValueSlots[e.emptyValueSlot] < "u" || i.defaultEmptyValueSlot && typeof i.customValueSlots[i.defaultEmptyValueSlot] < "u" : e.valueSlot !== "" && typeof i.customValueSlots[e.valueSlot] < "u"), be = o(() => t.value === "" ? i.customValueSlots[e.emptyValueSlot] ?? i.customValueSlots[i.defaultEmptyValueSlot] : i.customValueSlots[e.valueSlot]), _e = o(() => e.editSlot !== "" && typeof i.customEditSlots[e.editSlot] < "u"), Ve = o(() => i.customEditSlots[e.editSlot]);
    return (l, s) => {
      const g = Ee("lkt-field-validations");
      return a(), u("div", {
        class: Y(ve.value),
        "data-show-ui": I.value,
        "data-labeled": !c(b).label
      }, [
        c(b).label ? F(l.$slots, "label", { key: 0 }) : r("", !0),
        !c(b).label && U.value !== "" ? (a(), u("label", {
          key: 1,
          for: c(f),
          innerHTML: U.value
        }, null, 8, Ne)) : r("", !0),
        y.value ? (a(), u(Z, { key: 2 }, [
          c(b).edit ? (a(), u("div", {
            key: 0,
            onClick: w
          }, [
            F(l.$slots, "edit", {
              value: t.value,
              title: k.value,
              data: l.slotData
            })
          ])) : _e.value ? (a(), u("div", {
            key: 1,
            onClick: w
          }, [
            (a(), L(ee(Ve.value), {
              value: t.value,
              title: k.value,
              data: l.slotData
            }, null, 8, ["value", "title", "data"]))
          ])) : W.value ? (a(), u("div", Pe, [
            le(R("input", {
              "onUpdate:modelValue": s[0] || (s[0] = (h) => t.value = h),
              ref: (h) => M.value = h,
              value: t.value,
              type: x.value,
              name: l.name,
              id: c(f),
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
            }, null, 40, De), [
              [te, t.value]
            ])
          ])) : (a(), u("div", Fe, [
            le(R("input", {
              "onUpdate:modelValue": s[1] || (s[1] = (h) => t.value = h),
              ref: (h) => M.value = h,
              value: t.value,
              type: x.value,
              name: l.name,
              id: c(f),
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
            }, null, 40, Le), [
              [te, t.value]
            ])
          ])),
          I.value ? (a(), u("div", Re, [
            e.errorMessage ? (a(), u("i", {
              key: 0,
              class: "lkt-field__error-icon",
              title: e.errorMessage,
              onClick: ye
            }, null, 8, $e)) : r("", !0),
            e.infoMessage ? (a(), u("i", {
              key: 1,
              class: "lkt-field__info-icon",
              title: e.infoMessage,
              onClick: pe
            }, null, 8, Ie)) : r("", !0),
            e.isPassword && e.showPassword && H.value ? (a(), u("i", {
              key: 2,
              class: Y(fe.value),
              title: e.showPasswordMessage,
              onClick: ke
            }, null, 10, Ke)) : r("", !0),
            e.reset && H.value ? (a(), u("i", {
              key: 3,
              class: "lkt-field__reset-icon",
              title: re.value,
              onClick: P
            }, null, 8, Ae)) : r("", !0),
            l.allowReadModeSwitch ? (a(), u("i", {
              key: 4,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: Q
            }, null, 8, He)) : r("", !0)
          ])) : r("", !0)
        ], 64)) : r("", !0),
        y.value ? r("", !0) : (a(), u("div", {
          key: 3,
          class: "lkt-field-text__read",
          onClick: w
        }, [
          c(b).value ? F(l.$slots, "value", {
            key: 0,
            value: t.value,
            title: k.value,
            data: l.slotData
          }) : Se.value ? (a(), L(ee(be.value), {
            key: 1,
            value: t.value,
            title: k.value,
            data: l.slotData
          }, null, 8, ["value", "title", "data"])) : (a(), u(Z, { key: 2 }, [
            c(ue) ? (a(), u("a", {
              key: 0,
              class: "lkt-field-text__read-value",
              title: k.value,
              href: "mail:" + t.value
            }, ae(t.value), 9, Ue)) : l.isTel ? (a(), u("a", {
              key: 1,
              class: "lkt-field-text__read-value",
              title: k.value,
              href: "tel:" + t.value
            }, ae(t.value), 9, We)) : (a(), u("div", {
              key: 2,
              class: "lkt-field-text__read-value",
              innerHTML: t.value,
              title: k.value
            }, null, 8, je))
          ], 64)),
          l.allowReadModeSwitch ? (a(), u("div", ze, [
            R("i", {
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: Q
            }, null, 8, Oe)
          ])) : r("", !0)
        ])),
        l.autoValidation && d.value.length > 0 ? (a(), L(g, {
          key: 4,
          items: d.value,
          stack: l.validationStack
        }, null, 8, ["items", "stack"])) : r("", !0)
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
