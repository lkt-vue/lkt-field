import tl, { FieldValidation as g } from "lkt-field-validation";
import { defineComponent as $, computed as r, resolveComponent as I, openBlock as n, createBlock as c, normalizeClass as q, ref as V, watch as C, withCtx as H, createCommentVNode as h, useSlots as al, nextTick as _e, createElementBlock as S, unref as R, renderSlot as se, Fragment as re, resolveDynamicComponent as Ie, createVNode as M, normalizeStyle as Ne, createElementVNode as E, withDirectives as Pe, vModelDynamic as Le, createTextVNode as ue, toDisplayString as de, renderList as ol } from "vue";
import { generateRandomString as Fe, isEmail as il } from "lkt-string-tools";
import { createLktEvent as z } from "lkt-events";
import { httpCall as nl } from "lkt-http-client";
import { __ as Re, availableLanguages as sl, currentLanguage as ul } from "lkt-i18n";
import dl, { addModal as rl } from "lkt-modal";
import fl from "lkt-button";
import pl from "lkt-tooltip";
const _ = class _ {
};
_.defaultEmptyValueSlot = "", _.customValueSlots = {}, _.customEditSlots = {}, _.undoText = "", _.clearText = "", _.switchEditionOnText = "", _.switchEditionOffText = "", _.showPasswordOnText = "", _.showPasswordOffText = "";
let f = _;
const Oe = /* @__PURE__ */ $({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(i, { emit: y }) {
    const p = y, s = i, u = r(() => f.undoText), e = r(() => s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), d = () => p("click");
    return (m, N) => {
      const b = I("lkt-button");
      return n(), c(b, {
        text: m.insideEllipsis ? u.value : "",
        title: u.value,
        class: q(e.value),
        icon: "lkt-field-icon-undo",
        onClick: d
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Ae = /* @__PURE__ */ $({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(i, { emit: y }) {
    const p = y, s = i, u = r(() => f.clearText), e = r(() => s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), d = () => p("click");
    return (m, N) => {
      const b = I("lkt-button");
      return n(), c(b, {
        text: m.insideEllipsis ? u.value : "",
        title: u.value,
        class: q(e.value),
        icon: "lkt-field-icon-cancel",
        onClick: d
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), fe = /* @__PURE__ */ $({
  __name: "PasswordButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(i, { emit: y }) {
    const p = y, s = i, u = V(s.modelValue);
    C(() => s.modelValue, (b) => u.value = b), C(u, (b) => p("update:modelValue", b));
    const e = r(() => u.value ? f.showPasswordOnText : f.showPasswordOffText), d = r(() => u.value === !0 ? "lkt-field-icon-lock-open" : "lkt-field-icon-lock"), m = r(() => s.isFeatured ? "lkt-field--atn-btn" : s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), N = () => p("click");
    return (b, B) => {
      const K = I("lkt-button");
      return n(), c(K, {
        text: b.insideEllipsis ? e.value : "",
        title: e.value,
        class: q(m.value),
        icon: d.value,
        onClick: N,
        checked: u.value,
        "onUpdate:checked": B[0] || (B[0] = (T) => u.value = T),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), pe = /* @__PURE__ */ $({
  __name: "EditionButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(i, { emit: y }) {
    const p = y, s = i, u = V(s.modelValue);
    C(() => s.modelValue, (b) => u.value = b), C(u, (b) => p("update:modelValue", b));
    const e = r(() => u.value ? f.switchEditionOnText : f.switchEditionOffText), d = r(() => u.value === !0 ? "lkt-field-icon-eye" : "lkt-field-icon-pencil"), m = r(() => s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), N = () => p("click");
    return (b, B) => {
      const K = I("lkt-button");
      return n(), c(K, {
        text: b.insideEllipsis ? e.value : "",
        title: e.value,
        class: q(m.value),
        icon: d.value,
        onClick: N,
        checked: u.value,
        "onUpdate:checked": B[0] || (B[0] = (T) => u.value = T),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), cl = /* @__PURE__ */ $({
  __name: "EllipsisActionsButton",
  props: {
    showUndo: { type: Boolean },
    showClear: { type: Boolean },
    showPassword: { type: Boolean },
    showPasswordCheck: { type: Boolean },
    showEdition: { type: Boolean },
    showEditionCheck: { type: Boolean }
  },
  emits: ["undo", "clear", "update:showPasswordCheck", "update:showEditionCheck"],
  setup(i, { emit: y }) {
    const p = y, s = i, u = V(s.showPasswordCheck);
    C(() => s.showPasswordCheck, (d) => u.value = d), C(u, (d) => p("update:showPasswordCheck", d));
    const e = V(s.showEditionCheck);
    return C(() => s.showEditionCheck, (d) => e.value = d), C(e, (d) => p("update:showEditionCheck", d)), (d, m) => {
      const N = I("lkt-button");
      return n(), c(N, {
        split: "",
        "split-icon": "lkt-field-icon-ellipsis-vert",
        class: "lkt-field--info-btn"
      }, {
        split: H(({ doClose: b }) => [
          d.showUndo ? (n(), c(Oe, {
            key: 0,
            onClick: m[0] || (m[0] = () => p("undo")),
            "inside-ellipsis": ""
          })) : h("", !0),
          d.showClear ? (n(), c(Ae, {
            key: 1,
            onClick: m[1] || (m[1] = () => p("clear")),
            "inside-ellipsis": ""
          })) : h("", !0),
          d.showPassword ? (n(), c(fe, {
            key: 2,
            modelValue: u.value,
            "onUpdate:modelValue": m[2] || (m[2] = (B) => u.value = B),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : h("", !0),
          d.showEdition ? (n(), c(pe, {
            key: 3,
            modelValue: e.value,
            "onUpdate:modelValue": m[3] || (m[3] = (B) => e.value = B),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : h("", !0)
        ]),
        _: 1
      });
    };
  }
}), $e = /* @__PURE__ */ $({
  __name: "I18nButton",
  props: {
    modelValue: { default: () => ({}) },
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(i, { emit: y }) {
    const p = y, s = i, u = V(s.modelValue);
    C(() => s.modelValue, (m) => u.value = m, { deep: !0 }), C(u, (m) => p("update:modelValue", m), { deep: !0 });
    const e = r(() => f.clearText), d = r(() => s.isFeatured ? "lkt-field--atn-btn" : s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (m, N) => {
      const b = I("lkt-button");
      return n(), c(b, {
        text: m.insideEllipsis ? e.value : "",
        title: e.value,
        class: q(d.value),
        icon: "lkt-field-icon-language",
        modal: "lkt-field-language-edit",
        "modal-data": { translations: u.value }
      }, null, 8, ["text", "title", "class", "modal-data"]);
    };
  }
}), ml = ["data-show-ui", "data-labeled"], vl = ["for", "innerHTML"], kl = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, hl = {
  key: 3,
  class: "lkt-field-main"
}, yl = { class: "lkt-grid-1" }, bl = { class: "lkt-field-color--tooltip--rgba-container" }, wl = { class: "lkt-field-color--tooltip--hex-input-container" }, Vl = /* @__PURE__ */ E("label", { class: "like-lkt-field-label" }, "HEX", -1), Cl = { class: "lkt-field-color--tooltip--rgba-container" }, gl = { class: "lkt-field-color--tooltip--numeric-input-container" }, El = /* @__PURE__ */ E("label", { class: "like-lkt-field-label" }, "R", -1), xl = { class: "lkt-field-color--tooltip--rgba-container" }, Sl = { class: "lkt-field-color--tooltip--numeric-input-container" }, Bl = /* @__PURE__ */ E("label", { class: "like-lkt-field-label" }, "G", -1), Tl = { class: "lkt-field-color--tooltip--rgba-container" }, Ul = { class: "lkt-field-color--tooltip--numeric-input-container" }, Ml = /* @__PURE__ */ E("label", { class: "like-lkt-field-label" }, "B", -1), _l = { class: "lkt-field-color--tooltip--rgba-container" }, Il = { class: "lkt-field-color--tooltip--numeric-input-container" }, Nl = /* @__PURE__ */ E("label", { class: "like-lkt-field-label" }, "A", -1), Pl = {
  key: 4,
  class: "lkt-field-main"
}, Ll = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Fl = {
  key: 5,
  class: "lkt-field-main"
}, Rl = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], $l = {
  key: 6,
  class: "lkt-field--info-nav"
}, Ol = ["innerHTML", "title"], Al = {
  key: 3,
  class: "lkt-field--info-nav"
}, ce = /* @__PURE__ */ $({
  __name: "LktFieldText",
  props: {
    modelValue: { default: "" },
    languageValues: { default: () => ({}) },
    valid: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    label: { default: "" },
    labelIcon: {},
    labelIconAtEnd: { type: Boolean },
    palette: { default: "" },
    name: { default: Fe(16) },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    canClear: { type: Boolean, default: !1 },
    canUndo: { type: Boolean },
    canI18n: { type: Boolean },
    mandatoryMessage: { default: "" },
    infoMessage: { default: "" },
    errorMessage: { default: "" },
    min: { default: void 0 },
    max: { default: void 0 },
    step: { default: 1 },
    isTel: { type: Boolean, default: !1 },
    isEmail: { type: Boolean, default: !1 },
    isPassword: { type: Boolean, default: !1 },
    isSearch: { type: Boolean, default: !1 },
    isNumber: { type: Boolean, default: !1 },
    isColor: { type: Boolean, default: !1 },
    isRange: { type: Boolean, default: !1 },
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
    checkEqualTo: { default: void 0 },
    featuredButton: { default: "" },
    infoButtonEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:valid", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error", "validation", "validating"],
  setup(i, { expose: y, emit: p }) {
    const s = p, u = al(), e = i, d = Fe(16), m = V(null);
    let N = [];
    const b = (l) => {
      if (e.isColor) {
        if ([0, 1].includes(l.length))
          T.value = 0, P.value = 0, L.value = 0, F.value = 255;
        else if ([7, 9].includes(l.length)) {
          let a = B(l);
          T.value = a.r, P.value = a.g, L.value = a.b, F.value = a.a;
        }
      }
      return l;
    }, B = (l) => {
      let a = parseInt(+("0x" + l.substring(1, 3)), 10), o = parseInt(+("0x" + l.substring(3, 5)), 10), x = parseInt(+("0x" + l.substring(5, 7)), 10), D = 255;
      return l.length === 9 && (D = parseInt(+("0x" + l.substring(5, 7)), 10)), { r: a, g: o, b: x, a: D };
    }, K = V(e.modelValue), T = V(255), P = V(255), L = V(255), F = V(255), t = V(b(e.modelValue)), J = V(e.languageValues), Z = V(e.valid), O = V(!1), le = V(!1), te = V(!1), ae = V(!1), k = V(N), U = V(!e.readMode), me = r(() => t.value !== K.value), ve = r(() => e.canClear || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), ke = r(() => {
      let l = 0;
      return e.canClear && ++l, e.infoMessage && ++l, e.isPassword && e.showPassword && ++l, l;
    }), he = r(() => e.autocomplete === !0 ? "on" : "off"), ye = r(() => t.value !== ""), Q = r(() => e.isPassword && O.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : e.isColor ? "color" : e.isRange ? "range" : "text"), De = r(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), Q && l.push(`is-${Q.value}`), me.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), e.featuredButton && l.push("with-atn-btn"), e.mandatory && U.value && l.push("is-mandatory-field"), le.value && l.push("has-focus"), !e.isRange && e.autoValidation && ae.value && te.value && (k.value.length > 0 ? l.push("is-invalid") : l.push("is-valid")), ke.value > 0 && l.push("has-icons", `has-icons-${ke.value}`), e.isRange || (l.push(Z.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty")), l.join(" ");
    }), A = r(() => typeof t.value == "number" ? t.value.toString() : t.value), G = r(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), W = r(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), be = r(() => {
      let l = "";
      if (e.label.startsWith("__:") ? l = Re(e.label.substring(3)) : l = e.label, e.labelIcon) {
        let a = '<i class="' + e.labelIcon + '"></i>';
        e.labelIconAtEnd ? l += a : l = a + l;
      }
      return l;
    }), we = r(() => e.placeholder.startsWith("__:") ? Re(e.placeholder.substring(3)) : e.placeholder), Ve = r(() => e.canUndo && me.value), Ce = r(() => e.canClear && ye.value), oe = r(() => e.isPassword && e.showPassword && ye.value), ge = () => {
      _e(() => {
        m.value && m.value.focus();
      });
    }, ze = async () => {
      if (e.validationResource) {
        s("validating");
        const l = await nl(e.validationResource, {
          ...e.validationResourceData,
          value: t.value
        });
        s("validation", l);
      }
    };
    C(() => e.checkEqualTo, (l) => j()), C(() => e.readMode, (l) => U.value = !l), C(() => e.valid, (l) => Z.value = l), C(() => e.modelValue, (l) => {
      t.value = l, e.isNumber && Ze(l);
    }), C(t, (l) => {
      s("update:modelValue", l), ze(), j();
    }), C(Z, (l) => {
      s("update:valid", l);
    });
    const j = () => {
      e.autoValidationType === "blur" && (!te.value || !ae.value) || e.isRange || (k.value = [], _e(() => {
        let l = typeof e.min > "u" ? 0 : parseInt(e.min), a = typeof e.max > "u" ? 0 : parseInt(e.max);
        if (e.isNumber && typeof e.min < "u" && typeof e.max < "u" && (t.value < l || t.value > a)) {
          k.value.push(g.createNumBetween(l, a, "ko")), Z.value = !1;
          return;
        }
        if (!e.isNumber && !e.isEmail && e.mandatory && t.value === "" ? k.value.push(g.createEmpty("ko")) : e.isEmail || l > 0 && (!e.isNumber && t.value.length < l ? k.value.push(g.createMinStr(l, "ko")) : t.value < l && k.value.push(g.createMinNum(l, "ko"))), a > 0 && (!e.isNumber && t.value.length > a ? k.value.push(g.createMaxStr(a, "ko")) : t.value > a && k.value.push(g.createMaxNum(a, "ko"))), e.isEmail && e.mandatory && t.value === "" ? k.value.push(g.createEmpty("ko")) : e.isEmail && !il(t.value) && k.value.push(g.createEmail("ko")), !e.isNumber) {
          if (typeof e.minNumbers < "u") {
            let o = parseInt(e.minNumbers);
            t.value.replace(/\D+/g, "").length < o && k.value.push(g.createMinNumbers(o, "ko"));
          }
          if (typeof e.maxNumbers < "u") {
            let o = parseInt(e.maxNumbers);
            t.value.replace(/\D+/g, "").length > o && k.value.push(g.createMaxNumbers(o, "ko"));
          }
          if (typeof e.minUpperChars < "u") {
            let o = parseInt(e.minUpperChars);
            t.value.replace(/[^A-Z]+/g, "").length < o && k.value.push(g.createMinUpperChars(o, "ko"));
          }
          if (typeof e.maxUpperChars < "u") {
            let o = parseInt(e.maxUpperChars);
            t.value.replace(/[^A-Z]+/g, "").length > o && k.value.push(g.createMaxUpperChars(o, "ko"));
          }
          if (typeof e.minLowerChars < "u") {
            let o = parseInt(e.minLowerChars);
            t.value.replace(/[A-Z]+/g, "").length < o && k.value.push(g.createMinLowerChars(o, "ko"));
          }
          if (typeof e.maxLowerChars < "u") {
            let o = parseInt(e.maxLowerChars);
            t.value.replace(/[A-Z]+/g, "").length > o && k.value.push(g.createMaxLowerChars(o, "ko"));
          }
          if (typeof e.minChars < "u") {
            let o = parseInt(e.minChars);
            t.value.replace(/\d+/g, "").length < o && k.value.push(g.createMinChars(o, "ko"));
          }
          if (typeof e.maxChars < "u") {
            let o = parseInt(e.maxChars);
            t.value.replace(/\d+/g, "").length > o && k.value.push(g.createMaxChars(o, "ko"));
          }
          if (typeof e.minSpecialChars < "u") {
            let o = parseInt(e.minSpecialChars);
            t.value.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < o && k.value.push(g.createMinSpecialChars(o, "ko"));
          }
          if (typeof e.maxSpecialChars < "u") {
            let o = parseInt(e.maxSpecialChars);
            t.value.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > o && k.value.push(g.createMaxSpecialChars(o, "ko"));
          }
        }
        e.checkEqualTo && t.value !== e.checkEqualTo && k.value.push(g.createEqualTo(e.checkEqualTo, "ko")), Z.value = k.value.length === 0;
      }));
    }, Y = () => t.value = K.value, Ee = () => t.value = "", Ke = () => t.value, xe = (l) => {
      j(), s("keyup", l, z(d, { value: t.value }));
    }, Se = (l) => s("keydown", l, z(d, { value: t.value })), Be = (l) => {
      ae.value = !0, j(), (le.value = !0) && s("focus", l, z(d, { value: t.value }));
    }, Te = (l) => {
    }, Ue = (l) => {
      te.value = !0, j(), (le.value = !1) && s("blur", l, z(d, { value: t.value }));
    }, X = (l) => {
      s("click", l, z(d, { value: t.value }));
    }, He = (l) => s("click-info", l, z(d, { value: t.value })), qe = (l) => s("click-error", l, z(d, { value: t.value })), Me = (l) => {
      U.value && ge();
    }, Ze = (l) => {
      if (!e.enableAutoNumberFix) return !1;
      let a = Number(l), o = !1;
      return G.value !== !1 && a < G.value && (a = G.value, o = !0), W.value !== !1 && a > W.value && (a = W.value, o = !0), o === !0 ? (t.value = a, !0) : !1;
    };
    y({
      Identifier: d,
      reset: Y,
      focus: ge,
      value: Ke,
      isMandatory: () => e.mandatory
    }), Y();
    const Ge = r(() => t.value === "" ? e.emptyValueSlot !== "" && typeof f.customValueSlots[e.emptyValueSlot] < "u" || f.defaultEmptyValueSlot && typeof f.customValueSlots[f.defaultEmptyValueSlot] < "u" : e.valueSlot !== "" && typeof f.customValueSlots[e.valueSlot] < "u"), We = r(() => t.value === "" ? f.customValueSlots[e.emptyValueSlot] ?? f.customValueSlots[f.defaultEmptyValueSlot] : f.customValueSlots[e.valueSlot]), je = r(() => e.editSlot !== "" && typeof f.customEditSlots[e.editSlot] < "u"), Xe = r(() => f.customEditSlots[e.editSlot]), Je = (l, a, o, x) => {
      let D = parseInt(l).toString(16).padStart(2, "0").toUpperCase(), ne = parseInt(a).toString(16).padStart(2, "0").toUpperCase(), v = parseInt(o).toString(16).padStart(2, "0").toUpperCase(), w = "#" + D + ne + v;
      if (x == 255) return w;
      let ll = parseInt(x).toString(16).padStart(2, "0").toUpperCase();
      return w + ll;
    }, ie = r(() => {
      if (!e.isColor) return "";
      let l = B(t.value);
      return (0.299 * l.r + 0.587 * l.g + 0.114 * l.b) / l.a > 0.5 ? "#000000" : "#ffffff";
    }), ee = (l) => {
      t.value = Je(
        T.value,
        P.value,
        L.value,
        F.value
      );
    }, Qe = (l) => {
      b(t.value);
    };
    C(T, ee), C(P, ee), C(L, ee), C(F, ee);
    const Ye = r(() => e.isColor ? t.value === "" || t.value === "#" ? {} : {
      background: t.value,
      "--lkt-btn-bg": t.value,
      color: ie.value,
      "--lkt-btn-color": ie.value
    } : {}), el = r(() => e.isColor ? t.value === "" || t.value === "#" ? {} : {
      "--lkt-field-bg-input": t.value,
      "--lkt-field-color": ie.value
    } : {});
    return (l, a) => {
      const o = I("lkt-field-text", !0), x = I("lkt-button"), D = I("lkt-anchor"), ne = I("lkt-field-validations");
      return n(), S("div", {
        class: q(De.value),
        "data-show-ui": ve.value,
        "data-labeled": !R(u).label
      }, [
        R(u).label ? se(l.$slots, "label", { key: 0 }) : h("", !0),
        !R(u).label && be.value !== "" ? (n(), S("label", {
          key: 1,
          for: R(d),
          innerHTML: be.value
        }, null, 8, vl)) : h("", !0),
        U.value ? (n(), S(re, { key: 2 }, [
          l.featuredButton ? (n(), S("div", kl, [
            l.featuredButton === "password" && oe.value ? (n(), c(fe, {
              key: 0,
              modelValue: O.value,
              "onUpdate:modelValue": a[0] || (a[0] = (v) => O.value = v),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : h("", !0),
            l.featuredButton === "i18n" && l.canI18n ? (n(), c($e, {
              key: 1,
              modelValue: J.value,
              "onUpdate:modelValue": a[1] || (a[1] = (v) => J.value = v),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : h("", !0)
          ])) : h("", !0),
          R(u).edit ? (n(), S("div", {
            key: 1,
            onClick: X
          }, [
            se(l.$slots, "edit", {
              value: t.value,
              title: A.value,
              data: l.slotData
            })
          ])) : je.value ? (n(), S("div", {
            key: 2,
            onClick: X
          }, [
            (n(), c(Ie(Xe.value), {
              value: t.value,
              title: A.value,
              data: l.slotData
            }, null, 8, ["value", "title", "data"]))
          ])) : l.isColor ? (n(), S("div", hl, [
            M(x, {
              class: "lkt-field-color--alpha--toggle-button",
              style: Ne(Ye.value),
              text: t.value,
              tooltip: "",
              "tooltip-class": "lkt-field-color--alpha--tooltip",
              "tooltip-location-y": "bottom",
              "tooltip-location-x": "left-corner"
            }, {
              tooltip: H(({ doClose: v }) => [
                E("div", yl, [
                  E("div", bl, [
                    E("div", wl, [
                      Vl,
                      M(o, {
                        modelValue: t.value,
                        "onUpdate:modelValue": a[2] || (a[2] = (w) => t.value = w),
                        style: Ne(el.value),
                        onChange: Qe
                      }, null, 8, ["modelValue", "style"])
                    ])
                  ]),
                  E("div", Cl, [
                    E("div", gl, [
                      El,
                      M(o, {
                        modelValue: T.value,
                        "onUpdate:modelValue": a[3] || (a[3] = (w) => T.value = w),
                        "is-number": "",
                        min: "0",
                        max: "255",
                        step: "1"
                      }, null, 8, ["modelValue"])
                    ]),
                    M(o, {
                      class: "color-range color-range--red",
                      modelValue: T.value,
                      "onUpdate:modelValue": a[4] || (a[4] = (w) => T.value = w),
                      "is-range": "",
                      min: "0",
                      max: "255",
                      step: "1"
                    }, null, 8, ["modelValue"])
                  ]),
                  E("div", xl, [
                    E("div", Sl, [
                      Bl,
                      M(o, {
                        modelValue: P.value,
                        "onUpdate:modelValue": a[5] || (a[5] = (w) => P.value = w),
                        "is-number": "",
                        min: "0",
                        max: "255",
                        step: "1"
                      }, null, 8, ["modelValue"])
                    ]),
                    M(o, {
                      class: "color-range color-range--green",
                      modelValue: P.value,
                      "onUpdate:modelValue": a[6] || (a[6] = (w) => P.value = w),
                      "is-range": "",
                      min: "0",
                      max: "255",
                      step: "1"
                    }, null, 8, ["modelValue"])
                  ]),
                  E("div", Tl, [
                    E("div", Ul, [
                      Ml,
                      M(o, {
                        modelValue: L.value,
                        "onUpdate:modelValue": a[7] || (a[7] = (w) => L.value = w),
                        "is-number": "",
                        min: "0",
                        max: "255",
                        step: "1"
                      }, null, 8, ["modelValue"])
                    ]),
                    M(o, {
                      class: "color-range color-range--blue",
                      modelValue: L.value,
                      "onUpdate:modelValue": a[8] || (a[8] = (w) => L.value = w),
                      "is-range": "",
                      min: "0",
                      max: "255",
                      step: "1"
                    }, null, 8, ["modelValue"])
                  ]),
                  E("div", _l, [
                    E("div", Il, [
                      Nl,
                      M(o, {
                        modelValue: F.value,
                        "onUpdate:modelValue": a[9] || (a[9] = (w) => F.value = w),
                        "is-number": "",
                        min: "0",
                        max: "255",
                        step: "1"
                      }, null, 8, ["modelValue"])
                    ]),
                    M(o, {
                      class: "color-range color-range--alpha",
                      modelValue: F.value,
                      "onUpdate:modelValue": a[10] || (a[10] = (w) => F.value = w),
                      "is-range": "",
                      min: "0",
                      max: "255",
                      step: "1"
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            }, 8, ["style", "text"])
          ])) : we.value ? (n(), S("div", Pl, [
            Pe(E("input", {
              "onUpdate:modelValue": a[11] || (a[11] = (v) => t.value = v),
              ref: (v) => m.value = v,
              value: t.value,
              type: Q.value,
              name: l.name,
              id: R(d),
              disabled: l.disabled,
              readonly: l.readonly,
              placeholder: we.value,
              tabindex: l.tabindex,
              autocomplete: he.value,
              min: G.value,
              max: W.value,
              step: l.step,
              onKeyup: xe,
              onKeydown: Se,
              onFocus: Be,
              onBlur: Ue,
              onClick: X,
              onChange: Te
            }, null, 40, Ll), [
              [Le, t.value]
            ])
          ])) : (n(), S("div", Fl, [
            Pe(E("input", {
              "onUpdate:modelValue": a[12] || (a[12] = (v) => t.value = v),
              ref: (v) => m.value = v,
              value: t.value,
              type: Q.value,
              name: l.name,
              id: R(d),
              disabled: l.disabled,
              readonly: l.readonly,
              tabindex: l.tabindex,
              autocomplete: he.value,
              min: G.value,
              max: W.value,
              step: l.step,
              onKeyup: xe,
              onKeydown: Se,
              onFocus: Be,
              onBlur: Ue,
              onClick: X,
              onChange: Te
            }, null, 40, Rl), [
              [Le, t.value]
            ])
          ])),
          ve.value ? (n(), S("div", $l, [
            !l.infoButtonEllipsis && Ve.value ? (n(), c(Oe, {
              key: 0,
              onClick: Y
            })) : h("", !0),
            !l.infoButtonEllipsis && Ce.value ? (n(), c(Ae, {
              key: 1,
              onClick: Ee
            })) : h("", !0),
            l.errorMessage ? (n(), c(x, {
              key: 2,
              title: l.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-warning",
              onClick: qe
            }, null, 8, ["title"])) : h("", !0),
            l.infoMessage ? (n(), c(x, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-info",
              onClick: He,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: H(() => [
                ue(de(l.infoMessage), 1)
              ]),
              _: 1
            })) : h("", !0),
            !l.infoButtonEllipsis && oe.value && l.featuredButton !== "password" ? (n(), c(fe, {
              key: 4,
              modelValue: O.value,
              "onUpdate:modelValue": a[13] || (a[13] = (v) => O.value = v)
            }, null, 8, ["modelValue"])) : h("", !0),
            !l.infoButtonEllipsis && l.canI18n && l.featuredButton !== "i18n" ? (n(), c($e, {
              key: 5,
              modelValue: J.value,
              "onUpdate:modelValue": a[14] || (a[14] = (v) => J.value = v)
            }, null, 8, ["modelValue"])) : h("", !0),
            !l.infoButtonEllipsis && l.allowReadModeSwitch ? (n(), c(pe, {
              key: 6,
              modelValue: U.value,
              "onUpdate:modelValue": a[15] || (a[15] = (v) => U.value = v),
              onClick: Me
            }, null, 8, ["modelValue"])) : h("", !0),
            l.infoButtonEllipsis ? (n(), c(cl, {
              key: 7,
              "show-undo": Ve.value,
              "show-clear": Ce.value,
              "show-password": oe.value,
              "show-edition": l.allowReadModeSwitch,
              "show-password-check": O.value,
              "onUpdate:showPasswordCheck": a[16] || (a[16] = (v) => O.value = v),
              "show-edition-check": U.value,
              "onUpdate:showEditionCheck": a[17] || (a[17] = (v) => U.value = v),
              onUndo: Y,
              onClear: Ee
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : h("", !0)
          ])) : h("", !0)
        ], 64)) : h("", !0),
        U.value ? h("", !0) : (n(), S("div", {
          key: 3,
          class: "lkt-field-text__read",
          onClick: X
        }, [
          R(u).value ? se(l.$slots, "value", {
            key: 0,
            value: t.value,
            title: A.value,
            data: l.slotData
          }) : Ge.value ? (n(), c(Ie(We.value), {
            key: 1,
            value: t.value,
            title: A.value,
            data: l.slotData
          }, null, 8, ["value", "title", "data"])) : (n(), S(re, { key: 2 }, [
            l.isEmail ? (n(), c(D, {
              key: 0,
              class: "lkt-field-text__read-value",
              title: A.value,
              to: "mail:" + t.value
            }, {
              default: H(() => [
                ue(de(t.value), 1)
              ]),
              _: 1
            }, 8, ["title", "to"])) : l.isTel ? (n(), c(D, {
              key: 1,
              class: "lkt-field-text__read-value",
              title: A.value,
              to: "tel:" + t.value
            }, {
              default: H(() => [
                ue(de(t.value), 1)
              ]),
              _: 1
            }, 8, ["title", "to"])) : (n(), S("div", {
              key: 2,
              class: "lkt-field-text__read-value",
              innerHTML: t.value,
              title: A.value
            }, null, 8, Ol))
          ], 64)),
          l.allowReadModeSwitch ? (n(), S("div", Al, [
            l.allowReadModeSwitch ? (n(), c(pe, {
              key: 0,
              modelValue: U.value,
              "onUpdate:modelValue": a[18] || (a[18] = (v) => U.value = v),
              onClick: Me
            }, null, 8, ["modelValue"])) : h("", !0)
          ])) : h("", !0)
        ])),
        l.autoValidation && k.value.length > 0 ? (n(), c(ne, {
          key: 4,
          items: k.value,
          stack: l.validationStack,
          min: l.min,
          max: l.max
        }, null, 8, ["items", "stack", "min", "max"])) : h("", !0)
      ], 10, ml);
    };
  }
}), Ql = (i, y) => (f.customValueSlots[i] = y, !0), Yl = (i, y) => (f.customEditSlots[i] = y, !0), Dl = { class: "lkt-grid-1" }, zl = /* @__PURE__ */ $({
  __name: "LktTextLanguageEditModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    translations: { default: () => ({}) }
  },
  setup(i) {
    const y = r(() => sl.value.filter((p) => p !== ul.value));
    return (p, s) => {
      const u = I("lkt-modal");
      return n(), c(u, {
        "modal-name": p.modalName,
        title: "__:lmm.confirmFormLeave",
        "modal-key": p.modalKey,
        "z-index": p.zIndex
      }, {
        default: H(() => [
          E("div", Dl, [
            M(ce, {
              label: "Idioma actual (ES)",
              modelValue: p.translations.es,
              "onUpdate:modelValue": s[0] || (s[0] = (e) => p.translations.es = e),
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["modelValue"]),
            (n(!0), S(re, null, ol(y.value, (e) => (n(), c(ce, {
              label: "Idioma (" + e + ")",
              modelValue: p.translations[e],
              "onUpdate:modelValue": (d) => p.translations[e] = d,
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]))), 256))
          ])
        ]),
        _: 1
      }, 8, ["modal-name", "modal-key", "z-index"]);
    };
  }
}), et = {
  install: (i) => {
    i.component("lkt-modal") === void 0 && i.use(dl), i.component("lkt-button") === void 0 && i.use(fl), i.component("lkt-tooltip") === void 0 && i.use(pl), i.component("lkt-field-text") === void 0 && i.component("lkt-field-text", ce), i.component("lkt-field-validations") === void 0 && i.use(tl), rl("lkt-field-language-edit", zl);
  }
}, lt = (i, y) => {
  f.defaultEmptyValueSlot = i, y && (f.customValueSlots[i] = y);
}, tt = (i) => f.undoText = i, at = (i) => f.clearText = i, ot = (i) => f.switchEditionOnText = i, it = (i) => f.switchEditionOffText = i, nt = (i) => f.showPasswordOnText = i, st = (i) => f.showPasswordOffText = i;
export {
  et as default,
  lt as setDefaultTextEmptyValueSlot,
  at as setFieldClearText,
  st as setFieldShowPasswordOffText,
  nt as setFieldShowPasswordOnText,
  it as setFieldSwitchEditionOffText,
  ot as setFieldSwitchEditionOnText,
  tt as setFieldUndoText,
  Yl as setTextEditSlot,
  Ql as setTextValueSlot
};
