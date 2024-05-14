import { defineComponent as ve, useSlots as ce, ref as h, computed as u, watch as x, openBlock as a, createElementBlock as o, normalizeClass as U, unref as m, renderSlot as C, createCommentVNode as i, Fragment as j, createBlock as z, resolveDynamicComponent as O, withDirectives as q, createElementVNode as T, vModelDynamic as G, toDisplayString as J, nextTick as me } from "vue";
import { generateRandomString as Q } from "lkt-string-tools";
import { createLktEvent as y } from "lkt-events";
import { httpCall as pe } from "lkt-http-client";
let ye = {}, ke = {};
const s = {
  defaultEmptyValueSlot: "",
  customValueSlots: ye,
  customEditSlots: ke
}, he = ["data-show-ui", "data-labeled"], Se = ["for", "innerHTML"], _e = {
  key: 2,
  class: "lkt-field-text__main"
}, we = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], be = {
  key: 3,
  class: "lkt-field-text__main"
}, Ve = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], ge = {
  key: 4,
  class: "lkt-field__state"
}, Me = ["title"], Ee = ["title"], Be = ["title"], xe = ["title"], Ce = ["title"], Te = ["title"], Pe = ["title", "href"], De = ["title", "href"], Ne = ["innerHTML", "title"], Re = {
  key: 3,
  class: "lkt-field__state"
}, Fe = ["title"], $e = /* @__PURE__ */ ve({
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
  setup(n, { expose: c, emit: W }) {
    const f = W, S = ce(), e = n, d = Q(16), V = h(null), P = h(e.modelValue), t = h(e.modelValue), g = h(!1), E = h(!1), k = h(!e.readMode), X = u(() => typeof e.valid == "function" ? e.valid() : e.valid), Y = u(() => t.value !== P.value), D = u(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), N = u(() => {
      let l = 0;
      return e.reset && ++l, e.infoMessage && ++l, e.isPassword && e.showPassword && ++l, l;
    }), Z = u(() => e.resetMessage !== "" ? e.resetMessage : ""), ee = u(() => g.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), R = u(() => e.autocomplete === !0 ? "on" : "off"), F = u(() => t.value !== ""), M = u(() => e.isPassword && g.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : "text"), le = u(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), M && l.push(`is-${M.value}`), Y.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), E.value && l.push("has-focus"), N.value > 0 && l.push("has-icons", `has-icons-${N.value}`), l.push(X.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty"), l.join(" ");
    }), p = u(() => typeof t.value == "number" ? t.value.toString() : t.value), _ = u(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), w = u(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), $ = () => {
      me(() => {
        V.value && V.value.focus();
      });
    }, te = async () => {
      if (e.validationResource) {
        f("validating");
        const l = await pe(e.validationResource, { ...e.validationResourceData, value: t.value });
        f("validation", l);
      }
    };
    x(() => e.readMode, (l) => k.value = !l), x(() => e.modelValue, (l) => {
      if (e.isNumber)
        return ie(l);
      t.value = l;
    }), x(t, (l) => {
      f("update:modelValue", l), te();
    });
    const B = () => t.value = P.value, ae = () => t.value, L = (l) => f("keyup", l, y(d, { value: t.value })), I = (l) => f("keydown", l, y(d, { value: t.value })), K = (l) => (E.value = !0) && f("focus", l, y(d, { value: t.value })), A = (l) => (E.value = !1) && f("blur", l, y(d, { value: t.value })), b = (l) => f("click", l, y(d, { value: t.value })), oe = (l) => f("click-info", l, y(d, { value: t.value })), ue = (l) => f("click-error", l, y(d, { value: t.value })), se = (l) => g.value = !g.value, H = (l) => {
      k.value = !k.value, k.value && $();
    }, ie = (l) => {
      if (!e.enableAutoNumberFix)
        return !1;
      let v = Number(l), r = !1;
      return _.value !== !1 && v < _.value && (v = _.value, r = !0), w.value !== !1 && v > w.value && (v = w.value, r = !0), r === !0 ? (t.value = v, !0) : !1;
    };
    c({
      Identifier: d,
      reset: B,
      focus: $,
      value: ae,
      isMandatory: () => e.mandatory
    }), B();
    const ne = u(() => t.value === "" ? e.emptyValueSlot !== "" && typeof s.customValueSlots[e.emptyValueSlot] < "u" || s.defaultEmptyValueSlot && typeof s.customValueSlots[s.defaultEmptyValueSlot] < "u" : e.valueSlot !== "" && typeof s.customValueSlots[e.valueSlot] < "u"), de = u(() => t.value === "" ? s.customValueSlots[e.emptyValueSlot] ?? s.customValueSlots[s.defaultEmptyValueSlot] : s.customValueSlots[e.valueSlot]), re = u(() => e.editSlot !== "" && typeof s.customEditSlots[e.editSlot] < "u"), fe = u(() => s.customEditSlots[e.editSlot]);
    return (l, v) => (a(), o("div", {
      class: U(le.value),
      "data-show-ui": D.value,
      "data-labeled": !m(S).label
    }, [
      m(S).label ? C(l.$slots, "label", { key: 0 }) : i("", !0),
      m(S).label ? i("", !0) : (a(), o("label", {
        key: 1,
        for: m(d),
        innerHTML: l.label
      }, null, 8, Se)),
      k.value ? (a(), o(j, { key: 2 }, [
        m(S).edit ? (a(), o("div", {
          key: 0,
          onClick: b
        }, [
          C(l.$slots, "edit", {
            value: t.value,
            title: p.value,
            data: l.slotData
          })
        ])) : re.value ? (a(), o("div", {
          key: 1,
          onClick: b
        }, [
          (a(), z(O(fe.value), {
            value: t.value,
            title: p.value,
            data: l.slotData
          }, null, 8, ["value", "title", "data"]))
        ])) : l.placeholder ? (a(), o("div", _e, [
          q(T("input", {
            "onUpdate:modelValue": v[0] || (v[0] = (r) => t.value = r),
            ref: (r) => V.value = r,
            value: t.value,
            type: M.value,
            name: l.name,
            id: m(d),
            disabled: l.disabled,
            readonly: l.readonly,
            placeholder: l.placeholder,
            tabindex: l.tabindex,
            autocomplete: R.value,
            min: _.value,
            max: w.value,
            step: l.step,
            onKeyup: L,
            onKeydown: I,
            onFocus: K,
            onBlur: A,
            onClick: b
          }, null, 40, we), [
            [G, t.value]
          ])
        ])) : (a(), o("div", be, [
          q(T("input", {
            "onUpdate:modelValue": v[1] || (v[1] = (r) => t.value = r),
            ref: (r) => V.value = r,
            value: t.value,
            type: M.value,
            name: l.name,
            id: m(d),
            disabled: l.disabled,
            readonly: l.readonly,
            tabindex: l.tabindex,
            autocomplete: R.value,
            min: _.value,
            max: w.value,
            step: l.step,
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
          e.errorMessage ? (a(), o("i", {
            key: 0,
            class: "lkt-field__error-icon",
            title: e.errorMessage,
            onClick: ue
          }, null, 8, Me)) : i("", !0),
          e.infoMessage ? (a(), o("i", {
            key: 1,
            class: "lkt-field__info-icon",
            title: e.infoMessage,
            onClick: oe
          }, null, 8, Ee)) : i("", !0),
          e.isPassword && e.showPassword && F.value ? (a(), o("i", {
            key: 2,
            class: U(ee.value),
            title: e.showPasswordMessage,
            onClick: se
          }, null, 10, Be)) : i("", !0),
          e.reset && F.value ? (a(), o("i", {
            key: 3,
            class: "lkt-field__reset-icon",
            title: Z.value,
            onClick: B
          }, null, 8, xe)) : i("", !0),
          e.mandatory ? (a(), o("i", {
            key: 4,
            class: "lkt-field__mandatory-icon",
            title: e.mandatoryMessage
          }, null, 8, Ce)) : i("", !0),
          l.allowReadModeSwitch ? (a(), o("i", {
            key: 5,
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: H
          }, null, 8, Te)) : i("", !0)
        ])) : i("", !0)
      ], 64)) : i("", !0),
      k.value ? i("", !0) : (a(), o("div", {
        key: 3,
        class: "lkt-field-text__read",
        onClick: b
      }, [
        m(S).value ? C(l.$slots, "value", {
          key: 0,
          value: t.value,
          title: p.value,
          data: l.slotData
        }) : ne.value ? (a(), z(O(de.value), {
          key: 1,
          value: t.value,
          title: p.value
        }, null, 8, ["value", "title"])) : (a(), o(j, { key: 2 }, [
          l.isEmail ? (a(), o("a", {
            key: 0,
            class: "lkt-field-text__read-value",
            title: p.value,
            href: "mail:" + t.value
          }, J(t.value), 9, Pe)) : l.isTel ? (a(), o("a", {
            key: 1,
            class: "lkt-field-text__read-value",
            title: p.value,
            href: "tel:" + t.value
          }, J(t.value), 9, De)) : (a(), o("div", {
            key: 2,
            class: "lkt-field-text__read-value",
            innerHTML: t.value,
            title: p.value
          }, null, 8, Ne))
        ], 64)),
        l.allowReadModeSwitch ? (a(), o("div", Re, [
          T("i", {
            class: "lkt-field__edit-icon",
            title: e.switchEditionMessage,
            onClick: H
          }, null, 8, Fe)
        ])) : i("", !0)
      ]))
    ], 10, he));
  }
}), He = (n, c) => (s.customValueSlots[n] = c, !0), Ue = (n, c) => (s.customEditSlots[n] = c, !0), je = {
  install: (n) => {
    n.component("lkt-field-text") === void 0 && n.component("lkt-field-text", $e);
  }
}, ze = (n, c) => {
  s.defaultEmptyValueSlot = n, c && (s.customValueSlots[n] = c);
};
export {
  je as default,
  ze as setDefaultTextEmptyValueSlot,
  Ue as setTextEditSlot,
  He as setTextValueSlot
};
