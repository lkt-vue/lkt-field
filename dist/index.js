import { defineComponent as be, computed as ee, resolveComponent as re, createBlock as G, openBlock as F, normalizeClass as Te, ref as Y, watch as de, withCtx as se, createCommentVNode as le, resolveDynamicComponent as Nt, mergeProps as ue, createElementBlock as oe, createElementVNode as fe, toDisplayString as Et, Fragment as Ve, renderList as rt, createVNode as j, unref as N, normalizeStyle as ji, withDirectives as Ze, vModelCheckbox as _o, onMounted as Hi, vModelText as Oi, vShow as xt, nextTick as Ot, createTextVNode as Ut, useSlots as Qi, renderSlot as at, createStaticVNode as Co, createSlots as Tt, setBlockTracking as Ll, normalizeProps as we, guardReactiveProps as Be, mergeDefaults as wo, isRef as Ye, vModelDynamic as ko } from "vue";
import { stripTags as mn, fill as xo, generateRandomString as So, formatNumber as El, isEmail as Lo, ucfirst as Eo, kebabCaseToCamelCase as To } from "lkt-string-tools";
import { httpCall as Di } from "lkt-http-client";
import { __ as gn, getCurrentLanguage as vn, currentLanguage as bn, availableLanguages as Bo, getAvailableLanguages as zo } from "lkt-i18n";
import { extractPropValue as St, LktSettings as Ke, Option as Mi, FieldType as Z, LktColor as yn, TooltipLocationX as _n, TooltipLocationY as Cn, ButtonType as At, FieldValidation as De, ValidationStatus as Me, MultipleOptionsDisplay as si, TableType as Vi, booleanFieldTypes as Lt, WebElementType as pe, WebElementLayoutType as qe, TablePermission as ft, WebElement as No, fieldsWithMultipleMode as Ao, FieldValidationType as Tl, extractI18nValue as jt, fieldTypesWithoutUndo as Ro, fieldTypesWithoutClear as Io, FieldAutoValidationTrigger as Do, textFieldTypes as Mo, fieldTypesWithOptions as Bl, getDefaultValues as Vo, Field as Fo, ToastPositionX as zl, AccordionType as je, getDefaultLktTextWebElement as Ho, getDefaultLktHeaderWebElement as Oo, getDefaultLktLayoutWebElement as Uo, getDefaultLktButtonWebElement as Po, getDefaultLktAnchorWebElement as Wo, getDefaultLktImageWebElement as $o, getDefaultLktIconWebElement as Zo, getDefaultLktTextAccordionWebElement as qo, getDefaultLktLayoutAccordionWebElement as jo, getDefaultLktTextBoxWebElement as Go, getDefaultLktLayoutBoxWebElement as Ko, ensureFieldConfig as Yo, ItemCrudView as wn, ItemCrudMode as Gi, FileEntityType as Je, AccordionToggleMode as Xo, FileEntity as Nl, IconPosition as Jo, AnchorType as Qo, MenuEntryType as es } from "lkt-vue-kernel";
import { Field as Vd, Option as Fd } from "lkt-vue-kernel";
import { date as Gt } from "lkt-date-tools";
import { openToast as Al } from "lkt-toast";
import { closeModal as kn, addModal as li } from "lkt-modal";
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
let te = ke;
const xn = /* @__PURE__ */ be({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, n = e, l = ee(() => te.undoText), a = ee(() => n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), u = () => i("click");
    return (c, o) => {
      const b = re("lkt-button");
      return F(), G(b, {
        text: c.insideEllipsis ? l.value : "",
        title: l.value,
        class: Te([a.value, "lkt-field--btn-undo"]),
        icon: "lkt-icn-undo",
        onClick: u
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Sn = /* @__PURE__ */ be({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, n = e, l = ee(() => te.clearText), a = ee(() => n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), u = () => i("click");
    return (c, o) => {
      const b = re("lkt-button");
      return F(), G(b, {
        text: c.insideEllipsis ? l.value : "",
        title: l.value,
        class: Te(a.value),
        icon: "lkt-icn-cancel",
        onClick: u
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
    const i = t, n = e, l = Y(n.modelValue);
    de(() => n.modelValue, (b) => l.value = b), de(l, (b) => i("update:modelValue", b));
    const a = ee(() => l.value ? te.showPasswordOnText : te.showPasswordOffText), u = ee(() => l.value === !0 ? "lkt-icn-see" : "lkt-icn-not-see"), c = ee(() => n.isFeatured ? "lkt-field--atn-btn" : n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (b, d) => {
      const v = re("lkt-button");
      return F(), G(v, {
        text: b.insideEllipsis ? a.value : "",
        title: a.value,
        class: Te(c.value),
        icon: u.value,
        onClick: o,
        checked: l.value,
        "onUpdate:checked": d[0] || (d[0] = (w) => l.value = w),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Ln = /* @__PURE__ */ be({
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
    const i = t, n = e, l = Y(n.modelValue);
    de(() => n.modelValue, (b) => l.value = b), de(l, (b) => i("update:modelValue", b));
    const a = ee(() => l.value ? te.switchEditionOnText : te.switchEditionOffText), u = ee(() => l.value === !0 ? "lkt-icon-see" : "lkt-icn-edit"), c = ee(() => n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (b, d) => {
      const v = re("lkt-button");
      return F(), G(v, {
        text: b.insideEllipsis ? a.value : "",
        title: a.value,
        class: Te(c.value),
        icon: u.value,
        onClick: o,
        checked: l.value,
        "onUpdate:checked": d[0] || (d[0] = (w) => l.value = w),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), ts = /* @__PURE__ */ be({
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
    const i = t, n = e, l = Y(n.showPasswordCheck);
    de(() => n.showPasswordCheck, (u) => l.value = u), de(l, (u) => i("update:showPasswordCheck", u));
    const a = Y(n.showEditionCheck);
    return de(() => n.showEditionCheck, (u) => a.value = u), de(a, (u) => i("update:showEditionCheck", u)), (u, c) => {
      const o = re("lkt-button");
      return F(), G(o, {
        split: "",
        "split-icon": "lkt-icn-ellipsis-menu-vertical",
        class: "lkt-field--info-btn"
      }, {
        split: se(({ doClose: b }) => [
          u.showUndo ? (F(), G(xn, {
            key: 0,
            onClick: c[0] || (c[0] = () => i("undo")),
            "inside-ellipsis": ""
          })) : le("", !0),
          u.showClear ? (F(), G(Sn, {
            key: 1,
            onClick: c[1] || (c[1] = () => i("clear")),
            "inside-ellipsis": ""
          })) : le("", !0),
          u.showPassword ? (F(), G(Ki, {
            key: 2,
            modelValue: l.value,
            "onUpdate:modelValue": c[2] || (c[2] = (d) => l.value = d),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : le("", !0),
          u.showEdition ? (F(), G(Ln, {
            key: 3,
            modelValue: a.value,
            "onUpdate:modelValue": c[3] || (c[3] = (d) => a.value = d),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : le("", !0)
        ]),
        _: 1
      });
    };
  }
}), Rl = /* @__PURE__ */ be({
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
    const i = t, n = e, l = Y(n.modelValue);
    de(() => n.modelValue, (c) => l.value = c, { deep: !0 }), de(l, (c) => i("update:modelValue", c), { deep: !0 });
    const a = ee(() => te.i18nText), u = ee(() => n.isFeatured ? "lkt-field--atn-btn" : n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (c, o) => {
      const b = re("lkt-button");
      return F(), G(b, {
        text: c.insideEllipsis ? a.value : "",
        title: a.value,
        class: Te(u.value),
        icon: "lkt-icn-lang-picker",
        modal: "lkt-field-language-edit",
        "modal-data": { translations: l.value, type: c.type }
      }, null, 8, ["text", "title", "class", "modal-data"]);
    };
  }
}), is = (e, t, i) => (e = Number(e), t !== !1 && e < t && (e = t), i !== !1 && e > i && (e = i), e), Fi = (e, t) => {
  if (typeof e == "string" && (e = St(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let i = e.substring(3), n = gn(i), l = [];
    for (let a in n) l.push({ value: a, label: n[a] });
    return Ke.i18nOptionsFormatter[i] && (l = Ke.i18nOptionsFormatter[i](l)), Fi(l, t);
  }
  return Array.isArray(e) ? e.length === 0 ? e : e.map((i) => {
    if (typeof i == "object") return new Mi(i);
    if (typeof i == "string" || typeof i == "number")
      return new Mi({
        label: String(i),
        value: i
      });
  }).filter((i) => typeof i < "u") : [];
}, Zi = (e, t = "", i = !0, n = void 0) => {
  if (t === "" && typeof n != "function") return e;
  let l = e;
  const a = String(t).toLowerCase();
  return a !== "" && (l = l.filter((u) => {
    let c = String(u.label).toLowerCase();
    return c.indexOf(a) !== -1 && (i || c !== a);
  })), typeof n == "function" && (l = l.filter((u) => n(u))), l;
}, ni = (e, t) => {
  if (t !== "")
    return e.find((i) => Array.isArray(t) ? t.includes(i.value) : i.value == t);
}, ls = (e, t, i) => {
  const n = /* @__PURE__ */ new Set(), l = [...e, ...Fi(t, i)], a = [];
  return l.forEach((u) => {
    let c = [u.value, u.label].join("-");
    n.has(c) || (a.push(u), n.add(c));
  }), a;
}, ns = (e, t, i) => {
  if (i) {
    if (Array.isArray(t)) {
      let n = t.findIndex((l) => l == e.value);
      return typeof n > "u" ? !1 : n > -1;
    }
    return !1;
  }
  return e.value == t;
}, Ht = (e, t) => {
  let i = t.findIndex((n) => n == e.value);
  return typeof i > "u" && (i = -1), i;
}, el = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), En = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), el(e) ? Gt(t, e) : ""), os = /* @__PURE__ */ be({
  __name: "DropdownButton",
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, n = ee(() => te.undoText), l = ee(() => "lkt-field--info-btn"), a = () => i("click");
    return (u, c) => {
      const o = re("lkt-button");
      return F(), G(o, {
        text: n.value,
        title: n.value,
        class: Te([l.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-icn-angle-bottom",
        onClick: a,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), ss = {
  key: 0,
  class: "lkt-field--dropdown-option--icon-container"
}, as = { class: "lkt-field--dropdown-option--label-container" }, Bt = /* @__PURE__ */ be({
  __name: "DropdownOption",
  props: {
    option: { default: () => new Mi() },
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
    const i = t, n = e, l = ee(() => n.option.icon !== "" ? n.option.icon : typeof n.icon == "function" ? n.icon(n.option) : n.icon), a = ee(() => {
      if (typeof n.text < "u") {
        if (typeof n.text == "function")
          return n.text(n.option);
        if (n.text !== "") return n.text;
      }
      return u.value;
    }), u = ee(() => typeof n.labelFormatter == "function" ? n.labelFormatter(n.option) : n.option.label), c = ee(() => typeof n.customClass == "function" ? n.customClass(n.option) : typeof n.customClass < "u" ? n.customClass : `lkt-opt-${n.option.value}`), o = ee(() => {
      if (n.optionSlot && !(typeof te.optionSlots[n.optionSlot] > "u"))
        return te.optionSlots[n.optionSlot];
    }), b = ee(() => o.value ? o.value : n.isTag ? "lkt-tag" : !n.editable && (n.modal !== "" || n.option.modal !== "") ? "lkt-button" : !n.editable && n.download !== "" ? "lkt-anchor" : "div"), d = ee(() => {
      if (b.value === "lkt-button") {
        let k = n.option.modal;
        n.modal && (k = n.modal);
        let L = k;
        return typeof k == "function" && (L = () => k(n.option)), {
          modal: L,
          modalData: n.modalData,
          modalKey: n.option.value,
          icon: l.value
        };
      }
      if (b.value === "lkt-anchor") {
        let k = n.download;
        typeof n.download == "function" ? k = () => n.download(n.option) : n.download.startsWith("prop:") && (k = n.download.substring(5), k = n.option[k]);
        let L = n.download !== "";
        return {
          href: k,
          target: L ? "_blank" : "",
          download: L
        };
      }
      return b.value === "lkt-tag" ? {
        type: "action-icon",
        icon: "lkt-icn-cancel"
      } : {};
    }), v = () => {
      i("click");
    }, w = () => {
      i("click-icon", n.option);
    };
    return (k, L) => {
      const R = re("lkt-tag");
      return F(), G(Nt(b.value), ue(d.value, {
        class: ["lkt-field--dropdown-option", c.value],
        title: a.value,
        onClick: v,
        onClickIcon: w
      }), {
        default: se(() => [
          l.value && b.value !== "lkt-button" ? (F(), oe("div", ss, [
            fe("i", {
              class: Te(l.value)
            }, null, 2)
          ])) : le("", !0),
          fe("div", as, Et(a.value), 1),
          (F(!0), oe(Ve, null, rt(k.option.tags, (s) => (F(), G(R, ue({ ref_for: !0 }, s), null, 16))), 256))
        ]),
        _: 1
      }, 16, ["class", "title"]);
    };
  }
}), rs = { class: "lkt-field-color--tooltip--rgba-container" }, us = { class: "lkt-field-color--tooltip--numeric-input-container" }, ds = { class: "like-lkt-field-label" }, oi = /* @__PURE__ */ be({
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
    const i = t, n = e, l = Y(n.modelValue);
    return de(() => n.modelValue, (a) => l.value = a), de(l, (a) => i("update:modelValue", a)), (a, u) => (F(), oe("div", rs, [
      fe("div", us, [
        fe("label", ds, Et(a.label), 1),
        j(Ue, ue({
          modelValue: l.value,
          "onUpdate:modelValue": u[0] || (u[0] = (c) => l.value = c)
        }, {
          type: N(Z).Number,
          min: 0,
          max: 255,
          step: 1,
          canStep: !1
        }), null, 16, ["modelValue"])
      ]),
      j(Ue, ue({
        class: ["color-range", a.rangeClass],
        modelValue: l.value,
        "onUpdate:modelValue": u[1] || (u[1] = (c) => l.value = c)
      }, {
        type: N(Z).Range,
        min: 0,
        max: 255,
        step: 1
      }), null, 16, ["class", "modelValue"])
    ]));
  }
}), cs = (e, t, i, n) => new yn({ r: e, g: t, b: i, a: n }).toString(), Il = (e) => yn.fromHexColor(e), fs = (e) => e.getContrastFontColor(), hs = { class: "lkt-grid-1" }, ps = { class: "lkt-field-color--tooltip--rgba-container" }, ms = { class: "lkt-field-color--tooltip--hex-input-container" }, Tn = /* @__PURE__ */ be({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, { emit: t }) {
    const i = t, n = e, l = (R) => {
      if ([0, 1].includes(R.length))
        c.value = 0, o.value = 0, b.value = 0, d.value = 255;
      else if ([7, 9].includes(R.length)) {
        let s = Il(R);
        c.value = s.r, o.value = s.g, b.value = s.b, d.value = s.a;
      }
    }, a = () => {
      v.value = cs(
        c.value,
        o.value,
        b.value,
        d.value
      );
    }, u = () => {
      l(v.value), i("change");
    }, c = Y(255), o = Y(255), b = Y(255), d = Y(255), v = Y(n.modelValue);
    l(v.value), de([c, o, b, d], a), de(() => n.modelValue, (R) => v.value = R), de(v, (R) => i("update:modelValue", R));
    const w = ee(() => fs(Il(v.value))), k = ee(() => v.value === "" || v.value === "#" ? {} : {
      background: v.value,
      "--lkt-btn-bg": v.value,
      color: w.value,
      "--lkt-btn-color": w.value
    }), L = ee(() => v.value === "" || v.value === "#" ? {} : {
      "--lkt-field-bg-input": v.value,
      "--lkt-field-color": w.value
    });
    return (R, s) => {
      const r = re("lkt-button");
      return F(), G(r, {
        class: "lkt-field--toggle-button",
        style: ji(k.value),
        text: v.value,
        type: N(At).Tooltip,
        tooltip: {
          class: "lkt-field-color--tooltip",
          locationY: N(Cn).Bottom,
          locationX: N(_n).LeftCorner
        }
      }, {
        tooltip: se(({ doClose: f }) => [
          fe("div", hs, [
            fe("div", ps, [
              fe("div", ms, [
                s[5] || (s[5] = fe("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                j(Ue, {
                  modelValue: v.value,
                  "onUpdate:modelValue": s[0] || (s[0] = (h) => v.value = h),
                  style: ji(L.value),
                  onChange: u
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            j(oi, {
              modelValue: c.value,
              "onUpdate:modelValue": s[1] || (s[1] = (h) => c.value = h),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            j(oi, {
              modelValue: o.value,
              "onUpdate:modelValue": s[2] || (s[2] = (h) => o.value = h),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            j(oi, {
              modelValue: b.value,
              "onUpdate:modelValue": s[3] || (s[3] = (h) => b.value = h),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            j(oi, {
              modelValue: d.value,
              "onUpdate:modelValue": s[4] || (s[4] = (h) => d.value = h),
              label: "A",
              "range-class": "color-range--alpha"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["style", "text", "type", "tooltip"]);
    };
  }
}), gs = /* @__PURE__ */ be({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, i = Y(t.modelValue), n = ee(() => typeof t.max == "boolean" || i.value.length < t.max ? ["inline-create"] : []);
    return (l, a) => {
      const u = re("lkt-table");
      return F(), G(u, {
        type: "item",
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (c) => i.value = c),
        perms: n.value,
        "edit-mode": l.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: se(({ item: c, index: o, isLoading: b, canCreate: d, canRead: v, canUpdate: w, canDrop: k, doDrop: L }) => [
          j(Tn, {
            modelValue: i.value[o],
            "onUpdate:modelValue": (R) => i.value[o] = R
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
}), vs = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\D+/g, "").length < l && e.push(De.createMinNumbers(l, Me.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/\D+/g, "").length > l && e.push(De.createMaxNumbers(l, Me.Ko));
  }
}, bs = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[^A-Z]+/g, "").length < l && e.push(De.createMinUpperChars(l, Me.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/[^A-Z]+/g, "").length > l && e.push(De.createMaxUpperChars(l, Me.Ko));
  }
}, ys = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[A-Z]+/g, "").length < l && e.push(De.createMinLowerChars(l, Me.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/[A-Z]+/g, "").length > l && e.push(De.createMaxLowerChars(l, Me.Ko));
  }
}, _s = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").length < l && e.push(De.createMinChars(l, Me.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/\d+/g, "").length > l && e.push(De.createMaxChars(l, Me.Ko));
  }
}, Cs = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < l && e.push(De.createMinSpecialChars(l, Me.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > l && e.push(De.createMaxSpecialChars(l, Me.Ko));
  }
}, Dl = (e, t = "default") => {
  if (!e) return "";
  let i = te.validationMessages[t] && te.validationMessages[t][e] ? te.validationMessages[t][e] : "";
  return i || (i = ""), i;
}, ws = { class: "boolean-input" }, ks = { class: "boolean-input-label" }, xs = { class: "boolean-input--check-on" }, Ss = {
  key: 0,
  class: "lkt-icn-ok"
}, Ls = ["innerHTML"], Es = ["name", "id", "disabled", "readonly", "value", "checked"], Ts = /* @__PURE__ */ be({
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
    const i = t, n = e, l = Y(null), a = Y(n.modelValue), u = Y(a.value ? "true" : "false"), c = Y(n.focusing), o = (d) => {
      c.value = !0, i("focus", d);
    }, b = (d) => {
      c.value = !1, i("blur", d);
    };
    return de(() => n.modelValue, (d) => a.value = d), de(a, (d) => i("update:modelValue", d)), (d, v) => (F(), oe("div", ws, [
      fe("div", ks, [
        fe("div", xs, [
          d.type === N(Z).Check && a.value ? (F(), oe("i", Ss)) : le("", !0)
        ])
      ]),
      d.label ? (F(), oe("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: d.label
      }, null, 8, Ls)) : le("", !0),
      Ze(fe("input", {
        "onUpdate:modelValue": v[0] || (v[0] = (w) => a.value = w),
        type: "checkbox",
        ref_key: "input",
        ref: l,
        name: d.name,
        id: d.id,
        disabled: !d.editable || d.disabled,
        readonly: !d.editable || d.readonly,
        value: u.value,
        checked: a.value,
        onFocus: o,
        onBlur: b
      }, null, 40, Es), [
        [_o, a.value]
      ])
    ]));
  }
});
function Se(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ai = { exports: {} }, Bs = ai.exports, Ml;
function zs() {
  return Ml || (Ml = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Bs, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ckb", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(ai)), ai.exports;
}
var Ns = /* @__PURE__ */ zs();
const Bn = /* @__PURE__ */ Se(Ns);
var ri = { exports: {} }, As = ri.exports, Vl;
function Rs() {
  return Vl || (Vl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : As, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "cs", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(ri)), ri.exports;
}
var Is = /* @__PURE__ */ Rs();
const zn = /* @__PURE__ */ Se(Is);
var ui = { exports: {} }, Ds = ui.exports, Fl;
function Ms() {
  return Fl || (Fl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ds, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "da", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(ui)), ui.exports;
}
var Vs = /* @__PURE__ */ Ms();
const Nn = /* @__PURE__ */ Se(Vs);
var di = { exports: {} }, Fs = di.exports, Hl;
function Hs() {
  return Hl || (Hl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Fs, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "de", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(di)), di.exports;
}
var Os = /* @__PURE__ */ Hs();
const An = /* @__PURE__ */ Se(Os);
var ci = { exports: {} }, Us = ci.exports, Ol;
function Ps() {
  return Ol || (Ol = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Us, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "en", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(ci)), ci.exports;
}
var Ws = /* @__PURE__ */ Ps();
const Ui = /* @__PURE__ */ Se(Ws);
var fi = { exports: {} }, $s = fi.exports, Ul;
function Zs() {
  return Ul || (Ul = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : $s, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "es", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(fi)), fi.exports;
}
var qs = /* @__PURE__ */ Zs();
const Rn = /* @__PURE__ */ Se(qs);
var hi = { exports: {} }, js = hi.exports, Pl;
function Gs() {
  return Pl || (Pl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : js, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "fr", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(hi)), hi.exports;
}
var Ks = /* @__PURE__ */ Gs();
const In = /* @__PURE__ */ Se(Ks);
var pi = { exports: {} }, Ys = pi.exports, Wl;
function Xs() {
  return Wl || (Wl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ys, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "he", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(pi)), pi.exports;
}
var Js = /* @__PURE__ */ Xs();
const Dn = /* @__PURE__ */ Se(Js);
var mi = { exports: {} }, Qs = mi.exports, $l;
function ea() {
  return $l || ($l = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Qs, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "hu", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(mi)), mi.exports;
}
var ta = /* @__PURE__ */ ea();
const Mn = /* @__PURE__ */ Se(ta);
var gi = { exports: {} }, ia = gi.exports, Zl;
function la() {
  return Zl || (Zl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG una finestra con un documento");
        return i(n);
      };
    })(typeof window < "u" ? window : ia, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "it", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(gi)), gi.exports;
}
var na = /* @__PURE__ */ la();
const Vn = /* @__PURE__ */ Se(na);
var vi = { exports: {} }, oa = vi.exports, ql;
function sa() {
  return ql || (ql = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : oa, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ja", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(vi)), vi.exports;
}
var aa = /* @__PURE__ */ sa();
const Fn = /* @__PURE__ */ Se(aa);
var bi = { exports: {} }, ra = bi.exports, jl;
function ua() {
  return jl || (jl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ra, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ko", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(bi)), bi.exports;
}
var da = /* @__PURE__ */ ua();
const Hn = /* @__PURE__ */ Se(da);
var yi = { exports: {} }, ca = yi.exports, Gl;
function fa() {
  return Gl || (Gl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ca, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "lv", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(yi)), yi.exports;
}
var ha = /* @__PURE__ */ fa();
const On = /* @__PURE__ */ Se(ha);
var _i = { exports: {} }, pa = _i.exports, Kl;
function ma() {
  return Kl || (Kl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : pa, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "nl", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(_i)), _i.exports;
}
var ga = /* @__PURE__ */ ma();
const Un = /* @__PURE__ */ Se(ga);
var Ci = { exports: {} }, va = Ci.exports, Yl;
function ba() {
  return Yl || (Yl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : va, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "pl", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(Ci)), Ci.exports;
}
var ya = /* @__PURE__ */ ba();
const Pn = /* @__PURE__ */ Se(ya);
var wi = { exports: {} }, _a = wi.exports, Xl;
function Ca() {
  return Xl || (Xl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : _a, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "pt_br", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(wi)), wi.exports;
}
var wa = /* @__PURE__ */ Ca();
const Wn = /* @__PURE__ */ Se(wa);
var ki = { exports: {} }, ka = ki.exports, Jl;
function xa() {
  return Jl || (Jl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ka, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ro", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(ki)), ki.exports;
}
var Sa = /* @__PURE__ */ xa();
const $n = /* @__PURE__ */ Se(Sa);
var xi = { exports: {} }, La = xi.exports, Ql;
function Ea() {
  return Ql || (Ql = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : La, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ru", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(xi)), xi.exports;
}
var Ta = /* @__PURE__ */ Ea();
const Zn = /* @__PURE__ */ Se(Ta);
var Si = { exports: {} }, Ba = Si.exports, en;
function za() {
  return en || (en = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ba, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "se", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(Si)), Si.exports;
}
var Na = /* @__PURE__ */ za();
const qn = /* @__PURE__ */ Se(Na);
var Li = { exports: {} }, Aa = Li.exports, tn;
function Ra() {
  return tn || (tn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Aa, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ua", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(Li)), Li.exports;
}
var Ia = /* @__PURE__ */ Ra();
const jn = /* @__PURE__ */ Se(Ia);
var Ei = { exports: {} }, Da = Ei.exports, ln;
function Ma() {
  return ln || (ln = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Da, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ur", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(Ei)), Ei.exports;
}
var Va = /* @__PURE__ */ Ma();
const Gn = /* @__PURE__ */ Se(Va);
var Ti = { exports: {} }, Fa = Ti.exports, nn;
function Ha() {
  return nn || (nn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Fa, function(t, i) {
      const n = {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "zh_cn", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: n
      })), n;
    });
  }(Ti)), Ti.exports;
}
var Oa = /* @__PURE__ */ Ha();
const Kn = /* @__PURE__ */ Se(Oa), Ua = { ckb: Bn, cs: zn, da: Nn, de: An, en: Ui, es: Rn, fr: In, he: Dn, hu: Mn, it: Vn, ja: Fn, ko: Hn, lv: On, nl: Un, pl: Pn, pt_br: Wn, ro: $n, ru: Zn, se: qn, ua: jn, ur: Gn, zh_cn: Kn }, on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: Bn,
  cs: zn,
  da: Nn,
  de: An,
  default: Ua,
  en: Ui,
  es: Rn,
  fr: In,
  he: Dn,
  hu: Mn,
  it: Vn,
  ja: Fn,
  ko: Hn,
  lv: On,
  nl: Un,
  pl: Pn,
  pt_br: Wn,
  ro: $n,
  ru: Zn,
  se: qn,
  ua: jn,
  ur: Gn,
  zh_cn: Kn
}, Symbol.toStringTag, { value: "Module" })), Pa = {
  name: "blockquote",
  display: "command",
  add: function(e, t) {
    const i = e.context;
    i.blockquote = {
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
}, Wa = {
  name: "align",
  display: "submenu",
  add: function(e, t) {
    const i = e.icons, n = e.context;
    n.align = {
      targetButton: t,
      _itemMenu: null,
      _alignList: null,
      currentAlign: "",
      defaultDir: e.options.rtl ? "right" : "left",
      icons: {
        justify: i.align_justify,
        left: i.align_left,
        right: i.align_right,
        center: i.align_center
      }
    };
    let l = this.setSubmenu(e), a = n.align._itemMenu = l.querySelector("ul");
    a.addEventListener("click", this.pickup.bind(e)), n.align._alignList = a.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, a = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.icons, n = e.util.createElement("DIV"), l = e.options.alignItems;
    let a = "";
    for (let u = 0, c, o; u < l.length; u++)
      c = l[u], o = t.toolbar["align" + c.charAt(0).toUpperCase() + c.slice(1)], a += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + c + '" title="' + o + '" aria-label="' + o + '"><span class="se-list-icon">' + i["align_" + c] + "</span>" + o + "</button></li>";
    return n.className = "se-submenu se-list-layer se-list-align", n.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + a + "</ul></div>", n;
  },
  /**
   * @Override core
   */
  active: function(e) {
    const t = this.context.align, i = t.targetButton, n = i.firstElementChild;
    if (!e)
      this.util.changeElement(n, t.icons[t.defaultDir]), i.removeAttribute("data-focus");
    else if (this.util.isFormatElement(e)) {
      const l = e.style.textAlign;
      if (l)
        return this.util.changeElement(n, t.icons[l] || t.icons[t.defaultDir]), i.setAttribute("data-focus", l), !0;
    }
    return !1;
  },
  /**
   * @Override submenu
   */
  on: function() {
    const e = this.context.align, t = e._alignList, i = e.targetButton.getAttribute("data-focus") || e.defaultDir;
    if (i !== e.currentAlign) {
      for (let n = 0, l = t.length; n < l; n++)
        i === t[n].getAttribute("data-value") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentAlign = i;
    }
  },
  exchangeDir: function() {
    const e = this.options.rtl ? "right" : "left";
    if (!this.context.align || this.context.align.defaultDir === e) return;
    this.context.align.defaultDir = e;
    let t = this.context.align._itemMenu, i = t.querySelector('[data-value="left"]'), n = t.querySelector('[data-value="right"]');
    if (i && n) {
      const l = i.parentElement, a = n.parentElement;
      l.appendChild(n), a.appendChild(i);
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !i && !/UL/i.test(t.tagName); )
      i = t.getAttribute("data-value"), t = t.parentNode;
    if (!i) return;
    const n = this.context.align.defaultDir, l = this.getSelectedElements();
    for (let a = 0, u = l.length; a < u; a++)
      this.util.setStyle(l[a], "textAlign", i === n ? "" : i);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, $a = {
  name: "font",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.font = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _fontList: null,
      currentFont: ""
    };
    let n = this.setSubmenu(e);
    n.querySelector(".se-list-inner").addEventListener("click", this.pickup.bind(e)), i.font._fontList = n.querySelectorAll("ul li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-font-family";
    let n, l, a, u, c = e.options.font, o = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (a = 0, u = c.length; a < u; a++)
      n = c[a], l = n.split(",")[0], o += '<li><button type="button" class="se-btn-list" data-value="' + n + '" data-txt="' + l + '" title="' + l + '" aria-label="' + l + '" style="font-family:' + n + ';">' + l + "</button></li>";
    return o += "</ul></div>", i.innerHTML = o, i;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.font.targetText, i = this.context.font.targetTooltip;
    if (e) {
      if (e.style && e.style.fontFamily.length > 0) {
        const n = e.style.fontFamily.replace(/["']/g, "");
        return this.util.changeTxt(t, n), this.util.changeTxt(i, this.lang.toolbar.font + " (" + n + ")"), !0;
      }
    } else {
      const n = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
      this.util.changeTxt(t, n), this.util.changeTxt(i, this.hasFocus ? this.lang.toolbar.font + (n ? " (" + n + ")" : "") : n);
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.font, t = e._fontList, i = e.targetText.textContent;
    if (i !== e.currentFont) {
      for (let n = 0, l = t.length; n < l; n++)
        i === (t[n].getAttribute("data-value") || "").replace(/'|"/g, "") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentFont = i;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    let t = e.target.getAttribute("data-value");
    if (t) {
      const i = this.util.createElement("SPAN");
      /[\s\d\W]/.test(t) && !/^['"].*['"]$/.test(t) && (t = '"' + t + '"'), i.style.fontFamily = t, this.nodeChange(i, ["font-family"], null, null);
    } else
      this.nodeChange(null, ["font-family"], ["span"], !0);
    this.submenuOff();
  }
}, Za = {
  name: "fontSize",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.fontSize = {
      targetText: t.querySelector(".txt"),
      _sizeList: null,
      currentSize: ""
    };
    let n = this.setSubmenu(e), l = n.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.fontSize._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer se-list-font-size";
    const l = t.fontSize ? t.fontSize : [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    let a = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let u = 0, c = t.fontSizeUnit, o = l.length, b; u < o; u++)
      b = l[u], a += '<li><button type="button" class="se-btn-list" data-value="' + b + c + '" title="' + b + c + '" aria-label="' + b + c + '" style="font-size:' + b + c + ';">' + b + "</button></li>";
    return a += "</ul></div>", n.innerHTML = a, n;
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
    const e = this.context.fontSize, t = e._sizeList, i = e.targetText.textContent;
    if (i !== e.currentSize) {
      for (let n = 0, l = t.length; n < l; n++)
        i === t[n].getAttribute("data-value") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentSize = i;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value");
    if (t) {
      const i = this.util.createElement("SPAN");
      i.style.fontSize = t, this.nodeChange(i, ["font-size"], null, null);
    } else
      this.nodeChange(null, ["font-size"], ["span"], !0);
    this.submenuOff();
  }
}, Yn = {
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
    const i = e.options, n = e.lang, l = !i.colorList || i.colorList.length === 0 ? [
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
    ] : i.colorList;
    let a = [], u = '<div class="se-list-inner">';
    for (let c = 0, o = l.length, b; c < o; c++)
      b = l[c], b && (typeof b == "string" && (a.push(b), c < o - 1) || (a.length > 0 && (u += '<div class="se-selector-color">' + t(a) + "</div>", a = []), typeof b == "object" && (u += '<div class="se-selector-color">' + t(b) + "</div>")));
    return u += '<form class="se-form-group"><input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/><button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + n.dialogBox.submitButton + '" aria-label="' + n.dialogBox.submitButton + '">' + e.icons.checked + '</button><button type="button" class="se-btn _se_color_picker_remove" title="' + n.toolbar.removeFormat + '" aria-label="' + n.toolbar.removeFormat + '">' + e.icons.erase + "</button></form></div>", u;
  },
  /**
   * @description Internal function used by this.createColorList
   * @param {Array} colorList Color list
   * @private
   */
  _makeColorList: function(e) {
    let t = "";
    t += '<ul class="se-color-pallet">';
    for (let i = 0, n = e.length, l; i < n; i++)
      l = e[i], typeof l == "string" && (t += '<li><button type="button" data-value="' + l + '" title="' + l + '" aria-label="' + l + '" style="background-color:' + l + ';"></button></li>');
    return t += "</ul>", t;
  },
  /**
   * @description Displays or resets the currently selected color at color list.
   * @param {Node} node Current Selected node
   * @param {String|null} color Color value
   */
  init: function(e, t) {
    const i = this.plugins.colorPicker;
    let n = t || i.getColorInNode.call(this, e) || this.context.colorPicker._defaultColor;
    n = i.isHexColor(n) ? n : i.rgb2hex(n) || n;
    const l = this.context.colorPicker._colorList;
    if (l)
      for (let a = 0, u = l.length; a < u; a++)
        n.toLowerCase() === l[a].getAttribute("data-value").toLowerCase() ? this.util.addClass(l[a], "active") : this.util.removeClass(l[a], "active");
    i.setInputText.call(this, i.colorName2hex.call(this, n));
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
    const i = this.context.colorPicker._styleProperty;
    for (; e && !this.util.isWysiwygDiv(e) && t.length === 0; )
      e.nodeType === 1 && e.style[i] && (t = e.style[i]), e = e.parentNode;
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
    var i = this._w.getComputedStyle(this._d.body.appendChild(t)).color.match(/\d+/g).map(function(n) {
      return parseInt(n, 10);
    });
    return this.util.removeItem(t), i.length >= 3 ? "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).substr(1) : !1;
  }
}, qa = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Yn]);
    const i = e.context;
    i.fontColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let n = this.setSubmenu(e);
    i.fontColor.colorInput = n.querySelector("._se_color_picker_input"), i.fontColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), n.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), n.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), n.addEventListener("click", this.pickup.bind(e)), i.fontColor.colorList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = t, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.colorPicker, t = this.context.fontColor;
    e._colorInput = t.colorInput;
    const i = this.wwComputedStyle.color;
    e._defaultColor = i ? this.plugins.colorPicker.isHexColor(i) ? i : this.plugins.colorPicker.rgb2hex(i) : "#333333", e._styleProperty = "color", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
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
}, ja = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Yn]);
    const i = e.context;
    i.hiliteColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let n = this.setSubmenu(e);
    i.hiliteColor.colorInput = n.querySelector("._se_color_picker_input"), i.hiliteColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), n.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), n.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), n.addEventListener("click", this.pickup.bind(e)), i.hiliteColor.colorList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = t, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.colorPicker, t = this.context.hiliteColor;
    e._colorInput = t.colorInput;
    const i = this.wwComputedStyle.backgroundColor;
    e._defaultColor = i ? this.plugins.colorPicker.isHexColor(i) ? i : this.plugins.colorPicker.rgb2hex(i) : "#ffffff", e._styleProperty = "backgroundColor", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
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
}, Ga = {
  name: "horizontalRule",
  display: "submenu",
  add: function(e, t) {
    e.context.horizontalRule = {
      currentHR: null
    };
    let i = this.setSubmenu(e);
    i.querySelector("ul").addEventListener("click", this.horizontalRulePick.bind(e)), e.initMenuTarget(this.name, t, i), i = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), n = e.options.hrItems || [{ name: t.toolbar.hr_solid, class: "__se__solid" }, { name: t.toolbar.hr_dashed, class: "__se__dashed" }, { name: t.toolbar.hr_dotted, class: "__se__dotted" }];
    let l = "";
    for (let a = 0, u = n.length; a < u; a++)
      l += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + n[a].class + '" title="' + n[a].name + '" aria-label="' + n[a].name + '"><hr' + (n[a].class ? ' class="' + n[a].class + '"' : "") + (n[a].style ? ' style="' + n[a].style + '"' : "") + "/></button></li>";
    return i.className = "se-submenu se-list-layer se-list-line", i.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + l + "</ul></div>", i;
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
    let t = e.target, i = t.getAttribute("data-command");
    for (; !i && !/UL/i.test(t.tagName); )
      t = t.parentNode, i = t.getAttribute("data-command");
    if (!i) return;
    const n = this.plugins.horizontalRule.appendHr.call(this, t.firstElementChild);
    n && (this.setRange(n, 0, n, 0), this.submenuOff());
  }
}, Ka = {
  name: "list",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.list = {
      targetButton: t,
      _list: null,
      currentList: "",
      icons: {
        bullets: e.icons.list_bullets,
        number: e.icons.list_number
      }
    };
    let n = this.setSubmenu(e), l = n.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.list._list = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + t.toolbar.orderList + '" aria-label="' + t.toolbar.orderList + '">' + e.icons.list_number + '</button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + t.toolbar.unorderList + '" aria-label="' + t.toolbar.unorderList + '">' + e.icons.list_bullets + "</button></li></ul></div>", i;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.list.targetButton, i = t.firstElementChild, n = this.util;
    if (n.isList(e)) {
      const l = e.nodeName;
      return t.setAttribute("data-focus", l), n.addClass(t, "active"), /UL/i.test(l) ? n.changeElement(i, this.context.list.icons.bullets) : n.changeElement(i, this.context.list.icons.number), !0;
    } else
      t.removeAttribute("data-focus"), n.changeElement(i, this.context.list.icons.number), n.removeClass(t, "active");
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.list, t = e._list, i = e.targetButton.getAttribute("data-focus") || "";
    if (i !== e.currentList) {
      for (let n = 0, l = t.length; n < l; n++)
        i === t[n].getAttribute("data-command") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentList = i;
    }
  },
  editList: function(e, t, i) {
    let n = this.getRange(), l = t || this.getSelectedElementsAndComponents(!1);
    if (l.length === 0 && (t || (n = this.getRange_addLine(n, null), l = this.getSelectedElementsAndComponents(!1), l.length === 0)))
      return;
    const a = this.util;
    a.sortByDepth(l, !0);
    let u = l[0], c = l[l.length - 1], o = (a.isListCell(u) || a.isComponent(u)) && !u.previousElementSibling ? u.parentNode.previousElementSibling : u.previousElementSibling, b = (a.isListCell(c) || a.isComponent(c)) && !c.nextElementSibling ? c.parentNode.nextElementSibling : c.nextElementSibling;
    const d = n.collapsed, v = {
      sc: n.startContainer,
      so: n.startContainer === n.endContainer && a.onlyZeroWidthSpace(n.startContainer) && n.startOffset === 0 && n.endOffset === 1 ? n.endOffset : n.startOffset,
      ec: n.endContainer,
      eo: n.endOffset
    };
    let w = null, k = !0;
    for (let L = 0, R = l.length; L < R; L++)
      if (!a.isList(a.getRangeFormatElement(l[L], (function(s) {
        return this.getRangeFormatElement(s) && s !== l[L];
      }).bind(a)))) {
        k = !1;
        break;
      }
    if (k && (!o || u.tagName !== o.tagName || e !== o.tagName.toUpperCase()) && (!b || c.tagName !== b.tagName || e !== b.tagName.toUpperCase())) {
      if (i) {
        for (let h = 0, m = l.length; h < m; h++)
          for (let g = h - 1; g >= 0; g--)
            if (l[g].contains(l[h])) {
              l.splice(h, 1), h--, m--;
              break;
            }
      }
      const L = a.getRangeFormatElement(u), R = L && L.tagName === e;
      let s, r;
      const f = (function(h) {
        return !this.isComponent(h);
      }).bind(a);
      R || (r = a.createElement(e));
      for (let h = 0, m = l.length, g, p; h < m; h++)
        p = a.getRangeFormatElement(l[h], f), !(!p || !a.isList(p)) && (g ? g !== p ? (i && a.isListCell(p.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : w = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0), p = l[h].parentNode, R || (r = a.createElement(e)), g = p, s = { r: g, f: [a.getParentElement(l[h], "LI")] }) : s.f.push(a.getParentElement(l[h], "LI")) : (g = p, s = { r: g, f: [a.getParentElement(l[h], "LI")] }), h === m - 1 && (i && a.isListCell(p.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : w = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0)));
    } else {
      const L = o && o.parentNode, R = b && b.parentNode;
      o = L && !a.isWysiwygDiv(L) && L.nodeName === e ? L : o, b = R && !a.isWysiwygDiv(R) && R.nodeName === e ? R : b;
      const s = o && o.tagName === e, r = b && b.tagName === e;
      let f = s ? o : a.createElement(e), h = null, m = null, g = null;
      const p = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(a);
      for (let y = 0, C = l.length, _, S, D, T, B, A, $, O, P; y < C; y++) {
        if (S = l[y], S.childNodes.length === 0 && !a._isIgnoreNodeChange(S)) {
          a.removeItem(S);
          continue;
        }
        if (T = l[y + 1], B = S.parentNode, A = T ? T.parentNode : null, D = a.isListCell(S), P = a.isRangeFormatElement(B) ? B : null, $ = D && !a.isWysiwygDiv(B) ? B.parentNode : B, O = D && !a.isWysiwygDiv(B) ? !T || a.isListCell($) ? B : B.nextSibling : S.nextSibling, _ = a.createElement("LI"), a.copyFormatAttributes(_, S), y === 0 && v.sc === S && (v.sc = _), y === C - 1 && v.ec === S && (v.ec = _), a.isComponent(S)) {
          const V = /^HR$/i.test(S.nodeName);
          V || (_.innerHTML = "<br>"), _.innerHTML += S.outerHTML, V && (_.innerHTML += "<br>");
        } else {
          const V = S.childNodes;
          for (; V[0]; )
            _.appendChild(V[0]);
        }
        f.appendChild(_), (!T || $ !== A || a.isRangeFormatElement(O)) && (h || (h = f), (!s || !T || $ !== A) && !(T && a.isList(A) && A === B) && f.parentNode !== $ && $.insertBefore(f, O)), a.removeItem(S), s && m === null && (m = f.children.length - 1), T && (a.getRangeFormatElement(A, p) !== a.getRangeFormatElement(B, p) || a.isList(A) && a.isList(B) && a.getElementDepth(A) !== a.getElementDepth(B)) && (f = a.createElement(e)), P && P.children.length === 0 && a.removeItem(P);
      }
      m && (h = h.children[m]), r && (g = f.children.length - 1, f.innerHTML += b.innerHTML, f.children[g], a.removeItem(b));
    }
    return this.effectNode = null, d && w || v;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], n = i.nextElementSibling, l = t.parentNode, a = l.parentNode.nextElementSibling, u = l.parentNode.parentNode;
    for (let o = 0, b = e.length; o < b; o++)
      u.insertBefore(e[o], a);
    if (n && l.children.length > 0) {
      const o = l.cloneNode(!1), b = l.childNodes, d = this.util.getPositionIndex(n);
      for (; b[d]; )
        o.appendChild(b[d]);
      i.appendChild(o);
    }
    l.children.length === 0 && this.util.removeItem(l), this.util.mergeSameTags(u);
    const c = this.util.getEdgeChildNodes(t, i);
    return {
      cc: t.parentNode,
      sc: c.sc,
      ec: c.ec
    };
  },
  editInsideList: function(e, t) {
    t = t || this.getSelectedElements().filter((function(u) {
      return this.isListCell(u);
    }).bind(this.util));
    const i = t.length;
    if (i === 0 || !e && !this.util.isListCell(t[0].previousElementSibling) && !this.util.isListCell(t[i - 1].nextElementSibling))
      return {
        sc: t[0],
        so: 0,
        ec: t[i - 1],
        eo: 1
      };
    let n = t[0].parentNode, l = t[i - 1], a = null;
    if (e) {
      if (n !== l.parentNode && this.util.isList(l.parentNode.parentNode) && l.nextElementSibling)
        for (l = l.nextElementSibling; l; )
          t.push(l), l = l.nextElementSibling;
      a = this.plugins.list.editList.call(this, n.nodeName.toUpperCase(), t, !0);
    } else {
      let u = this.util.createElement(n.nodeName), c = t[0].previousElementSibling, o = l.nextElementSibling;
      const b = { s: null, e: null, sl: n, el: n };
      for (let w = 0, k = i, L; w < k; w++)
        L = t[w], L.parentNode !== n && (this.plugins.list._insiedList.call(this, n, u, c, o, b), n = L.parentNode, u = this.util.createElement(n.nodeName)), c = L.previousElementSibling, o = L.nextElementSibling, u.appendChild(L);
      this.plugins.list._insiedList.call(this, n, u, c, o, b);
      const d = this.util.getNodeFromPath(b.s, b.sl), v = this.util.getNodeFromPath(b.e, b.el);
      a = {
        sc: d,
        so: 0,
        ec: v,
        eo: v.textContent.length
      };
    }
    return a;
  },
  _insiedList: function(e, t, i, n, l) {
    let a = !1;
    if (i && t.tagName === i.tagName) {
      const u = t.children;
      for (; u[0]; )
        i.appendChild(u[0]);
      t = i, a = !0;
    }
    if (n && t.tagName === n.tagName) {
      const u = n.children;
      for (; u[0]; )
        t.appendChild(u[0]);
      const c = n.nextElementSibling;
      n.parentNode.removeChild(n), n = c;
    }
    if (!a) {
      this.util.isListCell(i) && (e = i, n = null), e.insertBefore(t, n), l.s || (l.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), l.sl = e);
      const u = e.contains(l.sl) ? this.util.getNodePath(l.sl, e) : null;
      l.e = this.util.getNodePath(t.lastElementChild.firstChild, e, null), l.el = e, this.util.mergeSameTags(e, [l.s, l.e, u], !1), this.util.mergeNestedTags(e), u && (l.sl = this.util.getNodeFromPath(u, e));
    }
    return t;
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = "";
    for (; !i && !/^UL$/i.test(t.tagName); )
      i = t.getAttribute("data-command"), t = t.parentNode;
    if (!i) return;
    const n = this.plugins.list.editList.call(this, i, null, !1);
    n && this.setRange(n.sc, n.so, n.ec, n.eo), this.submenuOff(), this.history.push(!1);
  }
}, Ya = {
  name: "table",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    let n = i.table = {
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
    }, l = this.setSubmenu(e), a = l.querySelector(".se-controller-table-picker");
    n.tableHighlight = l.querySelector(".se-table-size-highlighted"), n.tableUnHighlight = l.querySelector(".se-table-size-unhighlighted"), n.tableDisplay = l.querySelector(".se-table-size-display"), e.options.rtl && (n.tableHighlight.style.left = 10 * 18 - 13 + "px");
    let u = this.setController_table(e);
    n.tableController = u, n.resizeButton = u.querySelector("._se_table_resize"), n.resizeText = u.querySelector("._se_table_resize > span > span"), n.columnFixedButton = u.querySelector("._se_table_fixed_column"), n.headerButton = u.querySelector("._se_table_header");
    let c = this.setController_tableEditor(e, n.cellControllerTop);
    n.resizeDiv = c, n.splitMenu = c.querySelector(".se-btn-group-sub"), n.mergeButton = c.querySelector("._se_table_merge_button"), n.splitButton = c.querySelector("._se_table_split_button"), n.insertRowAboveButton = c.querySelector("._se_table_insert_row_a"), n.insertRowBelowButton = c.querySelector("._se_table_insert_row_b"), a.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, n)), a.addEventListener("click", this.appendTable.bind(e)), c.addEventListener("click", this.onClick_tableController.bind(e)), u.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, l), i.element.relative.appendChild(c), i.element.relative.appendChild(u), l = null, a = null, c = null, u = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.util.createElement("DIV");
    return t.className = "se-submenu se-selector-table", t.innerHTML = '<div class="se-table-size"><div class="se-table-size-picker se-controller-table-picker"></div><div class="se-table-size-highlighted"></div><div class="se-table-size-unhighlighted"></div></div><div class="se-table-size-display">1 x 1</div>', t;
  },
  setController_table: function(e) {
    const t = e.lang, i = e.icons, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-table", n.innerHTML = '<div><div class="se-btn-group"><button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' + i.expansion + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.maxSize + '</span></span></button><button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' + i.fixed_column_width + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.fixedColumnWidth + '</span></span></button><button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' + i.table_header + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.tableHeader + '</span></span></button><button type="button" data-command="remove" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", n;
  },
  setController_tableEditor: function(e, t) {
    const i = e.lang, n = e.icons, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-table-cell", l.innerHTML = (t ? "" : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group"><button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + n.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowAbove + '</span></span></button><button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + n.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowBelow + '</span></span></button><button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + n.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteRow + '</span></span></button><button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + n.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.mergeCells + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + n.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnBefore + '</span></span></button><button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + n.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnAfter + '</span></span></button><button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + n.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteColumn + '</span></span></button><button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + n.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.splitCells + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split"><div class="se-list-inner"><ul class="se-list-basic"><li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + i.controller.VerticalSplit + '" aria-label="' + i.controller.VerticalSplit + '">' + i.controller.VerticalSplit + '</li><li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + i.controller.HorizontalSplit + '" aria-label="' + i.controller.HorizontalSplit + '">' + i.controller.HorizontalSplit + "</li></ul></div></div></div>", l;
  },
  appendTable: function() {
    const e = this.util.createElement("TABLE"), t = this.plugins.table.createCells, i = this.context.table._tableXY[0];
    let n = this.context.table._tableXY[1], l = "<tbody>";
    for (; n > 0; )
      l += "<tr>" + t.call(this, "td", i) + "</tr>", --n;
    if (l += "</tbody>", e.innerHTML = l, this.insertComponent(e, !1, !0, !1)) {
      const u = e.querySelector("td div");
      this.setRange(u, 0, u, 0), this.plugins.table.reset_table_picker.call(this);
    }
  },
  createCells: function(e, t, i) {
    if (e = e.toLowerCase(), i) {
      const n = this.util.createElement(e);
      return n.innerHTML = "<div><br></div>", n;
    } else {
      let n = "";
      for (; t > 0; )
        n += "<" + e + "><div><br></div></" + e + ">", t--;
      return n;
    }
  },
  onMouseMove_tablePicker: function(e, t) {
    t.stopPropagation();
    let i = this._w.Math.ceil(t.offsetX / 18), n = this._w.Math.ceil(t.offsetY / 18);
    i = i < 1 ? 1 : i, n = n < 1 ? 1 : n, e._rtl && (e.tableHighlight.style.left = i * 18 - 13 + "px", i = 11 - i), e.tableHighlight.style.width = i + "em", e.tableHighlight.style.height = n + "em", this.util.changeTxt(e.tableDisplay, i + " x " + n), e._tableXY = [i, n];
  },
  reset_table_picker: function() {
    if (!this.context.table.tableHighlight) return;
    const e = this.context.table.tableHighlight.style, t = this.context.table.tableUnHighlight.style;
    e.width = "1em", e.height = "1em", t.width = "10em", t.height = "10em", this.util.changeTxt(this.context.table.tableDisplay, "1 x 1"), this.submenuOff();
  },
  init: function() {
    const e = this.context.table, t = this.plugins.table;
    if (t._removeEvents.call(this), t._selectedTable) {
      const i = t._selectedTable.querySelectorAll(".se-table-selected-cell");
      for (let n = 0, l = i.length; n < l; n++)
        this.util.removeClass(i[n], "se-table-selected-cell");
    }
    t._toggleEditor.call(this, !0), e._element = null, e._tdElement = null, e._trElement = null, e._trElements = null, e._tableXY = [], e._maxWidth = !0, e._fixedColumn = !1, e._physical_cellCnt = 0, e._logical_cellCnt = 0, e._rowCnt = 0, e._rowIndex = 0, e._physical_cellIndex = 0, e._logical_cellIndex = 0, e._current_colSpan = 0, e._current_rowSpan = 0, t._shift = !1, t._selectedCells = null, t._selectedTable = null, t._ref = null, t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null;
  },
  /** table edit controller */
  call_controller_tableEdit: function(e) {
    const t = this.plugins.table, i = this.context.table;
    if (!this.getSelection().isCollapsed && !t._selectedCell) {
      this.controllersOff(), this.util.removeClass(e, "se-table-selected-cell");
      return;
    }
    const n = i._element || this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    i._maxWidth = this.util.hasClass(n, "se-table-size-100") || n.style.width === "100%" || !n.style.width && !this.util.hasClass(n, "se-table-size-auto"), i._fixedColumn = this.util.hasClass(n, "se-table-layout-fixed") || n.style.tableLayout === "fixed", t.setTableStyle.call(this, i._maxWidth ? "width|column" : "width"), t.setPositionControllerTop.call(this, n), t.setPositionControllerDiv.call(this, e, t._shift), t._shift || this.controllersOn(i.resizeDiv, i.tableController, t.init.bind(this), e, "table");
  },
  setPositionControllerTop: function(e) {
    this.setControllerPosition(this.context.table.tableController, e, "top", { left: 0, top: 0 });
  },
  setPositionControllerDiv: function(e, t) {
    const i = this.context.table, n = i.resizeDiv;
    this.plugins.table.setCellInfo.call(this, e, t), i.cellControllerTop ? this.setControllerPosition(n, i._element, "top", { left: i.tableController.offsetWidth, top: 0 }) : this.setControllerPosition(n, e, "bottom", { left: 0, top: 0 });
  },
  setCellInfo: function(e, t) {
    const i = this.context.table, n = i._element = this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    if (/THEAD/i.test(n.firstElementChild.nodeName) ? this.util.addClass(i.headerButton, "active") : this.util.removeClass(i.headerButton, "active"), t || i._physical_cellCnt === 0) {
      i._tdElement !== e && (i._tdElement = e, i._trElement = e.parentNode);
      const l = i._trElements = n.rows, a = e.cellIndex;
      let u = 0;
      for (let d = 0, v = l[0].cells, w = l[0].cells.length; d < w; d++)
        u += v[d].colSpan;
      const c = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = l.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = u, i._physical_cellIndex = a, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[a].rowSpan - 1;
      let o = [], b = [];
      for (let d = 0, v, w; d <= c; d++) {
        v = l[d].cells, w = 0;
        for (let k = 0, L = v.length, R, s, r, f; k < L; k++) {
          if (R = v[k], s = R.colSpan - 1, r = R.rowSpan - 1, f = k + w, b.length > 0)
            for (let h = 0, m; h < b.length; h++)
              m = b[h], !(m.row > d) && (f >= m.index ? (w += m.cs, f += m.cs, m.rs -= 1, m.row = d + 1, m.rs < 1 && (b.splice(h, 1), h--)) : k === L - 1 && (m.rs -= 1, m.row = d + 1, m.rs < 1 && (b.splice(h, 1), h--)));
          if (d === c && k === a) {
            i._logical_cellIndex = f;
            break;
          }
          r > 0 && o.push({
            index: f,
            cs: s + 1,
            rs: r,
            row: -1
          }), w += s;
        }
        b = b.concat(o).sort(function(k, L) {
          return k.index - L.index;
        }), o = [];
      }
      o = null, b = null;
    }
  },
  editTable: function(e, t) {
    const i = this.plugins.table, n = this.context.table, l = n._element, a = e === "row";
    if (a) {
      const u = n._trElement.parentNode;
      if (/^THEAD$/i.test(u.nodeName)) {
        if (t === "up")
          return;
        if (!u.nextElementSibling || !/^TBODY$/i.test(u.nextElementSibling.nodeName)) {
          l.innerHTML += "<tbody><tr>" + i.createCells.call(this, "td", n._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (i._ref) {
      const u = n._tdElement, c = i._selectedCells;
      if (a)
        if (t)
          i.setCellInfo.call(this, t === "up" ? c[0] : c[c.length - 1], !0), i.editRow.call(this, t, u);
        else {
          let o = c[0].parentNode;
          const b = [c[0]];
          for (let d = 1, v = c.length, w; d < v; d++)
            w = c[d], o !== w.parentNode && (b.push(w), o = w.parentNode);
          for (let d = 0, v = b.length; d < v; d++)
            i.setCellInfo.call(this, b[d], !0), i.editRow.call(this, t);
        }
      else {
        const o = c[0].parentNode;
        if (t) {
          let b = null;
          for (let d = 0, v = c.length - 1; d < v; d++)
            if (o !== c[d + 1].parentNode) {
              b = c[d];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? c[0] : b || c[0], !0), i.editCell.call(this, t, u);
        } else {
          const b = [c[0]];
          for (let d = 1, v = c.length, w; d < v && (w = c[d], o === w.parentNode); d++)
            b.push(w);
          for (let d = 0, v = b.length; d < v; d++)
            i.setCellInfo.call(this, b[d], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[a ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const u = l.children;
      for (let c = 0; c < u.length; c++)
        u[c].children.length === 0 && (this.util.removeItem(u[c]), c--);
      l.children.length === 0 && this.util.removeItem(l);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, n = !e, l = e === "up", a = i._rowIndex, u = n || l ? a : a + i._current_rowSpan + 1, c = n ? -1 : 1, o = i._trElements;
    let b = i._logical_cellCnt;
    for (let d = 0, v = a + (n ? -1 : 0), w; d <= v; d++) {
      if (w = o[d].cells, w.length === 0) return;
      for (let k = 0, L = w.length, R, s; k < L; k++)
        R = w[k].rowSpan, s = w[k].colSpan, !(R < 2 && s < 2) && R + d > u && u > d && (w[k].rowSpan = R + c, b -= s);
    }
    if (n) {
      const d = o[a + 1];
      if (d) {
        const v = [];
        let w = o[a].cells, k = 0;
        for (let L = 0, R = w.length, s, r; L < R; L++)
          s = w[L], r = L + k, k += s.colSpan - 1, s.rowSpan > 1 && (s.rowSpan -= 1, v.push({ cell: s.cloneNode(!1), index: r }));
        if (v.length > 0) {
          let L = v.shift();
          w = d.cells, k = 0;
          for (let R = 0, s = w.length, r, f; R < s && (r = w[R], f = R + k, k += r.colSpan - 1, !(f >= L.index && (R--, k--, k += L.cell.colSpan - 1, d.insertBefore(L.cell, r), L = v.shift(), !L))); R++)
            ;
          if (L) {
            d.appendChild(L.cell);
            for (let R = 0, s = v.length; R < s; R++)
              d.appendChild(v[R].cell);
          }
        }
      }
      i._element.deleteRow(u);
    } else {
      const d = i._element.insertRow(u);
      d.innerHTML = this.plugins.table.createCells.call(this, "td", b, !1);
    }
    n ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, n = this.util, l = !e, a = e === "left", u = i._current_colSpan, c = l || a ? i._logical_cellIndex : i._logical_cellIndex + u + 1, o = i._trElements;
    let b = [], d = [], v = 0;
    const w = [], k = [];
    for (let L = 0, R = i._rowCnt, s, r, f, h, m, g; L < R; L++) {
      s = o[L], r = c, m = !1, f = s.cells, g = 0;
      for (let p = 0, y, C = f.length, _, S, D; p < C && (y = f[p], !!y); p++)
        if (_ = y.rowSpan - 1, S = y.colSpan - 1, l) {
          if (D = p + g, d.length > 0) {
            const T = !f[p + 1];
            for (let B = 0, A; B < d.length; B++)
              A = d[B], !(A.row > L) && (D >= A.index ? (g += A.cs, D = p + g, A.rs -= 1, A.row = L + 1, A.rs < 1 && (d.splice(B, 1), B--)) : T && (A.rs -= 1, A.row = L + 1, A.rs < 1 && (d.splice(B, 1), B--)));
          }
          _ > 0 && b.push({
            rs: _,
            cs: S + 1,
            index: D,
            row: -1
          }), D >= r && D + S <= r + u ? w.push(y) : D <= r + u && D + S >= r ? y.colSpan -= n.getOverlapRangeAtIndex(c, c + u, D, D + S) : _ > 0 && (D < r || D + S > r + u) && k.push({
            cell: y,
            i: L,
            rs: L + _
          }), g += S;
        } else {
          if (p >= r) break;
          if (S > 0) {
            if (v < 1 && S + p >= r) {
              y.colSpan += 1, r = null, v = _ + 1;
              break;
            }
            r -= S;
          }
          if (!m) {
            for (let T = 0, B; T < d.length; T++)
              B = d[T], r -= B.cs, B.rs -= 1, B.rs < 1 && (d.splice(T, 1), T--);
            m = !0;
          }
        }
      if (d = d.concat(b).sort(function(p, y) {
        return p.index - y.index;
      }), b = [], !l) {
        if (v > 0) {
          v -= 1;
          continue;
        }
        r !== null && f.length > 0 && (h = this.plugins.table.createCells.call(this, f[0].nodeName, 0, !0), h = s.insertBefore(h, f[r]));
      }
    }
    if (l) {
      let L, R;
      for (let s = 0, r = w.length, f; s < r; s++)
        f = w[s].parentNode, n.removeItem(w[s]), f.cells.length === 0 && (L || (L = n.getArrayIndex(o, f)), R = n.getArrayIndex(o, f), n.removeItem(f));
      for (let s = 0, r = k.length, f; s < r; s++)
        f = k[s], f.cell.rowSpan = n.getOverlapRangeAtIndex(L, R, f.i, f.rs);
      this.controllersOff();
    } else
      this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  _closeSplitMenu: null,
  openSplitMenu: function() {
    this.util.addClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "inline-table", this.plugins.table._closeSplitMenu = (function() {
      this.util.removeClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "none", this.removeDocEvent("click", this.plugins.table._closeSplitMenu), this.plugins.table._closeSplitMenu = null;
    }).bind(this), this.addDocEvent("click", this.plugins.table._closeSplitMenu);
  },
  splitCells: function(e) {
    const t = this.util, i = e === "vertical", n = this.context.table, l = n._tdElement, a = n._trElements, u = n._trElement, c = n._logical_cellIndex, o = n._rowIndex, b = this.plugins.table.createCells.call(this, l.nodeName, 0, !0);
    if (i) {
      const d = l.colSpan;
      if (b.rowSpan = l.rowSpan, d > 1)
        b.colSpan = this._w.Math.floor(d / 2), l.colSpan = d - b.colSpan, u.insertBefore(b, l.nextElementSibling);
      else {
        let v = [], w = [];
        for (let k = 0, L = n._rowCnt, R, s; k < L; k++) {
          R = a[k].cells, s = 0;
          for (let r = 0, f = R.length, h, m, g, p; r < f; r++) {
            if (h = R[r], m = h.colSpan - 1, g = h.rowSpan - 1, p = r + s, w.length > 0)
              for (let y = 0, C; y < w.length; y++)
                C = w[y], !(C.row > k) && (p >= C.index ? (s += C.cs, p += C.cs, C.rs -= 1, C.row = k + 1, C.rs < 1 && (w.splice(y, 1), y--)) : r === f - 1 && (C.rs -= 1, C.row = k + 1, C.rs < 1 && (w.splice(y, 1), y--)));
            if (p <= c && g > 0 && v.push({
              index: p,
              cs: m + 1,
              rs: g,
              row: -1
            }), h !== l && p <= c && p + m >= c + d - 1) {
              h.colSpan += 1;
              break;
            }
            if (p > c) break;
            s += m;
          }
          w = w.concat(v).sort(function(r, f) {
            return r.index - f.index;
          }), v = [];
        }
        u.insertBefore(b, l.nextElementSibling);
      }
    } else {
      const d = l.rowSpan;
      if (b.colSpan = l.colSpan, d > 1) {
        b.rowSpan = this._w.Math.floor(d / 2);
        const v = d - b.rowSpan, w = [], k = t.getArrayIndex(a, u) + v;
        for (let r = 0, f, h; r < k; r++) {
          f = a[r].cells, h = 0;
          for (let m = 0, g = f.length, p, y, C; m < g && (C = m + h, !(C >= c)); m++)
            p = f[m], y = p.rowSpan - 1, y > 0 && y + r >= k && C < c && w.push({
              index: C,
              cs: p.colSpan
            }), h += p.colSpan - 1;
        }
        const L = a[k], R = L.cells;
        let s = w.shift();
        for (let r = 0, f = R.length, h = 0, m, g, p, y; r < f; r++) {
          if (p = r + h, m = R[r], g = m.colSpan - 1, y = p + g + 1, s && y >= s.index && (h += s.cs, y += s.cs, s = w.shift()), y >= c || r === f - 1) {
            L.insertBefore(b, m.nextElementSibling);
            break;
          }
          h += g;
        }
        l.rowSpan = v;
      } else {
        b.rowSpan = l.rowSpan;
        const v = t.createElement("TR");
        v.appendChild(b);
        for (let L = 0, R; L < o; L++) {
          if (R = a[L].cells, R.length === 0) return;
          for (let s = 0, r = R.length; s < r; s++)
            L + R[s].rowSpan - 1 >= o && (R[s].rowSpan += 1);
        }
        const w = n._physical_cellIndex, k = u.cells;
        for (let L = 0, R = k.length; L < R; L++)
          L !== w && (k[L].rowSpan += 1);
        u.parentNode.insertBefore(v, u.nextElementSibling);
      }
    }
    this.focusEdge(l), this.plugins.table.setPositionControllerDiv.call(this, l, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, n = e._ref, l = e._selectedCells, a = l[0];
    let u = null, c = null, o = n.ce - n.cs + 1, b = n.re - n.rs + 1, d = "", v = null;
    for (let w = 1, k = l.length, L, R; w < k; w++) {
      L = l[w], v !== L.parentNode && (v = L.parentNode), R = L.children;
      for (let s = 0, r = R.length; s < r; s++)
        i.isFormatElement(R[s]) && i.onlyZeroWidthSpace(R[s].textContent) && i.removeItem(R[s]);
      d += L.innerHTML, i.removeItem(L), v.cells.length === 0 && (u ? c = v : u = v, b -= 1);
    }
    if (u) {
      const w = t._trElements, k = i.getArrayIndex(w, u), L = i.getArrayIndex(w, c || u), R = [];
      for (let s = 0, r; s <= L; s++) {
        if (r = w[s].cells, r.length === 0) {
          R.push(w[s]);
          continue;
        }
        for (let f = 0, h = r.length, m, g; f < h; f++)
          m = r[f], g = m.rowSpan - 1, g > 0 && s + g >= k && (m.rowSpan -= i.getOverlapRangeAtIndex(k, L, s, s + g));
      }
      for (let s = 0, r = R.length; s < r; s++)
        i.removeItem(R[s]);
    }
    a.innerHTML += d, a.colSpan = o, a.rowSpan = b, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, a), i.addClass(a, "se-table-selected-cell"), this.focusEdge(a);
  },
  toggleHeader: function() {
    const e = this.util, t = this.context.table.headerButton, i = e.hasClass(t, "active"), n = this.context.table._element;
    if (i)
      e.removeItem(n.querySelector("thead"));
    else {
      const l = e.createElement("THEAD");
      l.innerHTML = "<tr>" + this.plugins.table.createCells.call(this, "th", this.context.table._logical_cellCnt, !1) + "</tr>", n.insertBefore(l, n.firstElementChild);
    }
    e.toggleClass(t, "active"), /TH/i.test(this.context.table._tdElement.nodeName) ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, !1);
  },
  setTableStyle: function(e) {
    const t = this.context.table, i = t._element;
    let n, l, a, u;
    e.indexOf("width") > -1 && (n = t.resizeButton.firstElementChild, l = t.resizeText, t._maxWidth ? (a = t.icons.reduction, u = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(i, "se-table-size-auto"), this.util.addClass(i, "se-table-size-100")) : (a = t.icons.expansion, u = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(i, "se-table-size-100"), this.util.addClass(i, "se-table-size-auto")), this.util.changeElement(n, a), this.util.changeTxt(l, u)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(i, "se-table-layout-auto"), this.util.addClass(i, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(i, "se-table-layout-fixed"), this.util.addClass(i, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
  },
  setActiveButton: function(e, t) {
    const i = this.context.table;
    /^TH$/i.test(e.nodeName) ? (i.insertRowAboveButton.setAttribute("disabled", !0), i.insertRowBelowButton.setAttribute("disabled", !0)) : (i.insertRowAboveButton.removeAttribute("disabled"), i.insertRowBelowButton.removeAttribute("disabled")), !t || e === t ? (i.splitButton.removeAttribute("disabled"), i.mergeButton.setAttribute("disabled", !0)) : (i.splitButton.setAttribute("disabled", !0), i.mergeButton.removeAttribute("disabled"));
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
    const t = this.plugins.table, i = this.util.getParentElement(e.target, this.util.isCell);
    if (t._shift)
      i === t._fixedCell ? t._toggleEditor.call(this, !0) : t._toggleEditor.call(this, !1);
    else if (!t._ref) {
      if (i === t._fixedCell) return;
      t._toggleEditor.call(this, !1);
    }
    !i || i === t._selectedCell || t._fixedCellName !== i.nodeName || t._selectedTable !== this.util.getParentElement(i, "TABLE") || (t._selectedCell = i, t._setMultiCells.call(this, t._fixedCell, i));
  },
  _setMultiCells: function(e, t) {
    const i = this.plugins.table, n = i._selectedTable.rows, l = this.util, a = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let d = 0, v = a.length; d < v; d++)
      l.removeClass(a[d], "se-table-selected-cell");
    if (e === t && (l.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let u = !0, c = [], o = [];
    const b = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let d = 0, v = n.length, w, k; d < v; d++) {
      w = n[d].cells, k = 0;
      for (let L = 0, R = w.length, s, r, f, h; L < R; L++) {
        if (s = w[L], f = s.colSpan - 1, h = s.rowSpan - 1, r = L + k, c.length > 0)
          for (let m = 0, g; m < c.length; m++)
            g = c[m], !(g.row > d) && (r >= g.index ? (k += g.cs, r += g.cs, g.rs -= 1, g.row = d + 1, g.rs < 1 && (c.splice(m, 1), m--)) : L === R - 1 && (g.rs -= 1, g.row = d + 1, g.rs < 1 && (c.splice(m, 1), m--)));
        if (u) {
          if ((s === e || s === t) && (b.cs = b.cs !== null && b.cs < r ? b.cs : r, b.ce = b.ce !== null && b.ce > r + f ? b.ce : r + f, b.rs = b.rs !== null && b.rs < d ? b.rs : d, b.re = b.re !== null && b.re > d + h ? b.re : d + h, b._i += 1), b._i === 2) {
            u = !1, c = [], o = [], d = -1;
            break;
          }
        } else if (l.getOverlapRangeAtIndex(b.cs, b.ce, r, r + f) && l.getOverlapRangeAtIndex(b.rs, b.re, d, d + h)) {
          const m = b.cs < r ? b.cs : r, g = b.ce > r + f ? b.ce : r + f, p = b.rs < d ? b.rs : d, y = b.re > d + h ? b.re : d + h;
          if (b.cs !== m || b.ce !== g || b.rs !== p || b.re !== y) {
            b.cs = m, b.ce = g, b.rs = p, b.re = y, d = -1, c = [], o = [];
            break;
          }
          l.addClass(s, "se-table-selected-cell");
        }
        h > 0 && o.push({
          index: r,
          cs: f + 1,
          rs: h,
          row: -1
        }), k += s.colSpan - 1;
      }
      c = c.concat(o).sort(function(L, R) {
        return L.index - R.index;
      }), o = [];
    }
  },
  _removeEvents: function() {
    const e = this.plugins.table;
    e._initBind && (this._wd.removeEventListener("touchmove", e._initBind), e._initBind = null), e._bindOnSelect && (this._wd.removeEventListener("mousedown", e._bindOnSelect), this._wd.removeEventListener("mousemove", e._bindOnSelect), e._bindOnSelect = null), e._bindOffSelect && (this._wd.removeEventListener("mouseup", e._bindOffSelect), e._bindOffSelect = null), e._bindOffShift && (this._wd.removeEventListener("keyup", e._bindOffShift), e._bindOffShift = null);
  },
  _initBind: null,
  onTableCellMultiSelect: function(e, t) {
    const i = this.plugins.table;
    i._removeEvents.call(this), this.controllersOff(), i._shift = t, i._fixedCell = e, i._fixedCellName = e.nodeName, i._selectedTable = this.util.getParentElement(e, "TABLE");
    const n = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let l = 0, a = n.length; l < a; l++)
      this.util.removeClass(n[l], "se-table-selected-cell");
    this.util.addClass(e, "se-table-selected-cell"), i._bindOnSelect = i._onCellMultiSelect.bind(this), i._bindOffSelect = i._offCellMultiSelect.bind(this), t ? (i._bindOffShift = (function() {
      this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), i._ref || this.controllersOff();
    }).bind(this), this._wd.addEventListener("keyup", i._bindOffShift, !1), this._wd.addEventListener("mousedown", i._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", i._bindOnSelect, !1), this._wd.addEventListener("mouseup", i._bindOffSelect, !1), i._initBind = i.init.bind(this), this._wd.addEventListener("touchmove", i._initBind, !1);
  },
  onClick_tableController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
    if (t.getAttribute("disabled")) return;
    const i = t.getAttribute("data-command"), n = t.getAttribute("data-value"), l = t.getAttribute("data-option"), a = this.plugins.table;
    if (typeof a._closeSplitMenu == "function" && (a._closeSplitMenu(), i === "onsplit") || !i) return;
    e.preventDefault();
    const u = this.context.table;
    switch (i) {
      case "insert":
      case "delete":
        a.editTable.call(this, n, l);
        break;
      case "header":
        a.toggleHeader.call(this);
        break;
      case "onsplit":
        a.openSplitMenu.call(this);
        break;
      case "split":
        a.splitCells.call(this, n);
        break;
      case "merge":
        a.mergeCells.call(this);
        break;
      case "resize":
        u._maxWidth = !u._maxWidth, a.setTableStyle.call(this, "width"), a.setPositionControllerTop.call(this, u._element), a.setPositionControllerDiv.call(this, u._tdElement, a._shift);
        break;
      case "layout":
        u._fixedColumn = !u._fixedColumn, a.setTableStyle.call(this, "column"), a.setPositionControllerTop.call(this, u._element), a.setPositionControllerDiv.call(this, u._tdElement, a._shift);
        break;
      case "remove":
        const c = u._element.parentNode;
        this.util.removeItem(u._element), this.controllersOff(), c !== this.context.element.wysiwyg && this.util.removeItemAllParents(c, function(o) {
          return o.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, Xa = {
  name: "formatBlock",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.formatBlock = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _formatList: null,
      currentFormat: ""
    };
    let n = this.setSubmenu(e);
    n.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.formatBlock._formatList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang.toolbar, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer se-list-format";
    const l = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], a = !t.formats || t.formats.length === 0 ? l : t.formats;
    let u = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let c = 0, o = a.length, b, d, v, w, k, L, R; c < o; c++)
      b = a[c], typeof b == "string" && l.indexOf(b) > -1 ? (d = b.toLowerCase(), v = d === "blockquote" ? "range" : d === "pre" ? "free" : "replace", k = /^h/.test(d) ? d.match(/\d+/)[0] : "", w = i["tag_" + (k ? "h" : d)] + k, R = "", L = "") : (d = b.tag.toLowerCase(), v = b.command, w = b.name || d, R = b.class, L = R ? ' class="' + R + '"' : ""), u += '<li><button type="button" class="se-btn-list" data-command="' + v + '" data-value="' + d + '" data-class="' + R + '" title="' + w + '" aria-label="' + w + '"><' + d + L + ">" + w + "</" + d + "></button></li>";
    return u += "</ul></div>", n.innerHTML = u, n;
  },
  /**
  * @Override core
  */
  active: function(e) {
    let t = this.lang.toolbar.formats;
    const i = this.context.formatBlock.targetText;
    if (!e)
      this.util.changeTxt(i, t);
    else if (this.util.isFormatElement(e)) {
      const l = this.context.formatBlock._formatList, a = e.nodeName.toLowerCase(), u = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let c = 0, o = l.length, b; c < o; c++)
        if (b = l[c], a === b.getAttribute("data-value") && u === b.getAttribute("data-class")) {
          t = b.title;
          break;
        }
      return this.util.changeTxt(i, t), i.setAttribute("data-value", a), i.setAttribute("data-class", u), !0;
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.formatBlock, t = e._formatList, i = e.targetText, n = (i.getAttribute("data-value") || "") + (i.getAttribute("data-class") || "");
    if (n !== e.currentFormat) {
      for (let l = 0, a = t.length, u; l < a; l++)
        u = t[l], n === u.getAttribute("data-value") + u.getAttribute("data-class") ? this.util.addClass(u, "active") : this.util.removeClass(u, "active");
      e.currentFormat = n;
    }
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, n = null, l = null, a = "";
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), n = t.getAttribute("data-value"), a = t.getAttribute("data-class"), i) {
        l = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (i) {
      if (i === "range") {
        const u = l.cloneNode(!1);
        this.applyRangeFormatElement(u);
      } else {
        let u = this.getRange(), c = this.getSelectedElementsAndComponents(!1);
        if (c.length === 0 && (u = this.getRange_addLine(u, null), c = this.getSelectedElementsAndComponents(!1), c.length === 0))
          return;
        const o = u.startOffset, b = u.endOffset, d = this.util;
        let v = c[0], w = c[c.length - 1];
        const k = d.getNodePath(u.startContainer, v, null, null), L = d.getNodePath(u.endContainer, w, null, null), R = this.detachList(c, !1);
        R.sc && (v = R.sc), R.ec && (w = R.ec), this.setRange(d.getNodeFromPath(k, v), o, d.getNodeFromPath(L, w), b);
        const s = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const r = s.length - 1;
          let f = s[r].parentNode, h = l.cloneNode(!1);
          const m = h;
          for (let g = r, p, y, C, _, S, D, T = !0; g >= 0; g--)
            if (p = s[g], p !== (s[g + 1] ? s[g + 1].parentNode : null)) {
              if (D = d.isComponent(p), y = D ? "" : p.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), C = d.getParentElement(p, function(B) {
                return B.parentNode === f;
              }), (f !== p.parentNode || D) && (d.isFormatElement(f) ? (f.parentNode.insertBefore(h, f.nextSibling), f = f.parentNode) : (f.insertBefore(h, C ? C.nextSibling : null), f = p.parentNode), _ = h.nextSibling, _ && h.nodeName === _.nodeName && d.isSameAttributes(h, _) && (h.innerHTML += "<BR>" + _.innerHTML, d.removeItem(_)), h = l.cloneNode(!1), T = !0), S = h.innerHTML, h.innerHTML = (T || !y || !S || /<br>$/i.test(y) ? y : y + "<BR>") + S, g === 0) {
                f.insertBefore(h, p), _ = p.nextSibling, _ && h.nodeName === _.nodeName && d.isSameAttributes(h, _) && (h.innerHTML += "<BR>" + _.innerHTML, d.removeItem(_));
                const B = h.previousSibling;
                B && h.nodeName === B.nodeName && d.isSameAttributes(h, B) && (B.innerHTML += "<BR>" + h.innerHTML, d.removeItem(h));
              }
              D || d.removeItem(p), y && (T = !1);
            }
          this.setRange(m, 0, m, 0);
        } else {
          for (let r = 0, f = s.length, h, m; r < f; r++)
            h = s[r], (h.nodeName.toLowerCase() !== n.toLowerCase() || (h.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== a) && !d.isComponent(h) && (m = l.cloneNode(!1), d.copyFormatAttributes(m, h), m.innerHTML = h.innerHTML, h.parentNode.replaceChild(m, h)), r === 0 && (v = m || h), r === f - 1 && (w = m || h), m = null;
          this.setRange(d.getNodeFromPath(k, v), o, d.getNodeFromPath(L, w), b);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, Ja = {
  name: "lineHeight",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.lineHeight = {
      _sizeList: null,
      currentSize: -1
    };
    let n = this.setSubmenu(e), l = n.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.lineHeight._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer";
    const l = t.lineHeights ? t.lineHeights : [
      { text: "1", value: 1 },
      { text: "1.15", value: 1.15 },
      { text: "1.5", value: 1.5 },
      { text: "2", value: 2 }
    ];
    let a = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let u = 0, c = l.length, o; u < c; u++)
      o = l[u], a += '<li><button type="button" class="se-btn-list" data-value="' + o.value + '" title="' + o.text + '" aria-label="' + o.text + '">' + o.text + "</button></li>";
    return a += "</ul></div>", n.innerHTML = a, n;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.lineHeight, t = e._sizeList, i = this.util.getFormatElement(this.getSelectionNode()), n = i ? i.style.lineHeight + "" : "";
    if (n !== e.currentSize) {
      for (let l = 0, a = t.length; l < a; l++)
        n === t[l].getAttribute("data-value") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
      e.currentSize = n;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value") || "", i = this.getSelectedElements();
    for (let n = 0, l = i.length; n < l; n++)
      i[n].style.lineHeight = t;
    this.submenuOff(), this.history.push(!1);
  }
}, Qa = {
  name: "template",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.template = {
      selectedIndex: -1
    };
    let n = this.setSubmenu(e);
    n.querySelector("ul").addEventListener("click", this.pickup.bind(e)), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.options.templates;
    if (!t || t.length === 0)
      throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
    const i = e.util.createElement("DIV");
    i.className = "se-list-layer";
    let n = '<div class="se-submenu se-list-inner"><ul class="se-list-basic">';
    for (let l = 0, a = t.length, u; l < a; l++)
      u = t[l], n += '<li><button type="button" class="se-btn-list" data-value="' + l + '" title="' + u.name + '" aria-label="' + u.name + '">' + u.name + "</button></li>";
    return n += "</ul></div>", i.innerHTML = n, i;
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
}, er = {
  name: "paragraphStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.paragraphStyle = {
      _classList: null
    };
    let n = this.setSubmenu(e);
    n.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.paragraphStyle._classList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
    const n = e.lang.menu, l = {
      spaced: {
        name: n.spaced,
        class: "__se__p-spaced",
        _class: ""
      },
      bordered: {
        name: n.bordered,
        class: "__se__p-bordered",
        _class: ""
      },
      neon: {
        name: n.neon,
        class: "__se__p-neon",
        _class: ""
      }
    }, a = !t.paragraphStyles || t.paragraphStyles.length === 0 ? ["spaced", "bordered", "neon"] : t.paragraphStyles;
    let u = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let c = 0, o = a.length, b, d, v, w; c < o; c++) {
      if (b = a[c], typeof b == "string") {
        const k = l[b.toLowerCase()];
        if (!k) continue;
        b = k;
      }
      d = b.name, v = b.class ? ' class="' + b.class + '"' : "", w = b._class, u += '<li><button type="button" class="se-btn-list' + (w ? " " + w : "") + '" data-value="' + b.class + '" title="' + d + '" aria-label="' + d + '"><div' + v + ">" + d + "</div></button></li>";
    }
    return u += "</ul></div>", i.innerHTML = u, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const t = this.context.paragraphStyle._classList, i = this.util.getFormatElement(this.getSelectionNode());
    for (let n = 0, l = t.length; n < l; n++)
      this.util.hasClass(i, t[n].getAttribute("data-value")) ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !/^UL$/i.test(t.tagName) && (i = t.getAttribute("data-value"), !i); )
      t = t.parentNode;
    if (!i) return;
    let n = this.getSelectedElements();
    if (n.length === 0 && (this.getRange_addLine(this.getRange(), null), n = this.getSelectedElements(), n.length === 0))
      return;
    const l = this.util.hasClass(t, "active") ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
    for (let a = 0, u = n.length; a < u; a++)
      l(n[a], i);
    this.submenuOff(), this.history.push(!1);
  }
}, tr = {
  name: "textStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.textStyle = {
      _styleList: null
    };
    let n = this.setSubmenu(e), l = n.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.textStyle._styleList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
    const n = {
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
    }, l = t.textStyles ? t.textStyles : e._w.Object.keys(n);
    let a = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let u = 0, c = l.length, o, b, d, v, w, k, L; u < c; u++) {
      if (o = l[u], v = "", k = "", w = [], typeof o == "string") {
        const R = n[o.toLowerCase()];
        if (!R) continue;
        o = R;
      }
      d = o.name, b = o.tag || "span", L = o._class, o.style && (v += ' style="' + o.style + '"', k += o.style.replace(/:[^;]+(;|$)\s*/g, ","), w.push("style")), o.class && (v += ' class="' + o.class + '"', k += "." + o.class.trim().replace(/\s+/g, ",."), w.push("class")), k = k.replace(/,$/, ""), a += '<li><button type="button" class="se-btn-list' + (L ? " " + L : "") + '" data-command="' + b + '" data-value="' + k + '" title="' + d + '" aria-label="' + d + '"><' + b + v + ">" + d + "</" + b + "></button></li>";
    }
    return a += "</ul></div>", i.innerHTML = a, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, n = this.getSelectionNode();
    for (let l = 0, a = i.length, u, c, o; l < a; l++) {
      u = i[l], c = u.getAttribute("data-value").split(",");
      for (let b = 0, d, v; b < c.length; b++) {
        for (d = n, o = !1; d && !e.isFormatElement(d) && !e.isComponent(d); ) {
          if (d.nodeName.toLowerCase() === u.getAttribute("data-command").toLowerCase() && (v = c[b], /^\./.test(v) ? e.hasClass(d, v.replace(/^\./, "")) : d.style[v])) {
            o = !0;
            break;
          }
          d = d.parentNode;
        }
        if (!o) break;
      }
      o ? e.addClass(u, "active") : e.removeClass(u, "active");
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, n = null;
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), i) {
        n = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!i) return;
    const l = n.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
    l.pop();
    const a = n.classList;
    for (let o = 0, b = a.length; o < b; o++)
      l.push("." + a[o]);
    const u = this.util.hasClass(t, "active") ? null : n.cloneNode(!1), c = u ? null : [n.nodeName];
    this.nodeChange(u, l, c, !0), this.submenuOff();
  }
};
var Bi = { exports: {} }, ir = Bi.exports, sn;
function lr() {
  return sn || (sn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ir, function(t, i) {
      const n = {
        name: "dialog",
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function(l) {
          const a = l.context;
          a.dialog = {
            kind: "",
            updateModal: !1,
            _closeSignal: !1
          };
          let u = l.util.createElement("DIV");
          u.className = "se-dialog sun-editor-common";
          let c = l.util.createElement("DIV");
          c.className = "se-dialog-back", c.style.display = "none";
          let o = l.util.createElement("DIV");
          o.className = "se-dialog-inner", o.style.display = "none", u.appendChild(c), u.appendChild(o), a.dialog.modalArea = u, a.dialog.back = c, a.dialog.modal = o, a.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(l)), a.dialog.modal.addEventListener("click", this._onClick_dialog.bind(l)), a.element.relative.appendChild(u), u = null, c = null, o = null;
        },
        /**
         * @description Event to control the behavior of closing the dialog
         * @param {MouseEvent} e Event object
         * @private
         */
        _onMouseDown_dialog: function(l) {
          /se-dialog-inner/.test(l.target.className) ? this.context.dialog._closeSignal = !0 : this.context.dialog._closeSignal = !1;
        },
        /**
         * @description Event to close the window when the outside area of the dialog or close button is click
         * @param {MouseEvent} e Event object
         * @private
         */
        _onClick_dialog: function(l) {
          (/close/.test(l.target.getAttribute("data-command")) || this.context.dialog._closeSignal) && this.plugins.dialog.close.call(this);
        },
        /**
         * @description Open a Dialog plugin
         * @param {String} kind Dialog plugin name
         * @param {Boolean} update Whether it will open for update ('image' === this.currentControllerName)
         */
        open: function(l, a) {
          if (this.modalForm) return !1;
          this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = (function(c) {
            /27/.test(c.keyCode) && this.plugins.dialog.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = a, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = l, this.modalForm = this.context[l].modal;
          const u = this.context[l].focusElement;
          typeof this.plugins[l].on == "function" && this.plugins[l].on.call(this, a), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", u && u.focus();
        },
        _bindClose: null,
        /**
         * @description Close a Dialog plugin
         * The plugin's "init" method is called.
         */
        close: function() {
          this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null);
          const l = this.context.dialog.kind;
          this.modalForm.style.display = "none", this.context.dialog.back.style.display = "none", this.context.dialog.modalArea.style.display = "none", this.context.dialog.updateModal = !1, typeof this.plugins[l].init == "function" && this.plugins[l].init.call(this), this.context.dialog.kind = "", this.modalForm = null, this.focus();
        }
      };
      return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "dialog", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: n
      })), n;
    });
  }(Bi)), Bi.exports;
}
var nr = /* @__PURE__ */ lr();
const Kt = /* @__PURE__ */ Se(nr), or = {
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
  createList: function(e, t, i) {
    e.form.innerHTML = "<ul>" + i + "</ul>", e.items = t, e.menus = e.form.querySelectorAll("li");
  },
  initEvent: function(e, t) {
    const i = t.querySelector(".se-select-list"), n = this.context.selectMenu.caller[e] = {
      form: i,
      items: [],
      menus: [],
      index: -1,
      item: null,
      clickMethod: null,
      callerName: e
    };
    i.addEventListener("mousedown", this.plugins.selectMenu.onMousedown_list), i.addEventListener("mousemove", this.plugins.selectMenu.onMouseMove_list.bind(this, n)), i.addEventListener("click", this.plugins.selectMenu.onClick_list.bind(this, n));
  },
  onMousedown_list: function(e) {
    e.preventDefault(), e.stopPropagation();
  },
  onMouseMove_list: function(e, t) {
    this.util.addClass(e.form, "__se_select-menu-mouse-move");
    const i = t.target.getAttribute("data-index");
    i && (e.index = i * 1);
  },
  onClick_list: function(e, t) {
    const i = t.target.getAttribute("data-index");
    i && e.clickMethod.call(this, e.items[i]);
  },
  moveItem: function(e, t) {
    this.util.removeClass(e.form, "__se_select-menu-mouse-move"), t = e.index + t;
    const i = e.menus, n = i.length, l = e.index = t >= n ? 0 : t < 0 ? n - 1 : t;
    for (let a = 0; a < n; a++)
      a === l ? this.util.addClass(i[a], "active") : this.util.removeClass(i[a], "active");
    e.item = e.items[l];
  },
  getItem: function(e, t) {
    return t = !t || t < 0 ? e.index : t, e.items[t];
  },
  on: function(e, t) {
    const i = this.context.selectMenu.caller[e];
    this.context.selectMenu.callerContext = i, i.clickMethod = t, i.callerName = e;
  },
  open: function(e, t) {
    const i = e.form;
    i.style.visibility = "hidden", i.style.display = "block", t(i), i.style.visibility = "";
  },
  close: function(e) {
    e.form.style.display = "none", e.items = [], e.menus = [], e.index = -1, e.item = null;
  },
  init: function(e) {
    e && (e.items = [], e.menus = [], e.index = -1, e.item = null, e.callerName = "", this.context.selectMenu.callerContext = null);
  }
}, Xn = {
  name: "anchor",
  add: function(e) {
    e.addModule([or]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, i = e.options.linkRel, n = (e.options.linkRelDefault.default || "").split(" "), l = e.icons, a = e.util.createElement("DIV");
    let u = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + l.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + l.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + l.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (i.length > 0) {
      u += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let c = 0, o = i.length, b; c < o; c++)
        b = i[c], u += '<li><button type="button" class="se-btn-list' + (n.indexOf(b) > -1 ? " se-checked" : "") + '" data-command="' + b + '" title="' + b + '" aria-label="' + b + '"><span class="se-svg">' + l.checked + "</span>" + b + "</button></li>";
      u += "</ul></div></div></div>";
    }
    return u += "</div></div>", a.innerHTML = u, a;
  },
  initEvent: function(e, t) {
    const i = this.plugins.anchor, n = this.context.anchor.caller[e] = {
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
    typeof n.linkDefaultRel.default == "string" && (n.linkDefaultRel.default = n.linkDefaultRel.default.trim()), typeof n.linkDefaultRel.check_new_window == "string" && (n.linkDefaultRel.check_new_window = n.linkDefaultRel.check_new_window.trim()), typeof n.linkDefaultRel.check_bookmark == "string" && (n.linkDefaultRel.check_bookmark = n.linkDefaultRel.check_bookmark.trim()), n.urlInput = t.querySelector(".se-input-url"), n.anchorText = t.querySelector("._se_anchor_text"), n.newWindowCheck = t.querySelector("._se_anchor_check"), n.downloadCheck = t.querySelector("._se_anchor_download"), n.download = t.querySelector("._se_anchor_download_icon"), n.preview = t.querySelector(".se-link-preview"), n.bookmark = t.querySelector("._se_anchor_bookmark_icon"), n.bookmarkButton = t.querySelector("._se_bookmark_button"), this.plugins.selectMenu.initEvent.call(this, e, t);
    const l = this.context.selectMenu.caller[e];
    this.options.linkRel.length > 0 && (n.relButton = t.querySelector(".se-anchor-rel-btn"), n.relList = t.querySelector(".se-list-layer"), n.relPreview = t.querySelector(".se-anchor-rel-preview"), n.relButton.addEventListener("click", i.onClick_relButton.bind(this, n)), n.relList.addEventListener("click", i.onClick_relList.bind(this, n))), n.newWindowCheck.addEventListener("change", i.onChange_newWindowCheck.bind(this, n)), n.downloadCheck.addEventListener("change", i.onChange_downloadCheck.bind(this, n)), n.anchorText.addEventListener("input", i.onChangeAnchorText.bind(this, n)), n.urlInput.addEventListener("input", i.onChangeUrlInput.bind(this, n)), n.urlInput.addEventListener("keydown", i.onKeyDownUrlInput.bind(this, l)), n.urlInput.addEventListener("focus", i.onFocusUrlInput.bind(this, n, l)), n.urlInput.addEventListener("blur", i.onBlurUrlInput.bind(this, l)), n.bookmarkButton.addEventListener("click", i.onClick_bookmarkButton.bind(this, n));
  },
  on: function(e, t) {
    const i = this.plugins.anchor;
    if (!t)
      i.init.call(this, e), e.anchorText.value = this.getSelection().toString().trim(), e.newWindowCheck.checked = this.options.linkTargetNewWindow;
    else if (e.linkAnchor) {
      this.context.dialog.updateModal = !0;
      const n = e.linkAnchor.getAttribute("href");
      e.linkValue = e.preview.textContent = e.urlInput.value = i.selfPathBookmark.call(this, n) ? n.substr(n.lastIndexOf("#")) : n, e.anchorText.value = e.linkAnchor.textContent, e.newWindowCheck.checked = !!/_blank/i.test(e.linkAnchor.target), e.downloadCheck.checked = e.linkAnchor.download;
    }
    this.context.anchor.callerContext = e, i.setRel.call(this, e, t && e.linkAnchor ? e.linkAnchor.rel : e.defaultRel), i.setLinkPreview.call(this, e, e.linkValue), this.plugins.selectMenu.on.call(this, e.callerName, this.plugins.anchor.setHeaderBookmark);
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
      const i = e.relButton, n = e.relList;
      this.util.addClass(i, "active"), n.style.visibility = "hidden", n.style.display = "block", this.options.rtl ? n.style.left = i.offsetLeft - n.offsetWidth - 1 + "px" : n.style.left = i.offsetLeft + i.offsetWidth + 1 + "px", n.style.top = i.offsetTop + i.offsetHeight / 2 - n.offsetHeight / 2 + "px", n.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(l, a, u) {
        u && (l.relButton.contains(u.target) || l.relList.contains(u.target)) || (this.util.removeClass(a, "active"), l.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, i), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const i = t.target, n = i.getAttribute("data-command");
    if (!n) return;
    const l = e.currentRel, a = this.util.toggleClass(i, "se-checked"), u = l.indexOf(n);
    a ? u === -1 && l.push(n) : u > -1 && l.splice(u, 1), e.relPreview.title = e.relPreview.textContent = l.join(" ");
  },
  setRel: function(e, t) {
    const i = e.relList, n = e.currentRel = t ? t.split(" ") : [];
    if (!i) return;
    const l = i.querySelectorAll("button");
    for (let a = 0, u = l.length, c; a < u; a++)
      c = l[a].getAttribute("data-command"), n.indexOf(c) > -1 ? this.util.addClass(l[a], "se-checked") : this.util.removeClass(l[a], "se-checked");
    e.relPreview.title = e.relPreview.textContent = n.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const n = this.util.getListChildren(this.context.element.wysiwyg, function(c) {
      return /h[1-6]/i.test(c.nodeName);
    });
    if (n.length === 0) return;
    const l = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), a = [];
    let u = "";
    for (let c = 0, o = n.length, b; c < o; c++)
      b = n[c], l.test(b.textContent) && (a.push(b), u += '<li class="se-select-item" data-index="' + c + '">' + b.textContent + "</li>");
    a.length === 0 ? this.plugins.selectMenu.close.call(this, t) : (this.plugins.selectMenu.createList(t, a, u), this.plugins.selectMenu.open.call(this, t, this.plugins.anchor._setMenuListPosition.bind(this, e)));
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
    const t = this.context.anchor.callerContext, i = e.id || "h_" + this._w.Math.random().toString().replace(/.+\./, "");
    e.id = i, t.urlInput.value = "#" + i, (!t.anchorText.value.trim() || !t._change) && (t.anchorText.value = e.textContent), this.plugins.anchor.setLinkPreview.call(this, t, t.urlInput.value), this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext), this.context.anchor.callerContext.urlInput.focus();
  },
  onChangeAnchorText: function(e, t) {
    e._change = !!t.target.value.trim();
  },
  onChangeUrlInput: function(e, t) {
    const i = t.target.value.trim();
    this.plugins.anchor.setLinkPreview.call(this, e, i), this.plugins.anchor.selfPathBookmark.call(this, i) ? this.plugins.anchor.createHeaderList.call(this, e, this.context.selectMenu.callerContext, i) : this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
  },
  onFocusUrlInput: function(e, t) {
    const i = e.urlInput.value;
    this.plugins.anchor.selfPathBookmark.call(this, i) && this.plugins.anchor.createHeaderList.call(this, e, t, i);
  },
  onBlurUrlInput: function(e) {
    this.plugins.selectMenu.close.call(this, e);
  },
  setLinkPreview: function(e, t) {
    const i = e.preview, n = this.options.linkProtocol, l = this.options.linkNoPrefix, a = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(n) === 0, u = n ? this._w.RegExp("^" + this.util.escapeStringRegexp(t.substr(0, n.length))).test(n) : !1;
    t = e.linkValue = i.textContent = t ? l ? t : n && !a && !u ? n + t : a ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
  },
  setCtx: function(e, t) {
    e && (t.linkAnchor = e, t.linkValue = e.href, t.currentRel = e.rel.split(" "));
  },
  updateAnchor: function(e, t, i, n, l) {
    !this.plugins.anchor.selfPathBookmark.call(this, t) && n.downloadCheck.checked ? e.setAttribute("download", i || t) : e.removeAttribute("download"), n.newWindowCheck.checked ? e.target = "_blank" : e.removeAttribute("target");
    const a = n.currentRel.join(" ");
    a ? e.rel = a : e.removeAttribute("rel"), e.href = t, l ? e.children.length === 0 && (e.textContent = "") : e.textContent = i;
  },
  createAnchor: function(e, t) {
    if (e.linkValue.length === 0) return null;
    const i = e.linkValue, n = e.anchorText, l = n.value.length === 0 ? i : n.value, a = e.linkAnchor || this.util.createElement("A");
    return this.plugins.anchor.updateAnchor.call(this, a, i, l, e, t), e.linkValue = e.preview.textContent = e.urlInput.value = e.anchorText.value = "", a;
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
    const i = e.currentRel;
    if (!t) return i.join(" ");
    if (/^only\:/.test(t))
      return t = t.replace(/^only\:/, "").trim(), e.currentRel = t.split(" "), t;
    const n = t.split(" ");
    for (let l = 0, a = n.length, u; l < a; l++)
      u = i.indexOf(n[l]), u === -1 && i.push(n[l]);
    return i.join(" ");
  },
  _relDelete: function(e, t) {
    if (!t) return e.currentRel.join(" ");
    /^only\:/.test(t) && (t = t.replace(/^only\:/, "").trim());
    const i = e.currentRel.join(" ").replace(this._w.RegExp(t + "\\s*"), "");
    return e.currentRel = i.split(" "), i;
  },
  init: function(e) {
    e.linkAnchor = null, e.linkValue = e.preview.textContent = e.urlInput.value = "", e.anchorText.value = "", e.newWindowCheck.checked = !1, e.downloadCheck.checked = !1, e._change = !1, this.plugins.anchor.setRel.call(this, e, e.defaultRel), e.relList && this.plugins.anchor.toggleRelList.call(this, e, !1), this.context.anchor.callerContext = null, this.plugins.selectMenu.init.call(this, this.context.selectMenu.callerContext);
  }
}, sr = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([Kt, Xn]);
    const t = e.context, i = t.link = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      _linkAnchor: null,
      anchorCtx: null
    };
    let n = this.setDialog(e);
    i.modal = n;
    let l = this.setController_LinkButton(e);
    i.linkController = l, n.querySelector("form").addEventListener("submit", this.submit.bind(e)), l.addEventListener("click", this.onClick_linkController.bind(e)), t.dialog.modal.appendChild(n), t.element.relative.appendChild(l), e.plugins.anchor.initEvent.call(e, "link", n), i.focusElement = t.anchor.caller.link.urlInput, n = null, l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), n = e.icons;
    i.className = "se-dialog-content", i.style.display = "none";
    let l = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + n.cancel + '</button><span class="se-modal-title">' + t.dialogBox.linkBox.title + "</span></div>" + e.context.anchor.forms.innerHTML + '<div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>";
    return i.innerHTML = l, i;
  },
  /** modify controller button */
  setController_LinkButton: function(e) {
    const t = e.lang, i = e.icons, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-link", n.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + i.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.unlink + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", n;
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
        const i = this.context.link._linkAnchor.childNodes[0];
        this.setRange(i, 0, i, i.textContent.length);
      } else {
        const i = this.getSelectedElements();
        if (i.length > 1) {
          const n = this.util.createElement(i[0].nodeName);
          if (n.appendChild(t), !this.insertNode(n, null, !0)) return;
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
    const t = this.context.link.linkController, i = t.querySelector("a");
    i.href = e.href, i.title = e.textContent, i.textContent = e.textContent, this.util.addClass(e, "on"), this.setControllerPosition(t, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t, e, "link", this.util.removeClass.bind(this.util, this.context.link._linkAnchor, "on"));
  },
  onClick_linkController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    if (t) {
      if (e.preventDefault(), /update/.test(t))
        this.plugins.dialog.open.call(this, "link", !0);
      else if (/unlink/.test(t)) {
        const i = this.util.getChildElement(this.context.link._linkAnchor, function(l) {
          return l.childNodes.length === 0 || l.nodeType === 3;
        }, !1), n = this.util.getChildElement(this.context.link._linkAnchor, function(l) {
          return l.childNodes.length === 0 || l.nodeType === 3;
        }, !0);
        this.setRange(i, 0, n, n.textContent.length), this.nodeChange(null, null, ["A"], !1);
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
var zi = { exports: {} }, ar = zi.exports, an;
function rr() {
  return an || (an = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ar, function(t, i) {
      const n = {
        name: "component",
        /**
         * @description Create a container for the resizing component and insert the element.
         * @param {Element} cover Cover element (FIGURE)
         * @param {String} className Class name of container (fixed: se-component)
         * @returns {Element} Created container element
         */
        set_container: function(l, a) {
          const u = this.util.createElement("DIV");
          return u.className = "se-component " + a, u.appendChild(l), u;
        },
        /**
         * @description Cover the target element with a FIGURE element.
         * @param {Element} element Target element
         */
        set_cover: function(l) {
          const a = this.util.createElement("FIGURE");
          return a.appendChild(l), a;
        },
        /**
         * @description Return HTML string of caption(FIGCAPTION) element
         * @returns {String}
         */
        create_caption: function() {
          const l = this.util.createElement("FIGCAPTION");
          return l.innerHTML = "<div>" + this.lang.dialogBox.caption + "</div>", l;
        }
      };
      return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "component", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: n
      })), n;
    });
  }(zi)), zi.exports;
}
var ur = /* @__PURE__ */ rr();
const tl = /* @__PURE__ */ Se(ur);
var Ni = { exports: {} }, dr = Ni.exports, rn;
function cr() {
  return rn || (rn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : dr, function(t, i) {
      const n = {
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
        add: function(l) {
          const a = l.icons, u = l.context;
          u.resizing = {
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
          let c = this.setController_resize(l);
          u.resizing.resizeContainer = c, u.resizing.resizeDiv = c.querySelector(".se-modal-resize"), u.resizing.resizeDot = c.querySelector(".se-resize-dot"), u.resizing.resizeDisplay = c.querySelector(".se-resize-display");
          let o = this.setController_button(l);
          u.resizing.resizeButton = o;
          let b = u.resizing.resizeHandles = u.resizing.resizeDot.querySelectorAll("span");
          u.resizing.resizeButtonGroup = o.querySelector("._se_resizing_btn_group"), u.resizing.rotationButtons = o.querySelectorAll("._se_resizing_btn_group ._se_rotation"), u.resizing.percentageButtons = o.querySelectorAll("._se_resizing_btn_group ._se_percentage"), u.resizing.alignMenu = o.querySelector(".se-resizing-align-list"), u.resizing.alignMenuList = u.resizing.alignMenu.querySelectorAll("button"), u.resizing.alignButton = o.querySelector("._se_resizing_align_button"), u.resizing.autoSizeButton = o.querySelector("._se_resizing_btn_group ._se_auto_size"), u.resizing.captionButton = o.querySelector("._se_resizing_caption_button"), c.addEventListener("mousedown", function(d) {
            d.preventDefault();
          }), b[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), o.addEventListener("click", this.onClick_resizeButton.bind(l)), u.element.relative.appendChild(c), u.element.relative.appendChild(o), c = null, o = null, b = null;
        },
        /** resize controller, button (image, iframe, video) */
        setController_resize: function(l) {
          const a = l.util.createElement("DIV");
          return a.className = "se-controller se-resizing-container", a.style.display = "none", a.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', a;
        },
        setController_button: function(l) {
          const a = l.lang, u = l.icons, c = l.util.createElement("DIV");
          return c.className = "se-controller se-controller-resizing", c.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + u.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + u.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + u.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + u.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + u.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + u.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + u.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + u.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + u.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + u.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + u.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + u.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + u.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + u.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.remove + "</span></span></button></div>", c;
        },
        /**
         * @description Gets the width size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeX: function(l, a, u, c) {
          return a || (a = l._element), u || (u = l._cover), c || (c = l._container), a ? /%$/.test(a.style.width) ? (c && this.util.getNumber(c.style.width, 2) || 100) + "%" : a.style.width : "";
        },
        /**
         * @description Gets the height size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeY: function(l, a, u, c) {
          return a || (a = l._element), u || (u = l._cover), c || (c = l._container), !c || !u ? a && a.style.height || "" : this.util.getNumber(u.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? u.style.height : !/%$/.test(a.style.height) || !/%$/.test(a.style.width) ? a.style.height : (c && this.util.getNumber(c.style.height, 2) || 100) + "%";
        },
        /**
         * @description Called at the "openModify" to put the size of the current target into the size input element.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Object} pluginObj Plugin object
         */
        _module_setModifyInputSize: function(l, a) {
          const u = l._onlyPercentage && this.context.resizing._rotateVertical;
          l.proportion.checked = l._proportionChecked = l._element.getAttribute("data-proportion") !== "false";
          let c = u ? "" : this.plugins.resizing._module_getSizeX.call(this, l);
          if (c === l._defaultSizeX && (c = ""), l._onlyPercentage && (c = this.util.getNumber(c, 2)), l.inputX.value = c, a.setInputSize.call(this, "x"), !l._onlyPercentage) {
            let o = u ? "" : this.plugins.resizing._module_getSizeY.call(this, l);
            o === l._defaultSizeY && (o = ""), l._onlyPercentage && (o = this.util.getNumber(o, 2)), l.inputY.value = o;
          }
          l.inputX.disabled = !!u, l.inputY.disabled = !!u, l.proportion.disabled = !!u, a.setRatio.call(this);
        },
        /**
         * @description It is called in "setInputSize" (input tag keyupEvent), 
         * checks the value entered in the input tag, 
         * calculates the ratio, and sets the calculated value in the input tag of the opposite size.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {String} xy 'x': width, 'y': height
         */
        _module_setInputSize: function(l, a) {
          if (l._onlyPercentage) {
            a === "x" && l.inputX.value > 100 && (l.inputX.value = 100);
            return;
          }
          if (l.proportion.checked && l._ratio && /\d/.test(l.inputX.value) && /\d/.test(l.inputY.value)) {
            const u = l.inputX.value.replace(/\d+|\./g, "") || l.sizeUnit, c = l.inputY.value.replace(/\d+|\./g, "") || l.sizeUnit;
            if (u !== c) return;
            const o = u === "%" ? 2 : 0;
            a === "x" ? l.inputY.value = this.util.getNumber(l._ratioY * this.util.getNumber(l.inputX.value, o), o) + c : l.inputX.value = this.util.getNumber(l._ratioX * this.util.getNumber(l.inputY.value, o), o) + u;
          }
        },
        /**
         * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
         * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_setRatio: function(l) {
          const a = l.inputX.value, u = l.inputY.value;
          if (l.proportion.checked && /\d+/.test(a) && /\d+/.test(u)) {
            const c = a.replace(/\d+|\./g, "") || l.sizeUnit, o = u.replace(/\d+|\./g, "") || l.sizeUnit;
            if (c !== o)
              l._ratio = !1;
            else if (!l._ratio) {
              const b = this.util.getNumber(a, 0), d = this.util.getNumber(u, 0);
              l._ratio = !0, l._ratioX = b / d, l._ratioY = d / b;
            }
          } else
            l._ratio = !1;
        },
        /**
         * @description Revert size of element to origin size (plugin._origin_w, plugin._origin_h)
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_sizeRevert: function(l) {
          l._onlyPercentage ? l.inputX.value = l._origin_w > 100 ? 100 : l._origin_w : (l.inputX.value = l._origin_w, l.inputY.value = l._origin_h);
        },
        /**
         * @description Save the size data (element.setAttribute("data-size"))
         * Used at the "setSize" method
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_saveCurrentSize: function(l) {
          const a = this.plugins.resizing._module_getSizeX.call(this, l), u = this.plugins.resizing._module_getSizeY.call(this, l);
          l._element.setAttribute("width", a.replace("px", "")), l._element.setAttribute("height", u.replace("px", "")), l._element.setAttribute("data-size", a + "," + u), l._videoRatio && (l._videoRatio = u);
        },
        /**
         * @description Call the resizing module
         * @param {Element} targetElement Resizing target element
         * @param {string} plugin Plugin name
         * @returns {Object} Size of resizing div {w, h, t, l}
         */
        call_controller_resize: function(l, a) {
          const u = this.context.resizing, c = this.context[a];
          u._resize_plugin = a;
          const o = u.resizeContainer, b = u.resizeDiv, d = this.util.getOffset(l, this.context.element.wysiwygFrame), v = u._rotateVertical = /^(90|270)$/.test(Math.abs(l.getAttribute("data-rotate")).toString()), w = v ? l.offsetHeight : l.offsetWidth, k = v ? l.offsetWidth : l.offsetHeight, L = d.top, R = d.left - this.context.element.wysiwygFrame.scrollLeft;
          o.style.top = L + "px", o.style.left = R + "px", o.style.width = w + "px", o.style.height = k + "px", b.style.top = "0px", b.style.left = "0px", b.style.width = w + "px", b.style.height = k + "px";
          let s = l.getAttribute("data-align") || "basic";
          s = s === "none" ? "basic" : s;
          const r = this.util.getParentElement(l, this.util.isComponent), f = this.util.getParentElement(l, "FIGURE"), h = this.plugins.resizing._module_getSizeX.call(this, c, l, f, r) || "auto", m = c._onlyPercentage && a === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, c, l, f, r) || "auto");
          this.util.changeTxt(u.resizeDisplay, this.lang.dialogBox[s] + " (" + h + m + ")"), u.resizeButtonGroup.style.display = c._resizing ? "" : "none";
          const g = c._resizing && !c._resizeDotHide && !c._onlyPercentage ? "flex" : "none", p = u.resizeHandles;
          for (let T = 0, B = p.length; T < B; T++)
            p[T].style.display = g;
          if (c._resizing) {
            const T = u.rotationButtons;
            T[0].style.display = T[1].style.display = c._rotation ? "" : "none";
          }
          if (c._alignHide)
            u.alignButton.style.display = "none";
          else {
            u.alignButton.style.display = "";
            const T = u.alignMenuList;
            this.util.changeElement(u.alignButton.firstElementChild, u.alignIcons[s]);
            for (let B = 0, A = T.length; B < A; B++)
              T[B].getAttribute("data-value") === s ? this.util.addClass(T[B], "on") : this.util.removeClass(T[B], "on");
          }
          const y = u.percentageButtons, C = /%$/.test(l.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
          for (let T = 0, B = y.length; T < B; T++)
            y[T].getAttribute("data-value") === C ? this.util.addClass(y[T], "active") : this.util.removeClass(y[T], "active");
          c._captionShow ? (u.captionButton.style.display = "", this.util.getChildElement(l.parentNode, "figcaption") ? (this.util.addClass(u.captionButton, "active"), c._captionChecked = !0) : (this.util.removeClass(u.captionButton, "active"), c._captionChecked = !1)) : u.captionButton.style.display = "none", o.style.display = "block";
          const _ = { left: 0, top: 50 };
          this.options.iframe && (_.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, _.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(u.resizeButton, o, "bottom", _);
          const S = function() {
            this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
          };
          this.controllersOn(o, u.resizeButton, S.bind(this), l, a), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), u._resize_w = w, u._resize_h = k;
          const D = (l.getAttribute("origin-size") || "").split(",");
          return u._origin_w = D[0] || l.naturalWidth, u._origin_h = D[1] || l.naturalHeight, {
            w,
            h: k,
            t: L,
            l: R
          };
        },
        _closeAlignMenu: null,
        /**
         * @description Open align submenu of module
         */
        openAlignMenu: function() {
          const l = this.context.resizing.alignButton;
          this.util.addClass(l, "on"), this.context.resizing.alignMenu.style.top = l.offsetTop + l.offsetHeight + "px", this.context.resizing.alignMenu.style.left = l.offsetLeft - l.offsetWidth / 2 + "px", this.context.resizing.alignMenu.style.display = "block", this.plugins.resizing._closeAlignMenu = (function() {
            this.util.removeClass(this.context.resizing.alignButton, "on"), this.context.resizing.alignMenu.style.display = "none", this.removeDocEvent("click", this.plugins.resizing._closeAlignMenu), this.plugins.resizing._closeAlignMenu = null;
          }).bind(this), this.addDocEvent("click", this.plugins.resizing._closeAlignMenu);
        },
        /**
         * @description Click event of resizing toolbar
         * Performs the action of the clicked toolbar button.
         * @param {MouseEvent} e Event object
         */
        onClick_resizeButton: function(l) {
          l.stopPropagation();
          const a = l.target, u = a.getAttribute("data-command") || a.parentNode.getAttribute("data-command");
          if (!u) return;
          const c = a.getAttribute("data-value") || a.parentNode.getAttribute("data-value"), o = this.context.resizing._resize_plugin, b = this.context[o], d = b._element, v = this.plugins[o];
          if (l.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), u === "onalign"))) {
            switch (u) {
              case "auto":
                this.plugins.resizing.resetTransform.call(this, d), v.setAutoSize.call(this), this.selectComponent(d, o);
                break;
              case "percent":
                let w = this.plugins.resizing._module_getSizeY.call(this, b);
                if (this.context.resizing._rotateVertical) {
                  const g = d.getAttribute("data-percentage");
                  g && (w = g.split(",")[1]);
                }
                this.plugins.resizing.resetTransform.call(this, d), v.setPercentSize.call(this, c * 100, this.util.getNumber(w, 0) === null || !/%$/.test(w) ? "" : w), this.selectComponent(d, o);
                break;
              case "mirror":
                const k = d.getAttribute("data-rotate") || "0";
                let L = d.getAttribute("data-rotateX") || "", R = d.getAttribute("data-rotateY") || "";
                c === "h" && !this.context.resizing._rotateVertical || c === "v" && this.context.resizing._rotateVertical ? R = R ? "" : "180" : L = L ? "" : "180", d.setAttribute("data-rotateX", L), d.setAttribute("data-rotateY", R), this.plugins.resizing._setTransForm(d, k, L, R);
                break;
              case "rotate":
                const s = this.context.resizing, r = d.getAttribute("data-rotate") * 1 + c * 1, f = this._w.Math.abs(r) >= 360 ? 0 : r;
                d.setAttribute("data-rotate", f), s._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(f).toString()), this.plugins.resizing.setTransformSize.call(this, d, null, null), this.selectComponent(d, o);
                break;
              case "onalign":
                this.plugins.resizing.openAlignMenu.call(this);
                return;
              case "align":
                const h = c === "basic" ? "none" : c;
                v.setAlign.call(this, h, null, null, null), this.selectComponent(d, o);
                break;
              case "caption":
                const m = !b._captionChecked;
                if (v.openModify.call(this, !0), b._captionChecked = b.captionCheckEl.checked = m, v.update_image.call(this, !1, !1, !1), m) {
                  const g = this.util.getChildElement(b._caption, function(p) {
                    return p.nodeType === 3;
                  });
                  g ? this.setRange(g, 0, g, g.textContent.length) : b._caption.focus(), this.controllersOff();
                } else
                  this.selectComponent(d, o), v.openModify.call(this, !0);
                break;
              case "revert":
                v.setOriginSize.call(this), this.selectComponent(d, o);
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
        resetTransform: function(l) {
          const a = (l.getAttribute("data-size") || l.getAttribute("data-origin") || "").split(",");
          this.context.resizing._rotateVertical = !1, l.style.maxWidth = "", l.style.transform = "", l.style.transformOrigin = "", l.setAttribute("data-rotate", ""), l.setAttribute("data-rotateX", ""), l.setAttribute("data-rotateY", ""), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, a[0] ? a[0] : "auto", a[1] ? a[1] : "", !0);
        },
        /**
         * @description Set the transform style (rotation) of the element.
         * @param {Element} element Target element
         * @param {Number|null} width Element's width size
         * @param {Number|null} height Element's height size
         */
        setTransformSize: function(l, a, u) {
          let c = l.getAttribute("data-percentage");
          const o = this.context.resizing._rotateVertical, b = l.getAttribute("data-rotate") * 1;
          let d = "";
          if (c && !o)
            c = c.split(","), c[0] === "auto" && c[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, c[0], c[1]);
          else {
            const v = this.util.getParentElement(l, "FIGURE"), w = a || l.offsetWidth, k = u || l.offsetHeight, L = (o ? k : w) + "px", R = (o ? w : k) + "px";
            if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, w + "px", k + "px", !0), v.style.width = L, v.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : R, o) {
              let s = w / 2 + "px " + w / 2 + "px 0", r = k / 2 + "px " + k / 2 + "px 0";
              d = b === 90 || b === -270 ? r : s;
            }
          }
          l.style.transformOrigin = d, this.plugins.resizing._setTransForm(l, b.toString(), l.getAttribute("data-rotateX") || "", l.getAttribute("data-rotateY") || ""), o ? l.style.maxWidth = "none" : l.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, l);
        },
        _setTransForm: function(l, a, u, c) {
          let o = (l.offsetWidth - l.offsetHeight) * (/-/.test(a) ? 1 : -1), b = "";
          if (/[1-9]/.test(a) && (u || c))
            switch (b = u ? "Y" : "X", a) {
              case "90":
                b = u && c ? "X" : c ? b : "";
                break;
              case "270":
                o *= -1, b = u && c ? "Y" : u ? b : "";
                break;
              case "-90":
                b = u && c ? "Y" : u ? b : "";
                break;
              case "-270":
                o *= -1, b = u && c ? "X" : c ? b : "";
                break;
              default:
                b = "";
            }
          a % 180 === 0 && (l.style.maxWidth = ""), l.style.transform = "rotate(" + a + "deg)" + (u ? " rotateX(" + u + "deg)" : "") + (c ? " rotateY(" + c + "deg)" : "") + (b ? " translate" + b + "(" + o + "px)" : "");
        },
        /**
         * @description The position of the caption is set automatically.
         * @param {Element} element Target element (not caption element)
         */
        setCaptionPosition: function(l) {
          const a = this.util.getChildElement(this.util.getParentElement(l, "FIGURE"), "FIGCAPTION");
          a && (a.style.marginTop = (this.context.resizing._rotateVertical ? l.offsetWidth - l.offsetHeight : 0) + "px");
        },
        /**
         * @description Mouse down event of resize handles
         * @param {MouseEvent} e Event object 
         */
        onMouseDown_resize_handle: function(l) {
          l.stopPropagation(), l.preventDefault();
          const a = this.context.resizing, u = a._resize_direction = l.target.classList[0];
          a._resizeClientX = l.clientX, a._resizeClientY = l.clientY, this.context.element.resizeBackground.style.display = "block", a.resizeButton.style.display = "none", a.resizeDiv.style.float = /l/.test(u) ? "right" : /r/.test(u) ? "left" : "none";
          const c = (function(d) {
            if (d.type === "keydown" && d.keyCode !== 27) return;
            const v = a._isChange;
            a._isChange = !1, this.removeDocEvent("mousemove", o), this.removeDocEvent("mouseup", c), this.removeDocEvent("keydown", c), d.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, u), v && this.history.push(!1));
          }).bind(this), o = this.plugins.resizing.resizing_element.bind(this, a, u, this.context[a._resize_plugin]);
          this.addDocEvent("mousemove", o), this.addDocEvent("mouseup", c), this.addDocEvent("keydown", c);
        },
        /**
         * @description Mouse move event after call "onMouseDown_resize_handle" of resize handles
         * The size of the module's "div" is adjusted according to the mouse move event.
         * @param {Object} contextResizing "core.context.resizing" object (binding argument)
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh") (binding argument)
         * @param {Object} plugin "core.context[currentPlugin]" object (binding argument)
         * @param {MouseEvent} e Event object
         */
        resizing_element: function(l, a, u, c) {
          const o = c.clientX, b = c.clientY;
          let d = u._element_w, v = u._element_h;
          const w = u._element_w + (/r/.test(a) ? o - l._resizeClientX : l._resizeClientX - o), k = u._element_h + (/b/.test(a) ? b - l._resizeClientY : l._resizeClientY - b), L = u._element_h / u._element_w * w;
          /t/.test(a) && (l.resizeDiv.style.top = u._element_h - (/h/.test(a) ? k : L) + "px"), /l/.test(a) && (l.resizeDiv.style.left = u._element_w - w + "px"), /r|l/.test(a) && (l.resizeDiv.style.width = w + "px", d = w), /^(t|b)[^h]$/.test(a) ? (l.resizeDiv.style.height = L + "px", v = L) : /^(t|b)h$/.test(a) && (l.resizeDiv.style.height = k + "px", v = k), l._resize_w = d, l._resize_h = v, this.util.changeTxt(l.resizeDisplay, this._w.Math.round(d) + " x " + this._w.Math.round(v)), l._isChange = !0;
        },
        /**
         * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
         * Called at the mouse-up event registered in "onMouseDown_resize_handle".
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
         */
        cancel_controller_resize: function(l) {
          const a = this.context.resizing._rotateVertical;
          this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
          let u = this._w.Math.round(a ? this.context.resizing._resize_h : this.context.resizing._resize_w), c = this._w.Math.round(a ? this.context.resizing._resize_w : this.context.resizing._resize_h);
          if (!a && !/%$/.test(u)) {
            const d = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
            this.util.getNumber(u, 0) > d && (c = this._w.Math.round(c / u * d), u = d);
          }
          const o = this.context.resizing._resize_plugin;
          this.plugins[o].setSize.call(this, u, c, !1, l), a && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, u, c), this.selectComponent(this.context[o]._element, o);
        }
      };
      return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "resizing", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: n
      })), n;
    });
  }(Ni)), Ni.exports;
}
var fr = /* @__PURE__ */ cr();
const Jn = /* @__PURE__ */ Se(fr);
var Ai = { exports: {} }, hr = Ai.exports, un;
function pr() {
  return un || (un = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : hr, function(t, i) {
      const n = {
        name: "fileManager",
        _xmlHttp: null,
        _checkMediaComponent: function(l) {
          return /IMG/i.test(l) ? !/FIGURE/i.test(l.parentElement.nodeName) || !/FIGURE/i.test(l.parentElement.parentElement.nodeName) : !0;
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
        upload: function(l, a, u, c, o) {
          this.showLoading();
          const b = this.plugins.fileManager, d = b._xmlHttp = this.util.getXMLHttpRequest();
          if (d.onreadystatechange = b._callBackUpload.bind(this, d, c, o), d.open("post", l, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
            for (let v in a)
              d.setRequestHeader(v, a[v]);
          d.send(u);
        },
        _callBackUpload: function(l, a, u) {
          if (l.readyState === 4)
            if (l.status === 200)
              try {
                a(l);
              } catch (c) {
                throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + c.message + '"');
              } finally {
                this.closeLoading();
              }
            else {
              this.closeLoading();
              const c = l.responseText ? JSON.parse(l.responseText) : l;
              if (typeof u != "function" || u("", c, this)) {
                const o = "[SUNEDITOR.fileManager.upload.serverException] status: " + l.status + ", response: " + (c.errorMessage || l.responseText);
                throw this.functions.noticeOpen(o), Error(o);
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
        checkInfo: function(l, a, u, c, o) {
          let b = [];
          for (let r = 0, f = a.length; r < f; r++)
            b = b.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(a[r] + ':not([data-se-embed="true"])')));
          const d = this.plugins.fileManager, v = this.context[l], w = v._infoList, k = d.setInfo.bind(this);
          if (b.length === w.length)
            if (this._componentsInfoReset) {
              for (let r = 0, f = b.length; r < f; r++)
                k(l, b[r], u, null, o);
              return;
            } else {
              let r = !1;
              for (let f = 0, h = w.length, m; f < h; f++)
                if (m = w[f], b.filter(function(g) {
                  return m.src === g.src && m.index.toString() === g.getAttribute("data-index");
                }).length === 0) {
                  r = !0;
                  break;
                }
              if (!r) return;
            }
          const L = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = l);
          const R = [], s = [];
          for (let r = 0, f = w.length; r < f; r++)
            s[r] = w[r].index;
          for (v.__updateTags = b; b.length > 0; ) {
            const r = b.shift();
            !this.util.getParentElement(r, this.util.isMediaComponent) || !d._checkMediaComponent(r) ? (R.push(v._infoIndex), c(r)) : !r.getAttribute("data-index") || s.indexOf(r.getAttribute("data-index") * 1) < 0 ? (R.push(v._infoIndex), r.removeAttribute("data-index"), k(l, r, u, null, o)) : R.push(r.getAttribute("data-index") * 1);
          }
          for (let r = 0, f; r < w.length; r++)
            f = w[r].index, !(R.indexOf(f) > -1) && (w.splice(r, 1), typeof u == "function" && u(null, f, "delete", null, 0, this), r--);
          o && (this.context.resizing._resize_plugin = L);
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
        setInfo: function(l, a, u, c, o) {
          const b = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = l);
          const d = this.plugins[l], v = this.context[l], w = v._infoList;
          let k = a.getAttribute("data-index"), L = null, R = "";
          if (c || (c = {
            name: a.getAttribute("data-file-name") || (typeof a.src == "string" ? a.src.split("/").pop() : ""),
            size: a.getAttribute("data-file-size") || 0
          }), !k || this._componentsInfoInit)
            R = "create", k = v._infoIndex++, a.setAttribute("data-index", k), a.setAttribute("data-file-name", c.name), a.setAttribute("data-file-size", c.size), L = {
              src: a.src,
              index: k * 1,
              name: c.name,
              size: c.size
            }, w.push(L);
          else {
            R = "update", k *= 1;
            for (let s = 0, r = w.length; s < r; s++)
              if (k === w[s].index) {
                L = w[s];
                break;
              }
            L || (k = v._infoIndex++, L = { index: k }, w.push(L)), L.src = a.src, L.name = a.getAttribute("data-file-name"), L.size = a.getAttribute("data-file-size") * 1;
          }
          if (L.element = a, L.delete = d.destroy.bind(this, a), L.select = (function(s) {
            s.scrollIntoView(!0), this._w.setTimeout(d.select.bind(this, s));
          }).bind(this, a), o) {
            if (!a.getAttribute("origin-size") && a.naturalWidth && a.setAttribute("origin-size", a.naturalWidth + "," + a.naturalHeight), !a.getAttribute("data-origin")) {
              const s = this.util.getParentElement(a, this.util.isMediaComponent), r = this.util.getParentElement(a, "FIGURE"), f = this.plugins.resizing._module_getSizeX.call(this, v, a, r, s), h = this.plugins.resizing._module_getSizeY.call(this, v, a, r, s);
              a.setAttribute("data-origin", f + "," + h), a.setAttribute("data-size", f + "," + h);
            }
            if (!a.style.width) {
              const s = (a.getAttribute("data-size") || a.getAttribute("data-origin") || "").split(",");
              d.onModifyMode.call(this, a, null), d.applySize.call(this, s[0], s[1]);
            }
            this.context.resizing._resize_plugin = b;
          }
          typeof u == "function" && u(a, k, R, L, --v._uploadFileLength < 0 ? 0 : v._uploadFileLength, this);
        },
        /**
         * @description Delete info object at "_infoList"
         * @param {String} pluginName Plugin name 
         * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        deleteInfo: function(l, a, u) {
          if (a >= 0) {
            const c = this.context[l]._infoList;
            for (let o = 0, b = c.length; o < b; o++)
              if (a === c[o].index) {
                c.splice(o, 1), typeof u == "function" && u(null, a, "delete", null, 0, this);
                return;
              }
          }
        },
        /**
         * @description Reset info object and "_infoList = []", "_infoIndex = 0"
         * @param {String} pluginName Plugin name 
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        resetInfo: function(l, a) {
          const u = this.context[l];
          if (typeof a == "function") {
            const c = u._infoList;
            for (let o = 0, b = c.length; o < b; o++)
              a(null, c[o].index, "delete", null, 0, this);
          }
          u._infoList = [], u._infoIndex = 0;
        }
      };
      return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileManager", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: n
      })), n;
    });
  }(Ai)), Ai.exports;
}
var mr = /* @__PURE__ */ pr();
const il = /* @__PURE__ */ Se(mr), gr = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([Kt, Xn, tl, Jn, il]);
    const t = e.options, i = e.context, n = i.image = {
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
    let l = this.setDialog(e);
    n.modal = l, n.imgInputFile = l.querySelector("._se_image_file"), n.imgUrlFile = l.querySelector("._se_image_url"), n.focusElement = n.imgInputFile || n.imgUrlFile, n.altText = l.querySelector("._se_image_alt"), n.captionCheckEl = l.querySelector("._se_image_check_caption"), n.previewSrc = l.querySelector("._se_tab_content_image .se-link-preview"), l.querySelector(".se-dialog-tabs").addEventListener("click", this.openTab.bind(e)), l.querySelector("form").addEventListener("submit", this.submit.bind(e)), n.imgInputFile && l.querySelector(".se-file-remove").addEventListener("click", this._removeSelectedFiles.bind(n.imgInputFile, n.imgUrlFile, n.previewSrc)), n.imgUrlFile && n.imgUrlFile.addEventListener("input", this._onLinkPreview.bind(n.previewSrc, n._v_src, t.linkProtocol)), n.imgInputFile && n.imgUrlFile && n.imgInputFile.addEventListener("change", this._fileInputChange.bind(n));
    const a = l.querySelector(".__se__gallery");
    a && a.addEventListener("click", this._openGallery.bind(e)), n.proportion = {}, n.inputX = {}, n.inputY = {}, t.imageResizing && (n.proportion = l.querySelector("._se_image_check_proportion"), n.inputX = l.querySelector("._se_image_size_x"), n.inputY = l.querySelector("._se_image_size_y"), n.inputX.value = t.imageWidth, n.inputY.value = t.imageHeight, n.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), n.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), n.inputX.addEventListener("change", this.setRatio.bind(e)), n.inputY.addEventListener("change", this.setRatio.bind(e)), n.proportion.addEventListener("change", this.setRatio.bind(e)), l.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(l), e.plugins.anchor.initEvent.call(e, "image", l.querySelector("._se_tab_content_url")), n.anchorCtx = e.context.anchor.caller.image, l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-dialog-content se-dialog-image", n.style.display = "none";
    let l = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + i.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + i.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
    if (t.imageFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="' + t.imageAccept + '"' + (t.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.imageUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url _se_image_url" type="text" />' + (t.imageGalleryUrl && e.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + i.toolbar.imageGallery + '" aria-label="' + i.toolbar.imageGallery + '">' + e.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), l += '</div><div class="se-dialog-form"><label>' + i.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', t.imageResizing) {
      const a = t.imageSizeOnlyPercentage, u = a ? ' style="display: none !important;"' : "", c = t.imageHeightShow ? "" : ' style="display: none !important;"';
      l += '<div class="se-dialog-form">', a || !t.imageHeightShow ? l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", l += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (a ? ' type="number" min="1"' : 'type="text"') + (a ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + c + ">" + (a ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + u + (a ? ' max="100"' : "") + c + "/><label" + u + c + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
    }
    return l += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + i.dialogBox.caption + '</label></div></div></div><div class="_se_tab_content _se_tab_content_url" style="display: none">' + e.context.anchor.forms.innerHTML + '</div><div class="se-dialog-footer"><div' + (t.imageAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", n.innerHTML = l, n;
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
  _onLinkPreview: function(e, t, i) {
    const n = i.target.value.trim();
    e._linkValue = this.textContent = n ? t && n.indexOf("://") === -1 && n.indexOf("#") !== 0 ? t + n : n.indexOf("://") === -1 ? "/" + n : n : "";
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
    const t = e || this.context.image._element, i = this.util.getParentElement(t, this.util.isMediaComponent) || t, n = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onImageDeleteBefore == "function" && this.functions.onImageDeleteBefore(t, i, n, this) === !1) return;
    let l = i.previousElementSibling || i.nextElementSibling;
    const a = i.parentNode;
    this.util.removeItem(i), this.plugins.image.init.call(this), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(u) {
      return u.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "image", n, this.functions.onImageUpload), this.history.push(!1);
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
    const t = this.context.image.modal, i = e === "init" ? t.querySelector("._se_tab_link") : e.target;
    if (!/^BUTTON$/i.test(i.tagName))
      return !1;
    const n = i.getAttribute("data-tab-link"), l = "_se_tab_content";
    let a, u, c;
    for (u = t.getElementsByClassName(l), a = 0; a < u.length; a++)
      u[a].style.display = "none";
    for (c = t.getElementsByClassName("_se_tab_link"), a = 0; a < c.length; a++)
      this.util.removeClass(c[a], "active");
    return t.querySelector("." + l + "_" + n).style.display = "block", this.util.addClass(i, "active"), n === "image" && this.context.image.focusElement ? this.context.image.focusElement.focus() : n === "url" && this.context.anchor.caller.image.urlInput.focus(), !1;
  },
  submit: function(e) {
    const t = this.context.image, i = this.plugins.image;
    e.preventDefault(), e.stopPropagation(), t._altText = t.altText.value, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked, t._resizing && (t._proportionChecked = t.proportion.checked);
    try {
      this.context.dialog.updateModal && i.update_image.call(this, !1, !0, !1), t.imgInputFile && t.imgInputFile.files.length > 0 ? (this.showLoading(), i.submitAction.call(this, this.context.image.imgInputFile.files)) : t.imgUrlFile && t._v_src._linkValue.length > 0 && (this.showLoading(), i.onRender_imgUrl.call(this, t._v_src._linkValue));
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.submit.fail] cause : "' + n.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, i = [];
    for (let c = 0, o = e.length; c < o; c++)
      /image/i.test(e[c].type) && (i.push(e[c]), t += e[c].size);
    const n = this.options.imageUploadSizeLimit;
    if (n > 0) {
      let c = 0;
      const o = this.context.image._infoList;
      for (let b = 0, d = o.length; b < d; b++)
        c += o[b].size * 1;
      if (t + c > n) {
        this.closeLoading();
        const b = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + n / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(b, { limitSize: n, currentSize: c, uploadSize: t }, this)) && this.functions.noticeOpen(b);
        return;
      }
    }
    const l = this.context.image;
    l._uploadFileLength = i.length;
    const u = {
      anchor: this.plugins.anchor.createAnchor.call(this, l.anchorCtx, !0),
      inputWidth: l.inputX.value,
      inputHeight: l.inputY.value,
      align: l._align,
      isUpdate: this.context.dialog.updateModal,
      alt: l._altText,
      element: l._element
    };
    if (typeof this.functions.onImageUploadBefore == "function") {
      const c = this.functions.onImageUploadBefore(i, u, this, (function(o) {
        o && this._w.Array.isArray(o.result) ? this.plugins.image.register.call(this, u, o) : this.plugins.image.upload.call(this, u, o);
      }).bind(this));
      if (typeof c > "u") return;
      if (!c) {
        this.closeLoading();
        return;
      }
      this._w.Array.isArray(c) && c.length > 0 && (i = c);
    }
    this.plugins.image.upload.call(this, u, i);
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
    const i = this.options.imageUploadUrl, n = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const l = new FormData();
      for (let a = 0; a < n; a++)
        l.append("file-" + a, t[a]);
      this.plugins.fileManager.upload.call(this, i, this.options.imageUploadHeader, l, this.plugins.image.callBack_imgUpload.bind(this, e), this.functions.onImageUploadError);
    } else
      this.plugins.image.setup_reader.call(this, t, e.anchor, e.inputWidth, e.inputHeight, e.align, e.alt, n, e.isUpdate);
  },
  callBack_imgUpload: function(e, t) {
    if (typeof this.functions.imageUploadHandler == "function")
      this.functions.imageUploadHandler(t, e, this);
    else {
      const i = JSON.parse(t.responseText);
      i.errorMessage ? this.plugins.image.error.call(this, i.errorMessage, i) : this.plugins.image.register.call(this, e, i);
    }
  },
  register: function(e, t) {
    const i = t.result;
    for (let n = 0, l = i.length, a; n < l; n++)
      if (a = { name: i[n].name, size: i[n].size }, e.isUpdate) {
        this.plugins.image.update_src.call(this, i[n].url, e.element, a);
        break;
      } else
        this.plugins.image.create_image.call(this, i[n].url, e.anchor, e.inputWidth, e.inputHeight, e.align, a, e.alt);
    this.closeLoading();
  },
  setup_reader: function(e, t, i, n, l, a, u, c) {
    try {
      if (u === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = u;
      const o = this._w.FileReader, b = [u];
      this.context.image.inputX.value = i, this.context.image.inputY.value = n;
      for (let d = 0, v, w; d < u; d++)
        v = new o(), w = e[d], v.onload = (function(k, L, R, s, r) {
          b[r] = { result: k.result, file: s }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, L, b, R, t, i, n, l, a), this.closeLoading());
        }).bind(this, v, c, this.context.image._element, w, d), v.readAsDataURL(w);
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + o.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, n, l, a, u, c) {
    const o = this.plugins.image.update_src, b = this.plugins.image.create_image;
    for (let d = 0, v = t.length; d < v; d++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[d].file.name), this.context.image._element.setAttribute("data-file-size", t[d].file.size), o.call(this, t[d].result, i, t[d].file)) : b.call(this, t[d].result, n, l, a, u, t[d].file, c);
  },
  onRender_imgUrl: function(e) {
    if (e || (e = this.context.image._v_src._linkValue), !e) return !1;
    const t = this.context.image;
    try {
      const i = { name: e.split("/").pop(), size: 0 };
      this.context.dialog.updateModal ? this.plugins.image.update_src.call(this, e, t._element, i) : this.plugins.image.create_image.call(this, e, this.plugins.anchor.createAnchor.call(this, t.anchorCtx, !0), t.inputX.value, t.inputY.value, t._align, i, t._altText);
    } catch (i) {
      throw Error('[SUNEDITOR.image.URLRendering.fail] cause : "' + i.message + '"');
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
    const e = this.plugins.image, t = this.context.image, i = (function(n) {
      e.onModifyMode.call(this, n, null), e.openModify.call(this, !0), t.inputX.value = t._origin_w, t.inputY.value = t._origin_h;
      const l = this.util.getFormatElement(n);
      l && (t._align = l.style.textAlign || l.style.float), this.util.isAnchor(n.parentNode) && !t.anchorCtx.linkValue && (t.anchorCtx.linkValue = " "), e.update_image.call(this, !0, !1, !0), e.init.call(this);
    }).bind(this);
    this.plugins.fileManager.checkInfo.call(this, "image", ["img"], this.functions.onImageUpload, i, !0);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "image", this.functions.onImageUpload);
  },
  create_image: function(e, t, i, n, l, a, u) {
    const c = this.plugins.image, o = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let b = this.util.createElement("IMG");
    b.src = e, b.alt = u, b.setAttribute("data-rotate", "0"), t = c.onRender_link.call(this, b, t ? t.cloneNode(!1) : null), o._resizing && b.setAttribute("data-proportion", o._proportionChecked);
    const d = this.plugins.component.set_cover.call(this, t), v = this.plugins.component.set_container.call(this, d, "se-image-container");
    o._captionChecked && (o._caption = this.plugins.component.create_caption.call(this), d.appendChild(o._caption)), o._element = b, o._cover = d, o._container = v, c.applySize.call(this, i, n), c.setAlign.call(this, l, b, d, v), b.onload = c._image_create_onload.bind(this, b, o.svgDefaultSize, v), this.insertComponent(v, !0, !0, !this.options.mediaAutoSelect) && this.plugins.fileManager.setInfo.call(this, "image", b, this.functions.onImageUpload, a, !0), this.context.resizing._resize_plugin = "";
  },
  _image_create_onload: function(e, t, i) {
    if (e.offsetWidth === 0 && this.plugins.image.applySize.call(this, t, ""), this.options.mediaAutoSelect)
      this.selectComponent(e, "image");
    else {
      const n = this.appendFormatTag(i, null);
      n && this.setRange(n, 0, n, 0);
    }
    this.history.push(!1);
  },
  update_image: function(e, t, i) {
    const n = this.context.image;
    let l = n._element, a = n._cover, u = n._container, c = !1;
    a === null && (c = !0, l = n._element.cloneNode(!0), a = this.plugins.component.set_cover.call(this, l)), u === null ? (a = a.cloneNode(!0), l = a.querySelector("img"), c = !0, u = this.plugins.component.set_container.call(this, a, "se-image-container")) : c && (u.innerHTML = "", u.appendChild(a), n._cover = a, n._element = l, c = !1);
    let o;
    const b = this.util.isNumber(n.inputX.value) ? n.inputX.value + n.sizeUnit : n.inputX.value, d = this.util.isNumber(n.inputY.value) ? n.inputY.value + n.sizeUnit : n.inputY.value;
    /%$/.test(l.style.width) ? o = b !== u.style.width || d !== u.style.height : o = b !== l.style.width || d !== l.style.height, l.alt = n._altText;
    let v = !1;
    n._captionChecked ? n._caption || (n._caption = this.plugins.component.create_caption.call(this), a.appendChild(n._caption), v = !0) : n._caption && (this.util.removeItem(n._caption), n._caption = null, v = !0);
    let w = null;
    const k = this.plugins.anchor.createAnchor.call(this, n.anchorCtx, !0);
    if (k)
      n._linkElement !== k || c && !u.contains(k) ? (n._linkElement = k.cloneNode(!1), a.insertBefore(this.plugins.image.onRender_link.call(this, l, n._linkElement), n._caption), w = n._element) : n._linkElement.setAttribute("data-image-link", "image");
    else if (n._linkElement !== null) {
      const R = l;
      if (R.setAttribute("data-image-link", ""), a.contains(n._linkElement)) {
        const s = R.cloneNode(!0);
        a.removeChild(n._linkElement), a.insertBefore(s, n._caption), n._element = l = s;
      }
    }
    let L = null;
    if (c) {
      if (L = this.util.isRangeFormatElement(n._element.parentNode) || this.util.isWysiwygDiv(n._element.parentNode) ? n._element : this.util.isAnchor(n._element.parentNode) ? n._element.parentNode : this.util.getFormatElement(n._element) || n._element, this.util.getParentElement(n._element, this.util.isNotCheckingNode))
        L = w ? k : n._element, L.parentNode.replaceChild(u, L);
      else if (this.util.isListCell(L)) {
        const R = this.util.getParentElement(n._element, function(s) {
          return s.parentNode === L;
        });
        L.insertBefore(u, R), this.util.removeItem(n._element), this.util.removeEmptyNode(R, null, !0);
      } else if (this.util.isFormatElement(L)) {
        const R = this.util.getParentElement(n._element, function(s) {
          return s.parentNode === L;
        });
        L = this.util.splitElement(L, R), L.parentNode.insertBefore(u, L), this.util.removeItem(n._element), this.util.removeEmptyNode(L, null, !0), L.children.length === 0 && (L.innerHTML = this.util.htmlRemoveWhiteSpace(L.innerHTML));
      } else if (this.util.isFormatElement(L.parentNode)) {
        const R = L.parentNode;
        R.parentNode.insertBefore(u, L.previousSibling ? R.nextElementSibling : R), n.__updateTags.map(function(s) {
          return L.contains(s);
        }).length === 0 && this.util.removeItem(L);
      } else
        L = this.util.isFigures(L.parentNode) ? L.parentNode : L, L.parentNode.replaceChild(u, L);
      l = u.querySelector("img"), n._element = l, n._cover = a, n._container = u;
    }
    w && (c ? (this.util.removeItem(w), this.util.getListChildren(k, function(R) {
      return /IMG/i.test(R.tagName);
    }).length === 0 && this.util.removeItem(k)) : this.util.removeItem(k)), (v || !n._onlyPercentage && o) && !e && (/\d+/.test(l.style.height) || this.context.resizing._rotateVertical && n._captionChecked) && (/%$/.test(n.inputX.value) || /%$/.test(n.inputY.value) ? this.plugins.resizing.resetTransform.call(this, l) : this.plugins.resizing.setTransformSize.call(this, l, this.util.getNumber(n.inputX.value, 0), this.util.getNumber(n.inputY.value, 0))), n._resizing && (l.setAttribute("data-proportion", n._proportionChecked), o && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, l, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", l, this.functions.onImageUpload, null, !0), t && this.selectComponent(l, "image"), i || this.history.push(!1);
  },
  update_src: function(e, t, i) {
    t.src = e, this._w.setTimeout(this.plugins.fileManager.setInfo.bind(this, "image", t, this.functions.onImageUpload, i, !0)), this.selectComponent(t, "image");
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e, t) {
    if (!e) return;
    const i = this.context.image;
    i._linkElement = i.anchorCtx.linkAnchor = this.util.isAnchor(e.parentNode) ? e.parentNode : null, i._element = e, i._cover = this.util.getParentElement(e, "FIGURE"), i._container = this.util.getParentElement(e, this.util.isMediaComponent), i._caption = this.util.getChildElement(i._cover, "FIGCAPTION"), i._align = e.getAttribute("data-align") || e.style.float || "none", e.style.float = "", this.plugins.anchor.setCtx(i._linkElement, i.anchorCtx), t && (i._element_w = t.w, i._element_h = t.h, i._element_t = t.t, i._element_l = t.l);
    let n = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), l, a;
    n ? (n = n.split(","), l = n[0], a = n[1]) : t && (l = t.w, a = t.h), i._origin_w = l || e.style.width || e.width || "", i._origin_h = a || e.style.height || e.height || "";
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
    const i = this.context.image;
    return e || (e = i.inputX.value || this.options.imageWidth), t || (t = i.inputY.value || this.options.imageHeight), i._onlyPercentage && e || /%$/.test(e) ? (this.plugins.image.setPercentSize.call(this, e, t), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.image.setAutoSize.call(this) : this.plugins.image.setSize.call(this, e, t, !1), !1);
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
  setSize: function(e, t, i, n) {
    const l = this.context.image, a = /^(rw|lw)$/.test(n) && /\d+/.test(l._element.style.height);
    /^(th|bh)$/.test(n) && /\d+/.test(l._element.style.width) || (l._element.style.width = this.util.isNumber(e) ? e + l.sizeUnit : e, this.plugins.image.cancelPercentAttr.call(this)), a || (l._element.style.height = this.util.isNumber(t) ? t + l.sizeUnit : /%$/.test(t) ? "" : t), l._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
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
    const t = (e._element.getAttribute("data-origin") || "").split(","), i = t[0], n = t[1];
    t && (e._onlyPercentage || /%$/.test(i) && (/%$/.test(n) || !/\d/.test(n)) ? this.plugins.image.setPercentSize.call(this, i, n) : this.plugins.image.setSize.call(this, i, n), this.plugins.resizing._module_saveCurrentSize.call(this, e));
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const i = this.context.image;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + i.sizeUnit : t || "";
    const n = /%$/.test(t);
    i._container.style.width = this.util.isNumber(e) ? e + "%" : e, i._container.style.height = "", i._cover.style.width = "100%", i._cover.style.height = n ? t : "", i._element.style.width = "100%", i._element.style.height = n ? "" : t, i._element.style.maxWidth = "", i._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing.setCaptionPosition.call(this, i._element), this.plugins.resizing._module_saveCurrentSize.call(this, i);
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
  setAlign: function(e, t, i, n) {
    const l = this.context.image;
    e || (e = l._align), t || (t = l._element), i || (i = l._cover), n || (n = l._container), /%$/.test(t.style.width) && e === "center" ? (n.style.minWidth = "100%", i.style.width = n.style.width) : (n.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : !t.style.width || t.style.width === "auto" ? "" : t.style.width || "100%"), this.util.hasClass(n, "__se__float-" + e) || (this.util.removeClass(n, l._floatClassRegExp), this.util.addClass(n, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.image;
    e.imgInputFile && (e.imgInputFile.value = ""), e.imgUrlFile && (e._v_src._linkValue = e.previewSrc.textContent = e.imgUrlFile.value = ""), e.imgInputFile && e.imgUrlFile && (e.imgUrlFile.removeAttribute("disabled"), e.previewSrc.style.textDecoration = ""), e.altText.value = "", e.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = !0, e.captionCheckEl.checked = !1, e._element = null, this.plugins.image.openTab.call(this, "init"), e._resizing && (e.inputX.value = this.options.imageWidth === e._defaultSizeX ? "" : this.options.imageWidth, e.inputY.value = this.options.imageHeight === e._defaultSizeY ? "" : this.options.imageHeight, e.proportion.checked = !0, e._ratio = !1, e._ratioX = 1, e._ratioY = 1), this.plugins.anchor.init.call(this, e.anchorCtx);
  }
}, vr = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([Kt, tl, Jn, il]);
    const t = e.options, i = e.context, n = i.video = {
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
    let l = this.setDialog(e);
    n.modal = l, n.videoInputFile = l.querySelector("._se_video_file"), n.videoUrlFile = l.querySelector(".se-input-url"), n.focusElement = n.videoUrlFile || n.videoInputFile, n.preview = l.querySelector(".se-link-preview"), l.querySelector("form").addEventListener("submit", this.submit.bind(e)), n.videoInputFile && l.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(n.videoInputFile, n.videoUrlFile, n.preview)), n.videoInputFile && n.videoUrlFile && n.videoInputFile.addEventListener("change", this._fileInputChange.bind(n)), n.videoUrlFile && n.videoUrlFile.addEventListener("input", this._onLinkPreview.bind(n.preview, n, t.linkProtocol)), n.proportion = {}, n.videoRatioOption = {}, n.inputX = {}, n.inputY = {}, t.videoResizing && (n.proportion = l.querySelector("._se_video_check_proportion"), n.videoRatioOption = l.querySelector(".se-video-ratio"), n.inputX = l.querySelector("._se_video_size_x"), n.inputY = l.querySelector("._se_video_size_y"), n.inputX.value = t.videoWidth, n.inputY.value = t.videoHeight, n.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), n.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), n.inputX.addEventListener("change", this.setRatio.bind(e)), n.inputY.addEventListener("change", this.setRatio.bind(e)), n.proportion.addEventListener("change", this.setRatio.bind(e)), n.videoRatioOption.addEventListener("change", this.setVideoRatio.bind(e)), l.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(l), l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-dialog-content", n.style.display = "none";
    let l = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.videoBox.title + '</span></div><div class="se-dialog-body">';
    if (t.videoFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_video_file" type="file" accept="' + t.videoAccept + '"' + (t.videoMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.videoUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), t.videoResizing) {
      const a = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], u = t.videoRatio, c = t.videoSizeOnlyPercentage, o = c ? ' style="display: none !important;"' : "", b = t.videoHeightShow ? "" : ' style="display: none !important;"', d = t.videoRatioShow ? "" : ' style="display: none !important;"', v = !c && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      l += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + b + ">" + i.dialogBox.height + '</label><label class="size-h"' + d + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (c ? ' type="number" min="1"' : 'type="text"') + (c ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + v + ">" + (c ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (c ? ' type="number" min="1"' : 'type="text"') + (c ? ' max="100"' : "") + b + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + d + ">", b || (l += '<option value=""> - </option>');
      for (let w = 0, k = a.length; w < k; w++)
        l += '<option value="' + a[w].value + '"' + (u.toString() === a[w].value.toString() ? " selected" : "") + ">" + a[w].name + "</option>";
      l += '</select><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + o + v + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + "</label></div>";
    }
    return l += '</div><div class="se-dialog-footer"><div' + (t.videoAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", n.innerHTML = l, n;
  },
  _fileInputChange: function() {
    this.videoInputFile.value ? (this.videoUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.videoUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _onLinkPreview: function(e, t, i) {
    const n = i.target.value.trim();
    /^<iframe.*\/iframe>$/.test(n) ? (e._linkValue = n, this.textContent = '<IFrame :src=".."></IFrame>') : e._linkValue = this.textContent = n ? t && n.indexOf("://") === -1 && n.indexOf("#") !== 0 ? t + n : n.indexOf("://") === -1 ? "/" + n : n : "";
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.videoTagAttrs;
    if (t)
      for (let i in t)
        this.util.hasOwn(t, i) && e.setAttribute(i, t[i]);
  },
  createVideoTag: function() {
    const e = this.util.createElement("VIDEO");
    return this.plugins.video._setTagAttrs.call(this, e), e;
  },
  _setIframeAttrs: function(e) {
    e.frameBorder = "0", e.allowFullscreen = !0;
    const t = this.options.videoIframeAttrs;
    if (t)
      for (let i in t)
        this.util.hasOwn(t, i) && e.setAttribute(i, t[i]);
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
    const t = e || this.context.video._element, i = this.context.video._container, n = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onVideoDeleteBefore == "function" && this.functions.onVideoDeleteBefore(t, i, n, this) === !1) return;
    let l = i.previousElementSibling || i.nextElementSibling;
    const a = i.parentNode;
    this.util.removeItem(i), this.plugins.video.init.call(this), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(u) {
      return u.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "video", n, this.functions.onVideoUpload), this.history.push(!1);
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
    const t = this.context.video, i = e.target.options[e.target.selectedIndex].value;
    t._defaultSizeY = t._videoRatio = i ? i * 100 + "%" : t._defaultSizeY, t.inputY.placeholder = i ? i * 100 + "%" : "", t.inputY.value = "";
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
    const i = this.context.video;
    this.plugins.resizing._module_setInputSize.call(this, i, e), e === "y" && this.plugins.video.setVideoRatioSelect.call(this, t.target.value || i._defaultRatio);
  },
  /**
   * @Override resizing
   */
  setRatio: function() {
    this.plugins.resizing._module_setRatio.call(this, this.context.video);
  },
  submit: function(e) {
    const t = this.context.video, i = this.plugins.video;
    e.preventDefault(), e.stopPropagation(), t._align = t.modal.querySelector('input[name="suneditor_video_radio"]:checked').value;
    try {
      t.videoInputFile && t.videoInputFile.files.length > 0 ? (this.showLoading(), i.submitAction.call(this, this.context.video.videoInputFile.files)) : t.videoUrlFile && t._linkValue.length > 0 && (this.showLoading(), i.setup_url.call(this, t._linkValue));
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.video.submit.fail] cause : "' + n.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, i = [];
    for (let u = 0, c = e.length; u < c; u++)
      /video/i.test(e[u].type) && (i.push(e[u]), t += e[u].size);
    const n = this.options.videoUploadSizeLimit;
    if (n > 0) {
      let u = 0;
      const c = this.context.video._infoList;
      for (let o = 0, b = c.length; o < b; o++)
        u += c[o].size * 1;
      if (t + u > n) {
        this.closeLoading();
        const o = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + n / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(o, { limitSize: n, currentSize: u, uploadSize: t }, this)) && this.functions.noticeOpen(o);
        return;
      }
    }
    const l = this.context.video;
    l._uploadFileLength = i.length;
    const a = {
      inputWidth: l.inputX.value,
      inputHeight: l.inputY.value,
      align: l._align,
      isUpdate: this.context.dialog.updateModal,
      element: l._element
    };
    if (typeof this.functions.onVideoUploadBefore == "function") {
      const u = this.functions.onVideoUploadBefore(i, a, this, (function(c) {
        c && this._w.Array.isArray(c.result) ? this.plugins.video.register.call(this, a, c) : this.plugins.video.upload.call(this, a, c);
      }).bind(this));
      if (typeof u > "u") return;
      if (!u) {
        this.closeLoading();
        return;
      }
      typeof u == "object" && u.length > 0 && (i = u);
    }
    this.plugins.video.upload.call(this, a, i);
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
    const i = this.options.videoUploadUrl, n = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const l = new FormData();
      for (let a = 0; a < n; a++)
        l.append("file-" + a, t[a]);
      this.plugins.fileManager.upload.call(this, i, this.options.videoUploadHeader, l, this.plugins.video.callBack_videoUpload.bind(this, e), this.functions.onVideoUploadError);
    } else
      throw Error('[SUNEDITOR.videoUpload.fail] cause : There is no "videoUploadUrl" option.');
  },
  callBack_videoUpload: function(e, t) {
    if (typeof this.functions.videoUploadHandler == "function")
      this.functions.videoUploadHandler(t, e, this);
    else {
      const i = JSON.parse(t.responseText);
      i.errorMessage ? this.plugins.video.error.call(this, i.errorMessage, i) : this.plugins.video.register.call(this, e, i);
    }
  },
  register: function(e, t) {
    const i = t.result, n = this.plugins.video.createVideoTag.call(this);
    for (let l = 0, a = i.length, u; l < a; l++)
      u = { name: i[l].name, size: i[l].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : n.cloneNode(!1), i[l].url, e.inputWidth, e.inputHeight, e.align, u, e.isUpdate);
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
            const i = e.split("?");
            e = i[0] + "?" + t._youtubeQuery + "&" + i[1];
          } else
            e += "?" + t._youtubeQuery;
      } else if (/vimeo\.com/.test(e) && (e.endsWith("/") && (e = e.slice(0, -1)), e = "https://player.vimeo.com/video/" + e.slice(e.lastIndexOf("/") + 1), t._vimeoQuery.length > 0))
        if (/\?/.test(e)) {
          const i = e.split("?");
          e = i[0] + "?" + t._vimeoQuery + "&" + i[1];
        } else
          e += "?" + t._vimeoQuery;
      this.plugins.video.create_video.call(this, this.plugins.video[!/embed|iframe|player|\/e\/|\.php|\.html?/.test(e) && !/vimeo\.com/.test(e) ? "createVideoTag" : "createIframeTag"].call(this), e, t.inputX.value, t.inputY.value, t._align, null, this.context.dialog.updateModal);
    } catch (t) {
      throw Error('[SUNEDITOR.video.upload.fail] cause : "' + t.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  create_video: function(e, t, i, n, l, a, u) {
    this.context.resizing._resize_plugin = "video";
    const c = this.context.video;
    let o = null, b = null, d = !1;
    if (u) {
      if (e = c._element, e.src !== t) {
        d = !0;
        const R = /youtu\.?be/.test(t), s = /vimeo\.com/.test(t);
        if ((R || s) && !/^iframe$/i.test(e.nodeName)) {
          const r = this.plugins.video.createIframeTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), c._element = e = r;
        } else if (!R && !s && !/^video$/i.test(e.nodeName)) {
          const r = this.plugins.video.createVideoTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), c._element = e = r;
        } else
          e.src = t;
      }
      b = c._container, o = this.util.getParentElement(e, "FIGURE");
    } else
      d = !0, e.src = t, c._element = e, o = this.plugins.component.set_cover.call(this, e), b = this.plugins.component.set_container.call(this, o, "se-video-container");
    c._cover = o, c._container = b;
    const v = this.plugins.resizing._module_getSizeX.call(this, c) !== (i || c._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, c) !== (n || c._videoRatio), w = !u || v;
    c._resizing && (this.context.video._proportionChecked = c.proportion.checked, e.setAttribute("data-proportion", c._proportionChecked));
    let k = !1;
    w && (k = this.plugins.video.applySize.call(this)), k && l === "center" || this.plugins.video.setAlign.call(this, null, e, o, b);
    let L = !0;
    if (u)
      c._resizing && this.context.resizing._rotateVertical && w && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (L = this.insertComponent(b, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const R = this.appendFormatTag(b, null);
      R && this.setRange(R, 0, R, 0);
    }
    L && (d && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, a, !0), u && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
  },
  _update_videoCover: function(e) {
    if (!e) return;
    const t = this.context.video;
    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const n = e;
    t._element = e = e.cloneNode(!0);
    const l = t._cover = this.plugins.component.set_cover.call(this, e), a = t._container = this.plugins.component.set_container.call(this, l, "se-video-container");
    try {
      const u = i.querySelector("figcaption");
      let c = null;
      u && (c = this.util.createElement("DIV"), c.innerHTML = u.innerHTML, this.util.removeItem(u));
      const o = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, o[0] || n.style.width || n.width || "", o[1] || n.style.height || n.height || "");
      const b = this.util.getFormatElement(n);
      if (b && (t._align = b.style.textAlign || b.style.float), this.plugins.video.setAlign.call(this, null, e, l, a), this.util.getParentElement(n, this.util.isNotCheckingNode))
        n.parentNode.replaceChild(a, n);
      else if (this.util.isListCell(i)) {
        const d = this.util.getParentElement(n, function(v) {
          return v.parentNode === i;
        });
        i.insertBefore(a, d), this.util.removeItem(n), this.util.removeEmptyNode(d, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const d = this.util.getParentElement(n, function(v) {
          return v.parentNode === i;
        });
        i = this.util.splitElement(i, d), i.parentNode.insertBefore(a, i), this.util.removeItem(n), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(a, i);
      c && i.parentNode.insertBefore(c, a.nextElementSibling);
    } catch (u) {
      console.warn("[SUNEDITOR.video.error] Maybe the video tag is nested.", u);
    }
    this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, null, !0), this.plugins.video.init.call(this);
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e, t) {
    const i = this.context.video;
    i._element = e, i._cover = this.util.getParentElement(e, "FIGURE"), i._container = this.util.getParentElement(e, this.util.isMediaComponent), i._align = e.style.float || e.getAttribute("data-align") || "none", e.style.float = "", t && (i._element_w = t.w, i._element_h = t.h, i._element_t = t.t, i._element_l = t.l);
    let n = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), l, a;
    n ? (n = n.split(","), l = n[0], a = n[1]) : t && (l = t.w, a = t.h), i._origin_w = l || e.style.width || e.width || "", i._origin_h = a || e.style.height || e.height || "";
  },
  /**
   * @Required @Override fileManager, resizing
   */
  openModify: function(e) {
    const t = this.context.video;
    if (t.videoUrlFile && (t._linkValue = t.preview.textContent = t.videoUrlFile.value = t._element.src || (t._element.querySelector("source") || "").src || ""), (t.modal.querySelector('input[name="suneditor_video_radio"][value="' + t._align + '"]') || t.modal.querySelector('input[name="suneditor_video_radio"][value="none"]')).checked = !0, t._resizing) {
      this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.video);
      const i = t._videoRatio = this.plugins.resizing._module_getSizeY.call(this, t);
      this.plugins.video.setVideoRatioSelect.call(this, i) || (t.inputY.value = t._onlyPercentage ? this.util.getNumber(i, 2) : i);
    }
    e || this.plugins.dialog.open.call(this, "video", !0);
  },
  setVideoRatioSelect: function(e) {
    let t = !1;
    const i = this.context.video, n = i.videoRatioOption.options;
    /%$/.test(e) || i._onlyPercentage ? e = this.util.getNumber(e, 2) / 100 + "" : (!this.util.isNumber(e) || e * 1 >= 1) && (e = ""), i.inputY.placeholder = "";
    for (let l = 0, a = n.length; l < a; l++)
      n[l].value === e ? (t = n[l].selected = !0, i.inputY.placeholder = e ? e * 100 + "%" : "") : n[l].selected = !1;
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
    const i = this.context.video;
    return e || (e = i.inputX.value || this.options.videoWidth), t || (t = i.inputY.value || this.options.videoHeight), i._onlyPercentage || /%$/.test(e) || !e ? (this.plugins.video.setPercentSize.call(this, e || "100%", t || (/%$/.test(i._videoRatio) ? i._videoRatio : i._defaultRatio)), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.video.setAutoSize.call(this) : this.plugins.video.setSize.call(this, e, t || i._videoRatio || i._defaultRatio, !1), !1);
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
  setSize: function(e, t, i, n) {
    const l = this.context.video, a = /^(rw|lw)$/.test(n), u = /^(th|bh)$/.test(n);
    u || (e = this.util.getNumber(e, 0)), a || (t = this.util.isNumber(t) ? t + l.sizeUnit : t || ""), e = e ? e + l.sizeUnit : "", u || (l._element.style.width = e), a || (l._cover.style.paddingBottom = l._cover.style.height = t), !u && !/%$/.test(e) && (l._cover.style.width = e, l._container.style.width = ""), !a && !/%$/.test(t) ? l._element.style.height = t : l._element.style.height = "", i || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
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
    const i = ((e ? t._element.getAttribute("data-size") : "") || t._element.getAttribute("data-origin") || "").split(",");
    if (i) {
      const n = i[0], l = i[1];
      t._onlyPercentage || /%$/.test(n) && (/%$/.test(l) || !/\d/.test(l)) ? this.plugins.video.setPercentSize.call(this, n, l) : this.plugins.video.setSize.call(this, n, l), this.plugins.resizing._module_saveCurrentSize.call(this, t);
    }
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const i = this.context.video;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + i.sizeUnit : t || i._defaultRatio, i._container.style.width = this.util.isNumber(e) ? e + "%" : e, i._container.style.height = "", i._cover.style.width = "100%", i._cover.style.height = t, i._cover.style.paddingBottom = t, i._element.style.width = "100%", i._element.style.height = "100%", i._element.style.maxWidth = "", i._align === "center" && this.plugins.video.setAlign.call(this, null, null, null, null), i._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing._module_saveCurrentSize.call(this, i);
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
  setAlign: function(e, t, i, n) {
    const l = this.context.video;
    e || (e = l._align), t || (t = l._element), i || (i = l._cover), n || (n = l._container), /%$/.test(t.style.width) && e === "center" ? (n.style.minWidth = "100%", i.style.width = n.style.width, i.style.height = i.style.height, i.style.paddingBottom = /%$/.test(i.style.height) ? this.util.getNumber(this.util.getNumber(i.style.height, 2) / 100 * this.util.getNumber(i.style.width, 2), 2) + "%" : i.style.height) : (n.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width || "100%", i.style.paddingBottom = i.style.height), this.util.hasClass(n, "__se__float-" + e) || (this.util.removeClass(n, l._floatClassRegExp), this.util.addClass(n, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.video;
    e.videoInputFile && (e.videoInputFile.value = ""), e.videoUrlFile && (e._linkValue = e.preview.textContent = e.videoUrlFile.value = ""), e.videoInputFile && e.videoUrlFile && (e.videoUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._origin_w = this.options.videoWidth, e._origin_h = this.options.videoHeight, e.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = !0, e._resizing && (e.inputX.value = this.options.videoWidth === e._defaultSizeX ? "" : this.options.videoWidth, e.inputY.value = this.options.videoHeight === e._defaultSizeY ? "" : this.options.videoHeight, e.proportion.checked = !0, e.proportion.disabled = !0, this.plugins.video.setVideoRatioSelect.call(this, e._defaultRatio));
  }
}, br = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([Kt, tl, il]);
    const t = e.context, i = t.audio = {
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
    let n = this.setDialog(e);
    i.modal = n, i.audioInputFile = n.querySelector("._se_audio_files"), i.audioUrlFile = n.querySelector(".se-input-url"), i.focusElement = i.audioInputFile || i.audioUrlFile, i.preview = n.querySelector(".se-link-preview");
    let l = this.setController(e);
    i.controller = l, n.querySelector("form").addEventListener("submit", this.submit.bind(e)), i.audioInputFile && n.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(i.audioInputFile, i.audioUrlFile, i.preview)), i.audioInputFile && i.audioUrlFile && i.audioInputFile.addEventListener("change", this._fileInputChange.bind(i)), l.addEventListener("click", this.onClick_controller.bind(e)), i.audioUrlFile && i.audioUrlFile.addEventListener("input", this._onLinkPreview.bind(i.preview, i, e.options.linkProtocol)), t.dialog.modal.appendChild(n), t.element.relative.appendChild(l), n = null, l = null;
  },
  /** HTML - dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-dialog-content", n.style.display = "none";
    let l = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.audioBox.title + '</span></div><div class="se-dialog-body">';
    return t.audioFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_audio_files" type="file" accept="' + t.audioAccept + '"' + (t.audioMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.audioUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), l += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", n.innerHTML = l, n;
  },
  /** HTML - controller */
  setController: function(e) {
    const t = e.lang, i = e.icons, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-link", n.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", n;
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
    const t = this.context.audio._origin_w, i = this.context.audio._origin_h;
    return e.setAttribute("origin-size", t + "," + i), e.style.cssText = (t ? "width:" + t + "; " : "") + (i ? "height:" + i + ";" : ""), e;
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.audioTagAttrs;
    if (t)
      for (let i in t)
        this.util.hasOwn(t, i) && e.setAttribute(i, t[i]);
  },
  _onLinkPreview: function(e, t, i) {
    const n = i.target.value.trim();
    e._linkValue = this.textContent = n ? t && n.indexOf("://") === -1 && n.indexOf("#") !== 0 ? t + n : n.indexOf("://") === -1 ? "/" + n : n : "";
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
    const t = this.util.getParentElement(e, this.util.isComponent) || e, i = e.getAttribute("data-index") * 1;
    if (typeof this.functions.onAudioDeleteBefore == "function" && this.functions.onAudioDeleteBefore(e, t, i, this) === !1) return;
    const n = t.previousElementSibling || t.nextElementSibling, l = t.parentNode;
    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), l !== this.context.element.wysiwyg && this.util.removeItemAllParents(l, function(a) {
      return a.childNodes.length === 0;
    }, null), this.focusEdge(n), this.plugins.fileManager.deleteInfo.call(this, "audio", i, this.functions.onAudioUpload), this.history.push(!1);
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
    } catch (i) {
      throw this.closeLoading(), Error('[SUNEDITOR.audio.submit.fail] cause : "' + i.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, i = [];
    for (let u = 0, c = e.length; u < c; u++)
      /audio/i.test(e[u].type) && (i.push(e[u]), t += e[u].size);
    const n = this.options.audioUploadSizeLimit;
    if (n > 0) {
      let u = 0;
      const c = this.context.audio._infoList;
      for (let o = 0, b = c.length; o < b; o++)
        u += c[o].size * 1;
      if (t + u > n) {
        this.closeLoading();
        const o = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + n / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(o, { limitSize: n, currentSize: u, uploadSize: t }, this)) && this.functions.noticeOpen(o);
        return;
      }
    }
    const l = this.context.audio;
    l._uploadFileLength = i.length;
    const a = {
      isUpdate: this.context.dialog.updateModal,
      element: l._element
    };
    if (typeof this.functions.onAudioUploadBefore == "function") {
      const u = this.functions.onAudioUploadBefore(i, a, this, (function(c) {
        c && this._w.Array.isArray(c.result) ? this.plugins.audio.register.call(this, a, c) : this.plugins.audio.upload.call(this, a, c);
      }).bind(this));
      if (typeof u > "u") return;
      if (!u) {
        this.closeLoading();
        return;
      }
      typeof u == "object" && u.length > 0 && (i = u);
    }
    this.plugins.audio.upload.call(this, a, i);
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
    const i = this.options.audioUploadUrl, n = this.context.dialog.updateModal ? 1 : t.length, l = new FormData();
    for (let a = 0; a < n; a++)
      l.append("file-" + a, t[a]);
    this.plugins.fileManager.upload.call(this, i, this.options.audioUploadHeader, l, this.plugins.audio.callBack_upload.bind(this, e), this.functions.onAudioUploadError);
  },
  callBack_upload: function(e, t) {
    if (typeof this.functions.audioUploadHandler == "function")
      this.functions.audioUploadHandler(t, e, this);
    else {
      const i = JSON.parse(t.responseText);
      i.errorMessage ? this.plugins.audio.error.call(this, i.errorMessage, i) : this.plugins.audio.register.call(this, e, i);
    }
  },
  register: function(e, t) {
    const i = t.result;
    for (let n = 0, l = i.length, a, u; n < l; n++)
      e.isUpdate ? u = e.element : u = this.plugins.audio._createAudioTag.call(this), a = { name: i[n].name, size: i[n].size }, this.plugins.audio.create_audio.call(this, u, i[n].url, a, e.isUpdate);
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
  create_audio: function(e, t, i, n) {
    const l = this.context.audio;
    if (n)
      if (l._element && (e = l._element), e && e.src !== t)
        e.src = t, this.selectComponent(e, "audio");
      else {
        this.selectComponent(e, "audio");
        return;
      }
    else {
      e.src = t;
      const a = this.plugins.component.set_cover.call(this, e), u = this.plugins.component.set_container.call(this, a, "");
      if (!this.insertComponent(u, !1, !0, !this.options.mediaAutoSelect)) {
        this.focus();
        return;
      }
      if (!this.options.mediaAutoSelect) {
        const c = this.appendFormatTag(u, null);
        c && this.setRange(c, 0, c, 0);
      }
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, i, !1), n && this.history.push(!1);
  },
  updateCover: function(e) {
    const t = this.context.audio;
    this.plugins.audio._setTagAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const n = e;
    t._element = e = e.cloneNode(!1);
    const l = this.plugins.component.set_cover.call(this, e), a = this.plugins.component.set_container.call(this, l, "se-audio-container");
    try {
      if (this.util.getParentElement(n, this.util.isNotCheckingNode))
        n.parentNode.replaceChild(a, n);
      else if (this.util.isListCell(i)) {
        const u = this.util.getParentElement(n, function(c) {
          return c.parentNode === i;
        });
        i.insertBefore(a, u), this.util.removeItem(n), this.util.removeEmptyNode(u, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const u = this.util.getParentElement(n, function(c) {
          return c.parentNode === i;
        });
        i = this.util.splitElement(i, u), i.parentNode.insertBefore(a, i), this.util.removeItem(n), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(a, i);
    } catch (u) {
      console.warn("[SUNEDITOR.audio.error] Maybe the audio tag is nested.", u);
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
}, dn = "https://katex.org/docs/supported.html", yr = {
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
    let i = this.setDialog(e);
    t.math.modal = i, t.math.focusElement = i.querySelector(".se-math-exp"), t.math.previewElement = i.querySelector(".se-math-preview"), t.math.fontSizeElement = i.querySelector(".se-math-size"), t.math.focusElement.addEventListener("paste", function(l) {
      typeof e.functions.onPasteMath == "function" && e.functions.onPasteMath(l, e);
    }, !1), t.math.focusElement.addEventListener(e.util.isIE ? "textinput" : "input", this._renderMathExp.bind(e, t.math), !1), t.math.fontSizeElement.addEventListener("change", (function(l) {
      this.fontSize = l.target.value;
    }).bind(t.math.previewElement.style), !1);
    let n = this.setController_MathButton(e);
    t.math.mathController = n, t.math._mathExp = null, i.querySelector("form").addEventListener("submit", this.submit.bind(e), !1), n.addEventListener("click", this.onClick_mathController.bind(e)), t.math.previewElement.style.fontSize = t.math.defaultFontSize, t.dialog.modal.appendChild(i), t.element.relative.appendChild(n), i = null, n = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), n = e.options.mathFontSize;
    let l = n[0].value;
    i.className = "se-dialog-content", i.style.display = "none";
    let a = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + dn + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let u = 0, c = n.length, o; u < c; u++)
      o = n[u], o.default && (l = o.value), a += '<option value="' + o.value + '"' + (o.default ? " selected" : "") + ">" + o.text + "</option>";
    return a += '</select></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.previewLabel + '</label><p class="se-math-preview"></p></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", e.context.math.defaultFontSize = l, i.innerHTML = a, i;
  },
  /** modify controller button */
  setController_MathButton: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    return i.className = "se-controller se-controller-link", i.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + e.icons.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + e.icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", i;
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
    } catch (i) {
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + dn + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
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
      const i = this.context.math, n = i.focusElement.value, l = i.previewElement.querySelector(".katex");
      if (!l) return !1;
      if (l.className = "__se__katex " + l.className, l.setAttribute("contenteditable", !1), l.setAttribute("data-exp", this.util.HTMLEncoder(n)), l.setAttribute("data-font-size", i.fontSizeElement.value), l.style.fontSize = i.fontSizeElement.value, this.context.dialog.updateModal) {
        const a = this.util.getParentElement(i._mathExp, ".katex");
        a.parentNode.replaceChild(l, a), this.setRange(l, 0, l, 1);
      } else {
        const a = this.getSelectedElements();
        if (a.length > 1) {
          const c = this.util.createElement(a[0].nodeName);
          if (c.appendChild(l), !this.insertNode(c, null, !0)) return !1;
        } else if (!this.insertNode(l, null, !0)) return !1;
        const u = this.util.createTextNode(this.util.zeroWidthSpace);
        l.parentNode.insertBefore(u, l.nextSibling), this.setRange(l, 0, l, 1);
      }
      return i.focusElement.value = "", i.fontSizeElement.value = "1em", i.previewElement.style.fontSize = "1em", i.previewElement.innerHTML = "", !0;
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
        const i = this.util.HTMLDecoder(t._mathExp.getAttribute("data-exp")), n = t._mathExp.getAttribute("data-font-size") || "1em";
        this.context.dialog.updateModal = !0, t.focusElement.value = i, t.fontSizeElement.value = n, t.previewElement.innerHTML = this.plugins.math._renderer.call(this, i), t.previewElement.style.fontSize = n;
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
var Ri = { exports: {} }, _r = Ri.exports, cn;
function Cr() {
  return cn || (cn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : _r, function(t, i) {
      const n = {
        name: "fileBrowser",
        _xmlHttp: null,
        _loading: null,
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function(l) {
          const a = l.context;
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
          let u = l.util.createElement("DIV");
          u.className = "se-file-browser sun-editor-common";
          let c = l.util.createElement("DIV");
          c.className = "se-file-browser-back";
          let o = l.util.createElement("DIV");
          o.className = "se-file-browser-inner", o.innerHTML = this.set_browser(l), u.appendChild(c), u.appendChild(o), this._loading = u.querySelector(".se-loading-box"), a.fileBrowser.area = u, a.fileBrowser.header = o.querySelector(".se-file-browser-header"), a.fileBrowser.titleArea = o.querySelector(".se-file-browser-title"), a.fileBrowser.tagArea = o.querySelector(".se-file-browser-tags"), a.fileBrowser.body = o.querySelector(".se-file-browser-body"), a.fileBrowser.list = o.querySelector(".se-file-browser-list"), a.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(l)), a.fileBrowser.list.addEventListener("click", this.onClickFile.bind(l)), o.addEventListener("mousedown", this._onMouseDown_browser.bind(l)), o.addEventListener("click", this._onClick_browser.bind(l)), a.element.relative.appendChild(u), u = null, c = null, o = null;
        },
        set_browser: function(l) {
          const a = l.lang;
          return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" title="' + a.dialogBox.close + '" aria-label="' + a.dialogBox.close + '">' + l.icons.cancel + '</button><span class="se-file-browser-title"></span><div class="se-file-browser-tags"></div></div><div class="se-file-browser-body"><div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div><div class="se-file-browser-list"></div></div></div>';
        },
        /**
         * @description Event to control the behavior of closing the browser
         * @param {MouseEvent} e Event object
         * @private
         */
        _onMouseDown_browser: function(l) {
          /se-file-browser-inner/.test(l.target.className) ? this.context.fileBrowser._closeSignal = !0 : this.context.fileBrowser._closeSignal = !1;
        },
        /**
         * @description Event to close the window when the outside area of the browser or close button is click
         * @param {MouseEvent} e Event object
         * @private
         */
        _onClick_browser: function(l) {
          l.stopPropagation(), (/close/.test(l.target.getAttribute("data-command")) || this.context.fileBrowser._closeSignal) && this.plugins.fileBrowser.close.call(this);
        },
        /**
         * @description Open a file browser plugin
         * @param {String} pluginName Plugin name using the file browser
         * @param {Function|null} selectorHandler When the function comes as an argument value, it substitutes "context.selectorHandler".
         */
        open: function(l, a) {
          this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(b) {
            /27/.test(b.keyCode) && this.plugins.fileBrowser.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
          const u = this.context.fileBrowser;
          u.contextPlugin = l, u.selectorHandler = a;
          const c = this.context[l], o = c.listClass;
          this.util.hasClass(u.list, o) || (u.list.className = "se-file-browser-list " + o), this.options.popupDisplay === "full" ? u.area.style.position = "fixed" : u.area.style.position = "absolute", u.titleArea.textContent = c.title, u.area.style.display = "block", this.context[l].directData ? this.plugins.fileBrowser._drawListItem.call(this, this.context[l].directData, !0) : this.plugins.fileBrowser._drawFileList.call(this, this.context[l].url, this.context[l].header);
        },
        _bindClose: null,
        /**
         * @description Close a fileBrowser plugin
         * The plugin's "init" method is called.
         */
        close: function() {
          const l = this.plugins.fileBrowser;
          l._xmlHttp && l._xmlHttp.abort(), l._bindClose && (this._d.removeEventListener("keydown", l._bindClose), l._bindClose = null);
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
        _drawFileList: function(l, a) {
          const u = this.plugins.fileBrowser, c = u._xmlHttp = this.util.getXMLHttpRequest();
          if (c.onreadystatechange = u._callBackGet.bind(this, c), c.open("get", l, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
            for (let o in a)
              c.setRequestHeader(o, a[o]);
          c.send(null), this.plugins.fileBrowser.showBrowserLoading();
        },
        _callBackGet: function(l) {
          if (l.readyState === 4) {
            if (this.plugins.fileBrowser._xmlHttp = null, l.status === 200)
              try {
                const a = JSON.parse(l.responseText);
                a.result.length > 0 ? this.plugins.fileBrowser._drawListItem.call(this, a.result, !0) : a.nullMessage && (this.context.fileBrowser.list.innerHTML = a.nullMessage);
              } catch (a) {
                throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + a.message + '"');
              } finally {
                this.plugins.fileBrowser.closeBrowserLoading(), this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + "px";
              }
            else if (this.plugins.fileBrowser.closeBrowserLoading(), l.status !== 0) {
              const a = l.responseText ? JSON.parse(l.responseText) : l, u = "[SUNEDITOR.fileBrowser.get.serverException] status: " + l.status + ", response: " + (a.errorMessage || l.responseText);
              throw Error(u);
            }
          }
        },
        _drawListItem: function(l, a) {
          const u = this.context.fileBrowser, c = this.context[u.contextPlugin], o = [], b = l.length, d = c.columnSize || u.columnSize, v = d <= 1 ? 1 : Math.round(b / d) || 1, w = c.itemTemplateHandler;
          let k = "", L = '<div class="se-file-item-column">', R = 1;
          for (let s = 0, r, f; s < b; s++)
            if (r = l[s], f = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], f = r.tag = f.map(function(h) {
              return h.trim();
            }), L += w(r), (s + 1) % v === 0 && R < d && s + 1 < b && (R++, L += '</div><div class="se-file-item-column">'), a && f.length > 0)
              for (let h = 0, m = f.length, g; h < m; h++)
                g = f[h], g && o.indexOf(g) === -1 && (o.push(g), k += '<a title="' + g + '" aria-label="' + g + '">' + g + "</a>");
          L += "</div>", u.list.innerHTML = L, a && (u.items = l, u.tagArea.innerHTML = k, u.tagElements = u.tagArea.querySelectorAll("A"));
        },
        onClickTag: function(l) {
          const a = l.target;
          if (!this.util.isAnchor(a)) return;
          const u = a.textContent, c = this.plugins.fileBrowser, o = this.context.fileBrowser, b = o.tagArea.querySelector('a[title="' + u + '"]'), d = o.selectedTags, v = d.indexOf(u);
          v > -1 ? (d.splice(v, 1), this.util.removeClass(b, "on")) : (d.push(u), this.util.addClass(b, "on")), c._drawListItem.call(
            this,
            d.length === 0 ? o.items : o.items.filter(function(w) {
              return w.tag.some(function(k) {
                return d.indexOf(k) > -1;
              });
            }),
            !1
          );
        },
        onClickFile: function(l) {
          l.preventDefault(), l.stopPropagation();
          const a = this.context.fileBrowser, u = a.list;
          let c = l.target, o = null;
          if (c === u) return;
          for (; u !== c.parentNode && (o = c.getAttribute("data-command"), !o); )
            c = c.parentNode;
          if (!o) return;
          (a.selectorHandler || this.context[a.contextPlugin].selectorHandler)(c, c.parentNode.querySelector(".__se__img_name").textContent), this.plugins.fileBrowser.close.call(this);
        }
      };
      return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileBrowser", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: n
      })), n;
    });
  }(Ri)), Ri.exports;
}
var wr = /* @__PURE__ */ Cr();
const kr = /* @__PURE__ */ Se(wr), xr = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([kr]);
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
      const i = { name: t, size: 0 };
      this.plugins.image.create_image.call(this, e.getAttribute("data-value"), null, this.context.image._origin_w, this.context.image._origin_h, "none", i, e.alt);
    }).bind(this), null);
  }
}, Sr = { blockquote: Pa, align: Wa, font: $a, fontSize: Za, fontColor: qa, hiliteColor: ja, horizontalRule: Ga, list: Ka, table: Ya, formatBlock: Xa, lineHeight: Ja, template: Qa, paragraphStyle: er, textStyle: tr, link: sr, image: gr, video: vr, audio: br, math: yr, imageGallery: xr }, Lr = {
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
}, fn = {
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
    return e.replace(/&|\u00A0|'|"|<|>/g, function(i) {
      return typeof t[i] == "string" ? t[i] : i;
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
    return e.replace(/<|>/g, function(i) {
      return typeof t[i] == "string" ? t[i] : i;
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
    return e.replace(/\$lt;|\$gt;/g, function(i) {
      return typeof t[i] == "string" ? t[i] : i;
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
    let i = "";
    const n = [], l = t === "js" ? "script" : "link", a = t === "js" ? "src" : "href";
    let u = "(?:";
    for (let b = 0, d = e.length; b < d; b++)
      u += e[b] + (b < d - 1 ? "|" : ")");
    const c = new this._w.RegExp("(^|.*[\\/])" + u + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), o = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let b = this._d.getElementsByTagName(l), d = 0; d < b.length; d++)
      o.test(b[d][a]) && n.push(b[d]);
    for (let b = 0; b < n.length; b++) {
      let d = n[b][a].match(c);
      if (d) {
        i = d[0];
        break;
      }
    }
    if (i === "" && (i = n.length > 0 ? n[0][a] : ""), i.indexOf(":/") === -1 && i.slice(0, 2) !== "//" && (i = i.indexOf("/") === 0 ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + i : location.href.match(/^[^\?]*\/(?:)/)[0] + i), !i) throw "[SUNEDITOR.util.getIncludePath.fail] The SUNEDITOR installation path could not be automatically detected. (name: +" + name + ", extension: " + t + ")";
    return i;
  },
  /**
   * @deprecated
   * @description Returns the CSS text that has been applied to the current page.
   * @param {Document|null} doc To get the CSS text of an document(core._wd). If null get the current document.
   * @returns {String} Styles string
   */
  getPageStyle: function(e) {
    let t = "";
    const i = (e || this._d).styleSheets;
    for (let n = 0, l = i.length, a; n < l; n++) {
      try {
        a = i[n].cssRules;
      } catch {
        continue;
      }
      if (a)
        for (let u = 0, c = a.length; u < c; u++)
          t += a[u].cssText;
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
    const i = e.attributes;
    let n = "";
    for (let l = 0, a = i.length; l < a; l++)
      t && t.indexOf(i[l].name) > -1 || (n += i[l].name + '="' + i[l].value + '" ');
    return n;
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
    let i, n;
    return this.isIE_Edge ? (n = this._w.unescape(t(e)).length, i = 0, t(e).match(/(%0A|%0D)/gi) !== null && (i = t(e).match(/(%0A|%0D)/gi).length), n + i) : (n = new this._w.TextEncoder("utf-8").encode(e).length, i = 0, t(e).match(/(%0A|%0D)/gi) !== null && (i = t(e).match(/(%0A|%0D)/gi).length), n + i);
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
  copyTagAttributes: function(e, t, i) {
    if (t.style.cssText) {
      const l = t.style;
      for (let a = 0, u = l.length; a < u; a++)
        e.style[l[a]] = l[l[a]];
    }
    const n = t.attributes;
    for (let l = 0, a = n.length, u; l < a; l++)
      u = n[l].name.toLowerCase(), i && i.indexOf(u) > -1 || !n[l].value ? e.removeAttribute(u) : u !== "style" && e.setAttribute(n[l].name, n[l].value);
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
  getArrayItem: function(e, t, i) {
    if (!e || e.length === 0) return null;
    t = t || function() {
      return !0;
    };
    const n = [];
    for (let l = 0, a = e.length, u; l < a; l++)
      if (u = e[l], t(u))
        if (i) n.push(u);
        else return u;
    return i ? n : null;
  },
  /**
   * @description Check if an array contains an element 
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} element The element to check for
   * @returns {Boolean}
   */
  arrayIncludes: function(e, t) {
    for (let i = 0; i < e.length; i++)
      if (e[i] === t)
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
    let i = -1;
    for (let n = 0, l = e.length; n < l; n++)
      if (e[n] === t) {
        i = n;
        break;
      }
    return i;
  },
  /**
   * @description Get the next index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} item The element to find index
   * @returns {Number}
   */
  nextIdx: function(e, t) {
    let i = this.getArrayIndex(e, t);
    return i === -1 ? -1 : i + 1;
  },
  /**
   * @description Get the previous index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array Element array
   * @param {Node} item The element to find index
   * @returns {Number}
   */
  prevIdx: function(e, t) {
    let i = this.getArrayIndex(e, t);
    return i === -1 ? -1 : i - 1;
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
  getNodePath: function(e, t, i) {
    const n = [];
    let l = !0;
    return this.getParentElement(e, (function(a) {
      if (a === t && (l = !1), l && !this.isWysiwygDiv(a)) {
        if (i && a.nodeType === 3) {
          let u = null, c = null;
          i.s = i.e = 0;
          let o = a.previousSibling;
          for (; o && o.nodeType === 3; )
            c = o.textContent.replace(this.zeroWidthRegExp, ""), i.s += c.length, a.textContent = c + a.textContent, u = o, o = o.previousSibling, this.removeItem(u);
          let b = a.nextSibling;
          for (; b && b.nodeType === 3; )
            c = b.textContent.replace(this.zeroWidthRegExp, ""), i.e += c.length, a.textContent += c, u = b, b = b.nextSibling, this.removeItem(u);
        }
        n.push(a);
      }
      return !1;
    }).bind(this)), n.map(this.getPositionIndex).reverse();
  },
  /**
   * @description Returns the node in the location of the path array obtained from "util.getNodePath".
   * @param {Array} offsets Position array, array obtained from "util.getNodePath"
   * @param {Node} parentNode Base parent element
   * @returns {Node}
   */
  getNodeFromPath: function(e, t) {
    let i = t, n;
    for (let l = 0, a = e.length; l < a && (n = i.childNodes, n.length !== 0); l++)
      n.length <= e[l] ? i = n[n.length - 1] : i = n[e[l]];
    return i;
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
    const i = e.style, n = t.style;
    let l = 0;
    for (let b = 0, d = i.length; b < d; b++)
      i[i[b]] === n[i[b]] && l++;
    const a = e.classList, u = t.classList, c = this._w.RegExp;
    let o = 0;
    for (let b = 0, d = a.length; b < d; b++)
      c("(s|^)" + a[b] + "(s|$)").test(u.value) && o++;
    return l === n.length && l === i.length && o === u.length && o === a.length;
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
    let i = (e + "").match(/-?\d+(\.\d+)?/);
    return !i || !i[0] ? 0 : (i = i[0], t < 0 ? i * 1 : t === 0 ? this._w.Math.round(i * 1) : (i * 1).toFixed(t) * 1);
  },
  /**
   * @description Get all "children" of the argument value element (Without text nodes)
   * @param {Element} element element to get child node
   * @param {Function|null} validation Conditional function
   * @returns {Array}
   */
  getListChildren: function(e, t) {
    const i = [];
    return !e || !e.children || e.children.length === 0 || (t = t || function() {
      return !0;
    }, function n(l) {
      if (e !== l && t(l) && i.push(l), l.children)
        for (let a = 0, u = l.children.length; a < u; a++)
          n(l.children[a]);
    }(e)), i;
  },
  /**
   * @description Get all "childNodes" of the argument value element (Include text nodes)
   * @param {Node} element element to get child node
   * @param {Function|null} validation Conditional function
   * @returns {Array}
   */
  getListChildNodes: function(e, t) {
    const i = [];
    return !e || e.childNodes.length === 0 || (t = t || function() {
      return !0;
    }, function n(l) {
      e !== l && t(l) && i.push(l);
      for (let a = 0, u = l.childNodes.length; a < u; a++)
        n(l.childNodes[a]);
    }(e)), i;
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
    let i = e, n = t;
    for (; i && n && i.parentNode !== n.parentNode; )
      i = i.parentNode, n = n.parentNode;
    if (!i || !n) return { ancestor: null, a: e, b: t, result: 0 };
    const l = i.parentNode.childNodes, a = this.getArrayIndex(l, i), u = this.getArrayIndex(l, n);
    return {
      ancestor: i.parentNode,
      a: i,
      b: n,
      result: a > u ? 1 : a < u ? -1 : 0
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
    let i;
    if (typeof t == "function")
      i = t;
    else {
      let n;
      /^\./.test(t) ? (n = "className", t = t.split(".")[1]) : /^#/.test(t) ? (n = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (n = "name", t = "^" + t.split(":")[1] + "$") : (n = "nodeName", t = "^" + t + "$");
      const l = new this._w.RegExp(t, "i");
      i = function(a) {
        return l.test(a[n]);
      };
    }
    for (; e && !i(e); ) {
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
    let i = e.previousSibling;
    if (!i) {
      for (let n = e.parentNode; n; n = n.parentNode) {
        if (n === t) return null;
        if (n.previousSibling) {
          i = n.previousSibling;
          break;
        }
      }
      if (!i) return null;
    }
    for (; i.lastChild; ) i = i.lastChild;
    return i;
  },
  /**
   * @description Gets the next sibling first child. If there is no sibling, then it'll take it from the closest ancestor with child
   * Returns null if not found.
   * @param {Node} node Reference element
   * @param {Node|null} ceiling Highest boundary allowed
   * @returns {Node|null}
   */
  getNextDeepestNode: function(e, t) {
    let i = e.nextSibling;
    if (!i) {
      for (let n = e.parentNode; n; n = n.parentNode) {
        if (n === t) return null;
        if (n.nextSibling) {
          i = n.nextSibling;
          break;
        }
      }
      if (!i) return null;
    }
    for (; i.firstChild; ) i = i.firstChild;
    return i;
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
  getChildElement: function(e, t, i) {
    let n;
    if (typeof t == "function")
      n = t;
    else {
      let a;
      /^\./.test(t) ? (a = "className", t = t.split(".")[1]) : /^#/.test(t) ? (a = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (a = "name", t = "^" + t.split(":")[1] + "$") : (a = "nodeName", t = "^" + (t === "text" ? "#" + t : t) + "$");
      const u = new this._w.RegExp(t, "i");
      n = function(c) {
        return u.test(c[a]);
      };
    }
    const l = this.getListChildNodes(e, function(a) {
      return n(a);
    });
    return l[i ? l.length - 1 : 0];
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
    let i = 0, n = 0, l = e.nodeType === 3 ? e.parentElement : e;
    const a = this.getParentElement(e, this.isWysiwygDiv.bind(this));
    for (; l && !this.hasClass(l, "se-container") && l !== a; )
      i += l.offsetLeft, n += l.offsetTop, l = l.offsetParent;
    const u = t && /iframe/i.test(t.nodeName);
    return {
      left: i + (u ? t.parentElement.offsetLeft : 0),
      top: n - (a ? a.scrollTop : 0) + (u ? t.parentElement.offsetTop : 0)
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
  getOverlapRangeAtIndex: function(e, t, i, n) {
    if (e <= n ? t < i : t > i) return 0;
    const l = (e > i ? e : i) - (t < n ? t : n);
    return (l < 0 ? l * -1 : l) + 1;
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
        const i = this.createElement("DIV");
        i.innerHTML = t, t = i.firstChild, e.parentNode.replaceChild(t, e);
      }
    else t.nodeType === 1 && e.parentNode.replaceChild(t, e);
  },
  /**
   * @description Set style, if all styles are deleted, the style properties are deleted.
   * @param {Element} element Element to set style
   * @param {String} styleName Style attribute name (marginLeft, textAlign...)
   * @param {String|Number} value Style value
   */
  setStyle: function(e, t, i) {
    e.style[t] = i, !i && !e.style.cssText && e.removeAttribute("style");
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
    const i = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    e.className = e.className.replace(i, " ").trim(), e.className.trim() || e.removeAttribute("class");
  },
  /**
   * @description Argument value If there is no class name, insert it and delete the class name if it exists
   * @param {Element} element Elements to replace class name
   * @param {String} className Class name to be change
   * @returns {Boolean|undefined}
   */
  toggleClass: function(e, t) {
    if (!e) return;
    let i = !1;
    const n = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    return n.test(e.className) ? e.className = e.className.replace(n, " ").trim() : (e.className += " " + t, i = !0), e.className.trim() || e.removeAttribute("class"), i;
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
  setDisabledButtons: function(e, t, i) {
    for (let n = 0, l = t.length; n < l; n++) {
      let a = t[n];
      (i || !this.isImportantDisabled(a)) && (a.disabled = e), i && (e ? a.setAttribute("data-important-disabled", "") : a.removeAttribute("data-important-disabled"));
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
  removeItemAllParents: function(e, t, i) {
    if (!e) return null;
    let n = null;
    return t || (t = (function(l) {
      if (l === i || this.isComponent(l)) return !1;
      const a = l.textContent.trim();
      return a.length === 0 || /^(\n|\u200B)+$/.test(a);
    }).bind(this)), function l(a) {
      if (!he.isWysiwygDiv(a)) {
        const u = a.parentNode;
        u && t(a) && (n = {
          sc: a.previousElementSibling,
          ec: a.nextElementSibling
        }, he.removeItem(a), l(u));
      }
    }(e), n;
  },
  /**
   * @description Detach Nested all nested lists under the "baseNode".
   * Returns a list with nested removed.
   * @param {Node} baseNode Element on which to base.
   * @param {Boolean} all If true, it also detach all nested lists of a returned list.
   * @returns {Element}
   */
  detachNestedList: function(e, t) {
    const i = this._deleteNestedList(e);
    let n, l;
    if (i) {
      n = i.cloneNode(!1), l = i.childNodes;
      const u = this.getPositionIndex(e);
      for (; l[u]; )
        n.appendChild(l[u]);
    } else
      n = e;
    let a;
    if (t)
      a = this.getListChildren(n, (function(u) {
        return this.isListCell(u) && !u.previousElementSibling;
      }).bind(this));
    else {
      const u = this.getElementDepth(e) + 2;
      a = this.getListChildren(e, (function(c) {
        return this.isListCell(c) && !c.previousElementSibling && this.getElementDepth(c) === u;
      }).bind(this));
    }
    for (let u = 0, c = a.length; u < c; u++)
      this._deleteNestedList(a[u]);
    return i && (i.parentNode.insertBefore(n, i.nextSibling), l && l.length === 0 && this.removeItem(i)), n === e ? n.parentNode : n;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let i = t, n = i.parentNode, l, a, u, c, o;
    for (; this.isListCell(n); ) {
      for (c = this.getPositionIndex(e), l = n.nextElementSibling, a = n.parentNode, u = i; u; ) {
        if (i = i.nextSibling, this.isList(u)) {
          for (o = u.childNodes; o[c]; )
            a.insertBefore(o[c], l);
          o.length === 0 && this.removeItem(u);
        } else
          a.appendChild(u);
        u = i;
      }
      i = a, n = a.parentNode;
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
  splitElement: function(e, t, i) {
    if (this.isWysiwygDiv(e)) return e;
    if (t && !this.isNumber(t)) {
      const w = e.childNodes;
      let k = this.getPositionIndex(t);
      const L = e.cloneNode(!1), R = e.cloneNode(!1);
      for (let s = 0, r = w.length; s < r; s++) {
        if (s < k) L.appendChild(w[s]);
        else if (s > k) R.appendChild(w[s]);
        else continue;
        s--, r--, k--;
      }
      return L.childNodes.length > 0 && e.parentNode.insertBefore(L, e), R.childNodes.length > 0 && e.parentNode.insertBefore(R, e.nextElementSibling), e;
    }
    const n = e.parentNode;
    let l = 0, a = 1, u = !0, c, o, b;
    if ((!i || i < 0) && (i = 0), e.nodeType === 3) {
      if (l = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const w = this.getNodeFromPath([l + 1], n);
        this.onlyZeroWidthSpace(w) && (w.data = this.zeroWidthSpace);
      }
    } else if (e.nodeType === 1) {
      if (t === 0) {
        for (; e.firstChild; )
          e = e.firstChild;
        if (e.nodeType === 3) {
          const w = this.createTextNode(this.zeroWidthSpace);
          e.parentNode.insertBefore(w, e), e = w;
        }
      }
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === i && (u = !1);
    }
    e.nodeType === 1 && (a = 0);
    let d = e;
    for (; this.getElementDepth(d) > i; )
      for (l = this.getPositionIndex(d) + a, d = d.parentNode, b = c, c = d.cloneNode(!1), o = d.childNodes, b && (this.isListCell(c) && this.isList(b) && b.firstElementChild ? (c.innerHTML = b.firstElementChild.innerHTML, he.removeItem(b.firstElementChild), b.children.length > 0 && c.appendChild(b)) : c.appendChild(b)); o[l]; )
        c.appendChild(o[l]);
    d.childNodes.length <= 1 && (!d.firstChild || d.firstChild.textContent.length === 0) && (d.innerHTML = "<br>");
    const v = d.parentNode;
    return u && (d = d.nextSibling), c ? (this.mergeSameTags(c, null, !1), this.mergeNestedTags(c, (function(w) {
      return this.isList(w);
    }).bind(this)), c.childNodes.length > 0 ? v.insertBefore(c, d) : c = d, this.isListCell(c) && c.children && this.isList(c.children[0]) && c.insertBefore(this.createElement("BR"), c.children[0]), n.childNodes.length === 0 && this.removeItem(n), c) : d;
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
  mergeSameTags: function(e, t, i) {
    const n = this, l = t ? t.length : 0;
    let a = null;
    return l && (a = this._w.Array.apply(null, new this._w.Array(l)).map(this._w.Number.prototype.valueOf, 0)), function u(c, o, b) {
      const d = c.childNodes;
      for (let v = 0, w = d.length, k, L; v < w && (k = d[v], L = d[v + 1], !!k); v++)
        if (!(n.isBreak(k) || n.isMedia(k) || n.isInputElement(k))) {
          if (i && n._isIgnoreNodeChange(k) || !i && (n.isTable(k) || n.isListCell(k) || n.isFormatElement(k) && !n.isFreeFormatElement(k))) {
            (n.isTable(k) || n.isListCell(k)) && u(k, o + 1, v);
            continue;
          }
          if (w === 1 && c.nodeName === k.nodeName && c.parentNode) {
            if (l) {
              let R, s, r, f, h;
              for (let m = 0; m < l; m++)
                if (R = t[m], R && R[o] === v) {
                  for (s = k, r = c, f = o, h = !0; f >= 0; ) {
                    if (n.getArrayIndex(r.childNodes, s) !== R[f]) {
                      h = !1;
                      break;
                    }
                    s = k.parentNode, r = s.parentNode, f--;
                  }
                  h && (R.splice(o, 1), R[o] = v);
                }
            }
            n.copyTagAttributes(k, c), c.parentNode.insertBefore(k, c), n.removeItem(c);
          }
          if (!L) {
            k.nodeType === 1 && u(k, o + 1, v);
            break;
          }
          if (k.nodeName === L.nodeName && n.isSameAttributes(k, L) && k.href === L.href) {
            const R = k.childNodes;
            let s = 0;
            for (let m = 0, g = R.length; m < g; m++)
              R[m].textContent.length > 0 && s++;
            const r = k.lastChild, f = L.firstChild;
            let h = 0;
            if (r && f) {
              const m = r.nodeType === 3 && f.nodeType === 3;
              h = r.textContent.length;
              let g = r.previousSibling;
              for (; g && g.nodeType === 3; )
                h += g.textContent.length, g = g.previousSibling;
              if (s > 0 && r.nodeType === 3 && f.nodeType === 3 && (r.textContent.length > 0 || f.textContent.length > 0) && s--, l) {
                let p = null;
                for (let y = 0; y < l; y++)
                  if (p = t[y], p && p[o] > v) {
                    if (o > 0 && p[o - 1] !== b) continue;
                    p[o] -= 1, p[o + 1] >= 0 && p[o] === v && (p[o + 1] += s, m && r && r.nodeType === 3 && f && f.nodeType === 3 && (a[y] += h));
                  }
              }
            }
            if (k.nodeType === 3) {
              if (h = k.textContent.length, k.textContent += L.textContent, l) {
                let m = null;
                for (let g = 0; g < l; g++)
                  if (m = t[g], m && m[o] > v) {
                    if (o > 0 && m[o - 1] !== b) continue;
                    m[o] -= 1, m[o + 1] >= 0 && m[o] === v && (m[o + 1] += s, a[g] += h);
                  }
              }
            } else
              k.innerHTML += L.innerHTML;
            n.removeItem(L), v--;
          } else k.nodeType === 1 && u(k, o + 1, v);
        }
    }(e, 0, 0), a;
  },
  /**
   * @description Remove nested tags without other child nodes.
   * @param {Element} element Element object
   * @param {Function|String|null} validation Validation function / String("tag1|tag2..") / If null, all tags are applicable.
   */
  mergeNestedTags: function(e, t) {
    typeof t == "string" ? t = (function(i) {
      return this.test(i.tagName);
    }).bind(new this._w.RegExp("^(" + (t || ".+") + ")$", "i")) : typeof t != "function" && (t = function() {
      return !0;
    }), function i(n) {
      let l = n.children;
      if (l.length === 1 && l[0].nodeName === n.nodeName && t(n)) {
        const a = l[0];
        for (l = a.children; l[0]; )
          n.appendChild(l[0]);
        n.removeChild(a);
      }
      for (let a = 0, u = n.children.length; a < u; a++)
        i(n.children[a]);
    }(e);
  },
  /**
   * @description Delete a empty child node of argument element.
   * @param {Element} element Element node
   * @param {Node|null} notRemoveNode Do not remove node
   * @param {boolean} forceDelete When all child nodes are deleted, the parent node is also deleted.
   */
  removeEmptyNode: function(e, t, i) {
    const n = this;
    t && (t = n.getParentElement(t, function(l) {
      return e === l.parentElement;
    })), function l(a) {
      if (n._notTextNode(a) || a === t || n.isNonEditable(a)) return 0;
      if (a !== e && n.onlyZeroWidthSpace(a.textContent) && (!a.firstChild || !n.isBreak(a.firstChild)) && !a.querySelector(n._allowedEmptyNodeList)) {
        if (a.parentNode)
          return a.parentNode.removeChild(a), -1;
      } else {
        const u = a.children;
        for (let c = 0, o = u.length, b = 0; c < o; c++)
          !u[c + b] || n.isComponent(u[c + b]) || (b += l(u[c + b]));
      }
      return 0;
    }(e), e.childNodes.length === 0 && (i ? this.removeItem(e) : e.innerHTML = "<br>");
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
    const i = t ? 1 : -1, n = i * -1;
    e.sort((function(l, a) {
      return !this.isListCell(l) || !this.isListCell(a) ? 0 : (l = this.getElementDepth(l), a = this.getElementDepth(a), l > a ? i : l < a ? n : 0);
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
  _consistencyCheckOfHTML: function(e, t, i, n, l) {
    const a = [], u = [], c = [], o = [], b = this.getListChildNodes(e, (function(v) {
      if (v.nodeType !== 1)
        return this.isList(v.parentElement) && a.push(v), !1;
      if (i.test(v.nodeName) || !t.test(v.nodeName) && v.childNodes.length === 0 && this.isNotCheckingNode(v))
        return a.push(v), !1;
      const w = !this.getParentElement(v, this.isNotCheckingNode);
      if (!this.isTable(v) && !this.isListCell(v) && !this.isAnchor(v) && (this.isFormatElement(v) || this.isRangeFormatElement(v) || this.isTextStyleElement(v)) && v.childNodes.length === 0 && w)
        return u.push(v), !1;
      if (this.isList(v.parentNode) && !this.isList(v) && !this.isListCell(v))
        return c.push(v), !1;
      if (this.isCell(v)) {
        const L = v.firstElementChild;
        if (!this.isFormatElement(L) && !this.isRangeFormatElement(L) && !this.isComponent(L))
          return o.push(v), !1;
      }
      if (w && v.className) {
        const L = new this._w.Array(v.classList).map(n).join(" ").trim();
        L ? v.className = L : v.removeAttribute("class");
      }
      return l && v.parentNode !== e && w && (this.isListCell(v) && !this.isList(v.parentNode) || (this.isFormatElement(v) || this.isComponent(v)) && !this.isRangeFormatElement(v.parentNode) && !this.getParentElement(v, this.isComponent));
    }).bind(this));
    for (let v = 0, w = a.length; v < w; v++)
      this.removeItem(a[v]);
    const d = [];
    for (let v = 0, w = b.length, k, L; v < w; v++)
      if (k = b[v], L = k.parentNode, !(!L || !L.parentNode))
        if (this.getParentElement(k, this.isListCell)) {
          const R = k.childNodes;
          for (let s = R.length - 1; w >= 0; s--)
            L.insertBefore(k, R[s]);
          d.push(k);
        } else
          L.parentNode.insertBefore(k, L), d.push(L);
    for (let v = 0, w = d.length, k; v < w; v++)
      k = d[v], this.onlyZeroWidthSpace(k.textContent.trim()) && this.removeItem(k);
    for (let v = 0, w = u.length; v < w; v++)
      this.removeItem(u[v]);
    for (let v = 0, w = c.length, k, L, R, s; v < w; v++)
      if (k = c[v], s = k.parentNode, !!s)
        if (L = this.createElement("LI"), this.isFormatElement(k)) {
          for (R = k.childNodes; R[0]; )
            L.appendChild(R[0]);
          s.insertBefore(L, k), this.removeItem(k);
        } else
          k = k.nextSibling, L.appendChild(c[v]), s.insertBefore(L, k);
    for (let v = 0, w = o.length, k, L; v < w; v++)
      k = o[v], L = this.createElement("DIV"), L.innerHTML = k.textContent.trim().length === 0 && k.children.length === 0 ? "<br>" : k.innerHTML, k.innerHTML = L.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let i = "";
    e.height && (i += "height:" + e.height + ";"), e.minHeight && (i += "min-height:" + e.minHeight + ";"), e.maxHeight && (i += "max-height:" + e.maxHeight + ";"), e.position && (i += "position:" + e.position + ";"), e.width && (i += "width:" + e.width + ";"), e.minWidth && (i += "min-width:" + e.minWidth + ";"), e.maxWidth && (i += "max-width:" + e.maxWidth + ";");
    let n = "", l = "", a = "";
    t = i + t;
    const u = t.split(";");
    for (let c = 0, o = u.length, b; c < o; c++)
      if (b = u[c].trim(), !!b) {
        if (/^(min-|max-)?width\s*:/.test(b) || /^(z-index|position)\s*:/.test(b)) {
          n += b + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(b)) {
          /^height/.test(b) && b.split(":")[1].trim() === "auto" && (e.height = "auto"), l += b + ";";
          continue;
        }
        a += b + ";";
      }
    return {
      top: n,
      frame: l,
      editor: a
    };
  },
  _setIframeDocument: function(e, t) {
    e.setAttribute("scrolling", "auto"), e.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' + this._setIframeCssTags(t), e.contentDocument.body.className = t._editableClass, e.contentDocument.body.setAttribute("contenteditable", !0), e.contentDocument.body.setAttribute("autocorrect", "off");
  },
  _setIframeCssTags: function(e) {
    const t = e.iframeCSSFileName, i = this._w.RegExp;
    let n = "";
    for (let l = 0, a = t.length, u; l < a; l++) {
      if (u = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[l]))
        u.push(t[l]);
      else {
        const c = new i("(^|.*[\\/])" + t[l] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let o = document.getElementsByTagName("link"), b = 0, d = o.length, v; b < d; b++)
          v = o[b].href.match(c), v && u.push(v[0]);
      }
      if (!u || u.length === 0) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
      for (let c = 0, o = u.length; c < o; c++)
        n += '<link href="' + u[c] + '" rel="stylesheet">';
    }
    return n + (e.height === "auto" ? `<style>
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
    const i = document;
    this._initOptions(e, t);
    const n = i.createElement("DIV");
    n.className = "sun-editor" + (t.rtl ? " se-rtl" : ""), e.id && (n.id = "suneditor_" + e.id);
    const l = i.createElement("DIV");
    l.className = "se-container";
    const a = this._createToolBar(i, t.buttonList, t.plugins, t), u = a.element.cloneNode(!1);
    u.className += " se-toolbar-shadow", a.element.style.visibility = "hidden", a.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const c = i.createElement("DIV");
    c.className = "se-arrow";
    const o = i.createElement("DIV");
    o.className = "se-toolbar-sticky-dummy";
    const b = i.createElement("DIV");
    b.className = "se-wrapper";
    const d = this._initElements(t, n, a.element, c), v = d.bottomBar, w = d.wysiwygFrame, k = d.placeholder;
    let L = d.codeView;
    const R = v.resizingBar, s = v.navigation, r = v.charWrapper, f = v.charCounter, h = i.createElement("DIV");
    h.className = "se-loading-box sun-editor-common", h.innerHTML = '<div class="se-loading-effect"></div>';
    const m = i.createElement("DIV");
    m.className = "se-line-breaker", m.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const g = i.createElement("DIV");
    g.className += "se-line-breaker-component";
    const p = g.cloneNode(!0);
    g.innerHTML = p.innerHTML = t.icons.line_break;
    const y = i.createElement("DIV");
    y.className = "se-resizing-back";
    const C = i.createElement("INPUT");
    C.tabIndex = -1, C.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const _ = t.toolbarContainer;
    _ && (_.appendChild(a.element), _.appendChild(u));
    const S = t.resizingBarContainer;
    return R && S && S.appendChild(R), b.appendChild(L), k && b.appendChild(k), _ || (l.appendChild(a.element), l.appendChild(u)), l.appendChild(o), l.appendChild(b), l.appendChild(y), l.appendChild(h), l.appendChild(m), l.appendChild(g), l.appendChild(p), l.appendChild(C), R && !S && l.appendChild(R), n.appendChild(l), L = this._checkCodeMirror(t, L), {
      constructed: {
        _top: n,
        _relative: l,
        _toolBar: a.element,
        _toolbarShadow: u,
        _menuTray: a._menuTray,
        _editorArea: b,
        _wysiwygArea: w,
        _codeArea: L,
        _placeholder: k,
        _resizingBar: R,
        _navigation: s,
        _charWrapper: r,
        _charCounter: f,
        _loading: h,
        _lineBreaker: m,
        _lineBreaker_t: g,
        _lineBreaker_b: p,
        _resizeBack: y,
        _stickyDummy: o,
        _arrow: c,
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
      const i = [{
        mode: "htmlmixed",
        htmlMode: !0,
        lineNumbers: !0,
        lineWrapping: !0
      }, e.codeMirror.options || {}].reduce(function(l, a) {
        for (let u in a)
          he.hasOwn(a, u) && (l[u] = a[u]);
        return l;
      }, {});
      e.height === "auto" && (i.viewportMargin = 1 / 0, i.height = "auto");
      const n = e.codeMirror.src.fromTextArea(t, i);
      n.display.wrapper.style.cssText = t.style.cssText, e.codeMirrorEditor = n, t = n.display.wrapper, t.className += " se-wrapper-code-mirror";
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
    }, e.options || {}].reduce(function(i, n) {
      for (let l in n)
        he.hasOwn(n, l) && (i[l] = n[l]);
      return i;
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
  _setOptions: function(e, t, i) {
    this._initOptions(t.element.originElement, e);
    const n = t.element, l = n.relative, a = n.editorArea, u = e.toolbarContainer && e.toolbarContainer !== i.toolbarContainer, c = e.lang !== i.lang || e.buttonList !== i.buttonList || e.mode !== i.mode || u, o = this._createToolBar(document, c ? e.buttonList : i.buttonList, e.plugins, e);
    o.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const b = document.createElement("DIV");
    b.className = "se-arrow", c && (o.element.style.visibility = "hidden", u ? (e.toolbarContainer.appendChild(o.element), n.toolbar.parentElement.removeChild(n.toolbar)) : n.toolbar.parentElement.replaceChild(o.element, n.toolbar), n.toolbar = o.element, n._menuTray = o._menuTray, n._arrow = b);
    const d = this._initElements(e, n.topArea, c ? o.element : n.toolbar, b), v = d.bottomBar, w = d.wysiwygFrame, k = d.placeholder;
    let L = d.codeView;
    return n.resizingBar && he.removeItem(n.resizingBar), v.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(v.resizingBar) : l.appendChild(v.resizingBar)), a.innerHTML = "", a.appendChild(L), k && a.appendChild(k), L = this._checkCodeMirror(e, L), n.resizingBar = v.resizingBar, n.navigation = v.navigation, n.charWrapper = v.charWrapper, n.charCounter = v.charCounter, n.wysiwygFrame = w, n.code = L, n.placeholder = k, e.rtl ? he.addClass(n.topArea, "se-rtl") : he.removeClass(n.topArea, "se-rtl"), {
      callButtons: o.pluginCallButtons,
      plugins: o.plugins,
      toolbar: o
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
  _initElements: function(e, t, i, n) {
    t.style.cssText = e._editorStyles.top, /inline/i.test(e.mode) ? (i.className += " se-toolbar-inline", i.style.width = e.toolbarWidth) : /balloon/i.test(e.mode) && (i.className += " se-toolbar-balloon", i.style.width = e.toolbarWidth, i.appendChild(n));
    const l = document.createElement(e.iframe ? "IFRAME" : "DIV");
    if (l.className = "se-wrapper-inner se-wrapper-wysiwyg", e.iframe)
      l.allowFullscreen = !0, l.frameBorder = 0, l.style.cssText = e._editorStyles.frame, l.className += e.className;
    else {
      l.setAttribute("contenteditable", !0), l.setAttribute("autocorrect", "off"), l.setAttribute("scrolling", "auto");
      for (let v in e.iframeAttributes)
        l.setAttribute(v, e.iframeAttributes[v]);
      l.className += " " + e._editableClass, l.style.cssText = e._editorStyles.frame + e._editorStyles.editor, l.className += e.className;
    }
    const a = document.createElement("TEXTAREA");
    a.className = "se-wrapper-inner se-wrapper-code" + e.className, a.style.cssText = e._editorStyles.frame, a.style.display = "none", e.height === "auto" && (a.style.overflow = "hidden");
    let u = null, c = null, o = null, b = null;
    if (e.resizingBar && (u = document.createElement("DIV"), u.className = "se-resizing-bar sun-editor-common", c = document.createElement("DIV"), c.className = "se-navigation sun-editor-common", u.appendChild(c), e.charCounter)) {
      if (o = document.createElement("DIV"), o.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const v = document.createElement("SPAN");
        v.className = "se-char-label", v.textContent = e.charCounterLabel, o.appendChild(v);
      }
      if (b = document.createElement("SPAN"), b.className = "se-char-counter", b.textContent = "0", o.appendChild(b), e.maxCharCount > 0) {
        const v = document.createElement("SPAN");
        v.textContent = " / " + e.maxCharCount, o.appendChild(v);
      }
      u.appendChild(o);
    }
    let d = null;
    return e.placeholder && (d = document.createElement("SPAN"), d.className = "se-placeholder", d.innerText = e.placeholder), {
      bottomBar: {
        resizingBar: u,
        navigation: c,
        charWrapper: o,
        charCounter: b
      },
      wysiwygFrame: l,
      codeView: a,
      placeholder: d
    };
  },
  /**
   * @description Initialize options
   * @param {Element} element Options object
   * @param {Object} options Options object
   * @private
   */
  _initOptions: function(e, t) {
    const i = {};
    if (t.plugins) {
      const a = t.plugins, u = a.length ? a : Object.keys(a).map(function(c) {
        return a[c];
      });
      for (let c = 0, o = u.length, b; c < o; c++)
        b = u[c].default || u[c], i[b.name] = b;
    }
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || Ui, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new he._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const n = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(a, u) {
      for (let c in u)
        a[c] = u[c];
      return a;
    }, {});
    t._textTagsMap = {
      strong: n.bold.toLowerCase(),
      b: n.bold.toLowerCase(),
      u: n.underline.toLowerCase(),
      ins: n.underline.toLowerCase(),
      em: n.italic.toLowerCase(),
      i: n.italic.toLowerCase(),
      del: n.strike.toLowerCase(),
      strike: n.strike.toLowerCase(),
      s: n.strike.toLowerCase(),
      sub: n.sub.toLowerCase(),
      sup: n.sup.toLowerCase()
    }, t._defaultCommand = {
      bold: t.textTags.bold,
      underline: t.textTags.underline,
      italic: t.textTags.italic,
      strike: t.textTags.strike,
      subscript: t.textTags.sub,
      superscript: t.textTags.sup
    }, t.__allowedScriptTag = t.__allowedScriptTag === !0;
    const l = "br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary";
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : l) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? he.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? he.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? he.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
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
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? fn : [fn, t.icons].reduce(function(a, u) {
      for (let c in u)
        he.hasOwn(u, c) && (a[c] = u[c]);
      return a;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(a, u) {
      for (let c in u)
        he.hasOwn(u, c) && (a[c] = u[c]);
      return a;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = he._setDefaultOptionStyle(t, t.defaultStyle);
  },
  _setWhitelist: function(e, t) {
    if (typeof t != "string") return e;
    t = t.split("|"), e = e.split("|");
    for (let i = 0, n = t.length, l; i < n; i++)
      l = e.indexOf(t[i]), l > -1 && e.splice(l, 1);
    return e.join("|");
  },
  /**
   * @description Suneditor's Default button list
   * @param {Object} options options
   * @private
   */
  _defaultButtons: function(e) {
    const t = e.icons, i = e.lang, n = he.isOSX_IOS ? "⌘" : "CTRL", l = he.isOSX_IOS ? "⇧" : "+SHIFT", a = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], u = e.rtl ? ["[", "]"] : ["]", "["], c = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", i.toolbar.bold + '<span class="se-shortcut">' + (a.indexOf("bold") > -1 ? "" : n + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", i.toolbar.underline + '<span class="se-shortcut">' + (a.indexOf("underline") > -1 ? "" : n + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", i.toolbar.italic + '<span class="se-shortcut">' + (a.indexOf("italic") > -1 ? "" : n + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", i.toolbar.strike + '<span class="se-shortcut">' + (a.indexOf("strike") > -1 ? "" : n + l + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", i.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", i.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", i.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", i.toolbar.indent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : n + '+<span class="se-shortcut-key">' + u[0] + "</span>") + "</span>", "indent", "", c[0]],
      outdent: ["", i.toolbar.outdent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : n + '+<span class="se-shortcut-key">' + u[1] + "</span>") + "</span>", "outdent", "", c[1]],
      fullScreen: ["se-code-view-enabled se-resizing-enabled", i.toolbar.fullScreen, "fullScreen", "", t.expansion],
      showBlocks: ["", i.toolbar.showBlocks, "showBlocks", "", t.show_blocks],
      codeView: ["se-code-view-enabled se-resizing-enabled", i.toolbar.codeView, "codeView", "", t.code_view],
      undo: ["", i.toolbar.undo + '<span class="se-shortcut">' + (a.indexOf("undo") > -1 ? "" : n + '+<span class="se-shortcut-key">Z</span>') + "</span>", "undo", "", t.undo],
      redo: ["", i.toolbar.redo + '<span class="se-shortcut">' + (a.indexOf("undo") > -1 ? "" : n + '+<span class="se-shortcut-key">Y</span> / ' + n + l + '+<span class="se-shortcut-key">Z</span>') + "</span>", "redo", "", t.redo],
      preview: ["se-resizing-enabled", i.toolbar.preview, "preview", "", t.preview],
      print: ["se-resizing-enabled", i.toolbar.print, "print", "", t.print],
      dir: ["", i.toolbar[e.rtl ? "dir_ltr" : "dir_rtl"], "dir", "", t[e.rtl ? "dir_ltr" : "dir_rtl"]],
      dir_ltr: ["", i.toolbar.dir_ltr, "dir_ltr", "", t.dir_ltr],
      dir_rtl: ["", i.toolbar.dir_rtl, "dir_rtl", "", t.dir_rtl],
      save: ["se-resizing-enabled", i.toolbar.save + '<span class="se-shortcut">' + (a.indexOf("save") > -1 ? "" : n + '+<span class="se-shortcut-key">S</span>') + "</span>", "save", "", t.save],
      /** plugins - command */
      blockquote: ["", i.toolbar.tag_blockquote, "blockquote", "command", t.blockquote],
      /** plugins - submenu */
      font: ["se-btn-select se-btn-tool-font", i.toolbar.font, "font", "submenu", '<span class="txt">' + i.toolbar.font + "</span>" + t.arrow_down],
      formatBlock: ["se-btn-select se-btn-tool-format", i.toolbar.formats, "formatBlock", "submenu", '<span class="txt">' + i.toolbar.formats + "</span>" + t.arrow_down],
      fontSize: ["se-btn-select se-btn-tool-size", i.toolbar.fontSize, "fontSize", "submenu", '<span class="txt">' + i.toolbar.fontSize + "</span>" + t.arrow_down],
      fontColor: ["", i.toolbar.fontColor, "fontColor", "submenu", t.font_color],
      hiliteColor: ["", i.toolbar.hiliteColor, "hiliteColor", "submenu", t.highlight_color],
      align: ["se-btn-align", i.toolbar.align, "align", "submenu", e.rtl ? t.align_right : t.align_left],
      list: ["", i.toolbar.list, "list", "submenu", t.list_number],
      horizontalRule: ["btn_line", i.toolbar.horizontalRule, "horizontalRule", "submenu", t.horizontal_rule],
      table: ["", i.toolbar.table, "table", "submenu", t.table],
      lineHeight: ["", i.toolbar.lineHeight, "lineHeight", "submenu", t.line_height],
      template: ["", i.toolbar.template, "template", "submenu", t.template],
      paragraphStyle: ["", i.toolbar.paragraphStyle, "paragraphStyle", "submenu", t.paragraph_style],
      textStyle: ["", i.toolbar.textStyle, "textStyle", "submenu", t.text_style],
      /** plugins - dialog */
      link: ["", i.toolbar.link, "link", "dialog", t.link],
      image: ["", i.toolbar.image, "image", "dialog", t.image],
      video: ["", i.toolbar.video, "video", "dialog", t.video],
      audio: ["", i.toolbar.audio, "audio", "dialog", t.audio],
      math: ["", i.toolbar.math, "math", "dialog", t.math],
      /** plugins - fileBrowser */
      imageGallery: ["", i.toolbar.imageGallery, "imageGallery", "fileBrowser", t.image_gallery]
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
  _createButton: function(e, t, i, n, l, a, u) {
    const c = he.createElement("LI"), o = he.createElement("BUTTON"), b = t || i;
    return o.setAttribute("type", "button"), o.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), o.setAttribute("data-command", i), o.setAttribute("data-display", n), o.setAttribute("aria-label", b.replace(/<span .+<\/span>/, "")), o.setAttribute("tabindex", "-1"), l || (l = '<span class="se-icon-text">!</span>'), /^default\./i.test(l) && (l = u[l.replace(/^default\./i, "")]), /^text\./i.test(l) && (l = l.replace(/^text\./i, ""), o.className += " se-btn-more-text"), l += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + b + "</span></span>", a && o.setAttribute("disabled", !0), o.innerHTML = l, c.appendChild(o), {
      li: c,
      button: o
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
  _createToolBar: function(e, t, i, n) {
    const l = e.createElement("DIV");
    l.className = "se-toolbar-separator-vertical";
    const a = e.createElement("DIV");
    a.className = "se-toolbar sun-editor-common";
    const u = e.createElement("DIV");
    u.className = "se-btn-tray", a.appendChild(u), t = JSON.parse(JSON.stringify(t));
    const c = n.icons, o = this._defaultButtons(n), b = {}, d = [];
    let v = null, w = null, k = null, L = null, R = "", s = !1;
    const r = he.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let m = 0, g, p, y, C, _; m < t.length; m++)
        if (g = !1, _ = "", C = t[m], k = this._createModuleGroup(), typeof C == "object") {
          for (let S = 0, D; S < C.length; S++) {
            if (w = C[S], D = !1, /^\%\d+/.test(w) && S === 0) {
              C[0] = w.replace(/[^\d]/g, ""), d.push(C), t.splice(m--, 1);
              continue e;
            }
            if (typeof w == "object")
              typeof w.add == "function" ? (R = w.name, v = o[R], i[R] = w) : (R = w.name, v = [w.buttonClass, w.title, w.name, w.dataDisplay, w.innerHTML, w._disabled]);
            else {
              if (/^\-/.test(w)) {
                _ = w.substr(1), k.div.className += " module-float-" + _;
                continue;
              }
              if (/^\#/.test(w)) {
                w.substr(1) === "fix" && (k.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(w)) {
                D = !0;
                const T = w.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + T[1].trim();
                const B = T[2].trim(), A = T[3].trim();
                v = ["se-btn-more", B, y, "MORE", A];
              } else
                v = o[w];
              if (R = w, !v) {
                const T = i[R];
                if (!T) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + R + "]");
                v = [T.buttonClass, T.title, T.name, T.display, T.innerHTML, T._disabled];
              }
            }
            L = this._createButton(v[0], v[1], v[2], v[3], v[4], v[5], c), (g ? p : k.ul).appendChild(L.li), i[R] && (b[R] = L.button), D && (g = !0, p = he.createElement("DIV"), p.className = "se-more-layer " + y, p.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (_ ? ' style="float: ' + _ + ';"' : "") + "></ul></div>", r.appendChild(p), p = p.firstElementChild.firstElementChild);
          }
          if (s) {
            const S = l.cloneNode(!1);
            u.appendChild(S);
          }
          u.appendChild(k.div), s = !0;
        } else if (/^\/$/.test(C)) {
          const S = e.createElement("DIV");
          S.className = "se-btn-module-enter", u.appendChild(S), s = !1;
        }
    switch (u.children.length) {
      case 0:
        u.style.display = "none";
        break;
      case 1:
        he.removeClass(u.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (n.rtl) {
          const m = l.cloneNode(!1);
          m.style.float = u.lastElementChild.style.float, u.appendChild(m);
        }
    }
    d.length > 0 && d.unshift(t), r.children.length > 0 && u.appendChild(r);
    const f = e.createElement("DIV");
    f.className = "se-menu-tray", a.appendChild(f);
    const h = e.createElement("DIV");
    return h.className = "se-toolbar-cover", a.appendChild(h), n.hideToolbar && (a.style.display = "none"), {
      element: a,
      plugins: i,
      pluginCallButtons: b,
      responsiveButtons: d,
      _menuTray: f,
      _buttonTray: u
    };
  }
}, Xi = function(e, t, i) {
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
    options: i,
    option: i
  };
};
function Er(e, t) {
  const i = e._w, n = e.util, l = e.options.historyStackDelayTime;
  let a = e.context.element, u = e.context.tool.undo, c = e.context.tool.redo, o = null, b = 0, d = [];
  function v() {
    const k = d[b];
    a.wysiwyg.innerHTML = k.contents, e.setRange(n.getNodeFromPath(k.s.path, a.wysiwyg), k.s.offset, n.getNodeFromPath(k.e.path, a.wysiwyg), k.e.offset), e.focus(), d.length <= 1 ? (u && u.setAttribute("disabled", !0), c && c.setAttribute("disabled", !0)) : b === 0 ? (u && u.setAttribute("disabled", !0), c && c.removeAttribute("disabled")) : b === d.length - 1 ? (u && u.removeAttribute("disabled"), c && c.setAttribute("disabled", !0)) : (u && u.removeAttribute("disabled"), c && c.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function w() {
    e._checkComponents();
    const k = a.wysiwyg.innerHTML;
    if (!k || d[b] && k === d[b].contents) return;
    b++;
    const L = e._variable._range;
    d.length > b && (d = d.slice(0, b), c && c.setAttribute("disabled", !0)), L ? d[b] = {
      contents: k,
      s: {
        path: n.getNodePath(L.startContainer, null, null),
        offset: L.startOffset
      },
      e: {
        path: n.getNodePath(L.endContainer, null, null),
        offset: L.endOffset
      }
    } : d[b] = {
      contents: k,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, b === 1 && u && u.removeAttribute("disabled"), e._setCharCount(), t();
  }
  return {
    /**
     * @description History stack
     */
    stack: d,
    /**
     * @description Saving the current status to the history object stack
     * If "delay" is true, it will be saved after (options.historyStackDelayTime || 400) miliseconds
     * If the function is called again with the "delay" argument true before it is saved, the delay time is renewal
     * You can specify the delay time by sending a number.
     * @param {Boolean|Number} delay If true, Add stack without delay time.
     */
    push: function(k) {
      i.setTimeout(e._resourcesStateChange.bind(e));
      const L = typeof k == "number" ? k > 0 ? k : 0 : k ? l : 0;
      if ((!L || o) && (i.clearTimeout(o), !L)) {
        w();
        return;
      }
      o = i.setTimeout(function() {
        i.clearTimeout(o), o = null, w();
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
      d.length - 1 > b && (b++, v());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(k) {
      b = k < 0 ? d.length - 1 : k, v();
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
    reset: function(k) {
      u && u.setAttribute("disabled", !0), c && c.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), d.splice(0), b = 0, d[b] = {
        contents: e.getContents(!0),
        s: {
          path: [0, 0],
          offset: 0
        },
        e: {
          path: [0, 0],
          offset: 0
        }
      }, k || t();
    },
    /**
     * @description Reset the disabled state of the buttons to fit the current stack.
     * @private
     */
    _resetCachingButton: function() {
      a = e.context.element, u = e.context.tool.undo, c = e.context.tool.redo, b === 0 ? (u && u.setAttribute("disabled", !0), c && b === d.length - 1 && c.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : b === d.length - 1 && c && c.setAttribute("disabled", !0);
    },
    /**
     * @description Remove all stacks and remove the timeout function.
     * @private
     */
    _destroy: function() {
      o && i.clearTimeout(o), d = null;
    }
  };
}
const hn = {
  name: "notice",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    const t = e.context;
    t.notice = {};
    let i = e.util.createElement("DIV"), n = e.util.createElement("SPAN"), l = e.util.createElement("BUTTON");
    i.className = "se-notice", l.className = "close", l.setAttribute("aria-label", "Close"), l.setAttribute("title", e.lang.dialogBox.close), l.innerHTML = e.icons.cancel, i.appendChild(n), i.appendChild(l), t.notice.modal = i, t.notice.message = n, l.addEventListener("click", this.onClick_cancel.bind(e)), t.element.editorArea.appendChild(i), i = null;
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
function Tr(e, t, i, n, l, a) {
  const u = e.element.originElement.ownerDocument || document, c = u.defaultView || window, o = he, b = l.icons, d = {
    _d: u,
    _w: c,
    _parser: new c.DOMParser(),
    _prevRtl: l.rtl,
    _editorHeight: 0,
    _editorHeightPadding: 0,
    _listCamel: l.__listCommonStyle,
    _listKebab: o.camelToKebabCase(l.__listCommonStyle),
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
    util: o,
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
    notice: hn,
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
    plugins: i || {},
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
    lang: n,
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
      div: new c.RegExp("\\s*[^-a-zA-Z](.+)\\s*:[^;]+(?!;)*", "ig"),
      span: new c.RegExp("\\s*[^-a-zA-Z](font-family|font-size|color|background-color)\\s*:[^;]+(?!;)*", "ig"),
      format: new c.RegExp("\\s*[^-a-zA-Z](text-align|margin-left|margin-right|width|height|line-height)\\s*:[^;]+(?!;)*", "ig"),
      fontSizeUnit: new c.RegExp("\\d+" + l.fontSizeUnit + "$", "i")
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
      minResizingSize: o.getNumber(e.element.wysiwygFrame.style.minHeight || "65", 0),
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
      for (let r = 0, f, h; r < s.length; r++)
        f = s[r], h = f.getAttribute("data-command"), this.allCommandButtons[h] = f;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const s = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let r = 0, f, h, m; r < s.length; r++)
          f = s[r], h = f.getAttribute("data-command"), m = this.allCommandButtons[h], m && (f.parentElement.replaceChild(m, f), this.context.tool[h] && (this.context.tool[h] = m));
      }
    },
    /**
     * @description If the plugin is not added, add the plugin and call the 'add' function.
     * If the plugin is added call callBack function.
     * @param {String} pluginName The name of the plugin to call
     * @param {function} callBackFunction Function to be executed immediately after module call
     * @param {Element|null} _target Plugin target button (This is not necessary if you have a button list when creating the editor)
     */
    callPlugin: function(s, r, f) {
      if (f = f || t[s], this.plugins[s])
        this.initPlugins[s] ? typeof this._targetPlugins[s] == "object" && f && this.initMenuTarget(s, f, this._targetPlugins[s]) : (this.plugins[s].add(this, f), this.initPlugins[s] = !0);
      else throw Error('[SUNEDITOR.core.callPlugin.fail] The called plugin does not exist or is in an invalid format. (pluginName:"' + s + '")');
      this.plugins[s].active && !this.commandMap[s] && f && (this.commandMap[s] = f, this.activePlugins.push(s)), typeof r == "function" && r();
    },
    /**
     * @description If the module is not added, add the module and call the 'add' function
     * @param {Array} moduleArray module object's Array [dialog, resizing]
     */
    addModule: function(s) {
      for (let r = 0, f = s.length, h; r < f; r++)
        h = s[r].name, this.plugins[h] || (this.plugins[h] = s[r]), this.initPlugins[h] || (this.initPlugins[h] = !0, typeof this.plugins[h].add == "function" && this.plugins[h].add(this));
    },
    /**
     * @description Gets the current editor-relative scroll offset.
     * @returns {Object} {top, left}
     */
    getGlobalScrollOffset: function() {
      let s = 0, r = 0, f = e.element.topArea;
      for (; f; )
        s += f.scrollTop, r += f.scrollLeft, f = f.parentElement;
      for (f = this._shadowRoot ? this._shadowRoot.host : null; f; )
        s += f.scrollTop, r += f.scrollLeft, f = f.parentElement;
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
    initMenuTarget: function(s, r, f) {
      r ? (e.element._menuTray.appendChild(f), this._targetPlugins[s] = !0, this._menuTray[r.getAttribute("data-command")] = f) : this._targetPlugins[s] = f;
    },
    /**
     * @description Enable submenu
     * @param {Element} element Submenu's button element to call
     */
    submenuOn: function(s) {
      this._bindedSubmenuOff && this._bindedSubmenuOff(), this._bindControllersOff && this.controllersOff();
      const r = this._submenuName = s.getAttribute("data-command"), f = this.submenu = this._menuTray[r];
      this.submenuActiveButton = s, this._setMenuPosition(s, f), this._bindedSubmenuOff = this.submenuOff.bind(this), this.addDocEvent("mousedown", this._bindedSubmenuOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
    },
    /**
     * @description Disable submenu
     */
    submenuOff: function() {
      this.removeDocEvent("mousedown", this._bindedSubmenuOff), this._bindedSubmenuOff = null, this.submenu && (this._submenuName = "", this.submenu.style.display = "none", this.submenu = null, o.removeClass(this.submenuActiveButton, "on"), this.submenuActiveButton = null, this._notHideToolbar = !1), this._antiBlur = !1;
    },
    /**
     * @description Disable more layer
     */
    moreLayerOff: function() {
      if (this._moreLayerActiveButton) {
        const s = e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command"));
        s.style.display = "none", o.removeClass(this._moreLayerActiveButton, "on"), this._moreLayerActiveButton = null;
      }
    },
    /**
     * @description Enable container
     * @param {Element} element Container's button element to call
     */
    containerOn: function(s) {
      this._bindedContainerOff && this._bindedContainerOff();
      const r = this._containerName = s.getAttribute("data-command"), f = this.container = this._menuTray[r];
      this.containerActiveButton = s, this._setMenuPosition(s, f), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
    },
    /**
     * @description Disable container
     */
    containerOff: function() {
      this.removeDocEvent("mousedown", this._bindedContainerOff), this._bindedContainerOff = null, this.container && (this._containerName = "", this.container.style.display = "none", this.container = null, o.removeClass(this.containerActiveButton, "on"), this.containerActiveButton = null, this._notHideToolbar = !1), this._antiBlur = !1;
    },
    /**
     * @description Set the menu position. (submenu, container)
     * @param {*} element Button element
     * @param {*} menu Menu element
     * @private
     */
    _setMenuPosition: function(s, r) {
      r.style.visibility = "hidden", r.style.display = "block", r.style.height = "", o.addClass(s, "on");
      const f = this.context.element.toolbar, h = f.offsetWidth, m = v._getEditorOffsets(e.element.toolbar), g = r.offsetWidth, p = s.parentElement.offsetLeft + 3;
      if (l.rtl) {
        const A = s.offsetWidth, $ = g > A ? g - A : 0, O = $ > 0 ? 0 : A - g;
        r.style.left = p - $ + O + "px", m.left > v._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const A = h <= g ? 0 : h - (p + g);
        A < 0 ? r.style.left = p + A + "px" : r.style.left = p + "px";
      }
      let y = 0, C = s;
      for (; C && C !== f; )
        y += C.offsetTop, C = C.offsetParent;
      const _ = y;
      this._isBalloon ? y += f.offsetTop + s.offsetHeight : y -= s.offsetHeight;
      const S = m.top, D = r.offsetHeight, T = this.getGlobalScrollOffset().top, B = c.innerHeight - (S - T + _ + s.parentElement.offsetHeight);
      if (B < D) {
        let A = -1 * (D - _ + 3);
        const $ = S - T + A, O = D + ($ < 0 ? $ : 0);
        O > B ? (r.style.height = O + "px", A = -1 * (O - _ + 3)) : (r.style.height = B + "px", A = _ + s.parentElement.offsetHeight), r.style.top = A + "px";
      } else
        r.style.top = _ + s.parentElement.offsetHeight + "px";
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
          if (!o.hasClass(r, "se-controller")) {
            this.currentControllerTarget = r, this.currentFileComponentInfo = this.getFileComponent(r);
            continue;
          }
          r.style && (r.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(r) === -1 && (r.addEventListener("mousedown", function(f) {
            f.preventDefault(), f.stopPropagation();
          }), this._shadowRootControllerEventTarget.push(r))), this.controllerArray.push(r);
        }
      this._bindControllersOff = this.controllersOff.bind(this), this.addDocEvent("mousedown", this._bindControllersOff, !1), this.addDocEvent("keydown", this._bindControllersOff, !1), this._antiBlur = !0, typeof w.showController == "function" && w.showController(this.currentControllerName, this.controllerArray, this);
    },
    /**
     * @description Hide controller at editor area (link button, image resize button..)
     * @param {KeyboardEvent|MouseEvent|null} e Event object when called from mousedown and keydown events registered in "core.controllersOn"
     */
    controllersOff: function(s) {
      this._lineBreaker.style.display = "none";
      const r = this.controllerArray.length;
      if (s && s.target && r > 0) {
        for (let f = 0; f < r; f++)
          if (typeof this.controllerArray[f].contains == "function" && this.controllerArray[f].contains(s.target)) return;
      }
      if (!(this._fileManager.pluginRegExp.test(this.currentControllerName) && s && s.type === "keydown" && s.keyCode !== 27) && (e.element.lineBreaker_t.style.display = e.element.lineBreaker_b.style.display = "none", this._variable._lineBreakComp = null, this.currentControllerName = "", this.currentControllerTarget = null, this.currentFileComponentInfo = null, this.effectNode = null, !!this._bindControllersOff)) {
        if (this.removeDocEvent("mousedown", this._bindControllersOff), this.removeDocEvent("keydown", this._bindControllersOff), this._bindControllersOff = null, r > 0) {
          for (let f = 0; f < r; f++)
            typeof this.controllerArray[f] == "function" ? this.controllerArray[f]() : this.controllerArray[f].style.display = "none";
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
    setControllerPosition: function(s, r, f, h) {
      l.rtl && (h.left *= -1);
      const m = o.getOffset(r, e.element.wysiwygFrame);
      s.style.visibility = "hidden", s.style.display = "block";
      const g = f === "top" ? -(s.offsetHeight + 2) : r.offsetHeight + 12;
      s.style.top = m.top + g + h.top + "px";
      const p = m.left - e.element.wysiwygFrame.scrollLeft + h.left, y = s.offsetWidth, C = r.offsetWidth, _ = o.hasClass(s.firstElementChild, "se-arrow") ? s.firstElementChild : null;
      if (l.rtl) {
        const S = y > C ? y - C : 0, D = S > 0 ? 0 : C - y;
        s.style.left = p - S + D + "px", S > 0 && _ && (_.style.left = (y - 14 < 10 + S ? y - 14 : 10 + S) + "px");
        const T = e.element.wysiwygFrame.offsetLeft - s.offsetLeft;
        T > 0 && (s.style.left = "0px", _ && (_.style.left = T + "px"));
      } else {
        s.style.left = p + "px";
        const S = e.element.wysiwygFrame.offsetWidth - (s.offsetLeft + y);
        S < 0 ? (s.style.left = s.offsetLeft + S + "px", _ && (_.style.left = 20 - S + "px")) : _ && (_.style.left = "20px");
      }
      s.style.visibility = "";
    },
    /**
     * @description javascript execCommand
     * @param {String} command javascript execCommand function property
     * @param {Boolean|undefined} showDefaultUI javascript execCommand function property
     * @param {String|undefined} value javascript execCommand function property
     */
    execCommand: function(s, r, f) {
      this._wd.execCommand(s, r, s === "formatBlock" ? "<" + f + ">" : f), this.history.push(!0);
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
      const s = o.getParentElement(this.getSelectionNode(), "figcaption");
      s ? s.focus() : e.element.wysiwyg.focus();
    },
    /**
     * @description Focus to wysiwyg area
     */
    focus: function() {
      if (e.element.wysiwygFrame.style.display !== "none") {
        if (l.iframe)
          this.nativeFocus();
        else
          try {
            const s = this.getRange();
            if (s.startContainer === s.endContainer && o.isWysiwygDiv(s.startContainer)) {
              const r = s.commonAncestorContainer.children[s.startOffset];
              if (!o.isFormatElement(r) && !o.isComponent(r)) {
                const f = o.createElement(l.defaultTag), h = o.createElement("BR");
                f.appendChild(h), e.element.wysiwyg.insertBefore(f, r), this.setRange(h, 0, h, 0);
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
      r ? this.selectComponent(r.target, r.pluginName) : s ? (s = o.getChildElement(s, function(f) {
        return f.childNodes.length === 0 || f.nodeType === 3;
      }, !0), s ? this.setRange(s, s.textContent.length, s, s.textContent.length) : this.nativeFocus()) : this.focus();
    },
    /**
     * @description Focusout to wysiwyg area (.blur())
     */
    blur: function() {
      l.iframe ? e.element.wysiwygFrame.blur() : e.element.wysiwyg.blur();
    },
    /**
     * @description Set current editor's range object and return.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @returns {Object} Range object.
     */
    setRange: function(s, r, f, h) {
      if (!s || !f) return;
      r > s.textContent.length && (r = s.textContent.length), h > f.textContent.length && (h = f.textContent.length), o.isFormatElement(s) && (s = s.childNodes[r] || s.childNodes[r - 1] || s, r = r > 0 ? s.nodeType === 1 ? 1 : s.textContent ? s.textContent.length : 0 : 0), o.isFormatElement(f) && (f = f.childNodes[h] || f.childNodes[h - 1] || f, h = h > 0 ? f.nodeType === 1 ? 1 : f.textContent ? f.textContent.length : 0 : 0);
      const m = this._wd.createRange();
      try {
        m.setStart(s, r), m.setEnd(f, h);
      } catch (p) {
        console.warn("[SUNEDITOR.core.focus.error] " + p), this.nativeFocus();
        return;
      }
      const g = this.getSelection();
      return g.removeAllRanges && g.removeAllRanges(), g.addRange(m), this._rangeInfo(m, this.getSelection()), l.iframe && this.__focus(), m;
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
        const f = r.anchorNode, h = r.focusNode, m = r.anchorOffset, g = r.focusOffset, p = o.compareElements(f, h), y = p.ancestor && (p.result === 0 ? m <= g : p.result > 1);
        return this.setRange(
          y ? f : h,
          y ? m : g,
          y ? h : f,
          y ? g : m
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
        const f = e.element.wysiwyg, h = o.createElement(l.defaultTag);
        h.innerHTML = "<br>", f.insertBefore(h, r && r !== f ? r.nextElementSibling : f.firstElementChild), this.setRange(h.firstElementChild, 0, h.firstElementChild, 1), s = this._variable._range;
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
        const s = o.getChildElement(e.element.wysiwyg.firstChild, function(r) {
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
      if (o.isInputElement(s))
        return this._variable._selectionNode = s, s;
      const r = this.getSelection();
      if (!r) return null;
      let f = null;
      r.rangeCount > 0 ? f = r.getRangeAt(0) : f = this._createDefaultRange(), this._rangeInfo(f, r);
    },
    /**
     * @description Set "range" and "selection" info.
     * @param {Object} range range object.
     * @param {Object} selection selection object.
     */
    _rangeInfo: function(s, r) {
      let f = null;
      this._variable._range = s, s.collapsed ? o.isWysiwygDiv(s.commonAncestorContainer) ? f = s.commonAncestorContainer.children[s.startOffset] || s.commonAncestorContainer : f = s.commonAncestorContainer : f = r.extentNode || r.anchorNode, this._variable._selectionNode = f;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const s = e.element.wysiwyg, r = this._wd.createRange();
      let f = s.firstElementChild, h = null;
      return f ? (h = f.firstChild, h || (h = o.createElement("BR"), f.appendChild(h))) : (f = o.createElement(l.defaultTag), h = o.createElement("BR"), f.appendChild(h), s.appendChild(f)), r.setStart(h, 0), r.setEnd(h, 0), r;
    },
    /**
     * @description Returns true if there is no valid "selection".
     * @param {Object} range core.getRange()
     * @returns {Object} range
     * @private
     */
    _selectionVoid: function(s) {
      const r = s.commonAncestorContainer;
      return o.isWysiwygDiv(s.startContainer) && o.isWysiwygDiv(s.endContainer) || /FIGURE/i.test(r.nodeName) || this._fileManager.regExp.test(r.nodeName) || o.isMediaComponent(r);
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
      let f = s.startContainer, h = s.startOffset, m = s.endContainer, g = s.endOffset, p, y, C;
      if (o.isFormatElement(f))
        for (f.childNodes[h] ? (f = f.childNodes[h] || f, h = 0) : (f = f.lastChild || f, h = f.textContent.length); f && f.nodeType === 1 && f.firstChild; )
          f = f.firstChild || f, h = 0;
      if (o.isFormatElement(m)) {
        for (m = m.childNodes[g] || m.lastChild || m; m && m.nodeType === 1 && m.lastChild; )
          m = m.lastChild;
        g = r ? 0 : m.textContent.length;
      }
      if (p = o.isWysiwygDiv(f) ? e.element.wysiwyg.firstChild : f, y = h, o.isBreak(p) || p.nodeType === 1 && p.childNodes.length > 0) {
        const _ = o.isBreak(p);
        if (!_) {
          for (; p && !o.isBreak(p) && p.nodeType === 1; )
            p = p.childNodes[y] || p.nextElementSibling || p.nextSibling, y = 0;
          let S = o.getFormatElement(p, null);
          S === o.getRangeFormatElement(S, null) && (S = o.createElement(o.getParentElement(p, o.isCell) ? "DIV" : l.defaultTag), p.parentNode.insertBefore(S, p), S.appendChild(p));
        }
        if (o.isBreak(p)) {
          const S = o.createTextNode(o.zeroWidthSpace);
          p.parentNode.insertBefore(S, p), p = S, _ && f === m && (m = p, g = 1);
        }
      }
      if (f = p, h = y, p = o.isWysiwygDiv(m) ? e.element.wysiwyg.lastChild : m, y = g, o.isBreak(p) || p.nodeType === 1 && p.childNodes.length > 0) {
        const _ = o.isBreak(p);
        if (!_) {
          for (; p && !o.isBreak(p) && p.nodeType === 1 && (C = p.childNodes, C.length !== 0); )
            p = C[y > 0 ? y - 1 : y] || !/FIGURE/i.test(C[0].nodeName) ? C[0] : p.previousElementSibling || p.previousSibling || f, y = y > 0 ? p.textContent.length : y;
          let S = o.getFormatElement(p, null);
          S === o.getRangeFormatElement(S, null) && (S = o.createElement(o.isCell(S) ? "DIV" : l.defaultTag), p.parentNode.insertBefore(S, p), S.appendChild(p));
        }
        if (o.isBreak(p)) {
          const S = o.createTextNode(o.zeroWidthSpace);
          p.parentNode.insertBefore(S, p), p = S, y = 1, _ && !p.previousSibling && o.removeItem(m);
        }
      }
      return m = p, g = y, this.setRange(f, h, m, g), !0;
    },
    /**
     * @description Returns a "formatElement"(util.isFormatElement) array from the currently selected range.
     * @param {Function|null} validation The validation function. (Replaces the default validation function-util.isFormatElement(current))
     * @returns {Array}
     */
    getSelectedElements: function(s) {
      if (!this._resetRangeToTextNode()) return [];
      let r = this.getRange();
      if (o.isWysiwygDiv(r.startContainer)) {
        const A = e.element.wysiwyg.children;
        if (A.length === 0) return [];
        this.setRange(A[0], 0, A[A.length - 1], A[A.length - 1].textContent.trim().length), r = this.getRange();
      }
      const f = r.startContainer, h = r.endContainer, m = r.commonAncestorContainer, g = o.getListChildren(m, function(A) {
        return s ? s(A) : o.isFormatElement(A);
      });
      if (!o.isWysiwygDiv(m) && !o.isRangeFormatElement(m) && g.unshift(o.getFormatElement(m, null)), f === h || g.length === 1) return g;
      let p = o.getFormatElement(f, null), y = o.getFormatElement(h, null), C = null, _ = null;
      const S = function(A) {
        return o.isTable(A) ? /^TABLE$/i.test(A.nodeName) : !0;
      };
      let D = o.getRangeFormatElement(p, S), T = o.getRangeFormatElement(y, S);
      o.isTable(D) && o.isListCell(D.parentNode) && (D = D.parentNode), o.isTable(T) && o.isListCell(T.parentNode) && (T = T.parentNode);
      const B = D === T;
      for (let A = 0, $ = g.length, O; A < $; A++) {
        if (O = g[A], p === O || !B && O === D) {
          C = A;
          continue;
        }
        if (y === O || !B && O === T) {
          _ = A;
          break;
        }
      }
      return C === null && (C = 0), _ === null && (_ = g.length - 1), g.slice(C, _ + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(s) {
      const r = this.getRange().commonAncestorContainer, f = o.getParentElement(r, o.isComponent), h = o.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(m) {
        const g = this.getParentElement(m, this.isComponent);
        return this.isFormatElement(m) && (!g || g === f) || this.isComponent(m) && !this.getFormatElement(m);
      }).bind(o));
      if (s) {
        for (let m = 0, g = h.length; m < g; m++)
          for (let p = m - 1; p >= 0; p--)
            if (h[p].contains(h[m])) {
              h.splice(m, 1), m--, g--;
              break;
            }
      }
      return h;
    },
    /**
     * @description Determine if this offset is the edge offset of container
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String|undefined} dir Select check point - Both edge, Front edge or End edge. ("start": Front edge, "end": End edge, undefined: Both edge)
     * @returns {Boolean}
     */
    isEdgePoint: function(s, r, f) {
      return s.nodeType === 1 && !s.textContent.length ? !0 : f !== "end" && r === 0 || (!f || f !== "start") && !s.nodeValue && r === 1 || (!f || f === "end") && !!s.nodeValue && r === s.nodeValue.length;
    },
    /**
     * @description Check if the container and offset values are the edges of the format tag
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String} dir Select check point - "start": Front edge, "end": End edge, undefined: Both edge.
     * @returns {Array|null}
     * @private
     */
    _isEdgeFormat: function(s, r, f) {
      if (!this.isEdgePoint(s, r, f)) return !1;
      const h = [];
      for (f = f === "start" ? "previousSibling" : "nextSibling"; s && !o.isFormatElement(s) && !o.isWysiwygDiv(s); )
        if (!s[f] || o.isBreak(s[f]) && !s[f][f])
          s.nodeType === 1 && h.push(s.cloneNode(!1)), s = s.parentNode;
        else
          return null;
      return h;
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
      const f = o.getFormatElement(this.getSelectionNode(), null);
      let h = null;
      if (!o.isFormatElement(s) && o.isFreeFormatElement(f || s.parentNode))
        h = o.createElement("BR");
      else {
        const m = r ? typeof r == "string" ? r : r.nodeName : o.isFormatElement(f) && !o.isRangeFormatElement(f) && !o.isFreeFormatElement(f) ? f.nodeName : l.defaultTag;
        h = o.createElement(m), h.innerHTML = "<br>", (r && typeof r != "string" || !r && o.isFormatElement(f)) && o.copyTagAttributes(h, r || f, ["id"]);
      }
      return o.isCell(s) ? s.insertBefore(h, s.nextElementSibling) : s.parentNode.insertBefore(h, s.nextElementSibling), h;
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
    insertComponent: function(s, r, f, h) {
      if (this.isReadOnly || f && !this.checkCharCount(s, null))
        return null;
      const m = this.removeNode();
      this.getRange_addLine(this.getRange(), m.container);
      let g = null, p = this.getSelectionNode(), y = o.getFormatElement(p, null);
      if (o.isListCell(y))
        this.insertNode(s, p === y ? null : m.container.nextSibling, !1), s.nextSibling || s.parentNode.appendChild(o.createElement("BR"));
      else {
        if (this.getRange().collapsed && (m.container.nodeType === 3 || o.isBreak(m.container))) {
          const C = o.getParentElement(m.container, (function(_) {
            return this.isRangeFormatElement(_);
          }).bind(o));
          g = o.splitElement(m.container, m.offset, C ? o.getElementDepth(C) + 1 : 0), g && (y = g.previousSibling);
        }
        this.insertNode(s, o.isRangeFormatElement(y) ? null : y, !1), y && o.onlyZeroWidthSpace(y) && o.removeItem(y);
      }
      if (!h) {
        this.setRange(s, 0, s, 0);
        const C = this.getFileComponent(s);
        C ? this.selectComponent(C.target, C.pluginName) : g && (g = o.getEdgeChildNodes(g, null).sc || g, this.setRange(g, 0, g, 0));
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
      let r, f;
      return (/^FIGURE$/i.test(s.nodeName) || /se-component/.test(s.className)) && (r = s.querySelector(this._fileManager.queryString)), !r && s.nodeName && this._fileManager.regExp.test(s.nodeName) && (r = s), r && (f = this._fileManager.pluginMap[r.nodeName.toLowerCase()], f) ? {
        target: r,
        component: o.getParentElement(r, o.isComponent),
        pluginName: f
      } : null;
    },
    /**
     * @description The component(image, video) is selected and the resizing module is called.
     * @param {Element} element Element tag (img, iframe, video)
     * @param {String} pluginName Plugin name (image, video)
     */
    selectComponent: function(s, r) {
      if (o.isUneditableComponent(o.getParentElement(s, o.isComponent)) || o.isUneditableComponent(s)) return !1;
      this.hasFocus || this.focus();
      const f = this.plugins[r];
      f && c.setTimeout((function() {
        typeof f.select == "function" && this.callPlugin(r, f.select.bind(this, s), null), this._setComponentLineBreaker(s);
      }).bind(this));
    },
    /**
     * @description Set line breaker of component
     * @param {Element} element Element tag (img, iframe, video)
     * @private
     */
    _setComponentLineBreaker: function(s) {
      this._lineBreaker.style.display = "none";
      const r = o.getParentElement(s, o.isComponent), f = e.element.lineBreaker_t.style, h = e.element.lineBreaker_b.style, m = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : s, g = o.isListCell(r.parentNode);
      let p, y, C;
      (g ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, p = o.getOffset(s, e.element.wysiwygFrame).top + y, C = m.offsetWidth / 2 / 2, f.top = p - y - 12 + "px", f.left = o.getOffset(m).left + C + "px", f.display = "block") : f.display = "none", (g ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) ? (p || (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, p = o.getOffset(s, e.element.wysiwygFrame).top + y, C = m.offsetWidth / 2 / 2), h.top = p + m.offsetHeight - y - 12 + "px", h.left = o.getOffset(m).left + m.offsetWidth - C - 24 + "px", h.display = "block") : h.display = "none";
    },
    _checkDuplicateNode: function(s, r) {
      (function f(h) {
        d._dupleCheck(h, r);
        const m = h.childNodes;
        for (let g = 0, p = m.length; g < p; g++)
          f(m[g]);
      })(s);
    },
    _dupleCheck: function(s, r) {
      if (!o.isTextStyleElement(s)) return;
      const f = (s.style.cssText.match(/[^;]+;/g) || []).map(function(g) {
        return g.trim();
      }), h = s.nodeName;
      if (/^span$/i.test(h) && f.length === 0) return s;
      let m = !1;
      return function g(p) {
        if (!(o.isWysiwygDiv(p) || !o.isTextStyleElement(p))) {
          if (p.nodeName === h) {
            m = !0;
            const y = p.style.cssText.match(/[^;]+;/g) || [];
            for (let C = 0, _ = y.length, S; C < _; C++)
              (S = f.indexOf(y[C].trim())) > -1 && f.splice(S, 1);
            for (let C = 0, _ = p.classList.length; C < _; C++)
              s.classList.remove(p.classList[C]);
          }
          g(p.parentElement);
        }
      }(r), m && ((s.style.cssText = f.join(" ")) || (s.setAttribute("style", ""), s.removeAttribute("style")), s.attributes.length || s.setAttribute("data-se-duple", "true")), s;
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
    insertNode: function(s, r, f) {
      if (this.isReadOnly || f && !this.checkCharCount(s, null))
        return null;
      let h = null, m = this.getRange(), g = o.isListCell(m.commonAncestorContainer) ? m.commonAncestorContainer : o.getFormatElement(this.getSelectionNode(), null), p = o.isListCell(g) && (o.isListCell(s) || o.isList(s)), y, C, _, S = null;
      const D = o.isFreeFormatElement(g), T = !D && (o.isFormatElement(s) || o.isRangeFormatElement(s)) || o.isComponent(s);
      if (p && (_ = r || o.isList(s) ? g.lastChild : g.nextElementSibling, S = o.isList(s) ? g : (_ || g).parentNode), !r && (T || o.isComponent(s) || o.isMedia(s))) {
        const W = this.isEdgePoint(m.endContainer, m.endOffset, "end"), I = this.removeNode(), M = I.container, z = M === I.prevContainer && m.collapsed ? null : I.prevContainer;
        if (p && z)
          if (S = z.nodeType === 3 ? z.parentNode : z, S.contains(M)) {
            let U = !0;
            for (_ = M; _.parentNode && _.parentNode !== S; )
              _ = _.parentNode, U = !1;
            U && M === z && (_ = _.nextSibling);
          } else
            _ = null;
        else if (p && o.isListCell(M) && !g.parentElement)
          g = o.createElement("LI"), S.appendChild(g), M.appendChild(S), _ = null;
        else if (M.nodeType === 3 || o.isBreak(M) || p) {
          const U = o.getParentElement(M, (function(x) {
            return this.isRangeFormatElement(x) || this.isListCell(x);
          }).bind(o));
          if (r = o.splitElement(M, I.offset, U ? o.getElementDepth(U) + 1 : 0), !r)
            _ = r = g;
          else if (p) {
            if (g.contains(M)) {
              const x = o.isList(g.lastElementChild);
              let H = null;
              W || (H = g.cloneNode(!1), H.appendChild(r.textContent.trim() ? r : o.createTextNode(o.zeroWidthSpace))), x && (H || (H = g.cloneNode(!1), H.appendChild(o.createTextNode(o.zeroWidthSpace))), H.appendChild(g.lastElementChild)), H && (g.parentNode.insertBefore(H, g.nextElementSibling), _ = r = H);
            }
          } else
            r = r.previousSibling;
        }
      }
      m = !r && !T ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const B = m.commonAncestorContainer, A = m.startOffset, $ = m.endOffset, O = m.startContainer === B && o.isFormatElement(B), P = O && (B.childNodes[A] || B.childNodes[0]) || m.startContainer, V = O && (B.childNodes[$] || B.childNodes[B.childNodes.length - 1]) || m.endContainer;
      if (!p)
        if (r)
          y = r.parentNode, r = r.nextSibling, C = !0;
        else if (y = P, P.nodeType === 3 && (y = P.parentNode), m.collapsed)
          if (B.nodeType === 3)
            B.textContent.length > $ ? r = B.splitText($) : r = B.nextSibling;
          else if (o.isBreak(y))
            r = y, y = y.parentNode;
          else {
            let W = y.childNodes[A];
            const I = W && W.nodeType === 3 && o.onlyZeroWidthSpace(W) && o.isBreak(W.nextSibling) ? W.nextSibling : W;
            I ? !I.nextSibling && o.isBreak(I) ? (y.removeChild(I), r = null) : r = o.isBreak(I) && !o.isBreak(s) ? I : I.nextSibling : r = null;
          }
        else if (P === V) {
          this.isEdgePoint(V, $) ? r = V.nextSibling : r = V.splitText($);
          let I = P;
          this.isEdgePoint(P, A) || (I = P.splitText(A)), y.removeChild(I), y.childNodes.length === 0 && T && (y.innerHTML = "<br>");
        } else {
          const I = this.removeNode(), M = I.container, z = I.prevContainer;
          if (M && M.childNodes.length === 0 && T && (o.isFormatElement(M) ? M.innerHTML = "<br>" : o.isRangeFormatElement(M) && (M.innerHTML = "<" + l.defaultTag + "><br></" + l.defaultTag + ">")), o.isListCell(M) && s.nodeType === 3)
            y = M, r = null;
          else if (!T && z)
            if (y = z.nodeType === 3 ? z.parentNode : z, y.contains(M)) {
              let U = !0;
              for (r = M; r.parentNode && r.parentNode !== y; )
                r = r.parentNode, U = !1;
              U && M === z && (r = r.nextSibling);
            } else
              r = null;
          else o.isWysiwygDiv(M) && !o.isFormatElement(s) ? (y = M.appendChild(o.createElement(l.defaultTag)), r = null) : (r = T ? V : M === z ? M.nextSibling : M, y = !r || !r.parentNode ? B : r.parentNode);
          for (; r && !o.isFormatElement(r) && r.parentNode !== B; )
            r = r.parentNode;
        }
      try {
        if (!p) {
          if ((o.isWysiwygDiv(r) || y === e.element.wysiwyg.parentNode) && (y = e.element.wysiwyg, r = null), o.isFormatElement(s) || o.isRangeFormatElement(s) || !o.isListCell(y) && o.isComponent(s)) {
            const W = y;
            if (o.isList(r))
              y = r, r = null;
            else if (o.isListCell(r))
              y = r.previousElementSibling || r;
            else if (!C && !r) {
              const I = this.removeNode(), M = I.container.nodeType === 3 ? o.isListCell(o.getFormatElement(I.container, null)) ? I.container : o.getFormatElement(I.container, null) || I.container.parentNode : I.container, z = o.isWysiwygDiv(M) || o.isRangeFormatElement(M);
              y = z ? M : M.parentNode, r = z ? null : M.nextSibling;
            }
            W.childNodes.length === 0 && y !== W && o.removeItem(W);
          }
          if (T && !D && !o.isRangeFormatElement(y) && !o.isListCell(y) && !o.isWysiwygDiv(y) && (r = y.nextElementSibling, y = y.parentNode), o.isWysiwygDiv(y) && (s.nodeType === 3 || o.isBreak(s))) {
            const W = o.createElement(l.defaultTag);
            W.appendChild(s), h = s, s = W;
          }
        }
        if (p ? S.parentNode ? (y = S, r = _) : (y = e.element.wysiwyg, r = null) : r = y === r ? y.lastChild : r, o.isListCell(s) && !o.isList(y)) {
          if (o.isListCell(y))
            r = y.nextElementSibling, y = y.parentNode;
          else {
            const W = o.createElement("ol");
            y.insertBefore(W, r), y = W, r = null;
          }
          p = !0;
        }
        if (this._checkDuplicateNode(s, y), y.insertBefore(s, r), p)
          if (o.onlyZeroWidthSpace(g.textContent.trim()))
            o.removeItem(g), s = s.lastChild;
          else {
            const W = o.getArrayItem(g.children, o.isList);
            W && (s !== W ? (s.appendChild(W), s = W.previousSibling) : (y.appendChild(s), s = y), o.onlyZeroWidthSpace(g.textContent.trim()) && o.removeItem(g));
          }
      } catch (W) {
        y.appendChild(s), console.warn("[SUNEDITOR.insertNode.warn] " + W);
      } finally {
        h && (s = h);
        const W = y.querySelectorAll("[data-se-duple]");
        if (W.length > 0)
          for (let I = 0, M = W.length, z, U, x, H; I < M; I++) {
            for (z = W[I], x = z.childNodes, H = z.parentNode; x[0]; )
              U = x[0], H.insertBefore(U, z);
            z === s && (s = U), o.removeItem(z);
          }
        if ((o.isFormatElement(s) || o.isComponent(s)) && P === V) {
          const I = o.getFormatElement(B, null);
          I && I.nodeType === 1 && o.isEmptyLine(I) && o.removeItem(I);
        }
        if (D && (o.isFormatElement(s) || o.isRangeFormatElement(s)) && (s = this._setIntoFreeFormat(s)), !o.isComponent(s)) {
          let I = 1;
          if (s.nodeType === 3)
            I = s.textContent.length, this.setRange(s, I, s, I);
          else if (!o.isBreak(s) && !o.isListCell(s) && o.isFormatElement(y)) {
            let M = null;
            (!s.previousSibling || o.isBreak(s.previousSibling)) && (M = o.createTextNode(o.zeroWidthSpace), s.parentNode.insertBefore(M, s)), (!s.nextSibling || o.isBreak(s.nextSibling)) && (M = o.createTextNode(o.zeroWidthSpace), s.parentNode.insertBefore(M, s.nextSibling)), o._isIgnoreNodeChange(s) && (s = s.nextSibling, I = 0);
          }
          this.setRange(s, I, s, I);
        }
        return s;
      }
    },
    _setIntoFreeFormat: function(s) {
      const r = s.parentNode;
      let f, h;
      for (; o.isFormatElement(s) || o.isRangeFormatElement(s); ) {
        for (f = s.childNodes, h = null; f[0]; ) {
          if (h = f[0], o.isFormatElement(h) || o.isRangeFormatElement(h)) {
            if (this._setIntoFreeFormat(h), !s.parentNode) break;
            f = s.childNodes;
            continue;
          }
          r.insertBefore(h, s);
        }
        s.childNodes.length === 0 && o.removeItem(s), s = o.createElement("BR"), r.insertBefore(s, h.nextSibling);
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
        const I = o.getParentElement(s.startContainer, o.isMediaComponent);
        if (I) {
          const M = o.createElement("BR"), z = o.createElement(l.defaultTag);
          return z.appendChild(M), o.changeElement(I, z), d.setRange(z, 0, z, 0), this.history.push(!0), {
            container: z,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = s.startOffset === 0, f = d.isEdgePoint(s.endContainer, s.endOffset, "end");
      let h = null, m = null, g = null;
      r && (m = o.getFormatElement(s.startContainer), m && (h = m.previousElementSibling, m = h)), f && (g = o.getFormatElement(s.endContainer), g = g && g.nextElementSibling);
      let p, y = 0, C = s.startContainer, _ = s.endContainer, S = s.startOffset, D = s.endOffset;
      const T = s.commonAncestorContainer.nodeType === 3 && s.commonAncestorContainer.parentNode === C.parentNode ? C.parentNode : s.commonAncestorContainer;
      if (T === C && T === _ && (C = T.children[S], _ = T.children[D], S = D = 0), !C || !_) return {
        container: T,
        offset: 0
      };
      if (C === _ && s.collapsed && C.textContent && o.onlyZeroWidthSpace(C.textContent.substr(S)))
        return {
          container: C,
          offset: S,
          prevContainer: C && C.parentNode ? C : null
        };
      let B = null, A = null;
      const $ = o.getListChildNodes(T, null);
      let O = o.getArrayIndex($, C), P = o.getArrayIndex($, _);
      if ($.length > 0 && O > -1 && P > -1) {
        for (let I = O + 1, M = C; I >= 0; I--)
          $[I] === M.parentNode && $[I].firstChild === M && S === 0 && (O = I, M = M.parentNode);
        for (let I = P - 1, M = _; I > O; I--)
          $[I] === M.parentNode && $[I].nodeType === 1 && ($.splice(I, 1), M = M.parentNode, --P);
      } else {
        if ($.length === 0) {
          if (o.isFormatElement(T) || o.isRangeFormatElement(T) || o.isWysiwygDiv(T) || o.isBreak(T) || o.isMedia(T))
            return {
              container: T,
              offset: 0
            };
          if (T.nodeType === 3)
            return {
              container: T,
              offset: D
            };
          $.push(T), C = _ = T;
        } else if (C = _ = $[0], o.isBreak(C) || o.onlyZeroWidthSpace(C))
          return {
            container: o.isMedia(T) ? T : C,
            offset: 0
          };
        O = P = 0;
      }
      for (let I = O; I <= P; I++) {
        const M = $[I];
        if (M.length === 0 || M.nodeType === 3 && M.data === void 0) {
          this._nodeRemoveListItem(M);
          continue;
        }
        if (M === C) {
          if (C.nodeType === 1) {
            if (o.isComponent(C)) continue;
            B = o.createTextNode(C.textContent);
          } else
            M === _ ? (B = o.createTextNode(C.substringData(0, S) + _.substringData(D, _.length - D)), y = S) : B = o.createTextNode(C.substringData(0, S));
          if (B.length > 0 ? C.data = B.data : this._nodeRemoveListItem(C), M === _) break;
          continue;
        }
        if (M === _) {
          if (_.nodeType === 1) {
            if (o.isComponent(_)) continue;
            A = o.createTextNode(_.textContent);
          } else
            A = o.createTextNode(_.substringData(D, _.length - D));
          A.length > 0 ? _.data = A.data : this._nodeRemoveListItem(_);
          continue;
        }
        this._nodeRemoveListItem(M);
      }
      const V = o.getParentElement(_, "ul"), W = o.getParentElement(C, "li");
      if (V && W && W.contains(V) ? (p = V.previousSibling, y = p.textContent.length) : (p = _ && _.parentNode ? _ : C && C.parentNode ? C : s.endContainer || s.startContainer, y = !r && !f ? y : f ? p.textContent.length : 0), !o.isWysiwygDiv(p) && p.childNodes.length === 0) {
        const I = o.removeItemAllParents(p, null, null);
        I && (p = I.sc || I.ec || e.element.wysiwyg);
      }
      return !o.getFormatElement(p) && !(C && C.parentNode) && (g ? (p = g, y = 0) : m && (p = m, y = 1)), this.setRange(p, y, p, y), this.history.push(!0), {
        container: p,
        offset: y,
        prevContainer: h
      };
    },
    _nodeRemoveListItem: function(s) {
      const r = o.getFormatElement(s, null);
      o.removeItem(s), o.isListCell(r) && (o.removeItemAllParents(r, null, null), r && o.isList(r.firstChild) && r.insertBefore(o.createTextNode(o.zeroWidthSpace), r.firstChild));
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
        for (let D = 0, T = r.length, B, A, $, O, P, V; D < T; D++)
          if (B = r[D], !!o.isListCell(B) && (A = B.lastElementChild, A && o.isListCell(B.nextElementSibling) && r.indexOf(B.nextElementSibling) > -1 && (O = A.lastElementChild, r.indexOf(O) > -1))) {
            let W = null;
            for (; W = O.lastElementChild; )
              if (o.isList(W))
                if (r.indexOf(W.lastElementChild) > -1)
                  O = W.lastElementChild;
                else
                  continue e;
            $ = A.firstElementChild, P = r.indexOf($), V = r.indexOf(O), r.splice(P, V - P + 1), T = r.length;
            continue;
          }
      let f = r[r.length - 1], h, m, g;
      o.isRangeFormatElement(f) || o.isFormatElement(f) ? h = f : h = o.getRangeFormatElement(f, null) || o.getFormatElement(f, null), o.isCell(h) ? (m = null, g = h) : (m = h.nextSibling, g = h.parentNode);
      let p = o.getElementDepth(h), y = null;
      const C = [], _ = function(D, T, B) {
        let A = null;
        if (D !== T && !o.isTable(T)) {
          if (T && o.getElementDepth(D) === o.getElementDepth(T)) return B;
          A = o.removeItemAllParents(T, null, D);
        }
        return A ? A.ec : B;
      };
      for (let D = 0, T = r.length, B, A, $, O, P, V, W; D < T; D++)
        if (B = r[D], A = B.parentNode, !(!A || s.contains(A)))
          if ($ = o.getElementDepth(B), o.isList(A)) {
            if (y === null && (V ? (y = V, W = !0, V = null) : y = A.cloneNode(!1)), C.push(B), P = r[D + 1], D === T - 1 || P && P.parentNode !== A) {
              P && B.contains(P.parentNode) && (V = P.parentNode.cloneNode(!1));
              let I = A.parentNode, M;
              for (; o.isList(I); )
                M = o.createElement(I.nodeName), M.appendChild(y), y = M, I = I.parentNode;
              const z = this.detachRangeFormatElement(A, C, null, !0, !0);
              p >= $ ? (p = $, g = z.cc, m = _(g, A, z.ec), m && (g = m.parentNode)) : g === z.cc && (m = z.ec), g !== z.cc && (O = _(g, z.cc, O), O !== void 0 ? m = O : m = z.cc);
              for (let U = 0, x = z.removeArray.length; U < x; U++)
                y.appendChild(z.removeArray[U]);
              W || s.appendChild(y), V && z.removeArray[z.removeArray.length - 1].appendChild(V), y = null, W = !1;
            }
          } else
            p >= $ && (p = $, g = A, m = B.nextSibling), s.appendChild(B), g !== A && (O = _(g, A), O !== void 0 && (m = O));
      if (this.effectNode = null, o.mergeSameTags(s, null, !1), o.mergeNestedTags(s, (function(D) {
        return this.isList(D);
      }).bind(o)), m && o.getElementDepth(m) > 0 && (o.isList(m.parentNode) || o.isList(m.parentNode.parentNode))) {
        const D = o.getParentElement(m, (function(B) {
          return this.isRangeFormatElement(B) && !this.isList(B);
        }).bind(o)), T = o.splitElement(m, null, D ? o.getElementDepth(D) + 1 : 0);
        T.parentNode.insertBefore(s, T);
      } else
        g.insertBefore(s, m), _(s, m);
      const S = o.getEdgeChildNodes(s.firstElementChild, s.lastElementChild);
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
    detachRangeFormatElement: function(s, r, f, h, m) {
      const g = this.getRange();
      let p = g.startOffset, y = g.endOffset, C = o.getListChildNodes(s, function(z) {
        return z.parentNode === s;
      }), _ = s.parentNode, S = null, D = null, T = s.cloneNode(!1);
      const B = [], A = o.isList(f);
      let $ = !1, O = !1, P = !1;
      function V(z, U, x, H) {
        if (o.onlyZeroWidthSpace(U) && (U.innerHTML = o.zeroWidthSpace, p = y = 1), U.nodeType === 3)
          return z.insertBefore(U, x), U;
        const K = (P ? U : H).childNodes;
        let q = U.cloneNode(!1), ie = null, J = null;
        for (; K[0]; )
          J = K[0], o._notTextNode(J) && !o.isBreak(J) && !o.isListCell(q) ? (q.childNodes.length > 0 && (ie || (ie = q), z.insertBefore(q, x), q = U.cloneNode(!1)), z.insertBefore(J, x), ie || (ie = J)) : q.appendChild(J);
        if (q.childNodes.length > 0) {
          if (o.isListCell(z) && o.isListCell(q) && o.isList(x))
            if (A) {
              for (ie = x; x; )
                q.appendChild(x), x = x.nextSibling;
              z.parentNode.insertBefore(q, z.nextElementSibling);
            } else {
              const Q = H.nextElementSibling, ne = o.detachNestedList(H, !1);
              if (s !== ne || Q !== H.nextElementSibling) {
                const me = q.childNodes;
                for (; me[0]; )
                  H.appendChild(me[0]);
                s = ne, O = !0;
              }
            }
          else
            z.insertBefore(q, x);
          ie || (ie = q);
        }
        return ie;
      }
      for (let z = 0, U = C.length, x, H, K; z < U; z++)
        if (x = C[z], !(x.nodeType === 3 && o.isList(T)))
          if (P = !1, h && z === 0 && (!r || r.length === U || r[0] === x ? S = s.previousSibling : S = T), r && (H = r.indexOf(x)), r && H === -1)
            T || (T = s.cloneNode(!1)), T.appendChild(x);
          else {
            if (r && (K = r[H + 1]), T && T.children.length > 0 && (_.insertBefore(T, s), T = null), !A && o.isListCell(x))
              if (K && o.getElementDepth(x) !== o.getElementDepth(K) && (o.isListCell(_) || o.getArrayItem(x.children, o.isList, !1))) {
                const q = x.nextElementSibling, ie = o.detachNestedList(x, !1);
                (s !== ie || q !== x.nextElementSibling) && (s = ie, O = !0);
              } else {
                const q = x;
                x = o.createElement(h ? q.nodeName : o.isList(s.parentNode) || o.isListCell(s.parentNode) ? "LI" : o.isCell(s.parentNode) ? "DIV" : l.defaultTag);
                const ie = o.isListCell(x), J = q.childNodes;
                for (; J[0] && !(o.isList(J[0]) && !ie); )
                  x.appendChild(J[0]);
                o.copyFormatAttributes(x, q), P = !0;
              }
            else
              x = x.cloneNode(!1);
            if (!O && (h ? (B.push(x), o.removeItem(C[z])) : (f ? ($ || (_.insertBefore(f, s), $ = !0), x = V(f, x, null, C[z])) : x = V(_, x, s, C[z]), O || (r ? (D = x, S || (S = x)) : S || (S = D = x))), O)) {
              O = P = !1, C = o.getListChildNodes(s, function(q) {
                return q.parentNode === s;
              }), T = s.cloneNode(!1), _ = s.parentNode, z = -1, U = C.length;
              continue;
            }
          }
      const W = s.parentNode;
      let I = s.nextSibling;
      T && T.children.length > 0 && W.insertBefore(T, I), f ? S = f.previousSibling : S || (S = s.previousSibling), I = s.nextSibling !== T ? s.nextSibling : T ? T.nextSibling : null, s.children.length === 0 || s.textContent.length === 0 ? o.removeItem(s) : o.removeEmptyNode(s, null, !1);
      let M = null;
      if (h)
        M = {
          cc: W,
          sc: S,
          so: p,
          ec: I,
          eo: y,
          removeArray: B
        };
      else {
        S || (S = D), D || (D = S);
        const z = o.getEdgeChildNodes(S, D.parentNode ? S : D);
        M = {
          cc: (z.sc || z.ec).parentNode,
          sc: z.sc,
          so: p,
          ec: z.ec,
          eo: y,
          removeArray: null
        };
      }
      if (this.effectNode = null, m) return M;
      !h && M && (r ? this.setRange(M.sc, p, M.ec, y) : this.setRange(M.sc, 0, M.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(s, r) {
      let f = {}, h = !1, m = !1, g = null, p = null;
      const y = (function(C) {
        return !this.isComponent(C);
      }).bind(o);
      for (let C = 0, _ = s.length, S, D, T, B; C < _; C++) {
        if (T = C === _ - 1, D = o.getRangeFormatElement(s[C], y), B = o.isList(D), !S && B)
          S = D, f = { r: S, f: [o.getParentElement(s[C], "LI")] }, C === 0 && (h = !0);
        else if (S && B)
          if (S !== D) {
            const A = this.detachRangeFormatElement(f.f[0].parentNode, f.f, null, r, !0);
            D = s[C].parentNode, h && (g = A.sc, h = !1), T && (p = A.ec), B ? (S = D, f = { r: S, f: [o.getParentElement(s[C], "LI")] }, T && (m = !0)) : S = null;
          } else
            f.f.push(o.getParentElement(s[C], "LI")), T && (m = !0);
        if (T && o.isList(S)) {
          const A = this.detachRangeFormatElement(f.f[0].parentNode, f.f, null, r, !0);
          (m || _ === 1) && (p = A.ec), h && (g = A.sc || p);
        }
      }
      return {
        sc: g,
        ec: p
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
    nodeChange: function(s, r, f, h) {
      this._resetRangeToTextNode();
      let m = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, f = f && f.length > 0 ? f : !1;
      const g = !s, p = g && !f && !r;
      let y = m.startContainer, C = m.startOffset, _ = m.endContainer, S = m.endOffset;
      if (p && m.collapsed && o.isFormatElement(y.parentNode) || y === _ && y.nodeType === 1 && o.isNonEditable(y)) {
        const J = y.parentNode;
        if (!o.isListCell(J) || !o.getValues(J.style).some((function(Q) {
          return this._listKebab.indexOf(Q) > -1;
        }).bind(this))) return;
      }
      if (m.collapsed && !p && y.nodeType === 1 && !o.isBreak(y) && !o.isComponent(y)) {
        let J = null;
        const Q = y.childNodes[C];
        Q && (Q.nextSibling ? J = o.isBreak(Q) ? Q : Q.nextSibling : J = null);
        const ne = o.createTextNode(o.zeroWidthSpace);
        y.insertBefore(ne, J), this.setRange(ne, 1, ne, 1), m = this.getRange(), y = m.startContainer, C = m.startOffset, _ = m.endContainer, S = m.endOffset;
      }
      o.isFormatElement(y) && (y = y.childNodes[C] || y.firstChild, C = 0), o.isFormatElement(_) && (_ = _.childNodes[S] || _.lastChild, S = _.textContent.length), g && (s = o.createElement("DIV"));
      const D = c.RegExp, T = s.nodeName;
      if (!p && y === _ && !f && s) {
        let J = y, Q = 0;
        const ne = [], me = s.style;
        for (let ce = 0, ye = me.length; ce < ye; ce++)
          ne.push(me[ce]);
        const ve = s.classList;
        for (let ce = 0, ye = ve.length; ce < ye; ce++)
          ne.push("." + ve[ce]);
        if (ne.length > 0) {
          for (; !o.isFormatElement(J) && !o.isWysiwygDiv(J); ) {
            for (let ce = 0; ce < ne.length; ce++)
              if (J.nodeType === 1) {
                const ye = ne[ce], Ae = /^\./.test(ye) ? new D("\\s*" + ye.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, $e = g ? !!J.style[ye] : !!J.style[ye] && !!s.style[ye] && J.style[ye] === s.style[ye], Ce = Ae === !1 ? !1 : g ? !!J.className.match(Ae) : !!J.className.match(Ae) && !!s.className.match(Ae);
                ($e || Ce) && Q++;
              }
            J = J.parentNode;
          }
          if (Q >= ne.length) return;
        }
      }
      let B = {}, A = {}, $, O = "", P = "", V = "";
      if (r) {
        for (let J = 0, Q = r.length, ne; J < Q; J++)
          ne = r[J], /^\./.test(ne) ? P += (P ? "|" : "\\s*(?:") + ne.replace(/^\./, "") : O += (O ? "|" : "(?:;|^|\\s)(?:") + ne;
        O && (O += ")\\s*:[^;]*\\s*(?:;|$)", O = new D(O, "ig")), P && (P += ")(?=\\s+|$)", P = new D(P, "ig"));
      }
      if (f) {
        V = "^(?:" + f[0];
        for (let J = 1; J < f.length; J++)
          V += "|" + f[J];
        V += ")$", V = new D(V, "i");
      }
      const W = c.Boolean, I = { v: !1 }, M = function(J) {
        const Q = J.cloneNode(!1);
        if (Q.nodeType === 3 || o.isBreak(Q)) return Q;
        if (p) return null;
        const ne = !V && g || V && V.test(Q.nodeName);
        if (ne && !h)
          return I.v = !0, null;
        const me = Q.style.cssText;
        let ve = "";
        O && me.length > 0 && (ve = me.replace(O, "").trim(), ve !== me && (I.v = !0));
        const ce = Q.className;
        let ye = "";
        return P && ce.length > 0 && (ye = ce.replace(P, "").trim(), ye !== ce && (I.v = !0)), g && (P || !ce) && (O || !me) && !ve && !ye && ne ? (I.v = !0, null) : ve || ye || Q.nodeName !== T || W(O) !== W(me) || W(P) !== W(ce) ? (O && me.length > 0 && (Q.style.cssText = ve), Q.style.cssText || Q.removeAttribute("style"), P && ce.length > 0 && (Q.className = ye.trim()), Q.className.trim() || Q.removeAttribute("class"), !Q.style.cssText && !Q.className && (Q.nodeName === T || ne) ? (I.v = !0, null) : Q) : (I.v = !0, null);
      }, z = this.getSelectedElements(null);
      m = this.getRange(), y = m.startContainer, C = m.startOffset, _ = m.endContainer, S = m.endOffset, o.getFormatElement(y, null) || (y = o.getChildElement(z[0], function(J) {
        return J.nodeType === 3;
      }, !1), C = 0), o.getFormatElement(_, null) || (_ = o.getChildElement(z[z.length - 1], function(J) {
        return J.nodeType === 3;
      }, !1), S = _.textContent.length);
      const U = o.getFormatElement(y, null) === o.getFormatElement(_, null), x = z.length - (U ? 0 : 1);
      $ = s.cloneNode(!1);
      const H = p || g && function(J) {
        for (let Q = 0, ne = J.length; Q < ne; Q++)
          if (o._isMaintainedNode(J[Q]) || o._isSizeNode(J[Q])) return !0;
        return !1;
      }(f), K = g || o._isSizeNode($), q = this._util_getMaintainedNode.bind(o, H, K), ie = this._util_isMaintainedNode.bind(o, H, K);
      if (U) {
        this._resetCommonListCell(z[0], r) && (m = this.setRange(y, C, _, S));
        const J = this._nodeChange_oneLine(z[0], $, M, y, C, _, S, p, g, m.collapsed, I, q, ie);
        B.container = J.startContainer, B.offset = J.startOffset, A.container = J.endContainer, A.offset = J.endOffset, B.container === A.container && o.onlyZeroWidthSpace(B.container) && (B.offset = A.offset = 1), this._setCommonListStyle(J.ancestor, null);
      } else {
        let J = !1;
        x > 0 && this._resetCommonListCell(z[x], r) && (J = !0), this._resetCommonListCell(z[0], r) && (J = !0), J && this.setRange(y, C, _, S), x > 0 && ($ = s.cloneNode(!1), A = this._nodeChange_endLine(z[x], $, M, _, S, p, g, I, q, ie));
        for (let Q = x - 1, ne; Q > 0; Q--)
          this._resetCommonListCell(z[Q], r), $ = s.cloneNode(!1), ne = this._nodeChange_middleLine(z[Q], $, M, p, g, I, A.container), ne.endContainer && ne.ancestor.contains(ne.endContainer) && (A.ancestor = null, A.container = ne.endContainer), this._setCommonListStyle(ne.ancestor, null);
        $ = s.cloneNode(!1), B = this._nodeChange_startLine(z[0], $, M, y, C, p, g, I, q, ie, A.container), B.endContainer && (A.ancestor = null, A.container = B.endContainer), x <= 0 ? A = B : A.container || (A.ancestor = null, A.container = B.container, A.offset = B.container.textContent.length), this._setCommonListStyle(B.ancestor, null), this._setCommonListStyle(A.ancestor || o.getFormatElement(A.container), null);
      }
      this.controllersOff(), this.setRange(B.container, B.offset, A.container, A.offset), this.history.push(!1);
    },
    /**
     * @description Reset common style of list cell
     * @param {Element} el List cell element. <li>
     * @param {Array|null} styleArray Style array
     * @private
     */
    _resetCommonListCell: function(s, r) {
      if (!o.isListCell(s)) return;
      r || (r = this._listKebab);
      const f = o.getArrayItem(s.childNodes, function(D) {
        return !o.isBreak(D);
      }, !0), h = s.style, m = [], g = [], p = o.getValues(h);
      for (let D = 0, T = this._listKebab.length; D < T; D++)
        p.indexOf(this._listKebab[D]) > -1 && r.indexOf(this._listKebab[D]) > -1 && (m.push(this._listCamel[D]), g.push(this._listKebab[D]));
      if (!m.length) return;
      const y = o.createElement("SPAN");
      for (let D = 0, T = m.length; D < T; D++)
        y.style[m[D]] = h[g[D]], h.removeProperty(g[D]);
      let C = y.cloneNode(!1), _ = null, S = !1;
      for (let D = 0, T = f.length, B, A; D < T; D++)
        B = f[D], !l._textTagsMap[B.nodeName.toLowerCase()] && (A = o.getValues(B.style), A.length === 0 || m.some(function($) {
          return A.indexOf($) === -1;
        }) && A.some(function($) {
        }) ? (_ = B.nextSibling, C.appendChild(B)) : C.childNodes.length > 0 && (s.insertBefore(C, _), C = y.cloneNode(!1), _ = null, S = !0));
      return C.childNodes.length > 0 && (s.insertBefore(C, _), S = !0), h.length || s.removeAttribute("style"), S;
    },
    /**
     * @description If certain styles are applied to all child nodes of the list cell, the style of the list cell is also changed. (bold, color, size)
     * @param {Element} el List cell element. <li>
     * @param {Element|null} child Variable for recursive call. ("null" on the first call)
     * @private
     */
    _setCommonListStyle: function(s, r) {
      if (!o.isListCell(s)) return;
      const f = o.getArrayItem((r || s).childNodes, function(C) {
        return !o.isBreak(C);
      }, !0);
      if (r = f[0], !r || f.length > 1 || r.nodeType !== 1) return;
      const h = r.style, m = s.style, g = r.nodeName.toLowerCase();
      let p = !1;
      l._textTagsMap[g] === l._defaultCommand.bold.toLowerCase() && (m.fontWeight = "bold"), l._textTagsMap[g] === l._defaultCommand.italic.toLowerCase() && (m.fontStyle = "italic");
      const y = o.getValues(h);
      if (y.length > 0)
        for (let C = 0, _ = this._listCamel.length; C < _; C++)
          y.indexOf(this._listKebab[C]) > -1 && (m[this._listCamel[C]] = h[this._listCamel[C]], h.removeProperty(this._listKebab[C]), p = !0);
      if (this._setCommonListStyle(s, r), !!p && !h.length) {
        const C = r.childNodes, _ = r.parentNode, S = r.nextSibling;
        for (; C.length > 0; )
          _.insertBefore(C[0], S);
        o.removeItem(r);
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
      const f = s.childNodes;
      for (; f[0]; )
        r.insertBefore(f[0], s);
      r.removeChild(s);
    },
    /**
     * @description Return the parent maintained tag. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_getMaintainedNode: function(s, r, f) {
      return !f || s ? null : this.getParentElement(f, this._isMaintainedNode.bind(this)) || (r ? null : this.getParentElement(f, this._isSizeNode.bind(this)));
    },
    /**
     * @description Check if element is a tag that should be persisted. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_isMaintainedNode: function(s, r, f) {
      if (!f || s || f.nodeType !== 1) return !1;
      const h = this._isMaintainedNode(f);
      return this.getParentElement(f, this._isMaintainedNode.bind(this)) ? h : h || (r ? !1 : this._isSizeNode(f));
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
    _nodeChange_oneLine: function(s, r, f, h, m, g, p, y, C, _, S, D, T) {
      let B = h.parentNode;
      for (; !B.nextSibling && !B.previousSibling && !o.isFormatElement(B.parentNode) && !o.isWysiwygDiv(B.parentNode) && B.nodeName !== r.nodeName; )
        B = B.parentNode;
      if (!C && B === g.parentNode && B.nodeName === r.nodeName && o.onlyZeroWidthSpace(h.textContent.slice(0, m)) && o.onlyZeroWidthSpace(g.textContent.slice(p))) {
        const Ce = B.childNodes;
        let Re = !0;
        for (let Le = 0, ut = Ce.length, Fe, Ge, He, _e; Le < ut; Le++) {
          if (Fe = Ce[Le], _e = !o.onlyZeroWidthSpace(Fe), Fe === h) {
            Ge = !0;
            continue;
          }
          if (Fe === g) {
            He = !0;
            continue;
          }
          if (!Ge && _e || Ge && He && _e) {
            Re = !1;
            break;
          }
        }
        if (Re)
          return o.copyTagAttributes(B, r), {
            ancestor: s,
            startContainer: h,
            startOffset: m,
            endContainer: g,
            endOffset: p
          };
      }
      S.v = !1;
      const A = s, $ = [r], O = s.cloneNode(!1), P = h === g;
      let V = h, W = m, I = g, M = p, z = !1, U = !1, x, H, K, q, ie;
      const J = c.RegExp;
      function Q(Ce) {
        const Re = new J("(?:;|^|\\s)(?:" + q + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let Le = "";
        return Re && Ce.style.cssText.length > 0 && (Le = Re.test(Ce.style.cssText)), !Le;
      }
      if (function Ce(Re, Le) {
        const ut = Re.childNodes;
        for (let Fe = 0, Ge = ut.length, He; Fe < Ge; Fe++) {
          let _e = ut[Fe];
          if (!_e) continue;
          let Rt = Le, dt;
          if (!z && _e === V) {
            let Pe = O;
            ie = D(_e);
            const ze = o.createTextNode(V.nodeType === 1 ? "" : V.substringData(0, W)), We = o.createTextNode(
              V.nodeType === 1 ? "" : V.substringData(
                W,
                P && M >= W ? M - W : V.data.length - W
              )
            );
            if (ie) {
              const Dt = D(Le);
              if (Dt && Dt.parentNode !== Pe) {
                let Qe = Dt, Mt = null;
                for (; Qe.parentNode !== Pe; ) {
                  for (Le = Mt = Qe.parentNode.cloneNode(!1); Qe.childNodes[0]; )
                    Mt.appendChild(Qe.childNodes[0]);
                  Qe.appendChild(Mt), Qe = Qe.parentNode;
                }
                Qe.parentNode.appendChild(Dt);
              }
              ie = ie.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(ze) || Le.appendChild(ze);
            const Oe = D(Le);
            for (Oe && (ie = Oe), ie && (Pe = ie), H = _e, x = [], q = ""; H !== Pe && H !== A && H !== null; )
              He = T(H) ? null : f(H), He && H.nodeType === 1 && Q(H) && (x.push(He), q += H.style.cssText.substr(0, H.style.cssText.indexOf(":")) + "|"), H = H.parentNode;
            const It = x.pop() || We;
            for (K = H = It; x.length > 0; )
              H = x.pop(), K.appendChild(H), K = H;
            if (r.appendChild(It), Pe.appendChild(r), ie && !D(I) && (r = r.cloneNode(!1), O.appendChild(r), $.push(r)), V = We, W = 0, z = !0, H !== We && H.appendChild(V), !P) continue;
          }
          if (!U && _e === I) {
            ie = D(_e);
            const Pe = o.createTextNode(I.nodeType === 1 ? "" : I.substringData(M, I.length - M)), ze = o.createTextNode(P || I.nodeType === 1 ? "" : I.substringData(0, M));
            if (ie ? ie = ie.cloneNode(!1) : T(r.parentNode) && !ie && (r = r.cloneNode(!1), O.appendChild(r), $.push(r)), !o.onlyZeroWidthSpace(Pe)) {
              H = _e, q = "", x = [];
              const Oe = [];
              for (; H !== O && H !== A && H !== null; )
                H.nodeType === 1 && Q(H) && (T(H) ? Oe.push(H.cloneNode(!1)) : x.push(H.cloneNode(!1)), q += H.style.cssText.substr(0, H.style.cssText.indexOf(":")) + "|"), H = H.parentNode;
              for (x = x.concat(Oe), dt = K = H = x.pop() || Pe; x.length > 0; )
                H = x.pop(), K.appendChild(H), K = H;
              O.appendChild(dt), H.textContent = Pe.data;
            }
            if (ie && dt) {
              const Oe = D(dt);
              Oe && (ie = Oe);
            }
            for (H = _e, x = [], q = ""; H !== O && H !== A && H !== null; )
              He = T(H) ? null : f(H), He && H.nodeType === 1 && Q(H) && (x.push(He), q += H.style.cssText.substr(0, H.style.cssText.indexOf(":")) + "|"), H = H.parentNode;
            const We = x.pop() || ze;
            for (K = H = We; x.length > 0; )
              H = x.pop(), K.appendChild(H), K = H;
            ie ? (r = r.cloneNode(!1), r.appendChild(We), ie.insertBefore(r, ie.firstChild), O.appendChild(ie), $.push(r), ie = null) : r.appendChild(We), I = ze, M = ze.data.length, U = !0, !y && _ && (r = ze, ze.textContent = o.zeroWidthSpace), H !== ze && H.appendChild(I);
            continue;
          }
          if (z) {
            if (_e.nodeType === 1 && !o.isBreak(_e)) {
              o._isIgnoreNodeChange(_e) ? (O.appendChild(_e.cloneNode(!0)), _ || (r = r.cloneNode(!1), O.appendChild(r), $.push(r))) : Ce(_e, _e);
              continue;
            }
            H = _e, x = [], q = "";
            const Pe = [];
            for (; H.parentNode !== null && H !== A && H !== r; )
              He = U ? H.cloneNode(!1) : f(H), H.nodeType === 1 && !o.isBreak(_e) && He && Q(H) && (T(H) ? ie || Pe.push(He) : x.push(He), q += H.style.cssText.substr(0, H.style.cssText.indexOf(":")) + "|"), H = H.parentNode;
            x = x.concat(Pe);
            const ze = x.pop() || _e;
            for (K = H = ze; x.length > 0; )
              H = x.pop(), K.appendChild(H), K = H;
            if (T(r.parentNode) && !T(ze) && !o.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), O.appendChild(r), $.push(r)), !U && !ie && T(ze)) {
              r = r.cloneNode(!1);
              const We = ze.childNodes;
              for (let Oe = 0, It = We.length; Oe < It; Oe++)
                r.appendChild(We[Oe]);
              ze.appendChild(r), O.appendChild(ze), $.push(r), r.children.length > 0 ? Le = H : Le = r;
            } else ze === _e ? U ? Le = O : Le = r : U ? (O.appendChild(ze), Le = H) : (r.appendChild(ze), Le = H);
            if (ie && _e.nodeType === 3)
              if (D(_e)) {
                const We = o.getParentElement(Le, (function(Oe) {
                  return this._isMaintainedNode(Oe.parentNode) || Oe.parentNode === O;
                }).bind(o));
                ie.appendChild(We), r = We.cloneNode(!1), $.push(r), O.appendChild(r);
              } else
                ie = null;
          }
          dt = _e.cloneNode(!1), Le.appendChild(dt), _e.nodeType === 1 && !o.isBreak(_e) && (Rt = dt), Ce(_e, Rt);
        }
      }(s, O), C && !y && !S.v)
        return {
          ancestor: s,
          startContainer: h,
          startOffset: m,
          endContainer: g,
          endOffset: p
        };
      if (y = y && C, y)
        for (let Ce = 0; Ce < $.length; Ce++) {
          let Re = $[Ce], Le, ut, Fe;
          if (_)
            Le = o.createTextNode(o.zeroWidthSpace), O.replaceChild(Le, Re);
          else {
            const Ge = Re.childNodes;
            for (ut = Ge[0]; Ge[0]; )
              Fe = Ge[0], O.insertBefore(Fe, Re);
            o.removeItem(Re);
          }
          Ce === 0 && (_ ? V = I = Le : (V = ut, I = Fe));
        }
      else {
        if (C)
          for (let Ce = 0; Ce < $.length; Ce++)
            this._stripRemoveNode($[Ce]);
        _ && (V = I = r);
      }
      o.removeEmptyNode(O, r, !1), _ && (W = V.textContent.length, M = I.textContent.length);
      const ne = y || I.textContent.length === 0;
      !o.isBreak(I) && I.textContent.length === 0 && (o.removeItem(I), I = V), M = ne ? I.textContent.length : M;
      const me = { s: 0, e: 0 }, ve = o.getNodePath(V, O, me), ce = !I.parentNode;
      ce && (I = V);
      const ye = { s: 0, e: 0 }, Ae = o.getNodePath(I, O, !ce && !ne ? ye : null);
      W += me.s, M = _ ? W : ce ? V.textContent.length : ne ? M + me.s : M + ye.s;
      const $e = o.mergeSameTags(O, [ve, Ae], !0);
      return s.parentNode.replaceChild(O, s), V = o.getNodeFromPath(ve, O), I = o.getNodeFromPath(Ae, O), {
        ancestor: O,
        startContainer: V,
        startOffset: W + $e[0],
        endContainer: I,
        endOffset: M + $e[1]
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
    _nodeChange_startLine: function(s, r, f, h, m, g, p, y, C, _, S) {
      let D = h.parentNode;
      for (; !D.nextSibling && !D.previousSibling && !o.isFormatElement(D.parentNode) && !o.isWysiwygDiv(D.parentNode) && D.nodeName !== r.nodeName; )
        D = D.parentNode;
      if (!p && D.nodeName === r.nodeName && !o.isFormatElement(D) && !D.nextSibling && o.onlyZeroWidthSpace(h.textContent.slice(0, m))) {
        let z = !0, U = h.previousSibling;
        for (; U; ) {
          if (!o.onlyZeroWidthSpace(U)) {
            z = !1;
            break;
          }
          U = U.previousSibling;
        }
        if (z)
          return o.copyTagAttributes(D, r), {
            ancestor: s,
            container: h,
            offset: m
          };
      }
      y.v = !1;
      const T = s, B = [r], A = s.cloneNode(!1);
      let $ = h, O = m, P = !1, V, W, I, M;
      if (function z(U, x) {
        const H = U.childNodes;
        for (let K = 0, q = H.length, ie, J; K < q; K++) {
          const Q = H[K];
          if (!Q) continue;
          let ne = x;
          if (P && !o.isBreak(Q)) {
            if (Q.nodeType === 1) {
              if (o._isIgnoreNodeChange(Q)) {
                if (r = r.cloneNode(!1), J = Q.cloneNode(!0), A.appendChild(J), A.appendChild(r), B.push(r), S && Q.contains(S)) {
                  const ye = o.getNodePath(S, Q);
                  S = o.getNodeFromPath(ye, J);
                }
              } else
                z(Q, Q);
              continue;
            }
            W = Q, V = [];
            const me = [];
            for (; W.parentNode !== null && W !== T && W !== r; )
              ie = f(W), W.nodeType === 1 && ie && (_(W) ? M || me.push(ie) : V.push(ie)), W = W.parentNode;
            V = V.concat(me);
            const ve = V.length > 0, ce = V.pop() || Q;
            for (I = W = ce; V.length > 0; )
              W = V.pop(), I.appendChild(W), I = W;
            if (_(r.parentNode) && !_(ce) && (r = r.cloneNode(!1), A.appendChild(r), B.push(r)), !M && _(ce)) {
              r = r.cloneNode(!1);
              const ye = ce.childNodes;
              for (let Ae = 0, $e = ye.length; Ae < $e; Ae++)
                r.appendChild(ye[Ae]);
              ce.appendChild(r), A.appendChild(ce), x = _(W) ? r : W, B.push(r);
            } else ve ? (r.appendChild(ce), x = W) : x = r;
            if (M && Q.nodeType === 3)
              if (C(Q)) {
                const ye = o.getParentElement(x, (function(Ae) {
                  return this._isMaintainedNode(Ae.parentNode) || Ae.parentNode === A;
                }).bind(o));
                M.appendChild(ye), r = ye.cloneNode(!1), B.push(r), A.appendChild(r);
              } else
                M = null;
          }
          if (!P && Q === $) {
            let me = A;
            M = C(Q);
            const ve = o.createTextNode($.nodeType === 1 ? "" : $.substringData(0, O)), ce = o.createTextNode($.nodeType === 1 ? "" : $.substringData(O, $.length - O));
            if (M) {
              const $e = C(x);
              if ($e && $e.parentNode !== me) {
                let Ce = $e, Re = null;
                for (; Ce.parentNode !== me; ) {
                  for (x = Re = Ce.parentNode.cloneNode(!1); Ce.childNodes[0]; )
                    Re.appendChild(Ce.childNodes[0]);
                  Ce.appendChild(Re), Ce = Ce.parentNode;
                }
                Ce.parentNode.appendChild($e);
              }
              M = M.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(ve) || x.appendChild(ve);
            const ye = C(x);
            for (ye && (M = ye), M && (me = M), W = x, V = []; W !== me && W !== null; )
              ie = f(W), W.nodeType === 1 && ie && V.push(ie), W = W.parentNode;
            const Ae = V.pop() || x;
            for (I = W = Ae; V.length > 0; )
              W = V.pop(), I.appendChild(W), I = W;
            Ae !== x ? (r.appendChild(Ae), x = W) : x = r, o.isBreak(Q) && r.appendChild(Q.cloneNode(!1)), me.appendChild(r), $ = ce, O = 0, P = !0, x.appendChild($);
            continue;
          }
          ie = P ? f(Q) : Q.cloneNode(!1), ie && (x.appendChild(ie), Q.nodeType === 1 && !o.isBreak(Q) && (ne = ie)), z(Q, ne);
        }
      }(s, A), p && !g && !y.v)
        return {
          ancestor: s,
          container: h,
          offset: m,
          endContainer: S
        };
      if (g = g && p, g)
        for (let z = 0; z < B.length; z++) {
          let U = B[z];
          const x = U.childNodes, H = x[0];
          for (; x[0]; )
            A.insertBefore(x[0], U);
          o.removeItem(U), z === 0 && ($ = H);
        }
      else if (p) {
        r = r.firstChild;
        for (let z = 0; z < B.length; z++)
          this._stripRemoveNode(B[z]);
      }
      if (!g && A.childNodes.length === 0)
        s.childNodes ? $ = s.childNodes[0] : ($ = o.createTextNode(o.zeroWidthSpace), s.appendChild($));
      else {
        o.removeEmptyNode(A, r, !1), o.onlyZeroWidthSpace(A.textContent) && ($ = A.firstChild, O = 0);
        const z = { s: 0, e: 0 }, U = o.getNodePath($, A, z);
        O += z.s;
        const x = o.mergeSameTags(A, [U], !0);
        s.parentNode.replaceChild(A, s), $ = o.getNodeFromPath(U, A), O += x[0];
      }
      return {
        ancestor: A,
        container: $,
        offset: O,
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
    _nodeChange_middleLine: function(s, r, f, h, m, g, p) {
      if (!m) {
        let S = null;
        p && s.contains(p) && (S = o.getNodePath(p, s));
        const D = s.cloneNode(!0), T = r.nodeName, B = r.style.cssText, A = r.className;
        let $ = D.childNodes, O = 0, P = $.length;
        for (let V; O < P && (V = $[O], V.nodeType !== 3); O++)
          if (V.nodeName === T)
            V.style.cssText += B, o.addClass(V, A);
          else {
            if (!o.isBreak(V) && o._isIgnoreNodeChange(V))
              continue;
            if (P === 1) {
              $ = V.childNodes, P = $.length, O = -1;
              continue;
            } else
              break;
          }
        if (P > 0 && O === P)
          return s.innerHTML = D.innerHTML, {
            ancestor: s,
            endContainer: S ? o.getNodeFromPath(S, s) : null
          };
      }
      g.v = !1;
      const y = s.cloneNode(!1), C = [r];
      let _ = !0;
      if (function S(D, T) {
        const B = D.childNodes;
        for (let A = 0, $ = B.length, O, P; A < $; A++) {
          let V = B[A];
          if (!V) continue;
          let W = T;
          if (!o.isBreak(V) && o._isIgnoreNodeChange(V)) {
            if (r.childNodes.length > 0 && (y.appendChild(r), r = r.cloneNode(!1)), P = V.cloneNode(!0), y.appendChild(P), y.appendChild(r), C.push(r), T = r, p && V.contains(p)) {
              const I = o.getNodePath(p, V);
              p = o.getNodeFromPath(I, P);
            }
            continue;
          } else
            O = f(V), O && (_ = !1, T.appendChild(O), V.nodeType === 1 && (W = O));
          o.isBreak(V) || S(V, W);
        }
      }(s, r), _ || m && !h && !g.v) return { ancestor: s, endContainer: p };
      if (y.appendChild(r), h && m)
        for (let S = 0; S < C.length; S++) {
          let D = C[S];
          const T = D.childNodes;
          for (; T[0]; )
            y.insertBefore(T[0], D);
          o.removeItem(D);
        }
      else if (m) {
        r = r.firstChild;
        for (let S = 0; S < C.length; S++)
          this._stripRemoveNode(C[S]);
      }
      return o.removeEmptyNode(y, r, !1), o.mergeSameTags(y, null, !0), s.parentNode.replaceChild(y, s), { ancestor: y, endContainer: p };
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
    _nodeChange_endLine: function(s, r, f, h, m, g, p, y, C, _) {
      let S = h.parentNode;
      for (; !S.nextSibling && !S.previousSibling && !o.isFormatElement(S.parentNode) && !o.isWysiwygDiv(S.parentNode) && S.nodeName !== r.nodeName; )
        S = S.parentNode;
      if (!p && S.nodeName === r.nodeName && !o.isFormatElement(S) && !S.previousSibling && o.onlyZeroWidthSpace(h.textContent.slice(m))) {
        let M = !0, z = h.nextSibling;
        for (; z; ) {
          if (!o.onlyZeroWidthSpace(z)) {
            M = !1;
            break;
          }
          z = z.nextSibling;
        }
        if (M)
          return o.copyTagAttributes(S, r), {
            ancestor: s,
            container: h,
            offset: m
          };
      }
      y.v = !1;
      const D = s, T = [r], B = s.cloneNode(!1);
      let A = h, $ = m, O = !1, P, V, W, I;
      if (function M(z, U) {
        const x = z.childNodes;
        for (let H = x.length - 1, K; 0 <= H; H--) {
          const q = x[H];
          if (!q) continue;
          let ie = U;
          if (O && !o.isBreak(q)) {
            if (q.nodeType === 1) {
              if (o._isIgnoreNodeChange(q)) {
                r = r.cloneNode(!1);
                const me = q.cloneNode(!0);
                B.insertBefore(me, U), B.insertBefore(r, me), T.push(r);
              } else
                M(q, q);
              continue;
            }
            V = q, P = [];
            const J = [];
            for (; V.parentNode !== null && V !== D && V !== r; )
              K = f(V), K && V.nodeType === 1 && (_(V) ? I || J.push(K) : P.push(K)), V = V.parentNode;
            P = P.concat(J);
            const Q = P.length > 0, ne = P.pop() || q;
            for (W = V = ne; P.length > 0; )
              V = P.pop(), W.appendChild(V), W = V;
            if (_(r.parentNode) && !_(ne) && (r = r.cloneNode(!1), B.insertBefore(r, B.firstChild), T.push(r)), !I && _(ne)) {
              r = r.cloneNode(!1);
              const me = ne.childNodes;
              for (let ve = 0, ce = me.length; ve < ce; ve++)
                r.appendChild(me[ve]);
              ne.appendChild(r), B.insertBefore(ne, B.firstChild), T.push(r), r.children.length > 0 ? U = V : U = r;
            } else Q ? (r.insertBefore(ne, r.firstChild), U = V) : U = r;
            if (I && q.nodeType === 3)
              if (C(q)) {
                const me = o.getParentElement(U, (function(ve) {
                  return this._isMaintainedNode(ve.parentNode) || ve.parentNode === B;
                }).bind(o));
                I.appendChild(me), r = me.cloneNode(!1), T.push(r), B.insertBefore(r, B.firstChild);
              } else
                I = null;
          }
          if (!O && q === A) {
            I = C(q);
            const J = o.createTextNode(A.nodeType === 1 ? "" : A.substringData($, A.length - $)), Q = o.createTextNode(A.nodeType === 1 ? "" : A.substringData(0, $));
            if (I) {
              I = I.cloneNode(!1);
              const me = C(U);
              if (me && me.parentNode !== B) {
                let ve = me, ce = null;
                for (; ve.parentNode !== B; ) {
                  for (U = ce = ve.parentNode.cloneNode(!1); ve.childNodes[0]; )
                    ce.appendChild(ve.childNodes[0]);
                  ve.appendChild(ce), ve = ve.parentNode;
                }
                ve.parentNode.insertBefore(me, ve.parentNode.firstChild);
              }
              I = I.cloneNode(!1);
            } else _(r.parentNode) && !I && (r = r.cloneNode(!1), B.appendChild(r), T.push(r));
            for (o.onlyZeroWidthSpace(J) || U.insertBefore(J, U.firstChild), V = U, P = []; V !== B && V !== null; )
              K = _(V) ? null : f(V), K && V.nodeType === 1 && P.push(K), V = V.parentNode;
            const ne = P.pop() || U;
            for (W = V = ne; P.length > 0; )
              V = P.pop(), W.appendChild(V), W = V;
            ne !== U ? (r.insertBefore(ne, r.firstChild), U = V) : U = r, o.isBreak(q) && r.appendChild(q.cloneNode(!1)), I ? (I.insertBefore(r, I.firstChild), B.insertBefore(I, B.firstChild), I = null) : B.insertBefore(r, B.firstChild), A = Q, $ = Q.data.length, O = !0, U.insertBefore(A, U.firstChild);
            continue;
          }
          K = O ? f(q) : q.cloneNode(!1), K && (U.insertBefore(K, U.firstChild), q.nodeType === 1 && !o.isBreak(q) && (ie = K)), M(q, ie);
        }
      }(s, B), p && !g && !y.v)
        return {
          ancestor: s,
          container: h,
          offset: m
        };
      if (g = g && p, g)
        for (let M = 0; M < T.length; M++) {
          let z = T[M];
          const U = z.childNodes;
          let x = null;
          for (; U[0]; )
            x = U[0], B.insertBefore(x, z);
          o.removeItem(z), M === T.length - 1 && (A = x, $ = x.textContent.length);
        }
      else if (p) {
        r = r.firstChild;
        for (let M = 0; M < T.length; M++)
          this._stripRemoveNode(T[M]);
      }
      if (!g && B.childNodes.length === 0)
        s.childNodes ? A = s.childNodes[0] : (A = o.createTextNode(o.zeroWidthSpace), s.appendChild(A));
      else {
        if (!p && r.textContent.length === 0)
          return o.removeEmptyNode(B, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        o.removeEmptyNode(B, r, !1), o.onlyZeroWidthSpace(B.textContent) ? (A = B.firstChild, $ = A.textContent.length) : o.onlyZeroWidthSpace(A) && (A = r, $ = 1);
        const M = { s: 0, e: 0 }, z = o.getNodePath(A, B, M);
        $ += M.s;
        const U = o.mergeSameTags(B, [z], !0);
        s.parentNode.replaceChild(B, s), A = o.getNodeFromPath(z, B), $ += U[0];
      }
      return {
        ancestor: B,
        container: A,
        offset: A.nodeType === 1 && $ === 1 ? A.childNodes.length : $
      };
    },
    /**
     * @description Run plugin calls and basic commands.
     * @param {String} command Command string
     * @param {String} display Display type string ('command', 'submenu', 'dialog', 'container')
     * @param {Element} target The element of command button
     */
    actionCall: function(s, r, f) {
      if (r) {
        if (/more/i.test(r)) {
          if (f !== this._moreLayerActiveButton) {
            const h = e.element.toolbar.querySelector("." + s);
            h && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = f, h.style.display = "block", v._showToolbarBalloon(), v._showToolbarInline()), o.addClass(f, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), v._showToolbarBalloon(), v._showToolbarInline());
          return;
        }
        if (/container/.test(r) && (this._menuTray[s] === null || f !== this.containerActiveButton)) {
          this.callPlugin(s, this.containerOn.bind(this, f), f);
          return;
        }
        if (this.isReadOnly && o.arrayIncludes(this.resizingDisabledButtons, f)) return;
        if (/submenu/.test(r) && (this._menuTray[s] === null || f !== this.submenuActiveButton)) {
          this.callPlugin(s, this.submenuOn.bind(this, f), f);
          return;
        } else if (/dialog/.test(r)) {
          this.callPlugin(s, this.plugins[s].open.bind(this), f);
          return;
        } else /command/.test(r) ? this.callPlugin(s, this.plugins[s].action.bind(this), f) : /fileBrowser/.test(r) && this.callPlugin(s, this.plugins[s].open.bind(this, null), f);
      } else s && this.commandHandler(f, s);
      /submenu/.test(r) ? this.submenuOff() : /command/.test(r) || (this.submenuOff(), this.containerOff());
    },
    /**
     * @description Execute command of command button(All Buttons except submenu and dialog)
     * (selectAll, codeView, fullScreen, indent, outdent, undo, redo, removeFormat, print, preview, showBlocks, save, bold, underline, italic, strike, subscript, superscript, copy, cut, paste)
     * @param {Element|null} target The element of command button
     * @param {String} command Property of command button (data-value)
     */
    commandHandler: function(s, r) {
      if (!(d.isReadOnly && !/copy|cut|selectAll|codeView|fullScreen|print|preview|showBlocks/.test(r)))
        switch (r) {
          case "copy":
          case "cut":
            this.execCommand(r);
            break;
          case "paste":
            break;
          case "selectAll":
            this.containerOff();
            const f = e.element.wysiwyg;
            let h = o.getChildElement(f.firstChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !1) || f.firstChild, m = o.getChildElement(f.lastChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !0) || f.lastChild;
            if (!h || !m) return;
            if (o.isMedia(h)) {
              const C = this.getFileComponent(h), _ = o.createElement("BR"), S = o.createElement(l.defaultTag);
              S.appendChild(_), h = C ? C.component : h, h.parentNode.insertBefore(S, h), h = _;
            }
            if (o.isMedia(m)) {
              const C = o.createElement("BR"), _ = o.createElement(l.defaultTag);
              _.appendChild(C), f.appendChild(_), m = C;
            }
            v._showToolbarBalloon(this.setRange(h, 0, m, m.textContent.length));
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
            this.setDir(l.rtl ? "ltr" : "rtl");
            break;
          case "dir_ltr":
            this.setDir("ltr");
            break;
          case "dir_rtl":
            this.setDir("rtl");
            break;
          case "save":
            if (typeof l.callBackSave == "function")
              l.callBackSave(this.getContents(!1), this._variable.isChanged);
            else if (this._variable.isChanged && typeof w.save == "function")
              w.save();
            else
              throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
            this._variable.isChanged = !1, e.tool.save && e.tool.save.setAttribute("disabled", !0);
            break;
          default:
            r = l._defaultCommand[r.toLowerCase()] || r, this.commandMap[r] || (this.commandMap[r] = s);
            const g = this._variable.currentNodesMap, p = g.indexOf(r) > -1 ? null : o.createElement(r);
            let y = r;
            /^SUB$/i.test(r) && g.indexOf("SUP") > -1 ? y = "SUP" : /^SUP$/i.test(r) && g.indexOf("SUB") > -1 && (y = "SUB"), this.nodeChange(p, this._commandMapStyles[r] || null, [y], !1), this.focus();
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
      const r = this.getRange(), f = this.getSelectedElements(null), h = [], m = s !== "indent", g = l.rtl ? "marginRight" : "marginLeft";
      let p = r.startContainer, y = r.endContainer, C = r.startOffset, _ = r.endOffset;
      for (let S = 0, D = f.length, T, B; S < D; S++)
        T = f[S], !o.isListCell(T) || !this.plugins.list ? (B = /\d+/.test(T.style[g]) ? o.getNumber(T.style[g], 0) : 0, m ? B -= 25 : B += 25, o.setStyle(T, g, B <= 0 ? "" : B + "px")) : (m || T.previousElementSibling) && h.push(T);
      h.length > 0 && this.plugins.list.editInsideList.call(this, m, h), this.effectNode = null, this.setRange(p, C, y, _), this.history.push(!1);
    },
    /**
     * @description Add or remove the class name of "body" so that the code block is visible
     */
    toggleDisplayBlocks: function() {
      const s = e.element.wysiwyg;
      o.toggleClass(s, "se-show-block"), o.hasClass(s, "se-show-block") ? o.addClass(this._styleCommandMap.showBlocks, "active") : o.removeClass(this._styleCommandMap.showBlocks, "active"), this._resourcesStateChange();
    },
    /**
     * @description Changes to code view or wysiwyg view
     */
    toggleCodeView: function() {
      const s = this._variable.isCodeView;
      this.controllersOff(), o.setDisabledButtons(!s, this.codeViewDisabledButtons), s ? (o.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(l.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, v._hideToolbar())), this.nativeFocus(), o.removeClass(this._styleCommandMap.codeView, "active"), o.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), l.codeMirrorEditor && l.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, v._showToolbarInline())), this._variable._range = null, e.element.code.focus(), o.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && o.setDisabledButtons(!0, this.resizingDisabledButtons), typeof w.toggleCodeView == "function" && w.toggleCodeView(this._variable.isCodeView, this);
    },
    /**
     * @description Convert the data of the code view and put it in the WYSIWYG area.
     * @private
     */
    _setCodeDataToEditor: function() {
      const s = this._getCodeView();
      if (l.fullPage) {
        const r = this._parser.parseFromString(s, "text/html");
        if (!this.options.__allowedScriptTag) {
          const m = r.head.children;
          for (let g = 0, p = m.length; g < p; g++)
            /^script$/i.test(m[g].tagName) && (r.head.removeChild(m[g]), g--, p--);
        }
        let f = r.head.innerHTML;
        (!r.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !r.head.querySelector("style")) && (f += o._setIframeCssTags(this.options)), this._wd.head.innerHTML = f, this._wd.body.innerHTML = this.convertContentsForEditor(r.body.innerHTML);
        const h = r.body.attributes;
        for (let m = 0, g = h.length; m < g; m++)
          h[m].name !== "contenteditable" && this._wd.body.setAttribute(h[m].name, h[m].value);
        if (!o.hasClass(this._wd.body, "sun-editor-editable")) {
          const m = l._editableClass.split(" ");
          for (let g = 0; g < m.length; g++)
            o.addClass(this._wd.body, l._editableClass[g]);
        }
      } else
        e.element.wysiwyg.innerHTML = s.length > 0 ? this.convertContentsForEditor(s) : "<" + l.defaultTag + "><br></" + l.defaultTag + ">";
    },
    /**
     * @description Convert the data of the WYSIWYG area and put it in the code view area.
     * @private
     */
    _setEditorDataToCodeView: function() {
      const s = this.convertHTMLForCodeView(e.element.wysiwyg, !1);
      let r = "";
      if (l.fullPage) {
        const f = o.getAttributesToString(this._wd.body, null);
        r = `<!DOCTYPE html>
<html>
` + this._wd.head.outerHTML.replace(/>(?!\n)/g, `>
`) + "<body " + f + `>
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
      const r = e.element.topArea, f = e.element.toolbar, h = e.element.editorArea, m = e.element.wysiwygFrame, g = e.element.code, p = this._variable;
      this.controllersOff();
      const y = f.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      p.isFullScreen ? (p.isFullScreen = !1, m.style.cssText = p._wysiwygOriginCssText, g.style.cssText = p._codeOriginCssText, f.style.cssText = "", h.style.cssText = p._editorAreaOriginCssText, r.style.cssText = p._originCssText, u.body.style.overflow = p._bodyOverflow, l.height === "auto" && !l.codeMirrorEditor && v._codeViewAutoHeight(), l.toolbarContainer && l.toolbarContainer.appendChild(f), l.stickyToolbar > -1 && o.removeClass(f, "se-toolbar-sticky"), p._fullScreenAttrs.sticky && !l.toolbarContainer && (p._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", o.addClass(f, "se-toolbar-sticky")), this._isInline = p._fullScreenAttrs.inline, this._isBalloon = p._fullScreenAttrs.balloon, this._isInline && v._showToolbarInline(), l.toolbarContainer && o.removeClass(f, "se-toolbar-balloon"), v.onScroll_window(), s && o.changeElement(s.firstElementChild, b.expansion), e.element.topArea.style.marginTop = "", o.removeClass(this._styleCommandMap.fullScreen, "active")) : (p.isFullScreen = !0, p._fullScreenAttrs.inline = this._isInline, p._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), l.toolbarContainer && e.element.relative.insertBefore(f, h), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (p._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", o.removeClass(f, "se-toolbar-sticky")), p._bodyOverflow = u.body.style.overflow, u.body.style.overflow = "hidden", p._editorAreaOriginCssText = h.style.cssText, p._wysiwygOriginCssText = m.style.cssText, p._codeOriginCssText = g.style.cssText, h.style.cssText = f.style.cssText = "", m.style.cssText = (m.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + l._editorStyles.editor, g.style.cssText = (g.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], f.style.width = m.style.height = g.style.height = "100%", f.style.position = "relative", f.style.display = "block", p.innerHeight_fullScreen = c.innerHeight - f.offsetHeight, h.style.height = p.innerHeight_fullScreen - l.fullScreenOffset + "px", s && o.changeElement(s.firstElementChild, b.reduction), l.iframe && l.height === "auto" && (h.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = l.fullScreenOffset + "px", o.addClass(this._styleCommandMap.fullScreen, "active")), y && w.toolbar.hide(), typeof w.toggleFullScreen == "function" && w.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const s = o.createElement("IFRAME");
      s.style.display = "none", u.body.appendChild(s);
      const r = l.printTemplate ? l.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), f = o.getIframeDocument(s), h = this._wd;
      if (l.iframe) {
        const m = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? o.getAttributesToString(h.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        f.write(
          "<!DOCTYPE html><html><head>" + h.head.innerHTML + "</head><body " + m + ">" + r + "</body></html>"
        );
      } else {
        const m = u.head.getElementsByTagName("link"), g = u.head.getElementsByTagName("style");
        let p = "";
        for (let y = 0, C = m.length; y < C; y++)
          p += m[y].outerHTML;
        for (let y = 0, C = g.length; y < C; y++)
          p += g[y].outerHTML;
        f.write(
          "<!DOCTYPE html><html><head>" + p + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '">' + r + "</body></html>"
        );
      }
      this.showLoading(), c.setTimeout(function() {
        try {
          if (s.focus(), o.isIE_Edge || o.isChromium || u.documentMode || c.StyleMedia)
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
          d.closeLoading(), o.removeItem(s);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      d.submenuOff(), d.containerOff(), d.controllersOff();
      const s = l.previewTemplate ? l.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), r = c.open("", "_blank");
      r.mimeType = "text/html";
      const f = this._wd;
      if (l.iframe) {
        const h = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? o.getAttributesToString(f.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + f.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + h + ">" + s + "</body></html>"
        );
      } else {
        const h = u.head.getElementsByTagName("link"), m = u.head.getElementsByTagName("style");
        let g = "";
        for (let p = 0, y = h.length; p < y; p++)
          g += h[p].outerHTML;
        for (let p = 0, y = m.length; p < y; p++)
          g += m[p].outerHTML;
        r.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + n.toolbar.preview + "</title>" + g + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + s + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(s) {
      const r = s === "rtl", f = this._prevRtl !== r;
      this._prevRtl = l.rtl = r, f && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && o.changeElement(e.tool.indent.firstElementChild, b.indent), e.tool.outdent && o.changeElement(e.tool.outdent.firstElementChild, b.outdent));
      const h = e.element;
      r ? (o.addClass(h.topArea, "se-rtl"), o.addClass(h.wysiwygFrame, "se-rtl")) : (o.removeClass(h.topArea, "se-rtl"), o.removeClass(h.wysiwygFrame, "se-rtl"));
      const m = o.getListChildren(h.wysiwyg, function(p) {
        return o.isFormatElement(p) && (p.style.marginRight || p.style.marginLeft || p.style.textAlign);
      });
      for (let p = 0, y = m.length, C, _, S; p < y; p++)
        C = m[p], S = C.style.marginRight, _ = C.style.marginLeft, (S || _) && (C.style.marginRight = _, C.style.marginLeft = S), S = C.style.textAlign, S === "left" ? C.style.textAlign = "right" : S === "right" && (C.style.textAlign = "left");
      const g = e.tool;
      g.dir && (o.changeTxt(g.dir.querySelector(".se-tooltip-text"), n.toolbar[l.rtl ? "dir_ltr" : "dir_rtl"]), o.changeElement(g.dir.firstElementChild, b[l.rtl ? "dir_ltr" : "dir_rtl"])), g.dir_ltr && (r ? o.removeClass(g.dir_ltr, "active") : o.addClass(g.dir_ltr, "active")), g.dir_rtl && (r ? o.addClass(g.dir_rtl, "active") : o.removeClass(g.dir_rtl, "active"));
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
        const f = this.convertHTMLForCodeView(r, !1);
        this._setCodeView(f);
      }
    },
    /**
     * @description Sets the contents of the iframe's head tag and body tag when using the "iframe" or "fullPage" option.
     * @param {Object} ctx { head: HTML string, body: HTML string}
     */
    setIframeContents: function(s) {
      if (!l.iframe) return !1;
      s.head && (this._wd.head.innerHTML = this.options.__allowedScriptTag ? s.head : s.head.replace(this.__scriptTagRegExp, "")), s.body && (this._wd.body.innerHTML = this.convertContentsForEditor(s.body)), this._resetComponents();
    },
    /**
     * @description Gets the current contents
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {Object}
     */
    getContents: function(s) {
      const r = this.cleanHTML(e.element.wysiwyg.innerHTML, null, null), f = o.createElement("DIV");
      f.innerHTML = r;
      const h = o.getListChildren(f, function(m) {
        return m.hasAttribute("contenteditable");
      });
      for (let m = 0, g = h.length; m < g; m++)
        h[m].removeAttribute("contenteditable");
      if (l.fullPage && !s) {
        const m = o.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + m + ">" + f.innerHTML + "</body></html>";
      } else
        return f.innerHTML;
    },
    /**
     * @description Gets the current contents with containing parent div(div.sun-editor-editable).
     * <div class="sun-editor-editable">{contents}</div>
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getFullContents: function(s) {
      return '<div class="sun-editor-editable' + (l.rtl ? " se-rtl" : "") + '">' + this.getContents(s) + "</div>";
    },
    /**
     * @description Returns HTML string according to tag type and configuration.
     * Use only "cleanHTML"
     * @param {Node} node Node
     * @param {Boolean} requireFormat If true, text nodes that do not have a format node is wrapped with the format tag.
     * @private
     */
    _makeLine: function(s, r) {
      const f = l.defaultTag;
      if (s.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(s.nodeName)) return "";
        if (/__se__tag/.test(s.className)) return s.outerHTML;
        const h = o.getListChildNodes(s, function(m) {
          return o.isSpanWithoutAttr(m) && !o.getParentElement(m, o.isNotCheckingNode);
        }) || [];
        for (let m = h.length - 1; m >= 0; m--)
          h[m].outerHTML = h[m].innerHTML;
        return !r || o.isFormatElement(s) || o.isRangeFormatElement(s) || o.isComponent(s) || o.isFigures(s) || o.isAnchor(s) && o.isMedia(s.firstElementChild) ? o.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML : "<" + f + ">" + (o.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML) + "</" + f + ">";
      }
      if (s.nodeType === 3) {
        if (!r) return o._HTMLConvertor(s.textContent);
        const h = s.textContent.split(/\n/g);
        let m = "";
        for (let g = 0, p = h.length, y; g < p; g++)
          y = h[g].trim(), y.length > 0 && (m += "<" + f + ">" + o._HTMLConvertor(y) + "</" + f + ">");
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
      const r = l._textTagsMap;
      return s.replace(this._disallowedTextTagsRegExp, function(f, h, m, g) {
        return h + (typeof r[m] == "string" ? r[m] : m) + (g ? " " + g : "");
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
      const f = this._w.Math, h = r.match(/(\d+(?:\.\d+)?)(.+)/), m = h ? h[1] * 1 : o.fontValueMap[r], g = h ? h[2] : "rem";
      let p = m;
      switch (/em/.test(g) ? p = f.round(m / 0.0625) : g === "pt" ? p = f.round(m * 1.333) : g === "%" && (p = m / 100), s) {
        case "em":
        case "rem":
        case "%":
          return (p * 0.0625).toFixed(2) + s;
        case "pt":
          return f.floor(p / 1.333) + s;
        default:
          return p + s;
      }
    },
    _cleanStyle: function(s, r, f) {
      let h = (s.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(f) && !h && (s.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const m = (s.match(/\ssize="([^"]+)"/i) || [])[1], g = (s.match(/\sface="([^"]+)"/i) || [])[1], p = (s.match(/\scolor="([^"]+)"/i) || [])[1];
        (m || g || p) && (h = 'style="' + (m ? "font-size:" + this.util.getNumber(m / 3.333, 1) + "rem;" : "") + (g ? "font-family:" + g + ";" : "") + (p ? "color:" + p + ";" : "") + '"');
      }
      if (h) {
        r || (r = []);
        const m = h.replace(/&quot;/g, "").match(this._cleanStyleRegExp[f]);
        if (m) {
          const g = [];
          for (let p = 0, y = m.length, C; p < y; p++)
            if (C = m[p].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), C && !/inherit|initial|revert|unset/i.test(C[3])) {
              const _ = o.kebabToCamelCase(C[1].trim()), S = this.wwComputedStyle[_] ? this.wwComputedStyle[_].replace(/"/g, "") : "", D = C[3].trim();
              switch (_) {
                case "fontFamily":
                  if (!l.plugins.font || l.font.indexOf(D) === -1) continue;
                  break;
                case "fontSize":
                  if (!l.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(C[0]) || (C[0] = C[0].replace((C[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, l.fontSizeUnit)));
                  break;
                case "color":
                  if (!l.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(D)) continue;
                  break;
                case "backgroundColor":
                  if (!l.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(D)) continue;
                  break;
              }
              S !== D && g.push(C[0]);
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
    _cleanTags: function(s, r, f) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(r)) return r;
      let h = null;
      const m = f.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), g = this._attributesTagsBlacklist[m];
      r = r.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), g ? r = r.replace(g, "") : r = r.replace(this._attributesBlacklistRegExp, "");
      const p = this._attributesTagsWhitelist[m];
      if (p ? h = r.match(p) : h = r.match(s ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), s || m === "span" || m === "li" || this._cleanStyleRegExp[m])
        if (m === "a") {
          const y = r.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          y && (h || (h = []), h.push(y[0]));
        } else (!h || !/style=/i.test(h.toString())) && ((m === "span" || m === "li") && (h = this._cleanStyle(r, h, "span")), this._cleanStyleRegExp[m] ? h = this._cleanStyle(r, h, m) : /^(P|DIV|H[1-6]|PRE)$/i.test(m) && (h = this._cleanStyle(r, h, "format")));
      else {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        y && !h ? h = [y[0]] : y && !h.some(function(C) {
          return /^style/.test(C.trim());
        }) && h.push(y[0]);
      }
      if (o.isFigures(m)) {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        h || (h = []), y && h.push(y[0]);
      }
      if (h)
        for (let y = 0, C = h.length, _; y < C; y++)
          _ = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(h[y].trim()) ? "" : h[y], f += (/^\s/.test(_) ? "" : " ") + _;
      return f;
    },
    /**
     * @description Determines if formatting is required and returns a domTree
     * @param {Element} dom documentFragment
     * @returns {Element}
     * @private
     */
    _editFormat: function(s) {
      let r = "", f;
      const h = s.childNodes;
      for (let m = 0, g = h.length, p; m < g; m++)
        p = h[m], p.nodeType === 8 ? r += "<!-- " + p.textContent + " -->" : !o.isFormatElement(p) && !o.isRangeFormatElement(p) && !o.isComponent(p) && !/meta/i.test(p.nodeName) ? (f || (f = o.createElement(l.defaultTag)), f.appendChild(p), m--, g--) : (f && (r += f.outerHTML, f = null), r += p.outerHTML);
      return f && (r += f.outerHTML), u.createRange().createContextualFragment(r);
    },
    _convertListCell: function(s) {
      let r = "";
      for (let f = 0, h = s.length, m; f < h; f++)
        m = s[f], m.nodeType === 1 ? o.isList(m) ? r += m.innerHTML : o.isListCell(m) ? r += m.outerHTML : o.isFormatElement(m) ? r += "<li>" + (m.innerHTML.trim() || "<br>") + "</li>" : o.isRangeFormatElement(m) && !o.isTable(m) ? r += this._convertListCell(m) : r += "<li>" + m.outerHTML + "</li>" : r += "<li>" + (m.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(s) {
      let r = !1;
      for (let f = 0, h = s.length, m; f < h; f++)
        if (m = s[f], m.nodeType === 1 && !o.isTextStyleElement(m) && !o.isBreak(m) && !this.__disallowedTagNameRegExp.test(m.nodeName)) {
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
    cleanHTML: function(s, r, f) {
      if (!l.strictMode) return o.htmlCompress(s);
      s = this._deleteDisallowedTags(this._parser.parseFromString(o.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const h = u.createRange().createContextualFragment(s);
      try {
        o._consistencyCheckOfHTML(h, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, l.strictHTMLValidation);
      } catch (y) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + y);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const y = h.querySelectorAll(this.managedTagsInfo.query);
        for (let C = 0, _ = y.length, S, D; C < _; C++) {
          D = [].slice.call(y[C].classList);
          for (let T = 0, B = D.length; T < B; T++)
            if (S = this.managedTagsInfo.map[D[T]], S) {
              S(y[C]);
              break;
            }
        }
      }
      let m = h.childNodes, g = "";
      const p = this._isFormatData(m);
      p && (m = this._editFormat(h).childNodes);
      for (let y = 0, C = m.length, _; y < C; y++) {
        if (_ = m[y], this.__allowedScriptRegExp.test(_.nodeName)) {
          g += _.outerHTML;
          continue;
        }
        g += this._makeLine(_, p);
      }
      return g = o.htmlRemoveWhiteSpace(g), g ? (r && (g = g.replace(typeof r == "string" ? o.createTagsWhitelist(r) : r, "")), f && (g = g.replace(typeof f == "string" ? o.createTagsBlacklist(f) : f, ""))) : g = s, this._tagConvertor(g);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(s) {
      if (!l.strictMode) return o.htmlCompress(s);
      s = this._deleteDisallowedTags(this._parser.parseFromString(o.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0));
      const r = u.createRange().createContextualFragment(s);
      try {
        o._consistencyCheckOfHTML(r, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, l.strictHTMLValidation);
      } catch (g) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + g);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const g = r.querySelectorAll(this.managedTagsInfo.query);
        for (let p = 0, y = g.length, C, _; p < y; p++) {
          _ = [].slice.call(g[p].classList);
          for (let S = 0, D = _.length; S < D; S++)
            if (C = this.managedTagsInfo.map[_[S]], C) {
              C(g[p]);
              break;
            }
        }
      }
      const f = r.childNodes;
      let h = "", m = null;
      for (let g = 0, p; g < f.length; g++) {
        if (p = f[g], this.__allowedScriptRegExp.test(p.nodeName)) {
          h += p.outerHTML;
          continue;
        }
        if (!o.isFormatElement(p) && !o.isRangeFormatElement(p) && !o.isComponent(p) && !o.isFigures(p) && p.nodeType !== 8 && !/__se__tag/.test(p.className)) {
          if (m || (m = o.createElement(l.defaultTag)), m.appendChild(p), g--, f[g + 1] && !o.isFormatElement(f[g + 1]))
            continue;
          p = m, m = null;
        }
        m && (h += this._makeLine(m, !0), m = null), h += this._makeLine(p, !0);
      }
      return m && (h += this._makeLine(m, !0)), h.length === 0 ? "<" + l.defaultTag + "><br></" + l.defaultTag + ">" : (h = o.htmlRemoveWhiteSpace(h), this._tagConvertor(h));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(s, r) {
      let f = "";
      const h = c.RegExp, m = new h("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), g = typeof s == "string" ? u.createRange().createContextualFragment(s) : s, p = (function(_) {
        return this.isFormatElement(_) || this.isComponent(_);
      }).bind(o), y = r ? "" : `
`;
      let C = r ? 0 : this._variable.codeIndent * 1;
      return C = C > 0 ? new c.Array(C + 1).join(" ") : "", function _(S, D) {
        const T = S.childNodes, B = m.test(S.nodeName), A = B ? D : "";
        for (let $ = 0, O = T.length, P, V, W, I, M, z; $ < O; $++) {
          if (P = T[$], I = m.test(P.nodeName), V = I ? y : "", W = p(P) && !B && !/^(TH|TD)$/i.test(S.nodeName) ? y : "", P.nodeType === 8) {
            f += `
<!-- ` + P.textContent.trim() + " -->" + V;
            continue;
          }
          if (P.nodeType === 3) {
            o.isList(P.parentElement) || (f += o._HTMLConvertor(/^\n+$/.test(P.data) ? "" : P.data));
            continue;
          }
          if (P.childNodes.length === 0) {
            f += (/^HR$/i.test(P.nodeName) ? y : "") + (/^PRE$/i.test(P.parentElement.nodeName) && /^BR$/i.test(P.nodeName) ? "" : A) + P.outerHTML + V;
            continue;
          }
          P.outerHTML ? (M = P.nodeName.toLowerCase(), z = A || I ? D : "", f += (W || (B ? "" : V)) + z + P.outerHTML.match(h("<" + M + "[^>]*>", "i"))[0] + V, _(P, D + C), f += (/\n$/.test(f) ? z : "") + "</" + M + ">" + (W || V || B || /^(TH|TD)$/i.test(P.nodeName) ? y : "")) : f += new c.XMLSerializer().serializeToString(P);
        }
      }(g, ""), f.trim() + y;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(s, r, f) {
      u.addEventListener(s, r, f), l.iframe && this._wd.addEventListener(s, r);
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(s, r) {
      u.removeEventListener(s, r), l.iframe && this._wd.removeEventListener(s, r);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(s) {
      const r = l.maxCharCount, f = l.charCounterType;
      let h = 0;
      if (s && (h = this.getCharLength(s, f)), this._setCharCount(), r > 0) {
        let m = !1;
        const g = w.getCharCount(f);
        if (g > r) {
          if (m = !0, h > 0) {
            this._editorRange();
            const p = this.getRange(), y = p.endOffset - 1, C = this.getSelectionNode().textContent, _ = p.endOffset - (g - r);
            this.getSelectionNode().textContent = C.slice(0, _ < 0 ? 0 : _) + C.slice(p.endOffset, C.length), this.setRange(p.endContainer, y, p.endContainer, y);
          }
        } else g + h > r && (m = !0);
        if (m && (this._callCounterBlink(), h > 0))
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
      if (l.maxCharCount) {
        const f = r || l.charCounterType, h = this.getCharLength(typeof s == "string" ? s : this._charTypeHTML && s.nodeType === 1 ? s.outerHTML : s.textContent, f);
        if (h > 0 && h + w.getCharCount(f) > l.maxCharCount)
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
      return /byte/.test(r) ? o.getByteLength(s) : s.length;
    },
    /**
     * @description Reset buttons of the responsive toolbar.
     */
    resetResponsiveToolbar: function() {
      d.controllersOff();
      const s = v._responsiveButtonSize;
      if (s) {
        let r = 0;
        (d._isBalloon || d._isInline) && l.toolbarWidth === "auto" ? r = e.element.topArea.offsetWidth : r = e.element.toolbar.offsetWidth;
        let f = "default";
        for (let h = 1, m = s.length; h < m; h++)
          if (r < s[h]) {
            f = s[h] + "";
            break;
          }
        v._responsiveCurrentSize !== f && (v._responsiveCurrentSize = f, w.setToolbarButtons(v._responsiveButtons[f]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && c.setTimeout((function(s, r) {
        this.textContent && s && (this.textContent = s.getCharCount(r.charCounterType));
      }).bind(e.element.charCounter, w, l), 0);
    },
    /**
     * @description The character counter blinks.
     * @private
     */
    _callCounterBlink: function() {
      const s = e.element.charWrapper;
      s && !o.hasClass(s, "se-blink") && (o.addClass(s, "se-blink"), c.setTimeout(function() {
        o.removeClass(s, "se-blink");
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
      l.codeMirrorEditor ? l.codeMirrorEditor.getDoc().setValue(s) : e.element.code.value = s;
    },
    /**
     * @description Get method in the code view area
     * @private
     */
    _getCodeView: function() {
      return l.codeMirrorEditor ? l.codeMirrorEditor.getDoc().getValue() : e.element.code.value;
    },
    /**
     * @description remove class, display text.
     * @param {Array|null} ignoredList Igonred button list
     */
    _setKeyEffect: function(s) {
      const r = this.commandMap, f = this.activePlugins;
      for (let h in r)
        s.indexOf(h) > -1 || !o.hasOwn(r, h) || (f.indexOf(h) > -1 ? i[h].active.call(this, null) : r.OUTDENT && /^OUTDENT$/i.test(h) ? o.isImportantDisabled(r.OUTDENT) || r.OUTDENT.setAttribute("disabled", !0) : r.INDENT && /^INDENT$/i.test(h) ? o.isImportantDisabled(r.INDENT) || r.INDENT.removeAttribute("disabled") : o.removeClass(r[h], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(s, r) {
      const f = c.RegExp;
      this._ww = l.iframe ? e.element.wysiwygFrame.contentWindow : c, this._wd = u, this._charTypeHTML = l.charCounterType === "byte-html", this.wwComputedStyle = c.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = o.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + o.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(I) {
        return this.test(I) ? I : "";
      }).bind(l.allowedClassNames);
      const h = l.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new f("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new f("<(" + h + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + h + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new f("^(" + h + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new f("^" + (l.__allowedScriptTag ? "script" : "") + "$", "i"), !l.iframe && typeof c.ShadowRoot == "function") {
        let I = e.element.wysiwygFrame;
        for (; I; ) {
          if (I.shadowRoot) {
            this._shadowRoot = I.shadowRoot;
            break;
          } else if (I instanceof c.ShadowRoot) {
            this._shadowRoot = I;
            break;
          }
          I = I.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const m = c.Object.keys(l._textTagsMap), g = l.addTagsWhitelist ? l.addTagsWhitelist.split("|").filter(function(I) {
        return /b|i|ins|s|strike/i.test(I);
      }) : [];
      for (let I = 0; I < g.length; I++)
        m.splice(m.indexOf(g[I].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = m.length === 0 ? null : new f("(<\\/?)(" + m.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const p = function(I, M) {
        return I ? I === "*" ? "[a-z-]+" : M ? I + "|" + M : I : "^";
      }, _ = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", S = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = l._editorTagsWhitelist.indexOf("//") > -1 || l._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new f("^(" + p(l._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new f("^(" + (l.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = o.createTagsWhitelist(p(l._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = o.createTagsBlacklist(l.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = o.createTagsWhitelist(p(l.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = o.createTagsBlacklist(l.pasteTagsBlacklist);
      const D = '\\s*=\\s*(")[^"]*\\1', T = l.attributesWhitelist;
      let B = {}, A = "";
      if (T)
        for (let I in T)
          !o.hasOwn(T, I) || /^on[a-z]+$/i.test(T[I]) || (I === "all" ? A = p(T[I], _) : B[I] = new f("\\s(?:" + p(T[I], "") + ")" + D, "ig"));
      this._attributesWhitelistRegExp = new f("\\s(?:" + (A || _ + "|" + S) + ")" + D, "ig"), this._attributesWhitelistRegExp_all_data = new f("\\s(?:" + ((A || _) + "|data-[a-z0-9\\-]+") + ")" + D, "ig"), this._attributesTagsWhitelist = B;
      const $ = l.attributesBlacklist;
      if (B = {}, A = "", $)
        for (let I in $)
          o.hasOwn($, I) && (I === "all" ? A = p($[I], "") : B[I] = new f("\\s(?:" + p($[I], "") + ")" + D, "ig"));
      this._attributesBlacklistRegExp = new f("\\s(?:" + (A || "^") + ")" + D, "ig"), this._attributesTagsBlacklist = B, this._isInline = /inline/i.test(l.mode), this._isBalloon = /balloon|balloon-always/i.test(l.mode), this._isBalloonAlways = /balloon-always/i.test(l.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const O = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let P = [], V, W;
      for (let I in i)
        if (o.hasOwn(i, I)) {
          if (V = i[I], W = t[I], (V.active || V.action) && W && this.callPlugin(I, null, W), typeof V.checkFileInfo == "function" && typeof V.resetFileInfo == "function" && (this.callPlugin(I, null, W), this._fileInfoPluginsCheck.push(V.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(V.resetFileInfo.bind(this))), c.Array.isArray(V.fileTags)) {
            const M = V.fileTags;
            this.callPlugin(I, null, W), this._fileManager.tags = this._fileManager.tags.concat(M), P.push(I);
            for (let z = 0, U = M.length; z < U; z++)
              this._fileManager.pluginMap[M[z].toLowerCase()] = I;
          }
          if (V.managedTags) {
            const M = V.managedTags();
            O.push("." + M.className), this.managedTagsInfo.map[M.className] = M.method.bind(this);
          }
        }
      this.managedTagsInfo.query = O.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new f("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new f("^(" + (P.length === 0 ? "^" : P.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = Er(this, this._onChange_historyStack.bind(this)), this.addModule([hn]), l.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, l._editorStyles.editor && (e.element.wysiwyg.style.cssText = l._editorStyles.editor), l.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(s, r);
    },
    /**
     * @description Caching basic buttons to use
     * @private
     */
    _cachingButtons: function() {
      this.codeViewDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-code-view-enabled"]):not([data-display="MORE"])'), this.resizingDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-resizing-enabled"]):not([data-display="MORE"])');
      const s = e.tool, r = this.commandMap;
      r.INDENT = s.indent, r.OUTDENT = s.outdent, r[l.textTags.bold.toUpperCase()] = s.bold, r[l.textTags.underline.toUpperCase()] = s.underline, r[l.textTags.italic.toUpperCase()] = s.italic, r[l.textTags.strike.toUpperCase()] = s.strike, r[l.textTags.sub.toUpperCase()] = s.subscript, r[l.textTags.sup.toUpperCase()] = s.superscript, this._styleCommandMap = {
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
      this.hasFocus && v._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), w.onChange && w.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && v._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      this._iframeAuto ? c.setTimeout(function() {
        const s = d._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = s + "px", o.isResizeObserverSupported || d.__callResizeFunction(s, null);
      }) : o.isResizeObserverSupported || d.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(s, r) {
      s = s === -1 ? r.borderBoxSize && r.borderBoxSize[0] ? r.borderBoxSize[0].blockSize : r.contentRect.height + this._editorHeightPadding : s, this._editorHeight !== s && (typeof w.onResizeEditor == "function" && w.onResizeEditor(s, this._editorHeight, d, r), this._editorHeight = s);
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
        !o.onlyZeroWidthSpace(s.textContent) || s.querySelector(o._allowedEmptyNodeList) || (s.innerText.match(/\n/g) || "").length > 1 ? this._placeholder.style.display = "none" : this._placeholder.style.display = "block";
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
      const r = this.getRange(), f = r.commonAncestorContainer, h = r.startContainer, m = o.getRangeFormatElement(f, null);
      let g, p, y;
      const C = o.getParentElement(f, o.isComponent);
      if (!(C && !o.isTable(C))) {
        if (f.nodeType === 1 && f.getAttribute("data-se-embed") === "true") {
          let _ = f.nextElementSibling;
          o.isFormatElement(_) || (_ = this.appendFormatTag(f, l.defaultTag)), this.setRange(_.firstChild, 0, _.firstChild, 0);
          return;
        }
        if (!((o.isRangeFormatElement(h) || o.isWysiwygDiv(h)) && (o.isComponent(h.children[r.startOffset]) || o.isComponent(h.children[r.startOffset - 1])))) {
          if (o.getParentElement(f, o.isNotCheckingNode)) return null;
          if (m) {
            y = o.createElement(s || l.defaultTag), y.innerHTML = m.innerHTML, y.childNodes.length === 0 && (y.innerHTML = o.zeroWidthSpace), m.innerHTML = y.outerHTML, y = m.firstChild, g = o.getEdgeChildNodes(y, null).sc, g || (g = o.createTextNode(o.zeroWidthSpace), y.insertBefore(g, y.firstChild)), p = g.textContent.length, this.setRange(g, p, g, p);
            return;
          }
          if (o.isRangeFormatElement(f) && f.childNodes.length <= 1) {
            let _ = null;
            f.childNodes.length === 1 && o.isBreak(f.firstChild) ? _ = f.firstChild : (_ = o.createTextNode(o.zeroWidthSpace), f.appendChild(_)), this.setRange(_, 1, _, 1);
            return;
          }
          try {
            if (f.nodeType === 3 && (y = o.createElement(s || l.defaultTag), f.parentNode.insertBefore(y, f), y.appendChild(f)), o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling), o.isBreak(g)) {
              const _ = o.createTextNode(o.zeroWidthSpace);
              g.parentNode.insertBefore(_, g), g = _;
            }
          } catch {
            this.execCommand("formatBlock", !1, s || l.defaultTag), this.removeRange(), this._editorRange(), this.effectNode = null;
            return;
          }
          if (y && (o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling), o.isBreak(g))) {
            const _ = o.createTextNode(o.zeroWidthSpace);
            g.parentNode.insertBefore(_, g), g = _;
          }
          this.effectNode = null, h ? this.setRange(h, 1, h, 1) : this.nativeFocus();
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
      this.context = e = Xi(s.originElement, this._getConstructed(s), l), this._componentsInfoReset = !0, this._editorInit(!0, r);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(s, r) {
      this._init(s, r), v._addEvent(), this._setCharCount(), v._offStickyToolbar(), v.onResize_window(), e.element.toolbar.style.visibility = "";
      const f = l.frameAttrbutes;
      for (let h in f)
        e.element.wysiwyg.setAttribute(h, f[h]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), c.setTimeout(function() {
        typeof d._resourcesStateChange == "function" && (v._resizeObserver && v._resizeObserver.observe(e.element.wysiwygFrame), v._toolbarObserver && v._toolbarObserver.observe(e.element._toolbarShadow), d._resourcesStateChange(), typeof w.onload == "function" && w.onload(d, s));
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
    _deleteKeyCode: new c.RegExp("^(8|46)$"),
    _cursorMoveKeyCode: new c.RegExp("^(8|3[2-9]|40|46)$"),
    _directionKeyCode: new c.RegExp("^(8|13|3[2-9]|40|46)$"),
    _nonTextKeyCode: new c.RegExp("^(8|13|1[6-9]|20|27|3[3-9]|40|45|46|11[2-9]|12[0-3]|144|145)$"),
    _historyIgnoreKeyCode: new c.RegExp("^(1[6-9]|20|27|3[3-9]|40|45|11[2-9]|12[0-3]|144|145)$"),
    _onButtonsCheck: new c.RegExp("^(" + c.Object.keys(l._textTagsMap).join("|") + ")$", "i"),
    _frontZeroWidthReg: new c.RegExp(o.zeroWidthSpace + "+", ""),
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
      let f = null;
      const h = v._keyCodeShortcut[s];
      switch (h) {
        case "A":
          f = "selectAll";
          break;
        case "B":
          l.shortcutsDisable.indexOf("bold") === -1 && (f = "bold");
          break;
        case "S":
          r && l.shortcutsDisable.indexOf("strike") === -1 ? f = "strike" : !r && l.shortcutsDisable.indexOf("save") === -1 && (f = "save");
          break;
        case "U":
          l.shortcutsDisable.indexOf("underline") === -1 && (f = "underline");
          break;
        case "I":
          l.shortcutsDisable.indexOf("italic") === -1 && (f = "italic");
          break;
        case "Z":
          l.shortcutsDisable.indexOf("undo") === -1 && (r ? f = "redo" : f = "undo");
          break;
        case "Y":
          l.shortcutsDisable.indexOf("undo") === -1 && (f = "redo");
          break;
        case "[":
          l.shortcutsDisable.indexOf("indent") === -1 && (f = l.rtl ? "indent" : "outdent");
          break;
        case "]":
          l.shortcutsDisable.indexOf("indent") === -1 && (f = l.rtl ? "outdent" : "indent");
          break;
      }
      return f ? (d.commandHandler(d.commandMap[f], f), !0) : !!h;
    },
    _applyTagEffects: function() {
      if (o.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let s = d.getSelectionNode();
      if (s === d.effectNode) return;
      d.effectNode = s;
      const r = l.rtl ? "marginRight" : "marginLeft", f = d.commandMap, h = v._onButtonsCheck, m = [], g = [], p = d.activePlugins, y = p.length;
      let C = "";
      for (; s.firstChild; )
        s = s.firstChild;
      for (let _ = s; !o.isWysiwygDiv(_) && _; _ = _.parentNode)
        if (!(_.nodeType !== 1 || o.isBreak(_))) {
          if (C = _.nodeName.toUpperCase(), g.push(C), !d.isReadOnly)
            for (let S = 0, D; S < y; S++)
              D = p[S], m.indexOf(D) === -1 && i[D].active.call(d, _) && m.push(D);
          if (o.isFormatElement(_)) {
            m.indexOf("OUTDENT") === -1 && f.OUTDENT && !o.isImportantDisabled(f.OUTDENT) && (o.isListCell(_) || _.style[r] && o.getNumber(_.style[r], 0) > 0) && (m.push("OUTDENT"), f.OUTDENT.removeAttribute("disabled")), m.indexOf("INDENT") === -1 && f.INDENT && !o.isImportantDisabled(f.INDENT) && (m.push("INDENT"), o.isListCell(_) && !_.previousElementSibling ? f.INDENT.setAttribute("disabled", !0) : f.INDENT.removeAttribute("disabled"));
            continue;
          }
          h && h.test(C) && (m.push(C), o.addClass(f[C], "active"));
        }
      d._setKeyEffect(m), d._variable.currentNodes = g.reverse(), d._variable.currentNodesMap = m, l.showPathLabel && (e.element.navigation.textContent = d._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(s) {
      let r = s.target;
      if (d._bindControllersOff && s.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? d._antiBlur = !1 : s.preventDefault(), o.getParentElement(r, ".se-submenu"))
        s.stopPropagation(), d._notHideToolbar = !0;
      else {
        let f = r.getAttribute("data-command"), h = r.className;
        for (; !f && !/se-menu-list/.test(h) && !/sun-editor-common/.test(h); )
          r = r.parentNode, f = r.getAttribute("data-command"), h = r.className;
        (f === d._submenuName || f === d._containerName) && s.stopPropagation();
      }
    },
    addGlobalEvent: function(s, r, f) {
      return l.iframe && d._ww.addEventListener(s, r, f), d._w.addEventListener(s, r, f), {
        type: s,
        listener: r,
        useCapture: f
      };
    },
    removeGlobalEvent: function(s, r, f) {
      s && (typeof s == "object" && (r = s.listener, f = s.useCapture, s = s.type), l.iframe && d._ww.removeEventListener(s, r, f), d._w.removeEventListener(s, r, f));
    },
    onClick_toolbar: function(s) {
      let r = s.target, f = r.getAttribute("data-display"), h = r.getAttribute("data-command"), m = r.className;
      for (d.controllersOff(); r.parentNode && !h && !/se-menu-list/.test(m) && !/se-toolbar/.test(m); )
        r = r.parentNode, h = r.getAttribute("data-command"), f = r.getAttribute("data-display"), m = r.className;
      !h && !f || r.disabled || d.actionCall(h, f, r);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(s) {
      if (d.isReadOnly || o.isNonEditable(e.element.wysiwyg)) return;
      if (o._isExcludeSelectionElement(s.target)) {
        s.preventDefault();
        return;
      }
      if (v.removeGlobalEvent(v.__selectionSyncEvent), v.__selectionSyncEvent = v.addGlobalEvent("mouseup", function() {
        d && d._editorRange(), v.removeGlobalEvent(v.__selectionSyncEvent);
      }), typeof w.onMouseDown == "function" && w.onMouseDown(s, d) === !1) return;
      const r = o.getParentElement(s.target, o.isCell);
      if (r) {
        const f = d.plugins.table;
        f && r !== f._fixedCell && !f._shift && d.callPlugin("table", function() {
          f.onTableCellMultiSelect.call(d, r, !1);
        }, null);
      }
      d._isBalloon && v._hideToolbar();
    },
    onClick_wysiwyg: function(s) {
      const r = s.target;
      if (d.isReadOnly)
        return s.preventDefault(), o.isAnchor(r) && c.open(r.href, r.target), !1;
      if (o.isNonEditable(e.element.wysiwyg) || typeof w.onClick == "function" && w.onClick(s, d) === !1) return;
      const f = d.getFileComponent(r);
      if (f) {
        s.preventDefault(), d.selectComponent(f.target, f.pluginName);
        return;
      }
      const h = o.getParentElement(r, "FIGCAPTION");
      if (h && o.isNonEditable(h) && (s.preventDefault(), h.focus(), d._isInline && !d._inlineToolbarAttr.isShow)) {
        v._showToolbarInline();
        const _ = function() {
          v._hideToolbar(), h.removeEventListener("blur", _);
        };
        h.addEventListener("blur", _);
      }
      if (d._editorRange(), s.detail === 3) {
        let _ = d.getRange();
        o.isFormatElement(_.endContainer) && _.endOffset === 0 && (_ = d.setRange(_.startContainer, _.startOffset, _.startContainer, _.startContainer.length), d._rangeInfo(_, d.getSelection()));
      }
      const m = d.getSelectionNode(), g = o.getFormatElement(m, null), p = o.getRangeFormatElement(m, null);
      let y = m;
      for (; y && y.firstChild; ) y = y.firstChild;
      const C = d.getFileComponent(y);
      if (C) {
        const _ = d.getRange();
        !p && _.startContainer === _.endContainer && d.selectComponent(C.target, C.pluginName);
      } else d.currentFileComponentInfo && d.controllersOff();
      if (!g && !o.isNonEditable(r) && !o.isList(p)) {
        const _ = d.getRange();
        if (o.getFormatElement(_.startContainer) === o.getFormatElement(_.endContainer))
          if (o.isList(p)) {
            s.preventDefault();
            const S = o.createElement("LI"), D = m.nextElementSibling;
            S.appendChild(m), p.insertBefore(S, D), d.focus();
          } else !o.isWysiwygDiv(m) && !o.isComponent(m) && (!o.isTable(m) || o.isCell(m)) && d._setDefaultFormat(o.isRangeFormatElement(p) ? "DIV" : l.defaultTag) !== null ? (s.preventDefault(), d.focus()) : v._applyTagEffects();
      } else
        v._applyTagEffects();
      d._isBalloon && c.setTimeout(v._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      v._balloonDelay && c.clearTimeout(v._balloonDelay), v._balloonDelay = c.setTimeout((function() {
        c.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon();
      }).bind(v), 350);
    },
    _toggleToolbarBalloon: function() {
      if (d) {
        d._editorRange();
        const s = d.getRange();
        d._bindControllersOff || !d._isBalloonAlways && s.collapsed ? v._hideToolbar() : v._showToolbarBalloon(s);
      }
    },
    _showToolbarBalloon: function(s) {
      if (!d._isBalloon) return;
      const r = s || d.getRange(), f = e.element.toolbar, h = e.element.topArea, m = d.getSelection();
      let g;
      if (d._isBalloonAlways && r.collapsed)
        g = !0;
      else if (m.focusNode === m.anchorNode)
        g = m.focusOffset < m.anchorOffset;
      else {
        const V = o.getListChildNodes(r.commonAncestorContainer, null);
        g = o.getArrayIndex(V, m.focusNode) < o.getArrayIndex(V, m.anchorNode);
      }
      let p = r.getClientRects();
      p = p[g ? 0 : p.length - 1];
      const y = d.getGlobalScrollOffset();
      let C = y.left, _ = y.top;
      const S = h.offsetWidth, D = v._getEditorOffsets(null), T = D.top, B = D.left;
      if (f.style.top = "-10000px", f.style.visibility = "hidden", f.style.display = "block", !p) {
        const V = d.getSelectionNode();
        if (o.isFormatElement(V)) {
          const W = o.createTextNode(o.zeroWidthSpace);
          d.insertNode(W, null, !1), d.setRange(W, 1, W, 1), d._editorRange(), p = d.getRange().getClientRects(), p = p[g ? 0 : p.length - 1];
        }
        if (!p) {
          const W = o.getOffset(V, e.element.wysiwygFrame);
          p = {
            left: W.left,
            top: W.top,
            right: W.left,
            bottom: W.top + V.offsetHeight,
            noText: !0
          }, C = 0, _ = 0;
        }
        g = !0;
      }
      const A = c.Math.round(e.element._arrow.offsetWidth / 2), $ = f.offsetWidth, O = f.offsetHeight, P = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (P && (p = {
        left: p.left + P.left,
        top: p.top + P.top,
        right: p.right + P.right - P.width,
        bottom: p.bottom + P.bottom - P.height
      }), v._setToolbarOffset(g, p, f, B, S, C, _, T, A), ($ !== f.offsetWidth || O !== f.offsetHeight) && v._setToolbarOffset(g, p, f, B, S, C, _, T, A), l.toolbarContainer) {
        const V = h.parentElement;
        let W = l.toolbarContainer, I = W.offsetLeft, M = W.offsetTop;
        for (; !W.parentElement.contains(V) || !/^(BODY|HTML)$/i.test(W.parentElement.nodeName); )
          W = W.offsetParent, I += W.offsetLeft, M += W.offsetTop;
        f.style.left = f.offsetLeft - I + h.offsetLeft + "px", f.style.top = f.offsetTop - M + h.offsetTop + "px";
      }
      f.style.visibility = "";
    },
    _setToolbarOffset: function(s, r, f, h, m, g, p, y, C) {
      const S = f.offsetWidth, D = r.noText && !s ? 0 : f.offsetHeight, T = (s ? r.left : r.right) - h - S / 2 + g, B = T + S - m;
      let A = (s ? r.top - D - C : r.bottom + C) - (r.noText ? 0 : y) + p, $ = T < 0 ? 1 : B < 0 ? T : T - B - 1 - 1, O = !1;
      const P = A + (s ? v._getEditorOffsets(null).top : f.offsetHeight - e.element.wysiwyg.offsetHeight);
      !s && P > 0 && v._getPageBottomSpace() < P ? (s = !0, O = !0) : s && u.documentElement.offsetTop > P && (s = !1, O = !0), O && (A = (s ? r.top - D - C : r.bottom + C) - (r.noText ? 0 : y) + p), f.style.left = c.Math.floor($) + "px", f.style.top = c.Math.floor(A) + "px", s ? (o.removeClass(e.element._arrow, "se-arrow-up"), o.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = D + "px") : (o.removeClass(e.element._arrow, "se-arrow-down"), o.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -C + "px");
      const V = c.Math.floor(S / 2 + (T - $));
      e.element._arrow.style.left = (V + C > f.offsetWidth ? f.offsetWidth - C : V < C ? C : V) + "px";
    },
    _showToolbarInline: function() {
      if (!d._isInline) return;
      const s = e.element.toolbar;
      l.toolbarContainer ? s.style.position = "relative" : s.style.position = "absolute", s.style.visibility = "hidden", s.style.display = "block", d._inlineToolbarAttr.width = s.style.width = l.toolbarWidth, d._inlineToolbarAttr.top = s.style.top = (l.toolbarContainer ? 0 : -1 - s.offsetHeight) + "px", typeof w.showInline == "function" && w.showInline(s, e, d), v.onScroll_window(), d._inlineToolbarAttr.isShow = !0, s.style.visibility = "";
    },
    _hideToolbar: function() {
      !d._notHideToolbar && !d._variable.isFullScreen && (e.element.toolbar.style.display = "none", d._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(s) {
      if (/AUDIO/.test(s.target.nodeName)) return !1;
      if (d.isReadOnly || d.isDisabled)
        return s.preventDefault(), s.stopPropagation(), d.history.go(d.history.getCurrentIndex()), !1;
      const r = d.getRange(), f = d.getSelectionNode(), h = o.getFormatElement(f, null);
      if (!h && r.collapsed && !o.isComponent(f) && !o.isList(f)) {
        const g = o.getRangeFormatElement(h, null);
        d._setDefaultFormat(o.isRangeFormatElement(g) ? "DIV" : l.defaultTag);
      }
      d._editorRange();
      const m = (s.data === null ? "" : s.data === void 0 ? " " : s.data) || "";
      if (!d._charCount(m))
        return s.preventDefault(), s.stopPropagation(), !1;
      typeof w.onInput == "function" && w.onInput(s, d) === !1 || d.history.push(!0);
    },
    _isUneditableNode: function(s, r) {
      const f = r ? s.startContainer : s.endContainer, h = r ? s.startOffset : s.endOffset, m = r ? "previousSibling" : "nextSibling", g = f.nodeType === 1;
      let p;
      return g ? (p = v._isUneditableNode_getSibling(f.childNodes[h], m, f), p && p.nodeType === 1 && p.getAttribute("contenteditable") === "false") : (p = v._isUneditableNode_getSibling(f, m, f), d.isEdgePoint(f, h, r ? "start" : "end") && p && p.nodeType === 1 && p.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(s, r, f) {
      if (!s) return null;
      let h = s[r];
      if (!h)
        if (h = o.getFormatElement(f), h = h ? h[r] : null, h && !o.isComponent(h)) h = r === "previousSibling" ? h.firstChild : h.lastChild;
        else return null;
      return h;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(s) {
      let r = d.getSelectionNode();
      if (o.isInputElement(r)) return;
      const f = s.keyCode, h = s.shiftKey, m = s.ctrlKey || s.metaKey || f === 91 || f === 92 || f === 224, g = s.altKey;
      if (v._IEisComposing = f === 229, !m && d.isReadOnly && !v._cursorMoveKeyCode.test(f))
        return s.preventDefault(), !1;
      if (d.submenuOff(), d._isBalloon && v._hideToolbar(), typeof w.onKeyDown == "function" && w.onKeyDown(s, d) === !1) return;
      if (m && v._shortcutCommand(f, h))
        return v._onShortcutKey = !0, s.preventDefault(), s.stopPropagation(), !1;
      v._onShortcutKey && (v._onShortcutKey = !1), f === 13 && o.isFormatElement(d.getRange().startContainer) && (d._resetRangeToTextNode(), r = d.getSelectionNode());
      const p = d.getRange(), y = !p.collapsed || p.startContainer !== p.endContainer, C = d._fileManager.pluginRegExp.test(d.currentControllerName) ? d.currentControllerName : "";
      let _ = o.getFormatElement(r, null) || r, S = o.getRangeFormatElement(_, null);
      if (!(/37|38|39|40/.test(s.keyCode) && v._onKeyDown_wysiwyg_arrowKey(s) === !1)) {
        switch (f) {
          case 8:
            if (!y && C) {
              s.preventDefault(), s.stopPropagation(), d.plugins[C].destroy.call(d);
              break;
            }
            if (y && v._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!o.isFormatElement(_) && !e.element.wysiwyg.firstElementChild && !o.isComponent(r) && d._setDefaultFormat(l.defaultTag) !== null)
              return s.preventDefault(), s.stopPropagation(), !1;
            if (!y && !_.previousElementSibling && p.startOffset === 0 && !r.previousSibling && !o.isListCell(_) && o.isFormatElement(_) && (!o.isFreeFormatElement(_) || o.isClosureFreeFormatElement(_))) {
              if (o.isClosureRangeFormatElement(_.parentNode))
                return s.preventDefault(), s.stopPropagation(), !1;
              if (o.isWysiwygDiv(_.parentNode) && _.childNodes.length <= 1 && (!_.firstChild || o.onlyZeroWidthSpace(_.textContent))) {
                if (s.preventDefault(), s.stopPropagation(), _.nodeName.toUpperCase() === l.defaultTag.toUpperCase()) {
                  _.innerHTML = "<br>";
                  const z = _.attributes;
                  for (; z[0]; )
                    _.removeAttribute(z[0].name);
                } else {
                  const z = o.createElement(l.defaultTag);
                  z.innerHTML = "<br>", _.parentElement.replaceChild(z, _);
                }
                return d.nativeFocus(), !1;
              }
            }
            const T = p.startContainer;
            if (_ && !_.previousElementSibling && p.startOffset === 0 && T.nodeType === 3 && !o.isFormatElement(T.parentNode)) {
              let z = T.parentNode.previousSibling;
              const U = T.parentNode.nextSibling;
              z || (U ? z = U : (z = o.createElement("BR"), _.appendChild(z)));
              let x = T;
              for (; _.contains(x) && !x.previousSibling; )
                x = x.parentNode;
              if (!_.contains(x)) {
                T.textContent = "", o.removeItemAllParents(T, null, _);
                break;
              }
            }
            if (v._isUneditableNode(p, !0)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            !y && d._isEdgeFormat(p.startContainer, p.startOffset, "start") && o.isFormatElement(_.previousElementSibling) && (d._formatAttrsTemp = _.previousElementSibling.attributes);
            const B = p.commonAncestorContainer;
            if (_ = o.getFormatElement(p.startContainer, null), S = o.getRangeFormatElement(_, null), S && _ && !o.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
              if (o.isListCell(_) && o.isList(S) && (o.isListCell(S.parentNode) || _.previousElementSibling) && (r === _ || r.nodeType === 3 && (!r.previousSibling || o.isList(r.previousSibling))) && (o.getFormatElement(p.startContainer, null) !== o.getFormatElement(p.endContainer, null) ? S.contains(p.startContainer) : p.startOffset === 0 && p.collapsed)) {
                if (p.startContainer !== p.endContainer)
                  s.preventDefault(), d.removeNode(), p.startContainer.nodeType === 3 && d.setRange(p.startContainer, p.startContainer.textContent.length, p.startContainer, p.startContainer.textContent.length), d.history.push(!0);
                else {
                  let z = _.previousElementSibling || S.parentNode;
                  if (o.isListCell(z)) {
                    s.preventDefault();
                    let U = z;
                    if (!z.contains(_) && o.isListCell(U) && o.isList(U.lastElementChild)) {
                      for (U = U.lastElementChild.lastElementChild; o.isListCell(U) && o.isList(U.lastElementChild); )
                        U = U.lastElementChild && U.lastElementChild.lastElementChild;
                      z = U;
                    }
                    let x = z === S.parentNode ? S.previousSibling : z.lastChild;
                    x || (x = o.createTextNode(o.zeroWidthSpace), S.parentNode.insertBefore(x, S.parentNode.firstChild));
                    const H = x.nodeType === 3 ? x.textContent.length : 1, K = _.childNodes;
                    let q = x, ie = K[0];
                    for (; ie = K[0]; )
                      z.insertBefore(ie, q.nextSibling), q = ie;
                    o.removeItem(_), S.children.length === 0 && o.removeItem(S), d.setRange(x, H, x, H), d.history.push(!0);
                  }
                }
                break;
              }
              if (!y && p.startOffset === 0) {
                let z = !0, U = B;
                for (; U && U !== S && !o.isWysiwygDiv(U); ) {
                  if (U.previousSibling && (U.previousSibling.nodeType === 1 || !o.onlyZeroWidthSpace(U.previousSibling.textContent.trim()))) {
                    z = !1;
                    break;
                  }
                  U = U.parentNode;
                }
                if (z && S.parentNode) {
                  s.preventDefault(), d.detachRangeFormatElement(S, o.isListCell(_) ? [_] : null, null, !1, !1), d.history.push(!0);
                  break;
                }
              }
            }
            if (!y && _ && (p.startOffset === 0 || r === _ && _.childNodes[p.startOffset])) {
              const z = r === _ ? _.childNodes[p.startOffset] : r, U = _.previousSibling, x = (B.nodeType === 3 || o.isBreak(B)) && !B.previousSibling && p.startOffset === 0;
              if (z && !z.previousSibling && (B && o.isComponent(B.previousSibling) || x && o.isComponent(U))) {
                const H = d.getFileComponent(U);
                H ? (s.preventDefault(), s.stopPropagation(), _.textContent.length === 0 && o.removeItem(_), d.selectComponent(H.target, H.pluginName) === !1 && d.blur()) : o.isComponent(U) && (s.preventDefault(), s.stopPropagation(), o.removeItem(U));
                break;
              }
              if (z && o.isNonEditable(z.previousSibling)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(z.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (C) {
              s.preventDefault(), s.stopPropagation(), d.plugins[C].destroy.call(d);
              break;
            }
            if (y && v._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!y && d._isEdgeFormat(p.endContainer, p.endOffset, "end") && !_.nextSibling) {
              s.preventDefault(), s.stopPropagation();
              return;
            }
            if (v._isUneditableNode(p, !1)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if ((o.isFormatElement(r) || r.nextSibling === null || o.onlyZeroWidthSpace(r.nextSibling) && r.nextSibling.nextSibling === null) && p.startOffset === r.textContent.length) {
              const z = _.nextElementSibling;
              if (!z) break;
              if (o.isComponent(z)) {
                if (s.preventDefault(), o.onlyZeroWidthSpace(_) && (o.removeItem(_), o.isTable(z))) {
                  let x = o.getChildElement(z, o.isCell, !1);
                  x = x.firstElementChild || x, d.setRange(x, 0, x, 0);
                  break;
                }
                const U = d.getFileComponent(z);
                U ? (s.stopPropagation(), d.selectComponent(U.target, U.pluginName) === !1 && d.blur()) : o.isComponent(z) && (s.stopPropagation(), o.removeItem(z));
                break;
              }
            }
            if (!y && (d.isEdgePoint(p.endContainer, p.endOffset) || r === _ && _.childNodes[p.startOffset])) {
              const z = r === _ && _.childNodes[p.startOffset] || r;
              if (z && o.isNonEditable(z.nextSibling)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(z.nextSibling);
                break;
              } else if (o.isComponent(z)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(z);
                break;
              }
            }
            if (!y && d._isEdgeFormat(p.endContainer, p.endOffset, "end") && o.isFormatElement(_.nextElementSibling) && (d._formatAttrsTemp = _.attributes), _ = o.getFormatElement(p.startContainer, null), S = o.getRangeFormatElement(_, null), o.isListCell(_) && o.isList(S) && (r === _ || r.nodeType === 3 && (!r.nextSibling || o.isList(r.nextSibling)) && (o.getFormatElement(p.startContainer, null) !== o.getFormatElement(p.endContainer, null) ? S.contains(p.endContainer) : p.endOffset === r.textContent.length && p.collapsed))) {
              p.startContainer !== p.endContainer && d.removeNode();
              let z = o.getArrayItem(_.children, o.isList, !1);
              if (z = z || _.nextElementSibling || S.parentNode.nextElementSibling, z && (o.isList(z) || o.getArrayItem(z.children, o.isList, !1))) {
                s.preventDefault();
                let U, x;
                if (o.isList(z)) {
                  const H = z.firstElementChild;
                  for (x = H.childNodes, U = x[0]; x[0]; )
                    _.insertBefore(x[0], z);
                  o.removeItem(H);
                } else {
                  for (U = z.firstChild, x = z.childNodes; x[0]; )
                    _.appendChild(x[0]);
                  o.removeItem(z);
                }
                d.setRange(U, 0, U, 0), d.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (C || l.tabDisable || (s.preventDefault(), m || g || o.isWysiwygDiv(r))) break;
            const A = !p.collapsed || d.isEdgePoint(p.startContainer, p.startOffset), $ = d.getSelectedElements(null);
            r = d.getSelectionNode();
            const O = [];
            let P = [], V = o.isListCell($[0]), W = o.isListCell($[$.length - 1]), I = { sc: p.startContainer, so: p.startOffset, ec: p.endContainer, eo: p.endOffset };
            for (let z = 0, U = $.length, x; z < U; z++)
              if (x = $[z], o.isListCell(x)) {
                if (!x.previousElementSibling && !h)
                  continue;
                O.push(x);
              } else
                P.push(x);
            if (O.length > 0 && A && d.plugins.list)
              I = d.plugins.list.editInsideList.call(d, h, O);
            else {
              const z = o.getParentElement(r, o.isCell);
              if (z && A) {
                const U = o.getParentElement(z, "table"), x = o.getListChildren(U, o.isCell);
                let H = h ? o.prevIdx(x, z) : o.nextIdx(x, z);
                H === x.length && !h && (H = 0), H === -1 && h && (H = x.length - 1);
                let K = x[H];
                if (!K) break;
                K = K.firstElementChild || K, d.setRange(K, 0, K, 0);
                break;
              }
              P = P.concat(O), V = W = null;
            }
            if (P.length > 0)
              if (h) {
                const z = P.length - 1;
                for (let H = 0, K; H <= z; H++) {
                  K = P[H].childNodes;
                  for (let q = 0, ie = K.length, J; q < ie && (J = K[q], !!J); q++)
                    if (!o.onlyZeroWidthSpace(J)) {
                      /^\s{1,4}$/.test(J.textContent) ? o.removeItem(J) : /^\s{1,4}/.test(J.textContent) && (J.textContent = J.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const U = o.getChildElement(P[0], "text", !1), x = o.getChildElement(P[z], "text", !0);
                !V && U && (I.sc = U, I.so = 0), !W && x && (I.ec = x, I.eo = x.textContent.length);
              } else {
                const z = o.createTextNode(new c.Array(d._variable.tabSize + 1).join(" "));
                if (P.length === 1) {
                  if (!d.insertNode(z, null, !0)) return !1;
                  V || (I.sc = z, I.so = z.length), W || (I.ec = z, I.eo = z.length);
                } else {
                  const U = P.length - 1;
                  for (let K = 0, q; K <= U; K++)
                    q = P[K].firstChild, q && (o.isBreak(q) ? P[K].insertBefore(z.cloneNode(!1), q) : q.textContent = z.textContent + q.textContent);
                  const x = o.getChildElement(P[0], "text", !1), H = o.getChildElement(P[U], "text", !0);
                  !V && x && (I.sc = x, I.so = 0), !W && H && (I.ec = H, I.eo = H.textContent.length);
                }
              }
            d.setRange(I.sc, I.so, I.ec, I.eo), d.history.push(!1);
            break;
          case 13:
            const M = o.getFreeFormatElement(r, null);
            if (d._charTypeHTML) {
              let z = "";
              if (!h && M || h ? z = "<br>" : z = "<" + _.nodeName + "><br></" + _.nodeName + ">", !d.checkCharCount(z, "byte-html"))
                return s.preventDefault(), !1;
            }
            if (!h && !C) {
              const z = d._isEdgeFormat(p.endContainer, p.endOffset, "end"), U = d._isEdgeFormat(p.startContainer, p.startOffset, "start");
              if (z && (/^H[1-6]$/i.test(_.nodeName) || /^HR$/i.test(_.nodeName))) {
                v._enterPrevent(s);
                let x = null;
                const H = d.appendFormatTag(_, l.defaultTag);
                if (z && z.length > 0) {
                  x = z.pop();
                  const K = x;
                  for (; z.length > 0; )
                    x = x.appendChild(z.pop());
                  H.appendChild(K);
                }
                if (x = x ? x.appendChild(H.firstChild) : H.firstChild, o.isBreak(x)) {
                  const K = o.createTextNode(o.zeroWidthSpace);
                  x.parentNode.insertBefore(K, x), d.setRange(K, 1, K, 1);
                } else
                  d.setRange(x, 0, x, 0);
                break;
              } else if (S && _ && !o.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
                const x = d.getRange();
                if (d.isEdgePoint(x.endContainer, x.endOffset) && o.isList(r.nextSibling)) {
                  v._enterPrevent(s);
                  const H = o.createElement("LI"), K = o.createElement("BR");
                  H.appendChild(K), _.parentNode.insertBefore(H, _.nextElementSibling), H.appendChild(r.nextSibling), d.setRange(K, 1, K, 1);
                  break;
                }
                if ((x.commonAncestorContainer.nodeType !== 3 || !x.commonAncestorContainer.nextElementSibling) && o.onlyZeroWidthSpace(_.innerText.trim()) && !o.isListCell(_.nextElementSibling)) {
                  v._enterPrevent(s);
                  let H = null;
                  if (o.isListCell(S.parentNode)) {
                    const K = _.parentNode.parentNode;
                    S = K.parentNode;
                    const q = o.createElement("LI");
                    q.innerHTML = "<br>", o.copyTagAttributes(q, _, l.lineAttrReset), H = q, S.insertBefore(H, K.nextElementSibling);
                  } else {
                    const K = o.isCell(S.parentNode) ? "DIV" : o.isList(S.parentNode) ? "LI" : o.isFormatElement(S.nextElementSibling) && !o.isRangeFormatElement(S.nextElementSibling) ? S.nextElementSibling.nodeName : o.isFormatElement(S.previousElementSibling) && !o.isRangeFormatElement(S.previousElementSibling) ? S.previousElementSibling.nodeName : l.defaultTag;
                    H = o.createElement(K), o.copyTagAttributes(H, _, l.lineAttrReset);
                    const q = d.detachRangeFormatElement(S, [_], null, !0, !0);
                    q.cc.insertBefore(H, q.ec);
                  }
                  H.innerHTML = "<br>", o.removeItemAllParents(_, null, null), d.setRange(H, 1, H, 1);
                  break;
                }
              }
              if (M) {
                v._enterPrevent(s);
                const x = r === M, H = d.getSelection(), K = r.childNodes, q = H.focusOffset, ie = r.previousElementSibling, J = r.nextSibling;
                if (!o.isClosureFreeFormatElement(M) && K && (x && p.collapsed && K.length - 1 <= q + 1 && o.isBreak(K[q]) && (!K[q + 1] || (!K[q + 2] || o.onlyZeroWidthSpace(K[q + 2].textContent)) && K[q + 1].nodeType === 3 && o.onlyZeroWidthSpace(K[q + 1].textContent)) && q > 0 && o.isBreak(K[q - 1]) || !x && o.onlyZeroWidthSpace(r.textContent) && o.isBreak(ie) && (o.isBreak(ie.previousSibling) || !o.onlyZeroWidthSpace(ie.previousSibling.textContent)) && (!J || !o.isBreak(J) && o.onlyZeroWidthSpace(J.textContent)))) {
                  x ? o.removeItem(K[q - 1]) : o.removeItem(r);
                  const Q = d.appendFormatTag(M, o.isFormatElement(M.nextElementSibling) && !o.isRangeFormatElement(M.nextElementSibling) ? M.nextElementSibling : null);
                  o.copyFormatAttributes(Q, M), d.setRange(Q, 1, Q, 1);
                  break;
                }
                if (x) {
                  w.insertHTML(p.collapsed && o.isBreak(p.startContainer.childNodes[p.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let Q = H.focusNode;
                  const ne = H.focusOffset;
                  M === Q && (Q = Q.childNodes[ne - q > 1 ? ne - 1 : ne]), d.setRange(Q, 1, Q, 1);
                } else {
                  const Q = H.focusNode.nextSibling, ne = o.createElement("BR");
                  d.insertNode(ne, null, !1);
                  const me = ne.previousSibling, ve = ne.nextSibling;
                  !o.isBreak(Q) && !o.isBreak(me) && (!ve || o.onlyZeroWidthSpace(ve)) ? (ne.parentNode.insertBefore(ne.cloneNode(!1), ne), d.setRange(ne, 1, ne, 1)) : d.setRange(ve, 0, ve, 0);
                }
                v._onShortcutKey = !0;
                break;
              }
              if (p.collapsed && (U || z)) {
                v._enterPrevent(s);
                const x = o.createElement("BR"), H = o.createElement(_.nodeName);
                o.copyTagAttributes(H, _, l.lineAttrReset);
                let K = x;
                do {
                  if (!o.isBreak(r) && r.nodeType === 1) {
                    const q = r.cloneNode(!1);
                    q.appendChild(K), K = q;
                  }
                  r = r.parentNode;
                } while (_ !== r && _.contains(r));
                H.appendChild(K), _.parentNode.insertBefore(H, U && !z ? _ : _.nextElementSibling), z && d.setRange(x, 1, x, 1);
                break;
              }
              if (_) {
                s.stopPropagation();
                let x, H = 0;
                if (p.collapsed)
                  o.onlyZeroWidthSpace(_) ? x = d.appendFormatTag(_, _.cloneNode(!1)) : x = o.splitElement(p.endContainer, p.endOffset, o.getElementDepth(_));
                else {
                  const K = o.getFormatElement(p.startContainer, null) !== o.getFormatElement(p.endContainer, null), q = _.cloneNode(!1);
                  q.innerHTML = "<br>";
                  const ie = p.commonAncestorContainer, J = ie === p.startContainer && ie === p.endContainer && o.onlyZeroWidthSpace(ie) ? p : d.removeNode();
                  if (x = o.getFormatElement(J.container, null), !x) {
                    o.isWysiwygDiv(J.container) && (v._enterPrevent(s), e.element.wysiwyg.appendChild(q), x = q, o.copyTagAttributes(x, _, l.lineAttrReset), d.setRange(x, H, x, H));
                    break;
                  }
                  const Q = o.getRangeFormatElement(J.container);
                  if (x = x.contains(Q) ? o.getChildElement(Q, o.getFormatElement.bind(o)) : x, K) {
                    if (z && !U)
                      x.parentNode.insertBefore(q, !J.prevContainer || J.container === J.prevContainer ? x.nextElementSibling : x), x = q, H = 0;
                    else if (H = J.offset, U) {
                      const ne = x.parentNode.insertBefore(q, x);
                      z && (x = ne, H = 0);
                    }
                  } else
                    z && U ? (x.parentNode.insertBefore(q, J.prevContainer && J.container === J.prevContainer ? x.nextElementSibling : x), x = q, H = 0) : x = o.splitElement(J.container, J.offset, o.getElementDepth(_));
                }
                v._enterPrevent(s), o.copyTagAttributes(x, _, l.lineAttrReset), d.setRange(x, H, x, H);
                break;
              }
            }
            if (y) break;
            if (S && o.getParentElement(S, "FIGCAPTION") && o.getParentElement(S, o.isList) && (v._enterPrevent(s), _ = d.appendFormatTag(_, null), d.setRange(_, 0, _, 0)), C) {
              s.preventDefault(), s.stopPropagation(), d.containerOff(), d.controllersOff();
              const z = e[C], U = z._container, x = U.previousElementSibling || U.nextElementSibling;
              let H = null;
              o.isListCell(U.parentNode) ? H = o.createElement("BR") : (H = o.createElement(o.isFormatElement(x) && !o.isRangeFormatElement(x) ? x.nodeName : l.defaultTag), H.innerHTML = "<br>"), h ? U.parentNode.insertBefore(H, U) : U.parentNode.insertBefore(H, U.nextElementSibling), d.callPlugin(C, function() {
                d.selectComponent(z._element, C) === !1 && d.blur();
              }, null);
            }
            break;
          case 27:
            if (C)
              return s.preventDefault(), s.stopPropagation(), d.controllersOff(), !1;
            break;
        }
        if (h && f === 16) {
          s.preventDefault(), s.stopPropagation();
          const T = d.plugins.table;
          if (T && !T._shift && !T._ref) {
            const B = o.getParentElement(_, o.isCell);
            if (B) {
              T.onTableCellMultiSelect.call(d, B, !0);
              return;
            }
          }
        } else if (h && (o.isOSX_IOS ? g : m) && f === 32) {
          s.preventDefault(), s.stopPropagation();
          const T = d.insertNode(o.createTextNode(" "));
          if (T) {
            d.setRange(T, T.length, T, T.length);
            return;
          }
        }
        if (o.isIE && !m && !g && !y && !v._nonTextKeyCode.test(f) && o.isBreak(p.commonAncestorContainer)) {
          const T = o.createTextNode(o.zeroWidthSpace);
          d.insertNode(T, null, !1), d.setRange(T, 1, T, 1);
        }
        v._directionKeyCode.test(f) && (c.setTimeout(d._editorRange.bind(d), 0), v._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(s) {
      if (s.shiftKey) return;
      let r = d.getSelectionNode();
      const f = function(g, p) {
        if (p || (p = 0), s.preventDefault(), s.stopPropagation(), !g) return;
        let y = d.getFileComponent(g);
        y ? d.selectComponent(y.target, y.pluginName) : (d.setRange(g, p, g, p), d.controllersOff());
      }, h = o.getParentElement(r, "table");
      if (h) {
        const g = o.getParentElement(r, "tr"), p = o.getParentElement(r, "td");
        let y = p, C = p;
        if (p) {
          for (; y && y.firstChild; ) y = y.firstChild;
          for (; C && C.lastChild; ) C = C.lastChild;
        }
        let _ = r;
        for (; _ && _.firstChild; ) _ = _.firstChild;
        const S = _ === y, D = _ === C;
        let T = null, B = 0;
        if (s.keyCode === 38 && S) {
          const A = g && g.previousElementSibling;
          for (A ? T = A.children[p.cellIndex] : T = o.getPreviousDeepestNode(h, d.context.element.wysiwyg); T && T.lastChild; ) T = T.lastChild;
          T && (B = T.textContent.length);
        } else if (s.keyCode === 40 && D) {
          const A = g && g.nextElementSibling;
          for (A ? T = A.children[p.cellIndex] : T = o.getNextDeepestNode(h, d.context.element.wysiwyg); T && T.firstChild; ) T = T.firstChild;
        }
        if (T)
          return f(T, B), !1;
      }
      const m = d.getFileComponent(r);
      if (m) {
        const g = /37|38/.test(s.keyCode), p = /39|40/.test(s.keyCode);
        if (g) {
          const y = o.getPreviousDeepestNode(m.target, d.context.element.wysiwyg);
          f(y, y && y.textContent.length);
        } else if (p) {
          const y = o.getNextDeepestNode(m.target, d.context.element.wysiwyg);
          f(y);
        }
      }
    },
    onKeyUp_wysiwyg: function(s) {
      if (v._onShortcutKey) return;
      d._editorRange();
      const r = s.keyCode, f = s.ctrlKey || s.metaKey || r === 91 || r === 92 || r === 224, h = s.altKey;
      if (d.isReadOnly) {
        !f && v._cursorMoveKeyCode.test(r) && v._applyTagEffects();
        return;
      }
      const m = d.getRange();
      let g = d.getSelectionNode();
      if (d._isBalloon && (d._isBalloonAlways && r !== 27 || !m.collapsed))
        if (d._isBalloonAlways)
          r !== 27 && v._showToolbarBalloonDelay();
        else {
          v._showToolbarBalloon();
          return;
        }
      let p = g;
      for (; p && p.firstChild; ) p = p.firstChild;
      const y = d.getFileComponent(p);
      if (!(s.keyCode === 16 || s.shiftKey) && y ? d.selectComponent(y.target, y.pluginName) : d.currentFileComponentInfo && d.controllersOff(), r === 8 && o.isWysiwygDiv(g) && g.textContent === "" && g.children.length === 0) {
        s.preventDefault(), s.stopPropagation(), g.innerHTML = "";
        const T = o.createElement(o.isFormatElement(d._variable.currentNodes[0]) ? d._variable.currentNodes[0] : l.defaultTag);
        T.innerHTML = "<br>", g.appendChild(T), d.setRange(T, 0, T, 0), v._applyTagEffects(), d.history.push(!1);
        return;
      }
      const C = o.getFormatElement(g, null), _ = o.getRangeFormatElement(g, null), S = d._formatAttrsTemp;
      if (S) {
        for (let T = 0, B = S.length; T < B; T++) {
          if (r === 13 && /^id$/i.test(S[T].name)) {
            C.removeAttribute("id");
            continue;
          }
          C.setAttribute(S[T].name, S[T].value);
        }
        d._formatAttrsTemp = null;
      }
      if (!C && m.collapsed && !o.isComponent(g) && !o.isList(g) && d._setDefaultFormat(o.isRangeFormatElement(_) ? "DIV" : l.defaultTag) !== null && (g = d.getSelectionNode()), !f && !h && !v._nonTextKeyCode.test(r) && g.nodeType === 3 && o.zeroWidthRegExp.test(g.textContent) && !(s.isComposing !== void 0 ? s.isComposing : v._IEisComposing)) {
        let T = m.startOffset, B = m.endOffset;
        const A = (g.textContent.substring(0, B).match(v._frontZeroWidthReg) || "").length;
        T = m.startOffset - A, B = m.endOffset - A, g.textContent = g.textContent.replace(o.zeroWidthRegExp, ""), d.setRange(g, T < 0 ? 0 : T, g, B < 0 ? 0 : B);
      }
      v._deleteKeyCode.test(r) && C && o.onlyZeroWidthSpace(C.textContent) && !C.previousElementSibling && (C.innerHTML = "<br>", d.setRange(C, 0, C, 0)), d._charCount(""), !(typeof w.onKeyUp == "function" && w.onKeyUp(s, d) === !1) && !f && !h && !v._historyIgnoreKeyCode.test(r) && d.history.push(!0);
    },
    onScroll_wysiwyg: function(s) {
      d.controllersOff(), d._isBalloon && v._hideToolbar(), typeof w.onScroll == "function" && w.onScroll(s, d);
    },
    onFocus_wysiwyg: function(s) {
      d._antiBlur || (d.hasFocus = !0, c.setTimeout(v._applyTagEffects), d._isInline && v._showToolbarInline(), typeof w.onFocus == "function" && w.onFocus(s, d));
    },
    onBlur_wysiwyg: function(s) {
      d._antiBlur || d._variable.isCodeView || (d.hasFocus = !1, d.effectNode = null, d.controllersOff(), (d._isInline || d._isBalloon) && v._hideToolbar(), d._setKeyEffect([]), d._variable.currentNodes = [], d._variable.currentNodesMap = [], l.showPathLabel && (e.element.navigation.textContent = ""), typeof w.onBlur == "function" && w.onBlur(s, d, this));
    },
    onMouseDown_resizingBar: function(s) {
      s.stopPropagation(), d.submenuOff(), d.controllersOff(), d._variable.resizeClientY = s.clientY, e.element.resizeBackground.style.display = "block";
      function r() {
        e.element.resizeBackground.style.display = "none", u.removeEventListener("mousemove", v._resize_editor), u.removeEventListener("mouseup", r);
      }
      u.addEventListener("mousemove", v._resize_editor), u.addEventListener("mouseup", r);
    },
    _resize_editor: function(s) {
      const r = e.element.editorArea.offsetHeight + (s.clientY - d._variable.resizeClientY), f = r < d._variable.minResizingSize ? d._variable.minResizingSize : r;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = f + "px", d._variable.resizeClientY = s.clientY, o.isResizeObserverSupported || d.__callResizeFunction(f, null);
    },
    onResize_window: function() {
      o.isResizeObserverSupported || d.resetResponsiveToolbar();
      const s = e.element.toolbar, r = s.style.display === "none" || d._isInline && !d._inlineToolbarAttr.isShow;
      if (!(s.offsetWidth === 0 && !r)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = c.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), d.submenuActiveButton && d.submenu && d._setMenuPosition(d.submenuActiveButton, d.submenu), d._variable.isFullScreen) {
          d._variable.innerHeight_fullScreen += c.innerHeight - s.offsetHeight - d._variable.innerHeight_fullScreen, e.element.editorArea.style.height = d._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (d._variable.isCodeView && d._isInline) {
          v._showToolbarInline();
          return;
        }
        d._iframeAutoHeight(), d._sticky && (s.style.width = e.element.topArea.offsetWidth - 2 + "px", v.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (d._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || l.stickyToolbar < 0) return;
      const s = e.element, r = s.editorArea.offsetHeight, f = (this.scrollY || u.documentElement.scrollTop) + l.stickyToolbar, h = v._getEditorOffsets(l.toolbarContainer).top - (d._isInline ? s.toolbar.offsetHeight : 0), m = d._isInline && f - h > 0 ? f - h - e.element.toolbar.offsetHeight : 0;
      f < h ? v._offStickyToolbar() : f + d._variable.minResizingSize >= r + h ? (d._sticky || v._onStickyToolbar(m), s.toolbar.style.top = m + r + h + l.stickyToolbar - f - d._variable.minResizingSize + "px") : f >= h && v._onStickyToolbar(m);
    },
    _getEditorOffsets: function(s) {
      let r = s || e.element.topArea, f = 0, h = 0, m = 0;
      for (; r; )
        f += r.offsetTop, h += r.offsetLeft, m += r.scrollTop, r = r.offsetParent;
      return {
        top: f,
        left: h,
        scroll: m
      };
    },
    _getPageBottomSpace: function() {
      return u.documentElement.scrollHeight - (v._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(s) {
      const r = e.element;
      !d._isInline && !l.toolbarContainer && (r._stickyDummy.style.height = r.toolbar.offsetHeight + "px", r._stickyDummy.style.display = "block"), r.toolbar.style.top = l.stickyToolbar + s + "px", r.toolbar.style.width = d._isInline ? d._inlineToolbarAttr.width : r.toolbar.offsetWidth + "px", o.addClass(r.toolbar, "se-toolbar-sticky"), d._sticky = !0;
    },
    _offStickyToolbar: function() {
      const s = e.element;
      s._stickyDummy.style.display = "none", s.toolbar.style.top = d._isInline ? d._inlineToolbarAttr.top : "", s.toolbar.style.width = d._isInline ? d._inlineToolbarAttr.width : "", s.editorArea.style.marginTop = "", o.removeClass(s.toolbar, "se-toolbar-sticky"), d._sticky = !1;
    },
    _codeViewAutoHeight: function() {
      d._variable.isFullScreen || (e.element.code.style.height = e.element.code.scrollHeight + "px");
    },
    // FireFox - table delete, Chrome - image, video, audio
    _hardDelete: function() {
      const s = d.getRange(), r = s.startContainer, f = s.endContainer, h = o.getRangeFormatElement(r), m = o.getRangeFormatElement(f), g = o.isCell(h), p = o.isCell(m), y = s.commonAncestorContainer;
      if ((g && !h.previousElementSibling && !h.parentElement.previousElementSibling || p && !m.nextElementSibling && !m.parentElement.nextElementSibling) && h !== m)
        if (!g)
          o.removeItem(o.getParentElement(m, function(S) {
            return y === S.parentNode;
          }));
        else if (!p)
          o.removeItem(o.getParentElement(h, function(S) {
            return y === S.parentNode;
          }));
        else
          return o.removeItem(o.getParentElement(h, function(S) {
            return y === S.parentNode;
          })), d.nativeFocus(), !0;
      const C = r.nodeType === 1 ? o.getParentElement(r, ".se-component") : null, _ = f.nodeType === 1 ? o.getParentElement(f, ".se-component") : null;
      return C && o.removeItem(C), _ && o.removeItem(_), !1;
    },
    onPaste_wysiwyg: function(s) {
      const r = o.isIE ? c.clipboardData : s.clipboardData;
      return r ? v._dataTransferAction("paste", s, r) : !0;
    },
    _setClipboardComponent: function(s, r, f) {
      s.preventDefault(), s.stopPropagation(), f.setData("text/html", r.component.outerHTML);
    },
    onCopy_wysiwyg: function(s) {
      const r = o.isIE ? c.clipboardData : s.clipboardData;
      if (typeof w.onCopy == "function" && w.onCopy(s, r, d) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const f = d.currentFileComponentInfo;
      f && !o.isIE && (v._setClipboardComponent(s, f, r), o.addClass(f.component, "se-component-copy"), c.setTimeout(function() {
        o.removeClass(f.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(s) {
      if (typeof w.onSave == "function") {
        w.onSave(s, d);
        return;
      }
    },
    onCut_wysiwyg: function(s) {
      const r = o.isIE ? c.clipboardData : s.clipboardData;
      if (typeof w.onCut == "function" && w.onCut(s, r, d) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const f = d.currentFileComponentInfo;
      f && !o.isIE && (v._setClipboardComponent(s, f, r), o.removeItem(f.component), d.controllersOff()), c.setTimeout(function() {
        d.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(s) {
      if (d.isReadOnly || o.isIE)
        return s.preventDefault(), s.stopPropagation(), !1;
      const r = s.dataTransfer;
      return r ? (v._setDropLocationSelection(s), d.removeNode(), document.body.contains(d.currentControllerTarget) || d.controllersOff(), v._dataTransferAction("drop", s, r)) : !0;
    },
    _setDropLocationSelection: function(s) {
      const r = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let f = null;
      if (s.rangeParent ? (r.startContainer = s.rangeParent, r.startOffset = s.rangeOffset, r.endContainer = s.rangeParent, r.endOffset = s.rangeOffset) : d._wd.caretRangeFromPoint ? f = d._wd.caretRangeFromPoint(s.clientX, s.clientY) : f = d.getRange(), f && (r.startContainer = f.startContainer, r.startOffset = f.startOffset, r.endContainer = f.endContainer, r.endOffset = f.endOffset), r.startContainer === r.endContainer) {
        const h = o.getParentElement(r.startContainer, o.isComponent);
        h && (r.startContainer = h, r.startOffset = 0, r.endContainer = h, r.endOffset = 0);
      }
      d.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(s, r, f) {
      let h, m;
      if (o.isIE) {
        h = f.getData("Text");
        const g = d.getRange(), p = o.createElement("DIV"), y = {
          sc: g.startContainer,
          so: g.startOffset,
          ec: g.endContainer,
          eo: g.endOffset
        };
        return p.setAttribute("contenteditable", !0), p.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(p), p.focus(), c.setTimeout(function() {
          m = p.innerHTML, o.removeItem(p), d.setRange(y.sc, y.so, y.ec, y.eo), v._setClipboardData(s, r, h, m, f);
        }), !0;
      } else if (h = f.getData("text/plain"), m = f.getData("text/html"), v._setClipboardData(s, r, h, m, f) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(s, r, f, h, m) {
      const g = /class=["']*Mso(Normal|List)/i.test(h) || /content=["']*Word.Document/i.test(h) || /content=["']*OneNote.File/i.test(h) || /content=["']*Excel.Sheet/i.test(h);
      !h ? h = o._HTMLConvertor(f).replace(/\n/g, "<br>") : (h = h.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), g && (h = h.replace(/\n/g, " "), f = f.replace(/\n/g, " ")), h = d.cleanHTML(h, d.pasteTagsWhitelistRegExp, d.pasteTagsBlacklistRegExp));
      const y = d._charCount(d._charTypeHTML ? h : f);
      if (s === "paste" && typeof w.onPaste == "function") {
        const _ = w.onPaste(r, h, y, d);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          h = _;
        }
      }
      if (s === "drop" && typeof w.onDrop == "function") {
        const _ = w.onDrop(r, h, y, d);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          h = _;
        }
      }
      const C = m.files;
      if (C.length > 0 && !g)
        return /^image/.test(C[0].type) && d.plugins.image && w.insertImage(C), !1;
      if (!y)
        return !1;
      if (h)
        return w.insertHTML(h, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(s) {
      if (d.isDisabled || d.isReadOnly) return !1;
      const r = o.getParentElement(s.target, o.isComponent), f = d._lineBreaker.style;
      if (r && !d.currentControllerName) {
        const h = e.element;
        let m = 0, g = h.wysiwyg;
        do
          m += g.scrollTop, g = g.parentElement;
        while (g && !/^(BODY|HTML)$/i.test(g.nodeName));
        const p = h.wysiwyg.scrollTop, y = v._getEditorOffsets(null), C = o.getOffset(r, h.wysiwygFrame).top + p, _ = s.pageY + m + (l.iframe && !l.toolbarContainer ? h.toolbar.offsetHeight : 0), S = C + (l.iframe ? m : y.top), D = o.isListCell(r.parentNode);
        let T = "", B = "";
        if ((D ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) && _ < S + 20)
          B = C, T = "t";
        else if ((D ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) && _ > S + r.offsetHeight - 20)
          B = C + r.offsetHeight, T = "b";
        else {
          f.display = "none";
          return;
        }
        d._variable._lineBreakComp = r, d._variable._lineBreakDir = T, f.top = B - p + "px", d._lineBreakerButton.style.left = o.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", f.display = "block";
      } else f.display !== "none" && (f.display = "none");
    },
    _enterPrevent: function(s) {
      s.preventDefault(), o.isMobile && d.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(s) {
      s.preventDefault();
    },
    _onLineBreak: function(s) {
      s.preventDefault();
      const r = d._variable._lineBreakComp, f = this ? this : d._variable._lineBreakDir, h = o.isListCell(r.parentNode), m = o.createElement(h ? "BR" : o.isCell(r.parentNode) ? "DIV" : l.defaultTag);
      if (h || (m.innerHTML = "<br>"), d._charTypeHTML && !d.checkCharCount(m.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(m, f === "t" ? r : r.nextSibling), d._lineBreaker.style.display = "none", d._variable._lineBreakComp = null;
      const g = h ? m : m.firstChild;
      d.setRange(g, 1, g, 1), d.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const s = l.iframe ? d._ww : e.element.wysiwyg;
      o.isResizeObserverSupported && (this._resizeObserver = new c.ResizeObserver(function(r) {
        d.__callResizeFunction(-1, r[0]);
      })), e.element.toolbar.addEventListener("mousedown", v._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", v._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", v.onClick_toolbar, !1), s.addEventListener("mousedown", v.onMouseDown_wysiwyg, !1), s.addEventListener("click", v.onClick_wysiwyg, !1), s.addEventListener(o.isIE ? "textinput" : "input", v.onInput_wysiwyg, !1), s.addEventListener("keydown", v.onKeyDown_wysiwyg, !1), s.addEventListener("keyup", v.onKeyUp_wysiwyg, !1), s.addEventListener("paste", v.onPaste_wysiwyg, !1), s.addEventListener("copy", v.onCopy_wysiwyg, !1), s.addEventListener("cut", v.onCut_wysiwyg, !1), s.addEventListener("drop", v.onDrop_wysiwyg, !1), s.addEventListener("scroll", v.onScroll_wysiwyg, !1), s.addEventListener("focus", v.onFocus_wysiwyg, !1), s.addEventListener("blur", v.onBlur_wysiwyg, !1), v._lineBreakerBind = { a: v._onLineBreak.bind(""), t: v._onLineBreak.bind("t"), b: v._onLineBreak.bind("b") }, s.addEventListener("mousemove", v.onMouseMove_wysiwyg, !1), d._lineBreakerButton.addEventListener("mousedown", v._onMouseDown_lineBreak, !1), d._lineBreakerButton.addEventListener("click", v._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", v._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", v._lineBreakerBind.b, !1), s.addEventListener("touchstart", v.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.addEventListener("touchend", v.onClick_wysiwyg, { passive: !0, useCapture: !1 }), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.addEventListener("keydown", v._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", v._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", v._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(l.height) && l.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", v.onMouseDown_resizingBar, !1) : o.addClass(e.element.resizingBar, "se-resizing-none")), v._setResponsiveToolbar(), o.isResizeObserverSupported && (this._toolbarObserver = new c.ResizeObserver(d.resetResponsiveToolbar)), c.addEventListener("resize", v.onResize_window, !1), l.stickyToolbar > -1 && c.addEventListener("scroll", v.onScroll_window, !1);
    },
    _removeEvent: function() {
      const s = l.iframe ? d._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", v._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", v._buttonsEventHandler), e.element.toolbar.removeEventListener("click", v.onClick_toolbar), s.removeEventListener("mousedown", v.onMouseDown_wysiwyg), s.removeEventListener("click", v.onClick_wysiwyg), s.removeEventListener(o.isIE ? "textinput" : "input", v.onInput_wysiwyg), s.removeEventListener("keydown", v.onKeyDown_wysiwyg), s.removeEventListener("keyup", v.onKeyUp_wysiwyg), s.removeEventListener("paste", v.onPaste_wysiwyg), s.removeEventListener("copy", v.onCopy_wysiwyg), s.removeEventListener("cut", v.onCut_wysiwyg), s.removeEventListener("drop", v.onDrop_wysiwyg), s.removeEventListener("scroll", v.onScroll_wysiwyg), s.removeEventListener("mousemove", v.onMouseMove_wysiwyg), d._lineBreakerButton.removeEventListener("mousedown", v._onMouseDown_lineBreak), d._lineBreakerButton.removeEventListener("click", v._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", v._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", v._lineBreakerBind.b), v._lineBreakerBind = null, s.removeEventListener("touchstart", v.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("touchend", v.onClick_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("focus", v.onFocus_wysiwyg), s.removeEventListener("blur", v.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", v._codeViewAutoHeight), e.element.code.removeEventListener("keyup", v._codeViewAutoHeight), e.element.code.removeEventListener("paste", v._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", v.onMouseDown_resizingBar), v._resizeObserver && (v._resizeObserver.unobserve(e.element.wysiwygFrame), v._resizeObserver = null), v._toolbarObserver && (v._toolbarObserver.unobserve(e.element._toolbarShadow), v._toolbarObserver = null), c.removeEventListener("resize", v.onResize_window), c.removeEventListener("scroll", v.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (a.length === 0) {
        a = null;
        return;
      }
      v._responsiveCurrentSize = "default";
      const s = v._responsiveButtonSize = [], r = v._responsiveButtons = { default: a[0] };
      for (let f = 1, h = a.length, m, g; f < h; f++)
        g = a[f], m = g[0] * 1, s.push(m), r[m] = g[1];
      s.sort(function(f, h) {
        return f - h;
      }).unshift("default");
    }
  }, w = {
    /**
     * @description Core, Util object
     */
    core: d,
    util: o,
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
      d.submenuOff(), d.containerOff(), d.moreLayerOff();
      const r = Yi._createToolBar(u, s, d.plugins, l);
      a = r.responsiveButtons, v._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const f = Xi(e.element.originElement, d._getConstructed(e.element), l);
      e.element = f.element, e.tool = f.tool, l.iframe && (e.element.wysiwyg = d._wd.body), d._recoverButtonStates(), d._cachingButtons(), d.history._resetCachingButton(), d.effectNode = null, d.hasFocus && v._applyTagEffects(), d.isReadOnly && o.setDisabledButtons(!0, d.resizingDisabledButtons), typeof w.onSetToolbarButtons == "function" && w.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), d);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(s) {
      v._removeEvent(), d._resetComponents(), o.removeClass(d._styleCommandMap.showBlocks, "active"), o.removeClass(d._styleCommandMap.codeView, "active"), d._variable.isCodeView = !1, d._iframeAuto = null, d.plugins = s.plugins || d.plugins;
      const r = [l, s].reduce(function(g, p) {
        for (let y in p)
          if (o.hasOwn(p, y))
            if (y === "plugins" && p[y] && g[y]) {
              let C = g[y], _ = p[y];
              C = C.length ? C : c.Object.keys(C).map(function(S) {
                return C[S];
              }), _ = _.length ? _ : c.Object.keys(_).map(function(S) {
                return _[S];
              }), g[y] = _.filter(function(S) {
                return C.indexOf(S) === -1;
              }).concat(C);
            } else
              g[y] = p[y];
        return g;
      }, {}), f = e.element, h = f.wysiwyg.innerHTML, m = Yi._setOptions(r, e, l);
      m.callButtons && (t = m.callButtons, d.initPlugins = {}), m.plugins && (d.plugins = i = m.plugins), f._menuTray.children.length === 0 && (this._menuTray = {}), a = m.toolbar.responsiveButtons, d.options = l = r, d.lang = n = l.lang, l.iframe && f.wysiwygFrame.addEventListener("load", function() {
        o._setIframeDocument(this, l), d._setOptionsInit(f, h);
      }), f.editorArea.appendChild(f.wysiwygFrame), l.iframe || d._setOptionsInit(f, h);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(s) {
      const r = l._editorStyles = o._setDefaultOptionStyle(l, s), f = e.element;
      f.topArea.style.cssText = r.top, f.code.style.cssText = l._editorStyles.frame, f.code.style.display = "none", l.height === "auto" ? f.code.style.overflow = "hidden" : f.code.style.overflow = "", l.iframe ? (f.wysiwygFrame.style.cssText = r.frame, f.wysiwyg.style.cssText = r.editor) : f.wysiwygFrame.style.cssText = r.frame + r.editor;
    },
    /**
     * @description Open a notice area
     * @param {String} message Notice message
     */
    noticeOpen: function(s) {
      d.notice.open.call(d, s);
    },
    /**
     * @description Close a notice area
     */
    noticeClose: function() {
      d.notice.close.call(d);
    },
    /**
     * @description Copying the contents of the editor to the original textarea and execute onSave callback
     * * not working during enabled codeView mode
     */
    save: function() {
      const s = d.getContents(!1);
      e.element.originElement.value = s, v.onSave_wysiwyg(s, d);
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
      return d.getContents(s);
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
      return s = typeof s == "string" ? s : l.charCounterType, d.getCharLength(d._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, s);
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
      !d.plugins.image || !s || (d.initPlugins.image ? d.plugins.image.submitAction.call(d, s) : d.callPlugin("image", d.plugins.image.submitAction.bind(d, s), null), d.focus());
    },
    /**
     * @description Inserts an HTML element or HTML string or plain string at the current cursor position
     * @param {Element|String} html HTML Element or HTML string or plain string
     * @param {Boolean} notCleaningData If true, inserts the HTML string without refining it with core.cleanHTML.
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} rangeSelection If true, range select the inserted node.
     */
    insertHTML: function(s, r, f, h) {
      if (e.element.wysiwygFrame.contains(d.getSelection().focusNode) || d.focus(), typeof s == "string") {
        r || (s = d.cleanHTML(s, null, null));
        try {
          if (o.isListCell(o.getFormatElement(d.getSelectionNode(), null))) {
            const B = u.createRange().createContextualFragment(s).childNodes;
            d._isFormatData(B) && (s = d._convertListCell(B));
          }
          const g = u.createRange().createContextualFragment(s).childNodes;
          if (f) {
            const T = d._charTypeHTML ? "outerHTML" : "textContent";
            let B = "";
            for (let A = 0, $ = g.length; A < $; A++)
              B += g[A][T];
            if (!d.checkCharCount(B, null)) return;
          }
          let p, y, C, _, S;
          for (; p = g[0]; ) {
            if (_ && _.nodeType === 3 && y && y.nodeType === 1 && o.isBreak(p)) {
              _ = p, o.removeItem(p);
              continue;
            }
            C = d.insertNode(p, y, !1), y = C.container || C, S || (S = C), _ = p;
          }
          _.nodeType === 3 && y.nodeType === 1 && (y = _);
          const D = y.nodeType === 3 ? C.endOffset || y.textContent.length : y.childNodes.length;
          h ? d.setRange(S.container || S, S.startOffset || 0, y, D) : d.setRange(y, D, y, D);
        } catch (m) {
          if (d.isDisabled || d.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + m), d.execCommand("insertHTML", !1, s);
        }
      } else if (o.isComponent(s))
        d.insertComponent(s, !1, f, !1);
      else {
        let m = null;
        (o.isFormatElement(s) || o.isMedia(s)) && (m = o.getFormatElement(d.getSelectionNode(), null)), d.insertNode(s, m, f);
      }
      d.effectNode = null, d.focus(), d.history.push(!1);
    },
    /**
     * @description Change the contents of the suneditor
     * @param {String|undefined} contents Contents to Input
     */
    setContents: function(s) {
      d.setContents(s);
    },
    /**
     * @description Add contents to the suneditor
     * @param {String} contents Contents to Input
     */
    appendContents: function(s) {
      const r = d.convertContentsForEditor(s);
      if (d._variable.isCodeView)
        d._setCodeView(d._getCodeView() + `
` + d.convertHTMLForCodeView(r, !1));
      else {
        const f = o.createElement("DIV");
        f.innerHTML = r;
        const h = e.element.wysiwyg, m = f.children;
        for (let g = 0, p = m.length; g < p; g++)
          m[g] && h.appendChild(m[g]);
      }
      d.history.push(!1);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(s) {
      d.isReadOnly = s, o.setDisabledButtons(!!s, d.resizingDisabledButtons), s ? (d.controllersOff(), d.submenuActiveButton && d.submenuActiveButton.disabled && d.submenuOff(), d._moreLayerActiveButton && d._moreLayerActiveButton.disabled && d.moreLayerOff(), d.containerActiveButton && d.containerActiveButton.disabled && d.containerOff(), d.modalForm && d.plugins.dialog.close.call(d), e.element.code.setAttribute("readOnly", "true"), o.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), o.removeClass(e.element.wysiwygFrame, "se-read-only")), l.codeMirrorEditor && l.codeMirrorEditor.setOption("readOnly", !!s);
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
      s.display === "none" && (s.display = l.display);
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
      d.submenuOff(), d.containerOff(), d.controllersOff(), d.notice && d.notice.close.call(d), d.modalForm && d.plugins.dialog.close.call(d), d.history._destroy(), v._removeEvent(), o.removeItem(e.element.toolbar), o.removeItem(e.element.topArea);
      for (let s in d.functions)
        o.hasOwn(d, s) && delete d.functions[s];
      for (let s in d)
        o.hasOwn(d, s) && delete d[s];
      for (let s in v)
        o.hasOwn(v, s) && delete v[s];
      for (let s in e)
        o.hasOwn(e, s) && delete e[s];
      for (let s in t)
        o.hasOwn(t, s) && delete t[s];
      for (let s in this)
        o.hasOwn(this, s) && delete this[s];
    },
    /**
     * @description Toolbar methods
     */
    toolbar: {
      /**
       * @description Disable the toolbar
       */
      disable: function() {
        d.submenuOff(), d.moreLayerOff(), d.containerOff(), e.tool.cover.style.display = "block";
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
        d._isInline ? v._showToolbarInline() : (e.element.toolbar.style.display = "", e.element._stickyDummy.style.display = ""), v.onResize_window();
      },
      /**
       * @description Hide the toolbar
       */
      hide: function() {
        d._isInline ? v._hideToolbar() : (e.element.toolbar.style.display = "none", e.element._stickyDummy.style.display = "none"), v.onResize_window();
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
        d.controllersOff(), d.modalForm && d.plugins.dialog.close.call(d), e.element.wysiwyg.setAttribute("contenteditable", !1), d.isDisabled = !0, l.codeMirrorEditor ? l.codeMirrorEditor.setOption("readOnly", !0) : e.element.code.setAttribute("disabled", "disabled");
      },
      /**
       * @description Enable the wysiwyg area
       */
      enable: function() {
        e.element.wysiwyg.setAttribute("contenteditable", !0), d.isDisabled = !1, l.codeMirrorEditor ? l.codeMirrorEditor.setOption("readOnly", !1) : e.element.code.removeAttribute("disabled");
      }
    }
  };
  d.functions = w, d.options = l;
  let k = e.element, L = k.originElement, R = k.topArea;
  return L.style.display = "none", R.style.display = "block", l.iframe && k.wysiwygFrame.addEventListener("load", function() {
    o._setIframeDocument(this, l), d._editorInit(!1, l.value), l.value = null;
  }), typeof L.nextElementSibling == "object" ? L.parentNode.insertBefore(R, L.nextElementSibling) : L.parentNode.appendChild(R), k.editorArea.appendChild(k.wysiwygFrame), k = L = R = null, l.iframe || (d._editorInit(!1, l.value), l.value = null), w;
}
const Br = {
  /**
   * @description Returns the create function with preset options.
   * If the options overlap, the options of the 'create' function take precedence.
   * @param {Json} options Initialization options
   * @returns {Object}
   */
  init: function(e) {
    return {
      create: (function(t, i) {
        return this.create(t, i, e);
      }).bind(this)
    };
  },
  /**
   * @description Create the suneditor
   * @param {String|Element} idOrElement textarea Id or textarea element
   * @param {JSON|Object} options user options
   * @returns {Object}
   */
  create: function(e, t, i) {
    he._propertiesInit(), typeof t != "object" && (t = {}), i && (t = [i, t].reduce(function(a, u) {
      for (let c in u)
        if (he.hasOwn(u, c))
          if (c === "plugins" && u[c] && a[c]) {
            let o = a[c], b = u[c];
            o = o.length ? o : Object.keys(o).map(function(d) {
              return o[d];
            }), b = b.length ? b : Object.keys(b).map(function(d) {
              return b[d];
            }), a[c] = b.filter(function(d) {
              return o.indexOf(d) === -1;
            }).concat(o);
          } else
            a[c] = u[c];
      return a;
    }, {}));
    const n = typeof e == "string" ? document.getElementById(e) : e;
    if (!n)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const l = Yi.init(n, t);
    if (l.constructed._top.id && document.getElementById(l.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + l.constructed._top.id + '")');
    return Tr(Xi(n, l.constructed, l.options), l.pluginCallButtons, l.plugins, l.options.lang, t, l._responsiveButtons);
  }
}, zr = ["innerHTML", "id", "tabindex"], Nr = /* @__PURE__ */ be({
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
  setup(e, { expose: t, emit: i }) {
    const n = i, l = e, a = Y(null), u = Y(l.modelValue);
    let c = null, o;
    const b = Y(l.focusing), d = (L) => {
      b.value = !0, n("focus", L);
    }, v = (L) => {
      b.value = !1, n("blur", L);
    }, w = (L) => {
      o && clearTimeout(o), o = setTimeout(() => {
        mn(L) === "" ? u.value = "" : u.value = L;
      }, 100);
    }, k = () => {
      let L = {
        //@ts-ignore
        lang: on[l.lang] ? on[l.lang] : Ui,
        plugins: {
          ...Sr
        },
        ...Lr
      };
      c = Br.create(l.id, L), c.onChange = (R) => {
        w(R), l.disabled ? c == null || c.disabled() : c == null || c.enabled();
      }, c.onKeyUp = (R, s) => {
        w(s.getContents(!1));
      }, c.onBlur = () => {
        v();
      }, c.onClick = () => {
        d();
      };
    };
    return de(() => l.modelValue, (L) => u.value = L), de(u, (L) => n("update:modelValue", L)), Hi(() => {
      k();
    }), t({
      doSetValue: (L) => {
        c && c.setContents(L);
      }
    }), (L, R) => (F(), oe("div", {
      innerHTML: u.value,
      ref_key: "input",
      ref: a,
      id: L.id,
      tabindex: L.tabindex
    }, null, 8, zr));
  }
}), Ar = {
  key: 0,
  class: "lkt-field--searchable-box"
}, Rr = ["value", "placeholder"], Ir = { key: 0 }, Dr = ["title"], Mr = /* @__PURE__ */ be({
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
  setup(e, { expose: t, emit: i }) {
    const n = i, l = e, a = l.multiple && l.canTag, u = Y(l.searchString), c = Y(null), o = Y(l.showOptions);
    de(o, (p) => {
      a || n("update:showOptions", p);
    });
    const b = Y(l.focusing), d = Y(!1), v = Y(!1), w = () => {
      Ot(() => {
        b.value = d.value || v.value, o.value = b.value;
      });
    };
    de(d, (p) => {
      p && (v.value = !1), w();
    }), de(v, (p) => {
      p && (d.value = !1), w();
    }), de(b, (p) => {
      n(p ? "focus" : "blur");
    });
    let k, L;
    const R = (p) => {
      k = setTimeout(() => {
        d.value = !1;
      }, 100);
    }, s = (p) => {
      d.value = !0, a && p.key === "Enter" ? (n("tag", u.value), u.value = "") : ["ArrowDown", "ArrowUp", "Enter"].includes(p.key) ? n("navigate", p) : n("search", u.value);
    }, r = (p) => {
      d.value = !0;
    }, f = (p) => {
      L = setTimeout(() => {
        v.value = !1;
      }, 100);
    }, h = (p) => {
      v.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(p.key) && n("navigate", p);
    }, m = (p) => {
      v.value = !0;
    }, g = (p) => {
      n("untag", p);
    };
    return t({
      keepFocused: () => {
        clearTimeout(k), clearTimeout(L), c.value && c.value.focus();
      }
    }), de(() => l.pickedOptions, () => {
      n("change");
    }, { deep: !0 }), (p, y) => {
      const C = re("lkt-tag"), _ = re("lkt-button");
      return F(), oe(Ve, null, [
        p.searchable && (p.multiple || p.searchMode) || N(a) ? (F(), oe("div", Ar, [
          p.multiple ? (F(), G(C, {
            key: 0,
            icon: p.optionsIcon,
            text: p.pickedOptions.length
          }, null, 8, ["icon", "text"])) : p.pickedOptions.length > 0 ? (F(), G(C, { key: 1 }, {
            default: se(() => [
              j(Bt, {
                option: p.pickedOptions[0],
                "option-slot": p.optionSlot,
                icon: p.optionsIcon,
                text: p.optionsText,
                "custom-class": p.optionsClass,
                modal: p.optionsModal,
                "modal-data": p.optionsModalData,
                download: p.optionsDownload,
                "label-formatter": p.optionsLabelFormatter,
                editable: p.editable
              }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable"])
            ]),
            _: 1
          })) : le("", !0),
          Ze(fe("input", {
            "onUpdate:modelValue": y[0] || (y[0] = (S) => u.value = S),
            ref_key: "queryField",
            ref: c,
            value: u.value,
            placeholder: p.searchPlaceholder,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: s,
            onBlur: R,
            onFocus: r
          }, null, 40, Rr), [
            [Oi, u.value]
          ])
        ])) : le("", !0),
        Ze(j(_, {
          ref: "selectButton",
          type: N(a) ? "content" : "",
          class: "lkt-field--toggle-button lkt-field--select-button",
          "open-tooltip": o.value,
          "onUpdate:openTooltip": y[1] || (y[1] = (S) => o.value = S),
          onKeyup: h,
          onBlur: f,
          onFocus: m
        }, {
          default: se(() => [
            N(a) || p.multiple && p.pickedOptions.length > 0 ? (F(), oe(Ve, { key: 0 }, [
              p.multipleDisplayEdition === N(si).Count ? (F(), oe("div", Ir, Et(p.pickedOptions.length), 1)) : (F(), oe("ul", {
                key: 1,
                class: Te(["lkt-field-select-read", `multiple-display-${p.multipleDisplayEdition}`])
              }, [
                (F(!0), oe(Ve, null, rt(p.pickedOptions, (S, D) => (F(), oe("li", {
                  title: S.label
                }, [
                  j(Bt, {
                    option: p.pickedOptions[D],
                    "option-slot": p.optionSlot,
                    icon: p.optionsIcon,
                    text: p.optionsText,
                    "custom-class": p.optionsClass,
                    modal: p.optionsModal,
                    "modal-data": p.optionsModalData,
                    download: p.optionsDownload,
                    "label-formatter": p.optionsLabelFormatter,
                    editable: p.editable,
                    "is-tag": N(a),
                    onClickIcon: g
                  }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable", "is-tag"])
                ], 8, Dr))), 256))
              ], 2))
            ], 64)) : !p.multiple && p.pickedOptions.length > 0 ? (F(), G(Bt, {
              key: 1,
              option: p.pickedOptions[0],
              "option-slot": p.optionSlot,
              icon: p.optionsIcon,
              text: p.optionsText,
              "custom-class": p.optionsClass,
              modal: p.optionsModal,
              "modal-data": p.optionsModalData,
              download: p.optionsDownload,
              "label-formatter": p.optionsLabelFormatter,
              editable: p.editable
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable"])) : le("", !0)
          ]),
          _: 1
        }, 8, ["type", "open-tooltip"]), [
          [xt, p.multiple || !p.searchable || !p.searchMode]
        ])
      ], 64);
    };
  }
}), Vr = { class: "lkt-calc--formula" }, Fr = { class: "lkt-calc--custom-pad" }, Hr = { class: "lkt-calc--pad" }, Or = { class: "lkt-calc--numeric-pad" }, Ur = { class: "lkt-calc--math-pad" }, Pr = { class: "lkt-calc--advance-math-pad" }, Wr = /* @__PURE__ */ be({
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
    const i = t, n = e, l = Y(n.modelValue), a = Y(null);
    de(l, (m) => i("update:modelValue", m));
    const u = Y(n.focusing), c = Y(null);
    let o;
    const b = () => {
      clearTimeout(o), a.value && typeof a.value.focus == "function" && a.value.focus();
    }, d = (m) => {
      l.value += "" + m, b();
    }, v = (m) => {
      l.value += " " + m + " ", b();
    }, w = (m) => {
      l.value += " " + m + "(", b();
    }, k = () => {
      l.value += " sqrt(", b();
    }, L = (m) => {
      l.value += "" + m, b();
    }, R = () => {
      l.value += ".", b();
    }, s = () => {
      l.value += " ", b();
    }, r = (m) => {
      l.value += "" + m.value, b();
    }, f = () => {
      u.value = !0;
    }, h = () => {
      o = setTimeout(() => {
        u.value = !1;
      }, 100);
    };
    return de(u, (m) => {
      i(m ? "focus" : "blur");
    }), (m, g) => {
      const p = re("lkt-button"), y = re("lkt-tooltip");
      return F(), oe("div", {
        ref_key: "container",
        ref: c
      }, [
        fe("div", Vr, [
          Ze(fe("input", {
            type: "text",
            ref_key: "input",
            ref: a,
            "onUpdate:modelValue": g[0] || (g[0] = (C) => l.value = C),
            onFocus: f,
            onBlur: h
          }, null, 544), [
            [Oi, l.value]
          ])
        ]),
        m.editable ? (F(), G(y, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: u.value,
          "onUpdate:modelValue": g[27] || (g[27] = (C) => u.value = C),
          referrer: c.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: se(() => [
            fe("div", Fr, [
              (F(!0), oe(Ve, null, rt(m.options, (C) => (F(), G(p, {
                icon: C.icon,
                text: C.label,
                onClick: (_) => r(C)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            fe("div", Hr, [
              fe("div", Or, [
                j(p, {
                  onClick: g[1] || (g[1] = (C) => d(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                j(p, {
                  onClick: g[2] || (g[2] = (C) => d(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                j(p, {
                  onClick: g[3] || (g[3] = (C) => d(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                j(p, {
                  onClick: g[4] || (g[4] = (C) => d(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                j(p, {
                  onClick: g[5] || (g[5] = (C) => d(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                j(p, {
                  onClick: g[6] || (g[6] = (C) => d(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                j(p, {
                  onClick: g[7] || (g[7] = (C) => d(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                j(p, {
                  onClick: g[8] || (g[8] = (C) => d(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                j(p, {
                  onClick: g[9] || (g[9] = (C) => d(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                j(p, {
                  onClick: g[10] || (g[10] = (C) => R()),
                  text: "."
                }),
                j(p, {
                  onClick: g[11] || (g[11] = (C) => d(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                j(p, {
                  onClick: g[12] || (g[12] = (C) => s()),
                  text: " "
                })
              ]),
              fe("div", Ur, [
                j(p, {
                  onClick: g[13] || (g[13] = (C) => L("[")),
                  text: "["
                }),
                j(p, {
                  onClick: g[14] || (g[14] = (C) => L("]")),
                  text: "]"
                }),
                j(p, {
                  onClick: g[15] || (g[15] = (C) => L("(")),
                  text: "("
                }),
                j(p, {
                  onClick: g[16] || (g[16] = (C) => L(")")),
                  text: ")"
                }),
                j(p, {
                  onClick: g[17] || (g[17] = (C) => v("+")),
                  text: "+"
                }),
                j(p, {
                  onClick: g[18] || (g[18] = (C) => v("-")),
                  text: "−"
                }),
                j(p, {
                  onClick: g[19] || (g[19] = (C) => v("*")),
                  text: "×"
                }),
                j(p, {
                  onClick: g[20] || (g[20] = (C) => v("/")),
                  text: "÷"
                })
              ]),
              fe("div", Pr, [
                j(p, {
                  onClick: g[21] || (g[21] = (C) => k()),
                  text: "√"
                }),
                j(p, {
                  onClick: g[22] || (g[22] = (C) => w("log")),
                  text: "log"
                }),
                j(p, {
                  onClick: g[23] || (g[23] = (C) => w("ln")),
                  text: "ln"
                }),
                j(p, {
                  onClick: g[24] || (g[24] = (C) => w("sin")),
                  text: "sin"
                }),
                j(p, {
                  onClick: g[25] || (g[25] = (C) => w("cos")),
                  text: "cos"
                }),
                j(p, {
                  onClick: g[26] || (g[26] = (C) => w("tan")),
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
}), $r = /* @__PURE__ */ be({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = ee(() => {
      let u = Dl(t.validation.code, t.stack), c = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, o = Dl(t.validation.status + "-" + t.validation.code, t.stack);
      return o && (u = o), u ? u.startsWith("__:") ? gn(u.substring(3), c) : xo(u, c, ":", "") : t.validation.code;
    }), n = ee(() => te.validationIconSlot !== ""), l = ee(() => te.validationIconSlot), a = ee(() => {
      let u = [];
      return u.push("code-" + t.validation.code), u.push("is-" + t.validation.status), u.join(" ");
    });
    return (u, c) => (F(), oe("div", {
      class: Te(["lkt-field-validation-message", a.value])
    }, [
      n.value ? (F(), G(Nt(l.value), { key: 0 })) : le("", !0),
      Ut(" " + Et(i.value), 1)
    ], 2));
  }
}), Zr = {
  key: 0,
  class: "lkt-field-validation-info"
}, qr = /* @__PURE__ */ be({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = Y(t.items), n = Y(!1);
    return de(() => t.items, (l) => {
      n.value = !0, Ot(() => n.value = !1);
    }, { deep: !0 }), (l, a) => n.value ? le("", !0) : (F(), oe("div", Zr, [
      (F(!0), oe(Ve, null, rt(i.value, (u) => (F(), G($r, {
        validation: u,
        stack: l.stack,
        key: u.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), jr = ["id"], Gr = /* @__PURE__ */ be({
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
    const i = t, n = e, l = Y(n.modelValue), a = Y(n.focusing);
    let u, c;
    const o = Y({}), b = () => {
      clearTimeout(c), c = setTimeout(() => {
        o.value = {
          query: l.value
        };
      }, 300);
    }, d = () => {
      a.value = !0;
    }, v = () => {
      u = setTimeout(() => {
        a.value = !1;
      }, 100);
    };
    de(a, (k) => {
      i(k ? "focus" : "blur");
    });
    const w = () => {
      clearTimeout(u), setTimeout(() => {
        d();
      }, 100);
    };
    return (k, L) => {
      const R = re("lkt-table"), s = re("lkt-tooltip");
      return F(), oe(Ve, null, [
        Ze(fe("input", {
          id: k.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": L[0] || (L[0] = (r) => l.value = r),
          onFocus: d,
          onBlur: v,
          onKeyup: b
        }, null, 40, jr), [
          [Oi, l.value]
        ]),
        k.editable && k.hadFirstFocus ? (F(), G(s, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: a.value,
          "onUpdate:modelValue": L[1] || (L[1] = (r) => a.value = r),
          referrer: k.container,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: se(() => [
            j(R, ue({
              type: N(Vi).Ul,
              itemsContainerClass: "lkt-field--dropdown-options",
              paginator: {
                resource: k.optionsResource,
                resourceData: o.value
              }
            }, {
              onPage: w,
              onClick: w
            }), {
              item: se(({ item: r, index: f, isLoading: h, canCreate: m, canUpdate: g, canDrop: p, canRead: y, doDrop: C }) => [
                j(Bt, {
                  option: r,
                  onClick: w
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
}), Kr = {
  key: 0,
  class: "lkt-field-main"
}, Yr = {
  key: 3,
  class: "lkt-field--read-value"
}, Xr = ["innerHTML", "title"], Jr = ["title"], Qr = { key: 0 }, eu = ["title"], tu = ["innerHTML"], iu = ["innerHTML", "title"], lu = ["innerHTML", "title"], nu = /* @__PURE__ */ be({
  __name: "LktFieldValue",
  props: {
    type: { default: Z.Text },
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
    const i = t, n = Qi(), l = e, a = () => i("click"), u = ee(() => {
      switch (l.type) {
        case Z.Select:
          if (l.multiple && Array.isArray(l.value) && l.value.length > 0 || l.multiple && l.multipleDisplay === si.Count || !l.multiple && l.value) return "";
          break;
        case Z.Date:
          if (l.value !== "") return "";
          break;
        default:
          if (l.value !== "") return "";
      }
      return te.customValueSlots[l.emptyValueSlot] ?? te.defaultEmptyValueSlot;
    }), c = ee(() => te.customValueSlots[l.valueSlot] ?? "");
    let o = l.value;
    return l.type === Z.Select && l.multiple && !Array.isArray(o) && (o = []), (l.type === Z.Textarea || l.type === Z.Text) && (typeof ((b = l.readModeConfig) == null ? void 0 : b.textMaxLength) < "u" && o.length > l.readModeConfig.textMaxLength ? o = o.substring(0, l.readModeConfig.textMaxLength) + "..." : typeof te.readTextMaxLength < "u" && o.length > te.readTextMaxLength && (o = o.substring(0, te.readTextMaxLength) + "...")), (d, v) => {
      const w = re("lkt-image"), k = re("lkt-button"), L = re("lkt-anchor"), R = re("lkt-tag");
      return F(), oe("div", {
        class: "lkt-field--read",
        onClick: a
      }, [
        N(n).value ? at(d.$slots, "value", {
          key: 0,
          value: N(o),
          title: d.title,
          data: d.slotData
        }) : u.value ? (F(), G(Nt(u.value), {
          key: 1,
          data: d.slotData
        }, null, 8, ["data"])) : c.value ? (F(), G(Nt(c.value), {
          key: 2,
          value: N(o),
          title: d.title,
          data: d.slotData
        }, null, 8, ["value", "title", "data"])) : (F(), oe(Ve, { key: 3 }, [
          d.type === N(Z).File || d.type === N(Z).Image ? (F(), oe("div", Kr, [
            j(k, {
              class: "lkt-field--toggle-button",
              text: d.type === N(Z).File ? d.fileName : "",
              disabled: ""
            }, {
              default: se(() => [
                d.type === N(Z).Image ? (F(), G(w, {
                  key: 0,
                  src: N(o),
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : le("", !0),
                d.type === N(Z).Image ? (F(), G(w, {
                  key: 1,
                  src: N(o),
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : le("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : d.type === N(Z).Email ? (F(), G(L, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: d.title,
            to: N(o)
          }, {
            default: se(() => [
              Ut(Et(N(o)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : d.type === N(Z).Tel ? (F(), G(L, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: d.title,
            to: N(o)
          }, {
            default: se(() => [
              Ut(Et(N(o)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : N(Lt).includes(d.type) ? (F(), oe("div", Yr, [
            j(R, {
              icon: N(o) ? "lkt-icn-check" : "lkt-icn-cancel",
              "featured-text": d.label,
              title: d.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : d.type === N(Z).Date ? (F(), oe("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: N(o),
            title: d.title
          }, null, 8, Xr)) : d.type === N(Z).Select ? (F(), oe("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: d.title
          }, [
            d.multiple ? (F(), oe(Ve, { key: 0 }, [
              d.multipleDisplay === N(si).Count ? (F(), oe("div", Qr, Et(N(o).length), 1)) : N(o).length > 0 ? (F(), oe("ul", {
                key: 1,
                class: Te(["lkt-field-select-read", `multiple-display-${d.multipleDisplay}`])
              }, [
                (F(!0), oe(Ve, null, rt(N(o), (s, r) => {
                  var f;
                  return F(), oe("li", {
                    title: (f = N(o)[r]) == null ? void 0 : f.label
                  }, [
                    j(Bt, {
                      option: N(o)[r],
                      "option-slot": d.optionSlot,
                      icon: d.optionsIcon,
                      text: d.optionsText,
                      "custom-class": d.optionsClass,
                      modal: d.optionsModal,
                      "modal-data": d.optionsModalData,
                      download: d.optionsDownload,
                      "label-formatter": d.optionsLabelFormatter
                    }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter"])
                  ], 8, eu);
                }), 256))
              ], 2)) : le("", !0)
            ], 64)) : N(o).length > 0 ? (F(), G(Bt, {
              key: 1,
              option: N(o)[0],
              "option-slot": d.optionSlot,
              icon: d.optionsIcon,
              text: d.optionsText,
              "custom-class": d.optionsClass,
              modal: d.optionsModal,
              "modal-data": d.optionsModalData,
              download: d.optionsDownload,
              "label-formatter": d.optionsLabelFormatter
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter"])) : le("", !0)
          ], 8, Jr)) : d.modal ? (F(), G(k, {
            key: 6,
            class: "lkt-field--read-value",
            title: d.title,
            modal: d.modal,
            "modal-key": d.modalKey,
            "modal-data": d.modalData
          }, {
            default: se(() => [
              fe("div", { innerHTML: N(o) }, null, 8, tu)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : d.download ? (F(), G(Bt, {
            key: 7,
            class: "lkt-field--read-value",
            option: { value: "", label: N(o) },
            download: d.download,
            text: d.optionsText,
            "custom-class": d.optionsClass
          }, null, 8, ["option", "download", "text", "custom-class"])) : d.type === N(Z).Number ? (F(), oe("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: d.title,
            title: d.title
          }, null, 8, iu)) : (F(), oe("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: N(o),
            title: d.title
          }, null, 8, lu))
        ], 64))
      ]);
    };
  }
}), ou = ["name", "id", "disabled", "readonly", "placeholder", "accept"], su = {
  key: 2,
  class: "lkt-button lkt-field--toggle-button"
}, au = { class: "lkt-grid-1" }, ru = /* @__PURE__ */ be({
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
    "upload-error"
  ],
  setup(e, { expose: t, emit: i }) {
    const n = i, l = e, a = Y(null), u = Y(null), c = Y(l.modelValue), o = Y(l.fileName), b = Y(l.uploading), d = (k) => {
      let L = k.target;
      if (L.files && L.files[0]) {
        o.value = L.files[0].name;
        const R = new FileReader();
        R.onload = (s) => {
          if (c.value = s.target.result, l.resource) {
            b.value = !0, n("uploading");
            let r = JSON.parse(JSON.stringify(l.resourceData));
            r.files = L.files[0], Di(l.resource, r).then((f) => {
              if (b.value = !1, !f.success) {
                n("upload-error", f);
                return;
              }
              c.value = f.data, n("upload-success", f);
            }).catch((f) => {
              b.value = !1, n("upload-error", f);
            });
          }
        }, R.readAsDataURL(L.files[0]);
      }
      n("change", k);
    };
    de(c, (k) => n("update:modelValue", k)), de(o, (k) => n("update:fileName", k)), t({
      click: () => {
        var k;
        (k = u.value) == null || k.click();
      }
    });
    const v = Y(typeof l.fileBrowserConfig == "object" && Object.keys(l.fileBrowserConfig).length > 0), w = (k) => {
      console.log("confirmed selection!: ", k), c.value = k[0].src;
    };
    return (k, L) => {
      const R = re("lkt-image"), s = re("lkt-button");
      return F(), oe(Ve, null, [
        fe("input", {
          ref_key: "inputElement",
          ref: a,
          type: "file",
          name: k.name,
          id: k.id,
          disabled: k.disabled,
          readonly: k.readonly,
          placeholder: k.placeholder,
          accept: k.accept,
          onChange: d
        }, null, 40, ou),
        v.value ? k.isImage ? k.isImage ? (F(), oe("div", su, [
          k.isImage ? (F(), G(R, {
            key: 0,
            src: c.value,
            class: "lkt-field--image-cover"
          }, null, 8, ["src"])) : le("", !0),
          k.isImage ? (F(), G(R, {
            key: 1,
            src: c.value,
            class: "lkt-field--image-main"
          }, {
            overlay: se(() => [
              fe("div", null, [
                fe("div", au, [
                  j(s, {
                    ref_key: "buttonRef",
                    ref: u,
                    "click-ref": a.value,
                    text: "Upload",
                    icon: "lkt-icn-upload",
                    disabled: k.disabled
                  }, null, 8, ["click-ref", "disabled"]),
                  j(s, ue({ ref: "fileBrowserButtonRef" }, {
                    text: "Explore files",
                    icon: "lkt-icn-search",
                    disabled: k.disabled,
                    modal: "lkt-file-browser",
                    modalData: {
                      fileBrowserConfig: k.fileBrowserConfig,
                      onConfirmSelection: w
                    }
                  }), null, 16)
                ])
              ])
            ]),
            _: 1
          }, 8, ["src"])) : le("", !0)
        ])) : le("", !0) : (F(), G(s, {
          key: 1,
          ref_key: "buttonRef",
          ref: u,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: o.value,
          disabled: k.disabled
        }, null, 8, ["click-ref", "text", "disabled"])) : (F(), G(s, {
          key: 0,
          ref_key: "buttonRef",
          ref: u,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: k.isImage ? "" : o.value,
          disabled: k.disabled
        }, {
          default: se(() => [
            k.isImage ? (F(), G(R, {
              key: 0,
              src: c.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : le("", !0),
            k.isImage ? (F(), G(R, {
              key: 1,
              src: c.value,
              class: "lkt-field--image-main"
            }, null, 8, ["src"])) : le("", !0)
          ]),
          _: 1
        }, 8, ["click-ref", "text", "disabled"]))
      ], 64);
    };
  }
}), uu = { class: "lkt-calendar" }, du = { class: "calendar" }, cu = { class: "lkt-calendar--header-grid" }, fu = ["innerHTML"], hu = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, pu = { class: "lkt-calendar--day lkt-calendar--filling-day" }, mu = /* @__PURE__ */ be({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const i = t, n = e, l = Y(n.modelValue);
    de(() => n.modelValue, (h) => l.value = h, { deep: !0 }), de(l, (h) => i("update:modelValue", h));
    const a = Y(/* @__PURE__ */ new Date()), u = Y(/* @__PURE__ */ new Date());
    el(l.value) && typeof l.value < "u" && (u.value = new Date(l.value.getFullYear(), l.value.getMonth(), l.value.getDate()));
    const c = Y(u.value.getFullYear()), o = Y(u.value.getMonth()), b = Y(!1), d = Y(Gt("Y-m", u.value)), v = ee(() => new Date(c.value, o.value + 1, 0).getDate()), w = ee(() => new Date(c.value, o.value, 1).getDay()), k = () => {
      o.value > 11 && (o.value = 0, c.value += 1), o.value += 1, u.value.setFullYear(c.value, o.value), u.value = new Date(u.value), d.value = Gt("Y-m", u.value);
    }, L = () => {
      o.value < 0 && (o.value = 11, c.value -= 1), o.value -= 1, u.value.setFullYear(c.value, o.value), u.value = new Date(u.value), d.value = Gt("Y-m", u.value);
    }, R = (h) => typeof l.value > "u" || l.value.getFullYear() !== c.value || l.value.getMonth() !== o.value ? !1 : l.value.getDate() === h, s = (h) => typeof l.value > "u" || a.value.getFullYear() !== c.value || a.value.getMonth() !== o.value ? !1 : a.value.getDate() === h, r = (h) => ({
      "is-picked": R(h),
      "is-today": s(h)
    }), f = (h) => {
      var m;
      (m = l.value) == null || m.setFullYear(c.value, o.value, h), l.value = new Date(l.value);
    };
    return (h, m) => {
      const g = re("lkt-button");
      return F(), oe("div", uu, [
        fe("div", du, [
          fe("header", cu, [
            j(g, {
              class: "lkt-calendar--day",
              onClick: L
            }, {
              default: se(() => m[0] || (m[0] = [
                Ut("◀")
              ])),
              _: 1
            }),
            fe("div", {
              class: "lkt-calendar--header-text",
              innerHTML: d.value
            }, null, 8, fu),
            j(g, {
              class: "lkt-calendar--day",
              onClick: k
            }, {
              default: se(() => m[1] || (m[1] = [
                Ut("▶")
              ])),
              _: 1
            })
          ]),
          b.value ? le("", !0) : (F(), oe("div", hu, [
            m[2] || (m[2] = Co('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (F(!0), oe(Ve, null, rt(w.value, (p) => (F(), oe("div", pu))), 256)),
            (F(!0), oe(Ve, null, rt(v.value, (p) => (F(), G(g, {
              class: Te(["lkt-calendar--day", r(p)]),
              text: p.toString(),
              onClick: () => f(p)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        m[3] || (m[3] = fe("div", { class: "display-selected" }, [
          fe("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), gu = /* @__PURE__ */ be({
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
    const i = t, n = e, l = Y(void 0), a = Y(""), u = Y(n.modelValue), c = ee(() => te.dateReadFormat ? te.dateReadFormat : te.langDateReadFormat[n.lang] ? te.langDateReadFormat[n.lang] : te.defaultDateReadFormat ? te.defaultDateReadFormat : "Y-m-d"), o = (d) => {
      let v = new Date(d);
      el(v) && (l.value = v);
    }, b = () => {
      a.value = En(l.value, c.value);
    };
    return de(() => n.modelValue, (d) => {
      u.value = d, o(d);
    }), de(u, (d) => i("update:modelValue", d)), de(l, (d) => {
      typeof d > "u" ? u.value = "" : u.value = Gt("Y-m-d", d), b();
    }, { deep: !0 }), Hi(() => {
      o(n.modelValue), b();
    }), (d, v) => {
      const w = re("lkt-button");
      return F(), G(w, {
        type: N(At).Tooltip,
        class: "lkt-field--toggle-button",
        text: a.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: N(Cn).Bottom,
          locationX: N(_n).LeftCorner
        }
      }, {
        tooltip: se(() => [
          j(mu, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (k) => l.value = k)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["type", "text", "tooltip"]);
    };
  }
}), pn = (e, t) => typeof e == "object" && !Array.isArray(e) ? e[t] : e, qi = (e, t, i) => {
  if (t) {
    let n = '<i class="' + t + '"></i>';
    i ? e += n : e = n + e;
  }
  return e;
}, vu = { key: 1 }, Qn = /* @__PURE__ */ be({
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
    const n = Y(e.modelValue), l = (a, u) => {
    };
    return (a, u) => {
      const c = re("lkt-button");
      return F(), G(c, {
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        onClick: l
      }, {
        default: se(() => [
          n.value ? at(a.$slots, "item", {
            key: 0,
            item: n.value
          }) : (F(), oe("p", vu, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), bu = /* @__PURE__ */ be({
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
    const t = Qi(), i = e, n = Y(i.modelValue), l = ee(() => typeof i.max == "boolean" || n.value.length < i.max ? ["modal-create"] : []);
    return (a, u) => {
      const c = re("lkt-table");
      return F(), G(c, {
        type: "item",
        modelValue: n.value,
        "onUpdate:modelValue": u[0] || (u[0] = (o) => n.value = o),
        perms: l.value,
        "edit-mode": a.editable,
        "new-value-generator": () => {
        },
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        "required-items-for-top-create": 999999
      }, {
        item: se(({ item: o, index: b, isLoading: d, canCreate: v, canRead: w, canUpdate: k, canDrop: L, doDrop: R }) => [
          j(Qn, {
            modelValue: n.value[b],
            "onUpdate:modelValue": (s) => n.value[b] = s,
            "item-type": a.itemType
          }, Tt({ _: 2 }, [
            N(t).item ? {
              name: "item",
              fn: se(({ item: s }) => [
                at(a.$slots, "item", {
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
}), Xe = /* @__PURE__ */ be({
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
    const i = t, n = (a) => {
      i("input", a);
    }, l = (a) => {
      i("keydown", a);
    };
    return (a, u) => u[0] || (Ll(-1, !0), (u[0] = fe("div", {
      contenteditable: a.disabled ? "false" : "true",
      class: "lkt-element-editable-text",
      onInput: (c) => n(c),
      onKeydown: (c) => l(c),
      innerHTML: a.modelValue
    }, null, 40, ["contenteditable", "onInput", "onKeydown", "innerHTML"])).cacheIndex = 0, Ll(1), u[0]);
  }
}), yu = { class: "lkt-element-content" }, _u = {
  key: 0,
  class: "lkt-element-actions"
}, Ji = /* @__PURE__ */ be({
  __name: "ElementComponent",
  props: {
    element: {},
    parent: {},
    parentChildren: {},
    index: { default: -1 },
    lang: {},
    isPreview: { type: Boolean, default: !1 },
    canRenderActions: { type: Boolean, default: !0 },
    fileBrowserConfig: {}
  },
  setup(e) {
    const t = e, i = Y(!1), n = (u, c = "text") => {
      const o = u.target.innerHTML.trim();
      o !== t.element.props[c][a] && (t.element.props[c][a] = o);
    }, l = (u) => {
      if (!u.layout || t.isPreview) return "";
      let c = [];
      u.layout.type === qe.FlexRow && (!u.layout.amountOfItems || u.layout.amountOfItems.length === 0) ? c.push("lkt-flex-row") : u.layout.type === qe.FlexRows && (!u.layout.amountOfItems || u.layout.amountOfItems.length === 0) ? c.push("lkt-flex-rows") : u.layout.type === qe.FlexColumn && c.push("lkt-flex-column"), u.layout.amountOfItems && u.layout.amountOfItems.length > 0 && (u.layout.type === qe.FlexRow ? c.push(u.layout.amountOfItems.map((b) => `lkt-flex-row-${b}`).join(" ")) : u.layout.type === qe.FlexRows ? c.push(u.layout.amountOfItems.map((b) => `lkt-flex-rows-${b}`).join(" ")) : c.push(u.layout.amountOfItems.map((b) => `lkt-grid-${b}`).join(" "))), u.layout.alignItems && u.layout.alignItems.length > 0 && c.push(u.layout.alignItems.join(" ")), u.layout.justifyContent && u.layout.justifyContent.length > 0 && c.push(u.layout.justifyContent.join(" ")), c.length > 0 && c.push("layout-mode");
      let o = c.join(" ");
      return u.layout.type === qe.FlexRows && (o = o.replace("flex-row-", "flex-rows-")), o;
    }, a = t.lang ?? vn();
    return (u, c) => {
      var R, s;
      const o = re("lkt-box"), b = re("lkt-accordion"), d = re("lkt-image"), v = re("lkt-icon"), w = re("lkt-header"), k = re("lkt-button"), L = re("lkt-anchor");
      return F(), oe("div", {
        class: Te(["lkt-element", `is-${u.element.type} is-${u.element.id}`])
      }, [
        fe("div", yu, [
          u.element.type === N(pe).LktText ? (F(), G(Xe, {
            key: 0,
            modelValue: u.element.props.text[N(a)],
            "onUpdate:modelValue": c[0] || (c[0] = (r) => u.element.props.text[N(a)] = r),
            onInput: c[1] || (c[1] = (r) => n(r))
          }, null, 8, ["modelValue"])) : u.element.type === N(pe).LktLayoutBox ? (F(), G(o, {
            key: 1,
            icon: u.element.config.hasHeader && u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, Tt({
            default: se(() => [
              j(Ii, {
                modelValue: u.element.children,
                "onUpdate:modelValue": c[4] || (c[4] = (r) => u.element.children = r),
                "layout-selector": l(u.element),
                "is-child": "",
                lang: N(a),
                "is-preview": u.isPreview,
                parent: u.element
              }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent"])
            ]),
            _: 2
          }, [
            (R = u.element.config) != null && R.hasHeader ? {
              name: "header",
              fn: se(() => [
                j(Xe, {
                  modelValue: u.element.props.header[N(a)],
                  "onUpdate:modelValue": c[2] || (c[2] = (r) => u.element.props.header[N(a)] = r),
                  onInput: c[3] || (c[3] = (r) => n(r, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : u.element.type === N(pe).LktTextBox ? (F(), G(o, {
            key: 2,
            icon: u.element.config.hasHeader && u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, Tt({
            default: se(() => [
              j(Xe, {
                modelValue: u.element.props.text[N(a)],
                "onUpdate:modelValue": c[7] || (c[7] = (r) => u.element.props.text[N(a)] = r),
                onInput: c[8] || (c[8] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 2
          }, [
            (s = u.element.config) != null && s.hasHeader ? {
              name: "header",
              fn: se(() => [
                j(Xe, {
                  modelValue: u.element.props.header[N(a)],
                  "onUpdate:modelValue": c[5] || (c[5] = (r) => u.element.props.header[N(a)] = r),
                  onInput: c[6] || (c[6] = (r) => n(r, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : u.element.type === N(pe).LktLayoutAccordion ? (F(), G(b, {
            key: 3,
            icon: u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, {
            header: se(() => [
              j(Xe, {
                modelValue: u.element.props.header[N(a)],
                "onUpdate:modelValue": c[9] || (c[9] = (r) => u.element.props.header[N(a)] = r),
                onInput: c[10] || (c[10] = (r) => n(r, "header"))
              }, null, 8, ["modelValue"])
            ]),
            default: se(() => [
              j(Ii, {
                modelValue: u.element.children,
                "onUpdate:modelValue": c[11] || (c[11] = (r) => u.element.children = r),
                "layout-selector": l(u.element),
                "is-child": "",
                lang: N(a),
                "is-preview": u.isPreview,
                parent: u.element
              }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : u.element.type === N(pe).LktTextAccordion ? (F(), G(b, {
            key: 4,
            icon: u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, {
            header: se(() => [
              j(Xe, {
                modelValue: u.element.props.header[N(a)],
                "onUpdate:modelValue": c[12] || (c[12] = (r) => u.element.props.header[N(a)] = r),
                onInput: c[13] || (c[13] = (r) => n(r, "header"))
              }, null, 8, ["modelValue"])
            ]),
            default: se(() => [
              j(Xe, {
                modelValue: u.element.props.text[N(a)],
                "onUpdate:modelValue": c[14] || (c[14] = (r) => u.element.props.text[N(a)] = r),
                onInput: c[15] || (c[15] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : u.element.type === N(pe).LktImage ? (F(), G(d, {
            key: 5,
            class: Te(u.element.props.class),
            src: u.element.props.src
          }, {
            text: se(() => [
              j(Xe, {
                modelValue: u.element.props.text[N(a)],
                "onUpdate:modelValue": c[16] || (c[16] = (r) => u.element.props.text[N(a)] = r),
                onInput: c[17] || (c[17] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["class", "src"])) : u.element.type === N(pe).LktIcon ? (F(), G(v, {
            key: 6,
            icon: u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, {
            text: se(() => [
              j(Xe, {
                modelValue: u.element.props.text[N(a)],
                "onUpdate:modelValue": c[18] || (c[18] = (r) => u.element.props.text[N(a)] = r),
                onInput: c[19] || (c[19] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : u.element.type === N(pe).LktHeader ? (F(), G(w, {
            key: 7,
            icon: u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, {
            text: se(() => [
              j(Xe, {
                modelValue: u.element.props.text[N(a)],
                "onUpdate:modelValue": c[20] || (c[20] = (r) => u.element.props.text[N(a)] = r),
                onInput: c[21] || (c[21] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : u.element.type === N(pe).LktButton ? (F(), G(k, {
            key: 8,
            icon: u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, {
            text: se(() => [
              j(Xe, {
                modelValue: u.element.props.text[N(a)],
                "onUpdate:modelValue": c[22] || (c[22] = (r) => u.element.props.text[N(a)] = r),
                onInput: c[23] || (c[23] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : u.element.type === N(pe).LktAnchor ? (F(), G(L, {
            key: 9,
            icon: u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, {
            text: se(() => [
              j(Xe, {
                modelValue: u.element.props.text[N(a)],
                "onUpdate:modelValue": c[24] || (c[24] = (r) => u.element.props.text[N(a)] = r),
                onInput: c[25] || (c[25] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : u.element.type === N(pe).LktLayout ? (F(), G(Ii, {
            key: 10,
            modelValue: u.element.children,
            "onUpdate:modelValue": c[26] || (c[26] = (r) => u.element.children = r),
            "layout-selector": l(u.element),
            "is-child": "",
            lang: N(a),
            "is-preview": u.isPreview,
            parent: u.element
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent"])) : (F(), G(Nt(u.element.component), we(ue({ key: 11 }, u.element.props)), null, 16))
        ]),
        !i.value && u.canRenderActions ? (F(), oe("div", _u, [
          j(k, we(Be({
            type: N(At).Button,
            text: u.element.type,
            icon: "lkt-icn-settings-cogs",
            modal: "lkt-field-element-config",
            modalKey: `${u.index}--${u.element.type}--${u.element.id}`,
            modalData: {
              element: u.element,
              parent: u.parent,
              parentChildren: u.parentChildren,
              indexInParentChildren: u.index,
              fileBrowserConfig: u.fileBrowserConfig
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
    "add-text",
    "add-element",
    "elements-reordered",
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const i = e, n = Y(i.modelValue), l = Y(!1), a = Y(null), u = t;
    return de(n, (c) => {
      u("update:modelValue", c);
    }), (c, o) => {
      const b = re("lkt-table");
      return F(), oe("div", null, [
        j(b, ue({
          ref_key: "tableRef",
          ref: a,
          class: "lkt-elements-table",
          modelValue: n.value,
          "onUpdate:modelValue": o[0] || (o[0] = (d) => n.value = d)
        }, {
          type: c.isPreview ? N(Vi).Table : N(Vi).Item,
          slotItemVar: "element",
          editMode: !0,
          hideTableHeader: !0,
          perms: c.isChild ? [N(ft).Update, N(ft).Sort] : [N(ft).Create, N(ft).Update, N(ft).Sort],
          itemsContainerClass: c.isChild ? c.layoutSelector : "lkt-grid-1",
          itemContainerClass: (d) => {
            if (!d.layout || i.isPreview) return "";
            let v = [];
            return d.layout.columns && d.layout.columns.length > 0 && v.push(d.layout.columns.join(" ")), v.join(" ");
          },
          requiredItemsForBottomCreate: 10,
          drag: {
            enabled: c.isPreview,
            isDisabled: !1,
            canRender: !0,
            isValid: !0
          },
          createButton: c.isChild ? !1 : {
            text: "Add element",
            icon: "lkt-icn-more",
            modal: "lkt-field-add-element-config",
            modalData: {
              items: n.value,
              index: n.value.length,
              onAppend: () => {
                l.value = !0, Ot(() => {
                  l.value = !1;
                });
              }
            }
          }
        }), {
          item: se(({ element: d, index: v }) => [
            j(Ji, {
              element: d,
              index: v,
              lang: c.lang,
              "is-preview": c.isPreview,
              "parent-children": n.value,
              parent: c.parent,
              "file-browser-config": c.fileBrowserConfig
            }, null, 8, ["element", "index", "lang", "is-preview", "parent-children", "parent", "file-browser-config"])
          ]),
          _: 1
        }, 16, ["modelValue"])
      ]);
    };
  }
}), Cu = { class: "lkt-elements-toolbar-group" }, wu = /* @__PURE__ */ be({
  __name: "EditorToolbar",
  props: {
    elements: {},
    toolbarTop: {},
    fileBrowserConfig: {}
  },
  setup(e) {
    const t = e, i = Y(""), n = Y(""), l = Y([]);
    let a = Y(-1);
    const u = () => {
      l.value = l.value.slice(0, a.value + 1), l.value.push([...t.elements]), a.value = l.value.length - 1;
    }, c = (f) => {
      document.execCommand(f, !1), u();
    }, o = (f) => {
      document.execCommand("foreColor", !1, f), u();
    }, b = (f) => {
      document.execCommand("backColor", !1, f), u();
    };
    de(i, o), de(n, b);
    const d = [
      { value: "Arial", label: "Arial" },
      { value: "Courier New", label: "Courier New" },
      { value: "Georgia", label: "Georgia" },
      { value: "Times New Roman", label: "Times New Roman" }
    ], v = (f, h) => {
      document.execCommand("fontName", !1, h), u();
    }, w = (f) => {
      document.execCommand("justify" + f, !1), u();
    };
    function k(f) {
      const h = window.getSelection();
      if (!h.rangeCount) return;
      const m = h.getRangeAt(0);
      let g = m.commonAncestorContainer;
      if (g.nodeType === Node.TEXT_NODE && (g = g.parentNode), g.tagName && g.tagName.toLowerCase() === f.toLowerCase()) {
        L(g);
        return;
      }
      const p = m.extractContents(), y = document.createElement(f);
      let C = !1;
      p.childNodes.forEach((_) => {
        _.nodeType === 1 && getComputedStyle(_).display === "block" && (C = !0);
      }), C ? m.insertNode(p) : (y.appendChild(p), m.insertNode(y)), u();
    }
    function L(f) {
      const h = f.parentNode;
      for (; f.firstChild; )
        h.insertBefore(f.firstChild, f);
      h.removeChild(f);
    }
    const R = () => {
      a.value > 0 && (a.value--, t.elements = [...l.value[a.value]]);
    }, s = () => {
      a.value < l.value.length - 1 && (a.value++, t.elements = [...l.value[a.value]]);
    }, r = () => {
      const f = prompt("Ingrese la URL del enlace:");
      f && (document.execCommand("createLink", !1, f), u());
    };
    return (f, h) => {
      const m = re("lkt-button"), g = re("lkt-field");
      return F(), oe("div", {
        class: "lkt-wysiwyg-toolbar lkt-tooltip",
        style: ji({ top: f.toolbarTop + "px" })
      }, [
        fe("div", Cu, [
          j(m, ue({
            icon: "lkt-icn-bold"
          }, {
            onClick: h[0] || (h[0] = (p) => c("bold"))
          }), null, 16),
          j(m, ue({
            icon: "lkt-icn-italic"
          }, {
            onClick: h[1] || (h[1] = (p) => c("italic"))
          }), null, 16),
          j(m, ue({
            icon: "lkt-icn-underline"
          }, {
            onClick: h[2] || (h[2] = (p) => c("underline"))
          }), null, 16),
          j(m, ue({
            icon: "lkt-icn-strike"
          }, {
            onClick: h[3] || (h[3] = (p) => c("strikeThrough"))
          }), null, 16),
          j(m, ue({
            icon: "lkt-icn-superscript"
          }, {
            onClick: h[4] || (h[4] = (p) => c("superscript"))
          }), null, 16),
          j(m, ue({
            icon: "lkt-icn-subscript"
          }, {
            onClick: h[5] || (h[5] = (p) => c("subscript"))
          }), null, 16),
          j(m, ue({
            icon: "lkt-icn-paragraph"
          }, {
            onClick: h[6] || (h[6] = (p) => k("p"))
          }), null, 16),
          j(m, ue({
            icon: "lkt-icn-align-left"
          }, {
            onClick: h[7] || (h[7] = (p) => w("left"))
          }), null, 16),
          j(m, ue({
            icon: "lkt-icn-align-center"
          }, {
            onClick: h[8] || (h[8] = (p) => w("center"))
          }), null, 16),
          j(m, ue({
            icon: "lkt-icn-align-right"
          }, {
            onClick: h[9] || (h[9] = (p) => w("right"))
          }), null, 16),
          j(m, ue({
            icon: "lkt-icn-list-bullet"
          }, {
            onClick: h[10] || (h[10] = (p) => c("insertUnorderedList"))
          }), null, 16),
          j(m, ue({
            icon: "lkt-icn-list-numbered"
          }, {
            onClick: h[11] || (h[11] = (p) => c("insertOrderedList"))
          }), null, 16),
          j(m, ue({
            icon: "lkt-icn-link"
          }, { onClick: r }), null, 16),
          j(g, ue({
            modelValue: i.value,
            "onUpdate:modelValue": h[12] || (h[12] = (p) => i.value = p)
          }, {
            type: N(Z).Color
          }), null, 16, ["modelValue"]),
          j(g, ue({
            modelValue: n.value,
            "onUpdate:modelValue": h[13] || (h[13] = (p) => n.value = p)
          }, {
            type: N(Z).Color
          }), null, 16, ["modelValue"]),
          j(m, ue({
            icon: "lkt-icn-undo"
          }, { onClick: R }), null, 16),
          j(m, ue({
            icon: "lkt-icn-redo"
          }, { onClick: s }), null, 16),
          j(g, ue({
            type: N(Z).Select,
            options: d
          }, { onChange: v }), null, 16)
        ]),
        le("", !0),
        j(m, we(Be({
          text: "Add element",
          icon: "lkt-icn-more",
          modal: "lkt-field-add-element-config",
          modalData: {
            items: f.elements,
            index: f.elements.length
          }
        })), null, 16),
        le("", !0)
      ], 4);
    };
  }
}), ku = /* @__PURE__ */ be({
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
    var w;
    const i = e, n = Y([]);
    i.modelValue.length > 0 && (n.value = (w = i.modelValue) == null ? void 0 : w.map((k) => new No(k)));
    const l = t;
    de(() => i.modelValue, (k) => {
      n.value = k;
    }, { deep: !0 }), de(n, (k) => {
      l("update:modelValue", k);
    });
    const a = Y([]);
    let u = Y(-1);
    const c = () => {
      a.value = a.value.slice(0, u.value + 1), a.value.push([...n.value]), u.value = a.value.length - 1;
    }, o = () => {
      c();
    }, b = (k) => {
      n.value.splice(k, 1), c();
    };
    de(n, (k) => {
      l("update:modelValue", k);
    }, { deep: !0 });
    const d = Y(null), v = Y(0);
    return de(d, (k) => {
      k ? v.value = d.value.getBoundingClientRect().top : v.value = 0;
    }), (k, L) => (F(), oe("div", {
      ref_key: "containerRef",
      ref: d,
      class: "lkt-wysiwyg-container"
    }, [
      j(wu, {
        elements: n.value,
        "toolbar-top": v.value,
        "file-browser-config": k.fileBrowserConfig
      }, null, 8, ["elements", "toolbar-top", "file-browser-config"]),
      j(Ii, {
        modelValue: n.value,
        "onUpdate:modelValue": L[0] || (L[0] = (R) => n.value = R),
        "file-browser-config": k.fileBrowserConfig,
        onDeleteElement: b,
        onAddElement: o
      }, null, 8, ["modelValue", "file-browser-config"])
    ], 512));
  }
}), xu = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, l] of t)
    i[n] = l;
  return i;
}, Su = /* @__PURE__ */ xu(ku, [["__scopeId", "data-v-adbfa190"]]), Lu = /* @__PURE__ */ be({
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
    const i = t, n = e, l = ee(() => n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), a = () => i("click");
    return (u, c) => {
      const o = re("lkt-button");
      return F(), G(o, ue(u.config, {
        type: u.config.type ? u.config.type : N(At).FileUpload,
        resource: u.config.resource ?? u.fileUploadHttp.resource,
        "resource-data": u.config.resourceData ?? u.fileUploadHttp.data,
        text: u.insideEllipsis ? u.config.text : "",
        class: [l.value, "lkt-field--btn-file-upload"],
        icon: "lkt-icn-upload",
        onClick: a
      }), null, 16, ["type", "resource", "resource-data", "text", "class"]);
    };
  }
}), Eu = ["data-show-ui", "data-labeled"], Tu = ["for", "innerHTML"], Bu = { class: "lkt-field-content" }, zu = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, Nu = {
  key: 1,
  class: "lkt-field--icon"
}, Au = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Ru = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], Iu = {
  key: 4,
  class: "lkt-field--info-nav"
}, Du = { key: 0 }, Mu = ["data-index", "onClick"], Ue = /* @__PURE__ */ be({
  __name: "LktField",
  props: /* @__PURE__ */ wo({
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
  }, Vo(Fo)),
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
    "upload-success"
  ],
  setup(e, { expose: t, emit: i }) {
    const n = i, l = Qi(), a = e, u = So(16);
    let c = St(a.modal, a.prop), o = St(a.modalKey, a.prop), b = St(a.icon, a.prop), d = St(a.download, a.prop), v = St(a.itemType, a.prop);
    !c && typeof v != "function" && v && typeof te.modalPerItemType[v] < "u" && (c = te.modalPerItemType[v]);
    const w = Y(null);
    let k = a.featuredButton, L = a.modelValue;
    a.multiple && Ao.includes(a.type) ? (!L || !Array.isArray(L)) && (L = []) : Lt.includes(a.type) ? typeof L != "boolean" && (L = !1) : a.type === Z.Date && !b ? b = te.defaultDateIcon : a.type === Z.Number && a.canStep && k === "" && (k = te.defaultNumberFeaturedButton);
    const R = Y(L), s = Y(L), r = Y(a.valid), f = Y(!1), h = Y(!1), m = Y(!1), g = Y(!1), p = Y([]), y = Y(!a.readMode), C = Y(a.fileName), _ = Y(a.fileName), S = Y(null), D = Y(null), T = Y(null), B = Y(!1), A = Y(!1), $ = Y(!1), O = Y(""), P = Y(-1), V = Y([]), W = Y(!1), I = Y(!1), M = Y(!1), z = ee(() => bn.value), U = ee(() => (z.value, te.dateReadFormat ? te.dateReadFormat : te.langDateReadFormat[z.value] ? te.langDateReadFormat[z.value] : te.defaultDateReadFormat ? te.defaultDateReadFormat : "Y-m-d")), x = [Z.Card, Z.Elements].includes(a.type) ? s : Y(pn(s.value, z.value)), H = Y(x), K = Y([]), q = Y([]), ie = () => {
      const E = (X) => {
        var Ee;
        if (q.value = Zi(K.value, X, !0, (Ee = a.optionsConfig) == null ? void 0 : Ee.filter), a.multiple) {
          for (let Ie in x.value) {
            let Ne;
            a.optionValueType === "option" ? Ne = ni(K.value, x.value[Ie].value) : Ne = ni(K.value, x.value[Ie]), typeof Ne < "u" && (V.value.length === 0 ? V.value.push(Ne) : V.value.splice(Ie, 1, Ne));
          }
          return;
        }
        let ae;
        a.optionValueType === "option" ? ae = ni(K.value, x.value.map((Ie) => Ie.value)) : ae = ni(K.value, x.value), typeof ae < "u" && (V.value.length === 0 ? V.value.push(ae) : V.value.splice(0, 1, ae));
      };
      a.type === Z.Text ? E(x.value) : a.type === Z.Select && E(O.value);
    }, J = ee(() => a.type === Z.Date), Q = ee(() => a.type === Z.File), ne = ee(() => a.type === Z.Image), me = ee(() => a.type === Z.Textarea ? "textarea" : a.type === Z.Html ? "div" : "input"), ve = ee(() => a.type === Z.Date ? s.value !== R.value : x.value !== H.value), ce = ee(() => typeof a.disabled == "function" ? a.disabled(a.prop) : a.disabled), ye = ee(() => {
      let E = 0;
      return sl.value && ++E, al.value && ++E, rl.value && ++E, ul.value && ++E, cl.value && ++E, fl.value && ++E, dl.value && ++E, Mt.value && ++E, ll.value && ++E, (a.customButtonText || a.customButtonClass) && ++E, E > 0 && a.type === Z.Textarea || E > 0 && a.type === Z.Html || E > 0 && a.infoButtonEllipsis ? 1 : E;
    }), Ae = ee(() => Pi.value && k === "i18n" || Yt.value && k === "password" || Qe.value && k === "subtract"), $e = ee(() => ye.value > 0), Ce = ee(() => a.autocomplete === !0 ? "on" : "off"), Re = ee(() => a.type === Z.Date ? s.value !== "" : x.value !== ""), Le = ee(() => a.type === Z.Password && f.value === !0 ? "text" : a.type === Z.Email ? "email" : a.type === Z.Password ? "password" : a.type === Z.Number ? "number" : a.type === Z.Tel ? "tel" : a.type === Z.Search ? "search" : a.type === Z.Color ? "color" : a.type === Z.Range ? "range" : "text"), ut = ee(() => {
      var X;
      const E = [];
      return E.push(`is-${a.type}`), Lt.includes(a.type) && (E.push("is-boolean"), x.value && E.push("is-checked")), ve.value && E.push("is-changed"), ce.value && E.push("is-disabled"), a.multiple && E.push("is-multiple"), Ae.value && E.push("with-atn-btn"), $e.value && E.push("with-info-btn"), a.mandatory && y.value && E.push("is-mandatory-field"), y.value && h.value && E.push("has-focus"), B.value && E.push("show-options"), a.searchable && W.value && E.push("is-searching"), a.hidden && E.push("lkt-hidden-field"), a.type !== Z.Range && ((X = a.validation) == null ? void 0 : X.type) === Tl.Auto && g.value && m.value && (p.value.length > 0 ? E.push("is-invalid") : E.push("is-valid")), [Z.Textarea, Z.Html].includes(a.type) && E.push("is-lg"), [Z.Image].includes(a.type) && E.push("is-xl"), a.multiple && a.type === Z.Select && E.push("is-lg"), a.multiple && (y.value ? E.push(`has-multiple-display-${a.multipleDisplayEdition}`) : E.push(`has-multiple-display-${a.multipleDisplay}`)), ye.value > 0 && E.push("has-icons", `has-icons-${ye.value}`), E.push(y.value ? "is-editable" : "is-read"), a.type !== Z.Range && (E.push(r.value ? "is-valid" : "is-error"), E.push(Re.value ? "is-filled" : "is-empty")), E.join(" ");
    }), Fe = ee(() => {
      var E;
      return typeof x.value == "number" ? (z.value, (E = te.langNumberFormat[z.value]) != null && E.amountOfDecimals ? El(
        x.value,
        te.langNumberFormat[z.value].amountOfDecimals,
        te.langNumberFormat[z.value].decimalSeparator,
        te.langNumberFormat[z.value].thousandsSeparator,
        te.langNumberFormat[z.value].removeDecimalsIfZero
      ) : te.amountOfDecimals ? El(
        x.value,
        te.amountOfDecimals,
        te.decimalSeparator,
        te.thousandsSeparator,
        te.removeDecimalsIfZero
      ) : x.value.toString()) : a.type === Z.Html ? mn(x.value) : x.value;
    }), Ge = ee(() => typeof a.min == "string" ? parseFloat(a.min) : typeof a.min == "number" ? a.min : !1), He = ee(() => typeof a.max == "string" ? parseFloat(a.max) : typeof a.max == "number" ? a.max : !1), _e = ee(() => {
      var E, X, ae, Ee;
      if (Lt.includes(a.type)) {
        if (x.value === !0 && typeof a.configOn == "object")
          return qi(
            jt(((E = a.configOn) == null ? void 0 : E.label) ?? a.label),
            ((X = a.configOn) == null ? void 0 : X.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
        if (x.value !== !0 && typeof a.configOff == "object")
          return qi(
            jt(((ae = a.configOff) == null ? void 0 : ae.label) ?? a.label),
            ((Ee = a.configOff) == null ? void 0 : Ee.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
      }
      return qi(
        jt(a.label),
        a.labelIcon,
        a.labelIconAtEnd
      );
    }), Rt = ee(() => jt(a.placeholder)), dt = ee(() => jt(a.searchPlaceholder)), Pe = ee(() => typeof c == "function" ? c(a.prop) : St(c, a.prop)), ze = ee(() => typeof a.modalData == "function" ? a.modalData(a.prop) : a.modalData), We = ee(() => typeof b == "function" ? b(a.prop) : St(b, a.prop)), Oe = ee(() => a.type === Z.File ? te.acceptTypes.file : a.type === Z.Image ? te.acceptTypes.image : ""), It = ee(() => a.errorMessage), Dt = ee(() => a.infoMessage), Qe = ee(() => a.canStep && y.value && a.type === Z.Number), Mt = ee(() => a.canStep && y.value && a.type === Z.Number && k !== "subtract"), ll = ee(() => a.canStep && y.value && a.type === Z.Number), nl = ee(() => a.canUndo && ve.value && y.value && !Ro.includes(a.type)), ol = ee(() => a.canClear && Re.value && y.value && !Io.includes(a.type)), Pi = ee(() => a.canI18n && typeof s.value == "object" && y.value), Yt = ee(() => a.type === Z.Password && a.showPassword && Re.value && y.value), sl = ee(() => nl.value && !a.infoButtonEllipsis), al = ee(() => ol.value && !a.infoButtonEllipsis), rl = ee(() => Yt.value && !a.infoButtonEllipsis && k !== "password"), ul = ee(() => Pi.value && !a.infoButtonEllipsis && k !== "i18n"), dl = ee(() => {
      var E, X, ae, Ee;
      return a.type === Z.Calc || a.type === Z.Search || ![Z.Select, Z.Text].includes(a.type) ? !1 : q.value.length > 0 || K.value.length > 0 || typeof ((X = (E = a.optionsConfig) == null ? void 0 : E.http) == null ? void 0 : X.resource) < "u" && ((Ee = (ae = a.optionsConfig) == null ? void 0 : ae.http) == null ? void 0 : Ee.resource) !== "";
    }), cl = ee(() => a.allowReadModeSwitch && !a.infoButtonEllipsis), fl = ee(() => typeof a.fileUploadButton == "object" && Object.keys(a.fileUploadButton).length > 0), hl = () => {
      Ot(() => {
        w.value && w.value.focus();
      });
    }, eo = async () => {
      var E;
      if ((E = a.validation) != null && E.resource) {
        n("validating");
        const X = await Di(a.validation.resource, {
          ...a.validation.resourceData,
          value: x.value
        });
        n("validation", X);
      }
    };
    de(() => {
      var E;
      return (E = a.validation) == null ? void 0 : E.checkEqualTo;
    }, () => Vt()), de(() => a.readMode, (E) => y.value = !E), de(() => a.valid, (E) => r.value = E), de(() => a.modelValue, (E) => {
      [Z.Card, Z.Elements].includes(a.type) ? x.value = E : a.type !== Z.Date && (x.value = pn(E, z.value));
    }), de(x, (E) => {
      typeof s.value == "object" && [Z.Card, Z.Elements].includes(a.type) ? s.value[z.value] = E : s.value = E, a.type === Z.Number && po(E);
    }), de(s, (E) => {
      var X;
      $.value && y.value && (n("update:modelValue", E), a.type === Z.Select && typeof ((X = a.optionsConfig) == null ? void 0 : X.filter) == "function" && Ft(O.value, !1), eo(), Vt());
    }, { deep: !0 }), de(r, (E) => {
      n("update:valid", E);
    }), de(K, (E) => {
      n("update:options", E);
    }), de(() => a.options, (E) => {
      K.value = Fi(E, a.prop), a.type === Z.Select ? Ft(O.value, !1) : Ft(x.value, !1);
    });
    const Vt = () => {
      var E;
      ((E = a.validation) == null ? void 0 : E.trigger) === Do.Blur && (!m.value || !g.value) || a.type !== Z.Range && (p.value = [], Ot(() => {
        var Ee, Ie, Ne, et, tt, it, lt, nt, ot, ht, pt, mt, gt;
        let X = typeof a.min > "u" ? 0 : parseFloat(a.min), ae = typeof a.max > "u" ? 0 : parseFloat(a.max);
        if (a.type === Z.Number && typeof a.min < "u" && typeof a.max < "u" && (x.value < X || x.value > ae)) {
          p.value.push(De.createNumBetween(X, ae, Me.Ko)), r.value = !1;
          return;
        }
        ![Z.Number, Z.Email].includes(a.type) && a.mandatory && x.value === "" ? p.value.push(De.createEmpty(Me.Ko)) : a.type !== Z.Email && X > 0 && (a.type !== Z.Number && x.value.length < X ? p.value.push(De.createMinStr(X, Me.Ko)) : x.value < X && p.value.push(De.createMinNum(X, Me.Ko))), ae > 0 && (a.type !== Z.Number && x.value.length > ae ? p.value.push(De.createMaxStr(ae, Me.Ko)) : x.value > ae && p.value.push(De.createMaxNum(ae, Me.Ko))), a.type === Z.Email && (a.mandatory && x.value === "" ? p.value.push(De.createEmpty(Me.Ko)) : Lo(x.value) || p.value.push(De.createEmail(Me.Ko))), Mo.includes(a.type) && (vs(p.value, x.value, (Ee = a.validation) == null ? void 0 : Ee.minNumbers, (Ie = a.validation) == null ? void 0 : Ie.maxNumbers), bs(p.value, x.value, (Ne = a.validation) == null ? void 0 : Ne.minUpperChars, (et = a.validation) == null ? void 0 : et.maxUpperChars), ys(p.value, x.value, (tt = a.validation) == null ? void 0 : tt.minLowerChars, (it = a.validation) == null ? void 0 : it.maxLowerChars), _s(p.value, x.value, (lt = a.validation) == null ? void 0 : lt.minChars, (nt = a.validation) == null ? void 0 : nt.maxChars), Cs(p.value, x.value, (ot = a.validation) == null ? void 0 : ot.minSpecialChars, (ht = a.validation) == null ? void 0 : ht.maxSpecialChars)), (pt = a.validation) != null && pt.checkEqualTo && x.value !== ((mt = a.validation) == null ? void 0 : mt.checkEqualTo) && p.value.push(De.createEqualTo((gt = a.validation) == null ? void 0 : gt.checkEqualTo, Me.Ko)), r.value = p.value.length === 0;
      }));
    }, Ft = (E, X = !0) => {
      var ae, Ee, Ie, Ne, et, tt, it, lt, nt, ot;
      if (K.value.length === 0) {
        q.value = [];
        return;
      }
      switch (a.type) {
        case Z.Select:
          a.searchable ? q.value = Zi(K.value, E, !0, (ae = a.optionsConfig) == null ? void 0 : ae.filter) : q.value = K.value, A.value = !1, X && (B.value = typeof ((Ie = (Ee = a.optionsConfig) == null ? void 0 : Ee.http) == null ? void 0 : Ie.resource) < "u" && ((et = (Ne = a.optionsConfig) == null ? void 0 : Ne.http) == null ? void 0 : et.resource) !== "" || q.value.length > 0), ie();
          return;
        case Z.Text:
        case Z.Search:
          q.value = Zi(K.value, E, !1, (tt = a.optionsConfig) == null ? void 0 : tt.filter), A.value = !1, X && (B.value = typeof ((lt = (it = a.optionsConfig) == null ? void 0 : it.http) == null ? void 0 : lt.resource) < "u" && ((ot = (nt = a.optionsConfig) == null ? void 0 : nt.http) == null ? void 0 : ot.resource) !== "" || q.value.length > 0);
          return;
      }
    }, Xt = async (E, X = !0) => {
      var ae, Ee, Ie, Ne, et, tt, it, lt, nt, ot, ht, pt, mt, gt, Zt, qt, xe, vt, bt, yt, _t, Ct, wt, kt;
      if (!(!y.value && !((ae = a.optionsConfig) != null && ae.autoloadResource) && !I.value) && ![
        Z.Tel,
        Z.Date,
        Z.Color,
        Z.File,
        Z.Html,
        Z.Image,
        Z.Password,
        Z.Range,
        Z.Textarea
      ].includes(a.type))
        if (A.value = !1, (Ee = a.optionsConfig) != null && Ee.autoloadResource && !I.value && (M.value = !0), typeof ((Ne = (Ie = a.optionsConfig) == null ? void 0 : Ie.http) == null ? void 0 : Ne.resource) < "u" && ((tt = (et = a.optionsConfig) == null ? void 0 : et.http) == null ? void 0 : tt.resource) !== "") {
          A.value = !0;
          let ct = {};
          typeof ((lt = (it = a.optionsConfig) == null ? void 0 : it.http) == null ? void 0 : lt.data) == "object" && (ct = { ...a.optionsConfig.http.data }), te.searchKeyForResource !== "" && (ct[te.searchKeyForResource] = E), (ht = (ot = (nt = a.optionsConfig) == null ? void 0 : nt.http) == null ? void 0 : ot.events) != null && ht.onStart && typeof ((gt = (mt = (pt = a.optionsConfig) == null ? void 0 : pt.http) == null ? void 0 : mt.events) == null ? void 0 : gt.onStart) == "function" && a.optionsConfig.http.events.onStart();
          const st = await Di((qt = (Zt = a.optionsConfig) == null ? void 0 : Zt.http) == null ? void 0 : qt.resource, ct);
          (bt = (vt = (xe = a.optionsConfig) == null ? void 0 : xe.http) == null ? void 0 : vt.events) != null && bt.onEnd && typeof ((Ct = (_t = (yt = a.optionsConfig) == null ? void 0 : yt.http) == null ? void 0 : _t.events) == null ? void 0 : Ct.onEnd) == "function" && a.optionsConfig.http.events.onEnd(st);
          const zt = Array.isArray(st.data) && st.data.length > 0;
          A.value = !1, zt && (K.value = ls(K.value, st.data, a.prop), Ft(E, X), (wt = a.optionsConfig) != null && wt.autoloadResource && !I.value && (((kt = a.optionsConfig) == null ? void 0 : kt.autoloadResource) === "feed" && (a.multiple ? q.value.forEach((ii) => {
            Pt(ii);
          }) : q.value.length > 0 && Pt(q.value[0])), I.value = !0, M.value = !1), n("options-loaded", st.data));
        } else
          Ft(E, X);
    }, Wi = (E) => {
      var Ee, Ie;
      let X = q.value.length - 1;
      if (X === -1) return;
      const ae = E.key ?? "";
      if (h.value)
        if (["ArrowDown", "ArrowUp", "Enter"].includes(ae) && (E.preventDefault(), E.stopPropagation()), ae === "ArrowDown") {
          ++P.value, P.value > X && (P.value = 0);
          let Ne = (Ee = T.value) == null ? void 0 : Ee.querySelector('[data-index="' + P.value + '"]');
          Ne && Ne.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else if (ae === "ArrowUp") {
          --P.value, P.value < 0 && (P.value = X);
          let Ne = (Ie = T.value) == null ? void 0 : Ie.querySelector('[data-index="' + P.value + '"]');
          Ne && Ne.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else ae === "Enter" && P.value > -1 && Pt(q.value[P.value]);
    }, $i = () => {
      if (a.type === Z.Html) {
        w.value && w.value.setValue(H.value);
        return;
      } else if (a.type === Z.Date) {
        s.value = R.value;
        return;
      } else if (a.type === Z.File) {
        s.value = R.value, _.value = C.value;
        return;
      }
      x.value = H.value;
    }, pl = () => {
      if (a.type === Z.Html) {
        w.value && w.value.setValue("");
        return;
      } else if (a.type === Z.Date) {
        s.value = "";
        return;
      } else if (a.type === Z.File) {
        s.value = "", _.value = "";
        return;
      } else if (a.type === Z.Select) {
        x.value = a.multiple ? [] : "", V.value = [];
        return;
      }
      x.value = "";
    }, to = () => x.value, ml = (E) => {
      Vt(), Bl.includes(a.type) ? (Xt(x.value), Wi(E)) : a.type === Z.Select && Wi(E), n("keyup", E);
    }, gl = () => {
      w.value && w.value.keepFocused();
    }, io = () => {
      if (B.value) {
        if (a.type === Z.Select) {
          yl();
          return;
        }
        return Qt();
      }
      if (a.type === Z.Select) {
        bl();
        return;
      }
      return Jt();
    }, Pt = (E, X = !1) => {
      if (!E.disabled)
        if (a.multiple) {
          let ae = -1;
          a.optionValueType === "option" ? ae = Ht(E, x.value.map((Ee) => Ee.value)) : ae = Ht(E, x.value), ae === -1 ? (a.optionValueType === "option" ? x.value.push(E.value) : x.value.push(String(E.value)), X || V.value.push(E)) : X || (x.value.splice(ae, 1), V.value.splice(ae, 1)), gl(), n("selected-option", E);
        } else
          P.value = -1, a.optionValueType === "option" ? x.value = E : x.value = String(E.value), V.value.splice(0, 1, E), B.value = !1, W.value = !1, n("selected-option", E);
    }, vl = (E) => n("keydown", E), Jt = (E) => {
      g.value = !0, h.value = !0, Vt(), n("focus", E);
    }, Qt = (E) => {
      setTimeout(() => {
        if (!(a.searchable && W.value)) {
          if (a.multiple) {
            B.value = !0, h.value = !0;
            return;
          }
          m.value = !0, P.value = -1, B.value = !1, h.value = !1, Vt(), n("blur", E);
        }
      }, 100);
    }, ei = (E) => {
      g.value = !0, h.value = !0, n("focus", E);
    }, ti = (E) => {
      m.value = !0, h.value = !1, n("blur", E);
    }, lo = (E) => {
      Wi(E);
    }, no = (E) => {
      O.value = E, Xt(E);
    }, oo = (E) => {
      let X = new Mi({
        value: E,
        label: E
      }), ae = -1;
      a.optionValueType === "option" ? ae = Ht(X, x.value.map((Ee) => Ee.value)) : ae = Ht(X, x.value), ae === -1 && (K.value.push(X), q.value.push(X), V.value.push(X), Pt(X, !0)), O.value = "";
    }, so = (E) => {
      let X = -1;
      a.optionValueType === "option" ? X = Ht(E, x.value.map((ae) => ae.value)) : X = Ht(E, x.value), X >= 0 && (x.value.splice(X, 1), V.value.splice(X, 1), a.canTag && (K.value.splice(
        K.value.findIndex((ae) => ae.value === E.value),
        1
      ), q.value.splice(
        q.value.findIndex((ae) => ae.value === E.value),
        1
      ))), O.value = "";
    }, bl = () => {
      var E, X;
      if (g.value = !0, h.value = !0, !((X = (E = a.optionsConfig) == null ? void 0 : E.http) != null && X.resource) && q.value.length === 0) {
        B.value = !1;
        return;
      }
      B.value = !0, Vt(), Xt(O.value, !1), a.searchable && gl(), n("focus");
    }, yl = () => {
      m.value = !0, h.value = !1, n("blur");
    }, Wt = (E) => {
      n("change", E, x.value);
    }, $t = (E) => {
      n("click", E);
    }, ao = (E) => n("click-info", E), ro = (E) => n("click-error", E), _l = () => {
      let E = a.step ?? 1;
      typeof E == "string" && (E = parseFloat(E)), (!a.min || x.value > a.min) && (x.value -= E);
    }, uo = () => {
      let E = a.step ?? 1;
      typeof E == "string" && (E = parseFloat(E)), (!a.max || x.value < a.max) && (x.value += E);
    }, co = () => {
      y.value && hl();
    }, fo = () => {
      Al({
        text: Ke.defaultUploadSuccessText,
        details: Ke.defaultUploadSuccessDetails,
        icon: Ke.defaultUploadSuccessIcon,
        positionX: zl.Right
      }), n("upload-success");
    }, ho = () => {
      Al({
        text: Ke.defaultUploadErrorText,
        details: Ke.defaultUploadErrorDetails,
        icon: Ke.defaultUploadErrorIcon,
        positionX: zl.Right
      }), n("upload-error");
    }, po = (E) => {
      if (!a.enableAutoNumberFix) return !1;
      let X = Number(E), ae = is(X, Ge.value, He.value);
      return X !== ae ? (x.value = ae, !0) : !1;
    };
    t({
      Identifier: u,
      reset: $i,
      focus: hl,
      value: to,
      isMandatory: () => a.mandatory,
      isValid: () => r.value,
      click: () => {
        var E;
        switch (a.type) {
          case Z.File:
            return (E = w.value) == null ? void 0 : E.click();
        }
        D.value.click();
      }
    });
    const mo = ee(() => a.editSlot !== "" && typeof te.customEditSlots[a.editSlot] < "u"), go = ee(() => te.customEditSlots[a.editSlot]);
    Hi(() => {
      var E;
      K.value = Fi(a.options, a.prop), Ft("", !1), ie(), a.type === Z.Select && (a.multiple && (W.value = !0), (E = a.optionsConfig) != null && E.autoloadResource && Xt("", !1)), $.value = !0;
    });
    const vo = ee(() => Lt.includes(a.type) && !ce.value ? "label" : "div"), bo = ee(() => Lt.includes(a.type) ? {
      for: u
    } : {}), yo = ee(() => {
      switch (a.type) {
        case Z.Select:
          return V.value;
        case Z.Date:
          return En(s.value, U.value);
        case Z.File:
        case Z.Image:
          return s.value;
        default:
          return x.value;
      }
    });
    return (E, X) => {
      var Ne, et, tt, it, lt, nt, ot, ht, pt, mt, gt, Zt, qt;
      const ae = re("lkt-button"), Ee = re("lkt-loader"), Ie = re("lkt-tooltip");
      return F(), oe("div", {
        class: Te(["lkt-field", ut.value]),
        "data-show-ui": $e.value,
        "data-labeled": !N(l).label,
        ref_key: "container",
        ref: D
      }, [
        N(l).label ? at(E.$slots, "label", { key: 0 }) : le("", !0),
        !N(l).label && _e.value !== "" && !N(Lt).includes(E.type) ? (F(), oe("label", {
          key: 1,
          for: N(u),
          class: "lkt-field--label",
          innerHTML: _e.value
        }, null, 8, Tu)) : le("", !0),
        fe("div", Bu, [
          Ae.value ? (F(), oe("div", zu, [
            E.featuredButton === "password" && Yt.value ? (F(), G(Ki, {
              key: 0,
              modelValue: f.value,
              "onUpdate:modelValue": X[0] || (X[0] = (xe) => f.value = xe),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : le("", !0),
            Pi.value && N(k) === "i18n" && E.canI18n ? (F(), G(Rl, {
              key: 1,
              modelValue: s.value,
              "onUpdate:modelValue": X[1] || (X[1] = (xe) => s.value = xe),
              "is-featured": "",
              type: E.type
            }, null, 8, ["modelValue", "type"])) : le("", !0),
            Qe.value && N(k) === "subtract" ? (F(), G(ae, {
              key: 2,
              class: "lkt-field--atn-btn",
              icon: "lkt-icn-less",
              onClick: _l
            })) : le("", !0)
          ])) : le("", !0),
          We.value ? (F(), oe("div", Nu, [
            fe("i", {
              class: Te(We.value)
            }, null, 2)
          ])) : le("", !0),
          y.value ? (F(), G(Nt(vo.value), ue({ key: 2 }, bo.value, { class: "lkt-field-main" }), {
            default: se(() => {
              var xe, vt, bt, yt, _t, Ct, wt, kt, ct, st, zt, ii, Cl, wl, kl, xl, Sl;
              return [
                N(l).edit ? (F(), oe("div", {
                  key: 0,
                  onClick: $t
                }, [
                  at(E.$slots, "edit", {
                    value: s.value,
                    title: Fe.value,
                    data: E.slotData
                  })
                ])) : mo.value ? (F(), oe("div", {
                  key: 1,
                  onClick: $t
                }, [
                  (F(), G(Nt(go.value), {
                    value: s.value,
                    title: Fe.value,
                    data: E.slotData
                  }, null, 8, ["value", "title", "data"]))
                ])) : N(Lt).includes(E.type) ? (F(), G(Ts, {
                  key: 2,
                  modelValue: N(x),
                  "onUpdate:modelValue": X[2] || (X[2] = (ge) => Ye(x) ? x.value = ge : null),
                  ref_key: "inputElement",
                  ref: w,
                  id: N(u),
                  name: E.name,
                  type: E.type,
                  label: _e.value,
                  editable: y.value,
                  focusing: h.value,
                  disabled: ce.value,
                  readonly: E.readonly,
                  onFocus: ei,
                  onBlur: ti
                }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : E.type === N(Z).Color && E.multiple ? (F(), G(gs, {
                  key: 3,
                  modelValue: N(x),
                  "onUpdate:modelValue": X[3] || (X[3] = (ge) => Ye(x) ? x.value = ge : null),
                  ref_key: "inputElement",
                  ref: w,
                  "edit-mode": y.value,
                  min: Ge.value,
                  max: He.value
                }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : E.type === N(Z).Color ? (F(), G(Tn, {
                  key: 4,
                  modelValue: N(x),
                  "onUpdate:modelValue": X[4] || (X[4] = (ge) => Ye(x) ? x.value = ge : null),
                  onChange: Wt,
                  ref_key: "inputElement",
                  ref: w
                }, null, 8, ["modelValue"])) : Q.value || ne.value ? (F(), G(ru, {
                  key: 5,
                  modelValue: s.value,
                  "onUpdate:modelValue": X[5] || (X[5] = (ge) => s.value = ge),
                  "file-name": _.value,
                  "onUpdate:fileName": X[6] || (X[6] = (ge) => _.value = ge),
                  ref_key: "inputElement",
                  ref: w,
                  id: N(u),
                  tabindex: E.tabindex,
                  resource: (xe = E.fileUploadHttp) == null ? void 0 : xe.resource,
                  "resource-data": (vt = E.fileUploadHttp) == null ? void 0 : vt.data,
                  name: E.name,
                  placeholder: Rt.value,
                  accept: Oe.value,
                  focusing: h.value,
                  disabled: ce.value,
                  readonly: E.readonly,
                  "is-image": E.type === N(Z).Image,
                  "file-browser-config": E.fileBrowserConfig,
                  onChange: Wt,
                  onUploadSuccess: fo,
                  onUploadError: ho
                }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image", "file-browser-config"])) : J.value ? (F(), G(gu, {
                  key: 6,
                  modelValue: s.value,
                  "onUpdate:modelValue": X[7] || (X[7] = (ge) => s.value = ge),
                  id: N(u),
                  tabindex: E.tabindex,
                  lang: z.value,
                  name: E.name
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name"])) : E.type === N(Z).Select ? (F(), G(Mr, {
                  key: 7,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: N(x),
                  "onUpdate:modelValue": X[8] || (X[8] = (ge) => Ye(x) ? x.value = ge : null),
                  "show-options": B.value,
                  "onUpdate:showOptions": X[9] || (X[9] = (ge) => B.value = ge),
                  searchable: E.searchable,
                  "search-mode": W.value,
                  "search-string": O.value,
                  multiple: E.multiple,
                  "can-tag": E.canTag,
                  "options-text": (bt = E.optionsConfig) == null ? void 0 : bt.text,
                  "options-icon": (yt = E.optionsConfig) == null ? void 0 : yt.icon,
                  "options-class": (_t = E.optionsConfig) == null ? void 0 : _t.class,
                  "option-slot": E.optionSlot,
                  "options-modal": (Ct = E.optionsConfig) == null ? void 0 : Ct.modal,
                  "options-download": (wt = E.optionsConfig) == null ? void 0 : wt.download,
                  "options-label-formatter": (kt = E.optionsConfig) == null ? void 0 : kt.labelFormatter,
                  "options-modal-data": (ct = E.optionsConfig) == null ? void 0 : ct.modalData,
                  "picked-options": V.value,
                  editable: y.value,
                  focusing: h.value,
                  "search-placeholder": dt.value,
                  "multiple-display-edition": E.multipleDisplayEdition,
                  onFocus: bl,
                  onBlur: yl,
                  onNavigate: lo,
                  onSearch: no,
                  onChange: Wt,
                  onTag: oo,
                  onUntag: so
                }, null, 8, ["modelValue", "show-options", "searchable", "search-mode", "search-string", "multiple", "can-tag", "options-text", "options-icon", "options-class", "option-slot", "options-modal", "options-download", "options-label-formatter", "options-modal-data", "picked-options", "editable", "focusing", "search-placeholder", "multiple-display-edition"])) : E.type === N(Z).Calc ? (F(), G(Wr, {
                  key: 8,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: N(x),
                  "onUpdate:modelValue": X[10] || (X[10] = (ge) => Ye(x) ? x.value = ge : null),
                  id: N(u),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: y.value,
                  focusing: h.value,
                  disabled: ce.value,
                  readonly: E.readonly,
                  options: K.value,
                  onFocus: ei,
                  onBlur: ti
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : E.type === N(Z).Search ? (F(), G(Gr, {
                  key: 9,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: N(x),
                  "onUpdate:modelValue": X[11] || (X[11] = (ge) => Ye(x) ? x.value = ge : null),
                  id: N(u),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: y.value,
                  focusing: h.value,
                  "had-first-focus": g.value,
                  disabled: ce.value,
                  readonly: E.readonly,
                  "options-resource": (zt = (st = E.optionsConfig) == null ? void 0 : st.http) == null ? void 0 : zt.resource,
                  container: D.value,
                  onFocus: ei,
                  onBlur: ti
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : E.type === N(Z).Elements ? (F(), G(Su, {
                  key: 10,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: N(x),
                  "onUpdate:modelValue": X[12] || (X[12] = (ge) => Ye(x) ? x.value = ge : null),
                  id: N(u),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: y.value,
                  focusing: h.value,
                  "had-first-focus": g.value,
                  disabled: ce.value,
                  readonly: E.readonly,
                  "options-resource": (Cl = (ii = E.optionsConfig) == null ? void 0 : ii.http) == null ? void 0 : Cl.resource,
                  container: D.value,
                  "file-browser-config": E.fileBrowserConfig,
                  onFocus: ei,
                  onBlur: ti
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container", "file-browser-config"])) : E.type === N(Z).Card && a.multiple ? (F(), G(bu, {
                  key: 11,
                  modelValue: N(x),
                  "onUpdate:modelValue": X[13] || (X[13] = (ge) => Ye(x) ? x.value = ge : null),
                  id: N(u),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: y.value,
                  focusing: h.value,
                  "had-first-focus": g.value,
                  disabled: ce.value,
                  readonly: E.readonly,
                  "options-resource": (kl = (wl = E.optionsConfig) == null ? void 0 : wl.http) == null ? void 0 : kl.resource,
                  modal: Pe.value,
                  "modal-key": N(o),
                  "modal-data": ze.value,
                  "item-type": N(v)
                }, Tt({ _: 2 }, [
                  N(l)["item-" + N(v)] ? {
                    name: "item",
                    fn: se(({ item: ge }) => [
                      at(E.$slots, "item-" + N(v), { item: ge })
                    ]),
                    key: "0"
                  } : N(l).item ? {
                    name: "item",
                    fn: se(({ item: ge }) => [
                      at(E.$slots, "item", { item: ge })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : E.type === N(Z).Card ? (F(), G(Qn, {
                  key: 12,
                  modelValue: N(x),
                  "onUpdate:modelValue": X[14] || (X[14] = (ge) => Ye(x) ? x.value = ge : null),
                  id: N(u),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: y.value,
                  focusing: h.value,
                  "had-first-focus": g.value,
                  disabled: ce.value,
                  readonly: E.readonly,
                  "options-resource": (Sl = (xl = E.optionsConfig) == null ? void 0 : xl.http) == null ? void 0 : Sl.resource,
                  modal: Pe.value,
                  "modal-key": N(o),
                  "modal-data": ze.value,
                  "item-type": N(v)
                }, Tt({ _: 2 }, [
                  N(l)["item-" + N(v)] ? {
                    name: "item",
                    fn: se(({ item: ge }) => [
                      at(E.$slots, "item-" + N(v), { item: ge })
                    ]),
                    key: "0"
                  } : N(l).item ? {
                    name: "item",
                    fn: se(({ item: ge }) => [
                      at(E.$slots, "item", { item: ge })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : me.value === "input" ? Ze((F(), oe("input", {
                  key: 13,
                  "onUpdate:modelValue": X[15] || (X[15] = (ge) => Ye(x) ? x.value = ge : null),
                  ref: (ge) => w.value = ge,
                  value: N(x),
                  type: Le.value,
                  name: E.name,
                  id: N(u),
                  disabled: ce.value,
                  readonly: E.readonly,
                  placeholder: Rt.value,
                  tabindex: E.tabindex,
                  autocomplete: Ce.value,
                  min: Ge.value,
                  max: He.value,
                  step: E.step,
                  onKeyup: ml,
                  onKeydown: vl,
                  onFocus: Jt,
                  onBlur: Qt,
                  onClick: $t,
                  onChange: Wt
                }, null, 40, Au)), [
                  [ko, N(x)]
                ]) : me.value === "textarea" ? Ze((F(), oe("textarea", {
                  key: 14,
                  "onUpdate:modelValue": X[16] || (X[16] = (ge) => Ye(x) ? x.value = ge : null),
                  ref: (ge) => w.value = ge,
                  name: E.name,
                  id: N(u),
                  disabled: ce.value,
                  readonly: E.readonly,
                  placeholder: Rt.value,
                  tabindex: E.tabindex,
                  autocomplete: Ce.value,
                  onKeyup: ml,
                  onKeydown: vl,
                  onFocus: Jt,
                  onBlur: Qt,
                  onClick: $t,
                  onChange: Wt
                }, null, 40, Ru)), [
                  [Oi, N(x)]
                ]) : E.type === N(Z).Html ? (F(), G(Nr, {
                  key: 15,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: N(x),
                  "onUpdate:modelValue": X[17] || (X[17] = (ge) => Ye(x) ? x.value = ge : null),
                  id: N(u),
                  tabindex: E.tabindex,
                  name: E.name,
                  lang: z.value,
                  editable: y.value,
                  focusing: h.value,
                  disabled: ce.value,
                  readonly: E.readonly,
                  onFocus: Jt,
                  onBlur: Qt
                }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : le("", !0)
              ];
            }),
            _: 3
          }, 16)) : le("", !0),
          y.value ? le("", !0) : (F(), G(nu, {
            key: 3,
            value: yo.value,
            type: E.type,
            label: _e.value,
            title: Fe.value,
            "file-name": _.value,
            "value-slot": E.valueSlot,
            "empty-value-slot": E.emptyValueSlot,
            "slot-data": E.slotData,
            download: N(d),
            multiple: E.multiple,
            multipleDisplay: E.multipleDisplay,
            modal: Pe.value,
            "modal-key": N(o),
            "modal-data": ze.value,
            "option-slot": E.optionSlot,
            "options-download": (Ne = E.optionsConfig) == null ? void 0 : Ne.download,
            "options-modal": (et = E.optionsConfig) == null ? void 0 : et.modal,
            "options-modal-data": (tt = E.optionsConfig) == null ? void 0 : tt.modalData,
            "options-icon": (it = E.optionsConfig) == null ? void 0 : it.icon,
            "options-text": (lt = E.optionsConfig) == null ? void 0 : lt.text,
            "options-class": (nt = E.optionsConfig) == null ? void 0 : nt.class,
            "options-label-formatter": (ot = E.optionsConfig) == null ? void 0 : ot.labelFormatter,
            "options-resource": (pt = (ht = E.optionsConfig) == null ? void 0 : ht.http) == null ? void 0 : pt.resource,
            "options-resource-data": (gt = (mt = E.optionsConfig) == null ? void 0 : mt.http) == null ? void 0 : gt.data,
            "read-mode-config": E.readModeConfig,
            onClick: $t
          }, Tt({ _: 2 }, [
            N(l).value ? {
              name: "value",
              fn: se(() => [
                at(E.$slots, s.value, {
                  value: s.value,
                  title: Fe.value,
                  data: E.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-text", "options-class", "options-label-formatter", "options-resource", "options-resource-data", "read-mode-config"])),
          $e.value ? (F(), oe("div", Iu, [
            Ze(j(xn, { onClick: $i }, null, 512), [
              [xt, sl.value]
            ]),
            Ze(j(Sn, { onClick: pl }, null, 512), [
              [xt, al.value]
            ]),
            E.type === N(Z).Number ? Ze((F(), G(ae, {
              key: 0,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              onClick: _l
            }, null, 512)), [
              [xt, Mt.value]
            ]) : le("", !0),
            E.type === N(Z).Number ? Ze((F(), G(ae, {
              key: 1,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-more",
              onClick: uo
            }, null, 512)), [
              [xt, ll.value]
            ]) : le("", !0),
            It.value ? (F(), G(ae, {
              key: 2,
              title: E.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-attention",
              onClick: ro
            }, null, 8, ["title"])) : le("", !0),
            Dt.value ? (F(), G(ae, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-info",
              onClick: ao,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: se(() => [
                Ut(Et(E.infoMessage), 1)
              ]),
              _: 1
            })) : le("", !0),
            y.value && fl.value ? (F(), G(Lu, {
              key: 4,
              config: E.fileUploadButton,
              "file-upload-http": E.fileUploadHttp
            }, null, 8, ["config", "file-upload-http"])) : le("", !0),
            E.type === N(Z).Password ? Ze((F(), G(Ki, {
              key: 5,
              modelValue: f.value,
              "onUpdate:modelValue": X[18] || (X[18] = (xe) => f.value = xe)
            }, null, 8, ["modelValue"])), [
              [xt, rl.value]
            ]) : le("", !0),
            Ze(j(Rl, {
              modelValue: s.value,
              "onUpdate:modelValue": X[19] || (X[19] = (xe) => s.value = xe),
              type: E.type
            }, null, 8, ["modelValue", "type"]), [
              [xt, ul.value]
            ]),
            y.value && cl.value ? (F(), G(Ln, {
              key: 6,
              modelValue: y.value,
              "onUpdate:modelValue": X[20] || (X[20] = (xe) => y.value = xe),
              onClick: co
            }, null, 8, ["modelValue"])) : le("", !0),
            E.customButtonText || E.customButtonClass ? (F(), G(ae, {
              key: 7,
              text: E.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: E.customButtonClass
            }, null, 8, ["text", "icon"])) : le("", !0),
            y.value ? Ze((F(), G(os, {
              key: 8,
              onClick: io
            }, null, 512)), [
              [xt, dl.value]
            ]) : le("", !0),
            E.infoButtonEllipsis ? (F(), G(ts, {
              key: 9,
              "show-undo": nl.value,
              "show-clear": ol.value,
              "show-password": Yt.value,
              "show-edition": E.allowReadModeSwitch,
              "show-password-check": f.value,
              "onUpdate:showPasswordCheck": X[21] || (X[21] = (xe) => f.value = xe),
              "show-edition-check": y.value,
              "onUpdate:showEditionCheck": X[22] || (X[22] = (xe) => y.value = xe),
              onUndo: $i,
              onClear: pl
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : le("", !0)
          ])) : le("", !0)
        ]),
        y.value && ((Zt = E.validation) == null ? void 0 : Zt.type) === N(Tl).Auto && p.value.length > 0 ? (F(), G(qr, {
          key: 2,
          items: p.value,
          stack: (qt = E.validation) == null ? void 0 : qt.stack
        }, null, 8, ["items", "stack"])) : le("", !0),
        y.value && N(Bl).includes(E.type) ? (F(), G(Ie, ue({
          key: 3,
          ref_key: "dropdownEl",
          ref: S,
          class: "lkt-field--dropdown",
          modelValue: B.value,
          "onUpdate:modelValue": X[23] || (X[23] = (xe) => B.value = xe),
          referrer: D.value,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, E.tooltipConfig), {
          default: se(() => [
            B.value ? (F(), oe("div", Du, [
              A.value ? (F(), G(Ee, { key: 0 })) : le("", !0),
              A.value ? le("", !0) : (F(), oe("ul", {
                key: 1,
                class: "lkt-field--dropdown-options",
                ref_key: "optionList",
                ref: T
              }, [
                (F(!0), oe(Ve, null, rt(q.value, (xe, vt) => {
                  var bt, yt, _t, Ct, wt, kt, ct, st, zt;
                  return F(), oe("li", {
                    class: Te({
                      "is-active": N(ns)(xe, s.value, E.multiple),
                      "is-focused": vt === P.value,
                      "is-disabled": xe.disabled
                    }),
                    "data-index": vt,
                    onClick: () => Pt(xe)
                  }, [
                    N(l).option ? at(E.$slots, "option", {
                      key: 0,
                      option: xe,
                      data: E.slotData,
                      modal: (bt = E.optionsConfig) == null ? void 0 : bt.modal,
                      modalData: (yt = E.optionsConfig) == null ? void 0 : yt.modalData,
                      download: (_t = E.optionsConfig) == null ? void 0 : _t.download,
                      editable: y.value
                    }) : (F(), G(Bt, {
                      key: 1,
                      option: xe,
                      "option-slot": E.optionSlot,
                      icon: (Ct = E.optionsConfig) == null ? void 0 : Ct.icon,
                      text: (wt = E.optionsConfig) == null ? void 0 : wt.text,
                      modal: (kt = E.optionsConfig) == null ? void 0 : kt.modal,
                      "modal-data": (ct = E.optionsConfig) == null ? void 0 : ct.modalData,
                      download: (st = E.optionsConfig) == null ? void 0 : st.download,
                      "label-formatter": (zt = E.optionsConfig) == null ? void 0 : zt.labelFormatter,
                      editable: y.value
                    }, null, 8, ["option", "option-slot", "icon", "text", "modal", "modal-data", "download", "label-formatter", "editable"]))
                  ], 10, Mu);
                }), 256))
              ], 512))
            ])) : le("", !0)
          ]),
          _: 3
        }, 16, ["modelValue", "referrer"])) : le("", !0)
      ], 10, Eu);
    };
  }
}), Vu = { class: "lkt-grid-1" }, Fu = /* @__PURE__ */ be({
  __name: "LktTextLanguageEditModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    translations: { default: () => ({}) }
  },
  setup(e) {
    const t = ee(() => Bo.value.filter((i) => i !== bn.value));
    return (i, n) => {
      const l = re("lkt-modal");
      return F(), G(l, {
        "modal-name": i.modalName,
        title: "__:lmm.confirmFormLeave",
        "modal-key": i.modalKey,
        "z-index": i.zIndex
      }, {
        default: se(() => [
          fe("div", Vu, [
            j(Ue, {
              type: i.type,
              label: "Idioma actual (ES)",
              modelValue: i.translations.es,
              "onUpdate:modelValue": n[0] || (n[0] = (a) => i.translations.es = a),
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "modelValue"]),
            (F(!0), oe(Ve, null, rt(t.value, (a) => (F(), G(Ue, {
              type: i.type,
              modelValue: i.translations[a],
              "onUpdate:modelValue": (u) => i.translations[a] = u,
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
}), Hu = { class: "lkt-grid-1" }, Ou = { class: "lkt-grid-3" }, Uu = { class: "lkt-grid-3" }, Pu = { class: "lkt-grid-3" }, Wu = /* @__PURE__ */ be({
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
    addingChildren: { type: Boolean }
  },
  setup(e) {
    const t = e, i = Y(t.element), n = Y(t.items), l = Y(t.index + 1), a = (c) => {
      t.addingChildren ? (Array.isArray(i.value.children) || (i.value.children = []), i.value.children.push(c)) : n.value.splice(l.value, 0, c), ++l.value, typeof t.onAppend == "function" && t.onAppend();
    }, u = (c) => {
      switch (c) {
        case pe.LktLayoutBox:
          a(Ko());
          break;
        case pe.LktTextBox:
          a(Go());
          break;
        case pe.LktLayoutAccordion:
          a(jo());
          break;
        case pe.LktTextAccordion:
          a(qo());
          break;
        case pe.LktIcon:
          a(Zo());
          break;
        case pe.LktImage:
          a($o());
          break;
        case pe.LktAnchor:
          a(Wo());
          break;
        case pe.LktButton:
          a(Po());
          break;
        case pe.LktLayout:
          a(Uo());
          break;
        case pe.LktHeader:
          a(Oo());
          break;
        case pe.LktText:
          a(Ho());
          break;
      }
    };
    return (c, o) => {
      const b = re("lkt-button"), d = re("lkt-accordion"), v = re("lkt-modal");
      return F(), G(v, ue({ id: "lkt-add-element-modal" }, {
        modalName: c.modalName,
        modalKey: c.modalKey,
        zIndex: c.zIndex,
        title: "LktBox Config"
      }), {
        default: se(() => [
          fe("div", Hu, [
            j(d, we(Be({
              type: N(je).Always,
              title: "Content"
            })), {
              default: se(() => [
                fe("div", Ou, [
                  j(b, we(Be({
                    icon: "lkt-icn-font",
                    text: "Text",
                    events: {
                      click: () => {
                        u("lkt-text");
                      }
                    }
                  })), null, 16),
                  j(b, we(Be({
                    icon: "lkt-icn-header",
                    text: "LktHeader",
                    events: {
                      click: () => {
                        u("lkt-header");
                      }
                    }
                  })), null, 16),
                  j(b, we(Be({
                    icon: "lkt-icn-picture",
                    text: "LktImage",
                    events: {
                      click: () => {
                        u("lkt-image");
                      }
                    }
                  })), null, 16),
                  j(b, we(Be({
                    icon: "lkt-icn-info",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        u("lkt-icon");
                      }
                    }
                  })), null, 16),
                  j(b, we(Be({
                    icon: "lkt-icn-font",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        u("lkt-text-box");
                      }
                    }
                  })), null, 16),
                  j(b, we(Be({
                    icon: "lkt-icn-font",
                    text: "LktTextAccordion",
                    events: {
                      click: () => {
                        u("lkt-text-accordion");
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            j(d, we(Be({
              type: N(je).Always,
              title: "Containers"
            })), {
              default: se(() => [
                fe("div", Uu, [
                  j(b, we(Be({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        u("lkt-layout-box");
                      }
                    }
                  })), null, 16),
                  j(b, we(Be({
                    icon: "lkt-icn-columns",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        u("lkt-layout-accordion");
                      }
                    }
                  })), null, 16),
                  j(b, we(Be({
                    icon: "lkt-icn-columns",
                    text: "LktLayout",
                    events: {
                      click: () => {
                        u("lkt-layout");
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            j(d, we(Be({
              type: N(je).Auto,
              title: "Actions"
            })), {
              default: se(() => [
                fe("div", Pu, [
                  j(b, we(Be({
                    icon: "lkt-icn-link",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        u("lkt-anchor");
                      }
                    }
                  })), null, 16),
                  j(b, we(Be({
                    icon: "lkt-icn-link",
                    text: "LktButton",
                    events: {
                      click: () => {
                        u("lkt-button");
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
}), $u = { class: "lkt-flex-row" }, Zu = { class: "lkt-flex-col-9 lkt-grid-1" }, qu = { class: "lkt-flex-col-3 lkt-grid-1" }, ju = { class: "lkt-grid-1" }, Gu = { class: "lkt-grid-1" }, Ku = { class: "lkt-grid-1" }, Yu = { class: "lkt-grid-1" }, Xu = /* @__PURE__ */ be({
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
    fileBrowserConfig: {}
  },
  setup(e) {
    var A, $;
    const t = e, i = () => {
      t.parentChildren.splice(t.indexInParentChildren, 1), kn(t.modalName, t.modalKey);
    }, n = (O) => {
      var P;
      return O.id = 0, (P = O.children) == null || P.forEach((V) => n(V)), O;
    }, l = () => {
      let O = JSON.parse(JSON.stringify(t.element));
      return console.log("resetCloneId(r): ", n(O)), n(O);
    }, a = () => {
      t.parentChildren.splice(t.indexInParentChildren - 1, 0, l()), t.indexInParentChildren += 1;
    }, u = () => {
      t.parentChildren.splice(t.indexInParentChildren + 1, 0, l());
    }, c = Y(t.element), o = zo(), b = vn(), d = [pe.LktLayoutBox, pe.LktLayoutAccordion, pe.LktTextBox, pe.LktTextAccordion].includes(c.value.type), v = [pe.LktLayoutBox, pe.LktLayoutAccordion, pe.LktTextBox, pe.LktTextAccordion, pe.LktIcon].includes(c.value.type), w = [pe.LktLayoutBox, pe.LktLayoutAccordion, pe.LktLayout].includes(c.value.type), k = [pe.LktImage].includes(c.value.type), L = [pe.LktLayoutAccordion, pe.LktTextAccordion].includes(c.value.type), R = [pe.LktLayoutAccordion, pe.LktLayoutBox, pe.LktLayout].includes(c.value.type), s = [qe.FlexRow, qe.FlexRows].includes(($ = (A = t.parent) == null ? void 0 : A.layout) == null ? void 0 : $.type), r = [
      {
        value: je.Auto,
        label: "Auto"
      },
      {
        value: je.Always,
        label: "Always"
      },
      {
        value: je.Lazy,
        label: "Lazy"
      },
      {
        value: je.Ever,
        label: "Ever"
      }
    ], f = [
      {
        value: qe.Grid,
        label: "Grid"
      },
      {
        value: qe.FlexRow,
        label: "Flex Row"
      },
      {
        value: qe.FlexRows,
        label: "Flex Rows"
      },
      {
        value: qe.FlexColumn,
        label: "Flex Column"
      }
    ], h = [
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
    ], m = [
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
    ], g = [
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
    ], p = [
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
    ], y = (O, P) => {
      if (O.length > 0) {
        let V = String(P.value), W = "";
        if (V.includes("--from") && (W = "--" + V.split("--")[1]), V.includes("--to") && (W = "--" + V.split("--")[1]), W !== "") {
          let M = O.find((z) => String(z).includes(W));
          if (M)
            return M === P.value;
        }
        let I = O.find((M) => !String(M).includes("--"));
        if (I)
          return I === V || V.includes("--");
      }
      return !0;
    }, C = (O) => {
      var P;
      return y(
        ((P = t.element.layout) == null ? void 0 : P.amountOfItems) ?? [],
        O
      );
    }, _ = (O) => {
      var P;
      return y(
        ((P = t.element.layout) == null ? void 0 : P.alignItems) ?? [],
        O
      );
    }, S = (O) => {
      var P;
      return y(
        ((P = t.element.layout) == null ? void 0 : P.justifyContent) ?? [],
        O
      );
    }, D = (O) => {
      var P;
      return y(
        ((P = t.element.layout) == null ? void 0 : P.columns) ?? [],
        O
      );
    }, T = ee(() => {
      let O = {};
      switch (c.value.type) {
        case pe.LktLayoutBox:
        case pe.LktTextBox:
          O = Ke.defaultFieldLktBoxElementCustomClassField;
          break;
        case pe.LktLayoutAccordion:
        case pe.LktTextAccordion:
          O = Ke.defaultFieldLktAccordionElementCustomClassField;
          break;
        case pe.LktIcon:
          O = Ke.defaultFieldLktIconElementCustomClassField;
          break;
        case pe.LktImage:
          O = Ke.defaultFieldLktImageElementCustomClassField;
          break;
      }
      return Object.keys(O).length > 0 ? Yo(O, Ke.defaultFieldElementCustomClassField) : void 0;
    }), B = ee(() => Eo(To(c.value.type)) + " Config");
    return (O, P) => {
      const V = re("lkt-accordion"), W = re("lkt-button"), I = re("lkt-item-crud");
      return F(), G(I, ue({
        class: "lkt-field-element-config-modal",
        modelValue: c.value,
        "onUpdate:modelValue": P[0] || (P[0] = (M) => c.value = M)
      }, {
        mode: N(Gi).Update,
        view: N(wn).Modal,
        editing: !0,
        perms: ["update"],
        title: B.value,
        modalConfig: {
          modalName: O.modalName,
          modalKey: O.modalKey,
          zIndex: O.zIndex,
          title: B.value
        },
        updateButton: !1
      }), {
        item: se(({ item: M }) => {
          var z;
          return [
            fe("div", $u, [
              fe("div", Zu, [
                j(Ji, {
                  element: O.element,
                  "is-preview": "",
                  "parent-children": O.parentChildren,
                  index: O.indexInParentChildren,
                  "can-render-actions": !1
                }, null, 8, ["element", "parent-children", "index"]),
                (F(!0), oe(Ve, null, rt(N(o), (U) => (F(), oe(Ve, null, [
                  U !== N(b) ? (F(), G(V, ue({
                    key: 0,
                    ref_for: !0
                  }, {
                    type: N(je).Auto,
                    title: U
                  }), {
                    default: se(() => [
                      j(Ji, {
                        element: O.element,
                        lang: U,
                        "is-preview": "",
                        "parent-children": O.parentChildren,
                        index: O.indexInParentChildren,
                        "can-render-actions": !1
                      }, null, 8, ["element", "lang", "parent-children", "index"])
                    ]),
                    _: 2
                  }, 1040)) : le("", !0)
                ], 64))), 256))
              ]),
              fe("div", qu, [
                N(R) ? (F(), G(W, we(ue({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-field-add-element-config",
                  modalData: {
                    items: c.value.children,
                    index: (z = c.value.children) == null ? void 0 : z.length,
                    element: O.element,
                    addingChildren: !0
                  }
                })), null, 16)) : le("", !0),
                j(V, we(Be({
                  type: N(je).Auto,
                  title: "Config",
                  modelValue: !0
                })), {
                  default: se(() => [
                    fe("div", ju, [
                      T.value ? (F(), G(Ue, ue({ key: 0 }, {
                        type: N(Z).Select,
                        ...T.value,
                        canClear: !0
                      }, {
                        modelValue: M.props.class,
                        "onUpdate:modelValue": (U) => M.props.class = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      N(d) ? (F(), G(Ue, ue({ key: 1 }, {
                        type: N(Z).Switch,
                        label: "Has header"
                      }, {
                        modelValue: M.config.hasHeader,
                        "onUpdate:modelValue": (U) => M.config.hasHeader = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      N(v) ? (F(), G(Ue, ue({ key: 2 }, {
                        type: N(Z).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: M.config.hasIcon,
                        "onUpdate:modelValue": (U) => M.config.hasIcon = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      N(v) ? (F(), G(Ue, ue({ key: 3 }, {
                        type: N(Z).Text,
                        label: "Icon"
                      }, {
                        modelValue: M.props.icon,
                        "onUpdate:modelValue": (U) => M.props.icon = U,
                        disabled: !M.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : le("", !0),
                      N(k) ? (F(), G(Ue, ue({ key: 4 }, {
                        type: N(Z).Image,
                        label: "Image",
                        fileBrowserConfig: O.fileBrowserConfig
                      }, {
                        modelValue: M.props.src,
                        "onUpdate:modelValue": (U) => M.props.src = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040),
                N(L) ? (F(), G(V, we(ue({ key: 1 }, {
                  type: N(je).Auto,
                  title: "Accordion Config"
                })), {
                  default: se(() => [
                    fe("div", Gu, [
                      j(Ue, ue({
                        type: N(Z).Select,
                        label: "Type",
                        options: r
                      }, {
                        modelValue: M.props.type,
                        "onUpdate:modelValue": (U) => M.props.type = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : le("", !0),
                N(w) || N(s) ? (F(), G(V, we(ue({ key: 2 }, {
                  type: N(je).Auto,
                  title: "Layout Config"
                })), {
                  default: se(() => [
                    fe("div", Ku, [
                      N(w) ? (F(), G(Ue, ue({ key: 0 }, {
                        type: N(Z).Select,
                        label: "Type",
                        options: f
                      }, {
                        modelValue: M.layout.type,
                        "onUpdate:modelValue": (U) => M.layout.type = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      N(w) && M.layout.type !== N(qe).FlexColumn ? (F(), G(Ue, ue({ key: 1 }, {
                        type: N(Z).Select,
                        label: O.element.layout.type === N(qe).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: h,
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: C
                        }
                      }, {
                        modelValue: M.layout.amountOfItems,
                        "onUpdate:modelValue": (U) => M.layout.amountOfItems = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      N(w) ? (F(), G(Ue, ue({ key: 2 }, {
                        type: N(Z).Select,
                        label: "Align items",
                        options: g,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: _
                        }
                      }, {
                        modelValue: M.layout.alignItems,
                        "onUpdate:modelValue": (U) => M.layout.alignItems = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      N(w) ? (F(), G(Ue, ue({ key: 3 }, {
                        type: N(Z).Select,
                        label: "Justify content",
                        options: p,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: S
                        }
                      }, {
                        modelValue: M.layout.justifyContent,
                        "onUpdate:modelValue": (U) => M.layout.justifyContent = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0),
                      N(s) ? (F(), G(Ue, ue({ key: 4 }, {
                        type: N(Z).Select,
                        label: "Columns Reserved",
                        options: m,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: D
                        }
                      }, {
                        modelValue: M.layout.columns,
                        "onUpdate:modelValue": (U) => M.layout.columns = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : le("", !0),
                j(W, we(Be({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: N(At).Split
                })), {
                  split: se(({ doClose: U }) => [
                    fe("div", Yu, [
                      j(W, we(Be({
                        text: "Before",
                        events: {
                          click: a
                        }
                      })), null, 16),
                      j(W, we(Be({
                        text: "After",
                        events: {
                          click: u
                        }
                      })), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16),
                j(W, we(Be({
                  text: "Remove element",
                  icon: "lkt-icn-less",
                  events: {
                    click: i
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
}), Ju = { class: "lkt-file-entity-main" }, Qu = /* @__PURE__ */ be({
  __name: "FileEntityBox",
  props: {
    modelValue: {}
  },
  emits: [
    "double-click"
  ],
  setup(e, { emit: t }) {
    const i = e, n = t, l = Y(i.modelValue), a = Y(0);
    let u;
    const c = () => {
      ++a.value, a.value === 1 ? u = setTimeout(() => {
        l.value.isPicked = !l.value.isPicked, a.value = 0;
      }, 225) : (clearTimeout(u), n("double-click", l.value), a.value = 0);
    }, o = ee(() => l.value.isPicked ? "lkt-icn-checkbox" : "lkt-icn-checkbox-empty");
    return (b, d) => {
      const v = re("lkt-icon"), w = re("lkt-image");
      return F(), oe("div", {
        class: "lkt-file-entity-box",
        onClick: c
      }, [
        fe("div", Ju, [
          l.value.type !== N(Je).Directory ? (F(), oe("i", {
            key: 0,
            class: Te(["lkt-file-entity-picked-indicator", o.value])
          }, null, 2)) : le("", !0),
          l.value.type === N(Je).Directory ? (F(), G(v, we(ue({ key: 1 }, {
            icon: "lkt-icn-folder",
            text: l.value.name
          })), null, 16)) : l.value.type === N(Je).Image ? (F(), G(w, we(ue({ key: 2 }, {
            src: l.value.src,
            text: l.value.name
          })), null, 16)) : le("", !0)
        ])
      ]);
    };
  }
}), ed = { class: "lkt-file-entity-details" }, td = {
  key: 0,
  class: "lkt-grid-1"
}, id = /* @__PURE__ */ be({
  __name: "FileEntityDetails",
  props: {
    editMode: { type: Boolean, default: !1 },
    modelValue: {},
    fileBrowserConfig: {}
  },
  setup(e) {
    const i = Y(e.modelValue);
    return (n, l) => {
      const a = re("lkt-field");
      return F(), oe("div", ed, [
        i.value.type === N(Je).Image ? (F(), oe("div", td, [
          j(a, ue({
            modelValue: i.value.src,
            "onUpdate:modelValue": l[0] || (l[0] = (u) => i.value.src = u)
          }, {
            type: N(Z).Image,
            label: "File",
            readMode: !n.editMode
          }), null, 16, ["modelValue"]),
          j(a, ue({
            modelValue: i.value.name,
            "onUpdate:modelValue": l[1] || (l[1] = (u) => i.value.name = u)
          }, {
            type: N(Z).Text,
            label: "Name",
            readMode: !n.editMode
          }), null, 16, ["modelValue"])
        ])) : le("", !0)
      ]);
    };
  }
}), ld = { class: "lkt-flex-row" }, nd = { class: "lkt-flex-col-3" }, od = { class: "lkt-flex-column" }, sd = { class: "lkt-flex-col-9" }, ad = /* @__PURE__ */ be({
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
    const i = e, n = Y(!1), l = Y([]), a = Y({}), u = Y(void 0), c = Y(i.modelValue), o = (f) => {
      u.value = void 0, Ot(() => {
        u.value = f;
      });
    }, b = () => {
      var h, m;
      let f = new Nl();
      (m = (h = u.value) == null ? void 0 : h.children) == null || m.push(f), o(f);
    }, d = (f, h) => {
      for (let m in h) {
        if (h[m].id === f) return h[m];
        if (h[m].children.length > 0) {
          let g = d(f, h[m].children);
          if (g) return g;
        }
      }
    }, v = () => {
      var f, h;
      if ((f = u.value) != null && f.parent) {
        let m = d((h = u.value) == null ? void 0 : h.parent, l.value);
        m && o(m);
      }
    }, w = () => {
      let f = [];
      c.value.forEach((h) => {
        let m = d(h, l.value);
        m && f.push(m);
      }), typeof i.onConfirmSelection == "function" && i.onConfirmSelection(f), kn(i.modalName, i.modalKey);
    }, k = ee(() => {
      var f;
      switch ((f = u.value) == null ? void 0 : f.type) {
        case Je.Image:
          return "lkt-icn-picture";
        case Je.Directory:
          return "lkt-icn-folder-open";
        default:
          return "";
      }
    }), L = (f) => {
      switch (f.type) {
        case Je.Image:
          return "lkt-icn-picture";
        case Je.Directory:
          return "lkt-icn-folder";
        default:
          return "";
      }
    }, R = (f) => {
      let h = L(f), m = {};
      return h !== "" && (m = {
        icon: h,
        position: Jo.Start
      }), {
        key: String(f.id),
        type: es.Anchor,
        anchor: {
          icon: m,
          text: f.name,
          type: Qo.Action,
          events: {
            click: () => {
              o(f);
            }
          }
        },
        keepOpenOnChildClick: !0,
        // class?: string;
        // icon?: string;
        children: f.children ? f.children.map(R) : []
      };
    }, s = (f) => {
      f.forEach((h) => {
        var m;
        h.isPicked && c.value.push(h.id), ((m = h.children) == null ? void 0 : m.length) > 0 && s(h.children);
      });
    }, r = () => {
      var f, h;
      (h = (f = i.fileBrowserConfig) == null ? void 0 : f.http) != null && h.resource && (n.value = !0, Di(i.fileBrowserConfig.http.resource, i.fileBrowserConfig.http.data).then((m) => {
        n.value = !1, l.value = m.data.map((g) => new Nl(g)), console.log("new mapped items: ", l.value), l.value.length > 0 && o(l.value[0]), l.value.forEach((g, p) => {
          var C;
          let y = `unit-${p}`;
          a.value[y] = ((C = g.children) == null ? void 0 : C.map(R)) ?? [];
        });
      }).catch((m) => {
        n.value = !1;
      }));
    };
    return de(u, (f) => {
      console.log("updatedActiveElement: ", f);
    }, { deep: !0 }), de(l, (f) => {
      console.log("updatedItems: ", f), c.value = [], s(l.value), console.log("pickedItems: ", c.value);
    }, { deep: !0 }), Hi(() => {
      r();
    }), (f, h) => {
      const m = re("lkt-menu"), g = re("lkt-accordion"), p = re("lkt-button"), y = re("lkt-table"), C = re("lkt-item-crud"), _ = re("lkt-modal");
      return F(), G(_, {
        "modal-name": f.modalName,
        "modal-key": f.modalKey,
        "z-index": f.zIndex,
        title: "File Browser",
        class: "lkt-file-browser"
      }, {
        default: se(() => [
          fe("div", ld, [
            fe("div", nd, [
              (F(!0), oe(Ve, null, rt(l.value, (S, D) => (F(), G(g, ue({ ref_for: !0 }, {
                modelValue: D === 0,
                title: S.name,
                toggleMode: N(Xo).Display,
                type: l.value.length === 1 ? N(je).Always : N(je).Auto
              }), {
                default: se(() => [
                  fe("div", od, [
                    j(m, ue({ ref_for: !0 }, {
                      modelValue: a.value[`unit-${D}`]
                    }), null, 16)
                  ])
                ]),
                _: 2
              }, 1040))), 256))
            ]),
            fe("div", sd, [
              u.value ? (F(), G(g, we(ue({ key: 0 }, {
                type: N(je).Always,
                icon: k.value,
                title: u.value.name
              })), {
                default: se(() => {
                  var S, D;
                  return [
                    [N(Je).Directory, N(Je).StorageUnit].includes(u.value.type) ? (F(), G(y, ue({
                      key: 0,
                      modelValue: u.value.children,
                      "onUpdate:modelValue": h[0] || (h[0] = (T) => u.value.children = T)
                    }, {
                      type: N(Vi).Item,
                      perms: [
                        N(ft).SwitchEditMode,
                        N(ft).Update,
                        N(ft).Edit,
                        N(ft).Create
                      ],
                      itemsContainerClass: "lkt-flex-rows-12 lkt-flex-rows-2--from-768",
                      saveButton: {
                        text: "Save",
                        type: N(At).Button
                      },
                      createButton: {
                        text: "Create",
                        type: N(At).Button
                      }
                    }, { onClickCreate: b }), Tt({
                      item: se(({ item: T, index: B }) => [
                        j(Qu, {
                          modelValue: u.value.children[B],
                          "onUpdate:modelValue": (A) => u.value.children[B] = A,
                          onDoubleClick: o
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, [
                      u.value.type !== N(Je).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: se(() => [
                          j(p, we(Be({
                            icon: "lkt-icn-arrow-left",
                            events: {
                              click: v
                            }
                          })), null, 16),
                          j(p, we(Be({
                            icon: "lkt-icn-check",
                            disabled: c.value.length === 0,
                            events: {
                              click: w
                            }
                          })), null, 16)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : (F(), G(C, ue({
                      key: 1,
                      modelValue: u.value,
                      "onUpdate:modelValue": h[2] || (h[2] = (T) => u.value = T)
                    }, {
                      view: N(wn).Inline,
                      mode: u.value.id ? N(Gi).Update : N(Gi).Create,
                      editing: !1,
                      perms: ["switch-edit-mode", "update"],
                      createButton: {
                        ...(S = f.fileBrowserConfig) == null ? void 0 : S.entityCreateButton,
                        resourceData: u.value,
                        events: {
                          click: () => {
                            for (let T in u.value)
                              f.modelValue[T] = f.entity[T];
                          }
                        }
                      },
                      updateButton: {
                        ...(D = f.fileBrowserConfig) == null ? void 0 : D.entityUpdateButton,
                        resourceData: u.value,
                        events: {
                          click: () => {
                            for (let T in u.value)
                              f.modelValue[T] = f.entity[T];
                          }
                        }
                      }
                    }), Tt({
                      item: se(({ item: T, editMode: B }) => [
                        j(id, {
                          modelValue: u.value,
                          "onUpdate:modelValue": h[1] || (h[1] = (A) => u.value = A),
                          "file-browser-config": f.fileBrowserConfig,
                          "edit-mode": B
                        }, null, 8, ["modelValue", "file-browser-config", "edit-mode"])
                      ]),
                      _: 2
                    }, [
                      u.value.type !== N(Je).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: se(() => [
                          j(p, we(Be({
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
}), gd = (e, t) => (te.customValueSlots[e] = t, !0), vd = (e, t) => (te.customEditSlots[e] = t, !0), bd = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", Ue), li("lkt-field-language-edit", Fu), li("lkt-field-add-element-config", Wu), li("lkt-field-element-config", Xu), li("lkt-file-browser", ad));
  }
}, yd = (e) => {
  te.defaultEmptyValueSlot = e;
}, _d = (e, t) => {
  te.optionSlots[e] = t;
}, Cd = (e) => te.undoText = e, wd = (e) => te.clearText = e, kd = (e) => te.i18nText = e, xd = (e) => te.switchEditionOnText = e, Sd = (e) => te.switchEditionOffText = e, Ld = (e) => te.showPasswordOnText = e, Ed = (e) => te.showPasswordOffText = e, Td = (e) => te.dateReadFormat = e, Bd = (e) => te.defaultDateReadFormat = e, zd = (e, t, i = "default") => {
  i || (i = "default"), te.validationMessages[i] || (te.validationMessages[i] = {}), te.validationMessages[i][e] = t;
}, Nd = (e) => (te.validationIconSlot = e, !0), Ad = (e = 2, t = ".", i = ".", n = !0, l = "") => l !== "" ? (te.langNumberFormat[l].amountOfDecimals = e, te.langNumberFormat[l].decimalSeparator = t, te.langNumberFormat[l].thousandsSeparator = i, te.langNumberFormat[l].removeDecimalsIfZero = n, !0) : (te.amountOfDecimals = e, te.decimalSeparator = t, te.thousandsSeparator = i, te.removeDecimalsIfZero = n, !0), Rd = (e) => {
  te.readTextMaxLength = e;
}, Id = (e, t) => {
  te.modalPerItemType[e] = t;
};
export {
  Vd as Field,
  Ue as LktField,
  Fd as Option,
  bd as default,
  wd as setFieldClearText,
  Td as setFieldDateReadFormat,
  Bd as setFieldDefaultDateReadFormat,
  yd as setFieldEmptySlot,
  kd as setFieldI18nText,
  Ad as setFieldNumberFormat,
  _d as setFieldOptionSlot,
  Ed as setFieldShowPasswordOffText,
  Ld as setFieldShowPasswordOnText,
  Sd as setFieldSwitchEditionOffText,
  xd as setFieldSwitchEditionOnText,
  Cd as setFieldUndoText,
  Nd as setFieldValidationIconSlot,
  zd as setFieldValidationMessage,
  Id as setModalPerItemType,
  Rd as setReadTextMaxLength,
  vd as setTextEditSlot,
  gd as setTextValueSlot
};
