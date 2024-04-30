import { defineComponent as ce, useSlots as me, ref as k, computed as s, watch as x, openBlock as a, createElementBlock as o, normalizeClass as j, unref as v, renderSlot as T, createCommentVNode as i, Fragment as z, createBlock as O, resolveDynamicComponent as q, withDirectives as G, createElementVNode as P, vModelDynamic as J, toDisplayString as Q, nextTick as pe } from "vue";
import { generateRandomString as W } from "lkt-string-tools";
import { createLktEvent as p } from "lkt-events";
import { httpCall as ye } from "lkt-http-client";
const B = class B {
};
B.customValueSlots = {}, B.customEditSlots = {};
let c = B;
const ke = ["data-show-ui", "data-labeled"], he = ["for", "innerHTML"], we = {
  key: 2,
  class: "lkt-field-text__main"
}, _e = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], be = {
  key: 3,
  class: "lkt-field-text__main"
}, Me = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], ge = {
  key: 4,
  class: "lkt-field__state"
}, Se = ["title"], Ve = ["title"], Be = ["title"], Ee = ["title"], Ce = ["title"], xe = ["title"], Te = ["title", "href"], Pe = ["title", "href"], De = ["innerHTML", "title"], Ne = {
  key: 3,
  class: "lkt-field__state"
}, Re = ["title"], Fe = /* @__PURE__ */ ce({
  __name: "LktFieldText",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: W(16) },
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
    valueSlot: { default: "" },
    editSlot: { default: "" },
    slotData: { default: () => ({}) },
    validationResource: { default: "" },
    validationResourceData: { default: () => ({}) }
  },
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error", "validation", "validating"],
  setup(f, { expose: h, emit: X }) {
    const d = X, w = me(), l = f, u = W(16), g = k(null), D = k(l.modelValue), t = k(l.modelValue), S = k(!1), E = k(!1), y = k(!l.readMode), Y = s(() => typeof l.valid == "function" ? l.valid() : l.valid), Z = s(() => t.value !== D.value), N = s(() => l.reset || l.infoMessage !== "" || l.errorMessage !== "" || l.isPassword && l.showPassword), R = s(() => {
      let e = 0;
      return l.reset && ++e, l.infoMessage && ++e, l.isPassword && l.showPassword && ++e, e;
    }), ee = s(() => l.resetMessage !== "" ? l.resetMessage : ""), le = s(() => S.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), F = s(() => l.autocomplete === !0 ? "on" : "off"), $ = s(() => t.value !== ""), V = s(() => l.isPassword && S.value === !0 ? "text" : l.isEmail ? "email" : l.isPassword ? "password" : l.isNumber ? "number" : l.isTel ? "tel" : l.isSearch ? "search" : "text"), te = s(() => {
      const e = ["lkt-field", "lkt-field-text"];
      return l.palette && e.push(`lkt-field--${l.palette}`), V && e.push(`is-${V.value}`), Z.value && e.push("is-changed"), l.disabled && e.push("is-disabled"), E.value && e.push("has-focus"), R.value > 0 && e.push("has-icons", `has-icons-${R.value}`), e.push(Y.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), m = s(() => typeof t.value == "number" ? t.value.toString() : t.value), _ = s(() => typeof l.min == "string" ? parseFloat(l.min) : typeof l.min == "number" ? l.min : !1), b = s(() => typeof l.max == "string" ? parseFloat(l.max) : typeof l.max == "number" ? l.max : !1), L = () => {
      pe(() => {
        g.value && g.value.focus();
      });
    }, ae = async () => {
      if (l.validationResource) {
        d("validating");
        const e = await ye(l.validationResource, { ...l.validationResourceData, value: t.value });
        d("validation", e);
      }
    };
    x(() => l.readMode, (e) => y.value = !e), x(() => l.modelValue, (e) => {
      if (l.isNumber)
        return ne(e);
      t.value = e;
    }), x(t, (e) => {
      d("update:modelValue", e), ae();
    });
    const C = () => t.value = D.value, oe = () => t.value, I = (e) => d("keyup", e, p(u, { value: t.value })), K = (e) => d("keydown", e, p(u, { value: t.value })), A = (e) => (E.value = !0) && d("focus", e, p(u, { value: t.value })), H = (e) => (E.value = !1) && d("blur", e, p(u, { value: t.value })), M = (e) => d("click", e, p(u, { value: t.value })), se = (e) => d("click-info", e, p(u, { value: t.value })), ie = (e) => d("click-error", e, p(u, { value: t.value })), ue = (e) => S.value = !S.value, U = (e) => {
      y.value = !y.value, y.value && L();
    }, ne = (e) => {
      if (!l.enableAutoNumberFix)
        return !1;
      let r = Number(e), n = !1;
      return _.value !== !1 && r < _.value && (r = _.value, n = !0), b.value !== !1 && r > b.value && (r = b.value, n = !0), n === !0 ? (t.value = r, !0) : !1;
    };
    h({
      Identifier: u,
      reset: C,
      focus: L,
      value: oe,
      isMandatory: () => l.mandatory
    }), C();
    const de = s(() => l.valueSlot !== "" && typeof c.customValueSlots[l.valueSlot] < "u"), re = s(() => c.customValueSlots[l.valueSlot]), fe = s(() => l.editSlot !== "" && typeof c.customEditSlots[l.editSlot] < "u"), ve = s(() => c.customEditSlots[l.editSlot]);
    return (e, r) => (a(), o("div", {
      class: j(te.value),
      "data-show-ui": N.value,
      "data-labeled": !v(w).label
    }, [
      v(w).label ? T(e.$slots, "label", { key: 0 }) : i("", !0),
      v(w).label ? i("", !0) : (a(), o("label", {
        key: 1,
        for: v(u),
        innerHTML: e.label
      }, null, 8, he)),
      y.value ? (a(), o(z, { key: 2 }, [
        v(w).edit ? (a(), o("div", {
          key: 0,
          onClick: M
        }, [
          T(e.$slots, "edit", {
            value: t.value,
            title: m.value,
            data: e.slotData
          })
        ])) : fe.value ? (a(), o("div", {
          key: 1,
          onClick: M
        }, [
          (a(), O(q(ve.value), {
            value: t.value,
            title: m.value,
            data: e.slotData
          }, null, 8, ["value", "title", "data"]))
        ])) : e.placeholder ? (a(), o("div", we, [
          G(P("input", {
            "onUpdate:modelValue": r[0] || (r[0] = (n) => t.value = n),
            ref: (n) => g.value = n,
            value: t.value,
            type: V.value,
            name: e.name,
            id: v(u),
            disabled: e.disabled,
            readonly: e.readonly,
            placeholder: e.placeholder,
            tabindex: e.tabindex,
            autocomplete: F.value,
            min: _.value,
            max: b.value,
            step: e.step,
            onKeyup: I,
            onKeydown: K,
            onFocus: A,
            onBlur: H,
            onClick: M
          }, null, 40, _e), [
            [J, t.value]
          ])
        ])) : (a(), o("div", be, [
          G(P("input", {
            "onUpdate:modelValue": r[1] || (r[1] = (n) => t.value = n),
            ref: (n) => g.value = n,
            value: t.value,
            type: V.value,
            name: e.name,
            id: v(u),
            disabled: e.disabled,
            readonly: e.readonly,
            tabindex: e.tabindex,
            autocomplete: F.value,
            min: _.value,
            max: b.value,
            step: e.step,
            onKeyup: I,
            onKeydown: K,
            onFocus: A,
            onBlur: H,
            onClick: M
          }, null, 40, Me), [
            [J, t.value]
          ])
        ])),
        N.value ? (a(), o("div", ge, [
          l.errorMessage ? (a(), o("i", {
            key: 0,
            class: "lkt-field__error-icon",
            title: l.errorMessage,
            onClick: ie
          }, null, 8, Se)) : i("", !0),
          l.infoMessage ? (a(), o("i", {
            key: 1,
            class: "lkt-field__info-icon",
            title: l.infoMessage,
            onClick: se
          }, null, 8, Ve)) : i("", !0),
          l.isPassword && l.showPassword && $.value ? (a(), o("i", {
            key: 2,
            class: j(le.value),
            title: l.showPasswordMessage,
            onClick: ue
          }, null, 10, Be)) : i("", !0),
          l.reset && $.value ? (a(), o("i", {
            key: 3,
            class: "lkt-field__reset-icon",
            title: ee.value,
            onClick: C
          }, null, 8, Ee)) : i("", !0),
          l.mandatory ? (a(), o("i", {
            key: 4,
            class: "lkt-field__mandatory-icon",
            title: l.mandatoryMessage
          }, null, 8, Ce)) : i("", !0),
          e.allowReadModeSwitch ? (a(), o("i", {
            key: 5,
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: U
          }, null, 8, xe)) : i("", !0)
        ])) : i("", !0)
      ], 64)) : i("", !0),
      y.value ? i("", !0) : (a(), o("div", {
        key: 3,
        class: "lkt-field-text__read",
        onClick: M
      }, [
        v(w).value ? T(e.$slots, "value", {
          key: 0,
          value: t.value,
          title: m.value,
          data: e.slotData
        }) : de.value ? (a(), O(q(re.value), {
          key: 1,
          value: t.value,
          title: m.value
        }, null, 8, ["value", "title"])) : (a(), o(z, { key: 2 }, [
          e.isEmail ? (a(), o("a", {
            key: 0,
            class: "lkt-field-text__read-value",
            title: m.value,
            href: "mail:" + t.value
          }, Q(t.value), 9, Te)) : e.isTel ? (a(), o("a", {
            key: 1,
            class: "lkt-field-text__read-value",
            title: m.value,
            href: "tel:" + t.value
          }, Q(t.value), 9, Pe)) : (a(), o("div", {
            key: 2,
            class: "lkt-field-text__read-value",
            innerHTML: t.value,
            title: m.value
          }, null, 8, De))
        ], 64)),
        e.allowReadModeSwitch ? (a(), o("div", Ne, [
          P("i", {
            class: "lkt-field__edit-icon",
            title: l.switchEditionMessage,
            onClick: U
          }, null, 8, Re)
        ])) : i("", !0)
      ]))
    ], 10, ke));
  }
}), Ae = (f, h) => (c.customValueSlots[f] = h, !0), He = (f, h) => (c.customEditSlots[f] = h, !0), Ue = {
  install: (f) => {
    f.component("lkt-field-text") === void 0 && f.component("lkt-field-text", Fe);
  }
};
export {
  Ue as default,
  He as setTextEditSlot,
  Ae as setTextValueSlot
};
