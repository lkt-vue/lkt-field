import { defineComponent as Ce, computed as J, resolveComponent as he, createBlock as Y, openBlock as H, mergeProps as fe, normalizeClass as Ye, ref as K, watch as ie, withCtx as ye, createCommentVNode as se, unref as V, createElementVNode as be, createVNode as re, createElementBlock as ce, Fragment as Oe, renderList as dt, toDisplayString as yt, normalizeStyle as gl, withDirectives as Ve, vModelCheckbox as yo, onMounted as ft, normalizeProps as Ie, resolveDynamicComponent as ct, withModifiers as _o, nextTick as Ee, vModelText as Bt, markRaw as li, vShow as nt, createTextVNode as ji, useSlots as Ji, renderSlot as Qe, guardReactiveProps as ut, createStaticVNode as Co, createSlots as Lt, mergeDefaults as wo, isRef as $e, vModelDynamic as vl } from "vue";
import { stripTags as Gi, fill as ko, lpad as Tt, generateRandomString as So, formatNumber as bl, trim as xo, isEmail as To } from "lkt-string-tools";
import { httpCall as Qi } from "lkt-http-client";
import { getCurrentLanguage as Eo, getAvailableLanguages as Lo, __ as fn, currentLanguage as Bo } from "lkt-i18n";
import { TooltipLocationY as It, TooltipLocationX as Dt, ButtonType as je, FieldType as j, LktColor as pn, FieldValidation as Re, ValidationStatus as Te, extractPropValue as Ze, LktSettings as st, AnchorType as hn, TagType as zo, MultipleOptionsDisplay as Et, TableType as zt, booleanFieldTypes as at, fieldsWithMultipleMode as No, FieldValidationType as Ro, extractI18nValue as ii, fieldTypesWithoutUndo as Ao, fieldTypesWithoutClear as Io, ValidationCode as lt, textFieldTypes as Do, FieldAutoValidationTrigger as Mo, FieldReportType as yl, getDefaultValues as Vo, Field as Oo, ToastPositionX as _l, FileEntityType as qe, AccordionType as Zi, AccordionToggleMode as Ho, TablePermission as ri, ItemCrudMode as Cl, ItemCrudView as Fo, FileEntity as wl, IconPosition as Uo, MenuEntryType as Po } from "lkt-vue-kernel";
import { Field as Cd, Option as wd } from "lkt-vue-kernel";
import { date as bt } from "lkt-date-tools";
import { DataState as rt } from "lkt-data-state";
import { openToast as kl } from "lkt-toast";
import { closeModal as Wo, addModal as $o } from "lkt-modal";
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
const mn = /* @__PURE__ */ Ce({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const n = t, l = e, i = J(() => ee.undoText), s = J(() => l.insideEllipsis ? "lkt-field--btn-undo lkt-field--info-split-btn" : "lkt-field--btn-undo lkt-field--info-btn"), u = () => n("click");
    return (f, o) => {
      const g = he("lkt-button");
      return H(), Y(g, fe({
        text: f.insideEllipsis ? i.value : "",
        icon: "lkt-icn-undo",
        class: s.value
      }, {
        title: i.value,
        onClick: u
      }), null, 16, ["title"]);
    };
  }
}), gn = /* @__PURE__ */ Ce({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const n = t, l = e, i = J(() => ee.clearText), s = J(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), u = () => n("click");
    return (f, o) => {
      const g = he("lkt-button");
      return H(), Y(g, {
        text: f.insideEllipsis ? i.value : "",
        title: i.value,
        class: Ye(s.value),
        icon: "lkt-icn-cancel",
        onClick: u
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Ki = /* @__PURE__ */ Ce({
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
    ie(() => l.modelValue, (g) => i.value = g), ie(i, (g) => n("update:modelValue", g));
    const s = J(() => i.value ? ee.showPasswordOnText : ee.showPasswordOffText), u = J(() => i.value === !0 ? "lkt-icn-see" : "lkt-icn-not-see"), f = J(() => l.isFeatured ? "lkt-field--atn-btn" : l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => n("click");
    return (g, d) => {
      const v = he("lkt-button");
      return H(), Y(v, {
        text: g.insideEllipsis ? s.value : "",
        title: s.value,
        class: Ye(f.value),
        icon: u.value,
        onClick: o,
        checked: i.value,
        "onUpdate:checked": d[0] || (d[0] = (T) => i.value = T),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), vn = /* @__PURE__ */ Ce({
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
    ie(() => l.modelValue, (g) => i.value = g), ie(i, (g) => n("update:modelValue", g));
    const s = J(() => i.value ? ee.switchEditionOnText : ee.switchEditionOffText), u = J(() => i.value === !0 ? "lkt-icon-see" : "lkt-icn-edit"), f = J(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => n("click");
    return (g, d) => {
      const v = he("lkt-button");
      return H(), Y(v, {
        text: g.insideEllipsis ? s.value : "",
        title: s.value,
        class: Ye(f.value),
        icon: u.value,
        onClick: o,
        checked: i.value,
        "onUpdate:checked": d[0] || (d[0] = (T) => i.value = T),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Zo = /* @__PURE__ */ Ce({
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
      const o = he("lkt-button");
      return H(), Y(o, {
        split: "",
        "split-icon": "lkt-icn-ellipsis-menu-vertical",
        class: "lkt-field--info-btn"
      }, {
        split: ye(({ doClose: g }) => [
          u.showUndo ? (H(), Y(mn, {
            key: 0,
            onClick: f[0] || (f[0] = () => n("undo")),
            "inside-ellipsis": ""
          })) : se("", !0),
          u.showClear ? (H(), Y(gn, {
            key: 1,
            onClick: f[1] || (f[1] = () => n("clear")),
            "inside-ellipsis": ""
          })) : se("", !0),
          u.showPassword ? (H(), Y(Ki, {
            key: 2,
            modelValue: i.value,
            "onUpdate:modelValue": f[2] || (f[2] = (d) => i.value = d),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : se("", !0),
          u.showEdition ? (H(), Y(vn, {
            key: 3,
            modelValue: s.value,
            "onUpdate:modelValue": f[3] || (f[3] = (d) => s.value = d),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : se("", !0)
        ]),
        _: 1
      });
    };
  }
}), qo = { class: "lkt-grid-1" }, Sl = /* @__PURE__ */ Ce({
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
    const n = e, l = Eo(), i = Lo(), s = J(() => ee.i18nText), u = J(() => n.isFeatured ? "lkt-field--atn-btn" : n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (f, o) => {
      const g = he("lkt-button");
      return V(i).length > 1 ? (H(), Y(g, fe({ key: 0 }, {
        type: V(je).Tooltip,
        text: f.insideEllipsis ? s.value : "",
        class: u.value,
        icon: "lkt-icn-lang-picker",
        tooltip: {
          class: "lkt-field-i18n-tooltip",
          referrerWidth: !0,
          referrer: f.referrer,
          referrerMargin: 0,
          locationX: V(Dt).LeftCorner,
          locationY: V(It).Bottom
        }
      }, { title: s.value }), {
        tooltip: ye(() => [
          be("div", qo, [
            re(At, fe({
              modelValue: f.translations[V(l)],
              "onUpdate:modelValue": o[0] || (o[0] = (d) => f.translations[V(l)] = d)
            }, {
              type: f.type,
              label: `Current lang ${V(l)}`,
              canClear: !0,
              canUndo: !0
            }), null, 16, ["modelValue"]),
            (H(!0), ce(Oe, null, dt(V(i), (d) => (H(), ce(Oe, { key: d }, [
              d !== V(l) ? (H(), Y(At, fe({
                key: 0,
                modelValue: f.translations[d],
                "onUpdate:modelValue": (v) => f.translations[d] = v
              }, { ref_for: !0 }, {
                type: f.type,
                label: `Language ${d}`,
                canClear: !0,
                canUndo: !0
              }), null, 16, ["modelValue", "onUpdate:modelValue"])) : se("", !0)
            ], 64))), 128))
          ])
        ]),
        _: 1
      }, 16, ["title"])) : se("", !0);
    };
  }
}), jo = (e, t, n) => (e = Number(e), t !== !1 && e < t && (e = t), n !== !1 && e > n && (e = n), e), el = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), bn = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), el(e) ? bt(t, e) : ""), Go = /* @__PURE__ */ Ce({
  __name: "DropdownButton",
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const n = t, l = J(() => ee.undoText), i = J(() => "lkt-field--info-btn"), s = () => n("click");
    return (u, f) => {
      const o = he("lkt-button");
      return H(), Y(o, {
        text: l.value,
        title: l.value,
        class: Ye([i.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-icn-angle-bottom",
        onClick: s,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Ko = { class: "lkt-field-color--tooltip--rgba-container" }, Yo = { class: "lkt-field-color--tooltip--numeric-input-container" }, Xo = { class: "like-lkt-field-label" }, ui = /* @__PURE__ */ Ce({
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
    return ie(() => l.modelValue, (s) => i.value = s), ie(i, (s) => n("update:modelValue", s)), (s, u) => (H(), ce("div", Ko, [
      be("div", Yo, [
        be("label", Xo, yt(s.label), 1),
        re(At, fe({
          modelValue: i.value,
          "onUpdate:modelValue": u[0] || (u[0] = (f) => i.value = f)
        }, {
          type: V(j).Number,
          min: 0,
          max: 255,
          step: 1,
          canStep: !1
        }), null, 16, ["modelValue"])
      ]),
      re(At, fe({
        class: ["color-range", s.rangeClass],
        modelValue: i.value,
        "onUpdate:modelValue": u[1] || (u[1] = (f) => i.value = f)
      }, {
        type: V(j).Range,
        min: 0,
        max: 255,
        step: 1
      }), null, 16, ["class", "modelValue"])
    ]));
  }
}), Jo = (e, t, n, l) => new pn({ r: e, g: t, b: n, a: l }).toString(), xl = (e) => pn.fromHexColor(e), Qo = (e) => e.getContrastFontColor(), ea = { class: "lkt-grid-1" }, ta = { class: "lkt-field-color--tooltip--rgba-container" }, ia = { class: "lkt-field-color--tooltip--hex-input-container" }, yn = /* @__PURE__ */ Ce({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, { emit: t }) {
    const n = t, l = e, i = (z) => {
      if ([0, 1].includes(z.length))
        f.value = 0, o.value = 0, g.value = 0, d.value = 255;
      else if ([7, 9].includes(z.length)) {
        let a = xl(z);
        f.value = a.r, o.value = a.g, g.value = a.b, d.value = a.a;
      }
    }, s = () => {
      v.value = Jo(
        f.value,
        o.value,
        g.value,
        d.value
      );
    }, u = () => {
      i(v.value), n("change");
    }, f = K(255), o = K(255), g = K(255), d = K(255), v = K(l.modelValue);
    i(v.value), ie([f, o, g, d], s), ie(() => l.modelValue, (z) => v.value = z), ie(v, (z) => n("update:modelValue", z));
    const T = J(() => Qo(xl(v.value))), S = J(() => v.value === "" || v.value === "#" ? {} : {
      background: v.value,
      "--lkt-btn-bg": v.value,
      color: T.value,
      "--lkt-btn-color": T.value
    }), x = J(() => v.value === "" || v.value === "#" ? {} : {
      "--lkt-field-bg-input": v.value,
      "--lkt-field-color": T.value
    });
    return (z, a) => {
      const r = he("lkt-button");
      return H(), Y(r, {
        class: "lkt-field--toggle-button",
        style: gl(S.value),
        text: v.value,
        type: V(je).Tooltip,
        tooltip: {
          class: "lkt-field-color--tooltip",
          locationY: V(It).Bottom,
          locationX: V(Dt).LeftCorner
        }
      }, {
        tooltip: ye(({ doClose: c }) => [
          be("div", ea, [
            be("div", ta, [
              be("div", ia, [
                a[5] || (a[5] = be("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                re(At, {
                  modelValue: v.value,
                  "onUpdate:modelValue": a[0] || (a[0] = (p) => v.value = p),
                  style: gl(x.value),
                  onChange: u
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            re(ui, {
              modelValue: f.value,
              "onUpdate:modelValue": a[1] || (a[1] = (p) => f.value = p),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            re(ui, {
              modelValue: o.value,
              "onUpdate:modelValue": a[2] || (a[2] = (p) => o.value = p),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            re(ui, {
              modelValue: g.value,
              "onUpdate:modelValue": a[3] || (a[3] = (p) => g.value = p),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            re(ui, {
              modelValue: d.value,
              "onUpdate:modelValue": a[4] || (a[4] = (p) => d.value = p),
              label: "A",
              "range-class": "color-range--alpha"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["style", "text", "type", "tooltip"]);
    };
  }
}), la = /* @__PURE__ */ Ce({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, n = K(t.modelValue), l = J(() => typeof t.max == "boolean" || n.value.length < t.max ? ["inline-create"] : []);
    return (i, s) => {
      const u = he("lkt-table");
      return H(), Y(u, {
        type: "item",
        modelValue: n.value,
        "onUpdate:modelValue": s[0] || (s[0] = (f) => n.value = f),
        perms: l.value,
        "edit-mode": i.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: ye(({ item: f, index: o, isLoading: g, canCreate: d, canRead: v, canUpdate: T, canDrop: S, doDrop: x }) => [
          re(yn, {
            modelValue: n.value[o],
            "onUpdate:modelValue": (z) => n.value[o] = z
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
}), na = (e, t, n, l) => {
  if (typeof n < "u") {
    let i = parseInt(n);
    t.replace(/\D+/g, "").length < i && e.push(Re.createMinNumbers(i, Te.Ko));
  }
  if (typeof l < "u") {
    let i = parseInt(l);
    t.replace(/\D+/g, "").length > i && e.push(Re.createMaxNumbers(i, Te.Ko));
  }
}, oa = (e, t, n, l) => {
  if (typeof n < "u") {
    let i = parseInt(n);
    t.replace(/[^A-Z]+/g, "").length < i && e.push(Re.createMinUpperChars(i, Te.Ko));
  }
  if (typeof l < "u") {
    let i = parseInt(l);
    t.replace(/[^A-Z]+/g, "").length > i && e.push(Re.createMaxUpperChars(i, Te.Ko));
  }
}, aa = (e, t, n, l) => {
  if (typeof n < "u") {
    let i = parseInt(n);
    t.replace(/[A-Z]+/g, "").length < i && e.push(Re.createMinLowerChars(i, Te.Ko));
  }
  if (typeof l < "u") {
    let i = parseInt(l);
    t.replace(/[A-Z]+/g, "").length > i && e.push(Re.createMaxLowerChars(i, Te.Ko));
  }
}, sa = (e, t, n, l) => {
  if (typeof n < "u") {
    let i = parseInt(n);
    t.replace(/\d+/g, "").length < i && e.push(Re.createMinChars(i, Te.Ko));
  }
  if (typeof l < "u") {
    let i = parseInt(l);
    t.replace(/\d+/g, "").length > i && e.push(Re.createMaxChars(i, Te.Ko));
  }
}, ra = (e, t, n, l) => {
  if (typeof n < "u") {
    let i = parseInt(n);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < i && e.push(Re.createMinSpecialChars(i, Te.Ko));
  }
  if (typeof l < "u") {
    let i = parseInt(l);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > i && e.push(Re.createMaxSpecialChars(i, Te.Ko));
  }
}, Tl = (e, t = "default") => {
  if (!e) return "";
  let n = ee.validationMessages[t] && ee.validationMessages[t][e] ? ee.validationMessages[t][e] : "";
  return n || (n = ""), n;
}, ua = { class: "boolean-input" }, da = ["innerHTML"], ca = ["name", "id", "disabled", "readonly", "value", "checked"], fa = /* @__PURE__ */ Ce({
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
    const n = t, l = e, i = K(null), s = K(l.modelValue), u = K(s.value ? "true" : "false"), f = K(l.focusing), o = (d) => {
      f.value = !0, n("focus", d);
    }, g = (d) => {
      f.value = !1, n("blur", d);
    };
    return ie(() => l.modelValue, (d) => s.value = d), ie(s, (d) => n("update:modelValue", d)), (d, v) => (H(), ce("div", ua, [
      v[1] || (v[1] = be("div", { class: "boolean-input-label" }, [
        be("div", { class: "boolean-input--check-on" })
      ], -1)),
      d.label ? (H(), ce("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: d.label
      }, null, 8, da)) : se("", !0),
      Ve(be("input", {
        "onUpdate:modelValue": v[0] || (v[0] = (T) => s.value = T),
        type: "checkbox",
        ref_key: "input",
        ref: i,
        name: d.name,
        id: d.id,
        disabled: !d.editable || d.disabled,
        readonly: !d.editable || d.readonly,
        value: u.value,
        checked: s.value,
        onFocus: o,
        onBlur: g
      }, null, 40, ca), [
        [yo, s.value]
      ])
    ]));
  }
});
function ke(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var di = { exports: {} }, pa = di.exports, El;
function ha() {
  return El || (El = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : pa, function(t, n) {
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
var ma = /* @__PURE__ */ ha();
const _n = /* @__PURE__ */ ke(ma);
var ci = { exports: {} }, ga = ci.exports, Ll;
function va() {
  return Ll || (Ll = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ga, function(t, n) {
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
  })(ci)), ci.exports;
}
var ba = /* @__PURE__ */ va();
const Cn = /* @__PURE__ */ ke(ba);
var fi = { exports: {} }, ya = fi.exports, Bl;
function _a() {
  return Bl || (Bl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ya, function(t, n) {
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
  })(fi)), fi.exports;
}
var Ca = /* @__PURE__ */ _a();
const wn = /* @__PURE__ */ ke(Ca);
var pi = { exports: {} }, wa = pi.exports, zl;
function ka() {
  return zl || (zl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : wa, function(t, n) {
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
var Sa = /* @__PURE__ */ ka();
const kn = /* @__PURE__ */ ke(Sa);
var hi = { exports: {} }, xa = hi.exports, Nl;
function Ta() {
  return Nl || (Nl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : xa, function(t, n) {
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
  })(hi)), hi.exports;
}
var Ea = /* @__PURE__ */ Ta();
const Ui = /* @__PURE__ */ ke(Ea);
var mi = { exports: {} }, La = mi.exports, Rl;
function Ba() {
  return Rl || (Rl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : La, function(t, n) {
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
  })(mi)), mi.exports;
}
var za = /* @__PURE__ */ Ba();
const Sn = /* @__PURE__ */ ke(za);
var gi = { exports: {} }, Na = gi.exports, Al;
function Ra() {
  return Al || (Al = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Na, function(t, n) {
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
  })(gi)), gi.exports;
}
var Aa = /* @__PURE__ */ Ra();
const xn = /* @__PURE__ */ ke(Aa);
var vi = { exports: {} }, Ia = vi.exports, Il;
function Da() {
  return Il || (Il = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Ia, function(t, n) {
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
  })(vi)), vi.exports;
}
var Ma = /* @__PURE__ */ Da();
const Tn = /* @__PURE__ */ ke(Ma);
var bi = { exports: {} }, Va = bi.exports, Dl;
function Oa() {
  return Dl || (Dl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Va, function(t, n) {
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
  })(bi)), bi.exports;
}
var Ha = /* @__PURE__ */ Oa();
const En = /* @__PURE__ */ ke(Ha);
var yi = { exports: {} }, Fa = yi.exports, Ml;
function Ua() {
  return Ml || (Ml = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Fa, function(t, n) {
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
  })(yi)), yi.exports;
}
var Pa = /* @__PURE__ */ Ua();
const Ln = /* @__PURE__ */ ke(Pa);
var _i = { exports: {} }, Wa = _i.exports, Vl;
function $a() {
  return Vl || (Vl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG una finestra con un documento");
        return n(l);
      };
    })(typeof window < "u" ? window : Wa, function(t, n) {
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
var Za = /* @__PURE__ */ $a();
const Bn = /* @__PURE__ */ ke(Za);
var Ci = { exports: {} }, qa = Ci.exports, Ol;
function ja() {
  return Ol || (Ol = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : qa, function(t, n) {
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
  })(Ci)), Ci.exports;
}
var Ga = /* @__PURE__ */ ja();
const zn = /* @__PURE__ */ ke(Ga);
var wi = { exports: {} }, Ka = wi.exports, Hl;
function Ya() {
  return Hl || (Hl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Ka, function(t, n) {
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
  })(wi)), wi.exports;
}
var Xa = /* @__PURE__ */ Ya();
const Nn = /* @__PURE__ */ ke(Xa);
var ki = { exports: {} }, Ja = ki.exports, Fl;
function Qa() {
  return Fl || (Fl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Ja, function(t, n) {
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
  })(ki)), ki.exports;
}
var es = /* @__PURE__ */ Qa();
const Rn = /* @__PURE__ */ ke(es);
var Si = { exports: {} }, ts = Si.exports, Ul;
function is() {
  return Ul || (Ul = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ts, function(t, n) {
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
var ls = /* @__PURE__ */ is();
const An = /* @__PURE__ */ ke(ls);
var xi = { exports: {} }, ns = xi.exports, Pl;
function os() {
  return Pl || (Pl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ns, function(t, n) {
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
  })(xi)), xi.exports;
}
var as = /* @__PURE__ */ os();
const In = /* @__PURE__ */ ke(as);
var Ti = { exports: {} }, ss = Ti.exports, Wl;
function rs() {
  return Wl || (Wl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ss, function(t, n) {
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
  })(Ti)), Ti.exports;
}
var us = /* @__PURE__ */ rs();
const Dn = /* @__PURE__ */ ke(us);
var Ei = { exports: {} }, ds = Ei.exports, $l;
function cs() {
  return $l || ($l = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ds, function(t, n) {
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
  })(Ei)), Ei.exports;
}
var fs = /* @__PURE__ */ cs();
const Mn = /* @__PURE__ */ ke(fs);
var Li = { exports: {} }, ps = Li.exports, Zl;
function hs() {
  return Zl || (Zl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ps, function(t, n) {
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
  })(Li)), Li.exports;
}
var ms = /* @__PURE__ */ hs();
const Vn = /* @__PURE__ */ ke(ms);
var Bi = { exports: {} }, gs = Bi.exports, ql;
function vs() {
  return ql || (ql = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : gs, function(t, n) {
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
  })(Bi)), Bi.exports;
}
var bs = /* @__PURE__ */ vs();
const On = /* @__PURE__ */ ke(bs);
var zi = { exports: {} }, ys = zi.exports, jl;
function _s() {
  return jl || (jl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ys, function(t, n) {
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
  })(zi)), zi.exports;
}
var Cs = /* @__PURE__ */ _s();
const Hn = /* @__PURE__ */ ke(Cs);
var Ni = { exports: {} }, ws = Ni.exports, Gl;
function ks() {
  return Gl || (Gl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ws, function(t, n) {
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
  })(Ni)), Ni.exports;
}
var Ss = /* @__PURE__ */ ks();
const Fn = /* @__PURE__ */ ke(Ss);
var Ri = { exports: {} }, xs = Ri.exports, Kl;
function Ts() {
  return Kl || (Kl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : xs, function(t, n) {
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
  })(Ri)), Ri.exports;
}
var Es = /* @__PURE__ */ Ts();
const Un = /* @__PURE__ */ ke(Es);
var Ai = { exports: {} }, Ls = Ai.exports, Yl;
function Bs() {
  return Yl || (Yl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Ls, function(t, n) {
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
  })(Ai)), Ai.exports;
}
var zs = /* @__PURE__ */ Bs();
const Pn = /* @__PURE__ */ ke(zs);
var Ii = { exports: {} }, Ns = Ii.exports, Xl;
function Rs() {
  return Xl || (Xl = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Ns, function(t, n) {
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
  })(Ii)), Ii.exports;
}
var As = /* @__PURE__ */ Rs();
const Wn = /* @__PURE__ */ ke(As), Is = { ckb: _n, cs: Cn, da: wn, de: kn, en: Ui, es: Sn, fa: xn, fr: Tn, he: En, hu: Ln, it: Bn, ja: zn, ko: Nn, km: Rn, lv: An, nl: In, pl: Dn, pt_br: Mn, ro: Vn, ru: On, se: Hn, tr: Fn, ua: Un, ur: Pn, zh_cn: Wn }, Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: _n,
  cs: Cn,
  da: wn,
  de: kn,
  default: Is,
  en: Ui,
  es: Sn,
  fa: xn,
  fr: Tn,
  he: En,
  hu: Ln,
  it: Bn,
  ja: zn,
  km: Rn,
  ko: Nn,
  lv: An,
  nl: In,
  pl: Dn,
  pt_br: Mn,
  ro: Vn,
  ru: On,
  se: Hn,
  tr: Fn,
  ua: Un,
  ur: Pn,
  zh_cn: Wn
}, Symbol.toStringTag, { value: "Module" })), Ds = {
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
}, Ms = {
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
}, Vs = {
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
}, Os = {
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
    for (let u = 0, f = t.fontSizeUnit, o = i.length, g; u < o; u++)
      g = i[u], s += '<li><button type="button" class="se-btn-list" data-value="' + g + f + '" title="' + g + f + '" aria-label="' + g + f + '" style="font-size:' + g + f + ';">' + g + "</button></li>";
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
}, $n = {
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
    for (let f = 0, o = i.length, g; f < o; f++)
      g = i[f], g && (typeof g == "string" && (s.push(g), f < o - 1) || (s.length > 0 && (u += '<div class="se-selector-color">' + t(s) + "</div>", s = []), typeof g == "object" && (u += '<div class="se-selector-color">' + t(g) + "</div>")));
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
}, Hs = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([$n]);
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
}, Fs = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([$n]);
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
}, Us = {
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
}, Ps = {
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
    let u = i[0], f = i[i.length - 1], o = (s.isListCell(u) || s.isComponent(u)) && !u.previousElementSibling ? u.parentNode.previousElementSibling : u.previousElementSibling, g = (s.isListCell(f) || s.isComponent(f)) && !f.nextElementSibling ? f.parentNode.nextElementSibling : f.nextElementSibling;
    const d = l.collapsed, v = {
      sc: l.startContainer,
      so: l.startContainer === l.endContainer && s.onlyZeroWidthSpace(l.startContainer) && l.startOffset === 0 && l.endOffset === 1 ? l.endOffset : l.startOffset,
      ec: l.endContainer,
      eo: l.endOffset
    };
    let T = null, S = !0;
    for (let x = 0, z = i.length; x < z; x++)
      if (!s.isList(s.getRangeFormatElement(i[x], (function(a) {
        return this.getRangeFormatElement(a) && a !== i[x];
      }).bind(s)))) {
        S = !1;
        break;
      }
    if (S && (!o || u.tagName !== o.tagName || e !== o.tagName.toUpperCase()) && (!g || f.tagName !== g.tagName || e !== g.tagName.toUpperCase())) {
      if (n) {
        for (let p = 0, h = i.length; p < h; p++)
          for (let b = p - 1; b >= 0; b--)
            if (i[b].contains(i[p])) {
              i.splice(p, 1), p--, h--;
              break;
            }
      }
      const x = s.getRangeFormatElement(u), z = x && x.tagName === e;
      let a, r;
      const c = (function(p) {
        return !this.isComponent(p);
      }).bind(s);
      z || (r = s.createElement(e));
      for (let p = 0, h = i.length, b, m; p < h; p++)
        m = s.getRangeFormatElement(i[p], c), !(!m || !s.isList(m)) && (b ? b !== m ? (n && s.isListCell(m.parentNode) ? this.plugins.list._detachNested.call(this, a.f) : T = this.detachRangeFormatElement(a.f[0].parentNode, a.f, r, !1, !0), m = i[p].parentNode, z || (r = s.createElement(e)), b = m, a = { r: b, f: [s.getParentElement(i[p], "LI")] }) : a.f.push(s.getParentElement(i[p], "LI")) : (b = m, a = { r: b, f: [s.getParentElement(i[p], "LI")] }), p === h - 1 && (n && s.isListCell(m.parentNode) ? this.plugins.list._detachNested.call(this, a.f) : T = this.detachRangeFormatElement(a.f[0].parentNode, a.f, r, !1, !0)));
    } else {
      const x = o && o.parentNode, z = g && g.parentNode;
      o = x && !s.isWysiwygDiv(x) && x.nodeName === e ? x : o, g = z && !s.isWysiwygDiv(z) && z.nodeName === e ? z : g;
      const a = o && o.tagName === e, r = g && g.tagName === e;
      let c = a ? o : s.createElement(e), p = null, h = null, b = null;
      const m = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(s);
      for (let y = 0, w = i.length, _, C, N, E, B, R, W, $, P; y < w; y++) {
        if (C = i[y], C.childNodes.length === 0 && !s._isIgnoreNodeChange(C)) {
          s.removeItem(C);
          continue;
        }
        if (E = i[y + 1], B = C.parentNode, R = E ? E.parentNode : null, N = s.isListCell(C), P = s.isRangeFormatElement(B) ? B : null, W = N && !s.isWysiwygDiv(B) ? B.parentNode : B, $ = N && !s.isWysiwygDiv(B) ? !E || s.isListCell(W) ? B : B.nextSibling : C.nextSibling, _ = s.createElement("LI"), s.copyFormatAttributes(_, C), y === 0 && v.sc === C && (v.sc = _), y === w - 1 && v.ec === C && (v.ec = _), s.isComponent(C)) {
          const O = /^HR$/i.test(C.nodeName);
          O || (_.innerHTML = "<br>"), _.innerHTML += C.outerHTML, O && (_.innerHTML += "<br>");
        } else {
          const O = C.childNodes;
          for (; O[0]; )
            _.appendChild(O[0]);
        }
        c.appendChild(_), (!E || W !== R || s.isRangeFormatElement($)) && (p || (p = c), (!a || !E || W !== R) && !(E && s.isList(R) && R === B) && c.parentNode !== W && W.insertBefore(c, $)), s.removeItem(C), a && h === null && (h = c.children.length - 1), E && (s.getRangeFormatElement(R, m) !== s.getRangeFormatElement(B, m) || s.isList(R) && s.isList(B) && s.getElementDepth(R) !== s.getElementDepth(B)) && (c = s.createElement(e)), P && P.children.length === 0 && s.removeItem(P);
      }
      h && (p = p.children[h]), r && (b = c.children.length - 1, c.innerHTML += g.innerHTML, c.children[b], s.removeItem(g));
    }
    return this.effectNode = null, d && T || v;
  },
  _detachNested: function(e) {
    const t = e[0], n = e[e.length - 1], l = n.nextElementSibling, i = t.parentNode, s = i.parentNode.nextElementSibling, u = i.parentNode.parentNode;
    for (let o = 0, g = e.length; o < g; o++)
      u.insertBefore(e[o], s);
    if (l && i.children.length > 0) {
      const o = i.cloneNode(!1), g = i.childNodes, d = this.util.getPositionIndex(l);
      for (; g[d]; )
        o.appendChild(g[d]);
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
      const g = { s: null, e: null, sl: l, el: l };
      for (let T = 0, S = n, x; T < S; T++)
        x = t[T], x.parentNode !== l && (this.plugins.list._insiedList.call(this, l, u, f, o, g), l = x.parentNode, u = this.util.createElement(l.nodeName)), f = x.previousElementSibling, o = x.nextElementSibling, u.appendChild(x);
      this.plugins.list._insiedList.call(this, l, u, f, o, g);
      const d = this.util.getNodeFromPath(g.s, g.sl), v = this.util.getNodeFromPath(g.e, g.el);
      s = {
        sc: d,
        so: 0,
        ec: v,
        eo: v.textContent.length
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
}, Ws = {
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
      for (let d = 0, v = i[0].cells, T = i[0].cells.length; d < T; d++)
        u += v[d].colSpan;
      const f = n._rowIndex = n._trElement.rowIndex;
      n._rowCnt = i.length, n._physical_cellCnt = n._trElement.cells.length, n._logical_cellCnt = u, n._physical_cellIndex = s, n._current_colSpan = n._tdElement.colSpan - 1, n._current_rowSpan - n._trElement.cells[s].rowSpan - 1;
      let o = [], g = [];
      for (let d = 0, v, T; d <= f; d++) {
        v = i[d].cells, T = 0;
        for (let S = 0, x = v.length, z, a, r, c; S < x; S++) {
          if (z = v[S], a = z.colSpan - 1, r = z.rowSpan - 1, c = S + T, g.length > 0)
            for (let p = 0, h; p < g.length; p++)
              h = g[p], !(h.row > d) && (c >= h.index ? (T += h.cs, c += h.cs, h.rs -= 1, h.row = d + 1, h.rs < 1 && (g.splice(p, 1), p--)) : S === x - 1 && (h.rs -= 1, h.row = d + 1, h.rs < 1 && (g.splice(p, 1), p--)));
          if (d === f && S === s) {
            n._logical_cellIndex = c;
            break;
          }
          r > 0 && o.push({
            index: c,
            cs: a + 1,
            rs: r,
            row: -1
          }), T += a;
        }
        g = g.concat(o).sort(function(S, x) {
          return S.index - x.index;
        }), o = [];
      }
      o = null, g = null;
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
          const g = [f[0]];
          for (let d = 1, v = f.length, T; d < v; d++)
            T = f[d], o !== T.parentNode && (g.push(T), o = T.parentNode);
          for (let d = 0, v = g.length; d < v; d++)
            n.setCellInfo.call(this, g[d], !0), n.editRow.call(this, t);
        }
      else {
        const o = f[0].parentNode;
        if (t) {
          let g = null;
          for (let d = 0, v = f.length - 1; d < v; d++)
            if (o !== f[d + 1].parentNode) {
              g = f[d];
              break;
            }
          n.setCellInfo.call(this, t === "left" ? f[0] : g || f[0], !0), n.editCell.call(this, t, u);
        } else {
          const g = [f[0]];
          for (let d = 1, v = f.length, T; d < v && (T = f[d], o === T.parentNode); d++)
            g.push(T);
          for (let d = 0, v = g.length; d < v; d++)
            n.setCellInfo.call(this, g[d], !0), n.editCell.call(this, t);
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
    let g = n._logical_cellCnt;
    for (let d = 0, v = s + (l ? -1 : 0), T; d <= v; d++) {
      if (T = o[d].cells, T.length === 0) return;
      for (let S = 0, x = T.length, z, a; S < x; S++)
        z = T[S].rowSpan, a = T[S].colSpan, !(z < 2 && a < 2) && z + d > u && u > d && (T[S].rowSpan = z + f, g -= a);
    }
    if (l) {
      const d = o[s + 1];
      if (d) {
        const v = [];
        let T = o[s].cells, S = 0;
        for (let x = 0, z = T.length, a, r; x < z; x++)
          a = T[x], r = x + S, S += a.colSpan - 1, a.rowSpan > 1 && (a.rowSpan -= 1, v.push({ cell: a.cloneNode(!1), index: r }));
        if (v.length > 0) {
          let x = v.shift();
          T = d.cells, S = 0;
          for (let z = 0, a = T.length, r, c; z < a && (r = T[z], c = z + S, S += r.colSpan - 1, !(c >= x.index && (z--, S--, S += x.cell.colSpan - 1, d.insertBefore(x.cell, r), x = v.shift(), !x))); z++)
            ;
          if (x) {
            d.appendChild(x.cell);
            for (let z = 0, a = v.length; z < a; z++)
              d.appendChild(v[z].cell);
          }
        }
      }
      n._element.deleteRow(u);
    } else {
      const d = n._element.insertRow(u);
      d.innerHTML = this.plugins.table.createCells.call(this, "td", g, !1);
    }
    l ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || n._tdElement, !0);
  },
  editCell: function(e, t) {
    const n = this.context.table, l = this.util, i = !e, s = e === "left", u = n._current_colSpan, f = i || s ? n._logical_cellIndex : n._logical_cellIndex + u + 1, o = n._trElements;
    let g = [], d = [], v = 0;
    const T = [], S = [];
    for (let x = 0, z = n._rowCnt, a, r, c, p, h, b; x < z; x++) {
      a = o[x], r = f, h = !1, c = a.cells, b = 0;
      for (let m = 0, y, w = c.length, _, C, N; m < w && (y = c[m], !!y); m++)
        if (_ = y.rowSpan - 1, C = y.colSpan - 1, i) {
          if (N = m + b, d.length > 0) {
            const E = !c[m + 1];
            for (let B = 0, R; B < d.length; B++)
              R = d[B], !(R.row > x) && (N >= R.index ? (b += R.cs, N = m + b, R.rs -= 1, R.row = x + 1, R.rs < 1 && (d.splice(B, 1), B--)) : E && (R.rs -= 1, R.row = x + 1, R.rs < 1 && (d.splice(B, 1), B--)));
          }
          _ > 0 && g.push({
            rs: _,
            cs: C + 1,
            index: N,
            row: -1
          }), N >= r && N + C <= r + u ? T.push(y) : N <= r + u && N + C >= r ? y.colSpan -= l.getOverlapRangeAtIndex(f, f + u, N, N + C) : _ > 0 && (N < r || N + C > r + u) && S.push({
            cell: y,
            i: x,
            rs: x + _
          }), b += C;
        } else {
          if (m >= r) break;
          if (C > 0) {
            if (v < 1 && C + m >= r) {
              y.colSpan += 1, r = null, v = _ + 1;
              break;
            }
            r -= C;
          }
          if (!h) {
            for (let E = 0, B; E < d.length; E++)
              B = d[E], r -= B.cs, B.rs -= 1, B.rs < 1 && (d.splice(E, 1), E--);
            h = !0;
          }
        }
      if (d = d.concat(g).sort(function(m, y) {
        return m.index - y.index;
      }), g = [], !i) {
        if (v > 0) {
          v -= 1;
          continue;
        }
        r !== null && c.length > 0 && (p = this.plugins.table.createCells.call(this, c[0].nodeName, 0, !0), p = a.insertBefore(p, c[r]));
      }
    }
    if (i) {
      let x, z;
      for (let a = 0, r = T.length, c; a < r; a++)
        c = T[a].parentNode, l.removeItem(T[a]), c.cells.length === 0 && (x || (x = l.getArrayIndex(o, c)), z = l.getArrayIndex(o, c), l.removeItem(c));
      for (let a = 0, r = S.length, c; a < r; a++)
        c = S[a], c.cell.rowSpan = l.getOverlapRangeAtIndex(x, z, c.i, c.rs);
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
    const t = this.util, n = e === "vertical", l = this.context.table, i = l._tdElement, s = l._trElements, u = l._trElement, f = l._logical_cellIndex, o = l._rowIndex, g = this.plugins.table.createCells.call(this, i.nodeName, 0, !0);
    if (n) {
      const d = i.colSpan;
      if (g.rowSpan = i.rowSpan, d > 1)
        g.colSpan = this._w.Math.floor(d / 2), i.colSpan = d - g.colSpan, u.insertBefore(g, i.nextElementSibling);
      else {
        let v = [], T = [];
        for (let S = 0, x = l._rowCnt, z, a; S < x; S++) {
          z = s[S].cells, a = 0;
          for (let r = 0, c = z.length, p, h, b, m; r < c; r++) {
            if (p = z[r], h = p.colSpan - 1, b = p.rowSpan - 1, m = r + a, T.length > 0)
              for (let y = 0, w; y < T.length; y++)
                w = T[y], !(w.row > S) && (m >= w.index ? (a += w.cs, m += w.cs, w.rs -= 1, w.row = S + 1, w.rs < 1 && (T.splice(y, 1), y--)) : r === c - 1 && (w.rs -= 1, w.row = S + 1, w.rs < 1 && (T.splice(y, 1), y--)));
            if (m <= f && b > 0 && v.push({
              index: m,
              cs: h + 1,
              rs: b,
              row: -1
            }), p !== i && m <= f && m + h >= f + d - 1) {
              p.colSpan += 1;
              break;
            }
            if (m > f) break;
            a += h;
          }
          T = T.concat(v).sort(function(r, c) {
            return r.index - c.index;
          }), v = [];
        }
        u.insertBefore(g, i.nextElementSibling);
      }
    } else {
      const d = i.rowSpan;
      if (g.colSpan = i.colSpan, d > 1) {
        g.rowSpan = this._w.Math.floor(d / 2);
        const v = d - g.rowSpan, T = [], S = t.getArrayIndex(s, u) + v;
        for (let r = 0, c, p; r < S; r++) {
          c = s[r].cells, p = 0;
          for (let h = 0, b = c.length, m, y, w; h < b && (w = h + p, !(w >= f)); h++)
            m = c[h], y = m.rowSpan - 1, y > 0 && y + r >= S && w < f && T.push({
              index: w,
              cs: m.colSpan
            }), p += m.colSpan - 1;
        }
        const x = s[S], z = x.cells;
        let a = T.shift();
        for (let r = 0, c = z.length, p = 0, h, b, m, y; r < c; r++) {
          if (m = r + p, h = z[r], b = h.colSpan - 1, y = m + b + 1, a && y >= a.index && (p += a.cs, y += a.cs, a = T.shift()), y >= f || r === c - 1) {
            x.insertBefore(g, h.nextElementSibling);
            break;
          }
          p += b;
        }
        i.rowSpan = v;
      } else {
        g.rowSpan = i.rowSpan;
        const v = t.createElement("TR");
        v.appendChild(g);
        for (let x = 0, z; x < o; x++) {
          if (z = s[x].cells, z.length === 0) return;
          for (let a = 0, r = z.length; a < r; a++)
            x + z[a].rowSpan - 1 >= o && (z[a].rowSpan += 1);
        }
        const T = l._physical_cellIndex, S = u.cells;
        for (let x = 0, z = S.length; x < z; x++)
          x !== T && (S[x].rowSpan += 1);
        u.parentNode.insertBefore(v, u.nextElementSibling);
      }
    }
    this.focusEdge(i), this.plugins.table.setPositionControllerDiv.call(this, i, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, n = this.util, l = e._ref, i = e._selectedCells, s = i[0];
    let u = null, f = null, o = l.ce - l.cs + 1, g = l.re - l.rs + 1, d = "", v = null;
    for (let T = 1, S = i.length, x, z; T < S; T++) {
      x = i[T], v !== x.parentNode && (v = x.parentNode), z = x.children;
      for (let a = 0, r = z.length; a < r; a++)
        n.isFormatElement(z[a]) && n.onlyZeroWidthSpace(z[a].textContent) && n.removeItem(z[a]);
      d += x.innerHTML, n.removeItem(x), v.cells.length === 0 && (u ? f = v : u = v, g -= 1);
    }
    if (u) {
      const T = t._trElements, S = n.getArrayIndex(T, u), x = n.getArrayIndex(T, f || u), z = [];
      for (let a = 0, r; a <= x; a++) {
        if (r = T[a].cells, r.length === 0) {
          z.push(T[a]);
          continue;
        }
        for (let c = 0, p = r.length, h, b; c < p; c++)
          h = r[c], b = h.rowSpan - 1, b > 0 && a + b >= S && (h.rowSpan -= n.getOverlapRangeAtIndex(S, x, a, a + b));
      }
      for (let a = 0, r = z.length; a < r; a++)
        n.removeItem(z[a]);
    }
    s.innerHTML += d, s.colSpan = o, s.rowSpan = g, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, s), n.addClass(s, "se-table-selected-cell"), this.focusEdge(s);
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
    for (let d = 0, v = s.length; d < v; d++)
      i.removeClass(s[d], "se-table-selected-cell");
    if (e === t && (i.addClass(e, "se-table-selected-cell"), !n._shift))
      return;
    let u = !0, f = [], o = [];
    const g = n._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let d = 0, v = l.length, T, S; d < v; d++) {
      T = l[d].cells, S = 0;
      for (let x = 0, z = T.length, a, r, c, p; x < z; x++) {
        if (a = T[x], c = a.colSpan - 1, p = a.rowSpan - 1, r = x + S, f.length > 0)
          for (let h = 0, b; h < f.length; h++)
            b = f[h], !(b.row > d) && (r >= b.index ? (S += b.cs, r += b.cs, b.rs -= 1, b.row = d + 1, b.rs < 1 && (f.splice(h, 1), h--)) : x === z - 1 && (b.rs -= 1, b.row = d + 1, b.rs < 1 && (f.splice(h, 1), h--)));
        if (u) {
          if ((a === e || a === t) && (g.cs = g.cs !== null && g.cs < r ? g.cs : r, g.ce = g.ce !== null && g.ce > r + c ? g.ce : r + c, g.rs = g.rs !== null && g.rs < d ? g.rs : d, g.re = g.re !== null && g.re > d + p ? g.re : d + p, g._i += 1), g._i === 2) {
            u = !1, f = [], o = [], d = -1;
            break;
          }
        } else if (i.getOverlapRangeAtIndex(g.cs, g.ce, r, r + c) && i.getOverlapRangeAtIndex(g.rs, g.re, d, d + p)) {
          const h = g.cs < r ? g.cs : r, b = g.ce > r + c ? g.ce : r + c, m = g.rs < d ? g.rs : d, y = g.re > d + p ? g.re : d + p;
          if (g.cs !== h || g.ce !== b || g.rs !== m || g.re !== y) {
            g.cs = h, g.ce = b, g.rs = m, g.re = y, d = -1, f = [], o = [];
            break;
          }
          i.addClass(a, "se-table-selected-cell");
        }
        p > 0 && o.push({
          index: r,
          cs: c + 1,
          rs: p,
          row: -1
        }), S += a.colSpan - 1;
      }
      f = f.concat(o).sort(function(x, z) {
        return x.index - z.index;
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
}, $s = {
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
    for (let f = 0, o = s.length, g, d, v, T, S, x, z; f < o; f++)
      g = s[f], typeof g == "string" && i.indexOf(g) > -1 ? (d = g.toLowerCase(), v = d === "blockquote" ? "range" : d === "pre" ? "free" : "replace", S = /^h/.test(d) ? d.match(/\d+/)[0] : "", T = n["tag_" + (S ? "h" : d)] + S, z = "", x = "") : (d = g.tag.toLowerCase(), v = g.command, T = g.name || d, z = g.class, x = z ? ' class="' + z + '"' : ""), u += '<li><button type="button" class="se-btn-list" data-command="' + v + '" data-value="' + d + '" data-class="' + z + '" title="' + T + '" aria-label="' + T + '"><' + d + x + ">" + T + "</" + d + "></button></li>";
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
      for (let f = 0, o = i.length, g; f < o; f++)
        if (g = i[f], s === g.getAttribute("data-value") && u === g.getAttribute("data-class")) {
          t = g.title;
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
        const o = u.startOffset, g = u.endOffset, d = this.util;
        let v = f[0], T = f[f.length - 1];
        const S = d.getNodePath(u.startContainer, v, null, null), x = d.getNodePath(u.endContainer, T, null, null), z = this.detachList(f, !1);
        z.sc && (v = z.sc), z.ec && (T = z.ec), this.setRange(d.getNodeFromPath(S, v), o, d.getNodeFromPath(x, T), g);
        const a = this.getSelectedElementsAndComponents(!1);
        if (n === "free") {
          const r = a.length - 1;
          let c = a[r].parentNode, p = i.cloneNode(!1);
          const h = p;
          for (let b = r, m, y, w, _, C, N, E = !0; b >= 0; b--)
            if (m = a[b], m !== (a[b + 1] ? a[b + 1].parentNode : null)) {
              if (N = d.isComponent(m), y = N ? "" : m.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), w = d.getParentElement(m, function(B) {
                return B.parentNode === c;
              }), (c !== m.parentNode || N) && (d.isFormatElement(c) ? (c.parentNode.insertBefore(p, c.nextSibling), c = c.parentNode) : (c.insertBefore(p, w ? w.nextSibling : null), c = m.parentNode), _ = p.nextSibling, _ && p.nodeName === _.nodeName && d.isSameAttributes(p, _) && (p.innerHTML += "<BR>" + _.innerHTML, d.removeItem(_)), p = i.cloneNode(!1), E = !0), C = p.innerHTML, p.innerHTML = (E || !y || !C || /<br>$/i.test(y) ? y : y + "<BR>") + C, b === 0) {
                c.insertBefore(p, m), _ = m.nextSibling, _ && p.nodeName === _.nodeName && d.isSameAttributes(p, _) && (p.innerHTML += "<BR>" + _.innerHTML, d.removeItem(_));
                const B = p.previousSibling;
                B && p.nodeName === B.nodeName && d.isSameAttributes(p, B) && (B.innerHTML += "<BR>" + p.innerHTML, d.removeItem(p));
              }
              N || d.removeItem(m), y && (E = !1);
            }
          this.setRange(h, 0, h, 0);
        } else {
          for (let r = 0, c = a.length, p, h; r < c; r++)
            p = a[r], (p.nodeName.toLowerCase() !== l.toLowerCase() || (p.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== s) && !d.isComponent(p) && (h = i.cloneNode(!1), d.copyFormatAttributes(h, p), h.innerHTML = p.innerHTML, p.parentNode.replaceChild(h, p)), r === 0 && (v = h || p), r === c - 1 && (T = h || p), h = null;
          this.setRange(d.getNodeFromPath(S, v), o, d.getNodeFromPath(x, T), g);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, Zs = {
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
}, qs = {
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
}, js = {
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
    for (let f = 0, o = s.length, g, d, v, T; f < o; f++) {
      if (g = s[f], typeof g == "string") {
        const S = i[g.toLowerCase()];
        if (!S) continue;
        g = S;
      }
      d = g.name, v = g.class ? ' class="' + g.class + '"' : "", T = g._class, u += '<li><button type="button" class="se-btn-list' + (T ? " " + T : "") + '" data-value="' + g.class + '" title="' + d + '" aria-label="' + d + '"><div' + v + ">" + d + "</div></button></li>";
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
}, Gs = {
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
    for (let u = 0, f = i.length, o, g, d, v, T, S, x; u < f; u++) {
      if (o = i[u], v = "", S = "", T = [], typeof o == "string") {
        const z = l[o.toLowerCase()];
        if (!z) continue;
        o = z;
      }
      d = o.name, g = o.tag || "span", x = o._class, o.style && (v += ' style="' + o.style + '"', S += o.style.replace(/:[^;]+(;|$)\s*/g, ","), T.push("style")), o.class && (v += ' class="' + o.class + '"', S += "." + o.class.trim().replace(/\s+/g, ",."), T.push("class")), S = S.replace(/,$/, ""), s += '<li><button type="button" class="se-btn-list' + (x ? " " + x : "") + '" data-command="' + g + '" data-value="' + S + '" title="' + d + '" aria-label="' + d + '"><' + g + v + ">" + d + "</" + g + "></button></li>";
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
      for (let g = 0, d, v; g < f.length; g++) {
        for (d = l, o = !1; d && !e.isFormatElement(d) && !e.isComponent(d); ) {
          if (d.nodeName.toLowerCase() === u.getAttribute("data-command").toLowerCase() && (v = f[g], /^\./.test(v) ? e.hasClass(d, v.replace(/^\./, "")) : d.style[v])) {
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
    for (let o = 0, g = s.length; o < g; o++)
      i.push("." + s[o]);
    const u = this.util.hasClass(t, "active") ? null : l.cloneNode(!1), f = u ? null : [l.nodeName];
    this.nodeChange(u, i, f, !0), this.submenuOff();
  }
};
var Di = { exports: {} }, Ks = Di.exports, Ql;
function Ys() {
  return Ql || (Ql = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : Ks, function(t, n) {
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
var Xs = /* @__PURE__ */ Ys();
const ni = /* @__PURE__ */ ke(Xs), Js = {
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
}, Zn = {
  name: "anchor",
  add: function(e) {
    e.addModule([Js]), e.context.anchor = {
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
      for (let f = 0, o = n.length, g; f < o; f++)
        g = n[f], u += '<li><button type="button" class="se-btn-list' + (l.indexOf(g) > -1 ? " se-checked" : "") + '" data-command="' + g + '" title="' + g + '" aria-label="' + g + '"><span class="se-svg">' + i.checked + "</span>" + g + "</button></li>";
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
    for (let f = 0, o = l.length, g; f < o; f++)
      g = l[f], i.test(g.textContent) && (s.push(g), u += '<li class="se-select-item" data-index="' + f + '">' + g.textContent + "</li>");
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
}, Qs = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([ni, Zn]);
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
var Mi = { exports: {} }, er = Mi.exports, en;
function tr() {
  return en || (en = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : er, function(t, n) {
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
var ir = /* @__PURE__ */ tr();
const tl = /* @__PURE__ */ ke(ir);
var Vi = { exports: {} }, lr = Vi.exports, tn;
function nr() {
  return tn || (tn = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : lr, function(t, n) {
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
          let g = u.resizing.resizeHandles = u.resizing.resizeDot.querySelectorAll("span");
          u.resizing.resizeButtonGroup = o.querySelector("._se_resizing_btn_group"), u.resizing.rotationButtons = o.querySelectorAll("._se_resizing_btn_group ._se_rotation"), u.resizing.percentageButtons = o.querySelectorAll("._se_resizing_btn_group ._se_percentage"), u.resizing.alignMenu = o.querySelector(".se-resizing-align-list"), u.resizing.alignMenuList = u.resizing.alignMenu.querySelectorAll("button"), u.resizing.alignButton = o.querySelector("._se_resizing_align_button"), u.resizing.autoSizeButton = o.querySelector("._se_resizing_btn_group ._se_auto_size"), u.resizing.captionButton = o.querySelector("._se_resizing_caption_button"), f.addEventListener("mousedown", function(d) {
            d.preventDefault();
          }), g[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), g[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), g[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), g[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), g[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), g[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), g[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), g[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(i)), o.addEventListener("click", this.onClick_resizeButton.bind(i)), u.element.relative.appendChild(f), u.element.relative.appendChild(o), f = null, o = null, g = null;
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
              const g = this.util.getNumber(s, 0), d = this.util.getNumber(u, 0);
              i._ratio = !0, i._ratioX = g / d, i._ratioY = d / g;
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
          const o = u.resizeContainer, g = u.resizeDiv, d = this.util.getOffset(i, this.context.element.wysiwygFrame), v = u._rotateVertical = /^(90|270)$/.test(Math.abs(i.getAttribute("data-rotate")).toString()), T = v ? i.offsetHeight : i.offsetWidth, S = v ? i.offsetWidth : i.offsetHeight, x = d.top, z = d.left - this.context.element.wysiwygFrame.scrollLeft;
          o.style.top = x + "px", o.style.left = z + "px", o.style.width = T + "px", o.style.height = S + "px", g.style.top = "0px", g.style.left = "0px", g.style.width = T + "px", g.style.height = S + "px";
          let a = i.getAttribute("data-align") || "basic";
          a = a === "none" ? "basic" : a;
          const r = this.util.getParentElement(i, this.util.isComponent), c = this.util.getParentElement(i, "FIGURE"), p = this.plugins.resizing._module_getSizeX.call(this, f, i, c, r) || "auto", h = f._onlyPercentage && s === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, f, i, c, r) || "auto");
          this.util.changeTxt(u.resizeDisplay, this.lang.dialogBox[a] + " (" + p + h + ")"), u.resizeButtonGroup.style.display = f._resizing ? "" : "none";
          const b = f._resizing && !f._resizeDotHide && !f._onlyPercentage ? "flex" : "none", m = u.resizeHandles;
          for (let E = 0, B = m.length; E < B; E++)
            m[E].style.display = b;
          if (f._resizing) {
            const E = u.rotationButtons;
            E[0].style.display = E[1].style.display = f._rotation ? "" : "none";
          }
          if (f._alignHide)
            u.alignButton.style.display = "none";
          else {
            u.alignButton.style.display = "";
            const E = u.alignMenuList;
            this.util.changeElement(u.alignButton.firstElementChild, u.alignIcons[a]);
            for (let B = 0, R = E.length; B < R; B++)
              E[B].getAttribute("data-value") === a ? this.util.addClass(E[B], "on") : this.util.removeClass(E[B], "on");
          }
          const y = u.percentageButtons, w = /%$/.test(i.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
          for (let E = 0, B = y.length; E < B; E++)
            y[E].getAttribute("data-value") === w ? this.util.addClass(y[E], "active") : this.util.removeClass(y[E], "active");
          f._captionShow ? (u.captionButton.style.display = "", this.util.getChildElement(i.parentNode, "figcaption") ? (this.util.addClass(u.captionButton, "active"), f._captionChecked = !0) : (this.util.removeClass(u.captionButton, "active"), f._captionChecked = !1)) : u.captionButton.style.display = "none", o.style.display = "block";
          const _ = { left: 0, top: 50 };
          this.options.iframe && (_.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, _.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(u.resizeButton, o, "bottom", _);
          const C = function() {
            this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
          };
          this.controllersOn(o, u.resizeButton, C.bind(this), i, s), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), u._resize_w = T, u._resize_h = S;
          const N = (i.getAttribute("origin-size") || "").split(",");
          return u._origin_w = N[0] || i.naturalWidth, u._origin_h = N[1] || i.naturalHeight, {
            w: T,
            h: S,
            t: x,
            l: z
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
          const f = s.getAttribute("data-value") || s.parentNode.getAttribute("data-value"), o = this.context.resizing._resize_plugin, g = this.context[o], d = g._element, v = this.plugins[o];
          if (i.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), u === "onalign"))) {
            switch (u) {
              case "auto":
                this.plugins.resizing.resetTransform.call(this, d), v.setAutoSize.call(this), this.selectComponent(d, o);
                break;
              case "percent":
                let T = this.plugins.resizing._module_getSizeY.call(this, g);
                if (this.context.resizing._rotateVertical) {
                  const b = d.getAttribute("data-percentage");
                  b && (T = b.split(",")[1]);
                }
                this.plugins.resizing.resetTransform.call(this, d), v.setPercentSize.call(this, f * 100, this.util.getNumber(T, 0) === null || !/%$/.test(T) ? "" : T), this.selectComponent(d, o);
                break;
              case "mirror":
                const S = d.getAttribute("data-rotate") || "0";
                let x = d.getAttribute("data-rotateX") || "", z = d.getAttribute("data-rotateY") || "";
                f === "h" && !this.context.resizing._rotateVertical || f === "v" && this.context.resizing._rotateVertical ? z = z ? "" : "180" : x = x ? "" : "180", d.setAttribute("data-rotateX", x), d.setAttribute("data-rotateY", z), this.plugins.resizing._setTransForm(d, S, x, z);
                break;
              case "rotate":
                const a = this.context.resizing, r = d.getAttribute("data-rotate") * 1 + f * 1, c = this._w.Math.abs(r) >= 360 ? 0 : r;
                d.setAttribute("data-rotate", c), a._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(c).toString()), this.plugins.resizing.setTransformSize.call(this, d, null, null), this.selectComponent(d, o);
                break;
              case "onalign":
                this.plugins.resizing.openAlignMenu.call(this);
                return;
              case "align":
                const p = f === "basic" ? "none" : f;
                v.setAlign.call(this, p, null, null, null), this.selectComponent(d, o);
                break;
              case "caption":
                const h = !g._captionChecked;
                if (v.openModify.call(this, !0), g._captionChecked = g.captionCheckEl.checked = h, v.update_image.call(this, !1, !1, !1), h) {
                  const b = this.util.getChildElement(g._caption, function(m) {
                    return m.nodeType === 3;
                  });
                  b ? this.setRange(b, 0, b, b.textContent.length) : g._caption.focus(), this.controllersOff();
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
          const o = this.context.resizing._rotateVertical, g = i.getAttribute("data-rotate") * 1;
          let d = "";
          if (f && !o)
            f = f.split(","), f[0] === "auto" && f[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, f[0], f[1]);
          else {
            const v = this.util.getParentElement(i, "FIGURE"), T = s || i.offsetWidth, S = u || i.offsetHeight, x = (o ? S : T) + "px", z = (o ? T : S) + "px";
            if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, T + "px", S + "px", !0), v.style.width = x, v.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : z, o) {
              let a = T / 2 + "px " + T / 2 + "px 0", r = S / 2 + "px " + S / 2 + "px 0";
              d = g === 90 || g === -270 ? r : a;
            }
          }
          i.style.transformOrigin = d, this.plugins.resizing._setTransForm(i, g.toString(), i.getAttribute("data-rotateX") || "", i.getAttribute("data-rotateY") || ""), o ? i.style.maxWidth = "none" : i.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, i);
        },
        _setTransForm: function(i, s, u, f) {
          let o = (i.offsetWidth - i.offsetHeight) * (/-/.test(s) ? 1 : -1), g = "";
          if (/[1-9]/.test(s) && (u || f))
            switch (g = u ? "Y" : "X", s) {
              case "90":
                g = u && f ? "X" : f ? g : "";
                break;
              case "270":
                o *= -1, g = u && f ? "Y" : u ? g : "";
                break;
              case "-90":
                g = u && f ? "Y" : u ? g : "";
                break;
              case "-270":
                o *= -1, g = u && f ? "X" : f ? g : "";
                break;
              default:
                g = "";
            }
          s % 180 === 0 && (i.style.maxWidth = ""), i.style.transform = "rotate(" + s + "deg)" + (u ? " rotateX(" + u + "deg)" : "") + (f ? " rotateY(" + f + "deg)" : "") + (g ? " translate" + g + "(" + o + "px)" : "");
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
          const f = (function(d) {
            if (d.type === "keydown" && d.keyCode !== 27) return;
            const v = s._isChange;
            s._isChange = !1, this.removeDocEvent("mousemove", o), this.removeDocEvent("mouseup", f), this.removeDocEvent("keydown", f), d.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, u), v && this.history.push(!1));
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
          const o = f.clientX, g = f.clientY;
          let d = u._element_w, v = u._element_h;
          const T = u._element_w + (/r/.test(s) ? o - i._resizeClientX : i._resizeClientX - o), S = u._element_h + (/b/.test(s) ? g - i._resizeClientY : i._resizeClientY - g), x = u._element_h / u._element_w * T;
          /t/.test(s) && (i.resizeDiv.style.top = u._element_h - (/h/.test(s) ? S : x) + "px"), /l/.test(s) && (i.resizeDiv.style.left = u._element_w - T + "px"), /r|l/.test(s) && (i.resizeDiv.style.width = T + "px", d = T), /^(t|b)[^h]$/.test(s) ? (i.resizeDiv.style.height = x + "px", v = x) : /^(t|b)h$/.test(s) && (i.resizeDiv.style.height = S + "px", v = S), i._resize_w = d, i._resize_h = v, this.util.changeTxt(i.resizeDisplay, this._w.Math.round(d) + " x " + this._w.Math.round(v)), i._isChange = !0;
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
            const d = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
            this.util.getNumber(u, 0) > d && (f = this._w.Math.round(f / u * d), u = d);
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
  })(Vi)), Vi.exports;
}
var or = /* @__PURE__ */ nr();
const qn = /* @__PURE__ */ ke(or);
var Oi = { exports: {} }, ar = Oi.exports, ln;
function sr() {
  return ln || (ln = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : ar, function(t, n) {
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
          const g = this.plugins.fileManager, d = g._xmlHttp = this.util.getXMLHttpRequest();
          if (d.onreadystatechange = g._callBackUpload.bind(this, d, f, o), d.open("post", i, !0), s !== null && typeof s == "object" && this._w.Object.keys(s).length > 0)
            for (let v in s)
              d.setRequestHeader(v, s[v]);
          d.send(u);
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
          let g = [];
          for (let r = 0, c = s.length; r < c; r++)
            g = g.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(s[r] + ':not([data-se-embed="true"])')));
          const d = this.plugins.fileManager, v = this.context[i], T = v._infoList, S = d.setInfo.bind(this);
          if (g.length === T.length)
            if (this._componentsInfoReset) {
              for (let r = 0, c = g.length; r < c; r++)
                S(i, g[r], u, null, o);
              return;
            } else {
              let r = !1;
              for (let c = 0, p = T.length, h; c < p; c++)
                if (h = T[c], g.filter(function(b) {
                  return h.src === b.src && h.index.toString() === b.getAttribute("data-index");
                }).length === 0) {
                  r = !0;
                  break;
                }
              if (!r) return;
            }
          const x = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = i);
          const z = [], a = [];
          for (let r = 0, c = T.length; r < c; r++)
            a[r] = T[r].index;
          for (v.__updateTags = g; g.length > 0; ) {
            const r = g.shift();
            !this.util.getParentElement(r, this.util.isMediaComponent) || !d._checkMediaComponent(r) ? (z.push(v._infoIndex), f(r)) : !r.getAttribute("data-index") || a.indexOf(r.getAttribute("data-index") * 1) < 0 ? (z.push(v._infoIndex), r.removeAttribute("data-index"), S(i, r, u, null, o)) : z.push(r.getAttribute("data-index") * 1);
          }
          for (let r = 0, c; r < T.length; r++)
            c = T[r].index, !(z.indexOf(c) > -1) && (T.splice(r, 1), typeof u == "function" && u(null, c, "delete", null, 0, this), r--);
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
          const g = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = i);
          const d = this.plugins[i], v = this.context[i], T = v._infoList;
          let S = s.getAttribute("data-index"), x = null, z = "";
          if (f || (f = {
            name: s.getAttribute("data-file-name") || (typeof s.src == "string" ? s.src.split("/").pop() : ""),
            size: s.getAttribute("data-file-size") || 0
          }), !S || this._componentsInfoInit)
            z = "create", S = v._infoIndex++, s.setAttribute("data-index", S), s.setAttribute("data-file-name", f.name), s.setAttribute("data-file-size", f.size), x = {
              src: s.src,
              index: S * 1,
              name: f.name,
              size: f.size
            }, T.push(x);
          else {
            z = "update", S *= 1;
            for (let a = 0, r = T.length; a < r; a++)
              if (S === T[a].index) {
                x = T[a];
                break;
              }
            x || (S = v._infoIndex++, x = { index: S }, T.push(x)), x.src = s.src, x.name = s.getAttribute("data-file-name"), x.size = s.getAttribute("data-file-size") * 1;
          }
          if (x.element = s, x.delete = d.destroy.bind(this, s), x.select = (function(a) {
            a.scrollIntoView(!0), this._w.setTimeout(d.select.bind(this, a));
          }).bind(this, s), o) {
            if (!s.getAttribute("origin-size") && s.naturalWidth && s.setAttribute("origin-size", s.naturalWidth + "," + s.naturalHeight), !s.getAttribute("data-origin")) {
              const a = this.util.getParentElement(s, this.util.isMediaComponent), r = this.util.getParentElement(s, "FIGURE"), c = this.plugins.resizing._module_getSizeX.call(this, v, s, r, a), p = this.plugins.resizing._module_getSizeY.call(this, v, s, r, a);
              s.setAttribute("data-origin", c + "," + p), s.setAttribute("data-size", c + "," + p);
            }
            if (!s.style.width) {
              const a = (s.getAttribute("data-size") || s.getAttribute("data-origin") || "").split(",");
              d.onModifyMode.call(this, s, null), d.applySize.call(this, a[0], a[1]);
            }
            this.context.resizing._resize_plugin = g;
          }
          typeof u == "function" && u(s, S, z, x, --v._uploadFileLength < 0 ? 0 : v._uploadFileLength, this);
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
            for (let o = 0, g = f.length; o < g; o++)
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
            for (let o = 0, g = f.length; o < g; o++)
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
  })(Oi)), Oi.exports;
}
var rr = /* @__PURE__ */ sr();
const il = /* @__PURE__ */ ke(rr), ur = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([ni, Zn, tl, qn, il]);
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
      for (let g = 0, d = o.length; g < d; g++)
        f += o[g].size * 1;
      if (t + f > l) {
        this.closeLoading();
        const g = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + l / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(g, { limitSize: l, currentSize: f, uploadSize: t }, this)) && this.functions.noticeOpen(g);
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
      const o = this._w.FileReader, g = [u];
      this.context.image.inputX.value = n, this.context.image.inputY.value = l;
      for (let d = 0, v, T; d < u; d++)
        v = new o(), T = e[d], v.onload = (function(S, x, z, a, r) {
          g[r] = { result: S.result, file: a }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, x, g, z, t, n, l, i, s), this.closeLoading());
        }).bind(this, v, f, this.context.image._element, T, d), v.readAsDataURL(T);
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + o.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, n, l, i, s, u, f) {
    const o = this.plugins.image.update_src, g = this.plugins.image.create_image;
    for (let d = 0, v = t.length; d < v; d++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[d].file.name), this.context.image._element.setAttribute("data-file-size", t[d].file.size), o.call(this, t[d].result, n, t[d].file)) : g.call(this, t[d].result, l, i, s, u, t[d].file, f);
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
    let g = this.util.createElement("IMG");
    g.src = e, g.alt = u, g.setAttribute("data-rotate", "0"), t = f.onRender_link.call(this, g, t ? t.cloneNode(!1) : null), o._resizing && g.setAttribute("data-proportion", o._proportionChecked);
    const d = this.plugins.component.set_cover.call(this, t), v = this.plugins.component.set_container.call(this, d, "se-image-container");
    o._captionChecked && (o._caption = this.plugins.component.create_caption.call(this), d.appendChild(o._caption)), o._element = g, o._cover = d, o._container = v, f.applySize.call(this, n, l), f.setAlign.call(this, i, g, d, v), g.onload = f._image_create_onload.bind(this, g, o.svgDefaultSize, v), this.insertComponent(v, !0, !0, !this.options.mediaAutoSelect) && this.plugins.fileManager.setInfo.call(this, "image", g, this.functions.onImageUpload, s, !0), this.context.resizing._resize_plugin = "";
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
    const g = this.util.isNumber(l.inputX.value) ? l.inputX.value + l.sizeUnit : l.inputX.value, d = this.util.isNumber(l.inputY.value) ? l.inputY.value + l.sizeUnit : l.inputY.value;
    /%$/.test(i.style.width) ? o = g !== u.style.width || d !== u.style.height : o = g !== i.style.width || d !== i.style.height, i.alt = l._altText;
    let v = !1;
    l._captionChecked ? l._caption || (l._caption = this.plugins.component.create_caption.call(this), s.appendChild(l._caption), v = !0) : l._caption && (this.util.removeItem(l._caption), l._caption = null, v = !0);
    let T = null;
    const S = this.plugins.anchor.createAnchor.call(this, l.anchorCtx, !0);
    if (S)
      l._linkElement !== S || f && !u.contains(S) ? (l._linkElement = S.cloneNode(!1), s.insertBefore(this.plugins.image.onRender_link.call(this, i, l._linkElement), l._caption), T = l._element) : l._linkElement.setAttribute("data-image-link", "image");
    else if (l._linkElement !== null) {
      const z = i;
      if (z.setAttribute("data-image-link", ""), s.contains(l._linkElement)) {
        const a = z.cloneNode(!0);
        s.removeChild(l._linkElement), s.insertBefore(a, l._caption), l._element = i = a;
      }
    }
    let x = null;
    if (f) {
      const z = l._element.parentNode;
      if (x = this.util.isRangeFormatElement(z) || this.util.isWysiwygDiv(z) ? l._element : z || l._element, this.util.getParentElement(l._element, this.util.isNotCheckingNode))
        x = T ? S : l._element, x.parentNode.replaceChild(u, x);
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
    T && (f ? (this.util.removeItem(T), this.util.getListChildren(S, function(z) {
      return /IMG/i.test(z.tagName);
    }).length === 0 && this.util.removeItem(S)) : this.util.removeItem(S)), (v || !l._onlyPercentage && o) && !e && (/\d+/.test(i.style.height) || this.context.resizing._rotateVertical && l._captionChecked) && (/%$/.test(l.inputX.value) || /%$/.test(l.inputY.value) ? this.plugins.resizing.resetTransform.call(this, i) : this.plugins.resizing.setTransformSize.call(this, i, this.util.getNumber(l.inputX.value, 0), this.util.getNumber(l.inputY.value, 0))), l._resizing && (i.setAttribute("data-proportion", l._proportionChecked), o && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, i, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", i, this.functions.onImageUpload, null, !0), t && this.selectComponent(i, "image"), n || this.history.push(!1);
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
}, dr = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([ni, tl, qn, il]);
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
      const s = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], u = t.videoRatio, f = t.videoSizeOnlyPercentage, o = f ? ' style="display: none !important;"' : "", g = t.videoHeightShow ? "" : ' style="display: none !important;"', d = t.videoRatioShow ? "" : ' style="display: none !important;"', v = !f && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      i += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + n.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + g + ">" + n.dialogBox.height + '</label><label class="size-h"' + d + ">(" + n.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + v + ">" + (f ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + g + '/><select class="se-input-select se-video-ratio" title="' + n.dialogBox.ratio + '" aria-label="' + n.dialogBox.ratio + '"' + d + ">", g || (i += '<option value=""> - </option>');
      for (let T = 0, S = s.length; T < S; T++)
        i += '<option value="' + s[T].value + '"' + (u.toString() === s[T].value.toString() ? " selected" : "") + ">" + s[T].name + "</option>";
      i += '</select><button type="button" title="' + n.dialogBox.revertButton + '" aria-label="' + n.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + o + v + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + n.dialogBox.proportion + "</label></div>";
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
      for (let o = 0, g = f.length; o < g; o++)
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
    let o = null, g = null, d = !1;
    if (u) {
      if (e = f._element, e.src !== t) {
        d = !0;
        const z = /youtu\.?be/.test(t), a = /vimeo\.com/.test(t);
        if ((z || a) && !/^iframe$/i.test(e.nodeName)) {
          const r = this.plugins.video.createIframeTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), f._element = e = r;
        } else if (!z && !a && !/^video$/i.test(e.nodeName)) {
          const r = this.plugins.video.createVideoTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), f._element = e = r;
        } else
          e.src = t;
      }
      g = f._container, o = this.util.getParentElement(e, "FIGURE");
    } else
      d = !0, e.src = t, f._element = e, o = this.plugins.component.set_cover.call(this, e), g = this.plugins.component.set_container.call(this, o, "se-video-container");
    f._cover = o, f._container = g;
    const v = this.plugins.resizing._module_getSizeX.call(this, f) !== (n || f._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, f) !== (l || f._videoRatio), T = !u || v;
    f._resizing && (this.context.video._proportionChecked = f.proportion.checked, e.setAttribute("data-proportion", f._proportionChecked));
    let S = !1;
    T && (S = this.plugins.video.applySize.call(this)), S && i === "center" || this.plugins.video.setAlign.call(this, null, e, o, g);
    let x = !0;
    if (u)
      f._resizing && this.context.resizing._rotateVertical && T && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (x = this.insertComponent(g, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const z = this.appendFormatTag(g, null);
      z && this.setRange(z, 0, z, 0);
    }
    x && (d && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, s, !0), u && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
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
      const g = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, g[0] || i.style.width || i.width || "", g[1] || i.style.height || i.height || "");
      const d = this.util.getFormatElement(i);
      if (d && (t._align = d.style.textAlign || d.style.float), this.plugins.video.setAlign.call(this, null, e, s, u), this.util.getParentElement(i, this.util.isNotCheckingNode))
        i.parentNode.replaceChild(u, i);
      else if (this.util.isListCell(l)) {
        const v = this.util.getParentElement(i, function(T) {
          return T.parentNode === l;
        });
        l.insertBefore(u, v), this.util.removeItem(i), this.util.removeEmptyNode(v, null, !0);
      } else if (this.util.isFormatElement(l)) {
        const v = this.util.getParentElement(i, function(T) {
          return T.parentNode === l;
        });
        l = this.util.splitElement(l, v), l.parentNode.insertBefore(u, l), this.util.removeItem(i), this.util.removeEmptyNode(l, null, !0), l.children.length === 0 && (l.innerHTML = this.util.htmlRemoveWhiteSpace(l.innerHTML));
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
}, cr = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([ni, tl, il]);
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
      for (let o = 0, g = f.length; o < g; o++)
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
}, nn = "https://katex.org/docs/supported.html", fr = {
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
    let s = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + nn + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
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
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + nn + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", n);
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
var Hi = { exports: {} }, pr = Hi.exports, on;
function hr() {
  return on || (on = 1, (function(e) {
    (function(t, n) {
      e.exports = t.document ? n(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return n(l);
      };
    })(typeof window < "u" ? window : pr, function(t, n) {
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
          this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(g) {
            /27/.test(g.keyCode) && this.plugins.fileBrowser.close.call(this);
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
          const u = this.context.fileBrowser, f = this.context[u.contextPlugin], o = [], g = i.length, d = f.columnSize || u.columnSize, v = d <= 1 ? 1 : Math.round(g / d) || 1, T = f.itemTemplateHandler;
          let S = "", x = '<div class="se-file-item-column">', z = 1;
          for (let a = 0, r, c; a < g; a++)
            if (r = i[a], c = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], c = r.tag = c.map(function(p) {
              return p.trim();
            }), x += T(r), (a + 1) % v === 0 && z < d && a + 1 < g && (z++, x += '</div><div class="se-file-item-column">'), s && c.length > 0)
              for (let p = 0, h = c.length, b; p < h; p++)
                b = c[p], b && o.indexOf(b) === -1 && (o.push(b), S += '<a title="' + b + '" aria-label="' + b + '">' + b + "</a>");
          x += "</div>", u.list.innerHTML = x, s && (u.items = i, u.tagArea.innerHTML = S, u.tagElements = u.tagArea.querySelectorAll("A"));
        },
        onClickTag: function(i) {
          const s = i.target;
          if (!this.util.isAnchor(s)) return;
          const u = s.textContent, f = this.plugins.fileBrowser, o = this.context.fileBrowser, g = o.tagArea.querySelector('a[title="' + u + '"]'), d = o.selectedTags, v = d.indexOf(u);
          v > -1 ? (d.splice(v, 1), this.util.removeClass(g, "on")) : (d.push(u), this.util.addClass(g, "on")), f._drawListItem.call(
            this,
            d.length === 0 ? o.items : o.items.filter(function(T) {
              return T.tag.some(function(S) {
                return d.indexOf(S) > -1;
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
  })(Hi)), Hi.exports;
}
var mr = /* @__PURE__ */ hr();
const gr = /* @__PURE__ */ ke(mr), vr = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([gr]);
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
}, br = { blockquote: Ds, align: Ms, font: Vs, fontSize: Os, fontColor: Hs, hiliteColor: Fs, horizontalRule: Us, list: Ps, table: Ws, formatBlock: $s, lineHeight: Zs, template: qs, paragraphStyle: js, textStyle: Gs, link: Qs, image: ur, video: dr, audio: cr, math: fr, imageGallery: vr }, yr = {
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
}, an = {
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
    for (let g = 0, d = e.length; g < d; g++)
      u += e[g] + (g < d - 1 ? "|" : ")");
    const f = new this._w.RegExp("(^|.*[\\/])" + u + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), o = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let g = this._d.getElementsByTagName(i), d = 0; d < g.length; d++)
      o.test(g[d][s]) && l.push(g[d]);
    for (let g = 0; g < l.length; g++) {
      let d = l[g][s].match(f);
      if (d) {
        n = d[0];
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
          let g = s.nextSibling;
          for (; g && g.nodeType === 3; )
            f = g.textContent.replace(this.zeroWidthRegExp, ""), n.e += f.length, s.textContent += f, u = g, g = g.nextSibling, this.removeItem(u);
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
    for (let g = 0, d = n.length; g < d; g++)
      n[n[g]] === l[n[g]] && i++;
    const s = e.classList, u = t.classList, f = this._w.RegExp;
    let o = 0;
    for (let g = 0, d = s.length; g < d; g++)
      f("(s|^)" + s[g] + "(s|$)").test(u.value) && o++;
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
      const T = e.childNodes;
      let S = this.getPositionIndex(t);
      const x = e.cloneNode(!1), z = e.cloneNode(!1);
      for (let a = 0, r = T.length; a < r; a++) {
        if (a < S) x.appendChild(T[a]);
        else if (a > S) z.appendChild(T[a]);
        else continue;
        a--, r--, S--;
      }
      return x.childNodes.length > 0 && e.parentNode.insertBefore(x, e), z.childNodes.length > 0 && e.parentNode.insertBefore(z, e.nextElementSibling), e;
    }
    const l = e.parentNode;
    let i = 0, s = 1, u = !0, f, o, g;
    if ((!n || n < 0) && (n = 0), e.nodeType === 3) {
      if (i = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const T = this.getNodeFromPath([i + 1], l);
        this.onlyZeroWidthSpace(T) && (T.data = this.zeroWidthSpace);
      }
    } else if (e.nodeType === 1) {
      if (t === 0) {
        for (; e.firstChild; )
          e = e.firstChild;
        if (e.nodeType === 3) {
          const T = this.createTextNode(this.zeroWidthSpace);
          e.parentNode.insertBefore(T, e), e = T;
        }
      }
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === n && (u = !1);
    }
    e.nodeType === 1 && (s = 0);
    let d = e;
    for (; this.getElementDepth(d) > n; )
      for (i = this.getPositionIndex(d) + s, d = d.parentNode, g = f, f = d.cloneNode(!1), o = d.childNodes, g && (this.isListCell(f) && this.isList(g) && g.firstElementChild ? (f.innerHTML = g.firstElementChild.innerHTML, ge.removeItem(g.firstElementChild), g.children.length > 0 && f.appendChild(g)) : f.appendChild(g)); o[i]; )
        f.appendChild(o[i]);
    d.childNodes.length <= 1 && (!d.firstChild || d.firstChild.textContent.length === 0) && (d.innerHTML = "<br>");
    const v = d.parentNode;
    return u && (d = d.nextSibling), f ? (this.mergeSameTags(f, null, !1), this.mergeNestedTags(f, (function(T) {
      return this.isList(T);
    }).bind(this)), f.childNodes.length > 0 ? v.insertBefore(f, d) : f = d, this.isListCell(f) && f.children && this.isList(f.children[0]) && f.insertBefore(this.createElement("BR"), f.children[0]), l.childNodes.length === 0 && this.removeItem(l), f) : d;
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
    return i && (s = this._w.Array.apply(null, new this._w.Array(i)).map(this._w.Number.prototype.valueOf, 0)), (function u(f, o, g) {
      const d = f.childNodes;
      for (let v = 0, T = d.length, S, x; v < T && (S = d[v], x = d[v + 1], !!S); v++)
        if (!(l.isBreak(S) || l.isMedia(S) || l.isInputElement(S))) {
          if (n && l._isIgnoreNodeChange(S) || !n && (l.isTable(S) || l.isListCell(S) || l.isFormatElement(S) && !l.isFreeFormatElement(S))) {
            (l.isTable(S) || l.isListCell(S)) && u(S, o + 1, v);
            continue;
          }
          if (T === 1 && f.nodeName === S.nodeName && f.parentNode) {
            if (i) {
              let z, a, r, c, p;
              for (let h = 0; h < i; h++)
                if (z = t[h], z && z[o] === v) {
                  for (a = S, r = f, c = o, p = !0; c >= 0; ) {
                    if (l.getArrayIndex(r.childNodes, a) !== z[c]) {
                      p = !1;
                      break;
                    }
                    a = S.parentNode, r = a.parentNode, c--;
                  }
                  p && (z.splice(o, 1), z[o] = v);
                }
            }
            l.copyTagAttributes(S, f), f.parentNode.insertBefore(S, f), l.removeItem(f);
          }
          if (!x) {
            S.nodeType === 1 && u(S, o + 1, v);
            break;
          }
          if (S.nodeName === x.nodeName && l.isSameAttributes(S, x) && S.href === x.href) {
            const z = S.childNodes;
            let a = 0;
            for (let h = 0, b = z.length; h < b; h++)
              z[h].textContent.length > 0 && a++;
            const r = S.lastChild, c = x.firstChild;
            let p = 0;
            if (r && c) {
              const h = r.nodeType === 3 && c.nodeType === 3;
              p = r.textContent.length;
              let b = r.previousSibling;
              for (; b && b.nodeType === 3; )
                p += b.textContent.length, b = b.previousSibling;
              if (a > 0 && r.nodeType === 3 && c.nodeType === 3 && (r.textContent.length > 0 || c.textContent.length > 0) && a--, i) {
                let m = null;
                for (let y = 0; y < i; y++)
                  if (m = t[y], m && m[o] > v) {
                    if (o > 0 && m[o - 1] !== g) continue;
                    m[o] -= 1, m[o + 1] >= 0 && m[o] === v && (m[o + 1] += a, h && r && r.nodeType === 3 && c && c.nodeType === 3 && (s[y] += p));
                  }
              }
            }
            if (S.nodeType === 3) {
              if (p = S.textContent.length, S.textContent += x.textContent, i) {
                let h = null;
                for (let b = 0; b < i; b++)
                  if (h = t[b], h && h[o] > v) {
                    if (o > 0 && h[o - 1] !== g) continue;
                    h[o] -= 1, h[o + 1] >= 0 && h[o] === v && (h[o + 1] += a, s[b] += p);
                  }
              }
            } else
              S.innerHTML += x.innerHTML;
            l.removeItem(x), v--;
          } else S.nodeType === 1 && u(S, o + 1, v);
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
        for (let f = 0, o = u.length, g = 0; f < o; f++)
          !u[f + g] || l.isComponent(u[f + g]) || (g += i(u[f + g]));
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
    const s = [], u = [], f = [], o = [], g = this.getListChildNodes(e, (function(v) {
      if (v.nodeType !== 1)
        return this.isList(v.parentElement) && s.push(v), !1;
      if (n.test(v.nodeName) || !t.test(v.nodeName) && v.childNodes.length === 0 && this.isNotCheckingNode(v))
        return s.push(v), !1;
      const T = !this.getParentElement(v, this.isNotCheckingNode);
      if (!this.isTable(v) && !this.isListCell(v) && !this.isAnchor(v) && (this.isFormatElement(v) || this.isRangeFormatElement(v) || this.isTextStyleElement(v)) && v.childNodes.length === 0 && T)
        return u.push(v), !1;
      if (this.isList(v.parentNode) && !this.isList(v) && !this.isListCell(v))
        return f.push(v), !1;
      if (this.isCell(v)) {
        const x = v.firstElementChild;
        if (!this.isFormatElement(x) && !this.isRangeFormatElement(x) && !this.isComponent(x))
          return o.push(v), !1;
      }
      if (T && v.className) {
        const x = new this._w.Array(v.classList).map(l).join(" ").trim();
        x ? v.className = x : v.removeAttribute("class");
      }
      return i && v.parentNode !== e && T && (this.isListCell(v) && !this.isList(v.parentNode) || (this.isFormatElement(v) || this.isComponent(v)) && !this.isRangeFormatElement(v.parentNode) && !this.getParentElement(v, this.isComponent));
    }).bind(this));
    for (let v = 0, T = s.length; v < T; v++)
      this.removeItem(s[v]);
    const d = [];
    for (let v = 0, T = g.length, S, x; v < T; v++)
      if (S = g[v], x = S.parentNode, !(!x || !x.parentNode))
        if (this.getParentElement(S, this.isListCell)) {
          const z = S.childNodes;
          for (let a = z.length - 1; T >= 0; a--)
            x.insertBefore(S, z[a]);
          d.push(S);
        } else
          x.parentNode.insertBefore(S, x), d.push(x);
    for (let v = 0, T = d.length, S; v < T; v++)
      S = d[v], this.onlyZeroWidthSpace(S.textContent.trim()) && this.removeItem(S);
    for (let v = 0, T = u.length; v < T; v++)
      this.removeItem(u[v]);
    for (let v = 0, T = f.length, S, x, z, a; v < T; v++)
      if (S = f[v], a = S.parentNode, !!a)
        if (x = this.createElement("LI"), this.isFormatElement(S)) {
          for (z = S.childNodes; z[0]; )
            x.appendChild(z[0]);
          a.insertBefore(x, S), this.removeItem(S);
        } else
          S = S.nextSibling, x.appendChild(f[v]), a.insertBefore(x, S);
    for (let v = 0, T = o.length, S, x; v < T; v++)
      S = o[v], x = this.createElement("DIV"), x.innerHTML = S.textContent.trim().length === 0 && S.children.length === 0 ? "<br>" : S.innerHTML, S.innerHTML = x.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let n = "";
    e.height && (n += "height:" + e.height + ";"), e.minHeight && (n += "min-height:" + e.minHeight + ";"), e.maxHeight && (n += "max-height:" + e.maxHeight + ";"), e.position && (n += "position:" + e.position + ";"), e.width && (n += "width:" + e.width + ";"), e.minWidth && (n += "min-width:" + e.minWidth + ";"), e.maxWidth && (n += "max-width:" + e.maxWidth + ";");
    let l = "", i = "", s = "";
    t = n + t;
    const u = t.split(";");
    for (let f = 0, o = u.length, g; f < o; f++)
      if (g = u[f].trim(), !!g) {
        if (/^(min-|max-)?width\s*:/.test(g) || /^(z-index|position)\s*:/.test(g)) {
          l += g + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(g)) {
          /^height/.test(g) && g.split(":")[1].trim() === "auto" && (e.height = "auto"), i += g + ";";
          continue;
        }
        s += g + ";";
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
        for (let o = document.getElementsByTagName("link"), g = 0, d = o.length, v; g < d; g++)
          v = o[g].href.match(f), v && u.push(v[0]);
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
}, Yi = {
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
    const g = n.createElement("DIV");
    g.className = "se-wrapper";
    const d = this._initElements(t, l, s.element, f), v = d.bottomBar, T = d.wysiwygFrame, S = d.placeholder;
    let x = d.codeView;
    const z = v.resizingBar, a = v.navigation, r = v.charWrapper, c = v.charCounter, p = n.createElement("DIV");
    p.className = "se-loading-box sun-editor-common", p.innerHTML = '<div class="se-loading-effect"></div>';
    const h = n.createElement("DIV");
    h.className = "se-line-breaker", h.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const b = n.createElement("DIV");
    b.className += "se-line-breaker-component";
    const m = b.cloneNode(!0);
    b.innerHTML = m.innerHTML = t.icons.line_break;
    const y = n.createElement("DIV");
    y.className = "se-resizing-back";
    const w = n.createElement("INPUT");
    w.tabIndex = -1, w.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const _ = t.toolbarContainer;
    _ && (_.appendChild(s.element), _.appendChild(u));
    const C = t.resizingBarContainer;
    return z && C && C.appendChild(z), g.appendChild(x), S && g.appendChild(S), _ || (i.appendChild(s.element), i.appendChild(u)), i.appendChild(o), i.appendChild(g), i.appendChild(y), i.appendChild(p), i.appendChild(h), i.appendChild(b), i.appendChild(m), i.appendChild(w), z && !C && i.appendChild(z), l.appendChild(i), x = this._checkCodeMirror(t, x), {
      constructed: {
        _top: l,
        _relative: i,
        _toolBar: s.element,
        _toolbarShadow: u,
        _menuTray: s._menuTray,
        _editorArea: g,
        _wysiwygArea: T,
        _codeArea: x,
        _placeholder: S,
        _resizingBar: z,
        _navigation: a,
        _charWrapper: r,
        _charCounter: c,
        _loading: p,
        _lineBreaker: h,
        _lineBreaker_t: b,
        _lineBreaker_b: m,
        _resizeBack: y,
        _stickyDummy: o,
        _arrow: f,
        _focusTemp: w
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
    const g = document.createElement("DIV");
    g.className = "se-arrow", f && (o.element.style.visibility = "hidden", u ? (e.toolbarContainer.appendChild(o.element), l.toolbar.parentElement.removeChild(l.toolbar)) : l.toolbar.parentElement.replaceChild(o.element, l.toolbar), l.toolbar = o.element, l._menuTray = o._menuTray, l._arrow = g);
    const d = this._initElements(e, l.topArea, f ? o.element : l.toolbar, g), v = d.bottomBar, T = d.wysiwygFrame, S = d.placeholder;
    let x = d.codeView;
    return l.resizingBar && ge.removeItem(l.resizingBar), v.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== n.resizingBarContainer ? e.resizingBarContainer.appendChild(v.resizingBar) : i.appendChild(v.resizingBar)), s.innerHTML = "", s.appendChild(x), S && s.appendChild(S), x = this._checkCodeMirror(e, x), l.resizingBar = v.resizingBar, l.navigation = v.navigation, l.charWrapper = v.charWrapper, l.charCounter = v.charCounter, l.wysiwygFrame = T, l.code = x, l.placeholder = S, e.rtl ? ge.addClass(l.topArea, "se-rtl") : ge.removeClass(l.topArea, "se-rtl"), {
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
      for (let v in e.iframeAttributes)
        i.setAttribute(v, e.iframeAttributes[v]);
      i.className += " " + e._editableClass, i.style.cssText = e._editorStyles.frame + e._editorStyles.editor, i.className += e.className;
    }
    const s = document.createElement("TEXTAREA");
    s.className = "se-wrapper-inner se-wrapper-code" + e.className, s.style.cssText = e._editorStyles.frame, s.style.display = "none", e.height === "auto" && (s.style.overflow = "hidden");
    let u = null, f = null, o = null, g = null;
    if (e.resizingBar && (u = document.createElement("DIV"), u.className = "se-resizing-bar sun-editor-common", f = document.createElement("DIV"), f.className = "se-navigation sun-editor-common", u.appendChild(f), e.charCounter)) {
      if (o = document.createElement("DIV"), o.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const v = document.createElement("SPAN");
        v.className = "se-char-label", v.textContent = e.charCounterLabel, o.appendChild(v);
      }
      if (g = document.createElement("SPAN"), g.className = "se-char-counter", g.textContent = "0", o.appendChild(g), e.maxCharCount > 0) {
        const v = document.createElement("SPAN");
        v.textContent = " / " + e.maxCharCount, o.appendChild(v);
      }
      u.appendChild(o);
    }
    let d = null;
    return e.placeholder && (d = document.createElement("SPAN"), d.className = "se-placeholder", d.innerText = e.placeholder), {
      bottomBar: {
        resizingBar: u,
        navigation: f,
        charWrapper: o,
        charCounter: g
      },
      wysiwygFrame: i,
      codeView: s,
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
    const n = {};
    if (t.plugins) {
      const s = t.plugins, u = s.length ? s : Object.keys(s).map(function(f) {
        return s[f];
      });
      for (let f = 0, o = u.length, g; f < o; f++)
        g = u[f].default || u[f], n[g.name] = g;
    }
    t.plugins = n, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || Ui, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new ge._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
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
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? an : [an, t.icons].reduce(function(s, u) {
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
    const f = ge.createElement("LI"), o = ge.createElement("BUTTON"), g = t || n;
    return o.setAttribute("type", "button"), o.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), o.setAttribute("data-command", n), o.setAttribute("data-display", l), o.setAttribute("aria-label", g.replace(/<span .+<\/span>/, "")), o.setAttribute("tabindex", "-1"), i || (i = '<span class="se-icon-text">!</span>'), /^default\./i.test(i) && (i = u[i.replace(/^default\./i, "")]), /^text\./i.test(i) && (i = i.replace(/^text\./i, ""), o.className += " se-btn-more-text"), i += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + g + "</span></span>", s && o.setAttribute("disabled", !0), o.innerHTML = i, f.appendChild(o), {
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
    const f = l.icons, o = this._defaultButtons(l), g = {}, d = [];
    let v = null, T = null, S = null, x = null, z = "", a = !1;
    const r = ge.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let h = 0, b, m, y, w, _; h < t.length; h++)
        if (b = !1, _ = "", w = t[h], S = this._createModuleGroup(), typeof w == "object") {
          for (let C = 0, N; C < w.length; C++) {
            if (T = w[C], N = !1, /^\%\d+/.test(T) && C === 0) {
              w[0] = T.replace(/[^\d]/g, ""), d.push(w), t.splice(h--, 1);
              continue e;
            }
            if (typeof T == "object")
              typeof T.add == "function" ? (z = T.name, v = o[z], n[z] = T) : (z = T.name, v = [T.buttonClass, T.title, T.name, T.dataDisplay, T.innerHTML, T._disabled]);
            else {
              if (/^\-/.test(T)) {
                _ = T.substr(1), S.div.className += " module-float-" + _;
                continue;
              }
              if (/^\#/.test(T)) {
                T.substr(1) === "fix" && (S.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(T)) {
                N = !0;
                const E = T.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + E[1].trim();
                const B = E[2].trim(), R = E[3].trim();
                v = ["se-btn-more", B, y, "MORE", R];
              } else
                v = o[T];
              if (z = T, !v) {
                const E = n[z];
                if (!E) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + z + "]");
                v = [E.buttonClass, E.title, E.name, E.display, E.innerHTML, E._disabled];
              }
            }
            x = this._createButton(v[0], v[1], v[2], v[3], v[4], v[5], f), (b ? m : S.ul).appendChild(x.li), n[z] && (g[z] = x.button), N && (b = !0, m = ge.createElement("DIV"), m.className = "se-more-layer " + y, m.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (_ ? ' style="float: ' + _ + ';"' : "") + "></ul></div>", r.appendChild(m), m = m.firstElementChild.firstElementChild);
          }
          if (a) {
            const C = i.cloneNode(!1);
            u.appendChild(C);
          }
          u.appendChild(S.div), a = !0;
        } else if (/^\/$/.test(w)) {
          const C = e.createElement("DIV");
          C.className = "se-btn-module-enter", u.appendChild(C), a = !1;
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
          const h = i.cloneNode(!1);
          h.style.float = u.lastElementChild.style.float, u.appendChild(h);
        }
    }
    d.length > 0 && d.unshift(t), r.children.length > 0 && u.appendChild(r);
    const c = e.createElement("DIV");
    c.className = "se-menu-tray", s.appendChild(c);
    const p = e.createElement("DIV");
    return p.className = "se-toolbar-cover", s.appendChild(p), l.hideToolbar && (s.style.display = "none"), {
      element: s,
      plugins: n,
      pluginCallButtons: g,
      responsiveButtons: d,
      _menuTray: c,
      _buttonTray: u
    };
  }
}, Xi = function(e, t, n) {
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
function _r(e, t) {
  const n = e._w, l = e.util, i = e.options.historyStackDelayTime;
  let s = e.context.element, u = e.context.tool.undo, f = e.context.tool.redo, o = null, g = 0, d = [];
  function v() {
    const S = d[g];
    s.wysiwyg.innerHTML = S.contents, e.setRange(l.getNodeFromPath(S.s.path, s.wysiwyg), S.s.offset, l.getNodeFromPath(S.e.path, s.wysiwyg), S.e.offset), e.focus(), d.length <= 1 ? (u && u.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0)) : g === 0 ? (u && u.setAttribute("disabled", !0), f && f.removeAttribute("disabled")) : g === d.length - 1 ? (u && u.removeAttribute("disabled"), f && f.setAttribute("disabled", !0)) : (u && u.removeAttribute("disabled"), f && f.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function T() {
    e._checkComponents();
    const S = s.wysiwyg.innerHTML;
    if (!S || d[g] && S === d[g].contents) return;
    g++;
    const x = e._variable._range;
    d.length > g && (d = d.slice(0, g), f && f.setAttribute("disabled", !0)), x ? d[g] = {
      contents: S,
      s: {
        path: l.getNodePath(x.startContainer, null, null),
        offset: x.startOffset
      },
      e: {
        path: l.getNodePath(x.endContainer, null, null),
        offset: x.endOffset
      }
    } : d[g] = {
      contents: S,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, g === 1 && u && u.removeAttribute("disabled"), e._setCharCount(), t();
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
      n.setTimeout(e._resourcesStateChange.bind(e));
      const x = typeof S == "number" ? S > 0 ? S : 0 : S ? i : 0;
      if ((!x || o) && (n.clearTimeout(o), !x)) {
        T();
        return;
      }
      o = n.setTimeout(function() {
        n.clearTimeout(o), o = null, T();
      }, x);
    },
    /**
     * @description Undo function
     */
    undo: function() {
      g > 0 && (g--, v());
    },
    /**
     * @description Redo function
     */
    redo: function() {
      d.length - 1 > g && (g++, v());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(S) {
      g = S < 0 ? d.length - 1 : S, v();
    },
    /**
     * @description Get the current history stack index.
     * @returns {Number} Current Stack index
     */
    getCurrentIndex: function() {
      return g;
    },
    /**
     * @description Reset the history object
     */
    reset: function(S) {
      u && u.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), d.splice(0), g = 0, d[g] = {
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
      s = e.context.element, u = e.context.tool.undo, f = e.context.tool.redo, g === 0 ? (u && u.setAttribute("disabled", !0), f && g === d.length - 1 && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : g === d.length - 1 && f && f.setAttribute("disabled", !0);
    },
    /**
     * @description Remove all stacks and remove the timeout function.
     * @private
     */
    _destroy: function() {
      o && n.clearTimeout(o), d = null;
    }
  };
}
const sn = {
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
function Cr(e, t, n, l, i, s) {
  const u = e.element.originElement.ownerDocument || document, f = u.defaultView || window, o = ge, g = i.icons, d = {
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
    notice: sn,
    /**
     * @description Default icons object
     */
    icons: g,
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
      for (let r = 0, c, p; r < a.length; r++)
        c = a[r], p = c.getAttribute("data-command"), this.allCommandButtons[p] = c;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const a = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let r = 0, c, p, h; r < a.length; r++)
          c = a[r], p = c.getAttribute("data-command"), h = this.allCommandButtons[p], h && (c.parentElement.replaceChild(h, c), this.context.tool[p] && (this.context.tool[p] = h));
      }
    },
    /**
     * @description If the plugin is not added, add the plugin and call the 'add' function.
     * If the plugin is added call callBack function.
     * @param {String} pluginName The name of the plugin to call
     * @param {function} callBackFunction Function to be executed immediately after module call
     * @param {Element|null} _target Plugin target button (This is not necessary if you have a button list when creating the editor)
     */
    callPlugin: function(a, r, c) {
      if (c = c || t[a], this.plugins[a])
        this.initPlugins[a] ? typeof this._targetPlugins[a] == "object" && c && this.initMenuTarget(a, c, this._targetPlugins[a]) : (this.plugins[a].add(this, c), this.initPlugins[a] = !0);
      else throw Error('[SUNEDITOR.core.callPlugin.fail] The called plugin does not exist or is in an invalid format. (pluginName:"' + a + '")');
      this.plugins[a].active && !this.commandMap[a] && c && (this.commandMap[a] = c, this.activePlugins.push(a)), typeof r == "function" && r();
    },
    /**
     * @description If the module is not added, add the module and call the 'add' function
     * @param {Array} moduleArray module object's Array [dialog, resizing]
     */
    addModule: function(a) {
      for (let r = 0, c = a.length, p; r < c; r++)
        p = a[r].name, this.plugins[p] || (this.plugins[p] = a[r]), this.initPlugins[p] || (this.initPlugins[p] = !0, typeof this.plugins[p].add == "function" && this.plugins[p].add(this));
    },
    /**
     * @description Gets the current editor-relative scroll offset.
     * @returns {Object} {top, left}
     */
    getGlobalScrollOffset: function() {
      let a = 0, r = 0, c = e.element.topArea;
      for (; c; )
        a += c.scrollTop, r += c.scrollLeft, c = c.parentElement;
      for (c = this._shadowRoot ? this._shadowRoot.host : null; c; )
        a += c.scrollTop, r += c.scrollLeft, c = c.parentElement;
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
    initMenuTarget: function(a, r, c) {
      r ? (e.element._menuTray.appendChild(c), this._targetPlugins[a] = !0, this._menuTray[r.getAttribute("data-command")] = c) : this._targetPlugins[a] = c;
    },
    /**
     * @description Enable submenu
     * @param {Element} element Submenu's button element to call
     */
    submenuOn: function(a) {
      this._bindedSubmenuOff && this._bindedSubmenuOff(), this._bindControllersOff && this.controllersOff();
      const r = this._submenuName = a.getAttribute("data-command"), c = this.submenu = this._menuTray[r];
      this.submenuActiveButton = a, this._setMenuPosition(a, c), this._bindedSubmenuOff = this.submenuOff.bind(this), this.addDocEvent("mousedown", this._bindedSubmenuOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
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
      const r = this._containerName = a.getAttribute("data-command"), c = this.container = this._menuTray[r];
      this.containerActiveButton = a, this._setMenuPosition(a, c), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
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
      const c = this.context.element.toolbar, p = c.offsetWidth, h = v._getEditorOffsets(e.element.toolbar), b = r.offsetWidth, m = a.parentElement.offsetLeft + 3;
      if (i.rtl) {
        const R = a.offsetWidth, W = b > R ? b - R : 0, $ = W > 0 ? 0 : R - b;
        r.style.left = m - W + $ + "px", h.left > v._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const R = p <= b ? 0 : p - (m + b);
        R < 0 ? r.style.left = m + R + "px" : r.style.left = m + "px";
      }
      let y = 0, w = a;
      for (; w && w !== c; )
        y += w.offsetTop, w = w.offsetParent;
      const _ = y;
      this._isBalloon ? y += c.offsetTop + a.offsetHeight : y -= a.offsetHeight;
      const C = h.top, N = r.offsetHeight, E = this.getGlobalScrollOffset().top, B = f.innerHeight - (C - E + _ + a.parentElement.offsetHeight);
      if (B < N) {
        let R = -1 * (N - _ + 3);
        const W = C - E + R, $ = N + (W < 0 ? W : 0);
        $ > B ? (r.style.height = $ + "px", R = -1 * ($ - _ + 3)) : (r.style.height = B + "px", R = _ + a.parentElement.offsetHeight), r.style.top = R + "px";
      } else
        r.style.top = _ + a.parentElement.offsetHeight + "px";
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
          r.style && (r.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(r) === -1 && (r.addEventListener("mousedown", function(c) {
            c.preventDefault(), c.stopPropagation();
          }), this._shadowRootControllerEventTarget.push(r))), this.controllerArray.push(r);
        }
      this._bindControllersOff = this.controllersOff.bind(this), this.addDocEvent("mousedown", this._bindControllersOff, !1), this.addDocEvent("keydown", this._bindControllersOff, !1), this._antiBlur = !0, typeof T.showController == "function" && T.showController(this.currentControllerName, this.controllerArray, this);
    },
    /**
     * @description Hide controller at editor area (link button, image resize button..)
     * @param {KeyboardEvent|MouseEvent|null} e Event object when called from mousedown and keydown events registered in "core.controllersOn"
     */
    controllersOff: function(a) {
      this._lineBreaker.style.display = "none";
      const r = this.controllerArray.length;
      if (a && a.target && r > 0) {
        for (let c = 0; c < r; c++)
          if (typeof this.controllerArray[c].contains == "function" && this.controllerArray[c].contains(a.target)) return;
      }
      if (!(this._fileManager.pluginRegExp.test(this.currentControllerName) && a && a.type === "keydown" && a.keyCode !== 27) && (e.element.lineBreaker_t.style.display = e.element.lineBreaker_b.style.display = "none", this._variable._lineBreakComp = null, this.currentControllerName = "", this.currentControllerTarget = null, this.currentFileComponentInfo = null, this.effectNode = null, !!this._bindControllersOff)) {
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
    setControllerPosition: function(a, r, c, p) {
      i.rtl && (p.left *= -1);
      const h = o.getOffset(r, e.element.wysiwygFrame);
      a.style.visibility = "hidden", a.style.display = "block";
      const b = c === "top" ? -(a.offsetHeight + 2) : r.offsetHeight + 12;
      a.style.top = h.top + b + p.top + "px";
      const m = h.left - e.element.wysiwygFrame.scrollLeft + p.left, y = a.offsetWidth, w = r.offsetWidth, _ = o.hasClass(a.firstElementChild, "se-arrow") ? a.firstElementChild : null;
      if (i.rtl) {
        const C = y > w ? y - w : 0, N = C > 0 ? 0 : w - y;
        a.style.left = m - C + N + "px", C > 0 && _ && (_.style.left = (y - 14 < 10 + C ? y - 14 : 10 + C) + "px");
        const E = e.element.wysiwygFrame.offsetLeft - a.offsetLeft;
        E > 0 && (a.style.left = "0px", _ && (_.style.left = E + "px"));
      } else {
        a.style.left = m + "px";
        const C = e.element.wysiwygFrame.offsetWidth - (a.offsetLeft + y);
        C < 0 ? (a.style.left = a.offsetLeft + C + "px", _ && (_.style.left = 20 - C + "px")) : _ && (_.style.left = "20px");
      }
      a.style.visibility = "";
    },
    /**
     * @description javascript execCommand
     * @param {String} command javascript execCommand function property
     * @param {Boolean|undefined} showDefaultUI javascript execCommand function property
     * @param {String|undefined} value javascript execCommand function property
     */
    execCommand: function(a, r, c) {
      this._wd.execCommand(a, r, a === "formatBlock" ? "<" + c + ">" : c), this.history.push(!0);
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
                const c = o.createElement(i.defaultTag), p = o.createElement("BR");
                c.appendChild(p), e.element.wysiwyg.insertBefore(c, r), this.setRange(p, 0, p, 0);
                return;
              }
            }
            this.setRange(a.startContainer, a.startOffset, a.endContainer, a.endOffset);
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
    focusEdge: function(a) {
      a || (a = e.element.wysiwyg.lastElementChild);
      const r = this.getFileComponent(a);
      r ? this.selectComponent(r.target, r.pluginName) : a ? (a = o.getChildElement(a, function(c) {
        return c.childNodes.length === 0 || c.nodeType === 3;
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
    setRange: function(a, r, c, p) {
      if (!a || !c) return;
      (o.isBreak(a) || a.nodeType === 3) && r > a.textContent.length && (r = a.textContent.length), (o.isBreak(c) || c.nodeType === 3) && p > c.textContent.length && (p = c.textContent.length), o.isFormatElement(a) && (a = a.childNodes[r > 0 ? a.childNodes.length - 1 : 0] || a, r = r > 0 ? a.nodeType === 1 && !o.isBreak(a) ? 1 : a.textContent ? a.textContent.length : 0 : 0), o.isFormatElement(c) && (c = c.childNodes[p > 0 ? c.childNodes.length - 1 : 0] || c, p = p > 0 ? c.nodeType === 1 && !o.isBreak(c) ? 1 : c.textContent ? c.textContent.length : 0 : 0);
      const h = this._wd.createRange();
      try {
        r > a.textContent.length && (r = a.textContent.length), p > c.textContent.length && (p = c.textContent.length), h.setStart(a, r), h.setEnd(c, p);
      } catch (m) {
        console.warn("[SUNEDITOR.core.focus.error] " + m), this.nativeFocus();
        return;
      }
      const b = this.getSelection();
      return b.removeAllRanges && b.removeAllRanges(), b.addRange(h), this._rangeInfo(h, this.getSelection()), i.iframe && this.__focus(), h;
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
        const c = r.anchorNode, p = r.focusNode, h = r.anchorOffset, b = r.focusOffset, m = o.compareElements(c, p), y = m.ancestor && (m.result === 0 ? h <= b : m.result > 1);
        return this.setRange(
          y ? c : p,
          y ? h : b,
          y ? p : c,
          y ? b : h
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
        const c = e.element.wysiwyg, p = o.createElement(i.defaultTag);
        p.innerHTML = "<br>", c.insertBefore(p, r && r !== c ? r.nextElementSibling : c.firstElementChild), this.setRange(p.firstElementChild, 0, p.firstElementChild, 1), a = this._variable._range;
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
      let c = null;
      r.rangeCount > 0 ? c = r.getRangeAt(0) : c = this._createDefaultRange(), this._rangeInfo(c, r);
    },
    /**
     * @description Set "range" and "selection" info.
     * @param {Object} range range object.
     * @param {Object} selection selection object.
     */
    _rangeInfo: function(a, r) {
      let c = null;
      this._variable._range = a, a.collapsed ? o.isWysiwygDiv(a.commonAncestorContainer) ? c = a.commonAncestorContainer.children[a.startOffset] || a.commonAncestorContainer : c = a.commonAncestorContainer : c = r.extentNode || r.anchorNode, this._variable._selectionNode = c;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const a = e.element.wysiwyg, r = this._wd.createRange();
      let c = a.firstElementChild, p = null;
      return c ? (p = c.firstChild, p || (p = o.createElement("BR"), c.appendChild(p))) : (c = o.createElement(i.defaultTag), p = o.createElement("BR"), c.appendChild(p), a.appendChild(c)), r.setStart(p, 0), r.setEnd(p, 0), r;
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
      let c = a.startContainer, p = a.startOffset, h = a.endContainer, b = a.endOffset, m, y, w;
      if (o.isFormatElement(c))
        for (c.childNodes[p] ? (c = c.childNodes[p] || c, p = 0) : (c = c.lastChild || c, p = c.textContent.length); c && c.nodeType === 1 && c.firstChild; )
          c = c.firstChild || c, p = 0;
      if (o.isFormatElement(h)) {
        for (h = h.childNodes[b] || h.lastChild || h; h && h.nodeType === 1 && h.lastChild; )
          h = h.lastChild;
        b = r ? 0 : h.textContent.length;
      }
      if (m = o.isWysiwygDiv(c) ? e.element.wysiwyg.firstChild : c, y = p, o.isBreak(m) || m.nodeType === 1 && m.childNodes.length > 0) {
        const _ = o.isBreak(m);
        if (!_) {
          for (; m && !o.isBreak(m) && m.nodeType === 1; )
            m = m.childNodes[y] || m.nextElementSibling || m.nextSibling, y = 0;
          let C = o.getFormatElement(m, null);
          C === o.getRangeFormatElement(C, null) && (C = o.createElement(o.getParentElement(m, o.isCell) ? "DIV" : i.defaultTag), m.parentNode.insertBefore(C, m), C.appendChild(m));
        }
        if (o.isBreak(m)) {
          const C = o.createTextNode(o.zeroWidthSpace);
          m.parentNode.insertBefore(C, m), m = C, _ && c === h && (h = m, b = 1);
        }
      }
      if (c = m, p = y, m = o.isWysiwygDiv(h) ? e.element.wysiwyg.lastChild : h, y = b, o.isBreak(m) || m.nodeType === 1 && m.childNodes.length > 0) {
        const _ = o.isBreak(m);
        if (!_) {
          for (; m && !o.isBreak(m) && m.nodeType === 1 && (w = m.childNodes, w.length !== 0); )
            m = w[y > 0 ? y - 1 : y] || !/FIGURE/i.test(w[0].nodeName) ? w[0] : m.previousElementSibling || m.previousSibling || c, y = y > 0 ? m.textContent.length : y;
          let C = o.getFormatElement(m, null);
          C === o.getRangeFormatElement(C, null) && (C = o.createElement(o.isCell(C) ? "DIV" : i.defaultTag), m.parentNode.insertBefore(C, m), C.appendChild(m));
        }
        if (o.isBreak(m)) {
          const C = o.createTextNode(o.zeroWidthSpace);
          m.parentNode.insertBefore(C, m), m = C, y = 1, _ && !m.previousSibling && o.removeItem(h);
        }
      }
      return h = m, b = y, this.setRange(c, p, h, b), !0;
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
        const R = e.element.wysiwyg.children;
        if (R.length === 0) return [];
        this.setRange(R[0], 0, R[R.length - 1], R[R.length - 1].textContent.trim().length), r = this.getRange();
      }
      const c = r.startContainer, p = r.endContainer, h = r.commonAncestorContainer, b = o.getListChildren(h, function(R) {
        return a ? a(R) : o.isFormatElement(R);
      });
      if (!o.isWysiwygDiv(h) && !o.isRangeFormatElement(h) && b.unshift(o.getFormatElement(h, null)), c === p || b.length === 1) return b;
      let m = o.getFormatElement(c, null), y = o.getFormatElement(p, null), w = null, _ = null;
      const C = function(R) {
        return o.isTable(R) ? /^TABLE$/i.test(R.nodeName) : !0;
      };
      let N = o.getRangeFormatElement(m, C), E = o.getRangeFormatElement(y, C);
      o.isTable(N) && o.isListCell(N.parentNode) && (N = N.parentNode), o.isTable(E) && o.isListCell(E.parentNode) && (E = E.parentNode);
      const B = N === E;
      for (let R = 0, W = b.length, $; R < W; R++) {
        if ($ = b[R], m === $ || !B && $ === N) {
          w = R;
          continue;
        }
        if (y === $ || !B && $ === E) {
          _ = R;
          break;
        }
      }
      return w === null && (w = 0), _ === null && (_ = b.length - 1), b.slice(w, _ + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(a) {
      const r = this.getRange().commonAncestorContainer, c = o.getParentElement(r, o.isComponent), p = o.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(h) {
        const b = this.getParentElement(h, this.isComponent);
        return this.isFormatElement(h) && (!b || b === c) || this.isComponent(h) && !this.getFormatElement(h);
      }).bind(o));
      if (a) {
        for (let h = 0, b = p.length; h < b; h++)
          for (let m = h - 1; m >= 0; m--)
            if (p[m].contains(p[h])) {
              p.splice(h, 1), h--, b--;
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
    isEdgePoint: function(a, r, c) {
      return a.nodeType === 1 && !a.textContent.length ? !0 : c !== "end" && r === 0 || (!c || c !== "start") && !a.nodeValue && r === 1 || (!c || c === "end") && !!a.nodeValue && r === a.nodeValue.length;
    },
    /**
     * @description Check if the container and offset values are the edges of the format tag
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String} dir Select check point - "start": Front edge, "end": End edge, undefined: Both edge.
     * @returns {Array|null}
     * @private
     */
    _isEdgeFormat: function(a, r, c) {
      if (!this.isEdgePoint(a, r, c)) return !1;
      const p = [];
      for (c = c === "start" ? "previousSibling" : "nextSibling"; a && !o.isFormatElement(a) && !o.isWysiwygDiv(a); )
        if (!a[c] || o.isBreak(a[c]) && !a[c][c])
          a.nodeType === 1 && p.push(a.cloneNode(!1)), a = a.parentNode;
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
    appendFormatTag: function(a, r) {
      if (!a || !a.parentNode) return null;
      const c = o.getFormatElement(this.getSelectionNode(), null);
      let p = null;
      if (!o.isFormatElement(a) && o.isFreeFormatElement(c || a.parentNode))
        p = o.createElement("BR");
      else {
        const h = r ? typeof r == "string" ? r : r.nodeName : o.isFormatElement(c) && !o.isRangeFormatElement(c) && !o.isFreeFormatElement(c) ? c.nodeName : i.defaultTag;
        p = o.createElement(h), p.innerHTML = "<br>", (r && typeof r != "string" || !r && o.isFormatElement(c)) && o.copyTagAttributes(p, r || c, ["id"]);
      }
      return o.isCell(a) ? a.insertBefore(p, a.nextElementSibling) : a.parentNode.insertBefore(p, a.nextElementSibling), p;
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
    insertComponent: function(a, r, c, p) {
      if (this.isReadOnly || c && !this.checkCharCount(a, null))
        return null;
      const h = this.removeNode();
      this.getRange_addLine(this.getRange(), h.container);
      let b = null, m = this.getSelectionNode(), y = o.getFormatElement(m, null);
      if (o.isListCell(y))
        this.insertNode(a, m === y ? null : (m || h.container).nextSibling, !1), a.nextSibling || a.parentNode.appendChild(o.createElement("BR"));
      else {
        if (this.getRange().collapsed && (h.container.nodeType === 3 || o.isBreak(h.container))) {
          const w = o.getParentElement(h.container, (function(_) {
            return this.isRangeFormatElement(_);
          }).bind(o));
          b = o.splitElement(h.container, h.offset, w ? o.getElementDepth(w) + 1 : 0), b && (y = b.previousSibling);
        }
        this.insertNode(a, o.isRangeFormatElement(y) ? null : y, !1), y && o.onlyZeroWidthSpace(y) && o.removeItem(y);
      }
      if (!p) {
        this.setRange(a, 0, a, 0);
        const w = this.getFileComponent(a);
        w ? this.selectComponent(w.target, w.pluginName) : b && (b = o.getEdgeChildNodes(b, null).sc || b, this.setRange(b, 0, b, 0));
      }
      return r || this.history.push(1), b || a;
    },
    /**
     * @description Gets the file component and that plugin name
     * return: {target, component, pluginName} | null
     * @param {Element} element Target element (figure tag, component div, file tag)
     * @returns {Object|null}
     */
    getFileComponent: function(a) {
      if (!this._fileManager.queryString || !a) return null;
      let r, c;
      return (/^FIGURE$/i.test(a.nodeName) || /se-component/.test(a.className)) && (r = a.querySelector(this._fileManager.queryString)), !r && a.nodeName && this._fileManager.regExp.test(a.nodeName) && (r = a), r && (c = this._fileManager.pluginMap[r.nodeName.toLowerCase()], c) ? {
        target: r,
        component: o.getParentElement(r, o.isComponent),
        pluginName: c
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
      const c = this.plugins[r];
      c && f.setTimeout((function() {
        typeof c.select == "function" && this.callPlugin(r, c.select.bind(this, a), null), this._setComponentLineBreaker(a);
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
      const c = e.element.lineBreaker_t.style, p = e.element.lineBreaker_b.style, h = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : a, b = o.isListCell(r.parentNode);
      let m, y, w;
      (b ? !r.previousSibling || o.isComponent(r.previousElementSibling) : !o.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, m = o.getOffset(a, e.element.wysiwygFrame).top + y, w = h.offsetWidth / 2 / 2, c.top = m - y - 12 + "px", c.left = o.getOffset(h).left + w + "px", c.display = "block") : c.display = "none", (b ? !r.nextSibling || o.isComponent(r.nextElementSibling) : !o.isFormatElement(r.nextElementSibling)) ? (m || (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, m = o.getOffset(a, e.element.wysiwygFrame).top + y, w = h.offsetWidth / 2 / 2), p.top = m + h.offsetHeight - y - 12 + "px", p.left = o.getOffset(h).left + h.offsetWidth - w - 24 + "px", p.display = "block") : p.display = "none";
    },
    _checkDuplicateNode: function(a, r) {
      (function c(p) {
        d._dupleCheck(p, r);
        const h = p.childNodes;
        for (let b = 0, m = h.length; b < m; b++)
          c(h[b]);
      })(a);
    },
    _dupleCheck: function(a, r) {
      if (!o.isTextStyleElement(a)) return;
      const c = (a.style.cssText.match(/[^;]+;/g) || []).map(function(b) {
        return b.trim();
      }), p = a.nodeName;
      if (/^span$/i.test(p) && c.length === 0) return a;
      let h = !1;
      return (function b(m) {
        if (!(o.isWysiwygDiv(m) || !o.isTextStyleElement(m))) {
          if (m.nodeName === p) {
            h = !0;
            const y = m.style.cssText.match(/[^;]+;/g) || [];
            for (let w = 0, _ = y.length, C; w < _; w++)
              (C = c.indexOf(y[w].trim())) > -1 && c.splice(C, 1);
            for (let w = 0, _ = m.classList.length; w < _; w++)
              a.classList.remove(m.classList[w]);
          }
          b(m.parentElement);
        }
      })(r), h && ((a.style.cssText = c.join(" ")) || (a.setAttribute("style", ""), a.removeAttribute("style")), a.attributes.length || a.setAttribute("data-se-duple", "true")), a;
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
    insertNode: function(a, r, c) {
      if (this.isReadOnly || c && !this.checkCharCount(a, null))
        return null;
      let p = null, h = this.getRange(), b = o.isListCell(h.commonAncestorContainer) ? h.commonAncestorContainer : o.getFormatElement(this.getSelectionNode(), null), m = o.isListCell(b) && (o.isListCell(a) || o.isList(a)), y, w, _, C = null;
      const N = o.isFreeFormatElement(b), E = !N && (o.isFormatElement(a) || o.isRangeFormatElement(a)) || o.isComponent(a);
      if (m && (_ = r || o.isList(a) ? b.lastChild : b.nextElementSibling, C = o.isList(a) ? b : (_ || b).parentNode), !r && (E || o.isComponent(a) || o.isMedia(a))) {
        const I = this.isEdgePoint(h.endContainer, h.endOffset, "end"), D = this.removeNode(), U = D.container, M = U === D.prevContainer && h.collapsed ? null : D.prevContainer;
        if (m && M)
          if (C = M.nodeType === 3 ? M.parentNode : M, C.contains(U)) {
            let F = !0;
            for (_ = U; _.parentNode && _.parentNode !== C; )
              _ = _.parentNode, F = !1;
            F && U === M && (_ = _.nextSibling);
          } else
            _ = null;
        else if (m && o.isListCell(U) && !b.parentElement)
          b = o.createElement("LI"), C.appendChild(b), U.appendChild(C), _ = null;
        else if (U.nodeType === 3 || o.isBreak(U) || m) {
          const F = o.getParentElement(U, (function(A) {
            return this.isRangeFormatElement(A) || this.isListCell(A);
          }).bind(o));
          if (r = o.splitElement(U, D.offset, F ? o.getElementDepth(F) + 1 : 0), !r)
            o.isListCell(b) || (_ = r = b);
          else if (m) {
            if (b.contains(U)) {
              const A = o.isList(b.lastElementChild);
              let L = null;
              I || (L = b.cloneNode(!1), L.appendChild(r.textContent.trim() ? r : o.createTextNode(o.zeroWidthSpace))), A && (L || (L = b.cloneNode(!1), L.appendChild(o.createTextNode(o.zeroWidthSpace))), L.appendChild(b.lastElementChild)), L && (b.parentNode.insertBefore(L, b.nextElementSibling), _ = r = L);
            }
          } else
            r = r.previousSibling;
        }
      }
      h = !r && !E ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const B = h.commonAncestorContainer, R = h.startOffset, W = h.endOffset, $ = h.startContainer === B && o.isFormatElement(B), P = $ && (B.childNodes[R] || B.childNodes[0]) || h.startContainer, O = $ && (B.childNodes[W] || B.childNodes[B.childNodes.length - 1]) || h.endContainer;
      if (!m)
        if (r)
          y = r.parentNode, r = r.nextSibling, w = !0;
        else if (y = P, P.nodeType === 3 && (y = P.parentNode), h.collapsed)
          if (B.nodeType === 3)
            B.textContent.length > W ? r = B.splitText(W) : r = B.nextSibling;
          else if (o.isBreak(y))
            r = y, y = y.parentNode;
          else {
            let I = y.childNodes[R];
            const D = I && I.nodeType === 3 && o.onlyZeroWidthSpace(I) && o.isBreak(I.nextSibling) ? I.nextSibling : I;
            D ? !D.nextSibling && o.isBreak(D) ? (y.removeChild(D), r = null) : r = o.isBreak(D) && !o.isBreak(a) ? D : D.nextSibling : r = null;
          }
        else if (P === O) {
          this.isEdgePoint(O, W) ? r = O.nextSibling : r = O.splitText(W);
          let D = P;
          this.isEdgePoint(P, R) || (D = P.splitText(R)), y.removeChild(D), y.childNodes.length === 0 && E && (y.innerHTML = "<br>");
        } else {
          const D = this.removeNode(), U = D.container, M = D.prevContainer;
          if (U && U.childNodes.length === 0 && E && (o.isFormatElement(U) ? U.innerHTML = "<br>" : o.isRangeFormatElement(U) && (U.innerHTML = "<" + i.defaultTag + "><br></" + i.defaultTag + ">")), o.isListCell(U) && a.nodeType === 3)
            y = U, r = null;
          else if (!E && M)
            if (y = M.nodeType === 3 ? M.parentNode : M, y.contains(U)) {
              let F = !0;
              for (r = U; r.parentNode && r.parentNode !== y; )
                r = r.parentNode, F = !1;
              F && U === M && (r = r.nextSibling);
            } else
              r = null;
          else o.isWysiwygDiv(U) && !o.isFormatElement(a) ? (y = U.appendChild(o.createElement(i.defaultTag)), r = null) : (r = E ? O : U === M ? U.nextSibling : U, y = !r || !r.parentNode ? B : r.parentNode);
          for (; r && !o.isFormatElement(r) && r.parentNode !== B; )
            r = r.parentNode;
        }
      try {
        if (!m) {
          if ((o.isWysiwygDiv(r) || y === e.element.wysiwyg.parentNode) && (y = e.element.wysiwyg, r = null), o.isFormatElement(a) || o.isRangeFormatElement(a) || !o.isListCell(y) && o.isComponent(a)) {
            const I = y;
            if (o.isList(r))
              y = r, r = null;
            else if (o.isListCell(r))
              y = r.previousElementSibling || r;
            else if (!w && !r) {
              const D = this.removeNode(), U = D.container.nodeType === 3 ? o.isListCell(o.getFormatElement(D.container, null)) ? D.container : o.getFormatElement(D.container, null) || D.container.parentNode : D.container, M = o.isWysiwygDiv(U) || o.isRangeFormatElement(U);
              y = M ? U : U.parentNode, r = M ? null : U.nextSibling;
            }
            I.childNodes.length === 0 && y !== I && o.removeItem(I);
          }
          if (E && !N && !o.isRangeFormatElement(y) && !o.isListCell(y) && !o.isWysiwygDiv(y) && (r = y.nextElementSibling, y = y.parentNode), o.isWysiwygDiv(y) && (a.nodeType === 3 || o.isBreak(a))) {
            const I = o.createElement(i.defaultTag);
            I.appendChild(a), p = a, a = I;
          }
        }
        if (m ? C.parentNode ? (y = C, r = _) : (y = e.element.wysiwyg, r = null) : r = y === r ? y.lastChild : r, o.isListCell(a) && !o.isList(y)) {
          if (o.isListCell(y))
            r = y.nextElementSibling, y = y.parentNode;
          else {
            const I = o.createElement("ol");
            y.insertBefore(I, r), y = I, r = null;
          }
          m = !0;
        }
        if (this._checkDuplicateNode(a, y), y.insertBefore(a, r), m)
          if (o.onlyZeroWidthSpace(b.textContent.trim()))
            o.removeItem(b), a = a.lastChild;
          else {
            const I = o.getArrayItem(b.children, o.isList);
            I && (a !== I ? (a.appendChild(I), a = I.previousSibling) : (y.appendChild(a), a = y), o.onlyZeroWidthSpace(b.textContent.trim()) && o.removeItem(b));
          }
      } catch (I) {
        y.appendChild(a), console.warn("[SUNEDITOR.insertNode.warn] " + I);
      } finally {
        p && (a = p);
        const I = y.querySelectorAll("[data-se-duple]");
        if (I.length > 0)
          for (let D = 0, U = I.length, M, F, A, L; D < U; D++) {
            for (M = I[D], A = M.childNodes, L = M.parentNode; A[0]; )
              F = A[0], L.insertBefore(F, M);
            M === a && (a = F), o.removeItem(M);
          }
        if ((o.isFormatElement(a) || o.isComponent(a)) && P === O) {
          const D = o.getFormatElement(B, null);
          D && D.nodeType === 1 && o.isEmptyLine(D) && o.removeItem(D);
        }
        if (N && (o.isFormatElement(a) || o.isRangeFormatElement(a)) && (a = this._setIntoFreeFormat(a)), !o.isComponent(a)) {
          let D = 1;
          if (a.nodeType === 3)
            D = a.textContent.length, this.setRange(a, D, a, D);
          else if (!o.isBreak(a) && !o.isListCell(a) && o.isFormatElement(y)) {
            let U = null;
            (!a.previousSibling || o.isBreak(a.previousSibling)) && (U = o.createTextNode(o.zeroWidthSpace), a.parentNode.insertBefore(U, a)), (!a.nextSibling || o.isBreak(a.nextSibling)) && (U = o.createTextNode(o.zeroWidthSpace), a.parentNode.insertBefore(U, a.nextSibling)), o._isIgnoreNodeChange(a) && (a = a.nextSibling, D = 0);
          }
          this.setRange(a, D, a, D);
        }
        return a;
      }
    },
    _setIntoFreeFormat: function(a) {
      const r = a.parentNode;
      let c, p;
      for (; o.isFormatElement(a) || o.isRangeFormatElement(a); ) {
        for (c = a.childNodes, p = null; c[0]; ) {
          if (p = c[0], o.isFormatElement(p) || o.isRangeFormatElement(p)) {
            if (this._setIntoFreeFormat(p), !a.parentNode) break;
            c = a.childNodes;
            continue;
          }
          r.insertBefore(p, a);
        }
        a.childNodes.length === 0 && o.removeItem(a), a = o.createElement("BR"), r.insertBefore(a, p.nextSibling);
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
        const D = o.getParentElement(a.startContainer, o.isMediaComponent);
        if (D) {
          const U = o.createElement("BR"), M = o.createElement(i.defaultTag);
          return M.appendChild(U), o.changeElement(D, M), d.setRange(M, 0, M, 0), this.history.push(!0), {
            container: M,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = a.startOffset === 0, c = d.isEdgePoint(a.endContainer, a.endOffset, "end");
      let p = null, h = null, b = null;
      r && (h = o.getFormatElement(a.startContainer), h && (p = h.previousElementSibling, h = p)), c && (b = o.getFormatElement(a.endContainer), b = b && b.nextElementSibling);
      let m, y = 0, w = a.startContainer, _ = a.endContainer, C = a.startOffset, N = a.endOffset;
      const E = a.commonAncestorContainer.nodeType === 3 && a.commonAncestorContainer.parentNode === w.parentNode ? w.parentNode : a.commonAncestorContainer;
      if (E === w && E === _ && (w = E.children[C], _ = E.children[N], C = N = 0), !w || !_) return {
        container: E,
        offset: 0
      };
      if (w === _ && a.collapsed && w.textContent && o.onlyZeroWidthSpace(w.textContent.substr(C)))
        return {
          container: w,
          offset: C,
          prevContainer: w && w.parentNode ? w : null
        };
      let B = null, R = null;
      const W = o.getListChildNodes(E, null);
      let $ = o.getArrayIndex(W, w), P = o.getArrayIndex(W, _);
      if (W.length > 0 && $ > -1 && P > -1) {
        for (let D = $ + 1, U = w; D >= 0; D--)
          W[D] === U.parentNode && W[D].firstChild === U && C === 0 && ($ = D, U = U.parentNode);
        for (let D = P - 1, U = _; D > $; D--)
          W[D] === U.parentNode && W[D].nodeType === 1 && (W.splice(D, 1), U = U.parentNode, --P);
      } else {
        if (W.length === 0) {
          if (o.isFormatElement(E) || o.isRangeFormatElement(E) || o.isWysiwygDiv(E) || o.isBreak(E) || o.isMedia(E))
            return {
              container: E,
              offset: 0
            };
          if (E.nodeType === 3)
            return {
              container: E,
              offset: N
            };
          W.push(E), w = _ = E;
        } else if (w = _ = W[0], o.isBreak(w) || o.onlyZeroWidthSpace(w))
          return {
            container: o.isMedia(E) ? E : w,
            offset: 0
          };
        $ = P = 0;
      }
      for (let D = $; D <= P; D++) {
        const U = W[D];
        if (U.length === 0 || U.nodeType === 3 && U.data === void 0) {
          this._nodeRemoveListItem(U);
          continue;
        }
        if (U === w) {
          if (w.nodeType === 1) {
            if (o.isComponent(w)) continue;
            B = o.createTextNode(w.textContent);
          } else
            U === _ ? (B = o.createTextNode(w.substringData(0, C) + _.substringData(N, _.length - N)), y = C) : B = o.createTextNode(w.substringData(0, C));
          if (B.length > 0 ? w.data = B.data : this._nodeRemoveListItem(w), U === _) break;
          continue;
        }
        if (U === _) {
          if (_.nodeType === 1) {
            if (o.isComponent(_)) continue;
            R = o.createTextNode(_.textContent);
          } else
            R = o.createTextNode(_.substringData(N, _.length - N));
          R.length > 0 ? _.data = R.data : this._nodeRemoveListItem(_);
          continue;
        }
        this._nodeRemoveListItem(U);
      }
      const O = o.getParentElement(_, "ul"), I = o.getParentElement(w, "li");
      if (O && I && I.contains(O) ? (m = O.previousSibling, y = m.textContent.length) : (m = _ && _.parentNode ? _ : w && w.parentNode ? w : a.endContainer || a.startContainer, y = !r && !c ? y : c ? m.textContent.length : 0), !o.isWysiwygDiv(m) && m.childNodes.length === 0) {
        const D = o.removeItemAllParents(m, null, null);
        D && (m = D.sc || D.ec || e.element.wysiwyg);
      }
      return !o.getFormatElement(m) && !(w && w.parentNode) && (b ? (m = b, y = 0) : h && (m = h, y = 1)), this.setRange(m, y, m, y), this.history.push(!0), {
        container: m,
        offset: y,
        prevContainer: p
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
        for (let N = 0, E = r.length, B, R, W, $, P, O; N < E; N++)
          if (B = r[N], !!o.isListCell(B) && (R = B.lastElementChild, R && o.isListCell(B.nextElementSibling) && r.indexOf(B.nextElementSibling) > -1 && ($ = R.lastElementChild, r.indexOf($) > -1))) {
            let I = null;
            for (; I = $.lastElementChild; )
              if (o.isList(I))
                if (r.indexOf(I.lastElementChild) > -1)
                  $ = I.lastElementChild;
                else
                  continue e;
            W = R.firstElementChild, P = r.indexOf(W), O = r.indexOf($), r.splice(P, O - P + 1), E = r.length;
            continue;
          }
      let c = r[r.length - 1], p, h, b;
      o.isRangeFormatElement(c) || o.isFormatElement(c) ? p = c : p = o.getRangeFormatElement(c, null) || o.getFormatElement(c, null), o.isCell(p) ? (h = null, b = p) : (h = p.nextSibling, b = p.parentNode);
      let m = o.getElementDepth(p), y = null;
      const w = [], _ = function(N, E, B) {
        let R = null;
        if (N !== E && !o.isTable(E)) {
          if (E && o.getElementDepth(N) === o.getElementDepth(E)) return B;
          R = o.removeItemAllParents(E, null, N);
        }
        return R ? R.ec : B;
      };
      for (let N = 0, E = r.length, B, R, W, $, P, O, I; N < E; N++)
        if (B = r[N], R = B.parentNode, !(!R || a.contains(R)))
          if (W = o.getElementDepth(B), o.isList(R)) {
            if (y === null && (O ? (y = O, I = !0, O = null) : y = R.cloneNode(!1)), w.push(B), P = r[N + 1], N === E - 1 || P && P.parentNode !== R) {
              P && B.contains(P.parentNode) && (O = P.parentNode.cloneNode(!1));
              let D = R.parentNode, U;
              for (; o.isList(D); )
                U = o.createElement(D.nodeName), U.appendChild(y), y = U, D = D.parentNode;
              const M = this.detachRangeFormatElement(R, w, null, !0, !0);
              m >= W ? (m = W, b = M.cc, h = _(b, R, M.ec), h && (b = h.parentNode)) : b === M.cc && (h = M.ec), b !== M.cc && ($ = _(b, M.cc, $), $ !== void 0 ? h = $ : h = M.cc);
              for (let F = 0, A = M.removeArray.length; F < A; F++)
                y.appendChild(M.removeArray[F]);
              I || a.appendChild(y), O && M.removeArray[M.removeArray.length - 1].appendChild(O), y = null, I = !1;
            }
          } else
            m >= W && (m = W, b = R, h = B.nextSibling), a.appendChild(B), b !== R && ($ = _(b, R), $ !== void 0 && (h = $));
      if (this.effectNode = null, o.mergeSameTags(a, null, !1), o.mergeNestedTags(a, (function(N) {
        return this.isList(N);
      }).bind(o)), h && o.getElementDepth(h) > 0 && (o.isList(h.parentNode) || o.isList(h.parentNode.parentNode))) {
        const N = o.getParentElement(h, (function(B) {
          return this.isRangeFormatElement(B) && !this.isList(B);
        }).bind(o)), E = o.splitElement(h, null, N ? o.getElementDepth(N) + 1 : 0);
        E.parentNode.insertBefore(a, E);
      } else
        b.insertBefore(a, h), _(a, h);
      const C = o.getEdgeChildNodes(a.firstElementChild, a.lastElementChild);
      r.length > 1 ? this.setRange(C.sc, 0, C.ec, C.ec.textContent.length) : this.setRange(C.ec, C.ec.textContent.length, C.ec, C.ec.textContent.length), this.history.push(!1);
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
    detachRangeFormatElement: function(a, r, c, p, h) {
      const b = this.getRange();
      let m = b.startOffset, y = b.endOffset, w = o.getListChildNodes(a, function(M) {
        return M.parentNode === a;
      }), _ = a.parentNode, C = null, N = null, E = a.cloneNode(!1);
      const B = [], R = o.isList(c);
      let W = !1, $ = !1, P = !1;
      function O(M, F, A, L) {
        if (o.onlyZeroWidthSpace(F) && (F.innerHTML = o.zeroWidthSpace, m = y = 1), F.nodeType === 3)
          return M.insertBefore(F, A), F;
        const Z = (P ? F : L).childNodes;
        let G = F.cloneNode(!1), te = null, X = null;
        for (; Z[0]; )
          X = Z[0], o._notTextNode(X) && !o.isBreak(X) && !o.isListCell(G) ? (G.childNodes.length > 0 && (te || (te = G), M.insertBefore(G, A), G = F.cloneNode(!1)), M.insertBefore(X, A), te || (te = X)) : G.appendChild(X);
        if (G.childNodes.length > 0) {
          if (o.isListCell(M) && o.isListCell(G) && o.isList(A))
            if (R) {
              for (te = A; A; )
                G.appendChild(A), A = A.nextSibling;
              M.parentNode.insertBefore(G, M.nextElementSibling);
            } else {
              const Q = L.nextElementSibling, le = o.detachNestedList(L, !1);
              if (a !== le || Q !== L.nextElementSibling) {
                const ue = G.childNodes;
                for (; ue[0]; )
                  L.appendChild(ue[0]);
                a = le, $ = !0;
              }
            }
          else
            M.insertBefore(G, A);
          te || (te = G);
        }
        return te;
      }
      for (let M = 0, F = w.length, A, L, Z; M < F; M++)
        if (A = w[M], !(A.nodeType === 3 && o.isList(E)))
          if (P = !1, p && M === 0 && (!r || r.length === F || r[0] === A ? C = a.previousSibling : C = E), r && (L = r.indexOf(A)), r && L === -1)
            E || (E = a.cloneNode(!1)), E.appendChild(A);
          else {
            if (r && (Z = r[L + 1]), E && E.children.length > 0 && (_.insertBefore(E, a), E = null), !R && o.isListCell(A))
              if (Z && o.getElementDepth(A) !== o.getElementDepth(Z) && (o.isListCell(_) || o.getArrayItem(A.children, o.isList, !1))) {
                const G = A.nextElementSibling, te = o.detachNestedList(A, !1);
                (a !== te || G !== A.nextElementSibling) && (a = te, $ = !0);
              } else {
                const G = A;
                A = o.createElement(p ? G.nodeName : o.isList(a.parentNode) || o.isListCell(a.parentNode) ? "LI" : o.isCell(a.parentNode) ? "DIV" : i.defaultTag);
                const te = o.isListCell(A), X = G.childNodes;
                for (; X[0] && !(o.isList(X[0]) && !te); )
                  A.appendChild(X[0]);
                o.copyFormatAttributes(A, G), P = !0;
              }
            else
              A = A.cloneNode(!1);
            if (!$ && (p ? (B.push(A), o.removeItem(w[M])) : (c ? (W || (_.insertBefore(c, a), W = !0), A = O(c, A, null, w[M])) : A = O(_, A, a, w[M]), $ || (r ? (N = A, C || (C = A)) : C || (C = N = A))), $)) {
              $ = P = !1, w = o.getListChildNodes(a, function(G) {
                return G.parentNode === a;
              }), E = a.cloneNode(!1), _ = a.parentNode, M = -1, F = w.length;
              continue;
            }
          }
      const I = a.parentNode;
      let D = a.nextSibling;
      E && E.children.length > 0 && I.insertBefore(E, D), c ? C = c.previousSibling : C || (C = a.previousSibling), D = a.nextSibling !== E ? a.nextSibling : E ? E.nextSibling : null, a.children.length === 0 || a.textContent.length === 0 ? o.removeItem(a) : o.removeEmptyNode(a, null, !1);
      let U = null;
      if (p)
        U = {
          cc: I,
          sc: C,
          so: m,
          ec: D,
          eo: y,
          removeArray: B
        };
      else {
        C || (C = N), N || (N = C);
        const M = o.getEdgeChildNodes(C, N.parentNode ? C : N);
        U = {
          cc: (M.sc || M.ec).parentNode,
          sc: M.sc,
          so: m,
          ec: M.ec,
          eo: y,
          removeArray: null
        };
      }
      if (this.effectNode = null, h) return U;
      !p && U && (r ? this.setRange(U.sc, m, U.ec, y) : this.setRange(U.sc, 0, U.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(a, r) {
      let c = {}, p = !1, h = !1, b = null, m = null;
      const y = (function(w) {
        return !this.isComponent(w);
      }).bind(o);
      for (let w = 0, _ = a.length, C, N, E, B; w < _; w++) {
        if (E = w === _ - 1, N = o.getRangeFormatElement(a[w], y), B = o.isList(N), !C && B)
          C = N, c = { r: C, f: [o.getParentElement(a[w], "LI")] }, w === 0 && (p = !0);
        else if (C && B)
          if (C !== N) {
            const R = this.detachRangeFormatElement(c.f[0].parentNode, c.f, null, r, !0);
            N = a[w].parentNode, p && (b = R.sc, p = !1), E && (m = R.ec), B ? (C = N, c = { r: C, f: [o.getParentElement(a[w], "LI")] }, E && (h = !0)) : C = null;
          } else
            c.f.push(o.getParentElement(a[w], "LI")), E && (h = !0);
        if (E && o.isList(C)) {
          const R = this.detachRangeFormatElement(c.f[0].parentNode, c.f, null, r, !0);
          (h || _ === 1) && (m = R.ec), p && (b = R.sc || m);
        }
      }
      return {
        sc: b,
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
    nodeChange: function(a, r, c, p) {
      this._resetRangeToTextNode();
      let h = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, c = c && c.length > 0 ? c : !1;
      const b = !a, m = b && !c && !r;
      let y = h.startContainer, w = h.startOffset, _ = h.endContainer, C = h.endOffset;
      if (m && h.collapsed && o.isFormatElement(y.parentNode) || y === _ && y.nodeType === 1 && o.isNonEditable(y)) {
        const X = y.parentNode;
        if (!o.isListCell(X) || !o.getValues(X.style).some((function(Q) {
          return this._listKebab.indexOf(Q) > -1;
        }).bind(this))) return;
      }
      if (h.collapsed && !m && y.nodeType === 1 && !o.isBreak(y) && !o.isComponent(y)) {
        let X = null;
        const Q = y.childNodes[w];
        Q && (Q.nextSibling ? X = o.isBreak(Q) ? Q : Q.nextSibling : X = null);
        const le = o.createTextNode(o.zeroWidthSpace);
        y.insertBefore(le, X), this.setRange(le, 1, le, 1), h = this.getRange(), y = h.startContainer, w = h.startOffset, _ = h.endContainer, C = h.endOffset;
      }
      o.isFormatElement(y) && (y = y.childNodes[w] || y.firstChild, w = 0), o.isFormatElement(_) && (_ = _.childNodes[C] || _.lastChild, C = _.textContent.length), b && (a = o.createElement("DIV"));
      const N = f.RegExp, E = a.nodeName;
      if (!m && y === _ && !c && a) {
        let X = y, Q = 0;
        const le = [], ue = a.style;
        for (let ne = 0, pe = ue.length; ne < pe; ne++)
          le.push(ue[ne]);
        const de = a.classList;
        for (let ne = 0, pe = de.length; ne < pe; ne++)
          le.push("." + de[ne]);
        if (le.length > 0) {
          for (; !o.isFormatElement(X) && !o.isWysiwygDiv(X); ) {
            for (let ne = 0; ne < le.length; ne++)
              if (X.nodeType === 1) {
                const pe = le[ne], xe = /^\./.test(pe) ? new N("\\s*" + pe.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, Fe = b ? !!X.style[pe] : !!X.style[pe] && !!a.style[pe] && X.style[pe] === a.style[pe], ae = xe === !1 ? !1 : b ? !!X.className.match(xe) : !!X.className.match(xe) && !!a.className.match(xe);
                (Fe || ae) && Q++;
              }
            X = X.parentNode;
          }
          if (Q >= le.length) return;
        }
      }
      let B = {}, R = {}, W, $ = "", P = "", O = "";
      if (r) {
        for (let X = 0, Q = r.length, le; X < Q; X++)
          le = r[X], /^\./.test(le) ? P += (P ? "|" : "\\s*(?:") + le.replace(/^\./, "") : $ += ($ ? "|" : "(?:;|^|\\s)(?:") + le;
        $ && ($ += ")\\s*:[^;]*\\s*(?:;|$)", $ = new N($, "ig")), P && (P += ")(?=\\s+|$)", P = new N(P, "ig"));
      }
      if (c) {
        O = "^(?:" + c[0];
        for (let X = 1; X < c.length; X++)
          O += "|" + c[X];
        O += ")$", O = new N(O, "i");
      }
      const I = f.Boolean, D = { v: !1 }, U = function(X) {
        const Q = X.cloneNode(!1);
        if (Q.nodeType === 3 || o.isBreak(Q)) return Q;
        if (m) return null;
        const le = !O && b || O && O.test(Q.nodeName);
        if (le && !p)
          return D.v = !0, null;
        const ue = Q.style.cssText;
        let de = "";
        $ && ue.length > 0 && (de = ue.replace($, "").trim(), de !== ue && (D.v = !0));
        const ne = Q.className;
        let pe = "";
        return P && ne.length > 0 && (pe = ne.replace(P, "").trim(), pe !== ne && (D.v = !0)), b && (P || !ne) && ($ || !ue) && !de && !pe && le ? (D.v = !0, null) : de || pe || Q.nodeName !== E || I($) !== I(ue) || I(P) !== I(ne) ? ($ && ue.length > 0 && (Q.style.cssText = de), Q.style.cssText || Q.removeAttribute("style"), P && ne.length > 0 && (Q.className = pe.trim()), Q.className.trim() || Q.removeAttribute("class"), !Q.style.cssText && !Q.className && (Q.nodeName === E || le) ? (D.v = !0, null) : Q) : (D.v = !0, null);
      }, M = this.getSelectedElements(null);
      h = this.getRange(), y = h.startContainer, w = h.startOffset, _ = h.endContainer, C = h.endOffset, o.getFormatElement(y, null) || (y = o.getChildElement(M[0], function(X) {
        return X.nodeType === 3;
      }, !1), w = 0), o.getFormatElement(_, null) || (_ = o.getChildElement(M[M.length - 1], function(X) {
        return X.nodeType === 3;
      }, !1), C = _.textContent.length);
      const F = o.getFormatElement(y, null) === o.getFormatElement(_, null), A = M.length - (F ? 0 : 1);
      W = a.cloneNode(!1);
      const L = m || b && (function(X) {
        for (let Q = 0, le = X.length; Q < le; Q++)
          if (o._isMaintainedNode(X[Q]) || o._isSizeNode(X[Q])) return !0;
        return !1;
      })(c), Z = b || o._isSizeNode(W), G = this._util_getMaintainedNode.bind(o, L, Z), te = this._util_isMaintainedNode.bind(o, L, Z);
      if (F) {
        this._resetCommonListCell(M[0], r) && (h = this.setRange(y, w, _, C));
        const X = this._nodeChange_oneLine(M[0], W, U, y, w, _, C, m, b, h.collapsed, D, G, te);
        B.container = X.startContainer, B.offset = X.startOffset, R.container = X.endContainer, R.offset = X.endOffset, B.container === R.container && o.onlyZeroWidthSpace(B.container) && (B.offset = R.offset = 1), this._setCommonListStyle(X.ancestor, null);
      } else {
        let X = !1;
        A > 0 && this._resetCommonListCell(M[A], r) && (X = !0), this._resetCommonListCell(M[0], r) && (X = !0), X && this.setRange(y, w, _, C), A > 0 && (W = a.cloneNode(!1), R = this._nodeChange_endLine(M[A], W, U, _, C, m, b, D, G, te));
        for (let Q = A - 1, le; Q > 0; Q--)
          this._resetCommonListCell(M[Q], r), W = a.cloneNode(!1), le = this._nodeChange_middleLine(M[Q], W, U, m, b, D, R.container), le.endContainer && le.ancestor.contains(le.endContainer) && (R.ancestor = null, R.container = le.endContainer), this._setCommonListStyle(le.ancestor, null);
        W = a.cloneNode(!1), B = this._nodeChange_startLine(M[0], W, U, y, w, m, b, D, G, te, R.container), B.endContainer && (R.ancestor = null, R.container = B.endContainer), A <= 0 ? R = B : R.container || (R.ancestor = null, R.container = B.container, R.offset = B.container.textContent.length), this._setCommonListStyle(B.ancestor, null), this._setCommonListStyle(R.ancestor || o.getFormatElement(R.container), null);
      }
      this.controllersOff(), this.setRange(B.container, B.offset, R.container, R.offset), this.history.push(!1);
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
      const c = o.getArrayItem(a.childNodes, function(N) {
        return !o.isBreak(N);
      }, !0), p = a.style, h = [], b = [], m = o.getValues(p);
      for (let N = 0, E = this._listKebab.length; N < E; N++)
        m.indexOf(this._listKebab[N]) > -1 && r.indexOf(this._listKebab[N]) > -1 && (h.push(this._listCamel[N]), b.push(this._listKebab[N]));
      if (!h.length) return;
      const y = o.createElement("SPAN");
      for (let N = 0, E = h.length; N < E; N++)
        y.style[h[N]] = p[b[N]], p.removeProperty(b[N]);
      let w = y.cloneNode(!1), _ = null, C = !1;
      for (let N = 0, E = c.length, B, R; N < E; N++)
        B = c[N], !i._textTagsMap[B.nodeName.toLowerCase()] && (R = o.getValues(B.style), R.length === 0 || h.some(function(W) {
          return R.indexOf(W) === -1;
        }) && R.some(function(W) {
        }) ? (_ = B.nextSibling, w.appendChild(B)) : w.childNodes.length > 0 && (a.insertBefore(w, _), w = y.cloneNode(!1), _ = null, C = !0));
      return w.childNodes.length > 0 && (a.insertBefore(w, _), C = !0), p.length || a.removeAttribute("style"), C;
    },
    /**
     * @description If certain styles are applied to all child nodes of the list cell, the style of the list cell is also changed. (bold, color, size)
     * @param {Element} el List cell element. <li>
     * @param {Element|null} child Variable for recursive call. ("null" on the first call)
     * @private
     */
    _setCommonListStyle: function(a, r) {
      if (!o.isListCell(a)) return;
      const c = o.getArrayItem((r || a).childNodes, function(w) {
        return !o.isBreak(w);
      }, !0);
      if (r = c[0], !r || c.length > 1 || r.nodeType !== 1) return;
      const p = r.style, h = a.style, b = r.nodeName.toLowerCase();
      let m = !1;
      i._textTagsMap[b] === i._defaultCommand.bold.toLowerCase() && (h.fontWeight = "bold"), i._textTagsMap[b] === i._defaultCommand.italic.toLowerCase() && (h.fontStyle = "italic");
      const y = o.getValues(p);
      if (y.length > 0)
        for (let w = 0, _ = this._listCamel.length; w < _; w++)
          y.indexOf(this._listKebab[w]) > -1 && (h[this._listCamel[w]] = p[this._listCamel[w]], p.removeProperty(this._listKebab[w]), m = !0);
      if (this._setCommonListStyle(a, r), !!m && !p.length) {
        const w = r.childNodes, _ = r.parentNode, C = r.nextSibling;
        for (; w.length > 0; )
          _.insertBefore(w[0], C);
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
      const c = a.childNodes;
      for (; c[0]; )
        r.insertBefore(c[0], a);
      r.removeChild(a);
    },
    /**
     * @description Return the parent maintained tag. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_getMaintainedNode: function(a, r, c) {
      return !c || a ? null : this.getParentElement(c, this._isMaintainedNode.bind(this)) || (r ? null : this.getParentElement(c, this._isSizeNode.bind(this)));
    },
    /**
     * @description Check if element is a tag that should be persisted. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_isMaintainedNode: function(a, r, c) {
      if (!c || a || c.nodeType !== 1) return !1;
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
    _nodeChange_oneLine: function(a, r, c, p, h, b, m, y, w, _, C, N, E) {
      let B = p.parentNode;
      for (; !B.nextSibling && !B.previousSibling && !o.isFormatElement(B.parentNode) && !o.isWysiwygDiv(B.parentNode) && B.nodeName !== r.nodeName; )
        B = B.parentNode;
      if (!w && B === b.parentNode && B.nodeName === r.nodeName && o.onlyZeroWidthSpace(p.textContent.slice(0, h)) && o.onlyZeroWidthSpace(b.textContent.slice(m))) {
        const ae = B.childNodes;
        let Ae = !0;
        for (let Se = 0, tt = ae.length, Pe, Ge, He, we; Se < tt; Se++) {
          if (Pe = ae[Se], we = !o.onlyZeroWidthSpace(Pe), Pe === p) {
            Ge = !0;
            continue;
          }
          if (Pe === b) {
            He = !0;
            continue;
          }
          if (!Ge && we || Ge && He && we) {
            Ae = !1;
            break;
          }
        }
        if (Ae)
          return o.copyTagAttributes(B, r), {
            ancestor: a,
            startContainer: p,
            startOffset: h,
            endContainer: b,
            endOffset: m
          };
      }
      C.v = !1;
      const R = a, W = [r], $ = a.cloneNode(!1), P = p === b;
      let O = p, I = h, D = b, U = m, M = !1, F = !1, A, L, Z, G, te;
      const X = f.RegExp;
      function Q(ae) {
        const Ae = new X("(?:;|^|\\s)(?:" + G + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let Se = "";
        return Ae && ae.style.cssText.length > 0 && (Se = Ae.test(ae.style.cssText)), !Se;
      }
      if ((function ae(Ae, Se) {
        const tt = Ae.childNodes;
        for (let Pe = 0, Ge = tt.length, He; Pe < Ge; Pe++) {
          let we = tt[Pe];
          if (!we) continue;
          let Mt = Se, Xe;
          if (!M && we === O) {
            let Ue = $;
            te = N(we);
            const Be = o.createTextNode(O.nodeType === 1 ? "" : O.substringData(0, I)), De = o.createTextNode(
              O.nodeType === 1 ? "" : O.substringData(
                I,
                P && U >= I ? U - I : O.data.length - I
              )
            );
            if (te) {
              const ht = N(Se);
              if (ht && ht.parentNode !== Ue) {
                let Ke = ht, _t = null;
                for (; Ke.parentNode !== Ue; ) {
                  for (Se = _t = Ke.parentNode.cloneNode(!1); Ke.childNodes[0]; )
                    _t.appendChild(Ke.childNodes[0]);
                  Ke.appendChild(_t), Ke = Ke.parentNode;
                }
                Ke.parentNode.appendChild(ht);
              }
              te = te.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(Be) || Se.appendChild(Be);
            const Me = N(Se);
            for (Me && (te = Me), te && (Ue = te), L = we, A = [], G = ""; L !== Ue && L !== R && L !== null; )
              He = E(L) ? null : c(L), He && L.nodeType === 1 && Q(L) && (A.push(He), G += L.style.cssText.substr(0, L.style.cssText.indexOf(":")) + "|"), L = L.parentNode;
            const pt = A.pop() || De;
            for (Z = L = pt; A.length > 0; )
              L = A.pop(), Z.appendChild(L), Z = L;
            if (r.appendChild(pt), Ue.appendChild(r), te && !N(D) && (r = r.cloneNode(!1), $.appendChild(r), W.push(r)), O = De, I = 0, M = !0, L !== De && L.appendChild(O), !P) continue;
          }
          if (!F && we === D) {
            te = N(we);
            const Ue = o.createTextNode(D.nodeType === 1 ? "" : D.substringData(U, D.length - U)), Be = o.createTextNode(P || D.nodeType === 1 ? "" : D.substringData(0, U));
            if (te ? te = te.cloneNode(!1) : E(r.parentNode) && !te && (r = r.cloneNode(!1), $.appendChild(r), W.push(r)), !o.onlyZeroWidthSpace(Ue)) {
              L = we, G = "", A = [];
              const Me = [];
              for (; L !== $ && L !== R && L !== null; )
                L.nodeType === 1 && Q(L) && (E(L) ? Me.push(L.cloneNode(!1)) : A.push(L.cloneNode(!1)), G += L.style.cssText.substr(0, L.style.cssText.indexOf(":")) + "|"), L = L.parentNode;
              for (A = A.concat(Me), Xe = Z = L = A.pop() || Ue; A.length > 0; )
                L = A.pop(), Z.appendChild(L), Z = L;
              $.appendChild(Xe), L.textContent = Ue.data;
            }
            if (te && Xe) {
              const Me = N(Xe);
              Me && (te = Me);
            }
            for (L = we, A = [], G = ""; L !== $ && L !== R && L !== null; )
              He = E(L) ? null : c(L), He && L.nodeType === 1 && Q(L) && (A.push(He), G += L.style.cssText.substr(0, L.style.cssText.indexOf(":")) + "|"), L = L.parentNode;
            const De = A.pop() || Be;
            for (Z = L = De; A.length > 0; )
              L = A.pop(), Z.appendChild(L), Z = L;
            te ? (r = r.cloneNode(!1), r.appendChild(De), te.insertBefore(r, te.firstChild), $.appendChild(te), W.push(r), te = null) : r.appendChild(De), D = Be, U = Be.data.length, F = !0, !y && _ && (r = Be, Be.textContent = o.zeroWidthSpace), L !== Be && L.appendChild(D);
            continue;
          }
          if (M) {
            if (we.nodeType === 1 && !o.isBreak(we)) {
              o._isIgnoreNodeChange(we) ? ($.appendChild(we.cloneNode(!0)), _ || (r = r.cloneNode(!1), $.appendChild(r), W.push(r))) : ae(we, we);
              continue;
            }
            L = we, A = [], G = "";
            const Ue = [];
            for (; L.parentNode !== null && L !== R && L !== r; )
              He = F ? L.cloneNode(!1) : c(L), L.nodeType === 1 && !o.isBreak(we) && He && Q(L) && (E(L) ? te || Ue.push(He) : A.push(He), G += L.style.cssText.substr(0, L.style.cssText.indexOf(":")) + "|"), L = L.parentNode;
            A = A.concat(Ue);
            const Be = A.pop() || we;
            for (Z = L = Be; A.length > 0; )
              L = A.pop(), Z.appendChild(L), Z = L;
            if (E(r.parentNode) && !E(Be) && !o.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), $.appendChild(r), W.push(r)), !F && !te && E(Be)) {
              r = r.cloneNode(!1);
              const De = Be.childNodes;
              for (let Me = 0, pt = De.length; Me < pt; Me++)
                r.appendChild(De[Me]);
              Be.appendChild(r), $.appendChild(Be), W.push(r), r.children.length > 0 ? Se = L : Se = r;
            } else Be === we ? F ? Se = $ : Se = r : F ? ($.appendChild(Be), Se = L) : (r.appendChild(Be), Se = L);
            if (te && we.nodeType === 3)
              if (N(we)) {
                const De = o.getParentElement(Se, (function(Me) {
                  return this._isMaintainedNode(Me.parentNode) || Me.parentNode === $;
                }).bind(o));
                te.appendChild(De), r = De.cloneNode(!1), W.push(r), $.appendChild(r);
              } else
                te = null;
          }
          Xe = we.cloneNode(!1), Se.appendChild(Xe), we.nodeType === 1 && !o.isBreak(we) && (Mt = Xe), ae(we, Mt);
        }
      })(a, $), w && !y && !C.v)
        return {
          ancestor: a,
          startContainer: p,
          startOffset: h,
          endContainer: b,
          endOffset: m
        };
      if (y = y && w, y)
        for (let ae = 0; ae < W.length; ae++) {
          let Ae = W[ae], Se, tt, Pe;
          if (_)
            Se = o.createTextNode(o.zeroWidthSpace), $.replaceChild(Se, Ae);
          else {
            const Ge = Ae.childNodes;
            for (tt = Ge[0]; Ge[0]; )
              Pe = Ge[0], $.insertBefore(Pe, Ae);
            o.removeItem(Ae);
          }
          ae === 0 && (_ ? O = D = Se : (O = tt, D = Pe));
        }
      else {
        if (w)
          for (let ae = 0; ae < W.length; ae++)
            this._stripRemoveNode(W[ae]);
        _ && (O = D = r);
      }
      o.removeEmptyNode($, r, !1), _ && (I = O.textContent.length, U = D.textContent.length);
      const le = y || D.textContent.length === 0;
      !o.isBreak(D) && D.textContent.length === 0 && (o.removeItem(D), D = O), U = le ? D.textContent.length : U;
      const ue = { s: 0, e: 0 }, de = o.getNodePath(O, $, ue), ne = !D.parentNode;
      ne && (D = O);
      const pe = { s: 0, e: 0 }, xe = o.getNodePath(D, $, !ne && !le ? pe : null);
      I += ue.s, U = _ ? I : ne ? O.textContent.length : le ? U + ue.s : U + pe.s;
      const Fe = o.mergeSameTags($, [de, xe], !0);
      return a.parentNode.replaceChild($, a), O = o.getNodeFromPath(de, $), D = o.getNodeFromPath(xe, $), {
        ancestor: $,
        startContainer: O,
        startOffset: I + Fe[0],
        endContainer: D,
        endOffset: U + Fe[1]
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
    _nodeChange_startLine: function(a, r, c, p, h, b, m, y, w, _, C) {
      let N = p.parentNode;
      for (; !N.nextSibling && !N.previousSibling && !o.isFormatElement(N.parentNode) && !o.isWysiwygDiv(N.parentNode) && N.nodeName !== r.nodeName; )
        N = N.parentNode;
      if (!m && N.nodeName === r.nodeName && !o.isFormatElement(N) && !N.nextSibling && o.onlyZeroWidthSpace(p.textContent.slice(0, h))) {
        let M = !0, F = p.previousSibling;
        for (; F; ) {
          if (!o.onlyZeroWidthSpace(F)) {
            M = !1;
            break;
          }
          F = F.previousSibling;
        }
        if (M)
          return o.copyTagAttributes(N, r), {
            ancestor: a,
            container: p,
            offset: h
          };
      }
      y.v = !1;
      const E = a, B = [r], R = a.cloneNode(!1);
      let W = p, $ = h, P = !1, O, I, D, U;
      if ((function M(F, A) {
        const L = F.childNodes;
        for (let Z = 0, G = L.length, te, X; Z < G; Z++) {
          const Q = L[Z];
          if (!Q) continue;
          let le = A;
          if (P && !o.isBreak(Q)) {
            if (Q.nodeType === 1) {
              if (o._isIgnoreNodeChange(Q)) {
                if (r = r.cloneNode(!1), X = Q.cloneNode(!0), R.appendChild(X), R.appendChild(r), B.push(r), C && Q.contains(C)) {
                  const pe = o.getNodePath(C, Q);
                  C = o.getNodeFromPath(pe, X);
                }
              } else
                M(Q, Q);
              continue;
            }
            I = Q, O = [];
            const ue = [];
            for (; I.parentNode !== null && I !== E && I !== r; )
              te = c(I), I.nodeType === 1 && te && (_(I) ? U || ue.push(te) : O.push(te)), I = I.parentNode;
            O = O.concat(ue);
            const de = O.length > 0, ne = O.pop() || Q;
            for (D = I = ne; O.length > 0; )
              I = O.pop(), D.appendChild(I), D = I;
            if (_(r.parentNode) && !_(ne) && (r = r.cloneNode(!1), R.appendChild(r), B.push(r)), !U && _(ne)) {
              r = r.cloneNode(!1);
              const pe = ne.childNodes;
              for (let xe = 0, Fe = pe.length; xe < Fe; xe++)
                r.appendChild(pe[xe]);
              ne.appendChild(r), R.appendChild(ne), A = _(I) ? r : I, B.push(r);
            } else de ? (r.appendChild(ne), A = I) : A = r;
            if (U && Q.nodeType === 3)
              if (w(Q)) {
                const pe = o.getParentElement(A, (function(xe) {
                  return this._isMaintainedNode(xe.parentNode) || xe.parentNode === R;
                }).bind(o));
                U.appendChild(pe), r = pe.cloneNode(!1), B.push(r), R.appendChild(r);
              } else
                U = null;
          }
          if (!P && Q === W) {
            let ue = R;
            U = w(Q);
            const de = o.createTextNode(W.nodeType === 1 ? "" : W.substringData(0, $)), ne = o.createTextNode(W.nodeType === 1 ? "" : W.substringData($, W.length - $));
            if (U) {
              const Fe = w(A);
              if (Fe && Fe.parentNode !== ue) {
                let ae = Fe, Ae = null;
                for (; ae.parentNode !== ue; ) {
                  for (A = Ae = ae.parentNode.cloneNode(!1); ae.childNodes[0]; )
                    Ae.appendChild(ae.childNodes[0]);
                  ae.appendChild(Ae), ae = ae.parentNode;
                }
                ae.parentNode.appendChild(Fe);
              }
              U = U.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(de) || A.appendChild(de);
            const pe = w(A);
            for (pe && (U = pe), U && (ue = U), I = A, O = []; I !== ue && I !== null; )
              te = c(I), I.nodeType === 1 && te && O.push(te), I = I.parentNode;
            const xe = O.pop() || A;
            for (D = I = xe; O.length > 0; )
              I = O.pop(), D.appendChild(I), D = I;
            xe !== A ? (r.appendChild(xe), A = I) : A = r, o.isBreak(Q) && r.appendChild(Q.cloneNode(!1)), ue.appendChild(r), W = ne, $ = 0, P = !0, A.appendChild(W);
            continue;
          }
          te = P ? c(Q) : Q.cloneNode(!1), te && (A.appendChild(te), Q.nodeType === 1 && !o.isBreak(Q) && (le = te)), M(Q, le);
        }
      })(a, R), m && !b && !y.v)
        return {
          ancestor: a,
          container: p,
          offset: h,
          endContainer: C
        };
      if (b = b && m, b)
        for (let M = 0; M < B.length; M++) {
          let F = B[M];
          const A = F.childNodes, L = A[0];
          for (; A[0]; )
            R.insertBefore(A[0], F);
          o.removeItem(F), M === 0 && (W = L);
        }
      else if (m) {
        r = r.firstChild;
        for (let M = 0; M < B.length; M++)
          this._stripRemoveNode(B[M]);
      }
      if (!b && R.childNodes.length === 0)
        a.childNodes ? W = a.childNodes[0] : (W = o.createTextNode(o.zeroWidthSpace), a.appendChild(W));
      else {
        o.removeEmptyNode(R, r, !1), o.onlyZeroWidthSpace(R.textContent) && (W = R.firstChild, $ = 0);
        const M = { s: 0, e: 0 }, F = o.getNodePath(W, R, M);
        $ += M.s;
        const A = o.mergeSameTags(R, [F], !0);
        a.parentNode.replaceChild(R, a), W = o.getNodeFromPath(F, R), $ += A[0];
      }
      return {
        ancestor: R,
        container: W,
        offset: $,
        endContainer: C
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
    _nodeChange_middleLine: function(a, r, c, p, h, b, m) {
      if (!h) {
        let C = null;
        m && a.contains(m) && (C = o.getNodePath(m, a));
        const N = a.cloneNode(!0), E = r.nodeName, B = r.style.cssText, R = r.className;
        let W = N.childNodes, $ = 0, P = W.length;
        for (let O; $ < P && (O = W[$], O.nodeType !== 3); $++)
          if (O.nodeName === E)
            O.style.cssText += B, o.addClass(O, R);
          else {
            if (!o.isBreak(O) && o._isIgnoreNodeChange(O))
              continue;
            if (P === 1) {
              W = O.childNodes, P = W.length, $ = -1;
              continue;
            } else
              break;
          }
        if (P > 0 && $ === P)
          return a.innerHTML = N.innerHTML, {
            ancestor: a,
            endContainer: C ? o.getNodeFromPath(C, a) : null
          };
      }
      b.v = !1;
      const y = a.cloneNode(!1), w = [r];
      let _ = !0;
      if ((function C(N, E) {
        const B = N.childNodes;
        for (let R = 0, W = B.length, $, P; R < W; R++) {
          let O = B[R];
          if (!O) continue;
          let I = E;
          if (!o.isBreak(O) && o._isIgnoreNodeChange(O)) {
            if (r.childNodes.length > 0 && (y.appendChild(r), r = r.cloneNode(!1)), P = O.cloneNode(!0), y.appendChild(P), y.appendChild(r), w.push(r), E = r, m && O.contains(m)) {
              const D = o.getNodePath(m, O);
              m = o.getNodeFromPath(D, P);
            }
            continue;
          } else
            $ = c(O), $ && (_ = !1, E.appendChild($), O.nodeType === 1 && (I = $));
          o.isBreak(O) || C(O, I);
        }
      })(a, r), _ || h && !p && !b.v) return { ancestor: a, endContainer: m };
      if (y.appendChild(r), p && h)
        for (let C = 0; C < w.length; C++) {
          let N = w[C];
          const E = N.childNodes;
          for (; E[0]; )
            y.insertBefore(E[0], N);
          o.removeItem(N);
        }
      else if (h) {
        r = r.firstChild;
        for (let C = 0; C < w.length; C++)
          this._stripRemoveNode(w[C]);
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
    _nodeChange_endLine: function(a, r, c, p, h, b, m, y, w, _) {
      let C = p.parentNode;
      for (; !C.nextSibling && !C.previousSibling && !o.isFormatElement(C.parentNode) && !o.isWysiwygDiv(C.parentNode) && C.nodeName !== r.nodeName; )
        C = C.parentNode;
      if (!m && C.nodeName === r.nodeName && !o.isFormatElement(C) && !C.previousSibling && o.onlyZeroWidthSpace(p.textContent.slice(h))) {
        let U = !0, M = p.nextSibling;
        for (; M; ) {
          if (!o.onlyZeroWidthSpace(M)) {
            U = !1;
            break;
          }
          M = M.nextSibling;
        }
        if (U)
          return o.copyTagAttributes(C, r), {
            ancestor: a,
            container: p,
            offset: h
          };
      }
      y.v = !1;
      const N = a, E = [r], B = a.cloneNode(!1);
      let R = p, W = h, $ = !1, P, O, I, D;
      if ((function U(M, F) {
        const A = M.childNodes;
        for (let L = A.length - 1, Z; 0 <= L; L--) {
          const G = A[L];
          if (!G) continue;
          let te = F;
          if ($ && !o.isBreak(G)) {
            if (G.nodeType === 1) {
              if (o._isIgnoreNodeChange(G)) {
                r = r.cloneNode(!1);
                const ue = G.cloneNode(!0);
                B.insertBefore(ue, F), B.insertBefore(r, ue), E.push(r);
              } else
                U(G, G);
              continue;
            }
            O = G, P = [];
            const X = [];
            for (; O.parentNode !== null && O !== N && O !== r; )
              Z = c(O), Z && O.nodeType === 1 && (_(O) ? D || X.push(Z) : P.push(Z)), O = O.parentNode;
            P = P.concat(X);
            const Q = P.length > 0, le = P.pop() || G;
            for (I = O = le; P.length > 0; )
              O = P.pop(), I.appendChild(O), I = O;
            if (_(r.parentNode) && !_(le) && (r = r.cloneNode(!1), B.insertBefore(r, B.firstChild), E.push(r)), !D && _(le)) {
              r = r.cloneNode(!1);
              const ue = le.childNodes;
              for (let de = 0, ne = ue.length; de < ne; de++)
                r.appendChild(ue[de]);
              le.appendChild(r), B.insertBefore(le, B.firstChild), E.push(r), r.children.length > 0 ? F = O : F = r;
            } else Q ? (r.insertBefore(le, r.firstChild), F = O) : F = r;
            if (D && G.nodeType === 3)
              if (w(G)) {
                const ue = o.getParentElement(F, (function(de) {
                  return this._isMaintainedNode(de.parentNode) || de.parentNode === B;
                }).bind(o));
                D.appendChild(ue), r = ue.cloneNode(!1), E.push(r), B.insertBefore(r, B.firstChild);
              } else
                D = null;
          }
          if (!$ && G === R) {
            D = w(G);
            const X = o.createTextNode(R.nodeType === 1 ? "" : R.substringData(W, R.length - W)), Q = o.createTextNode(R.nodeType === 1 ? "" : R.substringData(0, W));
            if (D) {
              D = D.cloneNode(!1);
              const ue = w(F);
              if (ue && ue.parentNode !== B) {
                let de = ue, ne = null;
                for (; de.parentNode !== B; ) {
                  for (F = ne = de.parentNode.cloneNode(!1); de.childNodes[0]; )
                    ne.appendChild(de.childNodes[0]);
                  de.appendChild(ne), de = de.parentNode;
                }
                de.parentNode.insertBefore(ue, de.parentNode.firstChild);
              }
              D = D.cloneNode(!1);
            } else _(r.parentNode) && !D && (r = r.cloneNode(!1), B.appendChild(r), E.push(r));
            for (o.onlyZeroWidthSpace(X) || F.insertBefore(X, F.firstChild), O = F, P = []; O !== B && O !== null; )
              Z = _(O) ? null : c(O), Z && O.nodeType === 1 && P.push(Z), O = O.parentNode;
            const le = P.pop() || F;
            for (I = O = le; P.length > 0; )
              O = P.pop(), I.appendChild(O), I = O;
            le !== F ? (r.insertBefore(le, r.firstChild), F = O) : F = r, o.isBreak(G) && r.appendChild(G.cloneNode(!1)), D ? (D.insertBefore(r, D.firstChild), B.insertBefore(D, B.firstChild), D = null) : B.insertBefore(r, B.firstChild), R = Q, W = Q.data.length, $ = !0, F.insertBefore(R, F.firstChild);
            continue;
          }
          Z = $ ? c(G) : G.cloneNode(!1), Z && (F.insertBefore(Z, F.firstChild), G.nodeType === 1 && !o.isBreak(G) && (te = Z)), U(G, te);
        }
      })(a, B), m && !b && !y.v)
        return {
          ancestor: a,
          container: p,
          offset: h
        };
      if (b = b && m, b)
        for (let U = 0; U < E.length; U++) {
          let M = E[U];
          const F = M.childNodes;
          let A = null;
          for (; F[0]; )
            A = F[0], B.insertBefore(A, M);
          o.removeItem(M), U === E.length - 1 && (R = A, W = A.textContent.length);
        }
      else if (m) {
        r = r.firstChild;
        for (let U = 0; U < E.length; U++)
          this._stripRemoveNode(E[U]);
      }
      if (!b && B.childNodes.length === 0)
        a.childNodes ? R = a.childNodes[0] : (R = o.createTextNode(o.zeroWidthSpace), a.appendChild(R));
      else {
        if (!m && r.textContent.length === 0)
          return o.removeEmptyNode(B, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        o.removeEmptyNode(B, r, !1), o.onlyZeroWidthSpace(B.textContent) ? (R = B.firstChild, W = R.textContent.length) : o.onlyZeroWidthSpace(R) && (R = r, W = 1);
        const U = { s: 0, e: 0 }, M = o.getNodePath(R, B, U);
        W += U.s;
        const F = o.mergeSameTags(B, [M], !0);
        a.parentNode.replaceChild(B, a), R = o.getNodeFromPath(M, B), W += F[0];
      }
      return {
        ancestor: B,
        container: R,
        offset: R.nodeType === 1 && W === 1 ? R.childNodes.length : W
      };
    },
    /**
     * @description Run plugin calls and basic commands.
     * @param {String} command Command string
     * @param {String} display Display type string ('command', 'submenu', 'dialog', 'container')
     * @param {Element} target The element of command button
     */
    actionCall: function(a, r, c) {
      if (r) {
        if (/more/i.test(r)) {
          if (c !== this._moreLayerActiveButton) {
            const p = e.element.toolbar.querySelector("." + a);
            p && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = c, p.style.display = "block", v._showToolbarBalloon(), v._showToolbarInline()), o.addClass(c, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), v._showToolbarBalloon(), v._showToolbarInline());
          return;
        }
        if (/container/.test(r) && (this._menuTray[a] === null || c !== this.containerActiveButton)) {
          this.callPlugin(a, this.containerOn.bind(this, c), c);
          return;
        }
        if (this.isReadOnly && o.arrayIncludes(this.resizingDisabledButtons, c)) return;
        if (/submenu/.test(r) && (this._menuTray[a] === null || c !== this.submenuActiveButton)) {
          this.callPlugin(a, this.submenuOn.bind(this, c), c);
          return;
        } else if (/dialog/.test(r)) {
          this.callPlugin(a, this.plugins[a].open.bind(this), c);
          return;
        } else /command/.test(r) ? this.callPlugin(a, this.plugins[a].action.bind(this), c) : /fileBrowser/.test(r) && this.callPlugin(a, this.plugins[a].open.bind(this, null), c);
      } else a && this.commandHandler(c, a);
      /submenu/.test(r) ? this.submenuOff() : /command/.test(r) || (this.submenuOff(), this.containerOff());
    },
    /**
     * @description Execute command of command button(All Buttons except submenu and dialog)
     * (selectAll, codeView, fullScreen, indent, outdent, undo, redo, removeFormat, print, preview, showBlocks, save, bold, underline, italic, strike, subscript, superscript, copy, cut, paste)
     * @param {Element|null} target The element of command button
     * @param {String} command Property of command button (data-value)
     */
    commandHandler: function(a, r) {
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
            const c = e.element.wysiwyg;
            let p = o.getChildElement(c.firstChild, function(w) {
              return w.childNodes.length === 0 || w.nodeType === 3;
            }, !1) || c.firstChild, h = o.getChildElement(c.lastChild, function(w) {
              return w.childNodes.length === 0 || w.nodeType === 3;
            }, !0) || c.lastChild;
            if (!p || !h) return;
            if (o.isMedia(p)) {
              const w = this.getFileComponent(p), _ = o.createElement("BR"), C = o.createElement(i.defaultTag);
              C.appendChild(_), p = w ? w.component : p, p.parentNode.insertBefore(C, p), p = _;
            }
            if (o.isMedia(h)) {
              const w = o.createElement("BR"), _ = o.createElement(i.defaultTag);
              _.appendChild(w), c.appendChild(_), h = w;
            }
            v._showToolbarBalloon(this.setRange(p, 0, h, h.textContent.length));
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
            else if (this._variable.isChanged && typeof T.save == "function")
              T.save();
            else
              throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
            this._variable.isChanged = !1, e.tool.save && e.tool.save.setAttribute("disabled", !0);
            break;
          default:
            r = i._defaultCommand[r.toLowerCase()] || r, this.commandMap[r] || (this.commandMap[r] = a);
            const b = this._variable.currentNodesMap, m = b.indexOf(r) > -1 ? null : o.createElement(r);
            let y = r;
            /^SUB$/i.test(r) && b.indexOf("SUP") > -1 ? y = "SUP" : /^SUP$/i.test(r) && b.indexOf("SUB") > -1 && (y = "SUB"), this.nodeChange(m, this._commandMapStyles[r] || null, [y], !1), this.focus();
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
      const r = this.getRange(), c = this.getSelectedElements(null), p = [], h = a !== "indent", b = i.rtl ? "marginRight" : "marginLeft";
      let m = r.startContainer, y = r.endContainer, w = r.startOffset, _ = r.endOffset;
      for (let C = 0, N = c.length, E, B; C < N; C++)
        E = c[C], !o.isListCell(E) || !this.plugins.list ? (B = /\d+/.test(E.style[b]) ? o.getNumber(E.style[b], 0) : 0, h ? B -= 25 : B += 25, o.setStyle(E, b, B <= 0 ? "" : B + "px")) : (h || E.previousElementSibling) && p.push(E);
      p.length > 0 && this.plugins.list.editInsideList.call(this, h, p), this.effectNode = null, this.setRange(m, w, y, _), this.history.push(!1);
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
      this.controllersOff(), o.setDisabledButtons(!a, this.codeViewDisabledButtons), a ? (o.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), i.height === "auto" && !i.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(i.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, v._hideToolbar())), this.nativeFocus(), o.removeClass(this._styleCommandMap.codeView, "active"), o.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : i.height === "auto" && !i.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), i.codeMirrorEditor && i.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, v._showToolbarInline())), this._variable._range = null, e.element.code.focus(), o.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && o.setDisabledButtons(!0, this.resizingDisabledButtons), typeof T.toggleCodeView == "function" && T.toggleCodeView(this._variable.isCodeView, this);
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
          const h = r.head.children;
          for (let b = 0, m = h.length; b < m; b++)
            /^script$/i.test(h[b].tagName) && (r.head.removeChild(h[b]), b--, m--);
        }
        let c = r.head.innerHTML;
        (!r.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !r.head.querySelector("style")) && (c += o._setIframeCssTags(this.options)), this._wd.head.innerHTML = c, this._wd.body.innerHTML = this.convertContentsForEditor(r.body.innerHTML);
        const p = r.body.attributes;
        for (let h = 0, b = p.length; h < b; h++)
          p[h].name !== "contenteditable" && this._wd.body.setAttribute(p[h].name, p[h].value);
        if (!o.hasClass(this._wd.body, "sun-editor-editable")) {
          const h = i._editableClass.split(" ");
          for (let b = 0; b < h.length; b++)
            o.addClass(this._wd.body, i._editableClass[b]);
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
        const c = o.getAttributesToString(this._wd.body, null);
        r = `<!DOCTYPE html>
<html>
` + this._wd.head.outerHTML.replace(/>(?!\n)/g, `>
`) + "<body " + c + `>
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
      const r = e.element.topArea, c = e.element.toolbar, p = e.element.editorArea, h = e.element.wysiwygFrame, b = e.element.code, m = this._variable;
      this.controllersOff();
      const y = c.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      m.isFullScreen ? (m.isFullScreen = !1, h.style.cssText = m._wysiwygOriginCssText, b.style.cssText = m._codeOriginCssText, c.style.cssText = "", p.style.cssText = m._editorAreaOriginCssText, r.style.cssText = m._originCssText, u.body.style.overflow = m._bodyOverflow, i.height === "auto" && !i.codeMirrorEditor && v._codeViewAutoHeight(), i.toolbarContainer && i.toolbarContainer.appendChild(c), i.stickyToolbar > -1 && o.removeClass(c, "se-toolbar-sticky"), m._fullScreenAttrs.sticky && !i.toolbarContainer && (m._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", o.addClass(c, "se-toolbar-sticky")), this._isInline = m._fullScreenAttrs.inline, this._isBalloon = m._fullScreenAttrs.balloon, this._isInline && v._showToolbarInline(), i.toolbarContainer && o.removeClass(c, "se-toolbar-balloon"), v.onScroll_window(), a && o.changeElement(a.firstElementChild, g.expansion), e.element.topArea.style.marginTop = "", o.removeClass(this._styleCommandMap.fullScreen, "active")) : (m.isFullScreen = !0, m._fullScreenAttrs.inline = this._isInline, m._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), i.toolbarContainer && e.element.relative.insertBefore(c, p), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (m._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", o.removeClass(c, "se-toolbar-sticky")), m._bodyOverflow = u.body.style.overflow, u.body.style.overflow = "hidden", m._editorAreaOriginCssText = p.style.cssText, m._wysiwygOriginCssText = h.style.cssText, m._codeOriginCssText = b.style.cssText, p.style.cssText = c.style.cssText = "", h.style.cssText = (h.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + i._editorStyles.editor, b.style.cssText = (b.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], c.style.width = h.style.height = b.style.height = "100%", c.style.position = "relative", c.style.display = "block", m.innerHeight_fullScreen = f.innerHeight - c.offsetHeight, p.style.height = m.innerHeight_fullScreen - i.fullScreenOffset + "px", a && o.changeElement(a.firstElementChild, g.reduction), i.iframe && i.height === "auto" && (p.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = i.fullScreenOffset + "px", o.addClass(this._styleCommandMap.fullScreen, "active")), y && T.toolbar.hide(), typeof T.toggleFullScreen == "function" && T.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const a = o.createElement("IFRAME");
      a.style.display = "none", u.body.appendChild(a);
      const r = i.printTemplate ? i.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), c = o.getIframeDocument(a), p = this._wd;
      if (i.iframe) {
        const h = i._printClass !== null ? 'class="' + i._printClass + '"' : i.fullPage ? o.getAttributesToString(p.body, ["contenteditable"]) : 'class="' + i._editableClass + '"';
        c.write(
          "<!DOCTYPE html><html><head>" + p.head.innerHTML + "</head><body " + h + ">" + r + "</body></html>"
        );
      } else {
        const h = u.head.getElementsByTagName("link"), b = u.head.getElementsByTagName("style");
        let m = "";
        for (let y = 0, w = h.length; y < w; y++)
          m += h[y].outerHTML;
        for (let y = 0, w = b.length; y < w; y++)
          m += b[y].outerHTML;
        c.write(
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
        } catch (h) {
          throw Error("[SUNEDITOR.core.print.fail] error: " + h);
        } finally {
          d.closeLoading(), o.removeItem(a);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      d.submenuOff(), d.containerOff(), d.controllersOff();
      const a = i.previewTemplate ? i.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), r = f.open("", "_blank");
      r.mimeType = "text/html";
      const c = this._wd;
      if (i.iframe) {
        const p = i._printClass !== null ? 'class="' + i._printClass + '"' : i.fullPage ? o.getAttributesToString(c.body, ["contenteditable"]) : 'class="' + i._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + c.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + p + ">" + a + "</body></html>"
        );
      } else {
        const p = u.head.getElementsByTagName("link"), h = u.head.getElementsByTagName("style");
        let b = "";
        for (let m = 0, y = p.length; m < y; m++)
          b += p[m].outerHTML;
        for (let m = 0, y = h.length; m < y; m++)
          b += h[m].outerHTML;
        r.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + l.toolbar.preview + "</title>" + b + '</head><body class="' + (i._printClass !== null ? i._printClass : i._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + a + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(a) {
      const r = a === "rtl", c = this._prevRtl !== r;
      this._prevRtl = i.rtl = r, c && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && o.changeElement(e.tool.indent.firstElementChild, g.indent), e.tool.outdent && o.changeElement(e.tool.outdent.firstElementChild, g.outdent));
      const p = e.element;
      r ? (o.addClass(p.topArea, "se-rtl"), o.addClass(p.wysiwygFrame, "se-rtl")) : (o.removeClass(p.topArea, "se-rtl"), o.removeClass(p.wysiwygFrame, "se-rtl"));
      const h = o.getListChildren(p.wysiwyg, function(m) {
        return o.isFormatElement(m) && (m.style.marginRight || m.style.marginLeft || m.style.textAlign);
      });
      for (let m = 0, y = h.length, w, _, C; m < y; m++)
        w = h[m], C = w.style.marginRight, _ = w.style.marginLeft, (C || _) && (w.style.marginRight = _, w.style.marginLeft = C), C = w.style.textAlign, C === "left" ? w.style.textAlign = "right" : C === "right" && (w.style.textAlign = "left");
      const b = e.tool;
      b.dir && (o.changeTxt(b.dir.querySelector(".se-tooltip-text"), l.toolbar[i.rtl ? "dir_ltr" : "dir_rtl"]), o.changeElement(b.dir.firstElementChild, g[i.rtl ? "dir_ltr" : "dir_rtl"])), b.dir_ltr && (r ? o.removeClass(b.dir_ltr, "active") : o.addClass(b.dir_ltr, "active")), b.dir_rtl && (r ? o.addClass(b.dir_rtl, "active") : o.removeClass(b.dir_rtl, "active"));
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
        const c = this.convertHTMLForCodeView(r, !1);
        this._setCodeView(c);
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
      const r = this.cleanHTML(e.element.wysiwyg.innerHTML, null, null), c = o.createElement("DIV");
      c.innerHTML = r;
      const p = o.getListChildren(c, function(h) {
        return h.hasAttribute("contenteditable");
      });
      for (let h = 0, b = p.length; h < b; h++)
        p[h].removeAttribute("contenteditable");
      if (i.fullPage && !a) {
        const h = o.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + h + ">" + c.innerHTML + "</body></html>";
      } else
        return c.innerHTML;
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
      const c = i.defaultTag;
      if (a.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(a.nodeName)) return "";
        if (/__se__tag/.test(a.className)) return a.outerHTML;
        const p = o.getListChildNodes(a, function(h) {
          return o.isSpanWithoutAttr(h) && !o.getParentElement(h, o.isNotCheckingNode);
        }) || [];
        for (let h = p.length - 1; h >= 0; h--)
          p[h].outerHTML = p[h].innerHTML;
        return !r || o.isFormatElement(a) || o.isRangeFormatElement(a) || o.isComponent(a) || o.isFigures(a) || o.isAnchor(a) && o.isMedia(a.firstElementChild) ? o.isSpanWithoutAttr(a) ? a.innerHTML : a.outerHTML : "<" + c + ">" + (o.isSpanWithoutAttr(a) ? a.innerHTML : a.outerHTML) + "</" + c + ">";
      }
      if (a.nodeType === 3) {
        if (!r) return o._HTMLConvertor(a.textContent);
        const p = a.textContent.split(/\n/g);
        let h = "";
        for (let b = 0, m = p.length, y; b < m; b++)
          y = p[b].trim(), y.length > 0 && (h += "<" + c + ">" + o._HTMLConvertor(y) + "</" + c + ">");
        return h;
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
      return a.replace(this._disallowedTextTagsRegExp, function(c, p, h, b) {
        return p + (typeof r[h] == "string" ? r[h] : h) + (b ? " " + b : "");
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
      const c = this._w.Math, p = r.match(/(\d+(?:\.\d+)?)(.+)/), h = p ? p[1] * 1 : o.fontValueMap[r], b = p ? p[2] : "rem";
      let m = h;
      switch (/em/.test(b) ? m = c.round(h / 0.0625) : b === "pt" ? m = c.round(h * 1.333) : b === "%" && (m = h / 100), a) {
        case "em":
        case "rem":
        case "%":
          return (m * 0.0625).toFixed(2) + a;
        case "pt":
          return c.round(m / 1.333) + a;
        default:
          return m + a;
      }
    },
    _cleanStyle: function(a, r, c) {
      let p = (a.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(c) && !p && (a.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const h = (a.match(/\ssize="([^"]+)"/i) || [])[1], b = (a.match(/\sface="([^"]+)"/i) || [])[1], m = (a.match(/\scolor="([^"]+)"/i) || [])[1];
        (h || b || m) && (p = 'style="' + (h ? "font-size:" + this.util.getNumber(h / 3.333, 1) + "rem;" : "") + (b ? "font-family:" + b + ";" : "") + (m ? "color:" + m + ";" : "") + '"');
      }
      if (p) {
        r || (r = []);
        const h = p.replace(/&quot;/g, "").match(this._cleanStyleRegExp[c]);
        if (h) {
          const b = [];
          for (let m = 0, y = h.length, w; m < y; m++)
            if (w = h[m].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), w && !/inherit|initial|revert|unset/i.test(w[3])) {
              const _ = o.kebabToCamelCase(w[1].trim()), C = this.wwComputedStyle[_] ? this.wwComputedStyle[_].replace(/"/g, "") : "", N = w[3].trim();
              switch (_) {
                case "fontFamily":
                  if (!i.plugins.font || i.font.indexOf(N) === -1) continue;
                  break;
                case "fontSize":
                  if (!i.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(w[0]) || (w[0] = w[0].replace((w[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, i.fontSizeUnit)));
                  break;
                case "color":
                  if (!i.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(N)) continue;
                  break;
                case "backgroundColor":
                  if (!i.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(N)) continue;
                  break;
              }
              C !== N && b.push(w[0]);
            }
          b.length > 0 && r.push('style="' + b.join(";") + '"');
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
    _cleanTags: function(a, r, c) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(r)) return r;
      let p = null;
      const h = c.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), b = this._attributesTagsBlacklist[h];
      r = r.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), b ? r = r.replace(b, "") : r = r.replace(this._attributesBlacklistRegExp, "");
      const m = this._attributesTagsWhitelist[h];
      if (m ? p = r.match(m) : p = r.match(a ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), a || h === "span" || h === "li" || this._cleanStyleRegExp[h])
        if (h === "a") {
          const y = r.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          y && (p || (p = []), p.push(y[0]));
        } else (!p || !/style=/i.test(p.toString())) && ((h === "span" || h === "li") && (p = this._cleanStyle(r, p, "span")), this._cleanStyleRegExp[h] ? p = this._cleanStyle(r, p, h) : /^(P|DIV|H[1-6]|PRE)$/i.test(h) && (p = this._cleanStyle(r, p, "format")));
      else {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        y && !p ? p = [y[0]] : y && !p.some(function(w) {
          return /^style/.test(w.trim());
        }) && p.push(y[0]);
      }
      if (o.isFigures(h)) {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        p || (p = []), y && p.push(y[0]);
      }
      if (p)
        for (let y = 0, w = p.length, _; y < w; y++)
          _ = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(p[y].trim()) ? "" : p[y], c += (/^\s/.test(_) ? "" : " ") + _;
      return c;
    },
    /**
     * @description Determines if formatting is required and returns a domTree
     * @param {Element} dom documentFragment
     * @returns {Element}
     * @private
     */
    _editFormat: function(a) {
      let r = "", c;
      const p = a.childNodes;
      for (let h = 0, b = p.length, m; h < b; h++)
        m = p[h], m.nodeType === 8 ? r += "<!-- " + m.textContent + " -->" : !o.isFormatElement(m) && !o.isRangeFormatElement(m) && !o.isComponent(m) && !/meta/i.test(m.nodeName) ? (c || (c = o.createElement(i.defaultTag)), o.isTextStyleElement(m) && m.removeAttribute("style"), c.appendChild(m), h--, b--) : (c && (r += c.outerHTML, c = null), r += m.outerHTML);
      return c && (r += c.outerHTML), u.createRange().createContextualFragment(r);
    },
    _convertListCell: function(a) {
      let r = "";
      for (let c = 0, p = a.length, h; c < p; c++)
        h = a[c], h.nodeType === 1 ? o.isList(h) ? r += h.innerHTML : o.isListCell(h) ? r += h.outerHTML : o.isFormatElement(h) ? r += "<li>" + (h.innerHTML.trim() || "<br>") + "</li>" : o.isRangeFormatElement(h) && !o.isTable(h) ? r += this._convertListCell(h) : r += "<li>" + h.outerHTML + "</li>" : r += "<li>" + (h.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(a) {
      let r = !1;
      for (let c = 0, p = a.length, h; c < p; c++)
        if (h = a[c], h.nodeType === 1 && !o.isTextStyleElement(h) && !o.isBreak(h) && !this.__disallowedTagNameRegExp.test(h.nodeName)) {
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
    cleanHTML: function(a, r, c) {
      if (!i.strictMode) return o.htmlCompress(a);
      a = this._deleteDisallowedTags(this._parser.parseFromString(o.htmlCompress(a), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const p = u.createRange().createContextualFragment(a);
      try {
        o._consistencyCheckOfHTML(p, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, i.strictHTMLValidation);
      } catch (y) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + y);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const y = p.querySelectorAll(this.managedTagsInfo.query);
        for (let w = 0, _ = y.length, C, N; w < _; w++) {
          N = [].slice.call(y[w].classList);
          for (let E = 0, B = N.length; E < B; E++)
            if (C = this.managedTagsInfo.map[N[E]], C) {
              C(y[w]);
              break;
            }
        }
      }
      let h = p.childNodes, b = "";
      const m = this._isFormatData(h);
      m && (h = this._editFormat(p).childNodes);
      for (let y = 0, w = h.length, _; y < w; y++) {
        if (_ = h[y], this.__allowedScriptRegExp.test(_.nodeName)) {
          b += _.outerHTML;
          continue;
        }
        b += this._makeLine(_, m);
      }
      return b = o.htmlRemoveWhiteSpace(b), b ? (r && (b = b.replace(typeof r == "string" ? o.createTagsWhitelist(r) : r, "")), c && (b = b.replace(typeof c == "string" ? o.createTagsBlacklist(c) : c, ""))) : b = a, this._tagConvertor(b);
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
      } catch (b) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + b);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const b = r.querySelectorAll(this.managedTagsInfo.query);
        for (let m = 0, y = b.length, w, _; m < y; m++) {
          _ = [].slice.call(b[m].classList);
          for (let C = 0, N = _.length; C < N; C++)
            if (w = this.managedTagsInfo.map[_[C]], w) {
              w(b[m]);
              break;
            }
        }
      }
      const c = r.childNodes;
      let p = "", h = null;
      for (let b = 0, m; b < c.length; b++) {
        if (m = c[b], this.__allowedScriptRegExp.test(m.nodeName)) {
          p += m.outerHTML;
          continue;
        }
        if (!o.isFormatElement(m) && !o.isRangeFormatElement(m) && !o.isComponent(m) && !o.isFigures(m) && m.nodeType !== 8 && !/__se__tag/.test(m.className)) {
          if (h || (h = o.createElement(i.defaultTag)), h.appendChild(m), b--, c[b + 1] && !o.isFormatElement(c[b + 1]))
            continue;
          m = h, h = null;
        }
        h && (p += this._makeLine(h, !0), h = null), p += this._makeLine(m, !0);
      }
      return h && (p += this._makeLine(h, !0)), p.length === 0 ? "<" + i.defaultTag + "><br></" + i.defaultTag + ">" : (p = o.htmlRemoveWhiteSpace(p), this._tagConvertor(p));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(a, r) {
      let c = "";
      const p = f.RegExp, h = new p("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), b = typeof a == "string" ? u.createRange().createContextualFragment(a) : a, m = (function(_) {
        return this.isFormatElement(_) || this.isComponent(_);
      }).bind(o), y = r ? "" : `
`;
      let w = r ? 0 : this._variable.codeIndent * 1;
      return w = w > 0 ? new f.Array(w + 1).join(" ") : "", (function _(C, N) {
        const E = C.childNodes, B = h.test(C.nodeName), R = B ? N : "";
        for (let W = 0, $ = E.length, P, O, I, D, U, M; W < $; W++) {
          if (P = E[W], D = h.test(P.nodeName), O = D ? y : "", I = m(P) && !B && !/^(TH|TD)$/i.test(C.nodeName) ? y : "", P.nodeType === 8) {
            c += `
<!-- ` + P.textContent.trim() + " -->" + O;
            continue;
          }
          if (P.nodeType === 3) {
            o.isList(P.parentElement) || (c += o._HTMLConvertor(/^\n+$/.test(P.data) ? "" : P.data));
            continue;
          }
          if (P.childNodes.length === 0) {
            c += (/^HR$/i.test(P.nodeName) ? y : "") + (/^PRE$/i.test(P.parentElement.nodeName) && /^BR$/i.test(P.nodeName) ? "" : R) + P.outerHTML + O;
            continue;
          }
          P.outerHTML ? (U = P.nodeName.toLowerCase(), M = R || D ? N : "", c += (I || (B ? "" : O)) + M + P.outerHTML.match(p("<" + U + "[^>]*>", "i"))[0] + O, _(P, N + w), c += (/\n$/.test(c) ? M : "") + "</" + U + ">" + (I || O || B || /^(TH|TD)$/i.test(P.nodeName) ? y : "")) : c += new f.XMLSerializer().serializeToString(P);
        }
      })(b, ""), c.trim() + y;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(a, r, c) {
      u.addEventListener(a, r, c), i.iframe && this._wd.addEventListener(a, r);
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
      const r = i.maxCharCount, c = i.charCounterType;
      let p = 0;
      if (a && (p = this.getCharLength(a, c)), this._setCharCount(), r > 0) {
        let h = !1;
        const b = T.getCharCount(c);
        if (b > r) {
          if (h = !0, p > 0) {
            this._editorRange();
            const m = this.getRange(), y = m.endOffset - 1, w = this.getSelectionNode().textContent, _ = m.endOffset - (b - r);
            this.getSelectionNode().textContent = w.slice(0, _ < 0 ? 0 : _) + w.slice(m.endOffset, w.length), this.setRange(m.endContainer, y, m.endContainer, y);
          }
        } else b + p > r && (h = !0);
        if (h && (this._callCounterBlink(), p > 0))
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
        const c = r || i.charCounterType, p = this.getCharLength(typeof a == "string" ? a : this._charTypeHTML && a.nodeType === 1 ? a.outerHTML : a.textContent, c);
        if (p > 0 && p + T.getCharCount(c) > i.maxCharCount)
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
      d.controllersOff();
      const a = v._responsiveButtonSize;
      if (a) {
        let r = 0;
        (d._isBalloon || d._isInline) && i.toolbarWidth === "auto" ? r = e.element.topArea.offsetWidth : r = e.element.toolbar.offsetWidth;
        let c = "default";
        for (let p = 1, h = a.length; p < h; p++)
          if (r < a[p]) {
            c = a[p] + "";
            break;
          }
        v._responsiveCurrentSize !== c && (v._responsiveCurrentSize = c, T.setToolbarButtons(v._responsiveButtons[c]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && f.setTimeout((function(a, r) {
        this.textContent && a && (this.textContent = a.getCharCount(r.charCounterType));
      }).bind(e.element.charCounter, T, i), 0);
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
      const r = this.commandMap, c = this.activePlugins;
      for (let p in r)
        a.indexOf(p) > -1 || !o.hasOwn(r, p) || (c.indexOf(p) > -1 ? n[p].active.call(this, null) : r.OUTDENT && /^OUTDENT$/i.test(p) ? o.isImportantDisabled(r.OUTDENT) || r.OUTDENT.setAttribute("disabled", !0) : r.INDENT && /^INDENT$/i.test(p) ? o.isImportantDisabled(r.INDENT) || r.INDENT.removeAttribute("disabled") : o.removeClass(r[p], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(a, r) {
      const c = f.RegExp;
      this._ww = i.iframe ? e.element.wysiwygFrame.contentWindow : f, this._wd = u, this._charTypeHTML = i.charCounterType === "byte-html", this.wwComputedStyle = f.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = o.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + o.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(D) {
        return this.test(D) ? D : "";
      }).bind(i.allowedClassNames);
      const p = i.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new c("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new c("<(" + p + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + p + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new c("^(" + p + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new c("^" + (i.__allowedScriptTag ? "script" : "") + "$", "i"), !i.iframe && typeof f.ShadowRoot == "function") {
        let D = e.element.wysiwygFrame;
        for (; D; ) {
          if (D.shadowRoot) {
            this._shadowRoot = D.shadowRoot;
            break;
          } else if (D instanceof f.ShadowRoot) {
            this._shadowRoot = D;
            break;
          }
          D = D.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const h = f.Object.keys(i._textTagsMap), b = i.addTagsWhitelist ? i.addTagsWhitelist.split("|").filter(function(D) {
        return /b|i|ins|s|strike/i.test(D);
      }) : [];
      for (let D = 0; D < b.length; D++)
        h.splice(h.indexOf(b[D].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = h.length === 0 ? null : new c("(<\\/?)(" + h.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const m = function(D, U) {
        return D ? D === "*" ? "[a-z-]+" : U ? D + "|" + U : D : "^";
      }, _ = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", C = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = i._editorTagsWhitelist.indexOf("//") > -1 || i._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new c("^(" + m(i._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new c("^(" + (i.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = o.createTagsWhitelist(m(i._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = o.createTagsBlacklist(i.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = o.createTagsWhitelist(m(i.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = o.createTagsBlacklist(i.pasteTagsBlacklist);
      const N = '\\s*=\\s*(")[^"]*\\1', E = i.attributesWhitelist;
      let B = {}, R = "";
      if (E)
        for (let D in E)
          !o.hasOwn(E, D) || /^on[a-z]+$/i.test(E[D]) || (D === "all" ? R = m(E[D], _) : B[D] = new c("\\s(?:" + m(E[D], _) + ")" + N, "ig"));
      this._attributesWhitelistRegExp = new c("\\s(?:" + (R || _ + "|" + C) + ")" + N, "ig"), this._attributesWhitelistRegExp_all_data = new c("\\s(?:" + ((R || _) + "|data-[a-z0-9\\-]+") + ")" + N, "ig"), this._attributesTagsWhitelist = B;
      const W = i.attributesBlacklist;
      if (B = {}, R = "", W)
        for (let D in W)
          o.hasOwn(W, D) && (D === "all" ? R = m(W[D], "") : B[D] = new c("\\s(?:" + m(W[D], "") + ")" + N, "ig"));
      this._attributesBlacklistRegExp = new c("\\s(?:" + (R || "^") + ")" + N, "ig"), this._attributesTagsBlacklist = B, this._isInline = /inline/i.test(i.mode), this._isBalloon = /balloon|balloon-always/i.test(i.mode), this._isBalloonAlways = /balloon-always/i.test(i.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const $ = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let P = [], O, I;
      for (let D in n)
        if (o.hasOwn(n, D)) {
          if (O = n[D], I = t[D], (O.active || O.action) && I && this.callPlugin(D, null, I), typeof O.checkFileInfo == "function" && typeof O.resetFileInfo == "function" && (this.callPlugin(D, null, I), this._fileInfoPluginsCheck.push(O.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(O.resetFileInfo.bind(this))), f.Array.isArray(O.fileTags)) {
            const U = O.fileTags;
            this.callPlugin(D, null, I), this._fileManager.tags = this._fileManager.tags.concat(U), P.push(D);
            for (let M = 0, F = U.length; M < F; M++)
              this._fileManager.pluginMap[U[M].toLowerCase()] = D;
          }
          if (O.managedTags) {
            const U = O.managedTags();
            $.push("." + U.className), this.managedTagsInfo.map[U.className] = U.method.bind(this);
          }
        }
      this.managedTagsInfo.query = $.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new c("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new c("^(" + (P.length === 0 ? "^" : P.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = _r(this, this._onChange_historyStack.bind(this)), this.addModule([sn]), i.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, i._editorStyles.editor && (e.element.wysiwyg.style.cssText = i._editorStyles.editor), i.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(a, r);
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
      this.hasFocus && v._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), T.onChange && T.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && v._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      this._iframeAuto ? f.setTimeout(function() {
        const a = d._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = a + "px", o.isResizeObserverSupported || d.__callResizeFunction(a, null);
      }) : o.isResizeObserverSupported || d.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(a, r) {
      a = a === -1 ? r.borderBoxSize && r.borderBoxSize[0] ? r.borderBoxSize[0].blockSize : r.contentRect.height + this._editorHeightPadding : a, this._editorHeight !== a && (typeof T.onResizeEditor == "function" && T.onResizeEditor(a, this._editorHeight, d, r), this._editorHeight = a);
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
      const r = this.getRange(), c = r.commonAncestorContainer, p = r.startContainer, h = o.getRangeFormatElement(c, null);
      let b, m, y;
      const w = o.getParentElement(c, o.isComponent);
      if (!(w && !o.isTable(w))) {
        if (c.nodeType === 1 && c.getAttribute("data-se-embed") === "true") {
          let _ = c.nextElementSibling;
          o.isFormatElement(_) || (_ = this.appendFormatTag(c, i.defaultTag)), this.setRange(_.firstChild, 0, _.firstChild, 0);
          return;
        }
        if (!((o.isRangeFormatElement(p) || o.isWysiwygDiv(p)) && (o.isComponent(p.children[r.startOffset]) || o.isComponent(p.children[r.startOffset - 1])))) {
          if (o.getParentElement(c, o.isNotCheckingNode)) return null;
          if (h) {
            y = o.createElement(a || i.defaultTag), y.innerHTML = h.innerHTML, y.childNodes.length === 0 && (y.innerHTML = o.zeroWidthSpace), h.innerHTML = y.outerHTML, y = h.firstChild, b = o.getEdgeChildNodes(y, null).sc, b || (b = o.createTextNode(o.zeroWidthSpace), y.insertBefore(b, y.firstChild)), m = b.textContent.length, this.setRange(b, m, b, m);
            return;
          }
          if (o.isRangeFormatElement(c) && c.childNodes.length <= 1) {
            let _ = null;
            c.childNodes.length === 1 && o.isBreak(c.firstChild) ? _ = c.firstChild : (_ = o.createTextNode(o.zeroWidthSpace), c.appendChild(_)), this.setRange(_, 1, _, 1);
            return;
          }
          try {
            if (c.nodeType === 3 && (y = o.createElement(a || i.defaultTag), c.parentNode.insertBefore(y, c), y.appendChild(c)), o.isWysiwygDiv(c)) {
              y = o.createElement(a || i.defaultTag), y.innerHTML = c.innerHTML, c.innerHTML = "", c.appendChild(y), this.effectNode = null, this.setRange(y, 1, y, 1);
              return;
            }
            if (y && (o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling)), o.isBreak(b)) {
              const _ = o.createTextNode(o.zeroWidthSpace);
              b.parentNode.insertBefore(_, b), b = _;
            }
          } catch {
            this.execCommand("formatBlock", !1, a || i.defaultTag), this.removeRange(), this._editorRange(), this.effectNode = null;
            return;
          }
          if (y && (o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling), o.isBreak(b))) {
            const _ = o.createTextNode(o.zeroWidthSpace);
            b.parentNode.insertBefore(_, b), b = _;
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
    _setOptionsInit: function(a, r) {
      this.context = e = Xi(a.originElement, this._getConstructed(a), i), this._componentsInfoReset = !0, this._editorInit(!0, r);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(a, r) {
      this._init(a, r), v._addEvent(), this._setCharCount(), v._offStickyToolbar(), v.onResize_window(), e.element.toolbar.style.visibility = "";
      const c = i.frameAttrbutes;
      for (let p in c)
        e.element.wysiwyg.setAttribute(p, c[p]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), f.setTimeout(function() {
        typeof d._resourcesStateChange == "function" && (v._resizeObserver && v._resizeObserver.observe(e.element.wysiwygFrame), v._toolbarObserver && v._toolbarObserver.observe(e.element._toolbarShadow), d._resourcesStateChange(), typeof T.onload == "function" && T.onload(d, a));
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
      let c = null;
      const p = v._keyCodeShortcut[a];
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
      return c ? (d.commandHandler(d.commandMap[c], c), !0) : !!p;
    },
    _applyTagEffects: function() {
      if (o.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let a = d.getSelectionNode();
      if (a === d.effectNode) return;
      d.effectNode = a;
      const r = i.rtl ? "marginRight" : "marginLeft", c = d.commandMap, p = v._onButtonsCheck, h = [], b = [], m = d.activePlugins, y = m.length;
      let w = "";
      for (; a.firstChild; )
        a = a.firstChild;
      for (let _ = a; !o.isWysiwygDiv(_) && _; _ = _.parentNode)
        if (!(_.nodeType !== 1 || o.isBreak(_))) {
          if (w = _.nodeName.toUpperCase(), b.push(w), !d.isReadOnly)
            for (let C = 0, N; C < y; C++)
              N = m[C], h.indexOf(N) === -1 && n[N].active.call(d, _) && h.push(N);
          if (o.isFormatElement(_)) {
            h.indexOf("OUTDENT") === -1 && c.OUTDENT && !o.isImportantDisabled(c.OUTDENT) && (o.isListCell(_) || _.style[r] && o.getNumber(_.style[r], 0) > 0) && (h.push("OUTDENT"), c.OUTDENT.removeAttribute("disabled")), h.indexOf("INDENT") === -1 && c.INDENT && !o.isImportantDisabled(c.INDENT) && (h.push("INDENT"), o.isListCell(_) && !_.previousElementSibling ? c.INDENT.setAttribute("disabled", !0) : c.INDENT.removeAttribute("disabled"));
            continue;
          }
          p && p.test(w) && (h.push(w), o.addClass(c[w], "active"));
        }
      d._setKeyEffect(h), d._variable.currentNodes = b.reverse(), d._variable.currentNodesMap = h, i.showPathLabel && (e.element.navigation.textContent = d._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(a) {
      let r = a.target;
      if (d._bindControllersOff && a.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? d._antiBlur = !1 : a.preventDefault(), o.getParentElement(r, ".se-submenu"))
        a.stopPropagation(), d._notHideToolbar = !0;
      else {
        let c = r.getAttribute("data-command"), p = r.className;
        for (; !c && !/se-menu-list/.test(p) && !/sun-editor-common/.test(p); )
          r = r.parentNode, c = r.getAttribute("data-command"), p = r.className;
        (c === d._submenuName || c === d._containerName) && a.stopPropagation();
      }
    },
    addGlobalEvent: function(a, r, c) {
      return i.iframe && d._ww.addEventListener(a, r, c), d._w.addEventListener(a, r, c), {
        type: a,
        listener: r,
        useCapture: c
      };
    },
    removeGlobalEvent: function(a, r, c) {
      a && (typeof a == "object" && (r = a.listener, c = a.useCapture, a = a.type), i.iframe && d._ww.removeEventListener(a, r, c), d._w.removeEventListener(a, r, c));
    },
    onClick_toolbar: function(a) {
      let r = a.target, c = r.getAttribute("data-display"), p = r.getAttribute("data-command"), h = r.className;
      for (d.controllersOff(); r.parentNode && !p && !/se-menu-list/.test(h) && !/se-toolbar/.test(h); )
        r = r.parentNode, p = r.getAttribute("data-command"), c = r.getAttribute("data-display"), h = r.className;
      !p && !c || r.disabled || d.actionCall(p, c, r);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(a) {
      if (d.isReadOnly || o.isNonEditable(e.element.wysiwyg)) return;
      if (o._isExcludeSelectionElement(a.target)) {
        a.preventDefault();
        return;
      }
      if (v.removeGlobalEvent(v.__selectionSyncEvent), v.__selectionSyncEvent = v.addGlobalEvent("mouseup", function() {
        d && d._editorRange(), v.removeGlobalEvent(v.__selectionSyncEvent);
      }), typeof T.onMouseDown == "function" && T.onMouseDown(a, d) === !1) return;
      const r = o.getParentElement(a.target, o.isCell);
      if (r) {
        const c = d.plugins.table;
        c && r !== c._fixedCell && !c._shift && d.callPlugin("table", function() {
          c.onTableCellMultiSelect.call(d, r, !1);
        }, null);
      }
      d._isBalloon && v._hideToolbar();
    },
    onClick_wysiwyg: function(a) {
      const r = a.target;
      if (d.isReadOnly)
        return a.preventDefault(), o.isAnchor(r) && f.open(r.href, r.target), !1;
      if (o.isNonEditable(e.element.wysiwyg) || typeof T.onClick == "function" && T.onClick(a, d) === !1) return;
      const c = d.getFileComponent(r);
      if (c) {
        a.preventDefault(), d.selectComponent(c.target, c.pluginName);
        return;
      }
      const p = o.getParentElement(r, "FIGCAPTION");
      if (p && o.isNonEditable(p) && (a.preventDefault(), p.focus(), d._isInline && !d._inlineToolbarAttr.isShow)) {
        v._showToolbarInline();
        const _ = function() {
          v._hideToolbar(), p.removeEventListener("blur", _);
        };
        p.addEventListener("blur", _);
      }
      if (d._editorRange(), a.detail === 3) {
        let _ = d.getRange();
        o.isFormatElement(_.endContainer) && _.endOffset === 0 && (_ = d.setRange(_.startContainer, _.startOffset, _.startContainer, _.startContainer.length), d._rangeInfo(_, d.getSelection()));
      }
      const h = d.getSelectionNode(), b = o.getFormatElement(h, null), m = o.getRangeFormatElement(h, null);
      let y = h;
      for (; y && y.firstChild; ) y = y.firstChild;
      const w = d.getFileComponent(y);
      if (w) {
        const _ = d.getRange();
        !m && _.startContainer === _.endContainer && d.selectComponent(w.target, w.pluginName);
      } else d.currentFileComponentInfo && d.controllersOff();
      if (!b && !o.isNonEditable(r) && !o.isList(m)) {
        const _ = d.getRange();
        if (o.getFormatElement(_.startContainer) === o.getFormatElement(_.endContainer))
          if (o.isList(m)) {
            a.preventDefault();
            const C = o.createElement("LI"), N = h.nextElementSibling;
            C.appendChild(h), m.insertBefore(C, N), d.focus();
          } else !o.isWysiwygDiv(h) && !o.isComponent(h) && (!o.isTable(h) || o.isCell(h)) && d._setDefaultFormat(o.isRangeFormatElement(m) ? "DIV" : i.defaultTag) !== null ? (a.preventDefault(), d.focus()) : v._applyTagEffects();
      } else
        v._applyTagEffects();
      d._isBalloon && f.setTimeout(v._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      v._balloonDelay && f.clearTimeout(v._balloonDelay), v._balloonDelay = f.setTimeout((function() {
        f.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon();
      }).bind(v), 350);
    },
    _toggleToolbarBalloon: function() {
      if (d) {
        d._editorRange();
        const a = d.getRange();
        d._bindControllersOff || !d._isBalloonAlways && a.collapsed ? v._hideToolbar() : v._showToolbarBalloon(a);
      }
    },
    _showToolbarBalloon: function(a) {
      if (!d._isBalloon) return;
      const r = a || d.getRange(), c = e.element.toolbar, p = e.element.topArea, h = d.getSelection();
      let b;
      if (d._isBalloonAlways && r.collapsed)
        b = !0;
      else if (h.focusNode === h.anchorNode)
        b = h.focusOffset < h.anchorOffset;
      else {
        const O = o.getListChildNodes(r.commonAncestorContainer, null);
        b = o.getArrayIndex(O, h.focusNode) < o.getArrayIndex(O, h.anchorNode);
      }
      let m = r.getClientRects();
      m = m[b ? 0 : m.length - 1];
      const y = d.getGlobalScrollOffset();
      let w = y.left, _ = y.top;
      const C = p.offsetWidth, N = v._getEditorOffsets(null), E = N.top, B = N.left;
      if (c.style.top = "-10000px", c.style.visibility = "hidden", c.style.display = "block", !m) {
        const O = d.getSelectionNode();
        if (o.isFormatElement(O)) {
          const I = o.createTextNode(o.zeroWidthSpace);
          d.insertNode(I, null, !1), d.setRange(I, 1, I, 1), d._editorRange(), m = d.getRange().getClientRects(), m = m[b ? 0 : m.length - 1];
        }
        if (!m) {
          const I = o.getOffset(O, e.element.wysiwygFrame);
          m = {
            left: I.left,
            top: I.top,
            right: I.left,
            bottom: I.top + O.offsetHeight,
            noText: !0
          }, w = 0, _ = 0;
        }
        b = !0;
      }
      const R = f.Math.round(e.element._arrow.offsetWidth / 2), W = c.offsetWidth, $ = c.offsetHeight, P = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (P && (m = {
        left: m.left + P.left,
        top: m.top + P.top,
        right: m.right + P.right - P.width,
        bottom: m.bottom + P.bottom - P.height
      }), v._setToolbarOffset(b, m, c, B, C, w, _, E, R), (W !== c.offsetWidth || $ !== c.offsetHeight) && v._setToolbarOffset(b, m, c, B, C, w, _, E, R), i.toolbarContainer) {
        const O = p.parentElement;
        let I = i.toolbarContainer, D = I.offsetLeft, U = I.offsetTop;
        for (; !I.parentElement.contains(O) || !/^(BODY|HTML)$/i.test(I.parentElement.nodeName); )
          I = I.offsetParent, D += I.offsetLeft, U += I.offsetTop;
        c.style.left = c.offsetLeft - D + p.offsetLeft + "px", c.style.top = c.offsetTop - U + p.offsetTop + "px";
      }
      c.style.visibility = "";
    },
    _setToolbarOffset: function(a, r, c, p, h, b, m, y, w) {
      const C = c.offsetWidth, N = r.noText && !a ? 0 : c.offsetHeight, E = (a ? r.left : r.right) - p - C / 2 + b, B = E + C - h;
      let R = (a ? r.top - N - w : r.bottom + w) - (r.noText ? 0 : y) + m, W = E < 0 ? 1 : B < 0 ? E : E - B - 1 - 1, $ = !1;
      const P = R + (a ? v._getEditorOffsets(null).top : c.offsetHeight - e.element.wysiwyg.offsetHeight);
      !a && P > 0 && v._getPageBottomSpace() < P ? (a = !0, $ = !0) : a && u.documentElement.offsetTop > P && (a = !1, $ = !0), $ && (R = (a ? r.top - N - w : r.bottom + w) - (r.noText ? 0 : y) + m), c.style.left = f.Math.floor(W) + "px", c.style.top = f.Math.floor(R) + "px", a ? (o.removeClass(e.element._arrow, "se-arrow-up"), o.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = N + "px") : (o.removeClass(e.element._arrow, "se-arrow-down"), o.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -w + "px");
      const O = f.Math.floor(C / 2 + (E - W));
      e.element._arrow.style.left = (O + w > c.offsetWidth ? c.offsetWidth - w : O < w ? w : O) + "px";
    },
    _showToolbarInline: function() {
      if (!d._isInline) return;
      const a = e.element.toolbar;
      i.toolbarContainer ? a.style.position = "relative" : a.style.position = "absolute", a.style.visibility = "hidden", a.style.display = "block", d._inlineToolbarAttr.width = a.style.width = i.toolbarWidth, d._inlineToolbarAttr.top = a.style.top = (i.toolbarContainer ? 0 : -1 - a.offsetHeight) + "px", typeof T.showInline == "function" && T.showInline(a, e, d), v.onScroll_window(), d._inlineToolbarAttr.isShow = !0, a.style.visibility = "";
    },
    _hideToolbar: function() {
      !d._notHideToolbar && !d._variable.isFullScreen && (e.element.toolbar.style.display = "none", d._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(a) {
      if (/AUDIO/.test(a.target.nodeName)) return !1;
      if (d.isReadOnly || d.isDisabled)
        return a.preventDefault(), a.stopPropagation(), d.history.go(d.history.getCurrentIndex()), !1;
      const r = d.getRange(), c = d.getSelectionNode(), p = o.getFormatElement(c, null);
      if (!p && r.collapsed && !o.isComponent(c) && !o.isList(c)) {
        const b = o.getRangeFormatElement(p, null);
        d._setDefaultFormat(o.isRangeFormatElement(b) ? "DIV" : i.defaultTag);
      }
      d._editorRange();
      const h = (a.data === null ? "" : a.data === void 0 ? " " : a.data) || "";
      if (!d._charCount(h))
        return a.preventDefault(), a.stopPropagation(), !1;
      typeof T.onInput == "function" && T.onInput(a, d) === !1 || d.history.push(!0);
    },
    _isUneditableNode: function(a, r) {
      const c = r ? a.startContainer : a.endContainer, p = r ? a.startOffset : a.endOffset, h = r ? "previousSibling" : "nextSibling", b = c.nodeType === 1;
      let m;
      return b ? (m = v._isUneditableNode_getSibling(c.childNodes[p], h, c), m && m.nodeType === 1 && m.getAttribute("contenteditable") === "false") : (m = v._isUneditableNode_getSibling(c, h, c), d.isEdgePoint(c, p, r ? "start" : "end") && m && m.nodeType === 1 && m.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(a, r, c) {
      if (!a) return null;
      let p = a[r];
      if (!p)
        if (p = o.getFormatElement(c), p = p ? p[r] : null, p && !o.isComponent(p)) p = r === "previousSibling" ? p.firstChild : p.lastChild;
        else return null;
      return p;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(a) {
      let r = d.getSelectionNode();
      if (o.isInputElement(r)) return;
      const c = a.keyCode, p = a.shiftKey, h = a.ctrlKey || a.metaKey || c === 91 || c === 92 || c === 224, b = a.altKey;
      if (v._IEisComposing = c === 229, !h && d.isReadOnly && !v._cursorMoveKeyCode.test(c))
        return a.preventDefault(), !1;
      if (d.submenuOff(), d._isBalloon && v._hideToolbar(), typeof T.onKeyDown == "function" && T.onKeyDown(a, d) === !1) return;
      if (h && v._shortcutCommand(c, p))
        return v._onShortcutKey = !0, a.preventDefault(), a.stopPropagation(), !1;
      v._onShortcutKey && (v._onShortcutKey = !1), c === 13 && o.isFormatElement(d.getRange().startContainer) && (d._resetRangeToTextNode(), r = d.getSelectionNode());
      const m = d.getRange(), y = !m.collapsed || m.startContainer !== m.endContainer, w = d._fileManager.pluginRegExp.test(d.currentControllerName) ? d.currentControllerName : "";
      let _ = o.getFormatElement(r, null) || r, C = o.getRangeFormatElement(_, null);
      if (!(/37|38|39|40/.test(a.keyCode) && v._onKeyDown_wysiwyg_arrowKey(a) === !1)) {
        switch (c) {
          case 8:
            if (!y && w) {
              a.preventDefault(), a.stopPropagation(), d.plugins[w].destroy.call(d);
              break;
            }
            if (y && v._hardDelete()) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            if (!o.isFormatElement(_) && !e.element.wysiwyg.firstElementChild && !o.isComponent(r) && d._setDefaultFormat(i.defaultTag) !== null)
              return a.preventDefault(), a.stopPropagation(), !1;
            if (!y && !_.previousElementSibling && m.startOffset === 0 && !r.previousSibling && !o.isListCell(_) && o.isFormatElement(_) && (!o.isFreeFormatElement(_) || o.isClosureFreeFormatElement(_))) {
              if (o.isClosureRangeFormatElement(_.parentNode))
                return a.preventDefault(), a.stopPropagation(), !1;
              if (o.isWysiwygDiv(_.parentNode) && _.childNodes.length <= 1 && (!_.firstChild || o.onlyZeroWidthSpace(_.textContent))) {
                if (a.preventDefault(), a.stopPropagation(), _.nodeName.toUpperCase() === i.defaultTag.toUpperCase()) {
                  _.innerHTML = "<br>";
                  const M = _.attributes;
                  for (; M[0]; )
                    _.removeAttribute(M[0].name);
                } else {
                  const M = o.createElement(i.defaultTag);
                  M.innerHTML = "<br>", _.parentElement.replaceChild(M, _);
                }
                return d.nativeFocus(), !1;
              }
            }
            const E = m.startContainer;
            if (_ && !_.previousElementSibling && m.startOffset === 0 && E.nodeType === 3 && !o.isFormatElement(E.parentNode)) {
              let M = E.parentNode.previousSibling;
              const F = E.parentNode.nextSibling;
              M || (F ? M = F : (M = o.createElement("BR"), _.appendChild(M)));
              let A = E;
              for (; _.contains(A) && !A.previousSibling; )
                A = A.parentNode;
              if (!_.contains(A)) {
                E.textContent = "", o.removeItemAllParents(E, null, _);
                break;
              }
            }
            if (v._isUneditableNode(m, !0)) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            !y && d._isEdgeFormat(m.startContainer, m.startOffset, "start") && o.isFormatElement(_.previousElementSibling) && (d._formatAttrsTemp = _.previousElementSibling.attributes);
            const B = m.commonAncestorContainer;
            if (_ = o.getFormatElement(m.startContainer, null), C = o.getRangeFormatElement(_, null), C && _ && !o.isCell(C) && !/^FIGCAPTION$/i.test(C.nodeName)) {
              if (o.isListCell(_) && o.isList(C) && (o.isListCell(C.parentNode) || _.previousElementSibling) && (r === _ || r.nodeType === 3 && (!r.previousSibling || o.isList(r.previousSibling))) && (o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null) ? C.contains(m.startContainer) : m.startOffset === 0 && m.collapsed)) {
                if (m.startContainer !== m.endContainer)
                  a.preventDefault(), d.removeNode(), m.startContainer.nodeType === 3 && d.setRange(m.startContainer, m.startContainer.textContent.length, m.startContainer, m.startContainer.textContent.length), d.history.push(!0);
                else {
                  let M = _.previousElementSibling || C.parentNode;
                  if (o.isListCell(M)) {
                    a.preventDefault();
                    let F = M;
                    if (!M.contains(_) && o.isListCell(F) && o.isList(F.lastElementChild)) {
                      for (F = F.lastElementChild.lastElementChild; o.isListCell(F) && o.isList(F.lastElementChild); )
                        F = F.lastElementChild && F.lastElementChild.lastElementChild;
                      M = F;
                    }
                    let A = M === C.parentNode ? C.previousSibling : M.lastChild;
                    A || (A = o.createTextNode(o.zeroWidthSpace), C.parentNode.insertBefore(A, C.parentNode.firstChild));
                    const L = A.nodeType === 3 ? A.textContent.length : 1, Z = _.childNodes;
                    let G = A, te = Z[0];
                    for (; te = Z[0]; )
                      M.insertBefore(te, G.nextSibling), G = te;
                    o.removeItem(_), C.children.length === 0 && o.removeItem(C), d.setRange(A, L, A, L), d.history.push(!0);
                  }
                }
                break;
              }
              if (!y && m.startOffset === 0) {
                let M = !0, F = B;
                for (; F && F !== C && !o.isWysiwygDiv(F); ) {
                  if (F.previousSibling && (F.previousSibling.nodeType === 1 || !o.onlyZeroWidthSpace(F.previousSibling.textContent.trim()))) {
                    M = !1;
                    break;
                  }
                  F = F.parentNode;
                }
                if (M && C.parentNode) {
                  a.preventDefault(), d.detachRangeFormatElement(C, o.isListCell(_) ? [_] : null, null, !1, !1), d.history.push(!0);
                  break;
                }
              }
            }
            if (!y && _ && (m.startOffset === 0 || r === _ && _.childNodes[m.startOffset])) {
              const M = o.isListCell(_), F = r === _ ? _.childNodes[m.startOffset] : r, A = M ? F.previousSibling : _.previousSibling, L = M || (B.nodeType === 3 || o.isBreak(B)) && !B.previousSibling && m.startOffset === 0;
              if (F && (M || !F.previousSibling) && (B && o.isComponent(B.previousSibling) || L && o.isComponent(A))) {
                const Z = d.getFileComponent(A);
                Z ? (a.preventDefault(), a.stopPropagation(), M ? o.removeItem(F) : _.textContent.length === 0 && o.removeItem(_), d.selectComponent(Z.target, Z.pluginName) === !1 && d.blur()) : o.isComponent(A) && (a.preventDefault(), a.stopPropagation(), o.removeItem(A));
                break;
              }
              if (F && o.isNonEditable(F.previousSibling)) {
                a.preventDefault(), a.stopPropagation(), o.removeItem(F.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (w) {
              a.preventDefault(), a.stopPropagation(), d.plugins[w].destroy.call(d);
              break;
            }
            if (y && v._hardDelete()) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            if (!y && d._isEdgeFormat(m.endContainer, m.endOffset, "end") && !_.nextSibling) {
              a.preventDefault(), a.stopPropagation();
              return;
            }
            if (v._isUneditableNode(m, !1)) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            if ((o.isFormatElement(r) || r.nextSibling === null || o.onlyZeroWidthSpace(r.nextSibling) && r.nextSibling.nextSibling === null) && m.startOffset === r.textContent.length) {
              const M = _.nextElementSibling;
              if (!M) break;
              if (o.isComponent(M)) {
                if (a.preventDefault(), o.onlyZeroWidthSpace(_) && (o.removeItem(_), o.isTable(M))) {
                  let A = o.getChildElement(M, o.isCell, !1);
                  A = A.firstElementChild || A, d.setRange(A, 0, A, 0);
                  break;
                }
                const F = d.getFileComponent(M);
                F ? (a.stopPropagation(), d.selectComponent(F.target, F.pluginName) === !1 && d.blur()) : o.isComponent(M) && (a.stopPropagation(), o.removeItem(M));
                break;
              }
            }
            if (!y && (d.isEdgePoint(m.endContainer, m.endOffset) || r === _ && _.childNodes[m.startOffset])) {
              const M = r === _ && _.childNodes[m.startOffset] || r;
              if (M && o.isNonEditable(M.nextSibling)) {
                a.preventDefault(), a.stopPropagation(), o.removeItem(M.nextSibling);
                break;
              } else if (o.isComponent(M)) {
                a.preventDefault(), a.stopPropagation(), o.removeItem(M);
                break;
              }
            }
            if (!y && d._isEdgeFormat(m.endContainer, m.endOffset, "end") && o.isFormatElement(_.nextElementSibling) && (d._formatAttrsTemp = _.attributes), _ = o.getFormatElement(m.startContainer, null), C = o.getRangeFormatElement(_, null), o.isListCell(_) && o.isList(C) && (r === _ || r.nodeType === 3 && (!r.nextSibling || o.isList(r.nextSibling)) && (o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null) ? C.contains(m.endContainer) : m.endOffset === r.textContent.length && m.collapsed))) {
              m.startContainer !== m.endContainer && d.removeNode();
              let M = o.getArrayItem(_.children, o.isList, !1);
              if (M = M || _.nextElementSibling || (C.parentNode ? C.parentNode.nextElementSibling : null), M && (o.isList(M) || o.getArrayItem(M.children, o.isList, !1))) {
                a.preventDefault();
                let F, A;
                if (o.isList(M)) {
                  const L = M.firstElementChild;
                  for (A = L.childNodes, F = A[0]; A[0]; )
                    _.insertBefore(A[0], M);
                  o.removeItem(L);
                } else {
                  for (F = M.firstChild, A = M.childNodes; A[0]; )
                    _.appendChild(A[0]);
                  o.removeItem(M);
                }
                d.setRange(F, 0, F, 0), d.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (w || i.tabDisable || (a.preventDefault(), h || b || o.isWysiwygDiv(r))) break;
            const R = !m.collapsed || d.isEdgePoint(m.startContainer, m.startOffset), W = d.getSelectedElements(null);
            r = d.getSelectionNode();
            const $ = [];
            let P = [], O = o.isListCell(W[0]), I = o.isListCell(W[W.length - 1]), D = { sc: m.startContainer, so: m.startOffset, ec: m.endContainer, eo: m.endOffset };
            for (let M = 0, F = W.length, A; M < F; M++)
              if (A = W[M], o.isListCell(A)) {
                if (!A.previousElementSibling && !p)
                  continue;
                $.push(A);
              } else
                P.push(A);
            if ($.length > 0 && R && d.plugins.list)
              D = d.plugins.list.editInsideList.call(d, p, $);
            else {
              const M = o.getParentElement(r, o.isCell);
              if (M && R) {
                const F = o.getParentElement(M, "table"), A = o.getListChildren(F, o.isCell);
                let L = p ? o.prevIdx(A, M) : o.nextIdx(A, M);
                L === A.length && !p && (L = 0), L === -1 && p && (L = A.length - 1);
                let Z = A[L];
                if (!Z) break;
                Z = Z.firstElementChild || Z, d.setRange(Z, 0, Z, 0);
                break;
              }
              P = P.concat($), O = I = null;
            }
            if (P.length > 0)
              if (p) {
                const M = P.length - 1;
                for (let L = 0, Z; L <= M; L++) {
                  Z = P[L].childNodes;
                  for (let G = 0, te = Z.length, X; G < te && (X = Z[G], !!X); G++)
                    if (!o.onlyZeroWidthSpace(X)) {
                      /^\s{1,4}$/.test(X.textContent) ? o.removeItem(X) : /^\s{1,4}/.test(X.textContent) && (X.textContent = X.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const F = o.getChildElement(P[0], "text", !1), A = o.getChildElement(P[M], "text", !0);
                !O && F && (D.sc = F, D.so = 0), !I && A && (D.ec = A, D.eo = A.textContent.length);
              } else {
                const M = o.createTextNode(new f.Array(d._variable.tabSize + 1).join(" "));
                if (P.length === 1) {
                  if (!d.insertNode(M, null, !0)) return !1;
                  O || (D.sc = M, D.so = M.length), I || (D.ec = M, D.eo = M.length);
                } else {
                  const F = P.length - 1;
                  for (let Z = 0, G; Z <= F; Z++)
                    G = P[Z].firstChild, G && (o.isBreak(G) ? P[Z].insertBefore(M.cloneNode(!1), G) : G.textContent = M.textContent + G.textContent);
                  const A = o.getChildElement(P[0], "text", !1), L = o.getChildElement(P[F], "text", !0);
                  !O && A && (D.sc = A, D.so = 0), !I && L && (D.ec = L, D.eo = L.textContent.length);
                }
              }
            d.setRange(D.sc, D.so, D.ec, D.eo), d.history.push(!1);
            break;
          case 13:
            const U = o.getFreeFormatElement(r, null);
            if (d._charTypeHTML) {
              let M = "";
              if (!p && U || p ? M = "<br>" : M = "<" + _.nodeName + "><br></" + _.nodeName + ">", !d.checkCharCount(M, "byte-html"))
                return a.preventDefault(), !1;
            }
            if (!p && !w) {
              const M = d._isEdgeFormat(m.endContainer, m.endOffset, "end"), F = d._isEdgeFormat(m.startContainer, m.startOffset, "start");
              if (M && (/^H[1-6]$/i.test(_.nodeName) || /^HR$/i.test(_.nodeName))) {
                v._enterPrevent(a);
                let A = null;
                const L = d.appendFormatTag(_, i.defaultTag);
                if (M && M.length > 0) {
                  A = M.pop();
                  const Z = A;
                  for (; M.length > 0; )
                    A = A.appendChild(M.pop());
                  L.appendChild(Z);
                }
                if (A = A ? A.appendChild(L.firstChild) : L.firstChild, o.isBreak(A)) {
                  const Z = o.createTextNode(o.zeroWidthSpace);
                  A.parentNode.insertBefore(Z, A), d.setRange(Z, 1, Z, 1);
                } else
                  d.setRange(A, 0, A, 0);
                break;
              } else if (C && _ && !o.isCell(C) && !/^FIGCAPTION$/i.test(C.nodeName)) {
                const A = d.getRange();
                if (d.isEdgePoint(A.endContainer, A.endOffset) && o.isList(r.nextSibling)) {
                  v._enterPrevent(a);
                  const L = o.createElement("LI"), Z = o.createElement("BR");
                  L.appendChild(Z), _.parentNode.insertBefore(L, _.nextElementSibling), L.appendChild(r.nextSibling), d.setRange(Z, 1, Z, 1);
                  break;
                }
                if ((A.commonAncestorContainer.nodeType !== 3 || !A.commonAncestorContainer.nextElementSibling) && o.onlyZeroWidthSpace(_.innerText.trim()) && !o.isListCell(_.nextElementSibling)) {
                  v._enterPrevent(a);
                  let L = null;
                  if (o.isListCell(C.parentNode)) {
                    const Z = _.parentNode.parentNode;
                    C = Z.parentNode;
                    const G = o.createElement("LI");
                    G.innerHTML = "<br>", o.copyTagAttributes(G, _, i.lineAttrReset), L = G, C.insertBefore(L, Z.nextElementSibling);
                  } else {
                    const Z = o.isCell(C.parentNode) ? "DIV" : o.isList(C.parentNode) ? "LI" : o.isFormatElement(C.nextElementSibling) && !o.isRangeFormatElement(C.nextElementSibling) ? C.nextElementSibling.nodeName : o.isFormatElement(C.previousElementSibling) && !o.isRangeFormatElement(C.previousElementSibling) ? C.previousElementSibling.nodeName : i.defaultTag;
                    L = o.createElement(Z), o.copyTagAttributes(L, _, i.lineAttrReset);
                    const G = d.detachRangeFormatElement(C, [_], null, !0, !0);
                    G.cc.insertBefore(L, G.ec);
                  }
                  L.innerHTML = "<br>", o.removeItemAllParents(_, null, null), d.setRange(L, 1, L, 1);
                  break;
                }
              }
              if (U) {
                v._enterPrevent(a);
                const A = r === U, L = d.getSelection(), Z = r.childNodes, G = L.focusOffset, te = r.previousElementSibling, X = r.nextSibling;
                if (!o.isClosureFreeFormatElement(U) && Z && (A && m.collapsed && Z.length - 1 <= G + 1 && o.isBreak(Z[G]) && (!Z[G + 1] || (!Z[G + 2] || o.onlyZeroWidthSpace(Z[G + 2].textContent)) && Z[G + 1].nodeType === 3 && o.onlyZeroWidthSpace(Z[G + 1].textContent)) && G > 0 && o.isBreak(Z[G - 1]) || !A && o.onlyZeroWidthSpace(r.textContent) && o.isBreak(te) && (o.isBreak(te.previousSibling) || !o.onlyZeroWidthSpace(te.previousSibling.textContent)) && (!X || !o.isBreak(X) && o.onlyZeroWidthSpace(X.textContent)))) {
                  A ? o.removeItem(Z[G - 1]) : o.removeItem(r);
                  const Q = d.appendFormatTag(U, o.isFormatElement(U.nextElementSibling) && !o.isRangeFormatElement(U.nextElementSibling) ? U.nextElementSibling : null);
                  o.copyFormatAttributes(Q, U), d.setRange(Q, 1, Q, 1);
                  break;
                }
                if (A) {
                  T.insertHTML(m.collapsed && o.isBreak(m.startContainer.childNodes[m.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let Q = L.focusNode;
                  const le = L.focusOffset;
                  U === Q && (Q = Q.childNodes[le - G > 1 ? le - 1 : le]), d.setRange(Q, 1, Q, 1);
                } else {
                  const Q = L.focusNode.nextSibling, le = o.createElement("BR");
                  d.insertNode(le, null, !1);
                  const ue = le.previousSibling, de = le.nextSibling;
                  !o.isBreak(Q) && !o.isBreak(ue) && (!de || o.onlyZeroWidthSpace(de)) ? (le.parentNode.insertBefore(le.cloneNode(!1), le), d.setRange(le, 1, le, 1)) : d.setRange(de, 0, de, 0);
                }
                v._onShortcutKey = !0;
                break;
              }
              if (m.collapsed && (F || M)) {
                v._enterPrevent(a);
                const A = o.createElement("BR"), L = o.createElement(_.nodeName);
                o.copyTagAttributes(L, _, i.lineAttrReset);
                let Z = A;
                do {
                  if (!o.isBreak(r) && r.nodeType === 1) {
                    const G = r.cloneNode(!1);
                    G.appendChild(Z), Z = G;
                  }
                  r = r.parentNode;
                } while (_ !== r && _.contains(r));
                L.appendChild(Z), _.parentNode.insertBefore(L, F && !M ? _ : _.nextElementSibling), M && d.setRange(A, 1, A, 1);
                break;
              }
              if (_) {
                a.stopPropagation();
                let A, L = 0;
                if (m.collapsed)
                  o.onlyZeroWidthSpace(_) ? A = d.appendFormatTag(_, _.cloneNode(!1)) : A = o.splitElement(m.endContainer, m.endOffset, o.getElementDepth(_));
                else {
                  const Z = o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null), G = _.cloneNode(!1);
                  G.innerHTML = "<br>";
                  const te = m.commonAncestorContainer, X = te === m.startContainer && te === m.endContainer && o.onlyZeroWidthSpace(te) ? m : d.removeNode();
                  if (A = o.getFormatElement(X.container, null), !A) {
                    o.isWysiwygDiv(X.container) && (v._enterPrevent(a), e.element.wysiwyg.appendChild(G), A = G, o.copyTagAttributes(A, _, i.lineAttrReset), d.setRange(A, L, A, L));
                    break;
                  }
                  const Q = o.getRangeFormatElement(X.container);
                  if (A = A.contains(Q) ? o.getChildElement(Q, o.getFormatElement.bind(o)) : A, Z) {
                    if (M && !F)
                      A.parentNode.insertBefore(G, !X.prevContainer || X.container === X.prevContainer ? A.nextElementSibling : A), A = G, L = 0;
                    else if (L = X.offset, F) {
                      const le = A.parentNode.insertBefore(G, A);
                      M && (A = le, L = 0);
                    }
                  } else
                    M && F ? (A.parentNode.insertBefore(G, X.prevContainer && X.container === X.prevContainer ? A.nextElementSibling : A), A = G, L = 0) : A = o.splitElement(X.container, X.offset, o.getElementDepth(_));
                }
                v._enterPrevent(a), o.copyTagAttributes(A, _, i.lineAttrReset), d.setRange(A, L, A, L);
                break;
              }
            }
            if (y) break;
            if (C && o.getParentElement(C, "FIGCAPTION") && o.getParentElement(C, o.isList) && (v._enterPrevent(a), _ = d.appendFormatTag(_, null), d.setRange(_, 0, _, 0)), w) {
              a.preventDefault(), a.stopPropagation(), d.containerOff(), d.controllersOff();
              const M = e[w], F = M._container, A = F.previousElementSibling || F.nextElementSibling;
              let L = null;
              o.isListCell(F.parentNode) ? L = o.createElement("BR") : (L = o.createElement(o.isFormatElement(A) && !o.isRangeFormatElement(A) ? A.nodeName : i.defaultTag), L.innerHTML = "<br>"), p ? F.parentNode.insertBefore(L, F) : F.parentNode.insertBefore(L, F.nextElementSibling), d.callPlugin(w, function() {
                d.selectComponent(M._element, w) === !1 && d.blur();
              }, null);
            }
            break;
          case 27:
            if (w)
              return a.preventDefault(), a.stopPropagation(), d.controllersOff(), !1;
            break;
        }
        if (d.currentFileComponentInfo && d.controllersOff(), p && c === 16) {
          a.preventDefault(), a.stopPropagation();
          const E = d.plugins.table;
          if (E && !E._shift && !E._ref) {
            const B = o.getParentElement(_, o.isCell);
            if (B) {
              E.onTableCellMultiSelect.call(d, B, !0);
              return;
            }
          }
        } else if (p && (o.isOSX_IOS ? b : h) && c === 32) {
          a.preventDefault(), a.stopPropagation();
          const E = d.insertNode(o.createTextNode(" "));
          if (E) {
            d.setRange(E, E.length, E, E.length);
            return;
          }
        }
        if (o.isIE && !h && !b && !y && !v._nonTextKeyCode.test(c) && o.isBreak(m.commonAncestorContainer)) {
          const E = o.createTextNode(o.zeroWidthSpace);
          d.insertNode(E, null, !1), d.setRange(E, 1, E, 1);
        }
        v._directionKeyCode.test(c) && (f.setTimeout(d._editorRange.bind(d), 0), v._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(a) {
      if (a.shiftKey) return;
      let r = d.getSelectionNode();
      const c = function(b, m) {
        if (m || (m = 0), a.preventDefault(), a.stopPropagation(), !b) return;
        let y = d.getFileComponent(b);
        y ? d.selectComponent(y.target, y.pluginName) : (d.setRange(b, m, b, m), d.controllersOff());
      }, p = o.getParentElement(r, "table");
      if (p) {
        const b = o.getParentElement(r, "tr"), m = o.getParentElement(r, "td");
        let y = m, w = m;
        if (m) {
          for (; y && y.firstChild; ) y = y.firstChild;
          for (; w && w.lastChild; ) w = w.lastChild;
        }
        let _ = r;
        for (; _ && _.firstChild; ) _ = _.firstChild;
        const C = _ === y, N = _ === w;
        let E = null, B = 0;
        if (a.keyCode === 38 && C) {
          const R = b && b.previousElementSibling;
          for (R ? E = R.children[m.cellIndex] : E = o.getPreviousDeepestNode(p, d.context.element.wysiwyg); E && E.lastChild; ) E = E.lastChild;
          E && (B = E.textContent.length);
        } else if (a.keyCode === 40 && N) {
          const R = b && b.nextElementSibling;
          for (R ? E = R.children[m.cellIndex] : E = o.getNextDeepestNode(p, d.context.element.wysiwyg); E && E.firstChild; ) E = E.firstChild;
        }
        if (E)
          return c(E, B), !1;
      }
      const h = d.getFileComponent(r);
      if (h) {
        const b = /37|38/.test(a.keyCode), m = /39|40/.test(a.keyCode);
        if (b) {
          const y = o.getPreviousDeepestNode(h.target, d.context.element.wysiwyg);
          c(y, y && y.textContent.length);
        } else if (m) {
          const y = o.getNextDeepestNode(h.target, d.context.element.wysiwyg);
          c(y);
        }
      }
    },
    onKeyUp_wysiwyg: function(a) {
      if (v._onShortcutKey) return;
      d._editorRange();
      const r = a.keyCode, c = a.ctrlKey || a.metaKey || r === 91 || r === 92 || r === 224, p = a.altKey;
      if (d.isReadOnly) {
        !c && v._cursorMoveKeyCode.test(r) && v._applyTagEffects();
        return;
      }
      const h = d.getRange();
      let b = d.getSelectionNode();
      if (d._isBalloon && (d._isBalloonAlways && r !== 27 || !h.collapsed))
        if (d._isBalloonAlways)
          r !== 27 && v._showToolbarBalloonDelay();
        else {
          v._showToolbarBalloon();
          return;
        }
      let m = b;
      for (; m && m.firstChild; ) m = m.firstChild;
      const y = d.getFileComponent(m);
      if (!(a.keyCode === 16 || a.shiftKey) && y && d.selectComponent(y.target, y.pluginName), r === 8 && o.isWysiwygDiv(b) && b.textContent === "" && b.children.length === 0) {
        a.preventDefault(), a.stopPropagation(), b.innerHTML = "";
        const E = o.createElement(o.isFormatElement(d._variable.currentNodes[0]) ? d._variable.currentNodes[0] : i.defaultTag);
        E.innerHTML = "<br>", b.appendChild(E), d.setRange(E, 0, E, 0), v._applyTagEffects(), d.history.push(!1);
        return;
      }
      const w = o.getFormatElement(b, null), _ = o.getRangeFormatElement(b, null), C = d._formatAttrsTemp;
      if (C) {
        for (let E = 0, B = C.length; E < B; E++) {
          if (r === 13 && /^id$/i.test(C[E].name)) {
            w.removeAttribute("id");
            continue;
          }
          w.setAttribute(C[E].name, C[E].value);
        }
        d._formatAttrsTemp = null;
      }
      if (!w && h.collapsed && !o.isComponent(b) && !o.isList(b) && d._setDefaultFormat(o.isRangeFormatElement(_) ? "DIV" : i.defaultTag) !== null && (b = d.getSelectionNode()), !c && !p && !v._nonTextKeyCode.test(r) && b.nodeType === 3 && o.zeroWidthRegExp.test(b.textContent) && !(a.isComposing !== void 0 ? a.isComposing : v._IEisComposing)) {
        let E = h.startOffset, B = h.endOffset;
        const R = (b.textContent.substring(0, B).match(v._frontZeroWidthReg) || "").length;
        E = h.startOffset - R, B = h.endOffset - R, b.textContent = b.textContent.replace(o.zeroWidthRegExp, ""), d.setRange(b, E < 0 ? 0 : E, b, B < 0 ? 0 : B);
      }
      v._deleteKeyCode.test(r) && w && o.onlyZeroWidthSpace(w.textContent) && !w.previousElementSibling && (w.innerHTML = "<br>", d.setRange(w, 0, w, 0)), d._charCount(""), !(typeof T.onKeyUp == "function" && T.onKeyUp(a, d) === !1) && !c && !p && !v._historyIgnoreKeyCode.test(r) && d.history.push(!0);
    },
    onScroll_wysiwyg: function(a) {
      d.controllersOff(), d._isBalloon && v._hideToolbar(), typeof T.onScroll == "function" && T.onScroll(a, d);
    },
    onFocus_wysiwyg: function(a) {
      d._antiBlur || (d.hasFocus = !0, f.setTimeout(v._applyTagEffects), d._isInline && v._showToolbarInline(), typeof T.onFocus == "function" && T.onFocus(a, d));
    },
    onBlur_wysiwyg: function(a) {
      d._antiBlur || d._variable.isCodeView || (d.hasFocus = !1, d.effectNode = null, d.controllersOff(), (d._isInline || d._isBalloon) && v._hideToolbar(), d._setKeyEffect([]), d._variable.currentNodes = [], d._variable.currentNodesMap = [], i.showPathLabel && (e.element.navigation.textContent = ""), typeof T.onBlur == "function" && T.onBlur(a, d, this));
    },
    onMouseDown_resizingBar: function(a) {
      a.stopPropagation(), d.submenuOff(), d.controllersOff(), d._variable.resizeClientY = a.clientY, e.element.resizeBackground.style.display = "block";
      function r() {
        e.element.resizeBackground.style.display = "none", u.removeEventListener("mousemove", v._resize_editor), u.removeEventListener("mouseup", r);
      }
      u.addEventListener("mousemove", v._resize_editor), u.addEventListener("mouseup", r);
    },
    _resize_editor: function(a) {
      const r = e.element.editorArea.offsetHeight + (a.clientY - d._variable.resizeClientY), c = r < d._variable.minResizingSize ? d._variable.minResizingSize : r;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = c + "px", d._variable.resizeClientY = a.clientY, o.isResizeObserverSupported || d.__callResizeFunction(c, null);
    },
    onResize_window: function() {
      o.isResizeObserverSupported || d.resetResponsiveToolbar();
      const a = e.element.toolbar, r = a.style.display === "none" || d._isInline && !d._inlineToolbarAttr.isShow;
      if (!(a.offsetWidth === 0 && !r)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = f.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), d.submenuActiveButton && d.submenu && d._setMenuPosition(d.submenuActiveButton, d.submenu), d._variable.isFullScreen) {
          d._variable.innerHeight_fullScreen += f.innerHeight - a.offsetHeight - d._variable.innerHeight_fullScreen, e.element.editorArea.style.height = d._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (d._variable.isCodeView && d._isInline) {
          v._showToolbarInline();
          return;
        }
        d._iframeAutoHeight(), d._sticky && (a.style.width = e.element.topArea.offsetWidth - 2 + "px", v.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (d._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || i.stickyToolbar < 0) return;
      const a = e.element, r = a.editorArea.offsetHeight, c = (this.scrollY || u.documentElement.scrollTop) + i.stickyToolbar, p = v._getEditorOffsets(i.toolbarContainer).top - (d._isInline ? a.toolbar.offsetHeight : 0), h = d._isInline && c - p > 0 ? c - p - e.element.toolbar.offsetHeight : 0;
      c < p ? v._offStickyToolbar() : c + d._variable.minResizingSize >= r + p ? (d._sticky || v._onStickyToolbar(h), a.toolbar.style.top = h + r + p + i.stickyToolbar - c - d._variable.minResizingSize + "px") : c >= p && v._onStickyToolbar(h);
    },
    _getEditorOffsets: function(a) {
      let r = a || e.element.topArea, c = 0, p = 0, h = 0;
      for (; r; )
        c += r.offsetTop, p += r.offsetLeft, h += r.scrollTop, r = r.offsetParent;
      return {
        top: c,
        left: p,
        scroll: h
      };
    },
    _getPageBottomSpace: function() {
      return u.documentElement.scrollHeight - (v._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(a) {
      const r = e.element;
      !d._isInline && !i.toolbarContainer && (r._stickyDummy.style.height = r.toolbar.offsetHeight + "px", r._stickyDummy.style.display = "block"), r.toolbar.style.top = i.stickyToolbar + a + "px", r.toolbar.style.width = d._isInline ? d._inlineToolbarAttr.width : r.toolbar.offsetWidth + "px", o.addClass(r.toolbar, "se-toolbar-sticky"), d._sticky = !0;
    },
    _offStickyToolbar: function() {
      const a = e.element;
      a._stickyDummy.style.display = "none", a.toolbar.style.top = d._isInline ? d._inlineToolbarAttr.top : "", a.toolbar.style.width = d._isInline ? d._inlineToolbarAttr.width : "", a.editorArea.style.marginTop = "", o.removeClass(a.toolbar, "se-toolbar-sticky"), d._sticky = !1;
    },
    _codeViewAutoHeight: function() {
      d._variable.isFullScreen || (e.element.code.style.height = e.element.code.scrollHeight + "px");
    },
    // FireFox - table delete, Chrome - image, video, audio
    _hardDelete: function() {
      const a = d.getRange(), r = a.startContainer, c = a.endContainer, p = o.getRangeFormatElement(r), h = o.getRangeFormatElement(c), b = o.isCell(p), m = o.isCell(h), y = a.commonAncestorContainer;
      if ((b && !p.previousElementSibling && !p.parentElement.previousElementSibling || m && !h.nextElementSibling && !h.parentElement.nextElementSibling) && p !== h)
        if (!b)
          o.removeItem(o.getParentElement(h, function(C) {
            return y === C.parentNode;
          }));
        else if (!m)
          o.removeItem(o.getParentElement(p, function(C) {
            return y === C.parentNode;
          }));
        else
          return o.removeItem(o.getParentElement(p, function(C) {
            return y === C.parentNode;
          })), d.nativeFocus(), !0;
      const w = r.nodeType === 1 ? o.getParentElement(r, ".se-component") : null, _ = c.nodeType === 1 ? o.getParentElement(c, ".se-component") : null;
      return w && o.removeItem(w), _ && o.removeItem(_), !1;
    },
    onPaste_wysiwyg: function(a) {
      const r = o.isIE ? f.clipboardData : a.clipboardData;
      return r ? v._dataTransferAction("paste", a, r) : !0;
    },
    _setClipboardComponent: function(a, r, c) {
      a.preventDefault(), a.stopPropagation(), c.setData("text/html", r.component.outerHTML);
    },
    onCopy_wysiwyg: function(a) {
      const r = o.isIE ? f.clipboardData : a.clipboardData;
      if (typeof T.onCopy == "function" && T.onCopy(a, r, d) === !1)
        return a.preventDefault(), a.stopPropagation(), !1;
      const c = d.currentFileComponentInfo;
      c && !o.isIE && (v._setClipboardComponent(a, c, r), o.addClass(c.component, "se-component-copy"), f.setTimeout(function() {
        o.removeClass(c.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(a) {
      if (typeof T.onSave == "function") {
        T.onSave(a, d);
        return;
      }
    },
    onCut_wysiwyg: function(a) {
      const r = o.isIE ? f.clipboardData : a.clipboardData;
      if (typeof T.onCut == "function" && T.onCut(a, r, d) === !1)
        return a.preventDefault(), a.stopPropagation(), !1;
      const c = d.currentFileComponentInfo;
      c && !o.isIE && (v._setClipboardComponent(a, c, r), o.removeItem(c.component), d.controllersOff()), f.setTimeout(function() {
        d.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(a) {
      if (d.isReadOnly || o.isIE)
        return a.preventDefault(), a.stopPropagation(), !1;
      const r = a.dataTransfer;
      return r ? (v._setDropLocationSelection(a), d.removeNode(), document.body.contains(d.currentControllerTarget) || d.controllersOff(), v._dataTransferAction("drop", a, r)) : !0;
    },
    _setDropLocationSelection: function(a) {
      const r = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let c = null;
      if (a.rangeParent ? (r.startContainer = a.rangeParent, r.startOffset = a.rangeOffset, r.endContainer = a.rangeParent, r.endOffset = a.rangeOffset) : d._wd.caretRangeFromPoint ? c = d._wd.caretRangeFromPoint(a.clientX, a.clientY) : c = d.getRange(), c && (r.startContainer = c.startContainer, r.startOffset = c.startOffset, r.endContainer = c.endContainer, r.endOffset = c.endOffset), r.startContainer === r.endContainer) {
        const p = o.getParentElement(r.startContainer, o.isComponent);
        p && (r.startContainer = p, r.startOffset = 0, r.endContainer = p, r.endOffset = 0);
      }
      d.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(a, r, c) {
      let p, h;
      if (o.isIE) {
        p = c.getData("Text");
        const b = d.getRange(), m = o.createElement("DIV"), y = {
          sc: b.startContainer,
          so: b.startOffset,
          ec: b.endContainer,
          eo: b.endOffset
        };
        return m.setAttribute("contenteditable", !0), m.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(m), m.focus(), f.setTimeout(function() {
          h = m.innerHTML, o.removeItem(m), d.setRange(y.sc, y.so, y.ec, y.eo), v._setClipboardData(a, r, p, h, c);
        }), !0;
      } else if (p = c.getData("text/plain"), h = c.getData("text/html"), v._setClipboardData(a, r, p, h, c) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(a, r, c, p, h) {
      const b = /class=["']*Mso(Normal|List)/i.test(p) || /content=["']*Word.Document/i.test(p) || /content=["']*OneNote.File/i.test(p) || /content=["']*Excel.Sheet/i.test(p);
      !p ? p = o._HTMLConvertor(c).replace(/\n/g, "<br>") : (p = p.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), b && (p = p.replace(/\n/g, " "), c = c.replace(/\n/g, " ")), p = d.cleanHTML(p, d.pasteTagsWhitelistRegExp, d.pasteTagsBlacklistRegExp));
      const y = d._charCount(d._charTypeHTML ? p : c);
      if (a === "paste" && typeof T.onPaste == "function") {
        const _ = T.onPaste(r, p, y, d);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          p = _;
        }
      }
      if (a === "drop" && typeof T.onDrop == "function") {
        const _ = T.onDrop(r, p, y, d);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          p = _;
        }
      }
      const w = h.files;
      if (w.length > 0 && !b)
        return /^image/.test(w[0].type) && d.plugins.image && T.insertImage(w), !1;
      if (!y)
        return !1;
      if (p)
        return T.insertHTML(p, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(a) {
      if (d.isDisabled || d.isReadOnly) return !1;
      const r = o.getParentElement(a.target, o.isComponent), c = d._lineBreaker.style;
      if (r && !d.currentControllerName) {
        const p = e.element;
        let h = 0, b = p.wysiwyg;
        do
          h += b.scrollTop, b = b.parentElement;
        while (b && !/^(BODY|HTML)$/i.test(b.nodeName));
        const m = p.wysiwyg.scrollTop, y = v._getEditorOffsets(null), w = o.getOffset(r, p.wysiwygFrame).top + m, _ = a.pageY + h + (i.iframe && !i.toolbarContainer ? p.toolbar.offsetHeight : 0), C = w + (i.iframe ? h : y.top), N = o.isListCell(r.parentNode);
        let E = "", B = "";
        if ((N ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) && _ < C + 20)
          B = w, E = "t";
        else if ((N ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) && _ > C + r.offsetHeight - 20)
          B = w + r.offsetHeight, E = "b";
        else {
          c.display = "none";
          return;
        }
        d._variable._lineBreakComp = r, d._variable._lineBreakDir = E, c.top = B - m + "px", d._lineBreakerButton.style.left = o.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", c.display = "block";
      } else c.display !== "none" && (c.display = "none");
    },
    _enterPrevent: function(a) {
      a.preventDefault(), o.isMobile && d.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(a) {
      a.preventDefault();
    },
    _onLineBreak: function(a) {
      a.preventDefault();
      const r = d._variable._lineBreakComp, c = this ? this : d._variable._lineBreakDir, p = o.isListCell(r.parentNode), h = o.createElement(p ? "BR" : o.isCell(r.parentNode) ? "DIV" : i.defaultTag);
      if (p || (h.innerHTML = "<br>"), d._charTypeHTML && !d.checkCharCount(h.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(h, c === "t" ? r : r.nextSibling), d._lineBreaker.style.display = "none", d._variable._lineBreakComp = null;
      const b = p ? h : h.firstChild;
      d.setRange(b, 1, b, 1), d.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const a = i.iframe ? d._ww : e.element.wysiwyg;
      o.isResizeObserverSupported && (this._resizeObserver = new f.ResizeObserver(function(r) {
        d.__callResizeFunction(-1, r[0]);
      })), e.element.toolbar.addEventListener("mousedown", v._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", v._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", v.onClick_toolbar, !1), a.addEventListener("mousedown", v.onMouseDown_wysiwyg, !1), a.addEventListener("click", v.onClick_wysiwyg, !1), a.addEventListener(o.isIE ? "textinput" : "input", v.onInput_wysiwyg, !1), a.addEventListener("keydown", v.onKeyDown_wysiwyg, !1), a.addEventListener("keyup", v.onKeyUp_wysiwyg, !1), a.addEventListener("paste", v.onPaste_wysiwyg, !1), a.addEventListener("copy", v.onCopy_wysiwyg, !1), a.addEventListener("cut", v.onCut_wysiwyg, !1), a.addEventListener("drop", v.onDrop_wysiwyg, !1), a.addEventListener("scroll", v.onScroll_wysiwyg, !1), a.addEventListener("focus", v.onFocus_wysiwyg, !1), a.addEventListener("blur", v.onBlur_wysiwyg, !1), v._lineBreakerBind = { a: v._onLineBreak.bind(""), t: v._onLineBreak.bind("t"), b: v._onLineBreak.bind("b") }, a.addEventListener("mousemove", v.onMouseMove_wysiwyg, !1), d._lineBreakerButton.addEventListener("mousedown", v._onMouseDown_lineBreak, !1), d._lineBreakerButton.addEventListener("click", v._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", v._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", v._lineBreakerBind.b, !1), a.addEventListener("touchstart", v.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), a.addEventListener("touchend", v.onClick_wysiwyg, { passive: !0, useCapture: !1 }), i.height === "auto" && !i.codeMirrorEditor && (e.element.code.addEventListener("keydown", v._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", v._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", v._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(i.height) && i.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", v.onMouseDown_resizingBar, !1) : o.addClass(e.element.resizingBar, "se-resizing-none")), v._setResponsiveToolbar(), o.isResizeObserverSupported && (this._toolbarObserver = new f.ResizeObserver(d.resetResponsiveToolbar)), f.addEventListener("resize", v.onResize_window, !1), i.stickyToolbar > -1 && f.addEventListener("scroll", v.onScroll_window, !1);
    },
    _removeEvent: function() {
      const a = i.iframe ? d._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", v._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", v._buttonsEventHandler), e.element.toolbar.removeEventListener("click", v.onClick_toolbar), a.removeEventListener("mousedown", v.onMouseDown_wysiwyg), a.removeEventListener("click", v.onClick_wysiwyg), a.removeEventListener(o.isIE ? "textinput" : "input", v.onInput_wysiwyg), a.removeEventListener("keydown", v.onKeyDown_wysiwyg), a.removeEventListener("keyup", v.onKeyUp_wysiwyg), a.removeEventListener("paste", v.onPaste_wysiwyg), a.removeEventListener("copy", v.onCopy_wysiwyg), a.removeEventListener("cut", v.onCut_wysiwyg), a.removeEventListener("drop", v.onDrop_wysiwyg), a.removeEventListener("scroll", v.onScroll_wysiwyg), a.removeEventListener("mousemove", v.onMouseMove_wysiwyg), d._lineBreakerButton.removeEventListener("mousedown", v._onMouseDown_lineBreak), d._lineBreakerButton.removeEventListener("click", v._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", v._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", v._lineBreakerBind.b), v._lineBreakerBind = null, a.removeEventListener("touchstart", v.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), a.removeEventListener("touchend", v.onClick_wysiwyg, { passive: !0, useCapture: !1 }), a.removeEventListener("focus", v.onFocus_wysiwyg), a.removeEventListener("blur", v.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", v._codeViewAutoHeight), e.element.code.removeEventListener("keyup", v._codeViewAutoHeight), e.element.code.removeEventListener("paste", v._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", v.onMouseDown_resizingBar), v._resizeObserver && (v._resizeObserver.unobserve(e.element.wysiwygFrame), v._resizeObserver = null), v._toolbarObserver && (v._toolbarObserver.unobserve(e.element._toolbarShadow), v._toolbarObserver = null), f.removeEventListener("resize", v.onResize_window), f.removeEventListener("scroll", v.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (s.length === 0) {
        s = null;
        return;
      }
      v._responsiveCurrentSize = "default";
      const a = v._responsiveButtonSize = [], r = v._responsiveButtons = { default: s[0] };
      for (let c = 1, p = s.length, h, b; c < p; c++)
        b = s[c], h = b[0] * 1, a.push(h), r[h] = b[1];
      a.sort(function(c, p) {
        return c - p;
      }).unshift("default");
    }
  }, T = {
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
    setToolbarButtons: function(a) {
      d.submenuOff(), d.containerOff(), d.moreLayerOff();
      const r = Yi._createToolBar(u, a, d.plugins, i);
      s = r.responsiveButtons, v._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const c = Xi(e.element.originElement, d._getConstructed(e.element), i);
      e.element = c.element, e.tool = c.tool, i.iframe && (e.element.wysiwyg = d._wd.body), d._recoverButtonStates(), d._cachingButtons(), d.history._resetCachingButton(), d.effectNode = null, d.hasFocus && v._applyTagEffects(), d.isReadOnly && o.setDisabledButtons(!0, d.resizingDisabledButtons), typeof T.onSetToolbarButtons == "function" && T.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), d);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(a) {
      v._removeEvent(), d._resetComponents(), o.removeClass(d._styleCommandMap.showBlocks, "active"), o.removeClass(d._styleCommandMap.codeView, "active"), d._variable.isCodeView = !1, d._iframeAuto = null, d.plugins = a.plugins || d.plugins;
      const r = [i, a].reduce(function(b, m) {
        for (let y in m)
          if (o.hasOwn(m, y))
            if (y === "plugins" && m[y] && b[y]) {
              let w = b[y], _ = m[y];
              w = w.length ? w : f.Object.keys(w).map(function(C) {
                return w[C];
              }), _ = _.length ? _ : f.Object.keys(_).map(function(C) {
                return _[C];
              }), b[y] = _.filter(function(C) {
                return w.indexOf(C) === -1;
              }).concat(w);
            } else
              b[y] = m[y];
        return b;
      }, {}), c = e.element, p = c.wysiwyg.innerHTML, h = Yi._setOptions(r, e, i);
      h.callButtons && (t = h.callButtons, d.initPlugins = {}), h.plugins && (d.plugins = n = h.plugins), c._menuTray.children.length === 0 && (this._menuTray = {}), s = h.toolbar.responsiveButtons, d.options = i = r, d.lang = l = i.lang, i.iframe && c.wysiwygFrame.addEventListener("load", function() {
        o._setIframeDocument(this, i), d._setOptionsInit(c, p);
      }), c.editorArea.appendChild(c.wysiwygFrame), i.iframe || d._setOptionsInit(c, p);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(a) {
      const r = i._editorStyles = o._setDefaultOptionStyle(i, a), c = e.element;
      c.topArea.style.cssText = r.top, c.code.style.cssText = i._editorStyles.frame, c.code.style.display = "none", i.height === "auto" ? c.code.style.overflow = "hidden" : c.code.style.overflow = "", i.iframe ? (c.wysiwygFrame.style.cssText = r.frame, c.wysiwyg.style.cssText = r.editor) : c.wysiwygFrame.style.cssText = r.frame + r.editor;
    },
    /**
     * @description Open a notice area
     * @param {String} message Notice message
     */
    noticeOpen: function(a) {
      d.notice.open.call(d, a);
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
      const a = d.getContents(!1);
      e.element.originElement.value = a, v.onSave_wysiwyg(a, d);
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
      return d.getContents(a);
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
      return a = typeof a == "string" ? a : i.charCounterType, d.getCharLength(d._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, a);
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
      !d.plugins.image || !a || (d.initPlugins.image ? d.plugins.image.submitAction.call(d, a) : d.callPlugin("image", d.plugins.image.submitAction.bind(d, a), null), d.focus());
    },
    /**
     * @description Inserts an HTML element or HTML string or plain string at the current cursor position
     * @param {Element|String} html HTML Element or HTML string or plain string
     * @param {Boolean} notCleaningData If true, inserts the HTML string without refining it with core.cleanHTML.
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} rangeSelection If true, range select the inserted node.
     */
    insertHTML: function(a, r, c, p) {
      if (e.element.wysiwygFrame.contains(d.getSelection().focusNode) || d.focus(), typeof a == "string") {
        r || (a = d.cleanHTML(a, null, null));
        try {
          if (o.isListCell(o.getFormatElement(d.getSelectionNode(), null))) {
            const B = u.createRange().createContextualFragment(a).childNodes;
            d._isFormatData(B) && (a = d._convertListCell(B));
          }
          const b = u.createRange().createContextualFragment(a).childNodes;
          if (c) {
            const E = d._charTypeHTML ? "outerHTML" : "textContent";
            let B = "";
            for (let R = 0, W = b.length; R < W; R++)
              B += b[R][E];
            if (!d.checkCharCount(B, null)) return;
          }
          let m, y, w, _, C;
          for (; m = b[0]; ) {
            if (_ && _.nodeType === 3 && y && y.nodeType === 1 && o.isBreak(m)) {
              _ = m, o.removeItem(m);
              continue;
            }
            w = d.insertNode(m, y, !1), y = w.container || w, C || (C = w), _ = m;
          }
          _.nodeType === 3 && y.nodeType === 1 && (y = _);
          const N = y.nodeType === 3 ? w.endOffset || y.textContent.length : y.childNodes.length;
          p ? d.setRange(C.container || C, C.startOffset || 0, y, N) : d.setRange(y, N, y, N);
        } catch (h) {
          if (d.isDisabled || d.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + h), d.execCommand("insertHTML", !1, a);
        }
      } else if (o.isComponent(a))
        d.insertComponent(a, !1, c, !1);
      else {
        let h = null;
        (o.isFormatElement(a) || o.isMedia(a)) && (h = o.getFormatElement(d.getSelectionNode(), null)), d.insertNode(a, h, c);
      }
      d.effectNode = null, d.focus(), d.history.push(!1);
    },
    /**
     * @description Change the contents of the suneditor
     * @param {String|undefined} contents Contents to Input
     */
    setContents: function(a) {
      d.setContents(a);
    },
    /**
     * @description Add contents to the suneditor
     * @param {String} contents Contents to Input
     */
    appendContents: function(a) {
      const r = d.convertContentsForEditor(a);
      if (d._variable.isCodeView)
        d._setCodeView(d._getCodeView() + `
` + d.convertHTMLForCodeView(r, !1));
      else {
        const c = o.createElement("DIV");
        c.innerHTML = r;
        const p = e.element.wysiwyg, h = c.children;
        for (let b = 0, m = h.length; b < m; b++)
          h[b] && p.appendChild(h[b]);
      }
      d.history.push(!1);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(a) {
      d.isReadOnly = a, o.setDisabledButtons(!!a, d.resizingDisabledButtons), a ? (d.controllersOff(), d.submenuActiveButton && d.submenuActiveButton.disabled && d.submenuOff(), d._moreLayerActiveButton && d._moreLayerActiveButton.disabled && d.moreLayerOff(), d.containerActiveButton && d.containerActiveButton.disabled && d.containerOff(), d.modalForm && d.plugins.dialog.close.call(d), e.element.code.setAttribute("readOnly", "true"), o.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), o.removeClass(e.element.wysiwygFrame, "se-read-only")), i.codeMirrorEditor && i.codeMirrorEditor.setOption("readOnly", !!a);
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
      d.submenuOff(), d.containerOff(), d.controllersOff(), d.notice && d.notice.close.call(d), d.modalForm && d.plugins.dialog.close.call(d), d.history._destroy(), v._removeEvent(), o.removeItem(e.element.toolbar), o.removeItem(e.element.topArea);
      for (let a in d.functions)
        o.hasOwn(d, a) && delete d.functions[a];
      for (let a in d)
        o.hasOwn(d, a) && delete d[a];
      for (let a in v)
        o.hasOwn(v, a) && delete v[a];
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
        d.controllersOff(), d.modalForm && d.plugins.dialog.close.call(d), e.element.wysiwyg.setAttribute("contenteditable", !1), d.isDisabled = !0, i.codeMirrorEditor ? i.codeMirrorEditor.setOption("readOnly", !0) : e.element.code.setAttribute("disabled", "disabled");
      },
      /**
       * @description Enable the wysiwyg area
       */
      enable: function() {
        e.element.wysiwyg.setAttribute("contenteditable", !0), d.isDisabled = !1, i.codeMirrorEditor ? i.codeMirrorEditor.setOption("readOnly", !1) : e.element.code.removeAttribute("disabled");
      }
    }
  };
  d.functions = T, d.options = i;
  let S = e.element, x = S.originElement, z = S.topArea;
  return x.style.display = "none", z.style.display = "block", i.iframe && S.wysiwygFrame.addEventListener("load", function() {
    o._setIframeDocument(this, i), d._editorInit(!1, i.value), i.value = null;
  }), typeof x.nextElementSibling == "object" ? x.parentNode.insertBefore(z, x.nextElementSibling) : x.parentNode.appendChild(z), S.editorArea.appendChild(S.wysiwygFrame), S = x = z = null, i.iframe || (d._editorInit(!1, i.value), i.value = null), T;
}
const wr = {
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
            let o = s[f], g = u[f];
            o = o.length ? o : Object.keys(o).map(function(d) {
              return o[d];
            }), g = g.length ? g : Object.keys(g).map(function(d) {
              return g[d];
            }), s[f] = g.filter(function(d) {
              return o.indexOf(d) === -1;
            }).concat(o);
          } else
            s[f] = u[f];
      return s;
    }, {}));
    const l = typeof e == "string" ? document.getElementById(e) : e;
    if (!l)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const i = Yi.init(l, t);
    if (i.constructed._top.id && document.getElementById(i.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + i.constructed._top.id + '")');
    return Cr(Xi(l, i.constructed, i.options), i.pluginCallButtons, i.plugins, i.options.lang, t, i._responsiveButtons);
  }
}, kr = ["innerHTML", "id", "tabindex"], Sr = /* @__PURE__ */ Ce({
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
    const g = K(i.focusing), d = (x) => {
      g.value = !0, l("focus", x);
    }, v = (x) => {
      g.value = !1, l("blur", x);
    }, T = (x) => {
      o && clearTimeout(o), o = setTimeout(() => {
        Gi(x) === "" ? u.value = "" : u.value = x;
      }, 100);
    }, S = () => {
      let x = {
        //@ts-ignore
        lang: Jl[i.lang] ? Jl[i.lang] : Ui,
        plugins: {
          ...br
        },
        ...yr
      };
      f = wr.create(i.id, x), f.onChange = (z) => {
        T(z), i.disabled ? f == null || f.disabled() : f == null || f.enabled();
      }, f.onKeyUp = (z, a) => {
        T(a.getContents(!1));
      }, f.onBlur = () => {
        v();
      }, f.onClick = () => {
        d();
      };
    };
    return ie(() => i.modelValue, (x) => u.value = x), ie(u, (x) => l("update:modelValue", x)), ft(() => {
      S();
    }), t({
      doSetValue: (x) => {
        f && f.setContents(x);
      }
    }), (x, z) => (H(), ce("div", {
      innerHTML: u.value,
      ref_key: "input",
      ref: s,
      id: x.id,
      tabindex: x.tabindex
    }, null, 8, kr));
  }
}), et = (e, t) => {
  if (typeof e == "string" && (e = Ze(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let n = e.substring(3), l = fn(n), i = [];
    for (let s in l) i.push({ value: s, label: l[s] });
    return st.i18nOptionsFormatter[n] && (i = st.i18nOptionsFormatter[n](i)), et(i, t);
  }
  return !Array.isArray(e) || e.length === 0 ? [] : jn(
    e.map((n) => {
      if (typeof n == "object") return n;
      if (typeof n == "string" || typeof n == "number")
        return {
          label: String(n),
          value: n
        };
    }).filter((n) => typeof n < "u")
  );
}, jn = (e) => e.reduce((t, n) => t.find((i) => i.value === n.value) ? t : t.concat([n]), []), Nt = (e, t = "", n = !0, l = void 0) => {
  if (t === "" && typeof l != "function") return !0;
  const i = String(t).toLowerCase();
  let s = String(e.label).toLowerCase();
  return !(!(s.indexOf(i) !== -1 && (n || s !== i)) || typeof l == "function" && !l(e));
}, xt = (e, t) => {
  if (t !== "")
    return e.find((n) => Array.isArray(t) ? t.includes(n.value) : n.value == t);
}, xr = (e, t, n) => jn([...et(t, n), ...e]), ll = (e, t, n) => {
  if (n) {
    if (Array.isArray(t)) {
      let l = t.findIndex((i) => i == e.value);
      return typeof l > "u" ? !1 : l > -1;
    }
    return !1;
  }
  return e.value == t;
}, Fi = (e, t) => {
  let n = t.findIndex((l) => l == e.value);
  return typeof n > "u" && (n = -1), n;
}, rn = (e, t) => ((t == null ? void 0 : t.filter((l) => l == e.value)) ?? []).map((l) => t.indexOf(l)), Tr = (e, t) => ((t == null ? void 0 : t.filter((l) => l.value == e.value)) ?? []).map((l) => t.indexOf(l)), nl = (e) => {
  var t;
  return e.option.disabled ? !1 : (e.focusedOptionIndex = -1, e.optionValueType === "option" ? e.value.value = e.option : ((t = e.optionsConfig) == null ? void 0 : t.typeCasting) === "int" ? e.value.value = parseInt(e.option.value) : e.value.value = String(e.option.value), e.pickedOptions.splice(0, 1, e.option), e.showOptions = !1, e.searchMode = !1, typeof e.callback == "function" && e.callback({ option: e.option }), !0);
}, ol = (e) => {
  var l, i;
  if (e.option.disabled) return !1;
  let t = [];
  e.optionValueType === "option" ? t = rn(e.option, (l = e.value.value) == null ? void 0 : l.value) : t = rn(e.option, e.value.value);
  let n = Tr(e.option, e.pickedOptions.value);
  return t.length === 0 ? (e.optionValueType === "option" ? e.value.value.push(e.option) : ((i = e.optionsConfig) == null ? void 0 : i.typeCasting) === "int" ? e.value.value.push(parseInt(e.option.value)) : e.value.value.push(String(e.option.value)), e.tagMode || e.pickedOptions.value.push(e.option)) : e.tagMode || (n.forEach((s) => {
    e.pickedOptions.value.splice(s, 1);
  }), t.forEach((s) => {
    e.value.value.splice(s, 1);
  })), typeof e.keepFocused == "function" ? e.keepFocused() : e.searchMode && e.searchField && e.searchField.keepFocused(), typeof e.callback == "function" && e.callback({ option: e.option }), !0;
}, Rt = (e) => {
  var n, l, i;
  if (e.multiple) {
    let s = e.options.length;
    for (let u = 0; u < s; ++u) {
      let f = e.optionValueType === "option" ? xt(e.options, e.value.value[u].value) : ((n = e.optionsConfig) == null ? void 0 : n.typeCasting) === "int" ? xt(e.options, parseInt(e.value.value[u])) : xt(e.options, e.value.value[u]);
      typeof f < "u" && (e.pickedOptions.length === 0 ? e.pickedOptions.push(f) : e.pickedOptions.splice(u, 1, f));
    }
    return;
  }
  let t = e.optionValueType === "option" ? xt(e.options, (l = e.value.value) == null ? void 0 : l.value) : ((i = e.optionsConfig) == null ? void 0 : i.typeCasting) === "int" ? xt(e.options, parseInt(e.value.value)) : xt(e.options, e.value.value);
  typeof t < "u" && (e.pickedOptions.length === 0 ? e.pickedOptions.push(t) : e.pickedOptions.splice(0, 1, t));
}, un = (e) => {
  var l, i, s, u, f;
  let t = e.options.value.length - 1;
  if (t === -1) return !1;
  const n = e.event.key ?? "";
  if (e.focusing) {
    if (["ArrowDown", "ArrowUp", "Enter"].includes(n) && (e.event.preventDefault(), e.event.stopPropagation()), n === "ArrowDown") {
      ++e.focusedIndex.value, e.focusedIndex.value > t && (e.focusedIndex.value = 0);
      let o = e.options.value[e.focusedIndex.value];
      for (; !Nt(o, e.query, !0, e.optionsConfig.filter) && e.focusedIndex.value < t; )
        ++e.focusedIndex.value, o = e.options.value[e.focusedIndex.value];
      let g = typeof ((l = e.container.value) == null ? void 0 : l.querySelector) == "function" && ((i = e.container.value) == null ? void 0 : i.querySelector('[data-index="' + e.focusedIndex.value + '"]'));
      return g && g.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" }), !0;
    } else if (n === "ArrowUp") {
      --e.focusedIndex.value, e.focusedIndex.value < 0 && (e.focusedIndex.value = t);
      let o = e.options.value[e.focusedIndex.value];
      for (; !Nt(o, e.query, (s = e.optionsConfig) == null ? void 0 : s.filter) && e.focusedIndex.value > 0; )
        --e.focusedIndex.value, o = e.options.value[e.focusedIndex.value];
      let g = typeof ((u = e.container.value) == null ? void 0 : u.querySelector) == "function" && ((f = e.container.value) == null ? void 0 : f.querySelector('[data-index="' + e.focusedIndex.value + '"]'));
      return g && g.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" }), !0;
    } else if (n === "Enter" && e.focusedIndex.value > -1)
      return e.options.value[e.focusedIndex.value];
  }
  return !1;
}, Er = (e) => {
  var l;
  let t = {
    value: e.query,
    label: e.query
  };
  return (e.optionValueType === "option" ? Fi(t, (l = e.value.value) == null ? void 0 : l.value) : Fi(t, e.value.value)) === -1 ? (e.value.value.push(e.optionValueType === "option" ? t : t.value), e.options.value.push(t), e.pickedOptions.push(t), !0) : !1;
}, Lr = (e) => {
  var n;
  let t = !0;
  for (; t; ) {
    let l = e.optionValueType === "option" ? Fi(e.option, (n = e.value.value) == null ? void 0 : n.value) : Fi(e.option, e.value.value);
    l >= 0 ? (e.options.value.splice(
      e.options.value.findIndex((i) => i.value == e.option.value),
      1
    ), e.pickedOptions.splice(
      e.pickedOptions.findIndex((i) => i.value == e.option.value),
      1
    ), e.value.value.splice(l, 1)) : t = !1;
  }
  return !0;
}, al = (e) => {
  var i;
  let t = 0, n = e.options.value.length, l = e.options.value[t];
  for (; !Nt(l, e.query, !0, (i = e.optionsConfig) == null ? void 0 : i.filter) && t < n; )
    ++t, l = e.options.value[t];
  e.optionValueType === "option" ? e.multiple ? e.value.value.push(l) : e.value.value = l : e.multiple ? e.value.value.push(l.value) : e.value.value = l.value, e.multiple ? e.pickedOptions.push(l) : e.pickedOptions.splice(0, 1, l);
}, ot = /* @__PURE__ */ Ce({
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
    const n = t, l = e, i = J(() => {
      var z, a, r;
      return (z = l.item) != null && z.icon ? l.item.icon : typeof ((r = (a = l.data) == null ? void 0 : a.optionsConfig) == null ? void 0 : r.icon) == "function" ? l.data.optionsConfig.icon(l.item, l.data.prop) : l.data.optionsConfig.icon;
    }), s = J(() => {
      if (typeof l.data.optionsConfig.text < "u") {
        if (typeof l.data.optionsConfig.text == "function")
          return l.data.optionsConfig.text(l.item, l.data.prop);
        if (l.data.optionsConfig.text !== "") return l.data.optionsConfig.text;
      }
      return u.value;
    }), u = J(() => typeof l.data.optionsConfig.labelFormatter == "function" ? l.data.optionsConfig.labelFormatter(l.item) : l.item.label), f = J(() => {
      var z, a;
      return typeof ((z = l.data.optionsConfig) == null ? void 0 : z.class) == "function" ? l.data.optionsConfig.class(l.item) : typeof ((a = l.data.optionsConfig) == null ? void 0 : a.class) < "u" ? l.data.optionsConfig.class : `lkt-opt-${l.item.value}`;
    }), o = J(() => {
      if (l.data.optionSlot && !(typeof ee.optionSlots[l.data.optionSlot] > "u"))
        return ee.optionSlots[l.data.optionSlot];
    }), g = J(() => {
      var z, a, r;
      return o.value ? o.value : l.data.isTag ? "lkt-tag" : !l.editing && !l.data.previewMode && (typeof ((z = l.data.optionsConfig) == null ? void 0 : z.modal) < "u" && l.data.optionsConfig.modal !== "" || typeof l.item.modal < "u" && l.item.modal !== "") ? "lkt-button" : !l.editing && !l.data.previewMode && typeof ((a = l.data.optionsConfig) == null ? void 0 : a.download) < "u" && l.data.optionsConfig.download !== "" || !l.editing && !l.data.previewMode && typeof ((r = l.data.optionsConfig) == null ? void 0 : r.anchor) < "u" ? "lkt-anchor" : "div";
    }), d = J(() => {
      var z, a, r, c, p, h, b;
      if (g.value === "lkt-button") {
        let m = l.item.modal;
        (z = l.data.optionsConfig) != null && z.modal && (m = l.data.optionsConfig.modal);
        let y = m;
        return typeof m == "function" && (y = () => m(l.item)), {
          modal: y,
          modalData: l.data.optionsConfig.modalData,
          modalKey: l.item.value,
          icon: i.value
        };
      }
      if (g.value === "lkt-anchor") {
        if (typeof ((a = l.data.optionsConfig) == null ? void 0 : a.anchor) == "function") return { ...l.data.optionsConfig.anchor({ data: l.item }), prop: l.item };
        if (typeof ((r = l.data.optionsConfig) == null ? void 0 : r.anchor) == "object") return { ...l.data.optionsConfig.anchor, prop: l.item };
        let m = (c = l.data.optionsConfig) == null ? void 0 : c.download;
        typeof l.data.optionsConfig.download == "function" ? m = () => {
          var w;
          return (w = l.data.optionsConfig) == null ? void 0 : w.download(l.item);
        } : (h = (p = l.data.optionsConfig) == null ? void 0 : p.download) != null && h.startsWith("prop:") && (m = Ze((b = l.data.optionsConfig) == null ? void 0 : b.download, l.item));
        let y = l.data.optionsConfig.download !== "";
        return {
          to: m,
          type: y ? hn.Download : void 0,
          prop: l.item
        };
      }
      return g.value === "lkt-tag" ? {
        type: zo.ActionIcon,
        icon: "lkt-icn-cancel"
      } : {};
    }), v = J(() => typeof l.item.tags > "u" ? [] : typeof l.item.tags == "function" ? l.item.tags() : l.item.tags), T = () => {
      var z;
      l.item.children && l.item.children.length > 0 || (typeof ((z = l.events) == null ? void 0 : z.click) == "function" && l.events.click(l.item, l.index), n("click"));
    }, S = (z) => {
      l.editing && (z.stopPropagation(), z.preventDefault(), T());
    }, x = () => {
      var z;
      typeof ((z = l.events) == null ? void 0 : z.clickIcon) == "function" && l.events.clickIcon(l.item, l.index), n("click-icon", l.item);
    };
    return (z, a) => {
      const r = he("lkt-button"), c = he("lkt-tag");
      return he("lkt-table"), H(), ce(Oe, null, [
        z.data.fieldType === V(j).ToggleButtonGroup ? (H(), Y(r, Ie(fe({ key: 0 }, {
          icon: i.value,
          text: s.value,
          events: {
            click: T
          }
        })), null, 16)) : (H(), Y(ct(g.value), fe({ key: 1 }, d.value, {
          class: ["lkt-field--dropdown-option", f.value],
          title: s.value,
          onClick: _o(T, ["stop", "prevent"]),
          onClickIcon: x
        }), {
          default: ye(() => [
            i.value && g.value !== "lkt-button" ? (H(), ce("div", {
              key: 0,
              class: "lkt-field--dropdown-option--icon-container",
              onClick: S
            }, [
              be("i", {
                class: Ye(i.value)
              }, null, 2)
            ])) : se("", !0),
            be("div", {
              class: "lkt-field--dropdown-option--label-container",
              onClick: S
            }, yt(s.value), 1),
            (H(!0), ce(Oe, null, dt(v.value, (p) => (H(), Y(c, fe({ ref_for: !0 }, p), null, 16))), 256))
          ]),
          _: 1
        }, 16, ["class", "title"])),
        se("", !0)
      ], 64);
    };
  }
}), Br = {
  key: 0,
  class: "lkt-field--searchable-box"
}, zr = ["value", "placeholder", "disabled"], Nr = {
  key: 1,
  class: "lkt-field--searchable-box"
}, Rr = ["value", "placeholder", "disabled"], Ar = { key: 0 }, dn = /* @__PURE__ */ Ce({
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
    const l = n, i = K(null), s = K(null), u = e, f = K(u.modelValue), o = K(-1), g = u.multiple && u.canTag, d = typeof u.options == "object" && u.optionValueType !== "option" ? JSON.parse(JSON.stringify(u.options)) : u.options, v = K([...et(u.options, u.prop)]), T = K(!0);
    ie(T, (L) => {
      L || Ee(() => {
        T.value = !0;
      });
    }), ie(() => u.modelValue, (L) => {
      var Z;
      !L && ((Z = u.optionsConfig) != null && Z.autoPickFirstOptionIfEmpty) ? (u.pickedOptions.splice(0, u.pickedOptions.length), Ee(() => {
        al({
          value: f,
          optionValueType: u.optionValueType,
          multiple: u.multiple,
          query: S.value,
          optionsConfig: u.optionsConfig,
          options: v,
          pickedOptions: u.pickedOptions
        });
      })) : f.value = L;
    }, { deep: !0 }), ie(f, (L) => {
      l("update:modelValue", L);
    }, { deep: !0 }), ie(v, (L) => {
      var Z;
      typeof ((Z = u.events) == null ? void 0 : Z.updatedOptions) == "function" && (T.value = !1, u.events.updatedOptions({
        options: L
      })), l("update:options", L);
    }), ie(() => u.options, (L, Z) => {
      if (!T.value) return;
      let G = new rt({
        opts: Z
      });
      G.increment({ opts: L }), G.changed() && (v.value = et(L, u.prop), D());
    }, { deep: !0 });
    const S = K(""), x = K(null), z = K(u.pickedOptions);
    ie(z, (L) => {
      l("update:pickedOptions", L);
    });
    const a = K(!1), r = K(u.showOptions);
    ie(r, (L) => {
      g || l("update:showOptions", L), Ee(() => {
        L || (h.value = !1, p.value = !1, c.value = !1), a.value = r.value;
      });
    });
    const c = K(u.focusing), p = K(!1), h = K(!1);
    ie(() => u.focusing, (L) => {
      L !== c.value && Ee(() => {
        L ? B() : N();
      });
    }), ie(c, (L) => {
      l(L ? "focus" : "blur");
    });
    let b, m;
    const y = (L) => {
      b = setTimeout(() => {
        p.value = !1, c.value = h.value, r.value = c.value;
      }, 100);
    }, w = (L) => {
      if (p.value = !0, g && L.key === "Enter") {
        if (S.value.length === 0) return;
        Er({
          value: f,
          query: S.value,
          optionValueType: u.optionValueType,
          options: v,
          pickedOptions: z.value
        }) && (S.value = "");
      } else if (["ArrowDown", "ArrowUp", "Enter"].includes(L.key)) {
        let Z = un({
          event: L,
          options: v,
          focusing: u.focusing,
          container: s,
          focusedIndex: o,
          optionsConfig: u.optionsConfig,
          query: S.value
        });
        typeof Z == "object" && I(Z);
      } else ["Escape"].includes(L.key) && (p.value = !1, h.value = !1, c.value = !1, r.value = !1);
    }, _ = (L) => {
      p.value = !0, h.value = !1, c.value = !0, r.value = !0;
    }, C = () => {
      clearTimeout(b), clearTimeout(m), setTimeout(() => {
        x.value && x.value.focus();
      }, 100);
    }, N = (L) => {
      O.value || (m = setTimeout(() => {
        h.value = !1, c.value = p.value, r.value = c.value;
      }, 100));
    }, E = (L) => {
      if (h.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(L.key)) {
        let Z = un({
          event: L,
          options: v,
          focusing: u.focusing,
          container: s,
          focusedIndex: o,
          optionsConfig: u.optionsConfig,
          query: S.value
        });
        typeof Z == "object" && I(Z);
      } else ["Escape"].includes(L.key) && (p.value = !1, h.value = !1, c.value = !1, r.value = !1);
    }, B = (L) => {
      u.searchable ? (h.value = !1, p.value = !0, c.value = !0, r.value = !0, Ee(() => {
        C();
      })) : (h.value = !0, p.value = !1, c.value = !0, r.value = !0);
    }, R = (L) => {
      Lr({
        value: f,
        option: L,
        optionValueType: u.optionValueType,
        options: v,
        pickedOptions: z.value
      });
    };
    t({
      doClear: () => {
        u.isAutoCompleteText ? (S.value = "", f.value = "") : u.multiple ? f.value.splice(0, f.value.length) : f.value = "", z.value.splice(0, z.value.length), Ee(() => {
          D();
        });
      },
      doUndo: (L) => {
        if (u.isAutoCompleteText)
          f.value = L;
        else if (u.multiple) {
          f.value.splice(0, f.value.length);
          let Z = 0, G = L.length;
          for (; Z < G; )
            f.value.push(
              L[Z]
            ), ++Z;
        } else
          f.value = L;
        z.value.splice(0, z.value.length), Ee(() => {
          D();
        });
      },
      keepFocused: C,
      switchShowOptions: () => {
        r.value = !r.value;
      }
    }), ie(() => u.pickedOptions, (L) => {
      l("change"), z.value = L;
    }, { deep: !0 });
    const P = J(() => u.multiple && (u.canTag || u.searchable)), O = J(() => !u.multiple && u.searchable && c.value), I = (L) => {
      var G, te;
      if (u.isAutoCompleteText) {
        S.value = L.value, f.value = L.value;
        return;
      }
      (u.multiple ? ol({
        option: L,
        value: f,
        pickedOptions: z,
        tagMode: g,
        searchMode: u.searchable,
        keepFocused: C,
        optionValueType: u.optionValueType,
        callback: (G = u.events) == null ? void 0 : G.clickOption,
        optionsConfig: u.optionsConfig
      }) : nl({
        option: L,
        value: f,
        pickedOptions: z.value,
        showOptions: r.value,
        optionValueType: u.optionValueType,
        callback: (te = u.events) == null ? void 0 : te.clickOption,
        optionsConfig: u.optionsConfig
      })) && (u.searchable && !u.multiple && (S.value = ""), typeof u.events.clickOption == "function" && u.events.clickOption({
        option: L
      }));
    }, D = () => {
      u.multiple ? Rt({
        value: f,
        options: v.value,
        pickedOptions: z.value,
        multiple: u.multiple,
        optionValueType: u.optionValueType,
        optionsConfig: u.optionsConfig
      }) : Rt({
        value: f,
        options: v.value,
        pickedOptions: z.value,
        multiple: u.multiple,
        optionValueType: u.optionValueType,
        optionsConfig: u.optionsConfig
      }), l("loaded");
    }, U = () => {
      if (u.autoLoading && u.optionsConfig.autoloadResource === "feed" && u.multiple)
        for (let L = 0; L < v.value.length; ++L)
          u.optionValueType === "option" ? f.value.push(v.value[L]) : f.value.push(v.value[L].value);
      o.value = -1, D();
    }, M = J(() => {
      var te, X, Q;
      if (!((te = u.optionsConfig.http) != null && te.resource)) return;
      let L = {
        ...(X = u.optionsConfig.http) == null ? void 0 : X.data
      };
      ee.searchKeyForResource !== "" && (L[ee.searchKeyForResource] = S.value);
      const Z = (le) => {
        var ue, de, ne, pe;
        u.autoLoading && u.optionsConfig.autoloadResource && l("autoload-start"), typeof ((de = (ue = u.optionsConfig.http) == null ? void 0 : ue.events) == null ? void 0 : de.onStart) == "function" && ((pe = (ne = u.optionsConfig.http) == null ? void 0 : ne.events) == null || pe.onStart(le));
      }, G = (le) => {
        var ue, de, ne, pe;
        u.autoLoading && u.optionsConfig.autoloadResource && l("autoload-end"), typeof ((de = (ue = u.optionsConfig.http) == null ? void 0 : ue.events) == null ? void 0 : de.onEnd) == "function" && ((pe = (ne = u.optionsConfig.http) == null ? void 0 : ne.events) == null || pe.onEnd(le));
      };
      return {
        resource: (Q = u.optionsConfig.http) == null ? void 0 : Q.resource,
        resourceData: L,
        events: {
          httpStart: Z,
          httpEnd: G
        }
      };
    }), F = J(() => u.autoLoading ? "div" : "lkt-tooltip"), A = J(() => u.isAutoCompleteText || O.value || P.value ? x.value : u.referrer);
    return ft(() => {
      u.isAutoCompleteText && (S.value = f.value), D();
    }), (L, Z) => {
      var Q, le, ue, de;
      const G = he("lkt-tag"), te = he("lkt-table"), X = he("lkt-button");
      return H(), ce(Oe, null, [
        L.isAutoCompleteText ? (H(), ce("div", Br, [
          Ve(be("input", {
            "onUpdate:modelValue": Z[0] || (Z[0] = (ne) => S.value = ne),
            ref_key: "queryField",
            ref: x,
            value: S.value,
            placeholder: L.searchPlaceholder,
            disabled: z.value.length === L.max,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: w,
            onBlur: y,
            onFocus: _
          }, null, 40, zr), [
            [Bt, S.value]
          ])
        ])) : !L.autoLoading && (O.value || P.value) ? (H(), ce("div", Nr, [
          L.multiple ? (H(), Y(G, Ie(fe({ key: 0 }, {
            icon: L.optionsConfig.icon,
            text: z.value.length
          })), null, 16)) : z.value.length > 0 ? (H(), Y(G, Ie(fe({ key: 1 }, {
            icon: z.value[0].icon ?? L.optionsConfig.icon,
            text: z.value[0].label
          })), null, 16)) : se("", !0),
          Ve(be("input", {
            "onUpdate:modelValue": Z[1] || (Z[1] = (ne) => S.value = ne),
            ref_key: "queryField",
            ref: x,
            value: S.value,
            placeholder: L.searchPlaceholder,
            disabled: z.value.length === L.max,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: w,
            onBlur: y,
            onFocus: _
          }, null, 40, Rr), [
            [Bt, S.value]
          ])
        ])) : se("", !0),
        !L.autoLoading && !L.isAutoCompleteText ? Ve((H(), Y(X, fe({
          key: 2,
          ref_key: "selectButton",
          ref: i
        }, {
          type: V(g) || !(typeof ((Q = L.optionsConfig) == null ? void 0 : Q.canRenderDropdown) > "u" || ((le = L.optionsConfig) == null ? void 0 : le.canRenderDropdown) === !0) ? V(je).Content : V(je).Button,
          class: "lkt-field--toggle-button lkt-field--select-button"
        }, {
          onKeyup: E,
          onBlur: N,
          onFocus: B
        }), {
          default: ye(() => [
            V(g) || L.multiple && z.value.length > 0 ? (H(), ce(Oe, { key: 0 }, [
              L.multipleDisplayEdition === V(Et).Count ? (H(), ce("div", Ar, yt(z.value.length), 1)) : L.multipleDisplayEdition === V(Et).Table ? (H(), Y(te, fe({
                key: 1,
                modelValue: z.value,
                "onUpdate:modelValue": Z[2] || (Z[2] = (ne) => z.value = ne)
              }, {
                ...L.optionsConfig.table,
                editMode: L.editable
              }), null, 16, ["modelValue"])) : (H(), Y(te, fe({
                key: 2,
                modelValue: z.value,
                "onUpdate:modelValue": Z[3] || (Z[3] = (ne) => z.value = ne)
              }, {
                type: V(zt).Ul,
                editMode: L.editable,
                itemsContainerClass: `lkt-field-select-read multiple-display-${L.multipleDisplayEdition}`,
                itemSlotComponent: li(ot),
                itemSlotData: {
                  optionSlot: L.optionSlot,
                  previewMode: !0,
                  prop: L.prop,
                  isTag: V(g),
                  optionsConfig: L.optionsConfig
                },
                itemSlotEvents: {
                  clickIcon: R
                }
              }), null, 16, ["modelValue"]))
            ], 64)) : !L.multiple && z.value.length > 0 ? (H(), Y(ot, Ie(fe({ key: 1 }, {
              item: z.value[0],
              data: {
                optionSlot: L.optionSlot,
                previewMode: !0,
                prop: L.prop,
                isTag: V(g),
                optionsConfig: L.optionsConfig
              }
            })), null, 16)) : se("", !0)
          ]),
          _: 1
        }, 16)), [
          [nt, !O.value || P.value]
        ]) : se("", !0),
        typeof ((ue = L.optionsConfig) == null ? void 0 : ue.canRenderDropdown) > "u" || ((de = L.optionsConfig) == null ? void 0 : de.canRenderDropdown) === !0 ? (H(), Y(ct(F.value), fe({
          key: 3,
          ref_key: "dropdownEl",
          ref: s
        }, L.autoLoading ? {} : {
          class: "lkt-field--dropdown",
          referrer: A.value,
          referrerWidth: !0,
          locationX: V(Dt).LeftCorner,
          locationY: V(It).Bottom,
          ...L.tooltip,
          modelValue: r.value,
          remoteControl: !0
        }), {
          default: ye(() => [
            L.autoLoading && !L.localAutoLoad || a.value ? Ve((H(), Y(te, fe({
              key: 0,
              ref: "optionList",
              modelValue: v.value,
              "onUpdate:modelValue": Z[4] || (Z[4] = (ne) => v.value = ne)
            }, {
              type: V(zt).Ul,
              editMode: L.editable,
              paginator: M.value,
              events: {
                parseResults: (ne) => {
                  var pe;
                  return (pe = L.optionsConfig.http) != null && pe.resource ? V(xr)(V(et)(V(d), u.prop), ne, L.prop) : V(et)(V(d), u.prop);
                }
              },
              itemDisplayChecker: (ne) => {
                var pe;
                return V(Nt)(ne, S.value, !0, (pe = L.optionsConfig) == null ? void 0 : pe.filter);
              },
              itemsContainerClass: "lkt-field--dropdown-options",
              itemContainerClass: (ne, pe) => {
                let xe = [];
                return V(ll)(ne, f.value, L.multiple) && xe.push("is-active"), o.value === pe && xe.push("is-focused"), ne.disabled && xe.push("is-disabled"), xe.join(" ");
              },
              itemSlotComponent: li(ot),
              itemSlotData: {
                optionSlot: L.optionSlot,
                editable: L.editable,
                prop: L.prop,
                isTag: V(g),
                optionsConfig: L.optionsConfig,
                query: S.value,
                editableValue: f.value,
                multiple: L.multiple,
                focusedOptionIndex: o.value
              },
              itemSlotEvents: {
                click: (ne, pe) => {
                  I(ne);
                }
              }
            }, { onReadResponse: U }), null, 16, ["modelValue"])), [
              [nt, !L.autoLoading]
            ]) : se("", !0)
          ]),
          _: 1
        }, 16)) : se("", !0)
      ], 64);
    };
  }
}), Ir = { class: "lkt-calc--formula" }, Dr = { class: "lkt-calc--custom-pad" }, Mr = { class: "lkt-calc--pad" }, Vr = { class: "lkt-calc--numeric-pad" }, Or = { class: "lkt-calc--math-pad" }, Hr = { class: "lkt-calc--advance-math-pad" }, Fr = /* @__PURE__ */ Ce({
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
    ie(i, (h) => n("update:modelValue", h));
    const u = K(l.focusing), f = K(null);
    let o;
    const g = () => {
      clearTimeout(o), s.value && typeof s.value.focus == "function" && s.value.focus();
    }, d = (h) => {
      i.value += "" + h, g();
    }, v = (h) => {
      i.value += " " + h + " ", g();
    }, T = (h) => {
      i.value += " " + h + "(", g();
    }, S = () => {
      i.value += " sqrt(", g();
    }, x = (h) => {
      i.value += "" + h, g();
    }, z = () => {
      i.value += ".", g();
    }, a = () => {
      i.value += " ", g();
    }, r = (h) => {
      i.value += "" + h.value, g();
    }, c = () => {
      u.value = !0;
    }, p = () => {
      o = setTimeout(() => {
        u.value = !1;
      }, 100);
    };
    return ie(u, (h) => {
      n(h ? "focus" : "blur");
    }), (h, b) => {
      const m = he("lkt-button"), y = he("lkt-tooltip");
      return H(), ce("div", {
        ref_key: "container",
        ref: f
      }, [
        be("div", Ir, [
          Ve(be("input", {
            type: "text",
            ref_key: "input",
            ref: s,
            "onUpdate:modelValue": b[0] || (b[0] = (w) => i.value = w),
            onFocus: c,
            onBlur: p
          }, null, 544), [
            [Bt, i.value]
          ])
        ]),
        h.editable ? (H(), Y(y, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: u.value,
          "onUpdate:modelValue": b[27] || (b[27] = (w) => u.value = w),
          referrer: f.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: ye(() => [
            be("div", Dr, [
              (H(!0), ce(Oe, null, dt(h.options, (w) => (H(), Y(m, {
                icon: w.icon,
                text: w.label,
                onClick: (_) => r(w)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            be("div", Mr, [
              be("div", Vr, [
                re(m, {
                  onClick: b[1] || (b[1] = (w) => d(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                re(m, {
                  onClick: b[2] || (b[2] = (w) => d(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                re(m, {
                  onClick: b[3] || (b[3] = (w) => d(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                re(m, {
                  onClick: b[4] || (b[4] = (w) => d(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                re(m, {
                  onClick: b[5] || (b[5] = (w) => d(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                re(m, {
                  onClick: b[6] || (b[6] = (w) => d(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                re(m, {
                  onClick: b[7] || (b[7] = (w) => d(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                re(m, {
                  onClick: b[8] || (b[8] = (w) => d(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                re(m, {
                  onClick: b[9] || (b[9] = (w) => d(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                re(m, {
                  onClick: b[10] || (b[10] = (w) => z()),
                  text: "."
                }),
                re(m, {
                  onClick: b[11] || (b[11] = (w) => d(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                re(m, {
                  onClick: b[12] || (b[12] = (w) => a()),
                  text: " "
                })
              ]),
              be("div", Or, [
                re(m, {
                  onClick: b[13] || (b[13] = (w) => x("[")),
                  text: "["
                }),
                re(m, {
                  onClick: b[14] || (b[14] = (w) => x("]")),
                  text: "]"
                }),
                re(m, {
                  onClick: b[15] || (b[15] = (w) => x("(")),
                  text: "("
                }),
                re(m, {
                  onClick: b[16] || (b[16] = (w) => x(")")),
                  text: ")"
                }),
                re(m, {
                  onClick: b[17] || (b[17] = (w) => v("+")),
                  text: "+"
                }),
                re(m, {
                  onClick: b[18] || (b[18] = (w) => v("-")),
                  text: "−"
                }),
                re(m, {
                  onClick: b[19] || (b[19] = (w) => v("*")),
                  text: "×"
                }),
                re(m, {
                  onClick: b[20] || (b[20] = (w) => v("/")),
                  text: "÷"
                })
              ]),
              be("div", Hr, [
                re(m, {
                  onClick: b[21] || (b[21] = (w) => S()),
                  text: "√"
                }),
                re(m, {
                  onClick: b[22] || (b[22] = (w) => T("log")),
                  text: "log"
                }),
                re(m, {
                  onClick: b[23] || (b[23] = (w) => T("ln")),
                  text: "ln"
                }),
                re(m, {
                  onClick: b[24] || (b[24] = (w) => T("sin")),
                  text: "sin"
                }),
                re(m, {
                  onClick: b[25] || (b[25] = (w) => T("cos")),
                  text: "cos"
                }),
                re(m, {
                  onClick: b[26] || (b[26] = (w) => T("tan")),
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
}), Ur = /* @__PURE__ */ Ce({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, n = J(() => {
      let f = Tl(t.validation.code, t.stack), o = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, g = Tl(t.validation.status + "-" + t.validation.code, t.stack);
      return g && (f = g), f ? f.startsWith("__:") ? fn(f.substring(3), o) : ko(f, o, ":", "") : t.validation.code;
    }), l = J(() => ee.validationIconSlot !== ""), i = J(() => ee.validationIconSlot), s = J(() => {
      let f = [];
      return t.validation.code && f.push("code-" + t.validation.code), t.validation.status && f.push("is-" + t.validation.status), f.join(" ");
    }), u = J(() => {
      if (t.validation.icon === !1)
        return !1;
      if (typeof t.validation.icon == "object" || typeof t.validation.icon == "string")
        return t.validation.icon;
      switch (t.validation.status) {
        case Te.Ok:
          return ee.validationIconOk;
        case Te.Ko:
          return ee.validationIconKo;
        case Te.Info:
          return ee.validationIconInfo;
      }
    });
    return (f, o) => {
      var d;
      const g = he("lkt-icon");
      return H(), ce("div", {
        class: Ye(["lkt-field-validation-message", s.value])
      }, [
        (d = f.validation.element) != null && d.tag ? (H(), Y(ct(f.validation.element.tag), fe({
          key: 0,
          class: f.validation.element.class
        }, f.validation.element.props), null, 16, ["class"])) : (H(), ce(Oe, { key: 1 }, [
          u.value && typeof u.value == "string" ? (H(), Y(g, Ie(fe({ key: 0 }, {
            icon: u.value
          })), null, 16)) : u.value && typeof u.value == "object" ? (H(), Y(g, Ie(fe({ key: 1 }, u.value)), null, 16)) : l.value ? (H(), Y(ct(i.value), { key: 2 })) : se("", !0),
          ji(" " + yt(n.value), 1)
        ], 64))
      ], 2);
    };
  }
}), Pr = {
  key: 0,
  class: "lkt-field-validation-info"
}, cn = /* @__PURE__ */ Ce({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, n = K(t.items), l = K(!1);
    return ie(() => t.items, (i) => {
      l.value = !0, Ee(() => l.value = !1);
    }, { deep: !0 }), (i, s) => l.value ? se("", !0) : (H(), ce("div", Pr, [
      (H(!0), ce(Oe, null, dt(n.value, (u) => (H(), Y(Ur, {
        validation: u,
        stack: i.stack,
        key: u.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), Wr = ["id"], $r = /* @__PURE__ */ Ce({
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
    tooltip: {}
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const n = t, l = e, i = K(l.modelValue), s = K(l.focusing);
    let u, f;
    const o = K({}), g = () => {
      clearTimeout(f), f = setTimeout(() => {
        o.value = {
          query: i.value
        };
      }, 300);
    }, d = () => {
      s.value = !0;
    }, v = () => {
      u = setTimeout(() => {
        s.value = !1;
      }, 100);
    };
    ie(s, (S) => {
      n(S ? "focus" : "blur");
    });
    const T = () => {
      clearTimeout(u), setTimeout(() => {
        d();
      }, 100);
    };
    return (S, x) => {
      const z = he("lkt-table"), a = he("lkt-tooltip");
      return H(), ce(Oe, null, [
        Ve(be("input", {
          id: S.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": x[0] || (x[0] = (r) => i.value = r),
          onFocus: d,
          onBlur: v,
          onKeyup: g
        }, null, 40, Wr), [
          [Bt, i.value]
        ]),
        S.editable && S.hadFirstFocus ? (H(), Y(a, fe({
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: s.value,
          "onUpdate:modelValue": x[1] || (x[1] = (r) => s.value = r)
        }, {
          ...S.tooltip,
          referrer: S.container,
          referrerWidth: !0,
          locationX: V(Dt).LeftCorner,
          locationY: V(It).Bottom
        }), {
          default: ye(() => [
            re(z, fe({
              type: V(zt).Ul,
              itemsContainerClass: "lkt-field--dropdown-options",
              paginator: {
                resource: S.optionsResource,
                resourceData: o.value
              },
              itemSlotComponent: li(ot),
              itemSlotData: {
                optionSlot: "",
                editable: S.editable,
                prop: {},
                isTag: !1,
                optionsConfig: {}
              },
              itemSlotEvents: {
                click: T
              }
            }, {
              onPage: T,
              onClick: T
            }), null, 16)
          ]),
          _: 1
        }, 16, ["modelValue"])) : se("", !0)
      ], 64);
    };
  }
}), Zr = {
  key: 0,
  class: "lkt-field-main"
}, qr = {
  key: 3,
  class: "lkt-field--read-value"
}, jr = ["innerHTML", "title"], Gr = ["title"], Kr = { key: 0 }, Yr = ["title"], Xr = ["innerHTML"], Jr = ["innerHTML", "title"], Qr = ["innerHTML", "title"], eu = /* @__PURE__ */ Ce({
  __name: "LktFieldValue",
  props: {
    type: { default: j.Text },
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
    multipleDisplay: { default: Et.List },
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
    const n = t, l = Ji(), i = e, s = () => n("click"), u = J(() => {
      switch (i.type) {
        case j.Select:
        case j.Radio:
        case j.ToggleButtonGroup:
          if (i.multiple && Array.isArray(i.value) && i.value.length > 0 || i.multiple && i.multipleDisplay === Et.Count || !i.multiple && i.value) return "";
          break;
        case j.Date:
          if (i.value !== "") return "";
          break;
        default:
          if (i.value !== "") return "";
      }
      return ee.customValueSlots[i.emptyValueSlot] ?? ee.defaultEmptyValueSlot;
    }), f = J(() => ee.customValueSlots[i.valueSlot] ?? ""), o = J(() => {
      var d;
      let g = i.value;
      return [j.Select, j.Radio, j.ToggleButtonGroup].includes(i.type) && i.multiple && !Array.isArray(g) && (g = []), (i.type === j.Textarea || i.type === j.Text) && (typeof ((d = i.readModeConfig) == null ? void 0 : d.textMaxLength) < "u" && g.length > i.readModeConfig.textMaxLength ? g = g.substring(0, i.readModeConfig.textMaxLength) + "..." : typeof ee.readTextMaxLength < "u" && g.length > ee.readTextMaxLength && (g = g.substring(0, ee.readTextMaxLength) + "...")), g;
    });
    return (g, d) => {
      var r;
      const v = he("lkt-loader"), T = he("lkt-image"), S = he("lkt-button"), x = he("lkt-anchor"), z = he("lkt-tag"), a = he("lkt-table");
      return H(), ce("div", {
        class: "lkt-field--read",
        onClick: s
      }, [
        g.isLoading ? (H(), Y(v, { key: 0 })) : V(l).value ? Qe(g.$slots, "value", {
          key: 1,
          value: o.value,
          title: g.title,
          data: g.slotData
        }) : u.value ? (H(), Y(ct(u.value), {
          key: 2,
          data: g.slotData
        }, null, 8, ["data"])) : f.value ? (H(), Y(ct(f.value), {
          key: 3,
          value: o.value,
          title: g.title,
          data: g.slotData
        }, null, 8, ["value", "title", "data"])) : (H(), ce(Oe, { key: 4 }, [
          g.type === V(j).File || g.type === V(j).Image ? (H(), ce("div", Zr, [
            re(S, {
              class: "lkt-field--toggle-button",
              text: g.type === V(j).File ? g.fileName : "",
              disabled: ""
            }, {
              default: ye(() => [
                g.type === V(j).Image ? (H(), Y(T, {
                  key: 0,
                  src: o.value,
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : se("", !0),
                g.type === V(j).Image ? (H(), Y(T, {
                  key: 1,
                  src: o.value,
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : se("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : g.type === V(j).Email ? (H(), Y(x, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: g.title,
            to: o.value
          }, {
            default: ye(() => [
              ji(yt(o.value), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : g.type === V(j).Tel ? (H(), Y(x, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: g.title,
            to: o.value
          }, {
            default: ye(() => [
              ji(yt(o.value), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : V(at).includes(g.type) ? (H(), ce("div", qr, [
            re(z, {
              icon: o.value ? "lkt-icn-check" : "lkt-icn-cancel",
              "featured-text": g.label,
              title: g.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : g.type === V(j).Table ? (H(), Y(a, fe({
            key: 4,
            modelValue: o.value,
            "onUpdate:modelValue": d[0] || (d[0] = (c) => o.value = c)
          }, {
            ...(r = g.optionsConfig) == null ? void 0 : r.table,
            editMode: !1
          }), null, 16, ["modelValue"])) : g.type === V(j).Date ? (H(), ce("div", {
            key: 5,
            class: "lkt-field--read-value",
            innerHTML: o.value,
            title: g.title
          }, null, 8, jr)) : [V(j).Select, V(j).Radio, V(j).ToggleButtonGroup].includes(g.type) ? (H(), ce("div", {
            key: 6,
            class: "lkt-field--read-value",
            title: g.title
          }, [
            g.multiple ? (H(), ce(Oe, { key: 0 }, [
              g.multipleDisplay === V(Et).Count ? (H(), ce("div", Kr, yt(o.value.length), 1)) : g.multipleDisplay === V(Et).Table ? (H(), Y(a, fe({
                key: 1,
                "model-value": o.value
              }, g.optionsConfig.table), null, 16, ["model-value"])) : o.value.length > 0 ? (H(), ce("ul", {
                key: 2,
                class: Ye(["lkt-field-select-read", `multiple-display-${g.multipleDisplay}`])
              }, [
                (H(!0), ce(Oe, null, dt(o.value, (c, p) => {
                  var h;
                  return H(), ce("li", {
                    key: `${p}-${o.value[p].value}`,
                    title: (h = o.value[p]) == null ? void 0 : h.label
                  }, [
                    re(ot, fe({ ref_for: !0 }, {
                      item: o.value[p],
                      data: {
                        optionSlot: g.optionSlot,
                        editable: !1,
                        prop: g.prop,
                        optionsConfig: g.optionsConfig
                      }
                    }), null, 16)
                  ], 8, Yr);
                }), 128))
              ], 2)) : se("", !0)
            ], 64)) : o.value.length > 0 ? (H(), Y(ot, Ie(fe({ key: 1 }, {
              item: o.value[0],
              data: {
                optionSlot: g.optionSlot,
                editable: !1,
                prop: g.prop,
                optionsConfig: g.optionsConfig
              }
            })), null, 16)) : se("", !0)
          ], 8, Gr)) : g.modal ? (H(), Y(S, {
            key: 7,
            class: "lkt-field--read-value",
            title: g.title,
            modal: g.modal,
            "modal-key": g.modalKey,
            "modal-data": g.modalData
          }, {
            default: ye(() => [
              be("div", { innerHTML: o.value }, null, 8, Xr)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : g.download ? (H(), Y(ot, Ie(fe({ key: 8 }, {
            item: { value: "", label: o.value },
            data: {
              optionSlot: g.optionSlot,
              editable: !1,
              prop: g.prop,
              optionsConfig: g.optionsConfig,
              anchor: g.anchor,
              download: g.download
            }
          })), null, 16)) : g.type === V(j).Number ? (H(), ce("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: g.title,
            title: g.title
          }, null, 8, Jr)) : (H(), ce("div", {
            key: 10,
            class: "lkt-field--read-value",
            innerHTML: o.value,
            title: g.title
          }, null, 8, Qr))
        ], 64))
      ]);
    };
  }
}), tu = ["name", "id", "disabled", "readonly", "placeholder", "accept"], iu = {
  key: 2,
  class: "lkt-button lkt-field--toggle-button"
}, lu = { class: "lkt-grid-1" }, nu = /* @__PURE__ */ Ce({
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
  setup(e, { expose: t, emit: n }) {
    const l = n, i = e, s = K(null), u = K(null), f = K(i.modelValue), o = K(i.fileName), g = K(i.uploading), d = (S) => {
      let x = S.target;
      if (x.files && x.files[0]) {
        o.value = x.files[0].name;
        const z = new FileReader();
        z.onload = (a) => {
          if (f.value = a.target.result, i.resource) {
            g.value = !0, l("uploading");
            let r = JSON.parse(JSON.stringify(i.resourceData));
            r.files = x.files[0], Qi(i.resource, r).then((c) => {
              if (g.value = !1, !c.success) {
                l("upload-error", c);
                return;
              }
              f.value = c.data, l("upload-success", c);
            }).catch((c) => {
              g.value = !1, l("upload-error", c);
            });
          }
        }, z.readAsDataURL(x.files[0]);
      }
      l("change", S);
    };
    ie(f, (S) => l("update:modelValue", S)), ie(o, (S) => l("update:fileName", S)), t({
      click: () => {
        var S;
        (S = u.value) == null || S.click();
      }
    });
    const v = K(typeof i.fileBrowserConfig == "object" && Object.keys(i.fileBrowserConfig).length > 0), T = (S) => {
      f.value = S[0].src, l("picked-files", S);
    };
    return (S, x) => {
      const z = he("lkt-image"), a = he("lkt-button");
      return H(), ce(Oe, null, [
        be("input", {
          ref_key: "inputElement",
          ref: s,
          type: "file",
          name: S.name,
          id: S.id,
          disabled: S.disabled,
          readonly: S.readonly,
          placeholder: S.placeholder,
          accept: S.accept,
          onChange: d
        }, null, 40, tu),
        v.value ? S.isImage ? S.isImage ? (H(), ce("div", iu, [
          S.isImage ? (H(), Y(z, {
            key: 0,
            src: f.value,
            class: "lkt-field--image-cover"
          }, null, 8, ["src"])) : se("", !0),
          S.isImage ? (H(), Y(z, {
            key: 1,
            src: f.value,
            class: "lkt-field--image-main"
          }, {
            overlay: ye(() => [
              be("div", null, [
                be("div", lu, [
                  se("", !0),
                  re(a, fe({ ref: "fileBrowserButtonRef" }, {
                    text: "Explore files",
                    icon: "lkt-icn-search",
                    disabled: S.disabled,
                    modal: "lkt-file-browser",
                    modalData: {
                      fileBrowserConfig: S.fileBrowserConfig,
                      onConfirmSelection: T
                    }
                  }), null, 16)
                ])
              ])
            ]),
            _: 1
          }, 8, ["src"])) : se("", !0)
        ])) : se("", !0) : (H(), Y(a, {
          key: 1,
          ref_key: "buttonRef",
          ref: u,
          class: "lkt-field--toggle-button",
          "click-ref": s.value,
          text: o.value,
          disabled: S.disabled
        }, null, 8, ["click-ref", "text", "disabled"])) : (H(), Y(a, {
          key: 0,
          ref_key: "buttonRef",
          ref: u,
          class: "lkt-field--toggle-button",
          "click-ref": s.value,
          text: S.isImage ? "" : o.value,
          disabled: S.disabled
        }, {
          default: ye(() => [
            S.isImage ? (H(), Y(z, {
              key: 0,
              src: f.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : se("", !0),
            S.isImage ? (H(), Y(z, {
              key: 1,
              src: f.value,
              class: "lkt-field--image-main"
            }, null, 8, ["src"])) : se("", !0)
          ]),
          _: 1
        }, 8, ["click-ref", "text", "disabled"]))
      ], 64);
    };
  }
}), ou = { class: "lkt-calendar" }, au = { class: "calendar" }, su = { class: "lkt-calendar--header-grid" }, ru = { class: "lkt-calendar--header-text lkt-flex-row" }, uu = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, du = { class: "lkt-calendar--day lkt-calendar--filling-day" }, cu = /* @__PURE__ */ Ce({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = t, l = e, i = K(l.modelValue);
    ie(() => l.modelValue, (p) => i.value = p, { deep: !0 }), ie(i, (p) => n("update:modelValue", p), { deep: !0 });
    const s = K(/* @__PURE__ */ new Date()), u = K(/* @__PURE__ */ new Date());
    el(i.value) && typeof i.value < "u" && (u.value = new Date(i.value.getFullYear(), i.value.getMonth(), i.value.getDate()));
    const f = K(u.value.getFullYear()), o = K(u.value.getMonth()), g = K(!1), d = K(bt("Y-m", u.value));
    ie(g, (p) => {
      p && Ee(() => g.value = !1);
    });
    const v = J(() => new Date(f.value, o.value + 1, 0).getDate()), T = J(() => new Date(f.value, o.value, 1).getDay()), S = () => {
      o.value > 11 && (o.value = 0, f.value += 1), o.value += 1, u.value.setFullYear(f.value, o.value), u.value = new Date(u.value), d.value = bt("Y-m", u.value);
    }, x = () => {
      o.value < 0 && (o.value = 11, f.value -= 1), o.value -= 1, u.value.setFullYear(f.value, o.value), u.value = new Date(u.value), d.value = bt("Y-m", u.value);
    }, z = (p) => typeof i.value > "u" || i.value.getFullYear() !== f.value || i.value.getMonth() !== o.value ? !1 : i.value.getDate() === p, a = (p) => typeof i.value > "u" || s.value.getFullYear() !== f.value || s.value.getMonth() !== o.value ? !1 : s.value.getDate() === p, r = (p) => ({
      "is-picked": z(p),
      "is-today": a(p)
    }), c = (p) => {
      var h;
      typeof i.value > "u" ? i.value = new Date(f.value, o.value, p) : ((h = i.value) == null || h.setFullYear(f.value, o.value, p), i.value = new Date(i.value));
    };
    return ie(f, () => {
      u.value.setFullYear(f.value, o.value), u.value = new Date(u.value), d.value = bt("Y-m", u.value);
    }, { deep: !0 }), ie(o, () => {
      u.value.setFullYear(f.value, o.value), u.value = new Date(u.value), d.value = bt("Y-m", u.value);
    }, { deep: !0 }), (p, h) => {
      const b = he("lkt-button"), m = he("lkt-field");
      return H(), ce("div", ou, [
        be("div", au, [
          be("header", su, [
            re(b, Ie(ut({
              class: "lkt-calendar--day",
              icon: "lkt-icn-triangle-left",
              events: {
                click: x
              }
            })), null, 16),
            re(b, Ie(ut({
              type: V(je).Tooltip,
              text: d.value,
              class: "lkt-calendar--header-text"
            })), {
              tooltip: ye(() => [
                be("div", ru, [
                  re(m, fe({
                    modelValue: f.value,
                    "onUpdate:modelValue": h[0] || (h[0] = (y) => f.value = y)
                  }, {
                    type: V(j).Number,
                    label: "Year"
                  }), null, 16, ["modelValue"]),
                  re(m, fe({
                    modelValue: o.value,
                    "onUpdate:modelValue": h[1] || (h[1] = (y) => o.value = y)
                  }, {
                    type: V(j).Select,
                    label: "Month",
                    options: [
                      { value: 0, label: "1" },
                      { value: 1, label: "2" },
                      { value: 2, label: "3" },
                      { value: 3, label: "4" },
                      { value: 4, label: "5" },
                      { value: 5, label: "6" },
                      { value: 6, label: "7" },
                      { value: 7, label: "8" },
                      { value: 8, label: "9" },
                      { value: 9, label: "10" },
                      { value: 10, label: "11" },
                      { value: 11, label: "12" }
                    ]
                  }), null, 16, ["modelValue"])
                ])
              ]),
              _: 1
            }, 16),
            re(b, Ie(ut({
              class: "lkt-calendar--day",
              icon: "lkt-icn-triangle-right",
              events: {
                click: S
              }
            })), null, 16)
          ]),
          g.value ? se("", !0) : (H(), ce("div", uu, [
            h[2] || (h[2] = Co('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (H(!0), ce(Oe, null, dt(T.value, (y) => (H(), ce("div", du))), 256)),
            (H(!0), ce(Oe, null, dt(v.value, (y) => (H(), Y(b, {
              class: Ye(["lkt-calendar--day", r(y)]),
              text: y.toString(),
              onClick: () => c(y)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        h[3] || (h[3] = be("div", { class: "display-selected" }, [
          be("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), fu = /* @__PURE__ */ Ce({
  __name: "DateInput",
  props: {
    modelValue: { default: "" },
    name: {},
    id: {},
    tabindex: {},
    lang: {},
    icon: {},
    isDateTime: { type: Boolean }
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = t, l = e, i = K(void 0), s = K(""), u = K(""), f = K(l.modelValue), o = J(() => {
      if (l.isDateTime) {
        if (ee.dateTimeReadFormat) return ee.dateTimeReadFormat;
        if (ee.langDateTimeReadFormat[l.lang]) return ee.langDateTimeReadFormat[l.lang];
        if (ee.defaultDateTimeReadFormat) return ee.defaultDateTimeReadFormat;
        if (l.isDateTime) return "Y-m-d H:i";
      }
      return ee.dateReadFormat ? ee.dateReadFormat : ee.langDateReadFormat[l.lang] ? ee.langDateReadFormat[l.lang] : ee.defaultDateReadFormat ? ee.defaultDateReadFormat : "Y-m-d";
    }), g = J(() => l.isDateTime ? "Y-m-d H:i" : "Y-m-d"), d = (S) => {
      let x = new Date(S);
      el(x) && (i.value = x, l.isDateTime && (s.value = [Tt(x.getHours(), 2, "0"), Tt(x.getMinutes(), 2, "0")].join(":")));
    }, v = () => {
      u.value = bn(i.value, o.value);
    };
    ie(() => l.modelValue, (S) => {
      f.value = S, d(S);
    }), ie(f, (S) => n("update:modelValue", S));
    const T = (S) => {
      var z, a;
      let x = S.split(":");
      x.length >= 2 && typeof i.value == "object" && ((z = i.value) == null || z.setHours(parseInt(x[0])), (a = i.value) == null || a.setMinutes(parseInt(x[1])), i.value = new Date(i.value));
    };
    return ie(s, (S) => {
      T(S);
    }), ie(i, (S) => {
      var x, z;
      if (typeof S > "u")
        f.value = "";
      else {
        let a = s.value.split(":");
        a.length >= 2 && typeof i.value == "object" && ((x = i.value) == null || x.setHours(parseInt(a[0])), (z = i.value) == null || z.setMinutes(parseInt(a[1]))), f.value = bt(g.value, S);
      }
      v();
    }, { deep: !0 }), ft(() => {
      d(l.modelValue), v();
    }), (S, x) => {
      const z = he("lkt-field"), a = he("lkt-button");
      return H(), Y(a, Ie(ut({
        type: V(je).Tooltip,
        icon: S.icon,
        class: "lkt-field--toggle-button",
        text: u.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: V(It).Bottom,
          locationX: V(Dt).LeftCorner
        }
      })), {
        tooltip: ye(() => [
          re(cu, {
            modelValue: i.value,
            "onUpdate:modelValue": x[0] || (x[0] = (r) => i.value = r)
          }, null, 8, ["modelValue"]),
          S.isDateTime ? (H(), Y(z, fe({
            key: 0,
            modelValue: s.value,
            "onUpdate:modelValue": x[1] || (x[1] = (r) => s.value = r)
          }, {
            type: V(j).Time
          }), null, 16, ["modelValue"])) : se("", !0)
        ]),
        _: 1
      }, 16);
    };
  }
}), qi = (e, t, n) => {
  if (t) {
    let l = '<i class="' + t + '"></i>';
    n ? e += l : e = l + e;
  }
  return e;
}, pu = { key: 1 }, Gn = /* @__PURE__ */ Ce({
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
      const u = he("lkt-button");
      return H(), Y(u, {
        modal: i.modal,
        "modal-key": i.modalKey,
        "modal-data": i.modalData
      }, {
        default: ye(() => [
          l.value ? Qe(i.$slots, "item", {
            key: 0,
            item: l.value
          }) : (H(), ce("p", pu, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), hu = /* @__PURE__ */ Ce({
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
    const t = Ji(), n = e, l = K(n.modelValue), i = J(() => typeof n.max == "boolean" || l.value.length < n.max ? ["modal-create"] : []);
    return (s, u) => {
      const f = he("lkt-table");
      return H(), Y(f, {
        type: "item",
        modelValue: l.value,
        "onUpdate:modelValue": u[0] || (u[0] = (o) => l.value = o),
        perms: i.value,
        "edit-mode": s.editable,
        "new-value-generator": () => {
        },
        modal: s.modal,
        "modal-key": s.modalKey,
        "modal-data": s.modalData,
        "required-items-for-top-create": 999999
      }, {
        item: ye(({ item: o, index: g, isLoading: d, canCreate: v, canRead: T, canUpdate: S, canDrop: x, doDrop: z }) => [
          re(Gn, {
            modelValue: l.value[g],
            "onUpdate:modelValue": (a) => l.value[g] = a,
            "item-type": s.itemType
          }, Lt({ _: 2 }, [
            V(t).item ? {
              name: "item",
              fn: ye(({ item: a }) => [
                Qe(s.$slots, "item", {
                  item: a,
                  focusing: s.focusing,
                  hadFirstFocus: s.hadFirstFocus,
                  disabled: s.disabled,
                  readonly: s.readonly,
                  modal: s.modal,
                  modalKey: s.modalKey,
                  modalData: s.modalData
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
}), mu = /* @__PURE__ */ Ce({
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
    const n = t, l = e, i = J(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), s = () => n("click");
    return (u, f) => {
      const o = he("lkt-button");
      return H(), Y(o, fe(u.config, {
        type: u.config.type ? u.config.type : V(je).FileUpload,
        resource: u.config.resource ?? u.fileUploadHttp.resource,
        "resource-data": u.config.resourceData ?? u.fileUploadHttp.data,
        text: u.insideEllipsis ? u.config.text : "",
        class: [i.value, "lkt-field--btn-file-upload"],
        icon: "lkt-icn-upload",
        onClick: s
      }), null, 16, ["type", "resource", "resource-data", "text", "class"]);
    };
  }
}), gu = { class: "lkt-time lkt-flex-column" }, vu = /* @__PURE__ */ Ce({
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
      const o = he("lkt-field");
      return H(), ce("div", gu, [
        re(o, fe({
          modelValue: i.value,
          "onUpdate:modelValue": f[0] || (f[0] = (g) => i.value = g)
        }, {
          type: V(j).Number,
          label: "Hour",
          canStep: !0,
          min: 0,
          max: 23
        }), null, 16, ["modelValue"]),
        re(o, fe({
          modelValue: s.value,
          "onUpdate:modelValue": f[1] || (f[1] = (g) => s.value = g)
        }, {
          type: V(j).Number,
          label: "Minutes",
          canStep: !0,
          min: 0,
          max: 59
        }), null, 16, ["modelValue"])
      ]);
    };
  }
}), bu = /* @__PURE__ */ Ce({
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
    const n = t, l = e, i = /* @__PURE__ */ new Date(), s = K(i.getHours()), u = K(i.getMinutes()), f = K(l.modelValue), o = (g) => {
      let d = g.split(":");
      d.length >= 2 && (s.value = parseInt(d[0]), u.value = parseInt(d[1]));
    };
    return ie([s, u], (g) => {
      f.value = [Tt(s.value, 2, "0"), Tt(u.value, 2, "0")].join(":");
    }), ie(() => l.modelValue, (g) => f.value = g), ie(f, (g) => n("update:modelValue", g)), ft(() => {
      o(f.value), f.value = [Tt(s.value, 2, "0"), Tt(u.value, 2, "0")].join(":");
    }), (g, d) => {
      const v = he("lkt-button");
      return H(), Y(v, Ie(ut({
        type: V(je).Tooltip,
        icon: g.icon,
        class: "lkt-field--toggle-button",
        text: f.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: V(It).Bottom,
          locationX: V(Dt).LeftCorner
        }
      })), {
        tooltip: ye(() => [
          re(vu, {
            hour: s.value,
            "onUpdate:hour": d[0] || (d[0] = (T) => s.value = T),
            minutes: u.value,
            "onUpdate:minutes": d[1] || (d[1] = (T) => u.value = T)
          }, null, 8, ["hour", "minutes"])
        ]),
        _: 1
      }, 16);
    };
  }
});
var me = /* @__PURE__ */ ((e) => (e[e.TextInput = 0] = "TextInput", e[e.TextareaInput = 1] = "TextareaInput", e[e.HtmlInput = 2] = "HtmlInput", e[e.BooleanInput = 3] = "BooleanInput", e[e.MultipleColorInput = 4] = "MultipleColorInput", e[e.SingleColorInput = 5] = "SingleColorInput", e[e.FileInput = 6] = "FileInput", e[e.DateInput = 7] = "DateInput", e[e.TimeInput = 8] = "TimeInput", e[e.SelectInput = 9] = "SelectInput", e[e.CalcInput = 10] = "CalcInput", e[e.SearchInput = 11] = "SearchInput", e[e.MultipleCardInput = 12] = "MultipleCardInput", e[e.SingleCardInput = 13] = "SingleCardInput", e[e.TableInput = 14] = "TableInput", e[e.RadioInput = 15] = "RadioInput", e[e.ToggleButtonGroupInput = 16] = "ToggleButtonGroupInput", e))(me || {});
const yu = /* @__PURE__ */ Ce({
  __name: "RadioInput",
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
    const l = n, i = e, s = K(i.modelValue), u = K(-1), f = K([...et(i.options, i.prop)]), o = K(!0);
    ie(o, (C) => {
      C || Ee(() => {
        o.value = !0;
      });
    }), ie(() => i.modelValue, (C) => {
      var N;
      !C && ((N = i.optionsConfig) != null && N.autoPickFirstOptionIfEmpty) ? (i.pickedOptions.splice(0, i.pickedOptions.length), Ee(() => {
        al({
          value: s,
          optionValueType: i.optionValueType,
          multiple: i.multiple,
          query: "",
          optionsConfig: i.optionsConfig,
          options: f,
          pickedOptions: i.pickedOptions
        });
      })) : s.value = C;
    }, { deep: !0 }), ie(s, (C) => {
      l("update:modelValue", C);
    }, { deep: !0 }), ie(f, (C) => {
      var N;
      typeof ((N = i.events) == null ? void 0 : N.updatedOptions) == "function" && (o.value = !1, i.events.updatedOptions({
        options: C
      })), l("update:options", C);
    }), ie(() => i.options, (C, N) => {
      if (!o.value) return;
      let E = new rt({
        opts: N
      });
      E.increment({ opts: C }), E.changed() && (f.value = et(C, i.prop), _());
    }, { deep: !0 });
    const g = K(""), d = K(null), v = K(i.pickedOptions);
    ie(v, (C) => {
      l("update:pickedOptions", C);
    });
    const T = K(!1), S = K(i.showOptions);
    ie(S, (C) => {
      l("update:showOptions", C), Ee(() => {
        C || (a.value = !1, z.value = !1, x.value = !1), T.value = S.value;
      });
    });
    const x = K(i.focusing), z = K(!1), a = K(!1);
    ie(() => i.focusing, (C) => {
      C !== x.value && Ee(() => {
        C ? h() : p();
      });
    }), ie(x, (C) => {
      l(C ? "focus" : "blur");
    });
    let r;
    const c = () => {
      clearTimeout(r), setTimeout(() => {
        d.value && d.value.focus();
      }, 100);
    }, p = (C) => {
      y.value || (r = setTimeout(() => {
        a.value = !1, x.value = z.value, S.value = x.value;
      }, 100));
    }, h = (C) => {
      i.searchable ? (a.value = !1, z.value = !0, x.value = !0, S.value = !0, Ee(() => {
        c();
      })) : (a.value = !0, z.value = !1, x.value = !0, S.value = !0);
    };
    t({
      doClear: () => {
        i.multiple ? s.value.splice(0, s.value.length) : s.value = "", v.value.splice(0, v.value.length), Ee(() => {
          _();
        });
      },
      doUndo: (C) => {
        if (i.multiple) {
          s.value.splice(0, s.value.length);
          let N = 0, E = C.length;
          for (; N < E; )
            s.value.push(
              C[N]
            ), ++N;
        } else
          s.value = C;
        v.value.splice(0, v.value.length), Ee(() => {
          _();
        });
      },
      keepFocused: c,
      switchShowOptions: () => {
        S.value = !S.value;
      }
    }), ie(() => i.pickedOptions, (C) => {
      l("change"), v.value = C;
    }, { deep: !0 });
    const y = J(() => !i.multiple && i.searchable && x.value), w = (C) => {
      var E, B;
      (i.multiple ? ol({
        option: C,
        value: s,
        pickedOptions: v,
        tagMode: !1,
        searchMode: i.searchable,
        keepFocused: c,
        optionValueType: i.optionValueType,
        callback: (E = i.events) == null ? void 0 : E.clickOption,
        optionsConfig: i.optionsConfig
      }) : nl({
        option: C,
        value: s,
        pickedOptions: v.value,
        showOptions: S.value,
        optionValueType: i.optionValueType,
        callback: (B = i.events) == null ? void 0 : B.clickOption,
        optionsConfig: i.optionsConfig
      })) && typeof i.events.clickOption == "function" && i.events.clickOption({
        option: C
      });
    }, _ = () => {
      i.multiple ? Rt({
        value: s,
        options: f.value,
        pickedOptions: v.value,
        multiple: i.multiple,
        optionValueType: i.optionValueType,
        optionsConfig: i.optionsConfig
      }) : Rt({
        value: s,
        options: f.value,
        pickedOptions: v.value,
        multiple: i.multiple,
        optionValueType: i.optionValueType,
        optionsConfig: i.optionsConfig
      }), l("loaded");
    };
    return ft(() => {
      _();
    }), (C, N) => {
      const E = he("lkt-table");
      return H(), Y(E, fe({
        ref: "optionList",
        modelValue: f.value,
        "onUpdate:modelValue": N[0] || (N[0] = (B) => f.value = B)
      }, {
        type: V(zt).Ul,
        editMode: C.editable,
        itemDisplayChecker: (B) => {
          var R;
          return V(Nt)(B, g.value, !0, (R = C.optionsConfig) == null ? void 0 : R.filter);
        },
        itemsContainerClass: "lkt-field--dropdown-options lkt-field--radio-options",
        itemContainerClass: (B, R) => {
          let W = [];
          return V(ll)(B, s.value, C.multiple) && W.push("is-active"), u.value === R && W.push("is-focused"), B.disabled && W.push("is-disabled"), W.join(" ");
        },
        itemSlotComponent: li(ot),
        itemSlotData: {
          optionSlot: C.optionSlot,
          editable: C.editable,
          prop: C.prop,
          isTag: !1,
          optionsConfig: C.optionsConfig,
          query: g.value,
          editableValue: s.value,
          multiple: C.multiple,
          focusedOptionIndex: u.value
        },
        itemSlotEvents: {
          click: (B, R) => {
            w(B);
          }
        }
      }), null, 16, ["modelValue"]);
    };
  }
}), _u = /* @__PURE__ */ Ce({
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
    const l = n, i = e, s = K(i.modelValue), u = K(-1), f = K([...et(i.options, i.prop)]), o = K(!0);
    ie(o, (C) => {
      C || Ee(() => {
        o.value = !0;
      });
    }), ie(() => i.modelValue, (C) => {
      var N;
      !C && ((N = i.optionsConfig) != null && N.autoPickFirstOptionIfEmpty) ? (i.pickedOptions.splice(0, i.pickedOptions.length), Ee(() => {
        al({
          value: s,
          optionValueType: i.optionValueType,
          multiple: i.multiple,
          query: "",
          optionsConfig: i.optionsConfig,
          options: f,
          pickedOptions: i.pickedOptions
        });
      })) : s.value = C;
    }, { deep: !0 }), ie(s, (C) => {
      l("update:modelValue", C);
    }, { deep: !0 }), ie(f, (C) => {
      var N;
      typeof ((N = i.events) == null ? void 0 : N.updatedOptions) == "function" && (o.value = !1, i.events.updatedOptions({
        options: C
      })), l("update:options", C);
    }), ie(() => i.options, (C, N) => {
      if (!o.value) return;
      let E = new rt({
        opts: N
      });
      E.increment({ opts: C }), E.changed() && (f.value = et(C, i.prop), _());
    }, { deep: !0 });
    const g = K(""), d = K(null), v = K(i.pickedOptions);
    ie(v, (C) => {
      l("update:pickedOptions", C);
    });
    const T = K(!1), S = K(i.showOptions);
    ie(S, (C) => {
      l("update:showOptions", C), Ee(() => {
        C || (a.value = !1, z.value = !1, x.value = !1), T.value = S.value;
      });
    });
    const x = K(i.focusing), z = K(!1), a = K(!1);
    ie(() => i.focusing, (C) => {
      C !== x.value && Ee(() => {
        C ? h() : p();
      });
    }), ie(x, (C) => {
      l(C ? "focus" : "blur");
    });
    let r;
    const c = () => {
      clearTimeout(r), setTimeout(() => {
        d.value && d.value.focus();
      }, 100);
    }, p = (C) => {
      y.value || (r = setTimeout(() => {
        a.value = !1, x.value = z.value, S.value = x.value;
      }, 100));
    }, h = (C) => {
      i.searchable ? (a.value = !1, z.value = !0, x.value = !0, S.value = !0, Ee(() => {
        c();
      })) : (a.value = !0, z.value = !1, x.value = !0, S.value = !0);
    };
    t({
      doClear: () => {
        i.multiple ? s.value.splice(0, s.value.length) : s.value = "", v.value.splice(0, v.value.length), Ee(() => {
          _();
        });
      },
      doUndo: (C) => {
        if (i.multiple) {
          s.value.splice(0, s.value.length);
          let N = 0, E = C.length;
          for (; N < E; )
            s.value.push(
              C[N]
            ), ++N;
        } else
          s.value = C;
        v.value.splice(0, v.value.length), Ee(() => {
          _();
        });
      },
      keepFocused: c,
      switchShowOptions: () => {
        S.value = !S.value;
      }
    }), ie(() => i.pickedOptions, (C) => {
      l("change"), v.value = C;
    }, { deep: !0 });
    const y = J(() => !i.multiple && i.searchable && x.value), w = (C) => {
      var E, B;
      (i.multiple ? ol({
        option: C,
        value: s,
        pickedOptions: v,
        tagMode: !1,
        searchMode: i.searchable,
        keepFocused: c,
        optionValueType: i.optionValueType,
        callback: (E = i.events) == null ? void 0 : E.clickOption,
        optionsConfig: i.optionsConfig
      }) : nl({
        option: C,
        value: s,
        pickedOptions: v.value,
        showOptions: S.value,
        optionValueType: i.optionValueType,
        callback: (B = i.events) == null ? void 0 : B.clickOption,
        optionsConfig: i.optionsConfig
      })) && typeof i.events.clickOption == "function" && i.events.clickOption({
        option: C
      });
    }, _ = () => {
      i.multiple ? Rt({
        value: s,
        options: f.value,
        pickedOptions: v.value,
        multiple: i.multiple,
        optionValueType: i.optionValueType,
        optionsConfig: i.optionsConfig
      }) : Rt({
        value: s,
        options: f.value,
        pickedOptions: v.value,
        multiple: i.multiple,
        optionValueType: i.optionValueType,
        optionsConfig: i.optionsConfig
      }), l("loaded");
    };
    return ft(() => {
      _();
    }), (C, N) => {
      const E = he("lkt-table");
      return H(), Y(E, fe({
        ref: "optionList",
        modelValue: f.value,
        "onUpdate:modelValue": N[0] || (N[0] = (B) => f.value = B)
      }, {
        type: V(zt).Ul,
        editMode: C.editable,
        itemDisplayChecker: (B) => {
          var R;
          return V(Nt)(B, g.value, !0, (R = C.optionsConfig) == null ? void 0 : R.filter);
        },
        itemsContainerClass: "lkt-field--toggle-button-group-options",
        itemContainerClass: (B, R) => {
          let W = [];
          return V(ll)(B, s.value, C.multiple) && W.push("is-active"), u.value === R && W.push("is-focused"), B.disabled && W.push("is-disabled"), W.join(" ");
        },
        itemSlotComponent: li(ot),
        itemSlotData: {
          optionSlot: C.optionSlot,
          editable: C.editable,
          prop: C.prop,
          isTag: !1,
          optionsConfig: C.optionsConfig,
          query: g.value,
          editableValue: s.value,
          multiple: C.multiple,
          focusedOptionIndex: u.value,
          fieldType: V(j).ToggleButtonGroup
        },
        itemSlotEvents: {
          click: (B, R) => {
            w(B);
          }
        }
      }), null, 16, ["modelValue"]);
    };
  }
}), Cu = ["data-show-ui", "data-labeled"], wu = ["for", "innerHTML"], ku = { class: "lkt-field-content" }, Su = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, xu = {
  key: 1,
  class: "lkt-field--icon"
}, Tu = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Eu = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Lu = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], Bu = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], zu = {
  key: 4,
  class: "lkt-field--info-nav"
}, Nu = ["innerHTML"], At = /* @__PURE__ */ Ce({
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
    events: {},
    canRender: { type: [Boolean, Function] },
    canDisplay: { type: [Boolean, Function] }
  }, Vo(Oo)),
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
    const l = n, i = Ji(), s = e, u = So(16), f = K(!1), o = K(!1);
    let g = Ze(s.modal, s.prop), d = Ze(s.modalKey, s.prop), v = Ze(s.icon, s.prop), T = Ze(s.download, s.prop), S = Ze(s.itemType, s.prop);
    !g && typeof S != "function" && S && typeof ee.modalPerItemType[S] < "u" && (g = ee.modalPerItemType[S]);
    const x = K(null);
    let z = s.featuredButton, a = s.modelValue;
    s.multiple && No.includes(s.type) ? (!a || !Array.isArray(a)) && (a = []) : at.includes(s.type) ? typeof a != "boolean" && (a = !1) : [j.Date, j.DateTime].includes(s.type) && !v ? v = ee.defaultDateIcon : s.type === j.Time && !v ? v = "lkt-icn-clock" : s.type === j.Number && s.canStep && z === "" && (z = ee.defaultNumberFeaturedButton), s.type === j.Table && (a = JSON.parse(JSON.stringify(s.modelValue)));
    const r = K(a), c = K(a), p = K(s.valid === !0), h = K(!0), b = K(!1), m = K(!1), y = K(!1), w = K(!1), _ = K([]), C = K(s.fileName), N = K(s.fileName), E = K(null), B = K(!1), R = K(!1), W = K([]), $ = K(!1), P = J(() => Bo.value), O = J(() => (P.value, ee.dateReadFormat ? ee.dateReadFormat : ee.langDateReadFormat[P.value] ? ee.langDateReadFormat[P.value] : ee.defaultDateReadFormat ? ee.defaultDateReadFormat : "Y-m-d")), I = c, D = K(typeof I.value == "object" ? JSON.parse(JSON.stringify(I.value)) : I.value), U = J(() => s.type === j.Textarea ? "textarea" : s.type === j.Html ? "div" : "input"), M = J(() => {
      if ([j.Date, j.DateTime].includes(s.type))
        return c.value !== r.value;
      if (s.type === j.Select || s.type === j.Radio) {
        if (s.multiple && s.optionValueType !== "option") {
          let k = new rt({ v: D.value });
          return k.increment({ v: I.value }), k.changed();
        }
      } else if (s.type === j.Table) {
        let k = new rt({ v: D.value });
        return k.increment({ v: I.value }), k.changed();
      }
      return I.value !== D.value;
    }), F = J(() => typeof s.disabled == "function" ? s.disabled(s.prop) : s.disabled), A = J(() => {
      let k = 0;
      return Me.value && ++k, pt.value && ++k, ht.value && ++k, Ke.value && ++k, sl.value && ++k, rl.value && ++k, _t.value && ++k, we.value && ++k, Mt.value && ++k, (s.customButtonText || s.customButtonClass) && ++k, typeof s.createButton == "object" && ++k, k > 1 && [
        j.Textarea,
        j.Html,
        j.Table,
        j.Radio
      ].includes(s.type) || k > 0 && s.infoButtonEllipsis ? 1 : k;
    }), L = J(() => Be.value && z === "i18n" || De.value && z === "password" || He.value && z === "subtract"), Z = J(() => A.value > 0), G = J(() => s.autocomplete === !0 ? "on" : "off"), te = J(() => {
      var k;
      return [j.Date, j.DateTime].includes(s.type) ? c.value !== "" : [j.Select, j.Radio].includes(s.type) ? (k = s.optionsConfig) != null && k.zeroMeansEmpty ? !(c.value === "" || c.value === 0) : c.value !== "" : I.value !== "";
    }), X = J(() => s.type === j.Password && b.value === !0 ? "text" : s.type === j.Email ? "email" : s.type === j.Password ? "password" : s.type === j.Number ? "number" : s.type === j.Tel ? "tel" : s.type === j.Search ? "search" : s.type === j.Color ? "color" : s.type === j.Range ? "range" : "text"), Q = J(() => {
      var q;
      const k = [];
      return k.push(`is-${s.type}`), at.includes(s.type) && (k.push("is-boolean"), I.value && k.push("is-checked")), M.value && k.push("is-changed"), F.value && k.push("is-disabled"), s.multiple && k.push("is-multiple"), L.value && k.push("with-atn-btn"), Z.value && k.push("with-info-btn"), s.mandatory && ae.value && k.push("is-mandatory-field"), ae.value && m.value && k.push("has-focus"), B.value && k.push("show-options"), s.searchable && $.value && k.push("is-searching"), s.hidden && k.push("lkt-hidden-field"), s.type !== j.Range && ((q = s.validation) == null ? void 0 : q.type) === Ro.Auto && w.value && y.value && (_.value.length > 0 ? k.push("is-invalid") : k.push("is-valid")), [j.Textarea, j.Html].includes(s.type) && k.push("is-lg"), [j.Image].includes(s.type) && k.push("is-xl"), s.multiple && [j.Select, j.Radio].includes(s.type) && k.push("is-lg"), s.multiple && (ae.value ? k.push(`has-multiple-display-${s.multipleDisplayEdition}`) : k.push(`has-multiple-display-${s.multipleDisplay}`)), A.value > 0 && k.push("has-icons", `has-icons-${A.value}`), k.push(ae.value ? "is-editable" : "is-read"), s.type !== j.Range && (k.push(p.value ? "is-valid" : "is-error"), k.push(te.value ? "is-filled" : "is-empty")), k.join(" ");
    }), le = J(() => {
      var k;
      return typeof I.value == "number" ? (P.value, (k = ee.langNumberFormat[P.value]) != null && k.amountOfDecimals ? bl(
        I.value,
        ee.langNumberFormat[P.value].amountOfDecimals,
        ee.langNumberFormat[P.value].decimalSeparator,
        ee.langNumberFormat[P.value].thousandsSeparator,
        ee.langNumberFormat[P.value].removeDecimalsIfZero
      ) : ee.amountOfDecimals ? bl(
        I.value,
        ee.amountOfDecimals,
        ee.decimalSeparator,
        ee.thousandsSeparator,
        ee.removeDecimalsIfZero
      ) : I.value.toString()) : s.type === j.Html ? Gi(I.value) : I.value;
    }), ue = J(() => {
      let k = Ze(s.min, s.prop);
      return typeof k == "string" ? parseFloat(k) : typeof k == "number" ? k : !1;
    }), de = J(() => {
      let k = Ze(s.max, s.prop);
      return typeof k == "string" ? parseFloat(k) : typeof k == "number" ? k : !1;
    }), ne = J(() => {
      var k, q, ve, ze;
      if (at.includes(s.type)) {
        if (I.value === !0 && typeof s.configOn == "object")
          return qi(
            ii(((k = s.configOn) == null ? void 0 : k.label) ?? s.label),
            ((q = s.configOn) == null ? void 0 : q.labelIcon) ?? s.labelIcon,
            s.labelIconAtEnd
          );
        if (I.value !== !0 && typeof s.configOff == "object")
          return qi(
            ii(((ve = s.configOff) == null ? void 0 : ve.label) ?? s.label),
            ((ze = s.configOff) == null ? void 0 : ze.labelIcon) ?? s.labelIcon,
            s.labelIconAtEnd
          );
      }
      return qi(
        ii(s.label),
        s.labelIcon,
        s.labelIconAtEnd
      );
    }), pe = J(() => ii(s.placeholder)), xe = J(() => ii(s.searchPlaceholder)), Fe = J(() => typeof g == "function" ? g(s.prop) : Ze(g, s.prop)), ae = J(() => typeof s.readMode == "function" ? !s.readMode(s.prop) : !Ze(s.readMode, s.prop)), Ae = J(() => {
      if (typeof s.modalData == "function") return s.modalData(s.prop);
      if (typeof s.modalData == "string") return Ze(s.modalData, s.prop);
      if (typeof s.modalData == "object" && !Array.isArray(s.modalData)) {
        let k = {};
        for (let q in s.modalData)
          k[q] = Ze(s.modalData[q], s.prop);
        return k;
      }
      return s.modalData;
    }), Se = J(() => typeof v == "function" ? v(s.prop) : Ze(v, s.prop)), tt = J(() => s.type === j.File ? ee.acceptTypes.file : s.type === j.Image ? ee.acceptTypes.image : ""), Pe = J(() => s.errorMessage), Ge = J(() => s.infoMessage), He = J(() => s.canStep && ae.value && s.type === j.Number), we = J(() => s.canStep && ae.value && s.type === j.Number && z !== "subtract"), Mt = J(() => s.canStep && ae.value && s.type === j.Number), Xe = J(() => s.canUndo && M.value && ae.value && !Ao.includes(s.type)), Ue = J(() => s.canClear && te.value && ae.value && !Io.includes(s.type)), Be = J(() => s.canI18n && typeof c.value == "object" && ae.value), De = J(() => s.type === j.Password && s.showPassword && te.value && ae.value), Me = J(() => Xe.value && !s.infoButtonEllipsis), pt = J(() => Ue.value && !s.infoButtonEllipsis), ht = J(() => De.value && !s.infoButtonEllipsis && z !== "password"), Ke = J(() => Be.value && !s.infoButtonEllipsis && z !== "i18n"), _t = J(() => s.type === j.Select), sl = J(() => s.allowReadModeSwitch && !s.infoButtonEllipsis), rl = J(() => typeof s.fileUploadButton == "object" && Object.keys(s.fileUploadButton).length > 0), ul = () => {
      Ee(() => {
        x.value && x.value.focus();
      });
    }, Kn = async () => {
      var q;
      let k = [];
      if ((q = s.validation) != null && q.resource) {
        l("validating");
        const ve = await Qi(s.validation.resource, {
          ...s.validation.resourceData,
          value: I.value
        });
        if (ve) {
          let ze = ve.data === !0;
          !ze && I.value === r.value && (ze = !0), k.push(Re.createRemoteResponse(ve, ze ? Te.Ok : Te.Ko));
        }
        l("validation", ve);
      }
      return k;
    }, We = K({});
    s.canI18n && typeof s.modelValue == "object" && !Array.isArray(s.modelValue) && (We.value = JSON.parse(JSON.stringify(s.modelValue)) ?? {});
    const Yn = K(new rt(We.value));
    ie(We, (k) => {
      let q = new rt(Yn.value.getOriginalData());
      q.increment(k), q.changed() && (l("update:modelValue", k), Ct && clearTimeout(Ct), Ct = setTimeout(() => {
        mt();
      }, 150));
    }, { deep: !0 }), ie(() => {
      var k;
      return (k = s.validation) == null ? void 0 : k.checkEqualTo;
    }, () => mt()), ie(() => s.valid, (k) => p.value = k), ie(() => s.modelValue, (k) => {
      if ([j.Card].includes(s.type))
        I.value = k;
      else if (Ne.value === me.DateInput)
        I.value = k;
      else if (s.canI18n) {
        let q = new rt(We.value);
        q.increment(k), q.changed() && (We.value = JSON.parse(JSON.stringify(k)) ?? {});
      } else
        I.value = k;
    }, { deep: !0 }), ie(I, (k) => {
      typeof k == "object" && !Array.isArray(k) && ![j.Card].includes(s.type) ? c.value[P.value] = k : c.value = k, s.type === j.Number && co(k);
    }, { deep: !0 });
    let Ct;
    ie(c, (k) => {
      var q;
      R.value && ae.value && (l("update:modelValue", k), typeof ((q = s.events) == null ? void 0 : q.changed) == "function" && s.events.changed({
        prop: s.prop
      }), Ct && clearTimeout(Ct), Ct = setTimeout(() => {
        mt();
      }, 150));
    }, { deep: !0 }), ie(p, (k) => {
      l("update:valid", k);
    });
    const it = (k) => {
      var q, ve, ze;
      return !!((q = s.validation.defaultValueOverrides) != null && q.includes(k) && ((ze = (ve = s.validation) == null ? void 0 : ve.defaultValue) == null ? void 0 : ze.length) > 0);
    }, mt = async () => {
      _.value.splice(0, _.value.length);
      const k = await Kn(), q = Xn(), ve = [...k, ...q];
      let ze = ve.filter((vt) => vt.status === Te.Ko).length === 0;
      h.value = ze, s.type !== j.Range && (_.value = ve, p.value = ze, l("validation-status", ve));
    }, Xn = () => {
      var vt, Ht, Ft, Ut, Pt, Wt, $t, Zt, qt, jt, Gt, Kt, Le;
      let k = [], q = I.value;
      s.canI18n && (q = We[P]);
      let ve = ue.value, ze = de.value;
      if (s.type === j.Number && typeof s.min < "u" && typeof s.max < "u" && (q < ve || q > ze))
        return k.push(Re.createNumBetween(ve, ze, Te.Ko)), p.value = !1, k;
      if (s.mandatory) {
        switch (s.type) {
          case j.Select:
          case j.Radio:
          case j.ToggleButtonGroup:
            s.multiple && W.value.length === 0 ? it(lt.Empty) ? k = [...k, ...s.validation.defaultValue] : k.push(Re.createEmpty(Te.Ko)) : !s.multiple && !q && (it(lt.Empty) ? k = [...k, ...s.validation.defaultValue] : k.push(Re.createEmpty(Te.Ko)));
            break;
          case j.Html:
            xo(Gi(q)).length === 0 && (it(lt.Empty) ? k = [...k, ...s.validation.defaultValue] : k.push(Re.createEmpty(Te.Ko)));
            break;
          default:
            ![j.Number].includes(s.type) && q === "" && (it(lt.Empty) ? k = [...k, ...s.validation.defaultValue] : k.push(Re.createEmpty(Te.Ko)));
        }
        if (k.length > 0) return k;
      }
      return ve > 0 && (s.type !== j.Number && q.length < ve ? it(lt.MinStringLength) ? k = [...k, ...s.validation.defaultValue] : k.push(Re.createMinStr(Te.Ko)) : q < ve && (it(lt.MinNumber) ? k = [...k, ...s.validation.defaultValue] : k.push(Re.createMinNum(Te.Ko)))), ze > 0 && (s.type !== j.Number && q.length > ze ? it(lt.MaxStringLength) ? k = [...k, ...s.validation.defaultValue] : k.push(Re.createMaxStr(Te.Ko)) : q > ze && (it(lt.MaxNumber) ? k = [...k, ...s.validation.defaultValue] : k.push(Re.createMaxNum(Te.Ko)))), s.type === j.Email && (To(q) || (it(lt.Email) ? k = [...k, ...s.validation.defaultValue] : k.push(Re.createEmail(Te.Ko)))), Do.includes(s.type) && (na(k, q, (vt = s.validation) == null ? void 0 : vt.minNumbers, (Ht = s.validation) == null ? void 0 : Ht.maxNumbers), oa(k, q, (Ft = s.validation) == null ? void 0 : Ft.minUpperChars, (Ut = s.validation) == null ? void 0 : Ut.maxUpperChars), aa(k, q, (Pt = s.validation) == null ? void 0 : Pt.minLowerChars, (Wt = s.validation) == null ? void 0 : Wt.maxLowerChars), sa(k, q, ($t = s.validation) == null ? void 0 : $t.minChars, (Zt = s.validation) == null ? void 0 : Zt.maxChars), ra(k, q, (qt = s.validation) == null ? void 0 : qt.minSpecialChars, (jt = s.validation) == null ? void 0 : jt.maxSpecialChars)), (Gt = s.validation) != null && Gt.checkEqualTo && q !== ((Kt = s.validation) == null ? void 0 : Kt.checkEqualTo) && k.push(Re.createEqualTo((Le = s.validation) == null ? void 0 : Le.checkEqualTo, Te.Ko)), k;
    }, oi = J(() => {
      var k;
      return ((k = s.validation) == null ? void 0 : k.trigger) === Mo.Blur && y.value && w.value;
    }), dl = J(() => {
      var k, q, ve, ze;
      return !oi.value && ((q = (k = s.validation) == null ? void 0 : k.defaultValue) == null ? void 0 : q.length) > 0 ? 1 : oi.value ? 2 : _.value.length === 0 ? ((ze = (ve = s.validation) == null ? void 0 : ve.defaultValue) == null ? void 0 : ze.length) > 0 ? 1 : 0 : 2;
    }), cl = J(() => {
      var k, q;
      switch (dl.value) {
        case 1:
          return Array.isArray((k = s.validation) == null ? void 0 : k.defaultValue) ? (q = s.validation) == null ? void 0 : q.defaultValue : [];
        case 2:
          return _.value;
        default:
          return [];
      }
    }), Jn = J(() => !(cl.value.length === 0 || s.validation.report === !1 || s.validation.report === yl.Inline || dl.value === 2 && !oi.value)), Qn = J(() => !(_.value.length === 0 || s.validation.report === !1 || s.validation.report === yl.Message || !oi.value)), Pi = () => {
      var k;
      switch (Ne.value) {
        case me.HtmlInput:
          x.value && x.value.setValue(D.value);
          return;
        case me.DateInput:
          c.value = r.value;
          return;
        case me.FileInput:
          c.value = r.value, N.value = C.value;
          return;
        case me.SelectInput:
          (k = x.value) == null || k.doUndo(D.value);
          return;
        case me.TableInput:
          I.value = JSON.parse(JSON.stringify(D.value));
          return;
        default:
          I.value = D.value;
      }
    }, fl = () => {
      var k;
      switch (Ne.value) {
        case me.HtmlInput:
          x.value && x.value.setValue("");
          return;
        case me.DateInput:
          c.value = "";
          return;
        case me.FileInput:
          c.value = "", N.value = "";
          return;
        case me.SelectInput:
          (k = x.value) == null || k.doClear();
          return;
        case me.TableInput:
          I.value = [];
          return;
        default:
          I.value = "";
      }
    }, eo = () => I.value, ai = (k) => {
      l("keyup", k);
    }, to = () => {
      x.value && x.value.keepFocused();
    }, io = () => {
      if (B.value) {
        if (s.type === j.Select) {
          Ot();
          return;
        }
        return kt();
      }
      if (s.type === j.Select) {
        Vt();
        return;
      }
      return wt();
    }, si = (k) => l("keydown", k), wt = (k) => {
      w.value = !0, m.value = !0, mt(), l("focus", k);
    }, kt = (k) => {
      setTimeout(() => {
        if (!(s.searchable && $.value)) {
          if (s.multiple) {
            B.value = !0, m.value = !0;
            return;
          }
          y.value = !0, B.value = !1, m.value = !1, mt(), l("blur", k);
        }
      }, 100);
    }, Wi = (k) => {
      w.value = !0, m.value = !0, l("focus", k);
    }, $i = (k) => {
      y.value = !0, m.value = !1, l("blur", k);
    }, Vt = () => {
      w.value = !0, m.value = !0, mt(), s.searchable && to(), l("focus");
    }, Ot = () => {
      y.value = !0, m.value = !1, l("blur");
    }, Je = (k) => {
      l("change", k, I.value);
    }, gt = (k) => {
      l("click", k);
    }, pl = (k) => l("click-info", k), lo = (k) => l("click-error", k), hl = () => {
      let k = s.step ?? 1;
      typeof k == "string" && (k = parseFloat(k));
      let q = String(k).split(".")[0].length, ve = parseFloat(I.value);
      isNaN(ve) && (ve = 0), (!ue.value || ve > ue.value) && (I.value = parseFloat((ve - k).toFixed(q)));
    }, no = () => {
      let k = s.step ?? 1;
      typeof k == "string" && (k = parseFloat(k));
      let q = String(k).split(".")[0].length, ve = parseFloat(I.value);
      isNaN(ve) && (ve = 0), (!de.value || ve < de.value) && (I.value = parseFloat((ve + k).toFixed(q)));
    }, oo = () => {
      ae.value && ul();
    }, ao = (k) => {
      kl({
        text: st.defaultUploadSuccessText,
        details: st.defaultUploadSuccessDetails,
        icon: st.defaultUploadSuccessIcon,
        positionX: _l.Right
      }), l("upload-success", k);
    }, so = (k) => {
      kl({
        text: st.defaultUploadErrorText,
        details: st.defaultUploadErrorDetails,
        icon: st.defaultUploadErrorIcon,
        positionX: _l.Right
      }), l("upload-error", k);
    }, ro = () => {
      l("uploading");
    }, uo = (k) => {
      l("picked-files", k);
    }, co = (k) => {
      if (!s.enableAutoNumberFix) return !1;
      let q = Number(k), ve = jo(q, ue.value, de.value);
      return q !== ve ? (I.value = ve, !0) : !1;
    };
    t({
      Identifier: u,
      reset: Pi,
      focus: ul,
      value: eo,
      isMandatory: () => s.mandatory,
      isFormValid: () => h.value,
      isValid: () => p.value,
      click: () => {
        var k;
        switch (s.type) {
          case j.File:
            return (k = x.value) == null ? void 0 : k.click();
        }
        E.value.click();
      }
    });
    const fo = J(() => s.editSlot !== "" && typeof ee.customEditSlots[s.editSlot] < "u"), po = J(() => ee.customEditSlots[s.editSlot]);
    ft(() => {
      s.type === j.Select && s.multiple && ($.value = !0), mt(), R.value = !0;
    });
    const ho = J(() => at.includes(s.type) && !F.value ? "label" : "div"), mo = J(() => at.includes(s.type) ? {
      for: u
    } : {}), go = J(() => {
      switch (s.type) {
        case j.Select:
        case j.Radio:
        case j.ToggleButtonGroup:
          return W.value;
        case j.Date:
        case j.DateTime:
          return bn(c.value, O.value);
        case j.File:
        case j.Image:
          return c.value;
        default:
          return s.canI18n ? We.value[P.value] : I.value;
      }
    }), vo = J(() => typeof s.canRender == "function" ? s.canRender({
      prop: s.prop
    }) : typeof s.canRender == "boolean" ? s.canRender : !0), bo = J(() => typeof s.canDisplay == "function" ? s.canDisplay({
      prop: s.prop
    }) : typeof s.canDisplay == "boolean" ? s.canDisplay : !0), Ne = J(() => {
      var k, q;
      if (at.includes(s.type)) return me.BooleanInput;
      switch (s.type) {
        case j.Color:
          return s.multiple ? me.MultipleColorInput : me.SingleColorInput;
        case j.Card:
          return s.multiple ? me.MultipleCardInput : me.SingleCardInput;
        case j.File:
        case j.Image:
          return me.FileInput;
        case j.Date:
        case j.DateTime:
          return me.DateInput;
        case j.Time:
          return me.TimeInput;
        case j.Select:
          return me.SelectInput;
        case j.Calc:
          return me.CalcInput;
        case j.Search:
          return me.SearchInput;
        case j.Html:
          return me.HtmlInput;
        case j.Table:
          return me.TableInput;
        case j.Radio:
          return me.RadioInput;
        case j.ToggleButtonGroup:
          return me.ToggleButtonGroupInput;
        default:
          if (U.value === "input")
            return s.options.length > 0 || (k = s.optionsConfig) != null && k.http && Object.keys((q = s.optionsConfig) == null ? void 0 : q.http).length > 0 ? me.SelectInput : me.TextInput;
          if (U.value === "textarea")
            return me.TextareaInput;
      }
    });
    return (k, q) => {
      var vt, Ht, Ft, Ut, Pt, Wt, $t, Zt, qt, jt, Gt, Kt;
      const ve = he("lkt-button"), ze = he("lkt-table");
      return vo.value ? Ve((H(), ce("div", {
        key: 0,
        class: Ye(["lkt-field", Q.value]),
        "data-show-ui": Z.value,
        "data-labeled": !V(i).label,
        ref_key: "container",
        ref: E
      }, [
        V(i).label ? Qe(k.$slots, "label", { key: 0 }) : se("", !0),
        !V(i).label && ne.value !== "" && !V(at).includes(k.type) ? (H(), ce("label", {
          key: 1,
          for: V(u),
          class: "lkt-field--label",
          innerHTML: ne.value
        }, null, 8, wu)) : se("", !0),
        be("div", ku, [
          L.value ? (H(), ce("div", Su, [
            k.featuredButton === "password" && De.value ? (H(), Y(Ki, {
              key: 0,
              modelValue: b.value,
              "onUpdate:modelValue": q[0] || (q[0] = (Le) => b.value = Le),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : se("", !0),
            Be.value && V(z) === "i18n" && k.canI18n && E.value ? (H(), Y(Sl, {
              key: 1,
              translations: We.value,
              "is-featured": "",
              referrer: E.value,
              type: k.type
            }, null, 8, ["translations", "referrer", "type"])) : se("", !0),
            He.value && V(z) === "subtract" ? (H(), Y(ve, fe({ key: 2 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              disabled: V(I) === ue.value
            }, { onClick: hl }), null, 16)) : se("", !0)
          ])) : se("", !0),
          Se.value && (!ae.value || ![V(j).Time, V(j).Date, V(j).DateTime].includes(k.type)) ? (H(), ce("div", xu, [
            be("i", {
              class: Ye(Se.value)
            }, null, 2)
          ])) : se("", !0),
          ae.value ? (H(), Y(ct(ho.value), fe({ key: 2 }, mo.value, { class: "lkt-field-main" }), {
            default: ye(() => {
              var Le, St, Yt, Xt, Jt, Qt, ei, ti, ml;
              return [
                V(i).edit ? (H(), ce("div", {
                  key: 0,
                  onClick: gt
                }, [
                  Qe(k.$slots, "edit", {
                    value: c.value,
                    title: le.value,
                    data: k.slotData
                  })
                ])) : fo.value ? (H(), ce("div", {
                  key: 1,
                  onClick: gt
                }, [
                  (H(), Y(ct(po.value), {
                    value: c.value,
                    title: le.value,
                    data: k.slotData
                  }, null, 8, ["value", "title", "data"]))
                ])) : Ne.value === V(me).BooleanInput ? (H(), Y(fa, {
                  key: 2,
                  modelValue: V(I),
                  "onUpdate:modelValue": q[1] || (q[1] = (oe) => $e(I) ? I.value = oe : null),
                  ref_key: "inputElement",
                  ref: x,
                  id: V(u),
                  name: k.name,
                  type: k.type,
                  label: ne.value,
                  editable: ae.value,
                  focusing: m.value,
                  disabled: F.value,
                  readonly: k.readonly,
                  onFocus: Wi,
                  onBlur: $i
                }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : Ne.value === V(me).MultipleColorInput ? (H(), Y(la, {
                  key: 3,
                  modelValue: V(I),
                  "onUpdate:modelValue": q[2] || (q[2] = (oe) => $e(I) ? I.value = oe : null),
                  ref_key: "inputElement",
                  ref: x,
                  "edit-mode": ae.value,
                  min: ue.value,
                  max: de.value
                }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : Ne.value === V(me).SingleColorInput ? (H(), Y(yn, {
                  key: 4,
                  modelValue: V(I),
                  "onUpdate:modelValue": q[3] || (q[3] = (oe) => $e(I) ? I.value = oe : null),
                  onChange: Je,
                  ref_key: "inputElement",
                  ref: x
                }, null, 8, ["modelValue"])) : Ne.value === V(me).FileInput ? (H(), Y(nu, {
                  key: 5,
                  modelValue: c.value,
                  "onUpdate:modelValue": q[4] || (q[4] = (oe) => c.value = oe),
                  "file-name": N.value,
                  "onUpdate:fileName": q[5] || (q[5] = (oe) => N.value = oe),
                  ref_key: "inputElement",
                  ref: x,
                  id: V(u),
                  tabindex: k.tabindex,
                  resource: (Le = k.fileUploadHttp) == null ? void 0 : Le.resource,
                  "resource-data": (St = k.fileUploadHttp) == null ? void 0 : St.data,
                  name: k.name,
                  placeholder: pe.value,
                  accept: tt.value,
                  focusing: m.value,
                  disabled: F.value,
                  readonly: k.readonly,
                  "is-image": k.type === V(j).Image,
                  "file-browser-config": k.fileBrowserConfig,
                  onChange: Je,
                  onUploading: ro,
                  onUploadSuccess: ao,
                  onUploadError: so,
                  onPickedFiles: uo
                }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image", "file-browser-config"])) : Ne.value === V(me).DateInput ? (H(), Y(fu, {
                  key: 6,
                  modelValue: c.value,
                  "onUpdate:modelValue": q[6] || (q[6] = (oe) => c.value = oe),
                  id: V(u),
                  tabindex: k.tabindex,
                  lang: P.value,
                  name: k.name,
                  icon: Se.value,
                  "is-date-time": V(j).DateTime === k.type
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name", "icon", "is-date-time"])) : Ne.value === V(me).TimeInput ? (H(), Y(bu, {
                  key: 7,
                  modelValue: c.value,
                  "onUpdate:modelValue": q[7] || (q[7] = (oe) => c.value = oe),
                  id: V(u),
                  tabindex: k.tabindex,
                  lang: P.value,
                  name: k.name,
                  icon: Se.value
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name", "icon"])) : Ne.value === V(me).SelectInput ? (H(), Y(dn, fe({
                  key: 8,
                  ref_key: "inputElement",
                  ref: x,
                  modelValue: V(I),
                  "onUpdate:modelValue": q[8] || (q[8] = (oe) => $e(I) ? I.value = oe : null),
                  "show-options": B.value,
                  "onUpdate:showOptions": q[9] || (q[9] = (oe) => B.value = oe),
                  "picked-options": W.value,
                  "onUpdate:pickedOptions": q[10] || (q[10] = (oe) => W.value = oe)
                }, {
                  searchable: k.searchable,
                  searchMode: $.value,
                  multiple: k.multiple,
                  canTag: k.canTag,
                  options: k.options,
                  optionsConfig: k.optionsConfig,
                  optionSlot: k.optionSlot,
                  editable: ae.value,
                  focusing: m.value,
                  searchPlaceholder: xe.value,
                  multipleDisplayEdition: k.multipleDisplayEdition,
                  prop: k.prop,
                  max: de.value,
                  tooltip: k.tooltipConfig,
                  events: k.events,
                  optionValueType: k.optionValueType,
                  referrer: E.value,
                  isAutoCompleteText: k.type !== V(j).Select
                }, {
                  onFocus: Vt,
                  onBlur: Ot,
                  onChange: Je
                }), null, 16, ["modelValue", "show-options", "picked-options"])) : Ne.value === V(me).RadioInput ? (H(), Y(yu, fe({
                  key: 9,
                  ref_key: "inputElement",
                  ref: x,
                  modelValue: V(I),
                  "onUpdate:modelValue": q[11] || (q[11] = (oe) => $e(I) ? I.value = oe : null),
                  "show-options": B.value,
                  "onUpdate:showOptions": q[12] || (q[12] = (oe) => B.value = oe),
                  "picked-options": W.value,
                  "onUpdate:pickedOptions": q[13] || (q[13] = (oe) => W.value = oe)
                }, {
                  searchable: k.searchable,
                  searchMode: $.value,
                  multiple: k.multiple,
                  options: k.options,
                  optionsConfig: k.optionsConfig,
                  optionSlot: k.optionSlot,
                  editable: ae.value,
                  focusing: m.value,
                  searchPlaceholder: xe.value,
                  multipleDisplayEdition: k.multipleDisplayEdition,
                  prop: k.prop,
                  max: de.value,
                  tooltip: k.tooltipConfig,
                  events: k.events,
                  optionValueType: k.optionValueType,
                  referrer: E.value
                }, {
                  onFocus: Vt,
                  onBlur: Ot,
                  onChange: Je
                }), null, 16, ["modelValue", "show-options", "picked-options"])) : Ne.value === V(me).ToggleButtonGroupInput ? (H(), Y(_u, fe({
                  key: 10,
                  ref_key: "inputElement",
                  ref: x,
                  modelValue: V(I),
                  "onUpdate:modelValue": q[14] || (q[14] = (oe) => $e(I) ? I.value = oe : null),
                  "show-options": B.value,
                  "onUpdate:showOptions": q[15] || (q[15] = (oe) => B.value = oe),
                  "picked-options": W.value,
                  "onUpdate:pickedOptions": q[16] || (q[16] = (oe) => W.value = oe)
                }, {
                  searchable: k.searchable,
                  searchMode: $.value,
                  multiple: k.multiple,
                  options: k.options,
                  optionsConfig: k.optionsConfig,
                  optionSlot: k.optionSlot,
                  editable: ae.value,
                  focusing: m.value,
                  searchPlaceholder: xe.value,
                  multipleDisplayEdition: k.multipleDisplayEdition,
                  prop: k.prop,
                  max: de.value,
                  tooltip: k.tooltipConfig,
                  events: k.events,
                  optionValueType: k.optionValueType,
                  referrer: E.value
                }, {
                  onFocus: Vt,
                  onBlur: Ot,
                  onChange: Je
                }), null, 16, ["modelValue", "show-options", "picked-options"])) : Ne.value === V(me).CalcInput ? (H(), Y(Fr, {
                  key: 11,
                  ref_key: "inputElement",
                  ref: x,
                  modelValue: V(I),
                  "onUpdate:modelValue": q[17] || (q[17] = (oe) => $e(I) ? I.value = oe : null),
                  id: V(u),
                  tabindex: k.tabindex,
                  name: k.name,
                  editable: ae.value,
                  focusing: m.value,
                  disabled: F.value,
                  readonly: k.readonly,
                  options: k.options,
                  onFocus: Wi,
                  onBlur: $i
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : Ne.value === V(me).SearchInput ? (H(), Y($r, {
                  key: 12,
                  ref_key: "inputElement",
                  ref: x,
                  modelValue: V(I),
                  "onUpdate:modelValue": q[18] || (q[18] = (oe) => $e(I) ? I.value = oe : null),
                  id: V(u),
                  tabindex: k.tabindex,
                  name: k.name,
                  editable: ae.value,
                  focusing: m.value,
                  "had-first-focus": w.value,
                  disabled: F.value,
                  readonly: k.readonly,
                  "options-resource": (Xt = (Yt = k.optionsConfig) == null ? void 0 : Yt.http) == null ? void 0 : Xt.resource,
                  container: E.value,
                  tooltip: k.tooltipConfig,
                  onFocus: Wi,
                  onBlur: $i
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container", "tooltip"])) : Ne.value === V(me).MultipleCardInput ? (H(), Y(hu, {
                  key: 13,
                  modelValue: V(I),
                  "onUpdate:modelValue": q[19] || (q[19] = (oe) => $e(I) ? I.value = oe : null),
                  id: V(u),
                  tabindex: k.tabindex,
                  name: k.name,
                  editable: ae.value,
                  focusing: m.value,
                  "had-first-focus": w.value,
                  disabled: F.value,
                  readonly: k.readonly,
                  "options-resource": (Qt = (Jt = k.optionsConfig) == null ? void 0 : Jt.http) == null ? void 0 : Qt.resource,
                  modal: Fe.value,
                  "modal-key": V(d),
                  "modal-data": Ae.value,
                  "item-type": V(S)
                }, Lt({ _: 2 }, [
                  V(i)["item-" + V(S)] ? {
                    name: "item",
                    fn: ye(({ item: oe }) => [
                      Qe(k.$slots, "item-" + V(S), { item: oe })
                    ]),
                    key: "0"
                  } : V(i).item ? {
                    name: "item",
                    fn: ye(({ item: oe }) => [
                      Qe(k.$slots, "item", { item: oe })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : Ne.value === V(me).SingleCardInput ? (H(), Y(Gn, {
                  key: 14,
                  modelValue: V(I),
                  "onUpdate:modelValue": q[20] || (q[20] = (oe) => $e(I) ? I.value = oe : null),
                  id: V(u),
                  tabindex: k.tabindex,
                  name: k.name,
                  editable: ae.value,
                  focusing: m.value,
                  "had-first-focus": w.value,
                  disabled: F.value,
                  readonly: k.readonly,
                  "options-resource": (ti = (ei = k.optionsConfig) == null ? void 0 : ei.http) == null ? void 0 : ti.resource,
                  modal: Fe.value,
                  "modal-key": V(d),
                  "modal-data": Ae.value,
                  "item-type": V(S)
                }, Lt({ _: 2 }, [
                  V(i)["item-" + V(S)] ? {
                    name: "item",
                    fn: ye(({ item: oe }) => [
                      Qe(k.$slots, "item-" + V(S), { item: oe })
                    ]),
                    key: "0"
                  } : V(i).item ? {
                    name: "item",
                    fn: ye(({ item: oe }) => [
                      Qe(k.$slots, "item", { item: oe })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : Ne.value === V(me).TableInput ? (H(), Y(ze, fe({
                  key: 15,
                  modelValue: V(I),
                  "onUpdate:modelValue": q[21] || (q[21] = (oe) => $e(I) ? I.value = oe : null)
                }, {
                  ...(ml = k.optionsConfig) == null ? void 0 : ml.table,
                  editMode: ae.value
                }), null, 16, ["modelValue"])) : k.canI18n && Ne.value === V(me).TextInput ? Ve((H(), ce("input", {
                  key: 16,
                  "onUpdate:modelValue": q[22] || (q[22] = (oe) => We.value[P.value] = oe),
                  ref: (oe) => x.value = oe,
                  value: We.value[P.value],
                  type: X.value,
                  name: k.name,
                  id: V(u),
                  disabled: F.value,
                  readonly: k.readonly,
                  placeholder: pe.value,
                  tabindex: k.tabindex,
                  autocomplete: G.value,
                  min: ue.value,
                  max: de.value,
                  step: k.step,
                  onKeyup: ai,
                  onKeydown: si,
                  onFocus: wt,
                  onBlur: kt,
                  onClick: gt,
                  onChange: Je
                }, null, 40, Tu)), [
                  [vl, We.value[P.value]]
                ]) : Ne.value === V(me).TextInput ? Ve((H(), ce("input", {
                  key: 17,
                  "onUpdate:modelValue": q[23] || (q[23] = (oe) => $e(I) ? I.value = oe : null),
                  ref: (oe) => x.value = oe,
                  value: V(I),
                  type: X.value,
                  name: k.name,
                  id: V(u),
                  disabled: F.value,
                  readonly: k.readonly,
                  placeholder: pe.value,
                  tabindex: k.tabindex,
                  autocomplete: G.value,
                  min: ue.value,
                  max: de.value,
                  step: k.step,
                  onKeyup: ai,
                  onKeydown: si,
                  onFocus: wt,
                  onBlur: kt,
                  onClick: gt,
                  onChange: Je
                }, null, 40, Eu)), [
                  [vl, V(I)]
                ]) : k.canI18n && Ne.value === V(me).TextareaInput ? Ve((H(), ce("textarea", {
                  key: 18,
                  "onUpdate:modelValue": q[24] || (q[24] = (oe) => We.value[P.value] = oe),
                  ref: (oe) => x.value = oe,
                  name: k.name,
                  id: V(u),
                  disabled: F.value,
                  readonly: k.readonly,
                  placeholder: pe.value,
                  tabindex: k.tabindex,
                  autocomplete: G.value,
                  onKeyup: ai,
                  onKeydown: si,
                  onFocus: wt,
                  onBlur: kt,
                  onClick: gt,
                  onChange: Je
                }, null, 40, Lu)), [
                  [Bt, We.value[P.value]]
                ]) : Ne.value === V(me).TextareaInput ? Ve((H(), ce("textarea", {
                  key: 19,
                  "onUpdate:modelValue": q[25] || (q[25] = (oe) => $e(I) ? I.value = oe : null),
                  ref: (oe) => x.value = oe,
                  name: k.name,
                  id: V(u),
                  disabled: F.value,
                  readonly: k.readonly,
                  placeholder: pe.value,
                  tabindex: k.tabindex,
                  autocomplete: G.value,
                  onKeyup: ai,
                  onKeydown: si,
                  onFocus: wt,
                  onBlur: kt,
                  onClick: gt,
                  onChange: Je
                }, null, 40, Bu)), [
                  [Bt, V(I)]
                ]) : Ne.value === V(me).HtmlInput ? (H(), Y(Sr, {
                  key: 20,
                  ref_key: "inputElement",
                  ref: x,
                  modelValue: V(I),
                  "onUpdate:modelValue": q[26] || (q[26] = (oe) => $e(I) ? I.value = oe : null),
                  id: V(u),
                  tabindex: k.tabindex,
                  name: k.name,
                  lang: P.value,
                  editable: ae.value,
                  focusing: m.value,
                  disabled: F.value,
                  readonly: k.readonly,
                  onFocus: wt,
                  onBlur: kt
                }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : se("", !0)
              ];
            }),
            _: 3
          }, 16)) : se("", !0),
          ae.value ? se("", !0) : (H(), Y(eu, {
            key: 3,
            value: go.value,
            type: k.type,
            "is-loading": o.value,
            label: ne.value,
            title: le.value,
            "file-name": N.value,
            "value-slot": k.valueSlot,
            "empty-value-slot": k.emptyValueSlot,
            "slot-data": k.slotData,
            download: V(T),
            anchor: (vt = k.optionsConfig) == null ? void 0 : vt.anchor,
            multiple: k.multiple,
            multipleDisplay: k.multipleDisplay,
            modal: Fe.value,
            "modal-key": V(d),
            "modal-data": Ae.value,
            "options-config": k.optionsConfig,
            "option-slot": k.optionSlot,
            "options-download": (Ht = k.optionsConfig) == null ? void 0 : Ht.download,
            "options-modal": (Ft = k.optionsConfig) == null ? void 0 : Ft.modal,
            "options-modal-data": (Ut = k.optionsConfig) == null ? void 0 : Ut.modalData,
            "options-icon": (Pt = k.optionsConfig) == null ? void 0 : Pt.icon,
            "options-text": (Wt = k.optionsConfig) == null ? void 0 : Wt.text,
            "options-class": ($t = k.optionsConfig) == null ? void 0 : $t.class,
            "options-label-formatter": (Zt = k.optionsConfig) == null ? void 0 : Zt.labelFormatter,
            "read-mode-config": k.readModeConfig,
            prop: k.prop,
            onClick: gt
          }, Lt({ _: 2 }, [
            V(i).value ? {
              name: "value",
              fn: ye(() => [
                Qe(k.$slots, c.value, {
                  value: c.value,
                  title: le.value,
                  data: k.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "is-loading", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "anchor", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "options-config", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-text", "options-class", "options-label-formatter", "read-mode-config", "prop"])),
          Z.value ? (H(), ce("div", zu, [
            Pe.value ? (H(), Y(ve, {
              key: 0,
              title: k.errorMessage,
              class: "lkt-field--danger-btn",
              icon: "lkt-icn-attention",
              onClick: lo
            }, null, 8, ["title"])) : se("", !0),
            Ve(re(mn, { onClick: Pi }, null, 512), [
              [nt, Me.value]
            ]),
            Ve(re(gn, { onClick: fl }, null, 512), [
              [nt, pt.value]
            ]),
            k.type === V(j).Number ? Ve((H(), Y(ve, fe({ key: 1 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              disabled: V(I) === ue.value
            }, { onClick: hl }), null, 16)), [
              [nt, we.value]
            ]) : se("", !0),
            k.type === V(j).Number ? Ve((H(), Y(ve, fe({ key: 2 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-more",
              disabled: V(I) === de.value
            }, { onClick: no }), null, 16)), [
              [nt, Mt.value]
            ]) : se("", !0),
            Qn.value ? (H(), Y(ve, fe({
              key: 3,
              class: "lkt-field--report-btn",
              icon: "lkt-icn-attention",
              onClick: pl
            }, {
              type: V(je).Tooltip,
              tooltip: {
                showOnReferrerHover: !0,
                showOnReferrerHoverDelay: 500,
                hideOnReferrerLeave: !0
              }
            }), {
              tooltip: ye(() => {
                var Le;
                return [
                  re(cn, {
                    items: _.value,
                    stack: (Le = k.validation) == null ? void 0 : Le.stack
                  }, null, 8, ["items", "stack"])
                ];
              }),
              _: 1
            }, 16)) : se("", !0),
            Ge.value ? (H(), Y(ve, fe({
              key: 4,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-info",
              onClick: pl
            }, {
              type: V(je).Tooltip,
              tooltip: {
                showOnReferrerHover: !0,
                showOnReferrerHoverDelay: 500,
                hideOnReferrerLeave: !0
              }
            }), {
              tooltip: ye(() => [
                be("div", {
                  class: "lkt-field--info-msg",
                  innerHTML: k.infoMessage
                }, null, 8, Nu)
              ]),
              _: 1
            }, 16)) : se("", !0),
            ae.value && rl.value ? (H(), Y(mu, {
              key: 5,
              config: k.fileUploadButton,
              "file-upload-http": k.fileUploadHttp
            }, null, 8, ["config", "file-upload-http"])) : se("", !0),
            k.type === V(j).Password ? Ve((H(), Y(Ki, {
              key: 6,
              modelValue: b.value,
              "onUpdate:modelValue": q[27] || (q[27] = (Le) => b.value = Le)
            }, null, 8, ["modelValue"])), [
              [nt, ht.value]
            ]) : se("", !0),
            Ke.value && E.value ? (H(), Y(Sl, {
              key: 7,
              translations: We.value,
              type: k.type,
              referrer: E.value
            }, null, 8, ["translations", "type", "referrer"])) : se("", !0),
            ae.value && sl.value ? (H(), Y(vn, {
              key: 8,
              modelValue: ae.value,
              "onUpdate:modelValue": q[28] || (q[28] = (Le) => ae.value = Le),
              onClick: oo
            }, null, 8, ["modelValue"])) : se("", !0),
            k.customButtonText || k.customButtonClass ? (H(), Y(ve, {
              key: 9,
              text: k.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: k.customButtonClass
            }, null, 8, ["text", "icon"])) : se("", !0),
            typeof k.createButton == "object" && k.createButton && ae.value ? (H(), Y(ve, fe({ key: 10 }, {
              icon: "lkt-icn-add",
              ...k.createButton,
              modalData: {
                ...k.createButton.modalData,
                events: {
                  onCreate: () => {
                    var Le, St, Yt, Xt, Jt, Qt, ei, ti;
                    k.createButton && typeof ((Yt = (St = (Le = k.createButton) == null ? void 0 : Le.modalData) == null ? void 0 : St.events) == null ? void 0 : Yt.onCreate) == "function" && ((Qt = (Jt = (Xt = k.createButton) == null ? void 0 : Xt.modalData) == null ? void 0 : Jt.events) == null || Qt.onCreate()), typeof ((ei = k.events) == null ? void 0 : ei.itemCreated) == "function" && ((ti = k.events) == null || ti.itemCreated());
                  }
                }
              }
            }, { class: "lkt-field--info-btn" }), null, 16)) : se("", !0),
            ae.value && typeof ((qt = k.optionsConfig) == null ? void 0 : qt.canRenderDropdown) > "u" || ((jt = k.optionsConfig) == null ? void 0 : jt.canRenderDropdown) === !0 ? Ve((H(), Y(Go, {
              key: 11,
              onClick: io
            }, null, 512)), [
              [nt, _t.value]
            ]) : se("", !0),
            k.infoButtonEllipsis ? (H(), Y(Zo, {
              key: 12,
              "show-undo": Xe.value,
              "show-clear": Ue.value,
              "show-password": De.value,
              "show-edition": k.allowReadModeSwitch,
              "show-password-check": b.value,
              "onUpdate:showPasswordCheck": q[29] || (q[29] = (Le) => b.value = Le),
              "show-edition-check": ae.value,
              "onUpdate:showEditionCheck": q[30] || (q[30] = (Le) => ae.value = Le),
              onUndo: Pi,
              onClear: fl
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : se("", !0)
          ])) : se("", !0)
        ]),
        ae.value && Jn.value ? (H(), Y(cn, {
          key: 2,
          items: cl.value,
          stack: (Gt = k.validation) == null ? void 0 : Gt.stack
        }, null, 8, ["items", "stack"])) : se("", !0),
        R.value && (k.type === V(j).Select || k.type === V(j).Radio || k.type === V(j).ToggleButtonGroup) ? (H(), Y(dn, fe({
          key: 3,
          ref_key: "inputElement",
          ref: x
        }, {
          modelValue: V(I),
          pickedOptions: W.value,
          showOptions: B.value,
          searchable: k.searchable,
          searchMode: $.value,
          multiple: k.multiple,
          canTag: k.canTag,
          options: k.options,
          optionsConfig: k.optionsConfig,
          optionSlot: k.optionSlot,
          editable: ae.value,
          focusing: m.value,
          searchPlaceholder: xe.value,
          multipleDisplayEdition: k.multipleDisplayEdition,
          prop: k.prop,
          max: de.value,
          tooltip: k.tooltipConfig,
          events: k.events,
          optionValueType: k.optionValueType,
          referrer: E.value,
          autoLoading: !0,
          localAutoLoad: !((Kt = k.optionsConfig) != null && Kt.autoloadResource)
        }, {
          onFocus: Vt,
          onBlur: Ot,
          onChange: Je,
          onLoaded: q[31] || (q[31] = (Le) => f.value = !0),
          onAutoloadStart: q[32] || (q[32] = (Le) => o.value = !0),
          onAutoloadEnd: q[33] || (q[33] = (Le) => o.value = !1)
        }), null, 16)) : se("", !0)
      ], 10, Cu)), [
        [nt, bo.value]
      ]) : se("", !0);
    };
  }
}), Ru = { class: "lkt-file-entity-main" }, Au = /* @__PURE__ */ Ce({
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
    }, o = J(() => i.value.isPicked ? "lkt-icn-checkbox" : "lkt-icn-checkbox-empty");
    return (g, d) => {
      const v = he("lkt-icon"), T = he("lkt-image");
      return H(), ce("div", {
        class: "lkt-file-entity-box",
        onClick: f
      }, [
        be("div", Ru, [
          i.value.type !== V(qe).Directory ? (H(), ce("i", {
            key: 0,
            class: Ye(["lkt-file-entity-picked-indicator", o.value])
          }, null, 2)) : se("", !0),
          i.value.type === V(qe).Directory ? (H(), Y(v, Ie(fe({ key: 1 }, {
            icon: "lkt-icn-folder",
            text: i.value.name
          })), null, 16)) : i.value.type === V(qe).Image ? (H(), Y(T, Ie(fe({ key: 2 }, {
            src: i.value.src,
            text: i.value.name
          })), null, 16)) : se("", !0)
        ])
      ]);
    };
  }
}), Iu = { class: "lkt-file-entity-details" }, Du = {
  key: 0,
  class: "lkt-grid-1"
}, Mu = /* @__PURE__ */ Ce({
  __name: "FileEntityDetails",
  props: {
    editMode: { type: Boolean, default: !1 },
    modelValue: {},
    fileBrowserConfig: {}
  },
  setup(e) {
    const n = K(e.modelValue);
    return (l, i) => {
      const s = he("lkt-field");
      return H(), ce("div", Iu, [
        n.value.type === V(qe).Image ? (H(), ce("div", Du, [
          re(s, fe({
            modelValue: n.value.src,
            "onUpdate:modelValue": i[0] || (i[0] = (u) => n.value.src = u)
          }, {
            type: V(j).Image,
            label: "File",
            readMode: !l.editMode
          }), null, 16, ["modelValue"]),
          re(s, fe({
            modelValue: n.value.name,
            "onUpdate:modelValue": i[1] || (i[1] = (u) => n.value.name = u)
          }, {
            type: V(j).Text,
            label: "Name",
            readMode: !l.editMode
          }), null, 16, ["modelValue"])
        ])) : se("", !0)
      ]);
    };
  }
}), Vu = { class: "lkt-flex-row" }, Ou = { class: "lkt-flex-col-3" }, Hu = { class: "lkt-flex-column" }, Fu = { class: "lkt-flex-col-9" }, Uu = /* @__PURE__ */ Ce({
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
    const n = e, l = K(!1), i = K([]), s = K({}), u = K(void 0), f = K(n.modelValue), o = (c) => {
      u.value = void 0, Ee(() => {
        u.value = c;
      });
    }, g = () => {
      var p, h, b;
      let c = new wl();
      c.parent = (p = u.value) == null ? void 0 : p.id, (b = (h = u.value) == null ? void 0 : h.children) == null || b.push(c), o(c);
    }, d = (c, p) => {
      for (let h in p) {
        if (p[h].id === c) return p[h];
        if (p[h].children.length > 0) {
          let b = d(c, p[h].children);
          if (b) return b;
        }
      }
    }, v = () => {
      var c, p;
      if ((c = u.value) != null && c.parent) {
        let h = d((p = u.value) == null ? void 0 : p.parent, i.value);
        h && o(h);
      }
    }, T = () => {
      let c = [];
      f.value.forEach((p) => {
        let h = d(p, i.value);
        h && c.push(h);
      }), typeof n.onConfirmSelection == "function" && n.onConfirmSelection(c), Wo(n.modalName, n.modalKey);
    }, S = J(() => {
      var c;
      switch ((c = u.value) == null ? void 0 : c.type) {
        case qe.Image:
          return "lkt-icn-picture";
        case qe.Directory:
          return "lkt-icn-folder-open";
        default:
          return "";
      }
    }), x = (c) => {
      switch (c.type) {
        case qe.Image:
          return "lkt-icn-picture";
        case qe.Directory:
          return "lkt-icn-folder";
        default:
          return "";
      }
    }, z = (c) => {
      let p = x(c), h = {};
      return p !== "" && (h = {
        icon: p,
        position: Uo.Start
      }), {
        key: String(c.id),
        type: Po.Anchor,
        anchor: {
          icon: h,
          text: c.name,
          type: hn.Action,
          events: {
            click: () => {
              o(c);
            }
          }
        },
        keepOpenOnChildClick: !0,
        // class?: string;
        // icon?: string;
        children: c.children ? c.children.map(z) : []
      };
    }, a = (c) => {
      c.forEach((p) => {
        var h;
        p.isPicked && f.value.push(p.id), ((h = p.children) == null ? void 0 : h.length) > 0 && a(p.children);
      });
    }, r = () => {
      var c, p;
      (p = (c = n.fileBrowserConfig) == null ? void 0 : c.http) != null && p.resource && (l.value = !0, Qi(n.fileBrowserConfig.http.resource, n.fileBrowserConfig.http.data).then((h) => {
        l.value = !1, i.value = h.data.map((b) => new wl(b)), i.value.length > 0 && o(i.value[0]), i.value.forEach((b, m) => {
          var w;
          let y = `unit-${m}`;
          s.value[y] = ((w = b.children) == null ? void 0 : w.map(z)) ?? [];
        });
      }).catch((h) => {
        l.value = !1;
      }));
    };
    return ie(u, (c) => {
    }, { deep: !0 }), ie(i, (c) => {
      f.value = [], a(i.value);
    }, { deep: !0 }), ft(() => {
      r();
    }), (c, p) => {
      const h = he("lkt-menu"), b = he("lkt-accordion"), m = he("lkt-button"), y = he("lkt-table"), w = he("lkt-item-crud"), _ = he("lkt-modal");
      return H(), Y(_, {
        "modal-name": c.modalName,
        "modal-key": c.modalKey,
        "z-index": c.zIndex,
        title: "File Browser",
        class: "lkt-file-browser"
      }, {
        default: ye(() => [
          be("div", Vu, [
            be("div", Ou, [
              (H(!0), ce(Oe, null, dt(i.value, (C, N) => (H(), Y(b, fe({ ref_for: !0 }, {
                modelValue: N === 0,
                title: C.name,
                toggleMode: V(Ho).Display,
                type: i.value.length === 1 ? V(Zi).Always : V(Zi).Auto
              }), {
                default: ye(() => [
                  be("div", Hu, [
                    re(h, fe({ ref_for: !0 }, {
                      modelValue: s.value[`unit-${N}`]
                    }), null, 16)
                  ])
                ]),
                _: 2
              }, 1040))), 256))
            ]),
            be("div", Fu, [
              u.value ? (H(), Y(b, Ie(fe({ key: 0 }, {
                type: V(Zi).Always,
                icon: S.value,
                title: u.value.name
              })), {
                default: ye(() => {
                  var C, N;
                  return [
                    [V(qe).Directory, V(qe).StorageUnit].includes(u.value.type) ? (H(), Y(y, fe({
                      key: 0,
                      modelValue: u.value.children,
                      "onUpdate:modelValue": p[0] || (p[0] = (E) => u.value.children = E)
                    }, {
                      type: V(zt).Item,
                      perms: [
                        V(ri).SwitchEditMode,
                        V(ri).Update,
                        V(ri).Edit,
                        V(ri).Create
                      ],
                      itemsContainerClass: "lkt-flex-rows-12 lkt-flex-rows-2--from-768",
                      saveButton: {
                        text: "Save",
                        type: V(je).Button
                      },
                      createButton: {
                        text: "Create",
                        type: V(je).Button
                      }
                    }, { onClickCreate: g }), Lt({
                      item: ye(({ item: E, index: B }) => [
                        re(Au, {
                          modelValue: u.value.children[B],
                          "onUpdate:modelValue": (R) => u.value.children[B] = R,
                          onDoubleClick: o
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, [
                      u.value.type !== V(qe).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: ye(() => [
                          re(m, Ie(ut({
                            icon: "lkt-icn-arrow-left",
                            events: {
                              click: v
                            }
                          })), null, 16),
                          re(m, Ie(ut({
                            icon: "lkt-icn-check",
                            disabled: f.value.length === 0,
                            events: {
                              click: T
                            }
                          })), null, 16)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : (H(), Y(w, fe({
                      key: 1,
                      modelValue: u.value,
                      "onUpdate:modelValue": p[2] || (p[2] = (E) => u.value = E)
                    }, {
                      view: V(Fo).Inline,
                      mode: u.value.id ? V(Cl).Update : V(Cl).Create,
                      editing: !1,
                      perms: ["switch-edit-mode", "update"],
                      createButton: {
                        ...(C = c.fileBrowserConfig) == null ? void 0 : C.entityCreateButton,
                        resourceData: u.value,
                        events: {
                          click: () => {
                            for (let E in u.value)
                              c.modelValue[E] = c.entity[E];
                          }
                        }
                      },
                      updateButton: {
                        ...(N = c.fileBrowserConfig) == null ? void 0 : N.entityUpdateButton,
                        resourceData: u.value,
                        events: {
                          click: () => {
                            for (let E in u.value)
                              c.modelValue[E] = c.entity[E];
                          }
                        }
                      }
                    }), Lt({
                      item: ye(({ item: E, editMode: B }) => [
                        re(Mu, {
                          modelValue: u.value,
                          "onUpdate:modelValue": p[1] || (p[1] = (R) => u.value = R),
                          "file-browser-config": c.fileBrowserConfig,
                          "edit-mode": B
                        }, null, 8, ["modelValue", "file-browser-config", "edit-mode"])
                      ]),
                      _: 2
                    }, [
                      u.value.type !== V(qe).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: ye(() => [
                          re(m, Ie(ut({
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
              }, 16)) : se("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modal-name", "modal-key", "z-index"]);
    };
  }
}), Xu = (e, t) => (ee.customValueSlots[e] = t, !0), Ju = (e, t) => (ee.customEditSlots[e] = t, !0), Qu = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", At), $o("lkt-file-browser", Uu));
  }
}, ed = (e) => {
  ee.defaultEmptyValueSlot = e;
}, td = (e, t) => {
  ee.optionSlots[e] = t;
}, id = (e) => ee.undoText = e, ld = (e) => ee.clearText = e, nd = (e) => ee.i18nText = e, od = (e) => ee.switchEditionOnText = e, ad = (e) => ee.switchEditionOffText = e, sd = (e) => ee.showPasswordOnText = e, rd = (e) => ee.showPasswordOffText = e, ud = (e) => ee.dateReadFormat = e, dd = (e) => ee.defaultDateReadFormat = e, cd = (e, t, n = "default") => {
  n || (n = "default"), ee.validationMessages[n] || (ee.validationMessages[n] = {}), ee.validationMessages[n][e] = t;
}, fd = (e) => (ee.validationIconSlot = e, !0), pd = (e) => (ee.validationIconOk = e, !0), hd = (e) => (ee.validationIconKo = e, !0), md = (e) => (ee.validationIconInfo = e, !0), gd = (e = 2, t = ".", n = ".", l = !0, i = "") => i !== "" ? (ee.langNumberFormat[i].amountOfDecimals = e, ee.langNumberFormat[i].decimalSeparator = t, ee.langNumberFormat[i].thousandsSeparator = n, ee.langNumberFormat[i].removeDecimalsIfZero = l, !0) : (ee.amountOfDecimals = e, ee.decimalSeparator = t, ee.thousandsSeparator = n, ee.removeDecimalsIfZero = l, !0), vd = (e) => {
  ee.readTextMaxLength = e;
}, bd = (e, t) => {
  ee.modalPerItemType[e] = t;
};
export {
  Cd as Field,
  At as LktField,
  wd as Option,
  Qu as default,
  ld as setFieldClearText,
  ud as setFieldDateReadFormat,
  dd as setFieldDefaultDateReadFormat,
  ed as setFieldEmptySlot,
  nd as setFieldI18nText,
  gd as setFieldNumberFormat,
  td as setFieldOptionSlot,
  rd as setFieldShowPasswordOffText,
  sd as setFieldShowPasswordOnText,
  ad as setFieldSwitchEditionOffText,
  od as setFieldSwitchEditionOnText,
  id as setFieldUndoText,
  md as setFieldValidationIconInfo,
  hd as setFieldValidationIconKo,
  pd as setFieldValidationIconOk,
  fd as setFieldValidationIconSlot,
  cd as setFieldValidationMessage,
  bd as setModalPerItemType,
  vd as setReadTextMaxLength,
  Ju as setTextEditSlot,
  Xu as setTextValueSlot
};
