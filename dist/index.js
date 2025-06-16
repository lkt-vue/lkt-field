import { defineComponent as ke, computed as X, resolveComponent as me, createBlock as J, openBlock as W, mergeProps as pe, normalizeClass as Ke, ref as Q, watch as se, withCtx as Ce, createCommentVNode as oe, unref as H, createElementVNode as be, createVNode as de, createElementBlock as ae, Fragment as Oe, renderList as at, toDisplayString as ot, normalizeStyle as el, withDirectives as Me, vModelCheckbox as Kn, onMounted as Et, resolveDynamicComponent as pt, withModifiers as Yn, markRaw as zi, nextTick as Ge, vModelText as xt, normalizeProps as Ve, vShow as Qe, createTextVNode as Ni, useSlots as $i, renderSlot as Xe, guardReactiveProps as ht, createStaticVNode as Xn, createSlots as kt, mergeDefaults as Jn, isRef as je, vModelDynamic as tl } from "vue";
import { stripTags as Fi, fill as Qn, lpad as _t, generateRandomString as eo, formatNumber as il, trim as to, isEmail as io } from "lkt-string-tools";
import { httpCall as Zi } from "lkt-http-client";
import { getCurrentLanguage as lo, getAvailableLanguages as no, __ as $l, currentLanguage as oo } from "lkt-i18n";
import { TooltipLocationY as Lt, TooltipLocationX as Bt, ButtonType as et, FieldType as K, LktColor as Zl, FieldValidation as Le, ValidationStatus as Se, extractPropValue as We, LktSettings as nt, AnchorType as ql, TagType as so, TableType as Kt, MultipleOptionsDisplay as Ct, booleanFieldTypes as lt, fieldsWithMultipleMode as ao, FieldValidationType as ro, extractI18nValue as qt, fieldTypesWithoutUndo as uo, fieldTypesWithoutClear as co, textFieldTypes as fo, FieldAutoValidationTrigger as ho, getDefaultValues as po, Field as mo, ToastPositionX as ll, FileEntityType as $e, AccordionType as Hi, AccordionToggleMode as go, TablePermission as ei, ItemCrudMode as nl, ItemCrudView as vo, FileEntity as ol, IconPosition as bo, MenuEntryType as yo } from "lkt-vue-kernel";
import { Field as qu, Option as ju } from "lkt-vue-kernel";
import { date as Gt } from "lkt-date-tools";
import { DataState as jt } from "lkt-data-state";
import { openToast as sl } from "lkt-toast";
import { closeModal as _o, addModal as Co } from "lkt-modal";
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
const jl = /* @__PURE__ */ ke({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, l = e, n = X(() => ee.undoText), a = X(() => l.insideEllipsis ? "lkt-field--btn-undo lkt-field--info-split-btn" : "lkt-field--btn-undo lkt-field--info-btn"), u = () => i("click");
    return (f, o) => {
      const g = me("lkt-button");
      return W(), J(g, pe({
        text: f.insideEllipsis ? n.value : "",
        icon: "lkt-icn-undo",
        class: a.value
      }, {
        title: n.value,
        onClick: u
      }), null, 16, ["title"]);
    };
  }
}), Gl = /* @__PURE__ */ ke({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, l = e, n = X(() => ee.clearText), a = X(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), u = () => i("click");
    return (f, o) => {
      const g = me("lkt-button");
      return W(), J(g, {
        text: f.insideEllipsis ? n.value : "",
        title: n.value,
        class: Ke(a.value),
        icon: "lkt-icn-cancel",
        onClick: u
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Ui = /* @__PURE__ */ ke({
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
    const i = t, l = e, n = Q(l.modelValue);
    se(() => l.modelValue, (g) => n.value = g), se(n, (g) => i("update:modelValue", g));
    const a = X(() => n.value ? ee.showPasswordOnText : ee.showPasswordOffText), u = X(() => n.value === !0 ? "lkt-icn-see" : "lkt-icn-not-see"), f = X(() => l.isFeatured ? "lkt-field--atn-btn" : l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (g, d) => {
      const b = me("lkt-button");
      return W(), J(b, {
        text: g.insideEllipsis ? a.value : "",
        title: a.value,
        class: Ke(f.value),
        icon: u.value,
        onClick: o,
        checked: n.value,
        "onUpdate:checked": d[0] || (d[0] = (x) => n.value = x),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Kl = /* @__PURE__ */ ke({
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
    const i = t, l = e, n = Q(l.modelValue);
    se(() => l.modelValue, (g) => n.value = g), se(n, (g) => i("update:modelValue", g));
    const a = X(() => n.value ? ee.switchEditionOnText : ee.switchEditionOffText), u = X(() => n.value === !0 ? "lkt-icon-see" : "lkt-icn-edit"), f = X(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (g, d) => {
      const b = me("lkt-button");
      return W(), J(b, {
        text: g.insideEllipsis ? a.value : "",
        title: a.value,
        class: Ke(f.value),
        icon: u.value,
        onClick: o,
        checked: n.value,
        "onUpdate:checked": d[0] || (d[0] = (x) => n.value = x),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), wo = /* @__PURE__ */ ke({
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
    const i = t, l = e, n = Q(l.showPasswordCheck);
    se(() => l.showPasswordCheck, (u) => n.value = u), se(n, (u) => i("update:showPasswordCheck", u));
    const a = Q(l.showEditionCheck);
    return se(() => l.showEditionCheck, (u) => a.value = u), se(a, (u) => i("update:showEditionCheck", u)), (u, f) => {
      const o = me("lkt-button");
      return W(), J(o, {
        split: "",
        "split-icon": "lkt-icn-ellipsis-menu-vertical",
        class: "lkt-field--info-btn"
      }, {
        split: Ce(({ doClose: g }) => [
          u.showUndo ? (W(), J(jl, {
            key: 0,
            onClick: f[0] || (f[0] = () => i("undo")),
            "inside-ellipsis": ""
          })) : oe("", !0),
          u.showClear ? (W(), J(Gl, {
            key: 1,
            onClick: f[1] || (f[1] = () => i("clear")),
            "inside-ellipsis": ""
          })) : oe("", !0),
          u.showPassword ? (W(), J(Ui, {
            key: 2,
            modelValue: n.value,
            "onUpdate:modelValue": f[2] || (f[2] = (d) => n.value = d),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : oe("", !0),
          u.showEdition ? (W(), J(Kl, {
            key: 3,
            modelValue: a.value,
            "onUpdate:modelValue": f[3] || (f[3] = (d) => a.value = d),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : oe("", !0)
        ]),
        _: 1
      });
    };
  }
}), ko = { class: "lkt-grid-1" }, al = /* @__PURE__ */ ke({
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
    const i = e, l = lo(), n = no(), a = X(() => ee.i18nText), u = X(() => i.isFeatured ? "lkt-field--atn-btn" : i.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (f, o) => {
      const g = me("lkt-button");
      return H(n).length > 1 ? (W(), J(g, pe({ key: 0 }, {
        type: H(et).Tooltip,
        text: f.insideEllipsis ? a.value : "",
        class: u.value,
        icon: "lkt-icn-lang-picker",
        tooltip: {
          class: "lkt-field-i18n-tooltip",
          referrerWidth: !0,
          referrer: f.referrer,
          referrerMargin: 0,
          locationX: H(Bt).LeftCorner,
          locationY: H(Lt).Bottom
        }
      }, { title: a.value }), {
        tooltip: Ce(() => [
          be("div", ko, [
            de(Tt, pe({
              modelValue: f.translations[H(l)],
              "onUpdate:modelValue": o[0] || (o[0] = (d) => f.translations[H(l)] = d)
            }, {
              type: f.type,
              label: `Current lang ${H(l)}`,
              canClear: !0,
              canUndo: !0
            }), null, 16, ["modelValue"]),
            (W(!0), ae(Oe, null, at(H(n), (d) => (W(), ae(Oe, { key: d }, [
              d !== H(l) ? (W(), J(Tt, pe({
                key: 0,
                modelValue: f.translations[d],
                "onUpdate:modelValue": (b) => f.translations[d] = b
              }, { ref_for: !0 }, {
                type: f.type,
                label: `Language ${d}`,
                canClear: !0,
                canUndo: !0
              }), null, 16, ["modelValue", "onUpdate:modelValue"])) : oe("", !0)
            ], 64))), 128))
          ])
        ]),
        _: 1
      }, 16, ["title"])) : oe("", !0);
    };
  }
}), xo = (e, t, i) => (e = Number(e), t !== !1 && e < t && (e = t), i !== !1 && e > i && (e = i), e), qi = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), Yl = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), qi(e) ? Gt(t, e) : ""), So = /* @__PURE__ */ ke({
  __name: "DropdownButton",
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, l = X(() => ee.undoText), n = X(() => "lkt-field--info-btn"), a = () => i("click");
    return (u, f) => {
      const o = me("lkt-button");
      return W(), J(o, {
        text: l.value,
        title: l.value,
        class: Ke([n.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-icn-angle-bottom",
        onClick: a,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), To = { class: "lkt-field-color--tooltip--rgba-container" }, Eo = { class: "lkt-field-color--tooltip--numeric-input-container" }, Lo = { class: "like-lkt-field-label" }, ti = /* @__PURE__ */ ke({
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
    const i = t, l = e, n = Q(l.modelValue);
    return se(() => l.modelValue, (a) => n.value = a), se(n, (a) => i("update:modelValue", a)), (a, u) => (W(), ae("div", To, [
      be("div", Eo, [
        be("label", Lo, ot(a.label), 1),
        de(Tt, pe({
          modelValue: n.value,
          "onUpdate:modelValue": u[0] || (u[0] = (f) => n.value = f)
        }, {
          type: H(K).Number,
          min: 0,
          max: 255,
          step: 1,
          canStep: !1
        }), null, 16, ["modelValue"])
      ]),
      de(Tt, pe({
        class: ["color-range", a.rangeClass],
        modelValue: n.value,
        "onUpdate:modelValue": u[1] || (u[1] = (f) => n.value = f)
      }, {
        type: H(K).Range,
        min: 0,
        max: 255,
        step: 1
      }), null, 16, ["class", "modelValue"])
    ]));
  }
}), Bo = (e, t, i, l) => new Zl({ r: e, g: t, b: i, a: l }).toString(), rl = (e) => Zl.fromHexColor(e), zo = (e) => e.getContrastFontColor(), No = { class: "lkt-grid-1" }, Ro = { class: "lkt-field-color--tooltip--rgba-container" }, Ao = { class: "lkt-field-color--tooltip--hex-input-container" }, Xl = /* @__PURE__ */ ke({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, { emit: t }) {
    const i = t, l = e, n = (L) => {
      if ([0, 1].includes(L.length))
        f.value = 0, o.value = 0, g.value = 0, d.value = 255;
      else if ([7, 9].includes(L.length)) {
        let s = rl(L);
        f.value = s.r, o.value = s.g, g.value = s.b, d.value = s.a;
      }
    }, a = () => {
      b.value = Bo(
        f.value,
        o.value,
        g.value,
        d.value
      );
    }, u = () => {
      n(b.value), i("change");
    }, f = Q(255), o = Q(255), g = Q(255), d = Q(255), b = Q(l.modelValue);
    n(b.value), se([f, o, g, d], a), se(() => l.modelValue, (L) => b.value = L), se(b, (L) => i("update:modelValue", L));
    const x = X(() => zo(rl(b.value))), w = X(() => b.value === "" || b.value === "#" ? {} : {
      background: b.value,
      "--lkt-btn-bg": b.value,
      color: x.value,
      "--lkt-btn-color": x.value
    }), k = X(() => b.value === "" || b.value === "#" ? {} : {
      "--lkt-field-bg-input": b.value,
      "--lkt-field-color": x.value
    });
    return (L, s) => {
      const r = me("lkt-button");
      return W(), J(r, {
        class: "lkt-field--toggle-button",
        style: el(w.value),
        text: b.value,
        type: H(et).Tooltip,
        tooltip: {
          class: "lkt-field-color--tooltip",
          locationY: H(Lt).Bottom,
          locationX: H(Bt).LeftCorner
        }
      }, {
        tooltip: Ce(({ doClose: c }) => [
          be("div", No, [
            be("div", Ro, [
              be("div", Ao, [
                s[5] || (s[5] = be("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                de(Tt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": s[0] || (s[0] = (h) => b.value = h),
                  style: el(k.value),
                  onChange: u
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            de(ti, {
              modelValue: f.value,
              "onUpdate:modelValue": s[1] || (s[1] = (h) => f.value = h),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            de(ti, {
              modelValue: o.value,
              "onUpdate:modelValue": s[2] || (s[2] = (h) => o.value = h),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            de(ti, {
              modelValue: g.value,
              "onUpdate:modelValue": s[3] || (s[3] = (h) => g.value = h),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            de(ti, {
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
}), Io = /* @__PURE__ */ ke({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, i = Q(t.modelValue), l = X(() => typeof t.max == "boolean" || i.value.length < t.max ? ["inline-create"] : []);
    return (n, a) => {
      const u = me("lkt-table");
      return W(), J(u, {
        type: "item",
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (f) => i.value = f),
        perms: l.value,
        "edit-mode": n.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: Ce(({ item: f, index: o, isLoading: g, canCreate: d, canRead: b, canUpdate: x, canDrop: w, doDrop: k }) => [
          de(Xl, {
            modelValue: i.value[o],
            "onUpdate:modelValue": (L) => i.value[o] = L
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
}), Do = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\D+/g, "").length < n && e.push(Le.createMinNumbers(n, Se.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/\D+/g, "").length > n && e.push(Le.createMaxNumbers(n, Se.Ko));
  }
}, Mo = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/[^A-Z]+/g, "").length < n && e.push(Le.createMinUpperChars(n, Se.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/[^A-Z]+/g, "").length > n && e.push(Le.createMaxUpperChars(n, Se.Ko));
  }
}, Vo = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/[A-Z]+/g, "").length < n && e.push(Le.createMinLowerChars(n, Se.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/[A-Z]+/g, "").length > n && e.push(Le.createMaxLowerChars(n, Se.Ko));
  }
}, Ho = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\d+/g, "").length < n && e.push(Le.createMinChars(n, Se.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/\d+/g, "").length > n && e.push(Le.createMaxChars(n, Se.Ko));
  }
}, Oo = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < n && e.push(Le.createMinSpecialChars(n, Se.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > n && e.push(Le.createMaxSpecialChars(n, Se.Ko));
  }
}, ul = (e, t = "default") => {
  if (!e) return "";
  let i = ee.validationMessages[t] && ee.validationMessages[t][e] ? ee.validationMessages[t][e] : "";
  return i || (i = ""), i;
}, Fo = { class: "boolean-input" }, Uo = { class: "boolean-input-label" }, Po = { class: "boolean-input--check-on" }, Wo = {
  key: 0,
  class: "lkt-icn-ok"
}, $o = ["innerHTML"], Zo = ["name", "id", "disabled", "readonly", "value", "checked"], qo = /* @__PURE__ */ ke({
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
    const i = t, l = e, n = Q(null), a = Q(l.modelValue), u = Q(a.value ? "true" : "false"), f = Q(l.focusing), o = (d) => {
      f.value = !0, i("focus", d);
    }, g = (d) => {
      f.value = !1, i("blur", d);
    };
    return se(() => l.modelValue, (d) => a.value = d), se(a, (d) => i("update:modelValue", d)), (d, b) => (W(), ae("div", Fo, [
      be("div", Uo, [
        be("div", Po, [
          d.type === H(K).Check && a.value ? (W(), ae("i", Wo)) : oe("", !0)
        ])
      ]),
      d.label ? (W(), ae("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: d.label
      }, null, 8, $o)) : oe("", !0),
      Me(be("input", {
        "onUpdate:modelValue": b[0] || (b[0] = (x) => a.value = x),
        type: "checkbox",
        ref_key: "input",
        ref: n,
        name: d.name,
        id: d.id,
        disabled: !d.editable || d.disabled,
        readonly: !d.editable || d.readonly,
        value: u.value,
        checked: a.value,
        onFocus: o,
        onBlur: g
      }, null, 40, Zo), [
        [Kn, a.value]
      ])
    ]));
  }
});
function Te(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var li = { exports: {} }, jo = li.exports, dl;
function Go() {
  return dl || (dl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : jo, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(li)), li.exports;
}
var Ko = /* @__PURE__ */ Go();
const Jl = /* @__PURE__ */ Te(Ko);
var ni = { exports: {} }, Yo = ni.exports, cl;
function Xo() {
  return cl || (cl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Yo, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ni)), ni.exports;
}
var Jo = /* @__PURE__ */ Xo();
const Ql = /* @__PURE__ */ Te(Jo);
var oi = { exports: {} }, Qo = oi.exports, fl;
function es() {
  return fl || (fl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Qo, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(oi)), oi.exports;
}
var ts = /* @__PURE__ */ es();
const en = /* @__PURE__ */ Te(ts);
var si = { exports: {} }, is = si.exports, hl;
function ls() {
  return hl || (hl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : is, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(si)), si.exports;
}
var ns = /* @__PURE__ */ ls();
const tn = /* @__PURE__ */ Te(ns);
var ai = { exports: {} }, os = ai.exports, pl;
function ss() {
  return pl || (pl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : os, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ai)), ai.exports;
}
var as = /* @__PURE__ */ ss();
const Ri = /* @__PURE__ */ Te(as);
var ri = { exports: {} }, rs = ri.exports, ml;
function us() {
  return ml || (ml = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : rs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ri)), ri.exports;
}
var ds = /* @__PURE__ */ us();
const ln = /* @__PURE__ */ Te(ds);
var ui = { exports: {} }, cs = ui.exports, gl;
function fs() {
  return gl || (gl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : cs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ui)), ui.exports;
}
var hs = /* @__PURE__ */ fs();
const nn = /* @__PURE__ */ Te(hs);
var di = { exports: {} }, ps = di.exports, vl;
function ms() {
  return vl || (vl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : ps, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(di)), di.exports;
}
var gs = /* @__PURE__ */ ms();
const on = /* @__PURE__ */ Te(gs);
var ci = { exports: {} }, vs = ci.exports, bl;
function bs() {
  return bl || (bl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : vs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ci)), ci.exports;
}
var ys = /* @__PURE__ */ bs();
const sn = /* @__PURE__ */ Te(ys);
var fi = { exports: {} }, _s = fi.exports, yl;
function Cs() {
  return yl || (yl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG una finestra con un documento");
        return i(l);
      };
    })(typeof window < "u" ? window : _s, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(fi)), fi.exports;
}
var ws = /* @__PURE__ */ Cs();
const an = /* @__PURE__ */ Te(ws);
var hi = { exports: {} }, ks = hi.exports, _l;
function xs() {
  return _l || (_l = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : ks, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(hi)), hi.exports;
}
var Ss = /* @__PURE__ */ xs();
const rn = /* @__PURE__ */ Te(Ss);
var pi = { exports: {} }, Ts = pi.exports, Cl;
function Es() {
  return Cl || (Cl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Ts, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(pi)), pi.exports;
}
var Ls = /* @__PURE__ */ Es();
const un = /* @__PURE__ */ Te(Ls);
var mi = { exports: {} }, Bs = mi.exports, wl;
function zs() {
  return wl || (wl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Bs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(mi)), mi.exports;
}
var Ns = /* @__PURE__ */ zs();
const dn = /* @__PURE__ */ Te(Ns);
var gi = { exports: {} }, Rs = gi.exports, kl;
function As() {
  return kl || (kl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Rs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(gi)), gi.exports;
}
var Is = /* @__PURE__ */ As();
const cn = /* @__PURE__ */ Te(Is);
var vi = { exports: {} }, Ds = vi.exports, xl;
function Ms() {
  return xl || (xl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Ds, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(vi)), vi.exports;
}
var Vs = /* @__PURE__ */ Ms();
const fn = /* @__PURE__ */ Te(Vs);
var bi = { exports: {} }, Hs = bi.exports, Sl;
function Os() {
  return Sl || (Sl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Hs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(bi)), bi.exports;
}
var Fs = /* @__PURE__ */ Os();
const hn = /* @__PURE__ */ Te(Fs);
var yi = { exports: {} }, Us = yi.exports, Tl;
function Ps() {
  return Tl || (Tl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Us, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(yi)), yi.exports;
}
var Ws = /* @__PURE__ */ Ps();
const pn = /* @__PURE__ */ Te(Ws);
var _i = { exports: {} }, $s = _i.exports, El;
function Zs() {
  return El || (El = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : $s, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(_i)), _i.exports;
}
var qs = /* @__PURE__ */ Zs();
const mn = /* @__PURE__ */ Te(qs);
var Ci = { exports: {} }, js = Ci.exports, Ll;
function Gs() {
  return Ll || (Ll = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : js, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(Ci)), Ci.exports;
}
var Ks = /* @__PURE__ */ Gs();
const gn = /* @__PURE__ */ Te(Ks);
var wi = { exports: {} }, Ys = wi.exports, Bl;
function Xs() {
  return Bl || (Bl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Ys, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(wi)), wi.exports;
}
var Js = /* @__PURE__ */ Xs();
const vn = /* @__PURE__ */ Te(Js);
var ki = { exports: {} }, Qs = ki.exports, zl;
function ea() {
  return zl || (zl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Qs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ki)), ki.exports;
}
var ta = /* @__PURE__ */ ea();
const bn = /* @__PURE__ */ Te(ta);
var xi = { exports: {} }, ia = xi.exports, Nl;
function la() {
  return Nl || (Nl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : ia, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(xi)), xi.exports;
}
var na = /* @__PURE__ */ la();
const yn = /* @__PURE__ */ Te(na), oa = { ckb: Jl, cs: Ql, da: en, de: tn, en: Ri, es: ln, fr: nn, he: on, hu: sn, it: an, ja: rn, ko: un, lv: dn, nl: cn, pl: fn, pt_br: hn, ro: pn, ru: mn, se: gn, ua: vn, ur: bn, zh_cn: yn }, Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: Jl,
  cs: Ql,
  da: en,
  de: tn,
  default: oa,
  en: Ri,
  es: ln,
  fr: nn,
  he: on,
  hu: sn,
  it: an,
  ja: rn,
  ko: un,
  lv: dn,
  nl: cn,
  pl: fn,
  pt_br: hn,
  ro: pn,
  ru: mn,
  se: gn,
  ua: vn,
  ur: bn,
  zh_cn: yn
}, Symbol.toStringTag, { value: "Module" })), sa = {
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
}, aa = {
  name: "align",
  display: "submenu",
  add: function(e, t) {
    const i = e.icons, l = e.context;
    l.align = {
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
    let n = this.setSubmenu(e), a = l.align._itemMenu = n.querySelector("ul");
    a.addEventListener("click", this.pickup.bind(e)), l.align._alignList = a.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, a = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.icons, l = e.util.createElement("DIV"), n = e.options.alignItems;
    let a = "";
    for (let u = 0, f, o; u < n.length; u++)
      f = n[u], o = t.toolbar["align" + f.charAt(0).toUpperCase() + f.slice(1)], a += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + f + '" title="' + o + '" aria-label="' + o + '"><span class="se-list-icon">' + i["align_" + f] + "</span>" + o + "</button></li>";
    return l.className = "se-submenu se-list-layer se-list-align", l.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + a + "</ul></div>", l;
  },
  /**
   * @Override core
   */
  active: function(e) {
    const t = this.context.align, i = t.targetButton, l = i.firstElementChild;
    if (!e)
      this.util.changeElement(l, t.icons[t.defaultDir]), i.removeAttribute("data-focus");
    else if (this.util.isFormatElement(e)) {
      const n = e.style.textAlign;
      if (n)
        return this.util.changeElement(l, t.icons[n] || t.icons[t.defaultDir]), i.setAttribute("data-focus", n), !0;
    }
    return !1;
  },
  /**
   * @Override submenu
   */
  on: function() {
    const e = this.context.align, t = e._alignList, i = e.targetButton.getAttribute("data-focus") || e.defaultDir;
    if (i !== e.currentAlign) {
      for (let l = 0, n = t.length; l < n; l++)
        i === t[l].getAttribute("data-value") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
      e.currentAlign = i;
    }
  },
  exchangeDir: function() {
    const e = this.options.rtl ? "right" : "left";
    if (!this.context.align || this.context.align.defaultDir === e) return;
    this.context.align.defaultDir = e;
    let t = this.context.align._itemMenu, i = t.querySelector('[data-value="left"]'), l = t.querySelector('[data-value="right"]');
    if (i && l) {
      const n = i.parentElement, a = l.parentElement;
      n.appendChild(l), a.appendChild(i);
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !i && !/UL/i.test(t.tagName); )
      i = t.getAttribute("data-value"), t = t.parentNode;
    if (!i) return;
    const l = this.context.align.defaultDir, n = this.getSelectedElements();
    for (let a = 0, u = n.length; a < u; a++)
      this.util.setStyle(n[a], "textAlign", i === l ? "" : i);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, ra = {
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
    let l = this.setSubmenu(e);
    l.querySelector(".se-list-inner").addEventListener("click", this.pickup.bind(e)), i.font._fontList = l.querySelectorAll("ul li button"), e.initMenuTarget(this.name, t, l), l = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-font-family";
    let l, n, a, u, f = e.options.font, o = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (a = 0, u = f.length; a < u; a++)
      l = f[a], n = l.split(",")[0], o += '<li><button type="button" class="se-btn-list" data-value="' + l + '" data-txt="' + n + '" title="' + n + '" aria-label="' + n + '" style="font-family:' + l + ';">' + n + "</button></li>";
    return o += "</ul></div>", i.innerHTML = o, i;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.font.targetText, i = this.context.font.targetTooltip;
    if (e) {
      if (e.style && e.style.fontFamily.length > 0) {
        const l = e.style.fontFamily.replace(/["']/g, "");
        return this.util.changeTxt(t, l), this.util.changeTxt(i, this.lang.toolbar.font + " (" + l + ")"), !0;
      }
    } else {
      const l = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
      this.util.changeTxt(t, l), this.util.changeTxt(i, this.hasFocus ? this.lang.toolbar.font + (l ? " (" + l + ")" : "") : l);
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.font, t = e._fontList, i = e.targetText.textContent;
    if (i !== e.currentFont) {
      for (let l = 0, n = t.length; l < n; l++)
        i === (t[l].getAttribute("data-value") || "").replace(/'|"/g, "") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
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
}, ua = {
  name: "fontSize",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.fontSize = {
      targetText: t.querySelector(".txt"),
      _sizeList: null,
      currentSize: ""
    };
    let l = this.setSubmenu(e), n = l.querySelector("ul");
    n.addEventListener("click", this.pickup.bind(e)), i.fontSize._sizeList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, l = e.util.createElement("DIV");
    l.className = "se-submenu se-list-layer se-list-font-size";
    const n = t.fontSize ? t.fontSize : [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    let a = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let u = 0, f = t.fontSizeUnit, o = n.length, g; u < o; u++)
      g = n[u], a += '<li><button type="button" class="se-btn-list" data-value="' + g + f + '" title="' + g + f + '" aria-label="' + g + f + '" style="font-size:' + g + f + ';">' + g + "</button></li>";
    return a += "</ul></div>", l.innerHTML = a, l;
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
      for (let l = 0, n = t.length; l < n; l++)
        i === t[l].getAttribute("data-value") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
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
}, _n = {
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
    const i = e.options, l = e.lang, n = !i.colorList || i.colorList.length === 0 ? [
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
    for (let f = 0, o = n.length, g; f < o; f++)
      g = n[f], g && (typeof g == "string" && (a.push(g), f < o - 1) || (a.length > 0 && (u += '<div class="se-selector-color">' + t(a) + "</div>", a = []), typeof g == "object" && (u += '<div class="se-selector-color">' + t(g) + "</div>")));
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
    for (let i = 0, l = e.length, n; i < l; i++)
      n = e[i], typeof n == "string" && (t += '<li><button type="button" data-value="' + n + '" title="' + n + '" aria-label="' + n + '" style="background-color:' + n + ';"></button></li>');
    return t += "</ul>", t;
  },
  /**
   * @description Displays or resets the currently selected color at color list.
   * @param {Node} node Current Selected node
   * @param {String|null} color Color value
   */
  init: function(e, t) {
    const i = this.plugins.colorPicker;
    let l = t || i.getColorInNode.call(this, e) || this.context.colorPicker._defaultColor;
    l = i.isHexColor(l) ? l : i.rgb2hex(l) || l;
    const n = this.context.colorPicker._colorList;
    if (n)
      for (let a = 0, u = n.length; a < u; a++)
        l.toLowerCase() === n[a].getAttribute("data-value").toLowerCase() ? this.util.addClass(n[a], "active") : this.util.removeClass(n[a], "active");
    i.setInputText.call(this, i.colorName2hex.call(this, l));
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
    var i = this._w.getComputedStyle(this._d.body.appendChild(t)).color.match(/\d+/g).map(function(l) {
      return parseInt(l, 10);
    });
    return this.util.removeItem(t), i.length >= 3 ? "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).substr(1) : !1;
  }
}, da = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([_n]);
    const i = e.context;
    i.fontColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let l = this.setSubmenu(e);
    i.fontColor.colorInput = l.querySelector("._se_color_picker_input"), i.fontColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), l.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), l.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), l.addEventListener("click", this.pickup.bind(e)), i.fontColor.colorList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null;
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
}, ca = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([_n]);
    const i = e.context;
    i.hiliteColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let l = this.setSubmenu(e);
    i.hiliteColor.colorInput = l.querySelector("._se_color_picker_input"), i.hiliteColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), l.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), l.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), l.addEventListener("click", this.pickup.bind(e)), i.hiliteColor.colorList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null;
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
}, fa = {
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
    const t = e.lang, i = e.util.createElement("DIV"), l = e.options.hrItems || [{ name: t.toolbar.hr_solid, class: "__se__solid" }, { name: t.toolbar.hr_dashed, class: "__se__dashed" }, { name: t.toolbar.hr_dotted, class: "__se__dotted" }];
    let n = "";
    for (let a = 0, u = l.length; a < u; a++)
      n += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + l[a].class + '" title="' + l[a].name + '" aria-label="' + l[a].name + '"><hr' + (l[a].class ? ' class="' + l[a].class + '"' : "") + (l[a].style ? ' style="' + l[a].style + '"' : "") + "/></button></li>";
    return i.className = "se-submenu se-list-layer se-list-line", i.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + n + "</ul></div>", i;
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
    const l = this.plugins.horizontalRule.appendHr.call(this, t.firstElementChild);
    l && (this.setRange(l, 0, l, 0), this.submenuOff());
  }
}, ha = {
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
    let l = this.setSubmenu(e), n = l.querySelector("ul");
    n.addEventListener("click", this.pickup.bind(e)), i.list._list = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + t.toolbar.orderList + '" aria-label="' + t.toolbar.orderList + '">' + e.icons.list_number + '</button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + t.toolbar.unorderList + '" aria-label="' + t.toolbar.unorderList + '">' + e.icons.list_bullets + "</button></li></ul></div>", i;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.list.targetButton, i = t.firstElementChild, l = this.util;
    if (l.isList(e)) {
      const n = e.nodeName;
      return t.setAttribute("data-focus", n), l.addClass(t, "active"), /UL/i.test(n) ? l.changeElement(i, this.context.list.icons.bullets) : l.changeElement(i, this.context.list.icons.number), !0;
    } else
      t.removeAttribute("data-focus"), l.changeElement(i, this.context.list.icons.number), l.removeClass(t, "active");
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.list, t = e._list, i = e.targetButton.getAttribute("data-focus") || "";
    if (i !== e.currentList) {
      for (let l = 0, n = t.length; l < n; l++)
        i === t[l].getAttribute("data-command") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
      e.currentList = i;
    }
  },
  editList: function(e, t, i) {
    let l = this.getRange(), n = t || this.getSelectedElementsAndComponents(!1);
    if (n.length === 0 && (t || (l = this.getRange_addLine(l, null), n = this.getSelectedElementsAndComponents(!1), n.length === 0)))
      return;
    const a = this.util;
    a.sortByDepth(n, !0);
    let u = n[0], f = n[n.length - 1], o = (a.isListCell(u) || a.isComponent(u)) && !u.previousElementSibling ? u.parentNode.previousElementSibling : u.previousElementSibling, g = (a.isListCell(f) || a.isComponent(f)) && !f.nextElementSibling ? f.parentNode.nextElementSibling : f.nextElementSibling;
    const d = l.collapsed, b = {
      sc: l.startContainer,
      so: l.startContainer === l.endContainer && a.onlyZeroWidthSpace(l.startContainer) && l.startOffset === 0 && l.endOffset === 1 ? l.endOffset : l.startOffset,
      ec: l.endContainer,
      eo: l.endOffset
    };
    let x = null, w = !0;
    for (let k = 0, L = n.length; k < L; k++)
      if (!a.isList(a.getRangeFormatElement(n[k], (function(s) {
        return this.getRangeFormatElement(s) && s !== n[k];
      }).bind(a)))) {
        w = !1;
        break;
      }
    if (w && (!o || u.tagName !== o.tagName || e !== o.tagName.toUpperCase()) && (!g || f.tagName !== g.tagName || e !== g.tagName.toUpperCase())) {
      if (i) {
        for (let h = 0, p = n.length; h < p; h++)
          for (let v = h - 1; v >= 0; v--)
            if (n[v].contains(n[h])) {
              n.splice(h, 1), h--, p--;
              break;
            }
      }
      const k = a.getRangeFormatElement(u), L = k && k.tagName === e;
      let s, r;
      const c = (function(h) {
        return !this.isComponent(h);
      }).bind(a);
      L || (r = a.createElement(e));
      for (let h = 0, p = n.length, v, m; h < p; h++)
        m = a.getRangeFormatElement(n[h], c), !(!m || !a.isList(m)) && (v ? v !== m ? (i && a.isListCell(m.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : x = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0), m = n[h].parentNode, L || (r = a.createElement(e)), v = m, s = { r: v, f: [a.getParentElement(n[h], "LI")] }) : s.f.push(a.getParentElement(n[h], "LI")) : (v = m, s = { r: v, f: [a.getParentElement(n[h], "LI")] }), h === p - 1 && (i && a.isListCell(m.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : x = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0)));
    } else {
      const k = o && o.parentNode, L = g && g.parentNode;
      o = k && !a.isWysiwygDiv(k) && k.nodeName === e ? k : o, g = L && !a.isWysiwygDiv(L) && L.nodeName === e ? L : g;
      const s = o && o.tagName === e, r = g && g.tagName === e;
      let c = s ? o : a.createElement(e), h = null, p = null, v = null;
      const m = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(a);
      for (let y = 0, C = n.length, _, S, D, E, B, R, Z, q, P; y < C; y++) {
        if (S = n[y], S.childNodes.length === 0 && !a._isIgnoreNodeChange(S)) {
          a.removeItem(S);
          continue;
        }
        if (E = n[y + 1], B = S.parentNode, R = E ? E.parentNode : null, D = a.isListCell(S), P = a.isRangeFormatElement(B) ? B : null, Z = D && !a.isWysiwygDiv(B) ? B.parentNode : B, q = D && !a.isWysiwygDiv(B) ? !E || a.isListCell(Z) ? B : B.nextSibling : S.nextSibling, _ = a.createElement("LI"), a.copyFormatAttributes(_, S), y === 0 && b.sc === S && (b.sc = _), y === C - 1 && b.ec === S && (b.ec = _), a.isComponent(S)) {
          const O = /^HR$/i.test(S.nodeName);
          O || (_.innerHTML = "<br>"), _.innerHTML += S.outerHTML, O && (_.innerHTML += "<br>");
        } else {
          const O = S.childNodes;
          for (; O[0]; )
            _.appendChild(O[0]);
        }
        c.appendChild(_), (!E || Z !== R || a.isRangeFormatElement(q)) && (h || (h = c), (!s || !E || Z !== R) && !(E && a.isList(R) && R === B) && c.parentNode !== Z && Z.insertBefore(c, q)), a.removeItem(S), s && p === null && (p = c.children.length - 1), E && (a.getRangeFormatElement(R, m) !== a.getRangeFormatElement(B, m) || a.isList(R) && a.isList(B) && a.getElementDepth(R) !== a.getElementDepth(B)) && (c = a.createElement(e)), P && P.children.length === 0 && a.removeItem(P);
      }
      p && (h = h.children[p]), r && (v = c.children.length - 1, c.innerHTML += g.innerHTML, c.children[v], a.removeItem(g));
    }
    return this.effectNode = null, d && x || b;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], l = i.nextElementSibling, n = t.parentNode, a = n.parentNode.nextElementSibling, u = n.parentNode.parentNode;
    for (let o = 0, g = e.length; o < g; o++)
      u.insertBefore(e[o], a);
    if (l && n.children.length > 0) {
      const o = n.cloneNode(!1), g = n.childNodes, d = this.util.getPositionIndex(l);
      for (; g[d]; )
        o.appendChild(g[d]);
      i.appendChild(o);
    }
    n.children.length === 0 && this.util.removeItem(n), this.util.mergeSameTags(u);
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
    let l = t[0].parentNode, n = t[i - 1], a = null;
    if (e) {
      if (l !== n.parentNode && this.util.isList(n.parentNode.parentNode) && n.nextElementSibling)
        for (n = n.nextElementSibling; n; )
          t.push(n), n = n.nextElementSibling;
      a = this.plugins.list.editList.call(this, l.nodeName.toUpperCase(), t, !0);
    } else {
      let u = this.util.createElement(l.nodeName), f = t[0].previousElementSibling, o = n.nextElementSibling;
      const g = { s: null, e: null, sl: l, el: l };
      for (let x = 0, w = i, k; x < w; x++)
        k = t[x], k.parentNode !== l && (this.plugins.list._insiedList.call(this, l, u, f, o, g), l = k.parentNode, u = this.util.createElement(l.nodeName)), f = k.previousElementSibling, o = k.nextElementSibling, u.appendChild(k);
      this.plugins.list._insiedList.call(this, l, u, f, o, g);
      const d = this.util.getNodeFromPath(g.s, g.sl), b = this.util.getNodeFromPath(g.e, g.el);
      a = {
        sc: d,
        so: 0,
        ec: b,
        eo: b.textContent.length
      };
    }
    return a;
  },
  _insiedList: function(e, t, i, l, n) {
    let a = !1;
    if (i && t.tagName === i.tagName) {
      const u = t.children;
      for (; u[0]; )
        i.appendChild(u[0]);
      t = i, a = !0;
    }
    if (l && t.tagName === l.tagName) {
      const u = l.children;
      for (; u[0]; )
        t.appendChild(u[0]);
      const f = l.nextElementSibling;
      l.parentNode.removeChild(l), l = f;
    }
    if (!a) {
      this.util.isListCell(i) && (e = i, l = null), e.insertBefore(t, l), n.s || (n.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), n.sl = e);
      const u = e.contains(n.sl) ? this.util.getNodePath(n.sl, e) : null;
      n.e = this.util.getNodePath(t.lastElementChild.firstChild, e, null), n.el = e, this.util.mergeSameTags(e, [n.s, n.e, u], !1), this.util.mergeNestedTags(e), u && (n.sl = this.util.getNodeFromPath(u, e));
    }
    return t;
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = "";
    for (; !i && !/^UL$/i.test(t.tagName); )
      i = t.getAttribute("data-command"), t = t.parentNode;
    if (!i) return;
    const l = this.plugins.list.editList.call(this, i, null, !1);
    l && this.setRange(l.sc, l.so, l.ec, l.eo), this.submenuOff(), this.history.push(!1);
  }
}, pa = {
  name: "table",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    let l = i.table = {
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
    }, n = this.setSubmenu(e), a = n.querySelector(".se-controller-table-picker");
    l.tableHighlight = n.querySelector(".se-table-size-highlighted"), l.tableUnHighlight = n.querySelector(".se-table-size-unhighlighted"), l.tableDisplay = n.querySelector(".se-table-size-display"), e.options.rtl && (l.tableHighlight.style.left = 10 * 18 - 13 + "px");
    let u = this.setController_table(e);
    l.tableController = u, l.resizeButton = u.querySelector("._se_table_resize"), l.resizeText = u.querySelector("._se_table_resize > span > span"), l.columnFixedButton = u.querySelector("._se_table_fixed_column"), l.headerButton = u.querySelector("._se_table_header");
    let f = this.setController_tableEditor(e, l.cellControllerTop);
    l.resizeDiv = f, l.splitMenu = f.querySelector(".se-btn-group-sub"), l.mergeButton = f.querySelector("._se_table_merge_button"), l.splitButton = f.querySelector("._se_table_split_button"), l.insertRowAboveButton = f.querySelector("._se_table_insert_row_a"), l.insertRowBelowButton = f.querySelector("._se_table_insert_row_b"), a.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, l)), a.addEventListener("click", this.appendTable.bind(e)), f.addEventListener("click", this.onClick_tableController.bind(e)), u.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, n), i.element.relative.appendChild(f), i.element.relative.appendChild(u), n = null, a = null, f = null, u = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.util.createElement("DIV");
    return t.className = "se-submenu se-selector-table", t.innerHTML = '<div class="se-table-size"><div class="se-table-size-picker se-controller-table-picker"></div><div class="se-table-size-highlighted"></div><div class="se-table-size-unhighlighted"></div></div><div class="se-table-size-display">1 x 1</div>', t;
  },
  setController_table: function(e) {
    const t = e.lang, i = e.icons, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-table", l.innerHTML = '<div><div class="se-btn-group"><button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' + i.expansion + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.maxSize + '</span></span></button><button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' + i.fixed_column_width + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.fixedColumnWidth + '</span></span></button><button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' + i.table_header + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.tableHeader + '</span></span></button><button type="button" data-command="remove" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", l;
  },
  setController_tableEditor: function(e, t) {
    const i = e.lang, l = e.icons, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-table-cell", n.innerHTML = (t ? "" : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group"><button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + l.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowAbove + '</span></span></button><button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + l.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowBelow + '</span></span></button><button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + l.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteRow + '</span></span></button><button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + l.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.mergeCells + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + l.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnBefore + '</span></span></button><button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + l.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnAfter + '</span></span></button><button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + l.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteColumn + '</span></span></button><button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + l.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.splitCells + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split"><div class="se-list-inner"><ul class="se-list-basic"><li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + i.controller.VerticalSplit + '" aria-label="' + i.controller.VerticalSplit + '">' + i.controller.VerticalSplit + '</li><li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + i.controller.HorizontalSplit + '" aria-label="' + i.controller.HorizontalSplit + '">' + i.controller.HorizontalSplit + "</li></ul></div></div></div>", n;
  },
  appendTable: function() {
    const e = this.util.createElement("TABLE"), t = this.plugins.table.createCells, i = this.context.table._tableXY[0];
    let l = this.context.table._tableXY[1], n = "<tbody>";
    for (; l > 0; )
      n += "<tr>" + t.call(this, "td", i) + "</tr>", --l;
    if (n += "</tbody>", e.innerHTML = n, this.insertComponent(e, !1, !0, !1)) {
      const u = e.querySelector("td div");
      this.setRange(u, 0, u, 0), this.plugins.table.reset_table_picker.call(this);
    }
  },
  createCells: function(e, t, i) {
    if (e = e.toLowerCase(), i) {
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
    let i = this._w.Math.ceil(t.offsetX / 18), l = this._w.Math.ceil(t.offsetY / 18);
    i = i < 1 ? 1 : i, l = l < 1 ? 1 : l, e._rtl && (e.tableHighlight.style.left = i * 18 - 13 + "px", i = 11 - i), e.tableHighlight.style.width = i + "em", e.tableHighlight.style.height = l + "em", this.util.changeTxt(e.tableDisplay, i + " x " + l), e._tableXY = [i, l];
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
      for (let l = 0, n = i.length; l < n; l++)
        this.util.removeClass(i[l], "se-table-selected-cell");
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
    const l = i._element || this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    i._maxWidth = this.util.hasClass(l, "se-table-size-100") || l.style.width === "100%" || !l.style.width && !this.util.hasClass(l, "se-table-size-auto"), i._fixedColumn = this.util.hasClass(l, "se-table-layout-fixed") || l.style.tableLayout === "fixed", t.setTableStyle.call(this, i._maxWidth ? "width|column" : "width"), t.setPositionControllerTop.call(this, l), t.setPositionControllerDiv.call(this, e, t._shift), t._shift || this.controllersOn(i.resizeDiv, i.tableController, t.init.bind(this), e, "table");
  },
  setPositionControllerTop: function(e) {
    this.setControllerPosition(this.context.table.tableController, e, "top", { left: 0, top: 0 });
  },
  setPositionControllerDiv: function(e, t) {
    const i = this.context.table, l = i.resizeDiv;
    this.plugins.table.setCellInfo.call(this, e, t), i.cellControllerTop ? this.setControllerPosition(l, i._element, "top", { left: i.tableController.offsetWidth, top: 0 }) : this.setControllerPosition(l, e, "bottom", { left: 0, top: 0 });
  },
  setCellInfo: function(e, t) {
    const i = this.context.table, l = i._element = this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    if (/THEAD/i.test(l.firstElementChild.nodeName) ? this.util.addClass(i.headerButton, "active") : this.util.removeClass(i.headerButton, "active"), t || i._physical_cellCnt === 0) {
      i._tdElement !== e && (i._tdElement = e, i._trElement = e.parentNode);
      const n = i._trElements = l.rows, a = e.cellIndex;
      let u = 0;
      for (let d = 0, b = n[0].cells, x = n[0].cells.length; d < x; d++)
        u += b[d].colSpan;
      const f = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = n.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = u, i._physical_cellIndex = a, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[a].rowSpan - 1;
      let o = [], g = [];
      for (let d = 0, b, x; d <= f; d++) {
        b = n[d].cells, x = 0;
        for (let w = 0, k = b.length, L, s, r, c; w < k; w++) {
          if (L = b[w], s = L.colSpan - 1, r = L.rowSpan - 1, c = w + x, g.length > 0)
            for (let h = 0, p; h < g.length; h++)
              p = g[h], !(p.row > d) && (c >= p.index ? (x += p.cs, c += p.cs, p.rs -= 1, p.row = d + 1, p.rs < 1 && (g.splice(h, 1), h--)) : w === k - 1 && (p.rs -= 1, p.row = d + 1, p.rs < 1 && (g.splice(h, 1), h--)));
          if (d === f && w === a) {
            i._logical_cellIndex = c;
            break;
          }
          r > 0 && o.push({
            index: c,
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
    const i = this.plugins.table, l = this.context.table, n = l._element, a = e === "row";
    if (a) {
      const u = l._trElement.parentNode;
      if (/^THEAD$/i.test(u.nodeName)) {
        if (t === "up")
          return;
        if (!u.nextElementSibling || !/^TBODY$/i.test(u.nextElementSibling.nodeName)) {
          n.innerHTML += "<tbody><tr>" + i.createCells.call(this, "td", l._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (i._ref) {
      const u = l._tdElement, f = i._selectedCells;
      if (a)
        if (t)
          i.setCellInfo.call(this, t === "up" ? f[0] : f[f.length - 1], !0), i.editRow.call(this, t, u);
        else {
          let o = f[0].parentNode;
          const g = [f[0]];
          for (let d = 1, b = f.length, x; d < b; d++)
            x = f[d], o !== x.parentNode && (g.push(x), o = x.parentNode);
          for (let d = 0, b = g.length; d < b; d++)
            i.setCellInfo.call(this, g[d], !0), i.editRow.call(this, t);
        }
      else {
        const o = f[0].parentNode;
        if (t) {
          let g = null;
          for (let d = 0, b = f.length - 1; d < b; d++)
            if (o !== f[d + 1].parentNode) {
              g = f[d];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? f[0] : g || f[0], !0), i.editCell.call(this, t, u);
        } else {
          const g = [f[0]];
          for (let d = 1, b = f.length, x; d < b && (x = f[d], o === x.parentNode); d++)
            g.push(x);
          for (let d = 0, b = g.length; d < b; d++)
            i.setCellInfo.call(this, g[d], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[a ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const u = n.children;
      for (let f = 0; f < u.length; f++)
        u[f].children.length === 0 && (this.util.removeItem(u[f]), f--);
      n.children.length === 0 && this.util.removeItem(n);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, l = !e, n = e === "up", a = i._rowIndex, u = l || n ? a : a + i._current_rowSpan + 1, f = l ? -1 : 1, o = i._trElements;
    let g = i._logical_cellCnt;
    for (let d = 0, b = a + (l ? -1 : 0), x; d <= b; d++) {
      if (x = o[d].cells, x.length === 0) return;
      for (let w = 0, k = x.length, L, s; w < k; w++)
        L = x[w].rowSpan, s = x[w].colSpan, !(L < 2 && s < 2) && L + d > u && u > d && (x[w].rowSpan = L + f, g -= s);
    }
    if (l) {
      const d = o[a + 1];
      if (d) {
        const b = [];
        let x = o[a].cells, w = 0;
        for (let k = 0, L = x.length, s, r; k < L; k++)
          s = x[k], r = k + w, w += s.colSpan - 1, s.rowSpan > 1 && (s.rowSpan -= 1, b.push({ cell: s.cloneNode(!1), index: r }));
        if (b.length > 0) {
          let k = b.shift();
          x = d.cells, w = 0;
          for (let L = 0, s = x.length, r, c; L < s && (r = x[L], c = L + w, w += r.colSpan - 1, !(c >= k.index && (L--, w--, w += k.cell.colSpan - 1, d.insertBefore(k.cell, r), k = b.shift(), !k))); L++)
            ;
          if (k) {
            d.appendChild(k.cell);
            for (let L = 0, s = b.length; L < s; L++)
              d.appendChild(b[L].cell);
          }
        }
      }
      i._element.deleteRow(u);
    } else {
      const d = i._element.insertRow(u);
      d.innerHTML = this.plugins.table.createCells.call(this, "td", g, !1);
    }
    l ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, l = this.util, n = !e, a = e === "left", u = i._current_colSpan, f = n || a ? i._logical_cellIndex : i._logical_cellIndex + u + 1, o = i._trElements;
    let g = [], d = [], b = 0;
    const x = [], w = [];
    for (let k = 0, L = i._rowCnt, s, r, c, h, p, v; k < L; k++) {
      s = o[k], r = f, p = !1, c = s.cells, v = 0;
      for (let m = 0, y, C = c.length, _, S, D; m < C && (y = c[m], !!y); m++)
        if (_ = y.rowSpan - 1, S = y.colSpan - 1, n) {
          if (D = m + v, d.length > 0) {
            const E = !c[m + 1];
            for (let B = 0, R; B < d.length; B++)
              R = d[B], !(R.row > k) && (D >= R.index ? (v += R.cs, D = m + v, R.rs -= 1, R.row = k + 1, R.rs < 1 && (d.splice(B, 1), B--)) : E && (R.rs -= 1, R.row = k + 1, R.rs < 1 && (d.splice(B, 1), B--)));
          }
          _ > 0 && g.push({
            rs: _,
            cs: S + 1,
            index: D,
            row: -1
          }), D >= r && D + S <= r + u ? x.push(y) : D <= r + u && D + S >= r ? y.colSpan -= l.getOverlapRangeAtIndex(f, f + u, D, D + S) : _ > 0 && (D < r || D + S > r + u) && w.push({
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
            for (let E = 0, B; E < d.length; E++)
              B = d[E], r -= B.cs, B.rs -= 1, B.rs < 1 && (d.splice(E, 1), E--);
            p = !0;
          }
        }
      if (d = d.concat(g).sort(function(m, y) {
        return m.index - y.index;
      }), g = [], !n) {
        if (b > 0) {
          b -= 1;
          continue;
        }
        r !== null && c.length > 0 && (h = this.plugins.table.createCells.call(this, c[0].nodeName, 0, !0), h = s.insertBefore(h, c[r]));
      }
    }
    if (n) {
      let k, L;
      for (let s = 0, r = x.length, c; s < r; s++)
        c = x[s].parentNode, l.removeItem(x[s]), c.cells.length === 0 && (k || (k = l.getArrayIndex(o, c)), L = l.getArrayIndex(o, c), l.removeItem(c));
      for (let s = 0, r = w.length, c; s < r; s++)
        c = w[s], c.cell.rowSpan = l.getOverlapRangeAtIndex(k, L, c.i, c.rs);
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
    const t = this.util, i = e === "vertical", l = this.context.table, n = l._tdElement, a = l._trElements, u = l._trElement, f = l._logical_cellIndex, o = l._rowIndex, g = this.plugins.table.createCells.call(this, n.nodeName, 0, !0);
    if (i) {
      const d = n.colSpan;
      if (g.rowSpan = n.rowSpan, d > 1)
        g.colSpan = this._w.Math.floor(d / 2), n.colSpan = d - g.colSpan, u.insertBefore(g, n.nextElementSibling);
      else {
        let b = [], x = [];
        for (let w = 0, k = l._rowCnt, L, s; w < k; w++) {
          L = a[w].cells, s = 0;
          for (let r = 0, c = L.length, h, p, v, m; r < c; r++) {
            if (h = L[r], p = h.colSpan - 1, v = h.rowSpan - 1, m = r + s, x.length > 0)
              for (let y = 0, C; y < x.length; y++)
                C = x[y], !(C.row > w) && (m >= C.index ? (s += C.cs, m += C.cs, C.rs -= 1, C.row = w + 1, C.rs < 1 && (x.splice(y, 1), y--)) : r === c - 1 && (C.rs -= 1, C.row = w + 1, C.rs < 1 && (x.splice(y, 1), y--)));
            if (m <= f && v > 0 && b.push({
              index: m,
              cs: p + 1,
              rs: v,
              row: -1
            }), h !== n && m <= f && m + p >= f + d - 1) {
              h.colSpan += 1;
              break;
            }
            if (m > f) break;
            s += p;
          }
          x = x.concat(b).sort(function(r, c) {
            return r.index - c.index;
          }), b = [];
        }
        u.insertBefore(g, n.nextElementSibling);
      }
    } else {
      const d = n.rowSpan;
      if (g.colSpan = n.colSpan, d > 1) {
        g.rowSpan = this._w.Math.floor(d / 2);
        const b = d - g.rowSpan, x = [], w = t.getArrayIndex(a, u) + b;
        for (let r = 0, c, h; r < w; r++) {
          c = a[r].cells, h = 0;
          for (let p = 0, v = c.length, m, y, C; p < v && (C = p + h, !(C >= f)); p++)
            m = c[p], y = m.rowSpan - 1, y > 0 && y + r >= w && C < f && x.push({
              index: C,
              cs: m.colSpan
            }), h += m.colSpan - 1;
        }
        const k = a[w], L = k.cells;
        let s = x.shift();
        for (let r = 0, c = L.length, h = 0, p, v, m, y; r < c; r++) {
          if (m = r + h, p = L[r], v = p.colSpan - 1, y = m + v + 1, s && y >= s.index && (h += s.cs, y += s.cs, s = x.shift()), y >= f || r === c - 1) {
            k.insertBefore(g, p.nextElementSibling);
            break;
          }
          h += v;
        }
        n.rowSpan = b;
      } else {
        g.rowSpan = n.rowSpan;
        const b = t.createElement("TR");
        b.appendChild(g);
        for (let k = 0, L; k < o; k++) {
          if (L = a[k].cells, L.length === 0) return;
          for (let s = 0, r = L.length; s < r; s++)
            k + L[s].rowSpan - 1 >= o && (L[s].rowSpan += 1);
        }
        const x = l._physical_cellIndex, w = u.cells;
        for (let k = 0, L = w.length; k < L; k++)
          k !== x && (w[k].rowSpan += 1);
        u.parentNode.insertBefore(b, u.nextElementSibling);
      }
    }
    this.focusEdge(n), this.plugins.table.setPositionControllerDiv.call(this, n, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, l = e._ref, n = e._selectedCells, a = n[0];
    let u = null, f = null, o = l.ce - l.cs + 1, g = l.re - l.rs + 1, d = "", b = null;
    for (let x = 1, w = n.length, k, L; x < w; x++) {
      k = n[x], b !== k.parentNode && (b = k.parentNode), L = k.children;
      for (let s = 0, r = L.length; s < r; s++)
        i.isFormatElement(L[s]) && i.onlyZeroWidthSpace(L[s].textContent) && i.removeItem(L[s]);
      d += k.innerHTML, i.removeItem(k), b.cells.length === 0 && (u ? f = b : u = b, g -= 1);
    }
    if (u) {
      const x = t._trElements, w = i.getArrayIndex(x, u), k = i.getArrayIndex(x, f || u), L = [];
      for (let s = 0, r; s <= k; s++) {
        if (r = x[s].cells, r.length === 0) {
          L.push(x[s]);
          continue;
        }
        for (let c = 0, h = r.length, p, v; c < h; c++)
          p = r[c], v = p.rowSpan - 1, v > 0 && s + v >= w && (p.rowSpan -= i.getOverlapRangeAtIndex(w, k, s, s + v));
      }
      for (let s = 0, r = L.length; s < r; s++)
        i.removeItem(L[s]);
    }
    a.innerHTML += d, a.colSpan = o, a.rowSpan = g, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, a), i.addClass(a, "se-table-selected-cell"), this.focusEdge(a);
  },
  toggleHeader: function() {
    const e = this.util, t = this.context.table.headerButton, i = e.hasClass(t, "active"), l = this.context.table._element;
    if (i)
      e.removeItem(l.querySelector("thead"));
    else {
      const n = e.createElement("THEAD");
      n.innerHTML = "<tr>" + this.plugins.table.createCells.call(this, "th", this.context.table._logical_cellCnt, !1) + "</tr>", l.insertBefore(n, l.firstElementChild);
    }
    e.toggleClass(t, "active"), /TH/i.test(this.context.table._tdElement.nodeName) ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, !1);
  },
  setTableStyle: function(e) {
    const t = this.context.table, i = t._element;
    let l, n, a, u;
    e.indexOf("width") > -1 && (l = t.resizeButton.firstElementChild, n = t.resizeText, t._maxWidth ? (a = t.icons.reduction, u = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(i, "se-table-size-auto"), this.util.addClass(i, "se-table-size-100")) : (a = t.icons.expansion, u = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(i, "se-table-size-100"), this.util.addClass(i, "se-table-size-auto")), this.util.changeElement(l, a), this.util.changeTxt(n, u)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(i, "se-table-layout-auto"), this.util.addClass(i, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(i, "se-table-layout-fixed"), this.util.addClass(i, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
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
    const i = this.plugins.table, l = i._selectedTable.rows, n = this.util, a = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let d = 0, b = a.length; d < b; d++)
      n.removeClass(a[d], "se-table-selected-cell");
    if (e === t && (n.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let u = !0, f = [], o = [];
    const g = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let d = 0, b = l.length, x, w; d < b; d++) {
      x = l[d].cells, w = 0;
      for (let k = 0, L = x.length, s, r, c, h; k < L; k++) {
        if (s = x[k], c = s.colSpan - 1, h = s.rowSpan - 1, r = k + w, f.length > 0)
          for (let p = 0, v; p < f.length; p++)
            v = f[p], !(v.row > d) && (r >= v.index ? (w += v.cs, r += v.cs, v.rs -= 1, v.row = d + 1, v.rs < 1 && (f.splice(p, 1), p--)) : k === L - 1 && (v.rs -= 1, v.row = d + 1, v.rs < 1 && (f.splice(p, 1), p--)));
        if (u) {
          if ((s === e || s === t) && (g.cs = g.cs !== null && g.cs < r ? g.cs : r, g.ce = g.ce !== null && g.ce > r + c ? g.ce : r + c, g.rs = g.rs !== null && g.rs < d ? g.rs : d, g.re = g.re !== null && g.re > d + h ? g.re : d + h, g._i += 1), g._i === 2) {
            u = !1, f = [], o = [], d = -1;
            break;
          }
        } else if (n.getOverlapRangeAtIndex(g.cs, g.ce, r, r + c) && n.getOverlapRangeAtIndex(g.rs, g.re, d, d + h)) {
          const p = g.cs < r ? g.cs : r, v = g.ce > r + c ? g.ce : r + c, m = g.rs < d ? g.rs : d, y = g.re > d + h ? g.re : d + h;
          if (g.cs !== p || g.ce !== v || g.rs !== m || g.re !== y) {
            g.cs = p, g.ce = v, g.rs = m, g.re = y, d = -1, f = [], o = [];
            break;
          }
          n.addClass(s, "se-table-selected-cell");
        }
        h > 0 && o.push({
          index: r,
          cs: c + 1,
          rs: h,
          row: -1
        }), w += s.colSpan - 1;
      }
      f = f.concat(o).sort(function(k, L) {
        return k.index - L.index;
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
    const l = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let n = 0, a = l.length; n < a; n++)
      this.util.removeClass(l[n], "se-table-selected-cell");
    this.util.addClass(e, "se-table-selected-cell"), i._bindOnSelect = i._onCellMultiSelect.bind(this), i._bindOffSelect = i._offCellMultiSelect.bind(this), t ? (i._bindOffShift = (function() {
      this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), i._ref || this.controllersOff();
    }).bind(this), this._wd.addEventListener("keyup", i._bindOffShift, !1), this._wd.addEventListener("mousedown", i._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", i._bindOnSelect, !1), this._wd.addEventListener("mouseup", i._bindOffSelect, !1), i._initBind = i.init.bind(this), this._wd.addEventListener("touchmove", i._initBind, !1);
  },
  onClick_tableController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
    if (t.getAttribute("disabled")) return;
    const i = t.getAttribute("data-command"), l = t.getAttribute("data-value"), n = t.getAttribute("data-option"), a = this.plugins.table;
    if (typeof a._closeSplitMenu == "function" && (a._closeSplitMenu(), i === "onsplit") || !i) return;
    e.preventDefault();
    const u = this.context.table;
    switch (i) {
      case "insert":
      case "delete":
        a.editTable.call(this, l, n);
        break;
      case "header":
        a.toggleHeader.call(this);
        break;
      case "onsplit":
        a.openSplitMenu.call(this);
        break;
      case "split":
        a.splitCells.call(this, l);
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
}, ma = {
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
    let l = this.setSubmenu(e);
    l.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.formatBlock._formatList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang.toolbar, l = e.util.createElement("DIV");
    l.className = "se-submenu se-list-layer se-list-format";
    const n = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], a = !t.formats || t.formats.length === 0 ? n : t.formats;
    let u = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, o = a.length, g, d, b, x, w, k, L; f < o; f++)
      g = a[f], typeof g == "string" && n.indexOf(g) > -1 ? (d = g.toLowerCase(), b = d === "blockquote" ? "range" : d === "pre" ? "free" : "replace", w = /^h/.test(d) ? d.match(/\d+/)[0] : "", x = i["tag_" + (w ? "h" : d)] + w, L = "", k = "") : (d = g.tag.toLowerCase(), b = g.command, x = g.name || d, L = g.class, k = L ? ' class="' + L + '"' : ""), u += '<li><button type="button" class="se-btn-list" data-command="' + b + '" data-value="' + d + '" data-class="' + L + '" title="' + x + '" aria-label="' + x + '"><' + d + k + ">" + x + "</" + d + "></button></li>";
    return u += "</ul></div>", l.innerHTML = u, l;
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
      const n = this.context.formatBlock._formatList, a = e.nodeName.toLowerCase(), u = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let f = 0, o = n.length, g; f < o; f++)
        if (g = n[f], a === g.getAttribute("data-value") && u === g.getAttribute("data-class")) {
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
    const e = this.context.formatBlock, t = e._formatList, i = e.targetText, l = (i.getAttribute("data-value") || "") + (i.getAttribute("data-class") || "");
    if (l !== e.currentFormat) {
      for (let n = 0, a = t.length, u; n < a; n++)
        u = t[n], l === u.getAttribute("data-value") + u.getAttribute("data-class") ? this.util.addClass(u, "active") : this.util.removeClass(u, "active");
      e.currentFormat = l;
    }
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, l = null, n = null, a = "";
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), l = t.getAttribute("data-value"), a = t.getAttribute("data-class"), i) {
        n = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (i) {
      if (i === "range") {
        const u = n.cloneNode(!1);
        this.applyRangeFormatElement(u);
      } else {
        let u = this.getRange(), f = this.getSelectedElementsAndComponents(!1);
        if (f.length === 0 && (u = this.getRange_addLine(u, null), f = this.getSelectedElementsAndComponents(!1), f.length === 0))
          return;
        const o = u.startOffset, g = u.endOffset, d = this.util;
        let b = f[0], x = f[f.length - 1];
        const w = d.getNodePath(u.startContainer, b, null, null), k = d.getNodePath(u.endContainer, x, null, null), L = this.detachList(f, !1);
        L.sc && (b = L.sc), L.ec && (x = L.ec), this.setRange(d.getNodeFromPath(w, b), o, d.getNodeFromPath(k, x), g);
        const s = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const r = s.length - 1;
          let c = s[r].parentNode, h = n.cloneNode(!1);
          const p = h;
          for (let v = r, m, y, C, _, S, D, E = !0; v >= 0; v--)
            if (m = s[v], m !== (s[v + 1] ? s[v + 1].parentNode : null)) {
              if (D = d.isComponent(m), y = D ? "" : m.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), C = d.getParentElement(m, function(B) {
                return B.parentNode === c;
              }), (c !== m.parentNode || D) && (d.isFormatElement(c) ? (c.parentNode.insertBefore(h, c.nextSibling), c = c.parentNode) : (c.insertBefore(h, C ? C.nextSibling : null), c = m.parentNode), _ = h.nextSibling, _ && h.nodeName === _.nodeName && d.isSameAttributes(h, _) && (h.innerHTML += "<BR>" + _.innerHTML, d.removeItem(_)), h = n.cloneNode(!1), E = !0), S = h.innerHTML, h.innerHTML = (E || !y || !S || /<br>$/i.test(y) ? y : y + "<BR>") + S, v === 0) {
                c.insertBefore(h, m), _ = m.nextSibling, _ && h.nodeName === _.nodeName && d.isSameAttributes(h, _) && (h.innerHTML += "<BR>" + _.innerHTML, d.removeItem(_));
                const B = h.previousSibling;
                B && h.nodeName === B.nodeName && d.isSameAttributes(h, B) && (B.innerHTML += "<BR>" + h.innerHTML, d.removeItem(h));
              }
              D || d.removeItem(m), y && (E = !1);
            }
          this.setRange(p, 0, p, 0);
        } else {
          for (let r = 0, c = s.length, h, p; r < c; r++)
            h = s[r], (h.nodeName.toLowerCase() !== l.toLowerCase() || (h.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== a) && !d.isComponent(h) && (p = n.cloneNode(!1), d.copyFormatAttributes(p, h), p.innerHTML = h.innerHTML, h.parentNode.replaceChild(p, h)), r === 0 && (b = p || h), r === c - 1 && (x = p || h), p = null;
          this.setRange(d.getNodeFromPath(w, b), o, d.getNodeFromPath(k, x), g);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, ga = {
  name: "lineHeight",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.lineHeight = {
      _sizeList: null,
      currentSize: -1
    };
    let l = this.setSubmenu(e), n = l.querySelector("ul");
    n.addEventListener("click", this.pickup.bind(e)), i.lineHeight._sizeList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, l = e.util.createElement("DIV");
    l.className = "se-submenu se-list-layer";
    const n = t.lineHeights ? t.lineHeights : [
      { text: "1", value: 1 },
      { text: "1.15", value: 1.15 },
      { text: "1.5", value: 1.5 },
      { text: "2", value: 2 }
    ];
    let a = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let u = 0, f = n.length, o; u < f; u++)
      o = n[u], a += '<li><button type="button" class="se-btn-list" data-value="' + o.value + '" title="' + o.text + '" aria-label="' + o.text + '">' + o.text + "</button></li>";
    return a += "</ul></div>", l.innerHTML = a, l;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.lineHeight, t = e._sizeList, i = this.util.getFormatElement(this.getSelectionNode()), l = i ? i.style.lineHeight + "" : "";
    if (l !== e.currentSize) {
      for (let n = 0, a = t.length; n < a; n++)
        l === t[n].getAttribute("data-value") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentSize = l;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value") || "", i = this.getSelectedElements();
    for (let l = 0, n = i.length; l < n; l++)
      i[l].style.lineHeight = t;
    this.submenuOff(), this.history.push(!1);
  }
}, va = {
  name: "template",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.template = {
      selectedIndex: -1
    };
    let l = this.setSubmenu(e);
    l.querySelector("ul").addEventListener("click", this.pickup.bind(e)), e.initMenuTarget(this.name, t, l), l = null;
  },
  setSubmenu: function(e) {
    const t = e.options.templates;
    if (!t || t.length === 0)
      throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
    const i = e.util.createElement("DIV");
    i.className = "se-list-layer";
    let l = '<div class="se-submenu se-list-inner"><ul class="se-list-basic">';
    for (let n = 0, a = t.length, u; n < a; n++)
      u = t[n], l += '<li><button type="button" class="se-btn-list" data-value="' + n + '" title="' + u.name + '" aria-label="' + u.name + '">' + u.name + "</button></li>";
    return l += "</ul></div>", i.innerHTML = l, i;
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
}, ba = {
  name: "paragraphStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.paragraphStyle = {
      _classList: null
    };
    let l = this.setSubmenu(e);
    l.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.paragraphStyle._classList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
    const l = e.lang.menu, n = {
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
    }, a = !t.paragraphStyles || t.paragraphStyles.length === 0 ? ["spaced", "bordered", "neon"] : t.paragraphStyles;
    let u = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, o = a.length, g, d, b, x; f < o; f++) {
      if (g = a[f], typeof g == "string") {
        const w = n[g.toLowerCase()];
        if (!w) continue;
        g = w;
      }
      d = g.name, b = g.class ? ' class="' + g.class + '"' : "", x = g._class, u += '<li><button type="button" class="se-btn-list' + (x ? " " + x : "") + '" data-value="' + g.class + '" title="' + d + '" aria-label="' + d + '"><div' + b + ">" + d + "</div></button></li>";
    }
    return u += "</ul></div>", i.innerHTML = u, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const t = this.context.paragraphStyle._classList, i = this.util.getFormatElement(this.getSelectionNode());
    for (let l = 0, n = t.length; l < n; l++)
      this.util.hasClass(i, t[l].getAttribute("data-value")) ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !/^UL$/i.test(t.tagName) && (i = t.getAttribute("data-value"), !i); )
      t = t.parentNode;
    if (!i) return;
    let l = this.getSelectedElements();
    if (l.length === 0 && (this.getRange_addLine(this.getRange(), null), l = this.getSelectedElements(), l.length === 0))
      return;
    const n = this.util.hasClass(t, "active") ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
    for (let a = 0, u = l.length; a < u; a++)
      n(l[a], i);
    this.submenuOff(), this.history.push(!1);
  }
}, ya = {
  name: "textStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.textStyle = {
      _styleList: null
    };
    let l = this.setSubmenu(e), n = l.querySelector("ul");
    n.addEventListener("click", this.pickup.bind(e)), i.textStyle._styleList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
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
    }, n = t.textStyles ? t.textStyles : e._w.Object.keys(l);
    let a = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let u = 0, f = n.length, o, g, d, b, x, w, k; u < f; u++) {
      if (o = n[u], b = "", w = "", x = [], typeof o == "string") {
        const L = l[o.toLowerCase()];
        if (!L) continue;
        o = L;
      }
      d = o.name, g = o.tag || "span", k = o._class, o.style && (b += ' style="' + o.style + '"', w += o.style.replace(/:[^;]+(;|$)\s*/g, ","), x.push("style")), o.class && (b += ' class="' + o.class + '"', w += "." + o.class.trim().replace(/\s+/g, ",."), x.push("class")), w = w.replace(/,$/, ""), a += '<li><button type="button" class="se-btn-list' + (k ? " " + k : "") + '" data-command="' + g + '" data-value="' + w + '" title="' + d + '" aria-label="' + d + '"><' + g + b + ">" + d + "</" + g + "></button></li>";
    }
    return a += "</ul></div>", i.innerHTML = a, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, l = this.getSelectionNode();
    for (let n = 0, a = i.length, u, f, o; n < a; n++) {
      u = i[n], f = u.getAttribute("data-value").split(",");
      for (let g = 0, d, b; g < f.length; g++) {
        for (d = l, o = !1; d && !e.isFormatElement(d) && !e.isComponent(d); ) {
          if (d.nodeName.toLowerCase() === u.getAttribute("data-command").toLowerCase() && (b = f[g], /^\./.test(b) ? e.hasClass(d, b.replace(/^\./, "")) : d.style[b])) {
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
    let t = e.target, i = null, l = null;
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), i) {
        l = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!i) return;
    const n = l.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
    n.pop();
    const a = l.classList;
    for (let o = 0, g = a.length; o < g; o++)
      n.push("." + a[o]);
    const u = this.util.hasClass(t, "active") ? null : l.cloneNode(!1), f = u ? null : [l.nodeName];
    this.nodeChange(u, n, f, !0), this.submenuOff();
  }
};
var Si = { exports: {} }, _a = Si.exports, Al;
function Ca() {
  return Al || (Al = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : _a, function(t, i) {
      const l = {
        name: "dialog",
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function(n) {
          const a = n.context;
          a.dialog = {
            kind: "",
            updateModal: !1,
            _closeSignal: !1
          };
          let u = n.util.createElement("DIV");
          u.className = "se-dialog sun-editor-common";
          let f = n.util.createElement("DIV");
          f.className = "se-dialog-back", f.style.display = "none";
          let o = n.util.createElement("DIV");
          o.className = "se-dialog-inner", o.style.display = "none", u.appendChild(f), u.appendChild(o), a.dialog.modalArea = u, a.dialog.back = f, a.dialog.modal = o, a.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(n)), a.dialog.modal.addEventListener("click", this._onClick_dialog.bind(n)), a.element.relative.appendChild(u), u = null, f = null, o = null;
        },
        /**
         * @description Event to control the behavior of closing the dialog
         * @param {MouseEvent} e Event object
         * @private
         */
        _onMouseDown_dialog: function(n) {
          /se-dialog-inner/.test(n.target.className) ? this.context.dialog._closeSignal = !0 : this.context.dialog._closeSignal = !1;
        },
        /**
         * @description Event to close the window when the outside area of the dialog or close button is click
         * @param {MouseEvent} e Event object
         * @private
         */
        _onClick_dialog: function(n) {
          (/close/.test(n.target.getAttribute("data-command")) || this.context.dialog._closeSignal) && this.plugins.dialog.close.call(this);
        },
        /**
         * @description Open a Dialog plugin
         * @param {String} kind Dialog plugin name
         * @param {Boolean} update Whether it will open for update ('image' === this.currentControllerName)
         */
        open: function(n, a) {
          if (this.modalForm) return !1;
          this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = (function(f) {
            /27/.test(f.keyCode) && this.plugins.dialog.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = a, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = n, this.modalForm = this.context[n].modal;
          const u = this.context[n].focusElement;
          typeof this.plugins[n].on == "function" && this.plugins[n].on.call(this, a), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", u && u.focus();
        },
        _bindClose: null,
        /**
         * @description Close a Dialog plugin
         * The plugin's "init" method is called.
         */
        close: function() {
          this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null);
          const n = this.context.dialog.kind;
          this.modalForm.style.display = "none", this.context.dialog.back.style.display = "none", this.context.dialog.modalArea.style.display = "none", this.context.dialog.updateModal = !1, typeof this.plugins[n].init == "function" && this.plugins[n].init.call(this), this.context.dialog.kind = "", this.modalForm = null, this.focus();
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
        value: l
      })), l;
    });
  }(Si)), Si.exports;
}
var wa = /* @__PURE__ */ Ca();
const Xt = /* @__PURE__ */ Te(wa), ka = {
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
    const i = t.querySelector(".se-select-list"), l = this.context.selectMenu.caller[e] = {
      form: i,
      items: [],
      menus: [],
      index: -1,
      item: null,
      clickMethod: null,
      callerName: e
    };
    i.addEventListener("mousedown", this.plugins.selectMenu.onMousedown_list), i.addEventListener("mousemove", this.plugins.selectMenu.onMouseMove_list.bind(this, l)), i.addEventListener("click", this.plugins.selectMenu.onClick_list.bind(this, l));
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
    const i = e.menus, l = i.length, n = e.index = t >= l ? 0 : t < 0 ? l - 1 : t;
    for (let a = 0; a < l; a++)
      a === n ? this.util.addClass(i[a], "active") : this.util.removeClass(i[a], "active");
    e.item = e.items[n];
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
}, Cn = {
  name: "anchor",
  add: function(e) {
    e.addModule([ka]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, i = e.options.linkRel, l = (e.options.linkRelDefault.default || "").split(" "), n = e.icons, a = e.util.createElement("DIV");
    let u = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + n.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + n.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + n.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (i.length > 0) {
      u += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let f = 0, o = i.length, g; f < o; f++)
        g = i[f], u += '<li><button type="button" class="se-btn-list' + (l.indexOf(g) > -1 ? " se-checked" : "") + '" data-command="' + g + '" title="' + g + '" aria-label="' + g + '"><span class="se-svg">' + n.checked + "</span>" + g + "</button></li>";
      u += "</ul></div></div></div>";
    }
    return u += "</div></div>", a.innerHTML = u, a;
  },
  initEvent: function(e, t) {
    const i = this.plugins.anchor, l = this.context.anchor.caller[e] = {
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
    const n = this.context.selectMenu.caller[e];
    this.options.linkRel.length > 0 && (l.relButton = t.querySelector(".se-anchor-rel-btn"), l.relList = t.querySelector(".se-list-layer"), l.relPreview = t.querySelector(".se-anchor-rel-preview"), l.relButton.addEventListener("click", i.onClick_relButton.bind(this, l)), l.relList.addEventListener("click", i.onClick_relList.bind(this, l))), l.newWindowCheck.addEventListener("change", i.onChange_newWindowCheck.bind(this, l)), l.downloadCheck.addEventListener("change", i.onChange_downloadCheck.bind(this, l)), l.anchorText.addEventListener("input", i.onChangeAnchorText.bind(this, l)), l.urlInput.addEventListener("input", i.onChangeUrlInput.bind(this, l)), l.urlInput.addEventListener("keydown", i.onKeyDownUrlInput.bind(this, n)), l.urlInput.addEventListener("focus", i.onFocusUrlInput.bind(this, l, n)), l.urlInput.addEventListener("blur", i.onBlurUrlInput.bind(this, n)), l.bookmarkButton.addEventListener("click", i.onClick_bookmarkButton.bind(this, l));
  },
  on: function(e, t) {
    const i = this.plugins.anchor;
    if (!t)
      i.init.call(this, e), e.anchorText.value = this.getSelection().toString().trim(), e.newWindowCheck.checked = this.options.linkTargetNewWindow;
    else if (e.linkAnchor) {
      this.context.dialog.updateModal = !0;
      const l = e.linkAnchor.getAttribute("href");
      e.linkValue = e.preview.textContent = e.urlInput.value = i.selfPathBookmark.call(this, l) ? l.substr(l.lastIndexOf("#")) : l, e.anchorText.value = e.linkAnchor.textContent, e.newWindowCheck.checked = !!/_blank/i.test(e.linkAnchor.target), e.downloadCheck.checked = e.linkAnchor.download;
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
      const i = e.relButton, l = e.relList;
      this.util.addClass(i, "active"), l.style.visibility = "hidden", l.style.display = "block", this.options.rtl ? l.style.left = i.offsetLeft - l.offsetWidth - 1 + "px" : l.style.left = i.offsetLeft + i.offsetWidth + 1 + "px", l.style.top = i.offsetTop + i.offsetHeight / 2 - l.offsetHeight / 2 + "px", l.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(n, a, u) {
        u && (n.relButton.contains(u.target) || n.relList.contains(u.target)) || (this.util.removeClass(a, "active"), n.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, i), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const i = t.target, l = i.getAttribute("data-command");
    if (!l) return;
    const n = e.currentRel, a = this.util.toggleClass(i, "se-checked"), u = n.indexOf(l);
    a ? u === -1 && n.push(l) : u > -1 && n.splice(u, 1), e.relPreview.title = e.relPreview.textContent = n.join(" ");
  },
  setRel: function(e, t) {
    const i = e.relList, l = e.currentRel = t ? t.split(" ") : [];
    if (!i) return;
    const n = i.querySelectorAll("button");
    for (let a = 0, u = n.length, f; a < u; a++)
      f = n[a].getAttribute("data-command"), l.indexOf(f) > -1 ? this.util.addClass(n[a], "se-checked") : this.util.removeClass(n[a], "se-checked");
    e.relPreview.title = e.relPreview.textContent = l.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const l = this.util.getListChildren(this.context.element.wysiwyg, function(f) {
      return /h[1-6]/i.test(f.nodeName);
    });
    if (l.length === 0) return;
    const n = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), a = [];
    let u = "";
    for (let f = 0, o = l.length, g; f < o; f++)
      g = l[f], n.test(g.textContent) && (a.push(g), u += '<li class="se-select-item" data-index="' + f + '">' + g.textContent + "</li>");
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
    const i = e.preview, l = this.options.linkProtocol, n = this.options.linkNoPrefix, a = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(l) === 0, u = l ? this._w.RegExp("^" + this.util.escapeStringRegexp(t.substr(0, l.length))).test(l) : !1;
    t = e.linkValue = i.textContent = t ? n ? t : l && !a && !u ? l + t : a ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
  },
  setCtx: function(e, t) {
    e && (t.linkAnchor = e, t.linkValue = e.href, t.currentRel = e.rel.split(" "));
  },
  updateAnchor: function(e, t, i, l, n) {
    !this.plugins.anchor.selfPathBookmark.call(this, t) && l.downloadCheck.checked ? e.setAttribute("download", i || t) : e.removeAttribute("download"), l.newWindowCheck.checked ? e.target = "_blank" : e.removeAttribute("target");
    const a = l.currentRel.join(" ");
    a ? e.rel = a : e.removeAttribute("rel"), e.href = t, n ? e.children.length === 0 && (e.textContent = "") : e.textContent = i;
  },
  createAnchor: function(e, t) {
    if (e.linkValue.length === 0) return null;
    const i = e.linkValue, l = e.anchorText, n = l.value.length === 0 ? i : l.value, a = e.linkAnchor || this.util.createElement("A");
    return this.plugins.anchor.updateAnchor.call(this, a, i, n, e, t), e.linkValue = e.preview.textContent = e.urlInput.value = e.anchorText.value = "", a;
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
    const l = t.split(" ");
    for (let n = 0, a = l.length, u; n < a; n++)
      u = i.indexOf(l[n]), u === -1 && i.push(l[n]);
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
}, xa = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([Xt, Cn]);
    const t = e.context, i = t.link = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      _linkAnchor: null,
      anchorCtx: null
    };
    let l = this.setDialog(e);
    i.modal = l;
    let n = this.setController_LinkButton(e);
    i.linkController = n, l.querySelector("form").addEventListener("submit", this.submit.bind(e)), n.addEventListener("click", this.onClick_linkController.bind(e)), t.dialog.modal.appendChild(l), t.element.relative.appendChild(n), e.plugins.anchor.initEvent.call(e, "link", l), i.focusElement = t.anchor.caller.link.urlInput, l = null, n = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), l = e.icons;
    i.className = "se-dialog-content", i.style.display = "none";
    let n = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + l.cancel + '</button><span class="se-modal-title">' + t.dialogBox.linkBox.title + "</span></div>" + e.context.anchor.forms.innerHTML + '<div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>";
    return i.innerHTML = n, i;
  },
  /** modify controller button */
  setController_LinkButton: function(e) {
    const t = e.lang, i = e.icons, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-link", l.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + i.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.unlink + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", l;
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
          const l = this.util.createElement(i[0].nodeName);
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
        const i = this.util.getChildElement(this.context.link._linkAnchor, function(n) {
          return n.childNodes.length === 0 || n.nodeType === 3;
        }, !1), l = this.util.getChildElement(this.context.link._linkAnchor, function(n) {
          return n.childNodes.length === 0 || n.nodeType === 3;
        }, !0);
        this.setRange(i, 0, l, l.textContent.length), this.nodeChange(null, null, ["A"], !1);
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
var Ti = { exports: {} }, Sa = Ti.exports, Il;
function Ta() {
  return Il || (Il = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Sa, function(t, i) {
      const l = {
        name: "component",
        /**
         * @description Create a container for the resizing component and insert the element.
         * @param {Element} cover Cover element (FIGURE)
         * @param {String} className Class name of container (fixed: se-component)
         * @returns {Element} Created container element
         */
        set_container: function(n, a) {
          const u = this.util.createElement("DIV");
          return u.className = "se-component " + a, u.appendChild(n), u;
        },
        /**
         * @description Cover the target element with a FIGURE element.
         * @param {Element} element Target element
         */
        set_cover: function(n) {
          const a = this.util.createElement("FIGURE");
          return a.appendChild(n), a;
        },
        /**
         * @description Return HTML string of caption(FIGCAPTION) element
         * @returns {String}
         */
        create_caption: function() {
          const n = this.util.createElement("FIGCAPTION");
          return n.innerHTML = "<div>" + this.lang.dialogBox.caption + "</div>", n;
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
        value: l
      })), l;
    });
  }(Ti)), Ti.exports;
}
var Ea = /* @__PURE__ */ Ta();
const ji = /* @__PURE__ */ Te(Ea);
var Ei = { exports: {} }, La = Ei.exports, Dl;
function Ba() {
  return Dl || (Dl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : La, function(t, i) {
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
        add: function(n) {
          const a = n.icons, u = n.context;
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
          let f = this.setController_resize(n);
          u.resizing.resizeContainer = f, u.resizing.resizeDiv = f.querySelector(".se-modal-resize"), u.resizing.resizeDot = f.querySelector(".se-resize-dot"), u.resizing.resizeDisplay = f.querySelector(".se-resize-display");
          let o = this.setController_button(n);
          u.resizing.resizeButton = o;
          let g = u.resizing.resizeHandles = u.resizing.resizeDot.querySelectorAll("span");
          u.resizing.resizeButtonGroup = o.querySelector("._se_resizing_btn_group"), u.resizing.rotationButtons = o.querySelectorAll("._se_resizing_btn_group ._se_rotation"), u.resizing.percentageButtons = o.querySelectorAll("._se_resizing_btn_group ._se_percentage"), u.resizing.alignMenu = o.querySelector(".se-resizing-align-list"), u.resizing.alignMenuList = u.resizing.alignMenu.querySelectorAll("button"), u.resizing.alignButton = o.querySelector("._se_resizing_align_button"), u.resizing.autoSizeButton = o.querySelector("._se_resizing_btn_group ._se_auto_size"), u.resizing.captionButton = o.querySelector("._se_resizing_caption_button"), f.addEventListener("mousedown", function(d) {
            d.preventDefault();
          }), g[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), g[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), g[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), g[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), g[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), g[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), g[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), g[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), o.addEventListener("click", this.onClick_resizeButton.bind(n)), u.element.relative.appendChild(f), u.element.relative.appendChild(o), f = null, o = null, g = null;
        },
        /** resize controller, button (image, iframe, video) */
        setController_resize: function(n) {
          const a = n.util.createElement("DIV");
          return a.className = "se-controller se-resizing-container", a.style.display = "none", a.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', a;
        },
        setController_button: function(n) {
          const a = n.lang, u = n.icons, f = n.util.createElement("DIV");
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
        _module_getSizeX: function(n, a, u, f) {
          return a || (a = n._element), u || (u = n._cover), f || (f = n._container), a ? /%$/.test(a.style.width) ? (f && this.util.getNumber(f.style.width, 2) || 100) + "%" : a.style.width : "";
        },
        /**
         * @description Gets the height size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeY: function(n, a, u, f) {
          return a || (a = n._element), u || (u = n._cover), f || (f = n._container), !f || !u ? a && a.style.height || "" : this.util.getNumber(u.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? u.style.height : !/%$/.test(a.style.height) || !/%$/.test(a.style.width) ? a.style.height : (f && this.util.getNumber(f.style.height, 2) || 100) + "%";
        },
        /**
         * @description Called at the "openModify" to put the size of the current target into the size input element.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Object} pluginObj Plugin object
         */
        _module_setModifyInputSize: function(n, a) {
          const u = n._onlyPercentage && this.context.resizing._rotateVertical;
          n.proportion.checked = n._proportionChecked = n._element.getAttribute("data-proportion") !== "false";
          let f = u ? "" : this.plugins.resizing._module_getSizeX.call(this, n);
          if (f === n._defaultSizeX && (f = ""), n._onlyPercentage && (f = this.util.getNumber(f, 2)), n.inputX.value = f, a.setInputSize.call(this, "x"), !n._onlyPercentage) {
            let o = u ? "" : this.plugins.resizing._module_getSizeY.call(this, n);
            o === n._defaultSizeY && (o = ""), n._onlyPercentage && (o = this.util.getNumber(o, 2)), n.inputY.value = o;
          }
          n.inputX.disabled = !!u, n.inputY.disabled = !!u, n.proportion.disabled = !!u, a.setRatio.call(this);
        },
        /**
         * @description It is called in "setInputSize" (input tag keyupEvent), 
         * checks the value entered in the input tag, 
         * calculates the ratio, and sets the calculated value in the input tag of the opposite size.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {String} xy 'x': width, 'y': height
         */
        _module_setInputSize: function(n, a) {
          if (n._onlyPercentage) {
            a === "x" && n.inputX.value > 100 && (n.inputX.value = 100);
            return;
          }
          if (n.proportion.checked && n._ratio && /\d/.test(n.inputX.value) && /\d/.test(n.inputY.value)) {
            const u = n.inputX.value.replace(/\d+|\./g, "") || n.sizeUnit, f = n.inputY.value.replace(/\d+|\./g, "") || n.sizeUnit;
            if (u !== f) return;
            const o = u === "%" ? 2 : 0;
            a === "x" ? n.inputY.value = this.util.getNumber(n._ratioY * this.util.getNumber(n.inputX.value, o), o) + f : n.inputX.value = this.util.getNumber(n._ratioX * this.util.getNumber(n.inputY.value, o), o) + u;
          }
        },
        /**
         * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
         * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_setRatio: function(n) {
          const a = n.inputX.value, u = n.inputY.value;
          if (n.proportion.checked && /\d+/.test(a) && /\d+/.test(u)) {
            const f = a.replace(/\d+|\./g, "") || n.sizeUnit, o = u.replace(/\d+|\./g, "") || n.sizeUnit;
            if (f !== o)
              n._ratio = !1;
            else if (!n._ratio) {
              const g = this.util.getNumber(a, 0), d = this.util.getNumber(u, 0);
              n._ratio = !0, n._ratioX = g / d, n._ratioY = d / g;
            }
          } else
            n._ratio = !1;
        },
        /**
         * @description Revert size of element to origin size (plugin._origin_w, plugin._origin_h)
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_sizeRevert: function(n) {
          n._onlyPercentage ? n.inputX.value = n._origin_w > 100 ? 100 : n._origin_w : (n.inputX.value = n._origin_w, n.inputY.value = n._origin_h);
        },
        /**
         * @description Save the size data (element.setAttribute("data-size"))
         * Used at the "setSize" method
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_saveCurrentSize: function(n) {
          const a = this.plugins.resizing._module_getSizeX.call(this, n), u = this.plugins.resizing._module_getSizeY.call(this, n);
          n._element.setAttribute("width", a.replace("px", "")), n._element.setAttribute("height", u.replace("px", "")), n._element.setAttribute("data-size", a + "," + u), n._videoRatio && (n._videoRatio = u);
        },
        /**
         * @description Call the resizing module
         * @param {Element} targetElement Resizing target element
         * @param {string} plugin Plugin name
         * @returns {Object} Size of resizing div {w, h, t, l}
         */
        call_controller_resize: function(n, a) {
          const u = this.context.resizing, f = this.context[a];
          u._resize_plugin = a;
          const o = u.resizeContainer, g = u.resizeDiv, d = this.util.getOffset(n, this.context.element.wysiwygFrame), b = u._rotateVertical = /^(90|270)$/.test(Math.abs(n.getAttribute("data-rotate")).toString()), x = b ? n.offsetHeight : n.offsetWidth, w = b ? n.offsetWidth : n.offsetHeight, k = d.top, L = d.left - this.context.element.wysiwygFrame.scrollLeft;
          o.style.top = k + "px", o.style.left = L + "px", o.style.width = x + "px", o.style.height = w + "px", g.style.top = "0px", g.style.left = "0px", g.style.width = x + "px", g.style.height = w + "px";
          let s = n.getAttribute("data-align") || "basic";
          s = s === "none" ? "basic" : s;
          const r = this.util.getParentElement(n, this.util.isComponent), c = this.util.getParentElement(n, "FIGURE"), h = this.plugins.resizing._module_getSizeX.call(this, f, n, c, r) || "auto", p = f._onlyPercentage && a === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, f, n, c, r) || "auto");
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
            for (let B = 0, R = E.length; B < R; B++)
              E[B].getAttribute("data-value") === s ? this.util.addClass(E[B], "on") : this.util.removeClass(E[B], "on");
          }
          const y = u.percentageButtons, C = /%$/.test(n.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
          for (let E = 0, B = y.length; E < B; E++)
            y[E].getAttribute("data-value") === C ? this.util.addClass(y[E], "active") : this.util.removeClass(y[E], "active");
          f._captionShow ? (u.captionButton.style.display = "", this.util.getChildElement(n.parentNode, "figcaption") ? (this.util.addClass(u.captionButton, "active"), f._captionChecked = !0) : (this.util.removeClass(u.captionButton, "active"), f._captionChecked = !1)) : u.captionButton.style.display = "none", o.style.display = "block";
          const _ = { left: 0, top: 50 };
          this.options.iframe && (_.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, _.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(u.resizeButton, o, "bottom", _);
          const S = function() {
            this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
          };
          this.controllersOn(o, u.resizeButton, S.bind(this), n, a), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), u._resize_w = x, u._resize_h = w;
          const D = (n.getAttribute("origin-size") || "").split(",");
          return u._origin_w = D[0] || n.naturalWidth, u._origin_h = D[1] || n.naturalHeight, {
            w: x,
            h: w,
            t: k,
            l: L
          };
        },
        _closeAlignMenu: null,
        /**
         * @description Open align submenu of module
         */
        openAlignMenu: function() {
          const n = this.context.resizing.alignButton;
          this.util.addClass(n, "on"), this.context.resizing.alignMenu.style.top = n.offsetTop + n.offsetHeight + "px", this.context.resizing.alignMenu.style.left = n.offsetLeft - n.offsetWidth / 2 + "px", this.context.resizing.alignMenu.style.display = "block", this.plugins.resizing._closeAlignMenu = (function() {
            this.util.removeClass(this.context.resizing.alignButton, "on"), this.context.resizing.alignMenu.style.display = "none", this.removeDocEvent("click", this.plugins.resizing._closeAlignMenu), this.plugins.resizing._closeAlignMenu = null;
          }).bind(this), this.addDocEvent("click", this.plugins.resizing._closeAlignMenu);
        },
        /**
         * @description Click event of resizing toolbar
         * Performs the action of the clicked toolbar button.
         * @param {MouseEvent} e Event object
         */
        onClick_resizeButton: function(n) {
          n.stopPropagation();
          const a = n.target, u = a.getAttribute("data-command") || a.parentNode.getAttribute("data-command");
          if (!u) return;
          const f = a.getAttribute("data-value") || a.parentNode.getAttribute("data-value"), o = this.context.resizing._resize_plugin, g = this.context[o], d = g._element, b = this.plugins[o];
          if (n.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), u === "onalign"))) {
            switch (u) {
              case "auto":
                this.plugins.resizing.resetTransform.call(this, d), b.setAutoSize.call(this), this.selectComponent(d, o);
                break;
              case "percent":
                let x = this.plugins.resizing._module_getSizeY.call(this, g);
                if (this.context.resizing._rotateVertical) {
                  const v = d.getAttribute("data-percentage");
                  v && (x = v.split(",")[1]);
                }
                this.plugins.resizing.resetTransform.call(this, d), b.setPercentSize.call(this, f * 100, this.util.getNumber(x, 0) === null || !/%$/.test(x) ? "" : x), this.selectComponent(d, o);
                break;
              case "mirror":
                const w = d.getAttribute("data-rotate") || "0";
                let k = d.getAttribute("data-rotateX") || "", L = d.getAttribute("data-rotateY") || "";
                f === "h" && !this.context.resizing._rotateVertical || f === "v" && this.context.resizing._rotateVertical ? L = L ? "" : "180" : k = k ? "" : "180", d.setAttribute("data-rotateX", k), d.setAttribute("data-rotateY", L), this.plugins.resizing._setTransForm(d, w, k, L);
                break;
              case "rotate":
                const s = this.context.resizing, r = d.getAttribute("data-rotate") * 1 + f * 1, c = this._w.Math.abs(r) >= 360 ? 0 : r;
                d.setAttribute("data-rotate", c), s._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(c).toString()), this.plugins.resizing.setTransformSize.call(this, d, null, null), this.selectComponent(d, o);
                break;
              case "onalign":
                this.plugins.resizing.openAlignMenu.call(this);
                return;
              case "align":
                const h = f === "basic" ? "none" : f;
                b.setAlign.call(this, h, null, null, null), this.selectComponent(d, o);
                break;
              case "caption":
                const p = !g._captionChecked;
                if (b.openModify.call(this, !0), g._captionChecked = g.captionCheckEl.checked = p, b.update_image.call(this, !1, !1, !1), p) {
                  const v = this.util.getChildElement(g._caption, function(m) {
                    return m.nodeType === 3;
                  });
                  v ? this.setRange(v, 0, v, v.textContent.length) : g._caption.focus(), this.controllersOff();
                } else
                  this.selectComponent(d, o), b.openModify.call(this, !0);
                break;
              case "revert":
                b.setOriginSize.call(this), this.selectComponent(d, o);
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
        resetTransform: function(n) {
          const a = (n.getAttribute("data-size") || n.getAttribute("data-origin") || "").split(",");
          this.context.resizing._rotateVertical = !1, n.style.maxWidth = "", n.style.transform = "", n.style.transformOrigin = "", n.setAttribute("data-rotate", ""), n.setAttribute("data-rotateX", ""), n.setAttribute("data-rotateY", ""), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, a[0] ? a[0] : "auto", a[1] ? a[1] : "", !0);
        },
        /**
         * @description Set the transform style (rotation) of the element.
         * @param {Element} element Target element
         * @param {Number|null} width Element's width size
         * @param {Number|null} height Element's height size
         */
        setTransformSize: function(n, a, u) {
          let f = n.getAttribute("data-percentage");
          const o = this.context.resizing._rotateVertical, g = n.getAttribute("data-rotate") * 1;
          let d = "";
          if (f && !o)
            f = f.split(","), f[0] === "auto" && f[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, f[0], f[1]);
          else {
            const b = this.util.getParentElement(n, "FIGURE"), x = a || n.offsetWidth, w = u || n.offsetHeight, k = (o ? w : x) + "px", L = (o ? x : w) + "px";
            if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, x + "px", w + "px", !0), b.style.width = k, b.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : L, o) {
              let s = x / 2 + "px " + x / 2 + "px 0", r = w / 2 + "px " + w / 2 + "px 0";
              d = g === 90 || g === -270 ? r : s;
            }
          }
          n.style.transformOrigin = d, this.plugins.resizing._setTransForm(n, g.toString(), n.getAttribute("data-rotateX") || "", n.getAttribute("data-rotateY") || ""), o ? n.style.maxWidth = "none" : n.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, n);
        },
        _setTransForm: function(n, a, u, f) {
          let o = (n.offsetWidth - n.offsetHeight) * (/-/.test(a) ? 1 : -1), g = "";
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
          a % 180 === 0 && (n.style.maxWidth = ""), n.style.transform = "rotate(" + a + "deg)" + (u ? " rotateX(" + u + "deg)" : "") + (f ? " rotateY(" + f + "deg)" : "") + (g ? " translate" + g + "(" + o + "px)" : "");
        },
        /**
         * @description The position of the caption is set automatically.
         * @param {Element} element Target element (not caption element)
         */
        setCaptionPosition: function(n) {
          const a = this.util.getChildElement(this.util.getParentElement(n, "FIGURE"), "FIGCAPTION");
          a && (a.style.marginTop = (this.context.resizing._rotateVertical ? n.offsetWidth - n.offsetHeight : 0) + "px");
        },
        /**
         * @description Mouse down event of resize handles
         * @param {MouseEvent} e Event object 
         */
        onMouseDown_resize_handle: function(n) {
          n.stopPropagation(), n.preventDefault();
          const a = this.context.resizing, u = a._resize_direction = n.target.classList[0];
          a._resizeClientX = n.clientX, a._resizeClientY = n.clientY, this.context.element.resizeBackground.style.display = "block", a.resizeButton.style.display = "none", a.resizeDiv.style.float = /l/.test(u) ? "right" : /r/.test(u) ? "left" : "none";
          const f = (function(d) {
            if (d.type === "keydown" && d.keyCode !== 27) return;
            const b = a._isChange;
            a._isChange = !1, this.removeDocEvent("mousemove", o), this.removeDocEvent("mouseup", f), this.removeDocEvent("keydown", f), d.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, u), b && this.history.push(!1));
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
        resizing_element: function(n, a, u, f) {
          const o = f.clientX, g = f.clientY;
          let d = u._element_w, b = u._element_h;
          const x = u._element_w + (/r/.test(a) ? o - n._resizeClientX : n._resizeClientX - o), w = u._element_h + (/b/.test(a) ? g - n._resizeClientY : n._resizeClientY - g), k = u._element_h / u._element_w * x;
          /t/.test(a) && (n.resizeDiv.style.top = u._element_h - (/h/.test(a) ? w : k) + "px"), /l/.test(a) && (n.resizeDiv.style.left = u._element_w - x + "px"), /r|l/.test(a) && (n.resizeDiv.style.width = x + "px", d = x), /^(t|b)[^h]$/.test(a) ? (n.resizeDiv.style.height = k + "px", b = k) : /^(t|b)h$/.test(a) && (n.resizeDiv.style.height = w + "px", b = w), n._resize_w = d, n._resize_h = b, this.util.changeTxt(n.resizeDisplay, this._w.Math.round(d) + " x " + this._w.Math.round(b)), n._isChange = !0;
        },
        /**
         * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
         * Called at the mouse-up event registered in "onMouseDown_resize_handle".
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
         */
        cancel_controller_resize: function(n) {
          const a = this.context.resizing._rotateVertical;
          this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
          let u = this._w.Math.round(a ? this.context.resizing._resize_h : this.context.resizing._resize_w), f = this._w.Math.round(a ? this.context.resizing._resize_w : this.context.resizing._resize_h);
          if (!a && !/%$/.test(u)) {
            const d = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
            this.util.getNumber(u, 0) > d && (f = this._w.Math.round(f / u * d), u = d);
          }
          const o = this.context.resizing._resize_plugin;
          this.plugins[o].setSize.call(this, u, f, !1, n), a && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, u, f), this.selectComponent(this.context[o]._element, o);
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
        value: l
      })), l;
    });
  }(Ei)), Ei.exports;
}
var za = /* @__PURE__ */ Ba();
const wn = /* @__PURE__ */ Te(za);
var Li = { exports: {} }, Na = Li.exports, Ml;
function Ra() {
  return Ml || (Ml = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Na, function(t, i) {
      const l = {
        name: "fileManager",
        _xmlHttp: null,
        _checkMediaComponent: function(n) {
          return /IMG/i.test(n) ? !/FIGURE/i.test(n.parentElement.nodeName) || !/FIGURE/i.test(n.parentElement.parentElement.nodeName) : !0;
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
        upload: function(n, a, u, f, o) {
          this.showLoading();
          const g = this.plugins.fileManager, d = g._xmlHttp = this.util.getXMLHttpRequest();
          if (d.onreadystatechange = g._callBackUpload.bind(this, d, f, o), d.open("post", n, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
            for (let b in a)
              d.setRequestHeader(b, a[b]);
          d.send(u);
        },
        _callBackUpload: function(n, a, u) {
          if (n.readyState === 4)
            if (n.status === 200)
              try {
                a(n);
              } catch (f) {
                throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + f.message + '"');
              } finally {
                this.closeLoading();
              }
            else {
              this.closeLoading();
              const f = n.responseText ? JSON.parse(n.responseText) : n;
              if (typeof u != "function" || u("", f, this)) {
                const o = "[SUNEDITOR.fileManager.upload.serverException] status: " + n.status + ", response: " + (f.errorMessage || n.responseText);
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
        checkInfo: function(n, a, u, f, o) {
          let g = [];
          for (let r = 0, c = a.length; r < c; r++)
            g = g.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(a[r] + ':not([data-se-embed="true"])')));
          const d = this.plugins.fileManager, b = this.context[n], x = b._infoList, w = d.setInfo.bind(this);
          if (g.length === x.length)
            if (this._componentsInfoReset) {
              for (let r = 0, c = g.length; r < c; r++)
                w(n, g[r], u, null, o);
              return;
            } else {
              let r = !1;
              for (let c = 0, h = x.length, p; c < h; c++)
                if (p = x[c], g.filter(function(v) {
                  return p.src === v.src && p.index.toString() === v.getAttribute("data-index");
                }).length === 0) {
                  r = !0;
                  break;
                }
              if (!r) return;
            }
          const k = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = n);
          const L = [], s = [];
          for (let r = 0, c = x.length; r < c; r++)
            s[r] = x[r].index;
          for (b.__updateTags = g; g.length > 0; ) {
            const r = g.shift();
            !this.util.getParentElement(r, this.util.isMediaComponent) || !d._checkMediaComponent(r) ? (L.push(b._infoIndex), f(r)) : !r.getAttribute("data-index") || s.indexOf(r.getAttribute("data-index") * 1) < 0 ? (L.push(b._infoIndex), r.removeAttribute("data-index"), w(n, r, u, null, o)) : L.push(r.getAttribute("data-index") * 1);
          }
          for (let r = 0, c; r < x.length; r++)
            c = x[r].index, !(L.indexOf(c) > -1) && (x.splice(r, 1), typeof u == "function" && u(null, c, "delete", null, 0, this), r--);
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
        setInfo: function(n, a, u, f, o) {
          const g = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = n);
          const d = this.plugins[n], b = this.context[n], x = b._infoList;
          let w = a.getAttribute("data-index"), k = null, L = "";
          if (f || (f = {
            name: a.getAttribute("data-file-name") || (typeof a.src == "string" ? a.src.split("/").pop() : ""),
            size: a.getAttribute("data-file-size") || 0
          }), !w || this._componentsInfoInit)
            L = "create", w = b._infoIndex++, a.setAttribute("data-index", w), a.setAttribute("data-file-name", f.name), a.setAttribute("data-file-size", f.size), k = {
              src: a.src,
              index: w * 1,
              name: f.name,
              size: f.size
            }, x.push(k);
          else {
            L = "update", w *= 1;
            for (let s = 0, r = x.length; s < r; s++)
              if (w === x[s].index) {
                k = x[s];
                break;
              }
            k || (w = b._infoIndex++, k = { index: w }, x.push(k)), k.src = a.src, k.name = a.getAttribute("data-file-name"), k.size = a.getAttribute("data-file-size") * 1;
          }
          if (k.element = a, k.delete = d.destroy.bind(this, a), k.select = (function(s) {
            s.scrollIntoView(!0), this._w.setTimeout(d.select.bind(this, s));
          }).bind(this, a), o) {
            if (!a.getAttribute("origin-size") && a.naturalWidth && a.setAttribute("origin-size", a.naturalWidth + "," + a.naturalHeight), !a.getAttribute("data-origin")) {
              const s = this.util.getParentElement(a, this.util.isMediaComponent), r = this.util.getParentElement(a, "FIGURE"), c = this.plugins.resizing._module_getSizeX.call(this, b, a, r, s), h = this.plugins.resizing._module_getSizeY.call(this, b, a, r, s);
              a.setAttribute("data-origin", c + "," + h), a.setAttribute("data-size", c + "," + h);
            }
            if (!a.style.width) {
              const s = (a.getAttribute("data-size") || a.getAttribute("data-origin") || "").split(",");
              d.onModifyMode.call(this, a, null), d.applySize.call(this, s[0], s[1]);
            }
            this.context.resizing._resize_plugin = g;
          }
          typeof u == "function" && u(a, w, L, k, --b._uploadFileLength < 0 ? 0 : b._uploadFileLength, this);
        },
        /**
         * @description Delete info object at "_infoList"
         * @param {String} pluginName Plugin name 
         * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        deleteInfo: function(n, a, u) {
          if (a >= 0) {
            const f = this.context[n]._infoList;
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
        resetInfo: function(n, a) {
          const u = this.context[n];
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
        value: l
      })), l;
    });
  }(Li)), Li.exports;
}
var Aa = /* @__PURE__ */ Ra();
const Gi = /* @__PURE__ */ Te(Aa), Ia = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([Xt, Cn, ji, wn, Gi]);
    const t = e.options, i = e.context, l = i.image = {
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
    let n = this.setDialog(e);
    l.modal = n, l.imgInputFile = n.querySelector("._se_image_file"), l.imgUrlFile = n.querySelector("._se_image_url"), l.focusElement = l.imgInputFile || l.imgUrlFile, l.altText = n.querySelector("._se_image_alt"), l.captionCheckEl = n.querySelector("._se_image_check_caption"), l.previewSrc = n.querySelector("._se_tab_content_image .se-link-preview"), n.querySelector(".se-dialog-tabs").addEventListener("click", this.openTab.bind(e)), n.querySelector("form").addEventListener("submit", this.submit.bind(e)), l.imgInputFile && n.querySelector(".se-file-remove").addEventListener("click", this._removeSelectedFiles.bind(l.imgInputFile, l.imgUrlFile, l.previewSrc)), l.imgUrlFile && l.imgUrlFile.addEventListener("input", this._onLinkPreview.bind(l.previewSrc, l._v_src, t.linkProtocol)), l.imgInputFile && l.imgUrlFile && l.imgInputFile.addEventListener("change", this._fileInputChange.bind(l));
    const a = n.querySelector(".__se__gallery");
    a && a.addEventListener("click", this._openGallery.bind(e)), l.proportion = {}, l.inputX = {}, l.inputY = {}, t.imageResizing && (l.proportion = n.querySelector("._se_image_check_proportion"), l.inputX = n.querySelector("._se_image_size_x"), l.inputY = n.querySelector("._se_image_size_y"), l.inputX.value = t.imageWidth, l.inputY.value = t.imageHeight, l.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), l.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), l.inputX.addEventListener("change", this.setRatio.bind(e)), l.inputY.addEventListener("change", this.setRatio.bind(e)), l.proportion.addEventListener("change", this.setRatio.bind(e)), n.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(n), e.plugins.anchor.initEvent.call(e, "image", n.querySelector("._se_tab_content_url")), l.anchorCtx = e.context.anchor.caller.image, n = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, l = e.util.createElement("DIV");
    l.className = "se-dialog-content se-dialog-image", l.style.display = "none";
    let n = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + i.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + i.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
    if (t.imageFileInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="' + t.imageAccept + '"' + (t.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.imageUrlInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url _se_image_url" type="text" />' + (t.imageGalleryUrl && e.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + i.toolbar.imageGallery + '" aria-label="' + i.toolbar.imageGallery + '">' + e.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), n += '</div><div class="se-dialog-form"><label>' + i.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', t.imageResizing) {
      const a = t.imageSizeOnlyPercentage, u = a ? ' style="display: none !important;"' : "", f = t.imageHeightShow ? "" : ' style="display: none !important;"';
      n += '<div class="se-dialog-form">', a || !t.imageHeightShow ? n += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : n += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", n += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (a ? ' type="number" min="1"' : 'type="text"') + (a ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + f + ">" + (a ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + u + (a ? ' max="100"' : "") + f + "/><label" + u + f + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
    }
    return n += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + i.dialogBox.caption + '</label></div></div></div><div class="_se_tab_content _se_tab_content_url" style="display: none">' + e.context.anchor.forms.innerHTML + '</div><div class="se-dialog-footer"><div' + (t.imageAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", l.innerHTML = n, l;
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
    const l = i.target.value.trim();
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
    const t = e || this.context.image._element, i = this.util.getParentElement(t, this.util.isMediaComponent) || t, l = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onImageDeleteBefore == "function" && this.functions.onImageDeleteBefore(t, i, l, this) === !1) return;
    let n = i.previousElementSibling || i.nextElementSibling;
    const a = i.parentNode;
    this.util.removeItem(i), this.plugins.image.init.call(this), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(u) {
      return u.childNodes.length === 0;
    }, null), this.focusEdge(n), this.plugins.fileManager.deleteInfo.call(this, "image", l, this.functions.onImageUpload), this.history.push(!1);
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
    const l = i.getAttribute("data-tab-link"), n = "_se_tab_content";
    let a, u, f;
    for (u = t.getElementsByClassName(n), a = 0; a < u.length; a++)
      u[a].style.display = "none";
    for (f = t.getElementsByClassName("_se_tab_link"), a = 0; a < f.length; a++)
      this.util.removeClass(f[a], "active");
    return t.querySelector("." + n + "_" + l).style.display = "block", this.util.addClass(i, "active"), l === "image" && this.context.image.focusElement ? this.context.image.focusElement.focus() : l === "url" && this.context.anchor.caller.image.urlInput.focus(), !1;
  },
  submit: function(e) {
    const t = this.context.image, i = this.plugins.image;
    e.preventDefault(), e.stopPropagation(), t._altText = t.altText.value, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked, t._resizing && (t._proportionChecked = t.proportion.checked);
    try {
      this.context.dialog.updateModal && i.update_image.call(this, !1, !0, !1), t.imgInputFile && t.imgInputFile.files.length > 0 ? (this.showLoading(), i.submitAction.call(this, this.context.image.imgInputFile.files)) : t.imgUrlFile && t._v_src._linkValue.length > 0 && (this.showLoading(), i.onRender_imgUrl.call(this, t._v_src._linkValue));
    } catch (l) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.submit.fail] cause : "' + l.message + '"');
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
    const n = this.context.image;
    n._uploadFileLength = i.length;
    const u = {
      anchor: this.plugins.anchor.createAnchor.call(this, n.anchorCtx, !0),
      inputWidth: n.inputX.value,
      inputHeight: n.inputY.value,
      align: n._align,
      isUpdate: this.context.dialog.updateModal,
      alt: n._altText,
      element: n._element
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
    const i = this.options.imageUploadUrl, l = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const n = new FormData();
      for (let a = 0; a < l; a++)
        n.append("file-" + a, t[a]);
      this.plugins.fileManager.upload.call(this, i, this.options.imageUploadHeader, n, this.plugins.image.callBack_imgUpload.bind(this, e), this.functions.onImageUploadError);
    } else
      this.plugins.image.setup_reader.call(this, t, e.anchor, e.inputWidth, e.inputHeight, e.align, e.alt, l, e.isUpdate);
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
    for (let l = 0, n = i.length, a; l < n; l++)
      if (a = { name: i[l].name, size: i[l].size }, e.isUpdate) {
        this.plugins.image.update_src.call(this, i[l].url, e.element, a);
        break;
      } else
        this.plugins.image.create_image.call(this, i[l].url, e.anchor, e.inputWidth, e.inputHeight, e.align, a, e.alt);
    this.closeLoading();
  },
  setup_reader: function(e, t, i, l, n, a, u, f) {
    try {
      if (u === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = u;
      const o = this._w.FileReader, g = [u];
      this.context.image.inputX.value = i, this.context.image.inputY.value = l;
      for (let d = 0, b, x; d < u; d++)
        b = new o(), x = e[d], b.onload = (function(w, k, L, s, r) {
          g[r] = { result: w.result, file: s }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, k, g, L, t, i, l, n, a), this.closeLoading());
        }).bind(this, b, f, this.context.image._element, x, d), b.readAsDataURL(x);
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + o.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, l, n, a, u, f) {
    const o = this.plugins.image.update_src, g = this.plugins.image.create_image;
    for (let d = 0, b = t.length; d < b; d++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[d].file.name), this.context.image._element.setAttribute("data-file-size", t[d].file.size), o.call(this, t[d].result, i, t[d].file)) : g.call(this, t[d].result, l, n, a, u, t[d].file, f);
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
    const e = this.plugins.image, t = this.context.image, i = (function(l) {
      e.onModifyMode.call(this, l, null), e.openModify.call(this, !0), t.inputX.value = t._origin_w, t.inputY.value = t._origin_h;
      const n = this.util.getFormatElement(l);
      n && (t._align = n.style.textAlign || n.style.float), this.util.isAnchor(l.parentNode) && !t.anchorCtx.linkValue && (t.anchorCtx.linkValue = " "), e.update_image.call(this, !0, !1, !0), e.init.call(this);
    }).bind(this);
    this.plugins.fileManager.checkInfo.call(this, "image", ["img"], this.functions.onImageUpload, i, !0);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "image", this.functions.onImageUpload);
  },
  create_image: function(e, t, i, l, n, a, u) {
    const f = this.plugins.image, o = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let g = this.util.createElement("IMG");
    g.src = e, g.alt = u, g.setAttribute("data-rotate", "0"), t = f.onRender_link.call(this, g, t ? t.cloneNode(!1) : null), o._resizing && g.setAttribute("data-proportion", o._proportionChecked);
    const d = this.plugins.component.set_cover.call(this, t), b = this.plugins.component.set_container.call(this, d, "se-image-container");
    o._captionChecked && (o._caption = this.plugins.component.create_caption.call(this), d.appendChild(o._caption)), o._element = g, o._cover = d, o._container = b, f.applySize.call(this, i, l), f.setAlign.call(this, n, g, d, b), g.onload = f._image_create_onload.bind(this, g, o.svgDefaultSize, b), this.insertComponent(b, !0, !0, !this.options.mediaAutoSelect) && this.plugins.fileManager.setInfo.call(this, "image", g, this.functions.onImageUpload, a, !0), this.context.resizing._resize_plugin = "";
  },
  _image_create_onload: function(e, t, i) {
    if (e.offsetWidth === 0 && this.plugins.image.applySize.call(this, t, ""), this.options.mediaAutoSelect)
      this.selectComponent(e, "image");
    else {
      const l = this.appendFormatTag(i, null);
      l && this.setRange(l, 0, l, 0);
    }
    this.history.push(!1);
  },
  update_image: function(e, t, i) {
    const l = this.context.image;
    let n = l._element, a = l._cover, u = l._container, f = !1;
    a === null && (f = !0, n = l._element.cloneNode(!0), a = this.plugins.component.set_cover.call(this, n)), u === null ? (a = a.cloneNode(!0), n = a.querySelector("img"), f = !0, u = this.plugins.component.set_container.call(this, a, "se-image-container")) : f && (u.innerHTML = "", u.appendChild(a), l._cover = a, l._element = n, f = !1);
    let o;
    const g = this.util.isNumber(l.inputX.value) ? l.inputX.value + l.sizeUnit : l.inputX.value, d = this.util.isNumber(l.inputY.value) ? l.inputY.value + l.sizeUnit : l.inputY.value;
    /%$/.test(n.style.width) ? o = g !== u.style.width || d !== u.style.height : o = g !== n.style.width || d !== n.style.height, n.alt = l._altText;
    let b = !1;
    l._captionChecked ? l._caption || (l._caption = this.plugins.component.create_caption.call(this), a.appendChild(l._caption), b = !0) : l._caption && (this.util.removeItem(l._caption), l._caption = null, b = !0);
    let x = null;
    const w = this.plugins.anchor.createAnchor.call(this, l.anchorCtx, !0);
    if (w)
      l._linkElement !== w || f && !u.contains(w) ? (l._linkElement = w.cloneNode(!1), a.insertBefore(this.plugins.image.onRender_link.call(this, n, l._linkElement), l._caption), x = l._element) : l._linkElement.setAttribute("data-image-link", "image");
    else if (l._linkElement !== null) {
      const L = n;
      if (L.setAttribute("data-image-link", ""), a.contains(l._linkElement)) {
        const s = L.cloneNode(!0);
        a.removeChild(l._linkElement), a.insertBefore(s, l._caption), l._element = n = s;
      }
    }
    let k = null;
    if (f) {
      if (k = this.util.isRangeFormatElement(l._element.parentNode) || this.util.isWysiwygDiv(l._element.parentNode) ? l._element : this.util.isAnchor(l._element.parentNode) ? l._element.parentNode : this.util.getFormatElement(l._element) || l._element, this.util.getParentElement(l._element, this.util.isNotCheckingNode))
        k = x ? w : l._element, k.parentNode.replaceChild(u, k);
      else if (this.util.isListCell(k)) {
        const L = this.util.getParentElement(l._element, function(s) {
          return s.parentNode === k;
        });
        k.insertBefore(u, L), this.util.removeItem(l._element), this.util.removeEmptyNode(L, null, !0);
      } else if (this.util.isFormatElement(k)) {
        const L = this.util.getParentElement(l._element, function(s) {
          return s.parentNode === k;
        });
        k = this.util.splitElement(k, L), k.parentNode.insertBefore(u, k), this.util.removeItem(l._element), this.util.removeEmptyNode(k, null, !0), k.children.length === 0 && (k.innerHTML = this.util.htmlRemoveWhiteSpace(k.innerHTML));
      } else if (this.util.isFormatElement(k.parentNode)) {
        const L = k.parentNode;
        L.parentNode.insertBefore(u, k.previousSibling ? L.nextElementSibling : L), l.__updateTags.map(function(s) {
          return k.contains(s);
        }).length === 0 && this.util.removeItem(k);
      } else
        k = this.util.isFigures(k.parentNode) ? k.parentNode : k, k.parentNode.replaceChild(u, k);
      n = u.querySelector("img"), l._element = n, l._cover = a, l._container = u;
    }
    x && (f ? (this.util.removeItem(x), this.util.getListChildren(w, function(L) {
      return /IMG/i.test(L.tagName);
    }).length === 0 && this.util.removeItem(w)) : this.util.removeItem(w)), (b || !l._onlyPercentage && o) && !e && (/\d+/.test(n.style.height) || this.context.resizing._rotateVertical && l._captionChecked) && (/%$/.test(l.inputX.value) || /%$/.test(l.inputY.value) ? this.plugins.resizing.resetTransform.call(this, n) : this.plugins.resizing.setTransformSize.call(this, n, this.util.getNumber(l.inputX.value, 0), this.util.getNumber(l.inputY.value, 0))), l._resizing && (n.setAttribute("data-proportion", l._proportionChecked), o && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, n, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", n, this.functions.onImageUpload, null, !0), t && this.selectComponent(n, "image"), i || this.history.push(!1);
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
    let l = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), n, a;
    l ? (l = l.split(","), n = l[0], a = l[1]) : t && (n = t.w, a = t.h), i._origin_w = n || e.style.width || e.width || "", i._origin_h = a || e.style.height || e.height || "";
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
  setSize: function(e, t, i, l) {
    const n = this.context.image, a = /^(rw|lw)$/.test(l) && /\d+/.test(n._element.style.height);
    /^(th|bh)$/.test(l) && /\d+/.test(n._element.style.width) || (n._element.style.width = this.util.isNumber(e) ? e + n.sizeUnit : e, this.plugins.image.cancelPercentAttr.call(this)), a || (n._element.style.height = this.util.isNumber(t) ? t + n.sizeUnit : /%$/.test(t) ? "" : t), n._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i || n._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, n);
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
    const t = (e._element.getAttribute("data-origin") || "").split(","), i = t[0], l = t[1];
    t && (e._onlyPercentage || /%$/.test(i) && (/%$/.test(l) || !/\d/.test(l)) ? this.plugins.image.setPercentSize.call(this, i, l) : this.plugins.image.setSize.call(this, i, l), this.plugins.resizing._module_saveCurrentSize.call(this, e));
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const i = this.context.image;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + i.sizeUnit : t || "";
    const l = /%$/.test(t);
    i._container.style.width = this.util.isNumber(e) ? e + "%" : e, i._container.style.height = "", i._cover.style.width = "100%", i._cover.style.height = l ? t : "", i._element.style.width = "100%", i._element.style.height = l ? "" : t, i._element.style.maxWidth = "", i._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing.setCaptionPosition.call(this, i._element), this.plugins.resizing._module_saveCurrentSize.call(this, i);
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
  setAlign: function(e, t, i, l) {
    const n = this.context.image;
    e || (e = n._align), t || (t = n._element), i || (i = n._cover), l || (l = n._container), /%$/.test(t.style.width) && e === "center" ? (l.style.minWidth = "100%", i.style.width = l.style.width) : (l.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : !t.style.width || t.style.width === "auto" ? "" : t.style.width || "100%"), this.util.hasClass(l, "__se__float-" + e) || (this.util.removeClass(l, n._floatClassRegExp), this.util.addClass(l, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.image;
    e.imgInputFile && (e.imgInputFile.value = ""), e.imgUrlFile && (e._v_src._linkValue = e.previewSrc.textContent = e.imgUrlFile.value = ""), e.imgInputFile && e.imgUrlFile && (e.imgUrlFile.removeAttribute("disabled"), e.previewSrc.style.textDecoration = ""), e.altText.value = "", e.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = !0, e.captionCheckEl.checked = !1, e._element = null, this.plugins.image.openTab.call(this, "init"), e._resizing && (e.inputX.value = this.options.imageWidth === e._defaultSizeX ? "" : this.options.imageWidth, e.inputY.value = this.options.imageHeight === e._defaultSizeY ? "" : this.options.imageHeight, e.proportion.checked = !0, e._ratio = !1, e._ratioX = 1, e._ratioY = 1), this.plugins.anchor.init.call(this, e.anchorCtx);
  }
}, Da = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([Xt, ji, wn, Gi]);
    const t = e.options, i = e.context, l = i.video = {
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
    let n = this.setDialog(e);
    l.modal = n, l.videoInputFile = n.querySelector("._se_video_file"), l.videoUrlFile = n.querySelector(".se-input-url"), l.focusElement = l.videoUrlFile || l.videoInputFile, l.preview = n.querySelector(".se-link-preview"), n.querySelector("form").addEventListener("submit", this.submit.bind(e)), l.videoInputFile && n.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(l.videoInputFile, l.videoUrlFile, l.preview)), l.videoInputFile && l.videoUrlFile && l.videoInputFile.addEventListener("change", this._fileInputChange.bind(l)), l.videoUrlFile && l.videoUrlFile.addEventListener("input", this._onLinkPreview.bind(l.preview, l, t.linkProtocol)), l.proportion = {}, l.videoRatioOption = {}, l.inputX = {}, l.inputY = {}, t.videoResizing && (l.proportion = n.querySelector("._se_video_check_proportion"), l.videoRatioOption = n.querySelector(".se-video-ratio"), l.inputX = n.querySelector("._se_video_size_x"), l.inputY = n.querySelector("._se_video_size_y"), l.inputX.value = t.videoWidth, l.inputY.value = t.videoHeight, l.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), l.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), l.inputX.addEventListener("change", this.setRatio.bind(e)), l.inputY.addEventListener("change", this.setRatio.bind(e)), l.proportion.addEventListener("change", this.setRatio.bind(e)), l.videoRatioOption.addEventListener("change", this.setVideoRatio.bind(e)), n.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(n), n = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, l = e.util.createElement("DIV");
    l.className = "se-dialog-content", l.style.display = "none";
    let n = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.videoBox.title + '</span></div><div class="se-dialog-body">';
    if (t.videoFileInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_video_file" type="file" accept="' + t.videoAccept + '"' + (t.videoMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.videoUrlInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), t.videoResizing) {
      const a = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], u = t.videoRatio, f = t.videoSizeOnlyPercentage, o = f ? ' style="display: none !important;"' : "", g = t.videoHeightShow ? "" : ' style="display: none !important;"', d = t.videoRatioShow ? "" : ' style="display: none !important;"', b = !f && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      n += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + g + ">" + i.dialogBox.height + '</label><label class="size-h"' + d + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + b + ">" + (f ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + g + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + d + ">", g || (n += '<option value=""> - </option>');
      for (let x = 0, w = a.length; x < w; x++)
        n += '<option value="' + a[x].value + '"' + (u.toString() === a[x].value.toString() ? " selected" : "") + ">" + a[x].name + "</option>";
      n += '</select><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + o + b + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + "</label></div>";
    }
    return n += '</div><div class="se-dialog-footer"><div' + (t.videoAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", l.innerHTML = n, l;
  },
  _fileInputChange: function() {
    this.videoInputFile.value ? (this.videoUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.videoUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _onLinkPreview: function(e, t, i) {
    const l = i.target.value.trim();
    /^<iframe.*\/iframe>$/.test(l) ? (e._linkValue = l, this.textContent = '<IFrame :src=".."></IFrame>') : e._linkValue = this.textContent = l ? t && l.indexOf("://") === -1 && l.indexOf("#") !== 0 ? t + l : l.indexOf("://") === -1 ? "/" + l : l : "";
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
    const t = e || this.context.video._element, i = this.context.video._container, l = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onVideoDeleteBefore == "function" && this.functions.onVideoDeleteBefore(t, i, l, this) === !1) return;
    let n = i.previousElementSibling || i.nextElementSibling;
    const a = i.parentNode;
    this.util.removeItem(i), this.plugins.video.init.call(this), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(u) {
      return u.childNodes.length === 0;
    }, null), this.focusEdge(n), this.plugins.fileManager.deleteInfo.call(this, "video", l, this.functions.onVideoUpload), this.history.push(!1);
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
    } catch (l) {
      throw this.closeLoading(), Error('[SUNEDITOR.video.submit.fail] cause : "' + l.message + '"');
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
    const n = this.context.video;
    n._uploadFileLength = i.length;
    const a = {
      inputWidth: n.inputX.value,
      inputHeight: n.inputY.value,
      align: n._align,
      isUpdate: this.context.dialog.updateModal,
      element: n._element
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
    const i = this.options.videoUploadUrl, l = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const n = new FormData();
      for (let a = 0; a < l; a++)
        n.append("file-" + a, t[a]);
      this.plugins.fileManager.upload.call(this, i, this.options.videoUploadHeader, n, this.plugins.video.callBack_videoUpload.bind(this, e), this.functions.onVideoUploadError);
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
    const i = t.result, l = this.plugins.video.createVideoTag.call(this);
    for (let n = 0, a = i.length, u; n < a; n++)
      u = { name: i[n].name, size: i[n].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : l.cloneNode(!1), i[n].url, e.inputWidth, e.inputHeight, e.align, u, e.isUpdate);
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
  create_video: function(e, t, i, l, n, a, u) {
    this.context.resizing._resize_plugin = "video";
    const f = this.context.video;
    let o = null, g = null, d = !1;
    if (u) {
      if (e = f._element, e.src !== t) {
        d = !0;
        const L = /youtu\.?be/.test(t), s = /vimeo\.com/.test(t);
        if ((L || s) && !/^iframe$/i.test(e.nodeName)) {
          const r = this.plugins.video.createIframeTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), f._element = e = r;
        } else if (!L && !s && !/^video$/i.test(e.nodeName)) {
          const r = this.plugins.video.createVideoTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), f._element = e = r;
        } else
          e.src = t;
      }
      g = f._container, o = this.util.getParentElement(e, "FIGURE");
    } else
      d = !0, e.src = t, f._element = e, o = this.plugins.component.set_cover.call(this, e), g = this.plugins.component.set_container.call(this, o, "se-video-container");
    f._cover = o, f._container = g;
    const b = this.plugins.resizing._module_getSizeX.call(this, f) !== (i || f._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, f) !== (l || f._videoRatio), x = !u || b;
    f._resizing && (this.context.video._proportionChecked = f.proportion.checked, e.setAttribute("data-proportion", f._proportionChecked));
    let w = !1;
    x && (w = this.plugins.video.applySize.call(this)), w && n === "center" || this.plugins.video.setAlign.call(this, null, e, o, g);
    let k = !0;
    if (u)
      f._resizing && this.context.resizing._rotateVertical && x && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (k = this.insertComponent(g, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const L = this.appendFormatTag(g, null);
      L && this.setRange(L, 0, L, 0);
    }
    k && (d && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, a, !0), u && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
  },
  _update_videoCover: function(e) {
    if (!e) return;
    const t = this.context.video;
    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const l = e;
    t._element = e = e.cloneNode(!0);
    const n = t._cover = this.plugins.component.set_cover.call(this, e), a = t._container = this.plugins.component.set_container.call(this, n, "se-video-container");
    try {
      const u = i.querySelector("figcaption");
      let f = null;
      u && (f = this.util.createElement("DIV"), f.innerHTML = u.innerHTML, this.util.removeItem(u));
      const o = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, o[0] || l.style.width || l.width || "", o[1] || l.style.height || l.height || "");
      const g = this.util.getFormatElement(l);
      if (g && (t._align = g.style.textAlign || g.style.float), this.plugins.video.setAlign.call(this, null, e, n, a), this.util.getParentElement(l, this.util.isNotCheckingNode))
        l.parentNode.replaceChild(a, l);
      else if (this.util.isListCell(i)) {
        const d = this.util.getParentElement(l, function(b) {
          return b.parentNode === i;
        });
        i.insertBefore(a, d), this.util.removeItem(l), this.util.removeEmptyNode(d, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const d = this.util.getParentElement(l, function(b) {
          return b.parentNode === i;
        });
        i = this.util.splitElement(i, d), i.parentNode.insertBefore(a, i), this.util.removeItem(l), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
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
    let l = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), n, a;
    l ? (l = l.split(","), n = l[0], a = l[1]) : t && (n = t.w, a = t.h), i._origin_w = n || e.style.width || e.width || "", i._origin_h = a || e.style.height || e.height || "";
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
    const i = this.context.video, l = i.videoRatioOption.options;
    /%$/.test(e) || i._onlyPercentage ? e = this.util.getNumber(e, 2) / 100 + "" : (!this.util.isNumber(e) || e * 1 >= 1) && (e = ""), i.inputY.placeholder = "";
    for (let n = 0, a = l.length; n < a; n++)
      l[n].value === e ? (t = l[n].selected = !0, i.inputY.placeholder = e ? e * 100 + "%" : "") : l[n].selected = !1;
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
  setSize: function(e, t, i, l) {
    const n = this.context.video, a = /^(rw|lw)$/.test(l), u = /^(th|bh)$/.test(l);
    u || (e = this.util.getNumber(e, 0)), a || (t = this.util.isNumber(t) ? t + n.sizeUnit : t || ""), e = e ? e + n.sizeUnit : "", u || (n._element.style.width = e), a || (n._cover.style.paddingBottom = n._cover.style.height = t), !u && !/%$/.test(e) && (n._cover.style.width = e, n._container.style.width = ""), !a && !/%$/.test(t) ? n._element.style.height = t : n._element.style.height = "", i || n._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, n);
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
      const l = i[0], n = i[1];
      t._onlyPercentage || /%$/.test(l) && (/%$/.test(n) || !/\d/.test(n)) ? this.plugins.video.setPercentSize.call(this, l, n) : this.plugins.video.setSize.call(this, l, n), this.plugins.resizing._module_saveCurrentSize.call(this, t);
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
  setAlign: function(e, t, i, l) {
    const n = this.context.video;
    e || (e = n._align), t || (t = n._element), i || (i = n._cover), l || (l = n._container), /%$/.test(t.style.width) && e === "center" ? (l.style.minWidth = "100%", i.style.width = l.style.width, i.style.height = i.style.height, i.style.paddingBottom = /%$/.test(i.style.height) ? this.util.getNumber(this.util.getNumber(i.style.height, 2) / 100 * this.util.getNumber(i.style.width, 2), 2) + "%" : i.style.height) : (l.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width || "100%", i.style.paddingBottom = i.style.height), this.util.hasClass(l, "__se__float-" + e) || (this.util.removeClass(l, n._floatClassRegExp), this.util.addClass(l, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.video;
    e.videoInputFile && (e.videoInputFile.value = ""), e.videoUrlFile && (e._linkValue = e.preview.textContent = e.videoUrlFile.value = ""), e.videoInputFile && e.videoUrlFile && (e.videoUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._origin_w = this.options.videoWidth, e._origin_h = this.options.videoHeight, e.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = !0, e._resizing && (e.inputX.value = this.options.videoWidth === e._defaultSizeX ? "" : this.options.videoWidth, e.inputY.value = this.options.videoHeight === e._defaultSizeY ? "" : this.options.videoHeight, e.proportion.checked = !0, e.proportion.disabled = !0, this.plugins.video.setVideoRatioSelect.call(this, e._defaultRatio));
  }
}, Ma = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([Xt, ji, Gi]);
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
    let l = this.setDialog(e);
    i.modal = l, i.audioInputFile = l.querySelector("._se_audio_files"), i.audioUrlFile = l.querySelector(".se-input-url"), i.focusElement = i.audioInputFile || i.audioUrlFile, i.preview = l.querySelector(".se-link-preview");
    let n = this.setController(e);
    i.controller = n, l.querySelector("form").addEventListener("submit", this.submit.bind(e)), i.audioInputFile && l.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(i.audioInputFile, i.audioUrlFile, i.preview)), i.audioInputFile && i.audioUrlFile && i.audioInputFile.addEventListener("change", this._fileInputChange.bind(i)), n.addEventListener("click", this.onClick_controller.bind(e)), i.audioUrlFile && i.audioUrlFile.addEventListener("input", this._onLinkPreview.bind(i.preview, i, e.options.linkProtocol)), t.dialog.modal.appendChild(l), t.element.relative.appendChild(n), l = null, n = null;
  },
  /** HTML - dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, l = e.util.createElement("DIV");
    l.className = "se-dialog-content", l.style.display = "none";
    let n = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.audioBox.title + '</span></div><div class="se-dialog-body">';
    return t.audioFileInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_audio_files" type="file" accept="' + t.audioAccept + '"' + (t.audioMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.audioUrlInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), n += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", l.innerHTML = n, l;
  },
  /** HTML - controller */
  setController: function(e) {
    const t = e.lang, i = e.icons, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-link", l.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", l;
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
    const l = i.target.value.trim();
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
    const t = this.util.getParentElement(e, this.util.isComponent) || e, i = e.getAttribute("data-index") * 1;
    if (typeof this.functions.onAudioDeleteBefore == "function" && this.functions.onAudioDeleteBefore(e, t, i, this) === !1) return;
    const l = t.previousElementSibling || t.nextElementSibling, n = t.parentNode;
    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), n !== this.context.element.wysiwyg && this.util.removeItemAllParents(n, function(a) {
      return a.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "audio", i, this.functions.onAudioUpload), this.history.push(!1);
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
    const n = this.context.audio;
    n._uploadFileLength = i.length;
    const a = {
      isUpdate: this.context.dialog.updateModal,
      element: n._element
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
    const i = this.options.audioUploadUrl, l = this.context.dialog.updateModal ? 1 : t.length, n = new FormData();
    for (let a = 0; a < l; a++)
      n.append("file-" + a, t[a]);
    this.plugins.fileManager.upload.call(this, i, this.options.audioUploadHeader, n, this.plugins.audio.callBack_upload.bind(this, e), this.functions.onAudioUploadError);
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
    for (let l = 0, n = i.length, a, u; l < n; l++)
      e.isUpdate ? u = e.element : u = this.plugins.audio._createAudioTag.call(this), a = { name: i[l].name, size: i[l].size }, this.plugins.audio.create_audio.call(this, u, i[l].url, a, e.isUpdate);
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
  create_audio: function(e, t, i, l) {
    const n = this.context.audio;
    if (l)
      if (n._element && (e = n._element), e && e.src !== t)
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
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, i, !1), l && this.history.push(!1);
  },
  updateCover: function(e) {
    const t = this.context.audio;
    this.plugins.audio._setTagAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const l = e;
    t._element = e = e.cloneNode(!1);
    const n = this.plugins.component.set_cover.call(this, e), a = this.plugins.component.set_container.call(this, n, "se-audio-container");
    try {
      if (this.util.getParentElement(l, this.util.isNotCheckingNode))
        l.parentNode.replaceChild(a, l);
      else if (this.util.isListCell(i)) {
        const u = this.util.getParentElement(l, function(f) {
          return f.parentNode === i;
        });
        i.insertBefore(a, u), this.util.removeItem(l), this.util.removeEmptyNode(u, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const u = this.util.getParentElement(l, function(f) {
          return f.parentNode === i;
        });
        i = this.util.splitElement(i, u), i.parentNode.insertBefore(a, i), this.util.removeItem(l), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
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
}, Vl = "https://katex.org/docs/supported.html", Va = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([Xt]);
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
    t.math.modal = i, t.math.focusElement = i.querySelector(".se-math-exp"), t.math.previewElement = i.querySelector(".se-math-preview"), t.math.fontSizeElement = i.querySelector(".se-math-size"), t.math.focusElement.addEventListener("paste", function(n) {
      typeof e.functions.onPasteMath == "function" && e.functions.onPasteMath(n, e);
    }, !1), t.math.focusElement.addEventListener(e.util.isIE ? "textinput" : "input", this._renderMathExp.bind(e, t.math), !1), t.math.fontSizeElement.addEventListener("change", (function(n) {
      this.fontSize = n.target.value;
    }).bind(t.math.previewElement.style), !1);
    let l = this.setController_MathButton(e);
    t.math.mathController = l, t.math._mathExp = null, i.querySelector("form").addEventListener("submit", this.submit.bind(e), !1), l.addEventListener("click", this.onClick_mathController.bind(e)), t.math.previewElement.style.fontSize = t.math.defaultFontSize, t.dialog.modal.appendChild(i), t.element.relative.appendChild(l), i = null, l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), l = e.options.mathFontSize;
    let n = l[0].value;
    i.className = "se-dialog-content", i.style.display = "none";
    let a = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + Vl + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let u = 0, f = l.length, o; u < f; u++)
      o = l[u], o.default && (n = o.value), a += '<option value="' + o.value + '"' + (o.default ? " selected" : "") + ">" + o.text + "</option>";
    return a += '</select></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.previewLabel + '</label><p class="se-math-preview"></p></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", e.context.math.defaultFontSize = n, i.innerHTML = a, i;
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
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + Vl + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
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
      const i = this.context.math, l = i.focusElement.value, n = i.previewElement.querySelector(".katex");
      if (!n) return !1;
      if (n.className = "__se__katex " + n.className, n.setAttribute("contenteditable", !1), n.setAttribute("data-exp", this.util.HTMLEncoder(l)), n.setAttribute("data-font-size", i.fontSizeElement.value), n.style.fontSize = i.fontSizeElement.value, this.context.dialog.updateModal) {
        const a = this.util.getParentElement(i._mathExp, ".katex");
        a.parentNode.replaceChild(n, a), this.setRange(n, 0, n, 1);
      } else {
        const a = this.getSelectedElements();
        if (a.length > 1) {
          const f = this.util.createElement(a[0].nodeName);
          if (f.appendChild(n), !this.insertNode(f, null, !0)) return !1;
        } else if (!this.insertNode(n, null, !0)) return !1;
        const u = this.util.createTextNode(this.util.zeroWidthSpace);
        n.parentNode.insertBefore(u, n.nextSibling), this.setRange(n, 0, n, 1);
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
        const i = this.util.HTMLDecoder(t._mathExp.getAttribute("data-exp")), l = t._mathExp.getAttribute("data-font-size") || "1em";
        this.context.dialog.updateModal = !0, t.focusElement.value = i, t.fontSizeElement.value = l, t.previewElement.innerHTML = this.plugins.math._renderer.call(this, i), t.previewElement.style.fontSize = l;
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
var Bi = { exports: {} }, Ha = Bi.exports, Hl;
function Oa() {
  return Hl || (Hl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Ha, function(t, i) {
      const l = {
        name: "fileBrowser",
        _xmlHttp: null,
        _loading: null,
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function(n) {
          const a = n.context;
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
          let u = n.util.createElement("DIV");
          u.className = "se-file-browser sun-editor-common";
          let f = n.util.createElement("DIV");
          f.className = "se-file-browser-back";
          let o = n.util.createElement("DIV");
          o.className = "se-file-browser-inner", o.innerHTML = this.set_browser(n), u.appendChild(f), u.appendChild(o), this._loading = u.querySelector(".se-loading-box"), a.fileBrowser.area = u, a.fileBrowser.header = o.querySelector(".se-file-browser-header"), a.fileBrowser.titleArea = o.querySelector(".se-file-browser-title"), a.fileBrowser.tagArea = o.querySelector(".se-file-browser-tags"), a.fileBrowser.body = o.querySelector(".se-file-browser-body"), a.fileBrowser.list = o.querySelector(".se-file-browser-list"), a.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(n)), a.fileBrowser.list.addEventListener("click", this.onClickFile.bind(n)), o.addEventListener("mousedown", this._onMouseDown_browser.bind(n)), o.addEventListener("click", this._onClick_browser.bind(n)), a.element.relative.appendChild(u), u = null, f = null, o = null;
        },
        set_browser: function(n) {
          const a = n.lang;
          return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" title="' + a.dialogBox.close + '" aria-label="' + a.dialogBox.close + '">' + n.icons.cancel + '</button><span class="se-file-browser-title"></span><div class="se-file-browser-tags"></div></div><div class="se-file-browser-body"><div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div><div class="se-file-browser-list"></div></div></div>';
        },
        /**
         * @description Event to control the behavior of closing the browser
         * @param {MouseEvent} e Event object
         * @private
         */
        _onMouseDown_browser: function(n) {
          /se-file-browser-inner/.test(n.target.className) ? this.context.fileBrowser._closeSignal = !0 : this.context.fileBrowser._closeSignal = !1;
        },
        /**
         * @description Event to close the window when the outside area of the browser or close button is click
         * @param {MouseEvent} e Event object
         * @private
         */
        _onClick_browser: function(n) {
          n.stopPropagation(), (/close/.test(n.target.getAttribute("data-command")) || this.context.fileBrowser._closeSignal) && this.plugins.fileBrowser.close.call(this);
        },
        /**
         * @description Open a file browser plugin
         * @param {String} pluginName Plugin name using the file browser
         * @param {Function|null} selectorHandler When the function comes as an argument value, it substitutes "context.selectorHandler".
         */
        open: function(n, a) {
          this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(g) {
            /27/.test(g.keyCode) && this.plugins.fileBrowser.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
          const u = this.context.fileBrowser;
          u.contextPlugin = n, u.selectorHandler = a;
          const f = this.context[n], o = f.listClass;
          this.util.hasClass(u.list, o) || (u.list.className = "se-file-browser-list " + o), this.options.popupDisplay === "full" ? u.area.style.position = "fixed" : u.area.style.position = "absolute", u.titleArea.textContent = f.title, u.area.style.display = "block", this.context[n].directData ? this.plugins.fileBrowser._drawListItem.call(this, this.context[n].directData, !0) : this.plugins.fileBrowser._drawFileList.call(this, this.context[n].url, this.context[n].header);
        },
        _bindClose: null,
        /**
         * @description Close a fileBrowser plugin
         * The plugin's "init" method is called.
         */
        close: function() {
          const n = this.plugins.fileBrowser;
          n._xmlHttp && n._xmlHttp.abort(), n._bindClose && (this._d.removeEventListener("keydown", n._bindClose), n._bindClose = null);
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
        _drawFileList: function(n, a) {
          const u = this.plugins.fileBrowser, f = u._xmlHttp = this.util.getXMLHttpRequest();
          if (f.onreadystatechange = u._callBackGet.bind(this, f), f.open("get", n, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
            for (let o in a)
              f.setRequestHeader(o, a[o]);
          f.send(null), this.plugins.fileBrowser.showBrowserLoading();
        },
        _callBackGet: function(n) {
          if (n.readyState === 4) {
            if (this.plugins.fileBrowser._xmlHttp = null, n.status === 200)
              try {
                const a = JSON.parse(n.responseText);
                a.result.length > 0 ? this.plugins.fileBrowser._drawListItem.call(this, a.result, !0) : a.nullMessage && (this.context.fileBrowser.list.innerHTML = a.nullMessage);
              } catch (a) {
                throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + a.message + '"');
              } finally {
                this.plugins.fileBrowser.closeBrowserLoading(), this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + "px";
              }
            else if (this.plugins.fileBrowser.closeBrowserLoading(), n.status !== 0) {
              const a = n.responseText ? JSON.parse(n.responseText) : n, u = "[SUNEDITOR.fileBrowser.get.serverException] status: " + n.status + ", response: " + (a.errorMessage || n.responseText);
              throw Error(u);
            }
          }
        },
        _drawListItem: function(n, a) {
          const u = this.context.fileBrowser, f = this.context[u.contextPlugin], o = [], g = n.length, d = f.columnSize || u.columnSize, b = d <= 1 ? 1 : Math.round(g / d) || 1, x = f.itemTemplateHandler;
          let w = "", k = '<div class="se-file-item-column">', L = 1;
          for (let s = 0, r, c; s < g; s++)
            if (r = n[s], c = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], c = r.tag = c.map(function(h) {
              return h.trim();
            }), k += x(r), (s + 1) % b === 0 && L < d && s + 1 < g && (L++, k += '</div><div class="se-file-item-column">'), a && c.length > 0)
              for (let h = 0, p = c.length, v; h < p; h++)
                v = c[h], v && o.indexOf(v) === -1 && (o.push(v), w += '<a title="' + v + '" aria-label="' + v + '">' + v + "</a>");
          k += "</div>", u.list.innerHTML = k, a && (u.items = n, u.tagArea.innerHTML = w, u.tagElements = u.tagArea.querySelectorAll("A"));
        },
        onClickTag: function(n) {
          const a = n.target;
          if (!this.util.isAnchor(a)) return;
          const u = a.textContent, f = this.plugins.fileBrowser, o = this.context.fileBrowser, g = o.tagArea.querySelector('a[title="' + u + '"]'), d = o.selectedTags, b = d.indexOf(u);
          b > -1 ? (d.splice(b, 1), this.util.removeClass(g, "on")) : (d.push(u), this.util.addClass(g, "on")), f._drawListItem.call(
            this,
            d.length === 0 ? o.items : o.items.filter(function(x) {
              return x.tag.some(function(w) {
                return d.indexOf(w) > -1;
              });
            }),
            !1
          );
        },
        onClickFile: function(n) {
          n.preventDefault(), n.stopPropagation();
          const a = this.context.fileBrowser, u = a.list;
          let f = n.target, o = null;
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
        value: l
      })), l;
    });
  }(Bi)), Bi.exports;
}
var Fa = /* @__PURE__ */ Oa();
const Ua = /* @__PURE__ */ Te(Fa), Pa = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([Ua]);
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
}, Wa = { blockquote: sa, align: aa, font: ra, fontSize: ua, fontColor: da, hiliteColor: ca, horizontalRule: fa, list: ha, table: pa, formatBlock: ma, lineHeight: ga, template: va, paragraphStyle: ba, textStyle: ya, link: xa, image: Ia, video: Da, audio: Ma, math: Va, imageGallery: Pa }, $a = {
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
}, Ol = {
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
    const l = [], n = t === "js" ? "script" : "link", a = t === "js" ? "src" : "href";
    let u = "(?:";
    for (let g = 0, d = e.length; g < d; g++)
      u += e[g] + (g < d - 1 ? "|" : ")");
    const f = new this._w.RegExp("(^|.*[\\/])" + u + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), o = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let g = this._d.getElementsByTagName(n), d = 0; d < g.length; d++)
      o.test(g[d][a]) && l.push(g[d]);
    for (let g = 0; g < l.length; g++) {
      let d = l[g][a].match(f);
      if (d) {
        i = d[0];
        break;
      }
    }
    if (i === "" && (i = l.length > 0 ? l[0][a] : ""), i.indexOf(":/") === -1 && i.slice(0, 2) !== "//" && (i = i.indexOf("/") === 0 ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + i : location.href.match(/^[^\?]*\/(?:)/)[0] + i), !i) throw "[SUNEDITOR.util.getIncludePath.fail] The SUNEDITOR installation path could not be automatically detected. (name: +" + name + ", extension: " + t + ")";
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
    for (let l = 0, n = i.length, a; l < n; l++) {
      try {
        a = i[l].cssRules;
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
    let l = "";
    for (let n = 0, a = i.length; n < a; n++)
      t && t.indexOf(i[n].name) > -1 || (l += i[n].name + '="' + i[n].value + '" ');
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
    let i, l;
    return this.isIE_Edge ? (l = this._w.unescape(t(e)).length, i = 0, t(e).match(/(%0A|%0D)/gi) !== null && (i = t(e).match(/(%0A|%0D)/gi).length), l + i) : (l = new this._w.TextEncoder("utf-8").encode(e).length, i = 0, t(e).match(/(%0A|%0D)/gi) !== null && (i = t(e).match(/(%0A|%0D)/gi).length), l + i);
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
      const n = t.style;
      for (let a = 0, u = n.length; a < u; a++)
        e.style[n[a]] = n[n[a]];
    }
    const l = t.attributes;
    for (let n = 0, a = l.length, u; n < a; n++)
      u = l[n].name.toLowerCase(), i && i.indexOf(u) > -1 || !l[n].value ? e.removeAttribute(u) : u !== "style" && e.setAttribute(l[n].name, l[n].value);
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
    const l = [];
    for (let n = 0, a = e.length, u; n < a; n++)
      if (u = e[n], t(u))
        if (i) l.push(u);
        else return u;
    return i ? l : null;
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
    for (let l = 0, n = e.length; l < n; l++)
      if (e[l] === t) {
        i = l;
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
    const l = [];
    let n = !0;
    return this.getParentElement(e, (function(a) {
      if (a === t && (n = !1), n && !this.isWysiwygDiv(a)) {
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
        l.push(a);
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
    let i = t, l;
    for (let n = 0, a = e.length; n < a && (l = i.childNodes, l.length !== 0); n++)
      l.length <= e[n] ? i = l[l.length - 1] : i = l[e[n]];
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
    const i = e.style, l = t.style;
    let n = 0;
    for (let g = 0, d = i.length; g < d; g++)
      i[i[g]] === l[i[g]] && n++;
    const a = e.classList, u = t.classList, f = this._w.RegExp;
    let o = 0;
    for (let g = 0, d = a.length; g < d; g++)
      f("(s|^)" + a[g] + "(s|$)").test(u.value) && o++;
    return n === l.length && n === i.length && o === u.length && o === a.length;
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
    }, function l(n) {
      if (e !== n && t(n) && i.push(n), n.children)
        for (let a = 0, u = n.children.length; a < u; a++)
          l(n.children[a]);
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
    }, function l(n) {
      e !== n && t(n) && i.push(n);
      for (let a = 0, u = n.childNodes.length; a < u; a++)
        l(n.childNodes[a]);
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
    let i = e, l = t;
    for (; i && l && i.parentNode !== l.parentNode; )
      i = i.parentNode, l = l.parentNode;
    if (!i || !l) return { ancestor: null, a: e, b: t, result: 0 };
    const n = i.parentNode.childNodes, a = this.getArrayIndex(n, i), u = this.getArrayIndex(n, l);
    return {
      ancestor: i.parentNode,
      a: i,
      b: l,
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
      let l;
      /^\./.test(t) ? (l = "className", t = t.split(".")[1]) : /^#/.test(t) ? (l = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (l = "name", t = "^" + t.split(":")[1] + "$") : (l = "nodeName", t = "^" + t + "$");
      const n = new this._w.RegExp(t, "i");
      i = function(a) {
        return n.test(a[l]);
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
      for (let l = e.parentNode; l; l = l.parentNode) {
        if (l === t) return null;
        if (l.previousSibling) {
          i = l.previousSibling;
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
      for (let l = e.parentNode; l; l = l.parentNode) {
        if (l === t) return null;
        if (l.nextSibling) {
          i = l.nextSibling;
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
    let l;
    if (typeof t == "function")
      l = t;
    else {
      let a;
      /^\./.test(t) ? (a = "className", t = t.split(".")[1]) : /^#/.test(t) ? (a = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (a = "name", t = "^" + t.split(":")[1] + "$") : (a = "nodeName", t = "^" + (t === "text" ? "#" + t : t) + "$");
      const u = new this._w.RegExp(t, "i");
      l = function(f) {
        return u.test(f[a]);
      };
    }
    const n = this.getListChildNodes(e, function(a) {
      return l(a);
    });
    return n[i ? n.length - 1 : 0];
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
    let i = 0, l = 0, n = e.nodeType === 3 ? e.parentElement : e;
    const a = this.getParentElement(e, this.isWysiwygDiv.bind(this));
    for (; n && !this.hasClass(n, "se-container") && n !== a; )
      i += n.offsetLeft, l += n.offsetTop, n = n.offsetParent;
    const u = t && /iframe/i.test(t.nodeName);
    return {
      left: i + (u ? t.parentElement.offsetLeft : 0),
      top: l - (a ? a.scrollTop : 0) + (u ? t.parentElement.offsetTop : 0)
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
  getOverlapRangeAtIndex: function(e, t, i, l) {
    if (e <= l ? t < i : t > i) return 0;
    const n = (e > i ? e : i) - (t < l ? t : l);
    return (n < 0 ? n * -1 : n) + 1;
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
    const l = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    return l.test(e.className) ? e.className = e.className.replace(l, " ").trim() : (e.className += " " + t, i = !0), e.className.trim() || e.removeAttribute("class"), i;
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
    for (let l = 0, n = t.length; l < n; l++) {
      let a = t[l];
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
    let l = null;
    return t || (t = (function(n) {
      if (n === i || this.isComponent(n)) return !1;
      const a = n.textContent.trim();
      return a.length === 0 || /^(\n|\u200B)+$/.test(a);
    }).bind(this)), function n(a) {
      if (!he.isWysiwygDiv(a)) {
        const u = a.parentNode;
        u && t(a) && (l = {
          sc: a.previousElementSibling,
          ec: a.nextElementSibling
        }, he.removeItem(a), n(u));
      }
    }(e), l;
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
    let l, n;
    if (i) {
      l = i.cloneNode(!1), n = i.childNodes;
      const u = this.getPositionIndex(e);
      for (; n[u]; )
        l.appendChild(n[u]);
    } else
      l = e;
    let a;
    if (t)
      a = this.getListChildren(l, (function(u) {
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
    return i && (i.parentNode.insertBefore(l, i.nextSibling), n && n.length === 0 && this.removeItem(i)), l === e ? l.parentNode : l;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let i = t, l = i.parentNode, n, a, u, f, o;
    for (; this.isListCell(l); ) {
      for (f = this.getPositionIndex(e), n = l.nextElementSibling, a = l.parentNode, u = i; u; ) {
        if (i = i.nextSibling, this.isList(u)) {
          for (o = u.childNodes; o[f]; )
            a.insertBefore(o[f], n);
          o.length === 0 && this.removeItem(u);
        } else
          a.appendChild(u);
        u = i;
      }
      i = a, l = a.parentNode;
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
      const k = e.cloneNode(!1), L = e.cloneNode(!1);
      for (let s = 0, r = x.length; s < r; s++) {
        if (s < w) k.appendChild(x[s]);
        else if (s > w) L.appendChild(x[s]);
        else continue;
        s--, r--, w--;
      }
      return k.childNodes.length > 0 && e.parentNode.insertBefore(k, e), L.childNodes.length > 0 && e.parentNode.insertBefore(L, e.nextElementSibling), e;
    }
    const l = e.parentNode;
    let n = 0, a = 1, u = !0, f, o, g;
    if ((!i || i < 0) && (i = 0), e.nodeType === 3) {
      if (n = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const x = this.getNodeFromPath([n + 1], l);
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
    let d = e;
    for (; this.getElementDepth(d) > i; )
      for (n = this.getPositionIndex(d) + a, d = d.parentNode, g = f, f = d.cloneNode(!1), o = d.childNodes, g && (this.isListCell(f) && this.isList(g) && g.firstElementChild ? (f.innerHTML = g.firstElementChild.innerHTML, he.removeItem(g.firstElementChild), g.children.length > 0 && f.appendChild(g)) : f.appendChild(g)); o[n]; )
        f.appendChild(o[n]);
    d.childNodes.length <= 1 && (!d.firstChild || d.firstChild.textContent.length === 0) && (d.innerHTML = "<br>");
    const b = d.parentNode;
    return u && (d = d.nextSibling), f ? (this.mergeSameTags(f, null, !1), this.mergeNestedTags(f, (function(x) {
      return this.isList(x);
    }).bind(this)), f.childNodes.length > 0 ? b.insertBefore(f, d) : f = d, this.isListCell(f) && f.children && this.isList(f.children[0]) && f.insertBefore(this.createElement("BR"), f.children[0]), l.childNodes.length === 0 && this.removeItem(l), f) : d;
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
    const l = this, n = t ? t.length : 0;
    let a = null;
    return n && (a = this._w.Array.apply(null, new this._w.Array(n)).map(this._w.Number.prototype.valueOf, 0)), function u(f, o, g) {
      const d = f.childNodes;
      for (let b = 0, x = d.length, w, k; b < x && (w = d[b], k = d[b + 1], !!w); b++)
        if (!(l.isBreak(w) || l.isMedia(w) || l.isInputElement(w))) {
          if (i && l._isIgnoreNodeChange(w) || !i && (l.isTable(w) || l.isListCell(w) || l.isFormatElement(w) && !l.isFreeFormatElement(w))) {
            (l.isTable(w) || l.isListCell(w)) && u(w, o + 1, b);
            continue;
          }
          if (x === 1 && f.nodeName === w.nodeName && f.parentNode) {
            if (n) {
              let L, s, r, c, h;
              for (let p = 0; p < n; p++)
                if (L = t[p], L && L[o] === b) {
                  for (s = w, r = f, c = o, h = !0; c >= 0; ) {
                    if (l.getArrayIndex(r.childNodes, s) !== L[c]) {
                      h = !1;
                      break;
                    }
                    s = w.parentNode, r = s.parentNode, c--;
                  }
                  h && (L.splice(o, 1), L[o] = b);
                }
            }
            l.copyTagAttributes(w, f), f.parentNode.insertBefore(w, f), l.removeItem(f);
          }
          if (!k) {
            w.nodeType === 1 && u(w, o + 1, b);
            break;
          }
          if (w.nodeName === k.nodeName && l.isSameAttributes(w, k) && w.href === k.href) {
            const L = w.childNodes;
            let s = 0;
            for (let p = 0, v = L.length; p < v; p++)
              L[p].textContent.length > 0 && s++;
            const r = w.lastChild, c = k.firstChild;
            let h = 0;
            if (r && c) {
              const p = r.nodeType === 3 && c.nodeType === 3;
              h = r.textContent.length;
              let v = r.previousSibling;
              for (; v && v.nodeType === 3; )
                h += v.textContent.length, v = v.previousSibling;
              if (s > 0 && r.nodeType === 3 && c.nodeType === 3 && (r.textContent.length > 0 || c.textContent.length > 0) && s--, n) {
                let m = null;
                for (let y = 0; y < n; y++)
                  if (m = t[y], m && m[o] > b) {
                    if (o > 0 && m[o - 1] !== g) continue;
                    m[o] -= 1, m[o + 1] >= 0 && m[o] === b && (m[o + 1] += s, p && r && r.nodeType === 3 && c && c.nodeType === 3 && (a[y] += h));
                  }
              }
            }
            if (w.nodeType === 3) {
              if (h = w.textContent.length, w.textContent += k.textContent, n) {
                let p = null;
                for (let v = 0; v < n; v++)
                  if (p = t[v], p && p[o] > b) {
                    if (o > 0 && p[o - 1] !== g) continue;
                    p[o] -= 1, p[o + 1] >= 0 && p[o] === b && (p[o + 1] += s, a[v] += h);
                  }
              }
            } else
              w.innerHTML += k.innerHTML;
            l.removeItem(k), b--;
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
    }), function i(l) {
      let n = l.children;
      if (n.length === 1 && n[0].nodeName === l.nodeName && t(l)) {
        const a = n[0];
        for (n = a.children; n[0]; )
          l.appendChild(n[0]);
        l.removeChild(a);
      }
      for (let a = 0, u = l.children.length; a < u; a++)
        i(l.children[a]);
    }(e);
  },
  /**
   * @description Delete a empty child node of argument element.
   * @param {Element} element Element node
   * @param {Node|null} notRemoveNode Do not remove node
   * @param {boolean} forceDelete When all child nodes are deleted, the parent node is also deleted.
   */
  removeEmptyNode: function(e, t, i) {
    const l = this;
    t && (t = l.getParentElement(t, function(n) {
      return e === n.parentElement;
    })), function n(a) {
      if (l._notTextNode(a) || a === t || l.isNonEditable(a)) return 0;
      if (a !== e && l.onlyZeroWidthSpace(a.textContent) && (!a.firstChild || !l.isBreak(a.firstChild)) && !a.querySelector(l._allowedEmptyNodeList)) {
        if (a.parentNode)
          return a.parentNode.removeChild(a), -1;
      } else {
        const u = a.children;
        for (let f = 0, o = u.length, g = 0; f < o; f++)
          !u[f + g] || l.isComponent(u[f + g]) || (g += n(u[f + g]));
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
    const i = t ? 1 : -1, l = i * -1;
    e.sort((function(n, a) {
      return !this.isListCell(n) || !this.isListCell(a) ? 0 : (n = this.getElementDepth(n), a = this.getElementDepth(a), n > a ? i : n < a ? l : 0);
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
  _consistencyCheckOfHTML: function(e, t, i, l, n) {
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
        const k = new this._w.Array(b.classList).map(l).join(" ").trim();
        k ? b.className = k : b.removeAttribute("class");
      }
      return n && b.parentNode !== e && x && (this.isListCell(b) && !this.isList(b.parentNode) || (this.isFormatElement(b) || this.isComponent(b)) && !this.isRangeFormatElement(b.parentNode) && !this.getParentElement(b, this.isComponent));
    }).bind(this));
    for (let b = 0, x = a.length; b < x; b++)
      this.removeItem(a[b]);
    const d = [];
    for (let b = 0, x = g.length, w, k; b < x; b++)
      if (w = g[b], k = w.parentNode, !(!k || !k.parentNode))
        if (this.getParentElement(w, this.isListCell)) {
          const L = w.childNodes;
          for (let s = L.length - 1; x >= 0; s--)
            k.insertBefore(w, L[s]);
          d.push(w);
        } else
          k.parentNode.insertBefore(w, k), d.push(k);
    for (let b = 0, x = d.length, w; b < x; b++)
      w = d[b], this.onlyZeroWidthSpace(w.textContent.trim()) && this.removeItem(w);
    for (let b = 0, x = u.length; b < x; b++)
      this.removeItem(u[b]);
    for (let b = 0, x = f.length, w, k, L, s; b < x; b++)
      if (w = f[b], s = w.parentNode, !!s)
        if (k = this.createElement("LI"), this.isFormatElement(w)) {
          for (L = w.childNodes; L[0]; )
            k.appendChild(L[0]);
          s.insertBefore(k, w), this.removeItem(w);
        } else
          w = w.nextSibling, k.appendChild(f[b]), s.insertBefore(k, w);
    for (let b = 0, x = o.length, w, k; b < x; b++)
      w = o[b], k = this.createElement("DIV"), k.innerHTML = w.textContent.trim().length === 0 && w.children.length === 0 ? "<br>" : w.innerHTML, w.innerHTML = k.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let i = "";
    e.height && (i += "height:" + e.height + ";"), e.minHeight && (i += "min-height:" + e.minHeight + ";"), e.maxHeight && (i += "max-height:" + e.maxHeight + ";"), e.position && (i += "position:" + e.position + ";"), e.width && (i += "width:" + e.width + ";"), e.minWidth && (i += "min-width:" + e.minWidth + ";"), e.maxWidth && (i += "max-width:" + e.maxWidth + ";");
    let l = "", n = "", a = "";
    t = i + t;
    const u = t.split(";");
    for (let f = 0, o = u.length, g; f < o; f++)
      if (g = u[f].trim(), !!g) {
        if (/^(min-|max-)?width\s*:/.test(g) || /^(z-index|position)\s*:/.test(g)) {
          l += g + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(g)) {
          /^height/.test(g) && g.split(":")[1].trim() === "auto" && (e.height = "auto"), n += g + ";";
          continue;
        }
        a += g + ";";
      }
    return {
      top: l,
      frame: n,
      editor: a
    };
  },
  _setIframeDocument: function(e, t) {
    e.setAttribute("scrolling", "auto"), e.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' + this._setIframeCssTags(t), e.contentDocument.body.className = t._editableClass, e.contentDocument.body.setAttribute("contenteditable", !0), e.contentDocument.body.setAttribute("autocorrect", "off");
  },
  _setIframeCssTags: function(e) {
    const t = e.iframeCSSFileName, i = this._w.RegExp;
    let l = "";
    for (let n = 0, a = t.length, u; n < a; n++) {
      if (u = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[n]))
        u.push(t[n]);
      else {
        const f = new i("(^|.*[\\/])" + t[n] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let o = document.getElementsByTagName("link"), g = 0, d = o.length, b; g < d; g++)
          b = o[g].href.match(f), b && u.push(b[0]);
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
}, Pi = {
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
    const l = i.createElement("DIV");
    l.className = "sun-editor" + (t.rtl ? " se-rtl" : ""), e.id && (l.id = "suneditor_" + e.id);
    const n = i.createElement("DIV");
    n.className = "se-container";
    const a = this._createToolBar(i, t.buttonList, t.plugins, t), u = a.element.cloneNode(!1);
    u.className += " se-toolbar-shadow", a.element.style.visibility = "hidden", a.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const f = i.createElement("DIV");
    f.className = "se-arrow";
    const o = i.createElement("DIV");
    o.className = "se-toolbar-sticky-dummy";
    const g = i.createElement("DIV");
    g.className = "se-wrapper";
    const d = this._initElements(t, l, a.element, f), b = d.bottomBar, x = d.wysiwygFrame, w = d.placeholder;
    let k = d.codeView;
    const L = b.resizingBar, s = b.navigation, r = b.charWrapper, c = b.charCounter, h = i.createElement("DIV");
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
    return L && S && S.appendChild(L), g.appendChild(k), w && g.appendChild(w), _ || (n.appendChild(a.element), n.appendChild(u)), n.appendChild(o), n.appendChild(g), n.appendChild(y), n.appendChild(h), n.appendChild(p), n.appendChild(v), n.appendChild(m), n.appendChild(C), L && !S && n.appendChild(L), l.appendChild(n), k = this._checkCodeMirror(t, k), {
      constructed: {
        _top: l,
        _relative: n,
        _toolBar: a.element,
        _toolbarShadow: u,
        _menuTray: a._menuTray,
        _editorArea: g,
        _wysiwygArea: x,
        _codeArea: k,
        _placeholder: w,
        _resizingBar: L,
        _navigation: s,
        _charWrapper: r,
        _charCounter: c,
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
      }, e.codeMirror.options || {}].reduce(function(n, a) {
        for (let u in a)
          he.hasOwn(a, u) && (n[u] = a[u]);
        return n;
      }, {});
      e.height === "auto" && (i.viewportMargin = 1 / 0, i.height = "auto");
      const l = e.codeMirror.src.fromTextArea(t, i);
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
    }, e.options || {}].reduce(function(i, l) {
      for (let n in l)
        he.hasOwn(l, n) && (i[n] = l[n]);
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
    const l = t.element, n = l.relative, a = l.editorArea, u = e.toolbarContainer && e.toolbarContainer !== i.toolbarContainer, f = e.lang !== i.lang || e.buttonList !== i.buttonList || e.mode !== i.mode || u, o = this._createToolBar(document, f ? e.buttonList : i.buttonList, e.plugins, e);
    o.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const g = document.createElement("DIV");
    g.className = "se-arrow", f && (o.element.style.visibility = "hidden", u ? (e.toolbarContainer.appendChild(o.element), l.toolbar.parentElement.removeChild(l.toolbar)) : l.toolbar.parentElement.replaceChild(o.element, l.toolbar), l.toolbar = o.element, l._menuTray = o._menuTray, l._arrow = g);
    const d = this._initElements(e, l.topArea, f ? o.element : l.toolbar, g), b = d.bottomBar, x = d.wysiwygFrame, w = d.placeholder;
    let k = d.codeView;
    return l.resizingBar && he.removeItem(l.resizingBar), b.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(b.resizingBar) : n.appendChild(b.resizingBar)), a.innerHTML = "", a.appendChild(k), w && a.appendChild(w), k = this._checkCodeMirror(e, k), l.resizingBar = b.resizingBar, l.navigation = b.navigation, l.charWrapper = b.charWrapper, l.charCounter = b.charCounter, l.wysiwygFrame = x, l.code = k, l.placeholder = w, e.rtl ? he.addClass(l.topArea, "se-rtl") : he.removeClass(l.topArea, "se-rtl"), {
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
  _initElements: function(e, t, i, l) {
    t.style.cssText = e._editorStyles.top, /inline/i.test(e.mode) ? (i.className += " se-toolbar-inline", i.style.width = e.toolbarWidth) : /balloon/i.test(e.mode) && (i.className += " se-toolbar-balloon", i.style.width = e.toolbarWidth, i.appendChild(l));
    const n = document.createElement(e.iframe ? "IFRAME" : "DIV");
    if (n.className = "se-wrapper-inner se-wrapper-wysiwyg", e.iframe)
      n.allowFullscreen = !0, n.frameBorder = 0, n.style.cssText = e._editorStyles.frame, n.className += e.className;
    else {
      n.setAttribute("contenteditable", !0), n.setAttribute("autocorrect", "off"), n.setAttribute("scrolling", "auto");
      for (let b in e.iframeAttributes)
        n.setAttribute(b, e.iframeAttributes[b]);
      n.className += " " + e._editableClass, n.style.cssText = e._editorStyles.frame + e._editorStyles.editor, n.className += e.className;
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
    let d = null;
    return e.placeholder && (d = document.createElement("SPAN"), d.className = "se-placeholder", d.innerText = e.placeholder), {
      bottomBar: {
        resizingBar: u,
        navigation: f,
        charWrapper: o,
        charCounter: g
      },
      wysiwygFrame: n,
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
      const a = t.plugins, u = a.length ? a : Object.keys(a).map(function(f) {
        return a[f];
      });
      for (let f = 0, o = u.length, g; f < o; f++)
        g = u[f].default || u[f], i[g.name] = g;
    }
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || Ri, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new he._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const l = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(a, u) {
      for (let f in u)
        a[f] = u[f];
      return a;
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
    const n = "br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary";
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : n) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? he.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? he.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? he.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
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
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? Ol : [Ol, t.icons].reduce(function(a, u) {
      for (let f in u)
        he.hasOwn(u, f) && (a[f] = u[f]);
      return a;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(a, u) {
      for (let f in u)
        he.hasOwn(u, f) && (a[f] = u[f]);
      return a;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = he._setDefaultOptionStyle(t, t.defaultStyle);
  },
  _setWhitelist: function(e, t) {
    if (typeof t != "string") return e;
    t = t.split("|"), e = e.split("|");
    for (let i = 0, l = t.length, n; i < l; i++)
      n = e.indexOf(t[i]), n > -1 && e.splice(n, 1);
    return e.join("|");
  },
  /**
   * @description Suneditor's Default button list
   * @param {Object} options options
   * @private
   */
  _defaultButtons: function(e) {
    const t = e.icons, i = e.lang, l = he.isOSX_IOS ? "⌘" : "CTRL", n = he.isOSX_IOS ? "⇧" : "+SHIFT", a = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], u = e.rtl ? ["[", "]"] : ["]", "["], f = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", i.toolbar.bold + '<span class="se-shortcut">' + (a.indexOf("bold") > -1 ? "" : l + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", i.toolbar.underline + '<span class="se-shortcut">' + (a.indexOf("underline") > -1 ? "" : l + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", i.toolbar.italic + '<span class="se-shortcut">' + (a.indexOf("italic") > -1 ? "" : l + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", i.toolbar.strike + '<span class="se-shortcut">' + (a.indexOf("strike") > -1 ? "" : l + n + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", i.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", i.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", i.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", i.toolbar.indent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : l + '+<span class="se-shortcut-key">' + u[0] + "</span>") + "</span>", "indent", "", f[0]],
      outdent: ["", i.toolbar.outdent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : l + '+<span class="se-shortcut-key">' + u[1] + "</span>") + "</span>", "outdent", "", f[1]],
      fullScreen: ["se-code-view-enabled se-resizing-enabled", i.toolbar.fullScreen, "fullScreen", "", t.expansion],
      showBlocks: ["", i.toolbar.showBlocks, "showBlocks", "", t.show_blocks],
      codeView: ["se-code-view-enabled se-resizing-enabled", i.toolbar.codeView, "codeView", "", t.code_view],
      undo: ["", i.toolbar.undo + '<span class="se-shortcut">' + (a.indexOf("undo") > -1 ? "" : l + '+<span class="se-shortcut-key">Z</span>') + "</span>", "undo", "", t.undo],
      redo: ["", i.toolbar.redo + '<span class="se-shortcut">' + (a.indexOf("undo") > -1 ? "" : l + '+<span class="se-shortcut-key">Y</span> / ' + l + n + '+<span class="se-shortcut-key">Z</span>') + "</span>", "redo", "", t.redo],
      preview: ["se-resizing-enabled", i.toolbar.preview, "preview", "", t.preview],
      print: ["se-resizing-enabled", i.toolbar.print, "print", "", t.print],
      dir: ["", i.toolbar[e.rtl ? "dir_ltr" : "dir_rtl"], "dir", "", t[e.rtl ? "dir_ltr" : "dir_rtl"]],
      dir_ltr: ["", i.toolbar.dir_ltr, "dir_ltr", "", t.dir_ltr],
      dir_rtl: ["", i.toolbar.dir_rtl, "dir_rtl", "", t.dir_rtl],
      save: ["se-resizing-enabled", i.toolbar.save + '<span class="se-shortcut">' + (a.indexOf("save") > -1 ? "" : l + '+<span class="se-shortcut-key">S</span>') + "</span>", "save", "", t.save],
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
  _createButton: function(e, t, i, l, n, a, u) {
    const f = he.createElement("LI"), o = he.createElement("BUTTON"), g = t || i;
    return o.setAttribute("type", "button"), o.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), o.setAttribute("data-command", i), o.setAttribute("data-display", l), o.setAttribute("aria-label", g.replace(/<span .+<\/span>/, "")), o.setAttribute("tabindex", "-1"), n || (n = '<span class="se-icon-text">!</span>'), /^default\./i.test(n) && (n = u[n.replace(/^default\./i, "")]), /^text\./i.test(n) && (n = n.replace(/^text\./i, ""), o.className += " se-btn-more-text"), n += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + g + "</span></span>", a && o.setAttribute("disabled", !0), o.innerHTML = n, f.appendChild(o), {
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
  _createToolBar: function(e, t, i, l) {
    const n = e.createElement("DIV");
    n.className = "se-toolbar-separator-vertical";
    const a = e.createElement("DIV");
    a.className = "se-toolbar sun-editor-common";
    const u = e.createElement("DIV");
    u.className = "se-btn-tray", a.appendChild(u), t = JSON.parse(JSON.stringify(t));
    const f = l.icons, o = this._defaultButtons(l), g = {}, d = [];
    let b = null, x = null, w = null, k = null, L = "", s = !1;
    const r = he.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let p = 0, v, m, y, C, _; p < t.length; p++)
        if (v = !1, _ = "", C = t[p], w = this._createModuleGroup(), typeof C == "object") {
          for (let S = 0, D; S < C.length; S++) {
            if (x = C[S], D = !1, /^\%\d+/.test(x) && S === 0) {
              C[0] = x.replace(/[^\d]/g, ""), d.push(C), t.splice(p--, 1);
              continue e;
            }
            if (typeof x == "object")
              typeof x.add == "function" ? (L = x.name, b = o[L], i[L] = x) : (L = x.name, b = [x.buttonClass, x.title, x.name, x.dataDisplay, x.innerHTML, x._disabled]);
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
                D = !0;
                const E = x.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + E[1].trim();
                const B = E[2].trim(), R = E[3].trim();
                b = ["se-btn-more", B, y, "MORE", R];
              } else
                b = o[x];
              if (L = x, !b) {
                const E = i[L];
                if (!E) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + L + "]");
                b = [E.buttonClass, E.title, E.name, E.display, E.innerHTML, E._disabled];
              }
            }
            k = this._createButton(b[0], b[1], b[2], b[3], b[4], b[5], f), (v ? m : w.ul).appendChild(k.li), i[L] && (g[L] = k.button), D && (v = !0, m = he.createElement("DIV"), m.className = "se-more-layer " + y, m.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (_ ? ' style="float: ' + _ + ';"' : "") + "></ul></div>", r.appendChild(m), m = m.firstElementChild.firstElementChild);
          }
          if (s) {
            const S = n.cloneNode(!1);
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
        he.removeClass(u.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (l.rtl) {
          const p = n.cloneNode(!1);
          p.style.float = u.lastElementChild.style.float, u.appendChild(p);
        }
    }
    d.length > 0 && d.unshift(t), r.children.length > 0 && u.appendChild(r);
    const c = e.createElement("DIV");
    c.className = "se-menu-tray", a.appendChild(c);
    const h = e.createElement("DIV");
    return h.className = "se-toolbar-cover", a.appendChild(h), l.hideToolbar && (a.style.display = "none"), {
      element: a,
      plugins: i,
      pluginCallButtons: g,
      responsiveButtons: d,
      _menuTray: c,
      _buttonTray: u
    };
  }
}, Wi = function(e, t, i) {
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
function Za(e, t) {
  const i = e._w, l = e.util, n = e.options.historyStackDelayTime;
  let a = e.context.element, u = e.context.tool.undo, f = e.context.tool.redo, o = null, g = 0, d = [];
  function b() {
    const w = d[g];
    a.wysiwyg.innerHTML = w.contents, e.setRange(l.getNodeFromPath(w.s.path, a.wysiwyg), w.s.offset, l.getNodeFromPath(w.e.path, a.wysiwyg), w.e.offset), e.focus(), d.length <= 1 ? (u && u.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0)) : g === 0 ? (u && u.setAttribute("disabled", !0), f && f.removeAttribute("disabled")) : g === d.length - 1 ? (u && u.removeAttribute("disabled"), f && f.setAttribute("disabled", !0)) : (u && u.removeAttribute("disabled"), f && f.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function x() {
    e._checkComponents();
    const w = a.wysiwyg.innerHTML;
    if (!w || d[g] && w === d[g].contents) return;
    g++;
    const k = e._variable._range;
    d.length > g && (d = d.slice(0, g), f && f.setAttribute("disabled", !0)), k ? d[g] = {
      contents: w,
      s: {
        path: l.getNodePath(k.startContainer, null, null),
        offset: k.startOffset
      },
      e: {
        path: l.getNodePath(k.endContainer, null, null),
        offset: k.endOffset
      }
    } : d[g] = {
      contents: w,
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
    push: function(w) {
      i.setTimeout(e._resourcesStateChange.bind(e));
      const k = typeof w == "number" ? w > 0 ? w : 0 : w ? n : 0;
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
      d.length - 1 > g && (g++, b());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(w) {
      g = w < 0 ? d.length - 1 : w, b();
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
      }, w || t();
    },
    /**
     * @description Reset the disabled state of the buttons to fit the current stack.
     * @private
     */
    _resetCachingButton: function() {
      a = e.context.element, u = e.context.tool.undo, f = e.context.tool.redo, g === 0 ? (u && u.setAttribute("disabled", !0), f && g === d.length - 1 && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : g === d.length - 1 && f && f.setAttribute("disabled", !0);
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
const Fl = {
  name: "notice",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    const t = e.context;
    t.notice = {};
    let i = e.util.createElement("DIV"), l = e.util.createElement("SPAN"), n = e.util.createElement("BUTTON");
    i.className = "se-notice", n.className = "close", n.setAttribute("aria-label", "Close"), n.setAttribute("title", e.lang.dialogBox.close), n.innerHTML = e.icons.cancel, i.appendChild(l), i.appendChild(n), t.notice.modal = i, t.notice.message = l, n.addEventListener("click", this.onClick_cancel.bind(e)), t.element.editorArea.appendChild(i), i = null;
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
function qa(e, t, i, l, n, a) {
  const u = e.element.originElement.ownerDocument || document, f = u.defaultView || window, o = he, g = n.icons, d = {
    _d: u,
    _w: f,
    _parser: new f.DOMParser(),
    _prevRtl: n.rtl,
    _editorHeight: 0,
    _editorHeightPadding: 0,
    _listCamel: n.__listCommonStyle,
    _listKebab: o.camelToKebabCase(n.__listCommonStyle),
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
    notice: Fl,
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
      fontSizeUnit: new f.RegExp("\\d+" + n.fontSizeUnit + "$", "i")
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
      for (let r = 0, c, h; r < s.length; r++)
        c = s[r], h = c.getAttribute("data-command"), this.allCommandButtons[h] = c;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const s = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let r = 0, c, h, p; r < s.length; r++)
          c = s[r], h = c.getAttribute("data-command"), p = this.allCommandButtons[h], p && (c.parentElement.replaceChild(p, c), this.context.tool[h] && (this.context.tool[h] = p));
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
      for (let r = 0, c = s.length, h; r < c; r++)
        h = s[r].name, this.plugins[h] || (this.plugins[h] = s[r]), this.initPlugins[h] || (this.initPlugins[h] = !0, typeof this.plugins[h].add == "function" && this.plugins[h].add(this));
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
      const r = this._containerName = s.getAttribute("data-command"), c = this.container = this._menuTray[r];
      this.containerActiveButton = s, this._setMenuPosition(s, c), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
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
      const c = this.context.element.toolbar, h = c.offsetWidth, p = b._getEditorOffsets(e.element.toolbar), v = r.offsetWidth, m = s.parentElement.offsetLeft + 3;
      if (n.rtl) {
        const R = s.offsetWidth, Z = v > R ? v - R : 0, q = Z > 0 ? 0 : R - v;
        r.style.left = m - Z + q + "px", p.left > b._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const R = h <= v ? 0 : h - (m + v);
        R < 0 ? r.style.left = m + R + "px" : r.style.left = m + "px";
      }
      let y = 0, C = s;
      for (; C && C !== c; )
        y += C.offsetTop, C = C.offsetParent;
      const _ = y;
      this._isBalloon ? y += c.offsetTop + s.offsetHeight : y -= s.offsetHeight;
      const S = p.top, D = r.offsetHeight, E = this.getGlobalScrollOffset().top, B = f.innerHeight - (S - E + _ + s.parentElement.offsetHeight);
      if (B < D) {
        let R = -1 * (D - _ + 3);
        const Z = S - E + R, q = D + (Z < 0 ? Z : 0);
        q > B ? (r.style.height = q + "px", R = -1 * (q - _ + 3)) : (r.style.height = B + "px", R = _ + s.parentElement.offsetHeight), r.style.top = R + "px";
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
          r.style && (r.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(r) === -1 && (r.addEventListener("mousedown", function(c) {
            c.preventDefault(), c.stopPropagation();
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
    setControllerPosition: function(s, r, c, h) {
      n.rtl && (h.left *= -1);
      const p = o.getOffset(r, e.element.wysiwygFrame);
      s.style.visibility = "hidden", s.style.display = "block";
      const v = c === "top" ? -(s.offsetHeight + 2) : r.offsetHeight + 12;
      s.style.top = p.top + v + h.top + "px";
      const m = p.left - e.element.wysiwygFrame.scrollLeft + h.left, y = s.offsetWidth, C = r.offsetWidth, _ = o.hasClass(s.firstElementChild, "se-arrow") ? s.firstElementChild : null;
      if (n.rtl) {
        const S = y > C ? y - C : 0, D = S > 0 ? 0 : C - y;
        s.style.left = m - S + D + "px", S > 0 && _ && (_.style.left = (y - 14 < 10 + S ? y - 14 : 10 + S) + "px");
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
      const s = o.getParentElement(this.getSelectionNode(), "figcaption");
      s ? s.focus() : e.element.wysiwyg.focus();
    },
    /**
     * @description Focus to wysiwyg area
     */
    focus: function() {
      if (e.element.wysiwygFrame.style.display !== "none") {
        if (n.iframe)
          this.nativeFocus();
        else
          try {
            const s = this.getRange();
            if (s.startContainer === s.endContainer && o.isWysiwygDiv(s.startContainer)) {
              const r = s.commonAncestorContainer.children[s.startOffset];
              if (!o.isFormatElement(r) && !o.isComponent(r)) {
                const c = o.createElement(n.defaultTag), h = o.createElement("BR");
                c.appendChild(h), e.element.wysiwyg.insertBefore(c, r), this.setRange(h, 0, h, 0);
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
      r ? this.selectComponent(r.target, r.pluginName) : s ? (s = o.getChildElement(s, function(c) {
        return c.childNodes.length === 0 || c.nodeType === 3;
      }, !0), s ? this.setRange(s, s.textContent.length, s, s.textContent.length) : this.nativeFocus()) : this.focus();
    },
    /**
     * @description Focusout to wysiwyg area (.blur())
     */
    blur: function() {
      n.iframe ? e.element.wysiwygFrame.blur() : e.element.wysiwyg.blur();
    },
    /**
     * @description Set current editor's range object and return.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @returns {Object} Range object.
     */
    setRange: function(s, r, c, h) {
      if (!s || !c) return;
      r > s.textContent.length && (r = s.textContent.length), h > c.textContent.length && (h = c.textContent.length), o.isFormatElement(s) && (s = s.childNodes[r] || s.childNodes[r - 1] || s, r = r > 0 ? s.nodeType === 1 ? 1 : s.textContent ? s.textContent.length : 0 : 0), o.isFormatElement(c) && (c = c.childNodes[h] || c.childNodes[h - 1] || c, h = h > 0 ? c.nodeType === 1 ? 1 : c.textContent ? c.textContent.length : 0 : 0);
      const p = this._wd.createRange();
      try {
        p.setStart(s, r), p.setEnd(c, h);
      } catch (m) {
        console.warn("[SUNEDITOR.core.focus.error] " + m), this.nativeFocus();
        return;
      }
      const v = this.getSelection();
      return v.removeAllRanges && v.removeAllRanges(), v.addRange(p), this._rangeInfo(p, this.getSelection()), n.iframe && this.__focus(), p;
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
        const c = r.anchorNode, h = r.focusNode, p = r.anchorOffset, v = r.focusOffset, m = o.compareElements(c, h), y = m.ancestor && (m.result === 0 ? p <= v : m.result > 1);
        return this.setRange(
          y ? c : h,
          y ? p : v,
          y ? h : c,
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
        const c = e.element.wysiwyg, h = o.createElement(n.defaultTag);
        h.innerHTML = "<br>", c.insertBefore(h, r && r !== c ? r.nextElementSibling : c.firstElementChild), this.setRange(h.firstElementChild, 0, h.firstElementChild, 1), s = this._variable._range;
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
      this._variable._range = s, s.collapsed ? o.isWysiwygDiv(s.commonAncestorContainer) ? c = s.commonAncestorContainer.children[s.startOffset] || s.commonAncestorContainer : c = s.commonAncestorContainer : c = r.extentNode || r.anchorNode, this._variable._selectionNode = c;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const s = e.element.wysiwyg, r = this._wd.createRange();
      let c = s.firstElementChild, h = null;
      return c ? (h = c.firstChild, h || (h = o.createElement("BR"), c.appendChild(h))) : (c = o.createElement(n.defaultTag), h = o.createElement("BR"), c.appendChild(h), s.appendChild(c)), r.setStart(h, 0), r.setEnd(h, 0), r;
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
      let c = s.startContainer, h = s.startOffset, p = s.endContainer, v = s.endOffset, m, y, C;
      if (o.isFormatElement(c))
        for (c.childNodes[h] ? (c = c.childNodes[h] || c, h = 0) : (c = c.lastChild || c, h = c.textContent.length); c && c.nodeType === 1 && c.firstChild; )
          c = c.firstChild || c, h = 0;
      if (o.isFormatElement(p)) {
        for (p = p.childNodes[v] || p.lastChild || p; p && p.nodeType === 1 && p.lastChild; )
          p = p.lastChild;
        v = r ? 0 : p.textContent.length;
      }
      if (m = o.isWysiwygDiv(c) ? e.element.wysiwyg.firstChild : c, y = h, o.isBreak(m) || m.nodeType === 1 && m.childNodes.length > 0) {
        const _ = o.isBreak(m);
        if (!_) {
          for (; m && !o.isBreak(m) && m.nodeType === 1; )
            m = m.childNodes[y] || m.nextElementSibling || m.nextSibling, y = 0;
          let S = o.getFormatElement(m, null);
          S === o.getRangeFormatElement(S, null) && (S = o.createElement(o.getParentElement(m, o.isCell) ? "DIV" : n.defaultTag), m.parentNode.insertBefore(S, m), S.appendChild(m));
        }
        if (o.isBreak(m)) {
          const S = o.createTextNode(o.zeroWidthSpace);
          m.parentNode.insertBefore(S, m), m = S, _ && c === p && (p = m, v = 1);
        }
      }
      if (c = m, h = y, m = o.isWysiwygDiv(p) ? e.element.wysiwyg.lastChild : p, y = v, o.isBreak(m) || m.nodeType === 1 && m.childNodes.length > 0) {
        const _ = o.isBreak(m);
        if (!_) {
          for (; m && !o.isBreak(m) && m.nodeType === 1 && (C = m.childNodes, C.length !== 0); )
            m = C[y > 0 ? y - 1 : y] || !/FIGURE/i.test(C[0].nodeName) ? C[0] : m.previousElementSibling || m.previousSibling || c, y = y > 0 ? m.textContent.length : y;
          let S = o.getFormatElement(m, null);
          S === o.getRangeFormatElement(S, null) && (S = o.createElement(o.isCell(S) ? "DIV" : n.defaultTag), m.parentNode.insertBefore(S, m), S.appendChild(m));
        }
        if (o.isBreak(m)) {
          const S = o.createTextNode(o.zeroWidthSpace);
          m.parentNode.insertBefore(S, m), m = S, y = 1, _ && !m.previousSibling && o.removeItem(p);
        }
      }
      return p = m, v = y, this.setRange(c, h, p, v), !0;
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
        const R = e.element.wysiwyg.children;
        if (R.length === 0) return [];
        this.setRange(R[0], 0, R[R.length - 1], R[R.length - 1].textContent.trim().length), r = this.getRange();
      }
      const c = r.startContainer, h = r.endContainer, p = r.commonAncestorContainer, v = o.getListChildren(p, function(R) {
        return s ? s(R) : o.isFormatElement(R);
      });
      if (!o.isWysiwygDiv(p) && !o.isRangeFormatElement(p) && v.unshift(o.getFormatElement(p, null)), c === h || v.length === 1) return v;
      let m = o.getFormatElement(c, null), y = o.getFormatElement(h, null), C = null, _ = null;
      const S = function(R) {
        return o.isTable(R) ? /^TABLE$/i.test(R.nodeName) : !0;
      };
      let D = o.getRangeFormatElement(m, S), E = o.getRangeFormatElement(y, S);
      o.isTable(D) && o.isListCell(D.parentNode) && (D = D.parentNode), o.isTable(E) && o.isListCell(E.parentNode) && (E = E.parentNode);
      const B = D === E;
      for (let R = 0, Z = v.length, q; R < Z; R++) {
        if (q = v[R], m === q || !B && q === D) {
          C = R;
          continue;
        }
        if (y === q || !B && q === E) {
          _ = R;
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
      const r = this.getRange().commonAncestorContainer, c = o.getParentElement(r, o.isComponent), h = o.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(p) {
        const v = this.getParentElement(p, this.isComponent);
        return this.isFormatElement(p) && (!v || v === c) || this.isComponent(p) && !this.getFormatElement(p);
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
      const h = [];
      for (c = c === "start" ? "previousSibling" : "nextSibling"; s && !o.isFormatElement(s) && !o.isWysiwygDiv(s); )
        if (!s[c] || o.isBreak(s[c]) && !s[c][c])
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
      const c = o.getFormatElement(this.getSelectionNode(), null);
      let h = null;
      if (!o.isFormatElement(s) && o.isFreeFormatElement(c || s.parentNode))
        h = o.createElement("BR");
      else {
        const p = r ? typeof r == "string" ? r : r.nodeName : o.isFormatElement(c) && !o.isRangeFormatElement(c) && !o.isFreeFormatElement(c) ? c.nodeName : n.defaultTag;
        h = o.createElement(p), h.innerHTML = "<br>", (r && typeof r != "string" || !r && o.isFormatElement(c)) && o.copyTagAttributes(h, r || c, ["id"]);
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
    insertComponent: function(s, r, c, h) {
      if (this.isReadOnly || c && !this.checkCharCount(s, null))
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
      let r, c;
      return (/^FIGURE$/i.test(s.nodeName) || /se-component/.test(s.className)) && (r = s.querySelector(this._fileManager.queryString)), !r && s.nodeName && this._fileManager.regExp.test(s.nodeName) && (r = s), r && (c = this._fileManager.pluginMap[r.nodeName.toLowerCase()], c) ? {
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
    selectComponent: function(s, r) {
      if (o.isUneditableComponent(o.getParentElement(s, o.isComponent)) || o.isUneditableComponent(s)) return !1;
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
      const r = o.getParentElement(s, o.isComponent), c = e.element.lineBreaker_t.style, h = e.element.lineBreaker_b.style, p = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : s, v = o.isListCell(r.parentNode);
      let m, y, C;
      (v ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, m = o.getOffset(s, e.element.wysiwygFrame).top + y, C = p.offsetWidth / 2 / 2, c.top = m - y - 12 + "px", c.left = o.getOffset(p).left + C + "px", c.display = "block") : c.display = "none", (v ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) ? (m || (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, m = o.getOffset(s, e.element.wysiwygFrame).top + y, C = p.offsetWidth / 2 / 2), h.top = m + p.offsetHeight - y - 12 + "px", h.left = o.getOffset(p).left + p.offsetWidth - C - 24 + "px", h.display = "block") : h.display = "none";
    },
    _checkDuplicateNode: function(s, r) {
      (function c(h) {
        d._dupleCheck(h, r);
        const p = h.childNodes;
        for (let v = 0, m = p.length; v < m; v++)
          c(p[v]);
      })(s);
    },
    _dupleCheck: function(s, r) {
      if (!o.isTextStyleElement(s)) return;
      const c = (s.style.cssText.match(/[^;]+;/g) || []).map(function(v) {
        return v.trim();
      }), h = s.nodeName;
      if (/^span$/i.test(h) && c.length === 0) return s;
      let p = !1;
      return function v(m) {
        if (!(o.isWysiwygDiv(m) || !o.isTextStyleElement(m))) {
          if (m.nodeName === h) {
            p = !0;
            const y = m.style.cssText.match(/[^;]+;/g) || [];
            for (let C = 0, _ = y.length, S; C < _; C++)
              (S = c.indexOf(y[C].trim())) > -1 && c.splice(S, 1);
            for (let C = 0, _ = m.classList.length; C < _; C++)
              s.classList.remove(m.classList[C]);
          }
          v(m.parentElement);
        }
      }(r), p && ((s.style.cssText = c.join(" ")) || (s.setAttribute("style", ""), s.removeAttribute("style")), s.attributes.length || s.setAttribute("data-se-duple", "true")), s;
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
      let h = null, p = this.getRange(), v = o.isListCell(p.commonAncestorContainer) ? p.commonAncestorContainer : o.getFormatElement(this.getSelectionNode(), null), m = o.isListCell(v) && (o.isListCell(s) || o.isList(s)), y, C, _, S = null;
      const D = o.isFreeFormatElement(v), E = !D && (o.isFormatElement(s) || o.isRangeFormatElement(s)) || o.isComponent(s);
      if (m && (_ = r || o.isList(s) ? v.lastChild : v.nextElementSibling, S = o.isList(s) ? v : (_ || v).parentNode), !r && (E || o.isComponent(s) || o.isMedia(s))) {
        const I = this.isEdgePoint(p.endContainer, p.endOffset, "end"), A = this.removeNode(), F = A.container, N = F === A.prevContainer && p.collapsed ? null : A.prevContainer;
        if (m && N)
          if (S = N.nodeType === 3 ? N.parentNode : N, S.contains(F)) {
            let U = !0;
            for (_ = F; _.parentNode && _.parentNode !== S; )
              _ = _.parentNode, U = !1;
            U && F === N && (_ = _.nextSibling);
          } else
            _ = null;
        else if (m && o.isListCell(F) && !v.parentElement)
          v = o.createElement("LI"), S.appendChild(v), F.appendChild(S), _ = null;
        else if (F.nodeType === 3 || o.isBreak(F) || m) {
          const U = o.getParentElement(F, (function(z) {
            return this.isRangeFormatElement(z) || this.isListCell(z);
          }).bind(o));
          if (r = o.splitElement(F, A.offset, U ? o.getElementDepth(U) + 1 : 0), !r)
            _ = r = v;
          else if (m) {
            if (v.contains(F)) {
              const z = o.isList(v.lastElementChild);
              let V = null;
              I || (V = v.cloneNode(!1), V.appendChild(r.textContent.trim() ? r : o.createTextNode(o.zeroWidthSpace))), z && (V || (V = v.cloneNode(!1), V.appendChild(o.createTextNode(o.zeroWidthSpace))), V.appendChild(v.lastElementChild)), V && (v.parentNode.insertBefore(V, v.nextElementSibling), _ = r = V);
            }
          } else
            r = r.previousSibling;
        }
      }
      p = !r && !E ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const B = p.commonAncestorContainer, R = p.startOffset, Z = p.endOffset, q = p.startContainer === B && o.isFormatElement(B), P = q && (B.childNodes[R] || B.childNodes[0]) || p.startContainer, O = q && (B.childNodes[Z] || B.childNodes[B.childNodes.length - 1]) || p.endContainer;
      if (!m)
        if (r)
          y = r.parentNode, r = r.nextSibling, C = !0;
        else if (y = P, P.nodeType === 3 && (y = P.parentNode), p.collapsed)
          if (B.nodeType === 3)
            B.textContent.length > Z ? r = B.splitText(Z) : r = B.nextSibling;
          else if (o.isBreak(y))
            r = y, y = y.parentNode;
          else {
            let I = y.childNodes[R];
            const A = I && I.nodeType === 3 && o.onlyZeroWidthSpace(I) && o.isBreak(I.nextSibling) ? I.nextSibling : I;
            A ? !A.nextSibling && o.isBreak(A) ? (y.removeChild(A), r = null) : r = o.isBreak(A) && !o.isBreak(s) ? A : A.nextSibling : r = null;
          }
        else if (P === O) {
          this.isEdgePoint(O, Z) ? r = O.nextSibling : r = O.splitText(Z);
          let A = P;
          this.isEdgePoint(P, R) || (A = P.splitText(R)), y.removeChild(A), y.childNodes.length === 0 && E && (y.innerHTML = "<br>");
        } else {
          const A = this.removeNode(), F = A.container, N = A.prevContainer;
          if (F && F.childNodes.length === 0 && E && (o.isFormatElement(F) ? F.innerHTML = "<br>" : o.isRangeFormatElement(F) && (F.innerHTML = "<" + n.defaultTag + "><br></" + n.defaultTag + ">")), o.isListCell(F) && s.nodeType === 3)
            y = F, r = null;
          else if (!E && N)
            if (y = N.nodeType === 3 ? N.parentNode : N, y.contains(F)) {
              let U = !0;
              for (r = F; r.parentNode && r.parentNode !== y; )
                r = r.parentNode, U = !1;
              U && F === N && (r = r.nextSibling);
            } else
              r = null;
          else o.isWysiwygDiv(F) && !o.isFormatElement(s) ? (y = F.appendChild(o.createElement(n.defaultTag)), r = null) : (r = E ? O : F === N ? F.nextSibling : F, y = !r || !r.parentNode ? B : r.parentNode);
          for (; r && !o.isFormatElement(r) && r.parentNode !== B; )
            r = r.parentNode;
        }
      try {
        if (!m) {
          if ((o.isWysiwygDiv(r) || y === e.element.wysiwyg.parentNode) && (y = e.element.wysiwyg, r = null), o.isFormatElement(s) || o.isRangeFormatElement(s) || !o.isListCell(y) && o.isComponent(s)) {
            const I = y;
            if (o.isList(r))
              y = r, r = null;
            else if (o.isListCell(r))
              y = r.previousElementSibling || r;
            else if (!C && !r) {
              const A = this.removeNode(), F = A.container.nodeType === 3 ? o.isListCell(o.getFormatElement(A.container, null)) ? A.container : o.getFormatElement(A.container, null) || A.container.parentNode : A.container, N = o.isWysiwygDiv(F) || o.isRangeFormatElement(F);
              y = N ? F : F.parentNode, r = N ? null : F.nextSibling;
            }
            I.childNodes.length === 0 && y !== I && o.removeItem(I);
          }
          if (E && !D && !o.isRangeFormatElement(y) && !o.isListCell(y) && !o.isWysiwygDiv(y) && (r = y.nextElementSibling, y = y.parentNode), o.isWysiwygDiv(y) && (s.nodeType === 3 || o.isBreak(s))) {
            const I = o.createElement(n.defaultTag);
            I.appendChild(s), h = s, s = I;
          }
        }
        if (m ? S.parentNode ? (y = S, r = _) : (y = e.element.wysiwyg, r = null) : r = y === r ? y.lastChild : r, o.isListCell(s) && !o.isList(y)) {
          if (o.isListCell(y))
            r = y.nextElementSibling, y = y.parentNode;
          else {
            const I = o.createElement("ol");
            y.insertBefore(I, r), y = I, r = null;
          }
          m = !0;
        }
        if (this._checkDuplicateNode(s, y), y.insertBefore(s, r), m)
          if (o.onlyZeroWidthSpace(v.textContent.trim()))
            o.removeItem(v), s = s.lastChild;
          else {
            const I = o.getArrayItem(v.children, o.isList);
            I && (s !== I ? (s.appendChild(I), s = I.previousSibling) : (y.appendChild(s), s = y), o.onlyZeroWidthSpace(v.textContent.trim()) && o.removeItem(v));
          }
      } catch (I) {
        y.appendChild(s), console.warn("[SUNEDITOR.insertNode.warn] " + I);
      } finally {
        h && (s = h);
        const I = y.querySelectorAll("[data-se-duple]");
        if (I.length > 0)
          for (let A = 0, F = I.length, N, U, z, V; A < F; A++) {
            for (N = I[A], z = N.childNodes, V = N.parentNode; z[0]; )
              U = z[0], V.insertBefore(U, N);
            N === s && (s = U), o.removeItem(N);
          }
        if ((o.isFormatElement(s) || o.isComponent(s)) && P === O) {
          const A = o.getFormatElement(B, null);
          A && A.nodeType === 1 && o.isEmptyLine(A) && o.removeItem(A);
        }
        if (D && (o.isFormatElement(s) || o.isRangeFormatElement(s)) && (s = this._setIntoFreeFormat(s)), !o.isComponent(s)) {
          let A = 1;
          if (s.nodeType === 3)
            A = s.textContent.length, this.setRange(s, A, s, A);
          else if (!o.isBreak(s) && !o.isListCell(s) && o.isFormatElement(y)) {
            let F = null;
            (!s.previousSibling || o.isBreak(s.previousSibling)) && (F = o.createTextNode(o.zeroWidthSpace), s.parentNode.insertBefore(F, s)), (!s.nextSibling || o.isBreak(s.nextSibling)) && (F = o.createTextNode(o.zeroWidthSpace), s.parentNode.insertBefore(F, s.nextSibling)), o._isIgnoreNodeChange(s) && (s = s.nextSibling, A = 0);
          }
          this.setRange(s, A, s, A);
        }
        return s;
      }
    },
    _setIntoFreeFormat: function(s) {
      const r = s.parentNode;
      let c, h;
      for (; o.isFormatElement(s) || o.isRangeFormatElement(s); ) {
        for (c = s.childNodes, h = null; c[0]; ) {
          if (h = c[0], o.isFormatElement(h) || o.isRangeFormatElement(h)) {
            if (this._setIntoFreeFormat(h), !s.parentNode) break;
            c = s.childNodes;
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
        const A = o.getParentElement(s.startContainer, o.isMediaComponent);
        if (A) {
          const F = o.createElement("BR"), N = o.createElement(n.defaultTag);
          return N.appendChild(F), o.changeElement(A, N), d.setRange(N, 0, N, 0), this.history.push(!0), {
            container: N,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = s.startOffset === 0, c = d.isEdgePoint(s.endContainer, s.endOffset, "end");
      let h = null, p = null, v = null;
      r && (p = o.getFormatElement(s.startContainer), p && (h = p.previousElementSibling, p = h)), c && (v = o.getFormatElement(s.endContainer), v = v && v.nextElementSibling);
      let m, y = 0, C = s.startContainer, _ = s.endContainer, S = s.startOffset, D = s.endOffset;
      const E = s.commonAncestorContainer.nodeType === 3 && s.commonAncestorContainer.parentNode === C.parentNode ? C.parentNode : s.commonAncestorContainer;
      if (E === C && E === _ && (C = E.children[S], _ = E.children[D], S = D = 0), !C || !_) return {
        container: E,
        offset: 0
      };
      if (C === _ && s.collapsed && C.textContent && o.onlyZeroWidthSpace(C.textContent.substr(S)))
        return {
          container: C,
          offset: S,
          prevContainer: C && C.parentNode ? C : null
        };
      let B = null, R = null;
      const Z = o.getListChildNodes(E, null);
      let q = o.getArrayIndex(Z, C), P = o.getArrayIndex(Z, _);
      if (Z.length > 0 && q > -1 && P > -1) {
        for (let A = q + 1, F = C; A >= 0; A--)
          Z[A] === F.parentNode && Z[A].firstChild === F && S === 0 && (q = A, F = F.parentNode);
        for (let A = P - 1, F = _; A > q; A--)
          Z[A] === F.parentNode && Z[A].nodeType === 1 && (Z.splice(A, 1), F = F.parentNode, --P);
      } else {
        if (Z.length === 0) {
          if (o.isFormatElement(E) || o.isRangeFormatElement(E) || o.isWysiwygDiv(E) || o.isBreak(E) || o.isMedia(E))
            return {
              container: E,
              offset: 0
            };
          if (E.nodeType === 3)
            return {
              container: E,
              offset: D
            };
          Z.push(E), C = _ = E;
        } else if (C = _ = Z[0], o.isBreak(C) || o.onlyZeroWidthSpace(C))
          return {
            container: o.isMedia(E) ? E : C,
            offset: 0
          };
        q = P = 0;
      }
      for (let A = q; A <= P; A++) {
        const F = Z[A];
        if (F.length === 0 || F.nodeType === 3 && F.data === void 0) {
          this._nodeRemoveListItem(F);
          continue;
        }
        if (F === C) {
          if (C.nodeType === 1) {
            if (o.isComponent(C)) continue;
            B = o.createTextNode(C.textContent);
          } else
            F === _ ? (B = o.createTextNode(C.substringData(0, S) + _.substringData(D, _.length - D)), y = S) : B = o.createTextNode(C.substringData(0, S));
          if (B.length > 0 ? C.data = B.data : this._nodeRemoveListItem(C), F === _) break;
          continue;
        }
        if (F === _) {
          if (_.nodeType === 1) {
            if (o.isComponent(_)) continue;
            R = o.createTextNode(_.textContent);
          } else
            R = o.createTextNode(_.substringData(D, _.length - D));
          R.length > 0 ? _.data = R.data : this._nodeRemoveListItem(_);
          continue;
        }
        this._nodeRemoveListItem(F);
      }
      const O = o.getParentElement(_, "ul"), I = o.getParentElement(C, "li");
      if (O && I && I.contains(O) ? (m = O.previousSibling, y = m.textContent.length) : (m = _ && _.parentNode ? _ : C && C.parentNode ? C : s.endContainer || s.startContainer, y = !r && !c ? y : c ? m.textContent.length : 0), !o.isWysiwygDiv(m) && m.childNodes.length === 0) {
        const A = o.removeItemAllParents(m, null, null);
        A && (m = A.sc || A.ec || e.element.wysiwyg);
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
        for (let D = 0, E = r.length, B, R, Z, q, P, O; D < E; D++)
          if (B = r[D], !!o.isListCell(B) && (R = B.lastElementChild, R && o.isListCell(B.nextElementSibling) && r.indexOf(B.nextElementSibling) > -1 && (q = R.lastElementChild, r.indexOf(q) > -1))) {
            let I = null;
            for (; I = q.lastElementChild; )
              if (o.isList(I))
                if (r.indexOf(I.lastElementChild) > -1)
                  q = I.lastElementChild;
                else
                  continue e;
            Z = R.firstElementChild, P = r.indexOf(Z), O = r.indexOf(q), r.splice(P, O - P + 1), E = r.length;
            continue;
          }
      let c = r[r.length - 1], h, p, v;
      o.isRangeFormatElement(c) || o.isFormatElement(c) ? h = c : h = o.getRangeFormatElement(c, null) || o.getFormatElement(c, null), o.isCell(h) ? (p = null, v = h) : (p = h.nextSibling, v = h.parentNode);
      let m = o.getElementDepth(h), y = null;
      const C = [], _ = function(D, E, B) {
        let R = null;
        if (D !== E && !o.isTable(E)) {
          if (E && o.getElementDepth(D) === o.getElementDepth(E)) return B;
          R = o.removeItemAllParents(E, null, D);
        }
        return R ? R.ec : B;
      };
      for (let D = 0, E = r.length, B, R, Z, q, P, O, I; D < E; D++)
        if (B = r[D], R = B.parentNode, !(!R || s.contains(R)))
          if (Z = o.getElementDepth(B), o.isList(R)) {
            if (y === null && (O ? (y = O, I = !0, O = null) : y = R.cloneNode(!1)), C.push(B), P = r[D + 1], D === E - 1 || P && P.parentNode !== R) {
              P && B.contains(P.parentNode) && (O = P.parentNode.cloneNode(!1));
              let A = R.parentNode, F;
              for (; o.isList(A); )
                F = o.createElement(A.nodeName), F.appendChild(y), y = F, A = A.parentNode;
              const N = this.detachRangeFormatElement(R, C, null, !0, !0);
              m >= Z ? (m = Z, v = N.cc, p = _(v, R, N.ec), p && (v = p.parentNode)) : v === N.cc && (p = N.ec), v !== N.cc && (q = _(v, N.cc, q), q !== void 0 ? p = q : p = N.cc);
              for (let U = 0, z = N.removeArray.length; U < z; U++)
                y.appendChild(N.removeArray[U]);
              I || s.appendChild(y), O && N.removeArray[N.removeArray.length - 1].appendChild(O), y = null, I = !1;
            }
          } else
            m >= Z && (m = Z, v = R, p = B.nextSibling), s.appendChild(B), v !== R && (q = _(v, R), q !== void 0 && (p = q));
      if (this.effectNode = null, o.mergeSameTags(s, null, !1), o.mergeNestedTags(s, (function(D) {
        return this.isList(D);
      }).bind(o)), p && o.getElementDepth(p) > 0 && (o.isList(p.parentNode) || o.isList(p.parentNode.parentNode))) {
        const D = o.getParentElement(p, (function(B) {
          return this.isRangeFormatElement(B) && !this.isList(B);
        }).bind(o)), E = o.splitElement(p, null, D ? o.getElementDepth(D) + 1 : 0);
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
    detachRangeFormatElement: function(s, r, c, h, p) {
      const v = this.getRange();
      let m = v.startOffset, y = v.endOffset, C = o.getListChildNodes(s, function(N) {
        return N.parentNode === s;
      }), _ = s.parentNode, S = null, D = null, E = s.cloneNode(!1);
      const B = [], R = o.isList(c);
      let Z = !1, q = !1, P = !1;
      function O(N, U, z, V) {
        if (o.onlyZeroWidthSpace(U) && (U.innerHTML = o.zeroWidthSpace, m = y = 1), U.nodeType === 3)
          return N.insertBefore(U, z), U;
        const M = (P ? U : V).childNodes;
        let $ = U.cloneNode(!1), te = null, j = null;
        for (; M[0]; )
          j = M[0], o._notTextNode(j) && !o.isBreak(j) && !o.isListCell($) ? ($.childNodes.length > 0 && (te || (te = $), N.insertBefore($, z), $ = U.cloneNode(!1)), N.insertBefore(j, z), te || (te = j)) : $.appendChild(j);
        if ($.childNodes.length > 0) {
          if (o.isListCell(N) && o.isListCell($) && o.isList(z))
            if (R) {
              for (te = z; z; )
                $.appendChild(z), z = z.nextSibling;
              N.parentNode.insertBefore($, N.nextElementSibling);
            } else {
              const Y = V.nextElementSibling, ie = o.detachNestedList(V, !1);
              if (s !== ie || Y !== V.nextElementSibling) {
                const re = $.childNodes;
                for (; re[0]; )
                  V.appendChild(re[0]);
                s = ie, q = !0;
              }
            }
          else
            N.insertBefore($, z);
          te || (te = $);
        }
        return te;
      }
      for (let N = 0, U = C.length, z, V, M; N < U; N++)
        if (z = C[N], !(z.nodeType === 3 && o.isList(E)))
          if (P = !1, h && N === 0 && (!r || r.length === U || r[0] === z ? S = s.previousSibling : S = E), r && (V = r.indexOf(z)), r && V === -1)
            E || (E = s.cloneNode(!1)), E.appendChild(z);
          else {
            if (r && (M = r[V + 1]), E && E.children.length > 0 && (_.insertBefore(E, s), E = null), !R && o.isListCell(z))
              if (M && o.getElementDepth(z) !== o.getElementDepth(M) && (o.isListCell(_) || o.getArrayItem(z.children, o.isList, !1))) {
                const $ = z.nextElementSibling, te = o.detachNestedList(z, !1);
                (s !== te || $ !== z.nextElementSibling) && (s = te, q = !0);
              } else {
                const $ = z;
                z = o.createElement(h ? $.nodeName : o.isList(s.parentNode) || o.isListCell(s.parentNode) ? "LI" : o.isCell(s.parentNode) ? "DIV" : n.defaultTag);
                const te = o.isListCell(z), j = $.childNodes;
                for (; j[0] && !(o.isList(j[0]) && !te); )
                  z.appendChild(j[0]);
                o.copyFormatAttributes(z, $), P = !0;
              }
            else
              z = z.cloneNode(!1);
            if (!q && (h ? (B.push(z), o.removeItem(C[N])) : (c ? (Z || (_.insertBefore(c, s), Z = !0), z = O(c, z, null, C[N])) : z = O(_, z, s, C[N]), q || (r ? (D = z, S || (S = z)) : S || (S = D = z))), q)) {
              q = P = !1, C = o.getListChildNodes(s, function($) {
                return $.parentNode === s;
              }), E = s.cloneNode(!1), _ = s.parentNode, N = -1, U = C.length;
              continue;
            }
          }
      const I = s.parentNode;
      let A = s.nextSibling;
      E && E.children.length > 0 && I.insertBefore(E, A), c ? S = c.previousSibling : S || (S = s.previousSibling), A = s.nextSibling !== E ? s.nextSibling : E ? E.nextSibling : null, s.children.length === 0 || s.textContent.length === 0 ? o.removeItem(s) : o.removeEmptyNode(s, null, !1);
      let F = null;
      if (h)
        F = {
          cc: I,
          sc: S,
          so: m,
          ec: A,
          eo: y,
          removeArray: B
        };
      else {
        S || (S = D), D || (D = S);
        const N = o.getEdgeChildNodes(S, D.parentNode ? S : D);
        F = {
          cc: (N.sc || N.ec).parentNode,
          sc: N.sc,
          so: m,
          ec: N.ec,
          eo: y,
          removeArray: null
        };
      }
      if (this.effectNode = null, p) return F;
      !h && F && (r ? this.setRange(F.sc, m, F.ec, y) : this.setRange(F.sc, 0, F.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(s, r) {
      let c = {}, h = !1, p = !1, v = null, m = null;
      const y = (function(C) {
        return !this.isComponent(C);
      }).bind(o);
      for (let C = 0, _ = s.length, S, D, E, B; C < _; C++) {
        if (E = C === _ - 1, D = o.getRangeFormatElement(s[C], y), B = o.isList(D), !S && B)
          S = D, c = { r: S, f: [o.getParentElement(s[C], "LI")] }, C === 0 && (h = !0);
        else if (S && B)
          if (S !== D) {
            const R = this.detachRangeFormatElement(c.f[0].parentNode, c.f, null, r, !0);
            D = s[C].parentNode, h && (v = R.sc, h = !1), E && (m = R.ec), B ? (S = D, c = { r: S, f: [o.getParentElement(s[C], "LI")] }, E && (p = !0)) : S = null;
          } else
            c.f.push(o.getParentElement(s[C], "LI")), E && (p = !0);
        if (E && o.isList(S)) {
          const R = this.detachRangeFormatElement(c.f[0].parentNode, c.f, null, r, !0);
          (p || _ === 1) && (m = R.ec), h && (v = R.sc || m);
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
    nodeChange: function(s, r, c, h) {
      this._resetRangeToTextNode();
      let p = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, c = c && c.length > 0 ? c : !1;
      const v = !s, m = v && !c && !r;
      let y = p.startContainer, C = p.startOffset, _ = p.endContainer, S = p.endOffset;
      if (m && p.collapsed && o.isFormatElement(y.parentNode) || y === _ && y.nodeType === 1 && o.isNonEditable(y)) {
        const j = y.parentNode;
        if (!o.isListCell(j) || !o.getValues(j.style).some((function(Y) {
          return this._listKebab.indexOf(Y) > -1;
        }).bind(this))) return;
      }
      if (p.collapsed && !m && y.nodeType === 1 && !o.isBreak(y) && !o.isComponent(y)) {
        let j = null;
        const Y = y.childNodes[C];
        Y && (Y.nextSibling ? j = o.isBreak(Y) ? Y : Y.nextSibling : j = null);
        const ie = o.createTextNode(o.zeroWidthSpace);
        y.insertBefore(ie, j), this.setRange(ie, 1, ie, 1), p = this.getRange(), y = p.startContainer, C = p.startOffset, _ = p.endContainer, S = p.endOffset;
      }
      o.isFormatElement(y) && (y = y.childNodes[C] || y.firstChild, C = 0), o.isFormatElement(_) && (_ = _.childNodes[S] || _.lastChild, S = _.textContent.length), v && (s = o.createElement("DIV"));
      const D = f.RegExp, E = s.nodeName;
      if (!m && y === _ && !c && s) {
        let j = y, Y = 0;
        const ie = [], re = s.style;
        for (let fe = 0, le = re.length; fe < le; fe++)
          ie.push(re[fe]);
        const ue = s.classList;
        for (let fe = 0, le = ue.length; fe < le; fe++)
          ie.push("." + ue[fe]);
        if (ie.length > 0) {
          for (; !o.isFormatElement(j) && !o.isWysiwygDiv(j); ) {
            for (let fe = 0; fe < ie.length; fe++)
              if (j.nodeType === 1) {
                const le = ie[fe], ye = /^\./.test(le) ? new D("\\s*" + le.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, ze = v ? !!j.style[le] : !!j.style[le] && !!s.style[le] && j.style[le] === s.style[le], ne = ye === !1 ? !1 : v ? !!j.className.match(ye) : !!j.className.match(ye) && !!s.className.match(ye);
                (ze || ne) && Y++;
              }
            j = j.parentNode;
          }
          if (Y >= ie.length) return;
        }
      }
      let B = {}, R = {}, Z, q = "", P = "", O = "";
      if (r) {
        for (let j = 0, Y = r.length, ie; j < Y; j++)
          ie = r[j], /^\./.test(ie) ? P += (P ? "|" : "\\s*(?:") + ie.replace(/^\./, "") : q += (q ? "|" : "(?:;|^|\\s)(?:") + ie;
        q && (q += ")\\s*:[^;]*\\s*(?:;|$)", q = new D(q, "ig")), P && (P += ")(?=\\s+|$)", P = new D(P, "ig"));
      }
      if (c) {
        O = "^(?:" + c[0];
        for (let j = 1; j < c.length; j++)
          O += "|" + c[j];
        O += ")$", O = new D(O, "i");
      }
      const I = f.Boolean, A = { v: !1 }, F = function(j) {
        const Y = j.cloneNode(!1);
        if (Y.nodeType === 3 || o.isBreak(Y)) return Y;
        if (m) return null;
        const ie = !O && v || O && O.test(Y.nodeName);
        if (ie && !h)
          return A.v = !0, null;
        const re = Y.style.cssText;
        let ue = "";
        q && re.length > 0 && (ue = re.replace(q, "").trim(), ue !== re && (A.v = !0));
        const fe = Y.className;
        let le = "";
        return P && fe.length > 0 && (le = fe.replace(P, "").trim(), le !== fe && (A.v = !0)), v && (P || !fe) && (q || !re) && !ue && !le && ie ? (A.v = !0, null) : ue || le || Y.nodeName !== E || I(q) !== I(re) || I(P) !== I(fe) ? (q && re.length > 0 && (Y.style.cssText = ue), Y.style.cssText || Y.removeAttribute("style"), P && fe.length > 0 && (Y.className = le.trim()), Y.className.trim() || Y.removeAttribute("class"), !Y.style.cssText && !Y.className && (Y.nodeName === E || ie) ? (A.v = !0, null) : Y) : (A.v = !0, null);
      }, N = this.getSelectedElements(null);
      p = this.getRange(), y = p.startContainer, C = p.startOffset, _ = p.endContainer, S = p.endOffset, o.getFormatElement(y, null) || (y = o.getChildElement(N[0], function(j) {
        return j.nodeType === 3;
      }, !1), C = 0), o.getFormatElement(_, null) || (_ = o.getChildElement(N[N.length - 1], function(j) {
        return j.nodeType === 3;
      }, !1), S = _.textContent.length);
      const U = o.getFormatElement(y, null) === o.getFormatElement(_, null), z = N.length - (U ? 0 : 1);
      Z = s.cloneNode(!1);
      const V = m || v && function(j) {
        for (let Y = 0, ie = j.length; Y < ie; Y++)
          if (o._isMaintainedNode(j[Y]) || o._isSizeNode(j[Y])) return !0;
        return !1;
      }(c), M = v || o._isSizeNode(Z), $ = this._util_getMaintainedNode.bind(o, V, M), te = this._util_isMaintainedNode.bind(o, V, M);
      if (U) {
        this._resetCommonListCell(N[0], r) && (p = this.setRange(y, C, _, S));
        const j = this._nodeChange_oneLine(N[0], Z, F, y, C, _, S, m, v, p.collapsed, A, $, te);
        B.container = j.startContainer, B.offset = j.startOffset, R.container = j.endContainer, R.offset = j.endOffset, B.container === R.container && o.onlyZeroWidthSpace(B.container) && (B.offset = R.offset = 1), this._setCommonListStyle(j.ancestor, null);
      } else {
        let j = !1;
        z > 0 && this._resetCommonListCell(N[z], r) && (j = !0), this._resetCommonListCell(N[0], r) && (j = !0), j && this.setRange(y, C, _, S), z > 0 && (Z = s.cloneNode(!1), R = this._nodeChange_endLine(N[z], Z, F, _, S, m, v, A, $, te));
        for (let Y = z - 1, ie; Y > 0; Y--)
          this._resetCommonListCell(N[Y], r), Z = s.cloneNode(!1), ie = this._nodeChange_middleLine(N[Y], Z, F, m, v, A, R.container), ie.endContainer && ie.ancestor.contains(ie.endContainer) && (R.ancestor = null, R.container = ie.endContainer), this._setCommonListStyle(ie.ancestor, null);
        Z = s.cloneNode(!1), B = this._nodeChange_startLine(N[0], Z, F, y, C, m, v, A, $, te, R.container), B.endContainer && (R.ancestor = null, R.container = B.endContainer), z <= 0 ? R = B : R.container || (R.ancestor = null, R.container = B.container, R.offset = B.container.textContent.length), this._setCommonListStyle(B.ancestor, null), this._setCommonListStyle(R.ancestor || o.getFormatElement(R.container), null);
      }
      this.controllersOff(), this.setRange(B.container, B.offset, R.container, R.offset), this.history.push(!1);
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
      const c = o.getArrayItem(s.childNodes, function(D) {
        return !o.isBreak(D);
      }, !0), h = s.style, p = [], v = [], m = o.getValues(h);
      for (let D = 0, E = this._listKebab.length; D < E; D++)
        m.indexOf(this._listKebab[D]) > -1 && r.indexOf(this._listKebab[D]) > -1 && (p.push(this._listCamel[D]), v.push(this._listKebab[D]));
      if (!p.length) return;
      const y = o.createElement("SPAN");
      for (let D = 0, E = p.length; D < E; D++)
        y.style[p[D]] = h[v[D]], h.removeProperty(v[D]);
      let C = y.cloneNode(!1), _ = null, S = !1;
      for (let D = 0, E = c.length, B, R; D < E; D++)
        B = c[D], !n._textTagsMap[B.nodeName.toLowerCase()] && (R = o.getValues(B.style), R.length === 0 || p.some(function(Z) {
          return R.indexOf(Z) === -1;
        }) && R.some(function(Z) {
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
      const c = o.getArrayItem((r || s).childNodes, function(C) {
        return !o.isBreak(C);
      }, !0);
      if (r = c[0], !r || c.length > 1 || r.nodeType !== 1) return;
      const h = r.style, p = s.style, v = r.nodeName.toLowerCase();
      let m = !1;
      n._textTagsMap[v] === n._defaultCommand.bold.toLowerCase() && (p.fontWeight = "bold"), n._textTagsMap[v] === n._defaultCommand.italic.toLowerCase() && (p.fontStyle = "italic");
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
      const h = this._isMaintainedNode(c);
      return this.getParentElement(c, this._isMaintainedNode.bind(this)) ? h : h || (r ? !1 : this._isSizeNode(c));
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
    _nodeChange_oneLine: function(s, r, c, h, p, v, m, y, C, _, S, D, E) {
      let B = h.parentNode;
      for (; !B.nextSibling && !B.previousSibling && !o.isFormatElement(B.parentNode) && !o.isWysiwygDiv(B.parentNode) && B.nodeName !== r.nodeName; )
        B = B.parentNode;
      if (!C && B === v.parentNode && B.nodeName === r.nodeName && o.onlyZeroWidthSpace(h.textContent.slice(0, p)) && o.onlyZeroWidthSpace(v.textContent.slice(m))) {
        const ne = B.childNodes;
        let Ne = !0;
        for (let xe = 0, Je = ne.length, Ue, Ze, He, we; xe < Je; xe++) {
          if (Ue = ne[xe], we = !o.onlyZeroWidthSpace(Ue), Ue === h) {
            Ze = !0;
            continue;
          }
          if (Ue === v) {
            He = !0;
            continue;
          }
          if (!Ze && we || Ze && He && we) {
            Ne = !1;
            break;
          }
        }
        if (Ne)
          return o.copyTagAttributes(B, r), {
            ancestor: s,
            startContainer: h,
            startOffset: p,
            endContainer: v,
            endOffset: m
          };
      }
      S.v = !1;
      const R = s, Z = [r], q = s.cloneNode(!1), P = h === v;
      let O = h, I = p, A = v, F = m, N = !1, U = !1, z, V, M, $, te;
      const j = f.RegExp;
      function Y(ne) {
        const Ne = new j("(?:;|^|\\s)(?:" + $ + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let xe = "";
        return Ne && ne.style.cssText.length > 0 && (xe = Ne.test(ne.style.cssText)), !xe;
      }
      if (function ne(Ne, xe) {
        const Je = Ne.childNodes;
        for (let Ue = 0, Ze = Je.length, He; Ue < Ze; Ue++) {
          let we = Je[Ue];
          if (!we) continue;
          let zt = xe, Ye;
          if (!N && we === O) {
            let Fe = q;
            te = D(we);
            const Ee = o.createTextNode(O.nodeType === 1 ? "" : O.substringData(0, I)), Ie = o.createTextNode(
              O.nodeType === 1 ? "" : O.substringData(
                I,
                P && F >= I ? F - I : O.data.length - I
              )
            );
            if (te) {
              const ut = D(xe);
              if (ut && ut.parentNode !== Fe) {
                let qe = ut, mt = null;
                for (; qe.parentNode !== Fe; ) {
                  for (xe = mt = qe.parentNode.cloneNode(!1); qe.childNodes[0]; )
                    mt.appendChild(qe.childNodes[0]);
                  qe.appendChild(mt), qe = qe.parentNode;
                }
                qe.parentNode.appendChild(ut);
              }
              te = te.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(Ee) || xe.appendChild(Ee);
            const De = D(xe);
            for (De && (te = De), te && (Fe = te), V = we, z = [], $ = ""; V !== Fe && V !== R && V !== null; )
              He = E(V) ? null : c(V), He && V.nodeType === 1 && Y(V) && (z.push(He), $ += V.style.cssText.substr(0, V.style.cssText.indexOf(":")) + "|"), V = V.parentNode;
            const rt = z.pop() || Ie;
            for (M = V = rt; z.length > 0; )
              V = z.pop(), M.appendChild(V), M = V;
            if (r.appendChild(rt), Fe.appendChild(r), te && !D(A) && (r = r.cloneNode(!1), q.appendChild(r), Z.push(r)), O = Ie, I = 0, N = !0, V !== Ie && V.appendChild(O), !P) continue;
          }
          if (!U && we === A) {
            te = D(we);
            const Fe = o.createTextNode(A.nodeType === 1 ? "" : A.substringData(F, A.length - F)), Ee = o.createTextNode(P || A.nodeType === 1 ? "" : A.substringData(0, F));
            if (te ? te = te.cloneNode(!1) : E(r.parentNode) && !te && (r = r.cloneNode(!1), q.appendChild(r), Z.push(r)), !o.onlyZeroWidthSpace(Fe)) {
              V = we, $ = "", z = [];
              const De = [];
              for (; V !== q && V !== R && V !== null; )
                V.nodeType === 1 && Y(V) && (E(V) ? De.push(V.cloneNode(!1)) : z.push(V.cloneNode(!1)), $ += V.style.cssText.substr(0, V.style.cssText.indexOf(":")) + "|"), V = V.parentNode;
              for (z = z.concat(De), Ye = M = V = z.pop() || Fe; z.length > 0; )
                V = z.pop(), M.appendChild(V), M = V;
              q.appendChild(Ye), V.textContent = Fe.data;
            }
            if (te && Ye) {
              const De = D(Ye);
              De && (te = De);
            }
            for (V = we, z = [], $ = ""; V !== q && V !== R && V !== null; )
              He = E(V) ? null : c(V), He && V.nodeType === 1 && Y(V) && (z.push(He), $ += V.style.cssText.substr(0, V.style.cssText.indexOf(":")) + "|"), V = V.parentNode;
            const Ie = z.pop() || Ee;
            for (M = V = Ie; z.length > 0; )
              V = z.pop(), M.appendChild(V), M = V;
            te ? (r = r.cloneNode(!1), r.appendChild(Ie), te.insertBefore(r, te.firstChild), q.appendChild(te), Z.push(r), te = null) : r.appendChild(Ie), A = Ee, F = Ee.data.length, U = !0, !y && _ && (r = Ee, Ee.textContent = o.zeroWidthSpace), V !== Ee && V.appendChild(A);
            continue;
          }
          if (N) {
            if (we.nodeType === 1 && !o.isBreak(we)) {
              o._isIgnoreNodeChange(we) ? (q.appendChild(we.cloneNode(!0)), _ || (r = r.cloneNode(!1), q.appendChild(r), Z.push(r))) : ne(we, we);
              continue;
            }
            V = we, z = [], $ = "";
            const Fe = [];
            for (; V.parentNode !== null && V !== R && V !== r; )
              He = U ? V.cloneNode(!1) : c(V), V.nodeType === 1 && !o.isBreak(we) && He && Y(V) && (E(V) ? te || Fe.push(He) : z.push(He), $ += V.style.cssText.substr(0, V.style.cssText.indexOf(":")) + "|"), V = V.parentNode;
            z = z.concat(Fe);
            const Ee = z.pop() || we;
            for (M = V = Ee; z.length > 0; )
              V = z.pop(), M.appendChild(V), M = V;
            if (E(r.parentNode) && !E(Ee) && !o.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), q.appendChild(r), Z.push(r)), !U && !te && E(Ee)) {
              r = r.cloneNode(!1);
              const Ie = Ee.childNodes;
              for (let De = 0, rt = Ie.length; De < rt; De++)
                r.appendChild(Ie[De]);
              Ee.appendChild(r), q.appendChild(Ee), Z.push(r), r.children.length > 0 ? xe = V : xe = r;
            } else Ee === we ? U ? xe = q : xe = r : U ? (q.appendChild(Ee), xe = V) : (r.appendChild(Ee), xe = V);
            if (te && we.nodeType === 3)
              if (D(we)) {
                const Ie = o.getParentElement(xe, (function(De) {
                  return this._isMaintainedNode(De.parentNode) || De.parentNode === q;
                }).bind(o));
                te.appendChild(Ie), r = Ie.cloneNode(!1), Z.push(r), q.appendChild(r);
              } else
                te = null;
          }
          Ye = we.cloneNode(!1), xe.appendChild(Ye), we.nodeType === 1 && !o.isBreak(we) && (zt = Ye), ne(we, zt);
        }
      }(s, q), C && !y && !S.v)
        return {
          ancestor: s,
          startContainer: h,
          startOffset: p,
          endContainer: v,
          endOffset: m
        };
      if (y = y && C, y)
        for (let ne = 0; ne < Z.length; ne++) {
          let Ne = Z[ne], xe, Je, Ue;
          if (_)
            xe = o.createTextNode(o.zeroWidthSpace), q.replaceChild(xe, Ne);
          else {
            const Ze = Ne.childNodes;
            for (Je = Ze[0]; Ze[0]; )
              Ue = Ze[0], q.insertBefore(Ue, Ne);
            o.removeItem(Ne);
          }
          ne === 0 && (_ ? O = A = xe : (O = Je, A = Ue));
        }
      else {
        if (C)
          for (let ne = 0; ne < Z.length; ne++)
            this._stripRemoveNode(Z[ne]);
        _ && (O = A = r);
      }
      o.removeEmptyNode(q, r, !1), _ && (I = O.textContent.length, F = A.textContent.length);
      const ie = y || A.textContent.length === 0;
      !o.isBreak(A) && A.textContent.length === 0 && (o.removeItem(A), A = O), F = ie ? A.textContent.length : F;
      const re = { s: 0, e: 0 }, ue = o.getNodePath(O, q, re), fe = !A.parentNode;
      fe && (A = O);
      const le = { s: 0, e: 0 }, ye = o.getNodePath(A, q, !fe && !ie ? le : null);
      I += re.s, F = _ ? I : fe ? O.textContent.length : ie ? F + re.s : F + le.s;
      const ze = o.mergeSameTags(q, [ue, ye], !0);
      return s.parentNode.replaceChild(q, s), O = o.getNodeFromPath(ue, q), A = o.getNodeFromPath(ye, q), {
        ancestor: q,
        startContainer: O,
        startOffset: I + ze[0],
        endContainer: A,
        endOffset: F + ze[1]
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
    _nodeChange_startLine: function(s, r, c, h, p, v, m, y, C, _, S) {
      let D = h.parentNode;
      for (; !D.nextSibling && !D.previousSibling && !o.isFormatElement(D.parentNode) && !o.isWysiwygDiv(D.parentNode) && D.nodeName !== r.nodeName; )
        D = D.parentNode;
      if (!m && D.nodeName === r.nodeName && !o.isFormatElement(D) && !D.nextSibling && o.onlyZeroWidthSpace(h.textContent.slice(0, p))) {
        let N = !0, U = h.previousSibling;
        for (; U; ) {
          if (!o.onlyZeroWidthSpace(U)) {
            N = !1;
            break;
          }
          U = U.previousSibling;
        }
        if (N)
          return o.copyTagAttributes(D, r), {
            ancestor: s,
            container: h,
            offset: p
          };
      }
      y.v = !1;
      const E = s, B = [r], R = s.cloneNode(!1);
      let Z = h, q = p, P = !1, O, I, A, F;
      if (function N(U, z) {
        const V = U.childNodes;
        for (let M = 0, $ = V.length, te, j; M < $; M++) {
          const Y = V[M];
          if (!Y) continue;
          let ie = z;
          if (P && !o.isBreak(Y)) {
            if (Y.nodeType === 1) {
              if (o._isIgnoreNodeChange(Y)) {
                if (r = r.cloneNode(!1), j = Y.cloneNode(!0), R.appendChild(j), R.appendChild(r), B.push(r), S && Y.contains(S)) {
                  const le = o.getNodePath(S, Y);
                  S = o.getNodeFromPath(le, j);
                }
              } else
                N(Y, Y);
              continue;
            }
            I = Y, O = [];
            const re = [];
            for (; I.parentNode !== null && I !== E && I !== r; )
              te = c(I), I.nodeType === 1 && te && (_(I) ? F || re.push(te) : O.push(te)), I = I.parentNode;
            O = O.concat(re);
            const ue = O.length > 0, fe = O.pop() || Y;
            for (A = I = fe; O.length > 0; )
              I = O.pop(), A.appendChild(I), A = I;
            if (_(r.parentNode) && !_(fe) && (r = r.cloneNode(!1), R.appendChild(r), B.push(r)), !F && _(fe)) {
              r = r.cloneNode(!1);
              const le = fe.childNodes;
              for (let ye = 0, ze = le.length; ye < ze; ye++)
                r.appendChild(le[ye]);
              fe.appendChild(r), R.appendChild(fe), z = _(I) ? r : I, B.push(r);
            } else ue ? (r.appendChild(fe), z = I) : z = r;
            if (F && Y.nodeType === 3)
              if (C(Y)) {
                const le = o.getParentElement(z, (function(ye) {
                  return this._isMaintainedNode(ye.parentNode) || ye.parentNode === R;
                }).bind(o));
                F.appendChild(le), r = le.cloneNode(!1), B.push(r), R.appendChild(r);
              } else
                F = null;
          }
          if (!P && Y === Z) {
            let re = R;
            F = C(Y);
            const ue = o.createTextNode(Z.nodeType === 1 ? "" : Z.substringData(0, q)), fe = o.createTextNode(Z.nodeType === 1 ? "" : Z.substringData(q, Z.length - q));
            if (F) {
              const ze = C(z);
              if (ze && ze.parentNode !== re) {
                let ne = ze, Ne = null;
                for (; ne.parentNode !== re; ) {
                  for (z = Ne = ne.parentNode.cloneNode(!1); ne.childNodes[0]; )
                    Ne.appendChild(ne.childNodes[0]);
                  ne.appendChild(Ne), ne = ne.parentNode;
                }
                ne.parentNode.appendChild(ze);
              }
              F = F.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(ue) || z.appendChild(ue);
            const le = C(z);
            for (le && (F = le), F && (re = F), I = z, O = []; I !== re && I !== null; )
              te = c(I), I.nodeType === 1 && te && O.push(te), I = I.parentNode;
            const ye = O.pop() || z;
            for (A = I = ye; O.length > 0; )
              I = O.pop(), A.appendChild(I), A = I;
            ye !== z ? (r.appendChild(ye), z = I) : z = r, o.isBreak(Y) && r.appendChild(Y.cloneNode(!1)), re.appendChild(r), Z = fe, q = 0, P = !0, z.appendChild(Z);
            continue;
          }
          te = P ? c(Y) : Y.cloneNode(!1), te && (z.appendChild(te), Y.nodeType === 1 && !o.isBreak(Y) && (ie = te)), N(Y, ie);
        }
      }(s, R), m && !v && !y.v)
        return {
          ancestor: s,
          container: h,
          offset: p,
          endContainer: S
        };
      if (v = v && m, v)
        for (let N = 0; N < B.length; N++) {
          let U = B[N];
          const z = U.childNodes, V = z[0];
          for (; z[0]; )
            R.insertBefore(z[0], U);
          o.removeItem(U), N === 0 && (Z = V);
        }
      else if (m) {
        r = r.firstChild;
        for (let N = 0; N < B.length; N++)
          this._stripRemoveNode(B[N]);
      }
      if (!v && R.childNodes.length === 0)
        s.childNodes ? Z = s.childNodes[0] : (Z = o.createTextNode(o.zeroWidthSpace), s.appendChild(Z));
      else {
        o.removeEmptyNode(R, r, !1), o.onlyZeroWidthSpace(R.textContent) && (Z = R.firstChild, q = 0);
        const N = { s: 0, e: 0 }, U = o.getNodePath(Z, R, N);
        q += N.s;
        const z = o.mergeSameTags(R, [U], !0);
        s.parentNode.replaceChild(R, s), Z = o.getNodeFromPath(U, R), q += z[0];
      }
      return {
        ancestor: R,
        container: Z,
        offset: q,
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
    _nodeChange_middleLine: function(s, r, c, h, p, v, m) {
      if (!p) {
        let S = null;
        m && s.contains(m) && (S = o.getNodePath(m, s));
        const D = s.cloneNode(!0), E = r.nodeName, B = r.style.cssText, R = r.className;
        let Z = D.childNodes, q = 0, P = Z.length;
        for (let O; q < P && (O = Z[q], O.nodeType !== 3); q++)
          if (O.nodeName === E)
            O.style.cssText += B, o.addClass(O, R);
          else {
            if (!o.isBreak(O) && o._isIgnoreNodeChange(O))
              continue;
            if (P === 1) {
              Z = O.childNodes, P = Z.length, q = -1;
              continue;
            } else
              break;
          }
        if (P > 0 && q === P)
          return s.innerHTML = D.innerHTML, {
            ancestor: s,
            endContainer: S ? o.getNodeFromPath(S, s) : null
          };
      }
      v.v = !1;
      const y = s.cloneNode(!1), C = [r];
      let _ = !0;
      if (function S(D, E) {
        const B = D.childNodes;
        for (let R = 0, Z = B.length, q, P; R < Z; R++) {
          let O = B[R];
          if (!O) continue;
          let I = E;
          if (!o.isBreak(O) && o._isIgnoreNodeChange(O)) {
            if (r.childNodes.length > 0 && (y.appendChild(r), r = r.cloneNode(!1)), P = O.cloneNode(!0), y.appendChild(P), y.appendChild(r), C.push(r), E = r, m && O.contains(m)) {
              const A = o.getNodePath(m, O);
              m = o.getNodeFromPath(A, P);
            }
            continue;
          } else
            q = c(O), q && (_ = !1, E.appendChild(q), O.nodeType === 1 && (I = q));
          o.isBreak(O) || S(O, I);
        }
      }(s, r), _ || p && !h && !v.v) return { ancestor: s, endContainer: m };
      if (y.appendChild(r), h && p)
        for (let S = 0; S < C.length; S++) {
          let D = C[S];
          const E = D.childNodes;
          for (; E[0]; )
            y.insertBefore(E[0], D);
          o.removeItem(D);
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
    _nodeChange_endLine: function(s, r, c, h, p, v, m, y, C, _) {
      let S = h.parentNode;
      for (; !S.nextSibling && !S.previousSibling && !o.isFormatElement(S.parentNode) && !o.isWysiwygDiv(S.parentNode) && S.nodeName !== r.nodeName; )
        S = S.parentNode;
      if (!m && S.nodeName === r.nodeName && !o.isFormatElement(S) && !S.previousSibling && o.onlyZeroWidthSpace(h.textContent.slice(p))) {
        let F = !0, N = h.nextSibling;
        for (; N; ) {
          if (!o.onlyZeroWidthSpace(N)) {
            F = !1;
            break;
          }
          N = N.nextSibling;
        }
        if (F)
          return o.copyTagAttributes(S, r), {
            ancestor: s,
            container: h,
            offset: p
          };
      }
      y.v = !1;
      const D = s, E = [r], B = s.cloneNode(!1);
      let R = h, Z = p, q = !1, P, O, I, A;
      if (function F(N, U) {
        const z = N.childNodes;
        for (let V = z.length - 1, M; 0 <= V; V--) {
          const $ = z[V];
          if (!$) continue;
          let te = U;
          if (q && !o.isBreak($)) {
            if ($.nodeType === 1) {
              if (o._isIgnoreNodeChange($)) {
                r = r.cloneNode(!1);
                const re = $.cloneNode(!0);
                B.insertBefore(re, U), B.insertBefore(r, re), E.push(r);
              } else
                F($, $);
              continue;
            }
            O = $, P = [];
            const j = [];
            for (; O.parentNode !== null && O !== D && O !== r; )
              M = c(O), M && O.nodeType === 1 && (_(O) ? A || j.push(M) : P.push(M)), O = O.parentNode;
            P = P.concat(j);
            const Y = P.length > 0, ie = P.pop() || $;
            for (I = O = ie; P.length > 0; )
              O = P.pop(), I.appendChild(O), I = O;
            if (_(r.parentNode) && !_(ie) && (r = r.cloneNode(!1), B.insertBefore(r, B.firstChild), E.push(r)), !A && _(ie)) {
              r = r.cloneNode(!1);
              const re = ie.childNodes;
              for (let ue = 0, fe = re.length; ue < fe; ue++)
                r.appendChild(re[ue]);
              ie.appendChild(r), B.insertBefore(ie, B.firstChild), E.push(r), r.children.length > 0 ? U = O : U = r;
            } else Y ? (r.insertBefore(ie, r.firstChild), U = O) : U = r;
            if (A && $.nodeType === 3)
              if (C($)) {
                const re = o.getParentElement(U, (function(ue) {
                  return this._isMaintainedNode(ue.parentNode) || ue.parentNode === B;
                }).bind(o));
                A.appendChild(re), r = re.cloneNode(!1), E.push(r), B.insertBefore(r, B.firstChild);
              } else
                A = null;
          }
          if (!q && $ === R) {
            A = C($);
            const j = o.createTextNode(R.nodeType === 1 ? "" : R.substringData(Z, R.length - Z)), Y = o.createTextNode(R.nodeType === 1 ? "" : R.substringData(0, Z));
            if (A) {
              A = A.cloneNode(!1);
              const re = C(U);
              if (re && re.parentNode !== B) {
                let ue = re, fe = null;
                for (; ue.parentNode !== B; ) {
                  for (U = fe = ue.parentNode.cloneNode(!1); ue.childNodes[0]; )
                    fe.appendChild(ue.childNodes[0]);
                  ue.appendChild(fe), ue = ue.parentNode;
                }
                ue.parentNode.insertBefore(re, ue.parentNode.firstChild);
              }
              A = A.cloneNode(!1);
            } else _(r.parentNode) && !A && (r = r.cloneNode(!1), B.appendChild(r), E.push(r));
            for (o.onlyZeroWidthSpace(j) || U.insertBefore(j, U.firstChild), O = U, P = []; O !== B && O !== null; )
              M = _(O) ? null : c(O), M && O.nodeType === 1 && P.push(M), O = O.parentNode;
            const ie = P.pop() || U;
            for (I = O = ie; P.length > 0; )
              O = P.pop(), I.appendChild(O), I = O;
            ie !== U ? (r.insertBefore(ie, r.firstChild), U = O) : U = r, o.isBreak($) && r.appendChild($.cloneNode(!1)), A ? (A.insertBefore(r, A.firstChild), B.insertBefore(A, B.firstChild), A = null) : B.insertBefore(r, B.firstChild), R = Y, Z = Y.data.length, q = !0, U.insertBefore(R, U.firstChild);
            continue;
          }
          M = q ? c($) : $.cloneNode(!1), M && (U.insertBefore(M, U.firstChild), $.nodeType === 1 && !o.isBreak($) && (te = M)), F($, te);
        }
      }(s, B), m && !v && !y.v)
        return {
          ancestor: s,
          container: h,
          offset: p
        };
      if (v = v && m, v)
        for (let F = 0; F < E.length; F++) {
          let N = E[F];
          const U = N.childNodes;
          let z = null;
          for (; U[0]; )
            z = U[0], B.insertBefore(z, N);
          o.removeItem(N), F === E.length - 1 && (R = z, Z = z.textContent.length);
        }
      else if (m) {
        r = r.firstChild;
        for (let F = 0; F < E.length; F++)
          this._stripRemoveNode(E[F]);
      }
      if (!v && B.childNodes.length === 0)
        s.childNodes ? R = s.childNodes[0] : (R = o.createTextNode(o.zeroWidthSpace), s.appendChild(R));
      else {
        if (!m && r.textContent.length === 0)
          return o.removeEmptyNode(B, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        o.removeEmptyNode(B, r, !1), o.onlyZeroWidthSpace(B.textContent) ? (R = B.firstChild, Z = R.textContent.length) : o.onlyZeroWidthSpace(R) && (R = r, Z = 1);
        const F = { s: 0, e: 0 }, N = o.getNodePath(R, B, F);
        Z += F.s;
        const U = o.mergeSameTags(B, [N], !0);
        s.parentNode.replaceChild(B, s), R = o.getNodeFromPath(N, B), Z += U[0];
      }
      return {
        ancestor: B,
        container: R,
        offset: R.nodeType === 1 && Z === 1 ? R.childNodes.length : Z
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
            const h = e.element.toolbar.querySelector("." + s);
            h && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = c, h.style.display = "block", b._showToolbarBalloon(), b._showToolbarInline()), o.addClass(c, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), b._showToolbarBalloon(), b._showToolbarInline());
          return;
        }
        if (/container/.test(r) && (this._menuTray[s] === null || c !== this.containerActiveButton)) {
          this.callPlugin(s, this.containerOn.bind(this, c), c);
          return;
        }
        if (this.isReadOnly && o.arrayIncludes(this.resizingDisabledButtons, c)) return;
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
            let h = o.getChildElement(c.firstChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !1) || c.firstChild, p = o.getChildElement(c.lastChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !0) || c.lastChild;
            if (!h || !p) return;
            if (o.isMedia(h)) {
              const C = this.getFileComponent(h), _ = o.createElement("BR"), S = o.createElement(n.defaultTag);
              S.appendChild(_), h = C ? C.component : h, h.parentNode.insertBefore(S, h), h = _;
            }
            if (o.isMedia(p)) {
              const C = o.createElement("BR"), _ = o.createElement(n.defaultTag);
              _.appendChild(C), c.appendChild(_), p = C;
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
            this.setDir(n.rtl ? "ltr" : "rtl");
            break;
          case "dir_ltr":
            this.setDir("ltr");
            break;
          case "dir_rtl":
            this.setDir("rtl");
            break;
          case "save":
            if (typeof n.callBackSave == "function")
              n.callBackSave(this.getContents(!1), this._variable.isChanged);
            else if (this._variable.isChanged && typeof x.save == "function")
              x.save();
            else
              throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
            this._variable.isChanged = !1, e.tool.save && e.tool.save.setAttribute("disabled", !0);
            break;
          default:
            r = n._defaultCommand[r.toLowerCase()] || r, this.commandMap[r] || (this.commandMap[r] = s);
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
      const r = this.getRange(), c = this.getSelectedElements(null), h = [], p = s !== "indent", v = n.rtl ? "marginRight" : "marginLeft";
      let m = r.startContainer, y = r.endContainer, C = r.startOffset, _ = r.endOffset;
      for (let S = 0, D = c.length, E, B; S < D; S++)
        E = c[S], !o.isListCell(E) || !this.plugins.list ? (B = /\d+/.test(E.style[v]) ? o.getNumber(E.style[v], 0) : 0, p ? B -= 25 : B += 25, o.setStyle(E, v, B <= 0 ? "" : B + "px")) : (p || E.previousElementSibling) && h.push(E);
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
      this.controllersOff(), o.setDisabledButtons(!s, this.codeViewDisabledButtons), s ? (o.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), n.height === "auto" && !n.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(n.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, b._hideToolbar())), this.nativeFocus(), o.removeClass(this._styleCommandMap.codeView, "active"), o.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : n.height === "auto" && !n.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), n.codeMirrorEditor && n.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, b._showToolbarInline())), this._variable._range = null, e.element.code.focus(), o.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && o.setDisabledButtons(!0, this.resizingDisabledButtons), typeof x.toggleCodeView == "function" && x.toggleCodeView(this._variable.isCodeView, this);
    },
    /**
     * @description Convert the data of the code view and put it in the WYSIWYG area.
     * @private
     */
    _setCodeDataToEditor: function() {
      const s = this._getCodeView();
      if (n.fullPage) {
        const r = this._parser.parseFromString(s, "text/html");
        if (!this.options.__allowedScriptTag) {
          const p = r.head.children;
          for (let v = 0, m = p.length; v < m; v++)
            /^script$/i.test(p[v].tagName) && (r.head.removeChild(p[v]), v--, m--);
        }
        let c = r.head.innerHTML;
        (!r.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !r.head.querySelector("style")) && (c += o._setIframeCssTags(this.options)), this._wd.head.innerHTML = c, this._wd.body.innerHTML = this.convertContentsForEditor(r.body.innerHTML);
        const h = r.body.attributes;
        for (let p = 0, v = h.length; p < v; p++)
          h[p].name !== "contenteditable" && this._wd.body.setAttribute(h[p].name, h[p].value);
        if (!o.hasClass(this._wd.body, "sun-editor-editable")) {
          const p = n._editableClass.split(" ");
          for (let v = 0; v < p.length; v++)
            o.addClass(this._wd.body, n._editableClass[v]);
        }
      } else
        e.element.wysiwyg.innerHTML = s.length > 0 ? this.convertContentsForEditor(s) : "<" + n.defaultTag + "><br></" + n.defaultTag + ">";
    },
    /**
     * @description Convert the data of the WYSIWYG area and put it in the code view area.
     * @private
     */
    _setEditorDataToCodeView: function() {
      const s = this.convertHTMLForCodeView(e.element.wysiwyg, !1);
      let r = "";
      if (n.fullPage) {
        const c = o.getAttributesToString(this._wd.body, null);
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
      const r = e.element.topArea, c = e.element.toolbar, h = e.element.editorArea, p = e.element.wysiwygFrame, v = e.element.code, m = this._variable;
      this.controllersOff();
      const y = c.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      m.isFullScreen ? (m.isFullScreen = !1, p.style.cssText = m._wysiwygOriginCssText, v.style.cssText = m._codeOriginCssText, c.style.cssText = "", h.style.cssText = m._editorAreaOriginCssText, r.style.cssText = m._originCssText, u.body.style.overflow = m._bodyOverflow, n.height === "auto" && !n.codeMirrorEditor && b._codeViewAutoHeight(), n.toolbarContainer && n.toolbarContainer.appendChild(c), n.stickyToolbar > -1 && o.removeClass(c, "se-toolbar-sticky"), m._fullScreenAttrs.sticky && !n.toolbarContainer && (m._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", o.addClass(c, "se-toolbar-sticky")), this._isInline = m._fullScreenAttrs.inline, this._isBalloon = m._fullScreenAttrs.balloon, this._isInline && b._showToolbarInline(), n.toolbarContainer && o.removeClass(c, "se-toolbar-balloon"), b.onScroll_window(), s && o.changeElement(s.firstElementChild, g.expansion), e.element.topArea.style.marginTop = "", o.removeClass(this._styleCommandMap.fullScreen, "active")) : (m.isFullScreen = !0, m._fullScreenAttrs.inline = this._isInline, m._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), n.toolbarContainer && e.element.relative.insertBefore(c, h), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (m._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", o.removeClass(c, "se-toolbar-sticky")), m._bodyOverflow = u.body.style.overflow, u.body.style.overflow = "hidden", m._editorAreaOriginCssText = h.style.cssText, m._wysiwygOriginCssText = p.style.cssText, m._codeOriginCssText = v.style.cssText, h.style.cssText = c.style.cssText = "", p.style.cssText = (p.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + n._editorStyles.editor, v.style.cssText = (v.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], c.style.width = p.style.height = v.style.height = "100%", c.style.position = "relative", c.style.display = "block", m.innerHeight_fullScreen = f.innerHeight - c.offsetHeight, h.style.height = m.innerHeight_fullScreen - n.fullScreenOffset + "px", s && o.changeElement(s.firstElementChild, g.reduction), n.iframe && n.height === "auto" && (h.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = n.fullScreenOffset + "px", o.addClass(this._styleCommandMap.fullScreen, "active")), y && x.toolbar.hide(), typeof x.toggleFullScreen == "function" && x.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const s = o.createElement("IFRAME");
      s.style.display = "none", u.body.appendChild(s);
      const r = n.printTemplate ? n.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), c = o.getIframeDocument(s), h = this._wd;
      if (n.iframe) {
        const p = n._printClass !== null ? 'class="' + n._printClass + '"' : n.fullPage ? o.getAttributesToString(h.body, ["contenteditable"]) : 'class="' + n._editableClass + '"';
        c.write(
          "<!DOCTYPE html><html><head>" + h.head.innerHTML + "</head><body " + p + ">" + r + "</body></html>"
        );
      } else {
        const p = u.head.getElementsByTagName("link"), v = u.head.getElementsByTagName("style");
        let m = "";
        for (let y = 0, C = p.length; y < C; y++)
          m += p[y].outerHTML;
        for (let y = 0, C = v.length; y < C; y++)
          m += v[y].outerHTML;
        c.write(
          "<!DOCTYPE html><html><head>" + m + '</head><body class="' + (n._printClass !== null ? n._printClass : n._editableClass) + '">' + r + "</body></html>"
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
          d.closeLoading(), o.removeItem(s);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      d.submenuOff(), d.containerOff(), d.controllersOff();
      const s = n.previewTemplate ? n.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), r = f.open("", "_blank");
      r.mimeType = "text/html";
      const c = this._wd;
      if (n.iframe) {
        const h = n._printClass !== null ? 'class="' + n._printClass + '"' : n.fullPage ? o.getAttributesToString(c.body, ["contenteditable"]) : 'class="' + n._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + c.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + h + ">" + s + "</body></html>"
        );
      } else {
        const h = u.head.getElementsByTagName("link"), p = u.head.getElementsByTagName("style");
        let v = "";
        for (let m = 0, y = h.length; m < y; m++)
          v += h[m].outerHTML;
        for (let m = 0, y = p.length; m < y; m++)
          v += p[m].outerHTML;
        r.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + l.toolbar.preview + "</title>" + v + '</head><body class="' + (n._printClass !== null ? n._printClass : n._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + s + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(s) {
      const r = s === "rtl", c = this._prevRtl !== r;
      this._prevRtl = n.rtl = r, c && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && o.changeElement(e.tool.indent.firstElementChild, g.indent), e.tool.outdent && o.changeElement(e.tool.outdent.firstElementChild, g.outdent));
      const h = e.element;
      r ? (o.addClass(h.topArea, "se-rtl"), o.addClass(h.wysiwygFrame, "se-rtl")) : (o.removeClass(h.topArea, "se-rtl"), o.removeClass(h.wysiwygFrame, "se-rtl"));
      const p = o.getListChildren(h.wysiwyg, function(m) {
        return o.isFormatElement(m) && (m.style.marginRight || m.style.marginLeft || m.style.textAlign);
      });
      for (let m = 0, y = p.length, C, _, S; m < y; m++)
        C = p[m], S = C.style.marginRight, _ = C.style.marginLeft, (S || _) && (C.style.marginRight = _, C.style.marginLeft = S), S = C.style.textAlign, S === "left" ? C.style.textAlign = "right" : S === "right" && (C.style.textAlign = "left");
      const v = e.tool;
      v.dir && (o.changeTxt(v.dir.querySelector(".se-tooltip-text"), l.toolbar[n.rtl ? "dir_ltr" : "dir_rtl"]), o.changeElement(v.dir.firstElementChild, g[n.rtl ? "dir_ltr" : "dir_rtl"])), v.dir_ltr && (r ? o.removeClass(v.dir_ltr, "active") : o.addClass(v.dir_ltr, "active")), v.dir_rtl && (r ? o.addClass(v.dir_rtl, "active") : o.removeClass(v.dir_rtl, "active"));
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
      if (!n.iframe) return !1;
      s.head && (this._wd.head.innerHTML = this.options.__allowedScriptTag ? s.head : s.head.replace(this.__scriptTagRegExp, "")), s.body && (this._wd.body.innerHTML = this.convertContentsForEditor(s.body)), this._resetComponents();
    },
    /**
     * @description Gets the current contents
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {Object}
     */
    getContents: function(s) {
      const r = this.cleanHTML(e.element.wysiwyg.innerHTML, null, null), c = o.createElement("DIV");
      c.innerHTML = r;
      const h = o.getListChildren(c, function(p) {
        return p.hasAttribute("contenteditable");
      });
      for (let p = 0, v = h.length; p < v; p++)
        h[p].removeAttribute("contenteditable");
      if (n.fullPage && !s) {
        const p = o.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + p + ">" + c.innerHTML + "</body></html>";
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
      return '<div class="sun-editor-editable' + (n.rtl ? " se-rtl" : "") + '">' + this.getContents(s) + "</div>";
    },
    /**
     * @description Returns HTML string according to tag type and configuration.
     * Use only "cleanHTML"
     * @param {Node} node Node
     * @param {Boolean} requireFormat If true, text nodes that do not have a format node is wrapped with the format tag.
     * @private
     */
    _makeLine: function(s, r) {
      const c = n.defaultTag;
      if (s.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(s.nodeName)) return "";
        if (/__se__tag/.test(s.className)) return s.outerHTML;
        const h = o.getListChildNodes(s, function(p) {
          return o.isSpanWithoutAttr(p) && !o.getParentElement(p, o.isNotCheckingNode);
        }) || [];
        for (let p = h.length - 1; p >= 0; p--)
          h[p].outerHTML = h[p].innerHTML;
        return !r || o.isFormatElement(s) || o.isRangeFormatElement(s) || o.isComponent(s) || o.isFigures(s) || o.isAnchor(s) && o.isMedia(s.firstElementChild) ? o.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML : "<" + c + ">" + (o.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML) + "</" + c + ">";
      }
      if (s.nodeType === 3) {
        if (!r) return o._HTMLConvertor(s.textContent);
        const h = s.textContent.split(/\n/g);
        let p = "";
        for (let v = 0, m = h.length, y; v < m; v++)
          y = h[v].trim(), y.length > 0 && (p += "<" + c + ">" + o._HTMLConvertor(y) + "</" + c + ">");
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
      const r = n._textTagsMap;
      return s.replace(this._disallowedTextTagsRegExp, function(c, h, p, v) {
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
      const c = this._w.Math, h = r.match(/(\d+(?:\.\d+)?)(.+)/), p = h ? h[1] * 1 : o.fontValueMap[r], v = h ? h[2] : "rem";
      let m = p;
      switch (/em/.test(v) ? m = c.round(p / 0.0625) : v === "pt" ? m = c.round(p * 1.333) : v === "%" && (m = p / 100), s) {
        case "em":
        case "rem":
        case "%":
          return (m * 0.0625).toFixed(2) + s;
        case "pt":
          return c.floor(m / 1.333) + s;
        default:
          return m + s;
      }
    },
    _cleanStyle: function(s, r, c) {
      let h = (s.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(c) && !h && (s.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const p = (s.match(/\ssize="([^"]+)"/i) || [])[1], v = (s.match(/\sface="([^"]+)"/i) || [])[1], m = (s.match(/\scolor="([^"]+)"/i) || [])[1];
        (p || v || m) && (h = 'style="' + (p ? "font-size:" + this.util.getNumber(p / 3.333, 1) + "rem;" : "") + (v ? "font-family:" + v + ";" : "") + (m ? "color:" + m + ";" : "") + '"');
      }
      if (h) {
        r || (r = []);
        const p = h.replace(/&quot;/g, "").match(this._cleanStyleRegExp[c]);
        if (p) {
          const v = [];
          for (let m = 0, y = p.length, C; m < y; m++)
            if (C = p[m].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), C && !/inherit|initial|revert|unset/i.test(C[3])) {
              const _ = o.kebabToCamelCase(C[1].trim()), S = this.wwComputedStyle[_] ? this.wwComputedStyle[_].replace(/"/g, "") : "", D = C[3].trim();
              switch (_) {
                case "fontFamily":
                  if (!n.plugins.font || n.font.indexOf(D) === -1) continue;
                  break;
                case "fontSize":
                  if (!n.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(C[0]) || (C[0] = C[0].replace((C[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, n.fontSizeUnit)));
                  break;
                case "color":
                  if (!n.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(D)) continue;
                  break;
                case "backgroundColor":
                  if (!n.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(D)) continue;
                  break;
              }
              S !== D && v.push(C[0]);
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
    _cleanTags: function(s, r, c) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(r)) return r;
      let h = null;
      const p = c.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), v = this._attributesTagsBlacklist[p];
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
          _ = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(h[y].trim()) ? "" : h[y], c += (/^\s/.test(_) ? "" : " ") + _;
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
      const h = s.childNodes;
      for (let p = 0, v = h.length, m; p < v; p++)
        m = h[p], m.nodeType === 8 ? r += "<!-- " + m.textContent + " -->" : !o.isFormatElement(m) && !o.isRangeFormatElement(m) && !o.isComponent(m) && !/meta/i.test(m.nodeName) ? (c || (c = o.createElement(n.defaultTag)), c.appendChild(m), p--, v--) : (c && (r += c.outerHTML, c = null), r += m.outerHTML);
      return c && (r += c.outerHTML), u.createRange().createContextualFragment(r);
    },
    _convertListCell: function(s) {
      let r = "";
      for (let c = 0, h = s.length, p; c < h; c++)
        p = s[c], p.nodeType === 1 ? o.isList(p) ? r += p.innerHTML : o.isListCell(p) ? r += p.outerHTML : o.isFormatElement(p) ? r += "<li>" + (p.innerHTML.trim() || "<br>") + "</li>" : o.isRangeFormatElement(p) && !o.isTable(p) ? r += this._convertListCell(p) : r += "<li>" + p.outerHTML + "</li>" : r += "<li>" + (p.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(s) {
      let r = !1;
      for (let c = 0, h = s.length, p; c < h; c++)
        if (p = s[c], p.nodeType === 1 && !o.isTextStyleElement(p) && !o.isBreak(p) && !this.__disallowedTagNameRegExp.test(p.nodeName)) {
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
      if (!n.strictMode) return o.htmlCompress(s);
      s = this._deleteDisallowedTags(this._parser.parseFromString(o.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const h = u.createRange().createContextualFragment(s);
      try {
        o._consistencyCheckOfHTML(h, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, n.strictHTMLValidation);
      } catch (y) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + y);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const y = h.querySelectorAll(this.managedTagsInfo.query);
        for (let C = 0, _ = y.length, S, D; C < _; C++) {
          D = [].slice.call(y[C].classList);
          for (let E = 0, B = D.length; E < B; E++)
            if (S = this.managedTagsInfo.map[D[E]], S) {
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
      return v = o.htmlRemoveWhiteSpace(v), v ? (r && (v = v.replace(typeof r == "string" ? o.createTagsWhitelist(r) : r, "")), c && (v = v.replace(typeof c == "string" ? o.createTagsBlacklist(c) : c, ""))) : v = s, this._tagConvertor(v);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(s) {
      if (!n.strictMode) return o.htmlCompress(s);
      s = this._deleteDisallowedTags(this._parser.parseFromString(o.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0));
      const r = u.createRange().createContextualFragment(s);
      try {
        o._consistencyCheckOfHTML(r, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, n.strictHTMLValidation);
      } catch (v) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + v);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const v = r.querySelectorAll(this.managedTagsInfo.query);
        for (let m = 0, y = v.length, C, _; m < y; m++) {
          _ = [].slice.call(v[m].classList);
          for (let S = 0, D = _.length; S < D; S++)
            if (C = this.managedTagsInfo.map[_[S]], C) {
              C(v[m]);
              break;
            }
        }
      }
      const c = r.childNodes;
      let h = "", p = null;
      for (let v = 0, m; v < c.length; v++) {
        if (m = c[v], this.__allowedScriptRegExp.test(m.nodeName)) {
          h += m.outerHTML;
          continue;
        }
        if (!o.isFormatElement(m) && !o.isRangeFormatElement(m) && !o.isComponent(m) && !o.isFigures(m) && m.nodeType !== 8 && !/__se__tag/.test(m.className)) {
          if (p || (p = o.createElement(n.defaultTag)), p.appendChild(m), v--, c[v + 1] && !o.isFormatElement(c[v + 1]))
            continue;
          m = p, p = null;
        }
        p && (h += this._makeLine(p, !0), p = null), h += this._makeLine(m, !0);
      }
      return p && (h += this._makeLine(p, !0)), h.length === 0 ? "<" + n.defaultTag + "><br></" + n.defaultTag + ">" : (h = o.htmlRemoveWhiteSpace(h), this._tagConvertor(h));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(s, r) {
      let c = "";
      const h = f.RegExp, p = new h("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), v = typeof s == "string" ? u.createRange().createContextualFragment(s) : s, m = (function(_) {
        return this.isFormatElement(_) || this.isComponent(_);
      }).bind(o), y = r ? "" : `
`;
      let C = r ? 0 : this._variable.codeIndent * 1;
      return C = C > 0 ? new f.Array(C + 1).join(" ") : "", function _(S, D) {
        const E = S.childNodes, B = p.test(S.nodeName), R = B ? D : "";
        for (let Z = 0, q = E.length, P, O, I, A, F, N; Z < q; Z++) {
          if (P = E[Z], A = p.test(P.nodeName), O = A ? y : "", I = m(P) && !B && !/^(TH|TD)$/i.test(S.nodeName) ? y : "", P.nodeType === 8) {
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
          P.outerHTML ? (F = P.nodeName.toLowerCase(), N = R || A ? D : "", c += (I || (B ? "" : O)) + N + P.outerHTML.match(h("<" + F + "[^>]*>", "i"))[0] + O, _(P, D + C), c += (/\n$/.test(c) ? N : "") + "</" + F + ">" + (I || O || B || /^(TH|TD)$/i.test(P.nodeName) ? y : "")) : c += new f.XMLSerializer().serializeToString(P);
        }
      }(v, ""), c.trim() + y;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(s, r, c) {
      u.addEventListener(s, r, c), n.iframe && this._wd.addEventListener(s, r);
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(s, r) {
      u.removeEventListener(s, r), n.iframe && this._wd.removeEventListener(s, r);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(s) {
      const r = n.maxCharCount, c = n.charCounterType;
      let h = 0;
      if (s && (h = this.getCharLength(s, c)), this._setCharCount(), r > 0) {
        let p = !1;
        const v = x.getCharCount(c);
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
      if (n.maxCharCount) {
        const c = r || n.charCounterType, h = this.getCharLength(typeof s == "string" ? s : this._charTypeHTML && s.nodeType === 1 ? s.outerHTML : s.textContent, c);
        if (h > 0 && h + x.getCharCount(c) > n.maxCharCount)
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
      const s = b._responsiveButtonSize;
      if (s) {
        let r = 0;
        (d._isBalloon || d._isInline) && n.toolbarWidth === "auto" ? r = e.element.topArea.offsetWidth : r = e.element.toolbar.offsetWidth;
        let c = "default";
        for (let h = 1, p = s.length; h < p; h++)
          if (r < s[h]) {
            c = s[h] + "";
            break;
          }
        b._responsiveCurrentSize !== c && (b._responsiveCurrentSize = c, x.setToolbarButtons(b._responsiveButtons[c]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && f.setTimeout((function(s, r) {
        this.textContent && s && (this.textContent = s.getCharCount(r.charCounterType));
      }).bind(e.element.charCounter, x, n), 0);
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
      n.codeMirrorEditor ? n.codeMirrorEditor.getDoc().setValue(s) : e.element.code.value = s;
    },
    /**
     * @description Get method in the code view area
     * @private
     */
    _getCodeView: function() {
      return n.codeMirrorEditor ? n.codeMirrorEditor.getDoc().getValue() : e.element.code.value;
    },
    /**
     * @description remove class, display text.
     * @param {Array|null} ignoredList Igonred button list
     */
    _setKeyEffect: function(s) {
      const r = this.commandMap, c = this.activePlugins;
      for (let h in r)
        s.indexOf(h) > -1 || !o.hasOwn(r, h) || (c.indexOf(h) > -1 ? i[h].active.call(this, null) : r.OUTDENT && /^OUTDENT$/i.test(h) ? o.isImportantDisabled(r.OUTDENT) || r.OUTDENT.setAttribute("disabled", !0) : r.INDENT && /^INDENT$/i.test(h) ? o.isImportantDisabled(r.INDENT) || r.INDENT.removeAttribute("disabled") : o.removeClass(r[h], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(s, r) {
      const c = f.RegExp;
      this._ww = n.iframe ? e.element.wysiwygFrame.contentWindow : f, this._wd = u, this._charTypeHTML = n.charCounterType === "byte-html", this.wwComputedStyle = f.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = o.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + o.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(A) {
        return this.test(A) ? A : "";
      }).bind(n.allowedClassNames);
      const h = n.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new c("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new c("<(" + h + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + h + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new c("^(" + h + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new c("^" + (n.__allowedScriptTag ? "script" : "") + "$", "i"), !n.iframe && typeof f.ShadowRoot == "function") {
        let A = e.element.wysiwygFrame;
        for (; A; ) {
          if (A.shadowRoot) {
            this._shadowRoot = A.shadowRoot;
            break;
          } else if (A instanceof f.ShadowRoot) {
            this._shadowRoot = A;
            break;
          }
          A = A.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const p = f.Object.keys(n._textTagsMap), v = n.addTagsWhitelist ? n.addTagsWhitelist.split("|").filter(function(A) {
        return /b|i|ins|s|strike/i.test(A);
      }) : [];
      for (let A = 0; A < v.length; A++)
        p.splice(p.indexOf(v[A].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = p.length === 0 ? null : new c("(<\\/?)(" + p.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const m = function(A, F) {
        return A ? A === "*" ? "[a-z-]+" : F ? A + "|" + F : A : "^";
      }, _ = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", S = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = n._editorTagsWhitelist.indexOf("//") > -1 || n._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new c("^(" + m(n._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new c("^(" + (n.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = o.createTagsWhitelist(m(n._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = o.createTagsBlacklist(n.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = o.createTagsWhitelist(m(n.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = o.createTagsBlacklist(n.pasteTagsBlacklist);
      const D = '\\s*=\\s*(")[^"]*\\1', E = n.attributesWhitelist;
      let B = {}, R = "";
      if (E)
        for (let A in E)
          !o.hasOwn(E, A) || /^on[a-z]+$/i.test(E[A]) || (A === "all" ? R = m(E[A], _) : B[A] = new c("\\s(?:" + m(E[A], "") + ")" + D, "ig"));
      this._attributesWhitelistRegExp = new c("\\s(?:" + (R || _ + "|" + S) + ")" + D, "ig"), this._attributesWhitelistRegExp_all_data = new c("\\s(?:" + ((R || _) + "|data-[a-z0-9\\-]+") + ")" + D, "ig"), this._attributesTagsWhitelist = B;
      const Z = n.attributesBlacklist;
      if (B = {}, R = "", Z)
        for (let A in Z)
          o.hasOwn(Z, A) && (A === "all" ? R = m(Z[A], "") : B[A] = new c("\\s(?:" + m(Z[A], "") + ")" + D, "ig"));
      this._attributesBlacklistRegExp = new c("\\s(?:" + (R || "^") + ")" + D, "ig"), this._attributesTagsBlacklist = B, this._isInline = /inline/i.test(n.mode), this._isBalloon = /balloon|balloon-always/i.test(n.mode), this._isBalloonAlways = /balloon-always/i.test(n.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const q = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let P = [], O, I;
      for (let A in i)
        if (o.hasOwn(i, A)) {
          if (O = i[A], I = t[A], (O.active || O.action) && I && this.callPlugin(A, null, I), typeof O.checkFileInfo == "function" && typeof O.resetFileInfo == "function" && (this.callPlugin(A, null, I), this._fileInfoPluginsCheck.push(O.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(O.resetFileInfo.bind(this))), f.Array.isArray(O.fileTags)) {
            const F = O.fileTags;
            this.callPlugin(A, null, I), this._fileManager.tags = this._fileManager.tags.concat(F), P.push(A);
            for (let N = 0, U = F.length; N < U; N++)
              this._fileManager.pluginMap[F[N].toLowerCase()] = A;
          }
          if (O.managedTags) {
            const F = O.managedTags();
            q.push("." + F.className), this.managedTagsInfo.map[F.className] = F.method.bind(this);
          }
        }
      this.managedTagsInfo.query = q.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new c("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new c("^(" + (P.length === 0 ? "^" : P.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = Za(this, this._onChange_historyStack.bind(this)), this.addModule([Fl]), n.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, n._editorStyles.editor && (e.element.wysiwyg.style.cssText = n._editorStyles.editor), n.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(s, r);
    },
    /**
     * @description Caching basic buttons to use
     * @private
     */
    _cachingButtons: function() {
      this.codeViewDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-code-view-enabled"]):not([data-display="MORE"])'), this.resizingDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-resizing-enabled"]):not([data-display="MORE"])');
      const s = e.tool, r = this.commandMap;
      r.INDENT = s.indent, r.OUTDENT = s.outdent, r[n.textTags.bold.toUpperCase()] = s.bold, r[n.textTags.underline.toUpperCase()] = s.underline, r[n.textTags.italic.toUpperCase()] = s.italic, r[n.textTags.strike.toUpperCase()] = s.strike, r[n.textTags.sub.toUpperCase()] = s.subscript, r[n.textTags.sup.toUpperCase()] = s.superscript, this._styleCommandMap = {
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
        const s = d._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = s + "px", o.isResizeObserverSupported || d.__callResizeFunction(s, null);
      }) : o.isResizeObserverSupported || d.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(s, r) {
      s = s === -1 ? r.borderBoxSize && r.borderBoxSize[0] ? r.borderBoxSize[0].blockSize : r.contentRect.height + this._editorHeightPadding : s, this._editorHeight !== s && (typeof x.onResizeEditor == "function" && x.onResizeEditor(s, this._editorHeight, d, r), this._editorHeight = s);
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
      const r = this.getRange(), c = r.commonAncestorContainer, h = r.startContainer, p = o.getRangeFormatElement(c, null);
      let v, m, y;
      const C = o.getParentElement(c, o.isComponent);
      if (!(C && !o.isTable(C))) {
        if (c.nodeType === 1 && c.getAttribute("data-se-embed") === "true") {
          let _ = c.nextElementSibling;
          o.isFormatElement(_) || (_ = this.appendFormatTag(c, n.defaultTag)), this.setRange(_.firstChild, 0, _.firstChild, 0);
          return;
        }
        if (!((o.isRangeFormatElement(h) || o.isWysiwygDiv(h)) && (o.isComponent(h.children[r.startOffset]) || o.isComponent(h.children[r.startOffset - 1])))) {
          if (o.getParentElement(c, o.isNotCheckingNode)) return null;
          if (p) {
            y = o.createElement(s || n.defaultTag), y.innerHTML = p.innerHTML, y.childNodes.length === 0 && (y.innerHTML = o.zeroWidthSpace), p.innerHTML = y.outerHTML, y = p.firstChild, v = o.getEdgeChildNodes(y, null).sc, v || (v = o.createTextNode(o.zeroWidthSpace), y.insertBefore(v, y.firstChild)), m = v.textContent.length, this.setRange(v, m, v, m);
            return;
          }
          if (o.isRangeFormatElement(c) && c.childNodes.length <= 1) {
            let _ = null;
            c.childNodes.length === 1 && o.isBreak(c.firstChild) ? _ = c.firstChild : (_ = o.createTextNode(o.zeroWidthSpace), c.appendChild(_)), this.setRange(_, 1, _, 1);
            return;
          }
          try {
            if (c.nodeType === 3 && (y = o.createElement(s || n.defaultTag), c.parentNode.insertBefore(y, c), y.appendChild(c)), o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling), o.isBreak(v)) {
              const _ = o.createTextNode(o.zeroWidthSpace);
              v.parentNode.insertBefore(_, v), v = _;
            }
          } catch {
            this.execCommand("formatBlock", !1, s || n.defaultTag), this.removeRange(), this._editorRange(), this.effectNode = null;
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
      this.context = e = Wi(s.originElement, this._getConstructed(s), n), this._componentsInfoReset = !0, this._editorInit(!0, r);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(s, r) {
      this._init(s, r), b._addEvent(), this._setCharCount(), b._offStickyToolbar(), b.onResize_window(), e.element.toolbar.style.visibility = "";
      const c = n.frameAttrbutes;
      for (let h in c)
        e.element.wysiwyg.setAttribute(h, c[h]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), f.setTimeout(function() {
        typeof d._resourcesStateChange == "function" && (b._resizeObserver && b._resizeObserver.observe(e.element.wysiwygFrame), b._toolbarObserver && b._toolbarObserver.observe(e.element._toolbarShadow), d._resourcesStateChange(), typeof x.onload == "function" && x.onload(d, s));
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
    _onButtonsCheck: new f.RegExp("^(" + f.Object.keys(n._textTagsMap).join("|") + ")$", "i"),
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
      let c = null;
      const h = b._keyCodeShortcut[s];
      switch (h) {
        case "A":
          c = "selectAll";
          break;
        case "B":
          n.shortcutsDisable.indexOf("bold") === -1 && (c = "bold");
          break;
        case "S":
          r && n.shortcutsDisable.indexOf("strike") === -1 ? c = "strike" : !r && n.shortcutsDisable.indexOf("save") === -1 && (c = "save");
          break;
        case "U":
          n.shortcutsDisable.indexOf("underline") === -1 && (c = "underline");
          break;
        case "I":
          n.shortcutsDisable.indexOf("italic") === -1 && (c = "italic");
          break;
        case "Z":
          n.shortcutsDisable.indexOf("undo") === -1 && (r ? c = "redo" : c = "undo");
          break;
        case "Y":
          n.shortcutsDisable.indexOf("undo") === -1 && (c = "redo");
          break;
        case "[":
          n.shortcutsDisable.indexOf("indent") === -1 && (c = n.rtl ? "indent" : "outdent");
          break;
        case "]":
          n.shortcutsDisable.indexOf("indent") === -1 && (c = n.rtl ? "outdent" : "indent");
          break;
      }
      return c ? (d.commandHandler(d.commandMap[c], c), !0) : !!h;
    },
    _applyTagEffects: function() {
      if (o.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let s = d.getSelectionNode();
      if (s === d.effectNode) return;
      d.effectNode = s;
      const r = n.rtl ? "marginRight" : "marginLeft", c = d.commandMap, h = b._onButtonsCheck, p = [], v = [], m = d.activePlugins, y = m.length;
      let C = "";
      for (; s.firstChild; )
        s = s.firstChild;
      for (let _ = s; !o.isWysiwygDiv(_) && _; _ = _.parentNode)
        if (!(_.nodeType !== 1 || o.isBreak(_))) {
          if (C = _.nodeName.toUpperCase(), v.push(C), !d.isReadOnly)
            for (let S = 0, D; S < y; S++)
              D = m[S], p.indexOf(D) === -1 && i[D].active.call(d, _) && p.push(D);
          if (o.isFormatElement(_)) {
            p.indexOf("OUTDENT") === -1 && c.OUTDENT && !o.isImportantDisabled(c.OUTDENT) && (o.isListCell(_) || _.style[r] && o.getNumber(_.style[r], 0) > 0) && (p.push("OUTDENT"), c.OUTDENT.removeAttribute("disabled")), p.indexOf("INDENT") === -1 && c.INDENT && !o.isImportantDisabled(c.INDENT) && (p.push("INDENT"), o.isListCell(_) && !_.previousElementSibling ? c.INDENT.setAttribute("disabled", !0) : c.INDENT.removeAttribute("disabled"));
            continue;
          }
          h && h.test(C) && (p.push(C), o.addClass(c[C], "active"));
        }
      d._setKeyEffect(p), d._variable.currentNodes = v.reverse(), d._variable.currentNodesMap = p, n.showPathLabel && (e.element.navigation.textContent = d._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(s) {
      let r = s.target;
      if (d._bindControllersOff && s.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? d._antiBlur = !1 : s.preventDefault(), o.getParentElement(r, ".se-submenu"))
        s.stopPropagation(), d._notHideToolbar = !0;
      else {
        let c = r.getAttribute("data-command"), h = r.className;
        for (; !c && !/se-menu-list/.test(h) && !/sun-editor-common/.test(h); )
          r = r.parentNode, c = r.getAttribute("data-command"), h = r.className;
        (c === d._submenuName || c === d._containerName) && s.stopPropagation();
      }
    },
    addGlobalEvent: function(s, r, c) {
      return n.iframe && d._ww.addEventListener(s, r, c), d._w.addEventListener(s, r, c), {
        type: s,
        listener: r,
        useCapture: c
      };
    },
    removeGlobalEvent: function(s, r, c) {
      s && (typeof s == "object" && (r = s.listener, c = s.useCapture, s = s.type), n.iframe && d._ww.removeEventListener(s, r, c), d._w.removeEventListener(s, r, c));
    },
    onClick_toolbar: function(s) {
      let r = s.target, c = r.getAttribute("data-display"), h = r.getAttribute("data-command"), p = r.className;
      for (d.controllersOff(); r.parentNode && !h && !/se-menu-list/.test(p) && !/se-toolbar/.test(p); )
        r = r.parentNode, h = r.getAttribute("data-command"), c = r.getAttribute("data-display"), p = r.className;
      !h && !c || r.disabled || d.actionCall(h, c, r);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(s) {
      if (d.isReadOnly || o.isNonEditable(e.element.wysiwyg)) return;
      if (o._isExcludeSelectionElement(s.target)) {
        s.preventDefault();
        return;
      }
      if (b.removeGlobalEvent(b.__selectionSyncEvent), b.__selectionSyncEvent = b.addGlobalEvent("mouseup", function() {
        d && d._editorRange(), b.removeGlobalEvent(b.__selectionSyncEvent);
      }), typeof x.onMouseDown == "function" && x.onMouseDown(s, d) === !1) return;
      const r = o.getParentElement(s.target, o.isCell);
      if (r) {
        const c = d.plugins.table;
        c && r !== c._fixedCell && !c._shift && d.callPlugin("table", function() {
          c.onTableCellMultiSelect.call(d, r, !1);
        }, null);
      }
      d._isBalloon && b._hideToolbar();
    },
    onClick_wysiwyg: function(s) {
      const r = s.target;
      if (d.isReadOnly)
        return s.preventDefault(), o.isAnchor(r) && f.open(r.href, r.target), !1;
      if (o.isNonEditable(e.element.wysiwyg) || typeof x.onClick == "function" && x.onClick(s, d) === !1) return;
      const c = d.getFileComponent(r);
      if (c) {
        s.preventDefault(), d.selectComponent(c.target, c.pluginName);
        return;
      }
      const h = o.getParentElement(r, "FIGCAPTION");
      if (h && o.isNonEditable(h) && (s.preventDefault(), h.focus(), d._isInline && !d._inlineToolbarAttr.isShow)) {
        b._showToolbarInline();
        const _ = function() {
          b._hideToolbar(), h.removeEventListener("blur", _);
        };
        h.addEventListener("blur", _);
      }
      if (d._editorRange(), s.detail === 3) {
        let _ = d.getRange();
        o.isFormatElement(_.endContainer) && _.endOffset === 0 && (_ = d.setRange(_.startContainer, _.startOffset, _.startContainer, _.startContainer.length), d._rangeInfo(_, d.getSelection()));
      }
      const p = d.getSelectionNode(), v = o.getFormatElement(p, null), m = o.getRangeFormatElement(p, null);
      let y = p;
      for (; y && y.firstChild; ) y = y.firstChild;
      const C = d.getFileComponent(y);
      if (C) {
        const _ = d.getRange();
        !m && _.startContainer === _.endContainer && d.selectComponent(C.target, C.pluginName);
      } else d.currentFileComponentInfo && d.controllersOff();
      if (!v && !o.isNonEditable(r) && !o.isList(m)) {
        const _ = d.getRange();
        if (o.getFormatElement(_.startContainer) === o.getFormatElement(_.endContainer))
          if (o.isList(m)) {
            s.preventDefault();
            const S = o.createElement("LI"), D = p.nextElementSibling;
            S.appendChild(p), m.insertBefore(S, D), d.focus();
          } else !o.isWysiwygDiv(p) && !o.isComponent(p) && (!o.isTable(p) || o.isCell(p)) && d._setDefaultFormat(o.isRangeFormatElement(m) ? "DIV" : n.defaultTag) !== null ? (s.preventDefault(), d.focus()) : b._applyTagEffects();
      } else
        b._applyTagEffects();
      d._isBalloon && f.setTimeout(b._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      b._balloonDelay && f.clearTimeout(b._balloonDelay), b._balloonDelay = f.setTimeout((function() {
        f.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon();
      }).bind(b), 350);
    },
    _toggleToolbarBalloon: function() {
      if (d) {
        d._editorRange();
        const s = d.getRange();
        d._bindControllersOff || !d._isBalloonAlways && s.collapsed ? b._hideToolbar() : b._showToolbarBalloon(s);
      }
    },
    _showToolbarBalloon: function(s) {
      if (!d._isBalloon) return;
      const r = s || d.getRange(), c = e.element.toolbar, h = e.element.topArea, p = d.getSelection();
      let v;
      if (d._isBalloonAlways && r.collapsed)
        v = !0;
      else if (p.focusNode === p.anchorNode)
        v = p.focusOffset < p.anchorOffset;
      else {
        const O = o.getListChildNodes(r.commonAncestorContainer, null);
        v = o.getArrayIndex(O, p.focusNode) < o.getArrayIndex(O, p.anchorNode);
      }
      let m = r.getClientRects();
      m = m[v ? 0 : m.length - 1];
      const y = d.getGlobalScrollOffset();
      let C = y.left, _ = y.top;
      const S = h.offsetWidth, D = b._getEditorOffsets(null), E = D.top, B = D.left;
      if (c.style.top = "-10000px", c.style.visibility = "hidden", c.style.display = "block", !m) {
        const O = d.getSelectionNode();
        if (o.isFormatElement(O)) {
          const I = o.createTextNode(o.zeroWidthSpace);
          d.insertNode(I, null, !1), d.setRange(I, 1, I, 1), d._editorRange(), m = d.getRange().getClientRects(), m = m[v ? 0 : m.length - 1];
        }
        if (!m) {
          const I = o.getOffset(O, e.element.wysiwygFrame);
          m = {
            left: I.left,
            top: I.top,
            right: I.left,
            bottom: I.top + O.offsetHeight,
            noText: !0
          }, C = 0, _ = 0;
        }
        v = !0;
      }
      const R = f.Math.round(e.element._arrow.offsetWidth / 2), Z = c.offsetWidth, q = c.offsetHeight, P = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (P && (m = {
        left: m.left + P.left,
        top: m.top + P.top,
        right: m.right + P.right - P.width,
        bottom: m.bottom + P.bottom - P.height
      }), b._setToolbarOffset(v, m, c, B, S, C, _, E, R), (Z !== c.offsetWidth || q !== c.offsetHeight) && b._setToolbarOffset(v, m, c, B, S, C, _, E, R), n.toolbarContainer) {
        const O = h.parentElement;
        let I = n.toolbarContainer, A = I.offsetLeft, F = I.offsetTop;
        for (; !I.parentElement.contains(O) || !/^(BODY|HTML)$/i.test(I.parentElement.nodeName); )
          I = I.offsetParent, A += I.offsetLeft, F += I.offsetTop;
        c.style.left = c.offsetLeft - A + h.offsetLeft + "px", c.style.top = c.offsetTop - F + h.offsetTop + "px";
      }
      c.style.visibility = "";
    },
    _setToolbarOffset: function(s, r, c, h, p, v, m, y, C) {
      const S = c.offsetWidth, D = r.noText && !s ? 0 : c.offsetHeight, E = (s ? r.left : r.right) - h - S / 2 + v, B = E + S - p;
      let R = (s ? r.top - D - C : r.bottom + C) - (r.noText ? 0 : y) + m, Z = E < 0 ? 1 : B < 0 ? E : E - B - 1 - 1, q = !1;
      const P = R + (s ? b._getEditorOffsets(null).top : c.offsetHeight - e.element.wysiwyg.offsetHeight);
      !s && P > 0 && b._getPageBottomSpace() < P ? (s = !0, q = !0) : s && u.documentElement.offsetTop > P && (s = !1, q = !0), q && (R = (s ? r.top - D - C : r.bottom + C) - (r.noText ? 0 : y) + m), c.style.left = f.Math.floor(Z) + "px", c.style.top = f.Math.floor(R) + "px", s ? (o.removeClass(e.element._arrow, "se-arrow-up"), o.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = D + "px") : (o.removeClass(e.element._arrow, "se-arrow-down"), o.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -C + "px");
      const O = f.Math.floor(S / 2 + (E - Z));
      e.element._arrow.style.left = (O + C > c.offsetWidth ? c.offsetWidth - C : O < C ? C : O) + "px";
    },
    _showToolbarInline: function() {
      if (!d._isInline) return;
      const s = e.element.toolbar;
      n.toolbarContainer ? s.style.position = "relative" : s.style.position = "absolute", s.style.visibility = "hidden", s.style.display = "block", d._inlineToolbarAttr.width = s.style.width = n.toolbarWidth, d._inlineToolbarAttr.top = s.style.top = (n.toolbarContainer ? 0 : -1 - s.offsetHeight) + "px", typeof x.showInline == "function" && x.showInline(s, e, d), b.onScroll_window(), d._inlineToolbarAttr.isShow = !0, s.style.visibility = "";
    },
    _hideToolbar: function() {
      !d._notHideToolbar && !d._variable.isFullScreen && (e.element.toolbar.style.display = "none", d._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(s) {
      if (/AUDIO/.test(s.target.nodeName)) return !1;
      if (d.isReadOnly || d.isDisabled)
        return s.preventDefault(), s.stopPropagation(), d.history.go(d.history.getCurrentIndex()), !1;
      const r = d.getRange(), c = d.getSelectionNode(), h = o.getFormatElement(c, null);
      if (!h && r.collapsed && !o.isComponent(c) && !o.isList(c)) {
        const v = o.getRangeFormatElement(h, null);
        d._setDefaultFormat(o.isRangeFormatElement(v) ? "DIV" : n.defaultTag);
      }
      d._editorRange();
      const p = (s.data === null ? "" : s.data === void 0 ? " " : s.data) || "";
      if (!d._charCount(p))
        return s.preventDefault(), s.stopPropagation(), !1;
      typeof x.onInput == "function" && x.onInput(s, d) === !1 || d.history.push(!0);
    },
    _isUneditableNode: function(s, r) {
      const c = r ? s.startContainer : s.endContainer, h = r ? s.startOffset : s.endOffset, p = r ? "previousSibling" : "nextSibling", v = c.nodeType === 1;
      let m;
      return v ? (m = b._isUneditableNode_getSibling(c.childNodes[h], p, c), m && m.nodeType === 1 && m.getAttribute("contenteditable") === "false") : (m = b._isUneditableNode_getSibling(c, p, c), d.isEdgePoint(c, h, r ? "start" : "end") && m && m.nodeType === 1 && m.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(s, r, c) {
      if (!s) return null;
      let h = s[r];
      if (!h)
        if (h = o.getFormatElement(c), h = h ? h[r] : null, h && !o.isComponent(h)) h = r === "previousSibling" ? h.firstChild : h.lastChild;
        else return null;
      return h;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(s) {
      let r = d.getSelectionNode();
      if (o.isInputElement(r)) return;
      const c = s.keyCode, h = s.shiftKey, p = s.ctrlKey || s.metaKey || c === 91 || c === 92 || c === 224, v = s.altKey;
      if (b._IEisComposing = c === 229, !p && d.isReadOnly && !b._cursorMoveKeyCode.test(c))
        return s.preventDefault(), !1;
      if (d.submenuOff(), d._isBalloon && b._hideToolbar(), typeof x.onKeyDown == "function" && x.onKeyDown(s, d) === !1) return;
      if (p && b._shortcutCommand(c, h))
        return b._onShortcutKey = !0, s.preventDefault(), s.stopPropagation(), !1;
      b._onShortcutKey && (b._onShortcutKey = !1), c === 13 && o.isFormatElement(d.getRange().startContainer) && (d._resetRangeToTextNode(), r = d.getSelectionNode());
      const m = d.getRange(), y = !m.collapsed || m.startContainer !== m.endContainer, C = d._fileManager.pluginRegExp.test(d.currentControllerName) ? d.currentControllerName : "";
      let _ = o.getFormatElement(r, null) || r, S = o.getRangeFormatElement(_, null);
      if (!(/37|38|39|40/.test(s.keyCode) && b._onKeyDown_wysiwyg_arrowKey(s) === !1)) {
        switch (c) {
          case 8:
            if (!y && C) {
              s.preventDefault(), s.stopPropagation(), d.plugins[C].destroy.call(d);
              break;
            }
            if (y && b._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!o.isFormatElement(_) && !e.element.wysiwyg.firstElementChild && !o.isComponent(r) && d._setDefaultFormat(n.defaultTag) !== null)
              return s.preventDefault(), s.stopPropagation(), !1;
            if (!y && !_.previousElementSibling && m.startOffset === 0 && !r.previousSibling && !o.isListCell(_) && o.isFormatElement(_) && (!o.isFreeFormatElement(_) || o.isClosureFreeFormatElement(_))) {
              if (o.isClosureRangeFormatElement(_.parentNode))
                return s.preventDefault(), s.stopPropagation(), !1;
              if (o.isWysiwygDiv(_.parentNode) && _.childNodes.length <= 1 && (!_.firstChild || o.onlyZeroWidthSpace(_.textContent))) {
                if (s.preventDefault(), s.stopPropagation(), _.nodeName.toUpperCase() === n.defaultTag.toUpperCase()) {
                  _.innerHTML = "<br>";
                  const N = _.attributes;
                  for (; N[0]; )
                    _.removeAttribute(N[0].name);
                } else {
                  const N = o.createElement(n.defaultTag);
                  N.innerHTML = "<br>", _.parentElement.replaceChild(N, _);
                }
                return d.nativeFocus(), !1;
              }
            }
            const E = m.startContainer;
            if (_ && !_.previousElementSibling && m.startOffset === 0 && E.nodeType === 3 && !o.isFormatElement(E.parentNode)) {
              let N = E.parentNode.previousSibling;
              const U = E.parentNode.nextSibling;
              N || (U ? N = U : (N = o.createElement("BR"), _.appendChild(N)));
              let z = E;
              for (; _.contains(z) && !z.previousSibling; )
                z = z.parentNode;
              if (!_.contains(z)) {
                E.textContent = "", o.removeItemAllParents(E, null, _);
                break;
              }
            }
            if (b._isUneditableNode(m, !0)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            !y && d._isEdgeFormat(m.startContainer, m.startOffset, "start") && o.isFormatElement(_.previousElementSibling) && (d._formatAttrsTemp = _.previousElementSibling.attributes);
            const B = m.commonAncestorContainer;
            if (_ = o.getFormatElement(m.startContainer, null), S = o.getRangeFormatElement(_, null), S && _ && !o.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
              if (o.isListCell(_) && o.isList(S) && (o.isListCell(S.parentNode) || _.previousElementSibling) && (r === _ || r.nodeType === 3 && (!r.previousSibling || o.isList(r.previousSibling))) && (o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null) ? S.contains(m.startContainer) : m.startOffset === 0 && m.collapsed)) {
                if (m.startContainer !== m.endContainer)
                  s.preventDefault(), d.removeNode(), m.startContainer.nodeType === 3 && d.setRange(m.startContainer, m.startContainer.textContent.length, m.startContainer, m.startContainer.textContent.length), d.history.push(!0);
                else {
                  let N = _.previousElementSibling || S.parentNode;
                  if (o.isListCell(N)) {
                    s.preventDefault();
                    let U = N;
                    if (!N.contains(_) && o.isListCell(U) && o.isList(U.lastElementChild)) {
                      for (U = U.lastElementChild.lastElementChild; o.isListCell(U) && o.isList(U.lastElementChild); )
                        U = U.lastElementChild && U.lastElementChild.lastElementChild;
                      N = U;
                    }
                    let z = N === S.parentNode ? S.previousSibling : N.lastChild;
                    z || (z = o.createTextNode(o.zeroWidthSpace), S.parentNode.insertBefore(z, S.parentNode.firstChild));
                    const V = z.nodeType === 3 ? z.textContent.length : 1, M = _.childNodes;
                    let $ = z, te = M[0];
                    for (; te = M[0]; )
                      N.insertBefore(te, $.nextSibling), $ = te;
                    o.removeItem(_), S.children.length === 0 && o.removeItem(S), d.setRange(z, V, z, V), d.history.push(!0);
                  }
                }
                break;
              }
              if (!y && m.startOffset === 0) {
                let N = !0, U = B;
                for (; U && U !== S && !o.isWysiwygDiv(U); ) {
                  if (U.previousSibling && (U.previousSibling.nodeType === 1 || !o.onlyZeroWidthSpace(U.previousSibling.textContent.trim()))) {
                    N = !1;
                    break;
                  }
                  U = U.parentNode;
                }
                if (N && S.parentNode) {
                  s.preventDefault(), d.detachRangeFormatElement(S, o.isListCell(_) ? [_] : null, null, !1, !1), d.history.push(!0);
                  break;
                }
              }
            }
            if (!y && _ && (m.startOffset === 0 || r === _ && _.childNodes[m.startOffset])) {
              const N = r === _ ? _.childNodes[m.startOffset] : r, U = _.previousSibling, z = (B.nodeType === 3 || o.isBreak(B)) && !B.previousSibling && m.startOffset === 0;
              if (N && !N.previousSibling && (B && o.isComponent(B.previousSibling) || z && o.isComponent(U))) {
                const V = d.getFileComponent(U);
                V ? (s.preventDefault(), s.stopPropagation(), _.textContent.length === 0 && o.removeItem(_), d.selectComponent(V.target, V.pluginName) === !1 && d.blur()) : o.isComponent(U) && (s.preventDefault(), s.stopPropagation(), o.removeItem(U));
                break;
              }
              if (N && o.isNonEditable(N.previousSibling)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(N.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (C) {
              s.preventDefault(), s.stopPropagation(), d.plugins[C].destroy.call(d);
              break;
            }
            if (y && b._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!y && d._isEdgeFormat(m.endContainer, m.endOffset, "end") && !_.nextSibling) {
              s.preventDefault(), s.stopPropagation();
              return;
            }
            if (b._isUneditableNode(m, !1)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if ((o.isFormatElement(r) || r.nextSibling === null || o.onlyZeroWidthSpace(r.nextSibling) && r.nextSibling.nextSibling === null) && m.startOffset === r.textContent.length) {
              const N = _.nextElementSibling;
              if (!N) break;
              if (o.isComponent(N)) {
                if (s.preventDefault(), o.onlyZeroWidthSpace(_) && (o.removeItem(_), o.isTable(N))) {
                  let z = o.getChildElement(N, o.isCell, !1);
                  z = z.firstElementChild || z, d.setRange(z, 0, z, 0);
                  break;
                }
                const U = d.getFileComponent(N);
                U ? (s.stopPropagation(), d.selectComponent(U.target, U.pluginName) === !1 && d.blur()) : o.isComponent(N) && (s.stopPropagation(), o.removeItem(N));
                break;
              }
            }
            if (!y && (d.isEdgePoint(m.endContainer, m.endOffset) || r === _ && _.childNodes[m.startOffset])) {
              const N = r === _ && _.childNodes[m.startOffset] || r;
              if (N && o.isNonEditable(N.nextSibling)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(N.nextSibling);
                break;
              } else if (o.isComponent(N)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(N);
                break;
              }
            }
            if (!y && d._isEdgeFormat(m.endContainer, m.endOffset, "end") && o.isFormatElement(_.nextElementSibling) && (d._formatAttrsTemp = _.attributes), _ = o.getFormatElement(m.startContainer, null), S = o.getRangeFormatElement(_, null), o.isListCell(_) && o.isList(S) && (r === _ || r.nodeType === 3 && (!r.nextSibling || o.isList(r.nextSibling)) && (o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null) ? S.contains(m.endContainer) : m.endOffset === r.textContent.length && m.collapsed))) {
              m.startContainer !== m.endContainer && d.removeNode();
              let N = o.getArrayItem(_.children, o.isList, !1);
              if (N = N || _.nextElementSibling || S.parentNode.nextElementSibling, N && (o.isList(N) || o.getArrayItem(N.children, o.isList, !1))) {
                s.preventDefault();
                let U, z;
                if (o.isList(N)) {
                  const V = N.firstElementChild;
                  for (z = V.childNodes, U = z[0]; z[0]; )
                    _.insertBefore(z[0], N);
                  o.removeItem(V);
                } else {
                  for (U = N.firstChild, z = N.childNodes; z[0]; )
                    _.appendChild(z[0]);
                  o.removeItem(N);
                }
                d.setRange(U, 0, U, 0), d.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (C || n.tabDisable || (s.preventDefault(), p || v || o.isWysiwygDiv(r))) break;
            const R = !m.collapsed || d.isEdgePoint(m.startContainer, m.startOffset), Z = d.getSelectedElements(null);
            r = d.getSelectionNode();
            const q = [];
            let P = [], O = o.isListCell(Z[0]), I = o.isListCell(Z[Z.length - 1]), A = { sc: m.startContainer, so: m.startOffset, ec: m.endContainer, eo: m.endOffset };
            for (let N = 0, U = Z.length, z; N < U; N++)
              if (z = Z[N], o.isListCell(z)) {
                if (!z.previousElementSibling && !h)
                  continue;
                q.push(z);
              } else
                P.push(z);
            if (q.length > 0 && R && d.plugins.list)
              A = d.plugins.list.editInsideList.call(d, h, q);
            else {
              const N = o.getParentElement(r, o.isCell);
              if (N && R) {
                const U = o.getParentElement(N, "table"), z = o.getListChildren(U, o.isCell);
                let V = h ? o.prevIdx(z, N) : o.nextIdx(z, N);
                V === z.length && !h && (V = 0), V === -1 && h && (V = z.length - 1);
                let M = z[V];
                if (!M) break;
                M = M.firstElementChild || M, d.setRange(M, 0, M, 0);
                break;
              }
              P = P.concat(q), O = I = null;
            }
            if (P.length > 0)
              if (h) {
                const N = P.length - 1;
                for (let V = 0, M; V <= N; V++) {
                  M = P[V].childNodes;
                  for (let $ = 0, te = M.length, j; $ < te && (j = M[$], !!j); $++)
                    if (!o.onlyZeroWidthSpace(j)) {
                      /^\s{1,4}$/.test(j.textContent) ? o.removeItem(j) : /^\s{1,4}/.test(j.textContent) && (j.textContent = j.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const U = o.getChildElement(P[0], "text", !1), z = o.getChildElement(P[N], "text", !0);
                !O && U && (A.sc = U, A.so = 0), !I && z && (A.ec = z, A.eo = z.textContent.length);
              } else {
                const N = o.createTextNode(new f.Array(d._variable.tabSize + 1).join(" "));
                if (P.length === 1) {
                  if (!d.insertNode(N, null, !0)) return !1;
                  O || (A.sc = N, A.so = N.length), I || (A.ec = N, A.eo = N.length);
                } else {
                  const U = P.length - 1;
                  for (let M = 0, $; M <= U; M++)
                    $ = P[M].firstChild, $ && (o.isBreak($) ? P[M].insertBefore(N.cloneNode(!1), $) : $.textContent = N.textContent + $.textContent);
                  const z = o.getChildElement(P[0], "text", !1), V = o.getChildElement(P[U], "text", !0);
                  !O && z && (A.sc = z, A.so = 0), !I && V && (A.ec = V, A.eo = V.textContent.length);
                }
              }
            d.setRange(A.sc, A.so, A.ec, A.eo), d.history.push(!1);
            break;
          case 13:
            const F = o.getFreeFormatElement(r, null);
            if (d._charTypeHTML) {
              let N = "";
              if (!h && F || h ? N = "<br>" : N = "<" + _.nodeName + "><br></" + _.nodeName + ">", !d.checkCharCount(N, "byte-html"))
                return s.preventDefault(), !1;
            }
            if (!h && !C) {
              const N = d._isEdgeFormat(m.endContainer, m.endOffset, "end"), U = d._isEdgeFormat(m.startContainer, m.startOffset, "start");
              if (N && (/^H[1-6]$/i.test(_.nodeName) || /^HR$/i.test(_.nodeName))) {
                b._enterPrevent(s);
                let z = null;
                const V = d.appendFormatTag(_, n.defaultTag);
                if (N && N.length > 0) {
                  z = N.pop();
                  const M = z;
                  for (; N.length > 0; )
                    z = z.appendChild(N.pop());
                  V.appendChild(M);
                }
                if (z = z ? z.appendChild(V.firstChild) : V.firstChild, o.isBreak(z)) {
                  const M = o.createTextNode(o.zeroWidthSpace);
                  z.parentNode.insertBefore(M, z), d.setRange(M, 1, M, 1);
                } else
                  d.setRange(z, 0, z, 0);
                break;
              } else if (S && _ && !o.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
                const z = d.getRange();
                if (d.isEdgePoint(z.endContainer, z.endOffset) && o.isList(r.nextSibling)) {
                  b._enterPrevent(s);
                  const V = o.createElement("LI"), M = o.createElement("BR");
                  V.appendChild(M), _.parentNode.insertBefore(V, _.nextElementSibling), V.appendChild(r.nextSibling), d.setRange(M, 1, M, 1);
                  break;
                }
                if ((z.commonAncestorContainer.nodeType !== 3 || !z.commonAncestorContainer.nextElementSibling) && o.onlyZeroWidthSpace(_.innerText.trim()) && !o.isListCell(_.nextElementSibling)) {
                  b._enterPrevent(s);
                  let V = null;
                  if (o.isListCell(S.parentNode)) {
                    const M = _.parentNode.parentNode;
                    S = M.parentNode;
                    const $ = o.createElement("LI");
                    $.innerHTML = "<br>", o.copyTagAttributes($, _, n.lineAttrReset), V = $, S.insertBefore(V, M.nextElementSibling);
                  } else {
                    const M = o.isCell(S.parentNode) ? "DIV" : o.isList(S.parentNode) ? "LI" : o.isFormatElement(S.nextElementSibling) && !o.isRangeFormatElement(S.nextElementSibling) ? S.nextElementSibling.nodeName : o.isFormatElement(S.previousElementSibling) && !o.isRangeFormatElement(S.previousElementSibling) ? S.previousElementSibling.nodeName : n.defaultTag;
                    V = o.createElement(M), o.copyTagAttributes(V, _, n.lineAttrReset);
                    const $ = d.detachRangeFormatElement(S, [_], null, !0, !0);
                    $.cc.insertBefore(V, $.ec);
                  }
                  V.innerHTML = "<br>", o.removeItemAllParents(_, null, null), d.setRange(V, 1, V, 1);
                  break;
                }
              }
              if (F) {
                b._enterPrevent(s);
                const z = r === F, V = d.getSelection(), M = r.childNodes, $ = V.focusOffset, te = r.previousElementSibling, j = r.nextSibling;
                if (!o.isClosureFreeFormatElement(F) && M && (z && m.collapsed && M.length - 1 <= $ + 1 && o.isBreak(M[$]) && (!M[$ + 1] || (!M[$ + 2] || o.onlyZeroWidthSpace(M[$ + 2].textContent)) && M[$ + 1].nodeType === 3 && o.onlyZeroWidthSpace(M[$ + 1].textContent)) && $ > 0 && o.isBreak(M[$ - 1]) || !z && o.onlyZeroWidthSpace(r.textContent) && o.isBreak(te) && (o.isBreak(te.previousSibling) || !o.onlyZeroWidthSpace(te.previousSibling.textContent)) && (!j || !o.isBreak(j) && o.onlyZeroWidthSpace(j.textContent)))) {
                  z ? o.removeItem(M[$ - 1]) : o.removeItem(r);
                  const Y = d.appendFormatTag(F, o.isFormatElement(F.nextElementSibling) && !o.isRangeFormatElement(F.nextElementSibling) ? F.nextElementSibling : null);
                  o.copyFormatAttributes(Y, F), d.setRange(Y, 1, Y, 1);
                  break;
                }
                if (z) {
                  x.insertHTML(m.collapsed && o.isBreak(m.startContainer.childNodes[m.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let Y = V.focusNode;
                  const ie = V.focusOffset;
                  F === Y && (Y = Y.childNodes[ie - $ > 1 ? ie - 1 : ie]), d.setRange(Y, 1, Y, 1);
                } else {
                  const Y = V.focusNode.nextSibling, ie = o.createElement("BR");
                  d.insertNode(ie, null, !1);
                  const re = ie.previousSibling, ue = ie.nextSibling;
                  !o.isBreak(Y) && !o.isBreak(re) && (!ue || o.onlyZeroWidthSpace(ue)) ? (ie.parentNode.insertBefore(ie.cloneNode(!1), ie), d.setRange(ie, 1, ie, 1)) : d.setRange(ue, 0, ue, 0);
                }
                b._onShortcutKey = !0;
                break;
              }
              if (m.collapsed && (U || N)) {
                b._enterPrevent(s);
                const z = o.createElement("BR"), V = o.createElement(_.nodeName);
                o.copyTagAttributes(V, _, n.lineAttrReset);
                let M = z;
                do {
                  if (!o.isBreak(r) && r.nodeType === 1) {
                    const $ = r.cloneNode(!1);
                    $.appendChild(M), M = $;
                  }
                  r = r.parentNode;
                } while (_ !== r && _.contains(r));
                V.appendChild(M), _.parentNode.insertBefore(V, U && !N ? _ : _.nextElementSibling), N && d.setRange(z, 1, z, 1);
                break;
              }
              if (_) {
                s.stopPropagation();
                let z, V = 0;
                if (m.collapsed)
                  o.onlyZeroWidthSpace(_) ? z = d.appendFormatTag(_, _.cloneNode(!1)) : z = o.splitElement(m.endContainer, m.endOffset, o.getElementDepth(_));
                else {
                  const M = o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null), $ = _.cloneNode(!1);
                  $.innerHTML = "<br>";
                  const te = m.commonAncestorContainer, j = te === m.startContainer && te === m.endContainer && o.onlyZeroWidthSpace(te) ? m : d.removeNode();
                  if (z = o.getFormatElement(j.container, null), !z) {
                    o.isWysiwygDiv(j.container) && (b._enterPrevent(s), e.element.wysiwyg.appendChild($), z = $, o.copyTagAttributes(z, _, n.lineAttrReset), d.setRange(z, V, z, V));
                    break;
                  }
                  const Y = o.getRangeFormatElement(j.container);
                  if (z = z.contains(Y) ? o.getChildElement(Y, o.getFormatElement.bind(o)) : z, M) {
                    if (N && !U)
                      z.parentNode.insertBefore($, !j.prevContainer || j.container === j.prevContainer ? z.nextElementSibling : z), z = $, V = 0;
                    else if (V = j.offset, U) {
                      const ie = z.parentNode.insertBefore($, z);
                      N && (z = ie, V = 0);
                    }
                  } else
                    N && U ? (z.parentNode.insertBefore($, j.prevContainer && j.container === j.prevContainer ? z.nextElementSibling : z), z = $, V = 0) : z = o.splitElement(j.container, j.offset, o.getElementDepth(_));
                }
                b._enterPrevent(s), o.copyTagAttributes(z, _, n.lineAttrReset), d.setRange(z, V, z, V);
                break;
              }
            }
            if (y) break;
            if (S && o.getParentElement(S, "FIGCAPTION") && o.getParentElement(S, o.isList) && (b._enterPrevent(s), _ = d.appendFormatTag(_, null), d.setRange(_, 0, _, 0)), C) {
              s.preventDefault(), s.stopPropagation(), d.containerOff(), d.controllersOff();
              const N = e[C], U = N._container, z = U.previousElementSibling || U.nextElementSibling;
              let V = null;
              o.isListCell(U.parentNode) ? V = o.createElement("BR") : (V = o.createElement(o.isFormatElement(z) && !o.isRangeFormatElement(z) ? z.nodeName : n.defaultTag), V.innerHTML = "<br>"), h ? U.parentNode.insertBefore(V, U) : U.parentNode.insertBefore(V, U.nextElementSibling), d.callPlugin(C, function() {
                d.selectComponent(N._element, C) === !1 && d.blur();
              }, null);
            }
            break;
          case 27:
            if (C)
              return s.preventDefault(), s.stopPropagation(), d.controllersOff(), !1;
            break;
        }
        if (h && c === 16) {
          s.preventDefault(), s.stopPropagation();
          const E = d.plugins.table;
          if (E && !E._shift && !E._ref) {
            const B = o.getParentElement(_, o.isCell);
            if (B) {
              E.onTableCellMultiSelect.call(d, B, !0);
              return;
            }
          }
        } else if (h && (o.isOSX_IOS ? v : p) && c === 32) {
          s.preventDefault(), s.stopPropagation();
          const E = d.insertNode(o.createTextNode(" "));
          if (E) {
            d.setRange(E, E.length, E, E.length);
            return;
          }
        }
        if (o.isIE && !p && !v && !y && !b._nonTextKeyCode.test(c) && o.isBreak(m.commonAncestorContainer)) {
          const E = o.createTextNode(o.zeroWidthSpace);
          d.insertNode(E, null, !1), d.setRange(E, 1, E, 1);
        }
        b._directionKeyCode.test(c) && (f.setTimeout(d._editorRange.bind(d), 0), b._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(s) {
      if (s.shiftKey) return;
      let r = d.getSelectionNode();
      const c = function(v, m) {
        if (m || (m = 0), s.preventDefault(), s.stopPropagation(), !v) return;
        let y = d.getFileComponent(v);
        y ? d.selectComponent(y.target, y.pluginName) : (d.setRange(v, m, v, m), d.controllersOff());
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
        const S = _ === y, D = _ === C;
        let E = null, B = 0;
        if (s.keyCode === 38 && S) {
          const R = v && v.previousElementSibling;
          for (R ? E = R.children[m.cellIndex] : E = o.getPreviousDeepestNode(h, d.context.element.wysiwyg); E && E.lastChild; ) E = E.lastChild;
          E && (B = E.textContent.length);
        } else if (s.keyCode === 40 && D) {
          const R = v && v.nextElementSibling;
          for (R ? E = R.children[m.cellIndex] : E = o.getNextDeepestNode(h, d.context.element.wysiwyg); E && E.firstChild; ) E = E.firstChild;
        }
        if (E)
          return c(E, B), !1;
      }
      const p = d.getFileComponent(r);
      if (p) {
        const v = /37|38/.test(s.keyCode), m = /39|40/.test(s.keyCode);
        if (v) {
          const y = o.getPreviousDeepestNode(p.target, d.context.element.wysiwyg);
          c(y, y && y.textContent.length);
        } else if (m) {
          const y = o.getNextDeepestNode(p.target, d.context.element.wysiwyg);
          c(y);
        }
      }
    },
    onKeyUp_wysiwyg: function(s) {
      if (b._onShortcutKey) return;
      d._editorRange();
      const r = s.keyCode, c = s.ctrlKey || s.metaKey || r === 91 || r === 92 || r === 224, h = s.altKey;
      if (d.isReadOnly) {
        !c && b._cursorMoveKeyCode.test(r) && b._applyTagEffects();
        return;
      }
      const p = d.getRange();
      let v = d.getSelectionNode();
      if (d._isBalloon && (d._isBalloonAlways && r !== 27 || !p.collapsed))
        if (d._isBalloonAlways)
          r !== 27 && b._showToolbarBalloonDelay();
        else {
          b._showToolbarBalloon();
          return;
        }
      let m = v;
      for (; m && m.firstChild; ) m = m.firstChild;
      const y = d.getFileComponent(m);
      if (!(s.keyCode === 16 || s.shiftKey) && y ? d.selectComponent(y.target, y.pluginName) : d.currentFileComponentInfo && d.controllersOff(), r === 8 && o.isWysiwygDiv(v) && v.textContent === "" && v.children.length === 0) {
        s.preventDefault(), s.stopPropagation(), v.innerHTML = "";
        const E = o.createElement(o.isFormatElement(d._variable.currentNodes[0]) ? d._variable.currentNodes[0] : n.defaultTag);
        E.innerHTML = "<br>", v.appendChild(E), d.setRange(E, 0, E, 0), b._applyTagEffects(), d.history.push(!1);
        return;
      }
      const C = o.getFormatElement(v, null), _ = o.getRangeFormatElement(v, null), S = d._formatAttrsTemp;
      if (S) {
        for (let E = 0, B = S.length; E < B; E++) {
          if (r === 13 && /^id$/i.test(S[E].name)) {
            C.removeAttribute("id");
            continue;
          }
          C.setAttribute(S[E].name, S[E].value);
        }
        d._formatAttrsTemp = null;
      }
      if (!C && p.collapsed && !o.isComponent(v) && !o.isList(v) && d._setDefaultFormat(o.isRangeFormatElement(_) ? "DIV" : n.defaultTag) !== null && (v = d.getSelectionNode()), !c && !h && !b._nonTextKeyCode.test(r) && v.nodeType === 3 && o.zeroWidthRegExp.test(v.textContent) && !(s.isComposing !== void 0 ? s.isComposing : b._IEisComposing)) {
        let E = p.startOffset, B = p.endOffset;
        const R = (v.textContent.substring(0, B).match(b._frontZeroWidthReg) || "").length;
        E = p.startOffset - R, B = p.endOffset - R, v.textContent = v.textContent.replace(o.zeroWidthRegExp, ""), d.setRange(v, E < 0 ? 0 : E, v, B < 0 ? 0 : B);
      }
      b._deleteKeyCode.test(r) && C && o.onlyZeroWidthSpace(C.textContent) && !C.previousElementSibling && (C.innerHTML = "<br>", d.setRange(C, 0, C, 0)), d._charCount(""), !(typeof x.onKeyUp == "function" && x.onKeyUp(s, d) === !1) && !c && !h && !b._historyIgnoreKeyCode.test(r) && d.history.push(!0);
    },
    onScroll_wysiwyg: function(s) {
      d.controllersOff(), d._isBalloon && b._hideToolbar(), typeof x.onScroll == "function" && x.onScroll(s, d);
    },
    onFocus_wysiwyg: function(s) {
      d._antiBlur || (d.hasFocus = !0, f.setTimeout(b._applyTagEffects), d._isInline && b._showToolbarInline(), typeof x.onFocus == "function" && x.onFocus(s, d));
    },
    onBlur_wysiwyg: function(s) {
      d._antiBlur || d._variable.isCodeView || (d.hasFocus = !1, d.effectNode = null, d.controllersOff(), (d._isInline || d._isBalloon) && b._hideToolbar(), d._setKeyEffect([]), d._variable.currentNodes = [], d._variable.currentNodesMap = [], n.showPathLabel && (e.element.navigation.textContent = ""), typeof x.onBlur == "function" && x.onBlur(s, d, this));
    },
    onMouseDown_resizingBar: function(s) {
      s.stopPropagation(), d.submenuOff(), d.controllersOff(), d._variable.resizeClientY = s.clientY, e.element.resizeBackground.style.display = "block";
      function r() {
        e.element.resizeBackground.style.display = "none", u.removeEventListener("mousemove", b._resize_editor), u.removeEventListener("mouseup", r);
      }
      u.addEventListener("mousemove", b._resize_editor), u.addEventListener("mouseup", r);
    },
    _resize_editor: function(s) {
      const r = e.element.editorArea.offsetHeight + (s.clientY - d._variable.resizeClientY), c = r < d._variable.minResizingSize ? d._variable.minResizingSize : r;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = c + "px", d._variable.resizeClientY = s.clientY, o.isResizeObserverSupported || d.__callResizeFunction(c, null);
    },
    onResize_window: function() {
      o.isResizeObserverSupported || d.resetResponsiveToolbar();
      const s = e.element.toolbar, r = s.style.display === "none" || d._isInline && !d._inlineToolbarAttr.isShow;
      if (!(s.offsetWidth === 0 && !r)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = f.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), d.submenuActiveButton && d.submenu && d._setMenuPosition(d.submenuActiveButton, d.submenu), d._variable.isFullScreen) {
          d._variable.innerHeight_fullScreen += f.innerHeight - s.offsetHeight - d._variable.innerHeight_fullScreen, e.element.editorArea.style.height = d._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (d._variable.isCodeView && d._isInline) {
          b._showToolbarInline();
          return;
        }
        d._iframeAutoHeight(), d._sticky && (s.style.width = e.element.topArea.offsetWidth - 2 + "px", b.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (d._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || n.stickyToolbar < 0) return;
      const s = e.element, r = s.editorArea.offsetHeight, c = (this.scrollY || u.documentElement.scrollTop) + n.stickyToolbar, h = b._getEditorOffsets(n.toolbarContainer).top - (d._isInline ? s.toolbar.offsetHeight : 0), p = d._isInline && c - h > 0 ? c - h - e.element.toolbar.offsetHeight : 0;
      c < h ? b._offStickyToolbar() : c + d._variable.minResizingSize >= r + h ? (d._sticky || b._onStickyToolbar(p), s.toolbar.style.top = p + r + h + n.stickyToolbar - c - d._variable.minResizingSize + "px") : c >= h && b._onStickyToolbar(p);
    },
    _getEditorOffsets: function(s) {
      let r = s || e.element.topArea, c = 0, h = 0, p = 0;
      for (; r; )
        c += r.offsetTop, h += r.offsetLeft, p += r.scrollTop, r = r.offsetParent;
      return {
        top: c,
        left: h,
        scroll: p
      };
    },
    _getPageBottomSpace: function() {
      return u.documentElement.scrollHeight - (b._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(s) {
      const r = e.element;
      !d._isInline && !n.toolbarContainer && (r._stickyDummy.style.height = r.toolbar.offsetHeight + "px", r._stickyDummy.style.display = "block"), r.toolbar.style.top = n.stickyToolbar + s + "px", r.toolbar.style.width = d._isInline ? d._inlineToolbarAttr.width : r.toolbar.offsetWidth + "px", o.addClass(r.toolbar, "se-toolbar-sticky"), d._sticky = !0;
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
      const s = d.getRange(), r = s.startContainer, c = s.endContainer, h = o.getRangeFormatElement(r), p = o.getRangeFormatElement(c), v = o.isCell(h), m = o.isCell(p), y = s.commonAncestorContainer;
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
          })), d.nativeFocus(), !0;
      const C = r.nodeType === 1 ? o.getParentElement(r, ".se-component") : null, _ = c.nodeType === 1 ? o.getParentElement(c, ".se-component") : null;
      return C && o.removeItem(C), _ && o.removeItem(_), !1;
    },
    onPaste_wysiwyg: function(s) {
      const r = o.isIE ? f.clipboardData : s.clipboardData;
      return r ? b._dataTransferAction("paste", s, r) : !0;
    },
    _setClipboardComponent: function(s, r, c) {
      s.preventDefault(), s.stopPropagation(), c.setData("text/html", r.component.outerHTML);
    },
    onCopy_wysiwyg: function(s) {
      const r = o.isIE ? f.clipboardData : s.clipboardData;
      if (typeof x.onCopy == "function" && x.onCopy(s, r, d) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const c = d.currentFileComponentInfo;
      c && !o.isIE && (b._setClipboardComponent(s, c, r), o.addClass(c.component, "se-component-copy"), f.setTimeout(function() {
        o.removeClass(c.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(s) {
      if (typeof x.onSave == "function") {
        x.onSave(s, d);
        return;
      }
    },
    onCut_wysiwyg: function(s) {
      const r = o.isIE ? f.clipboardData : s.clipboardData;
      if (typeof x.onCut == "function" && x.onCut(s, r, d) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const c = d.currentFileComponentInfo;
      c && !o.isIE && (b._setClipboardComponent(s, c, r), o.removeItem(c.component), d.controllersOff()), f.setTimeout(function() {
        d.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(s) {
      if (d.isReadOnly || o.isIE)
        return s.preventDefault(), s.stopPropagation(), !1;
      const r = s.dataTransfer;
      return r ? (b._setDropLocationSelection(s), d.removeNode(), document.body.contains(d.currentControllerTarget) || d.controllersOff(), b._dataTransferAction("drop", s, r)) : !0;
    },
    _setDropLocationSelection: function(s) {
      const r = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let c = null;
      if (s.rangeParent ? (r.startContainer = s.rangeParent, r.startOffset = s.rangeOffset, r.endContainer = s.rangeParent, r.endOffset = s.rangeOffset) : d._wd.caretRangeFromPoint ? c = d._wd.caretRangeFromPoint(s.clientX, s.clientY) : c = d.getRange(), c && (r.startContainer = c.startContainer, r.startOffset = c.startOffset, r.endContainer = c.endContainer, r.endOffset = c.endOffset), r.startContainer === r.endContainer) {
        const h = o.getParentElement(r.startContainer, o.isComponent);
        h && (r.startContainer = h, r.startOffset = 0, r.endContainer = h, r.endOffset = 0);
      }
      d.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(s, r, c) {
      let h, p;
      if (o.isIE) {
        h = c.getData("Text");
        const v = d.getRange(), m = o.createElement("DIV"), y = {
          sc: v.startContainer,
          so: v.startOffset,
          ec: v.endContainer,
          eo: v.endOffset
        };
        return m.setAttribute("contenteditable", !0), m.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(m), m.focus(), f.setTimeout(function() {
          p = m.innerHTML, o.removeItem(m), d.setRange(y.sc, y.so, y.ec, y.eo), b._setClipboardData(s, r, h, p, c);
        }), !0;
      } else if (h = c.getData("text/plain"), p = c.getData("text/html"), b._setClipboardData(s, r, h, p, c) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(s, r, c, h, p) {
      const v = /class=["']*Mso(Normal|List)/i.test(h) || /content=["']*Word.Document/i.test(h) || /content=["']*OneNote.File/i.test(h) || /content=["']*Excel.Sheet/i.test(h);
      !h ? h = o._HTMLConvertor(c).replace(/\n/g, "<br>") : (h = h.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), v && (h = h.replace(/\n/g, " "), c = c.replace(/\n/g, " ")), h = d.cleanHTML(h, d.pasteTagsWhitelistRegExp, d.pasteTagsBlacklistRegExp));
      const y = d._charCount(d._charTypeHTML ? h : c);
      if (s === "paste" && typeof x.onPaste == "function") {
        const _ = x.onPaste(r, h, y, d);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          h = _;
        }
      }
      if (s === "drop" && typeof x.onDrop == "function") {
        const _ = x.onDrop(r, h, y, d);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          h = _;
        }
      }
      const C = p.files;
      if (C.length > 0 && !v)
        return /^image/.test(C[0].type) && d.plugins.image && x.insertImage(C), !1;
      if (!y)
        return !1;
      if (h)
        return x.insertHTML(h, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(s) {
      if (d.isDisabled || d.isReadOnly) return !1;
      const r = o.getParentElement(s.target, o.isComponent), c = d._lineBreaker.style;
      if (r && !d.currentControllerName) {
        const h = e.element;
        let p = 0, v = h.wysiwyg;
        do
          p += v.scrollTop, v = v.parentElement;
        while (v && !/^(BODY|HTML)$/i.test(v.nodeName));
        const m = h.wysiwyg.scrollTop, y = b._getEditorOffsets(null), C = o.getOffset(r, h.wysiwygFrame).top + m, _ = s.pageY + p + (n.iframe && !n.toolbarContainer ? h.toolbar.offsetHeight : 0), S = C + (n.iframe ? p : y.top), D = o.isListCell(r.parentNode);
        let E = "", B = "";
        if ((D ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) && _ < S + 20)
          B = C, E = "t";
        else if ((D ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) && _ > S + r.offsetHeight - 20)
          B = C + r.offsetHeight, E = "b";
        else {
          c.display = "none";
          return;
        }
        d._variable._lineBreakComp = r, d._variable._lineBreakDir = E, c.top = B - m + "px", d._lineBreakerButton.style.left = o.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", c.display = "block";
      } else c.display !== "none" && (c.display = "none");
    },
    _enterPrevent: function(s) {
      s.preventDefault(), o.isMobile && d.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(s) {
      s.preventDefault();
    },
    _onLineBreak: function(s) {
      s.preventDefault();
      const r = d._variable._lineBreakComp, c = this ? this : d._variable._lineBreakDir, h = o.isListCell(r.parentNode), p = o.createElement(h ? "BR" : o.isCell(r.parentNode) ? "DIV" : n.defaultTag);
      if (h || (p.innerHTML = "<br>"), d._charTypeHTML && !d.checkCharCount(p.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(p, c === "t" ? r : r.nextSibling), d._lineBreaker.style.display = "none", d._variable._lineBreakComp = null;
      const v = h ? p : p.firstChild;
      d.setRange(v, 1, v, 1), d.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const s = n.iframe ? d._ww : e.element.wysiwyg;
      o.isResizeObserverSupported && (this._resizeObserver = new f.ResizeObserver(function(r) {
        d.__callResizeFunction(-1, r[0]);
      })), e.element.toolbar.addEventListener("mousedown", b._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", b._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", b.onClick_toolbar, !1), s.addEventListener("mousedown", b.onMouseDown_wysiwyg, !1), s.addEventListener("click", b.onClick_wysiwyg, !1), s.addEventListener(o.isIE ? "textinput" : "input", b.onInput_wysiwyg, !1), s.addEventListener("keydown", b.onKeyDown_wysiwyg, !1), s.addEventListener("keyup", b.onKeyUp_wysiwyg, !1), s.addEventListener("paste", b.onPaste_wysiwyg, !1), s.addEventListener("copy", b.onCopy_wysiwyg, !1), s.addEventListener("cut", b.onCut_wysiwyg, !1), s.addEventListener("drop", b.onDrop_wysiwyg, !1), s.addEventListener("scroll", b.onScroll_wysiwyg, !1), s.addEventListener("focus", b.onFocus_wysiwyg, !1), s.addEventListener("blur", b.onBlur_wysiwyg, !1), b._lineBreakerBind = { a: b._onLineBreak.bind(""), t: b._onLineBreak.bind("t"), b: b._onLineBreak.bind("b") }, s.addEventListener("mousemove", b.onMouseMove_wysiwyg, !1), d._lineBreakerButton.addEventListener("mousedown", b._onMouseDown_lineBreak, !1), d._lineBreakerButton.addEventListener("click", b._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", b._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", b._lineBreakerBind.b, !1), s.addEventListener("touchstart", b.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.addEventListener("touchend", b.onClick_wysiwyg, { passive: !0, useCapture: !1 }), n.height === "auto" && !n.codeMirrorEditor && (e.element.code.addEventListener("keydown", b._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", b._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", b._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(n.height) && n.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", b.onMouseDown_resizingBar, !1) : o.addClass(e.element.resizingBar, "se-resizing-none")), b._setResponsiveToolbar(), o.isResizeObserverSupported && (this._toolbarObserver = new f.ResizeObserver(d.resetResponsiveToolbar)), f.addEventListener("resize", b.onResize_window, !1), n.stickyToolbar > -1 && f.addEventListener("scroll", b.onScroll_window, !1);
    },
    _removeEvent: function() {
      const s = n.iframe ? d._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", b._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", b._buttonsEventHandler), e.element.toolbar.removeEventListener("click", b.onClick_toolbar), s.removeEventListener("mousedown", b.onMouseDown_wysiwyg), s.removeEventListener("click", b.onClick_wysiwyg), s.removeEventListener(o.isIE ? "textinput" : "input", b.onInput_wysiwyg), s.removeEventListener("keydown", b.onKeyDown_wysiwyg), s.removeEventListener("keyup", b.onKeyUp_wysiwyg), s.removeEventListener("paste", b.onPaste_wysiwyg), s.removeEventListener("copy", b.onCopy_wysiwyg), s.removeEventListener("cut", b.onCut_wysiwyg), s.removeEventListener("drop", b.onDrop_wysiwyg), s.removeEventListener("scroll", b.onScroll_wysiwyg), s.removeEventListener("mousemove", b.onMouseMove_wysiwyg), d._lineBreakerButton.removeEventListener("mousedown", b._onMouseDown_lineBreak), d._lineBreakerButton.removeEventListener("click", b._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", b._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", b._lineBreakerBind.b), b._lineBreakerBind = null, s.removeEventListener("touchstart", b.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("touchend", b.onClick_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("focus", b.onFocus_wysiwyg), s.removeEventListener("blur", b.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", b._codeViewAutoHeight), e.element.code.removeEventListener("keyup", b._codeViewAutoHeight), e.element.code.removeEventListener("paste", b._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", b.onMouseDown_resizingBar), b._resizeObserver && (b._resizeObserver.unobserve(e.element.wysiwygFrame), b._resizeObserver = null), b._toolbarObserver && (b._toolbarObserver.unobserve(e.element._toolbarShadow), b._toolbarObserver = null), f.removeEventListener("resize", b.onResize_window), f.removeEventListener("scroll", b.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (a.length === 0) {
        a = null;
        return;
      }
      b._responsiveCurrentSize = "default";
      const s = b._responsiveButtonSize = [], r = b._responsiveButtons = { default: a[0] };
      for (let c = 1, h = a.length, p, v; c < h; c++)
        v = a[c], p = v[0] * 1, s.push(p), r[p] = v[1];
      s.sort(function(c, h) {
        return c - h;
      }).unshift("default");
    }
  }, x = {
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
      const r = Pi._createToolBar(u, s, d.plugins, n);
      a = r.responsiveButtons, b._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const c = Wi(e.element.originElement, d._getConstructed(e.element), n);
      e.element = c.element, e.tool = c.tool, n.iframe && (e.element.wysiwyg = d._wd.body), d._recoverButtonStates(), d._cachingButtons(), d.history._resetCachingButton(), d.effectNode = null, d.hasFocus && b._applyTagEffects(), d.isReadOnly && o.setDisabledButtons(!0, d.resizingDisabledButtons), typeof x.onSetToolbarButtons == "function" && x.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), d);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(s) {
      b._removeEvent(), d._resetComponents(), o.removeClass(d._styleCommandMap.showBlocks, "active"), o.removeClass(d._styleCommandMap.codeView, "active"), d._variable.isCodeView = !1, d._iframeAuto = null, d.plugins = s.plugins || d.plugins;
      const r = [n, s].reduce(function(v, m) {
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
      }, {}), c = e.element, h = c.wysiwyg.innerHTML, p = Pi._setOptions(r, e, n);
      p.callButtons && (t = p.callButtons, d.initPlugins = {}), p.plugins && (d.plugins = i = p.plugins), c._menuTray.children.length === 0 && (this._menuTray = {}), a = p.toolbar.responsiveButtons, d.options = n = r, d.lang = l = n.lang, n.iframe && c.wysiwygFrame.addEventListener("load", function() {
        o._setIframeDocument(this, n), d._setOptionsInit(c, h);
      }), c.editorArea.appendChild(c.wysiwygFrame), n.iframe || d._setOptionsInit(c, h);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(s) {
      const r = n._editorStyles = o._setDefaultOptionStyle(n, s), c = e.element;
      c.topArea.style.cssText = r.top, c.code.style.cssText = n._editorStyles.frame, c.code.style.display = "none", n.height === "auto" ? c.code.style.overflow = "hidden" : c.code.style.overflow = "", n.iframe ? (c.wysiwygFrame.style.cssText = r.frame, c.wysiwyg.style.cssText = r.editor) : c.wysiwygFrame.style.cssText = r.frame + r.editor;
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
      e.element.originElement.value = s, b.onSave_wysiwyg(s, d);
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
      return s = typeof s == "string" ? s : n.charCounterType, d.getCharLength(d._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, s);
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
    insertHTML: function(s, r, c, h) {
      if (e.element.wysiwygFrame.contains(d.getSelection().focusNode) || d.focus(), typeof s == "string") {
        r || (s = d.cleanHTML(s, null, null));
        try {
          if (o.isListCell(o.getFormatElement(d.getSelectionNode(), null))) {
            const B = u.createRange().createContextualFragment(s).childNodes;
            d._isFormatData(B) && (s = d._convertListCell(B));
          }
          const v = u.createRange().createContextualFragment(s).childNodes;
          if (c) {
            const E = d._charTypeHTML ? "outerHTML" : "textContent";
            let B = "";
            for (let R = 0, Z = v.length; R < Z; R++)
              B += v[R][E];
            if (!d.checkCharCount(B, null)) return;
          }
          let m, y, C, _, S;
          for (; m = v[0]; ) {
            if (_ && _.nodeType === 3 && y && y.nodeType === 1 && o.isBreak(m)) {
              _ = m, o.removeItem(m);
              continue;
            }
            C = d.insertNode(m, y, !1), y = C.container || C, S || (S = C), _ = m;
          }
          _.nodeType === 3 && y.nodeType === 1 && (y = _);
          const D = y.nodeType === 3 ? C.endOffset || y.textContent.length : y.childNodes.length;
          h ? d.setRange(S.container || S, S.startOffset || 0, y, D) : d.setRange(y, D, y, D);
        } catch (p) {
          if (d.isDisabled || d.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + p), d.execCommand("insertHTML", !1, s);
        }
      } else if (o.isComponent(s))
        d.insertComponent(s, !1, c, !1);
      else {
        let p = null;
        (o.isFormatElement(s) || o.isMedia(s)) && (p = o.getFormatElement(d.getSelectionNode(), null)), d.insertNode(s, p, c);
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
        const c = o.createElement("DIV");
        c.innerHTML = r;
        const h = e.element.wysiwyg, p = c.children;
        for (let v = 0, m = p.length; v < m; v++)
          p[v] && h.appendChild(p[v]);
      }
      d.history.push(!1);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(s) {
      d.isReadOnly = s, o.setDisabledButtons(!!s, d.resizingDisabledButtons), s ? (d.controllersOff(), d.submenuActiveButton && d.submenuActiveButton.disabled && d.submenuOff(), d._moreLayerActiveButton && d._moreLayerActiveButton.disabled && d.moreLayerOff(), d.containerActiveButton && d.containerActiveButton.disabled && d.containerOff(), d.modalForm && d.plugins.dialog.close.call(d), e.element.code.setAttribute("readOnly", "true"), o.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), o.removeClass(e.element.wysiwygFrame, "se-read-only")), n.codeMirrorEditor && n.codeMirrorEditor.setOption("readOnly", !!s);
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
      s.display === "none" && (s.display = n.display);
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
      d.submenuOff(), d.containerOff(), d.controllersOff(), d.notice && d.notice.close.call(d), d.modalForm && d.plugins.dialog.close.call(d), d.history._destroy(), b._removeEvent(), o.removeItem(e.element.toolbar), o.removeItem(e.element.topArea);
      for (let s in d.functions)
        o.hasOwn(d, s) && delete d.functions[s];
      for (let s in d)
        o.hasOwn(d, s) && delete d[s];
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
        d._isInline ? b._showToolbarInline() : (e.element.toolbar.style.display = "", e.element._stickyDummy.style.display = ""), b.onResize_window();
      },
      /**
       * @description Hide the toolbar
       */
      hide: function() {
        d._isInline ? b._hideToolbar() : (e.element.toolbar.style.display = "none", e.element._stickyDummy.style.display = "none"), b.onResize_window();
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
        d.controllersOff(), d.modalForm && d.plugins.dialog.close.call(d), e.element.wysiwyg.setAttribute("contenteditable", !1), d.isDisabled = !0, n.codeMirrorEditor ? n.codeMirrorEditor.setOption("readOnly", !0) : e.element.code.setAttribute("disabled", "disabled");
      },
      /**
       * @description Enable the wysiwyg area
       */
      enable: function() {
        e.element.wysiwyg.setAttribute("contenteditable", !0), d.isDisabled = !1, n.codeMirrorEditor ? n.codeMirrorEditor.setOption("readOnly", !1) : e.element.code.removeAttribute("disabled");
      }
    }
  };
  d.functions = x, d.options = n;
  let w = e.element, k = w.originElement, L = w.topArea;
  return k.style.display = "none", L.style.display = "block", n.iframe && w.wysiwygFrame.addEventListener("load", function() {
    o._setIframeDocument(this, n), d._editorInit(!1, n.value), n.value = null;
  }), typeof k.nextElementSibling == "object" ? k.parentNode.insertBefore(L, k.nextElementSibling) : k.parentNode.appendChild(L), w.editorArea.appendChild(w.wysiwygFrame), w = k = L = null, n.iframe || (d._editorInit(!1, n.value), n.value = null), x;
}
const ja = {
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
      for (let f in u)
        if (he.hasOwn(u, f))
          if (f === "plugins" && u[f] && a[f]) {
            let o = a[f], g = u[f];
            o = o.length ? o : Object.keys(o).map(function(d) {
              return o[d];
            }), g = g.length ? g : Object.keys(g).map(function(d) {
              return g[d];
            }), a[f] = g.filter(function(d) {
              return o.indexOf(d) === -1;
            }).concat(o);
          } else
            a[f] = u[f];
      return a;
    }, {}));
    const l = typeof e == "string" ? document.getElementById(e) : e;
    if (!l)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const n = Pi.init(l, t);
    if (n.constructed._top.id && document.getElementById(n.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + n.constructed._top.id + '")');
    return qa(Wi(l, n.constructed, n.options), n.pluginCallButtons, n.plugins, n.options.lang, t, n._responsiveButtons);
  }
}, Ga = ["innerHTML", "id", "tabindex"], Ka = /* @__PURE__ */ ke({
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
    const l = i, n = e, a = Q(null), u = Q(n.modelValue);
    let f = null, o;
    const g = Q(n.focusing), d = (k) => {
      g.value = !0, l("focus", k);
    }, b = (k) => {
      g.value = !1, l("blur", k);
    }, x = (k) => {
      o && clearTimeout(o), o = setTimeout(() => {
        Fi(k) === "" ? u.value = "" : u.value = k;
      }, 100);
    }, w = () => {
      let k = {
        //@ts-ignore
        lang: Rl[n.lang] ? Rl[n.lang] : Ri,
        plugins: {
          ...Wa
        },
        ...$a
      };
      f = ja.create(n.id, k), f.onChange = (L) => {
        x(L), n.disabled ? f == null || f.disabled() : f == null || f.enabled();
      }, f.onKeyUp = (L, s) => {
        x(s.getContents(!1));
      }, f.onBlur = () => {
        b();
      }, f.onClick = () => {
        d();
      };
    };
    return se(() => n.modelValue, (k) => u.value = k), se(u, (k) => l("update:modelValue", k)), Et(() => {
      w();
    }), t({
      doSetValue: (k) => {
        f && f.setContents(k);
      }
    }), (k, L) => (W(), ae("div", {
      innerHTML: u.value,
      ref_key: "input",
      ref: a,
      id: k.id,
      tabindex: k.tabindex
    }, null, 8, Ga));
  }
}), wt = (e, t) => {
  if (typeof e == "string" && (e = We(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let i = e.substring(3), l = $l(i), n = [];
    for (let a in l) n.push({ value: a, label: l[a] });
    return nt.i18nOptionsFormatter[i] && (n = nt.i18nOptionsFormatter[i](n)), wt(n, t);
  }
  return !Array.isArray(e) || e.length === 0 ? [] : kn(
    e.map((i) => {
      if (typeof i == "object") return i;
      if (typeof i == "string" || typeof i == "number")
        return {
          label: String(i),
          value: i
        };
    }).filter((i) => typeof i < "u")
  );
}, kn = (e) => e.reduce((t, i) => t.find((n) => n.value === i.value) ? t : t.concat([i]), []), Yt = (e, t = "", i = !0, l = void 0) => {
  if (t === "" && typeof l != "function") return !0;
  const n = String(t).toLowerCase();
  let a = String(e.label).toLowerCase();
  return !(!(a.indexOf(n) !== -1 && (i || a !== n)) || typeof l == "function" && !l(e));
}, ii = (e, t) => {
  if (t !== "")
    return e.find((i) => Array.isArray(t) ? t.includes(i.value) : i.value == t);
}, Ya = (e, t, i) => kn([...wt(t, i), ...e]), xn = (e, t, i) => {
  if (i) {
    if (Array.isArray(t)) {
      let l = t.findIndex((n) => n == e.value);
      return typeof l > "u" ? !1 : l > -1;
    }
    return !1;
  }
  return e.value == t;
}, St = (e, t) => {
  let i = t.findIndex((l) => l == e.value);
  return typeof i > "u" && (i = -1), i;
}, Xa = (e) => e.option.disabled ? !1 : (e.focusedOptionIndex = -1, e.optionValueType === "option" ? e.value.value = e.option : e.value.value = String(e.option.value), e.pickedOptions.splice(0, 1, e.option), e.showOptions = !1, e.searchMode = !1, typeof e.callback == "function" && e.callback({ option: e.option }), !0), Ja = (e) => {
  if (e.option.disabled) return !1;
  let t = -1;
  return e.optionValueType === "option" ? t = St(e.option, e.value.value.map((i) => i.value)) : t = St(e.option, e.value.value), t === -1 ? (e.optionValueType === "option" ? e.value.value.push(e.option) : e.value.value.push(String(e.option.value)), e.tagMode || e.pickedOptions.push(e.option)) : e.tagMode || (e.value.value.splice(t, 1), e.pickedOptions.splice(t, 1)), typeof e.keepFocused == "function" ? e.keepFocused() : e.searchMode && e.searchField && e.searchField.keepFocused(), typeof e.callback == "function" && e.callback({ option: e.option }), !0;
}, Ul = (e) => {
  if (e.multiple) {
    let i = e.options.length;
    for (let l = 0; l < i; ++l) {
      let n = e.optionValueType === "option" ? ii(e.options, e.value.value[l].value) : ii(e.options, e.value.value[l]);
      typeof n < "u" && (e.pickedOptions.length === 0 ? e.pickedOptions.push(n) : e.pickedOptions.splice(l, 1, n));
    }
    return;
  }
  let t = e.optionValueType === "option" ? ii(e.options, e.value.value.map((i) => i.value)) : ii(e.options, e.value.value);
  typeof t < "u" && (e.pickedOptions.length === 0 ? e.pickedOptions.push(t) : e.pickedOptions.splice(0, 1, t));
}, Pl = (e) => {
  var l, n, a, u, f;
  let t = e.options.value.length - 1;
  if (t === -1) return !1;
  const i = e.event.key ?? "";
  if (e.focusing) {
    if (["ArrowDown", "ArrowUp", "Enter"].includes(i) && (e.event.preventDefault(), e.event.stopPropagation()), i === "ArrowDown") {
      ++e.focusedIndex.value, e.focusedIndex.value > t && (e.focusedIndex.value = 0);
      let o = e.options.value[e.focusedIndex.value];
      for (; !Yt(o, e.query, !0, e.optionsConfig.filter) && e.focusedIndex.value < t; )
        ++e.focusedIndex.value, o = e.options.value[e.focusedIndex.value];
      let g = typeof ((l = e.container.value) == null ? void 0 : l.querySelector) == "function" && ((n = e.container.value) == null ? void 0 : n.querySelector('[data-index="' + e.focusedIndex.value + '"]'));
      return g && g.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" }), !0;
    } else if (i === "ArrowUp") {
      --e.focusedIndex.value, e.focusedIndex.value < 0 && (e.focusedIndex.value = t);
      let o = e.options.value[e.focusedIndex.value];
      for (; !Yt(o, e.query, (a = e.optionsConfig) == null ? void 0 : a.filter) && e.focusedIndex.value > 0; )
        --e.focusedIndex.value, o = e.options.value[e.focusedIndex.value];
      let g = typeof ((u = e.container.value) == null ? void 0 : u.querySelector) == "function" && ((f = e.container.value) == null ? void 0 : f.querySelector('[data-index="' + e.focusedIndex.value + '"]'));
      return g && g.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" }), !0;
    } else if (i === "Enter" && e.focusedIndex.value > -1)
      return e.options.value[e.focusedIndex.value];
  }
  return !1;
}, Qa = (e) => {
  let t = {
    value: e.query,
    label: e.query
  };
  return (e.optionValueType === "option" ? St(t, e.value.value.map((l) => l.value)) : St(t, e.value.value)) === -1 ? (e.value.value.push(e.optionValueType === "option" ? t : t.value), e.options.value.push(t), e.pickedOptions.push(t), !0) : !1;
}, er = (e) => {
  let t = !0;
  for (; t; ) {
    let i = e.optionValueType === "option" ? St(e.option, e.value.value.map((l) => l.value)) : St(e.option, e.value.value);
    i >= 0 ? (e.options.value.splice(
      e.options.value.findIndex((l) => l.value == e.option.value),
      1
    ), e.pickedOptions.splice(
      e.pickedOptions.findIndex((l) => l.value == e.option.value),
      1
    ), e.value.value.splice(i, 1)) : t = !1;
  }
  return !0;
}, tr = (e) => {
  var n;
  let t = 0, i = e.options.value.length, l = e.options.value[t];
  for (; !Yt(l, e.query, !0, (n = e.optionsConfig) == null ? void 0 : n.filter) && t < i; )
    ++t, l = e.options.value[t];
  e.optionValueType === "option" ? e.multiple ? e.value.value.push(l) : e.value.value = l : e.multiple ? e.value.value.push(l.value) : e.value.value = l.value, e.multiple ? e.pickedOptions.push(l) : e.pickedOptions.splice(0, 1, l);
}, st = /* @__PURE__ */ ke({
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
    const i = t, l = e, n = X(() => {
      var s, r, c;
      return (s = l.item) != null && s.icon ? l.item.icon : typeof ((c = (r = l.data) == null ? void 0 : r.optionsConfig) == null ? void 0 : c.icon) == "function" ? l.data.optionsConfig.icon(l.item, l.data.prop) : l.data.optionsConfig.icon;
    }), a = X(() => {
      if (typeof l.data.optionsConfig.text < "u") {
        if (typeof l.data.optionsConfig.text == "function")
          return l.data.optionsConfig.text(l.item, l.data.prop);
        if (l.data.optionsConfig.text !== "") return l.data.optionsConfig.text;
      }
      return u.value;
    }), u = X(() => typeof l.data.optionsConfig.labelFormatter == "function" ? l.data.optionsConfig.labelFormatter(l.item) : l.item.label), f = X(() => {
      var s, r;
      return typeof ((s = l.data.optionsConfig) == null ? void 0 : s.class) == "function" ? l.data.optionsConfig.class(l.item) : typeof ((r = l.data.optionsConfig) == null ? void 0 : r.class) < "u" ? l.data.optionsConfig.class : `lkt-opt-${l.item.value}`;
    }), o = X(() => {
      if (l.data.optionSlot && !(typeof ee.optionSlots[l.data.optionSlot] > "u"))
        return ee.optionSlots[l.data.optionSlot];
    }), g = X(() => {
      var s, r, c;
      return o.value ? o.value : l.data.isTag ? "lkt-tag" : !l.editing && !l.data.previewMode && (typeof ((s = l.data.optionsConfig) == null ? void 0 : s.modal) < "u" && l.data.optionsConfig.modal !== "" || typeof l.item.modal < "u" && l.item.modal !== "") ? "lkt-button" : !l.editing && !l.data.previewMode && typeof ((r = l.data.optionsConfig) == null ? void 0 : r.download) < "u" && l.data.optionsConfig.download !== "" || !l.editing && !l.data.previewMode && typeof ((c = l.data.optionsConfig) == null ? void 0 : c.anchor) < "u" ? "lkt-anchor" : "div";
    }), d = X(() => {
      var s, r, c, h, p, v, m;
      if (g.value === "lkt-button") {
        let y = l.item.modal;
        (s = l.data.optionsConfig) != null && s.modal && (y = l.data.optionsConfig.modal);
        let C = y;
        return typeof y == "function" && (C = () => y(l.item)), {
          modal: C,
          modalData: l.data.optionsConfig.modalData,
          modalKey: l.item.value,
          icon: n.value
        };
      }
      if (g.value === "lkt-anchor") {
        if (typeof ((r = l.data.optionsConfig) == null ? void 0 : r.anchor) == "function") return { ...l.data.optionsConfig.anchor({ data: l.item }), prop: l.item };
        if (typeof ((c = l.data.optionsConfig) == null ? void 0 : c.anchor) == "object") return { ...l.data.optionsConfig.anchor, prop: l.item };
        let y = (h = l.data.optionsConfig) == null ? void 0 : h.download;
        typeof l.data.optionsConfig.download == "function" ? y = () => {
          var _;
          return (_ = l.data.optionsConfig) == null ? void 0 : _.download(l.item);
        } : (v = (p = l.data.optionsConfig) == null ? void 0 : p.download) != null && v.startsWith("prop:") && (y = We((m = l.data.optionsConfig) == null ? void 0 : m.download, l.item));
        let C = l.data.optionsConfig.download !== "";
        return {
          to: y,
          type: C ? ql.Download : void 0,
          prop: l.item
        };
      }
      return g.value === "lkt-tag" ? {
        type: so.ActionIcon,
        icon: "lkt-icn-cancel"
      } : {};
    }), b = X(() => typeof l.item.tags > "u" ? [] : typeof l.item.tags == "function" ? l.item.tags() : l.item.tags), x = () => {
      var s;
      l.item.children && l.item.children.length > 0 || (typeof ((s = l.events) == null ? void 0 : s.click) == "function" && l.events.click(l.item, l.index), i("click"));
    }, w = (s) => {
      var r;
      typeof ((r = l.events) == null ? void 0 : r.click) == "function" && l.events.click(s, l.index), i("click");
    }, k = (s) => {
      l.editing && (s.stopPropagation(), x());
    }, L = () => {
      var s;
      typeof ((s = l.events) == null ? void 0 : s.clickIcon) == "function" && l.events.clickIcon(l.item, l.index), i("click-icon", l.item);
    };
    return (s, r) => {
      const c = me("lkt-tag"), h = me("lkt-table");
      return W(), ae(Oe, null, [
        (W(), J(pt(g.value), pe(d.value, {
          class: ["lkt-field--dropdown-option", f.value],
          title: a.value,
          onClick: Yn(x, ["stop"]),
          onClickIcon: L
        }), {
          default: Ce(() => [
            n.value && g.value !== "lkt-button" ? (W(), ae("div", {
              key: 0,
              class: "lkt-field--dropdown-option--icon-container",
              onClick: k
            }, [
              be("i", {
                class: Ke(n.value)
              }, null, 2)
            ])) : oe("", !0),
            be("div", {
              class: "lkt-field--dropdown-option--label-container",
              onClick: k
            }, ot(a.value), 1),
            (W(!0), ae(Oe, null, at(b.value, (p) => (W(), J(c, pe({ ref_for: !0 }, p), null, 16))), 256))
          ]),
          _: 1
        }, 16, ["class", "title"])),
        s.item.children && s.item.children.length > 0 ? (W(), J(h, pe({
          key: 0,
          ref: "optionList",
          modelValue: s.item.children,
          "onUpdate:modelValue": r[0] || (r[0] = (p) => s.item.children = p)
        }, {
          type: H(Kt).Ul,
          class: "lkt-field--dropdown-children",
          editMode: s.editing,
          itemDisplayChecker: (p) => {
            var v;
            return H(Yt)(p, s.data.query, !0, (v = s.data.optionsConfig) == null ? void 0 : v.filter);
          },
          itemsContainerClass: "lkt-field--dropdown-options",
          itemContainerClass: (p, v) => {
            let m = [];
            return H(xn)(p, s.data.editableValue, s.data.multiple) && m.push("is-active"), s.data.focusedOptionIndex === v && m.push("is-focused"), p.disabled && m.push("is-disabled"), m.join(" ");
          },
          itemSlotComponent: zi(st),
          itemSlotData: s.data,
          itemSlotEvents: {
            click: (p, v) => {
              w(p);
            }
          }
        }), null, 16, ["modelValue"])) : oe("", !0)
      ], 64);
    };
  }
}), ir = {
  key: 0,
  class: "lkt-field--searchable-box"
}, lr = ["value", "placeholder", "disabled"], nr = {
  key: 1,
  class: "lkt-field--searchable-box"
}, or = ["value", "placeholder", "disabled"], sr = { key: 0 }, Wl = /* @__PURE__ */ ke({
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
  setup(e, { expose: t, emit: i }) {
    const l = i, n = Q(null), a = Q(null), u = e, f = Q(u.modelValue), o = Q(-1), g = u.multiple && u.canTag, d = typeof u.options == "object" && u.optionValueType !== "option" ? JSON.parse(JSON.stringify(u.options)) : u.options, b = Q([...wt(u.options, u.prop)]), x = Q(!0);
    se(x, (M) => {
      M || Ge(() => {
        x.value = !0;
      });
    }), se(() => u.modelValue, (M) => {
      var $;
      !M && (($ = u.optionsConfig) != null && $.autoPickFirstOptionIfEmpty) ? (u.pickedOptions.splice(0, u.pickedOptions.length), Ge(() => {
        tr({
          value: f,
          optionValueType: u.optionValueType,
          multiple: u.multiple,
          query: w.value,
          optionsConfig: u.optionsConfig,
          options: b,
          pickedOptions: u.pickedOptions
        });
      })) : f.value = M;
    }, { deep: !0 }), se(f, (M) => {
      l("update:modelValue", M);
    }, { deep: !0 }), se(b, (M) => {
      var $;
      typeof (($ = u.events) == null ? void 0 : $.updatedOptions) == "function" && (x.value = !1, u.events.updatedOptions({
        options: M
      })), l("update:options", M);
    }), se(() => u.options, (M, $) => {
      if (!x.value) return;
      let te = new jt({
        opts: $
      });
      te.increment({ opts: M }), te.changed() && (b.value = wt(M, u.prop), F());
    }, { deep: !0 });
    const w = Q(""), k = Q(null), L = Q(u.pickedOptions);
    se(L, (M) => {
      l("update:pickedOptions", M);
    });
    const s = Q(u.showOptions);
    se(s, (M) => {
      g || l("update:showOptions", M), Ge(() => {
        r.value = s.value;
      });
    });
    const r = Q(!1), c = Q(u.focusing), h = Q(!1), p = Q(!1);
    se(() => u.focusing, (M) => {
      M ? p.value = !0 : p.value = !1, v();
    });
    const v = () => {
      Ge(() => {
        c.value = h.value || p.value, s.value = c.value;
      });
    };
    se(h, (M) => {
      M && (p.value = !1), v();
    }), se(p, (M) => {
      M && (h.value = !1), v();
    }), se(c, (M) => {
      l(M ? "focus" : "blur");
    });
    let m, y;
    const C = (M) => {
      m = setTimeout(() => {
        h.value = !1;
      }, 100);
    }, _ = (M) => {
      if (h.value = !0, g && M.key === "Enter") {
        if (w.value.length === 0) return;
        Qa({
          value: f,
          query: w.value,
          optionValueType: u.optionValueType,
          options: b,
          pickedOptions: L.value
        }) && (w.value = "");
      } else if (["ArrowDown", "ArrowUp", "Enter"].includes(M.key)) {
        let $ = Pl({
          event: M,
          options: b,
          focusing: u.focusing,
          container: a,
          focusedIndex: o,
          optionsConfig: u.optionsConfig,
          query: w.value
        });
        typeof $ == "object" && A($);
      }
    }, S = (M) => {
      h.value = !0;
    }, D = () => {
      clearTimeout(m), clearTimeout(y), Ge(() => {
        k.value && k.value.focus();
      });
    }, E = (M) => {
      I.value || (y = setTimeout(() => {
        p.value = !1;
      }, 100));
    }, B = (M) => {
      if (p.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(M.key)) {
        let $ = Pl({
          event: M,
          options: b,
          focusing: u.focusing,
          container: a,
          focusedIndex: o,
          optionsConfig: u.optionsConfig,
          query: w.value
        });
        typeof $ == "object" && A($);
      }
    }, R = (M) => {
      p.value = !0;
    }, Z = (M) => {
      er({
        value: f,
        option: M,
        optionValueType: u.optionValueType,
        options: b,
        pickedOptions: L.value
      });
    };
    t({
      doClear: () => {
        u.isAutoCompleteText ? (w.value = "", f.value = "") : u.multiple ? f.value.splice(0, f.value.length) : f.value = "", L.value.splice(0, L.value.length), Ge(() => {
          F();
        });
      },
      doUndo: (M) => {
        if (u.isAutoCompleteText)
          f.value = M;
        else if (u.multiple) {
          f.value.splice(0, f.value.length);
          let $ = 0, te = M.length;
          for (; $ < te; )
            f.value.push(
              M[$]
            ), ++$;
        } else
          f.value = M;
        L.value.splice(0, L.value.length), Ge(() => {
          F();
        });
      },
      keepFocused: D,
      switchShowOptions: () => {
        s.value = !s.value;
      }
    }), se(() => u.pickedOptions, (M) => {
      l("change"), L.value = M;
    }, { deep: !0 }), se(s, (M) => {
      M || (p.value = !1, h.value = !1, v());
    });
    const O = X(() => u.multiple && (u.canTag || u.searchable)), I = X(() => !u.multiple && u.searchable && c.value), A = (M) => {
      var te, j;
      if (u.isAutoCompleteText) {
        w.value = M.value, f.value = M.value;
        return;
      }
      (u.multiple ? Ja({
        option: M,
        value: f,
        pickedOptions: L.value,
        tagMode: g,
        searchMode: u.searchable,
        keepFocused: D,
        optionValueType: u.optionValueType,
        callback: (te = u.events) == null ? void 0 : te.clickOption
      }) : Xa({
        option: M,
        value: f,
        pickedOptions: L.value,
        showOptions: s.value,
        optionValueType: u.optionValueType,
        callback: (j = u.events) == null ? void 0 : j.clickOption
      })) && typeof u.events.clickOption == "function" && u.events.clickOption({
        option: M
      });
    }, F = () => {
      u.multiple ? Ul({
        value: f,
        options: b.value,
        pickedOptions: L.value,
        multiple: u.multiple,
        optionValueType: u.optionValueType
      }) : Ul({
        value: f,
        options: b.value,
        pickedOptions: L.value,
        multiple: u.multiple,
        optionValueType: u.optionValueType
      }), l("loaded");
    }, N = () => {
      if (u.autoLoading && u.optionsConfig.autoloadResource === "feed" && u.multiple)
        for (let M = 0; M < b.value.length; ++M)
          u.optionValueType === "option" ? f.value.push(b.value[M]) : f.value.push(b.value[M].value);
      o.value = -1, F();
    }, U = X(() => {
      var j, Y, ie;
      if (!((j = u.optionsConfig.http) != null && j.resource)) return;
      let M = {
        ...(Y = u.optionsConfig.http) == null ? void 0 : Y.data
      };
      ee.searchKeyForResource !== "" && (M[ee.searchKeyForResource] = w.value);
      const $ = (re) => {
        var ue, fe, le, ye;
        u.autoLoading && u.optionsConfig.autoloadResource && l("autoload-start"), typeof ((fe = (ue = u.optionsConfig.http) == null ? void 0 : ue.events) == null ? void 0 : fe.onStart) == "function" && ((ye = (le = u.optionsConfig.http) == null ? void 0 : le.events) == null || ye.onStart(re));
      }, te = (re) => {
        var ue, fe, le, ye;
        u.autoLoading && u.optionsConfig.autoloadResource && l("autoload-end"), typeof ((fe = (ue = u.optionsConfig.http) == null ? void 0 : ue.events) == null ? void 0 : fe.onEnd) == "function" && ((ye = (le = u.optionsConfig.http) == null ? void 0 : le.events) == null || ye.onEnd(re));
      };
      return {
        resource: (ie = u.optionsConfig.http) == null ? void 0 : ie.resource,
        resourceData: M,
        events: {
          httpStart: $,
          httpEnd: te
        }
      };
    }), z = X(() => u.autoLoading ? "div" : "lkt-tooltip"), V = X(() => u.isAutoCompleteText || I.value || O.value ? k.value : u.referrer);
    return Et(() => {
      u.isAutoCompleteText && (w.value = f.value), F();
    }), (M, $) => {
      var ie, re, ue, fe;
      const te = me("lkt-tag"), j = me("lkt-table"), Y = me("lkt-button");
      return W(), ae(Oe, null, [
        M.isAutoCompleteText ? (W(), ae("div", ir, [
          Me(be("input", {
            "onUpdate:modelValue": $[0] || ($[0] = (le) => w.value = le),
            ref_key: "queryField",
            ref: k,
            value: w.value,
            placeholder: M.searchPlaceholder,
            disabled: L.value.length === M.max,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: _,
            onBlur: C,
            onFocus: S
          }, null, 40, lr), [
            [xt, w.value]
          ])
        ])) : !M.autoLoading && (I.value || O.value) ? (W(), ae("div", nr, [
          M.multiple ? (W(), J(te, Ve(pe({ key: 0 }, {
            icon: M.optionsConfig.icon,
            text: L.value.length
          })), null, 16)) : L.value.length > 0 ? (W(), J(te, Ve(pe({ key: 1 }, {
            icon: L.value[0].icon ?? M.optionsConfig.icon,
            text: L.value[0].label
          })), null, 16)) : oe("", !0),
          Me(be("input", {
            "onUpdate:modelValue": $[1] || ($[1] = (le) => w.value = le),
            ref_key: "queryField",
            ref: k,
            value: w.value,
            placeholder: M.searchPlaceholder,
            disabled: L.value.length === M.max,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: _,
            onBlur: C,
            onFocus: S
          }, null, 40, or), [
            [xt, w.value]
          ])
        ])) : oe("", !0),
        !M.autoLoading && !M.isAutoCompleteText ? Me((W(), J(Y, pe({
          key: 2,
          ref_key: "selectButton",
          ref: n
        }, {
          type: H(g) || !(typeof ((ie = M.optionsConfig) == null ? void 0 : ie.canRenderDropdown) > "u" || ((re = M.optionsConfig) == null ? void 0 : re.canRenderDropdown) === !0) ? H(et).Content : H(et).Button,
          class: "lkt-field--toggle-button lkt-field--select-button"
        }, {
          onKeyup: B,
          onBlur: E,
          onFocus: R
        }), {
          default: Ce(() => [
            H(g) || M.multiple && L.value.length > 0 ? (W(), ae(Oe, { key: 0 }, [
              M.multipleDisplayEdition === H(Ct).Count ? (W(), ae("div", sr, ot(L.value.length), 1)) : M.multipleDisplayEdition === H(Ct).Table ? (W(), J(j, pe({
                key: 1,
                modelValue: L.value,
                "onUpdate:modelValue": $[2] || ($[2] = (le) => L.value = le)
              }, {
                ...M.optionsConfig.table,
                editMode: M.editable
              }), null, 16, ["modelValue"])) : (W(), J(j, pe({
                key: 2,
                modelValue: L.value,
                "onUpdate:modelValue": $[3] || ($[3] = (le) => L.value = le)
              }, {
                type: H(Kt).Ul,
                editMode: M.editable,
                itemsContainerClass: `lkt-field-select-read multiple-display-${M.multipleDisplayEdition}`,
                itemSlotComponent: zi(st),
                itemSlotData: {
                  optionSlot: M.optionSlot,
                  previewMode: !0,
                  prop: M.prop,
                  isTag: H(g),
                  optionsConfig: M.optionsConfig
                },
                itemSlotEvents: {
                  clickIcon: Z
                }
              }), null, 16, ["modelValue"]))
            ], 64)) : !M.multiple && L.value.length > 0 ? (W(), J(st, Ve(pe({ key: 1 }, {
              item: L.value[0],
              data: {
                optionSlot: M.optionSlot,
                previewMode: !0,
                prop: M.prop,
                isTag: H(g),
                optionsConfig: M.optionsConfig
              }
            })), null, 16)) : oe("", !0)
          ]),
          _: 1
        }, 16)), [
          [Qe, !I.value || O.value]
        ]) : oe("", !0),
        typeof ((ue = M.optionsConfig) == null ? void 0 : ue.canRenderDropdown) > "u" || ((fe = M.optionsConfig) == null ? void 0 : fe.canRenderDropdown) === !0 ? (W(), J(pt(z.value), pe({
          key: 3,
          ref_key: "dropdownEl",
          ref: a,
          modelValue: s.value,
          "onUpdate:modelValue": $[5] || ($[5] = (le) => s.value = le)
        }, M.autoLoading ? {} : {
          class: "lkt-field--dropdown",
          referrer: V.value,
          referrerWidth: !0,
          locationX: H(Bt).LeftCorner,
          locationY: H(Lt).Bottom,
          ...M.tooltip
        }), {
          default: Ce(() => [
            M.autoLoading && !M.localAutoLoad || r.value ? Me((W(), J(j, pe({
              key: 0,
              ref: "optionList",
              modelValue: b.value,
              "onUpdate:modelValue": $[4] || ($[4] = (le) => b.value = le)
            }, {
              type: H(Kt).Ul,
              editMode: M.editable,
              paginator: U.value,
              events: {
                parseResults: (le) => {
                  var ye;
                  return (ye = M.optionsConfig.http) != null && ye.resource ? H(Ya)(H(wt)(H(d), u.prop), le, M.prop) : H(wt)(H(d), u.prop);
                }
              },
              itemDisplayChecker: (le) => {
                var ye;
                return H(Yt)(le, w.value, !0, (ye = M.optionsConfig) == null ? void 0 : ye.filter);
              },
              itemsContainerClass: "lkt-field--dropdown-options",
              itemContainerClass: (le, ye) => {
                let ze = [];
                return H(xn)(le, f.value, M.multiple) && ze.push("is-active"), o.value === ye && ze.push("is-focused"), le.disabled && ze.push("is-disabled"), ze.join(" ");
              },
              itemSlotComponent: zi(st),
              itemSlotData: {
                optionSlot: M.optionSlot,
                editable: M.editable,
                prop: M.prop,
                isTag: H(g),
                optionsConfig: M.optionsConfig,
                query: w.value,
                editableValue: f.value,
                multiple: M.multiple,
                focusedOptionIndex: o.value
              },
              itemSlotEvents: {
                click: (le, ye) => {
                  A(le);
                }
              }
            }, { onReadResponse: N }), null, 16, ["modelValue"])), [
              [Qe, !M.autoLoading]
            ]) : oe("", !0)
          ]),
          _: 1
        }, 16, ["modelValue"])) : oe("", !0)
      ], 64);
    };
  }
}), ar = { class: "lkt-calc--formula" }, rr = { class: "lkt-calc--custom-pad" }, ur = { class: "lkt-calc--pad" }, dr = { class: "lkt-calc--numeric-pad" }, cr = { class: "lkt-calc--math-pad" }, fr = { class: "lkt-calc--advance-math-pad" }, hr = /* @__PURE__ */ ke({
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
    const i = t, l = e, n = Q(l.modelValue), a = Q(null);
    se(n, (p) => i("update:modelValue", p));
    const u = Q(l.focusing), f = Q(null);
    let o;
    const g = () => {
      clearTimeout(o), a.value && typeof a.value.focus == "function" && a.value.focus();
    }, d = (p) => {
      n.value += "" + p, g();
    }, b = (p) => {
      n.value += " " + p + " ", g();
    }, x = (p) => {
      n.value += " " + p + "(", g();
    }, w = () => {
      n.value += " sqrt(", g();
    }, k = (p) => {
      n.value += "" + p, g();
    }, L = () => {
      n.value += ".", g();
    }, s = () => {
      n.value += " ", g();
    }, r = (p) => {
      n.value += "" + p.value, g();
    }, c = () => {
      u.value = !0;
    }, h = () => {
      o = setTimeout(() => {
        u.value = !1;
      }, 100);
    };
    return se(u, (p) => {
      i(p ? "focus" : "blur");
    }), (p, v) => {
      const m = me("lkt-button"), y = me("lkt-tooltip");
      return W(), ae("div", {
        ref_key: "container",
        ref: f
      }, [
        be("div", ar, [
          Me(be("input", {
            type: "text",
            ref_key: "input",
            ref: a,
            "onUpdate:modelValue": v[0] || (v[0] = (C) => n.value = C),
            onFocus: c,
            onBlur: h
          }, null, 544), [
            [xt, n.value]
          ])
        ]),
        p.editable ? (W(), J(y, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: u.value,
          "onUpdate:modelValue": v[27] || (v[27] = (C) => u.value = C),
          referrer: f.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: Ce(() => [
            be("div", rr, [
              (W(!0), ae(Oe, null, at(p.options, (C) => (W(), J(m, {
                icon: C.icon,
                text: C.label,
                onClick: (_) => r(C)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            be("div", ur, [
              be("div", dr, [
                de(m, {
                  onClick: v[1] || (v[1] = (C) => d(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                de(m, {
                  onClick: v[2] || (v[2] = (C) => d(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                de(m, {
                  onClick: v[3] || (v[3] = (C) => d(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                de(m, {
                  onClick: v[4] || (v[4] = (C) => d(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                de(m, {
                  onClick: v[5] || (v[5] = (C) => d(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                de(m, {
                  onClick: v[6] || (v[6] = (C) => d(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                de(m, {
                  onClick: v[7] || (v[7] = (C) => d(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                de(m, {
                  onClick: v[8] || (v[8] = (C) => d(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                de(m, {
                  onClick: v[9] || (v[9] = (C) => d(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                de(m, {
                  onClick: v[10] || (v[10] = (C) => L()),
                  text: "."
                }),
                de(m, {
                  onClick: v[11] || (v[11] = (C) => d(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                de(m, {
                  onClick: v[12] || (v[12] = (C) => s()),
                  text: " "
                })
              ]),
              be("div", cr, [
                de(m, {
                  onClick: v[13] || (v[13] = (C) => k("[")),
                  text: "["
                }),
                de(m, {
                  onClick: v[14] || (v[14] = (C) => k("]")),
                  text: "]"
                }),
                de(m, {
                  onClick: v[15] || (v[15] = (C) => k("(")),
                  text: "("
                }),
                de(m, {
                  onClick: v[16] || (v[16] = (C) => k(")")),
                  text: ")"
                }),
                de(m, {
                  onClick: v[17] || (v[17] = (C) => b("+")),
                  text: "+"
                }),
                de(m, {
                  onClick: v[18] || (v[18] = (C) => b("-")),
                  text: "−"
                }),
                de(m, {
                  onClick: v[19] || (v[19] = (C) => b("*")),
                  text: "×"
                }),
                de(m, {
                  onClick: v[20] || (v[20] = (C) => b("/")),
                  text: "÷"
                })
              ]),
              be("div", fr, [
                de(m, {
                  onClick: v[21] || (v[21] = (C) => w()),
                  text: "√"
                }),
                de(m, {
                  onClick: v[22] || (v[22] = (C) => x("log")),
                  text: "log"
                }),
                de(m, {
                  onClick: v[23] || (v[23] = (C) => x("ln")),
                  text: "ln"
                }),
                de(m, {
                  onClick: v[24] || (v[24] = (C) => x("sin")),
                  text: "sin"
                }),
                de(m, {
                  onClick: v[25] || (v[25] = (C) => x("cos")),
                  text: "cos"
                }),
                de(m, {
                  onClick: v[26] || (v[26] = (C) => x("tan")),
                  text: "tan"
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : oe("", !0)
      ], 512);
    };
  }
}), pr = /* @__PURE__ */ ke({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = X(() => {
      let f = ul(t.validation.code, t.stack), o = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, g = ul(t.validation.status + "-" + t.validation.code, t.stack);
      return g && (f = g), f ? f.startsWith("__:") ? $l(f.substring(3), o) : Qn(f, o, ":", "") : t.validation.code;
    }), l = X(() => ee.validationIconSlot !== ""), n = X(() => ee.validationIconSlot), a = X(() => {
      let f = [];
      return f.push("code-" + t.validation.code), f.push("is-" + t.validation.status), f.join(" ");
    }), u = X(() => {
      switch (t.validation.status) {
        case Se.Ok:
          return ee.validationIconOk;
        case Se.Ko:
          return ee.validationIconKo;
        case Se.Info:
          return ee.validationIconInfo;
      }
    });
    return (f, o) => {
      const g = me("lkt-icon");
      return W(), ae("div", {
        class: Ke(["lkt-field-validation-message", a.value])
      }, [
        u.value && typeof u.value == "string" ? (W(), J(g, Ve(pe({ key: 0 }, {
          icon: u.value
        })), null, 16)) : u.value && typeof u.value == "object" ? (W(), J(g, Ve(pe({ key: 1 }, u.value)), null, 16)) : l.value ? (W(), J(pt(n.value), { key: 2 })) : oe("", !0),
        Ni(" " + ot(i.value), 1)
      ], 2);
    };
  }
}), mr = {
  key: 0,
  class: "lkt-field-validation-info"
}, gr = /* @__PURE__ */ ke({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = Q(t.items), l = Q(!1);
    return se(() => t.items, (n) => {
      l.value = !0, Ge(() => l.value = !1);
    }, { deep: !0 }), (n, a) => l.value ? oe("", !0) : (W(), ae("div", mr, [
      (W(!0), ae(Oe, null, at(i.value, (u) => (W(), J(pr, {
        validation: u,
        stack: n.stack,
        key: u.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), vr = ["id"], br = /* @__PURE__ */ ke({
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
    const i = t, l = e, n = Q(l.modelValue), a = Q(l.focusing);
    let u, f;
    const o = Q({}), g = () => {
      clearTimeout(f), f = setTimeout(() => {
        o.value = {
          query: n.value
        };
      }, 300);
    }, d = () => {
      a.value = !0;
    }, b = () => {
      u = setTimeout(() => {
        a.value = !1;
      }, 100);
    };
    se(a, (w) => {
      i(w ? "focus" : "blur");
    });
    const x = () => {
      clearTimeout(u), setTimeout(() => {
        d();
      }, 100);
    };
    return (w, k) => {
      const L = me("lkt-table"), s = me("lkt-tooltip");
      return W(), ae(Oe, null, [
        Me(be("input", {
          id: w.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": k[0] || (k[0] = (r) => n.value = r),
          onFocus: d,
          onBlur: b,
          onKeyup: g
        }, null, 40, vr), [
          [xt, n.value]
        ]),
        w.editable && w.hadFirstFocus ? (W(), J(s, pe({
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: a.value,
          "onUpdate:modelValue": k[1] || (k[1] = (r) => a.value = r)
        }, {
          ...w.tooltip,
          referrer: w.container,
          referrerWidth: !0,
          locationX: H(Bt).LeftCorner,
          locationY: H(Lt).Bottom
        }), {
          default: Ce(() => [
            de(L, pe({
              type: H(Kt).Ul,
              itemsContainerClass: "lkt-field--dropdown-options",
              paginator: {
                resource: w.optionsResource,
                resourceData: o.value
              },
              itemSlotComponent: zi(st),
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
        }, 16, ["modelValue"])) : oe("", !0)
      ], 64);
    };
  }
}), yr = {
  key: 0,
  class: "lkt-field-main"
}, _r = {
  key: 3,
  class: "lkt-field--read-value"
}, Cr = ["innerHTML", "title"], wr = ["title"], kr = { key: 0 }, xr = ["title"], Sr = ["innerHTML"], Tr = ["innerHTML", "title"], Er = ["innerHTML", "title"], Lr = /* @__PURE__ */ ke({
  __name: "LktFieldValue",
  props: {
    type: { default: K.Text },
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
    multipleDisplay: { default: Ct.List },
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
    const i = t, l = $i(), n = e, a = () => i("click"), u = X(() => {
      switch (n.type) {
        case K.Select:
          if (n.multiple && Array.isArray(n.value) && n.value.length > 0 || n.multiple && n.multipleDisplay === Ct.Count || !n.multiple && n.value) return "";
          break;
        case K.Date:
          if (n.value !== "") return "";
          break;
        default:
          if (n.value !== "") return "";
      }
      return ee.customValueSlots[n.emptyValueSlot] ?? ee.defaultEmptyValueSlot;
    }), f = X(() => ee.customValueSlots[n.valueSlot] ?? ""), o = X(() => {
      var d;
      let g = n.value;
      return n.type === K.Select && n.multiple && !Array.isArray(g) && (g = []), (n.type === K.Textarea || n.type === K.Text) && (typeof ((d = n.readModeConfig) == null ? void 0 : d.textMaxLength) < "u" && g.length > n.readModeConfig.textMaxLength ? g = g.substring(0, n.readModeConfig.textMaxLength) + "..." : typeof ee.readTextMaxLength < "u" && g.length > ee.readTextMaxLength && (g = g.substring(0, ee.readTextMaxLength) + "...")), g;
    });
    return (g, d) => {
      const b = me("lkt-loader"), x = me("lkt-image"), w = me("lkt-button"), k = me("lkt-anchor"), L = me("lkt-tag"), s = me("lkt-table");
      return W(), ae("div", {
        class: "lkt-field--read",
        onClick: a
      }, [
        g.isLoading ? (W(), J(b, { key: 0 })) : H(l).value ? Xe(g.$slots, "value", {
          key: 1,
          value: o.value,
          title: g.title,
          data: g.slotData
        }) : u.value ? (W(), J(pt(u.value), {
          key: 2,
          data: g.slotData
        }, null, 8, ["data"])) : f.value ? (W(), J(pt(f.value), {
          key: 3,
          value: o.value,
          title: g.title,
          data: g.slotData
        }, null, 8, ["value", "title", "data"])) : (W(), ae(Oe, { key: 4 }, [
          g.type === H(K).File || g.type === H(K).Image ? (W(), ae("div", yr, [
            de(w, {
              class: "lkt-field--toggle-button",
              text: g.type === H(K).File ? g.fileName : "",
              disabled: ""
            }, {
              default: Ce(() => [
                g.type === H(K).Image ? (W(), J(x, {
                  key: 0,
                  src: o.value,
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : oe("", !0),
                g.type === H(K).Image ? (W(), J(x, {
                  key: 1,
                  src: o.value,
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : oe("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : g.type === H(K).Email ? (W(), J(k, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: g.title,
            to: o.value
          }, {
            default: Ce(() => [
              Ni(ot(o.value), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : g.type === H(K).Tel ? (W(), J(k, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: g.title,
            to: o.value
          }, {
            default: Ce(() => [
              Ni(ot(o.value), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : H(lt).includes(g.type) ? (W(), ae("div", _r, [
            de(L, {
              icon: o.value ? "lkt-icn-check" : "lkt-icn-cancel",
              "featured-text": g.label,
              title: g.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : g.type === H(K).Date ? (W(), ae("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: o.value,
            title: g.title
          }, null, 8, Cr)) : g.type === H(K).Select ? (W(), ae("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: g.title
          }, [
            g.multiple ? (W(), ae(Oe, { key: 0 }, [
              g.multipleDisplay === H(Ct).Count ? (W(), ae("div", kr, ot(o.value.length), 1)) : g.multipleDisplay === H(Ct).Table ? (W(), J(s, pe({
                key: 1,
                "model-value": o.value
              }, g.optionsConfig.table), null, 16, ["model-value"])) : o.value.length > 0 ? (W(), ae("ul", {
                key: 2,
                class: Ke(["lkt-field-select-read", `multiple-display-${g.multipleDisplay}`])
              }, [
                (W(!0), ae(Oe, null, at(o.value, (r, c) => {
                  var h;
                  return W(), ae("li", {
                    key: `${c}-${o.value[c].value}`,
                    title: (h = o.value[c]) == null ? void 0 : h.label
                  }, [
                    de(st, pe({ ref_for: !0 }, {
                      item: o.value[c],
                      data: {
                        optionSlot: g.optionSlot,
                        editable: !1,
                        prop: g.prop,
                        optionsConfig: g.optionsConfig
                      }
                    }), null, 16)
                  ], 8, xr);
                }), 128))
              ], 2)) : oe("", !0)
            ], 64)) : o.value.length > 0 ? (W(), J(st, Ve(pe({ key: 1 }, {
              item: o.value[0],
              data: {
                optionSlot: g.optionSlot,
                editable: !1,
                prop: g.prop,
                optionsConfig: g.optionsConfig
              }
            })), null, 16)) : oe("", !0)
          ], 8, wr)) : g.modal ? (W(), J(w, {
            key: 6,
            class: "lkt-field--read-value",
            title: g.title,
            modal: g.modal,
            "modal-key": g.modalKey,
            "modal-data": g.modalData
          }, {
            default: Ce(() => [
              be("div", { innerHTML: o.value }, null, 8, Sr)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : g.download ? (W(), J(st, Ve(pe({ key: 7 }, {
            item: { value: "", label: o.value },
            data: {
              optionSlot: g.optionSlot,
              editable: !1,
              prop: g.prop,
              optionsConfig: g.optionsConfig,
              anchor: g.anchor,
              download: g.download
            }
          })), null, 16)) : g.type === H(K).Number ? (W(), ae("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: g.title,
            title: g.title
          }, null, 8, Tr)) : (W(), ae("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: o.value,
            title: g.title
          }, null, 8, Er))
        ], 64))
      ]);
    };
  }
}), Br = ["name", "id", "disabled", "readonly", "placeholder", "accept"], zr = {
  key: 2,
  class: "lkt-button lkt-field--toggle-button"
}, Nr = { class: "lkt-grid-1" }, Rr = /* @__PURE__ */ ke({
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
    const l = i, n = e, a = Q(null), u = Q(null), f = Q(n.modelValue), o = Q(n.fileName), g = Q(n.uploading), d = (w) => {
      let k = w.target;
      if (k.files && k.files[0]) {
        o.value = k.files[0].name;
        const L = new FileReader();
        L.onload = (s) => {
          if (f.value = s.target.result, n.resource) {
            g.value = !0, l("uploading");
            let r = JSON.parse(JSON.stringify(n.resourceData));
            r.files = k.files[0], Zi(n.resource, r).then((c) => {
              if (g.value = !1, !c.success) {
                l("upload-error", c);
                return;
              }
              f.value = c.data, l("upload-success", c);
            }).catch((c) => {
              g.value = !1, l("upload-error", c);
            });
          }
        }, L.readAsDataURL(k.files[0]);
      }
      l("change", w);
    };
    se(f, (w) => l("update:modelValue", w)), se(o, (w) => l("update:fileName", w)), t({
      click: () => {
        var w;
        (w = u.value) == null || w.click();
      }
    });
    const b = Q(typeof n.fileBrowserConfig == "object" && Object.keys(n.fileBrowserConfig).length > 0), x = (w) => {
      f.value = w[0].src, l("picked-files", w);
    };
    return (w, k) => {
      const L = me("lkt-image"), s = me("lkt-button");
      return W(), ae(Oe, null, [
        be("input", {
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
        }, null, 40, Br),
        b.value ? w.isImage ? w.isImage ? (W(), ae("div", zr, [
          w.isImage ? (W(), J(L, {
            key: 0,
            src: f.value,
            class: "lkt-field--image-cover"
          }, null, 8, ["src"])) : oe("", !0),
          w.isImage ? (W(), J(L, {
            key: 1,
            src: f.value,
            class: "lkt-field--image-main"
          }, {
            overlay: Ce(() => [
              be("div", null, [
                be("div", Nr, [
                  oe("", !0),
                  de(s, pe({ ref: "fileBrowserButtonRef" }, {
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
          }, 8, ["src"])) : oe("", !0)
        ])) : oe("", !0) : (W(), J(s, {
          key: 1,
          ref_key: "buttonRef",
          ref: u,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: o.value,
          disabled: w.disabled
        }, null, 8, ["click-ref", "text", "disabled"])) : (W(), J(s, {
          key: 0,
          ref_key: "buttonRef",
          ref: u,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: w.isImage ? "" : o.value,
          disabled: w.disabled
        }, {
          default: Ce(() => [
            w.isImage ? (W(), J(L, {
              key: 0,
              src: f.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : oe("", !0),
            w.isImage ? (W(), J(L, {
              key: 1,
              src: f.value,
              class: "lkt-field--image-main"
            }, null, 8, ["src"])) : oe("", !0)
          ]),
          _: 1
        }, 8, ["click-ref", "text", "disabled"]))
      ], 64);
    };
  }
}), Ar = { class: "lkt-calendar" }, Ir = { class: "calendar" }, Dr = { class: "lkt-calendar--header-grid" }, Mr = ["innerHTML"], Vr = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, Hr = { class: "lkt-calendar--day lkt-calendar--filling-day" }, Or = /* @__PURE__ */ ke({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const i = t, l = e, n = Q(l.modelValue);
    se(() => l.modelValue, (h) => n.value = h, { deep: !0 }), se(n, (h) => i("update:modelValue", h), { deep: !0 });
    const a = Q(/* @__PURE__ */ new Date()), u = Q(/* @__PURE__ */ new Date());
    qi(n.value) && typeof n.value < "u" && (u.value = new Date(n.value.getFullYear(), n.value.getMonth(), n.value.getDate()));
    const f = Q(u.value.getFullYear()), o = Q(u.value.getMonth()), g = Q(!1), d = Q(Gt("Y-m", u.value));
    se(g, (h) => {
      h && Ge(() => g.value = !1);
    });
    const b = X(() => new Date(f.value, o.value + 1, 0).getDate()), x = X(() => new Date(f.value, o.value, 1).getDay()), w = () => {
      o.value > 11 && (o.value = 0, f.value += 1), o.value += 1, u.value.setFullYear(f.value, o.value), u.value = new Date(u.value), d.value = Gt("Y-m", u.value);
    }, k = () => {
      o.value < 0 && (o.value = 11, f.value -= 1), o.value -= 1, u.value.setFullYear(f.value, o.value), u.value = new Date(u.value), d.value = Gt("Y-m", u.value);
    }, L = (h) => typeof n.value > "u" || n.value.getFullYear() !== f.value || n.value.getMonth() !== o.value ? !1 : n.value.getDate() === h, s = (h) => typeof n.value > "u" || a.value.getFullYear() !== f.value || a.value.getMonth() !== o.value ? !1 : a.value.getDate() === h, r = (h) => ({
      "is-picked": L(h),
      "is-today": s(h)
    }), c = (h) => {
      var p;
      typeof n.value > "u" ? n.value = new Date(f.value, o.value, h) : ((p = n.value) == null || p.setFullYear(f.value, o.value, h), n.value = new Date(n.value));
    };
    return (h, p) => {
      const v = me("lkt-button");
      return W(), ae("div", Ar, [
        be("div", Ir, [
          be("header", Dr, [
            de(v, Ve(ht({
              class: "lkt-calendar--day",
              icon: "lkt-icn-triangle-left",
              events: {
                click: k
              }
            })), null, 16),
            be("div", {
              class: "lkt-calendar--header-text",
              innerHTML: d.value
            }, null, 8, Mr),
            de(v, Ve(ht({
              class: "lkt-calendar--day",
              icon: "lkt-icn-triangle-right",
              events: {
                click: w
              }
            })), null, 16)
          ]),
          g.value ? oe("", !0) : (W(), ae("div", Vr, [
            p[0] || (p[0] = Xn('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (W(!0), ae(Oe, null, at(x.value, (m) => (W(), ae("div", Hr))), 256)),
            (W(!0), ae(Oe, null, at(b.value, (m) => (W(), J(v, {
              class: Ke(["lkt-calendar--day", r(m)]),
              text: m.toString(),
              onClick: () => c(m)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        p[1] || (p[1] = be("div", { class: "display-selected" }, [
          be("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), Fr = /* @__PURE__ */ ke({
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
    const i = t, l = e, n = Q(void 0), a = Q(""), u = Q(""), f = Q(l.modelValue), o = X(() => {
      if (l.isDateTime) {
        if (ee.dateTimeReadFormat) return ee.dateTimeReadFormat;
        if (ee.langDateTimeReadFormat[l.lang]) return ee.langDateTimeReadFormat[l.lang];
        if (ee.defaultDateTimeReadFormat) return ee.defaultDateTimeReadFormat;
        if (l.isDateTime) return "Y-m-d H:i";
      }
      return ee.dateReadFormat ? ee.dateReadFormat : ee.langDateReadFormat[l.lang] ? ee.langDateReadFormat[l.lang] : ee.defaultDateReadFormat ? ee.defaultDateReadFormat : "Y-m-d";
    }), g = X(() => l.isDateTime ? "Y-m-d H:i" : "Y-m-d"), d = (w) => {
      let k = new Date(w);
      qi(k) && (n.value = k, l.isDateTime && (a.value = [_t(k.getHours(), 2, "0"), _t(k.getMinutes(), 2, "0")].join(":")));
    }, b = () => {
      u.value = Yl(n.value, o.value);
    };
    se(() => l.modelValue, (w) => {
      f.value = w, d(w);
    }), se(f, (w) => i("update:modelValue", w));
    const x = (w) => {
      var L, s;
      let k = w.split(":");
      k.length >= 2 && typeof n.value == "object" && ((L = n.value) == null || L.setHours(parseInt(k[0])), (s = n.value) == null || s.setMinutes(parseInt(k[1])), n.value = new Date(n.value));
    };
    return se(a, (w) => {
      x(w);
    }), se(n, (w) => {
      var k, L;
      if (typeof w > "u")
        f.value = "";
      else {
        let s = a.value.split(":");
        s.length >= 2 && typeof n.value == "object" && ((k = n.value) == null || k.setHours(parseInt(s[0])), (L = n.value) == null || L.setMinutes(parseInt(s[1]))), f.value = Gt(g.value, w);
      }
      b();
    }, { deep: !0 }), Et(() => {
      d(l.modelValue), b();
    }), (w, k) => {
      const L = me("lkt-field"), s = me("lkt-button");
      return W(), J(s, Ve(ht({
        type: H(et).Tooltip,
        icon: w.icon,
        class: "lkt-field--toggle-button",
        text: u.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: H(Lt).Bottom,
          locationX: H(Bt).LeftCorner
        }
      })), {
        tooltip: Ce(() => [
          de(Or, {
            modelValue: n.value,
            "onUpdate:modelValue": k[0] || (k[0] = (r) => n.value = r)
          }, null, 8, ["modelValue"]),
          w.isDateTime ? (W(), J(L, pe({
            key: 0,
            modelValue: a.value,
            "onUpdate:modelValue": k[1] || (k[1] = (r) => a.value = r)
          }, {
            type: H(K).Time
          }), null, 16, ["modelValue"])) : oe("", !0)
        ]),
        _: 1
      }, 16);
    };
  }
}), Oi = (e, t, i) => {
  if (t) {
    let l = '<i class="' + t + '"></i>';
    i ? e += l : e = l + e;
  }
  return e;
}, Ur = { key: 1 }, Sn = /* @__PURE__ */ ke({
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
    const l = Q(e.modelValue);
    return (n, a) => {
      const u = me("lkt-button");
      return W(), J(u, {
        modal: n.modal,
        "modal-key": n.modalKey,
        "modal-data": n.modalData
      }, {
        default: Ce(() => [
          l.value ? Xe(n.$slots, "item", {
            key: 0,
            item: l.value
          }) : (W(), ae("p", Ur, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), Pr = /* @__PURE__ */ ke({
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
    const t = $i(), i = e, l = Q(i.modelValue), n = X(() => typeof i.max == "boolean" || l.value.length < i.max ? ["modal-create"] : []);
    return (a, u) => {
      const f = me("lkt-table");
      return W(), J(f, {
        type: "item",
        modelValue: l.value,
        "onUpdate:modelValue": u[0] || (u[0] = (o) => l.value = o),
        perms: n.value,
        "edit-mode": a.editable,
        "new-value-generator": () => {
        },
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        "required-items-for-top-create": 999999
      }, {
        item: Ce(({ item: o, index: g, isLoading: d, canCreate: b, canRead: x, canUpdate: w, canDrop: k, doDrop: L }) => [
          de(Sn, {
            modelValue: l.value[g],
            "onUpdate:modelValue": (s) => l.value[g] = s,
            "item-type": a.itemType
          }, kt({ _: 2 }, [
            H(t).item ? {
              name: "item",
              fn: Ce(({ item: s }) => [
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
}), Wr = /* @__PURE__ */ ke({
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
    const i = t, l = e, n = X(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), a = () => i("click");
    return (u, f) => {
      const o = me("lkt-button");
      return W(), J(o, pe(u.config, {
        type: u.config.type ? u.config.type : H(et).FileUpload,
        resource: u.config.resource ?? u.fileUploadHttp.resource,
        "resource-data": u.config.resourceData ?? u.fileUploadHttp.data,
        text: u.insideEllipsis ? u.config.text : "",
        class: [n.value, "lkt-field--btn-file-upload"],
        icon: "lkt-icn-upload",
        onClick: a
      }), null, 16, ["type", "resource", "resource-data", "text", "class"]);
    };
  }
}), $r = { class: "lkt-time lkt-flex-column" }, Zr = /* @__PURE__ */ ke({
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
    const i = t, l = e, n = Q(l.hour), a = Q(l.minutes);
    return se(() => l.hour, (u) => n.value = u), se(() => l.minutes, (u) => a.value = u), se(n, (u) => i("update:hour", u)), se(a, (u) => i("update:minutes", u)), (u, f) => {
      const o = me("lkt-field");
      return W(), ae("div", $r, [
        de(o, pe({
          modelValue: n.value,
          "onUpdate:modelValue": f[0] || (f[0] = (g) => n.value = g)
        }, {
          type: H(K).Number,
          label: "Hour",
          canStep: !0,
          min: 0,
          max: 23
        }), null, 16, ["modelValue"]),
        de(o, pe({
          modelValue: a.value,
          "onUpdate:modelValue": f[1] || (f[1] = (g) => a.value = g)
        }, {
          type: H(K).Number,
          label: "Minutes",
          canStep: !0,
          min: 0,
          max: 59
        }), null, 16, ["modelValue"])
      ]);
    };
  }
}), qr = /* @__PURE__ */ ke({
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
    const i = t, l = e, n = /* @__PURE__ */ new Date(), a = Q(n.getHours()), u = Q(n.getMinutes()), f = Q(l.modelValue), o = (g) => {
      let d = g.split(":");
      d.length >= 2 && (a.value = parseInt(d[0]), u.value = parseInt(d[1]));
    };
    return se([a, u], (g) => {
      f.value = [_t(a.value, 2, "0"), _t(u.value, 2, "0")].join(":");
    }), se(() => l.modelValue, (g) => f.value = g), se(f, (g) => i("update:modelValue", g)), Et(() => {
      o(f.value), f.value = [_t(a.value, 2, "0"), _t(u.value, 2, "0")].join(":");
    }), (g, d) => {
      const b = me("lkt-button");
      return W(), J(b, Ve(ht({
        type: H(et).Tooltip,
        icon: g.icon,
        class: "lkt-field--toggle-button",
        text: f.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: H(Lt).Bottom,
          locationX: H(Bt).LeftCorner
        }
      })), {
        tooltip: Ce(() => [
          de(Zr, {
            hour: a.value,
            "onUpdate:hour": d[0] || (d[0] = (x) => a.value = x),
            minutes: u.value,
            "onUpdate:minutes": d[1] || (d[1] = (x) => u.value = x)
          }, null, 8, ["hour", "minutes"])
        ]),
        _: 1
      }, 16);
    };
  }
});
var ge = /* @__PURE__ */ ((e) => (e[e.TextInput = 0] = "TextInput", e[e.TextareaInput = 1] = "TextareaInput", e[e.HtmlInput = 2] = "HtmlInput", e[e.BooleanInput = 3] = "BooleanInput", e[e.MultipleColorInput = 4] = "MultipleColorInput", e[e.SingleColorInput = 5] = "SingleColorInput", e[e.FileInput = 6] = "FileInput", e[e.DateInput = 7] = "DateInput", e[e.TimeInput = 8] = "TimeInput", e[e.SelectInput = 9] = "SelectInput", e[e.CalcInput = 10] = "CalcInput", e[e.SearchInput = 11] = "SearchInput", e[e.MultipleCardInput = 12] = "MultipleCardInput", e[e.SingleCardInput = 13] = "SingleCardInput", e))(ge || {});
const jr = ["data-show-ui", "data-labeled"], Gr = ["for", "innerHTML"], Kr = { class: "lkt-field-content" }, Yr = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, Xr = {
  key: 1,
  class: "lkt-field--icon"
}, Jr = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Qr = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], eu = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], tu = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], iu = {
  key: 4,
  class: "lkt-field--info-nav"
}, Tt = /* @__PURE__ */ ke({
  __name: "LktField",
  props: /* @__PURE__ */ Jn({
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
  }, po(mo)),
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
    const l = i, n = $i(), a = e, u = eo(16), f = Q(!1), o = Q(!1);
    let g = We(a.modal, a.prop), d = We(a.modalKey, a.prop), b = We(a.icon, a.prop), x = We(a.download, a.prop), w = We(a.itemType, a.prop);
    !g && typeof w != "function" && w && typeof ee.modalPerItemType[w] < "u" && (g = ee.modalPerItemType[w]);
    const k = Q(null);
    let L = a.featuredButton, s = a.modelValue;
    a.multiple && ao.includes(a.type) ? (!s || !Array.isArray(s)) && (s = []) : lt.includes(a.type) ? typeof s != "boolean" && (s = !1) : [K.Date, K.DateTime].includes(a.type) && !b ? b = ee.defaultDateIcon : a.type === K.Time && !b ? b = "lkt-icn-clock" : a.type === K.Number && a.canStep && L === "" && (L = ee.defaultNumberFeaturedButton);
    const r = Q(s), c = Q(s), h = Q(a.valid === !0), p = Q(!0), v = Q(!1), m = Q(!1), y = Q(!1), C = Q(!1), _ = Q([]), S = Q(a.fileName), D = Q(a.fileName), E = Q(null), B = Q(!1), R = Q(!1), Z = Q([]), q = Q(!1), P = X(() => oo.value), O = X(() => (P.value, ee.dateReadFormat ? ee.dateReadFormat : ee.langDateReadFormat[P.value] ? ee.langDateReadFormat[P.value] : ee.defaultDateReadFormat ? ee.defaultDateReadFormat : "Y-m-d")), I = c, A = Q(typeof I.value == "object" ? JSON.parse(JSON.stringify(I.value)) : I.value), F = X(() => a.type === K.Textarea ? "textarea" : a.type === K.Html ? "div" : "input"), N = X(() => {
      if ([K.Date, K.DateTime].includes(a.type))
        return c.value !== r.value;
      if (a.type === K.Select && a.multiple && a.optionValueType !== "option") {
        let T = new jt({ v: A.value });
        return T.increment({ v: I.value }), T.changed();
      }
      return I.value !== A.value;
    }), U = X(() => typeof a.disabled == "function" ? a.disabled(a.prop) : a.disabled), z = X(() => {
      let T = 0;
      return De.value && ++T, rt.value && ++T, ut.value && ++T, qe.value && ++T, Ki.value && ++T, Yi.value && ++T, mt.value && ++T, we.value && ++T, zt.value && ++T, (a.customButtonText || a.customButtonClass) && ++T, typeof a.createButton == "object" && ++T, T > 0 && a.type === K.Textarea || T > 0 && a.type === K.Html || T > 0 && a.infoButtonEllipsis ? 1 : T;
    }), V = X(() => Ee.value && L === "i18n" || Ie.value && L === "password" || He.value && L === "subtract"), M = X(() => z.value > 0), $ = X(() => a.autocomplete === !0 ? "on" : "off"), te = X(() => {
      var T;
      return [K.Date, K.DateTime].includes(a.type) ? c.value !== "" : [K.Select].includes(a.type) ? (T = a.optionsConfig) != null && T.zeroMeansEmpty ? !(c.value === "" || c.value === 0) : c.value !== "" : I.value !== "";
    }), j = X(() => a.type === K.Password && v.value === !0 ? "text" : a.type === K.Email ? "email" : a.type === K.Password ? "password" : a.type === K.Number ? "number" : a.type === K.Tel ? "tel" : a.type === K.Search ? "search" : a.type === K.Color ? "color" : a.type === K.Range ? "range" : "text"), Y = X(() => {
      var G;
      const T = [];
      return T.push(`is-${a.type}`), lt.includes(a.type) && (T.push("is-boolean"), I.value && T.push("is-checked")), N.value && T.push("is-changed"), U.value && T.push("is-disabled"), a.multiple && T.push("is-multiple"), V.value && T.push("with-atn-btn"), M.value && T.push("with-info-btn"), a.mandatory && ne.value && T.push("is-mandatory-field"), ne.value && m.value && T.push("has-focus"), B.value && T.push("show-options"), a.searchable && q.value && T.push("is-searching"), a.hidden && T.push("lkt-hidden-field"), a.type !== K.Range && ((G = a.validation) == null ? void 0 : G.type) === ro.Auto && C.value && y.value && (_.value.length > 0 ? T.push("is-invalid") : T.push("is-valid")), [K.Textarea, K.Html].includes(a.type) && T.push("is-lg"), [K.Image].includes(a.type) && T.push("is-xl"), a.multiple && a.type === K.Select && T.push("is-lg"), a.multiple && (ne.value ? T.push(`has-multiple-display-${a.multipleDisplayEdition}`) : T.push(`has-multiple-display-${a.multipleDisplay}`)), z.value > 0 && T.push("has-icons", `has-icons-${z.value}`), T.push(ne.value ? "is-editable" : "is-read"), a.type !== K.Range && (T.push(h.value ? "is-valid" : "is-error"), T.push(te.value ? "is-filled" : "is-empty")), T.join(" ");
    }), ie = X(() => {
      var T;
      return typeof I.value == "number" ? (P.value, (T = ee.langNumberFormat[P.value]) != null && T.amountOfDecimals ? il(
        I.value,
        ee.langNumberFormat[P.value].amountOfDecimals,
        ee.langNumberFormat[P.value].decimalSeparator,
        ee.langNumberFormat[P.value].thousandsSeparator,
        ee.langNumberFormat[P.value].removeDecimalsIfZero
      ) : ee.amountOfDecimals ? il(
        I.value,
        ee.amountOfDecimals,
        ee.decimalSeparator,
        ee.thousandsSeparator,
        ee.removeDecimalsIfZero
      ) : I.value.toString()) : a.type === K.Html ? Fi(I.value) : I.value;
    }), re = X(() => {
      let T = We(a.min, a.prop);
      return typeof T == "string" ? parseFloat(T) : typeof T == "number" ? T : !1;
    }), ue = X(() => {
      let T = We(a.max, a.prop);
      return typeof T == "string" ? parseFloat(T) : typeof T == "number" ? T : !1;
    }), fe = X(() => {
      var T, G, ve, Re;
      if (lt.includes(a.type)) {
        if (I.value === !0 && typeof a.configOn == "object")
          return Oi(
            qt(((T = a.configOn) == null ? void 0 : T.label) ?? a.label),
            ((G = a.configOn) == null ? void 0 : G.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
        if (I.value !== !0 && typeof a.configOff == "object")
          return Oi(
            qt(((ve = a.configOff) == null ? void 0 : ve.label) ?? a.label),
            ((Re = a.configOff) == null ? void 0 : Re.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
      }
      return Oi(
        qt(a.label),
        a.labelIcon,
        a.labelIconAtEnd
      );
    }), le = X(() => qt(a.placeholder)), ye = X(() => qt(a.searchPlaceholder)), ze = X(() => typeof g == "function" ? g(a.prop) : We(g, a.prop)), ne = X(() => typeof a.readMode == "function" ? !a.readMode(a.prop) : !We(a.readMode, a.prop)), Ne = X(() => {
      if (typeof a.modalData == "function") return a.modalData(a.prop);
      if (typeof a.modalData == "string") return We(a.modalData, a.prop);
      if (typeof a.modalData == "object" && !Array.isArray(a.modalData)) {
        let T = {};
        for (let G in a.modalData)
          T[G] = We(a.modalData[G], a.prop);
        return T;
      }
      return a.modalData;
    }), xe = X(() => typeof b == "function" ? b(a.prop) : We(b, a.prop)), Je = X(() => a.type === K.File ? ee.acceptTypes.file : a.type === K.Image ? ee.acceptTypes.image : ""), Ue = X(() => a.errorMessage), Ze = X(() => a.infoMessage), He = X(() => a.canStep && ne.value && a.type === K.Number), we = X(() => a.canStep && ne.value && a.type === K.Number && L !== "subtract"), zt = X(() => a.canStep && ne.value && a.type === K.Number), Ye = X(() => a.canUndo && N.value && ne.value && !uo.includes(a.type)), Fe = X(() => a.canClear && te.value && ne.value && !co.includes(a.type)), Ee = X(() => a.canI18n && typeof c.value == "object" && ne.value), Ie = X(() => a.type === K.Password && a.showPassword && te.value && ne.value), De = X(() => Ye.value && !a.infoButtonEllipsis), rt = X(() => Fe.value && !a.infoButtonEllipsis), ut = X(() => Ie.value && !a.infoButtonEllipsis && L !== "password"), qe = X(() => Ee.value && !a.infoButtonEllipsis && L !== "i18n"), mt = X(() => a.type === K.Select), Ki = X(() => a.allowReadModeSwitch && !a.infoButtonEllipsis), Yi = X(() => typeof a.fileUploadButton == "object" && Object.keys(a.fileUploadButton).length > 0), Xi = () => {
      Ge(() => {
        k.value && k.value.focus();
      });
    }, Tn = async () => {
      var G;
      let T = [];
      if ((G = a.validation) != null && G.resource) {
        l("validating");
        const ve = await Zi(a.validation.resource, {
          ...a.validation.resourceData,
          value: I.value
        });
        if (ve) {
          let Re = ve.data === !0;
          !Re && I.value === r.value && (Re = !0), T.push(Le.createRemoteResponse(ve, Re ? Se.Ok : Se.Ko));
        }
        l("validation", ve);
      }
      return T;
    }, Pe = Q({});
    a.canI18n && typeof a.modelValue == "object" && !Array.isArray(a.modelValue) && (Pe.value = JSON.parse(JSON.stringify(a.modelValue)) ?? {});
    const En = Q(new jt(Pe.value));
    se(Pe, (T) => {
      let G = new jt(En.value.getOriginalData());
      G.increment(T), G.changed() && (l("update:modelValue", T), gt && clearTimeout(gt), gt = setTimeout(() => {
        dt();
      }, 150));
    }, { deep: !0 }), se(() => {
      var T;
      return (T = a.validation) == null ? void 0 : T.checkEqualTo;
    }, () => dt()), se(() => a.valid, (T) => h.value = T), se(() => a.modelValue, (T) => {
      if ([K.Card].includes(a.type))
        I.value = T;
      else if (Ae.value === ge.DateInput)
        I.value = T;
      else if (a.canI18n) {
        let G = new jt(Pe.value);
        G.increment(T), G.changed() && (Pe.value = JSON.parse(JSON.stringify(T)) ?? {});
      } else
        I.value = T;
    }, { deep: !0 }), se(I, (T) => {
      typeof T == "object" && !Array.isArray(T) && ![K.Card].includes(a.type) ? c.value[P.value] = T : c.value = T, a.type === K.Number && Un(T);
    }, { deep: !0 });
    let gt;
    se(c, (T) => {
      var G;
      R.value && ne.value && (l("update:modelValue", T), typeof ((G = a.events) == null ? void 0 : G.changed) == "function" && a.events.changed({
        prop: a.prop
      }), gt && clearTimeout(gt), gt = setTimeout(() => {
        dt();
      }, 150));
    }, { deep: !0 }), se(h, (T) => {
      l("update:valid", T);
    });
    const dt = async () => {
      _.value = [];
      const T = await Tn(), G = Ln(), ve = [...T, ...G];
      let Re = ve.filter((ft) => ft.status === Se.Ko).length === 0;
      p.value = Re, a.type !== K.Range && (_.value = ve, h.value = Re, l("validation-status", ve));
    }, Ln = () => {
      var ft, Nt, Rt, At, It, Dt, Mt, Vt, Ht, Ot, Ft, Be, it;
      let T = [], G = I.value;
      a.canI18n && (G = Pe[P]);
      let ve = re.value, Re = ue.value;
      if (a.type === K.Number && typeof a.min < "u" && typeof a.max < "u" && (G < ve || G > Re))
        return T.push(Le.createNumBetween(ve, Re, Se.Ko)), h.value = !1, T;
      if (a.mandatory) {
        switch (a.type) {
          case K.Select:
            a.multiple && Z.value.length === 0 ? T.push(Le.createEmpty(Se.Ko)) : !a.multiple && !G && T.push(Le.createEmpty(Se.Ko));
            break;
          case K.Html:
            to(Fi(G)).length === 0 && T.push(Le.createEmpty(Se.Ko));
            break;
          default:
            ![K.Number].includes(a.type) && G === "" && T.push(Le.createEmpty(Se.Ko));
        }
        if (T.length > 0) return T;
      }
      return ve > 0 && (a.type !== K.Number && G.length < ve ? T.push(Le.createMinStr(ve, Se.Ko)) : G < ve && T.push(Le.createMinNum(ve, Se.Ko))), Re > 0 && (a.type !== K.Number && G.length > Re ? T.push(Le.createMaxStr(Re, Se.Ko)) : G > Re && T.push(Le.createMaxNum(Re, Se.Ko))), a.type === K.Email && (io(G) || T.push(Le.createEmail(Se.Ko))), fo.includes(a.type) && (Do(T, G, (ft = a.validation) == null ? void 0 : ft.minNumbers, (Nt = a.validation) == null ? void 0 : Nt.maxNumbers), Mo(T, G, (Rt = a.validation) == null ? void 0 : Rt.minUpperChars, (At = a.validation) == null ? void 0 : At.maxUpperChars), Vo(T, G, (It = a.validation) == null ? void 0 : It.minLowerChars, (Dt = a.validation) == null ? void 0 : Dt.maxLowerChars), Ho(T, G, (Mt = a.validation) == null ? void 0 : Mt.minChars, (Vt = a.validation) == null ? void 0 : Vt.maxChars), Oo(T, G, (Ht = a.validation) == null ? void 0 : Ht.minSpecialChars, (Ot = a.validation) == null ? void 0 : Ot.maxSpecialChars)), (Ft = a.validation) != null && Ft.checkEqualTo && G !== ((Be = a.validation) == null ? void 0 : Be.checkEqualTo) && T.push(Le.createEqualTo((it = a.validation) == null ? void 0 : it.checkEqualTo, Se.Ko)), T;
    }, Bn = X(() => {
      var T;
      return !(_.value.length === 0 || ((T = a.validation) == null ? void 0 : T.trigger) === ho.Blur && (!y.value || !C.value));
    }), Ai = () => {
      var T;
      switch (Ae.value) {
        case ge.HtmlInput:
          k.value && k.value.setValue(A.value);
          return;
        case ge.DateInput:
          c.value = r.value;
          return;
        case ge.FileInput:
          c.value = r.value, D.value = S.value;
          return;
        case ge.SelectInput:
          (T = k.value) == null || T.doUndo(A.value);
          return;
        default:
          I.value = A.value;
      }
    }, Ji = () => {
      var T;
      switch (Ae.value) {
        case ge.HtmlInput:
          k.value && k.value.setValue("");
          return;
        case ge.DateInput:
          c.value = "";
          return;
        case ge.FileInput:
          c.value = "", D.value = "";
          return;
        case ge.SelectInput:
          (T = k.value) == null || T.doClear();
          return;
        default:
          I.value = "";
      }
    }, zn = () => I.value, Jt = (T) => {
      l("keyup", T);
    }, Nn = () => {
      k.value && k.value.keepFocused();
    }, Rn = () => {
      if (B.value) {
        if (a.type === K.Select) {
          Vi();
          return;
        }
        return bt();
      }
      if (a.type === K.Select) {
        Mi();
        return;
      }
      return vt();
    }, Qt = (T) => l("keydown", T), vt = (T) => {
      C.value = !0, m.value = !0, dt(), l("focus", T);
    }, bt = (T) => {
      setTimeout(() => {
        if (!(a.searchable && q.value)) {
          if (a.multiple) {
            B.value = !0, m.value = !0;
            return;
          }
          y.value = !0, B.value = !1, m.value = !1, dt(), l("blur", T);
        }
      }, 100);
    }, Ii = (T) => {
      C.value = !0, m.value = !0, l("focus", T);
    }, Di = (T) => {
      y.value = !0, m.value = !1, l("blur", T);
    }, Mi = () => {
      C.value = !0, m.value = !0, dt(), a.searchable && Nn(), l("focus");
    }, Vi = () => {
      y.value = !0, m.value = !1, l("blur");
    }, tt = (T) => {
      l("change", T, I.value);
    }, ct = (T) => {
      l("click", T);
    }, An = (T) => l("click-info", T), In = (T) => l("click-error", T), Qi = () => {
      let T = a.step ?? 1;
      typeof T == "string" && (T = parseFloat(T));
      let G = String(T).split(".")[0].length, ve = parseFloat(I.value);
      isNaN(ve) && (ve = 0), (!re.value || ve > re.value) && (I.value = parseFloat((ve - T).toFixed(G)));
    }, Dn = () => {
      let T = a.step ?? 1;
      typeof T == "string" && (T = parseFloat(T));
      let G = String(T).split(".")[0].length, ve = parseFloat(I.value);
      isNaN(ve) && (ve = 0), (!ue.value || ve < ue.value) && (I.value = parseFloat((ve + T).toFixed(G)));
    }, Mn = () => {
      ne.value && Xi();
    }, Vn = (T) => {
      sl({
        text: nt.defaultUploadSuccessText,
        details: nt.defaultUploadSuccessDetails,
        icon: nt.defaultUploadSuccessIcon,
        positionX: ll.Right
      }), l("upload-success", T);
    }, Hn = (T) => {
      sl({
        text: nt.defaultUploadErrorText,
        details: nt.defaultUploadErrorDetails,
        icon: nt.defaultUploadErrorIcon,
        positionX: ll.Right
      }), l("upload-error", T);
    }, On = () => {
      l("uploading");
    }, Fn = (T) => {
      l("picked-files", T);
    }, Un = (T) => {
      if (!a.enableAutoNumberFix) return !1;
      let G = Number(T), ve = xo(G, re.value, ue.value);
      return G !== ve ? (I.value = ve, !0) : !1;
    };
    t({
      Identifier: u,
      reset: Ai,
      focus: Xi,
      value: zn,
      isMandatory: () => a.mandatory,
      isFormValid: () => p.value,
      isValid: () => h.value,
      click: () => {
        var T;
        switch (a.type) {
          case K.File:
            return (T = k.value) == null ? void 0 : T.click();
        }
        E.value.click();
      }
    });
    const Pn = X(() => a.editSlot !== "" && typeof ee.customEditSlots[a.editSlot] < "u"), Wn = X(() => ee.customEditSlots[a.editSlot]);
    Et(() => {
      a.type === K.Select && a.multiple && (q.value = !0), dt(), R.value = !0;
    });
    const $n = X(() => lt.includes(a.type) && !U.value ? "label" : "div"), Zn = X(() => lt.includes(a.type) ? {
      for: u
    } : {}), qn = X(() => {
      switch (a.type) {
        case K.Select:
          return Z.value;
        case K.Date:
        case K.DateTime:
          return Yl(c.value, O.value);
        case K.File:
        case K.Image:
          return c.value;
        default:
          return a.canI18n ? Pe.value[P.value] : I.value;
      }
    }), jn = X(() => typeof a.canRender == "function" ? a.canRender({
      prop: a.prop
    }) : typeof a.canRender == "boolean" ? a.canRender : !0), Gn = X(() => typeof a.canDisplay == "function" ? a.canDisplay({
      prop: a.prop
    }) : typeof a.canDisplay == "boolean" ? a.canDisplay : !0), Ae = X(() => {
      var T, G;
      if (lt.includes(a.type)) return ge.BooleanInput;
      switch (a.type) {
        case K.Color:
          return a.multiple ? ge.MultipleColorInput : ge.SingleColorInput;
        case K.Card:
          return a.multiple ? ge.MultipleCardInput : ge.SingleCardInput;
        case K.File:
        case K.Image:
          return ge.FileInput;
        case K.Date:
        case K.DateTime:
          return ge.DateInput;
        case K.Time:
          return ge.TimeInput;
        case K.Select:
          return ge.SelectInput;
        case K.Calc:
          return ge.CalcInput;
        case K.Search:
          return ge.SearchInput;
        case K.Html:
          return ge.HtmlInput;
        default:
          if (F.value === "input")
            return a.options.length > 0 || (T = a.optionsConfig) != null && T.http && Object.keys((G = a.optionsConfig) == null ? void 0 : G.http).length > 0 ? ge.SelectInput : ge.TextInput;
          if (F.value === "textarea")
            return ge.TextareaInput;
      }
    });
    return (T, G) => {
      var Re, ft, Nt, Rt, At, It, Dt, Mt, Vt, Ht, Ot, Ft;
      const ve = me("lkt-button");
      return jn.value ? Me((W(), ae("div", {
        key: 0,
        class: Ke(["lkt-field", Y.value]),
        "data-show-ui": M.value,
        "data-labeled": !H(n).label,
        ref_key: "container",
        ref: E
      }, [
        H(n).label ? Xe(T.$slots, "label", { key: 0 }) : oe("", !0),
        !H(n).label && fe.value !== "" && !H(lt).includes(T.type) ? (W(), ae("label", {
          key: 1,
          for: H(u),
          class: "lkt-field--label",
          innerHTML: fe.value
        }, null, 8, Gr)) : oe("", !0),
        be("div", Kr, [
          V.value ? (W(), ae("div", Yr, [
            T.featuredButton === "password" && Ie.value ? (W(), J(Ui, {
              key: 0,
              modelValue: v.value,
              "onUpdate:modelValue": G[0] || (G[0] = (Be) => v.value = Be),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : oe("", !0),
            Ee.value && H(L) === "i18n" && T.canI18n && E.value ? (W(), J(al, {
              key: 1,
              translations: Pe.value,
              "is-featured": "",
              referrer: E.value,
              type: T.type
            }, null, 8, ["translations", "referrer", "type"])) : oe("", !0),
            He.value && H(L) === "subtract" ? (W(), J(ve, pe({ key: 2 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              disabled: H(I) === re.value
            }, { onClick: Qi }), null, 16)) : oe("", !0)
          ])) : oe("", !0),
          xe.value && (!ne.value || ![H(K).Time, H(K).Date, H(K).DateTime].includes(T.type)) ? (W(), ae("div", Xr, [
            be("i", {
              class: Ke(xe.value)
            }, null, 2)
          ])) : oe("", !0),
          ne.value ? (W(), J(pt($n.value), pe({ key: 2 }, Zn.value, { class: "lkt-field-main" }), {
            default: Ce(() => {
              var Be, it, yt, Ut, Pt, Wt, $t, Zt;
              return [
                H(n).edit ? (W(), ae("div", {
                  key: 0,
                  onClick: ct
                }, [
                  Xe(T.$slots, "edit", {
                    value: c.value,
                    title: ie.value,
                    data: T.slotData
                  })
                ])) : Pn.value ? (W(), ae("div", {
                  key: 1,
                  onClick: ct
                }, [
                  (W(), J(pt(Wn.value), {
                    value: c.value,
                    title: ie.value,
                    data: T.slotData
                  }, null, 8, ["value", "title", "data"]))
                ])) : Ae.value === H(ge).BooleanInput ? (W(), J(qo, {
                  key: 2,
                  modelValue: H(I),
                  "onUpdate:modelValue": G[1] || (G[1] = (ce) => je(I) ? I.value = ce : null),
                  ref_key: "inputElement",
                  ref: k,
                  id: H(u),
                  name: T.name,
                  type: T.type,
                  label: fe.value,
                  editable: ne.value,
                  focusing: m.value,
                  disabled: U.value,
                  readonly: T.readonly,
                  onFocus: Ii,
                  onBlur: Di
                }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : Ae.value === H(ge).MultipleColorInput ? (W(), J(Io, {
                  key: 3,
                  modelValue: H(I),
                  "onUpdate:modelValue": G[2] || (G[2] = (ce) => je(I) ? I.value = ce : null),
                  ref_key: "inputElement",
                  ref: k,
                  "edit-mode": ne.value,
                  min: re.value,
                  max: ue.value
                }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : Ae.value === H(ge).SingleColorInput ? (W(), J(Xl, {
                  key: 4,
                  modelValue: H(I),
                  "onUpdate:modelValue": G[3] || (G[3] = (ce) => je(I) ? I.value = ce : null),
                  onChange: tt,
                  ref_key: "inputElement",
                  ref: k
                }, null, 8, ["modelValue"])) : Ae.value === H(ge).FileInput ? (W(), J(Rr, {
                  key: 5,
                  modelValue: c.value,
                  "onUpdate:modelValue": G[4] || (G[4] = (ce) => c.value = ce),
                  "file-name": D.value,
                  "onUpdate:fileName": G[5] || (G[5] = (ce) => D.value = ce),
                  ref_key: "inputElement",
                  ref: k,
                  id: H(u),
                  tabindex: T.tabindex,
                  resource: (Be = T.fileUploadHttp) == null ? void 0 : Be.resource,
                  "resource-data": (it = T.fileUploadHttp) == null ? void 0 : it.data,
                  name: T.name,
                  placeholder: le.value,
                  accept: Je.value,
                  focusing: m.value,
                  disabled: U.value,
                  readonly: T.readonly,
                  "is-image": T.type === H(K).Image,
                  "file-browser-config": T.fileBrowserConfig,
                  onChange: tt,
                  onUploading: On,
                  onUploadSuccess: Vn,
                  onUploadError: Hn,
                  onPickedFiles: Fn
                }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image", "file-browser-config"])) : Ae.value === H(ge).DateInput ? (W(), J(Fr, {
                  key: 6,
                  modelValue: c.value,
                  "onUpdate:modelValue": G[6] || (G[6] = (ce) => c.value = ce),
                  id: H(u),
                  tabindex: T.tabindex,
                  lang: P.value,
                  name: T.name,
                  icon: xe.value,
                  "is-date-time": H(K).DateTime === T.type
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name", "icon", "is-date-time"])) : Ae.value === H(ge).TimeInput ? (W(), J(qr, {
                  key: 7,
                  modelValue: c.value,
                  "onUpdate:modelValue": G[7] || (G[7] = (ce) => c.value = ce),
                  id: H(u),
                  tabindex: T.tabindex,
                  lang: P.value,
                  name: T.name,
                  icon: xe.value
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name", "icon"])) : Ae.value === H(ge).SelectInput ? (W(), J(Wl, pe({
                  key: 8,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: H(I),
                  "onUpdate:modelValue": G[8] || (G[8] = (ce) => je(I) ? I.value = ce : null),
                  "show-options": B.value,
                  "onUpdate:showOptions": G[9] || (G[9] = (ce) => B.value = ce),
                  "picked-options": Z.value,
                  "onUpdate:pickedOptions": G[10] || (G[10] = (ce) => Z.value = ce)
                }, {
                  searchable: T.searchable,
                  searchMode: q.value,
                  multiple: T.multiple,
                  canTag: T.canTag,
                  options: T.options,
                  optionsConfig: T.optionsConfig,
                  optionSlot: T.optionSlot,
                  editable: ne.value,
                  focusing: m.value,
                  searchPlaceholder: ye.value,
                  multipleDisplayEdition: T.multipleDisplayEdition,
                  prop: T.prop,
                  max: ue.value,
                  tooltip: T.tooltipConfig,
                  events: T.events,
                  optionValueType: T.optionValueType,
                  referrer: E.value,
                  isAutoCompleteText: T.type !== H(K).Select
                }, {
                  onFocus: Mi,
                  onBlur: Vi,
                  onChange: tt
                }), null, 16, ["modelValue", "show-options", "picked-options"])) : Ae.value === H(ge).CalcInput ? (W(), J(hr, {
                  key: 9,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: H(I),
                  "onUpdate:modelValue": G[11] || (G[11] = (ce) => je(I) ? I.value = ce : null),
                  id: H(u),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: ne.value,
                  focusing: m.value,
                  disabled: U.value,
                  readonly: T.readonly,
                  options: T.options,
                  onFocus: Ii,
                  onBlur: Di
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : Ae.value === H(ge).SearchInput ? (W(), J(br, {
                  key: 10,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: H(I),
                  "onUpdate:modelValue": G[12] || (G[12] = (ce) => je(I) ? I.value = ce : null),
                  id: H(u),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: ne.value,
                  focusing: m.value,
                  "had-first-focus": C.value,
                  disabled: U.value,
                  readonly: T.readonly,
                  "options-resource": (Ut = (yt = T.optionsConfig) == null ? void 0 : yt.http) == null ? void 0 : Ut.resource,
                  container: E.value,
                  tooltip: T.tooltipConfig,
                  onFocus: Ii,
                  onBlur: Di
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container", "tooltip"])) : Ae.value === H(ge).MultipleCardInput ? (W(), J(Pr, {
                  key: 11,
                  modelValue: H(I),
                  "onUpdate:modelValue": G[13] || (G[13] = (ce) => je(I) ? I.value = ce : null),
                  id: H(u),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: ne.value,
                  focusing: m.value,
                  "had-first-focus": C.value,
                  disabled: U.value,
                  readonly: T.readonly,
                  "options-resource": (Wt = (Pt = T.optionsConfig) == null ? void 0 : Pt.http) == null ? void 0 : Wt.resource,
                  modal: ze.value,
                  "modal-key": H(d),
                  "modal-data": Ne.value,
                  "item-type": H(w)
                }, kt({ _: 2 }, [
                  H(n)["item-" + H(w)] ? {
                    name: "item",
                    fn: Ce(({ item: ce }) => [
                      Xe(T.$slots, "item-" + H(w), { item: ce })
                    ]),
                    key: "0"
                  } : H(n).item ? {
                    name: "item",
                    fn: Ce(({ item: ce }) => [
                      Xe(T.$slots, "item", { item: ce })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : Ae.value === H(ge).SingleCardInput ? (W(), J(Sn, {
                  key: 12,
                  modelValue: H(I),
                  "onUpdate:modelValue": G[14] || (G[14] = (ce) => je(I) ? I.value = ce : null),
                  id: H(u),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: ne.value,
                  focusing: m.value,
                  "had-first-focus": C.value,
                  disabled: U.value,
                  readonly: T.readonly,
                  "options-resource": (Zt = ($t = T.optionsConfig) == null ? void 0 : $t.http) == null ? void 0 : Zt.resource,
                  modal: ze.value,
                  "modal-key": H(d),
                  "modal-data": Ne.value,
                  "item-type": H(w)
                }, kt({ _: 2 }, [
                  H(n)["item-" + H(w)] ? {
                    name: "item",
                    fn: Ce(({ item: ce }) => [
                      Xe(T.$slots, "item-" + H(w), { item: ce })
                    ]),
                    key: "0"
                  } : H(n).item ? {
                    name: "item",
                    fn: Ce(({ item: ce }) => [
                      Xe(T.$slots, "item", { item: ce })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : T.canI18n && Ae.value === H(ge).TextInput ? Me((W(), ae("input", {
                  key: 13,
                  "onUpdate:modelValue": G[15] || (G[15] = (ce) => Pe.value[P.value] = ce),
                  ref: (ce) => k.value = ce,
                  value: Pe.value[P.value],
                  type: j.value,
                  name: T.name,
                  id: H(u),
                  disabled: U.value,
                  readonly: T.readonly,
                  placeholder: le.value,
                  tabindex: T.tabindex,
                  autocomplete: $.value,
                  min: re.value,
                  max: ue.value,
                  step: T.step,
                  onKeyup: Jt,
                  onKeydown: Qt,
                  onFocus: vt,
                  onBlur: bt,
                  onClick: ct,
                  onChange: tt
                }, null, 40, Jr)), [
                  [tl, Pe.value[P.value]]
                ]) : Ae.value === H(ge).TextInput ? Me((W(), ae("input", {
                  key: 14,
                  "onUpdate:modelValue": G[16] || (G[16] = (ce) => je(I) ? I.value = ce : null),
                  ref: (ce) => k.value = ce,
                  value: H(I),
                  type: j.value,
                  name: T.name,
                  id: H(u),
                  disabled: U.value,
                  readonly: T.readonly,
                  placeholder: le.value,
                  tabindex: T.tabindex,
                  autocomplete: $.value,
                  min: re.value,
                  max: ue.value,
                  step: T.step,
                  onKeyup: Jt,
                  onKeydown: Qt,
                  onFocus: vt,
                  onBlur: bt,
                  onClick: ct,
                  onChange: tt
                }, null, 40, Qr)), [
                  [tl, H(I)]
                ]) : T.canI18n && Ae.value === H(ge).TextareaInput ? Me((W(), ae("textarea", {
                  key: 15,
                  "onUpdate:modelValue": G[17] || (G[17] = (ce) => Pe.value[P.value] = ce),
                  ref: (ce) => k.value = ce,
                  name: T.name,
                  id: H(u),
                  disabled: U.value,
                  readonly: T.readonly,
                  placeholder: le.value,
                  tabindex: T.tabindex,
                  autocomplete: $.value,
                  onKeyup: Jt,
                  onKeydown: Qt,
                  onFocus: vt,
                  onBlur: bt,
                  onClick: ct,
                  onChange: tt
                }, null, 40, eu)), [
                  [xt, Pe.value[P.value]]
                ]) : Ae.value === H(ge).TextareaInput ? Me((W(), ae("textarea", {
                  key: 16,
                  "onUpdate:modelValue": G[18] || (G[18] = (ce) => je(I) ? I.value = ce : null),
                  ref: (ce) => k.value = ce,
                  name: T.name,
                  id: H(u),
                  disabled: U.value,
                  readonly: T.readonly,
                  placeholder: le.value,
                  tabindex: T.tabindex,
                  autocomplete: $.value,
                  onKeyup: Jt,
                  onKeydown: Qt,
                  onFocus: vt,
                  onBlur: bt,
                  onClick: ct,
                  onChange: tt
                }, null, 40, tu)), [
                  [xt, H(I)]
                ]) : Ae.value === H(ge).HtmlInput ? (W(), J(Ka, {
                  key: 17,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: H(I),
                  "onUpdate:modelValue": G[19] || (G[19] = (ce) => je(I) ? I.value = ce : null),
                  id: H(u),
                  tabindex: T.tabindex,
                  name: T.name,
                  lang: P.value,
                  editable: ne.value,
                  focusing: m.value,
                  disabled: U.value,
                  readonly: T.readonly,
                  onFocus: vt,
                  onBlur: bt
                }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : oe("", !0)
              ];
            }),
            _: 3
          }, 16)) : oe("", !0),
          ne.value ? oe("", !0) : (W(), J(Lr, {
            key: 3,
            value: qn.value,
            type: T.type,
            "is-loading": o.value,
            label: fe.value,
            title: ie.value,
            "file-name": D.value,
            "value-slot": T.valueSlot,
            "empty-value-slot": T.emptyValueSlot,
            "slot-data": T.slotData,
            download: H(x),
            anchor: (Re = T.optionsConfig) == null ? void 0 : Re.anchor,
            multiple: T.multiple,
            multipleDisplay: T.multipleDisplay,
            modal: ze.value,
            "modal-key": H(d),
            "modal-data": Ne.value,
            "options-config": T.optionsConfig,
            "option-slot": T.optionSlot,
            "options-download": (ft = T.optionsConfig) == null ? void 0 : ft.download,
            "options-modal": (Nt = T.optionsConfig) == null ? void 0 : Nt.modal,
            "options-modal-data": (Rt = T.optionsConfig) == null ? void 0 : Rt.modalData,
            "options-icon": (At = T.optionsConfig) == null ? void 0 : At.icon,
            "options-text": (It = T.optionsConfig) == null ? void 0 : It.text,
            "options-class": (Dt = T.optionsConfig) == null ? void 0 : Dt.class,
            "options-label-formatter": (Mt = T.optionsConfig) == null ? void 0 : Mt.labelFormatter,
            "read-mode-config": T.readModeConfig,
            prop: T.prop,
            onClick: ct
          }, kt({ _: 2 }, [
            H(n).value ? {
              name: "value",
              fn: Ce(() => [
                Xe(T.$slots, c.value, {
                  value: c.value,
                  title: ie.value,
                  data: T.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "is-loading", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "anchor", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "options-config", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-text", "options-class", "options-label-formatter", "read-mode-config", "prop"])),
          M.value ? (W(), ae("div", iu, [
            Me(de(jl, { onClick: Ai }, null, 512), [
              [Qe, De.value]
            ]),
            Me(de(Gl, { onClick: Ji }, null, 512), [
              [Qe, rt.value]
            ]),
            T.type === H(K).Number ? Me((W(), J(ve, pe({ key: 0 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              disabled: H(I) === re.value
            }, { onClick: Qi }), null, 16)), [
              [Qe, we.value]
            ]) : oe("", !0),
            T.type === H(K).Number ? Me((W(), J(ve, pe({ key: 1 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-more",
              disabled: H(I) === ue.value
            }, { onClick: Dn }), null, 16)), [
              [Qe, zt.value]
            ]) : oe("", !0),
            Ue.value ? (W(), J(ve, {
              key: 2,
              title: T.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-attention",
              onClick: In
            }, null, 8, ["title"])) : oe("", !0),
            Ze.value ? (W(), J(ve, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-info",
              onClick: An,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: Ce(() => [
                Ni(ot(T.infoMessage), 1)
              ]),
              _: 1
            })) : oe("", !0),
            ne.value && Yi.value ? (W(), J(Wr, {
              key: 4,
              config: T.fileUploadButton,
              "file-upload-http": T.fileUploadHttp
            }, null, 8, ["config", "file-upload-http"])) : oe("", !0),
            T.type === H(K).Password ? Me((W(), J(Ui, {
              key: 5,
              modelValue: v.value,
              "onUpdate:modelValue": G[20] || (G[20] = (Be) => v.value = Be)
            }, null, 8, ["modelValue"])), [
              [Qe, ut.value]
            ]) : oe("", !0),
            qe.value && E.value ? (W(), J(al, {
              key: 6,
              translations: Pe.value,
              type: T.type,
              referrer: E.value
            }, null, 8, ["translations", "type", "referrer"])) : oe("", !0),
            ne.value && Ki.value ? (W(), J(Kl, {
              key: 7,
              modelValue: ne.value,
              "onUpdate:modelValue": G[21] || (G[21] = (Be) => ne.value = Be),
              onClick: Mn
            }, null, 8, ["modelValue"])) : oe("", !0),
            T.customButtonText || T.customButtonClass ? (W(), J(ve, {
              key: 8,
              text: T.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: T.customButtonClass
            }, null, 8, ["text", "icon"])) : oe("", !0),
            typeof T.createButton == "object" && T.createButton && ne.value ? (W(), J(ve, pe({ key: 9 }, {
              icon: "lkt-icn-add",
              ...T.createButton,
              modalData: {
                ...T.createButton.modalData,
                events: {
                  onCreate: () => {
                    var Be, it, yt, Ut, Pt, Wt, $t, Zt;
                    T.createButton && typeof ((yt = (it = (Be = T.createButton) == null ? void 0 : Be.modalData) == null ? void 0 : it.events) == null ? void 0 : yt.onCreate) == "function" && ((Wt = (Pt = (Ut = T.createButton) == null ? void 0 : Ut.modalData) == null ? void 0 : Pt.events) == null || Wt.onCreate()), typeof (($t = T.events) == null ? void 0 : $t.itemCreated) == "function" && ((Zt = T.events) == null || Zt.itemCreated());
                  }
                }
              }
            }, { class: "lkt-field--info-btn" }), null, 16)) : oe("", !0),
            ne.value && typeof ((Vt = T.optionsConfig) == null ? void 0 : Vt.canRenderDropdown) > "u" || ((Ht = T.optionsConfig) == null ? void 0 : Ht.canRenderDropdown) === !0 ? Me((W(), J(So, {
              key: 10,
              onClick: Rn
            }, null, 512)), [
              [Qe, mt.value]
            ]) : oe("", !0),
            T.infoButtonEllipsis ? (W(), J(wo, {
              key: 11,
              "show-undo": Ye.value,
              "show-clear": Fe.value,
              "show-password": Ie.value,
              "show-edition": T.allowReadModeSwitch,
              "show-password-check": v.value,
              "onUpdate:showPasswordCheck": G[22] || (G[22] = (Be) => v.value = Be),
              "show-edition-check": ne.value,
              "onUpdate:showEditionCheck": G[23] || (G[23] = (Be) => ne.value = Be),
              onUndo: Ai,
              onClear: Ji
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : oe("", !0)
          ])) : oe("", !0)
        ]),
        ne.value && Bn.value ? (W(), J(gr, {
          key: 2,
          items: _.value,
          stack: (Ot = T.validation) == null ? void 0 : Ot.stack
        }, null, 8, ["items", "stack"])) : oe("", !0),
        R.value && T.type === H(K).Select ? (W(), J(Wl, pe({
          key: 3,
          ref_key: "inputElement",
          ref: k
        }, {
          modelValue: H(I),
          pickedOptions: Z.value,
          showOptions: B.value,
          searchable: T.searchable,
          searchMode: q.value,
          multiple: T.multiple,
          canTag: T.canTag,
          options: T.options,
          optionsConfig: T.optionsConfig,
          optionSlot: T.optionSlot,
          editable: ne.value,
          focusing: m.value,
          searchPlaceholder: ye.value,
          multipleDisplayEdition: T.multipleDisplayEdition,
          prop: T.prop,
          max: ue.value,
          tooltip: T.tooltipConfig,
          events: T.events,
          optionValueType: T.optionValueType,
          referrer: E.value,
          autoLoading: !0,
          localAutoLoad: !((Ft = T.optionsConfig) != null && Ft.autoloadResource)
        }, {
          onFocus: Mi,
          onBlur: Vi,
          onChange: tt,
          onLoaded: G[24] || (G[24] = (Be) => f.value = !0),
          onAutoloadStart: G[25] || (G[25] = (Be) => o.value = !0),
          onAutoloadEnd: G[26] || (G[26] = (Be) => o.value = !1)
        }), null, 16)) : oe("", !0)
      ], 10, jr)), [
        [Qe, Gn.value]
      ]) : oe("", !0);
    };
  }
}), lu = { class: "lkt-file-entity-main" }, nu = /* @__PURE__ */ ke({
  __name: "FileEntityBox",
  props: {
    modelValue: {}
  },
  emits: [
    "double-click"
  ],
  setup(e, { emit: t }) {
    const i = e, l = t, n = Q(i.modelValue), a = Q(0);
    let u;
    const f = () => {
      ++a.value, a.value === 1 ? u = setTimeout(() => {
        n.value.isPicked = !n.value.isPicked, a.value = 0;
      }, 225) : (clearTimeout(u), l("double-click", n.value), a.value = 0);
    }, o = X(() => n.value.isPicked ? "lkt-icn-checkbox" : "lkt-icn-checkbox-empty");
    return (g, d) => {
      const b = me("lkt-icon"), x = me("lkt-image");
      return W(), ae("div", {
        class: "lkt-file-entity-box",
        onClick: f
      }, [
        be("div", lu, [
          n.value.type !== H($e).Directory ? (W(), ae("i", {
            key: 0,
            class: Ke(["lkt-file-entity-picked-indicator", o.value])
          }, null, 2)) : oe("", !0),
          n.value.type === H($e).Directory ? (W(), J(b, Ve(pe({ key: 1 }, {
            icon: "lkt-icn-folder",
            text: n.value.name
          })), null, 16)) : n.value.type === H($e).Image ? (W(), J(x, Ve(pe({ key: 2 }, {
            src: n.value.src,
            text: n.value.name
          })), null, 16)) : oe("", !0)
        ])
      ]);
    };
  }
}), ou = { class: "lkt-file-entity-details" }, su = {
  key: 0,
  class: "lkt-grid-1"
}, au = /* @__PURE__ */ ke({
  __name: "FileEntityDetails",
  props: {
    editMode: { type: Boolean, default: !1 },
    modelValue: {},
    fileBrowserConfig: {}
  },
  setup(e) {
    const i = Q(e.modelValue);
    return (l, n) => {
      const a = me("lkt-field");
      return W(), ae("div", ou, [
        i.value.type === H($e).Image ? (W(), ae("div", su, [
          de(a, pe({
            modelValue: i.value.src,
            "onUpdate:modelValue": n[0] || (n[0] = (u) => i.value.src = u)
          }, {
            type: H(K).Image,
            label: "File",
            readMode: !l.editMode
          }), null, 16, ["modelValue"]),
          de(a, pe({
            modelValue: i.value.name,
            "onUpdate:modelValue": n[1] || (n[1] = (u) => i.value.name = u)
          }, {
            type: H(K).Text,
            label: "Name",
            readMode: !l.editMode
          }), null, 16, ["modelValue"])
        ])) : oe("", !0)
      ]);
    };
  }
}), ru = { class: "lkt-flex-row" }, uu = { class: "lkt-flex-col-3" }, du = { class: "lkt-flex-column" }, cu = { class: "lkt-flex-col-9" }, fu = /* @__PURE__ */ ke({
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
    const i = e, l = Q(!1), n = Q([]), a = Q({}), u = Q(void 0), f = Q(i.modelValue), o = (c) => {
      u.value = void 0, Ge(() => {
        u.value = c;
      });
    }, g = () => {
      var h, p, v;
      let c = new ol();
      c.parent = (h = u.value) == null ? void 0 : h.id, (v = (p = u.value) == null ? void 0 : p.children) == null || v.push(c), o(c);
    }, d = (c, h) => {
      for (let p in h) {
        if (h[p].id === c) return h[p];
        if (h[p].children.length > 0) {
          let v = d(c, h[p].children);
          if (v) return v;
        }
      }
    }, b = () => {
      var c, h;
      if ((c = u.value) != null && c.parent) {
        let p = d((h = u.value) == null ? void 0 : h.parent, n.value);
        p && o(p);
      }
    }, x = () => {
      let c = [];
      f.value.forEach((h) => {
        let p = d(h, n.value);
        p && c.push(p);
      }), typeof i.onConfirmSelection == "function" && i.onConfirmSelection(c), _o(i.modalName, i.modalKey);
    }, w = X(() => {
      var c;
      switch ((c = u.value) == null ? void 0 : c.type) {
        case $e.Image:
          return "lkt-icn-picture";
        case $e.Directory:
          return "lkt-icn-folder-open";
        default:
          return "";
      }
    }), k = (c) => {
      switch (c.type) {
        case $e.Image:
          return "lkt-icn-picture";
        case $e.Directory:
          return "lkt-icn-folder";
        default:
          return "";
      }
    }, L = (c) => {
      let h = k(c), p = {};
      return h !== "" && (p = {
        icon: h,
        position: bo.Start
      }), {
        key: String(c.id),
        type: yo.Anchor,
        anchor: {
          icon: p,
          text: c.name,
          type: ql.Action,
          events: {
            click: () => {
              o(c);
            }
          }
        },
        keepOpenOnChildClick: !0,
        // class?: string;
        // icon?: string;
        children: c.children ? c.children.map(L) : []
      };
    }, s = (c) => {
      c.forEach((h) => {
        var p;
        h.isPicked && f.value.push(h.id), ((p = h.children) == null ? void 0 : p.length) > 0 && s(h.children);
      });
    }, r = () => {
      var c, h;
      (h = (c = i.fileBrowserConfig) == null ? void 0 : c.http) != null && h.resource && (l.value = !0, Zi(i.fileBrowserConfig.http.resource, i.fileBrowserConfig.http.data).then((p) => {
        l.value = !1, n.value = p.data.map((v) => new ol(v)), n.value.length > 0 && o(n.value[0]), n.value.forEach((v, m) => {
          var C;
          let y = `unit-${m}`;
          a.value[y] = ((C = v.children) == null ? void 0 : C.map(L)) ?? [];
        });
      }).catch((p) => {
        l.value = !1;
      }));
    };
    return se(u, (c) => {
    }, { deep: !0 }), se(n, (c) => {
      f.value = [], s(n.value);
    }, { deep: !0 }), Et(() => {
      r();
    }), (c, h) => {
      const p = me("lkt-menu"), v = me("lkt-accordion"), m = me("lkt-button"), y = me("lkt-table"), C = me("lkt-item-crud"), _ = me("lkt-modal");
      return W(), J(_, {
        "modal-name": c.modalName,
        "modal-key": c.modalKey,
        "z-index": c.zIndex,
        title: "File Browser",
        class: "lkt-file-browser"
      }, {
        default: Ce(() => [
          be("div", ru, [
            be("div", uu, [
              (W(!0), ae(Oe, null, at(n.value, (S, D) => (W(), J(v, pe({ ref_for: !0 }, {
                modelValue: D === 0,
                title: S.name,
                toggleMode: H(go).Display,
                type: n.value.length === 1 ? H(Hi).Always : H(Hi).Auto
              }), {
                default: Ce(() => [
                  be("div", du, [
                    de(p, pe({ ref_for: !0 }, {
                      modelValue: a.value[`unit-${D}`]
                    }), null, 16)
                  ])
                ]),
                _: 2
              }, 1040))), 256))
            ]),
            be("div", cu, [
              u.value ? (W(), J(v, Ve(pe({ key: 0 }, {
                type: H(Hi).Always,
                icon: w.value,
                title: u.value.name
              })), {
                default: Ce(() => {
                  var S, D;
                  return [
                    [H($e).Directory, H($e).StorageUnit].includes(u.value.type) ? (W(), J(y, pe({
                      key: 0,
                      modelValue: u.value.children,
                      "onUpdate:modelValue": h[0] || (h[0] = (E) => u.value.children = E)
                    }, {
                      type: H(Kt).Item,
                      perms: [
                        H(ei).SwitchEditMode,
                        H(ei).Update,
                        H(ei).Edit,
                        H(ei).Create
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
                    }, { onClickCreate: g }), kt({
                      item: Ce(({ item: E, index: B }) => [
                        de(nu, {
                          modelValue: u.value.children[B],
                          "onUpdate:modelValue": (R) => u.value.children[B] = R,
                          onDoubleClick: o
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, [
                      u.value.type !== H($e).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: Ce(() => [
                          de(m, Ve(ht({
                            icon: "lkt-icn-arrow-left",
                            events: {
                              click: b
                            }
                          })), null, 16),
                          de(m, Ve(ht({
                            icon: "lkt-icn-check",
                            disabled: f.value.length === 0,
                            events: {
                              click: x
                            }
                          })), null, 16)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : (W(), J(C, pe({
                      key: 1,
                      modelValue: u.value,
                      "onUpdate:modelValue": h[2] || (h[2] = (E) => u.value = E)
                    }, {
                      view: H(vo).Inline,
                      mode: u.value.id ? H(nl).Update : H(nl).Create,
                      editing: !1,
                      perms: ["switch-edit-mode", "update"],
                      createButton: {
                        ...(S = c.fileBrowserConfig) == null ? void 0 : S.entityCreateButton,
                        resourceData: u.value,
                        events: {
                          click: () => {
                            for (let E in u.value)
                              c.modelValue[E] = c.entity[E];
                          }
                        }
                      },
                      updateButton: {
                        ...(D = c.fileBrowserConfig) == null ? void 0 : D.entityUpdateButton,
                        resourceData: u.value,
                        events: {
                          click: () => {
                            for (let E in u.value)
                              c.modelValue[E] = c.entity[E];
                          }
                        }
                      }
                    }), kt({
                      item: Ce(({ item: E, editMode: B }) => [
                        de(au, {
                          modelValue: u.value,
                          "onUpdate:modelValue": h[1] || (h[1] = (R) => u.value = R),
                          "file-browser-config": c.fileBrowserConfig,
                          "edit-mode": B
                        }, null, 8, ["modelValue", "file-browser-config", "edit-mode"])
                      ]),
                      _: 2
                    }, [
                      u.value.type !== H($e).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: Ce(() => [
                          de(m, Ve(ht({
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
              }, 16)) : oe("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modal-name", "modal-key", "z-index"]);
    };
  }
}), wu = (e, t) => (ee.customValueSlots[e] = t, !0), ku = (e, t) => (ee.customEditSlots[e] = t, !0), xu = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", Tt), Co("lkt-file-browser", fu));
  }
}, Su = (e) => {
  ee.defaultEmptyValueSlot = e;
}, Tu = (e, t) => {
  ee.optionSlots[e] = t;
}, Eu = (e) => ee.undoText = e, Lu = (e) => ee.clearText = e, Bu = (e) => ee.i18nText = e, zu = (e) => ee.switchEditionOnText = e, Nu = (e) => ee.switchEditionOffText = e, Ru = (e) => ee.showPasswordOnText = e, Au = (e) => ee.showPasswordOffText = e, Iu = (e) => ee.dateReadFormat = e, Du = (e) => ee.defaultDateReadFormat = e, Mu = (e, t, i = "default") => {
  i || (i = "default"), ee.validationMessages[i] || (ee.validationMessages[i] = {}), ee.validationMessages[i][e] = t;
}, Vu = (e) => (ee.validationIconSlot = e, !0), Hu = (e) => (ee.validationIconOk = e, !0), Ou = (e) => (ee.validationIconKo = e, !0), Fu = (e) => (ee.validationIconInfo = e, !0), Uu = (e = 2, t = ".", i = ".", l = !0, n = "") => n !== "" ? (ee.langNumberFormat[n].amountOfDecimals = e, ee.langNumberFormat[n].decimalSeparator = t, ee.langNumberFormat[n].thousandsSeparator = i, ee.langNumberFormat[n].removeDecimalsIfZero = l, !0) : (ee.amountOfDecimals = e, ee.decimalSeparator = t, ee.thousandsSeparator = i, ee.removeDecimalsIfZero = l, !0), Pu = (e) => {
  ee.readTextMaxLength = e;
}, Wu = (e, t) => {
  ee.modalPerItemType[e] = t;
};
export {
  qu as Field,
  Tt as LktField,
  ju as Option,
  xu as default,
  Lu as setFieldClearText,
  Iu as setFieldDateReadFormat,
  Du as setFieldDefaultDateReadFormat,
  Su as setFieldEmptySlot,
  Bu as setFieldI18nText,
  Uu as setFieldNumberFormat,
  Tu as setFieldOptionSlot,
  Au as setFieldShowPasswordOffText,
  Ru as setFieldShowPasswordOnText,
  Nu as setFieldSwitchEditionOffText,
  zu as setFieldSwitchEditionOnText,
  Eu as setFieldUndoText,
  Fu as setFieldValidationIconInfo,
  Ou as setFieldValidationIconKo,
  Hu as setFieldValidationIconOk,
  Vu as setFieldValidationIconSlot,
  Mu as setFieldValidationMessage,
  Wu as setModalPerItemType,
  Pu as setReadTextMaxLength,
  ku as setTextEditSlot,
  wu as setTextValueSlot
};
