import { defineComponent as we, computed as J, resolveComponent as pe, createBlock as te, openBlock as F, mergeProps as he, normalizeClass as Ye, ref as Y, watch as ne, withCtx as _e, createCommentVNode as le, unref as H, createElementVNode as ve, createVNode as ae, createElementBlock as oe, Fragment as Ue, renderList as ct, toDisplayString as ut, normalizeStyle as ll, withDirectives as Ve, vModelCheckbox as Xn, onMounted as zt, resolveDynamicComponent as vt, withModifiers as Jn, nextTick as Ke, vModelText as Et, normalizeProps as Oe, markRaw as Mi, vShow as Qe, createTextVNode as Si, useSlots as Pi, renderSlot as Xe, guardReactiveProps as mt, createStaticVNode as Qn, createSlots as Tt, mergeDefaults as eo, isRef as Ge, vModelDynamic as nl } from "vue";
import { stripTags as Di, fill as to, lpad as kt, generateRandomString as io, formatNumber as ol, trim as lo, isEmail as no } from "lkt-string-tools";
import { httpCall as Wi } from "lkt-http-client";
import { getCurrentLanguage as oo, getAvailableLanguages as so, __ as jl, currentLanguage as ao } from "lkt-i18n";
import { TooltipLocationY as Wt, TooltipLocationX as $t, ButtonType as et, FieldType as j, LktColor as Gl, FieldValidation as Re, ValidationStatus as Te, extractPropValue as We, AnchorType as Kl, TagType as ro, LktSettings as rt, Option as Vi, MultipleOptionsDisplay as xt, TableType as Ti, booleanFieldTypes as at, fieldsWithMultipleMode as uo, FieldValidationType as co, extractI18nValue as Ft, fieldTypesWithoutUndo as fo, fieldTypesWithoutClear as ho, textFieldTypes as po, FieldAutoValidationTrigger as mo, getDefaultValues as go, Field as vo, ToastPositionX as sl, FileEntityType as qe, AccordionType as Ai, AccordionToggleMode as bo, TablePermission as Kt, ItemCrudMode as al, ItemCrudView as yo, FileEntity as rl, IconPosition as _o, MenuEntryType as Co } from "lkt-vue-kernel";
import { Field as Xu, Option as Ju } from "lkt-vue-kernel";
import { date as Pt } from "lkt-date-tools";
import { DataState as Ut } from "lkt-data-state";
import { openToast as ul } from "lkt-toast";
import { closeModal as wo, addModal as ko } from "lkt-modal";
const ye = class ye {
};
ye.defaultEmptyValueSlot = "", ye.customValueSlots = {}, ye.customEditSlots = {}, ye.searchKeyForResource = "query", ye.optionSlots = {}, ye.defaultDateIcon = "lkt-icn-calendar-empty-outline", ye.defaultNumberFeaturedButton = "subtract", ye.undoText = "", ye.clearText = "", ye.i18nText = "", ye.switchEditionOnText = "", ye.switchEditionOffText = "", ye.showPasswordOnText = "", ye.showPasswordOffText = "", ye.dateReadFormat = "", ye.dateTimeReadFormat = "", ye.defaultDateReadFormat = "Y-m-d", ye.defaultDateTimeReadFormat = "Y-m-d H:i", ye.langDateReadFormat = {
  en: "Y-m-d",
  es: "d/m/Y"
}, ye.langDateTimeReadFormat = {
  en: "Y-m-d H:i",
  es: "d/m/Y H:i"
}, ye.acceptTypes = {
  file: "*/*",
  image: "image/*"
}, ye.validationIconOk = "", ye.validationIconKo = "", ye.validationIconInfo = "", ye.validationIconSlot = "", ye.validationMessages = {
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
}, ye.amountOfDecimals = void 0, ye.decimalSeparator = ".", ye.thousandsSeparator = "", ye.removeDecimalsIfZero = !0, ye.langNumberFormat = {
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
}, ye.readTextMaxLength = void 0, ye.modalPerItemType = {};
let ee = ye;
const Yl = /* @__PURE__ */ we({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, n = e, l = J(() => ee.undoText), a = J(() => n.insideEllipsis ? "lkt-field--btn-undo lkt-field--info-split-btn" : "lkt-field--btn-undo lkt-field--info-btn"), u = () => i("click");
    return (f, o) => {
      const g = pe("lkt-button");
      return F(), te(g, he({
        text: f.insideEllipsis ? l.value : "",
        icon: "lkt-icn-undo",
        class: a.value
      }, {
        title: l.value,
        onClick: u
      }), null, 16, ["title"]);
    };
  }
}), Xl = /* @__PURE__ */ we({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, n = e, l = J(() => ee.clearText), a = J(() => n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), u = () => i("click");
    return (f, o) => {
      const g = pe("lkt-button");
      return F(), te(g, {
        text: f.insideEllipsis ? l.value : "",
        title: l.value,
        class: Ye(a.value),
        icon: "lkt-icn-cancel",
        onClick: u
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Oi = /* @__PURE__ */ we({
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
    ne(() => n.modelValue, (g) => l.value = g), ne(l, (g) => i("update:modelValue", g));
    const a = J(() => l.value ? ee.showPasswordOnText : ee.showPasswordOffText), u = J(() => l.value === !0 ? "lkt-icn-see" : "lkt-icn-not-see"), f = J(() => n.isFeatured ? "lkt-field--atn-btn" : n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (g, c) => {
      const b = pe("lkt-button");
      return F(), te(b, {
        text: g.insideEllipsis ? a.value : "",
        title: a.value,
        class: Ye(f.value),
        icon: u.value,
        onClick: o,
        checked: l.value,
        "onUpdate:checked": c[0] || (c[0] = (x) => l.value = x),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Jl = /* @__PURE__ */ we({
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
    ne(() => n.modelValue, (g) => l.value = g), ne(l, (g) => i("update:modelValue", g));
    const a = J(() => l.value ? ee.switchEditionOnText : ee.switchEditionOffText), u = J(() => l.value === !0 ? "lkt-icon-see" : "lkt-icn-edit"), f = J(() => n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (g, c) => {
      const b = pe("lkt-button");
      return F(), te(b, {
        text: g.insideEllipsis ? a.value : "",
        title: a.value,
        class: Ye(f.value),
        icon: u.value,
        onClick: o,
        checked: l.value,
        "onUpdate:checked": c[0] || (c[0] = (x) => l.value = x),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), xo = /* @__PURE__ */ we({
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
    ne(() => n.showPasswordCheck, (u) => l.value = u), ne(l, (u) => i("update:showPasswordCheck", u));
    const a = Y(n.showEditionCheck);
    return ne(() => n.showEditionCheck, (u) => a.value = u), ne(a, (u) => i("update:showEditionCheck", u)), (u, f) => {
      const o = pe("lkt-button");
      return F(), te(o, {
        split: "",
        "split-icon": "lkt-icn-ellipsis-menu-vertical",
        class: "lkt-field--info-btn"
      }, {
        split: _e(({ doClose: g }) => [
          u.showUndo ? (F(), te(Yl, {
            key: 0,
            onClick: f[0] || (f[0] = () => i("undo")),
            "inside-ellipsis": ""
          })) : le("", !0),
          u.showClear ? (F(), te(Xl, {
            key: 1,
            onClick: f[1] || (f[1] = () => i("clear")),
            "inside-ellipsis": ""
          })) : le("", !0),
          u.showPassword ? (F(), te(Oi, {
            key: 2,
            modelValue: l.value,
            "onUpdate:modelValue": f[2] || (f[2] = (c) => l.value = c),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : le("", !0),
          u.showEdition ? (F(), te(Jl, {
            key: 3,
            modelValue: a.value,
            "onUpdate:modelValue": f[3] || (f[3] = (c) => a.value = c),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : le("", !0)
        ]),
        _: 1
      });
    };
  }
}), So = { class: "lkt-grid-1" }, cl = /* @__PURE__ */ we({
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
    const i = e, n = oo(), l = so(), a = J(() => ee.i18nText), u = J(() => i.isFeatured ? "lkt-field--atn-btn" : i.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (f, o) => {
      const g = pe("lkt-button");
      return H(l).length > 1 ? (F(), te(g, he({ key: 0 }, {
        type: H(et).Tooltip,
        text: f.insideEllipsis ? a.value : "",
        class: u.value,
        icon: "lkt-icn-lang-picker",
        tooltip: {
          class: "lkt-field-i18n-tooltip",
          referrerWidth: !0,
          referrer: f.referrer,
          referrerMargin: 0,
          locationX: H($t).LeftCorner,
          locationY: H(Wt).Bottom
        }
      }, { title: a.value }), {
        tooltip: _e(() => [
          ve("div", So, [
            ae(Bt, he({
              modelValue: f.translations[H(n)],
              "onUpdate:modelValue": o[0] || (o[0] = (c) => f.translations[H(n)] = c)
            }, {
              type: f.type,
              label: `Current lang ${H(n)}`,
              canClear: !0,
              canUndo: !0
            }), null, 16, ["modelValue"]),
            (F(!0), oe(Ue, null, ct(H(l), (c) => (F(), oe(Ue, { key: c }, [
              c !== H(n) ? (F(), te(Bt, he({
                key: 0,
                modelValue: f.translations[c],
                "onUpdate:modelValue": (b) => f.translations[c] = b
              }, { ref_for: !0 }, {
                type: f.type,
                label: `Language ${c}`,
                canClear: !0,
                canUndo: !0
              }), null, 16, ["modelValue", "onUpdate:modelValue"])) : le("", !0)
            ], 64))), 128))
          ])
        ]),
        _: 1
      }, 16, ["title"])) : le("", !0);
    };
  }
}), To = (e, t, i) => (e = Number(e), t !== !1 && e < t && (e = t), i !== !1 && e > i && (e = i), e), $i = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), Ql = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), $i(e) ? Pt(t, e) : ""), Eo = /* @__PURE__ */ we({
  __name: "DropdownButton",
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, n = J(() => ee.undoText), l = J(() => "lkt-field--info-btn"), a = () => i("click");
    return (u, f) => {
      const o = pe("lkt-button");
      return F(), te(o, {
        text: n.value,
        title: n.value,
        class: Ye([l.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-icn-angle-bottom",
        onClick: a,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Lo = { class: "lkt-field-color--tooltip--rgba-container" }, Bo = { class: "lkt-field-color--tooltip--numeric-input-container" }, zo = { class: "like-lkt-field-label" }, Yt = /* @__PURE__ */ we({
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
    return ne(() => n.modelValue, (a) => l.value = a), ne(l, (a) => i("update:modelValue", a)), (a, u) => (F(), oe("div", Lo, [
      ve("div", Bo, [
        ve("label", zo, ut(a.label), 1),
        ae(Bt, he({
          modelValue: l.value,
          "onUpdate:modelValue": u[0] || (u[0] = (f) => l.value = f)
        }, {
          type: H(j).Number,
          min: 0,
          max: 255,
          step: 1,
          canStep: !1
        }), null, 16, ["modelValue"])
      ]),
      ae(Bt, he({
        class: ["color-range", a.rangeClass],
        modelValue: l.value,
        "onUpdate:modelValue": u[1] || (u[1] = (f) => l.value = f)
      }, {
        type: H(j).Range,
        min: 0,
        max: 255,
        step: 1
      }), null, 16, ["class", "modelValue"])
    ]));
  }
}), No = (e, t, i, n) => new Gl({ r: e, g: t, b: i, a: n }).toString(), dl = (e) => Gl.fromHexColor(e), Ro = (e) => e.getContrastFontColor(), Ao = { class: "lkt-grid-1" }, Io = { class: "lkt-field-color--tooltip--rgba-container" }, Mo = { class: "lkt-field-color--tooltip--hex-input-container" }, en = /* @__PURE__ */ we({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, { emit: t }) {
    const i = t, n = e, l = (z) => {
      if ([0, 1].includes(z.length))
        f.value = 0, o.value = 0, g.value = 0, c.value = 255;
      else if ([7, 9].includes(z.length)) {
        let s = dl(z);
        f.value = s.r, o.value = s.g, g.value = s.b, c.value = s.a;
      }
    }, a = () => {
      b.value = No(
        f.value,
        o.value,
        g.value,
        c.value
      );
    }, u = () => {
      l(b.value), i("change");
    }, f = Y(255), o = Y(255), g = Y(255), c = Y(255), b = Y(n.modelValue);
    l(b.value), ne([f, o, g, c], a), ne(() => n.modelValue, (z) => b.value = z), ne(b, (z) => i("update:modelValue", z));
    const x = J(() => Ro(dl(b.value))), w = J(() => b.value === "" || b.value === "#" ? {} : {
      background: b.value,
      "--lkt-btn-bg": b.value,
      color: x.value,
      "--lkt-btn-color": x.value
    }), k = J(() => b.value === "" || b.value === "#" ? {} : {
      "--lkt-field-bg-input": b.value,
      "--lkt-field-color": x.value
    });
    return (z, s) => {
      const r = pe("lkt-button");
      return F(), te(r, {
        class: "lkt-field--toggle-button",
        style: ll(w.value),
        text: b.value,
        type: H(et).Tooltip,
        tooltip: {
          class: "lkt-field-color--tooltip",
          locationY: H(Wt).Bottom,
          locationX: H($t).LeftCorner
        }
      }, {
        tooltip: _e(({ doClose: d }) => [
          ve("div", Ao, [
            ve("div", Io, [
              ve("div", Mo, [
                s[5] || (s[5] = ve("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                ae(Bt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": s[0] || (s[0] = (h) => b.value = h),
                  style: ll(k.value),
                  onChange: u
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            ae(Yt, {
              modelValue: f.value,
              "onUpdate:modelValue": s[1] || (s[1] = (h) => f.value = h),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            ae(Yt, {
              modelValue: o.value,
              "onUpdate:modelValue": s[2] || (s[2] = (h) => o.value = h),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            ae(Yt, {
              modelValue: g.value,
              "onUpdate:modelValue": s[3] || (s[3] = (h) => g.value = h),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            ae(Yt, {
              modelValue: c.value,
              "onUpdate:modelValue": s[4] || (s[4] = (h) => c.value = h),
              label: "A",
              "range-class": "color-range--alpha"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["style", "text", "type", "tooltip"]);
    };
  }
}), Do = /* @__PURE__ */ we({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, i = Y(t.modelValue), n = J(() => typeof t.max == "boolean" || i.value.length < t.max ? ["inline-create"] : []);
    return (l, a) => {
      const u = pe("lkt-table");
      return F(), te(u, {
        type: "item",
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (f) => i.value = f),
        perms: n.value,
        "edit-mode": l.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: _e(({ item: f, index: o, isLoading: g, canCreate: c, canRead: b, canUpdate: x, canDrop: w, doDrop: k }) => [
          ae(en, {
            modelValue: i.value[o],
            "onUpdate:modelValue": (z) => i.value[o] = z
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
}), Vo = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\D+/g, "").length < l && e.push(Re.createMinNumbers(l, Te.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/\D+/g, "").length > l && e.push(Re.createMaxNumbers(l, Te.Ko));
  }
}, Oo = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[^A-Z]+/g, "").length < l && e.push(Re.createMinUpperChars(l, Te.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/[^A-Z]+/g, "").length > l && e.push(Re.createMaxUpperChars(l, Te.Ko));
  }
}, Ho = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[A-Z]+/g, "").length < l && e.push(Re.createMinLowerChars(l, Te.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/[A-Z]+/g, "").length > l && e.push(Re.createMaxLowerChars(l, Te.Ko));
  }
}, Fo = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").length < l && e.push(Re.createMinChars(l, Te.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/\d+/g, "").length > l && e.push(Re.createMaxChars(l, Te.Ko));
  }
}, Uo = (e, t, i, n) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < l && e.push(Re.createMinSpecialChars(l, Te.Ko));
  }
  if (typeof n < "u") {
    let l = parseInt(n);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > l && e.push(Re.createMaxSpecialChars(l, Te.Ko));
  }
}, fl = (e, t = "default") => {
  if (!e) return "";
  let i = ee.validationMessages[t] && ee.validationMessages[t][e] ? ee.validationMessages[t][e] : "";
  return i || (i = ""), i;
}, Po = { class: "boolean-input" }, Wo = { class: "boolean-input-label" }, $o = { class: "boolean-input--check-on" }, Zo = {
  key: 0,
  class: "lkt-icn-ok"
}, qo = ["innerHTML"], jo = ["name", "id", "disabled", "readonly", "value", "checked"], Go = /* @__PURE__ */ we({
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
    const i = t, n = e, l = Y(null), a = Y(n.modelValue), u = Y(a.value ? "true" : "false"), f = Y(n.focusing), o = (c) => {
      f.value = !0, i("focus", c);
    }, g = (c) => {
      f.value = !1, i("blur", c);
    };
    return ne(() => n.modelValue, (c) => a.value = c), ne(a, (c) => i("update:modelValue", c)), (c, b) => (F(), oe("div", Po, [
      ve("div", Wo, [
        ve("div", $o, [
          c.type === H(j).Check && a.value ? (F(), oe("i", Zo)) : le("", !0)
        ])
      ]),
      c.label ? (F(), oe("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: c.label
      }, null, 8, qo)) : le("", !0),
      Ve(ve("input", {
        "onUpdate:modelValue": b[0] || (b[0] = (x) => a.value = x),
        type: "checkbox",
        ref_key: "input",
        ref: l,
        name: c.name,
        id: c.id,
        disabled: !c.editable || c.disabled,
        readonly: !c.editable || c.readonly,
        value: u.value,
        checked: a.value,
        onFocus: o,
        onBlur: g
      }, null, 40, jo), [
        [Xn, a.value]
      ])
    ]));
  }
});
function Ee(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jt = { exports: {} }, Ko = Jt.exports, hl;
function Yo() {
  return hl || (hl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ko, function(t, i) {
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
  }(Jt)), Jt.exports;
}
var Xo = /* @__PURE__ */ Yo();
const tn = /* @__PURE__ */ Ee(Xo);
var Qt = { exports: {} }, Jo = Qt.exports, pl;
function Qo() {
  return pl || (pl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Jo, function(t, i) {
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
  }(Qt)), Qt.exports;
}
var es = /* @__PURE__ */ Qo();
const ln = /* @__PURE__ */ Ee(es);
var ei = { exports: {} }, ts = ei.exports, ml;
function is() {
  return ml || (ml = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ts, function(t, i) {
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
  }(ei)), ei.exports;
}
var ls = /* @__PURE__ */ is();
const nn = /* @__PURE__ */ Ee(ls);
var ti = { exports: {} }, ns = ti.exports, gl;
function os() {
  return gl || (gl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ns, function(t, i) {
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
  }(ti)), ti.exports;
}
var ss = /* @__PURE__ */ os();
const on = /* @__PURE__ */ Ee(ss);
var ii = { exports: {} }, as = ii.exports, vl;
function rs() {
  return vl || (vl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : as, function(t, i) {
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
  }(ii)), ii.exports;
}
var us = /* @__PURE__ */ rs();
const Ei = /* @__PURE__ */ Ee(us);
var li = { exports: {} }, cs = li.exports, bl;
function ds() {
  return bl || (bl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : cs, function(t, i) {
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
  }(li)), li.exports;
}
var fs = /* @__PURE__ */ ds();
const sn = /* @__PURE__ */ Ee(fs);
var ni = { exports: {} }, hs = ni.exports, yl;
function ps() {
  return yl || (yl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : hs, function(t, i) {
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
  }(ni)), ni.exports;
}
var ms = /* @__PURE__ */ ps();
const an = /* @__PURE__ */ Ee(ms);
var oi = { exports: {} }, gs = oi.exports, _l;
function vs() {
  return _l || (_l = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : gs, function(t, i) {
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
  }(oi)), oi.exports;
}
var bs = /* @__PURE__ */ vs();
const rn = /* @__PURE__ */ Ee(bs);
var si = { exports: {} }, ys = si.exports, Cl;
function _s() {
  return Cl || (Cl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ys, function(t, i) {
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
  }(si)), si.exports;
}
var Cs = /* @__PURE__ */ _s();
const un = /* @__PURE__ */ Ee(Cs);
var ai = { exports: {} }, ws = ai.exports, wl;
function ks() {
  return wl || (wl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG una finestra con un documento");
        return i(n);
      };
    })(typeof window < "u" ? window : ws, function(t, i) {
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
  }(ai)), ai.exports;
}
var xs = /* @__PURE__ */ ks();
const cn = /* @__PURE__ */ Ee(xs);
var ri = { exports: {} }, Ss = ri.exports, kl;
function Ts() {
  return kl || (kl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ss, function(t, i) {
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
  }(ri)), ri.exports;
}
var Es = /* @__PURE__ */ Ts();
const dn = /* @__PURE__ */ Ee(Es);
var ui = { exports: {} }, Ls = ui.exports, xl;
function Bs() {
  return xl || (xl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ls, function(t, i) {
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
  }(ui)), ui.exports;
}
var zs = /* @__PURE__ */ Bs();
const fn = /* @__PURE__ */ Ee(zs);
var ci = { exports: {} }, Ns = ci.exports, Sl;
function Rs() {
  return Sl || (Sl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ns, function(t, i) {
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
  }(ci)), ci.exports;
}
var As = /* @__PURE__ */ Rs();
const hn = /* @__PURE__ */ Ee(As);
var di = { exports: {} }, Is = di.exports, Tl;
function Ms() {
  return Tl || (Tl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Is, function(t, i) {
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
  }(di)), di.exports;
}
var Ds = /* @__PURE__ */ Ms();
const pn = /* @__PURE__ */ Ee(Ds);
var fi = { exports: {} }, Vs = fi.exports, El;
function Os() {
  return El || (El = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Vs, function(t, i) {
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
  }(fi)), fi.exports;
}
var Hs = /* @__PURE__ */ Os();
const mn = /* @__PURE__ */ Ee(Hs);
var hi = { exports: {} }, Fs = hi.exports, Ll;
function Us() {
  return Ll || (Ll = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Fs, function(t, i) {
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
  }(hi)), hi.exports;
}
var Ps = /* @__PURE__ */ Us();
const gn = /* @__PURE__ */ Ee(Ps);
var pi = { exports: {} }, Ws = pi.exports, Bl;
function $s() {
  return Bl || (Bl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ws, function(t, i) {
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
  }(pi)), pi.exports;
}
var Zs = /* @__PURE__ */ $s();
const vn = /* @__PURE__ */ Ee(Zs);
var mi = { exports: {} }, qs = mi.exports, zl;
function js() {
  return zl || (zl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : qs, function(t, i) {
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
  }(mi)), mi.exports;
}
var Gs = /* @__PURE__ */ js();
const bn = /* @__PURE__ */ Ee(Gs);
var gi = { exports: {} }, Ks = gi.exports, Nl;
function Ys() {
  return Nl || (Nl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ks, function(t, i) {
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
  }(gi)), gi.exports;
}
var Xs = /* @__PURE__ */ Ys();
const yn = /* @__PURE__ */ Ee(Xs);
var vi = { exports: {} }, Js = vi.exports, Rl;
function Qs() {
  return Rl || (Rl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Js, function(t, i) {
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
  }(vi)), vi.exports;
}
var ea = /* @__PURE__ */ Qs();
const _n = /* @__PURE__ */ Ee(ea);
var bi = { exports: {} }, ta = bi.exports, Al;
function ia() {
  return Al || (Al = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : ta, function(t, i) {
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
  }(bi)), bi.exports;
}
var la = /* @__PURE__ */ ia();
const Cn = /* @__PURE__ */ Ee(la);
var yi = { exports: {} }, na = yi.exports, Il;
function oa() {
  return Il || (Il = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : na, function(t, i) {
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
  }(yi)), yi.exports;
}
var sa = /* @__PURE__ */ oa();
const wn = /* @__PURE__ */ Ee(sa), aa = { ckb: tn, cs: ln, da: nn, de: on, en: Ei, es: sn, fr: an, he: rn, hu: un, it: cn, ja: dn, ko: fn, lv: hn, nl: pn, pl: mn, pt_br: gn, ro: vn, ru: bn, se: yn, ua: _n, ur: Cn, zh_cn: wn }, Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: tn,
  cs: ln,
  da: nn,
  de: on,
  default: aa,
  en: Ei,
  es: sn,
  fr: an,
  he: rn,
  hu: un,
  it: cn,
  ja: dn,
  ko: fn,
  lv: hn,
  nl: pn,
  pl: mn,
  pt_br: gn,
  ro: vn,
  ru: bn,
  se: yn,
  ua: _n,
  ur: Cn,
  zh_cn: wn
}, Symbol.toStringTag, { value: "Module" })), ra = {
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
}, ua = {
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
    for (let u = 0, f, o; u < l.length; u++)
      f = l[u], o = t.toolbar["align" + f.charAt(0).toUpperCase() + f.slice(1)], a += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + f + '" title="' + o + '" aria-label="' + o + '"><span class="se-list-icon">' + i["align_" + f] + "</span>" + o + "</button></li>";
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
}, ca = {
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
    let n, l, a, u, f = e.options.font, o = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (a = 0, u = f.length; a < u; a++)
      n = f[a], l = n.split(",")[0], o += '<li><button type="button" class="se-btn-list" data-value="' + n + '" data-txt="' + l + '" title="' + l + '" aria-label="' + l + '" style="font-family:' + n + ';">' + l + "</button></li>";
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
}, da = {
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
    for (let u = 0, f = t.fontSizeUnit, o = l.length, g; u < o; u++)
      g = l[u], a += '<li><button type="button" class="se-btn-list" data-value="' + g + f + '" title="' + g + f + '" aria-label="' + g + f + '" style="font-size:' + g + f + ';">' + g + "</button></li>";
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
}, kn = {
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
    for (let f = 0, o = l.length, g; f < o; f++)
      g = l[f], g && (typeof g == "string" && (a.push(g), f < o - 1) || (a.length > 0 && (u += '<div class="se-selector-color">' + t(a) + "</div>", a = []), typeof g == "object" && (u += '<div class="se-selector-color">' + t(g) + "</div>")));
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
}, fa = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([kn]);
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
}, ha = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([kn]);
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
}, pa = {
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
}, ma = {
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
    let u = l[0], f = l[l.length - 1], o = (a.isListCell(u) || a.isComponent(u)) && !u.previousElementSibling ? u.parentNode.previousElementSibling : u.previousElementSibling, g = (a.isListCell(f) || a.isComponent(f)) && !f.nextElementSibling ? f.parentNode.nextElementSibling : f.nextElementSibling;
    const c = n.collapsed, b = {
      sc: n.startContainer,
      so: n.startContainer === n.endContainer && a.onlyZeroWidthSpace(n.startContainer) && n.startOffset === 0 && n.endOffset === 1 ? n.endOffset : n.startOffset,
      ec: n.endContainer,
      eo: n.endOffset
    };
    let x = null, w = !0;
    for (let k = 0, z = l.length; k < z; k++)
      if (!a.isList(a.getRangeFormatElement(l[k], (function(s) {
        return this.getRangeFormatElement(s) && s !== l[k];
      }).bind(a)))) {
        w = !1;
        break;
      }
    if (w && (!o || u.tagName !== o.tagName || e !== o.tagName.toUpperCase()) && (!g || f.tagName !== g.tagName || e !== g.tagName.toUpperCase())) {
      if (i) {
        for (let h = 0, p = l.length; h < p; h++)
          for (let v = h - 1; v >= 0; v--)
            if (l[v].contains(l[h])) {
              l.splice(h, 1), h--, p--;
              break;
            }
      }
      const k = a.getRangeFormatElement(u), z = k && k.tagName === e;
      let s, r;
      const d = (function(h) {
        return !this.isComponent(h);
      }).bind(a);
      z || (r = a.createElement(e));
      for (let h = 0, p = l.length, v, m; h < p; h++)
        m = a.getRangeFormatElement(l[h], d), !(!m || !a.isList(m)) && (v ? v !== m ? (i && a.isListCell(m.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : x = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0), m = l[h].parentNode, z || (r = a.createElement(e)), v = m, s = { r: v, f: [a.getParentElement(l[h], "LI")] }) : s.f.push(a.getParentElement(l[h], "LI")) : (v = m, s = { r: v, f: [a.getParentElement(l[h], "LI")] }), h === p - 1 && (i && a.isListCell(m.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : x = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0)));
    } else {
      const k = o && o.parentNode, z = g && g.parentNode;
      o = k && !a.isWysiwygDiv(k) && k.nodeName === e ? k : o, g = z && !a.isWysiwygDiv(z) && z.nodeName === e ? z : g;
      const s = o && o.tagName === e, r = g && g.tagName === e;
      let d = s ? o : a.createElement(e), h = null, p = null, v = null;
      const m = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(a);
      for (let y = 0, C = l.length, _, S, I, E, B, A, q, Z, W; y < C; y++) {
        if (S = l[y], S.childNodes.length === 0 && !a._isIgnoreNodeChange(S)) {
          a.removeItem(S);
          continue;
        }
        if (E = l[y + 1], B = S.parentNode, A = E ? E.parentNode : null, I = a.isListCell(S), W = a.isRangeFormatElement(B) ? B : null, q = I && !a.isWysiwygDiv(B) ? B.parentNode : B, Z = I && !a.isWysiwygDiv(B) ? !E || a.isListCell(q) ? B : B.nextSibling : S.nextSibling, _ = a.createElement("LI"), a.copyFormatAttributes(_, S), y === 0 && b.sc === S && (b.sc = _), y === C - 1 && b.ec === S && (b.ec = _), a.isComponent(S)) {
          const D = /^HR$/i.test(S.nodeName);
          D || (_.innerHTML = "<br>"), _.innerHTML += S.outerHTML, D && (_.innerHTML += "<br>");
        } else {
          const D = S.childNodes;
          for (; D[0]; )
            _.appendChild(D[0]);
        }
        d.appendChild(_), (!E || q !== A || a.isRangeFormatElement(Z)) && (h || (h = d), (!s || !E || q !== A) && !(E && a.isList(A) && A === B) && d.parentNode !== q && q.insertBefore(d, Z)), a.removeItem(S), s && p === null && (p = d.children.length - 1), E && (a.getRangeFormatElement(A, m) !== a.getRangeFormatElement(B, m) || a.isList(A) && a.isList(B) && a.getElementDepth(A) !== a.getElementDepth(B)) && (d = a.createElement(e)), W && W.children.length === 0 && a.removeItem(W);
      }
      p && (h = h.children[p]), r && (v = d.children.length - 1, d.innerHTML += g.innerHTML, d.children[v], a.removeItem(g));
    }
    return this.effectNode = null, c && x || b;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], n = i.nextElementSibling, l = t.parentNode, a = l.parentNode.nextElementSibling, u = l.parentNode.parentNode;
    for (let o = 0, g = e.length; o < g; o++)
      u.insertBefore(e[o], a);
    if (n && l.children.length > 0) {
      const o = l.cloneNode(!1), g = l.childNodes, c = this.util.getPositionIndex(n);
      for (; g[c]; )
        o.appendChild(g[c]);
      i.appendChild(o);
    }
    l.children.length === 0 && this.util.removeItem(l), this.util.mergeSameTags(u);
    const f = this.util.getEdgeChildNodes(t, i);
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
      let u = this.util.createElement(n.nodeName), f = t[0].previousElementSibling, o = l.nextElementSibling;
      const g = { s: null, e: null, sl: n, el: n };
      for (let x = 0, w = i, k; x < w; x++)
        k = t[x], k.parentNode !== n && (this.plugins.list._insiedList.call(this, n, u, f, o, g), n = k.parentNode, u = this.util.createElement(n.nodeName)), f = k.previousElementSibling, o = k.nextElementSibling, u.appendChild(k);
      this.plugins.list._insiedList.call(this, n, u, f, o, g);
      const c = this.util.getNodeFromPath(g.s, g.sl), b = this.util.getNodeFromPath(g.e, g.el);
      a = {
        sc: c,
        so: 0,
        ec: b,
        eo: b.textContent.length
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
      const f = n.nextElementSibling;
      n.parentNode.removeChild(n), n = f;
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
}, ga = {
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
    let f = this.setController_tableEditor(e, n.cellControllerTop);
    n.resizeDiv = f, n.splitMenu = f.querySelector(".se-btn-group-sub"), n.mergeButton = f.querySelector("._se_table_merge_button"), n.splitButton = f.querySelector("._se_table_split_button"), n.insertRowAboveButton = f.querySelector("._se_table_insert_row_a"), n.insertRowBelowButton = f.querySelector("._se_table_insert_row_b"), a.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, n)), a.addEventListener("click", this.appendTable.bind(e)), f.addEventListener("click", this.onClick_tableController.bind(e)), u.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, l), i.element.relative.appendChild(f), i.element.relative.appendChild(u), l = null, a = null, f = null, u = null, n = null;
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
      for (let c = 0, b = l[0].cells, x = l[0].cells.length; c < x; c++)
        u += b[c].colSpan;
      const f = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = l.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = u, i._physical_cellIndex = a, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[a].rowSpan - 1;
      let o = [], g = [];
      for (let c = 0, b, x; c <= f; c++) {
        b = l[c].cells, x = 0;
        for (let w = 0, k = b.length, z, s, r, d; w < k; w++) {
          if (z = b[w], s = z.colSpan - 1, r = z.rowSpan - 1, d = w + x, g.length > 0)
            for (let h = 0, p; h < g.length; h++)
              p = g[h], !(p.row > c) && (d >= p.index ? (x += p.cs, d += p.cs, p.rs -= 1, p.row = c + 1, p.rs < 1 && (g.splice(h, 1), h--)) : w === k - 1 && (p.rs -= 1, p.row = c + 1, p.rs < 1 && (g.splice(h, 1), h--)));
          if (c === f && w === a) {
            i._logical_cellIndex = d;
            break;
          }
          r > 0 && o.push({
            index: d,
            cs: s + 1,
            rs: r,
            row: -1
          }), x += s;
        }
        g = g.concat(o).sort(function(w, k) {
          return w.index - k.index;
        }), o = [];
      }
      o = null, g = null;
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
      const u = n._tdElement, f = i._selectedCells;
      if (a)
        if (t)
          i.setCellInfo.call(this, t === "up" ? f[0] : f[f.length - 1], !0), i.editRow.call(this, t, u);
        else {
          let o = f[0].parentNode;
          const g = [f[0]];
          for (let c = 1, b = f.length, x; c < b; c++)
            x = f[c], o !== x.parentNode && (g.push(x), o = x.parentNode);
          for (let c = 0, b = g.length; c < b; c++)
            i.setCellInfo.call(this, g[c], !0), i.editRow.call(this, t);
        }
      else {
        const o = f[0].parentNode;
        if (t) {
          let g = null;
          for (let c = 0, b = f.length - 1; c < b; c++)
            if (o !== f[c + 1].parentNode) {
              g = f[c];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? f[0] : g || f[0], !0), i.editCell.call(this, t, u);
        } else {
          const g = [f[0]];
          for (let c = 1, b = f.length, x; c < b && (x = f[c], o === x.parentNode); c++)
            g.push(x);
          for (let c = 0, b = g.length; c < b; c++)
            i.setCellInfo.call(this, g[c], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[a ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const u = l.children;
      for (let f = 0; f < u.length; f++)
        u[f].children.length === 0 && (this.util.removeItem(u[f]), f--);
      l.children.length === 0 && this.util.removeItem(l);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, n = !e, l = e === "up", a = i._rowIndex, u = n || l ? a : a + i._current_rowSpan + 1, f = n ? -1 : 1, o = i._trElements;
    let g = i._logical_cellCnt;
    for (let c = 0, b = a + (n ? -1 : 0), x; c <= b; c++) {
      if (x = o[c].cells, x.length === 0) return;
      for (let w = 0, k = x.length, z, s; w < k; w++)
        z = x[w].rowSpan, s = x[w].colSpan, !(z < 2 && s < 2) && z + c > u && u > c && (x[w].rowSpan = z + f, g -= s);
    }
    if (n) {
      const c = o[a + 1];
      if (c) {
        const b = [];
        let x = o[a].cells, w = 0;
        for (let k = 0, z = x.length, s, r; k < z; k++)
          s = x[k], r = k + w, w += s.colSpan - 1, s.rowSpan > 1 && (s.rowSpan -= 1, b.push({ cell: s.cloneNode(!1), index: r }));
        if (b.length > 0) {
          let k = b.shift();
          x = c.cells, w = 0;
          for (let z = 0, s = x.length, r, d; z < s && (r = x[z], d = z + w, w += r.colSpan - 1, !(d >= k.index && (z--, w--, w += k.cell.colSpan - 1, c.insertBefore(k.cell, r), k = b.shift(), !k))); z++)
            ;
          if (k) {
            c.appendChild(k.cell);
            for (let z = 0, s = b.length; z < s; z++)
              c.appendChild(b[z].cell);
          }
        }
      }
      i._element.deleteRow(u);
    } else {
      const c = i._element.insertRow(u);
      c.innerHTML = this.plugins.table.createCells.call(this, "td", g, !1);
    }
    n ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, n = this.util, l = !e, a = e === "left", u = i._current_colSpan, f = l || a ? i._logical_cellIndex : i._logical_cellIndex + u + 1, o = i._trElements;
    let g = [], c = [], b = 0;
    const x = [], w = [];
    for (let k = 0, z = i._rowCnt, s, r, d, h, p, v; k < z; k++) {
      s = o[k], r = f, p = !1, d = s.cells, v = 0;
      for (let m = 0, y, C = d.length, _, S, I; m < C && (y = d[m], !!y); m++)
        if (_ = y.rowSpan - 1, S = y.colSpan - 1, l) {
          if (I = m + v, c.length > 0) {
            const E = !d[m + 1];
            for (let B = 0, A; B < c.length; B++)
              A = c[B], !(A.row > k) && (I >= A.index ? (v += A.cs, I = m + v, A.rs -= 1, A.row = k + 1, A.rs < 1 && (c.splice(B, 1), B--)) : E && (A.rs -= 1, A.row = k + 1, A.rs < 1 && (c.splice(B, 1), B--)));
          }
          _ > 0 && g.push({
            rs: _,
            cs: S + 1,
            index: I,
            row: -1
          }), I >= r && I + S <= r + u ? x.push(y) : I <= r + u && I + S >= r ? y.colSpan -= n.getOverlapRangeAtIndex(f, f + u, I, I + S) : _ > 0 && (I < r || I + S > r + u) && w.push({
            cell: y,
            i: k,
            rs: k + _
          }), v += S;
        } else {
          if (m >= r) break;
          if (S > 0) {
            if (b < 1 && S + m >= r) {
              y.colSpan += 1, r = null, b = _ + 1;
              break;
            }
            r -= S;
          }
          if (!p) {
            for (let E = 0, B; E < c.length; E++)
              B = c[E], r -= B.cs, B.rs -= 1, B.rs < 1 && (c.splice(E, 1), E--);
            p = !0;
          }
        }
      if (c = c.concat(g).sort(function(m, y) {
        return m.index - y.index;
      }), g = [], !l) {
        if (b > 0) {
          b -= 1;
          continue;
        }
        r !== null && d.length > 0 && (h = this.plugins.table.createCells.call(this, d[0].nodeName, 0, !0), h = s.insertBefore(h, d[r]));
      }
    }
    if (l) {
      let k, z;
      for (let s = 0, r = x.length, d; s < r; s++)
        d = x[s].parentNode, n.removeItem(x[s]), d.cells.length === 0 && (k || (k = n.getArrayIndex(o, d)), z = n.getArrayIndex(o, d), n.removeItem(d));
      for (let s = 0, r = w.length, d; s < r; s++)
        d = w[s], d.cell.rowSpan = n.getOverlapRangeAtIndex(k, z, d.i, d.rs);
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
    const t = this.util, i = e === "vertical", n = this.context.table, l = n._tdElement, a = n._trElements, u = n._trElement, f = n._logical_cellIndex, o = n._rowIndex, g = this.plugins.table.createCells.call(this, l.nodeName, 0, !0);
    if (i) {
      const c = l.colSpan;
      if (g.rowSpan = l.rowSpan, c > 1)
        g.colSpan = this._w.Math.floor(c / 2), l.colSpan = c - g.colSpan, u.insertBefore(g, l.nextElementSibling);
      else {
        let b = [], x = [];
        for (let w = 0, k = n._rowCnt, z, s; w < k; w++) {
          z = a[w].cells, s = 0;
          for (let r = 0, d = z.length, h, p, v, m; r < d; r++) {
            if (h = z[r], p = h.colSpan - 1, v = h.rowSpan - 1, m = r + s, x.length > 0)
              for (let y = 0, C; y < x.length; y++)
                C = x[y], !(C.row > w) && (m >= C.index ? (s += C.cs, m += C.cs, C.rs -= 1, C.row = w + 1, C.rs < 1 && (x.splice(y, 1), y--)) : r === d - 1 && (C.rs -= 1, C.row = w + 1, C.rs < 1 && (x.splice(y, 1), y--)));
            if (m <= f && v > 0 && b.push({
              index: m,
              cs: p + 1,
              rs: v,
              row: -1
            }), h !== l && m <= f && m + p >= f + c - 1) {
              h.colSpan += 1;
              break;
            }
            if (m > f) break;
            s += p;
          }
          x = x.concat(b).sort(function(r, d) {
            return r.index - d.index;
          }), b = [];
        }
        u.insertBefore(g, l.nextElementSibling);
      }
    } else {
      const c = l.rowSpan;
      if (g.colSpan = l.colSpan, c > 1) {
        g.rowSpan = this._w.Math.floor(c / 2);
        const b = c - g.rowSpan, x = [], w = t.getArrayIndex(a, u) + b;
        for (let r = 0, d, h; r < w; r++) {
          d = a[r].cells, h = 0;
          for (let p = 0, v = d.length, m, y, C; p < v && (C = p + h, !(C >= f)); p++)
            m = d[p], y = m.rowSpan - 1, y > 0 && y + r >= w && C < f && x.push({
              index: C,
              cs: m.colSpan
            }), h += m.colSpan - 1;
        }
        const k = a[w], z = k.cells;
        let s = x.shift();
        for (let r = 0, d = z.length, h = 0, p, v, m, y; r < d; r++) {
          if (m = r + h, p = z[r], v = p.colSpan - 1, y = m + v + 1, s && y >= s.index && (h += s.cs, y += s.cs, s = x.shift()), y >= f || r === d - 1) {
            k.insertBefore(g, p.nextElementSibling);
            break;
          }
          h += v;
        }
        l.rowSpan = b;
      } else {
        g.rowSpan = l.rowSpan;
        const b = t.createElement("TR");
        b.appendChild(g);
        for (let k = 0, z; k < o; k++) {
          if (z = a[k].cells, z.length === 0) return;
          for (let s = 0, r = z.length; s < r; s++)
            k + z[s].rowSpan - 1 >= o && (z[s].rowSpan += 1);
        }
        const x = n._physical_cellIndex, w = u.cells;
        for (let k = 0, z = w.length; k < z; k++)
          k !== x && (w[k].rowSpan += 1);
        u.parentNode.insertBefore(b, u.nextElementSibling);
      }
    }
    this.focusEdge(l), this.plugins.table.setPositionControllerDiv.call(this, l, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, n = e._ref, l = e._selectedCells, a = l[0];
    let u = null, f = null, o = n.ce - n.cs + 1, g = n.re - n.rs + 1, c = "", b = null;
    for (let x = 1, w = l.length, k, z; x < w; x++) {
      k = l[x], b !== k.parentNode && (b = k.parentNode), z = k.children;
      for (let s = 0, r = z.length; s < r; s++)
        i.isFormatElement(z[s]) && i.onlyZeroWidthSpace(z[s].textContent) && i.removeItem(z[s]);
      c += k.innerHTML, i.removeItem(k), b.cells.length === 0 && (u ? f = b : u = b, g -= 1);
    }
    if (u) {
      const x = t._trElements, w = i.getArrayIndex(x, u), k = i.getArrayIndex(x, f || u), z = [];
      for (let s = 0, r; s <= k; s++) {
        if (r = x[s].cells, r.length === 0) {
          z.push(x[s]);
          continue;
        }
        for (let d = 0, h = r.length, p, v; d < h; d++)
          p = r[d], v = p.rowSpan - 1, v > 0 && s + v >= w && (p.rowSpan -= i.getOverlapRangeAtIndex(w, k, s, s + v));
      }
      for (let s = 0, r = z.length; s < r; s++)
        i.removeItem(z[s]);
    }
    a.innerHTML += c, a.colSpan = o, a.rowSpan = g, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, a), i.addClass(a, "se-table-selected-cell"), this.focusEdge(a);
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
    for (let c = 0, b = a.length; c < b; c++)
      l.removeClass(a[c], "se-table-selected-cell");
    if (e === t && (l.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let u = !0, f = [], o = [];
    const g = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let c = 0, b = n.length, x, w; c < b; c++) {
      x = n[c].cells, w = 0;
      for (let k = 0, z = x.length, s, r, d, h; k < z; k++) {
        if (s = x[k], d = s.colSpan - 1, h = s.rowSpan - 1, r = k + w, f.length > 0)
          for (let p = 0, v; p < f.length; p++)
            v = f[p], !(v.row > c) && (r >= v.index ? (w += v.cs, r += v.cs, v.rs -= 1, v.row = c + 1, v.rs < 1 && (f.splice(p, 1), p--)) : k === z - 1 && (v.rs -= 1, v.row = c + 1, v.rs < 1 && (f.splice(p, 1), p--)));
        if (u) {
          if ((s === e || s === t) && (g.cs = g.cs !== null && g.cs < r ? g.cs : r, g.ce = g.ce !== null && g.ce > r + d ? g.ce : r + d, g.rs = g.rs !== null && g.rs < c ? g.rs : c, g.re = g.re !== null && g.re > c + h ? g.re : c + h, g._i += 1), g._i === 2) {
            u = !1, f = [], o = [], c = -1;
            break;
          }
        } else if (l.getOverlapRangeAtIndex(g.cs, g.ce, r, r + d) && l.getOverlapRangeAtIndex(g.rs, g.re, c, c + h)) {
          const p = g.cs < r ? g.cs : r, v = g.ce > r + d ? g.ce : r + d, m = g.rs < c ? g.rs : c, y = g.re > c + h ? g.re : c + h;
          if (g.cs !== p || g.ce !== v || g.rs !== m || g.re !== y) {
            g.cs = p, g.ce = v, g.rs = m, g.re = y, c = -1, f = [], o = [];
            break;
          }
          l.addClass(s, "se-table-selected-cell");
        }
        h > 0 && o.push({
          index: r,
          cs: d + 1,
          rs: h,
          row: -1
        }), w += s.colSpan - 1;
      }
      f = f.concat(o).sort(function(k, z) {
        return k.index - z.index;
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
        const f = u._element.parentNode;
        this.util.removeItem(u._element), this.controllersOff(), f !== this.context.element.wysiwyg && this.util.removeItemAllParents(f, function(o) {
          return o.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, va = {
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
    for (let f = 0, o = a.length, g, c, b, x, w, k, z; f < o; f++)
      g = a[f], typeof g == "string" && l.indexOf(g) > -1 ? (c = g.toLowerCase(), b = c === "blockquote" ? "range" : c === "pre" ? "free" : "replace", w = /^h/.test(c) ? c.match(/\d+/)[0] : "", x = i["tag_" + (w ? "h" : c)] + w, z = "", k = "") : (c = g.tag.toLowerCase(), b = g.command, x = g.name || c, z = g.class, k = z ? ' class="' + z + '"' : ""), u += '<li><button type="button" class="se-btn-list" data-command="' + b + '" data-value="' + c + '" data-class="' + z + '" title="' + x + '" aria-label="' + x + '"><' + c + k + ">" + x + "</" + c + "></button></li>";
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
      for (let f = 0, o = l.length, g; f < o; f++)
        if (g = l[f], a === g.getAttribute("data-value") && u === g.getAttribute("data-class")) {
          t = g.title;
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
        let u = this.getRange(), f = this.getSelectedElementsAndComponents(!1);
        if (f.length === 0 && (u = this.getRange_addLine(u, null), f = this.getSelectedElementsAndComponents(!1), f.length === 0))
          return;
        const o = u.startOffset, g = u.endOffset, c = this.util;
        let b = f[0], x = f[f.length - 1];
        const w = c.getNodePath(u.startContainer, b, null, null), k = c.getNodePath(u.endContainer, x, null, null), z = this.detachList(f, !1);
        z.sc && (b = z.sc), z.ec && (x = z.ec), this.setRange(c.getNodeFromPath(w, b), o, c.getNodeFromPath(k, x), g);
        const s = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const r = s.length - 1;
          let d = s[r].parentNode, h = l.cloneNode(!1);
          const p = h;
          for (let v = r, m, y, C, _, S, I, E = !0; v >= 0; v--)
            if (m = s[v], m !== (s[v + 1] ? s[v + 1].parentNode : null)) {
              if (I = c.isComponent(m), y = I ? "" : m.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), C = c.getParentElement(m, function(B) {
                return B.parentNode === d;
              }), (d !== m.parentNode || I) && (c.isFormatElement(d) ? (d.parentNode.insertBefore(h, d.nextSibling), d = d.parentNode) : (d.insertBefore(h, C ? C.nextSibling : null), d = m.parentNode), _ = h.nextSibling, _ && h.nodeName === _.nodeName && c.isSameAttributes(h, _) && (h.innerHTML += "<BR>" + _.innerHTML, c.removeItem(_)), h = l.cloneNode(!1), E = !0), S = h.innerHTML, h.innerHTML = (E || !y || !S || /<br>$/i.test(y) ? y : y + "<BR>") + S, v === 0) {
                d.insertBefore(h, m), _ = m.nextSibling, _ && h.nodeName === _.nodeName && c.isSameAttributes(h, _) && (h.innerHTML += "<BR>" + _.innerHTML, c.removeItem(_));
                const B = h.previousSibling;
                B && h.nodeName === B.nodeName && c.isSameAttributes(h, B) && (B.innerHTML += "<BR>" + h.innerHTML, c.removeItem(h));
              }
              I || c.removeItem(m), y && (E = !1);
            }
          this.setRange(p, 0, p, 0);
        } else {
          for (let r = 0, d = s.length, h, p; r < d; r++)
            h = s[r], (h.nodeName.toLowerCase() !== n.toLowerCase() || (h.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== a) && !c.isComponent(h) && (p = l.cloneNode(!1), c.copyFormatAttributes(p, h), p.innerHTML = h.innerHTML, h.parentNode.replaceChild(p, h)), r === 0 && (b = p || h), r === d - 1 && (x = p || h), p = null;
          this.setRange(c.getNodeFromPath(w, b), o, c.getNodeFromPath(k, x), g);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, ba = {
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
    for (let u = 0, f = l.length, o; u < f; u++)
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
}, ya = {
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
}, _a = {
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
    for (let f = 0, o = a.length, g, c, b, x; f < o; f++) {
      if (g = a[f], typeof g == "string") {
        const w = l[g.toLowerCase()];
        if (!w) continue;
        g = w;
      }
      c = g.name, b = g.class ? ' class="' + g.class + '"' : "", x = g._class, u += '<li><button type="button" class="se-btn-list' + (x ? " " + x : "") + '" data-value="' + g.class + '" title="' + c + '" aria-label="' + c + '"><div' + b + ">" + c + "</div></button></li>";
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
}, Ca = {
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
    for (let u = 0, f = l.length, o, g, c, b, x, w, k; u < f; u++) {
      if (o = l[u], b = "", w = "", x = [], typeof o == "string") {
        const z = n[o.toLowerCase()];
        if (!z) continue;
        o = z;
      }
      c = o.name, g = o.tag || "span", k = o._class, o.style && (b += ' style="' + o.style + '"', w += o.style.replace(/:[^;]+(;|$)\s*/g, ","), x.push("style")), o.class && (b += ' class="' + o.class + '"', w += "." + o.class.trim().replace(/\s+/g, ",."), x.push("class")), w = w.replace(/,$/, ""), a += '<li><button type="button" class="se-btn-list' + (k ? " " + k : "") + '" data-command="' + g + '" data-value="' + w + '" title="' + c + '" aria-label="' + c + '"><' + g + b + ">" + c + "</" + g + "></button></li>";
    }
    return a += "</ul></div>", i.innerHTML = a, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, n = this.getSelectionNode();
    for (let l = 0, a = i.length, u, f, o; l < a; l++) {
      u = i[l], f = u.getAttribute("data-value").split(",");
      for (let g = 0, c, b; g < f.length; g++) {
        for (c = n, o = !1; c && !e.isFormatElement(c) && !e.isComponent(c); ) {
          if (c.nodeName.toLowerCase() === u.getAttribute("data-command").toLowerCase() && (b = f[g], /^\./.test(b) ? e.hasClass(c, b.replace(/^\./, "")) : c.style[b])) {
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
    for (let o = 0, g = a.length; o < g; o++)
      l.push("." + a[o]);
    const u = this.util.hasClass(t, "active") ? null : n.cloneNode(!1), f = u ? null : [n.nodeName];
    this.nodeChange(u, l, f, !0), this.submenuOff();
  }
};
var _i = { exports: {} }, wa = _i.exports, Dl;
function ka() {
  return Dl || (Dl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : wa, function(t, i) {
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
          let f = l.util.createElement("DIV");
          f.className = "se-dialog-back", f.style.display = "none";
          let o = l.util.createElement("DIV");
          o.className = "se-dialog-inner", o.style.display = "none", u.appendChild(f), u.appendChild(o), a.dialog.modalArea = u, a.dialog.back = f, a.dialog.modal = o, a.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(l)), a.dialog.modal.addEventListener("click", this._onClick_dialog.bind(l)), a.element.relative.appendChild(u), u = null, f = null, o = null;
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
          this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = (function(f) {
            /27/.test(f.keyCode) && this.plugins.dialog.close.call(this);
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
  }(_i)), _i.exports;
}
var xa = /* @__PURE__ */ ka();
const Zt = /* @__PURE__ */ Ee(xa), Sa = {
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
}, xn = {
  name: "anchor",
  add: function(e) {
    e.addModule([Sa]), e.context.anchor = {
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
      for (let f = 0, o = i.length, g; f < o; f++)
        g = i[f], u += '<li><button type="button" class="se-btn-list' + (n.indexOf(g) > -1 ? " se-checked" : "") + '" data-command="' + g + '" title="' + g + '" aria-label="' + g + '"><span class="se-svg">' + l.checked + "</span>" + g + "</button></li>";
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
    for (let a = 0, u = l.length, f; a < u; a++)
      f = l[a].getAttribute("data-command"), n.indexOf(f) > -1 ? this.util.addClass(l[a], "se-checked") : this.util.removeClass(l[a], "se-checked");
    e.relPreview.title = e.relPreview.textContent = n.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const n = this.util.getListChildren(this.context.element.wysiwyg, function(f) {
      return /h[1-6]/i.test(f.nodeName);
    });
    if (n.length === 0) return;
    const l = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), a = [];
    let u = "";
    for (let f = 0, o = n.length, g; f < o; f++)
      g = n[f], l.test(g.textContent) && (a.push(g), u += '<li class="se-select-item" data-index="' + f + '">' + g.textContent + "</li>");
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
}, Ta = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([Zt, xn]);
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
var Ci = { exports: {} }, Ea = Ci.exports, Vl;
function La() {
  return Vl || (Vl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Ea, function(t, i) {
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
  }(Ci)), Ci.exports;
}
var Ba = /* @__PURE__ */ La();
const Zi = /* @__PURE__ */ Ee(Ba);
var wi = { exports: {} }, za = wi.exports, Ol;
function Na() {
  return Ol || (Ol = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : za, function(t, i) {
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
          let f = this.setController_resize(l);
          u.resizing.resizeContainer = f, u.resizing.resizeDiv = f.querySelector(".se-modal-resize"), u.resizing.resizeDot = f.querySelector(".se-resize-dot"), u.resizing.resizeDisplay = f.querySelector(".se-resize-display");
          let o = this.setController_button(l);
          u.resizing.resizeButton = o;
          let g = u.resizing.resizeHandles = u.resizing.resizeDot.querySelectorAll("span");
          u.resizing.resizeButtonGroup = o.querySelector("._se_resizing_btn_group"), u.resizing.rotationButtons = o.querySelectorAll("._se_resizing_btn_group ._se_rotation"), u.resizing.percentageButtons = o.querySelectorAll("._se_resizing_btn_group ._se_percentage"), u.resizing.alignMenu = o.querySelector(".se-resizing-align-list"), u.resizing.alignMenuList = u.resizing.alignMenu.querySelectorAll("button"), u.resizing.alignButton = o.querySelector("._se_resizing_align_button"), u.resizing.autoSizeButton = o.querySelector("._se_resizing_btn_group ._se_auto_size"), u.resizing.captionButton = o.querySelector("._se_resizing_caption_button"), f.addEventListener("mousedown", function(c) {
            c.preventDefault();
          }), g[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), o.addEventListener("click", this.onClick_resizeButton.bind(l)), u.element.relative.appendChild(f), u.element.relative.appendChild(o), f = null, o = null, g = null;
        },
        /** resize controller, button (image, iframe, video) */
        setController_resize: function(l) {
          const a = l.util.createElement("DIV");
          return a.className = "se-controller se-resizing-container", a.style.display = "none", a.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', a;
        },
        setController_button: function(l) {
          const a = l.lang, u = l.icons, f = l.util.createElement("DIV");
          return f.className = "se-controller se-controller-resizing", f.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + u.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + u.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + u.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + u.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + u.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + u.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + u.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + u.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + u.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + u.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + u.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + u.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + u.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + u.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.remove + "</span></span></button></div>", f;
        },
        /**
         * @description Gets the width size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeX: function(l, a, u, f) {
          return a || (a = l._element), u || (u = l._cover), f || (f = l._container), a ? /%$/.test(a.style.width) ? (f && this.util.getNumber(f.style.width, 2) || 100) + "%" : a.style.width : "";
        },
        /**
         * @description Gets the height size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeY: function(l, a, u, f) {
          return a || (a = l._element), u || (u = l._cover), f || (f = l._container), !f || !u ? a && a.style.height || "" : this.util.getNumber(u.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? u.style.height : !/%$/.test(a.style.height) || !/%$/.test(a.style.width) ? a.style.height : (f && this.util.getNumber(f.style.height, 2) || 100) + "%";
        },
        /**
         * @description Called at the "openModify" to put the size of the current target into the size input element.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Object} pluginObj Plugin object
         */
        _module_setModifyInputSize: function(l, a) {
          const u = l._onlyPercentage && this.context.resizing._rotateVertical;
          l.proportion.checked = l._proportionChecked = l._element.getAttribute("data-proportion") !== "false";
          let f = u ? "" : this.plugins.resizing._module_getSizeX.call(this, l);
          if (f === l._defaultSizeX && (f = ""), l._onlyPercentage && (f = this.util.getNumber(f, 2)), l.inputX.value = f, a.setInputSize.call(this, "x"), !l._onlyPercentage) {
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
            const u = l.inputX.value.replace(/\d+|\./g, "") || l.sizeUnit, f = l.inputY.value.replace(/\d+|\./g, "") || l.sizeUnit;
            if (u !== f) return;
            const o = u === "%" ? 2 : 0;
            a === "x" ? l.inputY.value = this.util.getNumber(l._ratioY * this.util.getNumber(l.inputX.value, o), o) + f : l.inputX.value = this.util.getNumber(l._ratioX * this.util.getNumber(l.inputY.value, o), o) + u;
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
            const f = a.replace(/\d+|\./g, "") || l.sizeUnit, o = u.replace(/\d+|\./g, "") || l.sizeUnit;
            if (f !== o)
              l._ratio = !1;
            else if (!l._ratio) {
              const g = this.util.getNumber(a, 0), c = this.util.getNumber(u, 0);
              l._ratio = !0, l._ratioX = g / c, l._ratioY = c / g;
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
          const u = this.context.resizing, f = this.context[a];
          u._resize_plugin = a;
          const o = u.resizeContainer, g = u.resizeDiv, c = this.util.getOffset(l, this.context.element.wysiwygFrame), b = u._rotateVertical = /^(90|270)$/.test(Math.abs(l.getAttribute("data-rotate")).toString()), x = b ? l.offsetHeight : l.offsetWidth, w = b ? l.offsetWidth : l.offsetHeight, k = c.top, z = c.left - this.context.element.wysiwygFrame.scrollLeft;
          o.style.top = k + "px", o.style.left = z + "px", o.style.width = x + "px", o.style.height = w + "px", g.style.top = "0px", g.style.left = "0px", g.style.width = x + "px", g.style.height = w + "px";
          let s = l.getAttribute("data-align") || "basic";
          s = s === "none" ? "basic" : s;
          const r = this.util.getParentElement(l, this.util.isComponent), d = this.util.getParentElement(l, "FIGURE"), h = this.plugins.resizing._module_getSizeX.call(this, f, l, d, r) || "auto", p = f._onlyPercentage && a === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, f, l, d, r) || "auto");
          this.util.changeTxt(u.resizeDisplay, this.lang.dialogBox[s] + " (" + h + p + ")"), u.resizeButtonGroup.style.display = f._resizing ? "" : "none";
          const v = f._resizing && !f._resizeDotHide && !f._onlyPercentage ? "flex" : "none", m = u.resizeHandles;
          for (let E = 0, B = m.length; E < B; E++)
            m[E].style.display = v;
          if (f._resizing) {
            const E = u.rotationButtons;
            E[0].style.display = E[1].style.display = f._rotation ? "" : "none";
          }
          if (f._alignHide)
            u.alignButton.style.display = "none";
          else {
            u.alignButton.style.display = "";
            const E = u.alignMenuList;
            this.util.changeElement(u.alignButton.firstElementChild, u.alignIcons[s]);
            for (let B = 0, A = E.length; B < A; B++)
              E[B].getAttribute("data-value") === s ? this.util.addClass(E[B], "on") : this.util.removeClass(E[B], "on");
          }
          const y = u.percentageButtons, C = /%$/.test(l.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
          for (let E = 0, B = y.length; E < B; E++)
            y[E].getAttribute("data-value") === C ? this.util.addClass(y[E], "active") : this.util.removeClass(y[E], "active");
          f._captionShow ? (u.captionButton.style.display = "", this.util.getChildElement(l.parentNode, "figcaption") ? (this.util.addClass(u.captionButton, "active"), f._captionChecked = !0) : (this.util.removeClass(u.captionButton, "active"), f._captionChecked = !1)) : u.captionButton.style.display = "none", o.style.display = "block";
          const _ = { left: 0, top: 50 };
          this.options.iframe && (_.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, _.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(u.resizeButton, o, "bottom", _);
          const S = function() {
            this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
          };
          this.controllersOn(o, u.resizeButton, S.bind(this), l, a), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), u._resize_w = x, u._resize_h = w;
          const I = (l.getAttribute("origin-size") || "").split(",");
          return u._origin_w = I[0] || l.naturalWidth, u._origin_h = I[1] || l.naturalHeight, {
            w: x,
            h: w,
            t: k,
            l: z
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
          const f = a.getAttribute("data-value") || a.parentNode.getAttribute("data-value"), o = this.context.resizing._resize_plugin, g = this.context[o], c = g._element, b = this.plugins[o];
          if (l.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), u === "onalign"))) {
            switch (u) {
              case "auto":
                this.plugins.resizing.resetTransform.call(this, c), b.setAutoSize.call(this), this.selectComponent(c, o);
                break;
              case "percent":
                let x = this.plugins.resizing._module_getSizeY.call(this, g);
                if (this.context.resizing._rotateVertical) {
                  const v = c.getAttribute("data-percentage");
                  v && (x = v.split(",")[1]);
                }
                this.plugins.resizing.resetTransform.call(this, c), b.setPercentSize.call(this, f * 100, this.util.getNumber(x, 0) === null || !/%$/.test(x) ? "" : x), this.selectComponent(c, o);
                break;
              case "mirror":
                const w = c.getAttribute("data-rotate") || "0";
                let k = c.getAttribute("data-rotateX") || "", z = c.getAttribute("data-rotateY") || "";
                f === "h" && !this.context.resizing._rotateVertical || f === "v" && this.context.resizing._rotateVertical ? z = z ? "" : "180" : k = k ? "" : "180", c.setAttribute("data-rotateX", k), c.setAttribute("data-rotateY", z), this.plugins.resizing._setTransForm(c, w, k, z);
                break;
              case "rotate":
                const s = this.context.resizing, r = c.getAttribute("data-rotate") * 1 + f * 1, d = this._w.Math.abs(r) >= 360 ? 0 : r;
                c.setAttribute("data-rotate", d), s._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(d).toString()), this.plugins.resizing.setTransformSize.call(this, c, null, null), this.selectComponent(c, o);
                break;
              case "onalign":
                this.plugins.resizing.openAlignMenu.call(this);
                return;
              case "align":
                const h = f === "basic" ? "none" : f;
                b.setAlign.call(this, h, null, null, null), this.selectComponent(c, o);
                break;
              case "caption":
                const p = !g._captionChecked;
                if (b.openModify.call(this, !0), g._captionChecked = g.captionCheckEl.checked = p, b.update_image.call(this, !1, !1, !1), p) {
                  const v = this.util.getChildElement(g._caption, function(m) {
                    return m.nodeType === 3;
                  });
                  v ? this.setRange(v, 0, v, v.textContent.length) : g._caption.focus(), this.controllersOff();
                } else
                  this.selectComponent(c, o), b.openModify.call(this, !0);
                break;
              case "revert":
                b.setOriginSize.call(this), this.selectComponent(c, o);
                break;
              case "update":
                b.openModify.call(this), this.controllersOff();
                break;
              case "delete":
                b.destroy.call(this);
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
          let f = l.getAttribute("data-percentage");
          const o = this.context.resizing._rotateVertical, g = l.getAttribute("data-rotate") * 1;
          let c = "";
          if (f && !o)
            f = f.split(","), f[0] === "auto" && f[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, f[0], f[1]);
          else {
            const b = this.util.getParentElement(l, "FIGURE"), x = a || l.offsetWidth, w = u || l.offsetHeight, k = (o ? w : x) + "px", z = (o ? x : w) + "px";
            if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, x + "px", w + "px", !0), b.style.width = k, b.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : z, o) {
              let s = x / 2 + "px " + x / 2 + "px 0", r = w / 2 + "px " + w / 2 + "px 0";
              c = g === 90 || g === -270 ? r : s;
            }
          }
          l.style.transformOrigin = c, this.plugins.resizing._setTransForm(l, g.toString(), l.getAttribute("data-rotateX") || "", l.getAttribute("data-rotateY") || ""), o ? l.style.maxWidth = "none" : l.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, l);
        },
        _setTransForm: function(l, a, u, f) {
          let o = (l.offsetWidth - l.offsetHeight) * (/-/.test(a) ? 1 : -1), g = "";
          if (/[1-9]/.test(a) && (u || f))
            switch (g = u ? "Y" : "X", a) {
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
          a % 180 === 0 && (l.style.maxWidth = ""), l.style.transform = "rotate(" + a + "deg)" + (u ? " rotateX(" + u + "deg)" : "") + (f ? " rotateY(" + f + "deg)" : "") + (g ? " translate" + g + "(" + o + "px)" : "");
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
          const f = (function(c) {
            if (c.type === "keydown" && c.keyCode !== 27) return;
            const b = a._isChange;
            a._isChange = !1, this.removeDocEvent("mousemove", o), this.removeDocEvent("mouseup", f), this.removeDocEvent("keydown", f), c.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, u), b && this.history.push(!1));
          }).bind(this), o = this.plugins.resizing.resizing_element.bind(this, a, u, this.context[a._resize_plugin]);
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
        resizing_element: function(l, a, u, f) {
          const o = f.clientX, g = f.clientY;
          let c = u._element_w, b = u._element_h;
          const x = u._element_w + (/r/.test(a) ? o - l._resizeClientX : l._resizeClientX - o), w = u._element_h + (/b/.test(a) ? g - l._resizeClientY : l._resizeClientY - g), k = u._element_h / u._element_w * x;
          /t/.test(a) && (l.resizeDiv.style.top = u._element_h - (/h/.test(a) ? w : k) + "px"), /l/.test(a) && (l.resizeDiv.style.left = u._element_w - x + "px"), /r|l/.test(a) && (l.resizeDiv.style.width = x + "px", c = x), /^(t|b)[^h]$/.test(a) ? (l.resizeDiv.style.height = k + "px", b = k) : /^(t|b)h$/.test(a) && (l.resizeDiv.style.height = w + "px", b = w), l._resize_w = c, l._resize_h = b, this.util.changeTxt(l.resizeDisplay, this._w.Math.round(c) + " x " + this._w.Math.round(b)), l._isChange = !0;
        },
        /**
         * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
         * Called at the mouse-up event registered in "onMouseDown_resize_handle".
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
         */
        cancel_controller_resize: function(l) {
          const a = this.context.resizing._rotateVertical;
          this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
          let u = this._w.Math.round(a ? this.context.resizing._resize_h : this.context.resizing._resize_w), f = this._w.Math.round(a ? this.context.resizing._resize_w : this.context.resizing._resize_h);
          if (!a && !/%$/.test(u)) {
            const c = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
            this.util.getNumber(u, 0) > c && (f = this._w.Math.round(f / u * c), u = c);
          }
          const o = this.context.resizing._resize_plugin;
          this.plugins[o].setSize.call(this, u, f, !1, l), a && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, u, f), this.selectComponent(this.context[o]._element, o);
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
  }(wi)), wi.exports;
}
var Ra = /* @__PURE__ */ Na();
const Sn = /* @__PURE__ */ Ee(Ra);
var ki = { exports: {} }, Aa = ki.exports, Hl;
function Ia() {
  return Hl || (Hl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Aa, function(t, i) {
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
        upload: function(l, a, u, f, o) {
          this.showLoading();
          const g = this.plugins.fileManager, c = g._xmlHttp = this.util.getXMLHttpRequest();
          if (c.onreadystatechange = g._callBackUpload.bind(this, c, f, o), c.open("post", l, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
            for (let b in a)
              c.setRequestHeader(b, a[b]);
          c.send(u);
        },
        _callBackUpload: function(l, a, u) {
          if (l.readyState === 4)
            if (l.status === 200)
              try {
                a(l);
              } catch (f) {
                throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + f.message + '"');
              } finally {
                this.closeLoading();
              }
            else {
              this.closeLoading();
              const f = l.responseText ? JSON.parse(l.responseText) : l;
              if (typeof u != "function" || u("", f, this)) {
                const o = "[SUNEDITOR.fileManager.upload.serverException] status: " + l.status + ", response: " + (f.errorMessage || l.responseText);
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
        checkInfo: function(l, a, u, f, o) {
          let g = [];
          for (let r = 0, d = a.length; r < d; r++)
            g = g.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(a[r] + ':not([data-se-embed="true"])')));
          const c = this.plugins.fileManager, b = this.context[l], x = b._infoList, w = c.setInfo.bind(this);
          if (g.length === x.length)
            if (this._componentsInfoReset) {
              for (let r = 0, d = g.length; r < d; r++)
                w(l, g[r], u, null, o);
              return;
            } else {
              let r = !1;
              for (let d = 0, h = x.length, p; d < h; d++)
                if (p = x[d], g.filter(function(v) {
                  return p.src === v.src && p.index.toString() === v.getAttribute("data-index");
                }).length === 0) {
                  r = !0;
                  break;
                }
              if (!r) return;
            }
          const k = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = l);
          const z = [], s = [];
          for (let r = 0, d = x.length; r < d; r++)
            s[r] = x[r].index;
          for (b.__updateTags = g; g.length > 0; ) {
            const r = g.shift();
            !this.util.getParentElement(r, this.util.isMediaComponent) || !c._checkMediaComponent(r) ? (z.push(b._infoIndex), f(r)) : !r.getAttribute("data-index") || s.indexOf(r.getAttribute("data-index") * 1) < 0 ? (z.push(b._infoIndex), r.removeAttribute("data-index"), w(l, r, u, null, o)) : z.push(r.getAttribute("data-index") * 1);
          }
          for (let r = 0, d; r < x.length; r++)
            d = x[r].index, !(z.indexOf(d) > -1) && (x.splice(r, 1), typeof u == "function" && u(null, d, "delete", null, 0, this), r--);
          o && (this.context.resizing._resize_plugin = k);
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
        setInfo: function(l, a, u, f, o) {
          const g = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = l);
          const c = this.plugins[l], b = this.context[l], x = b._infoList;
          let w = a.getAttribute("data-index"), k = null, z = "";
          if (f || (f = {
            name: a.getAttribute("data-file-name") || (typeof a.src == "string" ? a.src.split("/").pop() : ""),
            size: a.getAttribute("data-file-size") || 0
          }), !w || this._componentsInfoInit)
            z = "create", w = b._infoIndex++, a.setAttribute("data-index", w), a.setAttribute("data-file-name", f.name), a.setAttribute("data-file-size", f.size), k = {
              src: a.src,
              index: w * 1,
              name: f.name,
              size: f.size
            }, x.push(k);
          else {
            z = "update", w *= 1;
            for (let s = 0, r = x.length; s < r; s++)
              if (w === x[s].index) {
                k = x[s];
                break;
              }
            k || (w = b._infoIndex++, k = { index: w }, x.push(k)), k.src = a.src, k.name = a.getAttribute("data-file-name"), k.size = a.getAttribute("data-file-size") * 1;
          }
          if (k.element = a, k.delete = c.destroy.bind(this, a), k.select = (function(s) {
            s.scrollIntoView(!0), this._w.setTimeout(c.select.bind(this, s));
          }).bind(this, a), o) {
            if (!a.getAttribute("origin-size") && a.naturalWidth && a.setAttribute("origin-size", a.naturalWidth + "," + a.naturalHeight), !a.getAttribute("data-origin")) {
              const s = this.util.getParentElement(a, this.util.isMediaComponent), r = this.util.getParentElement(a, "FIGURE"), d = this.plugins.resizing._module_getSizeX.call(this, b, a, r, s), h = this.plugins.resizing._module_getSizeY.call(this, b, a, r, s);
              a.setAttribute("data-origin", d + "," + h), a.setAttribute("data-size", d + "," + h);
            }
            if (!a.style.width) {
              const s = (a.getAttribute("data-size") || a.getAttribute("data-origin") || "").split(",");
              c.onModifyMode.call(this, a, null), c.applySize.call(this, s[0], s[1]);
            }
            this.context.resizing._resize_plugin = g;
          }
          typeof u == "function" && u(a, w, z, k, --b._uploadFileLength < 0 ? 0 : b._uploadFileLength, this);
        },
        /**
         * @description Delete info object at "_infoList"
         * @param {String} pluginName Plugin name 
         * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        deleteInfo: function(l, a, u) {
          if (a >= 0) {
            const f = this.context[l]._infoList;
            for (let o = 0, g = f.length; o < g; o++)
              if (a === f[o].index) {
                f.splice(o, 1), typeof u == "function" && u(null, a, "delete", null, 0, this);
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
            const f = u._infoList;
            for (let o = 0, g = f.length; o < g; o++)
              a(null, f[o].index, "delete", null, 0, this);
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
  }(ki)), ki.exports;
}
var Ma = /* @__PURE__ */ Ia();
const qi = /* @__PURE__ */ Ee(Ma), Da = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([Zt, xn, Zi, Sn, qi]);
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
      const a = t.imageSizeOnlyPercentage, u = a ? ' style="display: none !important;"' : "", f = t.imageHeightShow ? "" : ' style="display: none !important;"';
      l += '<div class="se-dialog-form">', a || !t.imageHeightShow ? l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", l += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (a ? ' type="number" min="1"' : 'type="text"') + (a ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + f + ">" + (a ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + u + (a ? ' max="100"' : "") + f + "/><label" + u + f + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
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
    let a, u, f;
    for (u = t.getElementsByClassName(l), a = 0; a < u.length; a++)
      u[a].style.display = "none";
    for (f = t.getElementsByClassName("_se_tab_link"), a = 0; a < f.length; a++)
      this.util.removeClass(f[a], "active");
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
    for (let f = 0, o = e.length; f < o; f++)
      /image/i.test(e[f].type) && (i.push(e[f]), t += e[f].size);
    const n = this.options.imageUploadSizeLimit;
    if (n > 0) {
      let f = 0;
      const o = this.context.image._infoList;
      for (let g = 0, c = o.length; g < c; g++)
        f += o[g].size * 1;
      if (t + f > n) {
        this.closeLoading();
        const g = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + n / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(g, { limitSize: n, currentSize: f, uploadSize: t }, this)) && this.functions.noticeOpen(g);
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
      const f = this.functions.onImageUploadBefore(i, u, this, (function(o) {
        o && this._w.Array.isArray(o.result) ? this.plugins.image.register.call(this, u, o) : this.plugins.image.upload.call(this, u, o);
      }).bind(this));
      if (typeof f > "u") return;
      if (!f) {
        this.closeLoading();
        return;
      }
      this._w.Array.isArray(f) && f.length > 0 && (i = f);
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
  setup_reader: function(e, t, i, n, l, a, u, f) {
    try {
      if (u === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = u;
      const o = this._w.FileReader, g = [u];
      this.context.image.inputX.value = i, this.context.image.inputY.value = n;
      for (let c = 0, b, x; c < u; c++)
        b = new o(), x = e[c], b.onload = (function(w, k, z, s, r) {
          g[r] = { result: w.result, file: s }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, k, g, z, t, i, n, l, a), this.closeLoading());
        }).bind(this, b, f, this.context.image._element, x, c), b.readAsDataURL(x);
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + o.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, n, l, a, u, f) {
    const o = this.plugins.image.update_src, g = this.plugins.image.create_image;
    for (let c = 0, b = t.length; c < b; c++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[c].file.name), this.context.image._element.setAttribute("data-file-size", t[c].file.size), o.call(this, t[c].result, i, t[c].file)) : g.call(this, t[c].result, n, l, a, u, t[c].file, f);
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
    const f = this.plugins.image, o = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let g = this.util.createElement("IMG");
    g.src = e, g.alt = u, g.setAttribute("data-rotate", "0"), t = f.onRender_link.call(this, g, t ? t.cloneNode(!1) : null), o._resizing && g.setAttribute("data-proportion", o._proportionChecked);
    const c = this.plugins.component.set_cover.call(this, t), b = this.plugins.component.set_container.call(this, c, "se-image-container");
    o._captionChecked && (o._caption = this.plugins.component.create_caption.call(this), c.appendChild(o._caption)), o._element = g, o._cover = c, o._container = b, f.applySize.call(this, i, n), f.setAlign.call(this, l, g, c, b), g.onload = f._image_create_onload.bind(this, g, o.svgDefaultSize, b), this.insertComponent(b, !0, !0, !this.options.mediaAutoSelect) && this.plugins.fileManager.setInfo.call(this, "image", g, this.functions.onImageUpload, a, !0), this.context.resizing._resize_plugin = "";
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
    let l = n._element, a = n._cover, u = n._container, f = !1;
    a === null && (f = !0, l = n._element.cloneNode(!0), a = this.plugins.component.set_cover.call(this, l)), u === null ? (a = a.cloneNode(!0), l = a.querySelector("img"), f = !0, u = this.plugins.component.set_container.call(this, a, "se-image-container")) : f && (u.innerHTML = "", u.appendChild(a), n._cover = a, n._element = l, f = !1);
    let o;
    const g = this.util.isNumber(n.inputX.value) ? n.inputX.value + n.sizeUnit : n.inputX.value, c = this.util.isNumber(n.inputY.value) ? n.inputY.value + n.sizeUnit : n.inputY.value;
    /%$/.test(l.style.width) ? o = g !== u.style.width || c !== u.style.height : o = g !== l.style.width || c !== l.style.height, l.alt = n._altText;
    let b = !1;
    n._captionChecked ? n._caption || (n._caption = this.plugins.component.create_caption.call(this), a.appendChild(n._caption), b = !0) : n._caption && (this.util.removeItem(n._caption), n._caption = null, b = !0);
    let x = null;
    const w = this.plugins.anchor.createAnchor.call(this, n.anchorCtx, !0);
    if (w)
      n._linkElement !== w || f && !u.contains(w) ? (n._linkElement = w.cloneNode(!1), a.insertBefore(this.plugins.image.onRender_link.call(this, l, n._linkElement), n._caption), x = n._element) : n._linkElement.setAttribute("data-image-link", "image");
    else if (n._linkElement !== null) {
      const z = l;
      if (z.setAttribute("data-image-link", ""), a.contains(n._linkElement)) {
        const s = z.cloneNode(!0);
        a.removeChild(n._linkElement), a.insertBefore(s, n._caption), n._element = l = s;
      }
    }
    let k = null;
    if (f) {
      if (k = this.util.isRangeFormatElement(n._element.parentNode) || this.util.isWysiwygDiv(n._element.parentNode) ? n._element : this.util.isAnchor(n._element.parentNode) ? n._element.parentNode : this.util.getFormatElement(n._element) || n._element, this.util.getParentElement(n._element, this.util.isNotCheckingNode))
        k = x ? w : n._element, k.parentNode.replaceChild(u, k);
      else if (this.util.isListCell(k)) {
        const z = this.util.getParentElement(n._element, function(s) {
          return s.parentNode === k;
        });
        k.insertBefore(u, z), this.util.removeItem(n._element), this.util.removeEmptyNode(z, null, !0);
      } else if (this.util.isFormatElement(k)) {
        const z = this.util.getParentElement(n._element, function(s) {
          return s.parentNode === k;
        });
        k = this.util.splitElement(k, z), k.parentNode.insertBefore(u, k), this.util.removeItem(n._element), this.util.removeEmptyNode(k, null, !0), k.children.length === 0 && (k.innerHTML = this.util.htmlRemoveWhiteSpace(k.innerHTML));
      } else if (this.util.isFormatElement(k.parentNode)) {
        const z = k.parentNode;
        z.parentNode.insertBefore(u, k.previousSibling ? z.nextElementSibling : z), n.__updateTags.map(function(s) {
          return k.contains(s);
        }).length === 0 && this.util.removeItem(k);
      } else
        k = this.util.isFigures(k.parentNode) ? k.parentNode : k, k.parentNode.replaceChild(u, k);
      l = u.querySelector("img"), n._element = l, n._cover = a, n._container = u;
    }
    x && (f ? (this.util.removeItem(x), this.util.getListChildren(w, function(z) {
      return /IMG/i.test(z.tagName);
    }).length === 0 && this.util.removeItem(w)) : this.util.removeItem(w)), (b || !n._onlyPercentage && o) && !e && (/\d+/.test(l.style.height) || this.context.resizing._rotateVertical && n._captionChecked) && (/%$/.test(n.inputX.value) || /%$/.test(n.inputY.value) ? this.plugins.resizing.resetTransform.call(this, l) : this.plugins.resizing.setTransformSize.call(this, l, this.util.getNumber(n.inputX.value, 0), this.util.getNumber(n.inputY.value, 0))), n._resizing && (l.setAttribute("data-proportion", n._proportionChecked), o && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, l, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", l, this.functions.onImageUpload, null, !0), t && this.selectComponent(l, "image"), i || this.history.push(!1);
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
}, Va = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([Zt, Zi, Sn, qi]);
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
      const a = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], u = t.videoRatio, f = t.videoSizeOnlyPercentage, o = f ? ' style="display: none !important;"' : "", g = t.videoHeightShow ? "" : ' style="display: none !important;"', c = t.videoRatioShow ? "" : ' style="display: none !important;"', b = !f && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      l += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + g + ">" + i.dialogBox.height + '</label><label class="size-h"' + c + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + b + ">" + (f ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + g + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + c + ">", g || (l += '<option value=""> - </option>');
      for (let x = 0, w = a.length; x < w; x++)
        l += '<option value="' + a[x].value + '"' + (u.toString() === a[x].value.toString() ? " selected" : "") + ">" + a[x].name + "</option>";
      l += '</select><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + o + b + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + "</label></div>";
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
    for (let u = 0, f = e.length; u < f; u++)
      /video/i.test(e[u].type) && (i.push(e[u]), t += e[u].size);
    const n = this.options.videoUploadSizeLimit;
    if (n > 0) {
      let u = 0;
      const f = this.context.video._infoList;
      for (let o = 0, g = f.length; o < g; o++)
        u += f[o].size * 1;
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
      const u = this.functions.onVideoUploadBefore(i, a, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.video.register.call(this, a, f) : this.plugins.video.upload.call(this, a, f);
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
    const f = this.context.video;
    let o = null, g = null, c = !1;
    if (u) {
      if (e = f._element, e.src !== t) {
        c = !0;
        const z = /youtu\.?be/.test(t), s = /vimeo\.com/.test(t);
        if ((z || s) && !/^iframe$/i.test(e.nodeName)) {
          const r = this.plugins.video.createIframeTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), f._element = e = r;
        } else if (!z && !s && !/^video$/i.test(e.nodeName)) {
          const r = this.plugins.video.createVideoTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), f._element = e = r;
        } else
          e.src = t;
      }
      g = f._container, o = this.util.getParentElement(e, "FIGURE");
    } else
      c = !0, e.src = t, f._element = e, o = this.plugins.component.set_cover.call(this, e), g = this.plugins.component.set_container.call(this, o, "se-video-container");
    f._cover = o, f._container = g;
    const b = this.plugins.resizing._module_getSizeX.call(this, f) !== (i || f._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, f) !== (n || f._videoRatio), x = !u || b;
    f._resizing && (this.context.video._proportionChecked = f.proportion.checked, e.setAttribute("data-proportion", f._proportionChecked));
    let w = !1;
    x && (w = this.plugins.video.applySize.call(this)), w && l === "center" || this.plugins.video.setAlign.call(this, null, e, o, g);
    let k = !0;
    if (u)
      f._resizing && this.context.resizing._rotateVertical && x && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (k = this.insertComponent(g, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const z = this.appendFormatTag(g, null);
      z && this.setRange(z, 0, z, 0);
    }
    k && (c && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, a, !0), u && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
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
      let f = null;
      u && (f = this.util.createElement("DIV"), f.innerHTML = u.innerHTML, this.util.removeItem(u));
      const o = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, o[0] || n.style.width || n.width || "", o[1] || n.style.height || n.height || "");
      const g = this.util.getFormatElement(n);
      if (g && (t._align = g.style.textAlign || g.style.float), this.plugins.video.setAlign.call(this, null, e, l, a), this.util.getParentElement(n, this.util.isNotCheckingNode))
        n.parentNode.replaceChild(a, n);
      else if (this.util.isListCell(i)) {
        const c = this.util.getParentElement(n, function(b) {
          return b.parentNode === i;
        });
        i.insertBefore(a, c), this.util.removeItem(n), this.util.removeEmptyNode(c, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const c = this.util.getParentElement(n, function(b) {
          return b.parentNode === i;
        });
        i = this.util.splitElement(i, c), i.parentNode.insertBefore(a, i), this.util.removeItem(n), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(a, i);
      f && i.parentNode.insertBefore(f, a.nextElementSibling);
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
}, Oa = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([Zt, Zi, qi]);
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
    for (let u = 0, f = e.length; u < f; u++)
      /audio/i.test(e[u].type) && (i.push(e[u]), t += e[u].size);
    const n = this.options.audioUploadSizeLimit;
    if (n > 0) {
      let u = 0;
      const f = this.context.audio._infoList;
      for (let o = 0, g = f.length; o < g; o++)
        u += f[o].size * 1;
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
      const u = this.functions.onAudioUploadBefore(i, a, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.audio.register.call(this, a, f) : this.plugins.audio.upload.call(this, a, f);
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
        const f = this.appendFormatTag(u, null);
        f && this.setRange(f, 0, f, 0);
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
        const u = this.util.getParentElement(n, function(f) {
          return f.parentNode === i;
        });
        i.insertBefore(a, u), this.util.removeItem(n), this.util.removeEmptyNode(u, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const u = this.util.getParentElement(n, function(f) {
          return f.parentNode === i;
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
}, Fl = "https://katex.org/docs/supported.html", Ha = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([Zt]);
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
    let a = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + Fl + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let u = 0, f = n.length, o; u < f; u++)
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
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + Fl + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
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
          const f = this.util.createElement(a[0].nodeName);
          if (f.appendChild(l), !this.insertNode(f, null, !0)) return !1;
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
var xi = { exports: {} }, Fa = xi.exports, Ul;
function Ua() {
  return Ul || (Ul = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(n) {
        if (!n.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(n);
      };
    })(typeof window < "u" ? window : Fa, function(t, i) {
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
          let f = l.util.createElement("DIV");
          f.className = "se-file-browser-back";
          let o = l.util.createElement("DIV");
          o.className = "se-file-browser-inner", o.innerHTML = this.set_browser(l), u.appendChild(f), u.appendChild(o), this._loading = u.querySelector(".se-loading-box"), a.fileBrowser.area = u, a.fileBrowser.header = o.querySelector(".se-file-browser-header"), a.fileBrowser.titleArea = o.querySelector(".se-file-browser-title"), a.fileBrowser.tagArea = o.querySelector(".se-file-browser-tags"), a.fileBrowser.body = o.querySelector(".se-file-browser-body"), a.fileBrowser.list = o.querySelector(".se-file-browser-list"), a.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(l)), a.fileBrowser.list.addEventListener("click", this.onClickFile.bind(l)), o.addEventListener("mousedown", this._onMouseDown_browser.bind(l)), o.addEventListener("click", this._onClick_browser.bind(l)), a.element.relative.appendChild(u), u = null, f = null, o = null;
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
          this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(g) {
            /27/.test(g.keyCode) && this.plugins.fileBrowser.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
          const u = this.context.fileBrowser;
          u.contextPlugin = l, u.selectorHandler = a;
          const f = this.context[l], o = f.listClass;
          this.util.hasClass(u.list, o) || (u.list.className = "se-file-browser-list " + o), this.options.popupDisplay === "full" ? u.area.style.position = "fixed" : u.area.style.position = "absolute", u.titleArea.textContent = f.title, u.area.style.display = "block", this.context[l].directData ? this.plugins.fileBrowser._drawListItem.call(this, this.context[l].directData, !0) : this.plugins.fileBrowser._drawFileList.call(this, this.context[l].url, this.context[l].header);
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
          const u = this.plugins.fileBrowser, f = u._xmlHttp = this.util.getXMLHttpRequest();
          if (f.onreadystatechange = u._callBackGet.bind(this, f), f.open("get", l, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
            for (let o in a)
              f.setRequestHeader(o, a[o]);
          f.send(null), this.plugins.fileBrowser.showBrowserLoading();
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
          const u = this.context.fileBrowser, f = this.context[u.contextPlugin], o = [], g = l.length, c = f.columnSize || u.columnSize, b = c <= 1 ? 1 : Math.round(g / c) || 1, x = f.itemTemplateHandler;
          let w = "", k = '<div class="se-file-item-column">', z = 1;
          for (let s = 0, r, d; s < g; s++)
            if (r = l[s], d = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], d = r.tag = d.map(function(h) {
              return h.trim();
            }), k += x(r), (s + 1) % b === 0 && z < c && s + 1 < g && (z++, k += '</div><div class="se-file-item-column">'), a && d.length > 0)
              for (let h = 0, p = d.length, v; h < p; h++)
                v = d[h], v && o.indexOf(v) === -1 && (o.push(v), w += '<a title="' + v + '" aria-label="' + v + '">' + v + "</a>");
          k += "</div>", u.list.innerHTML = k, a && (u.items = l, u.tagArea.innerHTML = w, u.tagElements = u.tagArea.querySelectorAll("A"));
        },
        onClickTag: function(l) {
          const a = l.target;
          if (!this.util.isAnchor(a)) return;
          const u = a.textContent, f = this.plugins.fileBrowser, o = this.context.fileBrowser, g = o.tagArea.querySelector('a[title="' + u + '"]'), c = o.selectedTags, b = c.indexOf(u);
          b > -1 ? (c.splice(b, 1), this.util.removeClass(g, "on")) : (c.push(u), this.util.addClass(g, "on")), f._drawListItem.call(
            this,
            c.length === 0 ? o.items : o.items.filter(function(x) {
              return x.tag.some(function(w) {
                return c.indexOf(w) > -1;
              });
            }),
            !1
          );
        },
        onClickFile: function(l) {
          l.preventDefault(), l.stopPropagation();
          const a = this.context.fileBrowser, u = a.list;
          let f = l.target, o = null;
          if (f === u) return;
          for (; u !== f.parentNode && (o = f.getAttribute("data-command"), !o); )
            f = f.parentNode;
          if (!o) return;
          (a.selectorHandler || this.context[a.contextPlugin].selectorHandler)(f, f.parentNode.querySelector(".__se__img_name").textContent), this.plugins.fileBrowser.close.call(this);
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
  }(xi)), xi.exports;
}
var Pa = /* @__PURE__ */ Ua();
const Wa = /* @__PURE__ */ Ee(Pa), $a = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([Wa]);
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
}, Za = { blockquote: ra, align: ua, font: ca, fontSize: da, fontColor: fa, hiliteColor: ha, horizontalRule: pa, list: ma, table: ga, formatBlock: va, lineHeight: ba, template: ya, paragraphStyle: _a, textStyle: Ca, link: Ta, image: Da, video: Va, audio: Oa, math: Ha, imageGallery: $a }, qa = {
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
}, Pl = {
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
}, de = {
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
      return de.camelToKebabCase(t);
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
      return de.camelToKebabCase(t);
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
    for (let g = 0, c = e.length; g < c; g++)
      u += e[g] + (g < c - 1 ? "|" : ")");
    const f = new this._w.RegExp("(^|.*[\\/])" + u + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), o = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let g = this._d.getElementsByTagName(l), c = 0; c < g.length; c++)
      o.test(g[c][a]) && n.push(g[c]);
    for (let g = 0; g < n.length; g++) {
      let c = n[g][a].match(f);
      if (c) {
        i = c[0];
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
        for (let u = 0, f = a.length; u < f; u++)
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
          let u = null, f = null;
          i.s = i.e = 0;
          let o = a.previousSibling;
          for (; o && o.nodeType === 3; )
            f = o.textContent.replace(this.zeroWidthRegExp, ""), i.s += f.length, a.textContent = f + a.textContent, u = o, o = o.previousSibling, this.removeItem(u);
          let g = a.nextSibling;
          for (; g && g.nodeType === 3; )
            f = g.textContent.replace(this.zeroWidthRegExp, ""), i.e += f.length, a.textContent += f, u = g, g = g.nextSibling, this.removeItem(u);
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
    for (let g = 0, c = i.length; g < c; g++)
      i[i[g]] === n[i[g]] && l++;
    const a = e.classList, u = t.classList, f = this._w.RegExp;
    let o = 0;
    for (let g = 0, c = a.length; g < c; g++)
      f("(s|^)" + a[g] + "(s|$)").test(u.value) && o++;
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
      n = function(f) {
        return u.test(f[a]);
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
      if (!de.isWysiwygDiv(a)) {
        const u = a.parentNode;
        u && t(a) && (n = {
          sc: a.previousElementSibling,
          ec: a.nextElementSibling
        }, de.removeItem(a), l(u));
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
      a = this.getListChildren(e, (function(f) {
        return this.isListCell(f) && !f.previousElementSibling && this.getElementDepth(f) === u;
      }).bind(this));
    }
    for (let u = 0, f = a.length; u < f; u++)
      this._deleteNestedList(a[u]);
    return i && (i.parentNode.insertBefore(n, i.nextSibling), l && l.length === 0 && this.removeItem(i)), n === e ? n.parentNode : n;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let i = t, n = i.parentNode, l, a, u, f, o;
    for (; this.isListCell(n); ) {
      for (f = this.getPositionIndex(e), l = n.nextElementSibling, a = n.parentNode, u = i; u; ) {
        if (i = i.nextSibling, this.isList(u)) {
          for (o = u.childNodes; o[f]; )
            a.insertBefore(o[f], l);
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
      const x = e.childNodes;
      let w = this.getPositionIndex(t);
      const k = e.cloneNode(!1), z = e.cloneNode(!1);
      for (let s = 0, r = x.length; s < r; s++) {
        if (s < w) k.appendChild(x[s]);
        else if (s > w) z.appendChild(x[s]);
        else continue;
        s--, r--, w--;
      }
      return k.childNodes.length > 0 && e.parentNode.insertBefore(k, e), z.childNodes.length > 0 && e.parentNode.insertBefore(z, e.nextElementSibling), e;
    }
    const n = e.parentNode;
    let l = 0, a = 1, u = !0, f, o, g;
    if ((!i || i < 0) && (i = 0), e.nodeType === 3) {
      if (l = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const x = this.getNodeFromPath([l + 1], n);
        this.onlyZeroWidthSpace(x) && (x.data = this.zeroWidthSpace);
      }
    } else if (e.nodeType === 1) {
      if (t === 0) {
        for (; e.firstChild; )
          e = e.firstChild;
        if (e.nodeType === 3) {
          const x = this.createTextNode(this.zeroWidthSpace);
          e.parentNode.insertBefore(x, e), e = x;
        }
      }
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === i && (u = !1);
    }
    e.nodeType === 1 && (a = 0);
    let c = e;
    for (; this.getElementDepth(c) > i; )
      for (l = this.getPositionIndex(c) + a, c = c.parentNode, g = f, f = c.cloneNode(!1), o = c.childNodes, g && (this.isListCell(f) && this.isList(g) && g.firstElementChild ? (f.innerHTML = g.firstElementChild.innerHTML, de.removeItem(g.firstElementChild), g.children.length > 0 && f.appendChild(g)) : f.appendChild(g)); o[l]; )
        f.appendChild(o[l]);
    c.childNodes.length <= 1 && (!c.firstChild || c.firstChild.textContent.length === 0) && (c.innerHTML = "<br>");
    const b = c.parentNode;
    return u && (c = c.nextSibling), f ? (this.mergeSameTags(f, null, !1), this.mergeNestedTags(f, (function(x) {
      return this.isList(x);
    }).bind(this)), f.childNodes.length > 0 ? b.insertBefore(f, c) : f = c, this.isListCell(f) && f.children && this.isList(f.children[0]) && f.insertBefore(this.createElement("BR"), f.children[0]), n.childNodes.length === 0 && this.removeItem(n), f) : c;
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
    return l && (a = this._w.Array.apply(null, new this._w.Array(l)).map(this._w.Number.prototype.valueOf, 0)), function u(f, o, g) {
      const c = f.childNodes;
      for (let b = 0, x = c.length, w, k; b < x && (w = c[b], k = c[b + 1], !!w); b++)
        if (!(n.isBreak(w) || n.isMedia(w) || n.isInputElement(w))) {
          if (i && n._isIgnoreNodeChange(w) || !i && (n.isTable(w) || n.isListCell(w) || n.isFormatElement(w) && !n.isFreeFormatElement(w))) {
            (n.isTable(w) || n.isListCell(w)) && u(w, o + 1, b);
            continue;
          }
          if (x === 1 && f.nodeName === w.nodeName && f.parentNode) {
            if (l) {
              let z, s, r, d, h;
              for (let p = 0; p < l; p++)
                if (z = t[p], z && z[o] === b) {
                  for (s = w, r = f, d = o, h = !0; d >= 0; ) {
                    if (n.getArrayIndex(r.childNodes, s) !== z[d]) {
                      h = !1;
                      break;
                    }
                    s = w.parentNode, r = s.parentNode, d--;
                  }
                  h && (z.splice(o, 1), z[o] = b);
                }
            }
            n.copyTagAttributes(w, f), f.parentNode.insertBefore(w, f), n.removeItem(f);
          }
          if (!k) {
            w.nodeType === 1 && u(w, o + 1, b);
            break;
          }
          if (w.nodeName === k.nodeName && n.isSameAttributes(w, k) && w.href === k.href) {
            const z = w.childNodes;
            let s = 0;
            for (let p = 0, v = z.length; p < v; p++)
              z[p].textContent.length > 0 && s++;
            const r = w.lastChild, d = k.firstChild;
            let h = 0;
            if (r && d) {
              const p = r.nodeType === 3 && d.nodeType === 3;
              h = r.textContent.length;
              let v = r.previousSibling;
              for (; v && v.nodeType === 3; )
                h += v.textContent.length, v = v.previousSibling;
              if (s > 0 && r.nodeType === 3 && d.nodeType === 3 && (r.textContent.length > 0 || d.textContent.length > 0) && s--, l) {
                let m = null;
                for (let y = 0; y < l; y++)
                  if (m = t[y], m && m[o] > b) {
                    if (o > 0 && m[o - 1] !== g) continue;
                    m[o] -= 1, m[o + 1] >= 0 && m[o] === b && (m[o + 1] += s, p && r && r.nodeType === 3 && d && d.nodeType === 3 && (a[y] += h));
                  }
              }
            }
            if (w.nodeType === 3) {
              if (h = w.textContent.length, w.textContent += k.textContent, l) {
                let p = null;
                for (let v = 0; v < l; v++)
                  if (p = t[v], p && p[o] > b) {
                    if (o > 0 && p[o - 1] !== g) continue;
                    p[o] -= 1, p[o + 1] >= 0 && p[o] === b && (p[o + 1] += s, a[v] += h);
                  }
              }
            } else
              w.innerHTML += k.innerHTML;
            n.removeItem(k), b--;
          } else w.nodeType === 1 && u(w, o + 1, b);
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
        for (let f = 0, o = u.length, g = 0; f < o; f++)
          !u[f + g] || n.isComponent(u[f + g]) || (g += l(u[f + g]));
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
    const a = [], u = [], f = [], o = [], g = this.getListChildNodes(e, (function(b) {
      if (b.nodeType !== 1)
        return this.isList(b.parentElement) && a.push(b), !1;
      if (i.test(b.nodeName) || !t.test(b.nodeName) && b.childNodes.length === 0 && this.isNotCheckingNode(b))
        return a.push(b), !1;
      const x = !this.getParentElement(b, this.isNotCheckingNode);
      if (!this.isTable(b) && !this.isListCell(b) && !this.isAnchor(b) && (this.isFormatElement(b) || this.isRangeFormatElement(b) || this.isTextStyleElement(b)) && b.childNodes.length === 0 && x)
        return u.push(b), !1;
      if (this.isList(b.parentNode) && !this.isList(b) && !this.isListCell(b))
        return f.push(b), !1;
      if (this.isCell(b)) {
        const k = b.firstElementChild;
        if (!this.isFormatElement(k) && !this.isRangeFormatElement(k) && !this.isComponent(k))
          return o.push(b), !1;
      }
      if (x && b.className) {
        const k = new this._w.Array(b.classList).map(n).join(" ").trim();
        k ? b.className = k : b.removeAttribute("class");
      }
      return l && b.parentNode !== e && x && (this.isListCell(b) && !this.isList(b.parentNode) || (this.isFormatElement(b) || this.isComponent(b)) && !this.isRangeFormatElement(b.parentNode) && !this.getParentElement(b, this.isComponent));
    }).bind(this));
    for (let b = 0, x = a.length; b < x; b++)
      this.removeItem(a[b]);
    const c = [];
    for (let b = 0, x = g.length, w, k; b < x; b++)
      if (w = g[b], k = w.parentNode, !(!k || !k.parentNode))
        if (this.getParentElement(w, this.isListCell)) {
          const z = w.childNodes;
          for (let s = z.length - 1; x >= 0; s--)
            k.insertBefore(w, z[s]);
          c.push(w);
        } else
          k.parentNode.insertBefore(w, k), c.push(k);
    for (let b = 0, x = c.length, w; b < x; b++)
      w = c[b], this.onlyZeroWidthSpace(w.textContent.trim()) && this.removeItem(w);
    for (let b = 0, x = u.length; b < x; b++)
      this.removeItem(u[b]);
    for (let b = 0, x = f.length, w, k, z, s; b < x; b++)
      if (w = f[b], s = w.parentNode, !!s)
        if (k = this.createElement("LI"), this.isFormatElement(w)) {
          for (z = w.childNodes; z[0]; )
            k.appendChild(z[0]);
          s.insertBefore(k, w), this.removeItem(w);
        } else
          w = w.nextSibling, k.appendChild(f[b]), s.insertBefore(k, w);
    for (let b = 0, x = o.length, w, k; b < x; b++)
      w = o[b], k = this.createElement("DIV"), k.innerHTML = w.textContent.trim().length === 0 && w.children.length === 0 ? "<br>" : w.innerHTML, w.innerHTML = k.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let i = "";
    e.height && (i += "height:" + e.height + ";"), e.minHeight && (i += "min-height:" + e.minHeight + ";"), e.maxHeight && (i += "max-height:" + e.maxHeight + ";"), e.position && (i += "position:" + e.position + ";"), e.width && (i += "width:" + e.width + ";"), e.minWidth && (i += "min-width:" + e.minWidth + ";"), e.maxWidth && (i += "max-width:" + e.maxWidth + ";");
    let n = "", l = "", a = "";
    t = i + t;
    const u = t.split(";");
    for (let f = 0, o = u.length, g; f < o; f++)
      if (g = u[f].trim(), !!g) {
        if (/^(min-|max-)?width\s*:/.test(g) || /^(z-index|position)\s*:/.test(g)) {
          n += g + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(g)) {
          /^height/.test(g) && g.split(":")[1].trim() === "auto" && (e.height = "auto"), l += g + ";";
          continue;
        }
        a += g + ";";
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
        const f = new i("(^|.*[\\/])" + t[l] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let o = document.getElementsByTagName("link"), g = 0, c = o.length, b; g < c; g++)
          b = o[g].href.match(f), b && u.push(b[0]);
      }
      if (!u || u.length === 0) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
      for (let f = 0, o = u.length; f < o; f++)
        n += '<link href="' + u[f] + '" rel="stylesheet">';
    }
    return n + (e.height === "auto" ? `<style>
/** Iframe height auto */
body{height: min-content; overflow: hidden;}
</style>` : "");
  }
}, Hi = {
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
    const f = i.createElement("DIV");
    f.className = "se-arrow";
    const o = i.createElement("DIV");
    o.className = "se-toolbar-sticky-dummy";
    const g = i.createElement("DIV");
    g.className = "se-wrapper";
    const c = this._initElements(t, n, a.element, f), b = c.bottomBar, x = c.wysiwygFrame, w = c.placeholder;
    let k = c.codeView;
    const z = b.resizingBar, s = b.navigation, r = b.charWrapper, d = b.charCounter, h = i.createElement("DIV");
    h.className = "se-loading-box sun-editor-common", h.innerHTML = '<div class="se-loading-effect"></div>';
    const p = i.createElement("DIV");
    p.className = "se-line-breaker", p.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const v = i.createElement("DIV");
    v.className += "se-line-breaker-component";
    const m = v.cloneNode(!0);
    v.innerHTML = m.innerHTML = t.icons.line_break;
    const y = i.createElement("DIV");
    y.className = "se-resizing-back";
    const C = i.createElement("INPUT");
    C.tabIndex = -1, C.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const _ = t.toolbarContainer;
    _ && (_.appendChild(a.element), _.appendChild(u));
    const S = t.resizingBarContainer;
    return z && S && S.appendChild(z), g.appendChild(k), w && g.appendChild(w), _ || (l.appendChild(a.element), l.appendChild(u)), l.appendChild(o), l.appendChild(g), l.appendChild(y), l.appendChild(h), l.appendChild(p), l.appendChild(v), l.appendChild(m), l.appendChild(C), z && !S && l.appendChild(z), n.appendChild(l), k = this._checkCodeMirror(t, k), {
      constructed: {
        _top: n,
        _relative: l,
        _toolBar: a.element,
        _toolbarShadow: u,
        _menuTray: a._menuTray,
        _editorArea: g,
        _wysiwygArea: x,
        _codeArea: k,
        _placeholder: w,
        _resizingBar: z,
        _navigation: s,
        _charWrapper: r,
        _charCounter: d,
        _loading: h,
        _lineBreaker: p,
        _lineBreaker_t: v,
        _lineBreaker_b: m,
        _resizeBack: y,
        _stickyDummy: o,
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
      const i = [{
        mode: "htmlmixed",
        htmlMode: !0,
        lineNumbers: !0,
        lineWrapping: !0
      }, e.codeMirror.options || {}].reduce(function(l, a) {
        for (let u in a)
          de.hasOwn(a, u) && (l[u] = a[u]);
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
        de.hasOwn(n, l) && (i[l] = n[l]);
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
    const n = t.element, l = n.relative, a = n.editorArea, u = e.toolbarContainer && e.toolbarContainer !== i.toolbarContainer, f = e.lang !== i.lang || e.buttonList !== i.buttonList || e.mode !== i.mode || u, o = this._createToolBar(document, f ? e.buttonList : i.buttonList, e.plugins, e);
    o.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const g = document.createElement("DIV");
    g.className = "se-arrow", f && (o.element.style.visibility = "hidden", u ? (e.toolbarContainer.appendChild(o.element), n.toolbar.parentElement.removeChild(n.toolbar)) : n.toolbar.parentElement.replaceChild(o.element, n.toolbar), n.toolbar = o.element, n._menuTray = o._menuTray, n._arrow = g);
    const c = this._initElements(e, n.topArea, f ? o.element : n.toolbar, g), b = c.bottomBar, x = c.wysiwygFrame, w = c.placeholder;
    let k = c.codeView;
    return n.resizingBar && de.removeItem(n.resizingBar), b.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(b.resizingBar) : l.appendChild(b.resizingBar)), a.innerHTML = "", a.appendChild(k), w && a.appendChild(w), k = this._checkCodeMirror(e, k), n.resizingBar = b.resizingBar, n.navigation = b.navigation, n.charWrapper = b.charWrapper, n.charCounter = b.charCounter, n.wysiwygFrame = x, n.code = k, n.placeholder = w, e.rtl ? de.addClass(n.topArea, "se-rtl") : de.removeClass(n.topArea, "se-rtl"), {
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
      for (let b in e.iframeAttributes)
        l.setAttribute(b, e.iframeAttributes[b]);
      l.className += " " + e._editableClass, l.style.cssText = e._editorStyles.frame + e._editorStyles.editor, l.className += e.className;
    }
    const a = document.createElement("TEXTAREA");
    a.className = "se-wrapper-inner se-wrapper-code" + e.className, a.style.cssText = e._editorStyles.frame, a.style.display = "none", e.height === "auto" && (a.style.overflow = "hidden");
    let u = null, f = null, o = null, g = null;
    if (e.resizingBar && (u = document.createElement("DIV"), u.className = "se-resizing-bar sun-editor-common", f = document.createElement("DIV"), f.className = "se-navigation sun-editor-common", u.appendChild(f), e.charCounter)) {
      if (o = document.createElement("DIV"), o.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const b = document.createElement("SPAN");
        b.className = "se-char-label", b.textContent = e.charCounterLabel, o.appendChild(b);
      }
      if (g = document.createElement("SPAN"), g.className = "se-char-counter", g.textContent = "0", o.appendChild(g), e.maxCharCount > 0) {
        const b = document.createElement("SPAN");
        b.textContent = " / " + e.maxCharCount, o.appendChild(b);
      }
      u.appendChild(o);
    }
    let c = null;
    return e.placeholder && (c = document.createElement("SPAN"), c.className = "se-placeholder", c.innerText = e.placeholder), {
      bottomBar: {
        resizingBar: u,
        navigation: f,
        charWrapper: o,
        charCounter: g
      },
      wysiwygFrame: l,
      codeView: a,
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
    const i = {};
    if (t.plugins) {
      const a = t.plugins, u = a.length ? a : Object.keys(a).map(function(f) {
        return a[f];
      });
      for (let f = 0, o = u.length, g; f < o; f++)
        g = u[f].default || u[f], i[g.name] = g;
    }
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || Ei, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new de._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const n = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(a, u) {
      for (let f in u)
        a[f] = u[f];
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
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : l) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? de.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? de.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? de.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = de.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? de.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (de.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (de.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? de.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (de.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (de.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? de.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? de.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? de.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryData = t.imageGalleryData || null, t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !de.getNumber(t.videoWidth, 0) ? "" : de.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !de.getNumber(t.videoHeight, 0) ? "" : de.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = de.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.vimeoQuery = (t.vimeoQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? de.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? de.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? de.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? de.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? Pl : [Pl, t.icons].reduce(function(a, u) {
      for (let f in u)
        de.hasOwn(u, f) && (a[f] = u[f]);
      return a;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(a, u) {
      for (let f in u)
        de.hasOwn(u, f) && (a[f] = u[f]);
      return a;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = de._setDefaultOptionStyle(t, t.defaultStyle);
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
    const t = e.icons, i = e.lang, n = de.isOSX_IOS ? "⌘" : "CTRL", l = de.isOSX_IOS ? "⇧" : "+SHIFT", a = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], u = e.rtl ? ["[", "]"] : ["]", "["], f = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", i.toolbar.bold + '<span class="se-shortcut">' + (a.indexOf("bold") > -1 ? "" : n + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", i.toolbar.underline + '<span class="se-shortcut">' + (a.indexOf("underline") > -1 ? "" : n + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", i.toolbar.italic + '<span class="se-shortcut">' + (a.indexOf("italic") > -1 ? "" : n + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", i.toolbar.strike + '<span class="se-shortcut">' + (a.indexOf("strike") > -1 ? "" : n + l + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", i.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", i.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", i.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", i.toolbar.indent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : n + '+<span class="se-shortcut-key">' + u[0] + "</span>") + "</span>", "indent", "", f[0]],
      outdent: ["", i.toolbar.outdent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : n + '+<span class="se-shortcut-key">' + u[1] + "</span>") + "</span>", "outdent", "", f[1]],
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
    const e = de.createElement("DIV");
    e.className = "se-btn-module se-btn-module-border";
    const t = de.createElement("UL");
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
    const f = de.createElement("LI"), o = de.createElement("BUTTON"), g = t || i;
    return o.setAttribute("type", "button"), o.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), o.setAttribute("data-command", i), o.setAttribute("data-display", n), o.setAttribute("aria-label", g.replace(/<span .+<\/span>/, "")), o.setAttribute("tabindex", "-1"), l || (l = '<span class="se-icon-text">!</span>'), /^default\./i.test(l) && (l = u[l.replace(/^default\./i, "")]), /^text\./i.test(l) && (l = l.replace(/^text\./i, ""), o.className += " se-btn-more-text"), l += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + g + "</span></span>", a && o.setAttribute("disabled", !0), o.innerHTML = l, f.appendChild(o), {
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
  _createToolBar: function(e, t, i, n) {
    const l = e.createElement("DIV");
    l.className = "se-toolbar-separator-vertical";
    const a = e.createElement("DIV");
    a.className = "se-toolbar sun-editor-common";
    const u = e.createElement("DIV");
    u.className = "se-btn-tray", a.appendChild(u), t = JSON.parse(JSON.stringify(t));
    const f = n.icons, o = this._defaultButtons(n), g = {}, c = [];
    let b = null, x = null, w = null, k = null, z = "", s = !1;
    const r = de.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let p = 0, v, m, y, C, _; p < t.length; p++)
        if (v = !1, _ = "", C = t[p], w = this._createModuleGroup(), typeof C == "object") {
          for (let S = 0, I; S < C.length; S++) {
            if (x = C[S], I = !1, /^\%\d+/.test(x) && S === 0) {
              C[0] = x.replace(/[^\d]/g, ""), c.push(C), t.splice(p--, 1);
              continue e;
            }
            if (typeof x == "object")
              typeof x.add == "function" ? (z = x.name, b = o[z], i[z] = x) : (z = x.name, b = [x.buttonClass, x.title, x.name, x.dataDisplay, x.innerHTML, x._disabled]);
            else {
              if (/^\-/.test(x)) {
                _ = x.substr(1), w.div.className += " module-float-" + _;
                continue;
              }
              if (/^\#/.test(x)) {
                x.substr(1) === "fix" && (w.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(x)) {
                I = !0;
                const E = x.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + E[1].trim();
                const B = E[2].trim(), A = E[3].trim();
                b = ["se-btn-more", B, y, "MORE", A];
              } else
                b = o[x];
              if (z = x, !b) {
                const E = i[z];
                if (!E) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + z + "]");
                b = [E.buttonClass, E.title, E.name, E.display, E.innerHTML, E._disabled];
              }
            }
            k = this._createButton(b[0], b[1], b[2], b[3], b[4], b[5], f), (v ? m : w.ul).appendChild(k.li), i[z] && (g[z] = k.button), I && (v = !0, m = de.createElement("DIV"), m.className = "se-more-layer " + y, m.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (_ ? ' style="float: ' + _ + ';"' : "") + "></ul></div>", r.appendChild(m), m = m.firstElementChild.firstElementChild);
          }
          if (s) {
            const S = l.cloneNode(!1);
            u.appendChild(S);
          }
          u.appendChild(w.div), s = !0;
        } else if (/^\/$/.test(C)) {
          const S = e.createElement("DIV");
          S.className = "se-btn-module-enter", u.appendChild(S), s = !1;
        }
    switch (u.children.length) {
      case 0:
        u.style.display = "none";
        break;
      case 1:
        de.removeClass(u.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (n.rtl) {
          const p = l.cloneNode(!1);
          p.style.float = u.lastElementChild.style.float, u.appendChild(p);
        }
    }
    c.length > 0 && c.unshift(t), r.children.length > 0 && u.appendChild(r);
    const d = e.createElement("DIV");
    d.className = "se-menu-tray", a.appendChild(d);
    const h = e.createElement("DIV");
    return h.className = "se-toolbar-cover", a.appendChild(h), n.hideToolbar && (a.style.display = "none"), {
      element: a,
      plugins: i,
      pluginCallButtons: g,
      responsiveButtons: c,
      _menuTray: d,
      _buttonTray: u
    };
  }
}, Fi = function(e, t, i) {
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
function ja(e, t) {
  const i = e._w, n = e.util, l = e.options.historyStackDelayTime;
  let a = e.context.element, u = e.context.tool.undo, f = e.context.tool.redo, o = null, g = 0, c = [];
  function b() {
    const w = c[g];
    a.wysiwyg.innerHTML = w.contents, e.setRange(n.getNodeFromPath(w.s.path, a.wysiwyg), w.s.offset, n.getNodeFromPath(w.e.path, a.wysiwyg), w.e.offset), e.focus(), c.length <= 1 ? (u && u.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0)) : g === 0 ? (u && u.setAttribute("disabled", !0), f && f.removeAttribute("disabled")) : g === c.length - 1 ? (u && u.removeAttribute("disabled"), f && f.setAttribute("disabled", !0)) : (u && u.removeAttribute("disabled"), f && f.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function x() {
    e._checkComponents();
    const w = a.wysiwyg.innerHTML;
    if (!w || c[g] && w === c[g].contents) return;
    g++;
    const k = e._variable._range;
    c.length > g && (c = c.slice(0, g), f && f.setAttribute("disabled", !0)), k ? c[g] = {
      contents: w,
      s: {
        path: n.getNodePath(k.startContainer, null, null),
        offset: k.startOffset
      },
      e: {
        path: n.getNodePath(k.endContainer, null, null),
        offset: k.endOffset
      }
    } : c[g] = {
      contents: w,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, g === 1 && u && u.removeAttribute("disabled"), e._setCharCount(), t();
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
    push: function(w) {
      i.setTimeout(e._resourcesStateChange.bind(e));
      const k = typeof w == "number" ? w > 0 ? w : 0 : w ? l : 0;
      if ((!k || o) && (i.clearTimeout(o), !k)) {
        x();
        return;
      }
      o = i.setTimeout(function() {
        i.clearTimeout(o), o = null, x();
      }, k);
    },
    /**
     * @description Undo function
     */
    undo: function() {
      g > 0 && (g--, b());
    },
    /**
     * @description Redo function
     */
    redo: function() {
      c.length - 1 > g && (g++, b());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(w) {
      g = w < 0 ? c.length - 1 : w, b();
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
    reset: function(w) {
      u && u.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), c.splice(0), g = 0, c[g] = {
        contents: e.getContents(!0),
        s: {
          path: [0, 0],
          offset: 0
        },
        e: {
          path: [0, 0],
          offset: 0
        }
      }, w || t();
    },
    /**
     * @description Reset the disabled state of the buttons to fit the current stack.
     * @private
     */
    _resetCachingButton: function() {
      a = e.context.element, u = e.context.tool.undo, f = e.context.tool.redo, g === 0 ? (u && u.setAttribute("disabled", !0), f && g === c.length - 1 && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : g === c.length - 1 && f && f.setAttribute("disabled", !0);
    },
    /**
     * @description Remove all stacks and remove the timeout function.
     * @private
     */
    _destroy: function() {
      o && i.clearTimeout(o), c = null;
    }
  };
}
const Wl = {
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
function Ga(e, t, i, n, l, a) {
  const u = e.element.originElement.ownerDocument || document, f = u.defaultView || window, o = de, g = l.icons, c = {
    _d: u,
    _w: f,
    _parser: new f.DOMParser(),
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
    notice: Wl,
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
      div: new f.RegExp("\\s*[^-a-zA-Z](.+)\\s*:[^;]+(?!;)*", "ig"),
      span: new f.RegExp("\\s*[^-a-zA-Z](font-family|font-size|color|background-color)\\s*:[^;]+(?!;)*", "ig"),
      format: new f.RegExp("\\s*[^-a-zA-Z](text-align|margin-left|margin-right|width|height|line-height)\\s*:[^;]+(?!;)*", "ig"),
      fontSizeUnit: new f.RegExp("\\d+" + l.fontSizeUnit + "$", "i")
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
      for (let r = 0, d, h; r < s.length; r++)
        d = s[r], h = d.getAttribute("data-command"), this.allCommandButtons[h] = d;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const s = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let r = 0, d, h, p; r < s.length; r++)
          d = s[r], h = d.getAttribute("data-command"), p = this.allCommandButtons[h], p && (d.parentElement.replaceChild(p, d), this.context.tool[h] && (this.context.tool[h] = p));
      }
    },
    /**
     * @description If the plugin is not added, add the plugin and call the 'add' function.
     * If the plugin is added call callBack function.
     * @param {String} pluginName The name of the plugin to call
     * @param {function} callBackFunction Function to be executed immediately after module call
     * @param {Element|null} _target Plugin target button (This is not necessary if you have a button list when creating the editor)
     */
    callPlugin: function(s, r, d) {
      if (d = d || t[s], this.plugins[s])
        this.initPlugins[s] ? typeof this._targetPlugins[s] == "object" && d && this.initMenuTarget(s, d, this._targetPlugins[s]) : (this.plugins[s].add(this, d), this.initPlugins[s] = !0);
      else throw Error('[SUNEDITOR.core.callPlugin.fail] The called plugin does not exist or is in an invalid format. (pluginName:"' + s + '")');
      this.plugins[s].active && !this.commandMap[s] && d && (this.commandMap[s] = d, this.activePlugins.push(s)), typeof r == "function" && r();
    },
    /**
     * @description If the module is not added, add the module and call the 'add' function
     * @param {Array} moduleArray module object's Array [dialog, resizing]
     */
    addModule: function(s) {
      for (let r = 0, d = s.length, h; r < d; r++)
        h = s[r].name, this.plugins[h] || (this.plugins[h] = s[r]), this.initPlugins[h] || (this.initPlugins[h] = !0, typeof this.plugins[h].add == "function" && this.plugins[h].add(this));
    },
    /**
     * @description Gets the current editor-relative scroll offset.
     * @returns {Object} {top, left}
     */
    getGlobalScrollOffset: function() {
      let s = 0, r = 0, d = e.element.topArea;
      for (; d; )
        s += d.scrollTop, r += d.scrollLeft, d = d.parentElement;
      for (d = this._shadowRoot ? this._shadowRoot.host : null; d; )
        s += d.scrollTop, r += d.scrollLeft, d = d.parentElement;
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
    initMenuTarget: function(s, r, d) {
      r ? (e.element._menuTray.appendChild(d), this._targetPlugins[s] = !0, this._menuTray[r.getAttribute("data-command")] = d) : this._targetPlugins[s] = d;
    },
    /**
     * @description Enable submenu
     * @param {Element} element Submenu's button element to call
     */
    submenuOn: function(s) {
      this._bindedSubmenuOff && this._bindedSubmenuOff(), this._bindControllersOff && this.controllersOff();
      const r = this._submenuName = s.getAttribute("data-command"), d = this.submenu = this._menuTray[r];
      this.submenuActiveButton = s, this._setMenuPosition(s, d), this._bindedSubmenuOff = this.submenuOff.bind(this), this.addDocEvent("mousedown", this._bindedSubmenuOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
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
      const r = this._containerName = s.getAttribute("data-command"), d = this.container = this._menuTray[r];
      this.containerActiveButton = s, this._setMenuPosition(s, d), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
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
      const d = this.context.element.toolbar, h = d.offsetWidth, p = b._getEditorOffsets(e.element.toolbar), v = r.offsetWidth, m = s.parentElement.offsetLeft + 3;
      if (l.rtl) {
        const A = s.offsetWidth, q = v > A ? v - A : 0, Z = q > 0 ? 0 : A - v;
        r.style.left = m - q + Z + "px", p.left > b._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const A = h <= v ? 0 : h - (m + v);
        A < 0 ? r.style.left = m + A + "px" : r.style.left = m + "px";
      }
      let y = 0, C = s;
      for (; C && C !== d; )
        y += C.offsetTop, C = C.offsetParent;
      const _ = y;
      this._isBalloon ? y += d.offsetTop + s.offsetHeight : y -= s.offsetHeight;
      const S = p.top, I = r.offsetHeight, E = this.getGlobalScrollOffset().top, B = f.innerHeight - (S - E + _ + s.parentElement.offsetHeight);
      if (B < I) {
        let A = -1 * (I - _ + 3);
        const q = S - E + A, Z = I + (q < 0 ? q : 0);
        Z > B ? (r.style.height = Z + "px", A = -1 * (Z - _ + 3)) : (r.style.height = B + "px", A = _ + s.parentElement.offsetHeight), r.style.top = A + "px";
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
          r.style && (r.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(r) === -1 && (r.addEventListener("mousedown", function(d) {
            d.preventDefault(), d.stopPropagation();
          }), this._shadowRootControllerEventTarget.push(r))), this.controllerArray.push(r);
        }
      this._bindControllersOff = this.controllersOff.bind(this), this.addDocEvent("mousedown", this._bindControllersOff, !1), this.addDocEvent("keydown", this._bindControllersOff, !1), this._antiBlur = !0, typeof x.showController == "function" && x.showController(this.currentControllerName, this.controllerArray, this);
    },
    /**
     * @description Hide controller at editor area (link button, image resize button..)
     * @param {KeyboardEvent|MouseEvent|null} e Event object when called from mousedown and keydown events registered in "core.controllersOn"
     */
    controllersOff: function(s) {
      this._lineBreaker.style.display = "none";
      const r = this.controllerArray.length;
      if (s && s.target && r > 0) {
        for (let d = 0; d < r; d++)
          if (typeof this.controllerArray[d].contains == "function" && this.controllerArray[d].contains(s.target)) return;
      }
      if (!(this._fileManager.pluginRegExp.test(this.currentControllerName) && s && s.type === "keydown" && s.keyCode !== 27) && (e.element.lineBreaker_t.style.display = e.element.lineBreaker_b.style.display = "none", this._variable._lineBreakComp = null, this.currentControllerName = "", this.currentControllerTarget = null, this.currentFileComponentInfo = null, this.effectNode = null, !!this._bindControllersOff)) {
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
    setControllerPosition: function(s, r, d, h) {
      l.rtl && (h.left *= -1);
      const p = o.getOffset(r, e.element.wysiwygFrame);
      s.style.visibility = "hidden", s.style.display = "block";
      const v = d === "top" ? -(s.offsetHeight + 2) : r.offsetHeight + 12;
      s.style.top = p.top + v + h.top + "px";
      const m = p.left - e.element.wysiwygFrame.scrollLeft + h.left, y = s.offsetWidth, C = r.offsetWidth, _ = o.hasClass(s.firstElementChild, "se-arrow") ? s.firstElementChild : null;
      if (l.rtl) {
        const S = y > C ? y - C : 0, I = S > 0 ? 0 : C - y;
        s.style.left = m - S + I + "px", S > 0 && _ && (_.style.left = (y - 14 < 10 + S ? y - 14 : 10 + S) + "px");
        const E = e.element.wysiwygFrame.offsetLeft - s.offsetLeft;
        E > 0 && (s.style.left = "0px", _ && (_.style.left = E + "px"));
      } else {
        s.style.left = m + "px";
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
    execCommand: function(s, r, d) {
      this._wd.execCommand(s, r, s === "formatBlock" ? "<" + d + ">" : d), this.history.push(!0);
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
                const d = o.createElement(l.defaultTag), h = o.createElement("BR");
                d.appendChild(h), e.element.wysiwyg.insertBefore(d, r), this.setRange(h, 0, h, 0);
                return;
              }
            }
            this.setRange(s.startContainer, s.startOffset, s.endContainer, s.endOffset);
          } catch {
            this.nativeFocus();
          }
        b._applyTagEffects(), this._isBalloon && b._toggleToolbarBalloon();
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
      r ? this.selectComponent(r.target, r.pluginName) : s ? (s = o.getChildElement(s, function(d) {
        return d.childNodes.length === 0 || d.nodeType === 3;
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
    setRange: function(s, r, d, h) {
      if (!s || !d) return;
      r > s.textContent.length && (r = s.textContent.length), h > d.textContent.length && (h = d.textContent.length), o.isFormatElement(s) && (s = s.childNodes[r] || s.childNodes[r - 1] || s, r = r > 0 ? s.nodeType === 1 ? 1 : s.textContent ? s.textContent.length : 0 : 0), o.isFormatElement(d) && (d = d.childNodes[h] || d.childNodes[h - 1] || d, h = h > 0 ? d.nodeType === 1 ? 1 : d.textContent ? d.textContent.length : 0 : 0);
      const p = this._wd.createRange();
      try {
        p.setStart(s, r), p.setEnd(d, h);
      } catch (m) {
        console.warn("[SUNEDITOR.core.focus.error] " + m), this.nativeFocus();
        return;
      }
      const v = this.getSelection();
      return v.removeAllRanges && v.removeAllRanges(), v.addRange(p), this._rangeInfo(p, this.getSelection()), l.iframe && this.__focus(), p;
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
    getRange_addLine: function(s, r) {
      if (this._selectionVoid(s)) {
        const d = e.element.wysiwyg, h = o.createElement(l.defaultTag);
        h.innerHTML = "<br>", d.insertBefore(h, r && r !== d ? r.nextElementSibling : d.firstElementChild), this.setRange(h.firstElementChild, 0, h.firstElementChild, 1), s = this._variable._range;
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
      let d = null;
      r.rangeCount > 0 ? d = r.getRangeAt(0) : d = this._createDefaultRange(), this._rangeInfo(d, r);
    },
    /**
     * @description Set "range" and "selection" info.
     * @param {Object} range range object.
     * @param {Object} selection selection object.
     */
    _rangeInfo: function(s, r) {
      let d = null;
      this._variable._range = s, s.collapsed ? o.isWysiwygDiv(s.commonAncestorContainer) ? d = s.commonAncestorContainer.children[s.startOffset] || s.commonAncestorContainer : d = s.commonAncestorContainer : d = r.extentNode || r.anchorNode, this._variable._selectionNode = d;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const s = e.element.wysiwyg, r = this._wd.createRange();
      let d = s.firstElementChild, h = null;
      return d ? (h = d.firstChild, h || (h = o.createElement("BR"), d.appendChild(h))) : (d = o.createElement(l.defaultTag), h = o.createElement("BR"), d.appendChild(h), s.appendChild(d)), r.setStart(h, 0), r.setEnd(h, 0), r;
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
      let d = s.startContainer, h = s.startOffset, p = s.endContainer, v = s.endOffset, m, y, C;
      if (o.isFormatElement(d))
        for (d.childNodes[h] ? (d = d.childNodes[h] || d, h = 0) : (d = d.lastChild || d, h = d.textContent.length); d && d.nodeType === 1 && d.firstChild; )
          d = d.firstChild || d, h = 0;
      if (o.isFormatElement(p)) {
        for (p = p.childNodes[v] || p.lastChild || p; p && p.nodeType === 1 && p.lastChild; )
          p = p.lastChild;
        v = r ? 0 : p.textContent.length;
      }
      if (m = o.isWysiwygDiv(d) ? e.element.wysiwyg.firstChild : d, y = h, o.isBreak(m) || m.nodeType === 1 && m.childNodes.length > 0) {
        const _ = o.isBreak(m);
        if (!_) {
          for (; m && !o.isBreak(m) && m.nodeType === 1; )
            m = m.childNodes[y] || m.nextElementSibling || m.nextSibling, y = 0;
          let S = o.getFormatElement(m, null);
          S === o.getRangeFormatElement(S, null) && (S = o.createElement(o.getParentElement(m, o.isCell) ? "DIV" : l.defaultTag), m.parentNode.insertBefore(S, m), S.appendChild(m));
        }
        if (o.isBreak(m)) {
          const S = o.createTextNode(o.zeroWidthSpace);
          m.parentNode.insertBefore(S, m), m = S, _ && d === p && (p = m, v = 1);
        }
      }
      if (d = m, h = y, m = o.isWysiwygDiv(p) ? e.element.wysiwyg.lastChild : p, y = v, o.isBreak(m) || m.nodeType === 1 && m.childNodes.length > 0) {
        const _ = o.isBreak(m);
        if (!_) {
          for (; m && !o.isBreak(m) && m.nodeType === 1 && (C = m.childNodes, C.length !== 0); )
            m = C[y > 0 ? y - 1 : y] || !/FIGURE/i.test(C[0].nodeName) ? C[0] : m.previousElementSibling || m.previousSibling || d, y = y > 0 ? m.textContent.length : y;
          let S = o.getFormatElement(m, null);
          S === o.getRangeFormatElement(S, null) && (S = o.createElement(o.isCell(S) ? "DIV" : l.defaultTag), m.parentNode.insertBefore(S, m), S.appendChild(m));
        }
        if (o.isBreak(m)) {
          const S = o.createTextNode(o.zeroWidthSpace);
          m.parentNode.insertBefore(S, m), m = S, y = 1, _ && !m.previousSibling && o.removeItem(p);
        }
      }
      return p = m, v = y, this.setRange(d, h, p, v), !0;
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
      const d = r.startContainer, h = r.endContainer, p = r.commonAncestorContainer, v = o.getListChildren(p, function(A) {
        return s ? s(A) : o.isFormatElement(A);
      });
      if (!o.isWysiwygDiv(p) && !o.isRangeFormatElement(p) && v.unshift(o.getFormatElement(p, null)), d === h || v.length === 1) return v;
      let m = o.getFormatElement(d, null), y = o.getFormatElement(h, null), C = null, _ = null;
      const S = function(A) {
        return o.isTable(A) ? /^TABLE$/i.test(A.nodeName) : !0;
      };
      let I = o.getRangeFormatElement(m, S), E = o.getRangeFormatElement(y, S);
      o.isTable(I) && o.isListCell(I.parentNode) && (I = I.parentNode), o.isTable(E) && o.isListCell(E.parentNode) && (E = E.parentNode);
      const B = I === E;
      for (let A = 0, q = v.length, Z; A < q; A++) {
        if (Z = v[A], m === Z || !B && Z === I) {
          C = A;
          continue;
        }
        if (y === Z || !B && Z === E) {
          _ = A;
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
      const r = this.getRange().commonAncestorContainer, d = o.getParentElement(r, o.isComponent), h = o.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(p) {
        const v = this.getParentElement(p, this.isComponent);
        return this.isFormatElement(p) && (!v || v === d) || this.isComponent(p) && !this.getFormatElement(p);
      }).bind(o));
      if (s) {
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
    isEdgePoint: function(s, r, d) {
      return s.nodeType === 1 && !s.textContent.length ? !0 : d !== "end" && r === 0 || (!d || d !== "start") && !s.nodeValue && r === 1 || (!d || d === "end") && !!s.nodeValue && r === s.nodeValue.length;
    },
    /**
     * @description Check if the container and offset values are the edges of the format tag
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String} dir Select check point - "start": Front edge, "end": End edge, undefined: Both edge.
     * @returns {Array|null}
     * @private
     */
    _isEdgeFormat: function(s, r, d) {
      if (!this.isEdgePoint(s, r, d)) return !1;
      const h = [];
      for (d = d === "start" ? "previousSibling" : "nextSibling"; s && !o.isFormatElement(s) && !o.isWysiwygDiv(s); )
        if (!s[d] || o.isBreak(s[d]) && !s[d][d])
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
      const d = o.getFormatElement(this.getSelectionNode(), null);
      let h = null;
      if (!o.isFormatElement(s) && o.isFreeFormatElement(d || s.parentNode))
        h = o.createElement("BR");
      else {
        const p = r ? typeof r == "string" ? r : r.nodeName : o.isFormatElement(d) && !o.isRangeFormatElement(d) && !o.isFreeFormatElement(d) ? d.nodeName : l.defaultTag;
        h = o.createElement(p), h.innerHTML = "<br>", (r && typeof r != "string" || !r && o.isFormatElement(d)) && o.copyTagAttributes(h, r || d, ["id"]);
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
    insertComponent: function(s, r, d, h) {
      if (this.isReadOnly || d && !this.checkCharCount(s, null))
        return null;
      const p = this.removeNode();
      this.getRange_addLine(this.getRange(), p.container);
      let v = null, m = this.getSelectionNode(), y = o.getFormatElement(m, null);
      if (o.isListCell(y))
        this.insertNode(s, m === y ? null : p.container.nextSibling, !1), s.nextSibling || s.parentNode.appendChild(o.createElement("BR"));
      else {
        if (this.getRange().collapsed && (p.container.nodeType === 3 || o.isBreak(p.container))) {
          const C = o.getParentElement(p.container, (function(_) {
            return this.isRangeFormatElement(_);
          }).bind(o));
          v = o.splitElement(p.container, p.offset, C ? o.getElementDepth(C) + 1 : 0), v && (y = v.previousSibling);
        }
        this.insertNode(s, o.isRangeFormatElement(y) ? null : y, !1), y && o.onlyZeroWidthSpace(y) && o.removeItem(y);
      }
      if (!h) {
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
      let r, d;
      return (/^FIGURE$/i.test(s.nodeName) || /se-component/.test(s.className)) && (r = s.querySelector(this._fileManager.queryString)), !r && s.nodeName && this._fileManager.regExp.test(s.nodeName) && (r = s), r && (d = this._fileManager.pluginMap[r.nodeName.toLowerCase()], d) ? {
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
    selectComponent: function(s, r) {
      if (o.isUneditableComponent(o.getParentElement(s, o.isComponent)) || o.isUneditableComponent(s)) return !1;
      this.hasFocus || this.focus();
      const d = this.plugins[r];
      d && f.setTimeout((function() {
        typeof d.select == "function" && this.callPlugin(r, d.select.bind(this, s), null), this._setComponentLineBreaker(s);
      }).bind(this));
    },
    /**
     * @description Set line breaker of component
     * @param {Element} element Element tag (img, iframe, video)
     * @private
     */
    _setComponentLineBreaker: function(s) {
      this._lineBreaker.style.display = "none";
      const r = o.getParentElement(s, o.isComponent), d = e.element.lineBreaker_t.style, h = e.element.lineBreaker_b.style, p = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : s, v = o.isListCell(r.parentNode);
      let m, y, C;
      (v ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, m = o.getOffset(s, e.element.wysiwygFrame).top + y, C = p.offsetWidth / 2 / 2, d.top = m - y - 12 + "px", d.left = o.getOffset(p).left + C + "px", d.display = "block") : d.display = "none", (v ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) ? (m || (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, m = o.getOffset(s, e.element.wysiwygFrame).top + y, C = p.offsetWidth / 2 / 2), h.top = m + p.offsetHeight - y - 12 + "px", h.left = o.getOffset(p).left + p.offsetWidth - C - 24 + "px", h.display = "block") : h.display = "none";
    },
    _checkDuplicateNode: function(s, r) {
      (function d(h) {
        c._dupleCheck(h, r);
        const p = h.childNodes;
        for (let v = 0, m = p.length; v < m; v++)
          d(p[v]);
      })(s);
    },
    _dupleCheck: function(s, r) {
      if (!o.isTextStyleElement(s)) return;
      const d = (s.style.cssText.match(/[^;]+;/g) || []).map(function(v) {
        return v.trim();
      }), h = s.nodeName;
      if (/^span$/i.test(h) && d.length === 0) return s;
      let p = !1;
      return function v(m) {
        if (!(o.isWysiwygDiv(m) || !o.isTextStyleElement(m))) {
          if (m.nodeName === h) {
            p = !0;
            const y = m.style.cssText.match(/[^;]+;/g) || [];
            for (let C = 0, _ = y.length, S; C < _; C++)
              (S = d.indexOf(y[C].trim())) > -1 && d.splice(S, 1);
            for (let C = 0, _ = m.classList.length; C < _; C++)
              s.classList.remove(m.classList[C]);
          }
          v(m.parentElement);
        }
      }(r), p && ((s.style.cssText = d.join(" ")) || (s.setAttribute("style", ""), s.removeAttribute("style")), s.attributes.length || s.setAttribute("data-se-duple", "true")), s;
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
    insertNode: function(s, r, d) {
      if (this.isReadOnly || d && !this.checkCharCount(s, null))
        return null;
      let h = null, p = this.getRange(), v = o.isListCell(p.commonAncestorContainer) ? p.commonAncestorContainer : o.getFormatElement(this.getSelectionNode(), null), m = o.isListCell(v) && (o.isListCell(s) || o.isList(s)), y, C, _, S = null;
      const I = o.isFreeFormatElement(v), E = !I && (o.isFormatElement(s) || o.isRangeFormatElement(s)) || o.isComponent(s);
      if (m && (_ = r || o.isList(s) ? v.lastChild : v.nextElementSibling, S = o.isList(s) ? v : (_ || v).parentNode), !r && (E || o.isComponent(s) || o.isMedia(s))) {
        const P = this.isEdgePoint(p.endContainer, p.endOffset, "end"), L = this.removeNode(), O = L.container, R = O === L.prevContainer && p.collapsed ? null : L.prevContainer;
        if (m && R)
          if (S = R.nodeType === 3 ? R.parentNode : R, S.contains(O)) {
            let U = !0;
            for (_ = O; _.parentNode && _.parentNode !== S; )
              _ = _.parentNode, U = !1;
            U && O === R && (_ = _.nextSibling);
          } else
            _ = null;
        else if (m && o.isListCell(O) && !v.parentElement)
          v = o.createElement("LI"), S.appendChild(v), O.appendChild(S), _ = null;
        else if (O.nodeType === 3 || o.isBreak(O) || m) {
          const U = o.getParentElement(O, (function(N) {
            return this.isRangeFormatElement(N) || this.isListCell(N);
          }).bind(o));
          if (r = o.splitElement(O, L.offset, U ? o.getElementDepth(U) + 1 : 0), !r)
            _ = r = v;
          else if (m) {
            if (v.contains(O)) {
              const N = o.isList(v.lastElementChild);
              let V = null;
              P || (V = v.cloneNode(!1), V.appendChild(r.textContent.trim() ? r : o.createTextNode(o.zeroWidthSpace))), N && (V || (V = v.cloneNode(!1), V.appendChild(o.createTextNode(o.zeroWidthSpace))), V.appendChild(v.lastElementChild)), V && (v.parentNode.insertBefore(V, v.nextElementSibling), _ = r = V);
            }
          } else
            r = r.previousSibling;
        }
      }
      p = !r && !E ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const B = p.commonAncestorContainer, A = p.startOffset, q = p.endOffset, Z = p.startContainer === B && o.isFormatElement(B), W = Z && (B.childNodes[A] || B.childNodes[0]) || p.startContainer, D = Z && (B.childNodes[q] || B.childNodes[B.childNodes.length - 1]) || p.endContainer;
      if (!m)
        if (r)
          y = r.parentNode, r = r.nextSibling, C = !0;
        else if (y = W, W.nodeType === 3 && (y = W.parentNode), p.collapsed)
          if (B.nodeType === 3)
            B.textContent.length > q ? r = B.splitText(q) : r = B.nextSibling;
          else if (o.isBreak(y))
            r = y, y = y.parentNode;
          else {
            let P = y.childNodes[A];
            const L = P && P.nodeType === 3 && o.onlyZeroWidthSpace(P) && o.isBreak(P.nextSibling) ? P.nextSibling : P;
            L ? !L.nextSibling && o.isBreak(L) ? (y.removeChild(L), r = null) : r = o.isBreak(L) && !o.isBreak(s) ? L : L.nextSibling : r = null;
          }
        else if (W === D) {
          this.isEdgePoint(D, q) ? r = D.nextSibling : r = D.splitText(q);
          let L = W;
          this.isEdgePoint(W, A) || (L = W.splitText(A)), y.removeChild(L), y.childNodes.length === 0 && E && (y.innerHTML = "<br>");
        } else {
          const L = this.removeNode(), O = L.container, R = L.prevContainer;
          if (O && O.childNodes.length === 0 && E && (o.isFormatElement(O) ? O.innerHTML = "<br>" : o.isRangeFormatElement(O) && (O.innerHTML = "<" + l.defaultTag + "><br></" + l.defaultTag + ">")), o.isListCell(O) && s.nodeType === 3)
            y = O, r = null;
          else if (!E && R)
            if (y = R.nodeType === 3 ? R.parentNode : R, y.contains(O)) {
              let U = !0;
              for (r = O; r.parentNode && r.parentNode !== y; )
                r = r.parentNode, U = !1;
              U && O === R && (r = r.nextSibling);
            } else
              r = null;
          else o.isWysiwygDiv(O) && !o.isFormatElement(s) ? (y = O.appendChild(o.createElement(l.defaultTag)), r = null) : (r = E ? D : O === R ? O.nextSibling : O, y = !r || !r.parentNode ? B : r.parentNode);
          for (; r && !o.isFormatElement(r) && r.parentNode !== B; )
            r = r.parentNode;
        }
      try {
        if (!m) {
          if ((o.isWysiwygDiv(r) || y === e.element.wysiwyg.parentNode) && (y = e.element.wysiwyg, r = null), o.isFormatElement(s) || o.isRangeFormatElement(s) || !o.isListCell(y) && o.isComponent(s)) {
            const P = y;
            if (o.isList(r))
              y = r, r = null;
            else if (o.isListCell(r))
              y = r.previousElementSibling || r;
            else if (!C && !r) {
              const L = this.removeNode(), O = L.container.nodeType === 3 ? o.isListCell(o.getFormatElement(L.container, null)) ? L.container : o.getFormatElement(L.container, null) || L.container.parentNode : L.container, R = o.isWysiwygDiv(O) || o.isRangeFormatElement(O);
              y = R ? O : O.parentNode, r = R ? null : O.nextSibling;
            }
            P.childNodes.length === 0 && y !== P && o.removeItem(P);
          }
          if (E && !I && !o.isRangeFormatElement(y) && !o.isListCell(y) && !o.isWysiwygDiv(y) && (r = y.nextElementSibling, y = y.parentNode), o.isWysiwygDiv(y) && (s.nodeType === 3 || o.isBreak(s))) {
            const P = o.createElement(l.defaultTag);
            P.appendChild(s), h = s, s = P;
          }
        }
        if (m ? S.parentNode ? (y = S, r = _) : (y = e.element.wysiwyg, r = null) : r = y === r ? y.lastChild : r, o.isListCell(s) && !o.isList(y)) {
          if (o.isListCell(y))
            r = y.nextElementSibling, y = y.parentNode;
          else {
            const P = o.createElement("ol");
            y.insertBefore(P, r), y = P, r = null;
          }
          m = !0;
        }
        if (this._checkDuplicateNode(s, y), y.insertBefore(s, r), m)
          if (o.onlyZeroWidthSpace(v.textContent.trim()))
            o.removeItem(v), s = s.lastChild;
          else {
            const P = o.getArrayItem(v.children, o.isList);
            P && (s !== P ? (s.appendChild(P), s = P.previousSibling) : (y.appendChild(s), s = y), o.onlyZeroWidthSpace(v.textContent.trim()) && o.removeItem(v));
          }
      } catch (P) {
        y.appendChild(s), console.warn("[SUNEDITOR.insertNode.warn] " + P);
      } finally {
        h && (s = h);
        const P = y.querySelectorAll("[data-se-duple]");
        if (P.length > 0)
          for (let L = 0, O = P.length, R, U, N, V; L < O; L++) {
            for (R = P[L], N = R.childNodes, V = R.parentNode; N[0]; )
              U = N[0], V.insertBefore(U, R);
            R === s && (s = U), o.removeItem(R);
          }
        if ((o.isFormatElement(s) || o.isComponent(s)) && W === D) {
          const L = o.getFormatElement(B, null);
          L && L.nodeType === 1 && o.isEmptyLine(L) && o.removeItem(L);
        }
        if (I && (o.isFormatElement(s) || o.isRangeFormatElement(s)) && (s = this._setIntoFreeFormat(s)), !o.isComponent(s)) {
          let L = 1;
          if (s.nodeType === 3)
            L = s.textContent.length, this.setRange(s, L, s, L);
          else if (!o.isBreak(s) && !o.isListCell(s) && o.isFormatElement(y)) {
            let O = null;
            (!s.previousSibling || o.isBreak(s.previousSibling)) && (O = o.createTextNode(o.zeroWidthSpace), s.parentNode.insertBefore(O, s)), (!s.nextSibling || o.isBreak(s.nextSibling)) && (O = o.createTextNode(o.zeroWidthSpace), s.parentNode.insertBefore(O, s.nextSibling)), o._isIgnoreNodeChange(s) && (s = s.nextSibling, L = 0);
          }
          this.setRange(s, L, s, L);
        }
        return s;
      }
    },
    _setIntoFreeFormat: function(s) {
      const r = s.parentNode;
      let d, h;
      for (; o.isFormatElement(s) || o.isRangeFormatElement(s); ) {
        for (d = s.childNodes, h = null; d[0]; ) {
          if (h = d[0], o.isFormatElement(h) || o.isRangeFormatElement(h)) {
            if (this._setIntoFreeFormat(h), !s.parentNode) break;
            d = s.childNodes;
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
        const L = o.getParentElement(s.startContainer, o.isMediaComponent);
        if (L) {
          const O = o.createElement("BR"), R = o.createElement(l.defaultTag);
          return R.appendChild(O), o.changeElement(L, R), c.setRange(R, 0, R, 0), this.history.push(!0), {
            container: R,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = s.startOffset === 0, d = c.isEdgePoint(s.endContainer, s.endOffset, "end");
      let h = null, p = null, v = null;
      r && (p = o.getFormatElement(s.startContainer), p && (h = p.previousElementSibling, p = h)), d && (v = o.getFormatElement(s.endContainer), v = v && v.nextElementSibling);
      let m, y = 0, C = s.startContainer, _ = s.endContainer, S = s.startOffset, I = s.endOffset;
      const E = s.commonAncestorContainer.nodeType === 3 && s.commonAncestorContainer.parentNode === C.parentNode ? C.parentNode : s.commonAncestorContainer;
      if (E === C && E === _ && (C = E.children[S], _ = E.children[I], S = I = 0), !C || !_) return {
        container: E,
        offset: 0
      };
      if (C === _ && s.collapsed && C.textContent && o.onlyZeroWidthSpace(C.textContent.substr(S)))
        return {
          container: C,
          offset: S,
          prevContainer: C && C.parentNode ? C : null
        };
      let B = null, A = null;
      const q = o.getListChildNodes(E, null);
      let Z = o.getArrayIndex(q, C), W = o.getArrayIndex(q, _);
      if (q.length > 0 && Z > -1 && W > -1) {
        for (let L = Z + 1, O = C; L >= 0; L--)
          q[L] === O.parentNode && q[L].firstChild === O && S === 0 && (Z = L, O = O.parentNode);
        for (let L = W - 1, O = _; L > Z; L--)
          q[L] === O.parentNode && q[L].nodeType === 1 && (q.splice(L, 1), O = O.parentNode, --W);
      } else {
        if (q.length === 0) {
          if (o.isFormatElement(E) || o.isRangeFormatElement(E) || o.isWysiwygDiv(E) || o.isBreak(E) || o.isMedia(E))
            return {
              container: E,
              offset: 0
            };
          if (E.nodeType === 3)
            return {
              container: E,
              offset: I
            };
          q.push(E), C = _ = E;
        } else if (C = _ = q[0], o.isBreak(C) || o.onlyZeroWidthSpace(C))
          return {
            container: o.isMedia(E) ? E : C,
            offset: 0
          };
        Z = W = 0;
      }
      for (let L = Z; L <= W; L++) {
        const O = q[L];
        if (O.length === 0 || O.nodeType === 3 && O.data === void 0) {
          this._nodeRemoveListItem(O);
          continue;
        }
        if (O === C) {
          if (C.nodeType === 1) {
            if (o.isComponent(C)) continue;
            B = o.createTextNode(C.textContent);
          } else
            O === _ ? (B = o.createTextNode(C.substringData(0, S) + _.substringData(I, _.length - I)), y = S) : B = o.createTextNode(C.substringData(0, S));
          if (B.length > 0 ? C.data = B.data : this._nodeRemoveListItem(C), O === _) break;
          continue;
        }
        if (O === _) {
          if (_.nodeType === 1) {
            if (o.isComponent(_)) continue;
            A = o.createTextNode(_.textContent);
          } else
            A = o.createTextNode(_.substringData(I, _.length - I));
          A.length > 0 ? _.data = A.data : this._nodeRemoveListItem(_);
          continue;
        }
        this._nodeRemoveListItem(O);
      }
      const D = o.getParentElement(_, "ul"), P = o.getParentElement(C, "li");
      if (D && P && P.contains(D) ? (m = D.previousSibling, y = m.textContent.length) : (m = _ && _.parentNode ? _ : C && C.parentNode ? C : s.endContainer || s.startContainer, y = !r && !d ? y : d ? m.textContent.length : 0), !o.isWysiwygDiv(m) && m.childNodes.length === 0) {
        const L = o.removeItemAllParents(m, null, null);
        L && (m = L.sc || L.ec || e.element.wysiwyg);
      }
      return !o.getFormatElement(m) && !(C && C.parentNode) && (v ? (m = v, y = 0) : p && (m = p, y = 1)), this.setRange(m, y, m, y), this.history.push(!0), {
        container: m,
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
        for (let I = 0, E = r.length, B, A, q, Z, W, D; I < E; I++)
          if (B = r[I], !!o.isListCell(B) && (A = B.lastElementChild, A && o.isListCell(B.nextElementSibling) && r.indexOf(B.nextElementSibling) > -1 && (Z = A.lastElementChild, r.indexOf(Z) > -1))) {
            let P = null;
            for (; P = Z.lastElementChild; )
              if (o.isList(P))
                if (r.indexOf(P.lastElementChild) > -1)
                  Z = P.lastElementChild;
                else
                  continue e;
            q = A.firstElementChild, W = r.indexOf(q), D = r.indexOf(Z), r.splice(W, D - W + 1), E = r.length;
            continue;
          }
      let d = r[r.length - 1], h, p, v;
      o.isRangeFormatElement(d) || o.isFormatElement(d) ? h = d : h = o.getRangeFormatElement(d, null) || o.getFormatElement(d, null), o.isCell(h) ? (p = null, v = h) : (p = h.nextSibling, v = h.parentNode);
      let m = o.getElementDepth(h), y = null;
      const C = [], _ = function(I, E, B) {
        let A = null;
        if (I !== E && !o.isTable(E)) {
          if (E && o.getElementDepth(I) === o.getElementDepth(E)) return B;
          A = o.removeItemAllParents(E, null, I);
        }
        return A ? A.ec : B;
      };
      for (let I = 0, E = r.length, B, A, q, Z, W, D, P; I < E; I++)
        if (B = r[I], A = B.parentNode, !(!A || s.contains(A)))
          if (q = o.getElementDepth(B), o.isList(A)) {
            if (y === null && (D ? (y = D, P = !0, D = null) : y = A.cloneNode(!1)), C.push(B), W = r[I + 1], I === E - 1 || W && W.parentNode !== A) {
              W && B.contains(W.parentNode) && (D = W.parentNode.cloneNode(!1));
              let L = A.parentNode, O;
              for (; o.isList(L); )
                O = o.createElement(L.nodeName), O.appendChild(y), y = O, L = L.parentNode;
              const R = this.detachRangeFormatElement(A, C, null, !0, !0);
              m >= q ? (m = q, v = R.cc, p = _(v, A, R.ec), p && (v = p.parentNode)) : v === R.cc && (p = R.ec), v !== R.cc && (Z = _(v, R.cc, Z), Z !== void 0 ? p = Z : p = R.cc);
              for (let U = 0, N = R.removeArray.length; U < N; U++)
                y.appendChild(R.removeArray[U]);
              P || s.appendChild(y), D && R.removeArray[R.removeArray.length - 1].appendChild(D), y = null, P = !1;
            }
          } else
            m >= q && (m = q, v = A, p = B.nextSibling), s.appendChild(B), v !== A && (Z = _(v, A), Z !== void 0 && (p = Z));
      if (this.effectNode = null, o.mergeSameTags(s, null, !1), o.mergeNestedTags(s, (function(I) {
        return this.isList(I);
      }).bind(o)), p && o.getElementDepth(p) > 0 && (o.isList(p.parentNode) || o.isList(p.parentNode.parentNode))) {
        const I = o.getParentElement(p, (function(B) {
          return this.isRangeFormatElement(B) && !this.isList(B);
        }).bind(o)), E = o.splitElement(p, null, I ? o.getElementDepth(I) + 1 : 0);
        E.parentNode.insertBefore(s, E);
      } else
        v.insertBefore(s, p), _(s, p);
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
    detachRangeFormatElement: function(s, r, d, h, p) {
      const v = this.getRange();
      let m = v.startOffset, y = v.endOffset, C = o.getListChildNodes(s, function(R) {
        return R.parentNode === s;
      }), _ = s.parentNode, S = null, I = null, E = s.cloneNode(!1);
      const B = [], A = o.isList(d);
      let q = !1, Z = !1, W = !1;
      function D(R, U, N, V) {
        if (o.onlyZeroWidthSpace(U) && (U.innerHTML = o.zeroWidthSpace, m = y = 1), U.nodeType === 3)
          return R.insertBefore(U, N), U;
        const M = (W ? U : V).childNodes;
        let $ = U.cloneNode(!1), ie = null, G = null;
        for (; M[0]; )
          G = M[0], o._notTextNode(G) && !o.isBreak(G) && !o.isListCell($) ? ($.childNodes.length > 0 && (ie || (ie = $), R.insertBefore($, N), $ = U.cloneNode(!1)), R.insertBefore(G, N), ie || (ie = G)) : $.appendChild(G);
        if ($.childNodes.length > 0) {
          if (o.isListCell(R) && o.isListCell($) && o.isList(N))
            if (A) {
              for (ie = N; N; )
                $.appendChild(N), N = N.nextSibling;
              R.parentNode.insertBefore($, R.nextElementSibling);
            } else {
              const X = V.nextElementSibling, Q = o.detachNestedList(V, !1);
              if (s !== Q || X !== V.nextElementSibling) {
                const se = $.childNodes;
                for (; se[0]; )
                  V.appendChild(se[0]);
                s = Q, Z = !0;
              }
            }
          else
            R.insertBefore($, N);
          ie || (ie = $);
        }
        return ie;
      }
      for (let R = 0, U = C.length, N, V, M; R < U; R++)
        if (N = C[R], !(N.nodeType === 3 && o.isList(E)))
          if (W = !1, h && R === 0 && (!r || r.length === U || r[0] === N ? S = s.previousSibling : S = E), r && (V = r.indexOf(N)), r && V === -1)
            E || (E = s.cloneNode(!1)), E.appendChild(N);
          else {
            if (r && (M = r[V + 1]), E && E.children.length > 0 && (_.insertBefore(E, s), E = null), !A && o.isListCell(N))
              if (M && o.getElementDepth(N) !== o.getElementDepth(M) && (o.isListCell(_) || o.getArrayItem(N.children, o.isList, !1))) {
                const $ = N.nextElementSibling, ie = o.detachNestedList(N, !1);
                (s !== ie || $ !== N.nextElementSibling) && (s = ie, Z = !0);
              } else {
                const $ = N;
                N = o.createElement(h ? $.nodeName : o.isList(s.parentNode) || o.isListCell(s.parentNode) ? "LI" : o.isCell(s.parentNode) ? "DIV" : l.defaultTag);
                const ie = o.isListCell(N), G = $.childNodes;
                for (; G[0] && !(o.isList(G[0]) && !ie); )
                  N.appendChild(G[0]);
                o.copyFormatAttributes(N, $), W = !0;
              }
            else
              N = N.cloneNode(!1);
            if (!Z && (h ? (B.push(N), o.removeItem(C[R])) : (d ? (q || (_.insertBefore(d, s), q = !0), N = D(d, N, null, C[R])) : N = D(_, N, s, C[R]), Z || (r ? (I = N, S || (S = N)) : S || (S = I = N))), Z)) {
              Z = W = !1, C = o.getListChildNodes(s, function($) {
                return $.parentNode === s;
              }), E = s.cloneNode(!1), _ = s.parentNode, R = -1, U = C.length;
              continue;
            }
          }
      const P = s.parentNode;
      let L = s.nextSibling;
      E && E.children.length > 0 && P.insertBefore(E, L), d ? S = d.previousSibling : S || (S = s.previousSibling), L = s.nextSibling !== E ? s.nextSibling : E ? E.nextSibling : null, s.children.length === 0 || s.textContent.length === 0 ? o.removeItem(s) : o.removeEmptyNode(s, null, !1);
      let O = null;
      if (h)
        O = {
          cc: P,
          sc: S,
          so: m,
          ec: L,
          eo: y,
          removeArray: B
        };
      else {
        S || (S = I), I || (I = S);
        const R = o.getEdgeChildNodes(S, I.parentNode ? S : I);
        O = {
          cc: (R.sc || R.ec).parentNode,
          sc: R.sc,
          so: m,
          ec: R.ec,
          eo: y,
          removeArray: null
        };
      }
      if (this.effectNode = null, p) return O;
      !h && O && (r ? this.setRange(O.sc, m, O.ec, y) : this.setRange(O.sc, 0, O.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(s, r) {
      let d = {}, h = !1, p = !1, v = null, m = null;
      const y = (function(C) {
        return !this.isComponent(C);
      }).bind(o);
      for (let C = 0, _ = s.length, S, I, E, B; C < _; C++) {
        if (E = C === _ - 1, I = o.getRangeFormatElement(s[C], y), B = o.isList(I), !S && B)
          S = I, d = { r: S, f: [o.getParentElement(s[C], "LI")] }, C === 0 && (h = !0);
        else if (S && B)
          if (S !== I) {
            const A = this.detachRangeFormatElement(d.f[0].parentNode, d.f, null, r, !0);
            I = s[C].parentNode, h && (v = A.sc, h = !1), E && (m = A.ec), B ? (S = I, d = { r: S, f: [o.getParentElement(s[C], "LI")] }, E && (p = !0)) : S = null;
          } else
            d.f.push(o.getParentElement(s[C], "LI")), E && (p = !0);
        if (E && o.isList(S)) {
          const A = this.detachRangeFormatElement(d.f[0].parentNode, d.f, null, r, !0);
          (p || _ === 1) && (m = A.ec), h && (v = A.sc || m);
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
    nodeChange: function(s, r, d, h) {
      this._resetRangeToTextNode();
      let p = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, d = d && d.length > 0 ? d : !1;
      const v = !s, m = v && !d && !r;
      let y = p.startContainer, C = p.startOffset, _ = p.endContainer, S = p.endOffset;
      if (m && p.collapsed && o.isFormatElement(y.parentNode) || y === _ && y.nodeType === 1 && o.isNonEditable(y)) {
        const G = y.parentNode;
        if (!o.isListCell(G) || !o.getValues(G.style).some((function(X) {
          return this._listKebab.indexOf(X) > -1;
        }).bind(this))) return;
      }
      if (p.collapsed && !m && y.nodeType === 1 && !o.isBreak(y) && !o.isComponent(y)) {
        let G = null;
        const X = y.childNodes[C];
        X && (X.nextSibling ? G = o.isBreak(X) ? X : X.nextSibling : G = null);
        const Q = o.createTextNode(o.zeroWidthSpace);
        y.insertBefore(Q, G), this.setRange(Q, 1, Q, 1), p = this.getRange(), y = p.startContainer, C = p.startOffset, _ = p.endContainer, S = p.endOffset;
      }
      o.isFormatElement(y) && (y = y.childNodes[C] || y.firstChild, C = 0), o.isFormatElement(_) && (_ = _.childNodes[S] || _.lastChild, S = _.textContent.length), v && (s = o.createElement("DIV"));
      const I = f.RegExp, E = s.nodeName;
      if (!m && y === _ && !d && s) {
        let G = y, X = 0;
        const Q = [], se = s.style;
        for (let me = 0, be = se.length; me < be; me++)
          Q.push(se[me]);
        const ue = s.classList;
        for (let me = 0, be = ue.length; me < be; me++)
          Q.push("." + ue[me]);
        if (Q.length > 0) {
          for (; !o.isFormatElement(G) && !o.isWysiwygDiv(G); ) {
            for (let me = 0; me < Q.length; me++)
              if (G.nodeType === 1) {
                const be = Q[me], xe = /^\./.test(be) ? new I("\\s*" + be.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, Be = v ? !!G.style[be] : !!G.style[be] && !!s.style[be] && G.style[be] === s.style[be], Ce = xe === !1 ? !1 : v ? !!G.className.match(xe) : !!G.className.match(xe) && !!s.className.match(xe);
                (Be || Ce) && X++;
              }
            G = G.parentNode;
          }
          if (X >= Q.length) return;
        }
      }
      let B = {}, A = {}, q, Z = "", W = "", D = "";
      if (r) {
        for (let G = 0, X = r.length, Q; G < X; G++)
          Q = r[G], /^\./.test(Q) ? W += (W ? "|" : "\\s*(?:") + Q.replace(/^\./, "") : Z += (Z ? "|" : "(?:;|^|\\s)(?:") + Q;
        Z && (Z += ")\\s*:[^;]*\\s*(?:;|$)", Z = new I(Z, "ig")), W && (W += ")(?=\\s+|$)", W = new I(W, "ig"));
      }
      if (d) {
        D = "^(?:" + d[0];
        for (let G = 1; G < d.length; G++)
          D += "|" + d[G];
        D += ")$", D = new I(D, "i");
      }
      const P = f.Boolean, L = { v: !1 }, O = function(G) {
        const X = G.cloneNode(!1);
        if (X.nodeType === 3 || o.isBreak(X)) return X;
        if (m) return null;
        const Q = !D && v || D && D.test(X.nodeName);
        if (Q && !h)
          return L.v = !0, null;
        const se = X.style.cssText;
        let ue = "";
        Z && se.length > 0 && (ue = se.replace(Z, "").trim(), ue !== se && (L.v = !0));
        const me = X.className;
        let be = "";
        return W && me.length > 0 && (be = me.replace(W, "").trim(), be !== me && (L.v = !0)), v && (W || !me) && (Z || !se) && !ue && !be && Q ? (L.v = !0, null) : ue || be || X.nodeName !== E || P(Z) !== P(se) || P(W) !== P(me) ? (Z && se.length > 0 && (X.style.cssText = ue), X.style.cssText || X.removeAttribute("style"), W && me.length > 0 && (X.className = be.trim()), X.className.trim() || X.removeAttribute("class"), !X.style.cssText && !X.className && (X.nodeName === E || Q) ? (L.v = !0, null) : X) : (L.v = !0, null);
      }, R = this.getSelectedElements(null);
      p = this.getRange(), y = p.startContainer, C = p.startOffset, _ = p.endContainer, S = p.endOffset, o.getFormatElement(y, null) || (y = o.getChildElement(R[0], function(G) {
        return G.nodeType === 3;
      }, !1), C = 0), o.getFormatElement(_, null) || (_ = o.getChildElement(R[R.length - 1], function(G) {
        return G.nodeType === 3;
      }, !1), S = _.textContent.length);
      const U = o.getFormatElement(y, null) === o.getFormatElement(_, null), N = R.length - (U ? 0 : 1);
      q = s.cloneNode(!1);
      const V = m || v && function(G) {
        for (let X = 0, Q = G.length; X < Q; X++)
          if (o._isMaintainedNode(G[X]) || o._isSizeNode(G[X])) return !0;
        return !1;
      }(d), M = v || o._isSizeNode(q), $ = this._util_getMaintainedNode.bind(o, V, M), ie = this._util_isMaintainedNode.bind(o, V, M);
      if (U) {
        this._resetCommonListCell(R[0], r) && (p = this.setRange(y, C, _, S));
        const G = this._nodeChange_oneLine(R[0], q, O, y, C, _, S, m, v, p.collapsed, L, $, ie);
        B.container = G.startContainer, B.offset = G.startOffset, A.container = G.endContainer, A.offset = G.endOffset, B.container === A.container && o.onlyZeroWidthSpace(B.container) && (B.offset = A.offset = 1), this._setCommonListStyle(G.ancestor, null);
      } else {
        let G = !1;
        N > 0 && this._resetCommonListCell(R[N], r) && (G = !0), this._resetCommonListCell(R[0], r) && (G = !0), G && this.setRange(y, C, _, S), N > 0 && (q = s.cloneNode(!1), A = this._nodeChange_endLine(R[N], q, O, _, S, m, v, L, $, ie));
        for (let X = N - 1, Q; X > 0; X--)
          this._resetCommonListCell(R[X], r), q = s.cloneNode(!1), Q = this._nodeChange_middleLine(R[X], q, O, m, v, L, A.container), Q.endContainer && Q.ancestor.contains(Q.endContainer) && (A.ancestor = null, A.container = Q.endContainer), this._setCommonListStyle(Q.ancestor, null);
        q = s.cloneNode(!1), B = this._nodeChange_startLine(R[0], q, O, y, C, m, v, L, $, ie, A.container), B.endContainer && (A.ancestor = null, A.container = B.endContainer), N <= 0 ? A = B : A.container || (A.ancestor = null, A.container = B.container, A.offset = B.container.textContent.length), this._setCommonListStyle(B.ancestor, null), this._setCommonListStyle(A.ancestor || o.getFormatElement(A.container), null);
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
      const d = o.getArrayItem(s.childNodes, function(I) {
        return !o.isBreak(I);
      }, !0), h = s.style, p = [], v = [], m = o.getValues(h);
      for (let I = 0, E = this._listKebab.length; I < E; I++)
        m.indexOf(this._listKebab[I]) > -1 && r.indexOf(this._listKebab[I]) > -1 && (p.push(this._listCamel[I]), v.push(this._listKebab[I]));
      if (!p.length) return;
      const y = o.createElement("SPAN");
      for (let I = 0, E = p.length; I < E; I++)
        y.style[p[I]] = h[v[I]], h.removeProperty(v[I]);
      let C = y.cloneNode(!1), _ = null, S = !1;
      for (let I = 0, E = d.length, B, A; I < E; I++)
        B = d[I], !l._textTagsMap[B.nodeName.toLowerCase()] && (A = o.getValues(B.style), A.length === 0 || p.some(function(q) {
          return A.indexOf(q) === -1;
        }) && A.some(function(q) {
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
      const d = o.getArrayItem((r || s).childNodes, function(C) {
        return !o.isBreak(C);
      }, !0);
      if (r = d[0], !r || d.length > 1 || r.nodeType !== 1) return;
      const h = r.style, p = s.style, v = r.nodeName.toLowerCase();
      let m = !1;
      l._textTagsMap[v] === l._defaultCommand.bold.toLowerCase() && (p.fontWeight = "bold"), l._textTagsMap[v] === l._defaultCommand.italic.toLowerCase() && (p.fontStyle = "italic");
      const y = o.getValues(h);
      if (y.length > 0)
        for (let C = 0, _ = this._listCamel.length; C < _; C++)
          y.indexOf(this._listKebab[C]) > -1 && (p[this._listCamel[C]] = h[this._listCamel[C]], h.removeProperty(this._listKebab[C]), m = !0);
      if (this._setCommonListStyle(s, r), !!m && !h.length) {
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
      const d = s.childNodes;
      for (; d[0]; )
        r.insertBefore(d[0], s);
      r.removeChild(s);
    },
    /**
     * @description Return the parent maintained tag. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_getMaintainedNode: function(s, r, d) {
      return !d || s ? null : this.getParentElement(d, this._isMaintainedNode.bind(this)) || (r ? null : this.getParentElement(d, this._isSizeNode.bind(this)));
    },
    /**
     * @description Check if element is a tag that should be persisted. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_isMaintainedNode: function(s, r, d) {
      if (!d || s || d.nodeType !== 1) return !1;
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
    _nodeChange_oneLine: function(s, r, d, h, p, v, m, y, C, _, S, I, E) {
      let B = h.parentNode;
      for (; !B.nextSibling && !B.previousSibling && !o.isFormatElement(B.parentNode) && !o.isWysiwygDiv(B.parentNode) && B.nodeName !== r.nodeName; )
        B = B.parentNode;
      if (!C && B === v.parentNode && B.nodeName === r.nodeName && o.onlyZeroWidthSpace(h.textContent.slice(0, p)) && o.onlyZeroWidthSpace(v.textContent.slice(m))) {
        const Ce = B.childNodes;
        let ze = !0;
        for (let Se = 0, je = Ce.length, fe, $e, Ie, ke; Se < je; Se++) {
          if (fe = Ce[Se], ke = !o.onlyZeroWidthSpace(fe), fe === h) {
            $e = !0;
            continue;
          }
          if (fe === v) {
            Ie = !0;
            continue;
          }
          if (!$e && ke || $e && Ie && ke) {
            ze = !1;
            break;
          }
        }
        if (ze)
          return o.copyTagAttributes(B, r), {
            ancestor: s,
            startContainer: h,
            startOffset: p,
            endContainer: v,
            endOffset: m
          };
      }
      S.v = !1;
      const A = s, q = [r], Z = s.cloneNode(!1), W = h === v;
      let D = h, P = p, L = v, O = m, R = !1, U = !1, N, V, M, $, ie;
      const G = f.RegExp;
      function X(Ce) {
        const ze = new G("(?:;|^|\\s)(?:" + $ + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let Se = "";
        return ze && Ce.style.cssText.length > 0 && (Se = ze.test(Ce.style.cssText)), !Se;
      }
      if (function Ce(ze, Se) {
        const je = ze.childNodes;
        for (let fe = 0, $e = je.length, Ie; fe < $e; fe++) {
          let ke = je[fe];
          if (!ke) continue;
          let qt = Se, Je;
          if (!R && ke === D) {
            let Fe = Z;
            ie = I(ke);
            const Ne = o.createTextNode(D.nodeType === 1 ? "" : D.substringData(0, P)), He = o.createTextNode(
              D.nodeType === 1 ? "" : D.substringData(
                P,
                W && O >= P ? O - P : D.data.length - P
              )
            );
            if (ie) {
              const tt = I(Se);
              if (tt && tt.parentNode !== Fe) {
                let Ze = tt, bt = null;
                for (; Ze.parentNode !== Fe; ) {
                  for (Se = bt = Ze.parentNode.cloneNode(!1); Ze.childNodes[0]; )
                    bt.appendChild(Ze.childNodes[0]);
                  Ze.appendChild(bt), Ze = Ze.parentNode;
                }
                Ze.parentNode.appendChild(tt);
              }
              ie = ie.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(Ne) || Se.appendChild(Ne);
            const Me = I(Se);
            for (Me && (ie = Me), ie && (Fe = ie), V = ke, N = [], $ = ""; V !== Fe && V !== A && V !== null; )
              Ie = E(V) ? null : d(V), Ie && V.nodeType === 1 && X(V) && (N.push(Ie), $ += V.style.cssText.substr(0, V.style.cssText.indexOf(":")) + "|"), V = V.parentNode;
            const dt = N.pop() || He;
            for (M = V = dt; N.length > 0; )
              V = N.pop(), M.appendChild(V), M = V;
            if (r.appendChild(dt), Fe.appendChild(r), ie && !I(L) && (r = r.cloneNode(!1), Z.appendChild(r), q.push(r)), D = He, P = 0, R = !0, V !== He && V.appendChild(D), !W) continue;
          }
          if (!U && ke === L) {
            ie = I(ke);
            const Fe = o.createTextNode(L.nodeType === 1 ? "" : L.substringData(O, L.length - O)), Ne = o.createTextNode(W || L.nodeType === 1 ? "" : L.substringData(0, O));
            if (ie ? ie = ie.cloneNode(!1) : E(r.parentNode) && !ie && (r = r.cloneNode(!1), Z.appendChild(r), q.push(r)), !o.onlyZeroWidthSpace(Fe)) {
              V = ke, $ = "", N = [];
              const Me = [];
              for (; V !== Z && V !== A && V !== null; )
                V.nodeType === 1 && X(V) && (E(V) ? Me.push(V.cloneNode(!1)) : N.push(V.cloneNode(!1)), $ += V.style.cssText.substr(0, V.style.cssText.indexOf(":")) + "|"), V = V.parentNode;
              for (N = N.concat(Me), Je = M = V = N.pop() || Fe; N.length > 0; )
                V = N.pop(), M.appendChild(V), M = V;
              Z.appendChild(Je), V.textContent = Fe.data;
            }
            if (ie && Je) {
              const Me = I(Je);
              Me && (ie = Me);
            }
            for (V = ke, N = [], $ = ""; V !== Z && V !== A && V !== null; )
              Ie = E(V) ? null : d(V), Ie && V.nodeType === 1 && X(V) && (N.push(Ie), $ += V.style.cssText.substr(0, V.style.cssText.indexOf(":")) + "|"), V = V.parentNode;
            const He = N.pop() || Ne;
            for (M = V = He; N.length > 0; )
              V = N.pop(), M.appendChild(V), M = V;
            ie ? (r = r.cloneNode(!1), r.appendChild(He), ie.insertBefore(r, ie.firstChild), Z.appendChild(ie), q.push(r), ie = null) : r.appendChild(He), L = Ne, O = Ne.data.length, U = !0, !y && _ && (r = Ne, Ne.textContent = o.zeroWidthSpace), V !== Ne && V.appendChild(L);
            continue;
          }
          if (R) {
            if (ke.nodeType === 1 && !o.isBreak(ke)) {
              o._isIgnoreNodeChange(ke) ? (Z.appendChild(ke.cloneNode(!0)), _ || (r = r.cloneNode(!1), Z.appendChild(r), q.push(r))) : Ce(ke, ke);
              continue;
            }
            V = ke, N = [], $ = "";
            const Fe = [];
            for (; V.parentNode !== null && V !== A && V !== r; )
              Ie = U ? V.cloneNode(!1) : d(V), V.nodeType === 1 && !o.isBreak(ke) && Ie && X(V) && (E(V) ? ie || Fe.push(Ie) : N.push(Ie), $ += V.style.cssText.substr(0, V.style.cssText.indexOf(":")) + "|"), V = V.parentNode;
            N = N.concat(Fe);
            const Ne = N.pop() || ke;
            for (M = V = Ne; N.length > 0; )
              V = N.pop(), M.appendChild(V), M = V;
            if (E(r.parentNode) && !E(Ne) && !o.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), Z.appendChild(r), q.push(r)), !U && !ie && E(Ne)) {
              r = r.cloneNode(!1);
              const He = Ne.childNodes;
              for (let Me = 0, dt = He.length; Me < dt; Me++)
                r.appendChild(He[Me]);
              Ne.appendChild(r), Z.appendChild(Ne), q.push(r), r.children.length > 0 ? Se = V : Se = r;
            } else Ne === ke ? U ? Se = Z : Se = r : U ? (Z.appendChild(Ne), Se = V) : (r.appendChild(Ne), Se = V);
            if (ie && ke.nodeType === 3)
              if (I(ke)) {
                const He = o.getParentElement(Se, (function(Me) {
                  return this._isMaintainedNode(Me.parentNode) || Me.parentNode === Z;
                }).bind(o));
                ie.appendChild(He), r = He.cloneNode(!1), q.push(r), Z.appendChild(r);
              } else
                ie = null;
          }
          Je = ke.cloneNode(!1), Se.appendChild(Je), ke.nodeType === 1 && !o.isBreak(ke) && (qt = Je), Ce(ke, qt);
        }
      }(s, Z), C && !y && !S.v)
        return {
          ancestor: s,
          startContainer: h,
          startOffset: p,
          endContainer: v,
          endOffset: m
        };
      if (y = y && C, y)
        for (let Ce = 0; Ce < q.length; Ce++) {
          let ze = q[Ce], Se, je, fe;
          if (_)
            Se = o.createTextNode(o.zeroWidthSpace), Z.replaceChild(Se, ze);
          else {
            const $e = ze.childNodes;
            for (je = $e[0]; $e[0]; )
              fe = $e[0], Z.insertBefore(fe, ze);
            o.removeItem(ze);
          }
          Ce === 0 && (_ ? D = L = Se : (D = je, L = fe));
        }
      else {
        if (C)
          for (let Ce = 0; Ce < q.length; Ce++)
            this._stripRemoveNode(q[Ce]);
        _ && (D = L = r);
      }
      o.removeEmptyNode(Z, r, !1), _ && (P = D.textContent.length, O = L.textContent.length);
      const Q = y || L.textContent.length === 0;
      !o.isBreak(L) && L.textContent.length === 0 && (o.removeItem(L), L = D), O = Q ? L.textContent.length : O;
      const se = { s: 0, e: 0 }, ue = o.getNodePath(D, Z, se), me = !L.parentNode;
      me && (L = D);
      const be = { s: 0, e: 0 }, xe = o.getNodePath(L, Z, !me && !Q ? be : null);
      P += se.s, O = _ ? P : me ? D.textContent.length : Q ? O + se.s : O + be.s;
      const Be = o.mergeSameTags(Z, [ue, xe], !0);
      return s.parentNode.replaceChild(Z, s), D = o.getNodeFromPath(ue, Z), L = o.getNodeFromPath(xe, Z), {
        ancestor: Z,
        startContainer: D,
        startOffset: P + Be[0],
        endContainer: L,
        endOffset: O + Be[1]
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
    _nodeChange_startLine: function(s, r, d, h, p, v, m, y, C, _, S) {
      let I = h.parentNode;
      for (; !I.nextSibling && !I.previousSibling && !o.isFormatElement(I.parentNode) && !o.isWysiwygDiv(I.parentNode) && I.nodeName !== r.nodeName; )
        I = I.parentNode;
      if (!m && I.nodeName === r.nodeName && !o.isFormatElement(I) && !I.nextSibling && o.onlyZeroWidthSpace(h.textContent.slice(0, p))) {
        let R = !0, U = h.previousSibling;
        for (; U; ) {
          if (!o.onlyZeroWidthSpace(U)) {
            R = !1;
            break;
          }
          U = U.previousSibling;
        }
        if (R)
          return o.copyTagAttributes(I, r), {
            ancestor: s,
            container: h,
            offset: p
          };
      }
      y.v = !1;
      const E = s, B = [r], A = s.cloneNode(!1);
      let q = h, Z = p, W = !1, D, P, L, O;
      if (function R(U, N) {
        const V = U.childNodes;
        for (let M = 0, $ = V.length, ie, G; M < $; M++) {
          const X = V[M];
          if (!X) continue;
          let Q = N;
          if (W && !o.isBreak(X)) {
            if (X.nodeType === 1) {
              if (o._isIgnoreNodeChange(X)) {
                if (r = r.cloneNode(!1), G = X.cloneNode(!0), A.appendChild(G), A.appendChild(r), B.push(r), S && X.contains(S)) {
                  const be = o.getNodePath(S, X);
                  S = o.getNodeFromPath(be, G);
                }
              } else
                R(X, X);
              continue;
            }
            P = X, D = [];
            const se = [];
            for (; P.parentNode !== null && P !== E && P !== r; )
              ie = d(P), P.nodeType === 1 && ie && (_(P) ? O || se.push(ie) : D.push(ie)), P = P.parentNode;
            D = D.concat(se);
            const ue = D.length > 0, me = D.pop() || X;
            for (L = P = me; D.length > 0; )
              P = D.pop(), L.appendChild(P), L = P;
            if (_(r.parentNode) && !_(me) && (r = r.cloneNode(!1), A.appendChild(r), B.push(r)), !O && _(me)) {
              r = r.cloneNode(!1);
              const be = me.childNodes;
              for (let xe = 0, Be = be.length; xe < Be; xe++)
                r.appendChild(be[xe]);
              me.appendChild(r), A.appendChild(me), N = _(P) ? r : P, B.push(r);
            } else ue ? (r.appendChild(me), N = P) : N = r;
            if (O && X.nodeType === 3)
              if (C(X)) {
                const be = o.getParentElement(N, (function(xe) {
                  return this._isMaintainedNode(xe.parentNode) || xe.parentNode === A;
                }).bind(o));
                O.appendChild(be), r = be.cloneNode(!1), B.push(r), A.appendChild(r);
              } else
                O = null;
          }
          if (!W && X === q) {
            let se = A;
            O = C(X);
            const ue = o.createTextNode(q.nodeType === 1 ? "" : q.substringData(0, Z)), me = o.createTextNode(q.nodeType === 1 ? "" : q.substringData(Z, q.length - Z));
            if (O) {
              const Be = C(N);
              if (Be && Be.parentNode !== se) {
                let Ce = Be, ze = null;
                for (; Ce.parentNode !== se; ) {
                  for (N = ze = Ce.parentNode.cloneNode(!1); Ce.childNodes[0]; )
                    ze.appendChild(Ce.childNodes[0]);
                  Ce.appendChild(ze), Ce = Ce.parentNode;
                }
                Ce.parentNode.appendChild(Be);
              }
              O = O.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(ue) || N.appendChild(ue);
            const be = C(N);
            for (be && (O = be), O && (se = O), P = N, D = []; P !== se && P !== null; )
              ie = d(P), P.nodeType === 1 && ie && D.push(ie), P = P.parentNode;
            const xe = D.pop() || N;
            for (L = P = xe; D.length > 0; )
              P = D.pop(), L.appendChild(P), L = P;
            xe !== N ? (r.appendChild(xe), N = P) : N = r, o.isBreak(X) && r.appendChild(X.cloneNode(!1)), se.appendChild(r), q = me, Z = 0, W = !0, N.appendChild(q);
            continue;
          }
          ie = W ? d(X) : X.cloneNode(!1), ie && (N.appendChild(ie), X.nodeType === 1 && !o.isBreak(X) && (Q = ie)), R(X, Q);
        }
      }(s, A), m && !v && !y.v)
        return {
          ancestor: s,
          container: h,
          offset: p,
          endContainer: S
        };
      if (v = v && m, v)
        for (let R = 0; R < B.length; R++) {
          let U = B[R];
          const N = U.childNodes, V = N[0];
          for (; N[0]; )
            A.insertBefore(N[0], U);
          o.removeItem(U), R === 0 && (q = V);
        }
      else if (m) {
        r = r.firstChild;
        for (let R = 0; R < B.length; R++)
          this._stripRemoveNode(B[R]);
      }
      if (!v && A.childNodes.length === 0)
        s.childNodes ? q = s.childNodes[0] : (q = o.createTextNode(o.zeroWidthSpace), s.appendChild(q));
      else {
        o.removeEmptyNode(A, r, !1), o.onlyZeroWidthSpace(A.textContent) && (q = A.firstChild, Z = 0);
        const R = { s: 0, e: 0 }, U = o.getNodePath(q, A, R);
        Z += R.s;
        const N = o.mergeSameTags(A, [U], !0);
        s.parentNode.replaceChild(A, s), q = o.getNodeFromPath(U, A), Z += N[0];
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
    _nodeChange_middleLine: function(s, r, d, h, p, v, m) {
      if (!p) {
        let S = null;
        m && s.contains(m) && (S = o.getNodePath(m, s));
        const I = s.cloneNode(!0), E = r.nodeName, B = r.style.cssText, A = r.className;
        let q = I.childNodes, Z = 0, W = q.length;
        for (let D; Z < W && (D = q[Z], D.nodeType !== 3); Z++)
          if (D.nodeName === E)
            D.style.cssText += B, o.addClass(D, A);
          else {
            if (!o.isBreak(D) && o._isIgnoreNodeChange(D))
              continue;
            if (W === 1) {
              q = D.childNodes, W = q.length, Z = -1;
              continue;
            } else
              break;
          }
        if (W > 0 && Z === W)
          return s.innerHTML = I.innerHTML, {
            ancestor: s,
            endContainer: S ? o.getNodeFromPath(S, s) : null
          };
      }
      v.v = !1;
      const y = s.cloneNode(!1), C = [r];
      let _ = !0;
      if (function S(I, E) {
        const B = I.childNodes;
        for (let A = 0, q = B.length, Z, W; A < q; A++) {
          let D = B[A];
          if (!D) continue;
          let P = E;
          if (!o.isBreak(D) && o._isIgnoreNodeChange(D)) {
            if (r.childNodes.length > 0 && (y.appendChild(r), r = r.cloneNode(!1)), W = D.cloneNode(!0), y.appendChild(W), y.appendChild(r), C.push(r), E = r, m && D.contains(m)) {
              const L = o.getNodePath(m, D);
              m = o.getNodeFromPath(L, W);
            }
            continue;
          } else
            Z = d(D), Z && (_ = !1, E.appendChild(Z), D.nodeType === 1 && (P = Z));
          o.isBreak(D) || S(D, P);
        }
      }(s, r), _ || p && !h && !v.v) return { ancestor: s, endContainer: m };
      if (y.appendChild(r), h && p)
        for (let S = 0; S < C.length; S++) {
          let I = C[S];
          const E = I.childNodes;
          for (; E[0]; )
            y.insertBefore(E[0], I);
          o.removeItem(I);
        }
      else if (p) {
        r = r.firstChild;
        for (let S = 0; S < C.length; S++)
          this._stripRemoveNode(C[S]);
      }
      return o.removeEmptyNode(y, r, !1), o.mergeSameTags(y, null, !0), s.parentNode.replaceChild(y, s), { ancestor: y, endContainer: m };
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
    _nodeChange_endLine: function(s, r, d, h, p, v, m, y, C, _) {
      let S = h.parentNode;
      for (; !S.nextSibling && !S.previousSibling && !o.isFormatElement(S.parentNode) && !o.isWysiwygDiv(S.parentNode) && S.nodeName !== r.nodeName; )
        S = S.parentNode;
      if (!m && S.nodeName === r.nodeName && !o.isFormatElement(S) && !S.previousSibling && o.onlyZeroWidthSpace(h.textContent.slice(p))) {
        let O = !0, R = h.nextSibling;
        for (; R; ) {
          if (!o.onlyZeroWidthSpace(R)) {
            O = !1;
            break;
          }
          R = R.nextSibling;
        }
        if (O)
          return o.copyTagAttributes(S, r), {
            ancestor: s,
            container: h,
            offset: p
          };
      }
      y.v = !1;
      const I = s, E = [r], B = s.cloneNode(!1);
      let A = h, q = p, Z = !1, W, D, P, L;
      if (function O(R, U) {
        const N = R.childNodes;
        for (let V = N.length - 1, M; 0 <= V; V--) {
          const $ = N[V];
          if (!$) continue;
          let ie = U;
          if (Z && !o.isBreak($)) {
            if ($.nodeType === 1) {
              if (o._isIgnoreNodeChange($)) {
                r = r.cloneNode(!1);
                const se = $.cloneNode(!0);
                B.insertBefore(se, U), B.insertBefore(r, se), E.push(r);
              } else
                O($, $);
              continue;
            }
            D = $, W = [];
            const G = [];
            for (; D.parentNode !== null && D !== I && D !== r; )
              M = d(D), M && D.nodeType === 1 && (_(D) ? L || G.push(M) : W.push(M)), D = D.parentNode;
            W = W.concat(G);
            const X = W.length > 0, Q = W.pop() || $;
            for (P = D = Q; W.length > 0; )
              D = W.pop(), P.appendChild(D), P = D;
            if (_(r.parentNode) && !_(Q) && (r = r.cloneNode(!1), B.insertBefore(r, B.firstChild), E.push(r)), !L && _(Q)) {
              r = r.cloneNode(!1);
              const se = Q.childNodes;
              for (let ue = 0, me = se.length; ue < me; ue++)
                r.appendChild(se[ue]);
              Q.appendChild(r), B.insertBefore(Q, B.firstChild), E.push(r), r.children.length > 0 ? U = D : U = r;
            } else X ? (r.insertBefore(Q, r.firstChild), U = D) : U = r;
            if (L && $.nodeType === 3)
              if (C($)) {
                const se = o.getParentElement(U, (function(ue) {
                  return this._isMaintainedNode(ue.parentNode) || ue.parentNode === B;
                }).bind(o));
                L.appendChild(se), r = se.cloneNode(!1), E.push(r), B.insertBefore(r, B.firstChild);
              } else
                L = null;
          }
          if (!Z && $ === A) {
            L = C($);
            const G = o.createTextNode(A.nodeType === 1 ? "" : A.substringData(q, A.length - q)), X = o.createTextNode(A.nodeType === 1 ? "" : A.substringData(0, q));
            if (L) {
              L = L.cloneNode(!1);
              const se = C(U);
              if (se && se.parentNode !== B) {
                let ue = se, me = null;
                for (; ue.parentNode !== B; ) {
                  for (U = me = ue.parentNode.cloneNode(!1); ue.childNodes[0]; )
                    me.appendChild(ue.childNodes[0]);
                  ue.appendChild(me), ue = ue.parentNode;
                }
                ue.parentNode.insertBefore(se, ue.parentNode.firstChild);
              }
              L = L.cloneNode(!1);
            } else _(r.parentNode) && !L && (r = r.cloneNode(!1), B.appendChild(r), E.push(r));
            for (o.onlyZeroWidthSpace(G) || U.insertBefore(G, U.firstChild), D = U, W = []; D !== B && D !== null; )
              M = _(D) ? null : d(D), M && D.nodeType === 1 && W.push(M), D = D.parentNode;
            const Q = W.pop() || U;
            for (P = D = Q; W.length > 0; )
              D = W.pop(), P.appendChild(D), P = D;
            Q !== U ? (r.insertBefore(Q, r.firstChild), U = D) : U = r, o.isBreak($) && r.appendChild($.cloneNode(!1)), L ? (L.insertBefore(r, L.firstChild), B.insertBefore(L, B.firstChild), L = null) : B.insertBefore(r, B.firstChild), A = X, q = X.data.length, Z = !0, U.insertBefore(A, U.firstChild);
            continue;
          }
          M = Z ? d($) : $.cloneNode(!1), M && (U.insertBefore(M, U.firstChild), $.nodeType === 1 && !o.isBreak($) && (ie = M)), O($, ie);
        }
      }(s, B), m && !v && !y.v)
        return {
          ancestor: s,
          container: h,
          offset: p
        };
      if (v = v && m, v)
        for (let O = 0; O < E.length; O++) {
          let R = E[O];
          const U = R.childNodes;
          let N = null;
          for (; U[0]; )
            N = U[0], B.insertBefore(N, R);
          o.removeItem(R), O === E.length - 1 && (A = N, q = N.textContent.length);
        }
      else if (m) {
        r = r.firstChild;
        for (let O = 0; O < E.length; O++)
          this._stripRemoveNode(E[O]);
      }
      if (!v && B.childNodes.length === 0)
        s.childNodes ? A = s.childNodes[0] : (A = o.createTextNode(o.zeroWidthSpace), s.appendChild(A));
      else {
        if (!m && r.textContent.length === 0)
          return o.removeEmptyNode(B, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        o.removeEmptyNode(B, r, !1), o.onlyZeroWidthSpace(B.textContent) ? (A = B.firstChild, q = A.textContent.length) : o.onlyZeroWidthSpace(A) && (A = r, q = 1);
        const O = { s: 0, e: 0 }, R = o.getNodePath(A, B, O);
        q += O.s;
        const U = o.mergeSameTags(B, [R], !0);
        s.parentNode.replaceChild(B, s), A = o.getNodeFromPath(R, B), q += U[0];
      }
      return {
        ancestor: B,
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
    actionCall: function(s, r, d) {
      if (r) {
        if (/more/i.test(r)) {
          if (d !== this._moreLayerActiveButton) {
            const h = e.element.toolbar.querySelector("." + s);
            h && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = d, h.style.display = "block", b._showToolbarBalloon(), b._showToolbarInline()), o.addClass(d, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), b._showToolbarBalloon(), b._showToolbarInline());
          return;
        }
        if (/container/.test(r) && (this._menuTray[s] === null || d !== this.containerActiveButton)) {
          this.callPlugin(s, this.containerOn.bind(this, d), d);
          return;
        }
        if (this.isReadOnly && o.arrayIncludes(this.resizingDisabledButtons, d)) return;
        if (/submenu/.test(r) && (this._menuTray[s] === null || d !== this.submenuActiveButton)) {
          this.callPlugin(s, this.submenuOn.bind(this, d), d);
          return;
        } else if (/dialog/.test(r)) {
          this.callPlugin(s, this.plugins[s].open.bind(this), d);
          return;
        } else /command/.test(r) ? this.callPlugin(s, this.plugins[s].action.bind(this), d) : /fileBrowser/.test(r) && this.callPlugin(s, this.plugins[s].open.bind(this, null), d);
      } else s && this.commandHandler(d, s);
      /submenu/.test(r) ? this.submenuOff() : /command/.test(r) || (this.submenuOff(), this.containerOff());
    },
    /**
     * @description Execute command of command button(All Buttons except submenu and dialog)
     * (selectAll, codeView, fullScreen, indent, outdent, undo, redo, removeFormat, print, preview, showBlocks, save, bold, underline, italic, strike, subscript, superscript, copy, cut, paste)
     * @param {Element|null} target The element of command button
     * @param {String} command Property of command button (data-value)
     */
    commandHandler: function(s, r) {
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
            let h = o.getChildElement(d.firstChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !1) || d.firstChild, p = o.getChildElement(d.lastChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !0) || d.lastChild;
            if (!h || !p) return;
            if (o.isMedia(h)) {
              const C = this.getFileComponent(h), _ = o.createElement("BR"), S = o.createElement(l.defaultTag);
              S.appendChild(_), h = C ? C.component : h, h.parentNode.insertBefore(S, h), h = _;
            }
            if (o.isMedia(p)) {
              const C = o.createElement("BR"), _ = o.createElement(l.defaultTag);
              _.appendChild(C), d.appendChild(_), p = C;
            }
            b._showToolbarBalloon(this.setRange(h, 0, p, p.textContent.length));
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
            else if (this._variable.isChanged && typeof x.save == "function")
              x.save();
            else
              throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
            this._variable.isChanged = !1, e.tool.save && e.tool.save.setAttribute("disabled", !0);
            break;
          default:
            r = l._defaultCommand[r.toLowerCase()] || r, this.commandMap[r] || (this.commandMap[r] = s);
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
    indent: function(s) {
      const r = this.getRange(), d = this.getSelectedElements(null), h = [], p = s !== "indent", v = l.rtl ? "marginRight" : "marginLeft";
      let m = r.startContainer, y = r.endContainer, C = r.startOffset, _ = r.endOffset;
      for (let S = 0, I = d.length, E, B; S < I; S++)
        E = d[S], !o.isListCell(E) || !this.plugins.list ? (B = /\d+/.test(E.style[v]) ? o.getNumber(E.style[v], 0) : 0, p ? B -= 25 : B += 25, o.setStyle(E, v, B <= 0 ? "" : B + "px")) : (p || E.previousElementSibling) && h.push(E);
      h.length > 0 && this.plugins.list.editInsideList.call(this, p, h), this.effectNode = null, this.setRange(m, C, y, _), this.history.push(!1);
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
      this.controllersOff(), o.setDisabledButtons(!s, this.codeViewDisabledButtons), s ? (o.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(l.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, b._hideToolbar())), this.nativeFocus(), o.removeClass(this._styleCommandMap.codeView, "active"), o.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), l.codeMirrorEditor && l.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, b._showToolbarInline())), this._variable._range = null, e.element.code.focus(), o.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && o.setDisabledButtons(!0, this.resizingDisabledButtons), typeof x.toggleCodeView == "function" && x.toggleCodeView(this._variable.isCodeView, this);
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
          const p = l._editableClass.split(" ");
          for (let v = 0; v < p.length; v++)
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
        const d = o.getAttributesToString(this._wd.body, null);
        r = `<!DOCTYPE html>
<html>
` + this._wd.head.outerHTML.replace(/>(?!\n)/g, `>
`) + "<body " + d + `>
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
      const r = e.element.topArea, d = e.element.toolbar, h = e.element.editorArea, p = e.element.wysiwygFrame, v = e.element.code, m = this._variable;
      this.controllersOff();
      const y = d.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      m.isFullScreen ? (m.isFullScreen = !1, p.style.cssText = m._wysiwygOriginCssText, v.style.cssText = m._codeOriginCssText, d.style.cssText = "", h.style.cssText = m._editorAreaOriginCssText, r.style.cssText = m._originCssText, u.body.style.overflow = m._bodyOverflow, l.height === "auto" && !l.codeMirrorEditor && b._codeViewAutoHeight(), l.toolbarContainer && l.toolbarContainer.appendChild(d), l.stickyToolbar > -1 && o.removeClass(d, "se-toolbar-sticky"), m._fullScreenAttrs.sticky && !l.toolbarContainer && (m._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", o.addClass(d, "se-toolbar-sticky")), this._isInline = m._fullScreenAttrs.inline, this._isBalloon = m._fullScreenAttrs.balloon, this._isInline && b._showToolbarInline(), l.toolbarContainer && o.removeClass(d, "se-toolbar-balloon"), b.onScroll_window(), s && o.changeElement(s.firstElementChild, g.expansion), e.element.topArea.style.marginTop = "", o.removeClass(this._styleCommandMap.fullScreen, "active")) : (m.isFullScreen = !0, m._fullScreenAttrs.inline = this._isInline, m._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), l.toolbarContainer && e.element.relative.insertBefore(d, h), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (m._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", o.removeClass(d, "se-toolbar-sticky")), m._bodyOverflow = u.body.style.overflow, u.body.style.overflow = "hidden", m._editorAreaOriginCssText = h.style.cssText, m._wysiwygOriginCssText = p.style.cssText, m._codeOriginCssText = v.style.cssText, h.style.cssText = d.style.cssText = "", p.style.cssText = (p.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + l._editorStyles.editor, v.style.cssText = (v.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], d.style.width = p.style.height = v.style.height = "100%", d.style.position = "relative", d.style.display = "block", m.innerHeight_fullScreen = f.innerHeight - d.offsetHeight, h.style.height = m.innerHeight_fullScreen - l.fullScreenOffset + "px", s && o.changeElement(s.firstElementChild, g.reduction), l.iframe && l.height === "auto" && (h.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = l.fullScreenOffset + "px", o.addClass(this._styleCommandMap.fullScreen, "active")), y && x.toolbar.hide(), typeof x.toggleFullScreen == "function" && x.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const s = o.createElement("IFRAME");
      s.style.display = "none", u.body.appendChild(s);
      const r = l.printTemplate ? l.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), d = o.getIframeDocument(s), h = this._wd;
      if (l.iframe) {
        const p = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? o.getAttributesToString(h.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        d.write(
          "<!DOCTYPE html><html><head>" + h.head.innerHTML + "</head><body " + p + ">" + r + "</body></html>"
        );
      } else {
        const p = u.head.getElementsByTagName("link"), v = u.head.getElementsByTagName("style");
        let m = "";
        for (let y = 0, C = p.length; y < C; y++)
          m += p[y].outerHTML;
        for (let y = 0, C = v.length; y < C; y++)
          m += v[y].outerHTML;
        d.write(
          "<!DOCTYPE html><html><head>" + m + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '">' + r + "</body></html>"
        );
      }
      this.showLoading(), f.setTimeout(function() {
        try {
          if (s.focus(), o.isIE_Edge || o.isChromium || u.documentMode || f.StyleMedia)
            try {
              s.contentWindow.document.execCommand("print", !1, null);
            } catch {
              s.contentWindow.print();
            }
          else
            s.contentWindow.print();
        } catch (p) {
          throw Error("[SUNEDITOR.core.print.fail] error: " + p);
        } finally {
          c.closeLoading(), o.removeItem(s);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      c.submenuOff(), c.containerOff(), c.controllersOff();
      const s = l.previewTemplate ? l.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), r = f.open("", "_blank");
      r.mimeType = "text/html";
      const d = this._wd;
      if (l.iframe) {
        const h = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? o.getAttributesToString(d.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + d.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + h + ">" + s + "</body></html>"
        );
      } else {
        const h = u.head.getElementsByTagName("link"), p = u.head.getElementsByTagName("style");
        let v = "";
        for (let m = 0, y = h.length; m < y; m++)
          v += h[m].outerHTML;
        for (let m = 0, y = p.length; m < y; m++)
          v += p[m].outerHTML;
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
      const r = s === "rtl", d = this._prevRtl !== r;
      this._prevRtl = l.rtl = r, d && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && o.changeElement(e.tool.indent.firstElementChild, g.indent), e.tool.outdent && o.changeElement(e.tool.outdent.firstElementChild, g.outdent));
      const h = e.element;
      r ? (o.addClass(h.topArea, "se-rtl"), o.addClass(h.wysiwygFrame, "se-rtl")) : (o.removeClass(h.topArea, "se-rtl"), o.removeClass(h.wysiwygFrame, "se-rtl"));
      const p = o.getListChildren(h.wysiwyg, function(m) {
        return o.isFormatElement(m) && (m.style.marginRight || m.style.marginLeft || m.style.textAlign);
      });
      for (let m = 0, y = p.length, C, _, S; m < y; m++)
        C = p[m], S = C.style.marginRight, _ = C.style.marginLeft, (S || _) && (C.style.marginRight = _, C.style.marginLeft = S), S = C.style.textAlign, S === "left" ? C.style.textAlign = "right" : S === "right" && (C.style.textAlign = "left");
      const v = e.tool;
      v.dir && (o.changeTxt(v.dir.querySelector(".se-tooltip-text"), n.toolbar[l.rtl ? "dir_ltr" : "dir_rtl"]), o.changeElement(v.dir.firstElementChild, g[l.rtl ? "dir_ltr" : "dir_rtl"])), v.dir_ltr && (r ? o.removeClass(v.dir_ltr, "active") : o.addClass(v.dir_ltr, "active")), v.dir_rtl && (r ? o.addClass(v.dir_rtl, "active") : o.removeClass(v.dir_rtl, "active"));
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
        const d = this.convertHTMLForCodeView(r, !1);
        this._setCodeView(d);
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
      const r = this.cleanHTML(e.element.wysiwyg.innerHTML, null, null), d = o.createElement("DIV");
      d.innerHTML = r;
      const h = o.getListChildren(d, function(p) {
        return p.hasAttribute("contenteditable");
      });
      for (let p = 0, v = h.length; p < v; p++)
        h[p].removeAttribute("contenteditable");
      if (l.fullPage && !s) {
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
      const d = l.defaultTag;
      if (s.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(s.nodeName)) return "";
        if (/__se__tag/.test(s.className)) return s.outerHTML;
        const h = o.getListChildNodes(s, function(p) {
          return o.isSpanWithoutAttr(p) && !o.getParentElement(p, o.isNotCheckingNode);
        }) || [];
        for (let p = h.length - 1; p >= 0; p--)
          h[p].outerHTML = h[p].innerHTML;
        return !r || o.isFormatElement(s) || o.isRangeFormatElement(s) || o.isComponent(s) || o.isFigures(s) || o.isAnchor(s) && o.isMedia(s.firstElementChild) ? o.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML : "<" + d + ">" + (o.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML) + "</" + d + ">";
      }
      if (s.nodeType === 3) {
        if (!r) return o._HTMLConvertor(s.textContent);
        const h = s.textContent.split(/\n/g);
        let p = "";
        for (let v = 0, m = h.length, y; v < m; v++)
          y = h[v].trim(), y.length > 0 && (p += "<" + d + ">" + o._HTMLConvertor(y) + "</" + d + ">");
        return p;
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
      return s.replace(this._disallowedTextTagsRegExp, function(d, h, p, v) {
        return h + (typeof r[p] == "string" ? r[p] : p) + (v ? " " + v : "");
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
      const d = this._w.Math, h = r.match(/(\d+(?:\.\d+)?)(.+)/), p = h ? h[1] * 1 : o.fontValueMap[r], v = h ? h[2] : "rem";
      let m = p;
      switch (/em/.test(v) ? m = d.round(p / 0.0625) : v === "pt" ? m = d.round(p * 1.333) : v === "%" && (m = p / 100), s) {
        case "em":
        case "rem":
        case "%":
          return (m * 0.0625).toFixed(2) + s;
        case "pt":
          return d.floor(m / 1.333) + s;
        default:
          return m + s;
      }
    },
    _cleanStyle: function(s, r, d) {
      let h = (s.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(d) && !h && (s.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const p = (s.match(/\ssize="([^"]+)"/i) || [])[1], v = (s.match(/\sface="([^"]+)"/i) || [])[1], m = (s.match(/\scolor="([^"]+)"/i) || [])[1];
        (p || v || m) && (h = 'style="' + (p ? "font-size:" + this.util.getNumber(p / 3.333, 1) + "rem;" : "") + (v ? "font-family:" + v + ";" : "") + (m ? "color:" + m + ";" : "") + '"');
      }
      if (h) {
        r || (r = []);
        const p = h.replace(/&quot;/g, "").match(this._cleanStyleRegExp[d]);
        if (p) {
          const v = [];
          for (let m = 0, y = p.length, C; m < y; m++)
            if (C = p[m].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), C && !/inherit|initial|revert|unset/i.test(C[3])) {
              const _ = o.kebabToCamelCase(C[1].trim()), S = this.wwComputedStyle[_] ? this.wwComputedStyle[_].replace(/"/g, "") : "", I = C[3].trim();
              switch (_) {
                case "fontFamily":
                  if (!l.plugins.font || l.font.indexOf(I) === -1) continue;
                  break;
                case "fontSize":
                  if (!l.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(C[0]) || (C[0] = C[0].replace((C[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, l.fontSizeUnit)));
                  break;
                case "color":
                  if (!l.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(I)) continue;
                  break;
                case "backgroundColor":
                  if (!l.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(I)) continue;
                  break;
              }
              S !== I && v.push(C[0]);
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
    _cleanTags: function(s, r, d) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(r)) return r;
      let h = null;
      const p = d.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), v = this._attributesTagsBlacklist[p];
      r = r.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), v ? r = r.replace(v, "") : r = r.replace(this._attributesBlacklistRegExp, "");
      const m = this._attributesTagsWhitelist[p];
      if (m ? h = r.match(m) : h = r.match(s ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), s || p === "span" || p === "li" || this._cleanStyleRegExp[p])
        if (p === "a") {
          const y = r.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          y && (h || (h = []), h.push(y[0]));
        } else (!h || !/style=/i.test(h.toString())) && ((p === "span" || p === "li") && (h = this._cleanStyle(r, h, "span")), this._cleanStyleRegExp[p] ? h = this._cleanStyle(r, h, p) : /^(P|DIV|H[1-6]|PRE)$/i.test(p) && (h = this._cleanStyle(r, h, "format")));
      else {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        y && !h ? h = [y[0]] : y && !h.some(function(C) {
          return /^style/.test(C.trim());
        }) && h.push(y[0]);
      }
      if (o.isFigures(p)) {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        h || (h = []), y && h.push(y[0]);
      }
      if (h)
        for (let y = 0, C = h.length, _; y < C; y++)
          _ = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(h[y].trim()) ? "" : h[y], d += (/^\s/.test(_) ? "" : " ") + _;
      return d;
    },
    /**
     * @description Determines if formatting is required and returns a domTree
     * @param {Element} dom documentFragment
     * @returns {Element}
     * @private
     */
    _editFormat: function(s) {
      let r = "", d;
      const h = s.childNodes;
      for (let p = 0, v = h.length, m; p < v; p++)
        m = h[p], m.nodeType === 8 ? r += "<!-- " + m.textContent + " -->" : !o.isFormatElement(m) && !o.isRangeFormatElement(m) && !o.isComponent(m) && !/meta/i.test(m.nodeName) ? (d || (d = o.createElement(l.defaultTag)), d.appendChild(m), p--, v--) : (d && (r += d.outerHTML, d = null), r += m.outerHTML);
      return d && (r += d.outerHTML), u.createRange().createContextualFragment(r);
    },
    _convertListCell: function(s) {
      let r = "";
      for (let d = 0, h = s.length, p; d < h; d++)
        p = s[d], p.nodeType === 1 ? o.isList(p) ? r += p.innerHTML : o.isListCell(p) ? r += p.outerHTML : o.isFormatElement(p) ? r += "<li>" + (p.innerHTML.trim() || "<br>") + "</li>" : o.isRangeFormatElement(p) && !o.isTable(p) ? r += this._convertListCell(p) : r += "<li>" + p.outerHTML + "</li>" : r += "<li>" + (p.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(s) {
      let r = !1;
      for (let d = 0, h = s.length, p; d < h; d++)
        if (p = s[d], p.nodeType === 1 && !o.isTextStyleElement(p) && !o.isBreak(p) && !this.__disallowedTagNameRegExp.test(p.nodeName)) {
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
    cleanHTML: function(s, r, d) {
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
        for (let C = 0, _ = y.length, S, I; C < _; C++) {
          I = [].slice.call(y[C].classList);
          for (let E = 0, B = I.length; E < B; E++)
            if (S = this.managedTagsInfo.map[I[E]], S) {
              S(y[C]);
              break;
            }
        }
      }
      let p = h.childNodes, v = "";
      const m = this._isFormatData(p);
      m && (p = this._editFormat(h).childNodes);
      for (let y = 0, C = p.length, _; y < C; y++) {
        if (_ = p[y], this.__allowedScriptRegExp.test(_.nodeName)) {
          v += _.outerHTML;
          continue;
        }
        v += this._makeLine(_, m);
      }
      return v = o.htmlRemoveWhiteSpace(v), v ? (r && (v = v.replace(typeof r == "string" ? o.createTagsWhitelist(r) : r, "")), d && (v = v.replace(typeof d == "string" ? o.createTagsBlacklist(d) : d, ""))) : v = s, this._tagConvertor(v);
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
        for (let m = 0, y = v.length, C, _; m < y; m++) {
          _ = [].slice.call(v[m].classList);
          for (let S = 0, I = _.length; S < I; S++)
            if (C = this.managedTagsInfo.map[_[S]], C) {
              C(v[m]);
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
          if (p || (p = o.createElement(l.defaultTag)), p.appendChild(m), v--, d[v + 1] && !o.isFormatElement(d[v + 1]))
            continue;
          m = p, p = null;
        }
        p && (h += this._makeLine(p, !0), p = null), h += this._makeLine(m, !0);
      }
      return p && (h += this._makeLine(p, !0)), h.length === 0 ? "<" + l.defaultTag + "><br></" + l.defaultTag + ">" : (h = o.htmlRemoveWhiteSpace(h), this._tagConvertor(h));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(s, r) {
      let d = "";
      const h = f.RegExp, p = new h("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), v = typeof s == "string" ? u.createRange().createContextualFragment(s) : s, m = (function(_) {
        return this.isFormatElement(_) || this.isComponent(_);
      }).bind(o), y = r ? "" : `
`;
      let C = r ? 0 : this._variable.codeIndent * 1;
      return C = C > 0 ? new f.Array(C + 1).join(" ") : "", function _(S, I) {
        const E = S.childNodes, B = p.test(S.nodeName), A = B ? I : "";
        for (let q = 0, Z = E.length, W, D, P, L, O, R; q < Z; q++) {
          if (W = E[q], L = p.test(W.nodeName), D = L ? y : "", P = m(W) && !B && !/^(TH|TD)$/i.test(S.nodeName) ? y : "", W.nodeType === 8) {
            d += `
<!-- ` + W.textContent.trim() + " -->" + D;
            continue;
          }
          if (W.nodeType === 3) {
            o.isList(W.parentElement) || (d += o._HTMLConvertor(/^\n+$/.test(W.data) ? "" : W.data));
            continue;
          }
          if (W.childNodes.length === 0) {
            d += (/^HR$/i.test(W.nodeName) ? y : "") + (/^PRE$/i.test(W.parentElement.nodeName) && /^BR$/i.test(W.nodeName) ? "" : A) + W.outerHTML + D;
            continue;
          }
          W.outerHTML ? (O = W.nodeName.toLowerCase(), R = A || L ? I : "", d += (P || (B ? "" : D)) + R + W.outerHTML.match(h("<" + O + "[^>]*>", "i"))[0] + D, _(W, I + C), d += (/\n$/.test(d) ? R : "") + "</" + O + ">" + (P || D || B || /^(TH|TD)$/i.test(W.nodeName) ? y : "")) : d += new f.XMLSerializer().serializeToString(W);
        }
      }(v, ""), d.trim() + y;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(s, r, d) {
      u.addEventListener(s, r, d), l.iframe && this._wd.addEventListener(s, r);
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
      const r = l.maxCharCount, d = l.charCounterType;
      let h = 0;
      if (s && (h = this.getCharLength(s, d)), this._setCharCount(), r > 0) {
        let p = !1;
        const v = x.getCharCount(d);
        if (v > r) {
          if (p = !0, h > 0) {
            this._editorRange();
            const m = this.getRange(), y = m.endOffset - 1, C = this.getSelectionNode().textContent, _ = m.endOffset - (v - r);
            this.getSelectionNode().textContent = C.slice(0, _ < 0 ? 0 : _) + C.slice(m.endOffset, C.length), this.setRange(m.endContainer, y, m.endContainer, y);
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
    checkCharCount: function(s, r) {
      if (l.maxCharCount) {
        const d = r || l.charCounterType, h = this.getCharLength(typeof s == "string" ? s : this._charTypeHTML && s.nodeType === 1 ? s.outerHTML : s.textContent, d);
        if (h > 0 && h + x.getCharCount(d) > l.maxCharCount)
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
      c.controllersOff();
      const s = b._responsiveButtonSize;
      if (s) {
        let r = 0;
        (c._isBalloon || c._isInline) && l.toolbarWidth === "auto" ? r = e.element.topArea.offsetWidth : r = e.element.toolbar.offsetWidth;
        let d = "default";
        for (let h = 1, p = s.length; h < p; h++)
          if (r < s[h]) {
            d = s[h] + "";
            break;
          }
        b._responsiveCurrentSize !== d && (b._responsiveCurrentSize = d, x.setToolbarButtons(b._responsiveButtons[d]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && f.setTimeout((function(s, r) {
        this.textContent && s && (this.textContent = s.getCharCount(r.charCounterType));
      }).bind(e.element.charCounter, x, l), 0);
    },
    /**
     * @description The character counter blinks.
     * @private
     */
    _callCounterBlink: function() {
      const s = e.element.charWrapper;
      s && !o.hasClass(s, "se-blink") && (o.addClass(s, "se-blink"), f.setTimeout(function() {
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
      const r = this.commandMap, d = this.activePlugins;
      for (let h in r)
        s.indexOf(h) > -1 || !o.hasOwn(r, h) || (d.indexOf(h) > -1 ? i[h].active.call(this, null) : r.OUTDENT && /^OUTDENT$/i.test(h) ? o.isImportantDisabled(r.OUTDENT) || r.OUTDENT.setAttribute("disabled", !0) : r.INDENT && /^INDENT$/i.test(h) ? o.isImportantDisabled(r.INDENT) || r.INDENT.removeAttribute("disabled") : o.removeClass(r[h], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(s, r) {
      const d = f.RegExp;
      this._ww = l.iframe ? e.element.wysiwygFrame.contentWindow : f, this._wd = u, this._charTypeHTML = l.charCounterType === "byte-html", this.wwComputedStyle = f.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = o.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + o.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(L) {
        return this.test(L) ? L : "";
      }).bind(l.allowedClassNames);
      const h = l.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new d("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new d("<(" + h + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + h + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new d("^(" + h + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new d("^" + (l.__allowedScriptTag ? "script" : "") + "$", "i"), !l.iframe && typeof f.ShadowRoot == "function") {
        let L = e.element.wysiwygFrame;
        for (; L; ) {
          if (L.shadowRoot) {
            this._shadowRoot = L.shadowRoot;
            break;
          } else if (L instanceof f.ShadowRoot) {
            this._shadowRoot = L;
            break;
          }
          L = L.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const p = f.Object.keys(l._textTagsMap), v = l.addTagsWhitelist ? l.addTagsWhitelist.split("|").filter(function(L) {
        return /b|i|ins|s|strike/i.test(L);
      }) : [];
      for (let L = 0; L < v.length; L++)
        p.splice(p.indexOf(v[L].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = p.length === 0 ? null : new d("(<\\/?)(" + p.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const m = function(L, O) {
        return L ? L === "*" ? "[a-z-]+" : O ? L + "|" + O : L : "^";
      }, _ = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", S = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = l._editorTagsWhitelist.indexOf("//") > -1 || l._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new d("^(" + m(l._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new d("^(" + (l.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = o.createTagsWhitelist(m(l._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = o.createTagsBlacklist(l.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = o.createTagsWhitelist(m(l.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = o.createTagsBlacklist(l.pasteTagsBlacklist);
      const I = '\\s*=\\s*(")[^"]*\\1', E = l.attributesWhitelist;
      let B = {}, A = "";
      if (E)
        for (let L in E)
          !o.hasOwn(E, L) || /^on[a-z]+$/i.test(E[L]) || (L === "all" ? A = m(E[L], _) : B[L] = new d("\\s(?:" + m(E[L], "") + ")" + I, "ig"));
      this._attributesWhitelistRegExp = new d("\\s(?:" + (A || _ + "|" + S) + ")" + I, "ig"), this._attributesWhitelistRegExp_all_data = new d("\\s(?:" + ((A || _) + "|data-[a-z0-9\\-]+") + ")" + I, "ig"), this._attributesTagsWhitelist = B;
      const q = l.attributesBlacklist;
      if (B = {}, A = "", q)
        for (let L in q)
          o.hasOwn(q, L) && (L === "all" ? A = m(q[L], "") : B[L] = new d("\\s(?:" + m(q[L], "") + ")" + I, "ig"));
      this._attributesBlacklistRegExp = new d("\\s(?:" + (A || "^") + ")" + I, "ig"), this._attributesTagsBlacklist = B, this._isInline = /inline/i.test(l.mode), this._isBalloon = /balloon|balloon-always/i.test(l.mode), this._isBalloonAlways = /balloon-always/i.test(l.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const Z = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let W = [], D, P;
      for (let L in i)
        if (o.hasOwn(i, L)) {
          if (D = i[L], P = t[L], (D.active || D.action) && P && this.callPlugin(L, null, P), typeof D.checkFileInfo == "function" && typeof D.resetFileInfo == "function" && (this.callPlugin(L, null, P), this._fileInfoPluginsCheck.push(D.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(D.resetFileInfo.bind(this))), f.Array.isArray(D.fileTags)) {
            const O = D.fileTags;
            this.callPlugin(L, null, P), this._fileManager.tags = this._fileManager.tags.concat(O), W.push(L);
            for (let R = 0, U = O.length; R < U; R++)
              this._fileManager.pluginMap[O[R].toLowerCase()] = L;
          }
          if (D.managedTags) {
            const O = D.managedTags();
            Z.push("." + O.className), this.managedTagsInfo.map[O.className] = O.method.bind(this);
          }
        }
      this.managedTagsInfo.query = Z.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new d("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new d("^(" + (W.length === 0 ? "^" : W.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = ja(this, this._onChange_historyStack.bind(this)), this.addModule([Wl]), l.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, l._editorStyles.editor && (e.element.wysiwyg.style.cssText = l._editorStyles.editor), l.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(s, r);
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
      this.hasFocus && b._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), x.onChange && x.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && b._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      this._iframeAuto ? f.setTimeout(function() {
        const s = c._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = s + "px", o.isResizeObserverSupported || c.__callResizeFunction(s, null);
      }) : o.isResizeObserverSupported || c.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(s, r) {
      s = s === -1 ? r.borderBoxSize && r.borderBoxSize[0] ? r.borderBoxSize[0].blockSize : r.contentRect.height + this._editorHeightPadding : s, this._editorHeight !== s && (typeof x.onResizeEditor == "function" && x.onResizeEditor(s, this._editorHeight, c, r), this._editorHeight = s);
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
      const r = this.getRange(), d = r.commonAncestorContainer, h = r.startContainer, p = o.getRangeFormatElement(d, null);
      let v, m, y;
      const C = o.getParentElement(d, o.isComponent);
      if (!(C && !o.isTable(C))) {
        if (d.nodeType === 1 && d.getAttribute("data-se-embed") === "true") {
          let _ = d.nextElementSibling;
          o.isFormatElement(_) || (_ = this.appendFormatTag(d, l.defaultTag)), this.setRange(_.firstChild, 0, _.firstChild, 0);
          return;
        }
        if (!((o.isRangeFormatElement(h) || o.isWysiwygDiv(h)) && (o.isComponent(h.children[r.startOffset]) || o.isComponent(h.children[r.startOffset - 1])))) {
          if (o.getParentElement(d, o.isNotCheckingNode)) return null;
          if (p) {
            y = o.createElement(s || l.defaultTag), y.innerHTML = p.innerHTML, y.childNodes.length === 0 && (y.innerHTML = o.zeroWidthSpace), p.innerHTML = y.outerHTML, y = p.firstChild, v = o.getEdgeChildNodes(y, null).sc, v || (v = o.createTextNode(o.zeroWidthSpace), y.insertBefore(v, y.firstChild)), m = v.textContent.length, this.setRange(v, m, v, m);
            return;
          }
          if (o.isRangeFormatElement(d) && d.childNodes.length <= 1) {
            let _ = null;
            d.childNodes.length === 1 && o.isBreak(d.firstChild) ? _ = d.firstChild : (_ = o.createTextNode(o.zeroWidthSpace), d.appendChild(_)), this.setRange(_, 1, _, 1);
            return;
          }
          try {
            if (d.nodeType === 3 && (y = o.createElement(s || l.defaultTag), d.parentNode.insertBefore(y, d), y.appendChild(d)), o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling), o.isBreak(v)) {
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
      this.context = e = Fi(s.originElement, this._getConstructed(s), l), this._componentsInfoReset = !0, this._editorInit(!0, r);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(s, r) {
      this._init(s, r), b._addEvent(), this._setCharCount(), b._offStickyToolbar(), b.onResize_window(), e.element.toolbar.style.visibility = "";
      const d = l.frameAttrbutes;
      for (let h in d)
        e.element.wysiwyg.setAttribute(h, d[h]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), f.setTimeout(function() {
        typeof c._resourcesStateChange == "function" && (b._resizeObserver && b._resizeObserver.observe(e.element.wysiwygFrame), b._toolbarObserver && b._toolbarObserver.observe(e.element._toolbarShadow), c._resourcesStateChange(), typeof x.onload == "function" && x.onload(c, s));
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
  }, b = {
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
    _onButtonsCheck: new f.RegExp("^(" + f.Object.keys(l._textTagsMap).join("|") + ")$", "i"),
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
    _shortcutCommand: function(s, r) {
      let d = null;
      const h = b._keyCodeShortcut[s];
      switch (h) {
        case "A":
          d = "selectAll";
          break;
        case "B":
          l.shortcutsDisable.indexOf("bold") === -1 && (d = "bold");
          break;
        case "S":
          r && l.shortcutsDisable.indexOf("strike") === -1 ? d = "strike" : !r && l.shortcutsDisable.indexOf("save") === -1 && (d = "save");
          break;
        case "U":
          l.shortcutsDisable.indexOf("underline") === -1 && (d = "underline");
          break;
        case "I":
          l.shortcutsDisable.indexOf("italic") === -1 && (d = "italic");
          break;
        case "Z":
          l.shortcutsDisable.indexOf("undo") === -1 && (r ? d = "redo" : d = "undo");
          break;
        case "Y":
          l.shortcutsDisable.indexOf("undo") === -1 && (d = "redo");
          break;
        case "[":
          l.shortcutsDisable.indexOf("indent") === -1 && (d = l.rtl ? "indent" : "outdent");
          break;
        case "]":
          l.shortcutsDisable.indexOf("indent") === -1 && (d = l.rtl ? "outdent" : "indent");
          break;
      }
      return d ? (c.commandHandler(c.commandMap[d], d), !0) : !!h;
    },
    _applyTagEffects: function() {
      if (o.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let s = c.getSelectionNode();
      if (s === c.effectNode) return;
      c.effectNode = s;
      const r = l.rtl ? "marginRight" : "marginLeft", d = c.commandMap, h = b._onButtonsCheck, p = [], v = [], m = c.activePlugins, y = m.length;
      let C = "";
      for (; s.firstChild; )
        s = s.firstChild;
      for (let _ = s; !o.isWysiwygDiv(_) && _; _ = _.parentNode)
        if (!(_.nodeType !== 1 || o.isBreak(_))) {
          if (C = _.nodeName.toUpperCase(), v.push(C), !c.isReadOnly)
            for (let S = 0, I; S < y; S++)
              I = m[S], p.indexOf(I) === -1 && i[I].active.call(c, _) && p.push(I);
          if (o.isFormatElement(_)) {
            p.indexOf("OUTDENT") === -1 && d.OUTDENT && !o.isImportantDisabled(d.OUTDENT) && (o.isListCell(_) || _.style[r] && o.getNumber(_.style[r], 0) > 0) && (p.push("OUTDENT"), d.OUTDENT.removeAttribute("disabled")), p.indexOf("INDENT") === -1 && d.INDENT && !o.isImportantDisabled(d.INDENT) && (p.push("INDENT"), o.isListCell(_) && !_.previousElementSibling ? d.INDENT.setAttribute("disabled", !0) : d.INDENT.removeAttribute("disabled"));
            continue;
          }
          h && h.test(C) && (p.push(C), o.addClass(d[C], "active"));
        }
      c._setKeyEffect(p), c._variable.currentNodes = v.reverse(), c._variable.currentNodesMap = p, l.showPathLabel && (e.element.navigation.textContent = c._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(s) {
      let r = s.target;
      if (c._bindControllersOff && s.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? c._antiBlur = !1 : s.preventDefault(), o.getParentElement(r, ".se-submenu"))
        s.stopPropagation(), c._notHideToolbar = !0;
      else {
        let d = r.getAttribute("data-command"), h = r.className;
        for (; !d && !/se-menu-list/.test(h) && !/sun-editor-common/.test(h); )
          r = r.parentNode, d = r.getAttribute("data-command"), h = r.className;
        (d === c._submenuName || d === c._containerName) && s.stopPropagation();
      }
    },
    addGlobalEvent: function(s, r, d) {
      return l.iframe && c._ww.addEventListener(s, r, d), c._w.addEventListener(s, r, d), {
        type: s,
        listener: r,
        useCapture: d
      };
    },
    removeGlobalEvent: function(s, r, d) {
      s && (typeof s == "object" && (r = s.listener, d = s.useCapture, s = s.type), l.iframe && c._ww.removeEventListener(s, r, d), c._w.removeEventListener(s, r, d));
    },
    onClick_toolbar: function(s) {
      let r = s.target, d = r.getAttribute("data-display"), h = r.getAttribute("data-command"), p = r.className;
      for (c.controllersOff(); r.parentNode && !h && !/se-menu-list/.test(p) && !/se-toolbar/.test(p); )
        r = r.parentNode, h = r.getAttribute("data-command"), d = r.getAttribute("data-display"), p = r.className;
      !h && !d || r.disabled || c.actionCall(h, d, r);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(s) {
      if (c.isReadOnly || o.isNonEditable(e.element.wysiwyg)) return;
      if (o._isExcludeSelectionElement(s.target)) {
        s.preventDefault();
        return;
      }
      if (b.removeGlobalEvent(b.__selectionSyncEvent), b.__selectionSyncEvent = b.addGlobalEvent("mouseup", function() {
        c && c._editorRange(), b.removeGlobalEvent(b.__selectionSyncEvent);
      }), typeof x.onMouseDown == "function" && x.onMouseDown(s, c) === !1) return;
      const r = o.getParentElement(s.target, o.isCell);
      if (r) {
        const d = c.plugins.table;
        d && r !== d._fixedCell && !d._shift && c.callPlugin("table", function() {
          d.onTableCellMultiSelect.call(c, r, !1);
        }, null);
      }
      c._isBalloon && b._hideToolbar();
    },
    onClick_wysiwyg: function(s) {
      const r = s.target;
      if (c.isReadOnly)
        return s.preventDefault(), o.isAnchor(r) && f.open(r.href, r.target), !1;
      if (o.isNonEditable(e.element.wysiwyg) || typeof x.onClick == "function" && x.onClick(s, c) === !1) return;
      const d = c.getFileComponent(r);
      if (d) {
        s.preventDefault(), c.selectComponent(d.target, d.pluginName);
        return;
      }
      const h = o.getParentElement(r, "FIGCAPTION");
      if (h && o.isNonEditable(h) && (s.preventDefault(), h.focus(), c._isInline && !c._inlineToolbarAttr.isShow)) {
        b._showToolbarInline();
        const _ = function() {
          b._hideToolbar(), h.removeEventListener("blur", _);
        };
        h.addEventListener("blur", _);
      }
      if (c._editorRange(), s.detail === 3) {
        let _ = c.getRange();
        o.isFormatElement(_.endContainer) && _.endOffset === 0 && (_ = c.setRange(_.startContainer, _.startOffset, _.startContainer, _.startContainer.length), c._rangeInfo(_, c.getSelection()));
      }
      const p = c.getSelectionNode(), v = o.getFormatElement(p, null), m = o.getRangeFormatElement(p, null);
      let y = p;
      for (; y && y.firstChild; ) y = y.firstChild;
      const C = c.getFileComponent(y);
      if (C) {
        const _ = c.getRange();
        !m && _.startContainer === _.endContainer && c.selectComponent(C.target, C.pluginName);
      } else c.currentFileComponentInfo && c.controllersOff();
      if (!v && !o.isNonEditable(r) && !o.isList(m)) {
        const _ = c.getRange();
        if (o.getFormatElement(_.startContainer) === o.getFormatElement(_.endContainer))
          if (o.isList(m)) {
            s.preventDefault();
            const S = o.createElement("LI"), I = p.nextElementSibling;
            S.appendChild(p), m.insertBefore(S, I), c.focus();
          } else !o.isWysiwygDiv(p) && !o.isComponent(p) && (!o.isTable(p) || o.isCell(p)) && c._setDefaultFormat(o.isRangeFormatElement(m) ? "DIV" : l.defaultTag) !== null ? (s.preventDefault(), c.focus()) : b._applyTagEffects();
      } else
        b._applyTagEffects();
      c._isBalloon && f.setTimeout(b._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      b._balloonDelay && f.clearTimeout(b._balloonDelay), b._balloonDelay = f.setTimeout((function() {
        f.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon();
      }).bind(b), 350);
    },
    _toggleToolbarBalloon: function() {
      if (c) {
        c._editorRange();
        const s = c.getRange();
        c._bindControllersOff || !c._isBalloonAlways && s.collapsed ? b._hideToolbar() : b._showToolbarBalloon(s);
      }
    },
    _showToolbarBalloon: function(s) {
      if (!c._isBalloon) return;
      const r = s || c.getRange(), d = e.element.toolbar, h = e.element.topArea, p = c.getSelection();
      let v;
      if (c._isBalloonAlways && r.collapsed)
        v = !0;
      else if (p.focusNode === p.anchorNode)
        v = p.focusOffset < p.anchorOffset;
      else {
        const D = o.getListChildNodes(r.commonAncestorContainer, null);
        v = o.getArrayIndex(D, p.focusNode) < o.getArrayIndex(D, p.anchorNode);
      }
      let m = r.getClientRects();
      m = m[v ? 0 : m.length - 1];
      const y = c.getGlobalScrollOffset();
      let C = y.left, _ = y.top;
      const S = h.offsetWidth, I = b._getEditorOffsets(null), E = I.top, B = I.left;
      if (d.style.top = "-10000px", d.style.visibility = "hidden", d.style.display = "block", !m) {
        const D = c.getSelectionNode();
        if (o.isFormatElement(D)) {
          const P = o.createTextNode(o.zeroWidthSpace);
          c.insertNode(P, null, !1), c.setRange(P, 1, P, 1), c._editorRange(), m = c.getRange().getClientRects(), m = m[v ? 0 : m.length - 1];
        }
        if (!m) {
          const P = o.getOffset(D, e.element.wysiwygFrame);
          m = {
            left: P.left,
            top: P.top,
            right: P.left,
            bottom: P.top + D.offsetHeight,
            noText: !0
          }, C = 0, _ = 0;
        }
        v = !0;
      }
      const A = f.Math.round(e.element._arrow.offsetWidth / 2), q = d.offsetWidth, Z = d.offsetHeight, W = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (W && (m = {
        left: m.left + W.left,
        top: m.top + W.top,
        right: m.right + W.right - W.width,
        bottom: m.bottom + W.bottom - W.height
      }), b._setToolbarOffset(v, m, d, B, S, C, _, E, A), (q !== d.offsetWidth || Z !== d.offsetHeight) && b._setToolbarOffset(v, m, d, B, S, C, _, E, A), l.toolbarContainer) {
        const D = h.parentElement;
        let P = l.toolbarContainer, L = P.offsetLeft, O = P.offsetTop;
        for (; !P.parentElement.contains(D) || !/^(BODY|HTML)$/i.test(P.parentElement.nodeName); )
          P = P.offsetParent, L += P.offsetLeft, O += P.offsetTop;
        d.style.left = d.offsetLeft - L + h.offsetLeft + "px", d.style.top = d.offsetTop - O + h.offsetTop + "px";
      }
      d.style.visibility = "";
    },
    _setToolbarOffset: function(s, r, d, h, p, v, m, y, C) {
      const S = d.offsetWidth, I = r.noText && !s ? 0 : d.offsetHeight, E = (s ? r.left : r.right) - h - S / 2 + v, B = E + S - p;
      let A = (s ? r.top - I - C : r.bottom + C) - (r.noText ? 0 : y) + m, q = E < 0 ? 1 : B < 0 ? E : E - B - 1 - 1, Z = !1;
      const W = A + (s ? b._getEditorOffsets(null).top : d.offsetHeight - e.element.wysiwyg.offsetHeight);
      !s && W > 0 && b._getPageBottomSpace() < W ? (s = !0, Z = !0) : s && u.documentElement.offsetTop > W && (s = !1, Z = !0), Z && (A = (s ? r.top - I - C : r.bottom + C) - (r.noText ? 0 : y) + m), d.style.left = f.Math.floor(q) + "px", d.style.top = f.Math.floor(A) + "px", s ? (o.removeClass(e.element._arrow, "se-arrow-up"), o.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = I + "px") : (o.removeClass(e.element._arrow, "se-arrow-down"), o.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -C + "px");
      const D = f.Math.floor(S / 2 + (E - q));
      e.element._arrow.style.left = (D + C > d.offsetWidth ? d.offsetWidth - C : D < C ? C : D) + "px";
    },
    _showToolbarInline: function() {
      if (!c._isInline) return;
      const s = e.element.toolbar;
      l.toolbarContainer ? s.style.position = "relative" : s.style.position = "absolute", s.style.visibility = "hidden", s.style.display = "block", c._inlineToolbarAttr.width = s.style.width = l.toolbarWidth, c._inlineToolbarAttr.top = s.style.top = (l.toolbarContainer ? 0 : -1 - s.offsetHeight) + "px", typeof x.showInline == "function" && x.showInline(s, e, c), b.onScroll_window(), c._inlineToolbarAttr.isShow = !0, s.style.visibility = "";
    },
    _hideToolbar: function() {
      !c._notHideToolbar && !c._variable.isFullScreen && (e.element.toolbar.style.display = "none", c._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(s) {
      if (/AUDIO/.test(s.target.nodeName)) return !1;
      if (c.isReadOnly || c.isDisabled)
        return s.preventDefault(), s.stopPropagation(), c.history.go(c.history.getCurrentIndex()), !1;
      const r = c.getRange(), d = c.getSelectionNode(), h = o.getFormatElement(d, null);
      if (!h && r.collapsed && !o.isComponent(d) && !o.isList(d)) {
        const v = o.getRangeFormatElement(h, null);
        c._setDefaultFormat(o.isRangeFormatElement(v) ? "DIV" : l.defaultTag);
      }
      c._editorRange();
      const p = (s.data === null ? "" : s.data === void 0 ? " " : s.data) || "";
      if (!c._charCount(p))
        return s.preventDefault(), s.stopPropagation(), !1;
      typeof x.onInput == "function" && x.onInput(s, c) === !1 || c.history.push(!0);
    },
    _isUneditableNode: function(s, r) {
      const d = r ? s.startContainer : s.endContainer, h = r ? s.startOffset : s.endOffset, p = r ? "previousSibling" : "nextSibling", v = d.nodeType === 1;
      let m;
      return v ? (m = b._isUneditableNode_getSibling(d.childNodes[h], p, d), m && m.nodeType === 1 && m.getAttribute("contenteditable") === "false") : (m = b._isUneditableNode_getSibling(d, p, d), c.isEdgePoint(d, h, r ? "start" : "end") && m && m.nodeType === 1 && m.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(s, r, d) {
      if (!s) return null;
      let h = s[r];
      if (!h)
        if (h = o.getFormatElement(d), h = h ? h[r] : null, h && !o.isComponent(h)) h = r === "previousSibling" ? h.firstChild : h.lastChild;
        else return null;
      return h;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(s) {
      let r = c.getSelectionNode();
      if (o.isInputElement(r)) return;
      const d = s.keyCode, h = s.shiftKey, p = s.ctrlKey || s.metaKey || d === 91 || d === 92 || d === 224, v = s.altKey;
      if (b._IEisComposing = d === 229, !p && c.isReadOnly && !b._cursorMoveKeyCode.test(d))
        return s.preventDefault(), !1;
      if (c.submenuOff(), c._isBalloon && b._hideToolbar(), typeof x.onKeyDown == "function" && x.onKeyDown(s, c) === !1) return;
      if (p && b._shortcutCommand(d, h))
        return b._onShortcutKey = !0, s.preventDefault(), s.stopPropagation(), !1;
      b._onShortcutKey && (b._onShortcutKey = !1), d === 13 && o.isFormatElement(c.getRange().startContainer) && (c._resetRangeToTextNode(), r = c.getSelectionNode());
      const m = c.getRange(), y = !m.collapsed || m.startContainer !== m.endContainer, C = c._fileManager.pluginRegExp.test(c.currentControllerName) ? c.currentControllerName : "";
      let _ = o.getFormatElement(r, null) || r, S = o.getRangeFormatElement(_, null);
      if (!(/37|38|39|40/.test(s.keyCode) && b._onKeyDown_wysiwyg_arrowKey(s) === !1)) {
        switch (d) {
          case 8:
            if (!y && C) {
              s.preventDefault(), s.stopPropagation(), c.plugins[C].destroy.call(c);
              break;
            }
            if (y && b._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!o.isFormatElement(_) && !e.element.wysiwyg.firstElementChild && !o.isComponent(r) && c._setDefaultFormat(l.defaultTag) !== null)
              return s.preventDefault(), s.stopPropagation(), !1;
            if (!y && !_.previousElementSibling && m.startOffset === 0 && !r.previousSibling && !o.isListCell(_) && o.isFormatElement(_) && (!o.isFreeFormatElement(_) || o.isClosureFreeFormatElement(_))) {
              if (o.isClosureRangeFormatElement(_.parentNode))
                return s.preventDefault(), s.stopPropagation(), !1;
              if (o.isWysiwygDiv(_.parentNode) && _.childNodes.length <= 1 && (!_.firstChild || o.onlyZeroWidthSpace(_.textContent))) {
                if (s.preventDefault(), s.stopPropagation(), _.nodeName.toUpperCase() === l.defaultTag.toUpperCase()) {
                  _.innerHTML = "<br>";
                  const R = _.attributes;
                  for (; R[0]; )
                    _.removeAttribute(R[0].name);
                } else {
                  const R = o.createElement(l.defaultTag);
                  R.innerHTML = "<br>", _.parentElement.replaceChild(R, _);
                }
                return c.nativeFocus(), !1;
              }
            }
            const E = m.startContainer;
            if (_ && !_.previousElementSibling && m.startOffset === 0 && E.nodeType === 3 && !o.isFormatElement(E.parentNode)) {
              let R = E.parentNode.previousSibling;
              const U = E.parentNode.nextSibling;
              R || (U ? R = U : (R = o.createElement("BR"), _.appendChild(R)));
              let N = E;
              for (; _.contains(N) && !N.previousSibling; )
                N = N.parentNode;
              if (!_.contains(N)) {
                E.textContent = "", o.removeItemAllParents(E, null, _);
                break;
              }
            }
            if (b._isUneditableNode(m, !0)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            !y && c._isEdgeFormat(m.startContainer, m.startOffset, "start") && o.isFormatElement(_.previousElementSibling) && (c._formatAttrsTemp = _.previousElementSibling.attributes);
            const B = m.commonAncestorContainer;
            if (_ = o.getFormatElement(m.startContainer, null), S = o.getRangeFormatElement(_, null), S && _ && !o.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
              if (o.isListCell(_) && o.isList(S) && (o.isListCell(S.parentNode) || _.previousElementSibling) && (r === _ || r.nodeType === 3 && (!r.previousSibling || o.isList(r.previousSibling))) && (o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null) ? S.contains(m.startContainer) : m.startOffset === 0 && m.collapsed)) {
                if (m.startContainer !== m.endContainer)
                  s.preventDefault(), c.removeNode(), m.startContainer.nodeType === 3 && c.setRange(m.startContainer, m.startContainer.textContent.length, m.startContainer, m.startContainer.textContent.length), c.history.push(!0);
                else {
                  let R = _.previousElementSibling || S.parentNode;
                  if (o.isListCell(R)) {
                    s.preventDefault();
                    let U = R;
                    if (!R.contains(_) && o.isListCell(U) && o.isList(U.lastElementChild)) {
                      for (U = U.lastElementChild.lastElementChild; o.isListCell(U) && o.isList(U.lastElementChild); )
                        U = U.lastElementChild && U.lastElementChild.lastElementChild;
                      R = U;
                    }
                    let N = R === S.parentNode ? S.previousSibling : R.lastChild;
                    N || (N = o.createTextNode(o.zeroWidthSpace), S.parentNode.insertBefore(N, S.parentNode.firstChild));
                    const V = N.nodeType === 3 ? N.textContent.length : 1, M = _.childNodes;
                    let $ = N, ie = M[0];
                    for (; ie = M[0]; )
                      R.insertBefore(ie, $.nextSibling), $ = ie;
                    o.removeItem(_), S.children.length === 0 && o.removeItem(S), c.setRange(N, V, N, V), c.history.push(!0);
                  }
                }
                break;
              }
              if (!y && m.startOffset === 0) {
                let R = !0, U = B;
                for (; U && U !== S && !o.isWysiwygDiv(U); ) {
                  if (U.previousSibling && (U.previousSibling.nodeType === 1 || !o.onlyZeroWidthSpace(U.previousSibling.textContent.trim()))) {
                    R = !1;
                    break;
                  }
                  U = U.parentNode;
                }
                if (R && S.parentNode) {
                  s.preventDefault(), c.detachRangeFormatElement(S, o.isListCell(_) ? [_] : null, null, !1, !1), c.history.push(!0);
                  break;
                }
              }
            }
            if (!y && _ && (m.startOffset === 0 || r === _ && _.childNodes[m.startOffset])) {
              const R = r === _ ? _.childNodes[m.startOffset] : r, U = _.previousSibling, N = (B.nodeType === 3 || o.isBreak(B)) && !B.previousSibling && m.startOffset === 0;
              if (R && !R.previousSibling && (B && o.isComponent(B.previousSibling) || N && o.isComponent(U))) {
                const V = c.getFileComponent(U);
                V ? (s.preventDefault(), s.stopPropagation(), _.textContent.length === 0 && o.removeItem(_), c.selectComponent(V.target, V.pluginName) === !1 && c.blur()) : o.isComponent(U) && (s.preventDefault(), s.stopPropagation(), o.removeItem(U));
                break;
              }
              if (R && o.isNonEditable(R.previousSibling)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(R.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (C) {
              s.preventDefault(), s.stopPropagation(), c.plugins[C].destroy.call(c);
              break;
            }
            if (y && b._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!y && c._isEdgeFormat(m.endContainer, m.endOffset, "end") && !_.nextSibling) {
              s.preventDefault(), s.stopPropagation();
              return;
            }
            if (b._isUneditableNode(m, !1)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if ((o.isFormatElement(r) || r.nextSibling === null || o.onlyZeroWidthSpace(r.nextSibling) && r.nextSibling.nextSibling === null) && m.startOffset === r.textContent.length) {
              const R = _.nextElementSibling;
              if (!R) break;
              if (o.isComponent(R)) {
                if (s.preventDefault(), o.onlyZeroWidthSpace(_) && (o.removeItem(_), o.isTable(R))) {
                  let N = o.getChildElement(R, o.isCell, !1);
                  N = N.firstElementChild || N, c.setRange(N, 0, N, 0);
                  break;
                }
                const U = c.getFileComponent(R);
                U ? (s.stopPropagation(), c.selectComponent(U.target, U.pluginName) === !1 && c.blur()) : o.isComponent(R) && (s.stopPropagation(), o.removeItem(R));
                break;
              }
            }
            if (!y && (c.isEdgePoint(m.endContainer, m.endOffset) || r === _ && _.childNodes[m.startOffset])) {
              const R = r === _ && _.childNodes[m.startOffset] || r;
              if (R && o.isNonEditable(R.nextSibling)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(R.nextSibling);
                break;
              } else if (o.isComponent(R)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(R);
                break;
              }
            }
            if (!y && c._isEdgeFormat(m.endContainer, m.endOffset, "end") && o.isFormatElement(_.nextElementSibling) && (c._formatAttrsTemp = _.attributes), _ = o.getFormatElement(m.startContainer, null), S = o.getRangeFormatElement(_, null), o.isListCell(_) && o.isList(S) && (r === _ || r.nodeType === 3 && (!r.nextSibling || o.isList(r.nextSibling)) && (o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null) ? S.contains(m.endContainer) : m.endOffset === r.textContent.length && m.collapsed))) {
              m.startContainer !== m.endContainer && c.removeNode();
              let R = o.getArrayItem(_.children, o.isList, !1);
              if (R = R || _.nextElementSibling || S.parentNode.nextElementSibling, R && (o.isList(R) || o.getArrayItem(R.children, o.isList, !1))) {
                s.preventDefault();
                let U, N;
                if (o.isList(R)) {
                  const V = R.firstElementChild;
                  for (N = V.childNodes, U = N[0]; N[0]; )
                    _.insertBefore(N[0], R);
                  o.removeItem(V);
                } else {
                  for (U = R.firstChild, N = R.childNodes; N[0]; )
                    _.appendChild(N[0]);
                  o.removeItem(R);
                }
                c.setRange(U, 0, U, 0), c.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (C || l.tabDisable || (s.preventDefault(), p || v || o.isWysiwygDiv(r))) break;
            const A = !m.collapsed || c.isEdgePoint(m.startContainer, m.startOffset), q = c.getSelectedElements(null);
            r = c.getSelectionNode();
            const Z = [];
            let W = [], D = o.isListCell(q[0]), P = o.isListCell(q[q.length - 1]), L = { sc: m.startContainer, so: m.startOffset, ec: m.endContainer, eo: m.endOffset };
            for (let R = 0, U = q.length, N; R < U; R++)
              if (N = q[R], o.isListCell(N)) {
                if (!N.previousElementSibling && !h)
                  continue;
                Z.push(N);
              } else
                W.push(N);
            if (Z.length > 0 && A && c.plugins.list)
              L = c.plugins.list.editInsideList.call(c, h, Z);
            else {
              const R = o.getParentElement(r, o.isCell);
              if (R && A) {
                const U = o.getParentElement(R, "table"), N = o.getListChildren(U, o.isCell);
                let V = h ? o.prevIdx(N, R) : o.nextIdx(N, R);
                V === N.length && !h && (V = 0), V === -1 && h && (V = N.length - 1);
                let M = N[V];
                if (!M) break;
                M = M.firstElementChild || M, c.setRange(M, 0, M, 0);
                break;
              }
              W = W.concat(Z), D = P = null;
            }
            if (W.length > 0)
              if (h) {
                const R = W.length - 1;
                for (let V = 0, M; V <= R; V++) {
                  M = W[V].childNodes;
                  for (let $ = 0, ie = M.length, G; $ < ie && (G = M[$], !!G); $++)
                    if (!o.onlyZeroWidthSpace(G)) {
                      /^\s{1,4}$/.test(G.textContent) ? o.removeItem(G) : /^\s{1,4}/.test(G.textContent) && (G.textContent = G.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const U = o.getChildElement(W[0], "text", !1), N = o.getChildElement(W[R], "text", !0);
                !D && U && (L.sc = U, L.so = 0), !P && N && (L.ec = N, L.eo = N.textContent.length);
              } else {
                const R = o.createTextNode(new f.Array(c._variable.tabSize + 1).join(" "));
                if (W.length === 1) {
                  if (!c.insertNode(R, null, !0)) return !1;
                  D || (L.sc = R, L.so = R.length), P || (L.ec = R, L.eo = R.length);
                } else {
                  const U = W.length - 1;
                  for (let M = 0, $; M <= U; M++)
                    $ = W[M].firstChild, $ && (o.isBreak($) ? W[M].insertBefore(R.cloneNode(!1), $) : $.textContent = R.textContent + $.textContent);
                  const N = o.getChildElement(W[0], "text", !1), V = o.getChildElement(W[U], "text", !0);
                  !D && N && (L.sc = N, L.so = 0), !P && V && (L.ec = V, L.eo = V.textContent.length);
                }
              }
            c.setRange(L.sc, L.so, L.ec, L.eo), c.history.push(!1);
            break;
          case 13:
            const O = o.getFreeFormatElement(r, null);
            if (c._charTypeHTML) {
              let R = "";
              if (!h && O || h ? R = "<br>" : R = "<" + _.nodeName + "><br></" + _.nodeName + ">", !c.checkCharCount(R, "byte-html"))
                return s.preventDefault(), !1;
            }
            if (!h && !C) {
              const R = c._isEdgeFormat(m.endContainer, m.endOffset, "end"), U = c._isEdgeFormat(m.startContainer, m.startOffset, "start");
              if (R && (/^H[1-6]$/i.test(_.nodeName) || /^HR$/i.test(_.nodeName))) {
                b._enterPrevent(s);
                let N = null;
                const V = c.appendFormatTag(_, l.defaultTag);
                if (R && R.length > 0) {
                  N = R.pop();
                  const M = N;
                  for (; R.length > 0; )
                    N = N.appendChild(R.pop());
                  V.appendChild(M);
                }
                if (N = N ? N.appendChild(V.firstChild) : V.firstChild, o.isBreak(N)) {
                  const M = o.createTextNode(o.zeroWidthSpace);
                  N.parentNode.insertBefore(M, N), c.setRange(M, 1, M, 1);
                } else
                  c.setRange(N, 0, N, 0);
                break;
              } else if (S && _ && !o.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
                const N = c.getRange();
                if (c.isEdgePoint(N.endContainer, N.endOffset) && o.isList(r.nextSibling)) {
                  b._enterPrevent(s);
                  const V = o.createElement("LI"), M = o.createElement("BR");
                  V.appendChild(M), _.parentNode.insertBefore(V, _.nextElementSibling), V.appendChild(r.nextSibling), c.setRange(M, 1, M, 1);
                  break;
                }
                if ((N.commonAncestorContainer.nodeType !== 3 || !N.commonAncestorContainer.nextElementSibling) && o.onlyZeroWidthSpace(_.innerText.trim()) && !o.isListCell(_.nextElementSibling)) {
                  b._enterPrevent(s);
                  let V = null;
                  if (o.isListCell(S.parentNode)) {
                    const M = _.parentNode.parentNode;
                    S = M.parentNode;
                    const $ = o.createElement("LI");
                    $.innerHTML = "<br>", o.copyTagAttributes($, _, l.lineAttrReset), V = $, S.insertBefore(V, M.nextElementSibling);
                  } else {
                    const M = o.isCell(S.parentNode) ? "DIV" : o.isList(S.parentNode) ? "LI" : o.isFormatElement(S.nextElementSibling) && !o.isRangeFormatElement(S.nextElementSibling) ? S.nextElementSibling.nodeName : o.isFormatElement(S.previousElementSibling) && !o.isRangeFormatElement(S.previousElementSibling) ? S.previousElementSibling.nodeName : l.defaultTag;
                    V = o.createElement(M), o.copyTagAttributes(V, _, l.lineAttrReset);
                    const $ = c.detachRangeFormatElement(S, [_], null, !0, !0);
                    $.cc.insertBefore(V, $.ec);
                  }
                  V.innerHTML = "<br>", o.removeItemAllParents(_, null, null), c.setRange(V, 1, V, 1);
                  break;
                }
              }
              if (O) {
                b._enterPrevent(s);
                const N = r === O, V = c.getSelection(), M = r.childNodes, $ = V.focusOffset, ie = r.previousElementSibling, G = r.nextSibling;
                if (!o.isClosureFreeFormatElement(O) && M && (N && m.collapsed && M.length - 1 <= $ + 1 && o.isBreak(M[$]) && (!M[$ + 1] || (!M[$ + 2] || o.onlyZeroWidthSpace(M[$ + 2].textContent)) && M[$ + 1].nodeType === 3 && o.onlyZeroWidthSpace(M[$ + 1].textContent)) && $ > 0 && o.isBreak(M[$ - 1]) || !N && o.onlyZeroWidthSpace(r.textContent) && o.isBreak(ie) && (o.isBreak(ie.previousSibling) || !o.onlyZeroWidthSpace(ie.previousSibling.textContent)) && (!G || !o.isBreak(G) && o.onlyZeroWidthSpace(G.textContent)))) {
                  N ? o.removeItem(M[$ - 1]) : o.removeItem(r);
                  const X = c.appendFormatTag(O, o.isFormatElement(O.nextElementSibling) && !o.isRangeFormatElement(O.nextElementSibling) ? O.nextElementSibling : null);
                  o.copyFormatAttributes(X, O), c.setRange(X, 1, X, 1);
                  break;
                }
                if (N) {
                  x.insertHTML(m.collapsed && o.isBreak(m.startContainer.childNodes[m.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let X = V.focusNode;
                  const Q = V.focusOffset;
                  O === X && (X = X.childNodes[Q - $ > 1 ? Q - 1 : Q]), c.setRange(X, 1, X, 1);
                } else {
                  const X = V.focusNode.nextSibling, Q = o.createElement("BR");
                  c.insertNode(Q, null, !1);
                  const se = Q.previousSibling, ue = Q.nextSibling;
                  !o.isBreak(X) && !o.isBreak(se) && (!ue || o.onlyZeroWidthSpace(ue)) ? (Q.parentNode.insertBefore(Q.cloneNode(!1), Q), c.setRange(Q, 1, Q, 1)) : c.setRange(ue, 0, ue, 0);
                }
                b._onShortcutKey = !0;
                break;
              }
              if (m.collapsed && (U || R)) {
                b._enterPrevent(s);
                const N = o.createElement("BR"), V = o.createElement(_.nodeName);
                o.copyTagAttributes(V, _, l.lineAttrReset);
                let M = N;
                do {
                  if (!o.isBreak(r) && r.nodeType === 1) {
                    const $ = r.cloneNode(!1);
                    $.appendChild(M), M = $;
                  }
                  r = r.parentNode;
                } while (_ !== r && _.contains(r));
                V.appendChild(M), _.parentNode.insertBefore(V, U && !R ? _ : _.nextElementSibling), R && c.setRange(N, 1, N, 1);
                break;
              }
              if (_) {
                s.stopPropagation();
                let N, V = 0;
                if (m.collapsed)
                  o.onlyZeroWidthSpace(_) ? N = c.appendFormatTag(_, _.cloneNode(!1)) : N = o.splitElement(m.endContainer, m.endOffset, o.getElementDepth(_));
                else {
                  const M = o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null), $ = _.cloneNode(!1);
                  $.innerHTML = "<br>";
                  const ie = m.commonAncestorContainer, G = ie === m.startContainer && ie === m.endContainer && o.onlyZeroWidthSpace(ie) ? m : c.removeNode();
                  if (N = o.getFormatElement(G.container, null), !N) {
                    o.isWysiwygDiv(G.container) && (b._enterPrevent(s), e.element.wysiwyg.appendChild($), N = $, o.copyTagAttributes(N, _, l.lineAttrReset), c.setRange(N, V, N, V));
                    break;
                  }
                  const X = o.getRangeFormatElement(G.container);
                  if (N = N.contains(X) ? o.getChildElement(X, o.getFormatElement.bind(o)) : N, M) {
                    if (R && !U)
                      N.parentNode.insertBefore($, !G.prevContainer || G.container === G.prevContainer ? N.nextElementSibling : N), N = $, V = 0;
                    else if (V = G.offset, U) {
                      const Q = N.parentNode.insertBefore($, N);
                      R && (N = Q, V = 0);
                    }
                  } else
                    R && U ? (N.parentNode.insertBefore($, G.prevContainer && G.container === G.prevContainer ? N.nextElementSibling : N), N = $, V = 0) : N = o.splitElement(G.container, G.offset, o.getElementDepth(_));
                }
                b._enterPrevent(s), o.copyTagAttributes(N, _, l.lineAttrReset), c.setRange(N, V, N, V);
                break;
              }
            }
            if (y) break;
            if (S && o.getParentElement(S, "FIGCAPTION") && o.getParentElement(S, o.isList) && (b._enterPrevent(s), _ = c.appendFormatTag(_, null), c.setRange(_, 0, _, 0)), C) {
              s.preventDefault(), s.stopPropagation(), c.containerOff(), c.controllersOff();
              const R = e[C], U = R._container, N = U.previousElementSibling || U.nextElementSibling;
              let V = null;
              o.isListCell(U.parentNode) ? V = o.createElement("BR") : (V = o.createElement(o.isFormatElement(N) && !o.isRangeFormatElement(N) ? N.nodeName : l.defaultTag), V.innerHTML = "<br>"), h ? U.parentNode.insertBefore(V, U) : U.parentNode.insertBefore(V, U.nextElementSibling), c.callPlugin(C, function() {
                c.selectComponent(R._element, C) === !1 && c.blur();
              }, null);
            }
            break;
          case 27:
            if (C)
              return s.preventDefault(), s.stopPropagation(), c.controllersOff(), !1;
            break;
        }
        if (h && d === 16) {
          s.preventDefault(), s.stopPropagation();
          const E = c.plugins.table;
          if (E && !E._shift && !E._ref) {
            const B = o.getParentElement(_, o.isCell);
            if (B) {
              E.onTableCellMultiSelect.call(c, B, !0);
              return;
            }
          }
        } else if (h && (o.isOSX_IOS ? v : p) && d === 32) {
          s.preventDefault(), s.stopPropagation();
          const E = c.insertNode(o.createTextNode(" "));
          if (E) {
            c.setRange(E, E.length, E, E.length);
            return;
          }
        }
        if (o.isIE && !p && !v && !y && !b._nonTextKeyCode.test(d) && o.isBreak(m.commonAncestorContainer)) {
          const E = o.createTextNode(o.zeroWidthSpace);
          c.insertNode(E, null, !1), c.setRange(E, 1, E, 1);
        }
        b._directionKeyCode.test(d) && (f.setTimeout(c._editorRange.bind(c), 0), b._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(s) {
      if (s.shiftKey) return;
      let r = c.getSelectionNode();
      const d = function(v, m) {
        if (m || (m = 0), s.preventDefault(), s.stopPropagation(), !v) return;
        let y = c.getFileComponent(v);
        y ? c.selectComponent(y.target, y.pluginName) : (c.setRange(v, m, v, m), c.controllersOff());
      }, h = o.getParentElement(r, "table");
      if (h) {
        const v = o.getParentElement(r, "tr"), m = o.getParentElement(r, "td");
        let y = m, C = m;
        if (m) {
          for (; y && y.firstChild; ) y = y.firstChild;
          for (; C && C.lastChild; ) C = C.lastChild;
        }
        let _ = r;
        for (; _ && _.firstChild; ) _ = _.firstChild;
        const S = _ === y, I = _ === C;
        let E = null, B = 0;
        if (s.keyCode === 38 && S) {
          const A = v && v.previousElementSibling;
          for (A ? E = A.children[m.cellIndex] : E = o.getPreviousDeepestNode(h, c.context.element.wysiwyg); E && E.lastChild; ) E = E.lastChild;
          E && (B = E.textContent.length);
        } else if (s.keyCode === 40 && I) {
          const A = v && v.nextElementSibling;
          for (A ? E = A.children[m.cellIndex] : E = o.getNextDeepestNode(h, c.context.element.wysiwyg); E && E.firstChild; ) E = E.firstChild;
        }
        if (E)
          return d(E, B), !1;
      }
      const p = c.getFileComponent(r);
      if (p) {
        const v = /37|38/.test(s.keyCode), m = /39|40/.test(s.keyCode);
        if (v) {
          const y = o.getPreviousDeepestNode(p.target, c.context.element.wysiwyg);
          d(y, y && y.textContent.length);
        } else if (m) {
          const y = o.getNextDeepestNode(p.target, c.context.element.wysiwyg);
          d(y);
        }
      }
    },
    onKeyUp_wysiwyg: function(s) {
      if (b._onShortcutKey) return;
      c._editorRange();
      const r = s.keyCode, d = s.ctrlKey || s.metaKey || r === 91 || r === 92 || r === 224, h = s.altKey;
      if (c.isReadOnly) {
        !d && b._cursorMoveKeyCode.test(r) && b._applyTagEffects();
        return;
      }
      const p = c.getRange();
      let v = c.getSelectionNode();
      if (c._isBalloon && (c._isBalloonAlways && r !== 27 || !p.collapsed))
        if (c._isBalloonAlways)
          r !== 27 && b._showToolbarBalloonDelay();
        else {
          b._showToolbarBalloon();
          return;
        }
      let m = v;
      for (; m && m.firstChild; ) m = m.firstChild;
      const y = c.getFileComponent(m);
      if (!(s.keyCode === 16 || s.shiftKey) && y ? c.selectComponent(y.target, y.pluginName) : c.currentFileComponentInfo && c.controllersOff(), r === 8 && o.isWysiwygDiv(v) && v.textContent === "" && v.children.length === 0) {
        s.preventDefault(), s.stopPropagation(), v.innerHTML = "";
        const E = o.createElement(o.isFormatElement(c._variable.currentNodes[0]) ? c._variable.currentNodes[0] : l.defaultTag);
        E.innerHTML = "<br>", v.appendChild(E), c.setRange(E, 0, E, 0), b._applyTagEffects(), c.history.push(!1);
        return;
      }
      const C = o.getFormatElement(v, null), _ = o.getRangeFormatElement(v, null), S = c._formatAttrsTemp;
      if (S) {
        for (let E = 0, B = S.length; E < B; E++) {
          if (r === 13 && /^id$/i.test(S[E].name)) {
            C.removeAttribute("id");
            continue;
          }
          C.setAttribute(S[E].name, S[E].value);
        }
        c._formatAttrsTemp = null;
      }
      if (!C && p.collapsed && !o.isComponent(v) && !o.isList(v) && c._setDefaultFormat(o.isRangeFormatElement(_) ? "DIV" : l.defaultTag) !== null && (v = c.getSelectionNode()), !d && !h && !b._nonTextKeyCode.test(r) && v.nodeType === 3 && o.zeroWidthRegExp.test(v.textContent) && !(s.isComposing !== void 0 ? s.isComposing : b._IEisComposing)) {
        let E = p.startOffset, B = p.endOffset;
        const A = (v.textContent.substring(0, B).match(b._frontZeroWidthReg) || "").length;
        E = p.startOffset - A, B = p.endOffset - A, v.textContent = v.textContent.replace(o.zeroWidthRegExp, ""), c.setRange(v, E < 0 ? 0 : E, v, B < 0 ? 0 : B);
      }
      b._deleteKeyCode.test(r) && C && o.onlyZeroWidthSpace(C.textContent) && !C.previousElementSibling && (C.innerHTML = "<br>", c.setRange(C, 0, C, 0)), c._charCount(""), !(typeof x.onKeyUp == "function" && x.onKeyUp(s, c) === !1) && !d && !h && !b._historyIgnoreKeyCode.test(r) && c.history.push(!0);
    },
    onScroll_wysiwyg: function(s) {
      c.controllersOff(), c._isBalloon && b._hideToolbar(), typeof x.onScroll == "function" && x.onScroll(s, c);
    },
    onFocus_wysiwyg: function(s) {
      c._antiBlur || (c.hasFocus = !0, f.setTimeout(b._applyTagEffects), c._isInline && b._showToolbarInline(), typeof x.onFocus == "function" && x.onFocus(s, c));
    },
    onBlur_wysiwyg: function(s) {
      c._antiBlur || c._variable.isCodeView || (c.hasFocus = !1, c.effectNode = null, c.controllersOff(), (c._isInline || c._isBalloon) && b._hideToolbar(), c._setKeyEffect([]), c._variable.currentNodes = [], c._variable.currentNodesMap = [], l.showPathLabel && (e.element.navigation.textContent = ""), typeof x.onBlur == "function" && x.onBlur(s, c, this));
    },
    onMouseDown_resizingBar: function(s) {
      s.stopPropagation(), c.submenuOff(), c.controllersOff(), c._variable.resizeClientY = s.clientY, e.element.resizeBackground.style.display = "block";
      function r() {
        e.element.resizeBackground.style.display = "none", u.removeEventListener("mousemove", b._resize_editor), u.removeEventListener("mouseup", r);
      }
      u.addEventListener("mousemove", b._resize_editor), u.addEventListener("mouseup", r);
    },
    _resize_editor: function(s) {
      const r = e.element.editorArea.offsetHeight + (s.clientY - c._variable.resizeClientY), d = r < c._variable.minResizingSize ? c._variable.minResizingSize : r;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = d + "px", c._variable.resizeClientY = s.clientY, o.isResizeObserverSupported || c.__callResizeFunction(d, null);
    },
    onResize_window: function() {
      o.isResizeObserverSupported || c.resetResponsiveToolbar();
      const s = e.element.toolbar, r = s.style.display === "none" || c._isInline && !c._inlineToolbarAttr.isShow;
      if (!(s.offsetWidth === 0 && !r)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = f.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), c.submenuActiveButton && c.submenu && c._setMenuPosition(c.submenuActiveButton, c.submenu), c._variable.isFullScreen) {
          c._variable.innerHeight_fullScreen += f.innerHeight - s.offsetHeight - c._variable.innerHeight_fullScreen, e.element.editorArea.style.height = c._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (c._variable.isCodeView && c._isInline) {
          b._showToolbarInline();
          return;
        }
        c._iframeAutoHeight(), c._sticky && (s.style.width = e.element.topArea.offsetWidth - 2 + "px", b.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (c._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || l.stickyToolbar < 0) return;
      const s = e.element, r = s.editorArea.offsetHeight, d = (this.scrollY || u.documentElement.scrollTop) + l.stickyToolbar, h = b._getEditorOffsets(l.toolbarContainer).top - (c._isInline ? s.toolbar.offsetHeight : 0), p = c._isInline && d - h > 0 ? d - h - e.element.toolbar.offsetHeight : 0;
      d < h ? b._offStickyToolbar() : d + c._variable.minResizingSize >= r + h ? (c._sticky || b._onStickyToolbar(p), s.toolbar.style.top = p + r + h + l.stickyToolbar - d - c._variable.minResizingSize + "px") : d >= h && b._onStickyToolbar(p);
    },
    _getEditorOffsets: function(s) {
      let r = s || e.element.topArea, d = 0, h = 0, p = 0;
      for (; r; )
        d += r.offsetTop, h += r.offsetLeft, p += r.scrollTop, r = r.offsetParent;
      return {
        top: d,
        left: h,
        scroll: p
      };
    },
    _getPageBottomSpace: function() {
      return u.documentElement.scrollHeight - (b._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(s) {
      const r = e.element;
      !c._isInline && !l.toolbarContainer && (r._stickyDummy.style.height = r.toolbar.offsetHeight + "px", r._stickyDummy.style.display = "block"), r.toolbar.style.top = l.stickyToolbar + s + "px", r.toolbar.style.width = c._isInline ? c._inlineToolbarAttr.width : r.toolbar.offsetWidth + "px", o.addClass(r.toolbar, "se-toolbar-sticky"), c._sticky = !0;
    },
    _offStickyToolbar: function() {
      const s = e.element;
      s._stickyDummy.style.display = "none", s.toolbar.style.top = c._isInline ? c._inlineToolbarAttr.top : "", s.toolbar.style.width = c._isInline ? c._inlineToolbarAttr.width : "", s.editorArea.style.marginTop = "", o.removeClass(s.toolbar, "se-toolbar-sticky"), c._sticky = !1;
    },
    _codeViewAutoHeight: function() {
      c._variable.isFullScreen || (e.element.code.style.height = e.element.code.scrollHeight + "px");
    },
    // FireFox - table delete, Chrome - image, video, audio
    _hardDelete: function() {
      const s = c.getRange(), r = s.startContainer, d = s.endContainer, h = o.getRangeFormatElement(r), p = o.getRangeFormatElement(d), v = o.isCell(h), m = o.isCell(p), y = s.commonAncestorContainer;
      if ((v && !h.previousElementSibling && !h.parentElement.previousElementSibling || m && !p.nextElementSibling && !p.parentElement.nextElementSibling) && h !== p)
        if (!v)
          o.removeItem(o.getParentElement(p, function(S) {
            return y === S.parentNode;
          }));
        else if (!m)
          o.removeItem(o.getParentElement(h, function(S) {
            return y === S.parentNode;
          }));
        else
          return o.removeItem(o.getParentElement(h, function(S) {
            return y === S.parentNode;
          })), c.nativeFocus(), !0;
      const C = r.nodeType === 1 ? o.getParentElement(r, ".se-component") : null, _ = d.nodeType === 1 ? o.getParentElement(d, ".se-component") : null;
      return C && o.removeItem(C), _ && o.removeItem(_), !1;
    },
    onPaste_wysiwyg: function(s) {
      const r = o.isIE ? f.clipboardData : s.clipboardData;
      return r ? b._dataTransferAction("paste", s, r) : !0;
    },
    _setClipboardComponent: function(s, r, d) {
      s.preventDefault(), s.stopPropagation(), d.setData("text/html", r.component.outerHTML);
    },
    onCopy_wysiwyg: function(s) {
      const r = o.isIE ? f.clipboardData : s.clipboardData;
      if (typeof x.onCopy == "function" && x.onCopy(s, r, c) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const d = c.currentFileComponentInfo;
      d && !o.isIE && (b._setClipboardComponent(s, d, r), o.addClass(d.component, "se-component-copy"), f.setTimeout(function() {
        o.removeClass(d.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(s) {
      if (typeof x.onSave == "function") {
        x.onSave(s, c);
        return;
      }
    },
    onCut_wysiwyg: function(s) {
      const r = o.isIE ? f.clipboardData : s.clipboardData;
      if (typeof x.onCut == "function" && x.onCut(s, r, c) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const d = c.currentFileComponentInfo;
      d && !o.isIE && (b._setClipboardComponent(s, d, r), o.removeItem(d.component), c.controllersOff()), f.setTimeout(function() {
        c.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(s) {
      if (c.isReadOnly || o.isIE)
        return s.preventDefault(), s.stopPropagation(), !1;
      const r = s.dataTransfer;
      return r ? (b._setDropLocationSelection(s), c.removeNode(), document.body.contains(c.currentControllerTarget) || c.controllersOff(), b._dataTransferAction("drop", s, r)) : !0;
    },
    _setDropLocationSelection: function(s) {
      const r = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let d = null;
      if (s.rangeParent ? (r.startContainer = s.rangeParent, r.startOffset = s.rangeOffset, r.endContainer = s.rangeParent, r.endOffset = s.rangeOffset) : c._wd.caretRangeFromPoint ? d = c._wd.caretRangeFromPoint(s.clientX, s.clientY) : d = c.getRange(), d && (r.startContainer = d.startContainer, r.startOffset = d.startOffset, r.endContainer = d.endContainer, r.endOffset = d.endOffset), r.startContainer === r.endContainer) {
        const h = o.getParentElement(r.startContainer, o.isComponent);
        h && (r.startContainer = h, r.startOffset = 0, r.endContainer = h, r.endOffset = 0);
      }
      c.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(s, r, d) {
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
          p = m.innerHTML, o.removeItem(m), c.setRange(y.sc, y.so, y.ec, y.eo), b._setClipboardData(s, r, h, p, d);
        }), !0;
      } else if (h = d.getData("text/plain"), p = d.getData("text/html"), b._setClipboardData(s, r, h, p, d) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(s, r, d, h, p) {
      const v = /class=["']*Mso(Normal|List)/i.test(h) || /content=["']*Word.Document/i.test(h) || /content=["']*OneNote.File/i.test(h) || /content=["']*Excel.Sheet/i.test(h);
      !h ? h = o._HTMLConvertor(d).replace(/\n/g, "<br>") : (h = h.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), v && (h = h.replace(/\n/g, " "), d = d.replace(/\n/g, " ")), h = c.cleanHTML(h, c.pasteTagsWhitelistRegExp, c.pasteTagsBlacklistRegExp));
      const y = c._charCount(c._charTypeHTML ? h : d);
      if (s === "paste" && typeof x.onPaste == "function") {
        const _ = x.onPaste(r, h, y, c);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          h = _;
        }
      }
      if (s === "drop" && typeof x.onDrop == "function") {
        const _ = x.onDrop(r, h, y, c);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          h = _;
        }
      }
      const C = p.files;
      if (C.length > 0 && !v)
        return /^image/.test(C[0].type) && c.plugins.image && x.insertImage(C), !1;
      if (!y)
        return !1;
      if (h)
        return x.insertHTML(h, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(s) {
      if (c.isDisabled || c.isReadOnly) return !1;
      const r = o.getParentElement(s.target, o.isComponent), d = c._lineBreaker.style;
      if (r && !c.currentControllerName) {
        const h = e.element;
        let p = 0, v = h.wysiwyg;
        do
          p += v.scrollTop, v = v.parentElement;
        while (v && !/^(BODY|HTML)$/i.test(v.nodeName));
        const m = h.wysiwyg.scrollTop, y = b._getEditorOffsets(null), C = o.getOffset(r, h.wysiwygFrame).top + m, _ = s.pageY + p + (l.iframe && !l.toolbarContainer ? h.toolbar.offsetHeight : 0), S = C + (l.iframe ? p : y.top), I = o.isListCell(r.parentNode);
        let E = "", B = "";
        if ((I ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) && _ < S + 20)
          B = C, E = "t";
        else if ((I ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) && _ > S + r.offsetHeight - 20)
          B = C + r.offsetHeight, E = "b";
        else {
          d.display = "none";
          return;
        }
        c._variable._lineBreakComp = r, c._variable._lineBreakDir = E, d.top = B - m + "px", c._lineBreakerButton.style.left = o.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", d.display = "block";
      } else d.display !== "none" && (d.display = "none");
    },
    _enterPrevent: function(s) {
      s.preventDefault(), o.isMobile && c.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(s) {
      s.preventDefault();
    },
    _onLineBreak: function(s) {
      s.preventDefault();
      const r = c._variable._lineBreakComp, d = this ? this : c._variable._lineBreakDir, h = o.isListCell(r.parentNode), p = o.createElement(h ? "BR" : o.isCell(r.parentNode) ? "DIV" : l.defaultTag);
      if (h || (p.innerHTML = "<br>"), c._charTypeHTML && !c.checkCharCount(p.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(p, d === "t" ? r : r.nextSibling), c._lineBreaker.style.display = "none", c._variable._lineBreakComp = null;
      const v = h ? p : p.firstChild;
      c.setRange(v, 1, v, 1), c.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const s = l.iframe ? c._ww : e.element.wysiwyg;
      o.isResizeObserverSupported && (this._resizeObserver = new f.ResizeObserver(function(r) {
        c.__callResizeFunction(-1, r[0]);
      })), e.element.toolbar.addEventListener("mousedown", b._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", b._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", b.onClick_toolbar, !1), s.addEventListener("mousedown", b.onMouseDown_wysiwyg, !1), s.addEventListener("click", b.onClick_wysiwyg, !1), s.addEventListener(o.isIE ? "textinput" : "input", b.onInput_wysiwyg, !1), s.addEventListener("keydown", b.onKeyDown_wysiwyg, !1), s.addEventListener("keyup", b.onKeyUp_wysiwyg, !1), s.addEventListener("paste", b.onPaste_wysiwyg, !1), s.addEventListener("copy", b.onCopy_wysiwyg, !1), s.addEventListener("cut", b.onCut_wysiwyg, !1), s.addEventListener("drop", b.onDrop_wysiwyg, !1), s.addEventListener("scroll", b.onScroll_wysiwyg, !1), s.addEventListener("focus", b.onFocus_wysiwyg, !1), s.addEventListener("blur", b.onBlur_wysiwyg, !1), b._lineBreakerBind = { a: b._onLineBreak.bind(""), t: b._onLineBreak.bind("t"), b: b._onLineBreak.bind("b") }, s.addEventListener("mousemove", b.onMouseMove_wysiwyg, !1), c._lineBreakerButton.addEventListener("mousedown", b._onMouseDown_lineBreak, !1), c._lineBreakerButton.addEventListener("click", b._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", b._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", b._lineBreakerBind.b, !1), s.addEventListener("touchstart", b.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.addEventListener("touchend", b.onClick_wysiwyg, { passive: !0, useCapture: !1 }), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.addEventListener("keydown", b._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", b._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", b._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(l.height) && l.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", b.onMouseDown_resizingBar, !1) : o.addClass(e.element.resizingBar, "se-resizing-none")), b._setResponsiveToolbar(), o.isResizeObserverSupported && (this._toolbarObserver = new f.ResizeObserver(c.resetResponsiveToolbar)), f.addEventListener("resize", b.onResize_window, !1), l.stickyToolbar > -1 && f.addEventListener("scroll", b.onScroll_window, !1);
    },
    _removeEvent: function() {
      const s = l.iframe ? c._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", b._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", b._buttonsEventHandler), e.element.toolbar.removeEventListener("click", b.onClick_toolbar), s.removeEventListener("mousedown", b.onMouseDown_wysiwyg), s.removeEventListener("click", b.onClick_wysiwyg), s.removeEventListener(o.isIE ? "textinput" : "input", b.onInput_wysiwyg), s.removeEventListener("keydown", b.onKeyDown_wysiwyg), s.removeEventListener("keyup", b.onKeyUp_wysiwyg), s.removeEventListener("paste", b.onPaste_wysiwyg), s.removeEventListener("copy", b.onCopy_wysiwyg), s.removeEventListener("cut", b.onCut_wysiwyg), s.removeEventListener("drop", b.onDrop_wysiwyg), s.removeEventListener("scroll", b.onScroll_wysiwyg), s.removeEventListener("mousemove", b.onMouseMove_wysiwyg), c._lineBreakerButton.removeEventListener("mousedown", b._onMouseDown_lineBreak), c._lineBreakerButton.removeEventListener("click", b._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", b._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", b._lineBreakerBind.b), b._lineBreakerBind = null, s.removeEventListener("touchstart", b.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("touchend", b.onClick_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("focus", b.onFocus_wysiwyg), s.removeEventListener("blur", b.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", b._codeViewAutoHeight), e.element.code.removeEventListener("keyup", b._codeViewAutoHeight), e.element.code.removeEventListener("paste", b._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", b.onMouseDown_resizingBar), b._resizeObserver && (b._resizeObserver.unobserve(e.element.wysiwygFrame), b._resizeObserver = null), b._toolbarObserver && (b._toolbarObserver.unobserve(e.element._toolbarShadow), b._toolbarObserver = null), f.removeEventListener("resize", b.onResize_window), f.removeEventListener("scroll", b.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (a.length === 0) {
        a = null;
        return;
      }
      b._responsiveCurrentSize = "default";
      const s = b._responsiveButtonSize = [], r = b._responsiveButtons = { default: a[0] };
      for (let d = 1, h = a.length, p, v; d < h; d++)
        v = a[d], p = v[0] * 1, s.push(p), r[p] = v[1];
      s.sort(function(d, h) {
        return d - h;
      }).unshift("default");
    }
  }, x = {
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
    setToolbarButtons: function(s) {
      c.submenuOff(), c.containerOff(), c.moreLayerOff();
      const r = Hi._createToolBar(u, s, c.plugins, l);
      a = r.responsiveButtons, b._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const d = Fi(e.element.originElement, c._getConstructed(e.element), l);
      e.element = d.element, e.tool = d.tool, l.iframe && (e.element.wysiwyg = c._wd.body), c._recoverButtonStates(), c._cachingButtons(), c.history._resetCachingButton(), c.effectNode = null, c.hasFocus && b._applyTagEffects(), c.isReadOnly && o.setDisabledButtons(!0, c.resizingDisabledButtons), typeof x.onSetToolbarButtons == "function" && x.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), c);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(s) {
      b._removeEvent(), c._resetComponents(), o.removeClass(c._styleCommandMap.showBlocks, "active"), o.removeClass(c._styleCommandMap.codeView, "active"), c._variable.isCodeView = !1, c._iframeAuto = null, c.plugins = s.plugins || c.plugins;
      const r = [l, s].reduce(function(v, m) {
        for (let y in m)
          if (o.hasOwn(m, y))
            if (y === "plugins" && m[y] && v[y]) {
              let C = v[y], _ = m[y];
              C = C.length ? C : f.Object.keys(C).map(function(S) {
                return C[S];
              }), _ = _.length ? _ : f.Object.keys(_).map(function(S) {
                return _[S];
              }), v[y] = _.filter(function(S) {
                return C.indexOf(S) === -1;
              }).concat(C);
            } else
              v[y] = m[y];
        return v;
      }, {}), d = e.element, h = d.wysiwyg.innerHTML, p = Hi._setOptions(r, e, l);
      p.callButtons && (t = p.callButtons, c.initPlugins = {}), p.plugins && (c.plugins = i = p.plugins), d._menuTray.children.length === 0 && (this._menuTray = {}), a = p.toolbar.responsiveButtons, c.options = l = r, c.lang = n = l.lang, l.iframe && d.wysiwygFrame.addEventListener("load", function() {
        o._setIframeDocument(this, l), c._setOptionsInit(d, h);
      }), d.editorArea.appendChild(d.wysiwygFrame), l.iframe || c._setOptionsInit(d, h);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(s) {
      const r = l._editorStyles = o._setDefaultOptionStyle(l, s), d = e.element;
      d.topArea.style.cssText = r.top, d.code.style.cssText = l._editorStyles.frame, d.code.style.display = "none", l.height === "auto" ? d.code.style.overflow = "hidden" : d.code.style.overflow = "", l.iframe ? (d.wysiwygFrame.style.cssText = r.frame, d.wysiwyg.style.cssText = r.editor) : d.wysiwygFrame.style.cssText = r.frame + r.editor;
    },
    /**
     * @description Open a notice area
     * @param {String} message Notice message
     */
    noticeOpen: function(s) {
      c.notice.open.call(c, s);
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
      const s = c.getContents(!1);
      e.element.originElement.value = s, b.onSave_wysiwyg(s, c);
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
      return c.getContents(s);
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
      return s = typeof s == "string" ? s : l.charCounterType, c.getCharLength(c._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, s);
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
      !c.plugins.image || !s || (c.initPlugins.image ? c.plugins.image.submitAction.call(c, s) : c.callPlugin("image", c.plugins.image.submitAction.bind(c, s), null), c.focus());
    },
    /**
     * @description Inserts an HTML element or HTML string or plain string at the current cursor position
     * @param {Element|String} html HTML Element or HTML string or plain string
     * @param {Boolean} notCleaningData If true, inserts the HTML string without refining it with core.cleanHTML.
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} rangeSelection If true, range select the inserted node.
     */
    insertHTML: function(s, r, d, h) {
      if (e.element.wysiwygFrame.contains(c.getSelection().focusNode) || c.focus(), typeof s == "string") {
        r || (s = c.cleanHTML(s, null, null));
        try {
          if (o.isListCell(o.getFormatElement(c.getSelectionNode(), null))) {
            const B = u.createRange().createContextualFragment(s).childNodes;
            c._isFormatData(B) && (s = c._convertListCell(B));
          }
          const v = u.createRange().createContextualFragment(s).childNodes;
          if (d) {
            const E = c._charTypeHTML ? "outerHTML" : "textContent";
            let B = "";
            for (let A = 0, q = v.length; A < q; A++)
              B += v[A][E];
            if (!c.checkCharCount(B, null)) return;
          }
          let m, y, C, _, S;
          for (; m = v[0]; ) {
            if (_ && _.nodeType === 3 && y && y.nodeType === 1 && o.isBreak(m)) {
              _ = m, o.removeItem(m);
              continue;
            }
            C = c.insertNode(m, y, !1), y = C.container || C, S || (S = C), _ = m;
          }
          _.nodeType === 3 && y.nodeType === 1 && (y = _);
          const I = y.nodeType === 3 ? C.endOffset || y.textContent.length : y.childNodes.length;
          h ? c.setRange(S.container || S, S.startOffset || 0, y, I) : c.setRange(y, I, y, I);
        } catch (p) {
          if (c.isDisabled || c.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + p), c.execCommand("insertHTML", !1, s);
        }
      } else if (o.isComponent(s))
        c.insertComponent(s, !1, d, !1);
      else {
        let p = null;
        (o.isFormatElement(s) || o.isMedia(s)) && (p = o.getFormatElement(c.getSelectionNode(), null)), c.insertNode(s, p, d);
      }
      c.effectNode = null, c.focus(), c.history.push(!1);
    },
    /**
     * @description Change the contents of the suneditor
     * @param {String|undefined} contents Contents to Input
     */
    setContents: function(s) {
      c.setContents(s);
    },
    /**
     * @description Add contents to the suneditor
     * @param {String} contents Contents to Input
     */
    appendContents: function(s) {
      const r = c.convertContentsForEditor(s);
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
    readOnly: function(s) {
      c.isReadOnly = s, o.setDisabledButtons(!!s, c.resizingDisabledButtons), s ? (c.controllersOff(), c.submenuActiveButton && c.submenuActiveButton.disabled && c.submenuOff(), c._moreLayerActiveButton && c._moreLayerActiveButton.disabled && c.moreLayerOff(), c.containerActiveButton && c.containerActiveButton.disabled && c.containerOff(), c.modalForm && c.plugins.dialog.close.call(c), e.element.code.setAttribute("readOnly", "true"), o.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), o.removeClass(e.element.wysiwygFrame, "se-read-only")), l.codeMirrorEditor && l.codeMirrorEditor.setOption("readOnly", !!s);
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
      c.submenuOff(), c.containerOff(), c.controllersOff(), c.notice && c.notice.close.call(c), c.modalForm && c.plugins.dialog.close.call(c), c.history._destroy(), b._removeEvent(), o.removeItem(e.element.toolbar), o.removeItem(e.element.topArea);
      for (let s in c.functions)
        o.hasOwn(c, s) && delete c.functions[s];
      for (let s in c)
        o.hasOwn(c, s) && delete c[s];
      for (let s in b)
        o.hasOwn(b, s) && delete b[s];
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
        c._isInline ? b._showToolbarInline() : (e.element.toolbar.style.display = "", e.element._stickyDummy.style.display = ""), b.onResize_window();
      },
      /**
       * @description Hide the toolbar
       */
      hide: function() {
        c._isInline ? b._hideToolbar() : (e.element.toolbar.style.display = "none", e.element._stickyDummy.style.display = "none"), b.onResize_window();
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
        c.controllersOff(), c.modalForm && c.plugins.dialog.close.call(c), e.element.wysiwyg.setAttribute("contenteditable", !1), c.isDisabled = !0, l.codeMirrorEditor ? l.codeMirrorEditor.setOption("readOnly", !0) : e.element.code.setAttribute("disabled", "disabled");
      },
      /**
       * @description Enable the wysiwyg area
       */
      enable: function() {
        e.element.wysiwyg.setAttribute("contenteditable", !0), c.isDisabled = !1, l.codeMirrorEditor ? l.codeMirrorEditor.setOption("readOnly", !1) : e.element.code.removeAttribute("disabled");
      }
    }
  };
  c.functions = x, c.options = l;
  let w = e.element, k = w.originElement, z = w.topArea;
  return k.style.display = "none", z.style.display = "block", l.iframe && w.wysiwygFrame.addEventListener("load", function() {
    o._setIframeDocument(this, l), c._editorInit(!1, l.value), l.value = null;
  }), typeof k.nextElementSibling == "object" ? k.parentNode.insertBefore(z, k.nextElementSibling) : k.parentNode.appendChild(z), w.editorArea.appendChild(w.wysiwygFrame), w = k = z = null, l.iframe || (c._editorInit(!1, l.value), l.value = null), x;
}
const Ka = {
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
    de._propertiesInit(), typeof t != "object" && (t = {}), i && (t = [i, t].reduce(function(a, u) {
      for (let f in u)
        if (de.hasOwn(u, f))
          if (f === "plugins" && u[f] && a[f]) {
            let o = a[f], g = u[f];
            o = o.length ? o : Object.keys(o).map(function(c) {
              return o[c];
            }), g = g.length ? g : Object.keys(g).map(function(c) {
              return g[c];
            }), a[f] = g.filter(function(c) {
              return o.indexOf(c) === -1;
            }).concat(o);
          } else
            a[f] = u[f];
      return a;
    }, {}));
    const n = typeof e == "string" ? document.getElementById(e) : e;
    if (!n)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const l = Hi.init(n, t);
    if (l.constructed._top.id && document.getElementById(l.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + l.constructed._top.id + '")');
    return Ga(Fi(n, l.constructed, l.options), l.pluginCallButtons, l.plugins, l.options.lang, t, l._responsiveButtons);
  }
}, Ya = ["innerHTML", "id", "tabindex"], Xa = /* @__PURE__ */ we({
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
    let f = null, o;
    const g = Y(l.focusing), c = (k) => {
      g.value = !0, n("focus", k);
    }, b = (k) => {
      g.value = !1, n("blur", k);
    }, x = (k) => {
      o && clearTimeout(o), o = setTimeout(() => {
        Di(k) === "" ? u.value = "" : u.value = k;
      }, 100);
    }, w = () => {
      let k = {
        //@ts-ignore
        lang: Ml[l.lang] ? Ml[l.lang] : Ei,
        plugins: {
          ...Za
        },
        ...qa
      };
      f = Ka.create(l.id, k), f.onChange = (z) => {
        x(z), l.disabled ? f == null || f.disabled() : f == null || f.enabled();
      }, f.onKeyUp = (z, s) => {
        x(s.getContents(!1));
      }, f.onBlur = () => {
        b();
      }, f.onClick = () => {
        c();
      };
    };
    return ne(() => l.modelValue, (k) => u.value = k), ne(u, (k) => n("update:modelValue", k)), zt(() => {
      w();
    }), t({
      doSetValue: (k) => {
        f && f.setContents(k);
      }
    }), (k, z) => (F(), oe("div", {
      innerHTML: u.value,
      ref_key: "input",
      ref: a,
      id: k.id,
      tabindex: k.tabindex
    }, null, 8, Ya));
  }
}), Ja = {
  key: 0,
  class: "lkt-field--dropdown-option--icon-container"
}, Qa = { class: "lkt-field--dropdown-option--label-container" }, gt = /* @__PURE__ */ we({
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
    const i = t, n = e, l = J(() => n.item.icon !== "" ? n.item.icon : typeof n.data.optionsConfig.icon == "function" ? n.data.optionsConfig.icon(n.item, n.data.prop) : n.data.optionsConfig.icon), a = J(() => {
      if (typeof n.data.optionsConfig.text < "u") {
        if (typeof n.data.optionsConfig.text == "function")
          return n.data.optionsConfig.text(n.item, n.data.prop);
        if (n.data.optionsConfig.text !== "") return n.data.optionsConfig.text;
      }
      return u.value;
    }), u = J(() => typeof n.data.optionsConfig.labelFormatter == "function" ? n.data.optionsConfig.labelFormatter(n.item) : n.item.label), f = J(() => typeof n.data.optionsConfig.class == "function" ? n.data.optionsConfig.class(n.item) : typeof n.data.optionsConfig.class < "u" ? n.data.optionsConfig.class : `lkt-opt-${n.item.value}`), o = J(() => {
      if (n.data.optionSlot && !(typeof ee.optionSlots[n.data.optionSlot] > "u"))
        return ee.optionSlots[n.data.optionSlot];
    }), g = J(() => o.value ? o.value : n.data.isTag ? "lkt-tag" : !n.editing && !n.data.previewMode && (typeof n.data.optionsConfig.modal < "u" && n.data.optionsConfig.modal !== "" || typeof n.item.modal < "u" && n.item.modal !== "") ? "lkt-button" : !n.editing && !n.data.previewMode && typeof n.data.optionsConfig.download < "u" && n.data.optionsConfig.download !== "" || !n.editing && !n.data.previewMode && typeof n.data.optionsConfig.anchor < "u" ? "lkt-anchor" : "div"), c = J(() => {
      var k, z, s;
      if (g.value === "lkt-button") {
        let r = n.item.modal;
        n.data.optionsConfig.modal && (r = n.data.optionsConfig.modal);
        let d = r;
        return typeof r == "function" && (d = () => r(n.item)), {
          modal: d,
          modalData: n.data.optionsConfig.modalData,
          modalKey: n.item.value,
          icon: l.value
        };
      }
      if (g.value === "lkt-anchor") {
        if (typeof n.data.optionsConfig.anchor == "function") return { ...n.data.optionsConfig.anchor({ data: n.item }), prop: n.item };
        if (typeof n.data.optionsConfig.anchor == "object") return { ...n.data.optionsConfig.anchor, prop: n.item };
        let r = n.data.optionsConfig.download;
        typeof n.data.optionsConfig.download == "function" ? r = () => {
          var h;
          return (h = n.data.optionsConfig) == null ? void 0 : h.download(n.item);
        } : (z = (k = n.data.optionsConfig) == null ? void 0 : k.download) != null && z.startsWith("prop:") && (r = We((s = n.data.optionsConfig) == null ? void 0 : s.download, n.item));
        let d = n.data.optionsConfig.download !== "";
        return {
          to: r,
          type: d ? Kl.Download : void 0,
          prop: n.item
        };
      }
      return g.value === "lkt-tag" ? {
        type: ro.ActionIcon,
        icon: "lkt-icn-cancel"
      } : {};
    }), b = J(() => typeof n.item.tags > "u" ? [] : typeof n.item.tags == "function" ? n.item.tags() : n.item.tags), x = () => {
      var k;
      typeof ((k = n.events) == null ? void 0 : k.click) == "function" && n.events.click(n.item, n.index), i("click");
    }, w = () => {
      var k;
      typeof ((k = n.events) == null ? void 0 : k.clickIcon) == "function" && n.events.clickIcon(n.item, n.index), i("click-icon", n.item);
    };
    return (k, z) => {
      const s = pe("lkt-tag");
      return F(), te(vt(g.value), he(c.value, {
        class: ["lkt-field--dropdown-option", f.value],
        title: a.value,
        onClick: Jn(x, ["stop"]),
        onClickIcon: w
      }), {
        default: _e(() => [
          l.value && g.value !== "lkt-button" ? (F(), oe("div", Ja, [
            ve("i", {
              class: Ye(l.value)
            }, null, 2)
          ])) : le("", !0),
          ve("div", Qa, ut(a.value), 1),
          (F(!0), oe(Ue, null, ct(b.value, (r) => (F(), te(s, he({ ref_for: !0 }, r), null, 16))), 256))
        ]),
        _: 1
      }, 16, ["class", "title"]);
    };
  }
}), St = (e, t) => {
  if (typeof e == "string" && (e = We(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let i = e.substring(3), n = jl(i), l = [];
    for (let a in n) l.push({ value: a, label: n[a] });
    return rt.i18nOptionsFormatter[i] && (l = rt.i18nOptionsFormatter[i](l)), St(l, t);
  }
  return !Array.isArray(e) || e.length === 0 ? [] : Tn(
    e.map((i) => {
      if (typeof i == "object") return new Vi(i);
      if (typeof i == "string" || typeof i == "number")
        return new Vi({
          label: String(i),
          value: i
        });
    }).filter((i) => typeof i < "u")
  );
}, Tn = (e) => e.reduce((t, i) => t.find((l) => l.value === i.value) ? t : t.concat([i]), []), Ui = (e, t = "", i = !0, n = void 0) => {
  if (t === "" && typeof n != "function") return !0;
  const l = String(t).toLowerCase();
  let a = String(e.label).toLowerCase();
  return !(!(a.indexOf(l) !== -1 && (i || a !== l)) || typeof n == "function" && !n(e));
}, Xt = (e, t) => {
  if (t !== "")
    return e.find((i) => Array.isArray(t) ? t.includes(i.value) : i.value == t);
}, er = (e, t, i) => Tn([...St(t, i), ...e]), tr = (e, t, i) => {
  if (i) {
    if (Array.isArray(t)) {
      let n = t.findIndex((l) => l == e.value);
      return typeof n > "u" ? !1 : n > -1;
    }
    return !1;
  }
  return e.value == t;
}, Lt = (e, t) => {
  let i = t.findIndex((n) => n == e.value);
  return typeof i > "u" && (i = -1), i;
}, ir = (e) => e.option.disabled ? !1 : (e.focusedOptionIndex = -1, e.optionValueType === "option" ? e.value.value = e.option : e.value.value = String(e.option.value), e.pickedOptions.splice(0, 1, e.option), e.showOptions = !1, e.searchMode = !1, typeof e.callback == "function" && e.callback({ option: e.option }), !0), lr = (e) => {
  if (e.option.disabled) return !1;
  let t = -1;
  return e.optionValueType === "option" ? t = Lt(e.option, e.value.value.map((i) => i.value)) : t = Lt(e.option, e.value.value), t === -1 ? (e.optionValueType === "option" ? e.value.value.push(e.option) : e.value.value.push(String(e.option.value)), e.tagMode || e.pickedOptions.push(e.option)) : e.tagMode || (e.value.value.splice(t, 1), e.pickedOptions.splice(t, 1)), typeof e.keepFocused == "function" ? e.keepFocused() : e.searchMode && e.searchField && e.searchField.keepFocused(), typeof e.callback == "function" && e.callback({ option: e.option }), !0;
}, $l = (e) => {
  if (e.multiple) {
    let i = e.options.length;
    for (let n = 0; n < i; ++n) {
      let l = e.optionValueType === "option" ? Xt(e.options, e.value[n].value) : Xt(e.options, e.value[n]);
      typeof l < "u" && (e.pickedOptions.length === 0 ? e.pickedOptions.push(l) : e.pickedOptions.splice(n, 1, l));
    }
    return;
  }
  let t = e.optionValueType === "option" ? Xt(e.options, e.value.map((i) => i.value)) : Xt(e.options, e.value);
  typeof t < "u" && (e.pickedOptions.length === 0 ? e.pickedOptions.push(t) : e.pickedOptions.splice(0, 1, t));
}, nr = (e) => {
  var n, l;
  let t = e.options.value.length - 1;
  if (t === -1) return !1;
  const i = e.event.key ?? "";
  if (e.focusing) {
    if (["ArrowDown", "ArrowUp", "Enter"].includes(i) && (e.event.preventDefault(), e.event.stopPropagation()), i === "ArrowDown") {
      ++e.focusedIndex.value, e.focusedIndex.value > t && (e.focusedIndex.value = 0);
      let a = e.options.value[e.focusedIndex.value];
      for (; !Ui(a, e.query, e.optionsConfig.filter) && e.focusedIndex.value < t; )
        ++e.focusedIndex.value, a = e.options.value[e.focusedIndex.value];
      let u = (n = e.container.value) == null ? void 0 : n.querySelector('[data-index="' + e.focusedIndex.value + '"]');
      return u && u.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" }), !0;
    } else if (i === "ArrowUp") {
      --e.focusedIndex.value, e.focusedIndex.value < 0 && (e.focusedIndex.value = t);
      let a = e.options.value[e.focusedIndex.value];
      for (; !Ui(a, e.query, e.optionsConfig.filter) && e.focusedIndex.value > 0; )
        --e.focusedIndex.value, a = e.options.value[e.focusedIndex.value];
      let u = (l = e.container.value) == null ? void 0 : l.querySelector('[data-index="' + e.focusedIndex.value + '"]');
      return u && u.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" }), !0;
    } else if (i === "Enter" && e.focusedIndex.value > -1)
      return e.options.value[e.focusedIndex.value];
  }
  return !1;
}, or = (e) => {
  let t = new Vi({
    value: e.query,
    label: e.query
  });
  return (e.optionValueType === "option" ? Lt(t, e.value.value.map((n) => n.value)) : Lt(t, e.value.value)) === -1 ? (e.value.value.push(e.optionValueType === "option" ? t : t.value), e.options.value.push(t), e.pickedOptions.push(t), !0) : !1;
}, sr = (e) => {
  let t = !0;
  for (; t; ) {
    let i = e.optionValueType === "option" ? Lt(e.option, e.value.value.map((n) => n.value)) : Lt(e.option, e.value.value);
    i >= 0 ? (e.options.value.splice(
      e.options.value.findIndex((n) => n.value == e.option.value),
      1
    ), e.pickedOptions.splice(
      e.pickedOptions.findIndex((n) => n.value == e.option.value),
      1
    ), e.value.value.splice(i, 1)) : t = !1;
  }
  return !0;
}, ar = {
  key: 0,
  class: "lkt-field--searchable-box"
}, rr = ["value", "placeholder", "disabled"], ur = {
  key: 1,
  class: "lkt-field--searchable-box"
}, cr = ["value", "placeholder", "disabled"], dr = { key: 0 }, Zl = /* @__PURE__ */ we({
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
    visibleOptions: {},
    showOptions: { type: Boolean },
    editable: { type: Boolean },
    focusing: { type: Boolean },
    searchPlaceholder: {},
    multipleDisplayEdition: {},
    searchString: {},
    prop: { default: () => ({}) },
    max: {},
    tooltip: {},
    optionValueType: {},
    events: {},
    referrer: {},
    autoLoading: { type: Boolean, default: !1 }
  },
  emits: [
    "update:modelValue",
    "update:showOptions",
    "update:options",
    "focus",
    "blur",
    "change",
    "loaded"
  ],
  setup(e, { expose: t, emit: i }) {
    const n = i, l = Y(null), a = Y(null), u = e, f = Y(u.modelValue), o = Y(-1);
    ne(() => u.modelValue, (M) => {
      f.value = M;
    }, { deep: !0 }), ne(f, (M) => {
      n("update:modelValue", M);
    }, { deep: !0 });
    const g = u.multiple && u.canTag, c = typeof u.options == "object" ? JSON.parse(JSON.stringify(u.options)) : u.options, b = Y([...St(c, u.prop)]), x = Y(!0);
    ne(x, (M) => {
      M || Ke(() => {
        x.value = !0;
      });
    }), ne(b, (M) => {
      var $;
      typeof (($ = u.events) == null ? void 0 : $.updatedOptions) == "function" && (x.value = !1, u.events.updatedOptions({
        options: M
      })), n("update:options", M);
    }), ne(() => u.options, (M, $) => {
      if (!x.value) return;
      let ie = new Ut({
        opts: $
      });
      ie.increment({ opts: M }), ie.changed() && (b.value = St(M, u.prop), O());
    }, { deep: !0 });
    const w = Y(u.searchString), k = Y(null), z = Y(u.pickedOptions), s = Y(u.showOptions);
    ne(s, (M) => {
      g || n("update:showOptions", M), Ke(() => {
        r.value = s.value;
      });
    });
    const r = Y(!1), d = Y(u.focusing), h = Y(!1), p = Y(!1);
    ne(() => u.focusing, (M) => {
      M ? p.value = !0 : p.value = !1, v();
    });
    const v = () => {
      Ke(() => {
        d.value = h.value || p.value, s.value = d.value;
      });
    };
    ne(h, (M) => {
      M && (p.value = !1), v();
    }), ne(p, (M) => {
      M && (h.value = !1), v();
    }), ne(d, (M) => {
      n(M ? "focus" : "blur");
    });
    let m, y;
    const C = (M) => {
      m = setTimeout(() => {
        h.value = !1;
      }, 100);
    }, _ = (M) => {
      if (h.value = !0, g && M.key === "Enter") {
        if (w.value.length === 0) return;
        or({
          value: f,
          query: w.value,
          optionValueType: u.optionValueType,
          options: b,
          pickedOptions: u.pickedOptions
        }) && (w.value = "");
      } else ["ArrowDown", "ArrowUp", "Enter"].includes(M.key) && nr({
        event: M,
        options: b,
        focusing: u.focusing,
        container: a,
        focusedIndex: o,
        optionsConfig: u.optionsConfig,
        query: w.value
      });
    }, S = (M) => {
      h.value = !0;
    }, I = () => {
      clearTimeout(m), clearTimeout(y), Ke(() => {
        k.value && k.value.focus();
      });
    }, E = (M) => {
      P.value || (y = setTimeout(() => {
        p.value = !1;
      }, 100));
    }, B = (M) => {
      p.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(M.key) && n("navigate", M);
    }, A = (M) => {
      p.value = !0;
    }, q = (M) => {
      sr({
        value: f,
        option: M,
        optionValueType: u.optionValueType,
        options: b,
        pickedOptions: u.pickedOptions
      });
    };
    t({
      doClear: () => {
        u.isAutoCompleteText && (w.value = ""), u.pickedOptions.splice(0, u.pickedOptions.length), Ke(() => {
          O();
        });
      },
      doUndo: () => {
        Ke(() => {
          O();
        });
      },
      keepFocused: I,
      switchShowOptions: () => {
        s.value = !s.value;
      }
    }), ne(() => u.pickedOptions, (M) => {
      n("change"), z.value = M;
    }, { deep: !0 }), ne(s, (M) => {
      M || (p.value = !1, h.value = !1, v());
    });
    const D = J(() => u.multiple && (u.canTag || u.searchable)), P = J(() => !u.multiple && u.searchable && d.value), L = (M) => {
      var ie, G;
      if (u.isAutoCompleteText) {
        w.value = M.value, f.value = M.value;
        return;
      }
      (u.multiple ? lr({
        option: M,
        value: f,
        pickedOptions: u.pickedOptions,
        tagMode: g,
        searchMode: u.searchable,
        keepFocused: I,
        optionValueType: u.optionValueType,
        callback: (ie = u.events) == null ? void 0 : ie.clickOption
      }) : ir({
        option: M,
        value: f,
        pickedOptions: u.pickedOptions,
        showOptions: s.value,
        optionValueType: u.optionValueType,
        callback: (G = u.events) == null ? void 0 : G.clickOption
      })) && n("selected-option", M);
    }, O = () => {
      u.multiple ? $l({
        query: w.value,
        value: f.value,
        options: b.value,
        pickedOptions: u.pickedOptions,
        multiple: u.multiple,
        optionValueType: u.optionValueType
      }) : $l({
        query: w.value,
        value: f.value,
        options: b.value,
        pickedOptions: u.pickedOptions,
        multiple: u.multiple,
        optionValueType: u.optionValueType
      }), n("loaded");
    }, R = () => {
      o.value = -1, O();
    }, U = J(() => {
      var $, ie, G, X, Q, se, ue;
      if (!(($ = u.optionsConfig.http) != null && $.resource)) return;
      let M = {
        ...(ie = u.optionsConfig.http) == null ? void 0 : ie.data
      };
      return ee.searchKeyForResource !== "" && (M[ee.searchKeyForResource] = w.value), {
        resource: (G = u.optionsConfig.http) == null ? void 0 : G.resource,
        resourceData: M,
        events: {
          httpStart: (Q = (X = u.optionsConfig.http) == null ? void 0 : X.events) == null ? void 0 : Q.onStart,
          httpEnd: (ue = (se = u.optionsConfig.http) == null ? void 0 : se.events) == null ? void 0 : ue.onEnd
        }
      };
    }), N = J(() => u.autoLoading ? "div" : "lkt-tooltip"), V = J(() => u.multiple ? k.value : u.referrer);
    return zt(() => {
      u.isAutoCompleteText && (w.value = f.value), O();
    }), (M, $) => {
      const ie = pe("lkt-tag"), G = pe("lkt-table"), X = pe("lkt-button");
      return F(), oe(Ue, null, [
        M.isAutoCompleteText ? (F(), oe("div", ar, [
          Ve(ve("input", {
            "onUpdate:modelValue": $[0] || ($[0] = (Q) => w.value = Q),
            ref_key: "queryField",
            ref: k,
            value: w.value,
            placeholder: M.searchPlaceholder,
            disabled: M.pickedOptions.length === M.max,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: _,
            onBlur: C,
            onFocus: S
          }, null, 40, rr), [
            [Et, w.value]
          ])
        ])) : !M.autoLoading && (P.value || D.value) ? (F(), oe("div", ur, [
          M.multiple ? (F(), te(ie, Oe(he({ key: 0 }, {
            icon: M.optionsConfig.icon,
            text: M.pickedOptions.length
          })), null, 16)) : M.pickedOptions.length > 0 ? (F(), te(ie, Oe(he({ key: 1 }, {
            icon: M.pickedOptions[0].icon ?? M.optionsConfig.icon,
            text: M.pickedOptions[0].label
          })), null, 16)) : le("", !0),
          Ve(ve("input", {
            "onUpdate:modelValue": $[1] || ($[1] = (Q) => w.value = Q),
            ref_key: "queryField",
            ref: k,
            value: w.value,
            placeholder: M.searchPlaceholder,
            disabled: M.pickedOptions.length === M.max,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: _,
            onBlur: C,
            onFocus: S
          }, null, 40, cr), [
            [Et, w.value]
          ])
        ])) : le("", !0),
        !M.autoLoading && !M.isAutoCompleteText ? Ve((F(), te(X, he({
          key: 2,
          ref_key: "selectButton",
          ref: l
        }, {
          type: H(g) ? H(et).Content : H(et).Button,
          class: "lkt-field--toggle-button lkt-field--select-button"
        }, {
          onKeyup: B,
          onBlur: E,
          onFocus: A
        }), {
          default: _e(() => [
            H(g) || M.multiple && M.pickedOptions.length > 0 ? (F(), oe(Ue, { key: 0 }, [
              M.multipleDisplayEdition === H(xt).Count ? (F(), oe("div", dr, ut(M.pickedOptions.length), 1)) : M.multipleDisplayEdition === H(xt).Table ? (F(), te(G, he({
                key: 1,
                modelValue: z.value,
                "onUpdate:modelValue": $[2] || ($[2] = (Q) => z.value = Q)
              }, {
                ...M.optionsConfig.table,
                editMode: M.editable
              }), null, 16, ["modelValue"])) : (F(), te(G, he({
                key: 2,
                modelValue: z.value,
                "onUpdate:modelValue": $[3] || ($[3] = (Q) => z.value = Q)
              }, {
                type: H(Ti).Ul,
                editMode: M.editable,
                itemsContainerClass: `lkt-field-select-read multiple-display-${M.multipleDisplayEdition}`,
                itemSlotComponent: Mi(gt),
                itemSlotData: {
                  optionSlot: M.optionSlot,
                  previewMode: !0,
                  prop: M.prop,
                  isTag: H(g),
                  optionsConfig: M.optionsConfig
                },
                itemSlotEvents: {
                  clickIcon: q
                }
              }), null, 16, ["modelValue"]))
            ], 64)) : !M.multiple && M.pickedOptions.length > 0 ? (F(), te(gt, Oe(he({ key: 1 }, {
              item: M.pickedOptions[0],
              data: {
                optionSlot: M.optionSlot,
                previewMode: !0,
                prop: M.prop,
                isTag: H(g),
                optionsConfig: M.optionsConfig
              }
            })), null, 16)) : le("", !0)
          ]),
          _: 1
        }, 16)), [
          [Qe, !P.value || D.value]
        ]) : le("", !0),
        (F(), te(vt(N.value), he({
          ref_key: "dropdownEl",
          ref: a,
          modelValue: s.value,
          "onUpdate:modelValue": $[5] || ($[5] = (Q) => s.value = Q)
        }, M.autoLoading ? {} : {
          class: "lkt-field--dropdown",
          referrer: V.value,
          referrerWidth: !0,
          locationX: H($t).LeftCorner,
          locationY: H(Wt).Bottom,
          ...M.tooltip
        }), {
          default: _e(() => [
            M.autoLoading || r.value ? Ve((F(), te(G, he({
              key: 0,
              ref: "optionList",
              modelValue: b.value,
              "onUpdate:modelValue": $[4] || ($[4] = (Q) => b.value = Q)
            }, {
              type: H(Ti).Ul,
              editMode: M.editable,
              paginator: U.value,
              events: {
                parseResults: (Q) => {
                  var se;
                  return (se = M.optionsConfig.http) != null && se.resource ? H(er)(H(St)(H(c), u.prop), Q, M.prop) : H(St)(H(c), u.prop);
                }
              },
              itemDisplayChecker: (Q) => {
                var se;
                return H(Ui)(Q, w.value, !0, (se = M.optionsConfig) == null ? void 0 : se.filter);
              },
              itemsContainerClass: "lkt-field--dropdown-options",
              itemContainerClass: (Q, se) => {
                let ue = [];
                return H(tr)(Q, f.value, M.multiple) && ue.push("is-active"), o.value === se && ue.push("is-focused"), Q.disabled && ue.push("is-disabled"), ue.join(" ");
              },
              itemSlotComponent: Mi(gt),
              itemSlotData: {
                optionSlot: M.optionSlot,
                editable: M.editable,
                prop: M.prop,
                isTag: H(g),
                optionsConfig: M.optionsConfig
              },
              itemSlotEvents: {
                click: (Q, se) => {
                  L(Q);
                }
              }
            }, { onReadResponse: R }), null, 16, ["modelValue"])), [
              [Qe, !M.autoLoading]
            ]) : le("", !0)
          ]),
          _: 1
        }, 16, ["modelValue"]))
      ], 64);
    };
  }
}), fr = { class: "lkt-calc--formula" }, hr = { class: "lkt-calc--custom-pad" }, pr = { class: "lkt-calc--pad" }, mr = { class: "lkt-calc--numeric-pad" }, gr = { class: "lkt-calc--math-pad" }, vr = { class: "lkt-calc--advance-math-pad" }, br = /* @__PURE__ */ we({
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
    ne(l, (p) => i("update:modelValue", p));
    const u = Y(n.focusing), f = Y(null);
    let o;
    const g = () => {
      clearTimeout(o), a.value && typeof a.value.focus == "function" && a.value.focus();
    }, c = (p) => {
      l.value += "" + p, g();
    }, b = (p) => {
      l.value += " " + p + " ", g();
    }, x = (p) => {
      l.value += " " + p + "(", g();
    }, w = () => {
      l.value += " sqrt(", g();
    }, k = (p) => {
      l.value += "" + p, g();
    }, z = () => {
      l.value += ".", g();
    }, s = () => {
      l.value += " ", g();
    }, r = (p) => {
      l.value += "" + p.value, g();
    }, d = () => {
      u.value = !0;
    }, h = () => {
      o = setTimeout(() => {
        u.value = !1;
      }, 100);
    };
    return ne(u, (p) => {
      i(p ? "focus" : "blur");
    }), (p, v) => {
      const m = pe("lkt-button"), y = pe("lkt-tooltip");
      return F(), oe("div", {
        ref_key: "container",
        ref: f
      }, [
        ve("div", fr, [
          Ve(ve("input", {
            type: "text",
            ref_key: "input",
            ref: a,
            "onUpdate:modelValue": v[0] || (v[0] = (C) => l.value = C),
            onFocus: d,
            onBlur: h
          }, null, 544), [
            [Et, l.value]
          ])
        ]),
        p.editable ? (F(), te(y, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: u.value,
          "onUpdate:modelValue": v[27] || (v[27] = (C) => u.value = C),
          referrer: f.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: _e(() => [
            ve("div", hr, [
              (F(!0), oe(Ue, null, ct(p.options, (C) => (F(), te(m, {
                icon: C.icon,
                text: C.label,
                onClick: (_) => r(C)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            ve("div", pr, [
              ve("div", mr, [
                ae(m, {
                  onClick: v[1] || (v[1] = (C) => c(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[2] || (v[2] = (C) => c(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[3] || (v[3] = (C) => c(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[4] || (v[4] = (C) => c(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[5] || (v[5] = (C) => c(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[6] || (v[6] = (C) => c(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[7] || (v[7] = (C) => c(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[8] || (v[8] = (C) => c(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[9] || (v[9] = (C) => c(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[10] || (v[10] = (C) => z()),
                  text: "."
                }),
                ae(m, {
                  onClick: v[11] || (v[11] = (C) => c(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[12] || (v[12] = (C) => s()),
                  text: " "
                })
              ]),
              ve("div", gr, [
                ae(m, {
                  onClick: v[13] || (v[13] = (C) => k("[")),
                  text: "["
                }),
                ae(m, {
                  onClick: v[14] || (v[14] = (C) => k("]")),
                  text: "]"
                }),
                ae(m, {
                  onClick: v[15] || (v[15] = (C) => k("(")),
                  text: "("
                }),
                ae(m, {
                  onClick: v[16] || (v[16] = (C) => k(")")),
                  text: ")"
                }),
                ae(m, {
                  onClick: v[17] || (v[17] = (C) => b("+")),
                  text: "+"
                }),
                ae(m, {
                  onClick: v[18] || (v[18] = (C) => b("-")),
                  text: "−"
                }),
                ae(m, {
                  onClick: v[19] || (v[19] = (C) => b("*")),
                  text: "×"
                }),
                ae(m, {
                  onClick: v[20] || (v[20] = (C) => b("/")),
                  text: "÷"
                })
              ]),
              ve("div", vr, [
                ae(m, {
                  onClick: v[21] || (v[21] = (C) => w()),
                  text: "√"
                }),
                ae(m, {
                  onClick: v[22] || (v[22] = (C) => x("log")),
                  text: "log"
                }),
                ae(m, {
                  onClick: v[23] || (v[23] = (C) => x("ln")),
                  text: "ln"
                }),
                ae(m, {
                  onClick: v[24] || (v[24] = (C) => x("sin")),
                  text: "sin"
                }),
                ae(m, {
                  onClick: v[25] || (v[25] = (C) => x("cos")),
                  text: "cos"
                }),
                ae(m, {
                  onClick: v[26] || (v[26] = (C) => x("tan")),
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
}), yr = /* @__PURE__ */ we({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = J(() => {
      let f = fl(t.validation.code, t.stack), o = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, g = fl(t.validation.status + "-" + t.validation.code, t.stack);
      return g && (f = g), f ? f.startsWith("__:") ? jl(f.substring(3), o) : to(f, o, ":", "") : t.validation.code;
    }), n = J(() => ee.validationIconSlot !== ""), l = J(() => ee.validationIconSlot), a = J(() => {
      let f = [];
      return f.push("code-" + t.validation.code), f.push("is-" + t.validation.status), f.join(" ");
    }), u = J(() => {
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
      const g = pe("lkt-icon");
      return F(), oe("div", {
        class: Ye(["lkt-field-validation-message", a.value])
      }, [
        u.value && typeof u.value == "string" ? (F(), te(g, Oe(he({ key: 0 }, {
          icon: u.value
        })), null, 16)) : u.value && typeof u.value == "object" ? (F(), te(g, Oe(he({ key: 1 }, u.value)), null, 16)) : n.value ? (F(), te(vt(l.value), { key: 2 })) : le("", !0),
        Si(" " + ut(i.value), 1)
      ], 2);
    };
  }
}), _r = {
  key: 0,
  class: "lkt-field-validation-info"
}, Cr = /* @__PURE__ */ we({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = Y(t.items), n = Y(!1);
    return ne(() => t.items, (l) => {
      n.value = !0, Ke(() => n.value = !1);
    }, { deep: !0 }), (l, a) => n.value ? le("", !0) : (F(), oe("div", _r, [
      (F(!0), oe(Ue, null, ct(i.value, (u) => (F(), te(yr, {
        validation: u,
        stack: l.stack,
        key: u.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), wr = ["id"], kr = /* @__PURE__ */ we({
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
    let u, f;
    const o = Y({}), g = () => {
      clearTimeout(f), f = setTimeout(() => {
        o.value = {
          query: l.value
        };
      }, 300);
    }, c = () => {
      a.value = !0;
    }, b = () => {
      u = setTimeout(() => {
        a.value = !1;
      }, 100);
    };
    ne(a, (w) => {
      i(w ? "focus" : "blur");
    });
    const x = () => {
      clearTimeout(u), setTimeout(() => {
        c();
      }, 100);
    };
    return (w, k) => {
      const z = pe("lkt-table"), s = pe("lkt-tooltip");
      return F(), oe(Ue, null, [
        Ve(ve("input", {
          id: w.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": k[0] || (k[0] = (r) => l.value = r),
          onFocus: c,
          onBlur: b,
          onKeyup: g
        }, null, 40, wr), [
          [Et, l.value]
        ]),
        w.editable && w.hadFirstFocus ? (F(), te(s, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: a.value,
          "onUpdate:modelValue": k[1] || (k[1] = (r) => a.value = r),
          referrer: w.container,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: _e(() => [
            ae(z, he({
              type: H(Ti).Ul,
              itemsContainerClass: "lkt-field--dropdown-options",
              paginator: {
                resource: w.optionsResource,
                resourceData: o.value
              },
              itemSlotComponent: Mi(gt),
              itemSlotData: {
                optionSlot: "",
                editable: w.editable,
                prop: {},
                isTag: !1,
                optionsConfig: {}
              },
              itemSlotEvents: {
                click: x
              }
            }, {
              onPage: x,
              onClick: x
            }), null, 16)
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : le("", !0)
      ], 64);
    };
  }
}), xr = {
  key: 0,
  class: "lkt-field-main"
}, Sr = {
  key: 3,
  class: "lkt-field--read-value"
}, Tr = ["innerHTML", "title"], Er = ["title"], Lr = { key: 0 }, Br = ["title"], zr = ["innerHTML"], Nr = ["innerHTML", "title"], Rr = ["innerHTML", "title"], Ar = /* @__PURE__ */ we({
  __name: "LktFieldValue",
  props: {
    type: { default: j.Text },
    value: {},
    label: {},
    title: { default: "" },
    fileName: {},
    valueSlot: { default: "" },
    emptyValueSlot: { default: "" },
    slotData: { default: () => ({}) },
    download: { type: [String, Function], default: "" },
    anchor: {},
    multiple: { type: Boolean, default: !1 },
    multipleDisplay: { default: xt.List },
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
    const i = t, n = Pi(), l = e, a = () => i("click"), u = J(() => {
      switch (l.type) {
        case j.Select:
          if (l.multiple && Array.isArray(l.value) && l.value.length > 0 || l.multiple && l.multipleDisplay === xt.Count || !l.multiple && l.value) return "";
          break;
        case j.Date:
          if (l.value !== "") return "";
          break;
        default:
          if (l.value !== "") return "";
      }
      return ee.customValueSlots[l.emptyValueSlot] ?? ee.defaultEmptyValueSlot;
    }), f = J(() => ee.customValueSlots[l.valueSlot] ?? ""), o = J(() => {
      var c;
      let g = l.value;
      return l.type === j.Select && l.multiple && !Array.isArray(g) && (g = []), (l.type === j.Textarea || l.type === j.Text) && (typeof ((c = l.readModeConfig) == null ? void 0 : c.textMaxLength) < "u" && g.length > l.readModeConfig.textMaxLength ? g = g.substring(0, l.readModeConfig.textMaxLength) + "..." : typeof ee.readTextMaxLength < "u" && g.length > ee.readTextMaxLength && (g = g.substring(0, ee.readTextMaxLength) + "...")), g;
    });
    return (g, c) => {
      const b = pe("lkt-image"), x = pe("lkt-button"), w = pe("lkt-anchor"), k = pe("lkt-tag"), z = pe("lkt-table");
      return F(), oe("div", {
        class: "lkt-field--read",
        onClick: a
      }, [
        H(n).value ? Xe(g.$slots, "value", {
          key: 0,
          value: o.value,
          title: g.title,
          data: g.slotData
        }) : u.value ? (F(), te(vt(u.value), {
          key: 1,
          data: g.slotData
        }, null, 8, ["data"])) : f.value ? (F(), te(vt(f.value), {
          key: 2,
          value: o.value,
          title: g.title,
          data: g.slotData
        }, null, 8, ["value", "title", "data"])) : (F(), oe(Ue, { key: 3 }, [
          g.type === H(j).File || g.type === H(j).Image ? (F(), oe("div", xr, [
            ae(x, {
              class: "lkt-field--toggle-button",
              text: g.type === H(j).File ? g.fileName : "",
              disabled: ""
            }, {
              default: _e(() => [
                g.type === H(j).Image ? (F(), te(b, {
                  key: 0,
                  src: o.value,
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : le("", !0),
                g.type === H(j).Image ? (F(), te(b, {
                  key: 1,
                  src: o.value,
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : le("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : g.type === H(j).Email ? (F(), te(w, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: g.title,
            to: o.value
          }, {
            default: _e(() => [
              Si(ut(o.value), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : g.type === H(j).Tel ? (F(), te(w, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: g.title,
            to: o.value
          }, {
            default: _e(() => [
              Si(ut(o.value), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : H(at).includes(g.type) ? (F(), oe("div", Sr, [
            ae(k, {
              icon: o.value ? "lkt-icn-check" : "lkt-icn-cancel",
              "featured-text": g.label,
              title: g.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : g.type === H(j).Date ? (F(), oe("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: o.value,
            title: g.title
          }, null, 8, Tr)) : g.type === H(j).Select ? (F(), oe("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: g.title
          }, [
            g.multiple ? (F(), oe(Ue, { key: 0 }, [
              g.multipleDisplay === H(xt).Count ? (F(), oe("div", Lr, ut(o.value.length), 1)) : g.multipleDisplay === H(xt).Table ? (F(), te(z, he({
                key: 1,
                "model-value": o.value
              }, g.optionsConfig.table), null, 16, ["model-value"])) : o.value.length > 0 ? (F(), oe("ul", {
                key: 2,
                class: Ye(["lkt-field-select-read", `multiple-display-${g.multipleDisplay}`])
              }, [
                (F(!0), oe(Ue, null, ct(o.value, (s, r) => {
                  var d;
                  return F(), oe("li", {
                    key: `${r}-${o.value[r].value}`,
                    title: (d = o.value[r]) == null ? void 0 : d.label
                  }, [
                    ae(gt, he({ ref_for: !0 }, {
                      item: o.value[r],
                      data: {
                        optionSlot: g.optionSlot,
                        editable: !1,
                        prop: g.prop,
                        optionsConfig: g.optionsConfig
                      }
                    }), null, 16)
                  ], 8, Br);
                }), 128))
              ], 2)) : le("", !0)
            ], 64)) : o.value.length > 0 ? (F(), te(gt, Oe(he({ key: 1 }, {
              item: o.value[0],
              data: {
                optionSlot: g.optionSlot,
                editable: !1,
                prop: g.prop,
                optionsConfig: g.optionsConfig
              }
            })), null, 16)) : le("", !0)
          ], 8, Er)) : g.modal ? (F(), te(x, {
            key: 6,
            class: "lkt-field--read-value",
            title: g.title,
            modal: g.modal,
            "modal-key": g.modalKey,
            "modal-data": g.modalData
          }, {
            default: _e(() => [
              ve("div", { innerHTML: o.value }, null, 8, zr)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : g.download ? (F(), te(gt, Oe(he({ key: 7 }, {
            item: { value: "", label: o.value },
            data: {
              optionSlot: g.optionSlot,
              editable: !1,
              prop: g.prop,
              optionsConfig: g.optionsConfig,
              anchor: g.anchor,
              download: g.download
            }
          })), null, 16)) : g.type === H(j).Number ? (F(), oe("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: g.title,
            title: g.title
          }, null, 8, Nr)) : (F(), oe("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: o.value,
            title: g.title
          }, null, 8, Rr))
        ], 64))
      ]);
    };
  }
}), Ir = ["name", "id", "disabled", "readonly", "placeholder", "accept"], Mr = {
  key: 2,
  class: "lkt-button lkt-field--toggle-button"
}, Dr = { class: "lkt-grid-1" }, Vr = /* @__PURE__ */ we({
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
  setup(e, { expose: t, emit: i }) {
    const n = i, l = e, a = Y(null), u = Y(null), f = Y(l.modelValue), o = Y(l.fileName), g = Y(l.uploading), c = (w) => {
      let k = w.target;
      if (k.files && k.files[0]) {
        o.value = k.files[0].name;
        const z = new FileReader();
        z.onload = (s) => {
          if (f.value = s.target.result, l.resource) {
            g.value = !0, n("uploading");
            let r = JSON.parse(JSON.stringify(l.resourceData));
            r.files = k.files[0], Wi(l.resource, r).then((d) => {
              if (g.value = !1, !d.success) {
                n("upload-error", d);
                return;
              }
              f.value = d.data, n("upload-success", d);
            }).catch((d) => {
              g.value = !1, n("upload-error", d);
            });
          }
        }, z.readAsDataURL(k.files[0]);
      }
      n("change", w);
    };
    ne(f, (w) => n("update:modelValue", w)), ne(o, (w) => n("update:fileName", w)), t({
      click: () => {
        var w;
        (w = u.value) == null || w.click();
      }
    });
    const b = Y(typeof l.fileBrowserConfig == "object" && Object.keys(l.fileBrowserConfig).length > 0), x = (w) => {
      f.value = w[0].src, n("picked-files", w);
    };
    return (w, k) => {
      const z = pe("lkt-image"), s = pe("lkt-button");
      return F(), oe(Ue, null, [
        ve("input", {
          ref_key: "inputElement",
          ref: a,
          type: "file",
          name: w.name,
          id: w.id,
          disabled: w.disabled,
          readonly: w.readonly,
          placeholder: w.placeholder,
          accept: w.accept,
          onChange: c
        }, null, 40, Ir),
        b.value ? w.isImage ? w.isImage ? (F(), oe("div", Mr, [
          w.isImage ? (F(), te(z, {
            key: 0,
            src: f.value,
            class: "lkt-field--image-cover"
          }, null, 8, ["src"])) : le("", !0),
          w.isImage ? (F(), te(z, {
            key: 1,
            src: f.value,
            class: "lkt-field--image-main"
          }, {
            overlay: _e(() => [
              ve("div", null, [
                ve("div", Dr, [
                  le("", !0),
                  ae(s, he({ ref: "fileBrowserButtonRef" }, {
                    text: "Explore files",
                    icon: "lkt-icn-search",
                    disabled: w.disabled,
                    modal: "lkt-file-browser",
                    modalData: {
                      fileBrowserConfig: w.fileBrowserConfig,
                      onConfirmSelection: x
                    }
                  }), null, 16)
                ])
              ])
            ]),
            _: 1
          }, 8, ["src"])) : le("", !0)
        ])) : le("", !0) : (F(), te(s, {
          key: 1,
          ref_key: "buttonRef",
          ref: u,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: o.value,
          disabled: w.disabled
        }, null, 8, ["click-ref", "text", "disabled"])) : (F(), te(s, {
          key: 0,
          ref_key: "buttonRef",
          ref: u,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: w.isImage ? "" : o.value,
          disabled: w.disabled
        }, {
          default: _e(() => [
            w.isImage ? (F(), te(z, {
              key: 0,
              src: f.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : le("", !0),
            w.isImage ? (F(), te(z, {
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
}), Or = { class: "lkt-calendar" }, Hr = { class: "calendar" }, Fr = { class: "lkt-calendar--header-grid" }, Ur = ["innerHTML"], Pr = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, Wr = { class: "lkt-calendar--day lkt-calendar--filling-day" }, $r = /* @__PURE__ */ we({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const i = t, n = e, l = Y(n.modelValue);
    ne(() => n.modelValue, (h) => l.value = h, { deep: !0 }), ne(l, (h) => i("update:modelValue", h), { deep: !0 });
    const a = Y(/* @__PURE__ */ new Date()), u = Y(/* @__PURE__ */ new Date());
    $i(l.value) && typeof l.value < "u" && (u.value = new Date(l.value.getFullYear(), l.value.getMonth(), l.value.getDate()));
    const f = Y(u.value.getFullYear()), o = Y(u.value.getMonth()), g = Y(!1), c = Y(Pt("Y-m", u.value));
    ne(g, (h) => {
      h && Ke(() => g.value = !1);
    });
    const b = J(() => new Date(f.value, o.value + 1, 0).getDate()), x = J(() => new Date(f.value, o.value, 1).getDay()), w = () => {
      o.value > 11 && (o.value = 0, f.value += 1), o.value += 1, u.value.setFullYear(f.value, o.value), u.value = new Date(u.value), c.value = Pt("Y-m", u.value);
    }, k = () => {
      o.value < 0 && (o.value = 11, f.value -= 1), o.value -= 1, u.value.setFullYear(f.value, o.value), u.value = new Date(u.value), c.value = Pt("Y-m", u.value);
    }, z = (h) => typeof l.value > "u" || l.value.getFullYear() !== f.value || l.value.getMonth() !== o.value ? !1 : l.value.getDate() === h, s = (h) => typeof l.value > "u" || a.value.getFullYear() !== f.value || a.value.getMonth() !== o.value ? !1 : a.value.getDate() === h, r = (h) => ({
      "is-picked": z(h),
      "is-today": s(h)
    }), d = (h) => {
      var p;
      typeof l.value > "u" ? l.value = new Date(f.value, o.value, h) : ((p = l.value) == null || p.setFullYear(f.value, o.value, h), l.value = new Date(l.value));
    };
    return (h, p) => {
      const v = pe("lkt-button");
      return F(), oe("div", Or, [
        ve("div", Hr, [
          ve("header", Fr, [
            ae(v, Oe(mt({
              class: "lkt-calendar--day",
              icon: "lkt-icn-triangle-left",
              events: {
                click: k
              }
            })), null, 16),
            ve("div", {
              class: "lkt-calendar--header-text",
              innerHTML: c.value
            }, null, 8, Ur),
            ae(v, Oe(mt({
              class: "lkt-calendar--day",
              icon: "lkt-icn-triangle-right",
              events: {
                click: w
              }
            })), null, 16)
          ]),
          g.value ? le("", !0) : (F(), oe("div", Pr, [
            p[0] || (p[0] = Qn('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (F(!0), oe(Ue, null, ct(x.value, (m) => (F(), oe("div", Wr))), 256)),
            (F(!0), oe(Ue, null, ct(b.value, (m) => (F(), te(v, {
              class: Ye(["lkt-calendar--day", r(m)]),
              text: m.toString(),
              onClick: () => d(m)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        p[1] || (p[1] = ve("div", { class: "display-selected" }, [
          ve("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), Zr = /* @__PURE__ */ we({
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
    const i = t, n = e, l = Y(void 0), a = Y(""), u = Y(""), f = Y(n.modelValue), o = J(() => {
      if (n.isDateTime) {
        if (ee.dateTimeReadFormat) return ee.dateTimeReadFormat;
        if (ee.langDateTimeReadFormat[n.lang]) return ee.langDateTimeReadFormat[n.lang];
        if (ee.defaultDateTimeReadFormat) return ee.defaultDateTimeReadFormat;
        if (n.isDateTime) return "Y-m-d H:i";
      }
      return ee.dateReadFormat ? ee.dateReadFormat : ee.langDateReadFormat[n.lang] ? ee.langDateReadFormat[n.lang] : ee.defaultDateReadFormat ? ee.defaultDateReadFormat : "Y-m-d";
    }), g = J(() => n.isDateTime ? "Y-m-d H:i" : "Y-m-d"), c = (w) => {
      let k = new Date(w);
      $i(k) && (l.value = k, n.isDateTime && (a.value = [kt(k.getHours(), 2, "0"), kt(k.getMinutes(), 2, "0")].join(":")));
    }, b = () => {
      u.value = Ql(l.value, o.value);
    };
    ne(() => n.modelValue, (w) => {
      f.value = w, c(w);
    }), ne(f, (w) => i("update:modelValue", w));
    const x = (w) => {
      var z, s;
      let k = w.split(":");
      k.length >= 2 && typeof l.value == "object" && ((z = l.value) == null || z.setHours(parseInt(k[0])), (s = l.value) == null || s.setMinutes(parseInt(k[1])), l.value = new Date(l.value));
    };
    return ne(a, (w) => {
      x(w);
    }), ne(l, (w) => {
      var k, z;
      if (typeof w > "u")
        f.value = "";
      else {
        let s = a.value.split(":");
        s.length >= 2 && typeof l.value == "object" && ((k = l.value) == null || k.setHours(parseInt(s[0])), (z = l.value) == null || z.setMinutes(parseInt(s[1]))), f.value = Pt(g.value, w);
      }
      b();
    }, { deep: !0 }), zt(() => {
      c(n.modelValue), b();
    }), (w, k) => {
      const z = pe("lkt-field"), s = pe("lkt-button");
      return F(), te(s, Oe(mt({
        type: H(et).Tooltip,
        icon: w.icon,
        class: "lkt-field--toggle-button",
        text: u.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: H(Wt).Bottom,
          locationX: H($t).LeftCorner
        }
      })), {
        tooltip: _e(() => [
          ae($r, {
            modelValue: l.value,
            "onUpdate:modelValue": k[0] || (k[0] = (r) => l.value = r)
          }, null, 8, ["modelValue"]),
          w.isDateTime ? (F(), te(z, he({
            key: 0,
            modelValue: a.value,
            "onUpdate:modelValue": k[1] || (k[1] = (r) => a.value = r)
          }, {
            type: H(j).Time
          }), null, 16, ["modelValue"])) : le("", !0)
        ]),
        _: 1
      }, 16);
    };
  }
}), ql = (e, t) => typeof e == "object" && !Array.isArray(e) ? e[t] : e, Ii = (e, t, i) => {
  if (t) {
    let n = '<i class="' + t + '"></i>';
    i ? e += n : e = n + e;
  }
  return e;
}, qr = { key: 1 }, En = /* @__PURE__ */ we({
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
    const n = Y(e.modelValue), l = (a, u) => {
    };
    return (a, u) => {
      const f = pe("lkt-button");
      return F(), te(f, {
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        onClick: l
      }, {
        default: _e(() => [
          n.value ? Xe(a.$slots, "item", {
            key: 0,
            item: n.value
          }) : (F(), oe("p", qr, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), jr = /* @__PURE__ */ we({
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
    const t = Pi(), i = e, n = Y(i.modelValue), l = J(() => typeof i.max == "boolean" || n.value.length < i.max ? ["modal-create"] : []);
    return (a, u) => {
      const f = pe("lkt-table");
      return F(), te(f, {
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
        item: _e(({ item: o, index: g, isLoading: c, canCreate: b, canRead: x, canUpdate: w, canDrop: k, doDrop: z }) => [
          ae(En, {
            modelValue: n.value[g],
            "onUpdate:modelValue": (s) => n.value[g] = s,
            "item-type": a.itemType
          }, Tt({ _: 2 }, [
            H(t).item ? {
              name: "item",
              fn: _e(({ item: s }) => [
                Xe(a.$slots, "item", {
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
}), Gr = /* @__PURE__ */ we({
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
    const i = t, n = e, l = J(() => n.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), a = () => i("click");
    return (u, f) => {
      const o = pe("lkt-button");
      return F(), te(o, he(u.config, {
        type: u.config.type ? u.config.type : H(et).FileUpload,
        resource: u.config.resource ?? u.fileUploadHttp.resource,
        "resource-data": u.config.resourceData ?? u.fileUploadHttp.data,
        text: u.insideEllipsis ? u.config.text : "",
        class: [l.value, "lkt-field--btn-file-upload"],
        icon: "lkt-icn-upload",
        onClick: a
      }), null, 16, ["type", "resource", "resource-data", "text", "class"]);
    };
  }
}), Kr = { class: "lkt-time lkt-flex-column" }, Yr = /* @__PURE__ */ we({
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
    const i = t, n = e, l = Y(n.hour), a = Y(n.minutes);
    return ne(() => n.hour, (u) => l.value = u), ne(() => n.minutes, (u) => a.value = u), ne(l, (u) => i("update:hour", u)), ne(a, (u) => i("update:minutes", u)), (u, f) => {
      const o = pe("lkt-field");
      return F(), oe("div", Kr, [
        ae(o, he({
          modelValue: l.value,
          "onUpdate:modelValue": f[0] || (f[0] = (g) => l.value = g)
        }, {
          type: H(j).Number,
          label: "Hour",
          canStep: !0,
          min: 0,
          max: 23
        }), null, 16, ["modelValue"]),
        ae(o, he({
          modelValue: a.value,
          "onUpdate:modelValue": f[1] || (f[1] = (g) => a.value = g)
        }, {
          type: H(j).Number,
          label: "Minutes",
          canStep: !0,
          min: 0,
          max: 59
        }), null, 16, ["modelValue"])
      ]);
    };
  }
}), Xr = /* @__PURE__ */ we({
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
    const i = t, n = e, l = /* @__PURE__ */ new Date(), a = Y(l.getHours()), u = Y(l.getMinutes()), f = Y(n.modelValue), o = (g) => {
      let c = g.split(":");
      c.length >= 2 && (a.value = parseInt(c[0]), u.value = parseInt(c[1]));
    };
    return ne([a, u], (g) => {
      f.value = [kt(a.value, 2, "0"), kt(u.value, 2, "0")].join(":");
    }), ne(() => n.modelValue, (g) => f.value = g), ne(f, (g) => i("update:modelValue", g)), zt(() => {
      o(f.value), f.value = [kt(a.value, 2, "0"), kt(u.value, 2, "0")].join(":");
    }), (g, c) => {
      const b = pe("lkt-button");
      return F(), te(b, Oe(mt({
        type: H(et).Tooltip,
        icon: g.icon,
        class: "lkt-field--toggle-button",
        text: f.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: H(Wt).Bottom,
          locationX: H($t).LeftCorner
        }
      })), {
        tooltip: _e(() => [
          ae(Yr, {
            hour: a.value,
            "onUpdate:hour": c[0] || (c[0] = (x) => a.value = x),
            minutes: u.value,
            "onUpdate:minutes": c[1] || (c[1] = (x) => u.value = x)
          }, null, 8, ["hour", "minutes"])
        ]),
        _: 1
      }, 16);
    };
  }
});
var ge = /* @__PURE__ */ ((e) => (e[e.TextInput = 0] = "TextInput", e[e.TextareaInput = 1] = "TextareaInput", e[e.HtmlInput = 2] = "HtmlInput", e[e.BooleanInput = 3] = "BooleanInput", e[e.MultipleColorInput = 4] = "MultipleColorInput", e[e.SingleColorInput = 5] = "SingleColorInput", e[e.FileInput = 6] = "FileInput", e[e.DateInput = 7] = "DateInput", e[e.TimeInput = 8] = "TimeInput", e[e.SelectInput = 9] = "SelectInput", e[e.CalcInput = 10] = "CalcInput", e[e.SearchInput = 11] = "SearchInput", e[e.MultipleCardInput = 12] = "MultipleCardInput", e[e.SingleCardInput = 13] = "SingleCardInput", e))(ge || {});
const Jr = ["data-show-ui", "data-labeled"], Qr = ["for", "innerHTML"], eu = { class: "lkt-field-content" }, tu = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, iu = {
  key: 1,
  class: "lkt-field--icon"
}, lu = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], nu = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], ou = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], su = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], au = {
  key: 4,
  class: "lkt-field--info-nav"
}, Bt = /* @__PURE__ */ we({
  __name: "LktField",
  props: /* @__PURE__ */ eo({
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
  }, go(vo)),
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
  setup(e, { expose: t, emit: i }) {
    const n = i, l = Pi(), a = e, u = io(16), f = Y(!1);
    let o = We(a.modal, a.prop), g = We(a.modalKey, a.prop), c = We(a.icon, a.prop), b = We(a.download, a.prop), x = We(a.itemType, a.prop);
    !o && typeof x != "function" && x && typeof ee.modalPerItemType[x] < "u" && (o = ee.modalPerItemType[x]);
    const w = Y(null);
    let k = a.featuredButton, z = a.modelValue;
    a.multiple && uo.includes(a.type) ? (!z || !Array.isArray(z)) && (z = []) : at.includes(a.type) ? typeof z != "boolean" && (z = !1) : [j.Date, j.DateTime].includes(a.type) && !c ? c = ee.defaultDateIcon : a.type === j.Time && !c ? c = "lkt-icn-clock" : a.type === j.Number && a.canStep && k === "" && (k = ee.defaultNumberFeaturedButton);
    const s = Y(z), r = Y(z), d = Y(a.valid === !0), h = Y(!0), p = Y(!1), v = Y(!1), m = Y(!1), y = Y(!1), C = Y([]), _ = Y(a.fileName), S = Y(a.fileName), I = Y(null), E = Y(!1), B = Y(!1), A = Y(""), q = Y(-1), Z = Y([]), W = Y(!1), D = J(() => ao.value), P = J(() => (D.value, ee.dateReadFormat ? ee.dateReadFormat : ee.langDateReadFormat[D.value] ? ee.langDateReadFormat[D.value] : ee.defaultDateReadFormat ? ee.defaultDateReadFormat : "Y-m-d")), L = [j.Card].includes(a.type) ? r : Y(ql(r.value, D.value)), O = Y(typeof L.value == "object" ? JSON.parse(JSON.stringify(L.value)) : L.value), R = Y([]), U = Y([]), N = () => {
      let T = U.value[0];
      a.optionValueType === "option" ? a.multiple ? L.value.push(T) : L.value = T : a.multiple ? L.value.push(T.value) : L.value = T.value, Z.value.push(T);
    }, V = J(() => a.type === j.Textarea ? "textarea" : a.type === j.Html ? "div" : "input"), M = J(() => {
      if ([j.Date, j.DateTime].includes(a.type))
        return r.value !== s.value;
      if (a.type === j.Select && a.multiple && a.optionValueType !== "option") {
        let T = new Ut({ v: O.value });
        return T.increment({ v: L.value }), T.changed();
      }
      return L.value !== O.value;
    }), $ = J(() => typeof a.disabled == "function" ? a.disabled(a.prop) : a.disabled), ie = J(() => {
      let T = 0;
      return bt.value && ++T, ji.value && ++T, Gi.value && ++T, Ki.value && ++T, Xi.value && ++T, Ji.value && ++T, Yi.value && ++T, Ne.value && ++T, He.value && ++T, (a.customButtonText || a.customButtonClass) && ++T, typeof a.createButton == "object" && ++T, T > 0 && a.type === j.Textarea || T > 0 && a.type === j.Html || T > 0 && a.infoButtonEllipsis ? 1 : T;
    }), G = J(() => tt.value && k === "i18n" || Ze.value && k === "password" || Fe.value && k === "subtract"), X = J(() => ie.value > 0), Q = J(() => a.autocomplete === !0 ? "on" : "off"), se = J(() => {
      var T;
      return [j.Date, j.DateTime].includes(a.type) ? r.value !== "" : [j.Select].includes(a.type) ? (T = a.optionsConfig) != null && T.zeroMeansEmpty ? !(r.value === "" || r.value === 0) : r.value !== "" : L.value !== "";
    }), ue = J(() => a.type === j.Password && p.value === !0 ? "text" : a.type === j.Email ? "email" : a.type === j.Password ? "password" : a.type === j.Number ? "number" : a.type === j.Tel ? "tel" : a.type === j.Search ? "search" : a.type === j.Color ? "color" : a.type === j.Range ? "range" : "text"), me = J(() => {
      var K;
      const T = [];
      return T.push(`is-${a.type}`), at.includes(a.type) && (T.push("is-boolean"), L.value && T.push("is-checked")), M.value && T.push("is-changed"), $.value && T.push("is-disabled"), a.multiple && T.push("is-multiple"), G.value && T.push("with-atn-btn"), X.value && T.push("with-info-btn"), a.mandatory && fe.value && T.push("is-mandatory-field"), fe.value && v.value && T.push("has-focus"), E.value && T.push("show-options"), a.searchable && W.value && T.push("is-searching"), a.hidden && T.push("lkt-hidden-field"), a.type !== j.Range && ((K = a.validation) == null ? void 0 : K.type) === co.Auto && y.value && m.value && (C.value.length > 0 ? T.push("is-invalid") : T.push("is-valid")), [j.Textarea, j.Html].includes(a.type) && T.push("is-lg"), [j.Image].includes(a.type) && T.push("is-xl"), a.multiple && a.type === j.Select && T.push("is-lg"), a.multiple && (fe.value ? T.push(`has-multiple-display-${a.multipleDisplayEdition}`) : T.push(`has-multiple-display-${a.multipleDisplay}`)), ie.value > 0 && T.push("has-icons", `has-icons-${ie.value}`), T.push(fe.value ? "is-editable" : "is-read"), a.type !== j.Range && (T.push(d.value ? "is-valid" : "is-error"), T.push(se.value ? "is-filled" : "is-empty")), T.join(" ");
    }), be = J(() => {
      var T;
      return typeof L.value == "number" ? (D.value, (T = ee.langNumberFormat[D.value]) != null && T.amountOfDecimals ? ol(
        L.value,
        ee.langNumberFormat[D.value].amountOfDecimals,
        ee.langNumberFormat[D.value].decimalSeparator,
        ee.langNumberFormat[D.value].thousandsSeparator,
        ee.langNumberFormat[D.value].removeDecimalsIfZero
      ) : ee.amountOfDecimals ? ol(
        L.value,
        ee.amountOfDecimals,
        ee.decimalSeparator,
        ee.thousandsSeparator,
        ee.removeDecimalsIfZero
      ) : L.value.toString()) : a.type === j.Html ? Di(L.value) : L.value;
    }), xe = J(() => {
      let T = We(a.min, a.prop);
      return typeof T == "string" ? parseFloat(T) : typeof T == "number" ? T : !1;
    }), Be = J(() => {
      let T = We(a.max, a.prop);
      return typeof T == "string" ? parseFloat(T) : typeof T == "number" ? T : !1;
    }), Ce = J(() => {
      var T, K, ce, Le;
      if (at.includes(a.type)) {
        if (L.value === !0 && typeof a.configOn == "object")
          return Ii(
            Ft(((T = a.configOn) == null ? void 0 : T.label) ?? a.label),
            ((K = a.configOn) == null ? void 0 : K.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
        if (L.value !== !0 && typeof a.configOff == "object")
          return Ii(
            Ft(((ce = a.configOff) == null ? void 0 : ce.label) ?? a.label),
            ((Le = a.configOff) == null ? void 0 : Le.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
      }
      return Ii(
        Ft(a.label),
        a.labelIcon,
        a.labelIconAtEnd
      );
    }), ze = J(() => Ft(a.placeholder)), Se = J(() => Ft(a.searchPlaceholder)), je = J(() => typeof o == "function" ? o(a.prop) : We(o, a.prop)), fe = J(() => typeof a.readMode == "function" ? !a.readMode(a.prop) : !We(a.readMode, a.prop)), $e = J(() => {
      if (typeof a.modalData == "function") return a.modalData(a.prop);
      if (typeof a.modalData == "string") return We(a.modalData, a.prop);
      if (typeof a.modalData == "object" && !Array.isArray(a.modalData)) {
        let T = {};
        for (let K in a.modalData)
          T[K] = We(a.modalData[K], a.prop);
        return T;
      }
      return a.modalData;
    }), Ie = J(() => typeof c == "function" ? c(a.prop) : We(c, a.prop)), ke = J(() => a.type === j.File ? ee.acceptTypes.file : a.type === j.Image ? ee.acceptTypes.image : ""), qt = J(() => a.errorMessage), Je = J(() => a.infoMessage), Fe = J(() => a.canStep && fe.value && a.type === j.Number), Ne = J(() => a.canStep && fe.value && a.type === j.Number && k !== "subtract"), He = J(() => a.canStep && fe.value && a.type === j.Number), Me = J(() => a.canUndo && M.value && fe.value && !fo.includes(a.type)), dt = J(() => a.canClear && se.value && fe.value && !ho.includes(a.type)), tt = J(() => a.canI18n && typeof r.value == "object" && fe.value), Ze = J(() => a.type === j.Password && a.showPassword && se.value && fe.value), bt = J(() => Me.value && !a.infoButtonEllipsis), ji = J(() => dt.value && !a.infoButtonEllipsis), Gi = J(() => Ze.value && !a.infoButtonEllipsis && k !== "password"), Ki = J(() => tt.value && !a.infoButtonEllipsis && k !== "i18n"), Yi = J(() => {
      var T, K, ce, Le;
      return a.type === j.Calc || a.type === j.Search || ![j.Select, j.Text].includes(a.type) ? !1 : U.value.length > 0 || R.value.length > 0 || typeof ((K = (T = a.optionsConfig) == null ? void 0 : T.http) == null ? void 0 : K.resource) < "u" && ((Le = (ce = a.optionsConfig) == null ? void 0 : ce.http) == null ? void 0 : Le.resource) !== "";
    }), Xi = J(() => a.allowReadModeSwitch && !a.infoButtonEllipsis), Ji = J(() => typeof a.fileUploadButton == "object" && Object.keys(a.fileUploadButton).length > 0), Qi = () => {
      Ke(() => {
        w.value && w.value.focus();
      });
    }, Ln = async () => {
      var K;
      let T = [];
      if ((K = a.validation) != null && K.resource) {
        n("validating");
        const ce = await Wi(a.validation.resource, {
          ...a.validation.resourceData,
          value: L.value
        });
        if (ce) {
          let Le = ce.data === !0;
          !Le && L.value === s.value && (Le = !0), T.push(Re.createRemoteResponse(ce, Le ? Te.Ok : Te.Ko));
        }
        n("validation", ce);
      }
      return T;
    }, Pe = Y({});
    a.canI18n && typeof a.modelValue == "object" && !Array.isArray(a.modelValue) && (Pe.value = JSON.parse(JSON.stringify(a.modelValue)) ?? {});
    const Bn = Y(new Ut(Pe.value));
    ne(Pe, (T, K) => {
      let ce = new Ut(Bn.value.getOriginalData());
      ce.increment(T), ce.changed() && (n("update:modelValue", T), yt && clearTimeout(yt), yt = setTimeout(() => {
        ft();
      }, 150));
    }, { deep: !0 }), ne(() => {
      var T;
      return (T = a.validation) == null ? void 0 : T.checkEqualTo;
    }, () => ft()), ne(() => a.valid, (T) => d.value = T), ne(() => a.modelValue, (T) => {
      var K;
      if ([j.Card].includes(a.type))
        L.value = T;
      else if ([j.Date, j.DateTime].includes(a.type))
        L.value = ql(T, D.value);
      else if (a.type === j.Select)
        !T && ((K = a.optionsConfig) != null && K.autoPickFirstOptionIfEmpty) && (Z.value = [], N());
      else if (a.canI18n) {
        let ce = new Ut(Pe.value);
        ce.increment(T), ce.changed() && (Pe.value = JSON.parse(JSON.stringify(T)) ?? {});
      } else
        L.value = T;
    }, { deep: !0 }), ne(L, (T) => {
      typeof T == "object" && !Array.isArray(T) && ![j.Card].includes(a.type) ? r.value[D.value] = T : r.value = T, a.type === j.Number && Wn(T);
    }, { deep: !0 });
    let yt;
    ne(r, (T) => {
      B.value && fe.value && (n("update:modelValue", T), yt && clearTimeout(yt), yt = setTimeout(() => {
        ft();
      }, 150));
    }, { deep: !0 }), ne(d, (T) => {
      n("update:valid", T);
    });
    const el = Y(!0);
    ne(el, (T) => {
      T || Ke(() => {
        el.value = !0;
      });
    });
    const ft = async () => {
      C.value = [];
      const T = await Ln(), K = zn(), ce = [...T, ...K];
      let Le = ce.filter((pt) => pt.status === Te.Ko).length === 0;
      h.value = Le, a.type !== j.Range && (C.value = ce, d.value = Le, n("validation-status", ce));
    }, zn = () => {
      var pt, Nt, Rt, At, It, Mt, Dt, Vt, Ae, lt, nt, ot, st;
      let T = [], K = L.value;
      a.canI18n && (K = Pe[D]);
      let ce = xe.value, Le = Be.value;
      if (a.type === j.Number && typeof a.min < "u" && typeof a.max < "u" && (K < ce || K > Le))
        return T.push(Re.createNumBetween(ce, Le, Te.Ko)), d.value = !1, T;
      if (a.mandatory) {
        switch (a.type) {
          case j.Select:
            a.multiple && Z.value.length === 0 ? T.push(Re.createEmpty(Te.Ko)) : !a.multiple && !K && T.push(Re.createEmpty(Te.Ko));
            break;
          case j.Html:
            lo(Di(K)).length === 0 && T.push(Re.createEmpty(Te.Ko));
            break;
          default:
            ![j.Number].includes(a.type) && K === "" && T.push(Re.createEmpty(Te.Ko));
        }
        if (T.length > 0) return T;
      }
      return ce > 0 && (a.type !== j.Number && K.length < ce ? T.push(Re.createMinStr(ce, Te.Ko)) : K < ce && T.push(Re.createMinNum(ce, Te.Ko))), Le > 0 && (a.type !== j.Number && K.length > Le ? T.push(Re.createMaxStr(Le, Te.Ko)) : K > Le && T.push(Re.createMaxNum(Le, Te.Ko))), a.type === j.Email && (no(K) || T.push(Re.createEmail(Te.Ko))), po.includes(a.type) && (Vo(T, K, (pt = a.validation) == null ? void 0 : pt.minNumbers, (Nt = a.validation) == null ? void 0 : Nt.maxNumbers), Oo(T, K, (Rt = a.validation) == null ? void 0 : Rt.minUpperChars, (At = a.validation) == null ? void 0 : At.maxUpperChars), Ho(T, K, (It = a.validation) == null ? void 0 : It.minLowerChars, (Mt = a.validation) == null ? void 0 : Mt.maxLowerChars), Fo(T, K, (Dt = a.validation) == null ? void 0 : Dt.minChars, (Vt = a.validation) == null ? void 0 : Vt.maxChars), Uo(T, K, (Ae = a.validation) == null ? void 0 : Ae.minSpecialChars, (lt = a.validation) == null ? void 0 : lt.maxSpecialChars)), (nt = a.validation) != null && nt.checkEqualTo && K !== ((ot = a.validation) == null ? void 0 : ot.checkEqualTo) && T.push(Re.createEqualTo((st = a.validation) == null ? void 0 : st.checkEqualTo, Te.Ko)), T;
    }, Nn = J(() => {
      var T;
      return !(C.value.length === 0 || ((T = a.validation) == null ? void 0 : T.trigger) === mo.Blur && (!m.value || !y.value));
    }), Li = () => {
      var T;
      switch (De.value) {
        case ge.HtmlInput:
          w.value && w.value.setValue(O.value);
          return;
        case ge.DateInput:
          r.value = s.value;
          return;
        case ge.FileInput:
          r.value = s.value, S.value = _.value;
          return;
        case ge.SelectInput:
          L.value = a.multiple ? JSON.parse(JSON.stringify(O.value)) : O.value, (T = w.value) == null || T.doUndo();
          return;
        default:
          L.value = O.value;
      }
    }, tl = () => {
      var T;
      switch (De.value) {
        case ge.HtmlInput:
          w.value && w.value.setValue("");
          return;
        case ge.DateInput:
          r.value = "";
          return;
        case ge.FileInput:
          r.value = "", S.value = "";
          return;
        case ge.SelectInput:
          L.value = a.multiple ? [] : "", (T = w.value) == null || T.doClear();
          return;
        default:
          L.value = "";
      }
    }, Rn = () => L.value, jt = (T) => {
      n("keyup", T);
    }, An = () => {
      w.value && w.value.keepFocused();
    }, In = () => {
      if (E.value) {
        if (a.type === j.Select) {
          Ri();
          return;
        }
        return Ct();
      }
      if (a.type === j.Select) {
        Ni();
        return;
      }
      return _t();
    }, Gt = (T) => n("keydown", T), _t = (T) => {
      y.value = !0, v.value = !0, ft(), n("focus", T);
    }, Ct = (T) => {
      setTimeout(() => {
        if (!(a.searchable && W.value)) {
          if (a.multiple) {
            E.value = !0, v.value = !0;
            return;
          }
          m.value = !0, q.value = -1, E.value = !1, v.value = !1, ft(), n("blur", T);
        }
      }, 100);
    }, Bi = (T) => {
      y.value = !0, v.value = !0, n("focus", T);
    }, zi = (T) => {
      m.value = !0, v.value = !1, n("blur", T);
    }, Ni = () => {
      var T, K;
      if (y.value = !0, v.value = !0, !((K = (T = a.optionsConfig) == null ? void 0 : T.http) != null && K.resource) && U.value.length === 0) {
        E.value = !1;
        return;
      }
      E.value = !0, ft(), a.searchable && An(), n("focus");
    }, Ri = () => {
      m.value = !0, v.value = !1, n("blur");
    }, it = (T) => {
      n("change", T, L.value);
    }, ht = (T) => {
      n("click", T);
    }, Mn = (T) => n("click-info", T), Dn = (T) => n("click-error", T), il = () => {
      let T = a.step ?? 1;
      typeof T == "string" && (T = parseFloat(T));
      let K = String(T).split(".")[0].length, ce = parseFloat(L.value);
      isNaN(ce) && (ce = 0), (!xe.value || ce > xe.value) && (L.value = parseFloat((ce - T).toFixed(K)));
    }, Vn = () => {
      let T = a.step ?? 1;
      typeof T == "string" && (T = parseFloat(T));
      let K = String(T).split(".")[0].length, ce = parseFloat(L.value);
      isNaN(ce) && (ce = 0), (!Be.value || ce < Be.value) && (L.value = parseFloat((ce + T).toFixed(K)));
    }, On = () => {
      fe.value && Qi();
    }, Hn = (T) => {
      ul({
        text: rt.defaultUploadSuccessText,
        details: rt.defaultUploadSuccessDetails,
        icon: rt.defaultUploadSuccessIcon,
        positionX: sl.Right
      }), n("upload-success", T);
    }, Fn = (T) => {
      ul({
        text: rt.defaultUploadErrorText,
        details: rt.defaultUploadErrorDetails,
        icon: rt.defaultUploadErrorIcon,
        positionX: sl.Right
      }), n("upload-error", T);
    }, Un = () => {
      n("uploading");
    }, Pn = (T) => {
      n("picked-files", T);
    }, Wn = (T) => {
      if (!a.enableAutoNumberFix) return !1;
      let K = Number(T), ce = To(K, xe.value, Be.value);
      return K !== ce ? (L.value = ce, !0) : !1;
    };
    t({
      Identifier: u,
      reset: Li,
      focus: Qi,
      value: Rn,
      isMandatory: () => a.mandatory,
      isFormValid: () => h.value,
      isValid: () => d.value,
      click: () => {
        var T;
        switch (a.type) {
          case j.File:
            return (T = w.value) == null ? void 0 : T.click();
        }
        I.value.click();
      }
    });
    const $n = J(() => a.editSlot !== "" && typeof ee.customEditSlots[a.editSlot] < "u"), Zn = J(() => ee.customEditSlots[a.editSlot]);
    zt(() => {
      a.type === j.Select && a.multiple && (W.value = !0), ft(), B.value = !0;
    });
    const qn = J(() => at.includes(a.type) && !$.value ? "label" : "div"), jn = J(() => at.includes(a.type) ? {
      for: u
    } : {}), Gn = J(() => {
      switch (a.type) {
        case j.Select:
          return Z.value;
        case j.Date:
        case j.DateTime:
          return Ql(r.value, P.value);
        case j.File:
        case j.Image:
          return r.value;
        default:
          return a.canI18n ? Pe.value[D.value] : L.value;
      }
    }), Kn = J(() => typeof a.canRender == "function" ? a.canRender({
      prop: a.prop
    }) : typeof a.canRender == "boolean" ? a.canRender : !0), Yn = J(() => typeof a.canDisplay == "function" ? a.canDisplay({
      prop: a.prop
    }) : typeof a.canDisplay == "boolean" ? a.canDisplay : !0), De = J(() => {
      if (at.includes(a.type)) return ge.BooleanInput;
      switch (a.type) {
        case j.Color:
          return a.multiple ? ge.MultipleColorInput : ge.SingleColorInput;
        case j.Card:
          return a.multiple ? ge.MultipleCardInput : ge.SingleCardInput;
        case j.File:
        case j.Image:
          return ge.FileInput;
        case j.Date:
        case j.DateTime:
          return ge.DateInput;
        case j.Time:
          return ge.TimeInput;
        case j.Select:
          return ge.SelectInput;
        case j.Calc:
          return ge.CalcInput;
        case j.Search:
          return ge.SearchInput;
        case j.Html:
          return ge.HtmlInput;
        default:
          if (V.value === "input")
            return a.options || a.optionsConfig.http ? ge.SelectInput : ge.TextInput;
          if (V.value === "textarea")
            return ge.TextareaInput;
      }
    });
    return (T, K) => {
      var Le, pt, Nt, Rt, At, It, Mt, Dt, Vt;
      const ce = pe("lkt-button");
      return Kn.value ? Ve((F(), oe("div", {
        key: 0,
        class: Ye(["lkt-field", me.value]),
        "data-show-ui": X.value,
        "data-labeled": !H(l).label,
        ref_key: "container",
        ref: I
      }, [
        H(l).label ? Xe(T.$slots, "label", { key: 0 }) : le("", !0),
        !H(l).label && Ce.value !== "" && !H(at).includes(T.type) ? (F(), oe("label", {
          key: 1,
          for: H(u),
          class: "lkt-field--label",
          innerHTML: Ce.value
        }, null, 8, Qr)) : le("", !0),
        ve("div", eu, [
          G.value ? (F(), oe("div", tu, [
            T.featuredButton === "password" && Ze.value ? (F(), te(Oi, {
              key: 0,
              modelValue: p.value,
              "onUpdate:modelValue": K[0] || (K[0] = (Ae) => p.value = Ae),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : le("", !0),
            tt.value && H(k) === "i18n" && T.canI18n && I.value ? (F(), te(cl, {
              key: 1,
              translations: Pe.value,
              "is-featured": "",
              referrer: I.value,
              type: T.type
            }, null, 8, ["translations", "referrer", "type"])) : le("", !0),
            Fe.value && H(k) === "subtract" ? (F(), te(ce, he({ key: 2 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              disabled: H(L) === xe.value
            }, { onClick: il }), null, 16)) : le("", !0)
          ])) : le("", !0),
          Ie.value && (!fe.value || ![H(j).Time, H(j).Date, H(j).DateTime].includes(T.type)) ? (F(), oe("div", iu, [
            ve("i", {
              class: Ye(Ie.value)
            }, null, 2)
          ])) : le("", !0),
          fe.value ? (F(), te(vt(qn.value), he({ key: 2 }, jn.value, { class: "lkt-field-main" }), {
            default: _e(() => {
              var Ae, lt, nt, ot, st, wt, Ot, Ht;
              return [
                H(l).edit ? (F(), oe("div", {
                  key: 0,
                  onClick: ht
                }, [
                  Xe(T.$slots, "edit", {
                    value: r.value,
                    title: be.value,
                    data: T.slotData
                  })
                ])) : $n.value ? (F(), oe("div", {
                  key: 1,
                  onClick: ht
                }, [
                  (F(), te(vt(Zn.value), {
                    value: r.value,
                    title: be.value,
                    data: T.slotData
                  }, null, 8, ["value", "title", "data"]))
                ])) : De.value === H(ge).BooleanInput ? (F(), te(Go, {
                  key: 2,
                  modelValue: H(L),
                  "onUpdate:modelValue": K[1] || (K[1] = (re) => Ge(L) ? L.value = re : null),
                  ref_key: "inputElement",
                  ref: w,
                  id: H(u),
                  name: T.name,
                  type: T.type,
                  label: Ce.value,
                  editable: fe.value,
                  focusing: v.value,
                  disabled: $.value,
                  readonly: T.readonly,
                  onFocus: Bi,
                  onBlur: zi
                }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : De.value === H(ge).MultipleColorInput ? (F(), te(Do, {
                  key: 3,
                  modelValue: H(L),
                  "onUpdate:modelValue": K[2] || (K[2] = (re) => Ge(L) ? L.value = re : null),
                  ref_key: "inputElement",
                  ref: w,
                  "edit-mode": fe.value,
                  min: xe.value,
                  max: Be.value
                }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : De.value === H(ge).SingleColorInput ? (F(), te(en, {
                  key: 4,
                  modelValue: H(L),
                  "onUpdate:modelValue": K[3] || (K[3] = (re) => Ge(L) ? L.value = re : null),
                  onChange: it,
                  ref_key: "inputElement",
                  ref: w
                }, null, 8, ["modelValue"])) : De.value === H(ge).FileInput ? (F(), te(Vr, {
                  key: 5,
                  modelValue: r.value,
                  "onUpdate:modelValue": K[4] || (K[4] = (re) => r.value = re),
                  "file-name": S.value,
                  "onUpdate:fileName": K[5] || (K[5] = (re) => S.value = re),
                  ref_key: "inputElement",
                  ref: w,
                  id: H(u),
                  tabindex: T.tabindex,
                  resource: (Ae = T.fileUploadHttp) == null ? void 0 : Ae.resource,
                  "resource-data": (lt = T.fileUploadHttp) == null ? void 0 : lt.data,
                  name: T.name,
                  placeholder: ze.value,
                  accept: ke.value,
                  focusing: v.value,
                  disabled: $.value,
                  readonly: T.readonly,
                  "is-image": T.type === H(j).Image,
                  "file-browser-config": T.fileBrowserConfig,
                  onChange: it,
                  onUploading: Un,
                  onUploadSuccess: Hn,
                  onUploadError: Fn,
                  onPickedFiles: Pn
                }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image", "file-browser-config"])) : De.value === H(ge).DateInput ? (F(), te(Zr, {
                  key: 6,
                  modelValue: r.value,
                  "onUpdate:modelValue": K[6] || (K[6] = (re) => r.value = re),
                  id: H(u),
                  tabindex: T.tabindex,
                  lang: D.value,
                  name: T.name,
                  icon: Ie.value,
                  "is-date-time": H(j).DateTime === T.type
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name", "icon", "is-date-time"])) : De.value === H(ge).TimeInput ? (F(), te(Xr, {
                  key: 7,
                  modelValue: r.value,
                  "onUpdate:modelValue": K[7] || (K[7] = (re) => r.value = re),
                  id: H(u),
                  tabindex: T.tabindex,
                  lang: D.value,
                  name: T.name,
                  icon: Ie.value
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name", "icon"])) : De.value === H(ge).SelectInput ? (F(), te(Zl, he({
                  key: 8,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: H(L),
                  "onUpdate:modelValue": K[8] || (K[8] = (re) => Ge(L) ? L.value = re : null),
                  "show-options": E.value,
                  "onUpdate:showOptions": K[9] || (K[9] = (re) => E.value = re),
                  "picked-options": Z.value,
                  "onUpdate:pickedOptions": K[10] || (K[10] = (re) => Z.value = re)
                }, {
                  visibleOptions: U.value,
                  searchable: T.searchable,
                  searchMode: W.value,
                  searchString: A.value,
                  multiple: T.multiple,
                  canTag: T.canTag,
                  options: T.options,
                  optionsConfig: T.optionsConfig,
                  optionSlot: T.optionSlot,
                  editable: fe.value,
                  focusing: v.value,
                  searchPlaceholder: Se.value,
                  multipleDisplayEdition: T.multipleDisplayEdition,
                  prop: T.prop,
                  max: Be.value,
                  tooltip: T.tooltipConfig,
                  events: T.events,
                  optionValueType: T.optionValueType,
                  referrer: I.value,
                  isAutoCompleteText: T.type !== H(j).Select
                }, {
                  onFocus: Ni,
                  onBlur: Ri,
                  onChange: it
                }), null, 16, ["modelValue", "show-options", "picked-options"])) : De.value === H(ge).CalcInput ? (F(), te(br, {
                  key: 9,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: H(L),
                  "onUpdate:modelValue": K[11] || (K[11] = (re) => Ge(L) ? L.value = re : null),
                  id: H(u),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: fe.value,
                  focusing: v.value,
                  disabled: $.value,
                  readonly: T.readonly,
                  options: R.value,
                  onFocus: Bi,
                  onBlur: zi
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : De.value === H(ge).SearchInput ? (F(), te(kr, {
                  key: 10,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: H(L),
                  "onUpdate:modelValue": K[12] || (K[12] = (re) => Ge(L) ? L.value = re : null),
                  id: H(u),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: fe.value,
                  focusing: v.value,
                  "had-first-focus": y.value,
                  disabled: $.value,
                  readonly: T.readonly,
                  "options-resource": (ot = (nt = T.optionsConfig) == null ? void 0 : nt.http) == null ? void 0 : ot.resource,
                  container: I.value,
                  onFocus: Bi,
                  onBlur: zi
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : De.value === H(ge).MultipleCardInput ? (F(), te(jr, {
                  key: 11,
                  modelValue: H(L),
                  "onUpdate:modelValue": K[13] || (K[13] = (re) => Ge(L) ? L.value = re : null),
                  id: H(u),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: fe.value,
                  focusing: v.value,
                  "had-first-focus": y.value,
                  disabled: $.value,
                  readonly: T.readonly,
                  "options-resource": (wt = (st = T.optionsConfig) == null ? void 0 : st.http) == null ? void 0 : wt.resource,
                  modal: je.value,
                  "modal-key": H(g),
                  "modal-data": $e.value,
                  "item-type": H(x)
                }, Tt({ _: 2 }, [
                  H(l)["item-" + H(x)] ? {
                    name: "item",
                    fn: _e(({ item: re }) => [
                      Xe(T.$slots, "item-" + H(x), { item: re })
                    ]),
                    key: "0"
                  } : H(l).item ? {
                    name: "item",
                    fn: _e(({ item: re }) => [
                      Xe(T.$slots, "item", { item: re })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : De.value === H(ge).SingleCardInput ? (F(), te(En, {
                  key: 12,
                  modelValue: H(L),
                  "onUpdate:modelValue": K[14] || (K[14] = (re) => Ge(L) ? L.value = re : null),
                  id: H(u),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: fe.value,
                  focusing: v.value,
                  "had-first-focus": y.value,
                  disabled: $.value,
                  readonly: T.readonly,
                  "options-resource": (Ht = (Ot = T.optionsConfig) == null ? void 0 : Ot.http) == null ? void 0 : Ht.resource,
                  modal: je.value,
                  "modal-key": H(g),
                  "modal-data": $e.value,
                  "item-type": H(x)
                }, Tt({ _: 2 }, [
                  H(l)["item-" + H(x)] ? {
                    name: "item",
                    fn: _e(({ item: re }) => [
                      Xe(T.$slots, "item-" + H(x), { item: re })
                    ]),
                    key: "0"
                  } : H(l).item ? {
                    name: "item",
                    fn: _e(({ item: re }) => [
                      Xe(T.$slots, "item", { item: re })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : T.canI18n && De.value === H(ge).TextInput ? Ve((F(), oe("input", {
                  key: 13,
                  "onUpdate:modelValue": K[15] || (K[15] = (re) => Pe.value[D.value] = re),
                  ref: (re) => w.value = re,
                  value: Pe.value[D.value],
                  type: ue.value,
                  name: T.name,
                  id: H(u),
                  disabled: $.value,
                  readonly: T.readonly,
                  placeholder: ze.value,
                  tabindex: T.tabindex,
                  autocomplete: Q.value,
                  min: xe.value,
                  max: Be.value,
                  step: T.step,
                  onKeyup: jt,
                  onKeydown: Gt,
                  onFocus: _t,
                  onBlur: Ct,
                  onClick: ht,
                  onChange: it
                }, null, 40, lu)), [
                  [nl, Pe.value[D.value]]
                ]) : De.value === H(ge).TextInput ? Ve((F(), oe("input", {
                  key: 14,
                  "onUpdate:modelValue": K[16] || (K[16] = (re) => Ge(L) ? L.value = re : null),
                  ref: (re) => w.value = re,
                  value: H(L),
                  type: ue.value,
                  name: T.name,
                  id: H(u),
                  disabled: $.value,
                  readonly: T.readonly,
                  placeholder: ze.value,
                  tabindex: T.tabindex,
                  autocomplete: Q.value,
                  min: xe.value,
                  max: Be.value,
                  step: T.step,
                  onKeyup: jt,
                  onKeydown: Gt,
                  onFocus: _t,
                  onBlur: Ct,
                  onClick: ht,
                  onChange: it
                }, null, 40, nu)), [
                  [nl, H(L)]
                ]) : T.canI18n && De.value === H(ge).TextareaInput ? Ve((F(), oe("textarea", {
                  key: 15,
                  "onUpdate:modelValue": K[17] || (K[17] = (re) => Pe.value[D.value] = re),
                  ref: (re) => w.value = re,
                  name: T.name,
                  id: H(u),
                  disabled: $.value,
                  readonly: T.readonly,
                  placeholder: ze.value,
                  tabindex: T.tabindex,
                  autocomplete: Q.value,
                  onKeyup: jt,
                  onKeydown: Gt,
                  onFocus: _t,
                  onBlur: Ct,
                  onClick: ht,
                  onChange: it
                }, null, 40, ou)), [
                  [Et, Pe.value[D.value]]
                ]) : De.value === H(ge).TextareaInput ? Ve((F(), oe("textarea", {
                  key: 16,
                  "onUpdate:modelValue": K[18] || (K[18] = (re) => Ge(L) ? L.value = re : null),
                  ref: (re) => w.value = re,
                  name: T.name,
                  id: H(u),
                  disabled: $.value,
                  readonly: T.readonly,
                  placeholder: ze.value,
                  tabindex: T.tabindex,
                  autocomplete: Q.value,
                  onKeyup: jt,
                  onKeydown: Gt,
                  onFocus: _t,
                  onBlur: Ct,
                  onClick: ht,
                  onChange: it
                }, null, 40, su)), [
                  [Et, H(L)]
                ]) : De.value === H(ge).HtmlInput ? (F(), te(Xa, {
                  key: 17,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: H(L),
                  "onUpdate:modelValue": K[19] || (K[19] = (re) => Ge(L) ? L.value = re : null),
                  id: H(u),
                  tabindex: T.tabindex,
                  name: T.name,
                  lang: D.value,
                  editable: fe.value,
                  focusing: v.value,
                  disabled: $.value,
                  readonly: T.readonly,
                  onFocus: _t,
                  onBlur: Ct
                }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : le("", !0)
              ];
            }),
            _: 3
          }, 16)) : le("", !0),
          fe.value ? le("", !0) : (F(), te(Ar, {
            key: 3,
            value: Gn.value,
            type: T.type,
            label: Ce.value,
            title: be.value,
            "file-name": S.value,
            "value-slot": T.valueSlot,
            "empty-value-slot": T.emptyValueSlot,
            "slot-data": T.slotData,
            download: H(b),
            anchor: (Le = T.optionsConfig) == null ? void 0 : Le.anchor,
            multiple: T.multiple,
            multipleDisplay: T.multipleDisplay,
            modal: je.value,
            "modal-key": H(g),
            "modal-data": $e.value,
            "options-config": T.optionsConfig,
            "option-slot": T.optionSlot,
            "options-download": (pt = T.optionsConfig) == null ? void 0 : pt.download,
            "options-modal": (Nt = T.optionsConfig) == null ? void 0 : Nt.modal,
            "options-modal-data": (Rt = T.optionsConfig) == null ? void 0 : Rt.modalData,
            "options-icon": (At = T.optionsConfig) == null ? void 0 : At.icon,
            "options-text": (It = T.optionsConfig) == null ? void 0 : It.text,
            "options-class": (Mt = T.optionsConfig) == null ? void 0 : Mt.class,
            "options-label-formatter": (Dt = T.optionsConfig) == null ? void 0 : Dt.labelFormatter,
            "read-mode-config": T.readModeConfig,
            prop: T.prop,
            onClick: ht
          }, Tt({ _: 2 }, [
            H(l).value ? {
              name: "value",
              fn: _e(() => [
                Xe(T.$slots, r.value, {
                  value: r.value,
                  title: be.value,
                  data: T.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "anchor", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "options-config", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-text", "options-class", "options-label-formatter", "read-mode-config", "prop"])),
          X.value ? (F(), oe("div", au, [
            Ve(ae(Yl, { onClick: Li }, null, 512), [
              [Qe, bt.value]
            ]),
            Ve(ae(Xl, { onClick: tl }, null, 512), [
              [Qe, ji.value]
            ]),
            T.type === H(j).Number ? Ve((F(), te(ce, he({ key: 0 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              disabled: H(L) === xe.value
            }, { onClick: il }), null, 16)), [
              [Qe, Ne.value]
            ]) : le("", !0),
            T.type === H(j).Number ? Ve((F(), te(ce, he({ key: 1 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-more",
              disabled: H(L) === Be.value
            }, { onClick: Vn }), null, 16)), [
              [Qe, He.value]
            ]) : le("", !0),
            qt.value ? (F(), te(ce, {
              key: 2,
              title: T.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-attention",
              onClick: Dn
            }, null, 8, ["title"])) : le("", !0),
            Je.value ? (F(), te(ce, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-info",
              onClick: Mn,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: _e(() => [
                Si(ut(T.infoMessage), 1)
              ]),
              _: 1
            })) : le("", !0),
            fe.value && Ji.value ? (F(), te(Gr, {
              key: 4,
              config: T.fileUploadButton,
              "file-upload-http": T.fileUploadHttp
            }, null, 8, ["config", "file-upload-http"])) : le("", !0),
            T.type === H(j).Password ? Ve((F(), te(Oi, {
              key: 5,
              modelValue: p.value,
              "onUpdate:modelValue": K[20] || (K[20] = (Ae) => p.value = Ae)
            }, null, 8, ["modelValue"])), [
              [Qe, Gi.value]
            ]) : le("", !0),
            Ki.value && I.value ? (F(), te(cl, {
              key: 6,
              translations: Pe.value,
              type: T.type,
              referrer: I.value
            }, null, 8, ["translations", "type", "referrer"])) : le("", !0),
            fe.value && Xi.value ? (F(), te(Jl, {
              key: 7,
              modelValue: fe.value,
              "onUpdate:modelValue": K[21] || (K[21] = (Ae) => fe.value = Ae),
              onClick: On
            }, null, 8, ["modelValue"])) : le("", !0),
            T.customButtonText || T.customButtonClass ? (F(), te(ce, {
              key: 8,
              text: T.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: T.customButtonClass
            }, null, 8, ["text", "icon"])) : le("", !0),
            typeof T.createButton == "object" && T.createButton && fe.value ? (F(), te(ce, he({ key: 9 }, {
              icon: "lkt-icn-add",
              ...T.createButton,
              modalData: {
                ...T.createButton.modalData,
                events: {
                  onCreate: () => {
                    var Ae, lt, nt, ot, st, wt, Ot, Ht;
                    T.createButton && typeof ((nt = (lt = (Ae = T.createButton) == null ? void 0 : Ae.modalData) == null ? void 0 : lt.events) == null ? void 0 : nt.onCreate) == "function" && ((wt = (st = (ot = T.createButton) == null ? void 0 : ot.modalData) == null ? void 0 : st.events) == null || wt.onCreate()), typeof ((Ot = T.events) == null ? void 0 : Ot.itemCreated) == "function" && ((Ht = T.events) == null || Ht.itemCreated());
                  }
                }
              }
            }, { class: "lkt-field--info-btn" }), null, 16)) : le("", !0),
            fe.value ? Ve((F(), te(Eo, {
              key: 10,
              onClick: In
            }, null, 512)), [
              [Qe, Yi.value]
            ]) : le("", !0),
            T.infoButtonEllipsis ? (F(), te(xo, {
              key: 11,
              "show-undo": Me.value,
              "show-clear": dt.value,
              "show-password": Ze.value,
              "show-edition": T.allowReadModeSwitch,
              "show-password-check": p.value,
              "onUpdate:showPasswordCheck": K[22] || (K[22] = (Ae) => p.value = Ae),
              "show-edition-check": fe.value,
              "onUpdate:showEditionCheck": K[23] || (K[23] = (Ae) => fe.value = Ae),
              onUndo: Li,
              onClear: tl
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : le("", !0)
          ])) : le("", !0)
        ]),
        fe.value && Nn.value ? (F(), te(Cr, {
          key: 2,
          items: C.value,
          stack: (Vt = T.validation) == null ? void 0 : Vt.stack
        }, null, 8, ["items", "stack"])) : le("", !0),
        B.value && T.type === H(j).Select && !f.value ? (F(), te(Zl, he({
          key: 3,
          ref_key: "inputElement",
          ref: w,
          "picked-options": Z.value,
          "onUpdate:pickedOptions": K[24] || (K[24] = (Ae) => Z.value = Ae)
        }, {
          modelValue: H(L),
          showOptions: E.value,
          visibleOptions: U.value,
          searchable: T.searchable,
          searchMode: W.value,
          searchString: A.value,
          multiple: T.multiple,
          canTag: T.canTag,
          options: T.options,
          optionsConfig: T.optionsConfig,
          optionSlot: T.optionSlot,
          editable: fe.value,
          focusing: v.value,
          searchPlaceholder: Se.value,
          multipleDisplayEdition: T.multipleDisplayEdition,
          prop: T.prop,
          max: Be.value,
          tooltip: T.tooltipConfig,
          events: T.events,
          optionValueType: T.optionValueType,
          referrer: I.value,
          autoLoading: !0
        }, {
          onFocus: Ni,
          onBlur: Ri,
          onChange: it,
          onLoaded: K[25] || (K[25] = (Ae) => f.value = !0)
        }), null, 16, ["picked-options"])) : le("", !0)
      ], 10, Jr)), [
        [Qe, Yn.value]
      ]) : le("", !0);
    };
  }
}), ru = { class: "lkt-file-entity-main" }, uu = /* @__PURE__ */ we({
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
    const f = () => {
      ++a.value, a.value === 1 ? u = setTimeout(() => {
        l.value.isPicked = !l.value.isPicked, a.value = 0;
      }, 225) : (clearTimeout(u), n("double-click", l.value), a.value = 0);
    }, o = J(() => l.value.isPicked ? "lkt-icn-checkbox" : "lkt-icn-checkbox-empty");
    return (g, c) => {
      const b = pe("lkt-icon"), x = pe("lkt-image");
      return F(), oe("div", {
        class: "lkt-file-entity-box",
        onClick: f
      }, [
        ve("div", ru, [
          l.value.type !== H(qe).Directory ? (F(), oe("i", {
            key: 0,
            class: Ye(["lkt-file-entity-picked-indicator", o.value])
          }, null, 2)) : le("", !0),
          l.value.type === H(qe).Directory ? (F(), te(b, Oe(he({ key: 1 }, {
            icon: "lkt-icn-folder",
            text: l.value.name
          })), null, 16)) : l.value.type === H(qe).Image ? (F(), te(x, Oe(he({ key: 2 }, {
            src: l.value.src,
            text: l.value.name
          })), null, 16)) : le("", !0)
        ])
      ]);
    };
  }
}), cu = { class: "lkt-file-entity-details" }, du = {
  key: 0,
  class: "lkt-grid-1"
}, fu = /* @__PURE__ */ we({
  __name: "FileEntityDetails",
  props: {
    editMode: { type: Boolean, default: !1 },
    modelValue: {},
    fileBrowserConfig: {}
  },
  setup(e) {
    const i = Y(e.modelValue);
    return (n, l) => {
      const a = pe("lkt-field");
      return F(), oe("div", cu, [
        i.value.type === H(qe).Image ? (F(), oe("div", du, [
          ae(a, he({
            modelValue: i.value.src,
            "onUpdate:modelValue": l[0] || (l[0] = (u) => i.value.src = u)
          }, {
            type: H(j).Image,
            label: "File",
            readMode: !n.editMode
          }), null, 16, ["modelValue"]),
          ae(a, he({
            modelValue: i.value.name,
            "onUpdate:modelValue": l[1] || (l[1] = (u) => i.value.name = u)
          }, {
            type: H(j).Text,
            label: "Name",
            readMode: !n.editMode
          }), null, 16, ["modelValue"])
        ])) : le("", !0)
      ]);
    };
  }
}), hu = { class: "lkt-flex-row" }, pu = { class: "lkt-flex-col-3" }, mu = { class: "lkt-flex-column" }, gu = { class: "lkt-flex-col-9" }, vu = /* @__PURE__ */ we({
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
    const i = e, n = Y(!1), l = Y([]), a = Y({}), u = Y(void 0), f = Y(i.modelValue), o = (d) => {
      u.value = void 0, Ke(() => {
        u.value = d;
      });
    }, g = () => {
      var h, p, v;
      let d = new rl();
      d.parent = (h = u.value) == null ? void 0 : h.id, (v = (p = u.value) == null ? void 0 : p.children) == null || v.push(d), o(d);
    }, c = (d, h) => {
      for (let p in h) {
        if (h[p].id === d) return h[p];
        if (h[p].children.length > 0) {
          let v = c(d, h[p].children);
          if (v) return v;
        }
      }
    }, b = () => {
      var d, h;
      if ((d = u.value) != null && d.parent) {
        let p = c((h = u.value) == null ? void 0 : h.parent, l.value);
        p && o(p);
      }
    }, x = () => {
      let d = [];
      f.value.forEach((h) => {
        let p = c(h, l.value);
        p && d.push(p);
      }), typeof i.onConfirmSelection == "function" && i.onConfirmSelection(d), wo(i.modalName, i.modalKey);
    }, w = J(() => {
      var d;
      switch ((d = u.value) == null ? void 0 : d.type) {
        case qe.Image:
          return "lkt-icn-picture";
        case qe.Directory:
          return "lkt-icn-folder-open";
        default:
          return "";
      }
    }), k = (d) => {
      switch (d.type) {
        case qe.Image:
          return "lkt-icn-picture";
        case qe.Directory:
          return "lkt-icn-folder";
        default:
          return "";
      }
    }, z = (d) => {
      let h = k(d), p = {};
      return h !== "" && (p = {
        icon: h,
        position: _o.Start
      }), {
        key: String(d.id),
        type: Co.Anchor,
        anchor: {
          icon: p,
          text: d.name,
          type: Kl.Action,
          events: {
            click: () => {
              o(d);
            }
          }
        },
        keepOpenOnChildClick: !0,
        // class?: string;
        // icon?: string;
        children: d.children ? d.children.map(z) : []
      };
    }, s = (d) => {
      d.forEach((h) => {
        var p;
        h.isPicked && f.value.push(h.id), ((p = h.children) == null ? void 0 : p.length) > 0 && s(h.children);
      });
    }, r = () => {
      var d, h;
      (h = (d = i.fileBrowserConfig) == null ? void 0 : d.http) != null && h.resource && (n.value = !0, Wi(i.fileBrowserConfig.http.resource, i.fileBrowserConfig.http.data).then((p) => {
        n.value = !1, l.value = p.data.map((v) => new rl(v)), l.value.length > 0 && o(l.value[0]), l.value.forEach((v, m) => {
          var C;
          let y = `unit-${m}`;
          a.value[y] = ((C = v.children) == null ? void 0 : C.map(z)) ?? [];
        });
      }).catch((p) => {
        n.value = !1;
      }));
    };
    return ne(u, (d) => {
    }, { deep: !0 }), ne(l, (d) => {
      f.value = [], s(l.value);
    }, { deep: !0 }), zt(() => {
      r();
    }), (d, h) => {
      const p = pe("lkt-menu"), v = pe("lkt-accordion"), m = pe("lkt-button"), y = pe("lkt-table"), C = pe("lkt-item-crud"), _ = pe("lkt-modal");
      return F(), te(_, {
        "modal-name": d.modalName,
        "modal-key": d.modalKey,
        "z-index": d.zIndex,
        title: "File Browser",
        class: "lkt-file-browser"
      }, {
        default: _e(() => [
          ve("div", hu, [
            ve("div", pu, [
              (F(!0), oe(Ue, null, ct(l.value, (S, I) => (F(), te(v, he({ ref_for: !0 }, {
                modelValue: I === 0,
                title: S.name,
                toggleMode: H(bo).Display,
                type: l.value.length === 1 ? H(Ai).Always : H(Ai).Auto
              }), {
                default: _e(() => [
                  ve("div", mu, [
                    ae(p, he({ ref_for: !0 }, {
                      modelValue: a.value[`unit-${I}`]
                    }), null, 16)
                  ])
                ]),
                _: 2
              }, 1040))), 256))
            ]),
            ve("div", gu, [
              u.value ? (F(), te(v, Oe(he({ key: 0 }, {
                type: H(Ai).Always,
                icon: w.value,
                title: u.value.name
              })), {
                default: _e(() => {
                  var S, I;
                  return [
                    [H(qe).Directory, H(qe).StorageUnit].includes(u.value.type) ? (F(), te(y, he({
                      key: 0,
                      modelValue: u.value.children,
                      "onUpdate:modelValue": h[0] || (h[0] = (E) => u.value.children = E)
                    }, {
                      type: H(Ti).Item,
                      perms: [
                        H(Kt).SwitchEditMode,
                        H(Kt).Update,
                        H(Kt).Edit,
                        H(Kt).Create
                      ],
                      itemsContainerClass: "lkt-flex-rows-12 lkt-flex-rows-2--from-768",
                      saveButton: {
                        text: "Save",
                        type: H(et).Button
                      },
                      createButton: {
                        text: "Create",
                        type: H(et).Button
                      }
                    }, { onClickCreate: g }), Tt({
                      item: _e(({ item: E, index: B }) => [
                        ae(uu, {
                          modelValue: u.value.children[B],
                          "onUpdate:modelValue": (A) => u.value.children[B] = A,
                          onDoubleClick: o
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, [
                      u.value.type !== H(qe).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: _e(() => [
                          ae(m, Oe(mt({
                            icon: "lkt-icn-arrow-left",
                            events: {
                              click: b
                            }
                          })), null, 16),
                          ae(m, Oe(mt({
                            icon: "lkt-icn-check",
                            disabled: f.value.length === 0,
                            events: {
                              click: x
                            }
                          })), null, 16)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : (F(), te(C, he({
                      key: 1,
                      modelValue: u.value,
                      "onUpdate:modelValue": h[2] || (h[2] = (E) => u.value = E)
                    }, {
                      view: H(yo).Inline,
                      mode: u.value.id ? H(al).Update : H(al).Create,
                      editing: !1,
                      perms: ["switch-edit-mode", "update"],
                      createButton: {
                        ...(S = d.fileBrowserConfig) == null ? void 0 : S.entityCreateButton,
                        resourceData: u.value,
                        events: {
                          click: () => {
                            for (let E in u.value)
                              d.modelValue[E] = d.entity[E];
                          }
                        }
                      },
                      updateButton: {
                        ...(I = d.fileBrowserConfig) == null ? void 0 : I.entityUpdateButton,
                        resourceData: u.value,
                        events: {
                          click: () => {
                            for (let E in u.value)
                              d.modelValue[E] = d.entity[E];
                          }
                        }
                      }
                    }), Tt({
                      item: _e(({ item: E, editMode: B }) => [
                        ae(fu, {
                          modelValue: u.value,
                          "onUpdate:modelValue": h[1] || (h[1] = (A) => u.value = A),
                          "file-browser-config": d.fileBrowserConfig,
                          "edit-mode": B
                        }, null, 8, ["modelValue", "file-browser-config", "edit-mode"])
                      ]),
                      _: 2
                    }, [
                      u.value.type !== H(qe).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: _e(() => [
                          ae(m, Oe(mt({
                            icon: "lkt-icn-arrow-left",
                            events: {
                              click: b
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
}), Eu = (e, t) => (ee.customValueSlots[e] = t, !0), Lu = (e, t) => (ee.customEditSlots[e] = t, !0), Bu = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", Bt), ko("lkt-file-browser", vu));
  }
}, zu = (e) => {
  ee.defaultEmptyValueSlot = e;
}, Nu = (e, t) => {
  ee.optionSlots[e] = t;
}, Ru = (e) => ee.undoText = e, Au = (e) => ee.clearText = e, Iu = (e) => ee.i18nText = e, Mu = (e) => ee.switchEditionOnText = e, Du = (e) => ee.switchEditionOffText = e, Vu = (e) => ee.showPasswordOnText = e, Ou = (e) => ee.showPasswordOffText = e, Hu = (e) => ee.dateReadFormat = e, Fu = (e) => ee.defaultDateReadFormat = e, Uu = (e, t, i = "default") => {
  i || (i = "default"), ee.validationMessages[i] || (ee.validationMessages[i] = {}), ee.validationMessages[i][e] = t;
}, Pu = (e) => (ee.validationIconSlot = e, !0), Wu = (e) => (ee.validationIconOk = e, !0), $u = (e) => (ee.validationIconKo = e, !0), Zu = (e) => (ee.validationIconInfo = e, !0), qu = (e = 2, t = ".", i = ".", n = !0, l = "") => l !== "" ? (ee.langNumberFormat[l].amountOfDecimals = e, ee.langNumberFormat[l].decimalSeparator = t, ee.langNumberFormat[l].thousandsSeparator = i, ee.langNumberFormat[l].removeDecimalsIfZero = n, !0) : (ee.amountOfDecimals = e, ee.decimalSeparator = t, ee.thousandsSeparator = i, ee.removeDecimalsIfZero = n, !0), ju = (e) => {
  ee.readTextMaxLength = e;
}, Gu = (e, t) => {
  ee.modalPerItemType[e] = t;
};
export {
  Xu as Field,
  Bt as LktField,
  Ju as Option,
  Bu as default,
  Au as setFieldClearText,
  Hu as setFieldDateReadFormat,
  Fu as setFieldDefaultDateReadFormat,
  zu as setFieldEmptySlot,
  Iu as setFieldI18nText,
  qu as setFieldNumberFormat,
  Nu as setFieldOptionSlot,
  Ou as setFieldShowPasswordOffText,
  Vu as setFieldShowPasswordOnText,
  Du as setFieldSwitchEditionOffText,
  Mu as setFieldSwitchEditionOnText,
  Ru as setFieldUndoText,
  Zu as setFieldValidationIconInfo,
  $u as setFieldValidationIconKo,
  Wu as setFieldValidationIconOk,
  Pu as setFieldValidationIconSlot,
  Uu as setFieldValidationMessage,
  Gu as setModalPerItemType,
  ju as setReadTextMaxLength,
  Lu as setTextEditSlot,
  Eu as setTextValueSlot
};
