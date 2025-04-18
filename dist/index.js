import { defineComponent as be, computed as te, resolveComponent as de, createBlock as X, openBlock as H, normalizeClass as Te, ref as Q, watch as ue, withCtx as ae, createCommentVNode as le, resolveDynamicComponent as At, mergeProps as re, createElementBlock as oe, createElementVNode as fe, toDisplayString as Tt, Fragment as He, renderList as Qe, createVNode as K, unref as B, normalizeStyle as ji, withDirectives as je, vModelCheckbox as xo, onMounted as Fi, vModelText as Oi, vShow as St, nextTick as zt, createTextVNode as Ut, useSlots as Qi, renderSlot as rt, createStaticVNode as So, createSlots as ut, setBlockTracking as El, normalizeProps as Ce, guardReactiveProps as ze, mergeDefaults as Lo, isRef as Xe, vModelDynamic as Eo } from "vue";
import { stripTags as vn, fill as To, generateRandomString as Bo, formatNumber as Tl, isEmail as zo, ucfirst as No, kebabCaseToCamelCase as Ao } from "lkt-string-tools";
import { httpCall as Vi } from "lkt-http-client";
import { __ as bn, getCurrentLanguage as yn, currentLanguage as _n, availableLanguages as Ro, getAvailableLanguages as Io } from "lkt-i18n";
import { extractPropValue as Lt, LktSettings as Ye, Option as Di, FieldType as W, LktColor as Cn, TooltipLocationX as wn, TooltipLocationY as kn, ButtonType as Rt, FieldValidation as De, ValidationStatus as Me, MultipleOptionsDisplay as si, TableType as Mi, booleanFieldTypes as Et, WebElementType as se, WebElementLayoutType as Ge, TablePermission as pt, WebElement as Vo, fieldsWithMultipleMode as Do, FieldValidationType as Bl, extractI18nValue as jt, fieldTypesWithoutUndo as Mo, fieldTypesWithoutClear as Ho, FieldAutoValidationTrigger as Fo, textFieldTypes as Oo, fieldTypesWithOptions as zl, getDefaultValues as Uo, Field as Po, ToastPositionX as Nl, AccordionType as qe, getDefaultLktTextBannerWebElement as Wo, getDefaultLktTextWebElement as $o, getDefaultLktHeaderWebElement as Zo, getDefaultLktLayoutWebElement as qo, getDefaultLktButtonWebElement as xn, getDefaultLktAnchorWebElement as jo, getDefaultLktImageWebElement as Go, getDefaultLktIconWebElement as Ko, getDefaultLktTextAccordionWebElement as Yo, getDefaultLktLayoutAccordionWebElement as Xo, getDefaultLktTextBoxWebElement as Jo, getDefaultLktLayoutBoxWebElement as Qo, BannerType as Al, ensureFieldConfig as es, ItemCrudView as Sn, ItemCrudMode as Gi, AccordionToggleMode as Ln, FileEntityType as Je, FileEntity as Rl, IconPosition as ts, AnchorType as is, MenuEntryType as ls } from "lkt-vue-kernel";
import { Field as $d, Option as Zd } from "lkt-vue-kernel";
import { date as Gt } from "lkt-date-tools";
import { openToast as Il } from "lkt-toast";
import { openModal as ns, closeModal as el, addModal as li } from "lkt-modal";
import { cloneObject as os } from "lkt-object-tools";
const ke = class ke {
};
ke.defaultEmptyValueSlot = "", ke.customValueSlots = {}, ke.customEditSlots = {}, ke.searchKeyForResource = "query", ke.optionSlots = {}, ke.defaultDateIcon = "lkt-icn-calendar-empty-outline", ke.defaultNumberFeaturedButton = "subtract", ke.undoText = "", ke.clearText = "", ke.i18nText = "", ke.switchEditionOnText = "", ke.switchEditionOffText = "", ke.showPasswordOnText = "", ke.showPasswordOffText = "", ke.dateReadFormat = "", ke.defaultDateReadFormat = "Y-m-d", ke.langDateReadFormat = {
  en: "Y-m-d",
  es: "d/m/Y"
}, ke.acceptTypes = {
  file: "*/*",
  image: "image/*"
}, ke.validationIconSlot = "", ke.validationMessages = {
  default: {
    "ko-num-between": "",
    "ko-min-str": "",
    "ko-min-num": "",
    "ko-max-str": "",
    "ko-max-num": "",
    "ko-email": "",
    "ko-empty": "",
    "ko-min-numbers": "",
    "ko-max-numbers": "",
    "ko-min-chars": "",
    "ko-max-chars": "",
    "ko-min-upper-chars": "",
    "ko-max-upper-chars": "",
    "ko-min-lower-chars": "",
    "ko-max-lower-chars": "",
    "ko-min-special-chars": "",
    "ko-max-special-chars": ""
  }
}, ke.amountOfDecimals = void 0, ke.decimalSeparator = ".", ke.thousandsSeparator = "", ke.removeDecimalsIfZero = !0, ke.langNumberFormat = {
  en: {
    amountOfDecimals: 2,
    decimalSeparator: ".",
    thousandsSeparator: ",",
    removeDecimalsIfZero: !0
  },
  es: {
    amountOfDecimals: 2,
    decimalSeparator: ",",
    thousandsSeparator: ".",
    removeDecimalsIfZero: !0
  }
}, ke.readTextMaxLength = void 0, ke.modalPerItemType = {};
let ie = ke;
const En = /* @__PURE__ */ be({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = te(() => ie.undoText), a = te(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), d = () => l("click");
    return (f, n) => {
      const b = de("lkt-button");
      return H(), X(b, {
        text: f.insideEllipsis ? i.value : "",
        title: i.value,
        class: Te([a.value, "lkt-field--btn-undo"]),
        icon: "lkt-icn-undo",
        onClick: d
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Tn = /* @__PURE__ */ be({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = te(() => ie.clearText), a = te(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), d = () => l("click");
    return (f, n) => {
      const b = de("lkt-button");
      return H(), X(b, {
        text: f.insideEllipsis ? i.value : "",
        title: i.value,
        class: Te(a.value),
        icon: "lkt-icn-cancel",
        onClick: d
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Ki = /* @__PURE__ */ be({
  __name: "PasswordButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 }
  },
  emits: [
    "click",
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = Q(o.modelValue);
    ue(() => o.modelValue, (b) => i.value = b), ue(i, (b) => l("update:modelValue", b));
    const a = te(() => i.value ? ie.showPasswordOnText : ie.showPasswordOffText), d = te(() => i.value === !0 ? "lkt-icn-see" : "lkt-icn-not-see"), f = te(() => o.isFeatured ? "lkt-field--atn-btn" : o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), n = () => l("click");
    return (b, u) => {
      const v = de("lkt-button");
      return H(), X(v, {
        text: b.insideEllipsis ? a.value : "",
        title: a.value,
        class: Te(f.value),
        icon: d.value,
        onClick: n,
        checked: i.value,
        "onUpdate:checked": u[0] || (u[0] = (k) => i.value = k),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Bn = /* @__PURE__ */ be({
  __name: "EditionButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click",
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = Q(o.modelValue);
    ue(() => o.modelValue, (b) => i.value = b), ue(i, (b) => l("update:modelValue", b));
    const a = te(() => i.value ? ie.switchEditionOnText : ie.switchEditionOffText), d = te(() => i.value === !0 ? "lkt-icon-see" : "lkt-icn-edit"), f = te(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), n = () => l("click");
    return (b, u) => {
      const v = de("lkt-button");
      return H(), X(v, {
        text: b.insideEllipsis ? a.value : "",
        title: a.value,
        class: Te(f.value),
        icon: d.value,
        onClick: n,
        checked: i.value,
        "onUpdate:checked": u[0] || (u[0] = (k) => i.value = k),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), ss = /* @__PURE__ */ be({
  __name: "EllipsisActionsButton",
  props: {
    showUndo: { type: Boolean },
    showClear: { type: Boolean },
    showPassword: { type: Boolean },
    showPasswordCheck: { type: Boolean },
    showEdition: { type: Boolean },
    showEditionCheck: { type: Boolean }
  },
  emits: [
    "undo",
    "clear",
    "update:showPasswordCheck",
    "update:showEditionCheck"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = Q(o.showPasswordCheck);
    ue(() => o.showPasswordCheck, (d) => i.value = d), ue(i, (d) => l("update:showPasswordCheck", d));
    const a = Q(o.showEditionCheck);
    return ue(() => o.showEditionCheck, (d) => a.value = d), ue(a, (d) => l("update:showEditionCheck", d)), (d, f) => {
      const n = de("lkt-button");
      return H(), X(n, {
        split: "",
        "split-icon": "lkt-icn-ellipsis-menu-vertical",
        class: "lkt-field--info-btn"
      }, {
        split: ae(({ doClose: b }) => [
          d.showUndo ? (H(), X(En, {
            key: 0,
            onClick: f[0] || (f[0] = () => l("undo")),
            "inside-ellipsis": ""
          })) : le("", !0),
          d.showClear ? (H(), X(Tn, {
            key: 1,
            onClick: f[1] || (f[1] = () => l("clear")),
            "inside-ellipsis": ""
          })) : le("", !0),
          d.showPassword ? (H(), X(Ki, {
            key: 2,
            modelValue: i.value,
            "onUpdate:modelValue": f[2] || (f[2] = (u) => i.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : le("", !0),
          d.showEdition ? (H(), X(Bn, {
            key: 3,
            modelValue: a.value,
            "onUpdate:modelValue": f[3] || (f[3] = (u) => a.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : le("", !0)
        ]),
        _: 1
      });
    };
  }
}), Vl = /* @__PURE__ */ be({
  __name: "I18nButton",
  props: {
    modelValue: { default: () => ({}) },
    type: {},
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 }
  },
  emits: [
    "click",
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = Q(o.modelValue);
    ue(() => o.modelValue, (f) => i.value = f, { deep: !0 }), ue(i, (f) => l("update:modelValue", f), { deep: !0 });
    const a = te(() => ie.i18nText), d = te(() => o.isFeatured ? "lkt-field--atn-btn" : o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (f, n) => {
      const b = de("lkt-button");
      return H(), X(b, {
        text: f.insideEllipsis ? a.value : "",
        title: a.value,
        class: Te(d.value),
        icon: "lkt-icn-lang-picker",
        modal: "lkt-field-language-edit",
        "modal-data": { translations: i.value, type: f.type }
      }, null, 8, ["text", "title", "class", "modal-data"]);
    };
  }
}), as = (e, t, l) => (e = Number(e), t !== !1 && e < t && (e = t), l !== !1 && e > l && (e = l), e), Hi = (e, t) => {
  if (typeof e == "string" && (e = Lt(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let l = e.substring(3), o = bn(l), i = [];
    for (let a in o) i.push({ value: a, label: o[a] });
    return Ye.i18nOptionsFormatter[l] && (i = Ye.i18nOptionsFormatter[l](i)), Hi(i, t);
  }
  return Array.isArray(e) ? e.length === 0 ? e : e.map((l) => {
    if (typeof l == "object") return new Di(l);
    if (typeof l == "string" || typeof l == "number")
      return new Di({
        label: String(l),
        value: l
      });
  }).filter((l) => typeof l < "u") : [];
}, Zi = (e, t = "", l = !0, o = void 0) => {
  if (t === "" && typeof o != "function") return e;
  let i = e;
  const a = String(t).toLowerCase();
  return a !== "" && (i = i.filter((d) => {
    let f = String(d.label).toLowerCase();
    return f.indexOf(a) !== -1 && (l || f !== a);
  })), typeof o == "function" && (i = i.filter((d) => o(d))), i;
}, ni = (e, t) => {
  if (t !== "")
    return e.find((l) => Array.isArray(t) ? t.includes(l.value) : l.value == t);
}, rs = (e, t, l) => {
  const o = /* @__PURE__ */ new Set(), i = [...e, ...Hi(t, l)], a = [];
  return i.forEach((d) => {
    let f = [d.value, d.label].join("-");
    o.has(f) || (a.push(d), o.add(f));
  }), a;
}, us = (e, t, l) => {
  if (l) {
    if (Array.isArray(t)) {
      let o = t.findIndex((i) => i == e.value);
      return typeof o > "u" ? !1 : o > -1;
    }
    return !1;
  }
  return e.value == t;
}, Ot = (e, t) => {
  let l = t.findIndex((o) => o == e.value);
  return typeof l > "u" && (l = -1), l;
}, tl = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), zn = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), tl(e) ? Gt(t, e) : ""), ds = /* @__PURE__ */ be({
  __name: "DropdownButton",
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const l = t, o = te(() => ie.undoText), i = te(() => "lkt-field--info-btn"), a = () => l("click");
    return (d, f) => {
      const n = de("lkt-button");
      return H(), X(n, {
        text: o.value,
        title: o.value,
        class: Te([i.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-icn-angle-bottom",
        onClick: a,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), cs = {
  key: 0,
  class: "lkt-field--dropdown-option--icon-container"
}, fs = { class: "lkt-field--dropdown-option--label-container" }, Bt = /* @__PURE__ */ be({
  __name: "DropdownOption",
  props: {
    option: { default: () => new Di() },
    optionSlot: { default: "" },
    editable: { type: Boolean, default: !1 },
    icon: { type: [String, Function], default: "" },
    text: { type: [String, Function], default: "" },
    customClass: {},
    modal: { type: [String, Function], default: "" },
    modalData: { type: [Object, Function], default: () => ({}) },
    download: { type: [String, Function], default: "" },
    labelFormatter: {},
    isTag: { type: Boolean, default: !1 }
  },
  emits: [
    "click",
    "click-icon"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = te(() => o.option.icon !== "" ? o.option.icon : typeof o.icon == "function" ? o.icon(o.option) : o.icon), a = te(() => {
      if (typeof o.text < "u") {
        if (typeof o.text == "function")
          return o.text(o.option);
        if (o.text !== "") return o.text;
      }
      return d.value;
    }), d = te(() => typeof o.labelFormatter == "function" ? o.labelFormatter(o.option) : o.option.label), f = te(() => typeof o.customClass == "function" ? o.customClass(o.option) : typeof o.customClass < "u" ? o.customClass : `lkt-opt-${o.option.value}`), n = te(() => {
      if (o.optionSlot && !(typeof ie.optionSlots[o.optionSlot] > "u"))
        return ie.optionSlots[o.optionSlot];
    }), b = te(() => n.value ? n.value : o.isTag ? "lkt-tag" : !o.editable && (o.modal !== "" || o.option.modal !== "") ? "lkt-button" : !o.editable && o.download !== "" ? "lkt-anchor" : "div"), u = te(() => {
      if (b.value === "lkt-button") {
        let x = o.option.modal;
        o.modal && (x = o.modal);
        let L = x;
        return typeof x == "function" && (L = () => x(o.option)), {
          modal: L,
          modalData: o.modalData,
          modalKey: o.option.value,
          icon: i.value
        };
      }
      if (b.value === "lkt-anchor") {
        let x = o.download;
        typeof o.download == "function" ? x = () => o.download(o.option) : o.download.startsWith("prop:") && (x = o.download.substring(5), x = o.option[x]);
        let L = o.download !== "";
        return {
          href: x,
          target: L ? "_blank" : "",
          download: L
        };
      }
      return b.value === "lkt-tag" ? {
        type: "action-icon",
        icon: "lkt-icn-cancel"
      } : {};
    }), v = () => {
      l("click");
    }, k = () => {
      l("click-icon", o.option);
    };
    return (x, L) => {
      const R = de("lkt-tag");
      return H(), X(At(b.value), re(u.value, {
        class: ["lkt-field--dropdown-option", f.value],
        title: a.value,
        onClick: v,
        onClickIcon: k
      }), {
        default: ae(() => [
          i.value && b.value !== "lkt-button" ? (H(), oe("div", cs, [
            fe("i", {
              class: Te(i.value)
            }, null, 2)
          ])) : le("", !0),
          fe("div", fs, Tt(a.value), 1),
          (H(!0), oe(He, null, Qe(x.option.tags, (s) => (H(), X(R, re({ ref_for: !0 }, s), null, 16))), 256))
        ]),
        _: 1
      }, 16, ["class", "title"]);
    };
  }
}), ps = { class: "lkt-field-color--tooltip--rgba-container" }, hs = { class: "lkt-field-color--tooltip--numeric-input-container" }, ms = { class: "like-lkt-field-label" }, oi = /* @__PURE__ */ be({
  __name: "RgbaRange",
  props: {
    modelValue: { default: 0 },
    label: { default: "" },
    rangeClass: { default: "" }
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = Q(o.modelValue);
    return ue(() => o.modelValue, (a) => i.value = a), ue(i, (a) => l("update:modelValue", a)), (a, d) => (H(), oe("div", ps, [
      fe("div", hs, [
        fe("label", ms, Tt(a.label), 1),
        K(Be, re({
          modelValue: i.value,
          "onUpdate:modelValue": d[0] || (d[0] = (f) => i.value = f)
        }, {
          type: B(W).Number,
          min: 0,
          max: 255,
          step: 1,
          canStep: !1
        }), null, 16, ["modelValue"])
      ]),
      K(Be, re({
        class: ["color-range", a.rangeClass],
        modelValue: i.value,
        "onUpdate:modelValue": d[1] || (d[1] = (f) => i.value = f)
      }, {
        type: B(W).Range,
        min: 0,
        max: 255,
        step: 1
      }), null, 16, ["class", "modelValue"])
    ]));
  }
}), gs = (e, t, l, o) => new Cn({ r: e, g: t, b: l, a: o }).toString(), Dl = (e) => Cn.fromHexColor(e), vs = (e) => e.getContrastFontColor(), bs = { class: "lkt-grid-1" }, ys = { class: "lkt-field-color--tooltip--rgba-container" }, _s = { class: "lkt-field-color--tooltip--hex-input-container" }, Nn = /* @__PURE__ */ be({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = (R) => {
      if ([0, 1].includes(R.length))
        f.value = 0, n.value = 0, b.value = 0, u.value = 255;
      else if ([7, 9].includes(R.length)) {
        let s = Dl(R);
        f.value = s.r, n.value = s.g, b.value = s.b, u.value = s.a;
      }
    }, a = () => {
      v.value = gs(
        f.value,
        n.value,
        b.value,
        u.value
      );
    }, d = () => {
      i(v.value), l("change");
    }, f = Q(255), n = Q(255), b = Q(255), u = Q(255), v = Q(o.modelValue);
    i(v.value), ue([f, n, b, u], a), ue(() => o.modelValue, (R) => v.value = R), ue(v, (R) => l("update:modelValue", R));
    const k = te(() => vs(Dl(v.value))), x = te(() => v.value === "" || v.value === "#" ? {} : {
      background: v.value,
      "--lkt-btn-bg": v.value,
      color: k.value,
      "--lkt-btn-color": k.value
    }), L = te(() => v.value === "" || v.value === "#" ? {} : {
      "--lkt-field-bg-input": v.value,
      "--lkt-field-color": k.value
    });
    return (R, s) => {
      const r = de("lkt-button");
      return H(), X(r, {
        class: "lkt-field--toggle-button",
        style: ji(x.value),
        text: v.value,
        type: B(Rt).Tooltip,
        tooltip: {
          class: "lkt-field-color--tooltip",
          locationY: B(kn).Bottom,
          locationX: B(wn).LeftCorner
        }
      }, {
        tooltip: ae(({ doClose: c }) => [
          fe("div", bs, [
            fe("div", ys, [
              fe("div", _s, [
                s[5] || (s[5] = fe("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                K(Be, {
                  modelValue: v.value,
                  "onUpdate:modelValue": s[0] || (s[0] = (p) => v.value = p),
                  style: ji(L.value),
                  onChange: d
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            K(oi, {
              modelValue: f.value,
              "onUpdate:modelValue": s[1] || (s[1] = (p) => f.value = p),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            K(oi, {
              modelValue: n.value,
              "onUpdate:modelValue": s[2] || (s[2] = (p) => n.value = p),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            K(oi, {
              modelValue: b.value,
              "onUpdate:modelValue": s[3] || (s[3] = (p) => b.value = p),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            K(oi, {
              modelValue: u.value,
              "onUpdate:modelValue": s[4] || (s[4] = (p) => u.value = p),
              label: "A",
              "range-class": "color-range--alpha"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["style", "text", "type", "tooltip"]);
    };
  }
}), Cs = /* @__PURE__ */ be({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, l = Q(t.modelValue), o = te(() => typeof t.max == "boolean" || l.value.length < t.max ? ["inline-create"] : []);
    return (i, a) => {
      const d = de("lkt-table");
      return H(), X(d, {
        type: "item",
        modelValue: l.value,
        "onUpdate:modelValue": a[0] || (a[0] = (f) => l.value = f),
        perms: o.value,
        "edit-mode": i.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: ae(({ item: f, index: n, isLoading: b, canCreate: u, canRead: v, canUpdate: k, canDrop: x, doDrop: L }) => [
          K(Nn, {
            modelValue: l.value[n],
            "onUpdate:modelValue": (R) => l.value[n] = R
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
}), ws = (e, t, l, o) => {
  if (typeof l < "u") {
    let i = parseInt(l);
    t.replace(/\D+/g, "").length < i && e.push(De.createMinNumbers(i, Me.Ko));
  }
  if (typeof o < "u") {
    let i = parseInt(o);
    t.replace(/\D+/g, "").length > i && e.push(De.createMaxNumbers(i, Me.Ko));
  }
}, ks = (e, t, l, o) => {
  if (typeof l < "u") {
    let i = parseInt(l);
    t.replace(/[^A-Z]+/g, "").length < i && e.push(De.createMinUpperChars(i, Me.Ko));
  }
  if (typeof o < "u") {
    let i = parseInt(o);
    t.replace(/[^A-Z]+/g, "").length > i && e.push(De.createMaxUpperChars(i, Me.Ko));
  }
}, xs = (e, t, l, o) => {
  if (typeof l < "u") {
    let i = parseInt(l);
    t.replace(/[A-Z]+/g, "").length < i && e.push(De.createMinLowerChars(i, Me.Ko));
  }
  if (typeof o < "u") {
    let i = parseInt(o);
    t.replace(/[A-Z]+/g, "").length > i && e.push(De.createMaxLowerChars(i, Me.Ko));
  }
}, Ss = (e, t, l, o) => {
  if (typeof l < "u") {
    let i = parseInt(l);
    t.replace(/\d+/g, "").length < i && e.push(De.createMinChars(i, Me.Ko));
  }
  if (typeof o < "u") {
    let i = parseInt(o);
    t.replace(/\d+/g, "").length > i && e.push(De.createMaxChars(i, Me.Ko));
  }
}, Ls = (e, t, l, o) => {
  if (typeof l < "u") {
    let i = parseInt(l);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < i && e.push(De.createMinSpecialChars(i, Me.Ko));
  }
  if (typeof o < "u") {
    let i = parseInt(o);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > i && e.push(De.createMaxSpecialChars(i, Me.Ko));
  }
}, Ml = (e, t = "default") => {
  if (!e) return "";
  let l = ie.validationMessages[t] && ie.validationMessages[t][e] ? ie.validationMessages[t][e] : "";
  return l || (l = ""), l;
}, Es = { class: "boolean-input" }, Ts = { class: "boolean-input-label" }, Bs = { class: "boolean-input--check-on" }, zs = {
  key: 0,
  class: "lkt-icn-ok"
}, Ns = ["innerHTML"], As = ["name", "id", "disabled", "readonly", "value", "checked"], Rs = /* @__PURE__ */ be({
  __name: "BooleanInput",
  props: {
    modelValue: { type: Boolean, default: !1 },
    name: {},
    type: {},
    label: {},
    id: {},
    editable: { type: Boolean },
    focusing: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean }
  },
  emits: [
    "update:modelValue",
    "focus",
    "blur"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = Q(null), a = Q(o.modelValue), d = Q(a.value ? "true" : "false"), f = Q(o.focusing), n = (u) => {
      f.value = !0, l("focus", u);
    }, b = (u) => {
      f.value = !1, l("blur", u);
    };
    return ue(() => o.modelValue, (u) => a.value = u), ue(a, (u) => l("update:modelValue", u)), (u, v) => (H(), oe("div", Es, [
      fe("div", Ts, [
        fe("div", Bs, [
          u.type === B(W).Check && a.value ? (H(), oe("i", zs)) : le("", !0)
        ])
      ]),
      u.label ? (H(), oe("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: u.label
      }, null, 8, Ns)) : le("", !0),
      je(fe("input", {
        "onUpdate:modelValue": v[0] || (v[0] = (k) => a.value = k),
        type: "checkbox",
        ref_key: "input",
        ref: i,
        name: u.name,
        id: u.id,
        disabled: !u.editable || u.disabled,
        readonly: !u.editable || u.readonly,
        value: d.value,
        checked: a.value,
        onFocus: n,
        onBlur: b
      }, null, 40, As), [
        [xo, a.value]
      ])
    ]));
  }
});
function Se(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ai = { exports: {} }, Is = ai.exports, Hl;
function Vs() {
  return Hl || (Hl = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Is, function(t, l) {
      const o = {
        code: "ckb",
        toolbar: {
          default: "بنه‌ڕه‌ت",
          save: "پاشه‌كه‌وتكردن",
          font: "فۆنت",
          formats: "Formats",
          fontSize: "قه‌باره‌",
          bold: "تۆخكردن",
          underline: "هێڵ به‌ژێردا بێنه‌",
          italic: "لار",
          strike: "هێڵ به‌ناودا بێنه‌",
          subscript: "ژێرسکریپت",
          superscript: "سەرنووس",
          removeFormat: "لابردنی فۆرمات",
          fontColor: "ره‌نگی فۆنت",
          hiliteColor: "ره‌نگی دیاركراو",
          indent: "بۆشایی بەجێهێشتن",
          outdent: "لابردنی بۆشایی",
          align: "ئاراسته‌",
          alignLeft: "لای چه‌پ",
          alignRight: "لای راست",
          alignCenter: "ناوه‌ند",
          alignJustify: "به‌رێكی دابه‌ش بكه‌",
          list: "لیست",
          orderList: "لیستی ریزكراو",
          unorderList: "لیستی ریزنه‌كراو",
          horizontalRule: "هێڵی ئاسۆیی",
          hr_solid: "پته‌و",
          hr_dotted: "نوكته‌ نوكته‌",
          hr_dashed: "داش داش",
          table: "خشته‌",
          link: "به‌سته‌ر",
          math: "بیركاری",
          image: "وێنه‌",
          video: "ڤیدیۆ",
          audio: "ده‌نگ",
          fullScreen: "پڕ به‌ شاشه‌",
          showBlocks: "بڵۆك نیشانبده",
          codeView: "بینینی كۆده‌كان",
          undo: "وەک خۆی لێ بکەوە",
          redo: "هەڵگەڕاندنەوە",
          preview: "پێشبینین",
          print: "پرینت",
          tag_p: "په‌ره‌گراف",
          tag_div: "ی ئاسایی (DIV)",
          tag_h: "سەرپەڕە",
          tag_blockquote: "ده‌ق",
          tag_pre: "كۆد",
          template: "قاڵب",
          lineHeight: "بڵندی دێر",
          paragraphStyle: "ستایلی په‌ره‌گراف",
          textStyle: "ستایلی نوسین",
          imageGallery: "گاله‌ری وێنه‌كان",
          dir_ltr: "من اليسار إلى اليمين",
          dir_rtl: "من اليمين الى اليسار",
          mention: "تنويه ب"
        },
        dialogBox: {
          linkBox: {
            title: "به‌سته‌ر دابنێ",
            url: "به‌سته‌ر",
            text: "تێكستی به‌سته‌ر",
            newWindowCheck: "له‌ په‌نجه‌ره‌یه‌كی نوێ بكه‌ره‌وه‌",
            downloadLinkCheck: "رابط التحميل",
            bookmark: "المرجعية"
          },
          mathBox: {
            title: "بیركاری",
            inputLabel: "نیشانه‌كانی بیركاری",
            fontSizeLabel: "قه‌باره‌ی فۆنت",
            previewLabel: "پێشبینین"
          },
          imageBox: {
            title: "وێنه‌یه‌ك دابنێ",
            file: "فایلێك هه‌ڵبژێره‌",
            url: "به‌سته‌ری وێنه‌",
            altText: "نوسینی جێگره‌وه‌"
          },
          videoBox: {
            title: "ڤیدیۆیه‌ك دابنێ",
            file: "فایلێك هه‌ڵبژێره‌",
            url: "YouTube/Vimeo به‌سته‌ری له‌ناودانان وه‌ك "
          },
          audioBox: {
            title: "ده‌نگێك دابنێ",
            file: "فایلێك هه‌ڵبژێره‌",
            url: "به‌سته‌ری ده‌نگ"
          },
          browser: {
            tags: "تاگه‌كان",
            search: "گه‌ران"
          },
          caption: "پێناسه‌یه‌ك دابنێ",
          close: "داخستن",
          submitButton: "ناردن",
          revertButton: "بیگەڕێنەوە سەر باری سەرەتایی",
          proportion: "رێژه‌كان وه‌ك خۆی بهێڵه‌وه‌",
          basic: "سه‌ره‌تایی",
          left: "چه‌پ",
          right: "راست",
          center: "ناوەڕاست",
          width: "پانی",
          height: "به‌رزی",
          size: "قه‌باره‌",
          ratio: "رێژه‌"
        },
        controller: {
          edit: "دەسکاریکردن",
          unlink: "سڕینەوەی بەستەر",
          remove: "سڕینه‌وه‌",
          insertRowAbove: "ریزك له‌ سه‌ره‌وه‌ زیادبكه‌",
          insertRowBelow: "ریزێك له‌ خواره‌وه‌ زیادبكه‌",
          deleteRow: "ریز بسره‌وه‌",
          insertColumnBefore: "ستونێك له‌ پێشه‌وه‌ زیادبكه‌",
          insertColumnAfter: "ستونێك له‌ دواوه‌ زیادبكه‌",
          deleteColumn: "ستونێك بسره‌وه‌",
          fixedColumnWidth: "پانی ستون نه‌گۆربكه‌",
          resize100: "قه‌باره‌ بگۆره‌ بۆ ١٠٠%",
          resize75: "قه‌باره‌ بگۆره‌ بۆ ٧٥%",
          resize50: "قه‌باره‌ بگۆره‌ بۆ ٥٠%",
          resize25: "قه‌باره‌ بگۆره‌ بۆ ٢٥%",
          autoSize: "قه‌باره‌ی خۆكارانه‌",
          mirrorHorizontal: "هه‌ڵگه‌رێنه‌وه‌ به‌ده‌وری ته‌وه‌ره‌ی ئاسۆیی",
          mirrorVertical: "هه‌ڵگه‌رێنه‌وه‌ به‌ده‌وری ته‌وه‌ره‌ی ستونی",
          rotateLeft: "بسوڕێنه‌ به‌لای چه‌پدا",
          rotateRight: "بسورێنه‌ به‌لای راستدا",
          maxSize: "گه‌وره‌ترین قه‌باره‌",
          minSize: "بچوكترین قه‌باره‌",
          tableHeader: "سه‌ردێری خشته‌ك",
          mergeCells: "خانه‌كان تێكه‌ڵبكه‌",
          splitCells: "خانه‌كان لێك جیابكه‌وه‌",
          HorizontalSplit: "جیاكردنه‌وه‌ی ئاسۆیی",
          VerticalSplit: "جیاكردنه‌وه‌ی ستونی"
        },
        menu: {
          spaced: "بۆشای هه‌بێت",
          bordered: "لێواری هه‌بێت",
          neon: "نیۆن",
          translucent: "كه‌مێك وه‌ك شووشه‌",
          shadow: "سێبه‌ر",
          code: "كۆد"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ckb", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(ai)), ai.exports;
}
var Ds = /* @__PURE__ */ Vs();
const An = /* @__PURE__ */ Se(Ds);
var ri = { exports: {} }, Ms = ri.exports, Fl;
function Hs() {
  return Fl || (Fl = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Ms, function(t, l) {
      const o = {
        code: "cs",
        toolbar: {
          default: "Výchozí",
          save: "Uložit",
          font: "Písmo",
          formats: "Formáty",
          fontSize: "Velikost",
          bold: "Tučné",
          underline: "Podtržení",
          italic: "Kurzíva",
          strike: "Přeškrtnutí",
          subscript: "Dolní index",
          superscript: "Horní index",
          removeFormat: "Odebrat formát",
          fontColor: "Barva písma",
          hiliteColor: "Barva zvýraznění",
          indent: "Odsadit",
          outdent: "Předsadit",
          align: "Zarovnat",
          alignLeft: "Zarovnat vlevo",
          alignRight: "Zarovnat vpravo",
          alignCenter: "Zarovnat na střed",
          alignJustify: "Zarovnat do bloku",
          list: "Seznam",
          orderList: "Seřazený seznam",
          unorderList: "Neřazený seznam",
          horizontalRule: "Vodorovná čára",
          hr_solid: "Nepřerušovaná",
          hr_dotted: "Tečkovaná",
          hr_dashed: "Čárkovaná",
          table: "Tabulka",
          link: "Odkaz",
          math: "Matematika",
          image: "Obrázek",
          video: "Video",
          audio: "Zvuk",
          fullScreen: "Celá obrazovka",
          showBlocks: "Zobrazit bloky",
          codeView: "Zobrazení kódu",
          undo: "Zpět",
          redo: "Opakovat",
          preview: "Náhled",
          print: "tisk",
          tag_p: "Odstavec",
          tag_div: "Normální (DIV)",
          tag_h: "Záhlaví",
          tag_blockquote: "Citovat",
          tag_pre: "Kód",
          template: "Šablona",
          lineHeight: "Výška řádku",
          paragraphStyle: "Styl odstavce",
          textStyle: "Styl textu",
          imageGallery: "Obrázková galerie",
          dir_ltr: "Zleva doprava",
          dir_rtl: "Zprava doleva",
          mention: "Zmínka"
        },
        dialogBox: {
          linkBox: {
            title: "Vložit odkaz",
            url: "URL pro odkaz",
            text: "Text k zobrazení",
            newWindowCheck: "Otevřít v novém okně",
            downloadLinkCheck: "Odkaz ke stažení",
            bookmark: "Záložka"
          },
          mathBox: {
            title: "Matematika",
            inputLabel: "Matematická notace",
            fontSizeLabel: "Velikost písma",
            previewLabel: "Náhled"
          },
          imageBox: {
            title: "Vložit obrázek",
            file: "Vybrat ze souborů",
            url: "URL obrázku",
            altText: "Alternativní text"
          },
          videoBox: {
            title: "Vložit video",
            file: "Vybrat ze souborů",
            url: "URL pro vložení médií, YouTube/Vimeo"
          },
          audioBox: {
            title: "Vložit zvuk",
            file: "Vybrat ze souborů",
            url: "Adresa URL zvuku"
          },
          browser: {
            tags: "Štítky",
            search: "Hledat"
          },
          caption: "Vložit popis",
          close: "Zavřít",
          submitButton: "Odeslat",
          revertButton: "Vrátit zpět",
          proportion: "Omezení proporcí",
          basic: "Základní",
          left: "Vlevo",
          right: "Vpravo",
          center: "Střed",
          width: "Šířka",
          height: "Výška",
          size: "Velikost",
          ratio: "Poměr"
        },
        controller: {
          edit: "Upravit",
          unlink: "Odpojit",
          remove: "Odebrat",
          insertRowAbove: "Vložit řádek výše",
          insertRowBelow: "Vložit řádek níže",
          deleteRow: "Smazat řádek",
          insertColumnBefore: "Vložit sloupec před",
          insertColumnAfter: "Vložit sloupec za",
          deleteColumn: "Smazat sloupec",
          fixedColumnWidth: "Pevná šířka sloupce",
          resize100: "Změnit velikost 100%",
          resize75: "Změnit velikost 75%",
          resize50: "Změnit velikost 50%",
          resize25: "Změnit velikost 25%",
          autoSize: "Automatická velikost",
          mirrorHorizontal: "Zrcadlo, horizontální",
          mirrorVertical: "Zrcadlo, vertikální",
          rotateLeft: "Otočit doleva",
          rotateRight: "Otočit doprava",
          maxSize: "Max. velikost",
          minSize: "Min. velikost",
          tableHeader: "Záhlaví tabulky",
          mergeCells: "Spojit buňky",
          splitCells: "Rozdělit buňky",
          HorizontalSplit: "Vodorovné rozdělení",
          VerticalSplit: "Svislé rozdělení"
        },
        menu: {
          spaced: "Rozložené",
          bordered: "Ohraničené",
          neon: "Neon",
          translucent: "Průsvitné",
          shadow: "Stín",
          code: "Kód"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "cs", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(ri)), ri.exports;
}
var Fs = /* @__PURE__ */ Hs();
const Rn = /* @__PURE__ */ Se(Fs);
var ui = { exports: {} }, Os = ui.exports, Ol;
function Us() {
  return Ol || (Ol = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Os, function(t, l) {
      const o = {
        code: "da",
        toolbar: {
          default: "Default",
          save: "Gem",
          font: "Skrifttype",
          formats: "Format",
          fontSize: "Skriftstørrelse",
          bold: "Fed",
          underline: "Understreget",
          italic: "Skråskrift",
          strike: "Overstreget",
          subscript: "Sænket skrift",
          superscript: "Hævet skrift",
          removeFormat: "Fjern formatering",
          fontColor: "Skriftfarve",
          hiliteColor: "Baggrundsfarve",
          indent: "Ryk ind",
          outdent: "Ryk ud",
          align: "Justering",
          alignLeft: "Venstrejustering",
          alignRight: "Højrejustering",
          alignCenter: "Midterjustering",
          alignJustify: "Tilpas margin",
          list: "Lister",
          orderList: "Nummereret liste",
          unorderList: "Uordnet liste",
          horizontalRule: "Horisontal linie",
          hr_solid: "Almindelig",
          hr_dotted: "Punkteret",
          hr_dashed: "Streget",
          table: "Tabel",
          link: "Link",
          math: "Math",
          image: "Billede",
          video: "Video",
          audio: "Audio",
          fullScreen: "Fuld skærm",
          showBlocks: "Vis blokke",
          codeView: "Vis koder",
          undo: "Undo",
          redo: "Redo",
          preview: "Preview",
          print: "Print",
          tag_p: "Paragraph",
          tag_div: "Normal (DIV)",
          tag_h: "Overskrift",
          tag_blockquote: "Citer",
          tag_pre: "Code",
          template: "Schablone",
          lineHeight: "Linjehøjde",
          paragraphStyle: "Afsnitstil",
          textStyle: "Tekststil",
          imageGallery: "Billedgalleri",
          dir_ltr: "Venstre til højre",
          dir_rtl: "Højre til venstre",
          mention: "Nævne"
        },
        dialogBox: {
          linkBox: {
            title: "Indsæt link",
            url: "URL til link",
            text: "Tekst for link",
            newWindowCheck: "Åben i nyt faneblad",
            downloadLinkCheck: "Download link",
            bookmark: "Bogmærke"
          },
          mathBox: {
            title: "Math",
            inputLabel: "Matematisk notation",
            fontSizeLabel: "Skriftstørrelse",
            previewLabel: "Preview"
          },
          imageBox: {
            title: "Indsæt billede",
            file: "Indsæt fra fil",
            url: "Indsæt fra URL",
            altText: "Alternativ tekst"
          },
          videoBox: {
            title: "Indsæt Video",
            file: "Indsæt fra fil",
            url: "Indlejr video / YouTube,Vimeo"
          },
          audioBox: {
            title: "Indsæt Audio",
            file: "Indsæt fra fil",
            url: "Indsæt fra URL"
          },
          browser: {
            tags: "Tags",
            search: "Søg"
          },
          caption: "Indsæt beskrivelse",
          close: "Luk",
          submitButton: "Gennemfør",
          revertButton: "Gendan",
          proportion: "Bevar proportioner",
          basic: "Basis",
          left: "Venstre",
          right: "Højre",
          center: "Center",
          width: "Bredde",
          height: "Højde",
          size: "Størrelse",
          ratio: "Forhold"
        },
        controller: {
          edit: "Rediger",
          unlink: "Fjern link",
          remove: "Fjern",
          insertRowAbove: "Indsæt række foroven",
          insertRowBelow: "Indsæt række nedenfor",
          deleteRow: "Slet række",
          insertColumnBefore: "Indsæt kolonne før",
          insertColumnAfter: "Indsæt kolonne efter",
          deleteColumn: "Slet kolonne",
          fixedColumnWidth: "Fast søjlebredde",
          resize100: "Forstør 100%",
          resize75: "Forstør 75%",
          resize50: "Forstør 50%",
          resize25: "Forstør 25%",
          autoSize: "Auto størrelse",
          mirrorHorizontal: "Spejling, horisontal",
          mirrorVertical: "Spejling, vertikal",
          rotateLeft: "Roter til venstre",
          rotateRight: "Toter til højre",
          maxSize: "Max størrelse",
          minSize: "Min størrelse",
          tableHeader: "Tabel overskrift",
          mergeCells: "Sammenlæg celler (merge)",
          splitCells: "Opdel celler",
          HorizontalSplit: "Opdel horisontalt",
          VerticalSplit: "Opdel vertikalt"
        },
        menu: {
          spaced: "Brev Afstand",
          bordered: "Afgrænsningslinje",
          neon: "Neon",
          translucent: "Gennemsigtig",
          shadow: "Skygge",
          code: "Code"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "da", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(ui)), ui.exports;
}
var Ps = /* @__PURE__ */ Us();
const In = /* @__PURE__ */ Se(Ps);
var di = { exports: {} }, Ws = di.exports, Ul;
function $s() {
  return Ul || (Ul = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Ws, function(t, l) {
      const o = {
        code: "de",
        toolbar: {
          default: "Standard",
          save: "Speichern",
          font: "Schriftart",
          formats: "Format",
          fontSize: "Schriftgröße",
          bold: "Fett",
          underline: "Unterstrichen",
          italic: "Kursiv",
          strike: "Durchgestrichen",
          subscript: "Tiefgestellt",
          superscript: "Hochgestellt",
          removeFormat: "Format entfernen",
          fontColor: "Schriftfarbe",
          hiliteColor: "Farbe für Hervorhebungen",
          indent: "Einzug vergrößern",
          outdent: "Einzug verkleinern",
          align: "Ausrichtung",
          alignLeft: "Links ausrichten",
          alignRight: "Rechts ausrichten",
          alignCenter: "Zentriert ausrichten",
          alignJustify: "Blocksatz",
          list: "Liste",
          orderList: "Nummerierte Liste",
          unorderList: "Aufzählung",
          horizontalRule: "Horizontale Linie",
          hr_solid: "Strich",
          hr_dotted: "Gepunktet",
          hr_dashed: "Gestrichelt",
          table: "Tabelle",
          link: "Link",
          math: "Mathematik",
          image: "Bild",
          video: "Video",
          audio: "Audio",
          fullScreen: "Vollbild",
          showBlocks: "Blockformatierungen anzeigen",
          codeView: "Quelltext anzeigen",
          undo: "Rückgängig",
          redo: "Wiederholen",
          preview: "Vorschau",
          print: "Drucken",
          tag_p: "Absatz",
          tag_div: "Normal (DIV)",
          tag_h: "Header",
          tag_blockquote: "Zitat",
          tag_pre: "Quellcode",
          template: "Vorlage",
          lineHeight: "Zeilenhöhe",
          paragraphStyle: "Absatzstil",
          textStyle: "Textstil",
          imageGallery: "Bildergalerie",
          dir_ltr: "Links nach rechts",
          dir_rtl: "Rechts nach links",
          mention: "Erwähnen"
        },
        dialogBox: {
          linkBox: {
            title: "Link einfügen",
            url: "Link-URL",
            text: "Link-Text",
            newWindowCheck: "In neuem Fenster anzeigen",
            downloadLinkCheck: "Download-Link",
            bookmark: "Lesezeichen"
          },
          mathBox: {
            title: "Mathematik",
            inputLabel: "Mathematische Notation",
            fontSizeLabel: "Schriftgröße",
            previewLabel: "Vorschau"
          },
          imageBox: {
            title: "Bild einfügen",
            file: "Datei auswählen",
            url: "Bild-URL",
            altText: "Alternativer Text"
          },
          videoBox: {
            title: "Video einfügen",
            file: "Datei auswählen",
            url: "Video-URL, YouTube/Vimeo"
          },
          audioBox: {
            title: "Audio einfügen",
            file: "Datei auswählen",
            url: "Audio-URL"
          },
          browser: {
            tags: "Stichworte",
            search: "Suche"
          },
          caption: "Beschreibung eingeben",
          close: "Schließen",
          submitButton: "Übernehmen",
          revertButton: "Rückgängig",
          proportion: "Seitenverhältnis beibehalten",
          basic: "Standard",
          left: "Links",
          right: "Rechts",
          center: "Zentriert",
          width: "Breite",
          height: "Höhe",
          size: "Größe",
          ratio: "Verhältnis"
        },
        controller: {
          edit: "Bearbeiten",
          unlink: "Link entfernen",
          remove: "Löschen",
          insertRowAbove: "Zeile oberhalb einfügen",
          insertRowBelow: "Zeile unterhalb einfügen",
          deleteRow: "Zeile löschen",
          insertColumnBefore: "Spalte links einfügen",
          insertColumnAfter: "Spalte rechts einfügen",
          deleteColumn: "Spalte löschen",
          fixedColumnWidth: "Feste Spaltenbreite",
          resize100: "Zoom 100%",
          resize75: "Zoom 75%",
          resize50: "Zoom 50%",
          resize25: "Zoom 25%",
          autoSize: "Automatische Größenanpassung",
          mirrorHorizontal: "Horizontal spiegeln",
          mirrorVertical: "Vertikal spiegeln",
          rotateLeft: "Nach links drehen",
          rotateRight: "Nach rechts drehen",
          maxSize: "Maximale Größe",
          minSize: "Mindestgröße",
          tableHeader: "Tabellenüberschrift",
          mergeCells: "Zellen verbinden",
          splitCells: "Zellen teilen",
          HorizontalSplit: "Horizontal teilen",
          VerticalSplit: "Vertikal teilen"
        },
        menu: {
          spaced: "Buchstabenabstand",
          bordered: "Umrandet",
          neon: "Neon",
          translucent: "Durchscheinend",
          shadow: "Schatten",
          code: "Quellcode"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "de", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(di)), di.exports;
}
var Zs = /* @__PURE__ */ $s();
const Vn = /* @__PURE__ */ Se(Zs);
var ci = { exports: {} }, qs = ci.exports, Pl;
function js() {
  return Pl || (Pl = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : qs, function(t, l) {
      const o = {
        code: "en",
        toolbar: {
          default: "Default",
          save: "Save",
          font: "Font",
          formats: "Formats",
          fontSize: "Size",
          bold: "Bold",
          underline: "Underline",
          italic: "Italic",
          strike: "Strike",
          subscript: "Subscript",
          superscript: "Superscript",
          removeFormat: "Remove Format",
          fontColor: "Font Color",
          hiliteColor: "Highlight Color",
          indent: "Indent",
          outdent: "Outdent",
          align: "Align",
          alignLeft: "Align left",
          alignRight: "Align right",
          alignCenter: "Align center",
          alignJustify: "Align justify",
          list: "List",
          orderList: "Ordered list",
          unorderList: "Unordered list",
          horizontalRule: "Horizontal line",
          hr_solid: "Solid",
          hr_dotted: "Dotted",
          hr_dashed: "Dashed",
          table: "Table",
          link: "Link",
          math: "Math",
          image: "Image",
          video: "Video",
          audio: "Audio",
          fullScreen: "Full screen",
          showBlocks: "Show blocks",
          codeView: "Code view",
          undo: "Undo",
          redo: "Redo",
          preview: "Preview",
          print: "print",
          tag_p: "Paragraph",
          tag_div: "Normal (DIV)",
          tag_h: "Header",
          tag_blockquote: "Quote",
          tag_pre: "Code",
          template: "Template",
          lineHeight: "Line height",
          paragraphStyle: "Paragraph style",
          textStyle: "Text style",
          imageGallery: "Image gallery",
          dir_ltr: "Left to right",
          dir_rtl: "Right to left",
          mention: "Mention"
        },
        dialogBox: {
          linkBox: {
            title: "Insert Link",
            url: "URL to link",
            text: "Text to display",
            newWindowCheck: "Open in new window",
            downloadLinkCheck: "Download link",
            bookmark: "Bookmark"
          },
          mathBox: {
            title: "Math",
            inputLabel: "Mathematical Notation",
            fontSizeLabel: "Font Size",
            previewLabel: "Preview"
          },
          imageBox: {
            title: "Insert image",
            file: "Select from files",
            url: "Image URL",
            altText: "Alternative text"
          },
          videoBox: {
            title: "Insert Video",
            file: "Select from files",
            url: "Media embed URL, YouTube/Vimeo"
          },
          audioBox: {
            title: "Insert Audio",
            file: "Select from files",
            url: "Audio URL"
          },
          browser: {
            tags: "Tags",
            search: "Search"
          },
          caption: "Insert description",
          close: "Close",
          submitButton: "Submit",
          revertButton: "Revert",
          proportion: "Constrain proportions",
          basic: "Basic",
          left: "Left",
          right: "Right",
          center: "Center",
          width: "Width",
          height: "Height",
          size: "Size",
          ratio: "Ratio"
        },
        controller: {
          edit: "Edit",
          unlink: "Unlink",
          remove: "Remove",
          insertRowAbove: "Insert row above",
          insertRowBelow: "Insert row below",
          deleteRow: "Delete row",
          insertColumnBefore: "Insert column before",
          insertColumnAfter: "Insert column after",
          deleteColumn: "Delete column",
          fixedColumnWidth: "Fixed column width",
          resize100: "Resize 100%",
          resize75: "Resize 75%",
          resize50: "Resize 50%",
          resize25: "Resize 25%",
          autoSize: "Auto size",
          mirrorHorizontal: "Mirror, Horizontal",
          mirrorVertical: "Mirror, Vertical",
          rotateLeft: "Rotate left",
          rotateRight: "Rotate right",
          maxSize: "Max size",
          minSize: "Min size",
          tableHeader: "Table header",
          mergeCells: "Merge cells",
          splitCells: "Split Cells",
          HorizontalSplit: "Horizontal split",
          VerticalSplit: "Vertical split"
        },
        menu: {
          spaced: "Spaced",
          bordered: "Bordered",
          neon: "Neon",
          translucent: "Translucent",
          shadow: "Shadow",
          code: "Code"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "en", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(ci)), ci.exports;
}
var Gs = /* @__PURE__ */ js();
const Ui = /* @__PURE__ */ Se(Gs);
var fi = { exports: {} }, Ks = fi.exports, Wl;
function Ys() {
  return Wl || (Wl = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Ks, function(t, l) {
      const o = {
        code: "es",
        toolbar: {
          default: "Valor por defecto",
          save: "Guardar",
          font: "Fuente",
          formats: "Formato",
          fontSize: "Tamaño de fuente",
          bold: "Negrita",
          underline: "Subrayado",
          italic: "Cursiva",
          strike: "Tachado",
          subscript: "Subíndice",
          superscript: "Superíndice",
          removeFormat: "Eliminar formato",
          fontColor: "Color de fuente",
          hiliteColor: "Color de resaltado",
          indent: "Más tabulación",
          outdent: "Menos tabulación",
          align: "Alinear",
          alignLeft: "Alinear a la izquierda",
          alignRight: "Alinear a la derecha",
          alignCenter: "Alinear al centro",
          alignJustify: "Justificar",
          list: "Lista",
          orderList: "Lista ordenada",
          unorderList: "Lista desordenada",
          horizontalRule: "Horizontal line",
          hr_solid: "Línea horizontal solida",
          hr_dotted: "Línea horizontal punteada",
          hr_dashed: "Línea horizontal discontinua",
          table: "Tabla",
          link: "Link",
          math: "Matemáticas",
          image: "Imagen",
          video: "Video",
          audio: "Audio",
          fullScreen: "Pantalla completa",
          showBlocks: "Ver bloques",
          codeView: "Ver código fuente",
          undo: "UndoDeshacer última acción",
          redo: "Rehacer última acción",
          preview: "Vista previa",
          print: "Imprimir",
          tag_p: "Párrafo",
          tag_div: "Normal (DIV)",
          tag_h: "Header",
          tag_blockquote: "Cita",
          tag_pre: "Código",
          template: "Plantilla",
          lineHeight: "Altura de la línea",
          paragraphStyle: "Estilo del parrafo",
          textStyle: "Estilo del texto",
          imageGallery: "Galería de imágenes",
          dir_ltr: "De izquierda a derecha",
          dir_rtl: "De derecha a izquierda",
          mention: "Mencionar"
        },
        dialogBox: {
          linkBox: {
            title: "Insertar Link",
            url: "¿Hacia que URL lleva el link?",
            text: "Texto para mostrar",
            newWindowCheck: "Abrir en una nueva ventana",
            downloadLinkCheck: "Enlace de descarga",
            bookmark: "Marcador"
          },
          mathBox: {
            title: "Matemáticas",
            inputLabel: "Notación Matemática",
            fontSizeLabel: "Tamaño de fuente",
            previewLabel: "Vista previa"
          },
          imageBox: {
            title: "Insertar imagen",
            file: "Seleccionar desde los archivos",
            url: "URL de la imagen",
            altText: "Texto alternativo"
          },
          videoBox: {
            title: "Insertar Video",
            file: "Seleccionar desde los archivos",
            url: "¿URL del vídeo? Youtube/Vimeo"
          },
          audioBox: {
            title: "Insertar Audio",
            file: "Seleccionar desde los archivos",
            url: "URL de la audio"
          },
          browser: {
            tags: "Etiquetas",
            search: "Buscar"
          },
          caption: "Insertar descripción",
          close: "Cerrar",
          submitButton: "Enviar",
          revertButton: "revertir",
          proportion: "Restringir las proporciones",
          basic: "Basico",
          left: "Izquierda",
          right: "derecha",
          center: "Centro",
          width: "Ancho",
          height: "Alto",
          size: "Tamaño",
          ratio: "Proporción"
        },
        controller: {
          edit: "Editar",
          unlink: "Desvincular",
          remove: "RemoveQuitar",
          insertRowAbove: "Insertar fila arriba",
          insertRowBelow: "Insertar fila debajo",
          deleteRow: "Eliminar fila",
          insertColumnBefore: "Insertar columna antes",
          insertColumnAfter: "Insertar columna después",
          deleteColumn: "Eliminar columna",
          fixedColumnWidth: "Ancho de columna fijo",
          resize100: "Redimensionar 100%",
          resize75: "Redimensionar 75%",
          resize50: "Redimensionar 50%",
          resize25: "Redimensionar 25%",
          autoSize: "Tamaño automático",
          mirrorHorizontal: "Espejo, Horizontal",
          mirrorVertical: "Espejo, Vertical",
          rotateLeft: "Girar a la izquierda",
          rotateRight: "Girar a la derecha",
          maxSize: "Tamaño máximo",
          minSize: "Tamaño minímo",
          tableHeader: "Encabezado de tabla",
          mergeCells: "Combinar celdas",
          splitCells: "Dividir celdas",
          HorizontalSplit: "División horizontal",
          VerticalSplit: "División vertical"
        },
        menu: {
          spaced: "Espaciado",
          bordered: "Bordeado",
          neon: "Neón",
          translucent: "Translúcido",
          shadow: "Sombreado",
          code: "Código"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "es", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(fi)), fi.exports;
}
var Xs = /* @__PURE__ */ Ys();
const Dn = /* @__PURE__ */ Se(Xs);
var pi = { exports: {} }, Js = pi.exports, $l;
function Qs() {
  return $l || ($l = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Js, function(t, l) {
      const o = {
        code: "fr",
        toolbar: {
          default: "Défaut",
          save: "Sauvegarder",
          font: "Police",
          formats: "Formats",
          fontSize: "Taille",
          bold: "Gras",
          underline: "Souligné",
          italic: "Italique",
          strike: "Barré",
          subscript: "Indice",
          superscript: "Exposant",
          removeFormat: "Effacer le formatage",
          fontColor: "Couleur du texte",
          hiliteColor: "Couleur en arrière plan",
          indent: "Indenter",
          outdent: "Désindenter",
          align: "Alignement",
          alignLeft: "À gauche",
          alignRight: "À droite",
          alignCenter: "Centré",
          alignJustify: "Justifié",
          list: "Liste",
          orderList: "Ordonnée",
          unorderList: "Non-ordonnée",
          horizontalRule: "Ligne horizontale",
          hr_solid: "Solide",
          hr_dotted: "Points",
          hr_dashed: "Tirets",
          table: "Table",
          link: "Lien",
          math: "Math",
          image: "Image",
          video: "Video",
          audio: "Audio",
          fullScreen: "Plein écran",
          showBlocks: "Voir les blocs",
          codeView: "Voir le code",
          undo: "Annuler",
          redo: "Rétablir",
          preview: "Prévisualiser",
          print: "Imprimer",
          tag_p: "Paragraphe",
          tag_div: "Normal (DIV)",
          tag_h: "Titre",
          tag_blockquote: "Citation",
          tag_pre: "Code",
          template: "Template",
          lineHeight: "Hauteur de la ligne",
          paragraphStyle: "Style de paragraphe",
          textStyle: "Style de texte",
          imageGallery: "Galerie d'images",
          dir_ltr: "De gauche à droite",
          dir_rtl: "De droite à gauche",
          mention: "Mention"
        },
        dialogBox: {
          linkBox: {
            title: "Insérer un lien",
            url: "Adresse URL du lien",
            text: "Texte à afficher",
            newWindowCheck: "Ouvrir dans une nouvelle fenêtre",
            downloadLinkCheck: "Lien de téléchargement",
            bookmark: "Signet"
          },
          mathBox: {
            title: "Math",
            inputLabel: "Notation mathématique",
            fontSizeLabel: "Taille",
            previewLabel: "Prévisualiser"
          },
          imageBox: {
            title: "Insérer une image",
            file: "Sélectionner le fichier",
            url: "Adresse URL du fichier",
            altText: "Texte Alternatif"
          },
          videoBox: {
            title: "Insérer une vidéo",
            file: "Sélectionner le fichier",
            url: "URL d’intégration du média, YouTube/Vimeo"
          },
          audioBox: {
            title: "Insérer un fichier audio",
            file: "Sélectionner le fichier",
            url: "Adresse URL du fichier"
          },
          browser: {
            tags: "Mots clés",
            search: "Chercher"
          },
          caption: "Insérer une description",
          close: "Fermer",
          submitButton: "Appliquer",
          revertButton: "Revenir en arrière",
          proportion: "Maintenir le rapport hauteur/largeur",
          basic: "Basique",
          left: "Gauche",
          right: "Droite",
          center: "Centré",
          width: "Largeur",
          height: "Hauteur",
          size: "Taille",
          ratio: "Rapport"
        },
        controller: {
          edit: "Modifier",
          unlink: "Supprimer un lien",
          remove: "Effacer",
          insertRowAbove: "Insérer une ligne en dessous",
          insertRowBelow: "Insérer une ligne au dessus",
          deleteRow: "Effacer la ligne",
          insertColumnBefore: "Insérer une colonne avant",
          insertColumnAfter: "Insérer une colonne après",
          deleteColumn: "Effacer la colonne",
          fixedColumnWidth: "Largeur de colonne fixe",
          resize100: "Redimensionner à 100%",
          resize75: "Redimensionner à 75%",
          resize50: "Redimensionner à 50%",
          resize25: "Redimensionner à 25%",
          autoSize: "Taille automatique",
          mirrorHorizontal: "Mirroir, Horizontal",
          mirrorVertical: "Mirroir, Vertical",
          rotateLeft: "Rotation à gauche",
          rotateRight: "Rotation à droite",
          maxSize: "Taille max",
          minSize: "Taille min",
          tableHeader: "En-tête de table",
          mergeCells: "Fusionner les cellules",
          splitCells: "Diviser les Cellules",
          HorizontalSplit: "Scission horizontale",
          VerticalSplit: "Scission verticale"
        },
        menu: {
          spaced: "Espacement",
          bordered: "Ligne de démarcation",
          neon: "Néon",
          translucent: "Translucide",
          shadow: "Ombre",
          code: "Code"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "fr", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(pi)), pi.exports;
}
var ea = /* @__PURE__ */ Qs();
const Mn = /* @__PURE__ */ Se(ea);
var hi = { exports: {} }, ta = hi.exports, Zl;
function ia() {
  return Zl || (Zl = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : ta, function(t, l) {
      const o = {
        code: "he",
        toolbar: {
          default: "ברירת מחדל",
          save: "שמור",
          font: "גופן",
          formats: "עיצוב",
          fontSize: "גודל",
          bold: "מודגש",
          underline: "קו תחתון",
          italic: "נטוי",
          strike: "קו חוצה",
          subscript: "עילי",
          superscript: "תחתי",
          removeFormat: "הסר עיצוב",
          fontColor: "צבע גופן",
          hiliteColor: "צבע קו תחתון",
          indent: "הגדל כניסה",
          outdent: "הקטן כניסה",
          align: "יישור",
          alignLeft: "יישר לשמאל",
          alignRight: "יישר לימין",
          alignCenter: "מרכז",
          alignJustify: "יישר לשני הצדדים",
          list: "רשימה",
          orderList: "מספור",
          unorderList: "תבליטים",
          horizontalRule: "קו אופקי",
          hr_solid: "קו",
          hr_dotted: "נקודות",
          hr_dashed: "מקפים",
          table: "טבלה",
          link: "קישור",
          math: "מתמטיקה",
          image: "תמונה",
          video: "חוזי",
          audio: "שמע",
          fullScreen: "מסך מלא",
          showBlocks: "הצג גושים",
          codeView: "הצג קוד",
          undo: "בטל",
          redo: "חזור",
          preview: "תצוגה מקדימה",
          print: "הדפס",
          tag_p: "פסקה",
          tag_div: "רגילה (DIV)",
          tag_h: "כותרת",
          tag_blockquote: "ציטוט",
          tag_pre: "קוד",
          template: "תבנית",
          lineHeight: "גובה השורה",
          paragraphStyle: "סגנון פסקה",
          textStyle: "סגנון גופן",
          imageGallery: "גלרית תמונות",
          dir_ltr: "משמאל לימין",
          dir_rtl: "מימין לשמאל",
          mention: "הזכר"
        },
        dialogBox: {
          linkBox: {
            title: "הכנס קשור",
            url: "כתובת קשור",
            text: "תיאור",
            newWindowCheck: "פתח בחלון חדש",
            downloadLinkCheck: "קישור להורדה",
            bookmark: "סמניה"
          },
          mathBox: {
            title: "נוסחה",
            inputLabel: "סימנים מתמטים",
            fontSizeLabel: "גודל גופן",
            previewLabel: "תצוגה מקדימה"
          },
          imageBox: {
            title: "הכנס תמונה",
            file: "בחר מקובץ",
            url: "כתובת URL תמונה",
            altText: "תיאור (תגית alt)"
          },
          videoBox: {
            title: "הכנס סרטון",
            file: "בחר מקובץ",
            url: "כתובת הטמעה YouTube/Vimeo"
          },
          audioBox: {
            title: "הכנס שמע",
            file: "בחר מקובץ",
            url: "כתובת URL שמע"
          },
          browser: {
            tags: "תג",
            search: "חפש"
          },
          caption: "הכנס תיאור",
          close: "סגור",
          submitButton: "שלח",
          revertButton: "בטל",
          proportion: "שמר יחס",
          basic: "בסיסי",
          left: "שמאל",
          right: "ימין",
          center: "מרכז",
          width: "רוחב",
          height: "גובה",
          size: "גודל",
          ratio: "יחס"
        },
        controller: {
          edit: "ערוך",
          unlink: "הסר קישורים",
          remove: "הסר",
          insertRowAbove: "הכנס שורה מעל",
          insertRowBelow: "הכנס שורה מתחת",
          deleteRow: "מחק שורה",
          insertColumnBefore: "הכנס עמודה לפני",
          insertColumnAfter: "הכנס עמודה אחרי",
          deleteColumn: "מחק עמודה",
          fixedColumnWidth: "קבע רוחב עמודות",
          resize100: "ללא הקטנה",
          resize75: "הקטן 75%",
          resize50: "הקטן 50%",
          resize25: "הקטן 25%",
          autoSize: "הקטן אוטומטית",
          mirrorHorizontal: "הפוך לרוחב",
          mirrorVertical: "הפוך לגובה",
          rotateLeft: "סובב שמאלה",
          rotateRight: "סובב ימינה",
          maxSize: "גודל מרבי",
          minSize: "גודל מזערי",
          tableHeader: "כותרת טבלה",
          mergeCells: "מזג תאים",
          splitCells: "פצל תא",
          HorizontalSplit: "פצל לגובה",
          VerticalSplit: "פצל לרוחב"
        },
        menu: {
          spaced: "מרווח",
          bordered: "בעל מיתאר",
          neon: "זוהר",
          translucent: "שקוף למחצה",
          shadow: "צל",
          code: "קוד"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "he", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(hi)), hi.exports;
}
var la = /* @__PURE__ */ ia();
const Hn = /* @__PURE__ */ Se(la);
var mi = { exports: {} }, na = mi.exports, ql;
function oa() {
  return ql || (ql = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : na, function(t, l) {
      const o = {
        code: "hu",
        toolbar: {
          default: "Alapértelmezett",
          save: "Mentés",
          font: "Betűtípus",
          formats: "Formázás",
          fontSize: "Betűméret",
          bold: "Félkövér",
          underline: "Aláhúzott",
          italic: "Dőlt",
          strike: "Áthúzott",
          subscript: "Alsó index",
          superscript: "Felső index",
          removeFormat: "Formázás törlése",
          fontColor: "Betűszín",
          hiliteColor: "Háttérszín",
          indent: "Behúzás növelése",
          outdent: "Behúzás csökkentése",
          align: "Igazítás",
          alignLeft: "Balra igazítás",
          alignRight: "Jobbra igazítás",
          alignCenter: "Középre igazítás",
          alignJustify: "Sorkizárt",
          list: "Lista",
          orderList: "Számozott lista",
          unorderList: "Számozatlan lista",
          horizontalRule: "Elválasztó",
          hr_solid: "Folytonos",
          hr_dotted: "Pontozott",
          hr_dashed: "Szaggatott",
          table: "Táblázat",
          link: "Hivatkozás",
          math: "Matematika",
          image: "Kép",
          video: "Videó",
          audio: "Hang",
          fullScreen: "Teljes képernyő",
          showBlocks: "Blokkok megjelenítése",
          codeView: "Forráskód nézet",
          undo: "Visszavonás",
          redo: "Visszavonás visszavonása",
          preview: "Előnézet",
          print: "Nyomtatás",
          tag_p: "Bekezdés",
          tag_div: "Normál (DIV)",
          tag_h: "Fejléc",
          tag_blockquote: "Idézet",
          tag_pre: "Kód",
          template: "Minta",
          lineHeight: "Sormagasság",
          paragraphStyle: "Bekezdésstílus",
          textStyle: "Karakterstílus",
          imageGallery: "Képgalléria",
          dir_ltr: "Balról jobbra",
          dir_rtl: "Jobbról balra",
          mention: "Említés"
        },
        dialogBox: {
          linkBox: {
            title: "Link beszúrása",
            url: "URL",
            text: "Megjelenített szöveg",
            newWindowCheck: "Megnyitás új ablakban",
            downloadLinkCheck: "Letöltési hivatkozás",
            bookmark: "Könyvjelző"
          },
          mathBox: {
            title: "Matematika",
            inputLabel: "Matematikai jelölések",
            fontSizeLabel: "Betűméret",
            previewLabel: "Előnézet"
          },
          imageBox: {
            title: "Kép beszúrása",
            file: "Fájlfeltöltés",
            url: "Képhivatkozás",
            altText: "Alternatív szöveg"
          },
          videoBox: {
            title: "Videó beszúrása",
            file: "Fájlfeltöltés",
            url: "Beágyazható URL, YouTube/Vimeo"
          },
          audioBox: {
            title: "Hang beszúrása",
            file: "Fájlfeltöltés",
            url: "Hang URL"
          },
          browser: {
            tags: "Címkék",
            search: "Keresés"
          },
          caption: "Képaláírás",
          close: "Bezárás",
          submitButton: "Küldés",
          revertButton: "Mégse",
          proportion: "Méretkorlátok",
          basic: "Alapszintű",
          left: "Balra",
          right: "Jobbra",
          center: "Középre",
          width: "Szélesség",
          height: "Magasság",
          size: "Méret",
          ratio: "Képarány"
        },
        controller: {
          edit: "Szerkesztés",
          unlink: "Link eltávolítása",
          remove: "Törlés",
          insertRowAbove: "Új sor fölötte",
          insertRowBelow: "Új sor alatta",
          deleteRow: "Sor törlése",
          insertColumnBefore: "Új oszlop balra",
          insertColumnAfter: "Új oszlop jobbra",
          deleteColumn: "Oszlop törlése",
          fixedColumnWidth: "Rögzített oszlopszélesség",
          resize100: "Átméretezés: 100%",
          resize75: "Átméretezés: 75%",
          resize50: "Átméretezés: 50%",
          resize25: "Átméretezés: 25%",
          autoSize: "Automatikus méret",
          mirrorHorizontal: "Vízszintes tükrözés",
          mirrorVertical: "Függőleges tükrözés",
          rotateLeft: "Forgatás balra",
          rotateRight: "Forgatás jobbra",
          maxSize: "Maximális méret",
          minSize: "Minimális méret",
          tableHeader: "Táblázatfejléc",
          mergeCells: "Cellák egyesítése",
          splitCells: "Cellák szétválasztása",
          HorizontalSplit: "Szétválasztás vízszintesen",
          VerticalSplit: "Szétválasztás függőlegesen"
        },
        menu: {
          spaced: "Ritkított",
          bordered: "Keretezett",
          neon: "Neon",
          translucent: "Áttetsző",
          shadow: "Árnyék",
          code: "Kód"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "hu", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(mi)), mi.exports;
}
var sa = /* @__PURE__ */ oa();
const Fn = /* @__PURE__ */ Se(sa);
var gi = { exports: {} }, aa = gi.exports, jl;
function ra() {
  return jl || (jl = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG una finestra con un documento");
        return l(o);
      };
    })(typeof window < "u" ? window : aa, function(t, l) {
      const o = {
        code: "it",
        toolbar: {
          default: "Predefinita",
          save: "Salva",
          font: "Font",
          formats: "Formato",
          fontSize: "Grandezza",
          bold: "Grassetto",
          underline: "Sottolineato",
          italic: "Corsivo",
          strike: "Barrato",
          subscript: "Apice",
          superscript: "Pedice",
          removeFormat: "Rimuovi formattazione",
          fontColor: "Colore testo",
          hiliteColor: "Colore sottolineatura",
          indent: "Aumenta rientro",
          outdent: "Riduci rientro",
          align: "Allinea",
          alignLeft: "Allinea a sinistra",
          alignRight: "Allinea a destra",
          alignCenter: "Allinea al centro",
          alignJustify: "Giustifica testo",
          list: "Elenco",
          orderList: "Elenco numerato",
          unorderList: "Elenco puntato",
          horizontalRule: "Linea orizzontale",
          hr_solid: "Linea continua",
          hr_dotted: "Puntini",
          hr_dashed: "Trattini",
          table: "Tabella",
          link: "Collegamento ipertestuale",
          math: "Formula matematica",
          image: "Immagine",
          video: "Video",
          audio: "Audio",
          fullScreen: "A tutto schermo",
          showBlocks: "Visualizza blocchi",
          codeView: "Visualizza codice",
          undo: "Annulla",
          redo: "Ripristina",
          preview: "Anteprima",
          print: "Stampa",
          tag_p: "Paragrafo",
          tag_div: "Normale (DIV)",
          tag_h: "Titolo",
          tag_blockquote: "Citazione",
          tag_pre: "Codice",
          template: "Modello",
          lineHeight: "Interlinea",
          paragraphStyle: "Stile paragrafo",
          textStyle: "Stile testo",
          imageGallery: "Galleria di immagini",
          dir_ltr: "Da sinistra a destra",
          dir_rtl: "Da destra a sinistra",
          mention: "Menzione"
        },
        dialogBox: {
          linkBox: {
            title: "Inserisci un link",
            url: "Indirizzo",
            text: "Testo da visualizzare",
            newWindowCheck: "Apri in una nuova finestra",
            downloadLinkCheck: "Link per scaricare",
            bookmark: "Segnalibro"
          },
          mathBox: {
            title: "Matematica",
            inputLabel: "Notazione matematica",
            fontSizeLabel: "Grandezza testo",
            previewLabel: "Anteprima"
          },
          imageBox: {
            title: "Inserisci immagine",
            file: "Seleziona da file",
            url: "Indirizzo immagine",
            altText: "Testo alternativo (ALT)"
          },
          videoBox: {
            title: "Inserisci video",
            file: "Seleziona da file",
            url: "Indirizzo video di embed, YouTube/Vimeo"
          },
          audioBox: {
            title: "Inserisci audio",
            file: "Seleziona da file",
            url: "Indirizzo audio"
          },
          browser: {
            tags: "tag",
            search: "Ricerca"
          },
          caption: "Inserisci didascalia",
          close: "Chiudi",
          submitButton: "Invia",
          revertButton: "Annulla",
          proportion: "Proporzionale",
          basic: "Da impostazione",
          left: "Sinistra",
          right: "Destra",
          center: "Centrato",
          width: "Larghezza",
          height: "Altezza",
          size: "Dimensioni",
          ratio: "Rapporto"
        },
        controller: {
          edit: "Modifica",
          unlink: "Elimina link",
          remove: "Rimuovi",
          insertRowAbove: "Inserisci riga sopra",
          insertRowBelow: "Inserisci riga sotto",
          deleteRow: "Cancella riga",
          insertColumnBefore: "Inserisci colonna prima",
          insertColumnAfter: "Inserisci colonna dopo",
          deleteColumn: "Cancella colonna",
          fixedColumnWidth: "Larghezza delle colonne fissa",
          resize100: "Ridimensiona 100%",
          resize75: "Ridimensiona 75%",
          resize50: "Ridimensiona 50%",
          resize25: "Ridimensiona 25%",
          autoSize: "Ridimensione automatica",
          mirrorHorizontal: "Capovolgi orizzontalmente",
          mirrorVertical: "Capovolgi verticalmente",
          rotateLeft: "Ruota a sinistra",
          rotateRight: "Ruota a destra",
          maxSize: "Dimensione massima",
          minSize: "Dimensione minima",
          tableHeader: "Intestazione tabella",
          mergeCells: "Unisci celle",
          splitCells: "Dividi celle",
          HorizontalSplit: "Separa orizontalmente",
          VerticalSplit: "Separa verticalmente"
        },
        menu: {
          spaced: "Spaziato",
          bordered: "Bordato",
          neon: "Luminoso",
          translucent: "Traslucido",
          shadow: "Ombra",
          code: "Codice"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "it", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(gi)), gi.exports;
}
var ua = /* @__PURE__ */ ra();
const On = /* @__PURE__ */ Se(ua);
var vi = { exports: {} }, da = vi.exports, Gl;
function ca() {
  return Gl || (Gl = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : da, function(t, l) {
      const o = {
        code: "ja",
        toolbar: {
          default: "デフォルト",
          save: "保存",
          font: "フォント",
          formats: "段落形式",
          fontSize: "サイズ",
          bold: "太字",
          underline: "下線",
          italic: "イタリック",
          strike: "取り消し線",
          subscript: "下付き",
          superscript: "上付き",
          removeFormat: "形式を削除",
          fontColor: "文字色",
          hiliteColor: "文字の背景色",
          indent: "インデント",
          outdent: "インデント",
          align: "ソート",
          alignLeft: "左揃え",
          alignRight: "右揃え",
          alignCenter: "中央揃え",
          alignJustify: "両端揃え",
          list: "リスト",
          orderList: "数値ブリット",
          unorderList: "円形ブリット",
          horizontalRule: "水平線を挿入",
          hr_solid: "実線",
          hr_dotted: "点線",
          hr_dashed: "ダッシュ",
          table: "テーブル",
          link: "リンク",
          math: "数学",
          image: "画像",
          video: "動画",
          audio: "オーディオ",
          fullScreen: "フルスクリーン",
          showBlocks: "ブロック表示",
          codeView: "HTMLの編集",
          undo: "元に戻す",
          redo: "再実行",
          preview: "プレビュー",
          print: "印刷",
          tag_p: "本文",
          tag_div: "基本（DIV）",
          tag_h: "タイトル",
          tag_blockquote: "引用",
          tag_pre: "コード",
          template: "テンプレート",
          lineHeight: "行の高さ",
          paragraphStyle: "段落スタイル",
          textStyle: "テキストスタイル",
          imageGallery: "イメージギャラリー",
          dir_ltr: "左から右へ",
          dir_rtl: "右から左に",
          mention: "言及する"
        },
        dialogBox: {
          linkBox: {
            title: "リンクの挿入",
            url: "インターネットアドレス",
            text: "画面のテキスト",
            newWindowCheck: "別ウィンドウで開く",
            downloadLinkCheck: "ダウンロードリンク",
            bookmark: "ブックマーク"
          },
          mathBox: {
            title: "数学",
            inputLabel: "数学表記",
            fontSizeLabel: "サイズ",
            previewLabel: "プレビュー"
          },
          imageBox: {
            title: "画像の挿入",
            file: "ファイルの選択",
            url: "イメージアドレス",
            altText: "置換文字列"
          },
          videoBox: {
            title: "動画を挿入",
            file: "ファイルの選択",
            url: "メディア埋め込みアドレス, YouTube/Vimeo"
          },
          audioBox: {
            title: "オーディオを挿入",
            file: "ファイルの選択",
            url: "オーディオアドレス"
          },
          browser: {
            tags: "タグ",
            search: "探す"
          },
          caption: "説明付け",
          close: "閉じる",
          submitButton: "確認",
          revertButton: "元に戻す",
          proportion: "の割合カスタマイズ",
          basic: "基本",
          left: "左",
          right: "右",
          center: "中央",
          width: "横",
          height: "縦",
          size: "サイズ",
          ratio: "比率"
        },
        controller: {
          edit: "編集",
          unlink: "リンク解除",
          remove: "削除",
          insertRowAbove: "上に行を挿入",
          insertRowBelow: "下に行を挿入",
          deleteRow: "行の削除",
          insertColumnBefore: "左に列を挿入",
          insertColumnAfter: "右に列を挿入",
          deleteColumn: "列を削除する",
          fixedColumnWidth: "固定列幅",
          resize100: "100％ サイズ",
          resize75: "75％ サイズ",
          resize50: "50％ サイズ",
          resize25: "25％ サイズ",
          autoSize: "自動サイズ",
          mirrorHorizontal: "左右反転",
          mirrorVertical: "上下反転",
          rotateLeft: "左に回転",
          rotateRight: "右に回転",
          maxSize: "最大サイズ",
          minSize: "最小サイズ",
          tableHeader: "表のヘッダー",
          mergeCells: "セルの結合",
          splitCells: "セルを分割",
          HorizontalSplit: "横分割",
          VerticalSplit: "垂直分割"
        },
        menu: {
          spaced: "文字間隔",
          bordered: "境界線",
          neon: "ネオン",
          translucent: "半透明",
          shadow: "影",
          code: "コード"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ja", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(vi)), vi.exports;
}
var fa = /* @__PURE__ */ ca();
const Un = /* @__PURE__ */ Se(fa);
var bi = { exports: {} }, pa = bi.exports, Kl;
function ha() {
  return Kl || (Kl = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : pa, function(t, l) {
      const o = {
        code: "ko",
        toolbar: {
          default: "기본값",
          save: "저장",
          font: "글꼴",
          formats: "문단 형식",
          fontSize: "크기",
          bold: "굵게",
          underline: "밑줄",
          italic: "기울임",
          strike: "취소선",
          subscript: "아래 첨자",
          superscript: "위 첨자",
          removeFormat: "형식 제거",
          fontColor: "글자색",
          hiliteColor: "배경색",
          indent: "들여쓰기",
          outdent: "내어쓰기",
          align: "정렬",
          alignLeft: "왼쪽 정렬",
          alignRight: "오른쪽 정렬",
          alignCenter: "가운데 정렬",
          alignJustify: "양쪽 정렬",
          list: "리스트",
          orderList: "숫자형 리스트",
          unorderList: "원형 리스트",
          horizontalRule: "가로 줄 삽입",
          hr_solid: "실선",
          hr_dotted: "점선",
          hr_dashed: "대시",
          table: "테이블",
          link: "링크",
          math: "수식",
          image: "이미지",
          video: "동영상",
          audio: "오디오",
          fullScreen: "전체 화면",
          showBlocks: "블록 보기",
          codeView: "HTML 편집",
          undo: "실행 취소",
          redo: "다시 실행",
          preview: "미리보기",
          print: "인쇄",
          tag_p: "본문",
          tag_div: "기본 (DIV)",
          tag_h: "제목",
          tag_blockquote: "인용문",
          tag_pre: "코드",
          template: "템플릿",
          lineHeight: "줄 높이",
          paragraphStyle: "문단 스타일",
          textStyle: "글자 스타일",
          imageGallery: "이미지 갤러리",
          dir_ltr: "왼쪽에서 오른쪽",
          dir_rtl: "오른쪽에서 왼쪽",
          mention: "멘션"
        },
        dialogBox: {
          linkBox: {
            title: "링크 삽입",
            url: "인터넷 주소",
            text: "화면 텍스트",
            newWindowCheck: "새창으로 열기",
            downloadLinkCheck: "다운로드 링크",
            bookmark: "북마크"
          },
          mathBox: {
            title: "수식",
            inputLabel: "수학적 표기법",
            fontSizeLabel: "글자 크기",
            previewLabel: "미리보기"
          },
          imageBox: {
            title: "이미지 삽입",
            file: "파일 선택",
            url: "이미지 주소",
            altText: "대체 문자열"
          },
          videoBox: {
            title: "동영상 삽입",
            file: "파일 선택",
            url: "미디어 임베드 주소, 유튜브/비메오"
          },
          audioBox: {
            title: "오디오 삽입",
            file: "파일 선택",
            url: "오디오 파일 주소"
          },
          browser: {
            tags: "태그",
            search: "검색"
          },
          caption: "설명 넣기",
          close: "닫기",
          submitButton: "확인",
          revertButton: "되돌리기",
          proportion: "비율 맞춤",
          basic: "기본",
          left: "왼쪽",
          right: "오른쪽",
          center: "가운데",
          width: "가로",
          height: "세로",
          size: "크기",
          ratio: "비율"
        },
        controller: {
          edit: "편집",
          unlink: "링크 해제",
          remove: "삭제",
          insertRowAbove: "위에 행 삽입",
          insertRowBelow: "아래에 행 삽입",
          deleteRow: "행 삭제",
          insertColumnBefore: "왼쪽에 열 삽입",
          insertColumnAfter: "오른쪽에 열 삽입",
          deleteColumn: "열 삭제",
          fixedColumnWidth: "고정 된 열 너비",
          resize100: "100% 크기",
          resize75: "75% 크기",
          resize50: "50% 크기",
          resize25: "25% 크기",
          autoSize: "자동 크기",
          mirrorHorizontal: "좌우 반전",
          mirrorVertical: "상하 반전",
          rotateLeft: "왼쪽으로 회전",
          rotateRight: "오른쪽으로 회전",
          maxSize: "최대화",
          minSize: "최소화",
          tableHeader: "테이블 제목",
          mergeCells: "셀 병합",
          splitCells: "셀 분할",
          HorizontalSplit: "가로 분할",
          VerticalSplit: "세로 분할"
        },
        menu: {
          spaced: "글자 간격",
          bordered: "경계선",
          neon: "네온",
          translucent: "반투명",
          shadow: "그림자",
          code: "코드"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ko", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(bi)), bi.exports;
}
var ma = /* @__PURE__ */ ha();
const Pn = /* @__PURE__ */ Se(ma);
var yi = { exports: {} }, ga = yi.exports, Yl;
function va() {
  return Yl || (Yl = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : ga, function(t, l) {
      const o = {
        code: "lv",
        toolbar: {
          default: "Noklusējuma",
          save: "Saglabāt",
          font: "Fonts",
          formats: "Formāti",
          fontSize: "Fonta lielums",
          bold: "Treknraksts",
          underline: "Pasvītrot",
          italic: "Slīpraksts",
          strike: "Pārsvītrojums",
          subscript: "Apakšraksts",
          superscript: "Augšraksts",
          removeFormat: "Noņemt formātu",
          fontColor: "Fonta krāsa",
          hiliteColor: "Teksta iezīmēšanas krāsa",
          indent: "Palielināt atkāpi",
          outdent: "Samazināt atkāpi",
          align: "Izlīdzināt",
          alignLeft: "Līdzināt pa kreisi",
          alignRight: "Līdzināt pa labi",
          alignCenter: "Centrēt",
          alignJustify: "Taisnot",
          list: "Saraksts",
          orderList: "Numerācija",
          unorderList: "Aizzimes",
          horizontalRule: "Horizontāla līnija",
          hr_solid: "Ciets",
          hr_dotted: "Punktiņš",
          hr_dashed: "Braša",
          table: "Tabula",
          link: "Saite",
          math: "Matemātika",
          image: "Attēls",
          video: "Video",
          audio: "Audio",
          fullScreen: "Pilnekrāna režīms",
          showBlocks: "Parādit blokus",
          codeView: "Koda skats",
          undo: "Atsaukt",
          redo: "Atkārtot",
          preview: "Priekšskatījums",
          print: "Drukāt",
          tag_p: "Paragrāfs",
          tag_div: "Normāli (DIV)",
          tag_h: "Galvene",
          tag_blockquote: "Citāts",
          tag_pre: "Kods",
          template: "Veidne",
          lineHeight: "Līnijas augstums",
          paragraphStyle: "Paragrāfa stils",
          textStyle: "Teksta stils",
          imageGallery: "Attēlu galerija",
          dir_ltr: "No kreisās uz labo",
          dir_rtl: "No labās uz kreiso",
          mention: "Pieminēt"
        },
        dialogBox: {
          linkBox: {
            title: "Ievietot saiti",
            url: "Saites URL",
            text: "Parādāmais teksts",
            newWindowCheck: "Atvērt jaunā logā",
            downloadLinkCheck: "Lejupielādes saite",
            bookmark: "Grāmatzīme"
          },
          mathBox: {
            title: "Matemātika",
            inputLabel: "Matemātiskā notācija",
            fontSizeLabel: "Fonta lielums",
            previewLabel: "Priekšskatījums"
          },
          imageBox: {
            title: "Ievietot attēlu",
            file: "Izvēlieties no failiem",
            url: "Attēla URL",
            altText: "Alternatīvs teksts"
          },
          videoBox: {
            title: "Ievietot video",
            file: "Izvēlieties no failiem",
            url: "Multivides iegulšanas URL, YouTube/Vimeo"
          },
          audioBox: {
            title: "Ievietot audio",
            file: "Izvēlieties no failiem",
            url: "Audio URL"
          },
          browser: {
            tags: "Tagi",
            search: "Meklēt"
          },
          caption: "Ievietot aprakstu",
          close: "Aizvērt",
          submitButton: "Iesniegt",
          revertButton: "Atjaunot",
          proportion: "Ierobežo proporcijas",
          basic: "Nav iesaiņojuma",
          left: "Pa kreisi",
          right: "Labajā pusē",
          center: "Centrs",
          width: "Platums",
          height: "Augstums",
          size: "Izmērs",
          ratio: "Attiecība"
        },
        controller: {
          edit: "Rediģēt",
          unlink: "Atsaistīt",
          remove: "Noņemt",
          insertRowAbove: "Ievietot rindu virs",
          insertRowBelow: "Ievietot rindu zemāk",
          deleteRow: "Dzēst rindu",
          insertColumnBefore: "Ievietot kolonnu pirms",
          insertColumnAfter: "Ievietot kolonnu aiz",
          deleteColumn: "Dzēst kolonnu",
          fixColumnWidth: "Fiksēts kolonnas platums",
          resize100: "Mainīt izmēru 100%",
          resize75: "Mainīt izmēru 75%",
          resize50: "Mainīt izmēru 50%",
          resize25: "Mainīt izmēru 25%",
          autoSize: "Automātiskais izmērs",
          mirrorHorizontal: "Spogulis, horizontāls",
          mirrorVertical: "Spogulis, vertikāls",
          rotateLeft: "Pagriezt pa kreisi",
          rotateRight: "Pagriezt pa labi",
          maxSize: "Maksimālais izmērs",
          minSize: "Minimālais izmērs",
          tableHeader: "Tabulas galvene",
          mergeCells: "Apvienot šūnas",
          splitCells: "Sadalīt šūnas",
          HorizontalSplit: "Horizontāls sadalījums",
          VerticalSplit: "Vertikāls sadalījums"
        },
        menu: {
          spaced: "Ar atstarpi",
          bordered: "Robežojās",
          neon: "Neona",
          translucent: "Caurspīdīgs",
          shadow: "Ēna",
          code: "Kods"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "lv", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(yi)), yi.exports;
}
var ba = /* @__PURE__ */ va();
const Wn = /* @__PURE__ */ Se(ba);
var _i = { exports: {} }, ya = _i.exports, Xl;
function _a() {
  return Xl || (Xl = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : ya, function(t, l) {
      const o = {
        code: "nl",
        toolbar: {
          default: "Standaard",
          save: "Opslaan",
          font: "Lettertype",
          formats: "Formaten",
          fontSize: "Lettergrootte",
          bold: "Vetgedrukt",
          underline: "Onderstrepen",
          italic: "Cursief",
          strike: "Doorstrepen",
          subscript: "Subscript",
          superscript: "Superscript",
          removeFormat: "Opmaak verwijderen",
          fontColor: "Tekstkleur",
          hiliteColor: "Tekst markeren",
          indent: "Inspringen",
          outdent: "Inspringen ongedaan maken",
          align: "Uitlijnen",
          alignLeft: "Links uitlijnen",
          alignRight: "Rechts uitlijnen",
          alignCenter: "In het midden uitlijnen",
          alignJustify: "Uitvullen",
          list: "Lijst",
          orderList: "Geordende lijst",
          unorderList: "Ongeordende lijst",
          horizontalRule: "Horizontale regel",
          hr_solid: "Standaard",
          hr_dotted: "Gestippeld",
          hr_dashed: "Gestreept",
          table: "Tabel",
          link: "Link",
          math: "Wiskunde",
          image: "Afbeelding",
          video: "Video",
          audio: "Audio",
          fullScreen: "Volledig scherm",
          showBlocks: "Blokken tonen",
          codeView: "Broncode weergeven",
          undo: "Ongedaan maken",
          redo: "Ongedaan maken herstellen",
          preview: "Voorbeeldweergave",
          print: "Printen",
          tag_p: "Alinea",
          tag_div: "Normaal (div)",
          tag_h: "Kop",
          tag_blockquote: "Citaat",
          tag_pre: "Code",
          template: "Sjabloon",
          lineHeight: "Lijnhoogte",
          paragraphStyle: "Alineastijl",
          textStyle: "Tekststijl",
          imageGallery: "Galerij",
          dir_ltr: "Van links naar rechts",
          dir_rtl: "Rechts naar links",
          mention: "Vermelding"
        },
        dialogBox: {
          linkBox: {
            title: "Link invoegen",
            url: "URL",
            text: "Tekst van de link",
            newWindowCheck: "In een nieuw tabblad openen",
            downloadLinkCheck: "Downloadlink",
            bookmark: "Bladwijzer"
          },
          mathBox: {
            title: "Wiskunde",
            inputLabel: "Wiskundige notatie",
            fontSizeLabel: "Lettergrootte",
            previewLabel: "Voorbeeld"
          },
          imageBox: {
            title: "Afbeelding invoegen",
            file: "Selecteer een bestand van uw apparaat",
            url: "URL",
            altText: "Alt-tekst"
          },
          videoBox: {
            title: "Video invoegen",
            file: "Selecteer een bestand van uw apparaat",
            url: "Embedded URL (YouTube/Vimeo)"
          },
          audioBox: {
            title: "Audio invoegen",
            file: "Selecteer een bestand van uw apparaat",
            url: "URL"
          },
          browser: {
            tags: "Tags",
            search: "Zoeken"
          },
          caption: "Omschrijving toevoegen",
          close: "Sluiten",
          submitButton: "Toepassen",
          revertButton: "Standaardwaarden herstellen",
          proportion: "Verhouding behouden",
          basic: "Standaard",
          left: "Links",
          right: "Rechts",
          center: "Midden",
          width: "Breedte",
          height: "Hoogte",
          size: "Grootte",
          ratio: "Verhouding"
        },
        controller: {
          edit: "Bewerken",
          unlink: "Ontkoppelen",
          remove: "Verwijderen",
          insertRowAbove: "Rij hierboven invoegen",
          insertRowBelow: "Rij hieronder invoegen",
          deleteRow: "Rij verwijderen",
          insertColumnBefore: "Kolom links invoegen",
          insertColumnAfter: "Kolom rechts invoegen",
          deleteColumn: "Kolom verwijderen",
          fixedColumnWidth: "Vaste kolombreedte",
          resize100: "Formaat wijzigen: 100%",
          resize75: "Formaat wijzigen: 75%",
          resize50: "Formaat wijzigen: 50%",
          resize25: "Formaat wijzigen: 25%",
          autoSize: "Automatische grootte",
          mirrorHorizontal: "Horizontaal spiegelen",
          mirrorVertical: "Verticaal spiegelen",
          rotateLeft: "Naar links draaien",
          rotateRight: "Naar rechts draaien",
          maxSize: "Maximale grootte",
          minSize: "Minimale grootte",
          tableHeader: "Tabelkoppen",
          mergeCells: "Cellen samenvoegen",
          splitCells: "Cellen splitsen",
          HorizontalSplit: "Horizontaal splitsen",
          VerticalSplit: "Verticaal splitsen"
        },
        menu: {
          spaced: "Uit elkaar",
          bordered: "Omlijnd",
          neon: "Neon",
          translucent: "Doorschijnend",
          shadow: "Schaduw",
          code: "Code"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "nl", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(_i)), _i.exports;
}
var Ca = /* @__PURE__ */ _a();
const $n = /* @__PURE__ */ Se(Ca);
var Ci = { exports: {} }, wa = Ci.exports, Jl;
function ka() {
  return Jl || (Jl = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : wa, function(t, l) {
      const o = {
        code: "pl",
        toolbar: {
          default: "Domyślne",
          save: "Zapisz",
          font: "Czcionka",
          formats: "Formaty",
          fontSize: "Rozmiar",
          bold: "Pogrubienie",
          underline: "Podkreślenie",
          italic: "Kursywa",
          strike: "Przekreślenie",
          subscript: "Indeks dolny",
          superscript: "Indeks górny",
          removeFormat: "Wyczyść formatowanie",
          fontColor: "Kolor tekstu",
          hiliteColor: "Kolor tła tekstu",
          indent: "Zwiększ wcięcie",
          outdent: "Zmniejsz wcięcie",
          align: "Wyrównaj",
          alignLeft: "Do lewej",
          alignRight: "Do prawej",
          alignCenter: "Do środka",
          alignJustify: "Wyjustuj",
          list: "Lista",
          orderList: "Lista numerowana",
          unorderList: "Lista wypunktowana",
          horizontalRule: "Pozioma linia",
          hr_solid: "Ciągła",
          hr_dotted: "Kropkowana",
          hr_dashed: "Przerywana",
          table: "Tabela",
          link: "Odnośnik",
          math: "Matematyczne",
          image: "Obraz",
          video: "Wideo",
          audio: "Audio",
          fullScreen: "Pełny ekran",
          showBlocks: "Pokaż bloki",
          codeView: "Widok kodu",
          undo: "Cofnij",
          redo: "Ponów",
          preview: "Podgląd",
          print: "Drukuj",
          tag_p: "Akapit",
          tag_div: "Blok (DIV)",
          tag_h: "Nagłówek H",
          tag_blockquote: "Cytat",
          tag_pre: "Kod",
          template: "Szablon",
          lineHeight: "Odstęp między wierszami",
          paragraphStyle: "Styl akapitu",
          textStyle: "Styl tekstu",
          imageGallery: "Galeria obrazów",
          dir_ltr: "Od lewej do prawej",
          dir_rtl: "Od prawej do lewej",
          mention: "Wzmianka"
        },
        dialogBox: {
          linkBox: {
            title: "Wstaw odnośnik",
            url: "Adres URL",
            text: "Tekst do wyświetlenia",
            newWindowCheck: "Otwórz w nowym oknie",
            downloadLinkCheck: "Link do pobrania",
            bookmark: "Zakładka"
          },
          mathBox: {
            title: "Matematyczne",
            inputLabel: "Zapis matematyczny",
            fontSizeLabel: "Rozmiar czcionki",
            previewLabel: "Podgląd"
          },
          imageBox: {
            title: "Wstaw obraz",
            file: "Wybierz plik",
            url: "Adres URL obrazka",
            altText: "Tekst alternatywny"
          },
          videoBox: {
            title: "Wstaw wideo",
            file: "Wybierz plik",
            url: "Adres URL video, np. YouTube/Vimeo"
          },
          audioBox: {
            title: "Wstaw audio",
            file: "Wybierz plik",
            url: "Adres URL audio"
          },
          browser: {
            tags: "Tagi",
            search: "Szukaj"
          },
          caption: "Wstaw opis",
          close: "Zamknij",
          submitButton: "Zatwierdź",
          revertButton: "Cofnij zmiany",
          proportion: "Ogranicz proporcje",
          basic: "Bez wyrównania",
          left: "Do lewej",
          right: "Do prawej",
          center: "Do środka",
          width: "Szerokość",
          height: "Wysokość",
          size: "Rozmiar",
          ratio: "Proporcje"
        },
        controller: {
          edit: "Edycja",
          unlink: "Usuń odnośnik",
          remove: "Usuń",
          insertRowAbove: "Wstaw wiersz powyżej",
          insertRowBelow: "Wstaw wiersz poniżej",
          deleteRow: "Usuń wiersz",
          insertColumnBefore: "Wstaw kolumnę z lewej",
          insertColumnAfter: "Wstaw kolumnę z prawej",
          deleteColumn: "Usuń kolumnę",
          fixedColumnWidth: "Stała szerokość kolumny",
          resize100: "Zmień rozmiar - 100%",
          resize75: "Zmień rozmiar - 75%",
          resize50: "Zmień rozmiar - 50%",
          resize25: "Zmień rozmiar - 25%",
          autoSize: "Rozmiar automatyczny",
          mirrorHorizontal: "Odbicie lustrzane w poziomie",
          mirrorVertical: "Odbicie lustrzane w pionie",
          rotateLeft: "Obróć w lewo",
          rotateRight: "Obróć w prawo",
          maxSize: "Maksymalny rozmiar",
          minSize: "Minimalny rozmiar",
          tableHeader: "Nagłówek tabeli",
          mergeCells: "Scal komórki",
          splitCells: "Podziel komórki",
          HorizontalSplit: "Podział poziomy",
          VerticalSplit: "Podział pionowy"
        },
        menu: {
          spaced: "Rozstawiony",
          bordered: "Z obwódką",
          neon: "Neon",
          translucent: "Półprzezroczysty",
          shadow: "Cień",
          code: "Kod"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "pl", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(Ci)), Ci.exports;
}
var xa = /* @__PURE__ */ ka();
const Zn = /* @__PURE__ */ Se(xa);
var wi = { exports: {} }, Sa = wi.exports, Ql;
function La() {
  return Ql || (Ql = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Sa, function(t, l) {
      const o = {
        code: "pt_br",
        toolbar: {
          default: "Padrão",
          save: "Salvar",
          font: "Fonte",
          formats: "Formatos",
          fontSize: "Tamanho",
          bold: "Negrito",
          underline: "Sublinhado",
          italic: "Itálico",
          strike: "Riscado",
          subscript: "Subescrito",
          superscript: "Sobrescrito",
          removeFormat: "Remover Formatação",
          fontColor: "Cor da Fonte",
          hiliteColor: "Cor de destaque",
          indent: "Recuo",
          outdent: "Avançar",
          align: "Alinhar",
          alignLeft: "Alinhar à esquerda",
          alignRight: "Alinhar à direita",
          alignCenter: "Centralizar",
          alignJustify: "Justificar",
          list: "Lista",
          orderList: "Lista ordenada",
          unorderList: "Lista desordenada",
          horizontalRule: "Linha horizontal",
          hr_solid: "sólida",
          hr_dotted: "pontilhada",
          hr_dashed: "tracejada",
          table: "Tabela",
          link: "Link",
          math: "Matemática",
          image: "Imagem",
          video: "Vídeo",
          audio: "Áudio",
          fullScreen: "Tela cheia",
          showBlocks: "Mostrar blocos",
          codeView: "Mostrar códigos",
          undo: "Voltar",
          redo: "Refazer",
          preview: "Prever",
          print: "Imprimir",
          tag_p: "Paragráfo",
          tag_div: "(DIV) Normal",
          tag_h: "Cabeçalho",
          tag_blockquote: "Citar",
          tag_pre: "Código",
          template: "Modelo",
          lineHeight: "Altura da linha",
          paragraphStyle: "Estilo do parágrafo",
          textStyle: "Estilo do texto",
          imageGallery: "Galeria de imagens",
          dir_ltr: "Esquerda para direita",
          dir_rtl: "Direita para esquerda",
          mention: "Menção"
        },
        dialogBox: {
          linkBox: {
            title: "Inserir link",
            url: "URL para link",
            text: "Texto a mostrar",
            newWindowCheck: "Abrir em nova guia",
            downloadLinkCheck: "Link para Download",
            bookmark: "marcar páginas"
          },
          mathBox: {
            title: "Matemática",
            inputLabel: "Notação matemática",
            fontSizeLabel: "Tamanho",
            previewLabel: "Prever"
          },
          imageBox: {
            title: "Inserir imagens",
            file: "Selecionar arquivos",
            url: "URL da imagem",
            altText: "Texto alternativo"
          },
          videoBox: {
            title: "Inserir vídeo",
            file: "Selecionar arquivos",
            url: "URL do YouTube/Vimeo"
          },
          audioBox: {
            title: "Inserir áudio",
            file: "Selecionar arquivos",
            url: "URL da áudio"
          },
          browser: {
            tags: "Tag",
            search: "Procurar"
          },
          caption: "Inserir descrição",
          close: "Fechar",
          submitButton: "Enviar",
          revertButton: "Reverter",
          proportion: "Restringir proporções",
          basic: "Básico",
          left: "Esquerda",
          right: "Direita",
          center: "Centro",
          width: "Largura",
          height: "Altura",
          size: "Tamanho",
          ratio: "Proporções"
        },
        controller: {
          edit: "Editar",
          unlink: "Remover link",
          remove: "Remover",
          insertRowAbove: "Inserir linha acima",
          insertRowBelow: "Inserir linha abaixo",
          deleteRow: "Deletar linha",
          insertColumnBefore: "Inserir coluna antes",
          insertColumnAfter: "Inserir coluna depois",
          deleteColumn: "Deletar coluna",
          fixedColumnWidth: "Largura fixa da coluna",
          resize100: "Redimensionar para 100%",
          resize75: "Redimensionar para 75%",
          resize50: "Redimensionar para 50%",
          resize25: "Redimensionar para 25%",
          autoSize: "Tamanho automático",
          mirrorHorizontal: "Espelho, Horizontal",
          mirrorVertical: "Espelho, Vertical",
          rotateLeft: "Girar para esquerda",
          rotateRight: "Girar para direita",
          maxSize: "Tam máx",
          minSize: "Tam mín",
          tableHeader: "Cabeçalho da tabela",
          mergeCells: "Mesclar células",
          splitCells: "Dividir células",
          HorizontalSplit: "Divisão horizontal",
          VerticalSplit: "Divisão vertical"
        },
        menu: {
          spaced: "Espaçado",
          bordered: "Com borda",
          neon: "Neon",
          translucent: "Translúcido",
          shadow: "Sombreado",
          code: "Código"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "pt_br", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(wi)), wi.exports;
}
var Ea = /* @__PURE__ */ La();
const qn = /* @__PURE__ */ Se(Ea);
var ki = { exports: {} }, Ta = ki.exports, en;
function Ba() {
  return en || (en = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Ta, function(t, l) {
      const o = {
        code: "ro",
        toolbar: {
          default: "Default",
          save: "Salvează",
          font: "Font",
          formats: "Format",
          fontSize: "Dimensiune",
          bold: "Îngroșat",
          underline: "Subliniat",
          italic: "Înclinat",
          strike: "Tăiat",
          subscript: "Subscript",
          superscript: "Superscript",
          removeFormat: "Șterge formatare",
          fontColor: "Culoare font",
          hiliteColor: "Culoare de evidențiere",
          indent: "Indentează",
          outdent: "Fără indentare",
          align: "Aliniere",
          alignLeft: "Aliniere la stânga",
          alignRight: "Aliniere la dreapta",
          alignCenter: "Aliniere la centru",
          alignJustify: "Aliniere stânga - dreapta",
          list: "Listă",
          orderList: "Listă ordonată",
          unorderList: "Listă neordonată",
          horizontalRule: "Linie orizontală",
          hr_solid: "Solid",
          hr_dotted: "Punctat",
          hr_dashed: "Punctate",
          table: "Tabel",
          link: "Link",
          math: "Matematică",
          image: "Imagine",
          video: "Video",
          audio: "Audio",
          fullScreen: "Tot ecranul",
          showBlocks: "Arată blocuri",
          codeView: "Vizualizare cod",
          undo: "Anulează",
          redo: "Refă",
          preview: "Previzualizare",
          print: "printează",
          tag_p: "Paragraf",
          tag_div: "Normal (DIV)",
          tag_h: "Antet",
          tag_blockquote: "Quote",
          tag_pre: "Citat",
          template: "Template",
          lineHeight: "Înălțime linie",
          paragraphStyle: "Stil paragraf",
          textStyle: "Stil text",
          imageGallery: "Galerie de imagini",
          dir_ltr: "De la stânga la dreapta",
          dir_rtl: "De la dreapta la stanga",
          mention: "Mentiune"
        },
        dialogBox: {
          linkBox: {
            title: "Inserează Link",
            url: "Adresă link",
            text: "Text de afișat",
            newWindowCheck: "Deschide în fereastră nouă",
            downloadLinkCheck: "Link de descărcare",
            bookmark: "Marcaj"
          },
          mathBox: {
            title: "Matematică",
            inputLabel: "Notație matematică",
            fontSizeLabel: "Dimensiune font",
            previewLabel: "Previzualizare"
          },
          imageBox: {
            title: "Inserează imagine",
            file: "Selectează",
            url: "URL imagine",
            altText: "text alternativ"
          },
          videoBox: {
            title: "Inserează video",
            file: "Selectează",
            url: "Include URL, youtube/vimeo"
          },
          audioBox: {
            title: "Inserează Audio",
            file: "Selectează",
            url: "URL Audio"
          },
          browser: {
            tags: "Etichete",
            search: "Căutareim"
          },
          caption: "Inserează descriere",
          close: "Închide",
          submitButton: "Salvează",
          revertButton: "Revenire",
          proportion: "Constrânge proporțiile",
          basic: "De bază",
          left: "Stânga",
          right: "Dreapta",
          center: "Centru",
          width: "Lățime",
          height: "Înălțime",
          size: "Dimensiune",
          ratio: "Ratie"
        },
        controller: {
          edit: "Editează",
          unlink: "Scoate link",
          remove: "Elimină",
          insertRowAbove: "Inserează rând deasupra",
          insertRowBelow: "Inserează rând dedesupt",
          deleteRow: "Șterge linie",
          insertColumnBefore: "Inserează coloană înainte",
          insertColumnAfter: "Inserează coloană după",
          deleteColumn: "Șterge coloană",
          fixedColumnWidth: "Lățime fixă coloană",
          resize100: "Redimensionare 100%",
          resize75: "Redimensionare 75%",
          resize50: "Redimensionare 50%",
          resize25: "Redimensionare 25%",
          autoSize: "Dimensiune automată",
          mirrorHorizontal: "Oglindă, orizontal",
          mirrorVertical: "Oglindă, vertical",
          rotateLeft: "Rotește la stânga",
          rotateRight: "Rotește la dreapta",
          maxSize: "Dimensiune maximă",
          minSize: "Dimensiune minimă",
          tableHeader: "Antet tabel",
          mergeCells: "Îmbină celule",
          splitCells: "Divizează celule",
          HorizontalSplit: "Despicare orizontală",
          VerticalSplit: "Despicare verticală"
        },
        menu: {
          spaced: "Spațiat",
          bordered: "Mărginit",
          neon: "Neon",
          translucent: "Translucent",
          shadow: "Umbră",
          code: "Citat"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ro", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(ki)), ki.exports;
}
var za = /* @__PURE__ */ Ba();
const jn = /* @__PURE__ */ Se(za);
var xi = { exports: {} }, Na = xi.exports, tn;
function Aa() {
  return tn || (tn = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Na, function(t, l) {
      const o = {
        code: "ru",
        toolbar: {
          default: "По умолчанию",
          save: "Сохранить",
          font: "Шрифт",
          formats: "Стиль абзаца",
          fontSize: "Размер шрифта",
          bold: "Полужирный",
          underline: "Подчёркнутый",
          italic: "Курсив",
          strike: "Зачеркнутый",
          subscript: "Нижний индекс",
          superscript: "Верхний индекс",
          removeFormat: "Очистить форматирование",
          fontColor: "Цвет текста",
          hiliteColor: "Цвет фона",
          indent: "Увеличить отступ",
          outdent: "Уменьшить отступ",
          align: "Выравнивание",
          alignLeft: "Слева",
          alignRight: "Справа",
          alignCenter: "По центру",
          alignJustify: "По ширине",
          list: "Списки",
          orderList: "Нумерованный",
          unorderList: "Маркированный",
          horizontalRule: "Горизонтальная линия",
          hr_solid: "Сплошная",
          hr_dotted: "Пунктир",
          hr_dashed: "Штриховая",
          table: "Таблица",
          link: "Ссылка",
          math: "математический",
          image: "Изображение",
          video: "Видео",
          audio: "Аудио",
          fullScreen: "Полный экран",
          showBlocks: "Блочный вид",
          codeView: "Редактировать HTML",
          undo: "Отменить",
          redo: "Вернуть",
          preview: "Предварительный просмотр",
          print: "Печать",
          tag_p: "Текст",
          tag_div: "Базовый",
          tag_h: "Заголовок",
          tag_blockquote: "Цитата",
          tag_pre: "Код",
          template: "Шаблон",
          lineHeight: "Высота линии",
          paragraphStyle: "Стиль абзаца",
          textStyle: "Стиль текста",
          imageGallery: "Галерея",
          dir_ltr: "Слева направо",
          dir_rtl: "Справа налево",
          mention: "Упоминание"
        },
        dialogBox: {
          linkBox: {
            title: "Вставить ссылку",
            url: "Ссылка",
            text: "Текст",
            newWindowCheck: "Открывать в новом окне",
            downloadLinkCheck: "Ссылка для скачивания",
            bookmark: "Закладка"
          },
          mathBox: {
            title: "математический",
            inputLabel: "Математическая запись",
            fontSizeLabel: "Кегль",
            previewLabel: "Предварительный просмотр"
          },
          imageBox: {
            title: "Вставить изображение",
            file: "Выберите файл",
            url: "Адрес изображения",
            altText: "Текстовое описание изображения"
          },
          videoBox: {
            title: "Вставить видео",
            file: "Выберите файл",
            url: "Ссылка на видео, Youtube,Vimeo"
          },
          audioBox: {
            title: "Вставить аудио",
            file: "Выберите файл",
            url: "Адрес аудио"
          },
          browser: {
            tags: "Теги",
            search: "Поиск"
          },
          caption: "Добавить подпись",
          close: "Закрыть",
          submitButton: "Подтвердить",
          revertButton: "Сбросить",
          proportion: "Сохранить пропорции",
          basic: "Без обтекания",
          left: "Слева",
          right: "Справа",
          center: "По центру",
          width: "Ширина",
          height: "Высота",
          size: "Размер",
          ratio: "Соотношение"
        },
        controller: {
          edit: "Изменить",
          unlink: "Убрать ссылку",
          remove: "Удалить",
          insertRowAbove: "Вставить строку выше",
          insertRowBelow: "Вставить строку ниже",
          deleteRow: "Удалить строку",
          insertColumnBefore: "Вставить столбец слева",
          insertColumnAfter: "Вставить столбец справа",
          deleteColumn: "Удалить столбец",
          fixedColumnWidth: "Фиксированная ширина столбца",
          resize100: "Размер 100%",
          resize75: "Размер 75%",
          resize50: "Размер 50%",
          resize25: "Размер 25%",
          autoSize: "Авто размер",
          mirrorHorizontal: "Отразить по горизонтали",
          mirrorVertical: "Отразить по вертикали",
          rotateLeft: "Повернуть против часовой стрелки",
          rotateRight: "Повернуть по часовой стрелке",
          maxSize: "Ширина по размеру страницы",
          minSize: "Ширина по содержимому",
          tableHeader: "Строка заголовков",
          mergeCells: "Объединить ячейки",
          splitCells: "Разделить ячейку",
          HorizontalSplit: "Разделить горизонтально",
          VerticalSplit: "Разделить вертикально"
        },
        menu: {
          spaced: "интервал",
          bordered: "Граничная Линия",
          neon: "неон",
          translucent: "полупрозрачный",
          shadow: "Тень",
          code: "Код"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ru", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(xi)), xi.exports;
}
var Ra = /* @__PURE__ */ Aa();
const Gn = /* @__PURE__ */ Se(Ra);
var Si = { exports: {} }, Ia = Si.exports, ln;
function Va() {
  return ln || (ln = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Ia, function(t, l) {
      const o = {
        code: "se",
        toolbar: {
          default: "Default",
          save: "Spara",
          font: "Typsnitt",
          formats: "Format",
          fontSize: "Textstorlek",
          bold: "Fet",
          underline: "Understruket",
          italic: "Kursiv",
          strike: "Överstruket",
          subscript: "Sänkt skrift",
          superscript: "Höjd skrift",
          removeFormat: "Ta bort formattering",
          fontColor: "Textfärg",
          hiliteColor: "Bakgrundsfärg",
          indent: "Minska indrag",
          outdent: "Öka indrag",
          align: "Justering",
          alignLeft: "Vänsterjustering",
          alignRight: "Högerjustering",
          alignCenter: "Mittenjusteirng",
          alignJustify: "Justera indrag",
          list: "Listor",
          orderList: "Numrerad lista",
          unorderList: "Oordnad lista",
          horizontalRule: "Horisontell linje",
          hr_solid: "Solid",
          hr_dotted: "Punkter",
          hr_dashed: "Prickad",
          table: "Tabell",
          link: "Länk",
          math: "Math",
          image: "Bild",
          video: "Video",
          audio: "Ljud",
          fullScreen: "Helskärm",
          showBlocks: "Visa block",
          codeView: "Visa koder",
          undo: "Ångra",
          redo: "Gör om",
          preview: "Preview",
          print: "Print",
          tag_p: "Paragraf",
          tag_div: "Normal (DIV)",
          tag_h: "Rubrik",
          tag_blockquote: "Citer",
          tag_pre: "Kod",
          template: "Mall",
          lineHeight: "Linjehöjd",
          paragraphStyle: "Stil på stycke",
          textStyle: "Textstil",
          imageGallery: "Bildgalleri",
          dir_ltr: "Vänster till höger",
          dir_rtl: "Höger till vänster",
          mention: "Namn"
        },
        dialogBox: {
          linkBox: {
            title: "Lägg till länk",
            url: "URL till länk",
            text: "Länktext",
            newWindowCheck: "Öppna i nytt fönster",
            downloadLinkCheck: "Nedladdningslänk",
            bookmark: "Bokmärke"
          },
          mathBox: {
            title: "Math",
            inputLabel: "Matematisk notation",
            fontSizeLabel: "Textstorlek",
            previewLabel: "Preview"
          },
          imageBox: {
            title: "Lägg till bild",
            file: "Lägg till från fil",
            url: "Lägg till från URL",
            altText: "Alternativ text"
          },
          videoBox: {
            title: "Lägg till video",
            file: "Lägg till från fil",
            url: "Bädda in video / YouTube,Vimeo"
          },
          audioBox: {
            title: "Lägg till ljud",
            file: "Lägg till från fil",
            url: "Lägg till från URL"
          },
          browser: {
            tags: "Tags",
            search: "Sök"
          },
          caption: "Lägg till beskrivning",
          close: "Stäng",
          submitButton: "Skicka",
          revertButton: "Återgå",
          proportion: "Spara proportioner",
          basic: "Basic",
          left: "Vänster",
          right: "Höger",
          center: "Center",
          width: "Bredd",
          height: "Höjd",
          size: "Storlek",
          ratio: "Förhållande"
        },
        controller: {
          edit: "Redigera",
          unlink: "Ta bort länk",
          remove: "Ta bort",
          insertRowAbove: "Lägg till rad över",
          insertRowBelow: "Lägg till rad under",
          deleteRow: "Ta bort rad",
          insertColumnBefore: "Lägg till kolumn före",
          insertColumnAfter: "Lägg till kolumn efter",
          deleteColumn: "Ta bort kolumner",
          fixedColumnWidth: "Fast kolumnbredd",
          resize100: "Förstora 100%",
          resize75: "Förstora 75%",
          resize50: "Förstora 50%",
          resize25: "Förstora 25%",
          autoSize: "Autostorlek",
          mirrorHorizontal: "Spegling, horisontell",
          mirrorVertical: "Spegling, vertikal",
          rotateLeft: "Rotera till vänster",
          rotateRight: "Rotera till höger",
          maxSize: "Maxstorlek",
          minSize: "Minsta storlek",
          tableHeader: "Rubrik tabell",
          mergeCells: "Sammanfoga celler (merge)",
          splitCells: "Separera celler",
          HorizontalSplit: "Separera horisontalt",
          VerticalSplit: "Separera vertikalt"
        },
        menu: {
          spaced: "Avstånd",
          bordered: "Avgränsningslinje",
          neon: "Neon",
          translucent: "Genomskinlig",
          shadow: "Skugga",
          code: "Kod"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "se", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(Si)), Si.exports;
}
var Da = /* @__PURE__ */ Va();
const Kn = /* @__PURE__ */ Se(Da);
var Li = { exports: {} }, Ma = Li.exports, nn;
function Ha() {
  return nn || (nn = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Ma, function(t, l) {
      const o = {
        code: "ua",
        toolbar: {
          default: "По замовчуванням",
          save: "Зберегти",
          font: "Шрифт",
          formats: "Стиль абзацу",
          fontSize: "Розмір шрифту",
          bold: "Жирний",
          underline: "Підкреслений",
          italic: "Курсив",
          strike: "Перекреслити",
          subscript: "Нижній індекс",
          superscript: "Верхній індекс",
          removeFormat: "Очистити форматування",
          fontColor: "Колір тексту",
          hiliteColor: "Колір виділення",
          indent: "Збільшити відступ",
          outdent: "Зменшити відступ",
          align: "Вирівнювання",
          alignLeft: "За лівим краєм",
          alignRight: "За правим краєм",
          alignCenter: "По центру",
          alignJustify: "За шириною",
          list: "Список",
          orderList: "Нумерований",
          unorderList: "Маркований",
          horizontalRule: "Горизонтальна лінія",
          hr_solid: "Суцільна",
          hr_dotted: "Пунктирна",
          hr_dashed: "Штрихова",
          table: "Таблиця",
          link: "Посилання",
          math: "Формула",
          image: "Зображення",
          video: "Відео",
          audio: "Аудіо",
          fullScreen: "Повний екран",
          showBlocks: "Показати блоки",
          codeView: "Редагувати як HTML",
          undo: "Скасувати",
          redo: "Виконати знову",
          preview: "Попередній перегляд",
          print: "Друк",
          tag_p: "Абзац",
          tag_div: "Базовий",
          tag_h: "Заголовок",
          tag_blockquote: "Цитата",
          tag_pre: "Код",
          template: "Шаблон",
          lineHeight: "Висота лінії",
          paragraphStyle: "Стиль абзацу",
          textStyle: "Стиль тексту",
          imageGallery: "Галерея",
          dir_ltr: "Зліва направо",
          dir_rtl: "Справа наліво",
          mention: "Згадати"
        },
        dialogBox: {
          linkBox: {
            title: "Вставити посилання",
            url: "Посилання",
            text: "Текст",
            newWindowCheck: "Відкривати в новому вікні",
            downloadLinkCheck: "Посилання для завантаження",
            bookmark: "Закладка"
          },
          mathBox: {
            title: "Формула",
            inputLabel: "Математична запис",
            fontSizeLabel: "Розмір шрифту",
            previewLabel: "Попередній перегляд"
          },
          imageBox: {
            title: "Вставити зображення",
            file: "Виберіть файл",
            url: "Посилання на зображення",
            altText: "Текстовий опис зображення"
          },
          videoBox: {
            title: "Вставити відео",
            file: "Виберіть файл",
            url: "Посилання на відео, Youtube, Vimeo"
          },
          audioBox: {
            title: "Вставити аудіо",
            file: "Виберіть файл",
            url: "Посилання на аудіо"
          },
          browser: {
            tags: "Теги",
            search: "Пошук"
          },
          caption: "Додати підпис",
          close: "Закрити",
          submitButton: "Підтвердити",
          revertButton: "Скинути",
          proportion: "Зберегти пропорції",
          basic: "Без обтікання",
          left: "Зліва",
          right: "Справа",
          center: "По центру",
          width: "Ширина",
          height: "Висота",
          size: "Розмір",
          ratio: "Співвідношення"
        },
        controller: {
          edit: "Змінити",
          unlink: "Прибрати посилання",
          remove: "Видалити",
          insertRowAbove: "Вставити рядок вище",
          insertRowBelow: "Вставити рядок нижче",
          deleteRow: "Видалити рядок",
          insertColumnBefore: "Вставити стовпець зліва",
          insertColumnAfter: "Вставити стовпець справа",
          deleteColumn: "Видалити стовпець",
          fixedColumnWidth: "Фіксована ширина стовпця",
          resize100: "Розмір 100%",
          resize75: "Розмір 75%",
          resize50: "Розмір 50%",
          resize25: "Розмір 25%",
          autoSize: "Авто розмір",
          mirrorHorizontal: "Відобразити по горизонталі",
          mirrorVertical: "Відобразити по вертикалі",
          rotateLeft: "Повернути проти годинникової стрілки",
          rotateRight: "Повернути за годинниковою стрілкою",
          maxSize: "Ширина за розміром сторінки",
          minSize: "Ширина за вмістом",
          tableHeader: "Заголовок таблиці",
          mergeCells: "Об'єднати клітинки",
          splitCells: "Розділити клітинку",
          HorizontalSplit: "Розділити горизонтально",
          VerticalSplit: "Розділити вертикально"
        },
        menu: {
          spaced: "Інтервал",
          bordered: "З лініями",
          neon: "Неон",
          translucent: "Напівпрозорий",
          shadow: "Тінь",
          code: "Код"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ua", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(Li)), Li.exports;
}
var Fa = /* @__PURE__ */ Ha();
const Yn = /* @__PURE__ */ Se(Fa);
var Ei = { exports: {} }, Oa = Ei.exports, on;
function Ua() {
  return on || (on = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Oa, function(t, l) {
      const o = {
        code: "ur",
        toolbar: {
          default: "طے شدہ",
          save: "محفوظ کریں",
          font: "فونٹ",
          formats: "فارمیٹس",
          fontSize: "سائز",
          bold: "بولڈ",
          underline: "انڈر لائن",
          italic: "ترچھا",
          strike: "لکیرہ کردہ",
          subscript: "ذیلی",
          superscript: "انتہائی",
          removeFormat: "فارمیٹ کو حذف دیں",
          fontColor: "لکھائی کا رنگ",
          hiliteColor: "نمایاں رنگ",
          indent: "حاشیہ",
          outdent: "ہاشیہ واپس",
          align: "رخ",
          alignLeft: "بائیں طرف",
          alignRight: "دائیں طرف",
          alignCenter: "مرکز میں طرف",
          alignJustify: "ہر طرف برابر",
          list: "فہرست",
          orderList: "ترتیب شدہ فہرست",
          unorderList: "غیر ترتیب شدہ فہرست",
          horizontalRule: "لکیر",
          hr_solid: "ٹھوس",
          hr_dotted: "نقطے دار",
          hr_dashed: "ڈیشڈ",
          table: "میز",
          link: "لنک",
          math: "ریاضی",
          image: "تصویر",
          video: "ویڈیو",
          audio: "آواز",
          fullScreen: "پوری اسکرین",
          showBlocks: "ڈبے دکھائیں",
          codeView: "کوڈ کا نظارہ",
          undo: "واپس کریں",
          redo: "دوبارہ کریں",
          preview: "پیشنظر",
          print: "پرنٹ کریں",
          tag_p: "پیراگراف",
          tag_div: "عام (div)",
          tag_h: "ہیڈر",
          tag_blockquote: "اقتباس",
          tag_pre: "کوڈ",
          template: "سانچہ",
          lineHeight: "لکیر کی اونچائی",
          paragraphStyle: "عبارت کا انداز",
          textStyle: "متن کا انداز",
          imageGallery: "تصویری نگارخانہ",
          dir_ltr: "بائیں سے دائیں",
          dir_rtl: "دائیں سے بائیں",
          mention: "تذکرہ"
        },
        dialogBox: {
          linkBox: {
            title: "لنک داخل کریں",
            url: "لنک کرنے کے لیے URL",
            text: "ظاہر کرنے کے لیے متن",
            newWindowCheck: "نئی ونڈو میں کھولیں",
            downloadLinkCheck: "ڈاؤن لوڈ لنک",
            bookmark: "بک مارک"
          },
          mathBox: {
            title: "ریاضی",
            inputLabel: "ریاضیاتی اشارے",
            fontSizeLabel: "حرف کا سائز",
            previewLabel: "پیش نظارہ"
          },
          imageBox: {
            title: "تصویر داخل کریں",
            file: "فائلوں سے منتخب کریں",
            url: "تصویری URL",
            altText: "متبادل متن"
          },
          videoBox: {
            title: "ویڈیو داخل کریں",
            file: "فائلوں سے منتخب کریں",
            url: "ذرائع ابلاغ کا یو آر ایل، یوٹیوب/ویمیو"
          },
          audioBox: {
            title: "آواز داخل کریں",
            file: "فائلوں سے منتخب کریں",
            url: "آواز URL"
          },
          browser: {
            tags: "ٹیگز",
            search: "تلاش کریں"
          },
          caption: "عنوان",
          close: "بند کریں",
          submitButton: "بھیجیں",
          revertButton: "واپس",
          proportion: "تناسب کو محدود کریں",
          basic: "بنیادی",
          left: "بائیں",
          right: "دائیں",
          center: "مرکز",
          width: "چوڑائی",
          height: "اونچائی",
          size: "حجم",
          ratio: "تناسب"
        },
        controller: {
          edit: "ترمیم",
          unlink: "لنک ختم کریں",
          remove: "حذف",
          insertRowAbove: "اوپر قطار شامل کریں",
          insertRowBelow: "نیچے قطار شامل کریں",
          deleteRow: "قطار کو حذف کریں",
          insertColumnBefore: "پہلے ستون شامل کریں",
          insertColumnAfter: "اس کے بعد ستون شامل کریں",
          deleteColumn: "ستون حذف کریں",
          fixedColumnWidth: "مقررہ ستون کی چوڑائی",
          resize100: "100% کا حجم تبدیل کریں",
          resize75: "75% کا حجم تبدیل کریں",
          resize50: "50% کا حجم تبدیل کریں",
          resize25: "25% کا حجم تبدیل کریں",
          autoSize: "ازخود حجم",
          mirrorHorizontal: "آئینہ، افقی",
          mirrorVertical: "آئینہ، عمودی",
          rotateLeft: "بائیں گھومو",
          rotateRight: "دائیں گھمائیں",
          maxSize: "زیادہ سے زیادہ سائز",
          minSize: "کم از کم سائز",
          tableHeader: "میز کی سرخی",
          mergeCells: "حجروں کو ضم کریں",
          splitCells: "حجروں کو علیدہ کرو",
          HorizontalSplit: "افقی تقسیم",
          VerticalSplit: "عمودی تقسیم"
        },
        menu: {
          spaced: "فاصلہ",
          bordered: "سرحدی",
          neon: "نیین",
          translucent: "پارباسی",
          shadow: "سایہ",
          code: "کوڈ"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ur", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(Ei)), Ei.exports;
}
var Pa = /* @__PURE__ */ Ua();
const Xn = /* @__PURE__ */ Se(Pa);
var Ti = { exports: {} }, Wa = Ti.exports, sn;
function $a() {
  return sn || (sn = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Wa, function(t, l) {
      const o = {
        code: "zh_cn",
        toolbar: {
          default: "默认",
          save: "保存",
          font: "字体",
          formats: "格式",
          fontSize: "字号",
          bold: "粗体",
          underline: "下划线",
          italic: "斜体",
          strike: "删除线",
          subscript: "下标",
          superscript: "上标",
          removeFormat: "清除格式",
          fontColor: "字体颜色",
          hiliteColor: "背景颜色",
          indent: "增加缩进",
          outdent: "减少缩进",
          align: "对齐方式",
          alignLeft: "左对齐",
          alignRight: "右对齐",
          alignCenter: "居中",
          alignJustify: "两端对齐",
          list: "列表",
          orderList: "有序列表",
          unorderList: "无序列表",
          horizontalRule: "水平线",
          hr_solid: "实线",
          hr_dotted: "点线",
          hr_dashed: "虚线",
          table: "表格",
          link: "超链接",
          math: "数学",
          image: "图片",
          video: "视频",
          audio: "音讯",
          fullScreen: "全屏",
          showBlocks: "显示块区域",
          codeView: "代码视图",
          undo: "撤消",
          redo: "恢复",
          preview: "预览",
          print: "打印",
          tag_p: "段落",
          tag_div: "正文 (DIV)",
          tag_h: "标题",
          tag_blockquote: "引用",
          tag_pre: "代码",
          template: "模板",
          lineHeight: "行高",
          paragraphStyle: "段落样式",
          textStyle: "文字样式",
          imageGallery: "图片库",
          dir_ltr: "左到右",
          dir_rtl: "右到左",
          mention: "提到"
        },
        dialogBox: {
          linkBox: {
            title: "插入超链接",
            url: "网址",
            text: "要显示的文字",
            newWindowCheck: "在新标签页中打开",
            downloadLinkCheck: "下载链接",
            bookmark: "书签"
          },
          mathBox: {
            title: "数学",
            inputLabel: "数学符号",
            fontSizeLabel: "字号",
            previewLabel: "预览"
          },
          imageBox: {
            title: "插入图片",
            file: "上传图片",
            url: "图片网址",
            altText: "替换文字"
          },
          videoBox: {
            title: "插入视频",
            file: "上传图片",
            url: "嵌入网址, Youtube,Vimeo"
          },
          audioBox: {
            title: "插入音频",
            file: "上传图片",
            url: "音频网址"
          },
          browser: {
            tags: "标签",
            search: "搜索"
          },
          caption: "标题",
          close: "取消",
          submitButton: "确定",
          revertButton: "恢复",
          proportion: "比例",
          basic: "基本",
          left: "左",
          right: "右",
          center: "居中",
          width: "宽度",
          height: "高度",
          size: "尺寸",
          ratio: "比"
        },
        controller: {
          edit: "编辑",
          unlink: "去除链接",
          remove: "删除",
          insertRowAbove: "在上方插入",
          insertRowBelow: "在下方插入",
          deleteRow: "删除行",
          insertColumnBefore: "在左侧插入",
          insertColumnAfter: "在右侧插入",
          deleteColumn: "删除列",
          fixedColumnWidth: "固定列宽",
          resize100: "放大 100%",
          resize75: "放大 75%",
          resize50: "放大 50%",
          resize25: "放大 25%",
          mirrorHorizontal: "翻转左右",
          mirrorVertical: "翻转上下",
          rotateLeft: "向左旋转",
          rotateRight: "向右旋转",
          maxSize: "最大尺寸",
          minSize: "最小尺寸",
          tableHeader: "表格标题",
          mergeCells: "合并单元格",
          splitCells: "分割单元格",
          HorizontalSplit: "水平分割",
          VerticalSplit: "垂直分割"
        },
        menu: {
          spaced: "间隔开",
          bordered: "边界线",
          neon: "霓虹灯",
          translucent: "半透明",
          shadow: "阴影",
          code: "代码"
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "zh_cn", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: o
      })), o;
    });
  }(Ti)), Ti.exports;
}
var Za = /* @__PURE__ */ $a();
const Jn = /* @__PURE__ */ Se(Za), qa = { ckb: An, cs: Rn, da: In, de: Vn, en: Ui, es: Dn, fr: Mn, he: Hn, hu: Fn, it: On, ja: Un, ko: Pn, lv: Wn, nl: $n, pl: Zn, pt_br: qn, ro: jn, ru: Gn, se: Kn, ua: Yn, ur: Xn, zh_cn: Jn }, an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: An,
  cs: Rn,
  da: In,
  de: Vn,
  default: qa,
  en: Ui,
  es: Dn,
  fr: Mn,
  he: Hn,
  hu: Fn,
  it: On,
  ja: Un,
  ko: Pn,
  lv: Wn,
  nl: $n,
  pl: Zn,
  pt_br: qn,
  ro: jn,
  ru: Gn,
  se: Kn,
  ua: Yn,
  ur: Xn,
  zh_cn: Jn
}, Symbol.toStringTag, { value: "Module" })), ja = {
  name: "blockquote",
  display: "command",
  add: function(e, t) {
    const l = e.context;
    l.blockquote = {
      targetButton: t,
      tag: e.util.createElement("BLOCKQUOTE")
    };
  },
  /**
   * @Override core
   */
  active: function(e) {
    if (!e)
      this.util.removeClass(this.context.blockquote.targetButton, "active");
    else if (/blockquote/i.test(e.nodeName))
      return this.util.addClass(this.context.blockquote.targetButton, "active"), !0;
    return !1;
  },
  /**
   * @Override core
   */
  action: function() {
    const e = this.util.getParentElement(this.getSelectionNode(), "blockquote");
    e ? this.detachRangeFormatElement(e, null, null, !1, !1) : this.applyRangeFormatElement(this.context.blockquote.tag.cloneNode(!1));
  }
}, Ga = {
  name: "align",
  display: "submenu",
  add: function(e, t) {
    const l = e.icons, o = e.context;
    o.align = {
      targetButton: t,
      _itemMenu: null,
      _alignList: null,
      currentAlign: "",
      defaultDir: e.options.rtl ? "right" : "left",
      icons: {
        justify: l.align_justify,
        left: l.align_left,
        right: l.align_right,
        center: l.align_center
      }
    };
    let i = this.setSubmenu(e), a = o.align._itemMenu = i.querySelector("ul");
    a.addEventListener("click", this.pickup.bind(e)), o.align._alignList = a.querySelectorAll("li button"), e.initMenuTarget(this.name, t, i), i = null, a = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, l = e.icons, o = e.util.createElement("DIV"), i = e.options.alignItems;
    let a = "";
    for (let d = 0, f, n; d < i.length; d++)
      f = i[d], n = t.toolbar["align" + f.charAt(0).toUpperCase() + f.slice(1)], a += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + f + '" title="' + n + '" aria-label="' + n + '"><span class="se-list-icon">' + l["align_" + f] + "</span>" + n + "</button></li>";
    return o.className = "se-submenu se-list-layer se-list-align", o.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + a + "</ul></div>", o;
  },
  /**
   * @Override core
   */
  active: function(e) {
    const t = this.context.align, l = t.targetButton, o = l.firstElementChild;
    if (!e)
      this.util.changeElement(o, t.icons[t.defaultDir]), l.removeAttribute("data-focus");
    else if (this.util.isFormatElement(e)) {
      const i = e.style.textAlign;
      if (i)
        return this.util.changeElement(o, t.icons[i] || t.icons[t.defaultDir]), l.setAttribute("data-focus", i), !0;
    }
    return !1;
  },
  /**
   * @Override submenu
   */
  on: function() {
    const e = this.context.align, t = e._alignList, l = e.targetButton.getAttribute("data-focus") || e.defaultDir;
    if (l !== e.currentAlign) {
      for (let o = 0, i = t.length; o < i; o++)
        l === t[o].getAttribute("data-value") ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
      e.currentAlign = l;
    }
  },
  exchangeDir: function() {
    const e = this.options.rtl ? "right" : "left";
    if (!this.context.align || this.context.align.defaultDir === e) return;
    this.context.align.defaultDir = e;
    let t = this.context.align._itemMenu, l = t.querySelector('[data-value="left"]'), o = t.querySelector('[data-value="right"]');
    if (l && o) {
      const i = l.parentElement, a = o.parentElement;
      i.appendChild(o), a.appendChild(l);
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, l = null;
    for (; !l && !/UL/i.test(t.tagName); )
      l = t.getAttribute("data-value"), t = t.parentNode;
    if (!l) return;
    const o = this.context.align.defaultDir, i = this.getSelectedElements();
    for (let a = 0, d = i.length; a < d; a++)
      this.util.setStyle(i[a], "textAlign", l === o ? "" : l);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, Ka = {
  name: "font",
  display: "submenu",
  add: function(e, t) {
    const l = e.context;
    l.font = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _fontList: null,
      currentFont: ""
    };
    let o = this.setSubmenu(e);
    o.querySelector(".se-list-inner").addEventListener("click", this.pickup.bind(e)), l.font._fontList = o.querySelectorAll("ul li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, l = e.util.createElement("DIV");
    l.className = "se-submenu se-list-layer se-list-font-family";
    let o, i, a, d, f = e.options.font, n = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (a = 0, d = f.length; a < d; a++)
      o = f[a], i = o.split(",")[0], n += '<li><button type="button" class="se-btn-list" data-value="' + o + '" data-txt="' + i + '" title="' + i + '" aria-label="' + i + '" style="font-family:' + o + ';">' + i + "</button></li>";
    return n += "</ul></div>", l.innerHTML = n, l;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.font.targetText, l = this.context.font.targetTooltip;
    if (e) {
      if (e.style && e.style.fontFamily.length > 0) {
        const o = e.style.fontFamily.replace(/["']/g, "");
        return this.util.changeTxt(t, o), this.util.changeTxt(l, this.lang.toolbar.font + " (" + o + ")"), !0;
      }
    } else {
      const o = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
      this.util.changeTxt(t, o), this.util.changeTxt(l, this.hasFocus ? this.lang.toolbar.font + (o ? " (" + o + ")" : "") : o);
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.font, t = e._fontList, l = e.targetText.textContent;
    if (l !== e.currentFont) {
      for (let o = 0, i = t.length; o < i; o++)
        l === (t[o].getAttribute("data-value") || "").replace(/'|"/g, "") ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
      e.currentFont = l;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    let t = e.target.getAttribute("data-value");
    if (t) {
      const l = this.util.createElement("SPAN");
      /[\s\d\W]/.test(t) && !/^['"].*['"]$/.test(t) && (t = '"' + t + '"'), l.style.fontFamily = t, this.nodeChange(l, ["font-family"], null, null);
    } else
      this.nodeChange(null, ["font-family"], ["span"], !0);
    this.submenuOff();
  }
}, Ya = {
  name: "fontSize",
  display: "submenu",
  add: function(e, t) {
    const l = e.context;
    l.fontSize = {
      targetText: t.querySelector(".txt"),
      _sizeList: null,
      currentSize: ""
    };
    let o = this.setSubmenu(e), i = o.querySelector("ul");
    i.addEventListener("click", this.pickup.bind(e)), l.fontSize._sizeList = i.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null, i = null;
  },
  setSubmenu: function(e) {
    const t = e.options, l = e.lang, o = e.util.createElement("DIV");
    o.className = "se-submenu se-list-layer se-list-font-size";
    const i = t.fontSize ? t.fontSize : [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    let a = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + l.toolbar.default + '" aria-label="' + l.toolbar.default + '">(' + l.toolbar.default + ")</button></li>";
    for (let d = 0, f = t.fontSizeUnit, n = i.length, b; d < n; d++)
      b = i[d], a += '<li><button type="button" class="se-btn-list" data-value="' + b + f + '" title="' + b + f + '" aria-label="' + b + f + '" style="font-size:' + b + f + ';">' + b + "</button></li>";
    return a += "</ul></div>", o.innerHTML = a, o;
  },
  /**
  * @Override core
  */
  active: function(e) {
    if (!e)
      this.util.changeTxt(this.context.fontSize.targetText, this.hasFocus ? this._convertFontSize.call(this, this.options.fontSizeUnit, this.wwComputedStyle.fontSize) : this.lang.toolbar.fontSize);
    else if (e.style && e.style.fontSize.length > 0)
      return this.util.changeTxt(this.context.fontSize.targetText, this._convertFontSize.call(this, this.options.fontSizeUnit, e.style.fontSize)), !0;
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.fontSize, t = e._sizeList, l = e.targetText.textContent;
    if (l !== e.currentSize) {
      for (let o = 0, i = t.length; o < i; o++)
        l === t[o].getAttribute("data-value") ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
      e.currentSize = l;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value");
    if (t) {
      const l = this.util.createElement("SPAN");
      l.style.fontSize = t, this.nodeChange(l, ["font-size"], null, null);
    } else
      this.nodeChange(null, ["font-size"], ["span"], !0);
    this.submenuOff();
  }
}, Qn = {
  name: "colorPicker",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    const t = e.context;
    t.colorPicker = {
      colorListHTML: "",
      _colorInput: "",
      _defaultColor: "#000",
      _styleProperty: "color",
      _currentColor: "",
      _colorList: []
    }, t.colorPicker.colorListHTML = this.createColorList(e, this._makeColorList);
  },
  /**
   * @description Create color list
   * @param {Object} core Core object 
   * @param {Function} makeColor this._makeColorList
   * @returns {String} HTML string
   */
  createColorList: function(e, t) {
    const l = e.options, o = e.lang, i = !l.colorList || l.colorList.length === 0 ? [
      "#ff0000",
      "#ff5e00",
      "#ffe400",
      "#abf200",
      "#00d8ff",
      "#0055ff",
      "#6600ff",
      "#ff00dd",
      "#000000",
      "#ffd8d8",
      "#fae0d4",
      "#faf4c0",
      "#e4f7ba",
      "#d4f4fa",
      "#d9e5ff",
      "#e8d9ff",
      "#ffd9fa",
      "#f1f1f1",
      "#ffa7a7",
      "#ffc19e",
      "#faed7d",
      "#cef279",
      "#b2ebf4",
      "#b2ccff",
      "#d1b2ff",
      "#ffb2f5",
      "#bdbdbd",
      "#f15f5f",
      "#f29661",
      "#e5d85c",
      "#bce55c",
      "#5cd1e5",
      "#6699ff",
      "#a366ff",
      "#f261df",
      "#8c8c8c",
      "#980000",
      "#993800",
      "#998a00",
      "#6b9900",
      "#008299",
      "#003399",
      "#3d0099",
      "#990085",
      "#353535",
      "#670000",
      "#662500",
      "#665c00",
      "#476600",
      "#005766",
      "#002266",
      "#290066",
      "#660058",
      "#222222"
    ] : l.colorList;
    let a = [], d = '<div class="se-list-inner">';
    for (let f = 0, n = i.length, b; f < n; f++)
      b = i[f], b && (typeof b == "string" && (a.push(b), f < n - 1) || (a.length > 0 && (d += '<div class="se-selector-color">' + t(a) + "</div>", a = []), typeof b == "object" && (d += '<div class="se-selector-color">' + t(b) + "</div>")));
    return d += '<form class="se-form-group"><input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/><button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + o.dialogBox.submitButton + '" aria-label="' + o.dialogBox.submitButton + '">' + e.icons.checked + '</button><button type="button" class="se-btn _se_color_picker_remove" title="' + o.toolbar.removeFormat + '" aria-label="' + o.toolbar.removeFormat + '">' + e.icons.erase + "</button></form></div>", d;
  },
  /**
   * @description Internal function used by this.createColorList
   * @param {Array} colorList Color list
   * @private
   */
  _makeColorList: function(e) {
    let t = "";
    t += '<ul class="se-color-pallet">';
    for (let l = 0, o = e.length, i; l < o; l++)
      i = e[l], typeof i == "string" && (t += '<li><button type="button" data-value="' + i + '" title="' + i + '" aria-label="' + i + '" style="background-color:' + i + ';"></button></li>');
    return t += "</ul>", t;
  },
  /**
   * @description Displays or resets the currently selected color at color list.
   * @param {Node} node Current Selected node
   * @param {String|null} color Color value
   */
  init: function(e, t) {
    const l = this.plugins.colorPicker;
    let o = t || l.getColorInNode.call(this, e) || this.context.colorPicker._defaultColor;
    o = l.isHexColor(o) ? o : l.rgb2hex(o) || o;
    const i = this.context.colorPicker._colorList;
    if (i)
      for (let a = 0, d = i.length; a < d; a++)
        o.toLowerCase() === i[a].getAttribute("data-value").toLowerCase() ? this.util.addClass(i[a], "active") : this.util.removeClass(i[a], "active");
    l.setInputText.call(this, l.colorName2hex.call(this, o));
  },
  /**
   * @description Store color values
   * @param {String} hexColorStr Hax color value
   */
  setCurrentColor: function(e) {
    this.context.colorPicker._currentColor = e, this.context.colorPicker._colorInput.style.borderColor = e;
  },
  /**
   * @description Set color at input element
   * @param {String} hexColorStr Hax color value
   */
  setInputText: function(e) {
    e = /^#/.test(e) ? e : "#" + e, this.context.colorPicker._colorInput.value = e, this.plugins.colorPicker.setCurrentColor.call(this, e);
  },
  /**
   * @description Gets color value at color property of node
   * @param {Node} node Selected node 
   * @returns {String}
   */
  getColorInNode: function(e) {
    let t = "";
    const l = this.context.colorPicker._styleProperty;
    for (; e && !this.util.isWysiwygDiv(e) && t.length === 0; )
      e.nodeType === 1 && e.style[l] && (t = e.style[l]), e = e.parentNode;
    return t;
  },
  /**
   * @description Function to check hex format color
   * @param {String} str Color value
   */
  isHexColor: function(e) {
    return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(e);
  },
  /**
   * @description Function to convert hex format to a rgb color
   * @param {String} rgb RGB color format
   * @returns {String}
   */
  rgb2hex: function(e) {
    const t = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return t && t.length === 4 ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : "";
  },
  /**
   * @description Converts color values of other formats to hex color values and returns.
   * @param {String} colorName Color value
   * @returns {String}
   */
  colorName2hex: function(e) {
    if (/^#/.test(e)) return e;
    var t = this.util.createElement("div");
    t.style.display = "none", t.style.color = e;
    var l = this._w.getComputedStyle(this._d.body.appendChild(t)).color.match(/\d+/g).map(function(o) {
      return parseInt(o, 10);
    });
    return this.util.removeItem(t), l.length >= 3 ? "#" + ((1 << 24) + (l[0] << 16) + (l[1] << 8) + l[2]).toString(16).substr(1) : !1;
  }
}, Xa = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Qn]);
    const l = e.context;
    l.fontColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let o = this.setSubmenu(e);
    l.fontColor.colorInput = o.querySelector("._se_color_picker_input"), l.fontColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), o.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), o.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), o.addEventListener("click", this.pickup.bind(e)), l.fontColor.colorList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, l = e.util.createElement("DIV");
    return l.className = "se-submenu se-list-layer", l.innerHTML = t, l;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.colorPicker, t = this.context.fontColor;
    e._colorInput = t.colorInput;
    const l = this.wwComputedStyle.color;
    e._defaultColor = l ? this.plugins.colorPicker.isHexColor(l) ? l : this.plugins.colorPicker.rgb2hex(l) : "#333333", e._styleProperty = "color", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
  },
  /**
  * @Override _colorPicker
  */
  onChangeInput: function(e) {
    this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
  },
  submit: function() {
    this.plugins.fontColor.applyColor.call(this, this.context.colorPicker._currentColor);
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.fontColor.applyColor.call(this, e.target.getAttribute("data-value"));
  },
  remove: function() {
    this.nodeChange(null, ["color"], ["span"], !0), this.submenuOff();
  },
  applyColor: function(e) {
    if (!e) return;
    const t = this.util.createElement("SPAN");
    t.style.color = e, this.nodeChange(t, ["color"], null, null), this.submenuOff();
  }
}, Ja = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Qn]);
    const l = e.context;
    l.hiliteColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let o = this.setSubmenu(e);
    l.hiliteColor.colorInput = o.querySelector("._se_color_picker_input"), l.hiliteColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), o.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), o.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), o.addEventListener("click", this.pickup.bind(e)), l.hiliteColor.colorList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, l = e.util.createElement("DIV");
    return l.className = "se-submenu se-list-layer", l.innerHTML = t, l;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.colorPicker, t = this.context.hiliteColor;
    e._colorInput = t.colorInput;
    const l = this.wwComputedStyle.backgroundColor;
    e._defaultColor = l ? this.plugins.colorPicker.isHexColor(l) ? l : this.plugins.colorPicker.rgb2hex(l) : "#ffffff", e._styleProperty = "backgroundColor", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
  },
  /**
  * @Override _colorPicker
  */
  onChangeInput: function(e) {
    this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
  },
  submit: function() {
    this.plugins.hiliteColor.applyColor.call(this, this.context.colorPicker._currentColor);
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.hiliteColor.applyColor.call(this, e.target.getAttribute("data-value"));
  },
  remove: function() {
    this.nodeChange(null, ["background-color"], ["span"], !0), this.submenuOff();
  },
  applyColor: function(e) {
    if (!e) return;
    const t = this.util.createElement("SPAN");
    t.style.backgroundColor = e, this.nodeChange(t, ["background-color"], null, null), this.submenuOff();
  }
}, Qa = {
  name: "horizontalRule",
  display: "submenu",
  add: function(e, t) {
    e.context.horizontalRule = {
      currentHR: null
    };
    let l = this.setSubmenu(e);
    l.querySelector("ul").addEventListener("click", this.horizontalRulePick.bind(e)), e.initMenuTarget(this.name, t, l), l = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, l = e.util.createElement("DIV"), o = e.options.hrItems || [{ name: t.toolbar.hr_solid, class: "__se__solid" }, { name: t.toolbar.hr_dashed, class: "__se__dashed" }, { name: t.toolbar.hr_dotted, class: "__se__dotted" }];
    let i = "";
    for (let a = 0, d = o.length; a < d; a++)
      i += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + o[a].class + '" title="' + o[a].name + '" aria-label="' + o[a].name + '"><hr' + (o[a].class ? ' class="' + o[a].class + '"' : "") + (o[a].style ? ' style="' + o[a].style + '"' : "") + "/></button></li>";
    return l.className = "se-submenu se-list-layer se-list-line", l.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + i + "</ul></div>", l;
  },
  active: function(e) {
    if (!e)
      this.util.hasClass(this.context.horizontalRule.currentHR, "on") && this.controllersOff();
    else if (/HR/i.test(e.nodeName))
      return this.context.horizontalRule.currentHR = e, this.util.hasClass(e, "on") || (this.util.addClass(e, "on"), this.controllersOn("hr", this.util.removeClass.bind(this.util, e, "on"))), !0;
    return !1;
  },
  appendHr: function(e) {
    return this.focus(), this.insertComponent(e.cloneNode(!1), !1, !0, !1);
  },
  horizontalRulePick: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, l = t.getAttribute("data-command");
    for (; !l && !/UL/i.test(t.tagName); )
      t = t.parentNode, l = t.getAttribute("data-command");
    if (!l) return;
    const o = this.plugins.horizontalRule.appendHr.call(this, t.firstElementChild);
    o && (this.setRange(o, 0, o, 0), this.submenuOff());
  }
}, er = {
  name: "list",
  display: "submenu",
  add: function(e, t) {
    const l = e.context;
    l.list = {
      targetButton: t,
      _list: null,
      currentList: "",
      icons: {
        bullets: e.icons.list_bullets,
        number: e.icons.list_number
      }
    };
    let o = this.setSubmenu(e), i = o.querySelector("ul");
    i.addEventListener("click", this.pickup.bind(e)), l.list._list = i.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null, i = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, l = e.util.createElement("DIV");
    return l.className = "se-submenu se-list-layer", l.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + t.toolbar.orderList + '" aria-label="' + t.toolbar.orderList + '">' + e.icons.list_number + '</button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + t.toolbar.unorderList + '" aria-label="' + t.toolbar.unorderList + '">' + e.icons.list_bullets + "</button></li></ul></div>", l;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.list.targetButton, l = t.firstElementChild, o = this.util;
    if (o.isList(e)) {
      const i = e.nodeName;
      return t.setAttribute("data-focus", i), o.addClass(t, "active"), /UL/i.test(i) ? o.changeElement(l, this.context.list.icons.bullets) : o.changeElement(l, this.context.list.icons.number), !0;
    } else
      t.removeAttribute("data-focus"), o.changeElement(l, this.context.list.icons.number), o.removeClass(t, "active");
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.list, t = e._list, l = e.targetButton.getAttribute("data-focus") || "";
    if (l !== e.currentList) {
      for (let o = 0, i = t.length; o < i; o++)
        l === t[o].getAttribute("data-command") ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
      e.currentList = l;
    }
  },
  editList: function(e, t, l) {
    let o = this.getRange(), i = t || this.getSelectedElementsAndComponents(!1);
    if (i.length === 0 && (t || (o = this.getRange_addLine(o, null), i = this.getSelectedElementsAndComponents(!1), i.length === 0)))
      return;
    const a = this.util;
    a.sortByDepth(i, !0);
    let d = i[0], f = i[i.length - 1], n = (a.isListCell(d) || a.isComponent(d)) && !d.previousElementSibling ? d.parentNode.previousElementSibling : d.previousElementSibling, b = (a.isListCell(f) || a.isComponent(f)) && !f.nextElementSibling ? f.parentNode.nextElementSibling : f.nextElementSibling;
    const u = o.collapsed, v = {
      sc: o.startContainer,
      so: o.startContainer === o.endContainer && a.onlyZeroWidthSpace(o.startContainer) && o.startOffset === 0 && o.endOffset === 1 ? o.endOffset : o.startOffset,
      ec: o.endContainer,
      eo: o.endOffset
    };
    let k = null, x = !0;
    for (let L = 0, R = i.length; L < R; L++)
      if (!a.isList(a.getRangeFormatElement(i[L], (function(s) {
        return this.getRangeFormatElement(s) && s !== i[L];
      }).bind(a)))) {
        x = !1;
        break;
      }
    if (x && (!n || d.tagName !== n.tagName || e !== n.tagName.toUpperCase()) && (!b || f.tagName !== b.tagName || e !== b.tagName.toUpperCase())) {
      if (l) {
        for (let p = 0, m = i.length; p < m; p++)
          for (let g = p - 1; g >= 0; g--)
            if (i[g].contains(i[p])) {
              i.splice(p, 1), p--, m--;
              break;
            }
      }
      const L = a.getRangeFormatElement(d), R = L && L.tagName === e;
      let s, r;
      const c = (function(p) {
        return !this.isComponent(p);
      }).bind(a);
      R || (r = a.createElement(e));
      for (let p = 0, m = i.length, g, h; p < m; p++)
        h = a.getRangeFormatElement(i[p], c), !(!h || !a.isList(h)) && (g ? g !== h ? (l && a.isListCell(h.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : k = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0), h = i[p].parentNode, R || (r = a.createElement(e)), g = h, s = { r: g, f: [a.getParentElement(i[p], "LI")] }) : s.f.push(a.getParentElement(i[p], "LI")) : (g = h, s = { r: g, f: [a.getParentElement(i[p], "LI")] }), p === m - 1 && (l && a.isListCell(h.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : k = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0)));
    } else {
      const L = n && n.parentNode, R = b && b.parentNode;
      n = L && !a.isWysiwygDiv(L) && L.nodeName === e ? L : n, b = R && !a.isWysiwygDiv(R) && R.nodeName === e ? R : b;
      const s = n && n.tagName === e, r = b && b.tagName === e;
      let c = s ? n : a.createElement(e), p = null, m = null, g = null;
      const h = (function(_) {
        return !this.isComponent(_) && !this.isList(_);
      }).bind(a);
      for (let _ = 0, C = i.length, y, S, V, T, z, A, q, Z, U; _ < C; _++) {
        if (S = i[_], S.childNodes.length === 0 && !a._isIgnoreNodeChange(S)) {
          a.removeItem(S);
          continue;
        }
        if (T = i[_ + 1], z = S.parentNode, A = T ? T.parentNode : null, V = a.isListCell(S), U = a.isRangeFormatElement(z) ? z : null, q = V && !a.isWysiwygDiv(z) ? z.parentNode : z, Z = V && !a.isWysiwygDiv(z) ? !T || a.isListCell(q) ? z : z.nextSibling : S.nextSibling, y = a.createElement("LI"), a.copyFormatAttributes(y, S), _ === 0 && v.sc === S && (v.sc = y), _ === C - 1 && v.ec === S && (v.ec = y), a.isComponent(S)) {
          const F = /^HR$/i.test(S.nodeName);
          F || (y.innerHTML = "<br>"), y.innerHTML += S.outerHTML, F && (y.innerHTML += "<br>");
        } else {
          const F = S.childNodes;
          for (; F[0]; )
            y.appendChild(F[0]);
        }
        c.appendChild(y), (!T || q !== A || a.isRangeFormatElement(Z)) && (p || (p = c), (!s || !T || q !== A) && !(T && a.isList(A) && A === z) && c.parentNode !== q && q.insertBefore(c, Z)), a.removeItem(S), s && m === null && (m = c.children.length - 1), T && (a.getRangeFormatElement(A, h) !== a.getRangeFormatElement(z, h) || a.isList(A) && a.isList(z) && a.getElementDepth(A) !== a.getElementDepth(z)) && (c = a.createElement(e)), U && U.children.length === 0 && a.removeItem(U);
      }
      m && (p = p.children[m]), r && (g = c.children.length - 1, c.innerHTML += b.innerHTML, c.children[g], a.removeItem(b));
    }
    return this.effectNode = null, u && k || v;
  },
  _detachNested: function(e) {
    const t = e[0], l = e[e.length - 1], o = l.nextElementSibling, i = t.parentNode, a = i.parentNode.nextElementSibling, d = i.parentNode.parentNode;
    for (let n = 0, b = e.length; n < b; n++)
      d.insertBefore(e[n], a);
    if (o && i.children.length > 0) {
      const n = i.cloneNode(!1), b = i.childNodes, u = this.util.getPositionIndex(o);
      for (; b[u]; )
        n.appendChild(b[u]);
      l.appendChild(n);
    }
    i.children.length === 0 && this.util.removeItem(i), this.util.mergeSameTags(d);
    const f = this.util.getEdgeChildNodes(t, l);
    return {
      cc: t.parentNode,
      sc: f.sc,
      ec: f.ec
    };
  },
  editInsideList: function(e, t) {
    t = t || this.getSelectedElements().filter((function(d) {
      return this.isListCell(d);
    }).bind(this.util));
    const l = t.length;
    if (l === 0 || !e && !this.util.isListCell(t[0].previousElementSibling) && !this.util.isListCell(t[l - 1].nextElementSibling))
      return {
        sc: t[0],
        so: 0,
        ec: t[l - 1],
        eo: 1
      };
    let o = t[0].parentNode, i = t[l - 1], a = null;
    if (e) {
      if (o !== i.parentNode && this.util.isList(i.parentNode.parentNode) && i.nextElementSibling)
        for (i = i.nextElementSibling; i; )
          t.push(i), i = i.nextElementSibling;
      a = this.plugins.list.editList.call(this, o.nodeName.toUpperCase(), t, !0);
    } else {
      let d = this.util.createElement(o.nodeName), f = t[0].previousElementSibling, n = i.nextElementSibling;
      const b = { s: null, e: null, sl: o, el: o };
      for (let k = 0, x = l, L; k < x; k++)
        L = t[k], L.parentNode !== o && (this.plugins.list._insiedList.call(this, o, d, f, n, b), o = L.parentNode, d = this.util.createElement(o.nodeName)), f = L.previousElementSibling, n = L.nextElementSibling, d.appendChild(L);
      this.plugins.list._insiedList.call(this, o, d, f, n, b);
      const u = this.util.getNodeFromPath(b.s, b.sl), v = this.util.getNodeFromPath(b.e, b.el);
      a = {
        sc: u,
        so: 0,
        ec: v,
        eo: v.textContent.length
      };
    }
    return a;
  },
  _insiedList: function(e, t, l, o, i) {
    let a = !1;
    if (l && t.tagName === l.tagName) {
      const d = t.children;
      for (; d[0]; )
        l.appendChild(d[0]);
      t = l, a = !0;
    }
    if (o && t.tagName === o.tagName) {
      const d = o.children;
      for (; d[0]; )
        t.appendChild(d[0]);
      const f = o.nextElementSibling;
      o.parentNode.removeChild(o), o = f;
    }
    if (!a) {
      this.util.isListCell(l) && (e = l, o = null), e.insertBefore(t, o), i.s || (i.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), i.sl = e);
      const d = e.contains(i.sl) ? this.util.getNodePath(i.sl, e) : null;
      i.e = this.util.getNodePath(t.lastElementChild.firstChild, e, null), i.el = e, this.util.mergeSameTags(e, [i.s, i.e, d], !1), this.util.mergeNestedTags(e), d && (i.sl = this.util.getNodeFromPath(d, e));
    }
    return t;
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, l = "";
    for (; !l && !/^UL$/i.test(t.tagName); )
      l = t.getAttribute("data-command"), t = t.parentNode;
    if (!l) return;
    const o = this.plugins.list.editList.call(this, l, null, !1);
    o && this.setRange(o.sc, o.so, o.ec, o.eo), this.submenuOff(), this.history.push(!1);
  }
}, tr = {
  name: "table",
  display: "submenu",
  add: function(e, t) {
    const l = e.context;
    let o = l.table = {
      _element: null,
      _tdElement: null,
      _trElement: null,
      _trElements: null,
      _tableXY: [],
      _maxWidth: !0,
      _fixedColumn: !1,
      _rtl: e.options.rtl,
      cellControllerTop: e.options.tableCellControllerPosition === "top",
      resizeText: null,
      headerButton: null,
      mergeButton: null,
      splitButton: null,
      splitMenu: null,
      maxText: e.lang.controller.maxSize,
      minText: e.lang.controller.minSize,
      _physical_cellCnt: 0,
      _logical_cellCnt: 0,
      _rowCnt: 0,
      _rowIndex: 0,
      _physical_cellIndex: 0,
      _logical_cellIndex: 0,
      _current_colSpan: 0,
      _current_rowSpan: 0,
      icons: {
        expansion: e.icons.expansion,
        reduction: e.icons.reduction
      }
    }, i = this.setSubmenu(e), a = i.querySelector(".se-controller-table-picker");
    o.tableHighlight = i.querySelector(".se-table-size-highlighted"), o.tableUnHighlight = i.querySelector(".se-table-size-unhighlighted"), o.tableDisplay = i.querySelector(".se-table-size-display"), e.options.rtl && (o.tableHighlight.style.left = 10 * 18 - 13 + "px");
    let d = this.setController_table(e);
    o.tableController = d, o.resizeButton = d.querySelector("._se_table_resize"), o.resizeText = d.querySelector("._se_table_resize > span > span"), o.columnFixedButton = d.querySelector("._se_table_fixed_column"), o.headerButton = d.querySelector("._se_table_header");
    let f = this.setController_tableEditor(e, o.cellControllerTop);
    o.resizeDiv = f, o.splitMenu = f.querySelector(".se-btn-group-sub"), o.mergeButton = f.querySelector("._se_table_merge_button"), o.splitButton = f.querySelector("._se_table_split_button"), o.insertRowAboveButton = f.querySelector("._se_table_insert_row_a"), o.insertRowBelowButton = f.querySelector("._se_table_insert_row_b"), a.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, o)), a.addEventListener("click", this.appendTable.bind(e)), f.addEventListener("click", this.onClick_tableController.bind(e)), d.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, i), l.element.relative.appendChild(f), l.element.relative.appendChild(d), i = null, a = null, f = null, d = null, o = null;
  },
  setSubmenu: function(e) {
    const t = e.util.createElement("DIV");
    return t.className = "se-submenu se-selector-table", t.innerHTML = '<div class="se-table-size"><div class="se-table-size-picker se-controller-table-picker"></div><div class="se-table-size-highlighted"></div><div class="se-table-size-unhighlighted"></div></div><div class="se-table-size-display">1 x 1</div>', t;
  },
  setController_table: function(e) {
    const t = e.lang, l = e.icons, o = e.util.createElement("DIV");
    return o.className = "se-controller se-controller-table", o.innerHTML = '<div><div class="se-btn-group"><button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' + l.expansion + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.maxSize + '</span></span></button><button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' + l.fixed_column_width + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.fixedColumnWidth + '</span></span></button><button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' + l.table_header + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.tableHeader + '</span></span></button><button type="button" data-command="remove" class="se-btn se-tooltip">' + l.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", o;
  },
  setController_tableEditor: function(e, t) {
    const l = e.lang, o = e.icons, i = e.util.createElement("DIV");
    return i.className = "se-controller se-controller-table-cell", i.innerHTML = (t ? "" : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group"><button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + o.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + l.controller.insertRowAbove + '</span></span></button><button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + o.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + l.controller.insertRowBelow + '</span></span></button><button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + o.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + l.controller.deleteRow + '</span></span></button><button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + o.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + l.controller.mergeCells + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + o.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + l.controller.insertColumnBefore + '</span></span></button><button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + o.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + l.controller.insertColumnAfter + '</span></span></button><button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + o.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + l.controller.deleteColumn + '</span></span></button><button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + o.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + l.controller.splitCells + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split"><div class="se-list-inner"><ul class="se-list-basic"><li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + l.controller.VerticalSplit + '" aria-label="' + l.controller.VerticalSplit + '">' + l.controller.VerticalSplit + '</li><li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + l.controller.HorizontalSplit + '" aria-label="' + l.controller.HorizontalSplit + '">' + l.controller.HorizontalSplit + "</li></ul></div></div></div>", i;
  },
  appendTable: function() {
    const e = this.util.createElement("TABLE"), t = this.plugins.table.createCells, l = this.context.table._tableXY[0];
    let o = this.context.table._tableXY[1], i = "<tbody>";
    for (; o > 0; )
      i += "<tr>" + t.call(this, "td", l) + "</tr>", --o;
    if (i += "</tbody>", e.innerHTML = i, this.insertComponent(e, !1, !0, !1)) {
      const d = e.querySelector("td div");
      this.setRange(d, 0, d, 0), this.plugins.table.reset_table_picker.call(this);
    }
  },
  createCells: function(e, t, l) {
    if (e = e.toLowerCase(), l) {
      const o = this.util.createElement(e);
      return o.innerHTML = "<div><br></div>", o;
    } else {
      let o = "";
      for (; t > 0; )
        o += "<" + e + "><div><br></div></" + e + ">", t--;
      return o;
    }
  },
  onMouseMove_tablePicker: function(e, t) {
    t.stopPropagation();
    let l = this._w.Math.ceil(t.offsetX / 18), o = this._w.Math.ceil(t.offsetY / 18);
    l = l < 1 ? 1 : l, o = o < 1 ? 1 : o, e._rtl && (e.tableHighlight.style.left = l * 18 - 13 + "px", l = 11 - l), e.tableHighlight.style.width = l + "em", e.tableHighlight.style.height = o + "em", this.util.changeTxt(e.tableDisplay, l + " x " + o), e._tableXY = [l, o];
  },
  reset_table_picker: function() {
    if (!this.context.table.tableHighlight) return;
    const e = this.context.table.tableHighlight.style, t = this.context.table.tableUnHighlight.style;
    e.width = "1em", e.height = "1em", t.width = "10em", t.height = "10em", this.util.changeTxt(this.context.table.tableDisplay, "1 x 1"), this.submenuOff();
  },
  init: function() {
    const e = this.context.table, t = this.plugins.table;
    if (t._removeEvents.call(this), t._selectedTable) {
      const l = t._selectedTable.querySelectorAll(".se-table-selected-cell");
      for (let o = 0, i = l.length; o < i; o++)
        this.util.removeClass(l[o], "se-table-selected-cell");
    }
    t._toggleEditor.call(this, !0), e._element = null, e._tdElement = null, e._trElement = null, e._trElements = null, e._tableXY = [], e._maxWidth = !0, e._fixedColumn = !1, e._physical_cellCnt = 0, e._logical_cellCnt = 0, e._rowCnt = 0, e._rowIndex = 0, e._physical_cellIndex = 0, e._logical_cellIndex = 0, e._current_colSpan = 0, e._current_rowSpan = 0, t._shift = !1, t._selectedCells = null, t._selectedTable = null, t._ref = null, t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null;
  },
  /** table edit controller */
  call_controller_tableEdit: function(e) {
    const t = this.plugins.table, l = this.context.table;
    if (!this.getSelection().isCollapsed && !t._selectedCell) {
      this.controllersOff(), this.util.removeClass(e, "se-table-selected-cell");
      return;
    }
    const o = l._element || this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    l._maxWidth = this.util.hasClass(o, "se-table-size-100") || o.style.width === "100%" || !o.style.width && !this.util.hasClass(o, "se-table-size-auto"), l._fixedColumn = this.util.hasClass(o, "se-table-layout-fixed") || o.style.tableLayout === "fixed", t.setTableStyle.call(this, l._maxWidth ? "width|column" : "width"), t.setPositionControllerTop.call(this, o), t.setPositionControllerDiv.call(this, e, t._shift), t._shift || this.controllersOn(l.resizeDiv, l.tableController, t.init.bind(this), e, "table");
  },
  setPositionControllerTop: function(e) {
    this.setControllerPosition(this.context.table.tableController, e, "top", { left: 0, top: 0 });
  },
  setPositionControllerDiv: function(e, t) {
    const l = this.context.table, o = l.resizeDiv;
    this.plugins.table.setCellInfo.call(this, e, t), l.cellControllerTop ? this.setControllerPosition(o, l._element, "top", { left: l.tableController.offsetWidth, top: 0 }) : this.setControllerPosition(o, e, "bottom", { left: 0, top: 0 });
  },
  setCellInfo: function(e, t) {
    const l = this.context.table, o = l._element = this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    if (/THEAD/i.test(o.firstElementChild.nodeName) ? this.util.addClass(l.headerButton, "active") : this.util.removeClass(l.headerButton, "active"), t || l._physical_cellCnt === 0) {
      l._tdElement !== e && (l._tdElement = e, l._trElement = e.parentNode);
      const i = l._trElements = o.rows, a = e.cellIndex;
      let d = 0;
      for (let u = 0, v = i[0].cells, k = i[0].cells.length; u < k; u++)
        d += v[u].colSpan;
      const f = l._rowIndex = l._trElement.rowIndex;
      l._rowCnt = i.length, l._physical_cellCnt = l._trElement.cells.length, l._logical_cellCnt = d, l._physical_cellIndex = a, l._current_colSpan = l._tdElement.colSpan - 1, l._current_rowSpan - l._trElement.cells[a].rowSpan - 1;
      let n = [], b = [];
      for (let u = 0, v, k; u <= f; u++) {
        v = i[u].cells, k = 0;
        for (let x = 0, L = v.length, R, s, r, c; x < L; x++) {
          if (R = v[x], s = R.colSpan - 1, r = R.rowSpan - 1, c = x + k, b.length > 0)
            for (let p = 0, m; p < b.length; p++)
              m = b[p], !(m.row > u) && (c >= m.index ? (k += m.cs, c += m.cs, m.rs -= 1, m.row = u + 1, m.rs < 1 && (b.splice(p, 1), p--)) : x === L - 1 && (m.rs -= 1, m.row = u + 1, m.rs < 1 && (b.splice(p, 1), p--)));
          if (u === f && x === a) {
            l._logical_cellIndex = c;
            break;
          }
          r > 0 && n.push({
            index: c,
            cs: s + 1,
            rs: r,
            row: -1
          }), k += s;
        }
        b = b.concat(n).sort(function(x, L) {
          return x.index - L.index;
        }), n = [];
      }
      n = null, b = null;
    }
  },
  editTable: function(e, t) {
    const l = this.plugins.table, o = this.context.table, i = o._element, a = e === "row";
    if (a) {
      const d = o._trElement.parentNode;
      if (/^THEAD$/i.test(d.nodeName)) {
        if (t === "up")
          return;
        if (!d.nextElementSibling || !/^TBODY$/i.test(d.nextElementSibling.nodeName)) {
          i.innerHTML += "<tbody><tr>" + l.createCells.call(this, "td", o._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (l._ref) {
      const d = o._tdElement, f = l._selectedCells;
      if (a)
        if (t)
          l.setCellInfo.call(this, t === "up" ? f[0] : f[f.length - 1], !0), l.editRow.call(this, t, d);
        else {
          let n = f[0].parentNode;
          const b = [f[0]];
          for (let u = 1, v = f.length, k; u < v; u++)
            k = f[u], n !== k.parentNode && (b.push(k), n = k.parentNode);
          for (let u = 0, v = b.length; u < v; u++)
            l.setCellInfo.call(this, b[u], !0), l.editRow.call(this, t);
        }
      else {
        const n = f[0].parentNode;
        if (t) {
          let b = null;
          for (let u = 0, v = f.length - 1; u < v; u++)
            if (n !== f[u + 1].parentNode) {
              b = f[u];
              break;
            }
          l.setCellInfo.call(this, t === "left" ? f[0] : b || f[0], !0), l.editCell.call(this, t, d);
        } else {
          const b = [f[0]];
          for (let u = 1, v = f.length, k; u < v && (k = f[u], n === k.parentNode); u++)
            b.push(k);
          for (let u = 0, v = b.length; u < v; u++)
            l.setCellInfo.call(this, b[u], !0), l.editCell.call(this, t);
        }
      }
      t || l.init.call(this);
    } else
      l[a ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const d = i.children;
      for (let f = 0; f < d.length; f++)
        d[f].children.length === 0 && (this.util.removeItem(d[f]), f--);
      i.children.length === 0 && this.util.removeItem(i);
    }
  },
  editRow: function(e, t) {
    const l = this.context.table, o = !e, i = e === "up", a = l._rowIndex, d = o || i ? a : a + l._current_rowSpan + 1, f = o ? -1 : 1, n = l._trElements;
    let b = l._logical_cellCnt;
    for (let u = 0, v = a + (o ? -1 : 0), k; u <= v; u++) {
      if (k = n[u].cells, k.length === 0) return;
      for (let x = 0, L = k.length, R, s; x < L; x++)
        R = k[x].rowSpan, s = k[x].colSpan, !(R < 2 && s < 2) && R + u > d && d > u && (k[x].rowSpan = R + f, b -= s);
    }
    if (o) {
      const u = n[a + 1];
      if (u) {
        const v = [];
        let k = n[a].cells, x = 0;
        for (let L = 0, R = k.length, s, r; L < R; L++)
          s = k[L], r = L + x, x += s.colSpan - 1, s.rowSpan > 1 && (s.rowSpan -= 1, v.push({ cell: s.cloneNode(!1), index: r }));
        if (v.length > 0) {
          let L = v.shift();
          k = u.cells, x = 0;
          for (let R = 0, s = k.length, r, c; R < s && (r = k[R], c = R + x, x += r.colSpan - 1, !(c >= L.index && (R--, x--, x += L.cell.colSpan - 1, u.insertBefore(L.cell, r), L = v.shift(), !L))); R++)
            ;
          if (L) {
            u.appendChild(L.cell);
            for (let R = 0, s = v.length; R < s; R++)
              u.appendChild(v[R].cell);
          }
        }
      }
      l._element.deleteRow(d);
    } else {
      const u = l._element.insertRow(d);
      u.innerHTML = this.plugins.table.createCells.call(this, "td", b, !1);
    }
    o ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || l._tdElement, !0);
  },
  editCell: function(e, t) {
    const l = this.context.table, o = this.util, i = !e, a = e === "left", d = l._current_colSpan, f = i || a ? l._logical_cellIndex : l._logical_cellIndex + d + 1, n = l._trElements;
    let b = [], u = [], v = 0;
    const k = [], x = [];
    for (let L = 0, R = l._rowCnt, s, r, c, p, m, g; L < R; L++) {
      s = n[L], r = f, m = !1, c = s.cells, g = 0;
      for (let h = 0, _, C = c.length, y, S, V; h < C && (_ = c[h], !!_); h++)
        if (y = _.rowSpan - 1, S = _.colSpan - 1, i) {
          if (V = h + g, u.length > 0) {
            const T = !c[h + 1];
            for (let z = 0, A; z < u.length; z++)
              A = u[z], !(A.row > L) && (V >= A.index ? (g += A.cs, V = h + g, A.rs -= 1, A.row = L + 1, A.rs < 1 && (u.splice(z, 1), z--)) : T && (A.rs -= 1, A.row = L + 1, A.rs < 1 && (u.splice(z, 1), z--)));
          }
          y > 0 && b.push({
            rs: y,
            cs: S + 1,
            index: V,
            row: -1
          }), V >= r && V + S <= r + d ? k.push(_) : V <= r + d && V + S >= r ? _.colSpan -= o.getOverlapRangeAtIndex(f, f + d, V, V + S) : y > 0 && (V < r || V + S > r + d) && x.push({
            cell: _,
            i: L,
            rs: L + y
          }), g += S;
        } else {
          if (h >= r) break;
          if (S > 0) {
            if (v < 1 && S + h >= r) {
              _.colSpan += 1, r = null, v = y + 1;
              break;
            }
            r -= S;
          }
          if (!m) {
            for (let T = 0, z; T < u.length; T++)
              z = u[T], r -= z.cs, z.rs -= 1, z.rs < 1 && (u.splice(T, 1), T--);
            m = !0;
          }
        }
      if (u = u.concat(b).sort(function(h, _) {
        return h.index - _.index;
      }), b = [], !i) {
        if (v > 0) {
          v -= 1;
          continue;
        }
        r !== null && c.length > 0 && (p = this.plugins.table.createCells.call(this, c[0].nodeName, 0, !0), p = s.insertBefore(p, c[r]));
      }
    }
    if (i) {
      let L, R;
      for (let s = 0, r = k.length, c; s < r; s++)
        c = k[s].parentNode, o.removeItem(k[s]), c.cells.length === 0 && (L || (L = o.getArrayIndex(n, c)), R = o.getArrayIndex(n, c), o.removeItem(c));
      for (let s = 0, r = x.length, c; s < r; s++)
        c = x[s], c.cell.rowSpan = o.getOverlapRangeAtIndex(L, R, c.i, c.rs);
      this.controllersOff();
    } else
      this.plugins.table.setPositionControllerDiv.call(this, t || l._tdElement, !0);
  },
  _closeSplitMenu: null,
  openSplitMenu: function() {
    this.util.addClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "inline-table", this.plugins.table._closeSplitMenu = (function() {
      this.util.removeClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "none", this.removeDocEvent("click", this.plugins.table._closeSplitMenu), this.plugins.table._closeSplitMenu = null;
    }).bind(this), this.addDocEvent("click", this.plugins.table._closeSplitMenu);
  },
  splitCells: function(e) {
    const t = this.util, l = e === "vertical", o = this.context.table, i = o._tdElement, a = o._trElements, d = o._trElement, f = o._logical_cellIndex, n = o._rowIndex, b = this.plugins.table.createCells.call(this, i.nodeName, 0, !0);
    if (l) {
      const u = i.colSpan;
      if (b.rowSpan = i.rowSpan, u > 1)
        b.colSpan = this._w.Math.floor(u / 2), i.colSpan = u - b.colSpan, d.insertBefore(b, i.nextElementSibling);
      else {
        let v = [], k = [];
        for (let x = 0, L = o._rowCnt, R, s; x < L; x++) {
          R = a[x].cells, s = 0;
          for (let r = 0, c = R.length, p, m, g, h; r < c; r++) {
            if (p = R[r], m = p.colSpan - 1, g = p.rowSpan - 1, h = r + s, k.length > 0)
              for (let _ = 0, C; _ < k.length; _++)
                C = k[_], !(C.row > x) && (h >= C.index ? (s += C.cs, h += C.cs, C.rs -= 1, C.row = x + 1, C.rs < 1 && (k.splice(_, 1), _--)) : r === c - 1 && (C.rs -= 1, C.row = x + 1, C.rs < 1 && (k.splice(_, 1), _--)));
            if (h <= f && g > 0 && v.push({
              index: h,
              cs: m + 1,
              rs: g,
              row: -1
            }), p !== i && h <= f && h + m >= f + u - 1) {
              p.colSpan += 1;
              break;
            }
            if (h > f) break;
            s += m;
          }
          k = k.concat(v).sort(function(r, c) {
            return r.index - c.index;
          }), v = [];
        }
        d.insertBefore(b, i.nextElementSibling);
      }
    } else {
      const u = i.rowSpan;
      if (b.colSpan = i.colSpan, u > 1) {
        b.rowSpan = this._w.Math.floor(u / 2);
        const v = u - b.rowSpan, k = [], x = t.getArrayIndex(a, d) + v;
        for (let r = 0, c, p; r < x; r++) {
          c = a[r].cells, p = 0;
          for (let m = 0, g = c.length, h, _, C; m < g && (C = m + p, !(C >= f)); m++)
            h = c[m], _ = h.rowSpan - 1, _ > 0 && _ + r >= x && C < f && k.push({
              index: C,
              cs: h.colSpan
            }), p += h.colSpan - 1;
        }
        const L = a[x], R = L.cells;
        let s = k.shift();
        for (let r = 0, c = R.length, p = 0, m, g, h, _; r < c; r++) {
          if (h = r + p, m = R[r], g = m.colSpan - 1, _ = h + g + 1, s && _ >= s.index && (p += s.cs, _ += s.cs, s = k.shift()), _ >= f || r === c - 1) {
            L.insertBefore(b, m.nextElementSibling);
            break;
          }
          p += g;
        }
        i.rowSpan = v;
      } else {
        b.rowSpan = i.rowSpan;
        const v = t.createElement("TR");
        v.appendChild(b);
        for (let L = 0, R; L < n; L++) {
          if (R = a[L].cells, R.length === 0) return;
          for (let s = 0, r = R.length; s < r; s++)
            L + R[s].rowSpan - 1 >= n && (R[s].rowSpan += 1);
        }
        const k = o._physical_cellIndex, x = d.cells;
        for (let L = 0, R = x.length; L < R; L++)
          L !== k && (x[L].rowSpan += 1);
        d.parentNode.insertBefore(v, d.nextElementSibling);
      }
    }
    this.focusEdge(i), this.plugins.table.setPositionControllerDiv.call(this, i, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, l = this.util, o = e._ref, i = e._selectedCells, a = i[0];
    let d = null, f = null, n = o.ce - o.cs + 1, b = o.re - o.rs + 1, u = "", v = null;
    for (let k = 1, x = i.length, L, R; k < x; k++) {
      L = i[k], v !== L.parentNode && (v = L.parentNode), R = L.children;
      for (let s = 0, r = R.length; s < r; s++)
        l.isFormatElement(R[s]) && l.onlyZeroWidthSpace(R[s].textContent) && l.removeItem(R[s]);
      u += L.innerHTML, l.removeItem(L), v.cells.length === 0 && (d ? f = v : d = v, b -= 1);
    }
    if (d) {
      const k = t._trElements, x = l.getArrayIndex(k, d), L = l.getArrayIndex(k, f || d), R = [];
      for (let s = 0, r; s <= L; s++) {
        if (r = k[s].cells, r.length === 0) {
          R.push(k[s]);
          continue;
        }
        for (let c = 0, p = r.length, m, g; c < p; c++)
          m = r[c], g = m.rowSpan - 1, g > 0 && s + g >= x && (m.rowSpan -= l.getOverlapRangeAtIndex(x, L, s, s + g));
      }
      for (let s = 0, r = R.length; s < r; s++)
        l.removeItem(R[s]);
    }
    a.innerHTML += u, a.colSpan = n, a.rowSpan = b, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, a), l.addClass(a, "se-table-selected-cell"), this.focusEdge(a);
  },
  toggleHeader: function() {
    const e = this.util, t = this.context.table.headerButton, l = e.hasClass(t, "active"), o = this.context.table._element;
    if (l)
      e.removeItem(o.querySelector("thead"));
    else {
      const i = e.createElement("THEAD");
      i.innerHTML = "<tr>" + this.plugins.table.createCells.call(this, "th", this.context.table._logical_cellCnt, !1) + "</tr>", o.insertBefore(i, o.firstElementChild);
    }
    e.toggleClass(t, "active"), /TH/i.test(this.context.table._tdElement.nodeName) ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, !1);
  },
  setTableStyle: function(e) {
    const t = this.context.table, l = t._element;
    let o, i, a, d;
    e.indexOf("width") > -1 && (o = t.resizeButton.firstElementChild, i = t.resizeText, t._maxWidth ? (a = t.icons.reduction, d = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(l, "se-table-size-auto"), this.util.addClass(l, "se-table-size-100")) : (a = t.icons.expansion, d = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(l, "se-table-size-100"), this.util.addClass(l, "se-table-size-auto")), this.util.changeElement(o, a), this.util.changeTxt(i, d)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(l, "se-table-layout-auto"), this.util.addClass(l, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(l, "se-table-layout-fixed"), this.util.addClass(l, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
  },
  setActiveButton: function(e, t) {
    const l = this.context.table;
    /^TH$/i.test(e.nodeName) ? (l.insertRowAboveButton.setAttribute("disabled", !0), l.insertRowBelowButton.setAttribute("disabled", !0)) : (l.insertRowAboveButton.removeAttribute("disabled"), l.insertRowBelowButton.removeAttribute("disabled")), !t || e === t ? (l.splitButton.removeAttribute("disabled"), l.mergeButton.setAttribute("disabled", !0)) : (l.splitButton.setAttribute("disabled", !0), l.mergeButton.removeAttribute("disabled"));
  },
  // multi selecte
  _bindOnSelect: null,
  _bindOffSelect: null,
  _bindOffShift: null,
  _selectedCells: null,
  _shift: !1,
  _fixedCell: null,
  _fixedCellName: null,
  _selectedCell: null,
  _selectedTable: null,
  _ref: null,
  _toggleEditor: function(e) {
    this.context.element.wysiwyg.setAttribute("contenteditable", e), e ? this.util.removeClass(this.context.element.wysiwyg, "se-disabled") : this.util.addClass(this.context.element.wysiwyg, "se-disabled");
  },
  _offCellMultiSelect: function(e) {
    e.stopPropagation();
    const t = this.plugins.table;
    t._shift ? t._initBind && (this._wd.removeEventListener("touchmove", t._initBind), t._initBind = null) : (t._removeEvents.call(this), t._toggleEditor.call(this, !0)), !(!t._fixedCell || !t._selectedTable) && (t.setActiveButton.call(this, t._fixedCell, t._selectedCell), t.call_controller_tableEdit.call(this, t._selectedCell || t._fixedCell), t._selectedCells = t._selectedTable.querySelectorAll(".se-table-selected-cell"), t._selectedCell && t._fixedCell && this.focusEdge(t._selectedCell), t._shift || (t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null));
  },
  _onCellMultiSelect: function(e) {
    this._antiBlur = !0;
    const t = this.plugins.table, l = this.util.getParentElement(e.target, this.util.isCell);
    if (t._shift)
      l === t._fixedCell ? t._toggleEditor.call(this, !0) : t._toggleEditor.call(this, !1);
    else if (!t._ref) {
      if (l === t._fixedCell) return;
      t._toggleEditor.call(this, !1);
    }
    !l || l === t._selectedCell || t._fixedCellName !== l.nodeName || t._selectedTable !== this.util.getParentElement(l, "TABLE") || (t._selectedCell = l, t._setMultiCells.call(this, t._fixedCell, l));
  },
  _setMultiCells: function(e, t) {
    const l = this.plugins.table, o = l._selectedTable.rows, i = this.util, a = l._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let u = 0, v = a.length; u < v; u++)
      i.removeClass(a[u], "se-table-selected-cell");
    if (e === t && (i.addClass(e, "se-table-selected-cell"), !l._shift))
      return;
    let d = !0, f = [], n = [];
    const b = l._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let u = 0, v = o.length, k, x; u < v; u++) {
      k = o[u].cells, x = 0;
      for (let L = 0, R = k.length, s, r, c, p; L < R; L++) {
        if (s = k[L], c = s.colSpan - 1, p = s.rowSpan - 1, r = L + x, f.length > 0)
          for (let m = 0, g; m < f.length; m++)
            g = f[m], !(g.row > u) && (r >= g.index ? (x += g.cs, r += g.cs, g.rs -= 1, g.row = u + 1, g.rs < 1 && (f.splice(m, 1), m--)) : L === R - 1 && (g.rs -= 1, g.row = u + 1, g.rs < 1 && (f.splice(m, 1), m--)));
        if (d) {
          if ((s === e || s === t) && (b.cs = b.cs !== null && b.cs < r ? b.cs : r, b.ce = b.ce !== null && b.ce > r + c ? b.ce : r + c, b.rs = b.rs !== null && b.rs < u ? b.rs : u, b.re = b.re !== null && b.re > u + p ? b.re : u + p, b._i += 1), b._i === 2) {
            d = !1, f = [], n = [], u = -1;
            break;
          }
        } else if (i.getOverlapRangeAtIndex(b.cs, b.ce, r, r + c) && i.getOverlapRangeAtIndex(b.rs, b.re, u, u + p)) {
          const m = b.cs < r ? b.cs : r, g = b.ce > r + c ? b.ce : r + c, h = b.rs < u ? b.rs : u, _ = b.re > u + p ? b.re : u + p;
          if (b.cs !== m || b.ce !== g || b.rs !== h || b.re !== _) {
            b.cs = m, b.ce = g, b.rs = h, b.re = _, u = -1, f = [], n = [];
            break;
          }
          i.addClass(s, "se-table-selected-cell");
        }
        p > 0 && n.push({
          index: r,
          cs: c + 1,
          rs: p,
          row: -1
        }), x += s.colSpan - 1;
      }
      f = f.concat(n).sort(function(L, R) {
        return L.index - R.index;
      }), n = [];
    }
  },
  _removeEvents: function() {
    const e = this.plugins.table;
    e._initBind && (this._wd.removeEventListener("touchmove", e._initBind), e._initBind = null), e._bindOnSelect && (this._wd.removeEventListener("mousedown", e._bindOnSelect), this._wd.removeEventListener("mousemove", e._bindOnSelect), e._bindOnSelect = null), e._bindOffSelect && (this._wd.removeEventListener("mouseup", e._bindOffSelect), e._bindOffSelect = null), e._bindOffShift && (this._wd.removeEventListener("keyup", e._bindOffShift), e._bindOffShift = null);
  },
  _initBind: null,
  onTableCellMultiSelect: function(e, t) {
    const l = this.plugins.table;
    l._removeEvents.call(this), this.controllersOff(), l._shift = t, l._fixedCell = e, l._fixedCellName = e.nodeName, l._selectedTable = this.util.getParentElement(e, "TABLE");
    const o = l._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let i = 0, a = o.length; i < a; i++)
      this.util.removeClass(o[i], "se-table-selected-cell");
    this.util.addClass(e, "se-table-selected-cell"), l._bindOnSelect = l._onCellMultiSelect.bind(this), l._bindOffSelect = l._offCellMultiSelect.bind(this), t ? (l._bindOffShift = (function() {
      this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), l._ref || this.controllersOff();
    }).bind(this), this._wd.addEventListener("keyup", l._bindOffShift, !1), this._wd.addEventListener("mousedown", l._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", l._bindOnSelect, !1), this._wd.addEventListener("mouseup", l._bindOffSelect, !1), l._initBind = l.init.bind(this), this._wd.addEventListener("touchmove", l._initBind, !1);
  },
  onClick_tableController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
    if (t.getAttribute("disabled")) return;
    const l = t.getAttribute("data-command"), o = t.getAttribute("data-value"), i = t.getAttribute("data-option"), a = this.plugins.table;
    if (typeof a._closeSplitMenu == "function" && (a._closeSplitMenu(), l === "onsplit") || !l) return;
    e.preventDefault();
    const d = this.context.table;
    switch (l) {
      case "insert":
      case "delete":
        a.editTable.call(this, o, i);
        break;
      case "header":
        a.toggleHeader.call(this);
        break;
      case "onsplit":
        a.openSplitMenu.call(this);
        break;
      case "split":
        a.splitCells.call(this, o);
        break;
      case "merge":
        a.mergeCells.call(this);
        break;
      case "resize":
        d._maxWidth = !d._maxWidth, a.setTableStyle.call(this, "width"), a.setPositionControllerTop.call(this, d._element), a.setPositionControllerDiv.call(this, d._tdElement, a._shift);
        break;
      case "layout":
        d._fixedColumn = !d._fixedColumn, a.setTableStyle.call(this, "column"), a.setPositionControllerTop.call(this, d._element), a.setPositionControllerDiv.call(this, d._tdElement, a._shift);
        break;
      case "remove":
        const f = d._element.parentNode;
        this.util.removeItem(d._element), this.controllersOff(), f !== this.context.element.wysiwyg && this.util.removeItemAllParents(f, function(n) {
          return n.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, ir = {
  name: "formatBlock",
  display: "submenu",
  add: function(e, t) {
    const l = e.context;
    l.formatBlock = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _formatList: null,
      currentFormat: ""
    };
    let o = this.setSubmenu(e);
    o.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), l.formatBlock._formatList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.options, l = e.lang.toolbar, o = e.util.createElement("DIV");
    o.className = "se-submenu se-list-layer se-list-format";
    const i = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], a = !t.formats || t.formats.length === 0 ? i : t.formats;
    let d = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, n = a.length, b, u, v, k, x, L, R; f < n; f++)
      b = a[f], typeof b == "string" && i.indexOf(b) > -1 ? (u = b.toLowerCase(), v = u === "blockquote" ? "range" : u === "pre" ? "free" : "replace", x = /^h/.test(u) ? u.match(/\d+/)[0] : "", k = l["tag_" + (x ? "h" : u)] + x, R = "", L = "") : (u = b.tag.toLowerCase(), v = b.command, k = b.name || u, R = b.class, L = R ? ' class="' + R + '"' : ""), d += '<li><button type="button" class="se-btn-list" data-command="' + v + '" data-value="' + u + '" data-class="' + R + '" title="' + k + '" aria-label="' + k + '"><' + u + L + ">" + k + "</" + u + "></button></li>";
    return d += "</ul></div>", o.innerHTML = d, o;
  },
  /**
  * @Override core
  */
  active: function(e) {
    let t = this.lang.toolbar.formats;
    const l = this.context.formatBlock.targetText;
    if (!e)
      this.util.changeTxt(l, t);
    else if (this.util.isFormatElement(e)) {
      const i = this.context.formatBlock._formatList, a = e.nodeName.toLowerCase(), d = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let f = 0, n = i.length, b; f < n; f++)
        if (b = i[f], a === b.getAttribute("data-value") && d === b.getAttribute("data-class")) {
          t = b.title;
          break;
        }
      return this.util.changeTxt(l, t), l.setAttribute("data-value", a), l.setAttribute("data-class", d), !0;
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.formatBlock, t = e._formatList, l = e.targetText, o = (l.getAttribute("data-value") || "") + (l.getAttribute("data-class") || "");
    if (o !== e.currentFormat) {
      for (let i = 0, a = t.length, d; i < a; i++)
        d = t[i], o === d.getAttribute("data-value") + d.getAttribute("data-class") ? this.util.addClass(d, "active") : this.util.removeClass(d, "active");
      e.currentFormat = o;
    }
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, l = null, o = null, i = null, a = "";
    for (; !l && !/UL/i.test(t.tagName); ) {
      if (l = t.getAttribute("data-command"), o = t.getAttribute("data-value"), a = t.getAttribute("data-class"), l) {
        i = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (l) {
      if (l === "range") {
        const d = i.cloneNode(!1);
        this.applyRangeFormatElement(d);
      } else {
        let d = this.getRange(), f = this.getSelectedElementsAndComponents(!1);
        if (f.length === 0 && (d = this.getRange_addLine(d, null), f = this.getSelectedElementsAndComponents(!1), f.length === 0))
          return;
        const n = d.startOffset, b = d.endOffset, u = this.util;
        let v = f[0], k = f[f.length - 1];
        const x = u.getNodePath(d.startContainer, v, null, null), L = u.getNodePath(d.endContainer, k, null, null), R = this.detachList(f, !1);
        R.sc && (v = R.sc), R.ec && (k = R.ec), this.setRange(u.getNodeFromPath(x, v), n, u.getNodeFromPath(L, k), b);
        const s = this.getSelectedElementsAndComponents(!1);
        if (l === "free") {
          const r = s.length - 1;
          let c = s[r].parentNode, p = i.cloneNode(!1);
          const m = p;
          for (let g = r, h, _, C, y, S, V, T = !0; g >= 0; g--)
            if (h = s[g], h !== (s[g + 1] ? s[g + 1].parentNode : null)) {
              if (V = u.isComponent(h), _ = V ? "" : h.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), C = u.getParentElement(h, function(z) {
                return z.parentNode === c;
              }), (c !== h.parentNode || V) && (u.isFormatElement(c) ? (c.parentNode.insertBefore(p, c.nextSibling), c = c.parentNode) : (c.insertBefore(p, C ? C.nextSibling : null), c = h.parentNode), y = p.nextSibling, y && p.nodeName === y.nodeName && u.isSameAttributes(p, y) && (p.innerHTML += "<BR>" + y.innerHTML, u.removeItem(y)), p = i.cloneNode(!1), T = !0), S = p.innerHTML, p.innerHTML = (T || !_ || !S || /<br>$/i.test(_) ? _ : _ + "<BR>") + S, g === 0) {
                c.insertBefore(p, h), y = h.nextSibling, y && p.nodeName === y.nodeName && u.isSameAttributes(p, y) && (p.innerHTML += "<BR>" + y.innerHTML, u.removeItem(y));
                const z = p.previousSibling;
                z && p.nodeName === z.nodeName && u.isSameAttributes(p, z) && (z.innerHTML += "<BR>" + p.innerHTML, u.removeItem(p));
              }
              V || u.removeItem(h), _ && (T = !1);
            }
          this.setRange(m, 0, m, 0);
        } else {
          for (let r = 0, c = s.length, p, m; r < c; r++)
            p = s[r], (p.nodeName.toLowerCase() !== o.toLowerCase() || (p.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== a) && !u.isComponent(p) && (m = i.cloneNode(!1), u.copyFormatAttributes(m, p), m.innerHTML = p.innerHTML, p.parentNode.replaceChild(m, p)), r === 0 && (v = m || p), r === c - 1 && (k = m || p), m = null;
          this.setRange(u.getNodeFromPath(x, v), n, u.getNodeFromPath(L, k), b);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, lr = {
  name: "lineHeight",
  display: "submenu",
  add: function(e, t) {
    const l = e.context;
    l.lineHeight = {
      _sizeList: null,
      currentSize: -1
    };
    let o = this.setSubmenu(e), i = o.querySelector("ul");
    i.addEventListener("click", this.pickup.bind(e)), l.lineHeight._sizeList = i.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null, i = null;
  },
  setSubmenu: function(e) {
    const t = e.options, l = e.lang, o = e.util.createElement("DIV");
    o.className = "se-submenu se-list-layer";
    const i = t.lineHeights ? t.lineHeights : [
      { text: "1", value: 1 },
      { text: "1.15", value: 1.15 },
      { text: "1.5", value: 1.5 },
      { text: "2", value: 2 }
    ];
    let a = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + l.toolbar.default + '" aria-label="' + l.toolbar.default + '">(' + l.toolbar.default + ")</button></li>";
    for (let d = 0, f = i.length, n; d < f; d++)
      n = i[d], a += '<li><button type="button" class="se-btn-list" data-value="' + n.value + '" title="' + n.text + '" aria-label="' + n.text + '">' + n.text + "</button></li>";
    return a += "</ul></div>", o.innerHTML = a, o;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.lineHeight, t = e._sizeList, l = this.util.getFormatElement(this.getSelectionNode()), o = l ? l.style.lineHeight + "" : "";
    if (o !== e.currentSize) {
      for (let i = 0, a = t.length; i < a; i++)
        o === t[i].getAttribute("data-value") ? this.util.addClass(t[i], "active") : this.util.removeClass(t[i], "active");
      e.currentSize = o;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value") || "", l = this.getSelectedElements();
    for (let o = 0, i = l.length; o < i; o++)
      l[o].style.lineHeight = t;
    this.submenuOff(), this.history.push(!1);
  }
}, nr = {
  name: "template",
  display: "submenu",
  add: function(e, t) {
    const l = e.context;
    l.template = {
      selectedIndex: -1
    };
    let o = this.setSubmenu(e);
    o.querySelector("ul").addEventListener("click", this.pickup.bind(e)), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.options.templates;
    if (!t || t.length === 0)
      throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
    const l = e.util.createElement("DIV");
    l.className = "se-list-layer";
    let o = '<div class="se-submenu se-list-inner"><ul class="se-list-basic">';
    for (let i = 0, a = t.length, d; i < a; i++)
      d = t[i], o += '<li><button type="button" class="se-btn-list" data-value="' + i + '" title="' + d.name + '" aria-label="' + d.name + '">' + d.name + "</button></li>";
    return o += "</ul></div>", l.innerHTML = o, l;
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation(), this.context.template.selectedIndex = e.target.getAttribute("data-value") * 1;
    const t = this.options.templates[this.context.template.selectedIndex];
    if (t.html)
      this.setContents(t.html);
    else
      throw this.submenuOff(), Error('[SUNEDITOR.template.fail] cause : "templates[i].html not found"');
    this.submenuOff();
  }
}, or = {
  name: "paragraphStyle",
  display: "submenu",
  add: function(e, t) {
    const l = e.context;
    l.paragraphStyle = {
      _classList: null
    };
    let o = this.setSubmenu(e);
    o.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), l.paragraphStyle._classList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.options, l = e.util.createElement("DIV");
    l.className = "se-submenu se-list-layer se-list-format";
    const o = e.lang.menu, i = {
      spaced: {
        name: o.spaced,
        class: "__se__p-spaced",
        _class: ""
      },
      bordered: {
        name: o.bordered,
        class: "__se__p-bordered",
        _class: ""
      },
      neon: {
        name: o.neon,
        class: "__se__p-neon",
        _class: ""
      }
    }, a = !t.paragraphStyles || t.paragraphStyles.length === 0 ? ["spaced", "bordered", "neon"] : t.paragraphStyles;
    let d = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, n = a.length, b, u, v, k; f < n; f++) {
      if (b = a[f], typeof b == "string") {
        const x = i[b.toLowerCase()];
        if (!x) continue;
        b = x;
      }
      u = b.name, v = b.class ? ' class="' + b.class + '"' : "", k = b._class, d += '<li><button type="button" class="se-btn-list' + (k ? " " + k : "") + '" data-value="' + b.class + '" title="' + u + '" aria-label="' + u + '"><div' + v + ">" + u + "</div></button></li>";
    }
    return d += "</ul></div>", l.innerHTML = d, l;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const t = this.context.paragraphStyle._classList, l = this.util.getFormatElement(this.getSelectionNode());
    for (let o = 0, i = t.length; o < i; o++)
      this.util.hasClass(l, t[o].getAttribute("data-value")) ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, l = null;
    for (; !/^UL$/i.test(t.tagName) && (l = t.getAttribute("data-value"), !l); )
      t = t.parentNode;
    if (!l) return;
    let o = this.getSelectedElements();
    if (o.length === 0 && (this.getRange_addLine(this.getRange(), null), o = this.getSelectedElements(), o.length === 0))
      return;
    const i = this.util.hasClass(t, "active") ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
    for (let a = 0, d = o.length; a < d; a++)
      i(o[a], l);
    this.submenuOff(), this.history.push(!1);
  }
}, sr = {
  name: "textStyle",
  display: "submenu",
  add: function(e, t) {
    const l = e.context;
    l.textStyle = {
      _styleList: null
    };
    let o = this.setSubmenu(e), i = o.querySelector("ul");
    i.addEventListener("click", this.pickup.bind(e)), l.textStyle._styleList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null, i = null;
  },
  setSubmenu: function(e) {
    const t = e.options, l = e.util.createElement("DIV");
    l.className = "se-submenu se-list-layer se-list-format";
    const o = {
      code: {
        name: e.lang.menu.code,
        class: "__se__t-code",
        tag: "code"
      },
      translucent: {
        name: e.lang.menu.translucent,
        style: "opacity: 0.5;",
        tag: "span"
      },
      shadow: {
        name: e.lang.menu.shadow,
        class: "__se__t-shadow",
        tag: "span"
      }
    }, i = t.textStyles ? t.textStyles : e._w.Object.keys(o);
    let a = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let d = 0, f = i.length, n, b, u, v, k, x, L; d < f; d++) {
      if (n = i[d], v = "", x = "", k = [], typeof n == "string") {
        const R = o[n.toLowerCase()];
        if (!R) continue;
        n = R;
      }
      u = n.name, b = n.tag || "span", L = n._class, n.style && (v += ' style="' + n.style + '"', x += n.style.replace(/:[^;]+(;|$)\s*/g, ","), k.push("style")), n.class && (v += ' class="' + n.class + '"', x += "." + n.class.trim().replace(/\s+/g, ",."), k.push("class")), x = x.replace(/,$/, ""), a += '<li><button type="button" class="se-btn-list' + (L ? " " + L : "") + '" data-command="' + b + '" data-value="' + x + '" title="' + u + '" aria-label="' + u + '"><' + b + v + ">" + u + "</" + b + "></button></li>";
    }
    return a += "</ul></div>", l.innerHTML = a, l;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, l = this.context.textStyle._styleList, o = this.getSelectionNode();
    for (let i = 0, a = l.length, d, f, n; i < a; i++) {
      d = l[i], f = d.getAttribute("data-value").split(",");
      for (let b = 0, u, v; b < f.length; b++) {
        for (u = o, n = !1; u && !e.isFormatElement(u) && !e.isComponent(u); ) {
          if (u.nodeName.toLowerCase() === d.getAttribute("data-command").toLowerCase() && (v = f[b], /^\./.test(v) ? e.hasClass(u, v.replace(/^\./, "")) : u.style[v])) {
            n = !0;
            break;
          }
          u = u.parentNode;
        }
        if (!n) break;
      }
      n ? e.addClass(d, "active") : e.removeClass(d, "active");
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, l = null, o = null;
    for (; !l && !/UL/i.test(t.tagName); ) {
      if (l = t.getAttribute("data-command"), l) {
        o = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!l) return;
    const i = o.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
    i.pop();
    const a = o.classList;
    for (let n = 0, b = a.length; n < b; n++)
      i.push("." + a[n]);
    const d = this.util.hasClass(t, "active") ? null : o.cloneNode(!1), f = d ? null : [o.nodeName];
    this.nodeChange(d, i, f, !0), this.submenuOff();
  }
};
var Bi = { exports: {} }, ar = Bi.exports, rn;
function rr() {
  return rn || (rn = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : ar, function(t, l) {
      const o = {
        name: "dialog",
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function(i) {
          const a = i.context;
          a.dialog = {
            kind: "",
            updateModal: !1,
            _closeSignal: !1
          };
          let d = i.util.createElement("DIV");
          d.className = "se-dialog sun-editor-common";
          let f = i.util.createElement("DIV");
          f.className = "se-dialog-back", f.style.display = "none";
          let n = i.util.createElement("DIV");
          n.className = "se-dialog-inner", n.style.display = "none", d.appendChild(f), d.appendChild(n), a.dialog.modalArea = d, a.dialog.back = f, a.dialog.modal = n, a.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(i)), a.dialog.modal.addEventListener("click", this._onClick_dialog.bind(i)), a.element.relative.appendChild(d), d = null, f = null, n = null;
        },
        /**
         * @description Event to control the behavior of closing the dialog
         * @param {MouseEvent} e Event object
         * @private
         */
        _onMouseDown_dialog: function(i) {
          /se-dialog-inner/.test(i.target.className) ? this.context.dialog._closeSignal = !0 : this.context.dialog._closeSignal = !1;
        },
        /**
         * @description Event to close the window when the outside area of the dialog or close button is click
         * @param {MouseEvent} e Event object
         * @private
         */
        _onClick_dialog: function(i) {
          (/close/.test(i.target.getAttribute("data-command")) || this.context.dialog._closeSignal) && this.plugins.dialog.close.call(this);
        },
        /**
         * @description Open a Dialog plugin
         * @param {String} kind Dialog plugin name
         * @param {Boolean} update Whether it will open for update ('image' === this.currentControllerName)
         */
        open: function(i, a) {
          if (this.modalForm) return !1;
          this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = (function(f) {
            /27/.test(f.keyCode) && this.plugins.dialog.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = a, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = i, this.modalForm = this.context[i].modal;
          const d = this.context[i].focusElement;
          typeof this.plugins[i].on == "function" && this.plugins[i].on.call(this, a), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", d && d.focus();
        },
        _bindClose: null,
        /**
         * @description Close a Dialog plugin
         * The plugin's "init" method is called.
         */
        close: function() {
          this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null);
          const i = this.context.dialog.kind;
          this.modalForm.style.display = "none", this.context.dialog.back.style.display = "none", this.context.dialog.modalArea.style.display = "none", this.context.dialog.updateModal = !1, typeof this.plugins[i].init == "function" && this.plugins[i].init.call(this), this.context.dialog.kind = "", this.modalForm = null, this.focus();
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "dialog", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: o
      })), o;
    });
  }(Bi)), Bi.exports;
}
var ur = /* @__PURE__ */ rr();
const Kt = /* @__PURE__ */ Se(ur), dr = {
  name: "selectMenu",
  add: function(e) {
    e.context.selectMenu = {
      caller: {},
      callerContext: null
    };
  },
  setForm: function() {
    return '<div class="se-select-list"></div>';
  },
  createList: function(e, t, l) {
    e.form.innerHTML = "<ul>" + l + "</ul>", e.items = t, e.menus = e.form.querySelectorAll("li");
  },
  initEvent: function(e, t) {
    const l = t.querySelector(".se-select-list"), o = this.context.selectMenu.caller[e] = {
      form: l,
      items: [],
      menus: [],
      index: -1,
      item: null,
      clickMethod: null,
      callerName: e
    };
    l.addEventListener("mousedown", this.plugins.selectMenu.onMousedown_list), l.addEventListener("mousemove", this.plugins.selectMenu.onMouseMove_list.bind(this, o)), l.addEventListener("click", this.plugins.selectMenu.onClick_list.bind(this, o));
  },
  onMousedown_list: function(e) {
    e.preventDefault(), e.stopPropagation();
  },
  onMouseMove_list: function(e, t) {
    this.util.addClass(e.form, "__se_select-menu-mouse-move");
    const l = t.target.getAttribute("data-index");
    l && (e.index = l * 1);
  },
  onClick_list: function(e, t) {
    const l = t.target.getAttribute("data-index");
    l && e.clickMethod.call(this, e.items[l]);
  },
  moveItem: function(e, t) {
    this.util.removeClass(e.form, "__se_select-menu-mouse-move"), t = e.index + t;
    const l = e.menus, o = l.length, i = e.index = t >= o ? 0 : t < 0 ? o - 1 : t;
    for (let a = 0; a < o; a++)
      a === i ? this.util.addClass(l[a], "active") : this.util.removeClass(l[a], "active");
    e.item = e.items[i];
  },
  getItem: function(e, t) {
    return t = !t || t < 0 ? e.index : t, e.items[t];
  },
  on: function(e, t) {
    const l = this.context.selectMenu.caller[e];
    this.context.selectMenu.callerContext = l, l.clickMethod = t, l.callerName = e;
  },
  open: function(e, t) {
    const l = e.form;
    l.style.visibility = "hidden", l.style.display = "block", t(l), l.style.visibility = "";
  },
  close: function(e) {
    e.form.style.display = "none", e.items = [], e.menus = [], e.index = -1, e.item = null;
  },
  init: function(e) {
    e && (e.items = [], e.menus = [], e.index = -1, e.item = null, e.callerName = "", this.context.selectMenu.callerContext = null);
  }
}, eo = {
  name: "anchor",
  add: function(e) {
    e.addModule([dr]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, l = e.options.linkRel, o = (e.options.linkRelDefault.default || "").split(" "), i = e.icons, a = e.util.createElement("DIV");
    let d = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + i.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + i.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + i.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (l.length > 0) {
      d += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let f = 0, n = l.length, b; f < n; f++)
        b = l[f], d += '<li><button type="button" class="se-btn-list' + (o.indexOf(b) > -1 ? " se-checked" : "") + '" data-command="' + b + '" title="' + b + '" aria-label="' + b + '"><span class="se-svg">' + i.checked + "</span>" + b + "</button></li>";
      d += "</ul></div></div></div>";
    }
    return d += "</div></div>", a.innerHTML = d, a;
  },
  initEvent: function(e, t) {
    const l = this.plugins.anchor, o = this.context.anchor.caller[e] = {
      modal: t,
      urlInput: null,
      linkDefaultRel: this.options.linkRelDefault,
      defaultRel: this.options.linkRelDefault.default || "",
      currentRel: [],
      linkAnchor: null,
      linkValue: "",
      _change: !1,
      callerName: e
    };
    typeof o.linkDefaultRel.default == "string" && (o.linkDefaultRel.default = o.linkDefaultRel.default.trim()), typeof o.linkDefaultRel.check_new_window == "string" && (o.linkDefaultRel.check_new_window = o.linkDefaultRel.check_new_window.trim()), typeof o.linkDefaultRel.check_bookmark == "string" && (o.linkDefaultRel.check_bookmark = o.linkDefaultRel.check_bookmark.trim()), o.urlInput = t.querySelector(".se-input-url"), o.anchorText = t.querySelector("._se_anchor_text"), o.newWindowCheck = t.querySelector("._se_anchor_check"), o.downloadCheck = t.querySelector("._se_anchor_download"), o.download = t.querySelector("._se_anchor_download_icon"), o.preview = t.querySelector(".se-link-preview"), o.bookmark = t.querySelector("._se_anchor_bookmark_icon"), o.bookmarkButton = t.querySelector("._se_bookmark_button"), this.plugins.selectMenu.initEvent.call(this, e, t);
    const i = this.context.selectMenu.caller[e];
    this.options.linkRel.length > 0 && (o.relButton = t.querySelector(".se-anchor-rel-btn"), o.relList = t.querySelector(".se-list-layer"), o.relPreview = t.querySelector(".se-anchor-rel-preview"), o.relButton.addEventListener("click", l.onClick_relButton.bind(this, o)), o.relList.addEventListener("click", l.onClick_relList.bind(this, o))), o.newWindowCheck.addEventListener("change", l.onChange_newWindowCheck.bind(this, o)), o.downloadCheck.addEventListener("change", l.onChange_downloadCheck.bind(this, o)), o.anchorText.addEventListener("input", l.onChangeAnchorText.bind(this, o)), o.urlInput.addEventListener("input", l.onChangeUrlInput.bind(this, o)), o.urlInput.addEventListener("keydown", l.onKeyDownUrlInput.bind(this, i)), o.urlInput.addEventListener("focus", l.onFocusUrlInput.bind(this, o, i)), o.urlInput.addEventListener("blur", l.onBlurUrlInput.bind(this, i)), o.bookmarkButton.addEventListener("click", l.onClick_bookmarkButton.bind(this, o));
  },
  on: function(e, t) {
    const l = this.plugins.anchor;
    if (!t)
      l.init.call(this, e), e.anchorText.value = this.getSelection().toString().trim(), e.newWindowCheck.checked = this.options.linkTargetNewWindow;
    else if (e.linkAnchor) {
      this.context.dialog.updateModal = !0;
      const o = e.linkAnchor.getAttribute("href");
      e.linkValue = e.preview.textContent = e.urlInput.value = l.selfPathBookmark.call(this, o) ? o.substr(o.lastIndexOf("#")) : o, e.anchorText.value = e.linkAnchor.textContent, e.newWindowCheck.checked = !!/_blank/i.test(e.linkAnchor.target), e.downloadCheck.checked = e.linkAnchor.download;
    }
    this.context.anchor.callerContext = e, l.setRel.call(this, e, t && e.linkAnchor ? e.linkAnchor.rel : e.defaultRel), l.setLinkPreview.call(this, e, e.linkValue), this.plugins.selectMenu.on.call(this, e.callerName, this.plugins.anchor.setHeaderBookmark);
  },
  selfPathBookmark: function(e) {
    const t = this._w.location.href.replace(/\/$/, "");
    return e.indexOf("#") === 0 || e.indexOf(t) === 0 && e.indexOf("#") === (t.indexOf("#") === -1 ? t.length : t.substr(0, t.indexOf("#")).length);
  },
  _closeRelMenu: null,
  toggleRelList: function(e, t) {
    if (!t)
      this.plugins.anchor._closeRelMenu && this.plugins.anchor._closeRelMenu();
    else {
      const l = e.relButton, o = e.relList;
      this.util.addClass(l, "active"), o.style.visibility = "hidden", o.style.display = "block", this.options.rtl ? o.style.left = l.offsetLeft - o.offsetWidth - 1 + "px" : o.style.left = l.offsetLeft + l.offsetWidth + 1 + "px", o.style.top = l.offsetTop + l.offsetHeight / 2 - o.offsetHeight / 2 + "px", o.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(i, a, d) {
        d && (i.relButton.contains(d.target) || i.relList.contains(d.target)) || (this.util.removeClass(a, "active"), i.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, l), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const l = t.target, o = l.getAttribute("data-command");
    if (!o) return;
    const i = e.currentRel, a = this.util.toggleClass(l, "se-checked"), d = i.indexOf(o);
    a ? d === -1 && i.push(o) : d > -1 && i.splice(d, 1), e.relPreview.title = e.relPreview.textContent = i.join(" ");
  },
  setRel: function(e, t) {
    const l = e.relList, o = e.currentRel = t ? t.split(" ") : [];
    if (!l) return;
    const i = l.querySelectorAll("button");
    for (let a = 0, d = i.length, f; a < d; a++)
      f = i[a].getAttribute("data-command"), o.indexOf(f) > -1 ? this.util.addClass(i[a], "se-checked") : this.util.removeClass(i[a], "se-checked");
    e.relPreview.title = e.relPreview.textContent = o.join(" ");
  },
  createHeaderList: function(e, t, l) {
    const o = this.util.getListChildren(this.context.element.wysiwyg, function(f) {
      return /h[1-6]/i.test(f.nodeName);
    });
    if (o.length === 0) return;
    const i = new this._w.RegExp("^" + l.replace(/^#/, ""), "i"), a = [];
    let d = "";
    for (let f = 0, n = o.length, b; f < n; f++)
      b = o[f], i.test(b.textContent) && (a.push(b), d += '<li class="se-select-item" data-index="' + f + '">' + b.textContent + "</li>");
    a.length === 0 ? this.plugins.selectMenu.close.call(this, t) : (this.plugins.selectMenu.createList(t, a, d), this.plugins.selectMenu.open.call(this, t, this.plugins.anchor._setMenuListPosition.bind(this, e)));
  },
  _setMenuListPosition: function(e, t) {
    t.style.top = e.urlInput.offsetHeight + 1 + "px";
  },
  onKeyDownUrlInput: function(e, t) {
    switch (t.keyCode) {
      case 38:
        t.preventDefault(), t.stopPropagation(), this.plugins.selectMenu.moveItem.call(this, e, -1);
        break;
      case 40:
        t.preventDefault(), t.stopPropagation(), this.plugins.selectMenu.moveItem.call(this, e, 1);
        break;
      case 13:
        e.index > -1 && (t.preventDefault(), t.stopPropagation(), this.plugins.anchor.setHeaderBookmark.call(this, this.plugins.selectMenu.getItem(e, null)));
        break;
    }
  },
  setHeaderBookmark: function(e) {
    const t = this.context.anchor.callerContext, l = e.id || "h_" + this._w.Math.random().toString().replace(/.+\./, "");
    e.id = l, t.urlInput.value = "#" + l, (!t.anchorText.value.trim() || !t._change) && (t.anchorText.value = e.textContent), this.plugins.anchor.setLinkPreview.call(this, t, t.urlInput.value), this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext), this.context.anchor.callerContext.urlInput.focus();
  },
  onChangeAnchorText: function(e, t) {
    e._change = !!t.target.value.trim();
  },
  onChangeUrlInput: function(e, t) {
    const l = t.target.value.trim();
    this.plugins.anchor.setLinkPreview.call(this, e, l), this.plugins.anchor.selfPathBookmark.call(this, l) ? this.plugins.anchor.createHeaderList.call(this, e, this.context.selectMenu.callerContext, l) : this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
  },
  onFocusUrlInput: function(e, t) {
    const l = e.urlInput.value;
    this.plugins.anchor.selfPathBookmark.call(this, l) && this.plugins.anchor.createHeaderList.call(this, e, t, l);
  },
  onBlurUrlInput: function(e) {
    this.plugins.selectMenu.close.call(this, e);
  },
  setLinkPreview: function(e, t) {
    const l = e.preview, o = this.options.linkProtocol, i = this.options.linkNoPrefix, a = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(o) === 0, d = o ? this._w.RegExp("^" + this.util.escapeStringRegexp(t.substr(0, o.length))).test(o) : !1;
    t = e.linkValue = l.textContent = t ? i ? t : o && !a && !d ? o + t : a ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
  },
  setCtx: function(e, t) {
    e && (t.linkAnchor = e, t.linkValue = e.href, t.currentRel = e.rel.split(" "));
  },
  updateAnchor: function(e, t, l, o, i) {
    !this.plugins.anchor.selfPathBookmark.call(this, t) && o.downloadCheck.checked ? e.setAttribute("download", l || t) : e.removeAttribute("download"), o.newWindowCheck.checked ? e.target = "_blank" : e.removeAttribute("target");
    const a = o.currentRel.join(" ");
    a ? e.rel = a : e.removeAttribute("rel"), e.href = t, i ? e.children.length === 0 && (e.textContent = "") : e.textContent = l;
  },
  createAnchor: function(e, t) {
    if (e.linkValue.length === 0) return null;
    const l = e.linkValue, o = e.anchorText, i = o.value.length === 0 ? l : o.value, a = e.linkAnchor || this.util.createElement("A");
    return this.plugins.anchor.updateAnchor.call(this, a, l, i, e, t), e.linkValue = e.preview.textContent = e.urlInput.value = e.anchorText.value = "", a;
  },
  onClick_bookmarkButton: function(e) {
    let t = e.urlInput.value;
    this.plugins.anchor.selfPathBookmark.call(this, t) ? (t = t.substr(1), e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active"), this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext)) : (t = "#" + t, e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active"), e.downloadCheck.checked = !1, e.download.style.display = "none", this.plugins.anchor.createHeaderList.call(this, e, this.context.selectMenu.callerContext, t)), e.urlInput.value = t, this.plugins.anchor.setLinkPreview.call(this, e, t), e.urlInput.focus();
  },
  onChange_newWindowCheck: function(e, t) {
    typeof e.linkDefaultRel.check_new_window == "string" && (t.target.checked ? this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relMerge.call(this, e, e.linkDefaultRel.check_new_window)) : this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relDelete.call(this, e, e.linkDefaultRel.check_new_window)));
  },
  onChange_downloadCheck: function(e, t) {
    t.target.checked ? (e.download.style.display = "block", e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active"), e.linkValue = e.preview.textContent = e.urlInput.value = e.urlInput.value.replace(/^\#+/, ""), typeof e.linkDefaultRel.check_bookmark == "string" && this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relMerge.call(this, e, e.linkDefaultRel.check_bookmark))) : (e.download.style.display = "none", typeof e.linkDefaultRel.check_bookmark == "string" && this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relDelete.call(this, e, e.linkDefaultRel.check_bookmark)));
  },
  _relMerge: function(e, t) {
    const l = e.currentRel;
    if (!t) return l.join(" ");
    if (/^only\:/.test(t))
      return t = t.replace(/^only\:/, "").trim(), e.currentRel = t.split(" "), t;
    const o = t.split(" ");
    for (let i = 0, a = o.length, d; i < a; i++)
      d = l.indexOf(o[i]), d === -1 && l.push(o[i]);
    return l.join(" ");
  },
  _relDelete: function(e, t) {
    if (!t) return e.currentRel.join(" ");
    /^only\:/.test(t) && (t = t.replace(/^only\:/, "").trim());
    const l = e.currentRel.join(" ").replace(this._w.RegExp(t + "\\s*"), "");
    return e.currentRel = l.split(" "), l;
  },
  init: function(e) {
    e.linkAnchor = null, e.linkValue = e.preview.textContent = e.urlInput.value = "", e.anchorText.value = "", e.newWindowCheck.checked = !1, e.downloadCheck.checked = !1, e._change = !1, this.plugins.anchor.setRel.call(this, e, e.defaultRel), e.relList && this.plugins.anchor.toggleRelList.call(this, e, !1), this.context.anchor.callerContext = null, this.plugins.selectMenu.init.call(this, this.context.selectMenu.callerContext);
  }
}, cr = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([Kt, eo]);
    const t = e.context, l = t.link = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      _linkAnchor: null,
      anchorCtx: null
    };
    let o = this.setDialog(e);
    l.modal = o;
    let i = this.setController_LinkButton(e);
    l.linkController = i, o.querySelector("form").addEventListener("submit", this.submit.bind(e)), i.addEventListener("click", this.onClick_linkController.bind(e)), t.dialog.modal.appendChild(o), t.element.relative.appendChild(i), e.plugins.anchor.initEvent.call(e, "link", o), l.focusElement = t.anchor.caller.link.urlInput, o = null, i = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, l = e.util.createElement("DIV"), o = e.icons;
    l.className = "se-dialog-content", l.style.display = "none";
    let i = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + o.cancel + '</button><span class="se-modal-title">' + t.dialogBox.linkBox.title + "</span></div>" + e.context.anchor.forms.innerHTML + '<div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>";
    return l.innerHTML = i, l;
  },
  /** modify controller button */
  setController_LinkButton: function(e) {
    const t = e.lang, l = e.icons, o = e.util.createElement("DIV");
    return o.className = "se-controller se-controller-link", o.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + l.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + l.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.unlink + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + l.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", o;
  },
  /**
   * @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "link", this.currentControllerName === "link");
  },
  submit: function(e) {
    this.showLoading(), e.preventDefault(), e.stopPropagation();
    try {
      const t = this.plugins.anchor.createAnchor.call(this, this.context.anchor.caller.link, !1);
      if (t === null) return;
      if (this.context.dialog.updateModal) {
        const l = this.context.link._linkAnchor.childNodes[0];
        this.setRange(l, 0, l, l.textContent.length);
      } else {
        const l = this.getSelectedElements();
        if (l.length > 1) {
          const o = this.util.createElement(l[0].nodeName);
          if (o.appendChild(t), !this.insertNode(o, null, !0)) return;
        } else if (!this.insertNode(t, null, !0)) return;
        this.setRange(t.childNodes[0], 0, t.childNodes[0], t.textContent.length);
      }
    } finally {
      this.plugins.dialog.close.call(this), this.closeLoading(), this.history.push(!1);
    }
    return !1;
  },
  /**
   * @Override core
   */
  active: function(e) {
    if (!e)
      this.controllerArray.indexOf(this.context.link.linkController) > -1 && this.controllersOff();
    else if (this.util.isAnchor(e) && e.getAttribute("data-image-link") === null)
      return this.controllerArray.indexOf(this.context.link.linkController) < 0 && this.plugins.link.call_controller.call(this, e), !0;
    return !1;
  },
  /**
   * @Override dialog
   */
  on: function(e) {
    this.plugins.anchor.on.call(this, this.context.anchor.caller.link, e);
  },
  call_controller: function(e) {
    this.editLink = this.context.link._linkAnchor = this.context.anchor.caller.link.linkAnchor = e;
    const t = this.context.link.linkController, l = t.querySelector("a");
    l.href = e.href, l.title = e.textContent, l.textContent = e.textContent, this.util.addClass(e, "on"), this.setControllerPosition(t, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t, e, "link", this.util.removeClass.bind(this.util, this.context.link._linkAnchor, "on"));
  },
  onClick_linkController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    if (t) {
      if (e.preventDefault(), /update/.test(t))
        this.plugins.dialog.open.call(this, "link", !0);
      else if (/unlink/.test(t)) {
        const l = this.util.getChildElement(this.context.link._linkAnchor, function(i) {
          return i.childNodes.length === 0 || i.nodeType === 3;
        }, !1), o = this.util.getChildElement(this.context.link._linkAnchor, function(i) {
          return i.childNodes.length === 0 || i.nodeType === 3;
        }, !0);
        this.setRange(l, 0, o, o.textContent.length), this.nodeChange(null, null, ["A"], !1);
      } else
        this.util.removeItem(this.context.link._linkAnchor), this.context.anchor.caller.link.linkAnchor = null, this.focus(), this.history.push(!1);
      this.controllersOff();
    }
  },
  /**
   * @Override dialog
   */
  init: function() {
    this.context.link.linkController.style.display = "none", this.plugins.anchor.init.call(this, this.context.anchor.caller.link);
  }
};
var zi = { exports: {} }, fr = zi.exports, un;
function pr() {
  return un || (un = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : fr, function(t, l) {
      const o = {
        name: "component",
        /**
         * @description Create a container for the resizing component and insert the element.
         * @param {Element} cover Cover element (FIGURE)
         * @param {String} className Class name of container (fixed: se-component)
         * @returns {Element} Created container element
         */
        set_container: function(i, a) {
          const d = this.util.createElement("DIV");
          return d.className = "se-component " + a, d.appendChild(i), d;
        },
        /**
         * @description Cover the target element with a FIGURE element.
         * @param {Element} element Target element
         */
        set_cover: function(i) {
          const a = this.util.createElement("FIGURE");
          return a.appendChild(i), a;
        },
        /**
         * @description Return HTML string of caption(FIGCAPTION) element
         * @returns {String}
         */
        create_caption: function() {
          const i = this.util.createElement("FIGCAPTION");
          return i.innerHTML = "<div>" + this.lang.dialogBox.caption + "</div>", i;
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "component", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: o
      })), o;
    });
  }(zi)), zi.exports;
}
var hr = /* @__PURE__ */ pr();
const il = /* @__PURE__ */ Se(hr);
var Ni = { exports: {} }, mr = Ni.exports, dn;
function gr() {
  return dn || (dn = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : mr, function(t, l) {
      const o = {
        name: "resizing",
        /**
         * @description Constructor
         * Require context properties when resizing module
            inputX: Element,
            inputY: Element,
            _container: null,
            _cover: null,
            _element: null,
            _element_w: 1,
            _element_h: 1,
            _element_l: 0,
            _element_t: 0,
            _defaultSizeX: 'auto',
            _defaultSizeY: 'auto',
            _origin_w: core.options.imageWidth === 'auto' ? '' : core.options.imageWidth,
            _origin_h: core.options.imageHeight === 'auto' ? '' : core.options.imageHeight,
            _proportionChecked: true,
            // -- select function --
            _resizing: core.options.imageResizing,
            _resizeDotHide: !core.options.imageHeightShow,
            _rotation: core.options.imageRotation,
            _onlyPercentage: core.options.imageSizeOnlyPercentage,
            _ratio: false,
            _ratioX: 1,
            _ratioY: 1
            _captionShow: true,
            // -- when used caption (_captionShow: true) --
            _caption: null,
            _captionChecked: false,
            captionCheckEl: null,
         * @param {Object} core Core object 
         */
        add: function(i) {
          const a = i.icons, d = i.context;
          d.resizing = {
            _resizeClientX: 0,
            _resizeClientY: 0,
            _resize_plugin: "",
            _resize_w: 0,
            _resize_h: 0,
            _origin_w: 0,
            _origin_h: 0,
            _rotateVertical: !1,
            _resize_direction: "",
            _move_path: null,
            _isChange: !1,
            alignIcons: {
              basic: a.align_justify,
              left: a.align_left,
              right: a.align_right,
              center: a.align_center
            }
          };
          let f = this.setController_resize(i);
          d.resizing.resizeContainer = f, d.resizing.resizeDiv = f.querySelector(".se-modal-resize"), d.resizing.resizeDot = f.querySelector(".se-resize-dot"), d.resizing.resizeDisplay = f.querySelector(".se-resize-display");
          let n = this.setController_button(i);
          d.resizing.resizeButton = n;
          let b = d.resizing.resizeHandles = d.resizing.resizeDot.querySelectorAll("span");
          d.resizing.resizeButtonGroup = n.querySelector("._se_resizing_btn_group"), d.resizing.rotationButtons = n.querySelectorAll("._se_resizing_btn_group ._se_rotation"), d.resizing.percentageButtons = n.querySelectorAll("._se_resizing_btn_group ._se_percentage"), d.resizing.alignMenu = n.querySelector(".se-resizing-align-list"), d.resizing.alignMenuList = d.resizing.alignMenu.querySelectorAll("button"), d.resizing.alignButton = n.querySelector("._se_resizing_align_button"), d.resizing.autoSizeButton = n.querySelector("._se_resizing_btn_group ._se_auto_size"), d.resizing.captionButton = n.querySelector("._se_resizing_caption_button"), f.addEventListener("mousedown", function(u) {
            u.preventDefault();
          }), b[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), n.addEventListener("click", this.onClick_resizeButton.bind(i)), d.element.relative.appendChild(f), d.element.relative.appendChild(n), f = null, n = null, b = null;
        },
        /** resize controller, button (image, iframe, video) */
        setController_resize: function(i) {
          const a = i.util.createElement("DIV");
          return a.className = "se-controller se-resizing-container", a.style.display = "none", a.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', a;
        },
        setController_button: function(i) {
          const a = i.lang, d = i.icons, f = i.util.createElement("DIV");
          return f.className = "se-controller se-controller-resizing", f.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + d.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + d.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + d.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + d.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + d.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + d.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + d.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + d.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + d.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + d.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + d.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + d.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + d.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + d.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.remove + "</span></span></button></div>", f;
        },
        /**
         * @description Gets the width size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeX: function(i, a, d, f) {
          return a || (a = i._element), d || (d = i._cover), f || (f = i._container), a ? /%$/.test(a.style.width) ? (f && this.util.getNumber(f.style.width, 2) || 100) + "%" : a.style.width : "";
        },
        /**
         * @description Gets the height size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeY: function(i, a, d, f) {
          return a || (a = i._element), d || (d = i._cover), f || (f = i._container), !f || !d ? a && a.style.height || "" : this.util.getNumber(d.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? d.style.height : !/%$/.test(a.style.height) || !/%$/.test(a.style.width) ? a.style.height : (f && this.util.getNumber(f.style.height, 2) || 100) + "%";
        },
        /**
         * @description Called at the "openModify" to put the size of the current target into the size input element.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Object} pluginObj Plugin object
         */
        _module_setModifyInputSize: function(i, a) {
          const d = i._onlyPercentage && this.context.resizing._rotateVertical;
          i.proportion.checked = i._proportionChecked = i._element.getAttribute("data-proportion") !== "false";
          let f = d ? "" : this.plugins.resizing._module_getSizeX.call(this, i);
          if (f === i._defaultSizeX && (f = ""), i._onlyPercentage && (f = this.util.getNumber(f, 2)), i.inputX.value = f, a.setInputSize.call(this, "x"), !i._onlyPercentage) {
            let n = d ? "" : this.plugins.resizing._module_getSizeY.call(this, i);
            n === i._defaultSizeY && (n = ""), i._onlyPercentage && (n = this.util.getNumber(n, 2)), i.inputY.value = n;
          }
          i.inputX.disabled = !!d, i.inputY.disabled = !!d, i.proportion.disabled = !!d, a.setRatio.call(this);
        },
        /**
         * @description It is called in "setInputSize" (input tag keyupEvent), 
         * checks the value entered in the input tag, 
         * calculates the ratio, and sets the calculated value in the input tag of the opposite size.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {String} xy 'x': width, 'y': height
         */
        _module_setInputSize: function(i, a) {
          if (i._onlyPercentage) {
            a === "x" && i.inputX.value > 100 && (i.inputX.value = 100);
            return;
          }
          if (i.proportion.checked && i._ratio && /\d/.test(i.inputX.value) && /\d/.test(i.inputY.value)) {
            const d = i.inputX.value.replace(/\d+|\./g, "") || i.sizeUnit, f = i.inputY.value.replace(/\d+|\./g, "") || i.sizeUnit;
            if (d !== f) return;
            const n = d === "%" ? 2 : 0;
            a === "x" ? i.inputY.value = this.util.getNumber(i._ratioY * this.util.getNumber(i.inputX.value, n), n) + f : i.inputX.value = this.util.getNumber(i._ratioX * this.util.getNumber(i.inputY.value, n), n) + d;
          }
        },
        /**
         * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
         * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_setRatio: function(i) {
          const a = i.inputX.value, d = i.inputY.value;
          if (i.proportion.checked && /\d+/.test(a) && /\d+/.test(d)) {
            const f = a.replace(/\d+|\./g, "") || i.sizeUnit, n = d.replace(/\d+|\./g, "") || i.sizeUnit;
            if (f !== n)
              i._ratio = !1;
            else if (!i._ratio) {
              const b = this.util.getNumber(a, 0), u = this.util.getNumber(d, 0);
              i._ratio = !0, i._ratioX = b / u, i._ratioY = u / b;
            }
          } else
            i._ratio = !1;
        },
        /**
         * @description Revert size of element to origin size (plugin._origin_w, plugin._origin_h)
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_sizeRevert: function(i) {
          i._onlyPercentage ? i.inputX.value = i._origin_w > 100 ? 100 : i._origin_w : (i.inputX.value = i._origin_w, i.inputY.value = i._origin_h);
        },
        /**
         * @description Save the size data (element.setAttribute("data-size"))
         * Used at the "setSize" method
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_saveCurrentSize: function(i) {
          const a = this.plugins.resizing._module_getSizeX.call(this, i), d = this.plugins.resizing._module_getSizeY.call(this, i);
          i._element.setAttribute("width", a.replace("px", "")), i._element.setAttribute("height", d.replace("px", "")), i._element.setAttribute("data-size", a + "," + d), i._videoRatio && (i._videoRatio = d);
        },
        /**
         * @description Call the resizing module
         * @param {Element} targetElement Resizing target element
         * @param {string} plugin Plugin name
         * @returns {Object} Size of resizing div {w, h, t, l}
         */
        call_controller_resize: function(i, a) {
          const d = this.context.resizing, f = this.context[a];
          d._resize_plugin = a;
          const n = d.resizeContainer, b = d.resizeDiv, u = this.util.getOffset(i, this.context.element.wysiwygFrame), v = d._rotateVertical = /^(90|270)$/.test(Math.abs(i.getAttribute("data-rotate")).toString()), k = v ? i.offsetHeight : i.offsetWidth, x = v ? i.offsetWidth : i.offsetHeight, L = u.top, R = u.left - this.context.element.wysiwygFrame.scrollLeft;
          n.style.top = L + "px", n.style.left = R + "px", n.style.width = k + "px", n.style.height = x + "px", b.style.top = "0px", b.style.left = "0px", b.style.width = k + "px", b.style.height = x + "px";
          let s = i.getAttribute("data-align") || "basic";
          s = s === "none" ? "basic" : s;
          const r = this.util.getParentElement(i, this.util.isComponent), c = this.util.getParentElement(i, "FIGURE"), p = this.plugins.resizing._module_getSizeX.call(this, f, i, c, r) || "auto", m = f._onlyPercentage && a === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, f, i, c, r) || "auto");
          this.util.changeTxt(d.resizeDisplay, this.lang.dialogBox[s] + " (" + p + m + ")"), d.resizeButtonGroup.style.display = f._resizing ? "" : "none";
          const g = f._resizing && !f._resizeDotHide && !f._onlyPercentage ? "flex" : "none", h = d.resizeHandles;
          for (let T = 0, z = h.length; T < z; T++)
            h[T].style.display = g;
          if (f._resizing) {
            const T = d.rotationButtons;
            T[0].style.display = T[1].style.display = f._rotation ? "" : "none";
          }
          if (f._alignHide)
            d.alignButton.style.display = "none";
          else {
            d.alignButton.style.display = "";
            const T = d.alignMenuList;
            this.util.changeElement(d.alignButton.firstElementChild, d.alignIcons[s]);
            for (let z = 0, A = T.length; z < A; z++)
              T[z].getAttribute("data-value") === s ? this.util.addClass(T[z], "on") : this.util.removeClass(T[z], "on");
          }
          const _ = d.percentageButtons, C = /%$/.test(i.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
          for (let T = 0, z = _.length; T < z; T++)
            _[T].getAttribute("data-value") === C ? this.util.addClass(_[T], "active") : this.util.removeClass(_[T], "active");
          f._captionShow ? (d.captionButton.style.display = "", this.util.getChildElement(i.parentNode, "figcaption") ? (this.util.addClass(d.captionButton, "active"), f._captionChecked = !0) : (this.util.removeClass(d.captionButton, "active"), f._captionChecked = !1)) : d.captionButton.style.display = "none", n.style.display = "block";
          const y = { left: 0, top: 50 };
          this.options.iframe && (y.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, y.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(d.resizeButton, n, "bottom", y);
          const S = function() {
            this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
          };
          this.controllersOn(n, d.resizeButton, S.bind(this), i, a), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), d._resize_w = k, d._resize_h = x;
          const V = (i.getAttribute("origin-size") || "").split(",");
          return d._origin_w = V[0] || i.naturalWidth, d._origin_h = V[1] || i.naturalHeight, {
            w: k,
            h: x,
            t: L,
            l: R
          };
        },
        _closeAlignMenu: null,
        /**
         * @description Open align submenu of module
         */
        openAlignMenu: function() {
          const i = this.context.resizing.alignButton;
          this.util.addClass(i, "on"), this.context.resizing.alignMenu.style.top = i.offsetTop + i.offsetHeight + "px", this.context.resizing.alignMenu.style.left = i.offsetLeft - i.offsetWidth / 2 + "px", this.context.resizing.alignMenu.style.display = "block", this.plugins.resizing._closeAlignMenu = (function() {
            this.util.removeClass(this.context.resizing.alignButton, "on"), this.context.resizing.alignMenu.style.display = "none", this.removeDocEvent("click", this.plugins.resizing._closeAlignMenu), this.plugins.resizing._closeAlignMenu = null;
          }).bind(this), this.addDocEvent("click", this.plugins.resizing._closeAlignMenu);
        },
        /**
         * @description Click event of resizing toolbar
         * Performs the action of the clicked toolbar button.
         * @param {MouseEvent} e Event object
         */
        onClick_resizeButton: function(i) {
          i.stopPropagation();
          const a = i.target, d = a.getAttribute("data-command") || a.parentNode.getAttribute("data-command");
          if (!d) return;
          const f = a.getAttribute("data-value") || a.parentNode.getAttribute("data-value"), n = this.context.resizing._resize_plugin, b = this.context[n], u = b._element, v = this.plugins[n];
          if (i.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), d === "onalign"))) {
            switch (d) {
              case "auto":
                this.plugins.resizing.resetTransform.call(this, u), v.setAutoSize.call(this), this.selectComponent(u, n);
                break;
              case "percent":
                let k = this.plugins.resizing._module_getSizeY.call(this, b);
                if (this.context.resizing._rotateVertical) {
                  const g = u.getAttribute("data-percentage");
                  g && (k = g.split(",")[1]);
                }
                this.plugins.resizing.resetTransform.call(this, u), v.setPercentSize.call(this, f * 100, this.util.getNumber(k, 0) === null || !/%$/.test(k) ? "" : k), this.selectComponent(u, n);
                break;
              case "mirror":
                const x = u.getAttribute("data-rotate") || "0";
                let L = u.getAttribute("data-rotateX") || "", R = u.getAttribute("data-rotateY") || "";
                f === "h" && !this.context.resizing._rotateVertical || f === "v" && this.context.resizing._rotateVertical ? R = R ? "" : "180" : L = L ? "" : "180", u.setAttribute("data-rotateX", L), u.setAttribute("data-rotateY", R), this.plugins.resizing._setTransForm(u, x, L, R);
                break;
              case "rotate":
                const s = this.context.resizing, r = u.getAttribute("data-rotate") * 1 + f * 1, c = this._w.Math.abs(r) >= 360 ? 0 : r;
                u.setAttribute("data-rotate", c), s._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(c).toString()), this.plugins.resizing.setTransformSize.call(this, u, null, null), this.selectComponent(u, n);
                break;
              case "onalign":
                this.plugins.resizing.openAlignMenu.call(this);
                return;
              case "align":
                const p = f === "basic" ? "none" : f;
                v.setAlign.call(this, p, null, null, null), this.selectComponent(u, n);
                break;
              case "caption":
                const m = !b._captionChecked;
                if (v.openModify.call(this, !0), b._captionChecked = b.captionCheckEl.checked = m, v.update_image.call(this, !1, !1, !1), m) {
                  const g = this.util.getChildElement(b._caption, function(h) {
                    return h.nodeType === 3;
                  });
                  g ? this.setRange(g, 0, g, g.textContent.length) : b._caption.focus(), this.controllersOff();
                } else
                  this.selectComponent(u, n), v.openModify.call(this, !0);
                break;
              case "revert":
                v.setOriginSize.call(this), this.selectComponent(u, n);
                break;
              case "update":
                v.openModify.call(this), this.controllersOff();
                break;
              case "delete":
                v.destroy.call(this);
                break;
            }
            this.history.push(!1);
          }
        },
        /**
         * @description Initialize the transform style (rotation) of the element.
         * @param {Element} element Target element
         */
        resetTransform: function(i) {
          const a = (i.getAttribute("data-size") || i.getAttribute("data-origin") || "").split(",");
          this.context.resizing._rotateVertical = !1, i.style.maxWidth = "", i.style.transform = "", i.style.transformOrigin = "", i.setAttribute("data-rotate", ""), i.setAttribute("data-rotateX", ""), i.setAttribute("data-rotateY", ""), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, a[0] ? a[0] : "auto", a[1] ? a[1] : "", !0);
        },
        /**
         * @description Set the transform style (rotation) of the element.
         * @param {Element} element Target element
         * @param {Number|null} width Element's width size
         * @param {Number|null} height Element's height size
         */
        setTransformSize: function(i, a, d) {
          let f = i.getAttribute("data-percentage");
          const n = this.context.resizing._rotateVertical, b = i.getAttribute("data-rotate") * 1;
          let u = "";
          if (f && !n)
            f = f.split(","), f[0] === "auto" && f[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, f[0], f[1]);
          else {
            const v = this.util.getParentElement(i, "FIGURE"), k = a || i.offsetWidth, x = d || i.offsetHeight, L = (n ? x : k) + "px", R = (n ? k : x) + "px";
            if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, k + "px", x + "px", !0), v.style.width = L, v.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : R, n) {
              let s = k / 2 + "px " + k / 2 + "px 0", r = x / 2 + "px " + x / 2 + "px 0";
              u = b === 90 || b === -270 ? r : s;
            }
          }
          i.style.transformOrigin = u, this.plugins.resizing._setTransForm(i, b.toString(), i.getAttribute("data-rotateX") || "", i.getAttribute("data-rotateY") || ""), n ? i.style.maxWidth = "none" : i.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, i);
        },
        _setTransForm: function(i, a, d, f) {
          let n = (i.offsetWidth - i.offsetHeight) * (/-/.test(a) ? 1 : -1), b = "";
          if (/[1-9]/.test(a) && (d || f))
            switch (b = d ? "Y" : "X", a) {
              case "90":
                b = d && f ? "X" : f ? b : "";
                break;
              case "270":
                n *= -1, b = d && f ? "Y" : d ? b : "";
                break;
              case "-90":
                b = d && f ? "Y" : d ? b : "";
                break;
              case "-270":
                n *= -1, b = d && f ? "X" : f ? b : "";
                break;
              default:
                b = "";
            }
          a % 180 === 0 && (i.style.maxWidth = ""), i.style.transform = "rotate(" + a + "deg)" + (d ? " rotateX(" + d + "deg)" : "") + (f ? " rotateY(" + f + "deg)" : "") + (b ? " translate" + b + "(" + n + "px)" : "");
        },
        /**
         * @description The position of the caption is set automatically.
         * @param {Element} element Target element (not caption element)
         */
        setCaptionPosition: function(i) {
          const a = this.util.getChildElement(this.util.getParentElement(i, "FIGURE"), "FIGCAPTION");
          a && (a.style.marginTop = (this.context.resizing._rotateVertical ? i.offsetWidth - i.offsetHeight : 0) + "px");
        },
        /**
         * @description Mouse down event of resize handles
         * @param {MouseEvent} e Event object 
         */
        onMouseDown_resize_handle: function(i) {
          i.stopPropagation(), i.preventDefault();
          const a = this.context.resizing, d = a._resize_direction = i.target.classList[0];
          a._resizeClientX = i.clientX, a._resizeClientY = i.clientY, this.context.element.resizeBackground.style.display = "block", a.resizeButton.style.display = "none", a.resizeDiv.style.float = /l/.test(d) ? "right" : /r/.test(d) ? "left" : "none";
          const f = (function(u) {
            if (u.type === "keydown" && u.keyCode !== 27) return;
            const v = a._isChange;
            a._isChange = !1, this.removeDocEvent("mousemove", n), this.removeDocEvent("mouseup", f), this.removeDocEvent("keydown", f), u.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, d), v && this.history.push(!1));
          }).bind(this), n = this.plugins.resizing.resizing_element.bind(this, a, d, this.context[a._resize_plugin]);
          this.addDocEvent("mousemove", n), this.addDocEvent("mouseup", f), this.addDocEvent("keydown", f);
        },
        /**
         * @description Mouse move event after call "onMouseDown_resize_handle" of resize handles
         * The size of the module's "div" is adjusted according to the mouse move event.
         * @param {Object} contextResizing "core.context.resizing" object (binding argument)
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh") (binding argument)
         * @param {Object} plugin "core.context[currentPlugin]" object (binding argument)
         * @param {MouseEvent} e Event object
         */
        resizing_element: function(i, a, d, f) {
          const n = f.clientX, b = f.clientY;
          let u = d._element_w, v = d._element_h;
          const k = d._element_w + (/r/.test(a) ? n - i._resizeClientX : i._resizeClientX - n), x = d._element_h + (/b/.test(a) ? b - i._resizeClientY : i._resizeClientY - b), L = d._element_h / d._element_w * k;
          /t/.test(a) && (i.resizeDiv.style.top = d._element_h - (/h/.test(a) ? x : L) + "px"), /l/.test(a) && (i.resizeDiv.style.left = d._element_w - k + "px"), /r|l/.test(a) && (i.resizeDiv.style.width = k + "px", u = k), /^(t|b)[^h]$/.test(a) ? (i.resizeDiv.style.height = L + "px", v = L) : /^(t|b)h$/.test(a) && (i.resizeDiv.style.height = x + "px", v = x), i._resize_w = u, i._resize_h = v, this.util.changeTxt(i.resizeDisplay, this._w.Math.round(u) + " x " + this._w.Math.round(v)), i._isChange = !0;
        },
        /**
         * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
         * Called at the mouse-up event registered in "onMouseDown_resize_handle".
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
         */
        cancel_controller_resize: function(i) {
          const a = this.context.resizing._rotateVertical;
          this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
          let d = this._w.Math.round(a ? this.context.resizing._resize_h : this.context.resizing._resize_w), f = this._w.Math.round(a ? this.context.resizing._resize_w : this.context.resizing._resize_h);
          if (!a && !/%$/.test(d)) {
            const u = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
            this.util.getNumber(d, 0) > u && (f = this._w.Math.round(f / d * u), d = u);
          }
          const n = this.context.resizing._resize_plugin;
          this.plugins[n].setSize.call(this, d, f, !1, i), a && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, d, f), this.selectComponent(this.context[n]._element, n);
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "resizing", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: o
      })), o;
    });
  }(Ni)), Ni.exports;
}
var vr = /* @__PURE__ */ gr();
const to = /* @__PURE__ */ Se(vr);
var Ai = { exports: {} }, br = Ai.exports, cn;
function yr() {
  return cn || (cn = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : br, function(t, l) {
      const o = {
        name: "fileManager",
        _xmlHttp: null,
        _checkMediaComponent: function(i) {
          return /IMG/i.test(i) ? !/FIGURE/i.test(i.parentElement.nodeName) || !/FIGURE/i.test(i.parentElement.parentElement.nodeName) : !0;
        },
        /**
         * @description Upload the file to the server.
         * @param {String} uploadUrl Upload server url
         * @param {Object|null} uploadHeader Request header
         * @param {FormData} formData FormData in body
         * @param {Function|null} callBack Success call back function
         * @param {Function|null} errorCallBack Error call back function
         * @example this.plugins.fileManager.upload.call(this, imageUploadUrl, this.options.imageUploadHeader, formData, this.plugins.image.callBack_imgUpload.bind(this, info), this.functions.onImageUploadError);
         */
        upload: function(i, a, d, f, n) {
          this.showLoading();
          const b = this.plugins.fileManager, u = b._xmlHttp = this.util.getXMLHttpRequest();
          if (u.onreadystatechange = b._callBackUpload.bind(this, u, f, n), u.open("post", i, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
            for (let v in a)
              u.setRequestHeader(v, a[v]);
          u.send(d);
        },
        _callBackUpload: function(i, a, d) {
          if (i.readyState === 4)
            if (i.status === 200)
              try {
                a(i);
              } catch (f) {
                throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + f.message + '"');
              } finally {
                this.closeLoading();
              }
            else {
              this.closeLoading();
              const f = i.responseText ? JSON.parse(i.responseText) : i;
              if (typeof d != "function" || d("", f, this)) {
                const n = "[SUNEDITOR.fileManager.upload.serverException] status: " + i.status + ", response: " + (f.errorMessage || i.responseText);
                throw this.functions.noticeOpen(n), Error(n);
              }
            }
        },
        /**
         * @description Checke the file's information and modify the tag that does not fit the format.
         * @param {String} pluginName Plugin name
         * @param {Array} tagNames Tag array to check
         * @param {Function|null} uploadEventHandler Event handler to process updated file info after checking (used in "setInfo")
         * @param {Function} modifyHandler A function to modify a tag that does not fit the format (Argument value: Tag element)
         * @param {Boolean} resizing True if the plugin is using a resizing module
         * @example 
         * const modifyHandler = function (tag) {
         *      imagePlugin.onModifyMode.call(this, tag, null);
         *      imagePlugin.openModify.call(this, true);
         *      imagePlugin.update_image.call(this, true, false, true);
         *  }.bind(this);
         *  this.plugins.fileManager.checkInfo.call(this, 'image', ['img'], this.functions.onImageUpload, modifyHandler, true);
         */
        checkInfo: function(i, a, d, f, n) {
          let b = [];
          for (let r = 0, c = a.length; r < c; r++)
            b = b.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(a[r] + ':not([data-se-embed="true"])')));
          const u = this.plugins.fileManager, v = this.context[i], k = v._infoList, x = u.setInfo.bind(this);
          if (b.length === k.length)
            if (this._componentsInfoReset) {
              for (let r = 0, c = b.length; r < c; r++)
                x(i, b[r], d, null, n);
              return;
            } else {
              let r = !1;
              for (let c = 0, p = k.length, m; c < p; c++)
                if (m = k[c], b.filter(function(g) {
                  return m.src === g.src && m.index.toString() === g.getAttribute("data-index");
                }).length === 0) {
                  r = !0;
                  break;
                }
              if (!r) return;
            }
          const L = n ? this.context.resizing._resize_plugin : "";
          n && (this.context.resizing._resize_plugin = i);
          const R = [], s = [];
          for (let r = 0, c = k.length; r < c; r++)
            s[r] = k[r].index;
          for (v.__updateTags = b; b.length > 0; ) {
            const r = b.shift();
            !this.util.getParentElement(r, this.util.isMediaComponent) || !u._checkMediaComponent(r) ? (R.push(v._infoIndex), f(r)) : !r.getAttribute("data-index") || s.indexOf(r.getAttribute("data-index") * 1) < 0 ? (R.push(v._infoIndex), r.removeAttribute("data-index"), x(i, r, d, null, n)) : R.push(r.getAttribute("data-index") * 1);
          }
          for (let r = 0, c; r < k.length; r++)
            c = k[r].index, !(R.indexOf(c) > -1) && (k.splice(r, 1), typeof d == "function" && d(null, c, "delete", null, 0, this), r--);
          n && (this.context.resizing._resize_plugin = L);
        },
        /**
         * @description Create info object of file and add it to "_infoList" (this.context[pluginName]._infoList[])
         * @param {String} pluginName Plugin name 
         * @param {Element} element 
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         * @param {Object|null} file 
         * @param {Boolean} resizing True if the plugin is using a resizing module
         * @example 
         * uploadCallBack {.. file = { name: fileList[i].name, size: fileList[i].size };
         * this.plugins.fileManager.setInfo.call(this, 'image', oImg, this.functions.onImageUpload, file, true);
         */
        setInfo: function(i, a, d, f, n) {
          const b = n ? this.context.resizing._resize_plugin : "";
          n && (this.context.resizing._resize_plugin = i);
          const u = this.plugins[i], v = this.context[i], k = v._infoList;
          let x = a.getAttribute("data-index"), L = null, R = "";
          if (f || (f = {
            name: a.getAttribute("data-file-name") || (typeof a.src == "string" ? a.src.split("/").pop() : ""),
            size: a.getAttribute("data-file-size") || 0
          }), !x || this._componentsInfoInit)
            R = "create", x = v._infoIndex++, a.setAttribute("data-index", x), a.setAttribute("data-file-name", f.name), a.setAttribute("data-file-size", f.size), L = {
              src: a.src,
              index: x * 1,
              name: f.name,
              size: f.size
            }, k.push(L);
          else {
            R = "update", x *= 1;
            for (let s = 0, r = k.length; s < r; s++)
              if (x === k[s].index) {
                L = k[s];
                break;
              }
            L || (x = v._infoIndex++, L = { index: x }, k.push(L)), L.src = a.src, L.name = a.getAttribute("data-file-name"), L.size = a.getAttribute("data-file-size") * 1;
          }
          if (L.element = a, L.delete = u.destroy.bind(this, a), L.select = (function(s) {
            s.scrollIntoView(!0), this._w.setTimeout(u.select.bind(this, s));
          }).bind(this, a), n) {
            if (!a.getAttribute("origin-size") && a.naturalWidth && a.setAttribute("origin-size", a.naturalWidth + "," + a.naturalHeight), !a.getAttribute("data-origin")) {
              const s = this.util.getParentElement(a, this.util.isMediaComponent), r = this.util.getParentElement(a, "FIGURE"), c = this.plugins.resizing._module_getSizeX.call(this, v, a, r, s), p = this.plugins.resizing._module_getSizeY.call(this, v, a, r, s);
              a.setAttribute("data-origin", c + "," + p), a.setAttribute("data-size", c + "," + p);
            }
            if (!a.style.width) {
              const s = (a.getAttribute("data-size") || a.getAttribute("data-origin") || "").split(",");
              u.onModifyMode.call(this, a, null), u.applySize.call(this, s[0], s[1]);
            }
            this.context.resizing._resize_plugin = b;
          }
          typeof d == "function" && d(a, x, R, L, --v._uploadFileLength < 0 ? 0 : v._uploadFileLength, this);
        },
        /**
         * @description Delete info object at "_infoList"
         * @param {String} pluginName Plugin name 
         * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        deleteInfo: function(i, a, d) {
          if (a >= 0) {
            const f = this.context[i]._infoList;
            for (let n = 0, b = f.length; n < b; n++)
              if (a === f[n].index) {
                f.splice(n, 1), typeof d == "function" && d(null, a, "delete", null, 0, this);
                return;
              }
          }
        },
        /**
         * @description Reset info object and "_infoList = []", "_infoIndex = 0"
         * @param {String} pluginName Plugin name 
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        resetInfo: function(i, a) {
          const d = this.context[i];
          if (typeof a == "function") {
            const f = d._infoList;
            for (let n = 0, b = f.length; n < b; n++)
              a(null, f[n].index, "delete", null, 0, this);
          }
          d._infoList = [], d._infoIndex = 0;
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileManager", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: o
      })), o;
    });
  }(Ai)), Ai.exports;
}
var _r = /* @__PURE__ */ yr();
const ll = /* @__PURE__ */ Se(_r), Cr = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([Kt, eo, il, to, ll]);
    const t = e.options, l = e.context, o = l.image = {
      _infoList: [],
      // @Override fileManager
      _infoIndex: 0,
      // @Override fileManager
      _uploadFileLength: 0,
      // @Override fileManager
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      sizeUnit: t._imageSizeUnit,
      _linkElement: "",
      _altText: "",
      _align: "none",
      _floatClassRegExp: "__se__float\\-[a-z]+",
      _v_src: { _linkValue: "" },
      svgDefaultSize: "30%",
      base64RenderIndex: 0,
      // @require @Override component
      _element: null,
      _cover: null,
      _container: null,
      // @Override resizing properties
      inputX: null,
      inputY: null,
      _element_w: 1,
      _element_h: 1,
      _element_l: 0,
      _element_t: 0,
      _defaultSizeX: "auto",
      _defaultSizeY: "auto",
      _origin_w: t.imageWidth === "auto" ? "" : t.imageWidth,
      _origin_h: t.imageHeight === "auto" ? "" : t.imageHeight,
      _proportionChecked: !0,
      _resizing: t.imageResizing,
      _resizeDotHide: !t.imageHeightShow,
      _rotation: t.imageRotation,
      _alignHide: !t.imageAlignShow,
      _onlyPercentage: t.imageSizeOnlyPercentage,
      _ratio: !1,
      _ratioX: 1,
      _ratioY: 1,
      _captionShow: !0,
      _captionChecked: !1,
      _caption: null,
      captionCheckEl: null
    };
    let i = this.setDialog(e);
    o.modal = i, o.imgInputFile = i.querySelector("._se_image_file"), o.imgUrlFile = i.querySelector("._se_image_url"), o.focusElement = o.imgInputFile || o.imgUrlFile, o.altText = i.querySelector("._se_image_alt"), o.captionCheckEl = i.querySelector("._se_image_check_caption"), o.previewSrc = i.querySelector("._se_tab_content_image .se-link-preview"), i.querySelector(".se-dialog-tabs").addEventListener("click", this.openTab.bind(e)), i.querySelector("form").addEventListener("submit", this.submit.bind(e)), o.imgInputFile && i.querySelector(".se-file-remove").addEventListener("click", this._removeSelectedFiles.bind(o.imgInputFile, o.imgUrlFile, o.previewSrc)), o.imgUrlFile && o.imgUrlFile.addEventListener("input", this._onLinkPreview.bind(o.previewSrc, o._v_src, t.linkProtocol)), o.imgInputFile && o.imgUrlFile && o.imgInputFile.addEventListener("change", this._fileInputChange.bind(o));
    const a = i.querySelector(".__se__gallery");
    a && a.addEventListener("click", this._openGallery.bind(e)), o.proportion = {}, o.inputX = {}, o.inputY = {}, t.imageResizing && (o.proportion = i.querySelector("._se_image_check_proportion"), o.inputX = i.querySelector("._se_image_size_x"), o.inputY = i.querySelector("._se_image_size_y"), o.inputX.value = t.imageWidth, o.inputY.value = t.imageHeight, o.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), o.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), o.inputX.addEventListener("change", this.setRatio.bind(e)), o.inputY.addEventListener("change", this.setRatio.bind(e)), o.proportion.addEventListener("change", this.setRatio.bind(e)), i.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), l.dialog.modal.appendChild(i), e.plugins.anchor.initEvent.call(e, "image", i.querySelector("._se_tab_content_url")), o.anchorCtx = e.context.anchor.caller.image, i = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, l = e.lang, o = e.util.createElement("DIV");
    o.className = "se-dialog-content se-dialog-image", o.style.display = "none";
    let i = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + l.dialogBox.close + '" aria-label="' + l.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + l.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + l.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + l.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
    if (t.imageFileInput && (i += '<div class="se-dialog-form"><label>' + l.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="' + t.imageAccept + '"' + (t.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + l.controller.remove + '" aria-label="' + l.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.imageUrlInput && (i += '<div class="se-dialog-form"><label>' + l.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url _se_image_url" type="text" />' + (t.imageGalleryUrl && e.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + l.toolbar.imageGallery + '" aria-label="' + l.toolbar.imageGallery + '">' + e.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), i += '</div><div class="se-dialog-form"><label>' + l.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', t.imageResizing) {
      const a = t.imageSizeOnlyPercentage, d = a ? ' style="display: none !important;"' : "", f = t.imageHeightShow ? "" : ' style="display: none !important;"';
      i += '<div class="se-dialog-form">', a || !t.imageHeightShow ? i += '<div class="se-dialog-size-text"><label class="size-w">' + l.dialogBox.size + "</label></div>" : i += '<div class="se-dialog-size-text"><label class="size-w">' + l.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + l.dialogBox.height + "</label></div>", i += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (a ? ' type="number" min="1"' : 'type="text"') + (a ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + f + ">" + (a ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + d + (a ? ' max="100"' : "") + f + "/><label" + d + f + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + l.dialogBox.proportion + '</label><button type="button" title="' + l.dialogBox.revertButton + '" aria-label="' + l.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
    }
    return i += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + l.dialogBox.caption + '</label></div></div></div><div class="_se_tab_content _se_tab_content_url" style="display: none">' + e.context.anchor.forms.innerHTML + '</div><div class="se-dialog-footer"><div' + (t.imageAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + l.dialogBox.basic + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + l.dialogBox.left + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + l.dialogBox.center + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + l.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + l.dialogBox.submitButton + '" aria-label="' + l.dialogBox.submitButton + '"><span>' + l.dialogBox.submitButton + "</span></button></div></form>", o.innerHTML = i, o;
  },
  _fileInputChange: function() {
    this.imgInputFile.value ? (this.imgUrlFile.setAttribute("disabled", !0), this.previewSrc.style.textDecoration = "line-through") : (this.imgUrlFile.removeAttribute("disabled"), this.previewSrc.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _openGallery: function() {
    this.callPlugin("imageGallery", this.plugins.imageGallery.open.bind(this, this.plugins.image._setUrlInput.bind(this.context.image)), null);
  },
  _setUrlInput: function(e) {
    this.altText.value = e.alt, this._v_src._linkValue = this.previewSrc.textContent = this.imgUrlFile.value = e.getAttribute("data-value") || e.src, this.imgUrlFile.focus();
  },
  _onLinkPreview: function(e, t, l) {
    const o = l.target.value.trim();
    e._linkValue = this.textContent = o ? t && o.indexOf("://") === -1 && o.indexOf("#") !== 0 ? t + o : o.indexOf("://") === -1 ? "/" + o : o : "";
  },
  /**
   * @Override @Required fileManager
   */
  fileTags: ["img"],
  /**
   * @Override core, fileManager, resizing
   * @description It is called from core.selectComponent.
   * @param {Element} element Target element
   */
  select: function(e) {
    this.plugins.image.onModifyMode.call(this, e, this.plugins.resizing.call_controller_resize.call(this, e, "image"));
  },
  /**
   * @Override fileManager, resizing
   */
  destroy: function(e) {
    const t = e || this.context.image._element, l = this.util.getParentElement(t, this.util.isMediaComponent) || t, o = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onImageDeleteBefore == "function" && this.functions.onImageDeleteBefore(t, l, o, this) === !1) return;
    let i = l.previousElementSibling || l.nextElementSibling;
    const a = l.parentNode;
    this.util.removeItem(l), this.plugins.image.init.call(this), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(d) {
      return d.childNodes.length === 0;
    }, null), this.focusEdge(i), this.plugins.fileManager.deleteInfo.call(this, "image", o, this.functions.onImageUpload), this.history.push(!1);
  },
  /**
   * @Required @Override dialog
   */
  on: function(e) {
    const t = this.context.image;
    e ? t.imgInputFile && this.options.imageMultipleFile && t.imgInputFile.removeAttribute("multiple") : (t.inputX.value = t._origin_w = this.options.imageWidth === t._defaultSizeX ? "" : this.options.imageWidth, t.inputY.value = t._origin_h = this.options.imageHeight === t._defaultSizeY ? "" : this.options.imageHeight, t.imgInputFile && this.options.imageMultipleFile && t.imgInputFile.setAttribute("multiple", "multiple")), this.plugins.anchor.on.call(this, t.anchorCtx, e);
  },
  /**
   * @Required @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "image", this.currentControllerName === "image");
  },
  openTab: function(e) {
    const t = this.context.image.modal, l = e === "init" ? t.querySelector("._se_tab_link") : e.target;
    if (!/^BUTTON$/i.test(l.tagName))
      return !1;
    const o = l.getAttribute("data-tab-link"), i = "_se_tab_content";
    let a, d, f;
    for (d = t.getElementsByClassName(i), a = 0; a < d.length; a++)
      d[a].style.display = "none";
    for (f = t.getElementsByClassName("_se_tab_link"), a = 0; a < f.length; a++)
      this.util.removeClass(f[a], "active");
    return t.querySelector("." + i + "_" + o).style.display = "block", this.util.addClass(l, "active"), o === "image" && this.context.image.focusElement ? this.context.image.focusElement.focus() : o === "url" && this.context.anchor.caller.image.urlInput.focus(), !1;
  },
  submit: function(e) {
    const t = this.context.image, l = this.plugins.image;
    e.preventDefault(), e.stopPropagation(), t._altText = t.altText.value, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked, t._resizing && (t._proportionChecked = t.proportion.checked);
    try {
      this.context.dialog.updateModal && l.update_image.call(this, !1, !0, !1), t.imgInputFile && t.imgInputFile.files.length > 0 ? (this.showLoading(), l.submitAction.call(this, this.context.image.imgInputFile.files)) : t.imgUrlFile && t._v_src._linkValue.length > 0 && (this.showLoading(), l.onRender_imgUrl.call(this, t._v_src._linkValue));
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.submit.fail] cause : "' + o.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, l = [];
    for (let f = 0, n = e.length; f < n; f++)
      /image/i.test(e[f].type) && (l.push(e[f]), t += e[f].size);
    const o = this.options.imageUploadSizeLimit;
    if (o > 0) {
      let f = 0;
      const n = this.context.image._infoList;
      for (let b = 0, u = n.length; b < u; b++)
        f += n[b].size * 1;
      if (t + f > o) {
        this.closeLoading();
        const b = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + o / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(b, { limitSize: o, currentSize: f, uploadSize: t }, this)) && this.functions.noticeOpen(b);
        return;
      }
    }
    const i = this.context.image;
    i._uploadFileLength = l.length;
    const d = {
      anchor: this.plugins.anchor.createAnchor.call(this, i.anchorCtx, !0),
      inputWidth: i.inputX.value,
      inputHeight: i.inputY.value,
      align: i._align,
      isUpdate: this.context.dialog.updateModal,
      alt: i._altText,
      element: i._element
    };
    if (typeof this.functions.onImageUploadBefore == "function") {
      const f = this.functions.onImageUploadBefore(l, d, this, (function(n) {
        n && this._w.Array.isArray(n.result) ? this.plugins.image.register.call(this, d, n) : this.plugins.image.upload.call(this, d, n);
      }).bind(this));
      if (typeof f > "u") return;
      if (!f) {
        this.closeLoading();
        return;
      }
      this._w.Array.isArray(f) && f.length > 0 && (l = f);
    }
    this.plugins.image.upload.call(this, d, l);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.image.error] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.image.error.call(this, t, null);
      return;
    }
    const l = this.options.imageUploadUrl, o = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof l == "string" && l.length > 0) {
      const i = new FormData();
      for (let a = 0; a < o; a++)
        i.append("file-" + a, t[a]);
      this.plugins.fileManager.upload.call(this, l, this.options.imageUploadHeader, i, this.plugins.image.callBack_imgUpload.bind(this, e), this.functions.onImageUploadError);
    } else
      this.plugins.image.setup_reader.call(this, t, e.anchor, e.inputWidth, e.inputHeight, e.align, e.alt, o, e.isUpdate);
  },
  callBack_imgUpload: function(e, t) {
    if (typeof this.functions.imageUploadHandler == "function")
      this.functions.imageUploadHandler(t, e, this);
    else {
      const l = JSON.parse(t.responseText);
      l.errorMessage ? this.plugins.image.error.call(this, l.errorMessage, l) : this.plugins.image.register.call(this, e, l);
    }
  },
  register: function(e, t) {
    const l = t.result;
    for (let o = 0, i = l.length, a; o < i; o++)
      if (a = { name: l[o].name, size: l[o].size }, e.isUpdate) {
        this.plugins.image.update_src.call(this, l[o].url, e.element, a);
        break;
      } else
        this.plugins.image.create_image.call(this, l[o].url, e.anchor, e.inputWidth, e.inputHeight, e.align, a, e.alt);
    this.closeLoading();
  },
  setup_reader: function(e, t, l, o, i, a, d, f) {
    try {
      if (d === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = d;
      const n = this._w.FileReader, b = [d];
      this.context.image.inputX.value = l, this.context.image.inputY.value = o;
      for (let u = 0, v, k; u < d; u++)
        v = new n(), k = e[u], v.onload = (function(x, L, R, s, r) {
          b[r] = { result: x.result, file: s }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, L, b, R, t, l, o, i, a), this.closeLoading());
        }).bind(this, v, f, this.context.image._element, k, u), v.readAsDataURL(k);
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + n.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, l, o, i, a, d, f) {
    const n = this.plugins.image.update_src, b = this.plugins.image.create_image;
    for (let u = 0, v = t.length; u < v; u++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[u].file.name), this.context.image._element.setAttribute("data-file-size", t[u].file.size), n.call(this, t[u].result, l, t[u].file)) : b.call(this, t[u].result, o, i, a, d, t[u].file, f);
  },
  onRender_imgUrl: function(e) {
    if (e || (e = this.context.image._v_src._linkValue), !e) return !1;
    const t = this.context.image;
    try {
      const l = { name: e.split("/").pop(), size: 0 };
      this.context.dialog.updateModal ? this.plugins.image.update_src.call(this, e, t._element, l) : this.plugins.image.create_image.call(this, e, this.plugins.anchor.createAnchor.call(this, t.anchorCtx, !0), t.inputX.value, t.inputY.value, t._align, l, t._altText);
    } catch (l) {
      throw Error('[SUNEDITOR.image.URLRendering.fail] cause : "' + l.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  onRender_link: function(e, t) {
    return t ? (t.setAttribute("data-image-link", "image"), e.setAttribute("data-image-link", t.href), t.appendChild(e), t) : e;
  },
  /**
   * @Override resizing
   * @param {String} xy 'x': width, 'y': height
   * @param {KeyboardEvent} e Event object
   */
  setInputSize: function(e, t) {
    if (t && t.keyCode === 32) {
      t.preventDefault();
      return;
    }
    this.plugins.resizing._module_setInputSize.call(this, this.context.image, e);
  },
  /**
   * @Override resizing
   */
  setRatio: function() {
    this.plugins.resizing._module_setRatio.call(this, this.context.image);
  },
  /**
   * @Override fileManager
   */
  checkFileInfo: function() {
    const e = this.plugins.image, t = this.context.image, l = (function(o) {
      e.onModifyMode.call(this, o, null), e.openModify.call(this, !0), t.inputX.value = t._origin_w, t.inputY.value = t._origin_h;
      const i = this.util.getFormatElement(o);
      i && (t._align = i.style.textAlign || i.style.float), this.util.isAnchor(o.parentNode) && !t.anchorCtx.linkValue && (t.anchorCtx.linkValue = " "), e.update_image.call(this, !0, !1, !0), e.init.call(this);
    }).bind(this);
    this.plugins.fileManager.checkInfo.call(this, "image", ["img"], this.functions.onImageUpload, l, !0);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "image", this.functions.onImageUpload);
  },
  create_image: function(e, t, l, o, i, a, d) {
    const f = this.plugins.image, n = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let b = this.util.createElement("IMG");
    b.src = e, b.alt = d, b.setAttribute("data-rotate", "0"), t = f.onRender_link.call(this, b, t ? t.cloneNode(!1) : null), n._resizing && b.setAttribute("data-proportion", n._proportionChecked);
    const u = this.plugins.component.set_cover.call(this, t), v = this.plugins.component.set_container.call(this, u, "se-image-container");
    n._captionChecked && (n._caption = this.plugins.component.create_caption.call(this), u.appendChild(n._caption)), n._element = b, n._cover = u, n._container = v, f.applySize.call(this, l, o), f.setAlign.call(this, i, b, u, v), b.onload = f._image_create_onload.bind(this, b, n.svgDefaultSize, v), this.insertComponent(v, !0, !0, !this.options.mediaAutoSelect) && this.plugins.fileManager.setInfo.call(this, "image", b, this.functions.onImageUpload, a, !0), this.context.resizing._resize_plugin = "";
  },
  _image_create_onload: function(e, t, l) {
    if (e.offsetWidth === 0 && this.plugins.image.applySize.call(this, t, ""), this.options.mediaAutoSelect)
      this.selectComponent(e, "image");
    else {
      const o = this.appendFormatTag(l, null);
      o && this.setRange(o, 0, o, 0);
    }
    this.history.push(!1);
  },
  update_image: function(e, t, l) {
    const o = this.context.image;
    let i = o._element, a = o._cover, d = o._container, f = !1;
    a === null && (f = !0, i = o._element.cloneNode(!0), a = this.plugins.component.set_cover.call(this, i)), d === null ? (a = a.cloneNode(!0), i = a.querySelector("img"), f = !0, d = this.plugins.component.set_container.call(this, a, "se-image-container")) : f && (d.innerHTML = "", d.appendChild(a), o._cover = a, o._element = i, f = !1);
    let n;
    const b = this.util.isNumber(o.inputX.value) ? o.inputX.value + o.sizeUnit : o.inputX.value, u = this.util.isNumber(o.inputY.value) ? o.inputY.value + o.sizeUnit : o.inputY.value;
    /%$/.test(i.style.width) ? n = b !== d.style.width || u !== d.style.height : n = b !== i.style.width || u !== i.style.height, i.alt = o._altText;
    let v = !1;
    o._captionChecked ? o._caption || (o._caption = this.plugins.component.create_caption.call(this), a.appendChild(o._caption), v = !0) : o._caption && (this.util.removeItem(o._caption), o._caption = null, v = !0);
    let k = null;
    const x = this.plugins.anchor.createAnchor.call(this, o.anchorCtx, !0);
    if (x)
      o._linkElement !== x || f && !d.contains(x) ? (o._linkElement = x.cloneNode(!1), a.insertBefore(this.plugins.image.onRender_link.call(this, i, o._linkElement), o._caption), k = o._element) : o._linkElement.setAttribute("data-image-link", "image");
    else if (o._linkElement !== null) {
      const R = i;
      if (R.setAttribute("data-image-link", ""), a.contains(o._linkElement)) {
        const s = R.cloneNode(!0);
        a.removeChild(o._linkElement), a.insertBefore(s, o._caption), o._element = i = s;
      }
    }
    let L = null;
    if (f) {
      if (L = this.util.isRangeFormatElement(o._element.parentNode) || this.util.isWysiwygDiv(o._element.parentNode) ? o._element : this.util.isAnchor(o._element.parentNode) ? o._element.parentNode : this.util.getFormatElement(o._element) || o._element, this.util.getParentElement(o._element, this.util.isNotCheckingNode))
        L = k ? x : o._element, L.parentNode.replaceChild(d, L);
      else if (this.util.isListCell(L)) {
        const R = this.util.getParentElement(o._element, function(s) {
          return s.parentNode === L;
        });
        L.insertBefore(d, R), this.util.removeItem(o._element), this.util.removeEmptyNode(R, null, !0);
      } else if (this.util.isFormatElement(L)) {
        const R = this.util.getParentElement(o._element, function(s) {
          return s.parentNode === L;
        });
        L = this.util.splitElement(L, R), L.parentNode.insertBefore(d, L), this.util.removeItem(o._element), this.util.removeEmptyNode(L, null, !0), L.children.length === 0 && (L.innerHTML = this.util.htmlRemoveWhiteSpace(L.innerHTML));
      } else if (this.util.isFormatElement(L.parentNode)) {
        const R = L.parentNode;
        R.parentNode.insertBefore(d, L.previousSibling ? R.nextElementSibling : R), o.__updateTags.map(function(s) {
          return L.contains(s);
        }).length === 0 && this.util.removeItem(L);
      } else
        L = this.util.isFigures(L.parentNode) ? L.parentNode : L, L.parentNode.replaceChild(d, L);
      i = d.querySelector("img"), o._element = i, o._cover = a, o._container = d;
    }
    k && (f ? (this.util.removeItem(k), this.util.getListChildren(x, function(R) {
      return /IMG/i.test(R.tagName);
    }).length === 0 && this.util.removeItem(x)) : this.util.removeItem(x)), (v || !o._onlyPercentage && n) && !e && (/\d+/.test(i.style.height) || this.context.resizing._rotateVertical && o._captionChecked) && (/%$/.test(o.inputX.value) || /%$/.test(o.inputY.value) ? this.plugins.resizing.resetTransform.call(this, i) : this.plugins.resizing.setTransformSize.call(this, i, this.util.getNumber(o.inputX.value, 0), this.util.getNumber(o.inputY.value, 0))), o._resizing && (i.setAttribute("data-proportion", o._proportionChecked), n && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, i, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", i, this.functions.onImageUpload, null, !0), t && this.selectComponent(i, "image"), l || this.history.push(!1);
  },
  update_src: function(e, t, l) {
    t.src = e, this._w.setTimeout(this.plugins.fileManager.setInfo.bind(this, "image", t, this.functions.onImageUpload, l, !0)), this.selectComponent(t, "image");
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e, t) {
    if (!e) return;
    const l = this.context.image;
    l._linkElement = l.anchorCtx.linkAnchor = this.util.isAnchor(e.parentNode) ? e.parentNode : null, l._element = e, l._cover = this.util.getParentElement(e, "FIGURE"), l._container = this.util.getParentElement(e, this.util.isMediaComponent), l._caption = this.util.getChildElement(l._cover, "FIGCAPTION"), l._align = e.getAttribute("data-align") || e.style.float || "none", e.style.float = "", this.plugins.anchor.setCtx(l._linkElement, l.anchorCtx), t && (l._element_w = t.w, l._element_h = t.h, l._element_t = t.t, l._element_l = t.l);
    let o = l._element.getAttribute("data-size") || l._element.getAttribute("data-origin"), i, a;
    o ? (o = o.split(","), i = o[0], a = o[1]) : t && (i = t.w, a = t.h), l._origin_w = i || e.style.width || e.width || "", l._origin_h = a || e.style.height || e.height || "";
  },
  /**
   * @Required @Override fileManager, resizing
   */
  openModify: function(e) {
    const t = this.context.image;
    t.imgUrlFile && (t._v_src._linkValue = t.previewSrc.textContent = t.imgUrlFile.value = t._element.src), t._altText = t.altText.value = t._element.alt, (t.modal.querySelector('input[name="suneditor_image_radio"][value="' + t._align + '"]') || t.modal.querySelector('input[name="suneditor_image_radio"][value="none"]')).checked = !0, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked = !!t._caption, t._resizing && this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.image), e || this.plugins.dialog.open.call(this, "image", !0);
  },
  /**
   * @Override fileManager
   */
  applySize: function(e, t) {
    const l = this.context.image;
    return e || (e = l.inputX.value || this.options.imageWidth), t || (t = l.inputY.value || this.options.imageHeight), l._onlyPercentage && e || /%$/.test(e) ? (this.plugins.image.setPercentSize.call(this, e, t), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.image.setAutoSize.call(this) : this.plugins.image.setSize.call(this, e, t, !1), !1);
  },
  /**
   * @Override resizing
   */
  sizeRevert: function() {
    this.plugins.resizing._module_sizeRevert.call(this, this.context.image);
  },
  /**
   * @Override resizing
   */
  setSize: function(e, t, l, o) {
    const i = this.context.image, a = /^(rw|lw)$/.test(o) && /\d+/.test(i._element.style.height);
    /^(th|bh)$/.test(o) && /\d+/.test(i._element.style.width) || (i._element.style.width = this.util.isNumber(e) ? e + i.sizeUnit : e, this.plugins.image.cancelPercentAttr.call(this)), a || (i._element.style.height = this.util.isNumber(t) ? t + i.sizeUnit : /%$/.test(t) ? "" : t), i._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), l || i._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, i);
  },
  /**
   * @Override resizing
   */
  setAutoSize: function() {
    const e = this.context.image;
    e._caption && (e._caption.style.marginTop = ""), this.plugins.resizing.resetTransform.call(this, e._element), this.plugins.image.cancelPercentAttr.call(this), e._element.style.maxWidth = "", e._element.style.width = "", e._element.style.height = "", e._cover.style.width = "", e._cover.style.height = "", this.plugins.image.setAlign.call(this, null, null, null, null), e._element.setAttribute("data-percentage", "auto,auto"), this.plugins.resizing._module_saveCurrentSize.call(this, e);
  },
  /**
   * @Override resizing
   */
  setOriginSize: function() {
    const e = this.context.image;
    e._element.removeAttribute("data-percentage"), this.plugins.resizing.resetTransform.call(this, e._element), this.plugins.image.cancelPercentAttr.call(this);
    const t = (e._element.getAttribute("data-origin") || "").split(","), l = t[0], o = t[1];
    t && (e._onlyPercentage || /%$/.test(l) && (/%$/.test(o) || !/\d/.test(o)) ? this.plugins.image.setPercentSize.call(this, l, o) : this.plugins.image.setSize.call(this, l, o), this.plugins.resizing._module_saveCurrentSize.call(this, e));
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const l = this.context.image;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + l.sizeUnit : t || "";
    const o = /%$/.test(t);
    l._container.style.width = this.util.isNumber(e) ? e + "%" : e, l._container.style.height = "", l._cover.style.width = "100%", l._cover.style.height = o ? t : "", l._element.style.width = "100%", l._element.style.height = o ? "" : t, l._element.style.maxWidth = "", l._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), l._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing.setCaptionPosition.call(this, l._element), this.plugins.resizing._module_saveCurrentSize.call(this, l);
  },
  /**
   * @Override resizing
   */
  cancelPercentAttr: function() {
    const e = this.context.image;
    e._cover.style.width = "", e._cover.style.height = "", e._container.style.width = "", e._container.style.height = "", this.util.removeClass(e._container, this.context.image._floatClassRegExp), this.util.addClass(e._container, "__se__float-" + e._align), e._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null);
  },
  /**
   * @Override resizing
   */
  setAlign: function(e, t, l, o) {
    const i = this.context.image;
    e || (e = i._align), t || (t = i._element), l || (l = i._cover), o || (o = i._container), /%$/.test(t.style.width) && e === "center" ? (o.style.minWidth = "100%", l.style.width = o.style.width) : (o.style.minWidth = "", l.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : !t.style.width || t.style.width === "auto" ? "" : t.style.width || "100%"), this.util.hasClass(o, "__se__float-" + e) || (this.util.removeClass(o, i._floatClassRegExp), this.util.addClass(o, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.image;
    e.imgInputFile && (e.imgInputFile.value = ""), e.imgUrlFile && (e._v_src._linkValue = e.previewSrc.textContent = e.imgUrlFile.value = ""), e.imgInputFile && e.imgUrlFile && (e.imgUrlFile.removeAttribute("disabled"), e.previewSrc.style.textDecoration = ""), e.altText.value = "", e.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = !0, e.captionCheckEl.checked = !1, e._element = null, this.plugins.image.openTab.call(this, "init"), e._resizing && (e.inputX.value = this.options.imageWidth === e._defaultSizeX ? "" : this.options.imageWidth, e.inputY.value = this.options.imageHeight === e._defaultSizeY ? "" : this.options.imageHeight, e.proportion.checked = !0, e._ratio = !1, e._ratioX = 1, e._ratioY = 1), this.plugins.anchor.init.call(this, e.anchorCtx);
  }
}, wr = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([Kt, il, to, ll]);
    const t = e.options, l = e.context, o = l.video = {
      _infoList: [],
      // @Override fileManager
      _infoIndex: 0,
      // @Override fileManager
      _uploadFileLength: 0,
      // @Override fileManager
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      sizeUnit: t._videoSizeUnit,
      _align: "none",
      _floatClassRegExp: "__se__float\\-[a-z]+",
      _youtubeQuery: t.youtubeQuery,
      _vimeoQuery: t.vimeoQuery,
      _videoRatio: t.videoRatio * 100 + "%",
      _defaultRatio: t.videoRatio * 100 + "%",
      _linkValue: "",
      // @require @Override component
      _element: null,
      _cover: null,
      _container: null,
      // @Override resizing properties
      inputX: null,
      inputY: null,
      _element_w: 1,
      _element_h: 1,
      _element_l: 0,
      _element_t: 0,
      _defaultSizeX: "100%",
      _defaultSizeY: t.videoRatio * 100 + "%",
      _origin_w: t.videoWidth === "100%" ? "" : t.videoWidth,
      _origin_h: t.videoHeight === "56.25%" ? "" : t.videoHeight,
      _proportionChecked: !0,
      _resizing: t.videoResizing,
      _resizeDotHide: !t.videoHeightShow,
      _rotation: t.videoRotation,
      _alignHide: !t.videoAlignShow,
      _onlyPercentage: t.videoSizeOnlyPercentage,
      _ratio: !1,
      _ratioX: 1,
      _ratioY: 1,
      _captionShow: !1
    };
    let i = this.setDialog(e);
    o.modal = i, o.videoInputFile = i.querySelector("._se_video_file"), o.videoUrlFile = i.querySelector(".se-input-url"), o.focusElement = o.videoUrlFile || o.videoInputFile, o.preview = i.querySelector(".se-link-preview"), i.querySelector("form").addEventListener("submit", this.submit.bind(e)), o.videoInputFile && i.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(o.videoInputFile, o.videoUrlFile, o.preview)), o.videoInputFile && o.videoUrlFile && o.videoInputFile.addEventListener("change", this._fileInputChange.bind(o)), o.videoUrlFile && o.videoUrlFile.addEventListener("input", this._onLinkPreview.bind(o.preview, o, t.linkProtocol)), o.proportion = {}, o.videoRatioOption = {}, o.inputX = {}, o.inputY = {}, t.videoResizing && (o.proportion = i.querySelector("._se_video_check_proportion"), o.videoRatioOption = i.querySelector(".se-video-ratio"), o.inputX = i.querySelector("._se_video_size_x"), o.inputY = i.querySelector("._se_video_size_y"), o.inputX.value = t.videoWidth, o.inputY.value = t.videoHeight, o.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), o.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), o.inputX.addEventListener("change", this.setRatio.bind(e)), o.inputY.addEventListener("change", this.setRatio.bind(e)), o.proportion.addEventListener("change", this.setRatio.bind(e)), o.videoRatioOption.addEventListener("change", this.setVideoRatio.bind(e)), i.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), l.dialog.modal.appendChild(i), i = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, l = e.lang, o = e.util.createElement("DIV");
    o.className = "se-dialog-content", o.style.display = "none";
    let i = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + l.dialogBox.close + '" aria-label="' + l.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + l.dialogBox.videoBox.title + '</span></div><div class="se-dialog-body">';
    if (t.videoFileInput && (i += '<div class="se-dialog-form"><label>' + l.dialogBox.videoBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_video_file" type="file" accept="' + t.videoAccept + '"' + (t.videoMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + l.controller.remove + '" aria-label="' + l.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.videoUrlInput && (i += '<div class="se-dialog-form"><label>' + l.dialogBox.videoBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), t.videoResizing) {
      const a = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], d = t.videoRatio, f = t.videoSizeOnlyPercentage, n = f ? ' style="display: none !important;"' : "", b = t.videoHeightShow ? "" : ' style="display: none !important;"', u = t.videoRatioShow ? "" : ' style="display: none !important;"', v = !f && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      i += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + l.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + b + ">" + l.dialogBox.height + '</label><label class="size-h"' + u + ">(" + l.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + v + ">" + (f ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + b + '/><select class="se-input-select se-video-ratio" title="' + l.dialogBox.ratio + '" aria-label="' + l.dialogBox.ratio + '"' + u + ">", b || (i += '<option value=""> - </option>');
      for (let k = 0, x = a.length; k < x; k++)
        i += '<option value="' + a[k].value + '"' + (d.toString() === a[k].value.toString() ? " selected" : "") + ">" + a[k].name + "</option>";
      i += '</select><button type="button" title="' + l.dialogBox.revertButton + '" aria-label="' + l.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + n + v + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + l.dialogBox.proportion + "</label></div>";
    }
    return i += '</div><div class="se-dialog-footer"><div' + (t.videoAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + l.dialogBox.basic + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + l.dialogBox.left + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + l.dialogBox.center + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + l.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + l.dialogBox.submitButton + '" aria-label="' + l.dialogBox.submitButton + '"><span>' + l.dialogBox.submitButton + "</span></button></div></form>", o.innerHTML = i, o;
  },
  _fileInputChange: function() {
    this.videoInputFile.value ? (this.videoUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.videoUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _onLinkPreview: function(e, t, l) {
    const o = l.target.value.trim();
    /^<iframe.*\/iframe>$/.test(o) ? (e._linkValue = o, this.textContent = '<IFrame :src=".."></IFrame>') : e._linkValue = this.textContent = o ? t && o.indexOf("://") === -1 && o.indexOf("#") !== 0 ? t + o : o.indexOf("://") === -1 ? "/" + o : o : "";
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.videoTagAttrs;
    if (t)
      for (let l in t)
        this.util.hasOwn(t, l) && e.setAttribute(l, t[l]);
  },
  createVideoTag: function() {
    const e = this.util.createElement("VIDEO");
    return this.plugins.video._setTagAttrs.call(this, e), e;
  },
  _setIframeAttrs: function(e) {
    e.frameBorder = "0", e.allowFullscreen = !0;
    const t = this.options.videoIframeAttrs;
    if (t)
      for (let l in t)
        this.util.hasOwn(t, l) && e.setAttribute(l, t[l]);
  },
  createIframeTag: function() {
    const e = this.util.createElement("IFRAME");
    return this.plugins.video._setIframeAttrs.call(this, e), e;
  },
  /**
   * @Override @Required fileManager
   */
  fileTags: ["iframe", "video"],
  /**
   * @Override core, resizing, fileManager
   * @description It is called from core.selectComponent.
   * @param {Element} element Target element
   */
  select: function(e) {
    this.plugins.video.onModifyMode.call(this, e, this.plugins.resizing.call_controller_resize.call(this, e, "video"));
  },
  /**
   * @Override fileManager, resizing
   */
  destroy: function(e) {
    const t = e || this.context.video._element, l = this.context.video._container, o = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onVideoDeleteBefore == "function" && this.functions.onVideoDeleteBefore(t, l, o, this) === !1) return;
    let i = l.previousElementSibling || l.nextElementSibling;
    const a = l.parentNode;
    this.util.removeItem(l), this.plugins.video.init.call(this), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(d) {
      return d.childNodes.length === 0;
    }, null), this.focusEdge(i), this.plugins.fileManager.deleteInfo.call(this, "video", o, this.functions.onVideoUpload), this.history.push(!1);
  },
  /**
   * @Required @Override dialog
   */
  on: function(e) {
    const t = this.context.video;
    e ? t.videoInputFile && this.options.videoMultipleFile && t.videoInputFile.removeAttribute("multiple") : (t.inputX.value = t._origin_w = this.options.videoWidth === t._defaultSizeX ? "" : this.options.videoWidth, t.inputY.value = t._origin_h = this.options.videoHeight === t._defaultSizeY ? "" : this.options.videoHeight, t.proportion.disabled = !0, t.videoInputFile && this.options.videoMultipleFile && t.videoInputFile.setAttribute("multiple", "multiple")), t._resizing && this.plugins.video.setVideoRatioSelect.call(this, t._origin_h || t._defaultRatio);
  },
  /**
   * @Required @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "video", this.currentControllerName === "video");
  },
  setVideoRatio: function(e) {
    const t = this.context.video, l = e.target.options[e.target.selectedIndex].value;
    t._defaultSizeY = t._videoRatio = l ? l * 100 + "%" : t._defaultSizeY, t.inputY.placeholder = l ? l * 100 + "%" : "", t.inputY.value = "";
  },
  /**
   * @Override resizing
   * @param {String} xy 'x': width, 'y': height
   * @param {KeyboardEvent} e Event object
   */
  setInputSize: function(e, t) {
    if (t && t.keyCode === 32) {
      t.preventDefault();
      return;
    }
    const l = this.context.video;
    this.plugins.resizing._module_setInputSize.call(this, l, e), e === "y" && this.plugins.video.setVideoRatioSelect.call(this, t.target.value || l._defaultRatio);
  },
  /**
   * @Override resizing
   */
  setRatio: function() {
    this.plugins.resizing._module_setRatio.call(this, this.context.video);
  },
  submit: function(e) {
    const t = this.context.video, l = this.plugins.video;
    e.preventDefault(), e.stopPropagation(), t._align = t.modal.querySelector('input[name="suneditor_video_radio"]:checked').value;
    try {
      t.videoInputFile && t.videoInputFile.files.length > 0 ? (this.showLoading(), l.submitAction.call(this, this.context.video.videoInputFile.files)) : t.videoUrlFile && t._linkValue.length > 0 && (this.showLoading(), l.setup_url.call(this, t._linkValue));
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.video.submit.fail] cause : "' + o.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, l = [];
    for (let d = 0, f = e.length; d < f; d++)
      /video/i.test(e[d].type) && (l.push(e[d]), t += e[d].size);
    const o = this.options.videoUploadSizeLimit;
    if (o > 0) {
      let d = 0;
      const f = this.context.video._infoList;
      for (let n = 0, b = f.length; n < b; n++)
        d += f[n].size * 1;
      if (t + d > o) {
        this.closeLoading();
        const n = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + o / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(n, { limitSize: o, currentSize: d, uploadSize: t }, this)) && this.functions.noticeOpen(n);
        return;
      }
    }
    const i = this.context.video;
    i._uploadFileLength = l.length;
    const a = {
      inputWidth: i.inputX.value,
      inputHeight: i.inputY.value,
      align: i._align,
      isUpdate: this.context.dialog.updateModal,
      element: i._element
    };
    if (typeof this.functions.onVideoUploadBefore == "function") {
      const d = this.functions.onVideoUploadBefore(l, a, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.video.register.call(this, a, f) : this.plugins.video.upload.call(this, a, f);
      }).bind(this));
      if (typeof d > "u") return;
      if (!d) {
        this.closeLoading();
        return;
      }
      typeof d == "object" && d.length > 0 && (l = d);
    }
    this.plugins.video.upload.call(this, a, l);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.video.error] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.video.error.call(this, t, null);
      return;
    }
    const l = this.options.videoUploadUrl, o = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof l == "string" && l.length > 0) {
      const i = new FormData();
      for (let a = 0; a < o; a++)
        i.append("file-" + a, t[a]);
      this.plugins.fileManager.upload.call(this, l, this.options.videoUploadHeader, i, this.plugins.video.callBack_videoUpload.bind(this, e), this.functions.onVideoUploadError);
    } else
      throw Error('[SUNEDITOR.videoUpload.fail] cause : There is no "videoUploadUrl" option.');
  },
  callBack_videoUpload: function(e, t) {
    if (typeof this.functions.videoUploadHandler == "function")
      this.functions.videoUploadHandler(t, e, this);
    else {
      const l = JSON.parse(t.responseText);
      l.errorMessage ? this.plugins.video.error.call(this, l.errorMessage, l) : this.plugins.video.register.call(this, e, l);
    }
  },
  register: function(e, t) {
    const l = t.result, o = this.plugins.video.createVideoTag.call(this);
    for (let i = 0, a = l.length, d; i < a; i++)
      d = { name: l[i].name, size: l[i].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : o.cloneNode(!1), l[i].url, e.inputWidth, e.inputHeight, e.align, d, e.isUpdate);
    this.closeLoading();
  },
  setup_url: function(e) {
    try {
      const t = this.context.video;
      if (e || (e = t._linkValue), !e || /^<iframe.*\/iframe>$/.test(e) && (e = new this._w.DOMParser().parseFromString(e, "text/html").querySelector("iframe").src, e.length === 0))
        return !1;
      if (/youtu\.?be/.test(e)) {
        if (/^http/.test(e) || (e = "https://" + e), e = e.replace("watch?v=", ""), /^\/\/.+\/embed\//.test(e) || (e = e.replace(e.match(/\/\/.+\//)[0], "//www.youtube.com/embed/").replace("&", "?&")), t._youtubeQuery.length > 0)
          if (/\?/.test(e)) {
            const l = e.split("?");
            e = l[0] + "?" + t._youtubeQuery + "&" + l[1];
          } else
            e += "?" + t._youtubeQuery;
      } else if (/vimeo\.com/.test(e) && (e.endsWith("/") && (e = e.slice(0, -1)), e = "https://player.vimeo.com/video/" + e.slice(e.lastIndexOf("/") + 1), t._vimeoQuery.length > 0))
        if (/\?/.test(e)) {
          const l = e.split("?");
          e = l[0] + "?" + t._vimeoQuery + "&" + l[1];
        } else
          e += "?" + t._vimeoQuery;
      this.plugins.video.create_video.call(this, this.plugins.video[!/embed|iframe|player|\/e\/|\.php|\.html?/.test(e) && !/vimeo\.com/.test(e) ? "createVideoTag" : "createIframeTag"].call(this), e, t.inputX.value, t.inputY.value, t._align, null, this.context.dialog.updateModal);
    } catch (t) {
      throw Error('[SUNEDITOR.video.upload.fail] cause : "' + t.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  create_video: function(e, t, l, o, i, a, d) {
    this.context.resizing._resize_plugin = "video";
    const f = this.context.video;
    let n = null, b = null, u = !1;
    if (d) {
      if (e = f._element, e.src !== t) {
        u = !0;
        const R = /youtu\.?be/.test(t), s = /vimeo\.com/.test(t);
        if ((R || s) && !/^iframe$/i.test(e.nodeName)) {
          const r = this.plugins.video.createIframeTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), f._element = e = r;
        } else if (!R && !s && !/^video$/i.test(e.nodeName)) {
          const r = this.plugins.video.createVideoTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), f._element = e = r;
        } else
          e.src = t;
      }
      b = f._container, n = this.util.getParentElement(e, "FIGURE");
    } else
      u = !0, e.src = t, f._element = e, n = this.plugins.component.set_cover.call(this, e), b = this.plugins.component.set_container.call(this, n, "se-video-container");
    f._cover = n, f._container = b;
    const v = this.plugins.resizing._module_getSizeX.call(this, f) !== (l || f._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, f) !== (o || f._videoRatio), k = !d || v;
    f._resizing && (this.context.video._proportionChecked = f.proportion.checked, e.setAttribute("data-proportion", f._proportionChecked));
    let x = !1;
    k && (x = this.plugins.video.applySize.call(this)), x && i === "center" || this.plugins.video.setAlign.call(this, null, e, n, b);
    let L = !0;
    if (d)
      f._resizing && this.context.resizing._rotateVertical && k && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (L = this.insertComponent(b, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const R = this.appendFormatTag(b, null);
      R && this.setRange(R, 0, R, 0);
    }
    L && (u && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, a, !0), d && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
  },
  _update_videoCover: function(e) {
    if (!e) return;
    const t = this.context.video;
    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
    let l = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const o = e;
    t._element = e = e.cloneNode(!0);
    const i = t._cover = this.plugins.component.set_cover.call(this, e), a = t._container = this.plugins.component.set_container.call(this, i, "se-video-container");
    try {
      const d = l.querySelector("figcaption");
      let f = null;
      d && (f = this.util.createElement("DIV"), f.innerHTML = d.innerHTML, this.util.removeItem(d));
      const n = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, n[0] || o.style.width || o.width || "", n[1] || o.style.height || o.height || "");
      const b = this.util.getFormatElement(o);
      if (b && (t._align = b.style.textAlign || b.style.float), this.plugins.video.setAlign.call(this, null, e, i, a), this.util.getParentElement(o, this.util.isNotCheckingNode))
        o.parentNode.replaceChild(a, o);
      else if (this.util.isListCell(l)) {
        const u = this.util.getParentElement(o, function(v) {
          return v.parentNode === l;
        });
        l.insertBefore(a, u), this.util.removeItem(o), this.util.removeEmptyNode(u, null, !0);
      } else if (this.util.isFormatElement(l)) {
        const u = this.util.getParentElement(o, function(v) {
          return v.parentNode === l;
        });
        l = this.util.splitElement(l, u), l.parentNode.insertBefore(a, l), this.util.removeItem(o), this.util.removeEmptyNode(l, null, !0), l.children.length === 0 && (l.innerHTML = this.util.htmlRemoveWhiteSpace(l.innerHTML));
      } else
        l.parentNode.replaceChild(a, l);
      f && l.parentNode.insertBefore(f, a.nextElementSibling);
    } catch (d) {
      console.warn("[SUNEDITOR.video.error] Maybe the video tag is nested.", d);
    }
    this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, null, !0), this.plugins.video.init.call(this);
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e, t) {
    const l = this.context.video;
    l._element = e, l._cover = this.util.getParentElement(e, "FIGURE"), l._container = this.util.getParentElement(e, this.util.isMediaComponent), l._align = e.style.float || e.getAttribute("data-align") || "none", e.style.float = "", t && (l._element_w = t.w, l._element_h = t.h, l._element_t = t.t, l._element_l = t.l);
    let o = l._element.getAttribute("data-size") || l._element.getAttribute("data-origin"), i, a;
    o ? (o = o.split(","), i = o[0], a = o[1]) : t && (i = t.w, a = t.h), l._origin_w = i || e.style.width || e.width || "", l._origin_h = a || e.style.height || e.height || "";
  },
  /**
   * @Required @Override fileManager, resizing
   */
  openModify: function(e) {
    const t = this.context.video;
    if (t.videoUrlFile && (t._linkValue = t.preview.textContent = t.videoUrlFile.value = t._element.src || (t._element.querySelector("source") || "").src || ""), (t.modal.querySelector('input[name="suneditor_video_radio"][value="' + t._align + '"]') || t.modal.querySelector('input[name="suneditor_video_radio"][value="none"]')).checked = !0, t._resizing) {
      this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.video);
      const l = t._videoRatio = this.plugins.resizing._module_getSizeY.call(this, t);
      this.plugins.video.setVideoRatioSelect.call(this, l) || (t.inputY.value = t._onlyPercentage ? this.util.getNumber(l, 2) : l);
    }
    e || this.plugins.dialog.open.call(this, "video", !0);
  },
  setVideoRatioSelect: function(e) {
    let t = !1;
    const l = this.context.video, o = l.videoRatioOption.options;
    /%$/.test(e) || l._onlyPercentage ? e = this.util.getNumber(e, 2) / 100 + "" : (!this.util.isNumber(e) || e * 1 >= 1) && (e = ""), l.inputY.placeholder = "";
    for (let i = 0, a = o.length; i < a; i++)
      o[i].value === e ? (t = o[i].selected = !0, l.inputY.placeholder = e ? e * 100 + "%" : "") : o[i].selected = !1;
    return t;
  },
  /**
   * @Override fileManager
   */
  checkFileInfo: function() {
    this.plugins.fileManager.checkInfo.call(this, "video", ["iframe", "video"], this.functions.onVideoUpload, this.plugins.video._update_videoCover.bind(this), !0);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "video", this.functions.onVideoUpload);
  },
  /**
   * @Override fileManager
   */
  applySize: function(e, t) {
    const l = this.context.video;
    return e || (e = l.inputX.value || this.options.videoWidth), t || (t = l.inputY.value || this.options.videoHeight), l._onlyPercentage || /%$/.test(e) || !e ? (this.plugins.video.setPercentSize.call(this, e || "100%", t || (/%$/.test(l._videoRatio) ? l._videoRatio : l._defaultRatio)), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.video.setAutoSize.call(this) : this.plugins.video.setSize.call(this, e, t || l._videoRatio || l._defaultRatio, !1), !1);
  },
  /**
   * @Override resizing
   */
  sizeRevert: function() {
    this.plugins.resizing._module_sizeRevert.call(this, this.context.video);
  },
  /**
   * @Override resizing
   */
  setSize: function(e, t, l, o) {
    const i = this.context.video, a = /^(rw|lw)$/.test(o), d = /^(th|bh)$/.test(o);
    d || (e = this.util.getNumber(e, 0)), a || (t = this.util.isNumber(t) ? t + i.sizeUnit : t || ""), e = e ? e + i.sizeUnit : "", d || (i._element.style.width = e), a || (i._cover.style.paddingBottom = i._cover.style.height = t), !d && !/%$/.test(e) && (i._cover.style.width = e, i._container.style.width = ""), !a && !/%$/.test(t) ? i._element.style.height = t : i._element.style.height = "", l || i._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, i);
  },
  /**
   * @Override resizing
   */
  setAutoSize: function() {
    this.plugins.video.setPercentSize.call(this, 100, this.context.video._defaultRatio);
  },
  /**
   * @Override resizing
   */
  setOriginSize: function(e) {
    const t = this.context.video;
    t._element.removeAttribute("data-percentage"), this.plugins.resizing.resetTransform.call(this, t._element), this.plugins.video.cancelPercentAttr.call(this);
    const l = ((e ? t._element.getAttribute("data-size") : "") || t._element.getAttribute("data-origin") || "").split(",");
    if (l) {
      const o = l[0], i = l[1];
      t._onlyPercentage || /%$/.test(o) && (/%$/.test(i) || !/\d/.test(i)) ? this.plugins.video.setPercentSize.call(this, o, i) : this.plugins.video.setSize.call(this, o, i), this.plugins.resizing._module_saveCurrentSize.call(this, t);
    }
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const l = this.context.video;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + l.sizeUnit : t || l._defaultRatio, l._container.style.width = this.util.isNumber(e) ? e + "%" : e, l._container.style.height = "", l._cover.style.width = "100%", l._cover.style.height = t, l._cover.style.paddingBottom = t, l._element.style.width = "100%", l._element.style.height = "100%", l._element.style.maxWidth = "", l._align === "center" && this.plugins.video.setAlign.call(this, null, null, null, null), l._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing._module_saveCurrentSize.call(this, l);
  },
  /**
   * @Override resizing
   */
  cancelPercentAttr: function() {
    const e = this.context.video;
    e._cover.style.width = "", e._cover.style.height = "", e._cover.style.paddingBottom = "", e._container.style.width = "", e._container.style.height = "", this.util.removeClass(e._container, this.context.video._floatClassRegExp), this.util.addClass(e._container, "__se__float-" + e._align), e._align === "center" && this.plugins.video.setAlign.call(this, null, null, null, null);
  },
  /**
   * @Override resizing
   */
  setAlign: function(e, t, l, o) {
    const i = this.context.video;
    e || (e = i._align), t || (t = i._element), l || (l = i._cover), o || (o = i._container), /%$/.test(t.style.width) && e === "center" ? (o.style.minWidth = "100%", l.style.width = o.style.width, l.style.height = l.style.height, l.style.paddingBottom = /%$/.test(l.style.height) ? this.util.getNumber(this.util.getNumber(l.style.height, 2) / 100 * this.util.getNumber(l.style.width, 2), 2) + "%" : l.style.height) : (o.style.minWidth = "", l.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width || "100%", l.style.paddingBottom = l.style.height), this.util.hasClass(o, "__se__float-" + e) || (this.util.removeClass(o, i._floatClassRegExp), this.util.addClass(o, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.video;
    e.videoInputFile && (e.videoInputFile.value = ""), e.videoUrlFile && (e._linkValue = e.preview.textContent = e.videoUrlFile.value = ""), e.videoInputFile && e.videoUrlFile && (e.videoUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._origin_w = this.options.videoWidth, e._origin_h = this.options.videoHeight, e.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = !0, e._resizing && (e.inputX.value = this.options.videoWidth === e._defaultSizeX ? "" : this.options.videoWidth, e.inputY.value = this.options.videoHeight === e._defaultSizeY ? "" : this.options.videoHeight, e.proportion.checked = !0, e.proportion.disabled = !0, this.plugins.video.setVideoRatioSelect.call(this, e._defaultRatio));
  }
}, kr = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([Kt, il, ll]);
    const t = e.context, l = t.audio = {
      _infoList: [],
      // @Override fileManager
      _infoIndex: 0,
      // @Override fileManager
      _uploadFileLength: 0,
      // @Override fileManager
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      targetSelect: null,
      _origin_w: e.options.audioWidth,
      _origin_h: e.options.audioHeight,
      _linkValue: "",
      // @require @Override component
      _element: null,
      _cover: null,
      _container: null
    };
    let o = this.setDialog(e);
    l.modal = o, l.audioInputFile = o.querySelector("._se_audio_files"), l.audioUrlFile = o.querySelector(".se-input-url"), l.focusElement = l.audioInputFile || l.audioUrlFile, l.preview = o.querySelector(".se-link-preview");
    let i = this.setController(e);
    l.controller = i, o.querySelector("form").addEventListener("submit", this.submit.bind(e)), l.audioInputFile && o.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(l.audioInputFile, l.audioUrlFile, l.preview)), l.audioInputFile && l.audioUrlFile && l.audioInputFile.addEventListener("change", this._fileInputChange.bind(l)), i.addEventListener("click", this.onClick_controller.bind(e)), l.audioUrlFile && l.audioUrlFile.addEventListener("input", this._onLinkPreview.bind(l.preview, l, e.options.linkProtocol)), t.dialog.modal.appendChild(o), t.element.relative.appendChild(i), o = null, i = null;
  },
  /** HTML - dialog */
  setDialog: function(e) {
    const t = e.options, l = e.lang, o = e.util.createElement("DIV");
    o.className = "se-dialog-content", o.style.display = "none";
    let i = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + l.dialogBox.close + '" aria-label="' + l.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + l.dialogBox.audioBox.title + '</span></div><div class="se-dialog-body">';
    return t.audioFileInput && (i += '<div class="se-dialog-form"><label>' + l.dialogBox.audioBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_audio_files" type="file" accept="' + t.audioAccept + '"' + (t.audioMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + l.controller.remove + '" aria-label="' + l.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.audioUrlInput && (i += '<div class="se-dialog-form"><label>' + l.dialogBox.audioBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), i += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + l.dialogBox.submitButton + '" aria-label="' + l.dialogBox.submitButton + '"><span>' + l.dialogBox.submitButton + "</span></button></div></form>", o.innerHTML = i, o;
  },
  /** HTML - controller */
  setController: function(e) {
    const t = e.lang, l = e.icons, o = e.util.createElement("DIV");
    return o.className = "se-controller se-controller-link", o.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-tooltip">' + l.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' + l.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", o;
  },
  // Disable url input when uploading files
  _fileInputChange: function() {
    this.audioInputFile.value ? (this.audioUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.audioUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  // Disable url input when uploading files
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  // create new audio tag
  _createAudioTag: function() {
    const e = this.util.createElement("AUDIO");
    this.plugins.audio._setTagAttrs.call(this, e);
    const t = this.context.audio._origin_w, l = this.context.audio._origin_h;
    return e.setAttribute("origin-size", t + "," + l), e.style.cssText = (t ? "width:" + t + "; " : "") + (l ? "height:" + l + ";" : ""), e;
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.audioTagAttrs;
    if (t)
      for (let l in t)
        this.util.hasOwn(t, l) && e.setAttribute(l, t[l]);
  },
  _onLinkPreview: function(e, t, l) {
    const o = l.target.value.trim();
    e._linkValue = this.textContent = o ? t && o.indexOf("://") === -1 && o.indexOf("#") !== 0 ? t + o : o.indexOf("://") === -1 ? "/" + o : o : "";
  },
  /**
   * @Required @Override fileManager
   */
  fileTags: ["audio"],
  /**
   * @Override core, fileManager, resizing
   * @description It is called from core.selectComponent.
   * @param {Element} element Target element
   */
  select: function(e) {
    this.plugins.audio.onModifyMode.call(this, e);
  },
  /**
   * @Override fileManager, resizing 
   */
  destroy: function(e) {
    e = e || this.context.audio._element;
    const t = this.util.getParentElement(e, this.util.isComponent) || e, l = e.getAttribute("data-index") * 1;
    if (typeof this.functions.onAudioDeleteBefore == "function" && this.functions.onAudioDeleteBefore(e, t, l, this) === !1) return;
    const o = t.previousElementSibling || t.nextElementSibling, i = t.parentNode;
    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), i !== this.context.element.wysiwyg && this.util.removeItemAllParents(i, function(a) {
      return a.childNodes.length === 0;
    }, null), this.focusEdge(o), this.plugins.fileManager.deleteInfo.call(this, "audio", l, this.functions.onAudioUpload), this.history.push(!1);
  },
  /**
   * @Override fileManager
   */
  checkFileInfo: function() {
    this.plugins.fileManager.checkInfo.call(this, "audio", ["audio"], this.functions.onAudioUpload, this.plugins.audio.updateCover.bind(this), !1);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "audio", this.functions.onAudioUpload);
  },
  /**
   * @Required @Override dialog
   */
  on: function(e) {
    const t = this.context.audio;
    e ? t._element ? (this.context.dialog.updateModal = !0, t._linkValue = t.preview.textContent = t.audioUrlFile.value = t._element.src, t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.removeAttribute("multiple")) : t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.removeAttribute("multiple") : (this.plugins.audio.init.call(this), t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.setAttribute("multiple", "multiple"));
  },
  /**
   * @Required @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "audio", this.currentControllerName === "audio");
  },
  submit: function(e) {
    const t = this.context.audio;
    e.preventDefault(), e.stopPropagation();
    try {
      t.audioInputFile && t.audioInputFile.files.length > 0 ? (this.showLoading(), this.plugins.audio.submitAction.call(this, t.audioInputFile.files)) : t.audioUrlFile && t._linkValue.length > 0 && (this.showLoading(), this.plugins.audio.setupUrl.call(this, t._linkValue));
    } catch (l) {
      throw this.closeLoading(), Error('[SUNEDITOR.audio.submit.fail] cause : "' + l.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, l = [];
    for (let d = 0, f = e.length; d < f; d++)
      /audio/i.test(e[d].type) && (l.push(e[d]), t += e[d].size);
    const o = this.options.audioUploadSizeLimit;
    if (o > 0) {
      let d = 0;
      const f = this.context.audio._infoList;
      for (let n = 0, b = f.length; n < b; n++)
        d += f[n].size * 1;
      if (t + d > o) {
        this.closeLoading();
        const n = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + o / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(n, { limitSize: o, currentSize: d, uploadSize: t }, this)) && this.functions.noticeOpen(n);
        return;
      }
    }
    const i = this.context.audio;
    i._uploadFileLength = l.length;
    const a = {
      isUpdate: this.context.dialog.updateModal,
      element: i._element
    };
    if (typeof this.functions.onAudioUploadBefore == "function") {
      const d = this.functions.onAudioUploadBefore(l, a, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.audio.register.call(this, a, f) : this.plugins.audio.upload.call(this, a, f);
      }).bind(this));
      if (typeof d > "u") return;
      if (!d) {
        this.closeLoading();
        return;
      }
      typeof d == "object" && d.length > 0 && (l = d);
    }
    this.plugins.audio.upload.call(this, a, l);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.audio.exception] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.audio.error.call(this, t, null);
      return;
    }
    const l = this.options.audioUploadUrl, o = this.context.dialog.updateModal ? 1 : t.length, i = new FormData();
    for (let a = 0; a < o; a++)
      i.append("file-" + a, t[a]);
    this.plugins.fileManager.upload.call(this, l, this.options.audioUploadHeader, i, this.plugins.audio.callBack_upload.bind(this, e), this.functions.onAudioUploadError);
  },
  callBack_upload: function(e, t) {
    if (typeof this.functions.audioUploadHandler == "function")
      this.functions.audioUploadHandler(t, e, this);
    else {
      const l = JSON.parse(t.responseText);
      l.errorMessage ? this.plugins.audio.error.call(this, l.errorMessage, l) : this.plugins.audio.register.call(this, e, l);
    }
  },
  register: function(e, t) {
    const l = t.result;
    for (let o = 0, i = l.length, a, d; o < i; o++)
      e.isUpdate ? d = e.element : d = this.plugins.audio._createAudioTag.call(this), a = { name: l[o].name, size: l[o].size }, this.plugins.audio.create_audio.call(this, d, l[o].url, a, e.isUpdate);
    this.closeLoading();
  },
  setupUrl: function(e) {
    try {
      if (e.length === 0) return !1;
      this.plugins.audio.create_audio.call(this, this.plugins.audio._createAudioTag.call(this), e, null, this.context.dialog.updateModal);
    } catch (t) {
      throw Error('[SUNEDITOR.audio.audio.fail] cause : "' + t.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  create_audio: function(e, t, l, o) {
    const i = this.context.audio;
    if (o)
      if (i._element && (e = i._element), e && e.src !== t)
        e.src = t, this.selectComponent(e, "audio");
      else {
        this.selectComponent(e, "audio");
        return;
      }
    else {
      e.src = t;
      const a = this.plugins.component.set_cover.call(this, e), d = this.plugins.component.set_container.call(this, a, "");
      if (!this.insertComponent(d, !1, !0, !this.options.mediaAutoSelect)) {
        this.focus();
        return;
      }
      if (!this.options.mediaAutoSelect) {
        const f = this.appendFormatTag(d, null);
        f && this.setRange(f, 0, f, 0);
      }
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, l, !1), o && this.history.push(!1);
  },
  updateCover: function(e) {
    const t = this.context.audio;
    this.plugins.audio._setTagAttrs.call(this, e);
    let l = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const o = e;
    t._element = e = e.cloneNode(!1);
    const i = this.plugins.component.set_cover.call(this, e), a = this.plugins.component.set_container.call(this, i, "se-audio-container");
    try {
      if (this.util.getParentElement(o, this.util.isNotCheckingNode))
        o.parentNode.replaceChild(a, o);
      else if (this.util.isListCell(l)) {
        const d = this.util.getParentElement(o, function(f) {
          return f.parentNode === l;
        });
        l.insertBefore(a, d), this.util.removeItem(o), this.util.removeEmptyNode(d, null, !0);
      } else if (this.util.isFormatElement(l)) {
        const d = this.util.getParentElement(o, function(f) {
          return f.parentNode === l;
        });
        l = this.util.splitElement(l, d), l.parentNode.insertBefore(a, l), this.util.removeItem(o), this.util.removeEmptyNode(l, null, !0), l.children.length === 0 && (l.innerHTML = this.util.htmlRemoveWhiteSpace(l.innerHTML));
      } else
        l.parentNode.replaceChild(a, l);
    } catch (d) {
      console.warn("[SUNEDITOR.audio.error] Maybe the audio tag is nested.", d);
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, null, !1), this.plugins.audio.init.call(this);
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e) {
    const t = this.context.audio;
    this.setControllerPosition(t.controller, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t.controller, e, this.plugins.audio.onControllerOff.bind(this, e), "audio"), this.util.addClass(e, "active"), t._element = e, t._cover = this.util.getParentElement(e, "FIGURE"), t._container = this.util.getParentElement(e, this.util.isComponent);
  },
  /**
   * @Required @Override fileManager, resizing
   */
  openModify: function(e) {
    if (this.context.audio.audioUrlFile) {
      const t = this.context.audio;
      t._linkValue = t.preview.textContent = t.audioUrlFile.value = t._element.src;
    }
    e || this.plugins.dialog.open.call(this, "audio", !0);
  },
  onClick_controller: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command");
    t && (e.preventDefault(), /update/.test(t) ? this.plugins.audio.openModify.call(this, !1) : this.plugins.audio.destroy.call(this, this.context.audio._element), this.controllersOff());
  },
  onControllerOff: function(e) {
    this.util.removeClass(e, "active"), this.context.audio.controller.style.display = "none";
  },
  /**
   * @Required @Override dialog
   */
  init: function() {
    if (this.context.dialog.updateModal) return;
    const e = this.context.audio;
    e.audioInputFile && (e.audioInputFile.value = ""), e.audioUrlFile && (e._linkValue = e.preview.textContent = e.audioUrlFile.value = ""), e.audioInputFile && e.audioUrlFile && (e.audioUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._element = null;
  }
}, fn = "https://katex.org/docs/supported.html", xr = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([Kt]);
    const t = e.context;
    t.math = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      previewElement: null,
      fontSizeElement: null,
      defaultFontSize: "",
      _mathExp: null
    };
    let l = this.setDialog(e);
    t.math.modal = l, t.math.focusElement = l.querySelector(".se-math-exp"), t.math.previewElement = l.querySelector(".se-math-preview"), t.math.fontSizeElement = l.querySelector(".se-math-size"), t.math.focusElement.addEventListener("paste", function(i) {
      typeof e.functions.onPasteMath == "function" && e.functions.onPasteMath(i, e);
    }, !1), t.math.focusElement.addEventListener(e.util.isIE ? "textinput" : "input", this._renderMathExp.bind(e, t.math), !1), t.math.fontSizeElement.addEventListener("change", (function(i) {
      this.fontSize = i.target.value;
    }).bind(t.math.previewElement.style), !1);
    let o = this.setController_MathButton(e);
    t.math.mathController = o, t.math._mathExp = null, l.querySelector("form").addEventListener("submit", this.submit.bind(e), !1), o.addEventListener("click", this.onClick_mathController.bind(e)), t.math.previewElement.style.fontSize = t.math.defaultFontSize, t.dialog.modal.appendChild(l), t.element.relative.appendChild(o), l = null, o = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, l = e.util.createElement("DIV"), o = e.options.mathFontSize;
    let i = o[0].value;
    l.className = "se-dialog-content", l.style.display = "none";
    let a = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + fn + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let d = 0, f = o.length, n; d < f; d++)
      n = o[d], n.default && (i = n.value), a += '<option value="' + n.value + '"' + (n.default ? " selected" : "") + ">" + n.text + "</option>";
    return a += '</select></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.previewLabel + '</label><p class="se-math-preview"></p></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", e.context.math.defaultFontSize = i, l.innerHTML = a, l;
  },
  /** modify controller button */
  setController_MathButton: function(e) {
    const t = e.lang, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-link", l.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + e.icons.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + e.icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", l;
  },
  /**
   * @Required @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "math", this.currentControllerName === "math");
  },
  /**
   * @Override core - managedTagsInfo
   */
  managedTags: function() {
    return {
      className: "katex",
      method: function(e) {
        if (!e.getAttribute("data-exp") || !this.options.katex) return;
        const t = this._d.createRange().createContextualFragment(this.plugins.math._renderer.call(this, this.util.HTMLDecoder(e.getAttribute("data-exp"))));
        e.innerHTML = t.querySelector(".katex").innerHTML, e.setAttribute("contenteditable", !1);
      }
    };
  },
  _renderer: function(e) {
    let t = "";
    try {
      this.util.removeClass(this.context.math.focusElement, "se-error"), t = this.options.katex.src.renderToString(e, { throwOnError: !0, displayMode: !0 });
    } catch (l) {
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + fn + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", l);
    }
    return t;
  },
  _renderMathExp: function(e, t) {
    e.previewElement.innerHTML = this.plugins.math._renderer.call(this, t.target.value);
  },
  submit: function(e) {
    this.showLoading(), e.preventDefault(), e.stopPropagation();
    const t = (function() {
      if (this.context.math.focusElement.value.trim().length === 0) return !1;
      const l = this.context.math, o = l.focusElement.value, i = l.previewElement.querySelector(".katex");
      if (!i) return !1;
      if (i.className = "__se__katex " + i.className, i.setAttribute("contenteditable", !1), i.setAttribute("data-exp", this.util.HTMLEncoder(o)), i.setAttribute("data-font-size", l.fontSizeElement.value), i.style.fontSize = l.fontSizeElement.value, this.context.dialog.updateModal) {
        const a = this.util.getParentElement(l._mathExp, ".katex");
        a.parentNode.replaceChild(i, a), this.setRange(i, 0, i, 1);
      } else {
        const a = this.getSelectedElements();
        if (a.length > 1) {
          const f = this.util.createElement(a[0].nodeName);
          if (f.appendChild(i), !this.insertNode(f, null, !0)) return !1;
        } else if (!this.insertNode(i, null, !0)) return !1;
        const d = this.util.createTextNode(this.util.zeroWidthSpace);
        i.parentNode.insertBefore(d, i.nextSibling), this.setRange(i, 0, i, 1);
      }
      return l.focusElement.value = "", l.fontSizeElement.value = "1em", l.previewElement.style.fontSize = "1em", l.previewElement.innerHTML = "", !0;
    }).bind(this);
    try {
      t() && (this.plugins.dialog.close.call(this), this.history.push(!1));
    } catch {
      this.plugins.dialog.close.call(this);
    } finally {
      this.closeLoading();
    }
    return !1;
  },
  active: function(e) {
    if (!e)
      this.controllerArray.indexOf(this.context.math.mathController) > -1 && this.controllersOff();
    else if (e.getAttribute("data-exp"))
      return this.controllerArray.indexOf(this.context.math.mathController) < 0 && (this.setRange(e, 0, e, 1), this.plugins.math.call_controller.call(this, e)), !0;
    return !1;
  },
  on: function(e) {
    if (!e)
      this.plugins.math.init.call(this);
    else {
      const t = this.context.math;
      if (t._mathExp) {
        const l = this.util.HTMLDecoder(t._mathExp.getAttribute("data-exp")), o = t._mathExp.getAttribute("data-font-size") || "1em";
        this.context.dialog.updateModal = !0, t.focusElement.value = l, t.fontSizeElement.value = o, t.previewElement.innerHTML = this.plugins.math._renderer.call(this, l), t.previewElement.style.fontSize = o;
      }
    }
  },
  call_controller: function(e) {
    this.context.math._mathExp = e;
    const t = this.context.math.mathController;
    this.setControllerPosition(t, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t, e, "math");
  },
  onClick_mathController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    t && (e.preventDefault(), /update/.test(t) ? (this.context.math.focusElement.value = this.util.HTMLDecoder(this.context.math._mathExp.getAttribute("data-exp")), this.plugins.dialog.open.call(this, "math", !0)) : (this.util.removeItem(this.context.math._mathExp), this.context.math._mathExp = null, this.focus(), this.history.push(!1)), this.controllersOff());
  },
  init: function() {
    const e = this.context.math;
    e.mathController.style.display = "none", e._mathExp = null, e.focusElement.value = "", e.previewElement.innerHTML = "";
  }
};
var Ri = { exports: {} }, Sr = Ri.exports, pn;
function Lr() {
  return pn || (pn = 1, function(e) {
    (function(t, l) {
      e.exports = t.document ? l(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return l(o);
      };
    })(typeof window < "u" ? window : Sr, function(t, l) {
      const o = {
        name: "fileBrowser",
        _xmlHttp: null,
        _loading: null,
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function(i) {
          const a = i.context;
          a.fileBrowser = {
            _closeSignal: !1,
            area: null,
            header: null,
            tagArea: null,
            body: null,
            list: null,
            tagElements: null,
            items: [],
            selectedTags: [],
            selectorHandler: null,
            contextPlugin: "",
            columnSize: 4
          };
          let d = i.util.createElement("DIV");
          d.className = "se-file-browser sun-editor-common";
          let f = i.util.createElement("DIV");
          f.className = "se-file-browser-back";
          let n = i.util.createElement("DIV");
          n.className = "se-file-browser-inner", n.innerHTML = this.set_browser(i), d.appendChild(f), d.appendChild(n), this._loading = d.querySelector(".se-loading-box"), a.fileBrowser.area = d, a.fileBrowser.header = n.querySelector(".se-file-browser-header"), a.fileBrowser.titleArea = n.querySelector(".se-file-browser-title"), a.fileBrowser.tagArea = n.querySelector(".se-file-browser-tags"), a.fileBrowser.body = n.querySelector(".se-file-browser-body"), a.fileBrowser.list = n.querySelector(".se-file-browser-list"), a.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(i)), a.fileBrowser.list.addEventListener("click", this.onClickFile.bind(i)), n.addEventListener("mousedown", this._onMouseDown_browser.bind(i)), n.addEventListener("click", this._onClick_browser.bind(i)), a.element.relative.appendChild(d), d = null, f = null, n = null;
        },
        set_browser: function(i) {
          const a = i.lang;
          return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" title="' + a.dialogBox.close + '" aria-label="' + a.dialogBox.close + '">' + i.icons.cancel + '</button><span class="se-file-browser-title"></span><div class="se-file-browser-tags"></div></div><div class="se-file-browser-body"><div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div><div class="se-file-browser-list"></div></div></div>';
        },
        /**
         * @description Event to control the behavior of closing the browser
         * @param {MouseEvent} e Event object
         * @private
         */
        _onMouseDown_browser: function(i) {
          /se-file-browser-inner/.test(i.target.className) ? this.context.fileBrowser._closeSignal = !0 : this.context.fileBrowser._closeSignal = !1;
        },
        /**
         * @description Event to close the window when the outside area of the browser or close button is click
         * @param {MouseEvent} e Event object
         * @private
         */
        _onClick_browser: function(i) {
          i.stopPropagation(), (/close/.test(i.target.getAttribute("data-command")) || this.context.fileBrowser._closeSignal) && this.plugins.fileBrowser.close.call(this);
        },
        /**
         * @description Open a file browser plugin
         * @param {String} pluginName Plugin name using the file browser
         * @param {Function|null} selectorHandler When the function comes as an argument value, it substitutes "context.selectorHandler".
         */
        open: function(i, a) {
          this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(b) {
            /27/.test(b.keyCode) && this.plugins.fileBrowser.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
          const d = this.context.fileBrowser;
          d.contextPlugin = i, d.selectorHandler = a;
          const f = this.context[i], n = f.listClass;
          this.util.hasClass(d.list, n) || (d.list.className = "se-file-browser-list " + n), this.options.popupDisplay === "full" ? d.area.style.position = "fixed" : d.area.style.position = "absolute", d.titleArea.textContent = f.title, d.area.style.display = "block", this.context[i].directData ? this.plugins.fileBrowser._drawListItem.call(this, this.context[i].directData, !0) : this.plugins.fileBrowser._drawFileList.call(this, this.context[i].url, this.context[i].header);
        },
        _bindClose: null,
        /**
         * @description Close a fileBrowser plugin
         * The plugin's "init" method is called.
         */
        close: function() {
          const i = this.plugins.fileBrowser;
          i._xmlHttp && i._xmlHttp.abort(), i._bindClose && (this._d.removeEventListener("keydown", i._bindClose), i._bindClose = null);
          const a = this.context.fileBrowser;
          a.area.style.display = "none", a.selectorHandler = null, a.selectedTags = [], a.items = [], a.list.innerHTML = a.tagArea.innerHTML = a.titleArea.textContent = "", typeof this.plugins[a.contextPlugin].init == "function" && this.plugins[a.contextPlugin].init.call(this), a.contextPlugin = "";
        },
        /**
         * @description Show file browser loading box
         */
        showBrowserLoading: function() {
          this._loading.style.display = "block";
        },
        /**
         * @description Close file browser loading box
         */
        closeBrowserLoading: function() {
          this._loading.style.display = "none";
        },
        _drawFileList: function(i, a) {
          const d = this.plugins.fileBrowser, f = d._xmlHttp = this.util.getXMLHttpRequest();
          if (f.onreadystatechange = d._callBackGet.bind(this, f), f.open("get", i, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
            for (let n in a)
              f.setRequestHeader(n, a[n]);
          f.send(null), this.plugins.fileBrowser.showBrowserLoading();
        },
        _callBackGet: function(i) {
          if (i.readyState === 4) {
            if (this.plugins.fileBrowser._xmlHttp = null, i.status === 200)
              try {
                const a = JSON.parse(i.responseText);
                a.result.length > 0 ? this.plugins.fileBrowser._drawListItem.call(this, a.result, !0) : a.nullMessage && (this.context.fileBrowser.list.innerHTML = a.nullMessage);
              } catch (a) {
                throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + a.message + '"');
              } finally {
                this.plugins.fileBrowser.closeBrowserLoading(), this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + "px";
              }
            else if (this.plugins.fileBrowser.closeBrowserLoading(), i.status !== 0) {
              const a = i.responseText ? JSON.parse(i.responseText) : i, d = "[SUNEDITOR.fileBrowser.get.serverException] status: " + i.status + ", response: " + (a.errorMessage || i.responseText);
              throw Error(d);
            }
          }
        },
        _drawListItem: function(i, a) {
          const d = this.context.fileBrowser, f = this.context[d.contextPlugin], n = [], b = i.length, u = f.columnSize || d.columnSize, v = u <= 1 ? 1 : Math.round(b / u) || 1, k = f.itemTemplateHandler;
          let x = "", L = '<div class="se-file-item-column">', R = 1;
          for (let s = 0, r, c; s < b; s++)
            if (r = i[s], c = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], c = r.tag = c.map(function(p) {
              return p.trim();
            }), L += k(r), (s + 1) % v === 0 && R < u && s + 1 < b && (R++, L += '</div><div class="se-file-item-column">'), a && c.length > 0)
              for (let p = 0, m = c.length, g; p < m; p++)
                g = c[p], g && n.indexOf(g) === -1 && (n.push(g), x += '<a title="' + g + '" aria-label="' + g + '">' + g + "</a>");
          L += "</div>", d.list.innerHTML = L, a && (d.items = i, d.tagArea.innerHTML = x, d.tagElements = d.tagArea.querySelectorAll("A"));
        },
        onClickTag: function(i) {
          const a = i.target;
          if (!this.util.isAnchor(a)) return;
          const d = a.textContent, f = this.plugins.fileBrowser, n = this.context.fileBrowser, b = n.tagArea.querySelector('a[title="' + d + '"]'), u = n.selectedTags, v = u.indexOf(d);
          v > -1 ? (u.splice(v, 1), this.util.removeClass(b, "on")) : (u.push(d), this.util.addClass(b, "on")), f._drawListItem.call(
            this,
            u.length === 0 ? n.items : n.items.filter(function(k) {
              return k.tag.some(function(x) {
                return u.indexOf(x) > -1;
              });
            }),
            !1
          );
        },
        onClickFile: function(i) {
          i.preventDefault(), i.stopPropagation();
          const a = this.context.fileBrowser, d = a.list;
          let f = i.target, n = null;
          if (f === d) return;
          for (; d !== f.parentNode && (n = f.getAttribute("data-command"), !n); )
            f = f.parentNode;
          if (!n) return;
          (a.selectorHandler || this.context[a.contextPlugin].selectorHandler)(f, f.parentNode.querySelector(".__se__img_name").textContent), this.plugins.fileBrowser.close.call(this);
        }
      };
      return typeof l > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileBrowser", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: o
      })), o;
    });
  }(Ri)), Ri.exports;
}
var Er = /* @__PURE__ */ Lr();
const Tr = /* @__PURE__ */ Se(Er), Br = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([Tr]);
    const t = e.context;
    t.imageGallery = {
      title: e.lang.toolbar.imageGallery,
      // @Required @Override fileBrowser - File browser window title.
      directData: e.options.imageGalleryData,
      // @option @Override fileBrowser - Direct JSON data without making server requests.
      url: e.options.imageGalleryUrl,
      // @option @Override fileBrowser - File server url.
      header: e.options.imageGalleryHeader,
      // @Required @Override fileBrowser - File server http header.
      listClass: "se-image-list",
      // @Required @Override fileBrowser - Class name of list div.
      itemTemplateHandler: this.drawItems,
      // @Required @Override fileBrowser - Function that defines the HTML of an file item.
      selectorHandler: this.setImage.bind(e),
      // @Required @Override fileBrowser - Function that action when item click.
      columnSize: 4
      // @Option @Override fileBrowser - Number of "div.se-file-item-column" to be created (default: 4)
    };
  },
  /**
   * @Required @Override fileBrowser
   * @description Open a file browser.
   * @param {Function|null} selectorHandler When the function comes as an argument value, it substitutes "context.selectorHandler".
   */
  open: function(e) {
    this.plugins.fileBrowser.open.call(this, "imageGallery", e);
  },
  /**
   * @Required @Override fileBrowser
   * @description Define the HTML of the item to be put in "div.se-file-item-column".
   * Format: [
   *      { src: "image src", name: "name(@option)", alt: "image alt(@option)", tag: "tag name(@option)" }
   * ]
   * @param {Object} item Item of the response data's array
   */
  drawItems: function(e) {
    const t = e.src.split("/").pop();
    return '<div class="se-file-item-img"><img src="' + (e.thumbnail || e.src) + '" alt="' + (e.alt || t) + '" data-command="pick" data-value="' + (e.src || e.thumbnail) + '"><div class="se-file-img-name se-file-name-back"></div><div class="se-file-img-name __se__img_name">' + (e.name || t) + "</div></div>";
  },
  setImage: function(e, t) {
    this.callPlugin("image", (function() {
      const l = { name: t, size: 0 };
      this.plugins.image.create_image.call(this, e.getAttribute("data-value"), null, this.context.image._origin_w, this.context.image._origin_h, "none", l, e.alt);
    }).bind(this), null);
  }
}, zr = { blockquote: ja, align: Ga, font: Ka, fontSize: Ya, fontColor: Xa, hiliteColor: Ja, horizontalRule: Qa, list: er, table: tr, formatBlock: ir, lineHeight: lr, template: nr, paragraphStyle: or, textStyle: sr, link: cr, image: Cr, video: wr, audio: kr, math: xr, imageGallery: Br }, Nr = {
  buttonList: [
    ["undo", "redo"],
    ["font", "fontSize", "formatBlock"],
    ["paragraphStyle", "blockquote"],
    ["bold", "underline", "italic", "strike", "subscript", "superscript"],
    ["fontColor", "hiliteColor", "textStyle"],
    ["removeFormat"],
    "/",
    // Line break
    ["outdent", "indent"],
    ["align", "horizontalRule", "list", "lineHeight"],
    [
      "table",
      "link"
      /**'image', 'video', 'audio',*/
    ],
    /** ['imageGallery'] */
    // You must add the "imageGalleryUrl".
    ["fullScreen", "showBlocks", "codeView"],
    ["preview", "print"]
    // ['fake-lkt-box-plugin', 'lkt-grid-columns-2']
  ]
}, hn = {
  // rtl icon
  rtl: {
    italic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 15.8" xml:space="preserve"><g><path d="M0.3,0.1c0.3,0,0.5,0,0.7,0c1,0.1,1.7,0.1,2.2,0.1H4L7.2,0l0.2,1.1H7c-0.5,0-1,0.1-1.5,0.3v0.4l0.3,1.9L6,4.4L6.3,6 l0.1,0.4l0.1,0.5c0.1,0.2,0.1,0.4,0.2,0.7s0.1,0.6,0.2,0.9L7,9.1l0.6,2.8l0.3,1.4c0.1,0.4,0.2,0.7,0.4,1c0.4,0.2,0.8,0.3,1.2,0.4 l0.8,0.2l0.2,0.9l-1.1,0c-0.9-0.1-1.5-0.1-1.8-0.1h-2c-0.9,0.1-1.4,0.2-1.5,0.2c-0.1,0-0.2,0-0.3,0H3.4c-0.1,0-0.2,0-0.2,0 l-0.1-0.4c0-0.2-0.1-0.4-0.1-0.6l0.7-0.1c0.4,0,0.8-0.1,1.2-0.2c0-0.1,0-0.2,0-0.3l-0.1-0.5l-0.4-2.4L4,9.6L3.4,6.4 C3.2,5.7,3,4.7,2.7,3.3c0-0.3-0.1-0.5-0.1-0.8C2.5,2.1,2.4,1.9,2.3,1.6C2,1.4,1.6,1.3,1.3,1.2C0.9,1.2,0.5,1.1,0.2,0.9L0,0.4L0,0 L0.3,0.1L0.3,0.1z"/></g></svg>',
    indent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><g><path d="M15.5,10.1L15.5,10.1c0.1,0,0.3,0.1,0.3,0.3v1.7c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1l-15.2,0 c-0.1,0-0.1,0-0.2-0.1C0,12.2,0,12.2,0,12.1l0-1.7c0-0.1,0-0.1,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C0.3,10.1,15.5,10.1,15.5,10.1z M9.8,6.7c0.1,0,0.1,0,0.2,0.1C10.1,6.9,10.1,7,10.1,7v1.7c0,0.1,0,0.2-0.1,0.2C10,9,9.9,9,9.8,9L0.3,9C0.2,9,0.1,9,0.1,8.9 C0,8.9,0,8.8,0,8.7V7C0,7,0,6.9,0.1,6.8c0.1-0.1,0.1-0.1,0.2-0.1C0.3,6.7,9.8,6.7,9.8,6.7z M0.3,3.4h9.6h0c0.1,0,0.3,0.1,0.3,0.3 v1.7v0c0,0.1-0.1,0.3-0.3,0.3H0.3c-0.1,0-0.1,0-0.2-0.1C0,5.5,0,5.4,0,5.3V3.6c0-0.1,0-0.1,0.1-0.2C0.1,3.4,0.2,3.4,0.3,3.4 L0.3,3.4z M0.3,0l15.2,0c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2V2c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1H0.3 c-0.1,0-0.1,0-0.2-0.1C0,2.1,0,2,0,2l0-1.7c0-0.1,0-0.1,0.1-0.2C0.1,0,0.2,0,0.3,0z"/></g><path d="M13.1,3.5L15.7,6c0.1,0.1,0.1,0.3,0,0.4l-2.5,2.5C13.1,9,13,9,12.9,9c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2V3.7 c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C13,3.4,13.1,3.4,13.1,3.5z"/></g></svg>',
    outdent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><g><path d="M15.5,10.1L15.5,10.1c0.1,0,0.3,0.1,0.3,0.3v1.7c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1l-15.2,0 c-0.1,0-0.1,0-0.2-0.1C0,12.2,0,12.2,0,12.1l0-1.7c0-0.1,0-0.1,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C0.3,10.1,15.5,10.1,15.5,10.1z M9.8,6.7c0.1,0,0.1,0,0.2,0.1C10.1,6.9,10.1,7,10.1,7v1.7c0,0.1,0,0.2-0.1,0.2C10,9,9.9,9,9.8,9L0.3,9C0.2,9,0.1,9,0.1,8.9 C0,8.9,0,8.8,0,8.7V7C0,7,0,6.9,0.1,6.8c0.1-0.1,0.1-0.1,0.2-0.1C0.3,6.7,9.8,6.7,9.8,6.7z M0.3,3.4h9.6h0c0.1,0,0.3,0.1,0.3,0.3 v1.7v0c0,0.1-0.1,0.3-0.3,0.3H0.3c-0.1,0-0.1,0-0.2-0.1C0,5.5,0,5.4,0,5.3V3.6c0-0.1,0-0.1,0.1-0.2C0.1,3.4,0.2,3.4,0.3,3.4 L0.3,3.4z M0.3,0l15.2,0c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2V2c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1H0.3 c-0.1,0-0.1,0-0.2-0.1C0,2.1,0,2,0,2l0-1.7c0-0.1,0-0.1,0.1-0.2C0.1,0,0.2,0,0.3,0z"/></g><path d="M15.5,3.4c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2v5.1c0,0.1,0,0.1-0.1,0.2C15.6,9,15.5,9,15.5,9 c-0.1,0-0.1,0-0.2-0.1l-2.5-2.5c-0.1-0.1-0.1-0.3,0-0.4l2.5-2.5C15.3,3.4,15.4,3.4,15.5,3.4z"/></g></svg>',
    list_bullets: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><path d="M12.4,10.7c0,0.9,0.8,1.7,1.7,1.7c0.9,0,1.7-0.8,1.7-1.7C15.7,9.8,15,9,14.1,9c-0.4,0-0.9,0.2-1.2,0.5 C12.5,9.8,12.4,10.2,12.4,10.7C12.4,10.7,12.4,10.7,12.4,10.7z M12.4,6.2c0,0.9,0.8,1.7,1.7,1.7c0.4,0,0.9-0.2,1.2-0.5 c0.3-0.3,0.4-0.7,0.4-1.1c0-0.9-0.7-1.7-1.6-1.7C13.1,4.6,12.4,5.3,12.4,6.2C12.4,6.2,12.4,6.2,12.4,6.2z M0,9.8v1.7 c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1l10.7,0c0,0,0,0,0,0c0.1,0,0.3-0.1,0.3-0.3V9.8c0-0.1,0-0.1-0.1-0.2 C11.1,9.6,11,9.6,11,9.6l-10.7,0c-0.1,0-0.1,0-0.2,0.1C0,9.7,0,9.8,0,9.8L0,9.8z M12.9,2.9c0.3,0.3,0.7,0.5,1.2,0.5 c0.4,0,0.9-0.2,1.2-0.5c0.7-0.7,0.7-1.7,0-2.4C14.9,0.2,14.5,0,14.1,0c-0.4,0-0.9,0.2-1.2,0.5c-0.3,0.3-0.5,0.7-0.5,1.2 C12.4,2.1,12.5,2.6,12.9,2.9z M0,5.3V7c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1H11c0.1,0,0.1,0,0.2-0.1 c0.1-0.1,0.1-0.1,0.1-0.2V5.3c0,0,0,0,0,0c0-0.1-0.1-0.3-0.3-0.3H0.3c-0.1,0-0.1,0-0.2,0.1C0,5.2,0,5.3,0,5.3L0,5.3z M0,0.8v1.7 c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1h10.7c0.1,0,0.1,0,0.2-0.1c0,0,0.1-0.1,0.1-0.2V0.8c0-0.1,0-0.1-0.1-0.2 c0-0.1-0.1-0.1-0.2-0.1H0.3c-0.1,0-0.1,0-0.2,0.1C0,0.7,0,0.8,0,0.8L0,0.8z"/></g></svg>',
    list_number: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M0,11.5l0,1.7c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1H11c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2v-1.7 c0-0.1,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1H0.3c-0.1,0-0.2,0-0.2,0.1C0,11.4,0,11.4,0,11.5L0,11.5z M0,8.7c0,0.1,0,0.1,0.1,0.2 C0.1,8.9,0.2,9,0.3,9H11c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2V7c0-0.1,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1l-10.7,0 c-0.1,0-0.2,0-0.2,0.1C0,6.8,0,6.9,0,7C0,7,0,8.7,0,8.7z M0,2.5v1.7c0,0.1,0,0.1,0.1,0.2c0,0,0.1,0.1,0.2,0.1l10.7,0 c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2V2.4c0-0.1,0-0.1-0.1-0.2c-0.1,0-0.1,0-0.2,0H0.3c-0.1,0-0.1,0-0.2,0 C0,2.3,0,2.4,0,2.5L0,2.5z"/></g><path d="M15.6,14.2c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.4-0.4-0.7-0.4l0.9-1v-0.8h-2.9v1.3h0.9v-0.5h0.9l0,0c-0.1,0.1-0.2,0.2-0.3,0.3 s-0.2,0.3-0.4,0.5l-0.3,0.3l0.2,0.5c0.6,0,0.9,0.1,0.9,0.5c0,0.1-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.1-0.4,0.1c-0.3,0-0.7-0.1-0.9-0.3 l-0.5,0.8c0.4,0.4,0.9,0.6,1.5,0.6c0.4,0,0.9-0.1,1.2-0.4C15.5,15.1,15.6,14.7,15.6,14.2z"/><path d="M15.6,8.7h-0.9v0.5h-1.1c0-0.2,0.2-0.4,0.4-0.5c0.2-0.2,0.4-0.3,0.7-0.4c0.3-0.2,0.5-0.3,0.7-0.6c0.2-0.2,0.3-0.5,0.3-0.8 c0-0.4-0.2-0.8-0.5-1c-0.6-0.4-1.4-0.5-2-0.1c-0.3,0.2-0.5,0.4-0.6,0.7L13.3,7c0.1-0.3,0.4-0.5,0.7-0.5c0.1,0,0.3,0,0.3,0.1 c0.1,0.1,0.1,0.2,0.1,0.3c0,0.2-0.1,0.3-0.2,0.4c-0.2,0.1-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0.3-0.6,0.4c-0.2,0.2-0.4,0.4-0.5,0.6 c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.2,0,0.3,0,0.5h3.2L15.6,8.7L15.6,8.7z"/><path d="M15.6,3.6h-1V0h-0.9l-1.2,1.1l0.6,0.7c0.2-0.1,0.3-0.3,0.4-0.5l0,0v2.2h-0.9v0.9h3L15.6,3.6L15.6,3.6z"/></svg>',
    link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M7.4,9.9l3.1,3.1c0.3,0.3,0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5c0,0,0,0,0,0c0.7-0.7,0.7-1.9,0-2.6L9.9,7.3 c0-0.1,0-0.2,0-0.3C9.9,7,10,7,10.1,7l2.2-0.2c0.1,0,0.1,0,0.2,0.1l2.1,2.1c0.4,0.4,0.7,0.8,0.9,1.3c0.2,0.5,0.3,1,0.3,1.5 c0,0.5-0.1,1-0.3,1.5c-0.8,2-3.2,3-5.2,2.2c-0.5-0.2-0.9-0.5-1.3-0.9l-2.1-2.1c-0.1,0-0.1-0.1-0.1-0.2L7,10.1C7,10,7,9.9,7.1,9.9 C7.2,9.8,7.3,9.9,7.4,9.9z M1.2,1.1C1.6,0.7,2,0.4,2.5,0.3c1-0.4,2.1-0.4,3.1,0C6,0.4,6.5,0.7,6.8,1.1L9,3.2C9,3.3,9.1,3.3,9,3.4 L8.8,5.6c0,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.1-0.3,0L5.3,2.7C5,2.3,4.5,2.1,4,2.1c-0.5,0-0.9,0.2-1.3,0.5c0,0,0,0,0,0 C2,3.4,2,4.5,2.7,5.2l3.1,3.2c0.1,0.1,0.1,0.2,0,0.3c0,0.1-0.1,0.1-0.2,0.1L3.5,9C3.4,9,3.4,9,3.3,8.9L1.2,6.8c0,0,0,0,0,0 C-0.4,5.2-0.4,2.7,1.2,1.1L1.2,1.1z M14.3,6h-2.6c0,0,0,0,0,0c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.2,0.1-0.3l2.5-0.7 c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.1,0.2l0.1,0.8c0,0.1,0,0.1-0.1,0.2C14.5,6,14.4,6,14.3,6L14.3,6z M10.2,4.1 c0,0.1-0.1,0.2-0.2,0.2l0,0c0,0,0,0,0,0C9.8,4.2,9.7,4.1,9.8,4L9.7,1.4c0-0.1,0-0.1,0.1-0.2c0.1,0,0.1,0,0.2,0h0.8 c0.1,0,0.1,0,0.2,0.1c0,0.1,0,0.1,0,0.2L10.2,4.1L10.2,4.1z M1.5,9.7h1.3h1.3c0.1,0,0.2,0.1,0.2,0.2c0,0.1,0,0.2-0.1,0.3l-2.5,0.6 H1.6c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.1-0.2L1.2,9.9c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.1,0.2-0.1L1.5,9.7z M5.6,11.6 C5.6,11.6,5.6,11.6,5.6,11.6c0-0.1,0.1-0.2,0.3-0.1c0,0,0,0,0,0c0.1,0,0.2,0.1,0.2,0.2v2.6c0,0.1,0,0.1-0.1,0.2 c0,0-0.1,0.1-0.2,0.1L5,14.5c-0.1,0-0.1,0-0.2-0.1c0-0.1,0-0.1,0-0.2L5.6,11.6L5.6,11.6z"/></g></svg>',
    unlink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M14.6,14.6c1.6-1.6,1.6-4.1,0-5.7l0,0l-3.1-3.1l-1.2,1.6l2.9,2.9c0.4,0.4,0.6,0.9,0.6,1.5c0,1.1-0.9,2.1-2.1,2.1l0,0 c-0.6,0-1.1-0.2-1.5-0.6l-0.4-0.4l-1.7,1l0.8,0.8C10.4,16.2,13,16.2,14.6,14.6L14.6,14.6L14.6,14.6z M3.6,6C3,5.9,2.6,5.5,2.3,5 S1.9,4,2.1,3.4C2.3,2.9,2.6,2.5,3,2.2C3.5,2,4.1,1.9,4.6,2l3.3,1.4l0.5-2L5.1,0.1C4-0.1,2.9,0,2,0.5C1.1,1.1,0.4,1.9,0.2,3 C-0.1,4,0,5.1,0.6,6C1.1,6.9,1.9,7.6,3,7.8l5.4,2l0.5-2L6.2,6.9L3.6,6z"/></g></svg>'
  },
  // common, ltr icon
  redo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 14.18"><g><path d="M11.58,18.48a6.84,6.84,0,1,1,6.85-6.85s0,.26,0,.67a8,8,0,0,1-.22,1.44l.91-.55a.51.51,0,0,1,.36,0,.45.45,0,0,1,.29.22.47.47,0,0,1,.06.36.45.45,0,0,1-.22.29L17.42,15.3l-.12,0h-.25l-.12-.06-.09-.09-.06-.07,0-.06-.87-2.12a.43.43,0,0,1,0-.37.49.49,0,0,1,.27-.26.41.41,0,0,1,.36,0,.53.53,0,0,1,.27.26l.44,1.09a6.51,6.51,0,0,0,.24-1.36,4.58,4.58,0,0,0,0-.64,5.83,5.83,0,0,0-1.73-4.17,5.88,5.88,0,0,0-8.34,0,5.9,5.9,0,0,0,4.17,10.06.51.51,0,0,1,.33.15.48.48,0,0,1,0,.68.53.53,0,0,1-.33.12Z" transform="translate(-4.48 -4.54)"/></g></svg>',
  undo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 14.18"><g><path d="M5,14a.43.43,0,0,1-.22-.29.46.46,0,0,1,.06-.36.43.43,0,0,1,.29-.22.56.56,0,0,1,.36,0l.91.55a8.27,8.27,0,0,1-.22-1.45,5.07,5.07,0,0,1,0-.67A6.85,6.85,0,1,1,13,18.47a.44.44,0,0,1-.33-.13.48.48,0,0,1,0-.68.51.51,0,0,1,.33-.15A5.89,5.89,0,0,0,17.15,7.45a5.88,5.88,0,0,0-8.33,0,5.84,5.84,0,0,0-1.73,4.17s0,.25,0,.65a6.49,6.49,0,0,0,.24,1.37l.44-1.09a.57.57,0,0,1,.27-.26.41.41,0,0,1,.36,0,.53.53,0,0,1,.27.26.43.43,0,0,1,0,.37L7.82,15l0,.09-.09.09-.1.07-.06,0H7.28l-.13,0-1.09-.63c-.65-.36-1-.57-1.1-.63Z" transform="translate(-4.49 -4.53)"/></g></svg>',
  bold: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.76 15.75"><g><path d="M6.4,3.76V19.5h6.76a5.55,5.55,0,0,0,2-.32,4.93,4.93,0,0,0,1.52-1,4.27,4.27,0,0,0,1.48-3.34,3.87,3.87,0,0,0-.69-2.37,5.74,5.74,0,0,0-.71-.83,3.44,3.44,0,0,0-1.1-.65,3.6,3.6,0,0,0,1.58-1.36,3.66,3.66,0,0,0,.53-1.93,3.7,3.7,0,0,0-1.21-2.87,4.65,4.65,0,0,0-3.25-1.1H6.4Zm2.46,6.65V5.57h3.52a4.91,4.91,0,0,1,1.36.15,2.3,2.3,0,0,1,.85.45,2.06,2.06,0,0,1,.74,1.71,2.3,2.3,0,0,1-.78,1.92,2.54,2.54,0,0,1-.86.46,4.7,4.7,0,0,1-1.32.15H8.86Zm0,7.27V12.15H12.7a4.56,4.56,0,0,1,1.38.17,3.43,3.43,0,0,1,.95.49,2.29,2.29,0,0,1,.92,2,2.73,2.73,0,0,1-.83,2.1,2.66,2.66,0,0,1-.83.58,3.25,3.25,0,0,1-1.26.2H8.86Z" transform="translate(-6.4 -3.75)"/></g></svg>',
  underline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.78 15.74"><g><path d="M14.64,3.76h2.52v7.72a4.51,4.51,0,0,1-.59,2.31,3.76,3.76,0,0,1-1.71,1.53,6.12,6.12,0,0,1-2.64.53,5,5,0,0,1-3.57-1.18,4.17,4.17,0,0,1-1.27-3.24V3.76H9.9v7.3a3,3,0,0,0,.55,2,2.3,2.3,0,0,0,1.83.65,2.26,2.26,0,0,0,1.8-.65,3.09,3.09,0,0,0,.55-2V3.76Zm2.52,13.31V19.5H7.39V17.08h9.77Z" transform="translate(-7.38 -3.76)"/></g></svg>',
  italic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.49 15.76"><g><path d="M17.16,3.79l.37,0-.06.38-.14.52A10,10,0,0,1,16.21,5a9.37,9.37,0,0,0-1,.32,6.68,6.68,0,0,0-.25.89c-.06.31-.11.59-.14.85-.3,1.36-.52,2.41-.68,3.14l-.61,3.18L13.1,15l-.43,2.4-.12.46a.62.62,0,0,0,0,.28c.44.1.85.17,1.23.22l.68.11a4.51,4.51,0,0,1-.08.6l-.09.42a.92.92,0,0,0-.23,0l-.43,0a1.37,1.37,0,0,1-.29,0c-.13,0-.63-.08-1.49-.16l-2,0c-.28,0-.87,0-1.78.12L7,19.5l.17-.88.8-.2A6.61,6.61,0,0,0,9.19,18,2.62,2.62,0,0,0,9.61,17l.28-1.41.58-2.75.12-.66c.05-.3.11-.58.17-.86s.12-.51.17-.69l.12-.48.12-.43.31-1.6.15-.65.31-1.91V5.14a3.86,3.86,0,0,0-1.48-.29l-.38,0,.2-1.06,3.24.14.75,0c.45,0,1.18,0,2.18-.09.23,0,.46,0,.71,0Z" transform="translate(-7.04 -3.76)"/></g></svg>',
  strike: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.9"><g><path d="M12.94,13a4.27,4.27,0,0,1,1.32.58,1.46,1.46,0,0,1,.55,1.2,1.87,1.87,0,0,1-.88,1.64,4.17,4.17,0,0,1-2.35.59,4.44,4.44,0,0,1-2.74-.71,2.72,2.72,0,0,1-1-2.17H5.57a4.56,4.56,0,0,0,1.55,3.7,7,7,0,0,0,4.47,1.23,6,6,0,0,0,4.07-1.3,4.24,4.24,0,0,0,1.52-3.37,4,4,0,0,0-.26-1.4h-4ZM6.37,10.24A3.27,3.27,0,0,1,6,8.68a4,4,0,0,1,1.48-3.3,5.92,5.92,0,0,1,3.88-1.21,5.58,5.58,0,0,1,3.91,1.24,4.36,4.36,0,0,1,1.45,3.17H14.44a2.12,2.12,0,0,0-.91-1.81,4.45,4.45,0,0,0-2.44-.55,3.69,3.69,0,0,0-2,.51A1.64,1.64,0,0,0,8.3,8.22a1.3,1.3,0,0,0,.48,1.11,7,7,0,0,0,2.1.78l.28.06.28.08H6.37Zm13.09.68a.73.73,0,0,1,.49.21.66.66,0,0,1,.2.48.64.64,0,0,1-.2.48.71.71,0,0,1-.49.19H5.1a.67.67,0,0,1-.49-.19.66.66,0,0,1-.2-.48.64.64,0,0,1,.2-.48.73.73,0,0,1,.49-.21H19.46Z" transform="translate(-4.41 -4.17)"/></g></svg>',
  subscript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 14.61"><g><path d="M15.38,4.33H12.74L11.19,7c-.28.46-.51.87-.69,1.21L10.07,9h0l-.44-.8c-.22-.4-.45-.81-.71-1.23L7.34,4.33H4.68L8.26,10,4.4,16.08H7.1l1.69-2.83c.38-.63.72-1.22,1-1.78l.25-.46h0l.49.92c.24.45.48.89.74,1.32L13,16.08h2.61L11.84,10l1.77-2.84,1.77-2.85Zm4.77,13.75H17v-.15c0-.4.05-.64.16-.72a4.42,4.42,0,0,1,1.16-.31,3.3,3.3,0,0,0,1.54-.56A1.84,1.84,0,0,0,20.15,15a1.78,1.78,0,0,0-.44-1.41A2.8,2.8,0,0,0,18,13.25a2.71,2.71,0,0,0-1.69.37,1.83,1.83,0,0,0-.44,1.43v.23H17v-.23q0-.63.18-.78a1.62,1.62,0,0,1,.88-.15,1.59,1.59,0,0,1,.88.15q.18.15.18.75t-.18.75a3.58,3.58,0,0,1-1.18.33,3.33,3.33,0,0,0-1.52.51,1.57,1.57,0,0,0-.32,1.18v1.15h4.27v-.86Z" transform="translate(-4.4 -4.33)"/></g></svg>',
  superscript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.42"><g><path d="M12,13.14l3.61-5.81H12.94L11.33,10c-.28.46-.51.88-.69,1.25l-.45.83h0l-.45-.85c-.22-.41-.45-.82-.71-1.24L7.4,7.33H4.68l3.66,5.81L4.4,19.33H7.14l1.74-2.87q.58-1,1-1.83l.25-.48h0l.51.94.75,1.37,1.72,2.87h2.67l-1.92-3.09c-1.12-1.8-1.76-2.83-1.92-3.1Zm4.84-4.41h0l0,.15h3.27v.86H15.77V8.58a1.66,1.66,0,0,1,.33-1.22,3.51,3.51,0,0,1,1.56-.51,3.68,3.68,0,0,0,1.21-.34c.13-.1.19-.36.19-.77S19,5.07,18.87,5A1.63,1.63,0,0,0,18,4.8a1.58,1.58,0,0,0-.91.17c-.13.11-.19.38-.19.8V6H15.78V5.76a1.87,1.87,0,0,1,.45-1.47A2.84,2.84,0,0,1,18,3.91a2.8,2.8,0,0,1,1.72.38,1.84,1.84,0,0,1,.45,1.44,1.91,1.91,0,0,1-.34,1.35,3.24,3.24,0,0,1-1.58.57A3.69,3.69,0,0,0,17,8c-.12.1-.17.35-.17.76Z" transform="translate(-4.4 -3.91)"/></g></svg>',
  erase: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.76"><g><path d="M13.69,17.2h6.46v1.31H8.56L4.41,14.37,14,4.75l6.06,6.06L16.89,14l-3.2,3.19Zm-4.61,0h2.77L14.09,15,9.88,10.75,6.25,14.38l1.41,1.41c.84.82,1.31,1.29,1.42,1.41Z" transform="translate(-4.41 -4.75)"/></g></svg>',
  indent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.36"><g><path d="M4.68,14.45a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V9.1a.27.27,0,0,1,.08-.19.28.28,0,0,1,.2-.08.25.25,0,0,1,.19.07l2.54,2.54a.29.29,0,0,1,0,.4L4.88,14.36a.24.24,0,0,1-.2.09Zm15.19,1.12a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.25.25,0,0,1-.08-.19V15.84a.27.27,0,0,1,.27-.27H19.87Zm0-3.38a.27.27,0,0,1,.19.08.28.28,0,0,1,.08.21v1.68a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V12.48a.32.32,0,0,1,.08-.21.24.24,0,0,1,.19-.08h9.56Zm0-3.37a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.27-.27V9.1a.27.27,0,0,1,.27-.27h9.56Zm.2-3.29a.28.28,0,0,1,.08.2V7.41a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V5.73a.32.32,0,0,1,.08-.21.25.25,0,0,1,.19-.08H19.87a.28.28,0,0,1,.2.09Z" transform="translate(-4.41 -5.44)"/></g></svg>',
  outdent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.36"><g><path d="M19.87,15.57a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.25.25,0,0,1-.08-.19V15.84a.27.27,0,0,1,.27-.27H19.87ZM7.5,14.45a.25.25,0,0,1-.2-.09L4.76,11.84a.29.29,0,0,1,0-.4L7.3,8.9a.29.29,0,0,1,.4,0,.31.31,0,0,1,.07.2v5.06a.32.32,0,0,1-.08.21.26.26,0,0,1-.19.08ZM19.87,8.82a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.27-.27V9.1a.27.27,0,0,1,.27-.27h9.56Zm0,3.37a.27.27,0,0,1,.19.08.28.28,0,0,1,.08.21v1.68a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V12.48a.32.32,0,0,1,.08-.21.24.24,0,0,1,.19-.08h9.56Zm.2-6.66a.28.28,0,0,1,.08.2V7.41a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V5.73a.32.32,0,0,1,.08-.21.25.25,0,0,1,.19-.08H19.87a.28.28,0,0,1,.2.09Z" transform="translate(-4.41 -5.44)"/></g></svg>',
  expansion: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M11.8,13.06l-5.1,5.1H9.51V19.5H4.41V14.4H5.75v2.81L8.3,14.66q2.25-2.23,2.55-2.55Zm8.35-9.3v5.1H18.81V6.05l-5.1,5.1-1-1,5.1-5.1H15.05V3.76Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  reduction: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M14.91,10h2.87v1.38H12.55V6.12h1.38V9l5.24-5.24.48.49.49.48ZM6.77,11.92H12v5.23H10.62V14.26L5.37,19.5l-1-1L9.63,13.3H6.77Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  code_view: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 11.8"><g><path d="M8.09,7.94a.76.76,0,0,1,.53.22.72.72,0,0,1,.21.52.76.76,0,0,1-.22.54L6.18,11.63l2.43,2.44a.69.69,0,0,1,.2.51.66.66,0,0,1-.21.51.75.75,0,0,1-.51.22.63.63,0,0,1-.51-.21h0L4.63,12.15a.7.7,0,0,1-.22-.53.67.67,0,0,1,.25-.55L7.57,8.16a.82.82,0,0,1,.52-.22Zm12.05,3.69a.7.7,0,0,1-.23.52L17,15.1h0a.66.66,0,0,1-.51.21.73.73,0,0,1-.51-.22.75.75,0,0,1-.22-.51.63.63,0,0,1,.21-.51l2.43-2.44L15.92,9.22a.73.73,0,0,1-.22-.53A.74.74,0,0,1,17,8.18h0l2.91,2.91a.67.67,0,0,1,.27.54Zm-5.9-5.9a.73.73,0,0,1,.61.32.71.71,0,0,1,.07.68L11,17a1,1,0,0,1-.22.32.6.6,0,0,1-.35.16.75.75,0,0,1-.69-.26.69.69,0,0,1-.12-.72L13.56,6.23a.75.75,0,0,1,.26-.35.74.74,0,0,1,.42-.15Z" transform="translate(-4.41 -5.73)"/></g></svg>',
  preview: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.65 15.66"><g><path d="M16.19,14.43l2.49,2.49a.73.73,0,0,1,.21.52.67.67,0,0,1-.22.51.7.7,0,0,1-.52.22.69.69,0,0,1-.51-.21l-2.49-2.48a5.17,5.17,0,0,1-1.34.69,4.64,4.64,0,0,1-1.48.24,4.78,4.78,0,1,1,0-9.56,4.79,4.79,0,0,1,1.84.36,4.9,4.9,0,0,1,1.56,1,4.77,4.77,0,0,1,.46,6.18ZM10,14a3.3,3.3,0,0,0,2.34.93A3.37,3.37,0,0,0,14.7,14a3.3,3.3,0,0,0-1.08-5.41,3.47,3.47,0,0,0-2.56,0A3,3,0,0,0,10,9.28,3.31,3.31,0,0,0,10,14ZM16,4a3.86,3.86,0,0,1,2.77,1.14A3.9,3.9,0,0,1,20,7.85v4a.77.77,0,0,1-.22.53.7.7,0,0,1-.52.21.72.72,0,0,1-.74-.74v-4a2.46,2.46,0,0,0-.72-1.73A2.37,2.37,0,0,0,16,5.45H8.53A2.42,2.42,0,0,0,6.08,7.89v7.52a2.41,2.41,0,0,0,.71,1.73,2.46,2.46,0,0,0,1.74.72h4.08a.73.73,0,0,1,0,1.46H8.53a3.85,3.85,0,0,1-2.78-1.14A3.93,3.93,0,0,1,4.6,15.4V7.87A3.94,3.94,0,0,1,5.76,5.09,3.88,3.88,0,0,1,8.54,4H16Z" transform="translate(-4.45 -3.8)"/></g></svg>',
  print: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.05 16.04"><g><path d="M19.76,15.84a1.29,1.29,0,0,0,.39-.92V8.35A2.05,2.05,0,0,0,19.57,7a1.93,1.93,0,0,0-1.38-.57H6.37a1.95,1.95,0,0,0-2,2v6.56a1.23,1.23,0,0,0,.38.92,1.35,1.35,0,0,0,.93.38h2V14.9l-2,0V8.35a.67.67,0,0,1,.18-.47.62.62,0,0,1,.48-.19H18.18a.6.6,0,0,1,.46.19.66.66,0,0,1,.18.47V14.9h-2v1.32h2A1.35,1.35,0,0,0,19.76,15.84ZM17.52,7.69V5.06a1.31,1.31,0,0,0-.38-.92,1.34,1.34,0,0,0-.94-.38H8.34A1.3,1.3,0,0,0,7,5.06V7.69H8.34V5.06h7.87V7.69h1.31ZM8.34,12.93h7.87l0,5.26H8.34V12.93Zm7.87,5.26v0Zm.65,1.31a.6.6,0,0,0,.46-.19.72.72,0,0,0,.2-.47V12.29a.74.74,0,0,0-.2-.47.6.6,0,0,0-.46-.19H7.68a.6.6,0,0,0-.46.19.72.72,0,0,0-.2.47v6.55a.74.74,0,0,0,.2.47.6.6,0,0,0,.46.19h9.18ZM16.67,9.28a.7.7,0,0,0-.94,0,.63.63,0,0,0-.18.46.67.67,0,0,0,.18.47.68.68,0,0,0,.94,0,.66.66,0,0,0,.18-.47A.58.58,0,0,0,16.67,9.28Z" transform="translate(-4.25 -3.61)"/></g></svg>',
  template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.27 15.64"><g><path d="M18.18,19.16a1,1,0,0,0,1-1V5.73a1,1,0,0,0-1-1h-2v1h2V18.19H6.37V5.73h2v-1h-2A.94.94,0,0,0,5.68,5a1,1,0,0,0-.29.7V18.18a.94.94,0,0,0,.29.69,1,1,0,0,0,.69.29H18.18ZM9.82,10.31h4.92a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.49.49,0,0,0-.15-.35.47.47,0,0,0-.35-.15H9.82a.49.49,0,0,0-.35.15.47.47,0,0,0-.15.35.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15Zm5.9,4.92H8.83a.49.49,0,0,0-.35.15.47.47,0,0,0-.15.35.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15h6.89a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.51.51,0,0,0-.5-.5ZM7.36,12.77a.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15h8.85a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.49.49,0,0,0-.15-.35.47.47,0,0,0-.35-.15H7.85a.49.49,0,0,0-.35.15.52.52,0,0,0-.14.35Z" transform="translate(-5.14 -3.77)"/><path d="M14.24,6.71a1,1,0,0,0,1-1,1,1,0,0,0-1-1,1,1,0,0,0-1-1h-2a.94.94,0,0,0-.69.28,1,1,0,0,0-.29.7A.94.94,0,0,0,9.62,5a.91.91,0,0,0-.29.69,1,1,0,0,0,.29.7,1,1,0,0,0,.69.29h3.93Z" transform="translate(-5.14 -3.77)"/></g></svg>',
  line_height: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 13.56"><g><path d="M4.4,4.88V8.26a2,2,0,0,0,.5.39s.1,0,.18-.12a.62.62,0,0,0,.17-.28c.06-.19.13-.44.21-.74s.14-.52.19-.66a.58.58,0,0,1,.21-.3,2.41,2.41,0,0,1,.63-.21,3.83,3.83,0,0,1,.88-.12,9.15,9.15,0,0,1,1.31.06.16.16,0,0,1,.11,0,.26.26,0,0,1,.06.14,4,4,0,0,1,0,.49v2l.05,3.77c0,1.41,0,2.68-.05,3.81a1.79,1.79,0,0,1-.11.49,10.68,10.68,0,0,1-1.4.45,1.12,1.12,0,0,0-.69.43v.31l0,.22.61,0c.85-.08,1.54-.12,2.06-.12a19.76,19.76,0,0,1,2.09.08,15.08,15.08,0,0,0,1.64.08,1.4,1.4,0,0,0,.29,0,1.58,1.58,0,0,0,0-.26l-.05-.43a2.26,2.26,0,0,0-.43-.17l-.77-.22-.15,0a2.55,2.55,0,0,1-.78-.28,2.56,2.56,0,0,1-.11-.75l0-1.29,0-3.15V7.53a10.51,10.51,0,0,1,.06-1.2,3.83,3.83,0,0,1,.6,0l1.88,0a2.18,2.18,0,0,1,.38,0,.45.45,0,0,1,.23.17.9.9,0,0,1,.05.25c0,.16.06.35.1.58a3.33,3.33,0,0,0,.14.55A6.39,6.39,0,0,0,15,9a2.91,2.91,0,0,0,.6-.15,2.77,2.77,0,0,0,0-.46l0-.51,0-2.95-.25,0-.38,0L15,4.94a.71.71,0,0,1-.18.15.45.45,0,0,1-.25.07l-.29,0H8.75l-.15,0H7.45a17,17,0,0,1-1.86,0L5.36,5l-.25-.13ZM19.75,16.14h-.69v-9h.69A.4.4,0,0,0,20.13,7c.06-.11,0-.24-.1-.39L18.92,5.15a.52.52,0,0,0-.86,0L17,6.58c-.12.15-.16.28-.1.39s.18.16.38.16h.69v9h-.69a.4.4,0,0,0-.38.16c-.06.11,0,.24.1.39l1.11,1.43a.52.52,0,0,0,.86,0L20,16.69c.12-.15.16-.28.1-.39a.4.4,0,0,0-.38-.16Z" transform="translate(-4.4 -4.86)"/></g></svg>',
  paragraph_style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.74"><g><path d="M18.18,3.76v2h-2V19.5h-2V5.73h-2V19.5h-2V11.63a3.94,3.94,0,0,1,0-7.87h7.87Z" transform="translate(-6.37 -3.76)"/></g></svg>',
  text_style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.76 15.74"><g><path d="M17.68,6.71a2.22,2.22,0,0,0,1.06-.22.74.74,0,0,0,.42-.7.73.73,0,0,0-.08-.33.67.67,0,0,0-.17-.22,1,1,0,0,0-.31-.15L18.26,5l-.45-.09A15.27,15.27,0,0,0,13.26,5V4.74c0-.66-.63-1-1.92-1-.24,0-.43.15-.59.46a4,4,0,0,0-.36,1.14h0v0a26.45,26.45,0,0,1-3.5.35A2,2,0,0,0,5.77,6a.84.84,0,0,0-.37.79,2.14,2.14,0,0,0,.41,1.29,1.23,1.23,0,0,0,1.05.63,16.62,16.62,0,0,0,3.29-.45l-.34,3.35c-.16,1.61-.29,2.9-.37,3.86s-.12,1.66-.12,2.09l0,.65a5.15,5.15,0,0,0,.05.6,1.28,1.28,0,0,0,.16.54.34.34,0,0,0,.28.18,1.16,1.16,0,0,0,.79-.46,3.66,3.66,0,0,0,.68-1,22.08,22.08,0,0,0,1-4.33q.49-3.1.78-6.15a24.69,24.69,0,0,1,4.62-.84Z" transform="translate(-5.4 -3.76)"/></g></svg>',
  save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M18.53,19.5l.2-.05A1.78,1.78,0,0,0,20.13,18l0-.09V7.14a2,2,0,0,0-.28-.64A3.18,3.18,0,0,0,19.43,6c-.5-.52-1-1-1.55-1.54A2.59,2.59,0,0,0,17.37,4a1.83,1.83,0,0,0-.61-.25H6l-.21,0a1.78,1.78,0,0,0-1.4,1.49l0,.1V17.87a2.49,2.49,0,0,0,.09.37,1.79,1.79,0,0,0,1.44,1.23l.09,0Zm-6.25-.6H6.92a.61.61,0,0,1-.68-.48.78.78,0,0,1,0-.22V12.3a.62.62,0,0,1,.69-.68H17.64a.62.62,0,0,1,.69.69V18.2a.64.64,0,0,1-.71.69H12.28ZM12,9.81H8.15a.63.63,0,0,1-.72-.71v-4a.64.64,0,0,1,.72-.72h7.66a.64.64,0,0,1,.72.72v4a.65.65,0,0,1-.74.72ZM13.5,5V9.18h1.78V5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  blockquote: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.081"><g><path d="M164.45,219.27h-63.954c-7.614,0-14.087-2.664-19.417-7.994c-5.327-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.416-51.678c14.276-14.272,31.503-21.411,51.678-21.411h18.271c4.948,0,9.229-1.809,12.847-5.424c3.616-3.617,5.424-7.898,5.424-12.847V54.819c0-4.948-1.809-9.233-5.424-12.85c-3.617-3.612-7.898-5.424-12.847-5.424h-18.271c-19.797,0-38.684,3.858-56.673,11.563c-17.987,7.71-33.545,18.132-46.68,31.267c-13.134,13.129-23.553,28.688-31.262,46.677C3.855,144.039,0,162.931,0,182.726v200.991c0,15.235,5.327,28.171,15.986,38.834c10.66,10.657,23.606,15.985,38.832,15.985h109.639c15.225,0,28.167-5.328,38.828-15.985c10.657-10.663,15.987-23.599,15.987-38.834V274.088c0-15.232-5.33-28.168-15.994-38.832C192.622,224.6,179.675,219.27,164.45,219.27z"/><path d="M459.103,235.256c-10.656-10.656-23.599-15.986-38.828-15.986h-63.953c-7.61,0-14.089-2.664-19.41-7.994c-5.332-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.409-51.678c14.271-14.272,31.497-21.411,51.682-21.411h18.267c4.949,0,9.233-1.809,12.848-5.424c3.613-3.617,5.428-7.898,5.428-12.847V54.819c0-4.948-1.814-9.233-5.428-12.85c-3.614-3.612-7.898-5.424-12.848-5.424h-18.267c-19.808,0-38.691,3.858-56.685,11.563c-17.984,7.71-33.537,18.132-46.672,31.267c-13.135,13.129-23.559,28.688-31.265,46.677c-7.707,17.987-11.567,36.879-11.567,56.674v200.991c0,15.235,5.332,28.171,15.988,38.834c10.657,10.657,23.6,15.985,38.828,15.985h109.633c15.229,0,28.171-5.328,38.827-15.985c10.664-10.663,15.985-23.599,15.985-38.834V274.088C475.082,258.855,469.76,245.92,459.103,235.256z"/></g></svg>',
  arrow_down: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 8.67"><g><path d="M18.79,7.52a.8.8,0,0,1,.56-.23.82.82,0,0,1,.79.79.8.8,0,0,1-.23.56l-7.07,7.07a.79.79,0,0,1-.57.25.77.77,0,0,1-.57-.25h0L4.64,8.65a.8.8,0,0,1-.23-.57.82.82,0,0,1,.79-.79.8.8,0,0,1,.56.23L12.28,14l3.26-3.26,3.25-3.26Z" transform="translate(-4.41 -7.29)"/></g></svg>',
  align_justify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm0,5.9H20.15v-2H4.41v2Zm0,3.94H20.15v-2H4.41v2Zm0,3.93h7.87v-2H4.41v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  align_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm11.8,3.94H4.41v2H16.22v-2Zm-11.8,5.9H18.18v-2H4.41v2Zm0,3.93h9.84v-2H4.41v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  align_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm3.93,5.9H20.15v-2H8.34v2Zm-2,3.94H20.14v-2H6.37v2Zm3.94,3.93h9.84v-2H10.31v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  align_center: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm2,3.94v2H18.18v-2H6.37Zm-1,5.9H19.16v-2H5.39v2Zm2,3.93H17.2v-2H7.36v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  font_color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.61"><g><path d="M18.5,15.57,14.28,4.32h-3.4L6.65,15.57h3l.8-2.26h4.23l.8,2.26h3ZM14,11.07H11.14L12.54,7,13.25,9c.41,1.18.64,1.86.7,2ZM4.41,16.69v2.24H20.15V16.69H4.41Z" transform="translate(-4.41 -4.32)"/></g></svg>',
  highlight_color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.66 15.74"><g><path d="M12.32,9.31,13.38,13H11.21l.52-1.83q.46-1.61.54-1.83ZM4.44,3.76H20.1V19.5H4.44V3.76ZM14.71,17.32h2.63L13.7,6H10.89L7.26,17.32H9.89l.63-2.24h3.55l.32,1.12c.18.65.29,1,.32,1.12Z" transform="translate(-4.44 -3.76)"/></g></svg>',
  list_bullets: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.37"><g><path d="M7.77,16.12a1.59,1.59,0,0,0-.49-1.18,1.62,1.62,0,0,0-1.19-.49,1.68,1.68,0,1,0,0,3.36,1.67,1.67,0,0,0,1.68-1.69Zm0-4.48A1.67,1.67,0,0,0,6.09,10,1.68,1.68,0,0,0,4.9,12.82a1.62,1.62,0,0,0,1.19.49,1.67,1.67,0,0,0,1.68-1.67Zm12.38,3.64a.27.27,0,0,0-.08-.19.28.28,0,0,0-.2-.09H9.19a.28.28,0,0,0-.2.08.29.29,0,0,0-.08.19V17a.27.27,0,0,0,.28.28H19.87a.27.27,0,0,0,.19-.08.24.24,0,0,0,.08-.2V15.28ZM7.77,7.13a1.63,1.63,0,0,0-.49-1.2,1.61,1.61,0,0,0-1.19-.49,1.61,1.61,0,0,0-1.19.49,1.71,1.71,0,0,0,0,2.4,1.62,1.62,0,0,0,1.19.49,1.61,1.61,0,0,0,1.19-.49,1.63,1.63,0,0,0,.49-1.2Zm12.38,3.66a.28.28,0,0,0-.08-.2.29.29,0,0,0-.19-.08H9.19a.27.27,0,0,0-.28.28v1.69a.27.27,0,0,0,.08.19.24.24,0,0,0,.2.08H19.87a.27.27,0,0,0,.19-.08.25.25,0,0,0,.08-.19V10.79Zm0-4.5a.27.27,0,0,0-.08-.19A.25.25,0,0,0,19.88,6H9.19A.28.28,0,0,0,9,6.1a.26.26,0,0,0-.08.19V8A.27.27,0,0,0,9,8.17a.24.24,0,0,0,.2.08H19.87a.27.27,0,0,0,.19-.08A.25.25,0,0,0,20.14,8V6.29Z" transform="translate(-4.41 -5.44)"/></g></svg>',
  list_number: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.69 15.74"><g><path d="M7.66,18a1.24,1.24,0,0,0-.26-.78,1.17,1.17,0,0,0-.72-.42l.85-1V15H4.58v1.34h.94v-.46l.85,0h0c-.11.11-.22.23-.32.35s-.23.27-.37.47L5.39,17l.23.51c.61-.05.92.11.92.49a.42.42,0,0,1-.18.37.79.79,0,0,1-.45.12A1.41,1.41,0,0,1,5,18.15l-.51.77A2.06,2.06,0,0,0,6,19.5a1.8,1.8,0,0,0,1.2-.41A1.38,1.38,0,0,0,7.66,18Zm0-5.54H6.75V13H5.63A.72.72,0,0,1,6,12.51a5.45,5.45,0,0,1,.66-.45,2.71,2.71,0,0,0,.67-.57,1.19,1.19,0,0,0,.31-.81,1.29,1.29,0,0,0-.45-1,1.86,1.86,0,0,0-2-.11,1.51,1.51,0,0,0-.62.7l.74.52A.87.87,0,0,1,6,10.28a.51.51,0,0,1,.35.12.42.42,0,0,1,.13.33.55.55,0,0,1-.21.4,3,3,0,0,1-.5.38c-.19.13-.39.27-.58.42a2,2,0,0,0-.5.6,1.63,1.63,0,0,0-.21.81,3.89,3.89,0,0,0,.05.48h3.2V12.44Zm12.45,2.82a.27.27,0,0,0-.08-.19.28.28,0,0,0-.21-.08H9.1a.32.32,0,0,0-.21.08.24.24,0,0,0-.08.2V17a.27.27,0,0,0,.08.19.3.3,0,0,0,.21.08H19.83a.32.32,0,0,0,.21-.08.25.25,0,0,0,.08-.19V15.26ZM7.69,7.32h-1V3.76H5.8L4.6,4.88l.63.68a1.85,1.85,0,0,0,.43-.48h0l0,2.24H4.74V8.2h3V7.32Zm12.43,3.42a.27.27,0,0,0-.08-.19.28.28,0,0,0-.21-.08H9.1a.32.32,0,0,0-.21.08.24.24,0,0,0-.08.2v1.71a.27.27,0,0,0,.08.19.3.3,0,0,0,.21.08H19.83a.32.32,0,0,0,.21-.08.25.25,0,0,0,.08-.19V10.74Zm0-4.52A.27.27,0,0,0,20,6,.28.28,0,0,0,19.83,6H9.1A.32.32,0,0,0,8.89,6a.24.24,0,0,0-.08.19V7.93a.27.27,0,0,0,.08.19.32.32,0,0,0,.21.08H19.83A.32.32,0,0,0,20,8.12a.26.26,0,0,0,.08-.2V6.22Z" transform="translate(-4.43 -3.76)"/></g></svg>',
  table: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M4.41,8.05V3.76H8.7V8.05H4.41Zm5.71,0V3.76h4.3V8.05h-4.3Zm5.74-4.29h4.29V8.05H15.86V3.76Zm-11.45,10V9.48H8.7v4.3H4.41Zm5.71,0V9.48h4.3v4.3h-4.3Zm5.74,0V9.48h4.29v4.3H15.86ZM4.41,19.5V15.21H8.7V19.5H4.41Zm5.71,0V15.21h4.3V19.5h-4.3Zm5.74,0V15.21h4.29V19.5H15.86Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  horizontal_rule: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 2.24"><g><path d="M20.15,12.75V10.51H4.41v2.24H20.15Z" transform="translate(-4.41 -10.51)"/></g></svg>',
  show_blocks: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.66 15.67"><g><path d="M19.72,5.58a1.64,1.64,0,0,0-1.64-1.64H6.23a1.62,1.62,0,0,0-1.16.48,1.63,1.63,0,0,0-.48,1.16V9.63a1.6,1.6,0,0,0,.48,1.16,1.62,1.62,0,0,0,1.16.47H18.09a1.67,1.67,0,0,0,1.16-.47,1.62,1.62,0,0,0,.48-1.16V5.58Zm-.94,4.05a.68.68,0,0,1-.7.7H6.23a.66.66,0,0,1-.48-.2.74.74,0,0,1-.21-.5V5.58a.66.66,0,0,1,.2-.48.71.71,0,0,1,.48-.21H18.08a.74.74,0,0,1,.5.21.66.66,0,0,1,.2.48ZM6.48,7.72a.21.21,0,0,0,.17-.07.22.22,0,0,0,.07-.17V7.06a1.27,1.27,0,0,1,.11-.52.37.37,0,0,1,.36-.23H8.77A.25.25,0,0,0,9,6.17a.19.19,0,0,0,0-.23.27.27,0,0,0-.2-.12H7.19a.88.88,0,0,0-.72.39,1.51,1.51,0,0,0-.23.85v.42a.24.24,0,0,0,.24.24Zm-.19.81a.21.21,0,0,0,.17-.07.26.26,0,0,0,.07-.17.24.24,0,0,0-.24-.24.2.2,0,0,0-.16.09.2.2,0,0,0-.07.16.22.22,0,0,0,.07.17.23.23,0,0,0,.16.06Zm8.46,5.1a1.63,1.63,0,0,0-.47-1.16A1.61,1.61,0,0,0,13.12,12H6.23a1.6,1.6,0,0,0-1.16.46,1.62,1.62,0,0,0-.48,1.16v4.05a1.64,1.64,0,0,0,1.64,1.64h6.89a1.6,1.6,0,0,0,1.16-.48,1.62,1.62,0,0,0,.47-1.16Zm-.94,4a.7.7,0,0,1-.2.49.65.65,0,0,1-.5.2H6.23a.66.66,0,0,1-.48-.2.75.75,0,0,1-.21-.49v-4a.74.74,0,0,1,.21-.5.66.66,0,0,1,.48-.2h6.89a.68.68,0,0,1,.7.7v4Zm6.15,0v-4a1.6,1.6,0,0,0-.48-1.16A1.67,1.67,0,0,0,18.32,12H17.1a1.63,1.63,0,0,0-1.16.47,1.61,1.61,0,0,0-.47,1.16v4a1.67,1.67,0,0,0,.47,1.16,1.62,1.62,0,0,0,1.16.48h1.22A1.64,1.64,0,0,0,20,17.68Zm-.94-4v4a.75.75,0,0,1-.21.49.62.62,0,0,1-.48.2H17.11a.69.69,0,0,1-.5-.2.7.7,0,0,1-.2-.49v-4a.68.68,0,0,1,.7-.7h1.22a.66.66,0,0,1,.48.2.72.72,0,0,1,.21.5Z" transform="translate(-4.44 -3.79)"/></g></svg>',
  cancel: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M14.15,11.63l5.61,5.61a1.29,1.29,0,0,1,.38.93,1.27,1.27,0,0,1-.4.93,1.25,1.25,0,0,1-.92.4,1.31,1.31,0,0,1-.94-.4l-5.61-5.61L6.67,19.1a1.31,1.31,0,0,1-.94.4,1.24,1.24,0,0,1-.92-.4,1.27,1.27,0,0,1-.4-.93,1.33,1.33,0,0,1,.38-.93l5.61-5.63L4.79,6a1.26,1.26,0,0,1-.38-.93,1.22,1.22,0,0,1,.4-.92,1.28,1.28,0,0,1,.92-.39,1.38,1.38,0,0,1,.94.38l5.61,5.61,5.61-5.61a1.33,1.33,0,0,1,.94-.38,1.26,1.26,0,0,1,.92.39,1.24,1.24,0,0,1,.4.92,1.29,1.29,0,0,1-.39.93L17,8.81l-2.8,2.82Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.77"><g><path d="M8.77,8.72a.88.88,0,0,1-.61-.27.82.82,0,0,1-.25-.61.89.89,0,0,1,.25-.62A.82.82,0,0,1,8.77,7a.81.81,0,0,1,.61.25.83.83,0,0,1,.27.62.81.81,0,0,1-.25.61.91.91,0,0,1-.63.27Zm9.62-5a1.74,1.74,0,0,1,1.76,1.76V17.76a1.74,1.74,0,0,1-1.76,1.76H6.16A1.74,1.74,0,0,1,4.4,17.76V5.51A1.74,1.74,0,0,1,6.16,3.75H18.39Zm0,1.75H6.16v8L8.53,11.8a.94.94,0,0,1,.54-.17.86.86,0,0,1,.54.2L11.09,13l3.64-4.55a.78.78,0,0,1,.34-.25.85.85,0,0,1,.42-.07.89.89,0,0,1,.39.12.78.78,0,0,1,.28.29l2.24,3.67V5.51Zm0,12.24V15.6L15.3,10.53,11.89,14.8a.89.89,0,0,1-.59.32.82.82,0,0,1-.64-.18L9,13.62,6.16,15.74v2Z" transform="translate(-4.4 -3.75)"/></g></svg>',
  video: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.55"><g><path d="M20.15,10.26V18.9l-3.94-1.57v1.2H4.41V10.66H16.22v1.23l2-.81,2-.82ZM14.64,17h0V12.54h0v-.31H6V17h8.67Zm3.94-.37v-4l-2.37,1v2l1.18.48,1.19.48ZM7.94,9.86A2.77,2.77,0,0,1,5.19,7.11a2.76,2.76,0,0,1,5.51,0A2.78,2.78,0,0,1,7.94,9.86Zm0-3.93a1.21,1.21,0,0,0-.83.35,1.15,1.15,0,0,0-.34.84A1.09,1.09,0,0,0,7.11,8,1.15,1.15,0,0,0,8,8.28,1.13,1.13,0,0,0,9.11,7.12,1.16,1.16,0,0,0,7.94,5.93Zm5.9,3.93a2.34,2.34,0,0,1-1.67-.68,2.3,2.3,0,0,1-.68-1.67,2.35,2.35,0,0,1,4-1.67,2.37,2.37,0,0,1,0,3.34,2.33,2.33,0,0,1-1.68.68Zm0-3.14a.75.75,0,1,0,.55.22.73.73,0,0,0-.55-.22Z" transform="translate(-4.41 -4.35)"/></g></svg>',
  link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.72"><g><path d="M13.05,13.63a.24.24,0,0,1,.15.22L13.42,16a.19.19,0,0,1-.08.18l-2.12,2.14a4.08,4.08,0,0,1-1.29.85A4,4,0,0,1,4.71,17a3.92,3.92,0,0,1-.3-1.52A4,4,0,0,1,4.71,14a3.91,3.91,0,0,1,.87-1.3L7.7,10.56a.25.25,0,0,1,.2-.06l2.17.22a.21.21,0,0,1,.19.15.24.24,0,0,1,0,.25L7.12,14.23a1.81,1.81,0,0,0,0,2.58,1.78,1.78,0,0,0,1.29.52,1.74,1.74,0,0,0,1.28-.52L12.8,13.7a.24.24,0,0,1,.25-.07ZM19,4.92a4,4,0,0,1,0,5.66L16.86,12.7a.25.25,0,0,1-.17.08l-2.2-.23a.21.21,0,0,1-.19-.15.22.22,0,0,1,0-.25L17.44,9a1.81,1.81,0,0,0,0-2.58,1.78,1.78,0,0,0-1.29-.52,1.74,1.74,0,0,0-1.28.52L11.76,9.57a.21.21,0,0,1-.25,0,.24.24,0,0,1-.16-.21l-.22-2.17a.19.19,0,0,1,.08-.18l2.12-2.14a4.08,4.08,0,0,1,1.29-.85,4.05,4.05,0,0,1,3.06,0,3.85,3.85,0,0,1,1.3.85ZM5.84,9.82a.25.25,0,0,1-.18-.08.19.19,0,0,1-.07-.19l.11-.77a.2.2,0,0,1,.11-.17.24.24,0,0,1,.2,0l2.5.72a.25.25,0,0,1,.15.27.22.22,0,0,1-.23.21l-2.59,0Zm4.12-2-.73-2.5a.27.27,0,0,1,0-.2A.21.21,0,0,1,9.41,5L10.19,5a.25.25,0,0,1,.19,0,.23.23,0,0,1,.08.18l-.05,2.61a.2.2,0,0,1-.19.23h0A.22.22,0,0,1,10,7.85Zm8.76,5.58a.25.25,0,0,1,.18.08.23.23,0,0,1,.06.2l-.11.77a.25.25,0,0,1-.11.17.21.21,0,0,1-.12,0l-.08,0L16,14a.25.25,0,0,1-.15-.27.22.22,0,0,1,.22-.21l1.29,0,1.33,0Zm-4.12,2,.74,2.51a.28.28,0,0,1,0,.2.23.23,0,0,1-.18.11l-.8.11a.23.23,0,0,1-.17-.07.25.25,0,0,1-.08-.18l0-2.61a.22.22,0,0,1,.22-.22.21.21,0,0,1,.26.15Z" transform="translate(-4.41 -3.77)"/></g></svg>',
  math: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.73"><g><path d="M17.19,5.73a1,1,0,0,0,.71-.29,1,1,0,0,0,.28-.7,1,1,0,0,0-1-1H7.35a1,1,0,0,0-1,1,.77.77,0,0,0,.13.47h0l4.58,6.43L6.68,17.81a1.25,1.25,0,0,0-.29.71.94.94,0,0,0,.28.7.92.92,0,0,0,.69.28H17.2a1,1,0,0,0,.71-.28,1,1,0,0,0,0-1.39.92.92,0,0,0-.71-.29H9.26l3.87-5.43a.86.86,0,0,0,0-.95L9.26,5.73h7.93Z" transform="translate(-6.38 -3.77)"/></g></svg>',
  unlink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.72"><g><path d="M19,18.32a4,4,0,0,0,0-5.68L15.85,9.5l-1.17,1.55L17.57,14a2,2,0,0,1,.61,1.47,2.08,2.08,0,0,1-2.09,2.09,2,2,0,0,1-1.47-.61l-.38-.37-1.74,1,.8.78a4,4,0,0,0,5.68,0ZM8,9.77a2,2,0,0,1-1.27-1,1.89,1.89,0,0,1-.21-1.57A2.1,2.1,0,0,1,7.45,6,2,2,0,0,1,9,5.76L12.27,7.2l.49-2L9.48,3.9a4,4,0,0,0-3.06.41A3.82,3.82,0,0,0,4.56,6.73a3.8,3.8,0,0,0,.4,3A3.78,3.78,0,0,0,7.39,11.6l5.38,2,.49-2-2.64-.94L8,9.77Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  table_header: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.74"><g><path d="M17,19.5v-.78H15.5v.78H17Zm-3,0v-.78H12.5v.78H14Zm-3,0v-.78H9.53v.78H11Zm-3,0v-.78H6.53v.78H8Zm10.55,0a1.73,1.73,0,0,0,.85-.35,1.67,1.67,0,0,0,.56-.76l-.71-.31a1.21,1.21,0,0,1-.35.4,1.34,1.34,0,0,1-.53.23l.08.38c.06.24.09.38.1.41Zm-13.7-.63.55-.55A.77.77,0,0,1,5.25,18a1.31,1.31,0,0,1-.06-.38v-.38H4.41v.38a2,2,0,0,0,.12.68,1.6,1.6,0,0,0,.35.57Zm15.27-2.12V15.26h-.78v1.49h.78Zm-15-1V14.23H4.41v1.49h.78Zm15-2V12.26h-.78v1.49h.78Zm-15-1V11.22H4.41v1.51h.78Zm15-2V9.26h-.78v1.51h.78Zm-15-1V8.17H4.41V9.74h.78Zm15-2V6.28h-.78V7.77h.78Zm-15-1.11V5.33L4.48,5.1a.77.77,0,0,0-.07.27,2.72,2.72,0,0,0,0,.28v1h.79ZM19.21,5l.63-.4A1.62,1.62,0,0,0,19.16,4a1.94,1.94,0,0,0-.91-.22v.78a1.31,1.31,0,0,1,.56.12.88.88,0,0,1,.4.36ZM6,4.54H7.78V3.76H6a.82.82,0,0,0-.28.06l.12.35c.07.21.1.33.11.36Zm10.8,0V3.76H15.28v.78h1.49Zm-3,0V3.76H12.28v.78h1.49Zm-3,0V3.76H9.28v.78h1.51ZM6,10.84h12.6V6.91H6Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  merge_cell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 15.74"><g><path d="M18.92,13.5h1.23v4.15A1.84,1.84,0,0,1,18.3,19.5H14V18.27H18.3a.6.6,0,0,0,.44-.18.59.59,0,0,0,.18-.44V13.5ZM18.3,3.76a1.84,1.84,0,0,1,1.85,1.85V9.82H18.92V5.6a.6.6,0,0,0-.18-.44A.59.59,0,0,0,18.3,5H14V3.76H18.3Zm1.85,8.51H15.6L17.26,14l-.86.86-3.14-3.17L16.4,8.51l.86.86L15.62,11h4.54v1.24Zm-13.9,6h4.27V19.5H6.25A1.84,1.84,0,0,1,4.4,17.65V13.5H5.63v4.15a.61.61,0,0,0,.62.62Zm0-14.51h4.27V5H6.25a.6.6,0,0,0-.44.18.57.57,0,0,0-.17.43V9.81H4.41V5.6A1.83,1.83,0,0,1,6.25,3.76Zm5,7.9L8.15,14.83,7.3,14,9,12.27H4.41V11H8.94L7.3,9.38,7.73,9l.43-.43Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  split_cell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.74"><g><path d="M10.37,12.25H6.74L8.4,13.94l-.87.86L4.41,11.63,7.53,8.5l.87.86L6.74,11h3.62v1.23Zm9.78-.61L17,14.81,16.13,14l1.66-1.69H14.16V11h3.63L16.13,9.37l.43-.43A5.24,5.24,0,0,1,17,8.51ZM18.9,8.22V5.61a.57.57,0,0,0-.18-.43A.65.65,0,0,0,18.29,5H12.88V18.28h5.41a.7.7,0,0,0,.44-.18.57.57,0,0,0,.18-.43V15h1.23v2.64a1.84,1.84,0,0,1-1.85,1.83h-12A1.84,1.84,0,0,1,4.94,19a1.81,1.81,0,0,1-.54-1.29V15H5.63v2.64a.57.57,0,0,0,.18.43.67.67,0,0,0,.44.18h5.41V5H6.25a.7.7,0,0,0-.44.18.56.56,0,0,0-.17.43V8.22H4.41V5.61A1.8,1.8,0,0,1,5,4.31a1.91,1.91,0,0,1,1.31-.55h12a1.89,1.89,0,0,1,1.31.55,1.8,1.8,0,0,1,.54,1.3V8.23H18.9Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  caption: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.79"><g><path d="M4.41,18.52H20.15v-2H4.41ZM20,4.73H18.07V6h.65v.65H20V4.73ZM17,6V4.73H14.55V6H17ZM13.49,6V4.73H11V6h2.47ZM10,6V4.73H7.5V6H10ZM5.79,6h.65V4.73H4.5V6.67H5.8V6ZM4.5,11.34H5.79V8.48H4.5ZM6.44,13.8H5.79v-.65H4.5v1.94H6.44ZM17,15.09V13.8H14.55v1.29H17Zm-3.52,0V13.8H11v1.29h2.47Zm-3.53,0V13.8H7.5v1.29H10ZM20,13.16H18.72v.65h-.65V15.1H20Zm-1.29-1.82H20V8.48h-1.3v2.86Z" transform="translate(-4.41 -4.73)"/></g></svg>',
  edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.73"><g><path d="M7.51,5.68h6l1.52-1.57H6.94a2.4,2.4,0,0,0-1.79.82A2.8,2.8,0,0,0,4.41,6.8V17a2.55,2.55,0,0,0,.75,1.8A2.48,2.48,0,0,0,7,19.5H17.22a2.57,2.57,0,0,0,1.83-.74,2.52,2.52,0,0,0,.77-1.8V8.83l-1.58,1.54v6a1.54,1.54,0,0,1-1.53,1.53H7.51A1.54,1.54,0,0,1,6,16.41V7.21A1.52,1.52,0,0,1,7.51,5.68Zm5.63,7.47h0L10.7,10.74l-1,3.38,1.71-.48,1.7-.49Zm.34-.34h0l5.36-5.32L16.4,5.08,11,10.4l1.23,1.21,1.21,1.2ZM19.93,6.4a.82.82,0,0,0,.22-.48A.54.54,0,0,0,20,5.47L18.45,4A.67.67,0,0,0,18,3.77a.7.7,0,0,0-.48.21l-.74.72,2.44,2.43.37-.37.35-.36Z" transform="translate(-4.41 -3.77)"/></g></svg>',
  delete: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 15.74"><g><path d="M19.16,6.71a.94.94,0,0,0,.69-.28.91.91,0,0,0,.29-.68A1,1,0,0,0,19.85,5a.93.93,0,0,0-.69-.3H14.24A.94.94,0,0,0,14,4.06a.92.92,0,0,0-.7-.3h-2a1,1,0,0,0-.7.3.93.93,0,0,0-.28.68H5.39A.92.92,0,0,0,4.7,5a1,1,0,0,0-.29.71.91.91,0,0,0,.29.68,1,1,0,0,0,.69.28H19.16Zm-12.79,1a1,1,0,0,0-.7.3.94.94,0,0,0-.28.69v8.85A1.88,1.88,0,0,0,6,18.93a1.9,1.9,0,0,0,1.39.57H17.2a1.87,1.87,0,0,0,1.39-.58,1.91,1.91,0,0,0,.58-1.39V8.68A1,1,0,0,0,18.88,8a.89.89,0,0,0-.7-.29,1,1,0,0,0-.69.29.92.92,0,0,0-.29.68v7.87a1,1,0,0,1-1,1H8.34a.94.94,0,0,1-.69-.28,1,1,0,0,1-.29-.71V8.68a1,1,0,0,0-1-1Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  modify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.74"><g><path d="M19.79,15.23a.66.66,0,0,1,.3.38.59.59,0,0,1-.07.48l-.8,1.38a.66.66,0,0,1-.38.3.59.59,0,0,1-.48-.07l-.68-.38a4.55,4.55,0,0,1-1.34.77v.78a.64.64,0,0,1-.18.45.61.61,0,0,1-.45.18h-1.6a.6.6,0,0,1-.44-.18.66.66,0,0,1-.19-.45v-.78a4.36,4.36,0,0,1-1.32-.77l-.69.38a.58.58,0,0,1-.48.07.66.66,0,0,1-.38-.3l-.38-.66h.83a1.77,1.77,0,0,0,1.23-.52,1.72,1.72,0,0,0,.51-1.23v-.18a3,3,0,0,0,.49-.28l.15.09a1.83,1.83,0,0,0,.88.23A1.75,1.75,0,0,0,15.84,14l.88-1.52a1.7,1.7,0,0,0,.17-1.32,1.66,1.66,0,0,0-.3-.61,1.84,1.84,0,0,0-.51-.45l-.15-.09,0-.29,0-.28.15-.09a1,1,0,0,0,.26-.18l0,.06v.78a4.34,4.34,0,0,1,1.34.77l.68-.38a.68.68,0,0,1,.48-.06.64.64,0,0,1,.38.29l.8,1.38a.58.58,0,0,1,.07.48.63.63,0,0,1-.3.38l-.68.4a3.84,3.84,0,0,1,.08.76,4.13,4.13,0,0,1-.08.78l.34.18.32.2ZM10.17,7.86a1.9,1.9,0,0,1,1.35,3.23,1.85,1.85,0,0,1-1.35.55A1.9,1.9,0,0,1,8.83,8.41a1.92,1.92,0,0,1,1.34-.55Zm1.58,7.2a.73.73,0,0,1-.21.49.66.66,0,0,1-.48.2H9.29a.68.68,0,0,1-.69-.69V14.2a4.75,4.75,0,0,1-1.48-.86l-.75.45a.73.73,0,0,1-.7,0,.63.63,0,0,1-.25-.26L4.54,12a.67.67,0,0,1-.08-.53.71.71,0,0,1,.32-.42l.75-.43a4.8,4.8,0,0,1-.08-.85,4.71,4.71,0,0,1,.08-.85l-.74-.44a.71.71,0,0,1-.32-.42.65.65,0,0,1,.07-.54L5.42,6a.66.66,0,0,1,.42-.32l.18,0a.73.73,0,0,1,.35.09l.75.43A4.68,4.68,0,0,1,8.6,5.33V4.45a.68.68,0,0,1,.69-.69h1.77a.64.64,0,0,1,.48.2.73.73,0,0,1,.21.49v.88a4.75,4.75,0,0,1,1.48.85L14,5.75a.67.67,0,0,1,.34-.09l.18,0a.71.71,0,0,1,.42.32l.89,1.54a.67.67,0,0,1,.06.52.73.73,0,0,1-.32.43l-.75.42a4.8,4.8,0,0,1,.08.85,4.71,4.71,0,0,1-.08.85l.75.43a.66.66,0,0,1,.32.42.73.73,0,0,1-.06.54l-.89,1.52a.69.69,0,0,1-.25.26.7.7,0,0,1-.35.09.64.64,0,0,1-.34-.09l-.75-.45a4.87,4.87,0,0,1-1.48.86v.87ZM7.23,9.75a3,3,0,0,0,.86,2.08,2.94,2.94,0,1,0,4.16-4.16,3,3,0,0,0-2.08-.85A2.94,2.94,0,0,0,7.23,9.75Z" transform="translate(-4.44 -3.76)"/></g></svg>',
  revert: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 14.69"><g><path d="M18.26,15V12.3l1.89-2V15a2.58,2.58,0,0,1-.24,1c-.2.58-.75.92-1.65,1H7.56v2L4.41,15.63,7.56,13v2h10.7ZM6.3,8.28V11L4.41,13V8.28a2.58,2.58,0,0,1,.24-1c.2-.58.75-.92,1.65-1H17v-2l3.15,3.34L17,10.3v-2H6.3Z" transform="translate(-4.4 -4.28)"/></g></svg>',
  auto_size: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M6.71,17.19,6.89,16l1.21-.15A6,6,0,0,1,6.81,13.9a5.78,5.78,0,0,1-.45-2.27A6,6,0,0,1,8.1,7.45a5.83,5.83,0,0,1,4.17-1.73l1-1-1-1A7.89,7.89,0,0,0,5,14.64a7.73,7.73,0,0,0,1.71,2.55Zm5.57,2.31h0A7.86,7.86,0,0,0,17.85,6.07L17.67,7.3l-1.21.15a5.9,5.9,0,0,1,1.29,1.92,5.81,5.81,0,0,1,.45,2.26,5.91,5.91,0,0,1-5.9,5.9l-1,1,.49.49.47.5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  insert_row_below: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M15.7,1.3c-0.1-0.1-0.1-0.2-0.2-0.2L15.3,1H0.4L0.3,1.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1L0,1.4v7.7l0.1,0.1c0,0.1,0.1,0.1,0.2,0.2l0.1,0.1h2.3V9.3l0.1-0.5L3,8.5l0.1-0.2c-0.1,0-0.2,0-0.3,0H1.2v-6h13.3v6h-1.6c-0.1,0-0.2,0-0.3,0l0.1,0.2l0.2,0.4C12.9,9,13,9.2,13,9.3v0.1h2.3l0.2-0.1c0.1,0,0.1-0.1,0.2-0.2l0.1-0.1V1.4L15.7,1.3z"/><path d="M10.5,7.5C9.9,7.1,9.3,6.8,8.6,6.7c-0.2,0-0.5-0.1-0.7,0c-0.2,0-0.5,0-0.7,0C6.6,6.7,6.1,6.9,5.6,7.3C5.2,7.6,4.7,8,4.4,8.4C4.3,8.6,4.2,8.8,4.2,8.9C4.1,9.1,4,9.3,3.9,9.4C3.9,9.6,3.8,9.7,3.8,9.9c0,0.2-0.1,0.3-0.1,0.5v-0.1c-0.1,0.8,0.1,1.6,0.5,2.4c0.4,0.7,1,1.3,1.7,1.7c0.3,0.2,0.6,0.3,0.9,0.3c0.3,0.1,0.7,0.1,1,0.1c0.3,0,0.7,0,1-0.1c0.3-0.1,0.6-0.2,0.9-0.3c0.5-0.3,0.9-0.6,1.3-1c0.3-0.4,0.6-0.8,0.8-1.3c0.1-0.4,0.2-0.9,0.2-1.4c0-0.5-0.1-1-0.3-1.4C11.5,8.6,11.1,8,10.5,7.5z M10.1,11.3H8.5v1.6H8H7.9H7.3v0v-0.1v-1.4H5.7v-0.4v-0.2v-0.6h0h1.5V8.5h1.2v1.6h1.6V11.3z"/></g></svg>',
  insert_row_above: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M0.1,14.5c0.1,0.1,0.1,0.2,0.2,0.2l0.1,0.1h14.9l0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1l0.1-0.1V6.7l-0.1-0.1c0-0.1-0.1-0.1-0.2-0.2l-0.1-0.1h-2.3v0.1l-0.1,0.5l-0.2,0.4l-0.1,0.2c0.1,0,0.2,0,0.3,0h1.6v6H1.3v-6h1.6c0.1,0,0.2,0,0.3,0L3.1,7.3L2.9,6.9C2.8,6.8,2.8,6.6,2.7,6.5V6.3H0.4L0.3,6.4c-0.1,0-0.1,0.1-0.2,0.2L0,6.7v7.7L0.1,14.5z"/><path d="M5.3,8.3c0.6,0.5,1.2,0.8,1.9,0.9c0.2,0,0.5,0.1,0.7,0c0.2,0,0.5,0,0.7,0c0.6-0.1,1.1-0.3,1.6-0.6c0.5-0.3,0.9-0.7,1.2-1.2c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.4,0.2-0.5c0.1-0.1,0.1-0.3,0.1-0.4C12,5.8,12,5.6,12,5.4v0.1c0.1-0.8-0.1-1.6-0.5-2.4c-0.4-0.7-1-1.3-1.7-1.7C9.5,1.3,9.2,1.2,8.9,1.1C8.5,1,8.2,1,7.9,1c-0.3,0-0.7,0-1,0.1C6.6,1.2,6.3,1.3,6,1.4C5.5,1.7,5.1,2,4.7,2.4C4.4,2.8,4.1,3.3,3.9,3.8C3.8,4.2,3.7,4.7,3.7,5.2c0,0.5,0.1,1,0.3,1.4C4.3,7.2,4.7,7.8,5.3,8.3z M5.7,4.5h1.6V2.9h0.5h0.1h0.6v0v0.1v1.4H10v0.4v0.2v0.6h0H8.5v1.6H7.3V5.7H5.7V4.5z"/></g></svg>',
  insert_column_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M14.5,15.7c0.1-0.1,0.2-0.1,0.2-0.2l0.1-0.1V0.4l-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1L14.4,0H6.7L6.6,0.1c-0.1,0-0.1,0.1-0.2,0.2L6.3,0.4v2.3h0.1l0.5,0.1L7.3,3l0.2,0.1c0-0.1,0-0.2,0-0.3V1.2h6v13.3h-6v-1.6c0-0.1,0-0.2,0-0.3l-0.2,0.1l-0.4,0.2C6.7,12.9,6.6,13,6.4,13H6.3v2.3l0.1,0.2c0,0.1,0.1,0.1,0.2,0.2l0.1,0.1h7.7L14.5,15.7z"/><path d="M8.3,10.5C8.7,10,9,9.3,9.1,8.6c0-0.2,0.1-0.5,0-0.7c0-0.2,0-0.5,0-0.7C9,6.7,8.8,6.1,8.5,5.7C8.2,5.2,7.8,4.8,7.3,4.5C7.2,4.4,7,4.3,6.9,4.2C6.7,4.1,6.5,4,6.4,4C6.2,3.9,6.1,3.9,5.9,3.8c-0.2,0-0.3-0.1-0.5-0.1h0.1C4.7,3.7,3.8,3.9,3.1,4.3C2.4,4.7,1.8,5.3,1.4,6C1.3,6.3,1.2,6.6,1.1,6.9C1,7.2,1,7.6,1,7.9c0,0.3,0,0.7,0.1,1c0.1,0.3,0.2,0.6,0.3,0.9c0.3,0.5,0.6,0.9,1,1.3c0.4,0.3,0.8,0.6,1.3,0.8C4.2,12,4.7,12.1,5.1,12c0.5,0,1-0.1,1.4-0.3C7.2,11.5,7.8,11.1,8.3,10.5zM4.5,10.1V8.5H2.9V8V7.9V7.3h0H3h1.4V5.7h0.4h0.2h0.6v0v1.5h1.6v1.2H5.7v1.6H4.5z"/></g></svg>',
  insert_column_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M1.3,0.1C1.2,0.2,1.1,0.2,1.1,0.3L1,0.4v14.9l0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1l0.1,0.1h7.7l0.1-0.1c0.1,0,0.1-0.1,0.2-0.2l0.1-0.1v-2.3H9.3l-0.5-0.1l-0.4-0.2l-0.2-0.1c0,0.1,0,0.2,0,0.3v1.6h-6V1.3h6v1.6c0,0.1,0,0.2,0,0.3l0.2-0.1l0.4-0.2C9,2.9,9.2,2.8,9.3,2.8h0.1V0.5L9.4,0.3c0-0.1-0.1-0.1-0.2-0.2L9.1,0H1.4L1.3,0.1z"/><path d="M7.5,5.3C7,5.8,6.7,6.5,6.6,7.2c0,0.2-0.1,0.5,0,0.7c0,0.2,0,0.5,0,0.7c0.1,0.6,0.3,1.1,0.6,1.6c0.3,0.5,0.7,0.9,1.2,1.2c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.2,0.5,0.2c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3,0.1,0.5,0.1h-0.1c0.8,0.1,1.6-0.1,2.4-0.5c0.7-0.4,1.3-1,1.7-1.7c0.2-0.3,0.3-0.6,0.3-0.9c0.1-0.3,0.1-0.7,0.1-1c0-0.3,0-0.7-0.1-1c-0.1-0.3-0.2-0.6-0.3-0.9c-0.3-0.5-0.6-0.9-1-1.3C13,4.4,12.5,4.2,12,4c-0.4-0.1-0.9-0.2-1.4-0.2c-0.5,0-1,0.1-1.4,0.2C8.5,4.3,7.9,4.7,7.5,5.3z M11.3,5.7v1.6h1.6v0.5v0.1v0.6h0h-0.1h-1.4v1.6h-0.4h-0.2h-0.6v0V8.5H8.5V7.3h1.6V5.7H11.3z"/></g></svg>',
  delete_row: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 13.83"><g><path d="M4.7,18.46l.12.08H19.73l.12-.08a.58.58,0,0,0,.22-.22l.08-.12,0-7.69-.08-.11a.77.77,0,0,0-.18-.18l-.11-.08-2.31,0-.08.28-.1.29a1.58,1.58,0,0,1-.12.29l-.14.34s0,0,.18,0H18.9v6H5.64v-6H7.35c.14,0,.2,0,.18,0l-.14-.34a2.85,2.85,0,0,1-.12-.29l-.1-.29-.07-.27-2.31,0-.11.08a.77.77,0,0,0-.18.18l-.08.11,0,7.69.08.12a.47.47,0,0,0,.09.12l.13.09ZM12.11,13a4,4,0,0,0,1.46-.21,4.51,4.51,0,0,0,1.31-.71A4,4,0,0,0,16.26,10a4.32,4.32,0,0,0-.08-2.54,4.34,4.34,0,0,0-1-1.52,4.15,4.15,0,0,0-1.54-1,4.34,4.34,0,0,0-1.35-.22A4.07,4.07,0,0,0,11,4.93,3.94,3.94,0,0,0,9.24,6.07,3.92,3.92,0,0,0,8.15,8.88a3.91,3.91,0,0,0,.12.95A4.16,4.16,0,0,0,12.11,13Zm2.35-4.14v.58H10.09V8.27h4.37v.58Z" transform="translate(-4.4 -4.71)"/></g></svg>',
  delete_column: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.81 15.74"><g><path d="M5.66,19.42l.12.08,7.69,0,.11-.08a.77.77,0,0,0,.18-.18l.08-.11,0-2.32-.15,0-.45-.15-.42-.18-.17-.07a1,1,0,0,0,0,.27v1.63h-6V5h6V6.62a.9.9,0,0,0,0,.26l.17-.07.42-.17a3.91,3.91,0,0,1,.45-.15l.15,0,0-2.32L13.75,4a.77.77,0,0,0-.18-.18l-.11-.08H5.79l-.13.07a.63.63,0,0,0-.21.22l-.08.12V19.08l.08.12a.47.47,0,0,0,.09.12.35.35,0,0,0,.12.1Zm9-3.67a4.16,4.16,0,0,0,2.36-.51,4.08,4.08,0,0,0,1.67-1.72,4,4,0,0,0,.35-.91,3.79,3.79,0,0,0,.1-1,4.71,4.71,0,0,0-.11-1,5,5,0,0,0-.3-.87,4.25,4.25,0,0,0-1-1.25,4.49,4.49,0,0,0-1.34-.81A4.26,4.26,0,0,0,15,7.48a3.88,3.88,0,0,0-1.41.25A4.32,4.32,0,0,0,11.86,9,4,4,0,0,0,11,10.94a4.4,4.4,0,0,0-.05.68,4.5,4.5,0,0,0,.05.68,3.93,3.93,0,0,0,.61,1.57,4.22,4.22,0,0,0,1.18,1.2,4.59,4.59,0,0,0,.48.27c.2.1.37.17.5.22a2.44,2.44,0,0,0,.45.12,4.61,4.61,0,0,0,.5.07Zm2.54-4.12v.58H12.87V11h4.37v.59Z" transform="translate(-5.37 -3.76)"/></g></svg>',
  fixed_column_width: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z" /></svg>',
  rotate_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M0.5,10.2c0,0.1,0,0.2,0,0.3v0.2l0,0c0.1,0.3,0.3,0.6,0.4,0.9l0,0C1,11.8,1.3,12,1.5,11.9h0.1h0.2h0.1c0.1-0.1,0.3-0.3,0.4-0.5v-0.2c0-0.1,0-0.2-0.1-0.3l0,0c-0.2-0.2-0.3-0.4-0.3-0.7l0,0C1.8,10,1.7,9.9,1.5,9.8c-0.1,0-0.2,0-0.3,0H0.9C0.7,9.9,0.6,10,0.5,10.2L0.5,10.2z"/><path d="M2.2,11.5L2.2,11.5L2.2,11.5z"/><path d="M5.9,3.6L5.9,3.6L5.9,3.6z"/><path d="M0.1,7.9c0,0.3,0,0.6,0,0.9l0,0l0,0l0,0l0,0c0,0.2,0.1,0.3,0.2,0.4l0,0c0.2,0.1,0.3,0.2,0.5,0.2l0,0l0,0c0.2,0,0.4-0.1,0.5-0.3l0,0c0-0.1,0.1-0.3,0.1-0.4V8.6l0,0c0-0.2,0-0.5,0-0.7l0,0c0-0.2-0.1-0.4-0.2-0.5C1.1,7.3,0.9,7.2,0.7,7.2S0.3,7.3,0.2,7.4C0.1,7.5,0,7.7,0.1,7.9z"/><path d="M1.9,12.7L1.9,12.7c0,0.2,0,0.4,0.2,0.5l0,0l0.2,0.3l0,0c0.2,0.1,0.3,0.2,0.5,0.4l0,0l0,0l0,0l0,0C2.9,14,3,14.1,3.2,14.1s0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5v-0.1c0-0.2-0.1-0.4-0.2-0.5l0,0l-0.4-0.4l-0.2-0.2l0,0C3,12.1,2.8,12,2.6,12l0,0c-0.2,0-0.4,0.1-0.5,0.2l0,0C2,12.3,1.9,12.5,1.9,12.7z"/><path d="M6.6,15c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.3l0,0c0.3,0,0.5,0,0.7,0h0.3l0,0c0.2,0,0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5l0,0l0,0c0-0.2-0.1-0.4-0.2-0.5l0,0c-0.1-0.1-0.3-0.2-0.5-0.2l0,0H7.9c-0.1,0-0.3,0-0.5,0l0,0H7.3c-0.2-0.1-0.3,0-0.5,0.1l0,0C6.7,14.6,6.6,14.8,6.6,15L6.6,15L6.6,15L6.6,15z"/><path d="M4.2,7.4C4,7.5,4,7.7,4,7.9c0,0.2,0,0.4,0.2,0.5l0,0l3.2,3.2l0,0c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2l0,0l3.2-3.2l0,0c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5l0,0C11.5,7.3,11,6.7,10,5.8l0,0L8.4,4.2l0,0C8.3,4.1,8.1,4,7.9,4S7.5,4.1,7.4,4.2L4.2,7.4L4.2,7.4z M6.8,9L5.7,7.9l2.2-2.2l2.3,2.2l-2.3,2.2C7.7,9.9,7.3,9.5,6.8,9L6.8,9z"/><path d="M4.1,14.1C4,14.2,4,14.3,4,14.4v0.2l0,0c0.1,0.1,0.2,0.3,0.4,0.4l0,0c0.3,0.1,0.6,0.2,0.9,0.4h0.1h0.1l0,0c0.2,0,0.3-0.1,0.5-0.1l0,0c0.2-0.1,0.3-0.3,0.3-0.4l0,0l0,0l0,0l0,0v-0.2c0-0.1-0.1-0.2-0.1-0.3l0,0C6.1,14.2,6,14.1,5.8,14l0,0c-0.3-0.1-0.5-0.2-0.8-0.2l0,0c-0.1-0.1-0.2-0.1-0.3-0.1H4.5C4.3,13.7,4.2,13.9,4.1,14.1z"/><path d="M9.3,14.4c0,0.1-0.1,0.3,0,0.4V15l0,0c0,0.1,0.1,0.3,0.5,0.4c0.1,0.1,0.3,0.1,0.4,0.1l0,0h0.1l0,0c0.3-0.1,0.6-0.2,0.9-0.3l0,0c0.1-0.1,0.2-0.2,0.3-0.4l0.1-0.3c0-0.1-0.1-0.2-0.1-0.3l0,0c-0.1-0.2-0.2-0.3-0.4-0.4l0,0h-0.3c-0.1,0-0.2,0-0.3,0l0,0c-0.2,0.1-0.5,0.2-0.8,0.3l0,0C9.5,14.1,9.4,14.2,9.3,14.4L9.3,14.4z"/><path d="M11.4,14.7L11.4,14.7L11.4,14.7z"/><path d="M9.5,15.3L9.5,15.3L9.5,15.3z"/><path d="M15.9,7.9c0-1-0.2-2-0.6-3l0,0c-0.4-1-1-1.9-1.7-2.6C12.8,1.6,12,1,11,0.6l0,0C10.1,0.2,9,0,8,0C7.3,0,6.5,0.1,5.8,0.3l0,0C5.2,0.5,4.6,0.8,4,1.1L3.1,0.2l0,0C2.9,0.1,2.8,0,2.6,0H2.4l0,0C2.2,0,2,0.2,1.9,0.4l0,0L0.1,4.9l0,0C0,5,0,5.1,0,5.2c0,0.2,0.1,0.4,0.2,0.5l0,0c0.2,0.1,0.3,0.2,0.5,0.2h0.1H1l0,0l4.7-1.8l0,0C5.9,4,6.1,3.8,6.1,3.6V3.4C6.1,3.2,6,3,5.9,2.9l0,0L5.1,2.1c0.4-0.2,0.8-0.4,1.3-0.5c0.5-0.1,1.1-0.2,1.7-0.2c0.9,0,1.7,0.2,2.5,0.5l0,0c0.8,0.3,1.5,0.8,2.1,1.4c0.6,0.6,1.1,1.3,1.4,2.1l0,0c0.3,0.8,0.5,1.6,0.5,2.5s-0.2,1.7-0.5,2.5l0,0c-0.3,0.8-0.8,1.5-1.4,2.1c-0.2,0.2-0.4,0.3-0.6,0.5l0,0c-0.2,0.1-0.3,0.3-0.3,0.5v0.1c0,0.1,0,0.3,0.1,0.4l0,0c0.1,0.2,0.3,0.3,0.5,0.3l0,0c0.1,0,0.3-0.1,0.4-0.2l0,0l0,0l0,0l0,0c0.2-0.2,0.5-0.4,0.7-0.6l0,0l0,0l0,0l0,0c0.7-0.8,1.3-1.6,1.7-2.6C15.6,10,15.8,9,15.9,7.9z M1.9,4C2,3.8,2.1,3.5,2.3,3.1l0,0L2.7,2l1.2,1.2L1.9,4z"/><path d="M6.8,15.5L6.8,15.5L6.8,15.5z"/></g></svg>',
  rotate_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M9.9,15.3L9.9,15.3L9.9,15.3z"/><path d="M6.9,15.1L6.9,15.1c0,0.1,0.1,0.3,0.2,0.4l0,0c0.1,0.2,0.3,0.3,0.5,0.3l0,0h0.3c0.2,0,0.4,0,0.7,0l0,0c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.2,0.2-0.4V15c0-0.2-0.1-0.4-0.2-0.4c-0.2-0.1-0.3-0.2-0.5-0.2H8.4l0,0c-0.1,0-0.3,0-0.5,0H7.6l0,0c-0.2,0-0.4,0.1-0.5,0.2C7,14.7,6.9,14.9,6.9,15.1z"/><path d="M6.5,14.4L6.5,14.4L6.5,14.4z"/><path d="M5.8,5.8L5.8,5.8c-1,0.9-1.5,1.5-1.7,1.6l0,0C4,7.5,4,7.7,4,7.9c0,0.2,0,0.4,0.2,0.5l0,0l3.2,3.2l0,0c0.2,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l0,0l3.2-3.2l0,0c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5l0,0L8.4,4.2C8.3,4.1,8.1,4,7.9,4C7.7,4,7.5,4.1,7.4,4.2l0,0L5.8,5.8z M5.6,7.9l2.3-2.2l2.2,2.2L9,9l0,0l0,0l0,0l0,0c-0.5,0.6-0.9,0.9-1.1,1.1L5.6,7.9z"/><path d="M9,15.5L9,15.5L9,15.5z"/><path d="M9.6,14.7v0.2l0,0l0,0l0,0l0,0c0.1,0.2,0.1,0.3,0.3,0.3c0.1,0.1,0.3,0.1,0.4,0.1l0,0h0.1h0.1c0.3-0.1,0.6-0.3,0.9-0.4l0,0c0.1-0.1,0.2-0.2,0.3-0.4l0,0v-0.2c0-0.1,0-0.2-0.1-0.3c-0.1-0.2-0.2-0.3-0.4-0.4H11c-0.1,0-0.2,0.1-0.3,0.1l0,0c-0.2,0.1-0.4,0.2-0.7,0.3l0,0l0,0c-0.1,0.1-0.3,0.2-0.4,0.4C9.6,14.5,9.6,14.6,9.6,14.7z"/><path d="M9,14.5L9,14.5L9,14.5z"/><path d="M9.6,14.4L9.6,14.4L9.6,14.4z"/><path d="M11.7,14L11.7,14L11.7,14z"/><path d="M15.6,7.4L15.6,7.4L15.6,7.4z"/><path d="M15,9.4c0.2,0,0.4,0,0.6-0.2l0,0c0.1-0.1,0.2-0.2,0.2-0.4l0,0l0,0l0,0l0,0c0-0.3,0-0.6,0-0.9c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2s-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5l0,0c0,0.2,0,0.4,0,0.7l0,0v0.1c0,0.1,0,0.3,0.1,0.4l0,0C14.6,9.3,14.8,9.4,15,9.4L15,9.4L15,9.4z"/><path d="M14,12h0.1h0.2h0.1c0.2,0,0.5-0.2,0.6-0.4l0,0c0.2-0.3,0.3-0.6,0.4-0.9l0,0v-0.2c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.2-0.2-0.3-0.4-0.4h-0.3c-0.1,0-0.2,0-0.3,0C14.2,9.9,14,10,14,10.3l0,0c-0.1,0.2-0.2,0.5-0.3,0.7l0,0c-0.1,0.1-0.1,0.2-0.1,0.3v0.2l0,0l0,0C13.6,11.6,13.8,11.8,14,12z"/><path d="M14.6,7.4L14.6,7.4L14.6,7.4z"/><path d="M4.4,14.2c-0.1,0.1-0.1,0.2-0.1,0.3l0.1,0.2c0,0.2,0.2,0.3,0.3,0.4l0,0c0.3,0.1,0.6,0.3,1.1,0.4l0,0h0.1l0,0c0.1,0,0.2-0.1,0.4-0.2c0.1,0,0.2-0.2,0.3-0.3l0,0v-0.2c0-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.2-0.4-0.3l0,0c-0.2-0.1-0.5-0.2-0.7-0.3l0,0c-0.1,0-0.2,0-0.3,0H4.7l0,0C4.6,13.9,4.4,14,4.4,14.2L4.4,14.2z"/><path d="M11.9,13.3c0,0.2,0.1,0.4,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l0,0l0,0l0,0l0,0c0.1-0.1,0.3-0.3,0.4-0.4l0,0l0.2-0.3l0,0c0.1-0.2,0.2-0.3,0.2-0.5l0,0c0-0.2-0.1-0.4-0.2-0.5l0,0c-0.1-0.1-0.3-0.2-0.5-0.2l0,0c-0.2,0-0.4,0.1-0.5,0.2l0,0l-0.2,0.2l-0.4,0.4l0,0C12,13,11.9,13.1,11.9,13.3L11.9,13.3z"/><path d="M12.1,13.8L12.1,13.8L12.1,13.8z"/><path d="M11.9,13.3L11.9,13.3L11.9,13.3z"/><path d="M15.9,5.2c0-0.1-0.1-0.2-0.1-0.3l0,0L14,0.4l0,0C13.9,0.2,13.7,0,13.5,0l0,0l0,0h-0.2c-0.2,0-0.4,0.1-0.5,0.2l0,0l-0.9,0.9c-0.5-0.3-1.1-0.6-1.8-0.8l0,0C9.4,0.1,8.7,0,7.9,0c-1,0-2,0.2-3,0.6S3,1.6,2.3,2.3C1.6,3.1,1,3.9,0.6,4.9l0,0C0.2,5.8,0,6.8,0,7.9c0,1,0.2,2,0.6,3s0.9,1.8,1.7,2.6l0,0l0,0l0,0l0,0c0.2,0.2,0.5,0.4,0.7,0.6l0,0l0,0l0,0l0,0c0.2,0.1,0.3,0.2,0.5,0.2l0,0c0.2,0,0.4-0.1,0.6-0.3l0,0c0.1-0.1,0.1-0.3,0.1-0.4v-0.1l0,0C4.1,13.3,4,13.1,3.9,13l0,0c-0.2-0.1-0.4-0.3-0.6-0.5c-0.6-0.6-1.1-1.3-1.4-2.1l0,0C1.6,9.6,1.4,8.8,1.4,7.9s0.2-1.7,0.5-2.5l0,0c0.3-0.8,0.8-1.5,1.4-2.1c0.6-0.6,1.3-1.1,2.1-1.4l0,0C6.2,1.6,7,1.4,7.9,1.4c0.6,0,1.1,0.1,1.7,0.2c0.5,0.1,0.9,0.3,1.3,0.5l-0.8,0.8l0,0C10,3.1,9.9,3.2,9.9,3.4v0.2l0,0l0,0c0,0.2,0.2,0.4,0.4,0.5l0,0l4.5,1.8l0,0H15h0.1c0.2,0,0.4-0.1,0.5-0.2l0,0C15.7,5.6,15.8,5.4,15.9,5.2z M11.8,3.2L13,2l0.4,1.1l0,0c0.2,0.4,0.3,0.7,0.4,0.9L11.8,3.2z"/></g></svg>',
  mirror_horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.75 15.74"><g><path d="M13.75,3.76l5.9,15.74h-5.9V3.76ZM4.9,19.5,10.8,3.76V19.5H4.9Z" transform="translate(-4.9 -3.76)"/></g></svg>',
  mirror_vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.75"><g><path d="M20.15,13.1,4.41,19V13.1H20.15ZM4.41,4.25l15.74,5.9H4.41V4.25Z" transform="translate(-4.41 -4.25)"/></g></svg>',
  checked: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 12.1"><g><path d="M4.59,12.23l.12.18L9.43,17.5a.58.58,0,0,0,.84,0L20,7.45h0a.58.58,0,0,0,0-.84l-.85-.85a.58.58,0,0,0-.84,0H18.2l-8.12,8.41a.29.29,0,0,1-.42,0l-3.4-3.63a.58.58,0,0,0-.84,0l-.85.85a.6.6,0,0,0-.14.21.51.51,0,0,0,0,.44c.05.06.1.13.16.19Z" transform="translate(-4.38 -5.58)"/></g></svg>',
  line_break: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z"/></svg>',
  audio: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>',
  image_gallery: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="30 30 150 150"><g><path d="M152.775,120.548V51.651c0-12.271-9.984-22.254-22.254-22.254H43.727c-12.271,0-22.254,9.983-22.254,22.254v68.896c0,12.27,9.983,22.254,22.254,22.254h86.795C142.791,142.802,152.775,132.817,152.775,120.548z M36.394,51.651c0-4.042,3.291-7.333,7.333-7.333h86.795c4.042,0,7.332,3.291,7.332,7.333v23.917l-14.938-17.767c-1.41-1.678-3.487-2.649-5.68-2.658h-0.029c-2.184,0-4.255,0.954-5.674,2.613L76.709,98.519l-9.096-9.398c-1.427-1.474-3.392-2.291-5.448-2.273c-2.052,0.025-4.004,0.893-5.396,2.4L36.394,111.32V51.651z M41.684,127.585l20.697-22.416l9.312,9.622c1.461,1.511,3.489,2.334,5.592,2.27c2.101-0.066,4.075-1.013,5.44-2.612l34.436-40.308l20.693,24.613v21.794c0,4.042-3.29,7.332-7.332,7.332H43.727C43.018,127.88,42.334,127.775,41.684,127.585z M182.616,152.5V75.657c0-4.12-3.34-7.46-7.461-7.46c-4.119,0-7.46,3.34-7.46,7.46V152.5c0,4.112-3.347,7.46-7.461,7.46h-94c-4.119,0-7.46,3.339-7.46,7.459c0,4.123,3.341,7.462,7.46,7.462h94C172.576,174.881,182.616,164.841,182.616,152.5z"/></g></svg>',
  bookmark: '<svg viewBox="0 0 24 24"><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z" /></svg>',
  dir_ltr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2H9C6.79 2 5 3.79 5 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zm0 12v3H5v2h12v3l4-4-4-4z"/></svg>',
  dir_rtl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zM8 14l-4 4 4 4v-3h12v-2H8v-3z"/></svg>',
  // Error
  alert_outline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>',
  // More icons
  more_text: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 180 180"><g><path d="M49.711,142.188h49.027c2.328,0.002,4.394,1.492,5.129,3.699l9.742,29.252c0.363,1.092,1.385,1.828,2.537,1.83l15.883,0.01c0.859,0,1.667-0.412,2.17-1.109s0.641-1.594,0.37-2.41l-16.625-50.045L86.503,28.953c-0.36-1.097-1.383-1.839-2.537-1.842H64.532c-1.153-0.001-2.178,0.736-2.542,1.831L13.847,173.457c-0.271,0.816-0.135,1.713,0.369,2.412c0.503,0.697,1.311,1.109,2.171,1.109h15.872c1.151,0,2.173-0.736,2.537-1.828l9.793-29.287C45.325,143.66,47.39,142.18,49.711,142.188L49.711,142.188z M53.493,119.098l15.607-46.9c0.744-2.196,2.806-3.674,5.125-3.674s4.381,1.478,5.125,3.674l15.607,46.904c0.537,1.621,0.263,3.402-0.736,4.789c-1.018,1.408-2.649,2.24-4.386,2.24H58.615c-1.736,0-3.368-0.832-4.386-2.24C53.23,122.504,52.956,120.721,53.493,119.098L53.493,119.098z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.633,190.465,66.178,190.465,63.32L190.465,63.32z M190.465,101.994c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.887,1.026,5.352,3.056,7.395c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.994L190.465,101.994z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
  more_paragraph: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 180 180"><g><path d="M128.39,28.499H63.493c-25.558,0-46.354,20.796-46.354,46.354c0,25.559,20.796,46.353,46.354,46.353h9.271v55.625h18.542V47.04h9.271V176.83h18.543V47.04h9.271V28.499z M72.764,102.664h-9.271c-15.337,0-27.813-12.475-27.813-27.812c0-15.336,12.476-27.813,27.813-27.813h9.271V102.664z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.633,190.465,66.178,190.465,63.32L190.465,63.32z M190.465,101.994c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.887,1.026,5.352,3.056,7.395c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.994L190.465,101.994z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
  more_plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="35 30 140 140"><g><path d="M137.215,102.045c0,3.498-2.835,6.332-6.333,6.332H24.549c-3.498,0-6.334-2.834-6.334-6.332l0,0c0-3.498,2.836-6.333,6.334-6.333h106.333C134.38,95.711,137.215,98.547,137.215,102.045L137.215,102.045z M77.715,161.545c-3.498,0-6.333-2.836-6.333-6.334V48.878c0-3.498,2.836-6.333,6.333-6.333l0,0c3.498,0,6.334,2.835,6.334,6.333v106.333C84.049,158.709,81.213,161.545,77.715,161.545L77.715,161.545z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.632,190.465,66.177,190.465,63.32L190.465,63.32z M190.465,101.993c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.888,1.026,5.353,3.056,7.396c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.993L190.465,101.993z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
  more_horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 3.58"><g><path d="M4.64,10.73a1.84,1.84,0,0,1,.65-.65,1.76,1.76,0,0,1,1.79,0A1.79,1.79,0,0,1,8,11.63a1.84,1.84,0,0,1-.25.9,1.69,1.69,0,0,1-.65.65,1.8,1.8,0,0,1-2.69-1.55A2.08,2.08,0,0,1,4.64,10.73Zm6.09,0a1.84,1.84,0,0,1,.65-.65,1.78,1.78,0,0,1,2.67,1.55,1.73,1.73,0,0,1-.24.9,1.84,1.84,0,0,1-.65.65,1.76,1.76,0,0,1-1.79,0,1.79,1.79,0,0,1-.64-2.44Zm6.08,0a1.69,1.69,0,0,1,.65-.65,1.76,1.76,0,0,1,1.79,0,1.79,1.79,0,0,1,.9,1.54,1.73,1.73,0,0,1-.24.9,1.84,1.84,0,0,1-.65.65,1.8,1.8,0,0,1-2.69-1.55A2,2,0,0,1,16.81,10.73Z" transform="translate(-4.39 -9.84)"/></g></svg>',
  more_vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.94 15.75"><g><path d="M12.28,7.69a1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39,1.92,1.92,0,0,1,.58-1.39,2,2,0,0,1,1.39-.58,1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39,1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58Zm0,2a1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39A1.92,1.92,0,0,1,13.67,13a2,2,0,0,1-1.39.58A1.92,1.92,0,0,1,10.89,13a2,2,0,0,1-.58-1.39,2,2,0,0,1,2-2Zm0,5.9a1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39,1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58,1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39,1.92,1.92,0,0,1,.58-1.39,1.94,1.94,0,0,1,1.39-.58Z" transform="translate(-10.31 -3.75)"/></g></svg>',
  // Not currently used
  attachment: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.38 15.68"><g><path d="M15.23,6h1v9.78a3.88,3.88,0,0,1-1.31,2.45,4,4,0,0,1-6.57-2.45V7A3,3,0,0,1,9.2,4.89a3,3,0,0,1,5,2.09v8.31a1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58,1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39V8h1v7.32a1,1,0,0,0,.29.69,1,1,0,0,0,.69.28A.9.9,0,0,0,13,16a1,1,0,0,0,.29-.69V7a1.92,1.92,0,0,0-.58-1.39A2,2,0,0,0,11.27,5a1.92,1.92,0,0,0-1.39.58A2,2,0,0,0,9.33,7v8.31a3,3,0,1,0,5.9,0V6Z" transform="translate(-8.08 -3.78)"/></g></svg>',
  map: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 15.62"><g><path d="M12.05,12.42a2.93,2.93,0,1,1,2.07-5A2.88,2.88,0,0,1,15,9.49a3,3,0,0,1-.86,2.07,2.89,2.89,0,0,1-2.07.86Zm0-5.36a2.43,2.43,0,0,0-1.72,4.16,2.48,2.48,0,0,0,1.72.72,2.44,2.44,0,0,0,0-4.88Zm0-3.3A5.84,5.84,0,0,1,17.9,9.62a9.94,9.94,0,0,1-1.73,5A33.59,33.59,0,0,1,12.84,19a1.52,1.52,0,0,1-.23.2,1,1,0,0,1-.55.2h0a1,1,0,0,1-.55-.2,1.52,1.52,0,0,1-.23-.2,33.59,33.59,0,0,1-3.33-4.32,9.93,9.93,0,0,1-1.72-5,5.84,5.84,0,0,1,5.85-5.86ZM12,18.34l.08.05.06-.06a35.58,35.58,0,0,0,3.06-3.93,9.35,9.35,0,0,0,1.74-4.77,4.88,4.88,0,0,0-4.88-4.88A4.79,4.79,0,0,0,8.6,6.17,4.84,4.84,0,0,0,7.17,9.62,9.29,9.29,0,0,0,8.91,14.4,36,36,0,0,0,12,18.34Z" transform="translate(-6.2 -3.76)"/></g></svg>',
  magic_stick: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 15.75"><g><path d="M19.86,19.21a1,1,0,0,0,.28-.68,1,1,0,0,0-.28-.7L13,10.93a1,1,0,0,0-.7-.28,1,1,0,0,0-.68,1.65l6.9,6.9a1,1,0,0,0,.69.29.93.93,0,0,0,.69-.28ZM9.19,8.55a3,3,0,0,0,1.68,0,14.12,14.12,0,0,0,1.41-.32A11.26,11.26,0,0,0,10.8,7.06c-.56-.36-.86-.56-.91-.58S10,5.91,10,5.11s0-1.26-.15-1.37a4.35,4.35,0,0,0-1.19.71c-.53.4-.81.62-.87.68a9,9,0,0,0-2-.6,6.84,6.84,0,0,0-.76-.09s0,.27.08.77a8.6,8.6,0,0,0,.61,2q-.09.09-.69.87a3.59,3.59,0,0,0-.68,1.17c.12.17.57.23,1.36.15S7,9.26,7.15,9.23s.21.36.57.91a10.49,10.49,0,0,0,1.14,1.48c0-.1.14-.57.31-1.4a3,3,0,0,0,0-1.67Z" transform="translate(-4.41 -3.74)"/></g></svg>',
  empty_file: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.78 15.75"><g><path d="M14.73,3.76,18.67,7.7v9.84a2,2,0,0,1-2,2H7.84a1.89,1.89,0,0,1-1.38-.58,2,2,0,0,1-.57-1.39V5.73a1.93,1.93,0,0,1,.57-1.38,2,2,0,0,1,1.38-.58h6.62l.26,0v0Zm2.95,4.92h-2a1.93,1.93,0,0,1-1.38-.57,2,2,0,0,1-.58-1.4V6.17c0-.36,0-.84,0-1.43H7.85a1,1,0,0,0-.7.29,1,1,0,0,0-.29.7V17.54a1,1,0,0,0,.29.69,1,1,0,0,0,.69.29h8.85a1,1,0,0,0,.71-.29.92.92,0,0,0,.28-.69Zm0-1L14.73,4.74v2A1,1,0,0,0,15,7.4a1,1,0,0,0,.69.29Z" transform="translate(-5.89 -3.76)"/></g></svg>'
}, he = {
  _d: null,
  _w: null,
  isIE: null,
  isIE_Edge: null,
  isOSX_IOS: null,
  isChromium: null,
  isMobile: null,
  isResizeObserverSupported: null,
  _propertiesInit: function() {
    this._d || (this._d = document, this._w = window, this.isIE = navigator.userAgent.indexOf("Trident") > -1, this.isIE_Edge = navigator.userAgent.indexOf("Trident") > -1 || navigator.appVersion.indexOf("Edge") > -1, this.isOSX_IOS = /(Mac|iPhone|iPod|iPad)/.test(navigator.platform), this.isChromium = !!window.chrome, this.isResizeObserverSupported = typeof ResizeObserver == "function", this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "ontouchstart" in window);
  },
  _allowedEmptyNodeList: ".se-component, pre, blockquote, hr, li, table, img, iframe, video, audio, canvas",
  /**
   * @description HTML Reserved Word Converter.
   * @param {String} contents 
   * @returns {String} HTML string
   * @private
   */
  _HTMLConvertor: function(e) {
    const t = { "&": "&amp;", " ": "&nbsp;", "'": "&apos;", '"': "&quot;", "<": "&lt;", ">": "&gt;" };
    return e.replace(/&|\u00A0|'|"|<|>/g, function(l) {
      return typeof t[l] == "string" ? t[l] : l;
    });
  },
  /**
   * @description Unicode Character 'ZERO WIDTH SPACE' (\u200B)
   */
  zeroWidthSpace: "​",
  /**
   * @description Regular expression to find 'zero width space' (/\u200B/g)
   */
  zeroWidthRegExp: new RegExp("​", "g"),
  /**
   * @description Regular expression to find only 'zero width space' (/^\u200B+$/)
   */
  onlyZeroWidthRegExp: new RegExp("^​+$"),
  fontValueMap: {
    "xx-small": 1,
    "x-small": 2,
    small: 3,
    medium: 4,
    large: 5,
    "x-large": 6,
    "xx-large": 7
  },
  /**
   * @description A method that checks If the text is blank or to see if it contains 'ZERO WIDTH SPACE' or empty (util.zeroWidthSpace)
   * @param {String|Node} text String value or Node
   * @returns {Boolean}
   */
  onlyZeroWidthSpace: function(e) {
    return e == null ? !1 : (typeof e != "string" && (e = e.textContent), e === "" || this.onlyZeroWidthRegExp.test(e));
  },
  /**
   * @description Gets XMLHttpRequest object
   * @returns {XMLHttpRequest|ActiveXObject}
   */
  getXMLHttpRequest: function() {
    if (this._w.ActiveXObject)
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch {
          return null;
        }
      }
    else return this._w.XMLHttpRequest ? new XMLHttpRequest() : null;
  },
  /**
   * @description Object.values
   * @param {Object|null} obj Object parameter.
   * @returns {Array}
   */
  getValues: function(e) {
    return e ? this._w.Object.keys(e).map(function(t) {
      return e[t];
    }) : [];
  },
  /**
   * @description Convert the CamelCase To the KebabCase.
   * @param {String|Array} param [Camel string]
   * @returns {String|Array}
   */
  camelToKebabCase: function(e) {
    return typeof e == "string" ? e.replace(/[A-Z]/g, function(t) {
      return "-" + t.toLowerCase();
    }) : e.map(function(t) {
      return he.camelToKebabCase(t);
    });
  },
  /**
   * @description Convert the KebabCase To the CamelCase.
   * @param {String|Array} param [KebabCase string]
   * @returns {String|Array}
   */
  kebabToCamelCase: function(e) {
    return typeof e == "string" ? e.replace(/-[a-zA-Z]/g, function(t) {
      return t.replace("-", "").toUpperCase();
    }) : e.map(function(t) {
      return he.camelToKebabCase(t);
    });
  },
  /**
   * @description Create Element node
   * @param {String} elementName Element name
   * @returns {Element}
   */
  createElement: function(e) {
    return this._d.createElement(e);
  },
  /**
   * @description Create text node
   * @param {String} text text contents
   * @returns {Node}
   */
  createTextNode: function(e) {
    return this._d.createTextNode(e || "");
  },
  /**
   * @description The editor checks tags by string.
   * If there is "<" or ">" in the attribute of tag, HTML is broken when checking the tag.
   * When using an attribute with "<" or ">", use "HTMLEncoder" to save. (ex: math(katex))
   * @param {String} contents HTML or Text string
   * @returns {String}
   */
  HTMLEncoder: function(e) {
    const t = { "<": "$lt;", ">": "$gt;" };
    return e.replace(/<|>/g, function(l) {
      return typeof t[l] == "string" ? t[l] : l;
    });
  },
  /**
   * @description The editor checks tags by string.
   * If there is "<" or ">" in the attribute of tag, HTML is broken when checking the tag.
   * Decoder of data stored as "HTMLEncoder" (ex: math(katex))
   * @param {String} contents HTML or Text string
   * @returns {String}
   */
  HTMLDecoder: function(e) {
    const t = { "$lt;": "<", "$gt;": ">" };
    return e.replace(/\$lt;|\$gt;/g, function(l) {
      return typeof t[l] == "string" ? t[l] : l;
    });
  },
  /**
   * @description This method run Object.prototype.hasOwnProperty.call(obj, key)
   * @param {Object} obj Object
   * @param {String} key obj.key
   * @returns {Boolean}
   */
  hasOwn: function(e, t) {
    return this._hasOwn.call(e, t);
  },
  _hasOwn: Object.prototype.hasOwnProperty,
  /**
   * @deprecated
   * @description Get the the tag path of the arguments value
   * If not found, return the first found value
   * @param {Array} nameArray File name array
   * @param {String} extension js, css
   * @returns {String}
   */
  getIncludePath: function(e, t) {
    let l = "";
    const o = [], i = t === "js" ? "script" : "link", a = t === "js" ? "src" : "href";
    let d = "(?:";
    for (let b = 0, u = e.length; b < u; b++)
      d += e[b] + (b < u - 1 ? "|" : ")");
    const f = new this._w.RegExp("(^|.*[\\/])" + d + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), n = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let b = this._d.getElementsByTagName(i), u = 0; u < b.length; u++)
      n.test(b[u][a]) && o.push(b[u]);
    for (let b = 0; b < o.length; b++) {
      let u = o[b][a].match(f);
      if (u) {
        l = u[0];
        break;
      }
    }
    if (l === "" && (l = o.length > 0 ? o[0][a] : ""), l.indexOf(":/") === -1 && l.slice(0, 2) !== "//" && (l = l.indexOf("/") === 0 ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + l : location.href.match(/^[^\?]*\/(?:)/)[0] + l), !l) throw "[SUNEDITOR.util.getIncludePath.fail] The SUNEDITOR installation path could not be automatically detected. (name: +" + name + ", extension: " + t + ")";
    return l;
  },
  /**
   * @deprecated
   * @description Returns the CSS text that has been applied to the current page.
   * @param {Document|null} doc To get the CSS text of an document(core._wd). If null get the current document.
   * @returns {String} Styles string
   */
  getPageStyle: function(e) {
    let t = "";
    const l = (e || this._d).styleSheets;
    for (let o = 0, i = l.length, a; o < i; o++) {
      try {
        a = l[o].cssRules;
      } catch {
        continue;
      }
      if (a)
        for (let d = 0, f = a.length; d < f; d++)
          t += a[d].cssText;
    }
    return t;
  },
  /**
   * @description Get the argument iframe's document object
   * @param {Element} iframe Iframe element (context.element.wysiwygFrame)
   * @returns {Document}
   */
  getIframeDocument: function(e) {
    let t = e.contentWindow || e.contentDocument;
    return t.document && (t = t.document), t;
  },
  /**
   * @description Get attributes of argument element to string ('class="---" name="---" ')
   * @param {Element} element Element object
   * @param {Array|null} exceptAttrs Array of attribute names to exclude from the result
   * @returns {String}
   */
  getAttributesToString: function(e, t) {
    if (!e.attributes) return "";
    const l = e.attributes;
    let o = "";
    for (let i = 0, a = l.length; i < a; i++)
      t && t.indexOf(l[i].name) > -1 || (o += l[i].name + '="' + l[i].value + '" ');
    return o;
  },
  /**
   * @descriptionGets Get the length in bytes of a string.
   * referencing code: "https://github.com/shaan1974/myrdin/blob/master/expressions/string.js#L11"
   * @param {String} text String text
   * @returns {Number}
   */
  getByteLength: function(e) {
    if (!e || !e.toString) return 0;
    e = e.toString();
    const t = this._w.encodeURIComponent;
    let l, o;
    return this.isIE_Edge ? (o = this._w.unescape(t(e)).length, l = 0, t(e).match(/(%0A|%0D)/gi) !== null && (l = t(e).match(/(%0A|%0D)/gi).length), o + l) : (o = new this._w.TextEncoder("utf-8").encode(e).length, l = 0, t(e).match(/(%0A|%0D)/gi) !== null && (l = t(e).match(/(%0A|%0D)/gi).length), o + l);
  },
  /**
   * @description It is judged whether it is the edit region top div element or iframe's body tag.
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isWysiwygDiv: function(e) {
    return e && e.nodeType === 1 && (this.hasClass(e, "se-wrapper-wysiwyg") || /^BODY$/i.test(e.nodeName));
  },
  /**
   * @description It is judged whether it is the contenteditable property is false.
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isNonEditable: function(e) {
    return e && e.nodeType === 1 && e.getAttribute("contenteditable") === "false";
  },
  /**
   * @description It is judged whether it is a node related to the text style.
   * (strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code)
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isTextStyleElement: function(e) {
    return e && e.nodeType !== 3 && /^(strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code|summary)$/i.test(e.nodeName);
  },
  /**
   * @description It is judged whether it is the input element (INPUT, TEXTAREA)
   * @param {Node} element The node to check
   * @returns 
   */
  isInputElement: function(e) {
    return e && e.nodeType === 1 && /^(INPUT|TEXTAREA)$/i.test(e.nodeName);
  },
  /**
   * @description It is judged whether it is the format element (P, DIV, H[1-6], PRE, LI | class="__se__format__replace_xxx")
   * Format element also contain "free format Element"
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isFormatElement: function(e) {
    return e && e.nodeType === 1 && (/^(P|DIV|H[1-6]|PRE|LI|TH|TD|DETAILS)$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__replace_.+(\\s|$)|(\\s|^)__se__format__free_.+(\\s|$)")) && !this.isComponent(e) && !this.isWysiwygDiv(e);
  },
  /**
   * @description It is judged whether it is the range format element. (BLOCKQUOTE, OL, UL, FIGCAPTION, TABLE, THEAD, TBODY, TR, TH, TD | class="__se__format__range_xxx")
   * Range format element is wrap the "format element" and "component"
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isRangeFormatElement: function(e) {
    return e && e.nodeType === 1 && (/^(BLOCKQUOTE|OL|UL|FIGCAPTION|TABLE|THEAD|TBODY|TR|TH|TD|DETAILS)$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__range_.+(\\s|$)"));
  },
  /**
   * @description It is judged whether it is the closure range format element. (TH, TD | class="__se__format__range__closure_xxx")
   * Closure range format elements is included in the range format element.
   *  - Closure range format element is wrap the "format element" and "component"
   * ※ You cannot exit this format with the Enter key or Backspace key.
   * ※ Use it only in special cases. ([ex] format of table cells)
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isClosureRangeFormatElement: function(e) {
    return e && e.nodeType === 1 && (/^(TH|TD)$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__range__closure_.+(\\s|$)"));
  },
  /**
   * @description It is judged whether it is the free format element. (PRE | class="__se__format__free_xxx")
   * Free format elements is included in the format element.
   * Free format elements's line break is "BR" tag.
   * ※ Entering the Enter key in the space on the last line ends "Free Format" and appends "Format".
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isFreeFormatElement: function(e) {
    return e && e.nodeType === 1 && (/^PRE$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__free_.+(\\s|$)")) && !this.isComponent(e) && !this.isWysiwygDiv(e);
  },
  /**
   * @description It is judged whether it is the closure free format element. (class="__se__format__free__closure_xxx")
   * Closure free format elements is included in the free format element.
   *  - Closure free format elements's line break is "BR" tag.
   * ※ You cannot exit this format with the Enter key or Backspace key.
   * ※ Use it only in special cases. ([ex] format of table cells)
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isClosureFreeFormatElement: function(e) {
    return e && e.nodeType === 1 && this.hasClass(e, "(\\s|^)__se__format__free__closure_.+(\\s|$)");
  },
  /**
   * @description It is judged whether it is the component[img, iframe, video, audio, table] cover(class="se-component") and table, hr
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isComponent: function(e) {
    return e && (/se-component/.test(e.className) || /^(TABLE|HR)$/.test(e.nodeName));
  },
  /**
   * @description Checks for "__se__uneditable" in the class list.
   * Components with class "__se__uneditable" cannot be modified.
   * @param {Element} element The element to check
   * @returns {Boolean}
   */
  isUneditableComponent: function(e) {
    return e && this.hasClass(e, "__se__uneditable");
  },
  /**
   * @description It is judged whether it is the component [img, iframe] cover(class="se-component")
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isMediaComponent: function(e) {
    return e && /se-component/.test(e.className);
  },
  /**
   * @description It is judged whether it is the not checking node. (class="katex", "__se__tag")
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isNotCheckingNode: function(e) {
    return e && /katex|__se__tag/.test(e.className);
  },
  /**
   * @description If a parent node that contains an argument node finds a format node (util.isFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getFormatElement: function(e, t) {
    if (!e) return null;
    for (t || (t = function() {
      return !0;
    }); e; ) {
      if (this.isWysiwygDiv(e)) return null;
      if (this.isRangeFormatElement(e) && e.firstElementChild, this.isFormatElement(e) && t(e)) return e;
      e = e.parentNode;
    }
    return null;
  },
  /**
   * @description If a parent node that contains an argument node finds a format node (util.isRangeFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getRangeFormatElement: function(e, t) {
    if (!e) return null;
    for (t || (t = function() {
      return !0;
    }); e; ) {
      if (this.isWysiwygDiv(e)) return null;
      if (this.isRangeFormatElement(e) && !/^(THEAD|TBODY|TR)$/i.test(e.nodeName) && t(e)) return e;
      e = e.parentNode;
    }
    return null;
  },
  /**
   * @description If a parent node that contains an argument node finds a free format node (util.isFreeFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getFreeFormatElement: function(e, t) {
    if (!e) return null;
    for (t || (t = function() {
      return !0;
    }); e; ) {
      if (this.isWysiwygDiv(e)) return null;
      if (this.isFreeFormatElement(e) && t(e)) return e;
      e = e.parentNode;
    }
    return null;
  },
  /**
   * @description If a parent node that contains an argument node finds a closure free format node (util.isClosureFreeFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getClosureFreeFormatElement: function(e, t) {
    if (!e) return null;
    for (t || (t = function() {
      return !0;
    }); e; ) {
      if (this.isWysiwygDiv(e)) return null;
      if (this.isClosureFreeFormatElement(e) && t(e)) return e;
      e = e.parentNode;
    }
    return null;
  },
  /**
   * @description Add style and className of copyEl to originEl
   * @param {Element} originEl Origin element
   * @param {Element} copyEl Element to copy
   * @param {Array|null} blacklist Blacklist array(LowerCase)
   */
  copyTagAttributes: function(e, t, l) {
    if (t.style.cssText) {
      const i = t.style;
      for (let a = 0, d = i.length; a < d; a++)
        e.style[i[a]] = i[i[a]];
    }
    const o = t.attributes;
    for (let i = 0, a = o.length, d; i < a; i++)
      d = o[i].name.toLowerCase(), l && l.indexOf(d) > -1 || !o[i].value ? e.removeAttribute(d) : d !== "style" && e.setAttribute(o[i].name, o[i].value);
  },
  /**
   * @description Copy and apply attributes of format tag that should be maintained. (style, class) Ignore "__se__format__" class
   * @param {Element} originEl Origin element
   * @param {Element} copyEl Element to copy
   */
  copyFormatAttributes: function(e, t) {
    t = t.cloneNode(!1), t.className = t.className.replace(/(\s|^)__se__format__[^\s]+/g, ""), this.copyTagAttributes(e, t);
  },
  /**
   * @description Get the item from the array that matches the condition.
   * @param {Array|HTMLCollection|NodeList} array Array to get item
   * @param {Function|null} validation Conditional function
   * @param {Boolean} multi If true, returns all items that meet the criteria otherwise, returns an empty array.
   * If false, returns only one item that meet the criteria otherwise return null.
   * @returns {Array|Node|null}
   */
  getArrayItem: function(e, t, l) {
    if (!e || e.length === 0) return null;
    t = t || function() {
      return !0;
    };
    const o = [];
    for (let i = 0, a = e.length, d; i < a; i++)
      if (d = e[i], t(d))
        if (l) o.push(d);
        else return d;
    return l ? o : null;
  },
  /**
   * @description Check if an array contains an element 
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} element The element to check for
   * @returns {Boolean}
   */
  arrayIncludes: function(e, t) {
    for (let l = 0; l < e.length; l++)
      if (e[l] === t)
        return !0;
    return !1;
  },
  /**
   * @description Get the index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} element The element to find index
   * @returns {Number}
   */
  getArrayIndex: function(e, t) {
    let l = -1;
    for (let o = 0, i = e.length; o < i; o++)
      if (e[o] === t) {
        l = o;
        break;
      }
    return l;
  },
  /**
   * @description Get the next index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} item The element to find index
   * @returns {Number}
   */
  nextIdx: function(e, t) {
    let l = this.getArrayIndex(e, t);
    return l === -1 ? -1 : l + 1;
  },
  /**
   * @description Get the previous index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array Element array
   * @param {Node} item The element to find index
   * @returns {Number}
   */
  prevIdx: function(e, t) {
    let l = this.getArrayIndex(e, t);
    return l === -1 ? -1 : l - 1;
  },
  /**
   * @description Returns the index compared to other sibling nodes.
   * @param {Node} node The Node to find index
   * @returns {Number}
   */
  getPositionIndex: function(e) {
    let t = 0;
    for (; e = e.previousSibling; )
      t += 1;
    return t;
  },
  /**
   * @description Returns the position of the "node" in the "parentNode" in a numerical array.
   * ex) <p><span>aa</span><span>bb</span></p> : getNodePath(node: "bb", parentNode: "<P>") -> [1, 0]
   * @param {Node} node The Node to find position path
   * @param {Node|null} parentNode Parent node. If null, wysiwyg div area
   * @param {Object|null} _newOffsets If you send an object of the form "{s: 0, e: 0}", the text nodes that are attached together are merged into one, centered on the "node" argument.
   * "_newOffsets.s" stores the length of the combined characters after "node" and "_newOffsets.e" stores the length of the combined characters before "node".
   * Do not use unless absolutely necessary.
   * @returns {Array}
   */
  getNodePath: function(e, t, l) {
    const o = [];
    let i = !0;
    return this.getParentElement(e, (function(a) {
      if (a === t && (i = !1), i && !this.isWysiwygDiv(a)) {
        if (l && a.nodeType === 3) {
          let d = null, f = null;
          l.s = l.e = 0;
          let n = a.previousSibling;
          for (; n && n.nodeType === 3; )
            f = n.textContent.replace(this.zeroWidthRegExp, ""), l.s += f.length, a.textContent = f + a.textContent, d = n, n = n.previousSibling, this.removeItem(d);
          let b = a.nextSibling;
          for (; b && b.nodeType === 3; )
            f = b.textContent.replace(this.zeroWidthRegExp, ""), l.e += f.length, a.textContent += f, d = b, b = b.nextSibling, this.removeItem(d);
        }
        o.push(a);
      }
      return !1;
    }).bind(this)), o.map(this.getPositionIndex).reverse();
  },
  /**
   * @description Returns the node in the location of the path array obtained from "util.getNodePath".
   * @param {Array} offsets Position array, array obtained from "util.getNodePath"
   * @param {Node} parentNode Base parent element
   * @returns {Node}
   */
  getNodeFromPath: function(e, t) {
    let l = t, o;
    for (let i = 0, a = e.length; i < a && (o = l.childNodes, o.length !== 0); i++)
      o.length <= e[i] ? l = o[o.length - 1] : l = o[e[i]];
    return l;
  },
  /**
   * @description Compares the style and class for equal values.
   * Returns true if both are text nodes.
   * @param {Node} a Node to compare
   * @param {Node} b Node to compare
   * @returns {Boolean}
   */
  isSameAttributes: function(e, t) {
    if (e.nodeType === 3 && t.nodeType === 3) return !0;
    if (e.nodeType === 3 || t.nodeType === 3) return !1;
    const l = e.style, o = t.style;
    let i = 0;
    for (let b = 0, u = l.length; b < u; b++)
      l[l[b]] === o[l[b]] && i++;
    const a = e.classList, d = t.classList, f = this._w.RegExp;
    let n = 0;
    for (let b = 0, u = a.length; b < u; b++)
      f("(s|^)" + a[b] + "(s|$)").test(d.value) && n++;
    return i === o.length && i === l.length && n === d.length && n === a.length;
  },
  /**
   * @description Check the line element(util.isFormatElement) is empty.
   * @param {Element} element Format element node
   * @returns {Boolean}
   */
  isEmptyLine: function(e) {
    return !e || !e.parentNode || !e.querySelector("IMG, IFRAME, AUDIO, VIDEO, CANVAS, TABLE") && e.children.length === 0 && this.onlyZeroWidthSpace(e.textContent);
  },
  /**
   * @description Check the span's attributes are empty.
   * @param {Element|null} element Element node
   * @returns {Boolean}
   */
  isSpanWithoutAttr: function(e) {
    return !!e && e.nodeType === 1 && /^SPAN$/i.test(e.nodeName) && !e.className && !e.style.cssText;
  },
  /**
   * @description Check the node is a list (ol, ul)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isList: function(e) {
    return e && /^(OL|UL)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a list cell (li)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isListCell: function(e) {
    return e && /^LI$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a table (table, thead, tbody, tr, th, td)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isTable: function(e) {
    return e && /^(TABLE|THEAD|TBODY|TR|TH|TD)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a table cell (td, th)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isCell: function(e) {
    return e && /^(TD|TH)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a break node (BR)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isBreak: function(e) {
    return e && /^BR$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a anchor node (A)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isAnchor: function(e) {
    return e && /^A$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a media node (img, iframe, audio, video, canvas)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isMedia: function(e) {
    return e && /^(IMG|IFRAME|AUDIO|VIDEO|CANVAS)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a figure tag or util.isMedia()
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isFigures: function(e) {
    return e && (this.isMedia(e) || /^(FIGURE)$/i.test(typeof e == "string" ? e : e.nodeName));
  },
  /**
   * @description Checks for numeric (with decimal point).
   * @param {String|Number} text Text string or number
   * @returns {Boolean}
   */
  isNumber: function(e) {
    return !!e && /^-?\d+(\.\d+)?$/.test(e + "");
  },
  /**
   * @description Get a number.
   * @param {String|Number} text Text string or number
   * @param {Number} maxDec Maximum number of decimal places (-1 : Infinity)
   * @returns {Number}
   */
  getNumber: function(e, t) {
    if (!e) return 0;
    let l = (e + "").match(/-?\d+(\.\d+)?/);
    return !l || !l[0] ? 0 : (l = l[0], t < 0 ? l * 1 : t === 0 ? this._w.Math.round(l * 1) : (l * 1).toFixed(t) * 1);
  },
  /**
   * @description Get all "children" of the argument value element (Without text nodes)
   * @param {Element} element element to get child node
   * @param {Function|null} validation Conditional function
   * @returns {Array}
   */
  getListChildren: function(e, t) {
    const l = [];
    return !e || !e.children || e.children.length === 0 || (t = t || function() {
      return !0;
    }, function o(i) {
      if (e !== i && t(i) && l.push(i), i.children)
        for (let a = 0, d = i.children.length; a < d; a++)
          o(i.children[a]);
    }(e)), l;
  },
  /**
   * @description Get all "childNodes" of the argument value element (Include text nodes)
   * @param {Node} element element to get child node
   * @param {Function|null} validation Conditional function
   * @returns {Array}
   */
  getListChildNodes: function(e, t) {
    const l = [];
    return !e || e.childNodes.length === 0 || (t = t || function() {
      return !0;
    }, function o(i) {
      e !== i && t(i) && l.push(i);
      for (let a = 0, d = i.childNodes.length; a < d; a++)
        o(i.childNodes[a]);
    }(e)), l;
  },
  /**
   * @description Returns the number of parents nodes.
   * "0" when the parent node is the WYSIWYG area.
   * "-1" when the element argument is the WYSIWYG area.
   * @param {Node} element The element to check
   * @returns {Number}
   */
  getElementDepth: function(e) {
    if (!e || this.isWysiwygDiv(e)) return -1;
    let t = 0;
    for (e = e.parentNode; e && !this.isWysiwygDiv(e); )
      t += 1, e = e.parentNode;
    return t;
  },
  /**
   * @description Compares two elements to find a common ancestor, and returns the order of the two elements.
   * @param {Node} a Node to compare.
   * @param {Node} b Node to compare.
   * @returns {Object} { ancesstor, a, b, result: (a > b ? 1 : a < b ? -1 : 0) };
   */
  compareElements: function(e, t) {
    let l = e, o = t;
    for (; l && o && l.parentNode !== o.parentNode; )
      l = l.parentNode, o = o.parentNode;
    if (!l || !o) return { ancestor: null, a: e, b: t, result: 0 };
    const i = l.parentNode.childNodes, a = this.getArrayIndex(i, l), d = this.getArrayIndex(i, o);
    return {
      ancestor: l.parentNode,
      a: l,
      b: o,
      result: a > d ? 1 : a < d ? -1 : 0
    };
  },
  /**
   * @description Get the parent element of the argument value.
   * A tag that satisfies the query condition is imported.
   * Returns null if not found.
   * @param {Node} element Reference element
   * @param {String|Function} query Query String (nodeName, .className, #ID, :name) or validation function.
   * Not use it like jquery.
   * Only one condition can be entered at a time.
   * @returns {Element|null}
   */
  getParentElement: function(e, t) {
    let l;
    if (typeof t == "function")
      l = t;
    else {
      let o;
      /^\./.test(t) ? (o = "className", t = t.split(".")[1]) : /^#/.test(t) ? (o = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (o = "name", t = "^" + t.split(":")[1] + "$") : (o = "nodeName", t = "^" + t + "$");
      const i = new this._w.RegExp(t, "i");
      l = function(a) {
        return i.test(a[o]);
      };
    }
    for (; e && !l(e); ) {
      if (this.isWysiwygDiv(e))
        return null;
      e = e.parentNode;
    }
    return e;
  },
  /**
   * @description Gets the previous sibling last child. If there is no sibling, then it'll take it from the closest ancestor with child
   * Returns null if not found.
   * @param {Node} node Reference element
   * @param {Node|null} ceiling Highest boundary allowed
   * @returns {Node|null}
   */
  getPreviousDeepestNode: function(e, t) {
    let l = e.previousSibling;
    if (!l) {
      for (let o = e.parentNode; o; o = o.parentNode) {
        if (o === t) return null;
        if (o.previousSibling) {
          l = o.previousSibling;
          break;
        }
      }
      if (!l) return null;
    }
    for (; l.lastChild; ) l = l.lastChild;
    return l;
  },
  /**
   * @description Gets the next sibling first child. If there is no sibling, then it'll take it from the closest ancestor with child
   * Returns null if not found.
   * @param {Node} node Reference element
   * @param {Node|null} ceiling Highest boundary allowed
   * @returns {Node|null}
   */
  getNextDeepestNode: function(e, t) {
    let l = e.nextSibling;
    if (!l) {
      for (let o = e.parentNode; o; o = o.parentNode) {
        if (o === t) return null;
        if (o.nextSibling) {
          l = o.nextSibling;
          break;
        }
      }
      if (!l) return null;
    }
    for (; l.firstChild; ) l = l.firstChild;
    return l;
  },
  /**
   * @description Get the child element of the argument value.
   * A tag that satisfies the query condition is imported.
   * Returns null if not found.
   * @param {Node} element Reference element
   * @param {String|Function} query Query String (nodeName, .className, #ID, :name) or validation function.
   * @param {Boolean} last If true returns the last node among the found child nodes. (default: first node)
   * Not use it like jquery.
   * Only one condition can be entered at a time.
   * @returns {Element|null}
   */
  getChildElement: function(e, t, l) {
    let o;
    if (typeof t == "function")
      o = t;
    else {
      let a;
      /^\./.test(t) ? (a = "className", t = t.split(".")[1]) : /^#/.test(t) ? (a = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (a = "name", t = "^" + t.split(":")[1] + "$") : (a = "nodeName", t = "^" + (t === "text" ? "#" + t : t) + "$");
      const d = new this._w.RegExp(t, "i");
      o = function(f) {
        return d.test(f[a]);
      };
    }
    const i = this.getListChildNodes(e, function(a) {
      return o(a);
    });
    return i[l ? i.length - 1 : 0];
  },
  /**
   * @description 1. The first node of all the child nodes of the "first" element is returned.
   * 2. The last node of all the child nodes of the "last" element is returned.
   * 3. When there is no "last" element, the first and last nodes of all the children of the "first" element are returned.
   * { sc: "first", ec: "last" }
   * @param {Node} first First element
   * @param {Node|null} last Last element
   * @returns {Object}
   */
  getEdgeChildNodes: function(e, t) {
    if (e) {
      for (t || (t = e); e && e.nodeType === 1 && e.childNodes.length > 0 && !this.isBreak(e); ) e = e.firstChild;
      for (; t && t.nodeType === 1 && t.childNodes.length > 0 && !this.isBreak(t); ) t = t.lastChild;
      return {
        sc: e,
        ec: t || e
      };
    }
  },
  /**
   * @description Returns the position of the left and top of argument. {left:0, top:0}
   * @param {Node} element Target node
   * @param {Element|null} wysiwygFrame When use iframe option, iframe object should be sent (context.element.wysiwygFrame)
   * @returns {Object}
   */
  getOffset: function(e, t) {
    let l = 0, o = 0, i = e.nodeType === 3 ? e.parentElement : e;
    const a = this.getParentElement(e, this.isWysiwygDiv.bind(this));
    for (; i && !this.hasClass(i, "se-container") && i !== a; )
      l += i.offsetLeft, o += i.offsetTop, i = i.offsetParent;
    const d = t && /iframe/i.test(t.nodeName);
    return {
      left: l + (d ? t.parentElement.offsetLeft : 0),
      top: o - (a ? a.scrollTop : 0) + (d ? t.parentElement.offsetTop : 0)
    };
  },
  /**
   * @description It compares the start and end indexes of "a" and "b" and returns the number of overlapping indexes in the range.
   * ex) 1, 5, 4, 6 => "2" (4 ~ 5)
   * @param {Number} aStart Start index of "a"
   * @param {Number} aEnd End index of "a"
   * @param {Number} bStart Start index of "b"
   * @param {Number} bEnd Start index of "b"
   * @returns {Number}
   */
  getOverlapRangeAtIndex: function(e, t, l, o) {
    if (e <= o ? t < l : t > l) return 0;
    const i = (e > l ? e : l) - (t < o ? t : o);
    return (i < 0 ? i * -1 : i) + 1;
  },
  /**
   * @description Set the text content value of the argument value element
   * @param {Node} element Element to replace text content
   * @param {String} txt Text to be applied
   */
  changeTxt: function(e, t) {
    !e || !t || (e.textContent = t);
  },
  /**
   * @description Replace element
   * @param {Element} element Target element
   * @param {String|Element} newElement String or element of the new element to apply
   */
  changeElement: function(e, t) {
    if (typeof t == "string")
      if (e.outerHTML)
        e.outerHTML = t;
      else {
        const l = this.createElement("DIV");
        l.innerHTML = t, t = l.firstChild, e.parentNode.replaceChild(t, e);
      }
    else t.nodeType === 1 && e.parentNode.replaceChild(t, e);
  },
  /**
   * @description Set style, if all styles are deleted, the style properties are deleted.
   * @param {Element} element Element to set style
   * @param {String} styleName Style attribute name (marginLeft, textAlign...)
   * @param {String|Number} value Style value
   */
  setStyle: function(e, t, l) {
    e.style[t] = l, !l && !e.style.cssText && e.removeAttribute("style");
  },
  /**
   * @description Determine whether any of the matched elements are assigned the given class
   * @param {Element} element Elements to search class name
   * @param {String} className Class name to search for
   * @returns {Boolean}
   */
  hasClass: function(e, t) {
    if (e)
      return new this._w.RegExp(t).test(e.className);
  },
  /**
   * @description Append the className value of the argument value element
   * @param {Element} element Elements to add class name
   * @param {String} className Class name to be add
   */
  addClass: function(e, t) {
    !e || new this._w.RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className) || (e.className += (e.className.length > 0 ? " " : "") + t);
  },
  /**
   * @description Delete the className value of the argument value element
   * @param {Element} element Elements to remove class name
   * @param {String} className Class name to be remove
   */
  removeClass: function(e, t) {
    if (!e) return;
    const l = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    e.className = e.className.replace(l, " ").trim(), e.className.trim() || e.removeAttribute("class");
  },
  /**
   * @description Argument value If there is no class name, insert it and delete the class name if it exists
   * @param {Element} element Elements to replace class name
   * @param {String} className Class name to be change
   * @returns {Boolean|undefined}
   */
  toggleClass: function(e, t) {
    if (!e) return;
    let l = !1;
    const o = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    return o.test(e.className) ? e.className = e.className.replace(o, " ").trim() : (e.className += " " + t, l = !0), e.className.trim() || e.removeAttribute("class"), l;
  },
  /**
   * @description Checks if element can't be easily enabled
   * @param {Element} element Element to check for
   */
  isImportantDisabled: function(e) {
    return e.hasAttribute("data-important-disabled");
  },
  /**
   * @description In the predefined code view mode, the buttons except the executable button are changed to the 'disabled' state.
   * core.codeViewDisabledButtons (An array of buttons whose class name is not "se-code-view-enabled")
   * core.resizingDisabledButtons (An array of buttons whose class name is not "se-resizing-enabled")
   * @param {Boolean} disabled Disabled value
   * @param {Array|HTMLCollection|NodeList} buttonList Button array
   * @param {Boolean} important If priveleged mode should be used (Necessary to switch importantDisabled buttons)
   */
  setDisabledButtons: function(e, t, l) {
    for (let o = 0, i = t.length; o < i; o++) {
      let a = t[o];
      (l || !this.isImportantDisabled(a)) && (a.disabled = e), l && (e ? a.setAttribute("data-important-disabled", "") : a.removeAttribute("data-important-disabled"));
    }
  },
  /**
   * @description Delete argumenu value element
   * @param {Node} item Node to be remove
   */
  removeItem: function(e) {
    e && (typeof e.remove == "function" ? e.remove() : e.parentNode && e.parentNode.removeChild(e));
  },
  /**
   * @description Delete all parent nodes that match the condition.
   * Returns an {sc: previousSibling, ec: nextSibling}(the deleted node reference) or null.
   * @param {Node} item Node to be remove
   * @param {Function|null} validation Validation function. default(Deleted if it only have breakLine and blanks)
   * @param {Element|null} stopParent Stop when the parent node reaches stopParent
   * @returns {Object|null} {sc: previousSibling, ec: nextSibling}
   */
  removeItemAllParents: function(e, t, l) {
    if (!e) return null;
    let o = null;
    return t || (t = (function(i) {
      if (i === l || this.isComponent(i)) return !1;
      const a = i.textContent.trim();
      return a.length === 0 || /^(\n|\u200B)+$/.test(a);
    }).bind(this)), function i(a) {
      if (!he.isWysiwygDiv(a)) {
        const d = a.parentNode;
        d && t(a) && (o = {
          sc: a.previousElementSibling,
          ec: a.nextElementSibling
        }, he.removeItem(a), i(d));
      }
    }(e), o;
  },
  /**
   * @description Detach Nested all nested lists under the "baseNode".
   * Returns a list with nested removed.
   * @param {Node} baseNode Element on which to base.
   * @param {Boolean} all If true, it also detach all nested lists of a returned list.
   * @returns {Element}
   */
  detachNestedList: function(e, t) {
    const l = this._deleteNestedList(e);
    let o, i;
    if (l) {
      o = l.cloneNode(!1), i = l.childNodes;
      const d = this.getPositionIndex(e);
      for (; i[d]; )
        o.appendChild(i[d]);
    } else
      o = e;
    let a;
    if (t)
      a = this.getListChildren(o, (function(d) {
        return this.isListCell(d) && !d.previousElementSibling;
      }).bind(this));
    else {
      const d = this.getElementDepth(e) + 2;
      a = this.getListChildren(e, (function(f) {
        return this.isListCell(f) && !f.previousElementSibling && this.getElementDepth(f) === d;
      }).bind(this));
    }
    for (let d = 0, f = a.length; d < f; d++)
      this._deleteNestedList(a[d]);
    return l && (l.parentNode.insertBefore(o, l.nextSibling), i && i.length === 0 && this.removeItem(l)), o === e ? o.parentNode : o;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let l = t, o = l.parentNode, i, a, d, f, n;
    for (; this.isListCell(o); ) {
      for (f = this.getPositionIndex(e), i = o.nextElementSibling, a = o.parentNode, d = l; d; ) {
        if (l = l.nextSibling, this.isList(d)) {
          for (n = d.childNodes; n[f]; )
            a.insertBefore(n[f], i);
          n.length === 0 && this.removeItem(d);
        } else
          a.appendChild(d);
        d = l;
      }
      l = a, o = a.parentNode;
    }
    return t.children.length === 0 && this.removeItem(t), a;
  },
  /**
   * @description Split all tags based on "baseNode"
   * Returns the last element of the splited tag.
   * @param {Node} baseNode Element or text node on which to base
   * @param {Number|Node|null} offset Text offset of "baseNode" (Only valid when "baseNode" is a text node)
   * @param {Number} depth The nesting depth of the element being split. (default: 0)
   * @returns {Element}
   */
  splitElement: function(e, t, l) {
    if (this.isWysiwygDiv(e)) return e;
    if (t && !this.isNumber(t)) {
      const k = e.childNodes;
      let x = this.getPositionIndex(t);
      const L = e.cloneNode(!1), R = e.cloneNode(!1);
      for (let s = 0, r = k.length; s < r; s++) {
        if (s < x) L.appendChild(k[s]);
        else if (s > x) R.appendChild(k[s]);
        else continue;
        s--, r--, x--;
      }
      return L.childNodes.length > 0 && e.parentNode.insertBefore(L, e), R.childNodes.length > 0 && e.parentNode.insertBefore(R, e.nextElementSibling), e;
    }
    const o = e.parentNode;
    let i = 0, a = 1, d = !0, f, n, b;
    if ((!l || l < 0) && (l = 0), e.nodeType === 3) {
      if (i = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const k = this.getNodeFromPath([i + 1], o);
        this.onlyZeroWidthSpace(k) && (k.data = this.zeroWidthSpace);
      }
    } else if (e.nodeType === 1) {
      if (t === 0) {
        for (; e.firstChild; )
          e = e.firstChild;
        if (e.nodeType === 3) {
          const k = this.createTextNode(this.zeroWidthSpace);
          e.parentNode.insertBefore(k, e), e = k;
        }
      }
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === l && (d = !1);
    }
    e.nodeType === 1 && (a = 0);
    let u = e;
    for (; this.getElementDepth(u) > l; )
      for (i = this.getPositionIndex(u) + a, u = u.parentNode, b = f, f = u.cloneNode(!1), n = u.childNodes, b && (this.isListCell(f) && this.isList(b) && b.firstElementChild ? (f.innerHTML = b.firstElementChild.innerHTML, he.removeItem(b.firstElementChild), b.children.length > 0 && f.appendChild(b)) : f.appendChild(b)); n[i]; )
        f.appendChild(n[i]);
    u.childNodes.length <= 1 && (!u.firstChild || u.firstChild.textContent.length === 0) && (u.innerHTML = "<br>");
    const v = u.parentNode;
    return d && (u = u.nextSibling), f ? (this.mergeSameTags(f, null, !1), this.mergeNestedTags(f, (function(k) {
      return this.isList(k);
    }).bind(this)), f.childNodes.length > 0 ? v.insertBefore(f, u) : f = u, this.isListCell(f) && f.children && this.isList(f.children[0]) && f.insertBefore(this.createElement("BR"), f.children[0]), o.childNodes.length === 0 && this.removeItem(o), f) : u;
  },
  /**
   * @description Use with "npdePath (util.getNodePath)" to merge the same attributes and tags if they are present and modify the nodepath.
   * If "offset" has been changed, it will return as much "offset" as it has been modified.
   * An array containing change offsets is returned in the order of the "nodePathArray" array.
   * @param {Element} element Element
   * @param {Array|null} nodePathArray Array of NodePath object ([util.getNodePath(), ..])
   * @param {Boolean} onlyText If true, non-text nodes(!util._isIgnoreNodeChange) like 'span', 'strong'.. are ignored.
   * @returns {Array} [offset, ..]
   */
  mergeSameTags: function(e, t, l) {
    const o = this, i = t ? t.length : 0;
    let a = null;
    return i && (a = this._w.Array.apply(null, new this._w.Array(i)).map(this._w.Number.prototype.valueOf, 0)), function d(f, n, b) {
      const u = f.childNodes;
      for (let v = 0, k = u.length, x, L; v < k && (x = u[v], L = u[v + 1], !!x); v++)
        if (!(o.isBreak(x) || o.isMedia(x) || o.isInputElement(x))) {
          if (l && o._isIgnoreNodeChange(x) || !l && (o.isTable(x) || o.isListCell(x) || o.isFormatElement(x) && !o.isFreeFormatElement(x))) {
            (o.isTable(x) || o.isListCell(x)) && d(x, n + 1, v);
            continue;
          }
          if (k === 1 && f.nodeName === x.nodeName && f.parentNode) {
            if (i) {
              let R, s, r, c, p;
              for (let m = 0; m < i; m++)
                if (R = t[m], R && R[n] === v) {
                  for (s = x, r = f, c = n, p = !0; c >= 0; ) {
                    if (o.getArrayIndex(r.childNodes, s) !== R[c]) {
                      p = !1;
                      break;
                    }
                    s = x.parentNode, r = s.parentNode, c--;
                  }
                  p && (R.splice(n, 1), R[n] = v);
                }
            }
            o.copyTagAttributes(x, f), f.parentNode.insertBefore(x, f), o.removeItem(f);
          }
          if (!L) {
            x.nodeType === 1 && d(x, n + 1, v);
            break;
          }
          if (x.nodeName === L.nodeName && o.isSameAttributes(x, L) && x.href === L.href) {
            const R = x.childNodes;
            let s = 0;
            for (let m = 0, g = R.length; m < g; m++)
              R[m].textContent.length > 0 && s++;
            const r = x.lastChild, c = L.firstChild;
            let p = 0;
            if (r && c) {
              const m = r.nodeType === 3 && c.nodeType === 3;
              p = r.textContent.length;
              let g = r.previousSibling;
              for (; g && g.nodeType === 3; )
                p += g.textContent.length, g = g.previousSibling;
              if (s > 0 && r.nodeType === 3 && c.nodeType === 3 && (r.textContent.length > 0 || c.textContent.length > 0) && s--, i) {
                let h = null;
                for (let _ = 0; _ < i; _++)
                  if (h = t[_], h && h[n] > v) {
                    if (n > 0 && h[n - 1] !== b) continue;
                    h[n] -= 1, h[n + 1] >= 0 && h[n] === v && (h[n + 1] += s, m && r && r.nodeType === 3 && c && c.nodeType === 3 && (a[_] += p));
                  }
              }
            }
            if (x.nodeType === 3) {
              if (p = x.textContent.length, x.textContent += L.textContent, i) {
                let m = null;
                for (let g = 0; g < i; g++)
                  if (m = t[g], m && m[n] > v) {
                    if (n > 0 && m[n - 1] !== b) continue;
                    m[n] -= 1, m[n + 1] >= 0 && m[n] === v && (m[n + 1] += s, a[g] += p);
                  }
              }
            } else
              x.innerHTML += L.innerHTML;
            o.removeItem(L), v--;
          } else x.nodeType === 1 && d(x, n + 1, v);
        }
    }(e, 0, 0), a;
  },
  /**
   * @description Remove nested tags without other child nodes.
   * @param {Element} element Element object
   * @param {Function|String|null} validation Validation function / String("tag1|tag2..") / If null, all tags are applicable.
   */
  mergeNestedTags: function(e, t) {
    typeof t == "string" ? t = (function(l) {
      return this.test(l.tagName);
    }).bind(new this._w.RegExp("^(" + (t || ".+") + ")$", "i")) : typeof t != "function" && (t = function() {
      return !0;
    }), function l(o) {
      let i = o.children;
      if (i.length === 1 && i[0].nodeName === o.nodeName && t(o)) {
        const a = i[0];
        for (i = a.children; i[0]; )
          o.appendChild(i[0]);
        o.removeChild(a);
      }
      for (let a = 0, d = o.children.length; a < d; a++)
        l(o.children[a]);
    }(e);
  },
  /**
   * @description Delete a empty child node of argument element.
   * @param {Element} element Element node
   * @param {Node|null} notRemoveNode Do not remove node
   * @param {boolean} forceDelete When all child nodes are deleted, the parent node is also deleted.
   */
  removeEmptyNode: function(e, t, l) {
    const o = this;
    t && (t = o.getParentElement(t, function(i) {
      return e === i.parentElement;
    })), function i(a) {
      if (o._notTextNode(a) || a === t || o.isNonEditable(a)) return 0;
      if (a !== e && o.onlyZeroWidthSpace(a.textContent) && (!a.firstChild || !o.isBreak(a.firstChild)) && !a.querySelector(o._allowedEmptyNodeList)) {
        if (a.parentNode)
          return a.parentNode.removeChild(a), -1;
      } else {
        const d = a.children;
        for (let f = 0, n = d.length, b = 0; f < n; f++)
          !d[f + b] || o.isComponent(d[f + b]) || (b += i(d[f + b]));
      }
      return 0;
    }(e), e.childNodes.length === 0 && (l ? this.removeItem(e) : e.innerHTML = "<br>");
  },
  /**
   * @description Remove whitespace between tags in HTML string.
   * @param {String} html HTML string
   * @returns {String}
   */
  htmlRemoveWhiteSpace: function(e) {
    return e ? e.trim().replace(/<\/?(?!strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code|summary)[^>^<]+>\s+(?=<)/ig, function(t) {
      return t.replace(/\n/g, "").replace(/\s+/, " ");
    }) : "";
  },
  /**
   * @description HTML code compression
   * @param {string} html HTML string
   * @returns {string} HTML string
   */
  htmlCompress: function(e) {
    return e.replace(/\n/g, "").replace(/(>)(?:\s+)(<)/g, "$1$2");
  },
  /**
   * @description Sort a element array by depth of element.
   * @param {Array} array Array object
   * @param {Boolean} des true: descending order / false: ascending order
   */
  sortByDepth: function(e, t) {
    const l = t ? 1 : -1, o = l * -1;
    e.sort((function(i, a) {
      return !this.isListCell(i) || !this.isListCell(a) ? 0 : (i = this.getElementDepth(i), a = this.getElementDepth(a), i > a ? l : i < a ? o : 0);
    }).bind(this));
  },
  /**
   * @description Escape a string for safe use in regular expressions.
   * @param {String} string String to escape
   * @returns {String}
   */
  escapeStringRegexp: function(e) {
    if (typeof e != "string")
      throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  },
  _isExcludeSelectionElement: function(e) {
    return !/FIGCAPTION/i.test(e.nodeName) && (this.isComponent(e) || /FIGURE/i.test(e.nodeName));
  },
  /**
   * @description Nodes that need to be added without modification when changing text nodes
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _isIgnoreNodeChange: function(e) {
    return e && e.nodeType !== 3 && (this.isNonEditable(e) || !this.isTextStyleElement(e));
  },
  /**
   * @description Nodes that must remain undetached when changing text nodes (A, Label, Code, Span:font-size)
   * @param {Node|String} element Element to check
   * @returns {Boolean}
   * @private
   */
  _isMaintainedNode: function(e) {
    return e && e.nodeType !== 3 && /^(a|label|code|summary)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Node with font-size style
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _isSizeNode: function(e) {
    return e && e.nodeType !== 3 && this.isTextStyleElement(e) && !!e.style.fontSize;
  },
  /**
   * @description Nodes without text
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _notTextNode: function(e) {
    return e && e.nodeType !== 3 && (this.isComponent(e) || /^(br|input|select|canvas|img|iframe|audio|video)$/i.test(typeof e == "string" ? e : e.nodeName));
  },
  /**
   * @deprecated
   * @description Check disallowed tags
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _disallowedTags: function(e) {
    return /^(meta|script|link|style|[a-z]+\:[a-z]+)$/i.test(e.nodeName);
  },
  /**
   * @description Create whitelist RegExp object.
   * Return RegExp format: new RegExp("<\\/?\\b(?!" + list + ")\\b[^>^<]*+>", "gi")
   * @param {String} list Tags list ("br|p|div|pre...")
   * @returns {RegExp}
   */
  createTagsWhitelist: function(e) {
    return new RegExp("<\\/?\\b(?!\\b" + (e || "").replace(/\|/g, "\\b|\\b") + "\\b)[^>]*>", "gi");
  },
  /**
   * @description Create blacklist RegExp object.
   * Return RegExp format: new RegExp("<\\/?\\b(?:" + list + ")\\b[^>^<]*+>", "gi")
   * @param {String} list Tags list ("br|p|div|pre...")
   * @returns {RegExp}
   */
  createTagsBlacklist: function(e) {
    return new RegExp("<\\/?\\b(?:\\b" + (e || "^").replace(/\|/g, "\\b|\\b") + "\\b)[^>]*>", "gi");
  },
  /**
   * @description Fix tags that do not fit the editor format.
   * @param {Element} documentFragment Document fragment "DOCUMENT_FRAGMENT_NODE" (nodeType === 11)
   * @param {RegExp} htmlCheckWhitelistRegExp Editor tags whitelist (core._htmlCheckWhitelistRegExp)
   * @param {RegExp} htmlCheckBlacklistRegExp Editor tags blacklist (core._htmlCheckBlacklistRegExp)
   * @param {Function} classNameFilter Class name filter function
   * @param {Function} strictHTMLValidation Enforces strict HTML validation based on the editor`s policy
   * @private
   */
  _consistencyCheckOfHTML: function(e, t, l, o, i) {
    const a = [], d = [], f = [], n = [], b = this.getListChildNodes(e, (function(v) {
      if (v.nodeType !== 1)
        return this.isList(v.parentElement) && a.push(v), !1;
      if (l.test(v.nodeName) || !t.test(v.nodeName) && v.childNodes.length === 0 && this.isNotCheckingNode(v))
        return a.push(v), !1;
      const k = !this.getParentElement(v, this.isNotCheckingNode);
      if (!this.isTable(v) && !this.isListCell(v) && !this.isAnchor(v) && (this.isFormatElement(v) || this.isRangeFormatElement(v) || this.isTextStyleElement(v)) && v.childNodes.length === 0 && k)
        return d.push(v), !1;
      if (this.isList(v.parentNode) && !this.isList(v) && !this.isListCell(v))
        return f.push(v), !1;
      if (this.isCell(v)) {
        const L = v.firstElementChild;
        if (!this.isFormatElement(L) && !this.isRangeFormatElement(L) && !this.isComponent(L))
          return n.push(v), !1;
      }
      if (k && v.className) {
        const L = new this._w.Array(v.classList).map(o).join(" ").trim();
        L ? v.className = L : v.removeAttribute("class");
      }
      return i && v.parentNode !== e && k && (this.isListCell(v) && !this.isList(v.parentNode) || (this.isFormatElement(v) || this.isComponent(v)) && !this.isRangeFormatElement(v.parentNode) && !this.getParentElement(v, this.isComponent));
    }).bind(this));
    for (let v = 0, k = a.length; v < k; v++)
      this.removeItem(a[v]);
    const u = [];
    for (let v = 0, k = b.length, x, L; v < k; v++)
      if (x = b[v], L = x.parentNode, !(!L || !L.parentNode))
        if (this.getParentElement(x, this.isListCell)) {
          const R = x.childNodes;
          for (let s = R.length - 1; k >= 0; s--)
            L.insertBefore(x, R[s]);
          u.push(x);
        } else
          L.parentNode.insertBefore(x, L), u.push(L);
    for (let v = 0, k = u.length, x; v < k; v++)
      x = u[v], this.onlyZeroWidthSpace(x.textContent.trim()) && this.removeItem(x);
    for (let v = 0, k = d.length; v < k; v++)
      this.removeItem(d[v]);
    for (let v = 0, k = f.length, x, L, R, s; v < k; v++)
      if (x = f[v], s = x.parentNode, !!s)
        if (L = this.createElement("LI"), this.isFormatElement(x)) {
          for (R = x.childNodes; R[0]; )
            L.appendChild(R[0]);
          s.insertBefore(L, x), this.removeItem(x);
        } else
          x = x.nextSibling, L.appendChild(f[v]), s.insertBefore(L, x);
    for (let v = 0, k = n.length, x, L; v < k; v++)
      x = n[v], L = this.createElement("DIV"), L.innerHTML = x.textContent.trim().length === 0 && x.children.length === 0 ? "<br>" : x.innerHTML, x.innerHTML = L.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let l = "";
    e.height && (l += "height:" + e.height + ";"), e.minHeight && (l += "min-height:" + e.minHeight + ";"), e.maxHeight && (l += "max-height:" + e.maxHeight + ";"), e.position && (l += "position:" + e.position + ";"), e.width && (l += "width:" + e.width + ";"), e.minWidth && (l += "min-width:" + e.minWidth + ";"), e.maxWidth && (l += "max-width:" + e.maxWidth + ";");
    let o = "", i = "", a = "";
    t = l + t;
    const d = t.split(";");
    for (let f = 0, n = d.length, b; f < n; f++)
      if (b = d[f].trim(), !!b) {
        if (/^(min-|max-)?width\s*:/.test(b) || /^(z-index|position)\s*:/.test(b)) {
          o += b + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(b)) {
          /^height/.test(b) && b.split(":")[1].trim() === "auto" && (e.height = "auto"), i += b + ";";
          continue;
        }
        a += b + ";";
      }
    return {
      top: o,
      frame: i,
      editor: a
    };
  },
  _setIframeDocument: function(e, t) {
    e.setAttribute("scrolling", "auto"), e.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' + this._setIframeCssTags(t), e.contentDocument.body.className = t._editableClass, e.contentDocument.body.setAttribute("contenteditable", !0), e.contentDocument.body.setAttribute("autocorrect", "off");
  },
  _setIframeCssTags: function(e) {
    const t = e.iframeCSSFileName, l = this._w.RegExp;
    let o = "";
    for (let i = 0, a = t.length, d; i < a; i++) {
      if (d = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[i]))
        d.push(t[i]);
      else {
        const f = new l("(^|.*[\\/])" + t[i] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let n = document.getElementsByTagName("link"), b = 0, u = n.length, v; b < u; b++)
          v = n[b].href.match(f), v && d.push(v[0]);
      }
      if (!d || d.length === 0) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
      for (let f = 0, n = d.length; f < n; f++)
        o += '<link href="' + d[f] + '" rel="stylesheet">';
    }
    return o + (e.height === "auto" ? `<style>
/** Iframe height auto */
body{height: min-content; overflow: hidden;}
</style>` : "");
  }
}, Yi = {
  /**
   * @description document create
   * @param {Element} element Textarea
   * @param {Object} options Options
   * @returns {Object}
   */
  init: function(e, t) {
    typeof t != "object" && (t = {});
    const l = document;
    this._initOptions(e, t);
    const o = l.createElement("DIV");
    o.className = "sun-editor" + (t.rtl ? " se-rtl" : ""), e.id && (o.id = "suneditor_" + e.id);
    const i = l.createElement("DIV");
    i.className = "se-container";
    const a = this._createToolBar(l, t.buttonList, t.plugins, t), d = a.element.cloneNode(!1);
    d.className += " se-toolbar-shadow", a.element.style.visibility = "hidden", a.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const f = l.createElement("DIV");
    f.className = "se-arrow";
    const n = l.createElement("DIV");
    n.className = "se-toolbar-sticky-dummy";
    const b = l.createElement("DIV");
    b.className = "se-wrapper";
    const u = this._initElements(t, o, a.element, f), v = u.bottomBar, k = u.wysiwygFrame, x = u.placeholder;
    let L = u.codeView;
    const R = v.resizingBar, s = v.navigation, r = v.charWrapper, c = v.charCounter, p = l.createElement("DIV");
    p.className = "se-loading-box sun-editor-common", p.innerHTML = '<div class="se-loading-effect"></div>';
    const m = l.createElement("DIV");
    m.className = "se-line-breaker", m.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const g = l.createElement("DIV");
    g.className += "se-line-breaker-component";
    const h = g.cloneNode(!0);
    g.innerHTML = h.innerHTML = t.icons.line_break;
    const _ = l.createElement("DIV");
    _.className = "se-resizing-back";
    const C = l.createElement("INPUT");
    C.tabIndex = -1, C.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const y = t.toolbarContainer;
    y && (y.appendChild(a.element), y.appendChild(d));
    const S = t.resizingBarContainer;
    return R && S && S.appendChild(R), b.appendChild(L), x && b.appendChild(x), y || (i.appendChild(a.element), i.appendChild(d)), i.appendChild(n), i.appendChild(b), i.appendChild(_), i.appendChild(p), i.appendChild(m), i.appendChild(g), i.appendChild(h), i.appendChild(C), R && !S && i.appendChild(R), o.appendChild(i), L = this._checkCodeMirror(t, L), {
      constructed: {
        _top: o,
        _relative: i,
        _toolBar: a.element,
        _toolbarShadow: d,
        _menuTray: a._menuTray,
        _editorArea: b,
        _wysiwygArea: k,
        _codeArea: L,
        _placeholder: x,
        _resizingBar: R,
        _navigation: s,
        _charWrapper: r,
        _charCounter: c,
        _loading: p,
        _lineBreaker: m,
        _lineBreaker_t: g,
        _lineBreaker_b: h,
        _resizeBack: _,
        _stickyDummy: n,
        _arrow: f,
        _focusTemp: C
      },
      options: t,
      plugins: a.plugins,
      pluginCallButtons: a.pluginCallButtons,
      _responsiveButtons: a.responsiveButtons
    };
  },
  /**
   * @description Check the CodeMirror option to apply the CodeMirror and return the CodeMirror element.
   * @param {Object} options options
   * @param {Element} textarea textarea element
   * @private
   */
  _checkCodeMirror: function(e, t) {
    if (e.codeMirror) {
      const l = [{
        mode: "htmlmixed",
        htmlMode: !0,
        lineNumbers: !0,
        lineWrapping: !0
      }, e.codeMirror.options || {}].reduce(function(i, a) {
        for (let d in a)
          he.hasOwn(a, d) && (i[d] = a[d]);
        return i;
      }, {});
      e.height === "auto" && (l.viewportMargin = 1 / 0, l.height = "auto");
      const o = e.codeMirror.src.fromTextArea(t, l);
      o.display.wrapper.style.cssText = t.style.cssText, e.codeMirrorEditor = o, t = o.display.wrapper, t.className += " se-wrapper-code-mirror";
    }
    return t;
  },
  /**
   * @description Check for a katex object.
   * @param {Object} katex katex object
   * @private
   */
  _checkKatexMath: function(e) {
    if (!e) throw Error('[SUNEDITOR.create.fail] To use the math button you need to add a "katex" object to the options.');
    const t = [{
      throwOnError: !1
    }, e.options || {}].reduce(function(l, o) {
      for (let i in o)
        he.hasOwn(o, i) && (l[i] = o[i]);
      return l;
    }, {});
    e.options = t;
  },
  /**
   * @description Add or reset options
   * @param {Object} mergeOptions New options property
   * @param {Object} context Context object of core
   * @param {Object} originOptions Origin options
   * @returns {Object} pluginCallButtons
   * @private
   */
  _setOptions: function(e, t, l) {
    this._initOptions(t.element.originElement, e);
    const o = t.element, i = o.relative, a = o.editorArea, d = e.toolbarContainer && e.toolbarContainer !== l.toolbarContainer, f = e.lang !== l.lang || e.buttonList !== l.buttonList || e.mode !== l.mode || d, n = this._createToolBar(document, f ? e.buttonList : l.buttonList, e.plugins, e);
    n.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const b = document.createElement("DIV");
    b.className = "se-arrow", f && (n.element.style.visibility = "hidden", d ? (e.toolbarContainer.appendChild(n.element), o.toolbar.parentElement.removeChild(o.toolbar)) : o.toolbar.parentElement.replaceChild(n.element, o.toolbar), o.toolbar = n.element, o._menuTray = n._menuTray, o._arrow = b);
    const u = this._initElements(e, o.topArea, f ? n.element : o.toolbar, b), v = u.bottomBar, k = u.wysiwygFrame, x = u.placeholder;
    let L = u.codeView;
    return o.resizingBar && he.removeItem(o.resizingBar), v.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== l.resizingBarContainer ? e.resizingBarContainer.appendChild(v.resizingBar) : i.appendChild(v.resizingBar)), a.innerHTML = "", a.appendChild(L), x && a.appendChild(x), L = this._checkCodeMirror(e, L), o.resizingBar = v.resizingBar, o.navigation = v.navigation, o.charWrapper = v.charWrapper, o.charCounter = v.charCounter, o.wysiwygFrame = k, o.code = L, o.placeholder = x, e.rtl ? he.addClass(o.topArea, "se-rtl") : he.removeClass(o.topArea, "se-rtl"), {
      callButtons: n.pluginCallButtons,
      plugins: n.plugins,
      toolbar: n
    };
  },
  /**
   * @description Initialize property of suneditor elements
   * @param {Object} options Options
   * @param {Element} topDiv Suneditor top div
   * @param {Element} toolBar Tool bar
   * @param {Element} toolBarArrow Tool bar arrow (balloon editor)
   * @returns {Object} Bottom bar elements (resizingBar, navigation, charWrapper, charCounter)
   * @private
   */
  _initElements: function(e, t, l, o) {
    t.style.cssText = e._editorStyles.top, /inline/i.test(e.mode) ? (l.className += " se-toolbar-inline", l.style.width = e.toolbarWidth) : /balloon/i.test(e.mode) && (l.className += " se-toolbar-balloon", l.style.width = e.toolbarWidth, l.appendChild(o));
    const i = document.createElement(e.iframe ? "IFRAME" : "DIV");
    if (i.className = "se-wrapper-inner se-wrapper-wysiwyg", e.iframe)
      i.allowFullscreen = !0, i.frameBorder = 0, i.style.cssText = e._editorStyles.frame, i.className += e.className;
    else {
      i.setAttribute("contenteditable", !0), i.setAttribute("autocorrect", "off"), i.setAttribute("scrolling", "auto");
      for (let v in e.iframeAttributes)
        i.setAttribute(v, e.iframeAttributes[v]);
      i.className += " " + e._editableClass, i.style.cssText = e._editorStyles.frame + e._editorStyles.editor, i.className += e.className;
    }
    const a = document.createElement("TEXTAREA");
    a.className = "se-wrapper-inner se-wrapper-code" + e.className, a.style.cssText = e._editorStyles.frame, a.style.display = "none", e.height === "auto" && (a.style.overflow = "hidden");
    let d = null, f = null, n = null, b = null;
    if (e.resizingBar && (d = document.createElement("DIV"), d.className = "se-resizing-bar sun-editor-common", f = document.createElement("DIV"), f.className = "se-navigation sun-editor-common", d.appendChild(f), e.charCounter)) {
      if (n = document.createElement("DIV"), n.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const v = document.createElement("SPAN");
        v.className = "se-char-label", v.textContent = e.charCounterLabel, n.appendChild(v);
      }
      if (b = document.createElement("SPAN"), b.className = "se-char-counter", b.textContent = "0", n.appendChild(b), e.maxCharCount > 0) {
        const v = document.createElement("SPAN");
        v.textContent = " / " + e.maxCharCount, n.appendChild(v);
      }
      d.appendChild(n);
    }
    let u = null;
    return e.placeholder && (u = document.createElement("SPAN"), u.className = "se-placeholder", u.innerText = e.placeholder), {
      bottomBar: {
        resizingBar: d,
        navigation: f,
        charWrapper: n,
        charCounter: b
      },
      wysiwygFrame: i,
      codeView: a,
      placeholder: u
    };
  },
  /**
   * @description Initialize options
   * @param {Element} element Options object
   * @param {Object} options Options object
   * @private
   */
  _initOptions: function(e, t) {
    const l = {};
    if (t.plugins) {
      const a = t.plugins, d = a.length ? a : Object.keys(a).map(function(f) {
        return a[f];
      });
      for (let f = 0, n = d.length, b; f < n; f++)
        b = d[f].default || d[f], l[b.name] = b;
    }
    t.plugins = l, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || Ui, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new he._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const o = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(a, d) {
      for (let f in d)
        a[f] = d[f];
      return a;
    }, {});
    t._textTagsMap = {
      strong: o.bold.toLowerCase(),
      b: o.bold.toLowerCase(),
      u: o.underline.toLowerCase(),
      ins: o.underline.toLowerCase(),
      em: o.italic.toLowerCase(),
      i: o.italic.toLowerCase(),
      del: o.strike.toLowerCase(),
      strike: o.strike.toLowerCase(),
      s: o.strike.toLowerCase(),
      sub: o.sub.toLowerCase(),
      sup: o.sup.toLowerCase()
    }, t._defaultCommand = {
      bold: t.textTags.bold,
      underline: t.textTags.underline,
      italic: t.textTags.italic,
      strike: t.textTags.strike,
      subscript: t.textTags.sub,
      superscript: t.textTags.sup
    }, t.__allowedScriptTag = t.__allowedScriptTag === !0;
    const i = "br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary";
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : i) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? he.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? he.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? he.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = he.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? he.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (he.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (he.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? he.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (he.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (he.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? he.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? he.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? he.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryData = t.imageGalleryData || null, t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !he.getNumber(t.videoWidth, 0) ? "" : he.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !he.getNumber(t.videoHeight, 0) ? "" : he.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = he.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.vimeoQuery = (t.vimeoQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? he.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? he.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? he.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? he.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? hn : [hn, t.icons].reduce(function(a, d) {
      for (let f in d)
        he.hasOwn(d, f) && (a[f] = d[f]);
      return a;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(a, d) {
      for (let f in d)
        he.hasOwn(d, f) && (a[f] = d[f]);
      return a;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = he._setDefaultOptionStyle(t, t.defaultStyle);
  },
  _setWhitelist: function(e, t) {
    if (typeof t != "string") return e;
    t = t.split("|"), e = e.split("|");
    for (let l = 0, o = t.length, i; l < o; l++)
      i = e.indexOf(t[l]), i > -1 && e.splice(i, 1);
    return e.join("|");
  },
  /**
   * @description Suneditor's Default button list
   * @param {Object} options options
   * @private
   */
  _defaultButtons: function(e) {
    const t = e.icons, l = e.lang, o = he.isOSX_IOS ? "⌘" : "CTRL", i = he.isOSX_IOS ? "⇧" : "+SHIFT", a = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], d = e.rtl ? ["[", "]"] : ["]", "["], f = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", l.toolbar.bold + '<span class="se-shortcut">' + (a.indexOf("bold") > -1 ? "" : o + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", l.toolbar.underline + '<span class="se-shortcut">' + (a.indexOf("underline") > -1 ? "" : o + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", l.toolbar.italic + '<span class="se-shortcut">' + (a.indexOf("italic") > -1 ? "" : o + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", l.toolbar.strike + '<span class="se-shortcut">' + (a.indexOf("strike") > -1 ? "" : o + i + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", l.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", l.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", l.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", l.toolbar.indent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : o + '+<span class="se-shortcut-key">' + d[0] + "</span>") + "</span>", "indent", "", f[0]],
      outdent: ["", l.toolbar.outdent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : o + '+<span class="se-shortcut-key">' + d[1] + "</span>") + "</span>", "outdent", "", f[1]],
      fullScreen: ["se-code-view-enabled se-resizing-enabled", l.toolbar.fullScreen, "fullScreen", "", t.expansion],
      showBlocks: ["", l.toolbar.showBlocks, "showBlocks", "", t.show_blocks],
      codeView: ["se-code-view-enabled se-resizing-enabled", l.toolbar.codeView, "codeView", "", t.code_view],
      undo: ["", l.toolbar.undo + '<span class="se-shortcut">' + (a.indexOf("undo") > -1 ? "" : o + '+<span class="se-shortcut-key">Z</span>') + "</span>", "undo", "", t.undo],
      redo: ["", l.toolbar.redo + '<span class="se-shortcut">' + (a.indexOf("undo") > -1 ? "" : o + '+<span class="se-shortcut-key">Y</span> / ' + o + i + '+<span class="se-shortcut-key">Z</span>') + "</span>", "redo", "", t.redo],
      preview: ["se-resizing-enabled", l.toolbar.preview, "preview", "", t.preview],
      print: ["se-resizing-enabled", l.toolbar.print, "print", "", t.print],
      dir: ["", l.toolbar[e.rtl ? "dir_ltr" : "dir_rtl"], "dir", "", t[e.rtl ? "dir_ltr" : "dir_rtl"]],
      dir_ltr: ["", l.toolbar.dir_ltr, "dir_ltr", "", t.dir_ltr],
      dir_rtl: ["", l.toolbar.dir_rtl, "dir_rtl", "", t.dir_rtl],
      save: ["se-resizing-enabled", l.toolbar.save + '<span class="se-shortcut">' + (a.indexOf("save") > -1 ? "" : o + '+<span class="se-shortcut-key">S</span>') + "</span>", "save", "", t.save],
      /** plugins - command */
      blockquote: ["", l.toolbar.tag_blockquote, "blockquote", "command", t.blockquote],
      /** plugins - submenu */
      font: ["se-btn-select se-btn-tool-font", l.toolbar.font, "font", "submenu", '<span class="txt">' + l.toolbar.font + "</span>" + t.arrow_down],
      formatBlock: ["se-btn-select se-btn-tool-format", l.toolbar.formats, "formatBlock", "submenu", '<span class="txt">' + l.toolbar.formats + "</span>" + t.arrow_down],
      fontSize: ["se-btn-select se-btn-tool-size", l.toolbar.fontSize, "fontSize", "submenu", '<span class="txt">' + l.toolbar.fontSize + "</span>" + t.arrow_down],
      fontColor: ["", l.toolbar.fontColor, "fontColor", "submenu", t.font_color],
      hiliteColor: ["", l.toolbar.hiliteColor, "hiliteColor", "submenu", t.highlight_color],
      align: ["se-btn-align", l.toolbar.align, "align", "submenu", e.rtl ? t.align_right : t.align_left],
      list: ["", l.toolbar.list, "list", "submenu", t.list_number],
      horizontalRule: ["btn_line", l.toolbar.horizontalRule, "horizontalRule", "submenu", t.horizontal_rule],
      table: ["", l.toolbar.table, "table", "submenu", t.table],
      lineHeight: ["", l.toolbar.lineHeight, "lineHeight", "submenu", t.line_height],
      template: ["", l.toolbar.template, "template", "submenu", t.template],
      paragraphStyle: ["", l.toolbar.paragraphStyle, "paragraphStyle", "submenu", t.paragraph_style],
      textStyle: ["", l.toolbar.textStyle, "textStyle", "submenu", t.text_style],
      /** plugins - dialog */
      link: ["", l.toolbar.link, "link", "dialog", t.link],
      image: ["", l.toolbar.image, "image", "dialog", t.image],
      video: ["", l.toolbar.video, "video", "dialog", t.video],
      audio: ["", l.toolbar.audio, "audio", "dialog", t.audio],
      math: ["", l.toolbar.math, "math", "dialog", t.math],
      /** plugins - fileBrowser */
      imageGallery: ["", l.toolbar.imageGallery, "imageGallery", "fileBrowser", t.image_gallery]
    };
  },
  /**
   * @description Create a group div containing each module
   * @returns {Object}
   * @private
   */
  _createModuleGroup: function() {
    const e = he.createElement("DIV");
    e.className = "se-btn-module se-btn-module-border";
    const t = he.createElement("UL");
    return t.className = "se-menu-list", e.appendChild(t), {
      div: e,
      ul: t
    };
  },
  /**
   * @description Create a button element
   * @param {string} buttonClass className in button
   * @param {string} title Title in button
   * @param {string} dataCommand The data-command property of the button
   * @param {string} dataDisplay The data-display property of the button ('dialog', 'submenu', 'command')
   * @param {string} innerHTML Html in button
   * @param {string} _disabled Button disabled
   * @param {Object} _icons Icons
   * @returns {Object}
   * @private
   */
  _createButton: function(e, t, l, o, i, a, d) {
    const f = he.createElement("LI"), n = he.createElement("BUTTON"), b = t || l;
    return n.setAttribute("type", "button"), n.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), n.setAttribute("data-command", l), n.setAttribute("data-display", o), n.setAttribute("aria-label", b.replace(/<span .+<\/span>/, "")), n.setAttribute("tabindex", "-1"), i || (i = '<span class="se-icon-text">!</span>'), /^default\./i.test(i) && (i = d[i.replace(/^default\./i, "")]), /^text\./i.test(i) && (i = i.replace(/^text\./i, ""), n.className += " se-btn-more-text"), i += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + b + "</span></span>", a && n.setAttribute("disabled", !0), n.innerHTML = i, f.appendChild(n), {
      li: f,
      button: n
    };
  },
  /**
   * @description Create editor HTML
   * @param {Array} doc document object
   * @param {Array} buttonList option.buttonList
   * @param {Object|null} plugins Plugins
   * @param {Array} options options
   * @returns {Object} { element: (Element) Toolbar element, plugins: (Array|null) Plugins Array, pluginCallButtons: (Object), responsiveButtons: (Array) }
   * @private
   */
  _createToolBar: function(e, t, l, o) {
    const i = e.createElement("DIV");
    i.className = "se-toolbar-separator-vertical";
    const a = e.createElement("DIV");
    a.className = "se-toolbar sun-editor-common";
    const d = e.createElement("DIV");
    d.className = "se-btn-tray", a.appendChild(d), t = JSON.parse(JSON.stringify(t));
    const f = o.icons, n = this._defaultButtons(o), b = {}, u = [];
    let v = null, k = null, x = null, L = null, R = "", s = !1;
    const r = he.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let m = 0, g, h, _, C, y; m < t.length; m++)
        if (g = !1, y = "", C = t[m], x = this._createModuleGroup(), typeof C == "object") {
          for (let S = 0, V; S < C.length; S++) {
            if (k = C[S], V = !1, /^\%\d+/.test(k) && S === 0) {
              C[0] = k.replace(/[^\d]/g, ""), u.push(C), t.splice(m--, 1);
              continue e;
            }
            if (typeof k == "object")
              typeof k.add == "function" ? (R = k.name, v = n[R], l[R] = k) : (R = k.name, v = [k.buttonClass, k.title, k.name, k.dataDisplay, k.innerHTML, k._disabled]);
            else {
              if (/^\-/.test(k)) {
                y = k.substr(1), x.div.className += " module-float-" + y;
                continue;
              }
              if (/^\#/.test(k)) {
                k.substr(1) === "fix" && (x.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(k)) {
                V = !0;
                const T = k.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                _ = "__se__" + T[1].trim();
                const z = T[2].trim(), A = T[3].trim();
                v = ["se-btn-more", z, _, "MORE", A];
              } else
                v = n[k];
              if (R = k, !v) {
                const T = l[R];
                if (!T) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + R + "]");
                v = [T.buttonClass, T.title, T.name, T.display, T.innerHTML, T._disabled];
              }
            }
            L = this._createButton(v[0], v[1], v[2], v[3], v[4], v[5], f), (g ? h : x.ul).appendChild(L.li), l[R] && (b[R] = L.button), V && (g = !0, h = he.createElement("DIV"), h.className = "se-more-layer " + _, h.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (y ? ' style="float: ' + y + ';"' : "") + "></ul></div>", r.appendChild(h), h = h.firstElementChild.firstElementChild);
          }
          if (s) {
            const S = i.cloneNode(!1);
            d.appendChild(S);
          }
          d.appendChild(x.div), s = !0;
        } else if (/^\/$/.test(C)) {
          const S = e.createElement("DIV");
          S.className = "se-btn-module-enter", d.appendChild(S), s = !1;
        }
    switch (d.children.length) {
      case 0:
        d.style.display = "none";
        break;
      case 1:
        he.removeClass(d.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (o.rtl) {
          const m = i.cloneNode(!1);
          m.style.float = d.lastElementChild.style.float, d.appendChild(m);
        }
    }
    u.length > 0 && u.unshift(t), r.children.length > 0 && d.appendChild(r);
    const c = e.createElement("DIV");
    c.className = "se-menu-tray", a.appendChild(c);
    const p = e.createElement("DIV");
    return p.className = "se-toolbar-cover", a.appendChild(p), o.hideToolbar && (a.style.display = "none"), {
      element: a,
      plugins: l,
      pluginCallButtons: b,
      responsiveButtons: u,
      _menuTray: c,
      _buttonTray: d
    };
  }
}, Xi = function(e, t, l) {
  return {
    element: {
      originElement: e,
      topArea: t._top,
      relative: t._relative,
      toolbar: t._toolBar,
      _toolbarShadow: t._toolbarShadow,
      _buttonTray: t._toolBar.querySelector(".se-btn-tray"),
      _menuTray: t._menuTray,
      resizingBar: t._resizingBar,
      navigation: t._navigation,
      charWrapper: t._charWrapper,
      charCounter: t._charCounter,
      editorArea: t._editorArea,
      wysiwygFrame: t._wysiwygArea,
      wysiwyg: t._wysiwygArea,
      // if (options.iframe) cons._wysiwygArea.contentDocument.body
      code: t._codeArea,
      placeholder: t._placeholder,
      loading: t._loading,
      lineBreaker: t._lineBreaker,
      lineBreaker_t: t._lineBreaker_t,
      lineBreaker_b: t._lineBreaker_b,
      resizeBackground: t._resizeBack,
      _stickyDummy: t._stickyDummy,
      _arrow: t._arrow,
      _focusTemp: t._focusTemp
    },
    tool: {
      cover: t._toolBar.querySelector(".se-toolbar-cover"),
      bold: t._toolBar.querySelector('[data-command="bold"]'),
      underline: t._toolBar.querySelector('[data-command="underline"]'),
      italic: t._toolBar.querySelector('[data-command="italic"]'),
      strike: t._toolBar.querySelector('[data-command="strike"]'),
      sub: t._toolBar.querySelector('[data-command="SUB"]'),
      sup: t._toolBar.querySelector('[data-command="SUP"]'),
      undo: t._toolBar.querySelector('[data-command="undo"]'),
      redo: t._toolBar.querySelector('[data-command="redo"]'),
      save: t._toolBar.querySelector('[data-command="save"]'),
      outdent: t._toolBar.querySelector('[data-command="outdent"]'),
      indent: t._toolBar.querySelector('[data-command="indent"]'),
      fullScreen: t._toolBar.querySelector('[data-command="fullScreen"]'),
      showBlocks: t._toolBar.querySelector('[data-command="showBlocks"]'),
      codeView: t._toolBar.querySelector('[data-command="codeView"]'),
      dir: t._toolBar.querySelector('[data-command="dir"]'),
      dir_ltr: t._toolBar.querySelector('[data-command="dir_ltr"]'),
      dir_rtl: t._toolBar.querySelector('[data-command="dir_rtl"]')
    },
    options: l,
    option: l
  };
};
function Ar(e, t) {
  const l = e._w, o = e.util, i = e.options.historyStackDelayTime;
  let a = e.context.element, d = e.context.tool.undo, f = e.context.tool.redo, n = null, b = 0, u = [];
  function v() {
    const x = u[b];
    a.wysiwyg.innerHTML = x.contents, e.setRange(o.getNodeFromPath(x.s.path, a.wysiwyg), x.s.offset, o.getNodeFromPath(x.e.path, a.wysiwyg), x.e.offset), e.focus(), u.length <= 1 ? (d && d.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0)) : b === 0 ? (d && d.setAttribute("disabled", !0), f && f.removeAttribute("disabled")) : b === u.length - 1 ? (d && d.removeAttribute("disabled"), f && f.setAttribute("disabled", !0)) : (d && d.removeAttribute("disabled"), f && f.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function k() {
    e._checkComponents();
    const x = a.wysiwyg.innerHTML;
    if (!x || u[b] && x === u[b].contents) return;
    b++;
    const L = e._variable._range;
    u.length > b && (u = u.slice(0, b), f && f.setAttribute("disabled", !0)), L ? u[b] = {
      contents: x,
      s: {
        path: o.getNodePath(L.startContainer, null, null),
        offset: L.startOffset
      },
      e: {
        path: o.getNodePath(L.endContainer, null, null),
        offset: L.endOffset
      }
    } : u[b] = {
      contents: x,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, b === 1 && d && d.removeAttribute("disabled"), e._setCharCount(), t();
  }
  return {
    /**
     * @description History stack
     */
    stack: u,
    /**
     * @description Saving the current status to the history object stack
     * If "delay" is true, it will be saved after (options.historyStackDelayTime || 400) miliseconds
     * If the function is called again with the "delay" argument true before it is saved, the delay time is renewal
     * You can specify the delay time by sending a number.
     * @param {Boolean|Number} delay If true, Add stack without delay time.
     */
    push: function(x) {
      l.setTimeout(e._resourcesStateChange.bind(e));
      const L = typeof x == "number" ? x > 0 ? x : 0 : x ? i : 0;
      if ((!L || n) && (l.clearTimeout(n), !L)) {
        k();
        return;
      }
      n = l.setTimeout(function() {
        l.clearTimeout(n), n = null, k();
      }, L);
    },
    /**
     * @description Undo function
     */
    undo: function() {
      b > 0 && (b--, v());
    },
    /**
     * @description Redo function
     */
    redo: function() {
      u.length - 1 > b && (b++, v());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(x) {
      b = x < 0 ? u.length - 1 : x, v();
    },
    /**
     * @description Get the current history stack index.
     * @returns {Number} Current Stack index
     */
    getCurrentIndex: function() {
      return b;
    },
    /**
     * @description Reset the history object
     */
    reset: function(x) {
      d && d.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), u.splice(0), b = 0, u[b] = {
        contents: e.getContents(!0),
        s: {
          path: [0, 0],
          offset: 0
        },
        e: {
          path: [0, 0],
          offset: 0
        }
      }, x || t();
    },
    /**
     * @description Reset the disabled state of the buttons to fit the current stack.
     * @private
     */
    _resetCachingButton: function() {
      a = e.context.element, d = e.context.tool.undo, f = e.context.tool.redo, b === 0 ? (d && d.setAttribute("disabled", !0), f && b === u.length - 1 && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : b === u.length - 1 && f && f.setAttribute("disabled", !0);
    },
    /**
     * @description Remove all stacks and remove the timeout function.
     * @private
     */
    _destroy: function() {
      n && l.clearTimeout(n), u = null;
    }
  };
}
const mn = {
  name: "notice",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    const t = e.context;
    t.notice = {};
    let l = e.util.createElement("DIV"), o = e.util.createElement("SPAN"), i = e.util.createElement("BUTTON");
    l.className = "se-notice", i.className = "close", i.setAttribute("aria-label", "Close"), i.setAttribute("title", e.lang.dialogBox.close), i.innerHTML = e.icons.cancel, l.appendChild(o), l.appendChild(i), t.notice.modal = l, t.notice.message = o, i.addEventListener("click", this.onClick_cancel.bind(e)), t.element.editorArea.appendChild(l), l = null;
  },
  /**
   * @description Event when clicking the cancel button
   * @param {MouseEvent} e Event object
   */
  onClick_cancel: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.notice.close.call(this);
  },
  /**
   * @description  Open the notice panel
   * @param {String} text Notice message
   */
  open: function(e) {
    this.context.notice.message.textContent = e, this.context.notice.modal.style.display = "block";
  },
  /**
   * @description  Open the notice panel
   */
  close: function() {
    this.context.notice.modal.style.display = "none";
  }
};
function Rr(e, t, l, o, i, a) {
  const d = e.element.originElement.ownerDocument || document, f = d.defaultView || window, n = he, b = i.icons, u = {
    _d: d,
    _w: f,
    _parser: new f.DOMParser(),
    _prevRtl: i.rtl,
    _editorHeight: 0,
    _editorHeightPadding: 0,
    _listCamel: i.__listCommonStyle,
    _listKebab: n.camelToKebabCase(i.__listCommonStyle),
    __focusTemp: e.element._focusTemp,
    /**
     * @description Document object of the iframe if created as an iframe || _d
     * @private
     */
    _wd: null,
    /**
     * @description Window object of the iframe if created as an iframe || _w
     * @private
     */
    _ww: null,
    /**
     * @description Closest ShadowRoot to editor if found
     * @private
     */
    _shadowRoot: null,
    /**
     * @description Block controller mousedown events in "shadowRoot" environment
     * @private
     */
    _shadowRootControllerEventTarget: null,
    /**
     * @description Util object
     */
    util: n,
    /**
     * @description Functions object
     */
    functions: null,
    /**
     * @description Editor options
     */
    options: null,
    /**
     * @description Computed style of the wysiwyg area (window.getComputedStyle(context.element.wysiwyg))
     */
    wwComputedStyle: null,
    /**
     * @description Notice object
     */
    notice: mn,
    /**
     * @description Default icons object
     */
    icons: b,
    /**
     * @description History object for undo, redo
     */
    history: null,
    /**
     * @description Elements and user options parameters of the suneditor
     */
    context: e,
    /**
     * @description Plugin buttons
     */
    pluginCallButtons: t,
    /**
     * @description Loaded plugins
     */
    plugins: l || {},
    /**
     * @description Whether the plugin is initialized
     */
    initPlugins: {},
    /**
     * @description Object for managing submenu elements
     * @private
     */
    _targetPlugins: {},
    /**
     * @description Save rendered submenus and containers
     * @private
     */
    _menuTray: {},
    /**
     * @description loaded language
     */
    lang: o,
    /**
     * @description The selection node (core.getSelectionNode()) to which the effect was last applied
     */
    effectNode: null,
    /**
     * @description submenu element
     */
    submenu: null,
    /**
     * @description container element
     */
    container: null,
    /**
     * @description current subment name
     * @private
     */
    _submenuName: "",
    /**
     * @description binded submenuOff method
     * @private
     */
    _bindedSubmenuOff: null,
    /**
     * @description binded containerOff method
     * @private
     */
    _bindedContainerOff: null,
    /**
     * @description active button element in submenu
     */
    submenuActiveButton: null,
    /**
     * @description active button element in container
     */
    containerActiveButton: null,
    /**
     * @description The elements array to be processed unvisible when the controllersOff function is executed (resizing, link modified button, table controller)
     */
    controllerArray: [],
    /**
     * @description The name of the plugin that called the currently active controller
     */
    currentControllerName: "",
    /**
     * @description The target element of current controller
     */
    currentControllerTarget: null,
    /**
     * @description The file component object of current selected file tag (getFileComponent)
     */
    currentFileComponentInfo: null,
    /**
     * @description An array of buttons whose class name is not "se-code-view-enabled"
     */
    codeViewDisabledButtons: [],
    /**
     * @description An array of buttons whose class name is not "se-resizing-enabled"
     */
    resizingDisabledButtons: [],
    /**
     * @description active more layer element in submenu
     * @private
     */
    _moreLayerActiveButton: null,
    /**
     * @description Tag whitelist RegExp object used in "_consistencyCheckOfHTML" method
     * ^(options._editorTagsWhitelist)$
     * @private
     */
    _htmlCheckWhitelistRegExp: null,
    /**
     * @description Tag blacklist RegExp object used in "_consistencyCheckOfHTML" method
     * @private
     */
    _htmlCheckBlacklistRegExp: null,
    /**
     * @description RegExp when using check disallowd tags. (b, i, ins, strike, s)
     * @private
     */
    _disallowedTextTagsRegExp: null,
    /**
     * @description Editor tags whitelist (RegExp object)
     * util.createTagsWhitelist(options._editorTagsWhitelist)
     */
    editorTagsWhitelistRegExp: null,
    /**
     * @description Editor tags blacklist (RegExp object)
     * util.createTagsBlacklist(options.tagsBlacklist)
     */
    editorTagsBlacklistRegExp: null,
    /**
     * @description Tag whitelist when pasting (RegExp object)
     * util.createTagsWhitelist(options.pasteTagsWhitelist)
     */
    pasteTagsWhitelistRegExp: null,
    /**
     * @description Tag blacklist when pasting (RegExp object)
     * util.createTagsBlacklist(options.pasteTagsBlacklist)
     */
    pasteTagsBlacklistRegExp: null,
    /**
     * @description Boolean value of whether the editor has focus
     */
    hasFocus: !1,
    /**
     * @description Boolean value of whether the editor is disabled
     */
    isDisabled: !1,
    /**
     * @description Boolean value of whether the editor is readOnly
     */
    isReadOnly: !1,
    /**
     * @description Attributes whitelist used by the cleanHTML method
     * @private
     */
    _attributesWhitelistRegExp: null,
    _attributesWhitelistRegExp_all_data: null,
    /**
     * @description Attributes blacklist used by the cleanHTML method
     * @private
     */
    _attributesBlacklistRegExp: null,
    /**
     * @description Attributes of tags whitelist used by the cleanHTML method
     * @private
     */
    _attributesTagsWhitelist: null,
    /**
     * @description Attributes of tags blacklist used by the cleanHTML method
     * @private
     */
    _attributesTagsBlacklist: null,
    /**
     * @description binded controllersOff method
     * @private
     */
    _bindControllersOff: null,
    /**
     * @description Is inline mode?
     * @private
     */
    _isInline: null,
    /**
     * @description Is balloon|balloon-always mode?
     * @private
     */
    _isBalloon: null,
    /**
     * @description Is balloon-always mode?
     * @private
     */
    _isBalloonAlways: null,
    /**
     * @description Required value when using inline mode to sticky toolbar
     * @private
     */
    _inlineToolbarAttr: { top: "", width: "", isShow: !1 },
    /**
     * @description Variable that controls the "blur" event in the editor of inline or balloon mode when the focus is moved to submenu
     * @private
     */
    _notHideToolbar: !1,
    /**
     * @description Variable value that sticky toolbar mode
     * @private
     */
    _sticky: !1,
    /**
     * @description Variables for controlling focus and blur events
     * @private
     */
    _antiBlur: !1,
    /**
     * @description Component line breaker element
     * @private
     */
    _lineBreaker: null,
    _lineBreakerButton: null,
    /**
     * @description If true, (initialize, reset) all indexes of image, video information
     * @private
     */
    _componentsInfoInit: !0,
    _componentsInfoReset: !1,
    /**
     * @description Plugins array with "active" method.
     * "activePlugins" runs the "add" method when creating the editor.
     */
    activePlugins: null,
    /**
     * @description Information of tags that should maintain HTML structure, style, class name, etc. (In use by "math" plugin)
     * When inserting "html" such as paste, it is executed on the "html" to be inserted. (core.cleanHTML)
     * Basic Editor Actions:
     * 1. All classes not starting with "__se__" or "se-" in the editor are removed.
     * 2. The style of all tags except the "span" tag is removed from the editor.
     * "managedTagsInfo" structure ex:
     * managedTagsInfo: {
     *   query: '.__se__xxx, se-xxx'
     *   map: {
     *     '__se__xxx': method.bind(core),
     *     'se-xxx': method.bind(core),
     *   }
     * }
     * @example
     * Define in the following return format in the "managedTagInfo" function of the plugin.
     * managedTagInfo() => {
     *  return {
     *    className: 'string', // Class name to identify the tag. ("__se__xxx", "se-xxx")
     *    // Change the html of the "element". ("element" is the element found with "className".)
     *    // "method" is executed by binding "core".
     *    method: function (element) {
     *      // this === core
     *      element.innerHTML = // (rendered html);
     *    }
     *  }
     * }
     */
    managedTagsInfo: null,
    /**
     * @description cashing: options.charCounterType === 'byte-html'
     * @private
     */
    _charTypeHTML: !1,
    /**
     * @description Array of "checkFileInfo" functions with the core bound
     * (Plugins with "checkFileInfo" and "resetFileInfo" methods)
     * "fileInfoPlugins" runs the "add" method when creating the editor.
     * "checkFileInfo" method is always call just before the "change" event.
     * @private
     */
    _fileInfoPluginsCheck: null,
    /**
     * @description Array of "resetFileInfo" functions with the core bound
     * (Plugins with "checkFileInfo" and "resetFileInfo" methods)
     * "checkFileInfo" method is always call just before the "functions.setOptions" method.
     * @private
     */
    _fileInfoPluginsReset: null,
    /**
     * @description Variables for file component management
     * @private
     */
    _fileManager: {
      tags: null,
      regExp: null,
      queryString: null,
      pluginRegExp: null,
      pluginMap: null
    },
    /**
     * @description Elements that need to change text or className for each selection change
     * After creating the editor, "activePlugins" are added.
     * @property {Element} STRONG bold button
     * @property {Element} U underline button
     * @property {Element} EM italic button
     * @property {Element} DEL strike button
     * @property {Element} SUB subscript button
     * @property {Element} SUP superscript button
     * @property {Element} OUTDENT outdent button
     * @property {Element} INDENT indent button
     */
    commandMap: {},
    /**
     * @description CSS properties related to style tags 
     * @private
     */
    _commandMapStyles: {
      STRONG: ["font-weight"],
      U: ["text-decoration"],
      EM: ["font-style"],
      DEL: ["text-decoration"]
    },
    /**
     * @description Style button related to edit area
     * @property {Element} fullScreen fullScreen button element
     * @property {Element} showBlocks showBlocks button element
     * @property {Element} codeView codeView button element
     * @private
     */
    _styleCommandMap: null,
    /**
     * @private
     */
    _cleanStyleRegExp: {
      div: new f.RegExp("\\s*[^-a-zA-Z](.+)\\s*:[^;]+(?!;)*", "ig"),
      span: new f.RegExp("\\s*[^-a-zA-Z](font-family|font-size|color|background-color)\\s*:[^;]+(?!;)*", "ig"),
      format: new f.RegExp("\\s*[^-a-zA-Z](text-align|margin-left|margin-right|width|height|line-height)\\s*:[^;]+(?!;)*", "ig"),
      fontSizeUnit: new f.RegExp("\\d+" + i.fontSizeUnit + "$", "i")
    },
    /**
     * @description Variables used internally in editor operation
     * @property {Boolean} isCodeView State of code view
     * @property {Boolean} isFullScreen State of full screen
     * @property {Number} innerHeight_fullScreen InnerHeight in editor when in full screen
     * @property {Number} resizeClientY Remember the vertical size of the editor before resizing the editor (Used when calculating during resize operation)
     * @property {Number} tabSize Indent size of tab (4)
     * @property {Number} codeIndent Indent size of Code view mode (2)
     * @property {Number} minResizingSize Minimum size of editing area when resized {Number} (.se-wrapper-inner {min-height: 65px;} || 65)
     * @property {Array} currentNodes  An array of the current cursor's node structure
     * @private
     */
    _variable: {
      isChanged: !1,
      isCodeView: !1,
      isFullScreen: !1,
      innerHeight_fullScreen: 0,
      resizeClientY: 0,
      tabSize: 4,
      codeIndent: 2,
      minResizingSize: n.getNumber(e.element.wysiwygFrame.style.minHeight || "65", 0),
      currentNodes: [],
      currentNodesMap: [],
      _range: null,
      _selectionNode: null,
      _originCssText: e.element.topArea.style.cssText,
      _bodyOverflow: "",
      _editorAreaOriginCssText: "",
      _wysiwygOriginCssText: "",
      _codeOriginCssText: "",
      _fullScreenAttrs: { sticky: !1, balloon: !1, inline: !1 },
      _lineBreakComp: null,
      _lineBreakDir: ""
    },
    /**
     * @description Temp variable for set line attrs
     * @private
     */
    _formatAttrsTemp: null,
    /**
     * @description Save the current buttons states to "allCommandButtons" object
     * @private
     */
    _saveButtonStates: function() {
      this.allCommandButtons || (this.allCommandButtons = {});
      const s = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
      for (let r = 0, c, p; r < s.length; r++)
        c = s[r], p = c.getAttribute("data-command"), this.allCommandButtons[p] = c;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const s = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let r = 0, c, p, m; r < s.length; r++)
          c = s[r], p = c.getAttribute("data-command"), m = this.allCommandButtons[p], m && (c.parentElement.replaceChild(m, c), this.context.tool[p] && (this.context.tool[p] = m));
      }
    },
    /**
     * @description If the plugin is not added, add the plugin and call the 'add' function.
     * If the plugin is added call callBack function.
     * @param {String} pluginName The name of the plugin to call
     * @param {function} callBackFunction Function to be executed immediately after module call
     * @param {Element|null} _target Plugin target button (This is not necessary if you have a button list when creating the editor)
     */
    callPlugin: function(s, r, c) {
      if (c = c || t[s], this.plugins[s])
        this.initPlugins[s] ? typeof this._targetPlugins[s] == "object" && c && this.initMenuTarget(s, c, this._targetPlugins[s]) : (this.plugins[s].add(this, c), this.initPlugins[s] = !0);
      else throw Error('[SUNEDITOR.core.callPlugin.fail] The called plugin does not exist or is in an invalid format. (pluginName:"' + s + '")');
      this.plugins[s].active && !this.commandMap[s] && c && (this.commandMap[s] = c, this.activePlugins.push(s)), typeof r == "function" && r();
    },
    /**
     * @description If the module is not added, add the module and call the 'add' function
     * @param {Array} moduleArray module object's Array [dialog, resizing]
     */
    addModule: function(s) {
      for (let r = 0, c = s.length, p; r < c; r++)
        p = s[r].name, this.plugins[p] || (this.plugins[p] = s[r]), this.initPlugins[p] || (this.initPlugins[p] = !0, typeof this.plugins[p].add == "function" && this.plugins[p].add(this));
    },
    /**
     * @description Gets the current editor-relative scroll offset.
     * @returns {Object} {top, left}
     */
    getGlobalScrollOffset: function() {
      let s = 0, r = 0, c = e.element.topArea;
      for (; c; )
        s += c.scrollTop, r += c.scrollLeft, c = c.parentElement;
      for (c = this._shadowRoot ? this._shadowRoot.host : null; c; )
        s += c.scrollTop, r += c.scrollLeft, c = c.parentElement;
      return {
        top: s,
        left: r
      };
    },
    /**
     * @description Method for managing submenu element.
     * You must add the "submenu" element using the this method at custom plugin.
     * @param {String} pluginName Plugin name
     * @param {Element|null} target Target button
     * @param {Element} menu Submenu element
     */
    initMenuTarget: function(s, r, c) {
      r ? (e.element._menuTray.appendChild(c), this._targetPlugins[s] = !0, this._menuTray[r.getAttribute("data-command")] = c) : this._targetPlugins[s] = c;
    },
    /**
     * @description Enable submenu
     * @param {Element} element Submenu's button element to call
     */
    submenuOn: function(s) {
      this._bindedSubmenuOff && this._bindedSubmenuOff(), this._bindControllersOff && this.controllersOff();
      const r = this._submenuName = s.getAttribute("data-command"), c = this.submenu = this._menuTray[r];
      this.submenuActiveButton = s, this._setMenuPosition(s, c), this._bindedSubmenuOff = this.submenuOff.bind(this), this.addDocEvent("mousedown", this._bindedSubmenuOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
    },
    /**
     * @description Disable submenu
     */
    submenuOff: function() {
      this.removeDocEvent("mousedown", this._bindedSubmenuOff), this._bindedSubmenuOff = null, this.submenu && (this._submenuName = "", this.submenu.style.display = "none", this.submenu = null, n.removeClass(this.submenuActiveButton, "on"), this.submenuActiveButton = null, this._notHideToolbar = !1), this._antiBlur = !1;
    },
    /**
     * @description Disable more layer
     */
    moreLayerOff: function() {
      if (this._moreLayerActiveButton) {
        const s = e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command"));
        s.style.display = "none", n.removeClass(this._moreLayerActiveButton, "on"), this._moreLayerActiveButton = null;
      }
    },
    /**
     * @description Enable container
     * @param {Element} element Container's button element to call
     */
    containerOn: function(s) {
      this._bindedContainerOff && this._bindedContainerOff();
      const r = this._containerName = s.getAttribute("data-command"), c = this.container = this._menuTray[r];
      this.containerActiveButton = s, this._setMenuPosition(s, c), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
    },
    /**
     * @description Disable container
     */
    containerOff: function() {
      this.removeDocEvent("mousedown", this._bindedContainerOff), this._bindedContainerOff = null, this.container && (this._containerName = "", this.container.style.display = "none", this.container = null, n.removeClass(this.containerActiveButton, "on"), this.containerActiveButton = null, this._notHideToolbar = !1), this._antiBlur = !1;
    },
    /**
     * @description Set the menu position. (submenu, container)
     * @param {*} element Button element
     * @param {*} menu Menu element
     * @private
     */
    _setMenuPosition: function(s, r) {
      r.style.visibility = "hidden", r.style.display = "block", r.style.height = "", n.addClass(s, "on");
      const c = this.context.element.toolbar, p = c.offsetWidth, m = v._getEditorOffsets(e.element.toolbar), g = r.offsetWidth, h = s.parentElement.offsetLeft + 3;
      if (i.rtl) {
        const A = s.offsetWidth, q = g > A ? g - A : 0, Z = q > 0 ? 0 : A - g;
        r.style.left = h - q + Z + "px", m.left > v._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const A = p <= g ? 0 : p - (h + g);
        A < 0 ? r.style.left = h + A + "px" : r.style.left = h + "px";
      }
      let _ = 0, C = s;
      for (; C && C !== c; )
        _ += C.offsetTop, C = C.offsetParent;
      const y = _;
      this._isBalloon ? _ += c.offsetTop + s.offsetHeight : _ -= s.offsetHeight;
      const S = m.top, V = r.offsetHeight, T = this.getGlobalScrollOffset().top, z = f.innerHeight - (S - T + y + s.parentElement.offsetHeight);
      if (z < V) {
        let A = -1 * (V - y + 3);
        const q = S - T + A, Z = V + (q < 0 ? q : 0);
        Z > z ? (r.style.height = Z + "px", A = -1 * (Z - y + 3)) : (r.style.height = z + "px", A = y + s.parentElement.offsetHeight), r.style.top = A + "px";
      } else
        r.style.top = y + s.parentElement.offsetHeight + "px";
      r.style.visibility = "";
    },
    /**
     * @description Show controller at editor area (controller elements, function, "controller target element(@Required)", "controller name(@Required)", etc..)
     * @param {*} arguments controller elements, functions..
     */
    controllersOn: function() {
      this._bindControllersOff && this._bindControllersOff(), this.controllerArray = [];
      for (let s = 0, r; s < arguments.length; s++)
        if (r = arguments[s], !!r) {
          if (typeof r == "string") {
            this.currentControllerName = r;
            continue;
          }
          if (typeof r == "function") {
            this.controllerArray.push(r);
            continue;
          }
          if (!n.hasClass(r, "se-controller")) {
            this.currentControllerTarget = r, this.currentFileComponentInfo = this.getFileComponent(r);
            continue;
          }
          r.style && (r.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(r) === -1 && (r.addEventListener("mousedown", function(c) {
            c.preventDefault(), c.stopPropagation();
          }), this._shadowRootControllerEventTarget.push(r))), this.controllerArray.push(r);
        }
      this._bindControllersOff = this.controllersOff.bind(this), this.addDocEvent("mousedown", this._bindControllersOff, !1), this.addDocEvent("keydown", this._bindControllersOff, !1), this._antiBlur = !0, typeof k.showController == "function" && k.showController(this.currentControllerName, this.controllerArray, this);
    },
    /**
     * @description Hide controller at editor area (link button, image resize button..)
     * @param {KeyboardEvent|MouseEvent|null} e Event object when called from mousedown and keydown events registered in "core.controllersOn"
     */
    controllersOff: function(s) {
      this._lineBreaker.style.display = "none";
      const r = this.controllerArray.length;
      if (s && s.target && r > 0) {
        for (let c = 0; c < r; c++)
          if (typeof this.controllerArray[c].contains == "function" && this.controllerArray[c].contains(s.target)) return;
      }
      if (!(this._fileManager.pluginRegExp.test(this.currentControllerName) && s && s.type === "keydown" && s.keyCode !== 27) && (e.element.lineBreaker_t.style.display = e.element.lineBreaker_b.style.display = "none", this._variable._lineBreakComp = null, this.currentControllerName = "", this.currentControllerTarget = null, this.currentFileComponentInfo = null, this.effectNode = null, !!this._bindControllersOff)) {
        if (this.removeDocEvent("mousedown", this._bindControllersOff), this.removeDocEvent("keydown", this._bindControllersOff), this._bindControllersOff = null, r > 0) {
          for (let c = 0; c < r; c++)
            typeof this.controllerArray[c] == "function" ? this.controllerArray[c]() : this.controllerArray[c].style.display = "none";
          this.controllerArray = [];
        }
        this._antiBlur = !1;
      }
    },
    /**
     * @description Specify the position of the controller.
     * @param {Element} controller Controller element.
     * @param {Element} referEl Element that is the basis of the controller's position.
     * @param {String} position Type of position ("top" | "bottom")
     * When using the "top" position, there should not be an arrow on the controller.
     * When using the "bottom" position there should be an arrow on the controller.
     * @param {Object} addOffset These are the left and top values that need to be added specially. 
     * This argument is required. - {left: 0, top: 0}
     * Please enter the value based on ltr mode.
     * Calculated automatically in rtl mode.
     */
    setControllerPosition: function(s, r, c, p) {
      i.rtl && (p.left *= -1);
      const m = n.getOffset(r, e.element.wysiwygFrame);
      s.style.visibility = "hidden", s.style.display = "block";
      const g = c === "top" ? -(s.offsetHeight + 2) : r.offsetHeight + 12;
      s.style.top = m.top + g + p.top + "px";
      const h = m.left - e.element.wysiwygFrame.scrollLeft + p.left, _ = s.offsetWidth, C = r.offsetWidth, y = n.hasClass(s.firstElementChild, "se-arrow") ? s.firstElementChild : null;
      if (i.rtl) {
        const S = _ > C ? _ - C : 0, V = S > 0 ? 0 : C - _;
        s.style.left = h - S + V + "px", S > 0 && y && (y.style.left = (_ - 14 < 10 + S ? _ - 14 : 10 + S) + "px");
        const T = e.element.wysiwygFrame.offsetLeft - s.offsetLeft;
        T > 0 && (s.style.left = "0px", y && (y.style.left = T + "px"));
      } else {
        s.style.left = h + "px";
        const S = e.element.wysiwygFrame.offsetWidth - (s.offsetLeft + _);
        S < 0 ? (s.style.left = s.offsetLeft + S + "px", y && (y.style.left = 20 - S + "px")) : y && (y.style.left = "20px");
      }
      s.style.visibility = "";
    },
    /**
     * @description javascript execCommand
     * @param {String} command javascript execCommand function property
     * @param {Boolean|undefined} showDefaultUI javascript execCommand function property
     * @param {String|undefined} value javascript execCommand function property
     */
    execCommand: function(s, r, c) {
      this._wd.execCommand(s, r, s === "formatBlock" ? "<" + c + ">" : c), this.history.push(!0);
    },
    /**
     * @description Focus to wysiwyg area using "native focus function"
     */
    nativeFocus: function() {
      this.__focus(), this._editorRange();
    },
    /**
     * @description Focus method
     * @private
     */
    __focus: function() {
      const s = n.getParentElement(this.getSelectionNode(), "figcaption");
      s ? s.focus() : e.element.wysiwyg.focus();
    },
    /**
     * @description Focus to wysiwyg area
     */
    focus: function() {
      if (e.element.wysiwygFrame.style.display !== "none") {
        if (i.iframe)
          this.nativeFocus();
        else
          try {
            const s = this.getRange();
            if (s.startContainer === s.endContainer && n.isWysiwygDiv(s.startContainer)) {
              const r = s.commonAncestorContainer.children[s.startOffset];
              if (!n.isFormatElement(r) && !n.isComponent(r)) {
                const c = n.createElement(i.defaultTag), p = n.createElement("BR");
                c.appendChild(p), e.element.wysiwyg.insertBefore(c, r), this.setRange(p, 0, p, 0);
                return;
              }
            }
            this.setRange(s.startContainer, s.startOffset, s.endContainer, s.endOffset);
          } catch {
            this.nativeFocus();
          }
        v._applyTagEffects(), this._isBalloon && v._toggleToolbarBalloon();
      }
    },
    /**
     * @description If "focusEl" is a component, then that component is selected; if it is a format element, the last text is selected
     * If "focusEdge" is null, then selected last element
     * @param {Element|null} focusEl Focus element
     */
    focusEdge: function(s) {
      s || (s = e.element.wysiwyg.lastElementChild);
      const r = this.getFileComponent(s);
      r ? this.selectComponent(r.target, r.pluginName) : s ? (s = n.getChildElement(s, function(c) {
        return c.childNodes.length === 0 || c.nodeType === 3;
      }, !0), s ? this.setRange(s, s.textContent.length, s, s.textContent.length) : this.nativeFocus()) : this.focus();
    },
    /**
     * @description Focusout to wysiwyg area (.blur())
     */
    blur: function() {
      i.iframe ? e.element.wysiwygFrame.blur() : e.element.wysiwyg.blur();
    },
    /**
     * @description Set current editor's range object and return.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @returns {Object} Range object.
     */
    setRange: function(s, r, c, p) {
      if (!s || !c) return;
      r > s.textContent.length && (r = s.textContent.length), p > c.textContent.length && (p = c.textContent.length), n.isFormatElement(s) && (s = s.childNodes[r] || s.childNodes[r - 1] || s, r = r > 0 ? s.nodeType === 1 ? 1 : s.textContent ? s.textContent.length : 0 : 0), n.isFormatElement(c) && (c = c.childNodes[p] || c.childNodes[p - 1] || c, p = p > 0 ? c.nodeType === 1 ? 1 : c.textContent ? c.textContent.length : 0 : 0);
      const m = this._wd.createRange();
      try {
        m.setStart(s, r), m.setEnd(c, p);
      } catch (h) {
        console.warn("[SUNEDITOR.core.focus.error] " + h), this.nativeFocus();
        return;
      }
      const g = this.getSelection();
      return g.removeAllRanges && g.removeAllRanges(), g.addRange(m), this._rangeInfo(m, this.getSelection()), i.iframe && this.__focus(), m;
    },
    /**
     * @description Remove range object and button effect
     */
    removeRange: function() {
      this._variable._range = null, this._variable._selectionNode = null, this.hasFocus && this.getSelection().removeAllRanges(), this._setKeyEffect([]);
    },
    /**
     * @description Get current editor's range object
     * @returns {Object}
     */
    getRange: function() {
      const s = this._variable._range || this._createDefaultRange(), r = this.getSelection();
      if (s.collapsed === r.isCollapsed || !e.element.wysiwyg.contains(r.focusNode)) return s;
      if (r.rangeCount > 0)
        return this._variable._range = r.getRangeAt(0), this._variable._range;
      {
        const c = r.anchorNode, p = r.focusNode, m = r.anchorOffset, g = r.focusOffset, h = n.compareElements(c, p), _ = h.ancestor && (h.result === 0 ? m <= g : h.result > 1);
        return this.setRange(
          _ ? c : p,
          _ ? m : g,
          _ ? p : c,
          _ ? g : m
        );
      }
    },
    /**
     * @description If the "range" object is a non-editable area, add a line at the top of the editor and update the "range" object.
     * Returns a new "range" or argument "range".
     * @param {Object} range core.getRange()
     * @param {Element|null} container If there is "container" argument, it creates a line in front of the container.
     * @returns {Object} range
     */
    getRange_addLine: function(s, r) {
      if (this._selectionVoid(s)) {
        const c = e.element.wysiwyg, p = n.createElement(i.defaultTag);
        p.innerHTML = "<br>", c.insertBefore(p, r && r !== c ? r.nextElementSibling : c.firstElementChild), this.setRange(p.firstElementChild, 0, p.firstElementChild, 1), s = this._variable._range;
      }
      return s;
    },
    /**
     * @description Get window selection obejct
     * @returns {Object}
     */
    getSelection: function() {
      const s = this._shadowRoot && this._shadowRoot.getSelection ? this._shadowRoot.getSelection() : this._ww.getSelection();
      return !this._variable._range && !e.element.wysiwyg.contains(s.focusNode) && (s.removeAllRanges(), s.addRange(this._createDefaultRange())), s;
    },
    /**
     * @description Get current select node
     * @returns {Node}
     */
    getSelectionNode: function() {
      if (e.element.wysiwyg.contains(this._variable._selectionNode) || this._editorRange(), !this._variable._selectionNode) {
        const s = n.getChildElement(e.element.wysiwyg.firstChild, function(r) {
          return r.childNodes.length === 0 || r.nodeType === 3;
        }, !1);
        if (!s)
          this._editorRange();
        else
          return this._variable._selectionNode = s, s;
      }
      return this._variable._selectionNode;
    },
    /**
     * @description Saving the range object and the currently selected node of editor
     * @private
     */
    _editorRange: function() {
      const s = this._wd.activeElement;
      if (n.isInputElement(s))
        return this._variable._selectionNode = s, s;
      const r = this.getSelection();
      if (!r) return null;
      let c = null;
      r.rangeCount > 0 ? c = r.getRangeAt(0) : c = this._createDefaultRange(), this._rangeInfo(c, r);
    },
    /**
     * @description Set "range" and "selection" info.
     * @param {Object} range range object.
     * @param {Object} selection selection object.
     */
    _rangeInfo: function(s, r) {
      let c = null;
      this._variable._range = s, s.collapsed ? n.isWysiwygDiv(s.commonAncestorContainer) ? c = s.commonAncestorContainer.children[s.startOffset] || s.commonAncestorContainer : c = s.commonAncestorContainer : c = r.extentNode || r.anchorNode, this._variable._selectionNode = c;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const s = e.element.wysiwyg, r = this._wd.createRange();
      let c = s.firstElementChild, p = null;
      return c ? (p = c.firstChild, p || (p = n.createElement("BR"), c.appendChild(p))) : (c = n.createElement(i.defaultTag), p = n.createElement("BR"), c.appendChild(p), s.appendChild(c)), r.setStart(p, 0), r.setEnd(p, 0), r;
    },
    /**
     * @description Returns true if there is no valid "selection".
     * @param {Object} range core.getRange()
     * @returns {Object} range
     * @private
     */
    _selectionVoid: function(s) {
      const r = s.commonAncestorContainer;
      return n.isWysiwygDiv(s.startContainer) && n.isWysiwygDiv(s.endContainer) || /FIGURE/i.test(r.nodeName) || this._fileManager.regExp.test(r.nodeName) || n.isMediaComponent(r);
    },
    /**
     * @description Reset range object to text node selected status.
     * @returns {Boolean} Returns false if there is no valid selection.
     * @private
     */
    _resetRangeToTextNode: function() {
      const s = this.getRange();
      if (this._selectionVoid(s)) return !1;
      const r = s.collapsed;
      let c = s.startContainer, p = s.startOffset, m = s.endContainer, g = s.endOffset, h, _, C;
      if (n.isFormatElement(c))
        for (c.childNodes[p] ? (c = c.childNodes[p] || c, p = 0) : (c = c.lastChild || c, p = c.textContent.length); c && c.nodeType === 1 && c.firstChild; )
          c = c.firstChild || c, p = 0;
      if (n.isFormatElement(m)) {
        for (m = m.childNodes[g] || m.lastChild || m; m && m.nodeType === 1 && m.lastChild; )
          m = m.lastChild;
        g = r ? 0 : m.textContent.length;
      }
      if (h = n.isWysiwygDiv(c) ? e.element.wysiwyg.firstChild : c, _ = p, n.isBreak(h) || h.nodeType === 1 && h.childNodes.length > 0) {
        const y = n.isBreak(h);
        if (!y) {
          for (; h && !n.isBreak(h) && h.nodeType === 1; )
            h = h.childNodes[_] || h.nextElementSibling || h.nextSibling, _ = 0;
          let S = n.getFormatElement(h, null);
          S === n.getRangeFormatElement(S, null) && (S = n.createElement(n.getParentElement(h, n.isCell) ? "DIV" : i.defaultTag), h.parentNode.insertBefore(S, h), S.appendChild(h));
        }
        if (n.isBreak(h)) {
          const S = n.createTextNode(n.zeroWidthSpace);
          h.parentNode.insertBefore(S, h), h = S, y && c === m && (m = h, g = 1);
        }
      }
      if (c = h, p = _, h = n.isWysiwygDiv(m) ? e.element.wysiwyg.lastChild : m, _ = g, n.isBreak(h) || h.nodeType === 1 && h.childNodes.length > 0) {
        const y = n.isBreak(h);
        if (!y) {
          for (; h && !n.isBreak(h) && h.nodeType === 1 && (C = h.childNodes, C.length !== 0); )
            h = C[_ > 0 ? _ - 1 : _] || !/FIGURE/i.test(C[0].nodeName) ? C[0] : h.previousElementSibling || h.previousSibling || c, _ = _ > 0 ? h.textContent.length : _;
          let S = n.getFormatElement(h, null);
          S === n.getRangeFormatElement(S, null) && (S = n.createElement(n.isCell(S) ? "DIV" : i.defaultTag), h.parentNode.insertBefore(S, h), S.appendChild(h));
        }
        if (n.isBreak(h)) {
          const S = n.createTextNode(n.zeroWidthSpace);
          h.parentNode.insertBefore(S, h), h = S, _ = 1, y && !h.previousSibling && n.removeItem(m);
        }
      }
      return m = h, g = _, this.setRange(c, p, m, g), !0;
    },
    /**
     * @description Returns a "formatElement"(util.isFormatElement) array from the currently selected range.
     * @param {Function|null} validation The validation function. (Replaces the default validation function-util.isFormatElement(current))
     * @returns {Array}
     */
    getSelectedElements: function(s) {
      if (!this._resetRangeToTextNode()) return [];
      let r = this.getRange();
      if (n.isWysiwygDiv(r.startContainer)) {
        const A = e.element.wysiwyg.children;
        if (A.length === 0) return [];
        this.setRange(A[0], 0, A[A.length - 1], A[A.length - 1].textContent.trim().length), r = this.getRange();
      }
      const c = r.startContainer, p = r.endContainer, m = r.commonAncestorContainer, g = n.getListChildren(m, function(A) {
        return s ? s(A) : n.isFormatElement(A);
      });
      if (!n.isWysiwygDiv(m) && !n.isRangeFormatElement(m) && g.unshift(n.getFormatElement(m, null)), c === p || g.length === 1) return g;
      let h = n.getFormatElement(c, null), _ = n.getFormatElement(p, null), C = null, y = null;
      const S = function(A) {
        return n.isTable(A) ? /^TABLE$/i.test(A.nodeName) : !0;
      };
      let V = n.getRangeFormatElement(h, S), T = n.getRangeFormatElement(_, S);
      n.isTable(V) && n.isListCell(V.parentNode) && (V = V.parentNode), n.isTable(T) && n.isListCell(T.parentNode) && (T = T.parentNode);
      const z = V === T;
      for (let A = 0, q = g.length, Z; A < q; A++) {
        if (Z = g[A], h === Z || !z && Z === V) {
          C = A;
          continue;
        }
        if (_ === Z || !z && Z === T) {
          y = A;
          break;
        }
      }
      return C === null && (C = 0), y === null && (y = g.length - 1), g.slice(C, y + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(s) {
      const r = this.getRange().commonAncestorContainer, c = n.getParentElement(r, n.isComponent), p = n.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(m) {
        const g = this.getParentElement(m, this.isComponent);
        return this.isFormatElement(m) && (!g || g === c) || this.isComponent(m) && !this.getFormatElement(m);
      }).bind(n));
      if (s) {
        for (let m = 0, g = p.length; m < g; m++)
          for (let h = m - 1; h >= 0; h--)
            if (p[h].contains(p[m])) {
              p.splice(m, 1), m--, g--;
              break;
            }
      }
      return p;
    },
    /**
     * @description Determine if this offset is the edge offset of container
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String|undefined} dir Select check point - Both edge, Front edge or End edge. ("start": Front edge, "end": End edge, undefined: Both edge)
     * @returns {Boolean}
     */
    isEdgePoint: function(s, r, c) {
      return s.nodeType === 1 && !s.textContent.length ? !0 : c !== "end" && r === 0 || (!c || c !== "start") && !s.nodeValue && r === 1 || (!c || c === "end") && !!s.nodeValue && r === s.nodeValue.length;
    },
    /**
     * @description Check if the container and offset values are the edges of the format tag
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String} dir Select check point - "start": Front edge, "end": End edge, undefined: Both edge.
     * @returns {Array|null}
     * @private
     */
    _isEdgeFormat: function(s, r, c) {
      if (!this.isEdgePoint(s, r, c)) return !1;
      const p = [];
      for (c = c === "start" ? "previousSibling" : "nextSibling"; s && !n.isFormatElement(s) && !n.isWysiwygDiv(s); )
        if (!s[c] || n.isBreak(s[c]) && !s[c][c])
          s.nodeType === 1 && p.push(s.cloneNode(!1)), s = s.parentNode;
        else
          return null;
      return p;
    },
    /**
     * @description Show loading box
     */
    showLoading: function() {
      e.element.loading.style.display = "block";
    },
    /**
     * @description Close loading box
     */
    closeLoading: function() {
      e.element.loading.style.display = "none";
    },
    /**
     * @description Append format element to sibling node of argument element.
     * If the "formatNodeName" argument value is present, the tag of that argument value is inserted,
     * If not, the currently selected format tag is inserted.
     * @param {Element} element Insert as siblings of that element
     * @param {String|Element|null} formatNode Node name or node obejct to be inserted
     * @returns {Element}
     */
    appendFormatTag: function(s, r) {
      if (!s || !s.parentNode) return null;
      const c = n.getFormatElement(this.getSelectionNode(), null);
      let p = null;
      if (!n.isFormatElement(s) && n.isFreeFormatElement(c || s.parentNode))
        p = n.createElement("BR");
      else {
        const m = r ? typeof r == "string" ? r : r.nodeName : n.isFormatElement(c) && !n.isRangeFormatElement(c) && !n.isFreeFormatElement(c) ? c.nodeName : i.defaultTag;
        p = n.createElement(m), p.innerHTML = "<br>", (r && typeof r != "string" || !r && n.isFormatElement(c)) && n.copyTagAttributes(p, r || c, ["id"]);
      }
      return n.isCell(s) ? s.insertBefore(p, s.nextElementSibling) : s.parentNode.insertBefore(p, s.nextElementSibling), p;
    },
    /**
     * @description The method to insert a element and return. (used elements : table, hr, image, video)
     * If "element" is "HR", insert and return the new line.
     * @param {Element} element Element to be inserted
     * @param {Boolean} notHistoryPush When true, it does not update the history stack and the selection object and return EdgeNodes (util.getEdgeChildNodes)
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} notSelect If true, Do not automatically select the inserted component.
     * @returns {Element}
     */
    insertComponent: function(s, r, c, p) {
      if (this.isReadOnly || c && !this.checkCharCount(s, null))
        return null;
      const m = this.removeNode();
      this.getRange_addLine(this.getRange(), m.container);
      let g = null, h = this.getSelectionNode(), _ = n.getFormatElement(h, null);
      if (n.isListCell(_))
        this.insertNode(s, h === _ ? null : m.container.nextSibling, !1), s.nextSibling || s.parentNode.appendChild(n.createElement("BR"));
      else {
        if (this.getRange().collapsed && (m.container.nodeType === 3 || n.isBreak(m.container))) {
          const C = n.getParentElement(m.container, (function(y) {
            return this.isRangeFormatElement(y);
          }).bind(n));
          g = n.splitElement(m.container, m.offset, C ? n.getElementDepth(C) + 1 : 0), g && (_ = g.previousSibling);
        }
        this.insertNode(s, n.isRangeFormatElement(_) ? null : _, !1), _ && n.onlyZeroWidthSpace(_) && n.removeItem(_);
      }
      if (!p) {
        this.setRange(s, 0, s, 0);
        const C = this.getFileComponent(s);
        C ? this.selectComponent(C.target, C.pluginName) : g && (g = n.getEdgeChildNodes(g, null).sc || g, this.setRange(g, 0, g, 0));
      }
      return r || this.history.push(1), g || s;
    },
    /**
     * @description Gets the file component and that plugin name
     * return: {target, component, pluginName} | null
     * @param {Element} element Target element (figure tag, component div, file tag)
     * @returns {Object|null}
     */
    getFileComponent: function(s) {
      if (!this._fileManager.queryString || !s) return null;
      let r, c;
      return (/^FIGURE$/i.test(s.nodeName) || /se-component/.test(s.className)) && (r = s.querySelector(this._fileManager.queryString)), !r && s.nodeName && this._fileManager.regExp.test(s.nodeName) && (r = s), r && (c = this._fileManager.pluginMap[r.nodeName.toLowerCase()], c) ? {
        target: r,
        component: n.getParentElement(r, n.isComponent),
        pluginName: c
      } : null;
    },
    /**
     * @description The component(image, video) is selected and the resizing module is called.
     * @param {Element} element Element tag (img, iframe, video)
     * @param {String} pluginName Plugin name (image, video)
     */
    selectComponent: function(s, r) {
      if (n.isUneditableComponent(n.getParentElement(s, n.isComponent)) || n.isUneditableComponent(s)) return !1;
      this.hasFocus || this.focus();
      const c = this.plugins[r];
      c && f.setTimeout((function() {
        typeof c.select == "function" && this.callPlugin(r, c.select.bind(this, s), null), this._setComponentLineBreaker(s);
      }).bind(this));
    },
    /**
     * @description Set line breaker of component
     * @param {Element} element Element tag (img, iframe, video)
     * @private
     */
    _setComponentLineBreaker: function(s) {
      this._lineBreaker.style.display = "none";
      const r = n.getParentElement(s, n.isComponent), c = e.element.lineBreaker_t.style, p = e.element.lineBreaker_b.style, m = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : s, g = n.isListCell(r.parentNode);
      let h, _, C;
      (g ? !r.previousSibling : !n.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, _ = e.element.wysiwyg.scrollTop, h = n.getOffset(s, e.element.wysiwygFrame).top + _, C = m.offsetWidth / 2 / 2, c.top = h - _ - 12 + "px", c.left = n.getOffset(m).left + C + "px", c.display = "block") : c.display = "none", (g ? !r.nextSibling : !n.isFormatElement(r.nextElementSibling)) ? (h || (this._variable._lineBreakComp = r, _ = e.element.wysiwyg.scrollTop, h = n.getOffset(s, e.element.wysiwygFrame).top + _, C = m.offsetWidth / 2 / 2), p.top = h + m.offsetHeight - _ - 12 + "px", p.left = n.getOffset(m).left + m.offsetWidth - C - 24 + "px", p.display = "block") : p.display = "none";
    },
    _checkDuplicateNode: function(s, r) {
      (function c(p) {
        u._dupleCheck(p, r);
        const m = p.childNodes;
        for (let g = 0, h = m.length; g < h; g++)
          c(m[g]);
      })(s);
    },
    _dupleCheck: function(s, r) {
      if (!n.isTextStyleElement(s)) return;
      const c = (s.style.cssText.match(/[^;]+;/g) || []).map(function(g) {
        return g.trim();
      }), p = s.nodeName;
      if (/^span$/i.test(p) && c.length === 0) return s;
      let m = !1;
      return function g(h) {
        if (!(n.isWysiwygDiv(h) || !n.isTextStyleElement(h))) {
          if (h.nodeName === p) {
            m = !0;
            const _ = h.style.cssText.match(/[^;]+;/g) || [];
            for (let C = 0, y = _.length, S; C < y; C++)
              (S = c.indexOf(_[C].trim())) > -1 && c.splice(S, 1);
            for (let C = 0, y = h.classList.length; C < y; C++)
              s.classList.remove(h.classList[C]);
          }
          g(h.parentElement);
        }
      }(r), m && ((s.style.cssText = c.join(" ")) || (s.setAttribute("style", ""), s.removeAttribute("style")), s.attributes.length || s.setAttribute("data-se-duple", "true")), s;
    },
    /**
     * @description Delete selected node and insert argument value node and return.
     * If the "afterNode" exists, it is inserted after the "afterNode"
     * Inserting a text node merges with both text nodes on both sides and returns a new "{ container, startOffset, endOffset }".
     * @param {Node} oNode Element to be inserted
     * @param {Node|null} afterNode If the node exists, it is inserted after the node
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @returns {Object|Node|null}
     */
    insertNode: function(s, r, c) {
      if (this.isReadOnly || c && !this.checkCharCount(s, null))
        return null;
      let p = null, m = this.getRange(), g = n.isListCell(m.commonAncestorContainer) ? m.commonAncestorContainer : n.getFormatElement(this.getSelectionNode(), null), h = n.isListCell(g) && (n.isListCell(s) || n.isList(s)), _, C, y, S = null;
      const V = n.isFreeFormatElement(g), T = !V && (n.isFormatElement(s) || n.isRangeFormatElement(s)) || n.isComponent(s);
      if (h && (y = r || n.isList(s) ? g.lastChild : g.nextElementSibling, S = n.isList(s) ? g : (y || g).parentNode), !r && (T || n.isComponent(s) || n.isMedia(s))) {
        const P = this.isEdgePoint(m.endContainer, m.endOffset, "end"), I = this.removeNode(), O = I.container, N = O === I.prevContainer && m.collapsed ? null : I.prevContainer;
        if (h && N)
          if (S = N.nodeType === 3 ? N.parentNode : N, S.contains(O)) {
            let M = !0;
            for (y = O; y.parentNode && y.parentNode !== S; )
              y = y.parentNode, M = !1;
            M && O === N && (y = y.nextSibling);
          } else
            y = null;
        else if (h && n.isListCell(O) && !g.parentElement)
          g = n.createElement("LI"), S.appendChild(g), O.appendChild(S), y = null;
        else if (O.nodeType === 3 || n.isBreak(O) || h) {
          const M = n.getParentElement(O, (function(w) {
            return this.isRangeFormatElement(w) || this.isListCell(w);
          }).bind(n));
          if (r = n.splitElement(O, I.offset, M ? n.getElementDepth(M) + 1 : 0), !r)
            y = r = g;
          else if (h) {
            if (g.contains(O)) {
              const w = n.isList(g.lastElementChild);
              let D = null;
              P || (D = g.cloneNode(!1), D.appendChild(r.textContent.trim() ? r : n.createTextNode(n.zeroWidthSpace))), w && (D || (D = g.cloneNode(!1), D.appendChild(n.createTextNode(n.zeroWidthSpace))), D.appendChild(g.lastElementChild)), D && (g.parentNode.insertBefore(D, g.nextElementSibling), y = r = D);
            }
          } else
            r = r.previousSibling;
        }
      }
      m = !r && !T ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const z = m.commonAncestorContainer, A = m.startOffset, q = m.endOffset, Z = m.startContainer === z && n.isFormatElement(z), U = Z && (z.childNodes[A] || z.childNodes[0]) || m.startContainer, F = Z && (z.childNodes[q] || z.childNodes[z.childNodes.length - 1]) || m.endContainer;
      if (!h)
        if (r)
          _ = r.parentNode, r = r.nextSibling, C = !0;
        else if (_ = U, U.nodeType === 3 && (_ = U.parentNode), m.collapsed)
          if (z.nodeType === 3)
            z.textContent.length > q ? r = z.splitText(q) : r = z.nextSibling;
          else if (n.isBreak(_))
            r = _, _ = _.parentNode;
          else {
            let P = _.childNodes[A];
            const I = P && P.nodeType === 3 && n.onlyZeroWidthSpace(P) && n.isBreak(P.nextSibling) ? P.nextSibling : P;
            I ? !I.nextSibling && n.isBreak(I) ? (_.removeChild(I), r = null) : r = n.isBreak(I) && !n.isBreak(s) ? I : I.nextSibling : r = null;
          }
        else if (U === F) {
          this.isEdgePoint(F, q) ? r = F.nextSibling : r = F.splitText(q);
          let I = U;
          this.isEdgePoint(U, A) || (I = U.splitText(A)), _.removeChild(I), _.childNodes.length === 0 && T && (_.innerHTML = "<br>");
        } else {
          const I = this.removeNode(), O = I.container, N = I.prevContainer;
          if (O && O.childNodes.length === 0 && T && (n.isFormatElement(O) ? O.innerHTML = "<br>" : n.isRangeFormatElement(O) && (O.innerHTML = "<" + i.defaultTag + "><br></" + i.defaultTag + ">")), n.isListCell(O) && s.nodeType === 3)
            _ = O, r = null;
          else if (!T && N)
            if (_ = N.nodeType === 3 ? N.parentNode : N, _.contains(O)) {
              let M = !0;
              for (r = O; r.parentNode && r.parentNode !== _; )
                r = r.parentNode, M = !1;
              M && O === N && (r = r.nextSibling);
            } else
              r = null;
          else n.isWysiwygDiv(O) && !n.isFormatElement(s) ? (_ = O.appendChild(n.createElement(i.defaultTag)), r = null) : (r = T ? F : O === N ? O.nextSibling : O, _ = !r || !r.parentNode ? z : r.parentNode);
          for (; r && !n.isFormatElement(r) && r.parentNode !== z; )
            r = r.parentNode;
        }
      try {
        if (!h) {
          if ((n.isWysiwygDiv(r) || _ === e.element.wysiwyg.parentNode) && (_ = e.element.wysiwyg, r = null), n.isFormatElement(s) || n.isRangeFormatElement(s) || !n.isListCell(_) && n.isComponent(s)) {
            const P = _;
            if (n.isList(r))
              _ = r, r = null;
            else if (n.isListCell(r))
              _ = r.previousElementSibling || r;
            else if (!C && !r) {
              const I = this.removeNode(), O = I.container.nodeType === 3 ? n.isListCell(n.getFormatElement(I.container, null)) ? I.container : n.getFormatElement(I.container, null) || I.container.parentNode : I.container, N = n.isWysiwygDiv(O) || n.isRangeFormatElement(O);
              _ = N ? O : O.parentNode, r = N ? null : O.nextSibling;
            }
            P.childNodes.length === 0 && _ !== P && n.removeItem(P);
          }
          if (T && !V && !n.isRangeFormatElement(_) && !n.isListCell(_) && !n.isWysiwygDiv(_) && (r = _.nextElementSibling, _ = _.parentNode), n.isWysiwygDiv(_) && (s.nodeType === 3 || n.isBreak(s))) {
            const P = n.createElement(i.defaultTag);
            P.appendChild(s), p = s, s = P;
          }
        }
        if (h ? S.parentNode ? (_ = S, r = y) : (_ = e.element.wysiwyg, r = null) : r = _ === r ? _.lastChild : r, n.isListCell(s) && !n.isList(_)) {
          if (n.isListCell(_))
            r = _.nextElementSibling, _ = _.parentNode;
          else {
            const P = n.createElement("ol");
            _.insertBefore(P, r), _ = P, r = null;
          }
          h = !0;
        }
        if (this._checkDuplicateNode(s, _), _.insertBefore(s, r), h)
          if (n.onlyZeroWidthSpace(g.textContent.trim()))
            n.removeItem(g), s = s.lastChild;
          else {
            const P = n.getArrayItem(g.children, n.isList);
            P && (s !== P ? (s.appendChild(P), s = P.previousSibling) : (_.appendChild(s), s = _), n.onlyZeroWidthSpace(g.textContent.trim()) && n.removeItem(g));
          }
      } catch (P) {
        _.appendChild(s), console.warn("[SUNEDITOR.insertNode.warn] " + P);
      } finally {
        p && (s = p);
        const P = _.querySelectorAll("[data-se-duple]");
        if (P.length > 0)
          for (let I = 0, O = P.length, N, M, w, D; I < O; I++) {
            for (N = P[I], w = N.childNodes, D = N.parentNode; w[0]; )
              M = w[0], D.insertBefore(M, N);
            N === s && (s = M), n.removeItem(N);
          }
        if ((n.isFormatElement(s) || n.isComponent(s)) && U === F) {
          const I = n.getFormatElement(z, null);
          I && I.nodeType === 1 && n.isEmptyLine(I) && n.removeItem(I);
        }
        if (V && (n.isFormatElement(s) || n.isRangeFormatElement(s)) && (s = this._setIntoFreeFormat(s)), !n.isComponent(s)) {
          let I = 1;
          if (s.nodeType === 3)
            I = s.textContent.length, this.setRange(s, I, s, I);
          else if (!n.isBreak(s) && !n.isListCell(s) && n.isFormatElement(_)) {
            let O = null;
            (!s.previousSibling || n.isBreak(s.previousSibling)) && (O = n.createTextNode(n.zeroWidthSpace), s.parentNode.insertBefore(O, s)), (!s.nextSibling || n.isBreak(s.nextSibling)) && (O = n.createTextNode(n.zeroWidthSpace), s.parentNode.insertBefore(O, s.nextSibling)), n._isIgnoreNodeChange(s) && (s = s.nextSibling, I = 0);
          }
          this.setRange(s, I, s, I);
        }
        return s;
      }
    },
    _setIntoFreeFormat: function(s) {
      const r = s.parentNode;
      let c, p;
      for (; n.isFormatElement(s) || n.isRangeFormatElement(s); ) {
        for (c = s.childNodes, p = null; c[0]; ) {
          if (p = c[0], n.isFormatElement(p) || n.isRangeFormatElement(p)) {
            if (this._setIntoFreeFormat(p), !s.parentNode) break;
            c = s.childNodes;
            continue;
          }
          r.insertBefore(p, s);
        }
        s.childNodes.length === 0 && n.removeItem(s), s = n.createElement("BR"), r.insertBefore(s, p.nextSibling);
      }
      return s;
    },
    /**
     * @description Delete the currently selected nodes and reset selection range
     * Returns {container: "the last element after deletion", offset: "offset", prevContainer: "previousElementSibling Of the deleted area"}
     * @returns {Object}
     */
    removeNode: function() {
      this._resetRangeToTextNode();
      const s = this.getRange();
      if (s.startContainer === s.endContainer) {
        const I = n.getParentElement(s.startContainer, n.isMediaComponent);
        if (I) {
          const O = n.createElement("BR"), N = n.createElement(i.defaultTag);
          return N.appendChild(O), n.changeElement(I, N), u.setRange(N, 0, N, 0), this.history.push(!0), {
            container: N,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = s.startOffset === 0, c = u.isEdgePoint(s.endContainer, s.endOffset, "end");
      let p = null, m = null, g = null;
      r && (m = n.getFormatElement(s.startContainer), m && (p = m.previousElementSibling, m = p)), c && (g = n.getFormatElement(s.endContainer), g = g && g.nextElementSibling);
      let h, _ = 0, C = s.startContainer, y = s.endContainer, S = s.startOffset, V = s.endOffset;
      const T = s.commonAncestorContainer.nodeType === 3 && s.commonAncestorContainer.parentNode === C.parentNode ? C.parentNode : s.commonAncestorContainer;
      if (T === C && T === y && (C = T.children[S], y = T.children[V], S = V = 0), !C || !y) return {
        container: T,
        offset: 0
      };
      if (C === y && s.collapsed && C.textContent && n.onlyZeroWidthSpace(C.textContent.substr(S)))
        return {
          container: C,
          offset: S,
          prevContainer: C && C.parentNode ? C : null
        };
      let z = null, A = null;
      const q = n.getListChildNodes(T, null);
      let Z = n.getArrayIndex(q, C), U = n.getArrayIndex(q, y);
      if (q.length > 0 && Z > -1 && U > -1) {
        for (let I = Z + 1, O = C; I >= 0; I--)
          q[I] === O.parentNode && q[I].firstChild === O && S === 0 && (Z = I, O = O.parentNode);
        for (let I = U - 1, O = y; I > Z; I--)
          q[I] === O.parentNode && q[I].nodeType === 1 && (q.splice(I, 1), O = O.parentNode, --U);
      } else {
        if (q.length === 0) {
          if (n.isFormatElement(T) || n.isRangeFormatElement(T) || n.isWysiwygDiv(T) || n.isBreak(T) || n.isMedia(T))
            return {
              container: T,
              offset: 0
            };
          if (T.nodeType === 3)
            return {
              container: T,
              offset: V
            };
          q.push(T), C = y = T;
        } else if (C = y = q[0], n.isBreak(C) || n.onlyZeroWidthSpace(C))
          return {
            container: n.isMedia(T) ? T : C,
            offset: 0
          };
        Z = U = 0;
      }
      for (let I = Z; I <= U; I++) {
        const O = q[I];
        if (O.length === 0 || O.nodeType === 3 && O.data === void 0) {
          this._nodeRemoveListItem(O);
          continue;
        }
        if (O === C) {
          if (C.nodeType === 1) {
            if (n.isComponent(C)) continue;
            z = n.createTextNode(C.textContent);
          } else
            O === y ? (z = n.createTextNode(C.substringData(0, S) + y.substringData(V, y.length - V)), _ = S) : z = n.createTextNode(C.substringData(0, S));
          if (z.length > 0 ? C.data = z.data : this._nodeRemoveListItem(C), O === y) break;
          continue;
        }
        if (O === y) {
          if (y.nodeType === 1) {
            if (n.isComponent(y)) continue;
            A = n.createTextNode(y.textContent);
          } else
            A = n.createTextNode(y.substringData(V, y.length - V));
          A.length > 0 ? y.data = A.data : this._nodeRemoveListItem(y);
          continue;
        }
        this._nodeRemoveListItem(O);
      }
      const F = n.getParentElement(y, "ul"), P = n.getParentElement(C, "li");
      if (F && P && P.contains(F) ? (h = F.previousSibling, _ = h.textContent.length) : (h = y && y.parentNode ? y : C && C.parentNode ? C : s.endContainer || s.startContainer, _ = !r && !c ? _ : c ? h.textContent.length : 0), !n.isWysiwygDiv(h) && h.childNodes.length === 0) {
        const I = n.removeItemAllParents(h, null, null);
        I && (h = I.sc || I.ec || e.element.wysiwyg);
      }
      return !n.getFormatElement(h) && !(C && C.parentNode) && (g ? (h = g, _ = 0) : m && (h = m, _ = 1)), this.setRange(h, _, h, _), this.history.push(!0), {
        container: h,
        offset: _,
        prevContainer: p
      };
    },
    _nodeRemoveListItem: function(s) {
      const r = n.getFormatElement(s, null);
      n.removeItem(s), n.isListCell(r) && (n.removeItemAllParents(r, null, null), r && n.isList(r.firstChild) && r.insertBefore(n.createTextNode(n.zeroWidthSpace), r.firstChild));
    },
    /**
     * @description Appended all selected format Element to the argument element and insert
     * @param {Element} rangeElement Element of wrap the arguments (BLOCKQUOTE...)
     */
    applyRangeFormatElement: function(s) {
      this.getRange_addLine(this.getRange(), null);
      const r = this.getSelectedElementsAndComponents(!1);
      if (!r || r.length === 0) return;
      e:
        for (let V = 0, T = r.length, z, A, q, Z, U, F; V < T; V++)
          if (z = r[V], !!n.isListCell(z) && (A = z.lastElementChild, A && n.isListCell(z.nextElementSibling) && r.indexOf(z.nextElementSibling) > -1 && (Z = A.lastElementChild, r.indexOf(Z) > -1))) {
            let P = null;
            for (; P = Z.lastElementChild; )
              if (n.isList(P))
                if (r.indexOf(P.lastElementChild) > -1)
                  Z = P.lastElementChild;
                else
                  continue e;
            q = A.firstElementChild, U = r.indexOf(q), F = r.indexOf(Z), r.splice(U, F - U + 1), T = r.length;
            continue;
          }
      let c = r[r.length - 1], p, m, g;
      n.isRangeFormatElement(c) || n.isFormatElement(c) ? p = c : p = n.getRangeFormatElement(c, null) || n.getFormatElement(c, null), n.isCell(p) ? (m = null, g = p) : (m = p.nextSibling, g = p.parentNode);
      let h = n.getElementDepth(p), _ = null;
      const C = [], y = function(V, T, z) {
        let A = null;
        if (V !== T && !n.isTable(T)) {
          if (T && n.getElementDepth(V) === n.getElementDepth(T)) return z;
          A = n.removeItemAllParents(T, null, V);
        }
        return A ? A.ec : z;
      };
      for (let V = 0, T = r.length, z, A, q, Z, U, F, P; V < T; V++)
        if (z = r[V], A = z.parentNode, !(!A || s.contains(A)))
          if (q = n.getElementDepth(z), n.isList(A)) {
            if (_ === null && (F ? (_ = F, P = !0, F = null) : _ = A.cloneNode(!1)), C.push(z), U = r[V + 1], V === T - 1 || U && U.parentNode !== A) {
              U && z.contains(U.parentNode) && (F = U.parentNode.cloneNode(!1));
              let I = A.parentNode, O;
              for (; n.isList(I); )
                O = n.createElement(I.nodeName), O.appendChild(_), _ = O, I = I.parentNode;
              const N = this.detachRangeFormatElement(A, C, null, !0, !0);
              h >= q ? (h = q, g = N.cc, m = y(g, A, N.ec), m && (g = m.parentNode)) : g === N.cc && (m = N.ec), g !== N.cc && (Z = y(g, N.cc, Z), Z !== void 0 ? m = Z : m = N.cc);
              for (let M = 0, w = N.removeArray.length; M < w; M++)
                _.appendChild(N.removeArray[M]);
              P || s.appendChild(_), F && N.removeArray[N.removeArray.length - 1].appendChild(F), _ = null, P = !1;
            }
          } else
            h >= q && (h = q, g = A, m = z.nextSibling), s.appendChild(z), g !== A && (Z = y(g, A), Z !== void 0 && (m = Z));
      if (this.effectNode = null, n.mergeSameTags(s, null, !1), n.mergeNestedTags(s, (function(V) {
        return this.isList(V);
      }).bind(n)), m && n.getElementDepth(m) > 0 && (n.isList(m.parentNode) || n.isList(m.parentNode.parentNode))) {
        const V = n.getParentElement(m, (function(z) {
          return this.isRangeFormatElement(z) && !this.isList(z);
        }).bind(n)), T = n.splitElement(m, null, V ? n.getElementDepth(V) + 1 : 0);
        T.parentNode.insertBefore(s, T);
      } else
        g.insertBefore(s, m), y(s, m);
      const S = n.getEdgeChildNodes(s.firstElementChild, s.lastElementChild);
      r.length > 1 ? this.setRange(S.sc, 0, S.ec, S.ec.textContent.length) : this.setRange(S.ec, S.ec.textContent.length, S.ec, S.ec.textContent.length), this.history.push(!1);
    },
    /**
     * @description The elements of the "selectedFormats" array are detached from the "rangeElement" element. ("LI" tags are converted to "P" tags)
     * When "selectedFormats" is null, all elements are detached and return {cc: parentNode, sc: nextSibling, ec: previousSibling, removeArray: [Array of removed elements]}.
     * @param {Element} rangeElement Range format element (PRE, BLOCKQUOTE, OL, UL...)
     * @param {Array|null} selectedFormats Array of format elements (P, DIV, LI...) to remove.
     * If null, Applies to all elements and return {cc: parentNode, sc: nextSibling, ec: previousSibling}
     * @param {Element|null} newRangeElement The node(rangeElement) to replace the currently wrapped node.
     * @param {Boolean} remove If true, deleted without detached.
     * @param {Boolean} notHistoryPush When true, it does not update the history stack and the selection object and return EdgeNodes (util.getEdgeChildNodes)
     * @returns {Object}
     */
    detachRangeFormatElement: function(s, r, c, p, m) {
      const g = this.getRange();
      let h = g.startOffset, _ = g.endOffset, C = n.getListChildNodes(s, function(N) {
        return N.parentNode === s;
      }), y = s.parentNode, S = null, V = null, T = s.cloneNode(!1);
      const z = [], A = n.isList(c);
      let q = !1, Z = !1, U = !1;
      function F(N, M, w, D) {
        if (n.onlyZeroWidthSpace(M) && (M.innerHTML = n.zeroWidthSpace, h = _ = 1), M.nodeType === 3)
          return N.insertBefore(M, w), M;
        const Y = (U ? M : D).childNodes;
        let j = M.cloneNode(!1), G = null, ee = null;
        for (; Y[0]; )
          ee = Y[0], n._notTextNode(ee) && !n.isBreak(ee) && !n.isListCell(j) ? (j.childNodes.length > 0 && (G || (G = j), N.insertBefore(j, w), j = M.cloneNode(!1)), N.insertBefore(ee, w), G || (G = ee)) : j.appendChild(ee);
        if (j.childNodes.length > 0) {
          if (n.isListCell(N) && n.isListCell(j) && n.isList(w))
            if (A) {
              for (G = w; w; )
                j.appendChild(w), w = w.nextSibling;
              N.parentNode.insertBefore(j, N.nextElementSibling);
            } else {
              const $ = D.nextElementSibling, ne = n.detachNestedList(D, !1);
              if (s !== ne || $ !== D.nextElementSibling) {
                const me = j.childNodes;
                for (; me[0]; )
                  D.appendChild(me[0]);
                s = ne, Z = !0;
              }
            }
          else
            N.insertBefore(j, w);
          G || (G = j);
        }
        return G;
      }
      for (let N = 0, M = C.length, w, D, Y; N < M; N++)
        if (w = C[N], !(w.nodeType === 3 && n.isList(T)))
          if (U = !1, p && N === 0 && (!r || r.length === M || r[0] === w ? S = s.previousSibling : S = T), r && (D = r.indexOf(w)), r && D === -1)
            T || (T = s.cloneNode(!1)), T.appendChild(w);
          else {
            if (r && (Y = r[D + 1]), T && T.children.length > 0 && (y.insertBefore(T, s), T = null), !A && n.isListCell(w))
              if (Y && n.getElementDepth(w) !== n.getElementDepth(Y) && (n.isListCell(y) || n.getArrayItem(w.children, n.isList, !1))) {
                const j = w.nextElementSibling, G = n.detachNestedList(w, !1);
                (s !== G || j !== w.nextElementSibling) && (s = G, Z = !0);
              } else {
                const j = w;
                w = n.createElement(p ? j.nodeName : n.isList(s.parentNode) || n.isListCell(s.parentNode) ? "LI" : n.isCell(s.parentNode) ? "DIV" : i.defaultTag);
                const G = n.isListCell(w), ee = j.childNodes;
                for (; ee[0] && !(n.isList(ee[0]) && !G); )
                  w.appendChild(ee[0]);
                n.copyFormatAttributes(w, j), U = !0;
              }
            else
              w = w.cloneNode(!1);
            if (!Z && (p ? (z.push(w), n.removeItem(C[N])) : (c ? (q || (y.insertBefore(c, s), q = !0), w = F(c, w, null, C[N])) : w = F(y, w, s, C[N]), Z || (r ? (V = w, S || (S = w)) : S || (S = V = w))), Z)) {
              Z = U = !1, C = n.getListChildNodes(s, function(j) {
                return j.parentNode === s;
              }), T = s.cloneNode(!1), y = s.parentNode, N = -1, M = C.length;
              continue;
            }
          }
      const P = s.parentNode;
      let I = s.nextSibling;
      T && T.children.length > 0 && P.insertBefore(T, I), c ? S = c.previousSibling : S || (S = s.previousSibling), I = s.nextSibling !== T ? s.nextSibling : T ? T.nextSibling : null, s.children.length === 0 || s.textContent.length === 0 ? n.removeItem(s) : n.removeEmptyNode(s, null, !1);
      let O = null;
      if (p)
        O = {
          cc: P,
          sc: S,
          so: h,
          ec: I,
          eo: _,
          removeArray: z
        };
      else {
        S || (S = V), V || (V = S);
        const N = n.getEdgeChildNodes(S, V.parentNode ? S : V);
        O = {
          cc: (N.sc || N.ec).parentNode,
          sc: N.sc,
          so: h,
          ec: N.ec,
          eo: _,
          removeArray: null
        };
      }
      if (this.effectNode = null, m) return O;
      !p && O && (r ? this.setRange(O.sc, h, O.ec, _) : this.setRange(O.sc, 0, O.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(s, r) {
      let c = {}, p = !1, m = !1, g = null, h = null;
      const _ = (function(C) {
        return !this.isComponent(C);
      }).bind(n);
      for (let C = 0, y = s.length, S, V, T, z; C < y; C++) {
        if (T = C === y - 1, V = n.getRangeFormatElement(s[C], _), z = n.isList(V), !S && z)
          S = V, c = { r: S, f: [n.getParentElement(s[C], "LI")] }, C === 0 && (p = !0);
        else if (S && z)
          if (S !== V) {
            const A = this.detachRangeFormatElement(c.f[0].parentNode, c.f, null, r, !0);
            V = s[C].parentNode, p && (g = A.sc, p = !1), T && (h = A.ec), z ? (S = V, c = { r: S, f: [n.getParentElement(s[C], "LI")] }, T && (m = !0)) : S = null;
          } else
            c.f.push(n.getParentElement(s[C], "LI")), T && (m = !0);
        if (T && n.isList(S)) {
          const A = this.detachRangeFormatElement(c.f[0].parentNode, c.f, null, r, !0);
          (m || y === 1) && (h = A.ec), p && (g = A.sc || h);
        }
      }
      return {
        sc: g,
        ec: h
      };
    },
    /**
     * @description Add, update, and delete nodes from selected text.
     * 1. If there is a node in the "appendNode" argument, a node with the same tags and attributes as "appendNode" is added to the selection text.
     * 2. If it is in the same tag, only the tag's attributes are changed without adding a tag.
     * 3. If the "appendNode" argument is null, the node of the selection is update or remove without adding a new node.
     * 4. The same style as the style attribute of the "styleArray" argument is deleted.
     *    (Styles should be put with attribute names from css. ["background-color"])
     * 5. The same class name as the class attribute of the "styleArray" argument is deleted.
     *    (The class name is preceded by "." [".className"])
     * 6. Use a list of styles and classes of "appendNode" in "styleArray" to avoid duplicate property values.
     * 7. If a node with all styles and classes removed has the same tag name as "appendNode" or "removeNodeArray", or "appendNode" is null, that node is deleted.
     * 8. Regardless of the style and class of the node, the tag with the same name as the "removeNodeArray" argument value is deleted.
     * 9. If the "strictRemove" argument is true, only nodes with all styles and classes removed from the nodes of "removeNodeArray" are removed.
     *10. It won't work if the parent node has the same class and same value style.
     *    However, if there is a value in "removeNodeArray", it works and the text node is separated even if there is no node to replace.
     * @param {Element|null} appendNode The element to be added to the selection. If it is null, only delete the node.
     * @param {Array|null} styleArray The style or className attribute name Array to check (['font-size'], ['.className'], ['font-family', 'color', '.className']...])
     * @param {Array|null} removeNodeArray An array of node names to remove types from, remove all formats when "appendNode" is null and there is an empty array or null value. (['span'], ['strong', 'em'] ...])
     * @param {Boolean|null} strictRemove If true, only nodes with all styles and classes removed from the nodes of "removeNodeArray" are removed.
     */
    nodeChange: function(s, r, c, p) {
      this._resetRangeToTextNode();
      let m = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, c = c && c.length > 0 ? c : !1;
      const g = !s, h = g && !c && !r;
      let _ = m.startContainer, C = m.startOffset, y = m.endContainer, S = m.endOffset;
      if (h && m.collapsed && n.isFormatElement(_.parentNode) || _ === y && _.nodeType === 1 && n.isNonEditable(_)) {
        const ee = _.parentNode;
        if (!n.isListCell(ee) || !n.getValues(ee.style).some((function($) {
          return this._listKebab.indexOf($) > -1;
        }).bind(this))) return;
      }
      if (m.collapsed && !h && _.nodeType === 1 && !n.isBreak(_) && !n.isComponent(_)) {
        let ee = null;
        const $ = _.childNodes[C];
        $ && ($.nextSibling ? ee = n.isBreak($) ? $ : $.nextSibling : ee = null);
        const ne = n.createTextNode(n.zeroWidthSpace);
        _.insertBefore(ne, ee), this.setRange(ne, 1, ne, 1), m = this.getRange(), _ = m.startContainer, C = m.startOffset, y = m.endContainer, S = m.endOffset;
      }
      n.isFormatElement(_) && (_ = _.childNodes[C] || _.firstChild, C = 0), n.isFormatElement(y) && (y = y.childNodes[S] || y.lastChild, S = y.textContent.length), g && (s = n.createElement("DIV"));
      const V = f.RegExp, T = s.nodeName;
      if (!h && _ === y && !c && s) {
        let ee = _, $ = 0;
        const ne = [], me = s.style;
        for (let pe = 0, ye = me.length; pe < ye; pe++)
          ne.push(me[pe]);
        const ve = s.classList;
        for (let pe = 0, ye = ve.length; pe < ye; pe++)
          ne.push("." + ve[pe]);
        if (ne.length > 0) {
          for (; !n.isFormatElement(ee) && !n.isWysiwygDiv(ee); ) {
            for (let pe = 0; pe < ne.length; pe++)
              if (ee.nodeType === 1) {
                const ye = ne[pe], Re = /^\./.test(ye) ? new V("\\s*" + ye.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, $e = g ? !!ee.style[ye] : !!ee.style[ye] && !!s.style[ye] && ee.style[ye] === s.style[ye], we = Re === !1 ? !1 : g ? !!ee.className.match(Re) : !!ee.className.match(Re) && !!s.className.match(Re);
                ($e || we) && $++;
              }
            ee = ee.parentNode;
          }
          if ($ >= ne.length) return;
        }
      }
      let z = {}, A = {}, q, Z = "", U = "", F = "";
      if (r) {
        for (let ee = 0, $ = r.length, ne; ee < $; ee++)
          ne = r[ee], /^\./.test(ne) ? U += (U ? "|" : "\\s*(?:") + ne.replace(/^\./, "") : Z += (Z ? "|" : "(?:;|^|\\s)(?:") + ne;
        Z && (Z += ")\\s*:[^;]*\\s*(?:;|$)", Z = new V(Z, "ig")), U && (U += ")(?=\\s+|$)", U = new V(U, "ig"));
      }
      if (c) {
        F = "^(?:" + c[0];
        for (let ee = 1; ee < c.length; ee++)
          F += "|" + c[ee];
        F += ")$", F = new V(F, "i");
      }
      const P = f.Boolean, I = { v: !1 }, O = function(ee) {
        const $ = ee.cloneNode(!1);
        if ($.nodeType === 3 || n.isBreak($)) return $;
        if (h) return null;
        const ne = !F && g || F && F.test($.nodeName);
        if (ne && !p)
          return I.v = !0, null;
        const me = $.style.cssText;
        let ve = "";
        Z && me.length > 0 && (ve = me.replace(Z, "").trim(), ve !== me && (I.v = !0));
        const pe = $.className;
        let ye = "";
        return U && pe.length > 0 && (ye = pe.replace(U, "").trim(), ye !== pe && (I.v = !0)), g && (U || !pe) && (Z || !me) && !ve && !ye && ne ? (I.v = !0, null) : ve || ye || $.nodeName !== T || P(Z) !== P(me) || P(U) !== P(pe) ? (Z && me.length > 0 && ($.style.cssText = ve), $.style.cssText || $.removeAttribute("style"), U && pe.length > 0 && ($.className = ye.trim()), $.className.trim() || $.removeAttribute("class"), !$.style.cssText && !$.className && ($.nodeName === T || ne) ? (I.v = !0, null) : $) : (I.v = !0, null);
      }, N = this.getSelectedElements(null);
      m = this.getRange(), _ = m.startContainer, C = m.startOffset, y = m.endContainer, S = m.endOffset, n.getFormatElement(_, null) || (_ = n.getChildElement(N[0], function(ee) {
        return ee.nodeType === 3;
      }, !1), C = 0), n.getFormatElement(y, null) || (y = n.getChildElement(N[N.length - 1], function(ee) {
        return ee.nodeType === 3;
      }, !1), S = y.textContent.length);
      const M = n.getFormatElement(_, null) === n.getFormatElement(y, null), w = N.length - (M ? 0 : 1);
      q = s.cloneNode(!1);
      const D = h || g && function(ee) {
        for (let $ = 0, ne = ee.length; $ < ne; $++)
          if (n._isMaintainedNode(ee[$]) || n._isSizeNode(ee[$])) return !0;
        return !1;
      }(c), Y = g || n._isSizeNode(q), j = this._util_getMaintainedNode.bind(n, D, Y), G = this._util_isMaintainedNode.bind(n, D, Y);
      if (M) {
        this._resetCommonListCell(N[0], r) && (m = this.setRange(_, C, y, S));
        const ee = this._nodeChange_oneLine(N[0], q, O, _, C, y, S, h, g, m.collapsed, I, j, G);
        z.container = ee.startContainer, z.offset = ee.startOffset, A.container = ee.endContainer, A.offset = ee.endOffset, z.container === A.container && n.onlyZeroWidthSpace(z.container) && (z.offset = A.offset = 1), this._setCommonListStyle(ee.ancestor, null);
      } else {
        let ee = !1;
        w > 0 && this._resetCommonListCell(N[w], r) && (ee = !0), this._resetCommonListCell(N[0], r) && (ee = !0), ee && this.setRange(_, C, y, S), w > 0 && (q = s.cloneNode(!1), A = this._nodeChange_endLine(N[w], q, O, y, S, h, g, I, j, G));
        for (let $ = w - 1, ne; $ > 0; $--)
          this._resetCommonListCell(N[$], r), q = s.cloneNode(!1), ne = this._nodeChange_middleLine(N[$], q, O, h, g, I, A.container), ne.endContainer && ne.ancestor.contains(ne.endContainer) && (A.ancestor = null, A.container = ne.endContainer), this._setCommonListStyle(ne.ancestor, null);
        q = s.cloneNode(!1), z = this._nodeChange_startLine(N[0], q, O, _, C, h, g, I, j, G, A.container), z.endContainer && (A.ancestor = null, A.container = z.endContainer), w <= 0 ? A = z : A.container || (A.ancestor = null, A.container = z.container, A.offset = z.container.textContent.length), this._setCommonListStyle(z.ancestor, null), this._setCommonListStyle(A.ancestor || n.getFormatElement(A.container), null);
      }
      this.controllersOff(), this.setRange(z.container, z.offset, A.container, A.offset), this.history.push(!1);
    },
    /**
     * @description Reset common style of list cell
     * @param {Element} el List cell element. <li>
     * @param {Array|null} styleArray Style array
     * @private
     */
    _resetCommonListCell: function(s, r) {
      if (!n.isListCell(s)) return;
      r || (r = this._listKebab);
      const c = n.getArrayItem(s.childNodes, function(V) {
        return !n.isBreak(V);
      }, !0), p = s.style, m = [], g = [], h = n.getValues(p);
      for (let V = 0, T = this._listKebab.length; V < T; V++)
        h.indexOf(this._listKebab[V]) > -1 && r.indexOf(this._listKebab[V]) > -1 && (m.push(this._listCamel[V]), g.push(this._listKebab[V]));
      if (!m.length) return;
      const _ = n.createElement("SPAN");
      for (let V = 0, T = m.length; V < T; V++)
        _.style[m[V]] = p[g[V]], p.removeProperty(g[V]);
      let C = _.cloneNode(!1), y = null, S = !1;
      for (let V = 0, T = c.length, z, A; V < T; V++)
        z = c[V], !i._textTagsMap[z.nodeName.toLowerCase()] && (A = n.getValues(z.style), A.length === 0 || m.some(function(q) {
          return A.indexOf(q) === -1;
        }) && A.some(function(q) {
        }) ? (y = z.nextSibling, C.appendChild(z)) : C.childNodes.length > 0 && (s.insertBefore(C, y), C = _.cloneNode(!1), y = null, S = !0));
      return C.childNodes.length > 0 && (s.insertBefore(C, y), S = !0), p.length || s.removeAttribute("style"), S;
    },
    /**
     * @description If certain styles are applied to all child nodes of the list cell, the style of the list cell is also changed. (bold, color, size)
     * @param {Element} el List cell element. <li>
     * @param {Element|null} child Variable for recursive call. ("null" on the first call)
     * @private
     */
    _setCommonListStyle: function(s, r) {
      if (!n.isListCell(s)) return;
      const c = n.getArrayItem((r || s).childNodes, function(C) {
        return !n.isBreak(C);
      }, !0);
      if (r = c[0], !r || c.length > 1 || r.nodeType !== 1) return;
      const p = r.style, m = s.style, g = r.nodeName.toLowerCase();
      let h = !1;
      i._textTagsMap[g] === i._defaultCommand.bold.toLowerCase() && (m.fontWeight = "bold"), i._textTagsMap[g] === i._defaultCommand.italic.toLowerCase() && (m.fontStyle = "italic");
      const _ = n.getValues(p);
      if (_.length > 0)
        for (let C = 0, y = this._listCamel.length; C < y; C++)
          _.indexOf(this._listKebab[C]) > -1 && (m[this._listCamel[C]] = p[this._listCamel[C]], p.removeProperty(this._listKebab[C]), h = !0);
      if (this._setCommonListStyle(s, r), !!h && !p.length) {
        const C = r.childNodes, y = r.parentNode, S = r.nextSibling;
        for (; C.length > 0; )
          y.insertBefore(C[0], S);
        n.removeItem(r);
      }
    },
    /**
     * @description Strip remove node
     * @param {Node} removeNode The remove node
     * @private
     */
    _stripRemoveNode: function(s) {
      const r = s.parentNode;
      if (!s || s.nodeType === 3 || !r) return;
      const c = s.childNodes;
      for (; c[0]; )
        r.insertBefore(c[0], s);
      r.removeChild(s);
    },
    /**
     * @description Return the parent maintained tag. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_getMaintainedNode: function(s, r, c) {
      return !c || s ? null : this.getParentElement(c, this._isMaintainedNode.bind(this)) || (r ? null : this.getParentElement(c, this._isSizeNode.bind(this)));
    },
    /**
     * @description Check if element is a tag that should be persisted. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_isMaintainedNode: function(s, r, c) {
      if (!c || s || c.nodeType !== 1) return !1;
      const p = this._isMaintainedNode(c);
      return this.getParentElement(c, this._isMaintainedNode.bind(this)) ? p : p || (r ? !1 : this._isSizeNode(c));
    },
    /**
     * @description wraps text nodes of line selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @param {Boolean} collapsed range.collapsed
     * @returns {{ancestor: *, startContainer: *, startOffset: *, endContainer: *, endOffset: *}}
     * @private
     */
    _nodeChange_oneLine: function(s, r, c, p, m, g, h, _, C, y, S, V, T) {
      let z = p.parentNode;
      for (; !z.nextSibling && !z.previousSibling && !n.isFormatElement(z.parentNode) && !n.isWysiwygDiv(z.parentNode) && z.nodeName !== r.nodeName; )
        z = z.parentNode;
      if (!C && z === g.parentNode && z.nodeName === r.nodeName && n.onlyZeroWidthSpace(p.textContent.slice(0, m)) && n.onlyZeroWidthSpace(g.textContent.slice(h))) {
        const we = z.childNodes;
        let Ie = !0;
        for (let Le = 0, dt = we.length, Fe, Ke, Oe, _e; Le < dt; Le++) {
          if (Fe = we[Le], _e = !n.onlyZeroWidthSpace(Fe), Fe === p) {
            Ke = !0;
            continue;
          }
          if (Fe === g) {
            Oe = !0;
            continue;
          }
          if (!Ke && _e || Ke && Oe && _e) {
            Ie = !1;
            break;
          }
        }
        if (Ie)
          return n.copyTagAttributes(z, r), {
            ancestor: s,
            startContainer: p,
            startOffset: m,
            endContainer: g,
            endOffset: h
          };
      }
      S.v = !1;
      const A = s, q = [r], Z = s.cloneNode(!1), U = p === g;
      let F = p, P = m, I = g, O = h, N = !1, M = !1, w, D, Y, j, G;
      const ee = f.RegExp;
      function $(we) {
        const Ie = new ee("(?:;|^|\\s)(?:" + j + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let Le = "";
        return Ie && we.style.cssText.length > 0 && (Le = Ie.test(we.style.cssText)), !Le;
      }
      if (function we(Ie, Le) {
        const dt = Ie.childNodes;
        for (let Fe = 0, Ke = dt.length, Oe; Fe < Ke; Fe++) {
          let _e = dt[Fe];
          if (!_e) continue;
          let It = Le, ct;
          if (!N && _e === F) {
            let Pe = Z;
            G = V(_e);
            const Ne = n.createTextNode(F.nodeType === 1 ? "" : F.substringData(0, P)), We = n.createTextNode(
              F.nodeType === 1 ? "" : F.substringData(
                P,
                U && O >= P ? O - P : F.data.length - P
              )
            );
            if (G) {
              const Dt = V(Le);
              if (Dt && Dt.parentNode !== Pe) {
                let et = Dt, Mt = null;
                for (; et.parentNode !== Pe; ) {
                  for (Le = Mt = et.parentNode.cloneNode(!1); et.childNodes[0]; )
                    Mt.appendChild(et.childNodes[0]);
                  et.appendChild(Mt), et = et.parentNode;
                }
                et.parentNode.appendChild(Dt);
              }
              G = G.cloneNode(!1);
            }
            n.onlyZeroWidthSpace(Ne) || Le.appendChild(Ne);
            const Ue = V(Le);
            for (Ue && (G = Ue), G && (Pe = G), D = _e, w = [], j = ""; D !== Pe && D !== A && D !== null; )
              Oe = T(D) ? null : c(D), Oe && D.nodeType === 1 && $(D) && (w.push(Oe), j += D.style.cssText.substr(0, D.style.cssText.indexOf(":")) + "|"), D = D.parentNode;
            const Vt = w.pop() || We;
            for (Y = D = Vt; w.length > 0; )
              D = w.pop(), Y.appendChild(D), Y = D;
            if (r.appendChild(Vt), Pe.appendChild(r), G && !V(I) && (r = r.cloneNode(!1), Z.appendChild(r), q.push(r)), F = We, P = 0, N = !0, D !== We && D.appendChild(F), !U) continue;
          }
          if (!M && _e === I) {
            G = V(_e);
            const Pe = n.createTextNode(I.nodeType === 1 ? "" : I.substringData(O, I.length - O)), Ne = n.createTextNode(U || I.nodeType === 1 ? "" : I.substringData(0, O));
            if (G ? G = G.cloneNode(!1) : T(r.parentNode) && !G && (r = r.cloneNode(!1), Z.appendChild(r), q.push(r)), !n.onlyZeroWidthSpace(Pe)) {
              D = _e, j = "", w = [];
              const Ue = [];
              for (; D !== Z && D !== A && D !== null; )
                D.nodeType === 1 && $(D) && (T(D) ? Ue.push(D.cloneNode(!1)) : w.push(D.cloneNode(!1)), j += D.style.cssText.substr(0, D.style.cssText.indexOf(":")) + "|"), D = D.parentNode;
              for (w = w.concat(Ue), ct = Y = D = w.pop() || Pe; w.length > 0; )
                D = w.pop(), Y.appendChild(D), Y = D;
              Z.appendChild(ct), D.textContent = Pe.data;
            }
            if (G && ct) {
              const Ue = V(ct);
              Ue && (G = Ue);
            }
            for (D = _e, w = [], j = ""; D !== Z && D !== A && D !== null; )
              Oe = T(D) ? null : c(D), Oe && D.nodeType === 1 && $(D) && (w.push(Oe), j += D.style.cssText.substr(0, D.style.cssText.indexOf(":")) + "|"), D = D.parentNode;
            const We = w.pop() || Ne;
            for (Y = D = We; w.length > 0; )
              D = w.pop(), Y.appendChild(D), Y = D;
            G ? (r = r.cloneNode(!1), r.appendChild(We), G.insertBefore(r, G.firstChild), Z.appendChild(G), q.push(r), G = null) : r.appendChild(We), I = Ne, O = Ne.data.length, M = !0, !_ && y && (r = Ne, Ne.textContent = n.zeroWidthSpace), D !== Ne && D.appendChild(I);
            continue;
          }
          if (N) {
            if (_e.nodeType === 1 && !n.isBreak(_e)) {
              n._isIgnoreNodeChange(_e) ? (Z.appendChild(_e.cloneNode(!0)), y || (r = r.cloneNode(!1), Z.appendChild(r), q.push(r))) : we(_e, _e);
              continue;
            }
            D = _e, w = [], j = "";
            const Pe = [];
            for (; D.parentNode !== null && D !== A && D !== r; )
              Oe = M ? D.cloneNode(!1) : c(D), D.nodeType === 1 && !n.isBreak(_e) && Oe && $(D) && (T(D) ? G || Pe.push(Oe) : w.push(Oe), j += D.style.cssText.substr(0, D.style.cssText.indexOf(":")) + "|"), D = D.parentNode;
            w = w.concat(Pe);
            const Ne = w.pop() || _e;
            for (Y = D = Ne; w.length > 0; )
              D = w.pop(), Y.appendChild(D), Y = D;
            if (T(r.parentNode) && !T(Ne) && !n.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), Z.appendChild(r), q.push(r)), !M && !G && T(Ne)) {
              r = r.cloneNode(!1);
              const We = Ne.childNodes;
              for (let Ue = 0, Vt = We.length; Ue < Vt; Ue++)
                r.appendChild(We[Ue]);
              Ne.appendChild(r), Z.appendChild(Ne), q.push(r), r.children.length > 0 ? Le = D : Le = r;
            } else Ne === _e ? M ? Le = Z : Le = r : M ? (Z.appendChild(Ne), Le = D) : (r.appendChild(Ne), Le = D);
            if (G && _e.nodeType === 3)
              if (V(_e)) {
                const We = n.getParentElement(Le, (function(Ue) {
                  return this._isMaintainedNode(Ue.parentNode) || Ue.parentNode === Z;
                }).bind(n));
                G.appendChild(We), r = We.cloneNode(!1), q.push(r), Z.appendChild(r);
              } else
                G = null;
          }
          ct = _e.cloneNode(!1), Le.appendChild(ct), _e.nodeType === 1 && !n.isBreak(_e) && (It = ct), we(_e, It);
        }
      }(s, Z), C && !_ && !S.v)
        return {
          ancestor: s,
          startContainer: p,
          startOffset: m,
          endContainer: g,
          endOffset: h
        };
      if (_ = _ && C, _)
        for (let we = 0; we < q.length; we++) {
          let Ie = q[we], Le, dt, Fe;
          if (y)
            Le = n.createTextNode(n.zeroWidthSpace), Z.replaceChild(Le, Ie);
          else {
            const Ke = Ie.childNodes;
            for (dt = Ke[0]; Ke[0]; )
              Fe = Ke[0], Z.insertBefore(Fe, Ie);
            n.removeItem(Ie);
          }
          we === 0 && (y ? F = I = Le : (F = dt, I = Fe));
        }
      else {
        if (C)
          for (let we = 0; we < q.length; we++)
            this._stripRemoveNode(q[we]);
        y && (F = I = r);
      }
      n.removeEmptyNode(Z, r, !1), y && (P = F.textContent.length, O = I.textContent.length);
      const ne = _ || I.textContent.length === 0;
      !n.isBreak(I) && I.textContent.length === 0 && (n.removeItem(I), I = F), O = ne ? I.textContent.length : O;
      const me = { s: 0, e: 0 }, ve = n.getNodePath(F, Z, me), pe = !I.parentNode;
      pe && (I = F);
      const ye = { s: 0, e: 0 }, Re = n.getNodePath(I, Z, !pe && !ne ? ye : null);
      P += me.s, O = y ? P : pe ? F.textContent.length : ne ? O + me.s : O + ye.s;
      const $e = n.mergeSameTags(Z, [ve, Re], !0);
      return s.parentNode.replaceChild(Z, s), F = n.getNodeFromPath(ve, Z), I = n.getNodeFromPath(Re, Z), {
        ancestor: Z,
        startContainer: F,
        startOffset: P + $e[0],
        endContainer: I,
        endOffset: O + $e[1]
      };
    },
    /**
     * @description wraps first line selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @returns {null|Node} If end container is renewed, returned renewed node
     * @returns {Object} { ancestor, container, offset, endContainer }
     * @private
     */
    _nodeChange_startLine: function(s, r, c, p, m, g, h, _, C, y, S) {
      let V = p.parentNode;
      for (; !V.nextSibling && !V.previousSibling && !n.isFormatElement(V.parentNode) && !n.isWysiwygDiv(V.parentNode) && V.nodeName !== r.nodeName; )
        V = V.parentNode;
      if (!h && V.nodeName === r.nodeName && !n.isFormatElement(V) && !V.nextSibling && n.onlyZeroWidthSpace(p.textContent.slice(0, m))) {
        let N = !0, M = p.previousSibling;
        for (; M; ) {
          if (!n.onlyZeroWidthSpace(M)) {
            N = !1;
            break;
          }
          M = M.previousSibling;
        }
        if (N)
          return n.copyTagAttributes(V, r), {
            ancestor: s,
            container: p,
            offset: m
          };
      }
      _.v = !1;
      const T = s, z = [r], A = s.cloneNode(!1);
      let q = p, Z = m, U = !1, F, P, I, O;
      if (function N(M, w) {
        const D = M.childNodes;
        for (let Y = 0, j = D.length, G, ee; Y < j; Y++) {
          const $ = D[Y];
          if (!$) continue;
          let ne = w;
          if (U && !n.isBreak($)) {
            if ($.nodeType === 1) {
              if (n._isIgnoreNodeChange($)) {
                if (r = r.cloneNode(!1), ee = $.cloneNode(!0), A.appendChild(ee), A.appendChild(r), z.push(r), S && $.contains(S)) {
                  const ye = n.getNodePath(S, $);
                  S = n.getNodeFromPath(ye, ee);
                }
              } else
                N($, $);
              continue;
            }
            P = $, F = [];
            const me = [];
            for (; P.parentNode !== null && P !== T && P !== r; )
              G = c(P), P.nodeType === 1 && G && (y(P) ? O || me.push(G) : F.push(G)), P = P.parentNode;
            F = F.concat(me);
            const ve = F.length > 0, pe = F.pop() || $;
            for (I = P = pe; F.length > 0; )
              P = F.pop(), I.appendChild(P), I = P;
            if (y(r.parentNode) && !y(pe) && (r = r.cloneNode(!1), A.appendChild(r), z.push(r)), !O && y(pe)) {
              r = r.cloneNode(!1);
              const ye = pe.childNodes;
              for (let Re = 0, $e = ye.length; Re < $e; Re++)
                r.appendChild(ye[Re]);
              pe.appendChild(r), A.appendChild(pe), w = y(P) ? r : P, z.push(r);
            } else ve ? (r.appendChild(pe), w = P) : w = r;
            if (O && $.nodeType === 3)
              if (C($)) {
                const ye = n.getParentElement(w, (function(Re) {
                  return this._isMaintainedNode(Re.parentNode) || Re.parentNode === A;
                }).bind(n));
                O.appendChild(ye), r = ye.cloneNode(!1), z.push(r), A.appendChild(r);
              } else
                O = null;
          }
          if (!U && $ === q) {
            let me = A;
            O = C($);
            const ve = n.createTextNode(q.nodeType === 1 ? "" : q.substringData(0, Z)), pe = n.createTextNode(q.nodeType === 1 ? "" : q.substringData(Z, q.length - Z));
            if (O) {
              const $e = C(w);
              if ($e && $e.parentNode !== me) {
                let we = $e, Ie = null;
                for (; we.parentNode !== me; ) {
                  for (w = Ie = we.parentNode.cloneNode(!1); we.childNodes[0]; )
                    Ie.appendChild(we.childNodes[0]);
                  we.appendChild(Ie), we = we.parentNode;
                }
                we.parentNode.appendChild($e);
              }
              O = O.cloneNode(!1);
            }
            n.onlyZeroWidthSpace(ve) || w.appendChild(ve);
            const ye = C(w);
            for (ye && (O = ye), O && (me = O), P = w, F = []; P !== me && P !== null; )
              G = c(P), P.nodeType === 1 && G && F.push(G), P = P.parentNode;
            const Re = F.pop() || w;
            for (I = P = Re; F.length > 0; )
              P = F.pop(), I.appendChild(P), I = P;
            Re !== w ? (r.appendChild(Re), w = P) : w = r, n.isBreak($) && r.appendChild($.cloneNode(!1)), me.appendChild(r), q = pe, Z = 0, U = !0, w.appendChild(q);
            continue;
          }
          G = U ? c($) : $.cloneNode(!1), G && (w.appendChild(G), $.nodeType === 1 && !n.isBreak($) && (ne = G)), N($, ne);
        }
      }(s, A), h && !g && !_.v)
        return {
          ancestor: s,
          container: p,
          offset: m,
          endContainer: S
        };
      if (g = g && h, g)
        for (let N = 0; N < z.length; N++) {
          let M = z[N];
          const w = M.childNodes, D = w[0];
          for (; w[0]; )
            A.insertBefore(w[0], M);
          n.removeItem(M), N === 0 && (q = D);
        }
      else if (h) {
        r = r.firstChild;
        for (let N = 0; N < z.length; N++)
          this._stripRemoveNode(z[N]);
      }
      if (!g && A.childNodes.length === 0)
        s.childNodes ? q = s.childNodes[0] : (q = n.createTextNode(n.zeroWidthSpace), s.appendChild(q));
      else {
        n.removeEmptyNode(A, r, !1), n.onlyZeroWidthSpace(A.textContent) && (q = A.firstChild, Z = 0);
        const N = { s: 0, e: 0 }, M = n.getNodePath(q, A, N);
        Z += N.s;
        const w = n.mergeSameTags(A, [M], !0);
        s.parentNode.replaceChild(A, s), q = n.getNodeFromPath(M, A), Z += w[0];
      }
      return {
        ancestor: A,
        container: q,
        offset: Z,
        endContainer: S
      };
    },
    /**
     * @description wraps mid lines selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @param {Node} _endContainer Offset node of last line already modified (end.container)
     * @returns {Object} { ancestor, endContainer: "If end container is renewed, returned renewed node" }
     * @private
     */
    _nodeChange_middleLine: function(s, r, c, p, m, g, h) {
      if (!m) {
        let S = null;
        h && s.contains(h) && (S = n.getNodePath(h, s));
        const V = s.cloneNode(!0), T = r.nodeName, z = r.style.cssText, A = r.className;
        let q = V.childNodes, Z = 0, U = q.length;
        for (let F; Z < U && (F = q[Z], F.nodeType !== 3); Z++)
          if (F.nodeName === T)
            F.style.cssText += z, n.addClass(F, A);
          else {
            if (!n.isBreak(F) && n._isIgnoreNodeChange(F))
              continue;
            if (U === 1) {
              q = F.childNodes, U = q.length, Z = -1;
              continue;
            } else
              break;
          }
        if (U > 0 && Z === U)
          return s.innerHTML = V.innerHTML, {
            ancestor: s,
            endContainer: S ? n.getNodeFromPath(S, s) : null
          };
      }
      g.v = !1;
      const _ = s.cloneNode(!1), C = [r];
      let y = !0;
      if (function S(V, T) {
        const z = V.childNodes;
        for (let A = 0, q = z.length, Z, U; A < q; A++) {
          let F = z[A];
          if (!F) continue;
          let P = T;
          if (!n.isBreak(F) && n._isIgnoreNodeChange(F)) {
            if (r.childNodes.length > 0 && (_.appendChild(r), r = r.cloneNode(!1)), U = F.cloneNode(!0), _.appendChild(U), _.appendChild(r), C.push(r), T = r, h && F.contains(h)) {
              const I = n.getNodePath(h, F);
              h = n.getNodeFromPath(I, U);
            }
            continue;
          } else
            Z = c(F), Z && (y = !1, T.appendChild(Z), F.nodeType === 1 && (P = Z));
          n.isBreak(F) || S(F, P);
        }
      }(s, r), y || m && !p && !g.v) return { ancestor: s, endContainer: h };
      if (_.appendChild(r), p && m)
        for (let S = 0; S < C.length; S++) {
          let V = C[S];
          const T = V.childNodes;
          for (; T[0]; )
            _.insertBefore(T[0], V);
          n.removeItem(V);
        }
      else if (m) {
        r = r.firstChild;
        for (let S = 0; S < C.length; S++)
          this._stripRemoveNode(C[S]);
      }
      return n.removeEmptyNode(_, r, !1), n.mergeSameTags(_, null, !0), s.parentNode.replaceChild(_, s), { ancestor: _, endContainer: h };
    },
    /**
     * @description wraps last line selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @returns {Object} { ancestor, container, offset }
     * @private
     */
    _nodeChange_endLine: function(s, r, c, p, m, g, h, _, C, y) {
      let S = p.parentNode;
      for (; !S.nextSibling && !S.previousSibling && !n.isFormatElement(S.parentNode) && !n.isWysiwygDiv(S.parentNode) && S.nodeName !== r.nodeName; )
        S = S.parentNode;
      if (!h && S.nodeName === r.nodeName && !n.isFormatElement(S) && !S.previousSibling && n.onlyZeroWidthSpace(p.textContent.slice(m))) {
        let O = !0, N = p.nextSibling;
        for (; N; ) {
          if (!n.onlyZeroWidthSpace(N)) {
            O = !1;
            break;
          }
          N = N.nextSibling;
        }
        if (O)
          return n.copyTagAttributes(S, r), {
            ancestor: s,
            container: p,
            offset: m
          };
      }
      _.v = !1;
      const V = s, T = [r], z = s.cloneNode(!1);
      let A = p, q = m, Z = !1, U, F, P, I;
      if (function O(N, M) {
        const w = N.childNodes;
        for (let D = w.length - 1, Y; 0 <= D; D--) {
          const j = w[D];
          if (!j) continue;
          let G = M;
          if (Z && !n.isBreak(j)) {
            if (j.nodeType === 1) {
              if (n._isIgnoreNodeChange(j)) {
                r = r.cloneNode(!1);
                const me = j.cloneNode(!0);
                z.insertBefore(me, M), z.insertBefore(r, me), T.push(r);
              } else
                O(j, j);
              continue;
            }
            F = j, U = [];
            const ee = [];
            for (; F.parentNode !== null && F !== V && F !== r; )
              Y = c(F), Y && F.nodeType === 1 && (y(F) ? I || ee.push(Y) : U.push(Y)), F = F.parentNode;
            U = U.concat(ee);
            const $ = U.length > 0, ne = U.pop() || j;
            for (P = F = ne; U.length > 0; )
              F = U.pop(), P.appendChild(F), P = F;
            if (y(r.parentNode) && !y(ne) && (r = r.cloneNode(!1), z.insertBefore(r, z.firstChild), T.push(r)), !I && y(ne)) {
              r = r.cloneNode(!1);
              const me = ne.childNodes;
              for (let ve = 0, pe = me.length; ve < pe; ve++)
                r.appendChild(me[ve]);
              ne.appendChild(r), z.insertBefore(ne, z.firstChild), T.push(r), r.children.length > 0 ? M = F : M = r;
            } else $ ? (r.insertBefore(ne, r.firstChild), M = F) : M = r;
            if (I && j.nodeType === 3)
              if (C(j)) {
                const me = n.getParentElement(M, (function(ve) {
                  return this._isMaintainedNode(ve.parentNode) || ve.parentNode === z;
                }).bind(n));
                I.appendChild(me), r = me.cloneNode(!1), T.push(r), z.insertBefore(r, z.firstChild);
              } else
                I = null;
          }
          if (!Z && j === A) {
            I = C(j);
            const ee = n.createTextNode(A.nodeType === 1 ? "" : A.substringData(q, A.length - q)), $ = n.createTextNode(A.nodeType === 1 ? "" : A.substringData(0, q));
            if (I) {
              I = I.cloneNode(!1);
              const me = C(M);
              if (me && me.parentNode !== z) {
                let ve = me, pe = null;
                for (; ve.parentNode !== z; ) {
                  for (M = pe = ve.parentNode.cloneNode(!1); ve.childNodes[0]; )
                    pe.appendChild(ve.childNodes[0]);
                  ve.appendChild(pe), ve = ve.parentNode;
                }
                ve.parentNode.insertBefore(me, ve.parentNode.firstChild);
              }
              I = I.cloneNode(!1);
            } else y(r.parentNode) && !I && (r = r.cloneNode(!1), z.appendChild(r), T.push(r));
            for (n.onlyZeroWidthSpace(ee) || M.insertBefore(ee, M.firstChild), F = M, U = []; F !== z && F !== null; )
              Y = y(F) ? null : c(F), Y && F.nodeType === 1 && U.push(Y), F = F.parentNode;
            const ne = U.pop() || M;
            for (P = F = ne; U.length > 0; )
              F = U.pop(), P.appendChild(F), P = F;
            ne !== M ? (r.insertBefore(ne, r.firstChild), M = F) : M = r, n.isBreak(j) && r.appendChild(j.cloneNode(!1)), I ? (I.insertBefore(r, I.firstChild), z.insertBefore(I, z.firstChild), I = null) : z.insertBefore(r, z.firstChild), A = $, q = $.data.length, Z = !0, M.insertBefore(A, M.firstChild);
            continue;
          }
          Y = Z ? c(j) : j.cloneNode(!1), Y && (M.insertBefore(Y, M.firstChild), j.nodeType === 1 && !n.isBreak(j) && (G = Y)), O(j, G);
        }
      }(s, z), h && !g && !_.v)
        return {
          ancestor: s,
          container: p,
          offset: m
        };
      if (g = g && h, g)
        for (let O = 0; O < T.length; O++) {
          let N = T[O];
          const M = N.childNodes;
          let w = null;
          for (; M[0]; )
            w = M[0], z.insertBefore(w, N);
          n.removeItem(N), O === T.length - 1 && (A = w, q = w.textContent.length);
        }
      else if (h) {
        r = r.firstChild;
        for (let O = 0; O < T.length; O++)
          this._stripRemoveNode(T[O]);
      }
      if (!g && z.childNodes.length === 0)
        s.childNodes ? A = s.childNodes[0] : (A = n.createTextNode(n.zeroWidthSpace), s.appendChild(A));
      else {
        if (!h && r.textContent.length === 0)
          return n.removeEmptyNode(z, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        n.removeEmptyNode(z, r, !1), n.onlyZeroWidthSpace(z.textContent) ? (A = z.firstChild, q = A.textContent.length) : n.onlyZeroWidthSpace(A) && (A = r, q = 1);
        const O = { s: 0, e: 0 }, N = n.getNodePath(A, z, O);
        q += O.s;
        const M = n.mergeSameTags(z, [N], !0);
        s.parentNode.replaceChild(z, s), A = n.getNodeFromPath(N, z), q += M[0];
      }
      return {
        ancestor: z,
        container: A,
        offset: A.nodeType === 1 && q === 1 ? A.childNodes.length : q
      };
    },
    /**
     * @description Run plugin calls and basic commands.
     * @param {String} command Command string
     * @param {String} display Display type string ('command', 'submenu', 'dialog', 'container')
     * @param {Element} target The element of command button
     */
    actionCall: function(s, r, c) {
      if (r) {
        if (/more/i.test(r)) {
          if (c !== this._moreLayerActiveButton) {
            const p = e.element.toolbar.querySelector("." + s);
            p && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = c, p.style.display = "block", v._showToolbarBalloon(), v._showToolbarInline()), n.addClass(c, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), v._showToolbarBalloon(), v._showToolbarInline());
          return;
        }
        if (/container/.test(r) && (this._menuTray[s] === null || c !== this.containerActiveButton)) {
          this.callPlugin(s, this.containerOn.bind(this, c), c);
          return;
        }
        if (this.isReadOnly && n.arrayIncludes(this.resizingDisabledButtons, c)) return;
        if (/submenu/.test(r) && (this._menuTray[s] === null || c !== this.submenuActiveButton)) {
          this.callPlugin(s, this.submenuOn.bind(this, c), c);
          return;
        } else if (/dialog/.test(r)) {
          this.callPlugin(s, this.plugins[s].open.bind(this), c);
          return;
        } else /command/.test(r) ? this.callPlugin(s, this.plugins[s].action.bind(this), c) : /fileBrowser/.test(r) && this.callPlugin(s, this.plugins[s].open.bind(this, null), c);
      } else s && this.commandHandler(c, s);
      /submenu/.test(r) ? this.submenuOff() : /command/.test(r) || (this.submenuOff(), this.containerOff());
    },
    /**
     * @description Execute command of command button(All Buttons except submenu and dialog)
     * (selectAll, codeView, fullScreen, indent, outdent, undo, redo, removeFormat, print, preview, showBlocks, save, bold, underline, italic, strike, subscript, superscript, copy, cut, paste)
     * @param {Element|null} target The element of command button
     * @param {String} command Property of command button (data-value)
     */
    commandHandler: function(s, r) {
      if (!(u.isReadOnly && !/copy|cut|selectAll|codeView|fullScreen|print|preview|showBlocks/.test(r)))
        switch (r) {
          case "copy":
          case "cut":
            this.execCommand(r);
            break;
          case "paste":
            break;
          case "selectAll":
            this.containerOff();
            const c = e.element.wysiwyg;
            let p = n.getChildElement(c.firstChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !1) || c.firstChild, m = n.getChildElement(c.lastChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !0) || c.lastChild;
            if (!p || !m) return;
            if (n.isMedia(p)) {
              const C = this.getFileComponent(p), y = n.createElement("BR"), S = n.createElement(i.defaultTag);
              S.appendChild(y), p = C ? C.component : p, p.parentNode.insertBefore(S, p), p = y;
            }
            if (n.isMedia(m)) {
              const C = n.createElement("BR"), y = n.createElement(i.defaultTag);
              y.appendChild(C), c.appendChild(y), m = C;
            }
            v._showToolbarBalloon(this.setRange(p, 0, m, m.textContent.length));
            break;
          case "codeView":
            this.toggleCodeView();
            break;
          case "fullScreen":
            this.toggleFullScreen(s);
            break;
          case "indent":
          case "outdent":
            this.indent(r);
            break;
          case "undo":
            this.history.undo();
            break;
          case "redo":
            this.history.redo();
            break;
          case "removeFormat":
            this.removeFormat(), this.focus();
            break;
          case "print":
            this.print();
            break;
          case "preview":
            this.preview();
            break;
          case "showBlocks":
            this.toggleDisplayBlocks();
            break;
          case "dir":
            this.setDir(i.rtl ? "ltr" : "rtl");
            break;
          case "dir_ltr":
            this.setDir("ltr");
            break;
          case "dir_rtl":
            this.setDir("rtl");
            break;
          case "save":
            if (typeof i.callBackSave == "function")
              i.callBackSave(this.getContents(!1), this._variable.isChanged);
            else if (this._variable.isChanged && typeof k.save == "function")
              k.save();
            else
              throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
            this._variable.isChanged = !1, e.tool.save && e.tool.save.setAttribute("disabled", !0);
            break;
          default:
            r = i._defaultCommand[r.toLowerCase()] || r, this.commandMap[r] || (this.commandMap[r] = s);
            const g = this._variable.currentNodesMap, h = g.indexOf(r) > -1 ? null : n.createElement(r);
            let _ = r;
            /^SUB$/i.test(r) && g.indexOf("SUP") > -1 ? _ = "SUP" : /^SUP$/i.test(r) && g.indexOf("SUB") > -1 && (_ = "SUB"), this.nodeChange(h, this._commandMapStyles[r] || null, [_], !1), this.focus();
        }
    },
    /**
     * @description Remove format of the currently selected range
     */
    removeFormat: function() {
      this.nodeChange(null, null, null, null);
    },
    /**
     * @description This method implements indentation to selected range.
     * Setted "margin-left" to "25px" in the top "P" tag of the parameter node.
     * @param {String} command Separator ("indent" or "outdent")
     */
    indent: function(s) {
      const r = this.getRange(), c = this.getSelectedElements(null), p = [], m = s !== "indent", g = i.rtl ? "marginRight" : "marginLeft";
      let h = r.startContainer, _ = r.endContainer, C = r.startOffset, y = r.endOffset;
      for (let S = 0, V = c.length, T, z; S < V; S++)
        T = c[S], !n.isListCell(T) || !this.plugins.list ? (z = /\d+/.test(T.style[g]) ? n.getNumber(T.style[g], 0) : 0, m ? z -= 25 : z += 25, n.setStyle(T, g, z <= 0 ? "" : z + "px")) : (m || T.previousElementSibling) && p.push(T);
      p.length > 0 && this.plugins.list.editInsideList.call(this, m, p), this.effectNode = null, this.setRange(h, C, _, y), this.history.push(!1);
    },
    /**
     * @description Add or remove the class name of "body" so that the code block is visible
     */
    toggleDisplayBlocks: function() {
      const s = e.element.wysiwyg;
      n.toggleClass(s, "se-show-block"), n.hasClass(s, "se-show-block") ? n.addClass(this._styleCommandMap.showBlocks, "active") : n.removeClass(this._styleCommandMap.showBlocks, "active"), this._resourcesStateChange();
    },
    /**
     * @description Changes to code view or wysiwyg view
     */
    toggleCodeView: function() {
      const s = this._variable.isCodeView;
      this.controllersOff(), n.setDisabledButtons(!s, this.codeViewDisabledButtons), s ? (n.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), i.height === "auto" && !i.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(i.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, v._hideToolbar())), this.nativeFocus(), n.removeClass(this._styleCommandMap.codeView, "active"), n.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : i.height === "auto" && !i.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), i.codeMirrorEditor && i.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, v._showToolbarInline())), this._variable._range = null, e.element.code.focus(), n.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && n.setDisabledButtons(!0, this.resizingDisabledButtons), typeof k.toggleCodeView == "function" && k.toggleCodeView(this._variable.isCodeView, this);
    },
    /**
     * @description Convert the data of the code view and put it in the WYSIWYG area.
     * @private
     */
    _setCodeDataToEditor: function() {
      const s = this._getCodeView();
      if (i.fullPage) {
        const r = this._parser.parseFromString(s, "text/html");
        if (!this.options.__allowedScriptTag) {
          const m = r.head.children;
          for (let g = 0, h = m.length; g < h; g++)
            /^script$/i.test(m[g].tagName) && (r.head.removeChild(m[g]), g--, h--);
        }
        let c = r.head.innerHTML;
        (!r.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !r.head.querySelector("style")) && (c += n._setIframeCssTags(this.options)), this._wd.head.innerHTML = c, this._wd.body.innerHTML = this.convertContentsForEditor(r.body.innerHTML);
        const p = r.body.attributes;
        for (let m = 0, g = p.length; m < g; m++)
          p[m].name !== "contenteditable" && this._wd.body.setAttribute(p[m].name, p[m].value);
        if (!n.hasClass(this._wd.body, "sun-editor-editable")) {
          const m = i._editableClass.split(" ");
          for (let g = 0; g < m.length; g++)
            n.addClass(this._wd.body, i._editableClass[g]);
        }
      } else
        e.element.wysiwyg.innerHTML = s.length > 0 ? this.convertContentsForEditor(s) : "<" + i.defaultTag + "><br></" + i.defaultTag + ">";
    },
    /**
     * @description Convert the data of the WYSIWYG area and put it in the code view area.
     * @private
     */
    _setEditorDataToCodeView: function() {
      const s = this.convertHTMLForCodeView(e.element.wysiwyg, !1);
      let r = "";
      if (i.fullPage) {
        const c = n.getAttributesToString(this._wd.body, null);
        r = `<!DOCTYPE html>
<html>
` + this._wd.head.outerHTML.replace(/>(?!\n)/g, `>
`) + "<body " + c + `>
` + s + `</body>
</html>`;
      } else
        r = s;
      e.element.code.style.display = "block", e.element.wysiwygFrame.style.display = "none", this._setCodeView(r);
    },
    /**
     * @description Changes to full screen or default screen
     * @param {Element|null} element full screen button
     */
    toggleFullScreen: function(s) {
      const r = e.element.topArea, c = e.element.toolbar, p = e.element.editorArea, m = e.element.wysiwygFrame, g = e.element.code, h = this._variable;
      this.controllersOff();
      const _ = c.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      h.isFullScreen ? (h.isFullScreen = !1, m.style.cssText = h._wysiwygOriginCssText, g.style.cssText = h._codeOriginCssText, c.style.cssText = "", p.style.cssText = h._editorAreaOriginCssText, r.style.cssText = h._originCssText, d.body.style.overflow = h._bodyOverflow, i.height === "auto" && !i.codeMirrorEditor && v._codeViewAutoHeight(), i.toolbarContainer && i.toolbarContainer.appendChild(c), i.stickyToolbar > -1 && n.removeClass(c, "se-toolbar-sticky"), h._fullScreenAttrs.sticky && !i.toolbarContainer && (h._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", n.addClass(c, "se-toolbar-sticky")), this._isInline = h._fullScreenAttrs.inline, this._isBalloon = h._fullScreenAttrs.balloon, this._isInline && v._showToolbarInline(), i.toolbarContainer && n.removeClass(c, "se-toolbar-balloon"), v.onScroll_window(), s && n.changeElement(s.firstElementChild, b.expansion), e.element.topArea.style.marginTop = "", n.removeClass(this._styleCommandMap.fullScreen, "active")) : (h.isFullScreen = !0, h._fullScreenAttrs.inline = this._isInline, h._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), i.toolbarContainer && e.element.relative.insertBefore(c, p), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (h._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", n.removeClass(c, "se-toolbar-sticky")), h._bodyOverflow = d.body.style.overflow, d.body.style.overflow = "hidden", h._editorAreaOriginCssText = p.style.cssText, h._wysiwygOriginCssText = m.style.cssText, h._codeOriginCssText = g.style.cssText, p.style.cssText = c.style.cssText = "", m.style.cssText = (m.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + i._editorStyles.editor, g.style.cssText = (g.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], c.style.width = m.style.height = g.style.height = "100%", c.style.position = "relative", c.style.display = "block", h.innerHeight_fullScreen = f.innerHeight - c.offsetHeight, p.style.height = h.innerHeight_fullScreen - i.fullScreenOffset + "px", s && n.changeElement(s.firstElementChild, b.reduction), i.iframe && i.height === "auto" && (p.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = i.fullScreenOffset + "px", n.addClass(this._styleCommandMap.fullScreen, "active")), _ && k.toolbar.hide(), typeof k.toggleFullScreen == "function" && k.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const s = n.createElement("IFRAME");
      s.style.display = "none", d.body.appendChild(s);
      const r = i.printTemplate ? i.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), c = n.getIframeDocument(s), p = this._wd;
      if (i.iframe) {
        const m = i._printClass !== null ? 'class="' + i._printClass + '"' : i.fullPage ? n.getAttributesToString(p.body, ["contenteditable"]) : 'class="' + i._editableClass + '"';
        c.write(
          "<!DOCTYPE html><html><head>" + p.head.innerHTML + "</head><body " + m + ">" + r + "</body></html>"
        );
      } else {
        const m = d.head.getElementsByTagName("link"), g = d.head.getElementsByTagName("style");
        let h = "";
        for (let _ = 0, C = m.length; _ < C; _++)
          h += m[_].outerHTML;
        for (let _ = 0, C = g.length; _ < C; _++)
          h += g[_].outerHTML;
        c.write(
          "<!DOCTYPE html><html><head>" + h + '</head><body class="' + (i._printClass !== null ? i._printClass : i._editableClass) + '">' + r + "</body></html>"
        );
      }
      this.showLoading(), f.setTimeout(function() {
        try {
          if (s.focus(), n.isIE_Edge || n.isChromium || d.documentMode || f.StyleMedia)
            try {
              s.contentWindow.document.execCommand("print", !1, null);
            } catch {
              s.contentWindow.print();
            }
          else
            s.contentWindow.print();
        } catch (m) {
          throw Error("[SUNEDITOR.core.print.fail] error: " + m);
        } finally {
          u.closeLoading(), n.removeItem(s);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      u.submenuOff(), u.containerOff(), u.controllersOff();
      const s = i.previewTemplate ? i.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), r = f.open("", "_blank");
      r.mimeType = "text/html";
      const c = this._wd;
      if (i.iframe) {
        const p = i._printClass !== null ? 'class="' + i._printClass + '"' : i.fullPage ? n.getAttributesToString(c.body, ["contenteditable"]) : 'class="' + i._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + c.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + p + ">" + s + "</body></html>"
        );
      } else {
        const p = d.head.getElementsByTagName("link"), m = d.head.getElementsByTagName("style");
        let g = "";
        for (let h = 0, _ = p.length; h < _; h++)
          g += p[h].outerHTML;
        for (let h = 0, _ = m.length; h < _; h++)
          g += m[h].outerHTML;
        r.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + o.toolbar.preview + "</title>" + g + '</head><body class="' + (i._printClass !== null ? i._printClass : i._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + s + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(s) {
      const r = s === "rtl", c = this._prevRtl !== r;
      this._prevRtl = i.rtl = r, c && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && n.changeElement(e.tool.indent.firstElementChild, b.indent), e.tool.outdent && n.changeElement(e.tool.outdent.firstElementChild, b.outdent));
      const p = e.element;
      r ? (n.addClass(p.topArea, "se-rtl"), n.addClass(p.wysiwygFrame, "se-rtl")) : (n.removeClass(p.topArea, "se-rtl"), n.removeClass(p.wysiwygFrame, "se-rtl"));
      const m = n.getListChildren(p.wysiwyg, function(h) {
        return n.isFormatElement(h) && (h.style.marginRight || h.style.marginLeft || h.style.textAlign);
      });
      for (let h = 0, _ = m.length, C, y, S; h < _; h++)
        C = m[h], S = C.style.marginRight, y = C.style.marginLeft, (S || y) && (C.style.marginRight = y, C.style.marginLeft = S), S = C.style.textAlign, S === "left" ? C.style.textAlign = "right" : S === "right" && (C.style.textAlign = "left");
      const g = e.tool;
      g.dir && (n.changeTxt(g.dir.querySelector(".se-tooltip-text"), o.toolbar[i.rtl ? "dir_ltr" : "dir_rtl"]), n.changeElement(g.dir.firstElementChild, b[i.rtl ? "dir_ltr" : "dir_rtl"])), g.dir_ltr && (r ? n.removeClass(g.dir_ltr, "active") : n.addClass(g.dir_ltr, "active")), g.dir_rtl && (r ? n.addClass(g.dir_rtl, "active") : n.removeClass(g.dir_rtl, "active"));
    },
    /**
     * @description Sets the HTML string
     * @param {String|undefined} html HTML string
     */
    setContents: function(s) {
      this.removeRange();
      const r = s == null ? "" : this.convertContentsForEditor(s, null, null);
      if (!this._variable.isCodeView)
        e.element.wysiwyg.innerHTML = r, this._resetComponents(), this.history.push(!1);
      else {
        const c = this.convertHTMLForCodeView(r, !1);
        this._setCodeView(c);
      }
    },
    /**
     * @description Sets the contents of the iframe's head tag and body tag when using the "iframe" or "fullPage" option.
     * @param {Object} ctx { head: HTML string, body: HTML string}
     */
    setIframeContents: function(s) {
      if (!i.iframe) return !1;
      s.head && (this._wd.head.innerHTML = this.options.__allowedScriptTag ? s.head : s.head.replace(this.__scriptTagRegExp, "")), s.body && (this._wd.body.innerHTML = this.convertContentsForEditor(s.body)), this._resetComponents();
    },
    /**
     * @description Gets the current contents
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {Object}
     */
    getContents: function(s) {
      const r = this.cleanHTML(e.element.wysiwyg.innerHTML, null, null), c = n.createElement("DIV");
      c.innerHTML = r;
      const p = n.getListChildren(c, function(m) {
        return m.hasAttribute("contenteditable");
      });
      for (let m = 0, g = p.length; m < g; m++)
        p[m].removeAttribute("contenteditable");
      if (i.fullPage && !s) {
        const m = n.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + m + ">" + c.innerHTML + "</body></html>";
      } else
        return c.innerHTML;
    },
    /**
     * @description Gets the current contents with containing parent div(div.sun-editor-editable).
     * <div class="sun-editor-editable">{contents}</div>
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getFullContents: function(s) {
      return '<div class="sun-editor-editable' + (i.rtl ? " se-rtl" : "") + '">' + this.getContents(s) + "</div>";
    },
    /**
     * @description Returns HTML string according to tag type and configuration.
     * Use only "cleanHTML"
     * @param {Node} node Node
     * @param {Boolean} requireFormat If true, text nodes that do not have a format node is wrapped with the format tag.
     * @private
     */
    _makeLine: function(s, r) {
      const c = i.defaultTag;
      if (s.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(s.nodeName)) return "";
        if (/__se__tag/.test(s.className)) return s.outerHTML;
        const p = n.getListChildNodes(s, function(m) {
          return n.isSpanWithoutAttr(m) && !n.getParentElement(m, n.isNotCheckingNode);
        }) || [];
        for (let m = p.length - 1; m >= 0; m--)
          p[m].outerHTML = p[m].innerHTML;
        return !r || n.isFormatElement(s) || n.isRangeFormatElement(s) || n.isComponent(s) || n.isFigures(s) || n.isAnchor(s) && n.isMedia(s.firstElementChild) ? n.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML : "<" + c + ">" + (n.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML) + "</" + c + ">";
      }
      if (s.nodeType === 3) {
        if (!r) return n._HTMLConvertor(s.textContent);
        const p = s.textContent.split(/\n/g);
        let m = "";
        for (let g = 0, h = p.length, _; g < h; g++)
          _ = p[g].trim(), _.length > 0 && (m += "<" + c + ">" + n._HTMLConvertor(_) + "</" + c + ">");
        return m;
      }
      return s.nodeType === 8 && this._allowHTMLComments ? "<!--" + s.textContent.trim() + "-->" : "";
    },
    /**
     * @description Removes attribute values such as style and converts tags that do not conform to the "html5" standard.
     * @param {String} text 
     * @returns {String} HTML string
     * @private
     */
    _tagConvertor: function(s) {
      if (!this._disallowedTextTagsRegExp) return s;
      const r = i._textTagsMap;
      return s.replace(this._disallowedTextTagsRegExp, function(c, p, m, g) {
        return p + (typeof r[m] == "string" ? r[m] : m) + (g ? " " + g : "");
      });
    },
    /**
     * @description Delete disallowed tags
     * @param {String} html HTML string
     * @returns {String}
     * @private
     */
    _deleteDisallowedTags: function(s) {
      return s = s.replace(this.__disallowedTagsRegExp, "").replace(/<[a-z0-9]+\:[a-z0-9]+[^>^\/]*>[^>]*<\/[a-z0-9]+\:[a-z0-9]+>/gi, ""), /\bfont\b/i.test(this.options._editorTagsWhitelist) || (s = s.replace(/(<\/?)font(\s?)/gi, "$1span$2")), s.replace(this.editorTagsWhitelistRegExp, "").replace(this.editorTagsBlacklistRegExp, "");
    },
    _convertFontSize: function(s, r) {
      const c = this._w.Math, p = r.match(/(\d+(?:\.\d+)?)(.+)/), m = p ? p[1] * 1 : n.fontValueMap[r], g = p ? p[2] : "rem";
      let h = m;
      switch (/em/.test(g) ? h = c.round(m / 0.0625) : g === "pt" ? h = c.round(m * 1.333) : g === "%" && (h = m / 100), s) {
        case "em":
        case "rem":
        case "%":
          return (h * 0.0625).toFixed(2) + s;
        case "pt":
          return c.floor(h / 1.333) + s;
        default:
          return h + s;
      }
    },
    _cleanStyle: function(s, r, c) {
      let p = (s.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(c) && !p && (s.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const m = (s.match(/\ssize="([^"]+)"/i) || [])[1], g = (s.match(/\sface="([^"]+)"/i) || [])[1], h = (s.match(/\scolor="([^"]+)"/i) || [])[1];
        (m || g || h) && (p = 'style="' + (m ? "font-size:" + this.util.getNumber(m / 3.333, 1) + "rem;" : "") + (g ? "font-family:" + g + ";" : "") + (h ? "color:" + h + ";" : "") + '"');
      }
      if (p) {
        r || (r = []);
        const m = p.replace(/&quot;/g, "").match(this._cleanStyleRegExp[c]);
        if (m) {
          const g = [];
          for (let h = 0, _ = m.length, C; h < _; h++)
            if (C = m[h].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), C && !/inherit|initial|revert|unset/i.test(C[3])) {
              const y = n.kebabToCamelCase(C[1].trim()), S = this.wwComputedStyle[y] ? this.wwComputedStyle[y].replace(/"/g, "") : "", V = C[3].trim();
              switch (y) {
                case "fontFamily":
                  if (!i.plugins.font || i.font.indexOf(V) === -1) continue;
                  break;
                case "fontSize":
                  if (!i.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(C[0]) || (C[0] = C[0].replace((C[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, i.fontSizeUnit)));
                  break;
                case "color":
                  if (!i.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(V)) continue;
                  break;
                case "backgroundColor":
                  if (!i.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(V)) continue;
                  break;
              }
              S !== V && g.push(C[0]);
            }
          g.length > 0 && r.push('style="' + g.join(";") + '"');
        }
      }
      return r;
    },
    /**
     * @description Tag and tag attribute check RegExp function. (used by "cleanHTML" and "convertContentsForEditor")
     * @param {Boolean} lowLevelCheck Row level check
     * @param {String} m RegExp value
     * @param {String} t RegExp value
     * @returns {String}
     * @private
     */
    _cleanTags: function(s, r, c) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(r)) return r;
      let p = null;
      const m = c.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), g = this._attributesTagsBlacklist[m];
      r = r.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), g ? r = r.replace(g, "") : r = r.replace(this._attributesBlacklistRegExp, "");
      const h = this._attributesTagsWhitelist[m];
      if (h ? p = r.match(h) : p = r.match(s ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), s || m === "span" || m === "li" || this._cleanStyleRegExp[m])
        if (m === "a") {
          const _ = r.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          _ && (p || (p = []), p.push(_[0]));
        } else (!p || !/style=/i.test(p.toString())) && ((m === "span" || m === "li") && (p = this._cleanStyle(r, p, "span")), this._cleanStyleRegExp[m] ? p = this._cleanStyle(r, p, m) : /^(P|DIV|H[1-6]|PRE)$/i.test(m) && (p = this._cleanStyle(r, p, "format")));
      else {
        const _ = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        _ && !p ? p = [_[0]] : _ && !p.some(function(C) {
          return /^style/.test(C.trim());
        }) && p.push(_[0]);
      }
      if (n.isFigures(m)) {
        const _ = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        p || (p = []), _ && p.push(_[0]);
      }
      if (p)
        for (let _ = 0, C = p.length, y; _ < C; _++)
          y = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(p[_].trim()) ? "" : p[_], c += (/^\s/.test(y) ? "" : " ") + y;
      return c;
    },
    /**
     * @description Determines if formatting is required and returns a domTree
     * @param {Element} dom documentFragment
     * @returns {Element}
     * @private
     */
    _editFormat: function(s) {
      let r = "", c;
      const p = s.childNodes;
      for (let m = 0, g = p.length, h; m < g; m++)
        h = p[m], h.nodeType === 8 ? r += "<!-- " + h.textContent + " -->" : !n.isFormatElement(h) && !n.isRangeFormatElement(h) && !n.isComponent(h) && !/meta/i.test(h.nodeName) ? (c || (c = n.createElement(i.defaultTag)), c.appendChild(h), m--, g--) : (c && (r += c.outerHTML, c = null), r += h.outerHTML);
      return c && (r += c.outerHTML), d.createRange().createContextualFragment(r);
    },
    _convertListCell: function(s) {
      let r = "";
      for (let c = 0, p = s.length, m; c < p; c++)
        m = s[c], m.nodeType === 1 ? n.isList(m) ? r += m.innerHTML : n.isListCell(m) ? r += m.outerHTML : n.isFormatElement(m) ? r += "<li>" + (m.innerHTML.trim() || "<br>") + "</li>" : n.isRangeFormatElement(m) && !n.isTable(m) ? r += this._convertListCell(m) : r += "<li>" + m.outerHTML + "</li>" : r += "<li>" + (m.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(s) {
      let r = !1;
      for (let c = 0, p = s.length, m; c < p; c++)
        if (m = s[c], m.nodeType === 1 && !n.isTextStyleElement(m) && !n.isBreak(m) && !this.__disallowedTagNameRegExp.test(m.nodeName)) {
          r = !0;
          break;
        }
      return r;
    },
    /**
     * @description Gets the clean HTML code for editor
     * @param {String} html HTML string
     * @param {String|RegExp|null} whitelist Regular expression of allowed tags.
     * RegExp object is create by util.createTagsWhitelist method. (core.pasteTagsWhitelistRegExp)
     * @param {String|RegExp|null} blacklist Regular expression of disallowed tags.
     * RegExp object is create by util.createTagsBlacklist method. (core.pasteTagsBlacklistRegExp)
     * @returns {String}
     */
    cleanHTML: function(s, r, c) {
      if (!i.strictMode) return n.htmlCompress(s);
      s = this._deleteDisallowedTags(this._parser.parseFromString(n.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const p = d.createRange().createContextualFragment(s);
      try {
        n._consistencyCheckOfHTML(p, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, i.strictHTMLValidation);
      } catch (_) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + _);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const _ = p.querySelectorAll(this.managedTagsInfo.query);
        for (let C = 0, y = _.length, S, V; C < y; C++) {
          V = [].slice.call(_[C].classList);
          for (let T = 0, z = V.length; T < z; T++)
            if (S = this.managedTagsInfo.map[V[T]], S) {
              S(_[C]);
              break;
            }
        }
      }
      let m = p.childNodes, g = "";
      const h = this._isFormatData(m);
      h && (m = this._editFormat(p).childNodes);
      for (let _ = 0, C = m.length, y; _ < C; _++) {
        if (y = m[_], this.__allowedScriptRegExp.test(y.nodeName)) {
          g += y.outerHTML;
          continue;
        }
        g += this._makeLine(y, h);
      }
      return g = n.htmlRemoveWhiteSpace(g), g ? (r && (g = g.replace(typeof r == "string" ? n.createTagsWhitelist(r) : r, "")), c && (g = g.replace(typeof c == "string" ? n.createTagsBlacklist(c) : c, ""))) : g = s, this._tagConvertor(g);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(s) {
      if (!i.strictMode) return n.htmlCompress(s);
      s = this._deleteDisallowedTags(this._parser.parseFromString(n.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0));
      const r = d.createRange().createContextualFragment(s);
      try {
        n._consistencyCheckOfHTML(r, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, i.strictHTMLValidation);
      } catch (g) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + g);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const g = r.querySelectorAll(this.managedTagsInfo.query);
        for (let h = 0, _ = g.length, C, y; h < _; h++) {
          y = [].slice.call(g[h].classList);
          for (let S = 0, V = y.length; S < V; S++)
            if (C = this.managedTagsInfo.map[y[S]], C) {
              C(g[h]);
              break;
            }
        }
      }
      const c = r.childNodes;
      let p = "", m = null;
      for (let g = 0, h; g < c.length; g++) {
        if (h = c[g], this.__allowedScriptRegExp.test(h.nodeName)) {
          p += h.outerHTML;
          continue;
        }
        if (!n.isFormatElement(h) && !n.isRangeFormatElement(h) && !n.isComponent(h) && !n.isFigures(h) && h.nodeType !== 8 && !/__se__tag/.test(h.className)) {
          if (m || (m = n.createElement(i.defaultTag)), m.appendChild(h), g--, c[g + 1] && !n.isFormatElement(c[g + 1]))
            continue;
          h = m, m = null;
        }
        m && (p += this._makeLine(m, !0), m = null), p += this._makeLine(h, !0);
      }
      return m && (p += this._makeLine(m, !0)), p.length === 0 ? "<" + i.defaultTag + "><br></" + i.defaultTag + ">" : (p = n.htmlRemoveWhiteSpace(p), this._tagConvertor(p));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(s, r) {
      let c = "";
      const p = f.RegExp, m = new p("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), g = typeof s == "string" ? d.createRange().createContextualFragment(s) : s, h = (function(y) {
        return this.isFormatElement(y) || this.isComponent(y);
      }).bind(n), _ = r ? "" : `
`;
      let C = r ? 0 : this._variable.codeIndent * 1;
      return C = C > 0 ? new f.Array(C + 1).join(" ") : "", function y(S, V) {
        const T = S.childNodes, z = m.test(S.nodeName), A = z ? V : "";
        for (let q = 0, Z = T.length, U, F, P, I, O, N; q < Z; q++) {
          if (U = T[q], I = m.test(U.nodeName), F = I ? _ : "", P = h(U) && !z && !/^(TH|TD)$/i.test(S.nodeName) ? _ : "", U.nodeType === 8) {
            c += `
<!-- ` + U.textContent.trim() + " -->" + F;
            continue;
          }
          if (U.nodeType === 3) {
            n.isList(U.parentElement) || (c += n._HTMLConvertor(/^\n+$/.test(U.data) ? "" : U.data));
            continue;
          }
          if (U.childNodes.length === 0) {
            c += (/^HR$/i.test(U.nodeName) ? _ : "") + (/^PRE$/i.test(U.parentElement.nodeName) && /^BR$/i.test(U.nodeName) ? "" : A) + U.outerHTML + F;
            continue;
          }
          U.outerHTML ? (O = U.nodeName.toLowerCase(), N = A || I ? V : "", c += (P || (z ? "" : F)) + N + U.outerHTML.match(p("<" + O + "[^>]*>", "i"))[0] + F, y(U, V + C), c += (/\n$/.test(c) ? N : "") + "</" + O + ">" + (P || F || z || /^(TH|TD)$/i.test(U.nodeName) ? _ : "")) : c += new f.XMLSerializer().serializeToString(U);
        }
      }(g, ""), c.trim() + _;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(s, r, c) {
      d.addEventListener(s, r, c), i.iframe && this._wd.addEventListener(s, r);
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(s, r) {
      d.removeEventListener(s, r), i.iframe && this._wd.removeEventListener(s, r);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(s) {
      const r = i.maxCharCount, c = i.charCounterType;
      let p = 0;
      if (s && (p = this.getCharLength(s, c)), this._setCharCount(), r > 0) {
        let m = !1;
        const g = k.getCharCount(c);
        if (g > r) {
          if (m = !0, p > 0) {
            this._editorRange();
            const h = this.getRange(), _ = h.endOffset - 1, C = this.getSelectionNode().textContent, y = h.endOffset - (g - r);
            this.getSelectionNode().textContent = C.slice(0, y < 0 ? 0 : y) + C.slice(h.endOffset, C.length), this.setRange(h.endContainer, _, h.endContainer, _);
          }
        } else g + p > r && (m = !0);
        if (m && (this._callCounterBlink(), p > 0))
          return !1;
      }
      return !0;
    },
    /**
     * @description When "element" is added, if it is greater than "options.maxCharCount", false is returned.
     * @param {Node|String} element Element node or String.
     * @param {String|null} charCounterType charCounterType. If it is null, the options.charCounterType
     * @returns {Boolean}
     */
    checkCharCount: function(s, r) {
      if (i.maxCharCount) {
        const c = r || i.charCounterType, p = this.getCharLength(typeof s == "string" ? s : this._charTypeHTML && s.nodeType === 1 ? s.outerHTML : s.textContent, c);
        if (p > 0 && p + k.getCharCount(c) > i.maxCharCount)
          return this._callCounterBlink(), !1;
      }
      return !0;
    },
    /**
     * @description Get the length of the content.
     * Depending on the option, the length of the character is taken. (charCounterType)
     * @param {String} content Content to count
     * @param {String} charCounterType options.charCounterType
     * @returns {Number}
     */
    getCharLength: function(s, r) {
      return /byte/.test(r) ? n.getByteLength(s) : s.length;
    },
    /**
     * @description Reset buttons of the responsive toolbar.
     */
    resetResponsiveToolbar: function() {
      u.controllersOff();
      const s = v._responsiveButtonSize;
      if (s) {
        let r = 0;
        (u._isBalloon || u._isInline) && i.toolbarWidth === "auto" ? r = e.element.topArea.offsetWidth : r = e.element.toolbar.offsetWidth;
        let c = "default";
        for (let p = 1, m = s.length; p < m; p++)
          if (r < s[p]) {
            c = s[p] + "";
            break;
          }
        v._responsiveCurrentSize !== c && (v._responsiveCurrentSize = c, k.setToolbarButtons(v._responsiveButtons[c]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && f.setTimeout((function(s, r) {
        this.textContent && s && (this.textContent = s.getCharCount(r.charCounterType));
      }).bind(e.element.charCounter, k, i), 0);
    },
    /**
     * @description The character counter blinks.
     * @private
     */
    _callCounterBlink: function() {
      const s = e.element.charWrapper;
      s && !n.hasClass(s, "se-blink") && (n.addClass(s, "se-blink"), f.setTimeout(function() {
        n.removeClass(s, "se-blink");
      }, 600));
    },
    /**
     * @description Check the components such as image and video and modify them according to the format.
     * @private
     */
    _checkComponents: function() {
      for (let s = 0, r = this._fileInfoPluginsCheck.length; s < r; s++)
        this._fileInfoPluginsCheck[s]();
    },
    /**
     * @description Initialize the information of the components.
     * @private
     */
    _resetComponents: function() {
      for (let s = 0, r = this._fileInfoPluginsReset.length; s < r; s++)
        this._fileInfoPluginsReset[s]();
    },
    /**
     * @description Set method in the code view area
     * @param {String} value HTML string
     * @private
     */
    _setCodeView: function(s) {
      i.codeMirrorEditor ? i.codeMirrorEditor.getDoc().setValue(s) : e.element.code.value = s;
    },
    /**
     * @description Get method in the code view area
     * @private
     */
    _getCodeView: function() {
      return i.codeMirrorEditor ? i.codeMirrorEditor.getDoc().getValue() : e.element.code.value;
    },
    /**
     * @description remove class, display text.
     * @param {Array|null} ignoredList Igonred button list
     */
    _setKeyEffect: function(s) {
      const r = this.commandMap, c = this.activePlugins;
      for (let p in r)
        s.indexOf(p) > -1 || !n.hasOwn(r, p) || (c.indexOf(p) > -1 ? l[p].active.call(this, null) : r.OUTDENT && /^OUTDENT$/i.test(p) ? n.isImportantDisabled(r.OUTDENT) || r.OUTDENT.setAttribute("disabled", !0) : r.INDENT && /^INDENT$/i.test(p) ? n.isImportantDisabled(r.INDENT) || r.INDENT.removeAttribute("disabled") : n.removeClass(r[p], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(s, r) {
      const c = f.RegExp;
      this._ww = i.iframe ? e.element.wysiwygFrame.contentWindow : f, this._wd = d, this._charTypeHTML = i.charCounterType === "byte-html", this.wwComputedStyle = f.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = n.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + n.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(I) {
        return this.test(I) ? I : "";
      }).bind(i.allowedClassNames);
      const p = i.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new c("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new c("<(" + p + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + p + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new c("^(" + p + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new c("^" + (i.__allowedScriptTag ? "script" : "") + "$", "i"), !i.iframe && typeof f.ShadowRoot == "function") {
        let I = e.element.wysiwygFrame;
        for (; I; ) {
          if (I.shadowRoot) {
            this._shadowRoot = I.shadowRoot;
            break;
          } else if (I instanceof f.ShadowRoot) {
            this._shadowRoot = I;
            break;
          }
          I = I.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const m = f.Object.keys(i._textTagsMap), g = i.addTagsWhitelist ? i.addTagsWhitelist.split("|").filter(function(I) {
        return /b|i|ins|s|strike/i.test(I);
      }) : [];
      for (let I = 0; I < g.length; I++)
        m.splice(m.indexOf(g[I].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = m.length === 0 ? null : new c("(<\\/?)(" + m.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const h = function(I, O) {
        return I ? I === "*" ? "[a-z-]+" : O ? I + "|" + O : I : "^";
      }, y = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", S = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = i._editorTagsWhitelist.indexOf("//") > -1 || i._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new c("^(" + h(i._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new c("^(" + (i.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = n.createTagsWhitelist(h(i._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = n.createTagsBlacklist(i.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = n.createTagsWhitelist(h(i.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = n.createTagsBlacklist(i.pasteTagsBlacklist);
      const V = '\\s*=\\s*(")[^"]*\\1', T = i.attributesWhitelist;
      let z = {}, A = "";
      if (T)
        for (let I in T)
          !n.hasOwn(T, I) || /^on[a-z]+$/i.test(T[I]) || (I === "all" ? A = h(T[I], y) : z[I] = new c("\\s(?:" + h(T[I], "") + ")" + V, "ig"));
      this._attributesWhitelistRegExp = new c("\\s(?:" + (A || y + "|" + S) + ")" + V, "ig"), this._attributesWhitelistRegExp_all_data = new c("\\s(?:" + ((A || y) + "|data-[a-z0-9\\-]+") + ")" + V, "ig"), this._attributesTagsWhitelist = z;
      const q = i.attributesBlacklist;
      if (z = {}, A = "", q)
        for (let I in q)
          n.hasOwn(q, I) && (I === "all" ? A = h(q[I], "") : z[I] = new c("\\s(?:" + h(q[I], "") + ")" + V, "ig"));
      this._attributesBlacklistRegExp = new c("\\s(?:" + (A || "^") + ")" + V, "ig"), this._attributesTagsBlacklist = z, this._isInline = /inline/i.test(i.mode), this._isBalloon = /balloon|balloon-always/i.test(i.mode), this._isBalloonAlways = /balloon-always/i.test(i.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const Z = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let U = [], F, P;
      for (let I in l)
        if (n.hasOwn(l, I)) {
          if (F = l[I], P = t[I], (F.active || F.action) && P && this.callPlugin(I, null, P), typeof F.checkFileInfo == "function" && typeof F.resetFileInfo == "function" && (this.callPlugin(I, null, P), this._fileInfoPluginsCheck.push(F.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(F.resetFileInfo.bind(this))), f.Array.isArray(F.fileTags)) {
            const O = F.fileTags;
            this.callPlugin(I, null, P), this._fileManager.tags = this._fileManager.tags.concat(O), U.push(I);
            for (let N = 0, M = O.length; N < M; N++)
              this._fileManager.pluginMap[O[N].toLowerCase()] = I;
          }
          if (F.managedTags) {
            const O = F.managedTags();
            Z.push("." + O.className), this.managedTagsInfo.map[O.className] = O.method.bind(this);
          }
        }
      this.managedTagsInfo.query = Z.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new c("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new c("^(" + (U.length === 0 ? "^" : U.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = Ar(this, this._onChange_historyStack.bind(this)), this.addModule([mn]), i.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, i._editorStyles.editor && (e.element.wysiwyg.style.cssText = i._editorStyles.editor), i.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(s, r);
    },
    /**
     * @description Caching basic buttons to use
     * @private
     */
    _cachingButtons: function() {
      this.codeViewDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-code-view-enabled"]):not([data-display="MORE"])'), this.resizingDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-resizing-enabled"]):not([data-display="MORE"])');
      const s = e.tool, r = this.commandMap;
      r.INDENT = s.indent, r.OUTDENT = s.outdent, r[i.textTags.bold.toUpperCase()] = s.bold, r[i.textTags.underline.toUpperCase()] = s.underline, r[i.textTags.italic.toUpperCase()] = s.italic, r[i.textTags.strike.toUpperCase()] = s.strike, r[i.textTags.sub.toUpperCase()] = s.subscript, r[i.textTags.sup.toUpperCase()] = s.superscript, this._styleCommandMap = {
        fullScreen: s.fullScreen,
        showBlocks: s.showBlocks,
        codeView: s.codeView
      }, this._saveButtonStates();
    },
    /**
     * @description Initializ wysiwyg area (Only called from core._init)
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _initWysiwygArea: function(s, r) {
      e.element.wysiwyg.innerHTML = s ? r : this.convertContentsForEditor((typeof r == "string" ? r : /^TEXTAREA$/i.test(e.element.originElement.nodeName) ? e.element.originElement.value : e.element.originElement.innerHTML) || "");
    },
    /**
     * @description Called when there are changes to tags in the wysiwyg region.
     * @private
     */
    _resourcesStateChange: function() {
      this._iframeAutoHeight(), this._checkPlaceholder();
    },
    /**
     * @description Called when after execute "history.push"
     * @private
     */
    _onChange_historyStack: function() {
      this.hasFocus && v._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), k.onChange && k.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && v._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      this._iframeAuto ? f.setTimeout(function() {
        const s = u._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = s + "px", n.isResizeObserverSupported || u.__callResizeFunction(s, null);
      }) : n.isResizeObserverSupported || u.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(s, r) {
      s = s === -1 ? r.borderBoxSize && r.borderBoxSize[0] ? r.borderBoxSize[0].blockSize : r.contentRect.height + this._editorHeightPadding : s, this._editorHeight !== s && (typeof k.onResizeEditor == "function" && k.onResizeEditor(s, this._editorHeight, u, r), this._editorHeight = s);
    },
    /**
     * @description Set display property when there is placeholder.
     * @private
     */
    _checkPlaceholder: function() {
      if (this._placeholder) {
        if (this._variable.isCodeView) {
          this._placeholder.style.display = "none";
          return;
        }
        const s = e.element.wysiwyg;
        !n.onlyZeroWidthSpace(s.textContent) || s.querySelector(n._allowedEmptyNodeList) || (s.innerText.match(/\n/g) || "").length > 1 ? this._placeholder.style.display = "none" : this._placeholder.style.display = "block";
      }
    },
    /**
     * @description If there is no default format, add a format and move "selection".
     * @param {String|null} formatName Format tag name (default: 'P')
     * @returns {undefined|null}
     * @private
     */
    _setDefaultFormat: function(s) {
      if (this._fileManager.pluginRegExp.test(this.currentControllerName)) return;
      const r = this.getRange(), c = r.commonAncestorContainer, p = r.startContainer, m = n.getRangeFormatElement(c, null);
      let g, h, _;
      const C = n.getParentElement(c, n.isComponent);
      if (!(C && !n.isTable(C))) {
        if (c.nodeType === 1 && c.getAttribute("data-se-embed") === "true") {
          let y = c.nextElementSibling;
          n.isFormatElement(y) || (y = this.appendFormatTag(c, i.defaultTag)), this.setRange(y.firstChild, 0, y.firstChild, 0);
          return;
        }
        if (!((n.isRangeFormatElement(p) || n.isWysiwygDiv(p)) && (n.isComponent(p.children[r.startOffset]) || n.isComponent(p.children[r.startOffset - 1])))) {
          if (n.getParentElement(c, n.isNotCheckingNode)) return null;
          if (m) {
            _ = n.createElement(s || i.defaultTag), _.innerHTML = m.innerHTML, _.childNodes.length === 0 && (_.innerHTML = n.zeroWidthSpace), m.innerHTML = _.outerHTML, _ = m.firstChild, g = n.getEdgeChildNodes(_, null).sc, g || (g = n.createTextNode(n.zeroWidthSpace), _.insertBefore(g, _.firstChild)), h = g.textContent.length, this.setRange(g, h, g, h);
            return;
          }
          if (n.isRangeFormatElement(c) && c.childNodes.length <= 1) {
            let y = null;
            c.childNodes.length === 1 && n.isBreak(c.firstChild) ? y = c.firstChild : (y = n.createTextNode(n.zeroWidthSpace), c.appendChild(y)), this.setRange(y, 1, y, 1);
            return;
          }
          try {
            if (c.nodeType === 3 && (_ = n.createElement(s || i.defaultTag), c.parentNode.insertBefore(_, c), _.appendChild(c)), n.isBreak(_.nextSibling) && n.removeItem(_.nextSibling), n.isBreak(_.previousSibling) && n.removeItem(_.previousSibling), n.isBreak(g)) {
              const y = n.createTextNode(n.zeroWidthSpace);
              g.parentNode.insertBefore(y, g), g = y;
            }
          } catch {
            this.execCommand("formatBlock", !1, s || i.defaultTag), this.removeRange(), this._editorRange(), this.effectNode = null;
            return;
          }
          if (_ && (n.isBreak(_.nextSibling) && n.removeItem(_.nextSibling), n.isBreak(_.previousSibling) && n.removeItem(_.previousSibling), n.isBreak(g))) {
            const y = n.createTextNode(n.zeroWidthSpace);
            g.parentNode.insertBefore(y, g), g = y;
          }
          this.effectNode = null, p ? this.setRange(p, 1, p, 1) : this.nativeFocus();
        }
      }
    },
    /**
     * @description Initialization after "setOptions"
     * @param {Object} el context.element
     * @param {String} _initHTML Initial html string
     * @private
     */
    _setOptionsInit: function(s, r) {
      this.context = e = Xi(s.originElement, this._getConstructed(s), i), this._componentsInfoReset = !0, this._editorInit(!0, r);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(s, r) {
      this._init(s, r), v._addEvent(), this._setCharCount(), v._offStickyToolbar(), v.onResize_window(), e.element.toolbar.style.visibility = "";
      const c = i.frameAttrbutes;
      for (let p in c)
        e.element.wysiwyg.setAttribute(p, c[p]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), f.setTimeout(function() {
        typeof u._resourcesStateChange == "function" && (v._resizeObserver && v._resizeObserver.observe(e.element.wysiwygFrame), v._toolbarObserver && v._toolbarObserver.observe(e.element._toolbarShadow), u._resourcesStateChange(), typeof k.onload == "function" && k.onload(u, s));
      });
    },
    /**
     * @description Create and return an object to cache the new context.
     * @param {Element} contextEl context.element
     * @returns {Object}
     * @private
     */
    _getConstructed: function(s) {
      return {
        _top: s.topArea,
        _relative: s.relative,
        _toolBar: s.toolbar,
        _toolbarShadow: s._toolbarShadow,
        _menuTray: s._menuTray,
        _editorArea: s.editorArea,
        _wysiwygArea: s.wysiwygFrame,
        _codeArea: s.code,
        _placeholder: s.placeholder,
        _resizingBar: s.resizingBar,
        _navigation: s.navigation,
        _charCounter: s.charCounter,
        _charWrapper: s.charWrapper,
        _loading: s.loading,
        _lineBreaker: s.lineBreaker,
        _lineBreaker_t: s.lineBreaker_t,
        _lineBreaker_b: s.lineBreaker_b,
        _resizeBack: s.resizeBackground,
        _stickyDummy: s._stickyDummy,
        _arrow: s._arrow
      };
    }
  }, v = {
    _IEisComposing: !1,
    // In IE, there is no "e.isComposing" in the key-up event.
    _lineBreakerBind: null,
    _responsiveCurrentSize: "default",
    _responsiveButtonSize: null,
    _responsiveButtons: null,
    _deleteKeyCode: new f.RegExp("^(8|46)$"),
    _cursorMoveKeyCode: new f.RegExp("^(8|3[2-9]|40|46)$"),
    _directionKeyCode: new f.RegExp("^(8|13|3[2-9]|40|46)$"),
    _nonTextKeyCode: new f.RegExp("^(8|13|1[6-9]|20|27|3[3-9]|40|45|46|11[2-9]|12[0-3]|144|145)$"),
    _historyIgnoreKeyCode: new f.RegExp("^(1[6-9]|20|27|3[3-9]|40|45|11[2-9]|12[0-3]|144|145)$"),
    _onButtonsCheck: new f.RegExp("^(" + f.Object.keys(i._textTagsMap).join("|") + ")$", "i"),
    _frontZeroWidthReg: new f.RegExp(n.zeroWidthSpace + "+", ""),
    _keyCodeShortcut: {
      65: "A",
      66: "B",
      83: "S",
      85: "U",
      73: "I",
      89: "Y",
      90: "Z",
      219: "[",
      221: "]"
    },
    _shortcutCommand: function(s, r) {
      let c = null;
      const p = v._keyCodeShortcut[s];
      switch (p) {
        case "A":
          c = "selectAll";
          break;
        case "B":
          i.shortcutsDisable.indexOf("bold") === -1 && (c = "bold");
          break;
        case "S":
          r && i.shortcutsDisable.indexOf("strike") === -1 ? c = "strike" : !r && i.shortcutsDisable.indexOf("save") === -1 && (c = "save");
          break;
        case "U":
          i.shortcutsDisable.indexOf("underline") === -1 && (c = "underline");
          break;
        case "I":
          i.shortcutsDisable.indexOf("italic") === -1 && (c = "italic");
          break;
        case "Z":
          i.shortcutsDisable.indexOf("undo") === -1 && (r ? c = "redo" : c = "undo");
          break;
        case "Y":
          i.shortcutsDisable.indexOf("undo") === -1 && (c = "redo");
          break;
        case "[":
          i.shortcutsDisable.indexOf("indent") === -1 && (c = i.rtl ? "indent" : "outdent");
          break;
        case "]":
          i.shortcutsDisable.indexOf("indent") === -1 && (c = i.rtl ? "outdent" : "indent");
          break;
      }
      return c ? (u.commandHandler(u.commandMap[c], c), !0) : !!p;
    },
    _applyTagEffects: function() {
      if (n.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let s = u.getSelectionNode();
      if (s === u.effectNode) return;
      u.effectNode = s;
      const r = i.rtl ? "marginRight" : "marginLeft", c = u.commandMap, p = v._onButtonsCheck, m = [], g = [], h = u.activePlugins, _ = h.length;
      let C = "";
      for (; s.firstChild; )
        s = s.firstChild;
      for (let y = s; !n.isWysiwygDiv(y) && y; y = y.parentNode)
        if (!(y.nodeType !== 1 || n.isBreak(y))) {
          if (C = y.nodeName.toUpperCase(), g.push(C), !u.isReadOnly)
            for (let S = 0, V; S < _; S++)
              V = h[S], m.indexOf(V) === -1 && l[V].active.call(u, y) && m.push(V);
          if (n.isFormatElement(y)) {
            m.indexOf("OUTDENT") === -1 && c.OUTDENT && !n.isImportantDisabled(c.OUTDENT) && (n.isListCell(y) || y.style[r] && n.getNumber(y.style[r], 0) > 0) && (m.push("OUTDENT"), c.OUTDENT.removeAttribute("disabled")), m.indexOf("INDENT") === -1 && c.INDENT && !n.isImportantDisabled(c.INDENT) && (m.push("INDENT"), n.isListCell(y) && !y.previousElementSibling ? c.INDENT.setAttribute("disabled", !0) : c.INDENT.removeAttribute("disabled"));
            continue;
          }
          p && p.test(C) && (m.push(C), n.addClass(c[C], "active"));
        }
      u._setKeyEffect(m), u._variable.currentNodes = g.reverse(), u._variable.currentNodesMap = m, i.showPathLabel && (e.element.navigation.textContent = u._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(s) {
      let r = s.target;
      if (u._bindControllersOff && s.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? u._antiBlur = !1 : s.preventDefault(), n.getParentElement(r, ".se-submenu"))
        s.stopPropagation(), u._notHideToolbar = !0;
      else {
        let c = r.getAttribute("data-command"), p = r.className;
        for (; !c && !/se-menu-list/.test(p) && !/sun-editor-common/.test(p); )
          r = r.parentNode, c = r.getAttribute("data-command"), p = r.className;
        (c === u._submenuName || c === u._containerName) && s.stopPropagation();
      }
    },
    addGlobalEvent: function(s, r, c) {
      return i.iframe && u._ww.addEventListener(s, r, c), u._w.addEventListener(s, r, c), {
        type: s,
        listener: r,
        useCapture: c
      };
    },
    removeGlobalEvent: function(s, r, c) {
      s && (typeof s == "object" && (r = s.listener, c = s.useCapture, s = s.type), i.iframe && u._ww.removeEventListener(s, r, c), u._w.removeEventListener(s, r, c));
    },
    onClick_toolbar: function(s) {
      let r = s.target, c = r.getAttribute("data-display"), p = r.getAttribute("data-command"), m = r.className;
      for (u.controllersOff(); r.parentNode && !p && !/se-menu-list/.test(m) && !/se-toolbar/.test(m); )
        r = r.parentNode, p = r.getAttribute("data-command"), c = r.getAttribute("data-display"), m = r.className;
      !p && !c || r.disabled || u.actionCall(p, c, r);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(s) {
      if (u.isReadOnly || n.isNonEditable(e.element.wysiwyg)) return;
      if (n._isExcludeSelectionElement(s.target)) {
        s.preventDefault();
        return;
      }
      if (v.removeGlobalEvent(v.__selectionSyncEvent), v.__selectionSyncEvent = v.addGlobalEvent("mouseup", function() {
        u && u._editorRange(), v.removeGlobalEvent(v.__selectionSyncEvent);
      }), typeof k.onMouseDown == "function" && k.onMouseDown(s, u) === !1) return;
      const r = n.getParentElement(s.target, n.isCell);
      if (r) {
        const c = u.plugins.table;
        c && r !== c._fixedCell && !c._shift && u.callPlugin("table", function() {
          c.onTableCellMultiSelect.call(u, r, !1);
        }, null);
      }
      u._isBalloon && v._hideToolbar();
    },
    onClick_wysiwyg: function(s) {
      const r = s.target;
      if (u.isReadOnly)
        return s.preventDefault(), n.isAnchor(r) && f.open(r.href, r.target), !1;
      if (n.isNonEditable(e.element.wysiwyg) || typeof k.onClick == "function" && k.onClick(s, u) === !1) return;
      const c = u.getFileComponent(r);
      if (c) {
        s.preventDefault(), u.selectComponent(c.target, c.pluginName);
        return;
      }
      const p = n.getParentElement(r, "FIGCAPTION");
      if (p && n.isNonEditable(p) && (s.preventDefault(), p.focus(), u._isInline && !u._inlineToolbarAttr.isShow)) {
        v._showToolbarInline();
        const y = function() {
          v._hideToolbar(), p.removeEventListener("blur", y);
        };
        p.addEventListener("blur", y);
      }
      if (u._editorRange(), s.detail === 3) {
        let y = u.getRange();
        n.isFormatElement(y.endContainer) && y.endOffset === 0 && (y = u.setRange(y.startContainer, y.startOffset, y.startContainer, y.startContainer.length), u._rangeInfo(y, u.getSelection()));
      }
      const m = u.getSelectionNode(), g = n.getFormatElement(m, null), h = n.getRangeFormatElement(m, null);
      let _ = m;
      for (; _ && _.firstChild; ) _ = _.firstChild;
      const C = u.getFileComponent(_);
      if (C) {
        const y = u.getRange();
        !h && y.startContainer === y.endContainer && u.selectComponent(C.target, C.pluginName);
      } else u.currentFileComponentInfo && u.controllersOff();
      if (!g && !n.isNonEditable(r) && !n.isList(h)) {
        const y = u.getRange();
        if (n.getFormatElement(y.startContainer) === n.getFormatElement(y.endContainer))
          if (n.isList(h)) {
            s.preventDefault();
            const S = n.createElement("LI"), V = m.nextElementSibling;
            S.appendChild(m), h.insertBefore(S, V), u.focus();
          } else !n.isWysiwygDiv(m) && !n.isComponent(m) && (!n.isTable(m) || n.isCell(m)) && u._setDefaultFormat(n.isRangeFormatElement(h) ? "DIV" : i.defaultTag) !== null ? (s.preventDefault(), u.focus()) : v._applyTagEffects();
      } else
        v._applyTagEffects();
      u._isBalloon && f.setTimeout(v._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      v._balloonDelay && f.clearTimeout(v._balloonDelay), v._balloonDelay = f.setTimeout((function() {
        f.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon();
      }).bind(v), 350);
    },
    _toggleToolbarBalloon: function() {
      if (u) {
        u._editorRange();
        const s = u.getRange();
        u._bindControllersOff || !u._isBalloonAlways && s.collapsed ? v._hideToolbar() : v._showToolbarBalloon(s);
      }
    },
    _showToolbarBalloon: function(s) {
      if (!u._isBalloon) return;
      const r = s || u.getRange(), c = e.element.toolbar, p = e.element.topArea, m = u.getSelection();
      let g;
      if (u._isBalloonAlways && r.collapsed)
        g = !0;
      else if (m.focusNode === m.anchorNode)
        g = m.focusOffset < m.anchorOffset;
      else {
        const F = n.getListChildNodes(r.commonAncestorContainer, null);
        g = n.getArrayIndex(F, m.focusNode) < n.getArrayIndex(F, m.anchorNode);
      }
      let h = r.getClientRects();
      h = h[g ? 0 : h.length - 1];
      const _ = u.getGlobalScrollOffset();
      let C = _.left, y = _.top;
      const S = p.offsetWidth, V = v._getEditorOffsets(null), T = V.top, z = V.left;
      if (c.style.top = "-10000px", c.style.visibility = "hidden", c.style.display = "block", !h) {
        const F = u.getSelectionNode();
        if (n.isFormatElement(F)) {
          const P = n.createTextNode(n.zeroWidthSpace);
          u.insertNode(P, null, !1), u.setRange(P, 1, P, 1), u._editorRange(), h = u.getRange().getClientRects(), h = h[g ? 0 : h.length - 1];
        }
        if (!h) {
          const P = n.getOffset(F, e.element.wysiwygFrame);
          h = {
            left: P.left,
            top: P.top,
            right: P.left,
            bottom: P.top + F.offsetHeight,
            noText: !0
          }, C = 0, y = 0;
        }
        g = !0;
      }
      const A = f.Math.round(e.element._arrow.offsetWidth / 2), q = c.offsetWidth, Z = c.offsetHeight, U = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (U && (h = {
        left: h.left + U.left,
        top: h.top + U.top,
        right: h.right + U.right - U.width,
        bottom: h.bottom + U.bottom - U.height
      }), v._setToolbarOffset(g, h, c, z, S, C, y, T, A), (q !== c.offsetWidth || Z !== c.offsetHeight) && v._setToolbarOffset(g, h, c, z, S, C, y, T, A), i.toolbarContainer) {
        const F = p.parentElement;
        let P = i.toolbarContainer, I = P.offsetLeft, O = P.offsetTop;
        for (; !P.parentElement.contains(F) || !/^(BODY|HTML)$/i.test(P.parentElement.nodeName); )
          P = P.offsetParent, I += P.offsetLeft, O += P.offsetTop;
        c.style.left = c.offsetLeft - I + p.offsetLeft + "px", c.style.top = c.offsetTop - O + p.offsetTop + "px";
      }
      c.style.visibility = "";
    },
    _setToolbarOffset: function(s, r, c, p, m, g, h, _, C) {
      const S = c.offsetWidth, V = r.noText && !s ? 0 : c.offsetHeight, T = (s ? r.left : r.right) - p - S / 2 + g, z = T + S - m;
      let A = (s ? r.top - V - C : r.bottom + C) - (r.noText ? 0 : _) + h, q = T < 0 ? 1 : z < 0 ? T : T - z - 1 - 1, Z = !1;
      const U = A + (s ? v._getEditorOffsets(null).top : c.offsetHeight - e.element.wysiwyg.offsetHeight);
      !s && U > 0 && v._getPageBottomSpace() < U ? (s = !0, Z = !0) : s && d.documentElement.offsetTop > U && (s = !1, Z = !0), Z && (A = (s ? r.top - V - C : r.bottom + C) - (r.noText ? 0 : _) + h), c.style.left = f.Math.floor(q) + "px", c.style.top = f.Math.floor(A) + "px", s ? (n.removeClass(e.element._arrow, "se-arrow-up"), n.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = V + "px") : (n.removeClass(e.element._arrow, "se-arrow-down"), n.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -C + "px");
      const F = f.Math.floor(S / 2 + (T - q));
      e.element._arrow.style.left = (F + C > c.offsetWidth ? c.offsetWidth - C : F < C ? C : F) + "px";
    },
    _showToolbarInline: function() {
      if (!u._isInline) return;
      const s = e.element.toolbar;
      i.toolbarContainer ? s.style.position = "relative" : s.style.position = "absolute", s.style.visibility = "hidden", s.style.display = "block", u._inlineToolbarAttr.width = s.style.width = i.toolbarWidth, u._inlineToolbarAttr.top = s.style.top = (i.toolbarContainer ? 0 : -1 - s.offsetHeight) + "px", typeof k.showInline == "function" && k.showInline(s, e, u), v.onScroll_window(), u._inlineToolbarAttr.isShow = !0, s.style.visibility = "";
    },
    _hideToolbar: function() {
      !u._notHideToolbar && !u._variable.isFullScreen && (e.element.toolbar.style.display = "none", u._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(s) {
      if (/AUDIO/.test(s.target.nodeName)) return !1;
      if (u.isReadOnly || u.isDisabled)
        return s.preventDefault(), s.stopPropagation(), u.history.go(u.history.getCurrentIndex()), !1;
      const r = u.getRange(), c = u.getSelectionNode(), p = n.getFormatElement(c, null);
      if (!p && r.collapsed && !n.isComponent(c) && !n.isList(c)) {
        const g = n.getRangeFormatElement(p, null);
        u._setDefaultFormat(n.isRangeFormatElement(g) ? "DIV" : i.defaultTag);
      }
      u._editorRange();
      const m = (s.data === null ? "" : s.data === void 0 ? " " : s.data) || "";
      if (!u._charCount(m))
        return s.preventDefault(), s.stopPropagation(), !1;
      typeof k.onInput == "function" && k.onInput(s, u) === !1 || u.history.push(!0);
    },
    _isUneditableNode: function(s, r) {
      const c = r ? s.startContainer : s.endContainer, p = r ? s.startOffset : s.endOffset, m = r ? "previousSibling" : "nextSibling", g = c.nodeType === 1;
      let h;
      return g ? (h = v._isUneditableNode_getSibling(c.childNodes[p], m, c), h && h.nodeType === 1 && h.getAttribute("contenteditable") === "false") : (h = v._isUneditableNode_getSibling(c, m, c), u.isEdgePoint(c, p, r ? "start" : "end") && h && h.nodeType === 1 && h.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(s, r, c) {
      if (!s) return null;
      let p = s[r];
      if (!p)
        if (p = n.getFormatElement(c), p = p ? p[r] : null, p && !n.isComponent(p)) p = r === "previousSibling" ? p.firstChild : p.lastChild;
        else return null;
      return p;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(s) {
      let r = u.getSelectionNode();
      if (n.isInputElement(r)) return;
      const c = s.keyCode, p = s.shiftKey, m = s.ctrlKey || s.metaKey || c === 91 || c === 92 || c === 224, g = s.altKey;
      if (v._IEisComposing = c === 229, !m && u.isReadOnly && !v._cursorMoveKeyCode.test(c))
        return s.preventDefault(), !1;
      if (u.submenuOff(), u._isBalloon && v._hideToolbar(), typeof k.onKeyDown == "function" && k.onKeyDown(s, u) === !1) return;
      if (m && v._shortcutCommand(c, p))
        return v._onShortcutKey = !0, s.preventDefault(), s.stopPropagation(), !1;
      v._onShortcutKey && (v._onShortcutKey = !1), c === 13 && n.isFormatElement(u.getRange().startContainer) && (u._resetRangeToTextNode(), r = u.getSelectionNode());
      const h = u.getRange(), _ = !h.collapsed || h.startContainer !== h.endContainer, C = u._fileManager.pluginRegExp.test(u.currentControllerName) ? u.currentControllerName : "";
      let y = n.getFormatElement(r, null) || r, S = n.getRangeFormatElement(y, null);
      if (!(/37|38|39|40/.test(s.keyCode) && v._onKeyDown_wysiwyg_arrowKey(s) === !1)) {
        switch (c) {
          case 8:
            if (!_ && C) {
              s.preventDefault(), s.stopPropagation(), u.plugins[C].destroy.call(u);
              break;
            }
            if (_ && v._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!n.isFormatElement(y) && !e.element.wysiwyg.firstElementChild && !n.isComponent(r) && u._setDefaultFormat(i.defaultTag) !== null)
              return s.preventDefault(), s.stopPropagation(), !1;
            if (!_ && !y.previousElementSibling && h.startOffset === 0 && !r.previousSibling && !n.isListCell(y) && n.isFormatElement(y) && (!n.isFreeFormatElement(y) || n.isClosureFreeFormatElement(y))) {
              if (n.isClosureRangeFormatElement(y.parentNode))
                return s.preventDefault(), s.stopPropagation(), !1;
              if (n.isWysiwygDiv(y.parentNode) && y.childNodes.length <= 1 && (!y.firstChild || n.onlyZeroWidthSpace(y.textContent))) {
                if (s.preventDefault(), s.stopPropagation(), y.nodeName.toUpperCase() === i.defaultTag.toUpperCase()) {
                  y.innerHTML = "<br>";
                  const N = y.attributes;
                  for (; N[0]; )
                    y.removeAttribute(N[0].name);
                } else {
                  const N = n.createElement(i.defaultTag);
                  N.innerHTML = "<br>", y.parentElement.replaceChild(N, y);
                }
                return u.nativeFocus(), !1;
              }
            }
            const T = h.startContainer;
            if (y && !y.previousElementSibling && h.startOffset === 0 && T.nodeType === 3 && !n.isFormatElement(T.parentNode)) {
              let N = T.parentNode.previousSibling;
              const M = T.parentNode.nextSibling;
              N || (M ? N = M : (N = n.createElement("BR"), y.appendChild(N)));
              let w = T;
              for (; y.contains(w) && !w.previousSibling; )
                w = w.parentNode;
              if (!y.contains(w)) {
                T.textContent = "", n.removeItemAllParents(T, null, y);
                break;
              }
            }
            if (v._isUneditableNode(h, !0)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            !_ && u._isEdgeFormat(h.startContainer, h.startOffset, "start") && n.isFormatElement(y.previousElementSibling) && (u._formatAttrsTemp = y.previousElementSibling.attributes);
            const z = h.commonAncestorContainer;
            if (y = n.getFormatElement(h.startContainer, null), S = n.getRangeFormatElement(y, null), S && y && !n.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
              if (n.isListCell(y) && n.isList(S) && (n.isListCell(S.parentNode) || y.previousElementSibling) && (r === y || r.nodeType === 3 && (!r.previousSibling || n.isList(r.previousSibling))) && (n.getFormatElement(h.startContainer, null) !== n.getFormatElement(h.endContainer, null) ? S.contains(h.startContainer) : h.startOffset === 0 && h.collapsed)) {
                if (h.startContainer !== h.endContainer)
                  s.preventDefault(), u.removeNode(), h.startContainer.nodeType === 3 && u.setRange(h.startContainer, h.startContainer.textContent.length, h.startContainer, h.startContainer.textContent.length), u.history.push(!0);
                else {
                  let N = y.previousElementSibling || S.parentNode;
                  if (n.isListCell(N)) {
                    s.preventDefault();
                    let M = N;
                    if (!N.contains(y) && n.isListCell(M) && n.isList(M.lastElementChild)) {
                      for (M = M.lastElementChild.lastElementChild; n.isListCell(M) && n.isList(M.lastElementChild); )
                        M = M.lastElementChild && M.lastElementChild.lastElementChild;
                      N = M;
                    }
                    let w = N === S.parentNode ? S.previousSibling : N.lastChild;
                    w || (w = n.createTextNode(n.zeroWidthSpace), S.parentNode.insertBefore(w, S.parentNode.firstChild));
                    const D = w.nodeType === 3 ? w.textContent.length : 1, Y = y.childNodes;
                    let j = w, G = Y[0];
                    for (; G = Y[0]; )
                      N.insertBefore(G, j.nextSibling), j = G;
                    n.removeItem(y), S.children.length === 0 && n.removeItem(S), u.setRange(w, D, w, D), u.history.push(!0);
                  }
                }
                break;
              }
              if (!_ && h.startOffset === 0) {
                let N = !0, M = z;
                for (; M && M !== S && !n.isWysiwygDiv(M); ) {
                  if (M.previousSibling && (M.previousSibling.nodeType === 1 || !n.onlyZeroWidthSpace(M.previousSibling.textContent.trim()))) {
                    N = !1;
                    break;
                  }
                  M = M.parentNode;
                }
                if (N && S.parentNode) {
                  s.preventDefault(), u.detachRangeFormatElement(S, n.isListCell(y) ? [y] : null, null, !1, !1), u.history.push(!0);
                  break;
                }
              }
            }
            if (!_ && y && (h.startOffset === 0 || r === y && y.childNodes[h.startOffset])) {
              const N = r === y ? y.childNodes[h.startOffset] : r, M = y.previousSibling, w = (z.nodeType === 3 || n.isBreak(z)) && !z.previousSibling && h.startOffset === 0;
              if (N && !N.previousSibling && (z && n.isComponent(z.previousSibling) || w && n.isComponent(M))) {
                const D = u.getFileComponent(M);
                D ? (s.preventDefault(), s.stopPropagation(), y.textContent.length === 0 && n.removeItem(y), u.selectComponent(D.target, D.pluginName) === !1 && u.blur()) : n.isComponent(M) && (s.preventDefault(), s.stopPropagation(), n.removeItem(M));
                break;
              }
              if (N && n.isNonEditable(N.previousSibling)) {
                s.preventDefault(), s.stopPropagation(), n.removeItem(N.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (C) {
              s.preventDefault(), s.stopPropagation(), u.plugins[C].destroy.call(u);
              break;
            }
            if (_ && v._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!_ && u._isEdgeFormat(h.endContainer, h.endOffset, "end") && !y.nextSibling) {
              s.preventDefault(), s.stopPropagation();
              return;
            }
            if (v._isUneditableNode(h, !1)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if ((n.isFormatElement(r) || r.nextSibling === null || n.onlyZeroWidthSpace(r.nextSibling) && r.nextSibling.nextSibling === null) && h.startOffset === r.textContent.length) {
              const N = y.nextElementSibling;
              if (!N) break;
              if (n.isComponent(N)) {
                if (s.preventDefault(), n.onlyZeroWidthSpace(y) && (n.removeItem(y), n.isTable(N))) {
                  let w = n.getChildElement(N, n.isCell, !1);
                  w = w.firstElementChild || w, u.setRange(w, 0, w, 0);
                  break;
                }
                const M = u.getFileComponent(N);
                M ? (s.stopPropagation(), u.selectComponent(M.target, M.pluginName) === !1 && u.blur()) : n.isComponent(N) && (s.stopPropagation(), n.removeItem(N));
                break;
              }
            }
            if (!_ && (u.isEdgePoint(h.endContainer, h.endOffset) || r === y && y.childNodes[h.startOffset])) {
              const N = r === y && y.childNodes[h.startOffset] || r;
              if (N && n.isNonEditable(N.nextSibling)) {
                s.preventDefault(), s.stopPropagation(), n.removeItem(N.nextSibling);
                break;
              } else if (n.isComponent(N)) {
                s.preventDefault(), s.stopPropagation(), n.removeItem(N);
                break;
              }
            }
            if (!_ && u._isEdgeFormat(h.endContainer, h.endOffset, "end") && n.isFormatElement(y.nextElementSibling) && (u._formatAttrsTemp = y.attributes), y = n.getFormatElement(h.startContainer, null), S = n.getRangeFormatElement(y, null), n.isListCell(y) && n.isList(S) && (r === y || r.nodeType === 3 && (!r.nextSibling || n.isList(r.nextSibling)) && (n.getFormatElement(h.startContainer, null) !== n.getFormatElement(h.endContainer, null) ? S.contains(h.endContainer) : h.endOffset === r.textContent.length && h.collapsed))) {
              h.startContainer !== h.endContainer && u.removeNode();
              let N = n.getArrayItem(y.children, n.isList, !1);
              if (N = N || y.nextElementSibling || S.parentNode.nextElementSibling, N && (n.isList(N) || n.getArrayItem(N.children, n.isList, !1))) {
                s.preventDefault();
                let M, w;
                if (n.isList(N)) {
                  const D = N.firstElementChild;
                  for (w = D.childNodes, M = w[0]; w[0]; )
                    y.insertBefore(w[0], N);
                  n.removeItem(D);
                } else {
                  for (M = N.firstChild, w = N.childNodes; w[0]; )
                    y.appendChild(w[0]);
                  n.removeItem(N);
                }
                u.setRange(M, 0, M, 0), u.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (C || i.tabDisable || (s.preventDefault(), m || g || n.isWysiwygDiv(r))) break;
            const A = !h.collapsed || u.isEdgePoint(h.startContainer, h.startOffset), q = u.getSelectedElements(null);
            r = u.getSelectionNode();
            const Z = [];
            let U = [], F = n.isListCell(q[0]), P = n.isListCell(q[q.length - 1]), I = { sc: h.startContainer, so: h.startOffset, ec: h.endContainer, eo: h.endOffset };
            for (let N = 0, M = q.length, w; N < M; N++)
              if (w = q[N], n.isListCell(w)) {
                if (!w.previousElementSibling && !p)
                  continue;
                Z.push(w);
              } else
                U.push(w);
            if (Z.length > 0 && A && u.plugins.list)
              I = u.plugins.list.editInsideList.call(u, p, Z);
            else {
              const N = n.getParentElement(r, n.isCell);
              if (N && A) {
                const M = n.getParentElement(N, "table"), w = n.getListChildren(M, n.isCell);
                let D = p ? n.prevIdx(w, N) : n.nextIdx(w, N);
                D === w.length && !p && (D = 0), D === -1 && p && (D = w.length - 1);
                let Y = w[D];
                if (!Y) break;
                Y = Y.firstElementChild || Y, u.setRange(Y, 0, Y, 0);
                break;
              }
              U = U.concat(Z), F = P = null;
            }
            if (U.length > 0)
              if (p) {
                const N = U.length - 1;
                for (let D = 0, Y; D <= N; D++) {
                  Y = U[D].childNodes;
                  for (let j = 0, G = Y.length, ee; j < G && (ee = Y[j], !!ee); j++)
                    if (!n.onlyZeroWidthSpace(ee)) {
                      /^\s{1,4}$/.test(ee.textContent) ? n.removeItem(ee) : /^\s{1,4}/.test(ee.textContent) && (ee.textContent = ee.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const M = n.getChildElement(U[0], "text", !1), w = n.getChildElement(U[N], "text", !0);
                !F && M && (I.sc = M, I.so = 0), !P && w && (I.ec = w, I.eo = w.textContent.length);
              } else {
                const N = n.createTextNode(new f.Array(u._variable.tabSize + 1).join(" "));
                if (U.length === 1) {
                  if (!u.insertNode(N, null, !0)) return !1;
                  F || (I.sc = N, I.so = N.length), P || (I.ec = N, I.eo = N.length);
                } else {
                  const M = U.length - 1;
                  for (let Y = 0, j; Y <= M; Y++)
                    j = U[Y].firstChild, j && (n.isBreak(j) ? U[Y].insertBefore(N.cloneNode(!1), j) : j.textContent = N.textContent + j.textContent);
                  const w = n.getChildElement(U[0], "text", !1), D = n.getChildElement(U[M], "text", !0);
                  !F && w && (I.sc = w, I.so = 0), !P && D && (I.ec = D, I.eo = D.textContent.length);
                }
              }
            u.setRange(I.sc, I.so, I.ec, I.eo), u.history.push(!1);
            break;
          case 13:
            const O = n.getFreeFormatElement(r, null);
            if (u._charTypeHTML) {
              let N = "";
              if (!p && O || p ? N = "<br>" : N = "<" + y.nodeName + "><br></" + y.nodeName + ">", !u.checkCharCount(N, "byte-html"))
                return s.preventDefault(), !1;
            }
            if (!p && !C) {
              const N = u._isEdgeFormat(h.endContainer, h.endOffset, "end"), M = u._isEdgeFormat(h.startContainer, h.startOffset, "start");
              if (N && (/^H[1-6]$/i.test(y.nodeName) || /^HR$/i.test(y.nodeName))) {
                v._enterPrevent(s);
                let w = null;
                const D = u.appendFormatTag(y, i.defaultTag);
                if (N && N.length > 0) {
                  w = N.pop();
                  const Y = w;
                  for (; N.length > 0; )
                    w = w.appendChild(N.pop());
                  D.appendChild(Y);
                }
                if (w = w ? w.appendChild(D.firstChild) : D.firstChild, n.isBreak(w)) {
                  const Y = n.createTextNode(n.zeroWidthSpace);
                  w.parentNode.insertBefore(Y, w), u.setRange(Y, 1, Y, 1);
                } else
                  u.setRange(w, 0, w, 0);
                break;
              } else if (S && y && !n.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
                const w = u.getRange();
                if (u.isEdgePoint(w.endContainer, w.endOffset) && n.isList(r.nextSibling)) {
                  v._enterPrevent(s);
                  const D = n.createElement("LI"), Y = n.createElement("BR");
                  D.appendChild(Y), y.parentNode.insertBefore(D, y.nextElementSibling), D.appendChild(r.nextSibling), u.setRange(Y, 1, Y, 1);
                  break;
                }
                if ((w.commonAncestorContainer.nodeType !== 3 || !w.commonAncestorContainer.nextElementSibling) && n.onlyZeroWidthSpace(y.innerText.trim()) && !n.isListCell(y.nextElementSibling)) {
                  v._enterPrevent(s);
                  let D = null;
                  if (n.isListCell(S.parentNode)) {
                    const Y = y.parentNode.parentNode;
                    S = Y.parentNode;
                    const j = n.createElement("LI");
                    j.innerHTML = "<br>", n.copyTagAttributes(j, y, i.lineAttrReset), D = j, S.insertBefore(D, Y.nextElementSibling);
                  } else {
                    const Y = n.isCell(S.parentNode) ? "DIV" : n.isList(S.parentNode) ? "LI" : n.isFormatElement(S.nextElementSibling) && !n.isRangeFormatElement(S.nextElementSibling) ? S.nextElementSibling.nodeName : n.isFormatElement(S.previousElementSibling) && !n.isRangeFormatElement(S.previousElementSibling) ? S.previousElementSibling.nodeName : i.defaultTag;
                    D = n.createElement(Y), n.copyTagAttributes(D, y, i.lineAttrReset);
                    const j = u.detachRangeFormatElement(S, [y], null, !0, !0);
                    j.cc.insertBefore(D, j.ec);
                  }
                  D.innerHTML = "<br>", n.removeItemAllParents(y, null, null), u.setRange(D, 1, D, 1);
                  break;
                }
              }
              if (O) {
                v._enterPrevent(s);
                const w = r === O, D = u.getSelection(), Y = r.childNodes, j = D.focusOffset, G = r.previousElementSibling, ee = r.nextSibling;
                if (!n.isClosureFreeFormatElement(O) && Y && (w && h.collapsed && Y.length - 1 <= j + 1 && n.isBreak(Y[j]) && (!Y[j + 1] || (!Y[j + 2] || n.onlyZeroWidthSpace(Y[j + 2].textContent)) && Y[j + 1].nodeType === 3 && n.onlyZeroWidthSpace(Y[j + 1].textContent)) && j > 0 && n.isBreak(Y[j - 1]) || !w && n.onlyZeroWidthSpace(r.textContent) && n.isBreak(G) && (n.isBreak(G.previousSibling) || !n.onlyZeroWidthSpace(G.previousSibling.textContent)) && (!ee || !n.isBreak(ee) && n.onlyZeroWidthSpace(ee.textContent)))) {
                  w ? n.removeItem(Y[j - 1]) : n.removeItem(r);
                  const $ = u.appendFormatTag(O, n.isFormatElement(O.nextElementSibling) && !n.isRangeFormatElement(O.nextElementSibling) ? O.nextElementSibling : null);
                  n.copyFormatAttributes($, O), u.setRange($, 1, $, 1);
                  break;
                }
                if (w) {
                  k.insertHTML(h.collapsed && n.isBreak(h.startContainer.childNodes[h.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let $ = D.focusNode;
                  const ne = D.focusOffset;
                  O === $ && ($ = $.childNodes[ne - j > 1 ? ne - 1 : ne]), u.setRange($, 1, $, 1);
                } else {
                  const $ = D.focusNode.nextSibling, ne = n.createElement("BR");
                  u.insertNode(ne, null, !1);
                  const me = ne.previousSibling, ve = ne.nextSibling;
                  !n.isBreak($) && !n.isBreak(me) && (!ve || n.onlyZeroWidthSpace(ve)) ? (ne.parentNode.insertBefore(ne.cloneNode(!1), ne), u.setRange(ne, 1, ne, 1)) : u.setRange(ve, 0, ve, 0);
                }
                v._onShortcutKey = !0;
                break;
              }
              if (h.collapsed && (M || N)) {
                v._enterPrevent(s);
                const w = n.createElement("BR"), D = n.createElement(y.nodeName);
                n.copyTagAttributes(D, y, i.lineAttrReset);
                let Y = w;
                do {
                  if (!n.isBreak(r) && r.nodeType === 1) {
                    const j = r.cloneNode(!1);
                    j.appendChild(Y), Y = j;
                  }
                  r = r.parentNode;
                } while (y !== r && y.contains(r));
                D.appendChild(Y), y.parentNode.insertBefore(D, M && !N ? y : y.nextElementSibling), N && u.setRange(w, 1, w, 1);
                break;
              }
              if (y) {
                s.stopPropagation();
                let w, D = 0;
                if (h.collapsed)
                  n.onlyZeroWidthSpace(y) ? w = u.appendFormatTag(y, y.cloneNode(!1)) : w = n.splitElement(h.endContainer, h.endOffset, n.getElementDepth(y));
                else {
                  const Y = n.getFormatElement(h.startContainer, null) !== n.getFormatElement(h.endContainer, null), j = y.cloneNode(!1);
                  j.innerHTML = "<br>";
                  const G = h.commonAncestorContainer, ee = G === h.startContainer && G === h.endContainer && n.onlyZeroWidthSpace(G) ? h : u.removeNode();
                  if (w = n.getFormatElement(ee.container, null), !w) {
                    n.isWysiwygDiv(ee.container) && (v._enterPrevent(s), e.element.wysiwyg.appendChild(j), w = j, n.copyTagAttributes(w, y, i.lineAttrReset), u.setRange(w, D, w, D));
                    break;
                  }
                  const $ = n.getRangeFormatElement(ee.container);
                  if (w = w.contains($) ? n.getChildElement($, n.getFormatElement.bind(n)) : w, Y) {
                    if (N && !M)
                      w.parentNode.insertBefore(j, !ee.prevContainer || ee.container === ee.prevContainer ? w.nextElementSibling : w), w = j, D = 0;
                    else if (D = ee.offset, M) {
                      const ne = w.parentNode.insertBefore(j, w);
                      N && (w = ne, D = 0);
                    }
                  } else
                    N && M ? (w.parentNode.insertBefore(j, ee.prevContainer && ee.container === ee.prevContainer ? w.nextElementSibling : w), w = j, D = 0) : w = n.splitElement(ee.container, ee.offset, n.getElementDepth(y));
                }
                v._enterPrevent(s), n.copyTagAttributes(w, y, i.lineAttrReset), u.setRange(w, D, w, D);
                break;
              }
            }
            if (_) break;
            if (S && n.getParentElement(S, "FIGCAPTION") && n.getParentElement(S, n.isList) && (v._enterPrevent(s), y = u.appendFormatTag(y, null), u.setRange(y, 0, y, 0)), C) {
              s.preventDefault(), s.stopPropagation(), u.containerOff(), u.controllersOff();
              const N = e[C], M = N._container, w = M.previousElementSibling || M.nextElementSibling;
              let D = null;
              n.isListCell(M.parentNode) ? D = n.createElement("BR") : (D = n.createElement(n.isFormatElement(w) && !n.isRangeFormatElement(w) ? w.nodeName : i.defaultTag), D.innerHTML = "<br>"), p ? M.parentNode.insertBefore(D, M) : M.parentNode.insertBefore(D, M.nextElementSibling), u.callPlugin(C, function() {
                u.selectComponent(N._element, C) === !1 && u.blur();
              }, null);
            }
            break;
          case 27:
            if (C)
              return s.preventDefault(), s.stopPropagation(), u.controllersOff(), !1;
            break;
        }
        if (p && c === 16) {
          s.preventDefault(), s.stopPropagation();
          const T = u.plugins.table;
          if (T && !T._shift && !T._ref) {
            const z = n.getParentElement(y, n.isCell);
            if (z) {
              T.onTableCellMultiSelect.call(u, z, !0);
              return;
            }
          }
        } else if (p && (n.isOSX_IOS ? g : m) && c === 32) {
          s.preventDefault(), s.stopPropagation();
          const T = u.insertNode(n.createTextNode(" "));
          if (T) {
            u.setRange(T, T.length, T, T.length);
            return;
          }
        }
        if (n.isIE && !m && !g && !_ && !v._nonTextKeyCode.test(c) && n.isBreak(h.commonAncestorContainer)) {
          const T = n.createTextNode(n.zeroWidthSpace);
          u.insertNode(T, null, !1), u.setRange(T, 1, T, 1);
        }
        v._directionKeyCode.test(c) && (f.setTimeout(u._editorRange.bind(u), 0), v._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(s) {
      if (s.shiftKey) return;
      let r = u.getSelectionNode();
      const c = function(g, h) {
        if (h || (h = 0), s.preventDefault(), s.stopPropagation(), !g) return;
        let _ = u.getFileComponent(g);
        _ ? u.selectComponent(_.target, _.pluginName) : (u.setRange(g, h, g, h), u.controllersOff());
      }, p = n.getParentElement(r, "table");
      if (p) {
        const g = n.getParentElement(r, "tr"), h = n.getParentElement(r, "td");
        let _ = h, C = h;
        if (h) {
          for (; _ && _.firstChild; ) _ = _.firstChild;
          for (; C && C.lastChild; ) C = C.lastChild;
        }
        let y = r;
        for (; y && y.firstChild; ) y = y.firstChild;
        const S = y === _, V = y === C;
        let T = null, z = 0;
        if (s.keyCode === 38 && S) {
          const A = g && g.previousElementSibling;
          for (A ? T = A.children[h.cellIndex] : T = n.getPreviousDeepestNode(p, u.context.element.wysiwyg); T && T.lastChild; ) T = T.lastChild;
          T && (z = T.textContent.length);
        } else if (s.keyCode === 40 && V) {
          const A = g && g.nextElementSibling;
          for (A ? T = A.children[h.cellIndex] : T = n.getNextDeepestNode(p, u.context.element.wysiwyg); T && T.firstChild; ) T = T.firstChild;
        }
        if (T)
          return c(T, z), !1;
      }
      const m = u.getFileComponent(r);
      if (m) {
        const g = /37|38/.test(s.keyCode), h = /39|40/.test(s.keyCode);
        if (g) {
          const _ = n.getPreviousDeepestNode(m.target, u.context.element.wysiwyg);
          c(_, _ && _.textContent.length);
        } else if (h) {
          const _ = n.getNextDeepestNode(m.target, u.context.element.wysiwyg);
          c(_);
        }
      }
    },
    onKeyUp_wysiwyg: function(s) {
      if (v._onShortcutKey) return;
      u._editorRange();
      const r = s.keyCode, c = s.ctrlKey || s.metaKey || r === 91 || r === 92 || r === 224, p = s.altKey;
      if (u.isReadOnly) {
        !c && v._cursorMoveKeyCode.test(r) && v._applyTagEffects();
        return;
      }
      const m = u.getRange();
      let g = u.getSelectionNode();
      if (u._isBalloon && (u._isBalloonAlways && r !== 27 || !m.collapsed))
        if (u._isBalloonAlways)
          r !== 27 && v._showToolbarBalloonDelay();
        else {
          v._showToolbarBalloon();
          return;
        }
      let h = g;
      for (; h && h.firstChild; ) h = h.firstChild;
      const _ = u.getFileComponent(h);
      if (!(s.keyCode === 16 || s.shiftKey) && _ ? u.selectComponent(_.target, _.pluginName) : u.currentFileComponentInfo && u.controllersOff(), r === 8 && n.isWysiwygDiv(g) && g.textContent === "" && g.children.length === 0) {
        s.preventDefault(), s.stopPropagation(), g.innerHTML = "";
        const T = n.createElement(n.isFormatElement(u._variable.currentNodes[0]) ? u._variable.currentNodes[0] : i.defaultTag);
        T.innerHTML = "<br>", g.appendChild(T), u.setRange(T, 0, T, 0), v._applyTagEffects(), u.history.push(!1);
        return;
      }
      const C = n.getFormatElement(g, null), y = n.getRangeFormatElement(g, null), S = u._formatAttrsTemp;
      if (S) {
        for (let T = 0, z = S.length; T < z; T++) {
          if (r === 13 && /^id$/i.test(S[T].name)) {
            C.removeAttribute("id");
            continue;
          }
          C.setAttribute(S[T].name, S[T].value);
        }
        u._formatAttrsTemp = null;
      }
      if (!C && m.collapsed && !n.isComponent(g) && !n.isList(g) && u._setDefaultFormat(n.isRangeFormatElement(y) ? "DIV" : i.defaultTag) !== null && (g = u.getSelectionNode()), !c && !p && !v._nonTextKeyCode.test(r) && g.nodeType === 3 && n.zeroWidthRegExp.test(g.textContent) && !(s.isComposing !== void 0 ? s.isComposing : v._IEisComposing)) {
        let T = m.startOffset, z = m.endOffset;
        const A = (g.textContent.substring(0, z).match(v._frontZeroWidthReg) || "").length;
        T = m.startOffset - A, z = m.endOffset - A, g.textContent = g.textContent.replace(n.zeroWidthRegExp, ""), u.setRange(g, T < 0 ? 0 : T, g, z < 0 ? 0 : z);
      }
      v._deleteKeyCode.test(r) && C && n.onlyZeroWidthSpace(C.textContent) && !C.previousElementSibling && (C.innerHTML = "<br>", u.setRange(C, 0, C, 0)), u._charCount(""), !(typeof k.onKeyUp == "function" && k.onKeyUp(s, u) === !1) && !c && !p && !v._historyIgnoreKeyCode.test(r) && u.history.push(!0);
    },
    onScroll_wysiwyg: function(s) {
      u.controllersOff(), u._isBalloon && v._hideToolbar(), typeof k.onScroll == "function" && k.onScroll(s, u);
    },
    onFocus_wysiwyg: function(s) {
      u._antiBlur || (u.hasFocus = !0, f.setTimeout(v._applyTagEffects), u._isInline && v._showToolbarInline(), typeof k.onFocus == "function" && k.onFocus(s, u));
    },
    onBlur_wysiwyg: function(s) {
      u._antiBlur || u._variable.isCodeView || (u.hasFocus = !1, u.effectNode = null, u.controllersOff(), (u._isInline || u._isBalloon) && v._hideToolbar(), u._setKeyEffect([]), u._variable.currentNodes = [], u._variable.currentNodesMap = [], i.showPathLabel && (e.element.navigation.textContent = ""), typeof k.onBlur == "function" && k.onBlur(s, u, this));
    },
    onMouseDown_resizingBar: function(s) {
      s.stopPropagation(), u.submenuOff(), u.controllersOff(), u._variable.resizeClientY = s.clientY, e.element.resizeBackground.style.display = "block";
      function r() {
        e.element.resizeBackground.style.display = "none", d.removeEventListener("mousemove", v._resize_editor), d.removeEventListener("mouseup", r);
      }
      d.addEventListener("mousemove", v._resize_editor), d.addEventListener("mouseup", r);
    },
    _resize_editor: function(s) {
      const r = e.element.editorArea.offsetHeight + (s.clientY - u._variable.resizeClientY), c = r < u._variable.minResizingSize ? u._variable.minResizingSize : r;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = c + "px", u._variable.resizeClientY = s.clientY, n.isResizeObserverSupported || u.__callResizeFunction(c, null);
    },
    onResize_window: function() {
      n.isResizeObserverSupported || u.resetResponsiveToolbar();
      const s = e.element.toolbar, r = s.style.display === "none" || u._isInline && !u._inlineToolbarAttr.isShow;
      if (!(s.offsetWidth === 0 && !r)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = f.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), u.submenuActiveButton && u.submenu && u._setMenuPosition(u.submenuActiveButton, u.submenu), u._variable.isFullScreen) {
          u._variable.innerHeight_fullScreen += f.innerHeight - s.offsetHeight - u._variable.innerHeight_fullScreen, e.element.editorArea.style.height = u._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (u._variable.isCodeView && u._isInline) {
          v._showToolbarInline();
          return;
        }
        u._iframeAutoHeight(), u._sticky && (s.style.width = e.element.topArea.offsetWidth - 2 + "px", v.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (u._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || i.stickyToolbar < 0) return;
      const s = e.element, r = s.editorArea.offsetHeight, c = (this.scrollY || d.documentElement.scrollTop) + i.stickyToolbar, p = v._getEditorOffsets(i.toolbarContainer).top - (u._isInline ? s.toolbar.offsetHeight : 0), m = u._isInline && c - p > 0 ? c - p - e.element.toolbar.offsetHeight : 0;
      c < p ? v._offStickyToolbar() : c + u._variable.minResizingSize >= r + p ? (u._sticky || v._onStickyToolbar(m), s.toolbar.style.top = m + r + p + i.stickyToolbar - c - u._variable.minResizingSize + "px") : c >= p && v._onStickyToolbar(m);
    },
    _getEditorOffsets: function(s) {
      let r = s || e.element.topArea, c = 0, p = 0, m = 0;
      for (; r; )
        c += r.offsetTop, p += r.offsetLeft, m += r.scrollTop, r = r.offsetParent;
      return {
        top: c,
        left: p,
        scroll: m
      };
    },
    _getPageBottomSpace: function() {
      return d.documentElement.scrollHeight - (v._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(s) {
      const r = e.element;
      !u._isInline && !i.toolbarContainer && (r._stickyDummy.style.height = r.toolbar.offsetHeight + "px", r._stickyDummy.style.display = "block"), r.toolbar.style.top = i.stickyToolbar + s + "px", r.toolbar.style.width = u._isInline ? u._inlineToolbarAttr.width : r.toolbar.offsetWidth + "px", n.addClass(r.toolbar, "se-toolbar-sticky"), u._sticky = !0;
    },
    _offStickyToolbar: function() {
      const s = e.element;
      s._stickyDummy.style.display = "none", s.toolbar.style.top = u._isInline ? u._inlineToolbarAttr.top : "", s.toolbar.style.width = u._isInline ? u._inlineToolbarAttr.width : "", s.editorArea.style.marginTop = "", n.removeClass(s.toolbar, "se-toolbar-sticky"), u._sticky = !1;
    },
    _codeViewAutoHeight: function() {
      u._variable.isFullScreen || (e.element.code.style.height = e.element.code.scrollHeight + "px");
    },
    // FireFox - table delete, Chrome - image, video, audio
    _hardDelete: function() {
      const s = u.getRange(), r = s.startContainer, c = s.endContainer, p = n.getRangeFormatElement(r), m = n.getRangeFormatElement(c), g = n.isCell(p), h = n.isCell(m), _ = s.commonAncestorContainer;
      if ((g && !p.previousElementSibling && !p.parentElement.previousElementSibling || h && !m.nextElementSibling && !m.parentElement.nextElementSibling) && p !== m)
        if (!g)
          n.removeItem(n.getParentElement(m, function(S) {
            return _ === S.parentNode;
          }));
        else if (!h)
          n.removeItem(n.getParentElement(p, function(S) {
            return _ === S.parentNode;
          }));
        else
          return n.removeItem(n.getParentElement(p, function(S) {
            return _ === S.parentNode;
          })), u.nativeFocus(), !0;
      const C = r.nodeType === 1 ? n.getParentElement(r, ".se-component") : null, y = c.nodeType === 1 ? n.getParentElement(c, ".se-component") : null;
      return C && n.removeItem(C), y && n.removeItem(y), !1;
    },
    onPaste_wysiwyg: function(s) {
      const r = n.isIE ? f.clipboardData : s.clipboardData;
      return r ? v._dataTransferAction("paste", s, r) : !0;
    },
    _setClipboardComponent: function(s, r, c) {
      s.preventDefault(), s.stopPropagation(), c.setData("text/html", r.component.outerHTML);
    },
    onCopy_wysiwyg: function(s) {
      const r = n.isIE ? f.clipboardData : s.clipboardData;
      if (typeof k.onCopy == "function" && k.onCopy(s, r, u) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const c = u.currentFileComponentInfo;
      c && !n.isIE && (v._setClipboardComponent(s, c, r), n.addClass(c.component, "se-component-copy"), f.setTimeout(function() {
        n.removeClass(c.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(s) {
      if (typeof k.onSave == "function") {
        k.onSave(s, u);
        return;
      }
    },
    onCut_wysiwyg: function(s) {
      const r = n.isIE ? f.clipboardData : s.clipboardData;
      if (typeof k.onCut == "function" && k.onCut(s, r, u) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const c = u.currentFileComponentInfo;
      c && !n.isIE && (v._setClipboardComponent(s, c, r), n.removeItem(c.component), u.controllersOff()), f.setTimeout(function() {
        u.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(s) {
      if (u.isReadOnly || n.isIE)
        return s.preventDefault(), s.stopPropagation(), !1;
      const r = s.dataTransfer;
      return r ? (v._setDropLocationSelection(s), u.removeNode(), document.body.contains(u.currentControllerTarget) || u.controllersOff(), v._dataTransferAction("drop", s, r)) : !0;
    },
    _setDropLocationSelection: function(s) {
      const r = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let c = null;
      if (s.rangeParent ? (r.startContainer = s.rangeParent, r.startOffset = s.rangeOffset, r.endContainer = s.rangeParent, r.endOffset = s.rangeOffset) : u._wd.caretRangeFromPoint ? c = u._wd.caretRangeFromPoint(s.clientX, s.clientY) : c = u.getRange(), c && (r.startContainer = c.startContainer, r.startOffset = c.startOffset, r.endContainer = c.endContainer, r.endOffset = c.endOffset), r.startContainer === r.endContainer) {
        const p = n.getParentElement(r.startContainer, n.isComponent);
        p && (r.startContainer = p, r.startOffset = 0, r.endContainer = p, r.endOffset = 0);
      }
      u.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(s, r, c) {
      let p, m;
      if (n.isIE) {
        p = c.getData("Text");
        const g = u.getRange(), h = n.createElement("DIV"), _ = {
          sc: g.startContainer,
          so: g.startOffset,
          ec: g.endContainer,
          eo: g.endOffset
        };
        return h.setAttribute("contenteditable", !0), h.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(h), h.focus(), f.setTimeout(function() {
          m = h.innerHTML, n.removeItem(h), u.setRange(_.sc, _.so, _.ec, _.eo), v._setClipboardData(s, r, p, m, c);
        }), !0;
      } else if (p = c.getData("text/plain"), m = c.getData("text/html"), v._setClipboardData(s, r, p, m, c) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(s, r, c, p, m) {
      const g = /class=["']*Mso(Normal|List)/i.test(p) || /content=["']*Word.Document/i.test(p) || /content=["']*OneNote.File/i.test(p) || /content=["']*Excel.Sheet/i.test(p);
      !p ? p = n._HTMLConvertor(c).replace(/\n/g, "<br>") : (p = p.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), g && (p = p.replace(/\n/g, " "), c = c.replace(/\n/g, " ")), p = u.cleanHTML(p, u.pasteTagsWhitelistRegExp, u.pasteTagsBlacklistRegExp));
      const _ = u._charCount(u._charTypeHTML ? p : c);
      if (s === "paste" && typeof k.onPaste == "function") {
        const y = k.onPaste(r, p, _, u);
        if (y === !1)
          return !1;
        if (typeof y == "string") {
          if (!y) return !1;
          p = y;
        }
      }
      if (s === "drop" && typeof k.onDrop == "function") {
        const y = k.onDrop(r, p, _, u);
        if (y === !1)
          return !1;
        if (typeof y == "string") {
          if (!y) return !1;
          p = y;
        }
      }
      const C = m.files;
      if (C.length > 0 && !g)
        return /^image/.test(C[0].type) && u.plugins.image && k.insertImage(C), !1;
      if (!_)
        return !1;
      if (p)
        return k.insertHTML(p, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(s) {
      if (u.isDisabled || u.isReadOnly) return !1;
      const r = n.getParentElement(s.target, n.isComponent), c = u._lineBreaker.style;
      if (r && !u.currentControllerName) {
        const p = e.element;
        let m = 0, g = p.wysiwyg;
        do
          m += g.scrollTop, g = g.parentElement;
        while (g && !/^(BODY|HTML)$/i.test(g.nodeName));
        const h = p.wysiwyg.scrollTop, _ = v._getEditorOffsets(null), C = n.getOffset(r, p.wysiwygFrame).top + h, y = s.pageY + m + (i.iframe && !i.toolbarContainer ? p.toolbar.offsetHeight : 0), S = C + (i.iframe ? m : _.top), V = n.isListCell(r.parentNode);
        let T = "", z = "";
        if ((V ? !r.previousSibling : !n.isFormatElement(r.previousElementSibling)) && y < S + 20)
          z = C, T = "t";
        else if ((V ? !r.nextSibling : !n.isFormatElement(r.nextElementSibling)) && y > S + r.offsetHeight - 20)
          z = C + r.offsetHeight, T = "b";
        else {
          c.display = "none";
          return;
        }
        u._variable._lineBreakComp = r, u._variable._lineBreakDir = T, c.top = z - h + "px", u._lineBreakerButton.style.left = n.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", c.display = "block";
      } else c.display !== "none" && (c.display = "none");
    },
    _enterPrevent: function(s) {
      s.preventDefault(), n.isMobile && u.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(s) {
      s.preventDefault();
    },
    _onLineBreak: function(s) {
      s.preventDefault();
      const r = u._variable._lineBreakComp, c = this ? this : u._variable._lineBreakDir, p = n.isListCell(r.parentNode), m = n.createElement(p ? "BR" : n.isCell(r.parentNode) ? "DIV" : i.defaultTag);
      if (p || (m.innerHTML = "<br>"), u._charTypeHTML && !u.checkCharCount(m.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(m, c === "t" ? r : r.nextSibling), u._lineBreaker.style.display = "none", u._variable._lineBreakComp = null;
      const g = p ? m : m.firstChild;
      u.setRange(g, 1, g, 1), u.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const s = i.iframe ? u._ww : e.element.wysiwyg;
      n.isResizeObserverSupported && (this._resizeObserver = new f.ResizeObserver(function(r) {
        u.__callResizeFunction(-1, r[0]);
      })), e.element.toolbar.addEventListener("mousedown", v._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", v._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", v.onClick_toolbar, !1), s.addEventListener("mousedown", v.onMouseDown_wysiwyg, !1), s.addEventListener("click", v.onClick_wysiwyg, !1), s.addEventListener(n.isIE ? "textinput" : "input", v.onInput_wysiwyg, !1), s.addEventListener("keydown", v.onKeyDown_wysiwyg, !1), s.addEventListener("keyup", v.onKeyUp_wysiwyg, !1), s.addEventListener("paste", v.onPaste_wysiwyg, !1), s.addEventListener("copy", v.onCopy_wysiwyg, !1), s.addEventListener("cut", v.onCut_wysiwyg, !1), s.addEventListener("drop", v.onDrop_wysiwyg, !1), s.addEventListener("scroll", v.onScroll_wysiwyg, !1), s.addEventListener("focus", v.onFocus_wysiwyg, !1), s.addEventListener("blur", v.onBlur_wysiwyg, !1), v._lineBreakerBind = { a: v._onLineBreak.bind(""), t: v._onLineBreak.bind("t"), b: v._onLineBreak.bind("b") }, s.addEventListener("mousemove", v.onMouseMove_wysiwyg, !1), u._lineBreakerButton.addEventListener("mousedown", v._onMouseDown_lineBreak, !1), u._lineBreakerButton.addEventListener("click", v._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", v._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", v._lineBreakerBind.b, !1), s.addEventListener("touchstart", v.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.addEventListener("touchend", v.onClick_wysiwyg, { passive: !0, useCapture: !1 }), i.height === "auto" && !i.codeMirrorEditor && (e.element.code.addEventListener("keydown", v._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", v._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", v._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(i.height) && i.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", v.onMouseDown_resizingBar, !1) : n.addClass(e.element.resizingBar, "se-resizing-none")), v._setResponsiveToolbar(), n.isResizeObserverSupported && (this._toolbarObserver = new f.ResizeObserver(u.resetResponsiveToolbar)), f.addEventListener("resize", v.onResize_window, !1), i.stickyToolbar > -1 && f.addEventListener("scroll", v.onScroll_window, !1);
    },
    _removeEvent: function() {
      const s = i.iframe ? u._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", v._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", v._buttonsEventHandler), e.element.toolbar.removeEventListener("click", v.onClick_toolbar), s.removeEventListener("mousedown", v.onMouseDown_wysiwyg), s.removeEventListener("click", v.onClick_wysiwyg), s.removeEventListener(n.isIE ? "textinput" : "input", v.onInput_wysiwyg), s.removeEventListener("keydown", v.onKeyDown_wysiwyg), s.removeEventListener("keyup", v.onKeyUp_wysiwyg), s.removeEventListener("paste", v.onPaste_wysiwyg), s.removeEventListener("copy", v.onCopy_wysiwyg), s.removeEventListener("cut", v.onCut_wysiwyg), s.removeEventListener("drop", v.onDrop_wysiwyg), s.removeEventListener("scroll", v.onScroll_wysiwyg), s.removeEventListener("mousemove", v.onMouseMove_wysiwyg), u._lineBreakerButton.removeEventListener("mousedown", v._onMouseDown_lineBreak), u._lineBreakerButton.removeEventListener("click", v._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", v._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", v._lineBreakerBind.b), v._lineBreakerBind = null, s.removeEventListener("touchstart", v.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("touchend", v.onClick_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("focus", v.onFocus_wysiwyg), s.removeEventListener("blur", v.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", v._codeViewAutoHeight), e.element.code.removeEventListener("keyup", v._codeViewAutoHeight), e.element.code.removeEventListener("paste", v._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", v.onMouseDown_resizingBar), v._resizeObserver && (v._resizeObserver.unobserve(e.element.wysiwygFrame), v._resizeObserver = null), v._toolbarObserver && (v._toolbarObserver.unobserve(e.element._toolbarShadow), v._toolbarObserver = null), f.removeEventListener("resize", v.onResize_window), f.removeEventListener("scroll", v.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (a.length === 0) {
        a = null;
        return;
      }
      v._responsiveCurrentSize = "default";
      const s = v._responsiveButtonSize = [], r = v._responsiveButtons = { default: a[0] };
      for (let c = 1, p = a.length, m, g; c < p; c++)
        g = a[c], m = g[0] * 1, s.push(m), r[m] = g[1];
      s.sort(function(c, p) {
        return c - p;
      }).unshift("default");
    }
  }, k = {
    /**
     * @description Core, Util object
     */
    core: u,
    util: n,
    /**
     * @description Event functions
     * @param {Object} e Event Object
     * @param {Object} core Core object
     */
    onload: null,
    onScroll: null,
    onMouseDown: null,
    onClick: null,
    onInput: null,
    onKeyDown: null,
    onKeyUp: null,
    onCopy: null,
    onCut: null,
    onFocus: null,
    /**
     * @description Event functions
     * @param {Object} e Event Object
     * @param {Object} core Core object
     * @param {String} contents Current contents
     */
    onBlur: null,
    /**
     * @description Event functions
     * @param {String} contents Current contents
     * @param {Object} core Core object
     */
    onChange: null,
    /**
     * @description Event functions
     * @param {String} contents Current contents
     * @param {Object} core Core object
     */
    onSave: null,
    /**
     * @description Event functions (drop, paste)
     * When false is returned, the default behavior is stopped.
     * If the string is returned, the cleanData value is modified to the return value.
     * @param {Object} e Event object.
     * @param {String} cleanData HTML string modified for editor format.
     * @param {Boolean} maxChartCount option (true if max character is exceeded)
     * @param {Object} core Core object
     * @returns {Boolean|String}
     */
    onDrop: null,
    onPaste: null,
    /**
     * @description Called just before the inline toolbar is positioned and displayed on the screen.
     * @param {Element} toolbar Toolbar Element
     * @param {Object} context The editor's context object (editor.getContext())
     * @param {Object} core Core object
     */
    showInline: null,
    /**
     * @description Called just after the controller is positioned and displayed on the screen.
     * controller - editing elements displayed on the screen [image resizing, table editor, link editor..]]
     * @param {String} name The name of the plugin that called the controller
     * @param {Array} controllers Array of Controller elements
     * @param {Object} core Core object
     */
    showController: null,
    /**
     * @description An event when toggling between code view and wysiwyg view.
     * @param {Boolean} isCodeView Whether the current code view mode
     * @param {Object} core Core object
     */
    toggleCodeView: null,
    /**
     * @description An event when toggling full screen.
     * @param {Boolean} isFullScreen Whether the current full screen mode
     * @param {Object} core Core object
     */
    toggleFullScreen: null,
    /**
     * @description It replaces the default callback function of the image upload
     * @param {Object} response Response object
     * @param {Object} info Input information
     * - linkValue: Link url value
     * - linkNewWindow: Open in new window Check Value
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update image if true, create image if false
     * - element: If isUpdate is true, the currently selected image.
     * @param {Object} core Core object
     */
    imageUploadHandler: null,
    /**
     * @description It replaces the default callback function of the video upload
     * @param xmlHttp xmlHttpRequest object
     * @param info Input information
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update video if true, create video if false
     * - element: If isUpdate is true, the currently selected video.
     * @param core Core object
     */
    videoUploadHandler: null,
    /**
     * @description It replaces the default callback function of the audio upload
     * @param xmlHttp xmlHttpRequest object
     * @param info Input information
     * - isUpdate: Update audio if true, create audio if false
     * - element: If isUpdate is true, the currently selected audio.
     * @param core Core object
     */
    audioUploadHandler: null,
    /**
     * @description Called before the image is uploaded
     * If true is returned, the internal upload process runs normally.
     * If false is returned, no image upload is performed.
     * If new fileList are returned,  replaced the previous fileList
     * If undefined is returned, it waits until "uploadHandler" is executed.
     * @param {Array} files Files array
     * @param {Object} info info: {
     * - linkValue: Link url value
     * - linkNewWindow: Open in new window Check Value
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update image if true, create image if false
     * - element: If isUpdate is true, the currently selected image.
     * }
     * @param {Object} core Core object
     * @param {Function} uploadHandler If undefined is returned, it waits until "uploadHandler" is executed.
     *                "uploadHandler" is an upload function with "core" and "info" bound.
     *                [upload files] : uploadHandler(files or [new File(...),])
     *                [error]        : uploadHandler("Error message")
     *                [Just finish]  : uploadHandler()
     *                [directly register] : uploadHandler(response) // Same format as "imageUploadUrl" response
     *                                   ex) {
     *                                      // "errorMessage": "insert error message",
     *                                      "result": [ { "url": "...", "name": "...", "size": "999" }, ]
     *                                   }
     * @returns {Boolean|Array|undefined}
     */
    onImageUploadBefore: null,
    /**
     * @description Called before the video is uploaded
     * If true is returned, the internal upload process runs normally.
     * If false is returned, no video(iframe, video) upload is performed.
     * If new fileList are returned,  replaced the previous fileList
     * If undefined is returned, it waits until "uploadHandler" is executed.
     * @param {Array} files Files array
     * @param {Object} info info: {
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update video if true, create video if false
     * - element: If isUpdate is true, the currently selected video.
     * }
     * @param {Object} core Core object
     * @param {Function} uploadHandler If undefined is returned, it waits until "uploadHandler" is executed.
     *                "uploadHandler" is an upload function with "core" and "info" bound.
     *                [upload files] : uploadHandler(files or [new File(...),])
     *                [error]        : uploadHandler("Error message")
     *                [Just finish]  : uploadHandler()
     *                [directly register] : uploadHandler(response) // Same format as "videoUploadUrl" response
     *                                   ex) {
     *                                      // "errorMessage": "insert error message",
     *                                      "result": [ { "url": "...", "name": "...", "size": "999" }, ]
     *                                   }
     * @returns {Boolean|Array|undefined}
     */
    onVideoUploadBefore: null,
    /**
     * @description Called before the audio is uploaded
     * If true is returned, the internal upload process runs normally.
     * If false is returned, no audio upload is performed.
     * If new fileList are returned,  replaced the previous fileList
     * If undefined is returned, it waits until "uploadHandler" is executed.
     * @param {Array} files Files array
     * @param {Object} info info: {
     * - isUpdate: Update audio if true, create audio if false
     * - element: If isUpdate is true, the currently selected audio.
     * }
     * @param {Object} core Core object
     * @param {Function} uploadHandler If undefined is returned, it waits until "uploadHandler" is executed.
     *                "uploadHandler" is an upload function with "core" and "info" bound.
     *                [upload files] : uploadHandler(files or [new File(...),])
     *                [error]        : uploadHandler("Error message")
     *                [Just finish]  : uploadHandler()
     *                [directly register] : uploadHandler(response) // Same format as "audioUploadUrl" response
     *                                   ex) {
     *                                      // "errorMessage": "insert error message",
     *                                      "result": [ { "url": "...", "name": "...", "size": "999" }, ]
     *                                   }
     * @returns {Boolean|Array|undefined}
     */
    onAudioUploadBefore: null,
    /**
     * @description Called when the image is uploaded, updated, deleted
     * @param {Element} targetElement Target element
     * @param {Number} index Uploaded index
     * @param {String} state Upload status ('create', 'update', 'delete')
     * @param {Object} info Image info object
     * - index: data index
     * - name: file name
     * - size: file size
     * - select: select function
     * - delete: delete function
     * - element: target element
     * - src: src attribute of tag
     * @param {Number} remainingFilesCount Count of remaining files to upload (0 when added as a url)
     * @param {Object} core Core object
     */
    onImageUpload: null,
    /**
    * @description Called when the video(iframe, video) is is uploaded, updated, deleted
    * -- arguments is same "onImageUpload" --
    */
    onVideoUpload: null,
    /**
    * @description Called when the audio is is uploaded, updated, deleted
    * -- arguments is same "onImageUpload" --
    */
    onAudioUpload: null,
    /**
     * @description Called when the image is upload failed
     * @param {String} errorMessage Error message
     * @param {Object} result Response Object
     * @param {Object} core Core object
     * @returns {Boolean}
     */
    onImageUploadError: null,
    /**
     * @description Called when the video(iframe, video) upload failed
     * -- arguments is same "onImageUploadError" --
     */
    onVideoUploadError: null,
    /**
     * @description Called when the audio upload failed
     * -- arguments is same "onImageUploadError" --
     */
    onAudioUploadError: null,
    /**
     * @description Called when the editor is resized using the bottom bar
     */
    onResizeEditor: null,
    /**
     * @description Called after the "setToolbarButtons" invocation.
     * Can be used to tweak buttons properties (useful for custom buttons)
     * @param {Array} buttonList Button list 
     * @param {Object} core Core object
     */
    onSetToolbarButtons: null,
    /**
     * @description Reset the buttons on the toolbar. (Editor is not reloaded)
     * You cannot set a new plugin for the button.
     * @param {Array} buttonList Button list 
     */
    setToolbarButtons: function(s) {
      u.submenuOff(), u.containerOff(), u.moreLayerOff();
      const r = Yi._createToolBar(d, s, u.plugins, i);
      a = r.responsiveButtons, v._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const c = Xi(e.element.originElement, u._getConstructed(e.element), i);
      e.element = c.element, e.tool = c.tool, i.iframe && (e.element.wysiwyg = u._wd.body), u._recoverButtonStates(), u._cachingButtons(), u.history._resetCachingButton(), u.effectNode = null, u.hasFocus && v._applyTagEffects(), u.isReadOnly && n.setDisabledButtons(!0, u.resizingDisabledButtons), typeof k.onSetToolbarButtons == "function" && k.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), u);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(s) {
      v._removeEvent(), u._resetComponents(), n.removeClass(u._styleCommandMap.showBlocks, "active"), n.removeClass(u._styleCommandMap.codeView, "active"), u._variable.isCodeView = !1, u._iframeAuto = null, u.plugins = s.plugins || u.plugins;
      const r = [i, s].reduce(function(g, h) {
        for (let _ in h)
          if (n.hasOwn(h, _))
            if (_ === "plugins" && h[_] && g[_]) {
              let C = g[_], y = h[_];
              C = C.length ? C : f.Object.keys(C).map(function(S) {
                return C[S];
              }), y = y.length ? y : f.Object.keys(y).map(function(S) {
                return y[S];
              }), g[_] = y.filter(function(S) {
                return C.indexOf(S) === -1;
              }).concat(C);
            } else
              g[_] = h[_];
        return g;
      }, {}), c = e.element, p = c.wysiwyg.innerHTML, m = Yi._setOptions(r, e, i);
      m.callButtons && (t = m.callButtons, u.initPlugins = {}), m.plugins && (u.plugins = l = m.plugins), c._menuTray.children.length === 0 && (this._menuTray = {}), a = m.toolbar.responsiveButtons, u.options = i = r, u.lang = o = i.lang, i.iframe && c.wysiwygFrame.addEventListener("load", function() {
        n._setIframeDocument(this, i), u._setOptionsInit(c, p);
      }), c.editorArea.appendChild(c.wysiwygFrame), i.iframe || u._setOptionsInit(c, p);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(s) {
      const r = i._editorStyles = n._setDefaultOptionStyle(i, s), c = e.element;
      c.topArea.style.cssText = r.top, c.code.style.cssText = i._editorStyles.frame, c.code.style.display = "none", i.height === "auto" ? c.code.style.overflow = "hidden" : c.code.style.overflow = "", i.iframe ? (c.wysiwygFrame.style.cssText = r.frame, c.wysiwyg.style.cssText = r.editor) : c.wysiwygFrame.style.cssText = r.frame + r.editor;
    },
    /**
     * @description Open a notice area
     * @param {String} message Notice message
     */
    noticeOpen: function(s) {
      u.notice.open.call(u, s);
    },
    /**
     * @description Close a notice area
     */
    noticeClose: function() {
      u.notice.close.call(u);
    },
    /**
     * @description Copying the contents of the editor to the original textarea and execute onSave callback
     * * not working during enabled codeView mode
     */
    save: function() {
      const s = u.getContents(!1);
      e.element.originElement.value = s, v.onSave_wysiwyg(s, u);
    },
    /**
     * @description Gets the suneditor's context object. Contains settings, plugins, and cached element objects
     * @returns {Object}
     */
    getContext: function() {
      return e;
    },
    /**
     * @description Gets the contents of the suneditor
     * * not working during enabled codeView mode
     * @param {Boolean} onlyContents - Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getContents: function(s) {
      return u.getContents(s);
    },
    /**
     * @description Gets only the text of the suneditor contents
     * * not working during enabled codeView mode
     * @returns {String}
     */
    getText: function() {
      return e.element.wysiwyg.textContent;
    },
    /**
     * @description Get the editor's number of characters or binary data size.
     * You can use the "charCounterType" option format.
     * @param {String|null} charCounterType options - charCounterType ('char', 'byte', 'byte-html')
     * If argument is no value, the currently set "charCounterType" option is used.
     * @returns {Number}
     */
    getCharCount: function(s) {
      return s = typeof s == "string" ? s : i.charCounterType, u.getCharLength(u._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, s);
    },
    /**
     * @description Gets uploaded images informations
     * - index: data index
     * - name: file name
     * - size: file size
     * - select: select function
     * - delete: delete function
     * - element: target element
     * - src: src attribute of tag
     * @returns {Array}
     */
    getImagesInfo: function() {
      return e.image ? e.image._infoList : [];
    },
    /**
     * @description Gets uploaded files(plugin using fileManager) information list.
     * image: [img], video: [video, iframe], audio: [audio]
     * When the argument value is 'image', it is the same function as "getImagesInfo".
     * - index: data index
     * - name: file name
     * - size: file size
     * - select: select function
     * - delete: delete function
     * - element: target element
     * - src: src attribute of tag
     * @param {String} pluginName Plugin name (image, video, audio)
     * @returns {Array}
     */
    getFilesInfo: function(s) {
      return e[s] ? e[s]._infoList : [];
    },
    /**
     * @description Upload images using image plugin
     * @param {FileList} files FileList
     */
    insertImage: function(s) {
      !u.plugins.image || !s || (u.initPlugins.image ? u.plugins.image.submitAction.call(u, s) : u.callPlugin("image", u.plugins.image.submitAction.bind(u, s), null), u.focus());
    },
    /**
     * @description Inserts an HTML element or HTML string or plain string at the current cursor position
     * @param {Element|String} html HTML Element or HTML string or plain string
     * @param {Boolean} notCleaningData If true, inserts the HTML string without refining it with core.cleanHTML.
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} rangeSelection If true, range select the inserted node.
     */
    insertHTML: function(s, r, c, p) {
      if (e.element.wysiwygFrame.contains(u.getSelection().focusNode) || u.focus(), typeof s == "string") {
        r || (s = u.cleanHTML(s, null, null));
        try {
          if (n.isListCell(n.getFormatElement(u.getSelectionNode(), null))) {
            const z = d.createRange().createContextualFragment(s).childNodes;
            u._isFormatData(z) && (s = u._convertListCell(z));
          }
          const g = d.createRange().createContextualFragment(s).childNodes;
          if (c) {
            const T = u._charTypeHTML ? "outerHTML" : "textContent";
            let z = "";
            for (let A = 0, q = g.length; A < q; A++)
              z += g[A][T];
            if (!u.checkCharCount(z, null)) return;
          }
          let h, _, C, y, S;
          for (; h = g[0]; ) {
            if (y && y.nodeType === 3 && _ && _.nodeType === 1 && n.isBreak(h)) {
              y = h, n.removeItem(h);
              continue;
            }
            C = u.insertNode(h, _, !1), _ = C.container || C, S || (S = C), y = h;
          }
          y.nodeType === 3 && _.nodeType === 1 && (_ = y);
          const V = _.nodeType === 3 ? C.endOffset || _.textContent.length : _.childNodes.length;
          p ? u.setRange(S.container || S, S.startOffset || 0, _, V) : u.setRange(_, V, _, V);
        } catch (m) {
          if (u.isDisabled || u.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + m), u.execCommand("insertHTML", !1, s);
        }
      } else if (n.isComponent(s))
        u.insertComponent(s, !1, c, !1);
      else {
        let m = null;
        (n.isFormatElement(s) || n.isMedia(s)) && (m = n.getFormatElement(u.getSelectionNode(), null)), u.insertNode(s, m, c);
      }
      u.effectNode = null, u.focus(), u.history.push(!1);
    },
    /**
     * @description Change the contents of the suneditor
     * @param {String|undefined} contents Contents to Input
     */
    setContents: function(s) {
      u.setContents(s);
    },
    /**
     * @description Add contents to the suneditor
     * @param {String} contents Contents to Input
     */
    appendContents: function(s) {
      const r = u.convertContentsForEditor(s);
      if (u._variable.isCodeView)
        u._setCodeView(u._getCodeView() + `
` + u.convertHTMLForCodeView(r, !1));
      else {
        const c = n.createElement("DIV");
        c.innerHTML = r;
        const p = e.element.wysiwyg, m = c.children;
        for (let g = 0, h = m.length; g < h; g++)
          m[g] && p.appendChild(m[g]);
      }
      u.history.push(!1);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(s) {
      u.isReadOnly = s, n.setDisabledButtons(!!s, u.resizingDisabledButtons), s ? (u.controllersOff(), u.submenuActiveButton && u.submenuActiveButton.disabled && u.submenuOff(), u._moreLayerActiveButton && u._moreLayerActiveButton.disabled && u.moreLayerOff(), u.containerActiveButton && u.containerActiveButton.disabled && u.containerOff(), u.modalForm && u.plugins.dialog.close.call(u), e.element.code.setAttribute("readOnly", "true"), n.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), n.removeClass(e.element.wysiwygFrame, "se-read-only")), i.codeMirrorEditor && i.codeMirrorEditor.setOption("readOnly", !!s);
    },
    /**
     * @description Disable the suneditor
     */
    disable: function() {
      this.toolbar.disable(), this.wysiwyg.disable();
    },
    /**
     * @description Provided for backward compatibility and will be removed in 3.0.0 version
     */
    disabled: function() {
      this.disable();
    },
    /**
     * @description Enable the suneditor
     */
    enable: function() {
      this.toolbar.enable(), this.wysiwyg.enable();
    },
    /**
     * @description Provided for backward compatibility and will be removed in 3.0.0 version
     */
    enabled: function() {
      this.enable();
    },
    /**
     * @description Show the suneditor
     */
    show: function() {
      const s = e.element.topArea.style;
      s.display === "none" && (s.display = i.display);
    },
    /**
     * @description Hide the suneditor
     */
    hide: function() {
      e.element.topArea.style.display = "none";
    },
    /**
     * @description Destroy the suneditor
     */
    destroy: function() {
      u.submenuOff(), u.containerOff(), u.controllersOff(), u.notice && u.notice.close.call(u), u.modalForm && u.plugins.dialog.close.call(u), u.history._destroy(), v._removeEvent(), n.removeItem(e.element.toolbar), n.removeItem(e.element.topArea);
      for (let s in u.functions)
        n.hasOwn(u, s) && delete u.functions[s];
      for (let s in u)
        n.hasOwn(u, s) && delete u[s];
      for (let s in v)
        n.hasOwn(v, s) && delete v[s];
      for (let s in e)
        n.hasOwn(e, s) && delete e[s];
      for (let s in t)
        n.hasOwn(t, s) && delete t[s];
      for (let s in this)
        n.hasOwn(this, s) && delete this[s];
    },
    /**
     * @description Toolbar methods
     */
    toolbar: {
      /**
       * @description Disable the toolbar
       */
      disable: function() {
        u.submenuOff(), u.moreLayerOff(), u.containerOff(), e.tool.cover.style.display = "block";
      },
      /**
       * @description Provided for backward compatibility and will be removed in 3.0.0 version
       */
      disabled: function() {
        this.disable();
      },
      /**
       * @description Enable the toolbar
       */
      enable: function() {
        e.tool.cover.style.display = "none";
      },
      /**
       * @description Provided for backward compatibility and will be removed in 3.0.0 version
       */
      enabled: function() {
        this.enable();
      },
      /**
       * @description Show the toolbar
       */
      show: function() {
        u._isInline ? v._showToolbarInline() : (e.element.toolbar.style.display = "", e.element._stickyDummy.style.display = ""), v.onResize_window();
      },
      /**
       * @description Hide the toolbar
       */
      hide: function() {
        u._isInline ? v._hideToolbar() : (e.element.toolbar.style.display = "none", e.element._stickyDummy.style.display = "none"), v.onResize_window();
      }
    },
    /**
     * @description Wysiwyg methods
     */
    wysiwyg: {
      /**
       * @description Disable the wysiwyg area
       */
      disable: function() {
        u.controllersOff(), u.modalForm && u.plugins.dialog.close.call(u), e.element.wysiwyg.setAttribute("contenteditable", !1), u.isDisabled = !0, i.codeMirrorEditor ? i.codeMirrorEditor.setOption("readOnly", !0) : e.element.code.setAttribute("disabled", "disabled");
      },
      /**
       * @description Enable the wysiwyg area
       */
      enable: function() {
        e.element.wysiwyg.setAttribute("contenteditable", !0), u.isDisabled = !1, i.codeMirrorEditor ? i.codeMirrorEditor.setOption("readOnly", !1) : e.element.code.removeAttribute("disabled");
      }
    }
  };
  u.functions = k, u.options = i;
  let x = e.element, L = x.originElement, R = x.topArea;
  return L.style.display = "none", R.style.display = "block", i.iframe && x.wysiwygFrame.addEventListener("load", function() {
    n._setIframeDocument(this, i), u._editorInit(!1, i.value), i.value = null;
  }), typeof L.nextElementSibling == "object" ? L.parentNode.insertBefore(R, L.nextElementSibling) : L.parentNode.appendChild(R), x.editorArea.appendChild(x.wysiwygFrame), x = L = R = null, i.iframe || (u._editorInit(!1, i.value), i.value = null), k;
}
const Ir = {
  /**
   * @description Returns the create function with preset options.
   * If the options overlap, the options of the 'create' function take precedence.
   * @param {Json} options Initialization options
   * @returns {Object}
   */
  init: function(e) {
    return {
      create: (function(t, l) {
        return this.create(t, l, e);
      }).bind(this)
    };
  },
  /**
   * @description Create the suneditor
   * @param {String|Element} idOrElement textarea Id or textarea element
   * @param {JSON|Object} options user options
   * @returns {Object}
   */
  create: function(e, t, l) {
    he._propertiesInit(), typeof t != "object" && (t = {}), l && (t = [l, t].reduce(function(a, d) {
      for (let f in d)
        if (he.hasOwn(d, f))
          if (f === "plugins" && d[f] && a[f]) {
            let n = a[f], b = d[f];
            n = n.length ? n : Object.keys(n).map(function(u) {
              return n[u];
            }), b = b.length ? b : Object.keys(b).map(function(u) {
              return b[u];
            }), a[f] = b.filter(function(u) {
              return n.indexOf(u) === -1;
            }).concat(n);
          } else
            a[f] = d[f];
      return a;
    }, {}));
    const o = typeof e == "string" ? document.getElementById(e) : e;
    if (!o)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const i = Yi.init(o, t);
    if (i.constructed._top.id && document.getElementById(i.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + i.constructed._top.id + '")');
    return Rr(Xi(o, i.constructed, i.options), i.pluginCallButtons, i.plugins, i.options.lang, t, i._responsiveButtons);
  }
}, Vr = ["innerHTML", "id", "tabindex"], Dr = /* @__PURE__ */ be({
  __name: "HtmlInput",
  props: {
    modelValue: { default: "" },
    name: {},
    id: {},
    lang: {},
    editable: { type: Boolean },
    focusing: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    tabindex: {}
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { expose: t, emit: l }) {
    const o = l, i = e, a = Q(null), d = Q(i.modelValue);
    let f = null, n;
    const b = Q(i.focusing), u = (L) => {
      b.value = !0, o("focus", L);
    }, v = (L) => {
      b.value = !1, o("blur", L);
    }, k = (L) => {
      n && clearTimeout(n), n = setTimeout(() => {
        vn(L) === "" ? d.value = "" : d.value = L;
      }, 100);
    }, x = () => {
      let L = {
        //@ts-ignore
        lang: an[i.lang] ? an[i.lang] : Ui,
        plugins: {
          ...zr
        },
        ...Nr
      };
      f = Ir.create(i.id, L), f.onChange = (R) => {
        k(R), i.disabled ? f == null || f.disabled() : f == null || f.enabled();
      }, f.onKeyUp = (R, s) => {
        k(s.getContents(!1));
      }, f.onBlur = () => {
        v();
      }, f.onClick = () => {
        u();
      };
    };
    return ue(() => i.modelValue, (L) => d.value = L), ue(d, (L) => o("update:modelValue", L)), Fi(() => {
      x();
    }), t({
      doSetValue: (L) => {
        f && f.setContents(L);
      }
    }), (L, R) => (H(), oe("div", {
      innerHTML: d.value,
      ref_key: "input",
      ref: a,
      id: L.id,
      tabindex: L.tabindex
    }, null, 8, Vr));
  }
}), Mr = {
  key: 0,
  class: "lkt-field--searchable-box"
}, Hr = ["value", "placeholder"], Fr = { key: 0 }, Or = ["title"], Ur = /* @__PURE__ */ be({
  __name: "SelectInput",
  props: {
    modelValue: { type: [String, Number, Boolean, Object, Array], default: !1 },
    searchable: { type: Boolean },
    searchMode: { type: Boolean },
    multiple: { type: Boolean },
    canTag: { type: Boolean },
    optionsIcon: {},
    optionsText: {},
    optionsClass: {},
    optionSlot: {},
    optionsModal: {},
    optionsDownload: {},
    optionsLabelFormatter: {},
    optionsModalData: {},
    pickedOptions: {},
    showOptions: { type: Boolean },
    editable: { type: Boolean },
    focusing: { type: Boolean },
    searchPlaceholder: {},
    multipleDisplayEdition: {},
    searchString: {}
  },
  emits: [
    "update:modelValue",
    "update:showOptions",
    "focus",
    "blur",
    "navigate",
    "search",
    "change",
    "tag",
    "untag"
  ],
  setup(e, { expose: t, emit: l }) {
    const o = l, i = e, a = i.multiple && i.canTag, d = Q(i.searchString), f = Q(null), n = Q(i.showOptions);
    ue(n, (h) => {
      a || o("update:showOptions", h);
    });
    const b = Q(i.focusing), u = Q(!1), v = Q(!1), k = () => {
      zt(() => {
        b.value = u.value || v.value, n.value = b.value;
      });
    };
    ue(u, (h) => {
      h && (v.value = !1), k();
    }), ue(v, (h) => {
      h && (u.value = !1), k();
    }), ue(b, (h) => {
      o(h ? "focus" : "blur");
    });
    let x, L;
    const R = (h) => {
      x = setTimeout(() => {
        u.value = !1;
      }, 100);
    }, s = (h) => {
      u.value = !0, a && h.key === "Enter" ? (o("tag", d.value), d.value = "") : ["ArrowDown", "ArrowUp", "Enter"].includes(h.key) ? o("navigate", h) : o("search", d.value);
    }, r = (h) => {
      u.value = !0;
    }, c = (h) => {
      L = setTimeout(() => {
        v.value = !1;
      }, 100);
    }, p = (h) => {
      v.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(h.key) && o("navigate", h);
    }, m = (h) => {
      v.value = !0;
    }, g = (h) => {
      o("untag", h);
    };
    return t({
      keepFocused: () => {
        clearTimeout(x), clearTimeout(L), f.value && f.value.focus();
      }
    }), ue(() => i.pickedOptions, () => {
      o("change");
    }, { deep: !0 }), (h, _) => {
      const C = de("lkt-tag"), y = de("lkt-button");
      return H(), oe(He, null, [
        h.searchable && (h.multiple || h.searchMode) || B(a) ? (H(), oe("div", Mr, [
          h.multiple ? (H(), X(C, {
            key: 0,
            icon: h.optionsIcon,
            text: h.pickedOptions.length
          }, null, 8, ["icon", "text"])) : h.pickedOptions.length > 0 ? (H(), X(C, { key: 1 }, {
            default: ae(() => [
              K(Bt, {
                option: h.pickedOptions[0],
                "option-slot": h.optionSlot,
                icon: h.optionsIcon,
                text: h.optionsText,
                "custom-class": h.optionsClass,
                modal: h.optionsModal,
                "modal-data": h.optionsModalData,
                download: h.optionsDownload,
                "label-formatter": h.optionsLabelFormatter,
                editable: h.editable
              }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable"])
            ]),
            _: 1
          })) : le("", !0),
          je(fe("input", {
            "onUpdate:modelValue": _[0] || (_[0] = (S) => d.value = S),
            ref_key: "queryField",
            ref: f,
            value: d.value,
            placeholder: h.searchPlaceholder,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: s,
            onBlur: R,
            onFocus: r
          }, null, 40, Hr), [
            [Oi, d.value]
          ])
        ])) : le("", !0),
        je(K(y, {
          ref: "selectButton",
          type: B(a) ? "content" : "",
          class: "lkt-field--toggle-button lkt-field--select-button",
          "open-tooltip": n.value,
          "onUpdate:openTooltip": _[1] || (_[1] = (S) => n.value = S),
          onKeyup: p,
          onBlur: c,
          onFocus: m
        }, {
          default: ae(() => [
            B(a) || h.multiple && h.pickedOptions.length > 0 ? (H(), oe(He, { key: 0 }, [
              h.multipleDisplayEdition === B(si).Count ? (H(), oe("div", Fr, Tt(h.pickedOptions.length), 1)) : (H(), oe("ul", {
                key: 1,
                class: Te(["lkt-field-select-read", `multiple-display-${h.multipleDisplayEdition}`])
              }, [
                (H(!0), oe(He, null, Qe(h.pickedOptions, (S, V) => (H(), oe("li", {
                  title: S.label
                }, [
                  K(Bt, {
                    option: h.pickedOptions[V],
                    "option-slot": h.optionSlot,
                    icon: h.optionsIcon,
                    text: h.optionsText,
                    "custom-class": h.optionsClass,
                    modal: h.optionsModal,
                    "modal-data": h.optionsModalData,
                    download: h.optionsDownload,
                    "label-formatter": h.optionsLabelFormatter,
                    editable: h.editable,
                    "is-tag": B(a),
                    onClickIcon: g
                  }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable", "is-tag"])
                ], 8, Or))), 256))
              ], 2))
            ], 64)) : !h.multiple && h.pickedOptions.length > 0 ? (H(), X(Bt, {
              key: 1,
              option: h.pickedOptions[0],
              "option-slot": h.optionSlot,
              icon: h.optionsIcon,
              text: h.optionsText,
              "custom-class": h.optionsClass,
              modal: h.optionsModal,
              "modal-data": h.optionsModalData,
              download: h.optionsDownload,
              "label-formatter": h.optionsLabelFormatter,
              editable: h.editable
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable"])) : le("", !0)
          ]),
          _: 1
        }, 8, ["type", "open-tooltip"]), [
          [St, h.multiple || !h.searchable || !h.searchMode]
        ])
      ], 64);
    };
  }
}), Pr = { class: "lkt-calc--formula" }, Wr = { class: "lkt-calc--custom-pad" }, $r = { class: "lkt-calc--pad" }, Zr = { class: "lkt-calc--numeric-pad" }, qr = { class: "lkt-calc--math-pad" }, jr = { class: "lkt-calc--advance-math-pad" }, Gr = /* @__PURE__ */ be({
  __name: "CalcInput",
  props: {
    modelValue: { default: "" },
    options: { default: () => [] },
    editable: { type: Boolean },
    focusing: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    tabindex: {}
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const l = t, o = e, i = Q(o.modelValue), a = Q(null);
    ue(i, (m) => l("update:modelValue", m));
    const d = Q(o.focusing), f = Q(null);
    let n;
    const b = () => {
      clearTimeout(n), a.value && typeof a.value.focus == "function" && a.value.focus();
    }, u = (m) => {
      i.value += "" + m, b();
    }, v = (m) => {
      i.value += " " + m + " ", b();
    }, k = (m) => {
      i.value += " " + m + "(", b();
    }, x = () => {
      i.value += " sqrt(", b();
    }, L = (m) => {
      i.value += "" + m, b();
    }, R = () => {
      i.value += ".", b();
    }, s = () => {
      i.value += " ", b();
    }, r = (m) => {
      i.value += "" + m.value, b();
    }, c = () => {
      d.value = !0;
    }, p = () => {
      n = setTimeout(() => {
        d.value = !1;
      }, 100);
    };
    return ue(d, (m) => {
      l(m ? "focus" : "blur");
    }), (m, g) => {
      const h = de("lkt-button"), _ = de("lkt-tooltip");
      return H(), oe("div", {
        ref_key: "container",
        ref: f
      }, [
        fe("div", Pr, [
          je(fe("input", {
            type: "text",
            ref_key: "input",
            ref: a,
            "onUpdate:modelValue": g[0] || (g[0] = (C) => i.value = C),
            onFocus: c,
            onBlur: p
          }, null, 544), [
            [Oi, i.value]
          ])
        ]),
        m.editable ? (H(), X(_, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: d.value,
          "onUpdate:modelValue": g[27] || (g[27] = (C) => d.value = C),
          referrer: f.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: ae(() => [
            fe("div", Wr, [
              (H(!0), oe(He, null, Qe(m.options, (C) => (H(), X(h, {
                icon: C.icon,
                text: C.label,
                onClick: (y) => r(C)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            fe("div", $r, [
              fe("div", Zr, [
                K(h, {
                  onClick: g[1] || (g[1] = (C) => u(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                K(h, {
                  onClick: g[2] || (g[2] = (C) => u(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                K(h, {
                  onClick: g[3] || (g[3] = (C) => u(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                K(h, {
                  onClick: g[4] || (g[4] = (C) => u(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                K(h, {
                  onClick: g[5] || (g[5] = (C) => u(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                K(h, {
                  onClick: g[6] || (g[6] = (C) => u(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                K(h, {
                  onClick: g[7] || (g[7] = (C) => u(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                K(h, {
                  onClick: g[8] || (g[8] = (C) => u(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                K(h, {
                  onClick: g[9] || (g[9] = (C) => u(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                K(h, {
                  onClick: g[10] || (g[10] = (C) => R()),
                  text: "."
                }),
                K(h, {
                  onClick: g[11] || (g[11] = (C) => u(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                K(h, {
                  onClick: g[12] || (g[12] = (C) => s()),
                  text: " "
                })
              ]),
              fe("div", qr, [
                K(h, {
                  onClick: g[13] || (g[13] = (C) => L("[")),
                  text: "["
                }),
                K(h, {
                  onClick: g[14] || (g[14] = (C) => L("]")),
                  text: "]"
                }),
                K(h, {
                  onClick: g[15] || (g[15] = (C) => L("(")),
                  text: "("
                }),
                K(h, {
                  onClick: g[16] || (g[16] = (C) => L(")")),
                  text: ")"
                }),
                K(h, {
                  onClick: g[17] || (g[17] = (C) => v("+")),
                  text: "+"
                }),
                K(h, {
                  onClick: g[18] || (g[18] = (C) => v("-")),
                  text: "−"
                }),
                K(h, {
                  onClick: g[19] || (g[19] = (C) => v("*")),
                  text: "×"
                }),
                K(h, {
                  onClick: g[20] || (g[20] = (C) => v("/")),
                  text: "÷"
                })
              ]),
              fe("div", jr, [
                K(h, {
                  onClick: g[21] || (g[21] = (C) => x()),
                  text: "√"
                }),
                K(h, {
                  onClick: g[22] || (g[22] = (C) => k("log")),
                  text: "log"
                }),
                K(h, {
                  onClick: g[23] || (g[23] = (C) => k("ln")),
                  text: "ln"
                }),
                K(h, {
                  onClick: g[24] || (g[24] = (C) => k("sin")),
                  text: "sin"
                }),
                K(h, {
                  onClick: g[25] || (g[25] = (C) => k("cos")),
                  text: "cos"
                }),
                K(h, {
                  onClick: g[26] || (g[26] = (C) => k("tan")),
                  text: "tan"
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : le("", !0)
      ], 512);
    };
  }
}), Kr = /* @__PURE__ */ be({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, l = te(() => {
      let d = Ml(t.validation.code, t.stack), f = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, n = Ml(t.validation.status + "-" + t.validation.code, t.stack);
      return n && (d = n), d ? d.startsWith("__:") ? bn(d.substring(3), f) : To(d, f, ":", "") : t.validation.code;
    }), o = te(() => ie.validationIconSlot !== ""), i = te(() => ie.validationIconSlot), a = te(() => {
      let d = [];
      return d.push("code-" + t.validation.code), d.push("is-" + t.validation.status), d.join(" ");
    });
    return (d, f) => (H(), oe("div", {
      class: Te(["lkt-field-validation-message", a.value])
    }, [
      o.value ? (H(), X(At(i.value), { key: 0 })) : le("", !0),
      Ut(" " + Tt(l.value), 1)
    ], 2));
  }
}), Yr = {
  key: 0,
  class: "lkt-field-validation-info"
}, Xr = /* @__PURE__ */ be({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, l = Q(t.items), o = Q(!1);
    return ue(() => t.items, (i) => {
      o.value = !0, zt(() => o.value = !1);
    }, { deep: !0 }), (i, a) => o.value ? le("", !0) : (H(), oe("div", Yr, [
      (H(!0), oe(He, null, Qe(l.value, (d) => (H(), X(Kr, {
        validation: d,
        stack: i.stack,
        key: d.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), Jr = ["id"], Qr = /* @__PURE__ */ be({
  __name: "SearchInput",
  props: {
    modelValue: { default: "" },
    name: {},
    id: {},
    optionsResource: {},
    editable: { type: Boolean },
    focusing: { type: Boolean },
    hadFirstFocus: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    tabindex: {},
    container: {}
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const l = t, o = e, i = Q(o.modelValue), a = Q(o.focusing);
    let d, f;
    const n = Q({}), b = () => {
      clearTimeout(f), f = setTimeout(() => {
        n.value = {
          query: i.value
        };
      }, 300);
    }, u = () => {
      a.value = !0;
    }, v = () => {
      d = setTimeout(() => {
        a.value = !1;
      }, 100);
    };
    ue(a, (x) => {
      l(x ? "focus" : "blur");
    });
    const k = () => {
      clearTimeout(d), setTimeout(() => {
        u();
      }, 100);
    };
    return (x, L) => {
      const R = de("lkt-table"), s = de("lkt-tooltip");
      return H(), oe(He, null, [
        je(fe("input", {
          id: x.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": L[0] || (L[0] = (r) => i.value = r),
          onFocus: u,
          onBlur: v,
          onKeyup: b
        }, null, 40, Jr), [
          [Oi, i.value]
        ]),
        x.editable && x.hadFirstFocus ? (H(), X(s, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: a.value,
          "onUpdate:modelValue": L[1] || (L[1] = (r) => a.value = r),
          referrer: x.container,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: ae(() => [
            K(R, re({
              type: B(Mi).Ul,
              itemsContainerClass: "lkt-field--dropdown-options",
              paginator: {
                resource: x.optionsResource,
                resourceData: n.value
              }
            }, {
              onPage: k,
              onClick: k
            }), {
              item: ae(({ item: r, index: c, isLoading: p, canCreate: m, canUpdate: g, canDrop: h, canRead: _, doDrop: C }) => [
                K(Bt, {
                  option: r,
                  onClick: k
                }, null, 8, ["option"])
              ]),
              _: 1
            }, 16)
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : le("", !0)
      ], 64);
    };
  }
}), eu = {
  key: 0,
  class: "lkt-field-main"
}, tu = {
  key: 3,
  class: "lkt-field--read-value"
}, iu = ["innerHTML", "title"], lu = ["title"], nu = { key: 0 }, ou = ["title"], su = ["innerHTML"], au = ["innerHTML", "title"], ru = ["innerHTML", "title"], uu = /* @__PURE__ */ be({
  __name: "LktFieldValue",
  props: {
    type: { default: W.Text },
    value: {},
    label: {},
    title: { default: "" },
    fileName: {},
    valueSlot: { default: "" },
    emptyValueSlot: { default: "" },
    slotData: { default: () => ({}) },
    download: { type: [String, Function], default: "" },
    multiple: { type: Boolean, default: !1 },
    multipleDisplay: { default: si.List },
    modal: { default: "" },
    modalKey: { default: "" },
    modalData: { default: () => ({}) },
    optionSlot: { default: "" },
    optionsDownload: { type: [String, Function], default: "" },
    optionsModal: { type: [String, Function], default: "" },
    optionsModalData: { type: [Object, Function], default: () => ({}) },
    optionsIcon: { type: [String, Function], default: "" },
    optionsText: {},
    optionsClass: {},
    optionsLabelFormatter: {},
    optionsResource: { default: "" },
    optionsResourceData: { default: () => ({}) },
    readModeConfig: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    var b;
    const l = t, o = Qi(), i = e, a = () => l("click"), d = te(() => {
      switch (i.type) {
        case W.Select:
          if (i.multiple && Array.isArray(i.value) && i.value.length > 0 || i.multiple && i.multipleDisplay === si.Count || !i.multiple && i.value) return "";
          break;
        case W.Date:
          if (i.value !== "") return "";
          break;
        default:
          if (i.value !== "") return "";
      }
      return ie.customValueSlots[i.emptyValueSlot] ?? ie.defaultEmptyValueSlot;
    }), f = te(() => ie.customValueSlots[i.valueSlot] ?? "");
    let n = i.value;
    return i.type === W.Select && i.multiple && !Array.isArray(n) && (n = []), (i.type === W.Textarea || i.type === W.Text) && (typeof ((b = i.readModeConfig) == null ? void 0 : b.textMaxLength) < "u" && n.length > i.readModeConfig.textMaxLength ? n = n.substring(0, i.readModeConfig.textMaxLength) + "..." : typeof ie.readTextMaxLength < "u" && n.length > ie.readTextMaxLength && (n = n.substring(0, ie.readTextMaxLength) + "...")), (u, v) => {
      const k = de("lkt-image"), x = de("lkt-button"), L = de("lkt-anchor"), R = de("lkt-tag");
      return H(), oe("div", {
        class: "lkt-field--read",
        onClick: a
      }, [
        B(o).value ? rt(u.$slots, "value", {
          key: 0,
          value: B(n),
          title: u.title,
          data: u.slotData
        }) : d.value ? (H(), X(At(d.value), {
          key: 1,
          data: u.slotData
        }, null, 8, ["data"])) : f.value ? (H(), X(At(f.value), {
          key: 2,
          value: B(n),
          title: u.title,
          data: u.slotData
        }, null, 8, ["value", "title", "data"])) : (H(), oe(He, { key: 3 }, [
          u.type === B(W).File || u.type === B(W).Image ? (H(), oe("div", eu, [
            K(x, {
              class: "lkt-field--toggle-button",
              text: u.type === B(W).File ? u.fileName : "",
              disabled: ""
            }, {
              default: ae(() => [
                u.type === B(W).Image ? (H(), X(k, {
                  key: 0,
                  src: B(n),
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : le("", !0),
                u.type === B(W).Image ? (H(), X(k, {
                  key: 1,
                  src: B(n),
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : le("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : u.type === B(W).Email ? (H(), X(L, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: u.title,
            to: B(n)
          }, {
            default: ae(() => [
              Ut(Tt(B(n)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : u.type === B(W).Tel ? (H(), X(L, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: u.title,
            to: B(n)
          }, {
            default: ae(() => [
              Ut(Tt(B(n)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : B(Et).includes(u.type) ? (H(), oe("div", tu, [
            K(R, {
              icon: B(n) ? "lkt-icn-check" : "lkt-icn-cancel",
              "featured-text": u.label,
              title: u.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : u.type === B(W).Date ? (H(), oe("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: B(n),
            title: u.title
          }, null, 8, iu)) : u.type === B(W).Select ? (H(), oe("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: u.title
          }, [
            u.multiple ? (H(), oe(He, { key: 0 }, [
              u.multipleDisplay === B(si).Count ? (H(), oe("div", nu, Tt(B(n).length), 1)) : B(n).length > 0 ? (H(), oe("ul", {
                key: 1,
                class: Te(["lkt-field-select-read", `multiple-display-${u.multipleDisplay}`])
              }, [
                (H(!0), oe(He, null, Qe(B(n), (s, r) => {
                  var c;
                  return H(), oe("li", {
                    title: (c = B(n)[r]) == null ? void 0 : c.label
                  }, [
                    K(Bt, {
                      option: B(n)[r],
                      "option-slot": u.optionSlot,
                      icon: u.optionsIcon,
                      text: u.optionsText,
                      "custom-class": u.optionsClass,
                      modal: u.optionsModal,
                      "modal-data": u.optionsModalData,
                      download: u.optionsDownload,
                      "label-formatter": u.optionsLabelFormatter
                    }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter"])
                  ], 8, ou);
                }), 256))
              ], 2)) : le("", !0)
            ], 64)) : B(n).length > 0 ? (H(), X(Bt, {
              key: 1,
              option: B(n)[0],
              "option-slot": u.optionSlot,
              icon: u.optionsIcon,
              text: u.optionsText,
              "custom-class": u.optionsClass,
              modal: u.optionsModal,
              "modal-data": u.optionsModalData,
              download: u.optionsDownload,
              "label-formatter": u.optionsLabelFormatter
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter"])) : le("", !0)
          ], 8, lu)) : u.modal ? (H(), X(x, {
            key: 6,
            class: "lkt-field--read-value",
            title: u.title,
            modal: u.modal,
            "modal-key": u.modalKey,
            "modal-data": u.modalData
          }, {
            default: ae(() => [
              fe("div", { innerHTML: B(n) }, null, 8, su)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : u.download ? (H(), X(Bt, {
            key: 7,
            class: "lkt-field--read-value",
            option: { value: "", label: B(n) },
            download: u.download,
            text: u.optionsText,
            "custom-class": u.optionsClass
          }, null, 8, ["option", "download", "text", "custom-class"])) : u.type === B(W).Number ? (H(), oe("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: u.title,
            title: u.title
          }, null, 8, au)) : (H(), oe("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: B(n),
            title: u.title
          }, null, 8, ru))
        ], 64))
      ]);
    };
  }
}), du = ["name", "id", "disabled", "readonly", "placeholder", "accept"], cu = {
  key: 2,
  class: "lkt-button lkt-field--toggle-button"
}, fu = { class: "lkt-grid-1" }, pu = /* @__PURE__ */ be({
  __name: "FileInput",
  props: {
    modelValue: { default: "" },
    name: {},
    id: {},
    accept: {},
    placeholder: { default: "" },
    fileName: { default: "" },
    resource: { default: "" },
    resourceData: { default: () => [] },
    uploading: { type: Boolean, default: !1 },
    focusing: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    tabindex: {},
    isImage: { type: Boolean, default: !1 },
    fileBrowserConfig: { default: void 0 }
  },
  emits: [
    "update:modelValue",
    "update:fileName",
    "change",
    "uploading",
    "upload-success",
    "upload-error",
    "picked-files"
  ],
  setup(e, { expose: t, emit: l }) {
    const o = l, i = e, a = Q(null), d = Q(null), f = Q(i.modelValue), n = Q(i.fileName), b = Q(i.uploading), u = (x) => {
      let L = x.target;
      if (L.files && L.files[0]) {
        n.value = L.files[0].name;
        const R = new FileReader();
        R.onload = (s) => {
          if (f.value = s.target.result, i.resource) {
            b.value = !0, o("uploading");
            let r = JSON.parse(JSON.stringify(i.resourceData));
            r.files = L.files[0], Vi(i.resource, r).then((c) => {
              if (b.value = !1, !c.success) {
                o("upload-error", c);
                return;
              }
              f.value = c.data, o("upload-success", c);
            }).catch((c) => {
              b.value = !1, o("upload-error", c);
            });
          }
        }, R.readAsDataURL(L.files[0]);
      }
      o("change", x);
    };
    ue(f, (x) => o("update:modelValue", x)), ue(n, (x) => o("update:fileName", x)), t({
      click: () => {
        var x;
        (x = d.value) == null || x.click();
      }
    });
    const v = Q(typeof i.fileBrowserConfig == "object" && Object.keys(i.fileBrowserConfig).length > 0), k = (x) => {
      f.value = x[0].src, console.log("emit picked files 1: ", x), o("picked-files", x);
    };
    return (x, L) => {
      const R = de("lkt-image"), s = de("lkt-button");
      return H(), oe(He, null, [
        fe("input", {
          ref_key: "inputElement",
          ref: a,
          type: "file",
          name: x.name,
          id: x.id,
          disabled: x.disabled,
          readonly: x.readonly,
          placeholder: x.placeholder,
          accept: x.accept,
          onChange: u
        }, null, 40, du),
        v.value ? x.isImage ? x.isImage ? (H(), oe("div", cu, [
          x.isImage ? (H(), X(R, {
            key: 0,
            src: f.value,
            class: "lkt-field--image-cover"
          }, null, 8, ["src"])) : le("", !0),
          x.isImage ? (H(), X(R, {
            key: 1,
            src: f.value,
            class: "lkt-field--image-main"
          }, {
            overlay: ae(() => [
              fe("div", null, [
                fe("div", fu, [
                  K(s, {
                    ref_key: "buttonRef",
                    ref: d,
                    "click-ref": a.value,
                    text: "Upload",
                    icon: "lkt-icn-upload",
                    disabled: x.disabled
                  }, null, 8, ["click-ref", "disabled"]),
                  K(s, re({ ref: "fileBrowserButtonRef" }, {
                    text: "Explore files",
                    icon: "lkt-icn-search",
                    disabled: x.disabled,
                    modal: "lkt-file-browser",
                    modalData: {
                      fileBrowserConfig: x.fileBrowserConfig,
                      onConfirmSelection: k
                    }
                  }), null, 16)
                ])
              ])
            ]),
            _: 1
          }, 8, ["src"])) : le("", !0)
        ])) : le("", !0) : (H(), X(s, {
          key: 1,
          ref_key: "buttonRef",
          ref: d,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: n.value,
          disabled: x.disabled
        }, null, 8, ["click-ref", "text", "disabled"])) : (H(), X(s, {
          key: 0,
          ref_key: "buttonRef",
          ref: d,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: x.isImage ? "" : n.value,
          disabled: x.disabled
        }, {
          default: ae(() => [
            x.isImage ? (H(), X(R, {
              key: 0,
              src: f.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : le("", !0),
            x.isImage ? (H(), X(R, {
              key: 1,
              src: f.value,
              class: "lkt-field--image-main"
            }, null, 8, ["src"])) : le("", !0)
          ]),
          _: 1
        }, 8, ["click-ref", "text", "disabled"]))
      ], 64);
    };
  }
}), hu = { class: "lkt-calendar" }, mu = { class: "calendar" }, gu = { class: "lkt-calendar--header-grid" }, vu = ["innerHTML"], bu = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, yu = { class: "lkt-calendar--day lkt-calendar--filling-day" }, _u = /* @__PURE__ */ be({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = Q(o.modelValue);
    ue(() => o.modelValue, (p) => i.value = p, { deep: !0 }), ue(i, (p) => l("update:modelValue", p));
    const a = Q(/* @__PURE__ */ new Date()), d = Q(/* @__PURE__ */ new Date());
    tl(i.value) && typeof i.value < "u" && (d.value = new Date(i.value.getFullYear(), i.value.getMonth(), i.value.getDate()));
    const f = Q(d.value.getFullYear()), n = Q(d.value.getMonth()), b = Q(!1), u = Q(Gt("Y-m", d.value)), v = te(() => new Date(f.value, n.value + 1, 0).getDate()), k = te(() => new Date(f.value, n.value, 1).getDay()), x = () => {
      n.value > 11 && (n.value = 0, f.value += 1), n.value += 1, d.value.setFullYear(f.value, n.value), d.value = new Date(d.value), u.value = Gt("Y-m", d.value);
    }, L = () => {
      n.value < 0 && (n.value = 11, f.value -= 1), n.value -= 1, d.value.setFullYear(f.value, n.value), d.value = new Date(d.value), u.value = Gt("Y-m", d.value);
    }, R = (p) => typeof i.value > "u" || i.value.getFullYear() !== f.value || i.value.getMonth() !== n.value ? !1 : i.value.getDate() === p, s = (p) => typeof i.value > "u" || a.value.getFullYear() !== f.value || a.value.getMonth() !== n.value ? !1 : a.value.getDate() === p, r = (p) => ({
      "is-picked": R(p),
      "is-today": s(p)
    }), c = (p) => {
      var m;
      (m = i.value) == null || m.setFullYear(f.value, n.value, p), i.value = new Date(i.value);
    };
    return (p, m) => {
      const g = de("lkt-button");
      return H(), oe("div", hu, [
        fe("div", mu, [
          fe("header", gu, [
            K(g, {
              class: "lkt-calendar--day",
              onClick: L
            }, {
              default: ae(() => m[0] || (m[0] = [
                Ut("◀")
              ])),
              _: 1
            }),
            fe("div", {
              class: "lkt-calendar--header-text",
              innerHTML: u.value
            }, null, 8, vu),
            K(g, {
              class: "lkt-calendar--day",
              onClick: x
            }, {
              default: ae(() => m[1] || (m[1] = [
                Ut("▶")
              ])),
              _: 1
            })
          ]),
          b.value ? le("", !0) : (H(), oe("div", bu, [
            m[2] || (m[2] = So('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (H(!0), oe(He, null, Qe(k.value, (h) => (H(), oe("div", yu))), 256)),
            (H(!0), oe(He, null, Qe(v.value, (h) => (H(), X(g, {
              class: Te(["lkt-calendar--day", r(h)]),
              text: h.toString(),
              onClick: () => c(h)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        m[3] || (m[3] = fe("div", { class: "display-selected" }, [
          fe("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), Cu = /* @__PURE__ */ be({
  __name: "DateInput",
  props: {
    modelValue: { default: "" },
    name: {},
    id: {},
    tabindex: {},
    lang: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = Q(void 0), a = Q(""), d = Q(o.modelValue), f = te(() => ie.dateReadFormat ? ie.dateReadFormat : ie.langDateReadFormat[o.lang] ? ie.langDateReadFormat[o.lang] : ie.defaultDateReadFormat ? ie.defaultDateReadFormat : "Y-m-d"), n = (u) => {
      let v = new Date(u);
      tl(v) && (i.value = v);
    }, b = () => {
      a.value = zn(i.value, f.value);
    };
    return ue(() => o.modelValue, (u) => {
      d.value = u, n(u);
    }), ue(d, (u) => l("update:modelValue", u)), ue(i, (u) => {
      typeof u > "u" ? d.value = "" : d.value = Gt("Y-m-d", u), b();
    }, { deep: !0 }), Fi(() => {
      n(o.modelValue), b();
    }), (u, v) => {
      const k = de("lkt-button");
      return H(), X(k, {
        type: B(Rt).Tooltip,
        class: "lkt-field--toggle-button",
        text: a.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: B(kn).Bottom,
          locationX: B(wn).LeftCorner
        }
      }, {
        tooltip: ae(() => [
          K(_u, {
            modelValue: i.value,
            "onUpdate:modelValue": v[0] || (v[0] = (x) => i.value = x)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["type", "text", "tooltip"]);
    };
  }
}), gn = (e, t) => typeof e == "object" && !Array.isArray(e) ? e[t] : e, qi = (e, t, l) => {
  if (t) {
    let o = '<i class="' + t + '"></i>';
    l ? e += o : e = o + e;
  }
  return e;
}, wu = { key: 1 }, io = /* @__PURE__ */ be({
  __name: "CardInput",
  props: {
    modelValue: { default: () => ({}) },
    name: {},
    id: {},
    optionsResource: {},
    editable: { type: Boolean },
    focusing: { type: Boolean },
    hadFirstFocus: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    tabindex: {},
    modal: { type: [String, Function], default: "" },
    modalKey: { type: [String, Number, Function], default: "_" },
    modalData: { default: () => ({}) },
    itemType: { type: [String, Number, Function], default: "" }
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const o = Q(e.modelValue), i = (a, d) => {
    };
    return (a, d) => {
      const f = de("lkt-button");
      return H(), X(f, {
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        onClick: i
      }, {
        default: ae(() => [
          o.value ? rt(a.$slots, "item", {
            key: 0,
            item: o.value
          }) : (H(), oe("p", wu, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), ku = /* @__PURE__ */ be({
  __name: "MultipleCardInput",
  props: {
    modelValue: { default: () => [] },
    editable: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean], default: !1 },
    focusing: { type: Boolean },
    hadFirstFocus: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    tabindex: {},
    modal: {},
    modalKey: {},
    modalData: {},
    itemType: { type: [String, Number, Function], default: "" }
  },
  setup(e) {
    const t = Qi(), l = e, o = Q(l.modelValue), i = te(() => typeof l.max == "boolean" || o.value.length < l.max ? ["modal-create"] : []);
    return (a, d) => {
      const f = de("lkt-table");
      return H(), X(f, {
        type: "item",
        modelValue: o.value,
        "onUpdate:modelValue": d[0] || (d[0] = (n) => o.value = n),
        perms: i.value,
        "edit-mode": a.editable,
        "new-value-generator": () => {
        },
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        "required-items-for-top-create": 999999
      }, {
        item: ae(({ item: n, index: b, isLoading: u, canCreate: v, canRead: k, canUpdate: x, canDrop: L, doDrop: R }) => [
          K(io, {
            modelValue: o.value[b],
            "onUpdate:modelValue": (s) => o.value[b] = s,
            "item-type": a.itemType
          }, ut({ _: 2 }, [
            B(t).item ? {
              name: "item",
              fn: ae(({ item: s }) => [
                rt(a.$slots, "item", {
                  item: s,
                  focusing: a.focusing,
                  hadFirstFocus: a.hadFirstFocus,
                  disabled: a.disabled,
                  readonly: a.readonly,
                  modal: a.modal,
                  modalKey: a.modalKey,
                  modalData: a.modalData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "item-type"])
        ]),
        _: 3
      }, 8, ["modelValue", "perms", "edit-mode", "modal", "modal-key", "modal-data"]);
    };
  }
}), Ze = /* @__PURE__ */ be({
  __name: "TextElementEditor",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "input",
    "keydown"
  ],
  setup(e, { emit: t }) {
    const l = t, o = (i) => {
      l("input", i);
    };
    return (i, a) => a[0] || (El(-1, !0), (a[0] = fe("div", {
      contenteditable: i.disabled ? "false" : "true",
      class: "lkt-element-editable-text",
      onInput: (d) => o(d),
      innerHTML: i.modelValue
    }, null, 40, ["contenteditable", "onInput", "innerHTML"])).cacheIndex = 0, El(1), a[0]);
  }
}), xu = { class: "lkt-element-content" }, Su = {
  key: 0,
  class: "lkt-element-actions"
}, Ji = /* @__PURE__ */ be({
  __name: "ElementComponent",
  props: {
    modelValue: {},
    parent: {},
    parentChildren: {},
    index: { default: -1 },
    lang: {},
    isPreview: { type: Boolean, default: !1 },
    canRenderActions: { type: Boolean, default: !0 },
    fileBrowserConfig: {},
    parentLayoutComponent: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = t, o = e, i = Q(o.modelValue);
    ue(() => o.modelValue, (b, u) => {
      i.value = b;
    }), ue(i, (b, u) => {
      l("update:modelValue", b);
    });
    const a = Q(!1), d = (b, u = "text") => {
      const v = b.target.innerHTML.trim();
      v !== i.value.props[u][n] && (i.value.props[u][n] = v);
    }, f = (b) => {
      if (!b.layout || o.isPreview) return "";
      let u = [];
      b.layout.type === Ge.FlexRow && (!b.layout.amountOfItems || b.layout.amountOfItems.length === 0) ? u.push("lkt-flex-row") : b.layout.type === Ge.FlexRows && (!b.layout.amountOfItems || b.layout.amountOfItems.length === 0) ? u.push("lkt-flex-rows") : b.layout.type === Ge.FlexColumn && u.push("lkt-flex-column"), b.layout.amountOfItems && b.layout.amountOfItems.length > 0 && (b.layout.type === Ge.FlexRow ? u.push(b.layout.amountOfItems.map((k) => `lkt-flex-row-${k}`).join(" ")) : b.layout.type === Ge.FlexRows ? u.push(b.layout.amountOfItems.map((k) => `lkt-flex-rows-${k}`).join(" ")) : u.push(b.layout.amountOfItems.map((k) => `lkt-grid-${k}`).join(" "))), b.layout.alignItems && b.layout.alignItems.length > 0 && u.push(b.layout.alignItems.join(" ")), b.layout.justifyContent && b.layout.justifyContent.length > 0 && u.push(b.layout.justifyContent.join(" ")), u.length > 0 && u.push("layout-mode");
      let v = u.join(" ");
      return b.layout.type === Ge.FlexRows && (v = v.replace("flex-row-", "flex-rows-")), v;
    }, n = o.lang ?? yn();
    return (b, u) => {
      var p, m, g, h, _, C;
      const v = de("lkt-box"), k = de("lkt-accordion"), x = de("lkt-image"), L = de("lkt-icon"), R = de("lkt-header"), s = de("lkt-button"), r = de("lkt-anchor"), c = de("lkt-banner");
      return H(), oe("div", {
        class: Te(["lkt-element", `is-${i.value.type} is-${i.value.id}`]),
        key: i.value.keyMoment
      }, [
        fe("div", xu, [
          i.value.type === B(se).LktText ? (H(), X(Ze, {
            key: 0,
            modelValue: i.value.props.text[B(n)],
            "onUpdate:modelValue": u[0] || (u[0] = (y) => i.value.props.text[B(n)] = y),
            onInput: u[1] || (u[1] = (y) => d(y))
          }, null, 8, ["modelValue"])) : i.value.type === B(se).LktLayoutBox ? (H(), X(v, {
            key: 1,
            icon: i.value.config.hasHeader && i.value.config.hasIcon ? i.value.props.icon : "",
            class: Te(i.value.props.class)
          }, ut({
            default: ae(() => [
              K(Ii, {
                modelValue: i.value.children,
                "onUpdate:modelValue": u[4] || (u[4] = (y) => i.value.children = y),
                "layout-selector": f(i.value),
                "is-child": "",
                lang: B(n),
                "is-preview": b.isPreview,
                parent: i.value
              }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent"])
            ]),
            _: 2
          }, [
            (p = i.value.config) != null && p.hasHeader ? {
              name: "header",
              fn: ae(() => [
                K(Ze, {
                  modelValue: i.value.props.header[B(n)],
                  "onUpdate:modelValue": u[2] || (u[2] = (y) => i.value.props.header[B(n)] = y),
                  onInput: u[3] || (u[3] = (y) => d(y, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : i.value.type === B(se).LktTextBox ? (H(), X(v, {
            key: 2,
            icon: i.value.config.hasHeader && i.value.config.hasIcon ? i.value.props.icon : "",
            class: Te(i.value.props.class)
          }, ut({
            default: ae(() => [
              K(Ze, {
                modelValue: i.value.props.text[B(n)],
                "onUpdate:modelValue": u[7] || (u[7] = (y) => i.value.props.text[B(n)] = y),
                onInput: u[8] || (u[8] = (y) => d(y, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 2
          }, [
            (m = i.value.config) != null && m.hasHeader ? {
              name: "header",
              fn: ae(() => [
                K(Ze, {
                  modelValue: i.value.props.header[B(n)],
                  "onUpdate:modelValue": u[5] || (u[5] = (y) => i.value.props.header[B(n)] = y),
                  onInput: u[6] || (u[6] = (y) => d(y, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : i.value.type === B(se).LktLayoutAccordion ? (H(), X(k, {
            key: 3,
            icon: i.value.config.hasIcon ? i.value.props.icon : "",
            class: Te(i.value.props.class)
          }, ut({
            default: ae(() => [
              K(Ii, {
                modelValue: i.value.children,
                "onUpdate:modelValue": u[11] || (u[11] = (y) => i.value.children = y),
                "layout-selector": f(i.value),
                "is-child": "",
                lang: B(n),
                "is-preview": b.isPreview,
                parent: i.value
              }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent"])
            ]),
            _: 2
          }, [
            (g = i.value.config) != null && g.hasHeader ? {
              name: "header",
              fn: ae(() => [
                K(Ze, {
                  modelValue: i.value.props.header[B(n)],
                  "onUpdate:modelValue": u[9] || (u[9] = (y) => i.value.props.header[B(n)] = y),
                  onInput: u[10] || (u[10] = (y) => d(y, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : i.value.type === B(se).LktTextAccordion ? (H(), X(k, {
            key: 4,
            icon: i.value.config.hasIcon ? i.value.props.icon : "",
            class: Te(i.value.props.class)
          }, ut({
            default: ae(() => [
              K(Ze, {
                modelValue: i.value.props.text[B(n)],
                "onUpdate:modelValue": u[14] || (u[14] = (y) => i.value.props.text[B(n)] = y),
                onInput: u[15] || (u[15] = (y) => d(y, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 2
          }, [
            (h = i.value.config) != null && h.hasHeader ? {
              name: "header",
              fn: ae(() => [
                K(Ze, {
                  modelValue: i.value.props.header[B(n)],
                  "onUpdate:modelValue": u[12] || (u[12] = (y) => i.value.props.header[B(n)] = y),
                  onInput: u[13] || (u[13] = (y) => d(y, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : i.value.type === B(se).LktImage ? (H(), X(x, {
            key: 5,
            class: Te(i.value.props.class),
            src: i.value.props.src,
            alt: i.value.props.alt[B(n)],
            title: i.value.props.title[B(n)]
          }, {
            text: ae(() => [
              K(Ze, {
                modelValue: i.value.props.text[B(n)],
                "onUpdate:modelValue": u[16] || (u[16] = (y) => i.value.props.text[B(n)] = y),
                onInput: u[17] || (u[17] = (y) => d(y, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["class", "src", "alt", "title"])) : i.value.type === B(se).LktIcon ? (H(), X(L, {
            key: 6,
            icon: i.value.config.hasIcon ? i.value.props.icon : "",
            class: Te(i.value.props.class)
          }, {
            text: ae(() => [
              K(Ze, {
                modelValue: i.value.props.text[B(n)],
                "onUpdate:modelValue": u[18] || (u[18] = (y) => i.value.props.text[B(n)] = y),
                onInput: u[19] || (u[19] = (y) => d(y, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : i.value.type === B(se).LktHeader ? (H(), X(R, {
            key: 7,
            icon: i.value.config.hasIcon ? i.value.props.icon : "",
            class: Te(i.value.props.class)
          }, {
            text: ae(() => [
              K(Ze, {
                modelValue: i.value.props.text[B(n)],
                "onUpdate:modelValue": u[20] || (u[20] = (y) => i.value.props.text[B(n)] = y),
                onInput: u[21] || (u[21] = (y) => d(y, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : i.value.type === B(se).LktButton ? (H(), X(s, {
            key: 8,
            icon: i.value.config.hasIcon ? i.value.props.icon : "",
            class: Te(i.value.props.class)
          }, {
            text: ae(() => [
              K(Ze, {
                modelValue: i.value.props.text[B(n)],
                "onUpdate:modelValue": u[22] || (u[22] = (y) => i.value.props.text[B(n)] = y),
                onInput: u[23] || (u[23] = (y) => d(y, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : i.value.type === B(se).LktAnchor ? (H(), X(r, {
            key: 9,
            icon: i.value.config.hasIcon ? i.value.props.icon : "",
            class: Te(i.value.props.class)
          }, {
            text: ae(() => [
              K(Ze, {
                modelValue: i.value.props.text[B(n)],
                "onUpdate:modelValue": u[24] || (u[24] = (y) => i.value.props.text[B(n)] = y),
                onInput: u[25] || (u[25] = (y) => d(y, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : i.value.type === B(se).LktTextBanner ? (H(), X(c, {
            key: 10,
            icon: i.value.config.hasIcon ? i.value.props.icon : "",
            class: Te(i.value.props.class),
            opacity: i.value.props.opacity,
            art: i.value.props.art,
            media: i.value.props.media,
            type: i.value.props.type
          }, ut({
            default: ae(() => [
              K(Ze, {
                modelValue: i.value.props.text[B(n)],
                "onUpdate:modelValue": u[30] || (u[30] = (y) => i.value.props.text[B(n)] = y),
                onInput: u[31] || (u[31] = (y) => d(y, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 2
          }, [
            (_ = i.value.config) != null && _.hasHeader ? {
              name: "header",
              fn: ae(() => [
                K(Ze, {
                  modelValue: i.value.props.header[B(n)],
                  "onUpdate:modelValue": u[26] || (u[26] = (y) => i.value.props.header[B(n)] = y),
                  onInput: u[27] || (u[27] = (y) => d(y, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0,
            (C = i.value.config) != null && C.hasSubHeader ? {
              name: "subHeader",
              fn: ae(() => [
                K(Ze, {
                  modelValue: i.value.props.subHeader[B(n)],
                  "onUpdate:modelValue": u[28] || (u[28] = (y) => i.value.props.subHeader[B(n)] = y),
                  onInput: u[29] || (u[29] = (y) => d(y, "subHeader"))
                }, null, 8, ["modelValue"])
              ]),
              key: "1"
            } : void 0
          ]), 1032, ["icon", "class", "opacity", "art", "media", "type"])) : i.value.type === B(se).LktLayout ? (H(), X(Ii, {
            key: 11,
            modelValue: i.value.children,
            "onUpdate:modelValue": u[32] || (u[32] = (y) => i.value.children = y),
            "layout-selector": f(i.value),
            "is-child": "",
            lang: B(n),
            "is-preview": b.isPreview,
            parent: i.value
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent"])) : (H(), X(At(i.value.component), Ce(re({ key: 12 }, i.value.props)), null, 16))
        ]),
        !a.value && b.canRenderActions ? (H(), oe("div", Su, [
          K(s, Ce(ze({
            type: B(Rt).Button,
            text: i.value.type,
            icon: "lkt-icn-settings-cogs",
            modal: "lkt-web-element-config",
            modalKey: `${b.index}--${i.value.type}--${i.value.id}`,
            modalData: {
              element: i.value,
              parent: b.parent,
              parentChildren: b.parentChildren,
              indexInParentChildren: b.index,
              fileBrowserConfig: b.fileBrowserConfig,
              parentLayoutComponent: b.parentLayoutComponent
            }
          })), null, 16)
        ])) : le("", !0)
      ], 2);
    };
  }
}), Ii = /* @__PURE__ */ be({
  __name: "ComponentManager",
  props: {
    modelValue: {},
    parent: {},
    layoutSelector: { default: "" },
    lang: {},
    isChild: { type: Boolean, default: !0 },
    isPreview: { type: Boolean, default: !1 },
    fileBrowserConfig: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e;
    console.log("lo que llega al componentmanager: ", o.modelValue);
    const i = Q(o.modelValue), a = Q(!1), d = Q(null);
    return ue(i, (f) => {
      console.log("updated items: ", i), l("update:modelValue", f);
    }, { deep: !0 }), (f, n) => {
      const b = de("lkt-table");
      return H(), oe("div", null, [
        K(b, re({
          ref_key: "tableRef",
          ref: d,
          class: "lkt-elements-table",
          modelValue: i.value,
          "onUpdate:modelValue": n[0] || (n[0] = (u) => i.value = u)
        }, {
          type: f.isPreview ? B(Mi).Table : B(Mi).Item,
          slotItemVar: "element",
          editMode: !0,
          hideTableHeader: !0,
          perms: f.isChild ? [B(pt).Update, B(pt).Sort] : [B(pt).Create, B(pt).Update, B(pt).Sort],
          itemsContainerClass: f.isChild ? f.layoutSelector : "lkt-grid-1",
          itemContainerClass: (u) => {
            if (!u.layout || o.isPreview) return "";
            let v = [];
            return u.layout.columns && u.layout.columns.length > 0 && v.push(u.layout.columns.join(" ")), v.join(" ");
          },
          requiredItemsForBottomCreate: 10,
          drag: {
            enabled: f.isPreview,
            isDisabled: !1,
            canRender: !0,
            isValid: !0
          },
          createButton: f.isChild ? !1 : {
            text: "Add element",
            icon: "lkt-icn-more",
            modal: "lkt-field-add-element-config",
            modalData: {
              items: i.value,
              index: i.value.length,
              fileBrowserConfig: f.fileBrowserConfig,
              onAppend: () => {
                a.value = !0, zt(() => {
                  a.value = !1;
                });
              }
            }
          }
          // columns: [
          //     <Column>{
          //         key: 'keyMoment',
          //         label: '',
          //         isForRowKey: true,
          //     }
          // ]
        }), {
          item: ae(({ _: u, index: v }) => [
            K(Ji, {
              modelValue: i.value[v],
              "onUpdate:modelValue": (k) => i.value[v] = k,
              index: v,
              lang: f.lang,
              "is-preview": f.isPreview,
              "parent-children": i.value,
              parent: f.parent,
              "file-browser-config": f.fileBrowserConfig,
              "parent-layout-component": d.value
            }, null, 8, ["modelValue", "onUpdate:modelValue", "index", "lang", "is-preview", "parent-children", "parent", "file-browser-config", "parent-layout-component"])
          ]),
          _: 1
        }, 16, ["modelValue"])
      ]);
    };
  }
}), Lu = { class: "lkt-elements-toolbar-group" }, Eu = /* @__PURE__ */ be({
  __name: "EditorToolbar",
  props: {
    elements: {},
    toolbarTop: {},
    fileBrowserConfig: {}
  },
  setup(e) {
    const t = e, l = Q(""), o = Q(""), i = Q([]);
    let a = Q(-1);
    const d = () => {
      i.value = i.value.slice(0, a.value + 1), i.value.push([...t.elements]), a.value = i.value.length - 1;
    }, f = (c) => {
      document.execCommand(c, !1), d();
    }, n = (c) => {
      document.execCommand("foreColor", !1, c), d();
    }, b = (c) => {
      document.execCommand("backColor", !1, c), d();
    };
    ue(l, n), ue(o, b);
    const u = [
      { value: "Arial", label: "Arial" },
      { value: "Courier New", label: "Courier New" },
      { value: "Georgia", label: "Georgia" },
      { value: "Times New Roman", label: "Times New Roman" }
    ], v = (c, p) => {
      document.execCommand("fontName", !1, p), d();
    }, k = (c) => {
      document.execCommand("justify" + c, !1), d();
    };
    function x(c) {
      const p = window.getSelection();
      if (!p.rangeCount) return;
      const m = p.getRangeAt(0);
      let g = m.commonAncestorContainer;
      if (g.nodeType === Node.TEXT_NODE && (g = g.parentNode), g.tagName && g.tagName.toLowerCase() === c.toLowerCase()) {
        L(g);
        return;
      }
      const h = m.extractContents(), _ = document.createElement(c);
      let C = !1;
      h.childNodes.forEach((y) => {
        y.nodeType === 1 && getComputedStyle(y).display === "block" && (C = !0);
      }), C ? m.insertNode(h) : (_.appendChild(h), m.insertNode(_)), d();
    }
    function L(c) {
      const p = c.parentNode;
      for (; c.firstChild; )
        p.insertBefore(c.firstChild, c);
      p.removeChild(c);
    }
    const R = () => {
      a.value > 0 && (a.value--, t.elements = [...i.value[a.value]]);
    }, s = () => {
      a.value < i.value.length - 1 && (a.value++, t.elements = [...i.value[a.value]]);
    }, r = () => {
      const c = prompt("Ingrese la URL del enlace:");
      c && (document.execCommand("createLink", !1, c), d());
    };
    return (c, p) => {
      const m = de("lkt-button"), g = de("lkt-field");
      return H(), oe("div", {
        class: "lkt-wysiwyg-toolbar lkt-tooltip",
        style: ji({ top: c.toolbarTop + "px" })
      }, [
        fe("div", Lu, [
          K(m, re({
            icon: "lkt-icn-bold"
          }, {
            onClick: p[0] || (p[0] = (h) => f("bold"))
          }), null, 16),
          K(m, re({
            icon: "lkt-icn-italic"
          }, {
            onClick: p[1] || (p[1] = (h) => f("italic"))
          }), null, 16),
          K(m, re({
            icon: "lkt-icn-underline"
          }, {
            onClick: p[2] || (p[2] = (h) => f("underline"))
          }), null, 16),
          K(m, re({
            icon: "lkt-icn-strike"
          }, {
            onClick: p[3] || (p[3] = (h) => f("strikeThrough"))
          }), null, 16),
          K(m, re({
            icon: "lkt-icn-superscript"
          }, {
            onClick: p[4] || (p[4] = (h) => f("superscript"))
          }), null, 16),
          K(m, re({
            icon: "lkt-icn-subscript"
          }, {
            onClick: p[5] || (p[5] = (h) => f("subscript"))
          }), null, 16),
          K(m, re({
            icon: "lkt-icn-paragraph"
          }, {
            onClick: p[6] || (p[6] = (h) => x("p"))
          }), null, 16),
          K(m, re({
            icon: "lkt-icn-align-left"
          }, {
            onClick: p[7] || (p[7] = (h) => k("left"))
          }), null, 16),
          K(m, re({
            icon: "lkt-icn-align-center"
          }, {
            onClick: p[8] || (p[8] = (h) => k("center"))
          }), null, 16),
          K(m, re({
            icon: "lkt-icn-align-right"
          }, {
            onClick: p[9] || (p[9] = (h) => k("right"))
          }), null, 16),
          K(m, re({
            icon: "lkt-icn-list-bullet"
          }, {
            onClick: p[10] || (p[10] = (h) => f("insertUnorderedList"))
          }), null, 16),
          K(m, re({
            icon: "lkt-icn-list-numbered"
          }, {
            onClick: p[11] || (p[11] = (h) => f("insertOrderedList"))
          }), null, 16),
          K(m, re({
            icon: "lkt-icn-link"
          }, { onClick: r }), null, 16),
          K(g, re({
            modelValue: l.value,
            "onUpdate:modelValue": p[12] || (p[12] = (h) => l.value = h)
          }, {
            type: B(W).Color
          }), null, 16, ["modelValue"]),
          K(g, re({
            modelValue: o.value,
            "onUpdate:modelValue": p[13] || (p[13] = (h) => o.value = h)
          }, {
            type: B(W).Color
          }), null, 16, ["modelValue"]),
          K(m, re({
            icon: "lkt-icn-undo"
          }, { onClick: R }), null, 16),
          K(m, re({
            icon: "lkt-icn-redo"
          }, { onClick: s }), null, 16),
          K(g, re({
            type: B(W).Select,
            options: u
          }, { onChange: v }), null, 16)
        ]),
        le("", !0),
        K(m, Ce(ze({
          text: "Add element",
          icon: "lkt-icn-more",
          modal: "lkt-field-add-element-config",
          modalData: {
            items: c.elements,
            index: c.elements.length,
            fileBrowserConfig: c.fileBrowserConfig
          }
        })), null, 16),
        le("", !0)
      ], 4);
    };
  }
}), Tu = /* @__PURE__ */ be({
  __name: "ElementsInput",
  props: {
    modelValue: { default: () => [] },
    layoutSelector: {},
    fileBrowserConfig: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    var k;
    const l = e, o = Q([]);
    l.modelValue.length > 0 && (o.value = (k = l.modelValue) == null ? void 0 : k.map((x) => new Vo(x)));
    const i = t;
    ue(() => l.modelValue, (x) => {
      o.value = x;
    }, { deep: !0 }), ue(o, (x) => {
      i("update:modelValue", x);
    });
    const a = Q([]);
    let d = Q(-1);
    const f = () => {
      a.value = a.value.slice(0, d.value + 1), a.value.push([...o.value]), d.value = a.value.length - 1;
    }, n = () => {
      f();
    }, b = (x) => {
      o.value.splice(x, 1), f();
    };
    ue(o, (x) => {
      i("update:modelValue", x);
    }, { deep: !0 });
    const u = Q(null), v = Q(0);
    return ue(u, (x) => {
      x ? v.value = u.value.getBoundingClientRect().top : v.value = 0;
    }), (x, L) => (H(), oe("div", {
      ref_key: "containerRef",
      ref: u,
      class: "lkt-wysiwyg-container"
    }, [
      K(Eu, {
        elements: o.value,
        "toolbar-top": v.value,
        "file-browser-config": x.fileBrowserConfig
      }, null, 8, ["elements", "toolbar-top", "file-browser-config"]),
      K(Ii, {
        modelValue: o.value,
        "onUpdate:modelValue": L[0] || (L[0] = (R) => o.value = R),
        "file-browser-config": x.fileBrowserConfig,
        onDeleteElement: b,
        onAddElement: n
      }, null, 8, ["modelValue", "file-browser-config"])
    ], 512));
  }
}), Bu = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, i] of t)
    l[o] = i;
  return l;
}, zu = /* @__PURE__ */ Bu(Tu, [["__scopeId", "data-v-adbfa190"]]), Nu = /* @__PURE__ */ be({
  __name: "FileUploadButton",
  props: {
    config: {},
    fileUploadHttp: {},
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const l = t, o = e, i = te(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), a = () => l("click");
    return (d, f) => {
      const n = de("lkt-button");
      return H(), X(n, re(d.config, {
        type: d.config.type ? d.config.type : B(Rt).FileUpload,
        resource: d.config.resource ?? d.fileUploadHttp.resource,
        "resource-data": d.config.resourceData ?? d.fileUploadHttp.data,
        text: d.insideEllipsis ? d.config.text : "",
        class: [i.value, "lkt-field--btn-file-upload"],
        icon: "lkt-icn-upload",
        onClick: a
      }), null, 16, ["type", "resource", "resource-data", "text", "class"]);
    };
  }
}), Au = ["data-show-ui", "data-labeled"], Ru = ["for", "innerHTML"], Iu = { class: "lkt-field-content" }, Vu = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, Du = {
  key: 1,
  class: "lkt-field--icon"
}, Mu = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Hu = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], Fu = {
  key: 4,
  class: "lkt-field--info-nav"
}, Ou = { key: 0 }, Uu = ["data-index", "onClick"], Be = /* @__PURE__ */ be({
  __name: "LktField",
  props: /* @__PURE__ */ Lo({
    modelValue: { type: [String, Number, Boolean, Object, Array] },
    type: {},
    valid: { type: Boolean },
    placeholder: {},
    searchPlaceholder: {},
    label: {},
    labelIcon: {},
    labelIconAtEnd: { type: Boolean },
    name: {},
    autocomplete: { type: Boolean },
    disabled: { type: [Boolean, Function] },
    readonly: { type: Boolean },
    hidden: { type: Boolean },
    tabindex: {},
    mandatory: { type: Boolean },
    showPassword: { type: Boolean },
    canClear: { type: Boolean },
    canUndo: { type: Boolean },
    canI18n: { type: Boolean },
    canStep: { type: Boolean },
    canTag: { type: Boolean },
    mandatoryMessage: {},
    infoMessage: {},
    errorMessage: {},
    min: {},
    max: {},
    step: {},
    enableAutoNumberFix: { type: Boolean },
    emptyValueSlot: {},
    optionSlot: {},
    valueSlot: {},
    editSlot: {},
    slotData: {},
    featuredButton: {},
    infoButtonEllipsis: { type: Boolean },
    fileName: {},
    options: {},
    multiple: { type: Boolean },
    multipleDisplay: {},
    multipleDisplayEdition: {},
    searchable: { type: Boolean },
    icon: { type: [String, Function] },
    download: { type: [String, Function] },
    modal: { type: [String, Function] },
    modalKey: { type: [String, Number, Function] },
    modalData: { type: [Object, Function] },
    itemType: {},
    optionValueType: {},
    configOn: {},
    configOff: {},
    readMode: { type: Boolean },
    allowReadModeSwitch: { type: Boolean },
    readModeConfig: {},
    prop: {},
    validation: {},
    optionsConfig: {},
    fileUploadHttp: {},
    fileUploadButton: {},
    tooltipConfig: {},
    fileBrowserConfig: {},
    customButtonText: {},
    customButtonClass: {},
    events: {}
  }, Uo(Po)),
  emits: [
    "update:modelValue",
    "update:valid",
    "update:options",
    "keyup",
    "keydown",
    "focus",
    "blur",
    "click",
    "change",
    "click-info",
    "click-error",
    "validation",
    "validating",
    "options-loaded",
    "selected-option",
    "upload-error",
    "upload-success",
    "picked-files"
  ],
  setup(e, { expose: t, emit: l }) {
    const o = l, i = Qi(), a = e, d = Bo(16);
    let f = Lt(a.modal, a.prop), n = Lt(a.modalKey, a.prop), b = Lt(a.icon, a.prop), u = Lt(a.download, a.prop), v = Lt(a.itemType, a.prop);
    !f && typeof v != "function" && v && typeof ie.modalPerItemType[v] < "u" && (f = ie.modalPerItemType[v]);
    const k = Q(null);
    let x = a.featuredButton, L = a.modelValue;
    a.multiple && Do.includes(a.type) ? (!L || !Array.isArray(L)) && (L = []) : Et.includes(a.type) ? typeof L != "boolean" && (L = !1) : a.type === W.Date && !b ? b = ie.defaultDateIcon : a.type === W.Number && a.canStep && x === "" && (x = ie.defaultNumberFeaturedButton);
    const R = Q(L), s = Q(L), r = Q(a.valid), c = Q(!1), p = Q(!1), m = Q(!1), g = Q(!1), h = Q([]), _ = Q(!a.readMode), C = Q(a.fileName), y = Q(a.fileName), S = Q(null), V = Q(null), T = Q(null), z = Q(!1), A = Q(!1), q = Q(!1), Z = Q(""), U = Q(-1), F = Q([]), P = Q(!1), I = Q(!1), O = Q(!1), N = te(() => _n.value), M = te(() => (N.value, ie.dateReadFormat ? ie.dateReadFormat : ie.langDateReadFormat[N.value] ? ie.langDateReadFormat[N.value] : ie.defaultDateReadFormat ? ie.defaultDateReadFormat : "Y-m-d")), w = [W.Card, W.Elements].includes(a.type) ? s : Q(gn(s.value, N.value)), D = Q(w), Y = Q([]), j = Q([]), G = () => {
      const E = (J) => {
        var Ee;
        if (j.value = Zi(Y.value, J, !0, (Ee = a.optionsConfig) == null ? void 0 : Ee.filter), a.multiple) {
          for (let Ve in w.value) {
            let Ae;
            a.optionValueType === "option" ? Ae = ni(Y.value, w.value[Ve].value) : Ae = ni(Y.value, w.value[Ve]), typeof Ae < "u" && (F.value.length === 0 ? F.value.push(Ae) : F.value.splice(Ve, 1, Ae));
          }
          return;
        }
        let ce;
        a.optionValueType === "option" ? ce = ni(Y.value, w.value.map((Ve) => Ve.value)) : ce = ni(Y.value, w.value), typeof ce < "u" && (F.value.length === 0 ? F.value.push(ce) : F.value.splice(0, 1, ce));
      };
      a.type === W.Text ? E(w.value) : a.type === W.Select && E(Z.value);
    }, ee = te(() => a.type === W.Date), $ = te(() => a.type === W.File), ne = te(() => a.type === W.Image), me = te(() => a.type === W.Textarea ? "textarea" : a.type === W.Html ? "div" : "input"), ve = te(() => a.type === W.Date ? s.value !== R.value : w.value !== D.value), pe = te(() => typeof a.disabled == "function" ? a.disabled(a.prop) : a.disabled), ye = te(() => {
      let E = 0;
      return al.value && ++E, rl.value && ++E, ul.value && ++E, dl.value && ++E, fl.value && ++E, pl.value && ++E, cl.value && ++E, Mt.value && ++E, nl.value && ++E, (a.customButtonText || a.customButtonClass) && ++E, E > 0 && a.type === W.Textarea || E > 0 && a.type === W.Html || E > 0 && a.infoButtonEllipsis ? 1 : E;
    }), Re = te(() => Pi.value && x === "i18n" || Yt.value && x === "password" || et.value && x === "subtract"), $e = te(() => ye.value > 0), we = te(() => a.autocomplete === !0 ? "on" : "off"), Ie = te(() => a.type === W.Date ? s.value !== "" : w.value !== ""), Le = te(() => a.type === W.Password && c.value === !0 ? "text" : a.type === W.Email ? "email" : a.type === W.Password ? "password" : a.type === W.Number ? "number" : a.type === W.Tel ? "tel" : a.type === W.Search ? "search" : a.type === W.Color ? "color" : a.type === W.Range ? "range" : "text"), dt = te(() => {
      var J;
      const E = [];
      return E.push(`is-${a.type}`), Et.includes(a.type) && (E.push("is-boolean"), w.value && E.push("is-checked")), ve.value && E.push("is-changed"), pe.value && E.push("is-disabled"), a.multiple && E.push("is-multiple"), Re.value && E.push("with-atn-btn"), $e.value && E.push("with-info-btn"), a.mandatory && _.value && E.push("is-mandatory-field"), _.value && p.value && E.push("has-focus"), z.value && E.push("show-options"), a.searchable && P.value && E.push("is-searching"), a.hidden && E.push("lkt-hidden-field"), a.type !== W.Range && ((J = a.validation) == null ? void 0 : J.type) === Bl.Auto && g.value && m.value && (h.value.length > 0 ? E.push("is-invalid") : E.push("is-valid")), [W.Textarea, W.Html].includes(a.type) && E.push("is-lg"), [W.Image].includes(a.type) && E.push("is-xl"), a.multiple && a.type === W.Select && E.push("is-lg"), a.multiple && (_.value ? E.push(`has-multiple-display-${a.multipleDisplayEdition}`) : E.push(`has-multiple-display-${a.multipleDisplay}`)), ye.value > 0 && E.push("has-icons", `has-icons-${ye.value}`), E.push(_.value ? "is-editable" : "is-read"), a.type !== W.Range && (E.push(r.value ? "is-valid" : "is-error"), E.push(Ie.value ? "is-filled" : "is-empty")), E.join(" ");
    }), Fe = te(() => {
      var E;
      return typeof w.value == "number" ? (N.value, (E = ie.langNumberFormat[N.value]) != null && E.amountOfDecimals ? Tl(
        w.value,
        ie.langNumberFormat[N.value].amountOfDecimals,
        ie.langNumberFormat[N.value].decimalSeparator,
        ie.langNumberFormat[N.value].thousandsSeparator,
        ie.langNumberFormat[N.value].removeDecimalsIfZero
      ) : ie.amountOfDecimals ? Tl(
        w.value,
        ie.amountOfDecimals,
        ie.decimalSeparator,
        ie.thousandsSeparator,
        ie.removeDecimalsIfZero
      ) : w.value.toString()) : a.type === W.Html ? vn(w.value) : w.value;
    }), Ke = te(() => typeof a.min == "string" ? parseFloat(a.min) : typeof a.min == "number" ? a.min : !1), Oe = te(() => typeof a.max == "string" ? parseFloat(a.max) : typeof a.max == "number" ? a.max : !1), _e = te(() => {
      var E, J, ce, Ee;
      if (Et.includes(a.type)) {
        if (w.value === !0 && typeof a.configOn == "object")
          return qi(
            jt(((E = a.configOn) == null ? void 0 : E.label) ?? a.label),
            ((J = a.configOn) == null ? void 0 : J.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
        if (w.value !== !0 && typeof a.configOff == "object")
          return qi(
            jt(((ce = a.configOff) == null ? void 0 : ce.label) ?? a.label),
            ((Ee = a.configOff) == null ? void 0 : Ee.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
      }
      return qi(
        jt(a.label),
        a.labelIcon,
        a.labelIconAtEnd
      );
    }), It = te(() => jt(a.placeholder)), ct = te(() => jt(a.searchPlaceholder)), Pe = te(() => typeof f == "function" ? f(a.prop) : Lt(f, a.prop)), Ne = te(() => typeof a.modalData == "function" ? a.modalData(a.prop) : a.modalData), We = te(() => typeof b == "function" ? b(a.prop) : Lt(b, a.prop)), Ue = te(() => a.type === W.File ? ie.acceptTypes.file : a.type === W.Image ? ie.acceptTypes.image : ""), Vt = te(() => a.errorMessage), Dt = te(() => a.infoMessage), et = te(() => a.canStep && _.value && a.type === W.Number), Mt = te(() => a.canStep && _.value && a.type === W.Number && x !== "subtract"), nl = te(() => a.canStep && _.value && a.type === W.Number), ol = te(() => a.canUndo && ve.value && _.value && !Mo.includes(a.type)), sl = te(() => a.canClear && Ie.value && _.value && !Ho.includes(a.type)), Pi = te(() => a.canI18n && typeof s.value == "object" && _.value), Yt = te(() => a.type === W.Password && a.showPassword && Ie.value && _.value), al = te(() => ol.value && !a.infoButtonEllipsis), rl = te(() => sl.value && !a.infoButtonEllipsis), ul = te(() => Yt.value && !a.infoButtonEllipsis && x !== "password"), dl = te(() => Pi.value && !a.infoButtonEllipsis && x !== "i18n"), cl = te(() => {
      var E, J, ce, Ee;
      return a.type === W.Calc || a.type === W.Search || ![W.Select, W.Text].includes(a.type) ? !1 : j.value.length > 0 || Y.value.length > 0 || typeof ((J = (E = a.optionsConfig) == null ? void 0 : E.http) == null ? void 0 : J.resource) < "u" && ((Ee = (ce = a.optionsConfig) == null ? void 0 : ce.http) == null ? void 0 : Ee.resource) !== "";
    }), fl = te(() => a.allowReadModeSwitch && !a.infoButtonEllipsis), pl = te(() => typeof a.fileUploadButton == "object" && Object.keys(a.fileUploadButton).length > 0), hl = () => {
      zt(() => {
        k.value && k.value.focus();
      });
    }, lo = async () => {
      var E;
      if ((E = a.validation) != null && E.resource) {
        o("validating");
        const J = await Vi(a.validation.resource, {
          ...a.validation.resourceData,
          value: w.value
        });
        o("validation", J);
      }
    };
    ue(() => {
      var E;
      return (E = a.validation) == null ? void 0 : E.checkEqualTo;
    }, () => Ht()), ue(() => a.readMode, (E) => _.value = !E), ue(() => a.valid, (E) => r.value = E), ue(() => a.modelValue, (E) => {
      [W.Card, W.Elements].includes(a.type) ? w.value = E : a.type !== W.Date && (w.value = gn(E, N.value));
    }), ue(w, (E) => {
      typeof s.value == "object" && [W.Card, W.Elements].includes(a.type) ? s.value[N.value] = E : s.value = E, a.type === W.Number && bo(E);
    }), ue(s, (E) => {
      var J;
      q.value && _.value && (o("update:modelValue", E), a.type === W.Select && typeof ((J = a.optionsConfig) == null ? void 0 : J.filter) == "function" && Ft(Z.value, !1), lo(), Ht());
    }, { deep: !0 }), ue(r, (E) => {
      o("update:valid", E);
    }), ue(Y, (E) => {
      o("update:options", E);
    }), ue(() => a.options, (E) => {
      Y.value = Hi(E, a.prop), a.type === W.Select ? Ft(Z.value, !1) : Ft(w.value, !1);
    });
    const Ht = () => {
      var E;
      ((E = a.validation) == null ? void 0 : E.trigger) === Fo.Blur && (!m.value || !g.value) || a.type !== W.Range && (h.value = [], zt(() => {
        var Ee, Ve, Ae, tt, it, lt, nt, ot, st, ht, mt, gt, vt;
        let J = typeof a.min > "u" ? 0 : parseFloat(a.min), ce = typeof a.max > "u" ? 0 : parseFloat(a.max);
        if (a.type === W.Number && typeof a.min < "u" && typeof a.max < "u" && (w.value < J || w.value > ce)) {
          h.value.push(De.createNumBetween(J, ce, Me.Ko)), r.value = !1;
          return;
        }
        ![W.Number, W.Email].includes(a.type) && a.mandatory && w.value === "" ? h.value.push(De.createEmpty(Me.Ko)) : a.type !== W.Email && J > 0 && (a.type !== W.Number && w.value.length < J ? h.value.push(De.createMinStr(J, Me.Ko)) : w.value < J && h.value.push(De.createMinNum(J, Me.Ko))), ce > 0 && (a.type !== W.Number && w.value.length > ce ? h.value.push(De.createMaxStr(ce, Me.Ko)) : w.value > ce && h.value.push(De.createMaxNum(ce, Me.Ko))), a.type === W.Email && (a.mandatory && w.value === "" ? h.value.push(De.createEmpty(Me.Ko)) : zo(w.value) || h.value.push(De.createEmail(Me.Ko))), Oo.includes(a.type) && (ws(h.value, w.value, (Ee = a.validation) == null ? void 0 : Ee.minNumbers, (Ve = a.validation) == null ? void 0 : Ve.maxNumbers), ks(h.value, w.value, (Ae = a.validation) == null ? void 0 : Ae.minUpperChars, (tt = a.validation) == null ? void 0 : tt.maxUpperChars), xs(h.value, w.value, (it = a.validation) == null ? void 0 : it.minLowerChars, (lt = a.validation) == null ? void 0 : lt.maxLowerChars), Ss(h.value, w.value, (nt = a.validation) == null ? void 0 : nt.minChars, (ot = a.validation) == null ? void 0 : ot.maxChars), Ls(h.value, w.value, (st = a.validation) == null ? void 0 : st.minSpecialChars, (ht = a.validation) == null ? void 0 : ht.maxSpecialChars)), (mt = a.validation) != null && mt.checkEqualTo && w.value !== ((gt = a.validation) == null ? void 0 : gt.checkEqualTo) && h.value.push(De.createEqualTo((vt = a.validation) == null ? void 0 : vt.checkEqualTo, Me.Ko)), r.value = h.value.length === 0;
      }));
    }, Ft = (E, J = !0) => {
      var ce, Ee, Ve, Ae, tt, it, lt, nt, ot, st;
      if (Y.value.length === 0) {
        j.value = [];
        return;
      }
      switch (a.type) {
        case W.Select:
          a.searchable ? j.value = Zi(Y.value, E, !0, (ce = a.optionsConfig) == null ? void 0 : ce.filter) : j.value = Y.value, A.value = !1, J && (z.value = typeof ((Ve = (Ee = a.optionsConfig) == null ? void 0 : Ee.http) == null ? void 0 : Ve.resource) < "u" && ((tt = (Ae = a.optionsConfig) == null ? void 0 : Ae.http) == null ? void 0 : tt.resource) !== "" || j.value.length > 0), G();
          return;
        case W.Text:
        case W.Search:
          j.value = Zi(Y.value, E, !1, (it = a.optionsConfig) == null ? void 0 : it.filter), A.value = !1, J && (z.value = typeof ((nt = (lt = a.optionsConfig) == null ? void 0 : lt.http) == null ? void 0 : nt.resource) < "u" && ((st = (ot = a.optionsConfig) == null ? void 0 : ot.http) == null ? void 0 : st.resource) !== "" || j.value.length > 0);
          return;
      }
    }, Xt = async (E, J = !0) => {
      var ce, Ee, Ve, Ae, tt, it, lt, nt, ot, st, ht, mt, gt, vt, Zt, qt, xe, bt, yt, _t, Ct, wt, kt, xt;
      if (!(!_.value && !((ce = a.optionsConfig) != null && ce.autoloadResource) && !I.value) && ![
        W.Tel,
        W.Date,
        W.Color,
        W.File,
        W.Html,
        W.Image,
        W.Password,
        W.Range,
        W.Textarea
      ].includes(a.type))
        if (A.value = !1, (Ee = a.optionsConfig) != null && Ee.autoloadResource && !I.value && (O.value = !0), typeof ((Ae = (Ve = a.optionsConfig) == null ? void 0 : Ve.http) == null ? void 0 : Ae.resource) < "u" && ((it = (tt = a.optionsConfig) == null ? void 0 : tt.http) == null ? void 0 : it.resource) !== "") {
          A.value = !0;
          let ft = {};
          typeof ((nt = (lt = a.optionsConfig) == null ? void 0 : lt.http) == null ? void 0 : nt.data) == "object" && (ft = { ...a.optionsConfig.http.data }), ie.searchKeyForResource !== "" && (ft[ie.searchKeyForResource] = E), (ht = (st = (ot = a.optionsConfig) == null ? void 0 : ot.http) == null ? void 0 : st.events) != null && ht.onStart && typeof ((vt = (gt = (mt = a.optionsConfig) == null ? void 0 : mt.http) == null ? void 0 : gt.events) == null ? void 0 : vt.onStart) == "function" && a.optionsConfig.http.events.onStart();
          const at = await Vi((qt = (Zt = a.optionsConfig) == null ? void 0 : Zt.http) == null ? void 0 : qt.resource, ft);
          (yt = (bt = (xe = a.optionsConfig) == null ? void 0 : xe.http) == null ? void 0 : bt.events) != null && yt.onEnd && typeof ((wt = (Ct = (_t = a.optionsConfig) == null ? void 0 : _t.http) == null ? void 0 : Ct.events) == null ? void 0 : wt.onEnd) == "function" && a.optionsConfig.http.events.onEnd(at);
          const Nt = Array.isArray(at.data) && at.data.length > 0;
          A.value = !1, Nt && (Y.value = rs(Y.value, at.data, a.prop), Ft(E, J), (kt = a.optionsConfig) != null && kt.autoloadResource && !I.value && (((xt = a.optionsConfig) == null ? void 0 : xt.autoloadResource) === "feed" && (a.multiple ? j.value.forEach((ii) => {
            Pt(ii);
          }) : j.value.length > 0 && Pt(j.value[0])), I.value = !0, O.value = !1), o("options-loaded", at.data));
        } else
          Ft(E, J);
    }, Wi = (E) => {
      var Ee, Ve;
      let J = j.value.length - 1;
      if (J === -1) return;
      const ce = E.key ?? "";
      if (p.value)
        if (["ArrowDown", "ArrowUp", "Enter"].includes(ce) && (E.preventDefault(), E.stopPropagation()), ce === "ArrowDown") {
          ++U.value, U.value > J && (U.value = 0);
          let Ae = (Ee = T.value) == null ? void 0 : Ee.querySelector('[data-index="' + U.value + '"]');
          Ae && Ae.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else if (ce === "ArrowUp") {
          --U.value, U.value < 0 && (U.value = J);
          let Ae = (Ve = T.value) == null ? void 0 : Ve.querySelector('[data-index="' + U.value + '"]');
          Ae && Ae.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else ce === "Enter" && U.value > -1 && Pt(j.value[U.value]);
    }, $i = () => {
      if (a.type === W.Html) {
        k.value && k.value.setValue(D.value);
        return;
      } else if (a.type === W.Date) {
        s.value = R.value;
        return;
      } else if (a.type === W.File) {
        s.value = R.value, y.value = C.value;
        return;
      }
      w.value = D.value;
    }, ml = () => {
      if (a.type === W.Html) {
        k.value && k.value.setValue("");
        return;
      } else if (a.type === W.Date) {
        s.value = "";
        return;
      } else if (a.type === W.File) {
        s.value = "", y.value = "";
        return;
      } else if (a.type === W.Select) {
        w.value = a.multiple ? [] : "", F.value = [];
        return;
      }
      w.value = "";
    }, no = () => w.value, gl = (E) => {
      Ht(), zl.includes(a.type) ? (Xt(w.value), Wi(E)) : a.type === W.Select && Wi(E), o("keyup", E);
    }, vl = () => {
      k.value && k.value.keepFocused();
    }, oo = () => {
      if (z.value) {
        if (a.type === W.Select) {
          _l();
          return;
        }
        return Qt();
      }
      if (a.type === W.Select) {
        yl();
        return;
      }
      return Jt();
    }, Pt = (E, J = !1) => {
      if (!E.disabled)
        if (a.multiple) {
          let ce = -1;
          a.optionValueType === "option" ? ce = Ot(E, w.value.map((Ee) => Ee.value)) : ce = Ot(E, w.value), ce === -1 ? (a.optionValueType === "option" ? w.value.push(E.value) : w.value.push(String(E.value)), J || F.value.push(E)) : J || (w.value.splice(ce, 1), F.value.splice(ce, 1)), vl(), o("selected-option", E);
        } else
          U.value = -1, a.optionValueType === "option" ? w.value = E : w.value = String(E.value), F.value.splice(0, 1, E), z.value = !1, P.value = !1, o("selected-option", E);
    }, bl = (E) => o("keydown", E), Jt = (E) => {
      g.value = !0, p.value = !0, Ht(), o("focus", E);
    }, Qt = (E) => {
      setTimeout(() => {
        if (!(a.searchable && P.value)) {
          if (a.multiple) {
            z.value = !0, p.value = !0;
            return;
          }
          m.value = !0, U.value = -1, z.value = !1, p.value = !1, Ht(), o("blur", E);
        }
      }, 100);
    }, ei = (E) => {
      g.value = !0, p.value = !0, o("focus", E);
    }, ti = (E) => {
      m.value = !0, p.value = !1, o("blur", E);
    }, so = (E) => {
      Wi(E);
    }, ao = (E) => {
      Z.value = E, Xt(E);
    }, ro = (E) => {
      let J = new Di({
        value: E,
        label: E
      }), ce = -1;
      a.optionValueType === "option" ? ce = Ot(J, w.value.map((Ee) => Ee.value)) : ce = Ot(J, w.value), ce === -1 && (Y.value.push(J), j.value.push(J), F.value.push(J), Pt(J, !0)), Z.value = "";
    }, uo = (E) => {
      let J = -1;
      a.optionValueType === "option" ? J = Ot(E, w.value.map((ce) => ce.value)) : J = Ot(E, w.value), J >= 0 && (w.value.splice(J, 1), F.value.splice(J, 1), a.canTag && (Y.value.splice(
        Y.value.findIndex((ce) => ce.value === E.value),
        1
      ), j.value.splice(
        j.value.findIndex((ce) => ce.value === E.value),
        1
      ))), Z.value = "";
    }, yl = () => {
      var E, J;
      if (g.value = !0, p.value = !0, !((J = (E = a.optionsConfig) == null ? void 0 : E.http) != null && J.resource) && j.value.length === 0) {
        z.value = !1;
        return;
      }
      z.value = !0, Ht(), Xt(Z.value, !1), a.searchable && vl(), o("focus");
    }, _l = () => {
      m.value = !0, p.value = !1, o("blur");
    }, Wt = (E) => {
      o("change", E, w.value);
    }, $t = (E) => {
      o("click", E);
    }, co = (E) => o("click-info", E), fo = (E) => o("click-error", E), Cl = () => {
      let E = a.step ?? 1;
      typeof E == "string" && (E = parseFloat(E));
      let J = String(E).split(".")[0].length;
      (!a.min || w.value > a.min) && (w.value = parseFloat((parseFloat(w.value) - E).toFixed(J)));
    }, po = () => {
      let E = a.step ?? 1;
      typeof E == "string" && (E = parseFloat(E));
      let J = String(E).split(".")[0].length;
      (!a.max || w.value < a.max) && (w.value = parseFloat((parseFloat(w.value) + E).toFixed(J)));
    }, ho = () => {
      _.value && hl();
    }, mo = () => {
      Il({
        text: Ye.defaultUploadSuccessText,
        details: Ye.defaultUploadSuccessDetails,
        icon: Ye.defaultUploadSuccessIcon,
        positionX: Nl.Right
      }), o("upload-success");
    }, go = () => {
      Il({
        text: Ye.defaultUploadErrorText,
        details: Ye.defaultUploadErrorDetails,
        icon: Ye.defaultUploadErrorIcon,
        positionX: Nl.Right
      }), o("upload-error");
    }, vo = (E) => {
      console.log("emit picked files 2: ", E), o("picked-files", E);
    }, bo = (E) => {
      if (!a.enableAutoNumberFix) return !1;
      let J = Number(E), ce = as(J, Ke.value, Oe.value);
      return J !== ce ? (w.value = ce, !0) : !1;
    };
    t({
      Identifier: d,
      reset: $i,
      focus: hl,
      value: no,
      isMandatory: () => a.mandatory,
      isValid: () => r.value,
      click: () => {
        var E;
        switch (a.type) {
          case W.File:
            return (E = k.value) == null ? void 0 : E.click();
        }
        V.value.click();
      }
    });
    const yo = te(() => a.editSlot !== "" && typeof ie.customEditSlots[a.editSlot] < "u"), _o = te(() => ie.customEditSlots[a.editSlot]);
    Fi(() => {
      var E;
      Y.value = Hi(a.options, a.prop), Ft("", !1), G(), a.type === W.Select && (a.multiple && (P.value = !0), (E = a.optionsConfig) != null && E.autoloadResource && Xt("", !1)), q.value = !0;
    });
    const Co = te(() => Et.includes(a.type) && !pe.value ? "label" : "div"), wo = te(() => Et.includes(a.type) ? {
      for: d
    } : {}), ko = te(() => {
      switch (a.type) {
        case W.Select:
          return F.value;
        case W.Date:
          return zn(s.value, M.value);
        case W.File:
        case W.Image:
          return s.value;
        default:
          return w.value;
      }
    });
    return (E, J) => {
      var Ae, tt, it, lt, nt, ot, st, ht, mt, gt, vt, Zt, qt;
      const ce = de("lkt-button"), Ee = de("lkt-loader"), Ve = de("lkt-tooltip");
      return H(), oe("div", {
        class: Te(["lkt-field", dt.value]),
        "data-show-ui": $e.value,
        "data-labeled": !B(i).label,
        ref_key: "container",
        ref: V
      }, [
        B(i).label ? rt(E.$slots, "label", { key: 0 }) : le("", !0),
        !B(i).label && _e.value !== "" && !B(Et).includes(E.type) ? (H(), oe("label", {
          key: 1,
          for: B(d),
          class: "lkt-field--label",
          innerHTML: _e.value
        }, null, 8, Ru)) : le("", !0),
        fe("div", Iu, [
          Re.value ? (H(), oe("div", Vu, [
            E.featuredButton === "password" && Yt.value ? (H(), X(Ki, {
              key: 0,
              modelValue: c.value,
              "onUpdate:modelValue": J[0] || (J[0] = (xe) => c.value = xe),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : le("", !0),
            Pi.value && B(x) === "i18n" && E.canI18n ? (H(), X(Vl, {
              key: 1,
              modelValue: s.value,
              "onUpdate:modelValue": J[1] || (J[1] = (xe) => s.value = xe),
              "is-featured": "",
              type: E.type
            }, null, 8, ["modelValue", "type"])) : le("", !0),
            et.value && B(x) === "subtract" ? (H(), X(ce, {
              key: 2,
              class: "lkt-field--atn-btn",
              icon: "lkt-icn-less",
              onClick: Cl
            })) : le("", !0)
          ])) : le("", !0),
          We.value ? (H(), oe("div", Du, [
            fe("i", {
              class: Te(We.value)
            }, null, 2)
          ])) : le("", !0),
          _.value ? (H(), X(At(Co.value), re({ key: 2 }, wo.value, { class: "lkt-field-main" }), {
            default: ae(() => {
              var xe, bt, yt, _t, Ct, wt, kt, xt, ft, at, Nt, ii, wl, kl, xl, Sl, Ll;
              return [
                B(i).edit ? (H(), oe("div", {
                  key: 0,
                  onClick: $t
                }, [
                  rt(E.$slots, "edit", {
                    value: s.value,
                    title: Fe.value,
                    data: E.slotData
                  })
                ])) : yo.value ? (H(), oe("div", {
                  key: 1,
                  onClick: $t
                }, [
                  (H(), X(At(_o.value), {
                    value: s.value,
                    title: Fe.value,
                    data: E.slotData
                  }, null, 8, ["value", "title", "data"]))
                ])) : B(Et).includes(E.type) ? (H(), X(Rs, {
                  key: 2,
                  modelValue: B(w),
                  "onUpdate:modelValue": J[2] || (J[2] = (ge) => Xe(w) ? w.value = ge : null),
                  ref_key: "inputElement",
                  ref: k,
                  id: B(d),
                  name: E.name,
                  type: E.type,
                  label: _e.value,
                  editable: _.value,
                  focusing: p.value,
                  disabled: pe.value,
                  readonly: E.readonly,
                  onFocus: ei,
                  onBlur: ti
                }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : E.type === B(W).Color && E.multiple ? (H(), X(Cs, {
                  key: 3,
                  modelValue: B(w),
                  "onUpdate:modelValue": J[3] || (J[3] = (ge) => Xe(w) ? w.value = ge : null),
                  ref_key: "inputElement",
                  ref: k,
                  "edit-mode": _.value,
                  min: Ke.value,
                  max: Oe.value
                }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : E.type === B(W).Color ? (H(), X(Nn, {
                  key: 4,
                  modelValue: B(w),
                  "onUpdate:modelValue": J[4] || (J[4] = (ge) => Xe(w) ? w.value = ge : null),
                  onChange: Wt,
                  ref_key: "inputElement",
                  ref: k
                }, null, 8, ["modelValue"])) : $.value || ne.value ? (H(), X(pu, {
                  key: 5,
                  modelValue: s.value,
                  "onUpdate:modelValue": J[5] || (J[5] = (ge) => s.value = ge),
                  "file-name": y.value,
                  "onUpdate:fileName": J[6] || (J[6] = (ge) => y.value = ge),
                  ref_key: "inputElement",
                  ref: k,
                  id: B(d),
                  tabindex: E.tabindex,
                  resource: (xe = E.fileUploadHttp) == null ? void 0 : xe.resource,
                  "resource-data": (bt = E.fileUploadHttp) == null ? void 0 : bt.data,
                  name: E.name,
                  placeholder: It.value,
                  accept: Ue.value,
                  focusing: p.value,
                  disabled: pe.value,
                  readonly: E.readonly,
                  "is-image": E.type === B(W).Image,
                  "file-browser-config": E.fileBrowserConfig,
                  onChange: Wt,
                  onUploadSuccess: mo,
                  onUploadError: go,
                  onPickedFiles: vo
                }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image", "file-browser-config"])) : ee.value ? (H(), X(Cu, {
                  key: 6,
                  modelValue: s.value,
                  "onUpdate:modelValue": J[7] || (J[7] = (ge) => s.value = ge),
                  id: B(d),
                  tabindex: E.tabindex,
                  lang: N.value,
                  name: E.name
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name"])) : E.type === B(W).Select ? (H(), X(Ur, {
                  key: 7,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: B(w),
                  "onUpdate:modelValue": J[8] || (J[8] = (ge) => Xe(w) ? w.value = ge : null),
                  "show-options": z.value,
                  "onUpdate:showOptions": J[9] || (J[9] = (ge) => z.value = ge),
                  searchable: E.searchable,
                  "search-mode": P.value,
                  "search-string": Z.value,
                  multiple: E.multiple,
                  "can-tag": E.canTag,
                  "options-text": (yt = E.optionsConfig) == null ? void 0 : yt.text,
                  "options-icon": (_t = E.optionsConfig) == null ? void 0 : _t.icon,
                  "options-class": (Ct = E.optionsConfig) == null ? void 0 : Ct.class,
                  "option-slot": E.optionSlot,
                  "options-modal": (wt = E.optionsConfig) == null ? void 0 : wt.modal,
                  "options-download": (kt = E.optionsConfig) == null ? void 0 : kt.download,
                  "options-label-formatter": (xt = E.optionsConfig) == null ? void 0 : xt.labelFormatter,
                  "options-modal-data": (ft = E.optionsConfig) == null ? void 0 : ft.modalData,
                  "picked-options": F.value,
                  editable: _.value,
                  focusing: p.value,
                  "search-placeholder": ct.value,
                  "multiple-display-edition": E.multipleDisplayEdition,
                  onFocus: yl,
                  onBlur: _l,
                  onNavigate: so,
                  onSearch: ao,
                  onChange: Wt,
                  onTag: ro,
                  onUntag: uo
                }, null, 8, ["modelValue", "show-options", "searchable", "search-mode", "search-string", "multiple", "can-tag", "options-text", "options-icon", "options-class", "option-slot", "options-modal", "options-download", "options-label-formatter", "options-modal-data", "picked-options", "editable", "focusing", "search-placeholder", "multiple-display-edition"])) : E.type === B(W).Calc ? (H(), X(Gr, {
                  key: 8,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: B(w),
                  "onUpdate:modelValue": J[10] || (J[10] = (ge) => Xe(w) ? w.value = ge : null),
                  id: B(d),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: _.value,
                  focusing: p.value,
                  disabled: pe.value,
                  readonly: E.readonly,
                  options: Y.value,
                  onFocus: ei,
                  onBlur: ti
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : E.type === B(W).Search ? (H(), X(Qr, {
                  key: 9,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: B(w),
                  "onUpdate:modelValue": J[11] || (J[11] = (ge) => Xe(w) ? w.value = ge : null),
                  id: B(d),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: _.value,
                  focusing: p.value,
                  "had-first-focus": g.value,
                  disabled: pe.value,
                  readonly: E.readonly,
                  "options-resource": (Nt = (at = E.optionsConfig) == null ? void 0 : at.http) == null ? void 0 : Nt.resource,
                  container: V.value,
                  onFocus: ei,
                  onBlur: ti
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : E.type === B(W).Elements ? (H(), X(zu, {
                  key: 10,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: B(w),
                  "onUpdate:modelValue": J[12] || (J[12] = (ge) => Xe(w) ? w.value = ge : null),
                  id: B(d),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: _.value,
                  focusing: p.value,
                  "had-first-focus": g.value,
                  disabled: pe.value,
                  readonly: E.readonly,
                  "options-resource": (wl = (ii = E.optionsConfig) == null ? void 0 : ii.http) == null ? void 0 : wl.resource,
                  container: V.value,
                  "file-browser-config": E.fileBrowserConfig,
                  onFocus: ei,
                  onBlur: ti
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container", "file-browser-config"])) : E.type === B(W).Card && a.multiple ? (H(), X(ku, {
                  key: 11,
                  modelValue: B(w),
                  "onUpdate:modelValue": J[13] || (J[13] = (ge) => Xe(w) ? w.value = ge : null),
                  id: B(d),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: _.value,
                  focusing: p.value,
                  "had-first-focus": g.value,
                  disabled: pe.value,
                  readonly: E.readonly,
                  "options-resource": (xl = (kl = E.optionsConfig) == null ? void 0 : kl.http) == null ? void 0 : xl.resource,
                  modal: Pe.value,
                  "modal-key": B(n),
                  "modal-data": Ne.value,
                  "item-type": B(v)
                }, ut({ _: 2 }, [
                  B(i)["item-" + B(v)] ? {
                    name: "item",
                    fn: ae(({ item: ge }) => [
                      rt(E.$slots, "item-" + B(v), { item: ge })
                    ]),
                    key: "0"
                  } : B(i).item ? {
                    name: "item",
                    fn: ae(({ item: ge }) => [
                      rt(E.$slots, "item", { item: ge })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : E.type === B(W).Card ? (H(), X(io, {
                  key: 12,
                  modelValue: B(w),
                  "onUpdate:modelValue": J[14] || (J[14] = (ge) => Xe(w) ? w.value = ge : null),
                  id: B(d),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: _.value,
                  focusing: p.value,
                  "had-first-focus": g.value,
                  disabled: pe.value,
                  readonly: E.readonly,
                  "options-resource": (Ll = (Sl = E.optionsConfig) == null ? void 0 : Sl.http) == null ? void 0 : Ll.resource,
                  modal: Pe.value,
                  "modal-key": B(n),
                  "modal-data": Ne.value,
                  "item-type": B(v)
                }, ut({ _: 2 }, [
                  B(i)["item-" + B(v)] ? {
                    name: "item",
                    fn: ae(({ item: ge }) => [
                      rt(E.$slots, "item-" + B(v), { item: ge })
                    ]),
                    key: "0"
                  } : B(i).item ? {
                    name: "item",
                    fn: ae(({ item: ge }) => [
                      rt(E.$slots, "item", { item: ge })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : me.value === "input" ? je((H(), oe("input", {
                  key: 13,
                  "onUpdate:modelValue": J[15] || (J[15] = (ge) => Xe(w) ? w.value = ge : null),
                  ref: (ge) => k.value = ge,
                  value: B(w),
                  type: Le.value,
                  name: E.name,
                  id: B(d),
                  disabled: pe.value,
                  readonly: E.readonly,
                  placeholder: It.value,
                  tabindex: E.tabindex,
                  autocomplete: we.value,
                  min: Ke.value,
                  max: Oe.value,
                  step: E.step,
                  onKeyup: gl,
                  onKeydown: bl,
                  onFocus: Jt,
                  onBlur: Qt,
                  onClick: $t,
                  onChange: Wt
                }, null, 40, Mu)), [
                  [Eo, B(w)]
                ]) : me.value === "textarea" ? je((H(), oe("textarea", {
                  key: 14,
                  "onUpdate:modelValue": J[16] || (J[16] = (ge) => Xe(w) ? w.value = ge : null),
                  ref: (ge) => k.value = ge,
                  name: E.name,
                  id: B(d),
                  disabled: pe.value,
                  readonly: E.readonly,
                  placeholder: It.value,
                  tabindex: E.tabindex,
                  autocomplete: we.value,
                  onKeyup: gl,
                  onKeydown: bl,
                  onFocus: Jt,
                  onBlur: Qt,
                  onClick: $t,
                  onChange: Wt
                }, null, 40, Hu)), [
                  [Oi, B(w)]
                ]) : E.type === B(W).Html ? (H(), X(Dr, {
                  key: 15,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: B(w),
                  "onUpdate:modelValue": J[17] || (J[17] = (ge) => Xe(w) ? w.value = ge : null),
                  id: B(d),
                  tabindex: E.tabindex,
                  name: E.name,
                  lang: N.value,
                  editable: _.value,
                  focusing: p.value,
                  disabled: pe.value,
                  readonly: E.readonly,
                  onFocus: Jt,
                  onBlur: Qt
                }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : le("", !0)
              ];
            }),
            _: 3
          }, 16)) : le("", !0),
          _.value ? le("", !0) : (H(), X(uu, {
            key: 3,
            value: ko.value,
            type: E.type,
            label: _e.value,
            title: Fe.value,
            "file-name": y.value,
            "value-slot": E.valueSlot,
            "empty-value-slot": E.emptyValueSlot,
            "slot-data": E.slotData,
            download: B(u),
            multiple: E.multiple,
            multipleDisplay: E.multipleDisplay,
            modal: Pe.value,
            "modal-key": B(n),
            "modal-data": Ne.value,
            "option-slot": E.optionSlot,
            "options-download": (Ae = E.optionsConfig) == null ? void 0 : Ae.download,
            "options-modal": (tt = E.optionsConfig) == null ? void 0 : tt.modal,
            "options-modal-data": (it = E.optionsConfig) == null ? void 0 : it.modalData,
            "options-icon": (lt = E.optionsConfig) == null ? void 0 : lt.icon,
            "options-text": (nt = E.optionsConfig) == null ? void 0 : nt.text,
            "options-class": (ot = E.optionsConfig) == null ? void 0 : ot.class,
            "options-label-formatter": (st = E.optionsConfig) == null ? void 0 : st.labelFormatter,
            "options-resource": (mt = (ht = E.optionsConfig) == null ? void 0 : ht.http) == null ? void 0 : mt.resource,
            "options-resource-data": (vt = (gt = E.optionsConfig) == null ? void 0 : gt.http) == null ? void 0 : vt.data,
            "read-mode-config": E.readModeConfig,
            onClick: $t
          }, ut({ _: 2 }, [
            B(i).value ? {
              name: "value",
              fn: ae(() => [
                rt(E.$slots, s.value, {
                  value: s.value,
                  title: Fe.value,
                  data: E.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-text", "options-class", "options-label-formatter", "options-resource", "options-resource-data", "read-mode-config"])),
          $e.value ? (H(), oe("div", Fu, [
            je(K(En, { onClick: $i }, null, 512), [
              [St, al.value]
            ]),
            je(K(Tn, { onClick: ml }, null, 512), [
              [St, rl.value]
            ]),
            E.type === B(W).Number ? je((H(), X(ce, {
              key: 0,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              onClick: Cl
            }, null, 512)), [
              [St, Mt.value]
            ]) : le("", !0),
            E.type === B(W).Number ? je((H(), X(ce, {
              key: 1,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-more",
              onClick: po
            }, null, 512)), [
              [St, nl.value]
            ]) : le("", !0),
            Vt.value ? (H(), X(ce, {
              key: 2,
              title: E.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-attention",
              onClick: fo
            }, null, 8, ["title"])) : le("", !0),
            Dt.value ? (H(), X(ce, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-info",
              onClick: co,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: ae(() => [
                Ut(Tt(E.infoMessage), 1)
              ]),
              _: 1
            })) : le("", !0),
            _.value && pl.value ? (H(), X(Nu, {
              key: 4,
              config: E.fileUploadButton,
              "file-upload-http": E.fileUploadHttp
            }, null, 8, ["config", "file-upload-http"])) : le("", !0),
            E.type === B(W).Password ? je((H(), X(Ki, {
              key: 5,
              modelValue: c.value,
              "onUpdate:modelValue": J[18] || (J[18] = (xe) => c.value = xe)
            }, null, 8, ["modelValue"])), [
              [St, ul.value]
            ]) : le("", !0),
            je(K(Vl, {
              modelValue: s.value,
              "onUpdate:modelValue": J[19] || (J[19] = (xe) => s.value = xe),
              type: E.type
            }, null, 8, ["modelValue", "type"]), [
              [St, dl.value]
            ]),
            _.value && fl.value ? (H(), X(Bn, {
              key: 6,
              modelValue: _.value,
              "onUpdate:modelValue": J[20] || (J[20] = (xe) => _.value = xe),
              onClick: ho
            }, null, 8, ["modelValue"])) : le("", !0),
            E.customButtonText || E.customButtonClass ? (H(), X(ce, {
              key: 7,
              text: E.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: E.customButtonClass
            }, null, 8, ["text", "icon"])) : le("", !0),
            _.value ? je((H(), X(ds, {
              key: 8,
              onClick: oo
            }, null, 512)), [
              [St, cl.value]
            ]) : le("", !0),
            E.infoButtonEllipsis ? (H(), X(ss, {
              key: 9,
              "show-undo": ol.value,
              "show-clear": sl.value,
              "show-password": Yt.value,
              "show-edition": E.allowReadModeSwitch,
              "show-password-check": c.value,
              "onUpdate:showPasswordCheck": J[21] || (J[21] = (xe) => c.value = xe),
              "show-edition-check": _.value,
              "onUpdate:showEditionCheck": J[22] || (J[22] = (xe) => _.value = xe),
              onUndo: $i,
              onClear: ml
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : le("", !0)
          ])) : le("", !0)
        ]),
        _.value && ((Zt = E.validation) == null ? void 0 : Zt.type) === B(Bl).Auto && h.value.length > 0 ? (H(), X(Xr, {
          key: 2,
          items: h.value,
          stack: (qt = E.validation) == null ? void 0 : qt.stack
        }, null, 8, ["items", "stack"])) : le("", !0),
        _.value && B(zl).includes(E.type) ? (H(), X(Ve, re({
          key: 3,
          ref_key: "dropdownEl",
          ref: S,
          class: "lkt-field--dropdown",
          modelValue: z.value,
          "onUpdate:modelValue": J[23] || (J[23] = (xe) => z.value = xe),
          referrer: V.value,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, E.tooltipConfig), {
          default: ae(() => [
            z.value ? (H(), oe("div", Ou, [
              A.value ? (H(), X(Ee, { key: 0 })) : le("", !0),
              A.value ? le("", !0) : (H(), oe("ul", {
                key: 1,
                class: "lkt-field--dropdown-options",
                ref_key: "optionList",
                ref: T
              }, [
                (H(!0), oe(He, null, Qe(j.value, (xe, bt) => {
                  var yt, _t, Ct, wt, kt, xt, ft, at, Nt;
                  return H(), oe("li", {
                    class: Te({
                      "is-active": B(us)(xe, s.value, E.multiple),
                      "is-focused": bt === U.value,
                      "is-disabled": xe.disabled
                    }),
                    "data-index": bt,
                    onClick: () => Pt(xe)
                  }, [
                    B(i).option ? rt(E.$slots, "option", {
                      key: 0,
                      option: xe,
                      data: E.slotData,
                      modal: (yt = E.optionsConfig) == null ? void 0 : yt.modal,
                      modalData: (_t = E.optionsConfig) == null ? void 0 : _t.modalData,
                      download: (Ct = E.optionsConfig) == null ? void 0 : Ct.download,
                      editable: _.value
                    }) : (H(), X(Bt, {
                      key: 1,
                      option: xe,
                      "option-slot": E.optionSlot,
                      icon: (wt = E.optionsConfig) == null ? void 0 : wt.icon,
                      text: (kt = E.optionsConfig) == null ? void 0 : kt.text,
                      modal: (xt = E.optionsConfig) == null ? void 0 : xt.modal,
                      "modal-data": (ft = E.optionsConfig) == null ? void 0 : ft.modalData,
                      download: (at = E.optionsConfig) == null ? void 0 : at.download,
                      "label-formatter": (Nt = E.optionsConfig) == null ? void 0 : Nt.labelFormatter,
                      editable: _.value
                    }, null, 8, ["option", "option-slot", "icon", "text", "modal", "modal-data", "download", "label-formatter", "editable"]))
                  ], 10, Uu);
                }), 256))
              ], 512))
            ])) : le("", !0)
          ]),
          _: 3
        }, 16, ["modelValue", "referrer"])) : le("", !0)
      ], 10, Au);
    };
  }
}), Pu = { class: "lkt-grid-1" }, Wu = /* @__PURE__ */ be({
  __name: "LktTextLanguageEditModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    translations: { default: () => ({}) }
  },
  setup(e) {
    const t = te(() => Ro.value.filter((l) => l !== _n.value));
    return (l, o) => {
      const i = de("lkt-modal");
      return H(), X(i, {
        "modal-name": l.modalName,
        title: "__:lmm.confirmFormLeave",
        "modal-key": l.modalKey,
        "z-index": l.zIndex
      }, {
        default: ae(() => [
          fe("div", Pu, [
            K(Be, {
              type: l.type,
              label: "Idioma actual (ES)",
              modelValue: l.translations.es,
              "onUpdate:modelValue": o[0] || (o[0] = (a) => l.translations.es = a),
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "modelValue"]),
            (H(!0), oe(He, null, Qe(t.value, (a) => (H(), X(Be, {
              type: l.type,
              modelValue: l.translations[a],
              "onUpdate:modelValue": (d) => l.translations[a] = d,
              label: "Idioma (" + a + ")",
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "modelValue", "onUpdate:modelValue", "label"]))), 256))
          ])
        ]),
        _: 1
      }, 8, ["modal-name", "modal-key", "z-index"]);
    };
  }
}), $u = { class: "lkt-grid-1" }, Zu = { class: "lkt-grid-3" }, qu = { class: "lkt-grid-3" }, ju = { class: "lkt-grid-3" }, Gu = /* @__PURE__ */ be({
  __name: "LktAddElementModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    items: {},
    element: {},
    onUpdate: {},
    onAppend: {},
    index: {},
    addingChildren: { type: Boolean },
    fileBrowserConfig: {},
    parentLayoutComponent: {}
  },
  setup(e) {
    const t = e, l = Q(t.element), o = Q(t.items), i = Q(t.index + 1), a = (f) => {
      console.log("doRealAddElement"), t.addingChildren ? (console.log("esto va por aquí"), t.element.addChild(f).updateKeyMoment()) : (console.log("esto va por acá: ", f, t.items, i.value), t.items.push(f)), ++i.value, typeof t.onAppend == "function" && t.onAppend();
      let n = o.value.length;
      zt(() => {
        ns("lkt-web-element-config", `${n}--${f.type}--${f.id}`, {
          element: f,
          parent: l.value,
          parentChildren: o.value,
          indexInParentChildren: n,
          fileBrowserConfig: t.fileBrowserConfig,
          parentLayoutComponent: t.parentLayoutComponent
        }), el(t.modalName, t.modalKey);
      });
    }, d = (f) => {
      switch (f) {
        case se.LktLayoutBox:
          return a(Qo());
        case se.LktTextBox:
          return a(Jo());
        case se.LktLayoutAccordion:
          return a(Xo());
        case se.LktTextAccordion:
          return a(Yo());
        case se.LktIcon:
          return a(Ko());
        case se.LktImage:
          return a(Go());
        case se.LktAnchor:
          return a(jo());
        case se.LktButton:
          return a(xn());
        case se.LktLayout:
          return a(qo());
        case se.LktHeader:
          return a(Zo());
        case se.LktText:
          return a($o());
        case se.LktTextBanner:
          return a(Wo());
      }
    };
    return (f, n) => {
      const b = de("lkt-button"), u = de("lkt-accordion"), v = de("lkt-modal");
      return H(), X(v, re({ id: "lkt-add-element-modal" }, {
        modalName: f.modalName,
        modalKey: f.modalKey,
        zIndex: f.zIndex,
        title: "LktBox Config"
      }), {
        default: ae(() => [
          fe("div", $u, [
            K(u, Ce(ze({
              type: B(qe).Always,
              title: "Content"
            })), {
              default: ae(() => [
                fe("div", Zu, [
                  K(b, Ce(ze({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        d(B(se).LktText);
                      }
                    }
                  })), null, 16),
                  K(b, Ce(ze({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        d(B(se).LktHeader);
                      }
                    }
                  })), null, 16),
                  K(b, Ce(ze({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        d(B(se).LktImage);
                      }
                    }
                  })), null, 16),
                  K(b, Ce(ze({
                    icon: "lkt-icn-info",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        d(B(se).LktIcon);
                      }
                    }
                  })), null, 16),
                  K(b, Ce(ze({
                    icon: "lkt-icn-font",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        d(B(se).LktTextBox);
                      }
                    }
                  })), null, 16),
                  K(b, Ce(ze({
                    icon: "lkt-icn-font",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        d(B(se).LktTextAccordion);
                      }
                    }
                  })), null, 16),
                  K(b, Ce(ze({
                    icon: "lkt-icn-font",
                    text: "LktTextBanner",
                    events: {
                      click: () => {
                        d(B(se).LktTextBanner);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            K(u, Ce(ze({
              type: B(qe).Always,
              title: "Containers"
            })), {
              default: ae(() => [
                fe("div", qu, [
                  K(b, Ce(ze({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        d(B(se).LktLayoutBox);
                      }
                    }
                  })), null, 16),
                  K(b, Ce(ze({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        d(B(se).LktLayoutAccordion);
                      }
                    }
                  })), null, 16),
                  K(b, Ce(ze({
                    icon: "lkt-icn-columns",
                    text: "LktLayout",
                    events: {
                      click: () => {
                        d(B(se).LktLayout);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            K(u, Ce(ze({
              type: B(qe).Auto,
              title: "Actions"
            })), {
              default: ae(() => [
                fe("div", ju, [
                  K(b, Ce(ze({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        d(B(se).LktAnchor);
                      }
                    }
                  })), null, 16),
                  K(b, Ce(ze({
                    icon: "lkt-icn-link",
                    text: "LktButton",
                    events: {
                      click: () => {
                        d(B(se).LktButton);
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16)
          ])
        ]),
        _: 1
      }, 16);
    };
  }
}), Ku = { class: "lkt-flex-row" }, Yu = { class: "lkt-flex-col-9 lkt-grid-1" }, Xu = { class: "lkt-flex-col-3 lkt-grid-1" }, Ju = { class: "lkt-grid-1" }, Qu = { class: "lkt-grid-1" }, ed = { class: "lkt-grid-1" }, td = { class: "lkt-grid-1" }, id = { class: "lkt-grid-1" }, ld = /* @__PURE__ */ be({
  __name: "LktElementConfigModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    element: {},
    parent: {},
    parentChildren: {},
    indexInParentChildren: {},
    onUpdate: {},
    fileBrowserConfig: {},
    parentLayoutComponent: {}
  },
  setup(e) {
    var O, N;
    const t = e;
    console.log("tableRef: ", t.parentLayoutComponent);
    const l = Q(t.element), o = () => {
      t.parentChildren.splice(t.indexInParentChildren, 1), el(t.modalName, t.modalKey);
    }, i = (M) => {
      var w;
      return M.id = 0, (w = M.children) == null || w.forEach((D) => i(D)), M;
    }, a = () => i(os(t.element)), d = () => {
      t.parentChildren.splice(t.indexInParentChildren - 1, 0, a()), t.indexInParentChildren += 1;
    }, f = () => {
      t.parentChildren.splice(t.indexInParentChildren + 1, 0, a());
    }, n = Io(), b = yn(), u = [se.LktLayoutBox, se.LktLayoutAccordion, se.LktTextBox, se.LktTextAccordion, se.LktTextBanner].includes(l.value.type), v = [se.LktTextBanner].includes(l.value.type), k = [se.LktTextBanner].includes(l.value.type), x = [se.LktTextBanner].includes(l.value.type), L = [se.LktTextBanner].includes(l.value.type), R = [se.LktLayoutBox, se.LktLayoutAccordion, se.LktTextBox, se.LktTextAccordion, se.LktIcon, se.LktButton, se.LktAnchor].includes(l.value.type), s = [se.LktLayoutBox, se.LktLayoutAccordion, se.LktLayout].includes(l.value.type);
    [se.LktImage].includes(l.value.type);
    const r = [se.LktLayoutAccordion, se.LktTextAccordion].includes(l.value.type), c = [se.LktLayoutAccordion, se.LktLayoutBox, se.LktLayout].includes(l.value.type), p = [Ge.FlexRow, Ge.FlexRows].includes((N = (O = t.parent) == null ? void 0 : O.layout) == null ? void 0 : N.type), m = [
      {
        value: qe.Auto,
        label: "Auto"
      },
      {
        value: qe.Always,
        label: "Always"
      },
      {
        value: qe.Lazy,
        label: "Lazy"
      },
      {
        value: qe.Ever,
        label: "Ever"
      }
    ], g = [
      {
        value: Al.Static,
        label: "Static"
      },
      {
        value: Al.Parallax,
        label: "Parallax"
      }
    ], h = [
      {
        value: Ge.Grid,
        label: "Grid"
      },
      {
        value: Ge.FlexRow,
        label: "Flex Row"
      },
      {
        value: Ge.FlexRows,
        label: "Flex Rows"
      },
      {
        value: Ge.FlexColumn,
        label: "Flex Column"
      }
    ], _ = [
      {
        value: "1",
        label: "Default: 1"
      },
      {
        value: "2",
        label: "Default: 2"
      },
      {
        value: "3",
        label: "Default: 3"
      },
      {
        value: "4",
        label: "Default: 4"
      },
      {
        value: "5",
        label: "Default: 5"
      },
      {
        value: "1--from-768",
        label: "From 768px: 1"
      },
      {
        value: "2--from-768",
        label: "From 768px: 2"
      },
      {
        value: "3--from-768",
        label: "From 768px: 3"
      },
      {
        value: "4--from-768",
        label: "From 768px: 4"
      },
      {
        value: "5--from-768",
        label: "From 768px: 5"
      }
    ], C = [
      {
        value: "lkt-flex-col-1",
        label: "Default: 1"
      },
      {
        value: "lkt-flex-col-2",
        label: "Default: 2"
      },
      {
        value: "lkt-flex-col-3",
        label: "Default: 3"
      },
      {
        value: "lkt-flex-col-4",
        label: "Default: 4"
      },
      {
        value: "lkt-flex-col-5",
        label: "Default: 5"
      },
      {
        value: "lkt-flex-col-6",
        label: "Default: 6"
      },
      {
        value: "lkt-flex-col-7",
        label: "Default: 7"
      },
      {
        value: "lkt-flex-col-8",
        label: "Default: 8"
      },
      {
        value: "lkt-flex-col-9",
        label: "Default: 9"
      },
      {
        value: "lkt-flex-col-10",
        label: "Default: 10"
      },
      {
        value: "lkt-flex-col-11",
        label: "Default: 11"
      },
      {
        value: "lkt-flex-col-12",
        label: "Default: 12"
      },
      {
        value: "lkt-flex-col-1--from-768",
        label: "From 768px: 1"
      },
      {
        value: "lkt-flex-col-2--from-768",
        label: "From 768px: 2"
      },
      {
        value: "lkt-flex-col-3--from-768",
        label: "From 768px: 3"
      },
      {
        value: "lkt-flex-col-4--from-768",
        label: "From 768px: 4"
      },
      {
        value: "lkt-flex-col-5--from-768",
        label: "From 768px: 5"
      }
    ], y = [
      {
        value: "lkt-align-items-start",
        label: "Default: Start"
      },
      {
        value: "lkt-align-items-center",
        label: "Default: Center"
      },
      {
        value: "lkt-align-items-end",
        label: "Default: End"
      }
    ], S = [
      {
        value: "lkt-justify-content-stretch",
        label: "Default: Stretch"
      },
      {
        value: "lkt-justify-content-center",
        label: "Default: Center"
      },
      {
        value: "lkt-justify-content-space-between",
        label: "Default: Space Between"
      },
      {
        value: "lkt-justify-content-space-around",
        label: "Default: Space Around"
      },
      {
        value: "lkt-justify-content-space-evenly",
        label: "Default: Space Evenly"
      },
      {
        value: "lkt-justify-content-start",
        label: "Default: Start"
      },
      {
        value: "lkt-justify-content-end",
        label: "Default: End"
      }
    ], V = (M, w) => {
      if (M.length > 0) {
        let D = String(w.value), Y = "";
        if (D.includes("--from") && (Y = "--" + D.split("--")[1]), D.includes("--to") && (Y = "--" + D.split("--")[1]), Y !== "") {
          let G = M.find((ee) => String(ee).includes(Y));
          if (G)
            return G === w.value;
        }
        let j = M.find((G) => !String(G).includes("--"));
        if (j)
          return j === D || D.includes("--");
      }
      return !0;
    }, T = (M) => {
      var w;
      return V(
        ((w = l.value.layout) == null ? void 0 : w.amountOfItems) ?? [],
        M
      );
    }, z = (M) => {
      var w;
      return V(
        ((w = l.value.layout) == null ? void 0 : w.alignItems) ?? [],
        M
      );
    }, A = (M) => {
      var w;
      return V(
        ((w = l.value.layout) == null ? void 0 : w.justifyContent) ?? [],
        M
      );
    }, q = (M) => {
      var w;
      return V(
        ((w = l.value.layout) == null ? void 0 : w.columns) ?? [],
        M
      );
    }, Z = te(() => {
      let M = {};
      switch (l.value.type) {
        case se.LktLayoutBox:
        case se.LktTextBox:
          M = Ye.defaultFieldLktBoxElementCustomClassField;
          break;
        case se.LktLayoutAccordion:
        case se.LktTextAccordion:
          M = Ye.defaultFieldLktAccordionElementCustomClassField;
          break;
        case se.LktIcon:
          M = Ye.defaultFieldLktIconElementCustomClassField;
          break;
        case se.LktImage:
          M = Ye.defaultFieldLktImageElementCustomClassField;
          break;
      }
      return Object.keys(M).length > 0 ? es(M, Ye.defaultFieldElementCustomClassField) : void 0;
    }), U = te(() => No(Ao(l.value.type)) + " Config"), F = (M) => {
      l.value.props.alt = M[0].nameData, l.value.props.title = M[0].nameData;
    }, P = Q(!1);
    ue(() => t.element, (M) => {
      console.log("updating model value"), P.value = !0, l.value = M, zt(() => {
        P.value = !1;
      });
    });
    let I;
    return ue([
      () => l.value.props,
      () => l.value.config,
      () => l.value.layout
    ], (M, w) => {
      P.value || (console.log("clear timeout porque ya hay uno"), clearTimeout(I), console.log("crear nuevo timeout"), I = setTimeout(() => {
        console.log("ejecutar el timeout"), t.element.feed({
          props: M[0],
          config: M[1],
          layout: M[2]
        }), t.element.updateKeyMoment(), t.parent && t.parent.updateKeyMoment(), clearTimeout(I);
      }, 1e3));
    }, { deep: !0 }), ue(() => l.value.config.amountOfCallToActions, (M) => {
      console.log("updated amount of cta: ", M);
      let w = l.value.config.callToActions.length;
      M > w ? l.value.config.callToActions.push(xn()) : l.value.config.callToActions.splice(M, 1);
    }), (M, w) => {
      const D = de("lkt-accordion"), Y = de("lkt-button"), j = de("lkt-item-crud");
      return H(), X(j, re({
        class: "lkt-web-element-config-modal",
        modelValue: l.value,
        "onUpdate:modelValue": w[2] || (w[2] = (G) => l.value = G)
      }, {
        mode: B(Gi).Update,
        view: B(Sn).Modal,
        editing: !0,
        perms: ["update"],
        title: U.value,
        modalConfig: {
          modalName: M.modalName,
          modalKey: M.modalKey,
          zIndex: M.zIndex,
          title: U.value
        },
        updateButton: !1
      }), {
        item: ae(({ item: G }) => {
          var ee;
          return [
            fe("div", Ku, [
              fe("div", Yu, [
                K(Ji, {
                  modelValue: l.value,
                  "onUpdate:modelValue": w[0] || (w[0] = ($) => l.value = $),
                  "is-preview": "",
                  "parent-children": M.parentChildren,
                  index: M.indexInParentChildren,
                  "can-render-actions": !1
                }, null, 8, ["modelValue", "parent-children", "index"]),
                (H(!0), oe(He, null, Qe(B(n), ($) => (H(), oe(He, null, [
                  $ !== B(b) ? (H(), X(D, re({
                    key: 0,
                    ref_for: !0
                  }, {
                    type: B(qe).Auto,
                    title: $
                  }), {
                    default: ae(() => [
                      K(Ji, {
                        modelValue: l.value,
                        "onUpdate:modelValue": w[1] || (w[1] = (ne) => l.value = ne),
                        lang: $,
                        "is-preview": "",
                        "parent-children": M.parentChildren,
                        index: M.indexInParentChildren,
                        "can-render-actions": !1
                      }, null, 8, ["modelValue", "lang", "parent-children", "index"])
                    ]),
                    _: 2
                  }, 1040)) : le("", !0)
                ], 64))), 256))
              ]),
              fe("div", Xu, [
                B(c) ? (H(), X(Y, Ce(re({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-field-add-element-config",
                  modalData: {
                    items: G.children,
                    index: (ee = G.children) == null ? void 0 : ee.length,
                    element: G,
                    addingChildren: !0,
                    fileBrowserConfig: M.fileBrowserConfig,
                    parentLayoutComponent: M.parentLayoutComponent
                  }
                })), null, 16)) : le("", !0),
                K(D, Ce(ze({
                  type: B(qe).Auto,
                  title: "Config",
                  modelValue: !0,
                  toggleMode: B(Ln).Display
                })), {
                  default: ae(() => [
                    fe("div", Ju, [
                      Z.value ? (H(), X(Be, re({ key: 0 }, {
                        type: B(W).Select,
                        ...Z.value,
                        canClear: !0
                      }, {
                        modelValue: G.props.class,
                        "onUpdate:modelValue": ($) => G.props.class = $
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      B(u) ? (H(), X(Be, re({ key: 1 }, {
                        type: B(W).Switch,
                        label: "Has header"
                      }, {
                        modelValue: G.config.hasHeader,
                        "onUpdate:modelValue": ($) => G.config.hasHeader = $
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      B(v) ? (H(), X(Be, re({ key: 2 }, {
                        type: B(W).Switch,
                        label: "Has sub-header"
                      }, {
                        modelValue: G.config.hasSubHeader,
                        "onUpdate:modelValue": ($) => G.config.hasSubHeader = $
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      B(R) ? (H(), X(Be, re({ key: 3 }, {
                        type: B(W).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: G.config.hasIcon,
                        "onUpdate:modelValue": ($) => G.config.hasIcon = $
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      B(R) ? (H(), X(Be, re({ key: 4 }, {
                        type: B(W).Text,
                        label: "Icon"
                      }, {
                        modelValue: G.props.icon,
                        "onUpdate:modelValue": ($) => G.props.icon = $,
                        disabled: !G.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : le("", !0),
                      B(x) ? (H(), X(Be, re({ key: 5 }, {
                        type: B(W).Image,
                        label: "Media content",
                        fileBrowserConfig: M.fileBrowserConfig
                      }, {
                        modelValue: G.props.media.src,
                        "onUpdate:modelValue": ($) => G.props.media.src = $,
                        onPickedFiles: F
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      B(x) ? (H(), X(Be, re({ key: 6 }, {
                        type: B(W).Select,
                        label: "Type",
                        options: g
                      }, {
                        modelValue: G.props.type,
                        "onUpdate:modelValue": ($) => G.props.type = $
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      B(k) ? (H(), X(Be, re({ key: 7 }, {
                        type: B(W).Image,
                        label: "Background Image",
                        fileBrowserConfig: M.fileBrowserConfig
                      }, {
                        modelValue: G.props.art.src,
                        "onUpdate:modelValue": ($) => G.props.art.src = $,
                        onPickedFiles: F
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      fe("div", null, [
                        B(L) ? (H(), X(Be, re({ key: 0 }, {
                          type: B(W).Number,
                          label: "Background opacity",
                          min: 0,
                          max: 1,
                          step: 0.1,
                          canStep: !0
                        }, {
                          modelValue: G.props.opacity,
                          "onUpdate:modelValue": ($) => G.props.opacity = $
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                        B(L) ? (H(), X(Be, re({ key: 1 }, {
                          type: B(W).Range,
                          min: 0,
                          max: 1,
                          step: 0.1
                        }, {
                          modelValue: G.props.opacity,
                          "onUpdate:modelValue": ($) => G.props.opacity = $
                        }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0)
                      ]),
                      B(x) ? (H(), X(Be, re({ key: 8 }, {
                        type: B(W).Number,
                        label: "Amount of CTA's",
                        min: 0,
                        max: 2,
                        step: 1,
                        canStep: !0
                      }, {
                        modelValue: G.config.amountOfCallToActions,
                        "onUpdate:modelValue": ($) => G.config.amountOfCallToActions = $
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040),
                G.config.amountOfCallToActions > 0 ? (H(!0), oe(He, { key: 1 }, Qe(G.config.callToActions, ($) => (H(), X(D, re({ ref_for: !0 }, {
                  type: B(qe).Auto,
                  title: "CTA #1"
                }), {
                  default: ae(() => [
                    fe("div", Qu, [
                      K(Be, re({ ref_for: !0 }, {
                        type: B(W).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: $.config.hasIcon,
                        "onUpdate:modelValue": (ne) => $.config.hasIcon = ne
                      }), null, 16, ["modelValue", "onUpdate:modelValue"]),
                      K(Be, re({ ref_for: !0 }, {
                        type: B(W).Text,
                        label: "Icon"
                      }, {
                        modelValue: $.props.icon,
                        "onUpdate:modelValue": (ne) => $.props.icon = ne,
                        disabled: !$.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ])
                  ]),
                  _: 2
                }, 1040))), 256)) : le("", !0),
                B(r) ? (H(), X(D, Ce(re({ key: 2 }, {
                  type: B(qe).Auto,
                  title: "Accordion Config"
                })), {
                  default: ae(() => [
                    fe("div", ed, [
                      K(Be, re({
                        type: B(W).Select,
                        label: "Type",
                        options: m
                      }, {
                        modelValue: G.props.type,
                        "onUpdate:modelValue": ($) => G.props.type = $
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : le("", !0),
                B(s) || B(p) ? (H(), X(D, Ce(re({ key: 3 }, {
                  type: B(qe).Auto,
                  title: "Layout Config"
                })), {
                  default: ae(() => [
                    fe("div", td, [
                      B(s) ? (H(), X(Be, re({ key: 0 }, {
                        type: B(W).Select,
                        label: "Type",
                        options: h
                      }, {
                        modelValue: G.layout.type,
                        "onUpdate:modelValue": ($) => G.layout.type = $
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      B(s) && G.layout.type !== B(Ge).FlexColumn ? (H(), X(Be, re({ key: 1 }, {
                        type: B(W).Select,
                        label: G.layout.type === B(Ge).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: _,
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: T
                        }
                      }, {
                        modelValue: G.layout.amountOfItems,
                        "onUpdate:modelValue": ($) => G.layout.amountOfItems = $
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      B(s) ? (H(), X(Be, re({ key: 2 }, {
                        type: B(W).Select,
                        label: "Align items",
                        options: y,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: z
                        }
                      }, {
                        modelValue: G.layout.alignItems,
                        "onUpdate:modelValue": ($) => G.layout.alignItems = $
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      B(s) ? (H(), X(Be, re({ key: 3 }, {
                        type: B(W).Select,
                        label: "Justify content",
                        options: S,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: A
                        }
                      }, {
                        modelValue: G.layout.justifyContent,
                        "onUpdate:modelValue": ($) => G.layout.justifyContent = $
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      B(p) ? (H(), X(Be, re({ key: 4 }, {
                        type: B(W).Select,
                        label: "Columns Reserved",
                        options: C,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: q
                        }
                      }, {
                        modelValue: G.layout.columns,
                        "onUpdate:modelValue": ($) => G.layout.columns = $
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : le("", !0),
                K(Y, Ce(ze({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: B(Rt).Split
                })), {
                  split: ae(({ doClose: $ }) => [
                    fe("div", id, [
                      K(Y, Ce(ze({
                        text: "Before",
                        events: {
                          click: d
                        }
                      })), null, 16),
                      K(Y, Ce(ze({
                        text: "After",
                        events: {
                          click: f
                        }
                      })), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16),
                K(Y, Ce(ze({
                  text: "Remove element",
                  icon: "lkt-icn-less",
                  events: {
                    click: o
                  }
                })), null, 16)
              ])
            ])
          ];
        }),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), nd = { class: "lkt-file-entity-main" }, od = /* @__PURE__ */ be({
  __name: "FileEntityBox",
  props: {
    modelValue: {}
  },
  emits: [
    "double-click"
  ],
  setup(e, { emit: t }) {
    const l = e, o = t, i = Q(l.modelValue), a = Q(0);
    let d;
    const f = () => {
      ++a.value, a.value === 1 ? d = setTimeout(() => {
        i.value.isPicked = !i.value.isPicked, a.value = 0;
      }, 225) : (clearTimeout(d), o("double-click", i.value), a.value = 0);
    }, n = te(() => i.value.isPicked ? "lkt-icn-checkbox" : "lkt-icn-checkbox-empty");
    return (b, u) => {
      const v = de("lkt-icon"), k = de("lkt-image");
      return H(), oe("div", {
        class: "lkt-file-entity-box",
        onClick: f
      }, [
        fe("div", nd, [
          i.value.type !== B(Je).Directory ? (H(), oe("i", {
            key: 0,
            class: Te(["lkt-file-entity-picked-indicator", n.value])
          }, null, 2)) : le("", !0),
          i.value.type === B(Je).Directory ? (H(), X(v, Ce(re({ key: 1 }, {
            icon: "lkt-icn-folder",
            text: i.value.name
          })), null, 16)) : i.value.type === B(Je).Image ? (H(), X(k, Ce(re({ key: 2 }, {
            src: i.value.src,
            text: i.value.name
          })), null, 16)) : le("", !0)
        ])
      ]);
    };
  }
}), sd = { class: "lkt-file-entity-details" }, ad = {
  key: 0,
  class: "lkt-grid-1"
}, rd = /* @__PURE__ */ be({
  __name: "FileEntityDetails",
  props: {
    editMode: { type: Boolean, default: !1 },
    modelValue: {},
    fileBrowserConfig: {}
  },
  setup(e) {
    const l = Q(e.modelValue);
    return (o, i) => {
      const a = de("lkt-field");
      return H(), oe("div", sd, [
        l.value.type === B(Je).Image ? (H(), oe("div", ad, [
          K(a, re({
            modelValue: l.value.src,
            "onUpdate:modelValue": i[0] || (i[0] = (d) => l.value.src = d)
          }, {
            type: B(W).Image,
            label: "File",
            readMode: !o.editMode
          }), null, 16, ["modelValue"]),
          K(a, re({
            modelValue: l.value.name,
            "onUpdate:modelValue": i[1] || (i[1] = (d) => l.value.name = d)
          }, {
            type: B(W).Text,
            label: "Name",
            readMode: !o.editMode
          }), null, 16, ["modelValue"])
        ])) : le("", !0)
      ]);
    };
  }
}), ud = { class: "lkt-flex-row" }, dd = { class: "lkt-flex-col-3" }, cd = { class: "lkt-flex-column" }, fd = { class: "lkt-flex-col-9" }, pd = /* @__PURE__ */ be({
  __name: "LktFileBrowserModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    fileBrowserConfig: {},
    modelValue: { default: () => [] },
    onConfirmSelection: { type: Function, default: void 0 }
  },
  emits: [],
  setup(e, { emit: t }) {
    const l = e, o = Q(!1), i = Q([]), a = Q({}), d = Q(void 0), f = Q(l.modelValue), n = (c) => {
      d.value = void 0, zt(() => {
        d.value = c;
      });
    }, b = () => {
      var p, m, g;
      let c = new Rl();
      c.parent = (p = d.value) == null ? void 0 : p.id, (g = (m = d.value) == null ? void 0 : m.children) == null || g.push(c), n(c);
    }, u = (c, p) => {
      for (let m in p) {
        if (p[m].id === c) return p[m];
        if (p[m].children.length > 0) {
          let g = u(c, p[m].children);
          if (g) return g;
        }
      }
    }, v = () => {
      var c, p;
      if ((c = d.value) != null && c.parent) {
        let m = u((p = d.value) == null ? void 0 : p.parent, i.value);
        m && n(m);
      }
    }, k = () => {
      let c = [];
      f.value.forEach((p) => {
        let m = u(p, i.value);
        m && c.push(m);
      }), typeof l.onConfirmSelection == "function" && l.onConfirmSelection(c), el(l.modalName, l.modalKey);
    }, x = te(() => {
      var c;
      switch ((c = d.value) == null ? void 0 : c.type) {
        case Je.Image:
          return "lkt-icn-picture";
        case Je.Directory:
          return "lkt-icn-folder-open";
        default:
          return "";
      }
    }), L = (c) => {
      switch (c.type) {
        case Je.Image:
          return "lkt-icn-picture";
        case Je.Directory:
          return "lkt-icn-folder";
        default:
          return "";
      }
    }, R = (c) => {
      let p = L(c), m = {};
      return p !== "" && (m = {
        icon: p,
        position: ts.Start
      }), {
        key: String(c.id),
        type: ls.Anchor,
        anchor: {
          icon: m,
          text: c.name,
          type: is.Action,
          events: {
            click: () => {
              n(c);
            }
          }
        },
        keepOpenOnChildClick: !0,
        // class?: string;
        // icon?: string;
        children: c.children ? c.children.map(R) : []
      };
    }, s = (c) => {
      c.forEach((p) => {
        var m;
        p.isPicked && f.value.push(p.id), ((m = p.children) == null ? void 0 : m.length) > 0 && s(p.children);
      });
    }, r = () => {
      var c, p;
      (p = (c = l.fileBrowserConfig) == null ? void 0 : c.http) != null && p.resource && (o.value = !0, Vi(l.fileBrowserConfig.http.resource, l.fileBrowserConfig.http.data).then((m) => {
        o.value = !1, i.value = m.data.map((g) => new Rl(g)), console.log("new mapped items: ", i.value), i.value.length > 0 && n(i.value[0]), i.value.forEach((g, h) => {
          var C;
          let _ = `unit-${h}`;
          a.value[_] = ((C = g.children) == null ? void 0 : C.map(R)) ?? [];
        });
      }).catch((m) => {
        o.value = !1;
      }));
    };
    return ue(d, (c) => {
      console.log("updatedActiveElement: ", c);
    }, { deep: !0 }), ue(i, (c) => {
      console.log("updatedItems: ", c), f.value = [], s(i.value), console.log("pickedItems: ", f.value);
    }, { deep: !0 }), Fi(() => {
      r();
    }), (c, p) => {
      const m = de("lkt-menu"), g = de("lkt-accordion"), h = de("lkt-button"), _ = de("lkt-table"), C = de("lkt-item-crud"), y = de("lkt-modal");
      return H(), X(y, {
        "modal-name": c.modalName,
        "modal-key": c.modalKey,
        "z-index": c.zIndex,
        title: "File Browser",
        class: "lkt-file-browser"
      }, {
        default: ae(() => [
          fe("div", ud, [
            fe("div", dd, [
              (H(!0), oe(He, null, Qe(i.value, (S, V) => (H(), X(g, re({ ref_for: !0 }, {
                modelValue: V === 0,
                title: S.name,
                toggleMode: B(Ln).Display,
                type: i.value.length === 1 ? B(qe).Always : B(qe).Auto
              }), {
                default: ae(() => [
                  fe("div", cd, [
                    K(m, re({ ref_for: !0 }, {
                      modelValue: a.value[`unit-${V}`]
                    }), null, 16)
                  ])
                ]),
                _: 2
              }, 1040))), 256))
            ]),
            fe("div", fd, [
              d.value ? (H(), X(g, Ce(re({ key: 0 }, {
                type: B(qe).Always,
                icon: x.value,
                title: d.value.name
              })), {
                default: ae(() => {
                  var S, V;
                  return [
                    [B(Je).Directory, B(Je).StorageUnit].includes(d.value.type) ? (H(), X(_, re({
                      key: 0,
                      modelValue: d.value.children,
                      "onUpdate:modelValue": p[0] || (p[0] = (T) => d.value.children = T)
                    }, {
                      type: B(Mi).Item,
                      perms: [
                        B(pt).SwitchEditMode,
                        B(pt).Update,
                        B(pt).Edit,
                        B(pt).Create
                      ],
                      itemsContainerClass: "lkt-flex-rows-12 lkt-flex-rows-2--from-768",
                      saveButton: {
                        text: "Save",
                        type: B(Rt).Button
                      },
                      createButton: {
                        text: "Create",
                        type: B(Rt).Button
                      }
                    }, { onClickCreate: b }), ut({
                      item: ae(({ item: T, index: z }) => [
                        K(od, {
                          modelValue: d.value.children[z],
                          "onUpdate:modelValue": (A) => d.value.children[z] = A,
                          onDoubleClick: n
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, [
                      d.value.type !== B(Je).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: ae(() => [
                          K(h, Ce(ze({
                            icon: "lkt-icn-arrow-left",
                            events: {
                              click: v
                            }
                          })), null, 16),
                          K(h, Ce(ze({
                            icon: "lkt-icn-check",
                            disabled: f.value.length === 0,
                            events: {
                              click: k
                            }
                          })), null, 16)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : (H(), X(C, re({
                      key: 1,
                      modelValue: d.value,
                      "onUpdate:modelValue": p[2] || (p[2] = (T) => d.value = T)
                    }, {
                      view: B(Sn).Inline,
                      mode: d.value.id ? B(Gi).Update : B(Gi).Create,
                      editing: !1,
                      perms: ["switch-edit-mode", "update"],
                      createButton: {
                        ...(S = c.fileBrowserConfig) == null ? void 0 : S.entityCreateButton,
                        resourceData: d.value,
                        events: {
                          click: () => {
                            for (let T in d.value)
                              c.modelValue[T] = c.entity[T];
                          }
                        }
                      },
                      updateButton: {
                        ...(V = c.fileBrowserConfig) == null ? void 0 : V.entityUpdateButton,
                        resourceData: d.value,
                        events: {
                          click: () => {
                            for (let T in d.value)
                              c.modelValue[T] = c.entity[T];
                          }
                        }
                      }
                    }), ut({
                      item: ae(({ item: T, editMode: z }) => [
                        K(rd, {
                          modelValue: d.value,
                          "onUpdate:modelValue": p[1] || (p[1] = (A) => d.value = A),
                          "file-browser-config": c.fileBrowserConfig,
                          "edit-mode": z
                        }, null, 8, ["modelValue", "file-browser-config", "edit-mode"])
                      ]),
                      _: 2
                    }, [
                      d.value.type !== B(Je).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: ae(() => [
                          K(h, Ce(ze({
                            icon: "lkt-icn-arrow-left",
                            events: {
                              click: v
                            }
                          })), null, 16)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"]))
                  ];
                }),
                _: 1
              }, 16)) : le("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modal-name", "modal-key", "z-index"]);
    };
  }
}), kd = (e, t) => (ie.customValueSlots[e] = t, !0), xd = (e, t) => (ie.customEditSlots[e] = t, !0), Sd = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", Be), li("lkt-field-language-edit", Wu), li("lkt-field-add-element-config", Gu), li("lkt-web-element-config", ld), li("lkt-file-browser", pd));
  }
}, Ld = (e) => {
  ie.defaultEmptyValueSlot = e;
}, Ed = (e, t) => {
  ie.optionSlots[e] = t;
}, Td = (e) => ie.undoText = e, Bd = (e) => ie.clearText = e, zd = (e) => ie.i18nText = e, Nd = (e) => ie.switchEditionOnText = e, Ad = (e) => ie.switchEditionOffText = e, Rd = (e) => ie.showPasswordOnText = e, Id = (e) => ie.showPasswordOffText = e, Vd = (e) => ie.dateReadFormat = e, Dd = (e) => ie.defaultDateReadFormat = e, Md = (e, t, l = "default") => {
  l || (l = "default"), ie.validationMessages[l] || (ie.validationMessages[l] = {}), ie.validationMessages[l][e] = t;
}, Hd = (e) => (ie.validationIconSlot = e, !0), Fd = (e = 2, t = ".", l = ".", o = !0, i = "") => i !== "" ? (ie.langNumberFormat[i].amountOfDecimals = e, ie.langNumberFormat[i].decimalSeparator = t, ie.langNumberFormat[i].thousandsSeparator = l, ie.langNumberFormat[i].removeDecimalsIfZero = o, !0) : (ie.amountOfDecimals = e, ie.decimalSeparator = t, ie.thousandsSeparator = l, ie.removeDecimalsIfZero = o, !0), Od = (e) => {
  ie.readTextMaxLength = e;
}, Ud = (e, t) => {
  ie.modalPerItemType[e] = t;
};
export {
  $d as Field,
  Be as LktField,
  Zd as Option,
  Sd as default,
  Bd as setFieldClearText,
  Vd as setFieldDateReadFormat,
  Dd as setFieldDefaultDateReadFormat,
  Ld as setFieldEmptySlot,
  zd as setFieldI18nText,
  Fd as setFieldNumberFormat,
  Ed as setFieldOptionSlot,
  Id as setFieldShowPasswordOffText,
  Rd as setFieldShowPasswordOnText,
  Ad as setFieldSwitchEditionOffText,
  Nd as setFieldSwitchEditionOnText,
  Td as setFieldUndoText,
  Hd as setFieldValidationIconSlot,
  Md as setFieldValidationMessage,
  Ud as setModalPerItemType,
  Od as setReadTextMaxLength,
  xd as setTextEditSlot,
  kd as setTextValueSlot
};
