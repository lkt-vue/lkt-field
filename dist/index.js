import { defineComponent as we, computed as X, resolveComponent as pe, createBlock as Y, openBlock as F, mergeProps as se, normalizeClass as ct, ref as K, watch as ie, unref as D, withCtx as be, createCommentVNode as ae, createElementVNode as Ce, createVNode as ue, createElementBlock as ce, Fragment as He, renderList as St, toDisplayString as xt, normalizeStyle as wl, withDirectives as Ve, vModelCheckbox as So, onMounted as at, normalizeProps as De, resolveDynamicComponent as dt, withModifiers as To, nextTick as Te, vModelText as Tt, markRaw as Dt, vShow as it, createTextVNode as tl, useSlots as al, renderSlot as lt, guardReactiveProps as li, createSlots as Vt, mergeDefaults as Eo, isRef as We, vModelDynamic as kl } from "vue";
import { stripTags as il, fill as Lo, lpad as It, generateRandomString as Bo, formatNumber as xl, trim as zo, isEmail as No } from "lkt-string-tools";
import { httpCall as sl } from "lkt-http-client";
import { getCurrentLanguage as Ro, getAvailableLanguages as Ao, __ as yn, currentLanguage as Io } from "lkt-i18n";
import { ButtonType as je, TooltipLocationY as Ot, TooltipLocationX as Ht, FieldType as Z, LktColor as Cn, FieldValidation as xe, ValidationStatus as ye, FieldReportLevel as Ze, extractPropValue as qe, LktSettings as mt, AnchorType as _n, TagType as Vo, MultipleOptionsDisplay as kt, TableType as gt, fieldTypesWithOptions as Do, booleanFieldTypes as pt, CalendarController as Mo, fieldsWithMultipleMode as Oo, FieldValidationType as ri, extractI18nValue as ii, fieldTypesWithoutUndo as Ho, fieldTypesWithoutClear as Fo, ValidationCode as ut, textFieldTypes as Uo, FieldAutoValidationTrigger as Ji, FieldReportType as Sl, getDefaultValues as Po, Field as Wo, ToastPositionX as Tl, FileEntityType as Ye, AccordionType as Qi, AccordionToggleMode as $o, TablePermission as ui, ItemCrudMode as El, ItemCrudView as qo, FileEntity as Ll, IconPosition as Zo, MenuEntryType as jo } from "lkt-vue-kernel";
import { Field as kc, Option as xc } from "lkt-vue-kernel";
import { date as wn } from "lkt-date-tools";
import { DataState as nt } from "lkt-data-state";
import { openToast as Bl } from "lkt-toast";
import { closeModal as Go, addModal as Ko } from "lkt-modal";
const _e = class _e {
};
_e.defaultEmptyValueSlot = "", _e.customValueSlots = {}, _e.customEditSlots = {}, _e.searchKeyForResource = "query", _e.optionSlots = {}, _e.defaultDateIcon = "lkt-icn-calendar-empty-outline", _e.defaultNumberFeaturedButton = "subtract", _e.undoText = "", _e.clearText = "", _e.i18nText = "", _e.switchEditionOnText = "", _e.switchEditionOffText = "", _e.showPasswordOnText = "", _e.showPasswordOffText = "", _e.dateReadFormat = "", _e.dateTimeReadFormat = "", _e.defaultDateReadFormat = "Y-m-d", _e.defaultDateTimeReadFormat = "Y-m-d H:i", _e.langDateReadFormat = {
  en: "Y-m-d",
  es: "d/m/Y"
}, _e.langDateTimeReadFormat = {
  en: "Y-m-d H:i",
  es: "d/m/Y H:i"
}, _e.acceptTypes = {
  file: "*/*",
  image: "image/*"
}, _e.validationIconOk = "", _e.validationIconKo = "", _e.validationIconInfo = "", _e.validationIconSlot = "", _e.validationMessages = {
  default: {
    "ok-http-response": "",
    "ko-http-response": "",
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
}, _e.amountOfDecimals = void 0, _e.decimalSeparator = ".", _e.thousandsSeparator = "", _e.removeDecimalsIfZero = !0, _e.langNumberFormat = {
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
}, _e.readTextMaxLength = void 0, _e.modalPerItemType = {};
let ee = _e;
const kn = /* @__PURE__ */ we({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const n = t, l = e, i = X(() => ee.undoText), s = X(() => l.insideEllipsis ? "lkt-field--btn-undo lkt-field--info-split-btn" : "lkt-field--btn-undo lkt-field--info-btn"), u = () => n("click");
    return (f, o) => {
      const b = pe("lkt-button");
      return F(), Y(b, se({
        text: e.insideEllipsis ? i.value : "",
        icon: "lkt-icn-undo",
        class: s.value
      }, {
        title: i.value,
        onClick: u
      }), null, 16, ["title"]);
    };
  }
}), xn = /* @__PURE__ */ we({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const n = t, l = e, i = X(() => ee.clearText), s = X(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), u = () => n("click");
    return (f, o) => {
      const b = pe("lkt-button");
      return F(), Y(b, {
        text: e.insideEllipsis ? i.value : "",
        title: i.value,
        class: ct(s.value),
        icon: "lkt-icn-cancel",
        onClick: u
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), ll = /* @__PURE__ */ we({
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
    const n = t, l = e, i = K(l.modelValue);
    ie(() => l.modelValue, (b) => i.value = b), ie(i, (b) => n("update:modelValue", b));
    const s = X(() => i.value ? ee.showPasswordOnText : ee.showPasswordOffText), u = X(() => i.value === !0 ? "lkt-icn-see" : "lkt-icn-not-see"), f = X(() => l.isFeatured ? "lkt-field--atn-btn" : l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => n("click");
    return (b, c) => {
      const g = pe("lkt-button");
      return F(), Y(g, se({
        checked: i.value,
        "onUpdate:checked": c[0] || (c[0] = (k) => i.value = k)
      }, {
        type: D(je).HiddenSwitch,
        text: e.insideEllipsis ? s.value : "",
        class: f.value,
        icon: u.value
      }, {
        title: s.value,
        onClick: o
      }), null, 16, ["checked", "title"]);
    };
  }
}), Sn = /* @__PURE__ */ we({
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
    const n = t, l = e, i = K(l.modelValue);
    ie(() => l.modelValue, (b) => i.value = b), ie(i, (b) => n("update:modelValue", b));
    const s = X(() => i.value ? ee.switchEditionOnText : ee.switchEditionOffText), u = X(() => i.value === !0 ? "lkt-icon-see" : "lkt-icn-edit"), f = X(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => n("click");
    return (b, c) => {
      const g = pe("lkt-button");
      return F(), Y(g, {
        text: e.insideEllipsis ? s.value : "",
        title: s.value,
        class: ct(f.value),
        icon: u.value,
        onClick: o,
        checked: i.value,
        "onUpdate:checked": c[0] || (c[0] = (k) => i.value = k),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Yo = /* @__PURE__ */ we({
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
    const n = t, l = e, i = K(l.showPasswordCheck);
    ie(() => l.showPasswordCheck, (u) => i.value = u), ie(i, (u) => n("update:showPasswordCheck", u));
    const s = K(l.showEditionCheck);
    return ie(() => l.showEditionCheck, (u) => s.value = u), ie(s, (u) => n("update:showEditionCheck", u)), (u, f) => {
      const o = pe("lkt-button");
      return F(), Y(o, {
        split: "",
        "split-icon": "lkt-icn-ellipsis-menu-vertical",
        class: "lkt-field--info-btn"
      }, {
        split: be(({ doClose: b }) => [
          e.showUndo ? (F(), Y(kn, {
            key: 0,
            onClick: f[0] || (f[0] = () => n("undo")),
            "inside-ellipsis": ""
          })) : ae("", !0),
          e.showClear ? (F(), Y(xn, {
            key: 1,
            onClick: f[1] || (f[1] = () => n("clear")),
            "inside-ellipsis": ""
          })) : ae("", !0),
          e.showPassword ? (F(), Y(ll, {
            key: 2,
            modelValue: i.value,
            "onUpdate:modelValue": f[2] || (f[2] = (c) => i.value = c),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : ae("", !0),
          e.showEdition ? (F(), Y(Sn, {
            key: 3,
            modelValue: s.value,
            "onUpdate:modelValue": f[3] || (f[3] = (c) => s.value = c),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : ae("", !0)
        ]),
        _: 1
      });
    };
  }
}), Xo = { class: "lkt-grid-1" }, zl = /* @__PURE__ */ we({
  __name: "I18nButton",
  props: {
    type: {},
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 },
    translations: {},
    referrer: {}
  },
  emits: [
    "click",
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = e, l = Ro(), i = Ao(), s = X(() => ee.i18nText), u = X(() => n.isFeatured ? "lkt-field--atn-btn" : n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (f, o) => {
      const b = pe("lkt-button");
      return D(i).length > 1 ? (F(), Y(b, se({ key: 0 }, {
        type: D(je).Tooltip,
        text: e.insideEllipsis ? s.value : "",
        class: u.value,
        icon: "lkt-icn-lang-picker",
        tooltip: {
          class: "lkt-field-i18n-tooltip",
          referrerWidth: !0,
          referrer: e.referrer,
          referrerMargin: 0,
          locationX: D(Ht).LeftCorner,
          locationY: D(Ot).Bottom
        }
      }, { title: s.value }), {
        tooltip: be(() => [
          Ce("div", Xo, [
            ue(Mt, se({
              modelValue: e.translations[D(l)],
              "onUpdate:modelValue": o[0] || (o[0] = (c) => e.translations[D(l)] = c)
            }, {
              type: e.type,
              label: `Current lang ${D(l)}`,
              canClear: !0,
              canUndo: !0
            }), null, 16, ["modelValue"]),
            (F(!0), ce(He, null, St(D(i), (c) => (F(), ce(He, { key: c }, [
              c !== D(l) ? (F(), Y(Mt, se({
                key: 0,
                modelValue: e.translations[c],
                "onUpdate:modelValue": (g) => e.translations[c] = g
              }, { ref_for: !0 }, {
                type: e.type,
                label: `Language ${c}`,
                canClear: !0,
                canUndo: !0
              }), null, 16, ["modelValue", "onUpdate:modelValue"])) : ae("", !0)
            ], 64))), 128))
          ])
        ]),
        _: 1
      }, 16, ["title"])) : ae("", !0);
    };
  }
}), Jo = (e, t, n) => (e = Number(e), t !== !1 && e < t && (e = t), n !== !1 && e > n && (e = n), e), Tn = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), En = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), Tn(e) ? wn(t, e) : ""), Qo = /* @__PURE__ */ we({
  __name: "DropdownButton",
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const n = t, l = X(() => ee.undoText), i = X(() => "lkt-field--info-btn"), s = () => n("click");
    return (u, f) => {
      const o = pe("lkt-button");
      return F(), Y(o, {
        text: l.value,
        title: l.value,
        class: ct([i.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-icn-angle-bottom",
        onClick: s,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), ea = { class: "lkt-field-color--tooltip--rgba-container" }, ta = { class: "lkt-field-color--tooltip--numeric-input-container" }, ia = { class: "like-lkt-field-label" }, ci = /* @__PURE__ */ we({
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
    const n = t, l = e, i = K(l.modelValue);
    return ie(() => l.modelValue, (s) => i.value = s), ie(i, (s) => n("update:modelValue", s)), (s, u) => (F(), ce("div", ea, [
      Ce("div", ta, [
        Ce("label", ia, xt(e.label), 1),
        ue(Mt, se({
          modelValue: i.value,
          "onUpdate:modelValue": u[0] || (u[0] = (f) => i.value = f)
        }, {
          type: D(Z).Number,
          min: 0,
          max: 255,
          step: 1,
          canStep: !1
        }), null, 16, ["modelValue"])
      ]),
      ue(Mt, se({
        class: ["color-range", e.rangeClass],
        modelValue: i.value,
        "onUpdate:modelValue": u[1] || (u[1] = (f) => i.value = f)
      }, {
        type: D(Z).Range,
        min: 0,
        max: 255,
        step: 1
      }), null, 16, ["class", "modelValue"])
    ]));
  }
}), la = (e, t, n, l) => new Cn({ r: e, g: t, b: n, a: l }).toString(), Nl = (e) => Cn.fromHexColor(e), na = (e) => e.getContrastFontColor(), oa = { class: "lkt-grid-1" }, aa = { class: "lkt-field-color--tooltip--rgba-container" }, sa = { class: "lkt-field-color--tooltip--hex-input-container" }, Ln = /* @__PURE__ */ we({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, { emit: t }) {
    const n = t, l = e, i = (L) => {
      if ([0, 1].includes(L.length))
        f.value = 0, o.value = 0, b.value = 0, c.value = 255;
      else if ([7, 9].includes(L.length)) {
        let a = Nl(L);
        f.value = a.r, o.value = a.g, b.value = a.b, c.value = a.a;
      }
    }, s = () => {
      g.value = la(
        f.value,
        o.value,
        b.value,
        c.value
      );
    }, u = () => {
      i(g.value), n("change");
    }, f = K(255), o = K(255), b = K(255), c = K(255), g = K(l.modelValue);
    i(g.value), ie([f, o, b, c], s), ie(() => l.modelValue, (L) => g.value = L), ie(g, (L) => n("update:modelValue", L));
    const k = X(() => na(Nl(g.value))), S = X(() => g.value === "" || g.value === "#" ? {} : {
      background: g.value,
      "--lkt-btn-bg": g.value,
      color: k.value,
      "--lkt-btn-color": k.value
    }), x = X(() => g.value === "" || g.value === "#" ? {} : {
      "--lkt-field-bg-input": g.value,
      "--lkt-field-color": k.value
    });
    return (L, a) => {
      const r = pe("lkt-button");
      return F(), Y(r, {
        class: "lkt-field--toggle-button",
        style: wl(S.value),
        text: g.value,
        type: D(je).Tooltip,
        tooltip: {
          class: "lkt-field-color--tooltip",
          locationY: D(Ot).Bottom,
          locationX: D(Ht).LeftCorner
        }
      }, {
        tooltip: be(({ doClose: d }) => [
          Ce("div", oa, [
            Ce("div", aa, [
              Ce("div", sa, [
                a[5] || (a[5] = Ce("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                ue(Mt, {
                  modelValue: g.value,
                  "onUpdate:modelValue": a[0] || (a[0] = (h) => g.value = h),
                  style: wl(x.value),
                  onChange: u
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            ue(ci, {
              modelValue: f.value,
              "onUpdate:modelValue": a[1] || (a[1] = (h) => f.value = h),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            ue(ci, {
              modelValue: o.value,
              "onUpdate:modelValue": a[2] || (a[2] = (h) => o.value = h),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            ue(ci, {
              modelValue: b.value,
              "onUpdate:modelValue": a[3] || (a[3] = (h) => b.value = h),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            ue(ci, {
              modelValue: c.value,
              "onUpdate:modelValue": a[4] || (a[4] = (h) => c.value = h),
              label: "A",
              "range-class": "color-range--alpha"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["style", "text", "type", "tooltip"]);
    };
  }
}), ra = /* @__PURE__ */ we({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, n = K(t.modelValue), l = X(() => typeof t.max == "boolean" || n.value.length < t.max ? ["inline-create"] : []);
    return (i, s) => {
      const u = pe("lkt-table");
      return F(), Y(u, {
        type: "item",
        modelValue: n.value,
        "onUpdate:modelValue": s[0] || (s[0] = (f) => n.value = f),
        perms: l.value,
        "edit-mode": e.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: be(({ item: f, index: o, isLoading: b, canCreate: c, canRead: g, canUpdate: k, canDrop: S, doDrop: x }) => [
          ue(Ln, {
            modelValue: n.value[o],
            "onUpdate:modelValue": (L) => n.value[o] = L
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
}), ua = (e, t, n, l, i) => {
  if (typeof l < "u") {
    let s = parseInt(l);
    n.replace(/\D+/g, "").length < s ? e.push(xe.createMinNumbers(s, ye.Ko)) : t === Ze.All && e.push(xe.createMinNumbers(s, ye.Ok));
  }
  if (typeof i < "u") {
    let s = parseInt(i);
    n.replace(/\D+/g, "").length > s ? e.push(xe.createMaxNumbers(s, ye.Ko)) : t === Ze.All && e.push(xe.createMinNumbers(s, ye.Ok));
  }
}, ca = (e, t, n, l, i) => {
  if (typeof l < "u") {
    let s = parseInt(l);
    n.replace(/[^A-Z]+/g, "").length < s ? e.push(xe.createMinUpperChars(s, ye.Ko)) : t === Ze.All && e.push(xe.createMinUpperChars(s, ye.Ok));
  }
  if (typeof i < "u") {
    let s = parseInt(i);
    n.replace(/[^A-Z]+/g, "").length > s ? e.push(xe.createMaxUpperChars(s, ye.Ko)) : t === Ze.All && e.push(xe.createMaxUpperChars(s, ye.Ok));
  }
}, da = (e, t, n, l, i) => {
  if (typeof l < "u") {
    let s = parseInt(l);
    n.replace(/[A-Z]+/g, "").length < s ? e.push(xe.createMinLowerChars(s, ye.Ko)) : t === Ze.All && e.push(xe.createMinLowerChars(s, ye.Ok));
  }
  if (typeof i < "u") {
    let s = parseInt(i);
    n.replace(/[A-Z]+/g, "").length > s ? e.push(xe.createMaxLowerChars(s, ye.Ko)) : t === Ze.All && e.push(xe.createMaxLowerChars(s, ye.Ok));
  }
}, fa = (e, t, n, l, i) => {
  if (typeof l < "u") {
    let s = parseInt(l);
    n.replace(/\d+/g, "").length < s ? e.push(xe.createMinChars(s, ye.Ko)) : t === Ze.All && e.push(xe.createMinChars(s, ye.Ok));
  }
  if (typeof i < "u") {
    let s = parseInt(i);
    n.replace(/\d+/g, "").length > s ? e.push(xe.createMaxChars(s, ye.Ko)) : t === Ze.All && e.push(xe.createMaxChars(s, ye.Ok));
  }
}, ha = (e, t, n, l, i) => {
  if (typeof l < "u") {
    let s = parseInt(l);
    n.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < s ? e.push(xe.createMinSpecialChars(s, ye.Ko)) : t === Ze.All && e.push(xe.createMinSpecialChars(s, ye.Ok));
  }
  if (typeof i < "u") {
    let s = parseInt(i);
    n.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > s ? e.push(xe.createMaxSpecialChars(s, ye.Ko)) : t === Ze.All && e.push(xe.createMaxSpecialChars(s, ye.Ok));
  }
}, Rl = (e, t = "default") => {
  if (!e) return "";
  let n = ee.validationMessages[t] && ee.validationMessages[t][e] ? ee.validationMessages[t][e] : "";
  return n || (n = ""), n;
}, pa = { class: "boolean-input" }, ma = ["innerHTML"], ga = ["name", "id", "disabled", "readonly", "value", "checked"], va = /* @__PURE__ */ we({
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
    const n = t, l = e, i = K(null), s = K(l.modelValue), u = K(s.value ? "true" : "false"), f = K(l.focusing), o = (c) => {
      f.value = !0, n("focus", c);
    }, b = (c) => {
      f.value = !1, n("blur", c);
    };
    return ie(() => l.modelValue, (c) => s.value = c), ie(s, (c) => n("update:modelValue", c)), (c, g) => (F(), ce("div", pa, [
      g[1] || (g[1] = Ce("div", { class: "boolean-input-label" }, [
        Ce("div", { class: "boolean-input--check-on" })
      ], -1)),
      e.label ? (F(), ce("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: e.label
      }, null, 8, ma)) : ae("", !0),
      Ve(Ce("input", {
        "onUpdate:modelValue": g[0] || (g[0] = (k) => s.value = k),
        type: "checkbox",
        ref_key: "input",
        ref: i,
        name: e.name,
        id: e.id,
        disabled: !e.editable || e.disabled,
        readonly: !e.editable || e.readonly,
        value: u.value,
        checked: s.value,
        onFocus: o,
        onBlur: b
      }, null, 40, ga), [
        [So, s.value]
      ])
    ]));
  }
});
function Le(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var di = { exports: {} }, ba = di.exports, Al;
function ya() {
  return Al || (Al = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ba, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ckb", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(di)), di.exports;
}
var Ca = /* @__PURE__ */ ya();
const Bn = /* @__PURE__ */ Le(Ca);
var fi = { exports: {} }, _a = fi.exports, Il;
function wa() {
  return Il || (Il = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : _a, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "cs", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(fi)), fi.exports;
}
var ka = /* @__PURE__ */ wa();
const zn = /* @__PURE__ */ Le(ka);
var hi = { exports: {} }, xa = hi.exports, Vl;
function Sa() {
  return Vl || (Vl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : xa, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "da", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(hi)), hi.exports;
}
var Ta = /* @__PURE__ */ Sa();
const Nn = /* @__PURE__ */ Le(Ta);
var pi = { exports: {} }, Ea = pi.exports, Dl;
function La() {
  return Dl || (Dl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Ea, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "de", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(pi)), pi.exports;
}
var Ba = /* @__PURE__ */ La();
const Rn = /* @__PURE__ */ Le(Ba);
var mi = { exports: {} }, za = mi.exports, Ml;
function Na() {
  return Ml || (Ml = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : za, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "en", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(mi)), mi.exports;
}
var Ra = /* @__PURE__ */ Na();
const Pi = /* @__PURE__ */ Le(Ra);
var gi = { exports: {} }, Aa = gi.exports, Ol;
function Ia() {
  return Ol || (Ol = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Aa, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "es", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(gi)), gi.exports;
}
var Va = /* @__PURE__ */ Ia();
const An = /* @__PURE__ */ Le(Va);
var vi = { exports: {} }, Da = vi.exports, Hl;
function Ma() {
  return Hl || (Hl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Da, function(t, n) {
      const l = {
        code: "fa",
        toolbar: {
          default: "پیش فرض",
          save: "ذخیره",
          font: "فونت",
          formats: "قالب‌ها",
          fontSize: "اندازه‌ی فونت",
          bold: "پررنگ کردن",
          underline: "زیرخطدار کردن",
          italic: "کج کردن",
          strike: "خط میان‌دار کردن",
          subscript: "نوشتن به صورت زیر متن",
          superscript: "نوشتن به صورت بالای متن",
          removeFormat: "حذف قالب",
          fontColor: "رنگ پیش زمینه",
          hiliteColor: "رنگ پس‌زمینه",
          indent: "جلو بردن",
          outdent: "عقب بردن",
          align: "چیدمان",
          alignLeft: "چپ‌چین",
          alignRight: "راست‌چین",
          alignCenter: "وسط‌چین",
          alignJustify: "همتراز از هر دو سمت",
          list: "لیست",
          orderList: "لیست شمارشی",
          unorderList: "لیست گلوله‌ای",
          horizontalRule: "درج خط افقی",
          hr_solid: "تو پر",
          hr_dotted: "نقطه‌چین",
          hr_dashed: "خط تیره",
          table: "درج جدول",
          link: "درج لینک",
          math: "درج فرمول ریاضی",
          image: "درج تصویر",
          video: "درج ویدئو",
          audio: "درج صوت",
          fullScreen: "تمام صفحه",
          showBlocks: "نمایش بلاک‌بندی",
          codeView: "مشاهده‌ی کُد HTML",
          undo: "برگرداندن تغییر",
          redo: "تکرار تغییر",
          preview: "پیش نمایش",
          print: "چاپ",
          tag_p: "پاراگراف",
          tag_div: "عادی (DIV)",
          tag_h: "هدر",
          tag_blockquote: "نقل قول",
          tag_pre: "کُد",
          template: "درج محتوا بر اساس الگو",
          lineHeight: "ارتفاع خط",
          paragraphStyle: "استایل پاراگراف",
          textStyle: "استایل متن",
          imageGallery: "گالری تصاویر",
          dir_ltr: "چپ به راست",
          dir_rtl: "راست به چپ",
          mention: "ذکر کردن"
        },
        dialogBox: {
          linkBox: {
            title: "درج  لینک",
            url: "آدرس لینک",
            text: "عنوان لینک",
            newWindowCheck: "در پنجره‌ی جدیدی باز شود",
            downloadLinkCheck: "لینک دانلود",
            bookmark: "نشان"
          },
          mathBox: {
            title: "فرمول ریاضی",
            inputLabel: "تعریف فرمول",
            fontSizeLabel: "اندازه‌ی فونت",
            previewLabel: "پیش نمایش"
          },
          imageBox: {
            title: "درج تصویر",
            file: "انتخاب فایل",
            url: "آدرس Url",
            altText: "متن جایگزین"
          },
          videoBox: {
            title: "درج ویدئو",
            file: "انتخاب فایل",
            url: "آدرس Url ویدئو, YouTube/Vimeo"
          },
          audioBox: {
            title: "درج صوت",
            file: "انتخاب فایل",
            url: "آدرس Url"
          },
          browser: {
            tags: "تگ‌ها",
            search: "جستجو"
          },
          caption: "توضیح",
          close: "بستن",
          submitButton: "درج",
          revertButton: "برگرداندن تغییرات",
          proportion: "محدودیت اندازه",
          basic: "چیدمان پیش فرض",
          left: "چپ",
          right: "راست",
          center: "وسط",
          width: "پهنا",
          height: "ارتفاع",
          size: "اندازه",
          ratio: "نسبت"
        },
        controller: {
          edit: "ویرایش",
          unlink: "حذف لینک",
          remove: "حذف",
          insertRowAbove: "درج سطر در بالا",
          insertRowBelow: "درج سطر در پایین",
          deleteRow: "حذف سطر",
          insertColumnBefore: "درج یک ستون به عقب",
          insertColumnAfter: "درج یک ستون در جلو",
          deleteColumn: "حذف ستون",
          fixedColumnWidth: "اندازه ستون ثابت",
          resize100: "اندازه‌ی 100%",
          resize75: "اندازه‌ی 75%",
          resize50: "اندازه‌ی 50%",
          resize25: "اندازه‌ی 25%",
          autoSize: "اندازه‌ی خودکار",
          mirrorHorizontal: "بر عکس کردن در جهت افقی",
          mirrorVertical: "بر عکس کردن در جهت عمودی",
          rotateLeft: "دوران به چپ",
          rotateRight: "دوران به راست",
          maxSize: "حداکثر اندازه",
          minSize: "حداقل اندازه",
          tableHeader: "هدر جدول",
          mergeCells: "ادغام خانه‌ها",
          splitCells: "تقسیم خانه به چند خانه",
          HorizontalSplit: "تقسیم در جهت افقی",
          VerticalSplit: "تقسیم در جهت عمودی"
        },
        menu: {
          spaced: "فضادار",
          bordered: "لبه‌دار",
          neon: "نئونی",
          translucent: "نیمه شفاف",
          shadow: "سایه",
          code: "کُد"
        }
      };
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "fa", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(vi)), vi.exports;
}
var Oa = /* @__PURE__ */ Ma();
const In = /* @__PURE__ */ Le(Oa);
var bi = { exports: {} }, Ha = bi.exports, Fl;
function Fa() {
  return Fl || (Fl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Ha, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "fr", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(bi)), bi.exports;
}
var Ua = /* @__PURE__ */ Fa();
const Vn = /* @__PURE__ */ Le(Ua);
var yi = { exports: {} }, Pa = yi.exports, Ul;
function Wa() {
  return Ul || (Ul = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Pa, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "he", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(yi)), yi.exports;
}
var $a = /* @__PURE__ */ Wa();
const Dn = /* @__PURE__ */ Le($a);
var Ci = { exports: {} }, qa = Ci.exports, Pl;
function Za() {
  return Pl || (Pl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : qa, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "hu", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(Ci)), Ci.exports;
}
var ja = /* @__PURE__ */ Za();
const Mn = /* @__PURE__ */ Le(ja);
var _i = { exports: {} }, Ga = _i.exports, Wl;
function Ka() {
  return Wl || (Wl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG una finestra con un documento");
        return n(l);
      };
    })(typeof window < "u" ? window : Ga, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "it", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(_i)), _i.exports;
}
var Ya = /* @__PURE__ */ Ka();
const On = /* @__PURE__ */ Le(Ya);
var wi = { exports: {} }, Xa = wi.exports, $l;
function Ja() {
  return $l || ($l = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Xa, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ja", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(wi)), wi.exports;
}
var Qa = /* @__PURE__ */ Ja();
const Hn = /* @__PURE__ */ Le(Qa);
var ki = { exports: {} }, es = ki.exports, ql;
function ts() {
  return ql || (ql = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : es, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ko", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(ki)), ki.exports;
}
var is = /* @__PURE__ */ ts();
const Fn = /* @__PURE__ */ Le(is);
var xi = { exports: {} }, ls = xi.exports, Zl;
function ns() {
  return Zl || (Zl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ls, function(t, n) {
      const l = {
        code: "km",
        toolbar: {
          default: "លំនាំដើម",
          save: "រក្សាទុក",
          font: "ពុម្ពអក្សរ",
          formats: "ទ្រង់ទ្រាយ",
          fontSize: "ទំហំអក្សរ",
          bold: "អក្សរដិត",
          underline: "គូសបន្ទាត់ក្រោម",
          italic: "អក្សរទ្រេត",
          strike: "ឆូតអក្សរ",
          subscript: "អក្សរតូចក្រោម",
          superscript: "អក្សរតូចលើ",
          removeFormat: "លុបទ្រង់ទ្រាយ",
          fontColor: "ពណ៌អក្សរ",
          hiliteColor: "ពណ៌បន្លិច",
          indent: "ចូលបន្ទាត់",
          outdent: "ចេញបន្ទាត់",
          align: "តម្រឹម",
          alignLeft: "តម្រឹមឆ្វេង",
          alignRight: "តម្រឹមស្ដាំ",
          alignCenter: "តម្រឹមកណ្តាល",
          alignJustify: "តម្រឹមសម្រួល",
          list: "បញ្ជី",
          orderList: "បញ្ជីលេខលំដាប់",
          unorderList: "បញ្ជីសញ្ញាលំដាប់",
          horizontalRule: "បន្ទាត់ផ្តេក",
          hr_solid: "បន្ទាត់ខ្សែស្មើ",
          hr_dotted: "បន្ទាត់ចុចស្មើ",
          hr_dashed: "បន្ទាត់ត្រេស្មើ",
          table: "តារាង",
          link: "តំណ",
          math: "គណិត",
          image: "រូបភាព",
          video: "វីដេអូ",
          audio: "អូឌីយូ",
          fullScreen: "អេក្រង់ពេញ",
          showBlocks: "បង្ហាញប្លក់",
          codeView: "មើលកូដ",
          undo: "មិនធ្វើវិញ",
          redo: "ធ្វើវិញ",
          preview: "មើលជាមុន",
          print: "បោះពុម្ព",
          tag_p: "កថាខណ្ឌ",
          tag_div: "ធម្មតា (DIV)",
          tag_h: "ចំណងជើង",
          tag_blockquote: "អត្ថបទដកស្រង់",
          tag_pre: "កូដ",
          template: "ពុម្ព",
          lineHeight: "កម្ពស់បន្ទាត់",
          paragraphStyle: "រចនាប័ទ្មកថាខណ្ឌ",
          textStyle: "រចនាប័ទ្មអក្សរ",
          imageGallery: "វិចិត្រសាលរូបភាព",
          dir_ltr: "ពីឆ្វេងទៅស្តាំ",
          dir_rtl: "ពីស្តាំទៅឆ្វេង",
          mention: "លើកឡើង"
        },
        dialogBox: {
          linkBox: {
            title: "បញ្ចូលតំណ",
            url: "URL ទៅតំណ",
            text: "អត្ថបទបង្ហាញ",
            newWindowCheck: "បើកផ្ទាំងក្នុងថ្មី",
            downloadLinkCheck: "តំណទាញយក",
            bookmark: "ចំណាំ"
          },
          mathBox: {
            title: "គណិត",
            inputLabel: "សរសេរកូដគណិត",
            fontSizeLabel: "ទំហំអក្សរ",
            previewLabel: "មើលជាមុន"
          },
          imageBox: {
            title: "បញ្ចូលរូបភាព",
            file: "ជ្រើសរូបភាព",
            url: "URL រូបភាព",
            altText: "អត្ថបទជំនួស"
          },
          videoBox: {
            title: "បញ្ចូលវីដេអូ",
            file: "ជ្រើសវីដេអូ",
            url: "URL វីដេអូ (YouTube/Vimeo)"
          },
          audioBox: {
            title: "បញ្ចូលអូឌីយ៉ូ",
            file: "ជ្រើសអូឌីយ៉ូ",
            url: "URL អូឌីយ៉ូ"
          },
          browser: {
            tags: "ស្លាក",
            search: "ស្វែងរក"
          },
          caption: "បញ្ចូលការពិពណ៌នា",
          close: "បិទ",
          submitButton: "ដាក់ស្នើ",
          revertButton: "រក្សាភាពដើម",
          proportion: "កំណត់សមាមាត្រ",
          basic: "មូលដ្ឋាន",
          left: "ឆ្វេង",
          right: "ស្តាំ",
          center: "កណ្តាល",
          width: "ទទឹង",
          height: "កម្ពស់",
          size: "ទំហំ",
          ratio: "សមាមាត្រ"
        },
        controller: {
          edit: "កែសម្រួល",
          unlink: "ផ្តាច់តំណ",
          remove: "លុប",
          insertRowAbove: "បញ្ចូលជួរដេកខាងលើ",
          insertRowBelow: "បញ្ចូលជួរដេកខាងក្រោម",
          deleteRow: "លុបជួរដេក",
          insertColumnBefore: "បញ្ចូលជួរឈរមុន",
          insertColumnAfter: "បញ្ចូលជួរឈរបន្ទាប់",
          deleteColumn: "លុបជួរឈរ",
          fixedColumnWidth: "ទំហំជួរឈរត្រឹមត្រូវ",
          resize100: "ប្ដូរទំហំ 100%",
          resize75: "ប្ដូរទំហំ 75%",
          resize50: "ប្ដូរទំហំ 50%",
          resize25: "ប្ដូរទំហំ 25%",
          autoSize: "ទំហំស្វ័យប្រវត្តិ",
          mirrorHorizontal: "បញ្ច្រាសផ្ដេក",
          mirrorVertical: "បញ្ច្រាសបញ្ឈរ",
          rotateLeft: "បង្វិលឆ្វេង",
          rotateRight: "បង្វិលស្តាំ",
          maxSize: "ទំហំធំ",
          minSize: "ទំហំតូច",
          tableHeader: "ក្បាលតារាង",
          mergeCells: "បង្រួមក្រឡា",
          splitCells: "បំបែកក្រឡា",
          HorizontalSplit: "បំបែកផ្ដេក",
          VerticalSplit: "បំបែកបញ្ឈរ"
        },
        menu: {
          spaced: "មានចន្លោះ",
          bordered: "មានស៊ុម",
          neon: "Neon",
          translucent: "ថ្លា",
          shadow: "ស្រមោល",
          code: "កូដ"
        }
      };
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "km", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(xi)), xi.exports;
}
var os = /* @__PURE__ */ ns();
const Un = /* @__PURE__ */ Le(os);
var Si = { exports: {} }, as = Si.exports, jl;
function ss() {
  return jl || (jl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : as, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "lv", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(Si)), Si.exports;
}
var rs = /* @__PURE__ */ ss();
const Pn = /* @__PURE__ */ Le(rs);
var Ti = { exports: {} }, us = Ti.exports, Gl;
function cs() {
  return Gl || (Gl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : us, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "nl", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(Ti)), Ti.exports;
}
var ds = /* @__PURE__ */ cs();
const Wn = /* @__PURE__ */ Le(ds);
var Ei = { exports: {} }, fs = Ei.exports, Kl;
function hs() {
  return Kl || (Kl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : fs, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "pl", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(Ei)), Ei.exports;
}
var ps = /* @__PURE__ */ hs();
const $n = /* @__PURE__ */ Le(ps);
var Li = { exports: {} }, ms = Li.exports, Yl;
function gs() {
  return Yl || (Yl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ms, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "pt_br", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(Li)), Li.exports;
}
var vs = /* @__PURE__ */ gs();
const qn = /* @__PURE__ */ Le(vs);
var Bi = { exports: {} }, bs = Bi.exports, Xl;
function ys() {
  return Xl || (Xl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : bs, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ro", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(Bi)), Bi.exports;
}
var Cs = /* @__PURE__ */ ys();
const Zn = /* @__PURE__ */ Le(Cs);
var zi = { exports: {} }, _s = zi.exports, Jl;
function ws() {
  return Jl || (Jl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : _s, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ru", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(zi)), zi.exports;
}
var ks = /* @__PURE__ */ ws();
const jn = /* @__PURE__ */ Le(ks);
var Ni = { exports: {} }, xs = Ni.exports, Ql;
function Ss() {
  return Ql || (Ql = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : xs, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "se", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(Ni)), Ni.exports;
}
var Ts = /* @__PURE__ */ Ss();
const Gn = /* @__PURE__ */ Le(Ts);
var Ri = { exports: {} }, Es = Ri.exports, en;
function Ls() {
  return en || (en = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Es, function(t, n) {
      const l = {
        code: "tr",
        toolbar: {
          default: "Varsayılan",
          save: "Kaydet",
          font: "Yazı Tipi",
          formats: "Biçimlendirmeler",
          fontSize: "Boyut",
          bold: "Kalın",
          underline: "Alt Çizili",
          italic: "İtalik",
          strike: "Üstü Çizili",
          subscript: "Alt Simge",
          superscript: "Üst Simge",
          removeFormat: "Biçimi Kaldır",
          fontColor: "Yazı Tipi Rengi",
          hiliteColor: "Vurgu Rengi",
          indent: "Girinti",
          outdent: "Girintiyi Azalt",
          align: "Hizala",
          alignLeft: "Sola Hizala",
          alignRight: "Sağa Hizala",
          alignCenter: "Ortaya Hizala",
          alignJustify: "İki Yana Yasla",
          list: "Liste",
          orderList: "Sıralı Liste",
          unorderList: "Sırasız Liste",
          horizontalRule: "Yatay Çizgi",
          hr_solid: "Düz",
          hr_dotted: "Noktalı",
          hr_dashed: "Kesikli",
          table: "Tablo",
          link: "Bağlantı",
          math: "Matematik",
          image: "Görsel",
          video: "Video",
          audio: "Ses",
          fullScreen: "Tam Ekran",
          showBlocks: "Blokları Göster",
          codeView: "Kod Görünümü",
          undo: "Geri Al",
          redo: "İleri Al",
          preview: "Önizleme",
          print: "Yazdır",
          tag_p: "Paragraf",
          tag_div: "Normal (DIV)",
          tag_h: "Başlık",
          tag_blockquote: "Alıntı",
          tag_pre: "Kod",
          template: "Şablon",
          lineHeight: "Satır Yüksekliği",
          paragraphStyle: "Paragraf Stili",
          textStyle: "Metin Stili",
          imageGallery: "Görüntü Galerisi",
          dir_ltr: "Soldan Sağa",
          dir_rtl: "Sağdan Sola",
          mention: "Belirtmek"
        },
        dialogBox: {
          linkBox: {
            title: "Bağlantı Ekle",
            url: "Bağlantı URL'si",
            text: "Görüntülenecek Metin",
            newWindowCheck: "Yeni Pencerede Aç",
            downloadLinkCheck: "Bağlantıyı İndir",
            bookmark: "Bağlantıyı Yer İmlerine Ekle"
          },
          mathBox: {
            title: "Matematik",
            inputLabel: "Matematiksel Simgeler",
            fontSizeLabel: "Yazı Tipi Boyutu",
            previewLabel: "Önizleme"
          },
          imageBox: {
            title: "Görüntü Ekle",
            file: "Dosya Seç",
            url: "Görüntü URL'si",
            altText: "Alternatif Metin"
          },
          videoBox: {
            title: "Video Ekle",
            file: "Dosya Seç",
            url: "Medya Ekleme URL'si (YouTube/Vimeo)"
          },
          audioBox: {
            title: "Ses Ekle",
            file: "Dosya Seç",
            url: "Ses URL'si"
          },
          browser: {
            tags: "Etiketler",
            search: "Ara"
          },
          caption: "Açıklama Giriniz",
          close: "Kapat",
          submitButton: "Gönder",
          revertButton: "Geri Dön",
          proportion: "Orantıları Koru",
          basic: "Temel",
          left: "Sola",
          right: "Sağa",
          center: "Ortaya",
          width: "Genişlik",
          height: "Yükseklik",
          size: "Boyut",
          ratio: "Oran"
        },
        controller: {
          edit: "Düzenle",
          unlink: "Bağlantıyı Kaldır",
          remove: "Kaldır",
          insertRowAbove: "Satır Yukarı Ekle",
          insertRowBelow: "Satır Aşağı Ekle",
          deleteRow: "Satırı Sil",
          insertColumnBefore: "Sütun Önce Ekle",
          insertColumnAfter: "Sütun Sonrası Ekle",
          deleteColumn: "Sütunu Sil",
          fixedColumnWidth: "Sabit Sütun Genişliği",
          resize100: "%100 Ölçeklendir",
          resize75: "%75 Ölçeklendir",
          resize50: "%50 Ölçeklendir",
          resize25: "%25 Ölçeklendir",
          autoSize: "Ölçeğe Otomatik Ayar",
          mirrorHorizontal: "Düzlemsel Aynalama (Yatay)",
          mirrorVertical: "Düzlemsel Aynalama (Dikey)",
          rotateLeft: "Saat Yönünde Döndür",
          rotateRight: "Saat Yönünün Tersine Döndür",
          maxSize: "En Büyük Boyut",
          minSize: "En Küçük Boyut",
          tableHeader: "Tablo Başlığı",
          mergeCells: "Hücreleri Birleştir",
          splitCells: "Hücreleri Ayır",
          HorizontalSplit: "Yatay Ayırma",
          VerticalSplit: "Dikey Ayırma"
        },
        menu: {
          spaced: "Aralıklı",
          bordered: "Çerçeveli",
          neon: "Neon",
          translucent: "Yarı Saydam",
          shadow: "Gölge",
          code: "Kod"
        }
      };
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "tr", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(Ri)), Ri.exports;
}
var Bs = /* @__PURE__ */ Ls();
const Kn = /* @__PURE__ */ Le(Bs);
var Ai = { exports: {} }, zs = Ai.exports, tn;
function Ns() {
  return tn || (tn = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : zs, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ua", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(Ai)), Ai.exports;
}
var Rs = /* @__PURE__ */ Ns();
const Yn = /* @__PURE__ */ Le(Rs);
var Ii = { exports: {} }, As = Ii.exports, ln;
function Is() {
  return ln || (ln = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : As, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "ur", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(Ii)), Ii.exports;
}
var Vs = /* @__PURE__ */ Is();
const Xn = /* @__PURE__ */ Le(Vs);
var Vi = { exports: {} }, Ds = Vi.exports, nn;
function Ms() {
  return nn || (nn = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Ds, function(t, n) {
      const l = {
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
      return typeof n > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_LANG, "zh_cn", {
        enumerable: !0,
        writable: !0,
        configurable: !0,
        value: l
      })), l;
    });
  })(Vi)), Vi.exports;
}
var Os = /* @__PURE__ */ Ms();
const Jn = /* @__PURE__ */ Le(Os), Hs = { ckb: Bn, cs: zn, da: Nn, de: Rn, en: Pi, es: An, fa: In, fr: Vn, he: Dn, hu: Mn, it: On, ja: Hn, ko: Fn, km: Un, lv: Pn, nl: Wn, pl: $n, pt_br: qn, ro: Zn, ru: jn, se: Gn, tr: Kn, ua: Yn, ur: Xn, zh_cn: Jn }, on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: Bn,
  cs: zn,
  da: Nn,
  de: Rn,
  default: Hs,
  en: Pi,
  es: An,
  fa: In,
  fr: Vn,
  he: Dn,
  hu: Mn,
  it: On,
  ja: Hn,
  km: Un,
  ko: Fn,
  lv: Pn,
  nl: Wn,
  pl: $n,
  pt_br: qn,
  ro: Zn,
  ru: jn,
  se: Gn,
  tr: Kn,
  ua: Yn,
  ur: Xn,
  zh_cn: Jn
}, Symbol.toStringTag, { value: "Module" })), Fs = {
  name: "blockquote",
  display: "command",
  add: function(e, t) {
    const n = e.context;
    n.blockquote = {
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
}, Us = {
  name: "align",
  display: "submenu",
  add: function(e, t) {
    const n = e.icons, l = e.context;
    l.align = {
      targetButton: t,
      _itemMenu: null,
      _alignList: null,
      currentAlign: "",
      defaultDir: e.options.rtl ? "right" : "left",
      icons: {
        justify: n.align_justify,
        left: n.align_left,
        right: n.align_right,
        center: n.align_center
      }
    };
    let i = this.setSubmenu(e), s = l.align._itemMenu = i.querySelector("ul");
    s.addEventListener("click", this.pickup.bind(e)), l.align._alignList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, i), i = null, s = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, n = e.icons, l = e.util.createElement("DIV"), i = e.options.alignItems;
    let s = "";
    for (let u = 0, f, o; u < i.length; u++)
      f = i[u], o = t.toolbar["align" + f.charAt(0).toUpperCase() + f.slice(1)], s += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + f + '" title="' + o + '" aria-label="' + o + '"><span class="se-list-icon">' + n["align_" + f] + "</span>" + o + "</button></li>";
    return l.className = "se-submenu se-list-layer se-list-align", l.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + s + "</ul></div>", l;
  },
  /**
   * @Override core
   */
  active: function(e) {
    const t = this.context.align, n = t.targetButton, l = n.firstElementChild;
    if (!e)
      this.util.changeElement(l, t.icons[t.defaultDir]), n.removeAttribute("data-focus");
    else if (this.util.isFormatElement(e)) {
      const i = e.style.textAlign;
      if (i)
        return this.util.changeElement(l, t.icons[i] || t.icons[t.defaultDir]), n.setAttribute("data-focus", i), !0;
    }
    return !1;
  },
  /**
   * @Override submenu
   */
  on: function() {
    const e = this.context.align, t = e._alignList, n = e.targetButton.getAttribute("data-focus") || e.defaultDir;
    if (n !== e.currentAlign) {
      for (let l = 0, i = t.length; l < i; l++)
        n === t[l].getAttribute("data-value") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
      e.currentAlign = n;
    }
  },
  exchangeDir: function() {
    const e = this.options.rtl ? "right" : "left";
    if (!this.context.align || this.context.align.defaultDir === e) return;
    this.context.align.defaultDir = e;
    let t = this.context.align._itemMenu, n = t.querySelector('[data-value="left"]'), l = t.querySelector('[data-value="right"]');
    if (n && l) {
      const i = n.parentElement, s = l.parentElement;
      i.appendChild(l), s.appendChild(n);
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, n = null;
    for (; !n && !/UL/i.test(t.tagName); )
      n = t.getAttribute("data-value"), t = t.parentNode;
    if (!n) return;
    const l = this.context.align.defaultDir, i = this.getSelectedElements();
    for (let s = 0, u = i.length; s < u; s++)
      this.util.setStyle(i[s], "textAlign", n === l ? "" : n);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, Ps = {
  name: "font",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.font = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _fontList: null,
      currentFont: ""
    };
    let l = this.setSubmenu(e);
    l.querySelector(".se-list-inner").addEventListener("click", this.pickup.bind(e)), n.font._fontList = l.querySelectorAll("ul li button"), e.initMenuTarget(this.name, t, l), l = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer se-list-font-family";
    let l, i, s, u, f = e.options.font, o = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (s = 0, u = f.length; s < u; s++)
      l = f[s], i = l.split(",")[0], o += '<li><button type="button" class="se-btn-list" data-value="' + l + '" data-txt="' + i + '" title="' + i + '" aria-label="' + i + '" style="font-family:' + l + ';">' + i + "</button></li>";
    return o += "</ul></div>", n.innerHTML = o, n;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.font.targetText, n = this.context.font.targetTooltip;
    if (e) {
      if (e.style && e.style.fontFamily.length > 0) {
        const l = e.style.fontFamily.replace(/["']/g, "");
        return this.util.changeTxt(t, l), this.util.changeTxt(n, this.lang.toolbar.font + " (" + l + ")"), !0;
      }
    } else {
      const l = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
      this.util.changeTxt(t, l), this.util.changeTxt(n, this.hasFocus ? this.lang.toolbar.font + (l ? " (" + l + ")" : "") : l);
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.font, t = e._fontList, n = e.targetText.textContent;
    if (n !== e.currentFont) {
      for (let l = 0, i = t.length; l < i; l++)
        n === (t[l].getAttribute("data-value") || "").replace(/'|"/g, "") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
      e.currentFont = n;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    let t = e.target.getAttribute("data-value");
    if (t) {
      const n = this.util.createElement("SPAN");
      /[\s\d\W]/.test(t) && !/^['"].*['"]$/.test(t) && (t = '"' + t + '"'), n.style.fontFamily = t, this.nodeChange(n, ["font-family"], null, null);
    } else
      this.nodeChange(null, ["font-family"], ["span"], !0);
    this.submenuOff();
  }
}, Ws = {
  name: "fontSize",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.fontSize = {
      targetText: t.querySelector(".txt"),
      _sizeList: null,
      currentSize: ""
    };
    let l = this.setSubmenu(e), i = l.querySelector("ul");
    i.addEventListener("click", this.pickup.bind(e)), n.fontSize._sizeList = i.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, i = null;
  },
  setSubmenu: function(e) {
    const t = e.options, n = e.lang, l = e.util.createElement("DIV");
    l.className = "se-submenu se-list-layer se-list-font-size";
    const i = t.fontSize ? t.fontSize : [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    let s = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + n.toolbar.default + '" aria-label="' + n.toolbar.default + '">(' + n.toolbar.default + ")</button></li>";
    for (let u = 0, f = t.fontSizeUnit, o = i.length, b; u < o; u++)
      b = i[u], s += '<li><button type="button" class="se-btn-list" data-value="' + b + f + '" title="' + b + f + '" aria-label="' + b + f + '" style="font-size:' + b + f + ';">' + b + "</button></li>";
    return s += "</ul></div>", l.innerHTML = s, l;
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
    const e = this.context.fontSize, t = e._sizeList, n = e.targetText.textContent;
    if (n !== e.currentSize) {
      for (let l = 0, i = t.length; l < i; l++)
        n === t[l].getAttribute("data-value") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
      e.currentSize = n;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value");
    if (t) {
      const n = this.util.createElement("SPAN");
      n.style.fontSize = t, this.nodeChange(n, ["font-size"], null, null);
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
    const n = e.options, l = e.lang, i = !n.colorList || n.colorList.length === 0 ? [
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
    ] : n.colorList;
    let s = [], u = '<div class="se-list-inner">';
    for (let f = 0, o = i.length, b; f < o; f++)
      b = i[f], b && (typeof b == "string" && (s.push(b), f < o - 1) || (s.length > 0 && (u += '<div class="se-selector-color">' + t(s) + "</div>", s = []), typeof b == "object" && (u += '<div class="se-selector-color">' + t(b) + "</div>")));
    return u += '<form class="se-form-group"><input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/><button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + l.dialogBox.submitButton + '" aria-label="' + l.dialogBox.submitButton + '">' + e.icons.checked + '</button><button type="button" class="se-btn _se_color_picker_remove" title="' + l.toolbar.removeFormat + '" aria-label="' + l.toolbar.removeFormat + '">' + e.icons.erase + "</button></form></div>", u;
  },
  /**
   * @description Internal function used by this.createColorList
   * @param {Array} colorList Color list
   * @private
   */
  _makeColorList: function(e) {
    let t = "";
    t += '<ul class="se-color-pallet">';
    for (let n = 0, l = e.length, i; n < l; n++)
      i = e[n], typeof i == "string" && (t += '<li><button type="button" data-value="' + i + '" title="' + i + '" aria-label="' + i + '" style="background-color:' + i + ';"></button></li>');
    return t += "</ul>", t;
  },
  /**
   * @description Displays or resets the currently selected color at color list.
   * @param {Node} node Current Selected node
   * @param {String|null} color Color value
   */
  init: function(e, t) {
    const n = this.plugins.colorPicker;
    let l = t || n.getColorInNode.call(this, e) || this.context.colorPicker._defaultColor;
    l = n.isHexColor(l) ? l : n.rgb2hex(l) || l;
    const i = this.context.colorPicker._colorList;
    if (i)
      for (let s = 0, u = i.length; s < u; s++)
        l.toLowerCase() === i[s].getAttribute("data-value").toLowerCase() ? this.util.addClass(i[s], "active") : this.util.removeClass(i[s], "active");
    n.setInputText.call(this, n.colorName2hex.call(this, l));
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
    const n = this.context.colorPicker._styleProperty;
    for (; e && !this.util.isWysiwygDiv(e) && t.length === 0; )
      e.nodeType === 1 && e.style[n] && (t = e.style[n]), e = e.parentNode;
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
    var n = this._w.getComputedStyle(this._d.body.appendChild(t)).color.match(/\d+/g).map(function(l) {
      return parseInt(l, 10);
    });
    return this.util.removeItem(t), n.length >= 3 ? "#" + ((1 << 24) + (n[0] << 16) + (n[1] << 8) + n[2]).toString(16).substr(1) : !1;
  }
}, $s = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Qn]);
    const n = e.context;
    n.fontColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let l = this.setSubmenu(e);
    n.fontColor.colorInput = l.querySelector("._se_color_picker_input"), n.fontColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), l.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), l.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), l.addEventListener("click", this.pickup.bind(e)), n.fontColor.colorList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, n = e.util.createElement("DIV");
    return n.className = "se-submenu se-list-layer", n.innerHTML = t, n;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.colorPicker, t = this.context.fontColor;
    e._colorInput = t.colorInput;
    const n = this.wwComputedStyle.color;
    e._defaultColor = n ? this.plugins.colorPicker.isHexColor(n) ? n : this.plugins.colorPicker.rgb2hex(n) : "#333333", e._styleProperty = "color", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
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
}, qs = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Qn]);
    const n = e.context;
    n.hiliteColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let l = this.setSubmenu(e);
    n.hiliteColor.colorInput = l.querySelector("._se_color_picker_input"), n.hiliteColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), l.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), l.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), l.addEventListener("click", this.pickup.bind(e)), n.hiliteColor.colorList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, n = e.util.createElement("DIV");
    return n.className = "se-submenu se-list-layer", n.innerHTML = t, n;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.colorPicker, t = this.context.hiliteColor;
    e._colorInput = t.colorInput;
    const n = this.wwComputedStyle.backgroundColor;
    e._defaultColor = n ? this.plugins.colorPicker.isHexColor(n) ? n : this.plugins.colorPicker.rgb2hex(n) : "#ffffff", e._styleProperty = "backgroundColor", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
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
}, Zs = {
  name: "horizontalRule",
  display: "submenu",
  add: function(e, t) {
    e.context.horizontalRule = {
      currentHR: null
    };
    let n = this.setSubmenu(e);
    n.querySelector("ul").addEventListener("click", this.horizontalRulePick.bind(e)), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, n = e.util.createElement("DIV"), l = e.options.hrItems || [{ name: t.toolbar.hr_solid, class: "__se__solid" }, { name: t.toolbar.hr_dashed, class: "__se__dashed" }, { name: t.toolbar.hr_dotted, class: "__se__dotted" }];
    let i = "";
    for (let s = 0, u = l.length; s < u; s++)
      i += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + l[s].class + '" title="' + l[s].name + '" aria-label="' + l[s].name + '"><hr' + (l[s].class ? ' class="' + l[s].class + '"' : "") + (l[s].style ? ' style="' + l[s].style + '"' : "") + "/></button></li>";
    return n.className = "se-submenu se-list-layer se-list-line", n.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + i + "</ul></div>", n;
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
    let t = e.target, n = t.getAttribute("data-command");
    for (; !n && !/UL/i.test(t.tagName); )
      t = t.parentNode, n = t.getAttribute("data-command");
    if (!n) return;
    const l = this.plugins.horizontalRule.appendHr.call(this, t.firstElementChild);
    l && (this.setRange(l, 0, l, 0), this.submenuOff());
  }
}, js = {
  name: "list",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.list = {
      targetButton: t,
      _list: null,
      currentList: "",
      icons: {
        bullets: e.icons.list_bullets,
        number: e.icons.list_number
      }
    };
    let l = this.setSubmenu(e), i = l.querySelector("ul");
    i.addEventListener("click", this.pickup.bind(e)), n.list._list = i.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, i = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, n = e.util.createElement("DIV");
    return n.className = "se-submenu se-list-layer", n.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + t.toolbar.orderList + '" aria-label="' + t.toolbar.orderList + '">' + e.icons.list_number + '</button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + t.toolbar.unorderList + '" aria-label="' + t.toolbar.unorderList + '">' + e.icons.list_bullets + "</button></li></ul></div>", n;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.list.targetButton, n = t.firstElementChild, l = this.util;
    if (l.isList(e)) {
      const i = e.nodeName;
      return t.setAttribute("data-focus", i), l.addClass(t, "active"), /UL/i.test(i) ? l.changeElement(n, this.context.list.icons.bullets) : l.changeElement(n, this.context.list.icons.number), !0;
    } else
      t.removeAttribute("data-focus"), l.changeElement(n, this.context.list.icons.number), l.removeClass(t, "active");
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.list, t = e._list, n = e.targetButton.getAttribute("data-focus") || "";
    if (n !== e.currentList) {
      for (let l = 0, i = t.length; l < i; l++)
        n === t[l].getAttribute("data-command") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
      e.currentList = n;
    }
  },
  editList: function(e, t, n) {
    let l = this.getRange(), i = t || this.getSelectedElementsAndComponents(!1);
    if (i.length === 0 && (t || (l = this.getRange_addLine(l, null), i = this.getSelectedElementsAndComponents(!1), i.length === 0)))
      return;
    const s = this.util;
    s.sortByDepth(i, !0);
    let u = i[0], f = i[i.length - 1], o = (s.isListCell(u) || s.isComponent(u)) && !u.previousElementSibling ? u.parentNode.previousElementSibling : u.previousElementSibling, b = (s.isListCell(f) || s.isComponent(f)) && !f.nextElementSibling ? f.parentNode.nextElementSibling : f.nextElementSibling;
    const c = l.collapsed, g = {
      sc: l.startContainer,
      so: l.startContainer === l.endContainer && s.onlyZeroWidthSpace(l.startContainer) && l.startOffset === 0 && l.endOffset === 1 ? l.endOffset : l.startOffset,
      ec: l.endContainer,
      eo: l.endOffset
    };
    let k = null, S = !0;
    for (let x = 0, L = i.length; x < L; x++)
      if (!s.isList(s.getRangeFormatElement(i[x], (function(a) {
        return this.getRangeFormatElement(a) && a !== i[x];
      }).bind(s)))) {
        S = !1;
        break;
      }
    if (S && (!o || u.tagName !== o.tagName || e !== o.tagName.toUpperCase()) && (!b || f.tagName !== b.tagName || e !== b.tagName.toUpperCase())) {
      if (n) {
        for (let h = 0, p = i.length; h < p; h++)
          for (let v = h - 1; v >= 0; v--)
            if (i[v].contains(i[h])) {
              i.splice(h, 1), h--, p--;
              break;
            }
      }
      const x = s.getRangeFormatElement(u), L = x && x.tagName === e;
      let a, r;
      const d = (function(h) {
        return !this.isComponent(h);
      }).bind(s);
      L || (r = s.createElement(e));
      for (let h = 0, p = i.length, v, m; h < p; h++)
        m = s.getRangeFormatElement(i[h], d), !(!m || !s.isList(m)) && (v ? v !== m ? (n && s.isListCell(m.parentNode) ? this.plugins.list._detachNested.call(this, a.f) : k = this.detachRangeFormatElement(a.f[0].parentNode, a.f, r, !1, !0), m = i[h].parentNode, L || (r = s.createElement(e)), v = m, a = { r: v, f: [s.getParentElement(i[h], "LI")] }) : a.f.push(s.getParentElement(i[h], "LI")) : (v = m, a = { r: v, f: [s.getParentElement(i[h], "LI")] }), h === p - 1 && (n && s.isListCell(m.parentNode) ? this.plugins.list._detachNested.call(this, a.f) : k = this.detachRangeFormatElement(a.f[0].parentNode, a.f, r, !1, !0)));
    } else {
      const x = o && o.parentNode, L = b && b.parentNode;
      o = x && !s.isWysiwygDiv(x) && x.nodeName === e ? x : o, b = L && !s.isWysiwygDiv(L) && L.nodeName === e ? L : b;
      const a = o && o.tagName === e, r = b && b.tagName === e;
      let d = a ? o : s.createElement(e), h = null, p = null, v = null;
      const m = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(s);
      for (let y = 0, _ = i.length, C, w, z, T, B, N, $, O, U; y < _; y++) {
        if (w = i[y], w.childNodes.length === 0 && !s._isIgnoreNodeChange(w)) {
          s.removeItem(w);
          continue;
        }
        if (T = i[y + 1], B = w.parentNode, N = T ? T.parentNode : null, z = s.isListCell(w), U = s.isRangeFormatElement(B) ? B : null, $ = z && !s.isWysiwygDiv(B) ? B.parentNode : B, O = z && !s.isWysiwygDiv(B) ? !T || s.isListCell($) ? B : B.nextSibling : w.nextSibling, C = s.createElement("LI"), s.copyFormatAttributes(C, w), y === 0 && g.sc === w && (g.sc = C), y === _ - 1 && g.ec === w && (g.ec = C), s.isComponent(w)) {
          const M = /^HR$/i.test(w.nodeName);
          M || (C.innerHTML = "<br>"), C.innerHTML += w.outerHTML, M && (C.innerHTML += "<br>");
        } else {
          const M = w.childNodes;
          for (; M[0]; )
            C.appendChild(M[0]);
        }
        d.appendChild(C), (!T || $ !== N || s.isRangeFormatElement(O)) && (h || (h = d), (!a || !T || $ !== N) && !(T && s.isList(N) && N === B) && d.parentNode !== $ && $.insertBefore(d, O)), s.removeItem(w), a && p === null && (p = d.children.length - 1), T && (s.getRangeFormatElement(N, m) !== s.getRangeFormatElement(B, m) || s.isList(N) && s.isList(B) && s.getElementDepth(N) !== s.getElementDepth(B)) && (d = s.createElement(e)), U && U.children.length === 0 && s.removeItem(U);
      }
      p && (h = h.children[p]), r && (v = d.children.length - 1, d.innerHTML += b.innerHTML, d.children[v], s.removeItem(b));
    }
    return this.effectNode = null, c && k || g;
  },
  _detachNested: function(e) {
    const t = e[0], n = e[e.length - 1], l = n.nextElementSibling, i = t.parentNode, s = i.parentNode.nextElementSibling, u = i.parentNode.parentNode;
    for (let o = 0, b = e.length; o < b; o++)
      u.insertBefore(e[o], s);
    if (l && i.children.length > 0) {
      const o = i.cloneNode(!1), b = i.childNodes, c = this.util.getPositionIndex(l);
      for (; b[c]; )
        o.appendChild(b[c]);
      n.appendChild(o);
    }
    i.children.length === 0 && this.util.removeItem(i), this.util.mergeSameTags(u);
    const f = this.util.getEdgeChildNodes(t, n);
    return {
      cc: t.parentNode,
      sc: f.sc,
      ec: f.ec
    };
  },
  editInsideList: function(e, t) {
    t = t || this.getSelectedElements().filter((function(u) {
      return this.isListCell(u);
    }).bind(this.util));
    const n = t.length;
    if (n === 0 || !e && !this.util.isListCell(t[0].previousElementSibling) && !this.util.isListCell(t[n - 1].nextElementSibling))
      return {
        sc: t[0],
        so: 0,
        ec: t[n - 1],
        eo: 1
      };
    let l = t[0].parentNode, i = t[n - 1], s = null;
    if (e) {
      if (l !== i.parentNode && this.util.isList(i.parentNode.parentNode) && i.nextElementSibling)
        for (i = i.nextElementSibling; i; )
          t.push(i), i = i.nextElementSibling;
      s = this.plugins.list.editList.call(this, l.nodeName.toUpperCase(), t, !0);
    } else {
      let u = this.util.createElement(l.nodeName), f = t[0].previousElementSibling, o = i.nextElementSibling;
      const b = { s: null, e: null, sl: l, el: l };
      for (let k = 0, S = n, x; k < S; k++)
        x = t[k], x.parentNode !== l && (this.plugins.list._insiedList.call(this, l, u, f, o, b), l = x.parentNode, u = this.util.createElement(l.nodeName)), f = x.previousElementSibling, o = x.nextElementSibling, u.appendChild(x);
      this.plugins.list._insiedList.call(this, l, u, f, o, b);
      const c = this.util.getNodeFromPath(b.s, b.sl), g = this.util.getNodeFromPath(b.e, b.el);
      s = {
        sc: c,
        so: 0,
        ec: g,
        eo: g.textContent.length
      };
    }
    return s;
  },
  _insiedList: function(e, t, n, l, i) {
    let s = !1;
    if (n && t.tagName === n.tagName) {
      const u = t.children;
      for (; u[0]; )
        n.appendChild(u[0]);
      t = n, s = !0;
    }
    if (l && t.tagName === l.tagName) {
      const u = l.children;
      for (; u[0]; )
        t.appendChild(u[0]);
      const f = l.nextElementSibling;
      l.parentNode.removeChild(l), l = f;
    }
    if (!s) {
      this.util.isListCell(n) && (e = n, l = null), e.insertBefore(t, l), i.s || (i.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), i.sl = e);
      const u = e.contains(i.sl) ? this.util.getNodePath(i.sl, e) : null;
      i.e = this.util.getNodePath(t.lastElementChild.firstChild, e, null), i.el = e, this.util.mergeSameTags(e, [i.s, i.e, u], !1), this.util.mergeNestedTags(e), u && (i.sl = this.util.getNodeFromPath(u, e));
    }
    return t;
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, n = "";
    for (; !n && !/^UL$/i.test(t.tagName); )
      n = t.getAttribute("data-command"), t = t.parentNode;
    if (!n) return;
    const l = this.plugins.list.editList.call(this, n, null, !1);
    l && this.setRange(l.sc, l.so, l.ec, l.eo), this.submenuOff(), this.history.push(!1);
  }
}, Gs = {
  name: "table",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    let l = n.table = {
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
    }, i = this.setSubmenu(e), s = i.querySelector(".se-controller-table-picker");
    l.tableHighlight = i.querySelector(".se-table-size-highlighted"), l.tableUnHighlight = i.querySelector(".se-table-size-unhighlighted"), l.tableDisplay = i.querySelector(".se-table-size-display"), e.options.rtl && (l.tableHighlight.style.left = "167px");
    let u = this.setController_table(e);
    l.tableController = u, l.resizeButton = u.querySelector("._se_table_resize"), l.resizeText = u.querySelector("._se_table_resize > span > span"), l.columnFixedButton = u.querySelector("._se_table_fixed_column"), l.headerButton = u.querySelector("._se_table_header");
    let f = this.setController_tableEditor(e, l.cellControllerTop);
    l.resizeDiv = f, l.splitMenu = f.querySelector(".se-btn-group-sub"), l.mergeButton = f.querySelector("._se_table_merge_button"), l.splitButton = f.querySelector("._se_table_split_button"), l.insertRowAboveButton = f.querySelector("._se_table_insert_row_a"), l.insertRowBelowButton = f.querySelector("._se_table_insert_row_b"), s.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, l)), s.addEventListener("click", this.appendTable.bind(e)), f.addEventListener("click", this.onClick_tableController.bind(e)), u.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, i), n.element.relative.appendChild(f), n.element.relative.appendChild(u), i = null, s = null, f = null, u = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.util.createElement("DIV");
    return t.className = "se-submenu se-selector-table", t.innerHTML = '<div class="se-table-size"><div class="se-table-size-picker se-controller-table-picker"></div><div class="se-table-size-highlighted"></div><div class="se-table-size-unhighlighted"></div></div><div class="se-table-size-display">1 x 1</div>', t;
  },
  setController_table: function(e) {
    const t = e.lang, n = e.icons, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-table", l.innerHTML = '<div><div class="se-btn-group"><button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' + n.expansion + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.maxSize + '</span></span></button><button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' + n.fixed_column_width + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.fixedColumnWidth + '</span></span></button><button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' + n.table_header + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.tableHeader + '</span></span></button><button type="button" data-command="remove" class="se-btn se-tooltip">' + n.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", l;
  },
  setController_tableEditor: function(e, t) {
    const n = e.lang, l = e.icons, i = e.util.createElement("DIV");
    return i.className = "se-controller se-controller-table-cell", i.innerHTML = (t ? "" : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group"><button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + l.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.insertRowAbove + '</span></span></button><button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + l.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.insertRowBelow + '</span></span></button><button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + l.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.deleteRow + '</span></span></button><button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + l.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.mergeCells + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + l.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.insertColumnBefore + '</span></span></button><button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + l.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.insertColumnAfter + '</span></span></button><button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + l.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.deleteColumn + '</span></span></button><button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + l.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + n.controller.splitCells + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split"><div class="se-list-inner"><ul class="se-list-basic"><li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + n.controller.VerticalSplit + '" aria-label="' + n.controller.VerticalSplit + '">' + n.controller.VerticalSplit + '</li><li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + n.controller.HorizontalSplit + '" aria-label="' + n.controller.HorizontalSplit + '">' + n.controller.HorizontalSplit + "</li></ul></div></div></div>", i;
  },
  appendTable: function() {
    const e = this.util.createElement("TABLE"), t = this.plugins.table.createCells, n = this.context.table._tableXY[0];
    let l = this.context.table._tableXY[1], i = "<tbody>";
    for (; l > 0; )
      i += "<tr>" + t.call(this, "td", n) + "</tr>", --l;
    if (i += "</tbody>", e.innerHTML = i, this.insertComponent(e, !1, !0, !1)) {
      const u = e.querySelector("td div");
      this.setRange(u, 0, u, 0), this.plugins.table.reset_table_picker.call(this);
    }
  },
  createCells: function(e, t, n) {
    if (e = e.toLowerCase(), n) {
      const l = this.util.createElement(e);
      return l.innerHTML = "<div><br></div>", l;
    } else {
      let l = "";
      for (; t > 0; )
        l += "<" + e + "><div><br></div></" + e + ">", t--;
      return l;
    }
  },
  onMouseMove_tablePicker: function(e, t) {
    t.stopPropagation();
    let n = this._w.Math.ceil(t.offsetX / 18), l = this._w.Math.ceil(t.offsetY / 18);
    n = n < 1 ? 1 : n, l = l < 1 ? 1 : l, e._rtl && (e.tableHighlight.style.left = n * 18 - 13 + "px", n = 11 - n), e.tableHighlight.style.width = n + "em", e.tableHighlight.style.height = l + "em", this.util.changeTxt(e.tableDisplay, n + " x " + l), e._tableXY = [n, l];
  },
  reset_table_picker: function() {
    if (!this.context.table.tableHighlight) return;
    const e = this.context.table.tableHighlight.style, t = this.context.table.tableUnHighlight.style;
    e.width = "1em", e.height = "1em", t.width = "10em", t.height = "10em", this.util.changeTxt(this.context.table.tableDisplay, "1 x 1"), this.submenuOff();
  },
  init: function() {
    const e = this.context.table, t = this.plugins.table;
    if (t._removeEvents.call(this), t._selectedTable) {
      const n = t._selectedTable.querySelectorAll(".se-table-selected-cell");
      for (let l = 0, i = n.length; l < i; l++)
        this.util.removeClass(n[l], "se-table-selected-cell");
    }
    t._toggleEditor.call(this, !0), e._element = null, e._tdElement = null, e._trElement = null, e._trElements = null, e._tableXY = [], e._maxWidth = !0, e._fixedColumn = !1, e._physical_cellCnt = 0, e._logical_cellCnt = 0, e._rowCnt = 0, e._rowIndex = 0, e._physical_cellIndex = 0, e._logical_cellIndex = 0, e._current_colSpan = 0, e._current_rowSpan = 0, t._shift = !1, t._selectedCells = null, t._selectedTable = null, t._ref = null, t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null;
  },
  /** table edit controller */
  call_controller_tableEdit: function(e) {
    const t = this.plugins.table, n = this.context.table;
    if (!this.getSelection().isCollapsed && !t._selectedCell) {
      this.controllersOff(), this.util.removeClass(e, "se-table-selected-cell");
      return;
    }
    const l = n._element || this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    n._maxWidth = this.util.hasClass(l, "se-table-size-100") || l.style.width === "100%" || !l.style.width && !this.util.hasClass(l, "se-table-size-auto"), n._fixedColumn = this.util.hasClass(l, "se-table-layout-fixed") || l.style.tableLayout === "fixed", t.setTableStyle.call(this, n._maxWidth ? "width|column" : "width"), t.setPositionControllerTop.call(this, l), t.setPositionControllerDiv.call(this, e, t._shift), t._shift || this.controllersOn(n.resizeDiv, n.tableController, t.init.bind(this), e, "table");
  },
  setPositionControllerTop: function(e) {
    this.setControllerPosition(this.context.table.tableController, e, "top", { left: 0, top: 0 });
  },
  setPositionControllerDiv: function(e, t) {
    const n = this.context.table, l = n.resizeDiv;
    this.plugins.table.setCellInfo.call(this, e, t), n.cellControllerTop ? this.setControllerPosition(l, n._element, "top", { left: n.tableController.offsetWidth, top: 0 }) : this.setControllerPosition(l, e, "bottom", { left: 0, top: 0 });
  },
  setCellInfo: function(e, t) {
    const n = this.context.table, l = n._element = this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    if (/THEAD/i.test(l.firstElementChild.nodeName) ? this.util.addClass(n.headerButton, "active") : this.util.removeClass(n.headerButton, "active"), t || n._physical_cellCnt === 0) {
      n._tdElement !== e && (n._tdElement = e, n._trElement = e.parentNode);
      const i = n._trElements = l.rows, s = e.cellIndex;
      let u = 0;
      for (let c = 0, g = i[0].cells, k = i[0].cells.length; c < k; c++)
        u += g[c].colSpan;
      const f = n._rowIndex = n._trElement.rowIndex;
      n._rowCnt = i.length, n._physical_cellCnt = n._trElement.cells.length, n._logical_cellCnt = u, n._physical_cellIndex = s, n._current_colSpan = n._tdElement.colSpan - 1, n._current_rowSpan - n._trElement.cells[s].rowSpan - 1;
      let o = [], b = [];
      for (let c = 0, g, k; c <= f; c++) {
        g = i[c].cells, k = 0;
        for (let S = 0, x = g.length, L, a, r, d; S < x; S++) {
          if (L = g[S], a = L.colSpan - 1, r = L.rowSpan - 1, d = S + k, b.length > 0)
            for (let h = 0, p; h < b.length; h++)
              p = b[h], !(p.row > c) && (d >= p.index ? (k += p.cs, d += p.cs, p.rs -= 1, p.row = c + 1, p.rs < 1 && (b.splice(h, 1), h--)) : S === x - 1 && (p.rs -= 1, p.row = c + 1, p.rs < 1 && (b.splice(h, 1), h--)));
          if (c === f && S === s) {
            n._logical_cellIndex = d;
            break;
          }
          r > 0 && o.push({
            index: d,
            cs: a + 1,
            rs: r,
            row: -1
          }), k += a;
        }
        b = b.concat(o).sort(function(S, x) {
          return S.index - x.index;
        }), o = [];
      }
      o = null, b = null;
    }
  },
  editTable: function(e, t) {
    const n = this.plugins.table, l = this.context.table, i = l._element, s = e === "row";
    if (s) {
      const u = l._trElement.parentNode;
      if (/^THEAD$/i.test(u.nodeName)) {
        if (t === "up")
          return;
        if (!u.nextElementSibling || !/^TBODY$/i.test(u.nextElementSibling.nodeName)) {
          i.innerHTML += "<tbody><tr>" + n.createCells.call(this, "td", l._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (n._ref) {
      const u = l._tdElement, f = n._selectedCells;
      if (s)
        if (t)
          n.setCellInfo.call(this, t === "up" ? f[0] : f[f.length - 1], !0), n.editRow.call(this, t, u);
        else {
          let o = f[0].parentNode;
          const b = [f[0]];
          for (let c = 1, g = f.length, k; c < g; c++)
            k = f[c], o !== k.parentNode && (b.push(k), o = k.parentNode);
          for (let c = 0, g = b.length; c < g; c++)
            n.setCellInfo.call(this, b[c], !0), n.editRow.call(this, t);
        }
      else {
        const o = f[0].parentNode;
        if (t) {
          let b = null;
          for (let c = 0, g = f.length - 1; c < g; c++)
            if (o !== f[c + 1].parentNode) {
              b = f[c];
              break;
            }
          n.setCellInfo.call(this, t === "left" ? f[0] : b || f[0], !0), n.editCell.call(this, t, u);
        } else {
          const b = [f[0]];
          for (let c = 1, g = f.length, k; c < g && (k = f[c], o === k.parentNode); c++)
            b.push(k);
          for (let c = 0, g = b.length; c < g; c++)
            n.setCellInfo.call(this, b[c], !0), n.editCell.call(this, t);
        }
      }
      t || n.init.call(this);
    } else
      n[s ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const u = i.children;
      for (let f = 0; f < u.length; f++)
        u[f].children.length === 0 && (this.util.removeItem(u[f]), f--);
      i.children.length === 0 && this.util.removeItem(i);
    }
  },
  editRow: function(e, t) {
    const n = this.context.table, l = !e, i = e === "up", s = n._rowIndex, u = l || i ? s : s + n._current_rowSpan + 1, f = l ? -1 : 1, o = n._trElements;
    let b = n._logical_cellCnt;
    for (let c = 0, g = s + (l ? -1 : 0), k; c <= g; c++) {
      if (k = o[c].cells, k.length === 0) return;
      for (let S = 0, x = k.length, L, a; S < x; S++)
        L = k[S].rowSpan, a = k[S].colSpan, !(L < 2 && a < 2) && L + c > u && u > c && (k[S].rowSpan = L + f, b -= a);
    }
    if (l) {
      const c = o[s + 1];
      if (c) {
        const g = [];
        let k = o[s].cells, S = 0;
        for (let x = 0, L = k.length, a, r; x < L; x++)
          a = k[x], r = x + S, S += a.colSpan - 1, a.rowSpan > 1 && (a.rowSpan -= 1, g.push({ cell: a.cloneNode(!1), index: r }));
        if (g.length > 0) {
          let x = g.shift();
          k = c.cells, S = 0;
          for (let L = 0, a = k.length, r, d; L < a && (r = k[L], d = L + S, S += r.colSpan - 1, !(d >= x.index && (L--, S--, S += x.cell.colSpan - 1, c.insertBefore(x.cell, r), x = g.shift(), !x))); L++)
            ;
          if (x) {
            c.appendChild(x.cell);
            for (let L = 0, a = g.length; L < a; L++)
              c.appendChild(g[L].cell);
          }
        }
      }
      n._element.deleteRow(u);
    } else {
      const c = n._element.insertRow(u);
      c.innerHTML = this.plugins.table.createCells.call(this, "td", b, !1);
    }
    l ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || n._tdElement, !0);
  },
  editCell: function(e, t) {
    const n = this.context.table, l = this.util, i = !e, s = e === "left", u = n._current_colSpan, f = i || s ? n._logical_cellIndex : n._logical_cellIndex + u + 1, o = n._trElements;
    let b = [], c = [], g = 0;
    const k = [], S = [];
    for (let x = 0, L = n._rowCnt, a, r, d, h, p, v; x < L; x++) {
      a = o[x], r = f, p = !1, d = a.cells, v = 0;
      for (let m = 0, y, _ = d.length, C, w, z; m < _ && (y = d[m], !!y); m++)
        if (C = y.rowSpan - 1, w = y.colSpan - 1, i) {
          if (z = m + v, c.length > 0) {
            const T = !d[m + 1];
            for (let B = 0, N; B < c.length; B++)
              N = c[B], !(N.row > x) && (z >= N.index ? (v += N.cs, z = m + v, N.rs -= 1, N.row = x + 1, N.rs < 1 && (c.splice(B, 1), B--)) : T && (N.rs -= 1, N.row = x + 1, N.rs < 1 && (c.splice(B, 1), B--)));
          }
          C > 0 && b.push({
            rs: C,
            cs: w + 1,
            index: z,
            row: -1
          }), z >= r && z + w <= r + u ? k.push(y) : z <= r + u && z + w >= r ? y.colSpan -= l.getOverlapRangeAtIndex(f, f + u, z, z + w) : C > 0 && (z < r || z + w > r + u) && S.push({
            cell: y,
            i: x,
            rs: x + C
          }), v += w;
        } else {
          if (m >= r) break;
          if (w > 0) {
            if (g < 1 && w + m >= r) {
              y.colSpan += 1, r = null, g = C + 1;
              break;
            }
            r -= w;
          }
          if (!p) {
            for (let T = 0, B; T < c.length; T++)
              B = c[T], r -= B.cs, B.rs -= 1, B.rs < 1 && (c.splice(T, 1), T--);
            p = !0;
          }
        }
      if (c = c.concat(b).sort(function(m, y) {
        return m.index - y.index;
      }), b = [], !i) {
        if (g > 0) {
          g -= 1;
          continue;
        }
        r !== null && d.length > 0 && (h = this.plugins.table.createCells.call(this, d[0].nodeName, 0, !0), h = a.insertBefore(h, d[r]));
      }
    }
    if (i) {
      let x, L;
      for (let a = 0, r = k.length, d; a < r; a++)
        d = k[a].parentNode, l.removeItem(k[a]), d.cells.length === 0 && (x || (x = l.getArrayIndex(o, d)), L = l.getArrayIndex(o, d), l.removeItem(d));
      for (let a = 0, r = S.length, d; a < r; a++)
        d = S[a], d.cell.rowSpan = l.getOverlapRangeAtIndex(x, L, d.i, d.rs);
      this.controllersOff();
    } else
      this.plugins.table.setPositionControllerDiv.call(this, t || n._tdElement, !0);
  },
  _closeSplitMenu: null,
  openSplitMenu: function() {
    this.util.addClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "inline-table", this.plugins.table._closeSplitMenu = (function() {
      this.util.removeClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "none", this.removeDocEvent("click", this.plugins.table._closeSplitMenu), this.plugins.table._closeSplitMenu = null;
    }).bind(this), this.addDocEvent("click", this.plugins.table._closeSplitMenu);
  },
  splitCells: function(e) {
    const t = this.util, n = e === "vertical", l = this.context.table, i = l._tdElement, s = l._trElements, u = l._trElement, f = l._logical_cellIndex, o = l._rowIndex, b = this.plugins.table.createCells.call(this, i.nodeName, 0, !0);
    if (n) {
      const c = i.colSpan;
      if (b.rowSpan = i.rowSpan, c > 1)
        b.colSpan = this._w.Math.floor(c / 2), i.colSpan = c - b.colSpan, u.insertBefore(b, i.nextElementSibling);
      else {
        let g = [], k = [];
        for (let S = 0, x = l._rowCnt, L, a; S < x; S++) {
          L = s[S].cells, a = 0;
          for (let r = 0, d = L.length, h, p, v, m; r < d; r++) {
            if (h = L[r], p = h.colSpan - 1, v = h.rowSpan - 1, m = r + a, k.length > 0)
              for (let y = 0, _; y < k.length; y++)
                _ = k[y], !(_.row > S) && (m >= _.index ? (a += _.cs, m += _.cs, _.rs -= 1, _.row = S + 1, _.rs < 1 && (k.splice(y, 1), y--)) : r === d - 1 && (_.rs -= 1, _.row = S + 1, _.rs < 1 && (k.splice(y, 1), y--)));
            if (m <= f && v > 0 && g.push({
              index: m,
              cs: p + 1,
              rs: v,
              row: -1
            }), h !== i && m <= f && m + p >= f + c - 1) {
              h.colSpan += 1;
              break;
            }
            if (m > f) break;
            a += p;
          }
          k = k.concat(g).sort(function(r, d) {
            return r.index - d.index;
          }), g = [];
        }
        u.insertBefore(b, i.nextElementSibling);
      }
    } else {
      const c = i.rowSpan;
      if (b.colSpan = i.colSpan, c > 1) {
        b.rowSpan = this._w.Math.floor(c / 2);
        const g = c - b.rowSpan, k = [], S = t.getArrayIndex(s, u) + g;
        for (let r = 0, d, h; r < S; r++) {
          d = s[r].cells, h = 0;
          for (let p = 0, v = d.length, m, y, _; p < v && (_ = p + h, !(_ >= f)); p++)
            m = d[p], y = m.rowSpan - 1, y > 0 && y + r >= S && _ < f && k.push({
              index: _,
              cs: m.colSpan
            }), h += m.colSpan - 1;
        }
        const x = s[S], L = x.cells;
        let a = k.shift();
        for (let r = 0, d = L.length, h = 0, p, v, m, y; r < d; r++) {
          if (m = r + h, p = L[r], v = p.colSpan - 1, y = m + v + 1, a && y >= a.index && (h += a.cs, y += a.cs, a = k.shift()), y >= f || r === d - 1) {
            x.insertBefore(b, p.nextElementSibling);
            break;
          }
          h += v;
        }
        i.rowSpan = g;
      } else {
        b.rowSpan = i.rowSpan;
        const g = t.createElement("TR");
        g.appendChild(b);
        for (let x = 0, L; x < o; x++) {
          if (L = s[x].cells, L.length === 0) return;
          for (let a = 0, r = L.length; a < r; a++)
            x + L[a].rowSpan - 1 >= o && (L[a].rowSpan += 1);
        }
        const k = l._physical_cellIndex, S = u.cells;
        for (let x = 0, L = S.length; x < L; x++)
          x !== k && (S[x].rowSpan += 1);
        u.parentNode.insertBefore(g, u.nextElementSibling);
      }
    }
    this.focusEdge(i), this.plugins.table.setPositionControllerDiv.call(this, i, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, n = this.util, l = e._ref, i = e._selectedCells, s = i[0];
    let u = null, f = null, o = l.ce - l.cs + 1, b = l.re - l.rs + 1, c = "", g = null;
    for (let k = 1, S = i.length, x, L; k < S; k++) {
      x = i[k], g !== x.parentNode && (g = x.parentNode), L = x.children;
      for (let a = 0, r = L.length; a < r; a++)
        n.isFormatElement(L[a]) && n.onlyZeroWidthSpace(L[a].textContent) && n.removeItem(L[a]);
      c += x.innerHTML, n.removeItem(x), g.cells.length === 0 && (u ? f = g : u = g, b -= 1);
    }
    if (u) {
      const k = t._trElements, S = n.getArrayIndex(k, u), x = n.getArrayIndex(k, f || u), L = [];
      for (let a = 0, r; a <= x; a++) {
        if (r = k[a].cells, r.length === 0) {
          L.push(k[a]);
          continue;
        }
        for (let d = 0, h = r.length, p, v; d < h; d++)
          p = r[d], v = p.rowSpan - 1, v > 0 && a + v >= S && (p.rowSpan -= n.getOverlapRangeAtIndex(S, x, a, a + v));
      }
      for (let a = 0, r = L.length; a < r; a++)
        n.removeItem(L[a]);
    }
    s.innerHTML += c, s.colSpan = o, s.rowSpan = b, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, s), n.addClass(s, "se-table-selected-cell"), this.focusEdge(s);
  },
  toggleHeader: function() {
    const e = this.util, t = this.context.table.headerButton, n = e.hasClass(t, "active"), l = this.context.table._element;
    if (n)
      e.removeItem(l.querySelector("thead"));
    else {
      const i = e.createElement("THEAD");
      i.innerHTML = "<tr>" + this.plugins.table.createCells.call(this, "th", this.context.table._logical_cellCnt, !1) + "</tr>", l.insertBefore(i, l.firstElementChild);
    }
    e.toggleClass(t, "active"), /TH/i.test(this.context.table._tdElement.nodeName) ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, !1);
  },
  setTableStyle: function(e) {
    const t = this.context.table, n = t._element;
    let l, i, s, u;
    e.indexOf("width") > -1 && (l = t.resizeButton.firstElementChild, i = t.resizeText, t._maxWidth ? (s = t.icons.reduction, u = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(n, "se-table-size-auto"), this.util.addClass(n, "se-table-size-100")) : (s = t.icons.expansion, u = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(n, "se-table-size-100"), this.util.addClass(n, "se-table-size-auto")), this.util.changeElement(l, s), this.util.changeTxt(i, u)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(n, "se-table-layout-auto"), this.util.addClass(n, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(n, "se-table-layout-fixed"), this.util.addClass(n, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
  },
  setActiveButton: function(e, t) {
    const n = this.context.table;
    /^TH$/i.test(e.nodeName) ? (n.insertRowAboveButton.setAttribute("disabled", !0), n.insertRowBelowButton.setAttribute("disabled", !0)) : (n.insertRowAboveButton.removeAttribute("disabled"), n.insertRowBelowButton.removeAttribute("disabled")), !t || e === t ? (n.splitButton.removeAttribute("disabled"), n.mergeButton.setAttribute("disabled", !0)) : (n.splitButton.setAttribute("disabled", !0), n.mergeButton.removeAttribute("disabled"));
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
    const t = this.plugins.table, n = this.util.getParentElement(e.target, this.util.isCell);
    if (t._shift)
      n === t._fixedCell ? t._toggleEditor.call(this, !0) : t._toggleEditor.call(this, !1);
    else if (!t._ref) {
      if (n === t._fixedCell) return;
      t._toggleEditor.call(this, !1);
    }
    !n || n === t._selectedCell || t._fixedCellName !== n.nodeName || t._selectedTable !== this.util.getParentElement(n, "TABLE") || (t._selectedCell = n, t._setMultiCells.call(this, t._fixedCell, n));
  },
  _setMultiCells: function(e, t) {
    const n = this.plugins.table, l = n._selectedTable.rows, i = this.util, s = n._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let c = 0, g = s.length; c < g; c++)
      i.removeClass(s[c], "se-table-selected-cell");
    if (e === t && (i.addClass(e, "se-table-selected-cell"), !n._shift))
      return;
    let u = !0, f = [], o = [];
    const b = n._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let c = 0, g = l.length, k, S; c < g; c++) {
      k = l[c].cells, S = 0;
      for (let x = 0, L = k.length, a, r, d, h; x < L; x++) {
        if (a = k[x], d = a.colSpan - 1, h = a.rowSpan - 1, r = x + S, f.length > 0)
          for (let p = 0, v; p < f.length; p++)
            v = f[p], !(v.row > c) && (r >= v.index ? (S += v.cs, r += v.cs, v.rs -= 1, v.row = c + 1, v.rs < 1 && (f.splice(p, 1), p--)) : x === L - 1 && (v.rs -= 1, v.row = c + 1, v.rs < 1 && (f.splice(p, 1), p--)));
        if (u) {
          if ((a === e || a === t) && (b.cs = b.cs !== null && b.cs < r ? b.cs : r, b.ce = b.ce !== null && b.ce > r + d ? b.ce : r + d, b.rs = b.rs !== null && b.rs < c ? b.rs : c, b.re = b.re !== null && b.re > c + h ? b.re : c + h, b._i += 1), b._i === 2) {
            u = !1, f = [], o = [], c = -1;
            break;
          }
        } else if (i.getOverlapRangeAtIndex(b.cs, b.ce, r, r + d) && i.getOverlapRangeAtIndex(b.rs, b.re, c, c + h)) {
          const p = b.cs < r ? b.cs : r, v = b.ce > r + d ? b.ce : r + d, m = b.rs < c ? b.rs : c, y = b.re > c + h ? b.re : c + h;
          if (b.cs !== p || b.ce !== v || b.rs !== m || b.re !== y) {
            b.cs = p, b.ce = v, b.rs = m, b.re = y, c = -1, f = [], o = [];
            break;
          }
          i.addClass(a, "se-table-selected-cell");
        }
        h > 0 && o.push({
          index: r,
          cs: d + 1,
          rs: h,
          row: -1
        }), S += a.colSpan - 1;
      }
      f = f.concat(o).sort(function(x, L) {
        return x.index - L.index;
      }), o = [];
    }
  },
  _removeEvents: function() {
    const e = this.plugins.table;
    e._initBind && (this._wd.removeEventListener("touchmove", e._initBind), e._initBind = null), e._bindOnSelect && (this._wd.removeEventListener("mousedown", e._bindOnSelect), this._wd.removeEventListener("mousemove", e._bindOnSelect), e._bindOnSelect = null), e._bindOffSelect && (this._wd.removeEventListener("mouseup", e._bindOffSelect), e._bindOffSelect = null), e._bindOffShift && (this._wd.removeEventListener("keyup", e._bindOffShift), e._bindOffShift = null);
  },
  _initBind: null,
  onTableCellMultiSelect: function(e, t) {
    const n = this.plugins.table;
    n._removeEvents.call(this), this.controllersOff(), n._shift = t, n._fixedCell = e, n._fixedCellName = e.nodeName, n._selectedTable = this.util.getParentElement(e, "TABLE");
    const l = n._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let i = 0, s = l.length; i < s; i++)
      this.util.removeClass(l[i], "se-table-selected-cell");
    this.util.addClass(e, "se-table-selected-cell"), n._bindOnSelect = n._onCellMultiSelect.bind(this), n._bindOffSelect = n._offCellMultiSelect.bind(this), t ? (n._bindOffShift = (function() {
      this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), n._ref || this.controllersOff();
    }).bind(this), this._wd.addEventListener("keyup", n._bindOffShift, !1), this._wd.addEventListener("mousedown", n._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", n._bindOnSelect, !1), this._wd.addEventListener("mouseup", n._bindOffSelect, !1), n._initBind = n.init.bind(this), this._wd.addEventListener("touchmove", n._initBind, !1);
  },
  onClick_tableController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
    if (t.getAttribute("disabled")) return;
    const n = t.getAttribute("data-command"), l = t.getAttribute("data-value"), i = t.getAttribute("data-option"), s = this.plugins.table;
    if (typeof s._closeSplitMenu == "function" && (s._closeSplitMenu(), n === "onsplit") || !n) return;
    e.preventDefault();
    const u = this.context.table;
    switch (n) {
      case "insert":
      case "delete":
        s.editTable.call(this, l, i);
        break;
      case "header":
        s.toggleHeader.call(this);
        break;
      case "onsplit":
        s.openSplitMenu.call(this);
        break;
      case "split":
        s.splitCells.call(this, l);
        break;
      case "merge":
        s.mergeCells.call(this);
        break;
      case "resize":
        u._maxWidth = !u._maxWidth, s.setTableStyle.call(this, "width"), s.setPositionControllerTop.call(this, u._element), s.setPositionControllerDiv.call(this, u._tdElement, s._shift);
        break;
      case "layout":
        u._fixedColumn = !u._fixedColumn, s.setTableStyle.call(this, "column"), s.setPositionControllerTop.call(this, u._element), s.setPositionControllerDiv.call(this, u._tdElement, s._shift);
        break;
      case "remove":
        const f = u._element.parentNode;
        this.util.removeItem(u._element), this.controllersOff(), f !== this.context.element.wysiwyg && this.util.removeItemAllParents(f, function(o) {
          return o.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, Ks = {
  name: "formatBlock",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.formatBlock = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _formatList: null,
      currentFormat: ""
    };
    let l = this.setSubmenu(e);
    l.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), n.formatBlock._formatList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, n = e.lang.toolbar, l = e.util.createElement("DIV");
    l.className = "se-submenu se-list-layer se-list-format";
    const i = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], s = !t.formats || t.formats.length === 0 ? i : t.formats;
    let u = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, o = s.length, b, c, g, k, S, x, L; f < o; f++)
      b = s[f], typeof b == "string" && i.indexOf(b) > -1 ? (c = b.toLowerCase(), g = c === "blockquote" ? "range" : c === "pre" ? "free" : "replace", S = /^h/.test(c) ? c.match(/\d+/)[0] : "", k = n["tag_" + (S ? "h" : c)] + S, L = "", x = "") : (c = b.tag.toLowerCase(), g = b.command, k = b.name || c, L = b.class, x = L ? ' class="' + L + '"' : ""), u += '<li><button type="button" class="se-btn-list" data-command="' + g + '" data-value="' + c + '" data-class="' + L + '" title="' + k + '" aria-label="' + k + '"><' + c + x + ">" + k + "</" + c + "></button></li>";
    return u += "</ul></div>", l.innerHTML = u, l;
  },
  /**
  * @Override core
  */
  active: function(e) {
    let t = this.lang.toolbar.formats;
    const n = this.context.formatBlock.targetText;
    if (!e)
      this.util.changeTxt(n, t);
    else if (this.util.isFormatElement(e)) {
      const i = this.context.formatBlock._formatList, s = e.nodeName.toLowerCase(), u = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let f = 0, o = i.length, b; f < o; f++)
        if (b = i[f], s === b.getAttribute("data-value") && u === b.getAttribute("data-class")) {
          t = b.title;
          break;
        }
      return this.util.changeTxt(n, t), n.setAttribute("data-value", s), n.setAttribute("data-class", u), !0;
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.formatBlock, t = e._formatList, n = e.targetText, l = (n.getAttribute("data-value") || "") + (n.getAttribute("data-class") || "");
    if (l !== e.currentFormat) {
      for (let i = 0, s = t.length, u; i < s; i++)
        u = t[i], l === u.getAttribute("data-value") + u.getAttribute("data-class") ? this.util.addClass(u, "active") : this.util.removeClass(u, "active");
      e.currentFormat = l;
    }
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, n = null, l = null, i = null, s = "";
    for (; !n && !/UL/i.test(t.tagName); ) {
      if (n = t.getAttribute("data-command"), l = t.getAttribute("data-value"), s = t.getAttribute("data-class"), n) {
        i = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (n) {
      if (n === "range") {
        const u = i.cloneNode(!1);
        this.applyRangeFormatElement(u);
      } else {
        let u = this.getRange(), f = this.getSelectedElementsAndComponents(!1);
        if (f.length === 0 && (u = this.getRange_addLine(u, null), f = this.getSelectedElementsAndComponents(!1), f.length === 0))
          return;
        const o = u.startOffset, b = u.endOffset, c = this.util;
        let g = f[0], k = f[f.length - 1];
        const S = c.getNodePath(u.startContainer, g, null, null), x = c.getNodePath(u.endContainer, k, null, null), L = this.detachList(f, !1);
        L.sc && (g = L.sc), L.ec && (k = L.ec), this.setRange(c.getNodeFromPath(S, g), o, c.getNodeFromPath(x, k), b);
        const a = this.getSelectedElementsAndComponents(!1);
        if (n === "free") {
          const r = a.length - 1;
          let d = a[r].parentNode, h = i.cloneNode(!1);
          const p = h;
          for (let v = r, m, y, _, C, w, z, T = !0; v >= 0; v--)
            if (m = a[v], m !== (a[v + 1] ? a[v + 1].parentNode : null)) {
              if (z = c.isComponent(m), y = z ? "" : m.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), _ = c.getParentElement(m, function(B) {
                return B.parentNode === d;
              }), (d !== m.parentNode || z) && (c.isFormatElement(d) ? (d.parentNode.insertBefore(h, d.nextSibling), d = d.parentNode) : (d.insertBefore(h, _ ? _.nextSibling : null), d = m.parentNode), C = h.nextSibling, C && h.nodeName === C.nodeName && c.isSameAttributes(h, C) && (h.innerHTML += "<BR>" + C.innerHTML, c.removeItem(C)), h = i.cloneNode(!1), T = !0), w = h.innerHTML, h.innerHTML = (T || !y || !w || /<br>$/i.test(y) ? y : y + "<BR>") + w, v === 0) {
                d.insertBefore(h, m), C = m.nextSibling, C && h.nodeName === C.nodeName && c.isSameAttributes(h, C) && (h.innerHTML += "<BR>" + C.innerHTML, c.removeItem(C));
                const B = h.previousSibling;
                B && h.nodeName === B.nodeName && c.isSameAttributes(h, B) && (B.innerHTML += "<BR>" + h.innerHTML, c.removeItem(h));
              }
              z || c.removeItem(m), y && (T = !1);
            }
          this.setRange(p, 0, p, 0);
        } else {
          for (let r = 0, d = a.length, h, p; r < d; r++)
            h = a[r], (h.nodeName.toLowerCase() !== l.toLowerCase() || (h.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== s) && !c.isComponent(h) && (p = i.cloneNode(!1), c.copyFormatAttributes(p, h), p.innerHTML = h.innerHTML, h.parentNode.replaceChild(p, h)), r === 0 && (g = p || h), r === d - 1 && (k = p || h), p = null;
          this.setRange(c.getNodeFromPath(S, g), o, c.getNodeFromPath(x, k), b);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, Ys = {
  name: "lineHeight",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.lineHeight = {
      _sizeList: null,
      currentSize: -1
    };
    let l = this.setSubmenu(e), i = l.querySelector("ul");
    i.addEventListener("click", this.pickup.bind(e)), n.lineHeight._sizeList = i.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, i = null;
  },
  setSubmenu: function(e) {
    const t = e.options, n = e.lang, l = e.util.createElement("DIV");
    l.className = "se-submenu se-list-layer";
    const i = t.lineHeights ? t.lineHeights : [
      { text: "1", value: 1 },
      { text: "1.15", value: 1.15 },
      { text: "1.5", value: 1.5 },
      { text: "2", value: 2 }
    ];
    let s = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + n.toolbar.default + '" aria-label="' + n.toolbar.default + '">(' + n.toolbar.default + ")</button></li>";
    for (let u = 0, f = i.length, o; u < f; u++)
      o = i[u], s += '<li><button type="button" class="se-btn-list" data-value="' + o.value + '" title="' + o.text + '" aria-label="' + o.text + '">' + o.text + "</button></li>";
    return s += "</ul></div>", l.innerHTML = s, l;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.lineHeight, t = e._sizeList, n = this.util.getFormatElement(this.getSelectionNode()), l = n ? n.style.lineHeight + "" : "";
    if (l !== e.currentSize) {
      for (let i = 0, s = t.length; i < s; i++)
        l === t[i].getAttribute("data-value") ? this.util.addClass(t[i], "active") : this.util.removeClass(t[i], "active");
      e.currentSize = l;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value") || "", n = this.getSelectedElements();
    for (let l = 0, i = n.length; l < i; l++)
      n[l].style.lineHeight = t;
    this.submenuOff(), this.history.push(!1);
  }
}, Xs = {
  name: "template",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.template = {
      selectedIndex: -1
    };
    let l = this.setSubmenu(e);
    l.querySelector("ul").addEventListener("click", this.pickup.bind(e)), e.initMenuTarget(this.name, t, l), l = null;
  },
  setSubmenu: function(e) {
    const t = e.options.templates;
    if (!t || t.length === 0)
      throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
    const n = e.util.createElement("DIV");
    n.className = "se-list-layer";
    let l = '<div class="se-submenu se-list-inner"><ul class="se-list-basic">';
    for (let i = 0, s = t.length, u; i < s; i++)
      u = t[i], l += '<li><button type="button" class="se-btn-list" data-value="' + i + '" title="' + u.name + '" aria-label="' + u.name + '">' + u.name + "</button></li>";
    return l += "</ul></div>", n.innerHTML = l, n;
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
}, Js = {
  name: "paragraphStyle",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.paragraphStyle = {
      _classList: null
    };
    let l = this.setSubmenu(e);
    l.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), n.paragraphStyle._classList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer se-list-format";
    const l = e.lang.menu, i = {
      spaced: {
        name: l.spaced,
        class: "__se__p-spaced",
        _class: ""
      },
      bordered: {
        name: l.bordered,
        class: "__se__p-bordered",
        _class: ""
      },
      neon: {
        name: l.neon,
        class: "__se__p-neon",
        _class: ""
      }
    }, s = !t.paragraphStyles || t.paragraphStyles.length === 0 ? ["spaced", "bordered", "neon"] : t.paragraphStyles;
    let u = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, o = s.length, b, c, g, k; f < o; f++) {
      if (b = s[f], typeof b == "string") {
        const S = i[b.toLowerCase()];
        if (!S) continue;
        b = S;
      }
      c = b.name, g = b.class ? ' class="' + b.class + '"' : "", k = b._class, u += '<li><button type="button" class="se-btn-list' + (k ? " " + k : "") + '" data-value="' + b.class + '" title="' + c + '" aria-label="' + c + '"><div' + g + ">" + c + "</div></button></li>";
    }
    return u += "</ul></div>", n.innerHTML = u, n;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const t = this.context.paragraphStyle._classList, n = this.util.getFormatElement(this.getSelectionNode());
    for (let l = 0, i = t.length; l < i; l++)
      this.util.hasClass(n, t[l].getAttribute("data-value")) ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, n = null;
    for (; !/^UL$/i.test(t.tagName) && (n = t.getAttribute("data-value"), !n); )
      t = t.parentNode;
    if (!n) return;
    let l = this.getSelectedElements();
    if (l.length === 0 && (this.getRange_addLine(this.getRange(), null), l = this.getSelectedElements(), l.length === 0))
      return;
    const i = this.util.hasClass(t, "active") ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
    for (let s = 0, u = l.length; s < u; s++)
      i(l[s], n);
    this.submenuOff(), this.history.push(!1);
  }
}, Qs = {
  name: "textStyle",
  display: "submenu",
  add: function(e, t) {
    const n = e.context;
    n.textStyle = {
      _styleList: null
    };
    let l = this.setSubmenu(e), i = l.querySelector("ul");
    i.addEventListener("click", this.pickup.bind(e)), n.textStyle._styleList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, i = null;
  },
  setSubmenu: function(e) {
    const t = e.options, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer se-list-format";
    const l = {
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
    }, i = t.textStyles ? t.textStyles : e._w.Object.keys(l);
    let s = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let u = 0, f = i.length, o, b, c, g, k, S, x; u < f; u++) {
      if (o = i[u], g = "", S = "", k = [], typeof o == "string") {
        const L = l[o.toLowerCase()];
        if (!L) continue;
        o = L;
      }
      c = o.name, b = o.tag || "span", x = o._class, o.style && (g += ' style="' + o.style + '"', S += o.style.replace(/:[^;]+(;|$)\s*/g, ","), k.push("style")), o.class && (g += ' class="' + o.class + '"', S += "." + o.class.trim().replace(/\s+/g, ",."), k.push("class")), S = S.replace(/,$/, ""), s += '<li><button type="button" class="se-btn-list' + (x ? " " + x : "") + '" data-command="' + b + '" data-value="' + S + '" title="' + c + '" aria-label="' + c + '"><' + b + g + ">" + c + "</" + b + "></button></li>";
    }
    return s += "</ul></div>", n.innerHTML = s, n;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, n = this.context.textStyle._styleList, l = this.getSelectionNode();
    for (let i = 0, s = n.length, u, f, o; i < s; i++) {
      u = n[i], f = u.getAttribute("data-value").split(",");
      for (let b = 0, c, g; b < f.length; b++) {
        for (c = l, o = !1; c && !e.isFormatElement(c) && !e.isComponent(c); ) {
          if (c.nodeName.toLowerCase() === u.getAttribute("data-command").toLowerCase() && (g = f[b], /^\./.test(g) ? e.hasClass(c, g.replace(/^\./, "")) : c.style[g])) {
            o = !0;
            break;
          }
          c = c.parentNode;
        }
        if (!o) break;
      }
      o ? e.addClass(u, "active") : e.removeClass(u, "active");
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, n = null, l = null;
    for (; !n && !/UL/i.test(t.tagName); ) {
      if (n = t.getAttribute("data-command"), n) {
        l = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!n) return;
    const i = l.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
    i.pop();
    const s = l.classList;
    for (let o = 0, b = s.length; o < b; o++)
      i.push("." + s[o]);
    const u = this.util.hasClass(t, "active") ? null : l.cloneNode(!1), f = u ? null : [l.nodeName];
    this.nodeChange(u, i, f, !0), this.submenuOff();
  }
};
var Di = { exports: {} }, er = Di.exports, an;
function tr() {
  return an || (an = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : er, function(t, n) {
      const l = {
        name: "dialog",
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function(i) {
          const s = i.context;
          s.dialog = {
            kind: "",
            updateModal: !1,
            _closeSignal: !1
          };
          let u = i.util.createElement("DIV");
          u.className = "se-dialog sun-editor-common";
          let f = i.util.createElement("DIV");
          f.className = "se-dialog-back", f.style.display = "none";
          let o = i.util.createElement("DIV");
          o.className = "se-dialog-inner", o.style.display = "none", u.appendChild(f), u.appendChild(o), s.dialog.modalArea = u, s.dialog.back = f, s.dialog.modal = o, s.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(i)), s.dialog.modal.addEventListener("click", this._onClick_dialog.bind(i)), s.element.relative.appendChild(u), u = null, f = null, o = null;
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
        open: function(i, s) {
          if (this.modalForm) return !1;
          this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = (function(f) {
            /27/.test(f.keyCode) && this.plugins.dialog.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = s, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = i, this.modalForm = this.context[i].modal;
          const u = this.context[i].focusElement;
          typeof this.plugins[i].on == "function" && this.plugins[i].on.call(this, s), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", u && u.focus();
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
      return typeof n > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "dialog", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: l
      })), l;
    });
  })(Di)), Di.exports;
}
var ir = /* @__PURE__ */ tr();
const ni = /* @__PURE__ */ Le(ir), lr = {
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
  createList: function(e, t, n) {
    e.form.innerHTML = "<ul>" + n + "</ul>", e.items = t, e.menus = e.form.querySelectorAll("li");
  },
  initEvent: function(e, t) {
    const n = t.querySelector(".se-select-list"), l = this.context.selectMenu.caller[e] = {
      form: n,
      items: [],
      menus: [],
      index: -1,
      item: null,
      clickMethod: null,
      callerName: e
    };
    n.addEventListener("mousedown", this.plugins.selectMenu.onMousedown_list), n.addEventListener("mousemove", this.plugins.selectMenu.onMouseMove_list.bind(this, l)), n.addEventListener("click", this.plugins.selectMenu.onClick_list.bind(this, l));
  },
  onMousedown_list: function(e) {
    e.preventDefault(), e.stopPropagation();
  },
  onMouseMove_list: function(e, t) {
    this.util.addClass(e.form, "__se_select-menu-mouse-move");
    const n = t.target.getAttribute("data-index");
    n && (e.index = n * 1);
  },
  onClick_list: function(e, t) {
    const n = t.target.getAttribute("data-index");
    n && e.clickMethod.call(this, e.items[n]);
  },
  moveItem: function(e, t) {
    this.util.removeClass(e.form, "__se_select-menu-mouse-move"), t = e.index + t;
    const n = e.menus, l = n.length, i = e.index = t >= l ? 0 : t < 0 ? l - 1 : t;
    for (let s = 0; s < l; s++)
      s === i ? this.util.addClass(n[s], "active") : this.util.removeClass(n[s], "active");
    e.item = e.items[i];
  },
  getItem: function(e, t) {
    return t = !t || t < 0 ? e.index : t, e.items[t];
  },
  on: function(e, t) {
    const n = this.context.selectMenu.caller[e];
    this.context.selectMenu.callerContext = n, n.clickMethod = t, n.callerName = e;
  },
  open: function(e, t) {
    const n = e.form;
    n.style.visibility = "hidden", n.style.display = "block", t(n), n.style.visibility = "";
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
    e.addModule([lr]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, n = e.options.linkRel, l = (e.options.linkRelDefault.default || "").split(" "), i = e.icons, s = e.util.createElement("DIV");
    let u = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + i.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + i.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + i.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (n.length > 0) {
      u += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let f = 0, o = n.length, b; f < o; f++)
        b = n[f], u += '<li><button type="button" class="se-btn-list' + (l.indexOf(b) > -1 ? " se-checked" : "") + '" data-command="' + b + '" title="' + b + '" aria-label="' + b + '"><span class="se-svg">' + i.checked + "</span>" + b + "</button></li>";
      u += "</ul></div></div></div>";
    }
    return u += "</div></div>", s.innerHTML = u, s;
  },
  initEvent: function(e, t) {
    const n = this.plugins.anchor, l = this.context.anchor.caller[e] = {
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
    typeof l.linkDefaultRel.default == "string" && (l.linkDefaultRel.default = l.linkDefaultRel.default.trim()), typeof l.linkDefaultRel.check_new_window == "string" && (l.linkDefaultRel.check_new_window = l.linkDefaultRel.check_new_window.trim()), typeof l.linkDefaultRel.check_bookmark == "string" && (l.linkDefaultRel.check_bookmark = l.linkDefaultRel.check_bookmark.trim()), l.urlInput = t.querySelector(".se-input-url"), l.anchorText = t.querySelector("._se_anchor_text"), l.newWindowCheck = t.querySelector("._se_anchor_check"), l.downloadCheck = t.querySelector("._se_anchor_download"), l.download = t.querySelector("._se_anchor_download_icon"), l.preview = t.querySelector(".se-link-preview"), l.bookmark = t.querySelector("._se_anchor_bookmark_icon"), l.bookmarkButton = t.querySelector("._se_bookmark_button"), this.plugins.selectMenu.initEvent.call(this, e, t);
    const i = this.context.selectMenu.caller[e];
    this.options.linkRel.length > 0 && (l.relButton = t.querySelector(".se-anchor-rel-btn"), l.relList = t.querySelector(".se-list-layer"), l.relPreview = t.querySelector(".se-anchor-rel-preview"), l.relButton.addEventListener("click", n.onClick_relButton.bind(this, l)), l.relList.addEventListener("click", n.onClick_relList.bind(this, l))), l.newWindowCheck.addEventListener("change", n.onChange_newWindowCheck.bind(this, l)), l.downloadCheck.addEventListener("change", n.onChange_downloadCheck.bind(this, l)), l.anchorText.addEventListener("input", n.onChangeAnchorText.bind(this, l)), l.urlInput.addEventListener("input", n.onChangeUrlInput.bind(this, l)), l.urlInput.addEventListener("keydown", n.onKeyDownUrlInput.bind(this, i)), l.urlInput.addEventListener("focus", n.onFocusUrlInput.bind(this, l, i)), l.urlInput.addEventListener("blur", n.onBlurUrlInput.bind(this, i)), l.bookmarkButton.addEventListener("click", n.onClick_bookmarkButton.bind(this, l));
  },
  on: function(e, t) {
    const n = this.plugins.anchor;
    if (!t)
      n.init.call(this, e), e.anchorText.value = this.getSelection().toString().trim(), e.newWindowCheck.checked = this.options.linkTargetNewWindow;
    else if (e.linkAnchor) {
      this.context.dialog.updateModal = !0;
      const l = e.linkAnchor.getAttribute("href");
      e.linkValue = e.preview.textContent = e.urlInput.value = n.selfPathBookmark.call(this, l) ? l.substr(l.lastIndexOf("#")) : l, e.anchorText.value = e.linkAnchor.textContent, e.newWindowCheck.checked = !!/_blank/i.test(e.linkAnchor.target), e.downloadCheck.checked = e.linkAnchor.download;
    }
    this.context.anchor.callerContext = e, n.setRel.call(this, e, t && e.linkAnchor ? e.linkAnchor.rel : e.defaultRel), n.setLinkPreview.call(this, e, e.linkValue), this.plugins.selectMenu.on.call(this, e.callerName, this.plugins.anchor.setHeaderBookmark);
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
      const n = e.relButton, l = e.relList;
      this.util.addClass(n, "active"), l.style.visibility = "hidden", l.style.display = "block", this.options.rtl ? l.style.left = n.offsetLeft - l.offsetWidth - 1 + "px" : l.style.left = n.offsetLeft + n.offsetWidth + 1 + "px", l.style.top = n.offsetTop + n.offsetHeight / 2 - l.offsetHeight / 2 + "px", l.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(i, s, u) {
        u && (i.relButton.contains(u.target) || i.relList.contains(u.target)) || (this.util.removeClass(s, "active"), i.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, n), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const n = t.target, l = n.getAttribute("data-command");
    if (!l) return;
    const i = e.currentRel, s = this.util.toggleClass(n, "se-checked"), u = i.indexOf(l);
    s ? u === -1 && i.push(l) : u > -1 && i.splice(u, 1), e.relPreview.title = e.relPreview.textContent = i.join(" ");
  },
  setRel: function(e, t) {
    const n = e.relList, l = e.currentRel = t ? t.split(" ") : [];
    if (!n) return;
    const i = n.querySelectorAll("button");
    for (let s = 0, u = i.length, f; s < u; s++)
      f = i[s].getAttribute("data-command"), l.indexOf(f) > -1 ? this.util.addClass(i[s], "se-checked") : this.util.removeClass(i[s], "se-checked");
    e.relPreview.title = e.relPreview.textContent = l.join(" ");
  },
  createHeaderList: function(e, t, n) {
    const l = this.util.getListChildren(this.context.element.wysiwyg, function(f) {
      return /h[1-6]/i.test(f.nodeName);
    });
    if (l.length === 0) return;
    const i = new this._w.RegExp("^" + n.replace(/^#/, ""), "i"), s = [];
    let u = "";
    for (let f = 0, o = l.length, b; f < o; f++)
      b = l[f], i.test(b.textContent) && (s.push(b), u += '<li class="se-select-item" data-index="' + f + '">' + b.textContent + "</li>");
    s.length === 0 ? this.plugins.selectMenu.close.call(this, t) : (this.plugins.selectMenu.createList(t, s, u), this.plugins.selectMenu.open.call(this, t, this.plugins.anchor._setMenuListPosition.bind(this, e)));
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
    const t = this.context.anchor.callerContext, n = e.id || "h_" + this._w.Math.random().toString().replace(/.+\./, "");
    e.id = n, t.urlInput.value = "#" + n, (!t.anchorText.value.trim() || !t._change) && (t.anchorText.value = e.textContent), this.plugins.anchor.setLinkPreview.call(this, t, t.urlInput.value), this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext), this.context.anchor.callerContext.urlInput.focus();
  },
  onChangeAnchorText: function(e, t) {
    e._change = !!t.target.value.trim();
  },
  onChangeUrlInput: function(e, t) {
    const n = t.target.value.trim();
    this.plugins.anchor.setLinkPreview.call(this, e, n), this.plugins.anchor.selfPathBookmark.call(this, n) ? this.plugins.anchor.createHeaderList.call(this, e, this.context.selectMenu.callerContext, n) : this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
  },
  onFocusUrlInput: function(e, t) {
    const n = e.urlInput.value;
    this.plugins.anchor.selfPathBookmark.call(this, n) && this.plugins.anchor.createHeaderList.call(this, e, t, n);
  },
  onBlurUrlInput: function(e) {
    this.plugins.selectMenu.close.call(this, e);
  },
  setLinkPreview: function(e, t) {
    const n = e.preview, l = this.options.linkProtocol, i = this.options.linkNoPrefix, s = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(l) === 0, u = l ? this._w.RegExp("^" + this.util.escapeStringRegexp(t.substr(0, l.length))).test(l) : !1;
    t = e.linkValue = n.textContent = t ? i ? t : l && !s && !u ? l + t : s ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
  },
  setCtx: function(e, t) {
    e && (t.linkAnchor = e, t.linkValue = e.href, t.currentRel = e.rel.split(" "));
  },
  updateAnchor: function(e, t, n, l, i) {
    !this.plugins.anchor.selfPathBookmark.call(this, t) && l.downloadCheck.checked ? e.setAttribute("download", n || t) : e.removeAttribute("download"), l.newWindowCheck.checked ? e.target = "_blank" : e.removeAttribute("target");
    const s = l.currentRel.join(" ");
    s ? e.rel = s : e.removeAttribute("rel"), e.href = t, i ? e.children.length === 0 && (e.textContent = "") : e.textContent = n;
  },
  createAnchor: function(e, t) {
    if (e.linkValue.length === 0) return null;
    const n = e.linkValue, l = e.anchorText, i = l.value.length === 0 ? n : l.value, s = e.linkAnchor || this.util.createElement("A");
    return this.plugins.anchor.updateAnchor.call(this, s, n, i, e, t), e.linkValue = e.preview.textContent = e.urlInput.value = e.anchorText.value = "", s;
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
    const n = e.currentRel;
    if (!t) return n.join(" ");
    if (/^only\:/.test(t))
      return t = t.replace(/^only\:/, "").trim(), e.currentRel = t.split(" "), t;
    const l = t.split(" ");
    for (let i = 0, s = l.length, u; i < s; i++)
      u = n.indexOf(l[i]), u === -1 && n.push(l[i]);
    return n.join(" ");
  },
  _relDelete: function(e, t) {
    if (!t) return e.currentRel.join(" ");
    /^only\:/.test(t) && (t = t.replace(/^only\:/, "").trim());
    const n = e.currentRel.join(" ").replace(this._w.RegExp(t + "\\s*"), "");
    return e.currentRel = n.split(" "), n;
  },
  init: function(e) {
    e.linkAnchor = null, e.linkValue = e.preview.textContent = e.urlInput.value = "", e.anchorText.value = "", e.newWindowCheck.checked = !1, e.downloadCheck.checked = !1, e._change = !1, this.plugins.anchor.setRel.call(this, e, e.defaultRel), e.relList && this.plugins.anchor.toggleRelList.call(this, e, !1), this.context.anchor.callerContext = null, this.plugins.selectMenu.init.call(this, this.context.selectMenu.callerContext);
  }
}, nr = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([ni, eo]);
    const t = e.context, n = t.link = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      _linkAnchor: null,
      anchorCtx: null
    };
    let l = this.setDialog(e);
    n.modal = l;
    let i = this.setController_LinkButton(e);
    n.linkController = i, l.querySelector("form").addEventListener("submit", this.submit.bind(e)), i.addEventListener("click", this.onClick_linkController.bind(e)), t.dialog.modal.appendChild(l), t.element.relative.appendChild(i), e.plugins.anchor.initEvent.call(e, "link", l), n.focusElement = t.anchor.caller.link.urlInput, l = null, i = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, n = e.util.createElement("DIV"), l = e.icons;
    n.className = "se-dialog-content", n.style.display = "none";
    let i = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + l.cancel + '</button><span class="se-modal-title">' + t.dialogBox.linkBox.title + "</span></div>" + e.context.anchor.forms.innerHTML + '<div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>";
    return n.innerHTML = i, n;
  },
  /** modify controller button */
  setController_LinkButton: function(e) {
    const t = e.lang, n = e.icons, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-link", l.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + n.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + n.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.unlink + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + n.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", l;
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
        const n = this.context.link._linkAnchor.childNodes[0];
        this.setRange(n, 0, n, n.textContent.length);
      } else {
        const n = this.getSelectedElements();
        if (n.length > 1) {
          const l = this.util.createElement(n[0].nodeName);
          if (l.appendChild(t), !this.insertNode(l, null, !0)) return;
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
    const t = this.context.link.linkController, n = t.querySelector("a");
    n.href = e.href, n.title = e.textContent, n.textContent = e.textContent, this.util.addClass(e, "on"), this.setControllerPosition(t, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t, e, "link", this.util.removeClass.bind(this.util, this.context.link._linkAnchor, "on"));
  },
  onClick_linkController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    if (t) {
      if (e.preventDefault(), /update/.test(t))
        this.plugins.dialog.open.call(this, "link", !0);
      else if (/unlink/.test(t)) {
        const n = this.util.getChildElement(this.context.link._linkAnchor, function(i) {
          return i.childNodes.length === 0 || i.nodeType === 3;
        }, !1), l = this.util.getChildElement(this.context.link._linkAnchor, function(i) {
          return i.childNodes.length === 0 || i.nodeType === 3;
        }, !0);
        this.setRange(n, 0, l, l.textContent.length), this.nodeChange(null, null, ["A"], !1);
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
var Mi = { exports: {} }, or = Mi.exports, sn;
function ar() {
  return sn || (sn = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : or, function(t, n) {
      const l = {
        name: "component",
        /**
         * @description Create a container for the resizing component and insert the element.
         * @param {Element} cover Cover element (FIGURE)
         * @param {String} className Class name of container (fixed: se-component)
         * @returns {Element} Created container element
         */
        set_container: function(i, s) {
          const u = this.util.createElement("DIV");
          return u.className = "se-component " + s, u.appendChild(i), u;
        },
        /**
         * @description Cover the target element with a FIGURE element.
         * @param {Element} element Target element
         */
        set_cover: function(i) {
          const s = this.util.createElement("FIGURE");
          return s.appendChild(i), s;
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
      return typeof n > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "component", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: l
      })), l;
    });
  })(Mi)), Mi.exports;
}
var sr = /* @__PURE__ */ ar();
const rl = /* @__PURE__ */ Le(sr);
var Oi = { exports: {} }, rr = Oi.exports, rn;
function ur() {
  return rn || (rn = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : rr, function(t, n) {
      const l = {
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
          const s = i.icons, u = i.context;
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
              basic: s.align_justify,
              left: s.align_left,
              right: s.align_right,
              center: s.align_center
            }
          };
          let f = this.setController_resize(i);
          u.resizing.resizeContainer = f, u.resizing.resizeDiv = f.querySelector(".se-modal-resize"), u.resizing.resizeDot = f.querySelector(".se-resize-dot"), u.resizing.resizeDisplay = f.querySelector(".se-resize-display");
          let o = this.setController_button(i);
          u.resizing.resizeButton = o;
          let b = u.resizing.resizeHandles = u.resizing.resizeDot.querySelectorAll("span");
          u.resizing.resizeButtonGroup = o.querySelector("._se_resizing_btn_group"), u.resizing.rotationButtons = o.querySelectorAll("._se_resizing_btn_group ._se_rotation"), u.resizing.percentageButtons = o.querySelectorAll("._se_resizing_btn_group ._se_percentage"), u.resizing.alignMenu = o.querySelector(".se-resizing-align-list"), u.resizing.alignMenuList = u.resizing.alignMenu.querySelectorAll("button"), u.resizing.alignButton = o.querySelector("._se_resizing_align_button"), u.resizing.autoSizeButton = o.querySelector("._se_resizing_btn_group ._se_auto_size"), u.resizing.captionButton = o.querySelector("._se_resizing_caption_button"), f.addEventListener("mousedown", function(c) {
            c.preventDefault();
          }), b[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), b[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), o.addEventListener("click", this.onClick_resizeButton.bind(i)), u.element.relative.appendChild(f), u.element.relative.appendChild(o), f = null, o = null, b = null;
        },
        /** resize controller, button (image, iframe, video) */
        setController_resize: function(i) {
          const s = i.util.createElement("DIV");
          return s.className = "se-controller se-resizing-container", s.style.display = "none", s.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', s;
        },
        setController_button: function(i) {
          const s = i.lang, u = i.icons, f = i.util.createElement("DIV");
          return f.className = "se-controller se-controller-resizing", f.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + u.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + u.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + u.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + u.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + u.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + u.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + u.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + u.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + u.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + u.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + u.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + u.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + u.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + u.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.remove + "</span></span></button></div>", f;
        },
        /**
         * @description Gets the width size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeX: function(i, s, u, f) {
          return s || (s = i._element), u || (u = i._cover), f || (f = i._container), s ? /%$/.test(s.style.width) ? (f && this.util.getNumber(f.style.width, 2) || 100) + "%" : s.style.width : "";
        },
        /**
         * @description Gets the height size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeY: function(i, s, u, f) {
          return s || (s = i._element), u || (u = i._cover), f || (f = i._container), !f || !u ? s && s.style.height || "" : this.util.getNumber(u.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? u.style.height : !/%$/.test(s.style.height) || !/%$/.test(s.style.width) ? s.style.height : (f && this.util.getNumber(f.style.height, 2) || 100) + "%";
        },
        /**
         * @description Called at the "openModify" to put the size of the current target into the size input element.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Object} pluginObj Plugin object
         */
        _module_setModifyInputSize: function(i, s) {
          const u = i._onlyPercentage && this.context.resizing._rotateVertical;
          i.proportion.checked = i._proportionChecked = i._element.getAttribute("data-proportion") !== "false";
          let f = u ? "" : this.plugins.resizing._module_getSizeX.call(this, i);
          if (f === i._defaultSizeX && (f = ""), i._onlyPercentage && (f = this.util.getNumber(f, 2)), i.inputX.value = f, s.setInputSize.call(this, "x"), !i._onlyPercentage) {
            let o = u ? "" : this.plugins.resizing._module_getSizeY.call(this, i);
            o === i._defaultSizeY && (o = ""), i._onlyPercentage && (o = this.util.getNumber(o, 2)), i.inputY.value = o;
          }
          i.inputX.disabled = !!u, i.inputY.disabled = !!u, i.proportion.disabled = !!u, s.setRatio.call(this);
        },
        /**
         * @description It is called in "setInputSize" (input tag keyupEvent), 
         * checks the value entered in the input tag, 
         * calculates the ratio, and sets the calculated value in the input tag of the opposite size.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {String} xy 'x': width, 'y': height
         */
        _module_setInputSize: function(i, s) {
          if (i._onlyPercentage) {
            s === "x" && i.inputX.value > 100 && (i.inputX.value = 100);
            return;
          }
          if (i.proportion.checked && i._ratio && /\d/.test(i.inputX.value) && /\d/.test(i.inputY.value)) {
            const u = i.inputX.value.replace(/\d+|\./g, "") || i.sizeUnit, f = i.inputY.value.replace(/\d+|\./g, "") || i.sizeUnit;
            if (u !== f) return;
            const o = u === "%" ? 2 : 0;
            s === "x" ? i.inputY.value = this.util.getNumber(i._ratioY * this.util.getNumber(i.inputX.value, o), o) + f : i.inputX.value = this.util.getNumber(i._ratioX * this.util.getNumber(i.inputY.value, o), o) + u;
          }
        },
        /**
         * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
         * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_setRatio: function(i) {
          const s = i.inputX.value, u = i.inputY.value;
          if (i.proportion.checked && /\d+/.test(s) && /\d+/.test(u)) {
            const f = s.replace(/\d+|\./g, "") || i.sizeUnit, o = u.replace(/\d+|\./g, "") || i.sizeUnit;
            if (f !== o)
              i._ratio = !1;
            else if (!i._ratio) {
              const b = this.util.getNumber(s, 0), c = this.util.getNumber(u, 0);
              i._ratio = !0, i._ratioX = b / c, i._ratioY = c / b;
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
          const s = this.plugins.resizing._module_getSizeX.call(this, i), u = this.plugins.resizing._module_getSizeY.call(this, i);
          i._element.setAttribute("width", s.replace("px", "")), i._element.setAttribute("height", u.replace("px", "")), i._element.setAttribute("data-size", s + "," + u), i._videoRatio && (i._videoRatio = u);
        },
        /**
         * @description Call the resizing module
         * @param {Element} targetElement Resizing target element
         * @param {string} plugin Plugin name
         * @returns {Object} Size of resizing div {w, h, t, l}
         */
        call_controller_resize: function(i, s) {
          const u = this.context.resizing, f = this.context[s];
          u._resize_plugin = s;
          const o = u.resizeContainer, b = u.resizeDiv, c = this.util.getOffset(i, this.context.element.wysiwygFrame), g = u._rotateVertical = /^(90|270)$/.test(Math.abs(i.getAttribute("data-rotate")).toString()), k = g ? i.offsetHeight : i.offsetWidth, S = g ? i.offsetWidth : i.offsetHeight, x = c.top, L = c.left - this.context.element.wysiwygFrame.scrollLeft;
          o.style.top = x + "px", o.style.left = L + "px", o.style.width = k + "px", o.style.height = S + "px", b.style.top = "0px", b.style.left = "0px", b.style.width = k + "px", b.style.height = S + "px";
          let a = i.getAttribute("data-align") || "basic";
          a = a === "none" ? "basic" : a;
          const r = this.util.getParentElement(i, this.util.isComponent), d = this.util.getParentElement(i, "FIGURE"), h = this.plugins.resizing._module_getSizeX.call(this, f, i, d, r) || "auto", p = f._onlyPercentage && s === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, f, i, d, r) || "auto");
          this.util.changeTxt(u.resizeDisplay, this.lang.dialogBox[a] + " (" + h + p + ")"), u.resizeButtonGroup.style.display = f._resizing ? "" : "none";
          const v = f._resizing && !f._resizeDotHide && !f._onlyPercentage ? "flex" : "none", m = u.resizeHandles;
          for (let T = 0, B = m.length; T < B; T++)
            m[T].style.display = v;
          if (f._resizing) {
            const T = u.rotationButtons;
            T[0].style.display = T[1].style.display = f._rotation ? "" : "none";
          }
          if (f._alignHide)
            u.alignButton.style.display = "none";
          else {
            u.alignButton.style.display = "";
            const T = u.alignMenuList;
            this.util.changeElement(u.alignButton.firstElementChild, u.alignIcons[a]);
            for (let B = 0, N = T.length; B < N; B++)
              T[B].getAttribute("data-value") === a ? this.util.addClass(T[B], "on") : this.util.removeClass(T[B], "on");
          }
          const y = u.percentageButtons, _ = /%$/.test(i.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
          for (let T = 0, B = y.length; T < B; T++)
            y[T].getAttribute("data-value") === _ ? this.util.addClass(y[T], "active") : this.util.removeClass(y[T], "active");
          f._captionShow ? (u.captionButton.style.display = "", this.util.getChildElement(i.parentNode, "figcaption") ? (this.util.addClass(u.captionButton, "active"), f._captionChecked = !0) : (this.util.removeClass(u.captionButton, "active"), f._captionChecked = !1)) : u.captionButton.style.display = "none", o.style.display = "block";
          const C = { left: 0, top: 50 };
          this.options.iframe && (C.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, C.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(u.resizeButton, o, "bottom", C);
          const w = function() {
            this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
          };
          this.controllersOn(o, u.resizeButton, w.bind(this), i, s), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), u._resize_w = k, u._resize_h = S;
          const z = (i.getAttribute("origin-size") || "").split(",");
          return u._origin_w = z[0] || i.naturalWidth, u._origin_h = z[1] || i.naturalHeight, {
            w: k,
            h: S,
            t: x,
            l: L
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
          const s = i.target, u = s.getAttribute("data-command") || s.parentNode.getAttribute("data-command");
          if (!u) return;
          const f = s.getAttribute("data-value") || s.parentNode.getAttribute("data-value"), o = this.context.resizing._resize_plugin, b = this.context[o], c = b._element, g = this.plugins[o];
          if (i.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), u === "onalign"))) {
            switch (u) {
              case "auto":
                this.plugins.resizing.resetTransform.call(this, c), g.setAutoSize.call(this), this.selectComponent(c, o);
                break;
              case "percent":
                let k = this.plugins.resizing._module_getSizeY.call(this, b);
                if (this.context.resizing._rotateVertical) {
                  const v = c.getAttribute("data-percentage");
                  v && (k = v.split(",")[1]);
                }
                this.plugins.resizing.resetTransform.call(this, c), g.setPercentSize.call(this, f * 100, this.util.getNumber(k, 0) === null || !/%$/.test(k) ? "" : k), this.selectComponent(c, o);
                break;
              case "mirror":
                const S = c.getAttribute("data-rotate") || "0";
                let x = c.getAttribute("data-rotateX") || "", L = c.getAttribute("data-rotateY") || "";
                f === "h" && !this.context.resizing._rotateVertical || f === "v" && this.context.resizing._rotateVertical ? L = L ? "" : "180" : x = x ? "" : "180", c.setAttribute("data-rotateX", x), c.setAttribute("data-rotateY", L), this.plugins.resizing._setTransForm(c, S, x, L);
                break;
              case "rotate":
                const a = this.context.resizing, r = c.getAttribute("data-rotate") * 1 + f * 1, d = this._w.Math.abs(r) >= 360 ? 0 : r;
                c.setAttribute("data-rotate", d), a._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(d).toString()), this.plugins.resizing.setTransformSize.call(this, c, null, null), this.selectComponent(c, o);
                break;
              case "onalign":
                this.plugins.resizing.openAlignMenu.call(this);
                return;
              case "align":
                const h = f === "basic" ? "none" : f;
                g.setAlign.call(this, h, null, null, null), this.selectComponent(c, o);
                break;
              case "caption":
                const p = !b._captionChecked;
                if (g.openModify.call(this, !0), b._captionChecked = b.captionCheckEl.checked = p, g.update_image.call(this, !1, !1, !1), p) {
                  const v = this.util.getChildElement(b._caption, function(m) {
                    return m.nodeType === 3;
                  });
                  v ? this.setRange(v, 0, v, v.textContent.length) : b._caption.focus(), this.controllersOff();
                } else
                  this.selectComponent(c, o), g.openModify.call(this, !0);
                break;
              case "revert":
                g.setOriginSize.call(this), this.selectComponent(c, o);
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
        resetTransform: function(i) {
          const s = (i.getAttribute("data-size") || i.getAttribute("data-origin") || "").split(",");
          this.context.resizing._rotateVertical = !1, i.style.maxWidth = "", i.style.transform = "", i.style.transformOrigin = "", i.setAttribute("data-rotate", ""), i.setAttribute("data-rotateX", ""), i.setAttribute("data-rotateY", ""), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, s[0] ? s[0] : "auto", s[1] ? s[1] : "", !0);
        },
        /**
         * @description Set the transform style (rotation) of the element.
         * @param {Element} element Target element
         * @param {Number|null} width Element's width size
         * @param {Number|null} height Element's height size
         */
        setTransformSize: function(i, s, u) {
          let f = i.getAttribute("data-percentage");
          const o = this.context.resizing._rotateVertical, b = i.getAttribute("data-rotate") * 1;
          let c = "";
          if (f && !o)
            f = f.split(","), f[0] === "auto" && f[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, f[0], f[1]);
          else {
            const g = this.util.getParentElement(i, "FIGURE"), k = s || i.offsetWidth, S = u || i.offsetHeight, x = (o ? S : k) + "px", L = (o ? k : S) + "px";
            if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, k + "px", S + "px", !0), g.style.width = x, g.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : L, o) {
              let a = k / 2 + "px " + k / 2 + "px 0", r = S / 2 + "px " + S / 2 + "px 0";
              c = b === 90 || b === -270 ? r : a;
            }
          }
          i.style.transformOrigin = c, this.plugins.resizing._setTransForm(i, b.toString(), i.getAttribute("data-rotateX") || "", i.getAttribute("data-rotateY") || ""), o ? i.style.maxWidth = "none" : i.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, i);
        },
        _setTransForm: function(i, s, u, f) {
          let o = (i.offsetWidth - i.offsetHeight) * (/-/.test(s) ? 1 : -1), b = "";
          if (/[1-9]/.test(s) && (u || f))
            switch (b = u ? "Y" : "X", s) {
              case "90":
                b = u && f ? "X" : f ? b : "";
                break;
              case "270":
                o *= -1, b = u && f ? "Y" : u ? b : "";
                break;
              case "-90":
                b = u && f ? "Y" : u ? b : "";
                break;
              case "-270":
                o *= -1, b = u && f ? "X" : f ? b : "";
                break;
              default:
                b = "";
            }
          s % 180 === 0 && (i.style.maxWidth = ""), i.style.transform = "rotate(" + s + "deg)" + (u ? " rotateX(" + u + "deg)" : "") + (f ? " rotateY(" + f + "deg)" : "") + (b ? " translate" + b + "(" + o + "px)" : "");
        },
        /**
         * @description The position of the caption is set automatically.
         * @param {Element} element Target element (not caption element)
         */
        setCaptionPosition: function(i) {
          const s = this.util.getChildElement(this.util.getParentElement(i, "FIGURE"), "FIGCAPTION");
          s && (s.style.marginTop = (this.context.resizing._rotateVertical ? i.offsetWidth - i.offsetHeight : 0) + "px");
        },
        /**
         * @description Mouse down event of resize handles
         * @param {MouseEvent} e Event object 
         */
        onMouseDown_resize_handle: function(i) {
          i.stopPropagation(), i.preventDefault();
          const s = this.context.resizing, u = s._resize_direction = i.target.classList[0];
          s._resizeClientX = i.clientX, s._resizeClientY = i.clientY, this.context.element.resizeBackground.style.display = "block", s.resizeButton.style.display = "none", s.resizeDiv.style.float = /l/.test(u) ? "right" : /r/.test(u) ? "left" : "none";
          const f = (function(c) {
            if (c.type === "keydown" && c.keyCode !== 27) return;
            const g = s._isChange;
            s._isChange = !1, this.removeDocEvent("mousemove", o), this.removeDocEvent("mouseup", f), this.removeDocEvent("keydown", f), c.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, u), g && this.history.push(!1));
          }).bind(this), o = this.plugins.resizing.resizing_element.bind(this, s, u, this.context[s._resize_plugin]);
          this.addDocEvent("mousemove", o), this.addDocEvent("mouseup", f), this.addDocEvent("keydown", f);
        },
        /**
         * @description Mouse move event after call "onMouseDown_resize_handle" of resize handles
         * The size of the module's "div" is adjusted according to the mouse move event.
         * @param {Object} contextResizing "core.context.resizing" object (binding argument)
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh") (binding argument)
         * @param {Object} plugin "core.context[currentPlugin]" object (binding argument)
         * @param {MouseEvent} e Event object
         */
        resizing_element: function(i, s, u, f) {
          const o = f.clientX, b = f.clientY;
          let c = u._element_w, g = u._element_h;
          const k = u._element_w + (/r/.test(s) ? o - i._resizeClientX : i._resizeClientX - o), S = u._element_h + (/b/.test(s) ? b - i._resizeClientY : i._resizeClientY - b), x = u._element_h / u._element_w * k;
          /t/.test(s) && (i.resizeDiv.style.top = u._element_h - (/h/.test(s) ? S : x) + "px"), /l/.test(s) && (i.resizeDiv.style.left = u._element_w - k + "px"), /r|l/.test(s) && (i.resizeDiv.style.width = k + "px", c = k), /^(t|b)[^h]$/.test(s) ? (i.resizeDiv.style.height = x + "px", g = x) : /^(t|b)h$/.test(s) && (i.resizeDiv.style.height = S + "px", g = S), i._resize_w = c, i._resize_h = g, this.util.changeTxt(i.resizeDisplay, this._w.Math.round(c) + " x " + this._w.Math.round(g)), i._isChange = !0;
        },
        /**
         * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
         * Called at the mouse-up event registered in "onMouseDown_resize_handle".
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
         */
        cancel_controller_resize: function(i) {
          const s = this.context.resizing._rotateVertical;
          this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
          let u = this._w.Math.round(s ? this.context.resizing._resize_h : this.context.resizing._resize_w), f = this._w.Math.round(s ? this.context.resizing._resize_w : this.context.resizing._resize_h);
          if (!s && !/%$/.test(u)) {
            const c = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
            this.util.getNumber(u, 0) > c && (f = this._w.Math.round(f / u * c), u = c);
          }
          const o = this.context.resizing._resize_plugin;
          this.plugins[o].setSize.call(this, u, f, !1, i), s && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, u, f), this.selectComponent(this.context[o]._element, o);
        }
      };
      return typeof n > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "resizing", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: l
      })), l;
    });
  })(Oi)), Oi.exports;
}
var cr = /* @__PURE__ */ ur();
const to = /* @__PURE__ */ Le(cr);
var Hi = { exports: {} }, dr = Hi.exports, un;
function fr() {
  return un || (un = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : dr, function(t, n) {
      const l = {
        name: "fileManager",
        _xmlHttp: null,
        _checkMediaComponent: function(i) {
          return /IMG|IFRAME|VIDEO|AUDIO/i.test(i.tagName) ? /FIGURE/i.test(i.parentElement.nodeName) || /FIGURE/i.test(i.parentElement.parentElement.nodeName) : !0;
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
        upload: function(i, s, u, f, o) {
          this.showLoading();
          const b = this.plugins.fileManager, c = b._xmlHttp = this.util.getXMLHttpRequest();
          if (c.onreadystatechange = b._callBackUpload.bind(this, c, f, o), c.open("post", i, !0), s !== null && typeof s == "object" && this._w.Object.keys(s).length > 0)
            for (let g in s)
              c.setRequestHeader(g, s[g]);
          c.send(u);
        },
        _callBackUpload: function(i, s, u) {
          if (i.readyState === 4)
            if (i.status === 200)
              try {
                s(i);
              } catch (f) {
                throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + f.message + '"');
              } finally {
                this.closeLoading();
              }
            else {
              this.closeLoading();
              const f = i.responseText ? JSON.parse(i.responseText) : i;
              if (typeof u != "function" || u("", f, this)) {
                const o = "[SUNEDITOR.fileManager.upload.serverException] status: " + i.status + ", response: " + (f.errorMessage || i.responseText);
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
        checkInfo: function(i, s, u, f, o) {
          let b = [];
          for (let r = 0, d = s.length; r < d; r++)
            b = b.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(s[r] + ':not([data-se-embed="true"])')));
          const c = this.plugins.fileManager, g = this.context[i], k = g._infoList, S = c.setInfo.bind(this);
          if (b.length === k.length)
            if (this._componentsInfoReset) {
              for (let r = 0, d = b.length; r < d; r++)
                S(i, b[r], u, null, o);
              return;
            } else {
              let r = !1;
              for (let d = 0, h = k.length, p; d < h; d++)
                if (p = k[d], b.filter(function(v) {
                  return p.src === v.src && p.index.toString() === v.getAttribute("data-index");
                }).length === 0) {
                  r = !0;
                  break;
                }
              if (!r) return;
            }
          const x = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = i);
          const L = [], a = [];
          for (let r = 0, d = k.length; r < d; r++)
            a[r] = k[r].index;
          for (g.__updateTags = b; b.length > 0; ) {
            const r = b.shift();
            !this.util.getParentElement(r, this.util.isMediaComponent) || !c._checkMediaComponent(r) ? (L.push(g._infoIndex), f(r)) : !r.getAttribute("data-index") || a.indexOf(r.getAttribute("data-index") * 1) < 0 ? (L.push(g._infoIndex), r.removeAttribute("data-index"), S(i, r, u, null, o)) : L.push(r.getAttribute("data-index") * 1);
          }
          for (let r = 0, d; r < k.length; r++)
            d = k[r].index, !(L.indexOf(d) > -1) && (k.splice(r, 1), typeof u == "function" && u(null, d, "delete", null, 0, this), r--);
          o && (this.context.resizing._resize_plugin = x);
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
        setInfo: function(i, s, u, f, o) {
          const b = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = i);
          const c = this.plugins[i], g = this.context[i], k = g._infoList;
          let S = s.getAttribute("data-index"), x = null, L = "";
          if (f || (f = {
            name: s.getAttribute("data-file-name") || (typeof s.src == "string" ? s.src.split("/").pop() : ""),
            size: s.getAttribute("data-file-size") || 0
          }), !S || this._componentsInfoInit)
            L = "create", S = g._infoIndex++, s.setAttribute("data-index", S), s.setAttribute("data-file-name", f.name), s.setAttribute("data-file-size", f.size), x = {
              src: s.src,
              index: S * 1,
              name: f.name,
              size: f.size
            }, k.push(x);
          else {
            L = "update", S *= 1;
            for (let a = 0, r = k.length; a < r; a++)
              if (S === k[a].index) {
                x = k[a];
                break;
              }
            x || (S = g._infoIndex++, x = { index: S }, k.push(x)), x.src = s.src, x.name = s.getAttribute("data-file-name"), x.size = s.getAttribute("data-file-size") * 1;
          }
          if (x.element = s, x.delete = c.destroy.bind(this, s), x.select = (function(a) {
            a.scrollIntoView(!0), this._w.setTimeout(c.select.bind(this, a));
          }).bind(this, s), o) {
            if (!s.getAttribute("origin-size") && s.naturalWidth && s.setAttribute("origin-size", s.naturalWidth + "," + s.naturalHeight), !s.getAttribute("data-origin")) {
              const a = this.util.getParentElement(s, this.util.isMediaComponent), r = this.util.getParentElement(s, "FIGURE"), d = this.plugins.resizing._module_getSizeX.call(this, g, s, r, a), h = this.plugins.resizing._module_getSizeY.call(this, g, s, r, a);
              s.setAttribute("data-origin", d + "," + h), s.setAttribute("data-size", d + "," + h);
            }
            if (!s.style.width) {
              const a = (s.getAttribute("data-size") || s.getAttribute("data-origin") || "").split(",");
              c.onModifyMode.call(this, s, null), c.applySize.call(this, a[0], a[1]);
            }
            this.context.resizing._resize_plugin = b;
          }
          typeof u == "function" && u(s, S, L, x, --g._uploadFileLength < 0 ? 0 : g._uploadFileLength, this);
        },
        /**
         * @description Delete info object at "_infoList"
         * @param {String} pluginName Plugin name 
         * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        deleteInfo: function(i, s, u) {
          if (s >= 0) {
            const f = this.context[i]._infoList;
            for (let o = 0, b = f.length; o < b; o++)
              if (s === f[o].index) {
                f.splice(o, 1), typeof u == "function" && u(null, s, "delete", null, 0, this);
                return;
              }
          }
        },
        /**
         * @description Reset info object and "_infoList = []", "_infoIndex = 0"
         * @param {String} pluginName Plugin name 
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        resetInfo: function(i, s) {
          const u = this.context[i];
          if (typeof s == "function") {
            const f = u._infoList;
            for (let o = 0, b = f.length; o < b; o++)
              s(null, f[o].index, "delete", null, 0, this);
          }
          u._infoList = [], u._infoIndex = 0;
        }
      };
      return typeof n > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileManager", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: l
      })), l;
    });
  })(Hi)), Hi.exports;
}
var hr = /* @__PURE__ */ fr();
const ul = /* @__PURE__ */ Le(hr), pr = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([ni, eo, rl, to, ul]);
    const t = e.options, n = e.context, l = n.image = {
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
    l.modal = i, l.imgInputFile = i.querySelector("._se_image_file"), l.imgUrlFile = i.querySelector("._se_image_url"), l.focusElement = l.imgInputFile || l.imgUrlFile, l.altText = i.querySelector("._se_image_alt"), l.captionCheckEl = i.querySelector("._se_image_check_caption"), l.previewSrc = i.querySelector("._se_tab_content_image .se-link-preview"), i.querySelector(".se-dialog-tabs").addEventListener("click", this.openTab.bind(e)), i.querySelector("form").addEventListener("submit", this.submit.bind(e)), l.imgInputFile && i.querySelector(".se-file-remove").addEventListener("click", this._removeSelectedFiles.bind(l.imgInputFile, l.imgUrlFile, l.previewSrc)), l.imgUrlFile && l.imgUrlFile.addEventListener("input", this._onLinkPreview.bind(l.previewSrc, l._v_src, t.linkProtocol)), l.imgInputFile && l.imgUrlFile && l.imgInputFile.addEventListener("change", this._fileInputChange.bind(l));
    const s = i.querySelector(".__se__gallery");
    s && s.addEventListener("click", this._openGallery.bind(e)), l.proportion = {}, l.inputX = {}, l.inputY = {}, t.imageResizing && (l.proportion = i.querySelector("._se_image_check_proportion"), l.inputX = i.querySelector("._se_image_size_x"), l.inputY = i.querySelector("._se_image_size_y"), l.inputX.value = t.imageWidth, l.inputY.value = t.imageHeight, l.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), l.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), l.inputX.addEventListener("change", this.setRatio.bind(e)), l.inputY.addEventListener("change", this.setRatio.bind(e)), l.proportion.addEventListener("change", this.setRatio.bind(e)), i.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), n.dialog.modal.appendChild(i), e.plugins.anchor.initEvent.call(e, "image", i.querySelector("._se_tab_content_url")), l.anchorCtx = e.context.anchor.caller.image, i = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, n = e.lang, l = e.util.createElement("DIV");
    l.className = "se-dialog-content se-dialog-image", l.style.display = "none";
    let i = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + n.dialogBox.close + '" aria-label="' + n.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + n.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + n.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + n.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
    if (t.imageFileInput && (i += '<div class="se-dialog-form"><label>' + n.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="' + t.imageAccept + '"' + (t.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + n.controller.remove + '" aria-label="' + n.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.imageUrlInput && (i += '<div class="se-dialog-form"><label>' + n.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url _se_image_url" type="text" />' + (t.imageGalleryUrl && e.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + n.toolbar.imageGallery + '" aria-label="' + n.toolbar.imageGallery + '">' + e.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), i += '</div><div class="se-dialog-form"><label>' + n.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', t.imageResizing) {
      const s = t.imageSizeOnlyPercentage, u = s ? ' style="display: none !important;"' : "", f = t.imageHeightShow ? "" : ' style="display: none !important;"';
      i += '<div class="se-dialog-form">', s || !t.imageHeightShow ? i += '<div class="se-dialog-size-text"><label class="size-w">' + n.dialogBox.size + "</label></div>" : i += '<div class="se-dialog-size-text"><label class="size-w">' + n.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + n.dialogBox.height + "</label></div>", i += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (s ? ' type="number" min="1"' : 'type="text"') + (s ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + f + ">" + (s ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + u + (s ? ' max="100"' : "") + f + "/><label" + u + f + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + n.dialogBox.proportion + '</label><button type="button" title="' + n.dialogBox.revertButton + '" aria-label="' + n.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
    }
    return i += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + n.dialogBox.caption + '</label></div></div></div><div class="_se_tab_content _se_tab_content_url" style="display: none">' + e.context.anchor.forms.innerHTML + '</div><div class="se-dialog-footer"><div' + (t.imageAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + n.dialogBox.basic + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + n.dialogBox.left + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + n.dialogBox.center + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + n.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + n.dialogBox.submitButton + '" aria-label="' + n.dialogBox.submitButton + '"><span>' + n.dialogBox.submitButton + "</span></button></div></form>", l.innerHTML = i, l;
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
  _onLinkPreview: function(e, t, n) {
    const l = n.target.value.trim();
    e._linkValue = this.textContent = l ? t && l.indexOf("://") === -1 && l.indexOf("#") !== 0 ? t + l : l.indexOf("://") === -1 ? "/" + l : l : "";
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
    const t = e || this.context.image._element, n = this.util.getParentElement(t, this.util.isMediaComponent) || t, l = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onImageDeleteBefore == "function" && this.functions.onImageDeleteBefore(t, n, l, this) === !1) return;
    let i = n.previousElementSibling || n.nextElementSibling;
    const s = n.parentNode;
    this.util.removeItem(n), this.plugins.image.init.call(this), this.controllersOff(), s !== this.context.element.wysiwyg && this.util.removeItemAllParents(s, function(u) {
      return u.childNodes.length === 0;
    }, null), this.focusEdge(i), this.plugins.fileManager.deleteInfo.call(this, "image", l, this.functions.onImageUpload), this.history.push(!1);
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
    const t = this.context.image.modal, n = e === "init" ? t.querySelector("._se_tab_link") : e.target;
    if (!/^BUTTON$/i.test(n.tagName))
      return !1;
    const l = n.getAttribute("data-tab-link"), i = "_se_tab_content";
    let s, u, f;
    for (u = t.getElementsByClassName(i), s = 0; s < u.length; s++)
      u[s].style.display = "none";
    for (f = t.getElementsByClassName("_se_tab_link"), s = 0; s < f.length; s++)
      this.util.removeClass(f[s], "active");
    return t.querySelector("." + i + "_" + l).style.display = "block", this.util.addClass(n, "active"), l === "image" && this.context.image.focusElement ? this.context.image.focusElement.focus() : l === "url" && this.context.anchor.caller.image.urlInput.focus(), !1;
  },
  submit: function(e) {
    const t = this.context.image, n = this.plugins.image;
    e.preventDefault(), e.stopPropagation(), t._altText = t.altText.value, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked, t._resizing && (t._proportionChecked = t.proportion.checked);
    try {
      this.context.dialog.updateModal && n.update_image.call(this, !1, !0, !1), t.imgInputFile && t.imgInputFile.files.length > 0 ? (this.showLoading(), n.submitAction.call(this, this.context.image.imgInputFile.files)) : t.imgUrlFile && t._v_src._linkValue.length > 0 && (this.showLoading(), n.onRender_imgUrl.call(this, t._v_src._linkValue));
    } catch (l) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.submit.fail] cause : "' + l.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, n = [];
    for (let f = 0, o = e.length; f < o; f++)
      /image/i.test(e[f].type) && (n.push(e[f]), t += e[f].size);
    const l = this.options.imageUploadSizeLimit;
    if (l > 0) {
      let f = 0;
      const o = this.context.image._infoList;
      for (let b = 0, c = o.length; b < c; b++)
        f += o[b].size * 1;
      if (t + f > l) {
        this.closeLoading();
        const b = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + l / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(b, { limitSize: l, currentSize: f, uploadSize: t }, this)) && this.functions.noticeOpen(b);
        return;
      }
    }
    const i = this.context.image;
    i._uploadFileLength = n.length;
    const u = {
      anchor: this.plugins.anchor.createAnchor.call(this, i.anchorCtx, !0),
      inputWidth: i.inputX.value,
      inputHeight: i.inputY.value,
      align: i._align,
      isUpdate: this.context.dialog.updateModal,
      alt: i._altText,
      element: i._element
    };
    if (typeof this.functions.onImageUploadBefore == "function") {
      const f = this.functions.onImageUploadBefore(n, u, this, (function(o) {
        o && this._w.Array.isArray(o.result) ? this.plugins.image.register.call(this, u, o) : this.plugins.image.upload.call(this, u, o);
      }).bind(this));
      if (typeof f > "u") return;
      if (!f) {
        this.closeLoading();
        return;
      }
      this._w.Array.isArray(f) && f.length > 0 && (n = f);
    }
    this.plugins.image.upload.call(this, u, n);
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
    const n = this.options.imageUploadUrl, l = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof n == "string" && n.length > 0) {
      const i = new FormData();
      for (let s = 0; s < l; s++)
        i.append("file-" + s, t[s]);
      this.plugins.fileManager.upload.call(this, n, this.options.imageUploadHeader, i, this.plugins.image.callBack_imgUpload.bind(this, e), this.functions.onImageUploadError);
    } else
      this.plugins.image.setup_reader.call(this, t, e.anchor, e.inputWidth, e.inputHeight, e.align, e.alt, l, e.isUpdate);
  },
  callBack_imgUpload: function(e, t) {
    if (typeof this.functions.imageUploadHandler == "function")
      this.functions.imageUploadHandler(t, e, this);
    else {
      const n = JSON.parse(t.responseText);
      n.errorMessage ? this.plugins.image.error.call(this, n.errorMessage, n) : this.plugins.image.register.call(this, e, n);
    }
  },
  register: function(e, t) {
    const n = t.result;
    for (let l = 0, i = n.length, s; l < i; l++)
      if (s = { name: n[l].name, size: n[l].size }, e.isUpdate) {
        this.plugins.image.update_src.call(this, n[l].url, e.element, s);
        break;
      } else
        this.plugins.image.create_image.call(this, n[l].url, e.anchor, e.inputWidth, e.inputHeight, e.align, s, e.alt);
    this.closeLoading();
  },
  setup_reader: function(e, t, n, l, i, s, u, f) {
    try {
      if (u === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = u;
      const o = this._w.FileReader, b = [u];
      this.context.image.inputX.value = n, this.context.image.inputY.value = l;
      for (let c = 0, g, k; c < u; c++)
        g = new o(), k = e[c], g.onload = (function(S, x, L, a, r) {
          b[r] = { result: S.result, file: a }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, x, b, L, t, n, l, i, s), this.closeLoading());
        }).bind(this, g, f, this.context.image._element, k, c), g.readAsDataURL(k);
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + o.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, n, l, i, s, u, f) {
    const o = this.plugins.image.update_src, b = this.plugins.image.create_image;
    for (let c = 0, g = t.length; c < g; c++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[c].file.name), this.context.image._element.setAttribute("data-file-size", t[c].file.size), o.call(this, t[c].result, n, t[c].file)) : b.call(this, t[c].result, l, i, s, u, t[c].file, f);
  },
  onRender_imgUrl: function(e) {
    if (e || (e = this.context.image._v_src._linkValue), !e) return !1;
    const t = this.context.image;
    try {
      const n = { name: e.split("/").pop(), size: 0 };
      this.context.dialog.updateModal ? this.plugins.image.update_src.call(this, e, t._element, n) : this.plugins.image.create_image.call(this, e, this.plugins.anchor.createAnchor.call(this, t.anchorCtx, !0), t.inputX.value, t.inputY.value, t._align, n, t._altText);
    } catch (n) {
      throw Error('[SUNEDITOR.image.URLRendering.fail] cause : "' + n.message + '"');
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
    const e = this.plugins.image, t = this.context.image, n = (function(l) {
      e.onModifyMode.call(this, l, null), e.openModify.call(this, !0), t.inputX.value = t._origin_w, t.inputY.value = t._origin_h;
      const i = this.util.getFormatElement(l);
      i && (t._align = i.style.textAlign || i.style.float), this.util.isAnchor(l.parentNode) && !t.anchorCtx.linkValue && (t.anchorCtx.linkValue = " "), e.update_image.call(this, !0, !1, !0), e.init.call(this);
    }).bind(this);
    this.plugins.fileManager.checkInfo.call(this, "image", ["img"], this.functions.onImageUpload, n, !0);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "image", this.functions.onImageUpload);
  },
  create_image: function(e, t, n, l, i, s, u) {
    const f = this.plugins.image, o = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let b = this.util.createElement("IMG");
    b.src = e, b.alt = u, b.setAttribute("data-rotate", "0"), t = f.onRender_link.call(this, b, t ? t.cloneNode(!1) : null), o._resizing && b.setAttribute("data-proportion", o._proportionChecked);
    const c = this.plugins.component.set_cover.call(this, t), g = this.plugins.component.set_container.call(this, c, "se-image-container");
    o._captionChecked && (o._caption = this.plugins.component.create_caption.call(this), c.appendChild(o._caption)), o._element = b, o._cover = c, o._container = g, f.applySize.call(this, n, l), f.setAlign.call(this, i, b, c, g), b.onload = f._image_create_onload.bind(this, b, o.svgDefaultSize, g), this.insertComponent(g, !0, !0, !this.options.mediaAutoSelect) && this.plugins.fileManager.setInfo.call(this, "image", b, this.functions.onImageUpload, s, !0), this.context.resizing._resize_plugin = "";
  },
  _image_create_onload: function(e, t, n) {
    if (e.offsetWidth === 0 && this.plugins.image.applySize.call(this, t, ""), this.options.mediaAutoSelect)
      this.selectComponent(e, "image");
    else {
      const l = this.appendFormatTag(n, null);
      l && this.setRange(l, 0, l, 0);
    }
    this.history.push(!1);
  },
  update_image: function(e, t, n) {
    const l = this.context.image;
    let i = l._element, s = l._cover, u = l._container, f = !1;
    s === null && (f = !0, i = l._element.cloneNode(!0), s = this.plugins.component.set_cover.call(this, i)), u === null ? (s = s.cloneNode(!0), i = s.querySelector("img"), f = !0, u = this.plugins.component.set_container.call(this, s, "se-image-container")) : f && (u.innerHTML = "", u.appendChild(s), l._cover = s, l._element = i, f = !1);
    let o;
    const b = this.util.isNumber(l.inputX.value) ? l.inputX.value + l.sizeUnit : l.inputX.value, c = this.util.isNumber(l.inputY.value) ? l.inputY.value + l.sizeUnit : l.inputY.value;
    /%$/.test(i.style.width) ? o = b !== u.style.width || c !== u.style.height : o = b !== i.style.width || c !== i.style.height, i.alt = l._altText;
    let g = !1;
    l._captionChecked ? l._caption || (l._caption = this.plugins.component.create_caption.call(this), s.appendChild(l._caption), g = !0) : l._caption && (this.util.removeItem(l._caption), l._caption = null, g = !0);
    let k = null;
    const S = this.plugins.anchor.createAnchor.call(this, l.anchorCtx, !0);
    if (S)
      l._linkElement !== S || f && !u.contains(S) ? (l._linkElement = S.cloneNode(!1), s.insertBefore(this.plugins.image.onRender_link.call(this, i, l._linkElement), l._caption), k = l._element) : l._linkElement.setAttribute("data-image-link", "image");
    else if (l._linkElement !== null) {
      const L = i;
      if (L.setAttribute("data-image-link", ""), s.contains(l._linkElement)) {
        const a = L.cloneNode(!0);
        s.removeChild(l._linkElement), s.insertBefore(a, l._caption), l._element = i = a;
      }
    }
    let x = null;
    if (f) {
      const L = l._element.parentNode;
      if (x = this.util.isRangeFormatElement(L) || this.util.isWysiwygDiv(L) ? l._element : L || l._element, this.util.getParentElement(l._element, this.util.isNotCheckingNode))
        x = k ? S : l._element, x.parentNode.replaceChild(u, x);
      else if (this.util.isListCell(x)) {
        const a = this.util.getParentElement(l._element, function(r) {
          return r.parentNode === x;
        });
        x.insertBefore(u, a), this.util.removeItem(l._element), this.util.removeEmptyNode(a, null, !0);
      } else if (this.util.isFormatElement(x)) {
        const a = this.util.getParentElement(l._element, function(r) {
          return r.parentNode === x;
        });
        x = this.util.splitElement(x, a), x.parentNode.insertBefore(u, x), this.util.removeItem(l._element), this.util.removeEmptyNode(x, null, !0), x.children.length === 0 && (x.innerHTML = this.util.htmlRemoveWhiteSpace(x.innerHTML));
      } else if (this.util.isFormatElement(x.parentNode)) {
        const a = x.parentNode;
        a.parentNode.insertBefore(u, x.previousSibling ? a.nextElementSibling : a), l.__updateTags.map(function(r) {
          return x.contains(r);
        }).length === 0 && this.util.removeItem(x);
      } else
        x = this.util.isFigures(x.parentNode) ? x.parentNode : x, x.parentNode.replaceChild(u, x);
      i = u.querySelector("img"), l._element = i, l._cover = s, l._container = u;
    }
    k && (f ? (this.util.removeItem(k), this.util.getListChildren(S, function(L) {
      return /IMG/i.test(L.tagName);
    }).length === 0 && this.util.removeItem(S)) : this.util.removeItem(S)), (g || !l._onlyPercentage && o) && !e && (/\d+/.test(i.style.height) || this.context.resizing._rotateVertical && l._captionChecked) && (/%$/.test(l.inputX.value) || /%$/.test(l.inputY.value) ? this.plugins.resizing.resetTransform.call(this, i) : this.plugins.resizing.setTransformSize.call(this, i, this.util.getNumber(l.inputX.value, 0), this.util.getNumber(l.inputY.value, 0))), l._resizing && (i.setAttribute("data-proportion", l._proportionChecked), o && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, i, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", i, this.functions.onImageUpload, null, !0), t && this.selectComponent(i, "image"), n || this.history.push(!1);
  },
  update_src: function(e, t, n) {
    t.src = e, this._w.setTimeout(this.plugins.fileManager.setInfo.bind(this, "image", t, this.functions.onImageUpload, n, !0)), this.selectComponent(t, "image");
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e, t) {
    if (!e) return;
    const n = this.context.image;
    n._linkElement = n.anchorCtx.linkAnchor = this.util.isAnchor(e.parentNode) ? e.parentNode : null, n._element = e, n._cover = this.util.getParentElement(e, "FIGURE"), n._container = this.util.getParentElement(e, this.util.isMediaComponent), n._caption = this.util.getChildElement(n._cover, "FIGCAPTION"), n._align = e.getAttribute("data-align") || e.style.float || "none", e.style.float = "", this.plugins.anchor.setCtx(n._linkElement, n.anchorCtx), t && (n._element_w = t.w, n._element_h = t.h, n._element_t = t.t, n._element_l = t.l);
    let l = n._element.getAttribute("data-size") || n._element.getAttribute("data-origin"), i, s;
    l ? (l = l.split(","), i = l[0], s = l[1]) : t && (i = t.w, s = t.h), n._origin_w = i || e.style.width || e.width || "", n._origin_h = s || e.style.height || e.height || "";
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
    const n = this.context.image;
    return e || (e = n.inputX.value || this.options.imageWidth), t || (t = n.inputY.value || this.options.imageHeight), n._onlyPercentage && e || /%$/.test(e) ? (this.plugins.image.setPercentSize.call(this, e, t), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.image.setAutoSize.call(this) : this.plugins.image.setSize.call(this, e, t, !1), !1);
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
  setSize: function(e, t, n, l) {
    const i = this.context.image, s = /^(rw|lw)$/.test(l) && /\d+/.test(i._element.style.height);
    /^(th|bh)$/.test(l) && /\d+/.test(i._element.style.width) || (i._element.style.width = this.util.isNumber(e) ? e + i.sizeUnit : e, this.plugins.image.cancelPercentAttr.call(this)), s || (i._element.style.height = this.util.isNumber(t) ? t + i.sizeUnit : /%$/.test(t) ? "" : t), i._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), n || i._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, i);
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
    const t = (e._element.getAttribute("data-origin") || "").split(","), n = t[0], l = t[1];
    t && (e._onlyPercentage || /%$/.test(n) && (/%$/.test(l) || !/\d/.test(l)) ? this.plugins.image.setPercentSize.call(this, n, l) : this.plugins.image.setSize.call(this, n, l), this.plugins.resizing._module_saveCurrentSize.call(this, e));
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const n = this.context.image;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + n.sizeUnit : t || "";
    const l = /%$/.test(t);
    n._container.style.width = this.util.isNumber(e) ? e + "%" : e, n._container.style.height = "", n._cover.style.width = "100%", n._cover.style.height = l ? t : "", n._element.style.width = "100%", n._element.style.height = l ? "" : t, n._element.style.maxWidth = "", n._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), n._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing.setCaptionPosition.call(this, n._element), this.plugins.resizing._module_saveCurrentSize.call(this, n);
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
  setAlign: function(e, t, n, l) {
    const i = this.context.image;
    e || (e = i._align), t || (t = i._element), n || (n = i._cover), l || (l = i._container), /%$/.test(t.style.width) && e === "center" ? (l.style.minWidth = "100%", n.style.width = l.style.width) : (l.style.minWidth = "", n.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : !t.style.width || t.style.width === "auto" ? "" : t.style.width || "100%"), this.util.hasClass(l, "__se__float-" + e) || (this.util.removeClass(l, i._floatClassRegExp), this.util.addClass(l, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.image;
    e.imgInputFile && (e.imgInputFile.value = ""), e.imgUrlFile && (e._v_src._linkValue = e.previewSrc.textContent = e.imgUrlFile.value = ""), e.imgInputFile && e.imgUrlFile && (e.imgUrlFile.removeAttribute("disabled"), e.previewSrc.style.textDecoration = ""), e.altText.value = "", e.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = !0, e.captionCheckEl.checked = !1, e._element = null, this.plugins.image.openTab.call(this, "init"), e._resizing && (e.inputX.value = this.options.imageWidth === e._defaultSizeX ? "" : this.options.imageWidth, e.inputY.value = this.options.imageHeight === e._defaultSizeY ? "" : this.options.imageHeight, e.proportion.checked = !0, e._ratio = !1, e._ratioX = 1, e._ratioY = 1), this.plugins.anchor.init.call(this, e.anchorCtx);
  }
}, mr = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([ni, rl, to, ul]);
    const t = e.options, n = e.context, l = n.video = {
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
    l.modal = i, l.videoInputFile = i.querySelector("._se_video_file"), l.videoUrlFile = i.querySelector(".se-input-url"), l.focusElement = l.videoUrlFile || l.videoInputFile, l.preview = i.querySelector(".se-link-preview"), i.querySelector("form").addEventListener("submit", this.submit.bind(e)), l.videoInputFile && i.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(l.videoInputFile, l.videoUrlFile, l.preview)), l.videoInputFile && l.videoUrlFile && l.videoInputFile.addEventListener("change", this._fileInputChange.bind(l)), l.videoUrlFile && l.videoUrlFile.addEventListener("input", this._onLinkPreview.bind(l.preview, l, t.linkProtocol)), l.proportion = {}, l.videoRatioOption = {}, l.inputX = {}, l.inputY = {}, t.videoResizing && (l.proportion = i.querySelector("._se_video_check_proportion"), l.videoRatioOption = i.querySelector(".se-video-ratio"), l.inputX = i.querySelector("._se_video_size_x"), l.inputY = i.querySelector("._se_video_size_y"), l.inputX.value = t.videoWidth, l.inputY.value = t.videoHeight, l.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), l.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), l.inputX.addEventListener("change", this.setRatio.bind(e)), l.inputY.addEventListener("change", this.setRatio.bind(e)), l.proportion.addEventListener("change", this.setRatio.bind(e)), l.videoRatioOption.addEventListener("change", this.setVideoRatio.bind(e)), i.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), n.dialog.modal.appendChild(i), i = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, n = e.lang, l = e.util.createElement("DIV");
    l.className = "se-dialog-content", l.style.display = "none";
    let i = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + n.dialogBox.close + '" aria-label="' + n.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + n.dialogBox.videoBox.title + '</span></div><div class="se-dialog-body">';
    if (t.videoFileInput && (i += '<div class="se-dialog-form"><label>' + n.dialogBox.videoBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_video_file" type="file" accept="' + t.videoAccept + '"' + (t.videoMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + n.controller.remove + '" aria-label="' + n.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.videoUrlInput && (i += '<div class="se-dialog-form"><label>' + n.dialogBox.videoBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), t.videoResizing) {
      const s = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], u = t.videoRatio, f = t.videoSizeOnlyPercentage, o = f ? ' style="display: none !important;"' : "", b = t.videoHeightShow ? "" : ' style="display: none !important;"', c = t.videoRatioShow ? "" : ' style="display: none !important;"', g = !f && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      i += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + n.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + b + ">" + n.dialogBox.height + '</label><label class="size-h"' + c + ">(" + n.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + g + ">" + (f ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + b + '/><select class="se-input-select se-video-ratio" title="' + n.dialogBox.ratio + '" aria-label="' + n.dialogBox.ratio + '"' + c + ">", b || (i += '<option value=""> - </option>');
      for (let k = 0, S = s.length; k < S; k++)
        i += '<option value="' + s[k].value + '"' + (u.toString() === s[k].value.toString() ? " selected" : "") + ">" + s[k].name + "</option>";
      i += '</select><button type="button" title="' + n.dialogBox.revertButton + '" aria-label="' + n.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + o + g + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + n.dialogBox.proportion + "</label></div>";
    }
    return i += '</div><div class="se-dialog-footer"><div' + (t.videoAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + n.dialogBox.basic + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + n.dialogBox.left + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + n.dialogBox.center + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + n.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + n.dialogBox.submitButton + '" aria-label="' + n.dialogBox.submitButton + '"><span>' + n.dialogBox.submitButton + "</span></button></div></form>", l.innerHTML = i, l;
  },
  _fileInputChange: function() {
    this.videoInputFile.value ? (this.videoUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.videoUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _onLinkPreview: function(e, t, n) {
    const l = n.target.value.trim();
    /^<iframe.*\/iframe>$/.test(l) ? (e._linkValue = l, this.textContent = '<IFrame :src=".."></IFrame>') : e._linkValue = this.textContent = l ? t && l.indexOf("://") === -1 && l.indexOf("#") !== 0 ? t + l : l.indexOf("://") === -1 ? "/" + l : l : "";
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.videoTagAttrs;
    if (t)
      for (let n in t)
        this.util.hasOwn(t, n) && e.setAttribute(n, t[n]);
  },
  createVideoTag: function() {
    const e = this.util.createElement("VIDEO");
    return this.plugins.video._setTagAttrs.call(this, e), e;
  },
  _setIframeAttrs: function(e) {
    e.frameBorder = "0", e.allowFullscreen = !0;
    const t = this.options.videoIframeAttrs;
    if (t)
      for (let n in t)
        this.util.hasOwn(t, n) && e.setAttribute(n, t[n]);
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
    const t = e || this.context.video._element, n = this.context.video._container, l = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onVideoDeleteBefore == "function" && this.functions.onVideoDeleteBefore(t, n, l, this) === !1) return;
    let i = n.previousElementSibling || n.nextElementSibling;
    const s = n.parentNode;
    this.util.removeItem(n), this.plugins.video.init.call(this), this.controllersOff(), s !== this.context.element.wysiwyg && this.util.removeItemAllParents(s, function(u) {
      return u.childNodes.length === 0;
    }, null), this.focusEdge(i), this.plugins.fileManager.deleteInfo.call(this, "video", l, this.functions.onVideoUpload), this.history.push(!1);
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
    const t = this.context.video, n = e.target.options[e.target.selectedIndex].value;
    t._defaultSizeY = t._videoRatio = n ? n * 100 + "%" : t._defaultSizeY, t.inputY.placeholder = n ? n * 100 + "%" : "", t.inputY.value = "";
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
    const n = this.context.video;
    this.plugins.resizing._module_setInputSize.call(this, n, e), e === "y" && this.plugins.video.setVideoRatioSelect.call(this, t.target.value || n._defaultRatio);
  },
  /**
   * @Override resizing
   */
  setRatio: function() {
    this.plugins.resizing._module_setRatio.call(this, this.context.video);
  },
  submit: function(e) {
    const t = this.context.video, n = this.plugins.video;
    e.preventDefault(), e.stopPropagation(), t._align = t.modal.querySelector('input[name="suneditor_video_radio"]:checked').value;
    try {
      t.videoInputFile && t.videoInputFile.files.length > 0 ? (this.showLoading(), n.submitAction.call(this, this.context.video.videoInputFile.files)) : t.videoUrlFile && t._linkValue.length > 0 && (this.showLoading(), n.setup_url.call(this, t._linkValue));
    } catch (l) {
      throw this.closeLoading(), Error('[SUNEDITOR.video.submit.fail] cause : "' + l.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, n = [];
    for (let u = 0, f = e.length; u < f; u++)
      /video/i.test(e[u].type) && (n.push(e[u]), t += e[u].size);
    const l = this.options.videoUploadSizeLimit;
    if (l > 0) {
      let u = 0;
      const f = this.context.video._infoList;
      for (let o = 0, b = f.length; o < b; o++)
        u += f[o].size * 1;
      if (t + u > l) {
        this.closeLoading();
        const o = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + l / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(o, { limitSize: l, currentSize: u, uploadSize: t }, this)) && this.functions.noticeOpen(o);
        return;
      }
    }
    const i = this.context.video;
    i._uploadFileLength = n.length;
    const s = {
      inputWidth: i.inputX.value,
      inputHeight: i.inputY.value,
      align: i._align,
      isUpdate: this.context.dialog.updateModal,
      element: i._element
    };
    if (typeof this.functions.onVideoUploadBefore == "function") {
      const u = this.functions.onVideoUploadBefore(n, s, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.video.register.call(this, s, f) : this.plugins.video.upload.call(this, s, f);
      }).bind(this));
      if (typeof u > "u") return;
      if (!u) {
        this.closeLoading();
        return;
      }
      typeof u == "object" && u.length > 0 && (n = u);
    }
    this.plugins.video.upload.call(this, s, n);
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
    const n = this.options.videoUploadUrl, l = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof n == "string" && n.length > 0) {
      const i = new FormData();
      for (let s = 0; s < l; s++)
        i.append("file-" + s, t[s]);
      this.plugins.fileManager.upload.call(this, n, this.options.videoUploadHeader, i, this.plugins.video.callBack_videoUpload.bind(this, e), this.functions.onVideoUploadError);
    } else
      throw Error('[SUNEDITOR.videoUpload.fail] cause : There is no "videoUploadUrl" option.');
  },
  callBack_videoUpload: function(e, t) {
    if (typeof this.functions.videoUploadHandler == "function")
      this.functions.videoUploadHandler(t, e, this);
    else {
      const n = JSON.parse(t.responseText);
      n.errorMessage ? this.plugins.video.error.call(this, n.errorMessage, n) : this.plugins.video.register.call(this, e, n);
    }
  },
  register: function(e, t) {
    const n = t.result, l = this.plugins.video.createVideoTag.call(this);
    for (let i = 0, s = n.length, u; i < s; i++)
      u = { name: n[i].name, size: n[i].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : l.cloneNode(!1), n[i].url, e.inputWidth, e.inputHeight, e.align, u, e.isUpdate);
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
            const n = e.split("?");
            e = n[0] + "?" + t._youtubeQuery + "&" + n[1];
          } else
            e += "?" + t._youtubeQuery;
      } else if (/vimeo\.com/.test(e) && (e.endsWith("/") && (e = e.slice(0, -1)), e = "https://player.vimeo.com/video/" + e.slice(e.lastIndexOf("/") + 1), t._vimeoQuery.length > 0))
        if (/\?/.test(e)) {
          const n = e.split("?");
          e = n[0] + "?" + t._vimeoQuery + "&" + n[1];
        } else
          e += "?" + t._vimeoQuery;
      this.plugins.video.create_video.call(this, this.plugins.video[!/embed|iframe|player|\/e\/|\.php|\.html?/.test(e) && !/vimeo\.com/.test(e) ? "createVideoTag" : "createIframeTag"].call(this), e, t.inputX.value, t.inputY.value, t._align, null, this.context.dialog.updateModal);
    } catch (t) {
      throw Error('[SUNEDITOR.video.upload.fail] cause : "' + t.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  create_video: function(e, t, n, l, i, s, u) {
    this.context.resizing._resize_plugin = "video";
    const f = this.context.video;
    let o = null, b = null, c = !1;
    if (u) {
      if (e = f._element, e.src !== t) {
        c = !0;
        const L = /youtu\.?be/.test(t), a = /vimeo\.com/.test(t);
        if ((L || a) && !/^iframe$/i.test(e.nodeName)) {
          const r = this.plugins.video.createIframeTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), f._element = e = r;
        } else if (!L && !a && !/^video$/i.test(e.nodeName)) {
          const r = this.plugins.video.createVideoTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), f._element = e = r;
        } else
          e.src = t;
      }
      b = f._container, o = this.util.getParentElement(e, "FIGURE");
    } else
      c = !0, e.src = t, f._element = e, o = this.plugins.component.set_cover.call(this, e), b = this.plugins.component.set_container.call(this, o, "se-video-container");
    f._cover = o, f._container = b;
    const g = this.plugins.resizing._module_getSizeX.call(this, f) !== (n || f._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, f) !== (l || f._videoRatio), k = !u || g;
    f._resizing && (this.context.video._proportionChecked = f.proportion.checked, e.setAttribute("data-proportion", f._proportionChecked));
    let S = !1;
    k && (S = this.plugins.video.applySize.call(this)), S && i === "center" || this.plugins.video.setAlign.call(this, null, e, o, b);
    let x = !0;
    if (u)
      f._resizing && this.context.resizing._rotateVertical && k && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (x = this.insertComponent(b, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const L = this.appendFormatTag(b, null);
      L && this.setRange(L, 0, L, 0);
    }
    x && (c && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, s, !0), u && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
  },
  _update_videoCover: function(e) {
    if (!e) return;
    const t = this.context.video;
    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
    const n = e.parentNode;
    let l = this.util.isRangeFormatElement(n) || this.util.isWysiwygDiv(n) ? e : n || e;
    const i = e;
    t._element = e = e.cloneNode(!0);
    const s = t._cover = this.plugins.component.set_cover.call(this, e), u = t._container = this.plugins.component.set_container.call(this, s, "se-video-container");
    try {
      const f = l.querySelector("figcaption");
      let o = null;
      f && (o = this.util.createElement("DIV"), o.innerHTML = f.innerHTML, this.util.removeItem(f));
      const b = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, b[0] || i.style.width || i.width || "", b[1] || i.style.height || i.height || "");
      const c = this.util.getFormatElement(i);
      if (c && (t._align = c.style.textAlign || c.style.float), this.plugins.video.setAlign.call(this, null, e, s, u), this.util.getParentElement(i, this.util.isNotCheckingNode))
        i.parentNode.replaceChild(u, i);
      else if (this.util.isListCell(l)) {
        const g = this.util.getParentElement(i, function(k) {
          return k.parentNode === l;
        });
        l.insertBefore(u, g), this.util.removeItem(i), this.util.removeEmptyNode(g, null, !0);
      } else if (this.util.isFormatElement(l)) {
        const g = this.util.getParentElement(i, function(k) {
          return k.parentNode === l;
        });
        l = this.util.splitElement(l, g), l.parentNode.insertBefore(u, l), this.util.removeItem(i), this.util.removeEmptyNode(l, null, !0), l.children.length === 0 && (l.innerHTML = this.util.htmlRemoveWhiteSpace(l.innerHTML));
      } else
        l.parentNode.replaceChild(u, l);
      o && l.parentNode.insertBefore(o, u.nextElementSibling);
    } catch (f) {
      console.warn("[SUNEDITOR.video.error] Maybe the video tag is nested.", f);
    }
    this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, null, !0), this.plugins.video.init.call(this);
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e, t) {
    const n = this.context.video;
    n._element = e, n._cover = this.util.getParentElement(e, "FIGURE"), n._container = this.util.getParentElement(e, this.util.isMediaComponent), n._align = e.style.float || e.getAttribute("data-align") || "none", e.style.float = "", t && (n._element_w = t.w, n._element_h = t.h, n._element_t = t.t, n._element_l = t.l);
    let l = n._element.getAttribute("data-size") || n._element.getAttribute("data-origin"), i, s;
    l ? (l = l.split(","), i = l[0], s = l[1]) : t && (i = t.w, s = t.h), n._origin_w = i || e.style.width || e.width || "", n._origin_h = s || e.style.height || e.height || "";
  },
  /**
   * @Required @Override fileManager, resizing
   */
  openModify: function(e) {
    const t = this.context.video;
    if (t.videoUrlFile && (t._linkValue = t.preview.textContent = t.videoUrlFile.value = t._element.src || (t._element.querySelector("source") || "").src || ""), (t.modal.querySelector('input[name="suneditor_video_radio"][value="' + t._align + '"]') || t.modal.querySelector('input[name="suneditor_video_radio"][value="none"]')).checked = !0, t._resizing) {
      this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.video);
      const n = t._videoRatio = this.plugins.resizing._module_getSizeY.call(this, t);
      this.plugins.video.setVideoRatioSelect.call(this, n) || (t.inputY.value = t._onlyPercentage ? this.util.getNumber(n, 2) : n);
    }
    e || this.plugins.dialog.open.call(this, "video", !0);
  },
  setVideoRatioSelect: function(e) {
    let t = !1;
    const n = this.context.video, l = n.videoRatioOption.options;
    /%$/.test(e) || n._onlyPercentage ? e = this.util.getNumber(e, 2) / 100 + "" : (!this.util.isNumber(e) || e * 1 >= 1) && (e = ""), n.inputY.placeholder = "";
    for (let i = 0, s = l.length; i < s; i++)
      l[i].value === e ? (t = l[i].selected = !0, n.inputY.placeholder = e ? e * 100 + "%" : "") : l[i].selected = !1;
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
    const n = this.context.video;
    return e || (e = n.inputX.value || this.options.videoWidth), t || (t = n.inputY.value || this.options.videoHeight), n._onlyPercentage || /%$/.test(e) || !e ? (this.plugins.video.setPercentSize.call(this, e || "100%", t || (/%$/.test(n._videoRatio) ? n._videoRatio : n._defaultRatio)), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.video.setAutoSize.call(this) : this.plugins.video.setSize.call(this, e, t || n._videoRatio || n._defaultRatio, !1), !1);
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
  setSize: function(e, t, n, l) {
    const i = this.context.video, s = /^(rw|lw)$/.test(l), u = /^(th|bh)$/.test(l);
    u || (e = this.util.getNumber(e, 0)), s || (t = this.util.isNumber(t) ? t + i.sizeUnit : t || ""), e = e ? e + i.sizeUnit : "", u || (i._element.style.width = e), s || (i._cover.style.paddingBottom = i._cover.style.height = t), !u && !/%$/.test(e) && (i._cover.style.width = e, i._container.style.width = ""), !s && !/%$/.test(t) ? i._element.style.height = t : i._element.style.height = "", n || i._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, i);
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
    const n = ((e ? t._element.getAttribute("data-size") : "") || t._element.getAttribute("data-origin") || "").split(",");
    if (n) {
      const l = n[0], i = n[1];
      t._onlyPercentage || /%$/.test(l) && (/%$/.test(i) || !/\d/.test(i)) ? this.plugins.video.setPercentSize.call(this, l, i) : this.plugins.video.setSize.call(this, l, i), this.plugins.resizing._module_saveCurrentSize.call(this, t);
    }
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const n = this.context.video;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + n.sizeUnit : t || n._defaultRatio, n._container.style.width = this.util.isNumber(e) ? e + "%" : e, n._container.style.height = "", n._cover.style.width = "100%", n._cover.style.height = t, n._cover.style.paddingBottom = t, n._element.style.width = "100%", n._element.style.height = "100%", n._element.style.maxWidth = "", n._align === "center" && this.plugins.video.setAlign.call(this, null, null, null, null), n._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing._module_saveCurrentSize.call(this, n);
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
  setAlign: function(e, t, n, l) {
    const i = this.context.video;
    e || (e = i._align), t || (t = i._element), n || (n = i._cover), l || (l = i._container), /%$/.test(t.style.width) && e === "center" ? (l.style.minWidth = "100%", n.style.width = l.style.width, n.style.height = n.style.height, n.style.paddingBottom = /%$/.test(n.style.height) ? this.util.getNumber(this.util.getNumber(n.style.height, 2) / 100 * this.util.getNumber(n.style.width, 2), 2) + "%" : n.style.height) : (l.style.minWidth = "", n.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width || "100%", n.style.paddingBottom = n.style.height), this.util.hasClass(l, "__se__float-" + e) || (this.util.removeClass(l, i._floatClassRegExp), this.util.addClass(l, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.video;
    e.videoInputFile && (e.videoInputFile.value = ""), e.videoUrlFile && (e._linkValue = e.preview.textContent = e.videoUrlFile.value = ""), e.videoInputFile && e.videoUrlFile && (e.videoUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._origin_w = this.options.videoWidth, e._origin_h = this.options.videoHeight, e.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = !0, e._resizing && (e.inputX.value = this.options.videoWidth === e._defaultSizeX ? "" : this.options.videoWidth, e.inputY.value = this.options.videoHeight === e._defaultSizeY ? "" : this.options.videoHeight, e.proportion.checked = !0, e.proportion.disabled = !0, this.plugins.video.setVideoRatioSelect.call(this, e._defaultRatio));
  }
}, gr = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([ni, rl, ul]);
    const t = e.context, n = t.audio = {
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
    let l = this.setDialog(e);
    n.modal = l, n.audioInputFile = l.querySelector("._se_audio_files"), n.audioUrlFile = l.querySelector(".se-input-url"), n.focusElement = n.audioInputFile || n.audioUrlFile, n.preview = l.querySelector(".se-link-preview");
    let i = this.setController(e);
    n.controller = i, l.querySelector("form").addEventListener("submit", this.submit.bind(e)), n.audioInputFile && l.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(n.audioInputFile, n.audioUrlFile, n.preview)), n.audioInputFile && n.audioUrlFile && n.audioInputFile.addEventListener("change", this._fileInputChange.bind(n)), i.addEventListener("click", this.onClick_controller.bind(e)), n.audioUrlFile && n.audioUrlFile.addEventListener("input", this._onLinkPreview.bind(n.preview, n, e.options.linkProtocol)), t.dialog.modal.appendChild(l), t.element.relative.appendChild(i), l = null, i = null;
  },
  /** HTML - dialog */
  setDialog: function(e) {
    const t = e.options, n = e.lang, l = e.util.createElement("DIV");
    l.className = "se-dialog-content", l.style.display = "none";
    let i = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + n.dialogBox.close + '" aria-label="' + n.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + n.dialogBox.audioBox.title + '</span></div><div class="se-dialog-body">';
    return t.audioFileInput && (i += '<div class="se-dialog-form"><label>' + n.dialogBox.audioBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_audio_files" type="file" accept="' + t.audioAccept + '"' + (t.audioMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + n.controller.remove + '" aria-label="' + n.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.audioUrlInput && (i += '<div class="se-dialog-form"><label>' + n.dialogBox.audioBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), i += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + n.dialogBox.submitButton + '" aria-label="' + n.dialogBox.submitButton + '"><span>' + n.dialogBox.submitButton + "</span></button></div></form>", l.innerHTML = i, l;
  },
  /** HTML - controller */
  setController: function(e) {
    const t = e.lang, n = e.icons, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-link", l.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-tooltip">' + n.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' + n.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", l;
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
    const t = this.context.audio._origin_w, n = this.context.audio._origin_h;
    return e.setAttribute("origin-size", t + "," + n), e.style.cssText = (t ? "width:" + t + "; " : "") + (n ? "height:" + n + ";" : ""), e;
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.audioTagAttrs;
    if (t)
      for (let n in t)
        this.util.hasOwn(t, n) && e.setAttribute(n, t[n]);
  },
  _onLinkPreview: function(e, t, n) {
    const l = n.target.value.trim();
    e._linkValue = this.textContent = l ? t && l.indexOf("://") === -1 && l.indexOf("#") !== 0 ? t + l : l.indexOf("://") === -1 ? "/" + l : l : "";
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
    const t = this.util.getParentElement(e, this.util.isComponent) || e, n = e.getAttribute("data-index") * 1;
    if (typeof this.functions.onAudioDeleteBefore == "function" && this.functions.onAudioDeleteBefore(e, t, n, this) === !1) return;
    const l = t.previousElementSibling || t.nextElementSibling, i = t.parentNode;
    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), i !== this.context.element.wysiwyg && this.util.removeItemAllParents(i, function(s) {
      return s.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "audio", n, this.functions.onAudioUpload), this.history.push(!1);
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
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.audio.submit.fail] cause : "' + n.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, n = [];
    for (let u = 0, f = e.length; u < f; u++)
      /audio/i.test(e[u].type) && (n.push(e[u]), t += e[u].size);
    const l = this.options.audioUploadSizeLimit;
    if (l > 0) {
      let u = 0;
      const f = this.context.audio._infoList;
      for (let o = 0, b = f.length; o < b; o++)
        u += f[o].size * 1;
      if (t + u > l) {
        this.closeLoading();
        const o = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + l / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(o, { limitSize: l, currentSize: u, uploadSize: t }, this)) && this.functions.noticeOpen(o);
        return;
      }
    }
    const i = this.context.audio;
    i._uploadFileLength = n.length;
    const s = {
      isUpdate: this.context.dialog.updateModal,
      element: i._element
    };
    if (typeof this.functions.onAudioUploadBefore == "function") {
      const u = this.functions.onAudioUploadBefore(n, s, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.audio.register.call(this, s, f) : this.plugins.audio.upload.call(this, s, f);
      }).bind(this));
      if (typeof u > "u") return;
      if (!u) {
        this.closeLoading();
        return;
      }
      typeof u == "object" && u.length > 0 && (n = u);
    }
    this.plugins.audio.upload.call(this, s, n);
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
    const n = this.options.audioUploadUrl, l = this.context.dialog.updateModal ? 1 : t.length, i = new FormData();
    for (let s = 0; s < l; s++)
      i.append("file-" + s, t[s]);
    this.plugins.fileManager.upload.call(this, n, this.options.audioUploadHeader, i, this.plugins.audio.callBack_upload.bind(this, e), this.functions.onAudioUploadError);
  },
  callBack_upload: function(e, t) {
    if (typeof this.functions.audioUploadHandler == "function")
      this.functions.audioUploadHandler(t, e, this);
    else {
      const n = JSON.parse(t.responseText);
      n.errorMessage ? this.plugins.audio.error.call(this, n.errorMessage, n) : this.plugins.audio.register.call(this, e, n);
    }
  },
  register: function(e, t) {
    const n = t.result;
    for (let l = 0, i = n.length, s, u; l < i; l++)
      e.isUpdate ? u = e.element : u = this.plugins.audio._createAudioTag.call(this), s = { name: n[l].name, size: n[l].size }, this.plugins.audio.create_audio.call(this, u, n[l].url, s, e.isUpdate);
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
  create_audio: function(e, t, n, l) {
    const i = this.context.audio;
    if (l)
      if (i._element && (e = i._element), e && e.src !== t)
        e.src = t, this.selectComponent(e, "audio");
      else {
        this.selectComponent(e, "audio");
        return;
      }
    else {
      e.src = t;
      const s = this.plugins.component.set_cover.call(this, e), u = this.plugins.component.set_container.call(this, s, "");
      if (!this.insertComponent(u, !1, !0, !this.options.mediaAutoSelect)) {
        this.focus();
        return;
      }
      if (!this.options.mediaAutoSelect) {
        const f = this.appendFormatTag(u, null);
        f && this.setRange(f, 0, f, 0);
      }
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, n, !1), l && this.history.push(!1);
  },
  updateCover: function(e) {
    const t = this.context.audio;
    this.plugins.audio._setTagAttrs.call(this, e);
    const n = e.parentNode;
    let l = this.util.isRangeFormatElement(n) || this.util.isWysiwygDiv(n) ? e : n || e;
    const i = e;
    t._element = e = e.cloneNode(!1);
    const s = this.plugins.component.set_cover.call(this, e), u = this.plugins.component.set_container.call(this, s, "se-audio-container");
    try {
      if (this.util.getParentElement(i, this.util.isNotCheckingNode))
        i.parentNode.replaceChild(u, i);
      else if (this.util.isListCell(l)) {
        const f = this.util.getParentElement(i, function(o) {
          return o.parentNode === l;
        });
        l.insertBefore(u, f), this.util.removeItem(i), this.util.removeEmptyNode(f, null, !0);
      } else if (this.util.isFormatElement(l)) {
        const f = this.util.getParentElement(i, function(o) {
          return o.parentNode === l;
        });
        l = this.util.splitElement(l, f), l.parentNode.insertBefore(u, l), this.util.removeItem(i), this.util.removeEmptyNode(l, null, !0), l.children.length === 0 && (l.innerHTML = this.util.htmlRemoveWhiteSpace(l.innerHTML));
      } else
        l.parentNode.replaceChild(u, l);
    } catch (f) {
      console.warn("[SUNEDITOR.audio.error] Maybe the audio tag is nested.", f);
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
}, cn = "https://katex.org/docs/supported.html", vr = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([ni]);
    const t = e.context;
    t.math = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      previewElement: null,
      fontSizeElement: null,
      defaultFontSize: "",
      _mathExp: null
    };
    let n = this.setDialog(e);
    t.math.modal = n, t.math.focusElement = n.querySelector(".se-math-exp"), t.math.previewElement = n.querySelector(".se-math-preview"), t.math.fontSizeElement = n.querySelector(".se-math-size"), t.math.focusElement.addEventListener("paste", function(i) {
      typeof e.functions.onPasteMath == "function" && e.functions.onPasteMath(i, e);
    }, !1), t.math.focusElement.addEventListener(e.util.isIE ? "textinput" : "input", this._renderMathExp.bind(e, t.math), !1), t.math.fontSizeElement.addEventListener("change", (function(i) {
      this.fontSize = i.target.value;
    }).bind(t.math.previewElement.style), !1);
    let l = this.setController_MathButton(e);
    t.math.mathController = l, t.math._mathExp = null, n.querySelector("form").addEventListener("submit", this.submit.bind(e), !1), l.addEventListener("click", this.onClick_mathController.bind(e)), t.math.previewElement.style.fontSize = t.math.defaultFontSize, t.dialog.modal.appendChild(n), t.element.relative.appendChild(l), n = null, l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, n = e.util.createElement("DIV"), l = e.options.mathFontSize;
    let i = l[0].value;
    n.className = "se-dialog-content", n.style.display = "none";
    let s = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + cn + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let u = 0, f = l.length, o; u < f; u++)
      o = l[u], o.default && (i = o.value), s += '<option value="' + o.value + '"' + (o.default ? " selected" : "") + ">" + o.text + "</option>";
    return s += '</select></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.previewLabel + '</label><p class="se-math-preview"></p></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", e.context.math.defaultFontSize = i, n.innerHTML = s, n;
  },
  /** modify controller button */
  setController_MathButton: function(e) {
    const t = e.lang, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-link", n.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + e.icons.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + e.icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", n;
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
    } catch (n) {
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + cn + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", n);
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
      const n = this.context.math, l = n.focusElement.value, i = n.previewElement.querySelector(".katex");
      if (!i) return !1;
      if (i.className = "__se__katex " + i.className, i.setAttribute("contenteditable", !1), i.setAttribute("data-exp", this.util.HTMLEncoder(l)), i.setAttribute("data-font-size", n.fontSizeElement.value), i.style.fontSize = n.fontSizeElement.value, this.context.dialog.updateModal) {
        const s = this.util.getParentElement(n._mathExp, ".katex");
        s.parentNode.replaceChild(i, s), this.setRange(i, 0, i, 1);
      } else {
        const s = this.getSelectedElements();
        if (s.length > 1) {
          const f = this.util.createElement(s[0].nodeName);
          if (f.appendChild(i), !this.insertNode(f, null, !0)) return !1;
        } else if (!this.insertNode(i, null, !0)) return !1;
        const u = this.util.createTextNode(this.util.zeroWidthSpace);
        i.parentNode.insertBefore(u, i.nextSibling), this.setRange(i, 0, i, 1);
      }
      return n.focusElement.value = "", n.fontSizeElement.value = "1em", n.previewElement.style.fontSize = "1em", n.previewElement.innerHTML = "", !0;
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
        const n = this.util.HTMLDecoder(t._mathExp.getAttribute("data-exp")), l = t._mathExp.getAttribute("data-font-size") || "1em";
        this.context.dialog.updateModal = !0, t.focusElement.value = n, t.fontSizeElement.value = l, t.previewElement.innerHTML = this.plugins.math._renderer.call(this, n), t.previewElement.style.fontSize = l;
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
var Fi = { exports: {} }, br = Fi.exports, dn;
function yr() {
  return dn || (dn = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : br, function(t, n) {
      const l = {
        name: "fileBrowser",
        _xmlHttp: null,
        _loading: null,
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function(i) {
          const s = i.context;
          s.fileBrowser = {
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
          let u = i.util.createElement("DIV");
          u.className = "se-file-browser sun-editor-common";
          let f = i.util.createElement("DIV");
          f.className = "se-file-browser-back";
          let o = i.util.createElement("DIV");
          o.className = "se-file-browser-inner", o.innerHTML = this.set_browser(i), u.appendChild(f), u.appendChild(o), this._loading = u.querySelector(".se-loading-box"), s.fileBrowser.area = u, s.fileBrowser.header = o.querySelector(".se-file-browser-header"), s.fileBrowser.titleArea = o.querySelector(".se-file-browser-title"), s.fileBrowser.tagArea = o.querySelector(".se-file-browser-tags"), s.fileBrowser.body = o.querySelector(".se-file-browser-body"), s.fileBrowser.list = o.querySelector(".se-file-browser-list"), s.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(i)), s.fileBrowser.list.addEventListener("click", this.onClickFile.bind(i)), o.addEventListener("mousedown", this._onMouseDown_browser.bind(i)), o.addEventListener("click", this._onClick_browser.bind(i)), s.element.relative.appendChild(u), u = null, f = null, o = null;
        },
        set_browser: function(i) {
          const s = i.lang;
          return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" title="' + s.dialogBox.close + '" aria-label="' + s.dialogBox.close + '">' + i.icons.cancel + '</button><span class="se-file-browser-title"></span><div class="se-file-browser-tags"></div></div><div class="se-file-browser-body"><div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div><div class="se-file-browser-list"></div></div></div>';
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
        open: function(i, s) {
          this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(b) {
            /27/.test(b.keyCode) && this.plugins.fileBrowser.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
          const u = this.context.fileBrowser;
          u.contextPlugin = i, u.selectorHandler = s;
          const f = this.context[i], o = f.listClass;
          this.util.hasClass(u.list, o) || (u.list.className = "se-file-browser-list " + o), this.options.popupDisplay === "full" ? u.area.style.position = "fixed" : u.area.style.position = "absolute", u.titleArea.textContent = f.title, u.area.style.display = "block", this.context[i].directData ? this.plugins.fileBrowser._drawListItem.call(this, this.context[i].directData, !0) : this.plugins.fileBrowser._drawFileList.call(this, this.context[i].url, this.context[i].header);
        },
        _bindClose: null,
        /**
         * @description Close a fileBrowser plugin
         * The plugin's "init" method is called.
         */
        close: function() {
          const i = this.plugins.fileBrowser;
          i._xmlHttp && i._xmlHttp.abort(), i._bindClose && (this._d.removeEventListener("keydown", i._bindClose), i._bindClose = null);
          const s = this.context.fileBrowser;
          s.area.style.display = "none", s.selectorHandler = null, s.selectedTags = [], s.items = [], s.list.innerHTML = s.tagArea.innerHTML = s.titleArea.textContent = "", typeof this.plugins[s.contextPlugin].init == "function" && this.plugins[s.contextPlugin].init.call(this), s.contextPlugin = "";
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
        _drawFileList: function(i, s) {
          const u = this.plugins.fileBrowser, f = u._xmlHttp = this.util.getXMLHttpRequest();
          if (f.onreadystatechange = u._callBackGet.bind(this, f), f.open("get", i, !0), s !== null && typeof s == "object" && this._w.Object.keys(s).length > 0)
            for (let o in s)
              f.setRequestHeader(o, s[o]);
          f.send(null), this.plugins.fileBrowser.showBrowserLoading();
        },
        _callBackGet: function(i) {
          if (i.readyState === 4) {
            if (this.plugins.fileBrowser._xmlHttp = null, i.status === 200)
              try {
                const s = JSON.parse(i.responseText);
                s.result.length > 0 ? this.plugins.fileBrowser._drawListItem.call(this, s.result, !0) : s.nullMessage && (this.context.fileBrowser.list.innerHTML = s.nullMessage);
              } catch (s) {
                throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + s.message + '"');
              } finally {
                this.plugins.fileBrowser.closeBrowserLoading(), this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + "px";
              }
            else if (this.plugins.fileBrowser.closeBrowserLoading(), i.status !== 0) {
              const s = i.responseText ? JSON.parse(i.responseText) : i, u = "[SUNEDITOR.fileBrowser.get.serverException] status: " + i.status + ", response: " + (s.errorMessage || i.responseText);
              throw Error(u);
            }
          }
        },
        _drawListItem: function(i, s) {
          const u = this.context.fileBrowser, f = this.context[u.contextPlugin], o = [], b = i.length, c = f.columnSize || u.columnSize, g = c <= 1 ? 1 : Math.round(b / c) || 1, k = f.itemTemplateHandler;
          let S = "", x = '<div class="se-file-item-column">', L = 1;
          for (let a = 0, r, d; a < b; a++)
            if (r = i[a], d = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], d = r.tag = d.map(function(h) {
              return h.trim();
            }), x += k(r), (a + 1) % g === 0 && L < c && a + 1 < b && (L++, x += '</div><div class="se-file-item-column">'), s && d.length > 0)
              for (let h = 0, p = d.length, v; h < p; h++)
                v = d[h], v && o.indexOf(v) === -1 && (o.push(v), S += '<a title="' + v + '" aria-label="' + v + '">' + v + "</a>");
          x += "</div>", u.list.innerHTML = x, s && (u.items = i, u.tagArea.innerHTML = S, u.tagElements = u.tagArea.querySelectorAll("A"));
        },
        onClickTag: function(i) {
          const s = i.target;
          if (!this.util.isAnchor(s)) return;
          const u = s.textContent, f = this.plugins.fileBrowser, o = this.context.fileBrowser, b = o.tagArea.querySelector('a[title="' + u + '"]'), c = o.selectedTags, g = c.indexOf(u);
          g > -1 ? (c.splice(g, 1), this.util.removeClass(b, "on")) : (c.push(u), this.util.addClass(b, "on")), f._drawListItem.call(
            this,
            c.length === 0 ? o.items : o.items.filter(function(k) {
              return k.tag.some(function(S) {
                return c.indexOf(S) > -1;
              });
            }),
            !1
          );
        },
        onClickFile: function(i) {
          i.preventDefault(), i.stopPropagation();
          const s = this.context.fileBrowser, u = s.list;
          let f = i.target, o = null;
          if (f === u) return;
          for (; u !== f.parentNode && (o = f.getAttribute("data-command"), !o); )
            f = f.parentNode;
          if (!o) return;
          (s.selectorHandler || this.context[s.contextPlugin].selectorHandler)(f, f.parentNode.querySelector(".__se__img_name").textContent), this.plugins.fileBrowser.close.call(this);
        }
      };
      return typeof n > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: {}
      }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileBrowser", {
        enumerable: !0,
        writable: !1,
        configurable: !1,
        value: l
      })), l;
    });
  })(Fi)), Fi.exports;
}
var Cr = /* @__PURE__ */ yr();
const _r = /* @__PURE__ */ Le(Cr), wr = {
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
      const n = { name: t, size: 0 };
      this.plugins.image.create_image.call(this, e.getAttribute("data-value"), null, this.context.image._origin_w, this.context.image._origin_h, "none", n, e.alt);
    }).bind(this), null);
  }
}, kr = { blockquote: Fs, align: Us, font: Ps, fontSize: Ws, fontColor: $s, hiliteColor: qs, horizontalRule: Zs, list: js, table: Gs, formatBlock: Ks, lineHeight: Ys, template: Xs, paragraphStyle: Js, textStyle: Qs, link: nr, image: pr, video: mr, audio: gr, math: vr, imageGallery: wr }, xr = {
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
}, ge = {
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
    return e.replace(/&|\u00A0|'|"|<|>/g, function(n) {
      return typeof t[n] == "string" ? t[n] : n;
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
      return ge.camelToKebabCase(t);
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
      return ge.camelToKebabCase(t);
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
    return e.replace(/<|>/g, function(n) {
      return typeof t[n] == "string" ? t[n] : n;
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
    return e.replace(/\$lt;|\$gt;/g, function(n) {
      return typeof t[n] == "string" ? t[n] : n;
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
    let n = "";
    const l = [], i = t === "js" ? "script" : "link", s = t === "js" ? "src" : "href";
    let u = "(?:";
    for (let b = 0, c = e.length; b < c; b++)
      u += e[b] + (b < c - 1 ? "|" : ")");
    const f = new this._w.RegExp("(^|.*[\\/])" + u + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), o = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let b = this._d.getElementsByTagName(i), c = 0; c < b.length; c++)
      o.test(b[c][s]) && l.push(b[c]);
    for (let b = 0; b < l.length; b++) {
      let c = l[b][s].match(f);
      if (c) {
        n = c[0];
        break;
      }
    }
    if (n === "" && (n = l.length > 0 ? l[0][s] : ""), n.indexOf(":/") === -1 && n.slice(0, 2) !== "//" && (n = n.indexOf("/") === 0 ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + n : location.href.match(/^[^\?]*\/(?:)/)[0] + n), !n) throw "[SUNEDITOR.util.getIncludePath.fail] The SUNEDITOR installation path could not be automatically detected. (name: +" + name + ", extension: " + t + ")";
    return n;
  },
  /**
   * @deprecated
   * @description Returns the CSS text that has been applied to the current page.
   * @param {Document|null} doc To get the CSS text of an document(core._wd). If null get the current document.
   * @returns {String} Styles string
   */
  getPageStyle: function(e) {
    let t = "";
    const n = (e || this._d).styleSheets;
    for (let l = 0, i = n.length, s; l < i; l++) {
      try {
        s = n[l].cssRules;
      } catch {
        continue;
      }
      if (s)
        for (let u = 0, f = s.length; u < f; u++)
          t += s[u].cssText;
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
    const n = e.attributes;
    let l = "";
    for (let i = 0, s = n.length; i < s; i++)
      t && t.indexOf(n[i].name) > -1 || (l += n[i].name + '="' + n[i].value + '" ');
    return l;
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
    let n, l;
    return this.isIE_Edge ? (l = this._w.unescape(t(e)).length, n = 0, t(e).match(/(%0A|%0D)/gi) !== null && (n = t(e).match(/(%0A|%0D)/gi).length), l + n) : (l = new this._w.TextEncoder("utf-8").encode(e).length, n = 0, t(e).match(/(%0A|%0D)/gi) !== null && (n = t(e).match(/(%0A|%0D)/gi).length), l + n);
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
  copyTagAttributes: function(e, t, n) {
    if (t.style.cssText) {
      const i = t.style;
      for (let s = 0, u = i.length; s < u; s++)
        e.style[i[s]] = i[i[s]];
    }
    const l = t.attributes;
    for (let i = 0, s = l.length, u; i < s; i++)
      u = l[i].name.toLowerCase(), n && n.indexOf(u) > -1 || !l[i].value ? e.removeAttribute(u) : u !== "style" && e.setAttribute(l[i].name, l[i].value);
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
  getArrayItem: function(e, t, n) {
    if (!e || e.length === 0) return null;
    t = t || function() {
      return !0;
    };
    const l = [];
    for (let i = 0, s = e.length, u; i < s; i++)
      if (u = e[i], t(u))
        if (n) l.push(u);
        else return u;
    return n ? l : null;
  },
  /**
   * @description Check if an array contains an element 
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} element The element to check for
   * @returns {Boolean}
   */
  arrayIncludes: function(e, t) {
    for (let n = 0; n < e.length; n++)
      if (e[n] === t)
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
    let n = -1;
    for (let l = 0, i = e.length; l < i; l++)
      if (e[l] === t) {
        n = l;
        break;
      }
    return n;
  },
  /**
   * @description Get the next index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} item The element to find index
   * @returns {Number}
   */
  nextIdx: function(e, t) {
    let n = this.getArrayIndex(e, t);
    return n === -1 ? -1 : n + 1;
  },
  /**
   * @description Get the previous index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array Element array
   * @param {Node} item The element to find index
   * @returns {Number}
   */
  prevIdx: function(e, t) {
    let n = this.getArrayIndex(e, t);
    return n === -1 ? -1 : n - 1;
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
  getNodePath: function(e, t, n) {
    const l = [];
    let i = !0;
    return this.getParentElement(e, (function(s) {
      if (s === t && (i = !1), i && !this.isWysiwygDiv(s)) {
        if (n && s.nodeType === 3) {
          let u = null, f = null;
          n.s = n.e = 0;
          let o = s.previousSibling;
          for (; o && o.nodeType === 3; )
            f = o.textContent.replace(this.zeroWidthRegExp, ""), n.s += f.length, s.textContent = f + s.textContent, u = o, o = o.previousSibling, this.removeItem(u);
          let b = s.nextSibling;
          for (; b && b.nodeType === 3; )
            f = b.textContent.replace(this.zeroWidthRegExp, ""), n.e += f.length, s.textContent += f, u = b, b = b.nextSibling, this.removeItem(u);
        }
        l.push(s);
      }
      return !1;
    }).bind(this)), l.map(this.getPositionIndex).reverse();
  },
  /**
   * @description Returns the node in the location of the path array obtained from "util.getNodePath".
   * @param {Array} offsets Position array, array obtained from "util.getNodePath"
   * @param {Node} parentNode Base parent element
   * @returns {Node}
   */
  getNodeFromPath: function(e, t) {
    let n = t, l;
    for (let i = 0, s = e.length; i < s && (l = n.childNodes, l.length !== 0); i++)
      l.length <= e[i] ? n = l[l.length - 1] : n = l[e[i]];
    return n;
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
    const n = e.style, l = t.style;
    let i = 0;
    for (let b = 0, c = n.length; b < c; b++)
      n[n[b]] === l[n[b]] && i++;
    const s = e.classList, u = t.classList, f = this._w.RegExp;
    let o = 0;
    for (let b = 0, c = s.length; b < c; b++)
      f("(s|^)" + s[b] + "(s|$)").test(u.value) && o++;
    return i === l.length && i === n.length && o === u.length && o === s.length;
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
    let n = (e + "").match(/-?\d+(\.\d+)?/);
    return !n || !n[0] ? 0 : (n = n[0], t < 0 ? n * 1 : t === 0 ? this._w.Math.round(n * 1) : (n * 1).toFixed(t) * 1);
  },
  /**
   * @description Get all "children" of the argument value element (Without text nodes)
   * @param {Element} element element to get child node
   * @param {Function|null} validation Conditional function
   * @returns {Array}
   */
  getListChildren: function(e, t) {
    const n = [];
    return !e || !e.children || e.children.length === 0 || (t = t || function() {
      return !0;
    }, (function l(i) {
      if (e !== i && t(i) && n.push(i), i.children)
        for (let s = 0, u = i.children.length; s < u; s++)
          l(i.children[s]);
    })(e)), n;
  },
  /**
   * @description Get all "childNodes" of the argument value element (Include text nodes)
   * @param {Node} element element to get child node
   * @param {Function|null} validation Conditional function
   * @returns {Array}
   */
  getListChildNodes: function(e, t) {
    const n = [];
    return !e || e.childNodes.length === 0 || (t = t || function() {
      return !0;
    }, (function l(i) {
      e !== i && t(i) && n.push(i);
      for (let s = 0, u = i.childNodes.length; s < u; s++)
        l(i.childNodes[s]);
    })(e)), n;
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
    let n = e, l = t;
    for (; n && l && n.parentNode !== l.parentNode; )
      n = n.parentNode, l = l.parentNode;
    if (!n || !l) return { ancestor: null, a: e, b: t, result: 0 };
    const i = n.parentNode.childNodes, s = this.getArrayIndex(i, n), u = this.getArrayIndex(i, l);
    return {
      ancestor: n.parentNode,
      a: n,
      b: l,
      result: s > u ? 1 : s < u ? -1 : 0
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
    let n;
    if (typeof t == "function")
      n = t;
    else {
      let l;
      /^\./.test(t) ? (l = "className", t = t.split(".")[1]) : /^#/.test(t) ? (l = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (l = "name", t = "^" + t.split(":")[1] + "$") : (l = "nodeName", t = "^" + t + "$");
      const i = new this._w.RegExp(t, "i");
      n = function(s) {
        return i.test(s[l]);
      };
    }
    for (; e && !n(e); ) {
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
    let n = e.previousSibling;
    if (!n) {
      for (let l = e.parentNode; l; l = l.parentNode) {
        if (l === t) return null;
        if (l.previousSibling) {
          n = l.previousSibling;
          break;
        }
      }
      if (!n) return null;
    }
    for (; n.lastChild; ) n = n.lastChild;
    return n;
  },
  /**
   * @description Gets the next sibling first child. If there is no sibling, then it'll take it from the closest ancestor with child
   * Returns null if not found.
   * @param {Node} node Reference element
   * @param {Node|null} ceiling Highest boundary allowed
   * @returns {Node|null}
   */
  getNextDeepestNode: function(e, t) {
    let n = e.nextSibling;
    if (!n) {
      for (let l = e.parentNode; l; l = l.parentNode) {
        if (l === t) return null;
        if (l.nextSibling) {
          n = l.nextSibling;
          break;
        }
      }
      if (!n) return null;
    }
    for (; n.firstChild; ) n = n.firstChild;
    return n;
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
  getChildElement: function(e, t, n) {
    let l;
    if (typeof t == "function")
      l = t;
    else {
      let s;
      /^\./.test(t) ? (s = "className", t = t.split(".")[1]) : /^#/.test(t) ? (s = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (s = "name", t = "^" + t.split(":")[1] + "$") : (s = "nodeName", t = "^" + (t === "text" ? "#" + t : t) + "$");
      const u = new this._w.RegExp(t, "i");
      l = function(f) {
        return u.test(f[s]);
      };
    }
    const i = this.getListChildNodes(e, function(s) {
      return l(s);
    });
    return i[n ? i.length - 1 : 0];
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
    let n = 0, l = 0, i = e.nodeType === 3 ? e.parentElement : e;
    const s = this.getParentElement(e, this.isWysiwygDiv.bind(this));
    for (; i && !this.hasClass(i, "se-container") && i !== s; )
      n += i.offsetLeft, l += i.offsetTop, i = i.offsetParent;
    const u = t && /iframe/i.test(t.nodeName);
    return {
      left: n + (u ? t.parentElement.offsetLeft : 0),
      top: l - (s ? s.scrollTop : 0) + (u ? t.parentElement.offsetTop : 0)
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
  getOverlapRangeAtIndex: function(e, t, n, l) {
    if (e <= l ? t < n : t > n) return 0;
    const i = (e > n ? e : n) - (t < l ? t : l);
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
        const n = this.createElement("DIV");
        n.innerHTML = t, t = n.firstChild, e.parentNode.replaceChild(t, e);
      }
    else t.nodeType === 1 && e.parentNode.replaceChild(t, e);
  },
  /**
   * @description Set style, if all styles are deleted, the style properties are deleted.
   * @param {Element} element Element to set style
   * @param {String} styleName Style attribute name (marginLeft, textAlign...)
   * @param {String|Number} value Style value
   */
  setStyle: function(e, t, n) {
    e.style[t] = n, !n && !e.style.cssText && e.removeAttribute("style");
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
    const n = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    e.className = e.className.replace(n, " ").trim(), e.className.trim() || e.removeAttribute("class");
  },
  /**
   * @description Argument value If there is no class name, insert it and delete the class name if it exists
   * @param {Element} element Elements to replace class name
   * @param {String} className Class name to be change
   * @returns {Boolean|undefined}
   */
  toggleClass: function(e, t) {
    if (!e) return;
    let n = !1;
    const l = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    return l.test(e.className) ? e.className = e.className.replace(l, " ").trim() : (e.className += " " + t, n = !0), e.className.trim() || e.removeAttribute("class"), n;
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
  setDisabledButtons: function(e, t, n) {
    for (let l = 0, i = t.length; l < i; l++) {
      let s = t[l];
      (n || !this.isImportantDisabled(s)) && (s.disabled = e), n && (e ? s.setAttribute("data-important-disabled", "") : s.removeAttribute("data-important-disabled"));
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
  removeItemAllParents: function(e, t, n) {
    if (!e) return null;
    let l = null;
    return t || (t = (function(i) {
      if (i === n || this.isComponent(i)) return !1;
      const s = i.textContent.trim();
      return s.length === 0 || /^(\n|\u200B)+$/.test(s);
    }).bind(this)), (function i(s) {
      if (!ge.isWysiwygDiv(s)) {
        const u = s.parentNode;
        u && t(s) && (l = {
          sc: s.previousElementSibling,
          ec: s.nextElementSibling
        }, ge.removeItem(s), i(u));
      }
    })(e), l;
  },
  /**
   * @description Detach Nested all nested lists under the "baseNode".
   * Returns a list with nested removed.
   * @param {Node} baseNode Element on which to base.
   * @param {Boolean} all If true, it also detach all nested lists of a returned list.
   * @returns {Element}
   */
  detachNestedList: function(e, t) {
    const n = this._deleteNestedList(e);
    let l, i;
    if (n) {
      l = n.cloneNode(!1), i = n.childNodes;
      const u = this.getPositionIndex(e);
      for (; i[u]; )
        l.appendChild(i[u]);
    } else
      l = e;
    let s;
    if (t)
      s = this.getListChildren(l, (function(u) {
        return this.isListCell(u) && !u.previousElementSibling;
      }).bind(this));
    else {
      const u = this.getElementDepth(e) + 2;
      s = this.getListChildren(e, (function(f) {
        return this.isListCell(f) && !f.previousElementSibling && this.getElementDepth(f) === u;
      }).bind(this));
    }
    for (let u = 0, f = s.length; u < f; u++)
      this._deleteNestedList(s[u]);
    return n && (n.parentNode.insertBefore(l, n.nextSibling), i && i.length === 0 && this.removeItem(n)), l === e ? l.parentNode : l;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let n = t, l = n.parentNode, i, s, u, f, o;
    for (; this.isListCell(l); ) {
      for (f = this.getPositionIndex(e), i = l.nextElementSibling, s = l.parentNode, u = n; u; ) {
        if (n = n.nextSibling, this.isList(u)) {
          for (o = u.childNodes; o[f]; )
            s.insertBefore(o[f], i);
          o.length === 0 && this.removeItem(u);
        } else
          s.appendChild(u);
        u = n;
      }
      n = s, l = s.parentNode;
    }
    return t.children.length === 0 && this.removeItem(t), s;
  },
  /**
   * @description Split all tags based on "baseNode"
   * Returns the last element of the splited tag.
   * @param {Node} baseNode Element or text node on which to base
   * @param {Number|Node|null} offset Text offset of "baseNode" (Only valid when "baseNode" is a text node)
   * @param {Number} depth The nesting depth of the element being split. (default: 0)
   * @returns {Element}
   */
  splitElement: function(e, t, n) {
    if (this.isWysiwygDiv(e)) return e;
    if (t && !this.isNumber(t)) {
      const k = e.childNodes;
      let S = this.getPositionIndex(t);
      const x = e.cloneNode(!1), L = e.cloneNode(!1);
      for (let a = 0, r = k.length; a < r; a++) {
        if (a < S) x.appendChild(k[a]);
        else if (a > S) L.appendChild(k[a]);
        else continue;
        a--, r--, S--;
      }
      return x.childNodes.length > 0 && e.parentNode.insertBefore(x, e), L.childNodes.length > 0 && e.parentNode.insertBefore(L, e.nextElementSibling), e;
    }
    const l = e.parentNode;
    let i = 0, s = 1, u = !0, f, o, b;
    if ((!n || n < 0) && (n = 0), e.nodeType === 3) {
      if (i = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const k = this.getNodeFromPath([i + 1], l);
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
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === n && (u = !1);
    }
    e.nodeType === 1 && (s = 0);
    let c = e;
    for (; this.getElementDepth(c) > n; )
      for (i = this.getPositionIndex(c) + s, c = c.parentNode, b = f, f = c.cloneNode(!1), o = c.childNodes, b && (this.isListCell(f) && this.isList(b) && b.firstElementChild ? (f.innerHTML = b.firstElementChild.innerHTML, ge.removeItem(b.firstElementChild), b.children.length > 0 && f.appendChild(b)) : f.appendChild(b)); o[i]; )
        f.appendChild(o[i]);
    c.childNodes.length <= 1 && (!c.firstChild || c.firstChild.textContent.length === 0) && (c.innerHTML = "<br>");
    const g = c.parentNode;
    return u && (c = c.nextSibling), f ? (this.mergeSameTags(f, null, !1), this.mergeNestedTags(f, (function(k) {
      return this.isList(k);
    }).bind(this)), f.childNodes.length > 0 ? g.insertBefore(f, c) : f = c, this.isListCell(f) && f.children && this.isList(f.children[0]) && f.insertBefore(this.createElement("BR"), f.children[0]), l.childNodes.length === 0 && this.removeItem(l), f) : c;
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
  mergeSameTags: function(e, t, n) {
    const l = this, i = t ? t.length : 0;
    let s = null;
    return i && (s = this._w.Array.apply(null, new this._w.Array(i)).map(this._w.Number.prototype.valueOf, 0)), (function u(f, o, b) {
      const c = f.childNodes;
      for (let g = 0, k = c.length, S, x; g < k && (S = c[g], x = c[g + 1], !!S); g++)
        if (!(l.isBreak(S) || l.isMedia(S) || l.isInputElement(S))) {
          if (n && l._isIgnoreNodeChange(S) || !n && (l.isTable(S) || l.isListCell(S) || l.isFormatElement(S) && !l.isFreeFormatElement(S))) {
            (l.isTable(S) || l.isListCell(S)) && u(S, o + 1, g);
            continue;
          }
          if (k === 1 && f.nodeName === S.nodeName && f.parentNode) {
            if (i) {
              let L, a, r, d, h;
              for (let p = 0; p < i; p++)
                if (L = t[p], L && L[o] === g) {
                  for (a = S, r = f, d = o, h = !0; d >= 0; ) {
                    if (l.getArrayIndex(r.childNodes, a) !== L[d]) {
                      h = !1;
                      break;
                    }
                    a = S.parentNode, r = a.parentNode, d--;
                  }
                  h && (L.splice(o, 1), L[o] = g);
                }
            }
            l.copyTagAttributes(S, f), f.parentNode.insertBefore(S, f), l.removeItem(f);
          }
          if (!x) {
            S.nodeType === 1 && u(S, o + 1, g);
            break;
          }
          if (S.nodeName === x.nodeName && l.isSameAttributes(S, x) && S.href === x.href) {
            const L = S.childNodes;
            let a = 0;
            for (let p = 0, v = L.length; p < v; p++)
              L[p].textContent.length > 0 && a++;
            const r = S.lastChild, d = x.firstChild;
            let h = 0;
            if (r && d) {
              const p = r.nodeType === 3 && d.nodeType === 3;
              h = r.textContent.length;
              let v = r.previousSibling;
              for (; v && v.nodeType === 3; )
                h += v.textContent.length, v = v.previousSibling;
              if (a > 0 && r.nodeType === 3 && d.nodeType === 3 && (r.textContent.length > 0 || d.textContent.length > 0) && a--, i) {
                let m = null;
                for (let y = 0; y < i; y++)
                  if (m = t[y], m && m[o] > g) {
                    if (o > 0 && m[o - 1] !== b) continue;
                    m[o] -= 1, m[o + 1] >= 0 && m[o] === g && (m[o + 1] += a, p && r && r.nodeType === 3 && d && d.nodeType === 3 && (s[y] += h));
                  }
              }
            }
            if (S.nodeType === 3) {
              if (h = S.textContent.length, S.textContent += x.textContent, i) {
                let p = null;
                for (let v = 0; v < i; v++)
                  if (p = t[v], p && p[o] > g) {
                    if (o > 0 && p[o - 1] !== b) continue;
                    p[o] -= 1, p[o + 1] >= 0 && p[o] === g && (p[o + 1] += a, s[v] += h);
                  }
              }
            } else
              S.innerHTML += x.innerHTML;
            l.removeItem(x), g--;
          } else S.nodeType === 1 && u(S, o + 1, g);
        }
    })(e, 0, 0), s;
  },
  /**
   * @description Remove nested tags without other child nodes.
   * @param {Element} element Element object
   * @param {Function|String|null} validation Validation function / String("tag1|tag2..") / If null, all tags are applicable.
   */
  mergeNestedTags: function(e, t) {
    typeof t == "string" ? t = (function(n) {
      return this.test(n.tagName);
    }).bind(new this._w.RegExp("^(" + (t || ".+") + ")$", "i")) : typeof t != "function" && (t = function() {
      return !0;
    }), (function n(l) {
      let i = l.children;
      if (i.length === 1 && i[0].nodeName === l.nodeName && t(l)) {
        const s = i[0];
        for (i = s.children; i[0]; )
          l.appendChild(i[0]);
        l.removeChild(s);
      }
      for (let s = 0, u = l.children.length; s < u; s++)
        n(l.children[s]);
    })(e);
  },
  /**
   * @description Delete a empty child node of argument element.
   * @param {Element} element Element node
   * @param {Node|null} notRemoveNode Do not remove node
   * @param {boolean} forceDelete When all child nodes are deleted, the parent node is also deleted.
   */
  removeEmptyNode: function(e, t, n) {
    const l = this;
    t && (t = l.getParentElement(t, function(i) {
      return e === i.parentElement;
    })), (function i(s) {
      if (l._notTextNode(s) || s === t || l.isNonEditable(s)) return 0;
      if (s !== e && l.onlyZeroWidthSpace(s.textContent) && (!s.firstChild || !l.isBreak(s.firstChild)) && !s.querySelector(l._allowedEmptyNodeList)) {
        if (s.parentNode)
          return s.parentNode.removeChild(s), -1;
      } else {
        const u = s.children;
        for (let f = 0, o = u.length, b = 0; f < o; f++)
          !u[f + b] || l.isComponent(u[f + b]) || (b += i(u[f + b]));
      }
      return 0;
    })(e), e.childNodes.length === 0 && (n ? this.removeItem(e) : e.innerHTML = "<br>");
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
    return e.replace(/\n/g, "").replace(/>\s+</g, "> <");
  },
  /**
   * @description Sort a element array by depth of element.
   * @param {Array} array Array object
   * @param {Boolean} des true: descending order / false: ascending order
   */
  sortByDepth: function(e, t) {
    const n = t ? 1 : -1, l = n * -1;
    e.sort((function(i, s) {
      return !this.isListCell(i) || !this.isListCell(s) ? 0 : (i = this.getElementDepth(i), s = this.getElementDepth(s), i > s ? n : i < s ? l : 0);
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
  _consistencyCheckOfHTML: function(e, t, n, l, i) {
    const s = [], u = [], f = [], o = [], b = this.getListChildNodes(e, (function(g) {
      if (g.nodeType !== 1)
        return this.isList(g.parentElement) && s.push(g), !1;
      if (n.test(g.nodeName) || !t.test(g.nodeName) && g.childNodes.length === 0 && this.isNotCheckingNode(g))
        return s.push(g), !1;
      const k = !this.getParentElement(g, this.isNotCheckingNode);
      if (!this.isTable(g) && !this.isListCell(g) && !this.isAnchor(g) && (this.isFormatElement(g) || this.isRangeFormatElement(g) || this.isTextStyleElement(g)) && g.childNodes.length === 0 && k)
        return u.push(g), !1;
      if (this.isList(g.parentNode) && !this.isList(g) && !this.isListCell(g))
        return f.push(g), !1;
      if (this.isCell(g)) {
        const x = g.firstElementChild;
        if (!this.isFormatElement(x) && !this.isRangeFormatElement(x) && !this.isComponent(x))
          return o.push(g), !1;
      }
      if (k && g.className) {
        const x = new this._w.Array(g.classList).map(l).join(" ").trim();
        x ? g.className = x : g.removeAttribute("class");
      }
      return i && g.parentNode !== e && k && (this.isListCell(g) && !this.isList(g.parentNode) || (this.isFormatElement(g) || this.isComponent(g)) && !this.isRangeFormatElement(g.parentNode) && !this.getParentElement(g, this.isComponent));
    }).bind(this));
    for (let g = 0, k = s.length; g < k; g++)
      this.removeItem(s[g]);
    const c = [];
    for (let g = 0, k = b.length, S, x; g < k; g++)
      if (S = b[g], x = S.parentNode, !(!x || !x.parentNode))
        if (this.getParentElement(S, this.isListCell)) {
          const L = S.childNodes;
          for (let a = L.length - 1; k >= 0; a--)
            x.insertBefore(S, L[a]);
          c.push(S);
        } else
          x.parentNode.insertBefore(S, x), c.push(x);
    for (let g = 0, k = c.length, S; g < k; g++)
      S = c[g], this.onlyZeroWidthSpace(S.textContent.trim()) && this.removeItem(S);
    for (let g = 0, k = u.length; g < k; g++)
      this.removeItem(u[g]);
    for (let g = 0, k = f.length, S, x, L, a; g < k; g++)
      if (S = f[g], a = S.parentNode, !!a)
        if (x = this.createElement("LI"), this.isFormatElement(S)) {
          for (L = S.childNodes; L[0]; )
            x.appendChild(L[0]);
          a.insertBefore(x, S), this.removeItem(S);
        } else
          S = S.nextSibling, x.appendChild(f[g]), a.insertBefore(x, S);
    for (let g = 0, k = o.length, S, x; g < k; g++)
      S = o[g], x = this.createElement("DIV"), x.innerHTML = S.textContent.trim().length === 0 && S.children.length === 0 ? "<br>" : S.innerHTML, S.innerHTML = x.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let n = "";
    e.height && (n += "height:" + e.height + ";"), e.minHeight && (n += "min-height:" + e.minHeight + ";"), e.maxHeight && (n += "max-height:" + e.maxHeight + ";"), e.position && (n += "position:" + e.position + ";"), e.width && (n += "width:" + e.width + ";"), e.minWidth && (n += "min-width:" + e.minWidth + ";"), e.maxWidth && (n += "max-width:" + e.maxWidth + ";");
    let l = "", i = "", s = "";
    t = n + t;
    const u = t.split(";");
    for (let f = 0, o = u.length, b; f < o; f++)
      if (b = u[f].trim(), !!b) {
        if (/^(min-|max-)?width\s*:/.test(b) || /^(z-index|position)\s*:/.test(b)) {
          l += b + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(b)) {
          /^height/.test(b) && b.split(":")[1].trim() === "auto" && (e.height = "auto"), i += b + ";";
          continue;
        }
        s += b + ";";
      }
    return {
      top: l,
      frame: i,
      editor: s
    };
  },
  _setIframeDocument: function(e, t) {
    e.setAttribute("scrolling", "auto"), e.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' + this._setIframeCssTags(t), e.contentDocument.body.className = t._editableClass, e.contentDocument.body.setAttribute("contenteditable", !0), e.contentDocument.body.setAttribute("autocorrect", "off");
  },
  _setIframeCssTags: function(e) {
    const t = e.iframeCSSFileName, n = this._w.RegExp;
    let l = "";
    for (let i = 0, s = t.length, u; i < s; i++) {
      if (u = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[i]))
        u.push(t[i]);
      else {
        const f = new n("(^|.*[\\/])" + t[i] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let o = document.getElementsByTagName("link"), b = 0, c = o.length, g; b < c; b++)
          g = o[b].href.match(f), g && u.push(g[0]);
      }
      if (!u || u.length === 0) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
      for (let f = 0, o = u.length; f < o; f++)
        l += '<link href="' + u[f] + '" rel="stylesheet">';
    }
    return l + (e.height === "auto" ? `<style>
/** Iframe height auto */
body{height: min-content; overflow: hidden;}
</style>` : "");
  }
}, nl = {
  /**
   * @description document create
   * @param {Element} element Textarea
   * @param {Object} options Options
   * @returns {Object}
   */
  init: function(e, t) {
    typeof t != "object" && (t = {});
    const n = document;
    this._initOptions(e, t);
    const l = n.createElement("DIV");
    l.className = "sun-editor" + (t.rtl ? " se-rtl" : ""), e.id && (l.id = "suneditor_" + e.id);
    const i = n.createElement("DIV");
    i.className = "se-container";
    const s = this._createToolBar(n, t.buttonList, t.plugins, t), u = s.element.cloneNode(!1);
    u.className += " se-toolbar-shadow", s.element.style.visibility = "hidden", s.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const f = n.createElement("DIV");
    f.className = "se-arrow";
    const o = n.createElement("DIV");
    o.className = "se-toolbar-sticky-dummy";
    const b = n.createElement("DIV");
    b.className = "se-wrapper";
    const c = this._initElements(t, l, s.element, f), g = c.bottomBar, k = c.wysiwygFrame, S = c.placeholder;
    let x = c.codeView;
    const L = g.resizingBar, a = g.navigation, r = g.charWrapper, d = g.charCounter, h = n.createElement("DIV");
    h.className = "se-loading-box sun-editor-common", h.innerHTML = '<div class="se-loading-effect"></div>';
    const p = n.createElement("DIV");
    p.className = "se-line-breaker", p.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const v = n.createElement("DIV");
    v.className += "se-line-breaker-component";
    const m = v.cloneNode(!0);
    v.innerHTML = m.innerHTML = t.icons.line_break;
    const y = n.createElement("DIV");
    y.className = "se-resizing-back";
    const _ = n.createElement("INPUT");
    _.tabIndex = -1, _.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const C = t.toolbarContainer;
    C && (C.appendChild(s.element), C.appendChild(u));
    const w = t.resizingBarContainer;
    return L && w && w.appendChild(L), b.appendChild(x), S && b.appendChild(S), C || (i.appendChild(s.element), i.appendChild(u)), i.appendChild(o), i.appendChild(b), i.appendChild(y), i.appendChild(h), i.appendChild(p), i.appendChild(v), i.appendChild(m), i.appendChild(_), L && !w && i.appendChild(L), l.appendChild(i), x = this._checkCodeMirror(t, x), {
      constructed: {
        _top: l,
        _relative: i,
        _toolBar: s.element,
        _toolbarShadow: u,
        _menuTray: s._menuTray,
        _editorArea: b,
        _wysiwygArea: k,
        _codeArea: x,
        _placeholder: S,
        _resizingBar: L,
        _navigation: a,
        _charWrapper: r,
        _charCounter: d,
        _loading: h,
        _lineBreaker: p,
        _lineBreaker_t: v,
        _lineBreaker_b: m,
        _resizeBack: y,
        _stickyDummy: o,
        _arrow: f,
        _focusTemp: _
      },
      options: t,
      plugins: s.plugins,
      pluginCallButtons: s.pluginCallButtons,
      _responsiveButtons: s.responsiveButtons
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
      const n = [{
        mode: "htmlmixed",
        htmlMode: !0,
        lineNumbers: !0,
        lineWrapping: !0
      }, e.codeMirror.options || {}].reduce(function(i, s) {
        for (let u in s)
          ge.hasOwn(s, u) && (i[u] = s[u]);
        return i;
      }, {});
      e.height === "auto" && (n.viewportMargin = 1 / 0, n.height = "auto");
      const l = e.codeMirror.src.fromTextArea(t, n);
      l.display.wrapper.style.cssText = t.style.cssText, e.codeMirrorEditor = l, t = l.display.wrapper, t.className += " se-wrapper-code-mirror";
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
    }, e.options || {}].reduce(function(n, l) {
      for (let i in l)
        ge.hasOwn(l, i) && (n[i] = l[i]);
      return n;
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
  _setOptions: function(e, t, n) {
    this._initOptions(t.element.originElement, e);
    const l = t.element, i = l.relative, s = l.editorArea, u = e.toolbarContainer && e.toolbarContainer !== n.toolbarContainer, f = e.lang !== n.lang || e.buttonList !== n.buttonList || e.mode !== n.mode || u, o = this._createToolBar(document, f ? e.buttonList : n.buttonList, e.plugins, e);
    o.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const b = document.createElement("DIV");
    b.className = "se-arrow", f && (o.element.style.visibility = "hidden", u ? (e.toolbarContainer.appendChild(o.element), l.toolbar.parentElement.removeChild(l.toolbar)) : l.toolbar.parentElement.replaceChild(o.element, l.toolbar), l.toolbar = o.element, l._menuTray = o._menuTray, l._arrow = b);
    const c = this._initElements(e, l.topArea, f ? o.element : l.toolbar, b), g = c.bottomBar, k = c.wysiwygFrame, S = c.placeholder;
    let x = c.codeView;
    return l.resizingBar && ge.removeItem(l.resizingBar), g.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== n.resizingBarContainer ? e.resizingBarContainer.appendChild(g.resizingBar) : i.appendChild(g.resizingBar)), s.innerHTML = "", s.appendChild(x), S && s.appendChild(S), x = this._checkCodeMirror(e, x), l.resizingBar = g.resizingBar, l.navigation = g.navigation, l.charWrapper = g.charWrapper, l.charCounter = g.charCounter, l.wysiwygFrame = k, l.code = x, l.placeholder = S, e.rtl ? ge.addClass(l.topArea, "se-rtl") : ge.removeClass(l.topArea, "se-rtl"), {
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
  _initElements: function(e, t, n, l) {
    t.style.cssText = e._editorStyles.top, /inline/i.test(e.mode) ? (n.className += " se-toolbar-inline", n.style.width = e.toolbarWidth) : /balloon/i.test(e.mode) && (n.className += " se-toolbar-balloon", n.style.width = e.toolbarWidth, n.appendChild(l));
    const i = document.createElement(e.iframe ? "IFRAME" : "DIV");
    if (i.className = "se-wrapper-inner se-wrapper-wysiwyg", e.iframe)
      i.allowFullscreen = !0, i.frameBorder = 0, i.style.cssText = e._editorStyles.frame, i.className += e.className;
    else {
      i.setAttribute("contenteditable", !0), i.setAttribute("autocorrect", "off"), i.setAttribute("scrolling", "auto");
      for (let g in e.iframeAttributes)
        i.setAttribute(g, e.iframeAttributes[g]);
      i.className += " " + e._editableClass, i.style.cssText = e._editorStyles.frame + e._editorStyles.editor, i.className += e.className;
    }
    const s = document.createElement("TEXTAREA");
    s.className = "se-wrapper-inner se-wrapper-code" + e.className, s.style.cssText = e._editorStyles.frame, s.style.display = "none", e.height === "auto" && (s.style.overflow = "hidden");
    let u = null, f = null, o = null, b = null;
    if (e.resizingBar && (u = document.createElement("DIV"), u.className = "se-resizing-bar sun-editor-common", f = document.createElement("DIV"), f.className = "se-navigation sun-editor-common", u.appendChild(f), e.charCounter)) {
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
    let c = null;
    return e.placeholder && (c = document.createElement("SPAN"), c.className = "se-placeholder", c.innerText = e.placeholder), {
      bottomBar: {
        resizingBar: u,
        navigation: f,
        charWrapper: o,
        charCounter: b
      },
      wysiwygFrame: i,
      codeView: s,
      placeholder: c
    };
  },
  /**
   * @description Initialize options
   * @param {Element} element Options object
   * @param {Object} options Options object
   * @private
   */
  _initOptions: function(e, t) {
    const n = {};
    if (t.plugins) {
      const s = t.plugins, u = s.length ? s : Object.keys(s).map(function(f) {
        return s[f];
      });
      for (let f = 0, o = u.length, b; f < o; f++)
        b = u[f].default || u[f], n[b.name] = b;
    }
    t.plugins = n, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || Pi, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new ge._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const l = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(s, u) {
      for (let f in u)
        s[f] = u[f];
      return s;
    }, {});
    t._textTagsMap = {
      strong: l.bold.toLowerCase(),
      b: l.bold.toLowerCase(),
      u: l.underline.toLowerCase(),
      ins: l.underline.toLowerCase(),
      em: l.italic.toLowerCase(),
      i: l.italic.toLowerCase(),
      del: l.strike.toLowerCase(),
      strike: l.strike.toLowerCase(),
      s: l.strike.toLowerCase(),
      sub: l.sub.toLowerCase(),
      sup: l.sup.toLowerCase()
    }, t._defaultCommand = {
      bold: t.textTags.bold,
      underline: t.textTags.underline,
      italic: t.textTags.italic,
      strike: t.textTags.strike,
      subscript: t.textTags.sub,
      superscript: t.textTags.sup
    }, t.__allowedScriptTag = t.__allowedScriptTag === !0;
    const i = "br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary";
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : i) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? ge.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? ge.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? ge.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = ge.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? ge.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (ge.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (ge.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? ge.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (ge.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (ge.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? ge.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? ge.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? ge.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryData = t.imageGalleryData || null, t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !ge.getNumber(t.videoWidth, 0) ? "" : ge.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !ge.getNumber(t.videoHeight, 0) ? "" : ge.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = ge.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.vimeoQuery = (t.vimeoQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? ge.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? ge.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? ge.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? ge.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? fn : [fn, t.icons].reduce(function(s, u) {
      for (let f in u)
        ge.hasOwn(u, f) && (s[f] = u[f]);
      return s;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(s, u) {
      for (let f in u)
        ge.hasOwn(u, f) && (s[f] = u[f]);
      return s;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = ge._setDefaultOptionStyle(t, t.defaultStyle);
  },
  _setWhitelist: function(e, t) {
    if (typeof t != "string") return e;
    t = t.split("|"), e = e.split("|");
    for (let n = 0, l = t.length, i; n < l; n++)
      i = e.indexOf(t[n]), i > -1 && e.splice(i, 1);
    return e.join("|");
  },
  /**
   * @description Suneditor's Default button list
   * @param {Object} options options
   * @private
   */
  _defaultButtons: function(e) {
    const t = e.icons, n = e.lang, l = ge.isOSX_IOS ? "⌘" : "CTRL", i = ge.isOSX_IOS ? "⇧" : "+SHIFT", s = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], u = e.rtl ? ["[", "]"] : ["]", "["], f = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", n.toolbar.bold + '<span class="se-shortcut">' + (s.indexOf("bold") > -1 ? "" : l + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", n.toolbar.underline + '<span class="se-shortcut">' + (s.indexOf("underline") > -1 ? "" : l + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", n.toolbar.italic + '<span class="se-shortcut">' + (s.indexOf("italic") > -1 ? "" : l + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", n.toolbar.strike + '<span class="se-shortcut">' + (s.indexOf("strike") > -1 ? "" : l + i + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", n.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", n.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", n.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", n.toolbar.indent + '<span class="se-shortcut">' + (s.indexOf("indent") > -1 ? "" : l + '+<span class="se-shortcut-key">' + u[0] + "</span>") + "</span>", "indent", "", f[0]],
      outdent: ["", n.toolbar.outdent + '<span class="se-shortcut">' + (s.indexOf("indent") > -1 ? "" : l + '+<span class="se-shortcut-key">' + u[1] + "</span>") + "</span>", "outdent", "", f[1]],
      fullScreen: ["se-code-view-enabled se-resizing-enabled", n.toolbar.fullScreen, "fullScreen", "", t.expansion],
      showBlocks: ["", n.toolbar.showBlocks, "showBlocks", "", t.show_blocks],
      codeView: ["se-code-view-enabled se-resizing-enabled", n.toolbar.codeView, "codeView", "", t.code_view],
      undo: ["", n.toolbar.undo + '<span class="se-shortcut">' + (s.indexOf("undo") > -1 ? "" : l + '+<span class="se-shortcut-key">Z</span>') + "</span>", "undo", "", t.undo],
      redo: ["", n.toolbar.redo + '<span class="se-shortcut">' + (s.indexOf("undo") > -1 ? "" : l + '+<span class="se-shortcut-key">Y</span> / ' + l + i + '+<span class="se-shortcut-key">Z</span>') + "</span>", "redo", "", t.redo],
      preview: ["se-resizing-enabled", n.toolbar.preview, "preview", "", t.preview],
      print: ["se-resizing-enabled", n.toolbar.print, "print", "", t.print],
      dir: ["", n.toolbar[e.rtl ? "dir_ltr" : "dir_rtl"], "dir", "", t[e.rtl ? "dir_ltr" : "dir_rtl"]],
      dir_ltr: ["", n.toolbar.dir_ltr, "dir_ltr", "", t.dir_ltr],
      dir_rtl: ["", n.toolbar.dir_rtl, "dir_rtl", "", t.dir_rtl],
      save: ["se-resizing-enabled", n.toolbar.save + '<span class="se-shortcut">' + (s.indexOf("save") > -1 ? "" : l + '+<span class="se-shortcut-key">S</span>') + "</span>", "save", "", t.save],
      /** plugins - command */
      blockquote: ["", n.toolbar.tag_blockquote, "blockquote", "command", t.blockquote],
      /** plugins - submenu */
      font: ["se-btn-select se-btn-tool-font", n.toolbar.font, "font", "submenu", '<span class="txt">' + n.toolbar.font + "</span>" + t.arrow_down],
      formatBlock: ["se-btn-select se-btn-tool-format", n.toolbar.formats, "formatBlock", "submenu", '<span class="txt">' + n.toolbar.formats + "</span>" + t.arrow_down],
      fontSize: ["se-btn-select se-btn-tool-size", n.toolbar.fontSize, "fontSize", "submenu", '<span class="txt">' + n.toolbar.fontSize + "</span>" + t.arrow_down],
      fontColor: ["", n.toolbar.fontColor, "fontColor", "submenu", t.font_color],
      hiliteColor: ["", n.toolbar.hiliteColor, "hiliteColor", "submenu", t.highlight_color],
      align: ["se-btn-align", n.toolbar.align, "align", "submenu", e.rtl ? t.align_right : t.align_left],
      list: ["", n.toolbar.list, "list", "submenu", t.list_number],
      horizontalRule: ["btn_line", n.toolbar.horizontalRule, "horizontalRule", "submenu", t.horizontal_rule],
      table: ["", n.toolbar.table, "table", "submenu", t.table],
      lineHeight: ["", n.toolbar.lineHeight, "lineHeight", "submenu", t.line_height],
      template: ["", n.toolbar.template, "template", "submenu", t.template],
      paragraphStyle: ["", n.toolbar.paragraphStyle, "paragraphStyle", "submenu", t.paragraph_style],
      textStyle: ["", n.toolbar.textStyle, "textStyle", "submenu", t.text_style],
      /** plugins - dialog */
      link: ["", n.toolbar.link, "link", "dialog", t.link],
      image: ["", n.toolbar.image, "image", "dialog", t.image],
      video: ["", n.toolbar.video, "video", "dialog", t.video],
      audio: ["", n.toolbar.audio, "audio", "dialog", t.audio],
      math: ["", n.toolbar.math, "math", "dialog", t.math],
      /** plugins - fileBrowser */
      imageGallery: ["", n.toolbar.imageGallery, "imageGallery", "fileBrowser", t.image_gallery]
    };
  },
  /**
   * @description Create a group div containing each module
   * @returns {Object}
   * @private
   */
  _createModuleGroup: function() {
    const e = ge.createElement("DIV");
    e.className = "se-btn-module se-btn-module-border";
    const t = ge.createElement("UL");
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
  _createButton: function(e, t, n, l, i, s, u) {
    const f = ge.createElement("LI"), o = ge.createElement("BUTTON"), b = t || n;
    return o.setAttribute("type", "button"), o.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), o.setAttribute("data-command", n), o.setAttribute("data-display", l), o.setAttribute("aria-label", b.replace(/<span .+<\/span>/, "")), o.setAttribute("tabindex", "-1"), i || (i = '<span class="se-icon-text">!</span>'), /^default\./i.test(i) && (i = u[i.replace(/^default\./i, "")]), /^text\./i.test(i) && (i = i.replace(/^text\./i, ""), o.className += " se-btn-more-text"), i += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + b + "</span></span>", s && o.setAttribute("disabled", !0), o.innerHTML = i, f.appendChild(o), {
      li: f,
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
  _createToolBar: function(e, t, n, l) {
    const i = e.createElement("DIV");
    i.className = "se-toolbar-separator-vertical";
    const s = e.createElement("DIV");
    s.className = "se-toolbar sun-editor-common";
    const u = e.createElement("DIV");
    u.className = "se-btn-tray", s.appendChild(u), t = JSON.parse(JSON.stringify(t));
    const f = l.icons, o = this._defaultButtons(l), b = {}, c = [];
    let g = null, k = null, S = null, x = null, L = "", a = !1;
    const r = ge.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let p = 0, v, m, y, _, C; p < t.length; p++)
        if (v = !1, C = "", _ = t[p], S = this._createModuleGroup(), typeof _ == "object") {
          for (let w = 0, z; w < _.length; w++) {
            if (k = _[w], z = !1, /^\%\d+/.test(k) && w === 0) {
              _[0] = k.replace(/[^\d]/g, ""), c.push(_), t.splice(p--, 1);
              continue e;
            }
            if (typeof k == "object")
              typeof k.add == "function" ? (L = k.name, g = o[L], n[L] = k) : (L = k.name, g = [k.buttonClass, k.title, k.name, k.dataDisplay, k.innerHTML, k._disabled]);
            else {
              if (/^\-/.test(k)) {
                C = k.substr(1), S.div.className += " module-float-" + C;
                continue;
              }
              if (/^\#/.test(k)) {
                k.substr(1) === "fix" && (S.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(k)) {
                z = !0;
                const T = k.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + T[1].trim();
                const B = T[2].trim(), N = T[3].trim();
                g = ["se-btn-more", B, y, "MORE", N];
              } else
                g = o[k];
              if (L = k, !g) {
                const T = n[L];
                if (!T) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + L + "]");
                g = [T.buttonClass, T.title, T.name, T.display, T.innerHTML, T._disabled];
              }
            }
            x = this._createButton(g[0], g[1], g[2], g[3], g[4], g[5], f), (v ? m : S.ul).appendChild(x.li), n[L] && (b[L] = x.button), z && (v = !0, m = ge.createElement("DIV"), m.className = "se-more-layer " + y, m.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (C ? ' style="float: ' + C + ';"' : "") + "></ul></div>", r.appendChild(m), m = m.firstElementChild.firstElementChild);
          }
          if (a) {
            const w = i.cloneNode(!1);
            u.appendChild(w);
          }
          u.appendChild(S.div), a = !0;
        } else if (/^\/$/.test(_)) {
          const w = e.createElement("DIV");
          w.className = "se-btn-module-enter", u.appendChild(w), a = !1;
        }
    switch (u.children.length) {
      case 0:
        u.style.display = "none";
        break;
      case 1:
        ge.removeClass(u.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (l.rtl) {
          const p = i.cloneNode(!1);
          p.style.float = u.lastElementChild.style.float, u.appendChild(p);
        }
    }
    c.length > 0 && c.unshift(t), r.children.length > 0 && u.appendChild(r);
    const d = e.createElement("DIV");
    d.className = "se-menu-tray", s.appendChild(d);
    const h = e.createElement("DIV");
    return h.className = "se-toolbar-cover", s.appendChild(h), l.hideToolbar && (s.style.display = "none"), {
      element: s,
      plugins: n,
      pluginCallButtons: b,
      responsiveButtons: c,
      _menuTray: d,
      _buttonTray: u
    };
  }
}, ol = function(e, t, n) {
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
    options: n,
    option: n
  };
};
function Sr(e, t) {
  const n = e._w, l = e.util, i = e.options.historyStackDelayTime;
  let s = e.context.element, u = e.context.tool.undo, f = e.context.tool.redo, o = null, b = 0, c = [];
  function g() {
    const S = c[b];
    s.wysiwyg.innerHTML = S.contents, e.setRange(l.getNodeFromPath(S.s.path, s.wysiwyg), S.s.offset, l.getNodeFromPath(S.e.path, s.wysiwyg), S.e.offset), e.focus(), c.length <= 1 ? (u && u.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0)) : b === 0 ? (u && u.setAttribute("disabled", !0), f && f.removeAttribute("disabled")) : b === c.length - 1 ? (u && u.removeAttribute("disabled"), f && f.setAttribute("disabled", !0)) : (u && u.removeAttribute("disabled"), f && f.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function k() {
    e._checkComponents();
    const S = s.wysiwyg.innerHTML;
    if (!S || c[b] && S === c[b].contents) return;
    b++;
    const x = e._variable._range;
    c.length > b && (c = c.slice(0, b), f && f.setAttribute("disabled", !0)), x ? c[b] = {
      contents: S,
      s: {
        path: l.getNodePath(x.startContainer, null, null),
        offset: x.startOffset
      },
      e: {
        path: l.getNodePath(x.endContainer, null, null),
        offset: x.endOffset
      }
    } : c[b] = {
      contents: S,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, b === 1 && u && u.removeAttribute("disabled"), e._setCharCount(), t();
  }
  return {
    /**
     * @description History stack
     */
    stack: c,
    /**
     * @description Saving the current status to the history object stack
     * If "delay" is true, it will be saved after (options.historyStackDelayTime || 400) miliseconds
     * If the function is called again with the "delay" argument true before it is saved, the delay time is renewal
     * You can specify the delay time by sending a number.
     * @param {Boolean|Number} delay If true, Add stack without delay time.
     */
    push: function(S) {
      n.setTimeout(e._resourcesStateChange.bind(e));
      const x = typeof S == "number" ? S > 0 ? S : 0 : S ? i : 0;
      if ((!x || o) && (n.clearTimeout(o), !x)) {
        k();
        return;
      }
      o = n.setTimeout(function() {
        n.clearTimeout(o), o = null, k();
      }, x);
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
      c.length - 1 > b && (b++, g());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(S) {
      b = S < 0 ? c.length - 1 : S, g();
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
      u && u.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), c.splice(0), b = 0, c[b] = {
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
      s = e.context.element, u = e.context.tool.undo, f = e.context.tool.redo, b === 0 ? (u && u.setAttribute("disabled", !0), f && b === c.length - 1 && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : b === c.length - 1 && f && f.setAttribute("disabled", !0);
    },
    /**
     * @description Remove all stacks and remove the timeout function.
     * @private
     */
    _destroy: function() {
      o && n.clearTimeout(o), c = null;
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
    let n = e.util.createElement("DIV"), l = e.util.createElement("SPAN"), i = e.util.createElement("BUTTON");
    n.className = "se-notice", i.className = "close", i.setAttribute("aria-label", "Close"), i.setAttribute("title", e.lang.dialogBox.close), i.innerHTML = e.icons.cancel, n.appendChild(l), n.appendChild(i), t.notice.modal = n, t.notice.message = l, i.addEventListener("click", this.onClick_cancel.bind(e)), t.element.editorArea.appendChild(n), n = null;
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
function Tr(e, t, n, l, i, s) {
  const u = e.element.originElement.ownerDocument || document, f = u.defaultView || window, o = ge, b = i.icons, c = {
    _d: u,
    _w: f,
    _parser: new f.DOMParser(),
    _prevRtl: i.rtl,
    _editorHeight: 0,
    _editorHeightPadding: 0,
    _listCamel: i.__listCommonStyle,
    _listKebab: o.camelToKebabCase(i.__listCommonStyle),
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
    plugins: n || {},
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
    lang: l,
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
      const a = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
      for (let r = 0, d, h; r < a.length; r++)
        d = a[r], h = d.getAttribute("data-command"), this.allCommandButtons[h] = d;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const a = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let r = 0, d, h, p; r < a.length; r++)
          d = a[r], h = d.getAttribute("data-command"), p = this.allCommandButtons[h], p && (d.parentElement.replaceChild(p, d), this.context.tool[h] && (this.context.tool[h] = p));
      }
    },
    /**
     * @description If the plugin is not added, add the plugin and call the 'add' function.
     * If the plugin is added call callBack function.
     * @param {String} pluginName The name of the plugin to call
     * @param {function} callBackFunction Function to be executed immediately after module call
     * @param {Element|null} _target Plugin target button (This is not necessary if you have a button list when creating the editor)
     */
    callPlugin: function(a, r, d) {
      if (d = d || t[a], this.plugins[a])
        this.initPlugins[a] ? typeof this._targetPlugins[a] == "object" && d && this.initMenuTarget(a, d, this._targetPlugins[a]) : (this.plugins[a].add(this, d), this.initPlugins[a] = !0);
      else throw Error('[SUNEDITOR.core.callPlugin.fail] The called plugin does not exist or is in an invalid format. (pluginName:"' + a + '")');
      this.plugins[a].active && !this.commandMap[a] && d && (this.commandMap[a] = d, this.activePlugins.push(a)), typeof r == "function" && r();
    },
    /**
     * @description If the module is not added, add the module and call the 'add' function
     * @param {Array} moduleArray module object's Array [dialog, resizing]
     */
    addModule: function(a) {
      for (let r = 0, d = a.length, h; r < d; r++)
        h = a[r].name, this.plugins[h] || (this.plugins[h] = a[r]), this.initPlugins[h] || (this.initPlugins[h] = !0, typeof this.plugins[h].add == "function" && this.plugins[h].add(this));
    },
    /**
     * @description Gets the current editor-relative scroll offset.
     * @returns {Object} {top, left}
     */
    getGlobalScrollOffset: function() {
      let a = 0, r = 0, d = e.element.topArea;
      for (; d; )
        a += d.scrollTop, r += d.scrollLeft, d = d.parentElement;
      for (d = this._shadowRoot ? this._shadowRoot.host : null; d; )
        a += d.scrollTop, r += d.scrollLeft, d = d.parentElement;
      return {
        top: a,
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
    initMenuTarget: function(a, r, d) {
      r ? (e.element._menuTray.appendChild(d), this._targetPlugins[a] = !0, this._menuTray[r.getAttribute("data-command")] = d) : this._targetPlugins[a] = d;
    },
    /**
     * @description Enable submenu
     * @param {Element} element Submenu's button element to call
     */
    submenuOn: function(a) {
      this._bindedSubmenuOff && this._bindedSubmenuOff(), this._bindControllersOff && this.controllersOff();
      const r = this._submenuName = a.getAttribute("data-command"), d = this.submenu = this._menuTray[r];
      this.submenuActiveButton = a, this._setMenuPosition(a, d), this._bindedSubmenuOff = this.submenuOff.bind(this), this.addDocEvent("mousedown", this._bindedSubmenuOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
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
        const a = e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command"));
        a.style.display = "none", o.removeClass(this._moreLayerActiveButton, "on"), this._moreLayerActiveButton = null;
      }
    },
    /**
     * @description Enable container
     * @param {Element} element Container's button element to call
     */
    containerOn: function(a) {
      this._bindedContainerOff && this._bindedContainerOff();
      const r = this._containerName = a.getAttribute("data-command"), d = this.container = this._menuTray[r];
      this.containerActiveButton = a, this._setMenuPosition(a, d), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
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
    _setMenuPosition: function(a, r) {
      r.style.visibility = "hidden", r.style.display = "block", r.style.height = "", o.addClass(a, "on");
      const d = this.context.element.toolbar, h = d.offsetWidth, p = g._getEditorOffsets(e.element.toolbar), v = r.offsetWidth, m = a.parentElement.offsetLeft + 3;
      if (i.rtl) {
        const N = a.offsetWidth, $ = v > N ? v - N : 0, O = $ > 0 ? 0 : N - v;
        r.style.left = m - $ + O + "px", p.left > g._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const N = h <= v ? 0 : h - (m + v);
        N < 0 ? r.style.left = m + N + "px" : r.style.left = m + "px";
      }
      let y = 0, _ = a;
      for (; _ && _ !== d; )
        y += _.offsetTop, _ = _.offsetParent;
      const C = y;
      this._isBalloon ? y += d.offsetTop + a.offsetHeight : y -= a.offsetHeight;
      const w = p.top, z = r.offsetHeight, T = this.getGlobalScrollOffset().top, B = f.innerHeight - (w - T + C + a.parentElement.offsetHeight);
      if (B < z) {
        let N = -1 * (z - C + 3);
        const $ = w - T + N, O = z + ($ < 0 ? $ : 0);
        O > B ? (r.style.height = O + "px", N = -1 * (O - C + 3)) : (r.style.height = B + "px", N = C + a.parentElement.offsetHeight), r.style.top = N + "px";
      } else
        r.style.top = C + a.parentElement.offsetHeight + "px";
      r.style.visibility = "";
    },
    /**
     * @description Show controller at editor area (controller elements, function, "controller target element(@Required)", "controller name(@Required)", etc..)
     * @param {*} arguments controller elements, functions..
     */
    controllersOn: function() {
      this._bindControllersOff && this._bindControllersOff(), this.controllerArray = [];
      for (let a = 0, r; a < arguments.length; a++)
        if (r = arguments[a], !!r) {
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
          r.style && (r.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(r) === -1 && (r.addEventListener("mousedown", function(d) {
            d.preventDefault(), d.stopPropagation();
          }), this._shadowRootControllerEventTarget.push(r))), this.controllerArray.push(r);
        }
      this._bindControllersOff = this.controllersOff.bind(this), this.addDocEvent("mousedown", this._bindControllersOff, !1), this.addDocEvent("keydown", this._bindControllersOff, !1), this._antiBlur = !0, typeof k.showController == "function" && k.showController(this.currentControllerName, this.controllerArray, this);
    },
    /**
     * @description Hide controller at editor area (link button, image resize button..)
     * @param {KeyboardEvent|MouseEvent|null} e Event object when called from mousedown and keydown events registered in "core.controllersOn"
     */
    controllersOff: function(a) {
      this._lineBreaker.style.display = "none";
      const r = this.controllerArray.length;
      if (a && a.target && r > 0) {
        for (let d = 0; d < r; d++)
          if (typeof this.controllerArray[d].contains == "function" && this.controllerArray[d].contains(a.target)) return;
      }
      if (!(this._fileManager.pluginRegExp.test(this.currentControllerName) && a && a.type === "keydown" && a.keyCode !== 27) && (e.element.lineBreaker_t.style.display = e.element.lineBreaker_b.style.display = "none", this._variable._lineBreakComp = null, this.currentControllerName = "", this.currentControllerTarget = null, this.currentFileComponentInfo = null, this.effectNode = null, !!this._bindControllersOff)) {
        if (this.removeDocEvent("mousedown", this._bindControllersOff), this.removeDocEvent("keydown", this._bindControllersOff), this._bindControllersOff = null, r > 0) {
          for (let d = 0; d < r; d++)
            typeof this.controllerArray[d] == "function" ? this.controllerArray[d]() : this.controllerArray[d].style.display = "none";
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
    setControllerPosition: function(a, r, d, h) {
      i.rtl && (h.left *= -1);
      const p = o.getOffset(r, e.element.wysiwygFrame);
      a.style.visibility = "hidden", a.style.display = "block";
      const v = d === "top" ? -(a.offsetHeight + 2) : r.offsetHeight + 12;
      a.style.top = p.top + v + h.top + "px";
      const m = p.left - e.element.wysiwygFrame.scrollLeft + h.left, y = a.offsetWidth, _ = r.offsetWidth, C = o.hasClass(a.firstElementChild, "se-arrow") ? a.firstElementChild : null;
      if (i.rtl) {
        const w = y > _ ? y - _ : 0, z = w > 0 ? 0 : _ - y;
        a.style.left = m - w + z + "px", w > 0 && C && (C.style.left = (y - 14 < 10 + w ? y - 14 : 10 + w) + "px");
        const T = e.element.wysiwygFrame.offsetLeft - a.offsetLeft;
        T > 0 && (a.style.left = "0px", C && (C.style.left = T + "px"));
      } else {
        a.style.left = m + "px";
        const w = e.element.wysiwygFrame.offsetWidth - (a.offsetLeft + y);
        w < 0 ? (a.style.left = a.offsetLeft + w + "px", C && (C.style.left = 20 - w + "px")) : C && (C.style.left = "20px");
      }
      a.style.visibility = "";
    },
    /**
     * @description javascript execCommand
     * @param {String} command javascript execCommand function property
     * @param {Boolean|undefined} showDefaultUI javascript execCommand function property
     * @param {String|undefined} value javascript execCommand function property
     */
    execCommand: function(a, r, d) {
      this._wd.execCommand(a, r, a === "formatBlock" ? "<" + d + ">" : d), this.history.push(!0);
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
      const a = o.getParentElement(this.getSelectionNode(), "figcaption");
      a ? a.focus() : e.element.wysiwyg.focus();
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
            const a = this.getRange();
            if (a.startContainer === a.endContainer && o.isWysiwygDiv(a.startContainer)) {
              const r = a.commonAncestorContainer.children[a.startOffset];
              if (!o.isFormatElement(r) && !o.isComponent(r)) {
                const d = o.createElement(i.defaultTag), h = o.createElement("BR");
                d.appendChild(h), e.element.wysiwyg.insertBefore(d, r), this.setRange(h, 0, h, 0);
                return;
              }
            }
            this.setRange(a.startContainer, a.startOffset, a.endContainer, a.endOffset);
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
    focusEdge: function(a) {
      a || (a = e.element.wysiwyg.lastElementChild);
      const r = this.getFileComponent(a);
      r ? this.selectComponent(r.target, r.pluginName) : a ? (a = o.getChildElement(a, function(d) {
        return d.childNodes.length === 0 || d.nodeType === 3;
      }, !0), a ? this.setRange(a, a.textContent.length, a, a.textContent.length) : this.nativeFocus()) : this.focus();
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
    setRange: function(a, r, d, h) {
      if (!a || !d) return;
      (o.isBreak(a) || a.nodeType === 3) && r > a.textContent.length && (r = a.textContent.length), (o.isBreak(d) || d.nodeType === 3) && h > d.textContent.length && (h = d.textContent.length), o.isFormatElement(a) && (a = a.childNodes[r > 0 ? a.childNodes.length - 1 : 0] || a, r = r > 0 ? a.nodeType === 1 && !o.isBreak(a) ? 1 : a.textContent ? a.textContent.length : 0 : 0), o.isFormatElement(d) && (d = d.childNodes[h > 0 ? d.childNodes.length - 1 : 0] || d, h = h > 0 ? d.nodeType === 1 && !o.isBreak(d) ? 1 : d.textContent ? d.textContent.length : 0 : 0);
      const p = this._wd.createRange();
      try {
        r > a.textContent.length && (r = a.textContent.length), h > d.textContent.length && (h = d.textContent.length), p.setStart(a, r), p.setEnd(d, h);
      } catch (m) {
        console.warn("[SUNEDITOR.core.focus.error] " + m), this.nativeFocus();
        return;
      }
      const v = this.getSelection();
      return v.removeAllRanges && v.removeAllRanges(), v.addRange(p), this._rangeInfo(p, this.getSelection()), i.iframe && this.__focus(), p;
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
      const a = this._variable._range || this._createDefaultRange(), r = this.getSelection();
      if (a.collapsed === r.isCollapsed || !e.element.wysiwyg.contains(r.focusNode)) return a;
      if (r.rangeCount > 0)
        return this._variable._range = r.getRangeAt(0), this._variable._range;
      {
        const d = r.anchorNode, h = r.focusNode, p = r.anchorOffset, v = r.focusOffset, m = o.compareElements(d, h), y = m.ancestor && (m.result === 0 ? p <= v : m.result > 1);
        return this.setRange(
          y ? d : h,
          y ? p : v,
          y ? h : d,
          y ? v : p
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
    getRange_addLine: function(a, r) {
      if (this._selectionVoid(a)) {
        const d = e.element.wysiwyg, h = o.createElement(i.defaultTag);
        h.innerHTML = "<br>", d.insertBefore(h, r && r !== d ? r.nextElementSibling : d.firstElementChild), this.setRange(h.firstElementChild, 0, h.firstElementChild, 1), a = this._variable._range;
      }
      return a;
    },
    /**
     * @description Get window selection obejct
     * @returns {Object}
     */
    getSelection: function() {
      const a = this._shadowRoot && this._shadowRoot.getSelection ? this._shadowRoot.getSelection() : this._ww.getSelection();
      return !this._variable._range && !e.element.wysiwyg.contains(a.focusNode) && (a.removeAllRanges(), a.addRange(this._createDefaultRange())), a;
    },
    /**
     * @description Get current select node
     * @returns {Node}
     */
    getSelectionNode: function() {
      if (e.element.wysiwyg.contains(this._variable._selectionNode) || this._editorRange(), !this._variable._selectionNode) {
        const a = o.getChildElement(e.element.wysiwyg.firstChild, function(r) {
          return r.childNodes.length === 0 || r.nodeType === 3;
        }, !1);
        if (!a)
          this._editorRange();
        else
          return this._variable._selectionNode = a, a;
      }
      return this._variable._selectionNode;
    },
    /**
     * @description Saving the range object and the currently selected node of editor
     * @private
     */
    _editorRange: function() {
      const a = this._wd.activeElement;
      if (o.isInputElement(a))
        return this._variable._selectionNode = a, a;
      const r = this.getSelection();
      if (!r) return null;
      let d = null;
      r.rangeCount > 0 ? d = r.getRangeAt(0) : d = this._createDefaultRange(), this._rangeInfo(d, r);
    },
    /**
     * @description Set "range" and "selection" info.
     * @param {Object} range range object.
     * @param {Object} selection selection object.
     */
    _rangeInfo: function(a, r) {
      let d = null;
      this._variable._range = a, a.collapsed ? o.isWysiwygDiv(a.commonAncestorContainer) ? d = a.commonAncestorContainer.children[a.startOffset] || a.commonAncestorContainer : d = a.commonAncestorContainer : d = r.extentNode || r.anchorNode, this._variable._selectionNode = d;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const a = e.element.wysiwyg, r = this._wd.createRange();
      let d = a.firstElementChild, h = null;
      return d ? (h = d.firstChild, h || (h = o.createElement("BR"), d.appendChild(h))) : (d = o.createElement(i.defaultTag), h = o.createElement("BR"), d.appendChild(h), a.appendChild(d)), r.setStart(h, 0), r.setEnd(h, 0), r;
    },
    /**
     * @description Returns true if there is no valid "selection".
     * @param {Object} range core.getRange()
     * @returns {Object} range
     * @private
     */
    _selectionVoid: function(a) {
      const r = a.commonAncestorContainer;
      return o.isWysiwygDiv(a.startContainer) && o.isWysiwygDiv(a.endContainer) || /FIGURE/i.test(r.nodeName) || this._fileManager.regExp.test(r.nodeName) || o.isMediaComponent(r);
    },
    /**
     * @description Reset range object to text node selected status.
     * @returns {Boolean} Returns false if there is no valid selection.
     * @private
     */
    _resetRangeToTextNode: function() {
      const a = this.getRange();
      if (this._selectionVoid(a)) return !1;
      const r = a.collapsed;
      let d = a.startContainer, h = a.startOffset, p = a.endContainer, v = a.endOffset, m, y, _;
      if (o.isFormatElement(d))
        for (d.childNodes[h] ? (d = d.childNodes[h] || d, h = 0) : (d = d.lastChild || d, h = d.textContent.length); d && d.nodeType === 1 && d.firstChild; )
          d = d.firstChild || d, h = 0;
      if (o.isFormatElement(p)) {
        for (p = p.childNodes[v] || p.lastChild || p; p && p.nodeType === 1 && p.lastChild; )
          p = p.lastChild;
        v = r ? 0 : p.textContent.length;
      }
      if (m = o.isWysiwygDiv(d) ? e.element.wysiwyg.firstChild : d, y = h, o.isBreak(m) || m.nodeType === 1 && m.childNodes.length > 0) {
        const C = o.isBreak(m);
        if (!C) {
          for (; m && !o.isBreak(m) && m.nodeType === 1; )
            m = m.childNodes[y] || m.nextElementSibling || m.nextSibling, y = 0;
          let w = o.getFormatElement(m, null);
          w === o.getRangeFormatElement(w, null) && (w = o.createElement(o.getParentElement(m, o.isCell) ? "DIV" : i.defaultTag), m.parentNode.insertBefore(w, m), w.appendChild(m));
        }
        if (o.isBreak(m)) {
          const w = o.createTextNode(o.zeroWidthSpace);
          m.parentNode.insertBefore(w, m), m = w, C && d === p && (p = m, v = 1);
        }
      }
      if (d = m, h = y, m = o.isWysiwygDiv(p) ? e.element.wysiwyg.lastChild : p, y = v, o.isBreak(m) || m.nodeType === 1 && m.childNodes.length > 0) {
        const C = o.isBreak(m);
        if (!C) {
          for (; m && !o.isBreak(m) && m.nodeType === 1 && (_ = m.childNodes, _.length !== 0); )
            m = _[y > 0 ? y - 1 : y] || !/FIGURE/i.test(_[0].nodeName) ? _[0] : m.previousElementSibling || m.previousSibling || d, y = y > 0 ? m.textContent.length : y;
          let w = o.getFormatElement(m, null);
          w === o.getRangeFormatElement(w, null) && (w = o.createElement(o.isCell(w) ? "DIV" : i.defaultTag), m.parentNode.insertBefore(w, m), w.appendChild(m));
        }
        if (o.isBreak(m)) {
          const w = o.createTextNode(o.zeroWidthSpace);
          m.parentNode.insertBefore(w, m), m = w, y = 1, C && !m.previousSibling && o.removeItem(p);
        }
      }
      return p = m, v = y, this.setRange(d, h, p, v), !0;
    },
    /**
     * @description Returns a "formatElement"(util.isFormatElement) array from the currently selected range.
     * @param {Function|null} validation The validation function. (Replaces the default validation function-util.isFormatElement(current))
     * @returns {Array}
     */
    getSelectedElements: function(a) {
      if (!this._resetRangeToTextNode()) return [];
      let r = this.getRange();
      if (o.isWysiwygDiv(r.startContainer)) {
        const N = e.element.wysiwyg.children;
        if (N.length === 0) return [];
        this.setRange(N[0], 0, N[N.length - 1], N[N.length - 1].textContent.trim().length), r = this.getRange();
      }
      const d = r.startContainer, h = r.endContainer, p = r.commonAncestorContainer, v = o.getListChildren(p, function(N) {
        return a ? a(N) : o.isFormatElement(N);
      });
      if (!o.isWysiwygDiv(p) && !o.isRangeFormatElement(p) && v.unshift(o.getFormatElement(p, null)), d === h || v.length === 1) return v;
      let m = o.getFormatElement(d, null), y = o.getFormatElement(h, null), _ = null, C = null;
      const w = function(N) {
        return o.isTable(N) ? /^TABLE$/i.test(N.nodeName) : !0;
      };
      let z = o.getRangeFormatElement(m, w), T = o.getRangeFormatElement(y, w);
      o.isTable(z) && o.isListCell(z.parentNode) && (z = z.parentNode), o.isTable(T) && o.isListCell(T.parentNode) && (T = T.parentNode);
      const B = z === T;
      for (let N = 0, $ = v.length, O; N < $; N++) {
        if (O = v[N], m === O || !B && O === z) {
          _ = N;
          continue;
        }
        if (y === O || !B && O === T) {
          C = N;
          break;
        }
      }
      return _ === null && (_ = 0), C === null && (C = v.length - 1), v.slice(_, C + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(a) {
      const r = this.getRange().commonAncestorContainer, d = o.getParentElement(r, o.isComponent), h = o.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(p) {
        const v = this.getParentElement(p, this.isComponent);
        return this.isFormatElement(p) && (!v || v === d) || this.isComponent(p) && !this.getFormatElement(p);
      }).bind(o));
      if (a) {
        for (let p = 0, v = h.length; p < v; p++)
          for (let m = p - 1; m >= 0; m--)
            if (h[m].contains(h[p])) {
              h.splice(p, 1), p--, v--;
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
    isEdgePoint: function(a, r, d) {
      return a.nodeType === 1 && !a.textContent.length ? !0 : d !== "end" && r === 0 || (!d || d !== "start") && !a.nodeValue && r === 1 || (!d || d === "end") && !!a.nodeValue && r === a.nodeValue.length;
    },
    /**
     * @description Check if the container and offset values are the edges of the format tag
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String} dir Select check point - "start": Front edge, "end": End edge, undefined: Both edge.
     * @returns {Array|null}
     * @private
     */
    _isEdgeFormat: function(a, r, d) {
      if (!this.isEdgePoint(a, r, d)) return !1;
      const h = [];
      for (d = d === "start" ? "previousSibling" : "nextSibling"; a && !o.isFormatElement(a) && !o.isWysiwygDiv(a); )
        if (!a[d] || o.isBreak(a[d]) && !a[d][d])
          a.nodeType === 1 && h.push(a.cloneNode(!1)), a = a.parentNode;
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
    appendFormatTag: function(a, r) {
      if (!a || !a.parentNode) return null;
      const d = o.getFormatElement(this.getSelectionNode(), null);
      let h = null;
      if (!o.isFormatElement(a) && o.isFreeFormatElement(d || a.parentNode))
        h = o.createElement("BR");
      else {
        const p = r ? typeof r == "string" ? r : r.nodeName : o.isFormatElement(d) && !o.isRangeFormatElement(d) && !o.isFreeFormatElement(d) ? d.nodeName : i.defaultTag;
        h = o.createElement(p), h.innerHTML = "<br>", (r && typeof r != "string" || !r && o.isFormatElement(d)) && o.copyTagAttributes(h, r || d, ["id"]);
      }
      return o.isCell(a) ? a.insertBefore(h, a.nextElementSibling) : a.parentNode.insertBefore(h, a.nextElementSibling), h;
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
    insertComponent: function(a, r, d, h) {
      if (this.isReadOnly || d && !this.checkCharCount(a, null))
        return null;
      const p = this.removeNode();
      this.getRange_addLine(this.getRange(), p.container);
      let v = null, m = this.getSelectionNode(), y = o.getFormatElement(m, null);
      if (o.isListCell(y))
        this.insertNode(a, m === y ? null : (m || p.container).nextSibling, !1), a.nextSibling || a.parentNode.appendChild(o.createElement("BR"));
      else {
        if (this.getRange().collapsed && (p.container.nodeType === 3 || o.isBreak(p.container))) {
          const _ = o.getParentElement(p.container, (function(C) {
            return this.isRangeFormatElement(C);
          }).bind(o));
          v = o.splitElement(p.container, p.offset, _ ? o.getElementDepth(_) + 1 : 0), v && (y = v.previousSibling);
        }
        this.insertNode(a, o.isRangeFormatElement(y) ? null : y, !1), y && o.onlyZeroWidthSpace(y) && o.removeItem(y);
      }
      if (!h) {
        this.setRange(a, 0, a, 0);
        const _ = this.getFileComponent(a);
        _ ? this.selectComponent(_.target, _.pluginName) : v && (v = o.getEdgeChildNodes(v, null).sc || v, this.setRange(v, 0, v, 0));
      }
      return r || this.history.push(1), v || a;
    },
    /**
     * @description Gets the file component and that plugin name
     * return: {target, component, pluginName} | null
     * @param {Element} element Target element (figure tag, component div, file tag)
     * @returns {Object|null}
     */
    getFileComponent: function(a) {
      if (!this._fileManager.queryString || !a) return null;
      let r, d;
      return (/^FIGURE$/i.test(a.nodeName) || /se-component/.test(a.className)) && (r = a.querySelector(this._fileManager.queryString)), !r && a.nodeName && this._fileManager.regExp.test(a.nodeName) && (r = a), r && (d = this._fileManager.pluginMap[r.nodeName.toLowerCase()], d) ? {
        target: r,
        component: o.getParentElement(r, o.isComponent),
        pluginName: d
      } : null;
    },
    /**
     * @description The component(image, video) is selected and the resizing module is called.
     * @param {Element} element Element tag (img, iframe, video)
     * @param {String} pluginName Plugin name (image, video)
     */
    selectComponent: function(a, r) {
      if (o.isUneditableComponent(o.getParentElement(a, o.isComponent)) || o.isUneditableComponent(a)) return !1;
      this.hasFocus || this.focus();
      const d = this.plugins[r];
      d && f.setTimeout((function() {
        typeof d.select == "function" && this.callPlugin(r, d.select.bind(this, a), null), this._setComponentLineBreaker(a);
      }).bind(this));
    },
    /**
     * @description Set line breaker of component
     * @param {Element} element Element tag (img, iframe, video)
     * @private
     */
    _setComponentLineBreaker: function(a) {
      this._lineBreaker.style.display = "none";
      const r = o.getParentElement(a, o.isComponent);
      if (!r) return;
      const d = e.element.lineBreaker_t.style, h = e.element.lineBreaker_b.style, p = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : a, v = o.isListCell(r.parentNode);
      let m, y, _;
      (v ? !r.previousSibling || o.isComponent(r.previousElementSibling) : !o.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, m = o.getOffset(a, e.element.wysiwygFrame).top + y, _ = p.offsetWidth / 2 / 2, d.top = m - y - 12 + "px", d.left = o.getOffset(p).left + _ + "px", d.display = "block") : d.display = "none", (v ? !r.nextSibling || o.isComponent(r.nextElementSibling) : !o.isFormatElement(r.nextElementSibling)) ? (m || (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, m = o.getOffset(a, e.element.wysiwygFrame).top + y, _ = p.offsetWidth / 2 / 2), h.top = m + p.offsetHeight - y - 12 + "px", h.left = o.getOffset(p).left + p.offsetWidth - _ - 24 + "px", h.display = "block") : h.display = "none";
    },
    _checkDuplicateNode: function(a, r) {
      (function d(h) {
        c._dupleCheck(h, r);
        const p = h.childNodes;
        for (let v = 0, m = p.length; v < m; v++)
          d(p[v]);
      })(a);
    },
    _dupleCheck: function(a, r) {
      if (!o.isTextStyleElement(a)) return;
      const d = (a.style.cssText.match(/[^;]+;/g) || []).map(function(v) {
        return v.trim();
      }), h = a.nodeName;
      if (/^span$/i.test(h) && d.length === 0) return a;
      let p = !1;
      return (function v(m) {
        if (!(o.isWysiwygDiv(m) || !o.isTextStyleElement(m))) {
          if (m.nodeName === h) {
            p = !0;
            const y = m.style.cssText.match(/[^;]+;/g) || [];
            for (let _ = 0, C = y.length, w; _ < C; _++)
              (w = d.indexOf(y[_].trim())) > -1 && d.splice(w, 1);
            for (let _ = 0, C = m.classList.length; _ < C; _++)
              a.classList.remove(m.classList[_]);
          }
          v(m.parentElement);
        }
      })(r), p && ((a.style.cssText = d.join(" ")) || (a.setAttribute("style", ""), a.removeAttribute("style")), a.attributes.length || a.setAttribute("data-se-duple", "true")), a;
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
    insertNode: function(a, r, d) {
      if (this.isReadOnly || d && !this.checkCharCount(a, null))
        return null;
      let h = null, p = this.getRange(), v = o.isListCell(p.commonAncestorContainer) ? p.commonAncestorContainer : o.getFormatElement(this.getSelectionNode(), null), m = o.isListCell(v) && (o.isListCell(a) || o.isList(a)), y, _, C, w = null;
      const z = o.isFreeFormatElement(v), T = !z && (o.isFormatElement(a) || o.isRangeFormatElement(a)) || o.isComponent(a);
      if (m && (C = r || o.isList(a) ? v.lastChild : v.nextElementSibling, w = o.isList(a) ? v : (C || v).parentNode), !r && (T || o.isComponent(a) || o.isMedia(a))) {
        const P = this.isEdgePoint(p.endContainer, p.endOffset, "end"), E = this.removeNode(), H = E.container, I = H === E.prevContainer && p.collapsed ? null : E.prevContainer;
        if (m && I)
          if (w = I.nodeType === 3 ? I.parentNode : I, w.contains(H)) {
            let W = !0;
            for (C = H; C.parentNode && C.parentNode !== w; )
              C = C.parentNode, W = !1;
            W && H === I && (C = C.nextSibling);
          } else
            C = null;
        else if (m && o.isListCell(H) && !v.parentElement)
          v = o.createElement("LI"), w.appendChild(v), H.appendChild(w), C = null;
        else if (H.nodeType === 3 || o.isBreak(H) || m) {
          const W = o.getParentElement(H, (function(R) {
            return this.isRangeFormatElement(R) || this.isListCell(R);
          }).bind(o));
          if (r = o.splitElement(H, E.offset, W ? o.getElementDepth(W) + 1 : 0), !r)
            o.isListCell(v) || (C = r = v);
          else if (m) {
            if (v.contains(H)) {
              const R = o.isList(v.lastElementChild);
              let A = null;
              P || (A = v.cloneNode(!1), A.appendChild(r.textContent.trim() ? r : o.createTextNode(o.zeroWidthSpace))), R && (A || (A = v.cloneNode(!1), A.appendChild(o.createTextNode(o.zeroWidthSpace))), A.appendChild(v.lastElementChild)), A && (v.parentNode.insertBefore(A, v.nextElementSibling), C = r = A);
            }
          } else
            r = r.previousSibling;
        }
      }
      p = !r && !T ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const B = p.commonAncestorContainer, N = p.startOffset, $ = p.endOffset, O = p.startContainer === B && o.isFormatElement(B), U = O && (B.childNodes[N] || B.childNodes[0]) || p.startContainer, M = O && (B.childNodes[$] || B.childNodes[B.childNodes.length - 1]) || p.endContainer;
      if (!m)
        if (r)
          y = r.parentNode, r = r.nextSibling, _ = !0;
        else if (y = U, U.nodeType === 3 && (y = U.parentNode), p.collapsed)
          if (B.nodeType === 3)
            B.textContent.length > $ ? r = B.splitText($) : r = B.nextSibling;
          else if (o.isBreak(y))
            r = y, y = y.parentNode;
          else {
            let P = y.childNodes[N];
            const E = P && P.nodeType === 3 && o.onlyZeroWidthSpace(P) && o.isBreak(P.nextSibling) ? P.nextSibling : P;
            E ? !E.nextSibling && o.isBreak(E) ? (y.removeChild(E), r = null) : r = o.isBreak(E) && !o.isBreak(a) ? E : E.nextSibling : r = null;
          }
        else if (U === M) {
          this.isEdgePoint(M, $) ? r = M.nextSibling : r = M.splitText($);
          let E = U;
          this.isEdgePoint(U, N) || (E = U.splitText(N)), y.removeChild(E), y.childNodes.length === 0 && T && (y.innerHTML = "<br>");
        } else {
          const E = this.removeNode(), H = E.container, I = E.prevContainer;
          if (H && H.childNodes.length === 0 && T && (o.isFormatElement(H) ? H.innerHTML = "<br>" : o.isRangeFormatElement(H) && (H.innerHTML = "<" + i.defaultTag + "><br></" + i.defaultTag + ">")), o.isListCell(H) && a.nodeType === 3)
            y = H, r = null;
          else if (!T && I)
            if (y = I.nodeType === 3 ? I.parentNode : I, y.contains(H)) {
              let W = !0;
              for (r = H; r.parentNode && r.parentNode !== y; )
                r = r.parentNode, W = !1;
              W && H === I && (r = r.nextSibling);
            } else
              r = null;
          else o.isWysiwygDiv(H) && !o.isFormatElement(a) ? (y = H.appendChild(o.createElement(i.defaultTag)), r = null) : (r = T ? M : H === I ? H.nextSibling : H, y = !r || !r.parentNode ? B : r.parentNode);
          for (; r && !o.isFormatElement(r) && r.parentNode !== B; )
            r = r.parentNode;
        }
      try {
        if (!m) {
          if ((o.isWysiwygDiv(r) || y === e.element.wysiwyg.parentNode) && (y = e.element.wysiwyg, r = null), o.isFormatElement(a) || o.isRangeFormatElement(a) || !o.isListCell(y) && o.isComponent(a)) {
            const P = y;
            if (o.isList(r))
              y = r, r = null;
            else if (o.isListCell(r))
              y = r.previousElementSibling || r;
            else if (!_ && !r) {
              const E = this.removeNode(), H = E.container.nodeType === 3 ? o.isListCell(o.getFormatElement(E.container, null)) ? E.container : o.getFormatElement(E.container, null) || E.container.parentNode : E.container, I = o.isWysiwygDiv(H) || o.isRangeFormatElement(H);
              y = I ? H : H.parentNode, r = I ? null : H.nextSibling;
            }
            P.childNodes.length === 0 && y !== P && o.removeItem(P);
          }
          if (T && !z && !o.isRangeFormatElement(y) && !o.isListCell(y) && !o.isWysiwygDiv(y) && (r = y.nextElementSibling, y = y.parentNode), o.isWysiwygDiv(y) && (a.nodeType === 3 || o.isBreak(a))) {
            const P = o.createElement(i.defaultTag);
            P.appendChild(a), h = a, a = P;
          }
        }
        if (m ? w.parentNode ? (y = w, r = C) : (y = e.element.wysiwyg, r = null) : r = y === r ? y.lastChild : r, o.isListCell(a) && !o.isList(y)) {
          if (o.isListCell(y))
            r = y.nextElementSibling, y = y.parentNode;
          else {
            const P = o.createElement("ol");
            y.insertBefore(P, r), y = P, r = null;
          }
          m = !0;
        }
        if (this._checkDuplicateNode(a, y), y.insertBefore(a, r), m)
          if (o.onlyZeroWidthSpace(v.textContent.trim()))
            o.removeItem(v), a = a.lastChild;
          else {
            const P = o.getArrayItem(v.children, o.isList);
            P && (a !== P ? (a.appendChild(P), a = P.previousSibling) : (y.appendChild(a), a = y), o.onlyZeroWidthSpace(v.textContent.trim()) && o.removeItem(v));
          }
      } catch (P) {
        y.appendChild(a), console.warn("[SUNEDITOR.insertNode.warn] " + P);
      } finally {
        h && (a = h);
        const P = y.querySelectorAll("[data-se-duple]");
        if (P.length > 0)
          for (let E = 0, H = P.length, I, W, R, A; E < H; E++) {
            for (I = P[E], R = I.childNodes, A = I.parentNode; R[0]; )
              W = R[0], A.insertBefore(W, I);
            I === a && (a = W), o.removeItem(I);
          }
        if ((o.isFormatElement(a) || o.isComponent(a)) && U === M) {
          const E = o.getFormatElement(B, null);
          E && E.nodeType === 1 && o.isEmptyLine(E) && o.removeItem(E);
        }
        if (z && (o.isFormatElement(a) || o.isRangeFormatElement(a)) && (a = this._setIntoFreeFormat(a)), !o.isComponent(a)) {
          let E = 1;
          if (a.nodeType === 3)
            E = a.textContent.length, this.setRange(a, E, a, E);
          else if (!o.isBreak(a) && !o.isListCell(a) && o.isFormatElement(y)) {
            let H = null;
            (!a.previousSibling || o.isBreak(a.previousSibling)) && (H = o.createTextNode(o.zeroWidthSpace), a.parentNode.insertBefore(H, a)), (!a.nextSibling || o.isBreak(a.nextSibling)) && (H = o.createTextNode(o.zeroWidthSpace), a.parentNode.insertBefore(H, a.nextSibling)), o._isIgnoreNodeChange(a) && (a = a.nextSibling, E = 0);
          }
          this.setRange(a, E, a, E);
        }
        return a;
      }
    },
    _setIntoFreeFormat: function(a) {
      const r = a.parentNode;
      let d, h;
      for (; o.isFormatElement(a) || o.isRangeFormatElement(a); ) {
        for (d = a.childNodes, h = null; d[0]; ) {
          if (h = d[0], o.isFormatElement(h) || o.isRangeFormatElement(h)) {
            if (this._setIntoFreeFormat(h), !a.parentNode) break;
            d = a.childNodes;
            continue;
          }
          r.insertBefore(h, a);
        }
        a.childNodes.length === 0 && o.removeItem(a), a = o.createElement("BR"), r.insertBefore(a, h.nextSibling);
      }
      return a;
    },
    /**
     * @description Delete the currently selected nodes and reset selection range
     * Returns {container: "the last element after deletion", offset: "offset", prevContainer: "previousElementSibling Of the deleted area"}
     * @returns {Object}
     */
    removeNode: function() {
      this._resetRangeToTextNode();
      const a = this.getRange();
      if (a.startContainer === a.endContainer) {
        const E = o.getParentElement(a.startContainer, o.isMediaComponent);
        if (E) {
          const H = o.createElement("BR"), I = o.createElement(i.defaultTag);
          return I.appendChild(H), o.changeElement(E, I), c.setRange(I, 0, I, 0), this.history.push(!0), {
            container: I,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = a.startOffset === 0, d = c.isEdgePoint(a.endContainer, a.endOffset, "end");
      let h = null, p = null, v = null;
      r && (p = o.getFormatElement(a.startContainer), p && (h = p.previousElementSibling, p = h)), d && (v = o.getFormatElement(a.endContainer), v = v && v.nextElementSibling);
      let m, y = 0, _ = a.startContainer, C = a.endContainer, w = a.startOffset, z = a.endOffset;
      const T = a.commonAncestorContainer.nodeType === 3 && a.commonAncestorContainer.parentNode === _.parentNode ? _.parentNode : a.commonAncestorContainer;
      if (T === _ && T === C && (_ = T.children[w], C = T.children[z], w = z = 0), !_ || !C) return {
        container: T,
        offset: 0
      };
      if (_ === C && a.collapsed && _.textContent && o.onlyZeroWidthSpace(_.textContent.substr(w)))
        return {
          container: _,
          offset: w,
          prevContainer: _ && _.parentNode ? _ : null
        };
      let B = null, N = null;
      const $ = o.getListChildNodes(T, null);
      let O = o.getArrayIndex($, _), U = o.getArrayIndex($, C);
      if ($.length > 0 && O > -1 && U > -1) {
        for (let E = O + 1, H = _; E >= 0; E--)
          $[E] === H.parentNode && $[E].firstChild === H && w === 0 && (O = E, H = H.parentNode);
        for (let E = U - 1, H = C; E > O; E--)
          $[E] === H.parentNode && $[E].nodeType === 1 && ($.splice(E, 1), H = H.parentNode, --U);
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
              offset: z
            };
          $.push(T), _ = C = T;
        } else if (_ = C = $[0], o.isBreak(_) || o.onlyZeroWidthSpace(_))
          return {
            container: o.isMedia(T) ? T : _,
            offset: 0
          };
        O = U = 0;
      }
      for (let E = O; E <= U; E++) {
        const H = $[E];
        if (H.length === 0 || H.nodeType === 3 && H.data === void 0) {
          this._nodeRemoveListItem(H);
          continue;
        }
        if (H === _) {
          if (_.nodeType === 1) {
            if (o.isComponent(_)) continue;
            B = o.createTextNode(_.textContent);
          } else
            H === C ? (B = o.createTextNode(_.substringData(0, w) + C.substringData(z, C.length - z)), y = w) : B = o.createTextNode(_.substringData(0, w));
          if (B.length > 0 ? _.data = B.data : this._nodeRemoveListItem(_), H === C) break;
          continue;
        }
        if (H === C) {
          if (C.nodeType === 1) {
            if (o.isComponent(C)) continue;
            N = o.createTextNode(C.textContent);
          } else
            N = o.createTextNode(C.substringData(z, C.length - z));
          N.length > 0 ? C.data = N.data : this._nodeRemoveListItem(C);
          continue;
        }
        this._nodeRemoveListItem(H);
      }
      const M = o.getParentElement(C, "ul"), P = o.getParentElement(_, "li");
      if (M && P && P.contains(M) ? (m = M.previousSibling, y = m.textContent.length) : (m = C && C.parentNode ? C : _ && _.parentNode ? _ : a.endContainer || a.startContainer, y = !r && !d ? y : d ? m.textContent.length : 0), !o.isWysiwygDiv(m) && m.childNodes.length === 0) {
        const E = o.removeItemAllParents(m, null, null);
        E && (m = E.sc || E.ec || e.element.wysiwyg);
      }
      return !o.getFormatElement(m) && !(_ && _.parentNode) && (v ? (m = v, y = 0) : p && (m = p, y = 1)), this.setRange(m, y, m, y), this.history.push(!0), {
        container: m,
        offset: y,
        prevContainer: h
      };
    },
    _nodeRemoveListItem: function(a) {
      const r = o.getFormatElement(a, null);
      o.removeItem(a), o.isListCell(r) && (o.removeItemAllParents(r, null, null), r && o.isList(r.firstChild) && r.insertBefore(o.createTextNode(o.zeroWidthSpace), r.firstChild));
    },
    /**
     * @description Appended all selected format Element to the argument element and insert
     * @param {Element} rangeElement Element of wrap the arguments (BLOCKQUOTE...)
     */
    applyRangeFormatElement: function(a) {
      this.getRange_addLine(this.getRange(), null);
      const r = this.getSelectedElementsAndComponents(!1);
      if (!r || r.length === 0) return;
      e:
        for (let z = 0, T = r.length, B, N, $, O, U, M; z < T; z++)
          if (B = r[z], !!o.isListCell(B) && (N = B.lastElementChild, N && o.isListCell(B.nextElementSibling) && r.indexOf(B.nextElementSibling) > -1 && (O = N.lastElementChild, r.indexOf(O) > -1))) {
            let P = null;
            for (; P = O.lastElementChild; )
              if (o.isList(P))
                if (r.indexOf(P.lastElementChild) > -1)
                  O = P.lastElementChild;
                else
                  continue e;
            $ = N.firstElementChild, U = r.indexOf($), M = r.indexOf(O), r.splice(U, M - U + 1), T = r.length;
            continue;
          }
      let d = r[r.length - 1], h, p, v;
      o.isRangeFormatElement(d) || o.isFormatElement(d) ? h = d : h = o.getRangeFormatElement(d, null) || o.getFormatElement(d, null), o.isCell(h) ? (p = null, v = h) : (p = h.nextSibling, v = h.parentNode);
      let m = o.getElementDepth(h), y = null;
      const _ = [], C = function(z, T, B) {
        let N = null;
        if (z !== T && !o.isTable(T)) {
          if (T && o.getElementDepth(z) === o.getElementDepth(T)) return B;
          N = o.removeItemAllParents(T, null, z);
        }
        return N ? N.ec : B;
      };
      for (let z = 0, T = r.length, B, N, $, O, U, M, P; z < T; z++)
        if (B = r[z], N = B.parentNode, !(!N || a.contains(N)))
          if ($ = o.getElementDepth(B), o.isList(N)) {
            if (y === null && (M ? (y = M, P = !0, M = null) : y = N.cloneNode(!1)), _.push(B), U = r[z + 1], z === T - 1 || U && U.parentNode !== N) {
              U && B.contains(U.parentNode) && (M = U.parentNode.cloneNode(!1));
              let E = N.parentNode, H;
              for (; o.isList(E); )
                H = o.createElement(E.nodeName), H.appendChild(y), y = H, E = E.parentNode;
              const I = this.detachRangeFormatElement(N, _, null, !0, !0);
              m >= $ ? (m = $, v = I.cc, p = C(v, N, I.ec), p && (v = p.parentNode)) : v === I.cc && (p = I.ec), v !== I.cc && (O = C(v, I.cc, O), O !== void 0 ? p = O : p = I.cc);
              for (let W = 0, R = I.removeArray.length; W < R; W++)
                y.appendChild(I.removeArray[W]);
              P || a.appendChild(y), M && I.removeArray[I.removeArray.length - 1].appendChild(M), y = null, P = !1;
            }
          } else
            m >= $ && (m = $, v = N, p = B.nextSibling), a.appendChild(B), v !== N && (O = C(v, N), O !== void 0 && (p = O));
      if (this.effectNode = null, o.mergeSameTags(a, null, !1), o.mergeNestedTags(a, (function(z) {
        return this.isList(z);
      }).bind(o)), p && o.getElementDepth(p) > 0 && (o.isList(p.parentNode) || o.isList(p.parentNode.parentNode))) {
        const z = o.getParentElement(p, (function(B) {
          return this.isRangeFormatElement(B) && !this.isList(B);
        }).bind(o)), T = o.splitElement(p, null, z ? o.getElementDepth(z) + 1 : 0);
        T.parentNode.insertBefore(a, T);
      } else
        v.insertBefore(a, p), C(a, p);
      const w = o.getEdgeChildNodes(a.firstElementChild, a.lastElementChild);
      r.length > 1 ? this.setRange(w.sc, 0, w.ec, w.ec.textContent.length) : this.setRange(w.ec, w.ec.textContent.length, w.ec, w.ec.textContent.length), this.history.push(!1);
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
    detachRangeFormatElement: function(a, r, d, h, p) {
      const v = this.getRange();
      let m = v.startOffset, y = v.endOffset, _ = o.getListChildNodes(a, function(I) {
        return I.parentNode === a;
      }), C = a.parentNode, w = null, z = null, T = a.cloneNode(!1);
      const B = [], N = o.isList(d);
      let $ = !1, O = !1, U = !1;
      function M(I, W, R, A) {
        if (o.onlyZeroWidthSpace(W) && (W.innerHTML = o.zeroWidthSpace, m = y = 1), W.nodeType === 3)
          return I.insertBefore(W, R), W;
        const j = (U ? W : A).childNodes;
        let G = W.cloneNode(!1), te = null, J = null;
        for (; j[0]; )
          J = j[0], o._notTextNode(J) && !o.isBreak(J) && !o.isListCell(G) ? (G.childNodes.length > 0 && (te || (te = G), I.insertBefore(G, R), G = W.cloneNode(!1)), I.insertBefore(J, R), te || (te = J)) : G.appendChild(J);
        if (G.childNodes.length > 0) {
          if (o.isListCell(I) && o.isListCell(G) && o.isList(R))
            if (N) {
              for (te = R; R; )
                G.appendChild(R), R = R.nextSibling;
              I.parentNode.insertBefore(G, I.nextElementSibling);
            } else {
              const Q = A.nextElementSibling, oe = o.detachNestedList(A, !1);
              if (a !== oe || Q !== A.nextElementSibling) {
                const de = G.childNodes;
                for (; de[0]; )
                  A.appendChild(de[0]);
                a = oe, O = !0;
              }
            }
          else
            I.insertBefore(G, R);
          te || (te = G);
        }
        return te;
      }
      for (let I = 0, W = _.length, R, A, j; I < W; I++)
        if (R = _[I], !(R.nodeType === 3 && o.isList(T)))
          if (U = !1, h && I === 0 && (!r || r.length === W || r[0] === R ? w = a.previousSibling : w = T), r && (A = r.indexOf(R)), r && A === -1)
            T || (T = a.cloneNode(!1)), T.appendChild(R);
          else {
            if (r && (j = r[A + 1]), T && T.children.length > 0 && (C.insertBefore(T, a), T = null), !N && o.isListCell(R))
              if (j && o.getElementDepth(R) !== o.getElementDepth(j) && (o.isListCell(C) || o.getArrayItem(R.children, o.isList, !1))) {
                const G = R.nextElementSibling, te = o.detachNestedList(R, !1);
                (a !== te || G !== R.nextElementSibling) && (a = te, O = !0);
              } else {
                const G = R;
                R = o.createElement(h ? G.nodeName : o.isList(a.parentNode) || o.isListCell(a.parentNode) ? "LI" : o.isCell(a.parentNode) ? "DIV" : i.defaultTag);
                const te = o.isListCell(R), J = G.childNodes;
                for (; J[0] && !(o.isList(J[0]) && !te); )
                  R.appendChild(J[0]);
                o.copyFormatAttributes(R, G), U = !0;
              }
            else
              R = R.cloneNode(!1);
            if (!O && (h ? (B.push(R), o.removeItem(_[I])) : (d ? ($ || (C.insertBefore(d, a), $ = !0), R = M(d, R, null, _[I])) : R = M(C, R, a, _[I]), O || (r ? (z = R, w || (w = R)) : w || (w = z = R))), O)) {
              O = U = !1, _ = o.getListChildNodes(a, function(G) {
                return G.parentNode === a;
              }), T = a.cloneNode(!1), C = a.parentNode, I = -1, W = _.length;
              continue;
            }
          }
      const P = a.parentNode;
      let E = a.nextSibling;
      T && T.children.length > 0 && P.insertBefore(T, E), d ? w = d.previousSibling : w || (w = a.previousSibling), E = a.nextSibling !== T ? a.nextSibling : T ? T.nextSibling : null, a.children.length === 0 || a.textContent.length === 0 ? o.removeItem(a) : o.removeEmptyNode(a, null, !1);
      let H = null;
      if (h)
        H = {
          cc: P,
          sc: w,
          so: m,
          ec: E,
          eo: y,
          removeArray: B
        };
      else {
        w || (w = z), z || (z = w);
        const I = o.getEdgeChildNodes(w, z.parentNode ? w : z);
        H = {
          cc: (I.sc || I.ec).parentNode,
          sc: I.sc,
          so: m,
          ec: I.ec,
          eo: y,
          removeArray: null
        };
      }
      if (this.effectNode = null, p) return H;
      !h && H && (r ? this.setRange(H.sc, m, H.ec, y) : this.setRange(H.sc, 0, H.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(a, r) {
      let d = {}, h = !1, p = !1, v = null, m = null;
      const y = (function(_) {
        return !this.isComponent(_);
      }).bind(o);
      for (let _ = 0, C = a.length, w, z, T, B; _ < C; _++) {
        if (T = _ === C - 1, z = o.getRangeFormatElement(a[_], y), B = o.isList(z), !w && B)
          w = z, d = { r: w, f: [o.getParentElement(a[_], "LI")] }, _ === 0 && (h = !0);
        else if (w && B)
          if (w !== z) {
            const N = this.detachRangeFormatElement(d.f[0].parentNode, d.f, null, r, !0);
            z = a[_].parentNode, h && (v = N.sc, h = !1), T && (m = N.ec), B ? (w = z, d = { r: w, f: [o.getParentElement(a[_], "LI")] }, T && (p = !0)) : w = null;
          } else
            d.f.push(o.getParentElement(a[_], "LI")), T && (p = !0);
        if (T && o.isList(w)) {
          const N = this.detachRangeFormatElement(d.f[0].parentNode, d.f, null, r, !0);
          (p || C === 1) && (m = N.ec), h && (v = N.sc || m);
        }
      }
      return {
        sc: v,
        ec: m
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
    nodeChange: function(a, r, d, h) {
      this._resetRangeToTextNode();
      let p = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, d = d && d.length > 0 ? d : !1;
      const v = !a, m = v && !d && !r;
      let y = p.startContainer, _ = p.startOffset, C = p.endContainer, w = p.endOffset;
      if (m && p.collapsed && o.isFormatElement(y.parentNode) || y === C && y.nodeType === 1 && o.isNonEditable(y)) {
        const J = y.parentNode;
        if (!o.isListCell(J) || !o.getValues(J.style).some((function(Q) {
          return this._listKebab.indexOf(Q) > -1;
        }).bind(this))) return;
      }
      if (p.collapsed && !m && y.nodeType === 1 && !o.isBreak(y) && !o.isComponent(y)) {
        let J = null;
        const Q = y.childNodes[_];
        Q && (Q.nextSibling ? J = o.isBreak(Q) ? Q : Q.nextSibling : J = null);
        const oe = o.createTextNode(o.zeroWidthSpace);
        y.insertBefore(oe, J), this.setRange(oe, 1, oe, 1), p = this.getRange(), y = p.startContainer, _ = p.startOffset, C = p.endContainer, w = p.endOffset;
      }
      o.isFormatElement(y) && (y = y.childNodes[_] || y.firstChild, _ = 0), o.isFormatElement(C) && (C = C.childNodes[w] || C.lastChild, w = C.textContent.length), v && (a = o.createElement("DIV"));
      const z = f.RegExp, T = a.nodeName;
      if (!m && y === C && !d && a) {
        let J = y, Q = 0;
        const oe = [], de = a.style;
        for (let le = 0, me = de.length; le < me; le++)
          oe.push(de[le]);
        const re = a.classList;
        for (let le = 0, me = re.length; le < me; le++)
          oe.push("." + re[le]);
        if (oe.length > 0) {
          for (; !o.isFormatElement(J) && !o.isWysiwygDiv(J); ) {
            for (let le = 0; le < oe.length; le++)
              if (J.nodeType === 1) {
                const me = oe[le], Ee = /^\./.test(me) ? new z("\\s*" + me.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, Me = v ? !!J.style[me] : !!J.style[me] && !!a.style[me] && J.style[me] === a.style[me], ke = Ee === !1 ? !1 : v ? !!J.className.match(Ee) : !!J.className.match(Ee) && !!a.className.match(Ee);
                (Me || ke) && Q++;
              }
            J = J.parentNode;
          }
          if (Q >= oe.length) return;
        }
      }
      let B = {}, N = {}, $, O = "", U = "", M = "";
      if (r) {
        for (let J = 0, Q = r.length, oe; J < Q; J++)
          oe = r[J], /^\./.test(oe) ? U += (U ? "|" : "\\s*(?:") + oe.replace(/^\./, "") : O += (O ? "|" : "(?:;|^|\\s)(?:") + oe;
        O && (O += ")\\s*:[^;]*\\s*(?:;|$)", O = new z(O, "ig")), U && (U += ")(?=\\s+|$)", U = new z(U, "ig"));
      }
      if (d) {
        M = "^(?:" + d[0];
        for (let J = 1; J < d.length; J++)
          M += "|" + d[J];
        M += ")$", M = new z(M, "i");
      }
      const P = f.Boolean, E = { v: !1 }, H = function(J) {
        const Q = J.cloneNode(!1);
        if (Q.nodeType === 3 || o.isBreak(Q)) return Q;
        if (m) return null;
        const oe = !M && v || M && M.test(Q.nodeName);
        if (oe && !h)
          return E.v = !0, null;
        const de = Q.style.cssText;
        let re = "";
        O && de.length > 0 && (re = de.replace(O, "").trim(), re !== de && (E.v = !0));
        const le = Q.className;
        let me = "";
        return U && le.length > 0 && (me = le.replace(U, "").trim(), me !== le && (E.v = !0)), v && (U || !le) && (O || !de) && !re && !me && oe ? (E.v = !0, null) : re || me || Q.nodeName !== T || P(O) !== P(de) || P(U) !== P(le) ? (O && de.length > 0 && (Q.style.cssText = re), Q.style.cssText || Q.removeAttribute("style"), U && le.length > 0 && (Q.className = me.trim()), Q.className.trim() || Q.removeAttribute("class"), !Q.style.cssText && !Q.className && (Q.nodeName === T || oe) ? (E.v = !0, null) : Q) : (E.v = !0, null);
      }, I = this.getSelectedElements(null);
      p = this.getRange(), y = p.startContainer, _ = p.startOffset, C = p.endContainer, w = p.endOffset, o.getFormatElement(y, null) || (y = o.getChildElement(I[0], function(J) {
        return J.nodeType === 3;
      }, !1), _ = 0), o.getFormatElement(C, null) || (C = o.getChildElement(I[I.length - 1], function(J) {
        return J.nodeType === 3;
      }, !1), w = C.textContent.length);
      const W = o.getFormatElement(y, null) === o.getFormatElement(C, null), R = I.length - (W ? 0 : 1);
      $ = a.cloneNode(!1);
      const A = m || v && (function(J) {
        for (let Q = 0, oe = J.length; Q < oe; Q++)
          if (o._isMaintainedNode(J[Q]) || o._isSizeNode(J[Q])) return !0;
        return !1;
      })(d), j = v || o._isSizeNode($), G = this._util_getMaintainedNode.bind(o, A, j), te = this._util_isMaintainedNode.bind(o, A, j);
      if (W) {
        this._resetCommonListCell(I[0], r) && (p = this.setRange(y, _, C, w));
        const J = this._nodeChange_oneLine(I[0], $, H, y, _, C, w, m, v, p.collapsed, E, G, te);
        B.container = J.startContainer, B.offset = J.startOffset, N.container = J.endContainer, N.offset = J.endOffset, B.container === N.container && o.onlyZeroWidthSpace(B.container) && (B.offset = N.offset = 1), this._setCommonListStyle(J.ancestor, null);
      } else {
        let J = !1;
        R > 0 && this._resetCommonListCell(I[R], r) && (J = !0), this._resetCommonListCell(I[0], r) && (J = !0), J && this.setRange(y, _, C, w), R > 0 && ($ = a.cloneNode(!1), N = this._nodeChange_endLine(I[R], $, H, C, w, m, v, E, G, te));
        for (let Q = R - 1, oe; Q > 0; Q--)
          this._resetCommonListCell(I[Q], r), $ = a.cloneNode(!1), oe = this._nodeChange_middleLine(I[Q], $, H, m, v, E, N.container), oe.endContainer && oe.ancestor.contains(oe.endContainer) && (N.ancestor = null, N.container = oe.endContainer), this._setCommonListStyle(oe.ancestor, null);
        $ = a.cloneNode(!1), B = this._nodeChange_startLine(I[0], $, H, y, _, m, v, E, G, te, N.container), B.endContainer && (N.ancestor = null, N.container = B.endContainer), R <= 0 ? N = B : N.container || (N.ancestor = null, N.container = B.container, N.offset = B.container.textContent.length), this._setCommonListStyle(B.ancestor, null), this._setCommonListStyle(N.ancestor || o.getFormatElement(N.container), null);
      }
      this.controllersOff(), this.setRange(B.container, B.offset, N.container, N.offset), this.history.push(!1);
    },
    /**
     * @description Reset common style of list cell
     * @param {Element} el List cell element. <li>
     * @param {Array|null} styleArray Style array
     * @private
     */
    _resetCommonListCell: function(a, r) {
      if (!o.isListCell(a)) return;
      r || (r = this._listKebab);
      const d = o.getArrayItem(a.childNodes, function(z) {
        return !o.isBreak(z);
      }, !0), h = a.style, p = [], v = [], m = o.getValues(h);
      for (let z = 0, T = this._listKebab.length; z < T; z++)
        m.indexOf(this._listKebab[z]) > -1 && r.indexOf(this._listKebab[z]) > -1 && (p.push(this._listCamel[z]), v.push(this._listKebab[z]));
      if (!p.length) return;
      const y = o.createElement("SPAN");
      for (let z = 0, T = p.length; z < T; z++)
        y.style[p[z]] = h[v[z]], h.removeProperty(v[z]);
      let _ = y.cloneNode(!1), C = null, w = !1;
      for (let z = 0, T = d.length, B, N; z < T; z++)
        B = d[z], !i._textTagsMap[B.nodeName.toLowerCase()] && (N = o.getValues(B.style), N.length === 0 || p.some(function($) {
          return N.indexOf($) === -1;
        }) && N.some(function($) {
        }) ? (C = B.nextSibling, _.appendChild(B)) : _.childNodes.length > 0 && (a.insertBefore(_, C), _ = y.cloneNode(!1), C = null, w = !0));
      return _.childNodes.length > 0 && (a.insertBefore(_, C), w = !0), h.length || a.removeAttribute("style"), w;
    },
    /**
     * @description If certain styles are applied to all child nodes of the list cell, the style of the list cell is also changed. (bold, color, size)
     * @param {Element} el List cell element. <li>
     * @param {Element|null} child Variable for recursive call. ("null" on the first call)
     * @private
     */
    _setCommonListStyle: function(a, r) {
      if (!o.isListCell(a)) return;
      const d = o.getArrayItem((r || a).childNodes, function(_) {
        return !o.isBreak(_);
      }, !0);
      if (r = d[0], !r || d.length > 1 || r.nodeType !== 1) return;
      const h = r.style, p = a.style, v = r.nodeName.toLowerCase();
      let m = !1;
      i._textTagsMap[v] === i._defaultCommand.bold.toLowerCase() && (p.fontWeight = "bold"), i._textTagsMap[v] === i._defaultCommand.italic.toLowerCase() && (p.fontStyle = "italic");
      const y = o.getValues(h);
      if (y.length > 0)
        for (let _ = 0, C = this._listCamel.length; _ < C; _++)
          y.indexOf(this._listKebab[_]) > -1 && (p[this._listCamel[_]] = h[this._listCamel[_]], h.removeProperty(this._listKebab[_]), m = !0);
      if (this._setCommonListStyle(a, r), !!m && !h.length) {
        const _ = r.childNodes, C = r.parentNode, w = r.nextSibling;
        for (; _.length > 0; )
          C.insertBefore(_[0], w);
        o.removeItem(r);
      }
    },
    /**
     * @description Strip remove node
     * @param {Node} removeNode The remove node
     * @private
     */
    _stripRemoveNode: function(a) {
      const r = a.parentNode;
      if (!a || a.nodeType === 3 || !r) return;
      const d = a.childNodes;
      for (; d[0]; )
        r.insertBefore(d[0], a);
      r.removeChild(a);
    },
    /**
     * @description Return the parent maintained tag. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_getMaintainedNode: function(a, r, d) {
      return !d || a ? null : this.getParentElement(d, this._isMaintainedNode.bind(this)) || (r ? null : this.getParentElement(d, this._isSizeNode.bind(this)));
    },
    /**
     * @description Check if element is a tag that should be persisted. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_isMaintainedNode: function(a, r, d) {
      if (!d || a || d.nodeType !== 1) return !1;
      const h = this._isMaintainedNode(d);
      return this.getParentElement(d, this._isMaintainedNode.bind(this)) ? h : h || (r ? !1 : this._isSizeNode(d));
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
    _nodeChange_oneLine: function(a, r, d, h, p, v, m, y, _, C, w, z, T) {
      let B = h.parentNode;
      for (; !B.nextSibling && !B.previousSibling && !o.isFormatElement(B.parentNode) && !o.isWysiwygDiv(B.parentNode) && B.nodeName !== r.nodeName; )
        B = B.parentNode;
      if (!_ && B === v.parentNode && B.nodeName === r.nodeName && o.onlyZeroWidthSpace(h.textContent.slice(0, p)) && o.onlyZeroWidthSpace(v.textContent.slice(m))) {
        const ke = B.childNodes;
        let fe = !0;
        for (let Be = 0, Ge = ke.length, Fe, Je, Ue, Se; Be < Ge; Be++) {
          if (Fe = ke[Be], Se = !o.onlyZeroWidthSpace(Fe), Fe === h) {
            Je = !0;
            continue;
          }
          if (Fe === v) {
            Ue = !0;
            continue;
          }
          if (!Je && Se || Je && Ue && Se) {
            fe = !1;
            break;
          }
        }
        if (fe)
          return o.copyTagAttributes(B, r), {
            ancestor: a,
            startContainer: h,
            startOffset: p,
            endContainer: v,
            endOffset: m
          };
      }
      w.v = !1;
      const N = a, $ = [r], O = a.cloneNode(!1), U = h === v;
      let M = h, P = p, E = v, H = m, I = !1, W = !1, R, A, j, G, te;
      const J = f.RegExp;
      function Q(ke) {
        const fe = new J("(?:;|^|\\s)(?:" + G + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let Be = "";
        return fe && ke.style.cssText.length > 0 && (Be = fe.test(ke.style.cssText)), !Be;
      }
      if ((function ke(fe, Be) {
        const Ge = fe.childNodes;
        for (let Fe = 0, Je = Ge.length, Ue; Fe < Je; Fe++) {
          let Se = Ge[Fe];
          if (!Se) continue;
          let Ft = Be, et;
          if (!I && Se === M) {
            let Pe = O;
            te = z(Se);
            const Ae = o.createTextNode(M.nodeType === 1 ? "" : M.substringData(0, P)), Oe = o.createTextNode(
              M.nodeType === 1 ? "" : M.substringData(
                P,
                U && H >= P ? H - P : M.data.length - P
              )
            );
            if (te) {
              const Ct = z(Be);
              if (Ct && Ct.parentNode !== Pe) {
                let Qe = Ct, Et = null;
                for (; Qe.parentNode !== Pe; ) {
                  for (Be = Et = Qe.parentNode.cloneNode(!1); Qe.childNodes[0]; )
                    Et.appendChild(Qe.childNodes[0]);
                  Qe.appendChild(Et), Qe = Qe.parentNode;
                }
                Qe.parentNode.appendChild(Ct);
              }
              te = te.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(Ae) || Be.appendChild(Ae);
            const Ie = z(Be);
            for (Ie && (te = Ie), te && (Pe = te), A = Se, R = [], G = ""; A !== Pe && A !== N && A !== null; )
              Ue = T(A) ? null : d(A), Ue && A.nodeType === 1 && Q(A) && (R.push(Ue), G += A.style.cssText.substr(0, A.style.cssText.indexOf(":")) + "|"), A = A.parentNode;
            const yt = R.pop() || Oe;
            for (j = A = yt; R.length > 0; )
              A = R.pop(), j.appendChild(A), j = A;
            if (r.appendChild(yt), Pe.appendChild(r), te && !z(E) && (r = r.cloneNode(!1), O.appendChild(r), $.push(r)), M = Oe, P = 0, I = !0, A !== Oe && A.appendChild(M), !U) continue;
          }
          if (!W && Se === E) {
            te = z(Se);
            const Pe = o.createTextNode(E.nodeType === 1 ? "" : E.substringData(H, E.length - H)), Ae = o.createTextNode(U || E.nodeType === 1 ? "" : E.substringData(0, H));
            if (te ? te = te.cloneNode(!1) : T(r.parentNode) && !te && (r = r.cloneNode(!1), O.appendChild(r), $.push(r)), !o.onlyZeroWidthSpace(Pe)) {
              A = Se, G = "", R = [];
              const Ie = [];
              for (; A !== O && A !== N && A !== null; )
                A.nodeType === 1 && Q(A) && (T(A) ? Ie.push(A.cloneNode(!1)) : R.push(A.cloneNode(!1)), G += A.style.cssText.substr(0, A.style.cssText.indexOf(":")) + "|"), A = A.parentNode;
              for (R = R.concat(Ie), et = j = A = R.pop() || Pe; R.length > 0; )
                A = R.pop(), j.appendChild(A), j = A;
              O.appendChild(et), A.textContent = Pe.data;
            }
            if (te && et) {
              const Ie = z(et);
              Ie && (te = Ie);
            }
            for (A = Se, R = [], G = ""; A !== O && A !== N && A !== null; )
              Ue = T(A) ? null : d(A), Ue && A.nodeType === 1 && Q(A) && (R.push(Ue), G += A.style.cssText.substr(0, A.style.cssText.indexOf(":")) + "|"), A = A.parentNode;
            const Oe = R.pop() || Ae;
            for (j = A = Oe; R.length > 0; )
              A = R.pop(), j.appendChild(A), j = A;
            te ? (r = r.cloneNode(!1), r.appendChild(Oe), te.insertBefore(r, te.firstChild), O.appendChild(te), $.push(r), te = null) : r.appendChild(Oe), E = Ae, H = Ae.data.length, W = !0, !y && C && (r = Ae, Ae.textContent = o.zeroWidthSpace), A !== Ae && A.appendChild(E);
            continue;
          }
          if (I) {
            if (Se.nodeType === 1 && !o.isBreak(Se)) {
              o._isIgnoreNodeChange(Se) ? (O.appendChild(Se.cloneNode(!0)), C || (r = r.cloneNode(!1), O.appendChild(r), $.push(r))) : ke(Se, Se);
              continue;
            }
            A = Se, R = [], G = "";
            const Pe = [];
            for (; A.parentNode !== null && A !== N && A !== r; )
              Ue = W ? A.cloneNode(!1) : d(A), A.nodeType === 1 && !o.isBreak(Se) && Ue && Q(A) && (T(A) ? te || Pe.push(Ue) : R.push(Ue), G += A.style.cssText.substr(0, A.style.cssText.indexOf(":")) + "|"), A = A.parentNode;
            R = R.concat(Pe);
            const Ae = R.pop() || Se;
            for (j = A = Ae; R.length > 0; )
              A = R.pop(), j.appendChild(A), j = A;
            if (T(r.parentNode) && !T(Ae) && !o.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), O.appendChild(r), $.push(r)), !W && !te && T(Ae)) {
              r = r.cloneNode(!1);
              const Oe = Ae.childNodes;
              for (let Ie = 0, yt = Oe.length; Ie < yt; Ie++)
                r.appendChild(Oe[Ie]);
              Ae.appendChild(r), O.appendChild(Ae), $.push(r), r.children.length > 0 ? Be = A : Be = r;
            } else Ae === Se ? W ? Be = O : Be = r : W ? (O.appendChild(Ae), Be = A) : (r.appendChild(Ae), Be = A);
            if (te && Se.nodeType === 3)
              if (z(Se)) {
                const Oe = o.getParentElement(Be, (function(Ie) {
                  return this._isMaintainedNode(Ie.parentNode) || Ie.parentNode === O;
                }).bind(o));
                te.appendChild(Oe), r = Oe.cloneNode(!1), $.push(r), O.appendChild(r);
              } else
                te = null;
          }
          et = Se.cloneNode(!1), Be.appendChild(et), Se.nodeType === 1 && !o.isBreak(Se) && (Ft = et), ke(Se, Ft);
        }
      })(a, O), _ && !y && !w.v)
        return {
          ancestor: a,
          startContainer: h,
          startOffset: p,
          endContainer: v,
          endOffset: m
        };
      if (y = y && _, y)
        for (let ke = 0; ke < $.length; ke++) {
          let fe = $[ke], Be, Ge, Fe;
          if (C)
            Be = o.createTextNode(o.zeroWidthSpace), O.replaceChild(Be, fe);
          else {
            const Je = fe.childNodes;
            for (Ge = Je[0]; Je[0]; )
              Fe = Je[0], O.insertBefore(Fe, fe);
            o.removeItem(fe);
          }
          ke === 0 && (C ? M = E = Be : (M = Ge, E = Fe));
        }
      else {
        if (_)
          for (let ke = 0; ke < $.length; ke++)
            this._stripRemoveNode($[ke]);
        C && (M = E = r);
      }
      o.removeEmptyNode(O, r, !1), C && (P = M.textContent.length, H = E.textContent.length);
      const oe = y || E.textContent.length === 0;
      !o.isBreak(E) && E.textContent.length === 0 && (o.removeItem(E), E = M), H = oe ? E.textContent.length : H;
      const de = { s: 0, e: 0 }, re = o.getNodePath(M, O, de), le = !E.parentNode;
      le && (E = M);
      const me = { s: 0, e: 0 }, Ee = o.getNodePath(E, O, !le && !oe ? me : null);
      P += de.s, H = C ? P : le ? M.textContent.length : oe ? H + de.s : H + me.s;
      const Me = o.mergeSameTags(O, [re, Ee], !0);
      return a.parentNode.replaceChild(O, a), M = o.getNodeFromPath(re, O), E = o.getNodeFromPath(Ee, O), {
        ancestor: O,
        startContainer: M,
        startOffset: P + Me[0],
        endContainer: E,
        endOffset: H + Me[1]
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
    _nodeChange_startLine: function(a, r, d, h, p, v, m, y, _, C, w) {
      let z = h.parentNode;
      for (; !z.nextSibling && !z.previousSibling && !o.isFormatElement(z.parentNode) && !o.isWysiwygDiv(z.parentNode) && z.nodeName !== r.nodeName; )
        z = z.parentNode;
      if (!m && z.nodeName === r.nodeName && !o.isFormatElement(z) && !z.nextSibling && o.onlyZeroWidthSpace(h.textContent.slice(0, p))) {
        let I = !0, W = h.previousSibling;
        for (; W; ) {
          if (!o.onlyZeroWidthSpace(W)) {
            I = !1;
            break;
          }
          W = W.previousSibling;
        }
        if (I)
          return o.copyTagAttributes(z, r), {
            ancestor: a,
            container: h,
            offset: p
          };
      }
      y.v = !1;
      const T = a, B = [r], N = a.cloneNode(!1);
      let $ = h, O = p, U = !1, M, P, E, H;
      if ((function I(W, R) {
        const A = W.childNodes;
        for (let j = 0, G = A.length, te, J; j < G; j++) {
          const Q = A[j];
          if (!Q) continue;
          let oe = R;
          if (U && !o.isBreak(Q)) {
            if (Q.nodeType === 1) {
              if (o._isIgnoreNodeChange(Q)) {
                if (r = r.cloneNode(!1), J = Q.cloneNode(!0), N.appendChild(J), N.appendChild(r), B.push(r), w && Q.contains(w)) {
                  const me = o.getNodePath(w, Q);
                  w = o.getNodeFromPath(me, J);
                }
              } else
                I(Q, Q);
              continue;
            }
            P = Q, M = [];
            const de = [];
            for (; P.parentNode !== null && P !== T && P !== r; )
              te = d(P), P.nodeType === 1 && te && (C(P) ? H || de.push(te) : M.push(te)), P = P.parentNode;
            M = M.concat(de);
            const re = M.length > 0, le = M.pop() || Q;
            for (E = P = le; M.length > 0; )
              P = M.pop(), E.appendChild(P), E = P;
            if (C(r.parentNode) && !C(le) && (r = r.cloneNode(!1), N.appendChild(r), B.push(r)), !H && C(le)) {
              r = r.cloneNode(!1);
              const me = le.childNodes;
              for (let Ee = 0, Me = me.length; Ee < Me; Ee++)
                r.appendChild(me[Ee]);
              le.appendChild(r), N.appendChild(le), R = C(P) ? r : P, B.push(r);
            } else re ? (r.appendChild(le), R = P) : R = r;
            if (H && Q.nodeType === 3)
              if (_(Q)) {
                const me = o.getParentElement(R, (function(Ee) {
                  return this._isMaintainedNode(Ee.parentNode) || Ee.parentNode === N;
                }).bind(o));
                H.appendChild(me), r = me.cloneNode(!1), B.push(r), N.appendChild(r);
              } else
                H = null;
          }
          if (!U && Q === $) {
            let de = N;
            H = _(Q);
            const re = o.createTextNode($.nodeType === 1 ? "" : $.substringData(0, O)), le = o.createTextNode($.nodeType === 1 ? "" : $.substringData(O, $.length - O));
            if (H) {
              const Me = _(R);
              if (Me && Me.parentNode !== de) {
                let ke = Me, fe = null;
                for (; ke.parentNode !== de; ) {
                  for (R = fe = ke.parentNode.cloneNode(!1); ke.childNodes[0]; )
                    fe.appendChild(ke.childNodes[0]);
                  ke.appendChild(fe), ke = ke.parentNode;
                }
                ke.parentNode.appendChild(Me);
              }
              H = H.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(re) || R.appendChild(re);
            const me = _(R);
            for (me && (H = me), H && (de = H), P = R, M = []; P !== de && P !== null; )
              te = d(P), P.nodeType === 1 && te && M.push(te), P = P.parentNode;
            const Ee = M.pop() || R;
            for (E = P = Ee; M.length > 0; )
              P = M.pop(), E.appendChild(P), E = P;
            Ee !== R ? (r.appendChild(Ee), R = P) : R = r, o.isBreak(Q) && r.appendChild(Q.cloneNode(!1)), de.appendChild(r), $ = le, O = 0, U = !0, R.appendChild($);
            continue;
          }
          te = U ? d(Q) : Q.cloneNode(!1), te && (R.appendChild(te), Q.nodeType === 1 && !o.isBreak(Q) && (oe = te)), I(Q, oe);
        }
      })(a, N), m && !v && !y.v)
        return {
          ancestor: a,
          container: h,
          offset: p,
          endContainer: w
        };
      if (v = v && m, v)
        for (let I = 0; I < B.length; I++) {
          let W = B[I];
          const R = W.childNodes, A = R[0];
          for (; R[0]; )
            N.insertBefore(R[0], W);
          o.removeItem(W), I === 0 && ($ = A);
        }
      else if (m) {
        r = r.firstChild;
        for (let I = 0; I < B.length; I++)
          this._stripRemoveNode(B[I]);
      }
      if (!v && N.childNodes.length === 0)
        a.childNodes ? $ = a.childNodes[0] : ($ = o.createTextNode(o.zeroWidthSpace), a.appendChild($));
      else {
        o.removeEmptyNode(N, r, !1), o.onlyZeroWidthSpace(N.textContent) && ($ = N.firstChild, O = 0);
        const I = { s: 0, e: 0 }, W = o.getNodePath($, N, I);
        O += I.s;
        const R = o.mergeSameTags(N, [W], !0);
        a.parentNode.replaceChild(N, a), $ = o.getNodeFromPath(W, N), O += R[0];
      }
      return {
        ancestor: N,
        container: $,
        offset: O,
        endContainer: w
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
    _nodeChange_middleLine: function(a, r, d, h, p, v, m) {
      if (!p) {
        let w = null;
        m && a.contains(m) && (w = o.getNodePath(m, a));
        const z = a.cloneNode(!0), T = r.nodeName, B = r.style.cssText, N = r.className;
        let $ = z.childNodes, O = 0, U = $.length;
        for (let M; O < U && (M = $[O], M.nodeType !== 3); O++)
          if (M.nodeName === T)
            M.style.cssText += B, o.addClass(M, N);
          else {
            if (!o.isBreak(M) && o._isIgnoreNodeChange(M))
              continue;
            if (U === 1) {
              $ = M.childNodes, U = $.length, O = -1;
              continue;
            } else
              break;
          }
        if (U > 0 && O === U)
          return a.innerHTML = z.innerHTML, {
            ancestor: a,
            endContainer: w ? o.getNodeFromPath(w, a) : null
          };
      }
      v.v = !1;
      const y = a.cloneNode(!1), _ = [r];
      let C = !0;
      if ((function w(z, T) {
        const B = z.childNodes;
        for (let N = 0, $ = B.length, O, U; N < $; N++) {
          let M = B[N];
          if (!M) continue;
          let P = T;
          if (!o.isBreak(M) && o._isIgnoreNodeChange(M)) {
            if (r.childNodes.length > 0 && (y.appendChild(r), r = r.cloneNode(!1)), U = M.cloneNode(!0), y.appendChild(U), y.appendChild(r), _.push(r), T = r, m && M.contains(m)) {
              const E = o.getNodePath(m, M);
              m = o.getNodeFromPath(E, U);
            }
            continue;
          } else
            O = d(M), O && (C = !1, T.appendChild(O), M.nodeType === 1 && (P = O));
          o.isBreak(M) || w(M, P);
        }
      })(a, r), C || p && !h && !v.v) return { ancestor: a, endContainer: m };
      if (y.appendChild(r), h && p)
        for (let w = 0; w < _.length; w++) {
          let z = _[w];
          const T = z.childNodes;
          for (; T[0]; )
            y.insertBefore(T[0], z);
          o.removeItem(z);
        }
      else if (p) {
        r = r.firstChild;
        for (let w = 0; w < _.length; w++)
          this._stripRemoveNode(_[w]);
      }
      return o.removeEmptyNode(y, r, !1), o.mergeSameTags(y, null, !0), a.parentNode.replaceChild(y, a), { ancestor: y, endContainer: m };
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
    _nodeChange_endLine: function(a, r, d, h, p, v, m, y, _, C) {
      let w = h.parentNode;
      for (; !w.nextSibling && !w.previousSibling && !o.isFormatElement(w.parentNode) && !o.isWysiwygDiv(w.parentNode) && w.nodeName !== r.nodeName; )
        w = w.parentNode;
      if (!m && w.nodeName === r.nodeName && !o.isFormatElement(w) && !w.previousSibling && o.onlyZeroWidthSpace(h.textContent.slice(p))) {
        let H = !0, I = h.nextSibling;
        for (; I; ) {
          if (!o.onlyZeroWidthSpace(I)) {
            H = !1;
            break;
          }
          I = I.nextSibling;
        }
        if (H)
          return o.copyTagAttributes(w, r), {
            ancestor: a,
            container: h,
            offset: p
          };
      }
      y.v = !1;
      const z = a, T = [r], B = a.cloneNode(!1);
      let N = h, $ = p, O = !1, U, M, P, E;
      if ((function H(I, W) {
        const R = I.childNodes;
        for (let A = R.length - 1, j; 0 <= A; A--) {
          const G = R[A];
          if (!G) continue;
          let te = W;
          if (O && !o.isBreak(G)) {
            if (G.nodeType === 1) {
              if (o._isIgnoreNodeChange(G)) {
                r = r.cloneNode(!1);
                const de = G.cloneNode(!0);
                B.insertBefore(de, W), B.insertBefore(r, de), T.push(r);
              } else
                H(G, G);
              continue;
            }
            M = G, U = [];
            const J = [];
            for (; M.parentNode !== null && M !== z && M !== r; )
              j = d(M), j && M.nodeType === 1 && (C(M) ? E || J.push(j) : U.push(j)), M = M.parentNode;
            U = U.concat(J);
            const Q = U.length > 0, oe = U.pop() || G;
            for (P = M = oe; U.length > 0; )
              M = U.pop(), P.appendChild(M), P = M;
            if (C(r.parentNode) && !C(oe) && (r = r.cloneNode(!1), B.insertBefore(r, B.firstChild), T.push(r)), !E && C(oe)) {
              r = r.cloneNode(!1);
              const de = oe.childNodes;
              for (let re = 0, le = de.length; re < le; re++)
                r.appendChild(de[re]);
              oe.appendChild(r), B.insertBefore(oe, B.firstChild), T.push(r), r.children.length > 0 ? W = M : W = r;
            } else Q ? (r.insertBefore(oe, r.firstChild), W = M) : W = r;
            if (E && G.nodeType === 3)
              if (_(G)) {
                const de = o.getParentElement(W, (function(re) {
                  return this._isMaintainedNode(re.parentNode) || re.parentNode === B;
                }).bind(o));
                E.appendChild(de), r = de.cloneNode(!1), T.push(r), B.insertBefore(r, B.firstChild);
              } else
                E = null;
          }
          if (!O && G === N) {
            E = _(G);
            const J = o.createTextNode(N.nodeType === 1 ? "" : N.substringData($, N.length - $)), Q = o.createTextNode(N.nodeType === 1 ? "" : N.substringData(0, $));
            if (E) {
              E = E.cloneNode(!1);
              const de = _(W);
              if (de && de.parentNode !== B) {
                let re = de, le = null;
                for (; re.parentNode !== B; ) {
                  for (W = le = re.parentNode.cloneNode(!1); re.childNodes[0]; )
                    le.appendChild(re.childNodes[0]);
                  re.appendChild(le), re = re.parentNode;
                }
                re.parentNode.insertBefore(de, re.parentNode.firstChild);
              }
              E = E.cloneNode(!1);
            } else C(r.parentNode) && !E && (r = r.cloneNode(!1), B.appendChild(r), T.push(r));
            for (o.onlyZeroWidthSpace(J) || W.insertBefore(J, W.firstChild), M = W, U = []; M !== B && M !== null; )
              j = C(M) ? null : d(M), j && M.nodeType === 1 && U.push(j), M = M.parentNode;
            const oe = U.pop() || W;
            for (P = M = oe; U.length > 0; )
              M = U.pop(), P.appendChild(M), P = M;
            oe !== W ? (r.insertBefore(oe, r.firstChild), W = M) : W = r, o.isBreak(G) && r.appendChild(G.cloneNode(!1)), E ? (E.insertBefore(r, E.firstChild), B.insertBefore(E, B.firstChild), E = null) : B.insertBefore(r, B.firstChild), N = Q, $ = Q.data.length, O = !0, W.insertBefore(N, W.firstChild);
            continue;
          }
          j = O ? d(G) : G.cloneNode(!1), j && (W.insertBefore(j, W.firstChild), G.nodeType === 1 && !o.isBreak(G) && (te = j)), H(G, te);
        }
      })(a, B), m && !v && !y.v)
        return {
          ancestor: a,
          container: h,
          offset: p
        };
      if (v = v && m, v)
        for (let H = 0; H < T.length; H++) {
          let I = T[H];
          const W = I.childNodes;
          let R = null;
          for (; W[0]; )
            R = W[0], B.insertBefore(R, I);
          o.removeItem(I), H === T.length - 1 && (N = R, $ = R.textContent.length);
        }
      else if (m) {
        r = r.firstChild;
        for (let H = 0; H < T.length; H++)
          this._stripRemoveNode(T[H]);
      }
      if (!v && B.childNodes.length === 0)
        a.childNodes ? N = a.childNodes[0] : (N = o.createTextNode(o.zeroWidthSpace), a.appendChild(N));
      else {
        if (!m && r.textContent.length === 0)
          return o.removeEmptyNode(B, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        o.removeEmptyNode(B, r, !1), o.onlyZeroWidthSpace(B.textContent) ? (N = B.firstChild, $ = N.textContent.length) : o.onlyZeroWidthSpace(N) && (N = r, $ = 1);
        const H = { s: 0, e: 0 }, I = o.getNodePath(N, B, H);
        $ += H.s;
        const W = o.mergeSameTags(B, [I], !0);
        a.parentNode.replaceChild(B, a), N = o.getNodeFromPath(I, B), $ += W[0];
      }
      return {
        ancestor: B,
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
    actionCall: function(a, r, d) {
      if (r) {
        if (/more/i.test(r)) {
          if (d !== this._moreLayerActiveButton) {
            const h = e.element.toolbar.querySelector("." + a);
            h && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = d, h.style.display = "block", g._showToolbarBalloon(), g._showToolbarInline()), o.addClass(d, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), g._showToolbarBalloon(), g._showToolbarInline());
          return;
        }
        if (/container/.test(r) && (this._menuTray[a] === null || d !== this.containerActiveButton)) {
          this.callPlugin(a, this.containerOn.bind(this, d), d);
          return;
        }
        if (this.isReadOnly && o.arrayIncludes(this.resizingDisabledButtons, d)) return;
        if (/submenu/.test(r) && (this._menuTray[a] === null || d !== this.submenuActiveButton)) {
          this.callPlugin(a, this.submenuOn.bind(this, d), d);
          return;
        } else if (/dialog/.test(r)) {
          this.callPlugin(a, this.plugins[a].open.bind(this), d);
          return;
        } else /command/.test(r) ? this.callPlugin(a, this.plugins[a].action.bind(this), d) : /fileBrowser/.test(r) && this.callPlugin(a, this.plugins[a].open.bind(this, null), d);
      } else a && this.commandHandler(d, a);
      /submenu/.test(r) ? this.submenuOff() : /command/.test(r) || (this.submenuOff(), this.containerOff());
    },
    /**
     * @description Execute command of command button(All Buttons except submenu and dialog)
     * (selectAll, codeView, fullScreen, indent, outdent, undo, redo, removeFormat, print, preview, showBlocks, save, bold, underline, italic, strike, subscript, superscript, copy, cut, paste)
     * @param {Element|null} target The element of command button
     * @param {String} command Property of command button (data-value)
     */
    commandHandler: function(a, r) {
      if (!(c.isReadOnly && !/copy|cut|selectAll|codeView|fullScreen|print|preview|showBlocks/.test(r)))
        switch (r) {
          case "copy":
          case "cut":
            this.execCommand(r);
            break;
          case "paste":
            break;
          case "selectAll":
            this.containerOff();
            const d = e.element.wysiwyg;
            let h = o.getChildElement(d.firstChild, function(_) {
              return _.childNodes.length === 0 || _.nodeType === 3;
            }, !1) || d.firstChild, p = o.getChildElement(d.lastChild, function(_) {
              return _.childNodes.length === 0 || _.nodeType === 3;
            }, !0) || d.lastChild;
            if (!h || !p) return;
            if (o.isMedia(h)) {
              const _ = this.getFileComponent(h), C = o.createElement("BR"), w = o.createElement(i.defaultTag);
              w.appendChild(C), h = _ ? _.component : h, h.parentNode.insertBefore(w, h), h = C;
            }
            if (o.isMedia(p)) {
              const _ = o.createElement("BR"), C = o.createElement(i.defaultTag);
              C.appendChild(_), d.appendChild(C), p = _;
            }
            g._showToolbarBalloon(this.setRange(h, 0, p, p.textContent.length));
            break;
          case "codeView":
            this.toggleCodeView();
            break;
          case "fullScreen":
            this.toggleFullScreen(a);
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
            r = i._defaultCommand[r.toLowerCase()] || r, this.commandMap[r] || (this.commandMap[r] = a);
            const v = this._variable.currentNodesMap, m = v.indexOf(r) > -1 ? null : o.createElement(r);
            let y = r;
            /^SUB$/i.test(r) && v.indexOf("SUP") > -1 ? y = "SUP" : /^SUP$/i.test(r) && v.indexOf("SUB") > -1 && (y = "SUB"), this.nodeChange(m, this._commandMapStyles[r] || null, [y], !1), this.focus();
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
    indent: function(a) {
      const r = this.getRange(), d = this.getSelectedElements(null), h = [], p = a !== "indent", v = i.rtl ? "marginRight" : "marginLeft";
      let m = r.startContainer, y = r.endContainer, _ = r.startOffset, C = r.endOffset;
      for (let w = 0, z = d.length, T, B; w < z; w++)
        T = d[w], !o.isListCell(T) || !this.plugins.list ? (B = /\d+/.test(T.style[v]) ? o.getNumber(T.style[v], 0) : 0, p ? B -= 25 : B += 25, o.setStyle(T, v, B <= 0 ? "" : B + "px")) : (p || T.previousElementSibling) && h.push(T);
      h.length > 0 && this.plugins.list.editInsideList.call(this, p, h), this.effectNode = null, this.setRange(m, _, y, C), this.history.push(!1);
    },
    /**
     * @description Add or remove the class name of "body" so that the code block is visible
     */
    toggleDisplayBlocks: function() {
      const a = e.element.wysiwyg;
      o.toggleClass(a, "se-show-block"), o.hasClass(a, "se-show-block") ? o.addClass(this._styleCommandMap.showBlocks, "active") : o.removeClass(this._styleCommandMap.showBlocks, "active"), this._resourcesStateChange();
    },
    /**
     * @description Changes to code view or wysiwyg view
     */
    toggleCodeView: function() {
      const a = this._variable.isCodeView;
      this.controllersOff(), o.setDisabledButtons(!a, this.codeViewDisabledButtons), a ? (o.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), i.height === "auto" && !i.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(i.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, g._hideToolbar())), this.nativeFocus(), o.removeClass(this._styleCommandMap.codeView, "active"), o.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : i.height === "auto" && !i.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), i.codeMirrorEditor && i.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, g._showToolbarInline())), this._variable._range = null, e.element.code.focus(), o.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && o.setDisabledButtons(!0, this.resizingDisabledButtons), typeof k.toggleCodeView == "function" && k.toggleCodeView(this._variable.isCodeView, this);
    },
    /**
     * @description Convert the data of the code view and put it in the WYSIWYG area.
     * @private
     */
    _setCodeDataToEditor: function() {
      const a = this._getCodeView();
      if (i.fullPage) {
        const r = this._parser.parseFromString(a, "text/html");
        if (!this.options.__allowedScriptTag) {
          const p = r.head.children;
          for (let v = 0, m = p.length; v < m; v++)
            /^script$/i.test(p[v].tagName) && (r.head.removeChild(p[v]), v--, m--);
        }
        let d = r.head.innerHTML;
        (!r.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !r.head.querySelector("style")) && (d += o._setIframeCssTags(this.options)), this._wd.head.innerHTML = d, this._wd.body.innerHTML = this.convertContentsForEditor(r.body.innerHTML);
        const h = r.body.attributes;
        for (let p = 0, v = h.length; p < v; p++)
          h[p].name !== "contenteditable" && this._wd.body.setAttribute(h[p].name, h[p].value);
        if (!o.hasClass(this._wd.body, "sun-editor-editable")) {
          const p = i._editableClass.split(" ");
          for (let v = 0; v < p.length; v++)
            o.addClass(this._wd.body, i._editableClass[v]);
        }
      } else
        e.element.wysiwyg.innerHTML = a.length > 0 ? this.convertContentsForEditor(a) : "<" + i.defaultTag + "><br></" + i.defaultTag + ">";
    },
    /**
     * @description Convert the data of the WYSIWYG area and put it in the code view area.
     * @private
     */
    _setEditorDataToCodeView: function() {
      const a = this.convertHTMLForCodeView(e.element.wysiwyg, !1);
      let r = "";
      if (i.fullPage) {
        const d = o.getAttributesToString(this._wd.body, null);
        r = `<!DOCTYPE html>
<html>
` + this._wd.head.outerHTML.replace(/>(?!\n)/g, `>
`) + "<body " + d + `>
` + a + `</body>
</html>`;
      } else
        r = a;
      e.element.code.style.display = "block", e.element.wysiwygFrame.style.display = "none", this._setCodeView(r);
    },
    /**
     * @description Changes to full screen or default screen
     * @param {Element|null} element full screen button
     */
    toggleFullScreen: function(a) {
      const r = e.element.topArea, d = e.element.toolbar, h = e.element.editorArea, p = e.element.wysiwygFrame, v = e.element.code, m = this._variable;
      this.controllersOff();
      const y = d.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      m.isFullScreen ? (m.isFullScreen = !1, p.style.cssText = m._wysiwygOriginCssText, v.style.cssText = m._codeOriginCssText, d.style.cssText = "", h.style.cssText = m._editorAreaOriginCssText, r.style.cssText = m._originCssText, u.body.style.overflow = m._bodyOverflow, i.height === "auto" && !i.codeMirrorEditor && g._codeViewAutoHeight(), i.toolbarContainer && i.toolbarContainer.appendChild(d), i.stickyToolbar > -1 && o.removeClass(d, "se-toolbar-sticky"), m._fullScreenAttrs.sticky && !i.toolbarContainer && (m._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", o.addClass(d, "se-toolbar-sticky")), this._isInline = m._fullScreenAttrs.inline, this._isBalloon = m._fullScreenAttrs.balloon, this._isInline && g._showToolbarInline(), i.toolbarContainer && o.removeClass(d, "se-toolbar-balloon"), g.onScroll_window(), a && o.changeElement(a.firstElementChild, b.expansion), e.element.topArea.style.marginTop = "", o.removeClass(this._styleCommandMap.fullScreen, "active")) : (m.isFullScreen = !0, m._fullScreenAttrs.inline = this._isInline, m._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), i.toolbarContainer && e.element.relative.insertBefore(d, h), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (m._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", o.removeClass(d, "se-toolbar-sticky")), m._bodyOverflow = u.body.style.overflow, u.body.style.overflow = "hidden", m._editorAreaOriginCssText = h.style.cssText, m._wysiwygOriginCssText = p.style.cssText, m._codeOriginCssText = v.style.cssText, h.style.cssText = d.style.cssText = "", p.style.cssText = (p.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + i._editorStyles.editor, v.style.cssText = (v.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], d.style.width = p.style.height = v.style.height = "100%", d.style.position = "relative", d.style.display = "block", m.innerHeight_fullScreen = f.innerHeight - d.offsetHeight, h.style.height = m.innerHeight_fullScreen - i.fullScreenOffset + "px", a && o.changeElement(a.firstElementChild, b.reduction), i.iframe && i.height === "auto" && (h.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = i.fullScreenOffset + "px", o.addClass(this._styleCommandMap.fullScreen, "active")), y && k.toolbar.hide(), typeof k.toggleFullScreen == "function" && k.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const a = o.createElement("IFRAME");
      a.style.display = "none", u.body.appendChild(a);
      const r = i.printTemplate ? i.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), d = o.getIframeDocument(a), h = this._wd;
      if (i.iframe) {
        const p = i._printClass !== null ? 'class="' + i._printClass + '"' : i.fullPage ? o.getAttributesToString(h.body, ["contenteditable"]) : 'class="' + i._editableClass + '"';
        d.write(
          "<!DOCTYPE html><html><head>" + h.head.innerHTML + "</head><body " + p + ">" + r + "</body></html>"
        );
      } else {
        const p = u.head.getElementsByTagName("link"), v = u.head.getElementsByTagName("style");
        let m = "";
        for (let y = 0, _ = p.length; y < _; y++)
          m += p[y].outerHTML;
        for (let y = 0, _ = v.length; y < _; y++)
          m += v[y].outerHTML;
        d.write(
          "<!DOCTYPE html><html><head>" + m + '</head><body class="' + (i._printClass !== null ? i._printClass : i._editableClass) + '">' + r + "</body></html>"
        );
      }
      this.showLoading(), f.setTimeout(function() {
        try {
          if (a.focus(), o.isIE_Edge || o.isChromium || u.documentMode || f.StyleMedia)
            try {
              a.contentWindow.document.execCommand("print", !1, null);
            } catch {
              a.contentWindow.print();
            }
          else
            a.contentWindow.print();
        } catch (p) {
          throw Error("[SUNEDITOR.core.print.fail] error: " + p);
        } finally {
          c.closeLoading(), o.removeItem(a);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      c.submenuOff(), c.containerOff(), c.controllersOff();
      const a = i.previewTemplate ? i.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), r = f.open("", "_blank");
      r.mimeType = "text/html";
      const d = this._wd;
      if (i.iframe) {
        const h = i._printClass !== null ? 'class="' + i._printClass + '"' : i.fullPage ? o.getAttributesToString(d.body, ["contenteditable"]) : 'class="' + i._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + d.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + h + ">" + a + "</body></html>"
        );
      } else {
        const h = u.head.getElementsByTagName("link"), p = u.head.getElementsByTagName("style");
        let v = "";
        for (let m = 0, y = h.length; m < y; m++)
          v += h[m].outerHTML;
        for (let m = 0, y = p.length; m < y; m++)
          v += p[m].outerHTML;
        r.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + l.toolbar.preview + "</title>" + v + '</head><body class="' + (i._printClass !== null ? i._printClass : i._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + a + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(a) {
      const r = a === "rtl", d = this._prevRtl !== r;
      this._prevRtl = i.rtl = r, d && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && o.changeElement(e.tool.indent.firstElementChild, b.indent), e.tool.outdent && o.changeElement(e.tool.outdent.firstElementChild, b.outdent));
      const h = e.element;
      r ? (o.addClass(h.topArea, "se-rtl"), o.addClass(h.wysiwygFrame, "se-rtl")) : (o.removeClass(h.topArea, "se-rtl"), o.removeClass(h.wysiwygFrame, "se-rtl"));
      const p = o.getListChildren(h.wysiwyg, function(m) {
        return o.isFormatElement(m) && (m.style.marginRight || m.style.marginLeft || m.style.textAlign);
      });
      for (let m = 0, y = p.length, _, C, w; m < y; m++)
        _ = p[m], w = _.style.marginRight, C = _.style.marginLeft, (w || C) && (_.style.marginRight = C, _.style.marginLeft = w), w = _.style.textAlign, w === "left" ? _.style.textAlign = "right" : w === "right" && (_.style.textAlign = "left");
      const v = e.tool;
      v.dir && (o.changeTxt(v.dir.querySelector(".se-tooltip-text"), l.toolbar[i.rtl ? "dir_ltr" : "dir_rtl"]), o.changeElement(v.dir.firstElementChild, b[i.rtl ? "dir_ltr" : "dir_rtl"])), v.dir_ltr && (r ? o.removeClass(v.dir_ltr, "active") : o.addClass(v.dir_ltr, "active")), v.dir_rtl && (r ? o.addClass(v.dir_rtl, "active") : o.removeClass(v.dir_rtl, "active"));
    },
    /**
     * @description Sets the HTML string
     * @param {String|undefined} html HTML string
     */
    setContents: function(a) {
      this.removeRange();
      const r = a == null ? "" : this.convertContentsForEditor(a, null, null);
      if (!this._variable.isCodeView)
        e.element.wysiwyg.innerHTML = r, this._resetComponents(), this.history.push(!1);
      else {
        const d = this.convertHTMLForCodeView(r, !1);
        this._setCodeView(d);
      }
    },
    /**
     * @description Sets the contents of the iframe's head tag and body tag when using the "iframe" or "fullPage" option.
     * @param {Object} ctx { head: HTML string, body: HTML string}
     */
    setIframeContents: function(a) {
      if (!i.iframe) return !1;
      a.head && (this._wd.head.innerHTML = this.options.__allowedScriptTag ? a.head : a.head.replace(this.__scriptTagRegExp, "")), a.body && (this._wd.body.innerHTML = this.convertContentsForEditor(a.body)), this._resetComponents();
    },
    /**
     * @description Gets the current contents
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {Object}
     */
    getContents: function(a) {
      const r = this.cleanHTML(e.element.wysiwyg.innerHTML, null, null), d = o.createElement("DIV");
      d.innerHTML = r;
      const h = o.getListChildren(d, function(p) {
        return p.hasAttribute("contenteditable");
      });
      for (let p = 0, v = h.length; p < v; p++)
        h[p].removeAttribute("contenteditable");
      if (i.fullPage && !a) {
        const p = o.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + p + ">" + d.innerHTML + "</body></html>";
      } else
        return d.innerHTML;
    },
    /**
     * @description Gets the current contents with containing parent div(div.sun-editor-editable).
     * <div class="sun-editor-editable">{contents}</div>
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getFullContents: function(a) {
      return '<div class="sun-editor-editable' + (i.rtl ? " se-rtl" : "") + '">' + this.getContents(a) + "</div>";
    },
    /**
     * @description Returns HTML string according to tag type and configuration.
     * Use only "cleanHTML"
     * @param {Node} node Node
     * @param {Boolean} requireFormat If true, text nodes that do not have a format node is wrapped with the format tag.
     * @private
     */
    _makeLine: function(a, r) {
      const d = i.defaultTag;
      if (a.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(a.nodeName)) return "";
        if (/__se__tag/.test(a.className)) return a.outerHTML;
        const h = o.getListChildNodes(a, function(p) {
          return o.isSpanWithoutAttr(p) && !o.getParentElement(p, o.isNotCheckingNode);
        }) || [];
        for (let p = h.length - 1; p >= 0; p--)
          h[p].outerHTML = h[p].innerHTML;
        return !r || o.isFormatElement(a) || o.isRangeFormatElement(a) || o.isComponent(a) || o.isFigures(a) || o.isAnchor(a) && o.isMedia(a.firstElementChild) ? o.isSpanWithoutAttr(a) ? a.innerHTML : a.outerHTML : "<" + d + ">" + (o.isSpanWithoutAttr(a) ? a.innerHTML : a.outerHTML) + "</" + d + ">";
      }
      if (a.nodeType === 3) {
        if (!r) return o._HTMLConvertor(a.textContent);
        const h = a.textContent.split(/\n/g);
        let p = "";
        for (let v = 0, m = h.length, y; v < m; v++)
          y = h[v].trim(), y.length > 0 && (p += "<" + d + ">" + o._HTMLConvertor(y) + "</" + d + ">");
        return p;
      }
      return a.nodeType === 8 && this._allowHTMLComments ? "<!--" + a.textContent.trim() + "-->" : "";
    },
    /**
     * @description Removes attribute values such as style and converts tags that do not conform to the "html5" standard.
     * @param {String} text 
     * @returns {String} HTML string
     * @private
     */
    _tagConvertor: function(a) {
      if (!this._disallowedTextTagsRegExp) return a;
      const r = i._textTagsMap;
      return a.replace(this._disallowedTextTagsRegExp, function(d, h, p, v) {
        return h + (typeof r[p] == "string" ? r[p] : p) + (v ? " " + v : "");
      });
    },
    /**
     * @description Delete disallowed tags
     * @param {String} html HTML string
     * @returns {String}
     * @private
     */
    _deleteDisallowedTags: function(a) {
      return a = a.replace(this.__disallowedTagsRegExp, "").replace(/<[a-z0-9]+\:[a-z0-9]+[^>^\/]*>[^>]*<\/[a-z0-9]+\:[a-z0-9]+>/gi, ""), /\bfont\b/i.test(this.options._editorTagsWhitelist) || (a = a.replace(/(<\/?)font(\s?)/gi, "$1span$2")), a.replace(this.editorTagsWhitelistRegExp, "").replace(this.editorTagsBlacklistRegExp, "");
    },
    _convertFontSize: function(a, r) {
      const d = this._w.Math, h = r.match(/(\d+(?:\.\d+)?)(.+)/), p = h ? h[1] * 1 : o.fontValueMap[r], v = h ? h[2] : "rem";
      let m = p;
      switch (/em/.test(v) ? m = d.round(p / 0.0625) : v === "pt" ? m = d.round(p * 1.333) : v === "%" && (m = p / 100), a) {
        case "em":
        case "rem":
        case "%":
          return (m * 0.0625).toFixed(2) + a;
        case "pt":
          return d.round(m / 1.333) + a;
        default:
          return m + a;
      }
    },
    _cleanStyle: function(a, r, d) {
      let h = (a.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(d) && !h && (a.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const p = (a.match(/\ssize="([^"]+)"/i) || [])[1], v = (a.match(/\sface="([^"]+)"/i) || [])[1], m = (a.match(/\scolor="([^"]+)"/i) || [])[1];
        (p || v || m) && (h = 'style="' + (p ? "font-size:" + this.util.getNumber(p / 3.333, 1) + "rem;" : "") + (v ? "font-family:" + v + ";" : "") + (m ? "color:" + m + ";" : "") + '"');
      }
      if (h) {
        r || (r = []);
        const p = h.replace(/&quot;/g, "").match(this._cleanStyleRegExp[d]);
        if (p) {
          const v = [];
          for (let m = 0, y = p.length, _; m < y; m++)
            if (_ = p[m].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), _ && !/inherit|initial|revert|unset/i.test(_[3])) {
              const C = o.kebabToCamelCase(_[1].trim()), w = this.wwComputedStyle[C] ? this.wwComputedStyle[C].replace(/"/g, "") : "", z = _[3].trim();
              switch (C) {
                case "fontFamily":
                  if (!i.plugins.font || i.font.indexOf(z) === -1) continue;
                  break;
                case "fontSize":
                  if (!i.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(_[0]) || (_[0] = _[0].replace((_[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, i.fontSizeUnit)));
                  break;
                case "color":
                  if (!i.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(z)) continue;
                  break;
                case "backgroundColor":
                  if (!i.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(z)) continue;
                  break;
              }
              w !== z && v.push(_[0]);
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
    _cleanTags: function(a, r, d) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(r)) return r;
      let h = null;
      const p = d.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), v = this._attributesTagsBlacklist[p];
      r = r.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), v ? r = r.replace(v, "") : r = r.replace(this._attributesBlacklistRegExp, "");
      const m = this._attributesTagsWhitelist[p];
      if (m ? h = r.match(m) : h = r.match(a ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), a || p === "span" || p === "li" || this._cleanStyleRegExp[p])
        if (p === "a") {
          const y = r.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          y && (h || (h = []), h.push(y[0]));
        } else (!h || !/style=/i.test(h.toString())) && ((p === "span" || p === "li") && (h = this._cleanStyle(r, h, "span")), this._cleanStyleRegExp[p] ? h = this._cleanStyle(r, h, p) : /^(P|DIV|H[1-6]|PRE)$/i.test(p) && (h = this._cleanStyle(r, h, "format")));
      else {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        y && !h ? h = [y[0]] : y && !h.some(function(_) {
          return /^style/.test(_.trim());
        }) && h.push(y[0]);
      }
      if (o.isFigures(p)) {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        h || (h = []), y && h.push(y[0]);
      }
      if (h)
        for (let y = 0, _ = h.length, C; y < _; y++)
          C = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(h[y].trim()) ? "" : h[y], d += (/^\s/.test(C) ? "" : " ") + C;
      return d;
    },
    /**
     * @description Determines if formatting is required and returns a domTree
     * @param {Element} dom documentFragment
     * @returns {Element}
     * @private
     */
    _editFormat: function(a) {
      let r = "", d;
      const h = a.childNodes;
      for (let p = 0, v = h.length, m; p < v; p++)
        m = h[p], m.nodeType === 8 ? r += "<!-- " + m.textContent + " -->" : !o.isFormatElement(m) && !o.isRangeFormatElement(m) && !o.isComponent(m) && !/meta/i.test(m.nodeName) ? (d || (d = o.createElement(i.defaultTag)), o.isTextStyleElement(m) && m.removeAttribute("style"), d.appendChild(m), p--, v--) : (d && (r += d.outerHTML, d = null), r += m.outerHTML);
      return d && (r += d.outerHTML), u.createRange().createContextualFragment(r);
    },
    _convertListCell: function(a) {
      let r = "";
      for (let d = 0, h = a.length, p; d < h; d++)
        p = a[d], p.nodeType === 1 ? o.isList(p) ? r += p.innerHTML : o.isListCell(p) ? r += p.outerHTML : o.isFormatElement(p) ? r += "<li>" + (p.innerHTML.trim() || "<br>") + "</li>" : o.isRangeFormatElement(p) && !o.isTable(p) ? r += this._convertListCell(p) : r += "<li>" + p.outerHTML + "</li>" : r += "<li>" + (p.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(a) {
      let r = !1;
      for (let d = 0, h = a.length, p; d < h; d++)
        if (p = a[d], p.nodeType === 1 && !o.isTextStyleElement(p) && !o.isBreak(p) && !this.__disallowedTagNameRegExp.test(p.nodeName)) {
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
    cleanHTML: function(a, r, d) {
      if (!i.strictMode) return o.htmlCompress(a);
      a = this._deleteDisallowedTags(this._parser.parseFromString(o.htmlCompress(a), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const h = u.createRange().createContextualFragment(a);
      try {
        o._consistencyCheckOfHTML(h, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, i.strictHTMLValidation);
      } catch (y) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + y);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const y = h.querySelectorAll(this.managedTagsInfo.query);
        for (let _ = 0, C = y.length, w, z; _ < C; _++) {
          z = [].slice.call(y[_].classList);
          for (let T = 0, B = z.length; T < B; T++)
            if (w = this.managedTagsInfo.map[z[T]], w) {
              w(y[_]);
              break;
            }
        }
      }
      let p = h.childNodes, v = "";
      const m = this._isFormatData(p);
      m && (p = this._editFormat(h).childNodes);
      for (let y = 0, _ = p.length, C; y < _; y++) {
        if (C = p[y], this.__allowedScriptRegExp.test(C.nodeName)) {
          v += C.outerHTML;
          continue;
        }
        v += this._makeLine(C, m);
      }
      return v = o.htmlRemoveWhiteSpace(v), v ? (r && (v = v.replace(typeof r == "string" ? o.createTagsWhitelist(r) : r, "")), d && (v = v.replace(typeof d == "string" ? o.createTagsBlacklist(d) : d, ""))) : v = a, this._tagConvertor(v);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(a) {
      if (!i.strictMode) return o.htmlCompress(a);
      a = this._deleteDisallowedTags(this._parser.parseFromString(o.htmlCompress(a), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0));
      const r = u.createRange().createContextualFragment(a);
      try {
        o._consistencyCheckOfHTML(r, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, i.strictHTMLValidation);
      } catch (v) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + v);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const v = r.querySelectorAll(this.managedTagsInfo.query);
        for (let m = 0, y = v.length, _, C; m < y; m++) {
          C = [].slice.call(v[m].classList);
          for (let w = 0, z = C.length; w < z; w++)
            if (_ = this.managedTagsInfo.map[C[w]], _) {
              _(v[m]);
              break;
            }
        }
      }
      const d = r.childNodes;
      let h = "", p = null;
      for (let v = 0, m; v < d.length; v++) {
        if (m = d[v], this.__allowedScriptRegExp.test(m.nodeName)) {
          h += m.outerHTML;
          continue;
        }
        if (!o.isFormatElement(m) && !o.isRangeFormatElement(m) && !o.isComponent(m) && !o.isFigures(m) && m.nodeType !== 8 && !/__se__tag/.test(m.className)) {
          if (p || (p = o.createElement(i.defaultTag)), p.appendChild(m), v--, d[v + 1] && !o.isFormatElement(d[v + 1]))
            continue;
          m = p, p = null;
        }
        p && (h += this._makeLine(p, !0), p = null), h += this._makeLine(m, !0);
      }
      return p && (h += this._makeLine(p, !0)), h.length === 0 ? "<" + i.defaultTag + "><br></" + i.defaultTag + ">" : (h = o.htmlRemoveWhiteSpace(h), this._tagConvertor(h));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(a, r) {
      let d = "";
      const h = f.RegExp, p = new h("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), v = typeof a == "string" ? u.createRange().createContextualFragment(a) : a, m = (function(C) {
        return this.isFormatElement(C) || this.isComponent(C);
      }).bind(o), y = r ? "" : `
`;
      let _ = r ? 0 : this._variable.codeIndent * 1;
      return _ = _ > 0 ? new f.Array(_ + 1).join(" ") : "", (function C(w, z) {
        const T = w.childNodes, B = p.test(w.nodeName), N = B ? z : "";
        for (let $ = 0, O = T.length, U, M, P, E, H, I; $ < O; $++) {
          if (U = T[$], E = p.test(U.nodeName), M = E ? y : "", P = m(U) && !B && !/^(TH|TD)$/i.test(w.nodeName) ? y : "", U.nodeType === 8) {
            d += `
<!-- ` + U.textContent.trim() + " -->" + M;
            continue;
          }
          if (U.nodeType === 3) {
            o.isList(U.parentElement) || (d += o._HTMLConvertor(/^\n+$/.test(U.data) ? "" : U.data));
            continue;
          }
          if (U.childNodes.length === 0) {
            d += (/^HR$/i.test(U.nodeName) ? y : "") + (/^PRE$/i.test(U.parentElement.nodeName) && /^BR$/i.test(U.nodeName) ? "" : N) + U.outerHTML + M;
            continue;
          }
          U.outerHTML ? (H = U.nodeName.toLowerCase(), I = N || E ? z : "", d += (P || (B ? "" : M)) + I + U.outerHTML.match(h("<" + H + "[^>]*>", "i"))[0] + M, C(U, z + _), d += (/\n$/.test(d) ? I : "") + "</" + H + ">" + (P || M || B || /^(TH|TD)$/i.test(U.nodeName) ? y : "")) : d += new f.XMLSerializer().serializeToString(U);
        }
      })(v, ""), d.trim() + y;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(a, r, d) {
      u.addEventListener(a, r, d), i.iframe && this._wd.addEventListener(a, r);
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(a, r) {
      u.removeEventListener(a, r), i.iframe && this._wd.removeEventListener(a, r);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(a) {
      const r = i.maxCharCount, d = i.charCounterType;
      let h = 0;
      if (a && (h = this.getCharLength(a, d)), this._setCharCount(), r > 0) {
        let p = !1;
        const v = k.getCharCount(d);
        if (v > r) {
          if (p = !0, h > 0) {
            this._editorRange();
            const m = this.getRange(), y = m.endOffset - 1, _ = this.getSelectionNode().textContent, C = m.endOffset - (v - r);
            this.getSelectionNode().textContent = _.slice(0, C < 0 ? 0 : C) + _.slice(m.endOffset, _.length), this.setRange(m.endContainer, y, m.endContainer, y);
          }
        } else v + h > r && (p = !0);
        if (p && (this._callCounterBlink(), h > 0))
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
    checkCharCount: function(a, r) {
      if (i.maxCharCount) {
        const d = r || i.charCounterType, h = this.getCharLength(typeof a == "string" ? a : this._charTypeHTML && a.nodeType === 1 ? a.outerHTML : a.textContent, d);
        if (h > 0 && h + k.getCharCount(d) > i.maxCharCount)
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
    getCharLength: function(a, r) {
      return /byte/.test(r) ? o.getByteLength(a) : a.length;
    },
    /**
     * @description Reset buttons of the responsive toolbar.
     */
    resetResponsiveToolbar: function() {
      c.controllersOff();
      const a = g._responsiveButtonSize;
      if (a) {
        let r = 0;
        (c._isBalloon || c._isInline) && i.toolbarWidth === "auto" ? r = e.element.topArea.offsetWidth : r = e.element.toolbar.offsetWidth;
        let d = "default";
        for (let h = 1, p = a.length; h < p; h++)
          if (r < a[h]) {
            d = a[h] + "";
            break;
          }
        g._responsiveCurrentSize !== d && (g._responsiveCurrentSize = d, k.setToolbarButtons(g._responsiveButtons[d]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && f.setTimeout((function(a, r) {
        this.textContent && a && (this.textContent = a.getCharCount(r.charCounterType));
      }).bind(e.element.charCounter, k, i), 0);
    },
    /**
     * @description The character counter blinks.
     * @private
     */
    _callCounterBlink: function() {
      const a = e.element.charWrapper;
      a && !o.hasClass(a, "se-blink") && (o.addClass(a, "se-blink"), f.setTimeout(function() {
        o.removeClass(a, "se-blink");
      }, 600));
    },
    /**
     * @description Check the components such as image and video and modify them according to the format.
     * @private
     */
    _checkComponents: function() {
      for (let a = 0, r = this._fileInfoPluginsCheck.length; a < r; a++)
        this._fileInfoPluginsCheck[a]();
    },
    /**
     * @description Initialize the information of the components.
     * @private
     */
    _resetComponents: function() {
      for (let a = 0, r = this._fileInfoPluginsReset.length; a < r; a++)
        this._fileInfoPluginsReset[a]();
    },
    /**
     * @description Set method in the code view area
     * @param {String} value HTML string
     * @private
     */
    _setCodeView: function(a) {
      i.codeMirrorEditor ? i.codeMirrorEditor.getDoc().setValue(a) : e.element.code.value = a;
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
    _setKeyEffect: function(a) {
      const r = this.commandMap, d = this.activePlugins;
      for (let h in r)
        a.indexOf(h) > -1 || !o.hasOwn(r, h) || (d.indexOf(h) > -1 ? n[h].active.call(this, null) : r.OUTDENT && /^OUTDENT$/i.test(h) ? o.isImportantDisabled(r.OUTDENT) || r.OUTDENT.setAttribute("disabled", !0) : r.INDENT && /^INDENT$/i.test(h) ? o.isImportantDisabled(r.INDENT) || r.INDENT.removeAttribute("disabled") : o.removeClass(r[h], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(a, r) {
      const d = f.RegExp;
      this._ww = i.iframe ? e.element.wysiwygFrame.contentWindow : f, this._wd = u, this._charTypeHTML = i.charCounterType === "byte-html", this.wwComputedStyle = f.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = o.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + o.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(E) {
        return this.test(E) ? E : "";
      }).bind(i.allowedClassNames);
      const h = i.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new d("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new d("<(" + h + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + h + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new d("^(" + h + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new d("^" + (i.__allowedScriptTag ? "script" : "") + "$", "i"), !i.iframe && typeof f.ShadowRoot == "function") {
        let E = e.element.wysiwygFrame;
        for (; E; ) {
          if (E.shadowRoot) {
            this._shadowRoot = E.shadowRoot;
            break;
          } else if (E instanceof f.ShadowRoot) {
            this._shadowRoot = E;
            break;
          }
          E = E.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const p = f.Object.keys(i._textTagsMap), v = i.addTagsWhitelist ? i.addTagsWhitelist.split("|").filter(function(E) {
        return /b|i|ins|s|strike/i.test(E);
      }) : [];
      for (let E = 0; E < v.length; E++)
        p.splice(p.indexOf(v[E].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = p.length === 0 ? null : new d("(<\\/?)(" + p.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const m = function(E, H) {
        return E ? E === "*" ? "[a-z-]+" : H ? E + "|" + H : E : "^";
      }, C = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", w = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = i._editorTagsWhitelist.indexOf("//") > -1 || i._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new d("^(" + m(i._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new d("^(" + (i.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = o.createTagsWhitelist(m(i._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = o.createTagsBlacklist(i.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = o.createTagsWhitelist(m(i.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = o.createTagsBlacklist(i.pasteTagsBlacklist);
      const z = '\\s*=\\s*(")[^"]*\\1', T = i.attributesWhitelist;
      let B = {}, N = "";
      if (T)
        for (let E in T)
          !o.hasOwn(T, E) || /^on[a-z]+$/i.test(T[E]) || (E === "all" ? N = m(T[E], C) : B[E] = new d("\\s(?:" + m(T[E], C) + ")" + z, "ig"));
      this._attributesWhitelistRegExp = new d("\\s(?:" + (N || C + "|" + w) + ")" + z, "ig"), this._attributesWhitelistRegExp_all_data = new d("\\s(?:" + ((N || C) + "|data-[a-z0-9\\-]+") + ")" + z, "ig"), this._attributesTagsWhitelist = B;
      const $ = i.attributesBlacklist;
      if (B = {}, N = "", $)
        for (let E in $)
          o.hasOwn($, E) && (E === "all" ? N = m($[E], "") : B[E] = new d("\\s(?:" + m($[E], "") + ")" + z, "ig"));
      this._attributesBlacklistRegExp = new d("\\s(?:" + (N || "^") + ")" + z, "ig"), this._attributesTagsBlacklist = B, this._isInline = /inline/i.test(i.mode), this._isBalloon = /balloon|balloon-always/i.test(i.mode), this._isBalloonAlways = /balloon-always/i.test(i.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const O = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let U = [], M, P;
      for (let E in n)
        if (o.hasOwn(n, E)) {
          if (M = n[E], P = t[E], (M.active || M.action) && P && this.callPlugin(E, null, P), typeof M.checkFileInfo == "function" && typeof M.resetFileInfo == "function" && (this.callPlugin(E, null, P), this._fileInfoPluginsCheck.push(M.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(M.resetFileInfo.bind(this))), f.Array.isArray(M.fileTags)) {
            const H = M.fileTags;
            this.callPlugin(E, null, P), this._fileManager.tags = this._fileManager.tags.concat(H), U.push(E);
            for (let I = 0, W = H.length; I < W; I++)
              this._fileManager.pluginMap[H[I].toLowerCase()] = E;
          }
          if (M.managedTags) {
            const H = M.managedTags();
            O.push("." + H.className), this.managedTagsInfo.map[H.className] = H.method.bind(this);
          }
        }
      this.managedTagsInfo.query = O.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new d("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new d("^(" + (U.length === 0 ? "^" : U.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = Sr(this, this._onChange_historyStack.bind(this)), this.addModule([hn]), i.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, i._editorStyles.editor && (e.element.wysiwyg.style.cssText = i._editorStyles.editor), i.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(a, r);
    },
    /**
     * @description Caching basic buttons to use
     * @private
     */
    _cachingButtons: function() {
      this.codeViewDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-code-view-enabled"]):not([data-display="MORE"])'), this.resizingDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-resizing-enabled"]):not([data-display="MORE"])');
      const a = e.tool, r = this.commandMap;
      r.INDENT = a.indent, r.OUTDENT = a.outdent, r[i.textTags.bold.toUpperCase()] = a.bold, r[i.textTags.underline.toUpperCase()] = a.underline, r[i.textTags.italic.toUpperCase()] = a.italic, r[i.textTags.strike.toUpperCase()] = a.strike, r[i.textTags.sub.toUpperCase()] = a.subscript, r[i.textTags.sup.toUpperCase()] = a.superscript, this._styleCommandMap = {
        fullScreen: a.fullScreen,
        showBlocks: a.showBlocks,
        codeView: a.codeView
      }, this._saveButtonStates();
    },
    /**
     * @description Initializ wysiwyg area (Only called from core._init)
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _initWysiwygArea: function(a, r) {
      e.element.wysiwyg.innerHTML = a ? r : this.convertContentsForEditor((typeof r == "string" ? r : /^TEXTAREA$/i.test(e.element.originElement.nodeName) ? e.element.originElement.value : e.element.originElement.innerHTML) || "");
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
      this.hasFocus && g._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), k.onChange && k.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && g._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      this._iframeAuto ? f.setTimeout(function() {
        const a = c._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = a + "px", o.isResizeObserverSupported || c.__callResizeFunction(a, null);
      }) : o.isResizeObserverSupported || c.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(a, r) {
      a = a === -1 ? r.borderBoxSize && r.borderBoxSize[0] ? r.borderBoxSize[0].blockSize : r.contentRect.height + this._editorHeightPadding : a, this._editorHeight !== a && (typeof k.onResizeEditor == "function" && k.onResizeEditor(a, this._editorHeight, c, r), this._editorHeight = a);
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
        const a = e.element.wysiwyg;
        !o.onlyZeroWidthSpace(a.textContent) || a.querySelector(o._allowedEmptyNodeList) || (a.innerText.match(/\n/g) || "").length > 1 ? this._placeholder.style.display = "none" : this._placeholder.style.display = "block";
      }
    },
    /**
     * @description If there is no default format, add a format and move "selection".
     * @param {String|null} formatName Format tag name (default: 'P')
     * @returns {undefined|null}
     * @private
     */
    _setDefaultFormat: function(a) {
      if (this._fileManager.pluginRegExp.test(this.currentControllerName)) return;
      const r = this.getRange(), d = r.commonAncestorContainer, h = r.startContainer, p = o.getRangeFormatElement(d, null);
      let v, m, y;
      const _ = o.getParentElement(d, o.isComponent);
      if (!(_ && !o.isTable(_))) {
        if (d.nodeType === 1 && d.getAttribute("data-se-embed") === "true") {
          let C = d.nextElementSibling;
          o.isFormatElement(C) || (C = this.appendFormatTag(d, i.defaultTag)), this.setRange(C.firstChild, 0, C.firstChild, 0);
          return;
        }
        if (!((o.isRangeFormatElement(h) || o.isWysiwygDiv(h)) && (o.isComponent(h.children[r.startOffset]) || o.isComponent(h.children[r.startOffset - 1])))) {
          if (o.getParentElement(d, o.isNotCheckingNode)) return null;
          if (p) {
            y = o.createElement(a || i.defaultTag), y.innerHTML = p.innerHTML, y.childNodes.length === 0 && (y.innerHTML = o.zeroWidthSpace), p.innerHTML = y.outerHTML, y = p.firstChild, v = o.getEdgeChildNodes(y, null).sc, v || (v = o.createTextNode(o.zeroWidthSpace), y.insertBefore(v, y.firstChild)), m = v.textContent.length, this.setRange(v, m, v, m);
            return;
          }
          if (o.isRangeFormatElement(d) && d.childNodes.length <= 1) {
            let C = null;
            d.childNodes.length === 1 && o.isBreak(d.firstChild) ? C = d.firstChild : (C = o.createTextNode(o.zeroWidthSpace), d.appendChild(C)), this.setRange(C, 1, C, 1);
            return;
          }
          try {
            if (d.nodeType === 3 && (y = o.createElement(a || i.defaultTag), d.parentNode.insertBefore(y, d), y.appendChild(d)), o.isWysiwygDiv(d)) {
              y = o.createElement(a || i.defaultTag), y.innerHTML = d.innerHTML, d.innerHTML = "", d.appendChild(y), this.effectNode = null, this.setRange(y, 1, y, 1);
              return;
            }
            if (y && (o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling)), o.isBreak(v)) {
              const C = o.createTextNode(o.zeroWidthSpace);
              v.parentNode.insertBefore(C, v), v = C;
            }
          } catch {
            this.execCommand("formatBlock", !1, a || i.defaultTag), this.removeRange(), this._editorRange(), this.effectNode = null;
            return;
          }
          if (y && (o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling), o.isBreak(v))) {
            const C = o.createTextNode(o.zeroWidthSpace);
            v.parentNode.insertBefore(C, v), v = C;
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
    _setOptionsInit: function(a, r) {
      this.context = e = ol(a.originElement, this._getConstructed(a), i), this._componentsInfoReset = !0, this._editorInit(!0, r);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(a, r) {
      this._init(a, r), g._addEvent(), this._setCharCount(), g._offStickyToolbar(), g.onResize_window(), e.element.toolbar.style.visibility = "";
      const d = i.frameAttrbutes;
      for (let h in d)
        e.element.wysiwyg.setAttribute(h, d[h]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), f.setTimeout(function() {
        typeof c._resourcesStateChange == "function" && (g._resizeObserver && g._resizeObserver.observe(e.element.wysiwygFrame), g._toolbarObserver && g._toolbarObserver.observe(e.element._toolbarShadow), c._resourcesStateChange(), typeof k.onload == "function" && k.onload(c, a));
      });
    },
    /**
     * @description Create and return an object to cache the new context.
     * @param {Element} contextEl context.element
     * @returns {Object}
     * @private
     */
    _getConstructed: function(a) {
      return {
        _top: a.topArea,
        _relative: a.relative,
        _toolBar: a.toolbar,
        _toolbarShadow: a._toolbarShadow,
        _menuTray: a._menuTray,
        _editorArea: a.editorArea,
        _wysiwygArea: a.wysiwygFrame,
        _codeArea: a.code,
        _placeholder: a.placeholder,
        _resizingBar: a.resizingBar,
        _navigation: a.navigation,
        _charCounter: a.charCounter,
        _charWrapper: a.charWrapper,
        _loading: a.loading,
        _lineBreaker: a.lineBreaker,
        _lineBreaker_t: a.lineBreaker_t,
        _lineBreaker_b: a.lineBreaker_b,
        _resizeBack: a.resizeBackground,
        _stickyDummy: a._stickyDummy,
        _arrow: a._arrow
      };
    }
  }, g = {
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
    _frontZeroWidthReg: new f.RegExp(o.zeroWidthSpace + "+", ""),
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
    _shortcutCommand: function(a, r) {
      let d = null;
      const h = g._keyCodeShortcut[a];
      switch (h) {
        case "A":
          d = "selectAll";
          break;
        case "B":
          i.shortcutsDisable.indexOf("bold") === -1 && (d = "bold");
          break;
        case "S":
          r && i.shortcutsDisable.indexOf("strike") === -1 ? d = "strike" : !r && i.shortcutsDisable.indexOf("save") === -1 && (d = "save");
          break;
        case "U":
          i.shortcutsDisable.indexOf("underline") === -1 && (d = "underline");
          break;
        case "I":
          i.shortcutsDisable.indexOf("italic") === -1 && (d = "italic");
          break;
        case "Z":
          i.shortcutsDisable.indexOf("undo") === -1 && (r ? d = "redo" : d = "undo");
          break;
        case "Y":
          i.shortcutsDisable.indexOf("undo") === -1 && (d = "redo");
          break;
        case "[":
          i.shortcutsDisable.indexOf("indent") === -1 && (d = i.rtl ? "indent" : "outdent");
          break;
        case "]":
          i.shortcutsDisable.indexOf("indent") === -1 && (d = i.rtl ? "outdent" : "indent");
          break;
      }
      return d ? (c.commandHandler(c.commandMap[d], d), !0) : !!h;
    },
    _applyTagEffects: function() {
      if (o.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let a = c.getSelectionNode();
      if (a === c.effectNode) return;
      c.effectNode = a;
      const r = i.rtl ? "marginRight" : "marginLeft", d = c.commandMap, h = g._onButtonsCheck, p = [], v = [], m = c.activePlugins, y = m.length;
      let _ = "";
      for (; a.firstChild; )
        a = a.firstChild;
      for (let C = a; !o.isWysiwygDiv(C) && C; C = C.parentNode)
        if (!(C.nodeType !== 1 || o.isBreak(C))) {
          if (_ = C.nodeName.toUpperCase(), v.push(_), !c.isReadOnly)
            for (let w = 0, z; w < y; w++)
              z = m[w], p.indexOf(z) === -1 && n[z].active.call(c, C) && p.push(z);
          if (o.isFormatElement(C)) {
            p.indexOf("OUTDENT") === -1 && d.OUTDENT && !o.isImportantDisabled(d.OUTDENT) && (o.isListCell(C) || C.style[r] && o.getNumber(C.style[r], 0) > 0) && (p.push("OUTDENT"), d.OUTDENT.removeAttribute("disabled")), p.indexOf("INDENT") === -1 && d.INDENT && !o.isImportantDisabled(d.INDENT) && (p.push("INDENT"), o.isListCell(C) && !C.previousElementSibling ? d.INDENT.setAttribute("disabled", !0) : d.INDENT.removeAttribute("disabled"));
            continue;
          }
          h && h.test(_) && (p.push(_), o.addClass(d[_], "active"));
        }
      c._setKeyEffect(p), c._variable.currentNodes = v.reverse(), c._variable.currentNodesMap = p, i.showPathLabel && (e.element.navigation.textContent = c._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(a) {
      let r = a.target;
      if (c._bindControllersOff && a.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? c._antiBlur = !1 : a.preventDefault(), o.getParentElement(r, ".se-submenu"))
        a.stopPropagation(), c._notHideToolbar = !0;
      else {
        let d = r.getAttribute("data-command"), h = r.className;
        for (; !d && !/se-menu-list/.test(h) && !/sun-editor-common/.test(h); )
          r = r.parentNode, d = r.getAttribute("data-command"), h = r.className;
        (d === c._submenuName || d === c._containerName) && a.stopPropagation();
      }
    },
    addGlobalEvent: function(a, r, d) {
      return i.iframe && c._ww.addEventListener(a, r, d), c._w.addEventListener(a, r, d), {
        type: a,
        listener: r,
        useCapture: d
      };
    },
    removeGlobalEvent: function(a, r, d) {
      a && (typeof a == "object" && (r = a.listener, d = a.useCapture, a = a.type), i.iframe && c._ww.removeEventListener(a, r, d), c._w.removeEventListener(a, r, d));
    },
    onClick_toolbar: function(a) {
      let r = a.target, d = r.getAttribute("data-display"), h = r.getAttribute("data-command"), p = r.className;
      for (c.controllersOff(); r.parentNode && !h && !/se-menu-list/.test(p) && !/se-toolbar/.test(p); )
        r = r.parentNode, h = r.getAttribute("data-command"), d = r.getAttribute("data-display"), p = r.className;
      !h && !d || r.disabled || c.actionCall(h, d, r);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(a) {
      if (c.isReadOnly || o.isNonEditable(e.element.wysiwyg)) return;
      if (o._isExcludeSelectionElement(a.target)) {
        a.preventDefault();
        return;
      }
      if (g.removeGlobalEvent(g.__selectionSyncEvent), g.__selectionSyncEvent = g.addGlobalEvent("mouseup", function() {
        c && c._editorRange(), g.removeGlobalEvent(g.__selectionSyncEvent);
      }), typeof k.onMouseDown == "function" && k.onMouseDown(a, c) === !1) return;
      const r = o.getParentElement(a.target, o.isCell);
      if (r) {
        const d = c.plugins.table;
        d && r !== d._fixedCell && !d._shift && c.callPlugin("table", function() {
          d.onTableCellMultiSelect.call(c, r, !1);
        }, null);
      }
      c._isBalloon && g._hideToolbar();
    },
    onClick_wysiwyg: function(a) {
      const r = a.target;
      if (c.isReadOnly)
        return a.preventDefault(), o.isAnchor(r) && f.open(r.href, r.target), !1;
      if (o.isNonEditable(e.element.wysiwyg) || typeof k.onClick == "function" && k.onClick(a, c) === !1) return;
      const d = c.getFileComponent(r);
      if (d) {
        a.preventDefault(), c.selectComponent(d.target, d.pluginName);
        return;
      }
      const h = o.getParentElement(r, "FIGCAPTION");
      if (h && o.isNonEditable(h) && (a.preventDefault(), h.focus(), c._isInline && !c._inlineToolbarAttr.isShow)) {
        g._showToolbarInline();
        const C = function() {
          g._hideToolbar(), h.removeEventListener("blur", C);
        };
        h.addEventListener("blur", C);
      }
      if (c._editorRange(), a.detail === 3) {
        let C = c.getRange();
        o.isFormatElement(C.endContainer) && C.endOffset === 0 && (C = c.setRange(C.startContainer, C.startOffset, C.startContainer, C.startContainer.length), c._rangeInfo(C, c.getSelection()));
      }
      const p = c.getSelectionNode(), v = o.getFormatElement(p, null), m = o.getRangeFormatElement(p, null);
      let y = p;
      for (; y && y.firstChild; ) y = y.firstChild;
      const _ = c.getFileComponent(y);
      if (_) {
        const C = c.getRange();
        !m && C.startContainer === C.endContainer && c.selectComponent(_.target, _.pluginName);
      } else c.currentFileComponentInfo && c.controllersOff();
      if (!v && !o.isNonEditable(r) && !o.isList(m)) {
        const C = c.getRange();
        if (o.getFormatElement(C.startContainer) === o.getFormatElement(C.endContainer))
          if (o.isList(m)) {
            a.preventDefault();
            const w = o.createElement("LI"), z = p.nextElementSibling;
            w.appendChild(p), m.insertBefore(w, z), c.focus();
          } else !o.isWysiwygDiv(p) && !o.isComponent(p) && (!o.isTable(p) || o.isCell(p)) && c._setDefaultFormat(o.isRangeFormatElement(m) ? "DIV" : i.defaultTag) !== null ? (a.preventDefault(), c.focus()) : g._applyTagEffects();
      } else
        g._applyTagEffects();
      c._isBalloon && f.setTimeout(g._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      g._balloonDelay && f.clearTimeout(g._balloonDelay), g._balloonDelay = f.setTimeout((function() {
        f.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon();
      }).bind(g), 350);
    },
    _toggleToolbarBalloon: function() {
      if (c) {
        c._editorRange();
        const a = c.getRange();
        c._bindControllersOff || !c._isBalloonAlways && a.collapsed ? g._hideToolbar() : g._showToolbarBalloon(a);
      }
    },
    _showToolbarBalloon: function(a) {
      if (!c._isBalloon) return;
      const r = a || c.getRange(), d = e.element.toolbar, h = e.element.topArea, p = c.getSelection();
      let v;
      if (c._isBalloonAlways && r.collapsed)
        v = !0;
      else if (p.focusNode === p.anchorNode)
        v = p.focusOffset < p.anchorOffset;
      else {
        const M = o.getListChildNodes(r.commonAncestorContainer, null);
        v = o.getArrayIndex(M, p.focusNode) < o.getArrayIndex(M, p.anchorNode);
      }
      let m = r.getClientRects();
      m = m[v ? 0 : m.length - 1];
      const y = c.getGlobalScrollOffset();
      let _ = y.left, C = y.top;
      const w = h.offsetWidth, z = g._getEditorOffsets(null), T = z.top, B = z.left;
      if (d.style.top = "-10000px", d.style.visibility = "hidden", d.style.display = "block", !m) {
        const M = c.getSelectionNode();
        if (o.isFormatElement(M)) {
          const P = o.createTextNode(o.zeroWidthSpace);
          c.insertNode(P, null, !1), c.setRange(P, 1, P, 1), c._editorRange(), m = c.getRange().getClientRects(), m = m[v ? 0 : m.length - 1];
        }
        if (!m) {
          const P = o.getOffset(M, e.element.wysiwygFrame);
          m = {
            left: P.left,
            top: P.top,
            right: P.left,
            bottom: P.top + M.offsetHeight,
            noText: !0
          }, _ = 0, C = 0;
        }
        v = !0;
      }
      const N = f.Math.round(e.element._arrow.offsetWidth / 2), $ = d.offsetWidth, O = d.offsetHeight, U = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (U && (m = {
        left: m.left + U.left,
        top: m.top + U.top,
        right: m.right + U.right - U.width,
        bottom: m.bottom + U.bottom - U.height
      }), g._setToolbarOffset(v, m, d, B, w, _, C, T, N), ($ !== d.offsetWidth || O !== d.offsetHeight) && g._setToolbarOffset(v, m, d, B, w, _, C, T, N), i.toolbarContainer) {
        const M = h.parentElement;
        let P = i.toolbarContainer, E = P.offsetLeft, H = P.offsetTop;
        for (; !P.parentElement.contains(M) || !/^(BODY|HTML)$/i.test(P.parentElement.nodeName); )
          P = P.offsetParent, E += P.offsetLeft, H += P.offsetTop;
        d.style.left = d.offsetLeft - E + h.offsetLeft + "px", d.style.top = d.offsetTop - H + h.offsetTop + "px";
      }
      d.style.visibility = "";
    },
    _setToolbarOffset: function(a, r, d, h, p, v, m, y, _) {
      const w = d.offsetWidth, z = r.noText && !a ? 0 : d.offsetHeight, T = (a ? r.left : r.right) - h - w / 2 + v, B = T + w - p;
      let N = (a ? r.top - z - _ : r.bottom + _) - (r.noText ? 0 : y) + m, $ = T < 0 ? 1 : B < 0 ? T : T - B - 1 - 1, O = !1;
      const U = N + (a ? g._getEditorOffsets(null).top : d.offsetHeight - e.element.wysiwyg.offsetHeight);
      !a && U > 0 && g._getPageBottomSpace() < U ? (a = !0, O = !0) : a && u.documentElement.offsetTop > U && (a = !1, O = !0), O && (N = (a ? r.top - z - _ : r.bottom + _) - (r.noText ? 0 : y) + m), d.style.left = f.Math.floor($) + "px", d.style.top = f.Math.floor(N) + "px", a ? (o.removeClass(e.element._arrow, "se-arrow-up"), o.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = z + "px") : (o.removeClass(e.element._arrow, "se-arrow-down"), o.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -_ + "px");
      const M = f.Math.floor(w / 2 + (T - $));
      e.element._arrow.style.left = (M + _ > d.offsetWidth ? d.offsetWidth - _ : M < _ ? _ : M) + "px";
    },
    _showToolbarInline: function() {
      if (!c._isInline) return;
      const a = e.element.toolbar;
      i.toolbarContainer ? a.style.position = "relative" : a.style.position = "absolute", a.style.visibility = "hidden", a.style.display = "block", c._inlineToolbarAttr.width = a.style.width = i.toolbarWidth, c._inlineToolbarAttr.top = a.style.top = (i.toolbarContainer ? 0 : -1 - a.offsetHeight) + "px", typeof k.showInline == "function" && k.showInline(a, e, c), g.onScroll_window(), c._inlineToolbarAttr.isShow = !0, a.style.visibility = "";
    },
    _hideToolbar: function() {
      !c._notHideToolbar && !c._variable.isFullScreen && (e.element.toolbar.style.display = "none", c._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(a) {
      if (/AUDIO/.test(a.target.nodeName)) return !1;
      if (c.isReadOnly || c.isDisabled)
        return a.preventDefault(), a.stopPropagation(), c.history.go(c.history.getCurrentIndex()), !1;
      const r = c.getRange(), d = c.getSelectionNode(), h = o.getFormatElement(d, null);
      if (!h && r.collapsed && !o.isComponent(d) && !o.isList(d)) {
        const v = o.getRangeFormatElement(h, null);
        c._setDefaultFormat(o.isRangeFormatElement(v) ? "DIV" : i.defaultTag);
      }
      c._editorRange();
      const p = (a.data === null ? "" : a.data === void 0 ? " " : a.data) || "";
      if (!c._charCount(p))
        return a.preventDefault(), a.stopPropagation(), !1;
      typeof k.onInput == "function" && k.onInput(a, c) === !1 || c.history.push(!0);
    },
    _isUneditableNode: function(a, r) {
      const d = r ? a.startContainer : a.endContainer, h = r ? a.startOffset : a.endOffset, p = r ? "previousSibling" : "nextSibling", v = d.nodeType === 1;
      let m;
      return v ? (m = g._isUneditableNode_getSibling(d.childNodes[h], p, d), m && m.nodeType === 1 && m.getAttribute("contenteditable") === "false") : (m = g._isUneditableNode_getSibling(d, p, d), c.isEdgePoint(d, h, r ? "start" : "end") && m && m.nodeType === 1 && m.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(a, r, d) {
      if (!a) return null;
      let h = a[r];
      if (!h)
        if (h = o.getFormatElement(d), h = h ? h[r] : null, h && !o.isComponent(h)) h = r === "previousSibling" ? h.firstChild : h.lastChild;
        else return null;
      return h;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(a) {
      let r = c.getSelectionNode();
      if (o.isInputElement(r)) return;
      const d = a.keyCode, h = a.shiftKey, p = a.ctrlKey || a.metaKey || d === 91 || d === 92 || d === 224, v = a.altKey;
      if (g._IEisComposing = d === 229, !p && c.isReadOnly && !g._cursorMoveKeyCode.test(d))
        return a.preventDefault(), !1;
      if (c.submenuOff(), c._isBalloon && g._hideToolbar(), typeof k.onKeyDown == "function" && k.onKeyDown(a, c) === !1) return;
      if (p && g._shortcutCommand(d, h))
        return g._onShortcutKey = !0, a.preventDefault(), a.stopPropagation(), !1;
      g._onShortcutKey && (g._onShortcutKey = !1), d === 13 && o.isFormatElement(c.getRange().startContainer) && (c._resetRangeToTextNode(), r = c.getSelectionNode());
      const m = c.getRange(), y = !m.collapsed || m.startContainer !== m.endContainer, _ = c._fileManager.pluginRegExp.test(c.currentControllerName) ? c.currentControllerName : "";
      let C = o.getFormatElement(r, null) || r, w = o.getRangeFormatElement(C, null);
      if (!(/37|38|39|40/.test(a.keyCode) && g._onKeyDown_wysiwyg_arrowKey(a) === !1)) {
        switch (d) {
          case 8:
            if (!y && _) {
              a.preventDefault(), a.stopPropagation(), c.plugins[_].destroy.call(c);
              break;
            }
            if (y && g._hardDelete()) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            if (!o.isFormatElement(C) && !e.element.wysiwyg.firstElementChild && !o.isComponent(r) && c._setDefaultFormat(i.defaultTag) !== null)
              return a.preventDefault(), a.stopPropagation(), !1;
            if (!y && !C.previousElementSibling && m.startOffset === 0 && !r.previousSibling && !o.isListCell(C) && o.isFormatElement(C) && (!o.isFreeFormatElement(C) || o.isClosureFreeFormatElement(C))) {
              if (o.isClosureRangeFormatElement(C.parentNode))
                return a.preventDefault(), a.stopPropagation(), !1;
              if (o.isWysiwygDiv(C.parentNode) && C.childNodes.length <= 1 && (!C.firstChild || o.onlyZeroWidthSpace(C.textContent))) {
                if (a.preventDefault(), a.stopPropagation(), C.nodeName.toUpperCase() === i.defaultTag.toUpperCase()) {
                  C.innerHTML = "<br>";
                  const I = C.attributes;
                  for (; I[0]; )
                    C.removeAttribute(I[0].name);
                } else {
                  const I = o.createElement(i.defaultTag);
                  I.innerHTML = "<br>", C.parentElement.replaceChild(I, C);
                }
                return c.nativeFocus(), !1;
              }
            }
            const T = m.startContainer;
            if (C && !C.previousElementSibling && m.startOffset === 0 && T.nodeType === 3 && !o.isFormatElement(T.parentNode)) {
              let I = T.parentNode.previousSibling;
              const W = T.parentNode.nextSibling;
              I || (W ? I = W : (I = o.createElement("BR"), C.appendChild(I)));
              let R = T;
              for (; C.contains(R) && !R.previousSibling; )
                R = R.parentNode;
              if (!C.contains(R)) {
                T.textContent = "", o.removeItemAllParents(T, null, C);
                break;
              }
            }
            if (g._isUneditableNode(m, !0)) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            !y && c._isEdgeFormat(m.startContainer, m.startOffset, "start") && o.isFormatElement(C.previousElementSibling) && (c._formatAttrsTemp = C.previousElementSibling.attributes);
            const B = m.commonAncestorContainer;
            if (C = o.getFormatElement(m.startContainer, null), w = o.getRangeFormatElement(C, null), w && C && !o.isCell(w) && !/^FIGCAPTION$/i.test(w.nodeName)) {
              if (o.isListCell(C) && o.isList(w) && (o.isListCell(w.parentNode) || C.previousElementSibling) && (r === C || r.nodeType === 3 && (!r.previousSibling || o.isList(r.previousSibling))) && (o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null) ? w.contains(m.startContainer) : m.startOffset === 0 && m.collapsed)) {
                if (m.startContainer !== m.endContainer)
                  a.preventDefault(), c.removeNode(), m.startContainer.nodeType === 3 && c.setRange(m.startContainer, m.startContainer.textContent.length, m.startContainer, m.startContainer.textContent.length), c.history.push(!0);
                else {
                  let I = C.previousElementSibling || w.parentNode;
                  if (o.isListCell(I)) {
                    a.preventDefault();
                    let W = I;
                    if (!I.contains(C) && o.isListCell(W) && o.isList(W.lastElementChild)) {
                      for (W = W.lastElementChild.lastElementChild; o.isListCell(W) && o.isList(W.lastElementChild); )
                        W = W.lastElementChild && W.lastElementChild.lastElementChild;
                      I = W;
                    }
                    let R = I === w.parentNode ? w.previousSibling : I.lastChild;
                    R || (R = o.createTextNode(o.zeroWidthSpace), w.parentNode.insertBefore(R, w.parentNode.firstChild));
                    const A = R.nodeType === 3 ? R.textContent.length : 1, j = C.childNodes;
                    let G = R, te = j[0];
                    for (; te = j[0]; )
                      I.insertBefore(te, G.nextSibling), G = te;
                    o.removeItem(C), w.children.length === 0 && o.removeItem(w), c.setRange(R, A, R, A), c.history.push(!0);
                  }
                }
                break;
              }
              if (!y && m.startOffset === 0) {
                let I = !0, W = B;
                for (; W && W !== w && !o.isWysiwygDiv(W); ) {
                  if (W.previousSibling && (W.previousSibling.nodeType === 1 || !o.onlyZeroWidthSpace(W.previousSibling.textContent.trim()))) {
                    I = !1;
                    break;
                  }
                  W = W.parentNode;
                }
                if (I && w.parentNode) {
                  a.preventDefault(), c.detachRangeFormatElement(w, o.isListCell(C) ? [C] : null, null, !1, !1), c.history.push(!0);
                  break;
                }
              }
            }
            if (!y && C && (m.startOffset === 0 || r === C && C.childNodes[m.startOffset])) {
              const I = o.isListCell(C), W = r === C ? C.childNodes[m.startOffset] : r, R = I ? W.previousSibling : C.previousSibling, A = I || (B.nodeType === 3 || o.isBreak(B)) && !B.previousSibling && m.startOffset === 0;
              if (W && (I || !W.previousSibling) && (B && o.isComponent(B.previousSibling) || A && o.isComponent(R))) {
                const j = c.getFileComponent(R);
                j ? (a.preventDefault(), a.stopPropagation(), I ? o.removeItem(W) : C.textContent.length === 0 && o.removeItem(C), c.selectComponent(j.target, j.pluginName) === !1 && c.blur()) : o.isComponent(R) && (a.preventDefault(), a.stopPropagation(), o.removeItem(R));
                break;
              }
              if (W && o.isNonEditable(W.previousSibling)) {
                a.preventDefault(), a.stopPropagation(), o.removeItem(W.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (_) {
              a.preventDefault(), a.stopPropagation(), c.plugins[_].destroy.call(c);
              break;
            }
            if (y && g._hardDelete()) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            if (!y && c._isEdgeFormat(m.endContainer, m.endOffset, "end") && !C.nextSibling) {
              a.preventDefault(), a.stopPropagation();
              return;
            }
            if (g._isUneditableNode(m, !1)) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            if ((o.isFormatElement(r) || r.nextSibling === null || o.onlyZeroWidthSpace(r.nextSibling) && r.nextSibling.nextSibling === null) && m.startOffset === r.textContent.length) {
              const I = C.nextElementSibling;
              if (!I) break;
              if (o.isComponent(I)) {
                if (a.preventDefault(), o.onlyZeroWidthSpace(C) && (o.removeItem(C), o.isTable(I))) {
                  let R = o.getChildElement(I, o.isCell, !1);
                  R = R.firstElementChild || R, c.setRange(R, 0, R, 0);
                  break;
                }
                const W = c.getFileComponent(I);
                W ? (a.stopPropagation(), c.selectComponent(W.target, W.pluginName) === !1 && c.blur()) : o.isComponent(I) && (a.stopPropagation(), o.removeItem(I));
                break;
              }
            }
            if (!y && (c.isEdgePoint(m.endContainer, m.endOffset) || r === C && C.childNodes[m.startOffset])) {
              const I = r === C && C.childNodes[m.startOffset] || r;
              if (I && o.isNonEditable(I.nextSibling)) {
                a.preventDefault(), a.stopPropagation(), o.removeItem(I.nextSibling);
                break;
              } else if (o.isComponent(I)) {
                a.preventDefault(), a.stopPropagation(), o.removeItem(I);
                break;
              }
            }
            if (!y && c._isEdgeFormat(m.endContainer, m.endOffset, "end") && o.isFormatElement(C.nextElementSibling) && (c._formatAttrsTemp = C.attributes), C = o.getFormatElement(m.startContainer, null), w = o.getRangeFormatElement(C, null), o.isListCell(C) && o.isList(w) && (r === C || r.nodeType === 3 && (!r.nextSibling || o.isList(r.nextSibling)) && (o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null) ? w.contains(m.endContainer) : m.endOffset === r.textContent.length && m.collapsed))) {
              m.startContainer !== m.endContainer && c.removeNode();
              let I = o.getArrayItem(C.children, o.isList, !1);
              if (I = I || C.nextElementSibling || (w.parentNode ? w.parentNode.nextElementSibling : null), I && (o.isList(I) || o.getArrayItem(I.children, o.isList, !1))) {
                a.preventDefault();
                let W, R;
                if (o.isList(I)) {
                  const A = I.firstElementChild;
                  for (R = A.childNodes, W = R[0]; R[0]; )
                    C.insertBefore(R[0], I);
                  o.removeItem(A);
                } else {
                  for (W = I.firstChild, R = I.childNodes; R[0]; )
                    C.appendChild(R[0]);
                  o.removeItem(I);
                }
                c.setRange(W, 0, W, 0), c.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (_ || i.tabDisable || (a.preventDefault(), p || v || o.isWysiwygDiv(r))) break;
            const N = !m.collapsed || c.isEdgePoint(m.startContainer, m.startOffset), $ = c.getSelectedElements(null);
            r = c.getSelectionNode();
            const O = [];
            let U = [], M = o.isListCell($[0]), P = o.isListCell($[$.length - 1]), E = { sc: m.startContainer, so: m.startOffset, ec: m.endContainer, eo: m.endOffset };
            for (let I = 0, W = $.length, R; I < W; I++)
              if (R = $[I], o.isListCell(R)) {
                if (!R.previousElementSibling && !h)
                  continue;
                O.push(R);
              } else
                U.push(R);
            if (O.length > 0 && N && c.plugins.list)
              E = c.plugins.list.editInsideList.call(c, h, O);
            else {
              const I = o.getParentElement(r, o.isCell);
              if (I && N) {
                const W = o.getParentElement(I, "table"), R = o.getListChildren(W, o.isCell);
                let A = h ? o.prevIdx(R, I) : o.nextIdx(R, I);
                A === R.length && !h && (A = 0), A === -1 && h && (A = R.length - 1);
                let j = R[A];
                if (!j) break;
                j = j.firstElementChild || j, c.setRange(j, 0, j, 0);
                break;
              }
              U = U.concat(O), M = P = null;
            }
            if (U.length > 0)
              if (h) {
                const I = U.length - 1;
                for (let A = 0, j; A <= I; A++) {
                  j = U[A].childNodes;
                  for (let G = 0, te = j.length, J; G < te && (J = j[G], !!J); G++)
                    if (!o.onlyZeroWidthSpace(J)) {
                      /^\s{1,4}$/.test(J.textContent) ? o.removeItem(J) : /^\s{1,4}/.test(J.textContent) && (J.textContent = J.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const W = o.getChildElement(U[0], "text", !1), R = o.getChildElement(U[I], "text", !0);
                !M && W && (E.sc = W, E.so = 0), !P && R && (E.ec = R, E.eo = R.textContent.length);
              } else {
                const I = o.createTextNode(new f.Array(c._variable.tabSize + 1).join(" "));
                if (U.length === 1) {
                  if (!c.insertNode(I, null, !0)) return !1;
                  M || (E.sc = I, E.so = I.length), P || (E.ec = I, E.eo = I.length);
                } else {
                  const W = U.length - 1;
                  for (let j = 0, G; j <= W; j++)
                    G = U[j].firstChild, G && (o.isBreak(G) ? U[j].insertBefore(I.cloneNode(!1), G) : G.textContent = I.textContent + G.textContent);
                  const R = o.getChildElement(U[0], "text", !1), A = o.getChildElement(U[W], "text", !0);
                  !M && R && (E.sc = R, E.so = 0), !P && A && (E.ec = A, E.eo = A.textContent.length);
                }
              }
            c.setRange(E.sc, E.so, E.ec, E.eo), c.history.push(!1);
            break;
          case 13:
            const H = o.getFreeFormatElement(r, null);
            if (c._charTypeHTML) {
              let I = "";
              if (!h && H || h ? I = "<br>" : I = "<" + C.nodeName + "><br></" + C.nodeName + ">", !c.checkCharCount(I, "byte-html"))
                return a.preventDefault(), !1;
            }
            if (!h && !_) {
              const I = c._isEdgeFormat(m.endContainer, m.endOffset, "end"), W = c._isEdgeFormat(m.startContainer, m.startOffset, "start");
              if (I && (/^H[1-6]$/i.test(C.nodeName) || /^HR$/i.test(C.nodeName))) {
                g._enterPrevent(a);
                let R = null;
                const A = c.appendFormatTag(C, i.defaultTag);
                if (I && I.length > 0) {
                  R = I.pop();
                  const j = R;
                  for (; I.length > 0; )
                    R = R.appendChild(I.pop());
                  A.appendChild(j);
                }
                if (R = R ? R.appendChild(A.firstChild) : A.firstChild, o.isBreak(R)) {
                  const j = o.createTextNode(o.zeroWidthSpace);
                  R.parentNode.insertBefore(j, R), c.setRange(j, 1, j, 1);
                } else
                  c.setRange(R, 0, R, 0);
                break;
              } else if (w && C && !o.isCell(w) && !/^FIGCAPTION$/i.test(w.nodeName)) {
                const R = c.getRange();
                if (c.isEdgePoint(R.endContainer, R.endOffset) && o.isList(r.nextSibling)) {
                  g._enterPrevent(a);
                  const A = o.createElement("LI"), j = o.createElement("BR");
                  A.appendChild(j), C.parentNode.insertBefore(A, C.nextElementSibling), A.appendChild(r.nextSibling), c.setRange(j, 1, j, 1);
                  break;
                }
                if ((R.commonAncestorContainer.nodeType !== 3 || !R.commonAncestorContainer.nextElementSibling) && o.onlyZeroWidthSpace(C.innerText.trim()) && !o.isListCell(C.nextElementSibling)) {
                  g._enterPrevent(a);
                  let A = null;
                  if (o.isListCell(w.parentNode)) {
                    const j = C.parentNode.parentNode;
                    w = j.parentNode;
                    const G = o.createElement("LI");
                    G.innerHTML = "<br>", o.copyTagAttributes(G, C, i.lineAttrReset), A = G, w.insertBefore(A, j.nextElementSibling);
                  } else {
                    const j = o.isCell(w.parentNode) ? "DIV" : o.isList(w.parentNode) ? "LI" : o.isFormatElement(w.nextElementSibling) && !o.isRangeFormatElement(w.nextElementSibling) ? w.nextElementSibling.nodeName : o.isFormatElement(w.previousElementSibling) && !o.isRangeFormatElement(w.previousElementSibling) ? w.previousElementSibling.nodeName : i.defaultTag;
                    A = o.createElement(j), o.copyTagAttributes(A, C, i.lineAttrReset);
                    const G = c.detachRangeFormatElement(w, [C], null, !0, !0);
                    G.cc.insertBefore(A, G.ec);
                  }
                  A.innerHTML = "<br>", o.removeItemAllParents(C, null, null), c.setRange(A, 1, A, 1);
                  break;
                }
              }
              if (H) {
                g._enterPrevent(a);
                const R = r === H, A = c.getSelection(), j = r.childNodes, G = A.focusOffset, te = r.previousElementSibling, J = r.nextSibling;
                if (!o.isClosureFreeFormatElement(H) && j && (R && m.collapsed && j.length - 1 <= G + 1 && o.isBreak(j[G]) && (!j[G + 1] || (!j[G + 2] || o.onlyZeroWidthSpace(j[G + 2].textContent)) && j[G + 1].nodeType === 3 && o.onlyZeroWidthSpace(j[G + 1].textContent)) && G > 0 && o.isBreak(j[G - 1]) || !R && o.onlyZeroWidthSpace(r.textContent) && o.isBreak(te) && (o.isBreak(te.previousSibling) || !o.onlyZeroWidthSpace(te.previousSibling.textContent)) && (!J || !o.isBreak(J) && o.onlyZeroWidthSpace(J.textContent)))) {
                  R ? o.removeItem(j[G - 1]) : o.removeItem(r);
                  const Q = c.appendFormatTag(H, o.isFormatElement(H.nextElementSibling) && !o.isRangeFormatElement(H.nextElementSibling) ? H.nextElementSibling : null);
                  o.copyFormatAttributes(Q, H), c.setRange(Q, 1, Q, 1);
                  break;
                }
                if (R) {
                  k.insertHTML(m.collapsed && o.isBreak(m.startContainer.childNodes[m.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let Q = A.focusNode;
                  const oe = A.focusOffset;
                  H === Q && (Q = Q.childNodes[oe - G > 1 ? oe - 1 : oe]), c.setRange(Q, 1, Q, 1);
                } else {
                  const Q = A.focusNode.nextSibling, oe = o.createElement("BR");
                  c.insertNode(oe, null, !1);
                  const de = oe.previousSibling, re = oe.nextSibling;
                  !o.isBreak(Q) && !o.isBreak(de) && (!re || o.onlyZeroWidthSpace(re)) ? (oe.parentNode.insertBefore(oe.cloneNode(!1), oe), c.setRange(oe, 1, oe, 1)) : c.setRange(re, 0, re, 0);
                }
                g._onShortcutKey = !0;
                break;
              }
              if (m.collapsed && (W || I)) {
                g._enterPrevent(a);
                const R = o.createElement("BR"), A = o.createElement(C.nodeName);
                o.copyTagAttributes(A, C, i.lineAttrReset);
                let j = R;
                do {
                  if (!o.isBreak(r) && r.nodeType === 1) {
                    const G = r.cloneNode(!1);
                    G.appendChild(j), j = G;
                  }
                  r = r.parentNode;
                } while (C !== r && C.contains(r));
                A.appendChild(j), C.parentNode.insertBefore(A, W && !I ? C : C.nextElementSibling), I && c.setRange(R, 1, R, 1);
                break;
              }
              if (C) {
                a.stopPropagation();
                let R, A = 0;
                if (m.collapsed)
                  o.onlyZeroWidthSpace(C) ? R = c.appendFormatTag(C, C.cloneNode(!1)) : R = o.splitElement(m.endContainer, m.endOffset, o.getElementDepth(C));
                else {
                  const j = o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null), G = C.cloneNode(!1);
                  G.innerHTML = "<br>";
                  const te = m.commonAncestorContainer, J = te === m.startContainer && te === m.endContainer && o.onlyZeroWidthSpace(te) ? m : c.removeNode();
                  if (R = o.getFormatElement(J.container, null), !R) {
                    o.isWysiwygDiv(J.container) && (g._enterPrevent(a), e.element.wysiwyg.appendChild(G), R = G, o.copyTagAttributes(R, C, i.lineAttrReset), c.setRange(R, A, R, A));
                    break;
                  }
                  const Q = o.getRangeFormatElement(J.container);
                  if (R = R.contains(Q) ? o.getChildElement(Q, o.getFormatElement.bind(o)) : R, j) {
                    if (I && !W)
                      R.parentNode.insertBefore(G, !J.prevContainer || J.container === J.prevContainer ? R.nextElementSibling : R), R = G, A = 0;
                    else if (A = J.offset, W) {
                      const oe = R.parentNode.insertBefore(G, R);
                      I && (R = oe, A = 0);
                    }
                  } else
                    I && W ? (R.parentNode.insertBefore(G, J.prevContainer && J.container === J.prevContainer ? R.nextElementSibling : R), R = G, A = 0) : R = o.splitElement(J.container, J.offset, o.getElementDepth(C));
                }
                g._enterPrevent(a), o.copyTagAttributes(R, C, i.lineAttrReset), c.setRange(R, A, R, A);
                break;
              }
            }
            if (y) break;
            if (w && o.getParentElement(w, "FIGCAPTION") && o.getParentElement(w, o.isList) && (g._enterPrevent(a), C = c.appendFormatTag(C, null), c.setRange(C, 0, C, 0)), _) {
              a.preventDefault(), a.stopPropagation(), c.containerOff(), c.controllersOff();
              const I = e[_], W = I._container, R = W.previousElementSibling || W.nextElementSibling;
              let A = null;
              o.isListCell(W.parentNode) ? A = o.createElement("BR") : (A = o.createElement(o.isFormatElement(R) && !o.isRangeFormatElement(R) ? R.nodeName : i.defaultTag), A.innerHTML = "<br>"), h ? W.parentNode.insertBefore(A, W) : W.parentNode.insertBefore(A, W.nextElementSibling), c.callPlugin(_, function() {
                c.selectComponent(I._element, _) === !1 && c.blur();
              }, null);
            }
            break;
          case 27:
            if (_)
              return a.preventDefault(), a.stopPropagation(), c.controllersOff(), !1;
            break;
        }
        if (c.currentFileComponentInfo && c.controllersOff(), h && d === 16) {
          a.preventDefault(), a.stopPropagation();
          const T = c.plugins.table;
          if (T && !T._shift && !T._ref) {
            const B = o.getParentElement(C, o.isCell);
            if (B) {
              T.onTableCellMultiSelect.call(c, B, !0);
              return;
            }
          }
        } else if (h && (o.isOSX_IOS ? v : p) && d === 32) {
          a.preventDefault(), a.stopPropagation();
          const T = c.insertNode(o.createTextNode(" "));
          if (T) {
            c.setRange(T, T.length, T, T.length);
            return;
          }
        }
        if (o.isIE && !p && !v && !y && !g._nonTextKeyCode.test(d) && o.isBreak(m.commonAncestorContainer)) {
          const T = o.createTextNode(o.zeroWidthSpace);
          c.insertNode(T, null, !1), c.setRange(T, 1, T, 1);
        }
        g._directionKeyCode.test(d) && (f.setTimeout(c._editorRange.bind(c), 0), g._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(a) {
      if (a.shiftKey) return;
      let r = c.getSelectionNode();
      const d = function(v, m) {
        if (m || (m = 0), a.preventDefault(), a.stopPropagation(), !v) return;
        let y = c.getFileComponent(v);
        y ? c.selectComponent(y.target, y.pluginName) : (c.setRange(v, m, v, m), c.controllersOff());
      }, h = o.getParentElement(r, "table");
      if (h) {
        const v = o.getParentElement(r, "tr"), m = o.getParentElement(r, "td");
        let y = m, _ = m;
        if (m) {
          for (; y && y.firstChild; ) y = y.firstChild;
          for (; _ && _.lastChild; ) _ = _.lastChild;
        }
        let C = r;
        for (; C && C.firstChild; ) C = C.firstChild;
        const w = C === y, z = C === _;
        let T = null, B = 0;
        if (a.keyCode === 38 && w) {
          const N = v && v.previousElementSibling;
          for (N ? T = N.children[m.cellIndex] : T = o.getPreviousDeepestNode(h, c.context.element.wysiwyg); T && T.lastChild; ) T = T.lastChild;
          T && (B = T.textContent.length);
        } else if (a.keyCode === 40 && z) {
          const N = v && v.nextElementSibling;
          for (N ? T = N.children[m.cellIndex] : T = o.getNextDeepestNode(h, c.context.element.wysiwyg); T && T.firstChild; ) T = T.firstChild;
        }
        if (T)
          return d(T, B), !1;
      }
      const p = c.getFileComponent(r);
      if (p) {
        const v = /37|38/.test(a.keyCode), m = /39|40/.test(a.keyCode);
        if (v) {
          const y = o.getPreviousDeepestNode(p.target, c.context.element.wysiwyg);
          d(y, y && y.textContent.length);
        } else if (m) {
          const y = o.getNextDeepestNode(p.target, c.context.element.wysiwyg);
          d(y);
        }
      }
    },
    onKeyUp_wysiwyg: function(a) {
      if (g._onShortcutKey) return;
      c._editorRange();
      const r = a.keyCode, d = a.ctrlKey || a.metaKey || r === 91 || r === 92 || r === 224, h = a.altKey;
      if (c.isReadOnly) {
        !d && g._cursorMoveKeyCode.test(r) && g._applyTagEffects();
        return;
      }
      const p = c.getRange();
      let v = c.getSelectionNode();
      if (c._isBalloon && (c._isBalloonAlways && r !== 27 || !p.collapsed))
        if (c._isBalloonAlways)
          r !== 27 && g._showToolbarBalloonDelay();
        else {
          g._showToolbarBalloon();
          return;
        }
      let m = v;
      for (; m && m.firstChild; ) m = m.firstChild;
      const y = c.getFileComponent(m);
      if (!(a.keyCode === 16 || a.shiftKey) && y && c.selectComponent(y.target, y.pluginName), r === 8 && o.isWysiwygDiv(v) && v.textContent === "" && v.children.length === 0) {
        a.preventDefault(), a.stopPropagation(), v.innerHTML = "";
        const T = o.createElement(o.isFormatElement(c._variable.currentNodes[0]) ? c._variable.currentNodes[0] : i.defaultTag);
        T.innerHTML = "<br>", v.appendChild(T), c.setRange(T, 0, T, 0), g._applyTagEffects(), c.history.push(!1);
        return;
      }
      const _ = o.getFormatElement(v, null), C = o.getRangeFormatElement(v, null), w = c._formatAttrsTemp;
      if (w) {
        for (let T = 0, B = w.length; T < B; T++) {
          if (r === 13 && /^id$/i.test(w[T].name)) {
            _.removeAttribute("id");
            continue;
          }
          _.setAttribute(w[T].name, w[T].value);
        }
        c._formatAttrsTemp = null;
      }
      if (!_ && p.collapsed && !o.isComponent(v) && !o.isList(v) && c._setDefaultFormat(o.isRangeFormatElement(C) ? "DIV" : i.defaultTag) !== null && (v = c.getSelectionNode()), !d && !h && !g._nonTextKeyCode.test(r) && v.nodeType === 3 && o.zeroWidthRegExp.test(v.textContent) && !(a.isComposing !== void 0 ? a.isComposing : g._IEisComposing)) {
        let T = p.startOffset, B = p.endOffset;
        const N = (v.textContent.substring(0, B).match(g._frontZeroWidthReg) || "").length;
        T = p.startOffset - N, B = p.endOffset - N, v.textContent = v.textContent.replace(o.zeroWidthRegExp, ""), c.setRange(v, T < 0 ? 0 : T, v, B < 0 ? 0 : B);
      }
      g._deleteKeyCode.test(r) && _ && o.onlyZeroWidthSpace(_.textContent) && !_.previousElementSibling && (_.innerHTML = "<br>", c.setRange(_, 0, _, 0)), c._charCount(""), !(typeof k.onKeyUp == "function" && k.onKeyUp(a, c) === !1) && !d && !h && !g._historyIgnoreKeyCode.test(r) && c.history.push(!0);
    },
    onScroll_wysiwyg: function(a) {
      c.controllersOff(), c._isBalloon && g._hideToolbar(), typeof k.onScroll == "function" && k.onScroll(a, c);
    },
    onFocus_wysiwyg: function(a) {
      c._antiBlur || (c.hasFocus = !0, f.setTimeout(g._applyTagEffects), c._isInline && g._showToolbarInline(), typeof k.onFocus == "function" && k.onFocus(a, c));
    },
    onBlur_wysiwyg: function(a) {
      c._antiBlur || c._variable.isCodeView || (c.hasFocus = !1, c.effectNode = null, c.controllersOff(), (c._isInline || c._isBalloon) && g._hideToolbar(), c._setKeyEffect([]), c._variable.currentNodes = [], c._variable.currentNodesMap = [], i.showPathLabel && (e.element.navigation.textContent = ""), typeof k.onBlur == "function" && k.onBlur(a, c, this));
    },
    onMouseDown_resizingBar: function(a) {
      a.stopPropagation(), c.submenuOff(), c.controllersOff(), c._variable.resizeClientY = a.clientY, e.element.resizeBackground.style.display = "block";
      function r() {
        e.element.resizeBackground.style.display = "none", u.removeEventListener("mousemove", g._resize_editor), u.removeEventListener("mouseup", r);
      }
      u.addEventListener("mousemove", g._resize_editor), u.addEventListener("mouseup", r);
    },
    _resize_editor: function(a) {
      const r = e.element.editorArea.offsetHeight + (a.clientY - c._variable.resizeClientY), d = r < c._variable.minResizingSize ? c._variable.minResizingSize : r;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = d + "px", c._variable.resizeClientY = a.clientY, o.isResizeObserverSupported || c.__callResizeFunction(d, null);
    },
    onResize_window: function() {
      o.isResizeObserverSupported || c.resetResponsiveToolbar();
      const a = e.element.toolbar, r = a.style.display === "none" || c._isInline && !c._inlineToolbarAttr.isShow;
      if (!(a.offsetWidth === 0 && !r)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = f.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), c.submenuActiveButton && c.submenu && c._setMenuPosition(c.submenuActiveButton, c.submenu), c._variable.isFullScreen) {
          c._variable.innerHeight_fullScreen += f.innerHeight - a.offsetHeight - c._variable.innerHeight_fullScreen, e.element.editorArea.style.height = c._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (c._variable.isCodeView && c._isInline) {
          g._showToolbarInline();
          return;
        }
        c._iframeAutoHeight(), c._sticky && (a.style.width = e.element.topArea.offsetWidth - 2 + "px", g.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (c._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || i.stickyToolbar < 0) return;
      const a = e.element, r = a.editorArea.offsetHeight, d = (this.scrollY || u.documentElement.scrollTop) + i.stickyToolbar, h = g._getEditorOffsets(i.toolbarContainer).top - (c._isInline ? a.toolbar.offsetHeight : 0), p = c._isInline && d - h > 0 ? d - h - e.element.toolbar.offsetHeight : 0;
      d < h ? g._offStickyToolbar() : d + c._variable.minResizingSize >= r + h ? (c._sticky || g._onStickyToolbar(p), a.toolbar.style.top = p + r + h + i.stickyToolbar - d - c._variable.minResizingSize + "px") : d >= h && g._onStickyToolbar(p);
    },
    _getEditorOffsets: function(a) {
      let r = a || e.element.topArea, d = 0, h = 0, p = 0;
      for (; r; )
        d += r.offsetTop, h += r.offsetLeft, p += r.scrollTop, r = r.offsetParent;
      return {
        top: d,
        left: h,
        scroll: p
      };
    },
    _getPageBottomSpace: function() {
      return u.documentElement.scrollHeight - (g._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(a) {
      const r = e.element;
      !c._isInline && !i.toolbarContainer && (r._stickyDummy.style.height = r.toolbar.offsetHeight + "px", r._stickyDummy.style.display = "block"), r.toolbar.style.top = i.stickyToolbar + a + "px", r.toolbar.style.width = c._isInline ? c._inlineToolbarAttr.width : r.toolbar.offsetWidth + "px", o.addClass(r.toolbar, "se-toolbar-sticky"), c._sticky = !0;
    },
    _offStickyToolbar: function() {
      const a = e.element;
      a._stickyDummy.style.display = "none", a.toolbar.style.top = c._isInline ? c._inlineToolbarAttr.top : "", a.toolbar.style.width = c._isInline ? c._inlineToolbarAttr.width : "", a.editorArea.style.marginTop = "", o.removeClass(a.toolbar, "se-toolbar-sticky"), c._sticky = !1;
    },
    _codeViewAutoHeight: function() {
      c._variable.isFullScreen || (e.element.code.style.height = e.element.code.scrollHeight + "px");
    },
    // FireFox - table delete, Chrome - image, video, audio
    _hardDelete: function() {
      const a = c.getRange(), r = a.startContainer, d = a.endContainer, h = o.getRangeFormatElement(r), p = o.getRangeFormatElement(d), v = o.isCell(h), m = o.isCell(p), y = a.commonAncestorContainer;
      if ((v && !h.previousElementSibling && !h.parentElement.previousElementSibling || m && !p.nextElementSibling && !p.parentElement.nextElementSibling) && h !== p)
        if (!v)
          o.removeItem(o.getParentElement(p, function(w) {
            return y === w.parentNode;
          }));
        else if (!m)
          o.removeItem(o.getParentElement(h, function(w) {
            return y === w.parentNode;
          }));
        else
          return o.removeItem(o.getParentElement(h, function(w) {
            return y === w.parentNode;
          })), c.nativeFocus(), !0;
      const _ = r.nodeType === 1 ? o.getParentElement(r, ".se-component") : null, C = d.nodeType === 1 ? o.getParentElement(d, ".se-component") : null;
      return _ && o.removeItem(_), C && o.removeItem(C), !1;
    },
    onPaste_wysiwyg: function(a) {
      const r = o.isIE ? f.clipboardData : a.clipboardData;
      return r ? g._dataTransferAction("paste", a, r) : !0;
    },
    _setClipboardComponent: function(a, r, d) {
      a.preventDefault(), a.stopPropagation(), d.setData("text/html", r.component.outerHTML);
    },
    onCopy_wysiwyg: function(a) {
      const r = o.isIE ? f.clipboardData : a.clipboardData;
      if (typeof k.onCopy == "function" && k.onCopy(a, r, c) === !1)
        return a.preventDefault(), a.stopPropagation(), !1;
      const d = c.currentFileComponentInfo;
      d && !o.isIE && (g._setClipboardComponent(a, d, r), o.addClass(d.component, "se-component-copy"), f.setTimeout(function() {
        o.removeClass(d.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(a) {
      if (typeof k.onSave == "function") {
        k.onSave(a, c);
        return;
      }
    },
    onCut_wysiwyg: function(a) {
      const r = o.isIE ? f.clipboardData : a.clipboardData;
      if (typeof k.onCut == "function" && k.onCut(a, r, c) === !1)
        return a.preventDefault(), a.stopPropagation(), !1;
      const d = c.currentFileComponentInfo;
      d && !o.isIE && (g._setClipboardComponent(a, d, r), o.removeItem(d.component), c.controllersOff()), f.setTimeout(function() {
        c.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(a) {
      if (c.isReadOnly || o.isIE)
        return a.preventDefault(), a.stopPropagation(), !1;
      const r = a.dataTransfer;
      return r ? (g._setDropLocationSelection(a), c.removeNode(), document.body.contains(c.currentControllerTarget) || c.controllersOff(), g._dataTransferAction("drop", a, r)) : !0;
    },
    _setDropLocationSelection: function(a) {
      const r = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let d = null;
      if (a.rangeParent ? (r.startContainer = a.rangeParent, r.startOffset = a.rangeOffset, r.endContainer = a.rangeParent, r.endOffset = a.rangeOffset) : c._wd.caretRangeFromPoint ? d = c._wd.caretRangeFromPoint(a.clientX, a.clientY) : d = c.getRange(), d && (r.startContainer = d.startContainer, r.startOffset = d.startOffset, r.endContainer = d.endContainer, r.endOffset = d.endOffset), r.startContainer === r.endContainer) {
        const h = o.getParentElement(r.startContainer, o.isComponent);
        h && (r.startContainer = h, r.startOffset = 0, r.endContainer = h, r.endOffset = 0);
      }
      c.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(a, r, d) {
      let h, p;
      if (o.isIE) {
        h = d.getData("Text");
        const v = c.getRange(), m = o.createElement("DIV"), y = {
          sc: v.startContainer,
          so: v.startOffset,
          ec: v.endContainer,
          eo: v.endOffset
        };
        return m.setAttribute("contenteditable", !0), m.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(m), m.focus(), f.setTimeout(function() {
          p = m.innerHTML, o.removeItem(m), c.setRange(y.sc, y.so, y.ec, y.eo), g._setClipboardData(a, r, h, p, d);
        }), !0;
      } else if (h = d.getData("text/plain"), p = d.getData("text/html"), g._setClipboardData(a, r, h, p, d) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(a, r, d, h, p) {
      const v = /class=["']*Mso(Normal|List)/i.test(h) || /content=["']*Word.Document/i.test(h) || /content=["']*OneNote.File/i.test(h) || /content=["']*Excel.Sheet/i.test(h);
      !h ? h = o._HTMLConvertor(d).replace(/\n/g, "<br>") : (h = h.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), v && (h = h.replace(/\n/g, " "), d = d.replace(/\n/g, " ")), h = c.cleanHTML(h, c.pasteTagsWhitelistRegExp, c.pasteTagsBlacklistRegExp));
      const y = c._charCount(c._charTypeHTML ? h : d);
      if (a === "paste" && typeof k.onPaste == "function") {
        const C = k.onPaste(r, h, y, c);
        if (C === !1)
          return !1;
        if (typeof C == "string") {
          if (!C) return !1;
          h = C;
        }
      }
      if (a === "drop" && typeof k.onDrop == "function") {
        const C = k.onDrop(r, h, y, c);
        if (C === !1)
          return !1;
        if (typeof C == "string") {
          if (!C) return !1;
          h = C;
        }
      }
      const _ = p.files;
      if (_.length > 0 && !v)
        return /^image/.test(_[0].type) && c.plugins.image && k.insertImage(_), !1;
      if (!y)
        return !1;
      if (h)
        return k.insertHTML(h, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(a) {
      if (c.isDisabled || c.isReadOnly) return !1;
      const r = o.getParentElement(a.target, o.isComponent), d = c._lineBreaker.style;
      if (r && !c.currentControllerName) {
        const h = e.element;
        let p = 0, v = h.wysiwyg;
        do
          p += v.scrollTop, v = v.parentElement;
        while (v && !/^(BODY|HTML)$/i.test(v.nodeName));
        const m = h.wysiwyg.scrollTop, y = g._getEditorOffsets(null), _ = o.getOffset(r, h.wysiwygFrame).top + m, C = a.pageY + p + (i.iframe && !i.toolbarContainer ? h.toolbar.offsetHeight : 0), w = _ + (i.iframe ? p : y.top), z = o.isListCell(r.parentNode);
        let T = "", B = "";
        if ((z ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) && C < w + 20)
          B = _, T = "t";
        else if ((z ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) && C > w + r.offsetHeight - 20)
          B = _ + r.offsetHeight, T = "b";
        else {
          d.display = "none";
          return;
        }
        c._variable._lineBreakComp = r, c._variable._lineBreakDir = T, d.top = B - m + "px", c._lineBreakerButton.style.left = o.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", d.display = "block";
      } else d.display !== "none" && (d.display = "none");
    },
    _enterPrevent: function(a) {
      a.preventDefault(), o.isMobile && c.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(a) {
      a.preventDefault();
    },
    _onLineBreak: function(a) {
      a.preventDefault();
      const r = c._variable._lineBreakComp, d = this ? this : c._variable._lineBreakDir, h = o.isListCell(r.parentNode), p = o.createElement(h ? "BR" : o.isCell(r.parentNode) ? "DIV" : i.defaultTag);
      if (h || (p.innerHTML = "<br>"), c._charTypeHTML && !c.checkCharCount(p.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(p, d === "t" ? r : r.nextSibling), c._lineBreaker.style.display = "none", c._variable._lineBreakComp = null;
      const v = h ? p : p.firstChild;
      c.setRange(v, 1, v, 1), c.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const a = i.iframe ? c._ww : e.element.wysiwyg;
      o.isResizeObserverSupported && (this._resizeObserver = new f.ResizeObserver(function(r) {
        c.__callResizeFunction(-1, r[0]);
      })), e.element.toolbar.addEventListener("mousedown", g._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", g._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", g.onClick_toolbar, !1), a.addEventListener("mousedown", g.onMouseDown_wysiwyg, !1), a.addEventListener("click", g.onClick_wysiwyg, !1), a.addEventListener(o.isIE ? "textinput" : "input", g.onInput_wysiwyg, !1), a.addEventListener("keydown", g.onKeyDown_wysiwyg, !1), a.addEventListener("keyup", g.onKeyUp_wysiwyg, !1), a.addEventListener("paste", g.onPaste_wysiwyg, !1), a.addEventListener("copy", g.onCopy_wysiwyg, !1), a.addEventListener("cut", g.onCut_wysiwyg, !1), a.addEventListener("drop", g.onDrop_wysiwyg, !1), a.addEventListener("scroll", g.onScroll_wysiwyg, !1), a.addEventListener("focus", g.onFocus_wysiwyg, !1), a.addEventListener("blur", g.onBlur_wysiwyg, !1), g._lineBreakerBind = { a: g._onLineBreak.bind(""), t: g._onLineBreak.bind("t"), b: g._onLineBreak.bind("b") }, a.addEventListener("mousemove", g.onMouseMove_wysiwyg, !1), c._lineBreakerButton.addEventListener("mousedown", g._onMouseDown_lineBreak, !1), c._lineBreakerButton.addEventListener("click", g._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", g._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", g._lineBreakerBind.b, !1), a.addEventListener("touchstart", g.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), a.addEventListener("touchend", g.onClick_wysiwyg, { passive: !0, useCapture: !1 }), i.height === "auto" && !i.codeMirrorEditor && (e.element.code.addEventListener("keydown", g._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", g._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", g._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(i.height) && i.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", g.onMouseDown_resizingBar, !1) : o.addClass(e.element.resizingBar, "se-resizing-none")), g._setResponsiveToolbar(), o.isResizeObserverSupported && (this._toolbarObserver = new f.ResizeObserver(c.resetResponsiveToolbar)), f.addEventListener("resize", g.onResize_window, !1), i.stickyToolbar > -1 && f.addEventListener("scroll", g.onScroll_window, !1);
    },
    _removeEvent: function() {
      const a = i.iframe ? c._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", g._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", g._buttonsEventHandler), e.element.toolbar.removeEventListener("click", g.onClick_toolbar), a.removeEventListener("mousedown", g.onMouseDown_wysiwyg), a.removeEventListener("click", g.onClick_wysiwyg), a.removeEventListener(o.isIE ? "textinput" : "input", g.onInput_wysiwyg), a.removeEventListener("keydown", g.onKeyDown_wysiwyg), a.removeEventListener("keyup", g.onKeyUp_wysiwyg), a.removeEventListener("paste", g.onPaste_wysiwyg), a.removeEventListener("copy", g.onCopy_wysiwyg), a.removeEventListener("cut", g.onCut_wysiwyg), a.removeEventListener("drop", g.onDrop_wysiwyg), a.removeEventListener("scroll", g.onScroll_wysiwyg), a.removeEventListener("mousemove", g.onMouseMove_wysiwyg), c._lineBreakerButton.removeEventListener("mousedown", g._onMouseDown_lineBreak), c._lineBreakerButton.removeEventListener("click", g._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", g._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", g._lineBreakerBind.b), g._lineBreakerBind = null, a.removeEventListener("touchstart", g.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), a.removeEventListener("touchend", g.onClick_wysiwyg, { passive: !0, useCapture: !1 }), a.removeEventListener("focus", g.onFocus_wysiwyg), a.removeEventListener("blur", g.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", g._codeViewAutoHeight), e.element.code.removeEventListener("keyup", g._codeViewAutoHeight), e.element.code.removeEventListener("paste", g._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", g.onMouseDown_resizingBar), g._resizeObserver && (g._resizeObserver.unobserve(e.element.wysiwygFrame), g._resizeObserver = null), g._toolbarObserver && (g._toolbarObserver.unobserve(e.element._toolbarShadow), g._toolbarObserver = null), f.removeEventListener("resize", g.onResize_window), f.removeEventListener("scroll", g.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (s.length === 0) {
        s = null;
        return;
      }
      g._responsiveCurrentSize = "default";
      const a = g._responsiveButtonSize = [], r = g._responsiveButtons = { default: s[0] };
      for (let d = 1, h = s.length, p, v; d < h; d++)
        v = s[d], p = v[0] * 1, a.push(p), r[p] = v[1];
      a.sort(function(d, h) {
        return d - h;
      }).unshift("default");
    }
  }, k = {
    /**
     * @description Core, Util object
     */
    core: c,
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
    setToolbarButtons: function(a) {
      c.submenuOff(), c.containerOff(), c.moreLayerOff();
      const r = nl._createToolBar(u, a, c.plugins, i);
      s = r.responsiveButtons, g._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const d = ol(e.element.originElement, c._getConstructed(e.element), i);
      e.element = d.element, e.tool = d.tool, i.iframe && (e.element.wysiwyg = c._wd.body), c._recoverButtonStates(), c._cachingButtons(), c.history._resetCachingButton(), c.effectNode = null, c.hasFocus && g._applyTagEffects(), c.isReadOnly && o.setDisabledButtons(!0, c.resizingDisabledButtons), typeof k.onSetToolbarButtons == "function" && k.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), c);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(a) {
      g._removeEvent(), c._resetComponents(), o.removeClass(c._styleCommandMap.showBlocks, "active"), o.removeClass(c._styleCommandMap.codeView, "active"), c._variable.isCodeView = !1, c._iframeAuto = null, c.plugins = a.plugins || c.plugins;
      const r = [i, a].reduce(function(v, m) {
        for (let y in m)
          if (o.hasOwn(m, y))
            if (y === "plugins" && m[y] && v[y]) {
              let _ = v[y], C = m[y];
              _ = _.length ? _ : f.Object.keys(_).map(function(w) {
                return _[w];
              }), C = C.length ? C : f.Object.keys(C).map(function(w) {
                return C[w];
              }), v[y] = C.filter(function(w) {
                return _.indexOf(w) === -1;
              }).concat(_);
            } else
              v[y] = m[y];
        return v;
      }, {}), d = e.element, h = d.wysiwyg.innerHTML, p = nl._setOptions(r, e, i);
      p.callButtons && (t = p.callButtons, c.initPlugins = {}), p.plugins && (c.plugins = n = p.plugins), d._menuTray.children.length === 0 && (this._menuTray = {}), s = p.toolbar.responsiveButtons, c.options = i = r, c.lang = l = i.lang, i.iframe && d.wysiwygFrame.addEventListener("load", function() {
        o._setIframeDocument(this, i), c._setOptionsInit(d, h);
      }), d.editorArea.appendChild(d.wysiwygFrame), i.iframe || c._setOptionsInit(d, h);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(a) {
      const r = i._editorStyles = o._setDefaultOptionStyle(i, a), d = e.element;
      d.topArea.style.cssText = r.top, d.code.style.cssText = i._editorStyles.frame, d.code.style.display = "none", i.height === "auto" ? d.code.style.overflow = "hidden" : d.code.style.overflow = "", i.iframe ? (d.wysiwygFrame.style.cssText = r.frame, d.wysiwyg.style.cssText = r.editor) : d.wysiwygFrame.style.cssText = r.frame + r.editor;
    },
    /**
     * @description Open a notice area
     * @param {String} message Notice message
     */
    noticeOpen: function(a) {
      c.notice.open.call(c, a);
    },
    /**
     * @description Close a notice area
     */
    noticeClose: function() {
      c.notice.close.call(c);
    },
    /**
     * @description Copying the contents of the editor to the original textarea and execute onSave callback
     * * not working during enabled codeView mode
     */
    save: function() {
      const a = c.getContents(!1);
      e.element.originElement.value = a, g.onSave_wysiwyg(a, c);
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
    getContents: function(a) {
      return c.getContents(a);
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
    getCharCount: function(a) {
      return a = typeof a == "string" ? a : i.charCounterType, c.getCharLength(c._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, a);
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
    getFilesInfo: function(a) {
      return e[a] ? e[a]._infoList : [];
    },
    /**
     * @description Upload images using image plugin
     * @param {FileList} files FileList
     */
    insertImage: function(a) {
      !c.plugins.image || !a || (c.initPlugins.image ? c.plugins.image.submitAction.call(c, a) : c.callPlugin("image", c.plugins.image.submitAction.bind(c, a), null), c.focus());
    },
    /**
     * @description Inserts an HTML element or HTML string or plain string at the current cursor position
     * @param {Element|String} html HTML Element or HTML string or plain string
     * @param {Boolean} notCleaningData If true, inserts the HTML string without refining it with core.cleanHTML.
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} rangeSelection If true, range select the inserted node.
     */
    insertHTML: function(a, r, d, h) {
      if (e.element.wysiwygFrame.contains(c.getSelection().focusNode) || c.focus(), typeof a == "string") {
        r || (a = c.cleanHTML(a, null, null));
        try {
          if (o.isListCell(o.getFormatElement(c.getSelectionNode(), null))) {
            const B = u.createRange().createContextualFragment(a).childNodes;
            c._isFormatData(B) && (a = c._convertListCell(B));
          }
          const v = u.createRange().createContextualFragment(a).childNodes;
          if (d) {
            const T = c._charTypeHTML ? "outerHTML" : "textContent";
            let B = "";
            for (let N = 0, $ = v.length; N < $; N++)
              B += v[N][T];
            if (!c.checkCharCount(B, null)) return;
          }
          let m, y, _, C, w;
          for (; m = v[0]; ) {
            if (C && C.nodeType === 3 && y && y.nodeType === 1 && o.isBreak(m)) {
              C = m, o.removeItem(m);
              continue;
            }
            _ = c.insertNode(m, y, !1), y = _.container || _, w || (w = _), C = m;
          }
          C.nodeType === 3 && y.nodeType === 1 && (y = C);
          const z = y.nodeType === 3 ? _.endOffset || y.textContent.length : y.childNodes.length;
          h ? c.setRange(w.container || w, w.startOffset || 0, y, z) : c.setRange(y, z, y, z);
        } catch (p) {
          if (c.isDisabled || c.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + p), c.execCommand("insertHTML", !1, a);
        }
      } else if (o.isComponent(a))
        c.insertComponent(a, !1, d, !1);
      else {
        let p = null;
        (o.isFormatElement(a) || o.isMedia(a)) && (p = o.getFormatElement(c.getSelectionNode(), null)), c.insertNode(a, p, d);
      }
      c.effectNode = null, c.focus(), c.history.push(!1);
    },
    /**
     * @description Change the contents of the suneditor
     * @param {String|undefined} contents Contents to Input
     */
    setContents: function(a) {
      c.setContents(a);
    },
    /**
     * @description Add contents to the suneditor
     * @param {String} contents Contents to Input
     */
    appendContents: function(a) {
      const r = c.convertContentsForEditor(a);
      if (c._variable.isCodeView)
        c._setCodeView(c._getCodeView() + `
` + c.convertHTMLForCodeView(r, !1));
      else {
        const d = o.createElement("DIV");
        d.innerHTML = r;
        const h = e.element.wysiwyg, p = d.children;
        for (let v = 0, m = p.length; v < m; v++)
          p[v] && h.appendChild(p[v]);
      }
      c.history.push(!1);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(a) {
      c.isReadOnly = a, o.setDisabledButtons(!!a, c.resizingDisabledButtons), a ? (c.controllersOff(), c.submenuActiveButton && c.submenuActiveButton.disabled && c.submenuOff(), c._moreLayerActiveButton && c._moreLayerActiveButton.disabled && c.moreLayerOff(), c.containerActiveButton && c.containerActiveButton.disabled && c.containerOff(), c.modalForm && c.plugins.dialog.close.call(c), e.element.code.setAttribute("readOnly", "true"), o.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), o.removeClass(e.element.wysiwygFrame, "se-read-only")), i.codeMirrorEditor && i.codeMirrorEditor.setOption("readOnly", !!a);
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
      const a = e.element.topArea.style;
      a.display === "none" && (a.display = i.display);
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
      c.submenuOff(), c.containerOff(), c.controllersOff(), c.notice && c.notice.close.call(c), c.modalForm && c.plugins.dialog.close.call(c), c.history._destroy(), g._removeEvent(), o.removeItem(e.element.toolbar), o.removeItem(e.element.topArea);
      for (let a in c.functions)
        o.hasOwn(c, a) && delete c.functions[a];
      for (let a in c)
        o.hasOwn(c, a) && delete c[a];
      for (let a in g)
        o.hasOwn(g, a) && delete g[a];
      for (let a in e)
        o.hasOwn(e, a) && delete e[a];
      for (let a in t)
        o.hasOwn(t, a) && delete t[a];
      for (let a in this)
        o.hasOwn(this, a) && delete this[a];
    },
    /**
     * @description Toolbar methods
     */
    toolbar: {
      /**
       * @description Disable the toolbar
       */
      disable: function() {
        c.submenuOff(), c.moreLayerOff(), c.containerOff(), e.tool.cover.style.display = "block";
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
        c._isInline ? g._showToolbarInline() : (e.element.toolbar.style.display = "", e.element._stickyDummy.style.display = ""), g.onResize_window();
      },
      /**
       * @description Hide the toolbar
       */
      hide: function() {
        c._isInline ? g._hideToolbar() : (e.element.toolbar.style.display = "none", e.element._stickyDummy.style.display = "none"), g.onResize_window();
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
        c.controllersOff(), c.modalForm && c.plugins.dialog.close.call(c), e.element.wysiwyg.setAttribute("contenteditable", !1), c.isDisabled = !0, i.codeMirrorEditor ? i.codeMirrorEditor.setOption("readOnly", !0) : e.element.code.setAttribute("disabled", "disabled");
      },
      /**
       * @description Enable the wysiwyg area
       */
      enable: function() {
        e.element.wysiwyg.setAttribute("contenteditable", !0), c.isDisabled = !1, i.codeMirrorEditor ? i.codeMirrorEditor.setOption("readOnly", !1) : e.element.code.removeAttribute("disabled");
      }
    }
  };
  c.functions = k, c.options = i;
  let S = e.element, x = S.originElement, L = S.topArea;
  return x.style.display = "none", L.style.display = "block", i.iframe && S.wysiwygFrame.addEventListener("load", function() {
    o._setIframeDocument(this, i), c._editorInit(!1, i.value), i.value = null;
  }), typeof x.nextElementSibling == "object" ? x.parentNode.insertBefore(L, x.nextElementSibling) : x.parentNode.appendChild(L), S.editorArea.appendChild(S.wysiwygFrame), S = x = L = null, i.iframe || (c._editorInit(!1, i.value), i.value = null), k;
}
const Er = {
  /**
   * @description Returns the create function with preset options.
   * If the options overlap, the options of the 'create' function take precedence.
   * @param {Json} options Initialization options
   * @returns {Object}
   */
  init: function(e) {
    return {
      create: (function(t, n) {
        return this.create(t, n, e);
      }).bind(this)
    };
  },
  /**
   * @description Create the suneditor
   * @param {String|Element} idOrElement textarea Id or textarea element
   * @param {JSON|Object} options user options
   * @returns {Object}
   */
  create: function(e, t, n) {
    ge._propertiesInit(), typeof t != "object" && (t = {}), n && (t = [n, t].reduce(function(s, u) {
      for (let f in u)
        if (ge.hasOwn(u, f))
          if (f === "plugins" && u[f] && s[f]) {
            let o = s[f], b = u[f];
            o = o.length ? o : Object.keys(o).map(function(c) {
              return o[c];
            }), b = b.length ? b : Object.keys(b).map(function(c) {
              return b[c];
            }), s[f] = b.filter(function(c) {
              return o.indexOf(c) === -1;
            }).concat(o);
          } else
            s[f] = u[f];
      return s;
    }, {}));
    const l = typeof e == "string" ? document.getElementById(e) : e;
    if (!l)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const i = nl.init(l, t);
    if (i.constructed._top.id && document.getElementById(i.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + i.constructed._top.id + '")');
    return Tr(ol(l, i.constructed, i.options), i.pluginCallButtons, i.plugins, i.options.lang, t, i._responsiveButtons);
  }
}, Lr = ["innerHTML", "id", "tabindex"], Br = /* @__PURE__ */ we({
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
  setup(e, { expose: t, emit: n }) {
    const l = n, i = e, s = K(null), u = K(i.modelValue);
    let f = null, o;
    const b = K(i.focusing), c = (x) => {
      b.value = !0, l("focus", x);
    }, g = (x) => {
      b.value = !1, l("blur", x);
    }, k = (x) => {
      o && clearTimeout(o), o = setTimeout(() => {
        il(x) === "" ? u.value = "" : u.value = x;
      }, 100);
    }, S = () => {
      let x = {
        //@ts-ignore
        lang: on[i.lang] ? on[i.lang] : Pi,
        plugins: {
          ...kr
        },
        ...xr
      };
      f = Er.create(i.id, x), f.onChange = (L) => {
        k(L), i.disabled ? f == null || f.disabled() : f == null || f.enabled();
      }, f.onKeyUp = (L, a) => {
        k(a.getContents(!1));
      }, f.onBlur = () => {
        g();
      }, f.onClick = () => {
        c();
      };
    };
    return ie(() => i.modelValue, (x) => u.value = x), ie(u, (x) => l("update:modelValue", x)), at(() => {
      S();
    }), t({
      doSetValue: (x) => {
        f && f.setContents(x);
      }
    }), (x, L) => (F(), ce("div", {
      innerHTML: u.value,
      ref_key: "input",
      ref: s,
      id: e.id,
      tabindex: e.tabindex
    }, null, 8, Lr));
  }
}), Xe = (e, t) => {
  if (typeof e == "string" && (e = qe(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let n = e.substring(3), l = yn(n), i = [];
    for (let s in l) i.push({ value: s, label: l[s] });
    return mt.i18nOptionsFormatter[n] && (i = mt.i18nOptionsFormatter[n](i)), Xe(i, t);
  }
  return !Array.isArray(e) || e.length === 0 ? [] : io(
    e.map((n) => {
      if (typeof n == "object") return n;
      if (typeof n == "string" || typeof n == "number")
        return {
          label: String(n),
          value: n
        };
    }).filter((n) => typeof n < "u")
  );
}, io = (e) => e.reduce((t, n) => t.find((i) => i.value === n.value) ? t : t.concat([n]), []), vt = (e, t = "", n = !0, l = void 0) => {
  if (t === "" && typeof l != "function") return !0;
  const i = String(t).toLowerCase();
  let s = String(e.label).toLowerCase();
  return !(!(s.indexOf(i) !== -1 && (n || s !== i)) || typeof l == "function" && !l(e));
}, At = (e, t) => {
  if (t !== "")
    return e.find((n) => Array.isArray(t) ? t.includes(n.value) : n.value == t);
}, zr = (e, t, n) => io([...Xe(t, n), ...e]), Wi = (e, t, n) => {
  if (n) {
    if (Array.isArray(t)) {
      let l = t.findIndex((i) => i == e.value);
      return typeof l > "u" ? !1 : l > -1;
    }
    return !1;
  }
  return e.value == t;
}, Ui = (e, t) => {
  let n = t.findIndex((l) => l == e.value);
  return typeof n > "u" && (n = -1), n;
}, pn = (e, t) => ((t == null ? void 0 : t.filter((l) => l == e.value)) ?? []).map((l) => t.indexOf(l)), Nr = (e, t) => ((t == null ? void 0 : t.filter((l) => l.value == e.value)) ?? []).map((l) => t.indexOf(l)), $i = (e) => {
  var t;
  return e.option.disabled ? !1 : (e.focusedOptionIndex = -1, e.optionValueType === "option" ? e.value.value = e.option : ((t = e.optionsConfig) == null ? void 0 : t.typeCasting) === "int" ? e.value.value = parseInt(e.option.value) : e.value.value = String(e.option.value), e.pickedOptions.splice(0, 1, e.option), e.showOptions = !1, e.searchMode = !1, typeof e.callback == "function" && e.callback({ option: e.option }), !0);
}, qi = (e) => {
  var l, i;
  if (e.option.disabled) return !1;
  let t = [];
  e.optionValueType === "option" ? t = pn(e.option, (l = e.value.value) == null ? void 0 : l.value) : t = pn(e.option, e.value.value);
  let n = Nr(e.option, e.pickedOptions.value);
  return t.length === 0 ? (e.optionValueType === "option" ? e.value.value.push(e.option) : ((i = e.optionsConfig) == null ? void 0 : i.typeCasting) === "int" ? e.value.value.push(parseInt(e.option.value)) : e.value.value.push(String(e.option.value)), e.tagMode || e.pickedOptions.value.push(e.option)) : e.tagMode || (n.forEach((s) => {
    e.pickedOptions.value.splice(s, 1);
  }), t.forEach((s) => {
    e.value.value.splice(s, 1);
  })), typeof e.keepFocused == "function" ? e.keepFocused() : e.searchMode && e.searchField && e.searchField.keepFocused(), typeof e.callback == "function" && e.callback({ option: e.option }), !0;
}, bt = (e) => {
  var n, l, i;
  if (e.multiple) {
    let s = e.options.length;
    for (let u = 0; u < s; ++u) {
      let f = e.optionValueType === "option" ? At(e.options, e.value.value[u].value) : ((n = e.optionsConfig) == null ? void 0 : n.typeCasting) === "int" ? At(e.options, parseInt(e.value.value[u])) : At(e.options, e.value.value[u]);
      typeof f < "u" && (e.pickedOptions.length === 0 ? e.pickedOptions.push(f) : e.pickedOptions.splice(u, 1, f));
    }
    return;
  }
  let t = e.optionValueType === "option" ? At(e.options, (l = e.value.value) == null ? void 0 : l.value) : ((i = e.optionsConfig) == null ? void 0 : i.typeCasting) === "int" ? At(e.options, parseInt(e.value.value)) : At(e.options, e.value.value);
  typeof t < "u" && (e.pickedOptions.length === 0 ? e.pickedOptions.push(t) : e.pickedOptions.splice(0, 1, t));
}, mn = (e) => {
  var l, i, s, u, f;
  let t = e.options.value.length - 1;
  if (t === -1) return !1;
  const n = e.event.key ?? "";
  if (e.focusing) {
    if (["ArrowDown", "ArrowUp", "Enter"].includes(n) && (e.event.preventDefault(), e.event.stopPropagation()), n === "ArrowDown") {
      ++e.focusedIndex.value, e.focusedIndex.value > t && (e.focusedIndex.value = 0);
      let o = e.options.value[e.focusedIndex.value];
      for (; !vt(o, e.query, !0, e.optionsConfig.filter) && e.focusedIndex.value < t; )
        ++e.focusedIndex.value, o = e.options.value[e.focusedIndex.value];
      let b = typeof ((l = e.container.value) == null ? void 0 : l.querySelector) == "function" && ((i = e.container.value) == null ? void 0 : i.querySelector('[data-index="' + e.focusedIndex.value + '"]'));
      return b && b.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" }), !0;
    } else if (n === "ArrowUp") {
      --e.focusedIndex.value, e.focusedIndex.value < 0 && (e.focusedIndex.value = t);
      let o = e.options.value[e.focusedIndex.value];
      for (; !vt(o, e.query, (s = e.optionsConfig) == null ? void 0 : s.filter) && e.focusedIndex.value > 0; )
        --e.focusedIndex.value, o = e.options.value[e.focusedIndex.value];
      let b = typeof ((u = e.container.value) == null ? void 0 : u.querySelector) == "function" && ((f = e.container.value) == null ? void 0 : f.querySelector('[data-index="' + e.focusedIndex.value + '"]'));
      return b && b.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" }), !0;
    } else if (n === "Enter" && e.focusedIndex.value > -1)
      return e.options.value[e.focusedIndex.value];
  }
  return !1;
}, Rr = (e) => {
  var l;
  let t = {
    value: e.query,
    label: e.query
  };
  return (e.optionValueType === "option" ? Ui(t, (l = e.value.value) == null ? void 0 : l.value) : Ui(t, e.value.value)) === -1 ? (e.value.value.push(e.optionValueType === "option" ? t : t.value), e.options.value.push(t), e.pickedOptions.push(t), !0) : !1;
}, Ar = (e) => {
  var n;
  let t = !0;
  for (; t; ) {
    let l = e.optionValueType === "option" ? Ui(e.option, (n = e.value.value) == null ? void 0 : n.value) : Ui(e.option, e.value.value);
    l >= 0 ? (e.options.value.splice(
      e.options.value.findIndex((i) => i.value == e.option.value),
      1
    ), e.pickedOptions.splice(
      e.pickedOptions.findIndex((i) => i.value == e.option.value),
      1
    ), e.value.value.splice(l, 1)) : t = !1;
  }
  return !0;
}, Zi = (e) => {
  var i;
  let t = 0, n = e.options.value.length, l = e.options.value[t];
  for (; !vt(l, e.query, !0, (i = e.optionsConfig) == null ? void 0 : i.filter) && t < n; )
    ++t, l = e.options.value[t];
  e.optionValueType === "option" ? e.multiple ? e.value.value.push(l) : e.value.value = l : e.multiple ? e.value.value.push(l.value) : e.value.value = l.value, e.multiple ? e.pickedOptions.push(l) : e.pickedOptions.splice(0, 1, l);
}, ot = /* @__PURE__ */ we({
  __name: "DropdownOption",
  props: {
    item: {},
    data: {},
    editing: { type: Boolean },
    index: {},
    perms: {},
    events: {}
  },
  emits: [
    "click",
    "click-icon"
  ],
  setup(e, { emit: t }) {
    const n = t, l = e, i = X(() => {
      var L, a, r;
      return (L = l.item) != null && L.icon ? l.item.icon : typeof ((r = (a = l.data) == null ? void 0 : a.optionsConfig) == null ? void 0 : r.icon) == "function" ? l.data.optionsConfig.icon(l.item, l.data.prop) : l.data.optionsConfig.icon;
    }), s = X(() => {
      if (typeof l.data.optionsConfig.text < "u") {
        if (typeof l.data.optionsConfig.text == "function")
          return l.data.optionsConfig.text(l.item, l.data.prop);
        if (l.data.optionsConfig.text !== "") return l.data.optionsConfig.text;
      }
      return u.value;
    }), u = X(() => typeof l.data.optionsConfig.labelFormatter == "function" ? l.data.optionsConfig.labelFormatter(l.item) : l.item.label), f = X(() => {
      var L, a;
      return typeof ((L = l.data.optionsConfig) == null ? void 0 : L.class) == "function" ? l.data.optionsConfig.class(l.item) : typeof ((a = l.data.optionsConfig) == null ? void 0 : a.class) < "u" ? l.data.optionsConfig.class : `lkt-opt-${l.item.value}`;
    }), o = X(() => {
      if (l.data.optionSlot && !(typeof ee.optionSlots[l.data.optionSlot] > "u"))
        return ee.optionSlots[l.data.optionSlot];
    }), b = X(() => {
      var L, a, r;
      return o.value ? o.value : l.data.isTag ? "lkt-tag" : !l.editing && !l.data.previewMode && (typeof ((L = l.data.optionsConfig) == null ? void 0 : L.modal) < "u" && l.data.optionsConfig.modal !== "" || typeof l.item.modal < "u" && l.item.modal !== "") ? "lkt-button" : !l.editing && !l.data.previewMode && typeof ((a = l.data.optionsConfig) == null ? void 0 : a.download) < "u" && l.data.optionsConfig.download !== "" || !l.editing && !l.data.previewMode && typeof ((r = l.data.optionsConfig) == null ? void 0 : r.anchor) < "u" ? "lkt-anchor" : "div";
    }), c = X(() => {
      var L, a, r, d, h, p, v;
      if (b.value === "lkt-button") {
        let m = l.item.modal;
        (L = l.data.optionsConfig) != null && L.modal && (m = l.data.optionsConfig.modal);
        let y = m;
        return typeof m == "function" && (y = () => m(l.item)), {
          modal: y,
          modalData: l.data.optionsConfig.modalData,
          modalKey: l.item.value,
          icon: i.value
        };
      }
      if (b.value === "lkt-anchor") {
        if (typeof ((a = l.data.optionsConfig) == null ? void 0 : a.anchor) == "function") return { ...l.data.optionsConfig.anchor({ data: l.item }), prop: l.item };
        if (typeof ((r = l.data.optionsConfig) == null ? void 0 : r.anchor) == "object") return { ...l.data.optionsConfig.anchor, prop: l.item };
        let m = (d = l.data.optionsConfig) == null ? void 0 : d.download;
        typeof l.data.optionsConfig.download == "function" ? m = () => {
          var _;
          return (_ = l.data.optionsConfig) == null ? void 0 : _.download(l.item);
        } : (p = (h = l.data.optionsConfig) == null ? void 0 : h.download) != null && p.startsWith("prop:") && (m = qe((v = l.data.optionsConfig) == null ? void 0 : v.download, l.item));
        let y = l.data.optionsConfig.download !== "";
        return {
          to: m,
          type: y ? _n.Download : void 0,
          prop: l.item
        };
      }
      return b.value === "lkt-tag" ? {
        type: Vo.ActionIcon,
        icon: "lkt-icn-cancel"
      } : {};
    }), g = X(() => typeof l.item.tags > "u" ? [] : typeof l.item.tags == "function" ? l.item.tags() : l.item.tags), k = () => {
      var L;
      l.item.children && l.item.children.length > 0 || (typeof ((L = l.events) == null ? void 0 : L.click) == "function" && l.events.click(l.item, l.index), n("click"));
    }, S = (L) => {
      l.editing && (L.stopPropagation(), L.preventDefault(), k());
    }, x = () => {
      var L;
      typeof ((L = l.events) == null ? void 0 : L.clickIcon) == "function" && l.events.clickIcon(l.item, l.index), n("click-icon", l.item);
    };
    return (L, a) => {
      const r = pe("lkt-button"), d = pe("lkt-tag");
      return pe("lkt-table"), F(), ce(He, null, [
        e.data.fieldType === D(Z).ToggleButtonGroup ? (F(), Y(r, De(se({ key: 0 }, {
          icon: i.value,
          text: s.value,
          events: {
            click: k
          }
        })), null, 16)) : (F(), Y(dt(b.value), se({ key: 1 }, c.value, {
          class: ["lkt-field--dropdown-option", f.value],
          title: s.value,
          onClick: To(k, ["stop", "prevent"]),
          onClickIcon: x
        }), {
          default: be(() => {
            var h;
            return [
              i.value && b.value !== "lkt-button" ? (F(), ce("div", {
                key: 0,
                class: "lkt-field--dropdown-option--icon-container",
                onClick: S
              }, [
                Ce("i", {
                  class: ct(i.value)
                }, null, 2)
              ])) : ae("", !0),
              Ce("div", {
                class: "lkt-field--dropdown-option--label-container",
                onClick: S
              }, xt(s.value), 1),
              (h = e.data.optionsConfig) != null && h.extendedContentSlotComponent ? (F(), Y(dt(e.data.optionsConfig.extendedContentSlotComponent), De(se({ key: 1 }, {
                ...e.data.optionsConfig.extendedContentSlotData,
                item: e.item
              })), null, 16)) : ae("", !0),
              (F(!0), ce(He, null, St(g.value, (p) => (F(), Y(d, se({ ref_for: !0 }, p), null, 16))), 256))
            ];
          }),
          _: 1
        }, 16, ["class", "title"])),
        ae("", !0)
      ], 64);
    };
  }
}), Ir = {
  key: 0,
  class: "lkt-field--searchable-box"
}, Vr = ["value", "placeholder", "disabled"], Dr = {
  key: 1,
  class: "lkt-field--searchable-box"
}, Mr = ["value", "placeholder", "disabled"], Or = { key: 0 }, gn = /* @__PURE__ */ we({
  __name: "SelectInput",
  props: {
    modelValue: {},
    isAutoCompleteText: { type: Boolean, default: !1 },
    searchable: { type: Boolean },
    searchMode: { type: Boolean },
    isLoading: { type: Boolean },
    multiple: { type: Boolean },
    canTag: { type: Boolean },
    options: {},
    optionsConfig: {},
    optionSlot: {},
    pickedOptions: {},
    showOptions: { type: Boolean },
    editable: { type: Boolean },
    focusing: { type: Boolean },
    searchPlaceholder: {},
    multipleDisplayEdition: {},
    prop: { default: () => ({}) },
    max: {},
    tooltip: {},
    optionValueType: {},
    events: {},
    referrer: {},
    autoLoading: { type: Boolean, default: !1 },
    localAutoLoad: { type: Boolean, default: !1 }
  },
  emits: [
    "update:modelValue",
    "update:showOptions",
    "update:options",
    "update:pickedOptions",
    "focus",
    "blur",
    "change",
    "loaded",
    "autoload-start",
    "autoload-end"
  ],
  setup(e, { expose: t, emit: n }) {
    const l = n, i = K(null), s = K(null), u = e, f = K(u.modelValue), o = K(-1), b = u.multiple && u.canTag, c = typeof u.options == "object" && u.optionValueType !== "option" ? JSON.parse(JSON.stringify(u.options)) : u.options, g = K([...Xe(u.options, u.prop)]), k = K(!0);
    ie(k, (A) => {
      A || Te(() => {
        k.value = !0;
      });
    }), ie(() => u.modelValue, (A) => {
      var j;
      !A && ((j = u.optionsConfig) != null && j.autoPickFirstOptionIfEmpty) ? (u.pickedOptions.splice(0, u.pickedOptions.length), Te(() => {
        Zi({
          value: f,
          optionValueType: u.optionValueType,
          multiple: u.multiple,
          query: S.value,
          optionsConfig: u.optionsConfig,
          options: g,
          pickedOptions: u.pickedOptions
        });
      })) : f.value = A;
    }, { deep: !0 }), ie(f, (A) => {
      l("update:modelValue", A);
    }, { deep: !0 }), ie(g, (A) => {
      var j;
      typeof ((j = u.events) == null ? void 0 : j.updatedOptions) == "function" && (k.value = !1, u.events.updatedOptions({
        options: A
      })), l("update:options", A);
    }), ie(() => u.options, (A, j) => {
      if (!k.value) return;
      let G = new nt({
        opts: j
      });
      G.increment({ opts: A }), G.changed() && (g.value = Xe(A, u.prop), E());
    }, { deep: !0 });
    const S = K(""), x = K(null), L = K(u.pickedOptions);
    ie(L, (A) => {
      l("update:pickedOptions", A), u.optionValueType === "option" && u.multipleDisplayEdition === kt.Table && (f.value = L.value);
    }, { deep: !0 });
    const a = K(!1), r = K(u.showOptions);
    ie(r, (A) => {
      b || l("update:showOptions", A), Te(() => {
        A || (p.value = !1, h.value = !1, d.value = !1), a.value = r.value;
      });
    });
    const d = K(u.focusing), h = K(!1), p = K(!1);
    ie(() => u.focusing, (A) => {
      A !== d.value && Te(() => {
        A ? B() : z();
      });
    }), ie(d, (A) => {
      l(A ? "focus" : "blur");
    });
    let v, m;
    const y = (A) => {
      v = setTimeout(() => {
        h.value = !1, d.value = p.value, r.value = d.value;
      }, 100);
    }, _ = (A) => {
      if (h.value = !0, b && A.key === "Enter") {
        if (S.value.length === 0) return;
        Rr({
          value: f,
          query: S.value,
          optionValueType: u.optionValueType,
          options: g,
          pickedOptions: L.value
        }) && (S.value = "");
      } else if (["ArrowDown", "ArrowUp", "Enter"].includes(A.key)) {
        let j = mn({
          event: A,
          options: g,
          focusing: u.focusing,
          container: s,
          focusedIndex: o,
          optionsConfig: u.optionsConfig,
          query: S.value
        });
        typeof j == "object" && P(j);
      } else ["Escape"].includes(A.key) && (h.value = !1, p.value = !1, d.value = !1, r.value = !1);
    }, C = (A) => {
      h.value = !0, p.value = !1, d.value = !0, r.value = !0;
    }, w = () => {
      clearTimeout(v), clearTimeout(m), setTimeout(() => {
        x.value && x.value.focus();
      }, 100);
    }, z = (A) => {
      M.value || (m = setTimeout(() => {
        p.value = !1, d.value = h.value, r.value = d.value;
      }, 100));
    }, T = (A) => {
      if (p.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(A.key)) {
        let j = mn({
          event: A,
          options: g,
          focusing: u.focusing,
          container: s,
          focusedIndex: o,
          optionsConfig: u.optionsConfig,
          query: S.value
        });
        typeof j == "object" && P(j);
      } else ["Escape"].includes(A.key) && (h.value = !1, p.value = !1, d.value = !1, r.value = !1);
    }, B = (A) => {
      u.searchable ? (p.value = !1, h.value = !0, d.value = !0, r.value = !0, Te(() => {
        w();
      })) : (p.value = !0, h.value = !1, d.value = !0, r.value = !0);
    }, N = (A) => {
      Ar({
        value: f,
        option: A,
        optionValueType: u.optionValueType,
        options: g,
        pickedOptions: L.value
      });
    };
    t({
      doClear: () => {
        u.isAutoCompleteText ? (S.value = "", f.value = "") : u.multiple ? f.value.splice(0, f.value.length) : f.value = "", L.value.splice(0, L.value.length), Te(() => {
          E();
        });
      },
      doUndo: (A) => {
        if (u.isAutoCompleteText)
          f.value = A;
        else if (u.multiple) {
          f.value.splice(0, f.value.length);
          let j = 0, G = A.length;
          for (; j < G; )
            f.value.push(
              A[j]
            ), ++j;
        } else
          f.value = A;
        L.value.splice(0, L.value.length), Te(() => {
          E();
        });
      },
      keepFocused: w,
      switchShowOptions: () => {
        r.value = !r.value;
      }
    }), ie(() => u.pickedOptions, (A) => {
      l("change"), L.value = A;
    }, { deep: !0 });
    const U = X(() => u.multiple && (u.canTag || u.searchable)), M = X(() => !u.multiple && u.searchable && d.value), P = (A) => {
      var G, te;
      if (u.isAutoCompleteText) {
        S.value = A.value, f.value = A.value;
        return;
      }
      (u.multiple ? qi({
        option: A,
        value: f,
        pickedOptions: L,
        tagMode: b,
        searchMode: u.searchable,
        keepFocused: w,
        optionValueType: u.optionValueType,
        callback: (G = u.events) == null ? void 0 : G.clickOption,
        optionsConfig: u.optionsConfig
      }) : $i({
        option: A,
        value: f,
        pickedOptions: L.value,
        showOptions: r.value,
        optionValueType: u.optionValueType,
        callback: (te = u.events) == null ? void 0 : te.clickOption,
        optionsConfig: u.optionsConfig
      })) && (u.searchable && !u.multiple && (S.value = ""), typeof u.events.clickOption == "function" && u.events.clickOption({
        option: A
      }));
    }, E = () => {
      u.multiple ? bt({
        value: f,
        options: g.value,
        pickedOptions: L.value,
        multiple: u.multiple,
        optionValueType: u.optionValueType,
        optionsConfig: u.optionsConfig
      }) : bt({
        value: f,
        options: g.value,
        pickedOptions: L.value,
        multiple: u.multiple,
        optionValueType: u.optionValueType,
        optionsConfig: u.optionsConfig
      }), l("loaded");
    }, H = () => {
      if (u.autoLoading && u.optionsConfig.autoloadResource === "feed" && u.multiple)
        for (let A = 0; A < g.value.length; ++A)
          u.optionValueType === "option" ? f.value.push(g.value[A]) : f.value.push(g.value[A].value);
      o.value = -1, E();
    }, I = X(() => {
      var te, J, Q;
      if (!((te = u.optionsConfig.http) != null && te.resource)) return;
      let A = {
        ...(J = u.optionsConfig.http) == null ? void 0 : J.data
      };
      ee.searchKeyForResource !== "" && (A[ee.searchKeyForResource] = S.value);
      const j = (oe) => {
        var de, re, le, me;
        u.autoLoading && u.optionsConfig.autoloadResource && l("autoload-start"), typeof ((re = (de = u.optionsConfig.http) == null ? void 0 : de.events) == null ? void 0 : re.onStart) == "function" && ((me = (le = u.optionsConfig.http) == null ? void 0 : le.events) == null || me.onStart(oe));
      }, G = (oe) => {
        var de, re, le, me;
        u.autoLoading && u.optionsConfig.autoloadResource && l("autoload-end"), typeof ((re = (de = u.optionsConfig.http) == null ? void 0 : de.events) == null ? void 0 : re.onEnd) == "function" && ((me = (le = u.optionsConfig.http) == null ? void 0 : le.events) == null || me.onEnd(oe));
      };
      return {
        resource: (Q = u.optionsConfig.http) == null ? void 0 : Q.resource,
        resourceData: A,
        events: {
          httpStart: j,
          httpEnd: G
        }
      };
    }), W = X(() => u.autoLoading ? "div" : "lkt-tooltip"), R = X(() => u.isAutoCompleteText || M.value || U.value ? x.value : u.referrer);
    return at(() => {
      u.isAutoCompleteText && (S.value = f.value), E();
    }), (A, j) => {
      var Q, oe, de, re;
      const G = pe("lkt-tag"), te = pe("lkt-table"), J = pe("lkt-button");
      return F(), ce(He, null, [
        e.isAutoCompleteText ? (F(), ce("div", Ir, [
          Ve(Ce("input", {
            "onUpdate:modelValue": j[0] || (j[0] = (le) => S.value = le),
            ref_key: "queryField",
            ref: x,
            value: S.value,
            placeholder: e.searchPlaceholder,
            disabled: L.value.length === e.max,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: _,
            onBlur: y,
            onFocus: C
          }, null, 40, Vr), [
            [Tt, S.value]
          ])
        ])) : !e.autoLoading && (M.value || U.value) ? (F(), ce("div", Dr, [
          e.multiple ? (F(), Y(G, De(se({ key: 0 }, {
            icon: e.optionsConfig.icon,
            text: L.value.length
          })), null, 16)) : L.value.length > 0 ? (F(), Y(G, De(se({ key: 1 }, {
            icon: L.value[0].icon ?? e.optionsConfig.icon,
            text: L.value[0].label
          })), null, 16)) : ae("", !0),
          Ve(Ce("input", {
            "onUpdate:modelValue": j[1] || (j[1] = (le) => S.value = le),
            ref_key: "queryField",
            ref: x,
            value: S.value,
            placeholder: e.searchPlaceholder,
            disabled: L.value.length === e.max,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: _,
            onBlur: y,
            onFocus: C
          }, null, 40, Mr), [
            [Tt, S.value]
          ])
        ])) : ae("", !0),
        !e.autoLoading && !e.isAutoCompleteText ? Ve((F(), Y(J, se({
          key: 2,
          ref_key: "selectButton",
          ref: i
        }, {
          type: D(b) || !(typeof ((Q = e.optionsConfig) == null ? void 0 : Q.canRenderDropdown) > "u" || ((oe = e.optionsConfig) == null ? void 0 : oe.canRenderDropdown) === !0) ? D(je).Content : D(je).Button,
          class: "lkt-field--toggle-button lkt-field--select-button"
        }, {
          onKeyup: T,
          onBlur: z,
          onFocus: B
        }), {
          default: be(() => [
            D(b) || e.multiple && L.value.length > 0 ? (F(), ce(He, { key: 0 }, [
              e.multipleDisplayEdition === D(kt).Count ? (F(), ce("div", Or, xt(L.value.length), 1)) : e.multipleDisplayEdition === D(kt).Table ? (F(), Y(te, se({
                key: 1,
                modelValue: L.value,
                "onUpdate:modelValue": j[2] || (j[2] = (le) => L.value = le)
              }, {
                ...e.optionsConfig.table,
                editMode: e.editable
              }), null, 16, ["modelValue"])) : (F(), Y(te, se({
                key: 2,
                modelValue: L.value,
                "onUpdate:modelValue": j[3] || (j[3] = (le) => L.value = le)
              }, {
                type: D(gt).Ul,
                editMode: e.editable,
                itemsContainerClass: `lkt-field-select-read multiple-display-${e.multipleDisplayEdition}`,
                itemSlotComponent: Dt(ot),
                itemSlotData: {
                  optionSlot: e.optionSlot,
                  previewMode: !0,
                  prop: e.prop,
                  isTag: D(b),
                  optionsConfig: e.optionsConfig
                },
                itemSlotEvents: {
                  clickIcon: N
                }
              }), null, 16, ["modelValue"]))
            ], 64)) : !e.multiple && L.value.length > 0 ? (F(), Y(ot, De(se({ key: 1 }, {
              item: L.value[0],
              data: {
                optionSlot: e.optionSlot,
                previewMode: !0,
                prop: e.prop,
                isTag: D(b),
                optionsConfig: e.optionsConfig
              }
            })), null, 16)) : ae("", !0)
          ]),
          _: 1
        }, 16)), [
          [it, !M.value || U.value]
        ]) : ae("", !0),
        typeof ((de = e.optionsConfig) == null ? void 0 : de.canRenderDropdown) > "u" || ((re = e.optionsConfig) == null ? void 0 : re.canRenderDropdown) === !0 ? (F(), Y(dt(W.value), se({
          key: 3,
          ref_key: "dropdownEl",
          ref: s
        }, e.autoLoading ? {} : {
          class: "lkt-field--dropdown",
          referrer: R.value,
          referrerWidth: !0,
          locationX: D(Ht).LeftCorner,
          locationY: D(Ot).Bottom,
          ...e.tooltip,
          modelValue: r.value,
          remoteControl: !0
        }), {
          default: be(() => [
            e.autoLoading && !e.localAutoLoad || a.value ? Ve((F(), Y(te, se({
              key: 0,
              ref: "optionList",
              modelValue: g.value,
              "onUpdate:modelValue": j[4] || (j[4] = (le) => g.value = le)
            }, {
              type: D(gt).Ul,
              editMode: e.editable,
              paginator: I.value,
              events: {
                parseResults: (le) => {
                  var me;
                  return (me = e.optionsConfig.http) != null && me.resource ? D(zr)(D(Xe)(D(c), u.prop), le, e.prop) : D(Xe)(D(c), u.prop);
                }
              },
              itemDisplayChecker: (le) => {
                var me;
                return D(vt)(le, S.value, !0, (me = e.optionsConfig) == null ? void 0 : me.filter);
              },
              itemsContainerClass: "lkt-field--dropdown-options",
              itemContainerClass: (le, me) => {
                let Ee = [];
                return D(Wi)(le, f.value, e.multiple) && Ee.push("is-active"), o.value === me && Ee.push("is-focused"), le.disabled && Ee.push("is-disabled"), Ee.join(" ");
              },
              itemSlotComponent: Dt(ot),
              itemSlotData: {
                optionSlot: e.optionSlot,
                editable: e.editable,
                prop: e.prop,
                isTag: D(b),
                optionsConfig: e.optionsConfig,
                query: S.value,
                editableValue: f.value,
                multiple: e.multiple,
                focusedOptionIndex: o.value
              },
              itemSlotEvents: {
                click: (le, me) => {
                  P(le);
                }
              }
            }, { onReadResponse: H }), null, 16, ["modelValue"])), [
              [it, !e.autoLoading]
            ]) : ae("", !0)
          ]),
          _: 1
        }, 16)) : ae("", !0)
      ], 64);
    };
  }
}), Hr = { class: "lkt-calc--formula" }, Fr = { class: "lkt-calc--custom-pad" }, Ur = { class: "lkt-calc--pad" }, Pr = { class: "lkt-calc--numeric-pad" }, Wr = { class: "lkt-calc--math-pad" }, $r = { class: "lkt-calc--advance-math-pad" }, qr = /* @__PURE__ */ we({
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
    const n = t, l = e, i = K(l.modelValue), s = K(null);
    ie(i, (p) => n("update:modelValue", p));
    const u = K(l.focusing), f = K(null);
    let o;
    const b = () => {
      clearTimeout(o), s.value && typeof s.value.focus == "function" && s.value.focus();
    }, c = (p) => {
      i.value += "" + p, b();
    }, g = (p) => {
      i.value += " " + p + " ", b();
    }, k = (p) => {
      i.value += " " + p + "(", b();
    }, S = () => {
      i.value += " sqrt(", b();
    }, x = (p) => {
      i.value += "" + p, b();
    }, L = () => {
      i.value += ".", b();
    }, a = () => {
      i.value += " ", b();
    }, r = (p) => {
      i.value += "" + p.value, b();
    }, d = () => {
      u.value = !0;
    }, h = () => {
      o = setTimeout(() => {
        u.value = !1;
      }, 100);
    };
    return ie(u, (p) => {
      n(p ? "focus" : "blur");
    }), (p, v) => {
      const m = pe("lkt-button"), y = pe("lkt-tooltip");
      return F(), ce("div", {
        ref_key: "container",
        ref: f
      }, [
        Ce("div", Hr, [
          Ve(Ce("input", {
            type: "text",
            ref_key: "input",
            ref: s,
            "onUpdate:modelValue": v[0] || (v[0] = (_) => i.value = _),
            onFocus: d,
            onBlur: h
          }, null, 544), [
            [Tt, i.value]
          ])
        ]),
        e.editable ? (F(), Y(y, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: u.value,
          "onUpdate:modelValue": v[27] || (v[27] = (_) => u.value = _),
          referrer: f.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: be(() => [
            Ce("div", Fr, [
              (F(!0), ce(He, null, St(e.options, (_) => (F(), Y(m, {
                icon: _.icon,
                text: _.label,
                onClick: (C) => r(_)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            Ce("div", Ur, [
              Ce("div", Pr, [
                ue(m, {
                  onClick: v[1] || (v[1] = (_) => c(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                ue(m, {
                  onClick: v[2] || (v[2] = (_) => c(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                ue(m, {
                  onClick: v[3] || (v[3] = (_) => c(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                ue(m, {
                  onClick: v[4] || (v[4] = (_) => c(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                ue(m, {
                  onClick: v[5] || (v[5] = (_) => c(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                ue(m, {
                  onClick: v[6] || (v[6] = (_) => c(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                ue(m, {
                  onClick: v[7] || (v[7] = (_) => c(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                ue(m, {
                  onClick: v[8] || (v[8] = (_) => c(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                ue(m, {
                  onClick: v[9] || (v[9] = (_) => c(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                ue(m, {
                  onClick: v[10] || (v[10] = (_) => L()),
                  text: "."
                }),
                ue(m, {
                  onClick: v[11] || (v[11] = (_) => c(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                ue(m, {
                  onClick: v[12] || (v[12] = (_) => a()),
                  text: " "
                })
              ]),
              Ce("div", Wr, [
                ue(m, {
                  onClick: v[13] || (v[13] = (_) => x("[")),
                  text: "["
                }),
                ue(m, {
                  onClick: v[14] || (v[14] = (_) => x("]")),
                  text: "]"
                }),
                ue(m, {
                  onClick: v[15] || (v[15] = (_) => x("(")),
                  text: "("
                }),
                ue(m, {
                  onClick: v[16] || (v[16] = (_) => x(")")),
                  text: ")"
                }),
                ue(m, {
                  onClick: v[17] || (v[17] = (_) => g("+")),
                  text: "+"
                }),
                ue(m, {
                  onClick: v[18] || (v[18] = (_) => g("-")),
                  text: "−"
                }),
                ue(m, {
                  onClick: v[19] || (v[19] = (_) => g("*")),
                  text: "×"
                }),
                ue(m, {
                  onClick: v[20] || (v[20] = (_) => g("/")),
                  text: "÷"
                })
              ]),
              Ce("div", $r, [
                ue(m, {
                  onClick: v[21] || (v[21] = (_) => S()),
                  text: "√"
                }),
                ue(m, {
                  onClick: v[22] || (v[22] = (_) => k("log")),
                  text: "log"
                }),
                ue(m, {
                  onClick: v[23] || (v[23] = (_) => k("ln")),
                  text: "ln"
                }),
                ue(m, {
                  onClick: v[24] || (v[24] = (_) => k("sin")),
                  text: "sin"
                }),
                ue(m, {
                  onClick: v[25] || (v[25] = (_) => k("cos")),
                  text: "cos"
                }),
                ue(m, {
                  onClick: v[26] || (v[26] = (_) => k("tan")),
                  text: "tan"
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : ae("", !0)
      ], 512);
    };
  }
}), vn = /* @__PURE__ */ we({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, n = X(() => {
      let f = "", o = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      };
      if (t.validation.text && t.validation.text !== "")
        f = t.validation.text;
      else {
        f = Rl(t.validation.code, t.stack);
        let b = Rl(t.validation.status + "-" + t.validation.code, t.stack);
        b && (f = b);
      }
      return f ? f.startsWith("__:") ? yn(f.substring(3), o) : Lo(f, o, ":", "") : t.validation.code;
    }), l = X(() => ee.validationIconSlot !== ""), i = X(() => ee.validationIconSlot), s = X(() => {
      let f = [];
      return t.validation.code && f.push("code-" + t.validation.code), t.validation.status && f.push("is-" + t.validation.status), f.join(" ");
    }), u = X(() => {
      if (t.validation.icon === !1)
        return !1;
      if (typeof t.validation.icon == "object" || typeof t.validation.icon == "string")
        return t.validation.icon;
      switch (t.validation.status) {
        case ye.Ok:
          return ee.validationIconOk;
        case ye.Ko:
          return ee.validationIconKo;
        case ye.Info:
          return ee.validationIconInfo;
      }
    });
    return (f, o) => {
      var c;
      const b = pe("lkt-icon");
      return F(), ce("div", {
        class: ct(["lkt-field-validation-message", s.value])
      }, [
        (c = e.validation.element) != null && c.tag ? (F(), Y(dt(e.validation.element.tag), se({
          key: 0,
          class: e.validation.element.class
        }, e.validation.element.props), null, 16, ["class"])) : (F(), ce(He, { key: 1 }, [
          u.value && typeof u.value == "string" ? (F(), Y(b, De(se({ key: 0 }, {
            icon: u.value
          })), null, 16)) : u.value && typeof u.value == "object" ? (F(), Y(b, De(se({ key: 1 }, u.value)), null, 16)) : l.value ? (F(), Y(dt(i.value), { key: 2 })) : ae("", !0),
          tl(" " + xt(n.value), 1)
        ], 64))
      ], 2);
    };
  }
}), Zr = { class: "lkt-field-validation-info" }, bn = /* @__PURE__ */ we({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" },
    config: {}
  },
  setup(e) {
    return (t, n) => {
      const l = pe("lkt-button");
      return F(), ce("div", Zr, [
        e.config.groupConstraints ? (F(), Y(l, De(se({ key: 0 }, {
          ...e.config.groupConstraintsButton,
          type: D(je).TooltipEver
        })), {
          tooltip: be(({ doClose: i }) => [
            (F(!0), ce(He, null, St(e.items, (s) => (F(), Y(vn, {
              validation: s,
              stack: e.stack,
              key: s.code
            }, null, 8, ["validation", "stack"]))), 128))
          ]),
          _: 1
        }, 16)) : (F(!0), ce(He, { key: 1 }, St(e.items, (i) => (F(), Y(vn, {
          validation: i,
          stack: e.stack,
          key: i.code
        }, null, 8, ["validation", "stack"]))), 128))
      ]);
    };
  }
}), jr = ["id"], Gr = /* @__PURE__ */ we({
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
    container: {},
    tooltip: {},
    events: { default: () => ({}) },
    optionsConfig: {}
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const n = t, l = e, i = K(l.modelValue), s = K(l.focusing);
    let u, f;
    const o = K({}), b = () => {
      clearTimeout(f), f = setTimeout(() => {
        o.value = {
          query: i.value
        };
      }, 300);
    }, c = () => {
      s.value = !0;
    }, g = () => {
      u = setTimeout(() => {
        s.value = !1;
      }, 100);
    };
    ie(s, (S) => {
      n(S ? "focus" : "blur");
    });
    const k = () => {
      clearTimeout(u), setTimeout(() => {
        c();
      }, 100);
    };
    return (S, x) => {
      const L = pe("lkt-table"), a = pe("lkt-tooltip");
      return F(), ce(He, null, [
        Ve(Ce("input", {
          id: e.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": x[0] || (x[0] = (r) => i.value = r),
          onFocus: c,
          onBlur: g,
          onKeyup: b
        }, null, 40, jr), [
          [Tt, i.value]
        ]),
        e.editable && e.hadFirstFocus ? (F(), Y(a, se({
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: s.value,
          "onUpdate:modelValue": x[1] || (x[1] = (r) => s.value = r)
        }, {
          ...e.tooltip,
          referrer: e.container,
          referrerWidth: !0,
          locationX: D(Ht).LeftCorner,
          locationY: D(Ot).Bottom
        }), {
          default: be(() => [
            ue(L, se({
              type: D(gt).Ul,
              itemsContainerClass: "lkt-field--dropdown-options",
              paginator: {
                resource: e.optionsResource,
                resourceData: o.value
              },
              itemSlotComponent: Dt(ot),
              itemSlotData: {
                optionSlot: "",
                editable: e.editable,
                prop: {},
                isTag: !1,
                optionsConfig: e.optionsConfig
              },
              itemDisplayChecker: (r) => {
                var d;
                return D(vt)(r, "", !0, (d = e.optionsConfig) == null ? void 0 : d.filter);
              },
              itemSlotEvents: {
                click: (r, d) => {
                  e.optionsConfig.closeDropdownOnOptionClick ? s.value = !1 : k(), typeof e.events.clickOption == "function" && l.events.clickOption({
                    option: r
                  });
                }
              }
            }, {
              onPage: k,
              onClick: k
            }), null, 16)
          ]),
          _: 1
        }, 16, ["modelValue"])) : ae("", !0)
      ], 64);
    };
  }
}), Kr = {
  key: 0,
  class: "lkt-field-main"
}, Yr = { class: "lkt-field--toggle-button" }, Xr = {
  key: 3,
  class: "lkt-field--read-value"
}, Jr = ["innerHTML", "title"], Qr = ["title"], eu = { key: 0 }, tu = ["title"], iu = ["innerHTML"], lu = ["innerHTML", "title"], nu = ["innerHTML", "title"], ou = /* @__PURE__ */ we({
  __name: "LktFieldValue",
  props: {
    type: { default: Z.Text },
    value: {},
    isLoading: { type: Boolean, default: !1 },
    label: {},
    title: { default: "" },
    fileName: {},
    valueSlot: { default: "" },
    emptyValueSlot: { default: "" },
    slotData: { default: () => ({}) },
    download: { type: [String, Function], default: "" },
    anchor: {},
    multiple: { type: Boolean, default: !1 },
    multipleDisplay: { default: kt.List },
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
    prop: { default: () => ({}) },
    readModeConfig: {},
    optionsConfig: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t, l = al(), i = e, s = () => n("click"), u = X(() => {
      switch (i.type) {
        case Z.Select:
        case Z.Radio:
        case Z.DayOfWeek:
        case Z.ToggleButtonGroup:
          if (i.multiple && Array.isArray(i.value) && i.value.length > 0 || i.multiple && i.multipleDisplay === kt.Count || !i.multiple && i.value) return "";
          break;
        case Z.Date:
          if (i.value !== "") return "";
          break;
        default:
          if (i.value !== "") return "";
      }
      return ee.customValueSlots[i.emptyValueSlot] ?? ee.defaultEmptyValueSlot;
    }), f = X(() => ee.customValueSlots[i.valueSlot] ?? ""), o = X(() => {
      var c;
      let b = i.value;
      return Do.includes(i.type) && i.multiple && !Array.isArray(b) && (b = []), (i.type === Z.Textarea || i.type === Z.Text) && (typeof ((c = i.readModeConfig) == null ? void 0 : c.textMaxLength) < "u" && b.length > i.readModeConfig.textMaxLength ? b = b.substring(0, i.readModeConfig.textMaxLength) + "..." : typeof ee.readTextMaxLength < "u" && b.length > ee.readTextMaxLength && (b = b.substring(0, ee.readTextMaxLength) + "...")), b;
    });
    return (b, c) => {
      var r;
      const g = pe("lkt-loader"), k = pe("lkt-image"), S = pe("lkt-table"), x = pe("lkt-button"), L = pe("lkt-anchor"), a = pe("lkt-tag");
      return F(), ce("div", {
        class: "lkt-field--read",
        onClick: s
      }, [
        e.isLoading ? (F(), Y(g, { key: 0 })) : D(l).value ? lt(b.$slots, "value", {
          key: 1,
          value: o.value,
          title: e.title,
          data: e.slotData
        }) : u.value ? (F(), Y(dt(u.value), {
          key: 2,
          data: e.slotData
        }, null, 8, ["data"])) : f.value ? (F(), Y(dt(f.value), {
          key: 3,
          value: o.value,
          title: e.title,
          data: e.slotData
        }, null, 8, ["value", "title", "data"])) : (F(), ce(He, { key: 4 }, [
          e.type === D(Z).File || e.type === D(Z).Image ? (F(), ce("div", Kr, [
            e.multiple && e.type === D(Z).Image ? (F(), Y(S, De(se({ key: 0 }, {
              modelValue: e.value,
              type: D(gt).Carousel
            })), {
              item: be(({ item: d, index: h }) => [
                Ce("div", Yr, [
                  e.type === D(Z).Image ? (F(), Y(k, {
                    key: 0,
                    src: o.value[h],
                    class: "lkt-field--image-cover"
                  }, null, 8, ["src"])) : ae("", !0),
                  e.type === D(Z).Image ? (F(), Y(k, {
                    key: 1,
                    src: o.value[h],
                    class: "lkt-field--image-main"
                  }, null, 8, ["src"])) : ae("", !0)
                ])
              ]),
              _: 1
            }, 16)) : (F(), Y(x, {
              key: 1,
              class: "lkt-field--toggle-button",
              text: e.type === D(Z).File ? e.fileName : "",
              disabled: ""
            }, {
              default: be(() => [
                e.type === D(Z).Image ? (F(), Y(k, {
                  key: 0,
                  src: o.value,
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : ae("", !0),
                e.type === D(Z).Image ? (F(), Y(k, {
                  key: 1,
                  src: o.value,
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : ae("", !0)
              ]),
              _: 1
            }, 8, ["text"]))
          ])) : e.type === D(Z).Email ? (F(), Y(L, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: e.title,
            to: o.value
          }, {
            default: be(() => [
              tl(xt(o.value), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : e.type === D(Z).Tel ? (F(), Y(L, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: e.title,
            to: o.value
          }, {
            default: be(() => [
              tl(xt(o.value), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : D(pt).includes(e.type) ? (F(), ce("div", Xr, [
            ue(a, {
              icon: o.value ? "lkt-icn-check" : "lkt-icn-cancel",
              "featured-text": e.label,
              title: e.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : e.type === D(Z).Table ? (F(), Y(S, se({
            key: 4,
            modelValue: o.value,
            "onUpdate:modelValue": c[0] || (c[0] = (d) => o.value = d)
          }, {
            ...(r = e.optionsConfig) == null ? void 0 : r.table,
            editMode: !1
          }), null, 16, ["modelValue"])) : e.type === D(Z).Date ? (F(), ce("div", {
            key: 5,
            class: "lkt-field--read-value",
            innerHTML: o.value,
            title: e.title
          }, null, 8, Jr)) : [D(Z).Select, D(Z).Radio, D(Z).DayOfWeek, D(Z).ToggleButtonGroup].includes(e.type) ? (F(), ce("div", {
            key: 6,
            class: "lkt-field--read-value",
            title: e.title
          }, [
            e.multiple ? (F(), ce(He, { key: 0 }, [
              e.multipleDisplay === D(kt).Count ? (F(), ce("div", eu, xt(o.value.length), 1)) : e.multipleDisplay === D(kt).Table ? (F(), Y(S, se({
                key: 1,
                "model-value": o.value
              }, e.optionsConfig.table), null, 16, ["model-value"])) : o.value.length > 0 ? (F(), ce("ul", {
                key: 2,
                class: ct(["lkt-field-select-read", `multiple-display-${e.multipleDisplay}`])
              }, [
                (F(!0), ce(He, null, St(o.value, (d, h) => {
                  var p;
                  return F(), ce("li", {
                    key: `${h}-${o.value[h].value}`,
                    title: (p = o.value[h]) == null ? void 0 : p.label
                  }, [
                    ue(ot, se({ ref_for: !0 }, {
                      item: o.value[h],
                      data: {
                        optionSlot: e.optionSlot,
                        editable: !1,
                        prop: e.prop,
                        optionsConfig: e.optionsConfig
                      }
                    }), null, 16)
                  ], 8, tu);
                }), 128))
              ], 2)) : ae("", !0)
            ], 64)) : o.value.length > 0 ? (F(), Y(ot, De(se({ key: 1 }, {
              item: o.value[0],
              data: {
                optionSlot: e.optionSlot,
                editable: !1,
                prop: e.prop,
                optionsConfig: e.optionsConfig
              }
            })), null, 16)) : ae("", !0)
          ], 8, Qr)) : e.modal ? (F(), Y(x, {
            key: 7,
            class: "lkt-field--read-value",
            title: e.title,
            modal: e.modal,
            "modal-key": e.modalKey,
            "modal-data": e.modalData
          }, {
            default: be(() => [
              Ce("div", { innerHTML: o.value }, null, 8, iu)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : e.download ? (F(), Y(ot, De(se({ key: 8 }, {
            item: { value: "", label: o.value },
            data: {
              optionSlot: e.optionSlot,
              editable: !1,
              prop: e.prop,
              optionsConfig: e.optionsConfig,
              anchor: e.anchor,
              download: e.download
            }
          })), null, 16)) : e.type === D(Z).Number ? (F(), ce("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: e.title,
            title: e.title
          }, null, 8, lu)) : (F(), ce("div", {
            key: 10,
            class: "lkt-field--read-value",
            innerHTML: o.value,
            title: e.title
          }, null, 8, nu))
        ], 64))
      ]);
    };
  }
}), au = ["name", "id", "disabled", "readonly", "placeholder", "accept"], su = {
  key: 2,
  class: "lkt-button lkt-field--toggle-button"
}, ru = { class: "lkt-grid-1" }, lo = /* @__PURE__ */ we({
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
    fileBrowserConfig: { default: void 0 },
    callToActionButton: { default: void 0 }
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
  setup(e, { expose: t, emit: n }) {
    const l = n, i = e, s = K(null), u = K(null), f = K(i.modelValue), o = K(i.fileName), b = K(i.uploading), c = (S) => {
      let x = S.target;
      if (x.files && x.files[0]) {
        o.value = x.files[0].name;
        const L = new FileReader();
        L.onload = (a) => {
          if (f.value = a.target.result, i.resource) {
            b.value = !0, l("uploading");
            let r = JSON.parse(JSON.stringify(i.resourceData));
            r.files = x.files[0], sl(i.resource, r).then((d) => {
              if (b.value = !1, !d.success) {
                l("upload-error", d);
                return;
              }
              f.value = d.data, l("upload-success", d);
            }).catch((d) => {
              b.value = !1, l("upload-error", d);
            });
          }
        }, L.readAsDataURL(x.files[0]);
      }
      l("change", S);
    };
    ie(f, (S) => l("update:modelValue", S)), ie(o, (S) => l("update:fileName", S)), t({
      click: () => {
        var S;
        (S = u.value) == null || S.click();
      }
    });
    const g = K(typeof i.fileBrowserConfig == "object" && Object.keys(i.fileBrowserConfig).length > 0), k = (S) => {
      f.value = S[0].src, l("picked-files", S);
    };
    return (S, x) => {
      const L = pe("lkt-image"), a = pe("lkt-button");
      return F(), ce(He, null, [
        Ce("input", {
          ref_key: "inputElement",
          ref: s,
          type: "file",
          name: e.name,
          id: e.id,
          disabled: e.disabled,
          readonly: e.readonly,
          placeholder: e.placeholder,
          accept: e.accept,
          onChange: c
        }, null, 40, au),
        g.value ? e.isImage ? e.isImage ? (F(), ce("div", su, [
          e.isImage ? (F(), Y(L, {
            key: 0,
            src: f.value,
            class: "lkt-field--image-cover"
          }, null, 8, ["src"])) : ae("", !0),
          e.isImage ? (F(), Y(L, {
            key: 1,
            src: f.value,
            class: "lkt-field--image-main"
          }, {
            overlay: be(() => [
              Ce("div", null, [
                Ce("div", ru, [
                  ae("", !0),
                  ue(a, se({ ref: "fileBrowserButtonRef" }, {
                    text: "Explore files",
                    icon: "lkt-icn-search",
                    disabled: e.disabled,
                    modal: "lkt-file-browser",
                    modalData: {
                      fileBrowserConfig: e.fileBrowserConfig,
                      onConfirmSelection: k
                    }
                  }), null, 16)
                ])
              ])
            ]),
            _: 1
          }, 8, ["src"])) : ae("", !0)
        ])) : ae("", !0) : (F(), Y(a, {
          key: 1,
          ref_key: "buttonRef",
          ref: u,
          class: "lkt-field--toggle-button",
          "click-ref": s.value,
          text: o.value,
          disabled: e.disabled
        }, null, 8, ["click-ref", "text", "disabled"])) : (F(), Y(a, {
          key: 0,
          ref_key: "buttonRef",
          ref: u,
          class: "lkt-field--toggle-button",
          "click-ref": s.value,
          text: e.isImage ? "" : o.value,
          disabled: e.disabled
        }, {
          default: be(() => [
            e.isImage ? (F(), Y(L, {
              key: 0,
              src: f.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : ae("", !0),
            e.isImage ? (F(), Y(L, {
              key: 1,
              src: f.value,
              class: "lkt-field--image-main"
            }, null, 8, ["src"])) : ae("", !0)
          ]),
          _: 1
        }, 8, ["click-ref", "text", "disabled"])),
        e.callToActionButton ? (F(), Y(a, De(se({ key: 3 }, {
          ...e.callToActionButton,
          disabled: e.disabled,
          clickRef: s.value
        })), null, 16)) : ae("", !0)
      ], 64);
    };
  }
}), uu = /* @__PURE__ */ we({
  __name: "DateInput",
  props: {
    modelValue: { default: "" },
    name: {},
    id: {},
    tabindex: {},
    lang: {},
    icon: {},
    isDateTime: { type: Boolean },
    tooltip: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = t, l = e, i = K(void 0), s = K(""), u = K(""), f = K(l.modelValue), o = X(() => {
      if (l.isDateTime) {
        if (ee.dateTimeReadFormat) return ee.dateTimeReadFormat;
        if (ee.langDateTimeReadFormat[l.lang]) return ee.langDateTimeReadFormat[l.lang];
        if (ee.defaultDateTimeReadFormat) return ee.defaultDateTimeReadFormat;
        if (l.isDateTime) return "Y-m-d H:i";
      }
      return ee.dateReadFormat ? ee.dateReadFormat : ee.langDateReadFormat[l.lang] ? ee.langDateReadFormat[l.lang] : ee.defaultDateReadFormat ? ee.defaultDateReadFormat : "Y-m-d";
    }), b = X(() => l.isDateTime ? "Y-m-d H:i" : "Y-m-d"), c = (S) => {
      let x = new Date(S);
      Tn(x) && (i.value = x, l.isDateTime && (s.value = [It(x.getHours(), 2, "0"), It(x.getMinutes(), 2, "0")].join(":")));
    }, g = () => {
      u.value = En(i.value, o.value);
    };
    ie(() => l.modelValue, (S) => {
      f.value = S, c(S);
    }), ie(f, (S) => n("update:modelValue", S));
    const k = (S) => {
      var L, a;
      let x = S.split(":");
      x.length >= 2 && typeof i.value == "object" && ((L = i.value) == null || L.setHours(parseInt(x[0])), (a = i.value) == null || a.setMinutes(parseInt(x[1])), i.value = new Date(i.value));
    };
    return ie(s, (S) => {
      k(S);
    }), ie(i, (S) => {
      var x, L;
      if (typeof S > "u")
        f.value = "";
      else {
        let a = s.value.split(":");
        a.length >= 2 && typeof i.value == "object" && ((x = i.value) == null || x.setHours(parseInt(a[0])), (L = i.value) == null || L.setMinutes(parseInt(a[1]))), f.value = wn(b.value, S);
      }
      g();
    }, { deep: !0 }), at(() => {
      c(l.modelValue), g();
    }), (S, x) => {
      const L = pe("lkt-calendar"), a = pe("lkt-field"), r = pe("lkt-button");
      return F(), Y(r, De(li({
        type: D(je).TooltipEver,
        icon: e.icon,
        class: "lkt-field--toggle-button",
        text: u.value,
        tooltip: {
          ...e.tooltip,
          class: "lkt-field--date--tooltip",
          locationY: D(Ot).Bottom,
          locationX: D(Ht).LeftCorner,
          referrerWidth: !0
        }
      })), {
        tooltip: be(() => [
          ue(L, {
            modelValue: i.value,
            "onUpdate:modelValue": x[0] || (x[0] = (d) => i.value = d)
          }, null, 8, ["modelValue"]),
          e.isDateTime ? (F(), Y(a, se({
            key: 0,
            modelValue: s.value,
            "onUpdate:modelValue": x[1] || (x[1] = (d) => s.value = d)
          }, {
            type: D(Z).Time
          }), null, 16, ["modelValue"])) : ae("", !0)
        ]),
        _: 1
      }, 16);
    };
  }
}), el = (e, t, n) => {
  if (t) {
    let l = '<i class="' + t + '"></i>';
    n ? e += l : e = l + e;
  }
  return e;
}, cu = { key: 1 }, no = /* @__PURE__ */ we({
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
    itemType: { type: [String, Number, Function, Object], default: "" }
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const l = K(e.modelValue);
    return (i, s) => {
      const u = pe("lkt-button");
      return F(), Y(u, {
        modal: e.modal,
        "modal-key": e.modalKey,
        "modal-data": e.modalData
      }, {
        default: be(() => [
          l.value ? lt(i.$slots, "item", {
            key: 0,
            item: l.value
          }) : (F(), ce("p", cu, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), du = /* @__PURE__ */ we({
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
    itemType: { type: [String, Number, Function, Object], default: "" }
  },
  setup(e) {
    const t = al(), n = e, l = K(n.modelValue), i = X(() => typeof n.max == "boolean" || l.value.length < n.max ? ["modal-create"] : []);
    return (s, u) => {
      const f = pe("lkt-table");
      return F(), Y(f, {
        type: "item",
        modelValue: l.value,
        "onUpdate:modelValue": u[0] || (u[0] = (o) => l.value = o),
        perms: i.value,
        "edit-mode": e.editable,
        "new-value-generator": () => {
        },
        modal: e.modal,
        "modal-key": e.modalKey,
        "modal-data": e.modalData,
        "required-items-for-top-create": 999999
      }, {
        item: be(({ item: o, index: b, isLoading: c, canCreate: g, canRead: k, canUpdate: S, canDrop: x, doDrop: L }) => [
          ue(no, {
            modelValue: l.value[b],
            "onUpdate:modelValue": (a) => l.value[b] = a,
            "item-type": e.itemType
          }, Vt({ _: 2 }, [
            D(t).item ? {
              name: "item",
              fn: be(({ item: a }) => [
                lt(s.$slots, "item", {
                  item: a,
                  focusing: e.focusing,
                  hadFirstFocus: e.hadFirstFocus,
                  disabled: e.disabled,
                  readonly: e.readonly,
                  modal: e.modal,
                  modalKey: e.modalKey,
                  modalData: e.modalData
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
}), fu = /* @__PURE__ */ we({
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
    const n = t, l = e, i = X(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), s = () => n("click");
    return (u, f) => {
      const o = pe("lkt-button");
      return F(), Y(o, se(e.config, {
        type: e.config.type ? e.config.type : D(je).FileUpload,
        resource: e.config.resource ?? e.fileUploadHttp.resource,
        "resource-data": e.config.resourceData ?? e.fileUploadHttp.data,
        text: e.insideEllipsis ? e.config.text : "",
        class: [i.value, "lkt-field--btn-file-upload"],
        icon: "lkt-icn-upload",
        onClick: s
      }), null, 16, ["type", "resource", "resource-data", "text", "class"]);
    };
  }
}), hu = { class: "lkt-time lkt-flex-column" }, pu = /* @__PURE__ */ we({
  __name: "LktTime",
  props: {
    hour: {},
    minutes: {}
  },
  emits: [
    "update:hour",
    "update:minutes"
  ],
  setup(e, { emit: t }) {
    const n = t, l = e, i = K(l.hour), s = K(l.minutes);
    return ie(() => l.hour, (u) => i.value = u), ie(() => l.minutes, (u) => s.value = u), ie(i, (u) => n("update:hour", u)), ie(s, (u) => n("update:minutes", u)), (u, f) => {
      const o = pe("lkt-field");
      return F(), ce("div", hu, [
        ue(o, se({
          modelValue: i.value,
          "onUpdate:modelValue": f[0] || (f[0] = (b) => i.value = b)
        }, {
          type: D(Z).Number,
          label: "Hour",
          canStep: !0,
          min: 0,
          max: 23
        }), null, 16, ["modelValue"]),
        ue(o, se({
          modelValue: s.value,
          "onUpdate:modelValue": f[1] || (f[1] = (b) => s.value = b)
        }, {
          type: D(Z).Number,
          label: "Minutes",
          canStep: !0,
          min: 0,
          max: 59
        }), null, 16, ["modelValue"])
      ]);
    };
  }
}), mu = /* @__PURE__ */ we({
  __name: "TimeInput",
  props: {
    modelValue: { default: "" },
    name: {},
    id: {},
    tabindex: {},
    lang: {},
    icon: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = t, l = e, i = /* @__PURE__ */ new Date(), s = K(i.getHours()), u = K(i.getMinutes()), f = K(l.modelValue), o = (b) => {
      let c = b.split(":");
      c.length >= 2 && (s.value = parseInt(c[0]), u.value = parseInt(c[1]));
    };
    return ie([s, u], (b) => {
      f.value = [It(s.value, 2, "0"), It(u.value, 2, "0")].join(":");
    }), ie(() => l.modelValue, (b) => f.value = b), ie(f, (b) => n("update:modelValue", b)), at(() => {
      o(f.value), f.value = [It(s.value, 2, "0"), It(u.value, 2, "0")].join(":");
    }), (b, c) => {
      const g = pe("lkt-button");
      return F(), Y(g, De(li({
        type: D(je).Tooltip,
        icon: e.icon,
        class: "lkt-field--toggle-button",
        text: f.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: D(Ot).Bottom,
          locationX: D(Ht).LeftCorner
        }
      })), {
        tooltip: be(() => [
          ue(pu, {
            hour: s.value,
            "onUpdate:hour": c[0] || (c[0] = (k) => s.value = k),
            minutes: u.value,
            "onUpdate:minutes": c[1] || (c[1] = (k) => u.value = k)
          }, null, 8, ["hour", "minutes"])
        ]),
        _: 1
      }, 16);
    };
  }
});
var he = /* @__PURE__ */ ((e) => (e[e.TextInput = 0] = "TextInput", e[e.TextareaInput = 1] = "TextareaInput", e[e.HtmlInput = 2] = "HtmlInput", e[e.BooleanInput = 3] = "BooleanInput", e[e.MultipleColorInput = 4] = "MultipleColorInput", e[e.SingleColorInput = 5] = "SingleColorInput", e[e.FileInput = 6] = "FileInput", e[e.DateInput = 7] = "DateInput", e[e.TimeInput = 8] = "TimeInput", e[e.SelectInput = 9] = "SelectInput", e[e.CalcInput = 10] = "CalcInput", e[e.SearchInput = 11] = "SearchInput", e[e.MultipleCardInput = 12] = "MultipleCardInput", e[e.SingleCardInput = 13] = "SingleCardInput", e[e.TableInput = 14] = "TableInput", e[e.RadioInput = 15] = "RadioInput", e[e.ToggleButtonGroupInput = 16] = "ToggleButtonGroupInput", e[e.RangeOptsInput = 17] = "RangeOptsInput", e))(he || {});
const gu = /* @__PURE__ */ we({
  __name: "RadioInput",
  props: {
    modelValue: {},
    searchable: { type: Boolean },
    searchMode: { type: Boolean },
    isLoading: { type: Boolean },
    isDayOfWeek: { type: Boolean },
    multiple: { type: Boolean },
    options: {},
    optionsConfig: {},
    optionSlot: {},
    pickedOptions: {},
    showOptions: { type: Boolean },
    editable: { type: Boolean },
    focusing: { type: Boolean },
    searchPlaceholder: {},
    multipleDisplayEdition: {},
    prop: { default: () => ({}) },
    max: {},
    tooltip: {},
    optionValueType: {},
    events: {},
    referrer: {}
  },
  emits: [
    "update:modelValue",
    "update:showOptions",
    "update:options",
    "update:pickedOptions",
    "focus",
    "blur",
    "change",
    "loaded",
    "autoload-start",
    "autoload-end"
  ],
  setup(e, { expose: t, emit: n }) {
    const l = n, i = e, s = K(i.modelValue), u = K(-1), f = X(() => i.isDayOfWeek ? Mo.getDaysAsOptions() : []), o = K([...Xe(
      i.isDayOfWeek ? f.value : i.options,
      i.prop
    )]), b = K(!0);
    ie(b, (z) => {
      z || Te(() => {
        b.value = !0;
      });
    }), ie(() => i.modelValue, (z) => {
      var T;
      !z && ((T = i.optionsConfig) != null && T.autoPickFirstOptionIfEmpty) ? (i.pickedOptions.splice(0, i.pickedOptions.length), Te(() => {
        Zi({
          value: s,
          optionValueType: i.optionValueType,
          multiple: i.multiple,
          query: "",
          optionsConfig: i.optionsConfig,
          options: o,
          pickedOptions: i.pickedOptions
        });
      })) : s.value = z;
    }, { deep: !0 }), ie(s, (z) => {
      l("update:modelValue", z);
    }, { deep: !0 }), ie(o, (z) => {
      var T;
      typeof ((T = i.events) == null ? void 0 : T.updatedOptions) == "function" && (b.value = !1, i.events.updatedOptions({
        options: z
      })), l("update:options", z);
    }), ie(() => i.options, (z, T) => {
      if (!b.value) return;
      let B = new nt({
        opts: T
      });
      B.increment({ opts: z }), B.changed() && (o.value = Xe(z, i.prop), w());
    }, { deep: !0 });
    const c = K(""), g = K(null), k = K(i.pickedOptions);
    ie(k, (z) => {
      l("update:pickedOptions", z);
    });
    const S = K(!1), x = K(i.showOptions);
    ie(x, (z) => {
      l("update:showOptions", z), Te(() => {
        z || (r.value = !1, a.value = !1, L.value = !1), S.value = x.value;
      });
    });
    const L = K(i.focusing), a = K(!1), r = K(!1);
    ie(() => i.focusing, (z) => {
      z !== L.value && Te(() => {
        z ? v() : p();
      });
    }), ie(L, (z) => {
      l(z ? "focus" : "blur");
    });
    let d;
    const h = () => {
      clearTimeout(d), setTimeout(() => {
        g.value && g.value.focus();
      }, 100);
    }, p = (z) => {
      _.value || (d = setTimeout(() => {
        r.value = !1, L.value = a.value, x.value = L.value;
      }, 100));
    }, v = (z) => {
      i.searchable ? (r.value = !1, a.value = !0, L.value = !0, x.value = !0, Te(() => {
        h();
      })) : (r.value = !0, a.value = !1, L.value = !0, x.value = !0);
    };
    t({
      doClear: () => {
        i.multiple ? s.value.splice(0, s.value.length) : s.value = "", k.value.splice(0, k.value.length), Te(() => {
          w();
        });
      },
      doUndo: (z) => {
        if (i.multiple) {
          s.value.splice(0, s.value.length);
          let T = 0, B = z.length;
          for (; T < B; )
            s.value.push(
              z[T]
            ), ++T;
        } else
          s.value = z;
        k.value.splice(0, k.value.length), Te(() => {
          w();
        });
      },
      keepFocused: h,
      switchShowOptions: () => {
        x.value = !x.value;
      }
    }), ie(() => i.pickedOptions, (z) => {
      l("change"), k.value = z;
    }, { deep: !0 });
    const _ = X(() => !i.multiple && i.searchable && L.value), C = (z) => {
      var B, N;
      (i.multiple ? qi({
        option: z,
        value: s,
        pickedOptions: k,
        tagMode: !1,
        searchMode: i.searchable,
        keepFocused: h,
        optionValueType: i.optionValueType,
        callback: (B = i.events) == null ? void 0 : B.clickOption,
        optionsConfig: i.optionsConfig
      }) : $i({
        option: z,
        value: s,
        pickedOptions: k.value,
        showOptions: x.value,
        optionValueType: i.optionValueType,
        callback: (N = i.events) == null ? void 0 : N.clickOption,
        optionsConfig: i.optionsConfig
      })) && typeof i.events.clickOption == "function" && i.events.clickOption({
        option: z
      });
    }, w = () => {
      i.multiple ? bt({
        value: s,
        options: o.value,
        pickedOptions: k.value,
        multiple: i.multiple,
        optionValueType: i.optionValueType,
        optionsConfig: i.optionsConfig
      }) : bt({
        value: s,
        options: o.value,
        pickedOptions: k.value,
        multiple: i.multiple,
        optionValueType: i.optionValueType,
        optionsConfig: i.optionsConfig
      }), l("loaded");
    };
    return at(() => {
      w();
    }), (z, T) => {
      const B = pe("lkt-table");
      return F(), Y(B, se({
        ref: "optionList",
        modelValue: o.value,
        "onUpdate:modelValue": T[0] || (T[0] = (N) => o.value = N)
      }, {
        type: D(gt).Ul,
        editMode: e.editable,
        itemDisplayChecker: (N) => {
          var $;
          return D(vt)(N, c.value, !0, ($ = e.optionsConfig) == null ? void 0 : $.filter);
        },
        itemsContainerClass: "lkt-field--dropdown-options lkt-field--radio-options",
        itemContainerClass: (N, $) => {
          let O = [];
          return D(Wi)(N, s.value, e.multiple) && O.push("is-active"), u.value === $ && O.push("is-focused"), N.disabled && O.push("is-disabled"), O.join(" ");
        },
        itemSlotComponent: Dt(ot),
        itemSlotData: {
          optionSlot: e.optionSlot,
          editable: e.editable,
          prop: e.prop,
          isTag: !1,
          optionsConfig: e.optionsConfig,
          query: c.value,
          editableValue: s.value,
          multiple: e.multiple,
          focusedOptionIndex: u.value
        },
        itemSlotEvents: {
          click: (N, $) => {
            C(N);
          }
        }
      }), null, 16, ["modelValue"]);
    };
  }
}), vu = /* @__PURE__ */ we({
  __name: "ToggleButtonGroupInput",
  props: {
    modelValue: {},
    searchable: { type: Boolean },
    searchMode: { type: Boolean },
    isLoading: { type: Boolean },
    multiple: { type: Boolean },
    options: {},
    optionsConfig: {},
    optionSlot: {},
    pickedOptions: {},
    showOptions: { type: Boolean },
    editable: { type: Boolean },
    focusing: { type: Boolean },
    searchPlaceholder: {},
    multipleDisplayEdition: {},
    prop: { default: () => ({}) },
    max: {},
    tooltip: {},
    optionValueType: {},
    events: {},
    referrer: {}
  },
  emits: [
    "update:modelValue",
    "update:showOptions",
    "update:options",
    "update:pickedOptions",
    "focus",
    "blur",
    "change",
    "loaded",
    "autoload-start",
    "autoload-end"
  ],
  setup(e, { expose: t, emit: n }) {
    const l = n, i = e, s = K(i.modelValue), u = K(-1), f = K([...Xe(i.options, i.prop)]), o = K(!0);
    ie(o, (w) => {
      w || Te(() => {
        o.value = !0;
      });
    }), ie(() => i.modelValue, (w) => {
      var z;
      !w && ((z = i.optionsConfig) != null && z.autoPickFirstOptionIfEmpty) ? (i.pickedOptions.splice(0, i.pickedOptions.length), Te(() => {
        Zi({
          value: s,
          optionValueType: i.optionValueType,
          multiple: i.multiple,
          query: "",
          optionsConfig: i.optionsConfig,
          options: f,
          pickedOptions: i.pickedOptions
        });
      })) : s.value = w;
    }, { deep: !0 }), ie(s, (w) => {
      l("update:modelValue", w);
    }, { deep: !0 }), ie(f, (w) => {
      var z;
      typeof ((z = i.events) == null ? void 0 : z.updatedOptions) == "function" && (o.value = !1, i.events.updatedOptions({
        options: w
      })), l("update:options", w);
    }), ie(() => i.options, (w, z) => {
      if (!o.value) return;
      let T = new nt({
        opts: z
      });
      T.increment({ opts: w }), T.changed() && (f.value = Xe(w, i.prop), C());
    }, { deep: !0 });
    const b = K(""), c = K(null), g = K(i.pickedOptions);
    ie(g, (w) => {
      l("update:pickedOptions", w);
    });
    const k = K(!1), S = K(i.showOptions);
    ie(S, (w) => {
      l("update:showOptions", w), Te(() => {
        w || (a.value = !1, L.value = !1, x.value = !1), k.value = S.value;
      });
    });
    const x = K(i.focusing), L = K(!1), a = K(!1);
    ie(() => i.focusing, (w) => {
      w !== x.value && Te(() => {
        w ? p() : h();
      });
    }), ie(x, (w) => {
      l(w ? "focus" : "blur");
    });
    let r;
    const d = () => {
      clearTimeout(r), setTimeout(() => {
        c.value && c.value.focus();
      }, 100);
    }, h = (w) => {
      y.value || (r = setTimeout(() => {
        a.value = !1, x.value = L.value, S.value = x.value;
      }, 100));
    }, p = (w) => {
      i.searchable ? (a.value = !1, L.value = !0, x.value = !0, S.value = !0, Te(() => {
        d();
      })) : (a.value = !0, L.value = !1, x.value = !0, S.value = !0);
    };
    t({
      doClear: () => {
        i.multiple ? s.value.splice(0, s.value.length) : s.value = "", g.value.splice(0, g.value.length), Te(() => {
          C();
        });
      },
      doUndo: (w) => {
        if (i.multiple) {
          s.value.splice(0, s.value.length);
          let z = 0, T = w.length;
          for (; z < T; )
            s.value.push(
              w[z]
            ), ++z;
        } else
          s.value = w;
        g.value.splice(0, g.value.length), Te(() => {
          C();
        });
      },
      keepFocused: d,
      switchShowOptions: () => {
        S.value = !S.value;
      }
    }), ie(() => i.pickedOptions, (w) => {
      l("change"), g.value = w;
    }, { deep: !0 });
    const y = X(() => !i.multiple && i.searchable && x.value), _ = (w) => {
      var T, B;
      (i.multiple ? qi({
        option: w,
        value: s,
        pickedOptions: g,
        tagMode: !1,
        searchMode: i.searchable,
        keepFocused: d,
        optionValueType: i.optionValueType,
        callback: (T = i.events) == null ? void 0 : T.clickOption,
        optionsConfig: i.optionsConfig
      }) : $i({
        option: w,
        value: s,
        pickedOptions: g.value,
        showOptions: S.value,
        optionValueType: i.optionValueType,
        callback: (B = i.events) == null ? void 0 : B.clickOption,
        optionsConfig: i.optionsConfig
      })) && typeof i.events.clickOption == "function" && i.events.clickOption({
        option: w
      });
    }, C = () => {
      i.multiple ? bt({
        value: s,
        options: f.value,
        pickedOptions: g.value,
        multiple: i.multiple,
        optionValueType: i.optionValueType,
        optionsConfig: i.optionsConfig
      }) : bt({
        value: s,
        options: f.value,
        pickedOptions: g.value,
        multiple: i.multiple,
        optionValueType: i.optionValueType,
        optionsConfig: i.optionsConfig
      }), l("loaded");
    };
    return at(() => {
      C();
    }), (w, z) => {
      const T = pe("lkt-table");
      return F(), Y(T, se({
        ref: "optionList",
        modelValue: f.value,
        "onUpdate:modelValue": z[0] || (z[0] = (B) => f.value = B)
      }, {
        type: D(gt).Ul,
        editMode: e.editable,
        itemDisplayChecker: (B) => {
          var N;
          return D(vt)(B, b.value, !0, (N = e.optionsConfig) == null ? void 0 : N.filter);
        },
        itemsContainerClass: "lkt-field--toggle-button-group-options",
        itemContainerClass: (B, N) => {
          let $ = [];
          return D(Wi)(B, s.value, e.multiple) && $.push("is-active"), u.value === N && $.push("is-focused"), B.disabled && $.push("is-disabled"), $.join(" ");
        },
        itemSlotComponent: Dt(ot),
        itemSlotData: {
          optionSlot: e.optionSlot,
          editable: e.editable,
          prop: e.prop,
          isTag: !1,
          optionsConfig: e.optionsConfig,
          query: b.value,
          editableValue: s.value,
          multiple: e.multiple,
          focusedOptionIndex: u.value,
          fieldType: D(Z).ToggleButtonGroup
        },
        itemSlotEvents: {
          click: (B, N) => {
            _(B);
          }
        }
      }), null, 16, ["modelValue"]);
    };
  }
}), bu = { class: "lkt-field--range-opts" }, yu = { class: "lkt-field--range-track" }, Cu = ["value", "min", "max", "step"], _u = /* @__PURE__ */ we({
  __name: "RangeOptsInput",
  props: {
    modelValue: {},
    searchable: { type: Boolean },
    searchMode: { type: Boolean },
    isLoading: { type: Boolean },
    multiple: { type: Boolean },
    options: {},
    optionsConfig: {},
    optionSlot: {},
    pickedOptions: {},
    showOptions: { type: Boolean },
    editable: { type: Boolean },
    focusing: { type: Boolean },
    searchPlaceholder: {},
    multipleDisplayEdition: {},
    prop: { default: () => ({}) },
    min: {},
    max: {},
    step: {},
    tooltip: {},
    optionValueType: {},
    events: {},
    referrer: {}
  },
  emits: [
    "update:modelValue",
    "update:showOptions",
    "update:options",
    "update:pickedOptions",
    "focus",
    "blur",
    "change",
    "loaded",
    "autoload-start",
    "autoload-end"
  ],
  setup(e, { expose: t, emit: n }) {
    const l = n, i = e, s = K(null), u = K(i.modelValue), f = K(-1), o = K(!1), b = K([...Xe(i.options, i.prop)]), c = K(!0);
    ie(c, (O) => {
      O || Te(() => {
        c.value = !0;
      });
    }), ie(() => i.modelValue, (O) => {
      var U;
      !O && ((U = i.optionsConfig) != null && U.autoPickFirstOptionIfEmpty) ? (i.pickedOptions.splice(0, i.pickedOptions.length), Te(() => {
        Zi({
          value: u,
          optionValueType: i.optionValueType,
          multiple: i.multiple,
          query: "",
          optionsConfig: i.optionsConfig,
          options: b,
          pickedOptions: i.pickedOptions
        });
      })) : u.value = O;
    }, { deep: !0 }), ie(u, (O) => {
      l("update:modelValue", O);
    }, { deep: !0 }), ie(b, (O) => {
      var U;
      typeof ((U = i.events) == null ? void 0 : U.updatedOptions) == "function" && (c.value = !1, i.events.updatedOptions({
        options: O
      })), l("update:options", O);
    }), ie(() => i.options, (O, U) => {
      if (!c.value) return;
      let M = new nt({
        opts: U
      });
      M.increment({ opts: O }), M.changed() && (b.value = Xe(O, i.prop), z());
    }, { deep: !0 });
    const g = K(""), k = K(null), S = K(i.pickedOptions);
    ie(S, (O) => {
      l("update:pickedOptions", O);
    });
    const x = K(!1), L = K(i.showOptions);
    ie(L, (O) => {
      l("update:showOptions", O), Te(() => {
        O || (d.value = !1, r.value = !1, a.value = !1), x.value = L.value;
      });
    });
    const a = K(i.focusing), r = K(!1), d = K(!1);
    ie(() => i.focusing, (O) => {
      O !== a.value && Te(() => {
        O ? m() : v();
      });
    }), ie(a, (O) => {
      l(O ? "focus" : "blur");
    });
    let h;
    const p = () => {
      clearTimeout(h), setTimeout(() => {
        k.value && k.value.focus();
      }, 100);
    }, v = (O) => {
      C.value || (h = setTimeout(() => {
        d.value = !1, a.value = r.value, L.value = a.value;
      }, 100));
    }, m = (O) => {
      i.searchable ? (d.value = !1, r.value = !0, a.value = !0, L.value = !0, Te(() => {
        p();
      })) : (d.value = !0, r.value = !1, a.value = !0, L.value = !0);
    };
    t({
      doClear: () => {
        i.multiple ? u.value.splice(0, u.value.length) : u.value = "", S.value.splice(0, S.value.length), Te(() => {
          z();
        });
      },
      doUndo: (O) => {
        if (i.multiple) {
          u.value.splice(0, u.value.length);
          let U = 0, M = O.length;
          for (; U < M; )
            u.value.push(
              O[U]
            ), ++U;
        } else
          u.value = O;
        S.value.splice(0, S.value.length), Te(() => {
          z();
        });
      },
      keepFocused: p,
      switchShowOptions: () => {
        L.value = !L.value;
      }
    }), ie(() => i.pickedOptions, (O) => {
      l("change"), S.value = O;
    }, { deep: !0 });
    const C = X(() => !i.multiple && i.searchable && a.value), w = (O) => {
      var M, P;
      (i.multiple ? qi({
        option: O,
        value: u,
        pickedOptions: S,
        tagMode: !1,
        searchMode: i.searchable,
        keepFocused: p,
        optionValueType: i.optionValueType,
        callback: (M = i.events) == null ? void 0 : M.clickOption,
        optionsConfig: i.optionsConfig
      }) : $i({
        option: O,
        value: u,
        pickedOptions: S.value,
        showOptions: L.value,
        optionValueType: i.optionValueType,
        callback: (P = i.events) == null ? void 0 : P.clickOption,
        optionsConfig: i.optionsConfig
      })) && typeof i.events.clickOption == "function" && i.events.clickOption({
        option: O
      });
    }, z = () => {
      i.multiple ? bt({
        value: u,
        options: b.value,
        pickedOptions: S.value,
        multiple: i.multiple,
        optionValueType: i.optionValueType,
        optionsConfig: i.optionsConfig
      }) : bt({
        value: u,
        options: b.value,
        pickedOptions: S.value,
        multiple: i.multiple,
        optionValueType: i.optionValueType,
        optionsConfig: i.optionsConfig
      }), l("loaded");
    };
    at(() => {
      z();
    });
    const T = X(() => b.value.map((O) => O.value).sort()), B = X(() => T.value[0]), N = X(() => T.value[T.value.length - 1]), $ = (O, U) => {
      var j;
      let M = b.value.length, P = window.getComputedStyle((j = s.value) == null ? void 0 : j.closest(".lkt-field--range-track"), null).getPropertyValue("padding-left");
      P = parseFloat(P);
      const E = [
        "position: absolute",
        "top: 0"
      ];
      if (U === 0)
        return [
          ...E,
          `left: calc(0% + ${P / 2}px)`
        ].join(";");
      if (U === M - 1)
        return [
          ...E,
          `left: calc(100% - ${P}px)`,
          "transform: translateX(-100%)"
        ].join(";");
      let H = M / 2 - 0.5;
      if (U === H)
        return [
          ...E,
          "left: 50%",
          "transform: translateX(-50%)"
        ].join(";");
      let I = 100 / (M - 1), W = b.value.map((G, te) => te).filter((G) => ![0, H, M - 1].includes(G)), R = W.findIndex((G) => G === U), A = W[R];
      return U < H ? [
        ...E,
        `left: calc(${A * I}% + ${P}px)`,
        "transform: translateX(-50%)"
      ].join(";") : [
        ...E,
        `left: calc(${A * I}% - ${P}px)`,
        "transform: translateX(-50%)"
      ].join(";");
    };
    return at(() => {
      Te(() => {
        o.value = !0;
      });
    }), (O, U) => {
      const M = pe("lkt-table");
      return F(), ce("div", bu, [
        Ce("div", yu, [
          Ve(Ce("input", {
            ref_key: "inputRef",
            ref: s,
            "onUpdate:modelValue": U[0] || (U[0] = (P) => u.value = P),
            value: u.value,
            type: "range",
            min: B.value,
            max: N.value,
            step: e.step
          }, null, 8, Cu), [
            [Tt, u.value]
          ])
        ]),
        o.value ? (F(), Y(M, se({
          key: 0,
          ref: "optionList",
          modelValue: b.value,
          "onUpdate:modelValue": U[1] || (U[1] = (P) => b.value = P)
        }, {
          type: D(gt).Ul,
          editMode: e.editable,
          itemDisplayChecker: (P) => {
            var E;
            return D(vt)(P, g.value, !0, (E = e.optionsConfig) == null ? void 0 : E.filter);
          },
          itemsContainerClass: "lkt-field--dropdown-options lkt-field--range-options",
          itemContainerClass: (P, E) => {
            let H = [];
            return D(Wi)(P, u.value, e.multiple) && H.push("is-active"), f.value === E && H.push("is-focused"), P.disabled && H.push("is-disabled"), H.join(" ");
          },
          itemContainerStyle: (P, E) => $(P, E),
          itemSlotComponent: Dt(ot),
          itemSlotData: {
            optionSlot: e.optionSlot,
            editable: e.editable,
            prop: e.prop,
            isTag: !1,
            optionsConfig: e.optionsConfig,
            query: g.value,
            editableValue: u.value,
            multiple: e.multiple,
            focusedOptionIndex: f.value
          },
          itemSlotEvents: {
            click: (P, E) => {
              w(P);
            }
          }
        }), null, 16, ["modelValue"])) : ae("", !0)
      ]);
    };
  }
}), wu = /* @__PURE__ */ we({
  __name: "MultipleFileInput",
  props: {
    modelValue: { default: () => [] },
    name: {},
    id: {},
    fileUploadHttp: {},
    accept: {},
    placeholder: {},
    fileName: {},
    uploading: { type: Boolean },
    focusing: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    tabindex: {},
    isImage: { type: Boolean },
    fileBrowserConfig: {},
    callToActionButton: {},
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] },
    tableConfig: {}
  },
  emits: ["update:modelValue", "change", "uploading", "upload-success", "upload-error", "picked-files"],
  setup(e, { emit: t }) {
    const n = t, l = e, i = K(l.modelValue), s = X(() => typeof l.max == "boolean" || i.value.length < l.max ? ["inline-create"] : []), u = (g) => n("change", g), f = (g) => n("uploading", g), o = (g) => n("upload-success", g), b = (g) => n("upload-error", g), c = (g) => n("picked-files", g);
    return ie(() => l.modelValue, (g) => i.value = g, { deep: !0 }), ie(i, (g) => n("update:modelValue", g), { deep: !0 }), (g, k) => {
      const S = pe("lkt-table");
      return F(), Y(S, se({
        type: "item",
        modelValue: i.value,
        "onUpdate:modelValue": k[0] || (k[0] = (x) => i.value = x)
      }, {
        ...e.tableConfig,
        editMode: !0,
        perms: s.value,
        newValueGenerator: () => "",
        requiredItemsForTopCreate: 999999
      }), {
        item: be(({ item: x, index: L, isLoading: a, canCreate: r, canRead: d, canUpdate: h, canDrop: p, doDrop: v }) => {
          var m, y;
          return [
            ue(lo, {
              modelValue: i.value[L],
              "onUpdate:modelValue": (_) => i.value[L] = _,
              id: e.id,
              tabindex: e.tabindex,
              resource: (m = e.fileUploadHttp) == null ? void 0 : m.resource,
              "resource-data": (y = e.fileUploadHttp) == null ? void 0 : y.data,
              name: e.name,
              placeholder: e.placeholder,
              accept: e.accept,
              focusing: e.focusing,
              disabled: e.disabled,
              readonly: e.readonly,
              "is-image": e.isImage,
              "file-browser-config": e.fileBrowserConfig,
              "call-to-action-button": e.callToActionButton,
              onChange: u,
              onUploading: f,
              onUploadSuccess: o,
              onUploadError: b,
              onPickedFiles: c
            }, null, 8, ["modelValue", "onUpdate:modelValue", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image", "file-browser-config", "call-to-action-button"])
          ];
        }),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), ku = ["data-show-ui", "data-labeled"], xu = ["for", "innerHTML"], Su = { class: "lkt-field-content" }, Tu = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, Eu = {
  key: 1,
  class: "lkt-field--icon"
}, Lu = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Bu = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], zu = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], Nu = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], Ru = {
  key: 4,
  class: "lkt-field--info-nav"
}, Au = ["innerHTML"], Mt = /* @__PURE__ */ we({
  __name: "LktField",
  props: /* @__PURE__ */ Eo({
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
    icon: { type: [String, Function, Object] },
    download: { type: [String, Function] },
    modal: { type: [String, Function] },
    modalKey: { type: [String, Number, Function] },
    modalData: { type: [Object, Function] },
    itemType: {},
    optionValueType: {},
    configOn: {},
    configOff: {},
    readMode: { type: [Boolean, Function] },
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
    createButton: { type: [Object, Boolean] },
    callToActionButton: { type: [Object, Boolean] },
    events: {},
    canRender: { type: [Boolean, Function] },
    canDisplay: { type: [Boolean, Function] }
  }, Po(Wo)),
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
    "uploading",
    "options-loaded",
    "selected-option",
    "upload-error",
    "upload-success",
    "picked-files",
    "validation-status"
  ],
  setup(e, { expose: t, emit: n }) {
    const l = n, i = al(), s = e, u = Bo(16), f = K(!1), o = K(!1), b = X(() => s.validation.reportLevel ? s.validation.reportLevel : Ze.Error);
    let c = qe(s.modal, s.prop), g = qe(s.modalKey, s.prop), k = qe(s.icon, s.prop), S = qe(s.download, s.prop), x = qe(s.itemType, s.prop);
    !c && typeof x != "function" && x && typeof ee.modalPerItemType[x] < "u" && (c = ee.modalPerItemType[x]);
    const L = K(null);
    let a = s.featuredButton, r = s.modelValue;
    s.multiple && Oo.includes(s.type) ? (!r || !Array.isArray(r)) && (r = []) : pt.includes(s.type) ? typeof r != "boolean" && (r = !1) : [Z.Date, Z.DateTime].includes(s.type) && !k ? k = ee.defaultDateIcon : s.type === Z.Time && !k ? k = "lkt-icn-clock" : s.type === Z.Number && s.canStep && a === "" && (a = ee.defaultNumberFeaturedButton), s.type === Z.Table && (r = JSON.parse(JSON.stringify(s.modelValue)));
    const d = K(r), h = K(r), p = K(s.valid === !0), v = K(!0), m = K(!1), y = K(!1), _ = K(!1), C = K(!1), w = K([]), z = K(s.fileName), T = K(s.fileName), B = K(null), N = K(!1), $ = K(!1), O = K([]), U = K(!1), M = X(() => Io.value), P = X(() => (M.value, ee.dateReadFormat ? ee.dateReadFormat : ee.langDateReadFormat[M.value] ? ee.langDateReadFormat[M.value] : ee.defaultDateReadFormat ? ee.defaultDateReadFormat : "Y-m-d")), E = h, H = K(typeof E.value == "object" ? JSON.parse(JSON.stringify(E.value)) : E.value), I = X(() => s.type === Z.Textarea ? "textarea" : s.type === Z.Html ? "div" : "input"), W = X(() => {
      if ([Z.Date, Z.DateTime].includes(s.type))
        return h.value !== d.value;
      if (s.type === Z.Select || s.type === Z.Radio) {
        if (s.multiple && s.optionValueType !== "option") {
          let V = new nt({ v: H.value });
          return V.increment({ v: E.value }), V.changed();
        }
      } else if (s.type === Z.Table) {
        let V = new nt({ v: H.value });
        return V.increment({ v: E.value }), V.changed();
      }
      return E.value !== H.value;
    }), R = X(() => typeof s.disabled == "function" ? s.disabled(s.prop) : s.disabled), A = X(() => {
      let V = 0;
      return yt.value && ++V, Ct.value && ++V, Qe.value && ++V, Et.value && ++V, dl.value && ++V, fl.value && ++V, cl.value && ++V, Ft.value && ++V, et.value && ++V, (s.customButtonText || s.customButtonClass) && ++V, typeof s.createButton == "object" && ++V, V > 1 && [
        Z.Textarea,
        Z.Html,
        Z.Table,
        Z.Radio
      ].includes(s.type) || V > 0 && s.infoButtonEllipsis ? 1 : V;
    }), j = X(() => Oe.value && a === "i18n" || Ie.value && a === "password" || Se.value && a === "subtract"), G = X(() => A.value > 0), te = X(() => s.autocomplete === !0 ? "on" : "off"), J = X(() => {
      var V;
      return [Z.Date, Z.DateTime].includes(s.type) ? h.value !== "" : [Z.Select, Z.Radio].includes(s.type) ? (V = s.optionsConfig) != null && V.zeroMeansEmpty ? !(h.value === "" || h.value === 0) : h.value !== "" : E.value !== "";
    }), Q = X(() => s.type === Z.Password && m.value === !0 ? "text" : s.type === Z.Email ? "email" : s.type === Z.Password ? "password" : s.type === Z.Number ? "number" : s.type === Z.Tel ? "tel" : s.type === Z.Search ? "search" : s.type === Z.Color ? "color" : s.type === Z.Range ? "range" : "text"), oe = X(() => {
      var q;
      const V = [];
      if (s.multiple)
        switch (s.type) {
          case Z.Image:
          case Z.File:
            V.push(`is-${s.type}s`);
            break;
          default:
            V.push(`is-${s.type}`);
        }
      else
        V.push(`is-${s.type}`);
      return pt.includes(s.type) && (V.push("is-boolean"), E.value && V.push("is-checked")), W.value && V.push("is-changed"), R.value && V.push("is-disabled"), s.multiple && V.push("is-multiple"), j.value && V.push("with-atn-btn"), G.value && V.push("with-info-btn"), s.mandatory && fe.value && V.push("is-mandatory-field"), fe.value && y.value && V.push("has-focus"), N.value && V.push("show-options"), s.searchable && U.value && V.push("is-searching"), s.hidden && V.push("lkt-hidden-field"), s.type !== Z.Range && ((q = s.validation) == null ? void 0 : q.type) === ri.Auto && C.value && _.value && (w.value.length > 0 ? V.push("is-invalid") : V.push("is-valid")), [Z.Range, Z.Radio, Z.Select].includes(s.type) && V.push(`picked-value--${E.value}`), [Z.Textarea, Z.Html].includes(s.type) && V.push("is-lg"), [Z.Image].includes(s.type) && V.push("is-xl"), s.multiple && [Z.Select, Z.Radio].includes(s.type) && V.push("is-lg"), s.multiple && (fe.value ? V.push(`has-multiple-display-${s.multipleDisplayEdition}`) : V.push(`has-multiple-display-${s.multipleDisplay}`)), A.value > 0 && V.push("has-icons", `has-icons-${A.value}`), V.push(fe.value ? "is-editable" : "is-read"), s.type !== Z.Range && (V.push(p.value ? "is-valid" : "is-error"), V.push(J.value ? "is-filled" : "is-empty")), V.join(" ");
    }), de = X(() => {
      var V;
      return typeof E.value == "number" ? (M.value, (V = ee.langNumberFormat[M.value]) != null && V.amountOfDecimals ? xl(
        E.value,
        ee.langNumberFormat[M.value].amountOfDecimals,
        ee.langNumberFormat[M.value].decimalSeparator,
        ee.langNumberFormat[M.value].thousandsSeparator,
        ee.langNumberFormat[M.value].removeDecimalsIfZero
      ) : ee.amountOfDecimals ? xl(
        E.value,
        ee.amountOfDecimals,
        ee.decimalSeparator,
        ee.thousandsSeparator,
        ee.removeDecimalsIfZero
      ) : E.value.toString()) : s.type === Z.Html ? il(E.value) : E.value;
    }), re = X(() => {
      let V = qe(s.min, s.prop);
      return typeof V == "string" ? parseFloat(V) : typeof V == "number" ? V : !1;
    }), le = X(() => {
      let V = qe(s.max, s.prop);
      return typeof V == "string" ? parseFloat(V) : typeof V == "number" ? V : !1;
    }), me = X(() => {
      var V, q, ve, ze;
      if (pt.includes(s.type)) {
        if (E.value === !0 && typeof s.configOn == "object")
          return el(
            ii(((V = s.configOn) == null ? void 0 : V.label) ?? s.label),
            ((q = s.configOn) == null ? void 0 : q.labelIcon) ?? s.labelIcon,
            s.labelIconAtEnd
          );
        if (E.value !== !0 && typeof s.configOff == "object")
          return el(
            ii(((ve = s.configOff) == null ? void 0 : ve.label) ?? s.label),
            ((ze = s.configOff) == null ? void 0 : ze.labelIcon) ?? s.labelIcon,
            s.labelIconAtEnd
          );
      }
      return el(
        ii(s.label),
        s.labelIcon,
        s.labelIconAtEnd
      );
    }), Ee = X(() => ii(s.placeholder)), Me = X(() => ii(s.searchPlaceholder)), ke = X(() => typeof c == "function" ? c(s.prop) : qe(c, s.prop)), fe = X(() => typeof s.readMode == "function" ? !s.readMode(s.prop) : !qe(s.readMode, s.prop)), Be = X(() => {
      if (typeof s.modalData == "function") return s.modalData(s.prop);
      if (typeof s.modalData == "string") return qe(s.modalData, s.prop);
      if (typeof s.modalData == "object" && !Array.isArray(s.modalData)) {
        let V = {};
        for (let q in s.modalData)
          V[q] = qe(s.modalData[q], s.prop);
        return V;
      }
      return s.modalData;
    }), Ge = X(() => typeof k == "function" ? k(s.prop) : qe(k, s.prop)), Fe = X(() => s.type === Z.File ? ee.acceptTypes.file : s.type === Z.Image ? ee.acceptTypes.image : ""), Je = X(() => s.errorMessage), Ue = X(() => s.infoMessage), Se = X(() => s.canStep && fe.value && s.type === Z.Number), Ft = X(() => s.canStep && fe.value && s.type === Z.Number && a !== "subtract"), et = X(() => s.canStep && fe.value && s.type === Z.Number), Pe = X(() => s.canUndo && W.value && fe.value && !Ho.includes(s.type)), Ae = X(() => s.canClear && J.value && fe.value && !Fo.includes(s.type)), Oe = X(() => s.canI18n && typeof h.value == "object" && fe.value), Ie = X(() => s.type === Z.Password && s.showPassword && J.value && fe.value), yt = X(() => Pe.value && !s.infoButtonEllipsis), Ct = X(() => Ae.value && !s.infoButtonEllipsis), Qe = X(() => Ie.value && !s.infoButtonEllipsis && a !== "password"), Et = X(() => Oe.value && !s.infoButtonEllipsis && a !== "i18n"), cl = X(() => s.type === Z.Select), dl = X(() => s.allowReadModeSwitch && !s.infoButtonEllipsis), fl = X(() => typeof s.fileUploadButton == "object" && Object.keys(s.fileUploadButton).length > 0), hl = () => {
      Te(() => {
        L.value && L.value.focus();
      });
    }, oo = async () => {
      var q;
      let V = [];
      if ((q = s.validation) != null && q.resource) {
        l("validating");
        const ve = await sl(s.validation.resource, {
          ...s.validation.resourceData,
          value: E.value
        });
        if (ve) {
          let ze = ve.data === !0;
          !ze && E.value === d.value && (ze = !0), V.push(xe.createRemoteResponse(ve, ze ? ye.Ok : ye.Ko));
        }
        l("validation", ve);
      }
      return V;
    }, $e = K({});
    s.canI18n && typeof s.modelValue == "object" && !Array.isArray(s.modelValue) && ($e.value = JSON.parse(JSON.stringify(s.modelValue)) ?? {});
    const ao = K(new nt($e.value));
    ie($e, (V) => {
      let q = new nt(ao.value.getOriginalData());
      q.increment(V), q.changed() && (l("update:modelValue", V), Lt && clearTimeout(Lt), Lt = setTimeout(() => {
        _t();
      }, 150));
    }, { deep: !0 }), ie(() => {
      var V;
      return (V = s.validation) == null ? void 0 : V.checkEqualTo;
    }, () => _t()), ie(() => s.valid, (V) => p.value = V), ie(() => s.modelValue, (V) => {
      if ([Z.Card].includes(s.type))
        E.value = V;
      else if (Ne.value === he.DateInput)
        E.value = V;
      else if (s.canI18n) {
        let q = new nt($e.value);
        q.increment(V), q.changed() && ($e.value = JSON.parse(JSON.stringify(V)) ?? {});
      } else
        E.value = V;
    }, { deep: !0 }), ie(E, (V) => {
      typeof V == "object" && !Array.isArray(V) && ![Z.Card].includes(s.type) ? h.value[M.value] = V : h.value = V, s.type === Z.Number && vo(V);
    }, { deep: !0 });
    let Lt;
    ie(h, (V) => {
      var q;
      $.value && fe.value && (l("update:modelValue", V), typeof ((q = s.events) == null ? void 0 : q.changed) == "function" && s.events.changed({
        prop: s.prop
      }), Lt && clearTimeout(Lt), Lt = setTimeout(() => {
        _t();
      }, 150));
    }, { deep: !0 }), ie(p, (V) => {
      l("update:valid", V);
    });
    const st = (V) => {
      var q, ve, ze;
      return !!((q = s.validation.defaultValueOverrides) != null && q.includes(V) && ((ze = (ve = s.validation) == null ? void 0 : ve.defaultValue) == null ? void 0 : ze.length) > 0);
    }, _t = async () => {
      let V = [];
      if (s.validation.type === ri.External)
        s.validation.defaultValue !== void 0 && (V = [...s.validation.defaultValue]);
      else {
        const ze = await oo(), tt = so();
        V = [...ze, ...tt];
      }
      let q = V.filter((ze) => ze.status === ye.Ko).length === 0;
      if (v.value = q, s.type === Z.Range) return;
      new nt({
        status: w.value
      }).increment(V).changed() && (w.value.splice(0, w.value.length - 1), w.value = V), p.value = q, l("validation-status", V);
    }, so = () => {
      var tt, ft, Ut, Pt, Wt, $t, qt, Zt, jt, Gt, Kt, Yt, Re, ht;
      let V = [], q = E.value;
      s.canI18n && (q = $e[M]);
      let ve = re.value, ze = le.value;
      if (s.type === Z.Number && typeof s.min < "u" && typeof s.max < "u" && (q < ve || q > ze) && (V.push(xe.createNumBetween(ve, ze, ye.Ko)), p.value = !1, b.value === Ze.Error))
        return V;
      if (s.mandatory) {
        switch (s.type) {
          case Z.Select:
          case Z.Radio:
          case Z.ToggleButtonGroup:
            s.multiple && O.value.length === 0 ? st(ut.Empty) ? V = [...V, ...s.validation.defaultValue] : V.push(xe.createEmpty(ye.Ko)) : !s.multiple && !q && (st(ut.Empty) ? V = [...V, ...s.validation.defaultValue] : V.push(xe.createEmpty(ye.Ko)));
            break;
          case Z.Html:
            zo(il(q)).length === 0 && (st(ut.Empty) ? V = [...V, ...s.validation.defaultValue] : V.push(xe.createEmpty(ye.Ko)));
            break;
          default:
            ![Z.Number].includes(s.type) && q === "" && (st(ut.Empty) ? V = [...V, ...s.validation.defaultValue] : V.push(xe.createEmpty(ye.Ko)));
        }
        if (b.value === Ze.Error && V.length > 0) return V;
      }
      if (ve > 0 && (s.type !== Z.Number && q.length < ve ? st(ut.MinStringLength) ? V = [...V, ...s.validation.defaultValue] : V.push(xe.createMinStr(ye.Ko)) : q < ve && (st(ut.MinNumber) ? V = [...V, ...s.validation.defaultValue] : V.push(xe.createMinNum(ye.Ko)))), ze > 0 && (s.type !== Z.Number && q.length > ze ? st(ut.MaxStringLength) ? V = [...V, ...s.validation.defaultValue] : V.push(xe.createMaxStr(ye.Ko)) : q > ze && (st(ut.MaxNumber) ? V = [...V, ...s.validation.defaultValue] : V.push(xe.createMaxNum(ye.Ko)))), s.type === Z.Email && (No(q) || (st(ut.Email) ? V = [...V, ...s.validation.defaultValue] : V.push(xe.createEmail(ye.Ko)))), Uo.includes(s.type) && (ua(V, b.value, q, (tt = s.validation) == null ? void 0 : tt.minNumbers, (ft = s.validation) == null ? void 0 : ft.maxNumbers), ca(V, b.value, q, (Ut = s.validation) == null ? void 0 : Ut.minUpperChars, (Pt = s.validation) == null ? void 0 : Pt.maxUpperChars), da(V, b.value, q, (Wt = s.validation) == null ? void 0 : Wt.minLowerChars, ($t = s.validation) == null ? void 0 : $t.maxLowerChars), fa(V, b.value, q, (qt = s.validation) == null ? void 0 : qt.minChars, (Zt = s.validation) == null ? void 0 : Zt.maxChars), ha(V, b.value, q, (jt = s.validation) == null ? void 0 : jt.minSpecialChars, (Gt = s.validation) == null ? void 0 : Gt.maxSpecialChars)), (Kt = s.validation) != null && Kt.checkEqualTo) {
        let rt = typeof ((Yt = s.validation) == null ? void 0 : Yt.checkEqualTo) == "function" ? (Re = s.validation) == null ? void 0 : Re.checkEqualTo() : (ht = s.validation) == null ? void 0 : ht.checkEqualTo;
        q !== rt && V.push(xe.createEqualTo(rt, ye.Ko));
      }
      return V;
    }, oi = X(() => {
      var V, q, ve, ze, tt, ft;
      return ((V = s.validation) == null ? void 0 : V.trigger) === !1 ? !1 : ((q = s.validation) == null ? void 0 : q.trigger) === Ji.Always || ((ve = s.validation) == null ? void 0 : ve.type) === ri.External && ((ze = s.validation) == null ? void 0 : ze.defaultValue.length) > 0 || ((tt = s.validation) == null ? void 0 : tt.trigger) === Ji.Focus && C.value ? !0 : ((ft = s.validation) == null ? void 0 : ft.trigger) === Ji.Blur && _.value && C.value;
    }), ji = X(() => {
      var V, q, ve, ze;
      return s.validation.type === ri.External ? w.value.length > 0 ? 3 : 0 : !oi.value && ((q = (V = s.validation) == null ? void 0 : V.defaultValue) == null ? void 0 : q.length) > 0 ? 1 : oi.value ? 2 : w.value.length === 0 ? ((ze = (ve = s.validation) == null ? void 0 : ve.defaultValue) == null ? void 0 : ze.length) > 0 ? 1 : 0 : 2;
    }), Gi = X(() => {
      var V, q;
      switch (ji.value) {
        case 1:
          return Array.isArray((V = s.validation) == null ? void 0 : V.defaultValue) ? (q = s.validation) == null ? void 0 : q.defaultValue : [];
        case 2:
        case 3:
          return w.value;
        default:
          return [];
      }
    }), ro = X(() => !(Gi.value.length === 0 || s.validation.report === !1 || s.validation.report === Sl.Inline || !s.validation.report || ji.value === 2 && !oi.value)), uo = X(() => !(Gi.value.length === 0 || s.validation.report === !1 || s.validation.report === Sl.Message || !s.validation.report || ji.value === 1 && !oi.value)), Ki = () => {
      var V;
      switch (Ne.value) {
        case he.HtmlInput:
          L.value && L.value.setValue(H.value);
          return;
        case he.DateInput:
          h.value = d.value;
          return;
        case he.FileInput:
          h.value = d.value, T.value = z.value;
          return;
        case he.SelectInput:
          (V = L.value) == null || V.doUndo(H.value);
          return;
        case he.TableInput:
          E.value = JSON.parse(JSON.stringify(H.value));
          return;
        default:
          E.value = H.value;
      }
    }, pl = () => {
      var V;
      switch (Ne.value) {
        case he.HtmlInput:
          L.value && L.value.setValue("");
          return;
        case he.DateInput:
          h.value = "";
          return;
        case he.FileInput:
          h.value = "", T.value = "";
          return;
        case he.SelectInput:
          (V = L.value) == null || V.doClear();
          return;
        case he.TableInput:
          E.value = [];
          return;
        default:
          E.value = "";
      }
    }, co = () => E.value, ai = (V) => {
      l("keyup", V);
    }, fo = () => {
      L.value && L.value.keepFocused();
    }, ho = () => {
      if (N.value) {
        if (s.type === Z.Select) {
          Rt();
          return;
        }
        return zt();
      }
      if (s.type === Z.Select) {
        Nt();
        return;
      }
      return Bt();
    }, si = (V) => l("keydown", V), Bt = (V) => {
      C.value = !0, y.value = !0, _t(), l("focus", V);
    }, zt = (V) => {
      setTimeout(() => {
        if (!(s.searchable && U.value)) {
          if (s.multiple) {
            N.value = !0, y.value = !0;
            return;
          }
          _.value = !0, N.value = !1, y.value = !1, _t(), l("blur", V);
        }
      }, 100);
    }, Yi = (V) => {
      C.value = !0, y.value = !0, l("focus", V);
    }, Xi = (V) => {
      _.value = !0, y.value = !1, l("blur", V);
    }, Nt = () => {
      C.value = !0, y.value = !0, _t(), s.searchable && fo(), l("focus");
    }, Rt = () => {
      _.value = !0, y.value = !1, l("blur");
    }, Ke = (V) => {
      l("change", V, E.value);
    }, wt = (V) => {
      l("click", V);
    }, ml = (V) => l("click-info", V), po = (V) => l("click-error", V), gl = () => {
      let V = s.step ?? 1;
      typeof V == "string" && (V = parseFloat(V));
      let q = String(V).split(".")[0].length, ve = parseFloat(E.value);
      isNaN(ve) && (ve = 0), (!re.value || ve > re.value) && (E.value = parseFloat((ve - V).toFixed(q)));
    }, mo = () => {
      let V = s.step ?? 1;
      typeof V == "string" && (V = parseFloat(V));
      let q = String(V).split(".")[0].length, ve = parseFloat(E.value);
      isNaN(ve) && (ve = 0), (!le.value || ve < le.value) && (E.value = parseFloat((ve + V).toFixed(q)));
    }, go = () => {
      fe.value && hl();
    }, vl = (V) => {
      Bl({
        text: mt.defaultUploadSuccessText,
        details: mt.defaultUploadSuccessDetails,
        icon: mt.defaultUploadSuccessIcon,
        positionX: Tl.Right
      }), l("upload-success", V);
    }, bl = (V) => {
      Bl({
        text: mt.defaultUploadErrorText,
        details: mt.defaultUploadErrorDetails,
        icon: mt.defaultUploadErrorIcon,
        positionX: Tl.Right
      }), l("upload-error", V);
    }, yl = () => {
      l("uploading");
    }, Cl = (V) => {
      l("picked-files", V);
    }, vo = (V) => {
      if (!s.enableAutoNumberFix) return !1;
      let q = Number(V), ve = Jo(q, re.value, le.value);
      return q !== ve ? (E.value = ve, !0) : !1;
    };
    t({
      Identifier: u,
      reset: Ki,
      focus: hl,
      value: co,
      isMandatory: () => s.mandatory,
      isFormValid: () => v.value,
      isValid: () => p.value,
      click: () => {
        var V;
        switch (s.type) {
          case Z.File:
            return (V = L.value) == null ? void 0 : V.click();
        }
        B.value.click();
      }
    });
    const bo = X(() => s.editSlot !== "" && typeof ee.customEditSlots[s.editSlot] < "u"), yo = X(() => ee.customEditSlots[s.editSlot]);
    at(() => {
      s.type === Z.Select && s.multiple && (U.value = !0), _t(), $.value = !0;
    });
    const Co = X(() => pt.includes(s.type) && !R.value ? "label" : "div"), _o = X(() => pt.includes(s.type) ? {
      for: u
    } : {}), wo = X(() => {
      switch (s.type) {
        case Z.Select:
        case Z.Radio:
        case Z.ToggleButtonGroup:
          return O.value;
        case Z.Date:
        case Z.DateTime:
          return En(h.value, P.value);
        case Z.File:
        case Z.Image:
          return h.value;
        default:
          return s.canI18n ? $e.value[M.value] : E.value;
      }
    }), ko = X(() => typeof s.canRender == "function" ? s.canRender({
      prop: s.prop
    }) : typeof s.canRender == "boolean" ? s.canRender : !0), xo = X(() => typeof s.canDisplay == "function" ? s.canDisplay({
      prop: s.prop
    }) : typeof s.canDisplay == "boolean" ? s.canDisplay : !0), Ne = X(() => {
      var V, q;
      if (pt.includes(s.type)) return he.BooleanInput;
      switch (s.type) {
        case Z.Color:
          return s.multiple ? he.MultipleColorInput : he.SingleColorInput;
        case Z.Card:
          return s.multiple ? he.MultipleCardInput : he.SingleCardInput;
        case Z.File:
        case Z.Image:
          return he.FileInput;
        case Z.Date:
        case Z.DateTime:
          return he.DateInput;
        case Z.Time:
          return he.TimeInput;
        case Z.Select:
          return he.SelectInput;
        case Z.Calc:
          return he.CalcInput;
        case Z.Search:
          return he.SearchInput;
        case Z.Html:
          return he.HtmlInput;
        case Z.Table:
          return he.TableInput;
        case Z.Range:
          if (s.options.length > 0)
            return he.RangeOptsInput;
        case Z.Radio:
        case Z.DayOfWeek:
          return he.RadioInput;
        case Z.ToggleButtonGroup:
          return he.ToggleButtonGroupInput;
        default:
          if (I.value === "input")
            return s.options.length > 0 || (V = s.optionsConfig) != null && V.http && Object.keys((q = s.optionsConfig) == null ? void 0 : q.http).length > 0 ? he.SelectInput : he.TextInput;
          if (I.value === "textarea")
            return he.TextareaInput;
      }
    });
    return (V, q) => {
      var tt, ft, Ut, Pt, Wt, $t, qt, Zt, jt, Gt, Kt, Yt;
      const ve = pe("lkt-button"), ze = pe("lkt-table");
      return ko.value ? Ve((F(), ce("div", {
        key: 0,
        class: ct(["lkt-field", oe.value]),
        "data-show-ui": G.value,
        "data-labeled": !D(i).label,
        ref_key: "container",
        ref: B
      }, [
        D(i).label ? lt(V.$slots, "label", { key: 0 }) : ae("", !0),
        !D(i).label && me.value !== "" && !D(pt).includes(e.type) ? (F(), ce("label", {
          key: 1,
          for: D(u),
          class: "lkt-field--label",
          innerHTML: me.value
        }, null, 8, xu)) : ae("", !0),
        Ce("div", Su, [
          j.value ? (F(), ce("div", Tu, [
            e.featuredButton === "password" && Ie.value ? (F(), Y(ll, {
              key: 0,
              modelValue: m.value,
              "onUpdate:modelValue": q[0] || (q[0] = (Re) => m.value = Re),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : ae("", !0),
            Oe.value && D(a) === "i18n" && e.canI18n && B.value ? (F(), Y(zl, {
              key: 1,
              translations: $e.value,
              "is-featured": "",
              referrer: B.value,
              type: e.type
            }, null, 8, ["translations", "referrer", "type"])) : ae("", !0),
            Se.value && D(a) === "subtract" ? (F(), Y(ve, se({ key: 2 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              disabled: D(E) === re.value
            }, { onClick: gl }), null, 16)) : ae("", !0)
          ])) : ae("", !0),
          Ge.value && (!fe.value || ![D(Z).Time, D(Z).Date, D(Z).DateTime].includes(e.type)) ? (F(), ce("div", Eu, [
            Ce("i", {
              class: ct(Ge.value)
            }, null, 2)
          ])) : ae("", !0),
          fe.value ? (F(), Y(dt(Co.value), se({ key: 2 }, _o.value, { class: "lkt-field-main" }), {
            default: be(() => {
              var Re, ht, rt, Xt, Jt, Qt, ei, ti, _l;
              return [
                D(i).edit ? (F(), ce("div", {
                  key: 0,
                  onClick: wt
                }, [
                  lt(V.$slots, "edit", {
                    value: h.value,
                    title: de.value,
                    data: e.slotData
                  })
                ])) : bo.value ? (F(), ce("div", {
                  key: 1,
                  onClick: wt
                }, [
                  (F(), Y(dt(yo.value), {
                    value: h.value,
                    title: de.value,
                    data: e.slotData
                  }, null, 8, ["value", "title", "data"]))
                ])) : Ne.value === D(he).BooleanInput ? (F(), Y(va, {
                  key: 2,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[1] || (q[1] = (ne) => We(E) ? E.value = ne : null),
                  ref_key: "inputElement",
                  ref: L,
                  id: D(u),
                  name: e.name,
                  type: e.type,
                  label: me.value,
                  editable: fe.value,
                  focusing: y.value,
                  disabled: R.value,
                  readonly: e.readonly,
                  onFocus: Yi,
                  onBlur: Xi
                }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : Ne.value === D(he).MultipleColorInput ? (F(), Y(ra, {
                  key: 3,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[2] || (q[2] = (ne) => We(E) ? E.value = ne : null),
                  ref_key: "inputElement",
                  ref: L,
                  "edit-mode": fe.value,
                  min: re.value,
                  max: le.value
                }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : Ne.value === D(he).SingleColorInput ? (F(), Y(Ln, {
                  key: 4,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[3] || (q[3] = (ne) => We(E) ? E.value = ne : null),
                  onChange: Ke,
                  ref_key: "inputElement",
                  ref: L
                }, null, 8, ["modelValue"])) : Ne.value === D(he).FileInput && e.multiple ? (F(), Y(wu, {
                  key: 5,
                  modelValue: h.value,
                  "onUpdate:modelValue": q[4] || (q[4] = (ne) => h.value = ne),
                  "file-name": T.value,
                  "onUpdate:fileName": q[5] || (q[5] = (ne) => T.value = ne),
                  ref_key: "inputElement",
                  ref: L,
                  id: D(u),
                  "file-upload-http": e.fileUploadHttp,
                  tabindex: e.tabindex,
                  name: e.name,
                  placeholder: Ee.value,
                  accept: Fe.value,
                  focusing: y.value,
                  disabled: R.value,
                  readonly: e.readonly,
                  "is-image": e.type === D(Z).Image,
                  "file-browser-config": e.fileBrowserConfig,
                  "call-to-action-button": e.callToActionButton,
                  "table-config": e.optionsConfig.table,
                  onChange: Ke,
                  onUploading: yl,
                  onUploadSuccess: vl,
                  onUploadError: bl,
                  onPickedFiles: Cl
                }, null, 8, ["modelValue", "file-name", "id", "file-upload-http", "tabindex", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image", "file-browser-config", "call-to-action-button", "table-config"])) : Ne.value === D(he).FileInput ? (F(), Y(lo, {
                  key: 6,
                  modelValue: h.value,
                  "onUpdate:modelValue": q[6] || (q[6] = (ne) => h.value = ne),
                  "file-name": T.value,
                  "onUpdate:fileName": q[7] || (q[7] = (ne) => T.value = ne),
                  ref_key: "inputElement",
                  ref: L,
                  id: D(u),
                  tabindex: e.tabindex,
                  resource: (Re = e.fileUploadHttp) == null ? void 0 : Re.resource,
                  "resource-data": (ht = e.fileUploadHttp) == null ? void 0 : ht.data,
                  name: e.name,
                  placeholder: Ee.value,
                  accept: Fe.value,
                  focusing: y.value,
                  disabled: R.value,
                  readonly: e.readonly,
                  "is-image": e.type === D(Z).Image,
                  "file-browser-config": e.fileBrowserConfig,
                  "call-to-action-button": e.callToActionButton,
                  onChange: Ke,
                  onUploading: yl,
                  onUploadSuccess: vl,
                  onUploadError: bl,
                  onPickedFiles: Cl
                }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image", "file-browser-config", "call-to-action-button"])) : Ne.value === D(he).DateInput ? (F(), Y(uu, {
                  key: 7,
                  modelValue: h.value,
                  "onUpdate:modelValue": q[8] || (q[8] = (ne) => h.value = ne),
                  id: D(u),
                  tabindex: e.tabindex,
                  lang: M.value,
                  name: e.name,
                  icon: Ge.value,
                  "is-date-time": D(Z).DateTime === e.type,
                  tooltip: e.tooltipConfig
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name", "icon", "is-date-time", "tooltip"])) : Ne.value === D(he).TimeInput ? (F(), Y(mu, {
                  key: 8,
                  modelValue: h.value,
                  "onUpdate:modelValue": q[9] || (q[9] = (ne) => h.value = ne),
                  id: D(u),
                  tabindex: e.tabindex,
                  lang: M.value,
                  name: e.name,
                  icon: Ge.value
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name", "icon"])) : Ne.value === D(he).SelectInput ? (F(), Y(gn, se({
                  key: 9,
                  ref_key: "inputElement",
                  ref: L,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[10] || (q[10] = (ne) => We(E) ? E.value = ne : null),
                  "show-options": N.value,
                  "onUpdate:showOptions": q[11] || (q[11] = (ne) => N.value = ne),
                  "picked-options": O.value,
                  "onUpdate:pickedOptions": q[12] || (q[12] = (ne) => O.value = ne)
                }, {
                  searchable: e.searchable,
                  searchMode: U.value,
                  multiple: e.multiple,
                  canTag: e.canTag,
                  options: e.options,
                  optionsConfig: e.optionsConfig,
                  optionSlot: e.optionSlot,
                  editable: fe.value,
                  focusing: y.value,
                  searchPlaceholder: Me.value,
                  multipleDisplayEdition: e.multipleDisplayEdition,
                  prop: e.prop,
                  max: le.value,
                  tooltip: e.tooltipConfig,
                  events: e.events,
                  optionValueType: e.optionValueType,
                  referrer: B.value,
                  isAutoCompleteText: e.type !== D(Z).Select
                }, {
                  onFocus: Nt,
                  onBlur: Rt,
                  onChange: Ke
                }), null, 16, ["modelValue", "show-options", "picked-options"])) : Ne.value === D(he).RadioInput ? (F(), Y(gu, se({
                  key: 10,
                  ref_key: "inputElement",
                  ref: L,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[13] || (q[13] = (ne) => We(E) ? E.value = ne : null),
                  "show-options": N.value,
                  "onUpdate:showOptions": q[14] || (q[14] = (ne) => N.value = ne),
                  "picked-options": O.value,
                  "onUpdate:pickedOptions": q[15] || (q[15] = (ne) => O.value = ne)
                }, {
                  searchable: e.searchable,
                  searchMode: U.value,
                  multiple: e.multiple,
                  options: e.options,
                  optionsConfig: e.optionsConfig,
                  optionSlot: e.optionSlot,
                  editable: fe.value,
                  focusing: y.value,
                  searchPlaceholder: Me.value,
                  multipleDisplayEdition: e.multipleDisplayEdition,
                  prop: e.prop,
                  max: le.value,
                  tooltip: e.tooltipConfig,
                  events: e.events,
                  optionValueType: e.optionValueType,
                  referrer: B.value,
                  isDayOfWeek: e.type === D(Z).DayOfWeek
                }, {
                  onFocus: Nt,
                  onBlur: Rt,
                  onChange: Ke
                }), null, 16, ["modelValue", "show-options", "picked-options"])) : Ne.value === D(he).RangeOptsInput ? (F(), Y(_u, se({
                  key: 11,
                  ref_key: "inputElement",
                  ref: L,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[16] || (q[16] = (ne) => We(E) ? E.value = ne : null),
                  "show-options": N.value,
                  "onUpdate:showOptions": q[17] || (q[17] = (ne) => N.value = ne),
                  "picked-options": O.value,
                  "onUpdate:pickedOptions": q[18] || (q[18] = (ne) => O.value = ne)
                }, {
                  searchable: e.searchable,
                  searchMode: U.value,
                  multiple: e.multiple,
                  options: e.options,
                  optionsConfig: e.optionsConfig,
                  optionSlot: e.optionSlot,
                  editable: fe.value,
                  focusing: y.value,
                  searchPlaceholder: Me.value,
                  multipleDisplayEdition: e.multipleDisplayEdition,
                  prop: e.prop,
                  min: re.value,
                  max: le.value,
                  tooltip: e.tooltipConfig,
                  events: e.events,
                  optionValueType: e.optionValueType,
                  referrer: B.value
                }, {
                  onFocus: Nt,
                  onBlur: Rt,
                  onChange: Ke
                }), null, 16, ["modelValue", "show-options", "picked-options"])) : Ne.value === D(he).ToggleButtonGroupInput ? (F(), Y(vu, se({
                  key: 12,
                  ref_key: "inputElement",
                  ref: L,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[19] || (q[19] = (ne) => We(E) ? E.value = ne : null),
                  "show-options": N.value,
                  "onUpdate:showOptions": q[20] || (q[20] = (ne) => N.value = ne),
                  "picked-options": O.value,
                  "onUpdate:pickedOptions": q[21] || (q[21] = (ne) => O.value = ne)
                }, {
                  searchable: e.searchable,
                  searchMode: U.value,
                  multiple: e.multiple,
                  options: e.options,
                  optionsConfig: e.optionsConfig,
                  optionSlot: e.optionSlot,
                  editable: fe.value,
                  focusing: y.value,
                  searchPlaceholder: Me.value,
                  multipleDisplayEdition: e.multipleDisplayEdition,
                  prop: e.prop,
                  max: le.value,
                  tooltip: e.tooltipConfig,
                  events: e.events,
                  optionValueType: e.optionValueType,
                  referrer: B.value
                }, {
                  onFocus: Nt,
                  onBlur: Rt,
                  onChange: Ke
                }), null, 16, ["modelValue", "show-options", "picked-options"])) : Ne.value === D(he).CalcInput ? (F(), Y(qr, {
                  key: 13,
                  ref_key: "inputElement",
                  ref: L,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[22] || (q[22] = (ne) => We(E) ? E.value = ne : null),
                  id: D(u),
                  tabindex: e.tabindex,
                  name: e.name,
                  editable: fe.value,
                  focusing: y.value,
                  disabled: R.value,
                  readonly: e.readonly,
                  options: e.options,
                  onFocus: Yi,
                  onBlur: Xi
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : Ne.value === D(he).SearchInput ? (F(), Y(Gr, {
                  key: 14,
                  ref_key: "inputElement",
                  ref: L,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[23] || (q[23] = (ne) => We(E) ? E.value = ne : null),
                  id: D(u),
                  tabindex: e.tabindex,
                  name: e.name,
                  editable: fe.value,
                  focusing: y.value,
                  "had-first-focus": C.value,
                  disabled: R.value,
                  readonly: e.readonly,
                  "options-resource": (Xt = (rt = e.optionsConfig) == null ? void 0 : rt.http) == null ? void 0 : Xt.resource,
                  container: B.value,
                  tooltip: e.tooltipConfig,
                  events: e.events,
                  "options-config": e.optionsConfig,
                  onFocus: Yi,
                  onBlur: Xi
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container", "tooltip", "events", "options-config"])) : Ne.value === D(he).MultipleCardInput ? (F(), Y(du, {
                  key: 15,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[24] || (q[24] = (ne) => We(E) ? E.value = ne : null),
                  id: D(u),
                  tabindex: e.tabindex,
                  name: e.name,
                  editable: fe.value,
                  focusing: y.value,
                  "had-first-focus": C.value,
                  disabled: R.value,
                  readonly: e.readonly,
                  "options-resource": (Qt = (Jt = e.optionsConfig) == null ? void 0 : Jt.http) == null ? void 0 : Qt.resource,
                  modal: ke.value,
                  "modal-key": D(g),
                  "modal-data": Be.value,
                  "item-type": D(x)
                }, Vt({ _: 2 }, [
                  D(i)["item-" + D(x)] ? {
                    name: "item",
                    fn: be(({ item: ne }) => [
                      lt(V.$slots, "item-" + D(x), { item: ne })
                    ]),
                    key: "0"
                  } : D(i).item ? {
                    name: "item",
                    fn: be(({ item: ne }) => [
                      lt(V.$slots, "item", { item: ne })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : Ne.value === D(he).SingleCardInput ? (F(), Y(no, {
                  key: 16,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[25] || (q[25] = (ne) => We(E) ? E.value = ne : null),
                  id: D(u),
                  tabindex: e.tabindex,
                  name: e.name,
                  editable: fe.value,
                  focusing: y.value,
                  "had-first-focus": C.value,
                  disabled: R.value,
                  readonly: e.readonly,
                  "options-resource": (ti = (ei = e.optionsConfig) == null ? void 0 : ei.http) == null ? void 0 : ti.resource,
                  modal: ke.value,
                  "modal-key": D(g),
                  "modal-data": Be.value,
                  "item-type": D(x)
                }, Vt({ _: 2 }, [
                  D(i)["item-" + D(x)] ? {
                    name: "item",
                    fn: be(({ item: ne }) => [
                      lt(V.$slots, "item-" + D(x), { item: ne })
                    ]),
                    key: "0"
                  } : D(i).item ? {
                    name: "item",
                    fn: be(({ item: ne }) => [
                      lt(V.$slots, "item", { item: ne })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : Ne.value === D(he).TableInput ? (F(), Y(ze, se({
                  key: 17,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[26] || (q[26] = (ne) => We(E) ? E.value = ne : null)
                }, {
                  ...(_l = e.optionsConfig) == null ? void 0 : _l.table,
                  editMode: fe.value
                }), null, 16, ["modelValue"])) : e.canI18n && Ne.value === D(he).TextInput ? Ve((F(), ce("input", {
                  key: 18,
                  "onUpdate:modelValue": q[27] || (q[27] = (ne) => $e.value[M.value] = ne),
                  ref: (ne) => L.value = ne,
                  value: $e.value[M.value],
                  type: Q.value,
                  name: e.name,
                  id: D(u),
                  disabled: R.value,
                  readonly: e.readonly,
                  placeholder: Ee.value,
                  tabindex: e.tabindex,
                  autocomplete: te.value,
                  min: re.value,
                  max: le.value,
                  step: e.step,
                  onKeyup: ai,
                  onKeydown: si,
                  onFocus: Bt,
                  onBlur: zt,
                  onClick: wt,
                  onChange: Ke
                }, null, 40, Lu)), [
                  [kl, $e.value[M.value]]
                ]) : Ne.value === D(he).TextInput ? Ve((F(), ce("input", {
                  key: 19,
                  "onUpdate:modelValue": q[28] || (q[28] = (ne) => We(E) ? E.value = ne : null),
                  ref: (ne) => L.value = ne,
                  value: D(E),
                  type: Q.value,
                  name: e.name,
                  id: D(u),
                  disabled: R.value,
                  readonly: e.readonly,
                  placeholder: Ee.value,
                  tabindex: e.tabindex,
                  autocomplete: te.value,
                  min: re.value,
                  max: le.value,
                  step: e.step,
                  onKeyup: ai,
                  onKeydown: si,
                  onFocus: Bt,
                  onBlur: zt,
                  onClick: wt,
                  onChange: Ke
                }, null, 40, Bu)), [
                  [kl, D(E)]
                ]) : e.canI18n && Ne.value === D(he).TextareaInput ? Ve((F(), ce("textarea", {
                  key: 20,
                  "onUpdate:modelValue": q[29] || (q[29] = (ne) => $e.value[M.value] = ne),
                  ref: (ne) => L.value = ne,
                  name: e.name,
                  id: D(u),
                  disabled: R.value,
                  readonly: e.readonly,
                  placeholder: Ee.value,
                  tabindex: e.tabindex,
                  autocomplete: te.value,
                  onKeyup: ai,
                  onKeydown: si,
                  onFocus: Bt,
                  onBlur: zt,
                  onClick: wt,
                  onChange: Ke
                }, null, 40, zu)), [
                  [Tt, $e.value[M.value]]
                ]) : Ne.value === D(he).TextareaInput ? Ve((F(), ce("textarea", {
                  key: 21,
                  "onUpdate:modelValue": q[30] || (q[30] = (ne) => We(E) ? E.value = ne : null),
                  ref: (ne) => L.value = ne,
                  name: e.name,
                  id: D(u),
                  disabled: R.value,
                  readonly: e.readonly,
                  placeholder: Ee.value,
                  tabindex: e.tabindex,
                  autocomplete: te.value,
                  onKeyup: ai,
                  onKeydown: si,
                  onFocus: Bt,
                  onBlur: zt,
                  onClick: wt,
                  onChange: Ke
                }, null, 40, Nu)), [
                  [Tt, D(E)]
                ]) : Ne.value === D(he).HtmlInput ? (F(), Y(Br, {
                  key: 22,
                  ref_key: "inputElement",
                  ref: L,
                  modelValue: D(E),
                  "onUpdate:modelValue": q[31] || (q[31] = (ne) => We(E) ? E.value = ne : null),
                  id: D(u),
                  tabindex: e.tabindex,
                  name: e.name,
                  lang: M.value,
                  editable: fe.value,
                  focusing: y.value,
                  disabled: R.value,
                  readonly: e.readonly,
                  onFocus: Bt,
                  onBlur: zt
                }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : ae("", !0)
              ];
            }),
            _: 3
          }, 16)) : ae("", !0),
          fe.value ? ae("", !0) : (F(), Y(ou, {
            key: 3,
            value: wo.value,
            type: e.type,
            "is-loading": o.value,
            label: me.value,
            title: de.value,
            "file-name": T.value,
            "value-slot": e.valueSlot,
            "empty-value-slot": e.emptyValueSlot,
            "slot-data": e.slotData,
            download: D(S),
            anchor: (tt = e.optionsConfig) == null ? void 0 : tt.anchor,
            multiple: e.multiple,
            multipleDisplay: e.multipleDisplay,
            modal: ke.value,
            "modal-key": D(g),
            "modal-data": Be.value,
            "options-config": e.optionsConfig,
            "option-slot": e.optionSlot,
            "options-download": (ft = e.optionsConfig) == null ? void 0 : ft.download,
            "options-modal": (Ut = e.optionsConfig) == null ? void 0 : Ut.modal,
            "options-modal-data": (Pt = e.optionsConfig) == null ? void 0 : Pt.modalData,
            "options-icon": (Wt = e.optionsConfig) == null ? void 0 : Wt.icon,
            "options-text": ($t = e.optionsConfig) == null ? void 0 : $t.text,
            "options-class": (qt = e.optionsConfig) == null ? void 0 : qt.class,
            "options-label-formatter": (Zt = e.optionsConfig) == null ? void 0 : Zt.labelFormatter,
            "read-mode-config": e.readModeConfig,
            prop: e.prop,
            onClick: wt
          }, Vt({ _: 2 }, [
            D(i).value ? {
              name: "value",
              fn: be(() => [
                lt(V.$slots, h.value, {
                  value: h.value,
                  title: de.value,
                  data: e.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "is-loading", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "anchor", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "options-config", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-text", "options-class", "options-label-formatter", "read-mode-config", "prop"])),
          G.value ? (F(), ce("div", Ru, [
            Je.value ? (F(), Y(ve, {
              key: 0,
              title: e.errorMessage,
              class: "lkt-field--danger-btn",
              icon: "lkt-icn-attention",
              onClick: po
            }, null, 8, ["title"])) : ae("", !0),
            Ve(ue(kn, { onClick: Ki }, null, 512), [
              [it, yt.value]
            ]),
            Ve(ue(xn, { onClick: pl }, null, 512), [
              [it, Ct.value]
            ]),
            e.type === D(Z).Number ? Ve((F(), Y(ve, se({ key: 1 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              disabled: D(E) === re.value
            }, { onClick: gl }), null, 16)), [
              [it, Ft.value]
            ]) : ae("", !0),
            e.type === D(Z).Number ? Ve((F(), Y(ve, se({ key: 2 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-more",
              disabled: D(E) === le.value
            }, { onClick: mo }), null, 16)), [
              [it, et.value]
            ]) : ae("", !0),
            uo.value ? (F(), Y(ve, se({
              key: 3,
              class: "lkt-field--report-btn",
              icon: "lkt-icn-attention",
              onClick: ml
            }, {
              type: D(je).Tooltip,
              tooltip: {
                showOnReferrerHover: !0,
                showOnReferrerHoverDelay: 500,
                hideOnReferrerLeave: !0
              }
            }), {
              tooltip: be(() => {
                var Re;
                return [
                  ue(bn, {
                    items: w.value,
                    config: e.validation,
                    stack: (Re = e.validation) == null ? void 0 : Re.stack
                  }, null, 8, ["items", "config", "stack"])
                ];
              }),
              _: 1
            }, 16)) : ae("", !0),
            Ue.value ? (F(), Y(ve, se({
              key: 4,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-info",
              onClick: ml
            }, {
              type: D(je).Tooltip,
              tooltip: {
                showOnReferrerHover: !0,
                showOnReferrerHoverDelay: 500,
                hideOnReferrerLeave: !0
              }
            }), {
              tooltip: be(() => [
                Ce("div", {
                  class: "lkt-field--info-msg",
                  innerHTML: e.infoMessage
                }, null, 8, Au)
              ]),
              _: 1
            }, 16)) : ae("", !0),
            fe.value && fl.value ? (F(), Y(fu, {
              key: 5,
              config: e.fileUploadButton,
              "file-upload-http": e.fileUploadHttp
            }, null, 8, ["config", "file-upload-http"])) : ae("", !0),
            e.type === D(Z).Password ? Ve((F(), Y(ll, {
              key: 6,
              modelValue: m.value,
              "onUpdate:modelValue": q[32] || (q[32] = (Re) => m.value = Re)
            }, null, 8, ["modelValue"])), [
              [it, Qe.value]
            ]) : ae("", !0),
            Et.value && B.value ? (F(), Y(zl, {
              key: 7,
              translations: $e.value,
              type: e.type,
              referrer: B.value
            }, null, 8, ["translations", "type", "referrer"])) : ae("", !0),
            fe.value && dl.value ? (F(), Y(Sn, {
              key: 8,
              modelValue: fe.value,
              "onUpdate:modelValue": q[33] || (q[33] = (Re) => fe.value = Re),
              onClick: go
            }, null, 8, ["modelValue"])) : ae("", !0),
            e.customButtonText || e.customButtonClass ? (F(), Y(ve, {
              key: 9,
              text: e.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: e.customButtonClass
            }, null, 8, ["text", "icon"])) : ae("", !0),
            typeof e.createButton == "object" && e.createButton && fe.value ? (F(), Y(ve, se({ key: 10 }, {
              icon: "lkt-icn-add",
              ...e.createButton,
              modalData: {
                ...e.createButton.modalData,
                events: {
                  onCreate: () => {
                    var Re, ht, rt, Xt, Jt, Qt, ei, ti;
                    e.createButton && typeof ((rt = (ht = (Re = e.createButton) == null ? void 0 : Re.modalData) == null ? void 0 : ht.events) == null ? void 0 : rt.onCreate) == "function" && ((Qt = (Jt = (Xt = e.createButton) == null ? void 0 : Xt.modalData) == null ? void 0 : Jt.events) == null || Qt.onCreate()), typeof ((ei = e.events) == null ? void 0 : ei.itemCreated) == "function" && ((ti = e.events) == null || ti.itemCreated());
                  }
                }
              }
            }, { class: "lkt-field--info-btn" }), null, 16)) : ae("", !0),
            fe.value && typeof ((jt = e.optionsConfig) == null ? void 0 : jt.canRenderDropdown) > "u" || ((Gt = e.optionsConfig) == null ? void 0 : Gt.canRenderDropdown) === !0 ? Ve((F(), Y(Qo, {
              key: 11,
              onClick: ho
            }, null, 512)), [
              [it, cl.value]
            ]) : ae("", !0),
            e.infoButtonEllipsis ? (F(), Y(Yo, {
              key: 12,
              "show-undo": Pe.value,
              "show-clear": Ae.value,
              "show-password": Ie.value,
              "show-edition": e.allowReadModeSwitch,
              "show-password-check": m.value,
              "onUpdate:showPasswordCheck": q[34] || (q[34] = (Re) => m.value = Re),
              "show-edition-check": fe.value,
              "onUpdate:showEditionCheck": q[35] || (q[35] = (Re) => fe.value = Re),
              onUndo: Ki,
              onClear: pl
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : ae("", !0)
          ])) : ae("", !0)
        ]),
        fe.value ? Ve((F(), Y(bn, {
          key: 2,
          items: Gi.value,
          config: e.validation,
          stack: (Kt = e.validation) == null ? void 0 : Kt.stack
        }, null, 8, ["items", "config", "stack"])), [
          [it, ro.value]
        ]) : ae("", !0),
        $.value && (e.type === D(Z).Select || e.type === D(Z).Radio || e.type === D(Z).ToggleButtonGroup) ? (F(), Y(gn, se({
          key: 3,
          ref_key: "inputElement",
          ref: L
        }, {
          modelValue: D(E),
          pickedOptions: O.value,
          showOptions: N.value,
          searchable: e.searchable,
          searchMode: U.value,
          multiple: e.multiple,
          canTag: e.canTag,
          options: e.options,
          optionsConfig: e.optionsConfig,
          optionSlot: e.optionSlot,
          editable: fe.value,
          focusing: y.value,
          searchPlaceholder: Me.value,
          multipleDisplayEdition: e.multipleDisplayEdition,
          prop: e.prop,
          max: le.value,
          tooltip: e.tooltipConfig,
          events: e.events,
          optionValueType: e.optionValueType,
          referrer: B.value,
          autoLoading: !0,
          localAutoLoad: !((Yt = e.optionsConfig) != null && Yt.autoloadResource)
        }, {
          onFocus: Nt,
          onBlur: Rt,
          onChange: Ke,
          onLoaded: q[36] || (q[36] = (Re) => f.value = !0),
          onAutoloadStart: q[37] || (q[37] = (Re) => o.value = !0),
          onAutoloadEnd: q[38] || (q[38] = (Re) => o.value = !1)
        }), null, 16)) : ae("", !0)
      ], 10, ku)), [
        [it, xo.value]
      ]) : ae("", !0);
    };
  }
}), Iu = { class: "lkt-file-entity-main" }, Vu = /* @__PURE__ */ we({
  __name: "FileEntityBox",
  props: {
    modelValue: {}
  },
  emits: [
    "double-click"
  ],
  setup(e, { emit: t }) {
    const n = e, l = t, i = K(n.modelValue), s = K(0);
    let u;
    const f = () => {
      ++s.value, s.value === 1 ? u = setTimeout(() => {
        i.value.isPicked = !i.value.isPicked, s.value = 0;
      }, 225) : (clearTimeout(u), l("double-click", i.value), s.value = 0);
    }, o = X(() => i.value.isPicked ? "lkt-icn-checkbox" : "lkt-icn-checkbox-empty");
    return (b, c) => {
      const g = pe("lkt-icon"), k = pe("lkt-image");
      return F(), ce("div", {
        class: "lkt-file-entity-box",
        onClick: f
      }, [
        Ce("div", Iu, [
          i.value.type !== D(Ye).Directory ? (F(), ce("i", {
            key: 0,
            class: ct(["lkt-file-entity-picked-indicator", o.value])
          }, null, 2)) : ae("", !0),
          i.value.type === D(Ye).Directory ? (F(), Y(g, De(se({ key: 1 }, {
            icon: "lkt-icn-folder",
            text: i.value.name
          })), null, 16)) : i.value.type === D(Ye).Image ? (F(), Y(k, De(se({ key: 2 }, {
            src: i.value.src,
            text: i.value.name
          })), null, 16)) : ae("", !0)
        ])
      ]);
    };
  }
}), Du = { class: "lkt-file-entity-details" }, Mu = {
  key: 0,
  class: "lkt-grid-1"
}, Ou = /* @__PURE__ */ we({
  __name: "FileEntityDetails",
  props: {
    editMode: { type: Boolean, default: !1 },
    modelValue: {},
    fileBrowserConfig: {}
  },
  setup(e) {
    const n = K(e.modelValue);
    return (l, i) => {
      const s = pe("lkt-field");
      return F(), ce("div", Du, [
        n.value.type === D(Ye).Image ? (F(), ce("div", Mu, [
          ue(s, se({
            modelValue: n.value.src,
            "onUpdate:modelValue": i[0] || (i[0] = (u) => n.value.src = u)
          }, {
            type: D(Z).Image,
            label: "File",
            readMode: !e.editMode
          }), null, 16, ["modelValue"]),
          ue(s, se({
            modelValue: n.value.name,
            "onUpdate:modelValue": i[1] || (i[1] = (u) => n.value.name = u)
          }, {
            type: D(Z).Text,
            label: "Name",
            readMode: !e.editMode
          }), null, 16, ["modelValue"])
        ])) : ae("", !0)
      ]);
    };
  }
}), Hu = { class: "lkt-flex-row" }, Fu = { class: "lkt-flex-col-3" }, Uu = { class: "lkt-flex-column" }, Pu = { class: "lkt-flex-col-9" }, Wu = /* @__PURE__ */ we({
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
    const n = e, l = K(!1), i = K([]), s = K({}), u = K(void 0), f = K(n.modelValue), o = (d) => {
      u.value = void 0, Te(() => {
        u.value = d;
      });
    }, b = () => {
      var h, p, v;
      let d = new Ll();
      d.parent = (h = u.value) == null ? void 0 : h.id, (v = (p = u.value) == null ? void 0 : p.children) == null || v.push(d), o(d);
    }, c = (d, h) => {
      for (let p in h) {
        if (h[p].id === d) return h[p];
        if (h[p].children.length > 0) {
          let v = c(d, h[p].children);
          if (v) return v;
        }
      }
    }, g = () => {
      var d, h;
      if ((d = u.value) != null && d.parent) {
        let p = c((h = u.value) == null ? void 0 : h.parent, i.value);
        p && o(p);
      }
    }, k = () => {
      let d = [];
      f.value.forEach((h) => {
        let p = c(h, i.value);
        p && d.push(p);
      }), typeof n.onConfirmSelection == "function" && n.onConfirmSelection(d), Go(n.modalName, n.modalKey);
    }, S = X(() => {
      var d;
      switch ((d = u.value) == null ? void 0 : d.type) {
        case Ye.Image:
          return "lkt-icn-picture";
        case Ye.Directory:
          return "lkt-icn-folder-open";
        default:
          return "";
      }
    }), x = (d) => {
      switch (d.type) {
        case Ye.Image:
          return "lkt-icn-picture";
        case Ye.Directory:
          return "lkt-icn-folder";
        default:
          return "";
      }
    }, L = (d) => {
      let h = x(d), p = {};
      return h !== "" && (p = {
        icon: h,
        position: Zo.Start
      }), {
        key: String(d.id),
        type: jo.Anchor,
        anchor: {
          icon: p,
          text: d.name,
          type: _n.Action,
          events: {
            click: () => {
              o(d);
            }
          }
        },
        keepOpenOnChildClick: !0,
        // class?: string;
        // icon?: string;
        children: d.children ? d.children.map(L) : []
      };
    }, a = (d) => {
      d.forEach((h) => {
        var p;
        h.isPicked && f.value.push(h.id), ((p = h.children) == null ? void 0 : p.length) > 0 && a(h.children);
      });
    }, r = () => {
      var d, h;
      (h = (d = n.fileBrowserConfig) == null ? void 0 : d.http) != null && h.resource && (l.value = !0, sl(n.fileBrowserConfig.http.resource, n.fileBrowserConfig.http.data).then((p) => {
        l.value = !1, i.value = p.data.map((v) => new Ll(v)), i.value.length > 0 && o(i.value[0]), i.value.forEach((v, m) => {
          var _;
          let y = `unit-${m}`;
          s.value[y] = ((_ = v.children) == null ? void 0 : _.map(L)) ?? [];
        });
      }).catch((p) => {
        l.value = !1;
      }));
    };
    return ie(u, (d) => {
    }, { deep: !0 }), ie(i, (d) => {
      f.value = [], a(i.value);
    }, { deep: !0 }), at(() => {
      r();
    }), (d, h) => {
      const p = pe("lkt-menu"), v = pe("lkt-accordion"), m = pe("lkt-button"), y = pe("lkt-table"), _ = pe("lkt-item-crud"), C = pe("lkt-modal");
      return F(), Y(C, {
        "modal-name": e.modalName,
        "modal-key": e.modalKey,
        "z-index": e.zIndex,
        title: "File Browser",
        class: "lkt-file-browser"
      }, {
        default: be(() => [
          Ce("div", Hu, [
            Ce("div", Fu, [
              (F(!0), ce(He, null, St(i.value, (w, z) => (F(), Y(v, se({ ref_for: !0 }, {
                modelValue: z === 0,
                title: w.name,
                toggleMode: D($o).Display,
                type: i.value.length === 1 ? D(Qi).Always : D(Qi).Auto
              }), {
                default: be(() => [
                  Ce("div", Uu, [
                    ue(p, se({ ref_for: !0 }, {
                      modelValue: s.value[`unit-${z}`]
                    }), null, 16)
                  ])
                ]),
                _: 2
              }, 1040))), 256))
            ]),
            Ce("div", Pu, [
              u.value ? (F(), Y(v, De(se({ key: 0 }, {
                type: D(Qi).Always,
                icon: S.value,
                title: u.value.name
              })), {
                default: be(() => {
                  var w, z;
                  return [
                    [D(Ye).Directory, D(Ye).StorageUnit].includes(u.value.type) ? (F(), Y(y, se({
                      key: 0,
                      modelValue: u.value.children,
                      "onUpdate:modelValue": h[0] || (h[0] = (T) => u.value.children = T)
                    }, {
                      type: D(gt).Item,
                      perms: [
                        D(ui).SwitchEditMode,
                        D(ui).Update,
                        D(ui).Edit,
                        D(ui).Create
                      ],
                      itemsContainerClass: "lkt-flex-rows-12 lkt-flex-rows-2--from-768",
                      saveButton: {
                        text: "Save",
                        type: D(je).Button
                      },
                      createButton: {
                        text: "Create",
                        type: D(je).Button
                      }
                    }, { onClickCreate: b }), Vt({
                      item: be(({ item: T, index: B }) => [
                        ue(Vu, {
                          modelValue: u.value.children[B],
                          "onUpdate:modelValue": (N) => u.value.children[B] = N,
                          onDoubleClick: o
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, [
                      u.value.type !== D(Ye).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: be(() => [
                          ue(m, De(li({
                            icon: "lkt-icn-arrow-left",
                            events: {
                              click: g
                            }
                          })), null, 16),
                          ue(m, De(li({
                            icon: "lkt-icn-check",
                            disabled: f.value.length === 0,
                            events: {
                              click: k
                            }
                          })), null, 16)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : (F(), Y(_, se({
                      key: 1,
                      modelValue: u.value,
                      "onUpdate:modelValue": h[2] || (h[2] = (T) => u.value = T)
                    }, {
                      view: D(qo).Inline,
                      mode: u.value.id ? D(El).Update : D(El).Create,
                      editing: !1,
                      perms: ["switch-edit-mode", "update"],
                      createButton: {
                        ...(w = e.fileBrowserConfig) == null ? void 0 : w.entityCreateButton,
                        resourceData: u.value,
                        events: {
                          click: () => {
                            for (let T in u.value)
                              e.modelValue[T] = d.entity[T];
                          }
                        }
                      },
                      updateButton: {
                        ...(z = e.fileBrowserConfig) == null ? void 0 : z.entityUpdateButton,
                        resourceData: u.value,
                        events: {
                          click: () => {
                            for (let T in u.value)
                              e.modelValue[T] = d.entity[T];
                          }
                        }
                      }
                    }), Vt({
                      item: be(({ item: T, editMode: B }) => [
                        ue(Ou, {
                          modelValue: u.value,
                          "onUpdate:modelValue": h[1] || (h[1] = (N) => u.value = N),
                          "file-browser-config": e.fileBrowserConfig,
                          "edit-mode": B
                        }, null, 8, ["modelValue", "file-browser-config", "edit-mode"])
                      ]),
                      _: 2
                    }, [
                      u.value.type !== D(Ye).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: be(() => [
                          ue(m, De(li({
                            icon: "lkt-icn-arrow-left",
                            events: {
                              click: g
                            }
                          })), null, 16)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"]))
                  ];
                }),
                _: 1
              }, 16)) : ae("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modal-name", "modal-key", "z-index"]);
    };
  }
}), Qu = (e, t) => (ee.customValueSlots[e] = t, !0), ec = (e, t) => (ee.customEditSlots[e] = t, !0), tc = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", Mt), Ko("lkt-file-browser", Wu));
  }
}, ic = (e) => {
  ee.defaultEmptyValueSlot = e;
}, lc = (e, t) => {
  ee.optionSlots[e] = t;
}, nc = (e) => ee.undoText = e, oc = (e) => ee.clearText = e, ac = (e) => ee.i18nText = e, sc = (e) => ee.switchEditionOnText = e, rc = (e) => ee.switchEditionOffText = e, uc = (e) => ee.showPasswordOnText = e, cc = (e) => ee.showPasswordOffText = e, dc = (e) => ee.dateReadFormat = e, fc = (e) => ee.defaultDateReadFormat = e, hc = (e, t, n = "default") => {
  n || (n = "default"), ee.validationMessages[n] || (ee.validationMessages[n] = {}), ee.validationMessages[n][e] = t;
}, pc = (e) => (ee.validationIconSlot = e, !0), mc = (e) => (ee.validationIconOk = e, !0), gc = (e) => (ee.validationIconKo = e, !0), vc = (e) => (ee.validationIconInfo = e, !0), bc = (e = 2, t = ".", n = ".", l = !0, i = "") => i !== "" ? (ee.langNumberFormat[i].amountOfDecimals = e, ee.langNumberFormat[i].decimalSeparator = t, ee.langNumberFormat[i].thousandsSeparator = n, ee.langNumberFormat[i].removeDecimalsIfZero = l, !0) : (ee.amountOfDecimals = e, ee.decimalSeparator = t, ee.thousandsSeparator = n, ee.removeDecimalsIfZero = l, !0), yc = (e) => {
  ee.readTextMaxLength = e;
}, Cc = (e, t) => {
  ee.modalPerItemType[e] = t;
};
export {
  kc as Field,
  Mt as LktField,
  xc as Option,
  tc as default,
  oc as setFieldClearText,
  dc as setFieldDateReadFormat,
  fc as setFieldDefaultDateReadFormat,
  ic as setFieldEmptySlot,
  ac as setFieldI18nText,
  bc as setFieldNumberFormat,
  lc as setFieldOptionSlot,
  cc as setFieldShowPasswordOffText,
  uc as setFieldShowPasswordOnText,
  rc as setFieldSwitchEditionOffText,
  sc as setFieldSwitchEditionOnText,
  nc as setFieldUndoText,
  vc as setFieldValidationIconInfo,
  gc as setFieldValidationIconKo,
  mc as setFieldValidationIconOk,
  pc as setFieldValidationIconSlot,
  hc as setFieldValidationMessage,
  Cc as setModalPerItemType,
  yc as setReadTextMaxLength,
  ec as setTextEditSlot,
  Qu as setTextValueSlot
};
