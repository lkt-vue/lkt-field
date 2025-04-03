import { defineComponent as ve, computed as ee, resolveComponent as de, createBlock as j, openBlock as H, normalizeClass as Te, ref as X, watch as ce, withCtx as re, createCommentVNode as se, resolveDynamicComponent as Tt, mergeProps as ye, createElementBlock as ne, createElementVNode as le, toDisplayString as ct, Fragment as Ve, renderList as Xe, createVNode as Y, unref as I, normalizeStyle as $i, withDirectives as Ze, vModelCheckbox as go, onMounted as Xi, vModelText as Mi, vShow as kt, nextTick as qt, createTextVNode as zt, useSlots as Ji, renderSlot as st, createStaticVNode as vo, createSlots as Vt, setBlockTracking as Sl, normalizeProps as ke, guardReactiveProps as Ne, mergeDefaults as bo, isRef as Ke, vModelDynamic as yo } from "vue";
import { stripTags as hn, fill as _o, generateRandomString as Co, formatNumber as Ll, isEmail as wo, ucfirst as ko, kebabCaseToCamelCase as xo } from "lkt-string-tools";
import { httpCall as Zi } from "lkt-http-client";
import { __ as pn, getCurrentLanguage as mn, currentLanguage as gn, availableLanguages as So, getAvailableLanguages as Lo } from "lkt-i18n";
import { extractPropValue as xt, LktSettings as Ge, Option as Ii, FieldType as Z, LktColor as vn, TooltipLocationX as bn, TooltipLocationY as yn, ButtonType as jt, FieldValidation as De, ValidationStatus as Me, MultipleOptionsDisplay as oi, TableType as qi, booleanFieldTypes as St, WebElementType as he, WebElementLayoutType as qe, TablePermission as Pt, WebElement as Eo, fieldsWithMultipleMode as To, FieldValidationType as El, extractI18nValue as Wt, fieldTypesWithoutUndo as zo, fieldTypesWithoutClear as Bo, FieldAutoValidationTrigger as No, textFieldTypes as Ao, fieldTypesWithOptions as Tl, getDefaultValues as Ro, Field as Io, ToastPositionX as zl, AccordionType as at, getDefaultLktTextWebElement as Do, getDefaultLktHeaderWebElement as Mo, getDefaultLktLayoutWebElement as Vo, getDefaultLktButtonWebElement as Fo, getDefaultLktAnchorWebElement as Ho, getDefaultLktImageWebElement as Oo, getDefaultLktIconWebElement as Uo, getDefaultLktTextAccordionWebElement as Po, getDefaultLktLayoutAccordionWebElement as Wo, getDefaultLktTextBoxWebElement as $o, getDefaultLktLayoutBoxWebElement as Zo, ensureFieldConfig as qo, ItemCrudView as jo, ItemCrudMode as Go, FileEntityType as $t, AccordionToggleMode as Ko, MenuEntryType as Yo } from "lkt-vue-kernel";
import { Field as Dd, Option as Md } from "lkt-vue-kernel";
import { date as Zt } from "lkt-date-tools";
import { openToast as Bl } from "lkt-toast";
import { closeModal as Xo, addModal as ii } from "lkt-modal";
const we = class we {
};
we.defaultEmptyValueSlot = "", we.customValueSlots = {}, we.customEditSlots = {}, we.searchKeyForResource = "query", we.optionSlots = {}, we.defaultDateIcon = "lkt-icn-calendar-empty-outline", we.defaultNumberFeaturedButton = "subtract", we.undoText = "", we.clearText = "", we.i18nText = "", we.switchEditionOnText = "", we.switchEditionOffText = "", we.showPasswordOnText = "", we.showPasswordOffText = "", we.dateReadFormat = "", we.defaultDateReadFormat = "Y-m-d", we.langDateReadFormat = {
  en: "Y-m-d",
  es: "d/m/Y"
}, we.acceptTypes = {
  file: "*/*",
  image: "image/*"
}, we.validationIconSlot = "", we.validationMessages = {
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
}, we.amountOfDecimals = void 0, we.decimalSeparator = ".", we.thousandsSeparator = "", we.removeDecimalsIfZero = !0, we.langNumberFormat = {
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
}, we.readTextMaxLength = void 0, we.modalPerItemType = {};
let te = we;
const _n = /* @__PURE__ */ ve({
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
      const b = de("lkt-button");
      return H(), j(b, {
        text: c.insideEllipsis ? l.value : "",
        title: l.value,
        class: Te([a.value, "lkt-field--btn-undo"]),
        icon: "lkt-icn-undo",
        onClick: u
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Cn = /* @__PURE__ */ ve({
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
      const b = de("lkt-button");
      return H(), j(b, {
        text: c.insideEllipsis ? l.value : "",
        title: l.value,
        class: Te(a.value),
        icon: "lkt-icn-cancel",
        onClick: u
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), ji = /* @__PURE__ */ ve({
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
    const i = t, n = e, l = X(n.modelValue);
    ce(() => n.modelValue, (b) => l.value = b), ce(l, (b) => i("update:modelValue", b));
    const a = ee(() => l.value ? te.showPasswordOnText : te.showPasswordOffText), u = ee(() => l.value === !0 ? "lkt-icn-see" : "lkt-icn-not-see"), c = ee(() => n.isFeatured ? "lkt-field--atn-btn" : n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (b, d) => {
      const g = de("lkt-button");
      return H(), j(g, {
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
}), wn = /* @__PURE__ */ ve({
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
    const i = t, n = e, l = X(n.modelValue);
    ce(() => n.modelValue, (b) => l.value = b), ce(l, (b) => i("update:modelValue", b));
    const a = ee(() => l.value ? te.switchEditionOnText : te.switchEditionOffText), u = ee(() => l.value === !0 ? "lkt-icon-see" : "lkt-icn-edit"), c = ee(() => n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (b, d) => {
      const g = de("lkt-button");
      return H(), j(g, {
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
}), Jo = /* @__PURE__ */ ve({
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
    const i = t, n = e, l = X(n.showPasswordCheck);
    ce(() => n.showPasswordCheck, (u) => l.value = u), ce(l, (u) => i("update:showPasswordCheck", u));
    const a = X(n.showEditionCheck);
    return ce(() => n.showEditionCheck, (u) => a.value = u), ce(a, (u) => i("update:showEditionCheck", u)), (u, c) => {
      const o = de("lkt-button");
      return H(), j(o, {
        split: "",
        "split-icon": "lkt-icn-ellipsis-menu-vertical",
        class: "lkt-field--info-btn"
      }, {
        split: re(({ doClose: b }) => [
          u.showUndo ? (H(), j(_n, {
            key: 0,
            onClick: c[0] || (c[0] = () => i("undo")),
            "inside-ellipsis": ""
          })) : se("", !0),
          u.showClear ? (H(), j(Cn, {
            key: 1,
            onClick: c[1] || (c[1] = () => i("clear")),
            "inside-ellipsis": ""
          })) : se("", !0),
          u.showPassword ? (H(), j(ji, {
            key: 2,
            modelValue: l.value,
            "onUpdate:modelValue": c[2] || (c[2] = (d) => l.value = d),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : se("", !0),
          u.showEdition ? (H(), j(wn, {
            key: 3,
            modelValue: a.value,
            "onUpdate:modelValue": c[3] || (c[3] = (d) => a.value = d),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : se("", !0)
        ]),
        _: 1
      });
    };
  }
}), Nl = /* @__PURE__ */ ve({
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
    const i = t, n = e, l = X(n.modelValue);
    ce(() => n.modelValue, (c) => l.value = c, { deep: !0 }), ce(l, (c) => i("update:modelValue", c), { deep: !0 });
    const a = ee(() => te.i18nText), u = ee(() => n.isFeatured ? "lkt-field--atn-btn" : n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (c, o) => {
      const b = de("lkt-button");
      return H(), j(b, {
        text: c.insideEllipsis ? a.value : "",
        title: a.value,
        class: Te(u.value),
        icon: "lkt-icn-lang-picker",
        modal: "lkt-field-language-edit",
        "modal-data": { translations: l.value, type: c.type }
      }, null, 8, ["text", "title", "class", "modal-data"]);
    };
  }
}), Qo = (e, t, i) => (e = Number(e), t !== !1 && e < t && (e = t), i !== !1 && e > i && (e = i), e), Di = (e, t) => {
  if (typeof e == "string" && (e = xt(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let i = e.substring(3), n = pn(i), l = [];
    for (let a in n) l.push({ value: a, label: n[a] });
    return Ge.i18nOptionsFormatter[i] && (l = Ge.i18nOptionsFormatter[i](l)), Di(l, t);
  }
  return Array.isArray(e) ? e.length === 0 ? e : e.map((i) => {
    if (typeof i == "object") return new Ii(i);
    if (typeof i == "string" || typeof i == "number")
      return new Ii({
        label: String(i),
        value: i
      });
  }).filter((i) => typeof i < "u") : [];
}, Pi = (e, t = "", i = !0, n = void 0) => {
  if (t === "" && typeof n != "function") return e;
  let l = e;
  const a = String(t).toLowerCase();
  return a !== "" && (l = l.filter((u) => {
    let c = String(u.label).toLowerCase();
    return c.indexOf(a) !== -1 && (i || c !== a);
  })), typeof n == "function" && (l = l.filter((u) => n(u))), l;
}, li = (e, t) => {
  if (t !== "")
    return e.find((i) => Array.isArray(t) ? t.includes(i.value) : i.value == t);
}, es = (e, t, i) => {
  const n = /* @__PURE__ */ new Set(), l = [...e, ...Di(t, i)], a = [];
  return l.forEach((u) => {
    let c = [u.value, u.label].join("-");
    n.has(c) || (a.push(u), n.add(c));
  }), a;
}, ts = (e, t, i) => {
  if (i) {
    if (Array.isArray(t)) {
      let n = t.findIndex((l) => l == e.value);
      return typeof n > "u" ? !1 : n > -1;
    }
    return !1;
  }
  return e.value == t;
}, Mt = (e, t) => {
  let i = t.findIndex((n) => n == e.value);
  return typeof i > "u" && (i = -1), i;
}, Qi = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), kn = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), Qi(e) ? Zt(t, e) : ""), is = /* @__PURE__ */ ve({
  __name: "DropdownButton",
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, n = ee(() => te.undoText), l = ee(() => "lkt-field--info-btn"), a = () => i("click");
    return (u, c) => {
      const o = de("lkt-button");
      return H(), j(o, {
        text: n.value,
        title: n.value,
        class: Te([l.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-icn-angle-bottom",
        onClick: a,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), ls = {
  key: 0,
  class: "lkt-field--dropdown-option--icon-container"
}, ns = { class: "lkt-field--dropdown-option--label-container" }, Lt = /* @__PURE__ */ ve({
  __name: "DropdownOption",
  props: {
    option: { default: () => new Ii() },
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
        let S = n.option.modal;
        n.modal && (S = n.modal);
        let L = S;
        return typeof S == "function" && (L = () => S(n.option)), {
          modal: L,
          modalData: n.modalData,
          modalKey: n.option.value,
          icon: l.value
        };
      }
      if (b.value === "lkt-anchor") {
        let S = n.download;
        typeof n.download == "function" ? S = () => n.download(n.option) : n.download.startsWith("prop:") && (S = n.download.substring(5), S = n.option[S]);
        let L = n.download !== "";
        return {
          href: S,
          target: L ? "_blank" : "",
          download: L
        };
      }
      return b.value === "lkt-tag" ? {
        type: "action-icon",
        icon: "lkt-icn-cancel"
      } : {};
    }), g = () => {
      i("click");
    }, w = () => {
      i("click-icon", n.option);
    };
    return (S, L) => {
      const A = de("lkt-tag");
      return H(), j(Tt(b.value), ye(d.value, {
        class: ["lkt-field--dropdown-option", c.value],
        title: a.value,
        onClick: g,
        onClickIcon: w
      }), {
        default: re(() => [
          l.value && b.value !== "lkt-button" ? (H(), ne("div", ls, [
            le("i", {
              class: Te(l.value)
            }, null, 2)
          ])) : se("", !0),
          le("div", ns, ct(a.value), 1),
          (H(!0), ne(Ve, null, Xe(S.option.tags, (s) => (H(), j(A, ye({ ref_for: !0 }, s), null, 16))), 256))
        ]),
        _: 1
      }, 16, ["class", "title"]);
    };
  }
}), os = { class: "lkt-field-color--tooltip--rgba-container" }, ss = { class: "lkt-field-color--tooltip--numeric-input-container" }, as = { class: "like-lkt-field-label" }, ni = /* @__PURE__ */ ve({
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
    const i = t, n = e, l = X(n.modelValue);
    return ce(() => n.modelValue, (a) => l.value = a), ce(l, (a) => i("update:modelValue", a)), (a, u) => (H(), ne("div", os, [
      le("div", ss, [
        le("label", as, ct(a.label), 1),
        Y(Ue, ye({
          modelValue: l.value,
          "onUpdate:modelValue": u[0] || (u[0] = (c) => l.value = c)
        }, {
          type: I(Z).Number,
          min: 0,
          max: 255,
          step: 1,
          canStep: !1
        }), null, 16, ["modelValue"])
      ]),
      Y(Ue, ye({
        class: ["color-range", a.rangeClass],
        modelValue: l.value,
        "onUpdate:modelValue": u[1] || (u[1] = (c) => l.value = c)
      }, {
        type: I(Z).Range,
        min: 0,
        max: 255,
        step: 1
      }), null, 16, ["class", "modelValue"])
    ]));
  }
}), rs = (e, t, i, n) => new vn({ r: e, g: t, b: i, a: n }).toString(), Al = (e) => vn.fromHexColor(e), us = (e) => e.getContrastFontColor(), ds = { class: "lkt-grid-1" }, cs = { class: "lkt-field-color--tooltip--rgba-container" }, fs = { class: "lkt-field-color--tooltip--hex-input-container" }, xn = /* @__PURE__ */ ve({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, n = e, l = (A) => {
      if ([0, 1].includes(A.length))
        c.value = 0, o.value = 0, b.value = 0, d.value = 255;
      else if ([7, 9].includes(A.length)) {
        let s = Al(A);
        c.value = s.r, o.value = s.g, b.value = s.b, d.value = s.a;
      }
    }, a = () => {
      g.value = rs(
        c.value,
        o.value,
        b.value,
        d.value
      );
    }, u = () => {
      l(g.value);
    }, c = X(255), o = X(255), b = X(255), d = X(255), g = X(n.modelValue);
    l(g.value), ce([c, o, b, d], a), ce(() => n.modelValue, (A) => g.value = A), ce(g, (A) => i("update:modelValue", A));
    const w = ee(() => us(Al(g.value))), S = ee(() => g.value === "" || g.value === "#" ? {} : {
      background: g.value,
      "--lkt-btn-bg": g.value,
      color: w.value,
      "--lkt-btn-color": w.value
    }), L = ee(() => g.value === "" || g.value === "#" ? {} : {
      "--lkt-field-bg-input": g.value,
      "--lkt-field-color": w.value
    });
    return (A, s) => {
      const r = de("lkt-button");
      return H(), j(r, {
        class: "lkt-field--toggle-button",
        style: $i(S.value),
        text: g.value,
        type: I(jt).Tooltip,
        tooltip: {
          class: "lkt-field-color--tooltip",
          locationY: I(yn).Bottom,
          locationX: I(bn).LeftCorner
        }
      }, {
        tooltip: re(({ doClose: f }) => [
          le("div", ds, [
            le("div", cs, [
              le("div", fs, [
                s[5] || (s[5] = le("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                Y(Ue, {
                  modelValue: g.value,
                  "onUpdate:modelValue": s[0] || (s[0] = (p) => g.value = p),
                  style: $i(L.value),
                  onChange: u
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            Y(ni, {
              modelValue: c.value,
              "onUpdate:modelValue": s[1] || (s[1] = (p) => c.value = p),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            Y(ni, {
              modelValue: o.value,
              "onUpdate:modelValue": s[2] || (s[2] = (p) => o.value = p),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            Y(ni, {
              modelValue: b.value,
              "onUpdate:modelValue": s[3] || (s[3] = (p) => b.value = p),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            Y(ni, {
              modelValue: d.value,
              "onUpdate:modelValue": s[4] || (s[4] = (p) => d.value = p),
              label: "A",
              "range-class": "color-range--alpha"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["style", "text", "type", "tooltip"]);
    };
  }
}), hs = /* @__PURE__ */ ve({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, i = X(t.modelValue), n = ee(() => typeof t.max == "boolean" || i.value.length < t.max ? ["inline-create"] : []);
    return (l, a) => {
      const u = de("lkt-table");
      return H(), j(u, {
        type: "item",
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (c) => i.value = c),
        perms: n.value,
        "edit-mode": l.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: re(({ item: c, index: o, isLoading: b, canCreate: d, canRead: g, canUpdate: w, canDrop: S, doDrop: L }) => [
          Y(xn, {
            modelValue: i.value[o],
            "onUpdate:modelValue": (A) => i.value[o] = A
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
}), ps = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\D+/g, "").length < l && e.push(De.createMinNumbers(l, Me.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/\D+/g, "").length > l && e.push(De.createMaxNumbers(l, Me.Ko));
  }
}, ms = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[^A-Z]+/g, "").length < l && e.push(De.createMinUpperChars(l, Me.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/[^A-Z]+/g, "").length > l && e.push(De.createMaxUpperChars(l, Me.Ko));
  }
}, gs = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[A-Z]+/g, "").length < l && e.push(De.createMinLowerChars(l, Me.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/[A-Z]+/g, "").length > l && e.push(De.createMaxLowerChars(l, Me.Ko));
  }
}, vs = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").length < l && e.push(De.createMinChars(l, Me.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/\d+/g, "").length > l && e.push(De.createMaxChars(l, Me.Ko));
  }
}, bs = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < l && e.push(De.createMinSpecialChars(l, Me.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > l && e.push(De.createMaxSpecialChars(l, Me.Ko));
  }
}, Rl = (e, t = "default") => {
  if (!e) return "";
  let i = te.validationMessages[t] && te.validationMessages[t][e] ? te.validationMessages[t][e] : "";
  return i || (i = ""), i;
}, ys = { class: "boolean-input" }, _s = { class: "boolean-input-label" }, Cs = { class: "boolean-input--check-on" }, ws = {
  key: 0,
  class: "lkt-icn-ok"
}, ks = ["innerHTML"], xs = ["name", "id", "disabled", "readonly", "value", "checked"], Ss = /* @__PURE__ */ ve({
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
    const i = t, n = e, l = X(null), a = X(n.modelValue), u = X(a.value ? "true" : "false"), c = X(n.focusing), o = (d) => {
      c.value = !0, i("focus", d);
    }, b = (d) => {
      c.value = !1, i("blur", d);
    };
    return ce(() => n.modelValue, (d) => a.value = d), ce(a, (d) => i("update:modelValue", d)), (d, g) => (H(), ne("div", ys, [
      le("div", _s, [
        le("div", Cs, [
          d.type === I(Z).Check && a.value ? (H(), ne("i", ws)) : se("", !0)
        ])
      ]),
      d.label ? (H(), ne("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: d.label
      }, null, 8, ks)) : se("", !0),
      Ze(le("input", {
        "onUpdate:modelValue": g[0] || (g[0] = (w) => a.value = w),
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
      }, null, 40, xs), [
        [go, a.value]
      ])
    ]));
  }
});
function Se(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var si = { exports: {} }, Ls = si.exports, Il;
function Es() {
  return Il || (Il = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ls, function(t, i) {
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
  }(si)), si.exports;
}
var Ts = /* @__PURE__ */ Es();
const Sn = /* @__PURE__ */ Se(Ts);
var ai = { exports: {} }, zs = ai.exports, Dl;
function Bs() {
  return Dl || (Dl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : zs, function(t, i) {
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
  }(ai)), ai.exports;
}
var Ns = /* @__PURE__ */ Bs();
const Ln = /* @__PURE__ */ Se(Ns);
var ri = { exports: {} }, As = ri.exports, Ml;
function Rs() {
  return Ml || (Ml = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : As, function(t, i) {
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
  }(ri)), ri.exports;
}
var Is = /* @__PURE__ */ Rs();
const En = /* @__PURE__ */ Se(Is);
var ui = { exports: {} }, Ds = ui.exports, Vl;
function Ms() {
  return Vl || (Vl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ds, function(t, i) {
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
  }(ui)), ui.exports;
}
var Vs = /* @__PURE__ */ Ms();
const Tn = /* @__PURE__ */ Se(Vs);
var di = { exports: {} }, Fs = di.exports, Fl;
function Hs() {
  return Fl || (Fl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Fs, function(t, i) {
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
  }(di)), di.exports;
}
var Os = /* @__PURE__ */ Hs();
const Vi = /* @__PURE__ */ Se(Os);
var ci = { exports: {} }, Us = ci.exports, Hl;
function Ps() {
  return Hl || (Hl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Us, function(t, i) {
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
  }(ci)), ci.exports;
}
var Ws = /* @__PURE__ */ Ps();
const zn = /* @__PURE__ */ Se(Ws);
var fi = { exports: {} }, $s = fi.exports, Ol;
function Zs() {
  return Ol || (Ol = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : $s, function(t, i) {
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
  }(fi)), fi.exports;
}
var qs = /* @__PURE__ */ Zs();
const Bn = /* @__PURE__ */ Se(qs);
var hi = { exports: {} }, js = hi.exports, Ul;
function Gs() {
  return Ul || (Ul = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : js, function(t, i) {
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
  }(hi)), hi.exports;
}
var Ks = /* @__PURE__ */ Gs();
const Nn = /* @__PURE__ */ Se(Ks);
var pi = { exports: {} }, Ys = pi.exports, Pl;
function Xs() {
  return Pl || (Pl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ys, function(t, i) {
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
  }(pi)), pi.exports;
}
var Js = /* @__PURE__ */ Xs();
const An = /* @__PURE__ */ Se(Js);
var mi = { exports: {} }, Qs = mi.exports, Wl;
function ea() {
  return Wl || (Wl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG una finestra con un documento");
        return i(n);
      };
    })(typeof window < "u" ? window : Qs, function(t, i) {
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
  }(mi)), mi.exports;
}
var ta = /* @__PURE__ */ ea();
const Rn = /* @__PURE__ */ Se(ta);
var gi = { exports: {} }, ia = gi.exports, $l;
function la() {
  return $l || ($l = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ia, function(t, i) {
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
  }(gi)), gi.exports;
}
var na = /* @__PURE__ */ la();
const In = /* @__PURE__ */ Se(na);
var vi = { exports: {} }, oa = vi.exports, Zl;
function sa() {
  return Zl || (Zl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : oa, function(t, i) {
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
  }(vi)), vi.exports;
}
var aa = /* @__PURE__ */ sa();
const Dn = /* @__PURE__ */ Se(aa);
var bi = { exports: {} }, ra = bi.exports, ql;
function ua() {
  return ql || (ql = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ra, function(t, i) {
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
  }(bi)), bi.exports;
}
var da = /* @__PURE__ */ ua();
const Mn = /* @__PURE__ */ Se(da);
var yi = { exports: {} }, ca = yi.exports, jl;
function fa() {
  return jl || (jl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ca, function(t, i) {
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
  }(yi)), yi.exports;
}
var ha = /* @__PURE__ */ fa();
const Vn = /* @__PURE__ */ Se(ha);
var _i = { exports: {} }, pa = _i.exports, Gl;
function ma() {
  return Gl || (Gl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : pa, function(t, i) {
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
  }(_i)), _i.exports;
}
var ga = /* @__PURE__ */ ma();
const Fn = /* @__PURE__ */ Se(ga);
var Ci = { exports: {} }, va = Ci.exports, Kl;
function ba() {
  return Kl || (Kl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : va, function(t, i) {
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
  }(Ci)), Ci.exports;
}
var ya = /* @__PURE__ */ ba();
const Hn = /* @__PURE__ */ Se(ya);
var wi = { exports: {} }, _a = wi.exports, Yl;
function Ca() {
  return Yl || (Yl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : _a, function(t, i) {
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
  }(wi)), wi.exports;
}
var wa = /* @__PURE__ */ Ca();
const On = /* @__PURE__ */ Se(wa);
var ki = { exports: {} }, ka = ki.exports, Xl;
function xa() {
  return Xl || (Xl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ka, function(t, i) {
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
  }(ki)), ki.exports;
}
var Sa = /* @__PURE__ */ xa();
const Un = /* @__PURE__ */ Se(Sa);
var xi = { exports: {} }, La = xi.exports, Jl;
function Ea() {
  return Jl || (Jl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : La, function(t, i) {
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
  }(xi)), xi.exports;
}
var Ta = /* @__PURE__ */ Ea();
const Pn = /* @__PURE__ */ Se(Ta);
var Si = { exports: {} }, za = Si.exports, Ql;
function Ba() {
  return Ql || (Ql = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : za, function(t, i) {
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
  }(Si)), Si.exports;
}
var Na = /* @__PURE__ */ Ba();
const Wn = /* @__PURE__ */ Se(Na);
var Li = { exports: {} }, Aa = Li.exports, en;
function Ra() {
  return en || (en = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Aa, function(t, i) {
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
  }(Li)), Li.exports;
}
var Ia = /* @__PURE__ */ Ra();
const $n = /* @__PURE__ */ Se(Ia);
var Ei = { exports: {} }, Da = Ei.exports, tn;
function Ma() {
  return tn || (tn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Da, function(t, i) {
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
  }(Ei)), Ei.exports;
}
var Va = /* @__PURE__ */ Ma();
const Zn = /* @__PURE__ */ Se(Va), Fa = { ckb: Sn, cs: Ln, da: En, de: Tn, en: Vi, es: zn, fr: Bn, he: Nn, hu: An, it: Rn, ja: In, ko: Dn, lv: Mn, nl: Vn, pl: Fn, pt_br: Hn, ro: On, ru: Un, se: Pn, ua: Wn, ur: $n, zh_cn: Zn }, ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: Sn,
  cs: Ln,
  da: En,
  de: Tn,
  default: Fa,
  en: Vi,
  es: zn,
  fr: Bn,
  he: Nn,
  hu: An,
  it: Rn,
  ja: In,
  ko: Dn,
  lv: Mn,
  nl: Vn,
  pl: Fn,
  pt_br: Hn,
  ro: On,
  ru: Un,
  se: Pn,
  ua: Wn,
  ur: $n,
  zh_cn: Zn
}, Symbol.toStringTag, { value: "Module" })), Ha = {
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
}, Oa = {
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
}, Ua = {
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
}, Pa = {
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
}, qn = {
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
}, Wa = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([qn]);
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
}, $a = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([qn]);
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
}, Za = {
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
}, qa = {
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
    const d = n.collapsed, g = {
      sc: n.startContainer,
      so: n.startContainer === n.endContainer && a.onlyZeroWidthSpace(n.startContainer) && n.startOffset === 0 && n.endOffset === 1 ? n.endOffset : n.startOffset,
      ec: n.endContainer,
      eo: n.endOffset
    };
    let w = null, S = !0;
    for (let L = 0, A = l.length; L < A; L++)
      if (!a.isList(a.getRangeFormatElement(l[L], (function(s) {
        return this.getRangeFormatElement(s) && s !== l[L];
      }).bind(a)))) {
        S = !1;
        break;
      }
    if (S && (!o || u.tagName !== o.tagName || e !== o.tagName.toUpperCase()) && (!b || c.tagName !== b.tagName || e !== b.tagName.toUpperCase())) {
      if (i) {
        for (let p = 0, m = l.length; p < m; p++)
          for (let v = p - 1; v >= 0; v--)
            if (l[v].contains(l[p])) {
              l.splice(p, 1), p--, m--;
              break;
            }
      }
      const L = a.getRangeFormatElement(u), A = L && L.tagName === e;
      let s, r;
      const f = (function(p) {
        return !this.isComponent(p);
      }).bind(a);
      A || (r = a.createElement(e));
      for (let p = 0, m = l.length, v, h; p < m; p++)
        h = a.getRangeFormatElement(l[p], f), !(!h || !a.isList(h)) && (v ? v !== h ? (i && a.isListCell(h.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : w = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0), h = l[p].parentNode, A || (r = a.createElement(e)), v = h, s = { r: v, f: [a.getParentElement(l[p], "LI")] }) : s.f.push(a.getParentElement(l[p], "LI")) : (v = h, s = { r: v, f: [a.getParentElement(l[p], "LI")] }), p === m - 1 && (i && a.isListCell(h.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : w = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0)));
    } else {
      const L = o && o.parentNode, A = b && b.parentNode;
      o = L && !a.isWysiwygDiv(L) && L.nodeName === e ? L : o, b = A && !a.isWysiwygDiv(A) && A.nodeName === e ? A : b;
      const s = o && o.tagName === e, r = b && b.tagName === e;
      let f = s ? o : a.createElement(e), p = null, m = null, v = null;
      const h = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(a);
      for (let y = 0, C = l.length, _, x, D, T, z, N, $, O, P; y < C; y++) {
        if (x = l[y], x.childNodes.length === 0 && !a._isIgnoreNodeChange(x)) {
          a.removeItem(x);
          continue;
        }
        if (T = l[y + 1], z = x.parentNode, N = T ? T.parentNode : null, D = a.isListCell(x), P = a.isRangeFormatElement(z) ? z : null, $ = D && !a.isWysiwygDiv(z) ? z.parentNode : z, O = D && !a.isWysiwygDiv(z) ? !T || a.isListCell($) ? z : z.nextSibling : x.nextSibling, _ = a.createElement("LI"), a.copyFormatAttributes(_, x), y === 0 && g.sc === x && (g.sc = _), y === C - 1 && g.ec === x && (g.ec = _), a.isComponent(x)) {
          const V = /^HR$/i.test(x.nodeName);
          V || (_.innerHTML = "<br>"), _.innerHTML += x.outerHTML, V && (_.innerHTML += "<br>");
        } else {
          const V = x.childNodes;
          for (; V[0]; )
            _.appendChild(V[0]);
        }
        f.appendChild(_), (!T || $ !== N || a.isRangeFormatElement(O)) && (p || (p = f), (!s || !T || $ !== N) && !(T && a.isList(N) && N === z) && f.parentNode !== $ && $.insertBefore(f, O)), a.removeItem(x), s && m === null && (m = f.children.length - 1), T && (a.getRangeFormatElement(N, h) !== a.getRangeFormatElement(z, h) || a.isList(N) && a.isList(z) && a.getElementDepth(N) !== a.getElementDepth(z)) && (f = a.createElement(e)), P && P.children.length === 0 && a.removeItem(P);
      }
      m && (p = p.children[m]), r && (v = f.children.length - 1, f.innerHTML += b.innerHTML, f.children[v], a.removeItem(b));
    }
    return this.effectNode = null, d && w || g;
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
      for (let w = 0, S = i, L; w < S; w++)
        L = t[w], L.parentNode !== n && (this.plugins.list._insiedList.call(this, n, u, c, o, b), n = L.parentNode, u = this.util.createElement(n.nodeName)), c = L.previousElementSibling, o = L.nextElementSibling, u.appendChild(L);
      this.plugins.list._insiedList.call(this, n, u, c, o, b);
      const d = this.util.getNodeFromPath(b.s, b.sl), g = this.util.getNodeFromPath(b.e, b.el);
      a = {
        sc: d,
        so: 0,
        ec: g,
        eo: g.textContent.length
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
}, ja = {
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
      for (let d = 0, g = l[0].cells, w = l[0].cells.length; d < w; d++)
        u += g[d].colSpan;
      const c = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = l.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = u, i._physical_cellIndex = a, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[a].rowSpan - 1;
      let o = [], b = [];
      for (let d = 0, g, w; d <= c; d++) {
        g = l[d].cells, w = 0;
        for (let S = 0, L = g.length, A, s, r, f; S < L; S++) {
          if (A = g[S], s = A.colSpan - 1, r = A.rowSpan - 1, f = S + w, b.length > 0)
            for (let p = 0, m; p < b.length; p++)
              m = b[p], !(m.row > d) && (f >= m.index ? (w += m.cs, f += m.cs, m.rs -= 1, m.row = d + 1, m.rs < 1 && (b.splice(p, 1), p--)) : S === L - 1 && (m.rs -= 1, m.row = d + 1, m.rs < 1 && (b.splice(p, 1), p--)));
          if (d === c && S === a) {
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
        b = b.concat(o).sort(function(S, L) {
          return S.index - L.index;
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
          for (let d = 1, g = c.length, w; d < g; d++)
            w = c[d], o !== w.parentNode && (b.push(w), o = w.parentNode);
          for (let d = 0, g = b.length; d < g; d++)
            i.setCellInfo.call(this, b[d], !0), i.editRow.call(this, t);
        }
      else {
        const o = c[0].parentNode;
        if (t) {
          let b = null;
          for (let d = 0, g = c.length - 1; d < g; d++)
            if (o !== c[d + 1].parentNode) {
              b = c[d];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? c[0] : b || c[0], !0), i.editCell.call(this, t, u);
        } else {
          const b = [c[0]];
          for (let d = 1, g = c.length, w; d < g && (w = c[d], o === w.parentNode); d++)
            b.push(w);
          for (let d = 0, g = b.length; d < g; d++)
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
    for (let d = 0, g = a + (n ? -1 : 0), w; d <= g; d++) {
      if (w = o[d].cells, w.length === 0) return;
      for (let S = 0, L = w.length, A, s; S < L; S++)
        A = w[S].rowSpan, s = w[S].colSpan, !(A < 2 && s < 2) && A + d > u && u > d && (w[S].rowSpan = A + c, b -= s);
    }
    if (n) {
      const d = o[a + 1];
      if (d) {
        const g = [];
        let w = o[a].cells, S = 0;
        for (let L = 0, A = w.length, s, r; L < A; L++)
          s = w[L], r = L + S, S += s.colSpan - 1, s.rowSpan > 1 && (s.rowSpan -= 1, g.push({ cell: s.cloneNode(!1), index: r }));
        if (g.length > 0) {
          let L = g.shift();
          w = d.cells, S = 0;
          for (let A = 0, s = w.length, r, f; A < s && (r = w[A], f = A + S, S += r.colSpan - 1, !(f >= L.index && (A--, S--, S += L.cell.colSpan - 1, d.insertBefore(L.cell, r), L = g.shift(), !L))); A++)
            ;
          if (L) {
            d.appendChild(L.cell);
            for (let A = 0, s = g.length; A < s; A++)
              d.appendChild(g[A].cell);
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
    let b = [], d = [], g = 0;
    const w = [], S = [];
    for (let L = 0, A = i._rowCnt, s, r, f, p, m, v; L < A; L++) {
      s = o[L], r = c, m = !1, f = s.cells, v = 0;
      for (let h = 0, y, C = f.length, _, x, D; h < C && (y = f[h], !!y); h++)
        if (_ = y.rowSpan - 1, x = y.colSpan - 1, l) {
          if (D = h + v, d.length > 0) {
            const T = !f[h + 1];
            for (let z = 0, N; z < d.length; z++)
              N = d[z], !(N.row > L) && (D >= N.index ? (v += N.cs, D = h + v, N.rs -= 1, N.row = L + 1, N.rs < 1 && (d.splice(z, 1), z--)) : T && (N.rs -= 1, N.row = L + 1, N.rs < 1 && (d.splice(z, 1), z--)));
          }
          _ > 0 && b.push({
            rs: _,
            cs: x + 1,
            index: D,
            row: -1
          }), D >= r && D + x <= r + u ? w.push(y) : D <= r + u && D + x >= r ? y.colSpan -= n.getOverlapRangeAtIndex(c, c + u, D, D + x) : _ > 0 && (D < r || D + x > r + u) && S.push({
            cell: y,
            i: L,
            rs: L + _
          }), v += x;
        } else {
          if (h >= r) break;
          if (x > 0) {
            if (g < 1 && x + h >= r) {
              y.colSpan += 1, r = null, g = _ + 1;
              break;
            }
            r -= x;
          }
          if (!m) {
            for (let T = 0, z; T < d.length; T++)
              z = d[T], r -= z.cs, z.rs -= 1, z.rs < 1 && (d.splice(T, 1), T--);
            m = !0;
          }
        }
      if (d = d.concat(b).sort(function(h, y) {
        return h.index - y.index;
      }), b = [], !l) {
        if (g > 0) {
          g -= 1;
          continue;
        }
        r !== null && f.length > 0 && (p = this.plugins.table.createCells.call(this, f[0].nodeName, 0, !0), p = s.insertBefore(p, f[r]));
      }
    }
    if (l) {
      let L, A;
      for (let s = 0, r = w.length, f; s < r; s++)
        f = w[s].parentNode, n.removeItem(w[s]), f.cells.length === 0 && (L || (L = n.getArrayIndex(o, f)), A = n.getArrayIndex(o, f), n.removeItem(f));
      for (let s = 0, r = S.length, f; s < r; s++)
        f = S[s], f.cell.rowSpan = n.getOverlapRangeAtIndex(L, A, f.i, f.rs);
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
        let g = [], w = [];
        for (let S = 0, L = n._rowCnt, A, s; S < L; S++) {
          A = a[S].cells, s = 0;
          for (let r = 0, f = A.length, p, m, v, h; r < f; r++) {
            if (p = A[r], m = p.colSpan - 1, v = p.rowSpan - 1, h = r + s, w.length > 0)
              for (let y = 0, C; y < w.length; y++)
                C = w[y], !(C.row > S) && (h >= C.index ? (s += C.cs, h += C.cs, C.rs -= 1, C.row = S + 1, C.rs < 1 && (w.splice(y, 1), y--)) : r === f - 1 && (C.rs -= 1, C.row = S + 1, C.rs < 1 && (w.splice(y, 1), y--)));
            if (h <= c && v > 0 && g.push({
              index: h,
              cs: m + 1,
              rs: v,
              row: -1
            }), p !== l && h <= c && h + m >= c + d - 1) {
              p.colSpan += 1;
              break;
            }
            if (h > c) break;
            s += m;
          }
          w = w.concat(g).sort(function(r, f) {
            return r.index - f.index;
          }), g = [];
        }
        u.insertBefore(b, l.nextElementSibling);
      }
    } else {
      const d = l.rowSpan;
      if (b.colSpan = l.colSpan, d > 1) {
        b.rowSpan = this._w.Math.floor(d / 2);
        const g = d - b.rowSpan, w = [], S = t.getArrayIndex(a, u) + g;
        for (let r = 0, f, p; r < S; r++) {
          f = a[r].cells, p = 0;
          for (let m = 0, v = f.length, h, y, C; m < v && (C = m + p, !(C >= c)); m++)
            h = f[m], y = h.rowSpan - 1, y > 0 && y + r >= S && C < c && w.push({
              index: C,
              cs: h.colSpan
            }), p += h.colSpan - 1;
        }
        const L = a[S], A = L.cells;
        let s = w.shift();
        for (let r = 0, f = A.length, p = 0, m, v, h, y; r < f; r++) {
          if (h = r + p, m = A[r], v = m.colSpan - 1, y = h + v + 1, s && y >= s.index && (p += s.cs, y += s.cs, s = w.shift()), y >= c || r === f - 1) {
            L.insertBefore(b, m.nextElementSibling);
            break;
          }
          p += v;
        }
        l.rowSpan = g;
      } else {
        b.rowSpan = l.rowSpan;
        const g = t.createElement("TR");
        g.appendChild(b);
        for (let L = 0, A; L < o; L++) {
          if (A = a[L].cells, A.length === 0) return;
          for (let s = 0, r = A.length; s < r; s++)
            L + A[s].rowSpan - 1 >= o && (A[s].rowSpan += 1);
        }
        const w = n._physical_cellIndex, S = u.cells;
        for (let L = 0, A = S.length; L < A; L++)
          L !== w && (S[L].rowSpan += 1);
        u.parentNode.insertBefore(g, u.nextElementSibling);
      }
    }
    this.focusEdge(l), this.plugins.table.setPositionControllerDiv.call(this, l, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, n = e._ref, l = e._selectedCells, a = l[0];
    let u = null, c = null, o = n.ce - n.cs + 1, b = n.re - n.rs + 1, d = "", g = null;
    for (let w = 1, S = l.length, L, A; w < S; w++) {
      L = l[w], g !== L.parentNode && (g = L.parentNode), A = L.children;
      for (let s = 0, r = A.length; s < r; s++)
        i.isFormatElement(A[s]) && i.onlyZeroWidthSpace(A[s].textContent) && i.removeItem(A[s]);
      d += L.innerHTML, i.removeItem(L), g.cells.length === 0 && (u ? c = g : u = g, b -= 1);
    }
    if (u) {
      const w = t._trElements, S = i.getArrayIndex(w, u), L = i.getArrayIndex(w, c || u), A = [];
      for (let s = 0, r; s <= L; s++) {
        if (r = w[s].cells, r.length === 0) {
          A.push(w[s]);
          continue;
        }
        for (let f = 0, p = r.length, m, v; f < p; f++)
          m = r[f], v = m.rowSpan - 1, v > 0 && s + v >= S && (m.rowSpan -= i.getOverlapRangeAtIndex(S, L, s, s + v));
      }
      for (let s = 0, r = A.length; s < r; s++)
        i.removeItem(A[s]);
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
    for (let d = 0, g = a.length; d < g; d++)
      l.removeClass(a[d], "se-table-selected-cell");
    if (e === t && (l.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let u = !0, c = [], o = [];
    const b = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let d = 0, g = n.length, w, S; d < g; d++) {
      w = n[d].cells, S = 0;
      for (let L = 0, A = w.length, s, r, f, p; L < A; L++) {
        if (s = w[L], f = s.colSpan - 1, p = s.rowSpan - 1, r = L + S, c.length > 0)
          for (let m = 0, v; m < c.length; m++)
            v = c[m], !(v.row > d) && (r >= v.index ? (S += v.cs, r += v.cs, v.rs -= 1, v.row = d + 1, v.rs < 1 && (c.splice(m, 1), m--)) : L === A - 1 && (v.rs -= 1, v.row = d + 1, v.rs < 1 && (c.splice(m, 1), m--)));
        if (u) {
          if ((s === e || s === t) && (b.cs = b.cs !== null && b.cs < r ? b.cs : r, b.ce = b.ce !== null && b.ce > r + f ? b.ce : r + f, b.rs = b.rs !== null && b.rs < d ? b.rs : d, b.re = b.re !== null && b.re > d + p ? b.re : d + p, b._i += 1), b._i === 2) {
            u = !1, c = [], o = [], d = -1;
            break;
          }
        } else if (l.getOverlapRangeAtIndex(b.cs, b.ce, r, r + f) && l.getOverlapRangeAtIndex(b.rs, b.re, d, d + p)) {
          const m = b.cs < r ? b.cs : r, v = b.ce > r + f ? b.ce : r + f, h = b.rs < d ? b.rs : d, y = b.re > d + p ? b.re : d + p;
          if (b.cs !== m || b.ce !== v || b.rs !== h || b.re !== y) {
            b.cs = m, b.ce = v, b.rs = h, b.re = y, d = -1, c = [], o = [];
            break;
          }
          l.addClass(s, "se-table-selected-cell");
        }
        p > 0 && o.push({
          index: r,
          cs: f + 1,
          rs: p,
          row: -1
        }), S += s.colSpan - 1;
      }
      c = c.concat(o).sort(function(L, A) {
        return L.index - A.index;
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
}, Ga = {
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
    for (let c = 0, o = a.length, b, d, g, w, S, L, A; c < o; c++)
      b = a[c], typeof b == "string" && l.indexOf(b) > -1 ? (d = b.toLowerCase(), g = d === "blockquote" ? "range" : d === "pre" ? "free" : "replace", S = /^h/.test(d) ? d.match(/\d+/)[0] : "", w = i["tag_" + (S ? "h" : d)] + S, A = "", L = "") : (d = b.tag.toLowerCase(), g = b.command, w = b.name || d, A = b.class, L = A ? ' class="' + A + '"' : ""), u += '<li><button type="button" class="se-btn-list" data-command="' + g + '" data-value="' + d + '" data-class="' + A + '" title="' + w + '" aria-label="' + w + '"><' + d + L + ">" + w + "</" + d + "></button></li>";
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
        let g = c[0], w = c[c.length - 1];
        const S = d.getNodePath(u.startContainer, g, null, null), L = d.getNodePath(u.endContainer, w, null, null), A = this.detachList(c, !1);
        A.sc && (g = A.sc), A.ec && (w = A.ec), this.setRange(d.getNodeFromPath(S, g), o, d.getNodeFromPath(L, w), b);
        const s = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const r = s.length - 1;
          let f = s[r].parentNode, p = l.cloneNode(!1);
          const m = p;
          for (let v = r, h, y, C, _, x, D, T = !0; v >= 0; v--)
            if (h = s[v], h !== (s[v + 1] ? s[v + 1].parentNode : null)) {
              if (D = d.isComponent(h), y = D ? "" : h.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), C = d.getParentElement(h, function(z) {
                return z.parentNode === f;
              }), (f !== h.parentNode || D) && (d.isFormatElement(f) ? (f.parentNode.insertBefore(p, f.nextSibling), f = f.parentNode) : (f.insertBefore(p, C ? C.nextSibling : null), f = h.parentNode), _ = p.nextSibling, _ && p.nodeName === _.nodeName && d.isSameAttributes(p, _) && (p.innerHTML += "<BR>" + _.innerHTML, d.removeItem(_)), p = l.cloneNode(!1), T = !0), x = p.innerHTML, p.innerHTML = (T || !y || !x || /<br>$/i.test(y) ? y : y + "<BR>") + x, v === 0) {
                f.insertBefore(p, h), _ = h.nextSibling, _ && p.nodeName === _.nodeName && d.isSameAttributes(p, _) && (p.innerHTML += "<BR>" + _.innerHTML, d.removeItem(_));
                const z = p.previousSibling;
                z && p.nodeName === z.nodeName && d.isSameAttributes(p, z) && (z.innerHTML += "<BR>" + p.innerHTML, d.removeItem(p));
              }
              D || d.removeItem(h), y && (T = !1);
            }
          this.setRange(m, 0, m, 0);
        } else {
          for (let r = 0, f = s.length, p, m; r < f; r++)
            p = s[r], (p.nodeName.toLowerCase() !== n.toLowerCase() || (p.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== a) && !d.isComponent(p) && (m = l.cloneNode(!1), d.copyFormatAttributes(m, p), m.innerHTML = p.innerHTML, p.parentNode.replaceChild(m, p)), r === 0 && (g = m || p), r === f - 1 && (w = m || p), m = null;
          this.setRange(d.getNodeFromPath(S, g), o, d.getNodeFromPath(L, w), b);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, Ka = {
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
}, Ya = {
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
}, Xa = {
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
    for (let c = 0, o = a.length, b, d, g, w; c < o; c++) {
      if (b = a[c], typeof b == "string") {
        const S = l[b.toLowerCase()];
        if (!S) continue;
        b = S;
      }
      d = b.name, g = b.class ? ' class="' + b.class + '"' : "", w = b._class, u += '<li><button type="button" class="se-btn-list' + (w ? " " + w : "") + '" data-value="' + b.class + '" title="' + d + '" aria-label="' + d + '"><div' + g + ">" + d + "</div></button></li>";
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
}, Ja = {
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
    for (let u = 0, c = l.length, o, b, d, g, w, S, L; u < c; u++) {
      if (o = l[u], g = "", S = "", w = [], typeof o == "string") {
        const A = n[o.toLowerCase()];
        if (!A) continue;
        o = A;
      }
      d = o.name, b = o.tag || "span", L = o._class, o.style && (g += ' style="' + o.style + '"', S += o.style.replace(/:[^;]+(;|$)\s*/g, ","), w.push("style")), o.class && (g += ' class="' + o.class + '"', S += "." + o.class.trim().replace(/\s+/g, ",."), w.push("class")), S = S.replace(/,$/, ""), a += '<li><button type="button" class="se-btn-list' + (L ? " " + L : "") + '" data-command="' + b + '" data-value="' + S + '" title="' + d + '" aria-label="' + d + '"><' + b + g + ">" + d + "</" + b + "></button></li>";
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
      for (let b = 0, d, g; b < c.length; b++) {
        for (d = n, o = !1; d && !e.isFormatElement(d) && !e.isComponent(d); ) {
          if (d.nodeName.toLowerCase() === u.getAttribute("data-command").toLowerCase() && (g = c[b], /^\./.test(g) ? e.hasClass(d, g.replace(/^\./, "")) : d.style[g])) {
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
var Ti = { exports: {} }, Qa = Ti.exports, nn;
function er() {
  return nn || (nn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Qa, function(t, i) {
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
  }(Ti)), Ti.exports;
}
var tr = /* @__PURE__ */ er();
const Gt = /* @__PURE__ */ Se(tr), ir = {
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
}, jn = {
  name: "anchor",
  add: function(e) {
    e.addModule([ir]), e.context.anchor = {
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
}, lr = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([Gt, jn]);
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
var zi = { exports: {} }, nr = zi.exports, on;
function or() {
  return on || (on = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : nr, function(t, i) {
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
var sr = /* @__PURE__ */ or();
const el = /* @__PURE__ */ Se(sr);
var Bi = { exports: {} }, ar = Bi.exports, sn;
function rr() {
  return sn || (sn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ar, function(t, i) {
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
          const o = u.resizeContainer, b = u.resizeDiv, d = this.util.getOffset(l, this.context.element.wysiwygFrame), g = u._rotateVertical = /^(90|270)$/.test(Math.abs(l.getAttribute("data-rotate")).toString()), w = g ? l.offsetHeight : l.offsetWidth, S = g ? l.offsetWidth : l.offsetHeight, L = d.top, A = d.left - this.context.element.wysiwygFrame.scrollLeft;
          o.style.top = L + "px", o.style.left = A + "px", o.style.width = w + "px", o.style.height = S + "px", b.style.top = "0px", b.style.left = "0px", b.style.width = w + "px", b.style.height = S + "px";
          let s = l.getAttribute("data-align") || "basic";
          s = s === "none" ? "basic" : s;
          const r = this.util.getParentElement(l, this.util.isComponent), f = this.util.getParentElement(l, "FIGURE"), p = this.plugins.resizing._module_getSizeX.call(this, c, l, f, r) || "auto", m = c._onlyPercentage && a === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, c, l, f, r) || "auto");
          this.util.changeTxt(u.resizeDisplay, this.lang.dialogBox[s] + " (" + p + m + ")"), u.resizeButtonGroup.style.display = c._resizing ? "" : "none";
          const v = c._resizing && !c._resizeDotHide && !c._onlyPercentage ? "flex" : "none", h = u.resizeHandles;
          for (let T = 0, z = h.length; T < z; T++)
            h[T].style.display = v;
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
            for (let z = 0, N = T.length; z < N; z++)
              T[z].getAttribute("data-value") === s ? this.util.addClass(T[z], "on") : this.util.removeClass(T[z], "on");
          }
          const y = u.percentageButtons, C = /%$/.test(l.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
          for (let T = 0, z = y.length; T < z; T++)
            y[T].getAttribute("data-value") === C ? this.util.addClass(y[T], "active") : this.util.removeClass(y[T], "active");
          c._captionShow ? (u.captionButton.style.display = "", this.util.getChildElement(l.parentNode, "figcaption") ? (this.util.addClass(u.captionButton, "active"), c._captionChecked = !0) : (this.util.removeClass(u.captionButton, "active"), c._captionChecked = !1)) : u.captionButton.style.display = "none", o.style.display = "block";
          const _ = { left: 0, top: 50 };
          this.options.iframe && (_.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, _.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(u.resizeButton, o, "bottom", _);
          const x = function() {
            this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
          };
          this.controllersOn(o, u.resizeButton, x.bind(this), l, a), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), u._resize_w = w, u._resize_h = S;
          const D = (l.getAttribute("origin-size") || "").split(",");
          return u._origin_w = D[0] || l.naturalWidth, u._origin_h = D[1] || l.naturalHeight, {
            w,
            h: S,
            t: L,
            l: A
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
          const c = a.getAttribute("data-value") || a.parentNode.getAttribute("data-value"), o = this.context.resizing._resize_plugin, b = this.context[o], d = b._element, g = this.plugins[o];
          if (l.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), u === "onalign"))) {
            switch (u) {
              case "auto":
                this.plugins.resizing.resetTransform.call(this, d), g.setAutoSize.call(this), this.selectComponent(d, o);
                break;
              case "percent":
                let w = this.plugins.resizing._module_getSizeY.call(this, b);
                if (this.context.resizing._rotateVertical) {
                  const v = d.getAttribute("data-percentage");
                  v && (w = v.split(",")[1]);
                }
                this.plugins.resizing.resetTransform.call(this, d), g.setPercentSize.call(this, c * 100, this.util.getNumber(w, 0) === null || !/%$/.test(w) ? "" : w), this.selectComponent(d, o);
                break;
              case "mirror":
                const S = d.getAttribute("data-rotate") || "0";
                let L = d.getAttribute("data-rotateX") || "", A = d.getAttribute("data-rotateY") || "";
                c === "h" && !this.context.resizing._rotateVertical || c === "v" && this.context.resizing._rotateVertical ? A = A ? "" : "180" : L = L ? "" : "180", d.setAttribute("data-rotateX", L), d.setAttribute("data-rotateY", A), this.plugins.resizing._setTransForm(d, S, L, A);
                break;
              case "rotate":
                const s = this.context.resizing, r = d.getAttribute("data-rotate") * 1 + c * 1, f = this._w.Math.abs(r) >= 360 ? 0 : r;
                d.setAttribute("data-rotate", f), s._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(f).toString()), this.plugins.resizing.setTransformSize.call(this, d, null, null), this.selectComponent(d, o);
                break;
              case "onalign":
                this.plugins.resizing.openAlignMenu.call(this);
                return;
              case "align":
                const p = c === "basic" ? "none" : c;
                g.setAlign.call(this, p, null, null, null), this.selectComponent(d, o);
                break;
              case "caption":
                const m = !b._captionChecked;
                if (g.openModify.call(this, !0), b._captionChecked = b.captionCheckEl.checked = m, g.update_image.call(this, !1, !1, !1), m) {
                  const v = this.util.getChildElement(b._caption, function(h) {
                    return h.nodeType === 3;
                  });
                  v ? this.setRange(v, 0, v, v.textContent.length) : b._caption.focus(), this.controllersOff();
                } else
                  this.selectComponent(d, o), g.openModify.call(this, !0);
                break;
              case "revert":
                g.setOriginSize.call(this), this.selectComponent(d, o);
                break;
              case "update":
                g.openModify.call(this), this.controllersOff();
                break;
              case "delete":
                g.destroy.call(this);
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
            const g = this.util.getParentElement(l, "FIGURE"), w = a || l.offsetWidth, S = u || l.offsetHeight, L = (o ? S : w) + "px", A = (o ? w : S) + "px";
            if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, w + "px", S + "px", !0), g.style.width = L, g.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : A, o) {
              let s = w / 2 + "px " + w / 2 + "px 0", r = S / 2 + "px " + S / 2 + "px 0";
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
            const g = a._isChange;
            a._isChange = !1, this.removeDocEvent("mousemove", o), this.removeDocEvent("mouseup", c), this.removeDocEvent("keydown", c), d.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, u), g && this.history.push(!1));
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
          let d = u._element_w, g = u._element_h;
          const w = u._element_w + (/r/.test(a) ? o - l._resizeClientX : l._resizeClientX - o), S = u._element_h + (/b/.test(a) ? b - l._resizeClientY : l._resizeClientY - b), L = u._element_h / u._element_w * w;
          /t/.test(a) && (l.resizeDiv.style.top = u._element_h - (/h/.test(a) ? S : L) + "px"), /l/.test(a) && (l.resizeDiv.style.left = u._element_w - w + "px"), /r|l/.test(a) && (l.resizeDiv.style.width = w + "px", d = w), /^(t|b)[^h]$/.test(a) ? (l.resizeDiv.style.height = L + "px", g = L) : /^(t|b)h$/.test(a) && (l.resizeDiv.style.height = S + "px", g = S), l._resize_w = d, l._resize_h = g, this.util.changeTxt(l.resizeDisplay, this._w.Math.round(d) + " x " + this._w.Math.round(g)), l._isChange = !0;
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
  }(Bi)), Bi.exports;
}
var ur = /* @__PURE__ */ rr();
const Gn = /* @__PURE__ */ Se(ur);
var Ni = { exports: {} }, dr = Ni.exports, an;
function cr() {
  return an || (an = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : dr, function(t, i) {
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
            for (let g in a)
              d.setRequestHeader(g, a[g]);
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
          const d = this.plugins.fileManager, g = this.context[l], w = g._infoList, S = d.setInfo.bind(this);
          if (b.length === w.length)
            if (this._componentsInfoReset) {
              for (let r = 0, f = b.length; r < f; r++)
                S(l, b[r], u, null, o);
              return;
            } else {
              let r = !1;
              for (let f = 0, p = w.length, m; f < p; f++)
                if (m = w[f], b.filter(function(v) {
                  return m.src === v.src && m.index.toString() === v.getAttribute("data-index");
                }).length === 0) {
                  r = !0;
                  break;
                }
              if (!r) return;
            }
          const L = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = l);
          const A = [], s = [];
          for (let r = 0, f = w.length; r < f; r++)
            s[r] = w[r].index;
          for (g.__updateTags = b; b.length > 0; ) {
            const r = b.shift();
            !this.util.getParentElement(r, this.util.isMediaComponent) || !d._checkMediaComponent(r) ? (A.push(g._infoIndex), c(r)) : !r.getAttribute("data-index") || s.indexOf(r.getAttribute("data-index") * 1) < 0 ? (A.push(g._infoIndex), r.removeAttribute("data-index"), S(l, r, u, null, o)) : A.push(r.getAttribute("data-index") * 1);
          }
          for (let r = 0, f; r < w.length; r++)
            f = w[r].index, !(A.indexOf(f) > -1) && (w.splice(r, 1), typeof u == "function" && u(null, f, "delete", null, 0, this), r--);
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
          const d = this.plugins[l], g = this.context[l], w = g._infoList;
          let S = a.getAttribute("data-index"), L = null, A = "";
          if (c || (c = {
            name: a.getAttribute("data-file-name") || (typeof a.src == "string" ? a.src.split("/").pop() : ""),
            size: a.getAttribute("data-file-size") || 0
          }), !S || this._componentsInfoInit)
            A = "create", S = g._infoIndex++, a.setAttribute("data-index", S), a.setAttribute("data-file-name", c.name), a.setAttribute("data-file-size", c.size), L = {
              src: a.src,
              index: S * 1,
              name: c.name,
              size: c.size
            }, w.push(L);
          else {
            A = "update", S *= 1;
            for (let s = 0, r = w.length; s < r; s++)
              if (S === w[s].index) {
                L = w[s];
                break;
              }
            L || (S = g._infoIndex++, L = { index: S }, w.push(L)), L.src = a.src, L.name = a.getAttribute("data-file-name"), L.size = a.getAttribute("data-file-size") * 1;
          }
          if (L.element = a, L.delete = d.destroy.bind(this, a), L.select = (function(s) {
            s.scrollIntoView(!0), this._w.setTimeout(d.select.bind(this, s));
          }).bind(this, a), o) {
            if (!a.getAttribute("origin-size") && a.naturalWidth && a.setAttribute("origin-size", a.naturalWidth + "," + a.naturalHeight), !a.getAttribute("data-origin")) {
              const s = this.util.getParentElement(a, this.util.isMediaComponent), r = this.util.getParentElement(a, "FIGURE"), f = this.plugins.resizing._module_getSizeX.call(this, g, a, r, s), p = this.plugins.resizing._module_getSizeY.call(this, g, a, r, s);
              a.setAttribute("data-origin", f + "," + p), a.setAttribute("data-size", f + "," + p);
            }
            if (!a.style.width) {
              const s = (a.getAttribute("data-size") || a.getAttribute("data-origin") || "").split(",");
              d.onModifyMode.call(this, a, null), d.applySize.call(this, s[0], s[1]);
            }
            this.context.resizing._resize_plugin = b;
          }
          typeof u == "function" && u(a, S, A, L, --g._uploadFileLength < 0 ? 0 : g._uploadFileLength, this);
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
  }(Ni)), Ni.exports;
}
var fr = /* @__PURE__ */ cr();
const tl = /* @__PURE__ */ Se(fr), hr = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([Gt, jn, el, Gn, tl]);
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
      for (let d = 0, g, w; d < u; d++)
        g = new o(), w = e[d], g.onload = (function(S, L, A, s, r) {
          b[r] = { result: S.result, file: s }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, L, b, A, t, i, n, l, a), this.closeLoading());
        }).bind(this, g, c, this.context.image._element, w, d), g.readAsDataURL(w);
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + o.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, n, l, a, u, c) {
    const o = this.plugins.image.update_src, b = this.plugins.image.create_image;
    for (let d = 0, g = t.length; d < g; d++)
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
    const d = this.plugins.component.set_cover.call(this, t), g = this.plugins.component.set_container.call(this, d, "se-image-container");
    o._captionChecked && (o._caption = this.plugins.component.create_caption.call(this), d.appendChild(o._caption)), o._element = b, o._cover = d, o._container = g, c.applySize.call(this, i, n), c.setAlign.call(this, l, b, d, g), b.onload = c._image_create_onload.bind(this, b, o.svgDefaultSize, g), this.insertComponent(g, !0, !0, !this.options.mediaAutoSelect) && this.plugins.fileManager.setInfo.call(this, "image", b, this.functions.onImageUpload, a, !0), this.context.resizing._resize_plugin = "";
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
    let g = !1;
    n._captionChecked ? n._caption || (n._caption = this.plugins.component.create_caption.call(this), a.appendChild(n._caption), g = !0) : n._caption && (this.util.removeItem(n._caption), n._caption = null, g = !0);
    let w = null;
    const S = this.plugins.anchor.createAnchor.call(this, n.anchorCtx, !0);
    if (S)
      n._linkElement !== S || c && !u.contains(S) ? (n._linkElement = S.cloneNode(!1), a.insertBefore(this.plugins.image.onRender_link.call(this, l, n._linkElement), n._caption), w = n._element) : n._linkElement.setAttribute("data-image-link", "image");
    else if (n._linkElement !== null) {
      const A = l;
      if (A.setAttribute("data-image-link", ""), a.contains(n._linkElement)) {
        const s = A.cloneNode(!0);
        a.removeChild(n._linkElement), a.insertBefore(s, n._caption), n._element = l = s;
      }
    }
    let L = null;
    if (c) {
      if (L = this.util.isRangeFormatElement(n._element.parentNode) || this.util.isWysiwygDiv(n._element.parentNode) ? n._element : this.util.isAnchor(n._element.parentNode) ? n._element.parentNode : this.util.getFormatElement(n._element) || n._element, this.util.getParentElement(n._element, this.util.isNotCheckingNode))
        L = w ? S : n._element, L.parentNode.replaceChild(u, L);
      else if (this.util.isListCell(L)) {
        const A = this.util.getParentElement(n._element, function(s) {
          return s.parentNode === L;
        });
        L.insertBefore(u, A), this.util.removeItem(n._element), this.util.removeEmptyNode(A, null, !0);
      } else if (this.util.isFormatElement(L)) {
        const A = this.util.getParentElement(n._element, function(s) {
          return s.parentNode === L;
        });
        L = this.util.splitElement(L, A), L.parentNode.insertBefore(u, L), this.util.removeItem(n._element), this.util.removeEmptyNode(L, null, !0), L.children.length === 0 && (L.innerHTML = this.util.htmlRemoveWhiteSpace(L.innerHTML));
      } else if (this.util.isFormatElement(L.parentNode)) {
        const A = L.parentNode;
        A.parentNode.insertBefore(u, L.previousSibling ? A.nextElementSibling : A), n.__updateTags.map(function(s) {
          return L.contains(s);
        }).length === 0 && this.util.removeItem(L);
      } else
        L = this.util.isFigures(L.parentNode) ? L.parentNode : L, L.parentNode.replaceChild(u, L);
      l = u.querySelector("img"), n._element = l, n._cover = a, n._container = u;
    }
    w && (c ? (this.util.removeItem(w), this.util.getListChildren(S, function(A) {
      return /IMG/i.test(A.tagName);
    }).length === 0 && this.util.removeItem(S)) : this.util.removeItem(S)), (g || !n._onlyPercentage && o) && !e && (/\d+/.test(l.style.height) || this.context.resizing._rotateVertical && n._captionChecked) && (/%$/.test(n.inputX.value) || /%$/.test(n.inputY.value) ? this.plugins.resizing.resetTransform.call(this, l) : this.plugins.resizing.setTransformSize.call(this, l, this.util.getNumber(n.inputX.value, 0), this.util.getNumber(n.inputY.value, 0))), n._resizing && (l.setAttribute("data-proportion", n._proportionChecked), o && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, l, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", l, this.functions.onImageUpload, null, !0), t && this.selectComponent(l, "image"), i || this.history.push(!1);
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
}, pr = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([Gt, el, Gn, tl]);
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
      const a = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], u = t.videoRatio, c = t.videoSizeOnlyPercentage, o = c ? ' style="display: none !important;"' : "", b = t.videoHeightShow ? "" : ' style="display: none !important;"', d = t.videoRatioShow ? "" : ' style="display: none !important;"', g = !c && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      l += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + b + ">" + i.dialogBox.height + '</label><label class="size-h"' + d + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (c ? ' type="number" min="1"' : 'type="text"') + (c ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + g + ">" + (c ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (c ? ' type="number" min="1"' : 'type="text"') + (c ? ' max="100"' : "") + b + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + d + ">", b || (l += '<option value=""> - </option>');
      for (let w = 0, S = a.length; w < S; w++)
        l += '<option value="' + a[w].value + '"' + (u.toString() === a[w].value.toString() ? " selected" : "") + ">" + a[w].name + "</option>";
      l += '</select><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + o + g + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + "</label></div>";
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
        const A = /youtu\.?be/.test(t), s = /vimeo\.com/.test(t);
        if ((A || s) && !/^iframe$/i.test(e.nodeName)) {
          const r = this.plugins.video.createIframeTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), c._element = e = r;
        } else if (!A && !s && !/^video$/i.test(e.nodeName)) {
          const r = this.plugins.video.createVideoTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), c._element = e = r;
        } else
          e.src = t;
      }
      b = c._container, o = this.util.getParentElement(e, "FIGURE");
    } else
      d = !0, e.src = t, c._element = e, o = this.plugins.component.set_cover.call(this, e), b = this.plugins.component.set_container.call(this, o, "se-video-container");
    c._cover = o, c._container = b;
    const g = this.plugins.resizing._module_getSizeX.call(this, c) !== (i || c._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, c) !== (n || c._videoRatio), w = !u || g;
    c._resizing && (this.context.video._proportionChecked = c.proportion.checked, e.setAttribute("data-proportion", c._proportionChecked));
    let S = !1;
    w && (S = this.plugins.video.applySize.call(this)), S && l === "center" || this.plugins.video.setAlign.call(this, null, e, o, b);
    let L = !0;
    if (u)
      c._resizing && this.context.resizing._rotateVertical && w && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (L = this.insertComponent(b, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const A = this.appendFormatTag(b, null);
      A && this.setRange(A, 0, A, 0);
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
        const d = this.util.getParentElement(n, function(g) {
          return g.parentNode === i;
        });
        i.insertBefore(a, d), this.util.removeItem(n), this.util.removeEmptyNode(d, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const d = this.util.getParentElement(n, function(g) {
          return g.parentNode === i;
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
}, mr = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([Gt, el, tl]);
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
}, rn = "https://katex.org/docs/supported.html", gr = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([Gt]);
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
    let a = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + rn + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
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
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + rn + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
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
var Ai = { exports: {} }, vr = Ai.exports, un;
function br() {
  return un || (un = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : vr, function(t, i) {
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
          const u = this.context.fileBrowser, c = this.context[u.contextPlugin], o = [], b = l.length, d = c.columnSize || u.columnSize, g = d <= 1 ? 1 : Math.round(b / d) || 1, w = c.itemTemplateHandler;
          let S = "", L = '<div class="se-file-item-column">', A = 1;
          for (let s = 0, r, f; s < b; s++)
            if (r = l[s], f = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], f = r.tag = f.map(function(p) {
              return p.trim();
            }), L += w(r), (s + 1) % g === 0 && A < d && s + 1 < b && (A++, L += '</div><div class="se-file-item-column">'), a && f.length > 0)
              for (let p = 0, m = f.length, v; p < m; p++)
                v = f[p], v && o.indexOf(v) === -1 && (o.push(v), S += '<a title="' + v + '" aria-label="' + v + '">' + v + "</a>");
          L += "</div>", u.list.innerHTML = L, a && (u.items = l, u.tagArea.innerHTML = S, u.tagElements = u.tagArea.querySelectorAll("A"));
        },
        onClickTag: function(l) {
          const a = l.target;
          if (!this.util.isAnchor(a)) return;
          const u = a.textContent, c = this.plugins.fileBrowser, o = this.context.fileBrowser, b = o.tagArea.querySelector('a[title="' + u + '"]'), d = o.selectedTags, g = d.indexOf(u);
          g > -1 ? (d.splice(g, 1), this.util.removeClass(b, "on")) : (d.push(u), this.util.addClass(b, "on")), c._drawListItem.call(
            this,
            d.length === 0 ? o.items : o.items.filter(function(w) {
              return w.tag.some(function(S) {
                return d.indexOf(S) > -1;
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
  }(Ai)), Ai.exports;
}
var yr = /* @__PURE__ */ br();
const _r = /* @__PURE__ */ Se(yr), Cr = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([_r]);
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
}, wr = { blockquote: Ha, align: Oa, font: Ua, fontSize: Pa, fontColor: Wa, hiliteColor: $a, horizontalRule: Za, list: qa, table: ja, formatBlock: Ga, lineHeight: Ka, template: Ya, paragraphStyle: Xa, textStyle: Ja, link: lr, image: hr, video: pr, audio: mr, math: gr, imageGallery: Cr }, kr = {
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
}, dn = {
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
}, fe = {
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
      return fe.camelToKebabCase(t);
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
      return fe.camelToKebabCase(t);
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
      if (!fe.isWysiwygDiv(a)) {
        const u = a.parentNode;
        u && t(a) && (n = {
          sc: a.previousElementSibling,
          ec: a.nextElementSibling
        }, fe.removeItem(a), l(u));
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
      let S = this.getPositionIndex(t);
      const L = e.cloneNode(!1), A = e.cloneNode(!1);
      for (let s = 0, r = w.length; s < r; s++) {
        if (s < S) L.appendChild(w[s]);
        else if (s > S) A.appendChild(w[s]);
        else continue;
        s--, r--, S--;
      }
      return L.childNodes.length > 0 && e.parentNode.insertBefore(L, e), A.childNodes.length > 0 && e.parentNode.insertBefore(A, e.nextElementSibling), e;
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
      for (l = this.getPositionIndex(d) + a, d = d.parentNode, b = c, c = d.cloneNode(!1), o = d.childNodes, b && (this.isListCell(c) && this.isList(b) && b.firstElementChild ? (c.innerHTML = b.firstElementChild.innerHTML, fe.removeItem(b.firstElementChild), b.children.length > 0 && c.appendChild(b)) : c.appendChild(b)); o[l]; )
        c.appendChild(o[l]);
    d.childNodes.length <= 1 && (!d.firstChild || d.firstChild.textContent.length === 0) && (d.innerHTML = "<br>");
    const g = d.parentNode;
    return u && (d = d.nextSibling), c ? (this.mergeSameTags(c, null, !1), this.mergeNestedTags(c, (function(w) {
      return this.isList(w);
    }).bind(this)), c.childNodes.length > 0 ? g.insertBefore(c, d) : c = d, this.isListCell(c) && c.children && this.isList(c.children[0]) && c.insertBefore(this.createElement("BR"), c.children[0]), n.childNodes.length === 0 && this.removeItem(n), c) : d;
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
      for (let g = 0, w = d.length, S, L; g < w && (S = d[g], L = d[g + 1], !!S); g++)
        if (!(n.isBreak(S) || n.isMedia(S) || n.isInputElement(S))) {
          if (i && n._isIgnoreNodeChange(S) || !i && (n.isTable(S) || n.isListCell(S) || n.isFormatElement(S) && !n.isFreeFormatElement(S))) {
            (n.isTable(S) || n.isListCell(S)) && u(S, o + 1, g);
            continue;
          }
          if (w === 1 && c.nodeName === S.nodeName && c.parentNode) {
            if (l) {
              let A, s, r, f, p;
              for (let m = 0; m < l; m++)
                if (A = t[m], A && A[o] === g) {
                  for (s = S, r = c, f = o, p = !0; f >= 0; ) {
                    if (n.getArrayIndex(r.childNodes, s) !== A[f]) {
                      p = !1;
                      break;
                    }
                    s = S.parentNode, r = s.parentNode, f--;
                  }
                  p && (A.splice(o, 1), A[o] = g);
                }
            }
            n.copyTagAttributes(S, c), c.parentNode.insertBefore(S, c), n.removeItem(c);
          }
          if (!L) {
            S.nodeType === 1 && u(S, o + 1, g);
            break;
          }
          if (S.nodeName === L.nodeName && n.isSameAttributes(S, L) && S.href === L.href) {
            const A = S.childNodes;
            let s = 0;
            for (let m = 0, v = A.length; m < v; m++)
              A[m].textContent.length > 0 && s++;
            const r = S.lastChild, f = L.firstChild;
            let p = 0;
            if (r && f) {
              const m = r.nodeType === 3 && f.nodeType === 3;
              p = r.textContent.length;
              let v = r.previousSibling;
              for (; v && v.nodeType === 3; )
                p += v.textContent.length, v = v.previousSibling;
              if (s > 0 && r.nodeType === 3 && f.nodeType === 3 && (r.textContent.length > 0 || f.textContent.length > 0) && s--, l) {
                let h = null;
                for (let y = 0; y < l; y++)
                  if (h = t[y], h && h[o] > g) {
                    if (o > 0 && h[o - 1] !== b) continue;
                    h[o] -= 1, h[o + 1] >= 0 && h[o] === g && (h[o + 1] += s, m && r && r.nodeType === 3 && f && f.nodeType === 3 && (a[y] += p));
                  }
              }
            }
            if (S.nodeType === 3) {
              if (p = S.textContent.length, S.textContent += L.textContent, l) {
                let m = null;
                for (let v = 0; v < l; v++)
                  if (m = t[v], m && m[o] > g) {
                    if (o > 0 && m[o - 1] !== b) continue;
                    m[o] -= 1, m[o + 1] >= 0 && m[o] === g && (m[o + 1] += s, a[v] += p);
                  }
              }
            } else
              S.innerHTML += L.innerHTML;
            n.removeItem(L), g--;
          } else S.nodeType === 1 && u(S, o + 1, g);
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
    const a = [], u = [], c = [], o = [], b = this.getListChildNodes(e, (function(g) {
      if (g.nodeType !== 1)
        return this.isList(g.parentElement) && a.push(g), !1;
      if (i.test(g.nodeName) || !t.test(g.nodeName) && g.childNodes.length === 0 && this.isNotCheckingNode(g))
        return a.push(g), !1;
      const w = !this.getParentElement(g, this.isNotCheckingNode);
      if (!this.isTable(g) && !this.isListCell(g) && !this.isAnchor(g) && (this.isFormatElement(g) || this.isRangeFormatElement(g) || this.isTextStyleElement(g)) && g.childNodes.length === 0 && w)
        return u.push(g), !1;
      if (this.isList(g.parentNode) && !this.isList(g) && !this.isListCell(g))
        return c.push(g), !1;
      if (this.isCell(g)) {
        const L = g.firstElementChild;
        if (!this.isFormatElement(L) && !this.isRangeFormatElement(L) && !this.isComponent(L))
          return o.push(g), !1;
      }
      if (w && g.className) {
        const L = new this._w.Array(g.classList).map(n).join(" ").trim();
        L ? g.className = L : g.removeAttribute("class");
      }
      return l && g.parentNode !== e && w && (this.isListCell(g) && !this.isList(g.parentNode) || (this.isFormatElement(g) || this.isComponent(g)) && !this.isRangeFormatElement(g.parentNode) && !this.getParentElement(g, this.isComponent));
    }).bind(this));
    for (let g = 0, w = a.length; g < w; g++)
      this.removeItem(a[g]);
    const d = [];
    for (let g = 0, w = b.length, S, L; g < w; g++)
      if (S = b[g], L = S.parentNode, !(!L || !L.parentNode))
        if (this.getParentElement(S, this.isListCell)) {
          const A = S.childNodes;
          for (let s = A.length - 1; w >= 0; s--)
            L.insertBefore(S, A[s]);
          d.push(S);
        } else
          L.parentNode.insertBefore(S, L), d.push(L);
    for (let g = 0, w = d.length, S; g < w; g++)
      S = d[g], this.onlyZeroWidthSpace(S.textContent.trim()) && this.removeItem(S);
    for (let g = 0, w = u.length; g < w; g++)
      this.removeItem(u[g]);
    for (let g = 0, w = c.length, S, L, A, s; g < w; g++)
      if (S = c[g], s = S.parentNode, !!s)
        if (L = this.createElement("LI"), this.isFormatElement(S)) {
          for (A = S.childNodes; A[0]; )
            L.appendChild(A[0]);
          s.insertBefore(L, S), this.removeItem(S);
        } else
          S = S.nextSibling, L.appendChild(c[g]), s.insertBefore(L, S);
    for (let g = 0, w = o.length, S, L; g < w; g++)
      S = o[g], L = this.createElement("DIV"), L.innerHTML = S.textContent.trim().length === 0 && S.children.length === 0 ? "<br>" : S.innerHTML, S.innerHTML = L.outerHTML;
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
        for (let o = document.getElementsByTagName("link"), b = 0, d = o.length, g; b < d; b++)
          g = o[b].href.match(c), g && u.push(g[0]);
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
}, Gi = {
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
    const d = this._initElements(t, n, a.element, c), g = d.bottomBar, w = d.wysiwygFrame, S = d.placeholder;
    let L = d.codeView;
    const A = g.resizingBar, s = g.navigation, r = g.charWrapper, f = g.charCounter, p = i.createElement("DIV");
    p.className = "se-loading-box sun-editor-common", p.innerHTML = '<div class="se-loading-effect"></div>';
    const m = i.createElement("DIV");
    m.className = "se-line-breaker", m.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const v = i.createElement("DIV");
    v.className += "se-line-breaker-component";
    const h = v.cloneNode(!0);
    v.innerHTML = h.innerHTML = t.icons.line_break;
    const y = i.createElement("DIV");
    y.className = "se-resizing-back";
    const C = i.createElement("INPUT");
    C.tabIndex = -1, C.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const _ = t.toolbarContainer;
    _ && (_.appendChild(a.element), _.appendChild(u));
    const x = t.resizingBarContainer;
    return A && x && x.appendChild(A), b.appendChild(L), S && b.appendChild(S), _ || (l.appendChild(a.element), l.appendChild(u)), l.appendChild(o), l.appendChild(b), l.appendChild(y), l.appendChild(p), l.appendChild(m), l.appendChild(v), l.appendChild(h), l.appendChild(C), A && !x && l.appendChild(A), n.appendChild(l), L = this._checkCodeMirror(t, L), {
      constructed: {
        _top: n,
        _relative: l,
        _toolBar: a.element,
        _toolbarShadow: u,
        _menuTray: a._menuTray,
        _editorArea: b,
        _wysiwygArea: w,
        _codeArea: L,
        _placeholder: S,
        _resizingBar: A,
        _navigation: s,
        _charWrapper: r,
        _charCounter: f,
        _loading: p,
        _lineBreaker: m,
        _lineBreaker_t: v,
        _lineBreaker_b: h,
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
          fe.hasOwn(a, u) && (l[u] = a[u]);
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
        fe.hasOwn(n, l) && (i[l] = n[l]);
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
    const d = this._initElements(e, n.topArea, c ? o.element : n.toolbar, b), g = d.bottomBar, w = d.wysiwygFrame, S = d.placeholder;
    let L = d.codeView;
    return n.resizingBar && fe.removeItem(n.resizingBar), g.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(g.resizingBar) : l.appendChild(g.resizingBar)), a.innerHTML = "", a.appendChild(L), S && a.appendChild(S), L = this._checkCodeMirror(e, L), n.resizingBar = g.resizingBar, n.navigation = g.navigation, n.charWrapper = g.charWrapper, n.charCounter = g.charCounter, n.wysiwygFrame = w, n.code = L, n.placeholder = S, e.rtl ? fe.addClass(n.topArea, "se-rtl") : fe.removeClass(n.topArea, "se-rtl"), {
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
      for (let g in e.iframeAttributes)
        l.setAttribute(g, e.iframeAttributes[g]);
      l.className += " " + e._editableClass, l.style.cssText = e._editorStyles.frame + e._editorStyles.editor, l.className += e.className;
    }
    const a = document.createElement("TEXTAREA");
    a.className = "se-wrapper-inner se-wrapper-code" + e.className, a.style.cssText = e._editorStyles.frame, a.style.display = "none", e.height === "auto" && (a.style.overflow = "hidden");
    let u = null, c = null, o = null, b = null;
    if (e.resizingBar && (u = document.createElement("DIV"), u.className = "se-resizing-bar sun-editor-common", c = document.createElement("DIV"), c.className = "se-navigation sun-editor-common", u.appendChild(c), e.charCounter)) {
      if (o = document.createElement("DIV"), o.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const g = document.createElement("SPAN");
        g.className = "se-char-label", g.textContent = e.charCounterLabel, o.appendChild(g);
      }
      if (b = document.createElement("SPAN"), b.className = "se-char-counter", b.textContent = "0", o.appendChild(b), e.maxCharCount > 0) {
        const g = document.createElement("SPAN");
        g.textContent = " / " + e.maxCharCount, o.appendChild(g);
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
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || Vi, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new fe._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
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
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : l) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? fe.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? fe.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? fe.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = fe.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? fe.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (fe.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (fe.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? fe.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (fe.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (fe.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? fe.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? fe.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? fe.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryData = t.imageGalleryData || null, t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !fe.getNumber(t.videoWidth, 0) ? "" : fe.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !fe.getNumber(t.videoHeight, 0) ? "" : fe.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = fe.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.vimeoQuery = (t.vimeoQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? fe.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? fe.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? fe.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? fe.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? dn : [dn, t.icons].reduce(function(a, u) {
      for (let c in u)
        fe.hasOwn(u, c) && (a[c] = u[c]);
      return a;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(a, u) {
      for (let c in u)
        fe.hasOwn(u, c) && (a[c] = u[c]);
      return a;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = fe._setDefaultOptionStyle(t, t.defaultStyle);
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
    const t = e.icons, i = e.lang, n = fe.isOSX_IOS ? "⌘" : "CTRL", l = fe.isOSX_IOS ? "⇧" : "+SHIFT", a = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], u = e.rtl ? ["[", "]"] : ["]", "["], c = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
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
    const e = fe.createElement("DIV");
    e.className = "se-btn-module se-btn-module-border";
    const t = fe.createElement("UL");
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
    const c = fe.createElement("LI"), o = fe.createElement("BUTTON"), b = t || i;
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
    let g = null, w = null, S = null, L = null, A = "", s = !1;
    const r = fe.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let m = 0, v, h, y, C, _; m < t.length; m++)
        if (v = !1, _ = "", C = t[m], S = this._createModuleGroup(), typeof C == "object") {
          for (let x = 0, D; x < C.length; x++) {
            if (w = C[x], D = !1, /^\%\d+/.test(w) && x === 0) {
              C[0] = w.replace(/[^\d]/g, ""), d.push(C), t.splice(m--, 1);
              continue e;
            }
            if (typeof w == "object")
              typeof w.add == "function" ? (A = w.name, g = o[A], i[A] = w) : (A = w.name, g = [w.buttonClass, w.title, w.name, w.dataDisplay, w.innerHTML, w._disabled]);
            else {
              if (/^\-/.test(w)) {
                _ = w.substr(1), S.div.className += " module-float-" + _;
                continue;
              }
              if (/^\#/.test(w)) {
                w.substr(1) === "fix" && (S.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(w)) {
                D = !0;
                const T = w.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + T[1].trim();
                const z = T[2].trim(), N = T[3].trim();
                g = ["se-btn-more", z, y, "MORE", N];
              } else
                g = o[w];
              if (A = w, !g) {
                const T = i[A];
                if (!T) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + A + "]");
                g = [T.buttonClass, T.title, T.name, T.display, T.innerHTML, T._disabled];
              }
            }
            L = this._createButton(g[0], g[1], g[2], g[3], g[4], g[5], c), (v ? h : S.ul).appendChild(L.li), i[A] && (b[A] = L.button), D && (v = !0, h = fe.createElement("DIV"), h.className = "se-more-layer " + y, h.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (_ ? ' style="float: ' + _ + ';"' : "") + "></ul></div>", r.appendChild(h), h = h.firstElementChild.firstElementChild);
          }
          if (s) {
            const x = l.cloneNode(!1);
            u.appendChild(x);
          }
          u.appendChild(S.div), s = !0;
        } else if (/^\/$/.test(C)) {
          const x = e.createElement("DIV");
          x.className = "se-btn-module-enter", u.appendChild(x), s = !1;
        }
    switch (u.children.length) {
      case 0:
        u.style.display = "none";
        break;
      case 1:
        fe.removeClass(u.firstElementChild, "se-btn-module-border");
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
    const p = e.createElement("DIV");
    return p.className = "se-toolbar-cover", a.appendChild(p), n.hideToolbar && (a.style.display = "none"), {
      element: a,
      plugins: i,
      pluginCallButtons: b,
      responsiveButtons: d,
      _menuTray: f,
      _buttonTray: u
    };
  }
}, Ki = function(e, t, i) {
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
function xr(e, t) {
  const i = e._w, n = e.util, l = e.options.historyStackDelayTime;
  let a = e.context.element, u = e.context.tool.undo, c = e.context.tool.redo, o = null, b = 0, d = [];
  function g() {
    const S = d[b];
    a.wysiwyg.innerHTML = S.contents, e.setRange(n.getNodeFromPath(S.s.path, a.wysiwyg), S.s.offset, n.getNodeFromPath(S.e.path, a.wysiwyg), S.e.offset), e.focus(), d.length <= 1 ? (u && u.setAttribute("disabled", !0), c && c.setAttribute("disabled", !0)) : b === 0 ? (u && u.setAttribute("disabled", !0), c && c.removeAttribute("disabled")) : b === d.length - 1 ? (u && u.removeAttribute("disabled"), c && c.setAttribute("disabled", !0)) : (u && u.removeAttribute("disabled"), c && c.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function w() {
    e._checkComponents();
    const S = a.wysiwyg.innerHTML;
    if (!S || d[b] && S === d[b].contents) return;
    b++;
    const L = e._variable._range;
    d.length > b && (d = d.slice(0, b), c && c.setAttribute("disabled", !0)), L ? d[b] = {
      contents: S,
      s: {
        path: n.getNodePath(L.startContainer, null, null),
        offset: L.startOffset
      },
      e: {
        path: n.getNodePath(L.endContainer, null, null),
        offset: L.endOffset
      }
    } : d[b] = {
      contents: S,
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
    push: function(S) {
      i.setTimeout(e._resourcesStateChange.bind(e));
      const L = typeof S == "number" ? S > 0 ? S : 0 : S ? l : 0;
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
      b > 0 && (b--, g());
    },
    /**
     * @description Redo function
     */
    redo: function() {
      d.length - 1 > b && (b++, g());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(S) {
      b = S < 0 ? d.length - 1 : S, g();
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
    reset: function(S) {
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
      }, S || t();
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
const cn = {
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
function Sr(e, t, i, n, l, a) {
  const u = e.element.originElement.ownerDocument || document, c = u.defaultView || window, o = fe, b = l.icons, d = {
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
    notice: cn,
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
      for (let r = 0, f, p; r < s.length; r++)
        f = s[r], p = f.getAttribute("data-command"), this.allCommandButtons[p] = f;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const s = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let r = 0, f, p, m; r < s.length; r++)
          f = s[r], p = f.getAttribute("data-command"), m = this.allCommandButtons[p], m && (f.parentElement.replaceChild(m, f), this.context.tool[p] && (this.context.tool[p] = m));
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
      for (let r = 0, f = s.length, p; r < f; r++)
        p = s[r].name, this.plugins[p] || (this.plugins[p] = s[r]), this.initPlugins[p] || (this.initPlugins[p] = !0, typeof this.plugins[p].add == "function" && this.plugins[p].add(this));
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
      const f = this.context.element.toolbar, p = f.offsetWidth, m = g._getEditorOffsets(e.element.toolbar), v = r.offsetWidth, h = s.parentElement.offsetLeft + 3;
      if (l.rtl) {
        const N = s.offsetWidth, $ = v > N ? v - N : 0, O = $ > 0 ? 0 : N - v;
        r.style.left = h - $ + O + "px", m.left > g._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const N = p <= v ? 0 : p - (h + v);
        N < 0 ? r.style.left = h + N + "px" : r.style.left = h + "px";
      }
      let y = 0, C = s;
      for (; C && C !== f; )
        y += C.offsetTop, C = C.offsetParent;
      const _ = y;
      this._isBalloon ? y += f.offsetTop + s.offsetHeight : y -= s.offsetHeight;
      const x = m.top, D = r.offsetHeight, T = this.getGlobalScrollOffset().top, z = c.innerHeight - (x - T + _ + s.parentElement.offsetHeight);
      if (z < D) {
        let N = -1 * (D - _ + 3);
        const $ = x - T + N, O = D + ($ < 0 ? $ : 0);
        O > z ? (r.style.height = O + "px", N = -1 * (O - _ + 3)) : (r.style.height = z + "px", N = _ + s.parentElement.offsetHeight), r.style.top = N + "px";
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
    setControllerPosition: function(s, r, f, p) {
      l.rtl && (p.left *= -1);
      const m = o.getOffset(r, e.element.wysiwygFrame);
      s.style.visibility = "hidden", s.style.display = "block";
      const v = f === "top" ? -(s.offsetHeight + 2) : r.offsetHeight + 12;
      s.style.top = m.top + v + p.top + "px";
      const h = m.left - e.element.wysiwygFrame.scrollLeft + p.left, y = s.offsetWidth, C = r.offsetWidth, _ = o.hasClass(s.firstElementChild, "se-arrow") ? s.firstElementChild : null;
      if (l.rtl) {
        const x = y > C ? y - C : 0, D = x > 0 ? 0 : C - y;
        s.style.left = h - x + D + "px", x > 0 && _ && (_.style.left = (y - 14 < 10 + x ? y - 14 : 10 + x) + "px");
        const T = e.element.wysiwygFrame.offsetLeft - s.offsetLeft;
        T > 0 && (s.style.left = "0px", _ && (_.style.left = T + "px"));
      } else {
        s.style.left = h + "px";
        const x = e.element.wysiwygFrame.offsetWidth - (s.offsetLeft + y);
        x < 0 ? (s.style.left = s.offsetLeft + x + "px", _ && (_.style.left = 20 - x + "px")) : _ && (_.style.left = "20px");
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
                const f = o.createElement(l.defaultTag), p = o.createElement("BR");
                f.appendChild(p), e.element.wysiwyg.insertBefore(f, r), this.setRange(p, 0, p, 0);
                return;
              }
            }
            this.setRange(s.startContainer, s.startOffset, s.endContainer, s.endOffset);
          } catch {
            this.nativeFocus();
          }
        g._applyTagEffects(), this._isBalloon && g._toggleToolbarBalloon();
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
    setRange: function(s, r, f, p) {
      if (!s || !f) return;
      r > s.textContent.length && (r = s.textContent.length), p > f.textContent.length && (p = f.textContent.length), o.isFormatElement(s) && (s = s.childNodes[r] || s.childNodes[r - 1] || s, r = r > 0 ? s.nodeType === 1 ? 1 : s.textContent ? s.textContent.length : 0 : 0), o.isFormatElement(f) && (f = f.childNodes[p] || f.childNodes[p - 1] || f, p = p > 0 ? f.nodeType === 1 ? 1 : f.textContent ? f.textContent.length : 0 : 0);
      const m = this._wd.createRange();
      try {
        m.setStart(s, r), m.setEnd(f, p);
      } catch (h) {
        console.warn("[SUNEDITOR.core.focus.error] " + h), this.nativeFocus();
        return;
      }
      const v = this.getSelection();
      return v.removeAllRanges && v.removeAllRanges(), v.addRange(m), this._rangeInfo(m, this.getSelection()), l.iframe && this.__focus(), m;
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
        const f = r.anchorNode, p = r.focusNode, m = r.anchorOffset, v = r.focusOffset, h = o.compareElements(f, p), y = h.ancestor && (h.result === 0 ? m <= v : h.result > 1);
        return this.setRange(
          y ? f : p,
          y ? m : v,
          y ? p : f,
          y ? v : m
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
        const f = e.element.wysiwyg, p = o.createElement(l.defaultTag);
        p.innerHTML = "<br>", f.insertBefore(p, r && r !== f ? r.nextElementSibling : f.firstElementChild), this.setRange(p.firstElementChild, 0, p.firstElementChild, 1), s = this._variable._range;
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
      let f = s.firstElementChild, p = null;
      return f ? (p = f.firstChild, p || (p = o.createElement("BR"), f.appendChild(p))) : (f = o.createElement(l.defaultTag), p = o.createElement("BR"), f.appendChild(p), s.appendChild(f)), r.setStart(p, 0), r.setEnd(p, 0), r;
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
      let f = s.startContainer, p = s.startOffset, m = s.endContainer, v = s.endOffset, h, y, C;
      if (o.isFormatElement(f))
        for (f.childNodes[p] ? (f = f.childNodes[p] || f, p = 0) : (f = f.lastChild || f, p = f.textContent.length); f && f.nodeType === 1 && f.firstChild; )
          f = f.firstChild || f, p = 0;
      if (o.isFormatElement(m)) {
        for (m = m.childNodes[v] || m.lastChild || m; m && m.nodeType === 1 && m.lastChild; )
          m = m.lastChild;
        v = r ? 0 : m.textContent.length;
      }
      if (h = o.isWysiwygDiv(f) ? e.element.wysiwyg.firstChild : f, y = p, o.isBreak(h) || h.nodeType === 1 && h.childNodes.length > 0) {
        const _ = o.isBreak(h);
        if (!_) {
          for (; h && !o.isBreak(h) && h.nodeType === 1; )
            h = h.childNodes[y] || h.nextElementSibling || h.nextSibling, y = 0;
          let x = o.getFormatElement(h, null);
          x === o.getRangeFormatElement(x, null) && (x = o.createElement(o.getParentElement(h, o.isCell) ? "DIV" : l.defaultTag), h.parentNode.insertBefore(x, h), x.appendChild(h));
        }
        if (o.isBreak(h)) {
          const x = o.createTextNode(o.zeroWidthSpace);
          h.parentNode.insertBefore(x, h), h = x, _ && f === m && (m = h, v = 1);
        }
      }
      if (f = h, p = y, h = o.isWysiwygDiv(m) ? e.element.wysiwyg.lastChild : m, y = v, o.isBreak(h) || h.nodeType === 1 && h.childNodes.length > 0) {
        const _ = o.isBreak(h);
        if (!_) {
          for (; h && !o.isBreak(h) && h.nodeType === 1 && (C = h.childNodes, C.length !== 0); )
            h = C[y > 0 ? y - 1 : y] || !/FIGURE/i.test(C[0].nodeName) ? C[0] : h.previousElementSibling || h.previousSibling || f, y = y > 0 ? h.textContent.length : y;
          let x = o.getFormatElement(h, null);
          x === o.getRangeFormatElement(x, null) && (x = o.createElement(o.isCell(x) ? "DIV" : l.defaultTag), h.parentNode.insertBefore(x, h), x.appendChild(h));
        }
        if (o.isBreak(h)) {
          const x = o.createTextNode(o.zeroWidthSpace);
          h.parentNode.insertBefore(x, h), h = x, y = 1, _ && !h.previousSibling && o.removeItem(m);
        }
      }
      return m = h, v = y, this.setRange(f, p, m, v), !0;
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
        const N = e.element.wysiwyg.children;
        if (N.length === 0) return [];
        this.setRange(N[0], 0, N[N.length - 1], N[N.length - 1].textContent.trim().length), r = this.getRange();
      }
      const f = r.startContainer, p = r.endContainer, m = r.commonAncestorContainer, v = o.getListChildren(m, function(N) {
        return s ? s(N) : o.isFormatElement(N);
      });
      if (!o.isWysiwygDiv(m) && !o.isRangeFormatElement(m) && v.unshift(o.getFormatElement(m, null)), f === p || v.length === 1) return v;
      let h = o.getFormatElement(f, null), y = o.getFormatElement(p, null), C = null, _ = null;
      const x = function(N) {
        return o.isTable(N) ? /^TABLE$/i.test(N.nodeName) : !0;
      };
      let D = o.getRangeFormatElement(h, x), T = o.getRangeFormatElement(y, x);
      o.isTable(D) && o.isListCell(D.parentNode) && (D = D.parentNode), o.isTable(T) && o.isListCell(T.parentNode) && (T = T.parentNode);
      const z = D === T;
      for (let N = 0, $ = v.length, O; N < $; N++) {
        if (O = v[N], h === O || !z && O === D) {
          C = N;
          continue;
        }
        if (y === O || !z && O === T) {
          _ = N;
          break;
        }
      }
      return C === null && (C = 0), _ === null && (_ = v.length - 1), v.slice(C, _ + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(s) {
      const r = this.getRange().commonAncestorContainer, f = o.getParentElement(r, o.isComponent), p = o.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(m) {
        const v = this.getParentElement(m, this.isComponent);
        return this.isFormatElement(m) && (!v || v === f) || this.isComponent(m) && !this.getFormatElement(m);
      }).bind(o));
      if (s) {
        for (let m = 0, v = p.length; m < v; m++)
          for (let h = m - 1; h >= 0; h--)
            if (p[h].contains(p[m])) {
              p.splice(m, 1), m--, v--;
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
      const p = [];
      for (f = f === "start" ? "previousSibling" : "nextSibling"; s && !o.isFormatElement(s) && !o.isWysiwygDiv(s); )
        if (!s[f] || o.isBreak(s[f]) && !s[f][f])
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
      const f = o.getFormatElement(this.getSelectionNode(), null);
      let p = null;
      if (!o.isFormatElement(s) && o.isFreeFormatElement(f || s.parentNode))
        p = o.createElement("BR");
      else {
        const m = r ? typeof r == "string" ? r : r.nodeName : o.isFormatElement(f) && !o.isRangeFormatElement(f) && !o.isFreeFormatElement(f) ? f.nodeName : l.defaultTag;
        p = o.createElement(m), p.innerHTML = "<br>", (r && typeof r != "string" || !r && o.isFormatElement(f)) && o.copyTagAttributes(p, r || f, ["id"]);
      }
      return o.isCell(s) ? s.insertBefore(p, s.nextElementSibling) : s.parentNode.insertBefore(p, s.nextElementSibling), p;
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
    insertComponent: function(s, r, f, p) {
      if (this.isReadOnly || f && !this.checkCharCount(s, null))
        return null;
      const m = this.removeNode();
      this.getRange_addLine(this.getRange(), m.container);
      let v = null, h = this.getSelectionNode(), y = o.getFormatElement(h, null);
      if (o.isListCell(y))
        this.insertNode(s, h === y ? null : m.container.nextSibling, !1), s.nextSibling || s.parentNode.appendChild(o.createElement("BR"));
      else {
        if (this.getRange().collapsed && (m.container.nodeType === 3 || o.isBreak(m.container))) {
          const C = o.getParentElement(m.container, (function(_) {
            return this.isRangeFormatElement(_);
          }).bind(o));
          v = o.splitElement(m.container, m.offset, C ? o.getElementDepth(C) + 1 : 0), v && (y = v.previousSibling);
        }
        this.insertNode(s, o.isRangeFormatElement(y) ? null : y, !1), y && o.onlyZeroWidthSpace(y) && o.removeItem(y);
      }
      if (!p) {
        this.setRange(s, 0, s, 0);
        const C = this.getFileComponent(s);
        C ? this.selectComponent(C.target, C.pluginName) : v && (v = o.getEdgeChildNodes(v, null).sc || v, this.setRange(v, 0, v, 0));
      }
      return r || this.history.push(1), v || s;
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
      const r = o.getParentElement(s, o.isComponent), f = e.element.lineBreaker_t.style, p = e.element.lineBreaker_b.style, m = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : s, v = o.isListCell(r.parentNode);
      let h, y, C;
      (v ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, h = o.getOffset(s, e.element.wysiwygFrame).top + y, C = m.offsetWidth / 2 / 2, f.top = h - y - 12 + "px", f.left = o.getOffset(m).left + C + "px", f.display = "block") : f.display = "none", (v ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) ? (h || (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, h = o.getOffset(s, e.element.wysiwygFrame).top + y, C = m.offsetWidth / 2 / 2), p.top = h + m.offsetHeight - y - 12 + "px", p.left = o.getOffset(m).left + m.offsetWidth - C - 24 + "px", p.display = "block") : p.display = "none";
    },
    _checkDuplicateNode: function(s, r) {
      (function f(p) {
        d._dupleCheck(p, r);
        const m = p.childNodes;
        for (let v = 0, h = m.length; v < h; v++)
          f(m[v]);
      })(s);
    },
    _dupleCheck: function(s, r) {
      if (!o.isTextStyleElement(s)) return;
      const f = (s.style.cssText.match(/[^;]+;/g) || []).map(function(v) {
        return v.trim();
      }), p = s.nodeName;
      if (/^span$/i.test(p) && f.length === 0) return s;
      let m = !1;
      return function v(h) {
        if (!(o.isWysiwygDiv(h) || !o.isTextStyleElement(h))) {
          if (h.nodeName === p) {
            m = !0;
            const y = h.style.cssText.match(/[^;]+;/g) || [];
            for (let C = 0, _ = y.length, x; C < _; C++)
              (x = f.indexOf(y[C].trim())) > -1 && f.splice(x, 1);
            for (let C = 0, _ = h.classList.length; C < _; C++)
              s.classList.remove(h.classList[C]);
          }
          v(h.parentElement);
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
      let p = null, m = this.getRange(), v = o.isListCell(m.commonAncestorContainer) ? m.commonAncestorContainer : o.getFormatElement(this.getSelectionNode(), null), h = o.isListCell(v) && (o.isListCell(s) || o.isList(s)), y, C, _, x = null;
      const D = o.isFreeFormatElement(v), T = !D && (o.isFormatElement(s) || o.isRangeFormatElement(s)) || o.isComponent(s);
      if (h && (_ = r || o.isList(s) ? v.lastChild : v.nextElementSibling, x = o.isList(s) ? v : (_ || v).parentNode), !r && (T || o.isComponent(s) || o.isMedia(s))) {
        const W = this.isEdgePoint(m.endContainer, m.endOffset, "end"), R = this.removeNode(), M = R.container, B = M === R.prevContainer && m.collapsed ? null : R.prevContainer;
        if (h && B)
          if (x = B.nodeType === 3 ? B.parentNode : B, x.contains(M)) {
            let U = !0;
            for (_ = M; _.parentNode && _.parentNode !== x; )
              _ = _.parentNode, U = !1;
            U && M === B && (_ = _.nextSibling);
          } else
            _ = null;
        else if (h && o.isListCell(M) && !v.parentElement)
          v = o.createElement("LI"), x.appendChild(v), M.appendChild(x), _ = null;
        else if (M.nodeType === 3 || o.isBreak(M) || h) {
          const U = o.getParentElement(M, (function(k) {
            return this.isRangeFormatElement(k) || this.isListCell(k);
          }).bind(o));
          if (r = o.splitElement(M, R.offset, U ? o.getElementDepth(U) + 1 : 0), !r)
            _ = r = v;
          else if (h) {
            if (v.contains(M)) {
              const k = o.isList(v.lastElementChild);
              let F = null;
              W || (F = v.cloneNode(!1), F.appendChild(r.textContent.trim() ? r : o.createTextNode(o.zeroWidthSpace))), k && (F || (F = v.cloneNode(!1), F.appendChild(o.createTextNode(o.zeroWidthSpace))), F.appendChild(v.lastElementChild)), F && (v.parentNode.insertBefore(F, v.nextElementSibling), _ = r = F);
            }
          } else
            r = r.previousSibling;
        }
      }
      m = !r && !T ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const z = m.commonAncestorContainer, N = m.startOffset, $ = m.endOffset, O = m.startContainer === z && o.isFormatElement(z), P = O && (z.childNodes[N] || z.childNodes[0]) || m.startContainer, V = O && (z.childNodes[$] || z.childNodes[z.childNodes.length - 1]) || m.endContainer;
      if (!h)
        if (r)
          y = r.parentNode, r = r.nextSibling, C = !0;
        else if (y = P, P.nodeType === 3 && (y = P.parentNode), m.collapsed)
          if (z.nodeType === 3)
            z.textContent.length > $ ? r = z.splitText($) : r = z.nextSibling;
          else if (o.isBreak(y))
            r = y, y = y.parentNode;
          else {
            let W = y.childNodes[N];
            const R = W && W.nodeType === 3 && o.onlyZeroWidthSpace(W) && o.isBreak(W.nextSibling) ? W.nextSibling : W;
            R ? !R.nextSibling && o.isBreak(R) ? (y.removeChild(R), r = null) : r = o.isBreak(R) && !o.isBreak(s) ? R : R.nextSibling : r = null;
          }
        else if (P === V) {
          this.isEdgePoint(V, $) ? r = V.nextSibling : r = V.splitText($);
          let R = P;
          this.isEdgePoint(P, N) || (R = P.splitText(N)), y.removeChild(R), y.childNodes.length === 0 && T && (y.innerHTML = "<br>");
        } else {
          const R = this.removeNode(), M = R.container, B = R.prevContainer;
          if (M && M.childNodes.length === 0 && T && (o.isFormatElement(M) ? M.innerHTML = "<br>" : o.isRangeFormatElement(M) && (M.innerHTML = "<" + l.defaultTag + "><br></" + l.defaultTag + ">")), o.isListCell(M) && s.nodeType === 3)
            y = M, r = null;
          else if (!T && B)
            if (y = B.nodeType === 3 ? B.parentNode : B, y.contains(M)) {
              let U = !0;
              for (r = M; r.parentNode && r.parentNode !== y; )
                r = r.parentNode, U = !1;
              U && M === B && (r = r.nextSibling);
            } else
              r = null;
          else o.isWysiwygDiv(M) && !o.isFormatElement(s) ? (y = M.appendChild(o.createElement(l.defaultTag)), r = null) : (r = T ? V : M === B ? M.nextSibling : M, y = !r || !r.parentNode ? z : r.parentNode);
          for (; r && !o.isFormatElement(r) && r.parentNode !== z; )
            r = r.parentNode;
        }
      try {
        if (!h) {
          if ((o.isWysiwygDiv(r) || y === e.element.wysiwyg.parentNode) && (y = e.element.wysiwyg, r = null), o.isFormatElement(s) || o.isRangeFormatElement(s) || !o.isListCell(y) && o.isComponent(s)) {
            const W = y;
            if (o.isList(r))
              y = r, r = null;
            else if (o.isListCell(r))
              y = r.previousElementSibling || r;
            else if (!C && !r) {
              const R = this.removeNode(), M = R.container.nodeType === 3 ? o.isListCell(o.getFormatElement(R.container, null)) ? R.container : o.getFormatElement(R.container, null) || R.container.parentNode : R.container, B = o.isWysiwygDiv(M) || o.isRangeFormatElement(M);
              y = B ? M : M.parentNode, r = B ? null : M.nextSibling;
            }
            W.childNodes.length === 0 && y !== W && o.removeItem(W);
          }
          if (T && !D && !o.isRangeFormatElement(y) && !o.isListCell(y) && !o.isWysiwygDiv(y) && (r = y.nextElementSibling, y = y.parentNode), o.isWysiwygDiv(y) && (s.nodeType === 3 || o.isBreak(s))) {
            const W = o.createElement(l.defaultTag);
            W.appendChild(s), p = s, s = W;
          }
        }
        if (h ? x.parentNode ? (y = x, r = _) : (y = e.element.wysiwyg, r = null) : r = y === r ? y.lastChild : r, o.isListCell(s) && !o.isList(y)) {
          if (o.isListCell(y))
            r = y.nextElementSibling, y = y.parentNode;
          else {
            const W = o.createElement("ol");
            y.insertBefore(W, r), y = W, r = null;
          }
          h = !0;
        }
        if (this._checkDuplicateNode(s, y), y.insertBefore(s, r), h)
          if (o.onlyZeroWidthSpace(v.textContent.trim()))
            o.removeItem(v), s = s.lastChild;
          else {
            const W = o.getArrayItem(v.children, o.isList);
            W && (s !== W ? (s.appendChild(W), s = W.previousSibling) : (y.appendChild(s), s = y), o.onlyZeroWidthSpace(v.textContent.trim()) && o.removeItem(v));
          }
      } catch (W) {
        y.appendChild(s), console.warn("[SUNEDITOR.insertNode.warn] " + W);
      } finally {
        p && (s = p);
        const W = y.querySelectorAll("[data-se-duple]");
        if (W.length > 0)
          for (let R = 0, M = W.length, B, U, k, F; R < M; R++) {
            for (B = W[R], k = B.childNodes, F = B.parentNode; k[0]; )
              U = k[0], F.insertBefore(U, B);
            B === s && (s = U), o.removeItem(B);
          }
        if ((o.isFormatElement(s) || o.isComponent(s)) && P === V) {
          const R = o.getFormatElement(z, null);
          R && R.nodeType === 1 && o.isEmptyLine(R) && o.removeItem(R);
        }
        if (D && (o.isFormatElement(s) || o.isRangeFormatElement(s)) && (s = this._setIntoFreeFormat(s)), !o.isComponent(s)) {
          let R = 1;
          if (s.nodeType === 3)
            R = s.textContent.length, this.setRange(s, R, s, R);
          else if (!o.isBreak(s) && !o.isListCell(s) && o.isFormatElement(y)) {
            let M = null;
            (!s.previousSibling || o.isBreak(s.previousSibling)) && (M = o.createTextNode(o.zeroWidthSpace), s.parentNode.insertBefore(M, s)), (!s.nextSibling || o.isBreak(s.nextSibling)) && (M = o.createTextNode(o.zeroWidthSpace), s.parentNode.insertBefore(M, s.nextSibling)), o._isIgnoreNodeChange(s) && (s = s.nextSibling, R = 0);
          }
          this.setRange(s, R, s, R);
        }
        return s;
      }
    },
    _setIntoFreeFormat: function(s) {
      const r = s.parentNode;
      let f, p;
      for (; o.isFormatElement(s) || o.isRangeFormatElement(s); ) {
        for (f = s.childNodes, p = null; f[0]; ) {
          if (p = f[0], o.isFormatElement(p) || o.isRangeFormatElement(p)) {
            if (this._setIntoFreeFormat(p), !s.parentNode) break;
            f = s.childNodes;
            continue;
          }
          r.insertBefore(p, s);
        }
        s.childNodes.length === 0 && o.removeItem(s), s = o.createElement("BR"), r.insertBefore(s, p.nextSibling);
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
        const R = o.getParentElement(s.startContainer, o.isMediaComponent);
        if (R) {
          const M = o.createElement("BR"), B = o.createElement(l.defaultTag);
          return B.appendChild(M), o.changeElement(R, B), d.setRange(B, 0, B, 0), this.history.push(!0), {
            container: B,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = s.startOffset === 0, f = d.isEdgePoint(s.endContainer, s.endOffset, "end");
      let p = null, m = null, v = null;
      r && (m = o.getFormatElement(s.startContainer), m && (p = m.previousElementSibling, m = p)), f && (v = o.getFormatElement(s.endContainer), v = v && v.nextElementSibling);
      let h, y = 0, C = s.startContainer, _ = s.endContainer, x = s.startOffset, D = s.endOffset;
      const T = s.commonAncestorContainer.nodeType === 3 && s.commonAncestorContainer.parentNode === C.parentNode ? C.parentNode : s.commonAncestorContainer;
      if (T === C && T === _ && (C = T.children[x], _ = T.children[D], x = D = 0), !C || !_) return {
        container: T,
        offset: 0
      };
      if (C === _ && s.collapsed && C.textContent && o.onlyZeroWidthSpace(C.textContent.substr(x)))
        return {
          container: C,
          offset: x,
          prevContainer: C && C.parentNode ? C : null
        };
      let z = null, N = null;
      const $ = o.getListChildNodes(T, null);
      let O = o.getArrayIndex($, C), P = o.getArrayIndex($, _);
      if ($.length > 0 && O > -1 && P > -1) {
        for (let R = O + 1, M = C; R >= 0; R--)
          $[R] === M.parentNode && $[R].firstChild === M && x === 0 && (O = R, M = M.parentNode);
        for (let R = P - 1, M = _; R > O; R--)
          $[R] === M.parentNode && $[R].nodeType === 1 && ($.splice(R, 1), M = M.parentNode, --P);
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
      for (let R = O; R <= P; R++) {
        const M = $[R];
        if (M.length === 0 || M.nodeType === 3 && M.data === void 0) {
          this._nodeRemoveListItem(M);
          continue;
        }
        if (M === C) {
          if (C.nodeType === 1) {
            if (o.isComponent(C)) continue;
            z = o.createTextNode(C.textContent);
          } else
            M === _ ? (z = o.createTextNode(C.substringData(0, x) + _.substringData(D, _.length - D)), y = x) : z = o.createTextNode(C.substringData(0, x));
          if (z.length > 0 ? C.data = z.data : this._nodeRemoveListItem(C), M === _) break;
          continue;
        }
        if (M === _) {
          if (_.nodeType === 1) {
            if (o.isComponent(_)) continue;
            N = o.createTextNode(_.textContent);
          } else
            N = o.createTextNode(_.substringData(D, _.length - D));
          N.length > 0 ? _.data = N.data : this._nodeRemoveListItem(_);
          continue;
        }
        this._nodeRemoveListItem(M);
      }
      const V = o.getParentElement(_, "ul"), W = o.getParentElement(C, "li");
      if (V && W && W.contains(V) ? (h = V.previousSibling, y = h.textContent.length) : (h = _ && _.parentNode ? _ : C && C.parentNode ? C : s.endContainer || s.startContainer, y = !r && !f ? y : f ? h.textContent.length : 0), !o.isWysiwygDiv(h) && h.childNodes.length === 0) {
        const R = o.removeItemAllParents(h, null, null);
        R && (h = R.sc || R.ec || e.element.wysiwyg);
      }
      return !o.getFormatElement(h) && !(C && C.parentNode) && (v ? (h = v, y = 0) : m && (h = m, y = 1)), this.setRange(h, y, h, y), this.history.push(!0), {
        container: h,
        offset: y,
        prevContainer: p
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
        for (let D = 0, T = r.length, z, N, $, O, P, V; D < T; D++)
          if (z = r[D], !!o.isListCell(z) && (N = z.lastElementChild, N && o.isListCell(z.nextElementSibling) && r.indexOf(z.nextElementSibling) > -1 && (O = N.lastElementChild, r.indexOf(O) > -1))) {
            let W = null;
            for (; W = O.lastElementChild; )
              if (o.isList(W))
                if (r.indexOf(W.lastElementChild) > -1)
                  O = W.lastElementChild;
                else
                  continue e;
            $ = N.firstElementChild, P = r.indexOf($), V = r.indexOf(O), r.splice(P, V - P + 1), T = r.length;
            continue;
          }
      let f = r[r.length - 1], p, m, v;
      o.isRangeFormatElement(f) || o.isFormatElement(f) ? p = f : p = o.getRangeFormatElement(f, null) || o.getFormatElement(f, null), o.isCell(p) ? (m = null, v = p) : (m = p.nextSibling, v = p.parentNode);
      let h = o.getElementDepth(p), y = null;
      const C = [], _ = function(D, T, z) {
        let N = null;
        if (D !== T && !o.isTable(T)) {
          if (T && o.getElementDepth(D) === o.getElementDepth(T)) return z;
          N = o.removeItemAllParents(T, null, D);
        }
        return N ? N.ec : z;
      };
      for (let D = 0, T = r.length, z, N, $, O, P, V, W; D < T; D++)
        if (z = r[D], N = z.parentNode, !(!N || s.contains(N)))
          if ($ = o.getElementDepth(z), o.isList(N)) {
            if (y === null && (V ? (y = V, W = !0, V = null) : y = N.cloneNode(!1)), C.push(z), P = r[D + 1], D === T - 1 || P && P.parentNode !== N) {
              P && z.contains(P.parentNode) && (V = P.parentNode.cloneNode(!1));
              let R = N.parentNode, M;
              for (; o.isList(R); )
                M = o.createElement(R.nodeName), M.appendChild(y), y = M, R = R.parentNode;
              const B = this.detachRangeFormatElement(N, C, null, !0, !0);
              h >= $ ? (h = $, v = B.cc, m = _(v, N, B.ec), m && (v = m.parentNode)) : v === B.cc && (m = B.ec), v !== B.cc && (O = _(v, B.cc, O), O !== void 0 ? m = O : m = B.cc);
              for (let U = 0, k = B.removeArray.length; U < k; U++)
                y.appendChild(B.removeArray[U]);
              W || s.appendChild(y), V && B.removeArray[B.removeArray.length - 1].appendChild(V), y = null, W = !1;
            }
          } else
            h >= $ && (h = $, v = N, m = z.nextSibling), s.appendChild(z), v !== N && (O = _(v, N), O !== void 0 && (m = O));
      if (this.effectNode = null, o.mergeSameTags(s, null, !1), o.mergeNestedTags(s, (function(D) {
        return this.isList(D);
      }).bind(o)), m && o.getElementDepth(m) > 0 && (o.isList(m.parentNode) || o.isList(m.parentNode.parentNode))) {
        const D = o.getParentElement(m, (function(z) {
          return this.isRangeFormatElement(z) && !this.isList(z);
        }).bind(o)), T = o.splitElement(m, null, D ? o.getElementDepth(D) + 1 : 0);
        T.parentNode.insertBefore(s, T);
      } else
        v.insertBefore(s, m), _(s, m);
      const x = o.getEdgeChildNodes(s.firstElementChild, s.lastElementChild);
      r.length > 1 ? this.setRange(x.sc, 0, x.ec, x.ec.textContent.length) : this.setRange(x.ec, x.ec.textContent.length, x.ec, x.ec.textContent.length), this.history.push(!1);
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
    detachRangeFormatElement: function(s, r, f, p, m) {
      const v = this.getRange();
      let h = v.startOffset, y = v.endOffset, C = o.getListChildNodes(s, function(B) {
        return B.parentNode === s;
      }), _ = s.parentNode, x = null, D = null, T = s.cloneNode(!1);
      const z = [], N = o.isList(f);
      let $ = !1, O = !1, P = !1;
      function V(B, U, k, F) {
        if (o.onlyZeroWidthSpace(U) && (U.innerHTML = o.zeroWidthSpace, h = y = 1), U.nodeType === 3)
          return B.insertBefore(U, k), U;
        const G = (P ? U : F).childNodes;
        let q = U.cloneNode(!1), ie = null, J = null;
        for (; G[0]; )
          J = G[0], o._notTextNode(J) && !o.isBreak(J) && !o.isListCell(q) ? (q.childNodes.length > 0 && (ie || (ie = q), B.insertBefore(q, k), q = U.cloneNode(!1)), B.insertBefore(J, k), ie || (ie = J)) : q.appendChild(J);
        if (q.childNodes.length > 0) {
          if (o.isListCell(B) && o.isListCell(q) && o.isList(k))
            if (N) {
              for (ie = k; k; )
                q.appendChild(k), k = k.nextSibling;
              B.parentNode.insertBefore(q, B.nextElementSibling);
            } else {
              const Q = F.nextElementSibling, oe = o.detachNestedList(F, !1);
              if (s !== oe || Q !== F.nextElementSibling) {
                const pe = q.childNodes;
                for (; pe[0]; )
                  F.appendChild(pe[0]);
                s = oe, O = !0;
              }
            }
          else
            B.insertBefore(q, k);
          ie || (ie = q);
        }
        return ie;
      }
      for (let B = 0, U = C.length, k, F, G; B < U; B++)
        if (k = C[B], !(k.nodeType === 3 && o.isList(T)))
          if (P = !1, p && B === 0 && (!r || r.length === U || r[0] === k ? x = s.previousSibling : x = T), r && (F = r.indexOf(k)), r && F === -1)
            T || (T = s.cloneNode(!1)), T.appendChild(k);
          else {
            if (r && (G = r[F + 1]), T && T.children.length > 0 && (_.insertBefore(T, s), T = null), !N && o.isListCell(k))
              if (G && o.getElementDepth(k) !== o.getElementDepth(G) && (o.isListCell(_) || o.getArrayItem(k.children, o.isList, !1))) {
                const q = k.nextElementSibling, ie = o.detachNestedList(k, !1);
                (s !== ie || q !== k.nextElementSibling) && (s = ie, O = !0);
              } else {
                const q = k;
                k = o.createElement(p ? q.nodeName : o.isList(s.parentNode) || o.isListCell(s.parentNode) ? "LI" : o.isCell(s.parentNode) ? "DIV" : l.defaultTag);
                const ie = o.isListCell(k), J = q.childNodes;
                for (; J[0] && !(o.isList(J[0]) && !ie); )
                  k.appendChild(J[0]);
                o.copyFormatAttributes(k, q), P = !0;
              }
            else
              k = k.cloneNode(!1);
            if (!O && (p ? (z.push(k), o.removeItem(C[B])) : (f ? ($ || (_.insertBefore(f, s), $ = !0), k = V(f, k, null, C[B])) : k = V(_, k, s, C[B]), O || (r ? (D = k, x || (x = k)) : x || (x = D = k))), O)) {
              O = P = !1, C = o.getListChildNodes(s, function(q) {
                return q.parentNode === s;
              }), T = s.cloneNode(!1), _ = s.parentNode, B = -1, U = C.length;
              continue;
            }
          }
      const W = s.parentNode;
      let R = s.nextSibling;
      T && T.children.length > 0 && W.insertBefore(T, R), f ? x = f.previousSibling : x || (x = s.previousSibling), R = s.nextSibling !== T ? s.nextSibling : T ? T.nextSibling : null, s.children.length === 0 || s.textContent.length === 0 ? o.removeItem(s) : o.removeEmptyNode(s, null, !1);
      let M = null;
      if (p)
        M = {
          cc: W,
          sc: x,
          so: h,
          ec: R,
          eo: y,
          removeArray: z
        };
      else {
        x || (x = D), D || (D = x);
        const B = o.getEdgeChildNodes(x, D.parentNode ? x : D);
        M = {
          cc: (B.sc || B.ec).parentNode,
          sc: B.sc,
          so: h,
          ec: B.ec,
          eo: y,
          removeArray: null
        };
      }
      if (this.effectNode = null, m) return M;
      !p && M && (r ? this.setRange(M.sc, h, M.ec, y) : this.setRange(M.sc, 0, M.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(s, r) {
      let f = {}, p = !1, m = !1, v = null, h = null;
      const y = (function(C) {
        return !this.isComponent(C);
      }).bind(o);
      for (let C = 0, _ = s.length, x, D, T, z; C < _; C++) {
        if (T = C === _ - 1, D = o.getRangeFormatElement(s[C], y), z = o.isList(D), !x && z)
          x = D, f = { r: x, f: [o.getParentElement(s[C], "LI")] }, C === 0 && (p = !0);
        else if (x && z)
          if (x !== D) {
            const N = this.detachRangeFormatElement(f.f[0].parentNode, f.f, null, r, !0);
            D = s[C].parentNode, p && (v = N.sc, p = !1), T && (h = N.ec), z ? (x = D, f = { r: x, f: [o.getParentElement(s[C], "LI")] }, T && (m = !0)) : x = null;
          } else
            f.f.push(o.getParentElement(s[C], "LI")), T && (m = !0);
        if (T && o.isList(x)) {
          const N = this.detachRangeFormatElement(f.f[0].parentNode, f.f, null, r, !0);
          (m || _ === 1) && (h = N.ec), p && (v = N.sc || h);
        }
      }
      return {
        sc: v,
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
    nodeChange: function(s, r, f, p) {
      this._resetRangeToTextNode();
      let m = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, f = f && f.length > 0 ? f : !1;
      const v = !s, h = v && !f && !r;
      let y = m.startContainer, C = m.startOffset, _ = m.endContainer, x = m.endOffset;
      if (h && m.collapsed && o.isFormatElement(y.parentNode) || y === _ && y.nodeType === 1 && o.isNonEditable(y)) {
        const J = y.parentNode;
        if (!o.isListCell(J) || !o.getValues(J.style).some((function(Q) {
          return this._listKebab.indexOf(Q) > -1;
        }).bind(this))) return;
      }
      if (m.collapsed && !h && y.nodeType === 1 && !o.isBreak(y) && !o.isComponent(y)) {
        let J = null;
        const Q = y.childNodes[C];
        Q && (Q.nextSibling ? J = o.isBreak(Q) ? Q : Q.nextSibling : J = null);
        const oe = o.createTextNode(o.zeroWidthSpace);
        y.insertBefore(oe, J), this.setRange(oe, 1, oe, 1), m = this.getRange(), y = m.startContainer, C = m.startOffset, _ = m.endContainer, x = m.endOffset;
      }
      o.isFormatElement(y) && (y = y.childNodes[C] || y.firstChild, C = 0), o.isFormatElement(_) && (_ = _.childNodes[x] || _.lastChild, x = _.textContent.length), v && (s = o.createElement("DIV"));
      const D = c.RegExp, T = s.nodeName;
      if (!h && y === _ && !f && s) {
        let J = y, Q = 0;
        const oe = [], pe = s.style;
        for (let ue = 0, be = pe.length; ue < be; ue++)
          oe.push(pe[ue]);
        const ge = s.classList;
        for (let ue = 0, be = ge.length; ue < be; ue++)
          oe.push("." + ge[ue]);
        if (oe.length > 0) {
          for (; !o.isFormatElement(J) && !o.isWysiwygDiv(J); ) {
            for (let ue = 0; ue < oe.length; ue++)
              if (J.nodeType === 1) {
                const be = oe[ue], Ae = /^\./.test(be) ? new D("\\s*" + be.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, $e = v ? !!J.style[be] : !!J.style[be] && !!s.style[be] && J.style[be] === s.style[be], Ce = Ae === !1 ? !1 : v ? !!J.className.match(Ae) : !!J.className.match(Ae) && !!s.className.match(Ae);
                ($e || Ce) && Q++;
              }
            J = J.parentNode;
          }
          if (Q >= oe.length) return;
        }
      }
      let z = {}, N = {}, $, O = "", P = "", V = "";
      if (r) {
        for (let J = 0, Q = r.length, oe; J < Q; J++)
          oe = r[J], /^\./.test(oe) ? P += (P ? "|" : "\\s*(?:") + oe.replace(/^\./, "") : O += (O ? "|" : "(?:;|^|\\s)(?:") + oe;
        O && (O += ")\\s*:[^;]*\\s*(?:;|$)", O = new D(O, "ig")), P && (P += ")(?=\\s+|$)", P = new D(P, "ig"));
      }
      if (f) {
        V = "^(?:" + f[0];
        for (let J = 1; J < f.length; J++)
          V += "|" + f[J];
        V += ")$", V = new D(V, "i");
      }
      const W = c.Boolean, R = { v: !1 }, M = function(J) {
        const Q = J.cloneNode(!1);
        if (Q.nodeType === 3 || o.isBreak(Q)) return Q;
        if (h) return null;
        const oe = !V && v || V && V.test(Q.nodeName);
        if (oe && !p)
          return R.v = !0, null;
        const pe = Q.style.cssText;
        let ge = "";
        O && pe.length > 0 && (ge = pe.replace(O, "").trim(), ge !== pe && (R.v = !0));
        const ue = Q.className;
        let be = "";
        return P && ue.length > 0 && (be = ue.replace(P, "").trim(), be !== ue && (R.v = !0)), v && (P || !ue) && (O || !pe) && !ge && !be && oe ? (R.v = !0, null) : ge || be || Q.nodeName !== T || W(O) !== W(pe) || W(P) !== W(ue) ? (O && pe.length > 0 && (Q.style.cssText = ge), Q.style.cssText || Q.removeAttribute("style"), P && ue.length > 0 && (Q.className = be.trim()), Q.className.trim() || Q.removeAttribute("class"), !Q.style.cssText && !Q.className && (Q.nodeName === T || oe) ? (R.v = !0, null) : Q) : (R.v = !0, null);
      }, B = this.getSelectedElements(null);
      m = this.getRange(), y = m.startContainer, C = m.startOffset, _ = m.endContainer, x = m.endOffset, o.getFormatElement(y, null) || (y = o.getChildElement(B[0], function(J) {
        return J.nodeType === 3;
      }, !1), C = 0), o.getFormatElement(_, null) || (_ = o.getChildElement(B[B.length - 1], function(J) {
        return J.nodeType === 3;
      }, !1), x = _.textContent.length);
      const U = o.getFormatElement(y, null) === o.getFormatElement(_, null), k = B.length - (U ? 0 : 1);
      $ = s.cloneNode(!1);
      const F = h || v && function(J) {
        for (let Q = 0, oe = J.length; Q < oe; Q++)
          if (o._isMaintainedNode(J[Q]) || o._isSizeNode(J[Q])) return !0;
        return !1;
      }(f), G = v || o._isSizeNode($), q = this._util_getMaintainedNode.bind(o, F, G), ie = this._util_isMaintainedNode.bind(o, F, G);
      if (U) {
        this._resetCommonListCell(B[0], r) && (m = this.setRange(y, C, _, x));
        const J = this._nodeChange_oneLine(B[0], $, M, y, C, _, x, h, v, m.collapsed, R, q, ie);
        z.container = J.startContainer, z.offset = J.startOffset, N.container = J.endContainer, N.offset = J.endOffset, z.container === N.container && o.onlyZeroWidthSpace(z.container) && (z.offset = N.offset = 1), this._setCommonListStyle(J.ancestor, null);
      } else {
        let J = !1;
        k > 0 && this._resetCommonListCell(B[k], r) && (J = !0), this._resetCommonListCell(B[0], r) && (J = !0), J && this.setRange(y, C, _, x), k > 0 && ($ = s.cloneNode(!1), N = this._nodeChange_endLine(B[k], $, M, _, x, h, v, R, q, ie));
        for (let Q = k - 1, oe; Q > 0; Q--)
          this._resetCommonListCell(B[Q], r), $ = s.cloneNode(!1), oe = this._nodeChange_middleLine(B[Q], $, M, h, v, R, N.container), oe.endContainer && oe.ancestor.contains(oe.endContainer) && (N.ancestor = null, N.container = oe.endContainer), this._setCommonListStyle(oe.ancestor, null);
        $ = s.cloneNode(!1), z = this._nodeChange_startLine(B[0], $, M, y, C, h, v, R, q, ie, N.container), z.endContainer && (N.ancestor = null, N.container = z.endContainer), k <= 0 ? N = z : N.container || (N.ancestor = null, N.container = z.container, N.offset = z.container.textContent.length), this._setCommonListStyle(z.ancestor, null), this._setCommonListStyle(N.ancestor || o.getFormatElement(N.container), null);
      }
      this.controllersOff(), this.setRange(z.container, z.offset, N.container, N.offset), this.history.push(!1);
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
      }, !0), p = s.style, m = [], v = [], h = o.getValues(p);
      for (let D = 0, T = this._listKebab.length; D < T; D++)
        h.indexOf(this._listKebab[D]) > -1 && r.indexOf(this._listKebab[D]) > -1 && (m.push(this._listCamel[D]), v.push(this._listKebab[D]));
      if (!m.length) return;
      const y = o.createElement("SPAN");
      for (let D = 0, T = m.length; D < T; D++)
        y.style[m[D]] = p[v[D]], p.removeProperty(v[D]);
      let C = y.cloneNode(!1), _ = null, x = !1;
      for (let D = 0, T = f.length, z, N; D < T; D++)
        z = f[D], !l._textTagsMap[z.nodeName.toLowerCase()] && (N = o.getValues(z.style), N.length === 0 || m.some(function($) {
          return N.indexOf($) === -1;
        }) && N.some(function($) {
        }) ? (_ = z.nextSibling, C.appendChild(z)) : C.childNodes.length > 0 && (s.insertBefore(C, _), C = y.cloneNode(!1), _ = null, x = !0));
      return C.childNodes.length > 0 && (s.insertBefore(C, _), x = !0), p.length || s.removeAttribute("style"), x;
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
      const p = r.style, m = s.style, v = r.nodeName.toLowerCase();
      let h = !1;
      l._textTagsMap[v] === l._defaultCommand.bold.toLowerCase() && (m.fontWeight = "bold"), l._textTagsMap[v] === l._defaultCommand.italic.toLowerCase() && (m.fontStyle = "italic");
      const y = o.getValues(p);
      if (y.length > 0)
        for (let C = 0, _ = this._listCamel.length; C < _; C++)
          y.indexOf(this._listKebab[C]) > -1 && (m[this._listCamel[C]] = p[this._listCamel[C]], p.removeProperty(this._listKebab[C]), h = !0);
      if (this._setCommonListStyle(s, r), !!h && !p.length) {
        const C = r.childNodes, _ = r.parentNode, x = r.nextSibling;
        for (; C.length > 0; )
          _.insertBefore(C[0], x);
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
      const p = this._isMaintainedNode(f);
      return this.getParentElement(f, this._isMaintainedNode.bind(this)) ? p : p || (r ? !1 : this._isSizeNode(f));
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
    _nodeChange_oneLine: function(s, r, f, p, m, v, h, y, C, _, x, D, T) {
      let z = p.parentNode;
      for (; !z.nextSibling && !z.previousSibling && !o.isFormatElement(z.parentNode) && !o.isWysiwygDiv(z.parentNode) && z.nodeName !== r.nodeName; )
        z = z.parentNode;
      if (!C && z === v.parentNode && z.nodeName === r.nodeName && o.onlyZeroWidthSpace(p.textContent.slice(0, m)) && o.onlyZeroWidthSpace(v.textContent.slice(h))) {
        const Ce = z.childNodes;
        let Re = !0;
        for (let Le = 0, rt = Ce.length, Fe, je, He, _e; Le < rt; Le++) {
          if (Fe = Ce[Le], _e = !o.onlyZeroWidthSpace(Fe), Fe === p) {
            je = !0;
            continue;
          }
          if (Fe === v) {
            He = !0;
            continue;
          }
          if (!je && _e || je && He && _e) {
            Re = !1;
            break;
          }
        }
        if (Re)
          return o.copyTagAttributes(z, r), {
            ancestor: s,
            startContainer: p,
            startOffset: m,
            endContainer: v,
            endOffset: h
          };
      }
      x.v = !1;
      const N = s, $ = [r], O = s.cloneNode(!1), P = p === v;
      let V = p, W = m, R = v, M = h, B = !1, U = !1, k, F, G, q, ie;
      const J = c.RegExp;
      function Q(Ce) {
        const Re = new J("(?:;|^|\\s)(?:" + q + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let Le = "";
        return Re && Ce.style.cssText.length > 0 && (Le = Re.test(Ce.style.cssText)), !Le;
      }
      if (function Ce(Re, Le) {
        const rt = Re.childNodes;
        for (let Fe = 0, je = rt.length, He; Fe < je; Fe++) {
          let _e = rt[Fe];
          if (!_e) continue;
          let Bt = Le, ut;
          if (!B && _e === V) {
            let Pe = O;
            ie = D(_e);
            const ze = o.createTextNode(V.nodeType === 1 ? "" : V.substringData(0, W)), We = o.createTextNode(
              V.nodeType === 1 ? "" : V.substringData(
                W,
                P && M >= W ? M - W : V.data.length - W
              )
            );
            if (ie) {
              const At = D(Le);
              if (At && At.parentNode !== Pe) {
                let Je = At, Rt = null;
                for (; Je.parentNode !== Pe; ) {
                  for (Le = Rt = Je.parentNode.cloneNode(!1); Je.childNodes[0]; )
                    Rt.appendChild(Je.childNodes[0]);
                  Je.appendChild(Rt), Je = Je.parentNode;
                }
                Je.parentNode.appendChild(At);
              }
              ie = ie.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(ze) || Le.appendChild(ze);
            const Oe = D(Le);
            for (Oe && (ie = Oe), ie && (Pe = ie), F = _e, k = [], q = ""; F !== Pe && F !== N && F !== null; )
              He = T(F) ? null : f(F), He && F.nodeType === 1 && Q(F) && (k.push(He), q += F.style.cssText.substr(0, F.style.cssText.indexOf(":")) + "|"), F = F.parentNode;
            const Nt = k.pop() || We;
            for (G = F = Nt; k.length > 0; )
              F = k.pop(), G.appendChild(F), G = F;
            if (r.appendChild(Nt), Pe.appendChild(r), ie && !D(R) && (r = r.cloneNode(!1), O.appendChild(r), $.push(r)), V = We, W = 0, B = !0, F !== We && F.appendChild(V), !P) continue;
          }
          if (!U && _e === R) {
            ie = D(_e);
            const Pe = o.createTextNode(R.nodeType === 1 ? "" : R.substringData(M, R.length - M)), ze = o.createTextNode(P || R.nodeType === 1 ? "" : R.substringData(0, M));
            if (ie ? ie = ie.cloneNode(!1) : T(r.parentNode) && !ie && (r = r.cloneNode(!1), O.appendChild(r), $.push(r)), !o.onlyZeroWidthSpace(Pe)) {
              F = _e, q = "", k = [];
              const Oe = [];
              for (; F !== O && F !== N && F !== null; )
                F.nodeType === 1 && Q(F) && (T(F) ? Oe.push(F.cloneNode(!1)) : k.push(F.cloneNode(!1)), q += F.style.cssText.substr(0, F.style.cssText.indexOf(":")) + "|"), F = F.parentNode;
              for (k = k.concat(Oe), ut = G = F = k.pop() || Pe; k.length > 0; )
                F = k.pop(), G.appendChild(F), G = F;
              O.appendChild(ut), F.textContent = Pe.data;
            }
            if (ie && ut) {
              const Oe = D(ut);
              Oe && (ie = Oe);
            }
            for (F = _e, k = [], q = ""; F !== O && F !== N && F !== null; )
              He = T(F) ? null : f(F), He && F.nodeType === 1 && Q(F) && (k.push(He), q += F.style.cssText.substr(0, F.style.cssText.indexOf(":")) + "|"), F = F.parentNode;
            const We = k.pop() || ze;
            for (G = F = We; k.length > 0; )
              F = k.pop(), G.appendChild(F), G = F;
            ie ? (r = r.cloneNode(!1), r.appendChild(We), ie.insertBefore(r, ie.firstChild), O.appendChild(ie), $.push(r), ie = null) : r.appendChild(We), R = ze, M = ze.data.length, U = !0, !y && _ && (r = ze, ze.textContent = o.zeroWidthSpace), F !== ze && F.appendChild(R);
            continue;
          }
          if (B) {
            if (_e.nodeType === 1 && !o.isBreak(_e)) {
              o._isIgnoreNodeChange(_e) ? (O.appendChild(_e.cloneNode(!0)), _ || (r = r.cloneNode(!1), O.appendChild(r), $.push(r))) : Ce(_e, _e);
              continue;
            }
            F = _e, k = [], q = "";
            const Pe = [];
            for (; F.parentNode !== null && F !== N && F !== r; )
              He = U ? F.cloneNode(!1) : f(F), F.nodeType === 1 && !o.isBreak(_e) && He && Q(F) && (T(F) ? ie || Pe.push(He) : k.push(He), q += F.style.cssText.substr(0, F.style.cssText.indexOf(":")) + "|"), F = F.parentNode;
            k = k.concat(Pe);
            const ze = k.pop() || _e;
            for (G = F = ze; k.length > 0; )
              F = k.pop(), G.appendChild(F), G = F;
            if (T(r.parentNode) && !T(ze) && !o.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), O.appendChild(r), $.push(r)), !U && !ie && T(ze)) {
              r = r.cloneNode(!1);
              const We = ze.childNodes;
              for (let Oe = 0, Nt = We.length; Oe < Nt; Oe++)
                r.appendChild(We[Oe]);
              ze.appendChild(r), O.appendChild(ze), $.push(r), r.children.length > 0 ? Le = F : Le = r;
            } else ze === _e ? U ? Le = O : Le = r : U ? (O.appendChild(ze), Le = F) : (r.appendChild(ze), Le = F);
            if (ie && _e.nodeType === 3)
              if (D(_e)) {
                const We = o.getParentElement(Le, (function(Oe) {
                  return this._isMaintainedNode(Oe.parentNode) || Oe.parentNode === O;
                }).bind(o));
                ie.appendChild(We), r = We.cloneNode(!1), $.push(r), O.appendChild(r);
              } else
                ie = null;
          }
          ut = _e.cloneNode(!1), Le.appendChild(ut), _e.nodeType === 1 && !o.isBreak(_e) && (Bt = ut), Ce(_e, Bt);
        }
      }(s, O), C && !y && !x.v)
        return {
          ancestor: s,
          startContainer: p,
          startOffset: m,
          endContainer: v,
          endOffset: h
        };
      if (y = y && C, y)
        for (let Ce = 0; Ce < $.length; Ce++) {
          let Re = $[Ce], Le, rt, Fe;
          if (_)
            Le = o.createTextNode(o.zeroWidthSpace), O.replaceChild(Le, Re);
          else {
            const je = Re.childNodes;
            for (rt = je[0]; je[0]; )
              Fe = je[0], O.insertBefore(Fe, Re);
            o.removeItem(Re);
          }
          Ce === 0 && (_ ? V = R = Le : (V = rt, R = Fe));
        }
      else {
        if (C)
          for (let Ce = 0; Ce < $.length; Ce++)
            this._stripRemoveNode($[Ce]);
        _ && (V = R = r);
      }
      o.removeEmptyNode(O, r, !1), _ && (W = V.textContent.length, M = R.textContent.length);
      const oe = y || R.textContent.length === 0;
      !o.isBreak(R) && R.textContent.length === 0 && (o.removeItem(R), R = V), M = oe ? R.textContent.length : M;
      const pe = { s: 0, e: 0 }, ge = o.getNodePath(V, O, pe), ue = !R.parentNode;
      ue && (R = V);
      const be = { s: 0, e: 0 }, Ae = o.getNodePath(R, O, !ue && !oe ? be : null);
      W += pe.s, M = _ ? W : ue ? V.textContent.length : oe ? M + pe.s : M + be.s;
      const $e = o.mergeSameTags(O, [ge, Ae], !0);
      return s.parentNode.replaceChild(O, s), V = o.getNodeFromPath(ge, O), R = o.getNodeFromPath(Ae, O), {
        ancestor: O,
        startContainer: V,
        startOffset: W + $e[0],
        endContainer: R,
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
    _nodeChange_startLine: function(s, r, f, p, m, v, h, y, C, _, x) {
      let D = p.parentNode;
      for (; !D.nextSibling && !D.previousSibling && !o.isFormatElement(D.parentNode) && !o.isWysiwygDiv(D.parentNode) && D.nodeName !== r.nodeName; )
        D = D.parentNode;
      if (!h && D.nodeName === r.nodeName && !o.isFormatElement(D) && !D.nextSibling && o.onlyZeroWidthSpace(p.textContent.slice(0, m))) {
        let B = !0, U = p.previousSibling;
        for (; U; ) {
          if (!o.onlyZeroWidthSpace(U)) {
            B = !1;
            break;
          }
          U = U.previousSibling;
        }
        if (B)
          return o.copyTagAttributes(D, r), {
            ancestor: s,
            container: p,
            offset: m
          };
      }
      y.v = !1;
      const T = s, z = [r], N = s.cloneNode(!1);
      let $ = p, O = m, P = !1, V, W, R, M;
      if (function B(U, k) {
        const F = U.childNodes;
        for (let G = 0, q = F.length, ie, J; G < q; G++) {
          const Q = F[G];
          if (!Q) continue;
          let oe = k;
          if (P && !o.isBreak(Q)) {
            if (Q.nodeType === 1) {
              if (o._isIgnoreNodeChange(Q)) {
                if (r = r.cloneNode(!1), J = Q.cloneNode(!0), N.appendChild(J), N.appendChild(r), z.push(r), x && Q.contains(x)) {
                  const be = o.getNodePath(x, Q);
                  x = o.getNodeFromPath(be, J);
                }
              } else
                B(Q, Q);
              continue;
            }
            W = Q, V = [];
            const pe = [];
            for (; W.parentNode !== null && W !== T && W !== r; )
              ie = f(W), W.nodeType === 1 && ie && (_(W) ? M || pe.push(ie) : V.push(ie)), W = W.parentNode;
            V = V.concat(pe);
            const ge = V.length > 0, ue = V.pop() || Q;
            for (R = W = ue; V.length > 0; )
              W = V.pop(), R.appendChild(W), R = W;
            if (_(r.parentNode) && !_(ue) && (r = r.cloneNode(!1), N.appendChild(r), z.push(r)), !M && _(ue)) {
              r = r.cloneNode(!1);
              const be = ue.childNodes;
              for (let Ae = 0, $e = be.length; Ae < $e; Ae++)
                r.appendChild(be[Ae]);
              ue.appendChild(r), N.appendChild(ue), k = _(W) ? r : W, z.push(r);
            } else ge ? (r.appendChild(ue), k = W) : k = r;
            if (M && Q.nodeType === 3)
              if (C(Q)) {
                const be = o.getParentElement(k, (function(Ae) {
                  return this._isMaintainedNode(Ae.parentNode) || Ae.parentNode === N;
                }).bind(o));
                M.appendChild(be), r = be.cloneNode(!1), z.push(r), N.appendChild(r);
              } else
                M = null;
          }
          if (!P && Q === $) {
            let pe = N;
            M = C(Q);
            const ge = o.createTextNode($.nodeType === 1 ? "" : $.substringData(0, O)), ue = o.createTextNode($.nodeType === 1 ? "" : $.substringData(O, $.length - O));
            if (M) {
              const $e = C(k);
              if ($e && $e.parentNode !== pe) {
                let Ce = $e, Re = null;
                for (; Ce.parentNode !== pe; ) {
                  for (k = Re = Ce.parentNode.cloneNode(!1); Ce.childNodes[0]; )
                    Re.appendChild(Ce.childNodes[0]);
                  Ce.appendChild(Re), Ce = Ce.parentNode;
                }
                Ce.parentNode.appendChild($e);
              }
              M = M.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(ge) || k.appendChild(ge);
            const be = C(k);
            for (be && (M = be), M && (pe = M), W = k, V = []; W !== pe && W !== null; )
              ie = f(W), W.nodeType === 1 && ie && V.push(ie), W = W.parentNode;
            const Ae = V.pop() || k;
            for (R = W = Ae; V.length > 0; )
              W = V.pop(), R.appendChild(W), R = W;
            Ae !== k ? (r.appendChild(Ae), k = W) : k = r, o.isBreak(Q) && r.appendChild(Q.cloneNode(!1)), pe.appendChild(r), $ = ue, O = 0, P = !0, k.appendChild($);
            continue;
          }
          ie = P ? f(Q) : Q.cloneNode(!1), ie && (k.appendChild(ie), Q.nodeType === 1 && !o.isBreak(Q) && (oe = ie)), B(Q, oe);
        }
      }(s, N), h && !v && !y.v)
        return {
          ancestor: s,
          container: p,
          offset: m,
          endContainer: x
        };
      if (v = v && h, v)
        for (let B = 0; B < z.length; B++) {
          let U = z[B];
          const k = U.childNodes, F = k[0];
          for (; k[0]; )
            N.insertBefore(k[0], U);
          o.removeItem(U), B === 0 && ($ = F);
        }
      else if (h) {
        r = r.firstChild;
        for (let B = 0; B < z.length; B++)
          this._stripRemoveNode(z[B]);
      }
      if (!v && N.childNodes.length === 0)
        s.childNodes ? $ = s.childNodes[0] : ($ = o.createTextNode(o.zeroWidthSpace), s.appendChild($));
      else {
        o.removeEmptyNode(N, r, !1), o.onlyZeroWidthSpace(N.textContent) && ($ = N.firstChild, O = 0);
        const B = { s: 0, e: 0 }, U = o.getNodePath($, N, B);
        O += B.s;
        const k = o.mergeSameTags(N, [U], !0);
        s.parentNode.replaceChild(N, s), $ = o.getNodeFromPath(U, N), O += k[0];
      }
      return {
        ancestor: N,
        container: $,
        offset: O,
        endContainer: x
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
    _nodeChange_middleLine: function(s, r, f, p, m, v, h) {
      if (!m) {
        let x = null;
        h && s.contains(h) && (x = o.getNodePath(h, s));
        const D = s.cloneNode(!0), T = r.nodeName, z = r.style.cssText, N = r.className;
        let $ = D.childNodes, O = 0, P = $.length;
        for (let V; O < P && (V = $[O], V.nodeType !== 3); O++)
          if (V.nodeName === T)
            V.style.cssText += z, o.addClass(V, N);
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
            endContainer: x ? o.getNodeFromPath(x, s) : null
          };
      }
      v.v = !1;
      const y = s.cloneNode(!1), C = [r];
      let _ = !0;
      if (function x(D, T) {
        const z = D.childNodes;
        for (let N = 0, $ = z.length, O, P; N < $; N++) {
          let V = z[N];
          if (!V) continue;
          let W = T;
          if (!o.isBreak(V) && o._isIgnoreNodeChange(V)) {
            if (r.childNodes.length > 0 && (y.appendChild(r), r = r.cloneNode(!1)), P = V.cloneNode(!0), y.appendChild(P), y.appendChild(r), C.push(r), T = r, h && V.contains(h)) {
              const R = o.getNodePath(h, V);
              h = o.getNodeFromPath(R, P);
            }
            continue;
          } else
            O = f(V), O && (_ = !1, T.appendChild(O), V.nodeType === 1 && (W = O));
          o.isBreak(V) || x(V, W);
        }
      }(s, r), _ || m && !p && !v.v) return { ancestor: s, endContainer: h };
      if (y.appendChild(r), p && m)
        for (let x = 0; x < C.length; x++) {
          let D = C[x];
          const T = D.childNodes;
          for (; T[0]; )
            y.insertBefore(T[0], D);
          o.removeItem(D);
        }
      else if (m) {
        r = r.firstChild;
        for (let x = 0; x < C.length; x++)
          this._stripRemoveNode(C[x]);
      }
      return o.removeEmptyNode(y, r, !1), o.mergeSameTags(y, null, !0), s.parentNode.replaceChild(y, s), { ancestor: y, endContainer: h };
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
    _nodeChange_endLine: function(s, r, f, p, m, v, h, y, C, _) {
      let x = p.parentNode;
      for (; !x.nextSibling && !x.previousSibling && !o.isFormatElement(x.parentNode) && !o.isWysiwygDiv(x.parentNode) && x.nodeName !== r.nodeName; )
        x = x.parentNode;
      if (!h && x.nodeName === r.nodeName && !o.isFormatElement(x) && !x.previousSibling && o.onlyZeroWidthSpace(p.textContent.slice(m))) {
        let M = !0, B = p.nextSibling;
        for (; B; ) {
          if (!o.onlyZeroWidthSpace(B)) {
            M = !1;
            break;
          }
          B = B.nextSibling;
        }
        if (M)
          return o.copyTagAttributes(x, r), {
            ancestor: s,
            container: p,
            offset: m
          };
      }
      y.v = !1;
      const D = s, T = [r], z = s.cloneNode(!1);
      let N = p, $ = m, O = !1, P, V, W, R;
      if (function M(B, U) {
        const k = B.childNodes;
        for (let F = k.length - 1, G; 0 <= F; F--) {
          const q = k[F];
          if (!q) continue;
          let ie = U;
          if (O && !o.isBreak(q)) {
            if (q.nodeType === 1) {
              if (o._isIgnoreNodeChange(q)) {
                r = r.cloneNode(!1);
                const pe = q.cloneNode(!0);
                z.insertBefore(pe, U), z.insertBefore(r, pe), T.push(r);
              } else
                M(q, q);
              continue;
            }
            V = q, P = [];
            const J = [];
            for (; V.parentNode !== null && V !== D && V !== r; )
              G = f(V), G && V.nodeType === 1 && (_(V) ? R || J.push(G) : P.push(G)), V = V.parentNode;
            P = P.concat(J);
            const Q = P.length > 0, oe = P.pop() || q;
            for (W = V = oe; P.length > 0; )
              V = P.pop(), W.appendChild(V), W = V;
            if (_(r.parentNode) && !_(oe) && (r = r.cloneNode(!1), z.insertBefore(r, z.firstChild), T.push(r)), !R && _(oe)) {
              r = r.cloneNode(!1);
              const pe = oe.childNodes;
              for (let ge = 0, ue = pe.length; ge < ue; ge++)
                r.appendChild(pe[ge]);
              oe.appendChild(r), z.insertBefore(oe, z.firstChild), T.push(r), r.children.length > 0 ? U = V : U = r;
            } else Q ? (r.insertBefore(oe, r.firstChild), U = V) : U = r;
            if (R && q.nodeType === 3)
              if (C(q)) {
                const pe = o.getParentElement(U, (function(ge) {
                  return this._isMaintainedNode(ge.parentNode) || ge.parentNode === z;
                }).bind(o));
                R.appendChild(pe), r = pe.cloneNode(!1), T.push(r), z.insertBefore(r, z.firstChild);
              } else
                R = null;
          }
          if (!O && q === N) {
            R = C(q);
            const J = o.createTextNode(N.nodeType === 1 ? "" : N.substringData($, N.length - $)), Q = o.createTextNode(N.nodeType === 1 ? "" : N.substringData(0, $));
            if (R) {
              R = R.cloneNode(!1);
              const pe = C(U);
              if (pe && pe.parentNode !== z) {
                let ge = pe, ue = null;
                for (; ge.parentNode !== z; ) {
                  for (U = ue = ge.parentNode.cloneNode(!1); ge.childNodes[0]; )
                    ue.appendChild(ge.childNodes[0]);
                  ge.appendChild(ue), ge = ge.parentNode;
                }
                ge.parentNode.insertBefore(pe, ge.parentNode.firstChild);
              }
              R = R.cloneNode(!1);
            } else _(r.parentNode) && !R && (r = r.cloneNode(!1), z.appendChild(r), T.push(r));
            for (o.onlyZeroWidthSpace(J) || U.insertBefore(J, U.firstChild), V = U, P = []; V !== z && V !== null; )
              G = _(V) ? null : f(V), G && V.nodeType === 1 && P.push(G), V = V.parentNode;
            const oe = P.pop() || U;
            for (W = V = oe; P.length > 0; )
              V = P.pop(), W.appendChild(V), W = V;
            oe !== U ? (r.insertBefore(oe, r.firstChild), U = V) : U = r, o.isBreak(q) && r.appendChild(q.cloneNode(!1)), R ? (R.insertBefore(r, R.firstChild), z.insertBefore(R, z.firstChild), R = null) : z.insertBefore(r, z.firstChild), N = Q, $ = Q.data.length, O = !0, U.insertBefore(N, U.firstChild);
            continue;
          }
          G = O ? f(q) : q.cloneNode(!1), G && (U.insertBefore(G, U.firstChild), q.nodeType === 1 && !o.isBreak(q) && (ie = G)), M(q, ie);
        }
      }(s, z), h && !v && !y.v)
        return {
          ancestor: s,
          container: p,
          offset: m
        };
      if (v = v && h, v)
        for (let M = 0; M < T.length; M++) {
          let B = T[M];
          const U = B.childNodes;
          let k = null;
          for (; U[0]; )
            k = U[0], z.insertBefore(k, B);
          o.removeItem(B), M === T.length - 1 && (N = k, $ = k.textContent.length);
        }
      else if (h) {
        r = r.firstChild;
        for (let M = 0; M < T.length; M++)
          this._stripRemoveNode(T[M]);
      }
      if (!v && z.childNodes.length === 0)
        s.childNodes ? N = s.childNodes[0] : (N = o.createTextNode(o.zeroWidthSpace), s.appendChild(N));
      else {
        if (!h && r.textContent.length === 0)
          return o.removeEmptyNode(z, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        o.removeEmptyNode(z, r, !1), o.onlyZeroWidthSpace(z.textContent) ? (N = z.firstChild, $ = N.textContent.length) : o.onlyZeroWidthSpace(N) && (N = r, $ = 1);
        const M = { s: 0, e: 0 }, B = o.getNodePath(N, z, M);
        $ += M.s;
        const U = o.mergeSameTags(z, [B], !0);
        s.parentNode.replaceChild(z, s), N = o.getNodeFromPath(B, z), $ += U[0];
      }
      return {
        ancestor: z,
        container: N,
        offset: N.nodeType === 1 && $ === 1 ? N.childNodes.length : $
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
            const p = e.element.toolbar.querySelector("." + s);
            p && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = f, p.style.display = "block", g._showToolbarBalloon(), g._showToolbarInline()), o.addClass(f, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), g._showToolbarBalloon(), g._showToolbarInline());
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
            let p = o.getChildElement(f.firstChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !1) || f.firstChild, m = o.getChildElement(f.lastChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !0) || f.lastChild;
            if (!p || !m) return;
            if (o.isMedia(p)) {
              const C = this.getFileComponent(p), _ = o.createElement("BR"), x = o.createElement(l.defaultTag);
              x.appendChild(_), p = C ? C.component : p, p.parentNode.insertBefore(x, p), p = _;
            }
            if (o.isMedia(m)) {
              const C = o.createElement("BR"), _ = o.createElement(l.defaultTag);
              _.appendChild(C), f.appendChild(_), m = C;
            }
            g._showToolbarBalloon(this.setRange(p, 0, m, m.textContent.length));
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
            const v = this._variable.currentNodesMap, h = v.indexOf(r) > -1 ? null : o.createElement(r);
            let y = r;
            /^SUB$/i.test(r) && v.indexOf("SUP") > -1 ? y = "SUP" : /^SUP$/i.test(r) && v.indexOf("SUB") > -1 && (y = "SUB"), this.nodeChange(h, this._commandMapStyles[r] || null, [y], !1), this.focus();
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
      const r = this.getRange(), f = this.getSelectedElements(null), p = [], m = s !== "indent", v = l.rtl ? "marginRight" : "marginLeft";
      let h = r.startContainer, y = r.endContainer, C = r.startOffset, _ = r.endOffset;
      for (let x = 0, D = f.length, T, z; x < D; x++)
        T = f[x], !o.isListCell(T) || !this.plugins.list ? (z = /\d+/.test(T.style[v]) ? o.getNumber(T.style[v], 0) : 0, m ? z -= 25 : z += 25, o.setStyle(T, v, z <= 0 ? "" : z + "px")) : (m || T.previousElementSibling) && p.push(T);
      p.length > 0 && this.plugins.list.editInsideList.call(this, m, p), this.effectNode = null, this.setRange(h, C, y, _), this.history.push(!1);
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
      this.controllersOff(), o.setDisabledButtons(!s, this.codeViewDisabledButtons), s ? (o.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(l.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, g._hideToolbar())), this.nativeFocus(), o.removeClass(this._styleCommandMap.codeView, "active"), o.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), l.codeMirrorEditor && l.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, g._showToolbarInline())), this._variable._range = null, e.element.code.focus(), o.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && o.setDisabledButtons(!0, this.resizingDisabledButtons), typeof w.toggleCodeView == "function" && w.toggleCodeView(this._variable.isCodeView, this);
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
          for (let v = 0, h = m.length; v < h; v++)
            /^script$/i.test(m[v].tagName) && (r.head.removeChild(m[v]), v--, h--);
        }
        let f = r.head.innerHTML;
        (!r.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !r.head.querySelector("style")) && (f += o._setIframeCssTags(this.options)), this._wd.head.innerHTML = f, this._wd.body.innerHTML = this.convertContentsForEditor(r.body.innerHTML);
        const p = r.body.attributes;
        for (let m = 0, v = p.length; m < v; m++)
          p[m].name !== "contenteditable" && this._wd.body.setAttribute(p[m].name, p[m].value);
        if (!o.hasClass(this._wd.body, "sun-editor-editable")) {
          const m = l._editableClass.split(" ");
          for (let v = 0; v < m.length; v++)
            o.addClass(this._wd.body, l._editableClass[v]);
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
      const r = e.element.topArea, f = e.element.toolbar, p = e.element.editorArea, m = e.element.wysiwygFrame, v = e.element.code, h = this._variable;
      this.controllersOff();
      const y = f.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      h.isFullScreen ? (h.isFullScreen = !1, m.style.cssText = h._wysiwygOriginCssText, v.style.cssText = h._codeOriginCssText, f.style.cssText = "", p.style.cssText = h._editorAreaOriginCssText, r.style.cssText = h._originCssText, u.body.style.overflow = h._bodyOverflow, l.height === "auto" && !l.codeMirrorEditor && g._codeViewAutoHeight(), l.toolbarContainer && l.toolbarContainer.appendChild(f), l.stickyToolbar > -1 && o.removeClass(f, "se-toolbar-sticky"), h._fullScreenAttrs.sticky && !l.toolbarContainer && (h._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", o.addClass(f, "se-toolbar-sticky")), this._isInline = h._fullScreenAttrs.inline, this._isBalloon = h._fullScreenAttrs.balloon, this._isInline && g._showToolbarInline(), l.toolbarContainer && o.removeClass(f, "se-toolbar-balloon"), g.onScroll_window(), s && o.changeElement(s.firstElementChild, b.expansion), e.element.topArea.style.marginTop = "", o.removeClass(this._styleCommandMap.fullScreen, "active")) : (h.isFullScreen = !0, h._fullScreenAttrs.inline = this._isInline, h._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), l.toolbarContainer && e.element.relative.insertBefore(f, p), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (h._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", o.removeClass(f, "se-toolbar-sticky")), h._bodyOverflow = u.body.style.overflow, u.body.style.overflow = "hidden", h._editorAreaOriginCssText = p.style.cssText, h._wysiwygOriginCssText = m.style.cssText, h._codeOriginCssText = v.style.cssText, p.style.cssText = f.style.cssText = "", m.style.cssText = (m.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + l._editorStyles.editor, v.style.cssText = (v.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], f.style.width = m.style.height = v.style.height = "100%", f.style.position = "relative", f.style.display = "block", h.innerHeight_fullScreen = c.innerHeight - f.offsetHeight, p.style.height = h.innerHeight_fullScreen - l.fullScreenOffset + "px", s && o.changeElement(s.firstElementChild, b.reduction), l.iframe && l.height === "auto" && (p.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = l.fullScreenOffset + "px", o.addClass(this._styleCommandMap.fullScreen, "active")), y && w.toolbar.hide(), typeof w.toggleFullScreen == "function" && w.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const s = o.createElement("IFRAME");
      s.style.display = "none", u.body.appendChild(s);
      const r = l.printTemplate ? l.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), f = o.getIframeDocument(s), p = this._wd;
      if (l.iframe) {
        const m = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? o.getAttributesToString(p.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        f.write(
          "<!DOCTYPE html><html><head>" + p.head.innerHTML + "</head><body " + m + ">" + r + "</body></html>"
        );
      } else {
        const m = u.head.getElementsByTagName("link"), v = u.head.getElementsByTagName("style");
        let h = "";
        for (let y = 0, C = m.length; y < C; y++)
          h += m[y].outerHTML;
        for (let y = 0, C = v.length; y < C; y++)
          h += v[y].outerHTML;
        f.write(
          "<!DOCTYPE html><html><head>" + h + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '">' + r + "</body></html>"
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
        const p = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? o.getAttributesToString(f.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + f.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + p + ">" + s + "</body></html>"
        );
      } else {
        const p = u.head.getElementsByTagName("link"), m = u.head.getElementsByTagName("style");
        let v = "";
        for (let h = 0, y = p.length; h < y; h++)
          v += p[h].outerHTML;
        for (let h = 0, y = m.length; h < y; h++)
          v += m[h].outerHTML;
        r.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + n.toolbar.preview + "</title>" + v + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + s + "</body></html>"
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
      const p = e.element;
      r ? (o.addClass(p.topArea, "se-rtl"), o.addClass(p.wysiwygFrame, "se-rtl")) : (o.removeClass(p.topArea, "se-rtl"), o.removeClass(p.wysiwygFrame, "se-rtl"));
      const m = o.getListChildren(p.wysiwyg, function(h) {
        return o.isFormatElement(h) && (h.style.marginRight || h.style.marginLeft || h.style.textAlign);
      });
      for (let h = 0, y = m.length, C, _, x; h < y; h++)
        C = m[h], x = C.style.marginRight, _ = C.style.marginLeft, (x || _) && (C.style.marginRight = _, C.style.marginLeft = x), x = C.style.textAlign, x === "left" ? C.style.textAlign = "right" : x === "right" && (C.style.textAlign = "left");
      const v = e.tool;
      v.dir && (o.changeTxt(v.dir.querySelector(".se-tooltip-text"), n.toolbar[l.rtl ? "dir_ltr" : "dir_rtl"]), o.changeElement(v.dir.firstElementChild, b[l.rtl ? "dir_ltr" : "dir_rtl"])), v.dir_ltr && (r ? o.removeClass(v.dir_ltr, "active") : o.addClass(v.dir_ltr, "active")), v.dir_rtl && (r ? o.addClass(v.dir_rtl, "active") : o.removeClass(v.dir_rtl, "active"));
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
      const p = o.getListChildren(f, function(m) {
        return m.hasAttribute("contenteditable");
      });
      for (let m = 0, v = p.length; m < v; m++)
        p[m].removeAttribute("contenteditable");
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
        const p = o.getListChildNodes(s, function(m) {
          return o.isSpanWithoutAttr(m) && !o.getParentElement(m, o.isNotCheckingNode);
        }) || [];
        for (let m = p.length - 1; m >= 0; m--)
          p[m].outerHTML = p[m].innerHTML;
        return !r || o.isFormatElement(s) || o.isRangeFormatElement(s) || o.isComponent(s) || o.isFigures(s) || o.isAnchor(s) && o.isMedia(s.firstElementChild) ? o.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML : "<" + f + ">" + (o.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML) + "</" + f + ">";
      }
      if (s.nodeType === 3) {
        if (!r) return o._HTMLConvertor(s.textContent);
        const p = s.textContent.split(/\n/g);
        let m = "";
        for (let v = 0, h = p.length, y; v < h; v++)
          y = p[v].trim(), y.length > 0 && (m += "<" + f + ">" + o._HTMLConvertor(y) + "</" + f + ">");
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
      return s.replace(this._disallowedTextTagsRegExp, function(f, p, m, v) {
        return p + (typeof r[m] == "string" ? r[m] : m) + (v ? " " + v : "");
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
      const f = this._w.Math, p = r.match(/(\d+(?:\.\d+)?)(.+)/), m = p ? p[1] * 1 : o.fontValueMap[r], v = p ? p[2] : "rem";
      let h = m;
      switch (/em/.test(v) ? h = f.round(m / 0.0625) : v === "pt" ? h = f.round(m * 1.333) : v === "%" && (h = m / 100), s) {
        case "em":
        case "rem":
        case "%":
          return (h * 0.0625).toFixed(2) + s;
        case "pt":
          return f.floor(h / 1.333) + s;
        default:
          return h + s;
      }
    },
    _cleanStyle: function(s, r, f) {
      let p = (s.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(f) && !p && (s.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const m = (s.match(/\ssize="([^"]+)"/i) || [])[1], v = (s.match(/\sface="([^"]+)"/i) || [])[1], h = (s.match(/\scolor="([^"]+)"/i) || [])[1];
        (m || v || h) && (p = 'style="' + (m ? "font-size:" + this.util.getNumber(m / 3.333, 1) + "rem;" : "") + (v ? "font-family:" + v + ";" : "") + (h ? "color:" + h + ";" : "") + '"');
      }
      if (p) {
        r || (r = []);
        const m = p.replace(/&quot;/g, "").match(this._cleanStyleRegExp[f]);
        if (m) {
          const v = [];
          for (let h = 0, y = m.length, C; h < y; h++)
            if (C = m[h].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), C && !/inherit|initial|revert|unset/i.test(C[3])) {
              const _ = o.kebabToCamelCase(C[1].trim()), x = this.wwComputedStyle[_] ? this.wwComputedStyle[_].replace(/"/g, "") : "", D = C[3].trim();
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
              x !== D && v.push(C[0]);
            }
          v.length > 0 && r.push('style="' + v.join(";") + '"');
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
      let p = null;
      const m = f.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), v = this._attributesTagsBlacklist[m];
      r = r.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), v ? r = r.replace(v, "") : r = r.replace(this._attributesBlacklistRegExp, "");
      const h = this._attributesTagsWhitelist[m];
      if (h ? p = r.match(h) : p = r.match(s ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), s || m === "span" || m === "li" || this._cleanStyleRegExp[m])
        if (m === "a") {
          const y = r.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          y && (p || (p = []), p.push(y[0]));
        } else (!p || !/style=/i.test(p.toString())) && ((m === "span" || m === "li") && (p = this._cleanStyle(r, p, "span")), this._cleanStyleRegExp[m] ? p = this._cleanStyle(r, p, m) : /^(P|DIV|H[1-6]|PRE)$/i.test(m) && (p = this._cleanStyle(r, p, "format")));
      else {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        y && !p ? p = [y[0]] : y && !p.some(function(C) {
          return /^style/.test(C.trim());
        }) && p.push(y[0]);
      }
      if (o.isFigures(m)) {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        p || (p = []), y && p.push(y[0]);
      }
      if (p)
        for (let y = 0, C = p.length, _; y < C; y++)
          _ = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(p[y].trim()) ? "" : p[y], f += (/^\s/.test(_) ? "" : " ") + _;
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
      const p = s.childNodes;
      for (let m = 0, v = p.length, h; m < v; m++)
        h = p[m], h.nodeType === 8 ? r += "<!-- " + h.textContent + " -->" : !o.isFormatElement(h) && !o.isRangeFormatElement(h) && !o.isComponent(h) && !/meta/i.test(h.nodeName) ? (f || (f = o.createElement(l.defaultTag)), f.appendChild(h), m--, v--) : (f && (r += f.outerHTML, f = null), r += h.outerHTML);
      return f && (r += f.outerHTML), u.createRange().createContextualFragment(r);
    },
    _convertListCell: function(s) {
      let r = "";
      for (let f = 0, p = s.length, m; f < p; f++)
        m = s[f], m.nodeType === 1 ? o.isList(m) ? r += m.innerHTML : o.isListCell(m) ? r += m.outerHTML : o.isFormatElement(m) ? r += "<li>" + (m.innerHTML.trim() || "<br>") + "</li>" : o.isRangeFormatElement(m) && !o.isTable(m) ? r += this._convertListCell(m) : r += "<li>" + m.outerHTML + "</li>" : r += "<li>" + (m.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(s) {
      let r = !1;
      for (let f = 0, p = s.length, m; f < p; f++)
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
      const p = u.createRange().createContextualFragment(s);
      try {
        o._consistencyCheckOfHTML(p, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, l.strictHTMLValidation);
      } catch (y) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + y);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const y = p.querySelectorAll(this.managedTagsInfo.query);
        for (let C = 0, _ = y.length, x, D; C < _; C++) {
          D = [].slice.call(y[C].classList);
          for (let T = 0, z = D.length; T < z; T++)
            if (x = this.managedTagsInfo.map[D[T]], x) {
              x(y[C]);
              break;
            }
        }
      }
      let m = p.childNodes, v = "";
      const h = this._isFormatData(m);
      h && (m = this._editFormat(p).childNodes);
      for (let y = 0, C = m.length, _; y < C; y++) {
        if (_ = m[y], this.__allowedScriptRegExp.test(_.nodeName)) {
          v += _.outerHTML;
          continue;
        }
        v += this._makeLine(_, h);
      }
      return v = o.htmlRemoveWhiteSpace(v), v ? (r && (v = v.replace(typeof r == "string" ? o.createTagsWhitelist(r) : r, "")), f && (v = v.replace(typeof f == "string" ? o.createTagsBlacklist(f) : f, ""))) : v = s, this._tagConvertor(v);
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
      } catch (v) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + v);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const v = r.querySelectorAll(this.managedTagsInfo.query);
        for (let h = 0, y = v.length, C, _; h < y; h++) {
          _ = [].slice.call(v[h].classList);
          for (let x = 0, D = _.length; x < D; x++)
            if (C = this.managedTagsInfo.map[_[x]], C) {
              C(v[h]);
              break;
            }
        }
      }
      const f = r.childNodes;
      let p = "", m = null;
      for (let v = 0, h; v < f.length; v++) {
        if (h = f[v], this.__allowedScriptRegExp.test(h.nodeName)) {
          p += h.outerHTML;
          continue;
        }
        if (!o.isFormatElement(h) && !o.isRangeFormatElement(h) && !o.isComponent(h) && !o.isFigures(h) && h.nodeType !== 8 && !/__se__tag/.test(h.className)) {
          if (m || (m = o.createElement(l.defaultTag)), m.appendChild(h), v--, f[v + 1] && !o.isFormatElement(f[v + 1]))
            continue;
          h = m, m = null;
        }
        m && (p += this._makeLine(m, !0), m = null), p += this._makeLine(h, !0);
      }
      return m && (p += this._makeLine(m, !0)), p.length === 0 ? "<" + l.defaultTag + "><br></" + l.defaultTag + ">" : (p = o.htmlRemoveWhiteSpace(p), this._tagConvertor(p));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(s, r) {
      let f = "";
      const p = c.RegExp, m = new p("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), v = typeof s == "string" ? u.createRange().createContextualFragment(s) : s, h = (function(_) {
        return this.isFormatElement(_) || this.isComponent(_);
      }).bind(o), y = r ? "" : `
`;
      let C = r ? 0 : this._variable.codeIndent * 1;
      return C = C > 0 ? new c.Array(C + 1).join(" ") : "", function _(x, D) {
        const T = x.childNodes, z = m.test(x.nodeName), N = z ? D : "";
        for (let $ = 0, O = T.length, P, V, W, R, M, B; $ < O; $++) {
          if (P = T[$], R = m.test(P.nodeName), V = R ? y : "", W = h(P) && !z && !/^(TH|TD)$/i.test(x.nodeName) ? y : "", P.nodeType === 8) {
            f += `
<!-- ` + P.textContent.trim() + " -->" + V;
            continue;
          }
          if (P.nodeType === 3) {
            o.isList(P.parentElement) || (f += o._HTMLConvertor(/^\n+$/.test(P.data) ? "" : P.data));
            continue;
          }
          if (P.childNodes.length === 0) {
            f += (/^HR$/i.test(P.nodeName) ? y : "") + (/^PRE$/i.test(P.parentElement.nodeName) && /^BR$/i.test(P.nodeName) ? "" : N) + P.outerHTML + V;
            continue;
          }
          P.outerHTML ? (M = P.nodeName.toLowerCase(), B = N || R ? D : "", f += (W || (z ? "" : V)) + B + P.outerHTML.match(p("<" + M + "[^>]*>", "i"))[0] + V, _(P, D + C), f += (/\n$/.test(f) ? B : "") + "</" + M + ">" + (W || V || z || /^(TH|TD)$/i.test(P.nodeName) ? y : "")) : f += new c.XMLSerializer().serializeToString(P);
        }
      }(v, ""), f.trim() + y;
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
      let p = 0;
      if (s && (p = this.getCharLength(s, f)), this._setCharCount(), r > 0) {
        let m = !1;
        const v = w.getCharCount(f);
        if (v > r) {
          if (m = !0, p > 0) {
            this._editorRange();
            const h = this.getRange(), y = h.endOffset - 1, C = this.getSelectionNode().textContent, _ = h.endOffset - (v - r);
            this.getSelectionNode().textContent = C.slice(0, _ < 0 ? 0 : _) + C.slice(h.endOffset, C.length), this.setRange(h.endContainer, y, h.endContainer, y);
          }
        } else v + p > r && (m = !0);
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
      if (l.maxCharCount) {
        const f = r || l.charCounterType, p = this.getCharLength(typeof s == "string" ? s : this._charTypeHTML && s.nodeType === 1 ? s.outerHTML : s.textContent, f);
        if (p > 0 && p + w.getCharCount(f) > l.maxCharCount)
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
      const s = g._responsiveButtonSize;
      if (s) {
        let r = 0;
        (d._isBalloon || d._isInline) && l.toolbarWidth === "auto" ? r = e.element.topArea.offsetWidth : r = e.element.toolbar.offsetWidth;
        let f = "default";
        for (let p = 1, m = s.length; p < m; p++)
          if (r < s[p]) {
            f = s[p] + "";
            break;
          }
        g._responsiveCurrentSize !== f && (g._responsiveCurrentSize = f, w.setToolbarButtons(g._responsiveButtons[f]));
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
      for (let p in r)
        s.indexOf(p) > -1 || !o.hasOwn(r, p) || (f.indexOf(p) > -1 ? i[p].active.call(this, null) : r.OUTDENT && /^OUTDENT$/i.test(p) ? o.isImportantDisabled(r.OUTDENT) || r.OUTDENT.setAttribute("disabled", !0) : r.INDENT && /^INDENT$/i.test(p) ? o.isImportantDisabled(r.INDENT) || r.INDENT.removeAttribute("disabled") : o.removeClass(r[p], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(s, r) {
      const f = c.RegExp;
      this._ww = l.iframe ? e.element.wysiwygFrame.contentWindow : c, this._wd = u, this._charTypeHTML = l.charCounterType === "byte-html", this.wwComputedStyle = c.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = o.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + o.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(R) {
        return this.test(R) ? R : "";
      }).bind(l.allowedClassNames);
      const p = l.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new f("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new f("<(" + p + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + p + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new f("^(" + p + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new f("^" + (l.__allowedScriptTag ? "script" : "") + "$", "i"), !l.iframe && typeof c.ShadowRoot == "function") {
        let R = e.element.wysiwygFrame;
        for (; R; ) {
          if (R.shadowRoot) {
            this._shadowRoot = R.shadowRoot;
            break;
          } else if (R instanceof c.ShadowRoot) {
            this._shadowRoot = R;
            break;
          }
          R = R.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const m = c.Object.keys(l._textTagsMap), v = l.addTagsWhitelist ? l.addTagsWhitelist.split("|").filter(function(R) {
        return /b|i|ins|s|strike/i.test(R);
      }) : [];
      for (let R = 0; R < v.length; R++)
        m.splice(m.indexOf(v[R].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = m.length === 0 ? null : new f("(<\\/?)(" + m.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const h = function(R, M) {
        return R ? R === "*" ? "[a-z-]+" : M ? R + "|" + M : R : "^";
      }, _ = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", x = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = l._editorTagsWhitelist.indexOf("//") > -1 || l._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new f("^(" + h(l._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new f("^(" + (l.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = o.createTagsWhitelist(h(l._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = o.createTagsBlacklist(l.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = o.createTagsWhitelist(h(l.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = o.createTagsBlacklist(l.pasteTagsBlacklist);
      const D = '\\s*=\\s*(")[^"]*\\1', T = l.attributesWhitelist;
      let z = {}, N = "";
      if (T)
        for (let R in T)
          !o.hasOwn(T, R) || /^on[a-z]+$/i.test(T[R]) || (R === "all" ? N = h(T[R], _) : z[R] = new f("\\s(?:" + h(T[R], "") + ")" + D, "ig"));
      this._attributesWhitelistRegExp = new f("\\s(?:" + (N || _ + "|" + x) + ")" + D, "ig"), this._attributesWhitelistRegExp_all_data = new f("\\s(?:" + ((N || _) + "|data-[a-z0-9\\-]+") + ")" + D, "ig"), this._attributesTagsWhitelist = z;
      const $ = l.attributesBlacklist;
      if (z = {}, N = "", $)
        for (let R in $)
          o.hasOwn($, R) && (R === "all" ? N = h($[R], "") : z[R] = new f("\\s(?:" + h($[R], "") + ")" + D, "ig"));
      this._attributesBlacklistRegExp = new f("\\s(?:" + (N || "^") + ")" + D, "ig"), this._attributesTagsBlacklist = z, this._isInline = /inline/i.test(l.mode), this._isBalloon = /balloon|balloon-always/i.test(l.mode), this._isBalloonAlways = /balloon-always/i.test(l.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const O = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let P = [], V, W;
      for (let R in i)
        if (o.hasOwn(i, R)) {
          if (V = i[R], W = t[R], (V.active || V.action) && W && this.callPlugin(R, null, W), typeof V.checkFileInfo == "function" && typeof V.resetFileInfo == "function" && (this.callPlugin(R, null, W), this._fileInfoPluginsCheck.push(V.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(V.resetFileInfo.bind(this))), c.Array.isArray(V.fileTags)) {
            const M = V.fileTags;
            this.callPlugin(R, null, W), this._fileManager.tags = this._fileManager.tags.concat(M), P.push(R);
            for (let B = 0, U = M.length; B < U; B++)
              this._fileManager.pluginMap[M[B].toLowerCase()] = R;
          }
          if (V.managedTags) {
            const M = V.managedTags();
            O.push("." + M.className), this.managedTagsInfo.map[M.className] = M.method.bind(this);
          }
        }
      this.managedTagsInfo.query = O.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new f("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new f("^(" + (P.length === 0 ? "^" : P.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = xr(this, this._onChange_historyStack.bind(this)), this.addModule([cn]), l.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, l._editorStyles.editor && (e.element.wysiwyg.style.cssText = l._editorStyles.editor), l.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(s, r);
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
      this.hasFocus && g._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), w.onChange && w.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && g._showToolbarBalloon();
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
      const r = this.getRange(), f = r.commonAncestorContainer, p = r.startContainer, m = o.getRangeFormatElement(f, null);
      let v, h, y;
      const C = o.getParentElement(f, o.isComponent);
      if (!(C && !o.isTable(C))) {
        if (f.nodeType === 1 && f.getAttribute("data-se-embed") === "true") {
          let _ = f.nextElementSibling;
          o.isFormatElement(_) || (_ = this.appendFormatTag(f, l.defaultTag)), this.setRange(_.firstChild, 0, _.firstChild, 0);
          return;
        }
        if (!((o.isRangeFormatElement(p) || o.isWysiwygDiv(p)) && (o.isComponent(p.children[r.startOffset]) || o.isComponent(p.children[r.startOffset - 1])))) {
          if (o.getParentElement(f, o.isNotCheckingNode)) return null;
          if (m) {
            y = o.createElement(s || l.defaultTag), y.innerHTML = m.innerHTML, y.childNodes.length === 0 && (y.innerHTML = o.zeroWidthSpace), m.innerHTML = y.outerHTML, y = m.firstChild, v = o.getEdgeChildNodes(y, null).sc, v || (v = o.createTextNode(o.zeroWidthSpace), y.insertBefore(v, y.firstChild)), h = v.textContent.length, this.setRange(v, h, v, h);
            return;
          }
          if (o.isRangeFormatElement(f) && f.childNodes.length <= 1) {
            let _ = null;
            f.childNodes.length === 1 && o.isBreak(f.firstChild) ? _ = f.firstChild : (_ = o.createTextNode(o.zeroWidthSpace), f.appendChild(_)), this.setRange(_, 1, _, 1);
            return;
          }
          try {
            if (f.nodeType === 3 && (y = o.createElement(s || l.defaultTag), f.parentNode.insertBefore(y, f), y.appendChild(f)), o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling), o.isBreak(v)) {
              const _ = o.createTextNode(o.zeroWidthSpace);
              v.parentNode.insertBefore(_, v), v = _;
            }
          } catch {
            this.execCommand("formatBlock", !1, s || l.defaultTag), this.removeRange(), this._editorRange(), this.effectNode = null;
            return;
          }
          if (y && (o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling), o.isBreak(v))) {
            const _ = o.createTextNode(o.zeroWidthSpace);
            v.parentNode.insertBefore(_, v), v = _;
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
      this.context = e = Ki(s.originElement, this._getConstructed(s), l), this._componentsInfoReset = !0, this._editorInit(!0, r);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(s, r) {
      this._init(s, r), g._addEvent(), this._setCharCount(), g._offStickyToolbar(), g.onResize_window(), e.element.toolbar.style.visibility = "";
      const f = l.frameAttrbutes;
      for (let p in f)
        e.element.wysiwyg.setAttribute(p, f[p]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), c.setTimeout(function() {
        typeof d._resourcesStateChange == "function" && (g._resizeObserver && g._resizeObserver.observe(e.element.wysiwygFrame), g._toolbarObserver && g._toolbarObserver.observe(e.element._toolbarShadow), d._resourcesStateChange(), typeof w.onload == "function" && w.onload(d, s));
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
  }, g = {
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
      const p = g._keyCodeShortcut[s];
      switch (p) {
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
      return f ? (d.commandHandler(d.commandMap[f], f), !0) : !!p;
    },
    _applyTagEffects: function() {
      if (o.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let s = d.getSelectionNode();
      if (s === d.effectNode) return;
      d.effectNode = s;
      const r = l.rtl ? "marginRight" : "marginLeft", f = d.commandMap, p = g._onButtonsCheck, m = [], v = [], h = d.activePlugins, y = h.length;
      let C = "";
      for (; s.firstChild; )
        s = s.firstChild;
      for (let _ = s; !o.isWysiwygDiv(_) && _; _ = _.parentNode)
        if (!(_.nodeType !== 1 || o.isBreak(_))) {
          if (C = _.nodeName.toUpperCase(), v.push(C), !d.isReadOnly)
            for (let x = 0, D; x < y; x++)
              D = h[x], m.indexOf(D) === -1 && i[D].active.call(d, _) && m.push(D);
          if (o.isFormatElement(_)) {
            m.indexOf("OUTDENT") === -1 && f.OUTDENT && !o.isImportantDisabled(f.OUTDENT) && (o.isListCell(_) || _.style[r] && o.getNumber(_.style[r], 0) > 0) && (m.push("OUTDENT"), f.OUTDENT.removeAttribute("disabled")), m.indexOf("INDENT") === -1 && f.INDENT && !o.isImportantDisabled(f.INDENT) && (m.push("INDENT"), o.isListCell(_) && !_.previousElementSibling ? f.INDENT.setAttribute("disabled", !0) : f.INDENT.removeAttribute("disabled"));
            continue;
          }
          p && p.test(C) && (m.push(C), o.addClass(f[C], "active"));
        }
      d._setKeyEffect(m), d._variable.currentNodes = v.reverse(), d._variable.currentNodesMap = m, l.showPathLabel && (e.element.navigation.textContent = d._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(s) {
      let r = s.target;
      if (d._bindControllersOff && s.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? d._antiBlur = !1 : s.preventDefault(), o.getParentElement(r, ".se-submenu"))
        s.stopPropagation(), d._notHideToolbar = !0;
      else {
        let f = r.getAttribute("data-command"), p = r.className;
        for (; !f && !/se-menu-list/.test(p) && !/sun-editor-common/.test(p); )
          r = r.parentNode, f = r.getAttribute("data-command"), p = r.className;
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
      let r = s.target, f = r.getAttribute("data-display"), p = r.getAttribute("data-command"), m = r.className;
      for (d.controllersOff(); r.parentNode && !p && !/se-menu-list/.test(m) && !/se-toolbar/.test(m); )
        r = r.parentNode, p = r.getAttribute("data-command"), f = r.getAttribute("data-display"), m = r.className;
      !p && !f || r.disabled || d.actionCall(p, f, r);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(s) {
      if (d.isReadOnly || o.isNonEditable(e.element.wysiwyg)) return;
      if (o._isExcludeSelectionElement(s.target)) {
        s.preventDefault();
        return;
      }
      if (g.removeGlobalEvent(g.__selectionSyncEvent), g.__selectionSyncEvent = g.addGlobalEvent("mouseup", function() {
        d && d._editorRange(), g.removeGlobalEvent(g.__selectionSyncEvent);
      }), typeof w.onMouseDown == "function" && w.onMouseDown(s, d) === !1) return;
      const r = o.getParentElement(s.target, o.isCell);
      if (r) {
        const f = d.plugins.table;
        f && r !== f._fixedCell && !f._shift && d.callPlugin("table", function() {
          f.onTableCellMultiSelect.call(d, r, !1);
        }, null);
      }
      d._isBalloon && g._hideToolbar();
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
      const p = o.getParentElement(r, "FIGCAPTION");
      if (p && o.isNonEditable(p) && (s.preventDefault(), p.focus(), d._isInline && !d._inlineToolbarAttr.isShow)) {
        g._showToolbarInline();
        const _ = function() {
          g._hideToolbar(), p.removeEventListener("blur", _);
        };
        p.addEventListener("blur", _);
      }
      if (d._editorRange(), s.detail === 3) {
        let _ = d.getRange();
        o.isFormatElement(_.endContainer) && _.endOffset === 0 && (_ = d.setRange(_.startContainer, _.startOffset, _.startContainer, _.startContainer.length), d._rangeInfo(_, d.getSelection()));
      }
      const m = d.getSelectionNode(), v = o.getFormatElement(m, null), h = o.getRangeFormatElement(m, null);
      let y = m;
      for (; y && y.firstChild; ) y = y.firstChild;
      const C = d.getFileComponent(y);
      if (C) {
        const _ = d.getRange();
        !h && _.startContainer === _.endContainer && d.selectComponent(C.target, C.pluginName);
      } else d.currentFileComponentInfo && d.controllersOff();
      if (!v && !o.isNonEditable(r) && !o.isList(h)) {
        const _ = d.getRange();
        if (o.getFormatElement(_.startContainer) === o.getFormatElement(_.endContainer))
          if (o.isList(h)) {
            s.preventDefault();
            const x = o.createElement("LI"), D = m.nextElementSibling;
            x.appendChild(m), h.insertBefore(x, D), d.focus();
          } else !o.isWysiwygDiv(m) && !o.isComponent(m) && (!o.isTable(m) || o.isCell(m)) && d._setDefaultFormat(o.isRangeFormatElement(h) ? "DIV" : l.defaultTag) !== null ? (s.preventDefault(), d.focus()) : g._applyTagEffects();
      } else
        g._applyTagEffects();
      d._isBalloon && c.setTimeout(g._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      g._balloonDelay && c.clearTimeout(g._balloonDelay), g._balloonDelay = c.setTimeout((function() {
        c.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon();
      }).bind(g), 350);
    },
    _toggleToolbarBalloon: function() {
      if (d) {
        d._editorRange();
        const s = d.getRange();
        d._bindControllersOff || !d._isBalloonAlways && s.collapsed ? g._hideToolbar() : g._showToolbarBalloon(s);
      }
    },
    _showToolbarBalloon: function(s) {
      if (!d._isBalloon) return;
      const r = s || d.getRange(), f = e.element.toolbar, p = e.element.topArea, m = d.getSelection();
      let v;
      if (d._isBalloonAlways && r.collapsed)
        v = !0;
      else if (m.focusNode === m.anchorNode)
        v = m.focusOffset < m.anchorOffset;
      else {
        const V = o.getListChildNodes(r.commonAncestorContainer, null);
        v = o.getArrayIndex(V, m.focusNode) < o.getArrayIndex(V, m.anchorNode);
      }
      let h = r.getClientRects();
      h = h[v ? 0 : h.length - 1];
      const y = d.getGlobalScrollOffset();
      let C = y.left, _ = y.top;
      const x = p.offsetWidth, D = g._getEditorOffsets(null), T = D.top, z = D.left;
      if (f.style.top = "-10000px", f.style.visibility = "hidden", f.style.display = "block", !h) {
        const V = d.getSelectionNode();
        if (o.isFormatElement(V)) {
          const W = o.createTextNode(o.zeroWidthSpace);
          d.insertNode(W, null, !1), d.setRange(W, 1, W, 1), d._editorRange(), h = d.getRange().getClientRects(), h = h[v ? 0 : h.length - 1];
        }
        if (!h) {
          const W = o.getOffset(V, e.element.wysiwygFrame);
          h = {
            left: W.left,
            top: W.top,
            right: W.left,
            bottom: W.top + V.offsetHeight,
            noText: !0
          }, C = 0, _ = 0;
        }
        v = !0;
      }
      const N = c.Math.round(e.element._arrow.offsetWidth / 2), $ = f.offsetWidth, O = f.offsetHeight, P = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (P && (h = {
        left: h.left + P.left,
        top: h.top + P.top,
        right: h.right + P.right - P.width,
        bottom: h.bottom + P.bottom - P.height
      }), g._setToolbarOffset(v, h, f, z, x, C, _, T, N), ($ !== f.offsetWidth || O !== f.offsetHeight) && g._setToolbarOffset(v, h, f, z, x, C, _, T, N), l.toolbarContainer) {
        const V = p.parentElement;
        let W = l.toolbarContainer, R = W.offsetLeft, M = W.offsetTop;
        for (; !W.parentElement.contains(V) || !/^(BODY|HTML)$/i.test(W.parentElement.nodeName); )
          W = W.offsetParent, R += W.offsetLeft, M += W.offsetTop;
        f.style.left = f.offsetLeft - R + p.offsetLeft + "px", f.style.top = f.offsetTop - M + p.offsetTop + "px";
      }
      f.style.visibility = "";
    },
    _setToolbarOffset: function(s, r, f, p, m, v, h, y, C) {
      const x = f.offsetWidth, D = r.noText && !s ? 0 : f.offsetHeight, T = (s ? r.left : r.right) - p - x / 2 + v, z = T + x - m;
      let N = (s ? r.top - D - C : r.bottom + C) - (r.noText ? 0 : y) + h, $ = T < 0 ? 1 : z < 0 ? T : T - z - 1 - 1, O = !1;
      const P = N + (s ? g._getEditorOffsets(null).top : f.offsetHeight - e.element.wysiwyg.offsetHeight);
      !s && P > 0 && g._getPageBottomSpace() < P ? (s = !0, O = !0) : s && u.documentElement.offsetTop > P && (s = !1, O = !0), O && (N = (s ? r.top - D - C : r.bottom + C) - (r.noText ? 0 : y) + h), f.style.left = c.Math.floor($) + "px", f.style.top = c.Math.floor(N) + "px", s ? (o.removeClass(e.element._arrow, "se-arrow-up"), o.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = D + "px") : (o.removeClass(e.element._arrow, "se-arrow-down"), o.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -C + "px");
      const V = c.Math.floor(x / 2 + (T - $));
      e.element._arrow.style.left = (V + C > f.offsetWidth ? f.offsetWidth - C : V < C ? C : V) + "px";
    },
    _showToolbarInline: function() {
      if (!d._isInline) return;
      const s = e.element.toolbar;
      l.toolbarContainer ? s.style.position = "relative" : s.style.position = "absolute", s.style.visibility = "hidden", s.style.display = "block", d._inlineToolbarAttr.width = s.style.width = l.toolbarWidth, d._inlineToolbarAttr.top = s.style.top = (l.toolbarContainer ? 0 : -1 - s.offsetHeight) + "px", typeof w.showInline == "function" && w.showInline(s, e, d), g.onScroll_window(), d._inlineToolbarAttr.isShow = !0, s.style.visibility = "";
    },
    _hideToolbar: function() {
      !d._notHideToolbar && !d._variable.isFullScreen && (e.element.toolbar.style.display = "none", d._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(s) {
      if (/AUDIO/.test(s.target.nodeName)) return !1;
      if (d.isReadOnly || d.isDisabled)
        return s.preventDefault(), s.stopPropagation(), d.history.go(d.history.getCurrentIndex()), !1;
      const r = d.getRange(), f = d.getSelectionNode(), p = o.getFormatElement(f, null);
      if (!p && r.collapsed && !o.isComponent(f) && !o.isList(f)) {
        const v = o.getRangeFormatElement(p, null);
        d._setDefaultFormat(o.isRangeFormatElement(v) ? "DIV" : l.defaultTag);
      }
      d._editorRange();
      const m = (s.data === null ? "" : s.data === void 0 ? " " : s.data) || "";
      if (!d._charCount(m))
        return s.preventDefault(), s.stopPropagation(), !1;
      typeof w.onInput == "function" && w.onInput(s, d) === !1 || d.history.push(!0);
    },
    _isUneditableNode: function(s, r) {
      const f = r ? s.startContainer : s.endContainer, p = r ? s.startOffset : s.endOffset, m = r ? "previousSibling" : "nextSibling", v = f.nodeType === 1;
      let h;
      return v ? (h = g._isUneditableNode_getSibling(f.childNodes[p], m, f), h && h.nodeType === 1 && h.getAttribute("contenteditable") === "false") : (h = g._isUneditableNode_getSibling(f, m, f), d.isEdgePoint(f, p, r ? "start" : "end") && h && h.nodeType === 1 && h.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(s, r, f) {
      if (!s) return null;
      let p = s[r];
      if (!p)
        if (p = o.getFormatElement(f), p = p ? p[r] : null, p && !o.isComponent(p)) p = r === "previousSibling" ? p.firstChild : p.lastChild;
        else return null;
      return p;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(s) {
      let r = d.getSelectionNode();
      if (o.isInputElement(r)) return;
      const f = s.keyCode, p = s.shiftKey, m = s.ctrlKey || s.metaKey || f === 91 || f === 92 || f === 224, v = s.altKey;
      if (g._IEisComposing = f === 229, !m && d.isReadOnly && !g._cursorMoveKeyCode.test(f))
        return s.preventDefault(), !1;
      if (d.submenuOff(), d._isBalloon && g._hideToolbar(), typeof w.onKeyDown == "function" && w.onKeyDown(s, d) === !1) return;
      if (m && g._shortcutCommand(f, p))
        return g._onShortcutKey = !0, s.preventDefault(), s.stopPropagation(), !1;
      g._onShortcutKey && (g._onShortcutKey = !1), f === 13 && o.isFormatElement(d.getRange().startContainer) && (d._resetRangeToTextNode(), r = d.getSelectionNode());
      const h = d.getRange(), y = !h.collapsed || h.startContainer !== h.endContainer, C = d._fileManager.pluginRegExp.test(d.currentControllerName) ? d.currentControllerName : "";
      let _ = o.getFormatElement(r, null) || r, x = o.getRangeFormatElement(_, null);
      if (!(/37|38|39|40/.test(s.keyCode) && g._onKeyDown_wysiwyg_arrowKey(s) === !1)) {
        switch (f) {
          case 8:
            if (!y && C) {
              s.preventDefault(), s.stopPropagation(), d.plugins[C].destroy.call(d);
              break;
            }
            if (y && g._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!o.isFormatElement(_) && !e.element.wysiwyg.firstElementChild && !o.isComponent(r) && d._setDefaultFormat(l.defaultTag) !== null)
              return s.preventDefault(), s.stopPropagation(), !1;
            if (!y && !_.previousElementSibling && h.startOffset === 0 && !r.previousSibling && !o.isListCell(_) && o.isFormatElement(_) && (!o.isFreeFormatElement(_) || o.isClosureFreeFormatElement(_))) {
              if (o.isClosureRangeFormatElement(_.parentNode))
                return s.preventDefault(), s.stopPropagation(), !1;
              if (o.isWysiwygDiv(_.parentNode) && _.childNodes.length <= 1 && (!_.firstChild || o.onlyZeroWidthSpace(_.textContent))) {
                if (s.preventDefault(), s.stopPropagation(), _.nodeName.toUpperCase() === l.defaultTag.toUpperCase()) {
                  _.innerHTML = "<br>";
                  const B = _.attributes;
                  for (; B[0]; )
                    _.removeAttribute(B[0].name);
                } else {
                  const B = o.createElement(l.defaultTag);
                  B.innerHTML = "<br>", _.parentElement.replaceChild(B, _);
                }
                return d.nativeFocus(), !1;
              }
            }
            const T = h.startContainer;
            if (_ && !_.previousElementSibling && h.startOffset === 0 && T.nodeType === 3 && !o.isFormatElement(T.parentNode)) {
              let B = T.parentNode.previousSibling;
              const U = T.parentNode.nextSibling;
              B || (U ? B = U : (B = o.createElement("BR"), _.appendChild(B)));
              let k = T;
              for (; _.contains(k) && !k.previousSibling; )
                k = k.parentNode;
              if (!_.contains(k)) {
                T.textContent = "", o.removeItemAllParents(T, null, _);
                break;
              }
            }
            if (g._isUneditableNode(h, !0)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            !y && d._isEdgeFormat(h.startContainer, h.startOffset, "start") && o.isFormatElement(_.previousElementSibling) && (d._formatAttrsTemp = _.previousElementSibling.attributes);
            const z = h.commonAncestorContainer;
            if (_ = o.getFormatElement(h.startContainer, null), x = o.getRangeFormatElement(_, null), x && _ && !o.isCell(x) && !/^FIGCAPTION$/i.test(x.nodeName)) {
              if (o.isListCell(_) && o.isList(x) && (o.isListCell(x.parentNode) || _.previousElementSibling) && (r === _ || r.nodeType === 3 && (!r.previousSibling || o.isList(r.previousSibling))) && (o.getFormatElement(h.startContainer, null) !== o.getFormatElement(h.endContainer, null) ? x.contains(h.startContainer) : h.startOffset === 0 && h.collapsed)) {
                if (h.startContainer !== h.endContainer)
                  s.preventDefault(), d.removeNode(), h.startContainer.nodeType === 3 && d.setRange(h.startContainer, h.startContainer.textContent.length, h.startContainer, h.startContainer.textContent.length), d.history.push(!0);
                else {
                  let B = _.previousElementSibling || x.parentNode;
                  if (o.isListCell(B)) {
                    s.preventDefault();
                    let U = B;
                    if (!B.contains(_) && o.isListCell(U) && o.isList(U.lastElementChild)) {
                      for (U = U.lastElementChild.lastElementChild; o.isListCell(U) && o.isList(U.lastElementChild); )
                        U = U.lastElementChild && U.lastElementChild.lastElementChild;
                      B = U;
                    }
                    let k = B === x.parentNode ? x.previousSibling : B.lastChild;
                    k || (k = o.createTextNode(o.zeroWidthSpace), x.parentNode.insertBefore(k, x.parentNode.firstChild));
                    const F = k.nodeType === 3 ? k.textContent.length : 1, G = _.childNodes;
                    let q = k, ie = G[0];
                    for (; ie = G[0]; )
                      B.insertBefore(ie, q.nextSibling), q = ie;
                    o.removeItem(_), x.children.length === 0 && o.removeItem(x), d.setRange(k, F, k, F), d.history.push(!0);
                  }
                }
                break;
              }
              if (!y && h.startOffset === 0) {
                let B = !0, U = z;
                for (; U && U !== x && !o.isWysiwygDiv(U); ) {
                  if (U.previousSibling && (U.previousSibling.nodeType === 1 || !o.onlyZeroWidthSpace(U.previousSibling.textContent.trim()))) {
                    B = !1;
                    break;
                  }
                  U = U.parentNode;
                }
                if (B && x.parentNode) {
                  s.preventDefault(), d.detachRangeFormatElement(x, o.isListCell(_) ? [_] : null, null, !1, !1), d.history.push(!0);
                  break;
                }
              }
            }
            if (!y && _ && (h.startOffset === 0 || r === _ && _.childNodes[h.startOffset])) {
              const B = r === _ ? _.childNodes[h.startOffset] : r, U = _.previousSibling, k = (z.nodeType === 3 || o.isBreak(z)) && !z.previousSibling && h.startOffset === 0;
              if (B && !B.previousSibling && (z && o.isComponent(z.previousSibling) || k && o.isComponent(U))) {
                const F = d.getFileComponent(U);
                F ? (s.preventDefault(), s.stopPropagation(), _.textContent.length === 0 && o.removeItem(_), d.selectComponent(F.target, F.pluginName) === !1 && d.blur()) : o.isComponent(U) && (s.preventDefault(), s.stopPropagation(), o.removeItem(U));
                break;
              }
              if (B && o.isNonEditable(B.previousSibling)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(B.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (C) {
              s.preventDefault(), s.stopPropagation(), d.plugins[C].destroy.call(d);
              break;
            }
            if (y && g._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!y && d._isEdgeFormat(h.endContainer, h.endOffset, "end") && !_.nextSibling) {
              s.preventDefault(), s.stopPropagation();
              return;
            }
            if (g._isUneditableNode(h, !1)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if ((o.isFormatElement(r) || r.nextSibling === null || o.onlyZeroWidthSpace(r.nextSibling) && r.nextSibling.nextSibling === null) && h.startOffset === r.textContent.length) {
              const B = _.nextElementSibling;
              if (!B) break;
              if (o.isComponent(B)) {
                if (s.preventDefault(), o.onlyZeroWidthSpace(_) && (o.removeItem(_), o.isTable(B))) {
                  let k = o.getChildElement(B, o.isCell, !1);
                  k = k.firstElementChild || k, d.setRange(k, 0, k, 0);
                  break;
                }
                const U = d.getFileComponent(B);
                U ? (s.stopPropagation(), d.selectComponent(U.target, U.pluginName) === !1 && d.blur()) : o.isComponent(B) && (s.stopPropagation(), o.removeItem(B));
                break;
              }
            }
            if (!y && (d.isEdgePoint(h.endContainer, h.endOffset) || r === _ && _.childNodes[h.startOffset])) {
              const B = r === _ && _.childNodes[h.startOffset] || r;
              if (B && o.isNonEditable(B.nextSibling)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(B.nextSibling);
                break;
              } else if (o.isComponent(B)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(B);
                break;
              }
            }
            if (!y && d._isEdgeFormat(h.endContainer, h.endOffset, "end") && o.isFormatElement(_.nextElementSibling) && (d._formatAttrsTemp = _.attributes), _ = o.getFormatElement(h.startContainer, null), x = o.getRangeFormatElement(_, null), o.isListCell(_) && o.isList(x) && (r === _ || r.nodeType === 3 && (!r.nextSibling || o.isList(r.nextSibling)) && (o.getFormatElement(h.startContainer, null) !== o.getFormatElement(h.endContainer, null) ? x.contains(h.endContainer) : h.endOffset === r.textContent.length && h.collapsed))) {
              h.startContainer !== h.endContainer && d.removeNode();
              let B = o.getArrayItem(_.children, o.isList, !1);
              if (B = B || _.nextElementSibling || x.parentNode.nextElementSibling, B && (o.isList(B) || o.getArrayItem(B.children, o.isList, !1))) {
                s.preventDefault();
                let U, k;
                if (o.isList(B)) {
                  const F = B.firstElementChild;
                  for (k = F.childNodes, U = k[0]; k[0]; )
                    _.insertBefore(k[0], B);
                  o.removeItem(F);
                } else {
                  for (U = B.firstChild, k = B.childNodes; k[0]; )
                    _.appendChild(k[0]);
                  o.removeItem(B);
                }
                d.setRange(U, 0, U, 0), d.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (C || l.tabDisable || (s.preventDefault(), m || v || o.isWysiwygDiv(r))) break;
            const N = !h.collapsed || d.isEdgePoint(h.startContainer, h.startOffset), $ = d.getSelectedElements(null);
            r = d.getSelectionNode();
            const O = [];
            let P = [], V = o.isListCell($[0]), W = o.isListCell($[$.length - 1]), R = { sc: h.startContainer, so: h.startOffset, ec: h.endContainer, eo: h.endOffset };
            for (let B = 0, U = $.length, k; B < U; B++)
              if (k = $[B], o.isListCell(k)) {
                if (!k.previousElementSibling && !p)
                  continue;
                O.push(k);
              } else
                P.push(k);
            if (O.length > 0 && N && d.plugins.list)
              R = d.plugins.list.editInsideList.call(d, p, O);
            else {
              const B = o.getParentElement(r, o.isCell);
              if (B && N) {
                const U = o.getParentElement(B, "table"), k = o.getListChildren(U, o.isCell);
                let F = p ? o.prevIdx(k, B) : o.nextIdx(k, B);
                F === k.length && !p && (F = 0), F === -1 && p && (F = k.length - 1);
                let G = k[F];
                if (!G) break;
                G = G.firstElementChild || G, d.setRange(G, 0, G, 0);
                break;
              }
              P = P.concat(O), V = W = null;
            }
            if (P.length > 0)
              if (p) {
                const B = P.length - 1;
                for (let F = 0, G; F <= B; F++) {
                  G = P[F].childNodes;
                  for (let q = 0, ie = G.length, J; q < ie && (J = G[q], !!J); q++)
                    if (!o.onlyZeroWidthSpace(J)) {
                      /^\s{1,4}$/.test(J.textContent) ? o.removeItem(J) : /^\s{1,4}/.test(J.textContent) && (J.textContent = J.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const U = o.getChildElement(P[0], "text", !1), k = o.getChildElement(P[B], "text", !0);
                !V && U && (R.sc = U, R.so = 0), !W && k && (R.ec = k, R.eo = k.textContent.length);
              } else {
                const B = o.createTextNode(new c.Array(d._variable.tabSize + 1).join(" "));
                if (P.length === 1) {
                  if (!d.insertNode(B, null, !0)) return !1;
                  V || (R.sc = B, R.so = B.length), W || (R.ec = B, R.eo = B.length);
                } else {
                  const U = P.length - 1;
                  for (let G = 0, q; G <= U; G++)
                    q = P[G].firstChild, q && (o.isBreak(q) ? P[G].insertBefore(B.cloneNode(!1), q) : q.textContent = B.textContent + q.textContent);
                  const k = o.getChildElement(P[0], "text", !1), F = o.getChildElement(P[U], "text", !0);
                  !V && k && (R.sc = k, R.so = 0), !W && F && (R.ec = F, R.eo = F.textContent.length);
                }
              }
            d.setRange(R.sc, R.so, R.ec, R.eo), d.history.push(!1);
            break;
          case 13:
            const M = o.getFreeFormatElement(r, null);
            if (d._charTypeHTML) {
              let B = "";
              if (!p && M || p ? B = "<br>" : B = "<" + _.nodeName + "><br></" + _.nodeName + ">", !d.checkCharCount(B, "byte-html"))
                return s.preventDefault(), !1;
            }
            if (!p && !C) {
              const B = d._isEdgeFormat(h.endContainer, h.endOffset, "end"), U = d._isEdgeFormat(h.startContainer, h.startOffset, "start");
              if (B && (/^H[1-6]$/i.test(_.nodeName) || /^HR$/i.test(_.nodeName))) {
                g._enterPrevent(s);
                let k = null;
                const F = d.appendFormatTag(_, l.defaultTag);
                if (B && B.length > 0) {
                  k = B.pop();
                  const G = k;
                  for (; B.length > 0; )
                    k = k.appendChild(B.pop());
                  F.appendChild(G);
                }
                if (k = k ? k.appendChild(F.firstChild) : F.firstChild, o.isBreak(k)) {
                  const G = o.createTextNode(o.zeroWidthSpace);
                  k.parentNode.insertBefore(G, k), d.setRange(G, 1, G, 1);
                } else
                  d.setRange(k, 0, k, 0);
                break;
              } else if (x && _ && !o.isCell(x) && !/^FIGCAPTION$/i.test(x.nodeName)) {
                const k = d.getRange();
                if (d.isEdgePoint(k.endContainer, k.endOffset) && o.isList(r.nextSibling)) {
                  g._enterPrevent(s);
                  const F = o.createElement("LI"), G = o.createElement("BR");
                  F.appendChild(G), _.parentNode.insertBefore(F, _.nextElementSibling), F.appendChild(r.nextSibling), d.setRange(G, 1, G, 1);
                  break;
                }
                if ((k.commonAncestorContainer.nodeType !== 3 || !k.commonAncestorContainer.nextElementSibling) && o.onlyZeroWidthSpace(_.innerText.trim()) && !o.isListCell(_.nextElementSibling)) {
                  g._enterPrevent(s);
                  let F = null;
                  if (o.isListCell(x.parentNode)) {
                    const G = _.parentNode.parentNode;
                    x = G.parentNode;
                    const q = o.createElement("LI");
                    q.innerHTML = "<br>", o.copyTagAttributes(q, _, l.lineAttrReset), F = q, x.insertBefore(F, G.nextElementSibling);
                  } else {
                    const G = o.isCell(x.parentNode) ? "DIV" : o.isList(x.parentNode) ? "LI" : o.isFormatElement(x.nextElementSibling) && !o.isRangeFormatElement(x.nextElementSibling) ? x.nextElementSibling.nodeName : o.isFormatElement(x.previousElementSibling) && !o.isRangeFormatElement(x.previousElementSibling) ? x.previousElementSibling.nodeName : l.defaultTag;
                    F = o.createElement(G), o.copyTagAttributes(F, _, l.lineAttrReset);
                    const q = d.detachRangeFormatElement(x, [_], null, !0, !0);
                    q.cc.insertBefore(F, q.ec);
                  }
                  F.innerHTML = "<br>", o.removeItemAllParents(_, null, null), d.setRange(F, 1, F, 1);
                  break;
                }
              }
              if (M) {
                g._enterPrevent(s);
                const k = r === M, F = d.getSelection(), G = r.childNodes, q = F.focusOffset, ie = r.previousElementSibling, J = r.nextSibling;
                if (!o.isClosureFreeFormatElement(M) && G && (k && h.collapsed && G.length - 1 <= q + 1 && o.isBreak(G[q]) && (!G[q + 1] || (!G[q + 2] || o.onlyZeroWidthSpace(G[q + 2].textContent)) && G[q + 1].nodeType === 3 && o.onlyZeroWidthSpace(G[q + 1].textContent)) && q > 0 && o.isBreak(G[q - 1]) || !k && o.onlyZeroWidthSpace(r.textContent) && o.isBreak(ie) && (o.isBreak(ie.previousSibling) || !o.onlyZeroWidthSpace(ie.previousSibling.textContent)) && (!J || !o.isBreak(J) && o.onlyZeroWidthSpace(J.textContent)))) {
                  k ? o.removeItem(G[q - 1]) : o.removeItem(r);
                  const Q = d.appendFormatTag(M, o.isFormatElement(M.nextElementSibling) && !o.isRangeFormatElement(M.nextElementSibling) ? M.nextElementSibling : null);
                  o.copyFormatAttributes(Q, M), d.setRange(Q, 1, Q, 1);
                  break;
                }
                if (k) {
                  w.insertHTML(h.collapsed && o.isBreak(h.startContainer.childNodes[h.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let Q = F.focusNode;
                  const oe = F.focusOffset;
                  M === Q && (Q = Q.childNodes[oe - q > 1 ? oe - 1 : oe]), d.setRange(Q, 1, Q, 1);
                } else {
                  const Q = F.focusNode.nextSibling, oe = o.createElement("BR");
                  d.insertNode(oe, null, !1);
                  const pe = oe.previousSibling, ge = oe.nextSibling;
                  !o.isBreak(Q) && !o.isBreak(pe) && (!ge || o.onlyZeroWidthSpace(ge)) ? (oe.parentNode.insertBefore(oe.cloneNode(!1), oe), d.setRange(oe, 1, oe, 1)) : d.setRange(ge, 0, ge, 0);
                }
                g._onShortcutKey = !0;
                break;
              }
              if (h.collapsed && (U || B)) {
                g._enterPrevent(s);
                const k = o.createElement("BR"), F = o.createElement(_.nodeName);
                o.copyTagAttributes(F, _, l.lineAttrReset);
                let G = k;
                do {
                  if (!o.isBreak(r) && r.nodeType === 1) {
                    const q = r.cloneNode(!1);
                    q.appendChild(G), G = q;
                  }
                  r = r.parentNode;
                } while (_ !== r && _.contains(r));
                F.appendChild(G), _.parentNode.insertBefore(F, U && !B ? _ : _.nextElementSibling), B && d.setRange(k, 1, k, 1);
                break;
              }
              if (_) {
                s.stopPropagation();
                let k, F = 0;
                if (h.collapsed)
                  o.onlyZeroWidthSpace(_) ? k = d.appendFormatTag(_, _.cloneNode(!1)) : k = o.splitElement(h.endContainer, h.endOffset, o.getElementDepth(_));
                else {
                  const G = o.getFormatElement(h.startContainer, null) !== o.getFormatElement(h.endContainer, null), q = _.cloneNode(!1);
                  q.innerHTML = "<br>";
                  const ie = h.commonAncestorContainer, J = ie === h.startContainer && ie === h.endContainer && o.onlyZeroWidthSpace(ie) ? h : d.removeNode();
                  if (k = o.getFormatElement(J.container, null), !k) {
                    o.isWysiwygDiv(J.container) && (g._enterPrevent(s), e.element.wysiwyg.appendChild(q), k = q, o.copyTagAttributes(k, _, l.lineAttrReset), d.setRange(k, F, k, F));
                    break;
                  }
                  const Q = o.getRangeFormatElement(J.container);
                  if (k = k.contains(Q) ? o.getChildElement(Q, o.getFormatElement.bind(o)) : k, G) {
                    if (B && !U)
                      k.parentNode.insertBefore(q, !J.prevContainer || J.container === J.prevContainer ? k.nextElementSibling : k), k = q, F = 0;
                    else if (F = J.offset, U) {
                      const oe = k.parentNode.insertBefore(q, k);
                      B && (k = oe, F = 0);
                    }
                  } else
                    B && U ? (k.parentNode.insertBefore(q, J.prevContainer && J.container === J.prevContainer ? k.nextElementSibling : k), k = q, F = 0) : k = o.splitElement(J.container, J.offset, o.getElementDepth(_));
                }
                g._enterPrevent(s), o.copyTagAttributes(k, _, l.lineAttrReset), d.setRange(k, F, k, F);
                break;
              }
            }
            if (y) break;
            if (x && o.getParentElement(x, "FIGCAPTION") && o.getParentElement(x, o.isList) && (g._enterPrevent(s), _ = d.appendFormatTag(_, null), d.setRange(_, 0, _, 0)), C) {
              s.preventDefault(), s.stopPropagation(), d.containerOff(), d.controllersOff();
              const B = e[C], U = B._container, k = U.previousElementSibling || U.nextElementSibling;
              let F = null;
              o.isListCell(U.parentNode) ? F = o.createElement("BR") : (F = o.createElement(o.isFormatElement(k) && !o.isRangeFormatElement(k) ? k.nodeName : l.defaultTag), F.innerHTML = "<br>"), p ? U.parentNode.insertBefore(F, U) : U.parentNode.insertBefore(F, U.nextElementSibling), d.callPlugin(C, function() {
                d.selectComponent(B._element, C) === !1 && d.blur();
              }, null);
            }
            break;
          case 27:
            if (C)
              return s.preventDefault(), s.stopPropagation(), d.controllersOff(), !1;
            break;
        }
        if (p && f === 16) {
          s.preventDefault(), s.stopPropagation();
          const T = d.plugins.table;
          if (T && !T._shift && !T._ref) {
            const z = o.getParentElement(_, o.isCell);
            if (z) {
              T.onTableCellMultiSelect.call(d, z, !0);
              return;
            }
          }
        } else if (p && (o.isOSX_IOS ? v : m) && f === 32) {
          s.preventDefault(), s.stopPropagation();
          const T = d.insertNode(o.createTextNode(" "));
          if (T) {
            d.setRange(T, T.length, T, T.length);
            return;
          }
        }
        if (o.isIE && !m && !v && !y && !g._nonTextKeyCode.test(f) && o.isBreak(h.commonAncestorContainer)) {
          const T = o.createTextNode(o.zeroWidthSpace);
          d.insertNode(T, null, !1), d.setRange(T, 1, T, 1);
        }
        g._directionKeyCode.test(f) && (c.setTimeout(d._editorRange.bind(d), 0), g._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(s) {
      if (s.shiftKey) return;
      let r = d.getSelectionNode();
      const f = function(v, h) {
        if (h || (h = 0), s.preventDefault(), s.stopPropagation(), !v) return;
        let y = d.getFileComponent(v);
        y ? d.selectComponent(y.target, y.pluginName) : (d.setRange(v, h, v, h), d.controllersOff());
      }, p = o.getParentElement(r, "table");
      if (p) {
        const v = o.getParentElement(r, "tr"), h = o.getParentElement(r, "td");
        let y = h, C = h;
        if (h) {
          for (; y && y.firstChild; ) y = y.firstChild;
          for (; C && C.lastChild; ) C = C.lastChild;
        }
        let _ = r;
        for (; _ && _.firstChild; ) _ = _.firstChild;
        const x = _ === y, D = _ === C;
        let T = null, z = 0;
        if (s.keyCode === 38 && x) {
          const N = v && v.previousElementSibling;
          for (N ? T = N.children[h.cellIndex] : T = o.getPreviousDeepestNode(p, d.context.element.wysiwyg); T && T.lastChild; ) T = T.lastChild;
          T && (z = T.textContent.length);
        } else if (s.keyCode === 40 && D) {
          const N = v && v.nextElementSibling;
          for (N ? T = N.children[h.cellIndex] : T = o.getNextDeepestNode(p, d.context.element.wysiwyg); T && T.firstChild; ) T = T.firstChild;
        }
        if (T)
          return f(T, z), !1;
      }
      const m = d.getFileComponent(r);
      if (m) {
        const v = /37|38/.test(s.keyCode), h = /39|40/.test(s.keyCode);
        if (v) {
          const y = o.getPreviousDeepestNode(m.target, d.context.element.wysiwyg);
          f(y, y && y.textContent.length);
        } else if (h) {
          const y = o.getNextDeepestNode(m.target, d.context.element.wysiwyg);
          f(y);
        }
      }
    },
    onKeyUp_wysiwyg: function(s) {
      if (g._onShortcutKey) return;
      d._editorRange();
      const r = s.keyCode, f = s.ctrlKey || s.metaKey || r === 91 || r === 92 || r === 224, p = s.altKey;
      if (d.isReadOnly) {
        !f && g._cursorMoveKeyCode.test(r) && g._applyTagEffects();
        return;
      }
      const m = d.getRange();
      let v = d.getSelectionNode();
      if (d._isBalloon && (d._isBalloonAlways && r !== 27 || !m.collapsed))
        if (d._isBalloonAlways)
          r !== 27 && g._showToolbarBalloonDelay();
        else {
          g._showToolbarBalloon();
          return;
        }
      let h = v;
      for (; h && h.firstChild; ) h = h.firstChild;
      const y = d.getFileComponent(h);
      if (!(s.keyCode === 16 || s.shiftKey) && y ? d.selectComponent(y.target, y.pluginName) : d.currentFileComponentInfo && d.controllersOff(), r === 8 && o.isWysiwygDiv(v) && v.textContent === "" && v.children.length === 0) {
        s.preventDefault(), s.stopPropagation(), v.innerHTML = "";
        const T = o.createElement(o.isFormatElement(d._variable.currentNodes[0]) ? d._variable.currentNodes[0] : l.defaultTag);
        T.innerHTML = "<br>", v.appendChild(T), d.setRange(T, 0, T, 0), g._applyTagEffects(), d.history.push(!1);
        return;
      }
      const C = o.getFormatElement(v, null), _ = o.getRangeFormatElement(v, null), x = d._formatAttrsTemp;
      if (x) {
        for (let T = 0, z = x.length; T < z; T++) {
          if (r === 13 && /^id$/i.test(x[T].name)) {
            C.removeAttribute("id");
            continue;
          }
          C.setAttribute(x[T].name, x[T].value);
        }
        d._formatAttrsTemp = null;
      }
      if (!C && m.collapsed && !o.isComponent(v) && !o.isList(v) && d._setDefaultFormat(o.isRangeFormatElement(_) ? "DIV" : l.defaultTag) !== null && (v = d.getSelectionNode()), !f && !p && !g._nonTextKeyCode.test(r) && v.nodeType === 3 && o.zeroWidthRegExp.test(v.textContent) && !(s.isComposing !== void 0 ? s.isComposing : g._IEisComposing)) {
        let T = m.startOffset, z = m.endOffset;
        const N = (v.textContent.substring(0, z).match(g._frontZeroWidthReg) || "").length;
        T = m.startOffset - N, z = m.endOffset - N, v.textContent = v.textContent.replace(o.zeroWidthRegExp, ""), d.setRange(v, T < 0 ? 0 : T, v, z < 0 ? 0 : z);
      }
      g._deleteKeyCode.test(r) && C && o.onlyZeroWidthSpace(C.textContent) && !C.previousElementSibling && (C.innerHTML = "<br>", d.setRange(C, 0, C, 0)), d._charCount(""), !(typeof w.onKeyUp == "function" && w.onKeyUp(s, d) === !1) && !f && !p && !g._historyIgnoreKeyCode.test(r) && d.history.push(!0);
    },
    onScroll_wysiwyg: function(s) {
      d.controllersOff(), d._isBalloon && g._hideToolbar(), typeof w.onScroll == "function" && w.onScroll(s, d);
    },
    onFocus_wysiwyg: function(s) {
      d._antiBlur || (d.hasFocus = !0, c.setTimeout(g._applyTagEffects), d._isInline && g._showToolbarInline(), typeof w.onFocus == "function" && w.onFocus(s, d));
    },
    onBlur_wysiwyg: function(s) {
      d._antiBlur || d._variable.isCodeView || (d.hasFocus = !1, d.effectNode = null, d.controllersOff(), (d._isInline || d._isBalloon) && g._hideToolbar(), d._setKeyEffect([]), d._variable.currentNodes = [], d._variable.currentNodesMap = [], l.showPathLabel && (e.element.navigation.textContent = ""), typeof w.onBlur == "function" && w.onBlur(s, d, this));
    },
    onMouseDown_resizingBar: function(s) {
      s.stopPropagation(), d.submenuOff(), d.controllersOff(), d._variable.resizeClientY = s.clientY, e.element.resizeBackground.style.display = "block";
      function r() {
        e.element.resizeBackground.style.display = "none", u.removeEventListener("mousemove", g._resize_editor), u.removeEventListener("mouseup", r);
      }
      u.addEventListener("mousemove", g._resize_editor), u.addEventListener("mouseup", r);
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
          g._showToolbarInline();
          return;
        }
        d._iframeAutoHeight(), d._sticky && (s.style.width = e.element.topArea.offsetWidth - 2 + "px", g.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (d._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || l.stickyToolbar < 0) return;
      const s = e.element, r = s.editorArea.offsetHeight, f = (this.scrollY || u.documentElement.scrollTop) + l.stickyToolbar, p = g._getEditorOffsets(l.toolbarContainer).top - (d._isInline ? s.toolbar.offsetHeight : 0), m = d._isInline && f - p > 0 ? f - p - e.element.toolbar.offsetHeight : 0;
      f < p ? g._offStickyToolbar() : f + d._variable.minResizingSize >= r + p ? (d._sticky || g._onStickyToolbar(m), s.toolbar.style.top = m + r + p + l.stickyToolbar - f - d._variable.minResizingSize + "px") : f >= p && g._onStickyToolbar(m);
    },
    _getEditorOffsets: function(s) {
      let r = s || e.element.topArea, f = 0, p = 0, m = 0;
      for (; r; )
        f += r.offsetTop, p += r.offsetLeft, m += r.scrollTop, r = r.offsetParent;
      return {
        top: f,
        left: p,
        scroll: m
      };
    },
    _getPageBottomSpace: function() {
      return u.documentElement.scrollHeight - (g._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
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
      const s = d.getRange(), r = s.startContainer, f = s.endContainer, p = o.getRangeFormatElement(r), m = o.getRangeFormatElement(f), v = o.isCell(p), h = o.isCell(m), y = s.commonAncestorContainer;
      if ((v && !p.previousElementSibling && !p.parentElement.previousElementSibling || h && !m.nextElementSibling && !m.parentElement.nextElementSibling) && p !== m)
        if (!v)
          o.removeItem(o.getParentElement(m, function(x) {
            return y === x.parentNode;
          }));
        else if (!h)
          o.removeItem(o.getParentElement(p, function(x) {
            return y === x.parentNode;
          }));
        else
          return o.removeItem(o.getParentElement(p, function(x) {
            return y === x.parentNode;
          })), d.nativeFocus(), !0;
      const C = r.nodeType === 1 ? o.getParentElement(r, ".se-component") : null, _ = f.nodeType === 1 ? o.getParentElement(f, ".se-component") : null;
      return C && o.removeItem(C), _ && o.removeItem(_), !1;
    },
    onPaste_wysiwyg: function(s) {
      const r = o.isIE ? c.clipboardData : s.clipboardData;
      return r ? g._dataTransferAction("paste", s, r) : !0;
    },
    _setClipboardComponent: function(s, r, f) {
      s.preventDefault(), s.stopPropagation(), f.setData("text/html", r.component.outerHTML);
    },
    onCopy_wysiwyg: function(s) {
      const r = o.isIE ? c.clipboardData : s.clipboardData;
      if (typeof w.onCopy == "function" && w.onCopy(s, r, d) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const f = d.currentFileComponentInfo;
      f && !o.isIE && (g._setClipboardComponent(s, f, r), o.addClass(f.component, "se-component-copy"), c.setTimeout(function() {
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
      f && !o.isIE && (g._setClipboardComponent(s, f, r), o.removeItem(f.component), d.controllersOff()), c.setTimeout(function() {
        d.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(s) {
      if (d.isReadOnly || o.isIE)
        return s.preventDefault(), s.stopPropagation(), !1;
      const r = s.dataTransfer;
      return r ? (g._setDropLocationSelection(s), d.removeNode(), document.body.contains(d.currentControllerTarget) || d.controllersOff(), g._dataTransferAction("drop", s, r)) : !0;
    },
    _setDropLocationSelection: function(s) {
      const r = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let f = null;
      if (s.rangeParent ? (r.startContainer = s.rangeParent, r.startOffset = s.rangeOffset, r.endContainer = s.rangeParent, r.endOffset = s.rangeOffset) : d._wd.caretRangeFromPoint ? f = d._wd.caretRangeFromPoint(s.clientX, s.clientY) : f = d.getRange(), f && (r.startContainer = f.startContainer, r.startOffset = f.startOffset, r.endContainer = f.endContainer, r.endOffset = f.endOffset), r.startContainer === r.endContainer) {
        const p = o.getParentElement(r.startContainer, o.isComponent);
        p && (r.startContainer = p, r.startOffset = 0, r.endContainer = p, r.endOffset = 0);
      }
      d.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(s, r, f) {
      let p, m;
      if (o.isIE) {
        p = f.getData("Text");
        const v = d.getRange(), h = o.createElement("DIV"), y = {
          sc: v.startContainer,
          so: v.startOffset,
          ec: v.endContainer,
          eo: v.endOffset
        };
        return h.setAttribute("contenteditable", !0), h.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(h), h.focus(), c.setTimeout(function() {
          m = h.innerHTML, o.removeItem(h), d.setRange(y.sc, y.so, y.ec, y.eo), g._setClipboardData(s, r, p, m, f);
        }), !0;
      } else if (p = f.getData("text/plain"), m = f.getData("text/html"), g._setClipboardData(s, r, p, m, f) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(s, r, f, p, m) {
      const v = /class=["']*Mso(Normal|List)/i.test(p) || /content=["']*Word.Document/i.test(p) || /content=["']*OneNote.File/i.test(p) || /content=["']*Excel.Sheet/i.test(p);
      !p ? p = o._HTMLConvertor(f).replace(/\n/g, "<br>") : (p = p.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), v && (p = p.replace(/\n/g, " "), f = f.replace(/\n/g, " ")), p = d.cleanHTML(p, d.pasteTagsWhitelistRegExp, d.pasteTagsBlacklistRegExp));
      const y = d._charCount(d._charTypeHTML ? p : f);
      if (s === "paste" && typeof w.onPaste == "function") {
        const _ = w.onPaste(r, p, y, d);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          p = _;
        }
      }
      if (s === "drop" && typeof w.onDrop == "function") {
        const _ = w.onDrop(r, p, y, d);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          p = _;
        }
      }
      const C = m.files;
      if (C.length > 0 && !v)
        return /^image/.test(C[0].type) && d.plugins.image && w.insertImage(C), !1;
      if (!y)
        return !1;
      if (p)
        return w.insertHTML(p, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(s) {
      if (d.isDisabled || d.isReadOnly) return !1;
      const r = o.getParentElement(s.target, o.isComponent), f = d._lineBreaker.style;
      if (r && !d.currentControllerName) {
        const p = e.element;
        let m = 0, v = p.wysiwyg;
        do
          m += v.scrollTop, v = v.parentElement;
        while (v && !/^(BODY|HTML)$/i.test(v.nodeName));
        const h = p.wysiwyg.scrollTop, y = g._getEditorOffsets(null), C = o.getOffset(r, p.wysiwygFrame).top + h, _ = s.pageY + m + (l.iframe && !l.toolbarContainer ? p.toolbar.offsetHeight : 0), x = C + (l.iframe ? m : y.top), D = o.isListCell(r.parentNode);
        let T = "", z = "";
        if ((D ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) && _ < x + 20)
          z = C, T = "t";
        else if ((D ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) && _ > x + r.offsetHeight - 20)
          z = C + r.offsetHeight, T = "b";
        else {
          f.display = "none";
          return;
        }
        d._variable._lineBreakComp = r, d._variable._lineBreakDir = T, f.top = z - h + "px", d._lineBreakerButton.style.left = o.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", f.display = "block";
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
      const r = d._variable._lineBreakComp, f = this ? this : d._variable._lineBreakDir, p = o.isListCell(r.parentNode), m = o.createElement(p ? "BR" : o.isCell(r.parentNode) ? "DIV" : l.defaultTag);
      if (p || (m.innerHTML = "<br>"), d._charTypeHTML && !d.checkCharCount(m.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(m, f === "t" ? r : r.nextSibling), d._lineBreaker.style.display = "none", d._variable._lineBreakComp = null;
      const v = p ? m : m.firstChild;
      d.setRange(v, 1, v, 1), d.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const s = l.iframe ? d._ww : e.element.wysiwyg;
      o.isResizeObserverSupported && (this._resizeObserver = new c.ResizeObserver(function(r) {
        d.__callResizeFunction(-1, r[0]);
      })), e.element.toolbar.addEventListener("mousedown", g._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", g._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", g.onClick_toolbar, !1), s.addEventListener("mousedown", g.onMouseDown_wysiwyg, !1), s.addEventListener("click", g.onClick_wysiwyg, !1), s.addEventListener(o.isIE ? "textinput" : "input", g.onInput_wysiwyg, !1), s.addEventListener("keydown", g.onKeyDown_wysiwyg, !1), s.addEventListener("keyup", g.onKeyUp_wysiwyg, !1), s.addEventListener("paste", g.onPaste_wysiwyg, !1), s.addEventListener("copy", g.onCopy_wysiwyg, !1), s.addEventListener("cut", g.onCut_wysiwyg, !1), s.addEventListener("drop", g.onDrop_wysiwyg, !1), s.addEventListener("scroll", g.onScroll_wysiwyg, !1), s.addEventListener("focus", g.onFocus_wysiwyg, !1), s.addEventListener("blur", g.onBlur_wysiwyg, !1), g._lineBreakerBind = { a: g._onLineBreak.bind(""), t: g._onLineBreak.bind("t"), b: g._onLineBreak.bind("b") }, s.addEventListener("mousemove", g.onMouseMove_wysiwyg, !1), d._lineBreakerButton.addEventListener("mousedown", g._onMouseDown_lineBreak, !1), d._lineBreakerButton.addEventListener("click", g._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", g._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", g._lineBreakerBind.b, !1), s.addEventListener("touchstart", g.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.addEventListener("touchend", g.onClick_wysiwyg, { passive: !0, useCapture: !1 }), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.addEventListener("keydown", g._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", g._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", g._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(l.height) && l.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", g.onMouseDown_resizingBar, !1) : o.addClass(e.element.resizingBar, "se-resizing-none")), g._setResponsiveToolbar(), o.isResizeObserverSupported && (this._toolbarObserver = new c.ResizeObserver(d.resetResponsiveToolbar)), c.addEventListener("resize", g.onResize_window, !1), l.stickyToolbar > -1 && c.addEventListener("scroll", g.onScroll_window, !1);
    },
    _removeEvent: function() {
      const s = l.iframe ? d._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", g._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", g._buttonsEventHandler), e.element.toolbar.removeEventListener("click", g.onClick_toolbar), s.removeEventListener("mousedown", g.onMouseDown_wysiwyg), s.removeEventListener("click", g.onClick_wysiwyg), s.removeEventListener(o.isIE ? "textinput" : "input", g.onInput_wysiwyg), s.removeEventListener("keydown", g.onKeyDown_wysiwyg), s.removeEventListener("keyup", g.onKeyUp_wysiwyg), s.removeEventListener("paste", g.onPaste_wysiwyg), s.removeEventListener("copy", g.onCopy_wysiwyg), s.removeEventListener("cut", g.onCut_wysiwyg), s.removeEventListener("drop", g.onDrop_wysiwyg), s.removeEventListener("scroll", g.onScroll_wysiwyg), s.removeEventListener("mousemove", g.onMouseMove_wysiwyg), d._lineBreakerButton.removeEventListener("mousedown", g._onMouseDown_lineBreak), d._lineBreakerButton.removeEventListener("click", g._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", g._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", g._lineBreakerBind.b), g._lineBreakerBind = null, s.removeEventListener("touchstart", g.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("touchend", g.onClick_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("focus", g.onFocus_wysiwyg), s.removeEventListener("blur", g.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", g._codeViewAutoHeight), e.element.code.removeEventListener("keyup", g._codeViewAutoHeight), e.element.code.removeEventListener("paste", g._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", g.onMouseDown_resizingBar), g._resizeObserver && (g._resizeObserver.unobserve(e.element.wysiwygFrame), g._resizeObserver = null), g._toolbarObserver && (g._toolbarObserver.unobserve(e.element._toolbarShadow), g._toolbarObserver = null), c.removeEventListener("resize", g.onResize_window), c.removeEventListener("scroll", g.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (a.length === 0) {
        a = null;
        return;
      }
      g._responsiveCurrentSize = "default";
      const s = g._responsiveButtonSize = [], r = g._responsiveButtons = { default: a[0] };
      for (let f = 1, p = a.length, m, v; f < p; f++)
        v = a[f], m = v[0] * 1, s.push(m), r[m] = v[1];
      s.sort(function(f, p) {
        return f - p;
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
      const r = Gi._createToolBar(u, s, d.plugins, l);
      a = r.responsiveButtons, g._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const f = Ki(e.element.originElement, d._getConstructed(e.element), l);
      e.element = f.element, e.tool = f.tool, l.iframe && (e.element.wysiwyg = d._wd.body), d._recoverButtonStates(), d._cachingButtons(), d.history._resetCachingButton(), d.effectNode = null, d.hasFocus && g._applyTagEffects(), d.isReadOnly && o.setDisabledButtons(!0, d.resizingDisabledButtons), typeof w.onSetToolbarButtons == "function" && w.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), d);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(s) {
      g._removeEvent(), d._resetComponents(), o.removeClass(d._styleCommandMap.showBlocks, "active"), o.removeClass(d._styleCommandMap.codeView, "active"), d._variable.isCodeView = !1, d._iframeAuto = null, d.plugins = s.plugins || d.plugins;
      const r = [l, s].reduce(function(v, h) {
        for (let y in h)
          if (o.hasOwn(h, y))
            if (y === "plugins" && h[y] && v[y]) {
              let C = v[y], _ = h[y];
              C = C.length ? C : c.Object.keys(C).map(function(x) {
                return C[x];
              }), _ = _.length ? _ : c.Object.keys(_).map(function(x) {
                return _[x];
              }), v[y] = _.filter(function(x) {
                return C.indexOf(x) === -1;
              }).concat(C);
            } else
              v[y] = h[y];
        return v;
      }, {}), f = e.element, p = f.wysiwyg.innerHTML, m = Gi._setOptions(r, e, l);
      m.callButtons && (t = m.callButtons, d.initPlugins = {}), m.plugins && (d.plugins = i = m.plugins), f._menuTray.children.length === 0 && (this._menuTray = {}), a = m.toolbar.responsiveButtons, d.options = l = r, d.lang = n = l.lang, l.iframe && f.wysiwygFrame.addEventListener("load", function() {
        o._setIframeDocument(this, l), d._setOptionsInit(f, p);
      }), f.editorArea.appendChild(f.wysiwygFrame), l.iframe || d._setOptionsInit(f, p);
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
      e.element.originElement.value = s, g.onSave_wysiwyg(s, d);
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
    insertHTML: function(s, r, f, p) {
      if (e.element.wysiwygFrame.contains(d.getSelection().focusNode) || d.focus(), typeof s == "string") {
        r || (s = d.cleanHTML(s, null, null));
        try {
          if (o.isListCell(o.getFormatElement(d.getSelectionNode(), null))) {
            const z = u.createRange().createContextualFragment(s).childNodes;
            d._isFormatData(z) && (s = d._convertListCell(z));
          }
          const v = u.createRange().createContextualFragment(s).childNodes;
          if (f) {
            const T = d._charTypeHTML ? "outerHTML" : "textContent";
            let z = "";
            for (let N = 0, $ = v.length; N < $; N++)
              z += v[N][T];
            if (!d.checkCharCount(z, null)) return;
          }
          let h, y, C, _, x;
          for (; h = v[0]; ) {
            if (_ && _.nodeType === 3 && y && y.nodeType === 1 && o.isBreak(h)) {
              _ = h, o.removeItem(h);
              continue;
            }
            C = d.insertNode(h, y, !1), y = C.container || C, x || (x = C), _ = h;
          }
          _.nodeType === 3 && y.nodeType === 1 && (y = _);
          const D = y.nodeType === 3 ? C.endOffset || y.textContent.length : y.childNodes.length;
          p ? d.setRange(x.container || x, x.startOffset || 0, y, D) : d.setRange(y, D, y, D);
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
        const p = e.element.wysiwyg, m = f.children;
        for (let v = 0, h = m.length; v < h; v++)
          m[v] && p.appendChild(m[v]);
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
      d.submenuOff(), d.containerOff(), d.controllersOff(), d.notice && d.notice.close.call(d), d.modalForm && d.plugins.dialog.close.call(d), d.history._destroy(), g._removeEvent(), o.removeItem(e.element.toolbar), o.removeItem(e.element.topArea);
      for (let s in d.functions)
        o.hasOwn(d, s) && delete d.functions[s];
      for (let s in d)
        o.hasOwn(d, s) && delete d[s];
      for (let s in g)
        o.hasOwn(g, s) && delete g[s];
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
        d._isInline ? g._showToolbarInline() : (e.element.toolbar.style.display = "", e.element._stickyDummy.style.display = ""), g.onResize_window();
      },
      /**
       * @description Hide the toolbar
       */
      hide: function() {
        d._isInline ? g._hideToolbar() : (e.element.toolbar.style.display = "none", e.element._stickyDummy.style.display = "none"), g.onResize_window();
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
  let S = e.element, L = S.originElement, A = S.topArea;
  return L.style.display = "none", A.style.display = "block", l.iframe && S.wysiwygFrame.addEventListener("load", function() {
    o._setIframeDocument(this, l), d._editorInit(!1, l.value), l.value = null;
  }), typeof L.nextElementSibling == "object" ? L.parentNode.insertBefore(A, L.nextElementSibling) : L.parentNode.appendChild(A), S.editorArea.appendChild(S.wysiwygFrame), S = L = A = null, l.iframe || (d._editorInit(!1, l.value), l.value = null), w;
}
const Lr = {
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
    fe._propertiesInit(), typeof t != "object" && (t = {}), i && (t = [i, t].reduce(function(a, u) {
      for (let c in u)
        if (fe.hasOwn(u, c))
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
    const l = Gi.init(n, t);
    if (l.constructed._top.id && document.getElementById(l.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + l.constructed._top.id + '")');
    return Sr(Ki(n, l.constructed, l.options), l.pluginCallButtons, l.plugins, l.options.lang, t, l._responsiveButtons);
  }
}, Er = ["innerHTML", "id", "tabindex"], Tr = /* @__PURE__ */ ve({
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
    const n = i, l = e, a = X(null), u = X(l.modelValue);
    let c = null, o;
    const b = X(l.focusing), d = (L) => {
      b.value = !0, n("focus", L);
    }, g = (L) => {
      b.value = !1, n("blur", L);
    }, w = (L) => {
      o && clearTimeout(o), o = setTimeout(() => {
        hn(L) === "" ? u.value = "" : u.value = L;
      }, 100);
    }, S = () => {
      let L = {
        //@ts-ignore
        lang: ln[l.lang] ? ln[l.lang] : Vi,
        plugins: {
          ...wr
        },
        ...kr
      };
      c = Lr.create(l.id, L), c.onChange = (A) => {
        w(A), l.disabled ? c == null || c.disabled() : c == null || c.enabled();
      }, c.onKeyUp = (A, s) => {
        w(s.getContents(!1));
      }, c.onBlur = () => {
        g();
      }, c.onClick = () => {
        d();
      };
    };
    return ce(() => l.modelValue, (L) => u.value = L), ce(u, (L) => n("update:modelValue", L)), Xi(() => {
      S();
    }), t({
      doSetValue: (L) => {
        c && c.setContents(L);
      }
    }), (L, A) => (H(), ne("div", {
      innerHTML: u.value,
      ref_key: "input",
      ref: a,
      id: L.id,
      tabindex: L.tabindex
    }, null, 8, Er));
  }
}), zr = {
  key: 0,
  class: "lkt-field--searchable-box"
}, Br = ["value", "placeholder"], Nr = { key: 0 }, Ar = ["title"], Rr = /* @__PURE__ */ ve({
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
    "tag",
    "untag"
  ],
  setup(e, { expose: t, emit: i }) {
    const n = i, l = e, a = l.multiple && l.canTag, u = X(l.searchString), c = X(null), o = X(l.showOptions);
    ce(o, (h) => {
      a || n("update:showOptions", h);
    });
    const b = X(l.focusing), d = X(!1), g = X(!1), w = () => {
      qt(() => {
        b.value = d.value || g.value, o.value = b.value;
      });
    };
    ce(d, (h) => {
      h && (g.value = !1), w();
    }), ce(g, (h) => {
      h && (d.value = !1), w();
    }), ce(b, (h) => {
      n(h ? "focus" : "blur");
    });
    let S, L;
    const A = (h) => {
      S = setTimeout(() => {
        d.value = !1;
      }, 100);
    }, s = (h) => {
      d.value = !0, a && h.key === "Enter" ? (n("tag", u.value), u.value = "") : ["ArrowDown", "ArrowUp", "Enter"].includes(h.key) ? n("navigate", h) : n("search", u.value);
    }, r = (h) => {
      d.value = !0;
    }, f = (h) => {
      L = setTimeout(() => {
        g.value = !1;
      }, 100);
    }, p = (h) => {
      g.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(h.key) && n("navigate", h);
    }, m = (h) => {
      g.value = !0;
    }, v = (h) => {
      n("untag", h);
    };
    return t({
      keepFocused: () => {
        clearTimeout(S), clearTimeout(L), c.value && c.value.focus();
      }
    }), (h, y) => {
      const C = de("lkt-tag"), _ = de("lkt-button");
      return H(), ne(Ve, null, [
        h.searchable && (h.multiple || h.searchMode) || I(a) ? (H(), ne("div", zr, [
          h.multiple ? (H(), j(C, {
            key: 0,
            icon: h.optionsIcon,
            text: h.pickedOptions.length
          }, null, 8, ["icon", "text"])) : h.pickedOptions.length > 0 ? (H(), j(C, { key: 1 }, {
            default: re(() => [
              Y(Lt, {
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
          })) : se("", !0),
          Ze(le("input", {
            "onUpdate:modelValue": y[0] || (y[0] = (x) => u.value = x),
            ref_key: "queryField",
            ref: c,
            value: u.value,
            placeholder: h.searchPlaceholder,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: s,
            onBlur: A,
            onFocus: r
          }, null, 40, Br), [
            [Mi, u.value]
          ])
        ])) : se("", !0),
        Ze(Y(_, {
          ref: "selectButton",
          type: I(a) ? "content" : "",
          class: "lkt-field--toggle-button lkt-field--select-button",
          "open-tooltip": o.value,
          "onUpdate:openTooltip": y[1] || (y[1] = (x) => o.value = x),
          onKeyup: p,
          onBlur: f,
          onFocus: m
        }, {
          default: re(() => [
            I(a) || h.multiple && h.pickedOptions.length > 0 ? (H(), ne(Ve, { key: 0 }, [
              h.multipleDisplayEdition === I(oi).Count ? (H(), ne("div", Nr, ct(h.pickedOptions.length), 1)) : (H(), ne("ul", {
                key: 1,
                class: Te(["lkt-field-select-read", `multiple-display-${h.multipleDisplayEdition}`])
              }, [
                (H(!0), ne(Ve, null, Xe(h.pickedOptions, (x, D) => (H(), ne("li", {
                  title: x.label
                }, [
                  Y(Lt, {
                    option: h.pickedOptions[D],
                    "option-slot": h.optionSlot,
                    icon: h.optionsIcon,
                    text: h.optionsText,
                    "custom-class": h.optionsClass,
                    modal: h.optionsModal,
                    "modal-data": h.optionsModalData,
                    download: h.optionsDownload,
                    "label-formatter": h.optionsLabelFormatter,
                    editable: h.editable,
                    "is-tag": I(a),
                    onClickIcon: v
                  }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable", "is-tag"])
                ], 8, Ar))), 256))
              ], 2))
            ], 64)) : !h.multiple && h.pickedOptions.length > 0 ? (H(), j(Lt, {
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
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable"])) : se("", !0)
          ]),
          _: 1
        }, 8, ["type", "open-tooltip"]), [
          [kt, h.multiple || !h.searchable || !h.searchMode]
        ])
      ], 64);
    };
  }
}), Ir = { class: "lkt-calc--formula" }, Dr = { class: "lkt-calc--custom-pad" }, Mr = { class: "lkt-calc--pad" }, Vr = { class: "lkt-calc--numeric-pad" }, Fr = { class: "lkt-calc--math-pad" }, Hr = { class: "lkt-calc--advance-math-pad" }, Or = /* @__PURE__ */ ve({
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
    const i = t, n = e, l = X(n.modelValue), a = X(null);
    ce(l, (m) => i("update:modelValue", m));
    const u = X(n.focusing), c = X(null);
    let o;
    const b = () => {
      clearTimeout(o), a.value && typeof a.value.focus == "function" && a.value.focus();
    }, d = (m) => {
      l.value += "" + m, b();
    }, g = (m) => {
      l.value += " " + m + " ", b();
    }, w = (m) => {
      l.value += " " + m + "(", b();
    }, S = () => {
      l.value += " sqrt(", b();
    }, L = (m) => {
      l.value += "" + m, b();
    }, A = () => {
      l.value += ".", b();
    }, s = () => {
      l.value += " ", b();
    }, r = (m) => {
      l.value += "" + m.value, b();
    }, f = () => {
      u.value = !0;
    }, p = () => {
      o = setTimeout(() => {
        u.value = !1;
      }, 100);
    };
    return ce(u, (m) => {
      i(m ? "focus" : "blur");
    }), (m, v) => {
      const h = de("lkt-button"), y = de("lkt-tooltip");
      return H(), ne("div", {
        ref_key: "container",
        ref: c
      }, [
        le("div", Ir, [
          Ze(le("input", {
            type: "text",
            ref_key: "input",
            ref: a,
            "onUpdate:modelValue": v[0] || (v[0] = (C) => l.value = C),
            onFocus: f,
            onBlur: p
          }, null, 544), [
            [Mi, l.value]
          ])
        ]),
        m.editable ? (H(), j(y, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: u.value,
          "onUpdate:modelValue": v[27] || (v[27] = (C) => u.value = C),
          referrer: c.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: re(() => [
            le("div", Dr, [
              (H(!0), ne(Ve, null, Xe(m.options, (C) => (H(), j(h, {
                icon: C.icon,
                text: C.label,
                onClick: (_) => r(C)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            le("div", Mr, [
              le("div", Vr, [
                Y(h, {
                  onClick: v[1] || (v[1] = (C) => d(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                Y(h, {
                  onClick: v[2] || (v[2] = (C) => d(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                Y(h, {
                  onClick: v[3] || (v[3] = (C) => d(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                Y(h, {
                  onClick: v[4] || (v[4] = (C) => d(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                Y(h, {
                  onClick: v[5] || (v[5] = (C) => d(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                Y(h, {
                  onClick: v[6] || (v[6] = (C) => d(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                Y(h, {
                  onClick: v[7] || (v[7] = (C) => d(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                Y(h, {
                  onClick: v[8] || (v[8] = (C) => d(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                Y(h, {
                  onClick: v[9] || (v[9] = (C) => d(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                Y(h, {
                  onClick: v[10] || (v[10] = (C) => A()),
                  text: "."
                }),
                Y(h, {
                  onClick: v[11] || (v[11] = (C) => d(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                Y(h, {
                  onClick: v[12] || (v[12] = (C) => s()),
                  text: " "
                })
              ]),
              le("div", Fr, [
                Y(h, {
                  onClick: v[13] || (v[13] = (C) => L("[")),
                  text: "["
                }),
                Y(h, {
                  onClick: v[14] || (v[14] = (C) => L("]")),
                  text: "]"
                }),
                Y(h, {
                  onClick: v[15] || (v[15] = (C) => L("(")),
                  text: "("
                }),
                Y(h, {
                  onClick: v[16] || (v[16] = (C) => L(")")),
                  text: ")"
                }),
                Y(h, {
                  onClick: v[17] || (v[17] = (C) => g("+")),
                  text: "+"
                }),
                Y(h, {
                  onClick: v[18] || (v[18] = (C) => g("-")),
                  text: "−"
                }),
                Y(h, {
                  onClick: v[19] || (v[19] = (C) => g("*")),
                  text: "×"
                }),
                Y(h, {
                  onClick: v[20] || (v[20] = (C) => g("/")),
                  text: "÷"
                })
              ]),
              le("div", Hr, [
                Y(h, {
                  onClick: v[21] || (v[21] = (C) => S()),
                  text: "√"
                }),
                Y(h, {
                  onClick: v[22] || (v[22] = (C) => w("log")),
                  text: "log"
                }),
                Y(h, {
                  onClick: v[23] || (v[23] = (C) => w("ln")),
                  text: "ln"
                }),
                Y(h, {
                  onClick: v[24] || (v[24] = (C) => w("sin")),
                  text: "sin"
                }),
                Y(h, {
                  onClick: v[25] || (v[25] = (C) => w("cos")),
                  text: "cos"
                }),
                Y(h, {
                  onClick: v[26] || (v[26] = (C) => w("tan")),
                  text: "tan"
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : se("", !0)
      ], 512);
    };
  }
}), Ur = /* @__PURE__ */ ve({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = ee(() => {
      let u = Rl(t.validation.code, t.stack), c = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, o = Rl(t.validation.status + "-" + t.validation.code, t.stack);
      return o && (u = o), u ? u.startsWith("__:") ? pn(u.substring(3), c) : _o(u, c, ":", "") : t.validation.code;
    }), n = ee(() => te.validationIconSlot !== ""), l = ee(() => te.validationIconSlot), a = ee(() => {
      let u = [];
      return u.push("code-" + t.validation.code), u.push("is-" + t.validation.status), u.join(" ");
    });
    return (u, c) => (H(), ne("div", {
      class: Te(["lkt-field-validation-message", a.value])
    }, [
      n.value ? (H(), j(Tt(l.value), { key: 0 })) : se("", !0),
      zt(" " + ct(i.value), 1)
    ], 2));
  }
}), Pr = {
  key: 0,
  class: "lkt-field-validation-info"
}, Wr = /* @__PURE__ */ ve({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = X(t.items), n = X(!1);
    return ce(() => t.items, (l) => {
      n.value = !0, qt(() => n.value = !1);
    }, { deep: !0 }), (l, a) => n.value ? se("", !0) : (H(), ne("div", Pr, [
      (H(!0), ne(Ve, null, Xe(i.value, (u) => (H(), j(Ur, {
        validation: u,
        stack: l.stack,
        key: u.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), $r = ["id"], Zr = /* @__PURE__ */ ve({
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
    const i = t, n = e, l = X(n.modelValue), a = X(n.focusing);
    let u, c;
    const o = X({}), b = () => {
      clearTimeout(c), c = setTimeout(() => {
        o.value = {
          query: l.value
        };
      }, 300);
    }, d = () => {
      a.value = !0;
    }, g = () => {
      u = setTimeout(() => {
        a.value = !1;
      }, 100);
    };
    ce(a, (S) => {
      i(S ? "focus" : "blur");
    });
    const w = () => {
      clearTimeout(u), setTimeout(() => {
        d();
      }, 100);
    };
    return (S, L) => {
      const A = de("lkt-table"), s = de("lkt-tooltip");
      return H(), ne(Ve, null, [
        Ze(le("input", {
          id: S.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": L[0] || (L[0] = (r) => l.value = r),
          onFocus: d,
          onBlur: g,
          onKeyup: b
        }, null, 40, $r), [
          [Mi, l.value]
        ]),
        S.editable && S.hadFirstFocus ? (H(), j(s, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: a.value,
          "onUpdate:modelValue": L[1] || (L[1] = (r) => a.value = r),
          referrer: S.container,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: re(() => [
            Y(A, ye({
              type: I(qi).Ul,
              itemsContainerClass: "lkt-field--dropdown-options",
              paginator: {
                resource: S.optionsResource,
                resourceData: o.value
              }
            }, {
              onPage: w,
              onClick: w
            }), {
              item: re(({ item: r, index: f, isLoading: p, canCreate: m, canUpdate: v, canDrop: h, canRead: y, doDrop: C }) => [
                Y(Lt, {
                  option: r,
                  onClick: w
                }, null, 8, ["option"])
              ]),
              _: 1
            }, 16)
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : se("", !0)
      ], 64);
    };
  }
}), qr = {
  key: 0,
  class: "lkt-field-main"
}, jr = {
  key: 3,
  class: "lkt-field--read-value"
}, Gr = ["innerHTML", "title"], Kr = ["title"], Yr = { key: 0 }, Xr = ["title"], Jr = ["innerHTML"], Qr = ["innerHTML", "title"], eu = ["innerHTML", "title"], tu = /* @__PURE__ */ ve({
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
    multipleDisplay: { default: oi.List },
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
    const i = t, n = Ji(), l = e, a = () => i("click"), u = ee(() => {
      switch (l.type) {
        case Z.Select:
          if (l.multiple && Array.isArray(l.value) && l.value.length > 0 || l.multiple && l.multipleDisplay === oi.Count || !l.multiple && l.value) return "";
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
    return l.type === Z.Select && l.multiple && !Array.isArray(o) && (o = []), (l.type === Z.Textarea || l.type === Z.Text) && (typeof ((b = l.readModeConfig) == null ? void 0 : b.textMaxLength) < "u" && o.length > l.readModeConfig.textMaxLength ? o = o.substring(0, l.readModeConfig.textMaxLength) + "..." : typeof te.readTextMaxLength < "u" && o.length > te.readTextMaxLength && (o = o.substring(0, te.readTextMaxLength) + "...")), (d, g) => {
      const w = de("lkt-image"), S = de("lkt-button"), L = de("lkt-anchor"), A = de("lkt-tag");
      return H(), ne("div", {
        class: "lkt-field--read",
        onClick: a
      }, [
        I(n).value ? st(d.$slots, "value", {
          key: 0,
          value: I(o),
          title: d.title,
          data: d.slotData
        }) : u.value ? (H(), j(Tt(u.value), {
          key: 1,
          data: d.slotData
        }, null, 8, ["data"])) : c.value ? (H(), j(Tt(c.value), {
          key: 2,
          value: I(o),
          title: d.title,
          data: d.slotData
        }, null, 8, ["value", "title", "data"])) : (H(), ne(Ve, { key: 3 }, [
          d.type === I(Z).File || d.type === I(Z).Image ? (H(), ne("div", qr, [
            Y(S, {
              class: "lkt-field--toggle-button",
              text: d.type === I(Z).File ? d.fileName : "",
              disabled: ""
            }, {
              default: re(() => [
                d.type === I(Z).Image ? (H(), j(w, {
                  key: 0,
                  src: I(o),
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : se("", !0),
                d.type === I(Z).Image ? (H(), j(w, {
                  key: 1,
                  src: I(o),
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : se("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : d.type === I(Z).Email ? (H(), j(L, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: d.title,
            to: I(o)
          }, {
            default: re(() => [
              zt(ct(I(o)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : d.type === I(Z).Tel ? (H(), j(L, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: d.title,
            to: I(o)
          }, {
            default: re(() => [
              zt(ct(I(o)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : I(St).includes(d.type) ? (H(), ne("div", jr, [
            Y(A, {
              icon: I(o) ? "lkt-icn-check" : "lkt-icn-cancel",
              "featured-text": d.label,
              title: d.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : d.type === I(Z).Date ? (H(), ne("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: I(o),
            title: d.title
          }, null, 8, Gr)) : d.type === I(Z).Select ? (H(), ne("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: d.title
          }, [
            d.multiple ? (H(), ne(Ve, { key: 0 }, [
              d.multipleDisplay === I(oi).Count ? (H(), ne("div", Yr, ct(I(o).length), 1)) : I(o).length > 0 ? (H(), ne("ul", {
                key: 1,
                class: Te(["lkt-field-select-read", `multiple-display-${d.multipleDisplay}`])
              }, [
                (H(!0), ne(Ve, null, Xe(I(o), (s, r) => {
                  var f;
                  return H(), ne("li", {
                    title: (f = I(o)[r]) == null ? void 0 : f.label
                  }, [
                    Y(Lt, {
                      option: I(o)[r],
                      "option-slot": d.optionSlot,
                      icon: d.optionsIcon,
                      text: d.optionsText,
                      "custom-class": d.optionsClass,
                      modal: d.optionsModal,
                      "modal-data": d.optionsModalData,
                      download: d.optionsDownload,
                      "label-formatter": d.optionsLabelFormatter
                    }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter"])
                  ], 8, Xr);
                }), 256))
              ], 2)) : se("", !0)
            ], 64)) : I(o).length > 0 ? (H(), j(Lt, {
              key: 1,
              option: I(o)[0],
              "option-slot": d.optionSlot,
              icon: d.optionsIcon,
              text: d.optionsText,
              "custom-class": d.optionsClass,
              modal: d.optionsModal,
              "modal-data": d.optionsModalData,
              download: d.optionsDownload,
              "label-formatter": d.optionsLabelFormatter
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter"])) : se("", !0)
          ], 8, Kr)) : d.modal ? (H(), j(S, {
            key: 6,
            class: "lkt-field--read-value",
            title: d.title,
            modal: d.modal,
            "modal-key": d.modalKey,
            "modal-data": d.modalData
          }, {
            default: re(() => [
              le("div", { innerHTML: I(o) }, null, 8, Jr)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : d.download ? (H(), j(Lt, {
            key: 7,
            class: "lkt-field--read-value",
            option: { value: "", label: I(o) },
            download: d.download,
            text: d.optionsText,
            "custom-class": d.optionsClass
          }, null, 8, ["option", "download", "text", "custom-class"])) : d.type === I(Z).Number ? (H(), ne("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: d.title,
            title: d.title
          }, null, 8, Qr)) : (H(), ne("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: I(o),
            title: d.title
          }, null, 8, eu))
        ], 64))
      ]);
    };
  }
}), iu = ["name", "id", "disabled", "readonly", "placeholder", "accept"], lu = ["click-ref", "disabled"], nu = { class: "lkt-grid-1" }, ou = /* @__PURE__ */ ve({
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
    isImage: { type: Boolean, default: !1 }
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
    const n = i, l = e, a = X(null), u = X(null), c = X(l.modelValue), o = X(l.fileName), b = X(l.uploading), d = (w) => {
      let S = w.target;
      if (S.files && S.files[0]) {
        o.value = S.files[0].name;
        const L = new FileReader();
        L.onload = (A) => {
          if (c.value = A.target.result, l.resource) {
            b.value = !0, n("uploading");
            let s = JSON.parse(JSON.stringify(l.resourceData));
            s.files = S.files[0], Zi(l.resource, s).then((r) => {
              if (b.value = !1, !r.success) {
                n("upload-error", r);
                return;
              }
              c.value = r.data, n("upload-success", r);
            }).catch((r) => {
              b.value = !1, n("upload-error", r);
            });
          }
        }, L.readAsDataURL(S.files[0]);
      }
      n("change", w);
    };
    ce(c, (w) => n("update:modelValue", w)), ce(o, (w) => n("update:fileName", w)), t({
      click: () => {
        var w;
        (w = u.value) == null || w.click();
      }
    });
    const g = X(!1);
    return (w, S) => {
      const L = de("lkt-image"), A = de("lkt-button");
      return H(), ne(Ve, null, [
        le("input", {
          ref_key: "inputElement",
          ref: a,
          type: "file",
          name: w.name,
          id: w.id,
          disabled: w.disabled,
          readonly: w.readonly,
          placeholder: w.placeholder,
          accept: w.accept,
          onChange: d
        }, null, 40, iu),
        g.value ? w.isImage ? w.isImage ? (H(), ne("div", {
          key: 2,
          "click-ref": a.value,
          disabled: w.disabled
        }, [
          w.isImage ? (H(), j(L, {
            key: 0,
            src: c.value,
            class: "lkt-field--image-cover"
          }, null, 8, ["src"])) : se("", !0),
          w.isImage ? (H(), j(L, {
            key: 1,
            src: c.value,
            class: "lkt-field--image-main"
          }, {
            overlay: re(() => [
              le("div", null, [
                le("div", nu, [
                  Y(A, {
                    ref_key: "buttonRef",
                    ref: u,
                    "click-ref": a.value,
                    text: "Upload",
                    icon: "lkt-icn-upload",
                    disabled: w.disabled
                  }, null, 8, ["click-ref", "disabled"]),
                  Y(A, {
                    ref: "fileBrowserButtonRef",
                    text: "Explore files",
                    icon: "lkt-icn-search",
                    disabled: w.disabled
                  }, null, 8, ["disabled"])
                ])
              ])
            ]),
            _: 1
          }, 8, ["src"])) : se("", !0)
        ], 8, lu)) : se("", !0) : (H(), j(A, {
          key: 1,
          ref_key: "buttonRef",
          ref: u,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: o.value,
          disabled: w.disabled
        }, null, 8, ["click-ref", "text", "disabled"])) : (H(), j(A, {
          key: 0,
          ref_key: "buttonRef",
          ref: u,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: w.isImage ? "" : o.value,
          disabled: w.disabled
        }, {
          default: re(() => [
            w.isImage ? (H(), j(L, {
              key: 0,
              src: c.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : se("", !0),
            w.isImage ? (H(), j(L, {
              key: 1,
              src: c.value,
              class: "lkt-field--image-main"
            }, null, 8, ["src"])) : se("", !0)
          ]),
          _: 1
        }, 8, ["click-ref", "text", "disabled"]))
      ], 64);
    };
  }
}), su = { class: "lkt-calendar" }, au = { class: "calendar" }, ru = { class: "lkt-calendar--header-grid" }, uu = ["innerHTML"], du = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, cu = { class: "lkt-calendar--day lkt-calendar--filling-day" }, fu = /* @__PURE__ */ ve({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const i = t, n = e, l = X(n.modelValue);
    ce(() => n.modelValue, (p) => l.value = p, { deep: !0 }), ce(l, (p) => i("update:modelValue", p));
    const a = X(/* @__PURE__ */ new Date()), u = X(/* @__PURE__ */ new Date());
    Qi(l.value) && typeof l.value < "u" && (u.value = new Date(l.value.getFullYear(), l.value.getMonth(), l.value.getDate()));
    const c = X(u.value.getFullYear()), o = X(u.value.getMonth()), b = X(!1), d = X(Zt("Y-m", u.value)), g = ee(() => new Date(c.value, o.value + 1, 0).getDate()), w = ee(() => new Date(c.value, o.value, 1).getDay()), S = () => {
      o.value > 11 && (o.value = 0, c.value += 1), o.value += 1, u.value.setFullYear(c.value, o.value), u.value = new Date(u.value), d.value = Zt("Y-m", u.value);
    }, L = () => {
      o.value < 0 && (o.value = 11, c.value -= 1), o.value -= 1, u.value.setFullYear(c.value, o.value), u.value = new Date(u.value), d.value = Zt("Y-m", u.value);
    }, A = (p) => typeof l.value > "u" || l.value.getFullYear() !== c.value || l.value.getMonth() !== o.value ? !1 : l.value.getDate() === p, s = (p) => typeof l.value > "u" || a.value.getFullYear() !== c.value || a.value.getMonth() !== o.value ? !1 : a.value.getDate() === p, r = (p) => ({
      "is-picked": A(p),
      "is-today": s(p)
    }), f = (p) => {
      var m;
      (m = l.value) == null || m.setFullYear(c.value, o.value, p), l.value = new Date(l.value);
    };
    return (p, m) => {
      const v = de("lkt-button");
      return H(), ne("div", su, [
        le("div", au, [
          le("header", ru, [
            Y(v, {
              class: "lkt-calendar--day",
              onClick: L
            }, {
              default: re(() => m[0] || (m[0] = [
                zt("◀")
              ])),
              _: 1
            }),
            le("div", {
              class: "lkt-calendar--header-text",
              innerHTML: d.value
            }, null, 8, uu),
            Y(v, {
              class: "lkt-calendar--day",
              onClick: S
            }, {
              default: re(() => m[1] || (m[1] = [
                zt("▶")
              ])),
              _: 1
            })
          ]),
          b.value ? se("", !0) : (H(), ne("div", du, [
            m[2] || (m[2] = vo('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (H(!0), ne(Ve, null, Xe(w.value, (h) => (H(), ne("div", cu))), 256)),
            (H(!0), ne(Ve, null, Xe(g.value, (h) => (H(), j(v, {
              class: Te(["lkt-calendar--day", r(h)]),
              text: h.toString(),
              onClick: () => f(h)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        m[3] || (m[3] = le("div", { class: "display-selected" }, [
          le("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), hu = /* @__PURE__ */ ve({
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
    const i = t, n = e, l = X(void 0), a = X(""), u = X(n.modelValue), c = ee(() => te.dateReadFormat ? te.dateReadFormat : te.langDateReadFormat[n.lang] ? te.langDateReadFormat[n.lang] : te.defaultDateReadFormat ? te.defaultDateReadFormat : "Y-m-d"), o = (d) => {
      let g = new Date(d);
      Qi(g) && (l.value = g);
    }, b = () => {
      a.value = kn(l.value, c.value);
    };
    return ce(() => n.modelValue, (d) => {
      u.value = d, o(d);
    }), ce(u, (d) => i("update:modelValue", d)), ce(l, (d) => {
      typeof d > "u" ? u.value = "" : u.value = Zt("Y-m-d", d), b();
    }, { deep: !0 }), Xi(() => {
      o(n.modelValue), b();
    }), (d, g) => {
      const w = de("lkt-button");
      return H(), j(w, {
        type: I(jt).Tooltip,
        class: "lkt-field--toggle-button",
        text: a.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: I(yn).Bottom,
          locationX: I(bn).LeftCorner
        }
      }, {
        tooltip: re(() => [
          Y(fu, {
            modelValue: l.value,
            "onUpdate:modelValue": g[0] || (g[0] = (S) => l.value = S)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["type", "text", "tooltip"]);
    };
  }
}), fn = (e, t) => typeof e == "object" && !Array.isArray(e) ? e[t] : e, Wi = (e, t, i) => {
  if (t) {
    let n = '<i class="' + t + '"></i>';
    i ? e += n : e = n + e;
  }
  return e;
}, pu = { key: 1 }, Kn = /* @__PURE__ */ ve({
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
    const n = X(e.modelValue), l = (a, u) => {
    };
    return (a, u) => {
      const c = de("lkt-button");
      return H(), j(c, {
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        onClick: l
      }, {
        default: re(() => [
          n.value ? st(a.$slots, "item", {
            key: 0,
            item: n.value
          }) : (H(), ne("p", pu, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), mu = /* @__PURE__ */ ve({
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
    const t = Ji(), i = e, n = X(i.modelValue), l = ee(() => typeof i.max == "boolean" || n.value.length < i.max ? ["modal-create"] : []);
    return (a, u) => {
      const c = de("lkt-table");
      return H(), j(c, {
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
        item: re(({ item: o, index: b, isLoading: d, canCreate: g, canRead: w, canUpdate: S, canDrop: L, doDrop: A }) => [
          Y(Kn, {
            modelValue: n.value[b],
            "onUpdate:modelValue": (s) => n.value[b] = s,
            "item-type": a.itemType
          }, Vt({ _: 2 }, [
            I(t).item ? {
              name: "item",
              fn: re(({ item: s }) => [
                st(a.$slots, "item", {
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
}), Ye = /* @__PURE__ */ ve({
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
    return (a, u) => u[0] || (Sl(-1, !0), (u[0] = le("div", {
      contenteditable: a.disabled ? "false" : "true",
      class: "lkt-element-editable-text",
      onInput: (c) => n(c),
      onKeydown: (c) => l(c),
      innerHTML: a.modelValue
    }, null, 40, ["contenteditable", "onInput", "onKeydown", "innerHTML"])).cacheIndex = 0, Sl(1), u[0]);
  }
}), gu = { class: "lkt-element-content" }, vu = {
  key: 0,
  class: "lkt-element-actions"
}, Yi = /* @__PURE__ */ ve({
  __name: "ElementComponent",
  props: {
    element: {},
    parent: {},
    parentChildren: {},
    index: { default: -1 },
    lang: {},
    isPreview: { type: Boolean, default: !1 },
    canRenderActions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, i = X(!1), n = (u, c = "text") => {
      const o = u.target.innerHTML.trim();
      o !== t.element.props[c][a] && (t.element.props[c][a] = o);
    }, l = (u) => {
      if (!u.layout || t.isPreview) return "";
      let c = [];
      u.layout.type === qe.FlexRow && (!u.layout.amountOfItems || u.layout.amountOfItems.length === 0) ? c.push("lkt-flex-row") : u.layout.type === qe.FlexRows && (!u.layout.amountOfItems || u.layout.amountOfItems.length === 0) ? c.push("lkt-flex-rows") : u.layout.type === qe.FlexColumn && c.push("lkt-flex-column"), u.layout.amountOfItems && u.layout.amountOfItems.length > 0 && (u.layout.type === qe.FlexRow ? c.push(u.layout.amountOfItems.map((b) => `lkt-flex-row-${b}`).join(" ")) : u.layout.type === qe.FlexRows ? c.push(u.layout.amountOfItems.map((b) => `lkt-flex-rows-${b}`).join(" ")) : c.push(u.layout.amountOfItems.map((b) => `lkt-grid-${b}`).join(" "))), u.layout.alignItems && u.layout.alignItems.length > 0 && c.push(u.layout.alignItems.join(" ")), u.layout.justifyContent && u.layout.justifyContent.length > 0 && c.push(u.layout.justifyContent.join(" ")), c.length > 0 && c.push("layout-mode");
      let o = c.join(" ");
      return u.layout.type === qe.FlexRows && (o = o.replace("flex-row-", "flex-rows-")), o;
    }, a = t.lang ?? mn();
    return (u, c) => {
      var A, s;
      const o = de("lkt-box"), b = de("lkt-accordion"), d = de("lkt-image"), g = de("lkt-icon"), w = de("lkt-header"), S = de("lkt-button"), L = de("lkt-anchor");
      return H(), ne("div", {
        class: Te(["lkt-element", `is-${u.element.type} is-${u.element.id}`])
      }, [
        le("div", gu, [
          u.element.type === I(he).LktText ? (H(), j(Ye, {
            key: 0,
            modelValue: u.element.props.text[I(a)],
            "onUpdate:modelValue": c[0] || (c[0] = (r) => u.element.props.text[I(a)] = r),
            onInput: c[1] || (c[1] = (r) => n(r))
          }, null, 8, ["modelValue"])) : u.element.type === I(he).LktLayoutBox ? (H(), j(o, {
            key: 1,
            icon: u.element.config.hasHeader && u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, Vt({
            default: re(() => [
              Y(Ri, {
                modelValue: u.element.children,
                "onUpdate:modelValue": c[4] || (c[4] = (r) => u.element.children = r),
                "layout-selector": l(u.element),
                "is-child": "",
                lang: I(a),
                "is-preview": u.isPreview,
                parent: u.element
              }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent"])
            ]),
            _: 2
          }, [
            (A = u.element.config) != null && A.hasHeader ? {
              name: "header",
              fn: re(() => [
                Y(Ye, {
                  modelValue: u.element.props.header[I(a)],
                  "onUpdate:modelValue": c[2] || (c[2] = (r) => u.element.props.header[I(a)] = r),
                  onInput: c[3] || (c[3] = (r) => n(r, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : u.element.type === I(he).LktTextBox ? (H(), j(o, {
            key: 2,
            icon: u.element.config.hasHeader && u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, Vt({
            default: re(() => [
              Y(Ye, {
                modelValue: u.element.props.text[I(a)],
                "onUpdate:modelValue": c[7] || (c[7] = (r) => u.element.props.text[I(a)] = r),
                onInput: c[8] || (c[8] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 2
          }, [
            (s = u.element.config) != null && s.hasHeader ? {
              name: "header",
              fn: re(() => [
                Y(Ye, {
                  modelValue: u.element.props.header[I(a)],
                  "onUpdate:modelValue": c[5] || (c[5] = (r) => u.element.props.header[I(a)] = r),
                  onInput: c[6] || (c[6] = (r) => n(r, "header"))
                }, null, 8, ["modelValue"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["icon", "class"])) : u.element.type === I(he).LktLayoutAccordion ? (H(), j(b, {
            key: 3,
            icon: u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, {
            header: re(() => [
              Y(Ye, {
                modelValue: u.element.props.header[I(a)],
                "onUpdate:modelValue": c[9] || (c[9] = (r) => u.element.props.header[I(a)] = r),
                onInput: c[10] || (c[10] = (r) => n(r, "header"))
              }, null, 8, ["modelValue"])
            ]),
            default: re(() => [
              Y(Ri, {
                modelValue: u.element.children,
                "onUpdate:modelValue": c[11] || (c[11] = (r) => u.element.children = r),
                "layout-selector": l(u.element),
                "is-child": "",
                lang: I(a),
                "is-preview": u.isPreview,
                parent: u.element
              }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : u.element.type === I(he).LktTextAccordion ? (H(), j(b, {
            key: 4,
            icon: u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, {
            header: re(() => [
              Y(Ye, {
                modelValue: u.element.props.header[I(a)],
                "onUpdate:modelValue": c[12] || (c[12] = (r) => u.element.props.header[I(a)] = r),
                onInput: c[13] || (c[13] = (r) => n(r, "header"))
              }, null, 8, ["modelValue"])
            ]),
            default: re(() => [
              Y(Ye, {
                modelValue: u.element.props.text[I(a)],
                "onUpdate:modelValue": c[14] || (c[14] = (r) => u.element.props.text[I(a)] = r),
                onInput: c[15] || (c[15] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : u.element.type === I(he).LktImage ? (H(), j(d, {
            key: 5,
            class: Te(u.element.props.class),
            src: u.element.props.src
          }, {
            text: re(() => [
              Y(Ye, {
                modelValue: u.element.props.text[I(a)],
                "onUpdate:modelValue": c[16] || (c[16] = (r) => u.element.props.text[I(a)] = r),
                onInput: c[17] || (c[17] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["class", "src"])) : u.element.type === I(he).LktIcon ? (H(), j(g, {
            key: 6,
            icon: u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, {
            text: re(() => [
              Y(Ye, {
                modelValue: u.element.props.text[I(a)],
                "onUpdate:modelValue": c[18] || (c[18] = (r) => u.element.props.text[I(a)] = r),
                onInput: c[19] || (c[19] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : u.element.type === I(he).LktHeader ? (H(), j(w, {
            key: 7,
            icon: u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, {
            text: re(() => [
              Y(Ye, {
                modelValue: u.element.props.text[I(a)],
                "onUpdate:modelValue": c[20] || (c[20] = (r) => u.element.props.text[I(a)] = r),
                onInput: c[21] || (c[21] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : u.element.type === I(he).LktButton ? (H(), j(S, {
            key: 8,
            icon: u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, {
            text: re(() => [
              Y(Ye, {
                modelValue: u.element.props.text[I(a)],
                "onUpdate:modelValue": c[22] || (c[22] = (r) => u.element.props.text[I(a)] = r),
                onInput: c[23] || (c[23] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : u.element.type === I(he).LktAnchor ? (H(), j(L, {
            key: 9,
            icon: u.element.config.hasIcon ? u.element.props.icon : "",
            class: Te(u.element.props.class)
          }, {
            text: re(() => [
              Y(Ye, {
                modelValue: u.element.props.text[I(a)],
                "onUpdate:modelValue": c[24] || (c[24] = (r) => u.element.props.text[I(a)] = r),
                onInput: c[25] || (c[25] = (r) => n(r, "text"))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["icon", "class"])) : u.element.type === I(he).LktLayout ? (H(), j(Ri, {
            key: 10,
            modelValue: u.element.children,
            "onUpdate:modelValue": c[26] || (c[26] = (r) => u.element.children = r),
            "layout-selector": l(u.element),
            "is-child": "",
            lang: I(a),
            "is-preview": u.isPreview,
            parent: u.element
          }, null, 8, ["modelValue", "layout-selector", "lang", "is-preview", "parent"])) : (H(), j(Tt(u.element.component), ke(ye({ key: 11 }, u.element.props)), null, 16))
        ]),
        !i.value && u.canRenderActions ? (H(), ne("div", vu, [
          Y(S, ke(Ne({
            type: I(jt).Button,
            text: u.element.type,
            icon: "lkt-icn-settings-cogs",
            modal: "lkt-field-element-config",
            modalKey: `${u.index}--${u.element.type}--${u.element.id}`,
            modalData: {
              element: u.element,
              parent: u.parent,
              parentChildren: u.parentChildren,
              indexInParentChildren: u.index
            }
          })), null, 16)
        ])) : se("", !0)
      ], 2);
    };
  }
}), Ri = /* @__PURE__ */ ve({
  __name: "ComponentManager",
  props: {
    modelValue: {
      type: Array,
      required: !0
    },
    parent: {
      type: Object
    },
    layoutSelector: {
      type: String
    },
    lang: {
      type: String
    },
    isChild: {
      type: Boolean,
      default: !1
    },
    isPreview: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "add-text",
    "add-element",
    "elements-reordered",
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const i = e, n = X(i.modelValue), l = X(!1), a = X(null), u = t;
    return ce(n, (c) => {
      u("update:modelValue", c);
    }), (c, o) => {
      const b = de("lkt-table");
      return H(), ne("div", null, [
        Y(b, ye({
          ref_key: "tableRef",
          ref: a,
          class: "lkt-elements-table",
          modelValue: n.value,
          "onUpdate:modelValue": o[0] || (o[0] = (d) => n.value = d)
        }, {
          type: e.isPreview ? I(qi).Table : I(qi).Item,
          slotItemVar: "element",
          editMode: !0,
          hideTableHeader: !0,
          perms: e.isChild ? [I(Pt).Update, I(Pt).Sort] : [I(Pt).Create, I(Pt).Update, I(Pt).Sort],
          itemsContainerClass: e.isChild ? e.layoutSelector : "lkt-grid-1",
          itemContainerClass: (d) => {
            if (!d.layout || i.isPreview) return "";
            let g = [];
            return d.layout.columns && d.layout.columns.length > 0 && g.push(d.layout.columns.join(" ")), g.join(" ");
          },
          requiredItemsForBottomCreate: 10,
          drag: {
            enabled: e.isPreview,
            isDisabled: !1,
            canRender: !0,
            isValid: !0
          },
          createButton: e.isChild ? !1 : {
            text: "Add element",
            icon: "lkt-icn-more",
            modal: "lkt-field-add-element-config",
            modalData: {
              items: n.value,
              index: n.value.length,
              onAppend: () => {
                l.value = !0, qt(() => {
                  l.value = !1;
                });
              }
            }
          }
        }), {
          item: re(({ element: d, index: g }) => [
            Y(Yi, {
              element: d,
              index: g,
              lang: e.lang,
              "is-preview": e.isPreview,
              "parent-children": n.value,
              parent: e.parent
            }, null, 8, ["element", "index", "lang", "is-preview", "parent-children", "parent"])
          ]),
          _: 1
        }, 16, ["modelValue"])
      ]);
    };
  }
}), bu = { class: "lkt-elements-toolbar-group" }, yu = /* @__PURE__ */ ve({
  __name: "EditorToolbar",
  props: {
    elements: {},
    toolbarTop: {},
    fileBrowserConfig: {}
  },
  setup(e) {
    const t = e, i = X([]);
    let n = X(-1);
    const l = () => {
      i.value = i.value.slice(0, n.value + 1), i.value.push([...t.elements]), n.value = i.value.length - 1;
    }, a = (s) => {
      document.execCommand(s, !1), l();
    }, u = (s) => {
      const r = s.target.value;
      document.execCommand("foreColor", !1, r), l();
    }, c = (s) => {
      const r = s.target.value;
      document.execCommand("backColor", !1, r), l();
    }, o = (s) => {
      const r = s.target.value;
      document.execCommand("fontSize", !1, r), l();
    }, b = (s) => {
      const r = s.target.value;
      document.execCommand("fontName", !1, r), l();
    }, d = (s) => {
      document.execCommand("justify" + s, !1), l();
    };
    function g(s) {
      const r = window.getSelection();
      if (!r.rangeCount) return;
      const f = r.getRangeAt(0);
      let p = f.commonAncestorContainer;
      if (p.nodeType === Node.TEXT_NODE && (p = p.parentNode), p.tagName && p.tagName.toLowerCase() === s.toLowerCase()) {
        w(p);
        return;
      }
      const m = f.extractContents(), v = document.createElement(s);
      let h = !1;
      m.childNodes.forEach((y) => {
        y.nodeType === 1 && getComputedStyle(y).display === "block" && (h = !0);
      }), h ? f.insertNode(m) : (v.appendChild(m), f.insertNode(v)), l();
    }
    function w(s) {
      const r = s.parentNode;
      for (; s.firstChild; )
        r.insertBefore(s.firstChild, s);
      r.removeChild(s);
    }
    const S = () => {
      n.value > 0 && (n.value--, t.elements = [...i.value[n.value]]);
    }, L = () => {
      n.value < i.value.length - 1 && (n.value++, t.elements = [...i.value[n.value]]);
    }, A = () => {
      const s = prompt("Ingrese la URL del enlace:");
      s && (document.execCommand("createLink", !1, s), l());
    };
    return (s, r) => {
      const f = de("lkt-button");
      return H(), ne("div", {
        class: "lkt-wysiwyg-toolbar lkt-tooltip",
        style: $i({ top: s.toolbarTop + "px" })
      }, [
        le("div", bu, [
          Y(f, ye({
            text: "b"
          }, {
            onClick: r[0] || (r[0] = (p) => a("bold"))
          }), null, 16),
          Y(f, ye({
            text: "i"
          }, {
            onClick: r[1] || (r[1] = (p) => a("italic"))
          }), null, 16),
          Y(f, ye({
            text: "u"
          }, {
            onClick: r[2] || (r[2] = (p) => a("underline"))
          }), null, 16),
          Y(f, ye({
            text: "strikeThrough"
          }, {
            onClick: r[3] || (r[3] = (p) => a("strikeThrough"))
          }), null, 16)
        ]),
        le("button", {
          onClick: r[4] || (r[4] = (p) => a("subscript"))
        }, "Subíndice"),
        le("button", {
          onClick: r[5] || (r[5] = (p) => a("superscript"))
        }, "Superíndice"),
        le("button", {
          onClick: r[6] || (r[6] = (p) => g("p"))
        }, "Párrafo"),
        le("input", {
          type: "color",
          onInput: u,
          title: "Color del texto"
        }, null, 32),
        le("input", {
          type: "color",
          onInput: c,
          title: "Color de fondo"
        }, null, 32),
        le("select", {
          onChange: r[7] || (r[7] = (p) => o(p))
        }, r[14] || (r[14] = [
          le("option", { value: "3" }, "Mediano", -1),
          le("option", { value: "5" }, "Grande", -1),
          le("option", { value: "7" }, "Extra Grande", -1)
        ]), 32),
        le("select", {
          onChange: r[8] || (r[8] = (p) => b(p))
        }, r[15] || (r[15] = [
          le("option", { value: "Arial" }, "Arial", -1),
          le("option", { value: "Courier New" }, "Courier New", -1),
          le("option", { value: "Georgia" }, "Georgia", -1),
          le("option", { value: "Times New Roman" }, "Times New Roman", -1)
        ]), 32),
        le("button", {
          onClick: r[9] || (r[9] = (p) => d("left"))
        }, "Alineación izquierda"),
        le("button", {
          onClick: r[10] || (r[10] = (p) => d("center"))
        }, "Centrar"),
        le("button", {
          onClick: r[11] || (r[11] = (p) => d("right"))
        }, "Alineación derecha"),
        le("button", {
          onClick: r[12] || (r[12] = (p) => a("insertUnorderedList"))
        }, "Lista no ordenada"),
        le("button", {
          onClick: r[13] || (r[13] = (p) => a("insertOrderedList"))
        }, "Lista ordenada"),
        le("button", { onClick: A }, "Insertar Enlace"),
        le("button", { onClick: S }, "Deshacer"),
        le("button", { onClick: L }, "Rehacer"),
        Y(f, ke(Ne({
          text: "Add element",
          icon: "lkt-icn-more",
          modal: "lkt-field-add-element-config",
          modalData: {
            items: s.elements,
            index: s.elements.length
          }
        })), null, 16),
        Y(f, ke(Ne({
          text: "File browser",
          icon: "lkt-icn-more",
          modal: "lkt-file-browser",
          modalData: {
            fileBrowserConfig: s.fileBrowserConfig
          }
        })), null, 16)
      ], 4);
    };
  }
}), _u = /* @__PURE__ */ ve({
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
    const i = e, n = X([]);
    i.modelValue.length > 0 && (n.value = (w = i.modelValue) == null ? void 0 : w.map((S) => new Eo(S)));
    const l = t;
    ce(() => i.modelValue, (S) => {
      n.value = S;
    }, { deep: !0 }), ce(n, (S) => {
      l("update:modelValue", S);
    });
    const a = X([]);
    let u = X(-1);
    const c = () => {
      a.value = a.value.slice(0, u.value + 1), a.value.push([...n.value]), u.value = a.value.length - 1;
    }, o = () => {
      c();
    }, b = (S) => {
      n.value.splice(S, 1), c();
    };
    ce(n, (S) => {
      l("update:modelValue", S);
    }, { deep: !0 });
    const d = X(null), g = X(0);
    return ce(d, (S) => {
      S ? g.value = d.value.getBoundingClientRect().top : g.value = 0;
    }), (S, L) => (H(), ne("div", {
      ref_key: "containerRef",
      ref: d,
      class: "lkt-wysiwyg-container"
    }, [
      Y(yu, {
        elements: n.value,
        "toolbar-top": g.value,
        "file-browser-config": S.fileBrowserConfig
      }, null, 8, ["elements", "toolbar-top", "file-browser-config"]),
      Y(Ri, {
        modelValue: n.value,
        "onUpdate:modelValue": L[0] || (L[0] = (A) => n.value = A),
        onDeleteElement: b,
        onAddElement: o
      }, null, 8, ["modelValue"])
    ], 512));
  }
}), Cu = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, l] of t)
    i[n] = l;
  return i;
}, wu = /* @__PURE__ */ Cu(_u, [["__scopeId", "data-v-5cf03291"]]), ku = /* @__PURE__ */ ve({
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
      const o = de("lkt-button");
      return H(), j(o, ye(u.config, {
        type: u.config.type ? u.config.type : I(jt).FileUpload,
        resource: u.config.resource ?? u.fileUploadHttp.resource,
        "resource-data": u.config.resourceData ?? u.fileUploadHttp.data,
        text: u.insideEllipsis ? u.config.text : "",
        class: [l.value, "lkt-field--btn-file-upload"],
        icon: "lkt-icn-upload",
        onClick: a
      }), null, 16, ["type", "resource", "resource-data", "text", "class"]);
    };
  }
}), xu = ["data-show-ui", "data-labeled"], Su = ["for", "innerHTML"], Lu = { class: "lkt-field-content" }, Eu = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, Tu = {
  key: 1,
  class: "lkt-field--icon"
}, zu = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Bu = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], Nu = {
  key: 4,
  class: "lkt-field--info-nav"
}, Au = { key: 0 }, Ru = ["data-index", "onClick"], Ue = /* @__PURE__ */ ve({
  __name: "LktField",
  props: /* @__PURE__ */ bo({
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
  }, Ro(Io)),
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
    const n = i, l = Ji(), a = e, u = Co(16);
    let c = xt(a.modal, a.prop), o = xt(a.modalKey, a.prop), b = xt(a.icon, a.prop), d = xt(a.download, a.prop), g = xt(a.itemType, a.prop);
    !c && typeof g != "function" && g && typeof te.modalPerItemType[g] < "u" && (c = te.modalPerItemType[g]);
    const w = X(null);
    let S = a.featuredButton, L = a.modelValue;
    a.multiple && To.includes(a.type) ? (!L || !Array.isArray(L)) && (L = []) : St.includes(a.type) ? typeof L != "boolean" && (L = !1) : a.type === Z.Date && !b ? b = te.defaultDateIcon : a.type === Z.Number && a.canStep && S === "" && (S = te.defaultNumberFeaturedButton);
    const A = X(L), s = X(L), r = X(a.valid), f = X(!1), p = X(!1), m = X(!1), v = X(!1), h = X([]), y = X(!a.readMode), C = X(a.fileName), _ = X(a.fileName), x = X(null), D = X(null), T = X(null), z = X(!1), N = X(!1), $ = X(!1), O = X(""), P = X(-1), V = X([]), W = X(!1), R = X(!1), M = X(!1), B = ee(() => gn.value), U = ee(() => (B.value, te.dateReadFormat ? te.dateReadFormat : te.langDateReadFormat[B.value] ? te.langDateReadFormat[B.value] : te.defaultDateReadFormat ? te.defaultDateReadFormat : "Y-m-d")), k = [Z.Card, Z.Elements].includes(a.type) ? s : X(fn(s.value, B.value)), F = X(k), G = X([]), q = X([]), ie = () => {
      const E = (K) => {
        var Ee;
        if (q.value = Pi(G.value, K, !0, (Ee = a.optionsConfig) == null ? void 0 : Ee.filter), a.multiple) {
          for (let Ie in k.value) {
            let Be;
            a.optionValueType === "option" ? Be = li(G.value, k.value[Ie].value) : Be = li(G.value, k.value[Ie]), typeof Be < "u" && (V.value.length === 0 ? V.value.push(Be) : V.value.splice(Ie, 1, Be));
          }
          return;
        }
        let ae;
        a.optionValueType === "option" ? ae = li(G.value, k.value.map((Ie) => Ie.value)) : ae = li(G.value, k.value), typeof ae < "u" && (V.value.length === 0 ? V.value.push(ae) : V.value.splice(0, 1, ae));
      };
      a.type === Z.Text ? E(k.value) : a.type === Z.Select && E(O.value);
    }, J = ee(() => a.type === Z.Date), Q = ee(() => a.type === Z.File), oe = ee(() => a.type === Z.Image), pe = ee(() => a.type === Z.Textarea ? "textarea" : a.type === Z.Html ? "div" : "input"), ge = ee(() => a.type === Z.Date ? s.value !== A.value : k.value !== F.value), ue = ee(() => typeof a.disabled == "function" ? a.disabled(a.prop) : a.disabled), be = ee(() => {
      let E = 0;
      return ol.value && ++E, sl.value && ++E, al.value && ++E, rl.value && ++E, dl.value && ++E, cl.value && ++E, ul.value && ++E, Rt.value && ++E, il.value && ++E, (a.customButtonText || a.customButtonClass) && ++E, E > 0 && a.type === Z.Textarea || E > 0 && a.type === Z.Html || E > 0 && a.infoButtonEllipsis ? 1 : E;
    }), Ae = ee(() => Fi.value && S === "i18n" || Kt.value && S === "password" || Je.value && S === "subtract"), $e = ee(() => be.value > 0), Ce = ee(() => a.autocomplete === !0 ? "on" : "off"), Re = ee(() => a.type === Z.Date ? s.value !== "" : k.value !== ""), Le = ee(() => a.type === Z.Password && f.value === !0 ? "text" : a.type === Z.Email ? "email" : a.type === Z.Password ? "password" : a.type === Z.Number ? "number" : a.type === Z.Tel ? "tel" : a.type === Z.Search ? "search" : a.type === Z.Color ? "color" : a.type === Z.Range ? "range" : "text"), rt = ee(() => {
      var K;
      const E = [];
      return E.push(`is-${a.type}`), St.includes(a.type) && (E.push("is-boolean"), k.value && E.push("is-checked")), ge.value && E.push("is-changed"), ue.value && E.push("is-disabled"), a.multiple && E.push("is-multiple"), Ae.value && E.push("with-atn-btn"), $e.value && E.push("with-info-btn"), a.mandatory && y.value && E.push("is-mandatory-field"), y.value && p.value && E.push("has-focus"), z.value && E.push("show-options"), a.searchable && W.value && E.push("is-searching"), a.hidden && E.push("lkt-hidden-field"), a.type !== Z.Range && ((K = a.validation) == null ? void 0 : K.type) === El.Auto && v.value && m.value && (h.value.length > 0 ? E.push("is-invalid") : E.push("is-valid")), [Z.Textarea, Z.Html].includes(a.type) && E.push("is-lg"), [Z.Image].includes(a.type) && E.push("is-xl"), a.multiple && a.type === Z.Select && E.push("is-lg"), a.multiple && (y.value ? E.push(`has-multiple-display-${a.multipleDisplayEdition}`) : E.push(`has-multiple-display-${a.multipleDisplay}`)), be.value > 0 && E.push("has-icons", `has-icons-${be.value}`), E.push(y.value ? "is-editable" : "is-read"), a.type !== Z.Range && (E.push(r.value ? "is-valid" : "is-error"), E.push(Re.value ? "is-filled" : "is-empty")), E.join(" ");
    }), Fe = ee(() => {
      var E;
      return typeof k.value == "number" ? (B.value, (E = te.langNumberFormat[B.value]) != null && E.amountOfDecimals ? Ll(
        k.value,
        te.langNumberFormat[B.value].amountOfDecimals,
        te.langNumberFormat[B.value].decimalSeparator,
        te.langNumberFormat[B.value].thousandsSeparator,
        te.langNumberFormat[B.value].removeDecimalsIfZero
      ) : te.amountOfDecimals ? Ll(
        k.value,
        te.amountOfDecimals,
        te.decimalSeparator,
        te.thousandsSeparator,
        te.removeDecimalsIfZero
      ) : k.value.toString()) : a.type === Z.Html ? hn(k.value) : k.value;
    }), je = ee(() => typeof a.min == "string" ? parseFloat(a.min) : typeof a.min == "number" ? a.min : !1), He = ee(() => typeof a.max == "string" ? parseFloat(a.max) : typeof a.max == "number" ? a.max : !1), _e = ee(() => {
      var E, K, ae, Ee;
      if (St.includes(a.type)) {
        if (k.value === !0 && typeof a.configOn == "object")
          return Wi(
            Wt(((E = a.configOn) == null ? void 0 : E.label) ?? a.label),
            ((K = a.configOn) == null ? void 0 : K.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
        if (k.value !== !0 && typeof a.configOff == "object")
          return Wi(
            Wt(((ae = a.configOff) == null ? void 0 : ae.label) ?? a.label),
            ((Ee = a.configOff) == null ? void 0 : Ee.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
      }
      return Wi(
        Wt(a.label),
        a.labelIcon,
        a.labelIconAtEnd
      );
    }), Bt = ee(() => Wt(a.placeholder)), ut = ee(() => Wt(a.searchPlaceholder)), Pe = ee(() => typeof c == "function" ? c(a.prop) : xt(c, a.prop)), ze = ee(() => typeof a.modalData == "function" ? a.modalData(a.prop) : a.modalData), We = ee(() => typeof b == "function" ? b(a.prop) : xt(b, a.prop)), Oe = ee(() => a.type === Z.File ? te.acceptTypes.file : a.type === Z.Image ? te.acceptTypes.image : ""), Nt = ee(() => a.errorMessage), At = ee(() => a.infoMessage), Je = ee(() => a.canStep && y.value && a.type === Z.Number), Rt = ee(() => a.canStep && y.value && a.type === Z.Number && S !== "subtract"), il = ee(() => a.canStep && y.value && a.type === Z.Number), ll = ee(() => a.canUndo && ge.value && y.value && !zo.includes(a.type)), nl = ee(() => a.canClear && Re.value && y.value && !Bo.includes(a.type)), Fi = ee(() => a.canI18n && typeof s.value == "object" && y.value), Kt = ee(() => a.type === Z.Password && a.showPassword && Re.value && y.value), ol = ee(() => ll.value && !a.infoButtonEllipsis), sl = ee(() => nl.value && !a.infoButtonEllipsis), al = ee(() => Kt.value && !a.infoButtonEllipsis && S !== "password"), rl = ee(() => Fi.value && !a.infoButtonEllipsis && S !== "i18n"), ul = ee(() => {
      var E, K, ae, Ee;
      return a.type === Z.Calc || a.type === Z.Search || ![Z.Select, Z.Text].includes(a.type) ? !1 : q.value.length > 0 || G.value.length > 0 || typeof ((K = (E = a.optionsConfig) == null ? void 0 : E.http) == null ? void 0 : K.resource) < "u" && ((Ee = (ae = a.optionsConfig) == null ? void 0 : ae.http) == null ? void 0 : Ee.resource) !== "";
    }), dl = ee(() => a.allowReadModeSwitch && !a.infoButtonEllipsis), cl = ee(() => typeof a.fileUploadButton == "object" && Object.keys(a.fileUploadButton).length > 0), fl = () => {
      qt(() => {
        w.value && w.value.focus();
      });
    }, Yn = async () => {
      var E;
      if ((E = a.validation) != null && E.resource) {
        n("validating");
        const K = await Zi(a.validation.resource, {
          ...a.validation.resourceData,
          value: k.value
        });
        n("validation", K);
      }
    };
    ce(() => {
      var E;
      return (E = a.validation) == null ? void 0 : E.checkEqualTo;
    }, () => It()), ce(() => a.readMode, (E) => y.value = !E), ce(() => a.valid, (E) => r.value = E), ce(() => a.modelValue, (E) => {
      [Z.Card, Z.Elements].includes(a.type) ? k.value = E : a.type !== Z.Date && (k.value = fn(E, B.value));
    }), ce(k, (E) => {
      typeof s.value == "object" && [Z.Card, Z.Elements].includes(a.type) ? s.value[B.value] = E : s.value = E, a.type === Z.Number && uo(E);
    }), ce(s, (E) => {
      var K;
      $.value && y.value && (n("update:modelValue", E), a.type === Z.Select && typeof ((K = a.optionsConfig) == null ? void 0 : K.filter) == "function" && Dt(O.value, !1), Yn(), It());
    }, { deep: !0 }), ce(r, (E) => {
      n("update:valid", E);
    }), ce(G, (E) => {
      n("update:options", E);
    }), ce(() => a.options, (E) => {
      G.value = Di(E, a.prop), a.type === Z.Select ? Dt(O.value, !1) : Dt(k.value, !1);
    });
    const It = () => {
      var E;
      ((E = a.validation) == null ? void 0 : E.trigger) === No.Blur && (!m.value || !v.value) || a.type !== Z.Range && (h.value = [], qt(() => {
        var Ee, Ie, Be, Qe, et, tt, it, lt, nt, ft, ht, pt, mt;
        let K = typeof a.min > "u" ? 0 : parseFloat(a.min), ae = typeof a.max > "u" ? 0 : parseFloat(a.max);
        if (a.type === Z.Number && typeof a.min < "u" && typeof a.max < "u" && (k.value < K || k.value > ae)) {
          h.value.push(De.createNumBetween(K, ae, Me.Ko)), r.value = !1;
          return;
        }
        ![Z.Number, Z.Email].includes(a.type) && a.mandatory && k.value === "" ? h.value.push(De.createEmpty(Me.Ko)) : a.type !== Z.Email && K > 0 && (a.type !== Z.Number && k.value.length < K ? h.value.push(De.createMinStr(K, Me.Ko)) : k.value < K && h.value.push(De.createMinNum(K, Me.Ko))), ae > 0 && (a.type !== Z.Number && k.value.length > ae ? h.value.push(De.createMaxStr(ae, Me.Ko)) : k.value > ae && h.value.push(De.createMaxNum(ae, Me.Ko))), a.type === Z.Email && (a.mandatory && k.value === "" ? h.value.push(De.createEmpty(Me.Ko)) : wo(k.value) || h.value.push(De.createEmail(Me.Ko))), Ao.includes(a.type) && (ps(h.value, k.value, (Ee = a.validation) == null ? void 0 : Ee.minNumbers, (Ie = a.validation) == null ? void 0 : Ie.maxNumbers), ms(h.value, k.value, (Be = a.validation) == null ? void 0 : Be.minUpperChars, (Qe = a.validation) == null ? void 0 : Qe.maxUpperChars), gs(h.value, k.value, (et = a.validation) == null ? void 0 : et.minLowerChars, (tt = a.validation) == null ? void 0 : tt.maxLowerChars), vs(h.value, k.value, (it = a.validation) == null ? void 0 : it.minChars, (lt = a.validation) == null ? void 0 : lt.maxChars), bs(h.value, k.value, (nt = a.validation) == null ? void 0 : nt.minSpecialChars, (ft = a.validation) == null ? void 0 : ft.maxSpecialChars)), (ht = a.validation) != null && ht.checkEqualTo && k.value !== ((pt = a.validation) == null ? void 0 : pt.checkEqualTo) && h.value.push(De.createEqualTo((mt = a.validation) == null ? void 0 : mt.checkEqualTo, Me.Ko)), r.value = h.value.length === 0;
      }));
    }, Dt = (E, K = !0) => {
      var ae, Ee, Ie, Be, Qe, et, tt, it, lt, nt;
      if (G.value.length === 0) {
        q.value = [];
        return;
      }
      switch (a.type) {
        case Z.Select:
          a.searchable ? q.value = Pi(G.value, E, !0, (ae = a.optionsConfig) == null ? void 0 : ae.filter) : q.value = G.value, N.value = !1, K && (z.value = typeof ((Ie = (Ee = a.optionsConfig) == null ? void 0 : Ee.http) == null ? void 0 : Ie.resource) < "u" && ((Qe = (Be = a.optionsConfig) == null ? void 0 : Be.http) == null ? void 0 : Qe.resource) !== "" || q.value.length > 0), ie();
          return;
        case Z.Text:
        case Z.Search:
          q.value = Pi(G.value, E, !1, (et = a.optionsConfig) == null ? void 0 : et.filter), N.value = !1, K && (z.value = typeof ((it = (tt = a.optionsConfig) == null ? void 0 : tt.http) == null ? void 0 : it.resource) < "u" && ((nt = (lt = a.optionsConfig) == null ? void 0 : lt.http) == null ? void 0 : nt.resource) !== "" || q.value.length > 0);
          return;
      }
    }, Yt = async (E, K = !0) => {
      var ae, Ee, Ie, Be, Qe, et, tt, it, lt, nt, ft, ht, pt, mt, Ot, Ut, xe, gt, vt, bt, yt, _t, Ct, wt;
      if (!(!y.value && !((ae = a.optionsConfig) != null && ae.autoloadResource) && !R.value) && ![
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
        if (N.value = !1, (Ee = a.optionsConfig) != null && Ee.autoloadResource && !R.value && (M.value = !0), typeof ((Be = (Ie = a.optionsConfig) == null ? void 0 : Ie.http) == null ? void 0 : Be.resource) < "u" && ((et = (Qe = a.optionsConfig) == null ? void 0 : Qe.http) == null ? void 0 : et.resource) !== "") {
          N.value = !0;
          let dt = {};
          typeof ((it = (tt = a.optionsConfig) == null ? void 0 : tt.http) == null ? void 0 : it.data) == "object" && (dt = { ...a.optionsConfig.http.data }), te.searchKeyForResource !== "" && (dt[te.searchKeyForResource] = E), (ft = (nt = (lt = a.optionsConfig) == null ? void 0 : lt.http) == null ? void 0 : nt.events) != null && ft.onStart && typeof ((mt = (pt = (ht = a.optionsConfig) == null ? void 0 : ht.http) == null ? void 0 : pt.events) == null ? void 0 : mt.onStart) == "function" && a.optionsConfig.http.events.onStart();
          const ot = await Zi((Ut = (Ot = a.optionsConfig) == null ? void 0 : Ot.http) == null ? void 0 : Ut.resource, dt);
          (vt = (gt = (xe = a.optionsConfig) == null ? void 0 : xe.http) == null ? void 0 : gt.events) != null && vt.onEnd && typeof ((_t = (yt = (bt = a.optionsConfig) == null ? void 0 : bt.http) == null ? void 0 : yt.events) == null ? void 0 : _t.onEnd) == "function" && a.optionsConfig.http.events.onEnd(ot);
          const Et = Array.isArray(ot.data) && ot.data.length > 0;
          N.value = !1, Et && (G.value = es(G.value, ot.data, a.prop), Dt(E, K), (Ct = a.optionsConfig) != null && Ct.autoloadResource && !R.value && (((wt = a.optionsConfig) == null ? void 0 : wt.autoloadResource) === "feed" && (a.multiple ? q.value.forEach((ti) => {
            Ft(ti);
          }) : q.value.length > 0 && Ft(q.value[0])), R.value = !0, M.value = !1), n("options-loaded", ot.data));
        } else
          Dt(E, K);
    }, Hi = (E) => {
      var Ee, Ie;
      let K = q.value.length - 1;
      if (K === -1) return;
      const ae = E.key ?? "";
      if (p.value)
        if (["ArrowDown", "ArrowUp", "Enter"].includes(ae) && (E.preventDefault(), E.stopPropagation()), ae === "ArrowDown") {
          ++P.value, P.value > K && (P.value = 0);
          let Be = (Ee = T.value) == null ? void 0 : Ee.querySelector('[data-index="' + P.value + '"]');
          Be && Be.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else if (ae === "ArrowUp") {
          --P.value, P.value < 0 && (P.value = K);
          let Be = (Ie = T.value) == null ? void 0 : Ie.querySelector('[data-index="' + P.value + '"]');
          Be && Be.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else ae === "Enter" && P.value > -1 && Ft(q.value[P.value]);
    }, Oi = () => {
      if (a.type === Z.Html) {
        w.value && w.value.setValue(F.value);
        return;
      } else if (a.type === Z.Date) {
        s.value = A.value;
        return;
      } else if (a.type === Z.File) {
        s.value = A.value, _.value = C.value;
        return;
      }
      k.value = F.value;
    }, hl = () => {
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
        k.value = a.multiple ? [] : "", V.value = [];
        return;
      }
      k.value = "";
    }, Xn = () => k.value, pl = (E) => {
      It(), Tl.includes(a.type) ? (Yt(k.value), Hi(E)) : a.type === Z.Select && Hi(E), n("keyup", E);
    }, ml = () => {
      w.value && w.value.keepFocused();
    }, Jn = () => {
      if (z.value) {
        if (a.type === Z.Select) {
          bl();
          return;
        }
        return Jt();
      }
      if (a.type === Z.Select) {
        vl();
        return;
      }
      return Xt();
    }, Ft = (E, K = !1) => {
      if (!E.disabled)
        if (a.multiple) {
          let ae = -1;
          a.optionValueType === "option" ? ae = Mt(E, k.value.map((Ee) => Ee.value)) : ae = Mt(E, k.value), ae === -1 ? (a.optionValueType === "option" ? k.value.push(E.value) : k.value.push(String(E.value)), K || V.value.push(E)) : K || (k.value.splice(ae, 1), V.value.splice(ae, 1)), ml(), n("selected-option", E);
        } else
          P.value = -1, a.optionValueType === "option" ? k.value = E : k.value = String(E.value), V.value.splice(0, 1, E), z.value = !1, W.value = !1, n("selected-option", E);
    }, gl = (E) => n("keydown", E), Xt = (E) => {
      v.value = !0, p.value = !0, It(), n("focus", E);
    }, Jt = (E) => {
      setTimeout(() => {
        if (!(a.searchable && W.value)) {
          if (a.multiple) {
            z.value = !0, p.value = !0;
            return;
          }
          m.value = !0, P.value = -1, z.value = !1, p.value = !1, It(), n("blur", E);
        }
      }, 100);
    }, Qt = (E) => {
      v.value = !0, p.value = !0, n("focus", E);
    }, ei = (E) => {
      m.value = !0, p.value = !1, n("blur", E);
    }, Qn = (E) => {
      Hi(E);
    }, eo = (E) => {
      O.value = E, Yt(E);
    }, to = (E) => {
      let K = new Ii({
        value: E,
        label: E
      }), ae = -1;
      a.optionValueType === "option" ? ae = Mt(K, k.value.map((Ee) => Ee.value)) : ae = Mt(K, k.value), ae === -1 && (G.value.push(K), q.value.push(K), V.value.push(K), Ft(K, !0)), O.value = "";
    }, io = (E) => {
      let K = -1;
      a.optionValueType === "option" ? K = Mt(E, k.value.map((ae) => ae.value)) : K = Mt(E, k.value), K >= 0 && (k.value.splice(K, 1), V.value.splice(K, 1), a.canTag && (G.value.splice(
        G.value.findIndex((ae) => ae.value === E.value),
        1
      ), q.value.splice(
        q.value.findIndex((ae) => ae.value === E.value),
        1
      ))), O.value = "";
    }, vl = () => {
      var E, K;
      if (v.value = !0, p.value = !0, !((K = (E = a.optionsConfig) == null ? void 0 : E.http) != null && K.resource) && q.value.length === 0) {
        z.value = !1;
        return;
      }
      z.value = !0, It(), Yt(O.value, !1), a.searchable && ml(), n("focus");
    }, bl = () => {
      m.value = !0, p.value = !1, n("blur");
    }, Ui = (E) => {
      n("change", E);
    }, Ht = (E) => {
      n("click", E);
    }, lo = (E) => n("click-info", E), no = (E) => n("click-error", E), yl = () => {
      let E = a.step ?? 1;
      typeof E == "string" && (E = parseFloat(E)), (!a.min || k.value > a.min) && (k.value -= E);
    }, oo = () => {
      let E = a.step ?? 1;
      typeof E == "string" && (E = parseFloat(E)), (!a.max || k.value < a.max) && (k.value += E);
    }, so = () => {
      y.value && fl();
    }, ao = () => {
      Bl({
        text: Ge.defaultUploadSuccessText,
        details: Ge.defaultUploadSuccessDetails,
        icon: Ge.defaultUploadSuccessIcon,
        positionX: zl.Right
      }), n("upload-success");
    }, ro = () => {
      Bl({
        text: Ge.defaultUploadErrorText,
        details: Ge.defaultUploadErrorDetails,
        icon: Ge.defaultUploadErrorIcon,
        positionX: zl.Right
      }), n("upload-error");
    }, uo = (E) => {
      if (!a.enableAutoNumberFix) return !1;
      let K = Number(E), ae = Qo(K, je.value, He.value);
      return K !== ae ? (k.value = ae, !0) : !1;
    };
    t({
      Identifier: u,
      reset: Oi,
      focus: fl,
      value: Xn,
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
    const co = ee(() => a.editSlot !== "" && typeof te.customEditSlots[a.editSlot] < "u"), fo = ee(() => te.customEditSlots[a.editSlot]);
    Xi(() => {
      var E;
      G.value = Di(a.options, a.prop), Dt("", !1), ie(), a.type === Z.Select && (a.multiple && (W.value = !0), (E = a.optionsConfig) != null && E.autoloadResource && Yt("", !1)), $.value = !0;
    });
    const ho = ee(() => St.includes(a.type) && !ue.value ? "label" : "div"), po = ee(() => St.includes(a.type) ? {
      for: u
    } : {}), mo = ee(() => {
      switch (a.type) {
        case Z.Select:
          return V.value;
        case Z.Date:
          return kn(s.value, U.value);
        case Z.File:
        case Z.Image:
          return s.value;
        default:
          return k.value;
      }
    });
    return (E, K) => {
      var Be, Qe, et, tt, it, lt, nt, ft, ht, pt, mt, Ot, Ut;
      const ae = de("lkt-button"), Ee = de("lkt-loader"), Ie = de("lkt-tooltip");
      return H(), ne("div", {
        class: Te(["lkt-field", rt.value]),
        "data-show-ui": $e.value,
        "data-labeled": !I(l).label,
        ref_key: "container",
        ref: D
      }, [
        I(l).label ? st(E.$slots, "label", { key: 0 }) : se("", !0),
        !I(l).label && _e.value !== "" && !I(St).includes(E.type) ? (H(), ne("label", {
          key: 1,
          for: I(u),
          class: "lkt-field--label",
          innerHTML: _e.value
        }, null, 8, Su)) : se("", !0),
        le("div", Lu, [
          Ae.value ? (H(), ne("div", Eu, [
            E.featuredButton === "password" && Kt.value ? (H(), j(ji, {
              key: 0,
              modelValue: f.value,
              "onUpdate:modelValue": K[0] || (K[0] = (xe) => f.value = xe),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : se("", !0),
            Fi.value && I(S) === "i18n" && E.canI18n ? (H(), j(Nl, {
              key: 1,
              modelValue: s.value,
              "onUpdate:modelValue": K[1] || (K[1] = (xe) => s.value = xe),
              "is-featured": "",
              type: E.type
            }, null, 8, ["modelValue", "type"])) : se("", !0),
            Je.value && I(S) === "subtract" ? (H(), j(ae, {
              key: 2,
              class: "lkt-field--atn-btn",
              icon: "lkt-icn-less",
              onClick: yl
            })) : se("", !0)
          ])) : se("", !0),
          We.value ? (H(), ne("div", Tu, [
            le("i", {
              class: Te(We.value)
            }, null, 2)
          ])) : se("", !0),
          y.value ? (H(), j(Tt(ho.value), ye({ key: 2 }, po.value, { class: "lkt-field-main" }), {
            default: re(() => {
              var xe, gt, vt, bt, yt, _t, Ct, wt, dt, ot, Et, ti, _l, Cl, wl, kl, xl;
              return [
                I(l).edit ? (H(), ne("div", {
                  key: 0,
                  onClick: Ht
                }, [
                  st(E.$slots, "edit", {
                    value: s.value,
                    title: Fe.value,
                    data: E.slotData
                  })
                ])) : co.value ? (H(), ne("div", {
                  key: 1,
                  onClick: Ht
                }, [
                  (H(), j(Tt(fo.value), {
                    value: s.value,
                    title: Fe.value,
                    data: E.slotData
                  }, null, 8, ["value", "title", "data"]))
                ])) : I(St).includes(E.type) ? (H(), j(Ss, {
                  key: 2,
                  modelValue: I(k),
                  "onUpdate:modelValue": K[2] || (K[2] = (me) => Ke(k) ? k.value = me : null),
                  ref_key: "inputElement",
                  ref: w,
                  id: I(u),
                  name: E.name,
                  type: E.type,
                  label: _e.value,
                  editable: y.value,
                  focusing: p.value,
                  disabled: ue.value,
                  readonly: E.readonly,
                  onFocus: Qt,
                  onBlur: ei
                }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : E.type === I(Z).Color && E.multiple ? (H(), j(hs, {
                  key: 3,
                  modelValue: I(k),
                  "onUpdate:modelValue": K[3] || (K[3] = (me) => Ke(k) ? k.value = me : null),
                  ref_key: "inputElement",
                  ref: w,
                  "edit-mode": y.value,
                  min: je.value,
                  max: He.value
                }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : E.type === I(Z).Color ? (H(), j(xn, {
                  key: 4,
                  modelValue: I(k),
                  "onUpdate:modelValue": K[4] || (K[4] = (me) => Ke(k) ? k.value = me : null),
                  ref_key: "inputElement",
                  ref: w
                }, null, 8, ["modelValue"])) : Q.value || oe.value ? (H(), j(ou, {
                  key: 5,
                  modelValue: s.value,
                  "onUpdate:modelValue": K[5] || (K[5] = (me) => s.value = me),
                  "file-name": _.value,
                  "onUpdate:fileName": K[6] || (K[6] = (me) => _.value = me),
                  ref_key: "inputElement",
                  ref: w,
                  id: I(u),
                  tabindex: E.tabindex,
                  resource: (xe = E.fileUploadHttp) == null ? void 0 : xe.resource,
                  "resource-data": (gt = E.fileUploadHttp) == null ? void 0 : gt.data,
                  name: E.name,
                  placeholder: Bt.value,
                  accept: Oe.value,
                  focusing: p.value,
                  disabled: ue.value,
                  readonly: E.readonly,
                  "is-image": E.type === I(Z).Image,
                  onChange: Ui,
                  onUploadSuccess: ao,
                  onUploadError: ro
                }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image"])) : J.value ? (H(), j(hu, {
                  key: 6,
                  modelValue: s.value,
                  "onUpdate:modelValue": K[7] || (K[7] = (me) => s.value = me),
                  id: I(u),
                  tabindex: E.tabindex,
                  lang: B.value,
                  name: E.name
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name"])) : E.type === I(Z).Select ? (H(), j(Rr, {
                  key: 7,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: I(k),
                  "onUpdate:modelValue": K[8] || (K[8] = (me) => Ke(k) ? k.value = me : null),
                  "show-options": z.value,
                  "onUpdate:showOptions": K[9] || (K[9] = (me) => z.value = me),
                  searchable: E.searchable,
                  "search-mode": W.value,
                  "search-string": O.value,
                  multiple: E.multiple,
                  "can-tag": E.canTag,
                  "options-text": (vt = E.optionsConfig) == null ? void 0 : vt.text,
                  "options-icon": (bt = E.optionsConfig) == null ? void 0 : bt.icon,
                  "options-class": (yt = E.optionsConfig) == null ? void 0 : yt.class,
                  "option-slot": E.optionSlot,
                  "options-modal": (_t = E.optionsConfig) == null ? void 0 : _t.modal,
                  "options-download": (Ct = E.optionsConfig) == null ? void 0 : Ct.download,
                  "options-label-formatter": (wt = E.optionsConfig) == null ? void 0 : wt.labelFormatter,
                  "options-modal-data": (dt = E.optionsConfig) == null ? void 0 : dt.modalData,
                  "picked-options": V.value,
                  editable: y.value,
                  focusing: p.value,
                  "search-placeholder": ut.value,
                  "multiple-display-edition": E.multipleDisplayEdition,
                  onFocus: vl,
                  onBlur: bl,
                  onNavigate: Qn,
                  onSearch: eo,
                  onTag: to,
                  onUntag: io
                }, null, 8, ["modelValue", "show-options", "searchable", "search-mode", "search-string", "multiple", "can-tag", "options-text", "options-icon", "options-class", "option-slot", "options-modal", "options-download", "options-label-formatter", "options-modal-data", "picked-options", "editable", "focusing", "search-placeholder", "multiple-display-edition"])) : E.type === I(Z).Calc ? (H(), j(Or, {
                  key: 8,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: I(k),
                  "onUpdate:modelValue": K[10] || (K[10] = (me) => Ke(k) ? k.value = me : null),
                  id: I(u),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: y.value,
                  focusing: p.value,
                  disabled: ue.value,
                  readonly: E.readonly,
                  options: G.value,
                  onFocus: Qt,
                  onBlur: ei
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : E.type === I(Z).Search ? (H(), j(Zr, {
                  key: 9,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: I(k),
                  "onUpdate:modelValue": K[11] || (K[11] = (me) => Ke(k) ? k.value = me : null),
                  id: I(u),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: y.value,
                  focusing: p.value,
                  "had-first-focus": v.value,
                  disabled: ue.value,
                  readonly: E.readonly,
                  "options-resource": (Et = (ot = E.optionsConfig) == null ? void 0 : ot.http) == null ? void 0 : Et.resource,
                  container: D.value,
                  onFocus: Qt,
                  onBlur: ei
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : E.type === I(Z).Elements ? (H(), j(wu, {
                  key: 10,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: I(k),
                  "onUpdate:modelValue": K[12] || (K[12] = (me) => Ke(k) ? k.value = me : null),
                  id: I(u),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: y.value,
                  focusing: p.value,
                  "had-first-focus": v.value,
                  disabled: ue.value,
                  readonly: E.readonly,
                  "options-resource": (_l = (ti = E.optionsConfig) == null ? void 0 : ti.http) == null ? void 0 : _l.resource,
                  container: D.value,
                  "file-browser-config": E.fileBrowserConfig,
                  onFocus: Qt,
                  onBlur: ei
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container", "file-browser-config"])) : E.type === I(Z).Card && a.multiple ? (H(), j(mu, {
                  key: 11,
                  modelValue: I(k),
                  "onUpdate:modelValue": K[13] || (K[13] = (me) => Ke(k) ? k.value = me : null),
                  id: I(u),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: y.value,
                  focusing: p.value,
                  "had-first-focus": v.value,
                  disabled: ue.value,
                  readonly: E.readonly,
                  "options-resource": (wl = (Cl = E.optionsConfig) == null ? void 0 : Cl.http) == null ? void 0 : wl.resource,
                  modal: Pe.value,
                  "modal-key": I(o),
                  "modal-data": ze.value,
                  "item-type": I(g)
                }, Vt({ _: 2 }, [
                  I(l)["item-" + I(g)] ? {
                    name: "item",
                    fn: re(({ item: me }) => [
                      st(E.$slots, "item-" + I(g), { item: me })
                    ]),
                    key: "0"
                  } : I(l).item ? {
                    name: "item",
                    fn: re(({ item: me }) => [
                      st(E.$slots, "item", { item: me })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : E.type === I(Z).Card ? (H(), j(Kn, {
                  key: 12,
                  modelValue: I(k),
                  "onUpdate:modelValue": K[14] || (K[14] = (me) => Ke(k) ? k.value = me : null),
                  id: I(u),
                  tabindex: E.tabindex,
                  name: E.name,
                  editable: y.value,
                  focusing: p.value,
                  "had-first-focus": v.value,
                  disabled: ue.value,
                  readonly: E.readonly,
                  "options-resource": (xl = (kl = E.optionsConfig) == null ? void 0 : kl.http) == null ? void 0 : xl.resource,
                  modal: Pe.value,
                  "modal-key": I(o),
                  "modal-data": ze.value,
                  "item-type": I(g)
                }, Vt({ _: 2 }, [
                  I(l)["item-" + I(g)] ? {
                    name: "item",
                    fn: re(({ item: me }) => [
                      st(E.$slots, "item-" + I(g), { item: me })
                    ]),
                    key: "0"
                  } : I(l).item ? {
                    name: "item",
                    fn: re(({ item: me }) => [
                      st(E.$slots, "item", { item: me })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : pe.value === "input" ? Ze((H(), ne("input", {
                  key: 13,
                  "onUpdate:modelValue": K[15] || (K[15] = (me) => Ke(k) ? k.value = me : null),
                  ref: (me) => w.value = me,
                  value: I(k),
                  type: Le.value,
                  name: E.name,
                  id: I(u),
                  disabled: ue.value,
                  readonly: E.readonly,
                  placeholder: Bt.value,
                  tabindex: E.tabindex,
                  autocomplete: Ce.value,
                  min: je.value,
                  max: He.value,
                  step: E.step,
                  onKeyup: pl,
                  onKeydown: gl,
                  onFocus: Xt,
                  onBlur: Jt,
                  onClick: Ht,
                  onChange: Ui
                }, null, 40, zu)), [
                  [yo, I(k)]
                ]) : pe.value === "textarea" ? Ze((H(), ne("textarea", {
                  key: 14,
                  "onUpdate:modelValue": K[16] || (K[16] = (me) => Ke(k) ? k.value = me : null),
                  ref: (me) => w.value = me,
                  name: E.name,
                  id: I(u),
                  disabled: ue.value,
                  readonly: E.readonly,
                  placeholder: Bt.value,
                  tabindex: E.tabindex,
                  autocomplete: Ce.value,
                  onKeyup: pl,
                  onKeydown: gl,
                  onFocus: Xt,
                  onBlur: Jt,
                  onClick: Ht,
                  onChange: Ui
                }, null, 40, Bu)), [
                  [Mi, I(k)]
                ]) : E.type === I(Z).Html ? (H(), j(Tr, {
                  key: 15,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: I(k),
                  "onUpdate:modelValue": K[17] || (K[17] = (me) => Ke(k) ? k.value = me : null),
                  id: I(u),
                  tabindex: E.tabindex,
                  name: E.name,
                  lang: B.value,
                  editable: y.value,
                  focusing: p.value,
                  disabled: ue.value,
                  readonly: E.readonly,
                  onFocus: Xt,
                  onBlur: Jt
                }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : se("", !0)
              ];
            }),
            _: 3
          }, 16)) : se("", !0),
          y.value ? se("", !0) : (H(), j(tu, {
            key: 3,
            value: mo.value,
            type: E.type,
            label: _e.value,
            title: Fe.value,
            "file-name": _.value,
            "value-slot": E.valueSlot,
            "empty-value-slot": E.emptyValueSlot,
            "slot-data": E.slotData,
            download: I(d),
            multiple: E.multiple,
            multipleDisplay: E.multipleDisplay,
            modal: Pe.value,
            "modal-key": I(o),
            "modal-data": ze.value,
            "option-slot": E.optionSlot,
            "options-download": (Be = E.optionsConfig) == null ? void 0 : Be.download,
            "options-modal": (Qe = E.optionsConfig) == null ? void 0 : Qe.modal,
            "options-modal-data": (et = E.optionsConfig) == null ? void 0 : et.modalData,
            "options-icon": (tt = E.optionsConfig) == null ? void 0 : tt.icon,
            "options-text": (it = E.optionsConfig) == null ? void 0 : it.text,
            "options-class": (lt = E.optionsConfig) == null ? void 0 : lt.class,
            "options-label-formatter": (nt = E.optionsConfig) == null ? void 0 : nt.labelFormatter,
            "options-resource": (ht = (ft = E.optionsConfig) == null ? void 0 : ft.http) == null ? void 0 : ht.resource,
            "options-resource-data": (mt = (pt = E.optionsConfig) == null ? void 0 : pt.http) == null ? void 0 : mt.data,
            "read-mode-config": E.readModeConfig,
            onClick: Ht
          }, Vt({ _: 2 }, [
            I(l).value ? {
              name: "value",
              fn: re(() => [
                st(E.$slots, s.value, {
                  value: s.value,
                  title: Fe.value,
                  data: E.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-text", "options-class", "options-label-formatter", "options-resource", "options-resource-data", "read-mode-config"])),
          $e.value ? (H(), ne("div", Nu, [
            Ze(Y(_n, { onClick: Oi }, null, 512), [
              [kt, ol.value]
            ]),
            Ze(Y(Cn, { onClick: hl }, null, 512), [
              [kt, sl.value]
            ]),
            E.type === I(Z).Number ? Ze((H(), j(ae, {
              key: 0,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              onClick: yl
            }, null, 512)), [
              [kt, Rt.value]
            ]) : se("", !0),
            E.type === I(Z).Number ? Ze((H(), j(ae, {
              key: 1,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-more",
              onClick: oo
            }, null, 512)), [
              [kt, il.value]
            ]) : se("", !0),
            Nt.value ? (H(), j(ae, {
              key: 2,
              title: E.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-attention",
              onClick: no
            }, null, 8, ["title"])) : se("", !0),
            At.value ? (H(), j(ae, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-info",
              onClick: lo,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: re(() => [
                zt(ct(E.infoMessage), 1)
              ]),
              _: 1
            })) : se("", !0),
            y.value && cl.value ? (H(), j(ku, {
              key: 4,
              config: E.fileUploadButton,
              "file-upload-http": E.fileUploadHttp
            }, null, 8, ["config", "file-upload-http"])) : se("", !0),
            E.type === I(Z).Password ? Ze((H(), j(ji, {
              key: 5,
              modelValue: f.value,
              "onUpdate:modelValue": K[18] || (K[18] = (xe) => f.value = xe)
            }, null, 8, ["modelValue"])), [
              [kt, al.value]
            ]) : se("", !0),
            Ze(Y(Nl, {
              modelValue: s.value,
              "onUpdate:modelValue": K[19] || (K[19] = (xe) => s.value = xe),
              type: E.type
            }, null, 8, ["modelValue", "type"]), [
              [kt, rl.value]
            ]),
            y.value && dl.value ? (H(), j(wn, {
              key: 6,
              modelValue: y.value,
              "onUpdate:modelValue": K[20] || (K[20] = (xe) => y.value = xe),
              onClick: so
            }, null, 8, ["modelValue"])) : se("", !0),
            E.customButtonText || E.customButtonClass ? (H(), j(ae, {
              key: 7,
              text: E.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: E.customButtonClass
            }, null, 8, ["text", "icon"])) : se("", !0),
            y.value ? Ze((H(), j(is, {
              key: 8,
              onClick: Jn
            }, null, 512)), [
              [kt, ul.value]
            ]) : se("", !0),
            E.infoButtonEllipsis ? (H(), j(Jo, {
              key: 9,
              "show-undo": ll.value,
              "show-clear": nl.value,
              "show-password": Kt.value,
              "show-edition": E.allowReadModeSwitch,
              "show-password-check": f.value,
              "onUpdate:showPasswordCheck": K[21] || (K[21] = (xe) => f.value = xe),
              "show-edition-check": y.value,
              "onUpdate:showEditionCheck": K[22] || (K[22] = (xe) => y.value = xe),
              onUndo: Oi,
              onClear: hl
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : se("", !0)
          ])) : se("", !0)
        ]),
        y.value && ((Ot = E.validation) == null ? void 0 : Ot.type) === I(El).Auto && h.value.length > 0 ? (H(), j(Wr, {
          key: 2,
          items: h.value,
          stack: (Ut = E.validation) == null ? void 0 : Ut.stack
        }, null, 8, ["items", "stack"])) : se("", !0),
        y.value && I(Tl).includes(E.type) ? (H(), j(Ie, ye({
          key: 3,
          ref_key: "dropdownEl",
          ref: x,
          class: "lkt-field--dropdown",
          modelValue: z.value,
          "onUpdate:modelValue": K[23] || (K[23] = (xe) => z.value = xe),
          referrer: D.value,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, E.tooltipConfig), {
          default: re(() => [
            z.value ? (H(), ne("div", Au, [
              N.value ? (H(), j(Ee, { key: 0 })) : se("", !0),
              N.value ? se("", !0) : (H(), ne("ul", {
                key: 1,
                class: "lkt-field--dropdown-options",
                ref_key: "optionList",
                ref: T
              }, [
                (H(!0), ne(Ve, null, Xe(q.value, (xe, gt) => {
                  var vt, bt, yt, _t, Ct, wt, dt, ot, Et;
                  return H(), ne("li", {
                    class: Te({
                      "is-active": I(ts)(xe, s.value, E.multiple),
                      "is-focused": gt === P.value,
                      "is-disabled": xe.disabled
                    }),
                    "data-index": gt,
                    onClick: () => Ft(xe)
                  }, [
                    I(l).option ? st(E.$slots, "option", {
                      key: 0,
                      option: xe,
                      data: E.slotData,
                      modal: (vt = E.optionsConfig) == null ? void 0 : vt.modal,
                      modalData: (bt = E.optionsConfig) == null ? void 0 : bt.modalData,
                      download: (yt = E.optionsConfig) == null ? void 0 : yt.download,
                      editable: y.value
                    }) : (H(), j(Lt, {
                      key: 1,
                      option: xe,
                      "option-slot": E.optionSlot,
                      icon: (_t = E.optionsConfig) == null ? void 0 : _t.icon,
                      text: (Ct = E.optionsConfig) == null ? void 0 : Ct.text,
                      modal: (wt = E.optionsConfig) == null ? void 0 : wt.modal,
                      "modal-data": (dt = E.optionsConfig) == null ? void 0 : dt.modalData,
                      download: (ot = E.optionsConfig) == null ? void 0 : ot.download,
                      "label-formatter": (Et = E.optionsConfig) == null ? void 0 : Et.labelFormatter,
                      editable: y.value
                    }, null, 8, ["option", "option-slot", "icon", "text", "modal", "modal-data", "download", "label-formatter", "editable"]))
                  ], 10, Ru);
                }), 256))
              ], 512))
            ])) : se("", !0)
          ]),
          _: 3
        }, 16, ["modelValue", "referrer"])) : se("", !0)
      ], 10, xu);
    };
  }
}), Iu = { class: "lkt-grid-1" }, Du = /* @__PURE__ */ ve({
  __name: "LktTextLanguageEditModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    translations: { default: () => ({}) }
  },
  setup(e) {
    const t = ee(() => So.value.filter((i) => i !== gn.value));
    return (i, n) => {
      const l = de("lkt-modal");
      return H(), j(l, {
        "modal-name": i.modalName,
        title: "__:lmm.confirmFormLeave",
        "modal-key": i.modalKey,
        "z-index": i.zIndex
      }, {
        default: re(() => [
          le("div", Iu, [
            Y(Ue, {
              type: i.type,
              label: "Idioma actual (ES)",
              modelValue: i.translations.es,
              "onUpdate:modelValue": n[0] || (n[0] = (a) => i.translations.es = a),
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "modelValue"]),
            (H(!0), ne(Ve, null, Xe(t.value, (a) => (H(), j(Ue, {
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
}), Mu = { class: "lkt-grid-1" }, Vu = { class: "lkt-grid-3" }, Fu = { class: "lkt-grid-3" }, Hu = { class: "lkt-grid-3" }, Ou = /* @__PURE__ */ ve({
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
    const t = e, i = X(t.element), n = X(t.items), l = X(t.index + 1), a = (c) => {
      t.addingChildren ? (Array.isArray(i.value.children) || (i.value.children = []), i.value.children.push(c)) : n.value.splice(l.value, 0, c), ++l.value, typeof t.onAppend == "function" && t.onAppend();
    }, u = (c) => {
      switch (c) {
        case he.LktLayoutBox:
          a(Zo());
          break;
        case he.LktTextBox:
          a($o());
          break;
        case he.LktLayoutAccordion:
          a(Wo());
          break;
        case he.LktTextAccordion:
          a(Po());
          break;
        case he.LktIcon:
          a(Uo());
          break;
        case he.LktImage:
          a(Oo());
          break;
        case he.LktAnchor:
          a(Ho());
          break;
        case he.LktButton:
          a(Fo());
          break;
        case he.LktLayout:
          a(Vo());
          break;
        case he.LktHeader:
          a(Mo());
          break;
        case he.LktText:
          a(Do());
          break;
      }
    };
    return (c, o) => {
      const b = de("lkt-button"), d = de("lkt-accordion"), g = de("lkt-modal");
      return H(), j(g, ke(Ne({
        modalName: c.modalName,
        modalKey: c.modalKey,
        zIndex: c.zIndex,
        title: "LktBox Config"
      })), {
        default: re(() => [
          le("div", Mu, [
            Y(d, ke(Ne({
              type: I(at).Always,
              title: "Content"
            })), {
              default: re(() => [
                le("div", Vu, [
                  Y(b, ke(Ne({
                    icon: "lkt-icn-angle-bottom",
                    text: "Text",
                    events: {
                      click: () => {
                        u("lkt-text");
                      }
                    }
                  })), null, 16),
                  Y(b, ke(Ne({
                    icon: "lkt-icn-angle-bottom",
                    text: "LktHeder",
                    events: {
                      click: () => {
                        u("lkt-header");
                      }
                    }
                  })), null, 16),
                  Y(b, ke(Ne({
                    icon: "lkt-icn-angle-bottom",
                    text: "LktImage",
                    events: {
                      click: () => {
                        u("lkt-image");
                      }
                    }
                  })), null, 16),
                  Y(b, ke(Ne({
                    icon: "lkt-icn-angle-bottom",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        u("lkt-icon");
                      }
                    }
                  })), null, 16),
                  Y(b, ke(Ne({
                    icon: "lkt-icn-angle-bottom",
                    text: "LktTextBox",
                    events: {
                      click: () => {
                        u("lkt-text-box");
                      }
                    }
                  })), null, 16),
                  Y(b, ke(Ne({
                    icon: "lkt-icn-angle-bottom",
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
            Y(d, ke(Ne({
              type: I(at).Always,
              title: "Containers"
            })), {
              default: re(() => [
                le("div", Fu, [
                  Y(b, ke(Ne({
                    icon: "lkt-icn-angle-bottom",
                    text: "LktLayoutBox",
                    events: {
                      click: () => {
                        u("lkt-layout-box");
                      }
                    }
                  })), null, 16),
                  Y(b, ke(Ne({
                    icon: "lkt-icn-angle-bottom",
                    text: "LktLayoutAccordion",
                    events: {
                      click: () => {
                        u("lkt-layout-accordion");
                      }
                    }
                  })), null, 16),
                  Y(b, ke(Ne({
                    icon: "lkt-icn-angle-bottom",
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
            Y(d, ke(Ne({
              type: I(at).Auto,
              title: "Actions"
            })), {
              default: re(() => [
                le("div", Hu, [
                  Y(b, ke(Ne({
                    icon: "lkt-icn-angle-bottom",
                    text: "LktAnchor",
                    events: {
                      click: () => {
                        u("lkt-anchor");
                      }
                    }
                  })), null, 16),
                  Y(b, ke(Ne({
                    icon: "lkt-icn-angle-bottom",
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
}), Uu = { class: "lkt-flex-row" }, Pu = { class: "lkt-flex-col-9 lkt-grid-1" }, Wu = { class: "lkt-flex-col-3 lkt-grid-1" }, $u = { class: "lkt-grid-1" }, Zu = { class: "lkt-grid-1" }, qu = { class: "lkt-grid-1" }, ju = { class: "lkt-grid-1" }, Gu = /* @__PURE__ */ ve({
  __name: "LktElementConfigModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    element: {},
    parent: {},
    parentChildren: {},
    indexInParentChildren: {},
    onUpdate: {}
  },
  setup(e) {
    var N, $;
    const t = e, i = () => {
      t.parentChildren.splice(t.indexInParentChildren, 1), Xo(t.modalName, t.modalKey);
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
    }, c = X(t.element), o = Lo(), b = mn(), d = [he.LktLayoutBox, he.LktLayoutAccordion, he.LktTextBox, he.LktTextAccordion].includes(c.value.type), g = [he.LktLayoutBox, he.LktLayoutAccordion, he.LktTextBox, he.LktTextAccordion, he.LktIcon].includes(c.value.type), w = [he.LktLayoutBox, he.LktLayoutAccordion, he.LktLayout].includes(c.value.type), S = [he.LktImage].includes(c.value.type), L = [he.LktLayoutAccordion, he.LktTextAccordion].includes(c.value.type), A = [he.LktLayoutAccordion, he.LktLayoutBox, he.LktLayout].includes(c.value.type), s = [qe.FlexRow, qe.FlexRows].includes(($ = (N = t.parent) == null ? void 0 : N.layout) == null ? void 0 : $.type), r = [
      {
        value: at.Auto,
        label: "Auto"
      },
      {
        value: at.Always,
        label: "Always"
      },
      {
        value: at.Lazy,
        label: "Lazy"
      },
      {
        value: at.Ever,
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
    ], p = [
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
    ], v = [
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
    ], h = [
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
          let M = O.find((B) => String(B).includes(W));
          if (M)
            return M === P.value;
        }
        let R = O.find((M) => !String(M).includes("--"));
        if (R)
          return R === V || V.includes("--");
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
    }, x = (O) => {
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
        case he.LktLayoutBox:
        case he.LktTextBox:
          O = Ge.defaultFieldLktBoxElementCustomClassField;
          break;
        case he.LktLayoutAccordion:
        case he.LktTextAccordion:
          O = Ge.defaultFieldLktAccordionElementCustomClassField;
          break;
        case he.LktIcon:
          O = Ge.defaultFieldLktIconElementCustomClassField;
          break;
        case he.LktImage:
          O = Ge.defaultFieldLktImageElementCustomClassField;
          break;
      }
      return Object.keys(O).length > 0 ? qo(O, Ge.defaultFieldElementCustomClassField) : void 0;
    }), z = ee(() => ko(xo(c.value.type)) + " Config");
    return (O, P) => {
      const V = de("lkt-accordion"), W = de("lkt-button"), R = de("lkt-item-crud");
      return H(), j(R, ye({
        class: "lkt-field-element-config-modal",
        modelValue: c.value,
        "onUpdate:modelValue": P[0] || (P[0] = (M) => c.value = M)
      }, {
        mode: I(Go).Update,
        view: I(jo).Modal,
        editing: !0,
        perms: ["update"],
        title: z.value,
        modalConfig: {
          modalName: O.modalName,
          modalKey: O.modalKey,
          zIndex: O.zIndex,
          title: z.value
        },
        updateButton: !1
      }), {
        item: re(({ item: M }) => {
          var B;
          return [
            le("div", Uu, [
              le("div", Pu, [
                Y(Yi, {
                  element: O.element,
                  "is-preview": "",
                  "parent-children": O.parentChildren,
                  index: O.indexInParentChildren,
                  "can-render-actions": !1
                }, null, 8, ["element", "parent-children", "index"]),
                (H(!0), ne(Ve, null, Xe(I(o), (U) => (H(), ne(Ve, null, [
                  U !== I(b) ? (H(), j(V, ye({
                    key: 0,
                    ref_for: !0
                  }, {
                    type: I(at).Auto,
                    title: U
                  }), {
                    default: re(() => [
                      Y(Yi, {
                        element: O.element,
                        lang: U,
                        "is-preview": "",
                        "parent-children": O.parentChildren,
                        index: O.indexInParentChildren,
                        "can-render-actions": !1
                      }, null, 8, ["element", "lang", "parent-children", "index"])
                    ]),
                    _: 2
                  }, 1040)) : se("", !0)
                ], 64))), 256))
              ]),
              le("div", Wu, [
                I(A) ? (H(), j(W, ke(ye({ key: 0 }, {
                  text: "Add children",
                  icon: "lkt-icn-more",
                  modal: "lkt-field-add-element-config",
                  modalData: {
                    items: c.value.children,
                    index: (B = c.value.children) == null ? void 0 : B.length,
                    element: O.element,
                    addingChildren: !0
                  }
                })), null, 16)) : se("", !0),
                Y(V, ke(Ne({
                  type: I(at).Auto,
                  title: "Config"
                })), {
                  default: re(() => [
                    le("div", $u, [
                      T.value ? (H(), j(Ue, ye({ key: 0 }, {
                        type: I(Z).Select,
                        ...T.value,
                        canClear: !0
                      }, {
                        modelValue: M.props.class,
                        "onUpdate:modelValue": (U) => M.props.class = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : se("", !0),
                      I(d) ? (H(), j(Ue, ye({ key: 1 }, {
                        type: I(Z).Switch,
                        label: "Has header"
                      }, {
                        modelValue: M.config.hasHeader,
                        "onUpdate:modelValue": (U) => M.config.hasHeader = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : se("", !0),
                      I(g) ? (H(), j(Ue, ye({ key: 2 }, {
                        type: I(Z).Switch,
                        label: "Has icon"
                      }, {
                        modelValue: M.config.hasIcon,
                        "onUpdate:modelValue": (U) => M.config.hasIcon = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : se("", !0),
                      I(g) ? (H(), j(Ue, ye({ key: 3 }, {
                        type: I(Z).Text,
                        label: "Icon"
                      }, {
                        modelValue: M.props.icon,
                        "onUpdate:modelValue": (U) => M.props.icon = U,
                        disabled: !M.config.hasIcon
                      }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])) : se("", !0),
                      I(S) ? (H(), j(Ue, ye({ key: 4 }, {
                        type: I(Z).Image,
                        label: "Image"
                      }, {
                        modelValue: M.props.src,
                        "onUpdate:modelValue": (U) => M.props.src = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : se("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040),
                I(L) ? (H(), j(V, ke(ye({ key: 1 }, {
                  type: I(at).Auto,
                  title: "Accordion Config"
                })), {
                  default: re(() => [
                    le("div", Zu, [
                      Y(Ue, ye({
                        type: I(Z).Select,
                        label: "Type",
                        options: r
                      }, {
                        modelValue: M.props.type,
                        "onUpdate:modelValue": (U) => M.props.type = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 2
                }, 1040)) : se("", !0),
                I(w) || I(s) ? (H(), j(V, ke(ye({ key: 2 }, {
                  type: I(at).Auto,
                  title: "Layout Config"
                })), {
                  default: re(() => [
                    le("div", qu, [
                      I(w) ? (H(), j(Ue, ye({ key: 0 }, {
                        type: I(Z).Select,
                        label: "Type",
                        options: f
                      }, {
                        modelValue: M.layout.type,
                        "onUpdate:modelValue": (U) => M.layout.type = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : se("", !0),
                      I(w) && M.layout.type !== I(qe).FlexColumn ? (H(), j(Ue, ye({ key: 1 }, {
                        type: I(Z).Select,
                        label: O.element.layout.type === I(qe).Grid ? "Items per row (based on device width)" : "Column size (based on device width)",
                        options: p,
                        multiple: !0,
                        searchable: !0,
                        canClear: !0,
                        optionsConfig: {
                          filter: C
                        }
                      }, {
                        modelValue: M.layout.amountOfItems,
                        "onUpdate:modelValue": (U) => M.layout.amountOfItems = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : se("", !0),
                      I(w) ? (H(), j(Ue, ye({ key: 2 }, {
                        type: I(Z).Select,
                        label: "Align items",
                        options: v,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: _
                        }
                      }, {
                        modelValue: M.layout.alignItems,
                        "onUpdate:modelValue": (U) => M.layout.alignItems = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : se("", !0),
                      I(w) ? (H(), j(Ue, ye({ key: 3 }, {
                        type: I(Z).Select,
                        label: "Justify content",
                        options: h,
                        multiple: !0,
                        searchable: !0,
                        optionsConfig: {
                          filter: x
                        }
                      }, {
                        modelValue: M.layout.justifyContent,
                        "onUpdate:modelValue": (U) => M.layout.justifyContent = U
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : se("", !0),
                      I(s) ? (H(), j(Ue, ye({ key: 4 }, {
                        type: I(Z).Select,
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
                      }), null, 16, ["modelValue", "onUpdate:modelValue"])) : se("", !0)
                    ])
                  ]),
                  _: 2
                }, 1040)) : se("", !0),
                Y(W, ke(Ne({
                  text: "Duplicate",
                  icon: "lkt-icn-more",
                  type: I(jt).Split
                })), {
                  split: re(({ doClose: U }) => [
                    le("div", ju, [
                      Y(W, ke(Ne({
                        text: "Before",
                        events: {
                          click: a
                        }
                      })), null, 16),
                      Y(W, ke(Ne({
                        text: "After",
                        events: {
                          click: u
                        }
                      })), null, 16)
                    ])
                  ]),
                  _: 1
                }, 16),
                Y(W, ke(Ne({
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
}), Ku = { class: "lkt-file-entity-box" }, Yu = { class: "lkt-file-entity-main" }, Xu = /* @__PURE__ */ ve({
  __name: "FileEntityBox",
  props: {
    modelValue: {}
  },
  setup(e) {
    const i = X(e.modelValue);
    return (n, l) => {
      const a = de("lkt-icon"), u = de("lkt-image");
      return H(), ne("div", Ku, [
        le("div", Yu, [
          i.value.type === "dir" ? (H(), j(a, ke(ye({ key: 0 }, {
            icon: "lkt-icn-upload",
            text: i.value.name
          })), null, 16)) : i.value.type === "img" ? (H(), j(u, ke(ye({ key: 1 }, {
            src: i.value.src,
            text: i.value.name
          })), null, 16)) : se("", !0)
        ])
      ]);
    };
  }
}), Ju = { class: "lkt-flex-row" }, Qu = { class: "lkt-flex-col-3" }, ed = { class: "lkt-flex-column" }, td = { class: "lkt-flex-col-9" }, id = { key: 0 }, ld = {
  key: 0,
  class: "lkt-flex-row-3"
}, nd = { key: 1 }, od = /* @__PURE__ */ ve({
  __name: "LktFileBrowserModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    fileBrowserConfig: {}
  },
  setup(e) {
    console.log("fileBrowserConfig: ", e.fileBrowserConfig);
    const i = X(void 0);
    ce(i, (a) => {
      console.log("updatedActiveElement: ", a);
    }, { deep: !0 });
    const n = X([
      {
        id: 1,
        type: $t.StorageUnit,
        name: "Your Space",
        children: [
          {
            id: 2,
            type: $t.Directory,
            name: "cosis",
            children: [
              {
                id: 3,
                type: $t.Image,
                name: "Dr. Evil",
                src: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/dr-evil-wide-eyed-pinky-on-the-side-of-his-mouth-in-a-scene-from-austin-powers.jpg?q=49&fit=crop&w=825&dpr=2"
              }
            ]
          }
        ]
      }
    ]);
    ce(n, (a) => {
      console.log("updatedItems: ", a);
    }, { deep: !0 });
    const l = (a) => ({
      key: String(a.id),
      type: Yo.Anchor,
      anchor: {
        text: a.name,
        events: {
          click: () => {
            console.log("orem ipsum"), i.value = a;
          }
        }
      },
      // class?: string;
      // icon?: string;
      children: a.children ? a.children.map(l) : []
    });
    return (a, u) => {
      const c = de("lkt-menu"), o = de("lkt-accordion"), b = de("lkt-modal");
      return H(), j(b, {
        "modal-name": a.modalName,
        "modal-key": a.modalKey,
        "z-index": a.zIndex,
        title: "File Browser",
        class: "lkt-file-browser"
      }, {
        default: re(() => [
          le("div", Ju, [
            le("div", Qu, [
              (H(!0), ne(Ve, null, Xe(n.value, (d, g) => (H(), j(o, ye({ ref_for: !0 }, {
                modelValue: g === 0,
                title: d.name,
                toggleMode: I(Ko).Display
              }), {
                default: re(() => {
                  var w;
                  return [
                    le("div", ed, [
                      Y(c, ye({ ref_for: !0 }, {
                        modelValue: ((w = d.children) == null ? void 0 : w.map(l)) ?? []
                      }), null, 16)
                    ])
                  ];
                }),
                _: 2
              }, 1040))), 256))
            ]),
            le("div", td, [
              i.value ? (H(), ne("div", id, [
                zt(" holiiss: " + ct(i.value.name) + " ", 1),
                [I($t).Directory, I($t).StorageUnit].includes(i.value.type) ? (H(), ne("div", ld, [
                  (H(!0), ne(Ve, null, Xe(i.value.children, (d, g) => (H(), j(Xu, {
                    modelValue: i.value.children[g],
                    "onUpdate:modelValue": (w) => i.value.children[g] = w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]))), 256))
                ])) : (H(), ne("div", nd, "holii else"))
              ])) : se("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modal-name", "modal-key", "z-index"]);
    };
  }
}), pd = (e, t) => (te.customValueSlots[e] = t, !0), md = (e, t) => (te.customEditSlots[e] = t, !0), gd = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", Ue), ii("lkt-field-language-edit", Du), ii("lkt-field-add-element-config", Ou), ii("lkt-field-element-config", Gu), ii("lkt-file-browser", od));
  }
}, vd = (e) => {
  te.defaultEmptyValueSlot = e;
}, bd = (e, t) => {
  te.optionSlots[e] = t;
}, yd = (e) => te.undoText = e, _d = (e) => te.clearText = e, Cd = (e) => te.i18nText = e, wd = (e) => te.switchEditionOnText = e, kd = (e) => te.switchEditionOffText = e, xd = (e) => te.showPasswordOnText = e, Sd = (e) => te.showPasswordOffText = e, Ld = (e) => te.dateReadFormat = e, Ed = (e) => te.defaultDateReadFormat = e, Td = (e, t, i = "default") => {
  i || (i = "default"), te.validationMessages[i] || (te.validationMessages[i] = {}), te.validationMessages[i][e] = t;
}, zd = (e) => (te.validationIconSlot = e, !0), Bd = (e = 2, t = ".", i = ".", n = !0, l = "") => l !== "" ? (te.langNumberFormat[l].amountOfDecimals = e, te.langNumberFormat[l].decimalSeparator = t, te.langNumberFormat[l].thousandsSeparator = i, te.langNumberFormat[l].removeDecimalsIfZero = n, !0) : (te.amountOfDecimals = e, te.decimalSeparator = t, te.thousandsSeparator = i, te.removeDecimalsIfZero = n, !0), Nd = (e) => {
  te.readTextMaxLength = e;
}, Ad = (e, t) => {
  te.modalPerItemType[e] = t;
};
export {
  Dd as Field,
  Ue as LktField,
  Md as Option,
  gd as default,
  _d as setFieldClearText,
  Ld as setFieldDateReadFormat,
  Ed as setFieldDefaultDateReadFormat,
  vd as setFieldEmptySlot,
  Cd as setFieldI18nText,
  Bd as setFieldNumberFormat,
  bd as setFieldOptionSlot,
  Sd as setFieldShowPasswordOffText,
  xd as setFieldShowPasswordOnText,
  kd as setFieldSwitchEditionOffText,
  wd as setFieldSwitchEditionOnText,
  yd as setFieldUndoText,
  zd as setFieldValidationIconSlot,
  Td as setFieldValidationMessage,
  Ad as setModalPerItemType,
  Nd as setReadTextMaxLength,
  md as setTextEditSlot,
  pd as setTextValueSlot
};
