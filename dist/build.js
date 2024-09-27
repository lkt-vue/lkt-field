import Ge, { FieldValidation as d } from "lkt-field-validation";
import { defineComponent as We, useSlots as je, ref as p, computed as n, watch as C, nextTick as pe, resolveComponent as K, openBlock as s, createElementBlock as f, normalizeClass as me, unref as M, renderSlot as X, createCommentVNode as h, Fragment as he, createVNode as g, createBlock as F, resolveDynamicComponent as ke, normalizeStyle as ye, withCtx as J, createElementVNode as v, withDirectives as ge, vModelDynamic as be, createTextVNode as Ce, toDisplayString as Ve } from "vue";
import { generateRandomString as Se, isEmail as Oe } from "lkt-string-tools";
import { createLktEvent as B } from "lkt-events";
import { httpCall as Xe } from "lkt-http-client";
import { __ as _e } from "lkt-i18n";
let Je = {}, Qe = {};
const c = {
  defaultEmptyValueSlot: "",
  customValueSlots: Je,
  customEditSlots: Qe
}, Ye = ["data-show-ui", "data-labeled"], el = ["for", "innerHTML"], ll = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, al = {
  key: 3,
  class: "lkt-field-main"
}, tl = { class: "lkt-grid-1" }, ol = { class: "lkt-field-color--tooltip--rgba-container" }, il = { class: "lkt-field-color--tooltip--hex-input-container" }, ul = /* @__PURE__ */ v("label", { class: "like-lkt-field-label" }, "HEX", -1), sl = { class: "lkt-field-color--tooltip--rgba-container" }, nl = { class: "lkt-field-color--tooltip--numeric-input-container" }, rl = /* @__PURE__ */ v("label", { class: "like-lkt-field-label" }, "R", -1), dl = { class: "lkt-field-color--tooltip--rgba-container" }, fl = { class: "lkt-field-color--tooltip--numeric-input-container" }, vl = /* @__PURE__ */ v("label", { class: "like-lkt-field-label" }, "G", -1), cl = { class: "lkt-field-color--tooltip--rgba-container" }, pl = { class: "lkt-field-color--tooltip--numeric-input-container" }, ml = /* @__PURE__ */ v("label", { class: "like-lkt-field-label" }, "B", -1), hl = { class: "lkt-field-color--tooltip--rgba-container" }, kl = { class: "lkt-field-color--tooltip--numeric-input-container" }, yl = /* @__PURE__ */ v("label", { class: "like-lkt-field-label" }, "A", -1), gl = {
  key: 4,
  class: "lkt-field-main"
}, bl = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Cl = {
  key: 5,
  class: "lkt-field-main"
}, Vl = ["value", "type", "name", "id", "disabled", "readonly", "tabindex", "autocomplete", "min", "max", "step"], Sl = {
  key: 6,
  class: "lkt-field__state"
}, _l = ["title"], xl = ["title"], wl = ["title"], Ml = ["title"], El = ["title"], Il = ["innerHTML", "title"], Nl = {
  key: 3,
  class: "lkt-field__state"
}, Bl = ["title"], Tl = /* @__PURE__ */ We({
  __name: "LktFieldText",
  props: {
    modelValue: { default: "" },
    valid: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    label: { default: "" },
    labelIcon: {},
    labelIconAtEnd: { type: Boolean },
    palette: { default: "" },
    name: { default: Se(16) },
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
    actionButtonIcon: { default: "" }
  },
  emits: ["update:modelValue", "update:valid", "keyup", "keydown", "focus", "blur", "click", "click-info", "click-error", "validation", "validating"],
  setup(m, { expose: V, emit: xe }) {
    const k = xe, T = je(), e = m, y = Se(16), P = p(null);
    let we = [];
    const Q = (l) => {
      if (e.isColor) {
        if ([0, 1].includes(l.length))
          S.value = 0, _.value = 0, x.value = 0, w.value = 255;
        else if ([7, 9].includes(l.length)) {
          let t = Y(l);
          S.value = t.r, _.value = t.g, x.value = t.b, w.value = t.a;
        }
      }
      return l;
    }, Y = (l) => {
      let t = parseInt(+("0x" + l.substring(1, 3)), 10), o = parseInt(+("0x" + l.substring(3, 5)), 10), u = parseInt(+("0x" + l.substring(5, 7)), 10), N = 255;
      return l.length === 9 && (N = parseInt(+("0x" + l.substring(5, 7)), 10)), { r: t, g: o, b: u, a: N };
    }, ee = p(e.modelValue), S = p(255), _ = p(255), x = p(255), w = p(255), a = p(Q(e.modelValue)), U = p(e.valid), $ = p(!1), Z = p(!1), z = p(!1), G = p(!1), i = p(we), E = p(!e.readMode), Me = n(() => a.value !== ee.value), le = n(() => e.reset || e.infoMessage !== "" || e.errorMessage !== "" || e.isPassword && e.showPassword), ae = n(() => {
      let l = 0;
      return e.reset && ++l, e.infoMessage && ++l, e.isPassword && e.showPassword && ++l, l;
    }), Ee = n(() => e.resetMessage !== "" ? e.resetMessage : ""), Ie = n(() => $.value === !0 ? "lkt-field__hide-password-icon" : "lkt-field__show-password-icon"), te = n(() => e.autocomplete === !0 ? "on" : "off"), oe = n(() => a.value !== ""), H = n(() => e.isPassword && $.value === !0 ? "text" : e.isEmail ? "email" : e.isPassword ? "password" : e.isNumber ? "number" : e.isTel ? "tel" : e.isSearch ? "search" : e.isColor ? "color" : e.isRange ? "range" : "text"), Ne = n(() => {
      const l = ["lkt-field", "lkt-field-text"];
      return e.palette && l.push(`lkt-field--${e.palette}`), H && l.push(`is-${H.value}`), Me.value && l.push("is-changed"), e.disabled && l.push("is-disabled"), e.actionButtonIcon && l.push("with-atn-btn"), e.mandatory && E.value && l.push("is-mandatory-field"), Z.value && l.push("has-focus"), !e.isRange && e.autoValidation && G.value && z.value && (i.value.length > 0 ? l.push("is-invalid") : l.push("is-valid")), ae.value > 0 && l.push("has-icons", `has-icons-${ae.value}`), e.isRange || (l.push(U.value ? "is-valid" : "is-error"), l.push(e.modelValue ? "is-filled" : "is-empty")), l.join(" ");
    }), I = n(() => typeof a.value == "number" ? a.value.toString() : a.value), L = n(() => typeof e.min == "string" ? parseFloat(e.min) : typeof e.min == "number" ? e.min : !1), R = n(() => typeof e.max == "string" ? parseFloat(e.max) : typeof e.max == "number" ? e.max : !1), ie = n(() => {
      let l = "";
      if (e.label.startsWith("__:") ? l = _e(e.label.substring(3)) : l = e.label, e.labelIcon) {
        let t = '<i class="' + e.labelIcon + '"></i>';
        e.labelIconAtEnd ? l += t : l = t + l;
      }
      return l;
    }), ue = n(() => e.placeholder.startsWith("__:") ? _e(e.placeholder.substring(3)) : e.placeholder), se = () => {
      pe(() => {
        P.value && P.value.focus();
      });
    }, Be = async () => {
      if (e.validationResource) {
        k("validating");
        const l = await Xe(e.validationResource, {
          ...e.validationResourceData,
          value: a.value
        });
        k("validation", l);
      }
    };
    C(() => e.checkEqualTo, (l) => D()), C(() => e.readMode, (l) => E.value = !l), C(() => e.valid, (l) => U.value = l), C(() => e.modelValue, (l) => {
      a.value = l, e.isNumber && De(l);
    }), C(a, (l) => {
      k("update:modelValue", l), Be(), D();
    }), C(U, (l) => {
      k("update:valid", l);
    });
    const D = () => {
      e.autoValidationType === "blur" && (!z.value || !G.value) || e.isRange || (i.value = [], pe(() => {
        let l = typeof e.min > "u" ? 0 : parseInt(e.min), t = typeof e.max > "u" ? 0 : parseInt(e.max);
        if (e.isNumber && typeof e.min < "u" && typeof e.max < "u" && (a.value < l || a.value > t)) {
          i.value.push(d.createNumBetween(l, t, "ko")), U.value = !1;
          return;
        }
        if (!e.isNumber && !e.isEmail && e.mandatory && a.value === "" ? i.value.push(d.createEmpty("ko")) : e.isEmail || l > 0 && (!e.isNumber && a.value.length < l ? i.value.push(d.createMinStr(l, "ko")) : a.value < l && i.value.push(d.createMinNum(l, "ko"))), t > 0 && (!e.isNumber && a.value.length > t ? i.value.push(d.createMaxStr(t, "ko")) : a.value > t && i.value.push(d.createMaxNum(t, "ko"))), e.isEmail && e.mandatory && a.value === "" ? i.value.push(d.createEmpty("ko")) : e.isEmail && !Oe(a.value) && i.value.push(d.createEmail("ko")), !e.isNumber) {
          if (typeof e.minNumbers < "u") {
            let o = parseInt(e.minNumbers);
            a.value.replace(/\D+/g, "").length < o && i.value.push(d.createMinNumbers(o, "ko"));
          }
          if (typeof e.maxNumbers < "u") {
            let o = parseInt(e.maxNumbers);
            a.value.replace(/\D+/g, "").length > o && i.value.push(d.createMaxNumbers(o, "ko"));
          }
          if (typeof e.minUpperChars < "u") {
            let o = parseInt(e.minUpperChars);
            a.value.replace(/[^A-Z]+/g, "").length < o && i.value.push(d.createMinUpperChars(o, "ko"));
          }
          if (typeof e.maxUpperChars < "u") {
            let o = parseInt(e.maxUpperChars);
            a.value.replace(/[^A-Z]+/g, "").length > o && i.value.push(d.createMaxUpperChars(o, "ko"));
          }
          if (typeof e.minLowerChars < "u") {
            let o = parseInt(e.minLowerChars);
            a.value.replace(/[A-Z]+/g, "").length < o && i.value.push(d.createMinLowerChars(o, "ko"));
          }
          if (typeof e.maxLowerChars < "u") {
            let o = parseInt(e.maxLowerChars);
            a.value.replace(/[A-Z]+/g, "").length > o && i.value.push(d.createMaxLowerChars(o, "ko"));
          }
          if (typeof e.minChars < "u") {
            let o = parseInt(e.minChars);
            a.value.replace(/\d+/g, "").length < o && i.value.push(d.createMinChars(o, "ko"));
          }
          if (typeof e.maxChars < "u") {
            let o = parseInt(e.maxChars);
            a.value.replace(/\d+/g, "").length > o && i.value.push(d.createMaxChars(o, "ko"));
          }
          if (typeof e.minSpecialChars < "u") {
            let o = parseInt(e.minSpecialChars);
            a.value.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < o && i.value.push(d.createMinSpecialChars(o, "ko"));
          }
          if (typeof e.maxSpecialChars < "u") {
            let o = parseInt(e.maxSpecialChars);
            a.value.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > o && i.value.push(d.createMaxSpecialChars(o, "ko"));
          }
        }
        e.checkEqualTo && a.value !== e.checkEqualTo && i.value.push(d.createEqualTo(e.checkEqualTo, "ko")), U.value = i.value.length === 0;
      }));
    }, W = () => a.value = ee.value, Te = () => a.value, ne = (l) => {
      D(), k("keyup", l, B(y, { value: a.value }));
    }, re = (l) => k("keydown", l, B(y, { value: a.value })), de = (l) => {
      G.value = !0, D(), (Z.value = !0) && k("focus", l, B(y, { value: a.value }));
    }, fe = (l) => {
    }, ve = (l) => {
      z.value = !0, D(), (Z.value = !1) && k("blur", l, B(y, { value: a.value }));
    }, A = (l) => {
      k("click", l, B(y, { value: a.value }));
    }, Ue = (l) => k("click-info", l, B(y, { value: a.value })), Le = (l) => k("click-error", l, B(y, { value: a.value })), Re = (l) => $.value = !$.value, ce = (l) => {
      E.value = !E.value, E.value && se();
    }, De = (l) => {
      if (!e.enableAutoNumberFix) return !1;
      let t = Number(l), o = !1;
      return L.value !== !1 && t < L.value && (t = L.value, o = !0), R.value !== !1 && t > R.value && (t = R.value, o = !0), o === !0 ? (a.value = t, !0) : !1;
    };
    V({
      Identifier: y,
      reset: W,
      focus: se,
      value: Te,
      isMandatory: () => e.mandatory
    }), W();
    const Ae = n(() => a.value === "" ? e.emptyValueSlot !== "" && typeof c.customValueSlots[e.emptyValueSlot] < "u" || c.defaultEmptyValueSlot && typeof c.customValueSlots[c.defaultEmptyValueSlot] < "u" : e.valueSlot !== "" && typeof c.customValueSlots[e.valueSlot] < "u"), Fe = n(() => a.value === "" ? c.customValueSlots[e.emptyValueSlot] ?? c.customValueSlots[c.defaultEmptyValueSlot] : c.customValueSlots[e.valueSlot]), Pe = n(() => e.editSlot !== "" && typeof c.customEditSlots[e.editSlot] < "u"), $e = n(() => c.customEditSlots[e.editSlot]), He = (l, t, o, u) => {
      let N = parseInt(l).toString(16).padStart(2, "0").toUpperCase(), O = parseInt(t).toString(16).padStart(2, "0").toUpperCase(), b = parseInt(o).toString(16).padStart(2, "0").toUpperCase(), r = "#" + N + O + b;
      if (u == 255) return r;
      let ze = parseInt(u).toString(16).padStart(2, "0").toUpperCase();
      return r + ze;
    }, j = n(() => {
      if (!e.isColor) return "";
      let l = Y(a.value);
      return (0.299 * l.r + 0.587 * l.g + 0.114 * l.b) / l.a > 0.5 ? "#000000" : "#ffffff";
    }), q = (l) => {
      a.value = He(
        S.value,
        _.value,
        x.value,
        w.value
      );
    }, qe = (l) => {
      Q(a.value);
    };
    C(S, q), C(_, q), C(x, q), C(w, q);
    const Ke = n(() => e.isColor ? a.value === "" || a.value === "#" ? {} : {
      background: a.value,
      "--lkt-btn-bg": a.value,
      color: j.value,
      "--lkt-btn-color": j.value
    } : {}), Ze = n(() => e.isColor ? a.value === "" || a.value === "#" ? {} : {
      "--lkt-field-bg-input": a.value,
      "--lkt-field-color": j.value
    } : {});
    return (l, t) => {
      const o = K("lkt-button"), u = K("lkt-field-text", !0), N = K("lkt-anchor"), O = K("lkt-field-validations");
      return s(), f("div", {
        class: me(Ne.value),
        "data-show-ui": le.value,
        "data-labeled": !M(T).label
      }, [
        M(T).label ? X(l.$slots, "label", { key: 0 }) : h("", !0),
        !M(T).label && ie.value !== "" ? (s(), f("label", {
          key: 1,
          for: M(y),
          innerHTML: ie.value
        }, null, 8, el)) : h("", !0),
        E.value ? (s(), f(he, { key: 2 }, [
          l.actionButtonIcon ? (s(), f("div", ll, [
            g(o, {
              class: "lkt-field--atn-btn",
              icon: l.actionButtonIcon
            }, null, 8, ["icon"])
          ])) : h("", !0),
          M(T).edit ? (s(), f("div", {
            key: 1,
            onClick: A
          }, [
            X(l.$slots, "edit", {
              value: a.value,
              title: I.value,
              data: l.slotData
            })
          ])) : Pe.value ? (s(), f("div", {
            key: 2,
            onClick: A
          }, [
            (s(), F(ke($e.value), {
              value: a.value,
              title: I.value,
              data: l.slotData
            }, null, 8, ["value", "title", "data"]))
          ])) : l.isColor ? (s(), f("div", al, [
            g(o, {
              class: "lkt-field-color--alpha--toggle-button",
              style: ye(Ke.value),
              text: a.value,
              tooltip: "",
              "tooltip-class": "lkt-field-color--alpha--tooltip",
              "tooltip-location-y": "bottom",
              "tooltip-location-x": "left-corner"
            }, {
              tooltip: J(({ doClose: b }) => [
                v("div", tl, [
                  v("div", ol, [
                    v("div", il, [
                      ul,
                      g(u, {
                        modelValue: a.value,
                        "onUpdate:modelValue": t[0] || (t[0] = (r) => a.value = r),
                        style: ye(Ze.value),
                        onChange: qe
                      }, null, 8, ["modelValue", "style"])
                    ])
                  ]),
                  v("div", sl, [
                    v("div", nl, [
                      rl,
                      g(u, {
                        modelValue: S.value,
                        "onUpdate:modelValue": t[1] || (t[1] = (r) => S.value = r),
                        "is-number": "",
                        min: "0",
                        max: "255",
                        step: "1"
                      }, null, 8, ["modelValue"])
                    ]),
                    g(u, {
                      class: "color-range color-range--red",
                      modelValue: S.value,
                      "onUpdate:modelValue": t[2] || (t[2] = (r) => S.value = r),
                      "is-range": "",
                      min: "0",
                      max: "255",
                      step: "1"
                    }, null, 8, ["modelValue"])
                  ]),
                  v("div", dl, [
                    v("div", fl, [
                      vl,
                      g(u, {
                        modelValue: _.value,
                        "onUpdate:modelValue": t[3] || (t[3] = (r) => _.value = r),
                        "is-number": "",
                        min: "0",
                        max: "255",
                        step: "1"
                      }, null, 8, ["modelValue"])
                    ]),
                    g(u, {
                      class: "color-range color-range--green",
                      modelValue: _.value,
                      "onUpdate:modelValue": t[4] || (t[4] = (r) => _.value = r),
                      "is-range": "",
                      min: "0",
                      max: "255",
                      step: "1"
                    }, null, 8, ["modelValue"])
                  ]),
                  v("div", cl, [
                    v("div", pl, [
                      ml,
                      g(u, {
                        modelValue: x.value,
                        "onUpdate:modelValue": t[5] || (t[5] = (r) => x.value = r),
                        "is-number": "",
                        min: "0",
                        max: "255",
                        step: "1"
                      }, null, 8, ["modelValue"])
                    ]),
                    g(u, {
                      class: "color-range color-range--blue",
                      modelValue: x.value,
                      "onUpdate:modelValue": t[6] || (t[6] = (r) => x.value = r),
                      "is-range": "",
                      min: "0",
                      max: "255",
                      step: "1"
                    }, null, 8, ["modelValue"])
                  ]),
                  v("div", hl, [
                    v("div", kl, [
                      yl,
                      g(u, {
                        modelValue: w.value,
                        "onUpdate:modelValue": t[7] || (t[7] = (r) => w.value = r),
                        "is-number": "",
                        min: "0",
                        max: "255",
                        step: "1"
                      }, null, 8, ["modelValue"])
                    ]),
                    g(u, {
                      class: "color-range color-range--alpha",
                      modelValue: w.value,
                      "onUpdate:modelValue": t[8] || (t[8] = (r) => w.value = r),
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
          ])) : ue.value ? (s(), f("div", gl, [
            ge(v("input", {
              "onUpdate:modelValue": t[9] || (t[9] = (b) => a.value = b),
              ref: (b) => P.value = b,
              value: a.value,
              type: H.value,
              name: l.name,
              id: M(y),
              disabled: l.disabled,
              readonly: l.readonly,
              placeholder: ue.value,
              tabindex: l.tabindex,
              autocomplete: te.value,
              min: L.value,
              max: R.value,
              step: l.step,
              onKeyup: ne,
              onKeydown: re,
              onFocus: de,
              onBlur: ve,
              onClick: A,
              onChange: fe
            }, null, 40, bl), [
              [be, a.value]
            ])
          ])) : (s(), f("div", Cl, [
            ge(v("input", {
              "onUpdate:modelValue": t[10] || (t[10] = (b) => a.value = b),
              ref: (b) => P.value = b,
              value: a.value,
              type: H.value,
              name: l.name,
              id: M(y),
              disabled: l.disabled,
              readonly: l.readonly,
              tabindex: l.tabindex,
              autocomplete: te.value,
              min: L.value,
              max: R.value,
              step: l.step,
              onKeyup: ne,
              onKeydown: re,
              onFocus: de,
              onBlur: ve,
              onClick: A,
              onChange: fe
            }, null, 40, Vl), [
              [be, a.value]
            ])
          ])),
          le.value ? (s(), f("div", Sl, [
            e.errorMessage ? (s(), f("i", {
              key: 0,
              class: "lkt-field__error-icon",
              title: e.errorMessage,
              onClick: Le
            }, null, 8, _l)) : h("", !0),
            e.infoMessage ? (s(), f("i", {
              key: 1,
              class: "lkt-field__info-icon",
              title: e.infoMessage,
              onClick: Ue
            }, null, 8, xl)) : h("", !0),
            e.isPassword && e.showPassword && oe.value ? (s(), f("i", {
              key: 2,
              class: me(Ie.value),
              title: e.showPasswordMessage,
              onClick: Re
            }, null, 10, wl)) : h("", !0),
            e.reset && oe.value ? (s(), f("i", {
              key: 3,
              class: "lkt-field__reset-icon",
              title: Ee.value,
              onClick: W
            }, null, 8, Ml)) : h("", !0),
            l.allowReadModeSwitch ? (s(), f("i", {
              key: 4,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: ce
            }, null, 8, El)) : h("", !0)
          ])) : h("", !0)
        ], 64)) : h("", !0),
        E.value ? h("", !0) : (s(), f("div", {
          key: 3,
          class: "lkt-field-text__read",
          onClick: A
        }, [
          M(T).value ? X(l.$slots, "value", {
            key: 0,
            value: a.value,
            title: I.value,
            data: l.slotData
          }) : Ae.value ? (s(), F(ke(Fe.value), {
            key: 1,
            value: a.value,
            title: I.value,
            data: l.slotData
          }, null, 8, ["value", "title", "data"])) : (s(), f(he, { key: 2 }, [
            l.isEmail ? (s(), F(N, {
              key: 0,
              class: "lkt-field-text__read-value",
              title: I.value,
              to: "mail:" + a.value
            }, {
              default: J(() => [
                Ce(Ve(a.value), 1)
              ]),
              _: 1
            }, 8, ["title", "to"])) : l.isTel ? (s(), F(N, {
              key: 1,
              class: "lkt-field-text__read-value",
              title: I.value,
              to: "tel:" + a.value
            }, {
              default: J(() => [
                Ce(Ve(a.value), 1)
              ]),
              _: 1
            }, 8, ["title", "to"])) : (s(), f("div", {
              key: 2,
              class: "lkt-field-text__read-value",
              innerHTML: a.value,
              title: I.value
            }, null, 8, Il))
          ], 64)),
          l.allowReadModeSwitch ? (s(), f("div", Nl, [
            v("i", {
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: ce
            }, null, 8, Bl)
          ])) : h("", !0)
        ])),
        l.autoValidation && i.value.length > 0 ? (s(), F(O, {
          key: 4,
          items: i.value,
          stack: l.validationStack,
          min: l.min,
          max: l.max
        }, null, 8, ["items", "stack", "min", "max"])) : h("", !0)
      ], 10, Ye);
    };
  }
}), Pl = (m, V) => (c.customValueSlots[m] = V, !0), $l = (m, V) => (c.customEditSlots[m] = V, !0), Hl = {
  install: (m) => {
    m.component("lkt-field-text") === void 0 && m.component("lkt-field-text", Tl), m.component("lkt-field-validations") === void 0 && m.use(Ge);
  }
}, ql = (m, V) => {
  c.defaultEmptyValueSlot = m, V && (c.customValueSlots[m] = V);
};
export {
  Hl as default,
  ql as setDefaultTextEmptyValueSlot,
  $l as setTextEditSlot,
  Pl as setTextValueSlot
};
